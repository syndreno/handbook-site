import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site";
import type {
  CategoryMetadata,
  DocumentMetadata,
  DocumentSection,
  SectionMetadata
} from "@/types/documents";
import { humanize, slugify } from "@/utils/path";

let manifestCache: DocumentMetadata[] | undefined;
const indexTitleCache = new Map<string, string | undefined>();

interface CachedDocumentMetadata {
  sourcePath: string;
  title: string;
  description: string;
  tags: string[];
  order?: number;
  headingCount: number;
  wordCount: number;
  readingMinutes: number;
  codeExamples: number;
}

interface CachedManifest {
  version: number;
  documents: CachedDocumentMetadata[];
}

function walk(directory: string, root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    const relative = path.relative(root, target).replaceAll("\\", "/");

    if (entry.isDirectory()) {
      if (!siteConfig.content.excludedDirectories.includes(entry.name as never)) {
        files.push(...walk(target, root));
      }
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".md")) continue;
    const excluded = siteConfig.content.excludedFiles.some(
      (name) => name.toLowerCase() === entry.name.toLowerCase()
    );
    if (!excluded) files.push(relative);
  }
  return files;
}

function plainText(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHeadingText(value: string): string {
  return value
    .replace(/\s+#+\s*$/, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_~]/g, "")
    .trim();
}

function scanHeadingSummary(content: string): { count: number; firstH1?: string } {
  let count = 0;
  let firstH1: string | undefined;
  let fenceCharacter = "";
  let fenceLength = 0;
  let previousLine = "";

  for (const line of content.split(/\r?\n/)) {
    const fence = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (fence) {
      const marker = fence[1];
      if (!fenceCharacter) {
        fenceCharacter = marker[0];
        fenceLength = marker.length;
      } else if (marker[0] === fenceCharacter && marker.length >= fenceLength) {
        fenceCharacter = "";
        fenceLength = 0;
      }
      previousLine = "";
      continue;
    }
    if (fenceCharacter) continue;

    const atx = line.match(/^\s{0,3}(#{1,6})(?:[ \t]+|$)(.*)$/);
    if (atx) {
      const text = cleanHeadingText(atx[2]);
      if (text) {
        count++;
        if (atx[1].length === 1 && !firstH1) firstH1 = text;
      }
      previousLine = "";
      continue;
    }

    const setext = line.match(/^\s{0,3}(=+|-+)\s*$/);
    if (setext && previousLine.trim()) {
      const text = cleanHeadingText(previousLine);
      if (text) {
        count++;
        if (setext[1][0] === "=" && !firstH1) firstH1 = text;
      }
      previousLine = "";
      continue;
    }
    previousLine = line;
  }

  return { count, firstH1 };
}

function getIndexTitle(contentRoot: string, folderParts: string[]): string | undefined {
  const indexPath = path.join(contentRoot, ...folderParts, "INDEX.md");
  if (indexTitleCache.has(indexPath)) return indexTitleCache.get(indexPath);
  if (!fs.existsSync(indexPath)) return undefined;

  try {
    const parsed = matter(fs.readFileSync(indexPath, "utf8"));
    const title = scanHeadingSummary(parsed.content).firstH1;
    indexTitleCache.set(indexPath, title);
    return title;
  } catch (error) {
    throw new Error(
      `Invalid navigation index ${path.relative(contentRoot, indexPath)}: ${(error as Error).message}`
    );
  }
}

function createSectionRouteParts(folderParts: string[]): string[] {
  return folderParts.map((part, index) =>
    index === 0 ? slugify(humanize(part)) : slugify(part)
  );
}

function createSections(folderParts: string[], contentRoot: string): DocumentSection[] {
  const sections: DocumentSection[] = [];
  let parentTitle: string | undefined;

  for (let index = 0; index < folderParts.length; index++) {
    const sourceParts = folderParts.slice(0, index + 1);
    const indexTitle = getIndexTitle(contentRoot, sourceParts);
    const fallbackName = humanize(folderParts[index]);
    const prefix = parentTitle ? `${parentTitle} / ` : "";
    const name = indexTitle?.startsWith(prefix)
      ? indexTitle.slice(prefix.length).trim() || fallbackName
      : indexTitle || fallbackName;
    const routeParts = createSectionRouteParts(folderParts.slice(0, index + 1));
    if (routeParts.some((part) => !part)) {
      throw new Error(`Cannot generate a section route for ${sourceParts.join("/")}`);
    }

    sections.push({
      name,
      slug: routeParts.at(-1)!,
      path: routeParts.join("/"),
      sourceDirectory: sourceParts.join("/")
    });
    parentTitle = indexTitle || sections.map((section) => section.name).join(" / ");
  }

  return sections;
}

function readSourceMetadata(sourcePath: string, contentRoot: string): CachedDocumentMetadata {
  const absolutePath = path.join(contentRoot, sourcePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(source);
  } catch (error) {
    throw new Error(`Invalid frontmatter in ${sourcePath}: ${(error as Error).message}`);
  }

  const headingSummary = scanHeadingSummary(parsed.content);
  const firstH1 = headingSummary.firstH1;
  const fileName = path.posix.basename(sourcePath);
  const title = String(parsed.data.title || firstH1 || humanize(fileName));
  const bodyText = plainText(parsed.content);
  const words = bodyText ? bodyText.split(/\s+/) : [];
  const descriptionSource =
    String(parsed.data.description || "").trim() || bodyText.replace(title, "").trim();
  const description =
    descriptionSource.length > 170
      ? `${descriptionSource.slice(0, 167).trimEnd()}...`
      : descriptionSource || `Learn ${title} with this practical developer handbook.`;
  const tags = Array.isArray(parsed.data.tags)
    ? parsed.data.tags.map(String)
    : typeof parsed.data.tags === "string"
      ? parsed.data.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean)
      : [];
  const order = Number.isFinite(Number(parsed.data.order)) ? Number(parsed.data.order) : undefined;
  return {
    sourcePath,
    title,
    description,
    tags,
    order,
    headingCount: headingSummary.count,
    wordCount: words.length,
    readingMinutes: Math.max(1, Math.ceil(words.length / 220)),
    codeExamples: (parsed.content.match(/^```/gm)?.length ?? 0) / 2
  };
}

function createDocument(metadata: CachedDocumentMetadata, contentRoot: string): DocumentMetadata {
  const sourcePath = metadata.sourcePath;
  const pathParts = sourcePath.split("/");
  const fileName = pathParts.at(-1) ?? sourcePath;
  const folderParts = pathParts.slice(0, -1);
  const sections = createSections(folderParts, contentRoot);
  if (sections.length === 0) {
    sections.push({ name: "General", slug: "general", path: "general", sourceDirectory: "" });
  }
  const routeParts = [...folderParts.map(slugify), slugify(fileName.replace(/\.md$/i, ""))];
  if (routeParts.some((part) => !part)) {
    throw new Error(`Cannot generate a handbook route for ${sourcePath}`);
  }
  const repositoryPath = path.posix.join(siteConfig.content.repositoryRoot, sourcePath);
  const encodedRepositoryPath = repositoryPath.split("/").map(encodeURIComponent).join("/");

  return {
    ...metadata,
    repositoryPath,
    absolutePath: path.join(contentRoot, sourcePath),
    sourceUrl: `${siteConfig.content.repositoryUrl}/blob/${siteConfig.content.branch}/${encodedRepositoryPath}`,
    sourceDirectory: folderParts.join("/"),
    route: `/handbooks/${routeParts.join("/")}/`,
    slug: routeParts.join("/"),
    category: sections[0].name,
    categorySlug: sections[0].slug,
    subcategory: sections.length > 1 ? sections.at(-1)!.name : undefined,
    sections,
    headings: []
  };
}

function loadCachedMetadata(): CachedDocumentMetadata[] | undefined {
  const manifestPath = path.resolve(
    process.cwd(),
    process.env.HANDBOOK_MANIFEST_PATH || ".cache/handbook-manifest.json"
  );
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as CachedManifest;
    return manifest.version === 1 && Array.isArray(manifest.documents)
      ? manifest.documents
      : undefined;
  } catch {
    return undefined;
  }
}

export async function getDocuments(): Promise<DocumentMetadata[]> {
  if (manifestCache) return manifestCache;

  const contentRoot = path.resolve(process.cwd(), siteConfig.content.rootDirectory);
  if (!fs.existsSync(contentRoot)) {
    throw new Error(
      `Handbook content root does not exist: ${contentRoot}. Run npm run sync:handbooks.`
    );
  }

  const cachedMetadata = loadCachedMetadata();
  const metadata = cachedMetadata ?? walk(contentRoot, contentRoot).map((sourcePath) =>
    readSourceMetadata(sourcePath, contentRoot)
  );
  const documents = metadata.map((item) => createDocument(item, contentRoot));
  if (documents.length === 0) throw new Error(`No handbooks found in ${contentRoot}`);

  const routes = new Map<string, string>();
  for (const document of documents) {
    const duplicate = routes.get(document.route);
    if (duplicate) {
      throw new Error(
        `Duplicate generated route ${document.route}: ${duplicate} and ${document.sourcePath}`
      );
    }
    routes.set(document.route, document.sourcePath);
  }

  manifestCache = documents.sort((a, b) => {
    if (a.order !== undefined || b.order !== undefined) {
      return (a.order ?? 9999) - (b.order ?? 9999);
    }
    return a.route.localeCompare(b.route);
  });
  return manifestCache;
}

export async function getCategories(
  documents?: DocumentMetadata[]
): Promise<CategoryMetadata[]> {
  const docs = documents ?? (await getDocuments());
  const roots: SectionMetadata[] = [];

  for (const document of docs) {
    let siblings = roots;
    for (const [index, section] of document.sections.entries()) {
      let node = siblings.find((item) => item.path === section.path);
      if (!node) {
        node = {
          ...section,
          directDocuments: [],
          children: [],
          documents: [],
          wordCount: 0
        };
        siblings.push(node);
      } else if (node.sourceDirectory !== section.sourceDirectory) {
        throw new Error(
          `Duplicate section route /categories/${section.path}/: ${node.sourceDirectory} and ${section.sourceDirectory}`
        );
      }
      node.documents.push(document);
      node.wordCount += document.wordCount;
      if (index === document.sections.length - 1) node.directDocuments.push(document);
      siblings = node.children;
    }
  }

  const sortTree = (sections: SectionMetadata[]) => {
    sections.sort((a, b) => a.name.localeCompare(b.name));
    for (const section of sections) {
      section.directDocuments.sort((a, b) => a.title.localeCompare(b.title));
      sortTree(section.children);
    }
  };
  sortTree(roots);
  return roots;
}

export function flattenSections(categories: CategoryMetadata[]): SectionMetadata[] {
  return categories.flatMap((category) => [category, ...flattenSections(category.children)]);
}

export async function getDocumentNeighbors(
  document: DocumentMetadata,
  documents?: DocumentMetadata[]
): Promise<{ previous?: DocumentMetadata; next?: DocumentMetadata }> {
  const docs = documents ?? (await getDocuments());
  const categoryDocuments = docs.filter(
    (item) => item.categorySlug === document.categorySlug
  );
  const index = categoryDocuments.findIndex((item) => item.route === document.route);
  return {
    previous: index > 0 ? categoryDocuments[index - 1] : undefined,
    next: index < categoryDocuments.length - 1 ? categoryDocuments[index + 1] : undefined
  };
}

export async function getRelatedDocuments(
  document: DocumentMetadata,
  count = 4,
  documents?: DocumentMetadata[]
): Promise<DocumentMetadata[]> {
  const docs = documents ?? (await getDocuments());
  return docs
    .filter((item) => item.route !== document.route)
    .map((item) => ({
      item,
      score:
        (item.categorySlug === document.categorySlug ? 4 : 0) +
        item.tags.filter((tag) => document.tags.includes(tag)).length * 2 +
        (item.sourceDirectory === document.sourceDirectory ? 2 : 0)
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, count)
    .map(({ item }) => item);
}

export async function getSitewideStatistics(documents?: DocumentMetadata[]): Promise<{
  totalDocuments: number;
  totalWords: number;
  totalHeadings: number;
  totalCodeExamples: number;
  avgReadingMinutes: number;
  categories: number;
}> {
  const docs = documents ?? (await getDocuments());
  return {
    totalDocuments: docs.length,
    totalWords: docs.reduce((sum, document) => sum + document.wordCount, 0),
    totalHeadings: docs.reduce((sum, document) => sum + document.headingCount, 0),
    totalCodeExamples: docs.reduce((sum, document) => sum + document.codeExamples, 0),
    avgReadingMinutes: docs.length
      ? Math.round(docs.reduce((sum, document) => sum + document.readingMinutes, 0) / docs.length)
      : 0,
    categories: new Set(docs.map((document) => document.category)).size
  };
}
