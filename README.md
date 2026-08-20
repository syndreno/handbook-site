# Developer Master Handbook

A fully static documentation website generated from Markdown in the separate
[`syndreno/handbooks`](https://github.com/syndreno/handbooks) repository. Astro
builds the pages, Shiki highlights code, Pagefind provides full-text search,
and GitHub Actions deploys the result to GitHub Pages.

The handbook repository is the single source of truth. New category,
subcategory, and deeper folders are discovered recursively during the next
build; no website route or navigation component needs to be maintained by hand.
An optional `INDEX.md` in any folder can provide its display name through the
first H1, but navigation still works when that file is absent.

## Requirements

- Node.js 22.12 or newer (Node.js 24 is used in CI)
- npm
- Git
- Read access to the handbook repository

On Windows systems where PowerShell script execution is restricted, use
`npm.cmd` in place of `npm`.

## Local development

```bash
npm install
npm run dev
```

`npm run dev` synchronizes the latest `main` branch of the handbook repository
into the ignored `.cache/handbook-repository/` directory, then starts Astro.
Astro prints the local URL, normally `http://localhost:4321/`.

Useful commands:

```bash
npm run sync:handbooks
npm run dev:status
npm run dev:stop
npm run dev:force
npm run check
npm run lint:docs
npm run build
npm run preview
```

`npm run build` synchronizes content, validates Markdown, generates static HTML
in `dist/`, and builds the Pagefind search index.

## Add or update a handbook

1. Work in the `syndreno/handbooks` repository.
2. Add a `.md` file anywhere under the appropriate category and subcategory
   folders, or edit an existing file.
3. Commit and push to `main`.
4. Trigger the website deployment, or wait for its hourly synchronization.

The next deployment automatically updates routes, navigation, search,
categories, related content, previous/next links, statistics, and the sitemap.

Optional frontmatter is supported:

```yaml
---
title: PostgreSQL Master Handbook
description: A practical guide to PostgreSQL.
tags:
  - postgresql
  - sql
order: 10
---
```

Without frontmatter, the title comes from the first H1 and then the filename.
The folder tree supplies the category path. A folder's optional `INDEX.md` is
navigation metadata and is not published as a handbook. Duplicate generated
handbook or section routes fail the build instead of silently replacing content.

## Architecture

- `.cache/handbook-repository/`: ignored build-time checkout of handbook content
- `.cache/handbook-manifest.json`: ignored, revision-aware metadata cache used for fast startup
- `scripts/sync-handbooks.mjs`: clones or updates the external content checkout
- `src/config/site.ts`: branding, repository settings, features, and exclusions
- `src/utils/documents.ts`: recursive discovery and shared document manifest
- `src/utils/markdown.ts`: GFM rendering, sanitization, links, and local images
- `src/pages/handbooks/[...slug].astro`: generated handbook routes
- `src/pages/categories/[...path].astro`: generated category and subcategory routes
- `scripts/validate-docs.mjs`: content, frontmatter, link, and asset checks
- `.github/workflows/deploy.yml`: GitHub Pages build and deployment

Relative Markdown links become website routes. Relative images are read from
the checked-out handbook repository and copied under the static `/content/`
route. Visitors never need direct access to the source repository.

The sync command generates compact metadata for the current handbook commit.
Astro can therefore build category and navigation pages without parsing every
full Markdown document. Exact headings and syntax highlighting are calculated
only when a handbook page is rendered. The manifest is regenerated
automatically when the synced repository revision changes.

## GitHub Pages

In this repository, open **Settings > Pages** and set **Source** to **GitHub
Actions**. Deployment runs on a site-code push, manual dispatch, external
`handbooks-updated` repository dispatch, and an hourly schedule.

The workflow handles both user sites and project sites. To test a project base
path locally in PowerShell:

```powershell
$env:BASE_PATH='/handbook-site-code'; npm.cmd run build
Remove-Item Env:BASE_PATH
```

See [GITHUB_LIVE_SETUP.md](GITHUB_LIVE_SETUP.md) for immediate update triggers
and private-repository setup.

## Configuration

Defaults live in `src/config/site.ts`. These environment variables can override
the content source:

| Variable | Default |
|---|---|
| `HANDBOOK_REPOSITORY` | `syndreno/handbooks` |
| `HANDBOOK_BRANCH` | `main` |
| `HANDBOOK_REPOSITORY_DIR` | `.cache/handbook-repository` |
| `HANDBOOK_CONTENT_DIR` | `.cache/handbook-repository` |
| `HANDBOOK_TOKEN` | unset; needed locally only for private content |
| `SITE_URL` | inferred in GitHub Actions |

## Licensing

- Original handbook content follows the license in the handbook repository.
- Website software is licensed under the [MIT License](LICENSE).
- Contributions follow [CONTRIBUTING.md](CONTRIBUTING.md) and
  [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
- The generated site explains sharing terms at `/sharing-policy/`.

## Troubleshooting

- Sync fails with repository not found: verify the repository/branch and supply
  `HANDBOOK_TOKEN` for private local access.
- Another Astro server is running: use `npm run dev:status`, then
  `npm run dev:stop`. Use `npm run dev:force` only when you intentionally want
  to replace the existing server.
- A new file does not appear: sync again, confirm the `.md` extension, and check
  `excludedFiles` in `src/config/site.ts`.
- Search is unavailable during development: use `npm run build` followed by
  `npm run preview` to test Pagefind.
- A duplicate route fails the build: rename or move one source file.
- A broken-link warning names a file: correct that relative Markdown or asset
  path in the handbook repository.
