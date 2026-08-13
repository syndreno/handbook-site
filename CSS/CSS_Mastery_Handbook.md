# CSS Mastery Handbook
## A Beginner-to-Advanced Single-File Guide for Learning Modern CSS

> **Goal:** This handbook is designed to be a single reference for learning, revising, and mastering CSS.  
> It starts from the absolute basics and progresses into responsive design, layout systems, modern CSS, architecture patterns, accessibility, performance, debugging, and real-world UI patterns.

---

# Table of Contents

1. [What CSS Is](#1-what-css-is)
2. [How CSS Works With HTML](#2-how-css-works-with-html)
3. [Ways to Add CSS](#3-ways-to-add-css)
4. [CSS Syntax](#4-css-syntax)
5. [Comments](#5-comments)
6. [Selectors](#6-selectors)
7. [Combinators](#7-combinators)
8. [Pseudo-classes](#8-pseudo-classes)
9. [Pseudo-elements](#9-pseudo-elements)
10. [The Cascade](#10-the-cascade)
11. [Specificity](#11-specificity)
12. [Inheritance](#12-inheritance)
13. [CSS Values and Units](#13-css-values-and-units)
14. [Colors](#14-colors)
15. [CSS Custom Properties](#15-css-custom-properties)
16. [The Box Model](#16-the-box-model)
17. [Width and Height](#17-width-and-height)
18. [Margin](#18-margin)
19. [Padding](#19-padding)
20. [Borders](#20-borders)
21. [Outline](#21-outline)
22. [Border Radius](#22-border-radius)
23. [Box Shadows](#23-box-shadows)
24. [Display](#24-display)
25. [Normal Document Flow](#25-normal-document-flow)
26. [Overflow](#26-overflow)
27. [Positioning](#27-positioning)
28. [Z-index and Stacking Context](#28-z-index-and-stacking-context)
29. [Float and Clear](#29-float-and-clear)
30. [Flexbox](#30-flexbox)
31. [CSS Grid](#31-css-grid)
32. [Subgrid](#32-subgrid)
33. [Responsive Web Design](#33-responsive-web-design)
34. [Media Queries](#34-media-queries)
35. [Container Queries](#35-container-queries)
36. [Responsive Units and Fluid Sizing](#36-responsive-units-and-fluid-sizing)
37. [Typography](#37-typography)
38. [Web Fonts](#38-web-fonts)
39. [Text Styling](#39-text-styling)
40. [Lists](#40-lists)
41. [Tables](#41-tables)
42. [Backgrounds](#42-backgrounds)
43. [Gradients](#43-gradients)
44. [Images and Replaced Elements](#44-images-and-replaced-elements)
45. [object-fit and object-position](#45-object-fit-and-object-position)
46. [Aspect Ratio](#46-aspect-ratio)
47. [Forms](#47-forms)
48. [Buttons](#48-buttons)
49. [Transforms](#49-transforms)
50. [Transitions](#50-transitions)
51. [Animations](#51-animations)
52. [Filters](#52-filters)
53. [Blend Modes](#53-blend-modes)
54. [Clipping and Masking](#54-clipping-and-masking)
55. [CSS Functions](#55-css-functions)
56. [calc(), min(), max(), clamp()](#56-calc-min-max-clamp)
57. [Logical Properties](#57-logical-properties)
58. [Writing Modes and Internationalization](#58-writing-modes-and-internationalization)
59. [CSS Nesting](#59-css-nesting)
60. [Cascade Layers](#60-cascade-layers)
61. [@scope](#61-scope)
62. [Scroll Behavior](#62-scroll-behavior)
63. [Scroll Snap](#63-scroll-snap)
64. [Sticky UI Patterns](#64-sticky-ui-patterns)
65. [Multi-column Layout](#65-multi-column-layout)
66. [Print CSS](#66-print-css)
67. [Dark Mode and Theming](#67-dark-mode-and-theming)
68. [Accessibility](#68-accessibility)
69. [Reduced Motion](#69-reduced-motion)
70. [CSS Architecture](#70-css-architecture)
71. [BEM](#71-bem)
72. [OOCSS](#72-oocss)
73. [SMACSS](#73-smacss)
74. [ITCSS](#74-itcss)
75. [Utility-First CSS](#75-utility-first-css)
76. [CSS Modules and Scoped Styles](#76-css-modules-and-scoped-styles)
77. [Design Tokens](#77-design-tokens)
78. [Reusable Component Patterns](#78-reusable-component-patterns)
79. [Common Layout Recipes](#79-common-layout-recipes)
80. [Navigation Patterns](#80-navigation-patterns)
81. [Card Patterns](#81-card-patterns)
82. [Modal Pattern](#82-modal-pattern)
83. [Tooltip Pattern](#83-tooltip-pattern)
84. [Form Layout Patterns](#84-form-layout-patterns)
85. [Dashboard Layout Pattern](#85-dashboard-layout-pattern)
86. [Holy Grail Layout](#86-holy-grail-layout)
87. [Responsive Sidebar Pattern](#87-responsive-sidebar-pattern)
88. [Truncation and Long Content](#88-truncation-and-long-content)
89. [CSS Reset and Normalize](#89-css-reset-and-normalize)
90. [Browser Compatibility](#90-browser-compatibility)
91. [Progressive Enhancement](#91-progressive-enhancement)
92. [CSS Performance](#92-css-performance)
93. [Debugging CSS](#93-debugging-css)
94. [Common CSS Mistakes](#94-common-css-mistakes)
95. [Naming and File Organization](#95-naming-and-file-organization)
96. [Real-World Mini Projects](#96-real-world-mini-projects)
97. [Interview Questions](#97-interview-questions)
98. [CSS Checklist](#98-css-checklist)
99. [Learning Roadmap](#99-learning-roadmap)
100. [Quick Reference Cheat Sheet](#100-quick-reference-cheat-sheet)

---

# 1. What CSS Is

CSS stands for **Cascading Style Sheets**.

HTML defines the structure of a page.

CSS controls how that structure looks and behaves visually.

Example HTML:

```html
<h1>Hello World</h1>
<p>This is my first page.</p>
```

Example CSS:

```css
h1 {
  color: navy;
  font-size: 40px;
}

p {
  color: #444;
}
```

CSS can control:

- colors
- fonts
- spacing
- borders
- backgrounds
- alignment
- page layout
- responsive behavior
- animations
- hover states
- print styles
- themes
- component appearance

### Real-world scenario

Suppose you build an invoice application.

HTML may contain:

```html
<section class="invoice">
  <h1>Invoice</h1>
  <p>Total: ₹12,500</p>
</section>
```

CSS can make it look like a professional invoice card:

```css
.invoice {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 30px rgb(0 0 0 / 8%);
}
```

---

# 2. How CSS Works With HTML

A browser roughly performs these steps:

1. Parses HTML into the DOM.
2. Parses CSS into CSS rules.
3. Matches selectors with DOM elements.
4. Resolves the cascade and specificity.
5. Calculates layout.
6. Paints pixels.
7. Composites visual layers.

This explains why changing CSS can affect layout, painting, or animation performance.

---

# 3. Ways to Add CSS

## 3.1 Inline CSS

```html
<p style="color: red;">Important message</p>
```

### Good for

- very small experiments
- dynamically generated values in limited cases

### Avoid for

- normal application styling
- reusable UI

---

## 3.2 Internal CSS

```html
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
```

Useful for:

- standalone demo pages
- prototypes
- email templates in some workflows

---

## 3.3 External CSS

```html
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
body {
  margin: 0;
}
```

This is usually the preferred method for ordinary websites and applications.

---

# 4. CSS Syntax

Basic format:

```css
selector {
  property: value;
}
```

Example:

```css
.card {
  width: 320px;
  padding: 20px;
  background-color: white;
}
```

Terminology:

```css
.card             /* selector */
{
  width: 320px;   /* declaration */
}
```

Inside the declaration:

- `width` = property
- `320px` = value

---

# 5. Comments

```css
/* This is a CSS comment */
```

Use comments to explain **why**, not obvious syntax.

Bad:

```css
/* Makes text red */
.error {
  color: red;
}
```

Better:

```css
/* Uses the same danger color as server-side validation messages */
.error {
  color: var(--color-danger);
}
```

---

# 6. Selectors

Selectors tell CSS which elements should receive a style.

## 6.1 Type selector

```css
p {
  color: #333;
}
```

Targets every `<p>`.

---

## 6.2 Class selector

```css
.button {
  padding: 0.75rem 1rem;
}
```

```html
<button class="button">Save</button>
```

Classes are the most common reusable styling mechanism.

---

## 6.3 ID selector

```css
#header {
  background: black;
}
```

IDs are highly specific. Prefer classes for reusable UI styles.

---

## 6.4 Universal selector

```css
* {
  box-sizing: border-box;
}
```

Targets all elements.

A common setup is:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

## 6.5 Attribute selector

```css
input[type="email"] {
  border-color: steelblue;
}
```

Other examples:

```css
a[target="_blank"] {}
input[disabled] {}
[data-status="approved"] {}
```

Prefix match:

```css
a[href^="https"] {}
```

Suffix match:

```css
a[href$=".pdf"] {}
```

Contains:

```css
[class*="icon-"] {}
```

---

## 6.6 Grouping selector

```css
h1,
h2,
h3 {
  line-height: 1.2;
}
```

---

# 7. Combinators

Combinators describe relationships between elements.

## Descendant

```css
.card p {
  color: #555;
}
```

Targets any `<p>` inside `.card`.

---

## Child

```css
.menu > li {
  list-style: none;
}
```

Targets only direct children.

---

## Adjacent sibling

```css
h2 + p {
  margin-top: 0;
}
```

Targets the first `p` immediately after an `h2`.

---

## General sibling

```css
h2 ~ p {
  color: #555;
}
```

Targets later sibling paragraphs.

---

# 8. Pseudo-classes

Pseudo-classes represent a state or structural condition.

## Hover

```css
.button:hover {
  background: #222;
}
```

---

## Focus

```css
input:focus {
  outline: 3px solid dodgerblue;
}
```

Prefer `:focus-visible` for keyboard-focused UI:

```css
button:focus-visible {
  outline: 3px solid #4c9ffe;
  outline-offset: 3px;
}
```

---

## Active

```css
button:active {
  transform: translateY(1px);
}
```

---

## Checked

```css
input:checked + label {
  font-weight: bold;
}
```

---

## Disabled

```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## Structural pseudo-classes

```css
li:first-child {}
li:last-child {}
li:nth-child(2) {}
li:nth-child(odd) {}
li:nth-child(3n) {}
```

---

## :not()

```css
button:not(.primary) {
  background: transparent;
}
```

---

## :is()

```css
:is(h1, h2, h3) {
  line-height: 1.2;
}
```

Useful for reducing repetition.

---

## :where()

```css
:where(article, section) h2 {
  margin-block-start: 2rem;
}
```

`:where()` has zero specificity, making it excellent for low-priority defaults.

---

## :has()

```css
.card:has(.badge-new) {
  border-color: green;
}
```

A powerful parent-aware selector.

Example form:

```css
.form-group:has(input:invalid) {
  border-left: 4px solid crimson;
}
```

---

# 9. Pseudo-elements

Pseudo-elements style a virtual part of an element.

## ::before and ::after

```css
.required::after {
  content: " *";
  color: red;
}
```

---

## ::first-letter

```css
.article::first-letter {
  font-size: 3rem;
}
```

---

## ::selection

```css
::selection {
  background: gold;
  color: black;
}
```

---

## ::placeholder

```css
input::placeholder {
  color: #999;
}
```

---

# 10. The Cascade

CSS is called **Cascading** Style Sheets because multiple rules can target the same element.

The browser determines the winner based on concepts such as:

- origin
- importance
- cascade layer
- specificity
- source order

Example:

```css
p {
  color: blue;
}

p {
  color: red;
}
```

When priority is otherwise equal, the later rule wins.

Result: red.

---

# 11. Specificity

Specificity decides which selector wins when competing rules have similar cascade priority.

A useful simplified mental model:

- inline styles are very strong
- IDs are stronger than classes
- classes, attributes, pseudo-classes are stronger than element selectors
- element selectors and pseudo-elements are lower

Example:

```css
p {
  color: blue;
}

.message {
  color: green;
}

#warning {
  color: red;
}
```

```html
<p id="warning" class="message">Alert</p>
```

Result: usually red because the ID selector is more specific.

## Avoid specificity wars

Bad:

```css
body main .content .panel .button.primary {
  background: blue;
}
```

Better:

```css
.button--primary {
  background: blue;
}
```

---

# 12. Inheritance

Some CSS properties are inherited by children.

Often inherited:

- `color`
- `font-family`
- `font-size`
- `line-height`

Usually not inherited:

- `margin`
- `padding`
- `border`
- `width`
- `height`

Example:

```css
body {
  color: #222;
  font-family: system-ui, sans-serif;
}
```

Most text inside the body inherits these values.

Useful keywords:

```css
property: inherit;
property: initial;
property: unset;
property: revert;
```

---

# 13. CSS Values and Units

## Absolute unit

```css
border-width: 1px;
```

`px` is useful when you need a consistent CSS pixel size.

---

## Relative units

### em

Relative to the current element's font size.

```css
button {
  padding: 0.75em 1.2em;
}
```

Useful when button spacing should scale with its text size.

---

### rem

Relative to the root font size.

```css
.card {
  padding: 1.5rem;
}
```

Excellent for consistent spacing systems.

---

### %

```css
.container {
  width: 90%;
}
```

Relative to a containing dimension depending on property.

---

### vw / vh

```css
.hero {
  min-height: 100vh;
}
```

Viewport relative units.

Modern viewport units include variants such as:

```css
100svh
100lvh
100dvh
```

These can be helpful on mobile browsers where browser chrome changes visible height.

---

### ch

Approximately based on the width of the `0` character.

```css
.article {
  max-width: 70ch;
}
```

Useful for readable text line length.

---

# 14. Colors

## Named colors

```css
color: tomato;
```

---

## Hex

```css
color: #1e293b;
```

With alpha:

```css
background: #00000080;
```

---

## rgb()

```css
color: rgb(30 41 59);
```

With transparency:

```css
background: rgb(0 0 0 / 0.5);
```

---

## hsl()

```css
color: hsl(220 60% 45%);
```

HSL is convenient for theme manipulation.

---

## Modern color thinking

Build semantic color variables:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --color-primary: #2563eb;
  --color-danger: #dc2626;
  --color-success: #15803d;
}
```

Avoid scattering raw color values everywhere.

---

# 15. CSS Custom Properties

Also called CSS variables.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --brand: #2563eb;
}
```

Usage:

```css
.button {
  padding: var(--space-2) var(--space-3);
  background: var(--brand);
}
```

Fallback:

```css
color: var(--text-color, #222);
```

Scoped variables:

```css
.alert {
  --alert-color: crimson;
  border-color: var(--alert-color);
}
```

### Real-world theme scenario

```css
:root {
  --bg: white;
  --text: #111;
}

[data-theme="dark"] {
  --bg: #111827;
  --text: #f9fafb;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

---

# 16. The Box Model

Every element can be imagined as:

```text
margin
  border
    padding
      content
```

Default box sizing can make width calculations confusing.

Recommended:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Then:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid;
}
```

The declared 300px includes padding and border.

---

# 17. Width and Height

```css
.box {
  width: 300px;
  height: 200px;
}
```

Often better:

```css
.box {
  width: 100%;
  max-width: 1200px;
}
```

Useful properties:

```css
min-width
max-width
min-height
max-height
```

### Scenario: centered page container

```css
.container {
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}
```

---

# 18. Margin

Margin creates space outside an element.

```css
.card {
  margin: 20px;
}
```

Shorthand:

```css
margin: 10px;             /* all */
margin: 10px 20px;        /* vertical horizontal */
margin: 10px 20px 30px;   /* top horizontal bottom */
margin: 10px 20px 30px 40px;
```

Center a block:

```css
.container {
  max-width: 1000px;
  margin-inline: auto;
}
```

---

# 19. Padding

Padding creates space inside the border.

```css
.card {
  padding: 1.5rem;
}
```

Button example:

```css
.button {
  padding: 0.75rem 1rem;
}
```

---

# 20. Borders

```css
.card {
  border: 1px solid #ddd;
}
```

Individual sides:

```css
border-top: 2px solid;
border-inline-start: 4px solid;
```

---

# 21. Outline

Outline does not affect box dimensions like borders do.

Common keyboard focus style:

```css
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

Do not remove focus outlines without providing an accessible replacement.

---

# 22. Border Radius

```css
.card {
  border-radius: 12px;
}
```

Circle:

```css
.avatar {
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
}
```

Pill:

```css
.badge {
  border-radius: 999px;
}
```

---

# 23. Box Shadows

```css
.card {
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
}
```

Syntax:

```text
offset-x offset-y blur spread color
```

Inset shadow:

```css
input {
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.08);
}
```

---

# 24. Display

Common values:

```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```

## block

Usually starts on a new line and can take full available width.

## inline

Flows inside text.

Width and height do not behave like normal blocks.

## inline-block

Flows inline while allowing box dimensions.

## none

Removes the element from layout.

---

# 25. Normal Document Flow

Before learning flexbox or grid, understand normal flow.

Block elements naturally stack vertically.

Inline content naturally flows horizontally within text.

Good CSS often works **with** normal flow rather than forcing everything with absolute positioning.

---

# 26. Overflow

```css
.box {
  overflow: hidden;
}
```

Values:

```css
visible
hidden
auto
scroll
clip
```

Scrollable table wrapper:

```css
.table-wrapper {
  overflow-x: auto;
}
```

Avoid applying `overflow: hidden` casually because it may clip focus indicators, shadows, popovers, or sticky children.

---

# 27. Positioning

## static

Default.

```css
position: static;
```

---

## relative

Keeps normal layout position but becomes a positioning reference.

```css
.card {
  position: relative;
}
```

---

## absolute

Removed from normal document flow.

```css
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

Usually paired with:

```css
.card {
  position: relative;
}
```

---

## fixed

Relative to the viewport in common cases.

```css
.help-button {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}
```

---

## sticky

Behaves normally until a scroll threshold is reached.

```css
.table-header {
  position: sticky;
  top: 0;
}
```

---

# 28. Z-index and Stacking Context

`z-index` controls ordering among relevant positioned or stacking elements.

```css
.modal {
  position: fixed;
  z-index: 1000;
}
```

However, `z-index: 999999` does not solve every problem.

Certain properties can create new stacking contexts, such as:

- positioned elements with z-index
- transforms
- opacity below 1
- filters
- isolation
- some containment features

Create a sensible layer scale:

```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 900;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

---

# 29. Float and Clear

Floats were historically used for layouts.

Modern page layouts should normally use flexbox or grid.

Float remains useful for text wrapping:

```css
.article-image {
  float: left;
  margin: 0 1rem 1rem 0;
}
```

Clear:

```css
.footer {
  clear: both;
}
```

---

# 30. Flexbox

Flexbox is ideal for **one-dimensional layouts**: mainly row or column.

## Basic example

```css
.toolbar {
  display: flex;
  gap: 1rem;
}
```

---

## Main concepts

A flex container has:

- main axis
- cross axis

Default direction:

```css
flex-direction: row;
```

Other options:

```css
row-reverse
column
column-reverse
```

---

## justify-content

Controls distribution along the main axis.

```css
justify-content: flex-start;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

---

## align-items

Controls alignment on the cross axis.

```css
align-items: stretch;
align-items: center;
align-items: flex-start;
align-items: flex-end;
```

---

## gap

```css
.actions {
  display: flex;
  gap: 0.75rem;
}
```

Prefer `gap` over manually adding margins between items.

---

## flex-wrap

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

---

## flex-grow, flex-shrink, flex-basis

```css
.content {
  flex: 1 1 500px;
}
```

Equivalent conceptual parts:

- grow: may consume extra space
- shrink: may shrink if needed
- basis: preferred starting size

---

## Scenario: toolbar

```html
<div class="toolbar">
  <h2>Invoices</h2>
  <div class="toolbar__actions">
    <button>Export</button>
    <button>Add Invoice</button>
  </div>
</div>
```

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.toolbar__actions {
  display: flex;
  gap: 0.5rem;
}
```

---

## Scenario: responsive cards

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 280px;
}
```

---

## Common flexbox issue: child refuses to shrink

Use:

```css
.flex-child {
  min-width: 0;
}
```

Especially useful when long text causes overflow.

---

# 31. CSS Grid

Grid is excellent for **two-dimensional layout**.

## Basic grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

---

## Fraction unit

```css
grid-template-columns: 1fr 2fr;
```

Second column receives twice the flexible share.

---

## repeat()

```css
grid-template-columns: repeat(4, 1fr);
```

---

## minmax()

```css
grid-template-columns: repeat(3, minmax(0, 1fr));
```

---

## Responsive auto-fit pattern

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 1rem;
}
```

This creates responsive card columns without a media query.

---

## Grid rows

```css
grid-template-rows: auto 1fr auto;
```

---

## Column and row placement

```css
.sidebar {
  grid-column: 1;
}

.main {
  grid-column: 2 / 4;
}
```

---

## Named areas

```css
.layout {
  display: grid;
  grid-template:
    "header header" auto
    "sidebar main" 1fr
    "footer footer" auto
    / 240px 1fr;
}

header {
  grid-area: header;
}

aside {
  grid-area: sidebar;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

---

## place-items

```css
.center {
  display: grid;
  place-items: center;
}
```

Excellent for simple centering.

---

## Grid vs Flexbox

Use flexbox when:

- layout mainly follows one direction
- toolbar
- button group
- navigation row
- alignment of small groups

Use grid when:

- rows and columns matter together
- dashboard
- page shell
- card gallery
- form fields aligned by columns

They are complementary, not competitors.

---

# 32. Subgrid

Subgrid allows a nested grid to use the parent grid's tracks.

Conceptual example:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  display: grid;
  grid-template-rows: subgrid;
}
```

Useful when multiple cards need aligned internal rows such as:

- title
- description
- metadata
- button

Always confirm browser requirements for your target environment when using newer layout features.

---

# 33. Responsive Web Design

Responsive design means the interface adapts to available space and user environment.

Core principles:

1. start with flexible layouts
2. avoid unnecessary fixed dimensions
3. use responsive images
4. use media queries where the layout truly needs a breakpoint
5. use container queries for reusable components
6. design mobile-first when practical

---

# 34. Media Queries

Example:

```css
.card-grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Mobile-first approach

Base styles serve smaller screens.

Then larger layouts are layered on with `min-width`.

This usually reduces overrides.

---

## User preference media queries

Dark mode:

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: #eee;
  }
}
```

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
  }
}
```

---

# 35. Container Queries

Media queries inspect the viewport.

Container queries inspect the size of a component's container.

```css
.card-wrapper {
  container-type: inline-size;
}
```

```css
@container (min-width: 500px) {
  .profile-card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
```

### Why useful

The same component may be:

- full-width on one page
- inside a narrow sidebar on another
- inside a dashboard tile elsewhere

Container queries let the component adapt to its own available space.

---

# 36. Responsive Units and Fluid Sizing

Example fluid heading:

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

Meaning:

- minimum 2rem
- fluid preferred value 5vw
- maximum 4rem

Responsive spacing:

```css
.section {
  padding-block: clamp(2rem, 6vw, 6rem);
}
```

---

# 37. Typography

Typography affects readability, hierarchy, and usability.

A strong base:

```css
body {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  line-height: 1.5;
}
```

Use meaningful hierarchy:

```css
h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
}

h2 {
  font-size: 2rem;
  line-height: 1.2;
}

p {
  max-width: 70ch;
}
```

---

# 38. Web Fonts

Example:

```css
@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-display: swap;
}
```

Then:

```css
body {
  font-family: "MyFont", sans-serif;
}
```

Best practices:

- prefer WOFF2 where appropriate
- limit unnecessary font weights
- provide fallback fonts
- use `font-display`
- consider loading performance

---

# 39. Text Styling

Important properties:

```css
font-size
font-weight
font-style
line-height
letter-spacing
text-align
text-decoration
text-transform
text-indent
text-shadow
white-space
word-break
overflow-wrap
```

Example:

```css
.price {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

Long text handling:

```css
.description {
  overflow-wrap: anywhere;
}
```

---

# 40. Lists

Remove default list styling:

```css
.clean-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

Custom marker:

```css
.features li::marker {
  color: green;
}
```

Do not remove semantic `<ul>` / `<ol>` structure just for visual design.

---

# 41. Tables

Basic table styling:

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
```

Responsive wrapper:

```css
.table-scroll {
  overflow-x: auto;
}
```

Sticky header:

```css
thead th {
  position: sticky;
  top: 0;
  background: white;
}
```

---

# 42. Backgrounds

```css
.hero {
  background-color: #111827;
  background-image: url("hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

Shorthand:

```css
background: #111827 url("hero.jpg") center / cover no-repeat;
```

---

# 43. Gradients

Linear:

```css
background: linear-gradient(135deg, #2563eb, #7c3aed);
```

Radial:

```css
background: radial-gradient(circle, white, #ddd);
```

Gradient overlay:

```css
.hero {
  background:
    linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5)),
    url("hero.jpg") center / cover;
}
```

---

# 44. Images and Replaced Elements

Responsive image rule:

```css
img,
video {
  max-width: 100%;
  height: auto;
}
```

Avoid forcing image dimensions without considering aspect ratio.

---

# 45. object-fit and object-position

Card thumbnail:

```css
.thumbnail {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
```

Show whole image:

```css
.logo {
  object-fit: contain;
}
```

Control crop position:

```css
.profile-photo {
  object-fit: cover;
  object-position: center top;
}
```

---

# 46. Aspect Ratio

```css
.video {
  aspect-ratio: 16 / 9;
}
```

Square:

```css
.avatar {
  aspect-ratio: 1;
}
```

Useful for preventing layout shifts and maintaining consistent media dimensions.

---

# 47. Forms

Good base styling:

```css
label {
  display: block;
  margin-bottom: 0.375rem;
  font-weight: 600;
}

input,
select,
textarea,
button {
  font: inherit;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}
```

Focus:

```css
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid rgb(37 99 235 / 0.25);
  border-color: #2563eb;
}
```

Invalid:

```css
input:invalid:not(:placeholder-shown) {
  border-color: #dc2626;
}
```

---

# 48. Buttons

Reusable base:

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
```

Primary:

```css
.button--primary {
  background: #2563eb;
  color: white;
}
```

Danger:

```css
.button--danger {
  background: #dc2626;
  color: white;
}
```

Disabled:

```css
.button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}
```

---

# 49. Transforms

```css
transform: translateX(10px);
transform: translateY(-5px);
transform: scale(1.05);
transform: rotate(5deg);
```

Combined:

```css
transform: translateY(-2px) scale(1.02);
```

Transforms are useful for visual movement without changing normal document flow.

---

# 50. Transitions

```css
.button {
  background: #2563eb;
  transform: translateY(0);
  transition:
    background-color 150ms ease,
    transform 150ms ease;
}

.button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}
```

Avoid:

```css
transition: all 0.3s;
```

Prefer listing only the properties you intend to animate.

---

# 51. Animations

```css
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.loading {
  animation: pulse 1.5s ease-in-out infinite;
}
```

Animation properties:

```css
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state
```

---

# 52. Filters

```css
filter: blur(4px);
filter: grayscale(1);
filter: brightness(1.1);
filter: contrast(1.2);
```

Backdrop effect:

```css
.glass {
  background: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(12px);
}
```

Use effects carefully for readability and performance.

---

# 53. Blend Modes

Example:

```css
.overlay {
  mix-blend-mode: multiply;
}
```

Background blend:

```css
.hero {
  background-image:
    linear-gradient(red, blue),
    url("photo.jpg");
  background-blend-mode: multiply;
}
```

These are useful for artistic visual treatments but can complicate contrast and compositing.

---

# 54. Clipping and Masking

Simple clipping:

```css
.avatar {
  clip-path: circle(50%);
}
```

Polygon:

```css
.banner {
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
}
```

Masking can create more complex transparency-based shapes.

Because feature requirements can vary by browser, verify compatibility before using advanced masking in production.

---

# 55. CSS Functions

Common CSS functions include:

```css
var()
calc()
min()
max()
clamp()
rgb()
hsl()
linear-gradient()
radial-gradient()
url()
attr()
counter()
```

---

# 56. calc(), min(), max(), clamp()

## calc()

```css
.main {
  min-height: calc(100vh - 64px);
}
```

---

## min()

```css
.container {
  width: min(1120px, 100% - 2rem);
}
```

---

## max()

```css
.sidebar {
  width: max(240px, 20vw);
}
```

---

## clamp()

```css
.title {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

Excellent for fluid design.

---

# 57. Logical Properties

Instead of physical directions:

```css
margin-left
margin-right
padding-top
```

Use logical directions:

```css
margin-inline-start
margin-inline-end
padding-block
padding-inline
```

Example:

```css
.card {
  padding-block: 1rem;
  padding-inline: 1.5rem;
}
```

Benefits:

- easier RTL support
- writing-mode support
- more semantic spacing

---

# 58. Writing Modes and Internationalization

```css
.vertical-label {
  writing-mode: vertical-rl;
}
```

When building multilingual applications, prefer logical properties so the layout can adapt more naturally to right-to-left languages.

---

# 59. CSS Nesting

Modern CSS can express nested relationships in supported environments.

Example:

```css
.card {
  padding: 1rem;

  & .title {
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
  }
}
```

Keep nesting shallow.

Bad mental model:

```text
page -> section -> card -> body -> text -> span -> icon
```

Deep nesting increases coupling and specificity.

---

# 60. Cascade Layers

Cascade layers let you explicitly control groups of styles.

```css
@layer reset, base, components, utilities;
```

```css
@layer reset {
  * {
    box-sizing: border-box;
  }
}

@layer components {
  .button {
    padding: 0.75rem 1rem;
  }
}

@layer utilities {
  .hidden {
    display: none;
  }
}
```

Useful in large applications and design systems because it can reduce specificity conflicts.

---

# 61. @scope

Scoping can limit rules to a specific region.

Conceptual example:

```css
@scope (.invoice-panel) {
  h2 {
    color: #1e3a8a;
  }
}
```

This can help prevent styles leaking into unrelated areas.

When relying on newer CSS features, verify support requirements for your project's browser matrix.

---

# 62. Scroll Behavior

Smooth scroll:

```css
html {
  scroll-behavior: smooth;
}
```

Respect reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

---

# 63. Scroll Snap

Horizontal carousel:

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
}

.carousel > * {
  flex: 0 0 80%;
  scroll-snap-align: start;
}
```

Useful for:

- image galleries
- mobile card lists
- onboarding panels

Do not make scrolling difficult or trap users.

---

# 64. Sticky UI Patterns

Sticky header:

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

Sticky table column:

```css
td:first-child,
th:first-child {
  position: sticky;
  left: 0;
  background: white;
}
```

Sticky can fail if an ancestor's overflow/layout behavior prevents the expected scroll context.

---

# 65. Multi-column Layout

Useful for article-like content:

```css
.article {
  columns: 3 18rem;
  column-gap: 2rem;
}
```

Avoid for UI layouts where row alignment matters.

---

# 66. Print CSS

```css
@media print {
  nav,
  .no-print,
  button {
    display: none;
  }

  body {
    color: black;
    background: white;
  }

  .invoice {
    box-shadow: none;
    border: 0;
  }
}
```

Useful for:

- invoices
- reports
- receipts
- printable forms

---

# 67. Dark Mode and Theming

A variable-based theme:

```css
:root {
  --bg: #ffffff;
  --surface: #f8fafc;
  --text: #0f172a;
  --border: #e2e8f0;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --surface: #1e293b;
  --text: #f8fafc;
  --border: #334155;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

System preference:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111827;
    --text: #f9fafb;
  }
}
```

---

# 68. Accessibility

CSS can improve or damage accessibility.

## Keep visible keyboard focus

```css
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}
```

---

## Avoid relying only on color

Bad:

```text
red = error
green = success
```

Better:

Use:

- icon
- text
- border
- label
- color

together.

---

## Contrast

Text should have sufficient contrast against its background.

---

## Touch target size

Avoid tiny clickable areas.

A practical pattern:

```css
.icon-button {
  min-width: 44px;
  min-height: 44px;
}
```

---

## Do not visually reorder meaningful content carelessly

CSS grid/flex order can create a mismatch between visual order and keyboard/screen-reader reading order.

Keep DOM order meaningful.

---

# 69. Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

A more refined implementation can selectively preserve useful state changes while removing decorative motion.

---

# 70. CSS Architecture

CSS architecture is how you organize and scale styles.

A good system tries to achieve:

- predictable naming
- low specificity
- reusable components
- minimal leakage
- easy deletion
- clear ownership
- consistent spacing and colors
- theme support
- manageable overrides

Common approaches:

- BEM
- OOCSS
- SMACSS
- ITCSS
- utility-first
- CSS Modules
- component-scoped CSS
- design tokens

---

# 71. BEM

BEM means:

- Block
- Element
- Modifier

Example:

```html
<article class="card card--featured">
  <h2 class="card__title">Premium Plan</h2>
  <p class="card__description">For larger teams.</p>
</article>
```

```css
.card {}
.card__title {}
.card__description {}
.card--featured {}
```

Advantages:

- clear relationship
- reusable naming
- predictable specificity

Avoid:

```css
.card__header__title__icon
```

BEM elements belong to the block, not to a chain of parent element names.

---

# 72. OOCSS

Object-Oriented CSS encourages separation of:

- structure
- skin/appearance

Example structure:

```css
.media {
  display: flex;
  gap: 1rem;
}
```

Appearance:

```css
.surface {
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
}
```

Then combine:

```html
<div class="media surface">
  ...
</div>
```

---

# 73. SMACSS

SMACSS organizes styles into categories such as:

- Base
- Layout
- Module
- State
- Theme

Example conceptual folders:

```text
styles/
  base/
  layout/
  modules/
  states/
  themes/
```

Useful when teams want category-based CSS organization.

---

# 74. ITCSS

ITCSS organizes styles from broad/low-specificity rules to narrow/high-specificity rules.

Typical conceptual order:

```text
settings
tools
generic
elements
objects
components
utilities
```

This can make the cascade easier to control in large codebases.

---

# 75. Utility-First CSS

Utility classes perform one narrow styling job.

```css
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-2 {
  gap: 0.5rem;
}
```

HTML:

```html
<div class="flex items-center gap-2">
  ...
</div>
```

Advantages:

- fast composition
- predictable behavior
- fewer one-off selectors

Tradeoffs:

- markup can become class-heavy
- requires conventions
- abstraction strategy differs from semantic component CSS

---

# 76. CSS Modules and Scoped Styles

A CSS Module may contain:

```css
.card {
  padding: 1rem;
}
```

A build tool can generate a scoped class name so `.card` does not collide globally.

Useful in component frameworks.

Other ecosystems may provide framework-specific scoped styles.

---

# 77. Design Tokens

Design tokens are reusable design decisions.

```css
:root {
  --color-primary-500: #2563eb;
  --color-danger-500: #dc2626;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.08);
  --shadow-md: 0 8px 24px rgb(0 0 0 / 0.1);
}
```

Semantic mapping:

```css
:root {
  --color-action: var(--color-primary-500);
  --color-error: var(--color-danger-500);
}
```

This makes redesigns much easier.

---

# 78. Reusable Component Patterns

A component should generally have:

- a base
- optional variants
- optional sizes
- states
- clear child element classes

Example:

```css
.alert {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid;
  border-radius: 10px;
}

.alert--success {
  color: #166534;
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.alert--danger {
  color: #991b1b;
  background: #fef2f2;
  border-color: #fecaca;
}
```

---

# 79. Common Layout Recipes

## Center anything

```css
.center {
  display: grid;
  place-items: center;
}
```

---

## Sidebar + main

```css
.layout {
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  gap: 2rem;
}
```

Responsive:

```css
@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

---

## Auto-responsive cards

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1rem;
}
```

---

## Full-height application shell

```css
.app {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

---

# 80. Navigation Patterns

Horizontal navigation:

```css
.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav a {
  color: inherit;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}
```

Responsive wrapping:

```css
.nav {
  flex-wrap: wrap;
}
```

Do not hide important navigation solely based on hover because touch devices do not have reliable hover interaction.

---

# 81. Card Patterns

```css
.card {
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 8px;
}

.card__title {
  margin: 0;
}

.card__actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}
```

---

# 82. Modal Pattern

Visual CSS example:

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgb(0 0 0 / 0.55);
  z-index: var(--z-modal);
}

.modal {
  width: min(600px, 100%);
  max-height: min(80dvh, 700px);
  overflow: auto;
  padding: 1.5rem;
  border-radius: 14px;
  background: white;
}
```

Important: modal accessibility cannot be solved with CSS alone. You also need correct semantics, focus handling, keyboard behavior, and appropriate scripting.

---

# 83. Tooltip Pattern

Basic visual styling:

```css
.tooltip {
  position: absolute;
  max-width: 240px;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: #111827;
  color: white;
  font-size: 0.875rem;
}
```

Tooltips need more than CSS for complete accessible interaction behavior in many real applications.

---

# 84. Form Layout Patterns

Two-column form:

```css
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field--full {
  grid-column: 1 / -1;
}

@media (max-width: 700px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
```

Use this for:

- user profile
- invoice metadata
- purchase order details
- registration forms

---

# 85. Dashboard Layout Pattern

```css
.dashboard {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100dvh;
}

.dashboard__main {
  min-width: 0;
  padding: 1.5rem;
}

.dashboard__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 1rem;
}
```

`min-width: 0` is important when charts/tables or long content would otherwise force overflow.

---

# 86. Holy Grail Layout

```css
.page {
  min-height: 100dvh;
  display: grid;
  grid-template:
    "header header header" auto
    "left main right" 1fr
    "footer footer footer" auto
    / 220px minmax(0, 1fr) 220px;
}
```

Responsive version:

```css
@media (max-width: 900px) {
  .page {
    grid-template:
      "header" auto
      "main" 1fr
      "left" auto
      "right" auto
      "footer" auto
      / 1fr;
  }
}
```

---

# 87. Responsive Sidebar Pattern

```css
.shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
}

@media (max-width: 768px) {
  .shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}
```

In a real accessible navigation drawer, JavaScript may control open/close state, focus management, and ARIA attributes.

---

# 88. Truncation and Long Content

Single line:

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

Breaking long values:

```css
.break-anywhere {
  overflow-wrap: anywhere;
}
```

For multi-line clamping, browser-specific behavior may be needed depending on the project requirements. Always keep critical information accessible rather than relying on visual truncation alone.

---

# 89. CSS Reset and Normalize

Browsers provide default styles.

A minimal reset:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-height: 100dvh;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}
```

A reset removes or standardizes defaults.

A normalization approach tries to preserve useful defaults while making browser behavior more consistent.

---

# 90. Browser Compatibility

Before using a new CSS feature in production:

1. know your supported browser list
2. check feature support
3. provide fallbacks where needed
4. test real target browsers
5. use progressive enhancement

Example fallback:

```css
.card {
  display: block;
}

@supports (display: grid) {
  .card-list {
    display: grid;
  }
}
```

---

# 91. Progressive Enhancement

Start with a working baseline.

Then add advanced styling where supported.

```css
.gallery {
  display: block;
}

@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Your page should remain usable even when a decorative enhancement is unavailable.

---

# 92. CSS Performance

CSS performance usually matters most when large pages, complex rendering, animations, and heavy effects interact.

Good practices:

- keep selectors understandable
- avoid huge unused stylesheets
- split critical and non-critical CSS appropriately
- minimize expensive visual effects on large regions
- avoid animating layout-heavy properties when a transform can achieve the same visual effect
- reduce unnecessary web fonts
- compress production CSS
- cache static CSS assets
- remove dead styles
- avoid massive DOM + CSS combinations
- profile rather than guessing

### Animation example

Often preferable:

```css
.item {
  transform: translateX(0);
}

.item.is-open {
  transform: translateX(200px);
}
```

Rather than repeatedly animating layout dimensions when not required.

---

# 93. Debugging CSS

A systematic process:

## Step 1: Is the selector matching?

Use browser DevTools.

Check whether the rule appears.

---

## Step 2: Is the declaration crossed out?

If yes, another rule may be winning.

Inspect:

- specificity
- source order
- layer order
- `!important`
- inherited values

---

## Step 3: Is the property valid?

Example typo:

```css
widht: 100%;
```

Browser ignores unknown properties.

---

## Step 4: Check box sizes

Inspect:

- content
- padding
- border
- margin

---

## Step 5: Check layout parent

For flex/grid problems, inspect the parent first.

---

## Step 6: Add temporary debug outlines

```css
* {
  outline: 1px solid rgb(255 0 0 / 0.15);
}
```

Use only temporarily.

---

## Step 7: Reduce the problem

Create a minimal reproduction.

Remove unrelated styles until the issue becomes obvious.

---

# 94. Common CSS Mistakes

## Mistake 1: Using fixed widths everywhere

Bad:

```css
.card {
  width: 600px;
}
```

Better:

```css
.card {
  width: min(600px, 100%);
}
```

---

## Mistake 2: Excessive absolute positioning

Do not use absolute positioning to build the entire page layout.

Use flexbox or grid.

---

## Mistake 3: Too much `!important`

Bad:

```css
.button {
  color: white !important;
}
```

Use `!important` deliberately, not as a default conflict solver.

---

## Mistake 4: Deep selectors

Bad:

```css
main .content .section .card .body p span {
  color: red;
}
```

Better:

```css
.card__highlight {
  color: red;
}
```

---

## Mistake 5: Removing focus styles

Bad:

```css
button {
  outline: none;
}
```

Better:

```css
button:focus-visible {
  outline: 3px solid #2563eb;
}
```

---

## Mistake 6: Using `<br>` for spacing

Spacing belongs in CSS.

---

## Mistake 7: Magic numbers everywhere

Bad:

```css
margin-top: 37px;
padding-left: 13px;
```

Prefer a spacing system.

---

## Mistake 8: Styling globally without scope

Risky:

```css
div {
  margin: 10px;
}
```

This can unintentionally affect every component.

---

# 95. Naming and File Organization

Example structure:

```text
styles/
├── reset.css
├── tokens.css
├── base.css
├── layout/
│   ├── container.css
│   ├── grid.css
│   └── app-shell.css
├── components/
│   ├── button.css
│   ├── card.css
│   ├── modal.css
│   └── table.css
├── utilities/
│   ├── spacing.css
│   └── visibility.css
└── themes/
    ├── light.css
    └── dark.css
```

Rules of thumb:

- name classes by purpose
- avoid names tied to current color when semantic meaning matters
- keep components small
- centralize repeated design values
- avoid giant files with unrelated styles

Bad:

```css
.red-button {}
.left-box {}
.big-text {}
```

Better:

```css
.button--danger {}
.sidebar {}
.page-title {}
```

---

# 96. Real-World Mini Projects

Use these projects to practice progressively.

## Project 1: Profile card

Practice:

- box model
- typography
- border radius
- shadows
- flexbox

---

## Project 2: Responsive pricing page

Practice:

- CSS Grid
- cards
- media queries
- buttons
- badges

---

## Project 3: Login form

Practice:

- form styling
- focus states
- validation states
- responsive sizing
- accessibility

---

## Project 4: Admin dashboard

Practice:

- page shell
- sidebar
- responsive grid
- tables
- sticky header
- design tokens
- dark mode

---

## Project 5: Invoice page

Practice:

- print CSS
- tables
- grid/flex layout
- responsive behavior
- typography
- totals section

Example:

```css
.invoice {
  width: min(900px, 100%);
  margin-inline: auto;
  padding: clamp(1rem, 4vw, 3rem);
  background: white;
}

.invoice__meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.invoice__total {
  margin-left: auto;
  width: min(320px, 100%);
}

@media print {
  .invoice {
    width: 100%;
    padding: 0;
  }

  .no-print {
    display: none;
  }
}
```

---

## Project 6: Product gallery

Practice:

- responsive grid
- `object-fit`
- aspect ratio
- hover states
- badges
- text truncation

---

## Project 7: Component library

Build:

- button
- input
- select
- checkbox
- card
- alert
- badge
- modal
- tabs
- table
- pagination

Practice:

- naming
- tokens
- variants
- states
- accessibility
- architecture

---

# 97. Interview Questions

## What is the CSS box model?

Content, padding, border, and margin.

---

## What does `box-sizing: border-box` do?

It makes the declared width and height include padding and border.

---

## Flexbox vs Grid?

Flexbox is generally best for one-dimensional layout.

Grid is generally best for two-dimensional layout.

---

## Difference between `display: none` and `visibility: hidden`?

`display: none` removes the element from layout.

`visibility: hidden` keeps its layout space while hiding it visually.

---

## Difference between relative and absolute positioning?

`position: relative` keeps the element in normal flow and can establish a positioning context.

`position: absolute` removes the element from normal flow and positions it relative to a relevant containing block.

---

## What is specificity?

The selector weighting system used when competing declarations are otherwise at comparable cascade priority.

---

## What is the cascade?

The process the browser uses to choose which declaration wins.

---

## What is inheritance?

The mechanism through which some property values pass from parent elements to descendants.

---

## `em` vs `rem`?

`em` is based on font sizing in the current/local context.

`rem` is based on the root font size.

---

## What is a stacking context?

An isolated stacking environment that affects how z-index values are compared.

---

## What is the difference between pseudo-class and pseudo-element?

Pseudo-class:

```css
button:hover
```

Represents state or structural condition.

Pseudo-element:

```css
p::first-line
```

Represents a virtual part of an element.

---

## What does `min-width: 0` fix in flex/grid?

It allows an item to shrink below its min-content width, often preventing unexpected overflow.

---

## What is mobile-first CSS?

Write base rules for smaller screens, then progressively enhance for wider screens using `min-width` media queries.

---

## Why prefer `gap`?

It expresses spacing between layout items directly and avoids special margin rules for first/last items.

---

## Why are custom properties useful?

They allow reusable dynamic values for:

- themes
- design tokens
- components
- states
- responsive calculations

---

# 98. CSS Checklist

Before calling a page finished, check:

- [ ] `box-sizing: border-box` is applied consistently.
- [ ] Layout works on narrow screens.
- [ ] Layout works on wide screens.
- [ ] Text can grow without breaking layout.
- [ ] Long words/IDs/URLs do not destroy layout.
- [ ] Keyboard focus is visible.
- [ ] Color contrast is sufficient.
- [ ] Buttons have hover, focus, active, and disabled states when relevant.
- [ ] Forms clearly show labels and errors.
- [ ] Images are responsive.
- [ ] Images use proper aspect behavior.
- [ ] Tables are usable on small screens.
- [ ] Motion respects reduced-motion preferences.
- [ ] Print styles exist when the feature needs printing.
- [ ] CSS class names are understandable.
- [ ] Specificity is controlled.
- [ ] `!important` is not being used as a routine fix.
- [ ] No unnecessary fixed heights clip content.
- [ ] No unexplained z-index values such as `999999`.
- [ ] Components work in different container sizes.
- [ ] Dark mode has been checked if supported.
- [ ] Browser compatibility matches project requirements.
- [ ] Unused CSS is removed.
- [ ] DevTools shows no obvious overridden/invalid declarations caused by mistakes.
- [ ] Focus indicators are not clipped by overflow.
- [ ] UI still works at zoomed text/browser settings.
- [ ] Semantic DOM order matches meaningful reading order.

---

# 99. Learning Roadmap

## Stage 1: Absolute beginner

Learn:

1. syntax
2. selectors
3. colors
4. fonts
5. margin
6. padding
7. borders
8. width/height
9. box model

Build:

- profile card
- simple landing page section

---

## Stage 2: Layout fundamentals

Learn:

1. normal flow
2. display
3. position
4. flexbox
5. grid
6. overflow

Build:

- navbar
- two-column page
- card grid

---

## Stage 3: Responsive design

Learn:

1. percentages
2. `rem`
3. viewport units
4. `min()`
5. `max()`
6. `clamp()`
7. media queries
8. responsive images
9. container queries

Build:

- responsive pricing page
- mobile dashboard

---

## Stage 4: Component styling

Learn:

1. forms
2. buttons
3. tables
4. cards
5. modals
6. tooltips
7. badges
8. states

Build a small design system.

---

## Stage 5: Advanced CSS

Learn:

1. custom properties
2. cascade layers
3. nesting
4. scope
5. subgrid
6. advanced selectors
7. logical properties
8. transitions
9. animations
10. accessibility preferences

---

## Stage 6: Production CSS

Learn:

1. architecture
2. BEM / utility patterns
3. tokens
4. themes
5. browser compatibility
6. performance
7. debugging
8. maintainability
9. automated testing strategy around UI
10. team conventions

---

# 100. Quick Reference Cheat Sheet

## Center a page container

```css
.container {
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}
```

## Center an item

```css
.center {
  display: grid;
  place-items: center;
}
```

## Flex row

```css
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
```

## Space between

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
```

## Responsive grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 1rem;
}
```

## Truncate one line

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## Responsive image

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Cover image

```css
.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
```

## Square item

```css
.square {
  aspect-ratio: 1;
}
```

## Sticky header

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## Full-screen overlay

```css
.overlay {
  position: fixed;
  inset: 0;
}
```

## Fluid heading

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

## Accessible focus

```css
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}
```

## Theme variable

```css
:root {
  --brand: #2563eb;
}
```

## Basic card

```css
.card {
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}
```

## Responsive two-column layout

```css
.layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

---

# Bonus: A Strong Starter CSS File

```css
/* =========================
   1. Design tokens
   ========================= */

:root {
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e2e8f0;
  --color-primary: #2563eb;
  --color-danger: #dc2626;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.08);
  --shadow-md: 0 10px 30px rgb(0 0 0 / 0.1);

  --content-width: 1120px;
}

/* =========================
   2. Reset
   ========================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-height: 100dvh;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-bg);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

/* =========================
   3. Typography
   ========================= */

h1,
h2,
h3,
p {
  margin-block-start: 0;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

p {
  max-width: 70ch;
}

/* =========================
   4. Layout
   ========================= */

.container {
  width: min(var(--content-width), calc(100% - 2rem));
  margin-inline: auto;
}

.stack {
  display: grid;
  gap: var(--space-4);
}

.cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
}

.auto-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(240px, 100%), 1fr)
  );
  gap: var(--space-4);
}

/* =========================
   5. Components
   ========================= */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-weight: 600;
}

.button--primary {
  color: white;
  background: var(--color-primary);
}

.button--danger {
  color: white;
  background: var(--color-danger);
}

.card {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg);
  box-shadow: var(--shadow-sm);
}

/* =========================
   6. Accessibility
   ========================= */

:focus-visible {
  outline: 3px solid rgb(37 99 235 / 0.35);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# Bonus: CSS Decision Guide

Ask these questions when choosing a technique.

## I need to align items in one row

Use Flexbox.

```css
display: flex;
```

---

## I need rows and columns

Use Grid.

```css
display: grid;
```

---

## I need a component to adapt to its parent size

Consider a container query.

---

## I need a page to adapt to viewport width

Use flexible layout plus media queries when required.

---

## I need an item in a corner of its card

Use a relatively positioned parent and absolutely positioned child.

---

## I need an element pinned to the viewport

Use `position: fixed`.

---

## I need an element that follows scrolling and then sticks

Use `position: sticky`.

---

## I need responsive text size

Use `clamp()`.

---

## I need reusable colors or spacing

Use custom properties/design tokens.

---

## I need a visual variant of a component

Use a modifier class or data attribute.

Example:

```css
.button[data-variant="danger"] {
  background: #dc2626;
}
```

---

# Bonus: Practice Challenges

Try solving these without copying the answer first.

## Challenge 1

Create a button group where:

- buttons sit in a row
- they wrap on small screens
- spacing stays consistent

Hint: Flexbox + `gap` + `flex-wrap`.

---

## Challenge 2

Create a card grid where:

- large screens show many columns
- smaller screens automatically show fewer columns
- no breakpoint is required

Hint:

```css
repeat(auto-fit, minmax(...))
```

---

## Challenge 3

Create an invoice layout where:

- supplier information is left
- customer information is right
- mobile view stacks them
- print view removes action buttons

---

## Challenge 4

Create a sidebar dashboard where:

- sidebar is 260px
- main area fills remaining space
- main tables do not force the page wider than the viewport

Hint:

```css
grid-template-columns: 260px minmax(0, 1fr);
```

---

## Challenge 5

Create a theme using only custom properties.

Switch between:

- light
- dark

without duplicating component declarations.

---

# Final Principles to Remember

1. **Understand the cascade before fighting it.**
2. **Prefer classes over overly specific selectors.**
3. **Use Flexbox and Grid instead of layout hacks.**
4. **Design for flexible content, not only perfect sample text.**
5. **Use responsive constraints instead of fixed dimensions everywhere.**
6. **Keep keyboard focus visible.**
7. **Use semantic HTML and let CSS style it.**
8. **Treat CSS variables as a design-system tool, not only a convenience.**
9. **Keep component selectors shallow and predictable.**
10. **Use design tokens for repeated colors, sizes, spacing, radius, and shadows.**
11. **Use media queries for viewport-level changes and container queries for reusable component-level changes.**
12. **Use `min-width: 0` when flex/grid children overflow unexpectedly.**
13. **Do not use `!important` as your default conflict-resolution strategy.**
14. **Test real content: long names, large numbers, errors, empty states, and translations.**
15. **Respect reduced-motion and user color preferences when relevant.**
16. **Use DevTools constantly.**
17. **Prefer maintainable CSS over clever CSS.**
18. **Learn patterns, then understand when not to use them.**
19. **CSS mastery comes from building layouts, debugging failures, and refactoring working code.**
20. **A good stylesheet should be easy for another developer to understand and safely change.**

---

# Suggested Mastery Sequence

```text
HTML structure
    ↓
CSS syntax
    ↓
Selectors
    ↓
Cascade + Specificity + Inheritance
    ↓
Box Model
    ↓
Normal Flow
    ↓
Flexbox
    ↓
Grid
    ↓
Responsive Design
    ↓
Typography + Forms + Media
    ↓
Pseudo Classes + Pseudo Elements
    ↓
Custom Properties
    ↓
Transforms + Transitions + Animations
    ↓
Modern CSS
    ↓
Accessibility
    ↓
Architecture + Design Systems
    ↓
Performance + Debugging
    ↓
Production Projects
```

---

## End of CSS Mastery Handbook

Use this file in three ways:

1. **Learn:** study one section at a time.
2. **Practice:** recreate each example without copying.
3. **Revise:** use the table of contents and quick-reference sections before interviews or project work.

The fastest path to mastering CSS is not memorizing every property. It is understanding the layout system, cascade, sizing behavior, responsive constraints, component patterns, and debugging process well enough to reason about unfamiliar designs.
