import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const repositoryRoot = process.cwd();
const handbookRoot = path.join(repositoryRoot, "assets", "handbook");
const outputPath = path.join(handbookRoot, "currentstatus.md");
const statusPath = path.join(repositoryRoot, "scripts", "handbook-review-status.json");
const excludedFiles = new Set([
  "agentguide.md",
  "handbook_review_and_improvement_guide.md",
  "currentstatus.md",
  "stats.md",
  "needtoimplement.md"
]);
const allowedStatuses = [
  "Not reviewed",
  "In review",
  "Needs expansion",
  "Needs technical verification",
  "Completed"
];

if (!fs.existsSync(handbookRoot)) throw new Error("Handbook directory does not exist: assets/handbook");

const statusFile = JSON.parse(fs.readFileSync(statusPath, "utf8"));
const activeReviewPath = statusFile._active || "";
const statusOverrides = Object.fromEntries(
  Object.entries(statusFile).filter(([key]) => key !== "_active")
);
const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolutePath);
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md") && !excludedFiles.has(entry.name.toLowerCase())) {
      files.push(absolutePath);
    }
  }
}

function humanize(value) {
  return value
    .replace(/\.md$/i, "")
    .replace(/[_(\-]+/g, " ")
    .replace(/\)+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function markdownLink(relativePath) {
  return `./${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

function tableText(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

walk(handbookRoot);
const knownPaths = new Set(files.map((file) => path.relative(handbookRoot, file).replaceAll("\\", "/")));

if (activeReviewPath && !knownPaths.has(activeReviewPath)) {
  throw new Error(`Active review references a missing handbook: ${activeReviewPath}`);
}

for (const [relativePath, review] of Object.entries(statusOverrides)) {
  if (!knownPaths.has(relativePath)) throw new Error(`Review status references a missing handbook: ${relativePath}`);
  if (!allowedStatuses.includes(review.status)) throw new Error(`Invalid review status for ${relativePath}: ${review.status}`);
}

const documents = files.map((absolutePath) => {
  const relativePath = path.relative(handbookRoot, absolutePath).replaceAll("\\", "/");
  const source = fs.readFileSync(absolutePath, "utf8");
  const parsed = matter(source);
  const firstH1 = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const fileName = path.posix.basename(relativePath);
  const categoryPath = path.posix.dirname(relativePath);
  const category = categoryPath === "." ? "General" : humanize(categoryPath.split("/")[0]);
  const text = plainText(parsed.content);
  const review = statusOverrides[relativePath] ?? {};
  return {
    relativePath,
    title: String(parsed.data.title || firstH1 || humanize(fileName)),
    category,
    words: text ? text.split(/\s+/).length : 0,
    sections: (parsed.content.match(/^#{2,6}\s+/gm) ?? []).length,
    codeExamples: Math.floor((parsed.content.match(/^```[^\n]*$/gm) ?? []).length / 2),
    status: review.status || "Not reviewed",
    reviewed: review.reviewed || "-",
    note: review.note || "Awaiting a complete editorial and technical review.",
    active: relativePath === activeReviewPath
  };
}).sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

const counts = Object.fromEntries(allowedStatuses.map((status) => [status, documents.filter((document) => document.status === status).length]));
const completedPercent = documents.length ? ((counts.Completed / documents.length) * 100).toFixed(1) : "0.0";
const totalWords = documents.reduce((total, document) => total + document.words, 0);
const totalSections = documents.reduce((total, document) => total + document.sections, 0);
const totalExamples = documents.reduce((total, document) => total + document.codeExamples, 0);

const lines = [
  "# Handbook Review Status",
  "",
  "> This is a repository planning file. It is not published as a website page.",
  "",
  "This tracker shows the human review state of every handbook. Inventory numbers are generated automatically, but a status changes only when a contributor records real review work in `scripts/handbook-review-status.json`.",
  "",
  "## Current Progress",
  "",
  `- Active review: **${activeReviewPath || "None"}**`,
  `- Handbooks tracked: **${documents.length.toLocaleString("en-US")}**`,
  `- Completed: **${counts.Completed.toLocaleString("en-US")} (${completedPercent}%)**`,
  `- In review: **${counts["In review"].toLocaleString("en-US")}**`,
  `- Needs expansion: **${counts["Needs expansion"].toLocaleString("en-US")}**`,
  `- Needs technical verification: **${counts["Needs technical verification"].toLocaleString("en-US")}**`,
  `- Not reviewed: **${counts["Not reviewed"].toLocaleString("en-US")}**`,
  "",
  "## Automated Inventory",
  "",
  `- Approximate words: **${totalWords.toLocaleString("en-US")}**`,
  `- Sections: **${totalSections.toLocaleString("en-US")}**`,
  `- Fenced examples: **${totalExamples.toLocaleString("en-US")}**`,
  "",
  "These numbers measure size, not teaching quality or technical accuracy.",
  "",
  "## Status Meanings",
  "",
  "| Status | Meaning |",
  "|---|---|",
  "| Not reviewed | No complete human review has been recorded. |",
  "| In review | A contributor is actively reviewing the full handbook. |",
  "| Needs expansion | Important explanations, examples, prerequisites, or topics are missing. |",
  "| Needs technical verification | Version-sensitive facts, commands, APIs, or claims need checks against primary sources. |",
  "| Completed | The full handbook passed the review checklist and has review evidence. |",
  "",
  "## Handbook Queue",
  "",
  "| Handbook | Category | Active | Status | Words | Sections | Last reviewed | Review note |",
  "|---|---|---|---|---:|---:|---|---|",
  ...documents.map((document) => `| [${tableText(document.title)}](${markdownLink(document.relativePath)}) | ${tableText(document.category)} | ${document.active ? "**Working now**" : "-"} | **${document.status}** | ${document.words.toLocaleString("en-US")} | ${document.sections.toLocaleString("en-US")} | ${document.reviewed} | ${tableText(document.note)} |`),
  "",
  "## Updating a Status",
  "",
  "1. Update the matching path in `scripts/handbook-review-status.json`.",
  "2. Use only one of the five statuses defined above.",
  "3. Add a short note that explains completed work or remaining work.",
  "4. Add the review date when a full review is completed.",
  "5. Set `_active` to the handbook currently being reviewed.",
  "6. Run `npm run status:docs`.",
  "7. Commit the status data and regenerated `currentstatus.md` together.",
  ""
];

fs.writeFileSync(outputPath, lines.join("\n"), "utf8");
console.log(`Generated ${path.relative(repositoryRoot, outputPath)} for ${documents.length} handbooks.`);
