# GitHub Handbook Content Setup

## Static update model

GitHub Pages serves generated static files. A browser refresh cannot rebuild a
changed Markdown file. Each handbook change becomes public after this website's
deployment workflow checks out the latest content and rebuilds the site.

The website currently checks `syndreno/handbooks` branch `main`. The deployment
workflow runs:

- immediately when this website repository changes;
- manually through **Actions > Deploy handbook to GitHub Pages**;
- when it receives a `handbooks-updated` repository dispatch;
- hourly as a fallback for content changes.

There is no generated handbook index to commit. Each build recursively scans the
current content checkout, so added, moved, and removed Markdown files are all
reflected automatically.

## Immediate deployment after a handbook push

For immediate updates, add this workflow to
`syndreno/handbooks/.github/workflows/notify-site.yml`:

```yaml
name: Rebuild handbook website

on:
  push:
    branches: [main]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Dispatch website deployment
        env:
          GH_TOKEN: ${{ secrets.SITE_DEPLOY_TOKEN }}
        run: >-
          gh api --method POST
          repos/syndreno/handbook-site-code/dispatches
          -f event_type=handbooks-updated
```

Create a fine-grained token limited to `syndreno/handbook-site-code` with
**Contents: Read and write**, then save it in the handbook repository as the
Actions secret `SITE_DEPLOY_TOKEN`. The workflow sends no handbook content; it
only asks the site repository to rebuild.

## Making the handbook repository private

The generated website may remain public while the source handbook repository is
private. The content is embedded into public static HTML during the build, so
anything published on the website must still be treated as public information.

GitHub's automatic `GITHUB_TOKEN` is scoped to the repository that owns the
workflow. To check out a different private repository:

1. Create a fine-grained personal access token or GitHub App token with
   read-only **Contents** access to `syndreno/handbooks`.
2. Add it to `handbook-site-code` under **Settings > Secrets and variables >
   Actions** as `HANDBOOKS_TOKEN`.
3. Run the deployment workflow manually once and confirm the checkout, build,
   and deployment jobs pass.

Do not put this token in source code, Markdown, an environment file committed to
Git, or browser JavaScript.

For local development against private content, set `HANDBOOK_TOKEN` only in the
current shell before running the sync command:

```powershell
$env:HANDBOOK_TOKEN='your-temporary-token'
npm.cmd run sync:handbooks
Remove-Item Env:HANDBOOK_TOKEN
```

The sync script supplies the token to Git without writing it into generated site
files. You can also authenticate Git through your normal credential manager and
leave `HANDBOOK_TOKEN` unset.

## Verification

Run locally:

```bash
npm run sync:handbooks
npm run check
npm run lint:docs
npm run build
npm run preview
```

A successful build reports the number of discovered handbooks and Pagefind
pages. Check a known URL such as `/handbooks/php/php-master-handbook/`, verify
the **Edit on GitHub** link targets the content repository, and test a build with
the project-site base path before deployment.
