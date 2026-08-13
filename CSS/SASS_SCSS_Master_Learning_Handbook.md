# Sass / SCSS Master Learning Handbook
## Beginner → Intermediate → Advanced → Production

> **Purpose:** A single-file learning handbook for Sass/SCSS that explains the language from first principles, shows practical scenarios, teaches modern architecture, and highlights current best practices.
>
> **Primary syntax used:** SCSS (`.scss`) because it is CSS-compatible and is the most common syntax in modern projects.
>
> **Modern Sass baseline:** Dart Sass and the module system (`@use` / `@forward`). Legacy Sass `@import` is covered only for migration knowledge.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is Sass?](#2-what-is-sass)
3. [Sass vs SCSS vs CSS](#3-sass-vs-scss-vs-css)
4. [How Sass Actually Works](#4-how-sass-actually-works)
5. [Installing and Running Dart Sass](#5-installing-and-running-dart-sass)
6. [Your First SCSS File](#6-your-first-scss-file)
7. [Comments](#7-comments)
8. [Variables](#8-variables)
9. [Variable Scope, Shadowing, `!global`, and `!default`](#9-variable-scope-shadowing-global-and-default)
10. [Sass Values and Data Types](#10-sass-values-and-data-types)
11. [Operators and Expressions](#11-operators-and-expressions)
12. [Interpolation](#12-interpolation)
13. [Nesting](#13-nesting)
14. [The Parent Selector `&`](#14-the-parent-selector-)
15. [Nested Properties](#15-nested-properties)
16. [CSS Custom Properties with Sass](#16-css-custom-properties-with-sass)
17. [Partials and File Organization](#17-partials-and-file-organization)
18. [The Modern Module System: `@use`](#18-the-modern-module-system-use)
19. [`@forward` and Library APIs](#19-forward-and-library-apis)
20. [Configurable Modules](#20-configurable-modules)
21. [Mixins](#21-mixins)
22. [Mixin Arguments](#22-mixin-arguments)
23. [`@content` and Content Blocks](#23-content-and-content-blocks)
24. [Functions](#24-functions)
25. [Control Flow: `@if`, `@else if`, `@else`](#25-control-flow-if-else-if-else)
26. [Loops: `@for`, `@each`, `@while`](#26-loops-for-each-while)
27. [`@debug`, `@warn`, and `@error`](#27-debug-warn-and-error)
28. [`@extend` and Placeholder Selectors](#28-extend-and-placeholder-selectors)
29. [`@at-root`](#29-at-root)
30. [Built-In Modules](#30-built-in-modules)
31. [`sass:math`](#31-sassmath)
32. [`sass:string`](#32-sassstring)
33. [`sass:color`](#33-sasscolor)
34. [`sass:list`](#34-sasslist)
35. [`sass:map`](#35-sassmap)
36. [`sass:selector`](#36-sassselector)
37. [`sass:meta`](#37-sassmeta)
38. [CSS At-Rules Inside Sass](#38-css-at-rules-inside-sass)
39. [Responsive Design Patterns](#39-responsive-design-patterns)
40. [Design Tokens with Sass Maps](#40-design-tokens-with-sass-maps)
41. [Themes and Dark Mode](#41-themes-and-dark-mode)
42. [Generating Utility Classes](#42-generating-utility-classes)
43. [Component Architecture](#43-component-architecture)
44. [The 7-1 Architecture Pattern](#44-the-7-1-architecture-pattern)
45. [Real-World Project Structure](#45-real-world-project-structure)
46. [Sass + BEM](#46-sass--bem)
47. [Sass + Modern CSS](#47-sass--modern-css)
48. [Sass in Vite, Webpack, Angular, React, Next.js, and Vue](#48-sass-in-vite-webpack-angular-react-nextjs-and-vue)
49. [The Sass JavaScript API](#49-the-sass-javascript-api)
50. [CLI Workflow and Build Options](#50-cli-workflow-and-build-options)
51. [Source Maps](#51-source-maps)
52. [Production Optimization](#52-production-optimization)
53. [Debugging Sass](#53-debugging-sass)
54. [Common Sass Mistakes](#54-common-sass-mistakes)
55. [Modern Sass Deprecations and Migration](#55-modern-sass-deprecations-and-migration)
56. [Migrating from `@import` to `@use`](#56-migrating-from-import-to-use)
57. [Sass Variables vs CSS Variables](#57-sass-variables-vs-css-variables)
58. [Mixins vs Functions vs Placeholders vs CSS Classes](#58-mixins-vs-functions-vs-placeholders-vs-css-classes)
59. [Sass Coding Standards](#59-sass-coding-standards)
60. [Accessibility and Sass](#60-accessibility-and-sass)
61. [Testing and Quality Checks](#61-testing-and-quality-checks)
62. [Performance and CSS Size](#62-performance-and-css-size)
63. [Advanced Practical Patterns](#63-advanced-practical-patterns)
64. [Complete Mini Design System Example](#64-complete-mini-design-system-example)
65. [Common Interview Questions](#65-common-interview-questions)
66. [Practice Exercises](#66-practice-exercises)
67. [Project Ideas](#67-project-ideas)
68. [30-Day Learning Roadmap](#68-30-day-learning-roadmap)
69. [Sass Cheat Sheet](#69-sass-cheat-sheet)
70. [Glossary](#70-glossary)
71. [Final Best-Practice Checklist](#71-final-best-practice-checklist)
72. [Official References](#72-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize Sass syntax in one sitting.

A better learning cycle is:

1. Read one concept.
2. Type the example yourself.
3. Compile it.
4. Inspect the generated CSS.
5. Modify the example.
6. Break it intentionally.
7. Read the compiler error.
8. Rebuild the same idea in a tiny project.

A beginner should first focus on:

- variables
- nesting
- `&`
- partials
- `@use`
- mixins
- functions
- maps
- loops
- responsive patterns

An intermediate learner should then master:

- module architecture
- configuration
- `@forward`
- design tokens
- utility generation
- theming
- CSS custom properties
- reusable APIs

An advanced learner should focus on:

- library design
- scalable architecture
- CSS-output control
- selector manipulation
- meta-programming
- migration strategy
- compiler integration
- testing and performance

---

# 2. What Is Sass?

**Sass** stands for **Syntactically Awesome Style Sheets**.

Sass is a stylesheet language that is compiled into regular CSS.

Browsers do **not** read Sass directly.

You write:

```scss
$brand-color: #6c5ce7;

.button {
  background: $brand-color;
}
```

Sass compiles it into:

```css
.button {
  background: #6c5ce7;
}
```

Sass adds programming-like capabilities on top of CSS:

- variables
- nesting
- reusable mixins
- custom functions
- loops
- conditions
- maps and lists
- modules
- mathematical operations
- selector utilities
- code organization

## Why use Sass?

Imagine a large application with:

- 200 components
- 30 colors
- 15 spacing values
- many responsive breakpoints
- light and dark themes
- repeated button/card/form patterns

Plain CSS can handle all of this, especially with modern CSS features, but Sass can make **authoring and organization** easier.

Sass is especially useful when you need compile-time generation.

---

# 3. Sass vs SCSS vs CSS

The word **Sass** can mean the language as a whole, but Sass supports two source syntaxes.

## SCSS syntax

Extension:

```text
.scss
```

SCSS uses braces and semicolons.

```scss
.card {
  padding: 1rem;

  .title {
    font-weight: 700;
  }
}
```

SCSS looks like CSS, which makes it easy for CSS developers to learn.

## Indented Sass syntax

Extension:

```text
.sass
```

Example:

```sass
.card
  padding: 1rem

  .title
    font-weight: 700
```

No braces or semicolons are required.

## Which should you learn?

For most modern web projects, learn **SCSS first**.

Why?

- every valid CSS file is almost directly understandable as SCSS
- most examples in teams use SCSS
- easier migration from plain CSS
- braces make nested structures explicit
- tooling support is excellent

This handbook primarily uses SCSS.

---

# 4. How Sass Actually Works

Think of Sass as a compiler pipeline:

```text
SCSS source
    ↓
Sass compiler
    ↓
Generated CSS
    ↓
Browser
```

Example:

```scss
$space: 8px;

.card {
  padding: $space * 2;
}
```

Generated CSS:

```css
.card {
  padding: 16px;
}
```

The browser never sees `$space`.

This distinction matters because Sass variables are **compile-time values**, whereas CSS custom properties are **runtime values**.

---

# 5. Installing and Running Dart Sass

The modern reference implementation is **Dart Sass**.

## Install inside a Node.js project

```bash
npm install --save-dev sass
```

Check the installed version:

```bash
npx sass --version
```

Compile one file:

```bash
npx sass src/scss/main.scss dist/css/main.css
```

Watch one file:

```bash
npx sass --watch src/scss/main.scss:dist/css/main.css
```

Watch a directory:

```bash
npx sass --watch src/scss:dist/css
```

Compressed production output:

```bash
npx sass --style=compressed src/scss/main.scss dist/css/main.min.css
```

## Example package.json

```json
{
  "scripts": {
    "sass:dev": "sass --watch src/scss:dist/css",
    "sass:build": "sass --style=compressed --no-source-map src/scss/main.scss dist/css/main.min.css"
  },
  "devDependencies": {
    "sass": "^1"
  }
}
```

Then:

```bash
npm run sass:dev
```

or:

```bash
npm run sass:build
```

> Pin versions according to your project's dependency policy rather than blindly relying on the newest major release.

---

# 6. Your First SCSS File

Create:

```text
src/
└── scss/
    └── main.scss
```

Write:

```scss
$primary: #2563eb;
$radius: 8px;

.button {
  padding: 0.75rem 1rem;
  color: white;
  background: $primary;
  border: 0;
  border-radius: $radius;

  &:hover {
    background: #1d4ed8;
  }
}
```

Compile it.

Generated CSS:

```css
.button {
  padding: 0.75rem 1rem;
  color: white;
  background: #2563eb;
  border: 0;
  border-radius: 8px;
}

.button:hover {
  background: #1d4ed8;
}
```

You already used two major Sass concepts:

- variables
- parent selector nesting

---

# 7. Comments

Sass supports CSS-style block comments and Sass-only line comments.

## CSS comment

```scss
/* This comment usually appears in generated CSS. */
.card {
  padding: 1rem;
}
```

## Silent comment

```scss
// Sass-only note.
// This isn't normally emitted into CSS.
.card {
  padding: 1rem;
}
```

Use `//` for internal developer explanations.

Use `/* ... */` when the comment should be preserved for CSS consumers, license information, or generated documentation.

---

# 8. Variables

Sass variables begin with `$`.

```scss
$primary: #2563eb;
$spacing: 8px;
$font-stack: Inter, Arial, sans-serif;
```

Use them:

```scss
body {
  font-family: $font-stack;
}

.button {
  padding: $spacing * 2;
  background: $primary;
}
```

## Why variables matter

Without variables:

```scss
.header {
  color: #2563eb;
}

.button {
  background: #2563eb;
}

.link {
  color: #2563eb;
}
```

With a variable:

```scss
$primary: #2563eb;

.header {
  color: $primary;
}

.button {
  background: $primary;
}

.link {
  color: $primary;
}
```

Change the value once and all usages are updated at compile time.

## Variable naming

Prefer meaningful names:

```scss
$color-primary: #2563eb;
$space-md: 1rem;
$radius-card: 12px;
$breakpoint-lg: 64rem;
```

Avoid:

```scss
$c1: #2563eb;
$x: 16px;
$big: 64rem;
```

---

# 9. Variable Scope, Shadowing, `!global`, and `!default`

## Global variables

```scss
$color: blue;

.card {
  color: $color;
}
```

## Local variables

```scss
$color: blue;

.card {
  $color: red;
  color: $color;
}

.alert {
  color: $color;
}
```

The card uses red while the alert uses blue.

## Shadowing

A local variable can temporarily hide a global one.

```scss
$spacing: 8px;

.card {
  $spacing: 16px;
  padding: $spacing;
}

.panel {
  padding: $spacing;
}
```

Output conceptually:

```css
.card {
  padding: 16px;
}

.panel {
  padding: 8px;
}
```

## `!global`

`!global` updates an existing global variable from a local scope.

```scss
$theme: light;

@mixin enable-dark {
  $theme: dark !global;
}
```

Use this rarely.

Global mutation makes code harder to reason about.

Prefer:

- function return values
- module configuration
- maps
- explicit mixin arguments

## `!default`

`!default` is very important when designing configurable modules.

```scss
$primary: #2563eb !default;
```

Meaning:

> Use `#2563eb` only if the variable was not configured with another value.

This becomes especially useful with `@use ... with (...)`.

---

# 10. Sass Values and Data Types

Sass has several important value types.

## Numbers

```scss
$size: 16px;
$ratio: 1.5;
$percent: 50%;
$duration: 250ms;
```

Units matter.

```scss
width: 10px + 5px;
```

is valid.

Operations involving incompatible units may fail.

---

## Strings

Quoted:

```scss
$family: "Inter";
```

Unquoted:

```scss
$position: center;
```

String behavior can matter when generating selectors, URLs, or property values.

---

## Colors

```scss
$red: #ff0000;
$brand: rgb(37 99 235);
$overlay: rgb(0 0 0 / 0.5);
```

Use the `sass:color` module for programmatic color manipulation.

---

## Booleans

```scss
$rounded: true;
$show-shadow: false;
```

Useful in conditions:

```scss
@if $rounded {
  border-radius: 1rem;
}
```

---

## Null

```scss
$value: null;
```

`null` often means "no value".

A property whose final value is `null` is generally omitted.

```scss
$border: null;

.card {
  border: $border;
}
```

This can be useful in configurable APIs.

---

## Lists

Space-separated:

```scss
$spaces: 4px 8px 16px 24px;
```

Comma-separated:

```scss
$fonts: Inter, Arial, sans-serif;
```

Lists are useful for:

- spacing scales
- shadows
- breakpoints
- utility generation
- collections of values

---

## Maps

A map stores key/value pairs.

```scss
$colors: (
  "primary": #2563eb,
  "success": #16a34a,
  "danger": #dc2626
);
```

Maps are one of the most powerful data structures in Sass.

They are ideal for:

- design tokens
- themes
- breakpoints
- utility generation
- component configuration

---

## Calculations

Modern Sass can preserve CSS calculations when needed.

```scss
.sidebar {
  width: calc(100% - 20rem);
}
```

Sass may simplify compatible calculations at compile time while preserving browser-dependent calculations.

---

# 11. Operators and Expressions

Sass supports several categories of operators.

## Arithmetic

```scss
@use "sass:math";

$base: 8px;

.card {
  padding: $base * 2;
  margin: $base + 4px;
  width: math.div(100%, 3);
}
```

Use `math.div()` for Sass division.

Do not write legacy Sass division like:

```scss
// Legacy / deprecated behavior
$half: 20px / 2;
```

Prefer:

```scss
@use "sass:math";

$half: math.div(20px, 2);
```

---

## Equality

```scss
@if $theme == dark {
  // ...
}
```

```scss
@if $size != small {
  // ...
}
```

---

## Comparison

```scss
@if $columns > 12 {
  @error "Too many columns";
}
```

Operators include:

```text
<
<=
>
>=
==
!=
```

---

## Boolean logic

```scss
@if $enabled and $visible {
  display: block;
}
```

```scss
@if $mobile or $tablet {
  padding: 1rem;
}
```

```scss
@if not $disabled {
  cursor: pointer;
}
```

---

# 12. Interpolation

Interpolation injects a Sass expression into text.

Syntax:

```scss
#{$expression}
```

## Dynamic selector

```scss
$name: "primary";

.button-#{$name} {
  background: blue;
}
```

Output:

```css
.button-primary {
  background: blue;
}
```

## Dynamic property

```scss
$side: left;

.box {
  margin-#{$side}: 1rem;
}
```

Output:

```css
.box {
  margin-left: 1rem;
}
```

## CSS custom property value

```scss
$brand: #2563eb;

:root {
  --brand: #{$brand};
}
```

Interpolation is especially important inside custom-property values because those values are parsed as CSS-compatible text.

## When not to overuse interpolation

Do not write:

```scss
color: #{$brand};
```

when this works:

```scss
color: $brand;
```

Use interpolation only when textual insertion is actually needed.

---

# 13. Nesting

Sass allows selectors to be nested.

```scss
.card {
  padding: 1rem;

  .title {
    font-size: 1.25rem;
  }
}
```

Output:

```css
.card {
  padding: 1rem;
}

.card .title {
  font-size: 1.25rem;
}
```

## Practical navigation example

```scss
.nav {
  display: flex;
  gap: 1rem;

  a {
    color: #334155;
    text-decoration: none;

    &:hover {
      color: #2563eb;
    }
  }
}
```

## Avoid excessive nesting

Bad:

```scss
.page {
  .header {
    .nav {
      ul {
        li {
          a {
            span {
              // ...
            }
          }
        }
      }
    }
  }
}
```

This creates long, tightly coupled selectors.

Prefer shallow nesting:

```scss
.site-nav {
  // ...
}

.site-nav__link {
  // ...
}

.site-nav__icon {
  // ...
}
```

A useful rule of thumb:

> Most component styles should stay within roughly 1–3 nesting levels.

---

# 14. The Parent Selector `&`

`&` means "the current outer selector".

## Pseudo-class

```scss
.button {
  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid currentColor;
  }
}
```

Output:

```css
.button:hover { ... }
.button:focus-visible { ... }
```

## BEM modifier

```scss
.button {
  &--primary {
    background: blue;
  }

  &--danger {
    background: red;
  }
}
```

Output:

```css
.button--primary { ... }
.button--danger { ... }
```

## BEM element

```scss
.card {
  &__title {
    font-weight: 700;
  }

  &__body {
    padding: 1rem;
  }
}
```

## Context selector

```scss
.button {
  .dark-theme & {
    color: white;
  }
}
```

Output:

```css
.dark-theme .button {
  color: white;
}
```

This can be useful, but CSS custom properties are often cleaner for theming.

---

# 15. Nested Properties

Sass can group namespaced CSS properties.

```scss
.card {
  font: {
    family: Inter, sans-serif;
    size: 1rem;
    weight: 500;
  }
}
```

Output:

```css
.card {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
}
```

Another example:

```scss
.panel {
  border: {
    width: 1px;
    style: solid;
    color: #d1d5db;
    radius: 12px;
  }
}
```

Although this feature exists, many teams prefer explicit properties because they are easier to scan.

---

# 16. CSS Custom Properties with Sass

Sass variables:

```scss
$primary: #2563eb;
```

exist at compile time.

CSS variables:

```css
--primary: #2563eb;
```

exist in the browser.

You can combine both.

```scss
$brand-light: #2563eb;
$brand-dark: #60a5fa;

:root {
  --brand: #{$brand-light};
}

[data-theme="dark"] {
  --brand: #{$brand-dark};
}

.button {
  background: var(--brand);
}
```

This is often the best of both worlds:

- Sass generates token structures
- CSS variables provide runtime theming

---

# 17. Partials and File Organization

A **partial** is usually a Sass file whose filename begins with `_`.

Example:

```text
_variables.scss
_buttons.scss
_cards.scss
```

You can load:

```scss
@use "variables";
```

without writing the underscore or extension.

Partials help split a large codebase into smaller files.

Example:

```text
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── components/
│   ├── _button.scss
│   └── _card.scss
└── main.scss
```

Do not make every tiny rule its own file. Organize by meaningful responsibility.

---

# 18. The Modern Module System: `@use`

Modern Sass uses `@use`.

Example file:

```scss
// _tokens.scss
$primary: #2563eb;
$radius: 8px;

@mixin focus-ring {
  outline: 3px solid rgba(37, 99, 235, 0.35);
}
```

Consumer:

```scss
@use "tokens";

.button {
  color: tokens.$primary;
  border-radius: tokens.$radius;

  &:focus-visible {
    @include tokens.focus-ring;
  }
}
```

The namespace makes ownership clear.

## Custom namespace

```scss
@use "tokens" as t;

.button {
  color: t.$primary;
}
```

## `as *`

```scss
@use "tokens" as *;
```

Then:

```scss
.button {
  color: $primary;
}
```

This is convenient but can cause name collisions.

Prefer namespaces in reusable or large codebases.

## Modules load once

If multiple files ultimately load the same module, its emitted CSS is included once per compilation.

This is one of the major advantages of the module system.

---

# 19. `@forward` and Library APIs

`@forward` allows one module to re-export members from other modules.

Imagine:

```text
abstracts/
├── _colors.scss
├── _spacing.scss
├── _mixins.scss
└── _index.scss
```

`_index.scss`:

```scss
@forward "colors";
@forward "spacing";
@forward "mixins";
```

Consumer:

```scss
@use "abstracts";

.card {
  padding: abstracts.$space-md;
}
```

This creates a clean public API.

## Show only selected members

```scss
@forward "tokens" show $primary, $secondary, spacing;
```

## Hide members

```scss
@forward "tokens" hide $internal-debug-color;
```

## Prefix forwarded members

```scss
@forward "theme" as theme-*;
```

A consumer can access forwarded members using the resulting prefix.

`@forward` is particularly useful when publishing a design system or component library.

---

# 20. Configurable Modules

A Sass module can expose configuration variables with `!default`.

```scss
// _theme.scss
$primary: #2563eb !default;
$radius: 8px !default;

.button {
  background: $primary;
  border-radius: $radius;
}
```

Configure when loading:

```scss
@use "theme" with (
  $primary: #7c3aed,
  $radius: 999px
);
```

This lets library consumers customize behavior without editing the source.

## Important design principle

Only expose variables as configurable if they are part of the intended public API.

Do not encourage users to configure internal/private implementation details.

---

# 21. Mixins

A mixin is reusable style logic.

Define:

```scss
@mixin card-surface {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 0.06);
}
```

Use:

```scss
.profile-card {
  @include card-surface;
}
```

## Why mixins?

Mixins can contain:

- declarations
- nested selectors
- conditions
- loops
- media queries
- arguments
- content blocks

Use a mixin when the reused behavior should emit CSS.

---

# 22. Mixin Arguments

## Required argument

```scss
@mixin square($size) {
  width: $size;
  height: $size;
}

.avatar {
  @include square(48px);
}
```

## Default arguments

```scss
@mixin button($bg, $color: white, $radius: 8px) {
  background: $bg;
  color: $color;
  border-radius: $radius;
}
```

Usage:

```scss
.button-primary {
  @include button(#2563eb);
}

.button-danger {
  @include button(#dc2626, white, 4px);
}
```

## Keyword arguments

```scss
.alert {
  @include button(
    $bg: #f59e0b,
    $radius: 999px
  );
}
```

Keyword arguments improve readability.

## Arbitrary argument lists

```scss
@mixin transition($properties...) {
  transition: $properties;
}

.button {
  @include transition(color 200ms ease, background 200ms ease);
}
```

Use variadic APIs carefully. Too much flexibility can make mixins difficult to understand.

---

# 23. `@content` and Content Blocks

A mixin can accept a block from the caller.

```scss
@mixin mobile {
  @media (max-width: 47.99rem) {
    @content;
  }
}
```

Usage:

```scss
.sidebar {
  width: 20rem;

  @include mobile {
    width: 100%;
  }
}
```

This is an excellent pattern for responsive code.

## Content arguments

A content block can also receive values using `using`.

```scss
@mixin media-context($width) {
  @media (min-width: $width) {
    @content($width);
  }
}

.card {
  @include media-context(48rem) using ($active-width) {
    --active-breakpoint: #{$active-width};
    display: grid;
  }
}
```

This is more advanced and useful in reusable libraries.

---

# 24. Functions

Functions return values.

```scss
@function double($value) {
  @return $value * 2;
}

.box {
  padding: double(8px);
}
```

Output:

```css
.box {
  padding: 16px;
}
```

## Mixins vs functions

Use a function when you want a **value**.

```scss
width: rem(32px);
```

Use a mixin when you want to emit **declarations or rules**.

```scss
@include visually-hidden;
```

## Practical px-to-rem function

```scss
@use "sass:math";

@function rem($px, $base: 16px) {
  @return math.div($px, $base) * 1rem;
}

.title {
  font-size: rem(32px);
}
```

## Validation inside a function

```scss
@function positive($number) {
  @if $number < 0 {
    @error "Expected a non-negative number.";
  }

  @return $number;
}
```

---

# 25. Control Flow: `@if`, `@else if`, `@else`

```scss
@mixin button-size($size) {
  @if $size == sm {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  } @else if $size == md {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  } @else if $size == lg {
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
  } @else {
    @error "Unknown button size: #{$size}";
  }
}
```

Usage:

```scss
.button {
  @include button-size(md);
}
```

## Good uses

- compiler-time variants
- API validation
- conditional output
- theme generation
- utility generation

## Bad use

Do not recreate a full application programming language inside Sass.

If your styling logic becomes extremely complex, rethink the design.

---

# 26. Loops: `@for`, `@each`, `@while`

## `@for`

```scss
@for $i from 1 through 5 {
  .m-#{$i} {
    margin: $i * 0.25rem;
  }
}
```

Output includes:

```css
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
...
.m-5 { margin: 1.25rem; }
```

### `through` vs `to`

```scss
@for $i from 1 through 3
```

includes 3.

```scss
@for $i from 1 to 3
```

stops before 3.

---

## `@each`

```scss
$statuses: success, warning, danger;

@each $status in $statuses {
  .badge-#{$status} {
    // generated variant
  }
}
```

With a map:

```scss
$colors: (
  "primary": #2563eb,
  "success": #16a34a,
  "danger": #dc2626
);

@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }
}
```

This is one of the most common Sass generation patterns.

---

## `@while`

```scss
$i: 1;

@while $i <= 3 {
  .z-#{$i} {
    z-index: $i;
  }

  $i: $i + 1;
}
```

`@while` is less commonly needed because `@for` and `@each` usually express intent more clearly.

---

# 27. `@debug`, `@warn`, and `@error`

## `@debug`

```scss
@debug $colors;
```

Useful during development.

## `@warn`

```scss
@mixin deprecated-button {
  @warn "deprecated-button is deprecated. Use button() instead.";
}
```

Warnings inform the developer but compilation can continue.

## `@error`

```scss
@mixin columns($count) {
  @if $count < 1 or $count > 12 {
    @error "Column count must be between 1 and 12.";
  }
}
```

Use errors to protect public APIs from invalid configuration.

---

# 28. `@extend` and Placeholder Selectors

`@extend` makes one selector inherit the styles associated with another selector at compilation time.

```scss
.message {
  padding: 1rem;
  border: 1px solid;
}

.message-error {
  @extend .message;
  border-color: red;
}
```

This can produce grouped selectors.

## Placeholder selectors

A placeholder begins with `%`.

```scss
%message-base {
  padding: 1rem;
  border: 1px solid;
}

.message-success {
  @extend %message-base;
  border-color: green;
}

.message-error {
  @extend %message-base;
  border-color: red;
}
```

The placeholder itself is not emitted unless extended.

## When to use `@extend`

Good:

- tightly related semantic patterns
- placeholder-based library internals
- when grouped selectors are desirable

Be cautious:

- extending selectors across unrelated modules
- extending very broad selectors
- deep dependency chains

For many reusable patterns, mixins are easier to reason about because they copy declarations into the usage site.

---

# 29. `@at-root`

`@at-root` moves a rule out of its normal nested location.

```scss
.component {
  @at-root .no-js .component {
    display: block;
  }
}
```

This can be useful when a rule belongs logically inside a component source file but must be emitted at a different selector level.

Use it sparingly because excessive output relocation can make generated CSS difficult to understand.

---

# 30. Built-In Modules

Modern Sass built-in APIs are loaded through `@use`.

Common modules:

```scss
@use "sass:math";
@use "sass:string";
@use "sass:color";
@use "sass:list";
@use "sass:map";
@use "sass:selector";
@use "sass:meta";
```

This is preferred over legacy global built-in function calls.

Example:

```scss
@use "sass:map";

$colors: (
  "brand": #2563eb
);

.button {
  color: map.get($colors, "brand");
}
```

---

# 31. `sass:math`

Load:

```scss
@use "sass:math";
```

## Division

```scss
$column: math.div(100%, 12);
```

## Rounding

```scss
$value: math.round(4.6);
```

## Floor and ceiling

```scss
$a: math.floor(4.9);
$b: math.ceil(4.1);
```

## Min/max

```scss
$a: math.min(2rem, 4rem);
$b: math.max(2rem, 4rem);
```

## Unit checks

```scss
@if math.is-unitless($value) {
  // ...
}
```

## Practical grid example

```scss
@use "sass:math";

@mixin column($span, $total: 12) {
  width: math.div($span, $total) * 100%;
}

.col-4 {
  @include column(4);
}
```

---

# 32. `sass:string`

```scss
@use "sass:string";
```

Examples:

```scss
$name: "button";

@debug string.length($name);
@debug string.to-upper-case($name);
@debug string.to-lower-case("HELLO");
```

String functions are helpful for:

- utility-generation systems
- generated class names
- library APIs
- normalization logic
- debugging

Avoid excessive string meta-programming when a straightforward selector or map would be clearer.

---

# 33. `sass:color`

```scss
@use "sass:color";
```

Modern code should prefer namespaced color functions.

## Adjust a color

```scss
$primary: #2563eb;

.button {
  background: $primary;

  &:hover {
    background: color.adjust($primary, $lightness: -8%);
  }
}
```

## Scale a channel

```scss
$hover: color.scale($primary, $lightness: -15%);
```

## Mix colors

```scss
$mix: color.mix(#2563eb, #ffffff, 80%);
```

## Why avoid old global helpers?

Old code often uses:

```scss
lighten(...)
darken(...)
mix(...)
```

Modern Sass encourages module-based APIs such as `color.adjust`, `color.scale`, and `color.mix`.

Also remember that a browser can often handle runtime color work using modern CSS functions. Use Sass color calculations when compile-time output is what you want.

---

# 34. `sass:list`

```scss
@use "sass:list";
```

Example:

```scss
$sizes: 4px 8px 16px 24px;

@debug list.length($sizes);
@debug list.nth($sizes, 2);
```

Append:

```scss
$updated: list.append($sizes, 32px);
```

Find an item:

```scss
$position: list.index($sizes, 16px);
```

## Practical example

```scss
$directions: top, right, bottom, left;

@each $direction in $directions {
  .border-#{$direction} {
    border-#{$direction}: 1px solid #e5e7eb;
  }
}
```

---

# 35. `sass:map`

```scss
@use "sass:map";
```

Map:

```scss
$breakpoints: (
  "sm": 36rem,
  "md": 48rem,
  "lg": 64rem,
  "xl": 80rem
);
```

Read:

```scss
$value: map.get($breakpoints, "md");
```

Check:

```scss
@if map.has-key($breakpoints, "xl") {
  // ...
}
```

Merge:

```scss
$custom: map.merge(
  $breakpoints,
  (
    "2xl": 96rem
  )
);
```

## Responsive helper

```scss
@use "sass:map";

$breakpoints: (
  "sm": 36rem,
  "md": 48rem,
  "lg": 64rem
);

@mixin up($name) {
  $value: map.get($breakpoints, $name);

  @if $value == null {
    @error "Unknown breakpoint `#{$name}`.";
  }

  @media (min-width: $value) {
    @content;
  }
}
```

Usage:

```scss
.grid {
  display: grid;
  grid-template-columns: 1fr;

  @include up(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include up(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

# 36. `sass:selector`

```scss
@use "sass:selector";
```

This module is mainly useful for framework and library authors.

Examples of operations include:

- nesting selectors
- appending selectors
- unifying selectors
- checking selector relationships
- extending selectors programmatically

Example idea:

```scss
@use "sass:selector";

$combined: selector.nest(".card", ".title");

@debug $combined;
```

For day-to-day application code, normal nesting and `&` are usually enough.

---

# 37. `sass:meta`

```scss
@use "sass:meta";
```

The `meta` module lets Sass inspect values and invoke dynamic APIs.

## Inspect a value

```scss
@debug meta.inspect($value);
```

## Type information

```scss
@debug meta.type-of(10px);
@debug meta.type-of(("a": 1));
```

## Check APIs

You can inspect whether variables/functions/mixins exist when building advanced libraries.

## Dynamic function usage

Advanced library code can obtain function values and call them dynamically.

Meta-programming is powerful, but it should not make ordinary component code harder to follow.

---

# 38. CSS At-Rules Inside Sass

Sass works with CSS at-rules.

## Media query

```scss
.card {
  padding: 1rem;

  @media (min-width: 48rem) {
    padding: 2rem;
  }
}
```

## Feature query

```scss
.layout {
  display: block;

  @supports (display: grid) {
    display: grid;
  }
}
```

## Keyframes

```scss
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

## Container query

```scss
.card-grid {
  container-type: inline-size;
}

.card {
  @container (min-width: 32rem) {
    display: grid;
    grid-template-columns: 10rem 1fr;
  }
}
```

## Cascade layers

```scss
@layer reset, base, components, utilities;

@layer components {
  .button {
    padding: 0.75rem 1rem;
  }
}
```

Sass should complement modern CSS, not replace it.

---

# 39. Responsive Design Patterns

A breakpoint map can centralize responsive values.

```scss
@use "sass:map";

$breakpoints: (
  "sm": 36rem,
  "md": 48rem,
  "lg": 64rem,
  "xl": 80rem
);

@mixin respond-up($name) {
  $value: map.get($breakpoints, $name);

  @if $value == null {
    @error "Unknown breakpoint: #{$name}";
  }

  @media (min-width: $value) {
    @content;
  }
}
```

Usage:

```scss
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @include respond-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-up(lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Do not hide responsive intent

Avoid a mysterious API like:

```scss
@include r(3) { ... }
```

Prefer:

```scss
@include respond-up(lg) { ... }
```

Readable code ages better.

---

# 40. Design Tokens with Sass Maps

Design tokens describe reusable design decisions.

Example:

```scss
$tokens: (
  "color": (
    "primary": #2563eb,
    "danger": #dc2626,
    "surface": #ffffff,
    "text": #0f172a
  ),
  "space": (
    "xs": 0.25rem,
    "sm": 0.5rem,
    "md": 1rem,
    "lg": 1.5rem,
    "xl": 2rem
  ),
  "radius": (
    "sm": 4px,
    "md": 8px,
    "lg": 16px
  )
);
```

You can create accessor functions.

```scss
@use "sass:map";

@function token($group, $name) {
  $group-map: map.get($tokens, $group);

  @if $group-map == null {
    @error "Unknown token group `#{$group}`.";
  }

  $value: map.get($group-map, $name);

  @if $value == null {
    @error "Unknown token `#{$group}.#{$name}`.";
  }

  @return $value;
}
```

Usage:

```scss
.card {
  padding: token("space", "md");
  color: token("color", "text");
  border-radius: token("radius", "lg");
}
```

This pattern gives you:

- consistency
- validation
- discoverable scales
- easier refactoring

---

# 41. Themes and Dark Mode

A strong modern strategy is:

1. define token data with Sass
2. emit CSS custom properties
3. switch themes in the browser

## Theme maps

```scss
$light: (
  "surface": #ffffff,
  "text": #111827,
  "primary": #2563eb
);

$dark: (
  "surface": #0f172a,
  "text": #f8fafc,
  "primary": #60a5fa
);
```

## Theme emitter

```scss
@mixin emit-theme($theme) {
  @each $name, $value in $theme {
    --#{$name}: #{$value};
  }
}

:root {
  @include emit-theme($light);
}

[data-theme="dark"] {
  @include emit-theme($dark);
}
```

Use:

```scss
body {
  background: var(--surface);
  color: var(--text);
}

.button {
  background: var(--primary);
}
```

Now JavaScript or user preferences can switch themes at runtime without recompiling Sass.

---

# 42. Generating Utility Classes

Sass loops can generate utilities.

## Spacing example

```scss
$spacing: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  6: 1.5rem,
  8: 2rem
);

@each $key, $value in $spacing {
  .m-#{$key} {
    margin: $value;
  }

  .p-#{$key} {
    padding: $value;
  }
}
```

## Important warning

Do not generate thousands of classes simply because Sass can.

Every generated class increases CSS size.

Generate only utilities that have real value.

---

# 43. Component Architecture

A component should ideally have:

- clear ownership
- shallow selectors
- predictable modifiers
- minimal global side effects
- explicit dependencies
- design-token usage

Example:

```scss
.card {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;

  &__title {
    margin: 0;
    font-size: 1.25rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
  }

  &--featured {
    border-color: var(--primary);
  }
}
```

Keep component logic close together, but do not nest every DOM descendant.

---

# 44. The 7-1 Architecture Pattern

The classic Sass 7-1 pattern organizes styles into seven directories plus one main entry file.

Example:

```text
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _index.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _index.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _index.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _grid.scss
│   └── _index.scss
├── pages/
│   ├── _home.scss
│   └── _index.scss
├── themes/
│   ├── _light.scss
│   ├── _dark.scss
│   └── _index.scss
├── vendors/
│   ├── _library-overrides.scss
│   └── _index.scss
└── main.scss
```

This is a pattern, not a law.

Small projects do not need seven folders.

A better principle is:

> Use enough structure to make ownership obvious, but no more.

---

# 45. Real-World Project Structure

A practical structure for a medium-to-large application:

```text
src/
└── styles/
    ├── config/
    │   ├── _tokens.scss
    │   ├── _breakpoints.scss
    │   └── _index.scss
    ├── tools/
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   └── _index.scss
    ├── base/
    │   ├── _reset.scss
    │   ├── _root.scss
    │   └── _typography.scss
    ├── layout/
    │   ├── _container.scss
    │   └── _grid.scss
    ├── components/
    │   ├── _button.scss
    │   ├── _card.scss
    │   ├── _modal.scss
    │   └── _form.scss
    ├── utilities/
    │   ├── _spacing.scss
    │   └── _accessibility.scss
    └── main.scss
```

`main.scss`:

```scss
@use "base/reset";
@use "base/root";
@use "base/typography";

@use "layout/container";
@use "layout/grid";

@use "components/button";
@use "components/card";
@use "components/modal";
@use "components/form";

@use "utilities/spacing";
@use "utilities/accessibility";
```

Modules that provide functions/mixins/tokens but no CSS can be loaded from the modules that need them.

---

# 46. Sass + BEM

BEM stands for:

- Block
- Element
- Modifier

Example HTML:

```html
<article class="card card--featured">
  <h2 class="card__title">Title</h2>
</article>
```

SCSS:

```scss
.card {
  padding: 1rem;

  &__title {
    font-size: 1.25rem;
  }

  &--featured {
    border: 2px solid gold;
  }
}
```

BEM and Sass work well together because `&` can generate names without deeply nesting DOM structure.

Do not overdo it:

```scss
.card {
  &__header {
    &__title {
      &--large {
        // awkward class design
      }
    }
  }
}
```

Prefer simple, intentional class names.

---

# 47. Sass + Modern CSS

Modern CSS already includes many powerful features:

- custom properties
- native nesting
- `calc()`
- `min()`, `max()`, `clamp()`
- container queries
- cascade layers
- logical properties
- modern color spaces/functions
- `:is()`, `:where()`, `:has()`
- grid
- flexbox

Sass still adds value through:

- compile-time loops
- maps
- module APIs
- design-system generation
- reusable mixins/functions
- validation
- file organization
- build-time transformations

## Example: use CSS `clamp()` instead of overengineering Sass

```scss
.title {
  font-size: clamp(2rem, 4vw, 4rem);
}
```

No Sass function is needed.

## Example: CSS custom property for runtime state

```scss
.button {
  background: var(--button-bg, #2563eb);
}
```

Do not use Sass for a problem the browser should solve at runtime.

---

# 48. Sass in Vite, Webpack, Angular, React, Next.js, and Vue

The exact framework configuration changes over time, but the general model is stable:

```text
framework/build tool
        ↓
detects .scss
        ↓
calls Sass compiler
        ↓
bundles generated CSS
```

## Generic npm dependency

```bash
npm install --save-dev sass
```

Many modern tools automatically recognize `.scss` when `sass` is installed.

---

## Vite

Typical import:

```js
import "./styles/main.scss";
```

Vite handles the Sass preprocessing through the installed Sass package.

---

## React

React itself does not define Sass behavior; the build tool does.

Example:

```jsx
import "./Button.scss";
```

For CSS Modules:

```text
Button.module.scss
```

then:

```jsx
import styles from "./Button.module.scss";

export function Button() {
  return <button className={styles.button}>Save</button>;
}
```

---

## Next.js

Modern Next.js projects can work with Sass when the Sass dependency is available.

Common patterns include:

```text
styles/globals.scss
Component.module.scss
```

Prefer CSS Modules for component-local styling when that matches your application architecture.

---

## Angular

Angular projects support component styles and global style entrypoints.

A component can use:

```text
component.scss
```

Shared Sass APIs can be placed in dedicated token/mixin files.

Avoid dumping every reusable variable into one global file without clear module ownership.

---

## Vue

A single-file component can use:

```html
<style lang="scss">
.card {
  padding: 1rem;
}
</style>
```

The bundler invokes Sass.

---

## Webpack

Webpack commonly uses a loader pipeline conceptually like:

```text
sass-loader
    ↓
css-loader
    ↓
style-loader or CSS extraction
```

Exact package configuration depends on the Webpack version and project setup.

---

# 49. The Sass JavaScript API

Install:

```bash
npm install sass
```

Modern synchronous example:

```js
import * as sass from "sass";

const result = sass.compile("src/scss/main.scss");

console.log(result.css);
```

Async:

```js
import * as sass from "sass";

const result = await sass.compileAsync("src/scss/main.scss");

console.log(result.css);
```

Compile a string:

```js
import * as sass from "sass";

const result = sass.compileString(`
  $color: #2563eb;

  .button {
    color: $color;
  }
`);

console.log(result.css);
```

Use the modern API rather than legacy `render()`/`renderSync()` APIs in new integrations.

---

# 50. CLI Workflow and Build Options

Common commands:

## Compile

```bash
sass input.scss output.css
```

## Watch

```bash
sass --watch input.scss:output.css
```

## Directory watch

```bash
sass --watch src/scss:public/css
```

## Compressed output

```bash
sass --style=compressed input.scss output.css
```

## Include/load path

Depending on project layout, load paths can make shared modules easier to resolve.

Check:

```bash
sass --help
```

for the exact options supported by your installed compiler.

## Version

```bash
sass --version
```

---

# 51. Source Maps

A source map connects generated CSS back to the original SCSS files.

Without source maps, browser devtools may show:

```text
main.css:1950
```

With source maps, devtools can often show the original Sass source.

This makes debugging large projects much easier.

Dart Sass generates source maps for emitted CSS by default in common CLI workflows.

For production, some teams keep source maps private, upload them only to monitoring systems, or disable them depending on deployment/security requirements.

---

# 52. Production Optimization

## Compressed output

```bash
sass --style=compressed src/scss/main.scss dist/main.css
```

## Avoid giant generated utility matrices

Bad idea:

```text
100 colors
× 50 spacing values
× 10 breakpoints
× 10 properties
```

That can create enormous CSS.

## Keep selector specificity under control

Avoid:

```scss
.page .main .content .card .header .title {
  // ...
}
```

Prefer class-based components.

## Avoid duplicate mixin output

If a mixin emits 20 declarations and you include it 100 times, those declarations are copied 100 times.

Sometimes a shared CSS class or placeholder is more efficient.

Choose the right abstraction based on output, not just source-code elegance.

---

# 53. Debugging Sass

## Step 1: read the complete compiler error

Sass errors usually include:

- file
- line
- column
- call stack
- message

## Step 2: use `@debug`

```scss
@debug $breakpoints;
```

## Step 3: inspect type

```scss
@use "sass:meta";

@debug meta.type-of($value);
@debug meta.inspect($value);
```

## Step 4: validate map keys

```scss
@use "sass:map";

@if not map.has-key($colors, $name) {
  @error "Unknown color token: #{$name}";
}
```

## Step 5: inspect generated CSS

Your Sass may look elegant while producing undesirable CSS.

Always inspect the output.

---

# 54. Common Sass Mistakes

## Mistake 1: deep nesting

Bad:

```scss
.app {
  .page {
    .content {
      .card {
        .title {
          // ...
        }
      }
    }
  }
}
```

Fix: use component classes.

---

## Mistake 2: treating Sass variables like runtime CSS variables

This will not update in the browser:

```scss
$theme: light;
```

after compilation.

Use CSS custom properties for runtime changes.

---

## Mistake 3: using deprecated `@import`

Legacy:

```scss
@import "variables";
@import "buttons";
```

Modern:

```scss
@use "variables";
@use "buttons";
```

---

## Mistake 4: using global built-ins

Legacy style:

```scss
$shade: darken($color, 10%);
```

Modern:

```scss
@use "sass:color";

$shade: color.adjust($color, $lightness: -10%);
```

---

## Mistake 5: slash division

Avoid:

```scss
$result: 100px / 4;
```

Use:

```scss
@use "sass:math";

$result: math.div(100px, 4);
```

---

## Mistake 6: giant "variables.scss"

A file containing hundreds of unrelated variables becomes a dumping ground.

Separate concepts:

```text
_colors.scss
_spacing.scss
_typography.scss
_breakpoints.scss
```

and expose them intentionally.

---

## Mistake 7: mixins for trivial one-line declarations

Avoid:

```scss
@mixin red {
  color: red;
}
```

Just write:

```scss
color: red;
```

Abstractions should remove meaningful duplication or encode a reusable rule.

---

## Mistake 8: generating classes nobody uses

Loops are fun, but unused generated CSS still costs bytes.

---

## Mistake 9: abusing `@extend`

Extending broad or unrelated selectors can generate surprising selector groups.

Use placeholder selectors or mixins when appropriate.

---

## Mistake 10: forgetting CSS is the final product

Always ask:

> What CSS will this produce?

---

# 55. Modern Sass Deprecations and Migration

Modern projects should know several important changes.

## Sass `@import`

Deprecated.

Use:

```scss
@use
@forward
```

## Global built-in functions

Prefer namespaced APIs.

Instead of:

```scss
map-get($map, key);
```

write:

```scss
@use "sass:map";

map.get($map, key);
```

Instead of:

```scss
mix(...)
```

prefer:

```scss
@use "sass:color";

color.mix(...)
```

## Slash division

Use:

```scss
math.div(...)
```

for Sass arithmetic.

## Legacy JavaScript API

Prefer:

```js
sass.compile(...)
sass.compileAsync(...)
sass.compileString(...)
sass.compileStringAsync(...)
```

for new integrations.

## Old Sass implementations

Avoid starting new projects with discontinued implementations such as LibSass/Ruby Sass.

Use Dart Sass.

---

# 56. Migrating from `@import` to `@use`

Legacy project:

```text
styles/
├── _variables.scss
├── _mixins.scss
├── _button.scss
└── main.scss
```

Legacy `main.scss`:

```scss
@import "variables";
@import "mixins";
@import "button";
```

Button may rely on invisible globals:

```scss
.button {
  background: $primary;
  @include rounded;
}
```

Modernize.

## `_variables.scss`

```scss
$primary: #2563eb;
```

## `_mixins.scss`

```scss
@mixin rounded {
  border-radius: 8px;
}
```

## `_button.scss`

```scss
@use "variables";
@use "mixins";

.button {
  background: variables.$primary;
  @include mixins.rounded;
}
```

## `main.scss`

```scss
@use "button";
```

Now dependencies are explicit.

## Aggregating through index modules

`abstracts/_index.scss`:

```scss
@forward "variables";
@forward "mixins";
```

Consumer:

```scss
@use "../abstracts";

.button {
  background: abstracts.$primary;
  @include abstracts.rounded;
}
```

## Automated migrator

The official Sass migrator can help modernize large codebases.

Typical module migration command:

```bash
sass-migrator module --migrate-deps path/to/entry.scss
```

Review the generated result rather than treating migration output as automatically perfect.

---

# 57. Sass Variables vs CSS Variables

This is one of the most important conceptual differences.

| Feature | Sass Variable | CSS Custom Property |
|---|---|---|
| Syntax | `$primary` | `--primary` |
| Evaluated | Build time | Browser runtime |
| Visible in browser | No | Yes |
| Can change through JS/runtime state | Not after compilation | Yes |
| Cascades | No browser cascade | Yes |
| Inheritance | Sass scope rules | CSS inheritance |
| Great for loops/maps | Yes | Not directly like Sass |
| Great for runtime themes | Limited | Excellent |

## Use Sass variables for

- compiler configuration
- maps
- loops
- reusable calculations
- generation logic

## Use CSS variables for

- runtime themes
- per-component overrides
- dynamic state
- values changed by JavaScript
- cascade-based design tokens

## Hybrid approach

```scss
$primary: #2563eb;

:root {
  --primary: #{$primary};
}

.button {
  background: var(--primary);
}
```

This is very common in modern design systems.

---

# 58. Mixins vs Functions vs Placeholders vs CSS Classes

## Function

Returns a value.

```scss
font-size: rem(32px);
```

Use when:

> I need to calculate or transform a value.

---

## Mixin

Emits CSS.

```scss
@include focus-ring;
```

Use when:

> I need reusable declarations/rules with optional parameters.

---

## Placeholder + `@extend`

Creates shared selector output.

```scss
%surface {
  background: white;
  border: 1px solid #ddd;
}
```

Use when:

> Multiple selectors are semantically the same style pattern and grouped selector output is appropriate.

---

## Regular CSS class

```scss
.surface {
  background: white;
  border: 1px solid #ddd;
}
```

Use when:

> The reusable styling is also a meaningful class that can be placed directly in markup.

---

# 59. Sass Coding Standards

A team convention might use:

## Variables

```scss
$color-primary
$space-md
$radius-lg
```

## Mixins

```scss
@mixin respond-up(...)
@mixin focus-ring(...)
```

## Functions

```scss
@function rem(...)
@function token(...)
```

## Files

```text
_tokens.scss
_breakpoints.scss
_button.scss
```

## Module namespaces

```scss
@use "../config/tokens" as tokens;
@use "../tools/media" as media;
```

Avoid unclear one-letter namespaces unless the module is used heavily and the convention is documented.

## Formatting

Prefer:

```scss
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-1px);
  }
}
```

over compressed source code.

Let a formatter handle whitespace if your project uses one.

---

# 60. Accessibility and Sass

Sass can help centralize accessibility patterns.

## Visually hidden utility

```scss
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip-path: inset(50%);
}
```

Use:

```scss
.sr-only {
  @include visually-hidden;
}
```

## Focus styles

```scss
@mixin focus-ring {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

.button:focus-visible {
  @include focus-ring;
}
```

Do not remove focus outlines without providing an accessible replacement.

## Reduced motion

```scss
@mixin reduce-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}

.animated-card {
  transition: transform 300ms ease;

  @include reduce-motion {
    transition: none;
  }
}
```

## High contrast

Design tokens should maintain readable contrast. Sass can help generate themes, but accessibility must be verified using actual contrast criteria and real UI testing.

---

# 61. Testing and Quality Checks

Sass itself compiles code, but production styles should also be checked.

Useful layers:

```text
Sass compile
    ↓
lint
    ↓
CSS validation/build
    ↓
visual tests
    ↓
browser testing
```

## Compile test

A CI job should fail if Sass does not compile.

```bash
sass src/scss/main.scss /tmp/main.css
```

## Linting

Stylelint is commonly used for CSS/SCSS code quality.

Rules can check:

- invalid properties
- duplicate declarations
- selector conventions
- ordering policies
- unsupported patterns

Use an SCSS-aware Stylelint configuration if linting SCSS-specific syntax.

## Visual regression

Tools can capture screenshots before and after changes.

Useful for:

- button changes
- spacing changes
- theme changes
- responsive regressions

## Test public Sass APIs

If you maintain a Sass library, create small fixture files that:

- `@use` the library
- configure public variables
- call public mixins/functions
- compile expected combinations

---

# 62. Performance and CSS Size

Sass runs at build time, but the generated CSS affects users.

## Sass source size is not the same as CSS size

This:

```scss
@mixin huge-component {
  // 50 declarations
}
```

included 100 times may create a lot of CSS.

## Measure generated output

Track:

- raw CSS size
- compressed CSS size
- duplicated declarations
- unused utilities
- selector complexity

## Prefer browser capabilities where appropriate

Instead of generating 50 viewport-specific font classes, perhaps one `clamp()` formula is enough.

Instead of compiling separate color themes into duplicated component CSS, perhaps CSS custom properties can change token values.

---

# 63. Advanced Practical Patterns

## Pattern 1: Token getter

```scss
@use "sass:map";

$space: (
  "xs": 0.25rem,
  "sm": 0.5rem,
  "md": 1rem,
  "lg": 1.5rem
);

@function space($name) {
  $value: map.get($space, $name);

  @if $value == null {
    @error "Unknown spacing token: #{$name}";
  }

  @return $value;
}
```

Usage:

```scss
.card {
  padding: space("md");
  gap: space("sm");
}
```

---

## Pattern 2: Breakpoint API

```scss
@use "sass:map";

$breakpoints: (
  "tablet": 48rem,
  "desktop": 64rem
);

@mixin breakpoint($name) {
  $size: map.get($breakpoints, $name);

  @if $size == null {
    @error "Unknown breakpoint: #{$name}";
  }

  @media (min-width: $size) {
    @content;
  }
}
```

---

## Pattern 3: Component-size map

```scss
@use "sass:map";

$button-sizes: (
  "sm": (
    "height": 2rem,
    "padding": 0 0.75rem,
    "font-size": 0.875rem
  ),
  "md": (
    "height": 2.5rem,
    "padding": 0 1rem,
    "font-size": 1rem
  ),
  "lg": (
    "height": 3rem,
    "padding": 0 1.25rem,
    "font-size": 1.125rem
  )
);

@mixin button-size($name) {
  $config: map.get($button-sizes, $name);

  @if $config == null {
    @error "Unknown button size: #{$name}";
  }

  height: map.get($config, "height");
  padding: map.get($config, "padding");
  font-size: map.get($config, "font-size");
}
```

---

## Pattern 4: Variant generation

```scss
$button-colors: (
  "primary": (#2563eb, #ffffff),
  "success": (#16a34a, #ffffff),
  "danger": (#dc2626, #ffffff)
);

@each $name, $pair in $button-colors {
  .button--#{$name} {
    background: nth($pair, 1);
    color: nth($pair, 2);
  }
}
```

For modern module style, prefer namespaced list access:

```scss
@use "sass:list";

@each $name, $pair in $button-colors {
  .button--#{$name} {
    background: list.nth($pair, 1);
    color: list.nth($pair, 2);
  }
}
```

---

## Pattern 5: CSS variable emitter

```scss
@mixin css-vars($map) {
  @each $name, $value in $map {
    --#{$name}: #{$value};
  }
}

$theme: (
  "color-primary": #2563eb,
  "color-text": #111827,
  "radius-md": 8px
);

:root {
  @include css-vars($theme);
}
```

---

## Pattern 6: Optional declarations using null

```scss
@mixin box(
  $padding: 1rem,
  $border: null,
  $shadow: null
) {
  padding: $padding;
  border: $border;
  box-shadow: $shadow;
}
```

Usage:

```scss
.card {
  @include box(
    $padding: 2rem,
    $shadow: 0 10px 30px rgb(0 0 0 / 0.1)
  );
}
```

The null border can be omitted from output.

---

## Pattern 7: Feature flags at build time

```scss
$enable-rounded-buttons: true !default;

.button {
  @if $enable-rounded-buttons {
    border-radius: 999px;
  }
}
```

Useful for library configuration, but avoid too many flags.

---

# 64. Complete Mini Design System Example

This section ties major concepts together.

## Directory

```text
design-system/
├── config/
│   ├── _tokens.scss
│   └── _index.scss
├── tools/
│   ├── _media.scss
│   ├── _functions.scss
│   └── _index.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _index.scss
└── main.scss
```

## `config/_tokens.scss`

```scss
$colors: (
  "primary": #2563eb,
  "primary-hover": #1d4ed8,
  "success": #16a34a,
  "danger": #dc2626,
  "text": #0f172a,
  "muted": #64748b,
  "surface": #ffffff,
  "border": #e2e8f0
);

$spacing: (
  "xs": 0.25rem,
  "sm": 0.5rem,
  "md": 1rem,
  "lg": 1.5rem,
  "xl": 2rem
);

$radius: (
  "sm": 4px,
  "md": 8px,
  "lg": 16px,
  "pill": 999px
);

$breakpoints: (
  "md": 48rem,
  "lg": 64rem
);
```

## `config/_index.scss`

```scss
@forward "tokens";
```

## `tools/_functions.scss`

```scss
@use "sass:map";
@use "../config" as config;

@function color($name) {
  $value: map.get(config.$colors, $name);

  @if $value == null {
    @error "Unknown color token: #{$name}";
  }

  @return $value;
}

@function space($name) {
  $value: map.get(config.$spacing, $name);

  @if $value == null {
    @error "Unknown spacing token: #{$name}";
  }

  @return $value;
}

@function radius($name) {
  $value: map.get(config.$radius, $name);

  @if $value == null {
    @error "Unknown radius token: #{$name}";
  }

  @return $value;
}
```

## `tools/_media.scss`

```scss
@use "sass:map";
@use "../config" as config;

@mixin up($name) {
  $value: map.get(config.$breakpoints, $name);

  @if $value == null {
    @error "Unknown breakpoint: #{$name}";
  }

  @media (min-width: $value) {
    @content;
  }
}
```

## `tools/_index.scss`

```scss
@forward "functions";
@forward "media";
```

## `components/_button.scss`

```scss
@use "../tools" as tools;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: tools.space("sm");
  min-height: 2.5rem;
  padding: tools.space("sm") tools.space("md");

  font: inherit;
  font-weight: 600;
  text-decoration: none;

  border: 0;
  border-radius: tools.radius("md");
  cursor: pointer;

  &--primary {
    color: white;
    background: tools.color("primary");

    &:hover {
      background: tools.color("primary-hover");
    }
  }

  &--danger {
    color: white;
    background: tools.color("danger");
  }

  &:focus-visible {
    outline: 3px solid tools.color("primary");
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

## `components/_card.scss`

```scss
@use "../tools" as tools;

.card {
  display: grid;
  gap: tools.space("md");
  padding: tools.space("md");

  color: tools.color("text");
  background: tools.color("surface");
  border: 1px solid tools.color("border");
  border-radius: tools.radius("lg");

  &__title {
    margin: 0;
    font-size: 1.25rem;
  }

  &__description {
    margin: 0;
    color: tools.color("muted");
  }

  @include tools.up("md") {
    padding: tools.space("lg");
  }
}
```

## `components/_index.scss`

```scss
@forward "button";
@forward "card";
```

## `main.scss`

```scss
@use "components/button";
@use "components/card";
```

The key lessons:

- token data is separated from components
- helper APIs are namespaced
- invalid tokens fail during compilation
- components own their styling
- modules use explicit dependencies
- responsive rules stay near the component
- output CSS remains ordinary CSS

---

# 65. Common Interview Questions

## 1. What is Sass?

A CSS extension language compiled into CSS that adds features such as variables, nesting, mixins, functions, modules, maps, conditions, and loops.

## 2. What is SCSS?

SCSS is one of Sass's source syntaxes. It uses CSS-like braces and semicolons.

## 3. Sass vs SCSS?

They are two syntaxes of the same language. `.scss` is CSS-like; `.sass` uses indentation.

## 4. What is a partial?

A Sass file typically prefixed with `_`, intended to be loaded as part of another stylesheet.

## 5. What is `@use`?

The modern Sass module-loading mechanism. It loads members through a namespace and ensures modules are evaluated once.

## 6. What is `@forward`?

It re-exports another module's public members, allowing a library to expose a clean API.

## 7. Why is `@import` discouraged?

Sass `@import` uses a global namespace, can cause duplicate loading, and makes dependencies difficult to trace. It is deprecated in modern Dart Sass.

## 8. Mixin vs function?

A mixin emits styles/rules. A function returns a value.

## 9. `@extend` vs mixin?

`@extend` changes selector relationships and can group selectors. A mixin copies declarations where included.

## 10. Sass variable vs CSS custom property?

Sass variables are resolved at build time; CSS variables exist at runtime and participate in the cascade.

## 11. What does `&` mean?

It references the current parent selector.

## 12. What is interpolation?

`#{...}` inserts a Sass expression into textual CSS contexts such as selector names or custom property values.

## 13. What is `!default`?

It gives a variable a fallback value that can be overridden when configuring a module.

## 14. Why use maps?

To model named collections such as design tokens, breakpoints, component variants, and configuration.

## 15. Why use `math.div()`?

The slash character is CSS syntax in many contexts, so Sass division should use the explicit math API.

## 16. What is Dart Sass?

The reference Sass implementation used for modern Sass features.

## 17. What is a placeholder selector?

A selector starting with `%` that is not emitted by itself but can be extended.

## 18. Can browsers run Sass?

No. Sass must be compiled to CSS.

## 19. Can Sass replace modern CSS?

No. Sass is an authoring/build tool. The browser still executes CSS.

## 20. What should you inspect after writing complex Sass?

The generated CSS.

---

# 66. Practice Exercises

## Beginner

1. Create variables for primary, success, danger, text, and surface colors.
2. Build a `.button` with hover/focus states using `&`.
3. Build a `.card` with nested `__title` and `__body` classes.
4. Create a `square($size)` mixin.
5. Create a `rem($px)` function.
6. Create three partial files and load them with `@use`.
7. Write a breakpoint mixin using `@content`.
8. Create a map of four spacing values.

## Intermediate

9. Generate margin utilities from a spacing map.
10. Build a button size mixin backed by a map.
11. Build a theme map and emit CSS variables.
12. Create an `@forward` index module.
13. Build a configurable library using `!default`.
14. Validate invalid tokens using `@error`.
15. Build an alert component with success/warning/danger variants.
16. Convert a legacy `@import` project to modules.
17. Replace old global built-in functions with module APIs.

## Advanced

18. Build a token API with nested maps.
19. Create a mini utility framework with strict output limits.
20. Create a Sass library with a public index and private implementation modules.
21. Integrate Sass through its JavaScript API.
22. Add compile fixtures to test the public API.
23. Build two runtime themes using Sass-generated CSS custom properties.
24. Audit generated CSS for repeated declarations.
25. Rewrite a deeply nested legacy stylesheet into component architecture.

---

# 67. Project Ideas

## Project 1: Responsive landing page

Must include:

- navigation
- hero
- feature cards
- pricing
- footer
- breakpoint mixins
- color/spacing tokens

## Project 2: Admin dashboard

Must include:

- sidebar
- topbar
- cards
- tables
- badges
- forms
- responsive layout
- dark theme

## Project 3: Mini design system

Build:

- tokens
- button
- input
- select
- checkbox
- card
- alert
- modal
- badge
- typography utilities

## Project 4: Utility generator

Generate:

- spacing
- display
- text alignment
- border radius
- limited responsive variants

Measure final CSS size.

## Project 5: Theme engine

Generate:

- light
- dark
- high-contrast token sets

Use CSS custom properties for runtime switching.

---

# 68. 30-Day Learning Roadmap

## Days 1–3: Foundation

Learn:

- Sass vs SCSS
- compilation
- variables
- nesting
- parent selector
- values

Build: button + card examples.

## Days 4–6: Reuse

Learn:

- mixins
- arguments
- functions
- interpolation

Build: reusable component helpers.

## Days 7–9: Data

Learn:

- lists
- maps
- map/list modules

Build: spacing and color token systems.

## Days 10–12: Logic

Learn:

- `@if`
- `@for`
- `@each`
- errors/warnings

Build: utility generator.

## Days 13–15: Modules

Learn:

- partials
- `@use`
- namespaces
- `@forward`
- configuration

Build: modular design system.

## Days 16–18: Responsive and themes

Learn:

- content mixins
- media queries
- CSS custom properties
- runtime themes

Build: responsive dark-mode dashboard.

## Days 19–21: Advanced Sass

Learn:

- selector module
- meta module
- `@extend`
- placeholders
- `@at-root`

Use only where they add value.

## Days 22–24: Architecture

Refactor a project into:

- config
- tools
- base
- components
- layout
- utilities

## Days 25–27: Tooling

Practice:

- CLI
- watch
- compressed builds
- source maps
- framework integration
- JS API

## Days 28–30: Production project

Build one polished project from scratch.

Requirements:

- module system
- design tokens
- responsive architecture
- accessibility utilities
- runtime theme
- clean generated CSS
- no deprecated Sass `@import`

---

# 69. Sass Cheat Sheet

## Variable

```scss
$primary: #2563eb;
```

## Nesting

```scss
.card {
  .title {
    font-weight: 700;
  }
}
```

## Parent selector

```scss
.button {
  &:hover {
    opacity: 0.9;
  }
}
```

## Interpolation

```scss
.item-#{$name} {
  // ...
}
```

## Mixin

```scss
@mixin rounded($radius: 8px) {
  border-radius: $radius;
}
```

## Include

```scss
@include rounded(12px);
```

## Content mixin

```scss
@mixin mobile {
  @media (max-width: 48rem) {
    @content;
  }
}
```

## Function

```scss
@function double($value) {
  @return $value * 2;
}
```

## Condition

```scss
@if $enabled {
  // ...
} @else {
  // ...
}
```

## For loop

```scss
@for $i from 1 through 5 {
  // ...
}
```

## Each loop

```scss
@each $name, $value in $map {
  // ...
}
```

## Use module

```scss
@use "tokens";
```

## Forward module

```scss
@forward "tokens";
```

## Configure module

```scss
@use "theme" with (
  $primary: purple
);
```

## Built-in math

```scss
@use "sass:math";

$value: math.div(10px, 2);
```

## Built-in map

```scss
@use "sass:map";

$value: map.get($map, "key");
```

## Built-in color

```scss
@use "sass:color";

$hover: color.scale($primary, $lightness: -10%);
```

## Placeholder

```scss
%surface {
  border: 1px solid #ddd;
}
```

## Extend

```scss
.card {
  @extend %surface;
}
```

---

# 70. Glossary

**Sass**  
A stylesheet language compiled to CSS.

**SCSS**  
CSS-compatible Sass syntax using braces and semicolons.

**Dart Sass**  
The reference implementation for modern Sass.

**Compiler**  
Software that converts Sass source into CSS.

**Partial**  
A Sass source file, commonly prefixed with `_`, intended to be loaded by another Sass module.

**Module**  
A stylesheet loaded using `@use`.

**Namespace**  
The prefix through which members of a loaded module are referenced.

**Mixin**  
Reusable Sass logic that emits styles/rules.

**Function**  
Reusable Sass logic that returns a value.

**Map**  
Key/value data structure.

**List**  
Ordered Sass values.

**Interpolation**  
`#{...}` syntax for inserting expressions into textual CSS contexts.

**Parent selector**  
`&`, which refers to the current outer selector.

**Placeholder selector**  
A selector beginning with `%` intended for `@extend`.

**Design token**  
A named design decision such as a color, spacing value, type scale, or radius.

**CSS custom property**  
A browser-runtime variable such as `--primary`.

**Source map**  
Metadata connecting generated CSS to original source files.

---

# 71. Final Best-Practice Checklist

Before considering a Sass codebase production-ready, check:

- [ ] Use Dart Sass for modern projects.
- [ ] Prefer `.scss` unless your team intentionally chooses indented `.sass`.
- [ ] Use `@use` instead of Sass `@import`.
- [ ] Use `@forward` to create intentional public module APIs.
- [ ] Prefer namespaced built-in functions such as `map.get()` and `color.scale()`.
- [ ] Use `math.div()` for Sass division.
- [ ] Keep selector nesting shallow.
- [ ] Use `&` intentionally, not as a way to mirror the entire DOM.
- [ ] Prefer meaningful token names.
- [ ] Use maps for structured token/configuration data.
- [ ] Use mixins for reusable CSS-emitting behavior.
- [ ] Use functions for reusable value calculations.
- [ ] Use `!default` for intentional library configuration.
- [ ] Avoid mutable global state.
- [ ] Use CSS custom properties for runtime theming/state.
- [ ] Do not generate massive unused utility sets.
- [ ] Inspect generated CSS regularly.
- [ ] Keep components independent and predictable.
- [ ] Validate public Sass APIs with `@error` where useful.
- [ ] Include keyboard focus and reduced-motion accessibility patterns.
- [ ] Run Sass compilation in CI.
- [ ] Use linting where practical.
- [ ] Track final CSS size.
- [ ] Keep legacy/deprecated patterns out of new code.
- [ ] Prefer readable source over clever Sass meta-programming.

---

# 72. Official References

This handbook is designed around modern Dart Sass. For behavior that can change across versions, always verify against the official Sass documentation installed/current for your project.

Official resources:

- Sass documentation: https://sass-lang.com/documentation/
- Sass installation: https://sass-lang.com/install/
- Sass guide: https://sass-lang.com/guide/
- Dart Sass CLI: https://sass-lang.com/documentation/cli/dart-sass/
- `@use`: https://sass-lang.com/documentation/at-rules/use/
- `@forward`: https://sass-lang.com/documentation/at-rules/forward/
- Mixins: https://sass-lang.com/documentation/at-rules/mixin/
- Functions: https://sass-lang.com/documentation/at-rules/function/
- Built-in modules: https://sass-lang.com/documentation/modules/
- `sass:math`: https://sass-lang.com/documentation/modules/math/
- `sass:color`: https://sass-lang.com/documentation/modules/color/
- `sass:list`: https://sass-lang.com/documentation/modules/list/
- `sass:map`: https://sass-lang.com/documentation/modules/map/
- `sass:string`: https://sass-lang.com/documentation/modules/string/
- `sass:selector`: https://sass-lang.com/documentation/modules/selector/
- `sass:meta`: https://sass-lang.com/documentation/modules/meta/
- Sass breaking changes: https://sass-lang.com/documentation/breaking-changes/
- `@import` migration: https://sass-lang.com/documentation/breaking-changes/import/
- Sass migrator: https://sass-lang.com/documentation/cli/migrator/

---

# Final Learning Advice

The goal is not to write the "most Sass".

The goal is to write maintainable CSS with Sass helping where compile-time abstraction genuinely improves the codebase.

A strong Sass developer understands three layers:

```text
1. Sass source architecture
2. Generated CSS
3. Browser behavior
```

If you only understand the Sass source but do not understand the CSS it generates, you will eventually create difficult-to-maintain styles.

If you understand CSS deeply first, Sass becomes a powerful productivity and architecture tool rather than a source of unnecessary complexity.

**Master CSS first principles. Use Sass to organize, generate, validate, and reuse them intelligently.**
