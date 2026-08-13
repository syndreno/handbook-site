# VS Code Master Handbook for Salesforce Marketing Cloud (SFMC / Marketing Cloud Engagement)

> **Practical developer handbook for VS Code + Salesforce Marketing Cloud Engagement (MCE/SFMC)**
>
> Covers: VS Code setup, SFMC developer workflow, AMPscript, Server-Side JavaScript (SSJS), SQL, CloudPages, Content Builder, Data Extensions, REST/SOAP APIs, Automation Studio, Journey Builder concepts, Git/version control, SFMC DevTools (`mcdev`), debugging, deployment, security, productivity shortcuts, snippets, Amp AI, `AGENTS.md`, MCP, and team practices.
>
> **Last reviewed:** 13 August 2026

---

## Table of Contents

1. [Who This Handbook Is For](#1-who-this-handbook-is-for)
2. [What VS Code Can and Cannot Do for SFMC](#2-what-vs-code-can-and-cannot-do-for-sfmc)
3. [SFMC Developer Mental Model](#3-sfmc-developer-mental-model)
4. [Recommended Local Development Stack](#4-recommended-local-development-stack)
5. [VS Code Extensions for SFMC](#5-vs-code-extensions-for-sfmc)
6. [Recommended SFMC Project Structure](#6-recommended-sfmc-project-structure)
7. [VS Code Workspace Configuration](#7-vs-code-workspace-configuration)
8. [VS Code Productivity Shortcuts](#8-vs-code-productivity-shortcuts)
9. [AMPscript Master Guide](#9-ampscript-master-guide)
10. [AMPscript Real-World Patterns](#10-ampscript-real-world-patterns)
11. [Server-Side JavaScript (SSJS)](#11-server-side-javascript-ssjs)
12. [AMPscript vs SSJS vs SQL vs API](#12-ampscript-vs-ssjs-vs-sql-vs-api)
13. [SQL for SFMC](#13-sql-for-sfmc)
14. [Data Extensions](#14-data-extensions)
15. [CloudPages Development](#15-cloudpages-development)
16. [Email Development in VS Code](#16-email-development-in-vs-code)
17. [Content Builder Development](#17-content-builder-development)
18. [Automation Studio Development](#18-automation-studio-development)
19. [Journey Builder Developer Knowledge](#19-journey-builder-developer-knowledge)
20. [SFMC REST and SOAP APIs](#20-sfmc-rest-and-soap-apis)
21. [Installed Packages and Authentication](#21-installed-packages-and-authentication)
22. [SFMC DevTools / mcdev](#22-sfmc-devtools--mcdev)
23. [Git and Version-Control Strategy](#23-git-and-version-control-strategy)
24. [Deployment Workflow](#24-deployment-workflow)
25. [Debugging and Troubleshooting](#25-debugging-and-troubleshooting)
26. [Testing Strategy](#26-testing-strategy)
27. [Security and Privacy](#27-security-and-privacy)
28. [Amp AI with VS Code for SFMC](#28-amp-ai-with-vs-code-for-sfmc)
29. [AGENTS.md for an SFMC Repository](#29-agentsmd-for-an-sfmc-repository)
30. [Amp + Salesforce MCE MCP Server](#30-amp--salesforce-mce-mcp-server)
31. [Useful VS Code Snippets](#31-useful-vs-code-snippets)
32. [Tasks and Automation in VS Code](#32-tasks-and-automation-in-vs-code)
33. [Naming Conventions](#33-naming-conventions)
34. [Code Review Checklist](#34-code-review-checklist)
35. [Production Release Checklist](#35-production-release-checklist)
36. [Common SFMC Mistakes](#36-common-sfmc-mistakes)
37. [Productivity Playbook](#37-productivity-playbook)
38. [Learning Roadmap](#38-learning-roadmap)
39. [Quick Reference Cheat Sheets](#39-quick-reference-cheat-sheets)
40. [Recommended Official and Project References](#40-recommended-official-and-project-references)

---

# 1. Who This Handbook Is For

This handbook is useful for:

- SFMC developers.
- Email developers.
- Marketing automation developers.
- Technical consultants.
- Full-stack developers moving into Salesforce Marketing Cloud Engagement.
- Developers working with AMPscript, SSJS, SQL, CloudPages, APIs, or Content Builder.
- Teams that want to move development away from copy/paste-only work inside the SFMC browser UI.
- Teams that want Git, pull requests, code review, repeatable deployment, and AI-assisted development.

You do **not** need to be an expert in Salesforce CRM/Apex to use this handbook.

Marketing Cloud Engagement has its own major development technologies:

```text
HTML / CSS
AMPscript
Server-Side JavaScript (SSJS)
SQL
REST API
SOAP API
Content Builder
CloudPages
Data Extensions
Automation Studio
Journey Builder
Installed Packages
```

VS Code can become the central developer workspace around these technologies.

---

# 2. What VS Code Can and Cannot Do for SFMC

## 2.1 What VS Code is excellent for

VS Code is excellent for:

- Writing AMPscript.
- Writing SSJS.
- Writing SQL Query Activity queries.
- Building HTML emails.
- Building CloudPages.
- Formatting and linting code.
- Searching across many SFMC assets.
- Comparing versions.
- Git branching and commits.
- Pull-request workflows.
- Maintaining reusable code snippets.
- Reviewing retrieved SFMC metadata.
- Running `mcdev`.
- Running Node.js helper scripts.
- Calling SFMC REST APIs.
- Calling SOAP APIs through scripts/tools.
- Working with AI coding agents such as Amp.
- Maintaining technical documentation.
- Building CI/CD pipelines around SFMC assets.

## 2.2 What VS Code does not magically replace

VS Code does not replace every SFMC UI operation.

You will still use SFMC for tasks such as:

- Visual Journey Builder configuration/review.
- Send previews and test sends.
- Email client rendering/testing.
- Contact Builder relationship inspection.
- Some account-level administrative configuration.
- User/role administration.
- Sender Authentication Package configuration.
- Domain configuration.
- Some Automation Studio scheduling operations.
- Reviewing send/job status.
- Final production validation.

Think of VS Code as your **developer control center**, not as a guaranteed 100% replacement for the Marketing Cloud UI.

---

# 3. SFMC Developer Mental Model

A productive SFMC developer should understand the relationship between these areas.

```text
                    +----------------------+
                    |  Marketing Cloud     |
                    |  Engagement Account  |
                    +----------+-----------+
                               |
                    +----------v-----------+
                    | Business Units (BU)  |
                    +----------+-----------+
                               |
      +------------------------+--------------------------+
      |                        |                          |
+-----v------+          +------v-------+          +-------v------+
| Content    |          | Data         |          | Automation   |
| Builder    |          | Extensions   |          | Studio       |
+-----+------+          +------+-------+          +-------+------+
      |                        |                          |
      |                        |                          |
+-----v------+          +------v-------+          +-------v------+
| Email /    |          | AMPscript /  |          | SQL / SSJS / |
| CloudPage  |          | SSJS / SQL   |          | Import etc.  |
+-----+------+          +--------------+          +--------------+
      |
+-----v------+
| Journey    |
| Builder    |
+------------+

External systems
      |
      v
REST / SOAP API / SFTP / MCP
```

## 3.1 Business Unit awareness

Always know:

- Which enterprise/account you are using.
- Which Business Unit you are using.
- Which MID belongs to that BU.
- Whether an asset is local or shared.
- Which Installed Package has permission to that BU.
- Whether a Data Extension is local, shared, synchronized, sendable, or non-sendable.

A large number of SFMC production incidents are caused by doing the right action in the **wrong BU**.

---

# 4. Recommended Local Development Stack

A practical workstation should contain:

```text
Visual Studio Code
Git
Node.js LTS/current supported version for your tools
npm
SFMC DevTools / mcdev
SFMC language-support extension
Prettier
ESLint where applicable
EditorConfig
Git client or built-in VS Code Git
Optional: Postman / REST Client
Optional: SalesforceLabs AMPscript Core extension
Optional: Amp CLI
```

## 4.1 Verify tools

Windows PowerShell:

```powershell
code --version
git --version
node --version
npm --version
mcdev --version
```

For Amp:

```powershell
amp --version
```

## 4.2 Keep tools updated intentionally

Do not blindly upgrade a production toolchain on release day.

Use:

1. Team-approved versions.
2. A development branch.
3. Changelog review.
4. Test BU verification.
5. Production rollout after validation.

This is especially important for:

- `mcdev`
- VS Code extensions
- Node.js
- AI agents
- custom deployment scripts

---

# 5. VS Code Extensions for SFMC

There is no requirement to install dozens of extensions. A smaller, understood extension set is usually safer and faster.

## 5.1 Core SFMC tooling

### A. Accenture SFMC DevTools

Purpose:

- Retrieve SFMC metadata/assets.
- Deploy metadata/assets.
- Work across Business Units.
- Enable a local/Git-based workflow.
- Support development and backup workflows.

Install CLI:

```bash
npm install -g mcdev
```

Initialize:

```bash
mcdev init
```

The SFMC DevTools VS Code extension adds context-menu and IDE actions around the CLI.

### B. SFMC Language Service

Useful for SFMC language intelligence such as:

- AMPscript syntax support.
- SSJS support.
- Completions.
- Hover documentation.
- Language diagnostics, depending on supported syntax.

The Accenture SFMC DevTools VS Code project recommends using an SFMC language service for a complete editing experience.

### C. SFMC Extension Pack / Pack Plus

Useful when you want a curated bundle rather than installing each piece separately.

A typical pack can include tools around:

- SFMC DevTools.
- Language support.
- Data loading.
- MSO/email conditionals.
- Prettier.
- ESLint.
- EditorConfig.

Always inspect an extension pack before installation so you know exactly what it adds.

---

## 5.2 SalesforceLabs AMPscript Core Extension

Salesforce provides documentation for the SalesforceLabs AMPscript Core extension.

At the time of this handbook, Salesforce documents manual installation from a VSIX rather than installation from the regular VS Code Marketplace.

Salesforce's documented prerequisites include:

- VS Code.
- Git.
- .NET SDK required by the extension.
- Downloading the VSIX from its project release page.

This can be useful when you want Salesforce-provided AMPscript development/testing tooling.

---

## 5.3 Generic extensions useful for SFMC

### EditorConfig

Keeps formatting conventions consistent across team members.

### Prettier

Useful for:

- HTML.
- JavaScript.
- JSON.
- Markdown.
- CSS.

Do not assume standard Prettier understands every AMPscript formatting requirement.

### ESLint

Useful for:

- JavaScript.
- Local utility scripts.
- Some SSJS workflows if configured carefully.

Remember: SFMC SSJS is **not equivalent to modern browser/Node.js JavaScript**.

### GitLens

Optional.

Useful for:

- File history.
- Blame.
- Commit history.
- Understanding who changed a block and why.

### Rainbow CSV

Optional but useful when investigating CSV exports/imports.

### REST Client

Optional.

Lets you keep `.http` request files in the repository.

Never commit secrets into `.http` files.

---

# 6. Recommended SFMC Project Structure

A good repository should make the source of truth obvious.

Example:

```text
sfmc-project/
│
├── README.md
├── AGENTS.md
├── .gitignore
├── .editorconfig
├── package.json
│
├── .vscode/
│   ├── settings.json
│   ├── extensions.json
│   └── tasks.json
│
├── docs/
│   ├── architecture.md
│   ├── data-model.md
│   ├── deployments.md
│   ├── naming-conventions.md
│   └── runbooks/
│
├── src/
│   ├── ampscript/
│   │   ├── shared/
│   │   ├── email/
│   │   └── cloudpages/
│   │
│   ├── ssjs/
│   │   ├── shared/
│   │   ├── cloudpages/
│   │   └── automations/
│   │
│   ├── sql/
│   │   ├── audiences/
│   │   ├── reporting/
│   │   └── journeys/
│   │
│   ├── email/
│   │   ├── templates/
│   │   └── components/
│   │
│   └── cloudpages/
│
├── scripts/
│   ├── api/
│   ├── validation/
│   └── release/
│
├── retrieve/
│   └── ... mcdev retrieved metadata ...
│
├── deploy/
│   └── ... deployment packages ...
│
└── test-data/
    └── synthetic/
```

## Why keep `src/` and retrieved metadata conceptually separate?

Retrieved SFMC metadata can be:

- Tool-generated.
- Verbose.
- Environment-specific.
- Structured differently from how humans prefer to author reusable code.

A clean `src/` area can contain deliberately reusable source, while `retrieve/` and `deploy/` remain deployment-oriented.

The exact approach depends on how your team uses `mcdev`.

---

# 7. VS Code Workspace Configuration

## 7.1 `.editorconfig`

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{html,css,js,ssjs,json,jsonc,md,sql,amp}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

## 7.2 Example `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.rulers": [100, 120],
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "explorer.confirmDelete": true,
  "git.autofetch": true,
  "git.confirmSync": true,
  "editor.linkedEditing": true,
  "editor.bracketPairColorization.enabled": true
}
```

Be careful with `formatOnSave` for AMPscript if your selected formatter does not correctly understand embedded AMPscript.

## 7.3 Recommended `.vscode/extensions.json`

Use this as a team-maintained recommendation list.

```json
{
  "recommendations": [
    "Accenture-oss.sfmc-devtools-vscode",
    "joernberkefeld.sfmc-language",
    "EditorConfig.EditorConfig",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

Extension IDs and availability can change. Verify current marketplace/project documentation before standardizing them for an enterprise team.

---

# 8. VS Code Productivity Shortcuts

The following examples focus on Windows/Linux-style shortcuts because many SFMC enterprise developers work on Windows.

## 8.1 Essential navigation

| Action | Shortcut |
|---|---|
| Command Palette | `Ctrl + Shift + P` |
| Quick Open file | `Ctrl + P` |
| New file | `Ctrl + N` |
| Save | `Ctrl + S` |
| Save all | `Ctrl + K`, then `S` |
| Close editor | `Ctrl + W` |
| Reopen closed editor | `Ctrl + Shift + T` |
| Go to line | `Ctrl + G` |
| Go to symbol in file | `Ctrl + Shift + O` |
| Search workspace | `Ctrl + Shift + F` |
| Replace workspace | `Ctrl + Shift + H` |
| Extensions | `Ctrl + Shift + X` |
| Source Control | `Ctrl + Shift + G` |
| Terminal | `` Ctrl + ` `` |

## 8.2 Multi-cursor productivity

| Action | Shortcut |
|---|---|
| Add cursor with mouse | `Alt + Click` |
| Select next occurrence | `Ctrl + D` |
| Select all occurrences | `Ctrl + Shift + L` |
| Add cursor above/below | `Ctrl + Alt + Up/Down` on common Windows mappings |

Excellent SFMC use case:

You have:

```sql
CustomerID,
EmailAddress,
FirstName,
LastName,
Country
```

You need to prefix every field with `src.`.

Multi-cursor editing can transform the list in seconds.

## 8.3 Line editing

| Action | Shortcut |
|---|---|
| Move line | `Alt + Up/Down` |
| Copy line | `Shift + Alt + Up/Down` |
| Delete line | `Ctrl + Shift + K` |
| Toggle line comment | `Ctrl + /` |
| Format document | `Shift + Alt + F` |

## 8.4 Editor split

| Action | Shortcut |
|---|---|
| Split editor | `Ctrl + \` |
| Focus editor groups | `Ctrl + 1`, `Ctrl + 2`, etc. |

Great SFMC setup:

```text
Left:      retrieved/current production code
Right:     modified/deployment version
Bottom:    terminal running mcdev/git
```

---

# 9. AMPscript Master Guide

AMPscript is a Marketing Cloud scripting language used to personalize and process content.

Common locations:

- Emails.
- SMS/mobile content where supported.
- CloudPages.
- Landing pages.
- Content blocks.

## 9.1 AMPscript block syntax

```ampscript
%%[
  VAR @firstName
  SET @firstName = "Shoeb"
]%%

Hello %%=v(@firstName)=%%
```

There are two common forms.

### Processing block

```ampscript
%%[
  /* logic */
]%%
```

### Inline output

```ampscript
%%=v(@variable)=%%
```

---

## 9.2 Variables

AMPscript variables normally start with `@`.

```ampscript
%%[
  VAR @firstName, @country

  SET @firstName = "Shoeb"
  SET @country = "India"
]%%
```

Output:

```ampscript
%%=v(@firstName)=%%
```

---

## 9.3 Prefer defensive personalization

Avoid:

```ampscript
Hello %%FirstName%%
```

when you cannot guarantee the field contains a usable value.

Better:

```ampscript
%%[
  VAR @firstName

  SET @firstName = AttributeValue("FirstName")

  IF Empty(@firstName) THEN
    SET @firstName = "there"
  ENDIF
]%%

Hello %%=v(@firstName)=%%,
```

This creates a safer fallback.

---

## 9.4 Conditions

```ampscript
%%[
  VAR @country

  SET @country = AttributeValue("Country")

  IF @country == "IN" THEN
]%%

<p>India offer</p>

%%[
  ELSEIF @country == "AE" THEN
]%%

<p>UAE offer</p>

%%[
  ELSE
]%%

<p>Global offer</p>

%%[
  ENDIF
]%%
```

---

## 9.5 Loops

```ampscript
%%[
  VAR @i

  FOR @i = 1 TO 5 DO
]%%

<p>Item %%=v(@i)=%%</p>

%%[
  NEXT @i
]%%
```

---

## 9.6 Common string functions

Examples:

```ampscript
SET @fullName = Concat(@firstName, " ", @lastName)
SET @upper = Uppercase(@country)
SET @lower = Lowercase(@email)
SET @pretty = ProperCase(@firstName)
SET @short = Substring(@text, 1, 20)
SET @position = IndexOf(@email, "@")
```

Useful thinking:

- `Concat()` -> join values.
- `Replace()` -> replace text.
- `Substring()` -> extract part of a string.
- `IndexOf()` -> locate text.
- `Uppercase()` / `Lowercase()` -> normalize.
- `ProperCase()` -> display formatting.

---

## 9.7 Date functions

Typical functions include:

```text
Now()
DateAdd()
DateDiff()
FormatDate()
SystemDateToLocalDate()
LocalDateToSystemDate()
```

Example:

```ampscript
%%[
  VAR @now, @expiry

  SET @now = Now()
  SET @expiry = DateAdd(@now, 7, "D")
]%%

Offer expires:
%%=FormatDate(@expiry, "dd MMM yyyy")=%%
```

Be very clear about system time versus business/local time when campaign rules depend on dates.

---

## 9.8 Data Extension lookup

### Lookup a single value

```ampscript
%%[
  VAR @tier

  SET @tier = Lookup(
    "Customer_Profile",
    "LoyaltyTier",
    "SubscriberKey",
    _subscriberkey
  )
]%%
```

Concept:

```text
Lookup(
  DE name,
  return column,
  search column,
  search value
)
```

### Multiple conditions

```ampscript
SET @offerCode = Lookup(
  "Customer_Offers",
  "OfferCode",
  "SubscriberKey", _subscriberkey,
  "Country", "IN"
)
```

---

## 9.9 LookupRows

Use when multiple records are expected.

```ampscript
%%[
  VAR @rows, @rowCount, @i, @row, @productName

  SET @rows = LookupRows(
    "Recommended_Products",
    "SubscriberKey",
    _subscriberkey
  )

  SET @rowCount = RowCount(@rows)

  IF @rowCount > 0 THEN

    FOR @i = 1 TO @rowCount DO

      SET @row = Row(@rows, @i)
      SET @productName = Field(@row, "ProductName")
]%%

<p>%%=v(@productName)=%%</p>

%%[
    NEXT @i

  ENDIF
]%%
```

The important rowset workflow is:

```text
LookupRows
   ↓
RowCount
   ↓
Row
   ↓
Field
```

---

## 9.10 LookupOrderedRows

Use when order matters.

Example idea:

```ampscript
SET @rows = LookupOrderedRows(
  "Transactions",
  5,
  "TransactionDate DESC",
  "SubscriberKey",
  _subscriberkey
)
```

Use cases:

- Latest transaction.
- Top products.
- Most recent offers.
- Latest case/activity.

---

## 9.11 Insert/update functions: email vs CloudPage context

One of the easiest AMPscript mistakes is using a function intended for a different execution context.

For example, Salesforce distinguishes functions such as:

```text
InsertDE()    -> email-oriented usage
InsertData()  -> landing page / CloudPage-oriented usage
```

Likewise, pay attention to `UpdateDE`/`UpdateData` and related functions.

Always check the official function documentation before moving the same logic between an email and a CloudPage.

---

## 9.12 Content blocks

Reusable content should often live in Content Builder.

Example:

```ampscript
%%=ContentBlockByKey("GLOBAL_HEADER")=%%
```

Benefits:

- Reuse.
- Centralized updates.
- Cleaner emails.
- Easier team ownership.

Prefer stable external keys rather than relying only on human-readable names where possible.

---

## 9.13 CloudPagesURL

For email-to-CloudPage links, `CloudPagesURL()` is especially useful because it can create an encrypted query string.

Concept:

```ampscript
%%=CloudPagesURL(
  1234,
  "subscriberKey", _subscriberkey,
  "campaign", "summer_2026"
)=%%
```

Use this for use cases such as:

- Preference center.
- Profile update.
- Secure campaign context passing.
- Confirmation pages.

Do not assume encryption alone means every input can be blindly trusted. Validate server-side before making changes.

---

## 9.14 RequestParameter

On CloudPages:

```ampscript
%%[
  VAR @email

  SET @email = RequestParameter("email")
]%%
```

`RequestParameter()` can read form/query values.

Treat all incoming values as untrusted input.

---

## 9.15 RaiseError

`RaiseError()` can intentionally stop/error processing.

It should be used carefully.

Possible use cases:

- Required data missing.
- Critical personalization condition not satisfied.
- Preventing a malformed send.

Do **not** use error raising casually in a high-volume email without understanding the send impact.

---

# 10. AMPscript Real-World Patterns

## 10.1 Greeting fallback

```ampscript
%%[
  VAR @firstName

  SET @firstName = AttributeValue("FirstName")

  IF Empty(@firstName) THEN
    SET @firstName = "Customer"
  ELSE
    SET @firstName = ProperCase(@firstName)
  ENDIF
]%%

Hello %%=v(@firstName)=%%,
```

---

## 10.2 Country-based content

```ampscript
%%[
  VAR @country
  SET @country = Uppercase(AttributeValue("Country"))

  IF @country == "IN" THEN
]%%

<p>Free shipping across selected Indian cities.</p>

%%[
  ELSEIF @country == "SG" THEN
]%%

<p>Singapore delivery offer.</p>

%%[
  ELSE
]%%

<p>View offers available in your region.</p>

%%[
  ENDIF
]%%
```

---

## 10.3 Loyalty tier lookup

```ampscript
%%[
  VAR @tier

  SET @tier = Lookup(
    "Loyalty_Profile",
    "Tier",
    "SubscriberKey",
    _subscriberkey
  )

  IF Empty(@tier) THEN
    SET @tier = "Standard"
  ENDIF
]%%

Your current tier: %%=v(@tier)=%%
```

---

## 10.4 Coupon personalization

```ampscript
%%[
  VAR @coupon

  SET @coupon = Lookup(
    "Assigned_Coupons",
    "CouponCode",
    "SubscriberKey",
    _subscriberkey
  )

  IF Empty(@coupon) THEN
    SET @coupon = "WELCOME10"
  ENDIF
]%%

Use code: <strong>%%=v(@coupon)=%%</strong>
```

For real coupon systems, consider concurrency, uniqueness, expiration, and claim state rather than relying on a simplistic lookup.

---

## 10.5 CloudPage form processing

```ampscript
%%[
  VAR @submitted, @subscriberKey, @firstName

  SET @submitted = RequestParameter("submitted")
  SET @subscriberKey = RequestParameter("subscriberKey")
  SET @firstName = RequestParameter("firstName")

  IF @submitted == "1" THEN

    IF NOT Empty(@subscriberKey) AND NOT Empty(@firstName) THEN

      UpsertData(
        "Profile_Preferences",
        1,
        "SubscriberKey", @subscriberKey,
        "FirstName", @firstName
      )

    ENDIF

  ENDIF
]%%
```

HTML:

```html
<form method="post">
  <input type="hidden" name="submitted" value="1">

  <label>
    Subscriber Key
    <input type="text" name="subscriberKey" required>
  </label>

  <label>
    First Name
    <input type="text" name="firstName" required>
  </label>

  <button type="submit">Save</button>
</form>
```

Production version should include:

- Proper authorization/identity handling.
- Input validation.
- Output encoding.
- CSRF-style protection appropriate to the application.
- Error logging.
- Duplicate/replay consideration.
- Clear success/failure handling.
- Consent requirements where applicable.

---

# 11. Server-Side JavaScript (SSJS)

SFMC executes SSJS on the server.

It is useful for:

- CloudPages.
- Script Activities.
- Platform operations.
- JSON handling.
- API-style logic.
- Error handling with `try/catch`.
- WSProxy.
- Cases where JavaScript-style control flow is easier than AMPscript.

## 11.1 Basic syntax

```html
<script runat="server">
Platform.Load("Core", "1");

var name = "Shoeb";
Write("Hello " + name);
</script>
```

The `runat="server"` attribute is important in SFMC server-side execution.

---

## 11.2 Core library

Typical initialization:

```javascript
Platform.Load("Core", "1");
```

Example Data Extension use:

```html
<script runat="server">
Platform.Load("Core", "1");

var de = DataExtension.Init("CUSTOMER_PROFILE_EXTERNAL_KEY");

var rows = de.Rows.Retrieve({
  Property: "Status",
  SimpleOperator: "equals",
  Value: "Active"
});

Write(Stringify(rows));
</script>
```

Be careful when writing raw data to a public CloudPage.

---

## 11.3 Platform functions

Example:

```html
<script runat="server">
var email = Platform.Request.GetFormField("email");

if (email) {
  Write("Received");
}
</script>
```

Use encoding/validation before displaying user-controlled values.

---

## 11.4 Try/catch

A major reason developers choose SSJS is clearer structured exception handling.

```html
<script runat="server">
Platform.Load("Core", "1");

try {

  // risky operation

} catch (e) {

  Write("An error occurred.");

  // Log e safely to a logging DE if appropriate.
}
</script>
```

Avoid exposing:

- stack traces.
- tokens.
- internal object IDs.
- personal data.
- backend exception details.

to a public page.

---

## 11.5 WSProxy

Salesforce documents WSProxy as a native way to work with SOAP objects from SSJS and notes that it reduces overhead compared with legacy wrapper approaches.

Skeleton:

```html
<script runat="server">
Platform.Load("Core", "1");

var prox = new Script.Util.WSProxy();

var cols = [
  "Name",
  "CustomerKey"
];

var result = prox.retrieve(
  "DataExtension",
  cols
);

Write(Stringify(result));
</script>
```

Use WSProxy for platform-object operations when it fits the requirement.

---

# 12. AMPscript vs SSJS vs SQL vs API

Use the tool that best matches the job.

| Requirement | Best first choice |
|---|---|
| Email personalization | AMPscript |
| Simple content decision | AMPscript |
| Data Extension lookup while rendering | AMPscript |
| Complex server-side page logic | SSJS |
| `try/catch` heavy logic | SSJS |
| SOAP-object operations in SFMC | SSJS + WSProxy |
| Large audience segmentation | SQL Query Activity |
| Scheduled batch transformation | SQL / Automation Studio |
| External app integration | REST API |
| Some legacy/email platform object operations | SOAP API |
| Reusable backend integration service | REST/SOAP from external application |
| AI-assisted account operations | MCE MCP, with controlled permissions |

## Important principle

Do not use email-render-time AMPscript as a substitute for precomputing large datasets.

Bad pattern:

```text
Every subscriber render
   -> many expensive lookups
   -> external HTTP calls
   -> complex loops
   -> more lookups
```

Better:

```text
Automation Studio
   -> precompute target/personalization DE
   -> email performs simple lookup/output
```

---

# 13. SQL for SFMC

SQL is one of the highest-value SFMC developer skills.

Common use cases:

- Audience building.
- Segmentation.
- Deduplication.
- Journey entry preparation.
- Reporting.
- Data normalization.
- Aggregation.
- Data View analysis.

## 13.1 Basic query

```sql
SELECT
    SubscriberKey,
    EmailAddress,
    FirstName,
    Country
FROM Customer_Master
WHERE Status = 'Active'
```

---

## 13.2 Use explicit columns

Prefer:

```sql
SELECT
    SubscriberKey,
    EmailAddress,
    FirstName
FROM Customer_Master
```

Avoid:

```sql
SELECT *
FROM Customer_Master
```

Why:

- Schema changes become dangerous.
- Target mapping is less obvious.
- Reviews are harder.
- More unnecessary data can be moved.

---

## 13.3 Aliases

```sql
SELECT
    c.SubscriberKey,
    c.EmailAddress,
    o.OrderNumber,
    o.OrderDate
FROM Customer_Master c
INNER JOIN Orders o
    ON o.SubscriberKey = c.SubscriberKey
```

---

## 13.4 Deduplication with ROW_NUMBER

Common SFMC pattern:

```sql
SELECT
    x.SubscriberKey,
    x.EmailAddress,
    x.OrderNumber,
    x.OrderDate
FROM (
    SELECT
        c.SubscriberKey,
        c.EmailAddress,
        o.OrderNumber,
        o.OrderDate,
        ROW_NUMBER() OVER (
            PARTITION BY c.SubscriberKey
            ORDER BY o.OrderDate DESC
        ) AS rn
    FROM Customer_Master c
    INNER JOIN Orders o
        ON o.SubscriberKey = c.SubscriberKey
) x
WHERE x.rn = 1
```

Use case:

> Get each customer's latest order.

---

## 13.5 Avoid uncontrolled duplicates

Before creating a Journey Entry DE, know:

- Primary key.
- Intended uniqueness.
- Whether repeat journey entry is allowed.
- Whether the query can generate multiple rows per contact.
- Whether old records should remain.

---

## 13.6 Data Views

Common system Data Views include objects such as:

```text
_Sent
_Open
_Click
_Bounce
_Job
_Subscribers
_Journey
_JourneyActivity
```

Availability, fields, and retention behavior should always be checked against current Salesforce documentation and account configuration.

Example pattern:

```sql
SELECT
    s.SubscriberKey,
    s.EventDate AS SentDate
FROM _Sent s
WHERE s.EventDate >= DATEADD(day, -7, GETDATE())
```

When joining Data Views, understand job/subscriber identifiers and the possibility of duplicate tracking events.

---

# 14. Data Extensions

A Data Extension is more than "a table."

You should understand:

- Name.
- External key / CustomerKey.
- Fields.
- Field types.
- Maximum lengths.
- Nullability.
- Defaults.
- Primary keys.
- Sendability.
- Subscriber relationship.
- Retention configuration.
- BU ownership.
- Shared vs local context.

## 14.1 Design from purpose

Bad:

```text
DE name: Data1
Fields:
Field1 Text(500)
Field2 Text(500)
Field3 Text(500)
```

Better:

```text
DE: JNY_Welcome_Entry

SubscriberKey   Text(100)   PK   Not Null
EmailAddress    EmailAddress     Not Null
FirstName       Text(100)        Null
Locale          Text(10)         Null
CreatedDate     Date             Not Null
SourceSystem    Text(50)         Null
```

---

## 14.2 SubscriberKey matters

Do not casually use email address as the universal identity key.

A stable SubscriberKey/contact key is usually safer because:

- Email can change.
- One individual may have multiple email addresses.
- Data can come from multiple systems.
- Contact model consistency matters.

Your exact identity model depends on the implementation.

---

## 14.3 External keys are developer-friendly

Use stable external/customer keys for:

- API calls.
- Automation references.
- reusable code.
- deployment.
- content blocks.
- Data Extensions.

Human-readable names can change.

---

# 15. CloudPages Development

CloudPages can support:

- Preference centers.
- Forms.
- Campaign landing pages.
- API-like endpoints.
- Confirmation pages.
- Custom profile experiences.
- Data capture.

They are also public web applications, so web-development security thinking applies.

## 15.1 Suggested structure

```text
cloudpages/
└── preference-center/
    ├── index.html
    ├── logic.amp
    ├── server.ssjs
    ├── styles.css
    └── README.md
```

In SFMC you may ultimately combine portions into Content Builder/CloudPages assets, but locally separating concerns improves readability.

---

## 15.2 Basic page pattern

```html
%%[
  VAR @firstName

  SET @firstName = RequestParameter("firstName")

  IF Empty(@firstName) THEN
    SET @firstName = "Guest"
  ENDIF
]%%

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Preference Center</title>
</head>
<body>

  <h1>Hello %%=v(@firstName)=%%</h1>

</body>
</html>
```

---

## 15.3 Never trust request parameters

Bad:

```ampscript
SET @subscriberKey = RequestParameter("subscriberKey")
DeleteData("Subscribers", "SubscriberKey", @subscriberKey)
```

A public request parameter should not automatically grant authorization to perform a destructive operation.

You need an identity/authorization design.

---

## 15.4 Separate display and processing

Prefer a pattern like:

```text
GET request
   -> validate context
   -> render form

POST request
   -> validate context
   -> validate input
   -> make controlled update
   -> log result
   -> redirect/confirmation
```

This is easier to debug than mixing every concern in one block.

---

# 16. Email Development in VS Code

SFMC email development is not ordinary web development.

Email clients vary substantially in HTML/CSS support.

## 16.1 General approach

Use:

- Tables for robust layout where needed.
- Inline CSS for broad compatibility.
- Responsive media queries where supported.
- Simple HTML.
- Meaningful alt text.
- Accessible text contrast.
- Proper heading hierarchy where practical.
- A real plain-text strategy when required.
- Preheader text.
- Unsubscribe/profile-center requirements.

Avoid assuming:

- Flexbox works everywhere.
- Grid works everywhere.
- JavaScript can be used.
- external CSS behaves like a website.
- background images are universally supported.

---

## 16.2 Component-based local structure

```text
email/
├── shared/
│   ├── header.html
│   ├── footer.html
│   └── button.html
│
├── campaigns/
│   └── welcome/
│       ├── email.html
│       ├── subject.md
│       └── test-cases.md
│
└── tokens/
    └── design-tokens.json
```

You can map reusable pieces to Content Builder blocks.

---

## 16.3 Personalization test matrix

For every dynamic email, test at least:

```text
FirstName present
FirstName empty
LoyaltyTier known
LoyaltyTier unknown
Country supported
Country unsupported
Data Extension row missing
Long text value
Special characters
Unicode name
Bad/null date
Multiple related rows
Zero related rows
```

---

# 17. Content Builder Development

Content Builder assets can include:

- Emails.
- Templates.
- Content blocks.
- HTML blocks.
- Code resources.
- CloudPage-related assets.
- Images.
- Shared assets.

## 17.1 Reusable content architecture

Example:

```text
GLOBAL_HEADER
GLOBAL_FOOTER
GLOBAL_LEGAL
CTA_PRIMARY
PRODUCT_CARD
LOYALTY_TIER_BANNER
```

Then reference them instead of duplicating code.

Benefits:

- Faster fixes.
- Consistency.
- Reduced copy/paste.
- Easier governance.

## 17.2 Beware global changes

A shared content block can affect many emails.

Before changing a global block:

1. Search dependencies.
2. Determine active journeys/sends using it.
3. Test representative emails.
4. Use change review.
5. Have rollback content ready.

---

# 18. Automation Studio Development

Automation Studio commonly orchestrates:

- Imports.
- SQL Query Activities.
- Data Extracts.
- File Transfers.
- Script Activities.
- Filters.
- Sends.
- Multi-step scheduled pipelines.

## 18.1 Think in pipelines

Example:

```text
SFTP file arrives
      |
      v
File Transfer
      |
      v
Import Activity
      |
      v
Staging DE
      |
      v
SQL validation
      |
      v
Clean DE
      |
      v
Audience query
      |
      v
Journey Entry DE
```

Document:

- Trigger.
- Schedule.
- Expected file.
- Dependencies.
- Output DE.
- Failure behavior.
- Owner.
- Recovery steps.

---

## 18.2 Script Activities

SSJS Script Activities are powerful.

Good uses:

- Metadata operations.
- Controlled API calls.
- Orchestration logic not practical in SQL.
- Logging.
- Specific data processing.

Bad uses:

- Huge row-by-row loops when a SQL/import operation can do it more efficiently.
- Unbounded external calls.
- Secrets hard-coded directly in code.

---

# 19. Journey Builder Developer Knowledge

Even when Journey Builder is visually configured, developers should understand:

- Entry source.
- Contact key.
- Re-entry mode.
- Decision splits.
- Waits.
- Goals.
- Exit criteria.
- Email activities.
- Custom activities.
- Data Extension dependencies.
- Publication/send classification.
- Version activation.
- Journey versioning behavior.

## 19.1 Before changing a Journey dependency

Ask:

```text
Is the journey active?
Which version is active?
Which DE is the entry source?
Can contacts re-enter?
Which emails/content blocks are referenced?
Which automation populates the entry DE?
Does the query overwrite/update/append?
What happens if this field becomes null?
```

---

# 20. SFMC REST and SOAP APIs

Marketing Cloud Engagement exposes REST and SOAP APIs.

A simplified decision:

```text
REST
  -> modern JSON APIs
  -> Content Builder
  -> Journey operations
  -> messaging
  -> data-related APIs
  -> many newer capabilities

SOAP
  -> many established platform objects
  -> subscribers
  -> some email/automation operations
  -> WSProxy-backed platform operations
```

Do not pick SOAP merely because an old example uses SOAP.

Check current REST capability first.

---

## 20.1 Typical external API architecture

```text
Your application
      |
      | OAuth client credentials
      v
SFMC Authentication endpoint
      |
      | access token
      v
REST/SOAP endpoint
      |
      v
Marketing Cloud Engagement
```

---

## 20.2 Token request concept

A typical server-to-server flow sends values such as:

```json
{
  "grant_type": "client_credentials",
  "client_id": "${SFMC_CLIENT_ID}",
  "client_secret": "${SFMC_CLIENT_SECRET}",
  "account_id": "${SFMC_ACCOUNT_ID}"
}
```

Use the tenant-specific authentication base URI generated for the Installed Package.

Do **not** copy example hostnames from random tutorials into production.

---

## 20.3 Local environment variables

PowerShell session:

```powershell
$env:SFMC_CLIENT_ID="..."
$env:SFMC_CLIENT_SECRET="..."
$env:SFMC_AUTH_BASE_URI="..."
$env:SFMC_ACCOUNT_ID="..."
```

Node.js:

```javascript
const clientId = process.env.SFMC_CLIENT_ID;
const clientSecret = process.env.SFMC_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing SFMC credentials.");
}
```

Never:

```javascript
const clientSecret = "real-production-secret";
```

inside committed source code.

---

# 21. Installed Packages and Authentication

Installed Packages are foundational to SFMC API development.

Use them to define integrations and permissions.

## 21.1 Principle of least privilege

If a tool only needs:

```text
Data Extensions: Read
Assets: Read
```

do not automatically grant:

```text
Write
Execute
Delete
Send
Automation control
Journey activation
```

Permissions should match the workload.

## 21.2 Separate integrations

Consider separate packages for:

```text
Developer read-only tooling
CI/CD deployment
Production integration app
MCP/AI integration
Emergency admin tooling
```

This gives clearer auditing and reduces blast radius.

---

# 22. SFMC DevTools / mcdev

Accenture SFMC DevTools (`mcdev`) is a widely used project for retrieving and deploying SFMC configuration/code.

## 22.1 Install

```bash
npm install -g mcdev
```

## 22.2 Initialize

```bash
mcdev init
```

This is generally a project setup action rather than something you run before every retrieve.

## 22.3 Retrieve

Common CLI form:

```bash
mcdev retrieve
```

Short form used by the project:

```bash
mcdev r
```

## 22.4 Deploy

Common form:

```bash
mcdev deploy
```

Short:

```bash
mcdev d
```

A targeted pattern can look like:

```bash
mcdev deploy credentialName/businessUnitName
```

Exact usage depends on current `mcdev` version and project configuration.

## 22.5 Retrieve and deploy folders

Conceptually:

```text
retrieve/
  credential/
    source-bu/
      ...

deploy/
  credential/
    target-bu/
      ...
```

Do **not** assume retrieving from BU A means running deploy to BU B will automatically deploy everything you intended.

Inspect what is inside the deployment folder/package.

## 22.6 Supported metadata varies

Not every SFMC metadata type supports every operation.

A type may support:

```text
retrieve: yes
create: yes
update: yes
delete: yes
```

while another may support only retrieval.

Before planning CI/CD for a new metadata type, check the current `mcdev` metadata support documentation.

## 22.7 VS Code extension workflow

With the SFMC DevTools VS Code extension, you can use context actions for supported operations such as:

- Retrieve.
- Deploy.
- Copy to Business Unit.
- Validate.
- Execute/run for applicable metadata.
- Refresh.
- Build/template workflows.
- Delta-package workflows, depending on current version.

This can be more productive than manually typing every CLI command.

---

# 23. Git and Version-Control Strategy

Without version control:

```text
Production block changed
Developer forgot old code
No diff
No review
No easy rollback
```

With Git:

```text
Retrieve
   ↓
Branch
   ↓
Modify
   ↓
Diff
   ↓
Review
   ↓
Test
   ↓
Merge
   ↓
Deploy
   ↓
Tag/release
```

## 23.1 Branch naming

Examples:

```text
feature/welcome-email-loyalty
feature/preference-center
fix/null-first-name
fix/journey-entry-dedup
chore/update-shared-footer
release/2026-08-13
```

## 23.2 Commit messages

Bad:

```text
changes
update
final
final2
new final
```

Better:

```text
feat(email): add loyalty-tier personalization

fix(sql): deduplicate journey entry by subscriber key

fix(cloudpage): validate preference-center email input

chore(content): update legal footer copy
```

## 23.3 Commit one logical change

Avoid one giant commit containing:

```text
12 unrelated emails
4 SQL queries
2 automations
footer change
journey metadata
random formatting
```

Small logical commits improve review and rollback.

---

# 24. Deployment Workflow

A safe development lifecycle:

```text
1. Retrieve current source
2. Create branch
3. Make change locally
4. Format/lint
5. Review Git diff
6. Peer review
7. Deploy to DEV/Test BU
8. Validate in SFMC
9. Run test data/test send
10. Prepare deployment package
11. Deploy to PROD
12. Post-deployment smoke test
13. Tag/release note
14. Monitor
```

## 24.1 Never deploy stale source

Before changing a production-owned asset:

```text
retrieve latest
compare
confirm nobody changed it
then edit
```

Otherwise you can overwrite someone else's newer change.

---

# 25. Debugging and Troubleshooting

SFMC debugging is often harder than application debugging because code runs inside Salesforce-managed services.

Use structured logging.

## 25.1 Logging Data Extension

Example DE:

```text
DEV_Log

LogId          Text(36)      PK
Timestamp      Date
Environment    Text(20)
Component      Text(100)
SubscriberKey  Text(100)
Level          Text(20)
Message        Text(4000)
CorrelationId  Text(100)
```

Never dump excessive PII or secrets into logs.

---

## 25.2 Debug flags

Useful during CloudPage development:

```ampscript
%%[
  VAR @debug
  SET @debug = RequestParameter("debug")
]%%

%%[ IF @debug == "1" THEN ]%%

<pre>
Debug mode
</pre>

%%[ ENDIF ]%%
```

Do not ship a public debug flag that exposes sensitive internals.

Better production designs restrict debug output or write server-side logs only.

---

## 25.3 Debugging checklist

When a script fails:

1. Confirm BU.
2. Confirm Data Extension external key/name.
3. Confirm field spelling.
4. Confirm field type.
5. Confirm null data.
6. Confirm execution context: email vs CloudPage vs Script Activity.
7. Confirm Installed Package permissions.
8. Confirm API endpoint/tenant.
9. Confirm content block exists.
10. Confirm personalization field is available.
11. Reduce to minimal reproducible code.
12. Test with synthetic data.
13. Compare current production source with Git.
14. Inspect automation/run history.
15. Check external API response status/body safely.

---

# 26. Testing Strategy

You cannot treat local execution as a perfect replica of SFMC runtime.

Different components need different test strategies.

## 26.1 AMPscript

Test:

- Syntax.
- Missing attributes.
- Empty values.
- Lookup hit/miss.
- Multiple-row behavior.
- Email preview.
- Test send.
- CloudPage execution where relevant.

## 26.2 SSJS

Test:

- Syntax/lint.
- Happy path.
- Catch block.
- Empty response.
- malformed JSON.
- API failure.
- permission failure.
- Data Extension missing.
- field missing.
- execution time/resource behavior.

## 26.3 SQL

Test:

- Row count.
- duplicates.
- null values.
- join explosion.
- target DE compatibility.
- primary-key collision.
- date boundaries.
- time zones.
- output action behavior.
- runtime on realistic volume.

## 26.4 Email

Test:

- Desktop.
- Mobile.
- Dark mode if relevant.
- Outlook variants.
- Gmail.
- Apple Mail/iOS where relevant.
- Images off.
- Long content.
- Dynamic-content branches.
- Tracking links.
- unsubscribe/preferences.

Use dedicated email-render testing services when your organization has them.

---

# 27. Security and Privacy

SFMC often contains personal/customer data. Development convenience must not weaken security.

## 27.1 Never commit

```text
ClientSecret
AccessToken
RefreshToken
Private key
SFTP password
Real subscriber export
Unmasked PII
Production API dump
```

## 27.2 `.gitignore`

Example:

```gitignore
# Dependencies
node_modules/

# Environment files
.env
.env.*
!.env.example

# Credentials / secrets
*.secret
*.key
*.pem
credentials/
secrets/

# Local SFMC auth/config if it contains secrets
.auth/
.local/

# Logs
logs/
*.log

# OS/editor
.DS_Store
Thumbs.db
```

Do not ignore an mcdev configuration blindly without understanding whether your team expects portions of it in version control.

## 27.3 Synthetic test data

Use:

```text
test1@example.invalid
TEST-00001
Sample Customer
Synthetic Address
```

instead of downloading real customer records to laptops whenever possible.

## 27.4 Output encoding

If a CloudPage prints user-controlled values, encode/validate them.

Do not build HTML directly from uncontrolled request parameters.

## 27.5 `TreatAsContent`

If you use functionality that interprets a string as executable/renderable content, sanitize or strictly allowlist input. Never treat arbitrary user-submitted text as trusted dynamic AMPscript/HTML.

---

# 28. Amp AI with VS Code for SFMC

This section refers to **Amp, the AI coding agent**, not AMPscript.

As of this handbook's review date, Amp's current workflow uses the **Amp CLI with IDE integration** for VS Code.

## 28.1 Install Amp on Windows

Current official Amp documentation provides a PowerShell install route similar to:

```powershell
powershell -c "irm https://ampcode.com/install.ps1 | iex"
```

Always verify the current install command on Amp's official site before running a remote installation script.

Then:

```powershell
amp
```

Keep it current:

```powershell
amp update
```

## 28.2 Connect Amp to VS Code

Current Amp documentation states that the CLI can integrate with VS Code.

Concept:

```text
1. Open your SFMC repository in VS Code
2. Open terminal
3. Run:
   amp
4. Use Amp's command palette
5. Connect to the IDE
```

The integration lets Amp use IDE context such as:

- Current open file.
- Selected code.
- Diagnostics.
- File edits with editor undo support.

This is ideal for SFMC work because you can select one AMPscript/SSJS/SQL asset and ask questions about exactly that code.

---

## 28.3 Good Amp tasks for SFMC

### Explain code

```text
Explain this AMPscript block line by line.
Identify every Data Extension and attribute it depends on.
Do not edit files.
```

### Find null-handling bugs

```text
Review the selected AMPscript for null or empty-value failures.
Do not change behavior.
Suggest the smallest safe patch.
```

### SQL review

```text
Review this SFMC Query Activity SQL.
Check for duplicate-row risk, primary-key collisions, join explosion,
SELECT *, bad date boundaries, and target-DE incompatibility.
Do not edit until you explain the findings.
```

### Refactor SSJS

```text
Refactor this SSJS Script Activity for readability.
Keep it compatible with SFMC server-side JavaScript.
Do not introduce Node.js-only APIs or browser DOM APIs.
```

### Deployment review

```text
Review git diff.
List every SFMC asset that changed.
Flag anything that could trigger a send, modify a Journey,
change an Automation, delete metadata, or write customer data.
Do not deploy anything.
```

### Documentation

```text
Read the automation metadata and SQL files in this folder.
Create docs/runbooks/customer-import.md describing:
trigger, dependencies, target DEs, failure points, and recovery steps.
```

---

## 28.4 What Amp must be told about SFMC

AI coding agents know JavaScript, SQL, and web development, but SFMC has runtime constraints.

Put these constraints in `AGENTS.md`:

```text
- SSJS runs in Marketing Cloud Engagement, not Node.js.
- Do not use DOM APIs in SSJS.
- Do not assume modern npm packages are available inside SFMC.
- AMPscript execution context matters.
- Email and CloudPage DE-write functions differ.
- Do not deploy without an explicit user instruction.
- Never modify production credentials.
- Never run sends, Journeys, Automations, or destructive tools by default.
- Prefer read-only inspection and dry runs.
```

---

## 28.5 Use Amp as reviewer, not just generator

High-value pattern:

```text
You write code
   ↓
Amp reviews
   ↓
You fix
   ↓
Amp reviews git diff
   ↓
Human peer reviews
   ↓
Deploy to test BU
```

AI becomes a second set of eyes rather than a replacement for validation.

---

## 28.6 Prompt with evidence

Bad:

```text
Fix my SFMC.
```

Better:

```text
The selected file is an AMPscript content block used by an email.

Expected:
- Gold members see GOLD20
- Silver members see SILVER10
- Missing tier sees WELCOME5

Current problem:
- Missing Loyalty_Profile row renders an empty coupon.

Review only this file and propose the minimum safe change.
```

Specific prompts dramatically reduce accidental scope expansion.

---

# 29. AGENTS.md for an SFMC Repository

Amp can read `AGENTS.md` as repository guidance.

A strong SFMC file could look like this:

```markdown
# AGENTS.md

## Project

This repository contains Salesforce Marketing Cloud Engagement assets.

Primary technologies:

- AMPscript
- SSJS
- SFMC SQL Query Activities
- HTML email
- CloudPages
- mcdev metadata

## Safety

- Never deploy to SFMC unless the user explicitly instructs you to deploy.
- Never run or activate a Journey.
- Never trigger a send.
- Never run a production Automation.
- Never delete Data Extensions, rows, content, automations, or journeys.
- Never print or commit secrets.
- Never put production PII into test fixtures.
- Prefer read-only inspection and dry-run validation.

## AMPscript

- Use defensive null/empty handling.
- Prefer AttributeValue() when reading subscriber attributes.
- Do not assume a Lookup() returns a row/value.
- Keep email-render-time processing lightweight.
- Verify function availability in the current execution context.
- Use stable content/external keys where possible.

## SSJS

- Code runs in Marketing Cloud Engagement server-side JavaScript.
- Do not introduce Node.js modules into SFMC runtime code.
- Do not use browser DOM APIs.
- Prefer WSProxy where appropriate for supported SOAP objects.
- Catch errors without exposing sensitive details publicly.

## SQL

- Never add SELECT * to production Query Activities.
- Check duplicate-row risk.
- Check target-DE primary keys.
- Check nullability and field lengths.
- Keep Journey Entry queries deterministic.
- Confirm overwrite/update/append behavior before changing a query.

## CloudPages

- Treat all RequestParameter/form/query values as untrusted.
- Validate identity before changing subscriber preferences or customer data.
- Do not expose debug traces, tokens, or PII.
- Encode output.

## Git

Before editing a retrieved SFMC asset:

1. Confirm the retrieved copy is current.
2. Keep changes narrowly scoped.
3. Review git diff.
4. Do not change generated metadata unnecessarily.

## Validation

For every code change:

1. Explain what changed.
2. Explain risk.
3. List SFMC assets/dependencies affected.
4. Provide test cases.
5. Review git diff before considering the task complete.
```

This file can dramatically improve AI consistency across the repository.

---

# 30. Amp + Salesforce MCE MCP Server

This is one of the most important modern productivity opportunities for SFMC developers.

Salesforce released a first-party **MCP Server for Marketing Cloud Engagement**.

MCP allows compatible AI agents to call SFMC tools.

Capabilities can cover areas such as:

- Data Extensions.
- Automations.
- SQL Query Activities.
- Journeys.
- Other supported Marketing Cloud operations.

Coverage evolves, so always inspect the current Salesforce MCP tool reference.

---

## 30.1 Why MCP changes the workflow

Without MCP:

```text
Developer
  -> browser UI
  -> API docs
  -> manually write request
  -> auth
  -> call endpoint
  -> parse result
```

With MCP:

```text
Developer
  -> asks agent
  -> agent discovers allowed SFMC tool
  -> agent calls tool
  -> agent interprets result
```

This can save substantial time for investigation and repetitive administration.

---

## 30.2 Permissions remain the most important control

Salesforce's MCP design combines:

- Installed Package scopes.
- User permissions.

Therefore, do not create one "god mode" AI package unless there is a very strong, reviewed reason.

Recommended progression:

```text
Stage 1
Read-only DEV package

Stage 2
Read/write DEV package

Stage 3
Narrow production read-only package

Stage 4
Only if required:
specific production write permissions
```

For many developers, production MCP should remain read-only.

---

## 30.3 Safe Amp + MCP prompt pattern

```text
Use the SFMC MCP tools in READ-ONLY mode.

Find the Data Extension named JNY_Welcome_Entry.
Return:
- external key
- fields
- primary keys
- sendable status
- folder/category
- any obvious schema problem

Do not create, update, execute, activate, send, or delete anything.
```

Then, separately:

```text
Prepare a proposed change to add SourceSystem Text(50).
Show the exact impact and dependencies.
Do not execute the change.
```

Only after review should a separate explicit instruction authorize modification.

---

## 30.4 Destructive operation policy

Treat these as high risk:

```text
Delete DE
Delete rows
Update production SQL
Run automation
Activate automation trigger
Execute production SSJS
Activate Journey
Trigger message/send
Change Journey dependency
Modify shared Content Builder asset
```

Use:

```text
read
inspect
dry-run
show plan
show diff
human review
then explicitly authorize
```

---

# 31. Useful VS Code Snippets

Create:

```text
File
  -> Preferences
  -> Configure User Snippets
```

You can create a project snippet file such as:

```text
.vscode/sfmc.code-snippets
```

Example:

```json
{
  "AMPscript block": {
    "scope": "html",
    "prefix": "ampscript-block",
    "body": [
      "%%[",
      "  VAR @${1:variable}",
      "  SET @${1:variable} = ${2:value}",
      "]%%",
      "",
      "${0}"
    ],
    "description": "Create an AMPscript processing block"
  },

  "AMPscript defensive attribute": {
    "scope": "html",
    "prefix": "ampscript-attr",
    "body": [
      "%%[",
      "  VAR @${1:firstName}",
      "  SET @${1:firstName} = AttributeValue(\"${2:FirstName}\")",
      "",
      "  IF Empty(@${1:firstName}) THEN",
      "    SET @${1:firstName} = \"${3:there}\"",
      "  ENDIF",
      "]%%",
      "",
      "%%=v(@${1:firstName})=%%"
    ],
    "description": "Read an attribute with an empty fallback"
  },

  "SSJS block": {
    "scope": "html,javascript",
    "prefix": "sfmc-ssjs",
    "body": [
      "<script runat=\"server\">",
      "Platform.Load(\"Core\", \"1\");",
      "",
      "try {",
      "  ${1:// logic}",
      "} catch (e) {",
      "  ${2:// safe error handling}",
      "}",
      "</script>"
    ],
    "description": "SFMC Server-Side JavaScript block"
  }
}
```

---

# 32. Tasks and Automation in VS Code

VS Code Tasks can standardize common developer actions.

Example `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "SFMC: Retrieve",
      "type": "shell",
      "command": "mcdev retrieve",
      "problemMatcher": []
    },
    {
      "label": "SFMC: Git Diff",
      "type": "shell",
      "command": "git diff",
      "problemMatcher": []
    },
    {
      "label": "SFMC: Status",
      "type": "shell",
      "command": "git status --short",
      "problemMatcher": []
    }
  ]
}
```

Do not create a one-key production deployment task unless your organization's controls make accidental execution impossible.

---

# 33. Naming Conventions

Good naming is an enormous productivity multiplier.

## 33.1 Data Extensions

Pattern:

```text
<DOMAIN>_<PURPOSE>_<TYPE>
```

Examples:

```text
CRM_Customer_Master
JNY_Welcome_Entry
JNY_Welcome_Log
RPT_Email_Engagement
STG_Order_Import
TMP_Dedupe_Customers
CFG_Country_Mapping
LOG_CloudPage_Errors
```

Prefixes:

```text
STG = staging
TMP = temporary
JNY = journey
RPT = reporting
CFG = configuration
LOG = logging
```

---

## 33.2 Automation names

```text
AUT | Daily Customer Import | 01:00 UTC
AUT | Welcome Audience Build | Hourly
AUT | Weekly Engagement Report | Mon 06:00
```

Human-readable names reduce support time.

---

## 33.3 SQL activity names

```text
QRY | Welcome | Build Entry Audience
QRY | Orders | Latest Order Per Customer
QRY | Reporting | Email Engagement 30D
```

---

## 33.4 Content block external keys

```text
GLOBAL_HEADER_V1
GLOBAL_FOOTER_V3
EMAIL_BUTTON_PRIMARY
LOYALTY_TIER_BANNER
LEGAL_TERMS_INDIA
```

Avoid random GUID-only human workflows when a stable semantic key is available.

---

# 34. Code Review Checklist

For an AMPscript/SSJS/SQL/CloudPage PR:

- [ ] Is the requirement clear?
- [ ] Is the changed BU/environment identified?
- [ ] Was the latest asset retrieved before editing?
- [ ] Is the change narrowly scoped?
- [ ] Are secrets absent?
- [ ] Is real PII absent from fixtures/logs?
- [ ] Are empty/null values handled?
- [ ] Are Data Extension names/keys correct?
- [ ] Are field lengths/types compatible?
- [ ] Is SubscriberKey/contact identity handled correctly?
- [ ] Can SQL create duplicate primary keys?
- [ ] Could a join multiply rows unexpectedly?
- [ ] Is `SELECT *` avoided?
- [ ] Does AMPscript use the correct execution-context functions?
- [ ] Does SSJS avoid Node/browser-only APIs?
- [ ] Are user-controlled CloudPage values validated?
- [ ] Is output encoded where needed?
- [ ] Are Content Builder dependencies known?
- [ ] Could a shared asset change affect multiple sends?
- [ ] Could this run/activate/send/delete anything?
- [ ] Are test cases documented?
- [ ] Has `git diff` been reviewed?
- [ ] Is rollback possible?

---

# 35. Production Release Checklist

- [ ] Retrieve/verify latest production version.
- [ ] PR approved.
- [ ] Test BU validation complete.
- [ ] Email test sends complete.
- [ ] Dynamic personalization branches tested.
- [ ] SQL row counts validated.
- [ ] Primary key/duplicate risk checked.
- [ ] CloudPage security cases tested.
- [ ] Automation dependencies reviewed.
- [ ] Journey dependencies reviewed.
- [ ] Deployment package contains only intended assets.
- [ ] Production BU confirmed.
- [ ] Deployment permissions confirmed.
- [ ] Rollback version/tag available.
- [ ] Deployment executed.
- [ ] Post-deployment smoke test completed.
- [ ] Automation/Journey state checked.
- [ ] Logs/job results monitored.
- [ ] Release notes recorded.

---

# 36. Common SFMC Mistakes

## Mistake 1: Editing directly in production

Problem:

- No review.
- No history.
- Easy accidental break.

Better:

```text
retrieve -> branch -> edit -> review -> deploy
```

---

## Mistake 2: Hard-coding a Data Extension name everywhere

Better:

- Use stable keys where supported.
- centralize configuration.
- document dependencies.

---

## Mistake 3: Doing heavy work at email render time

Better:

- Precompute with SQL/Automation Studio.
- Keep send-time AMPscript small.

---

## Mistake 4: Assuming SSJS is Node.js

It is not.

Do not casually generate:

```javascript
const fs = require("fs");
```

for code that will execute inside SFMC SSJS.

---

## Mistake 5: Trusting CloudPage URL parameters

Never treat:

```text
?subscriberKey=123
```

as proof the visitor is actually subscriber `123`.

---

## Mistake 6: Using email address as identity everywhere

Use the implementation's deliberate contact/subscriber key strategy.

---

## Mistake 7: Giving an AI agent admin permissions

Start read-only.

Expand only when the task proves it needs more.

---

## Mistake 8: Blind deployment

Inspect the exact files/metadata in the deployment package.

---

## Mistake 9: Copying code from an old blog without verifying current docs

SFMC APIs, features, and tooling evolve.

Check current:

- Salesforce Developer docs.
- official Salesforce release information.
- active project documentation for community tools.

---

# 37. Productivity Playbook

## 37.1 Daily developer routine

### Start of task

```text
git checkout main
git pull
retrieve current SFMC source
git checkout -b feature/...
```

### While coding

```text
VS Code split editor
workspace search
snippets
format/lint
small commits
Amp review
```

### Before review

```text
git status
git diff
search for secrets
run tests/checklists
document affected assets
```

### Before deployment

```text
confirm BU
confirm package contents
confirm permissions
confirm rollback
```

---

## 37.2 80/20 shortcuts to memorize first

If you only memorize ten VS Code shortcuts:

```text
Ctrl+P          Quick Open
Ctrl+Shift+P    Command Palette
Ctrl+Shift+F    Search workspace
Ctrl+Shift+H    Replace workspace
Ctrl+D          Select next occurrence
Ctrl+Shift+L    Select all occurrences
Alt+Up/Down     Move line
Ctrl+/          Toggle comment
Shift+Alt+F     Format
Ctrl+`          Terminal
```

These alone can save a large amount of time.

---

## 37.3 Search before changing a shared identifier

Before changing:

```text
JNY_Welcome_Entry
GLOBAL_FOOTER
LOYALTY_TIER_BANNER
Customer_Master
```

press:

```text
Ctrl + Shift + F
```

and find every local dependency.

This simple habit prevents many regressions.

---

## 37.4 Use multi-cursor for repetitive field work

Great for:

- Adding SQL aliases.
- Renaming repeated AMPscript variables.
- Editing JSON metadata.
- Building DE field lists.
- Prefixing columns.

---

## 37.5 Use compare/diff constantly

Do not read an entire 500-line email trying to remember what changed.

Use Git diff.

Focus only on changed lines.

---

# 38. Learning Roadmap

## Stage 1 — Foundation

Learn:

- SFMC navigation.
- Business Units.
- SubscriberKey.
- Data Extensions.
- Content Builder.
- Email Studio concepts.
- Automation Studio concepts.
- Journey Builder concepts.

Build:

```text
1 static email
1 sendable DE
1 test send
```

---

## Stage 2 — AMPscript

Learn:

- Variables.
- conditions.
- loops.
- personalization.
- `AttributeValue`.
- `Lookup`.
- `LookupRows`.
- rowsets.
- date/string functions.
- content blocks.
- CloudPagesURL.
- RequestParameter.

Build:

```text
personalized loyalty email
```

---

## Stage 3 — SQL

Learn:

- SELECT.
- WHERE.
- JOIN.
- GROUP BY.
- CASE.
- window functions.
- deduplication.
- Data Views.
- Query Activities.

Build:

```text
Journey Entry audience
```

---

## Stage 4 — CloudPages

Learn:

- Forms.
- RequestParameter.
- Data Extension writes.
- server validation.
- redirects.
- secure customer context.
- error handling.

Build:

```text
preference center
```

---

## Stage 5 — SSJS

Learn:

- Core library.
- Platform functions.
- JSON.
- try/catch.
- DataExtension object.
- WSProxy.
- external HTTP integration where appropriate.

Build:

```text
automation logging utility
```

---

## Stage 6 — APIs

Learn:

- Installed Packages.
- OAuth.
- REST.
- SOAP concepts.
- rate/error handling.
- external integration patterns.

Build:

```text
Node.js script that safely retrieves SFMC metadata
```

---

## Stage 7 — DevOps

Learn:

- Git.
- branching.
- pull requests.
- `mcdev`.
- retrieve/deploy.
- release packaging.
- CI/CD concepts.
- environment separation.

Build:

```text
DEV -> QA/Test -> PROD deployment workflow
```

---

## Stage 8 — AI-assisted SFMC development

Learn:

- Amp CLI.
- IDE integration.
- `AGENTS.md`.
- safe prompts.
- review workflows.
- MCP.
- read-only agent access.
- dry runs.
- auditability.

Build:

```text
Amp-assisted code review + read-only MCE MCP investigation workflow
```

---

# 39. Quick Reference Cheat Sheets

## 39.1 AMPscript syntax

```ampscript
%%[
  VAR @x
  SET @x = "value"

  IF @x == "value" THEN
    /* logic */
  ELSE
    /* logic */
  ENDIF
]%%

%%=v(@x)=%%
```

---

## 39.2 AMPscript lookup

```ampscript
SET @value = Lookup(
  "DE_Name",
  "ReturnField",
  "SearchField",
  @searchValue
)
```

---

## 39.3 AMPscript rowset

```ampscript
SET @rows = LookupRows("DE_Name", "Key", @key)
SET @count = RowCount(@rows)

IF @count > 0 THEN

  FOR @i = 1 TO @count DO

    SET @row = Row(@rows, @i)
    SET @value = Field(@row, "FieldName")

  NEXT @i

ENDIF
```

---

## 39.4 SSJS skeleton

```html
<script runat="server">
Platform.Load("Core", "1");

try {

  // logic

} catch (e) {

  // safe logging

}
</script>
```

---

## 39.5 SQL latest-record pattern

```sql
SELECT
    x.*
FROM (
    SELECT
        t.*,
        ROW_NUMBER() OVER (
            PARTITION BY t.SubscriberKey
            ORDER BY t.EventDate DESC
        ) AS rn
    FROM SourceDE t
) x
WHERE x.rn = 1
```

For production Query Activities, explicitly list the target columns instead of `x.*`.

---

## 39.6 mcdev

```bash
npm install -g mcdev

mcdev init
mcdev retrieve
mcdev r

mcdev deploy
mcdev d
```

Check the current project docs for additional commands and exact metadata support.

---

## 39.7 Git

```bash
git status
git pull
git checkout -b feature/my-change
git diff
git add .
git commit -m "feat(email): add loyalty personalization"
git push
```

---

## 39.8 Amp

```bash
amp
amp update
```

Recommended first review prompt:

```text
Read AGENTS.md and review git diff.
Do not edit files and do not execute any SFMC write/deploy/run/send operation.
Explain risks and test cases.
```

---

# 40. Recommended Official and Project References

Because SFMC and developer tooling change, always treat current documentation as the final authority.

## Salesforce

### Marketing Cloud Developer Center

https://developer.salesforce.com/developer-centers/marketing-cloud

### AMPscript Guide

https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/overview

### AMPscript Function Reference

https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/references

### AMPscript Core Extension

https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/guide/mc-ampscript-guide-development-core-extension-install.html

### Marketing Cloud Engagement APIs and Programmatic Languages

https://developer.salesforce.com/docs/marketing/marketing-cloud/overview

### REST API

https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/rest-api-overview.html

### SSJS

https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_serverSideJavaScript.html

### WSProxy

https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_WSProxy_useSSJS.html

### Marketing Cloud Engagement MCP

https://developer.salesforce.com/docs/marketing/mce-mcp/overview

---

## VS Code

### Official VS Code documentation

https://code.visualstudio.com/docs

---

## SFMC DevTools

### Accenture SFMC DevTools

https://github.com/Accenture/sfmc-devtools

### Accenture SFMC DevTools VS Code

https://github.com/Accenture/sfmc-devtools-vscode

---

## Amp AI

### Amp

https://ampcode.com/

### Amp Owner's Manual

https://ampcode.com/manual

### AGENTS.md

https://ampcode.com/agent.md

---

# Final Recommended SFMC + VS Code Setup

For a strong day-to-day SFMC developer workstation:

```text
VS Code
│
├── SFMC DevTools / mcdev
├── SFMC Language Service
├── Prettier
├── ESLint
├── EditorConfig
├── Git
│
├── AMPscript
├── SSJS
├── SQL
├── HTML email
├── CloudPages
│
├── REST/SOAP helper scripts
│
└── Amp CLI
     │
     ├── AGENTS.md guardrails
     ├── code review
     ├── refactoring
     ├── documentation
     └── optional MCE MCP
         └── begin read-only
```

The most productive mindset is:

```text
Do not treat SFMC as a browser-only platform.

Treat SFMC assets as software:

source control them,
review them,
test them,
deploy them deliberately,
document them,
secure them,
and automate repetitive work safely.
```

---

# Appendix A — Recommended First Repository Files

Create these first:

```text
README.md
AGENTS.md
.gitignore
.editorconfig
.vscode/settings.json
.vscode/extensions.json
docs/architecture.md
docs/data-model.md
docs/deployments.md
```

Then add:

```text
src/ampscript/
src/ssjs/
src/sql/
src/email/
src/cloudpages/
```

Then initialize your approved SFMC deployment/retrieval tooling.

---

# Appendix B — SFMC Incident Prevention Rules

Memorize these:

1. **Confirm the Business Unit before every write/deploy.**
2. **Retrieve before editing.**
3. **Review `git diff` before deployment.**
4. **Never commit SFMC secrets.**
5. **Do not use production PII as local test data.**
6. **Use least-privilege Installed Packages.**
7. **Keep email-render-time logic lightweight.**
8. **Assume CloudPage input is hostile until validated.**
9. **Never assume an AI-generated SFMC function exists—verify it.**
10. **Give AI agents read-only access first.**
11. **Use dry-run/planning before MCP write operations.**
12. **Test shared Content Builder changes against multiple consumers.**
13. **Know the rollback before production deployment.**
14. **Do not confuse Amp AI with AMPscript.**
15. **Document automation and journey dependencies.**

---

# Appendix C — Example SFMC Task Workflow with Amp

Suppose the requirement is:

> Add a loyalty coupon to the Welcome email.

Recommended workflow:

```text
1. Retrieve the current Welcome email/content blocks.
2. Create branch:
   feature/welcome-loyalty-coupon

3. Search repository for:
   Welcome email
   Loyalty_Profile DE
   coupon content block

4. Ask Amp:
   "Read AGENTS.md. Review the relevant files only.
    Explain the safest implementation. Do not edit."

5. Confirm the data contract:
   SubscriberKey
   LoyaltyTier
   CouponCode

6. Implement defensive AMPscript.

7. Ask Amp:
   "Review the change for missing rows, empty fields,
    invalid AMPscript, and send-time performance."

8. Review:
   git diff

9. Test:
   Gold
   Silver
   Standard
   no row
   blank tier
   invalid coupon

10. Deploy to a non-production BU.

11. Preview/test send.

12. Peer review.

13. Prepare minimal production package.

14. Confirm production BU.

15. Deploy.

16. Smoke test.

17. Tag/release note.
```

This is significantly safer than asking an AI tool:

```text
"Connect to production and add loyalty logic everywhere."
```

---

# Appendix D — What to Learn Next

After mastering this handbook, continue with:

```text
Advanced AMPscript function families
Advanced WSProxy
SFMC REST asset API
Transactional Messaging API
Journey Builder custom activities
Custom Journey events
Data Views reporting
Enterprise/shared Data Extensions
Contact deletion/data retention
Sender Authentication
Deliverability
Email accessibility
CI/CD for mcdev
MCE MCP tool coverage
API observability
SFMC architecture governance
```

---

**End of handbook**
