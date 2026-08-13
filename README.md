# Developer Master Handbook

A fully static documentation website generated from the Markdown handbooks in this repository. Astro builds the pages, Shiki highlights code, Pagefind provides full-text search, and GitHub Actions deploys the result to GitHub Pages.

The existing Markdown files are the source of truth. They live in subject folders under `assets/handbook/` and do not need page components or navigation entries.

## Requirements

- Node.js 22.12 or newer (Node.js 24 is used in CI)
- npm

On Windows PowerShell systems where script execution is restricted, use `npm.cmd` in place of `npm`.

## Local development

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321/`.

Production commands:

```bash
npm run check
npm run lint:docs
npm run build
npm run preview
```

`npm run build` validates Markdown links, generates the static site in `dist/`, and creates the Pagefind index. Full-text search is available after a production build; development mode falls back to title, category, description, and tag search.

## Add a handbook

1. Add a `.md` file to the appropriate subject folder inside `assets/handbook/`, creating the folder if needed.
2. Optionally add YAML frontmatter.
3. Run `npm run build` to validate it.
4. Commit and push.

The next build automatically adds the document to routes, navigation, search, category pages, the handbook index, related content, previous/next links, statistics, and the sitemap.

Example optional frontmatter:

```yaml
---
title: PostgreSQL Master Handbook
description: A practical guide to PostgreSQL.
category: Databases
tags:
  - postgresql
  - sql
order: 10
---
```

Without frontmatter, the title is resolved from the first H1 and then the filename. The category comes from the top-level folder. URLs are normalized from the full source path, and duplicate URLs fail the build instead of overwriting content.

## Architecture

- `assets/handbook/`: all dynamically discovered subject folders and Markdown source files
- `src/config/site.ts`: branding, repository settings, content root, features, and exclusions
- `src/utils/documents.ts`: recursive discovery and the shared document manifest
- `src/utils/markdown.ts`: GFM rendering, Shiki, safe HTML handling, link and image rewriting
- `src/pages/handbooks/[...slug].astro`: generated handbook routes
- `src/pages/categories/[category].astro`: generated category routes
- `src/components/`: header, search, sidebar, breadcrumbs, TOC, cards, and theme controls
- `src/styles/global.css`: responsive reading layout, themes, and print styles
- `scripts/validate-docs.mjs`: broken Markdown link, missing asset, empty file, and frontmatter checks
- `.github/workflows/deploy.yml`: build and GitHub Pages deployment

The manifest is created once per build and reused everywhere. Only `assets/handbook/` is scanned for content, and configured nested exclusions are still respected. Repository files such as `README.md` and `agents.md` cannot accidentally become handbook pages.

## Markdown behavior

The renderer supports GitHub-Flavored Markdown, tables, task lists, raw HTML sanitization, stable heading anchors, responsive images, and highlighted fenced code blocks with copy controls. Relative links to other `.md` files are converted to generated website routes. Relative image references are published under the static `/content/` route while preserving their folder hierarchy.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. Open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `master` or `main`, or run the workflow manually.

The workflow detects whether the repository is a user site (`username.github.io`) or a project site (`username.github.io/repository`) and configures Astro's base path accordingly. No base URL edits are required when the repository name changes.

To test a project-site path locally in PowerShell:

```powershell
$env:BASE_PATH='/example-repository'; npm.cmd run build
Remove-Item Env:BASE_PATH
```

## Configuration

Edit `src/config/site.ts` to change the site title, description, tagline, branch, feature flags, or content exclusions. During GitHub Actions builds, the repository URL is derived from `GITHUB_REPOSITORY`, enabling source and repository links automatically.

For a custom production domain, set `SITE_URL` in the build environment. For local root-path builds, no environment variables are needed.

## Community and licensing

The project is intended to be maintained and improved by its learning community:

- Original handbook content under `assets/handbook/` is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), unless identified otherwise.
- Website software is licensed under the [MIT License](LICENSE).
- Contributions follow [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
- The generated website explains these terms on `/community/` and `/license/`.

Contributors retain copyright in their original work while granting the project permission to distribute it under the applicable project license.

## Troubleshooting

- Search unavailable in development: run `npm run build` and `npm run preview` to test the Pagefind index.
- A new file does not appear: confirm it ends in `.md`, is outside excluded directories, and is not listed in `excludedFiles`.
- Duplicate route error: rename one source file or move it to a distinct folder.
- Broken link warning: correct the relative `.md` or asset path named by `npm run lint:docs`.
- Missing repository links locally: these are enabled automatically in GitHub Actions, or can be configured directly in `src/config/site.ts`.
