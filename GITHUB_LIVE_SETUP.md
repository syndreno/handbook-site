# GitHub Live Content - Setup Guide

## How This Works

Instead of building static HTML from local files, your website now:

1. **Stores a handbook index** (`src/data/handbook-index.json`) in the repo
2. **Website reads this index** at build time
3. **Fetches actual markdown** from GitHub at build time
4. **Renders it** as static HTML pages
5. **No rebuild needed** when you push markdown changes (GitHub Pages auto-updates via browser refresh)

This is a hybrid approach:

```
Your GitHub Repo (assets/handbook/)
        ↓
handbook-index.json (lists all files)
        ↓
Build reads index + fetches raw markdown
        ↓
Static HTML pages generated
        ↓
Deployed to GitHub Pages
```

## Setup Steps

### Step 1: Create an initial index (One-time)

Run this command to scan your local `assets/handbook/` and create the index:

```bash
npm run generate-index
```

This creates `src/data/handbook-index.json` with all markdown files.

### Step 2: Commit the index

```bash
git add src/data/handbook-index.json
git commit -m "Initial handbook index"
git push
```

### Step 3: Build the site

```bash
npm run build
```

The website now fetches from GitHub instead of local files!

### Step 4: Update the index when adding handbooks

When you or contributors add a new `.md` file to `assets/handbook/`, regenerate the index:

```bash
npm run generate-index
git add src/data/handbook-index.json
git commit -m "Update handbook index"
git push
```

Then rebuild:

```bash
npm run build
git push  # Deploy to GitHub Pages
```

## What Changed

| Before | After |
|--------|-------|
| Local build from `assets/handbook/` | Fetches from GitHub API |
| Must rebuild for every change | Rebuild only when index changes |
| No rate limits | No API calls = no rate limits |
| Static HTML dependencies on local files | Website reads GitHub content |

## The Index File

The `src/data/handbook-index.json` looks like:

```json
{
  "generated": "2026-08-14T12:00:00.000Z",
  "repository": "syndreno/handbooks",
  "branch": "main",
  "contentRoot": "assets/handbook",
  "totalFiles": 142,
  "files": [
    {
      "name": "javascript.md",
      "path": "assets/handbook/JS/javascript.md",
      "rawUrl": "https://raw.githubusercontent.com/syndreno/handbooks/main/assets/handbook/JS/javascript.md"
    },
    ...
  ]
}
```

## Workflow for Contributors

1. **Add handbook**: Create `assets/handbook/Category/handbook.md`
2. **Commit**: `git commit -am "Add new handbook"`
3. **Push**: `git push`
4. **Maintainer regenerates index**: `npm run generate-index && git add . && git commit -m "Update index" && git push`
5. **Rebuild site**: `npm run build && git push`

## Environment Variables

None needed! The configuration is baked into:
- `src/utils/documents.ts` (GitHub owner, repo, branch)
- `src/data/handbook-index.json` (file list)

## Troubleshooting

**Issue**: "handbook-index.json not found"
- Solution: Run `npm run generate-index` from the project root

**Issue**: Build shows 0 handbooks
- Solution: Check `handbook-index.json` exists and has content
- Run: `npm run generate-index`

**Issue**: Website shows old content
- Solution: Browser cache. Hard refresh with `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

## Updating from GitHub

Since the index lives in your repo:

1. When you push new markdown to GitHub
2. Run `npm run generate-index` locally to update the index
3. Commit and push
4. GitHub Actions rebuilds

The website will show the latest content automatically!
