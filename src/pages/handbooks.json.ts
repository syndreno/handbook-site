import type { APIRoute } from "astro";
import { getDocuments } from "@/utils/documents";
import { withBase } from "@/utils/path";

export const GET: APIRoute = async () => {
  const documents = await getDocuments();
  return new Response(JSON.stringify(documents.map((document) => ({
    title: document.title,
    description: document.description,
    url: withBase(document.route),
    category: document.sections.map((section) => section.name).join(" / "),
    tags: document.tags
  }))), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};
