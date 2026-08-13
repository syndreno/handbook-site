import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { siteConfig } from "@/config/site";
import type { CategoryMetadata, DocumentHeading, DocumentMetadata } from "@/types/documents";
import { humanize, slugify } from "@/utils/path";

let manifestCache: DocumentMetadata[] | undefined;

function walk(directory: string, root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relative = path.relative(root, path.join(directory, entry.name)).replaceAll("\\", "/");
    if (entry.isDirectory()) {
      if (!siteConfig.content.excludedDirectories.includes(entry.name as never)) {
        files.push(...walk(path.join(directory, entry.name), root));
      }
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      const isExcluded = siteConfig.content.excludedFiles.some(
        (name) => name.toLowerCase() === entry.name.toLowerCase()
      );
      if (!isExcluded) files.push(relative);
    }
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

function createDocument(sourcePath: string, contentRoot: string): DocumentMetadata {
  const absolutePath = path.join(contentRoot, sourcePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(source);
  } catch (error) {
    throw new Error(`Invalid frontmatter in ${sourcePath}: ${(error as Error).message}`);
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
  const descriptionSource = String(parsed.data.description || "").trim() ||
    bodyText.replace(title, "").trim();
  const description = descriptionSource.length > 170
    ? `${descriptionSource.slice(0, 167).trimEnd()}...`
    : descriptionSource || `Learn ${title} with this practical developer handbook.`;
  const tags = Array.isArray(parsed.data.tags)
    ? parsed.data.tags.map(String)
    : typeof parsed.data.tags === "string"
      ? parsed.data.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean)
      : [];
  const order = Number.isFinite(Number(parsed.data.order)) ? Number(parsed.data.order) : undefined;

  return {
    title,
    description,
    sourcePath,
    repositoryPath: path.posix.join(siteConfig.content.rootDirectory, sourcePath),
    absolutePath,
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
    rawContent: parsed.content
  };
}

export function getDocuments(): DocumentMetadata[] {
  if (manifestCache) return manifestCache;
  const contentRoot = path.join(process.cwd(), siteConfig.content.rootDirectory);
  if (!fs.existsSync(contentRoot)) {
    throw new Error(`Handbook content root does not exist: ${siteConfig.content.rootDirectory}`);
  }
  const documents = walk(contentRoot, contentRoot).map((sourcePath) =>
    createDocument(sourcePath, contentRoot)
  );
  const routes = new Map<string, string>();
  for (const document of documents) {
    const duplicate = routes.get(document.route);
    if (duplicate) {
      throw new Error(`Duplicate generated route ${document.route}: ${duplicate} and ${document.sourcePath}`);
    }
    routes.set(document.route, document.sourcePath);
  }
  manifestCache = documents.sort((a, b) => {
    if (a.order !== undefined || b.order !== undefined) return (a.order ?? 9999) - (b.order ?? 9999);
    return a.route.localeCompare(b.route);
  });
  return manifestCache;
}

export function getCategories(documents = getDocuments()): CategoryMetadata[] {
  const groups = new Map<string, DocumentMetadata[]>();
  for (const document of documents) {
    const group = groups.get(document.category) ?? [];
    group.push(document);
    groups.set(document.category, group);
  }
  return [...groups.entries()]
    .map(([name, docs]) => ({
      name,
      slug: docs[0].categorySlug,
      documents: docs,
      wordCount: docs.reduce((total, doc) => total + doc.wordCount, 0)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getDocumentNeighbors(document: DocumentMetadata, documents = getDocuments()) {
  const categoryDocuments = documents.filter((item) => item.categorySlug === document.categorySlug);
  const index = categoryDocuments.findIndex((item) => item.route === document.route);
  return {
    previous: index > 0 ? categoryDocuments[index - 1] : undefined,
    next: index < categoryDocuments.length - 1 ? categoryDocuments[index + 1] : undefined
  };
}

export function getRelatedDocuments(document: DocumentMetadata, documents = getDocuments()) {
  return documents
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
    .slice(0, 4)
    .map(({ item }) => item);
}

export function getSiteStats(documents = getDocuments()) {
  return {
    handbooks: documents.length,
    categories: getCategories(documents).length,
    words: documents.reduce((total, doc) => total + doc.wordCount, 0),
    codeExamples: Math.round(documents.reduce((total, doc) => total + doc.codeExamples, 0)),
    sections: documents.reduce((total, doc) => total + doc.headings.length, 0)
  };
}
