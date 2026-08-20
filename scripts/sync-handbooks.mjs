#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const repositoryRoot = process.cwd();
const repository = process.env.HANDBOOK_REPOSITORY || "syndreno/handbooks";
const branch = process.env.HANDBOOK_BRANCH || "main";
const checkoutDirectory = path.resolve(
  repositoryRoot,
  process.env.HANDBOOK_REPOSITORY_DIR || ".cache/handbook-repository"
);
const contentDirectory = path.resolve(
  checkoutDirectory,
  process.env.HANDBOOK_REPOSITORY_CONTENT_ROOT || "."
);
const repositoryUrl =
  process.env.HANDBOOK_REPOSITORY_URL || `https://github.com/${repository}.git`;
const manifestPath = path.resolve(
  repositoryRoot,
  process.env.HANDBOOK_MANIFEST_PATH || ".cache/handbook-manifest.json"
);
const manifestVersion = 2;
const excludedDirectories = new Set([".git", ".github", ".astro", ".cache", "node_modules", "dist", "build", "coverage", "public", "scripts", "src"]);
const excludedFiles = new Set([
  "agents.md", "agentguide.md", "readme.md", "contributing.md", "changelog.md",
  "index.md", "handbook_index.md", "currentstatus.md", "needtoimplement.md",
  "handbook_review_and_improvement_guide.md"
]);

function fail(message) {
  console.error(`Handbook sync failed: ${message}`);
  process.exit(1);
}

function git(args) {
  const env = { ...process.env };
  const token = process.env.HANDBOOK_TOKEN;

  if (token) {
    const credentials = Buffer.from(`x-access-token:${token}`).toString("base64");
    env.GIT_CONFIG_COUNT = "1";
    env.GIT_CONFIG_KEY_0 = "http.https://github.com/.extraheader";
    env.GIT_CONFIG_VALUE_0 = `AUTHORIZATION: basic ${credentials}`;
  }

  const result = spawnSync("git", args, {
    cwd: repositoryRoot,
    env,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  });

  if (result.error) fail(result.error.message);
  if (result.status !== 0) fail(result.stderr.trim() || result.stdout.trim());
  return result.stdout.trim();
}

function verifyContent() {
  if (!fs.existsSync(contentDirectory)) {
    fail(`expected content directory was not found: ${contentDirectory}`);
  }

  const hasMarkdown = fs
    .readdirSync(contentDirectory, { recursive: true, withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"));

  if (!hasMarkdown) fail(`no Markdown handbooks were found in ${contentDirectory}`);
}

function walkMarkdown(directory, root) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory() && !excludedDirectories.has(entry.name)) {
      files.push(...walkMarkdown(target, root));
    } else if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".md") &&
      !excludedFiles.has(entry.name.toLowerCase())
    ) {
      files.push(path.relative(root, target).replaceAll("\\", "/"));
    }
  }
  return files;
}

function plainText(value) {
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

function cleanHeadingText(value) {
  return value
    .replace(/\s+#+\s*$/, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_~]/g, "")
    .trim();
}

function scanHeadingSummary(content) {
  let count = 0;
  let firstH1;
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

function humanize(value) {
  return value
    .replace(/\.md$/i, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/[()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function generateManifest(revision) {
  const contentRoot = path.relative(checkoutDirectory, contentDirectory).replaceAll("\\", "/") || ".";
  try {
    const existing = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (
      existing.version === manifestVersion &&
      existing.revision === revision &&
      existing.contentRoot === contentRoot
    ) {
      console.log(`Using cached metadata for ${existing.documents.length} handbooks`);
      return;
    }
  } catch {
    // Generate the cache when it is missing, stale, or invalid.
  }

  const documents = walkMarkdown(contentDirectory, contentDirectory).map((sourcePath) => {
    const source = fs.readFileSync(path.join(contentDirectory, sourcePath), "utf8");
    const parsed = matter(source);
    const headingSummary = scanHeadingSummary(parsed.content);
    const fileName = path.posix.basename(sourcePath);
    const title = String(parsed.data.title || headingSummary.firstH1 || humanize(fileName));
    const bodyText = plainText(parsed.content);
    const words = bodyText ? bodyText.split(/\s+/).length : 0;
    const descriptionSource =
      String(parsed.data.description || "").trim() || bodyText.replace(title, "").trim();
    const description = descriptionSource.length > 160
      ? `${descriptionSource.slice(0, 157).trimEnd()}...`
      : descriptionSource || `Learn ${title} with this practical developer handbook.`;
    const tags = Array.isArray(parsed.data.tags)
      ? parsed.data.tags.map(String)
      : typeof parsed.data.tags === "string"
        ? parsed.data.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
        : [];
    const order = Number.isFinite(Number(parsed.data.order)) ? Number(parsed.data.order) : undefined;

    return {
      sourcePath,
      title,
      description,
      tags,
      order,
      headingCount: headingSummary.count,
      wordCount: words,
      readingMinutes: Math.max(1, Math.ceil(words / 220)),
      codeExamples: (parsed.content.match(/^```/gm)?.length ?? 0) / 2
    };
  });

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(
    manifestPath,
    JSON.stringify({ version: manifestVersion, revision, contentRoot, documents })
  );
  console.log(`Generated metadata for ${documents.length} handbooks`);
}

if (process.env.HANDBOOK_SKIP_SYNC === "1") {
  verifyContent();
  const gitDirectory = path.join(checkoutDirectory, ".git");
  const revision = fs.existsSync(gitDirectory)
    ? git(["-C", checkoutDirectory, "rev-parse", "HEAD"])
    : "pre-checked-out";
  generateManifest(revision);
  console.log(`Using pre-checked-out handbooks from ${contentDirectory}`);
  process.exit(0);
}

const gitDirectory = path.join(checkoutDirectory, ".git");

if (!fs.existsSync(gitDirectory)) {
  if (fs.existsSync(checkoutDirectory) && fs.readdirSync(checkoutDirectory).length > 0) {
    fail(`${checkoutDirectory} exists but is not a Git checkout`);
  }

  fs.mkdirSync(path.dirname(checkoutDirectory), { recursive: true });
  git([
    "clone",
    "--depth",
    "1",
    "--branch",
    branch,
    "--single-branch",
    repositoryUrl,
    checkoutDirectory
  ]);
} else {
  git(["-C", checkoutDirectory, "fetch", "--depth", "1", "origin", branch]);
  git(["-C", checkoutDirectory, "checkout", "--detach", "FETCH_HEAD"]);
}

verifyContent();
const revision = git(["-C", checkoutDirectory, "rev-parse", "HEAD"]);
generateManifest(revision);
console.log(`Synced ${repository}@${branch} (${revision.slice(0, 7)})`);
