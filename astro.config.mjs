import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isProjectPages = Boolean(repository && !repository.endsWith(".github.io"));
const base = process.env.BASE_PATH || (isProjectPages ? `/${repository}` : "/");
const site = process.env.SITE_URL ||
  (owner ? `https://${owner}.github.io` : "https://example.com");

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover"
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: false
    }
  },
  vite: {
    build: { cssMinify: true }
  }
});
