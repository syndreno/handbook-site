# HTML Mastery Handbook
## Beginner to Advanced — A Single Master File for Learning HTML Properly

> **Goal:** This handbook is designed to be a complete HTML learning reference. A beginner should be able to start from zero, while an experienced developer can use it as a revision and best-practices guide.

---

# Table of Contents

1. [What is HTML?](#1-what-is-html)
2. [How the Web Works](#2-how-the-web-works)
3. [HTML Document Structure](#3-html-document-structure)
4. [HTML Syntax Rules](#4-html-syntax-rules)
5. [Elements, Tags, Attributes, and Values](#5-elements-tags-attributes-and-values)
6. [Text Content](#6-text-content)
7. [Headings and Document Outline](#7-headings-and-document-outline)
8. [Links and Navigation](#8-links-and-navigation)
9. [Images](#9-images)
10. [Lists](#10-lists)
11. [Semantic HTML](#11-semantic-html)
12. [Generic Containers: div and span](#12-generic-containers-div-and-span)
13. [Tables](#13-tables)
14. [Forms](#14-forms)
15. [HTML Form Validation](#15-html-form-validation)
16. [Audio, Video, and Embedded Content](#16-audio-video-and-embedded-content)
17. [The HTML Head](#17-the-html-head)
18. [Metadata and SEO](#18-metadata-and-seo)
19. [Accessibility](#19-accessibility)
20. [Responsive HTML Patterns](#20-responsive-html-patterns)
21. [HTML Entities and Special Characters](#21-html-entities-and-special-characters)
22. [Global Attributes](#22-global-attributes)
23. [Data Attributes](#23-data-attributes)
24. [Interactive HTML Elements](#24-interactive-html-elements)
25. [Useful Native HTML Features](#25-useful-native-html-features)
26. [HTML and CSS Integration](#26-html-and-css-integration)
27. [HTML and JavaScript Integration](#27-html-and-javascript-integration)
28. [HTML Performance Best Practices](#28-html-performance-best-practices)
29. [HTML Security Best Practices](#29-html-security-best-practices)
30. [SEO-Friendly HTML Patterns](#30-seo-friendly-html-patterns)
31. [Common HTML Layout Patterns](#31-common-html-layout-patterns)
32. [Common HTML Anti-Patterns](#32-common-html-anti-patterns)
33. [HTML Validation and Debugging](#33-html-validation-and-debugging)
34. [Naming and Code Organization](#34-naming-and-code-organization)
35. [Progressive Enhancement](#35-progressive-enhancement)
36. [Real-World Page Architecture](#36-real-world-page-architecture)
37. [Practical Mini Projects](#37-practical-mini-projects)
38. [HTML Interview Questions](#38-html-interview-questions)
39. [HTML Cheat Sheet](#39-html-cheat-sheet)
40. [Learning Roadmap](#40-learning-roadmap)
41. [Final Best-Practice Checklist](#41-final-best-practice-checklist)

---

# 1. What is HTML?

HTML stands for **HyperText Markup Language**.

It is the standard markup language used to describe the **structure and meaning of web content**.

HTML is not primarily responsible for:

- visual styling — CSS handles that;
- application logic — JavaScript handles that;
- database operations — backend technologies handle that.

HTML describes **what content is**.

For example:

```html
<h1>Invoice Management System</h1>
<p>Upload your invoice to begin processing.</p>
<button>Upload Invoice</button>
```

The browser understands:

- `h1` = primary heading,
- `p` = paragraph,
- `button` = interactive button.

## HTML vs CSS vs JavaScript

Think about a house:

| Technology | Responsibility | House analogy |
|---|---|---|
| HTML | Structure and meaning | Walls, rooms, doors |
| CSS | Appearance | Paint, furniture, decoration |
| JavaScript | Behavior | Lights, automatic doors, appliances |

Example:

```html
<button id="saveButton">Save</button>
```

HTML creates the button.

```css
button {
  background: navy;
  color: white;
}
```

CSS styles it.

```javascript
document.querySelector("#saveButton").addEventListener("click", () => {
  alert("Saved");
});
```

JavaScript gives it behavior.

---

# 2. How the Web Works

Before mastering HTML, understand the basic request flow.

When you open:

```text
https://example.com/products
```

the browser usually performs something similar to:

```text
Browser
   ↓
DNS lookup
   ↓
Server request
   ↓
HTTP response
   ↓
HTML downloaded
   ↓
Browser parses HTML
   ↓
DOM created
   ↓
CSS applied
   ↓
JavaScript executed
   ↓
Page rendered
```

## What is the DOM?

DOM means **Document Object Model**.

Given:

```html
<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>
```

the browser creates a tree approximately like:

```text
body
├── h1
│   └── "Hello"
└── p
    └── "Welcome"
```

JavaScript can then read or modify this tree.

---

# 3. HTML Document Structure

A modern HTML document normally starts like this:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Website</title>
</head>
<body>

  <h1>Hello World</h1>

</body>
</html>
```

## `<!doctype html>`

```html
<!doctype html>
```

Tells the browser to render the page using modern HTML standards.

Always include it.

---

## `<html>`

```html
<html lang="en">
```

The root element of the document.

`lang="en"` tells browsers, search engines, translation tools, and assistive technologies that the page content is mainly English.

Examples:

```html
<html lang="en">
<html lang="hi">
<html lang="fr">
```

---

## `<head>`

Contains information **about the page**, rather than the main visible page content.

Typical items include:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dashboard</title>
  <meta name="description" content="Invoice processing dashboard">
  <link rel="stylesheet" href="styles.css">
</head>
```

---

## `<body>`

Contains the visible document content.

```html
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
```

---

# 4. HTML Syntax Rules

## Basic element

```html
<p>Hello World</p>
```

Components:

```text
<p>             opening tag
Hello World     content
</p>            closing tag
```

---

## Nested elements

```html
<p>
  Welcome to <strong>HTML Mastery</strong>.
</p>
```

Correct nesting:

```html
<strong><em>Important</em></strong>
```

Avoid incorrectly crossing tags:

```html
<strong><em>Wrong</strong></em>
```

---

## Void elements

Some elements do not have closing tags.

Examples:

```html
<img src="logo.png" alt="Company logo">
<input type="text">
<br>
<hr>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css">
```

Do not write:

```html
</img>
</input>
```

---

## Quotes around attributes

Recommended:

```html
<input type="text" name="username">
```

Avoid inconsistent markup:

```html
<input type=text name=username>
```

Although browsers may accept some unquoted values, quoted values are clearer and safer.

---

## Lowercase convention

Recommended:

```html
<section>
  <h2>Products</h2>
</section>
```

Avoid:

```html
<SECTION>
```

HTML is forgiving, but lowercase markup is the standard development convention.

---

# 5. Elements, Tags, Attributes, and Values

Example:

```html
<a href="/products" target="_blank">Products</a>
```

Here:

| Part | Meaning |
|---|---|
| `a` | Element/tag name |
| `href` | Attribute |
| `/products` | Attribute value |
| `target` | Attribute |
| `_blank` | Attribute value |
| `Products` | Content |

---

## Boolean attributes

Some attributes are enabled simply by existing.

```html
<input disabled>
<input required>
<input checked>
<details open>
```

Do not think of them as normal string values.

---

# 6. Text Content

## Paragraph

```html
<p>This is a paragraph.</p>
```

Use `<p>` for real paragraphs.

Do not use multiple `<br>` elements to simulate paragraphs.

Bad:

```html
Hello<br><br>
Welcome to our website.<br><br>
Thank you.
```

Better:

```html
<p>Hello.</p>
<p>Welcome to our website.</p>
<p>Thank you.</p>
```

---

## Strong importance

```html
<strong>Payment is overdue.</strong>
```

`strong` expresses importance.

---

## Emphasis

```html
<em>Please read this carefully.</em>
```

`em` expresses emphasis.

---

## Bold without importance

```html
<b>Product Code:</b>
```

Use when bold styling or attention is desired but the text does not carry stronger semantic importance.

---

## Italic alternative voice

```html
<i>Homo sapiens</i>
```

Often useful for terms, foreign phrases, taxonomic names, or alternative voice.

---

## Marked/highlighted content

```html
<p>Search result: <mark>invoice number</mark></p>
```

---

## Small print

```html
<small>Terms and conditions apply.</small>
```

Good use cases:

- copyright;
- legal disclaimer;
- secondary fine print.

---

## Deleted and inserted text

```html
<p>
  Price:
  <del>₹1,500</del>
  <ins>₹1,200</ins>
</p>
```

---

## Superscript

```html
<p>10<sup>2</sup> = 100</p>
```

---

## Subscript

```html
<p>H<sub>2</sub>O</p>
```

---

## Code

```html
<code>npm install</code>
```

---

## Preformatted block

```html
<pre><code>
function hello() {
  console.log("Hello");
}
</code></pre>
```

`pre` preserves whitespace.

---

## Quotes

Inline quotation:

```html
<p>He said <q>HTML is structural.</q></p>
```

Block quotation:

```html
<blockquote>
  Semantic HTML improves accessibility and maintainability.
</blockquote>
```

---

## Abbreviation

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

---

## Address

```html
<address>
  Contact: support@example.com
</address>
```

`address` is intended for contact information related to an article or page author/owner.

---

## Time

```html
<time datetime="2026-08-12">12 August 2026</time>
```

Useful because machines can understand the date.

---

# 7. Headings and Document Outline

HTML provides six heading levels:

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

## Example hierarchy

```html
<h1>Invoice Processing Guide</h1>

<h2>PO Invoices</h2>

<h3>Upload Invoice</h3>
<h3>Validate Purchase Order</h3>

<h2>Non-PO Invoices</h2>

<h3>Approval Workflow</h3>
```

Think of headings like a book outline.

```text
H1 Book title
├── H2 Chapter
│   ├── H3 Section
│   └── H3 Section
└── H2 Chapter
```

## Best practice

Usually use one clear primary `h1` for the page topic.

Do not choose headings based on their default visual size.

Bad:

```html
<h4>Main page heading</h4>
```

because you wanted small text.

Better:

```html
<h1 class="small-heading">Main page heading</h1>
```

and style it with CSS.

---

# 8. Links and Navigation

Basic link:

```html
<a href="https://example.com">Visit Example</a>
```

---

## Relative URL

```html
<a href="/products">Products</a>
```

Useful inside the same website.

---

## Absolute URL

```html
<a href="https://example.com/products">Products</a>
```

---

## Page anchor

```html
<a href="#pricing">Go to Pricing</a>

<section id="pricing">
  <h2>Pricing</h2>
</section>
```

---

## Email link

```html
<a href="mailto:support@example.com">Email Support</a>
```

---

## Phone link

```html
<a href="tel:+912212345678">Call Us</a>
```

---

## Download link

```html
<a href="/files/report.pdf" download>Download Report</a>
```

---

## Open in a new tab

```html
<a
  href="https://external.example"
  target="_blank"
  rel="noopener noreferrer"
>
  External Website
</a>
```

`rel="noopener"` helps prevent the newly opened page from controlling the original tab.

---

## Good link text

Bad:

```html
<a href="/policy">Click here</a>
```

Better:

```html
<a href="/policy">Read the privacy policy</a>
```

Descriptive links improve usability, accessibility, and search understanding.

---

## Navigation

```html
<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

---

# 9. Images

Basic image:

```html
<img src="invoice.png" alt="Sample invoice showing invoice number and total">
```

Important attributes:

| Attribute | Purpose |
|---|---|
| `src` | Image location |
| `alt` | Text alternative |
| `width` | Intrinsic/display width hint |
| `height` | Intrinsic/display height hint |
| `loading` | Loading behavior |

---

## Meaningful image

```html
<img
  src="warning-icon.png"
  alt="Warning"
  width="24"
  height="24"
>
```

---

## Decorative image

If an image adds no meaningful information:

```html
<img src="decorative-wave.svg" alt="">
```

An empty `alt` helps assistive technologies ignore it.

---

## Figure with caption

```html
<figure>
  <img
    src="dashboard.png"
    alt="Invoice dashboard showing pending and approved invoices"
  >
  <figcaption>
    Invoice dashboard overview.
  </figcaption>
</figure>
```

---

## Lazy loading

```html
<img
  src="product.jpg"
  alt="Blue office chair"
  loading="lazy"
>
```

Useful for images further down the page.

Do not automatically lazy-load the main hero/LCP image.

---

## Width and height

```html
<img
  src="photo.jpg"
  alt="Office building"
  width="800"
  height="600"
>
```

Providing dimensions helps browsers reserve space and reduces layout shifts.

---

## Responsive images with `srcset`

```html
<img
  src="product-800.jpg"
  srcset="
    product-400.jpg 400w,
    product-800.jpg 800w,
    product-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 100vw, 800px"
  alt="Laptop on a desk"
>
```

The browser can choose an appropriate file size.

---

## `<picture>`

Useful for art direction or alternate formats.

```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Team working in an office">
</picture>
```

Art direction example:

```html
<picture>
  <source
    media="(max-width: 600px)"
    srcset="hero-mobile.jpg"
  >
  <img
    src="hero-desktop.jpg"
    alt="Developers discussing an application architecture"
  >
</picture>
```

---

# 10. Lists

## Unordered list

Use when order does not matter.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

---

## Ordered list

Use when order matters.

```html
<ol>
  <li>Upload invoice</li>
  <li>Run OCR</li>
  <li>Validate fields</li>
  <li>Submit for approval</li>
</ol>
```

---

## Nested list

```html
<ul>
  <li>
    Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

---

## Description list

Useful for terms and definitions.

```html
<dl>
  <dt>GRN</dt>
  <dd>Goods Receipt Note.</dd>

  <dt>OCR</dt>
  <dd>Optical Character Recognition.</dd>
</dl>
```

Also useful for key-value metadata.

```html
<dl>
  <dt>Invoice Number</dt>
  <dd>INV-2026-0042</dd>

  <dt>Vendor</dt>
  <dd>ABC Technologies</dd>
</dl>
```

---

# 11. Semantic HTML

Semantic HTML means using elements based on the **meaning of the content**, not just appearance.

Common structural semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

---

## `<header>`

Represents introductory content.

```html
<header>
  <h1>Finance Portal</h1>
  <nav>...</nav>
</header>
```

A page can contain more than one `header`, for example inside an `article`.

---

## `<nav>`

Represents major navigation.

```html
<nav aria-label="Primary navigation">
  ...
</nav>
```

Not every group of links must be a `nav`.

---

## `<main>`

Represents the primary content.

```html
<main>
  <h1>Invoice Details</h1>
</main>
```

Usually one main content area is sufficient.

---

## `<section>`

Represents a thematic section of a document.

```html
<section>
  <h2>Payment Details</h2>
  <p>...</p>
</section>
```

A useful rule:

> If you cannot describe the section with a meaningful heading, a `div` may be more appropriate.

---

## `<article>`

Represents self-contained or independently reusable content.

Examples:

- blog post;
- forum post;
- news story;
- product review;
- knowledge-base article.

```html
<article>
  <h2>How OCR Invoice Matching Works</h2>
  <p>...</p>
</article>
```

---

## `<aside>`

Related but secondary content.

```html
<aside>
  <h2>Related Articles</h2>
</aside>
```

---

## `<footer>`

Represents closing or footer information.

```html
<footer>
  <p>&copy; 2026 Example Company</p>
</footer>
```

---

## Semantic page example

```html
<body>

  <header>
    <h1>Developer Portal</h1>

    <nav aria-label="Primary">
      <a href="/">Home</a>
      <a href="/docs">Documentation</a>
    </nav>
  </header>

  <main>

    <article>
      <header>
        <h2>HTML Semantic Elements</h2>
        <p>
          Published
          <time datetime="2026-08-12">12 August 2026</time>
        </p>
      </header>

      <section>
        <h3>Why semantics matter</h3>
        <p>...</p>
      </section>
    </article>

    <aside>
      <h2>Related Topics</h2>
      ...
    </aside>

  </main>

  <footer>
    <p>Copyright Example</p>
  </footer>

</body>
```

---

# 12. Generic Containers: div and span

## `<div>`

A generic block container.

```html
<div class="card">
  ...
</div>
```

Use it when no more meaningful semantic element exists.

---

## `<span>`

A generic inline container.

```html
<p>
  Status:
  <span class="status status-approved">Approved</span>
</p>
```

---

## Avoid "div soup"

Bad:

```html
<div class="header">
  <div class="navigation">
    ...
  </div>
</div>

<div class="main">
  <div class="section">
    ...
  </div>
</div>
```

Better:

```html
<header>
  <nav>...</nav>
</header>

<main>
  <section>...</section>
</main>
```

---

# 13. Tables

Tables should be used for **tabular data**.

Do not use tables for page layout.

Basic table:

```html
<table>
  <thead>
    <tr>
      <th>Invoice</th>
      <th>Vendor</th>
      <th>Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>INV-001</td>
      <td>ABC Ltd</td>
      <td>₹10,000</td>
    </tr>
  </tbody>
</table>
```

---

## Table structure

| Element | Meaning |
|---|---|
| `table` | Table |
| `caption` | Table title |
| `thead` | Header group |
| `tbody` | Main rows |
| `tfoot` | Footer/summary rows |
| `tr` | Row |
| `th` | Header cell |
| `td` | Data cell |

---

## Caption

```html
<table>
  <caption>August Invoice Summary</caption>
  ...
</table>
```

---

## Header scope

```html
<th scope="col">Vendor</th>
```

For row headers:

```html
<th scope="row">INV-1001</th>
```

This improves table accessibility.

---

## Colspan

```html
<td colspan="3">No invoices found.</td>
```

---

## Rowspan

```html
<td rowspan="2">Mumbai Office</td>
```

Use spanning only when it genuinely represents the data relationship. Complex spanning can make tables harder to understand.

---

## Accessible table example

```html
<table>
  <caption>Invoice approval summary</caption>

  <thead>
    <tr>
      <th scope="col">Invoice</th>
      <th scope="col">Vendor</th>
      <th scope="col">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">INV-101</th>
      <td>ABC Pvt Ltd</td>
      <td>Approved</td>
    </tr>

    <tr>
      <th scope="row">INV-102</th>
      <td>XYZ Ltd</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>
```

---

# 14. Forms

Forms collect user input.

Basic form:

```html
<form action="/submit" method="post">

  <label for="name">Name</label>
  <input id="name" name="name" type="text">

  <button type="submit">Submit</button>

</form>
```

---

## Important form concepts

### `action`

Where the form sends data.

```html
<form action="/login">
```

### `method`

Typical values:

```html
method="get"
method="post"
```

---

## GET

Example:

```html
<form action="/search" method="get">
  <input name="q">
  <button type="submit">Search</button>
</form>
```

Could produce:

```text
/search?q=html
```

Good for:

- search;
- filters;
- public query parameters;
- shareable URLs.

Do not use GET for secrets such as passwords.

---

## POST

```html
<form action="/users" method="post">
```

Common for:

- login;
- registration;
- creating records;
- submitting private form data;
- file uploads.

Note: POST by itself does not encrypt data. HTTPS provides transport encryption.

---

## Labels

Always associate inputs with labels.

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email">
```

The `for` value must match the input `id`.

---

## Text input

```html
<input type="text" name="fullName">
```

---

## Email

```html
<input type="email" name="email">
```

---

## Password

```html
<input type="password" name="password">
```

---

## Number

```html
<input
  type="number"
  name="quantity"
  min="1"
  max="100"
>
```

Do not use `type="number"` for values that merely contain digits but are not mathematically numbers.

Bad candidates:

- phone numbers;
- postal codes;
- employee IDs;
- account numbers.

Use text or telephone input instead when appropriate.

---

## Telephone

```html
<input type="tel" name="phone">
```

---

## URL

```html
<input type="url" name="website">
```

---

## Date

```html
<input type="date" name="invoiceDate">
```

---

## Time

```html
<input type="time" name="meetingTime">
```

---

## Datetime local

```html
<input type="datetime-local" name="appointment">
```

---

## Month

```html
<input type="month" name="billingMonth">
```

---

## Checkbox

```html
<label>
  <input type="checkbox" name="terms" required>
  I accept the terms.
</label>
```

Multiple checkbox example:

```html
<fieldset>
  <legend>Select technologies</legend>

  <label>
    <input type="checkbox" name="skills" value="html">
    HTML
  </label>

  <label>
    <input type="checkbox" name="skills" value="css">
    CSS
  </label>
</fieldset>
```

---

## Radio buttons

Use when the user should choose one option from a group.

```html
<fieldset>
  <legend>Payment method</legend>

  <label>
    <input
      type="radio"
      name="payment"
      value="card"
      checked
    >
    Card
  </label>

  <label>
    <input
      type="radio"
      name="payment"
      value="upi"
    >
    UPI
  </label>
</fieldset>
```

Radio buttons belong to the same group when they share the same `name`.

---

## Select dropdown

```html
<label for="country">Country</label>

<select id="country" name="country">
  <option value="">Select country</option>
  <option value="in">India</option>
  <option value="us">United States</option>
</select>
```

---

## Option groups

```html
<select name="technology">
  <optgroup label="Frontend">
    <option>HTML</option>
    <option>CSS</option>
  </optgroup>

  <optgroup label="Backend">
    <option>PHP</option>
    <option>Python</option>
  </optgroup>
</select>
```

---

## Textarea

```html
<label for="comments">Comments</label>

<textarea
  id="comments"
  name="comments"
  rows="5"
></textarea>
```

---

## File upload

```html
<form
  action="/upload"
  method="post"
  enctype="multipart/form-data"
>
  <label for="invoice">Upload invoice</label>

  <input
    id="invoice"
    name="invoice"
    type="file"
    accept=".pdf,image/*"
  >

  <button type="submit">Upload</button>
</form>
```

For file uploads, `multipart/form-data` is important.

---

## Multiple file upload

```html
<input type="file" name="documents" multiple>
```

---

## Hidden input

```html
<input type="hidden" name="invoiceId" value="12345">
```

Never treat hidden inputs as secure.

Users can modify HTML and form submissions.

Validate everything on the server.

---

## Fieldset and legend

```html
<fieldset>
  <legend>Billing Address</legend>

  ...
</fieldset>
```

Very useful for grouping related fields.

---

## Button types

Submit:

```html
<button type="submit">Save</button>
```

Normal JavaScript/UI button:

```html
<button type="button">Open Preview</button>
```

Reset:

```html
<button type="reset">Reset</button>
```

Be careful with reset buttons because users can accidentally lose entered data.

---

## Why explicitly specify `type`?

Inside forms, a button without a type may behave as a submit button.

Therefore:

```html
<button type="button">Open Dialog</button>
```

is safer for non-submit actions.

---

## Autocomplete

```html
<input
  type="email"
  name="email"
  autocomplete="email"
>
```

Login example:

```html
<input
  type="text"
  name="username"
  autocomplete="username"
>

<input
  type="password"
  name="password"
  autocomplete="current-password"
>
```

Registration password:

```html
<input
  type="password"
  autocomplete="new-password"
>
```

---

# 15. HTML Form Validation

HTML provides built-in client-side validation.

## Required

```html
<input type="email" required>
```

---

## Minimum length

```html
<input type="text" minlength="3">
```

---

## Maximum length

```html
<input type="text" maxlength="50">
```

---

## Numeric range

```html
<input type="number" min="1" max="10">
```

---

## Step

```html
<input type="number" min="0" step="0.01">
```

Useful for decimal amounts.

---

## Pattern

```html
<input
  type="text"
  pattern="[A-Z]{3}[0-9]{4}"
  title="Format: ABC1234"
>
```

This can validate simple formats.

Do not rely only on client-side HTML validation.

Server-side validation is always required.

---

## Scenario: invoice number

```html
<label for="invoiceNo">Invoice Number</label>

<input
  id="invoiceNo"
  name="invoiceNo"
  type="text"
  required
  minlength="3"
  maxlength="50"
>
```

---

## Scenario: amount

```html
<label for="amount">Invoice Amount</label>

<input
  id="amount"
  name="amount"
  type="number"
  min="0"
  step="0.01"
  required
>
```

---

## Client-side validation is UX, not security

A user can bypass browser validation by:

- disabling JavaScript;
- editing HTML in DevTools;
- calling the API directly;
- sending requests through tools such as curl/Postman.

Therefore:

```text
Browser validation
        +
Server validation
        =
Correct approach
```

---

# 16. Audio, Video, and Embedded Content

## Audio

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  Your browser does not support audio playback.
</audio>
```

---

## Video

```html
<video controls width="720">
  <source src="tutorial.mp4" type="video/mp4">

  <track
    kind="captions"
    src="captions-en.vtt"
    srclang="en"
    label="English"
  >

  Your browser does not support video playback.
</video>
```

Captions improve accessibility.

---

## Poster image

```html
<video
  controls
  poster="thumbnail.jpg"
>
  <source src="course.mp4" type="video/mp4">
</video>
```

---

## iframe

```html
<iframe
  src="https://example.com"
  title="Example embedded content"
></iframe>
```

Always provide a meaningful `title` for embedded frames.

---

## YouTube example

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="HTML tutorial video"
  allowfullscreen
></iframe>
```

---

## iframe security

For untrusted or partially trusted embedded content, consider `sandbox`.

```html
<iframe
  src="https://example.com/widget"
  sandbox
  title="External widget"
></iframe>
```

You can selectively grant permissions, but only grant what is necessary.

---

# 17. The HTML Head

Typical production document:

```html
<head>

  <meta charset="utf-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>Invoice Management Dashboard</title>

  <meta
    name="description"
    content="Review and process invoices from a central dashboard."
  >

  <link rel="icon" href="/favicon.ico">

  <link
    rel="stylesheet"
    href="/assets/app.css"
  >

  <script
    src="/assets/app.js"
    defer
  ></script>

</head>
```

---

## Character encoding

```html
<meta charset="utf-8">
```

UTF-8 supports a very large range of characters.

Put charset declaration near the beginning of `<head>`.

---

## Viewport

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1"
>
```

This is essential for responsive mobile pages.

---

## Title

```html
<title>HTML Mastery Handbook</title>
```

The title can appear in:

- browser tabs;
- bookmarks;
- search results;
- history.

---

## Description

```html
<meta
  name="description"
  content="Learn HTML from beginner to advanced with practical examples."
>
```

Search engines may use it as a result snippet.

---

# 18. Metadata and SEO

## Canonical URL

```html
<link
  rel="canonical"
  href="https://example.com/html-guide"
>
```

Useful when similar content is available through multiple URLs.

---

## Robots

```html
<meta name="robots" content="index,follow">
```

To request that a page not be indexed:

```html
<meta name="robots" content="noindex,nofollow">
```

Search engine behavior should still be managed thoughtfully at the site level.

---

## Open Graph

Used by many social platforms when a page is shared.

```html
<meta property="og:title" content="HTML Mastery Handbook">
<meta property="og:description" content="Complete HTML guide">
<meta property="og:image" content="https://example.com/preview.jpg">
<meta property="og:url" content="https://example.com/html-guide">
<meta property="og:type" content="article">
```

---

## Structured data

Search engines can understand structured information through JSON-LD.

Example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HTML Mastery Handbook"
}
</script>
```

Use structured data only when it accurately represents visible content.

---

# 19. Accessibility

Accessibility means making content usable for people with different abilities and assistive technologies.

Good accessibility benefits everyone.

---

## Principle 1: Use native elements

Bad:

```html
<div onclick="save()">Save</div>
```

Better:

```html
<button type="button">Save</button>
```

A native button already provides:

- keyboard focus;
- keyboard activation;
- accessible semantics;
- expected browser behavior.

---

## Principle 2: Meaningful page language

```html
<html lang="en">
```

For a foreign phrase:

```html
<p>
  The French term
  <span lang="fr">bonjour</span>
  means hello.
</p>
```

---

## Principle 3: Labels for form controls

Bad:

```html
<input placeholder="Email">
```

Better:

```html
<label for="email">Email</label>
<input id="email" type="email" placeholder="name@example.com">
```

A placeholder is not a replacement for a label.

---

## Principle 4: Image alternatives

```html
<img
  src="chart.png"
  alt="Revenue increased from ₹2M in January to ₹3M in March"
>
```

Write the alternative based on the information the image communicates.

---

## Principle 5: Keyboard support

Users should be able to:

- navigate links;
- activate buttons;
- fill forms;
- use dialogs;
- operate controls;

without a mouse.

Native HTML elements make this much easier.

---

## Principle 6: Logical heading structure

Bad:

```html
<h1>Dashboard</h1>
<h4>Invoices</h4>
<h2>Pending</h2>
```

Better:

```html
<h1>Dashboard</h1>
<h2>Invoices</h2>
<h3>Pending</h3>
```

---

## Principle 7: Landmark elements

```html
<header>
<nav>
<main>
<aside>
<footer>
```

These help users navigate large documents.

---

## Skip link

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<header>...</header>

<main id="main-content">
  ...
</main>
```

Very useful for keyboard and screen-reader users.

---

## ARIA rule

A critical accessibility principle:

> Prefer correct native HTML before adding ARIA.

Bad:

```html
<div role="button" tabindex="0">Save</div>
```

Better:

```html
<button type="button">Save</button>
```

Use ARIA when native HTML cannot express the required semantics.

---

## `aria-label`

```html
<button aria-label="Close dialog">
  ×
</button>
```

Useful when the visual content alone does not provide an accessible name.

---

## `aria-describedby`

```html
<label for="password">Password</label>

<input
  id="password"
  type="password"
  aria-describedby="password-help"
>

<p id="password-help">
  Use at least 12 characters.
</p>
```

---

# 20. Responsive HTML Patterns

Responsive behavior is mostly controlled by CSS, but HTML strongly affects responsive content.

---

## Correct viewport

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1"
>
```

---

## Responsive image

```html
<img
  src="product.jpg"
  alt="Product image"
  style="max-width: 100%; height: auto;"
>
```

Normally this styling belongs in CSS rather than inline styles.

---

## Responsive `<picture>`

```html
<picture>
  <source
    media="(max-width: 768px)"
    srcset="banner-mobile.jpg"
  >
  <img
    src="banner-desktop.jpg"
    alt="Summer product promotion"
  >
</picture>
```

---

## Responsive table concept

A wide data table may need an overflow wrapper:

```html
<div class="table-scroll" tabindex="0">
  <table>
    ...
  </table>
</div>
```

CSS:

```css
.table-scroll {
  overflow-x: auto;
}
```

---

# 21. HTML Entities and Special Characters

Some characters have special meaning in HTML.

Examples:

| Character | Entity |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| non-breaking space | `&nbsp;` |
| copyright | `&copy;` |

Example:

```html
<p>5 &lt; 10</p>
```

Displays:

```text
5 < 10
```

---

## Why escaping matters

Suppose you want to display code:

```html
<p>&lt;h1&gt;Hello&lt;/h1&gt;</p>
```

Without escaping, the browser would treat it as markup rather than text.

---

# 22. Global Attributes

Global attributes can be used on many HTML elements.

---

## `id`

```html
<section id="payment-details">
```

IDs should be unique within the page.

Common uses:

- fragment links;
- labels;
- JavaScript selection;
- accessibility references.

---

## `class`

```html
<div class="card card-featured">
```

Multiple elements may share the same class.

---

## `title`

```html
<abbr title="Application Programming Interface">
  API
</abbr>
```

Do not rely on `title` alone for important information because its behavior is inconsistent across touch devices and assistive technologies.

---

## `hidden`

```html
<div hidden>
  Secret until enabled
</div>
```

The element is not normally presented.

---

## `tabindex`

```html
<div tabindex="0">
```

Use carefully.

Avoid positive values such as:

```html
tabindex="5"
```

because they can create confusing focus order.

Prefer natural document order.

---

## `contenteditable`

```html
<div contenteditable="true">
  Edit this content.
</div>
```

Useful for rich text editors, but production use requires careful handling of:

- sanitization;
- keyboard behavior;
- selection;
- accessibility;
- pasted HTML.

---

## `draggable`

```html
<div draggable="true">
  Drag me
</div>
```

JavaScript is normally required to implement meaningful drag/drop behavior.

---

# 23. Data Attributes

Custom data can be stored with `data-*`.

```html
<button
  data-invoice-id="INV-1001"
  data-status="pending"
>
  Review
</button>
```

JavaScript:

```javascript
const button = document.querySelector("button");

console.log(button.dataset.invoiceId);
console.log(button.dataset.status);
```

Output:

```text
INV-1001
pending
```

Good for lightweight UI metadata.

Do not store secrets in HTML attributes.

Anything rendered in the page can be inspected by the user.

---

# 24. Interactive HTML Elements

Modern HTML includes useful native interactive components.

---

## Details and summary

```html
<details>
  <summary>View invoice details</summary>

  <p>Invoice: INV-1001</p>
  <p>Total: ₹25,000</p>
</details>
```

Useful for:

- FAQ;
- expandable documentation;
- advanced settings;
- disclosure panels.

---

## Dialog

```html
<dialog id="confirmDialog">
  <h2>Confirm deletion</h2>
  <p>This action cannot be undone.</p>

  <button type="button">Cancel</button>
  <button type="button">Delete</button>
</dialog>
```

JavaScript:

```javascript
const dialog = document.querySelector("#confirmDialog");

dialog.showModal();
```

To close:

```javascript
dialog.close();
```

Native dialog handling can provide useful modal behavior, but you still need to design proper actions and accessible labels/content.

---

## Progress

```html
<label for="uploadProgress">
  Upload progress
</label>

<progress
  id="uploadProgress"
  max="100"
  value="65"
>
  65%
</progress>
```

Good for a known measurable progress value.

---

## Meter

```html
<label for="storage">Storage usage</label>

<meter
  id="storage"
  min="0"
  max="100"
  low="60"
  high="85"
  optimum="30"
  value="72"
>
  72%
</meter>
```

`meter` represents a scalar measurement within a known range.

Examples:

- disk usage;
- score;
- battery-like measurement;
- confidence score.

It is not the same as progress.

---

# 25. Useful Native HTML Features

## Datalist

Provides suggestions for an input.

```html
<label for="browser">Browser</label>

<input
  id="browser"
  name="browser"
  list="browser-list"
>

<datalist id="browser-list">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
  <option value="Safari">
</datalist>
```

Unlike a strict `select`, the user may still type another value.

---

## Output

```html
<form oninput="result.value = Number(a.value) + Number(b.value)">
  <input id="a" type="number" value="0">
  +
  <input id="b" type="number" value="0">
  =
  <output name="result">0</output>
</form>
```

---

## Template

```html
<template id="invoice-row-template">
  <tr>
    <td class="invoice-number"></td>
    <td class="vendor"></td>
  </tr>
</template>
```

Content inside a template is not normally rendered until JavaScript clones it.

---

## Noscript

```html
<noscript>
  This application requires JavaScript.
</noscript>
```

Prefer progressive enhancement when the site can provide useful functionality without JavaScript.

---

# 26. HTML and CSS Integration

## External stylesheet

```html
<link rel="stylesheet" href="/styles/main.css">
```

Recommended for most application styling.

---

## Internal CSS

```html
<style>
  body {
    font-family: sans-serif;
  }
</style>
```

Useful for small examples, prototypes, or specially scoped pages.

---

## Inline CSS

```html
<p style="color: red;">Warning</p>
```

Normally avoid inline CSS in maintainable applications because it mixes structure and presentation.

---

## Class-based styling

HTML:

```html
<button class="button button-primary">
  Save
</button>
```

CSS:

```css
.button {
  padding: 0.75rem 1rem;
}

.button-primary {
  font-weight: 700;
}
```

---

# 27. HTML and JavaScript Integration

## External script

```html
<script src="/js/app.js"></script>
```

If placed in the document head, use `defer` in many normal cases:

```html
<script src="/js/app.js" defer></script>
```

---

## `defer`

```html
<script src="app.js" defer></script>
```

Typically:

- downloads without blocking HTML parsing;
- executes after document parsing;
- preserves script execution order.

---

## `async`

```html
<script src="analytics.js" async></script>
```

Generally useful for independent scripts that do not depend on DOM readiness or other scripts.

Execution order is not guaranteed relative to other async scripts.

---

## ES modules

```html
<script type="module" src="/js/app.js"></script>
```

Modules support:

```javascript
import { calculateTax } from "./tax.js";
```

Module scripts are deferred by default.

---

## Event handlers

Avoid mixing JavaScript into markup when maintainability matters.

Avoid:

```html
<button onclick="saveInvoice()">
  Save
</button>
```

Prefer:

```html
<button id="saveInvoice" type="button">
  Save
</button>
```

JavaScript:

```javascript
document
  .querySelector("#saveInvoice")
  .addEventListener("click", saveInvoice);
```

---

# 28. HTML Performance Best Practices

Performance is not only JavaScript and CSS.

HTML decisions matter too.

---

## 1. Keep markup meaningful

Avoid unnecessary wrapper elements.

Bad:

```html
<div>
  <div>
    <div>
      <p>Hello</p>
    </div>
  </div>
</div>
```

Better:

```html
<p>Hello</p>
```

---

## 2. Provide image dimensions

```html
<img
  src="product.jpg"
  alt="Product"
  width="600"
  height="400"
>
```

Helps reduce layout shift.

---

## 3. Lazy-load suitable offscreen images

```html
<img
  src="gallery-10.jpg"
  alt="Conference audience"
  loading="lazy"
>
```

---

## 4. Use responsive images

```html
<img
  src="photo-800.jpg"
  srcset="
    photo-400.jpg 400w,
    photo-800.jpg 800w,
    photo-1200.jpg 1200w
  "
  sizes="100vw"
  alt="Office team"
>
```

---

## 5. Avoid render-blocking scripts when unnecessary

Prefer:

```html
<script src="/app.js" defer></script>
```

instead of unnecessarily blocking document parsing.

---

## 6. Preload only critical resources

Example:

```html
<link
  rel="preload"
  href="/fonts/main.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>
```

Do not preload everything. Excessive preloading can hurt performance.

---

## 7. Preconnect when justified

```html
<link
  rel="preconnect"
  href="https://fonts.example.com"
>
```

Useful for high-priority third-party origins, but unnecessary connections also cost resources.

---

# 29. HTML Security Best Practices

HTML itself is not a security boundary.

---

## 1. Never trust hidden fields

```html
<input
  type="hidden"
  name="role"
  value="admin"
>
```

A user can change it.

Never authorize users based on client-provided hidden values.

---

## 2. Escape untrusted text

Dangerous concept:

```javascript
element.innerHTML = userInput;
```

If `userInput` contains malicious HTML or script-capable markup, this may create XSS risk.

Prefer safer text insertion:

```javascript
element.textContent = userInput;
```

When HTML must be rendered, use a trustworthy, well-maintained sanitization strategy.

---

## 3. Use HTTPS

Sensitive forms should be served over HTTPS.

HTML forms do not automatically encrypt traffic.

---

## 4. External target safety

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit
</a>
```

---

## 5. iframe sandboxing

```html
<iframe
  src="https://third-party.example"
  sandbox
  title="Third-party widget"
></iframe>
```

---

## 6. Never expose secrets

Do not put:

- API private keys;
- database passwords;
- private tokens;
- internal credentials;

inside:

```html
<script>
data-* attributes
hidden fields
HTML comments
```

Frontend source is inspectable.

---

## 7. HTML comments are public

```html
<!-- TODO: admin password is abc123 -->
```

Never store sensitive information in comments.

Users can inspect page source.

---

# 30. SEO-Friendly HTML Patterns

Search-friendly HTML usually overlaps with accessible, semantic HTML.

---

## Good page title

```html
<title>HTML Tutorial for Beginners | Example Academy</title>
```

---

## Clear H1

```html
<h1>HTML Tutorial for Beginners</h1>
```

---

## Descriptive sections

```html
<h2>HTML Forms</h2>
<h2>Semantic HTML</h2>
<h2>Accessibility</h2>
```

---

## Meaningful links

```html
<a href="/html/forms">
  Learn how HTML forms work
</a>
```

---

## Meaningful alt text

```html
<img
  src="html-form-example.png"
  alt="HTML registration form with name, email, and password fields"
>
```

---

## Semantic article pattern

```html
<article>

  <header>
    <h1>How to Build Accessible HTML Forms</h1>

    <p>
      Published
      <time datetime="2026-08-12">
        12 August 2026
      </time>
    </p>
  </header>

  <section>
    <h2>Use labels</h2>
    ...
  </section>

</article>
```

---

# 31. Common HTML Layout Patterns

These are structural patterns, not complete styling solutions.

---

## Pattern 1: Standard website

```html
<body>

  <header>
    <nav>...</nav>
  </header>

  <main>
    <section>...</section>
    <section>...</section>
  </main>

  <footer>...</footer>

</body>
```

Use for:

- company website;
- portfolio;
- marketing website.

---

## Pattern 2: Dashboard

```html
<body>

  <header>
    <h1>Invoice Dashboard</h1>
  </header>

  <nav aria-label="Application navigation">
    ...
  </nav>

  <main>

    <section aria-labelledby="summary-title">
      <h2 id="summary-title">Summary</h2>
      ...
    </section>

    <section aria-labelledby="invoice-title">
      <h2 id="invoice-title">Invoices</h2>
      ...
    </section>

  </main>

</body>
```

---

## Pattern 3: Blog article

```html
<main>

  <article>

    <header>
      <h1>Understanding Semantic HTML</h1>
      <p>
        Written by Alex
        on
        <time datetime="2026-08-12">
          12 August 2026
        </time>
      </p>
    </header>

    <section>
      <h2>Introduction</h2>
      ...
    </section>

    <section>
      <h2>Examples</h2>
      ...
    </section>

    <footer>
      <p>Tags: HTML, Accessibility</p>
    </footer>

  </article>

</main>
```

---

## Pattern 4: Product card

```html
<article class="product-card">

  <img
    src="keyboard.jpg"
    alt="Mechanical keyboard with black keycaps"
  >

  <h2>Mechanical Keyboard</h2>

  <p>₹4,999</p>

  <a href="/products/mechanical-keyboard">
    View product
  </a>

</article>
```

If "Add to cart" performs an action rather than navigating, use a button:

```html
<button type="button">
  Add to cart
</button>
```

---

## Pattern 5: Search results

```html
<main>

  <h1>Search Results</h1>

  <form action="/search" method="get">
    <label for="search">Search</label>
    <input id="search" name="q">
    <button type="submit">Search</button>
  </form>

  <section aria-labelledby="results-title">

    <h2 id="results-title">
      Results for "HTML"
    </h2>

    <article>
      <h3>
        <a href="/html-guide">HTML Guide</a>
      </h3>

      <p>Complete introduction to HTML.</p>
    </article>

  </section>

</main>
```

---

## Pattern 6: Login form

```html
<main>

  <h1>Sign in</h1>

  <form action="/login" method="post">

    <div>
      <label for="username">Username</label>

      <input
        id="username"
        name="username"
        type="text"
        autocomplete="username"
        required
      >
    </div>

    <div>
      <label for="password">Password</label>

      <input
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        required
      >
    </div>

    <button type="submit">
      Sign in
    </button>

  </form>

</main>
```

---

## Pattern 7: Invoice upload

```html
<main>

  <h1>Upload Invoice</h1>

  <form
    action="/invoices"
    method="post"
    enctype="multipart/form-data"
  >

    <label for="invoice-file">
      Invoice file
    </label>

    <input
      id="invoice-file"
      name="invoice"
      type="file"
      accept=".pdf,.png,.jpg,.jpeg"
      required
    >

    <button type="submit">
      Process Invoice
    </button>

  </form>

</main>
```

---

## Pattern 8: Settings form

```html
<form>

  <fieldset>

    <legend>Email notifications</legend>

    <label>
      <input
        type="checkbox"
        name="invoiceApproved"
      >
      Invoice approved
    </label>

    <label>
      <input
        type="checkbox"
        name="invoiceRejected"
      >
      Invoice rejected
    </label>

  </fieldset>

  <button type="submit">
    Save settings
  </button>

</form>
```

---

## Pattern 9: Breadcrumbs

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li aria-current="page">HTML</li>
  </ol>
</nav>
```

---

## Pattern 10: Pagination

```html
<nav aria-label="Pagination">

  <a href="?page=1">Previous</a>

  <a href="?page=1">1</a>

  <a
    href="?page=2"
    aria-current="page"
  >
    2
  </a>

  <a href="?page=3">3</a>

  <a href="?page=3">Next</a>

</nav>
```

---

# 32. Common HTML Anti-Patterns

## Anti-pattern 1: Clickable div

Bad:

```html
<div onclick="submitForm()">
  Submit
</div>
```

Better:

```html
<button type="submit">
  Submit
</button>
```

---

## Anti-pattern 2: Using `<br>` for spacing

Bad:

```html
<h1>Title</h1>
<br>
<br>
<p>Text</p>
```

Spacing belongs in CSS.

---

## Anti-pattern 3: Using tables for layout

Bad:

```html
<table>
  <tr>
    <td>Sidebar</td>
    <td>Main content</td>
  </tr>
</table>
```

Use semantic structure and CSS layout instead.

---

## Anti-pattern 4: Placeholder as label

Bad:

```html
<input placeholder="Email">
```

Better:

```html
<label for="email">Email</label>
<input id="email" placeholder="name@example.com">
```

---

## Anti-pattern 5: Excessive divs

Bad:

```html
<div>
  <div>
    <div>
      <div>Content</div>
    </div>
  </div>
</div>
```

Use only necessary markup.

---

## Anti-pattern 6: Empty links as buttons

Bad:

```html
<a href="#" onclick="save()">Save</a>
```

Better:

```html
<button type="button">
  Save
</button>
```

Use:

- links for navigation;
- buttons for actions.

---

## Anti-pattern 7: Styling headings instead of structuring them

Bad:

```html
<div class="big-text">Main heading</div>
```

Better:

```html
<h1>Main heading</h1>
```

---

## Anti-pattern 8: Duplicate IDs

Bad:

```html
<div id="card"></div>
<div id="card"></div>
```

IDs should be unique.

Use classes for repeated styling:

```html
<div class="card"></div>
<div class="card"></div>
```

---

## Anti-pattern 9: Missing alt text

Bad:

```html
<img src="chart.png">
```

Better:

```html
<img
  src="chart.png"
  alt="Monthly sales increased from January through March"
>
```

Or for decorative images:

```html
<img src="wave.svg" alt="">
```

---

## Anti-pattern 10: Client-only validation

Bad thinking:

```text
HTML required attribute = secure validation
```

Correct:

```text
HTML validation
+
JavaScript validation when useful
+
server-side validation
```

---

# 33. HTML Validation and Debugging

Browsers are forgiving.

This means invalid HTML may appear to work.

That does not mean it is correct.

---

## Common problems

### Missing closing tag

```html
<p>Hello
```

### Incorrect nesting

```html
<p>
  <div>Invalid structure</div>
</p>
```

### Duplicate IDs

```html
<div id="user"></div>
<div id="user"></div>
```

### Missing accessible form labels

```html
<input type="text">
```

---

## Browser DevTools

Learn to use:

- Elements/Inspector;
- Accessibility tree;
- Network panel;
- Console;
- Sources;
- Performance tools;
- Lighthouse or equivalent auditing tools.

---

## View source vs DOM

"View Source" shows the HTML received from the server.

The DevTools Elements panel shows the live DOM after browser parsing and JavaScript modifications.

These can differ.

---

## DOM repair example

Browsers automatically repair some invalid HTML.

Therefore your raw source may not match the DOM tree you see in DevTools.

Do not depend on browser error recovery.

---

# 34. Naming and Code Organization

HTML should be readable by humans.

Bad:

```html
<div class="a1">
  <div class="b2">...</div>
</div>
```

Better:

```html
<article class="invoice-card">
  <header class="invoice-card__header">
    ...
  </header>
</article>
```

---

## Prefer meaningful IDs

Bad:

```html
<input id="x1">
```

Better:

```html
<input id="invoice-number">
```

---

## Indentation

Recommended:

```html
<section>
  <h2>Invoices</h2>

  <article>
    <h3>INV-1001</h3>
    <p>Pending approval</p>
  </article>
</section>
```

Consistent indentation reveals hierarchy.

---

## Attribute formatting

Short:

```html
<input type="email" name="email" required>
```

Long:

```html
<input
  id="invoice-file"
  name="invoice"
  type="file"
  accept=".pdf,.png,.jpg"
  required
>
```

---

## Comments

Useful:

```html
<!-- Main invoice results -->
<section>
```

Avoid comments that merely repeat obvious markup:

```html
<!-- Paragraph -->
<p>Hello</p>
```

---

# 35. Progressive Enhancement

Progressive enhancement means building the basic experience with reliable web foundations first, then adding richer behavior.

Example search:

```html
<form action="/search" method="get">

  <label for="search">
    Search
  </label>

  <input
    id="search"
    name="q"
  >

  <button type="submit">
    Search
  </button>

</form>
```

This can work without JavaScript.

Then JavaScript may enhance it with:

- autocomplete;
- instant results;
- loading indicators;
- keyboard shortcuts.

A robust mindset is:

```text
HTML provides core function
        ↓
CSS improves presentation
        ↓
JavaScript adds enhanced behavior
```

This often creates more resilient applications.

---

# 36. Real-World Page Architecture

A professional page could look like:

```html
<!doctype html>

<html lang="en">

<head>

  <meta charset="utf-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>Invoice Dashboard</title>

  <meta
    name="description"
    content="View and process company invoices."
  >

  <link
    rel="stylesheet"
    href="/assets/styles.css"
  >

  <script
    type="module"
    src="/assets/app.js"
  ></script>

</head>

<body>

  <a
    class="skip-link"
    href="#main-content"
  >
    Skip to main content
  </a>

  <header>

    <a href="/" aria-label="Invoice Portal home">
      Invoice Portal
    </a>

    <nav aria-label="Primary">

      <ul>
        <li>
          <a
            href="/dashboard"
            aria-current="page"
          >
            Dashboard
          </a>
        </li>

        <li>
          <a href="/invoices">
            Invoices
          </a>
        </li>

        <li>
          <a href="/vendors">
            Vendors
          </a>
        </li>
      </ul>

    </nav>

  </header>

  <main id="main-content">

    <header>

      <h1>
        Invoice Dashboard
      </h1>

      <p>
        Review pending and processed invoices.
      </p>

    </header>

    <section aria-labelledby="summary-heading">

      <h2 id="summary-heading">
        Summary
      </h2>

      <dl>

        <div>
          <dt>Pending</dt>
          <dd>12</dd>
        </div>

        <div>
          <dt>Approved</dt>
          <dd>45</dd>
        </div>

      </dl>

    </section>

    <section aria-labelledby="recent-heading">

      <h2 id="recent-heading">
        Recent Invoices
      </h2>

      <div class="table-scroll">

        <table>

          <caption>
            Recent invoice submissions
          </caption>

          <thead>
            <tr>
              <th scope="col">Invoice</th>
              <th scope="col">Vendor</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <th scope="row">
                <a href="/invoices/INV-1001">
                  INV-1001
                </a>
              </th>

              <td>ABC Pvt Ltd</td>

              <td>₹25,000</td>

              <td>Pending</td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>

  </main>

  <footer>

    <p>
      &copy; 2026 Example Company.
    </p>

  </footer>

</body>

</html>
```

This example demonstrates:

- document metadata;
- semantic landmarks;
- accessibility;
- navigation;
- headings;
- table semantics;
- descriptive links;
- skip navigation;
- modern JavaScript loading.

---

# 37. Practical Mini Projects

The best way to learn HTML is to build real pages.

---

## Project 1: Personal Profile Page

Build:

- profile heading;
- photo;
- biography;
- skills list;
- contact links;
- education section.

Concepts:

```text
headings
paragraphs
images
lists
links
semantic sections
```

---

## Project 2: Resume/CV

Sections:

```text
Name
Summary
Experience
Education
Skills
Projects
Contact
```

Practice:

```html
<header>
<main>
<section>
<article>
<time>
<ul>
```

---

## Project 3: Product Landing Page

Include:

- navigation;
- hero;
- product image;
- features;
- testimonials;
- pricing;
- CTA button;
- footer.

---

## Project 4: Registration Form

Fields:

```text
Name
Email
Password
Confirm password
Date of birth
Country
Terms checkbox
```

Practice:

- labels;
- input types;
- required;
- minlength;
- select;
- checkbox;
- fieldset.

---

## Project 5: Invoice Upload Portal

Include:

```text
invoice file upload
vendor selection
invoice date
invoice number
invoice total
PO / Non-PO selection
submit button
```

---

## Project 6: Invoice Table

Columns:

```text
Invoice Number
Vendor
Invoice Date
Amount
Status
Action
```

Practice:

```html
table
caption
thead
tbody
th
scope
links
buttons
```

---

## Project 7: Blog Article

Include:

- article title;
- author;
- publish date;
- headings;
- quotes;
- code sample;
- image;
- related links.

---

## Project 8: FAQ Page

Use:

```html
<details>
  <summary>Question</summary>
  <p>Answer</p>
</details>
```

---

## Project 9: Documentation Page

Build:

- side navigation;
- main article;
- heading hierarchy;
- code examples;
- table of contents;
- anchor links.

---

## Project 10: Accessible Checkout Form

Include:

- customer info;
- shipping address;
- payment method choice;
- order summary;
- submit button;
- inline help text.

Focus especially on:

- labels;
- grouping;
- `autocomplete`;
- meaningful errors;
- keyboard navigation.

---

# 38. HTML Interview Questions

## Beginner

### What is HTML?

HTML is a markup language used to describe the structure and semantics of web documents.

---

### What is the difference between an element and a tag?

An element is the complete HTML component.

Example:

```html
<p>Hello</p>
```

Tags are the syntactic markers:

```html
<p>
</p>
```

---

### What is a void element?

An element that does not have a normal closing tag or child content.

Examples:

```html
<img>
<input>
<br>
<hr>
<meta>
<link>
```

---

### Difference between `id` and `class`?

`id` should uniquely identify an element in a document.

`class` can be shared by multiple elements.

---

### Difference between `div` and `span`?

`div` is a generic flow/block container.

`span` is a generic phrasing/inline container.

---

### Difference between `strong` and `b`?

`strong` communicates importance.

`b` draws attention without necessarily conveying semantic importance.

---

### Difference between `em` and `i`?

`em` communicates emphasis.

`i` represents text in an alternate voice/mood or other conventionally italicized text.

---

## Intermediate

### Why use semantic HTML?

Benefits include:

- accessibility;
- maintainability;
- meaningful document structure;
- search engine understanding;
- easier debugging.

---

### Difference between GET and POST?

GET normally sends form values through the URL/query string and is useful for retrieval/search/filter state.

POST sends form data in the request body and is commonly used for submissions that create or change data.

Both still require HTTPS when the data is sensitive.

---

### What is `defer`?

It allows a script to download while HTML parsing continues and execute after document parsing finishes.

---

### What is `async`?

An async script downloads independently and executes as soon as it is ready.

Execution order relative to other async scripts is not guaranteed.

---

### Why is `alt` important?

It provides a text alternative when the image cannot be perceived or loaded and is especially important for assistive technology.

---

### What is `srcset`?

It lets the browser choose from multiple image resources based on display conditions and resolution requirements.

---

### Why is `label` important for inputs?

It provides an accessible name and makes the form easier to interact with, including by clicking/tapping the label text.

---

## Advanced

### Why prefer button over clickable div?

A native button provides built-in:

- semantics;
- keyboard handling;
- focus behavior;
- accessibility support.

A clickable `div` requires developers to recreate these behaviors.

---

### What is progressive enhancement?

Creating a reliable base experience first, often with semantic HTML, then adding styling and JavaScript enhancements.

---

### What is the accessibility tree?

Browsers expose a representation of UI meaning, names, states, and relationships to assistive technologies.

Good semantic HTML helps produce a useful accessibility tree.

---

### Why should you not rely on browser form validation for security?

Because a user can bypass the browser and send arbitrary requests directly to the server.

---

### What is semantic difference between `article` and `section`?

`article` is typically independently reusable or self-contained content.

`section` groups related content into a thematic part of a document.

---

### Why can invalid HTML still appear to work?

Browsers implement error-recovery rules and attempt to repair malformed markup.

Depending on browser correction is fragile and should be avoided.

---

# 39. HTML Cheat Sheet

## Base document

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >
  <title>Page Title</title>
</head>

<body>

</body>

</html>
```

---

## Text

```html
<h1>Heading</h1>
<p>Paragraph</p>

<strong>Important</strong>
<em>Emphasis</em>

<mark>Highlighted</mark>
<small>Fine print</small>

<del>Deleted</del>
<ins>Inserted</ins>

<sup>Superscript</sup>
<sub>Subscript</sub>

<code>Code</code>
<pre>Preformatted</pre>
```

---

## Links

```html
<a href="/about">About</a>

<a href="#section">
  Jump to section
</a>

<a href="mailto:a@example.com">
  Email
</a>

<a href="tel:+911234567890">
  Call
</a>
```

---

## Images

```html
<img
  src="image.jpg"
  alt="Description"
  width="800"
  height="600"
>
```

---

## Lists

```html
<ul>
  <li>Item</li>
</ul>

<ol>
  <li>Step</li>
</ol>

<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

---

## Semantic layout

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

---

## Tables

```html
<table>
  <caption>Title</caption>

  <thead>
    <tr>
      <th scope="col">Name</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Value</td>
    </tr>
  </tbody>
</table>
```

---

## Forms

```html
<form action="/submit" method="post">

  <label for="name">Name</label>

  <input
    id="name"
    name="name"
    type="text"
    required
  >

  <button type="submit">
    Submit
  </button>

</form>
```

---

## Common input types

```html
<input type="text">
<input type="email">
<input type="password">
<input type="tel">
<input type="url">
<input type="number">
<input type="date">
<input type="time">
<input type="checkbox">
<input type="radio">
<input type="file">
<input type="range">
<input type="color">
<input type="hidden">
```

---

## Validation

```html
required
minlength="3"
maxlength="100"
min="0"
max="100"
step="0.01"
pattern="..."
```

---

## Script

```html
<script src="/app.js" defer></script>
```

or:

```html
<script type="module" src="/app.js"></script>
```

---

# 40. Learning Roadmap

## Stage 1 — Fundamentals

Learn:

- document structure;
- tags;
- attributes;
- headings;
- paragraphs;
- links;
- images;
- lists.

Build:

```text
Personal profile page
```

---

## Stage 2 — Structure

Learn:

- semantic HTML;
- header;
- nav;
- main;
- article;
- section;
- aside;
- footer.

Build:

```text
Blog page
```

---

## Stage 3 — Data

Learn:

- tables;
- description lists;
- figures;
- time elements.

Build:

```text
Invoice listing page
```

---

## Stage 4 — Forms

Learn:

- form;
- label;
- input types;
- textarea;
- select;
- radio;
- checkbox;
- file;
- fieldset;
- legend;
- validation.

Build:

```text
Registration form
Invoice upload form
```

---

## Stage 5 — Accessibility

Learn:

- landmarks;
- heading hierarchy;
- form labels;
- alt text;
- keyboard navigation;
- focus;
- ARIA basics;
- accessible names;
- skip links.

Build:

```text
Accessible checkout form
```

---

## Stage 6 — Media and Responsive HTML

Learn:

- picture;
- source;
- srcset;
- sizes;
- video;
- audio;
- track;
- iframe.

Build:

```text
Responsive media article
```

---

## Stage 7 — Production Practices

Learn:

- metadata;
- SEO;
- Open Graph;
- performance;
- security;
- defer/async/modules;
- progressive enhancement;
- HTML validation.

Build:

```text
Production-ready landing page
```

---

## Stage 8 — Mastery

You should be able to look at any UI and decide:

1. What is the page's main heading?
2. What content is navigation?
3. Which content forms independent articles?
4. Which groups are thematic sections?
5. Which controls are buttons?
6. Which items are links?
7. Which data belongs in a table?
8. Which input type best matches the value?
9. How will a keyboard user operate it?
10. How will a screen reader understand it?
11. What can work before JavaScript loads?
12. What metadata does the page need?
13. What HTML can be simplified?

That decision-making ability is more important than memorizing hundreds of tags.

---

# 41. Final Best-Practice Checklist

Before considering an HTML page complete, review this checklist.

## Document

- [ ] `<!doctype html>` exists.
- [ ] `html` has the correct `lang`.
- [ ] UTF-8 charset is declared.
- [ ] viewport metadata exists.
- [ ] page has a meaningful `title`.
- [ ] description metadata is appropriate.

## Structure

- [ ] primary content is inside `main`.
- [ ] semantic elements are used where meaningful.
- [ ] unnecessary wrapper elements are removed.
- [ ] heading hierarchy is logical.
- [ ] page has a clear primary heading.

## Links and Buttons

- [ ] links navigate somewhere.
- [ ] buttons perform actions.
- [ ] link text is descriptive.
- [ ] external new-tab links are handled safely.
- [ ] icon-only buttons have accessible names.

## Images

- [ ] meaningful images have useful alt text.
- [ ] decorative images use empty alt text.
- [ ] image width/height are included where practical.
- [ ] responsive images are used where they provide value.
- [ ] offscreen images can be lazy-loaded when appropriate.

## Forms

- [ ] every meaningful control has a label.
- [ ] correct input types are used.
- [ ] required fields use `required`.
- [ ] related inputs are grouped with `fieldset` and `legend` when useful.
- [ ] autocomplete attributes are used appropriately.
- [ ] file forms use the correct encoding.
- [ ] non-submit buttons explicitly use `type="button"`.
- [ ] server-side validation exists.

## Tables

- [ ] tables are used only for tabular data.
- [ ] table has appropriate headers.
- [ ] `scope` is used when it improves header relationships.
- [ ] caption is added where useful.

## Accessibility

- [ ] keyboard navigation works.
- [ ] focus order is logical.
- [ ] semantic native controls are preferred.
- [ ] skip navigation is considered for complex pages.
- [ ] ARIA is added only where native semantics are insufficient.
- [ ] text and controls have accessible names.

## Performance

- [ ] unnecessary markup is removed.
- [ ] scripts do not block parsing without reason.
- [ ] heavy images are optimized.
- [ ] responsive image sources are considered.
- [ ] critical resources are prioritized carefully.

## Security

- [ ] no secrets appear in HTML.
- [ ] hidden fields are not trusted.
- [ ] user-generated HTML is treated as untrusted.
- [ ] iframe permissions are restricted when needed.
- [ ] sensitive pages are delivered over HTTPS.

---

# Additional Master Notes

## Memorize principles, not only tags

A developer who memorizes every HTML element but does not understand semantics will often produce worse markup than a developer who knows fewer elements but chooses them correctly.

Ask:

```text
What is this content?
```

before asking:

```text
How should it look?
```

Example:

If something is a heading:

```html
<h2>Pending Invoices</h2>
```

not:

```html
<div class="large-bold-text">
  Pending Invoices
</div>
```

---

## Native HTML first

Before building a custom component, check whether HTML already provides a suitable element.

Before building:

```text
custom expandable box
```

consider:

```html
<details>
```

Before building:

```text
custom modal foundation
```

consider:

```html
<dialog>
```

Before building:

```text
custom progress representation
```

consider:

```html
<progress>
```

Before building:

```text
clickable div
```

use:

```html
<button>
```

The browser already solves many difficult interaction details.

---

## The HTML decision tree

When adding something to a page, ask:

### Is it navigation?

```html
<a>
<nav>
```

### Is it an action?

```html
<button>
```

### Is it the main page content?

```html
<main>
```

### Is it a self-contained content unit?

```html
<article>
```

### Is it a thematic grouping?

```html
<section>
```

### Is it secondary/related content?

```html
<aside>
```

### Is it tabular data?

```html
<table>
```

### Is it a term/value relationship?

```html
<dl>
```

### Is it a user input?

```html
<form>
<input>
<select>
<textarea>
```

### Is there no better semantic element?

Then use:

```html
<div>
<span>
```

---

# Recommended Practice Challenge

Create one complete project called:

```text
Invoice Management Portal
```

The HTML-only version should contain:

```text
Login
Dashboard
Invoice list
Invoice detail
Invoice upload
Vendor information
Approval history
Settings
Help page
```

Try to use:

```html
<header>
<nav>
main
section
article
aside
footer
table
form
fieldset
legend
input
select
textarea
button
details
dialog
progress
time
figure
figcaption
```

Then review every element and ask:

> Is this the most semantically correct element for the content?

If you can consistently answer that question, your HTML skill is moving from beginner knowledge toward professional-level markup design.

---

# Final Summary

HTML mastery is not about writing more tags.

It is about writing the **smallest, clearest, most meaningful structure** that correctly represents the content.

A strong HTML developer focuses on:

```text
Semantic structure
Accessibility
Correct controls
Forms
Content hierarchy
Performance
Security awareness
SEO
Progressive enhancement
Maintainability
```

The ideal mental model is:

```text
HTML = Meaning + Structure
CSS  = Presentation
JS   = Behavior
```

If your HTML still communicates the document structure when CSS and JavaScript are removed, you are usually moving in the right direction.

---

# End of HTML Mastery Handbook

Use this file as:

- a beginner course;
- a revision guide;
- an interview preparation reference;
- a code review checklist;
- a semantic HTML reference;
- a base for real-world frontend projects.

Keep improving it as you discover new practical scenarios.
