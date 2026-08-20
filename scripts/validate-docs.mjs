import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const repositoryRoot = process.cwd();
const configuredRoot = process.env.HANDBOOK_CONTENT_DIR || ".cache/handbook-repository";
const root = path.resolve(repositoryRoot, configuredRoot);
const ignoredDirectories = new Set([".git", ".github", ".astro", ".cache", "node_modules", "dist", "build", "coverage", "public", "scripts", "src"]);
const ignoredFiles = new Set([
  "agents.md",
  "agentguide.md",
  "readme.md",
  "contributing.md",
  "changelog.md",
  "index.md",
  "handbook_index.md",
  "currentstatus.md",
  "needtoimplement.md",
  "handbook_review_and_improvement_guide.md"
]);
const documents = [];
const markdownFiles = [];
const warnings = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) walk(path.join(directory, entry.name));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      const file = path.join(directory, entry.name);
      markdownFiles.push(file);
      if (!ignoredFiles.has(entry.name.toLowerCase())) documents.push(file);
    }
  }
}

if (!fs.existsSync(root)) {
  throw new Error(`Handbook content root does not exist: ${configuredRoot}. Run npm run sync:handbooks.`);
}
walk(root);
const known = new Set(markdownFiles.map((file) => path.normalize(file).toLowerCase()));
const routes = new Map();
const sectionRoutes = new Map();

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function humanize(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/[()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

for (const file of documents) {
  const relative = path.relative(repositoryRoot, file);
  const sourcePath = path.relative(root, file).replaceAll("\\", "/");
  const pathParts = sourcePath.split("/");
  const folderParts = pathParts.slice(0, -1);
  const routeParts = [
    ...folderParts.map(slugify),
    slugify(pathParts.at(-1).replace(/\.md$/i, ""))
  ];
  if (routeParts.some((part) => !part)) {
    throw new Error(`${relative}: path cannot be converted into a valid route`);
  }
  const route = `/handbooks/${routeParts.join("/")}/`;
  if (routes.has(route)) {
    throw new Error(`Duplicate handbook route ${route}: ${routes.get(route)} and ${sourcePath}`);
  }
  routes.set(route, sourcePath);

  for (let index = 0; index < folderParts.length; index++) {
    const sourceDirectory = folderParts.slice(0, index + 1).join("/");
    const sectionRoute = folderParts
      .slice(0, index + 1)
      .map((part, partIndex) => partIndex === 0 ? slugify(humanize(part)) : slugify(part))
      .join("/");
    if (!sectionRoute) throw new Error(`${relative}: folder cannot be converted into a valid route`);
    const existing = sectionRoutes.get(sectionRoute);
    if (existing && existing !== sourceDirectory) {
      throw new Error(`Duplicate section route /categories/${sectionRoute}/: ${existing} and ${sourceDirectory}`);
    }
    sectionRoutes.set(sectionRoute, sourceDirectory);
  }
  const source = fs.readFileSync(file, "utf8");
  if (!source.trim()) warnings.push(`${relative}: empty Markdown file`);
  try { matter(source); } catch (error) { throw new Error(`${relative}: invalid frontmatter (${error.message})`); }
  const prose = source
    .replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, "")
    .replace(/^~~~[^\n]*\n[\s\S]*?^~~~\s*$/gm, "");
  for (const match of prose.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const rawTarget = match[1].split(/\s+["']/)[0].split("#")[0];
    if (!rawTarget || /^(https?:|mailto:|tel:|data:|#)/i.test(rawTarget)) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(rawTarget));
    if (rawTarget.toLowerCase().endsWith(".md") && !known.has(path.normalize(target).toLowerCase())) {
      warnings.push(`${relative}: missing Markdown target ${rawTarget}`);
    } else if (!rawTarget.toLowerCase().endsWith(".md") && !fs.existsSync(target)) {
      warnings.push(`${relative}: missing asset ${rawTarget}`);
    }
  }
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);
console.log(`Validated ${documents.length} Markdown handbooks with ${warnings.length} warning(s).`);
