import fs from "node:fs";
import path from "node:path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { toString } from "mdast-util-to-string";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root as MdastRoot } from "mdast";
import type { Root as HastRoot, Element } from "hast";
import type { DocumentMetadata } from "@/types/documents";
import { getDocuments } from "@/utils/documents";
import { withBase } from "@/utils/path";

const imageExtensions = /\.(png|jpe?g|webp|gif|svg)$/i;
const renderedMarkdownCache = new Map<
  string,
  { modified: number; html: string; headings: DocumentMetadata["headings"] }
>();

function removeSourceTitle() {
  return (tree: MdastRoot) => {
    const firstMeaningful = tree.children.findIndex(
      (node: any) => node.type !== "html" || String(node.value).trim()
    );
    const node: any = tree.children[firstMeaningful];
    if (node?.type === "heading" && node.depth === 1) tree.children.splice(firstMeaningful, 1);
  };
}

function collectHeadings(document: DocumentMetadata) {
  return (tree: MdastRoot) => {
    const slugger = new GithubSlugger();
    const headings: DocumentMetadata["headings"] = [];
    visit(tree, "heading", (node) => {
      const text = toString(node).trim();
      headings.push({ depth: node.depth, text, slug: slugger.slug(text) });
    });
    document.headings = headings;
  };
}

function rewriteLinks(document: DocumentMetadata, documents: DocumentMetadata[]) {
  const bySource = new Map(documents.map((item) => [item.sourcePath.toLowerCase(), item]));

  return () => (tree: MdastRoot) => {
    visit(tree, ["link", "image"], (node: any) => {
      const url = String(node.url || "");
      if (!url || /^(https?:|mailto:|tel:|data:|#)/i.test(url)) return;

      const [pathname, anchor = ""] = url.split("#", 2);
      const decodedPath = decodeURIComponent(pathname).replaceAll("\\", "/");
      const resolved = path.posix
        .normalize(path.posix.join(document.sourceDirectory, decodedPath))
        .replace(/^\.\//, "");

      if (/\.md$/i.test(pathname)) {
        const target = bySource.get(resolved.toLowerCase());
        if (target) node.url = `${withBase(target.route)}${anchor ? `#${anchor}` : ""}`;
      } else if (node.type === "image" || imageExtensions.test(pathname)) {
        const encodedPath = resolved.split("/").map(encodeURIComponent).join("/");
        node.url = withBase(`/content/${encodedPath}`);
      }
    });
  };
}

function secureExternalLinks() {
  return (tree: HastRoot) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;
      const href = String(node.properties?.href ?? "");
      if (/^https?:\/\//i.test(href)) {
        node.properties = {
          ...node.properties,
          target: "_blank",
          rel: ["noopener", "noreferrer"]
        };
      }
    });
  };
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "className", "id", "data*"],
    code: [...(defaultSchema.attributes?.code ?? []), ["className", /^language-/]],
    input: [...(defaultSchema.attributes?.input ?? []), "checked", "disabled", "type"]
  }
} as typeof defaultSchema;

export async function renderMarkdown(document: DocumentMetadata): Promise<string> {
  const modified = fs.statSync(document.absolutePath).mtimeMs;
  const cached = renderedMarkdownCache.get(document.absolutePath);
  if (cached?.modified === modified) {
    document.headings = cached.headings;
    return cached.html;
  }

  const documents = await getDocuments();
  const source = matter(fs.readFileSync(document.absolutePath, "utf8")).content;
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(removeSourceTitle)
    .use(collectHeadings, document)
    .use(rewriteLinks(document, documents))
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: { className: ["heading-anchor"], ariaLabel: "Link to this section" },
      content: { type: "text", value: "#" }
    })
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark" },
      keepBackground: false
    })
    .use(secureExternalLinks)
    .use(rehypeStringify)
    .process(source);

  const html = String(result);
  renderedMarkdownCache.set(document.absolutePath, {
    modified,
    html,
    headings: document.headings
  });
  return html;
}
