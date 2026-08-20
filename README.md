# Developer Master Handbook

Developer Master Handbook is a static documentation website for publishing a
large, searchable collection of learning handbooks. The website code and the
handbook content are maintained in separate GitHub repositories:

- Website: [`syndreno/handbook-site-code`](https://github.com/syndreno/handbook-site-code)
- Handbook content: [`syndreno/handbooks`](https://github.com/syndreno/handbooks)

The handbook repository is the content source of truth. This project fetches
that repository during development and deployment, converts its Markdown files
to static HTML, builds navigation and search automatically, and publishes the
result to GitHub Pages.

## Project purpose

The project exists to make educational Markdown content easy to discover,
read, search, share, and maintain. It provides:

- beginner-friendly handbook pages generated from Markdown;
- categories and subcategories generated from folders of any depth;
- desktop and mobile navigation;
- full-text static search;
- syntax-highlighted code examples;
- table-of-contents links and reading progress;
- appearance, font, color, and sidebar controls;
- links back to the source handbook on GitHub;
- static output that can be hosted on GitHub Pages without a database or
  application server.

## How handbook content is fetched

The site does not require an `assets/handbook/` folder. Content is fetched from
`syndreno/handbooks` branch `main` by default.

```text
syndreno/handbooks on GitHub
        |
        | npm run sync:handbooks
        v
.cache/handbook-repository/       Local ignored Git checkout
        |
        +--> .cache/handbook-manifest.json
        |    Compact metadata cache for fast startup
        |
        v
src/utils/documents.ts            Routes, categories, hierarchy, statistics
        |
        v
src/utils/markdown.ts             Safe HTML and highlighted code
        |
        v
Astro static pages in dist/
        |
        +--> Pagefind search index
        v
GitHub Pages
```

`scripts/sync-handbooks.mjs` performs a shallow clone on the first run. Later
runs fetch the configured branch and check out its latest commit. It also
creates a small metadata manifest. The manifest is reused while the handbook
Git revision remains unchanged and is regenerated automatically after a new
handbook commit.

In GitHub Actions, the workflow checks out the handbook repository directly
into `.cache/handbook-repository/`. The build then uses
`HANDBOOK_SKIP_SYNC=1`, so it does not clone the same repository twice.

Both `.cache/` and `dist/` are ignored by Git. Do not commit fetched handbooks,
the generated manifest, the search index, or generated HTML.

## Technology stack

The versions below are currently installed from `package-lock.json`.
`package.json` declares supported dependency ranges, while the lock file keeps
installations and CI builds reproducible.

| Language or library | Version | Purpose and reason for use |
|---|---:|---|
| Node.js | `>=22.12.0`; CI uses `24` | Runs sync, validation, Astro, and build scripts. |
| TypeScript | `6.0.3` | Adds strict type checking to routes, components, and document metadata. |
| JavaScript / ECMAScript modules | Node.js 22+ | Used by repository sync and Markdown validation scripts. |
| Astro | `7.2.1` | Generates fast static HTML while allowing reusable components and build-time routes. |
| HTML and CSS | Native web platform | Provides the interface without a heavy client-side framework. |
| Pagefind | `1.5.2` | Builds client-side full-text search from generated static pages. |
| Shiki | `3.23.0` | Produces accurate build-time syntax highlighting for code examples. |
| `@astrojs/sitemap` | `3.7.3` | Generates the sitemap used by search engines. |
| `@lucide/astro` | `1.31.0` | Supplies consistent accessible icons. |
| `gray-matter` | `4.0.3` | Reads optional YAML frontmatter from handbook files. |
| Unified | `11.0.5` | Provides the Markdown syntax-tree processing pipeline. |
| `remark-parse` | `11.0.0` | Parses Markdown into a structured Markdown tree. |
| `remark-gfm` | `4.0.1` | Supports GitHub Flavored Markdown such as tables and task lists. |
| `remark-rehype` | `11.1.2` | Converts the Markdown tree into an HTML tree. |
| `rehype-pretty-code` | `0.14.5` | Connects the HTML pipeline to Shiki code highlighting. |
| `rehype-raw` | `7.0.0` | Processes supported HTML embedded inside Markdown. |
| `rehype-sanitize` | `6.0.0` | Removes unsafe HTML, attributes, and protocols before publication. |
| `rehype-slug` | `6.0.0` | Creates stable heading IDs for table-of-contents links. |
| `rehype-autolink-headings` | `7.1.0` | Adds copyable links to rendered headings. |
| `github-slugger` | `2.0.0` | Keeps TOC slugs compatible with GitHub-style heading IDs. |

## Requirements

- Node.js 22.12 or newer
- npm
- Git
- read access to the configured handbook repository

On Windows systems where PowerShell script execution is restricted, use
`npm.cmd` instead of `npm`.

## Local development

```bash
npm install
npm run dev
```

`npm run dev` synchronizes the latest handbook commit and then starts the Astro
development server. Astro prints the URL, normally
`http://localhost:4321/`.

The first page in development mode can take longer because Astro compiles the
requested route on demand. Later requests are cached. The deployed GitHub Pages
site serves prebuilt HTML and does not perform this development compilation.

### Commands

| Command | Purpose |
|---|---|
| `npm run sync:handbooks` | Fetch the configured handbook repository and update metadata. |
| `npm run dev` | Sync content and start the development server. |
| `npm run dev:status` | Show the running Astro server URL and process ID. |
| `npm run dev:stop` | Stop the current Astro development server. |
| `npm run dev:force` | Replace an existing Astro server intentionally. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run lint:docs` | Validate Markdown, links, assets, and route collisions. |
| `npm run build` | Sync, validate, generate static HTML, and build Pagefind search. |
| `npm run preview` | Preview the completed `dist/` build locally. |

Search is fully available after `npm run build`; the development server uses a
smaller fallback search source.

## Directory structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy.yml              GitHub Pages build and deployment
|-- .cache/                          Generated locally; never commit
|   |-- handbook-repository/         Synced external handbook Git checkout
|   `-- handbook-manifest.json       Revision-aware metadata cache
|-- public/                          Static files copied without processing
|-- scripts/
|   |-- sync-handbooks.mjs           Repository sync and manifest generation
|   `-- validate-docs.mjs            Markdown and route validation
|-- src/
|   |-- components/                  Header, footer, search, cards, and sidebars
|   |-- config/
|   |   `-- site.ts                  Site and content-source configuration
|   |-- layouts/
|   |   |-- BaseLayout.astro         Shared page shell and client behavior
|   |   `-- DocsLayout.astro         Three-column handbook reading layout
|   |-- pages/
|   |   |-- categories/              Generated category and subcategory pages
|   |   |-- content/                 Generated local image and media routes
|   |   |-- handbooks/               Library and generated handbook routes
|   |   |-- community.astro          Community page
|   |   `-- sharing-policy.astro     Content-sharing policy
|   |-- styles/
|   |   `-- global.css               Responsive layout and visual design
|   |-- types/
|   |   `-- documents.ts             Document and navigation data contracts
|   `-- utils/
|       |-- documents.ts             Recursive discovery and hierarchy model
|       |-- markdown.ts              Markdown-to-HTML processing pipeline
|       `-- path.ts                  Slug, label, and base-path helpers
|-- astro.config.mjs                 Static build, sitemap, and GitHub base path
|-- package.json                     Commands and dependency ranges
|-- package-lock.json                Exact dependency versions
`-- README.md
```

## Where to make future changes

| Change needed | Primary file or directory |
|---|---|
| Site title, slogan, repository, licenses, or excluded files | `src/config/site.ts` |
| Global colors, spacing, responsive layout, or print styles | `src/styles/global.css` |
| Shared metadata, page shell, anchor scrolling, or client initialization | `src/layouts/BaseLayout.astro` |
| Handbook reading layout and page actions | `src/layouts/DocsLayout.astro` |
| Header navigation | `src/components/Header.astro` |
| Footer links | `src/components/Footer.astro` |
| Appearance settings and sidebar visibility | `src/components/AppearanceControl.astro` |
| Theme behavior | `src/components/ThemeControl.astro` |
| Search dialog and fallback data | `src/components/SearchDialog.astro` and `src/pages/handbooks.json.ts` |
| Handbook cards | `src/components/HandbookCard.astro` |
| Left navigation hierarchy | `src/components/Sidebar.astro` and `SidebarTree.astro` |
| Right-side table of contents | `src/components/TableOfContents.astro` |
| Breadcrumb hierarchy | `src/components/Breadcrumbs.astro` |
| Markdown parsing, sanitization, links, and highlighting | `src/utils/markdown.ts` |
| Discovery, routes, categories, metadata, related pages, or ordering | `src/utils/documents.ts` |
| Document metadata interfaces | `src/types/documents.ts` |
| Handbook URLs and legacy redirects | `src/pages/handbooks/[...slug].astro` |
| Category and subcategory URLs | `src/pages/categories/[...path].astro` |
| Relative handbook images | `src/pages/content/[...asset].ts` |
| GitHub synchronization or metadata caching | `scripts/sync-handbooks.mjs` |
| Documentation validation rules | `scripts/validate-docs.mjs` |
| GitHub base path, sitemap, or build output | `astro.config.mjs` |
| Deployment triggers, Node version, or Actions secrets | `.github/workflows/deploy.yml` |

## Add or update handbook content

Handbook content changes belong in the
[`syndreno/handbooks`](https://github.com/syndreno/handbooks) repository, not in
this website repository.

1. Create or edit a `.md` file in the handbook repository.
2. Place it under the appropriate category and subcategory folders.
3. Keep relative Markdown links and image paths valid after moving files.
4. Commit and push the change to the configured branch, normally `main`.
5. Trigger the website workflow manually, send the repository dispatch, or
   wait for the hourly deployment.
6. Confirm the new page, navigation, search result, and source link after
   deployment.

Optional frontmatter:

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
The folder tree supplies the category hierarchy. An optional `INDEX.md` in any
folder can provide a cleaner navigation label through its first H1. `INDEX.md`
is navigation metadata and is not published as a handbook.

## Folder and repository changes

Normal handbook folder changes do not require website code changes. Discovery
is recursive and supports any folder depth.

This is a static website, so a folder does not become a public route at the
moment it is pushed to the handbook repository. The website deployment must run
again. During that deployment, Astro reads the latest handbook tree and creates
the corresponding HTML route inside the deployment artifact.

For a normal handbook directory change:

1. Push the new, moved, or renamed directory to `syndreno/handbooks`.
2. Do not copy that directory into this website repository.
3. Do not commit or upload `dist/` manually.
4. Trigger **Actions > Deploy handbook to GitHub Pages > Run workflow** in the
   website repository, send the `handbooks-updated` repository dispatch, or
   wait for the hourly scheduled deployment.
5. The workflow fetches the latest handbooks, regenerates routes, navigation,
   search, and the sitemap, then replaces the GitHub Pages deployment.

No website commit is needed when only handbook files or folders changed and the
repository name, branch, and content root remain the same.

When adding, moving, or renaming handbook content, follow this checklist:

1. Use a meaningful top-level category and optional nested subcategories.
2. Keep handbook filenames unique where practical. Canonical routes include the
   complete folder path, but old shallow redirects are generated only when the
   filename is unique inside its top-level category.
3. Update relative links and images when moving a Markdown file.
4. Add or update folder `INDEX.md` files when a human-friendly navigation label
   is useful. They are optional.
5. Do not name a real handbook `INDEX.md`, `README.md`, `currentstatus.md`, or
   another filename listed in `excludedFiles` in `src/config/site.ts`.
6. Run the complete local verification:

```bash
npm run sync:handbooks
npm run lint:docs
npm run check
npm run build
```

7. Test the generated nested route and any previously shared route that should
   redirect to it.

The build fails clearly when two files generate the same handbook route, two
folders generate the same category route, frontmatter is invalid, or a path
cannot become a valid URL slug.

Website configuration must be updated when the repository owner, repository
name, branch, or content root changes:

- update defaults in `src/config/site.ts` and `scripts/sync-handbooks.mjs`;
- update the external checkout in `.github/workflows/deploy.yml`;
- update repository links in this README and community-facing pages;
- configure matching environment variables when defaults should remain
  unchanged.

## Deploy changes to GitHub Pages

### One-time repository setup

1. Create an empty GitHub repository for the website code.
2. Push this project to that repository. For a new remote, use commands similar
   to these, replacing the URL with the real website repository:

```bash
git remote add origin https://github.com/OWNER/WEBSITE-REPOSITORY.git
git branch -M main
git push -u origin main
```

3. Confirm that `.github/workflows/deploy.yml` exists in the pushed branch.
4. Open **Settings > Pages** in the website repository.
5. Set **Source** to **GitHub Actions**.
6. Ensure GitHub Actions are enabled for the repository.
7. If the handbook repository is private, create the `HANDBOOKS_TOKEN` secret
   before running deployment.
8. Open **Actions > Deploy handbook to GitHub Pages** and select **Run workflow**.
9. Wait for both the `build` and `deploy` jobs to complete, then open the URL
   shown in the deployment summary.

The workflow supports both `owner.github.io` sites and project sites such as
`owner.github.io/handbook-site-code/`. `astro.config.mjs` derives the correct
base path in GitHub Actions.

### Deploy a website-code change

Before pushing:

```bash
npm ci
npm run check
npm run lint:docs
npm run build
```

Then commit and push to `main` or `master`:

```bash
git add .
git commit -m "Describe the website change"
git push
```

A push to either configured branch triggers `.github/workflows/deploy.yml`.
The workflow installs locked dependencies, checks the project, builds static
pages and Pagefind, uploads `dist/`, and deploys it to GitHub Pages.

The `dist/` directory is intentionally ignored. GitHub Actions creates and
uploads it as a Pages artifact, so generated files should not be committed to
the source branch.

### Deploy a handbook-only change

Pushing to the separate handbook repository does not directly modify the
already deployed static website. A new website build is required to create the
new routes. You do not need to upload or rebuild the site manually when one of
the automated triggers below is used.

The website deployment runs in any of these situations:

- a website-code push to `main` or `master`;
- a manual `workflow_dispatch` run;
- a `handbooks-updated` repository dispatch;
- the hourly fallback schedule at minute 17.

For immediate deployment after every handbook push, configure the handbook
repository to send `repository_dispatch`. See
[GITHUB_LIVE_SETUP.md](GITHUB_LIVE_SETUP.md) for the workflow and token setup.

### Private handbook repository

The generated website can remain public while the source repository is
private. Published handbook content is still public because it is included in
the generated HTML.

- Local development uses the `HANDBOOK_TOKEN` environment variable.
- GitHub Actions uses the `HANDBOOKS_TOKEN` repository secret referenced by
  `.github/workflows/deploy.yml`.
- Give the token read-only **Contents** access to the handbook repository.
- Never commit a token to this repository or a `.env` file.

## Configuration

Defaults live in `src/config/site.ts`, `scripts/sync-handbooks.mjs`, and
`astro.config.mjs`.

| Variable | Default | Purpose |
|---|---|---|
| `HANDBOOK_REPOSITORY` | `syndreno/handbooks` | GitHub owner and repository. |
| `HANDBOOK_BRANCH` | `main` | Handbook branch to fetch and link. |
| `HANDBOOK_REPOSITORY_URL` | derived GitHub HTTPS URL | Override clone URL for another Git host. |
| `HANDBOOK_REPOSITORY_DIR` | `.cache/handbook-repository` | Local Git checkout location. |
| `HANDBOOK_REPOSITORY_CONTENT_ROOT` | `.` | Content subdirectory inside the checkout. |
| `HANDBOOK_CONTENT_DIR` | `.cache/handbook-repository` | Directory scanned by Astro and validation. |
| `HANDBOOK_MANIFEST_PATH` | `.cache/handbook-manifest.json` | Generated metadata cache location. |
| `HANDBOOK_TOKEN` | unset | Local token for cloning private content. |
| `HANDBOOK_SKIP_SYNC` | unset | Use an existing checkout instead of fetching. CI sets it to `1`. |
| `SITE_URL` | inferred in Actions | Canonical website origin. |
| `BASE_PATH` | inferred in Actions | GitHub project-site path prefix. |

When using a content subdirectory, set `HANDBOOK_REPOSITORY_CONTENT_ROOT` for
sync and set `HANDBOOK_CONTENT_DIR` to the same resolved content location for
Astro and validation.

## Performance model

- Handbook metadata is cached by Git revision for fast local startup.
- Full Markdown is loaded only when its handbook page is rendered.
- Syntax highlighting is performed during the production build.
- GitHub Pages serves completed static HTML; visitors do not run Astro or need
  access to the handbook repository.
- Pagefind is loaded for search rather than shipping the full handbook corpus
  as application JavaScript.
- Very large handbooks create large HTML pages and may take longer to download
  and parse than category pages. Shared CSS and JavaScript remain small.

## Licensing and community

- Original handbook content follows the license in the handbook repository.
- Website software is licensed under the [MIT License](LICENSE).
- Content-sharing terms are described in [LICENSE-CONTENT.md](LICENSE-CONTENT.md)
  and on the generated `/sharing-policy/` page.
- Contributions follow [CONTRIBUTING.md](CONTRIBUTING.md) and
  [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Troubleshooting

- **Repository not found:** verify the repository and branch, then provide
  `HANDBOOK_TOKEN` locally or `HANDBOOKS_TOKEN` in GitHub Actions for private
  content.
- **Another Astro server is running:** use `npm run dev:status`, followed by
  `npm run dev:stop`. Use `npm run dev:force` only when replacement is intended.
- **New file does not appear:** run `npm run sync:handbooks`, confirm the `.md`
  extension, verify the pushed branch, and check `excludedFiles`.
- **Folder label looks wrong:** add or correct that folder's `INDEX.md` first
  H1.
- **Search does not work in development:** run `npm run build` and then
  `npm run preview` to test the completed Pagefind index.
- **Duplicate route:** rename or move one conflicting source file or folder.
- **Broken link or image warning:** correct the relative path in the handbook
  repository and rebuild.
- **Old page URL does not redirect:** shallow aliases are created only for
  unique filenames within a top-level category. Update the shared link to the
  canonical nested route when names are ambiguous.
