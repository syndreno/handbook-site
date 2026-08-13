import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const repositoryRoot = process.cwd();
const root = path.join(repositoryRoot, "assets", "handbook");
const ignoredDirectories = new Set([".git", ".github", ".astro", ".cache", "node_modules", "dist", "build", "coverage", "public", "scripts", "src"]);
const ignoredFiles = new Set(["agents.md", "readme.md", "contributing.md", "changelog.md"]);
const documents = [];
const warnings = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) walk(path.join(directory, entry.name));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md") && !ignoredFiles.has(entry.name.toLowerCase())) {
      documents.push(path.join(directory, entry.name));
    }
  }
}

if (!fs.existsSync(root)) throw new Error("Handbook content root does not exist: assets/handbook");
walk(root);
const known = new Set(documents.map((file) => path.normalize(file).toLowerCase()));

for (const file of documents) {
  const relative = path.relative(repositoryRoot, file);
  const source = fs.readFileSync(file, "utf8");
  if (!source.trim()) warnings.push(`${relative}: empty Markdown file`);
  try { matter(source); } catch (error) { throw new Error(`${relative}: invalid frontmatter (${error.message})`); }
  for (const match of source.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
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
