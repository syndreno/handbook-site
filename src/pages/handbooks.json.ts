import type { APIRoute } from "astro";
import { getDocuments } from "@/utils/documents";
import { withBase } from "@/utils/path";

export const GET: APIRoute = () => new Response(JSON.stringify(getDocuments().map((document) => ({
  title: document.title,
  description: document.description,
  url: withBase(document.route),
  category: document.category,
  tags: document.tags
}))), {
  headers: { "Content-Type": "application/json; charset=utf-8" }
});
