import fs from "node:fs";
import path from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";
import { siteConfig } from "@/config/site";

const extensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const ignored = new Set([".git", ".github", ".astro", ".cache", "node_modules", "dist", "build", "coverage", "public", "scripts", "src"]);
const mimeTypes: Record<string, string> = {
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".gif": "image/gif", ".svg": "image/svg+xml"
};

function findAssets(directory: string, root: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory() && !ignored.has(entry.name)) return findAssets(target, root);
    if (entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase())) return [path.relative(root, target).replaceAll("\\", "/")];
    return [];
  });
}

export const getStaticPaths = (() => {
  const contentRoot = path.join(process.cwd(), siteConfig.content.rootDirectory);
  if (!fs.existsSync(contentRoot)) return [];
  return findAssets(contentRoot, contentRoot).map((asset) => ({
    params: { asset },
    props: { absolutePath: path.join(contentRoot, asset) }
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const absolutePath = String(props.absolutePath);
  const extension = path.extname(absolutePath).toLowerCase();
  return new Response(fs.readFileSync(absolutePath), {
    headers: { "Content-Type": mimeTypes[extension] ?? "application/octet-stream", "Cache-Control": "public, max-age=31536000, immutable" }
  });
};
