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
const renderedMarkdownCache = new Map<string, string>();

function removeSourceTitle() {
  return (tree: MdastRoot) => {
    const firstMeaningful = tree.children.findIndex((node: any) => node.type !== "html" || String(node.value).trim());
    const node: any = tree.children[firstMeaningful];
    if (node?.type === "heading" && node.depth === 1) tree.children.splice(firstMeaningful, 1);
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
      
      // Resolve relative path
      const resolved = document.sourceDirectory
        ? decodedPath.startsWith("../")
          ? decodedPath.split("/").reduce((acc, part, i) => {
              if (part === "..") return acc.split("/").slice(0, -1).join("/");
              if (i === 0) return part;
              return acc + "/" + part;
            }, document.sourceDirectory)
          : document.sourceDirectory + "/" + decodedPath
        : decodedPath;

      if (/\.md$/i.test(pathname)) {
        const target = bySource.get(resolved.toLowerCase());
        if (target) node.url = `${withBase(target.route)}${anchor ? `#${anchor}` : ""}`;
      } else if (node.type === "image" || imageExtensions.test(pathname)) {
        // For GitHub content, resolve image URLs to GitHub raw
        const imagePath = resolved.split("/").map(encodeURIComponent).join("/");
        const isGithubUrl = document.absolutePath.includes("github.com");
        
        if (isGithubUrl) {
          // Link directly to GitHub raw content for images
          const githubPath = document.sourcePath.split("/").slice(0, -1).join("/") + "/" + imagePath;
          node.url = `https://raw.githubusercontent.com/syndreno/handbooks/master/${githubPath}`;
        } else {
          node.url = withBase(`/content/${imagePath}`);
        }
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
        node.properties = { ...node.properties, target: "_blank", rel: ["noopener", "noreferrer"] };
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
  // Check cache
  const cached = renderedMarkdownCache.get(document.sourcePath);
  if (cached) return cached;

  const documents = await getDocuments();
  
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(removeSourceTitle)
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
    .process(document.rawContent);
  
  const html = String(result);
  renderedMarkdownCache.set(document.sourcePath, html);
  return html;
}
