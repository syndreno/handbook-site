# Bootstrap CSS Master Handbook

> **A single-file, beginner-to-advanced learning and reference guide for Bootstrap 5**
>
> Target: **Bootstrap 5.3.x** (official documentation currently lists **v5.3.8** as the latest 5.3 release at the time this handbook was prepared).
>
> This handbook is designed so that a complete beginner can start at Chapter 1, while an experienced developer can use it as a day-to-day reference.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Bootstrap Is](#2-what-bootstrap-is)
3. [Bootstrap 5 Mental Model](#3-bootstrap-5-mental-model)
4. [Installation and Project Setup](#4-installation-and-project-setup)
5. [Starter Template and Required HTML](#5-starter-template-and-required-html)
6. [Understanding Bootstrap Files](#6-understanding-bootstrap-files)
7. [Reboot and Global Styles](#7-reboot-and-global-styles)
8. [Responsive Design Fundamentals](#8-responsive-design-fundamentals)
9. [Breakpoints](#9-breakpoints)
10. [Containers](#10-containers)
11. [Grid System](#11-grid-system)
12. [Columns, Gutters, Ordering, Offsets, and Nesting](#12-columns-gutters-ordering-offsets-and-nesting)
13. [CSS Grid Alternative](#13-css-grid-alternative)
14. [Typography](#14-typography)
15. [Images and Figures](#15-images-and-figures)
16. [Tables](#16-tables)
17. [Forms Overview](#17-forms-overview)
18. [Form Controls](#18-form-controls)
19. [Select, Checkboxes, Radios, Switches, and Range](#19-select-checkboxes-radios-switches-and-range)
20. [Input Groups and Floating Labels](#20-input-groups-and-floating-labels)
21. [Form Layout](#21-form-layout)
22. [Validation](#22-validation)
23. [Buttons and Button Groups](#23-buttons-and-button-groups)
24. [Alerts, Badges, Breadcrumbs, and Close Buttons](#24-alerts-badges-breadcrumbs-and-close-buttons)
25. [Cards](#25-cards)
26. [Navigation, Tabs, Pills, and Navbar](#26-navigation-tabs-pills-and-navbar)
27. [List Groups and Pagination](#27-list-groups-and-pagination)
28. [Accordion and Collapse](#28-accordion-and-collapse)
29. [Dropdowns](#29-dropdowns)
30. [Modal](#30-modal)
31. [Offcanvas](#31-offcanvas)
32. [Carousel](#32-carousel)
33. [Tooltips and Popovers](#33-tooltips-and-popovers)
34. [Toasts](#34-toasts)
35. [Progress, Spinners, and Placeholders](#35-progress-spinners-and-placeholders)
36. [Scrollspy](#36-scrollspy)
37. [Utility Classes](#37-utility-classes)
38. [Flexbox Utilities](#38-flexbox-utilities)
39. [Spacing Utilities](#39-spacing-utilities)
40. [Sizing, Display, Overflow, Position, and Z-index](#40-sizing-display-overflow-position-and-z-index)
41. [Text, Colors, Backgrounds, Borders, and Shadows](#41-text-colors-backgrounds-borders-and-shadows)
42. [Helpers](#42-helpers)
43. [Color Modes and Dark Mode](#43-color-modes-and-dark-mode)
44. [CSS Variables](#44-css-variables)
45. [Sass Customization](#45-sass-customization)
46. [Sass Maps, Functions, and Mixins](#46-sass-maps-functions-and-mixins)
47. [Utility API](#47-utility-api)
48. [Bootstrap JavaScript](#48-bootstrap-javascript)
49. [Data Attributes and Programmatic APIs](#49-data-attributes-and-programmatic-apis)
50. [Bootstrap Events](#50-bootstrap-events)
51. [Accessibility](#51-accessibility)
52. [RTL Support](#52-rtl-support)
53. [Icons](#53-icons)
54. [Performance and Production Optimization](#54-performance-and-production-optimization)
55. [Custom CSS Architecture with Bootstrap](#55-custom-css-architecture-with-bootstrap)
56. [Bootstrap with Vite, Webpack, and Modern Tooling](#56-bootstrap-with-vite-webpack-and-modern-tooling)
57. [Bootstrap with React, Angular, Vue, and Server Frameworks](#57-bootstrap-with-react-angular-vue-and-server-frameworks)
58. [Common UI Scenarios](#58-common-ui-scenarios)
59. [Real-World Page Patterns](#59-real-world-page-patterns)
60. [Responsive Design Scenarios](#60-responsive-design-scenarios)
61. [Customization Scenarios](#61-customization-scenarios)
62. [Common Mistakes and Debugging](#62-common-mistakes-and-debugging)
63. [Bootstrap 4 to Bootstrap 5 Migration](#63-bootstrap-4-to-bootstrap-5-migration)
64. [When Bootstrap Is a Good or Bad Choice](#64-when-bootstrap-is-a-good-or-bad-choice)
65. [Interview Questions and Answers](#65-interview-questions-and-answers)
66. [Practice Exercises](#66-practice-exercises)
67. [Mini Projects](#67-mini-projects)
68. [Capstone Project Architecture](#68-capstone-project-architecture)
69. [Bootstrap Cheat Sheet](#69-bootstrap-cheat-sheet)
70. [Learning Roadmap](#70-learning-roadmap)
71. [Glossary](#71-glossary)
72. [Official References](#72-official-references)

---

# 1. How to Use This Handbook

This handbook serves three purposes:

1. **Learning path** — read from the beginning if you are new.
2. **Reference manual** — search for a class, component, or concept when working on a project.
3. **Scenario guide** — use the real-world examples to understand *why* and *when* a feature is useful.

### Recommended learning order

```text
HTML/CSS basics
    ↓
Bootstrap setup
    ↓
Containers + breakpoints
    ↓
Grid
    ↓
Utilities
    ↓
Forms + components
    ↓
JavaScript plugins
    ↓
Accessibility
    ↓
CSS variables + Sass
    ↓
Utility API + optimization
    ↓
Real projects
```

### Prerequisites

You should know basic:

- HTML elements
- CSS selectors
- CSS box model
- Flexbox basics
- JavaScript basics for interactive components

If you do not know Flexbox yet, you can still start Bootstrap, but learning Flexbox will make Bootstrap's layout system much easier to understand.

---

# 2. What Bootstrap Is

Bootstrap is a frontend toolkit that gives you reusable CSS styles, responsive layout tools, UI components, utility classes, and optional JavaScript plugins.

Instead of writing every CSS rule yourself:

```css
.my-button {
  background: blue;
  color: white;
  border: 0;
  padding: 10px 16px;
  border-radius: 6px;
}
```

Bootstrap lets you write:

```html
<button class="btn btn-primary">Save</button>
```

Bootstrap does **not** replace HTML, CSS, or JavaScript knowledge. It gives you a predefined design system and conventions.

## 2.1 What Bootstrap provides

Bootstrap can help with:

- responsive layouts
- spacing
- typography
- colors
- borders
- Flexbox
- responsive grid
- buttons
- forms
- tables
- navigation bars
- modals
- dropdowns
- accordions
- carousels
- alerts
- cards
- offcanvas panels
- tooltips
- toasts
- accessibility helpers
- Sass customization
- CSS custom properties
- reusable utility classes

## 2.2 Bootstrap philosophy

Bootstrap is largely:

```text
HTML + predefined classes + optional JavaScript
```

Example:

```html
<div class="container py-5">
  <div class="row g-4">
    <div class="col-md-6">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Product</h2>
          <p class="card-text">Description goes here.</p>
          <a href="#" class="btn btn-primary">View product</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

In only a few classes, you are using:

- a centered responsive container
- vertical spacing
- a responsive grid
- gutter spacing
- a card component
- a shadow utility
- button styling

---

# 3. Bootstrap 5 Mental Model

A useful way to understand Bootstrap is to divide it into six layers.

```text
Bootstrap
├── Foundation
│   ├── Reboot
│   ├── variables
│   └── base typography
├── Layout
│   ├── containers
│   ├── grid
│   └── breakpoints
├── Content
│   ├── typography
│   ├── images
│   └── tables
├── Forms
│   ├── controls
│   ├── validation
│   └── layout
├── Components
│   ├── cards
│   ├── navbar
│   ├── modal
│   └── etc.
└── Utilities
    ├── spacing
    ├── flex
    ├── display
    ├── colors
    └── sizing
```

Then Bootstrap adds optional JavaScript behavior:

```text
Dropdown
Modal
Collapse
Offcanvas
Tooltip
Popover
Carousel
Toast
Scrollspy
Tab
```

### Important principle

Do not memorize thousands of classes individually.

Learn the **class naming patterns**.

For example:

```text
m-3       margin
mt-3      margin-top
mb-3      margin-bottom
mx-3      horizontal margin
my-3      vertical margin

p-3       padding
pt-3      padding-top
px-3      horizontal padding
```

Once you understand the pattern, dozens of classes become predictable.

---

# 4. Installation and Project Setup

There are several common ways to use Bootstrap.

## 4.1 CDN

Best for:

- learning
- prototypes
- static pages
- quick demos

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
>
```

For JavaScript components, use the Bootstrap bundle:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

The bundle includes Bootstrap's JavaScript plus Popper, which is needed by features such as dropdown positioning, tooltips, and popovers.

### Scenario: simple company landing page

For a basic marketing page with no build pipeline, CDN installation is often enough.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Company</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <main class="container py-5">
    <h1>Hello Bootstrap</h1>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

> For production, verify the desired Bootstrap version and integrity/security requirements used by your organization before deployment.

---

## 4.2 npm

Best for:

- React/Vue/Angular projects
- Vite/Webpack projects
- Sass customization
- production builds

```bash
npm install bootstrap
```

Then import CSS:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

And Bootstrap JavaScript if needed:

```js
import 'bootstrap';
```

Or import only a plugin:

```js
import Modal from 'bootstrap/js/dist/modal';
```

---

## 4.3 Sass source installation

Install Bootstrap:

```bash
npm install bootstrap
```

Create:

```text
src/
├── scss/
│   └── main.scss
└── js/
    └── main.js
```

`main.scss`:

```scss
$primary: #6f42c1;
$border-radius: .75rem;

@import "bootstrap/scss/bootstrap";
```

This approach lets you change Bootstrap's Sass variables before compilation.

---

## 4.4 Download compiled files

You may also download Bootstrap's compiled CSS and JS and host them yourself.

Example structure:

```text
project/
├── index.html
├── css/
│   ├── bootstrap.min.css
│   └── app.css
└── js/
    ├── bootstrap.bundle.min.js
    └── app.js
```

Then:

```html
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/app.css">
```

Load your custom stylesheet **after** Bootstrap when you intentionally want normal CSS cascade overrides.

---

# 5. Starter Template and Required HTML

A standard Bootstrap page starts with:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap App</title>
  <link href="bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1>Hello world</h1>

  <script src="bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Why the viewport meta tag matters

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Without it, a phone browser may render the page using a wider virtual viewport, preventing the responsive layout from behaving as expected.

---

# 6. Understanding Bootstrap Files

Common compiled files include:

```text
bootstrap.css
bootstrap.min.css
bootstrap.rtl.css
bootstrap.rtl.min.css
bootstrap.js
bootstrap.min.js
bootstrap.bundle.js
bootstrap.bundle.min.js
```

### `.min` files

Minified files remove unnecessary formatting to reduce file size.

Use:

```text
bootstrap.css       → debugging/development
bootstrap.min.css   → production
```

### `bundle` JavaScript

```text
bootstrap.bundle.min.js
```

includes Popper.

Plain:

```text
bootstrap.min.js
```

may require Popper separately for components that depend on positioning.

---

# 7. Reboot and Global Styles

Bootstrap includes **Reboot**, which normalizes and improves browser defaults.

It affects things such as:

- box sizing
- margins
- typography defaults
- form element inheritance
- table behavior
- native elements

For example, Bootstrap globally uses a more predictable box model.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Why this matters:

With `border-box`, declared width includes padding and borders.

```text
width = content + padding + border
```

becomes effectively:

```text
declared width = final rendered width
```

This is much easier for layout calculations.

---

# 8. Responsive Design Fundamentals

Bootstrap is **mobile-first**.

That means base styles generally apply to small screens first, and breakpoint-specific classes add or change behavior as the screen becomes wider.

Example:

```html
<div class="col-12 col-md-6 col-lg-4">
  Product
</div>
```

Interpretation:

```text
Extra-small/small screen → width 12/12 = 100%
Medium screen           → width 6/12  = 50%
Large+ screen           → width 4/12  = 33.33%
```

Think:

```text
mobile default
    + md override
    + lg override
```

not:

```text
separate layout for every screen
```

---

# 9. Breakpoints

Bootstrap 5.3's standard breakpoint tiers are conceptually:

| Tier | Class infix | Minimum viewport width |
|---|---:|---:|
| Extra small | none | `<576px` |
| Small | `sm` | `≥576px` |
| Medium | `md` | `≥768px` |
| Large | `lg` | `≥992px` |
| Extra large | `xl` | `≥1200px` |
| Extra extra large | `xxl` | `≥1400px` |

Examples:

```html
<div class="d-none d-md-block">Desktop/tablet content</div>
```

Means:

```text
hidden by default
visible from md upward
```

Another example:

```html
<div class="text-center text-lg-start">
  Responsive alignment
</div>
```

Means:

```text
xs → centered
sm → centered
md → centered
lg → left/start aligned
xl → left/start aligned
xxl → left/start aligned
```

### Scenario: mobile menu vs desktop menu

```html
<div class="d-lg-none">Mobile menu</div>
<div class="d-none d-lg-block">Desktop navigation</div>
```

---

# 10. Containers

Containers provide horizontal padding and control content width.

## 10.1 `.container`

Responsive maximum width:

```html
<div class="container">
  Content
</div>
```

The max width changes at breakpoints.

Use for:

- websites
- dashboards
- forms
- article pages
- centered layouts

## 10.2 `.container-fluid`

Always full width:

```html
<div class="container-fluid">
  Full width content
</div>
```

Useful for:

- full-width dashboards
- admin layouts
- maps
- data-heavy screens

## 10.3 Responsive containers

Example:

```html
<div class="container-lg">
  Content
</div>
```

It stays full width until the specified breakpoint, then behaves like a fixed max-width container.

### Scenario

A mobile layout should use the whole screen, while desktop content should be constrained:

```html
<div class="container-lg py-4">
  ...
</div>
```

---

# 11. Grid System

Bootstrap's main grid uses Flexbox and a **12-column model**.

Basic structure:

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
```

Mental model:

```text
container
└── row
    ├── column
    ├── column
    └── column
```

## 11.1 Equal-width columns

```html
<div class="row">
  <div class="col">A</div>
  <div class="col">B</div>
  <div class="col">C</div>
</div>
```

Each receives equal width.

## 11.2 Explicit column sizes

```html
<div class="row">
  <div class="col-4">4</div>
  <div class="col-8">8</div>
</div>
```

Because:

```text
4 + 8 = 12
```

Widths become roughly:

```text
4/12 = 33.33%
8/12 = 66.67%
```

## 11.3 Responsive columns

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Item</div>
  <div class="col-12 col-md-6 col-lg-4">Item</div>
  <div class="col-12 col-md-6 col-lg-4">Item</div>
</div>
```

Result:

```text
phone   → 1 item per row
medium  → 2 items per row
large   → 3 items per row
```

## 11.4 Auto-layout

```html
<div class="row">
  <div class="col">Flexible</div>
  <div class="col-6">50%</div>
  <div class="col">Flexible</div>
</div>
```

The remaining available width is distributed between `.col` elements.

## 11.5 Content-width columns

```html
<div class="row">
  <div class="col-auto">Only as wide as content</div>
  <div class="col">Takes remaining space</div>
</div>
```

### Scenario: label + flexible field

```html
<div class="row align-items-center">
  <div class="col-auto">
    <label for="search" class="col-form-label">Search</label>
  </div>
  <div class="col">
    <input id="search" class="form-control">
  </div>
</div>
```

---

# 12. Columns, Gutters, Ordering, Offsets, and Nesting

## 12.1 Gutters

Gutters are spaces between columns.

```html
<div class="row g-3">
```

Common patterns:

```text
g-0   → no gutter
g-1   → very small
g-2
g-3
g-4
g-5   → large
```

Horizontal only:

```html
<div class="row gx-4">
```

Vertical only:

```html
<div class="row gy-4">
```

Responsive:

```html
<div class="row g-2 g-lg-5">
```

### Scenario: product cards

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
  <div class="col"><div class="card">...</div></div>
  <div class="col"><div class="card">...</div></div>
  <div class="col"><div class="card">...</div></div>
  <div class="col"><div class="card">...</div></div>
</div>
```

`row-cols-*` controls the number of child columns per row.

---

## 12.2 Ordering

Visual order can be changed:

```html
<div class="row">
  <div class="col order-2">First in HTML</div>
  <div class="col order-1">Second in HTML</div>
</div>
```

Responsive ordering:

```html
<div class="col-md-6 order-2 order-md-1">Content</div>
<div class="col-md-6 order-1 order-md-2">Image</div>
```

### Scenario: marketing section

On mobile:

```text
Image
Text
```

On desktop:

```text
Text | Image
```

```html
<div class="row align-items-center">
  <div class="col-md-6 order-2 order-md-1">
    <h2>Fast delivery</h2>
    <p>Our service...</p>
  </div>

  <div class="col-md-6 order-1 order-md-2">
    <img src="delivery.jpg" class="img-fluid" alt="Delivery truck">
  </div>
</div>
```

> Use CSS ordering carefully. Screen readers and keyboard order generally follow DOM order, not visual order. Keep semantic reading order sensible.

---

## 12.3 Offsets

```html
<div class="row">
  <div class="col-md-6 offset-md-3">
    Centered 6-column block
  </div>
</div>
```

Useful for:

- login forms
- narrow articles
- centered signup panels

---

## 12.4 Nesting

```html
<div class="row">
  <div class="col-md-8">
    Parent

    <div class="row">
      <div class="col-6">Nested A</div>
      <div class="col-6">Nested B</div>
    </div>
  </div>
</div>
```

Each nested row gets its own 12-column context.

---

## 12.5 Row columns

Instead of manually calculating column sizes:

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
  <div class="col">A</div>
  <div class="col">B</div>
  <div class="col">C</div>
  <div class="col">D</div>
</div>
```

This is excellent for cards and galleries.

---

# 13. CSS Grid Alternative

Bootstrap also provides an alternate CSS Grid-based layout system when enabled in Sass.

Conceptually:

```html
<div class="grid">
  <div class="g-col-6">1</div>
  <div class="g-col-6">2</div>
</div>
```

Bootstrap's standard Flexbox grid is the default and most widely used. Use Bootstrap CSS Grid when its two-dimensional layout model better matches your design and your project has enabled the required option.

### Flexbox grid vs CSS Grid

Use Flexbox grid when:

- building standard responsive page rows
- your team already uses Bootstrap's normal grid
- content is mostly one-dimensional per row

Consider CSS Grid when:

- rows and columns both need stronger control
- you need explicit placement
- you are building dashboard-like layouts

---

# 14. Typography

Bootstrap provides typography styles and utility classes.

## 14.1 Headings

Normal HTML:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

Heading appearance without heading semantics:

```html
<p class="h1">Looks like h1</p>
```

Do not choose heading tags only for visual size. Use semantic heading order for accessibility and structure.

## 14.2 Display headings

```html
<h1 class="display-1">Huge heading</h1>
<h1 class="display-6">Smaller display heading</h1>
```

Useful for hero sections.

## 14.3 Lead text

```html
<p class="lead">
  This paragraph stands out from normal body text.
</p>
```

## 14.4 Inline text elements

```html
<p>You can use <mark>mark</mark>.</p>
<p><del>Deleted text</del></p>
<p><s>Incorrect text</s></p>
<p><ins>Inserted text</ins></p>
<p><u>Underlined text</u></p>
<p><small>Small text</small></p>
<p><strong>Important text</strong></p>
<p><em>Emphasized text</em></p>
```

## 14.5 Text alignment

```html
<p class="text-start">Start</p>
<p class="text-center">Center</p>
<p class="text-end">End</p>
```

Responsive:

```html
<p class="text-center text-md-start">
  Centered on mobile, start aligned on medium+
</p>
```

## 14.6 Text wrapping and truncation

No wrapping:

```html
<div class="text-nowrap">...</div>
```

Truncation:

```html
<div class="text-truncate" style="max-width: 220px;">
  Very long filename or title...
</div>
```

## 14.7 Font weight and style

```html
<p class="fw-bold">Bold</p>
<p class="fw-semibold">Semibold</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">Light</p>
<p class="fst-italic">Italic</p>
```

## 14.8 Line height

```html
<p class="lh-1">Tight</p>
<p class="lh-sm">Small line-height</p>
<p class="lh-base">Base</p>
<p class="lh-lg">Large</p>
```

---

# 15. Images and Figures

## 15.1 Responsive images

```html
<img src="photo.jpg" class="img-fluid" alt="Mountain landscape">
```

Conceptually:

```css
max-width: 100%;
height: auto;
```

This prevents an image from overflowing its container.

## 15.2 Thumbnail

```html
<img src="avatar.jpg" class="img-thumbnail" alt="User avatar">
```

## 15.3 Rounded image

```html
<img src="avatar.jpg" class="rounded" alt="User">
```

Circle:

```html
<img src="avatar.jpg" class="rounded-circle" alt="User">
```

For a true circle, the rendered width and height should be equal.

## 15.4 Figures

```html
<figure class="figure">
  <img src="chart.png" class="figure-img img-fluid rounded" alt="Revenue chart">
  <figcaption class="figure-caption text-end">
    Revenue by quarter
  </figcaption>
</figure>
```

---

# 16. Tables

Basic table:

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Asha</td>
      <td>asha@example.com</td>
    </tr>
  </tbody>
</table>
```

## Common table classes

```text
table-striped
 table-hover
 table-bordered
 table-borderless
 table-sm
```

Example:

```html
<table class="table table-striped table-hover align-middle">
```

## Responsive tables

Wrap table:

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

This is very important for wide tables on mobile.

### Scenario: admin report

```html
<div class="table-responsive">
  <table class="table table-striped table-hover align-middle">
    <thead class="table-light">
      <tr>
        <th>Invoice</th>
        <th>Vendor</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Created</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>INV-1001</td>
        <td>ABC Pvt Ltd</td>
        <td>₹25,000</td>
        <td><span class="badge text-bg-warning">Pending</span></td>
        <td>13 Aug 2026</td>
        <td><button class="btn btn-sm btn-outline-primary">View</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

For large datasets, Bootstrap only styles the table. Pagination, sorting, server-side querying, virtual scrolling, and filtering are application concerns.

---

# 17. Forms Overview

Bootstrap styles native form elements with consistent classes.

Common form classes:

```text
.form-label
.form-control
.form-select
.form-check
.form-range
.input-group
.form-floating
.valid-feedback
.invalid-feedback
```

Basic form:

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>

  <button class="btn btn-primary" type="submit">Login</button>
</form>
```

---

# 18. Form Controls

## 18.1 Text input

```html
<input type="text" class="form-control">
```

## 18.2 Textarea

```html
<textarea class="form-control" rows="4"></textarea>
```

## 18.3 Sizes

```html
<input class="form-control form-control-lg" placeholder="Large">
<input class="form-control" placeholder="Default">
<input class="form-control form-control-sm" placeholder="Small">
```

## 18.4 Disabled

```html
<input class="form-control" disabled value="Cannot edit">
```

## 18.5 Readonly

```html
<input class="form-control" readonly value="Readable, not editable">
```

## 18.6 Plain text

```html
<input class="form-control-plaintext" readonly value="user@example.com">
```

### Disabled vs readonly

```text
disabled → cannot interact; normally not submitted by browser form submission
readonly → cannot edit but still behaves as a form value in normal submission
```

---

# 19. Select, Checkboxes, Radios, Switches, and Range

## Select

```html
<select class="form-select">
  <option selected>Select city</option>
  <option>Mumbai</option>
  <option>Pune</option>
</select>
```

Sizes:

```html
<select class="form-select form-select-lg">...</select>
<select class="form-select form-select-sm">...</select>
```

## Checkbox

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="terms">
  <label class="form-check-label" for="terms">
    Accept terms
  </label>
</div>
```

## Radio

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="plan" id="basic">
  <label class="form-check-label" for="basic">Basic</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="plan" id="pro">
  <label class="form-check-label" for="pro">Pro</label>
</div>
```

## Switch

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="notifications">
  <label class="form-check-label" for="notifications">Notifications</label>
</div>
```

## Inline checks

```html
<div class="form-check form-check-inline">...</div>
```

## Range

```html
<label for="volume" class="form-label">Volume</label>
<input type="range" class="form-range" min="0" max="100" id="volume">
```

---

# 20. Input Groups and Floating Labels

## Input group

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>
```

Currency example:

```html
<div class="input-group">
  <span class="input-group-text">₹</span>
  <input type="number" class="form-control" aria-label="Amount">
  <span class="input-group-text">.00</span>
</div>
```

Button inside input group:

```html
<div class="input-group">
  <input class="form-control" placeholder="Search">
  <button class="btn btn-outline-secondary" type="button">Search</button>
</div>
```

## Floating labels

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
  <label for="floatingEmail">Email address</label>
</div>
```

The placeholder attribute is important for the floating-label technique, even when its visible role is limited.

Textarea:

```html
<div class="form-floating">
  <textarea class="form-control" placeholder="Comment" id="comment"></textarea>
  <label for="comment">Comment</label>
</div>
```

---

# 21. Form Layout

Forms often combine grid and spacing utilities.

## Two-column form

```html
<div class="row g-3">
  <div class="col-md-6">
    <label class="form-label" for="firstName">First name</label>
    <input class="form-control" id="firstName">
  </div>

  <div class="col-md-6">
    <label class="form-label" for="lastName">Last name</label>
    <input class="form-control" id="lastName">
  </div>

  <div class="col-12">
    <label class="form-label" for="address">Address</label>
    <input class="form-control" id="address">
  </div>

  <div class="col-md-6">
    <label class="form-label" for="city">City</label>
    <input class="form-control" id="city">
  </div>

  <div class="col-md-4">
    <label class="form-label" for="state">State</label>
    <select class="form-select" id="state">...</select>
  </div>

  <div class="col-md-2">
    <label class="form-label" for="zip">ZIP</label>
    <input class="form-control" id="zip">
  </div>
</div>
```

### Scenario logic

```text
mobile → fields stack vertically
md+    → fields use assigned column widths
```

---

# 22. Validation

Bootstrap can style native browser validation states and custom validation states.

## Server-side style example

```html
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input
    type="email"
    class="form-control is-invalid"
    id="email"
    value="wrong-value"
  >
  <div class="invalid-feedback">
    Please enter a valid email address.
  </div>
</div>
```

Valid state:

```html
<input class="form-control is-valid">
<div class="valid-feedback">Looks good!</div>
```

## Browser validation pattern

```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input id="username" class="form-control" required>
    <div class="invalid-feedback">Username is required.</div>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
```

```js
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  });
});
```

### Important

Bootstrap provides presentation. Your application must still validate data on the server. Client-side validation alone is never sufficient for security or data integrity.

---
# 23. Buttons and Button Groups

Bootstrap buttons are one of the most recognizable component patterns.

## 23.1 Basic buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
```

Use variants semantically when possible:

```text
primary   → main action
secondary → alternate action
success   → positive/complete action
danger    → destructive action
warning   → caution
info      → informational action
```

Do not rely on color alone to communicate meaning.

## 23.2 Outline buttons

```html
<button class="btn btn-outline-primary">Edit</button>
<button class="btn btn-outline-danger">Delete</button>
```

Useful for secondary actions or visually lighter interfaces.

## 23.3 Sizes

```html
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-sm">Small</button>
```

## 23.4 Full-width button

Bootstrap 5 does not need an old `.btn-block` class. Use display utilities:

```html
<div class="d-grid">
  <button class="btn btn-primary">Continue</button>
</div>
```

Responsive example:

```html
<div class="d-grid d-sm-block">
  <button class="btn btn-primary">Save</button>
</div>
```

Mobile: full width. Small+ screens: natural width.

## 23.5 Disabled state

```html
<button class="btn btn-primary" disabled>Saving...</button>
```

For links styled as buttons:

```html
<a class="btn btn-primary disabled" aria-disabled="true">Unavailable</a>
```

Remember that a disabled-looking link may still need application logic and correct accessibility handling to prevent activation.

## 23.6 Button groups

```html
<div class="btn-group" role="group" aria-label="Text alignment">
  <button class="btn btn-outline-secondary">Left</button>
  <button class="btn btn-outline-secondary">Center</button>
  <button class="btn btn-outline-secondary">Right</button>
</div>
```

Vertical:

```html
<div class="btn-group-vertical">...</div>
```

### Scenario: record actions

```html
<div class="btn-group btn-group-sm" role="group" aria-label="Invoice actions">
  <button class="btn btn-outline-primary">View</button>
  <button class="btn btn-outline-secondary">Edit</button>
  <button class="btn btn-outline-danger">Delete</button>
</div>
```

---

# 24. Alerts, Badges, Breadcrumbs, and Close Buttons

## 24.1 Alerts

```html
<div class="alert alert-success" role="alert">
  Profile saved successfully.
</div>
```

Variants include:

```text
alert-primary
alert-secondary
alert-success
alert-danger
alert-warning
alert-info
alert-light
alert-dark
```

Dismissible alert:

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Your session will expire soon.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
</div>
```

Requires Bootstrap JavaScript for dismiss behavior.

### Good use

```text
Form submitted successfully.
Payment failed.
Your password expires soon.
```

### Poor use

Do not use an alert component for every normal paragraph or status. Too many alerts make important feedback less noticeable.

## 24.2 Badges

```html
<span class="badge text-bg-primary">New</span>
<span class="badge text-bg-success">Approved</span>
<span class="badge text-bg-warning">Pending</span>
<span class="badge text-bg-danger">Rejected</span>
```

Rounded pill:

```html
<span class="badge rounded-pill text-bg-info">12</span>
```

### Scenario: order status

```html
<td>
  <span class="badge text-bg-success">Delivered</span>
</td>
```

## 24.3 Breadcrumb

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/products">Products</a></li>
    <li class="breadcrumb-item active" aria-current="page">Laptop</li>
  </ol>
</nav>
```

Breadcrumbs should reflect information hierarchy, not browser history.

## 24.4 Close button

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

Use it with modal, toast, alert, offcanvas, or custom dismissible panels.

---

# 25. Cards

Cards are flexible containers for grouped content.

Basic card:

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Starter Plan</h5>
    <p class="card-text">Perfect for individuals.</p>
    <a href="#" class="btn btn-primary">Choose plan</a>
  </div>
</div>
```

## 25.1 Card parts

```html
<div class="card">
  <div class="card-header">Featured</div>
  <img src="product.jpg" class="card-img-top" alt="Product">
  <div class="card-body">
    <h5 class="card-title">Product title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Category</h6>
    <p class="card-text">Description.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Feature A</li>
    <li class="list-group-item">Feature B</li>
  </ul>
  <div class="card-footer text-body-secondary">Updated today</div>
</div>
```

## 25.2 Responsive card grid

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
  <div class="col">
    <article class="card h-100">
      <img src="p1.jpg" class="card-img-top" alt="Product 1">
      <div class="card-body d-flex flex-column">
        <h2 class="h5 card-title">Product 1</h2>
        <p class="card-text">Description...</p>
        <a href="#" class="btn btn-primary mt-auto">View</a>
      </div>
    </article>
  </div>
</div>
```

Key idea:

```text
h-100                 → equal-height cards in their grid row
d-flex flex-column    → card body becomes vertical flex container
mt-auto               → button pushed toward bottom
```

## 25.3 Pricing card

```html
<div class="card text-center shadow-sm">
  <div class="card-header">Professional</div>
  <div class="card-body">
    <h2 class="card-title">₹999 <small class="text-body-secondary fs-6">/month</small></h2>
    <ul class="list-unstyled my-4">
      <li>10 projects</li>
      <li>50 GB storage</li>
      <li>Email support</li>
    </ul>
    <div class="d-grid">
      <button class="btn btn-primary">Start free trial</button>
    </div>
  </div>
</div>
```

---

# 26. Navigation, Tabs, Pills, and Navbar

## 26.1 Basic nav

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Products</a>
  </li>
</ul>
```

## 26.2 Tabs

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile">
      Profile
    </button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#security">
      Security
    </button>
  </li>
</ul>

<div class="tab-content pt-3">
  <div class="tab-pane fade show active" id="profile">Profile content</div>
  <div class="tab-pane fade" id="security">Security content</div>
</div>
```

## 26.3 Pills

```html
<ul class="nav nav-pills">
  <li class="nav-item"><a class="nav-link active" href="#">Overview</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Analytics</a></li>
</ul>
```

## 26.4 Navbar

A standard responsive navbar:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Acme</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Docs</a></li>
            <li><a class="dropdown-item" href="#">Support</a></li>
          </ul>
        </li>
      </ul>

      <a class="btn btn-primary" href="#">Sign in</a>
    </div>
  </div>
</nav>
```

### `navbar-expand-lg`

Meaning:

```text
below lg → collapsed mobile navigation
lg+      → expanded navigation
```

### Useful navbar classes

```text
navbar
navbar-expand-sm/md/lg/xl/xxl
navbar-brand
navbar-nav
nav-item
nav-link
navbar-toggler
navbar-toggler-icon
navbar-collapse
```

### Sticky navbar

```html
<nav class="navbar sticky-top bg-body">...</nav>
```

Fixed navbar:

```html
<nav class="navbar fixed-top bg-body">...</nav>
```

A fixed navbar is removed from normal document flow, so your page may need top spacing to keep content from hiding underneath it.

---

# 27. List Groups and Pagination

## 27.1 List group

```html
<ul class="list-group">
  <li class="list-group-item">Dashboard</li>
  <li class="list-group-item">Orders</li>
  <li class="list-group-item">Customers</li>
</ul>
```

Active item:

```html
<li class="list-group-item active" aria-current="true">Dashboard</li>
```

Links:

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Dashboard</a>
  <a href="#" class="list-group-item list-group-item-action">Reports</a>
</div>
```

Flush:

```html
<ul class="list-group list-group-flush">...</ul>
```

Horizontal:

```html
<ul class="list-group list-group-horizontal">...</ul>
```

## 27.2 Pagination

```html
<nav aria-label="Search results pages">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

Sizing:

```html
<ul class="pagination pagination-sm">...</ul>
<ul class="pagination pagination-lg">...</ul>
```

Alignment:

```html
<ul class="pagination justify-content-center">...</ul>
```

---

# 28. Accordion and Collapse

## 28.1 Collapse

Button toggles hidden content:

```html
<button
  class="btn btn-primary"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#details"
  aria-expanded="false"
  aria-controls="details"
>
  Show details
</button>

<div class="collapse mt-3" id="details">
  <div class="card card-body">
    Hidden details are here.
  </div>
</div>
```

## 28.2 Accordion

```html
<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqOne"
        aria-expanded="true"
        aria-controls="faqOne"
      >
        What is Bootstrap?
      </button>
    </h2>

    <div
      id="faqOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#faqAccordion"
    >
      <div class="accordion-body">
        Bootstrap is a frontend toolkit.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqTwo"
        aria-expanded="false"
        aria-controls="faqTwo"
      >
        Is Bootstrap responsive?
      </button>
    </h2>

    <div
      id="faqTwo"
      class="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div class="accordion-body">
        Yes. Bootstrap is designed around mobile-first responsive patterns.
      </div>
    </div>
  </div>
</div>
```

### Scenario: FAQ

Accordion works well when users need to scan many questions but only read a few answers.

Avoid hiding information in accordions if most users must read every section.

---

# 29. Dropdowns

Basic dropdown:

```html
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Actions
  </button>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">View</a></li>
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><button class="dropdown-item text-danger" type="button">Delete</button></li>
  </ul>
</div>
```

## Alignment

```html
<ul class="dropdown-menu dropdown-menu-end">
```

## Headers

```html
<li><h6 class="dropdown-header">Account</h6></li>
```

## Disabled item

```html
<a class="dropdown-item disabled" aria-disabled="true">Unavailable</a>
```

### Scenario: row action menu

Instead of displaying five buttons in every table row:

```html
<div class="dropdown">
  <button class="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
    Actions
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item">Open</button></li>
    <li><button class="dropdown-item">Duplicate</button></li>
    <li><button class="dropdown-item text-danger">Delete</button></li>
  </ul>
</div>
```

This reduces visual clutter.

---

# 30. Modal

A modal overlays page content for focused interaction.

## 30.1 Modal markup

```html
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Open modal
</button>

<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Edit user</h2>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        Modal content...
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## 30.2 Sizes

```html
<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>
```

## 30.3 Centered modal

```html
<div class="modal-dialog modal-dialog-centered">...</div>
```

## 30.4 Scrollable modal

```html
<div class="modal-dialog modal-dialog-scrollable">...</div>
```

## 30.5 Fullscreen responsive modal

```html
<div class="modal-dialog modal-fullscreen-md-down">...</div>
```

Useful when a form should use the full screen on mobile but appear as a dialog on desktop.

## 30.6 Programmatic modal

```js
const element = document.getElementById('exampleModal');
const modal = new bootstrap.Modal(element);
modal.show();
```

### When to use a modal

Good:

- short confirmation
- quick form
- focused preview
- small edit operation

Avoid for:

- very long workflows
- complex multi-page processes
- content users may need to bookmark

---

# 31. Offcanvas

Offcanvas is a panel that slides from an edge of the viewport.

Common uses:

- mobile navigation
- filters
- shopping cart
- settings panel
- contextual details

```html
<button
  class="btn btn-primary"
  data-bs-toggle="offcanvas"
  data-bs-target="#filters"
  aria-controls="filters"
>
  Filters
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="filters" aria-labelledby="filtersLabel">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5" id="filtersLabel">Filters</h2>
    <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
    Filter controls...
  </div>
</div>
```

Directions:

```text
offcanvas-start
offcanvas-end
offcanvas-top
offcanvas-bottom
```

### Responsive offcanvas

Bootstrap supports responsive variants such as:

```html
<div class="offcanvas-lg offcanvas-start">...</div>
```

Conceptually:

```text
small screens → offcanvas behavior
large+        → content remains visible
```

Excellent for responsive dashboard sidebars.

---

# 32. Carousel

Carousel cycles through slides.

```html
<div id="heroCarousel" class="carousel slide">
  <div class="carousel-indicators">
    <button data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100" alt="First promotion">
    </div>

    <div class="carousel-item">
      <img src="slide2.jpg" class="d-block w-100" alt="Second promotion">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### UX caution

Carousels are often overused. If critical information is placed only on later slides, users may never see it. Use them when cycling content genuinely supports the task.

---

# 33. Tooltips and Popovers

Tooltips and popovers require initialization in many normal setups.

## 33.1 Tooltip

```html
<button
  type="button"
  class="btn btn-secondary"
  data-bs-toggle="tooltip"
  data-bs-title="Delete this record"
>
  Delete
</button>
```

Initialize:

```js
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
```

Use tooltips for supplementary hints, not essential information.

## 33.2 Popover

```html
<button
  type="button"
  class="btn btn-lg btn-danger"
  data-bs-toggle="popover"
  data-bs-title="Warning"
  data-bs-content="This action cannot be undone."
>
  Details
</button>
```

Initialize:

```js
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverTriggerList].map(el => new bootstrap.Popover(el));
```

Tooltip vs popover:

```text
Tooltip → short hint
Popover → richer small block with title/content
```

---

# 34. Toasts

Toasts are lightweight notifications.

```html
<div class="toast" role="status" aria-live="polite" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">System</strong>
    <small>now</small>
    <button class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    File uploaded successfully.
  </div>
</div>
```

Programmatically show:

```js
const toastElement = document.querySelector('.toast');
const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
toast.show();
```

### Toast container

```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  ...toasts...
</div>
```

### Use cases

```text
Saved successfully
Copied to clipboard
Upload completed
Background export started
Connection restored
```

Do not use an auto-disappearing toast for critical errors that users must act on.

---

# 35. Progress, Spinners, and Placeholders

## 35.1 Progress

```html
<div
  class="progress"
  role="progressbar"
  aria-label="Upload progress"
  aria-valuenow="60"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="progress-bar" style="width: 60%">60%</div>
</div>
```

Striped:

```html
<div class="progress-bar progress-bar-striped" style="width: 60%"></div>
```

Animated:

```html
<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>
```

## 35.2 Spinner

Border spinner:

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

Grow spinner:

```html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

Inside button:

```html
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Saving...</span>
</button>
```

## 35.3 Placeholders / skeleton-like loading

```html
<div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
    </p>
  </div>
</div>
```

Use placeholders when the page structure is known but data is loading.

---

# 36. Scrollspy

Scrollspy updates navigation based on the section currently visible while scrolling.

Useful for:

- long documentation pages
- settings pages
- article table of contents
- product documentation

Conceptual structure:

```html
<nav id="sectionNav" class="navbar">
  <a class="nav-link" href="#section1">Section 1</a>
  <a class="nav-link" href="#section2">Section 2</a>
</nav>

<div
  data-bs-spy="scroll"
  data-bs-target="#sectionNav"
  data-bs-smooth-scroll="true"
  tabindex="0"
>
  <section id="section1">...</section>
  <section id="section2">...</section>
</div>
```

Always verify the current official markup for Scrollspy when using it because behavior and configuration can vary across Bootstrap releases.

---

# 37. Utility Classes

Utilities are one of Bootstrap's most powerful concepts.

Instead of creating a custom class for every small styling change:

```css
.profile-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
```

You can often use:

```html
<div class="d-flex align-items-center p-3 mb-4">
```

Bootstrap utilities cover areas such as:

```text
background
border
color
display
flex
float
interactions
links
object-fit
opacity
overflow
position
shadows
sizing
spacing
text
vertical alignment
visibility
z-index
```

### Utility-first vs component classes

Bootstrap is hybrid:

```text
Component classes → btn, card, navbar, modal
Utility classes   → mt-3, d-flex, text-center, shadow
```

A strong Bootstrap developer knows when to combine both.

---

# 38. Flexbox Utilities

Flex utilities are fundamental for practical Bootstrap work.

## 38.1 Enable flex

```html
<div class="d-flex">...</div>
```

Inline flex:

```html
<div class="d-inline-flex">...</div>
```

Responsive:

```html
<div class="d-md-flex">...</div>
```

## 38.2 Direction

```html
<div class="d-flex flex-row">...</div>
<div class="d-flex flex-column">...</div>
```

Responsive:

```html
<div class="d-flex flex-column flex-md-row">...</div>
```

Scenario:

```text
mobile  → vertical controls
md+     → horizontal controls
```

## 38.3 Justify content

```text
justify-content-start
justify-content-end
justify-content-center
justify-content-between
justify-content-around
justify-content-evenly
```

Example navbar actions:

```html
<div class="d-flex justify-content-between">
  <span>Title</span>
  <button class="btn btn-primary">Add</button>
</div>
```

## 38.4 Align items

```text
align-items-start
align-items-end
align-items-center
align-items-baseline
align-items-stretch
```

Example:

```html
<div class="d-flex align-items-center gap-2">
  <img class="rounded-circle" width="40" height="40" src="avatar.jpg" alt="">
  <div>
    <strong>Asha Rao</strong>
    <div class="small text-body-secondary">Administrator</div>
  </div>
</div>
```

## 38.5 `ms-auto` / `me-auto`

Bootstrap 5 uses logical direction names:

```text
s → start
e → end
```

Example:

```html
<div class="d-flex">
  <span>Logo</span>
  <button class="btn btn-primary ms-auto">Login</button>
</div>
```

`ms-auto` pushes the button toward the end.

## 38.6 Wrap

```html
<div class="d-flex flex-wrap gap-2">...</div>
```

Useful for chip/tag lists.

## 38.7 Grow and shrink

```html
<div class="d-flex">
  <div class="flex-grow-1">Flexible content</div>
  <div>Fixed content</div>
</div>
```

## 38.8 Gap

```html
<div class="d-flex gap-3">...</div>
```

Responsive:

```html
<div class="d-flex gap-2 gap-lg-4">...</div>
```

### Gap vs margin

Prefer `gap` when spacing siblings inside Flexbox/Grid because it expresses the relationship directly and avoids first/last-child margin cleanup.

---

# 39. Spacing Utilities

Spacing notation is extremely important.

Pattern:

```text
{property}{side}-{size}
{property}{side}-{breakpoint}-{size}
```

Property:

```text
m = margin
p = padding
```

Sides:

```text
t = top
b = bottom
s = start
e = end
x = horizontal
y = vertical
(no side) = all sides
```

Sizes commonly:

```text
0, 1, 2, 3, 4, 5, auto
```

Examples:

```text
m-0     margin: 0
mt-3    margin-top
mb-4    margin-bottom
ms-auto margin-inline-start: auto
mx-auto horizontal auto margins
p-3     padding all sides
px-4    horizontal padding
py-5    vertical padding
```

Responsive:

```html
<section class="py-3 py-md-5 py-xl-6">
```

Note: default Bootstrap spacing scale normally exposes utilities through `5`; additional values require customization. If you see a custom class like `py-6`, it only works if your project's utility scale defines it.

A standard safe example is:

```html
<section class="py-3 py-md-5">
```

## Scenario: responsive page spacing

```html
<main class="container py-3 py-lg-5">
```

Mobile gets tighter spacing; desktop gets more breathing room.

## Negative margins

Negative margin utilities are not enabled in every Bootstrap build by default. They can be enabled through Sass configuration. Do not assume classes such as `mt-n1` exist unless your build includes them.

---

# 40. Sizing, Display, Overflow, Position, and Z-index

## 40.1 Width

```text
w-25
w-50
w-75
w-100
w-auto
```

Example:

```html
<div class="w-50">50% width</div>
```

## 40.2 Height

```text
h-25
h-50
h-75
h-100
h-auto
```

## 40.3 Max width / height

```text
mw-100
mh-100
```

## 40.4 Viewport sizing

```text
vw-100
vh-100
min-vw-100
min-vh-100
```

Hero example:

```html
<section class="min-vh-100 d-flex align-items-center">
  <div class="container">...</div>
</section>
```

## 40.5 Display

```text
d-none
d-inline
d-inline-block
d-block
d-grid
d-flex
d-inline-flex
```

Responsive:

```html
<div class="d-none d-md-block">Visible on md+</div>
```

Print utilities can also control print visibility.

## 40.6 Overflow

```text
overflow-auto
overflow-hidden
overflow-visible
overflow-scroll
```

Example:

```html
<div class="overflow-auto" style="max-height: 300px;">
  Long content...
</div>
```

## 40.7 Position

```text
position-static
position-relative
position-absolute
position-fixed
position-sticky
```

Directional utilities:

```text
top-0
top-50
top-100
bottom-0
start-0
start-50
end-0
translate-middle
```

Notification badge:

```html
<button class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
    9
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

## 40.8 Z-index

Bootstrap provides a coordinated z-index system for layered components such as dropdowns, sticky elements, fixed elements, offcanvas, modal backdrops, modals, popovers, and tooltips.

Avoid randomly using values like:

```css
z-index: 99999999;
```

That usually creates future layering problems. Understand the stacking context first.

---

# 41. Text, Colors, Backgrounds, Borders, and Shadows

## 41.1 Text colors

```html
<p class="text-primary">Primary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-body-secondary">Secondary body text</p>
```

Bootstrap 5.3 increasingly uses semantic body/emphasis variables that adapt well to color modes.

## 41.2 Background

```html
<div class="bg-primary text-white">Primary background</div>
```

Convenient combined contrast helper:

```html
<span class="badge text-bg-primary">Primary</span>
```

## 41.3 Opacity

```html
<div class="opacity-25">25%</div>
<div class="opacity-50">50%</div>
<div class="opacity-75">75%</div>
<div class="opacity-100">100%</div>
```

Text/background opacity has dedicated patterns as well.

## 41.4 Borders

```text
border
border-0
border-top
border-end
border-bottom
border-start
border-primary
border-success
border-danger
```

Rounded:

```text
rounded
rounded-0
rounded-1
rounded-2
rounded-3
rounded-4
rounded-5
rounded-circle
rounded-pill
```

Example:

```html
<div class="border rounded-3 p-3">Panel</div>
```

## 41.5 Shadows

```html
<div class="shadow-none">...</div>
<div class="shadow-sm">...</div>
<div class="shadow">...</div>
<div class="shadow-lg">...</div>
```

Use shadows intentionally. Too many elevated surfaces make hierarchy unclear.

---

# 42. Helpers

Helpers solve common layout/accessibility patterns that do not fit neatly into one utility.

Important examples include:

- clearfix
- color/background combinations
- colored links
- focus ring
- icon link
- position helpers
- ratio
- stacks
- stretched link
- text truncation
- vertical rule
- visually hidden

## 42.1 Ratio

Responsive video/embed:

```html
<div class="ratio ratio-16x9">
  <iframe src="https://example.com/embed" title="Video" allowfullscreen></iframe>
</div>
```

Ratios:

```text
ratio-1x1
ratio-4x3
ratio-16x9
ratio-21x9
```

## 42.2 Stacks

Vertical stack:

```html
<div class="vstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Horizontal stack:

```html
<div class="hstack gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div class="ms-auto">Item 3</div>
</div>
```

## 42.3 Stretched link

```html
<div class="card position-relative">
  <div class="card-body">
    <h2 class="h5">Article title</h2>
    <p>Summary...</p>
    <a href="article.html" class="stretched-link">Read more</a>
  </div>
</div>
```

Makes a larger containing region clickable via the link's pseudo-element. Test nested interactive elements carefully.

## 42.4 Visually hidden

```html
<span class="visually-hidden">Loading...</span>
```

Content is hidden visually but remains available to assistive technology.

Focusable version:

```html
<a class="visually-hidden-focusable" href="#main">Skip to main content</a>
```

## 42.5 Vertical rule

```html
<div class="vr"></div>
```

Useful inside Flexbox layouts.

## 42.6 Focus ring

```html
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Focusable link
</a>
```

Focus indication is essential for keyboard users; do not remove focus styles without providing an accessible replacement.

---
# 43. Color Modes and Dark Mode

Bootstrap 5.3 includes a color-mode system built around the `data-bs-theme` attribute and CSS custom properties.

## 43.1 Dark mode on the whole document

```html
<html lang="en" data-bs-theme="dark">
```

This tells compatible Bootstrap styles to use dark-mode variables.

## 43.2 Dark mode on only one component/region

```html
<div class="card" data-bs-theme="dark">
  <div class="card-body">
    <h2 class="card-title">Dark card</h2>
  </div>
</div>
```

The rest of the page can remain light.

## 43.3 Theme switcher concept

```html
<button id="themeToggle" class="btn btn-outline-secondary">
  Toggle theme
</button>
```

```js
const root = document.documentElement;
const button = document.getElementById('themeToggle');

button.addEventListener('click', () => {
  const current = root.getAttribute('data-bs-theme') || 'light';
  root.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
});
```

Persist preference:

```js
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-bs-theme', savedTheme);
}

function setTheme(theme) {
  root.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
}
```

A polished implementation may also respect:

```js
window.matchMedia('(prefers-color-scheme: dark)').matches
```

### Three-mode approach

Many applications support:

```text
Light
Dark
Auto / System
```

For `Auto`, listen to the operating system preference instead of forcing a fixed theme.

## 43.4 Custom color modes

You can create custom theme scopes by defining CSS variables for a selector such as:

```css
[data-bs-theme="brand"] {
  --bs-body-bg: #101828;
  --bs-body-color: #f8fafc;
  --bs-primary: #7c3aed;
}
```

Color-mode customization is more powerful when you understand Bootstrap's CSS variable architecture.

---

# 44. CSS Variables

Bootstrap exposes many values as CSS custom properties.

Example variables include concepts such as:

```css
--bs-body-font-family
--bs-body-font-size
--bs-body-color
--bs-body-bg
--bs-primary
--bs-border-color
--bs-border-radius
```

Component-level variables also exist for many Bootstrap components.

## 44.1 Why CSS variables matter

Traditional Sass variable:

```scss
$primary: #0d6efd;
```

is resolved at build time.

CSS variable:

```css
--bs-primary: #0d6efd;
```

exists at runtime and can be overridden by CSS cascade/scope.

## 44.2 Scoped customization

```css
.special-panel {
  --bs-border-color: #7c3aed;
  --bs-border-radius: 1rem;
}
```

Then Bootstrap components inside the panel may use these inherited values where supported.

## 44.3 Component customization

Inspect a component's documentation or compiled CSS for component-local variables.

Conceptual example:

```css
.my-card {
  --bs-card-border-radius: 1rem;
  --bs-card-border-color: rgba(0, 0, 0, .08);
}
```

This can be cleaner than writing selectors that fight the original component's internal declarations.

## 44.4 CSS variables vs Sass

Use CSS variables when:

- theme values must change at runtime
- dark/light modes switch without recompilation
- customization is local to one section/component
- you want cascade-based theming

Use Sass when:

- generating a custom Bootstrap build
- changing utility maps
- changing breakpoints
- adding/removing theme colors
- changing structural configuration before CSS is generated

Often the best architecture uses **both**.

---

# 45. Sass Customization

Bootstrap's source is written with Sass. Sass customization gives deeper control than overriding compiled CSS after the fact.

## 45.1 Install

```bash
npm install bootstrap sass
```

## 45.2 Basic custom entry file

```scss
// 1. Custom variable overrides
$primary: #6f42c1;
$success: #198754;
$border-radius: .75rem;
$font-family-sans-serif: Inter, system-ui, -apple-system, sans-serif;

// 2. Import Bootstrap
@import "bootstrap/scss/bootstrap";

// 3. Application styles
.app-shell {
  min-height: 100vh;
}
```

### Why variables come before import

Many Bootstrap Sass variables use `!default`, which means your value can be supplied before Bootstrap defines its default.

Conceptually:

```scss
$primary: blue !default;
```

means:

> Use blue only if `$primary` does not already have a value.

## 45.3 Custom theme colors

A common technique:

```scss
$primary: #6750a4;
$secondary: #625b71;
$success: #198754;
$danger: #b3261e;

@import "bootstrap/scss/bootstrap";
```

For more advanced additions/removals, work with the theme color Sass map.

## 45.4 Do not edit Bootstrap source in `node_modules`

Bad:

```text
node_modules/bootstrap/scss/_variables.scss
```

Editing it creates upgrades and reproducibility problems.

Good:

```text
src/scss/_variables.scss
src/scss/app.scss
```

Your project owns its customizations and imports Bootstrap.

---

# 46. Sass Maps, Functions, and Mixins

## 46.1 Sass maps

A Sass map is a key-value collection.

```scss
$brand-colors: (
  "brand": #6f42c1,
  "accent": #d63384
);
```

Bootstrap uses maps extensively for:

- theme colors
- breakpoints
- container widths
- spacing
- utilities

## 46.2 Add a custom theme color

A common pattern is to merge into Bootstrap's map at the correct point in the import pipeline.

Conceptual example:

```scss
$custom-colors: (
  "brand": #7c3aed
);

$theme-colors: map-merge($theme-colors, $custom-colors);
```

Then generated classes can include variants based on the updated map, depending on what is generated after the merge.

### Import-order warning

With advanced partial imports, some variables/maps/functions must already be loaded before you modify a map. Follow the official Sass import sequence for the Bootstrap version you are using.

## 46.3 Breakpoint mixins

Bootstrap Sass includes responsive mixins.

Conceptual use:

```scss
@include media-breakpoint-up(md) {
  .dashboard-title {
    font-size: 2rem;
  }
}
```

Meaning:

```text
apply at md and larger
```

Down:

```scss
@include media-breakpoint-down(md) {
  // smaller viewport behavior
}
```

Between:

```scss
@include media-breakpoint-between(md, xl) {
  // md through below xl range
}
```

Only:

```scss
@include media-breakpoint-only(lg) {
  // lg tier only
}
```

## 46.4 Why use Bootstrap mixins?

Instead of hardcoding:

```scss
@media (min-width: 768px) { ... }
```

using Bootstrap's breakpoint mixin ties your custom styles to Bootstrap's configured breakpoint map.

If your team later changes breakpoint values, your custom responsive CSS remains aligned.

---

# 47. Utility API

Bootstrap's Utility API generates utility classes from Sass maps.

This is an advanced but extremely useful feature.

## 47.1 Mental model

Bootstrap can take configuration like:

```text
property: opacity
values: 0, 25, 50, 75, 100
```

and generate classes such as:

```text
opacity-0
opacity-25
opacity-50
opacity-75
opacity-100
```

## 47.2 Create your own utility

Conceptual example:

```scss
$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      values: (
        pointer: pointer,
        default: default,
        wait: wait
      )
    )
  )
);
```

Could generate:

```text
.cursor-pointer
.cursor-default
.cursor-wait
```

## 47.3 Responsive utility

Utilities can be configured to generate breakpoint variants.

Conceptually:

```scss
responsive: true
```

could produce variants such as:

```text
.some-utility-md-value
.some-utility-lg-value
```

based on that utility's configuration.

## 47.4 State utilities

Utilities can also support state variants such as hover where configured.

## 47.5 Why this matters

Imagine a company repeatedly needs:

```css
cursor: pointer;
letter-spacing: ...;
custom widths;
custom opacity values;
```

Instead of creating one-off CSS classes across the codebase, you can generate a consistent utility family through Bootstrap's Sass Utility API.

### Rule of thumb

Use Utility API when the styling concept is:

- small
- reusable
- composable
- predictable
- useful across many components

Use a normal component class when the styling represents a meaningful UI object with multiple coordinated declarations.

---

# 48. Bootstrap JavaScript

Bootstrap's interactive components are implemented with JavaScript.

Examples:

```text
Accordion / Collapse
Carousel
Dropdown
Modal
Offcanvas
Popover
Scrollspy
Tab
Toast
Tooltip
```

## 48.1 CSS-only vs JavaScript components

Pure CSS-style component:

```html
<button class="btn btn-primary">Save</button>
```

No Bootstrap JS is needed.

Interactive component:

```html
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
```

requires Bootstrap JavaScript.

## 48.2 Bundle

Most straightforward:

```html
<script src="bootstrap.bundle.min.js"></script>
```

The bundle includes Popper.

## 48.3 Import individual plugins

With a bundler:

```js
import Modal from 'bootstrap/js/dist/modal';

const modal = new Modal('#exampleModal');
```

Selective imports can reduce shipped JavaScript when your build/toolchain tree-shakes or otherwise excludes unused modules appropriately.

## 48.4 No jQuery requirement

Bootstrap 5's JavaScript does not require jQuery.

Older Bootstrap 4 code often looked like:

```js
$('#myModal').modal('show');
```

Bootstrap 5-style code:

```js
const modal = bootstrap.Modal.getOrCreateInstance('#myModal');
modal.show();
```

---

# 49. Data Attributes and Programmatic APIs

Bootstrap offers two main ways to control interactive components.

## 49.1 Data API

```html
<button data-bs-toggle="modal" data-bs-target="#myModal">
  Open
</button>
```

Benefits:

- little/no custom JS
- declarative
- easy for simple pages

## 49.2 Programmatic API

```js
const modalElement = document.getElementById('myModal');
const modal = new bootstrap.Modal(modalElement, {
  backdrop: 'static',
  keyboard: false
});

modal.show();
```

Benefits:

- dynamic behavior
- application state integration
- runtime configuration
- lifecycle control

## 49.3 Common instance methods

Patterns vary by component, but frequently include concepts like:

```text
show()
hide()
toggle()
dispose()
getInstance()
getOrCreateInstance()
```

Always check the specific component documentation; not every component exposes exactly the same methods.

## 49.4 Data attributes use the `data-bs-` prefix

Bootstrap 5 examples:

```text
data-bs-toggle
data-bs-target
data-bs-dismiss
data-bs-placement
data-bs-title
```

This differs from older Bootstrap versions where attributes commonly lacked the `bs` namespace.

---

# 50. Bootstrap Events

Interactive components expose lifecycle events.

Example modal events conceptually include:

```text
show.bs.modal
shown.bs.modal
hide.bs.modal
hidden.bs.modal
```

Example:

```js
const modal = document.getElementById('editModal');

modal.addEventListener('shown.bs.modal', () => {
  document.getElementById('name').focus();
});
```

### Why both `show` and `shown`?

```text
show.bs.modal   → action has started
shown.bs.modal  → transition has completed and modal is visible
```

Similarly:

```text
hide.bs.modal   → closing begins
hidden.bs.modal → completely hidden
```

### Scenario: clear modal form after close

```js
const modal = document.getElementById('userModal');

modal.addEventListener('hidden.bs.modal', () => {
  modal.querySelector('form')?.reset();
});
```

### Scenario: load data before opening

```js
const modal = document.getElementById('invoiceModal');

modal.addEventListener('show.bs.modal', event => {
  const trigger = event.relatedTarget;
  const invoiceId = trigger?.getAttribute('data-invoice-id');

  if (invoiceId) {
    // Fetch/populate invoice details.
  }
});
```

---

# 51. Accessibility

Bootstrap helps with accessible presentation and component behavior, but **Bootstrap cannot make an application accessible automatically**. Correct semantics, labels, focus order, keyboard support, content, contrast, and application logic remain the developer's responsibility.

## 51.1 Use semantic HTML first

Prefer:

```html
<button type="button">Save</button>
```

over:

```html
<div onclick="save()">Save</div>
```

Bootstrap styles native semantic elements well.

## 51.2 Labels for inputs

Good:

```html
<label for="email" class="form-label">Email</label>
<input id="email" type="email" class="form-control">
```

Avoid unlabeled inputs that depend only on placeholder text.

## 51.3 Meaningful alt text

Informative image:

```html
<img src="chart.png" alt="Revenue increased from ₹4M to ₹6M between Q1 and Q2">
```

Decorative image:

```html
<img src="decorative-wave.svg" alt="">
```

## 51.4 Screen-reader-only content

```html
<span class="visually-hidden">Current page:</span>
```

## 51.5 Skip link

```html
<a class="visually-hidden-focusable" href="#main-content">
  Skip to main content
</a>

<main id="main-content">
  ...
</main>
```

This helps keyboard users bypass repetitive navigation.

## 51.6 Do not remove focus indicators

Bad:

```css
*:focus {
  outline: none !important;
}
```

If you customize focus styles, provide a visible replacement with adequate contrast.

## 51.7 Color is not enough

Bad:

```text
red border = error
```

Better:

```html
<input class="form-control is-invalid" aria-describedby="emailError">
<div id="emailError" class="invalid-feedback">
  Enter a valid email address.
</div>
```

The user receives text plus visual styling.

## 51.8 Accessible buttons with icons

Icon-only button:

```html
<button class="btn btn-outline-danger" aria-label="Delete invoice">
  <svg aria-hidden="true">...</svg>
</button>
```

## 51.9 Heading hierarchy

Prefer:

```text
h1 Page title
  h2 Main section
    h3 Subsection
```

Do not select heading levels merely for size. Use Bootstrap classes such as `.h4` if you need a particular visual size without changing the semantic level.

## 51.10 Tables

Use `<th>` for headers and `scope` when helpful:

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">Invoice</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">INV-1001</th>
      <td>₹25,000</td>
    </tr>
  </tbody>
</table>
```

## 51.11 Modals and keyboard interaction

Bootstrap handles much of the modal mechanics, but you still need:

- clear title
- meaningful controls
- sensible focus target
- no unexpected destructive default action
- accessible error feedback inside forms

## 51.12 Reduced motion

Some users prefer reduced animation. Bootstrap accounts for reduced-motion preferences in various transitions, but your own custom animation should also respect:

```css
@media (prefers-reduced-motion: reduce) {
  .custom-animation {
    animation: none;
    transition: none;
  }
}
```

## Accessibility testing checklist

- Keyboard-only navigation works.
- Focus indicator is visible.
- Tab order is logical.
- Inputs have labels.
- Errors are described in text.
- Modal/dialog flows are keyboard usable.
- Images have correct alt treatment.
- Headings are hierarchical.
- Text/background contrast is adequate.
- Zoom to 200% does not destroy usability.
- Mobile reflow does not force unnecessary two-dimensional scrolling.
- Screen reader testing covers important workflows.

---

# 52. RTL Support

Bootstrap provides RTL builds for right-to-left languages.

Typical document direction:

```html
<html lang="ar" dir="rtl">
```

Use an RTL Bootstrap stylesheet/build appropriate to your project.

## Why Bootstrap 5 uses `start` and `end`

Bootstrap 4 frequently used directional naming such as:

```text
ml-* → margin-left
mr-* → margin-right
```

Bootstrap 5 uses logical direction concepts:

```text
ms-* → margin-start
me-* → margin-end
ps-* → padding-start
pe-* → padding-end
text-start
text-end
```

For LTR English:

```text
start ≈ left
end   ≈ right
```

For RTL Arabic/Hebrew:

```text
start ≈ right
end   ≈ left
```

This makes layouts more adaptable to writing direction.

---

# 53. Icons

Bootstrap's core CSS framework does not require an icon library. **Bootstrap Icons** is a separate official icon project that pairs well with Bootstrap.

Example concept after including Bootstrap Icons:

```html
<i class="bi bi-search" aria-hidden="true"></i>
```

Button:

```html
<button class="btn btn-primary">
  <i class="bi bi-plus-lg" aria-hidden="true"></i>
  Add customer
</button>
```

Icon-only button:

```html
<button class="btn btn-outline-secondary" aria-label="Search">
  <i class="bi bi-search" aria-hidden="true"></i>
</button>
```

### Accessibility rule

If visible text already describes the action, a decorative icon can be hidden from assistive technology.

If the icon is the only visible content, give the button an accessible name with `aria-label` or visible/visually-hidden text.

---

# 54. Performance and Production Optimization

Bootstrap is convenient, but production applications should still care about CSS and JavaScript cost.

## 54.1 Use minified production assets

```text
bootstrap.min.css
bootstrap.bundle.min.js
```

rather than unminified development builds when appropriate.

## 54.2 Import only what you need with Sass

A custom Sass build can omit unused component partials.

Conceptual architecture:

```scss
// Required foundational imports first...
// Then selected layout/components/utilities only.
```

Do not blindly copy a partial-import list from another Bootstrap release. Import dependencies/order from the official docs for your exact version.

## 54.3 Import only required JS plugins

Instead of:

```js
import 'bootstrap';
```

for an application that only uses modals:

```js
import Modal from 'bootstrap/js/dist/modal';
```

Whether this reduces final bundle size depends on your bundler and build configuration.

## 54.4 Avoid huge custom override layers

If your stylesheet contains thousands of declarations like:

```css
.btn-primary { ... !important; }
.card { ... !important; }
.navbar { ... !important; }
```

consider customizing Sass/CSS variables instead of continuously fighting Bootstrap's generated styles.

## 54.5 Avoid excessive `!important`

Bootstrap utilities sometimes intentionally use high specificity/`!important` patterns. Adding more `!important` everywhere creates an override arms race.

Prefer:

- proper source order
- scoped selectors
- CSS variables
- Sass customization
- clear component ownership

## 54.6 Optimize images separately

Bootstrap's `.img-fluid` makes images responsive; it does **not** compress them.

Use:

- correctly sized images
- modern formats where suitable
- responsive image `srcset`
- lazy loading where appropriate

Example:

```html
<img
  src="product-800.webp"
  srcset="product-400.webp 400w, product-800.webp 800w, product-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  class="img-fluid"
  loading="lazy"
  alt="Black wireless headset"
>
```

## 54.7 Measure, do not guess

Use browser DevTools and performance tools to inspect:

- transferred CSS/JS size
- unused CSS
- render-blocking resources
- Core Web Vitals
- image payload
- long JavaScript tasks

---

# 55. Custom CSS Architecture with Bootstrap

A professional project usually needs custom styles beyond Bootstrap.

## 55.1 Recommended separation

```text
src/
├── scss/
│   ├── _variables.scss
│   ├── _utilities.scss
│   ├── components/
│   │   ├── _invoice-card.scss
│   │   ├── _app-sidebar.scss
│   │   └── _data-toolbar.scss
│   ├── pages/
│   │   ├── _dashboard.scss
│   │   └── _login.scss
│   └── app.scss
└── js/
    └── app.js
```

## 55.2 Separate Bootstrap customization from application components

Example:

```scss
// _variables.scss
$primary: #5b5bd6;
$border-radius: .65rem;
```

```scss
// components/_invoice-card.scss
.invoice-card {
  border-inline-start: .25rem solid var(--bs-primary);
}
```

```scss
// app.scss
@import "variables";
@import "bootstrap/scss/bootstrap";
@import "components/invoice-card";
```

## 55.3 Do not make every class Bootstrap-like

Bad application code:

```html
<div class="d-flex flex-column p-3 rounded border shadow-sm bg-body mb-3 position-relative ...">
```

For a one-off/simple composition this may be fine. For a repeated business component, a semantic class may improve maintainability:

```html
<article class="invoice-card">
```

Then:

```scss
.invoice-card {
  @extend ...; // use @extend cautiously
  // or normal CSS declarations / Bootstrap mixins
}
```

A practical compromise:

```html
<article class="invoice-card card shadow-sm">
```

Bootstrap handles generic card behavior; your class handles business-specific styling.

## 55.4 Three layers

Think of styling as:

```text
Bootstrap design system
        ↓
Project theme/tokens
        ↓
Business-specific components
```

This prevents Bootstrap from leaking into every business rule.

---

# 56. Bootstrap with Vite, Webpack, and Modern Tooling

## 56.1 Vite example

Install:

```bash
npm install bootstrap @popperjs/core
npm install -D sass
```

`src/scss/styles.scss`:

```scss
$primary: #6f42c1;

@import "bootstrap/scss/bootstrap";
```

`src/main.js`:

```js
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
```

For selective JavaScript:

```js
import Modal from 'bootstrap/js/dist/modal';
```

## 56.2 Webpack concept

Webpack needs loaders/configuration for Sass/CSS. The conceptual flow is:

```text
SCSS source
   ↓ Sass compiler
CSS
   ↓ PostCSS/Autoprefixer if configured
Bundled/extracted CSS
```

Bootstrap's official documentation provides bundler-specific guides. Follow the current guide because package versions and bundler configuration evolve.

## 56.3 Source maps

Keep source maps in development so DevTools can map compiled CSS to your Sass source.

## 56.4 Production build

A typical production pipeline performs:

```text
compile Sass
bundle JavaScript
minify
fingerprint/hash assets
optimize static resources
```

---

# 57. Bootstrap with React, Angular, Vue, and Server Frameworks

Bootstrap itself can be used anywhere that renders HTML/CSS, but JavaScript component integration deserves care.

## 57.1 React

CSS-only Bootstrap works normally:

```jsx
export default function ProductCard() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h5 card-title">Product</h2>
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  );
}
```

Note React uses:

```text
className
```

instead of HTML `class`.

### JavaScript component caution

Direct DOM-manipulating libraries can conflict with component framework lifecycle if used carelessly. In React, you may choose a React-native Bootstrap component library or explicitly create/dispose Bootstrap plugin instances inside lifecycle hooks.

## 57.2 Angular

Template:

```html
<div class="container py-4">
  <div class="row g-3">
    <div class="col-md-6" *ngFor="let item of items">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5">{{ item.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</div>
```

For interactive components, teams commonly choose either:

- Bootstrap's native JavaScript with lifecycle-aware initialization, or
- an Angular component library implementing Bootstrap styling/patterns.

Do not mix multiple modal/dropdown systems randomly in the same app.

## 57.3 Vue

```vue
<template>
  <button class="btn btn-primary" @click="save">
    Save
  </button>
</template>
```

CSS utilities and components work naturally. For JavaScript plugins, keep ownership consistent with Vue lifecycle/state.

## 57.4 Laravel / Blade

```blade
<div class="container py-4">
    @foreach ($products as $product)
        <div class="card mb-3">
            <div class="card-body">
                <h2 class="h5">{{ $product->name }}</h2>
            </div>
        </div>
    @endforeach
</div>
```

## 57.5 Django templates

```django
<div class="row g-3">
  {% for product in products %}
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5">{{ product.name }}</h2>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
```

## 57.6 ASP.NET Razor

```html
<div class="container py-4">
    <div class="alert alert-success" role="alert">
        @Model.Message
    </div>
</div>
```

### Core rule across frameworks

Bootstrap's **CSS layer** is easy to combine with most frameworks. For Bootstrap's **imperative JavaScript plugins**, ensure initialization/disposal agrees with your framework's component lifecycle.

---
# 58. Common UI Scenarios

This chapter focuses on *reasoning*: given a UI requirement, which Bootstrap tools should you reach for?

## 58.1 Scenario: center a login form

Requirement:

```text
- centered horizontally
- narrow on desktop
- full-width naturally on mobile
- vertically comfortable
```

Solution:

```html
<main class="min-vh-100 d-flex align-items-center bg-body-tertiary py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h1 class="h3 mb-4">Sign in</h1>

            <form>
              <div class="mb-3">
                <label class="form-label" for="loginEmail">Email</label>
                <input id="loginEmail" type="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label" for="loginPassword">Password</label>
                <input id="loginPassword" type="password" class="form-control" required>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
```

Why these classes?

```text
min-vh-100            → at least viewport height
d-flex align-items-center → vertical centering
justify-content-center     → horizontal grid centering
col-* responsive sizes    → adaptive form width
shadow-sm                  → subtle elevation
d-grid                     → full-width submit button
```

---

## 58.2 Scenario: dashboard KPI cards

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <div class="text-body-secondary small">Revenue</div>
        <div class="display-6 fw-semibold">₹12.4L</div>
        <div class="small text-success">↑ 8.2% vs last month</div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <div class="text-body-secondary small">Orders</div>
        <div class="display-6 fw-semibold">1,284</div>
        <div class="small text-body-secondary">42 today</div>
      </div>
    </div>
  </div>
</div>
```

Why `row-cols-*`?

Because the requirement is about **number of cards per row**, not each card's exact 12-column fraction.

---

## 58.3 Scenario: desktop sidebar, mobile offcanvas

Requirement:

```text
mobile → sidebar hidden; open with button
desktop → sidebar permanently visible
```

A responsive offcanvas pattern is ideal.

```html
<button
  class="btn btn-primary d-lg-none mb-3"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#sidebar"
>
  Menu
</button>

<aside class="offcanvas-lg offcanvas-start" tabindex="-1" id="sidebar">
  <div class="offcanvas-header d-lg-none">
    <h2 class="offcanvas-title fs-5">Navigation</h2>
    <button class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebar" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body d-block">
    <nav class="list-group list-group-flush">
      <a class="list-group-item list-group-item-action active" href="#">Dashboard</a>
      <a class="list-group-item list-group-item-action" href="#">Invoices</a>
      <a class="list-group-item list-group-item-action" href="#">Reports</a>
    </nav>
  </div>
</aside>
```

---

## 58.4 Scenario: search/filter toolbar

```html
<div class="d-flex flex-column flex-lg-row gap-2 align-items-lg-center mb-4">
  <div class="input-group flex-grow-1">
    <span class="input-group-text">Search</span>
    <input class="form-control" placeholder="Invoice, vendor, amount...">
  </div>

  <select class="form-select" style="max-width: 220px;">
    <option>All statuses</option>
    <option>Pending</option>
    <option>Approved</option>
  </select>

  <button class="btn btn-outline-secondary">Reset</button>
  <button class="btn btn-primary">Apply</button>
</div>
```

Better production approach: replace inline `style="max-width..."` with a project class if reused.

---

## 58.5 Scenario: mobile-friendly action buttons

Requirement:

```text
mobile → stacked full-width actions
desktop → inline actions aligned right
```

```html
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-outline-secondary">Cancel</button>
  <button class="btn btn-primary">Save changes</button>
</div>
```

---

## 58.6 Scenario: empty state

```html
<section class="text-center py-5">
  <div class="mx-auto" style="max-width: 520px;">
    <h2 class="h4">No invoices found</h2>
    <p class="text-body-secondary">
      Create your first invoice or change the current filters.
    </p>
    <button class="btn btn-primary">Create invoice</button>
  </div>
</section>
```

A real empty state should explain:

1. what happened,
2. whether it is expected,
3. what the user can do next.

---

## 58.7 Scenario: confirmation before destructive action

```html
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="deleteModalTitle">Delete invoice?</h2>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        This permanently deletes invoice <strong>INV-1001</strong>.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-danger">Delete invoice</button>
      </div>
    </div>
  </div>
</div>
```

Design principle: make the destructive action explicit. Do not label both buttons vaguely as “Yes” and “No” when “Delete invoice” and “Cancel” are clearer.

---

## 58.8 Scenario: status workflow

```html
<div class="d-flex flex-wrap gap-2 align-items-center">
  <span class="badge text-bg-success">OCR complete</span>
  <span aria-hidden="true">→</span>
  <span class="badge text-bg-warning">Manager approval</span>
  <span aria-hidden="true">→</span>
  <span class="badge text-bg-secondary">Finance approval</span>
  <span aria-hidden="true">→</span>
  <span class="badge text-bg-secondary">Posted</span>
</div>
```

For accessibility, also provide meaningful text or an ordered list if sequence/status is important.

---

## 58.9 Scenario: two-column detail screen

```html
<div class="row g-4">
  <div class="col-lg-8">
    <div class="card">
      <div class="card-body">
        <h1 class="h4">Invoice details</h1>
        <!-- primary content -->
      </div>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <h2 class="h5">Approval history</h2>
        <!-- secondary information -->
      </div>
    </div>
  </div>
</div>
```

Mobile naturally stacks; desktop becomes 8/4 columns.

---

## 58.10 Scenario: sticky action bar

```html
<div class="position-sticky bottom-0 bg-body border-top py-3">
  <div class="container d-flex justify-content-end gap-2">
    <button class="btn btn-outline-secondary">Cancel</button>
    <button class="btn btn-primary">Save</button>
  </div>
</div>
```

Test sticky/fixed bars against:

- mobile safe areas,
- virtual keyboards,
- long forms,
- focus scrolling,
- screen magnification.

---

# 59. Real-World Page Patterns

## 59.1 Marketing hero

```html
<section class="py-5">
  <div class="container py-lg-5">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge text-bg-primary mb-3">New</span>
        <h1 class="display-4 fw-bold">Build faster with a reusable UI system</h1>
        <p class="lead text-body-secondary">
          Create responsive interfaces without reinventing common layout patterns.
        </p>
        <div class="d-grid gap-2 d-sm-flex mt-4">
          <a class="btn btn-primary btn-lg" href="#">Get started</a>
          <a class="btn btn-outline-secondary btn-lg" href="#">View docs</a>
        </div>
      </div>

      <div class="col-lg-6">
        <img src="hero.webp" class="img-fluid rounded-4 shadow" alt="Application dashboard preview">
      </div>
    </div>
  </div>
</section>
```

## 59.2 Feature section

```html
<section class="py-5 bg-body-tertiary">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Everything you need</h2>
      <p class="text-body-secondary">A consistent toolkit for product teams.</p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="h-100 p-4 bg-body border rounded-3">
          <h3 class="h5">Responsive</h3>
          <p class="mb-0">Build layouts that adapt across device sizes.</p>
        </div>
      </div>
      <div class="col">
        <div class="h-100 p-4 bg-body border rounded-3">
          <h3 class="h5">Composable</h3>
          <p class="mb-0">Combine components with utilities.</p>
        </div>
      </div>
      <div class="col">
        <div class="h-100 p-4 bg-body border rounded-3">
          <h3 class="h5">Customizable</h3>
          <p class="mb-0">Use CSS variables and Sass.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 59.3 Admin dashboard shell

```html
<div class="container-fluid">
  <div class="row min-vh-100">
    <aside class="col-lg-2 d-none d-lg-block border-end bg-body-tertiary p-0">
      <div class="p-3 fw-bold">Admin</div>
      <nav class="nav nav-pills flex-column p-2 gap-1">
        <a class="nav-link active" href="#">Dashboard</a>
        <a class="nav-link text-body" href="#">Users</a>
        <a class="nav-link text-body" href="#">Reports</a>
      </nav>
    </aside>

    <main class="col-lg-10 p-3 p-lg-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0">Dashboard</h1>
        <button class="btn btn-primary">New record</button>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mb-4">
        <div class="col"><div class="card"><div class="card-body">KPI 1</div></div></div>
        <div class="col"><div class="card"><div class="card-body">KPI 2</div></div></div>
        <div class="col"><div class="card"><div class="card-body">KPI 3</div></div></div>
        <div class="col"><div class="card"><div class="card-body">KPI 4</div></div></div>
      </div>

      <div class="card">
        <div class="card-header">Recent activity</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table align-middle mb-0">...</table>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
```

For a production responsive sidebar, combine this idea with responsive Offcanvas rather than simply hiding navigation on mobile.

## 59.4 Profile/settings page

```html
<div class="container py-4">
  <div class="row g-4">
    <aside class="col-lg-3">
      <div class="list-group">
        <a class="list-group-item list-group-item-action active" href="#profile">Profile</a>
        <a class="list-group-item list-group-item-action" href="#security">Security</a>
        <a class="list-group-item list-group-item-action" href="#notifications">Notifications</a>
      </div>
    </aside>

    <main class="col-lg-9">
      <div class="card">
        <div class="card-body p-4">
          <h1 class="h3">Profile</h1>
          <form class="mt-4">
            <!-- form fields -->
          </form>
        </div>
      </div>
    </main>
  </div>
</div>
```

## 59.5 E-commerce product listing

```html
<div class="container py-4">
  <div class="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
    <div>
      <h1 class="h3 mb-1">Headphones</h1>
      <div class="text-body-secondary">128 products</div>
    </div>

    <select class="form-select w-auto" aria-label="Sort products">
      <option>Featured</option>
      <option>Price: low to high</option>
      <option>Price: high to low</option>
    </select>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
    <div class="col">
      <article class="card h-100">
        <img src="headphones.webp" class="card-img-top" alt="Wireless headphones">
        <div class="card-body d-flex flex-column">
          <h2 class="h5 card-title">Wireless Headphones</h2>
          <p class="card-text text-body-secondary">Noise cancelling</p>
          <div class="fw-bold fs-5 mb-3">₹7,999</div>
          <button class="btn btn-primary mt-auto">Add to cart</button>
        </div>
      </article>
    </div>
  </div>
</div>
```

## 59.6 Checkout layout

```html
<div class="container py-5">
  <div class="row g-5">
    <main class="col-lg-7">
      <h1 class="h3 mb-4">Checkout</h1>
      <form>
        <!-- address/payment fields -->
      </form>
    </main>

    <aside class="col-lg-5">
      <div class="card position-sticky" style="top: 1rem;">
        <div class="card-body">
          <h2 class="h5">Order summary</h2>
          <!-- totals -->
        </div>
      </div>
    </aside>
  </div>
</div>
```

Do not use `position-sticky` if the card's height can exceed the viewport in a way that harms access to content; test actual content and zoom levels.

---

# 60. Responsive Design Scenarios

## 60.1 One column → two columns → four columns

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
```

Interpretation:

```text
<768px    1 per row
≥768px    2 per row
≥1200px   4 per row
```

## 60.2 Hide decorative content on small screens

```html
<img class="d-none d-lg-block img-fluid" src="illustration.svg" alt="">
```

If content is informative rather than decorative, hiding it may remove information users need.

## 60.3 Stack toolbar controls

```html
<div class="d-flex flex-column flex-md-row gap-2">
  <input class="form-control" placeholder="Search">
  <button class="btn btn-primary">Filter</button>
</div>
```

## 60.4 Change text alignment

```html
<div class="text-center text-lg-start">...</div>
```

## 60.5 Responsive spacing

```html
<section class="p-3 p-md-4 p-xl-5">...</section>
```

## 60.6 Responsive order

```html
<div class="row">
  <div class="col-lg-6 order-2 order-lg-1">Text</div>
  <div class="col-lg-6 order-1 order-lg-2">Image</div>
</div>
```

Again: preserve meaningful DOM order.

## 60.7 Responsive visibility table

| Goal | Example |
|---|---|
| Mobile only | `d-block d-md-none` |
| Tablet/desktop from md | `d-none d-md-block` |
| Desktop from lg | `d-none d-lg-block` |
| Flex only on md+ | `d-block d-md-flex` |
| Grid only on lg+ | `d-block d-lg-grid` |

## 60.8 Common mobile-first mistake

Developer writes:

```html
<div class="col-lg-4">
```

and expects 1/3 width everywhere.

Actual mental model:

```text
xs-sm-md → full width
lg+      → 4/12 width
```

Because `.col-lg-4` only applies the 4-column width starting at `lg`.

---

# 61. Customization Scenarios

## 61.1 Change brand primary color

Sass approach:

```scss
$primary: #7c3aed;
@import "bootstrap/scss/bootstrap";
```

This is preferable to manually overriding dozens of `.btn-primary`, `.text-primary`, `.bg-primary`, and related component states.

## 61.2 Increase default rounded corners

```scss
$border-radius: .75rem;
$border-radius-sm: .5rem;
$border-radius-lg: 1rem;

@import "bootstrap/scss/bootstrap";
```

## 61.3 Custom font

```scss
$font-family-sans-serif:
  Inter,
  system-ui,
  -apple-system,
  "Segoe UI",
  sans-serif;

@import "bootstrap/scss/bootstrap";
```

Remember to actually load the font if it is not system-installed.

## 61.4 Custom component using CSS variables

```css
.invoice-summary {
  --bs-card-border-color: rgba(var(--bs-primary-rgb), .25);
  --bs-card-cap-bg: rgba(var(--bs-primary-rgb), .08);
}
```

```html
<div class="card invoice-summary">
  ...
</div>
```

## 61.5 Create custom spacing utility

Use Utility API when the design system has spacing values not represented by the default scale and the utility will be broadly useful.

Do **not** casually add dozens of arbitrary spacing classes. A constrained scale improves consistency.

## 61.6 Custom breakpoint

Bootstrap breakpoints can be changed through Sass maps, but this is a major design-system decision.

Before changing:

```text
sm 576
md 768
lg 992
xl 1200
xxl 1400
```

ask:

- Does product design actually need different thresholds?
- Will third-party examples still map correctly?
- Are existing custom media queries coupled to defaults?
- Has the full application been regression-tested?

Changing breakpoints globally is much bigger than changing a color.

---

# 62. Common Mistakes and Debugging

## 62.1 Bootstrap CSS is not loaded

Symptom:

```html
<button class="btn btn-primary">Save</button>
```

looks like a browser-default button.

Check DevTools → Network and confirm Bootstrap CSS loaded successfully.

Also inspect `<link>` path and load order.

---

## 62.2 JavaScript component does nothing

Example:

```html
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
```

No modal opens.

Check:

1. Is Bootstrap JS loaded?
2. Is `bootstrap.bundle.min.js` loaded if Popper-dependent features are used?
3. Is target ID correct?
4. Is there a JavaScript error earlier on the page?
5. Are you mixing Bootstrap 4 markup/attributes with Bootstrap 5 JS?

---

## 62.3 Wrong data attributes after Bootstrap 4 migration

Wrong for Bootstrap 5:

```html
<button data-toggle="modal" data-target="#myModal">
```

Bootstrap 5:

```html
<button data-bs-toggle="modal" data-bs-target="#myModal">
```

---

## 62.4 Using Bootstrap 4 spacing names

Bootstrap 4:

```text
ml-3
mr-3
pl-3
pr-3
```

Bootstrap 5 logical equivalents:

```text
ms-3
me-3
ps-3
pe-3
```

---

## 62.5 Grid columns are not side by side

Check hierarchy.

Correct:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">A</div>
    <div class="col-md-6">B</div>
  </div>
</div>
```

Do not omit `.row` when you expect standard grid gutter/column behavior.

---

## 62.6 Horizontal scrollbar appears

Common causes:

- fixed width wider than viewport
- overflowing image without `.img-fluid`
- long unbreakable content
- incorrectly nested grid/negative gutter behavior
- `100vw` combined with other width/padding choices
- absolute positioned content
- wide tables not wrapped in `.table-responsive`

Debug technique:

Temporarily inspect overflowing elements in DevTools. You can also use a temporary development rule such as:

```css
* {
  outline: 1px solid rgba(255, 0, 0, .15);
}
```

Do not ship such debugging CSS.

---

## 62.7 `h-100` does nothing

Percentage heights require a meaningful height on the containing context.

Example:

```html
<div class="h-100">...</div>
```

will not magically fill the viewport.

For viewport height use:

```html
<div class="min-vh-100">...</div>
```

when that is actually the desired behavior.

---

## 62.8 `mx-auto` does not visibly center element

Auto horizontal margins work when the element has a width narrower than its container.

```html
<div class="w-50 mx-auto">Centered</div>
```

A block already at 100% width cannot visibly move left/right.

---

## 62.9 `text-center` used to center everything

`text-center` centers inline content/text. It is not a universal layout-centering tool.

To center a Flexbox child:

```html
<div class="d-flex justify-content-center align-items-center">...</div>
```

To center a fixed-width block:

```html
<div class="mx-auto" style="width: 300px;">...</div>
```

---

## 62.10 Too many utility classes

This:

```html
<div class="d-flex flex-column position-relative bg-body border rounded-3 shadow-sm p-3 mb-3 overflow-hidden ...">
```

is not inherently wrong. But if repeated 40 times with identical classes, create a component abstraction or reusable template/component.

---

## 62.11 Overusing custom CSS instead of utilities

Before writing:

```css
.mb-24-custom {
  margin-bottom: 1.5rem;
}
```

check whether Bootstrap already has:

```html
<div class="mb-4">...</div>
```

---

## 62.12 Overriding Bootstrap with IDs

Avoid escalation:

```css
#page #main #card .btn.btn-primary {
  ...
}
```

This makes future overrides painful.

Prefer project classes and CSS variables/Sass customization.

---

## 62.13 `!important` everywhere

If every custom rule needs `!important`, investigate:

- load order
- selector specificity
- Bootstrap utilities
- CSS variable options
- Sass configuration

---

## 62.14 Modal appears behind something

This often involves stacking contexts, not simply a low modal z-index.

A parent with properties such as transforms can create a stacking context.

Debug:

- inspect ancestors
- inspect computed z-index
- understand stacking context boundaries
- avoid mounting overlays inside unnecessarily transformed containers

---

## 62.15 Tooltip not appearing

Many tooltip/popover setups require explicit initialization:

```js
new bootstrap.Tooltip(element)
```

Also check that Bootstrap JS and Popper are available as expected.

---

## 62.16 Dropdown clipped

Possible causes:

```css
overflow: hidden;
```

on an ancestor, stacking contexts, or constrained containers.

Inspect parent layout rather than immediately assigning giant z-index values.

---

## 62.17 Dark mode partly works

Possible reason: custom CSS uses hardcoded colors.

Bad for theme switching:

```css
.panel {
  background: white;
  color: black;
}
```

More theme-aware:

```css
.panel {
  background: var(--bs-body-bg);
  color: var(--bs-body-color);
  border-color: var(--bs-border-color);
}
```

---

## 62.18 Responsive class appears ignored

Remember mobile-first cascade.

```html
<div class="d-md-none d-lg-block">
```

Interpret in breakpoint order. Inspect computed `display` at each viewport width.

---

## 62.19 `col-6` creates unexpected wrap

If column widths + custom widths/margins exceed the row's available space, flex items wrap.

Avoid adding arbitrary fixed widths to grid columns unless you understand the interaction.

---

## 62.20 Table looks broken on mobile

Wrap it:

```html
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

For very complex tables, consider whether a card/list presentation is more usable on small screens rather than forcing users to horizontally scroll enormous tables.

---

## Debugging workflow

When a Bootstrap UI looks wrong:

```text
1. Inspect the element in DevTools.
2. Verify expected Bootstrap class exists on element.
3. Verify Bootstrap CSS/JS version.
4. Verify CSS/JS actually loaded.
5. Inspect computed styles.
6. Find which selector wins.
7. Check responsive breakpoint currently active.
8. Check parent layout context (grid/flex/position/overflow).
9. Check DOM structure required by component.
10. Reduce to a minimal reproduction.
```

This process is far more effective than randomly adding CSS overrides.

---

# 63. Bootstrap 4 to Bootstrap 5 Migration

Bootstrap 4 is end-of-life. Existing enterprise applications may still use it, so knowing the major migration themes is useful.

## 63.1 jQuery removed as a dependency

Bootstrap 4 often:

```html
<script src="jquery.js"></script>
<script src="popper.js"></script>
<script src="bootstrap.js"></script>
```

Bootstrap 5 does not require jQuery.

## 63.2 Data attribute namespace

Bootstrap 4:

```html
data-toggle="modal"
data-target="#myModal"
data-dismiss="modal"
```

Bootstrap 5:

```html
data-bs-toggle="modal"
data-bs-target="#myModal"
data-bs-dismiss="modal"
```

## 63.3 Left/right → start/end

```text
Bootstrap 4     Bootstrap 5
ml-*            ms-*
mr-*            me-*
pl-*            ps-*
pr-*            pe-*
text-left       text-start
text-right      text-end
```

This supports RTL-friendly logical direction.

## 63.4 `.btn-block` removed

Old:

```html
<button class="btn btn-primary btn-block">Submit</button>
```

New pattern:

```html
<div class="d-grid">
  <button class="btn btn-primary">Submit</button>
</div>
```

## 63.5 `.form-group` pattern changed

Bootstrap 4 often:

```html
<div class="form-group">
  <label>Email</label>
  <input class="form-control">
</div>
```

Bootstrap 5 commonly uses spacing utilities:

```html
<div class="mb-3">
  <label class="form-label">Email</label>
  <input class="form-control">
</div>
```

## 63.6 Custom form classes changed

Bootstrap 4 had patterns such as:

```text
custom-select
custom-control
custom-checkbox
custom-radio
```

Bootstrap 5 simplified form class naming around:

```text
form-select
form-check
form-switch
```

## 63.7 Newer Bootstrap 5 capabilities

Depending on exact minor version, Bootstrap 5 brought/expanded capabilities including:

- no jQuery dependency
- offcanvas
- improved utility API
- logical start/end utilities
- CSS variables
- color modes in the 5.3 line
- newer helper/utilities
- updated forms

## Migration process

Do not attempt a huge migration only by global find-and-replace.

Recommended:

```text
1. Inventory Bootstrap version and plugins.
2. Identify jQuery-dependent code.
3. Update build dependencies.
4. Update data attributes.
5. Update directional utility names.
6. Update forms.
7. Update removed/renamed classes.
8. Review each JS component API.
9. Run visual regression tests.
10. Test keyboard/accessibility behavior.
11. Test RTL if applicable.
12. Test every responsive breakpoint.
```

---

# 64. When Bootstrap Is a Good or Bad Choice

## Good fit

Bootstrap is strong when:

- team needs consistent UI quickly
- application is dashboard/admin/form-heavy
- responsive behavior must be delivered rapidly
- team prefers convention over designing every primitive from scratch
- prototypes must become maintainable production interfaces
- multiple developers need predictable shared patterns

## Less ideal when

Bootstrap may be a weaker fit if:

- design system is extremely custom and Bootstrap defaults are constantly overridden
- minimal CSS footprint is a hard constraint and only a few primitives are needed
- project already has another comprehensive design system/component system
- team is building highly bespoke visual experiences where generic component conventions add little value

## Bootstrap vs Tailwind mental model

Simplified comparison:

```text
Bootstrap:
  components + utilities + opinionated default design

Tailwind:
  utility-first primitives with much less predefined component appearance in core
```

Neither is automatically “better.” Choose based on product needs, team workflow, existing architecture, performance targets, and design ownership.

---
# 65. Interview Questions and Answers

## Q1. What is Bootstrap?

Bootstrap is a frontend toolkit/design system providing responsive layout primitives, prebuilt components, utility classes, form styles, and optional JavaScript plugins.

---

## Q2. What does mobile-first mean in Bootstrap?

Base styles target smaller viewports, and breakpoint-prefixed classes progressively apply changes at minimum viewport widths.

Example:

```html
<div class="col-12 col-md-6">
```

means full width by default and half width from `md` upward.

---

## Q3. Why does Bootstrap use 12 columns?

Twelve divides cleanly into many useful fractions:

```text
1/2 = 6
1/3 = 4
1/4 = 3
2/3 = 8
3/4 = 9
```

This makes common layout ratios convenient.

---

## Q4. Difference between `.container` and `.container-fluid`?

```text
.container       → responsive max-width container
.container-fluid → always 100% width
```

---

## Q5. Difference between `.row` and `.col-*`?

A `.row` groups grid columns and manages gutter behavior. `.col-*` elements are flex items that determine column sizing inside that row.

---

## Q6. Difference between `.col`, `.col-auto`, and `.col-6`?

```text
.col      → shares remaining width automatically
.col-auto → width based on content
.col-6    → 6/12 = 50%
```

---

## Q7. What are gutters?

Gutters are horizontal/vertical spaces between grid columns. Bootstrap controls them with classes such as:

```text
g-3
gx-4
gy-2
```

---

## Q8. How do you make something visible only on desktop?

Example:

```html
<div class="d-none d-lg-block">Desktop content</div>
```

---

## Q9. How do you center content with Bootstrap?

It depends on what “center” means.

Text:

```html
<div class="text-center">...</div>
```

Block with a constrained width:

```html
<div class="w-50 mx-auto">...</div>
```

Flexbox child:

```html
<div class="d-flex justify-content-center align-items-center">...</div>
```

Grid column:

```html
<div class="row justify-content-center">
  <div class="col-md-6">...</div>
</div>
```

---

## Q10. What is the spacing utility syntax?

```text
{property}{side}-{breakpoint?}-{size}
```

Examples:

```text
mt-3
px-4
mb-lg-5
ms-auto
```

---

## Q11. Difference between `.d-none` and `.invisible`?

Conceptually:

```text
d-none     → element removed from visual layout (`display: none`)
invisible  → element hidden but its layout space remains (`visibility: hidden`)
```

Accessibility effects depend on the CSS property and assistive technology; do not choose visibility utilities as an accessibility technique without understanding the result.

---

## Q12. Does Bootstrap 5 require jQuery?

No. Bootstrap 5's JavaScript plugins do not require jQuery.

---

## Q13. Why use `bootstrap.bundle.min.js`?

The bundle includes Bootstrap JavaScript plus Popper, simplifying use of components that need Popper-based positioning.

---

## Q14. Difference between a modal and offcanvas?

```text
Modal     → centered/focused overlay dialog
Offcanvas → edge panel that slides into view
```

Use modal for focused short interactions and offcanvas for navigation, filters, side panels, and similar secondary UI.

---

## Q15. What is the Bootstrap Utility API?

A Sass-map-driven API that generates utility classes. Teams can customize, remove, or add utility families through Sass configuration.

---

## Q16. Sass variable vs CSS variable?

```text
Sass variable → evaluated during compilation
CSS variable  → exists in generated CSS and can change at runtime/scope
```

---

## Q17. How does dark mode work in Bootstrap 5.3?

Bootstrap's color-mode system can switch sets of CSS variables using `data-bs-theme`, for example:

```html
<html data-bs-theme="dark">
```

---

## Q18. What is `.visually-hidden`?

A helper that visually hides content while retaining it for assistive technologies in intended use cases.

Example:

```html
<span class="visually-hidden">Loading...</span>
```

---

## Q19. Why use `start` and `end` instead of `left` and `right`?

Logical directions adapt more naturally to both LTR and RTL languages.

```text
ms → margin start
me → margin end
ps → padding start
pe → padding end
```

---

## Q20. What is Reboot?

Bootstrap's base normalization layer that establishes more consistent browser defaults and foundational element styling.

---

## Q21. How would you reduce Bootstrap bundle size?

Possible techniques:

- custom Sass imports containing only needed layers/components
- selective JavaScript plugin imports
- minification
- optimized application code/assets
- measurement of unused code

Do not remove required dependencies blindly.

---

## Q22. Should you use `!important` to override Bootstrap?

Usually not as the first solution. Prefer correct load order, CSS variables, Sass customization, scoped project selectors, or deliberate utility use. `!important` has valid cases, but widespread use usually signals a cascade architecture problem.

---

## Q23. Why might `.mx-auto` fail to appear to center an element?

The element may already occupy full available width. Auto margins can only create visible centering when there is free horizontal space.

---

## Q24. How do you make a Bootstrap table mobile friendly?

```html
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

---

## Q25. How do you make cards equal height?

In a grid row:

```html
<div class="card h-100">...</div>
```

Then optionally use Flexbox inside card body to align actions:

```html
<div class="card-body d-flex flex-column">
  ...
  <a class="btn btn-primary mt-auto">View</a>
</div>
```

---

## Q26. What is the difference between `show.bs.modal` and `shown.bs.modal`?

```text
show.bs.modal  → emitted when showing begins
shown.bs.modal → emitted after transition completes and modal is visible
```

---

## Q27. Why should you not validate forms only in Bootstrap/JavaScript?

Client-side code can be bypassed. Server-side validation is required for security and data integrity.

---

## Q28. Can Bootstrap guarantee WCAG compliance?

No framework can guarantee accessibility merely by being included. Bootstrap offers useful accessible patterns, but developers remain responsible for semantic markup, content, contrast, labels, focus behavior, keyboard interactions, and custom code.

---

## Q29. Bootstrap component vs utility?

Component:

```html
<button class="btn btn-primary">Save</button>
```

Utility:

```html
<div class="mt-3 text-center d-flex">...</div>
```

Components represent predefined UI objects; utilities apply focused style behaviors.

---

## Q30. What would you check if a Bootstrap modal does not open?

```text
- Bootstrap JS loaded?
- correct version?
- `data-bs-*` attributes?
- correct target ID?
- duplicate IDs?
- JavaScript errors?
- valid modal markup?
```

---

# 66. Practice Exercises

Complete these in order.

## Beginner Level

### Exercise 1 — Installation

Build an HTML page using Bootstrap CDN with:

- heading
- paragraph
- primary button
- responsive container

Goal: understand installation and basic classes.

### Exercise 2 — Spacing

Create three boxes and practice:

```text
p-*
m-*
mt-*
mb-*
px-*
py-*
```

Try to predict the effect before refreshing.

### Exercise 3 — Colors

Create a status panel using:

```text
text-*
bg-*
text-bg-*
border-*
```

### Exercise 4 — Responsive display

Create:

- message visible only below `md`
- message visible from `md`
- section that changes from block to flex at `lg`

### Exercise 5 — Grid basics

Build:

```text
mobile → 1 column
md     → 2 columns
lg     → 3 columns
```

without custom media queries.

---

## Intermediate Level

### Exercise 6 — Product cards

Build 8 cards with:

- image
- title
- description
- price
- button
- equal height
- 1/2/4 cards per row across breakpoints

### Exercise 7 — Responsive form

Build a registration form:

```text
First name | Last name
Email full width
City | State | ZIP
Terms checkbox
Submit button
```

Mobile should stack.

### Exercise 8 — Navbar

Create a responsive navbar with:

- brand
- 4 links
- dropdown
- sign-in button
- mobile collapse

### Exercise 9 — Modal edit form

Display a user table with an Edit button. Clicking Edit opens a modal containing a form.

Bonus: populate the modal using data attributes.

### Exercise 10 — Toast notification

After a fake Save operation, show:

```text
"Profile saved successfully"
```

in a toast positioned at bottom/end.

---

## Advanced Level

### Exercise 11 — Theme switcher

Implement:

```text
Light
Dark
Auto
```

Persist preference with `localStorage`.

### Exercise 12 — Sass theme

Create a Bootstrap build with:

- custom primary color
- custom border radius
- custom font
- custom theme color

### Exercise 13 — Utility API

Generate a custom utility family for:

```text
cursor-pointer
cursor-default
```

Then make it responsive if useful.

### Exercise 14 — Dashboard shell

Create:

```text
mobile    → offcanvas navigation
lg+       → persistent sidebar
header    → search + account menu
main      → KPI cards + chart placeholder + table
```

### Exercise 15 — Accessibility audit

Take your dashboard and test:

- keyboard navigation
- focus ring
- input labels
- heading structure
- contrast
- modal focus
- zoom/reflow
- icon accessible names

Document every issue and fix it.

---

# 67. Mini Projects

## Project 1 — Personal portfolio

Topics practiced:

```text
navbar
hero
responsive grid
cards
buttons
spacing
forms
footer
```

Suggested pages:

```text
Home
Projects
About
Contact
```

---

## Project 2 — Admin user management

Features:

```text
responsive sidebar
user table
search/filter toolbar
pagination
status badges
create/edit modal
delete confirmation
toast notifications
```

---

## Project 3 — E-commerce storefront

Features:

```text
navbar
category offcanvas filter
product grid
product cards
badges
pagination
product detail
cart offcanvas
checkout form
```

---

## Project 4 — Invoice management UI

Features:

```text
KPI dashboard
invoice listing
status filter
responsive table
invoice detail page
approval timeline
upload form
validation
approval/reject modal
status badges
toast feedback
```

---

## Project 5 — Documentation website

Features:

```text
responsive navbar
sidebar/offcanvas table of contents
Scrollspy
code blocks
search UI
alerts
accordions
anchor links
light/dark mode
```

---

# 68. Capstone Project Architecture

Build a responsive **Business Operations Portal**.

## 68.1 Requirements

Modules:

```text
Dashboard
Employees
Invoices
Projects
Reports
Settings
```

UI requirements:

```text
responsive sidebar
responsive header
mobile navigation
KPI cards
data tables
filters
forms
modals
toasts
status indicators
dark mode
loading states
empty states
error states
```

## 68.2 Suggested structure

```text
operations-portal/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── js/
    │   ├── main.js
    │   ├── theme.js
    │   ├── modal.js
    │   └── toast.js
    ├── scss/
    │   ├── _bootstrap-overrides.scss
    │   ├── _tokens.scss
    │   ├── components/
    │   │   ├── _app-shell.scss
    │   │   ├── _sidebar.scss
    │   │   ├── _kpi-card.scss
    │   │   └── _status.scss
    │   ├── pages/
    │   │   ├── _dashboard.scss
    │   │   └── _invoice.scss
    │   └── app.scss
    └── assets/
        ├── images/
        └── icons/
```

## 68.3 `app.scss`

Conceptual sequence:

```scss
// Project tokens / Bootstrap variable overrides
@import "bootstrap-overrides";

// Bootstrap framework
@import "bootstrap/scss/bootstrap";

// Project-level components
@import "components/app-shell";
@import "components/sidebar";
@import "components/kpi-card";
@import "components/status";

// Pages
@import "pages/dashboard";
@import "pages/invoice";
```

For large production systems, consider Bootstrap's documented partial import strategy to avoid compiling components you do not use.

## 68.4 App shell

```html
<div class="container-fluid">
  <div class="row min-vh-100">
    <aside class="col-lg-2 border-end p-0">
      <!-- responsive navigation -->
    </aside>

    <div class="col-lg-10 p-0">
      <header class="border-bottom p-3">
        <!-- search/profile/actions -->
      </header>

      <main class="p-3 p-lg-4">
        <!-- route/page content -->
      </main>
    </div>
  </div>
</div>
```

## 68.5 Dashboard

```text
Row 1 → 4 KPI cards
Row 2 → performance chart + activity card
Row 3 → recent invoices table
```

Use:

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
```

for KPI cards.

## 68.6 Invoice listing

Recommended UI hierarchy:

```text
Page title + Add invoice
Filters/search
Active filter summary
Responsive table
Pagination
```

For mobile, consider whether a dense table should transform into stacked record cards.

## 68.7 Invoice state model

Display business state consistently:

```text
Draft      → secondary
Pending    → warning
Approved   → success
Rejected   → danger
Posted     → primary or success depending on design system
```

Define this mapping centrally rather than hardcoding colors independently on every page.

Example server-side helper concept:

```text
statusToBootstrapVariant(status)
```

returns:

```text
pending → warning
approved → success
rejected → danger
```

## 68.8 Theme system

Use:

```html
<html data-bs-theme="light">
```

and let custom styles consume theme-aware CSS variables:

```css
.kpi-card {
  background: var(--bs-body-bg);
  color: var(--bs-body-color);
  border: 1px solid var(--bs-border-color);
}
```

Avoid hardcoded white/black unless intentionally fixed.

## 68.9 Accessibility acceptance criteria

A capstone is not complete until:

```text
[ ] Every input has an accessible label.
[ ] Every icon-only control has an accessible name.
[ ] Keyboard can reach every interactive control.
[ ] Focus is visible.
[ ] Modals can be completed/closed without a mouse.
[ ] Error states contain text.
[ ] Main navigation has clear current-page state.
[ ] Tables use meaningful headers.
[ ] Heading hierarchy is logical.
[ ] Page works at high zoom and narrow width.
```

## 68.10 Production acceptance criteria

```text
[ ] No console errors.
[ ] No failed asset requests.
[ ] Production assets are minified/bundled appropriately.
[ ] Images are optimized.
[ ] Only required Bootstrap JS/plugins are shipped when optimization matters.
[ ] No accidental Bootstrap source edits in node_modules.
[ ] No widespread !important overrides.
[ ] Responsive testing covers xs/sm/md/lg/xl/xxl behavior.
[ ] Browser support matches product requirements.
[ ] Dark/light modes tested if enabled.
```

---

# 69. Bootstrap Cheat Sheet

## Setup

```html
<link rel="stylesheet" href="bootstrap.min.css">
<script src="bootstrap.bundle.min.js"></script>
```

## Containers

```text
.container
.container-sm
.container-md
.container-lg
.container-xl
.container-xxl
.container-fluid
```

## Grid

```html
<div class="container">
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4">...</div>
  </div>
</div>
```

## Breakpoints

```text
none  xs  <576
sm        ≥576
md        ≥768
lg        ≥992
xl        ≥1200
xxl       ≥1400
```

## Display

```text
d-none
d-block
d-inline
d-inline-block
d-grid
d-flex
d-inline-flex
```

Responsive example:

```text
d-none d-md-block
```

## Flex

```text
d-flex
flex-row
flex-column
flex-wrap
justify-content-start
justify-content-center
justify-content-end
justify-content-between
align-items-start
align-items-center
align-items-end
flex-grow-1
ms-auto
```

## Spacing

```text
m  margin
p  padding

t top
b bottom
s start
e end
x horizontal
y vertical
```

Examples:

```text
m-3
mt-2
mb-4
mx-auto
ms-auto
p-3
px-4
py-5
```

## Text

```text
text-start
text-center
text-end
text-wrap
text-nowrap
text-truncate
fw-bold
fw-semibold
fw-normal
fst-italic
text-uppercase
text-lowercase
text-capitalize
```

## Colors

```text
text-primary
text-success
text-danger
text-warning
text-info
text-body
text-body-secondary

bg-primary
bg-body
bg-body-tertiary

text-bg-primary
text-bg-success
text-bg-warning
text-bg-danger
```

## Borders

```text
border
border-0
border-top
border-bottom
border-primary
rounded
rounded-3
rounded-circle
rounded-pill
```

## Shadow

```text
shadow-none
shadow-sm
shadow
shadow-lg
```

## Width/height

```text
w-25
w-50
w-75
w-100
w-auto
h-100
min-vh-100
```

## Forms

```text
form-label
form-control
form-select
form-check
form-check-input
form-check-label
form-switch
form-range
input-group
input-group-text
form-floating
is-valid
is-invalid
valid-feedback
invalid-feedback
```

## Buttons

```text
btn
btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-light
btn-dark
btn-outline-primary
btn-sm
btn-lg
btn-group
```

## Cards

```text
card
card-header
card-body
card-title
card-subtitle
card-text
card-img-top
card-footer
```

## Common components

```text
alert
badge
breadcrumb
navbar
nav-tabs
nav-pills
list-group
pagination
accordion
collapse
dropdown
modal
offcanvas
carousel
toast
spinner-border
progress
placeholder
```

## Useful helpers

```text
ratio
ratio-16x9
vstack
hstack
vr
stretched-link
visually-hidden
visually-hidden-focusable
focus-ring
```

## Common data attributes

```text
data-bs-toggle
data-bs-target
data-bs-dismiss
data-bs-placement
data-bs-title
```

## Dark mode

```html
<html data-bs-theme="dark">
```

---

# 70. Learning Roadmap

## Stage 1 — Foundation

Learn:

```text
Bootstrap purpose
installation
containers
breakpoints
grid
spacing
display
```

Build: simple landing page.

Do not move on until you can create responsive layouts without copying a complete template.

---

## Stage 2 — Flexbox + utilities

Learn:

```text
d-flex
flex direction
justify-content
align-items
gap
auto margins
responsive utilities
text/colors/borders
```

Build: responsive toolbar and dashboard cards.

---

## Stage 3 — Forms and content

Learn:

```text
typography
images
tables
form controls
form layout
validation
input groups
floating labels
```

Build: registration + profile settings pages.

---

## Stage 4 — Components

Learn:

```text
buttons
cards
navbar
nav/tabs
list groups
badges
alerts
pagination
```

Build: admin listing page.

---

## Stage 5 — JavaScript plugins

Learn:

```text
collapse
accordion
dropdown
modal
offcanvas
toast
tooltip
popover
carousel
Scrollspy
```

Understand:

```text
data API
programmatic API
component instances
events
```

Build: interactive dashboard.

---

## Stage 6 — Accessibility

Learn:

```text
semantic HTML
labels
ARIA usage
focus
keyboard navigation
contrast
visually-hidden
reduced motion
responsive reflow
```

Audit everything you built earlier.

---

## Stage 7 — Customization

Learn:

```text
CSS variables
color modes
Sass variables
maps
functions
mixins
breakpoint mixins
```

Build: custom company theme.

---

## Stage 8 — Advanced system design

Learn:

```text
Utility API
partial Sass imports
selective JS imports
component architecture
framework lifecycle integration
performance optimization
visual regression testing
```

Build: full operations portal.

---

## 30-Day Suggested Plan

| Days | Focus |
|---|---|
| 1–2 | Setup, starter template, Reboot |
| 3–5 | Containers, breakpoints, grid |
| 6–8 | Spacing, display, sizing |
| 9–10 | Flexbox utilities |
| 11–12 | Typography, images, tables |
| 13–15 | Forms and validation |
| 16–18 | Buttons, cards, nav, navbar |
| 19–21 | Accordion, dropdown, modal, offcanvas |
| 22 | Toasts, tooltips, popovers, loading UI |
| 23 | Accessibility |
| 24 | Dark mode and CSS variables |
| 25–26 | Sass customization |
| 27 | Utility API |
| 28 | Performance/debugging |
| 29 | Mini project |
| 30 | Capstone review + cheat-sheet revision |

### Mastery test

You understand Bootstrap well when you can:

1. reproduce a responsive mockup without constantly searching class names,
2. explain *why* each breakpoint was chosen,
3. build forms and navigation accessibly,
4. diagnose cascade/grid problems with DevTools,
5. customize Bootstrap without editing library source,
6. choose between utility, component, CSS variable, Sass variable, or project CSS,
7. integrate interactive plugins without lifecycle bugs,
8. keep the final UI consistent across mobile, desktop, themes, and states.

---

# 71. Glossary

**Breakpoint**  
A viewport threshold where responsive styles begin to apply.

**CDN**  
Content Delivery Network. Can serve Bootstrap CSS/JS without hosting files in your project.

**Component**  
A reusable UI pattern such as a button, modal, card, navbar, or alert.

**Container**  
A Bootstrap layout wrapper that controls horizontal padding and often maximum content width.

**CSS custom property / CSS variable**  
A runtime CSS value such as `--bs-body-color` that participates in the CSS cascade.

**Data API**  
Bootstrap behavior configured declaratively with HTML `data-bs-*` attributes.

**Flexbox**  
A CSS one-dimensional layout system. Bootstrap's standard grid is based on Flexbox.

**Grid**  
Bootstrap's responsive column layout system, commonly based on rows and a 12-column model.

**Gutter**  
Spacing between grid columns/rows.

**Logical direction**  
Direction-aware terms such as `start`/`end` rather than physical `left`/`right`, useful for RTL support.

**Mobile-first**  
A responsive strategy where base styles target small screens and larger breakpoints progressively enhance/change the layout.

**Popper**  
A positioning library used by Bootstrap features that need dynamic floating-element placement.

**Reboot**  
Bootstrap's baseline normalization and element styling layer.

**Responsive utility**  
A utility whose behavior can change at a breakpoint, such as `d-none d-lg-block`.

**RTL**  
Right-to-left writing direction used by languages such as Arabic and Hebrew.

**Sass**  
A CSS preprocessor used to build/customize Bootstrap source.

**Sass map**  
A Sass key-value structure used heavily for Bootstrap configuration.

**Utility**  
A small focused class such as `mt-3`, `d-flex`, or `text-center`.

**Utility API**  
Bootstrap's Sass-based configuration system for generating utility families.

**Viewport**  
The visible browser area used to determine responsive behavior.

---

# 72. Official References

Use this handbook as a learning/reference layer, but check the official documentation when exact behavior, markup, browser support, or API options matter for production.

## Main Bootstrap resources

- Bootstrap home: <https://getbootstrap.com/>
- Bootstrap 5.3 documentation: <https://getbootstrap.com/docs/5.3/>
- Versions: <https://getbootstrap.com/docs/versions/>
- Getting started: <https://getbootstrap.com/docs/5.3/getting-started/introduction/>
- Download: <https://getbootstrap.com/docs/5.3/getting-started/download/>
- Accessibility: <https://getbootstrap.com/docs/5.3/getting-started/accessibility/>
- JavaScript: <https://getbootstrap.com/docs/5.3/getting-started/javascript/>

## Layout

- Breakpoints: <https://getbootstrap.com/docs/5.3/layout/breakpoints/>
- Containers: <https://getbootstrap.com/docs/5.3/layout/containers/>
- Grid: <https://getbootstrap.com/docs/5.3/layout/grid/>
- Columns: <https://getbootstrap.com/docs/5.3/layout/columns/>
- Gutters: <https://getbootstrap.com/docs/5.3/layout/gutters/>
- CSS Grid: <https://getbootstrap.com/docs/5.3/layout/css-grid/>

## Customization

- Customize overview: <https://getbootstrap.com/docs/5.3/customize/overview/>
- Sass: <https://getbootstrap.com/docs/5.3/customize/sass/>
- CSS variables: <https://getbootstrap.com/docs/5.3/customize/css-variables/>
- Color modes: <https://getbootstrap.com/docs/5.3/customize/color-modes/>
- Components customization: <https://getbootstrap.com/docs/5.3/customize/components/>
- Optimize: <https://getbootstrap.com/docs/5.3/customize/optimize/>

## Utilities

- Utilities: <https://getbootstrap.com/docs/5.3/utilities/api/>
- Spacing: <https://getbootstrap.com/docs/5.3/utilities/spacing/>
- Flex: <https://getbootstrap.com/docs/5.3/utilities/flex/>
- Display: <https://getbootstrap.com/docs/5.3/utilities/display/>
- Colors: <https://getbootstrap.com/docs/5.3/utilities/colors/>

## Tooling

- Bootstrap + Vite: <https://getbootstrap.com/docs/5.3/getting-started/vite/>
- Bootstrap + Webpack: <https://getbootstrap.com/docs/5.3/getting-started/webpack/>
- Bootstrap + Parcel: <https://getbootstrap.com/docs/5.3/getting-started/parcel/>

## Source and releases

- GitHub repository: <https://github.com/twbs/bootstrap>
- GitHub releases: <https://github.com/twbs/bootstrap/releases>

---

# Final Advice

Do not try to memorize Bootstrap as a giant list of classes.

Instead master this chain:

```text
Requirement
   ↓
Semantic HTML
   ↓
Container / layout choice
   ↓
Responsive breakpoint decision
   ↓
Bootstrap component if one fits
   ↓
Utilities for composition
   ↓
CSS variables / Sass for design-system customization
   ↓
Custom component CSS only where domain-specific styling is needed
   ↓
Accessible behavior
   ↓
Responsive + keyboard + production testing
```

The most valuable Bootstrap skill is not knowing that `mt-3` exists. It is being able to look at a requirement such as:

> "The cards should be one per row on mobile, two on tablets, four on wide desktop, equal height, with the button aligned at the bottom."

and reason toward:

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
  <div class="col">
    <article class="card h-100">
      <div class="card-body d-flex flex-column">
        <h2 class="h5 card-title">Product</h2>
        <p class="card-text">Description...</p>
        <a href="#" class="btn btn-primary mt-auto">View product</a>
      </div>
    </article>
  </div>
</div>
```

Once you can translate requirements into Bootstrap patterns deliberately—and know when to stop using Bootstrap utilities and create a proper project abstraction—you are no longer just "using Bootstrap." You understand the system.

---

**End of Bootstrap CSS Master Handbook**
