import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import type { CategoryMetadata, DocumentHeading, DocumentMetadata } from "@/types/documents";
import { humanize, slugify } from "@/utils/path";

let manifestCache: DocumentMetadata[] | undefined;

// GitHub configuration
const GITHUB_OWNER = "syndreno";
const GITHUB_REPO = "handbooks";
const GITHUB_BRANCH = "main";

interface IndexedFile {
  name: string;
  path: string;
  rawUrl: string;
}

interface HandbookIndex {
  files: IndexedFile[];
  generated: string;
}

/**
 * Load the pre-generated handbook index
 */
async function loadHandbookIndex(): Promise<HandbookIndex> {
  try {
    // Import the JSON directly (works at build time)
    const index = await import("@/data/handbook-index.json", {
      with: { type: "json" }
    });
    return index.default as HandbookIndex;
  } catch (error) {
    console.warn("⚠️ handbook-index.json not found. Run: node scripts/generate-index.mjs");
    return { files: [], generated: new Date().toISOString() };
  }
}

/**
 * Fetch raw markdown content from GitHub
 */
async function fetchMarkdownContent(filePath: string): Promise<string> {
  const rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${filePath}`;

  try {
    const response = await fetch(rawUrl);

    if (!response.ok) {
      console.error(`Failed to fetch: ${rawUrl} (${response.status})`);
      return "";
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${filePath}:`, error);
    return "";
  }
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

function extractHeadings(content: string): DocumentHeading[] {
  const headings: DocumentHeading[] = [];
  const slugger = new GithubSlugger();
  const tree = unified().use(remarkParse).parse(content);
  visit(tree, "heading", (node) => {
    const text = toString(node).trim();
    headings.push({ depth: node.depth, text, slug: slugger.slug(text) });
  });
  return headings;
}

/**
 * Create document metadata from GitHub markdown file
 */
async function createDocument(sourcePath: string): Promise<DocumentMetadata | null> {
  const source = await fetchMarkdownContent(sourcePath);

  if (!source) {
    return null;
  }

  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(source);
  } catch (error) {
    console.error(`Invalid frontmatter in ${sourcePath}:`, error);
    return null;
  }

  const pathParts = sourcePath.split("/");
  const fileName = pathParts.at(-1) ?? sourcePath;
  const folderParts = pathParts.slice(0, -1);
  const category = String(parsed.data.category || humanize(folderParts[0] || "General"));
  const categorySlug = slugify(category);
  const routeParts = [...folderParts.map(slugify), slugify(fileName.replace(/\.md$/i, ""))];
  const headings = extractHeadings(parsed.content);
  const firstH1 = headings.find((heading) => heading.depth === 1)?.text;
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
      ? parsed.data.tags
          .split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean)
      : [];
  const order = Number.isFinite(Number(parsed.data.order)) ? Number(parsed.data.order) : undefined;

  const githubUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${sourcePath}`;

  return {
    title,
    description,
    sourcePath,
    repositoryPath: sourcePath,
    absolutePath: githubUrl,
    sourceDirectory: folderParts.join("/"),
    route: `/handbooks/${routeParts.join("/")}/`,
    slug: routeParts.join("/"),
    category,
    categorySlug,
    subcategory: folderParts.length > 1 ? humanize(folderParts.at(-1)!) : undefined,
    tags,
    order,
    headings,
    wordCount: words.length,
    readingMinutes: Math.max(1, Math.ceil(words.length / 220)),
    codeExamples: (parsed.content.match(/^```/gm)?.length ?? 0) / 2,
    rawContent: parsed.content,
  };
}

/**
 * Get all documents from GitHub using pre-generated index
 */
export async function getDocuments(): Promise<DocumentMetadata[]> {
  if (manifestCache) return manifestCache;

  try {
    const index = await loadHandbookIndex();

    if (index.files.length === 0) {
      console.warn("⚠️ No files in handbook index. Please run: node scripts/generate-index.mjs");
      return [];
    }

    console.log(`📚 Loading ${index.files.length} handbooks from GitHub...`);

    const documents = (
      await Promise.all(index.files.map((file) => createDocument(file.path)))
    ).filter((doc): doc is DocumentMetadata => doc !== null);

    console.log(`✅ Loaded ${documents.length} valid handbooks`);

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
      if (a.order !== undefined || b.order !== undefined)
        return (a.order ?? 9999) - (b.order ?? 9999);
      return a.route.localeCompare(b.route);
    });

    return manifestCache;
  } catch (error) {
    console.error("Error loading documents from GitHub:", error);
    return [];
  }
}

export async function getCategories(documents?: DocumentMetadata[]): Promise<CategoryMetadata[]> {
  const docs = documents || (await getDocuments());
  const groups = new Map<string, DocumentMetadata[]>();

  for (const document of docs) {
    const group = groups.get(document.category) ?? [];
    group.push(document);
    groups.set(document.category, group);
  }

  return [...groups.entries()]
    .map(([name, docs]) => ({
      name,
      slug: docs[0].categorySlug,
      documents: docs,
      wordCount: docs.reduce((total, doc) => total + doc.wordCount, 0),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getDocumentNeighbors(
  document: DocumentMetadata,
  documents?: DocumentMetadata[]
): Promise<{ previous?: DocumentMetadata; next?: DocumentMetadata }> {
  const docs = documents || (await getDocuments());
  const index = docs.findIndex((d) => d.route === document.route);

  return {
    previous: index > 0 ? docs[index - 1] : undefined,
    next: index < docs.length - 1 ? docs[index + 1] : undefined,
  };
}

export async function getRelatedDocuments(
  document: DocumentMetadata,
  count = 3,
  documents?: DocumentMetadata[]
): Promise<DocumentMetadata[]> {
  const docs = documents || (await getDocuments());
  const categoryDocs = docs.filter(
    (d) => d.category === document.category && d.route !== document.route
  );
  return categoryDocs.slice(0, count);
}

export async function getSitewideStatistics(documents?: DocumentMetadata[]): Promise<{
  totalDocuments: number;
  totalWords: number;
  totalHeadings: number;
  totalCodeExamples: number;
  avgReadingMinutes: number;
  categories: number;
}> {
  const docs = documents || (await getDocuments());

  return {
    totalDocuments: docs.length,
    totalWords: docs.reduce((sum, d) => sum + d.wordCount, 0),
    totalHeadings: docs.reduce((sum, d) => sum + d.headings.length, 0),
    totalCodeExamples: docs.reduce((sum, d) => sum + d.codeExamples, 0),
    avgReadingMinutes: Math.round(
      docs.reduce((sum, d) => sum + d.readingMinutes, 0) / docs.length
    ),
    categories: new Set(docs.map((d) => d.category)).size,
  };
}
