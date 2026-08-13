# Visual Studio Code Developer Master Handbook

> **A practical, beginner-friendly-to-advanced guide for getting maximum value from VS Code as a professional developer**
>
> **Verified against current official documentation:** 13 August 2026  
> **Primary shortcut notation:** Windows / Linux, with macOS equivalents for the most important shortcuts  
> **VS Code terminology:** VS Code calls plugins **extensions**. This handbook uses “extension” as the correct term.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What VS Code Actually Is](#2-what-vs-code-actually-is)
3. [Why Developers Use VS Code](#3-why-developers-use-vs-code)
4. [Install and Configure VS Code Correctly](#4-install-and-configure-vs-code-correctly)
5. [Understand the VS Code Interface](#5-understand-the-vs-code-interface)
6. [The Command Palette: Your Control Center](#6-the-command-palette-your-control-center)
7. [Files, Folders, Workspaces, and Multi-root Workspaces](#7-files-folders-workspaces-and-multi-root-workspaces)
8. [Settings: User, Workspace, Remote, and Language-specific](#8-settings-user-workspace-remote-and-language-specific)
9. [Profiles and Settings Sync](#9-profiles-and-settings-sync)
10. [Editing Mastery](#10-editing-mastery)
11. [Navigation and Code Intelligence](#11-navigation-and-code-intelligence)
12. [Search and Replace Mastery](#12-search-and-replace-mastery)
13. [Integrated Terminal](#13-integrated-terminal)
14. [Tasks and Build Automation](#14-tasks-and-build-automation)
15. [Debugging Like a Professional](#15-debugging-like-a-professional)
16. [Testing Inside VS Code](#16-testing-inside-vs-code)
17. [Git and Source Control](#17-git-and-source-control)
18. [Snippets, Emmet, and Code Generation](#18-snippets-emmet-and-code-generation)
19. [Remote Development: WSL, SSH, Containers, Tunnels, Codespaces](#19-remote-development-wsl-ssh-containers-tunnels-codespaces)
20. [AI and Agentic Development in Modern VS Code](#20-ai-and-agentic-development-in-modern-vs-code)
21. [Extension Strategy: Install Less, Get More](#21-extension-strategy-install-less-get-more)
22. [Language and Framework Extension Guide](#22-language-and-framework-extension-guide)
23. [DevOps, Cloud, Infrastructure, and Database Extensions](#23-devops-cloud-infrastructure-and-database-extensions)
24. [General Productivity Extensions](#24-general-productivity-extensions)
25. [Keyboard Shortcut Mastery](#25-keyboard-shortcut-mastery)
26. [Recommended settings.json](#26-recommended-settingsjson)
27. [Project-level .vscode Configuration](#27-project-level-vscode-configuration)
28. [Performance Optimization](#28-performance-optimization)
29. [Security and Workspace Trust](#29-security-and-workspace-trust)
30. [Troubleshooting Playbook](#30-troubleshooting-playbook)
31. [Professional Workflows by Scenario](#31-professional-workflows-by-scenario)
32. [Beginner-to-Expert Learning Roadmap](#32-beginner-to-expert-learning-roadmap)
33. [Daily Productivity Checklist](#33-daily-productivity-checklist)
34. [Mistakes to Avoid](#34-mistakes-to-avoid)
35. [Command-line Cheat Sheet](#35-command-line-cheat-sheet)
36. [Official References and Extension Sources](#36-official-references-and-extension-sources)

---

# 1. How to Use This Handbook

Do **not** try to memorize everything in one reading.

Use this handbook in four passes:

### Pass 1 — Become comfortable

Learn:

- the Explorer;
- Command Palette;
- Quick Open;
- terminal;
- basic shortcuts;
- extensions;
- settings;
- Git basics.

### Pass 2 — Become fast

Learn:

- multi-cursor editing;
- code navigation;
- symbol search;
- global search;
- refactoring;
- formatting;
- snippets;
- split editors;
- tasks.

### Pass 3 — Become professional

Learn:

- workspace settings;
- debugging;
- testing;
- Git workflows;
- profiles;
- remote development;
- Dev Containers;
- extension management;
- security.

### Pass 4 — Become highly optimized

Learn:

- custom keybindings;
- custom snippets;
- reusable tasks;
- multi-root workspaces;
- language-specific profiles;
- agent/AI workflows;
- performance profiling;
- team-wide `.vscode` configuration.

A good VS Code user does not simply know where buttons are. A productive developer knows how to **remove repetitive actions from the development loop**.

---

# 2. What VS Code Actually Is

Visual Studio Code is a lightweight but highly extensible code editor and development environment.

It sits between:

- a basic text editor such as Notepad++;
- a terminal-based editor such as Vim/Neovim;
- a full traditional IDE such as Visual Studio, IntelliJ IDEA, or Eclipse.

VS Code provides a strong editor core and then lets language extensions, debuggers, formatters, test adapters, source-control providers, remote-development tools, and AI tools add specialized capabilities.

## 2.1 VS Code is not your compiler

Installing VS Code does **not** automatically install every programming language.

Examples:

| Development | You still normally need |
|---|---|
| Python | Python interpreter |
| Java | JDK |
| C / C++ | GCC, Clang, MSVC, or another compiler |
| C# / .NET | .NET SDK |
| PHP | PHP runtime |
| Node.js | Node.js runtime |
| Go | Go toolchain |
| Rust | Rust toolchain / `rustup` |
| Flutter | Flutter SDK |
| Docker | Docker Engine / Docker Desktop or compatible engine |
| Terraform | Terraform CLI |

An extension usually connects VS Code to these tools. It does not replace them.

## 2.2 The correct mental model

Think of your development environment as layers:

```text
Operating System
    ↓
Language Runtime / Compiler / SDK
    ↓
Package Manager / Build Tools
    ↓
Project
    ↓
VS Code
    ↓
Language Extension / Debugger / Formatter / Linter
    ↓
Your workflow
```

When something fails, identify **which layer is broken**.

Example:

> “Python autocomplete works, but `python` is not recognized in the terminal.”

That is probably a runtime/PATH problem, not an IntelliSense problem.

---

# 3. Why Developers Use VS Code

## 3.1 One editor for many stacks

A single VS Code installation can be configured for:

- frontend;
- backend;
- full-stack;
- mobile;
- data science;
- DevOps;
- cloud engineering;
- infrastructure as code;
- scripting;
- database development;
- documentation;
- remote server maintenance.

Profiles make it practical to keep these environments separated.

## 3.2 Strong keyboard-driven workflow

Nearly every action can be triggered through:

```text
Ctrl + Shift + P
```

You can work without memorizing menu locations.

## 3.3 Excellent language intelligence

Depending on the language extension, VS Code can provide:

- IntelliSense;
- autocomplete;
- parameter hints;
- type information;
- diagnostics;
- semantic highlighting;
- Go to Definition;
- Find References;
- symbol search;
- rename refactoring;
- quick fixes;
- imports;
- code actions;
- inlay hints.

## 3.4 Built-in developer tools

VS Code includes or exposes first-class interfaces for:

- terminal;
- source control;
- debugging;
- testing;
- tasks;
- problems/errors;
- search;
- Markdown preview;
- port forwarding;
- extensions;
- remote development;
- AI tools.

## 3.5 Project-specific configuration

A project can contain:

```text
.vscode/
├── settings.json
├── extensions.json
├── tasks.json
└── launch.json
```

This lets a team share useful editor behavior without forcing every developer to manually configure the environment.

## 3.6 Remote development

You can keep the VS Code UI on your local machine while the source code and runtimes live in:

- WSL;
- an SSH server;
- a container;
- a cloud development environment.

This is one of VS Code’s biggest advantages for backend and DevOps work.

## 3.7 Flexible rather than monolithic

You can create:

- a minimal Markdown profile;
- a frontend profile;
- a Python profile;
- a Java/Spring profile;
- a DevOps profile.

This is much better than enabling every extension for every project.

---

# 4. Install and Configure VS Code Correctly

## 4.1 Recommended first setup

After installing VS Code:

1. Make sure the `code` command is available from your terminal.
2. Sign in if you want Settings Sync.
3. Choose your theme.
4. Set your preferred font size.
5. Configure the terminal profile.
6. Enable the settings you genuinely need.
7. Install only the extensions required for your current stack.
8. Create profiles for significantly different stacks.

## 4.2 Confirm the command-line launcher

Run:

```bash
code --version
```

Useful commands:

```bash
code .
code my-project
code file.js
code -n .
code -r .
```

Meaning:

| Command | Purpose |
|---|---|
| `code .` | Open current directory |
| `code file.js` | Open a file |
| `code -n .` | Open in a new window |
| `code -r .` | Reuse existing window |
| `code --version` | Show VS Code version |
| `code --help` | Show CLI help |

## 4.3 Open the project folder, not random files

Bad workflow:

```text
Open app.js
Open controller.js
Open config.json
```

Better:

```bash
cd my-project
code .
```

Why?

VS Code can now understand:

- project structure;
- workspace settings;
- source control;
- module imports;
- search scope;
- language server context;
- tasks;
- debug configuration;
- test discovery.

---

# 5. Understand the VS Code Interface

The main areas are:

```text
┌─────────────────────────────────────────────────────┐
│ Title Bar / Command Center                          │
├───────┬─────────────────────────────────────────────┤
│       │ Editor Groups                               │
│ Side  │                                             │
│ Bar   │                                             │
│       │                                             │
├───────┴─────────────────────────────────────────────┤
│ Panel: Terminal / Problems / Output / Debug Console │
├─────────────────────────────────────────────────────┤
│ Status Bar                                          │
└─────────────────────────────────────────────────────┘
```

## 5.1 Activity Bar

Common views:

- Explorer;
- Search;
- Source Control;
- Run and Debug;
- Extensions;
- Testing when available;
- extension-contributed views.

## 5.2 Explorer

Use Explorer for:

- files;
- folders;
- outline;
- timeline;
- project-specific views added by extensions.

Productivity habit:

> Do not constantly click through folders if you already know the filename. Use `Ctrl+P`.

## 5.3 Editor Groups

VS Code supports split editors.

Example:

```text
┌────────────────────┬────────────────────┐
│ Controller         │ Service            │
│                    │                    │
├────────────────────┼────────────────────┤
│ Test               │ Terminal / Output  │
└────────────────────┴────────────────────┘
```

Good use cases:

- component + template;
- controller + service;
- implementation + test;
- source + generated output;
- API route + schema;
- code + documentation.

## 5.4 Panel

Contains:

- Terminal;
- Problems;
- Output;
- Debug Console;
- Ports;
- other extension views.

### Important distinction

**Terminal** = your shell.

**Output** = logs emitted by VS Code/extensions/tools.

**Problems** = normalized diagnostics.

**Debug Console** = debugger evaluation/output.

When troubleshooting, check the correct panel.

## 5.5 Status Bar

The Status Bar can show:

- Git branch;
- errors/warnings;
- line/column;
- spaces/tabs;
- encoding;
- end-of-line format;
- language mode;
- interpreter/runtime;
- formatter;
- remote connection;
- extension status.

Do not ignore it. Many “VS Code is not working” problems are visible there.

---

# 6. The Command Palette: Your Control Center

Shortcut:

```text
Windows/Linux: Ctrl + Shift + P
macOS:         Cmd + Shift + P
Alternative:   F1
```

The Command Palette exposes commands based on:

- VS Code core;
- current language;
- installed extensions;
- current editor state;
- remote environment.

Examples:

```text
Format Document
Developer: Reload Window
Preferences: Open User Settings (JSON)
Tasks: Run Task
Debug: Add Configuration
Git: Clone
Extensions: Show Installed Extensions
Python: Select Interpreter
Java: Clean Java Language Server Workspace
Remote-SSH: Connect to Host
Dev Containers: Reopen in Container
```

## Productivity rule

Before searching Google for “where is option X in VS Code,” try:

```text
Ctrl + Shift + P
```

and type what you want to do.

---

# 7. Files, Folders, Workspaces, and Multi-root Workspaces

## 7.1 Folder workspace

For most projects:

```bash
code my-project
```

The project folder acts as your workspace.

## 7.2 `.code-workspace`

A named workspace can store:

- multiple project roots;
- shared settings;
- workspace metadata.

Example:

```json
{
  "folders": [
    {
      "name": "frontend",
      "path": "./frontend"
    },
    {
      "name": "backend",
      "path": "./backend"
    }
  ],
  "settings": {
    "files.exclude": {
      "**/.git": true
    }
  }
}
```

## 7.3 Multi-root scenario

Suppose your system is:

```text
E:\Projects\customer-portal-ui
E:\Services\customer-api
E:\Infrastructure\customer-infra
```

You can put all three in one workspace:

```text
Customer Platform.code-workspace
├── customer-portal-ui
├── customer-api
└── customer-infra
```

Now global search, tasks, debugging, and navigation can work across the logical system.

## 7.4 When not to use multi-root

Avoid it when:

- the projects are unrelated;
- the combined language servers consume too much memory;
- Git actions become confusing;
- you only need one project.

---

# 8. Settings: User, Workspace, Remote, and Language-specific

VS Code settings have scopes.

## 8.1 User settings

Apply broadly to your VS Code installation/profile.

Examples:

```json
{
  "editor.fontSize": 14,
  "editor.minimap.enabled": false
}
```

Use for personal preferences.

## 8.2 Workspace settings

Stored in:

```text
.vscode/settings.json
```

Use for project-specific behavior.

Examples:

- default formatter;
- linting behavior;
- file exclusions;
- test configuration;
- language SDK path where appropriate.

## 8.3 Remote settings

When you work through WSL, SSH, or a container, some settings can apply specifically to that remote environment.

## 8.4 Language-specific settings

Example:

```json
{
  "[javascript][typescript][javascriptreact][typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Another example:

```json
{
  "[python]": {
    "editor.formatOnSave": true
  }
}
```

## 8.5 Precedence mental model

Think roughly:

```text
Defaults
   ↓
User/Profile Settings
   ↓
Remote Settings (when relevant)
   ↓
Workspace Settings
   ↓
Workspace Folder Settings
   ↓
Language-specific settings where applicable
```

Use project settings for **team behavior** and user settings for **personal taste**.

---

# 9. Profiles and Settings Sync

Profiles are one of the best ways to keep VS Code clean.

A profile can isolate development configurations such as:

- extensions;
- settings;
- keyboard shortcuts;
- UI state;
- tasks;
- snippets.

## 9.1 Recommended profiles

### Profile: Web

Extensions:

- ESLint;
- Prettier;
- framework language service;
- Tailwind CSS IntelliSense if needed.

### Profile: Python

Extensions:

- Python;
- Pylance;
- Python Debugger;
- Python Environments;
- Ruff;
- Jupyter when needed.

### Profile: Java / Spring

Extensions:

- Extension Pack for Java;
- Spring Boot Extension Pack;
- Gradle extension if applicable.

### Profile: DevOps

Extensions:

- Container Tools;
- Dev Containers;
- Kubernetes;
- YAML;
- Terraform;
- Remote - SSH.

### Profile: Docs

Extensions:

- markdownlint;
- spell checker;
- Markdown tools.

## 9.2 Why profiles improve performance

A Java language server does not need to run while you are editing Markdown.

A Kubernetes extension does not need to be active in a small React project.

Profiles reduce:

- extension clutter;
- commands in the palette;
- startup work;
- memory pressure;
- configuration conflicts.

## 9.3 Settings Sync

Settings Sync can synchronize items such as:

- settings;
- keyboard shortcuts;
- extensions;
- profiles.

Important:

> Extensions in remote windows such as SSH, WSL, and Dev Containers are managed separately from ordinary local synchronization behavior.

---

# 10. Editing Mastery

This section provides some of the highest-return productivity techniques.

## 10.1 Move lines without cut/paste

```text
Alt + Up
Alt + Down
```

Scenario:

```js
validateUser();
logRequest();
authenticate();
```

You realize `authenticate()` should run first.

Instead of cut → move cursor → paste:

1. Put cursor on the line.
2. Press `Alt+Up` twice.

## 10.2 Duplicate a line

Windows:

```text
Shift + Alt + Down
Shift + Alt + Up
```

Scenario:

```html
<li>Home</li>
```

Duplicate and edit:

```html
<li>Home</li>
<li>Products</li>
<li>Contact</li>
```

## 10.3 Delete a full line

```text
Ctrl + Shift + K
```

No need to select the line.

## 10.4 Insert line below without moving to the end

```text
Ctrl + Enter
```

Insert line above:

```text
Ctrl + Shift + Enter
```

## 10.5 Toggle comment

```text
Ctrl + /
```

Useful for:

- temporary debugging;
- feature comparison;
- disabling configuration;
- commenting several selected lines.

## 10.6 Block comment

Windows:

```text
Shift + Alt + A
```

Useful for CSS/JS/TS/PHP/Java block comments where supported.

## 10.7 Multiple cursors

### Add cursor with mouse

```text
Alt + Click
```

### Add cursor vertically

Windows:

```text
Ctrl + Alt + Up
Ctrl + Alt + Down
```

### Select next occurrence

```text
Ctrl + D
```

### Select all matching occurrences

```text
Ctrl + Shift + L
```

### Change all occurrences of current word

```text
Ctrl + F2
```

### Cursor at end of every selected line

```text
Shift + Alt + I
```

## 10.8 Multi-cursor scenario

Original:

```js
const userName = getName();
const userEmail = getEmail();
const userRole = getRole();
```

Suppose you want:

```js
const cachedUserName = getName();
const cachedUserEmail = getEmail();
const cachedUserRole = getRole();
```

Select `user` and use repeated `Ctrl+D`, or use a column/multi-cursor technique.

## 10.9 Rename symbol vs text replacement

### Text replacement

Changes characters.

### Rename Symbol

Shortcut:

```text
F2
```

A language-aware rename can update valid symbol references rather than blindly replacing text.

Example:

```ts
function calculateTotal() {}
```

Renaming with `F2` can update calls such as:

```ts
calculateTotal();
```

without changing unrelated text in comments or strings, depending on language support.

**Prefer semantic refactoring over global text replacement when possible.**

## 10.10 Quick Fix

```text
Ctrl + .
```

Possible actions:

- add missing import;
- implement interface;
- fix lint rule;
- convert syntax;
- create missing method;
- remove unused import;
- apply refactoring.

The exact actions depend on the language extension.

## 10.11 Format document

Windows:

```text
Shift + Alt + F
```

Formatting selection:

```text
Ctrl + K, Ctrl + F
```

Do not manually align code that a formatter can maintain automatically.

## 10.12 Word wrap

```text
Alt + Z
```

Useful for:

- Markdown;
- logs;
- long JSON;
- documentation;
- minified-ish output.

## 10.13 Folding

Fold:

```text
Ctrl + Shift + [
```

Unfold:

```text
Ctrl + Shift + ]
```

Fold all:

```text
Ctrl + K, Ctrl + 0
```

Unfold all:

```text
Ctrl + K, Ctrl + J
```

Useful for navigating:

- long controllers;
- JSON;
- configuration;
- generated code;
- large test files.

---

# 11. Navigation and Code Intelligence

Strong developers spend less time scrolling.

## 11.1 Quick Open

```text
Ctrl + P
```

Type part of a filename.

Example:

```text
invoicecontroller
```

Open the file immediately.

## 11.2 Go to line

```text
Ctrl + G
```

Enter:

```text
248
```

Jump to line 248.

## 11.3 Go to symbol in current file

```text
Ctrl + Shift + O
```

Use it in a 2,000-line legacy file instead of scrolling.

## 11.4 Search symbols across workspace

```text
Ctrl + T
```

Search for:

- class names;
- methods;
- interfaces;
- functions;
- symbols.

Language-server quality affects results.

## 11.5 Go to Definition

```text
F12
```

## 11.6 Peek Definition

Windows:

```text
Alt + F12
```

This keeps your current file visible and opens the definition inline.

Great when you only need to inspect something quickly.

## 11.7 Find References

```text
Shift + F12
```

Use before:

- changing public functions;
- renaming an API;
- removing code;
- changing interfaces.

## 11.8 Navigate back / forward

Windows:

```text
Alt + Left
Alt + Right
```

Workflow:

```text
Controller → Service → Repository → Model
```

Then:

```text
Alt + Left
Alt + Left
Alt + Left
```

to return.

## 11.9 Problems navigation

Show Problems:

```text
Ctrl + Shift + M
```

Next problem:

```text
F8
```

Previous:

```text
Shift + F8
```

This can be faster than clicking every red underline.

---

# 12. Search and Replace Mastery

## 12.1 Search current file

```text
Ctrl + F
```

Replace current file:

```text
Ctrl + H
```

## 12.2 Search entire workspace

```text
Ctrl + Shift + F
```

Replace across files:

```text
Ctrl + Shift + H
```

## 12.3 Important search controls

You can toggle:

- case sensitivity;
- whole word;
- regular expressions;
- include files;
- exclude files.

## 12.4 Search by file pattern

Examples:

```text
*.ts
src/**/*.php
**/*.spec.ts
!node_modules
```

## 12.5 Regex example: find debug logs

Search:

```regex
console\.log\(
```

This finds likely `console.log(` calls.

## 12.6 Regex capture groups

Input:

```text
Shaikh, Shoeb
Doe, Jane
```

Search:

```regex
(\w+),\s*(\w+)
```

Replace:

```text
$2 $1
```

Result:

```text
Shoeb Shaikh
Jane Doe
```

Always preview large replacements before applying them.

## 12.7 Exclude generated directories

For many web projects, search should avoid:

```text
node_modules
dist
build
coverage
.next
vendor
target
bin
obj
```

Most language tools already ignore some of these, but explicit workspace exclusions can reduce noise.

---

# 13. Integrated Terminal

Toggle terminal:

```text
Ctrl + `
```

## 13.1 Why integrated terminal is valuable

It reduces context switching.

Examples:

```bash
npm run dev
npm test
git status
php artisan serve
php artisan test
python -m pytest
mvn test
gradle test
dotnet test
go test ./...
cargo test
docker compose up
kubectl get pods
terraform plan
```

## 13.2 Use multiple terminals

Possible terminal layout:

```text
Terminal 1: frontend dev server
Terminal 2: backend API
Terminal 3: tests
Terminal 4: Git / shell
```

Name terminals meaningfully.

## 13.3 Split terminal

Useful when running:

```text
npm run dev
```

and:

```text
npm test -- --watch
```

at the same time.

## 13.4 Terminal profiles

You may configure profiles such as:

- PowerShell;
- Command Prompt;
- Git Bash;
- WSL;
- Bash;
- zsh;
- fish.

## 13.5 Terminal environment problems

If a runtime works outside VS Code but not inside:

1. restart VS Code;
2. open a new terminal;
3. verify PATH;
4. check selected terminal profile;
5. compare environment variables;
6. check whether you are in local, WSL, SSH, or container context.

---

# 14. Tasks and Build Automation

Tasks let VS Code run external tools in a repeatable way.

Configuration:

```text
.vscode/tasks.json
```

## 14.1 Simple npm build task

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build frontend",
      "type": "shell",
      "command": "npm run build",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": []
    }
  ]
}
```

Run default build task:

```text
Ctrl + Shift + B
```

## 14.2 Backend test task

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Laravel tests",
      "type": "shell",
      "command": "php artisan test",
      "group": "test",
      "problemMatcher": []
    }
  ]
}
```

## 14.3 Compound task

Suppose a full-stack project needs:

1. frontend build;
2. backend tests;
3. lint.

You can define multiple tasks and a compound task that depends on them.

Concept:

```json
{
  "label": "Validate project",
  "dependsOn": [
    "Lint frontend",
    "Test backend",
    "Build frontend"
  ],
  "dependsOrder": "sequence"
}
```

## 14.4 Problem matchers

A problem matcher converts compiler/linter output into clickable VS Code Problems.

Examples supported by VS Code include matchers for tools such as TypeScript and common compiler output.

Why it matters:

Instead of reading:

```text
src/app.ts(42,7): error TS2322 ...
```

you get a clickable problem attached to the file/line.

## 14.5 Variables in tasks

Useful variables include:

```text
${workspaceFolder}
${file}
${fileDirname}
${fileBasename}
${fileBasenameNoExtension}
${env:VARIABLE_NAME}
```

Example:

```json
{
  "command": "python",
  "args": [
    "${file}"
  ]
}
```

---

# 15. Debugging Like a Professional

Many developers overuse `console.log()` and underuse the debugger.

## 15.1 Core debug workflow

1. Set a breakpoint.
2. Start debugging.
3. Reproduce the problem.
4. Inspect variables.
5. Step through code.
6. Evaluate expressions.
7. inspect call stack.
8. fix the real cause.

## 15.2 Essential debug shortcuts

| Action | Shortcut |
|---|---|
| Toggle breakpoint | `F9` |
| Start / Continue | `F5` |
| Run without debugging | `Ctrl+F5` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift+F11` |
| Pause | `F6` where mapped |
| Stop | commonly `Shift+F5` |

Shortcut mappings can vary with platform/keymap; use the Keyboard Shortcuts editor if necessary.

## 15.3 Breakpoint types

Depending on the debugger:

- normal breakpoint;
- conditional breakpoint;
- logpoint;
- function breakpoint;
- data breakpoint.

## 15.4 Conditional breakpoint example

Suppose a loop runs 10,000 times.

Bad:

```text
Break every iteration.
```

Better condition:

```text
user.id === 874
```

The debugger pauses only when the condition is true.

## 15.5 Logpoints

A logpoint can produce debugging information without modifying source code with temporary log statements.

Useful for:

- repeated loops;
- hard-to-reproduce issues;
- observing values while execution continues.

## 15.6 `launch.json`

Stored in:

```text
.vscode/launch.json
```

Basic Node example:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run current Node file",
      "program": "${file}",
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
}
```

## 15.7 `preLaunchTask`

Debug configuration can run a build task first.

Concept:

```json
{
  "name": "Debug application",
  "request": "launch",
  "preLaunchTask": "Build application"
}
```

This creates:

```text
Build → Launch → Breakpoint → Inspect
```

instead of manually building first.

## 15.8 Watch expressions

Add expressions such as:

```text
invoice.total
user.permissions
items.length
request.headers.authorization
```

Watch them change as you step.

## 15.9 Call Stack

When a deeply nested function fails, Call Stack shows:

```text
HTTP handler
  → service
    → helper
      → parser
        → failing function
```

This helps answer:

> “How did execution reach this line?”

---

# 16. Testing Inside VS Code

VS Code provides a Testing interface that language/test extensions can integrate with.

Possible capabilities:

- discover tests;
- run all tests;
- run a file;
- run a single test;
- debug a test;
- show pass/fail;
- show coverage;
- navigate failure output.

## 16.1 Why use Test Explorer?

Instead of repeatedly typing:

```bash
pytest tests/services/test_invoice.py::test_total
```

you may be able to click or invoke the test directly from:

- Testing view;
- CodeLens;
- editor gutter.

## 16.2 Keep the CLI as the source of truth

The editor UI is a convenience layer.

Your project should still be testable using standard commands in CI.

Examples:

```bash
npm test
pytest
php artisan test
mvn test
gradle test
dotnet test
go test ./...
cargo test
```

## 16.3 Debug failing tests

A powerful workflow is:

```text
Run test → Failure → Debug same test → breakpoint → inspect state
```

This is much faster than adding print statements repeatedly.

---

# 17. Git and Source Control

VS Code contains built-in Git integration when Git is installed.

Open Source Control:

```text
Ctrl + Shift + G
```

## 17.1 Common operations

You can:

- initialize repository;
- view changed files;
- inspect diffs;
- stage;
- unstage;
- commit;
- switch/create branches;
- pull;
- push;
- resolve conflicts;
- inspect file history/timeline;
- use additional Git provider extensions.

## 17.2 Recommended professional loop

```text
Pull/update
    ↓
Create branch
    ↓
Implement small change
    ↓
Review diff
    ↓
Run formatter/linter/tests
    ↓
Stage intentionally
    ↓
Commit
    ↓
Push
    ↓
Create PR
```

## 17.3 Do not stage blindly

Before committing:

1. Open Source Control.
2. Click each changed file.
3. Review the diff.
4. Remove accidental debug code.
5. confirm no secrets were added.
6. stage only intended changes.

## 17.4 Use partial staging

When a file contains two unrelated changes, stage selected hunks instead of combining both into one commit.

## 17.5 Conflict resolution

A conflict can contain concepts such as:

```text
Current
Incoming
Both
```

Do not blindly choose “Accept Both.”

Understand the intended final code and run tests after resolution.

## 17.6 GitLens — when useful

GitLens is optional because VS Code already has strong Git support.

Use GitLens when you need deeper history-oriented workflows such as:

- richer blame information;
- commit history exploration;
- line/file history;
- advanced repository context.

Do not install it merely because “every extension list says so.”

---

# 18. Snippets, Emmet, and Code Generation

## 18.1 Snippets

A snippet is a reusable code template.

Example custom JavaScript snippet:

```json
{
  "Console Error": {
    "prefix": "cerr",
    "body": [
      "console.error('$1', $2);"
    ],
    "description": "Insert console.error"
  }
}
```

Typing:

```text
cerr
```

can expand into:

```js
console.error('message', value);
```

## 18.2 Placeholder syntax

Common snippet variables:

```text
$1
$2
$0
${1:name}
```

`$1` = first cursor stop.

`$0` = final cursor position.

## 18.3 Useful team snippets

Create snippets for repetitive project patterns such as:

- Angular component shell;
- React component;
- API response wrapper;
- logging structure;
- PHP controller method;
- Java service method;
- SQL stored procedure header;
- unit test skeleton.

Avoid snippets that hide logic the developer does not understand.

## 18.4 Emmet

VS Code has strong Emmet support for web editing.

Example:

```text
ul>li.item*3
```

can expand into a list structure.

Another example:

```text
div.container>section.content+aside.sidebar
```

Emmet is extremely useful for HTML/CSS-oriented work.

---

# 19. Remote Development: WSL, SSH, Containers, Tunnels, Codespaces

Remote development is one of VS Code’s highest-value capabilities.

## 19.1 WSL

Use the WSL extension when:

- your host is Windows;
- your application should run in Linux;
- you want Linux package managers/toolchains;
- you want filesystem/runtime behavior closer to production.

Concept:

```text
Windows
  ├── VS Code UI
  └── WSL Ubuntu
       ├── source code
       ├── Node/Python/PHP/etc.
       └── tools
```

## 19.2 Remote - SSH

Use when the development environment is on:

- Linux server;
- VM;
- cloud host;
- dedicated workstation.

Workflow:

```text
Local VS Code UI
       ↓ SSH
Remote machine
  ├── project files
  ├── compiler/runtime
  ├── terminal
  └── remotely installed extensions
```

This is much better than editing remote files via repeated download/upload.

## 19.3 Dev Containers

A Dev Container puts the development environment in a container.

Example project:

```text
.devcontainer/
└── devcontainer.json
Dockerfile
docker-compose.yml
src/
```

Benefits:

- repeatable environment;
- team consistency;
- easy onboarding;
- isolated dependencies;
- closer parity with CI/production;
- fewer “works on my machine” problems.

## 19.4 Container Tools vs Dev Containers

### Container Tools

Use to work with container images/containers and Docker-oriented workflows.

### Dev Containers

Use when **the container itself is your development environment**.

They solve related but different problems.

## 19.5 Tunnels

VS Code remote tunnels can provide remote access to a machine through a secure tunnel.

Use cases:

- access a development PC remotely;
- work on a VM without exposing a normal inbound editor port;
- connect from another VS Code environment.

Always understand your organization’s security requirements before exposing development services.

## 19.6 Port forwarding

VS Code has a Ports view that can forward a local/remote service port.

Example:

```text
Application: localhost:3000
        ↓
Forwarded port
        ↓
Temporary reachable endpoint
```

Be careful before setting ports to broader visibility when services contain sensitive data.

## 19.7 Codespaces / browser editor

A browser-based VS Code experience is useful for:

- reviewing repositories;
- lightweight edits;
- quick PR changes.

A cloud-hosted development environment is better when you must:

- run builds;
- install dependencies;
- debug;
- use a complete runtime.

---

# 20. AI and Agentic Development in Modern VS Code

> This section reflects the VS Code feature set verified in August 2026. AI features, model availability, quotas, provider integrations, preview flags, and organization policies can change faster than core editor features.

Modern VS Code includes AI-assisted workflows such as:

- inline suggestions;
- chat;
- inline chat;
- agent sessions;
- planning workflows;
- multi-file changes;
- terminal/tool execution;
- custom agents;
- MCP tools;
- agent skills;
- multiple model/provider options depending on configuration and entitlement.

Some capabilities may require GitHub Copilot, another provider, a subscription, preview settings, or organization approval.

## 20.1 AI should accelerate understanding, not replace it

Bad use:

```text
“Rewrite the whole application and auto-approve everything.”
```

Better use:

```text
1. Explain current architecture.
2. Identify affected files.
3. Produce a plan.
4. Implement one bounded change.
5. Run tests.
6. Review the diff.
```

## 20.2 Useful AI scenarios

### Understand unfamiliar code

Ask:

```text
Explain the request flow from this route to database persistence.
Include the relevant files and functions.
```

### Refactor safely

Ask:

```text
Extract this validation logic into a reusable function.
Do not change behavior.
Update tests.
```

### Generate tests

Ask:

```text
Create tests for boundary cases, invalid input, and the success path.
Follow the existing test style.
```

### Debug

Ask:

```text
Analyze this stack trace and the related call path.
List the most likely root causes before changing code.
```

### Documentation

Ask:

```text
Generate developer documentation for this module based only on the code.
Highlight configuration and failure modes.
```

## 20.3 Plan before implementation

A strong agent workflow:

```text
Explore
  ↓
Plan
  ↓
Review plan
  ↓
Implement
  ↓
Test
  ↓
Review diff
```

For risky changes, separate planning from execution.

## 20.4 Custom agents

VS Code supports custom agent definitions, including workspace-level `.agent.md` files in supported workflows.

Possible custom agents:

- security reviewer;
- test writer;
- Laravel specialist;
- Angular reviewer;
- documentation agent;
- migration planner;
- database-query reviewer.

A custom agent should specify:

- responsibility;
- constraints;
- allowed tools;
- coding standards;
- expected output;
- validation steps.

## 20.5 MCP

Model Context Protocol tools can extend an agent with external capabilities.

Possible examples:

- documentation systems;
- databases;
- issue trackers;
- internal tools.

Security principle:

> An AI tool should get the minimum access needed for the task.

## 20.6 Agent permissions

Modern VS Code agent workflows include approval/permission controls.

The safest default is to keep explicit approvals for actions with meaningful side effects until you understand what the agent is doing.

Be cautious with:

- shell commands;
- file deletion;
- package installation;
- deployment commands;
- database changes;
- credentials;
- external network access.

## 20.7 Review AI-generated changes

Before commit:

```text
[ ] Read every changed file
[ ] Check generated dependencies
[ ] Run formatter
[ ] Run linter
[ ] Run tests
[ ] Review security implications
[ ] Review Git diff
[ ] Remove unnecessary changes
[ ] Confirm secrets were not introduced
```

---

# 21. Extension Strategy: Install Less, Get More

VS Code extensions are powerful and should be treated like executable development software.

## 21.1 Extension selection rules

Before installing an extension, ask:

1. Is this feature already built into VS Code?
2. Is there an official language-team or vendor extension?
3. Is the publisher trustworthy?
4. Is the extension actively maintained?
5. Do I really need it?
6. Does it duplicate another extension?
7. Can I enable it only in a profile/workspace?

## 21.2 Priority order

Prefer:

```text
Built-in VS Code feature
        ↓
Official language/vendor extension
        ↓
Well-established third-party extension
        ↓
Niche extension only when clearly needed
```

## 21.3 Check the extension ID

Extension names can be similar.

VS Code extensions have identifiers such as:

```text
ms-python.python
Angular.ng-template
Vue.volar
ms-vscode.cpptools
```

Verify the publisher and ID before installing.

## 21.4 Use workspace recommendations

Create:

```text
.vscode/extensions.json
```

Example:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

Now a teammate can see recommended project extensions.

Do not force every optional cosmetic extension onto the team.

## 21.5 Disable per workspace

An extension may be useful globally but harmful for one project.

Use:

```text
Disable (Workspace)
```

instead of uninstalling it.

## 21.6 Extension Bisect

If VS Code becomes unstable after installing many extensions, Extension Bisect can help isolate which extension is responsible by repeatedly enabling/disabling subsets.

This is much faster than guessing manually.

---

# 22. Language and Framework Extension Guide

> The Marketplace contains thousands of extensions. A useful handbook cannot responsibly recommend “every plugin.” The goal here is a **curated professional stack**: the smallest group that gives strong language support, debugging, formatting, linting, and framework intelligence.

---

## 22.1 HTML

### Built-in VS Code

VS Code already provides strong HTML editing support including:

- syntax highlighting;
- IntelliSense;
- Emmet;
- formatting capabilities;
- tag-aware editing.

### Useful optional extensions

#### Live Server — third party

Use when learning or building static HTML/CSS/JS and you want a quick local development server with browser refresh.

Not necessary for frameworks that already provide development servers.

Example:

```bash
npm run dev
```

React/Angular/Vue/Next projects generally already have their own server workflow.

#### Prettier

Useful for consistent HTML formatting when your project uses Prettier.

---

## 22.2 CSS / SCSS / Less

VS Code has built-in language support for common web stylesheets.

Useful additions:

### Prettier

Purpose:

- consistent formatting;
- team-wide style.

### Stylelint

Purpose:

- lint CSS/SCSS;
- enforce project style rules;
- catch invalid or discouraged patterns.

Use only if your project actually has Stylelint configured.

### Tailwind CSS IntelliSense

Publisher: Tailwind Labs.

Use when developing with Tailwind CSS.

Provides project-aware features such as:

- utility-class completion;
- hover information;
- validation.

Do not install for projects that do not use Tailwind.

---

## 22.3 JavaScript

VS Code includes built-in JavaScript language intelligence, debugging, navigation, and refactoring.

### Minimum stack

- built-in JS support;
- ESLint if the project uses ESLint;
- Prettier if the project uses Prettier.

### ESLint

Extension ID:

```text
dbaeumer.vscode-eslint
```

Purpose:

- display lint diagnostics;
- execute configured ESLint fixes;
- integrate project ESLint rules.

Important:

The extension is not a replacement for your project dependency.

You still normally install/configure ESLint in the project.

### Prettier

Extension ID:

```text
esbenp.prettier-vscode
```

Purpose:

- formatting.

Keep responsibilities clear:

```text
ESLint → code-quality/static rules
Prettier → formatting
```

Avoid creating formatter conflicts.

---

## 22.4 TypeScript

VS Code ships with excellent built-in TypeScript support.

Usually you do **not** need a random TypeScript IntelliSense extension.

Recommended:

- built-in TypeScript language service;
- project-local TypeScript dependency;
- ESLint;
- Prettier if used by the project.

Check which TypeScript version VS Code is using when language behavior differs from your build.

---

## 22.5 React

React uses JavaScript/TypeScript support rather than requiring a mandatory “React language server” extension.

Recommended:

- built-in JS/TS;
- ESLint;
- Prettier if your project standardizes on it;
- Tailwind CSS IntelliSense only if Tailwind is used.

Optional:

### ES7/React snippets

Can speed boilerplate generation.

Tradeoff:

Modern framework patterns change. Do not depend on snippets so heavily that you stop understanding component structure.

### Error Lens

Can make diagnostics more visible inline.

Useful if you like immediate visual feedback; unnecessary if you prefer a clean editor.

---

## 22.6 Next.js

Minimum:

- TypeScript/JavaScript built-in support;
- ESLint;
- Prettier if your repository uses it.

Optional:

- Tailwind CSS IntelliSense;
- environment-variable helpers;
- testing extensions matching your chosen test framework.

Important:

Prefer the framework CLI and repository configuration over extensions that claim to “generate everything.”

---

## 22.7 Angular

### Angular Language Service

Extension:

```text
Angular.ng-template
```

This is the important Angular-specific extension.

Use it for richer Angular template intelligence such as:

- completions;
- diagnostics;
- navigation;
- template type awareness;
- framework-aware editor features.

Recommended Angular stack:

```text
Angular Language Service
ESLint
Prettier (only if your project uses it)
Tailwind CSS IntelliSense (only when relevant)
```

Optional:

- Angular snippets;
- Angular Essentials-style extension packs.

Preference:

Install the official Angular Language Service first. Add convenience extensions only after identifying a real need.

---

## 22.8 Vue

### Vue (Official)

Extension:

```text
Vue.volar
```

Use for Vue Single File Components.

It provides the official Vue language-support experience.

Avoid installing old Vue tooling simply because an outdated tutorial recommends it.

If you encounter `Vetur` in old tutorials, verify whether your project genuinely requires it. For modern Vue development, follow the current Vue official tooling guidance.

Recommended:

```text
Vue (Official)
ESLint
Prettier if used by project
Tailwind CSS IntelliSense if applicable
```

---

## 22.9 Svelte / SvelteKit

Recommended:

### Svelte for VS Code

Use the official/community-maintained Svelte language tooling recommended by Svelte documentation.

Purpose:

- `.svelte` language features;
- diagnostics;
- completions;
- framework-aware navigation.

Also use:

- ESLint if configured;
- Prettier with Svelte support if your repository standardizes on it.

---

## 22.10 Node.js / Express

VS Code includes Node.js JavaScript/TypeScript debugging support.

Recommended:

```text
Built-in JS/TS
ESLint
Prettier if configured
```

Optional:

### REST Client / API client extension

Useful for storing requests near code.

Example `.http` style workflow:

```http
GET http://localhost:3000/api/users
Accept: application/json
```

This can be convenient for local API testing.

Do not commit real credentials into request files.

---

## 22.11 Python

### Python

Publisher: Microsoft.

Core extension for Python development.

Provides integration for:

- running Python;
- interpreter selection;
- testing;
- environment awareness;
- language workflows.

### Pylance

Pylance is the default high-performance Python language server in VS Code and provides IntelliSense/type-aware language features.

### Python Debugger

Installed alongside the Python extension in current VS Code Python tooling.

Uses `debugpy` for debugging Python scenarios.

### Python Environments

Useful modern environment-management UI for tools/environments such as:

- venv;
- uv;
- conda;
- pyenv;
- Poetry;
- pipenv.

### Ruff

Useful when your project uses Ruff for:

- linting;
- formatting;
- fast code-quality checks.

### Jupyter

Install when working with:

- notebooks;
- data analysis;
- machine learning;
- interactive Python.

Do not install Jupyter for every basic Python script project if you never use notebooks.

### Recommended Python profiles

#### General backend

```text
Python
Pylance
Python Debugger
Python Environments
Ruff
```

#### Data science

```text
Python
Pylance
Python Debugger
Python Environments
Jupyter
Ruff
```

---

## 22.12 Django

Use the Python stack first.

Optional Django-specific tools may provide:

- templates;
- snippets;
- navigation.

But the essential engineering capabilities still come from:

```text
Python + Pylance + Debugger + project tooling
```

For template syntax, choose an actively maintained extension only if your project requires richer Django template support.

---

## 22.13 Flask / FastAPI

Minimum:

```text
Python
Pylance
Python Debugger
Ruff
```

For API testing:

- use test code;
- or an HTTP/API-client extension;
- or `curl`.

For FastAPI, type information from Python/Pylance is often more important than installing multiple framework-specific extensions.

---

## 22.14 Java

### Extension Pack for Java

The official VS Code documentation recommends the Extension Pack for Java for a complete Java experience.

It includes core tooling such as:

- Language Support for Java by Red Hat;
- Debugger for Java;
- Test Runner for Java;
- Maven for Java;
- Project Manager for Java;
- IntelliCode.

This gives:

- completion;
- navigation;
- project management;
- debugging;
- tests;
- Maven integration.

### Use individual extensions when

- you want a very minimal Java setup;
- your organization controls installed extensions;
- you do not use Maven/project-management features.

---

## 22.15 Spring Boot

### Spring Boot Extension Pack

Recommended for Spring Boot projects.

Includes tooling such as:

- Spring Boot Tools;
- Spring Initializr Java Support;
- Spring Boot Dashboard.

Use cases:

- scaffold a Spring project;
- framework-aware completions;
- manage running apps;
- inspect Spring-specific configuration.

Recommended stack:

```text
Extension Pack for Java
Spring Boot Extension Pack
```

Add Gradle support when using Gradle.

---

## 22.16 Gradle

### Gradle for Java

Useful for:

- viewing Gradle projects/tasks;
- running Gradle tasks;
- working with Gradle-based Java builds.

Do not install Maven tooling and Gradle tooling blindly; use what your project needs.

---

## 22.17 C

### C/C++

Extension:

```text
ms-vscode.cpptools
```

Provides C/C++ editing and debugging features.

You still need a compiler/toolchain such as:

- GCC;
- Clang;
- MSVC.

For CMake projects, add CMake Tools.

---

## 22.18 C++

### C/C++ Extension Pack

Microsoft’s C/C++ extension pack includes a curated C++ toolset including:

- C/C++;
- CMake Tools;
- related C++ tooling.

### CMake Tools

Extension:

```text
ms-vscode.cmake-tools
```

Use for CMake-based projects.

Provides:

- CMake configuration workflow;
- presets;
- build integration;
- debugging/build task integration.

### C++ rule

An editor extension cannot fix a missing compiler.

Always verify:

```bash
g++ --version
clang++ --version
cl
cmake --version
```

as appropriate.

---

## 22.19 C# / .NET

### C# Dev Kit

Official Microsoft C# language support is provided through C# Dev Kit for modern .NET development.

Use for:

- C# IntelliSense;
- project/solution navigation;
- .NET projects;
- debugging;
- tests;
- C# refactoring.

You still need the appropriate .NET SDK.

Recommended:

```text
C# Dev Kit
Container Tools if containerized
```

---

## 22.20 PHP

VS Code includes basic PHP language support and can use the installed PHP executable for linting.

### PHP Debug

Use for Xdebug integration.

Requires correct Xdebug installation/configuration.

### Intelephense — popular third party

Useful for richer PHP intelligence in many PHP codebases.

When using a more advanced PHP language extension, avoid duplicate completion providers where possible.

### Core PHP stack

```text
PHP runtime
PHP language intelligence extension if desired
PHP Debug + Xdebug when debugging
project formatter/linter
```

---

## 22.21 Laravel

### Official Laravel VS Code Extension

Extension:

```text
laravel.vscode-laravel
```

The official Laravel extension is intended to provide **Laravel-specific intelligence**, not replace general PHP intelligence.

Current capabilities include Laravel-aware features such as:

- completions;
- hover;
- diagnostics;
- links;
- code actions;
- PHP/Blade integration.

Important current requirement noted by the extension:

- PHP 8.2 or later for the Laravel LSP environment.

Recommended Laravel stack:

```text
General PHP intelligence
Official Laravel extension
PHP Debug if needed
Prettier/Blade formatter only if standardized by project
Tailwind CSS IntelliSense for Tailwind projects
```

Avoid installing five overlapping Laravel autocomplete extensions.

---

## 22.22 WordPress

Recommended base:

```text
PHP language intelligence
PHP Debug + Xdebug when needed
ESLint for JavaScript when repository uses it
Stylelint when repository uses it
```

Optional WordPress-specific extension:

Use only when it gives concrete value such as:

- WordPress hooks/functions snippets;
- coding-standard integration;
- template navigation.

For serious WordPress plugin/theme development, project-level tools such as PHPCS/WordPress Coding Standards are more important than a huge snippet pack.

---

## 22.23 Go

### Go

Use the official Go extension.

It integrates with Go tooling and `gopls`.

Provides:

- IntelliSense;
- code navigation;
- testing;
- diagnostics;
- formatting;
- imports;
- refactoring;
- debugging with Delve.

Recommended:

```text
Go extension
Go toolchain
gopls
Delve when debugging
```

Much of the workflow is integrated automatically by the extension.

---

## 22.24 Rust

### rust-analyzer

This is the recommended modern Rust extension.

Provides:

- IntelliSense;
- type information;
- navigation;
- diagnostics;
- assists/refactoring;
- integration with Rust tooling.

Rust toolchain normally includes:

- `rustc`;
- Cargo;
- `rustfmt`;
- Clippy.

For debugging, current VS Code guidance uses:

- Microsoft C/C++ on Windows;
- CodeLLDB on macOS/Linux;

depending on your setup.

Avoid the old deprecated Rust extension when current rust-analyzer guidance applies.

---

## 22.25 Ruby / Rails

### Ruby LSP

Publisher: Shopify.

Use for modern Ruby language-server features.

Provides language intelligence for Ruby and integrates with common Ruby workflows.

Recommended:

```text
Ruby LSP
RuboCop integration if your project uses RuboCop
```

For Rails, add Rails-focused convenience tooling only when it clearly improves navigation/templates.

---

## 22.26 Dart

### Dart

Extension:

```text
Dart-Code.dart-code
```

Provides Dart language support and editing/refactoring/running capabilities.

---

## 22.27 Flutter

### Flutter

Extension:

```text
Dart-Code.flutter
```

Provides Flutter editing, running, debugging, and reload workflows.

It depends on/install supports Dart tooling.

Recommended:

```text
Flutter
Dart
```

Avoid installing many snippet packs until you know what boilerplate you truly repeat.

---

## 22.28 PowerShell

### PowerShell

Extension:

```text
ms-vscode.PowerShell
```

Provides rich PowerShell language support.

Use for:

- `.ps1`;
- modules;
- IntelliSense;
- debugging;
- PowerShell development.

---

## 22.29 Bash / Shell

VS Code includes shell syntax support, but advanced shell development often benefits from:

### ShellCheck integration

Use when writing serious Bash scripts.

Purpose:

- catch unsafe/unportable shell patterns;
- identify quoting problems;
- expose common bugs.

### shell-format

Optional formatter if your team standardizes on it.

---

## 22.30 R

VS Code supports R development through an R extension plus the R language server ecosystem.

Useful for:

- completions;
- workspace-aware development;
- statistical computing;
- data workflows.

Use RStudio instead when you specifically need an RStudio-centric workflow; VS Code is useful when R lives inside a broader multi-language repository.

---

## 22.31 Julia

Use the Julia extension for:

- language intelligence;
- Julia execution;
- debugging;
- scientific computing workflows.

---

## 22.32 SQL

### SQL Server / T-SQL

Use Microsoft:

```text
SQL Server (mssql)
```

Current extension capabilities focus on modern SQL Server database development and query workflows.

Useful for:

- connections;
- SQL editing;
- executing queries;
- inspecting results;
- SQL Server-specific workflows.

### SQL Database Projects

Useful when database schema is managed as source-controlled database projects.

### SQLTools — third party

Useful when you want one VS Code database client ecosystem for multiple database engines.

Choose database tooling based on your database. Do not install multiple database clients that all compete for the same file type unless you have a reason.

---

# 23. DevOps, Cloud, Infrastructure, and Database Extensions

## 23.1 Container Tools

Publisher: Microsoft.

Use for:

- container-oriented project workflows;
- Dockerfile assistance;
- image/container management;
- build/run tasks;
- supported container debugging scenarios.

Modern VS Code documentation refers to **Container Tools** for this workflow.

## 23.2 Dev Containers

Use when the project should be developed inside a reproducible container.

Best for:

- onboarding;
- toolchain isolation;
- Linux-first dependencies;
- standardized environments.

## 23.3 Remote - SSH

Use for developing directly on remote machines through SSH.

## 23.4 WSL

Use for Linux development from Windows.

## 23.5 Kubernetes

### Kubernetes Tools

Extension:

```text
ms-kubernetes-tools.vscode-kubernetes-tools
```

Use for:

- browsing Kubernetes resources;
- application development for Kubernetes;
- cluster troubleshooting;
- Kubernetes workflows.

## 23.6 YAML

### YAML Language Support by Red Hat

Extension:

```text
redhat.vscode-yaml
```

Provides rich YAML language support and schema-based validation.

Very useful for:

- Kubernetes manifests;
- CI/CD;
- configuration files.

## 23.7 Terraform

### HashiCorp Terraform

Extension:

```text
HashiCorp.terraform
```

Provides Terraform language-server features such as:

- completion;
- diagnostics;
- navigation;
- formatting;
- module/provider intelligence.

You still need Terraform CLI for real Terraform operations.

## 23.8 GitHub Actions

Use GitHub’s official Actions extension when you work heavily with GitHub Actions.

Use together with YAML support.

Useful for:

- workflow files;
- Actions-aware authoring;
- repository automation.

## 23.9 Cloud extensions

Install cloud-provider toolkits only when you actively use the provider.

Examples:

- AWS Toolkit;
- Azure extensions;
- Google Cloud tooling.

A cloud extension may gain access to credentials and resources. Treat it as an operational tool, not a cosmetic add-on.

---

# 24. General Productivity Extensions

These are optional.

## 24.1 EditorConfig for VS Code

Use when your repository contains:

```text
.editorconfig
```

Purpose:

- indentation;
- line endings;
- whitespace conventions;
- basic editor consistency across IDEs.

## 24.2 Error Lens

Purpose:

- render diagnostics more visibly near affected code.

Good for:

- fast feedback.

Possible downside:

- visual noise.

## 24.3 Code Spell Checker

Useful for:

- identifiers;
- comments;
- documentation;
- README files.

Great for public APIs and documentation-heavy codebases.

## 24.4 GitLens

Useful for deeper Git context and history.

Not mandatory.

## 24.5 GitHub Pull Requests

Useful when your workflow is GitHub-centric and you want PR/issue workflows inside VS Code.

## 24.6 markdownlint

Useful for maintaining consistent Markdown style.

Especially useful for:

- documentation repositories;
- READMEs;
- technical handbooks;
- internal knowledge bases.

## 24.7 REST Client or comparable HTTP client

Useful for developers who want `.http` request files stored with a project.

Example:

```http
POST http://localhost:8000/api/login
Content-Type: application/json

{
  "email": "dev@example.com",
  "password": "{{password}}"
}
```

Never hard-code real production secrets in committed files.

## 24.8 Path IntelliSense

Can improve path completion in some workflows.

Before installing, test built-in/project language completion first; modern language services already cover many import-path scenarios.

## 24.9 TODO Tree

Useful when a team deliberately uses markers such as:

```text
TODO
FIXME
HACK
BUG
```

Avoid using TODO comments as a replacement for your issue tracker.

## 24.10 Icon themes

Purely visual.

Use if they help you distinguish file types faster.

Do not confuse “pretty” with “productive.”

---

# 25. Keyboard Shortcut Mastery

> Keyboard layouts and installed keymaps can affect shortcuts. The tables below use VS Code defaults as verified against the official shortcut reference in August 2026.

## 25.1 The 20 shortcuts to memorize first

| Action | Windows / Linux | macOS |
|---|---|---|
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick Open | `Ctrl+P` | `Cmd+P` |
| Integrated Terminal | `Ctrl+\`` | `Ctrl+\`` |
| Search files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Explorer | `Ctrl+Shift+E` | `Cmd+Shift+E` |
| Source Control | `Ctrl+Shift+G` | `Ctrl+Shift+G` |
| Run & Debug | `Ctrl+Shift+D` | `Cmd+Shift+D` |
| Extensions | `Ctrl+Shift+X` | `Cmd+Shift+X` |
| Go to Definition | `F12` | `F12` |
| Peek Definition | `Alt+F12` | `Option+F12` |
| References | `Shift+F12` | `Shift+F12` |
| Rename Symbol | `F2` | `F2` |
| Quick Fix | `Ctrl+.` | `Cmd+.` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Toggle Comment | `Ctrl+/` | `Cmd+/` |
| Select next occurrence | `Ctrl+D` | `Cmd+D` |
| Select all occurrences | `Ctrl+Shift+L` | `Cmd+Shift+L` |
| Move line | `Alt+Up/Down` | `Option+Up/Down` |
| Split editor | `Ctrl+\` | `Cmd+\` |
| Start Debug | `F5` | `F5` |

## 25.2 Editing shortcuts

| Action | Windows / Linux |
|---|---|
| Delete line | `Ctrl+Shift+K` |
| Insert line below | `Ctrl+Enter` |
| Insert line above | `Ctrl+Shift+Enter` |
| Move line up/down | `Alt+Up/Down` |
| Copy line down (Windows) | `Shift+Alt+Down` |
| Copy line up (Windows) | `Shift+Alt+Up` |
| Select next match | `Ctrl+D` |
| Skip current match | `Ctrl+K Ctrl+D` |
| Undo last cursor operation | `Ctrl+U` |
| Select all occurrences | `Ctrl+Shift+L` |
| Change all occurrences of word | `Ctrl+F2` |
| Select current line | `Ctrl+L` |
| Multi-cursor down (Windows) | `Ctrl+Alt+Down` |
| Multi-cursor up (Windows) | `Ctrl+Alt+Up` |
| Jump to matching bracket | `Ctrl+Shift+\` |
| Indent | `Ctrl+]` |
| Outdent | `Ctrl+[` |
| Beginning of file | `Ctrl+Home` |
| End of file | `Ctrl+End` |
| Toggle line comment | `Ctrl+/` |
| Toggle block comment | `Shift+Alt+A` |
| Toggle word wrap | `Alt+Z` |

Linux has a few shortcut differences due to desktop/window-manager conflicts; use the built-in Keyboard Shortcuts editor for the authoritative mapping on your machine.

## 25.3 Language intelligence shortcuts

| Action | Windows / Linux |
|---|---|
| Trigger suggestions | `Ctrl+Space` |
| Parameter hints | `Ctrl+Shift+Space` |
| Format document | `Shift+Alt+F` on Windows |
| Format selection | `Ctrl+K Ctrl+F` |
| Definition | `F12` |
| Peek definition | `Alt+F12` on Windows |
| Quick Fix | `Ctrl+.` |
| References | `Shift+F12` |
| Rename Symbol | `F2` |
| Change language mode | `Ctrl+K M` |

## 25.4 Navigation shortcuts

| Action | Windows / Linux |
|---|---|
| Workspace symbols | `Ctrl+T` |
| Go to line | `Ctrl+G` |
| Quick Open | `Ctrl+P` |
| Symbol in file | `Ctrl+Shift+O` |
| Problems | `Ctrl+Shift+M` |
| Next error/warning | `F8` |
| Previous error/warning | `Shift+F8` |
| Command Palette | `Ctrl+Shift+P` / `F1` |
| Editor history | `Ctrl+Tab` |
| Back (Windows) | `Alt+Left` |
| Forward (Windows) | `Alt+Right` |

## 25.5 Editor/window shortcuts

| Action | Windows / Linux |
|---|---|
| New window | `Ctrl+Shift+N` |
| Close window | `Alt+F4` |
| Close editor (Windows) | `Ctrl+F4` |
| Split editor | `Ctrl+\` |
| Focus editor group 1 | `Ctrl+1` |
| Focus editor group 2 | `Ctrl+2` |
| Focus editor group 3 | `Ctrl+3` |
| Move editor left | `Ctrl+Shift+PageUp` |
| Move editor right | `Ctrl+Shift+PageDown` |

## 25.6 File shortcuts

| Action | Windows / Linux |
|---|---|
| New file | `Ctrl+N` |
| Open file | `Ctrl+O` |
| Save | `Ctrl+S` |
| Save All (Windows) | `Ctrl+K S` |
| Save As | `Ctrl+Shift+S` |
| Reopen closed editor | `Ctrl+Shift+T` |
| Copy active file path | `Ctrl+K P` |
| Reveal active file in OS explorer | `Ctrl+K R` |

## 25.7 Display shortcuts

| Action | Windows / Linux |
|---|---|
| Full screen | `F11` |
| Zen Mode | `Ctrl+K Z` |
| Leave Zen Mode | `Esc Esc` |
| Zoom in | `Ctrl+=` |
| Zoom out | `Ctrl+-` |
| Toggle sidebar | `Ctrl+B` |
| Explorer | `Ctrl+Shift+E` |
| Search | `Ctrl+Shift+F` |
| Source Control | `Ctrl+Shift+G` |
| Run & Debug | `Ctrl+Shift+D` |
| Extensions | `Ctrl+Shift+X` |
| Output (Windows) | `Ctrl+Shift+U` |
| Terminal | `Ctrl+\`` |
| Markdown Preview | `Ctrl+Shift+V` |
| Markdown Preview to Side | `Ctrl+K V` |

## 25.8 Search shortcuts

| Action | Windows / Linux |
|---|---|
| Find in file | `Ctrl+F` |
| Replace in file | `Ctrl+H` |
| Search workspace | `Ctrl+Shift+F` |
| Replace workspace | `Ctrl+Shift+H` |
| Toggle case sensitivity | `Alt+C` |
| Toggle whole word | `Alt+W` |
| Toggle regex | `Alt+R` |
| Search details | `Ctrl+Shift+J` |
| Next search result | `F4` |
| Previous result | `Shift+F4` |

## 25.9 Settings shortcuts

| Action | Windows / Linux |
|---|---|
| Settings | `Ctrl+,` |
| Keyboard Shortcuts | `Ctrl+K Ctrl+S` |
| Color Theme | `Ctrl+K Ctrl+T` |

## 25.10 Debug shortcuts

| Action | Shortcut |
|---|---|
| Breakpoint | `F9` |
| Start/Continue | `F5` |
| Run without debugging | `Ctrl+F5` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift+F11` |
| Pause | `F6` when mapped by current defaults/platform |

## 25.11 Build

```text
Ctrl + Shift + B
```

Runs the configured/default build task.

---

# 26. Recommended settings.json

There is no universal “best settings file.”

This is a practical baseline.

```jsonc
{
  // ---------- Editor ----------
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.wordWrap": "off",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "selection",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.stickyScroll.enabled": true,

  // ---------- Editing ----------
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.suggestSelection": "first",

  // ---------- Files ----------
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.autoSave": "off",

  // ---------- Explorer ----------
  "explorer.confirmDelete": true,
  "explorer.confirmDragAndDrop": true,

  // ---------- Workbench ----------
  "workbench.startupEditor": "none",

  // ---------- Terminal ----------
  "terminal.integrated.scrollback": 10000,

  // ---------- Security ----------
  "security.workspace.trust.enabled": true
}
```

## 26.1 Why auto-save is off here

Auto-save is useful, but it can trigger:

- format-on-save;
- lint-on-save;
- compile watchers;
- hot reload;
- tests;
- file watchers.

For some projects that is perfect.

For others, it creates noise.

Choose intentionally.

## 26.2 Format-on-save

Great when:

- project has one formatter;
- team agrees on formatting;
- configuration is committed.

Risky when:

- multiple formatters compete;
- generated files are open;
- legacy code should not be mass-formatted.

---

# 27. Project-level .vscode Configuration

Recommended structure:

```text
my-project/
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── src/
├── tests/
└── README.md
```

## 27.1 `settings.json`

Use for editor settings that help everyone on the project.

Example:

```json
{
  "editor.formatOnSave": true,
  "search.exclude": {
    "**/dist": true,
    "**/coverage": true
  }
}
```

## 27.2 `extensions.json`

Example:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

## 27.3 `tasks.json`

For repeatable commands.

## 27.4 `launch.json`

For repeatable debugging.

## 27.5 Should `.vscode` be committed?

Often yes for:

- workspace recommendations;
- project tasks;
- debug configurations that are portable;
- project formatter settings.

Potentially no for:

- machine-specific paths;
- personal layout;
- credentials;
- local-only configuration.

## 27.6 Never put secrets in committed VS Code config

Bad:

```json
{
  "env": {
    "PRODUCTION_DB_PASSWORD": "real-password"
  }
}
```

Better:

- environment variables;
- untracked `.env`;
- secret manager;
- organization-approved credentials tooling.

---

# 28. Performance Optimization

VS Code performance problems often come from:

- too many extensions;
- huge workspaces;
- large generated directories;
- language-server indexing;
- file watchers;
- remote latency;
- massive Git repositories;
- multiple overlapping formatters/language servers.

## 28.1 Keep extensions scoped

Prefer profiles.

Disable language extensions you do not need.

## 28.2 Exclude generated content from search

Example:

```json
{
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true,
    "**/coverage": true,
    "**/.next": true,
    "**/vendor": true
  }
}
```

Do not exclude source directories merely to hide performance symptoms.

## 28.3 Diagnose extension problems

Try:

```text
Developer: Reload Window
```

Then:

- disable suspect extension;
- disable all extensions;
- use Extension Bisect.

## 28.4 Use the right profile

Do not load:

```text
Java + Python + C++ + Kubernetes + Terraform + Flutter + 30 UI extensions
```

for a two-file Markdown project.

## 28.5 Large monorepos

Consider:

- opening only the relevant root;
- multi-root with selected services;
- language server exclusions;
- workspace-specific extension disable;
- remote/containerized environments with adequate RAM/CPU.

---

# 29. Security and Workspace Trust

VS Code extensions execute with significant permissions.

Treat extensions like software installations.

## 29.1 Workspace Trust

When you open unfamiliar source code:

```text
Downloaded ZIP
Unknown GitHub repository
Third-party sample project
Interview assignment
Random proof-of-concept
```

do not automatically trust it.

Restricted Mode exists because a workspace can contain:

- tasks;
- debug configurations;
- scripts;
- extension behavior;
- executable project configuration.

## 29.2 Extension publisher trust

When installing third-party extensions:

- verify publisher;
- verify extension ID;
- inspect Marketplace details;
- inspect repository;
- review update activity;
- avoid lookalike names.

## 29.3 Signature verification

VS Code Marketplace extensions are signed and VS Code verifies signatures during installation.

If signature verification fails, treat that as a security signal rather than casually disabling verification.

## 29.4 Extension permissions

Remember:

> Extensions can have the same broad permissions as VS Code itself.

Therefore:

- fewer is safer;
- official is preferable when functionality is equivalent;
- remove abandoned extensions;
- review surprising behavior.

## 29.5 AI security

Never give autonomous tooling unrestricted access to:

- production credentials;
- production databases;
- destructive deployment commands;
- private keys;
- sensitive customer data;

unless your organization has explicitly designed and approved that workflow.

---

# 30. Troubleshooting Playbook

## 30.1 IntelliSense is not working

Check:

1. Is the correct file language mode selected?
2. Is the language extension installed?
3. Is it enabled in this workspace?
4. Is the project folder open?
5. Is the language server still indexing?
6. Is the runtime/SDK available?
7. Is the project configuration valid?
8. Are two language extensions conflicting?
9. Does `Developer: Reload Window` help?
10. Check Output for the language extension.

## 30.2 Formatting does not work

Check:

1. Is a formatter installed?
2. Which formatter is selected?
3. Is it enabled for this language?
4. Are there multiple formatters?
5. Does project config exist?
6. Is the file excluded/ignored?
7. Does the formatter CLI work outside VS Code?

## 30.3 Debugging does not start

Check:

- debugger extension;
- runtime;
- `launch.json`;
- working directory;
- ports;
- source maps;
- build task;
- remote/local context;
- debug console/output.

## 30.4 Terminal command not found

Example:

```text
php is not recognized
python is not recognized
node is not recognized
```

Check:

```bash
where node
where php
where python
```

Windows.

Linux/macOS:

```bash
which node
which php
which python
```

Then:

- PATH;
- selected environment;
- terminal profile;
- VS Code restart after installation;
- remote context.

## 30.5 Extension not activating

Check:

- workspace trust;
- required file type;
- required runtime;
- Output channel;
- extension host logs;
- extension README;
- conflicting extension.

## 30.6 VS Code suddenly slow

Try:

1. close huge unused folders;
2. reload window;
3. inspect active extensions;
4. disable recent extension;
5. use Extension Bisect;
6. check Git repository size;
7. check file watchers;
8. check language-server logs;
9. try a clean profile.

## 30.7 Settings seem ignored

Check:

- User vs Workspace;
- Remote;
- language-specific section;
- policy/managed settings;
- extension-level setting;
- profile.

Use Settings UI to inspect where a value comes from.

## 30.8 “Works locally but not in WSL/container/SSH”

Treat the remote target as a different machine.

Check:

```text
Runtime installed remotely?
Extension installed remotely?
PATH correct remotely?
Files actually on remote filesystem?
Port forwarded?
Environment variables available remotely?
```

---

# 31. Professional Workflows by Scenario

## 31.1 Angular developer

Recommended workflow:

```text
Open Angular profile
    ↓
Open project folder
    ↓
Angular Language Service activates
    ↓
Terminal: npm install
    ↓
Terminal: ng serve / npm start
    ↓
Navigate with Ctrl+P / F12
    ↓
Refactor with F2 / Ctrl+.
    ↓
ESLint + formatter
    ↓
Run tests
    ↓
Review Git diff
```

Useful editor layout:

```text
Left editor: component.ts
Right editor: component.html
Panel: terminal/tests
```

## 31.2 Laravel developer

Recommended workflow:

```text
PHP runtime
    ↓
PHP intelligence
    ↓
Official Laravel extension
    ↓
Terminal: composer install
    ↓
php artisan serve
    ↓
Blade/PHP navigation
    ↓
Tests
    ↓
Xdebug for hard bugs
```

For Docker/Sail:

```text
VS Code
  ↓
Dev Container / WSL / local Docker
  ↓
Laravel environment
```

## 31.3 Python automation developer

```text
Python profile
    ↓
Select interpreter
    ↓
Create/activate environment
    ↓
Pylance
    ↓
Ruff
    ↓
Run script
    ↓
pytest
    ↓
debugpy debugger
```

## 31.4 Java Spring Boot developer

```text
Java/Spring profile
    ↓
JDK
    ↓
Extension Pack for Java
    ↓
Spring Boot Extension Pack
    ↓
Open Maven/Gradle project
    ↓
Run / Debug
    ↓
Test Explorer
```

## 31.5 DevOps engineer

Profile:

```text
Remote - SSH
Dev Containers
Container Tools
Kubernetes
YAML
Terraform
GitHub Actions
```

Typical workspace:

```text
infra/
├── terraform/
├── kubernetes/
├── .github/workflows/
├── scripts/
└── docs/
```

Use:

- YAML schemas;
- Terraform language server;
- Kubernetes resource view;
- terminals;
- SSH;
- port forwarding.

## 31.6 Full-stack monorepo

Example:

```text
platform/
├── frontend/
├── api/
├── worker/
├── infra/
└── docs/
```

Recommended:

- multi-root workspace if components are separated;
- dedicated tasks;
- compound debugging;
- project extension recommendations;
- formatter/linter per language;
- one source-control workflow.

---

# 32. Beginner-to-Expert Learning Roadmap

## Level 1 — Beginner

Learn:

- open folder;
- Explorer;
- create/save files;
- terminal;
- Extensions;
- Settings;
- `Ctrl+P`;
- `Ctrl+Shift+P`;
- `Ctrl+Shift+F`;
- `Ctrl+/`;
- `Alt+Up/Down`;
- `F12`.

Goal:

> Stop using VS Code like Notepad.

## Level 2 — Productive

Learn:

- multiple cursors;
- `Ctrl+D`;
- `Ctrl+Shift+L`;
- `F2`;
- `Ctrl+.`;
- split editor;
- Problems;
- formatting;
- source control;
- workspace search;
- snippets.

Goal:

> Reduce mouse use and repetitive editing.

## Level 3 — Professional

Learn:

- debugger;
- test explorer;
- tasks;
- `launch.json`;
- `settings.json`;
- workspace recommendations;
- profiles;
- Settings Sync;
- Git diff discipline.

Goal:

> Make common development operations reproducible.

## Level 4 — Advanced

Learn:

- remote SSH;
- WSL;
- Dev Containers;
- multi-root workspaces;
- compound tasks/debug configs;
- custom keybindings;
- custom snippets;
- performance troubleshooting.

Goal:

> Make VS Code fit complex systems rather than individual files.

## Level 5 — Expert / Team Optimization

Learn:

- team profiles;
- reusable workspace configuration;
- security policy;
- extension governance;
- custom extension/tool integration;
- agent instructions;
- MCP;
- custom agents;
- automated testing/build workflows.

Goal:

> Make the editor part of the engineering platform.

---

# 33. Daily Productivity Checklist

Before coding:

- [ ] Open the project folder/workspace, not isolated files.
- [ ] Confirm correct Git branch.
- [ ] Pull/rebase/update according to team policy.
- [ ] Confirm correct runtime/interpreter.
- [ ] Start required services/tasks.
- [ ] Check Problems panel for existing issues.

While coding:

- [ ] Use `Ctrl+P` instead of Explorer hunting.
- [ ] Use `F12` / `Shift+F12` instead of manual searching.
- [ ] Use `F2` for semantic rename.
- [ ] Use `Ctrl+.` for code actions.
- [ ] Use multi-cursor for repetitive edits.
- [ ] Use debugger for logic problems.
- [ ] Keep terminal commands reproducible.

Before commit:

- [ ] Format.
- [ ] Lint.
- [ ] Run relevant tests.
- [ ] Review every changed file.
- [ ] Remove debug logs.
- [ ] Check for accidental secrets.
- [ ] Stage intentionally.
- [ ] Write a meaningful commit message.

---

# 34. Mistakes to Avoid

## Mistake 1: Installing every “top 50 VS Code extension”

Result:

- duplicate functionality;
- slow startup;
- conflicting formatters;
- security exposure;
- clutter.

Better:

```text
Minimum stack per profile
```

## Mistake 2: Using an extension for a built-in feature

Examples that may already be handled by VS Code/language services:

- bracket colorization;
- JavaScript IntelliSense;
- TypeScript language support;
- Git basics;
- terminal;
- Markdown preview.

Always check built-in features first.

## Mistake 3: Confusing formatter and linter

Formatter:

```text
How code looks
```

Linter:

```text
Potential problems / coding rules
```

They can overlap slightly but are different.

## Mistake 4: Using text replace instead of refactoring

Do not use:

```text
Replace All
```

for a code symbol when `F2` Rename Symbol can understand references.

## Mistake 5: Committing personal settings

Avoid pushing:

- personal theme;
- personal font;
- machine path;
- private tokens.

Commit settings that benefit project consistency.

## Mistake 6: Ignoring Workspace Trust

Do not trust unknown code just to remove the warning.

## Mistake 7: Debugging only with print statements

Use breakpoints, Watches, Call Stack, and conditional breakpoints.

## Mistake 8: Treating extension errors as language errors

If autocomplete fails but the compiler succeeds, investigate the language server/extension.

If both fail, inspect runtime/project configuration.

## Mistake 9: Running production commands casually from integrated terminal

The terminal is still a real shell.

This command inside VS Code:

```bash
rm -rf ...
```

is just as real as in an external terminal.

## Mistake 10: Auto-approving AI actions without boundaries

AI agents can modify files and execute tools.

Use approvals and review diffs.

---

# 35. Command-line Cheat Sheet

## Open VS Code

```bash
code .
```

## New window

```bash
code -n .
```

## Reuse existing window

```bash
code -r .
```

## Open file

```bash
code README.md
```

## Show help

```bash
code --help
```

## Show version

```bash
code --version
```

## List extensions

```bash
code --list-extensions
```

## List extensions with versions

```bash
code --list-extensions --show-versions
```

## Install extension

```bash
code --install-extension publisher.extension
```

Example:

```bash
code --install-extension ms-python.python
```

## Uninstall extension

```bash
code --uninstall-extension publisher.extension
```

## Export extension list

Windows PowerShell:

```powershell
code --list-extensions | Out-File vscode-extensions.txt
```

Bash:

```bash
code --list-extensions > vscode-extensions.txt
```

## Reinstall extensions from list — Bash example

```bash
cat vscode-extensions.txt | xargs -L 1 code --install-extension
```

For PowerShell:

```powershell
Get-Content .\vscode-extensions.txt | ForEach-Object {
    code --install-extension $_
}
```

---

# 36. Official References and Extension Sources

This handbook intentionally prioritizes VS Code’s current official documentation and official language/vendor extension pages where available.

## Core VS Code

- Documentation: https://code.visualstudio.com/docs
- Core editor: https://code.visualstudio.com/docs/core-editor/overview
- User interface: https://code.visualstudio.com/docs/editing/userinterface
- Tips and tricks: https://code.visualstudio.com/docs/editing/tips-and-tricks
- Keyboard shortcuts: https://code.visualstudio.com/docs/reference/default-keybindings
- Custom keyboard shortcuts: https://code.visualstudio.com/docs/configure/keybindings
- Settings: https://code.visualstudio.com/docs/configure/settings
- Settings Sync: https://code.visualstudio.com/docs/configure/settings-sync
- Profiles: https://code.visualstudio.com/docs/configure/profiles
- CLI: https://code.visualstudio.com/docs/configure/command-line
- Snippets: https://code.visualstudio.com/docs/editing/userdefinedsnippets
- Debugging: https://code.visualstudio.com/docs/debugtest/debugging
- Testing: https://code.visualstudio.com/docs/debugtest/testing
- Tasks: https://code.visualstudio.com/docs/debugtest/tasks
- Workspaces: https://code.visualstudio.com/docs/editing/workspaces/workspaces
- Multi-root workspaces: https://code.visualstudio.com/docs/editing/workspaces/multi-root-workspaces
- Workspace Trust: https://code.visualstudio.com/docs/editing/workspaces/workspace-trust

## Extensions and security

- Marketplace guide: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
- Extension runtime security: https://code.visualstudio.com/docs/configure/extensions/extension-runtime-security

## Remote development

- Remote overview: https://code.visualstudio.com/docs/remote/remote-overview
- SSH: https://code.visualstudio.com/docs/remote/ssh
- WSL: https://code.visualstudio.com/docs/remote/wsl
- Remote Tunnels: https://code.visualstudio.com/docs/remote/tunnels
- Codespaces: https://code.visualstudio.com/docs/remote/codespaces
- Port forwarding: https://code.visualstudio.com/docs/debugtest/port-forwarding
- Containers: https://code.visualstudio.com/docs/containers/overview

## Languages

- Languages overview: https://code.visualstudio.com/docs/languages/overview
- JavaScript: https://code.visualstudio.com/docs/languages/javascript
- TypeScript: https://code.visualstudio.com/docs/languages/typescript
- Python: https://code.visualstudio.com/docs/python/python-tutorial
- Python editing / Pylance: https://code.visualstudio.com/docs/python/editing
- Python debugging: https://code.visualstudio.com/docs/python/debugging
- Python environments: https://code.visualstudio.com/docs/python/environments
- Python testing: https://code.visualstudio.com/docs/python/testing
- Java: https://code.visualstudio.com/docs/languages/java
- Java extensions: https://code.visualstudio.com/docs/java/extensions
- Spring Boot: https://code.visualstudio.com/docs/java/java-spring-boot
- C/C++: https://code.visualstudio.com/docs/languages/cpp
- C#: https://code.visualstudio.com/docs/languages/csharp
- PHP: https://code.visualstudio.com/docs/languages/php
- Go: https://code.visualstudio.com/docs/languages/go
- Rust: https://code.visualstudio.com/docs/languages/rust
- R: https://code.visualstudio.com/docs/languages/r

## Verified extension pages

- Angular Language Service: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
- Vue (Official): https://marketplace.visualstudio.com/items?itemName=Vue.volar
- Official Laravel extension: https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel
- C/C++: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools
- C/C++ Extension Pack: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack
- CMake Tools: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools
- Ruby LSP: https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp
- Dart: https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code
- Flutter: https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter
- PowerShell: https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell
- Kubernetes Tools: https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools
- YAML by Red Hat: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
- HashiCorp Terraform: https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform
- SQL Server (mssql): https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql
- SQLTools: https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools

## AI / Agents

Because this area evolves quickly, re-check current documentation before standardizing organizational workflows.

- AI feature cheat sheet: https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet
- Agent best practices: https://code.visualstudio.com/docs/agents/best-practices
- Agent harnesses: https://code.visualstudio.com/docs/agents/run/agent-harnesses
- Custom agents: https://code.visualstudio.com/docs/agent-customization/custom-agents
- Agent Skills: https://code.visualstudio.com/docs/agent-customization/agent-skills
- Agent permissions/approvals: https://code.visualstudio.com/docs/agents/run/approvals
- AI security: https://code.visualstudio.com/docs/agents/run/security

---

# Final Principles

If you remember only ten ideas from this handbook, remember these:

1. **Open the project folder, not isolated files.**
2. **Use `Ctrl+Shift+P` whenever you do not know where a feature is.**
3. **Use `Ctrl+P` instead of hunting through folders.**
4. **Use semantic navigation and refactoring: `F12`, `Shift+F12`, `F2`, `Ctrl+.`.**
5. **Use the debugger instead of depending only on print statements.**
6. **Automate repeated commands with tasks.**
7. **Use Profiles instead of enabling every extension everywhere.**
8. **Prefer built-in or official extensions before third-party alternatives.**
9. **Treat extensions, workspaces, terminals, and AI agents as code-execution/security surfaces.**
10. **Before commit: format, lint, test, review the diff, and check for secrets.**

The point of mastering VS Code is not to collect shortcuts or extensions.

The goal is to make the development loop:

```text
Understand
   ↓
Navigate
   ↓
Edit
   ↓
Run
   ↓
Debug
   ↓
Test
   ↓
Review
   ↓
Commit
```

as fast, safe, repeatable, and low-friction as possible.
