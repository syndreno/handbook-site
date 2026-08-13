# Git Master Handbook
## Complete Beginner-to-Advanced Learning Guide

> A single-file handbook for learning Git from zero through professional team usage.  
> The goal is not only to memorize commands, but to understand Git's mental model, history graph, collaboration model, recovery tools, and real-world workflows.

---

# Table of Contents

1. What Git Is and Why It Exists
2. Git vs GitHub/GitLab/Bitbucket
3. Core Git Mental Model
4. Installation and Configuration
5. Repositories and `.git`
6. File States and the Daily Workflow
7. `status`, `diff`, and the Staging Area
8. Commits and Commit Messages
9. `.gitignore` and `.gitattributes`
10. Branches and HEAD
11. Merging and Merge Conflicts
12. Remotes, Fetch, Pull, Push, and Upstream
13. Rebase and Interactive Rebase
14. Merge vs Rebase
15. Undo: Restore, Reset, Revert, Amend
16. Reflog and Recovery
17. Stash
18. Cherry-Pick
19. Tags and Releases
20. Detached HEAD and Revision Syntax
21. Git Internals and Object Model
22. Commit Graph and Merge Base
23. File History, Blame, and Search
24. Bisect
25. Worktrees
26. Submodules, Subtree, Git LFS
27. Sparse Checkout and Partial Clone
28. Hooks, Aliases, and Configuration
29. SSH and HTTPS Authentication
30. Forks, Pull Requests, and Code Review
31. Branching Strategies
32. GitFlow
33. GitHub Flow and Trunk-Based Development
34. Releases and Hotfixes
35. Git with CI/CD
36. Semantic Versioning and Conventional Commits
37. Monorepos
38. Security, Secrets, and Signed Commits
39. History Rewriting and Force Push
40. Repository Maintenance and Migration
41. Real-World Scenarios
42. Troubleshooting
43. Common Mistakes
44. Professional Best Practices
45. Command Decision Guide
46. Master Cheat Sheet
47. Practice Roadmap
48. Interview Questions
49. Final Mental Models

---

# 1. What Git Is and Why It Exists

Git is a **distributed version control system**.

Version control means recording changes to a project so you can answer questions such as:

- What changed?
- Who changed it?
- Why was it changed?
- What did the project look like last week?
- Which change introduced a bug?
- Can two developers work on different features at the same time?
- Can we restore a known-good production version?

Without version control, projects often become:

```text
project/
project-final/
project-final-v2/
project-final-fixed/
project-final-fixed-new/
project-final-real/
```

With Git, history becomes a sequence and graph of commits:

```text
A → B → C → D
```

Each commit represents a meaningful project state.

## Why Git is called distributed

In a typical Git clone, every developer has a local repository containing project history.

That means many operations work locally:

```text
commit
branch
merge
rebase
log
diff
blame
bisect
```

You do not need the remote server for every action.

---

# 2. Git vs GitHub/GitLab/Bitbucket

Git and Git hosting services are different things.

| Name | Meaning |
|---|---|
| Git | Version control software |
| GitHub | Git hosting and collaboration platform |
| GitLab | Git hosting, collaboration, CI/CD and DevOps platform |
| Bitbucket | Git repository hosting and collaboration platform |
| Repository | Version-controlled project |
| Remote | Another Git repository referenced by name |

You can use Git locally without any hosting service:

```bash
git init
git add .
git commit -m "Initial commit"
```

Hosting platforms add features such as:

```text
Pull requests / merge requests
Issue tracking
Code review
Branch protection
CI/CD
Release pages
Security scanning
Permissions
Project management
```

---

# 3. Core Git Mental Model

This is the most important Git concept.

Think in four areas:

```text
Working Directory
      |
      | git add
      v
Staging Area / Index
      |
      | git commit
      v
Local Repository
      |
      | git push
      v
Remote Repository
```

## Working directory

The files you are actively editing.

Example:

```text
src/login.js
```

You change the file. That change exists only in the working tree.

## Staging area

The staging area contains the exact snapshot planned for the next commit.

```bash
git add src/login.js
```

Think:

> "Include this version of `login.js` in my next commit."

## Local repository

A commit saves the staged snapshot into local repository history.

```bash
git commit -m "Fix login validation"
```

## Remote repository

Push sends commits to another repository:

```bash
git push
```

## Full lifecycle

```bash
git status

# edit files

git diff
git add -p
git diff --staged
git commit -m "fix: validate login input"
git push
```

The key question when Git feels confusing is:

```text
Where is my change currently?

Working tree?
Staging area?
Local commit?
Remote branch?
```

---

# 4. Installation and Configuration

Check Git:

```bash
git --version
```

Configure identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Set the default initial branch:

```bash
git config --global init.defaultBranch main
```

Set VS Code as editor:

```bash
git config --global core.editor "code --wait"
```

Inspect configuration:

```bash
git config --list
git config --list --show-origin
```

## Configuration scopes

```text
system  → machine-wide
global  → current user
local   → current repository
```

A local setting overrides global for that repository.

Example:

```bash
git config --local user.email "work@example.com"
```

This is useful if personal and company repositories require different identities.

---

# 5. Repositories and `.git`

Create a repository:

```bash
mkdir demo
cd demo
git init
```

Git creates:

```text
.git/
```

This directory contains repository metadata and history.

Important parts include:

```text
.git/
├── HEAD
├── config
├── index
├── objects/
├── refs/
└── logs/
```

Conceptually:

- `HEAD` → current checked-out reference
- `config` → repository configuration
- `index` → staging area
- `objects` → Git object database
- `refs` → branches/tags
- `logs` → reflog information

Do not casually delete `.git`.

If it is removed, your ordinary project files remain, but that working copy is no longer connected to its local Git history.

## Clone existing repository

```bash
git clone <repository-url>
```

Clone under a different folder name:

```bash
git clone <repository-url> my-project
```

---

# 6. File States and the Daily Workflow

Files can be:

```text
Untracked
Tracked and unchanged
Modified
Staged
Committed
Ignored
```

## Untracked

Git has never started tracking the file.

```text
?? notes.txt
```

Stage it:

```bash
git add notes.txt
```

## Modified

A tracked file differs from the committed/index version.

## Staged

The version prepared for the next commit.

## Committed

Stored in repository history.

## Recommended daily workflow

```bash
git status
git fetch origin

# edit

git diff
git add -p
git diff --staged
git commit -m "feat: add customer search"
git push
```

---

# 7. `status`, `diff`, and the Staging Area

## `git status`

```bash
git status
```

Short:

```bash
git status --short
```

Possible output:

```text
 M app.js
M  login.js
?? test.txt
```

Interpretation:

```text
 M app.js
```

Modified but not staged.

```text
M  login.js
```

Staged modification.

```text
?? test.txt
```

Untracked file.

## `git diff`

Unstaged changes:

```bash
git diff
```

This roughly compares:

```text
Working tree ↔ Index
```

Staged changes:

```bash
git diff --staged
```

This roughly compares:

```text
Index ↔ HEAD
```

Compare commits:

```bash
git diff <commit1> <commit2>
```

Compare a feature branch with its merge base:

```bash
git diff main...feature/login
```

## Why staging exists

Suppose you changed:

```text
login.js
invoice.js
README.md
```

Only login belongs in the next commit.

Use:

```bash
git add login.js
git diff --staged
git commit -m "fix: validate login request"
```

The other changes stay out of the commit.

## Partial staging

One file may contain multiple unrelated changes.

```bash
git add -p app.js
```

Common responses:

```text
y = stage hunk
n = skip hunk
s = split hunk
q = quit
```

This is extremely useful for creating clean commits.

---

# 8. Commits and Commit Messages

Create:

```bash
git commit -m "Add invoice approval"
```

Open editor:

```bash
git commit
```

## Amend latest commit

Forgot a file:

```bash
git add forgotten-file.js
git commit --amend --no-edit
```

Change message:

```bash
git commit --amend
```

Amending creates a new commit ID, so avoid casually amending history already shared with others.

## Good commit messages

Weak:

```text
update
changes
fix
done
final
```

Better:

```text
Fix duplicate invoice validation
Add payment audit logging
Refactor customer lookup query
```

A good message communicates **intent**, not merely that files changed.

Long form:

```text
fix: reject duplicate invoice numbers

The API previously accepted repeated submissions with the same
invoice number. Validate uniqueness before persistence.
```

---

# 9. `.gitignore` and `.gitattributes`

## `.gitignore`

Example:

```gitignore
node_modules/
.env
dist/
build/
coverage/
*.log
.idea/
.vscode/
```

Important:

> `.gitignore` does not automatically untrack a file already committed.

Stop tracking but keep locally:

```bash
git rm --cached .env
```

Then commit.

Find ignore rule:

```bash
git check-ignore -v path/to/file
```

## `.gitattributes`

Useful for repository-wide text/binary behavior.

Example:

```gitattributes
* text=auto
*.sh text eol=lf
*.bat text eol=crlf
*.png binary
```

This helps teams avoid inconsistent line-ending behavior.

---

# 10. Branches and HEAD

A branch is mainly a movable reference to a commit.

Initial history:

```text
A---B---C
        ^
        |
       main
```

Create:

```bash
git branch feature/login
```

Now both references point to C.

Switch:

```bash
git switch feature/login
```

Commit twice:

```text
A---B---C main
         \
          D---E feature/login
```

## HEAD

Normally:

```text
HEAD → current branch → current commit
```

Example:

```text
HEAD
 |
 v
feature/login
 |
 v
E
```

Create and switch in one command:

```bash
git switch -c feature/login
```

Delete merged branch:

```bash
git branch -d feature/login
```

Force-delete:

```bash
git branch -D feature/login
```

Rename:

```bash
git branch -m new-name
```

---

# 11. Merging and Merge Conflicts

Suppose:

```text
A---B---C main
         \
          D---E feature
```

Merge feature into main:

```bash
git switch main
git merge feature
```

Possible merge commit:

```text
A---B---C-------M main
         \     /
          D---E
```

## Fast-forward

If main did not change:

```text
A---B main
     \
      C---D feature
```

Git can move main directly:

```text
A---B---C---D main
```

Force a merge commit if desired:

```bash
git merge --no-ff feature
```

## Conflict

Example:

```text
<<<<<<< HEAD
tax = 18
=======
tax = 20
>>>>>>> feature/new-tax
```

Git cannot know which business rule is correct.

Resolve manually, remove markers, then:

```bash
git add file
git commit
```

Abort unresolved merge:

```bash
git merge --abort
```

Never resolve a conflict blindly. The result is new code and should be reviewed/tested.

---

# 12. Remotes, Fetch, Pull, Push, and Upstream

List remotes:

```bash
git remote -v
```

Add:

```bash
git remote add origin <url>
```

Change URL:

```bash
git remote set-url origin <url>
```

## Fetch

```bash
git fetch origin
```

Downloads remote objects/refs without integrating them into your current branch.

Inspect remote changes:

```bash
git log HEAD..origin/main --oneline
git diff HEAD..origin/main
```

## Pull

```bash
git pull
```

Conceptually:

```text
fetch + integrate
```

Explicit merge:

```bash
git pull --no-rebase
```

Explicit rebase:

```bash
git pull --rebase
```

## Push

```bash
git push origin main
```

First push of branch:

```bash
git push -u origin feature/login
```

The `-u` records upstream tracking.

Inspect:

```bash
git branch -vv
```

`origin/main` is a **local remote-tracking ref** representing the last fetched state of remote `origin`'s `main`.

---

# 13. Rebase and Interactive Rebase

Before:

```text
A---B---C main
     \
      D---E feature
```

Run:

```bash
git switch feature
git rebase main
```

After:

```text
A---B---C main
         \
          D'---E' feature
```

Rebase **replays** changes and creates new commits.

## Conflict workflow

```bash
git status
# resolve
git add file
git rebase --continue
```

Abort:

```bash
git rebase --abort
```

## Interactive rebase

```bash
git rebase -i HEAD~5
```

Actions:

```text
pick    keep
reword  change message
edit    pause for modification
squash  combine and edit combined message
fixup   combine and discard this message
drop    remove
```

Scenario:

```text
Add payment page
fix typo
fix again
rename var
add test
```

can be cleaned into:

```text
Add payment page
Add payment tests
```

Do this primarily on your own unpublished/unshared history.

---

# 14. Merge vs Rebase

## Merge

```text
A---B---C-------M
     \         /
      D---E---F
```

Pros:

- preserves topology;
- suitable for shared history;
- does not rewrite existing commits.

Cons:

- can produce many merge commits.

## Rebase

```text
A---B---C---D'---E'---F'
```

Pros:

- clean linear history;
- excellent for updating private feature work.

Cons:

- rewrites commits;
- dangerous if collaborators already use those exact commits.

Practical rule:

```text
Private branch → rebase can be excellent.
Shared stable branch → prefer non-destructive integration.
```

---

# 15. Undo: Restore, Reset, Revert, Amend

Before undoing anything, ask:

```text
Where is the mistake?

Unstaged?
Staged?
Latest local commit?
Older local commit?
Already shared?
```

## Discard unstaged tracked edit

```bash
git restore file.txt
```

Destructive to that unstaged edit.

## Unstage

```bash
git restore --staged file.txt
```

Working-tree change remains.

## Fix latest local commit

```bash
git commit --amend
```

## Reset

Soft:

```bash
git reset --soft HEAD~1
```

Effect:

```text
branch moves backward
changes remain staged
```

Mixed/default:

```bash
git reset HEAD~1
```

Effect:

```text
branch moves backward
changes remain unstaged
```

Hard:

```bash
git reset --hard HEAD~1
```

Effect:

```text
branch moves
index resets
tracked working files reset
```

Use hard reset carefully.

## Revert

For shared history:

```bash
git revert <commit>
```

Instead of deleting history, Git creates a new inverse commit.

```text
A---B---C---D---R
```

`R` reverses the selected change.

---

# 16. Reflog and Recovery

Reflog records local ref movement.

```bash
git reflog
```

Example:

```text
abc123 HEAD@{0}: reset: moving to HEAD~1
def456 HEAD@{1}: commit: Important feature
```

If you accidentally reset away a commit:

```bash
git reflog
git branch recovery def456
```

This often rescues work that appears "lost."

Reflog is local and not a substitute for proper backups/remotes.

---

# 17. Stash

Temporarily save unfinished work:

```bash
git stash
```

Include untracked:

```bash
git stash -u
```

Named:

```bash
git stash push -m "WIP invoice UI"
```

List:

```bash
git stash list
```

Apply but keep:

```bash
git stash apply
```

Apply and remove:

```bash
git stash pop
```

Specific:

```bash
git stash apply stash@{1}
```

Create branch:

```bash
git stash branch recover-work stash@{0}
```

Scenario:

```text
Working on feature
↓
Urgent production bug
↓
stash
↓
hotfix branch
↓
finish fix
↓
return
↓
stash pop
```

---

# 18. Cherry-Pick

Apply a particular commit onto the current branch:

```bash
git cherry-pick abc123
```

Scenario:

```text
develop has an urgent bug fix
release branch needs only that fix
```

Use:

```bash
git switch release/2.0
git cherry-pick <fix-commit>
```

Conflict:

```bash
git add file
git cherry-pick --continue
```

Abort:

```bash
git cherry-pick --abort
```

Cherry-pick is useful, but repeated duplicated logical changes can make later history harder to reason about.

---

# 19. Tags and Releases

Tags identify important commits.

Lightweight:

```bash
git tag v1.0.0
```

Annotated:

```bash
git tag -a v1.0.0 -m "Release 1.0.0"
```

Inspect:

```bash
git show v1.0.0
```

Push:

```bash
git push origin v1.0.0
```

All:

```bash
git push origin --tags
```

Delete local:

```bash
git tag -d v1.0.0
```

Delete remote:

```bash
git push origin --delete v1.0.0
```

Formal releases usually benefit from annotated/signed tags.

---

# 20. Detached HEAD and Revision Syntax

Detached HEAD means:

```text
HEAD → commit
```

rather than:

```text
HEAD → branch → commit
```

Enter intentionally:

```bash
git switch --detach <commit>
```

If useful commits are created:

```bash
git switch -c experiment
```

## Revision syntax

```text
HEAD
HEAD~1
HEAD~2
HEAD^
HEAD^2
main
origin/main
v1.0.0
```

`~n` follows first-parent ancestry repeatedly.

`^n` selects a parent, especially useful for merge commits.

---

# 21. Git Internals and Object Model

Important object types:

```text
blob
tree
commit
annotated tag
```

## Blob

Stores file content.

## Tree

Represents directory structure and points to blobs/subtrees.

## Commit

Contains references/metadata such as:

```text
tree
parent(s)
author
committer
message
```

## Inspect objects

```bash
git cat-file -t <hash>
git cat-file -p <hash>
```

Git object IDs are content-derived hashes.

Modern Git can support SHA-256 repositories, while SHA-1 repositories remain common, so scripts should avoid unnecessary fixed assumptions about hash format/length.

---

# 22. Commit Graph and Merge Base

Git history is a directed acyclic graph.

```text
A---B---C---F
     \     /
      D---E
```

Normal commit:

```text
one parent
```

Merge commit:

```text
multiple parents
```

Initial commit:

```text
no parent
```

## Merge base

Example:

```text
A---B---C main
     \
      D---E feature
```

Best common ancestor is B.

Find it:

```bash
git merge-base main feature
```

This explains why triple-dot comparisons and merges behave as they do.

---

# 23. File History, Blame, and Search

History of file:

```bash
git log -- app.js
```

With patches:

```bash
git log -p -- app.js
```

Follow rename:

```bash
git log --follow -- app.js
```

Line attribution:

```bash
git blame app.js
```

Use blame to discover context, not to attack people.

Search commit messages:

```bash
git log --grep="invoice"
```

Search when a string's occurrence count changed:

```bash
git log -S "calculateTax"
```

---

# 24. Bisect

`git bisect` performs a binary search for a bad commit.

Start:

```bash
git bisect start
git bisect bad
git bisect good v1.0.0
```

Test the commit Git checks out.

Then repeatedly:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

Finish:

```bash
git bisect reset
```

Automate:

```bash
git bisect run ./test-script.sh
```

This is extremely powerful for regressions in long histories.

---

# 25. Worktrees

Worktrees let one repository have multiple checked-out branches in separate directories.

```bash
git worktree add ../project-hotfix hotfix/payment
```

Example:

```text
/project
  feature branch

/project-hotfix
  hotfix branch
```

Useful when you need urgent work without stashing/switching the current directory.

List:

```bash
git worktree list
```

Remove:

```bash
git worktree remove ../project-hotfix
```

---

# 26. Submodules, Subtree, Git LFS

## Submodules

Record another repository at a specific commit.

```bash
git submodule add <url> libs/shared
```

Clone:

```bash
git clone --recurse-submodules <url>
```

Initialize later:

```bash
git submodule update --init --recursive
```

Mental model:

```text
Parent repo stores:
"child repo should be at commit XYZ"
```

Submodules add complexity, so use them deliberately.

## Subtree

A subtree can integrate another project's content into the main repository.

It often simplifies cloning compared with submodules, but synchronization can be more involved.

## Git LFS

For large binary assets:

```bash
git lfs install
git lfs track "*.psd"
git add .gitattributes
git add design.psd
git commit -m "Add design asset via LFS"
```

Typical uses:

```text
large media
design files
models
binaries
```

---

# 27. Sparse Checkout and Partial Clone

## Sparse checkout

```bash
git sparse-checkout init --cone
git sparse-checkout set frontend shared
```

Useful when only part of a huge monorepo is needed.

## Partial clone

```bash
git clone --filter=blob:none <url>
```

Avoids downloading all blob content immediately and can fetch objects as needed.

These techniques are valuable for very large repositories.

---

# 28. Hooks, Aliases, and Configuration

## Hooks

Common hooks:

```text
pre-commit
commit-msg
pre-push
post-merge
```

Common uses:

```text
lint
format
tests
commit-message validation
secret detection
```

Critical policy should also be enforced in CI/server controls because local hooks may be bypassed.

## Aliases

```bash
git config --global alias.st status
git config --global alias.lg "log --graph --decorate --oneline --all"
```

Then:

```bash
git st
git lg
```

## Helpful configuration

```bash
git config --global fetch.prune true
git config --global rerere.enabled true
```

`rerere` means "reuse recorded resolution" and can reuse previous conflict resolutions.

---

# 29. SSH and HTTPS Authentication

## SSH

Generate a modern key where supported:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Private key:

```text
id_ed25519
```

Never share or commit it.

Public key:

```text
id_ed25519.pub
```

Add the public key to the hosting service.

A common test form is:

```bash
ssh -T git@<host>
```

## HTTPS

Remote:

```text
https://host/company/project.git
```

Modern hosting commonly uses:

```text
personal access token
credential manager
browser/OAuth login
```

instead of ordinary account passwords.

---

# 30. Forks, Pull Requests, and Code Review

## Fork workflow

Typical remotes:

```text
origin   → your fork
upstream → original project
```

Add upstream:

```bash
git remote add upstream <original-url>
```

Update:

```bash
git fetch upstream
git switch main
git rebase upstream/main
```

## PR/MR lifecycle

```text
Issue
 ↓
Branch
 ↓
Commits
 ↓
Push
 ↓
Pull/Merge Request
 ↓
CI
 ↓
Code Review
 ↓
Approval
 ↓
Merge
```

Good PR description explains:

```text
Problem
Solution
Important design decisions
Testing
Screenshots
DB/migration impact
Deployment impact
Rollback concerns
```

Good review checks:

```text
correctness
security
readability
maintainability
performance
tests
edge cases
architecture
```

Small focused PRs are easier and safer to review.

---

# 31. Branching Strategies

Common strategies:

```text
Feature branches
GitFlow
GitHub Flow
Trunk-based development
Release branches
Fork workflow
```

No strategy is universally best.

Choose according to:

```text
team size
release frequency
CI maturity
deployment style
compliance
support requirements
risk tolerance
```

---

# 32. GitFlow

Typical branches:

```text
main
develop
feature/*
release/*
hotfix/*
```

Typical path:

```text
feature → develop → release → main
```

Hotfix:

```text
main → hotfix → main
          \
           develop
```

Advantages:

- explicit release structure;
- useful for scheduled/versioned releases.

Disadvantages:

- more long-lived branches;
- more merge overhead;
- slower integration.

---

# 33. GitHub Flow and Trunk-Based Development

## GitHub-style flow

```text
main
  \
   short-lived feature
        |
        PR
        |
       main
```

Main should generally remain deployable.

## Trunk-based development

Developers integrate frequently with:

```text
small changes
short-lived branches
strong CI
automated tests
feature flags
```

Why?

Long-lived branches diverge and become expensive to merge.

---

# 34. Releases and Hotfixes

## Release branch

```bash
git switch -c release/2.5 main
```

Stabilize, test, then tag:

```bash
git tag -a v2.5.0 -m "Release 2.5.0"
```

## Hotfix

Production bug:

```bash
git switch main
git pull --ff-only
git switch -c hotfix/payment-null
```

Fix, test, commit:

```bash
git add .
git commit -m "fix: handle null payment reference"
git push -u origin hotfix/payment-null
```

After review/merge:

```text
deploy
tag if appropriate
propagate fix to active release/development lines
```

---

# 35. Git with CI/CD

Git often triggers automation.

```text
Commit
 ↓
Push / PR
 ↓
CI
 ├── Install
 ├── Lint
 ├── Build
 ├── Unit tests
 ├── Integration tests
 └── Security checks
 ↓
Review/Merge
 ↓
Deployment pipeline
```

Possible conventions:

```text
develop → development
release/* → staging/UAT
main → production
tag v* → production release
```

Important:

> A Git branch is not inherently an environment. The mapping is implemented by team policy and CI/CD configuration.

---

# 36. Semantic Versioning and Conventional Commits

## Semantic Versioning

```text
MAJOR.MINOR.PATCH
```

Example:

```text
2.4.1
```

Typical interpretation:

```text
MAJOR → incompatible change
MINOR → backward-compatible feature
PATCH → backward-compatible bug fix
```

Pre-release:

```text
2.0.0-beta.1
```

## Conventional Commits

Pattern:

```text
type(scope): description
```

Examples:

```text
feat(auth): add password reset
fix(invoice): reject duplicate invoice
docs(readme): add deployment guide
refactor(api): simplify validation
test(payment): add refund tests
chore(deps): update packages
ci(pipeline): add security scan
```

This can power automated changelogs and release tooling.

---

# 37. Monorepos

Example:

```text
repo/
├── apps/
│   ├── web/
│   ├── admin/
│   └── api/
└── packages/
    ├── ui/
    └── shared/
```

Advantages:

```text
atomic cross-project changes
shared tooling
consistent standards
easy dependency visibility
```

Challenges:

```text
repository size
CI duration
permissions
ownership
coupling
```

Useful techniques:

```text
path-based CI
build caching
sparse checkout
partial clone
CODEOWNERS
```

---

# 38. Security, Secrets, and Signed Commits

Never commit:

```text
passwords
API keys
private keys
cloud credentials
database passwords
production .env files
access tokens
```

If a secret enters history:

```text
1. Treat it as compromised
2. Revoke/rotate it
3. Remove it from current code
4. Rewrite history if necessary
5. Coordinate with collaborators
6. Update CI/deploy secrets
```

Deleting the file in a later commit does not remove it from earlier history.

## Signed commits

Example:

```bash
git commit -S -m "Release security patch"
```

Signed annotated tag:

```bash
git tag -s v2.0.0 -m "Release 2.0.0"
```

Verification:

```bash
git verify-commit <commit>
git verify-tag v2.0.0
```

---

# 39. History Rewriting and Force Push

History rewriting changes commit IDs.

Use cases:

```text
clean private feature history
remove secrets
remove huge files
change metadata in migrations
```

A commonly used modern history-rewrite tool is:

```text
git filter-repo
```

## Force push

Dangerous:

```bash
git push --force
```

Safer when rewriting an allowed personal branch:

```bash
git push --force-with-lease
```

Why safer?

It checks that the remote ref still matches the state you expect, reducing accidental overwrites of other people's new work.

Avoid force-pushing important shared branches except during intentionally coordinated exceptional maintenance.

---

# 40. Repository Maintenance and Migration

Integrity:

```bash
git fsck
```

Object statistics:

```bash
git count-objects -vH
```

Optimize:

```bash
git gc
```

Prune stale remote-tracking refs:

```bash
git fetch --prune
```

Most maintenance is automatic.

## Migration

Mirror clone:

```bash
git clone --mirror <old-url>
```

Mirror push:

```bash
git push --mirror <new-url>
```

`--mirror` is powerful and can also delete destination refs to match the source, so use it carefully.

---

# 41. Real-World Scenarios

## Scenario 1: You forgot to update before coding

Your feature has local commits, and main advanced.

```bash
git fetch origin
git rebase origin/main
```

Or merge based on team policy:

```bash
git merge origin/main
```

Resolve conflicts, test, push.

---

## Scenario 2: Push rejected because remote changed

Do not immediately force-push.

Inspect:

```bash
git fetch origin
git log --graph --oneline --decorate --all
```

Then integrate:

```bash
git rebase origin/<branch>
```

or merge.

---

## Scenario 3: Committed on the wrong branch

Assume commit is still local.

Create correct branch at current commit:

```bash
git branch feature/correct-place
```

Move original branch back:

```bash
git reset --hard HEAD~1
```

Switch:

```bash
git switch feature/correct-place
```

Your commit remains on the new branch.

---

## Scenario 4: Need one fix from another branch

```bash
git cherry-pick <commit>
```

---

## Scenario 5: Need to stop current work for urgent issue

```bash
git stash -u
git switch main
git switch -c hotfix/urgent
```

Later:

```bash
git switch original-feature
git stash pop
```

---

## Scenario 6: Lost commit after hard reset

```bash
git reflog
```

Find the old hash:

```bash
git branch recovery <hash>
```

---

## Scenario 7: Feature branch history is messy

If the branch is your own and rewriting is permitted:

```bash
git rebase -i origin/main
```

Clean with:

```text
squash
fixup
reword
drop
```

Then:

```bash
git push --force-with-lease
```

---

## Scenario 8: Bad commit already reached shared main

Prefer:

```bash
git revert <commit>
git push
```

This preserves shared history.

---

## Scenario 9: Need to compare feature against current main

```bash
git fetch origin
git diff origin/main...HEAD
```

---

## Scenario 10: A bug appeared sometime in the last 200 commits

Use:

```bash
git bisect
```

instead of manually testing commits one by one.

---

## Scenario 11: Production hotfix while feature work is open

Instead of stashing, use worktree:

```bash
git worktree add ../hotfix main
```

Then create/fix in the second directory.

---

## Scenario 12: Merge conflict contains two valid business changes

Do not simply select one side.

Example:

Branch A:

```javascript
validateInvoiceNumber();
```

Branch B:

```javascript
validateVendorStatus();
```

Correct resolution may be:

```javascript
validateInvoiceNumber();
validateVendorStatus();
```

Conflict resolution is software development, not just marker deletion.

---

# 42. Troubleshooting

## `fatal: not a git repository`

You are outside a Git repository.

```bash
pwd
ls -a
```

Navigate into the project or initialize the intended directory.

## `nothing to commit, working tree clean`

No uncommitted change requires a commit.

## `non-fast-forward`

The remote contains history your local branch does not contain.

```bash
git fetch origin
git log --graph --oneline --all
```

Integrate before pushing.

## `src refspec main does not match any`

Possible:

```text
wrong branch name
no commits yet
typo
```

Check:

```bash
git branch
git status
git log --oneline
```

## Detached HEAD

If work should be kept:

```bash
git switch -c my-work
```

## Authentication error

Check:

```bash
git remote -v
```

Then inspect:

```text
SSH key
credential manager
token
repository permission
remote URL
```

---

# 43. Common Mistakes

1. Running `git add .` without reviewing.
2. Force-pushing shared branches.
3. Rebasing history others are using.
4. Committing secrets.
5. Using `reset --hard` without checking status.
6. Resolving conflicts blindly.
7. Creating huge unrelated commits.
8. Keeping feature branches open for too long.
9. Pulling without understanding whether merge or rebase will be used.
10. Treating `origin/main` as if it automatically updates without fetch.
11. Assuming `.gitignore` removes already tracked files.
12. Committing generated dependency folders such as `node_modules`.
13. Using Git as the only disaster-recovery strategy.
14. Deleting branches before confirming work is merged/reachable.
15. Changing line-ending settings mid-project without team coordination.

---

# 44. Professional Best Practices

1. Use `git status` constantly.
2. Review `git diff` before staging.
3. Review `git diff --staged` before committing.
4. Make small logical commits.
5. Use meaningful messages.
6. Keep feature branches short-lived.
7. Fetch/sync regularly.
8. Protect important branches.
9. Require passing CI.
10. Require review for important changes.
11. Never commit secrets.
12. Tag releases consistently.
13. Prefer `--force-with-lease` over `--force`.
14. Do not rewrite shared history casually.
15. Learn reflog before you need it.
16. Test conflict resolutions.
17. Use `.gitattributes` for repository consistency.
18. Automate lint/tests/security checks.
19. Delete merged feature branches when appropriate.
20. Document branching and release policy.
21. Keep commits independently understandable.
22. Use feature flags for incomplete trunk-based features.
23. Separate formatting-only changes from behavior changes when practical.
24. Avoid checking huge binaries into normal Git history.
25. Practice recovery in disposable repositories.

---

# 45. Command Decision Guide

| Situation | Usually use |
|---|---|
| See repository state | `git status` |
| See unstaged changes | `git diff` |
| See staged changes | `git diff --staged` |
| Stage selected hunks | `git add -p` |
| Unstage file | `git restore --staged file` |
| Discard unstaged tracked edit | `git restore file` |
| Fix latest private commit | `git commit --amend` |
| Undo shared commit | `git revert <commit>` |
| Move private history backward | `git reset` |
| Recover lost commit | `git reflog` |
| Temporarily store WIP | `git stash` |
| Apply one specific commit | `git cherry-pick` |
| Integrate branches preserving topology | `git merge` |
| Replay private work onto new base | `git rebase` |
| Find bug-introducing commit | `git bisect` |
| Mark release | `git tag` |
| Inspect remote without integrating | `git fetch` |

---

# 46. Master Cheat Sheet

## Setup

```bash
git --version
git config --global user.name "Name"
git config --global user.email "email@example.com"
git config --list --show-origin
```

## Repo

```bash
git init
git clone <url>
git status
```

## Changes

```bash
git diff
git add file
git add .
git add -p
git diff --staged
git commit -m "message"
git commit --amend
```

## History

```bash
git log
git log --oneline
git log --oneline --graph --decorate --all
git show <commit>
git reflog
```

## Branches

```bash
git branch
git switch branch
git switch -c branch
git branch -d branch
git branch -D branch
git branch -m new-name
```

## Remote

```bash
git remote -v
git fetch origin
git pull
git push
git push -u origin branch
```

## Merge/Rebase

```bash
git merge branch
git merge --abort
git rebase branch
git rebase --continue
git rebase --abort
git rebase -i HEAD~5
```

## Undo

```bash
git restore file
git restore --staged file
git reset --soft HEAD~1
git reset HEAD~1
git reset --hard HEAD~1
git revert <commit>
```

## Stash

```bash
git stash
git stash -u
git stash list
git stash apply
git stash pop
```

## Cherry-pick

```bash
git cherry-pick <commit>
git cherry-pick --continue
git cherry-pick --abort
```

## Tags

```bash
git tag
git tag -a v1.0.0 -m "Release"
git push origin v1.0.0
```

## Investigation

```bash
git blame file
git log -- file
git log -p -- file
git log -S "text"
git bisect start
```

## Advanced

```bash
git worktree list
git submodule update --init --recursive
git sparse-checkout init --cone
git fsck
git gc
```

---

# 47. Practice Roadmap

## Level 1 — Beginner

Practice:

```text
init
status
add
commit
log
diff
restore
.gitignore
```

Exercise:

1. Create a repository.
2. Add `README.md`.
3. Commit it.
4. Modify it.
5. Inspect diff.
6. Stage it.
7. Inspect staged diff.
8. Commit it.
9. Make an unwanted edit.
10. Restore the file.

## Level 2 — Branching

Create:

```text
main
feature/login
feature/profile
```

Practice:

```text
switch
merge
branch deletion
merge conflicts
```

Create an intentional conflict and resolve it.

## Level 3 — Remote collaboration

Practice with a test remote:

```text
clone
fetch
pull
push
tracking branches
```

## Level 4 — Recovery

In a disposable repository:

```text
reset
revert
reflog
stash
```

Intentionally lose a commit and recover it.

## Level 5 — History manipulation

Practice:

```text
rebase
interactive rebase
cherry-pick
```

## Level 6 — Debugging

Create 20 commits and insert a bug around commit 12.

Find it with:

```bash
git bisect
```

## Level 7 — Team simulation

Simulate:

```text
main
develop
feature/*
release/*
hotfix/*
```

Perform a feature, release, conflict, urgent hotfix, and release tag.

## Level 8 — Advanced repository

Experiment with:

```text
worktree
submodule
LFS
sparse checkout
hooks
signed commits
```

---

# 48. Interview Questions

## Beginner

### What is Git?

A distributed version control system that tracks project history through commits and references.

### Git vs GitHub?

Git is version-control software; GitHub is a hosted collaboration platform built around Git repositories.

### What is the staging area?

The index containing the exact snapshot intended for the next commit.

### What is a branch?

A movable reference to a commit.

### What is HEAD?

A reference representing the currently checked-out position, normally the current branch.

## Intermediate

### Fetch vs pull?

Fetch downloads remote information. Pull fetches and then integrates changes.

### Merge vs rebase?

Merge combines histories without rewriting existing commits. Rebase replays commits onto another base and therefore rewrites those commits.

### Reset vs revert?

Reset moves references and can change index/working state. Revert creates a new inverse commit and is safer for shared history.

### What is `origin/main`?

A local remote-tracking reference representing the last fetched state of `main` from `origin`.

### Why does Git have staging?

To let developers construct focused commits containing exactly the intended changes.

## Advanced

### What is reflog?

A local record of reference movements useful for recovery.

### Why is rebase dangerous on shared branches?

It creates new commit identities and changes ancestry, which can conflict with collaborators' existing history.

### Why is `--force-with-lease` safer than `--force`?

It checks whether the remote reference changed unexpectedly before overwriting it.

### What is a merge base?

A best common ancestor used for merge and comparison logic.

### What object types does Git use?

Primarily blobs, trees, commits, and annotated tag objects.

### What is detached HEAD?

HEAD points directly to a commit instead of a branch.

### What is bisect?

A binary-search mechanism for identifying the commit that introduced a regression.

### Why are branches cheap?

A branch is mainly a lightweight reference rather than a full copy of project files/history.

---

# 49. Final Mental Models

## Model 1 — Local state

```text
Working Tree
    |
    | add
    v
Index
    |
    | commit
    v
Repository
```

## Model 2 — Remote collaboration

```text
Remote
  |
  | fetch
  v
Remote-tracking refs
  |
  | merge/rebase
  v
Local branch
  |
  | push
  v
Remote
```

## Model 3 — Branch = movable reference

```text
A---B---C
        ^
        |
       main
        ^
       HEAD
```

A branch is not a folder or a second full project.

## Model 4 — History = graph

```text
A---B---C---F
     \     /
      D---E
```

The graph explains:

```text
merge
rebase
reset
revert
cherry-pick
bisect
reflog
```

## Model 5 — Undo depends on whether history is shared

```text
Private history
    ↓
amend / reset / rebase may be appropriate

Shared history
    ↓
revert / new corrective commits are usually safer
```

## Model 6 — Git is snapshot-oriented

Do not think:

```text
Git just saves files.
```

Think:

```text
Git records project states and relationships between them.
```

---

# Recommended Professional Daily Workflow

```bash
git status
git fetch origin
git switch -c feature/my-feature

# edit

git diff
git add -p
git diff --staged
git commit -m "feat: implement my feature"
git push -u origin feature/my-feature
```

Then:

```text
Open PR/MR
↓
Run CI
↓
Code review
↓
Address feedback
↓
Merge
↓
Delete feature branch when appropriate
```

---

# What to Learn Next

After mastering this handbook, continue with:

```text
GitHub/GitLab branch protection
CODEOWNERS
merge queues
CI/CD pipelines
GitOps
semantic-release
automated changelogs
dependency scanning
secret scanning
SAST
supply-chain security
monorepo build systems
feature flags
deployment strategies
repository governance
```

---

# Final Summary

The commands worth understanding deeply are:

```text
status
diff
add
commit
log
branch
switch
fetch
pull
push
merge
rebase
restore
reset
revert
reflog
stash
cherry-pick
tag
bisect
```

Do not simply memorize them.

For every Git operation, ask:

```text
What state does this command read?
What state does it modify?
Does it rewrite history?
Can it destroy work?
Does it affect collaborators?
Can it be recovered?
```

Once you can answer those questions reliably, you are not merely memorizing Git commands—you understand Git.
