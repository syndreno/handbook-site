import type { APIRoute } from "astro";
import { flattenSections, getCategories, getDocuments } from "@/utils/documents";

const fixedRoutes = [
  "/",
  "/handbooks/",
  "/categories/",
  "/community/",
  "/sharing-policy/"
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async ({ site }) => {
  const documents = await getDocuments();
  const sections = flattenSections(await getCategories(documents));
  const routes = new Set([
    ...fixedRoutes,
    ...sections.map((section) => `/categories/${section.path}/`),
    ...documents.map((document) => document.route)
  ]);
  const root = new URL(import.meta.env.BASE_URL, site ?? "https://example.com");
  const urls = [...routes]
    .map((route) => new URL(route.replace(/^\//, ""), root).href)
    .sort((a, b) => a.localeCompare(b));
  const entries = urls.map((url) => `<url><loc>${escapeXml(url)}</loc></url>`).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
