# Tailwind CSS Complete Master Learning Handbook — In Depth

> **Deep Edition — Beginner → Advanced → Production**
>
> A single-file, beginner-to-advanced Tailwind CSS learning reference with explanations, practical scenarios, code examples, patterns, architecture guidance, debugging tips, interview preparation, and real-world project recipes.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Tailwind CSS Is](#2-what-tailwind-css-is)
3. [Prerequisites](#3-prerequisites)
4. [Tailwind Mental Model](#4-tailwind-mental-model)
5. [Installation and Project Setup](#5-installation-and-project-setup)
6. [Tailwind v4 vs v3](#6-tailwind-v4-vs-v3)
7. [Your First Tailwind UI](#7-your-first-tailwind-ui)
8. [Utility Classes](#8-utility-classes)
9. [Spacing](#9-spacing)
10. [Sizing](#10-sizing)
11. [Typography](#11-typography)
12. [Colors and Opacity](#12-colors-and-opacity)
13. [Backgrounds](#13-backgrounds)
14. [Borders, Radius, Rings, and Outlines](#14-borders-radius-rings-and-outlines)
15. [Shadows](#15-shadows)
16. [Display and Visibility](#16-display-and-visibility)
17. [Flexbox](#17-flexbox)
18. [CSS Grid](#18-css-grid)
19. [Positioning](#19-positioning)
20. [Overflow and Scrolling](#20-overflow-and-scrolling)
21. [Responsive Design](#21-responsive-design)
22. [States and Variants](#22-states-and-variants)
23. [Dark Mode](#23-dark-mode)
24. [Transitions and Animation](#24-transitions-and-animation)
25. [Transforms](#25-transforms)
26. [Filters and Backdrop Filters](#26-filters-and-backdrop-filters)
27. [Tables](#27-tables)
28. [Forms](#28-forms)
29. [Images, Aspect Ratio, and Object Fit](#29-images-aspect-ratio-and-object-fit)
30. [Lists, Columns, and Content](#30-lists-columns-and-content)
31. [Interactivity and UX Utilities](#31-interactivity-and-ux-utilities)
32. [Accessibility](#32-accessibility)
33. [Arbitrary Values and Arbitrary Variants](#33-arbitrary-values-and-arbitrary-variants)
34. [Theme Variables and Design Tokens](#34-theme-variables-and-design-tokens)
35. [Custom CSS, Utilities, and Variants](#35-custom-css-utilities-and-variants)
36. [Source Detection and Dynamic Classes](#36-source-detection-and-dynamic-classes)
37. [Reusable Components and Composition](#37-reusable-components-and-composition)
38. [Class Management in JavaScript Frameworks](#38-class-management-in-javascript-frameworks)
39. [Tailwind with React](#39-tailwind-with-react)
40. [Tailwind with Angular](#40-tailwind-with-angular)
41. [Tailwind with Vue](#41-tailwind-with-vue)
42. [Tailwind with Laravel and Blade](#42-tailwind-with-laravel-and-blade)
43. [Common UI Patterns](#43-common-ui-patterns)
44. [Application Layout Patterns](#44-application-layout-patterns)
45. [Real-World Mini Projects](#45-real-world-mini-projects)
46. [Responsive Strategy](#46-responsive-strategy)
47. [Design System Strategy](#47-design-system-strategy)
48. [Performance and Production Optimization](#48-performance-and-production-optimization)
49. [Debugging Tailwind](#49-debugging-tailwind)
50. [Common Mistakes and Anti-Patterns](#50-common-mistakes-and-anti-patterns)
51. [Migration from Plain CSS or Bootstrap](#51-migration-from-plain-css-or-bootstrap)
52. [Tailwind v3 to v4 Migration Notes](#52-tailwind-v3-to-v4-migration-notes)
53. [Testing Tailwind Interfaces](#53-testing-tailwind-interfaces)
54. [Folder Structure and Architecture](#54-folder-structure-and-architecture)
55. [Production Checklist](#55-production-checklist)
56. [Interview Questions](#56-interview-questions)
57. [Practice Exercises](#57-practice-exercises)
58. [Learning Roadmap](#58-learning-roadmap)
59. [Quick Reference Cheatsheet](#59-quick-reference-cheatsheet)
60. [Final Principles](#60-final-principles)

---

# 1. How to Use This Handbook

This handbook is designed to work in three ways:

- **Beginner course:** Read from top to bottom.
- **Daily reference:** Search for a topic such as `flex`, `grid`, `dark mode`, or `@theme`.
- **Project guide:** Copy the patterns and adapt them to real applications.

Do not try to memorize every Tailwind class.

The important skill is learning to translate a design requirement into CSS concepts and then into Tailwind utilities.

Example:

> Requirement: "Create a horizontally centered card with 24px padding, rounded corners, white background, and shadow."

Think first in CSS:

```css
width: ...;
margin-inline: auto;
padding: 24px;
border-radius: ...;
background: white;
box-shadow: ...;
```

Then translate to Tailwind:

```html
<div class="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
  ...
</div>
```

That translation skill is more valuable than memorization.

---

# 2. What Tailwind CSS Is

Tailwind CSS is a **utility-first CSS framework**.

Instead of creating a custom class for every component:

```css
.profile-card {
  display: flex;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: white;
}
```

you compose small utility classes directly in your markup:

```html
<div class="flex rounded-xl bg-white p-6">
  ...
</div>
```

Each utility normally represents one small CSS concern.

Examples:

```text
flex            -> display: flex
hidden          -> display: none
p-4             -> padding
mt-6            -> margin-top
text-center     -> text-align: center
font-bold       -> font-weight
rounded-lg      -> border-radius
shadow-md       -> box-shadow
w-full          -> width: 100%
```

## Why Tailwind exists

Traditional CSS can become difficult when applications grow:

- class naming becomes inconsistent,
- CSS files become large,
- unused rules remain forever,
- styles leak between components,
- developers repeatedly invent similar values,
- responsive code becomes scattered.

Tailwind encourages developers to build interfaces using an existing design scale.

## Tailwind is not a component library

Bootstrap traditionally gives you semantic component classes such as:

```html
<button class="btn btn-primary">
```

Tailwind gives styling primitives:

```html
<button
  class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
>
  Save
</button>
```

You create the component design yourself.

---

# 3. Prerequisites

Before learning Tailwind, understand basic HTML and CSS.

You should know:

```text
HTML elements
class attributes
block vs inline elements
margin
padding
width / height
color
font size
border
position
flexbox basics
grid basics
media queries
pseudo classes like :hover and :focus
```

Tailwind does **not replace CSS knowledge**.

It provides another syntax for applying CSS.

For example:

```html
<div class="flex items-center justify-between">
```

will be confusing if you do not understand:

```css
display: flex;
align-items: center;
justify-content: space-between;
```

---

# 4. Tailwind Mental Model

Think in five layers.

## Layer 1: Structure

HTML defines meaning and hierarchy.

```html
<article>
  <h2>Invoice #10021</h2>
  <p>Pending approval</p>
</article>
```

## Layer 2: Layout

Tailwind defines layout.

```html
<article class="flex items-center justify-between">
```

## Layer 3: Visual styling

```html
<article class="rounded-xl border bg-white p-6 shadow-sm">
```

## Layer 4: Responsive behavior

```html
<article class="block md:flex">
```

## Layer 5: Interaction and state

```html
<button class="bg-blue-600 hover:bg-blue-700 focus:ring-2">
```

A good Tailwind developer learns to recognize these layers while reading class lists.

---

# 5. Installation and Project Setup

Tailwind can be used through several workflows.

For production applications, use a real build setup.

## 5.1 Vite-based setup

Modern Tailwind projects commonly use the Vite plugin.

Install:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure Vite:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

Import Tailwind in your CSS:

```css
@import "tailwindcss";
```

Then run your development server:

```bash
npm run dev
```

## 5.2 PostCSS setup

For projects based on PostCSS, install the Tailwind PostCSS integration appropriate to the current Tailwind version and framework setup.

Your main CSS still generally contains:

```css
@import "tailwindcss";
```

## 5.3 CLI workflow

A CLI workflow is useful for simple HTML projects or environments without a framework bundler.

The concept is:

```text
input CSS
   ↓
Tailwind compiler
   ↓
generated CSS
```

## 5.4 Play CDN

A browser/CDN setup is useful for:

- experiments,
- demonstrations,
- tutorials,
- prototypes.

Do not treat it as the normal production workflow.

## 5.5 Main stylesheet

A simple Tailwind v4-style stylesheet may begin as:

```css
@import "tailwindcss";
```

Then you can add design tokens:

```css
@theme {
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --font-display: "Inter", sans-serif;
}
```

Now these utilities become available:

```html
<h1 class="font-display text-brand-600">
  Dashboard
</h1>
```

---

# 6. Tailwind v4 vs v3

Tailwind v4 changed several important concepts.

## Tailwind v3 mental model

A typical v3 project often used:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4f46e5",
      },
    },
  },
};
```

CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Tailwind v4 mental model

Tailwind v4 moves much customization into CSS.

```css
@import "tailwindcss";

@theme {
  --color-brand: #4f46e5;
}
```

Use it:

```html
<button class="bg-brand text-white">
  Save
</button>
```

## Why this matters

If you search online, you will find large amounts of v3 material.

Always check which Tailwind version a tutorial targets.

### Common clue

If a tutorial heavily revolves around:

```text
tailwind.config.js
content: [...]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

it is probably written around Tailwind v3 conventions.

That does not make the tutorial useless, but configuration details may differ.

---

# 7. Your First Tailwind UI

Create a profile card:

```html
<div class="mx-auto max-w-sm rounded-2xl bg-white p-6 shadow-lg">
  <img
    src="/avatar.jpg"
    alt="Profile"
    class="mx-auto h-24 w-24 rounded-full object-cover"
  />

  <div class="mt-4 text-center">
    <h2 class="text-xl font-bold text-gray-900">
      Alex Morgan
    </h2>

    <p class="mt-1 text-sm text-gray-500">
      Frontend Developer
    </p>

    <button
      class="mt-5 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
    >
      Follow
    </button>
  </div>
</div>
```

Read it as English:

```text
mx-auto       -> center horizontally
max-w-sm      -> restrict maximum width
rounded-2xl   -> large rounded corners
bg-white      -> white background
p-6           -> padding
shadow-lg     -> shadow

mt-4          -> top margin
text-center   -> centered text
text-xl       -> larger text
font-bold     -> bold font
text-gray-900 -> dark gray
```

---

# 8. Utility Classes

A utility class usually handles one property.

```html
<div class="p-4">
```

Instead of:

```css
padding: 1rem;
```

## Utility composition

Tailwind becomes powerful when utilities are combined.

```html
<button
  class="
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-indigo-600
    px-4
    py-2
    text-sm
    font-semibold
    text-white
    shadow-sm
    hover:bg-indigo-700
  "
>
  Submit
</button>
```

You can format long class strings across lines while learning.

---

# 9. Spacing

Spacing includes margin, padding, and gaps.

## Padding

```text
p-*   -> all sides
px-*  -> left and right
py-*  -> top and bottom
pt-*  -> top
pr-*  -> right
pb-*  -> bottom
pl-*  -> left
```

Examples:

```html
<div class="p-4">All sides</div>
<div class="px-6">Horizontal</div>
<div class="py-3">Vertical</div>
<div class="pt-8">Top only</div>
```

## Margin

```text
m-*
mx-*
my-*
mt-*
mr-*
mb-*
ml-*
```

Example:

```html
<h2 class="mb-4">Title</h2>
```

## Auto margin

Center a fixed-width element:

```html
<div class="mx-auto max-w-4xl">
```

Push an item to the right inside flex:

```html
<div class="flex">
  <span>Logo</span>
  <button class="ml-auto">Login</button>
</div>
```

## Gap

Prefer `gap-*` when spacing children inside flex/grid:

```html
<div class="flex gap-4">
  <button>Cancel</button>
  <button>Save</button>
</div>
```

Grid:

```html
<div class="grid grid-cols-3 gap-6">
```

### Scenario: form spacing

```html
<form class="space-y-5">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</form>
```

Use `space-y-*` when you specifically want consistent sibling spacing.

---

# 10. Sizing

## Width

```html
<div class="w-full"></div>
<div class="w-1/2"></div>
<div class="w-64"></div>
<div class="w-fit"></div>
<div class="w-screen"></div>
```

## Height

```html
<div class="h-12"></div>
<div class="h-full"></div>
<div class="h-screen"></div>
```

## Minimum size

```html
<div class="min-h-screen">
```

Common application shell:

```html
<body class="min-h-screen bg-gray-50">
```

## Maximum width

Extremely useful for readable layouts:

```html
<div class="mx-auto max-w-7xl px-4">
```

Article:

```html
<article class="mx-auto max-w-3xl">
```

Modal:

```html
<div class="w-full max-w-lg">
```

## Size shortcut

For square elements, Tailwind provides size utilities in current versions:

```html
<div class="size-10"></div>
```

Conceptually equivalent to setting both width and height.

Useful for:

- icons,
- avatars,
- loaders,
- circular buttons.

---

# 11. Typography

## Font size

```html
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">XL</p>
<h1 class="text-4xl">Heading</h1>
```

## Font weight

```html
<p class="font-light">Light</p>
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>
```

## Line height

```html
<p class="leading-relaxed">
```

Useful for long paragraphs.

## Letter spacing

```html
<h3 class="tracking-wide">
```

## Text alignment

```text
text-left
text-center
text-right
text-justify
```

## Text decoration

```html
<a class="underline decoration-2 underline-offset-4">
```

## Text transformation

```text
uppercase
lowercase
capitalize
normal-case
```

## Text overflow

Single line with ellipsis:

```html
<p class="truncate">
  Very long invoice description...
</p>
```

Multiline truncation may be handled with line-clamp utilities where supported/configured:

```html
<p class="line-clamp-3">
  Long article summary...
</p>
```

### Scenario: dashboard heading

```html
<div>
  <h1 class="text-2xl font-bold tracking-tight text-gray-900">
    Invoice Dashboard
  </h1>
  <p class="mt-1 text-sm text-gray-500">
    Review and approve pending invoices.
  </p>
</div>
```

---

# 12. Colors and Opacity

Colors appear in many utilities:

```text
text-*
bg-*
border-*
ring-*
outline-*
shadow-*
fill-*
stroke-*
```

Examples:

```html
<p class="text-blue-600">Blue text</p>
<div class="bg-gray-100">Gray background</div>
<div class="border-red-500">Red border</div>
```

## Color intensity

Typical palettes provide shades like:

```text
50
100
200
300
400
500
600
700
800
900
950
```

A common design approach:

```text
50-100  -> subtle backgrounds
200-300 -> borders
500-600 -> primary actions
700-900 -> dark interaction states / text
```

Example status badge:

```html
<span class="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
  Approved
</span>
```

## Color with alpha

Modern Tailwind supports alpha modifiers in many contexts:

```html
<div class="bg-black/50">
```

Very useful for modal overlays:

```html
<div class="fixed inset-0 bg-black/50"></div>
```

---

# 13. Backgrounds

## Background color

```html
<div class="bg-white">
```

## Gradients

Example:

```html
<section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
```

Depending on current version syntax and utilities, gradient configuration can evolve, so always verify advanced gradient syntax against the version you use.

## Background image via arbitrary value

```html
<div class="bg-[url('/images/banner.jpg')]">
```

## Background size

```text
bg-cover
bg-contain
bg-auto
```

Hero section:

```html
<section
  class="min-h-[500px] bg-cover bg-center"
  style="background-image: url('/hero.jpg')"
>
```

---

# 14. Borders, Radius, Rings, and Outlines

## Border width

```text
border
border-2
border-4
border-t
border-b
border-l
border-r
```

## Border color

```html
<div class="border border-gray-200">
```

## Border radius

```text
rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-full
```

Avatar:

```html
<img class="size-12 rounded-full">
```

Card:

```html
<div class="rounded-xl border border-gray-200">
```

## Rings

Rings are useful for:

- focus indicators,
- selected items,
- emphasized cards.

```html
<input class="focus:ring-2 focus:ring-blue-500">
```

## Outline

```html
<button class="focus-visible:outline-2">
```

Do not remove focus styling unless you replace it with an equally visible accessible indicator.

---

# 15. Shadows

Common conceptual levels:

```text
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-none
```

Use subtle shadows for application UI.

```html
<div class="rounded-xl bg-white shadow-sm">
```

Use larger shadows sparingly.

```html
<div class="rounded-2xl bg-white shadow-xl">
```

Typical modal:

```html
<div class="rounded-xl bg-white p-6 shadow-2xl">
```

---

# 16. Display and Visibility

## Display

```text
block
inline-block
inline
flex
inline-flex
grid
inline-grid
hidden
```

Example:

```html
<span class="inline-flex items-center">
```

## Responsive visibility

Hide on mobile, show at medium width:

```html
<div class="hidden md:block">
```

Show on mobile, hide at medium width:

```html
<div class="block md:hidden">
```

## Visibility

`invisible` typically preserves layout space while hiding the visual element.

```html
<div class="invisible">
```

`hidden` removes it from layout.

Understand the difference.

---

# 17. Flexbox

Flexbox is one of the most important Tailwind topics.

## Enable flex

```html
<div class="flex">
```

## Direction

```text
flex-row
flex-row-reverse
flex-col
flex-col-reverse
```

Mobile stacked, desktop horizontal:

```html
<div class="flex flex-col md:flex-row">
```

## Main-axis alignment

```text
justify-start
justify-center
justify-end
justify-between
justify-around
justify-evenly
```

Navbar:

```html
<nav class="flex items-center justify-between">
```

## Cross-axis alignment

```text
items-start
items-center
items-end
items-stretch
items-baseline
```

Common row:

```html
<div class="flex items-center gap-3">
```

## Wrapping

```html
<div class="flex flex-wrap gap-3">
```

## Growing and shrinking

```text
grow
grow-0
shrink
shrink-0
flex-1
```

Sidebar + content:

```html
<div class="flex">
  <aside class="w-64 shrink-0">
    Sidebar
  </aside>

  <main class="min-w-0 flex-1">
    Content
  </main>
</div>
```

`min-w-0` is often important when a flex child contains overflowing text.

## Order

```html
<div class="order-2 md:order-1">
```

Use visual reordering carefully because screen reader / keyboard order may still follow DOM order.

---

# 18. CSS Grid

Grid is ideal for two-dimensional layouts.

## Basic grid

```html
<div class="grid grid-cols-3 gap-6">
```

## Responsive grid

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

Classic product-card layout.

## Column spanning

```html
<div class="col-span-2">
```

Dashboard:

```html
<div class="grid grid-cols-12 gap-6">
  <section class="col-span-12 lg:col-span-8">
    Main chart
  </section>

  <aside class="col-span-12 lg:col-span-4">
    Summary
  </aside>
</div>
```

## Rows

```html
<div class="grid grid-rows-3">
```

## Auto-flow

Grid auto-flow utilities become useful for dense dynamic layouts.

## When to use Flex vs Grid

Use **Flexbox** when:

- layout mainly flows in one direction,
- navbar,
- button row,
- toolbar,
- icon + label.

Use **Grid** when:

- rows and columns both matter,
- dashboard,
- cards,
- gallery,
- complex page layout.

---

# 19. Positioning

## Position modes

```text
static
relative
absolute
fixed
sticky
```

## Relative parent + absolute child

Notification badge:

```html
<button class="relative">
  <span>Notifications</span>

  <span
    class="absolute -right-2 -top-2 rounded-full bg-red-600 px-1.5 text-xs text-white"
  >
    3
  </span>
</button>
```

## Full inset overlay

```html
<div class="absolute inset-0">
```

## Fixed modal

```html
<div class="fixed inset-0 z-50">
```

## Sticky header

```html
<header class="sticky top-0 z-40 bg-white">
```

## Z-index

```text
z-0
z-10
z-20
z-30
z-40
z-50
```

Do not randomly escalate z-index values.

Define an application layering model:

```text
content       0
dropdown     20
sticky nav   30
overlay      40
modal        50
toast        60/custom
```

---

# 20. Overflow and Scrolling

## Common utilities

```text
overflow-auto
overflow-hidden
overflow-visible
overflow-scroll
overflow-x-auto
overflow-y-auto
```

Responsive table:

```html
<div class="overflow-x-auto">
  <table class="min-w-full">
    ...
  </table>
</div>
```

Scrollable modal body:

```html
<div class="max-h-[70vh] overflow-y-auto">
```

Prevent image escaping rounded card:

```html
<div class="overflow-hidden rounded-xl">
  <img ...>
</div>
```

---

# 21. Responsive Design

Tailwind is mobile-first.

Unprefixed utilities apply by default.

Breakpoint-prefixed utilities apply from that breakpoint upward.

Example:

```html
<div class="text-sm md:text-base lg:text-lg">
```

Concept:

```text
mobile        -> text-sm
medium+       -> text-base
large+        -> text-lg
```

## Common breakpoint prefixes

Typical built-in names include:

```text
sm:
md:
lg:
xl:
2xl:
```

Do not think:

> `sm:` means phones.

Think:

> styles at the `sm` breakpoint and above.

## Responsive card grid

```html
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

## Responsive navigation

```html
<button class="md:hidden">
  Menu
</button>

<nav class="hidden md:flex md:items-center md:gap-6">
  ...
</nav>
```

## Responsive padding

```html
<section class="px-4 py-8 sm:px-6 lg:px-8">
```

## Max variants

Modern Tailwind supports range-style responsive patterns in many workflows.

Conceptual example:

```html
<div class="md:max-lg:flex">
```

Meaning: apply within a bounded breakpoint range.

## Custom breakpoints

Tailwind v4 theme variables can define breakpoints:

```css
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-desktop: 90rem;
}
```

Then:

```html
<div class="xs:grid-cols-2 desktop:grid-cols-5">
```

---

# 22. States and Variants

Variants apply utilities only under certain conditions.

## Hover

```html
<button class="bg-blue-600 hover:bg-blue-700">
```

## Focus

```html
<input class="focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
```

## Focus-visible

Useful for keyboard-oriented focus treatment:

```html
<button class="focus-visible:outline-2">
```

## Active

```html
<button class="active:scale-95">
```

## Disabled

```html
<button
  disabled
  class="disabled:cursor-not-allowed disabled:opacity-50"
>
```

## Checked

```html
<input type="checkbox" class="checked:bg-blue-600">
```

## First / last / odd / even

```html
<li class="first:pt-0 last:pb-0">
```

Table:

```html
<tr class="odd:bg-white even:bg-gray-50">
```

## Group

Style a child based on parent state.

```html
<a class="group block rounded-lg p-4 hover:bg-blue-50">
  <h3 class="text-gray-900 group-hover:text-blue-600">
    Invoice
  </h3>
</a>
```

## Peer

Style an element based on a sibling state.

```html
<label>
  <input type="checkbox" class="peer sr-only">

  <span class="peer-checked:bg-blue-600">
    Toggle
  </span>
</label>
```

## Data attribute variants

Modern Tailwind patterns can style based on data attributes.

Example idea:

```html
<button
  data-active="true"
  class="data-[active=true]:bg-blue-600 data-[active=true]:text-white"
>
```

This is extremely useful with headless UI components.

## ARIA variants

ARIA state can also drive styling in modern Tailwind patterns:

```html
<button
  aria-expanded="true"
  class="aria-expanded:bg-gray-100"
>
```

This keeps styling aligned with semantic state.

---

# 23. Dark Mode

Tailwind provides a `dark:` variant.

```html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
```

Card:

```html
<div
  class="
    rounded-xl
    border
    border-gray-200
    bg-white
    p-6
    dark:border-gray-800
    dark:bg-gray-900
  "
>
```

## System dark mode

Dark mode can follow operating system preference.

## Manual dark mode

Many applications want a theme toggle.

A common strategy is to add a class such as `dark` to an ancestor and configure the variant accordingly for the current Tailwind version.

Example application logic:

```js
document.documentElement.classList.toggle("dark");
```

Persist choice:

```js
localStorage.setItem("theme", "dark");
```

## Three-way theme strategy

Best user experience often supports:

```text
Light
Dark
System
```

Logic:

```js
function applyTheme(theme) {
  const root = document.documentElement;

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  root.classList.toggle("dark", isDark);
}
```

---

# 24. Transitions and Animation

## Transition

```html
<button class="transition">
```

Property-specific transition utilities can be used when desired.

## Duration

```html
<div class="duration-300">
```

## Timing function

```html
<div class="ease-in-out">
```

## Combined button effect

```html
<button
  class="
    rounded-lg
    bg-indigo-600
    px-4
    py-2
    text-white
    transition
    duration-200
    hover:-translate-y-0.5
    hover:bg-indigo-700
    hover:shadow-md
  "
>
  Continue
</button>
```

## Built-in animations

Common examples include concepts such as:

```text
animate-spin
animate-pulse
animate-bounce
```

Loader:

```html
<div class="size-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600">
```

Skeleton:

```html
<div class="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
```

## Respect reduced motion

Accessibility matters.

Use reduced-motion variants where appropriate:

```html
<div class="motion-reduce:transition-none">
```

---

# 25. Transforms

## Scale

```html
<div class="hover:scale-105">
```

## Translate

```html
<div class="-translate-y-1">
```

## Rotate

```html
<svg class="rotate-180">
```

## Origin

Transform origin matters for dropdowns and animations.

## Common card hover

```html
<article
  class="transition duration-200 hover:-translate-y-1 hover:shadow-lg"
>
```

Avoid excessive animation in enterprise applications.

---

# 26. Filters and Backdrop Filters

## Blur

```html
<div class="blur-sm">
```

## Grayscale

```html
<img class="grayscale hover:grayscale-0">
```

## Brightness

```html
<img class="brightness-75">
```

## Backdrop blur

Glass-like header:

```html
<header class="bg-white/80 backdrop-blur-md">
```

Modal overlay:

```html
<div class="fixed inset-0 bg-black/30 backdrop-blur-sm">
```

Use backdrop filters thoughtfully because they can affect rendering cost.

---

# 27. Tables

Enterprise applications frequently need tables.

Basic responsive table:

```html
<div class="overflow-x-auto rounded-xl border border-gray-200">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
          Invoice
        </th>
        <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
          Vendor
        </th>
        <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-600">
          Amount
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100 bg-white">
      <tr class="hover:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
          INV-10021
        </td>
        <td class="px-4 py-3 text-sm text-gray-600">
          ABC Pvt Ltd
        </td>
        <td class="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-900">
          ₹24,500
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Table best practices

- wrap wide tables in `overflow-x-auto`,
- align numeric columns right,
- use consistent row padding,
- keep headers visually distinct,
- preserve accessible `<table>` semantics,
- avoid replacing tables with arbitrary div grids when data is genuinely tabular.

---

# 28. Forms

Input:

```html
<label class="block">
  <span class="text-sm font-medium text-gray-700">
    Email
  </span>

  <input
    type="email"
    class="
      mt-1
      block
      w-full
      rounded-lg
      border
      border-gray-300
      px-3
      py-2
      text-gray-900
      shadow-sm
      focus:border-blue-500
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500/20
    "
  >
</label>
```

## Error state

```html
<input
  class="border-red-500 focus:border-red-500 focus:ring-red-500/20"
>

<p class="mt-1 text-sm text-red-600">
  Email is required.
</p>
```

## Disabled state

```html
<input
  disabled
  class="disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
>
```

## Checkbox

```html
<label class="flex items-center gap-2">
  <input type="checkbox" class="size-4 rounded border-gray-300">
  <span class="text-sm text-gray-700">Remember me</span>
</label>
```

## Form layout

```html
<form class="space-y-6">
```

Two-column responsive form:

```html
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div>...</div>
  <div>...</div>
</div>
```

---

# 29. Images, Aspect Ratio, and Object Fit

## Responsive image

```html
<img class="h-auto max-w-full">
```

## Object cover

```html
<img class="h-48 w-full object-cover">
```

Perfect for card images.

## Object contain

```html
<img class="h-48 w-full object-contain">
```

Useful for product images/logos where cropping is undesirable.

## Aspect ratio

```html
<div class="aspect-video">
  <iframe class="h-full w-full"></iframe>
</div>
```

Square image:

```html
<div class="aspect-square overflow-hidden rounded-xl">
  <img class="h-full w-full object-cover">
</div>
```

---

# 30. Lists, Columns, and Content

## Lists

```html
<ul class="list-disc pl-6">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

## Ordered list

```html
<ol class="list-decimal pl-6">
```

## Multi-column content

Useful for editorial content or feature lists:

```html
<div class="columns-1 md:columns-2 lg:columns-3">
```

## Pseudo-element content

Modern Tailwind supports content utilities that can work with `before:` / `after:`.

Example:

```html
<span class="after:ml-1 after:content-['*'] after:text-red-500">
  Required
</span>
```

---

# 31. Interactivity and UX Utilities

## Cursor

```text
cursor-pointer
cursor-not-allowed
cursor-wait
```

## Pointer events

```text
pointer-events-none
pointer-events-auto
```

Useful while submitting:

```html
<button class="pointer-events-none opacity-50">
```

But prefer the actual HTML `disabled` attribute for buttons when appropriate.

## User select

```text
select-none
select-text
select-all
```

## Resize

```text
resize
resize-none
resize-x
resize-y
```

## Scroll behavior

```html
<html class="scroll-smooth">
```

Do not force smooth scrolling when it harms usability or conflicts with user motion preferences.

## Touch action

Useful in advanced touch interfaces.

## Caret / accent

Modern Tailwind contains utilities for interface details such as caret or native control accent styling.

---

# 32. Accessibility

Tailwind makes styling easier, but accessible HTML is still your responsibility.

## Use semantic elements

Prefer:

```html
<button>Save</button>
```

over:

```html
<div onclick="save()">Save</div>
```

## Screen-reader-only content

```html
<span class="sr-only">
  Close menu
</span>
```

Example icon button:

```html
<button
  type="button"
  class="rounded-lg p-2 hover:bg-gray-100 focus-visible:outline-2"
>
  <svg aria-hidden="true">...</svg>
  <span class="sr-only">Close dialog</span>
</button>
```

## Keyboard focus

Do not write:

```html
<button class="focus:outline-none">
```

without providing an alternative visible focus style.

Better:

```html
<button
  class="
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-500
    focus-visible:ring-offset-2
  "
>
```

## Color contrast

Do not rely on very light gray text for important information.

Avoid:

```html
<p class="text-gray-300">
```

on white for important body content.

## Error communication

Do not indicate error using color alone.

Better:

```html
<p class="flex items-center gap-2 text-red-600">
  <span aria-hidden="true">⚠</span>
  Invalid invoice number
</p>
```

## Motion

Use `motion-reduce:*` where animations are not essential.

---

# 33. Arbitrary Values and Arbitrary Variants

Tailwind's predefined scale should be your default.

But sometimes a design requires an exact value.

## Arbitrary width

```html
<div class="w-[378px]">
```

## Arbitrary color

```html
<div class="bg-[#1e293b]">
```

## Arbitrary grid

```html
<div class="grid-cols-[240px_1fr]">
```

## Arbitrary calc

```html
<div class="h-[calc(100vh-64px)]">
```

## CSS variable value

```html
<div class="bg-[var(--panel-bg)]">
```

Depending on the property and current syntax, shorthand forms may also exist.

## Arbitrary variant

Powerful advanced selector styling can be expressed with arbitrary variants.

Example conceptual pattern:

```html
<div class="[&>p]:mb-4">
  <p>One</p>
  <p>Two</p>
</div>
```

Meaning:

> Apply `mb-4` to direct `<p>` children.

Another:

```html
<ul class="[&>li:not(:last-child)]:border-b">
```

Use arbitrary variants carefully. If selectors become extremely complex, custom CSS may be clearer.

---

# 34. Theme Variables and Design Tokens

Tailwind v4 emphasizes CSS-first design tokens.

Example:

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eef2ff;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;

  --font-display: "Inter", sans-serif;

  --breakpoint-3xl: 120rem;
}
```

These variables influence available utilities.

Use:

```html
<h1 class="font-display text-brand-700">
  Finance Dashboard
</h1>
```

Button:

```html
<button class="bg-brand-600 hover:bg-brand-700">
```

## Why design tokens matter

Without tokens:

```html
<div class="bg-[#4567e8]">
```

every developer may choose a different blue.

With a token:

```html
<div class="bg-brand-600">
```

the design language becomes consistent.

## Recommended token categories

Define tokens intentionally for:

```text
brand colors
semantic colors
fonts
breakpoints
spacing extensions
radius
shadows
animations
```

## Semantic tokens

Instead of thinking only:

```text
blue
green
red
```

think:

```text
primary
success
warning
danger
surface
muted
```

Depending on your design system strategy, semantic CSS variables can complement Tailwind theme variables.

---

# 35. Custom CSS, Utilities, and Variants

Tailwind does not ban CSS.

Use normal CSS when it communicates intent better.

## Base stylesheet

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
```

## `@utility`

Modern Tailwind supports defining custom utilities.

Conceptual example:

```css
@utility content-auto {
  content-visibility: auto;
}
```

Then:

```html
<section class="content-auto">
```

## `@variant`

Apply a Tailwind variant inside CSS:

```css
.my-link {
  color: var(--color-blue-600);

  @variant hover {
    color: var(--color-blue-700);
  }
}
```

## Custom variant

Advanced projects can define custom variants for domain-specific states.

Useful cases:

- theme modes,
- application shell states,
- custom data attributes,
- parent selectors.

## When custom CSS is preferable

Use custom CSS when:

- styling third-party HTML you cannot change,
- writing highly complex selectors,
- integrating specialized browser APIs,
- creating reusable utilities with clear meaning,
- generated content needs selector logic,
- class strings become harder to understand than CSS.

---

# 36. Source Detection and Dynamic Classes

Tailwind scans source files to detect utility class names and generate needed CSS.

This is crucial.

## Safe

```js
const button = isActive
  ? "bg-blue-600 text-white"
  : "bg-gray-100 text-gray-700";
```

All complete class names exist in source.

## Dangerous dynamic construction

```js
const color = "blue";
const className = `bg-${color}-600`;
```

A static scanner may not discover the final class name.

## Better mapping

```js
const colors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
};

const className = colors[color];
```

This pattern is predictable and tool-friendly.

## Source directives

Tailwind v4 supports CSS-first mechanisms such as `@source` for controlling additional source detection.

This is useful when utility classes exist in:

- external packages,
- shared component libraries,
- ignored directories,
- unusual template locations.

## Golden rule

Prefer **complete, statically discoverable class strings**.

---

# 37. Reusable Components and Composition

A common beginner question:

> If classes are in HTML, won't everything be duplicated?

Sometimes yes—and that duplication is often acceptable until a real component exists.

## Wrong abstraction timing

Do not create:

```css
.btn-blue-lg-rounded-shadow-special {
  ...
}
```

just to hide Tailwind classes.

## Better: framework component

React:

```jsx
function Button({ children }) {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
      {children}
    </button>
  );
}
```

Angular component template:

```html
<button
  class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
>
  <ng-content />
</button>
```

Blade component:

```blade
<button {{ $attributes->merge([
    'class' => 'rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'
]) }}>
    {{ $slot }}
</button>
```

## When extraction makes sense

Extract when:

- the same UI is reused,
- it has behavior,
- it has variants,
- it has an API,
- the design is part of your design system.

Do not extract merely because a class list looks long.

---

# 38. Class Management in JavaScript Frameworks

Conditional styling often creates messy strings.

## Basic JavaScript

```js
const classes = [
  "rounded-lg px-4 py-2 font-medium",
  isActive
    ? "bg-blue-600 text-white"
    : "bg-gray-100 text-gray-700",
].join(" ");
```

## `clsx`

A common helper:

```jsx
import clsx from "clsx";

<button
  className={clsx(
    "rounded-lg px-4 py-2",
    active && "bg-blue-600 text-white",
    disabled && "cursor-not-allowed opacity-50"
  )}
>
```

## `tailwind-merge`

Useful when classes may conflict.

Example problem:

```text
px-2 px-4
```

A Tailwind-aware merge utility can choose the intended winner.

Typical combination:

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Use:

```jsx
<button className={cn("px-4 py-2", className)}>
```

This is common in reusable component systems.

---

# 39. Tailwind with React

Example component:

```jsx
export default function UserCard({ user }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt=""
          className="size-12 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-gray-900">
            {user.name}
          </h3>
          <p className="truncate text-sm text-gray-500">
            {user.email}
          </p>
        </div>
      </div>
    </article>
  );
}
```

Remember React uses:

```text
className
```

not:

```text
class
```

## Conditional state

```jsx
<span
  className={
    status === "approved"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700"
  }
>
```

Prefer a mapping when many statuses exist.

```jsx
const statusClass = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  rejected: "bg-red-100 text-red-700",
};
```

---

# 40. Tailwind with Angular

Tailwind integrates naturally with Angular templates.

```html
<div class="rounded-xl border border-gray-200 bg-white p-6">
  <h2 class="text-xl font-semibold text-gray-900">
    Employee Profile
  </h2>
</div>
```

## Conditional classes with Angular

```html
<span
  [class.bg-green-100]="status === 'approved'"
  [class.text-green-700]="status === 'approved'"
  [class.bg-red-100]="status === 'rejected'"
  [class.text-red-700]="status === 'rejected'"
>
  {{ status }}
</span>
```

For many styles, `ngClass` can be cleaner:

```html
<span
  [ngClass]="{
    'bg-green-100 text-green-700': status === 'approved',
    'bg-yellow-100 text-yellow-700': status === 'pending',
    'bg-red-100 text-red-700': status === 'rejected'
  }"
  class="rounded-full px-2 py-1 text-xs font-medium"
>
  {{ status }}
</span>
```

## Component design

Keep stable Tailwind styles directly in templates.

Use Angular state only for genuinely dynamic styling.

---

# 41. Tailwind with Vue

Vue uses normal `class` plus binding.

```vue
<template>
  <button
    :class="[
      'rounded-lg px-4 py-2 font-medium',
      active
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700'
    ]"
  >
    Toggle
  </button>
</template>
```

Object syntax:

```vue
<div
  :class="{
    'border-green-500': valid,
    'border-red-500': !valid
  }"
>
```

---

# 42. Tailwind with Laravel and Blade

Blade works very naturally with Tailwind.

```blade
<div class="rounded-xl bg-white p-6 shadow-sm">
    <h2 class="text-xl font-semibold text-gray-900">
        {{ $title }}
    </h2>
</div>
```

Conditional state:

```blade
<span class="
    rounded-full px-2 py-1 text-xs font-medium
    {{ $status === 'approved'
        ? 'bg-green-100 text-green-700'
        : 'bg-yellow-100 text-yellow-700'
    }}
">
    {{ ucfirst($status) }}
</span>
```

Reusable Blade component:

```blade
{{-- resources/views/components/button.blade.php --}}

<button
    {{ $attributes->merge([
        'class' => 'rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700'
    ]) }}
>
    {{ $slot }}
</button>
```

Use:

```blade
<x-button>
    Save Invoice
</x-button>
```

---

# 43. Common UI Patterns

## 43.1 Primary button

```html
<button
  class="
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-indigo-600
    px-4
    py-2
    text-sm
    font-semibold
    text-white
    shadow-sm
    transition
    hover:bg-indigo-700
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-indigo-600
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>
  Save
</button>
```

## 43.2 Secondary button

```html
<button
  class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
>
  Cancel
</button>
```

## 43.3 Status badges

Approved:

```html
<span class="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
  Approved
</span>
```

Pending:

```html
<span class="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-700">
  Pending
</span>
```

Rejected:

```html
<span class="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
  Rejected
</span>
```

## 43.4 Alert

```html
<div class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
  Failed to save the invoice. Please try again.
</div>
```

## 43.5 Card

```html
<article class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <h3 class="font-semibold text-gray-900">Monthly Spend</h3>
  <p class="mt-2 text-3xl font-bold text-gray-900">₹2.4M</p>
  <p class="mt-1 text-sm text-green-600">+8.2% vs last month</p>
</article>
```

## 43.6 Breadcrumb

```html
<nav class="flex items-center gap-2 text-sm text-gray-500">
  <a href="/" class="hover:text-gray-900">Home</a>
  <span>/</span>
  <a href="/invoices" class="hover:text-gray-900">Invoices</a>
  <span>/</span>
  <span class="font-medium text-gray-900">INV-10021</span>
</nav>
```

## 43.7 Modal shell

```html
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 bg-black/50"></div>

  <section
    role="dialog"
    aria-modal="true"
    class="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
  >
    <h2 class="text-xl font-semibold text-gray-900">
      Delete invoice?
    </h2>

    <p class="mt-2 text-sm text-gray-600">
      This action cannot be undone.
    </p>

    <div class="mt-6 flex justify-end gap-3">
      <button class="rounded-lg border px-4 py-2">
        Cancel
      </button>

      <button class="rounded-lg bg-red-600 px-4 py-2 text-white">
        Delete
      </button>
    </div>
  </section>
</div>
```

In a real app, also implement:

- focus trapping,
- Escape handling,
- focus restoration,
- accessible labeling.

## 43.8 Dropdown

```html
<div class="relative">
  <button class="rounded-lg border bg-white px-4 py-2">
    Actions
  </button>

  <div
    class="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
  >
    <button class="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100">
      Edit
    </button>

    <button class="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
      Delete
    </button>
  </div>
</div>
```

## 43.9 Toast

```html
<div
  class="fixed bottom-4 right-4 flex max-w-sm items-start gap-3 rounded-xl bg-gray-900 p-4 text-white shadow-xl"
>
  <span>Invoice saved successfully.</span>
  <button class="ml-auto text-gray-300 hover:text-white">×</button>
</div>
```

## 43.10 Empty state

```html
<section class="rounded-xl border border-dashed border-gray-300 p-12 text-center">
  <h3 class="font-semibold text-gray-900">
    No invoices found
  </h3>
  <p class="mt-1 text-sm text-gray-500">
    Create your first invoice to get started.
  </p>
  <button class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
    Create invoice
  </button>
</section>
```

---

# 44. Application Layout Patterns

## Dashboard shell

```html
<div class="min-h-screen bg-gray-100">
  <div class="flex min-h-screen">
    <aside class="hidden w-64 shrink-0 border-r bg-white lg:block">
      Sidebar
    </aside>

    <div class="min-w-0 flex-1">
      <header class="sticky top-0 z-30 border-b bg-white">
        Header
      </header>

      <main class="p-4 sm:p-6 lg:p-8">
        Content
      </main>
    </div>
  </div>
</div>
```

## Centered marketing page

```html
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

## Article layout

```html
<article class="mx-auto max-w-3xl px-4 py-12">
```

## Master-detail layout

```html
<div class="grid min-h-screen grid-cols-1 lg:grid-cols-[320px_1fr]">
  <aside class="border-r bg-white">
    List
  </aside>

  <main class="min-w-0 bg-gray-50">
    Detail
  </main>
</div>
```

---

# 45. Real-World Mini Projects

## Project 1: Login screen

```html
<div class="min-h-screen bg-gray-50 px-4 py-12">
  <div class="mx-auto w-full max-w-md">
    <div class="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">
        Sign in
      </h1>

      <p class="mt-2 text-sm text-gray-500">
        Enter your credentials to continue.
      </p>

      <form class="mt-8 space-y-5">
        <label class="block">
          <span class="text-sm font-medium text-gray-700">
            Email
          </span>
          <input
            type="email"
            class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
        </label>

        <label class="block">
          <span class="text-sm font-medium text-gray-700">
            Password
          </span>
          <input
            type="password"
            class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          >
        </label>

        <button class="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">
          Sign in
        </button>
      </form>
    </div>
  </div>
</div>
```

### Concepts learned

```text
min height
centering
max width
form spacing
focus state
button state
border / ring
responsive container
```

---

## Project 2: KPI dashboard

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
  <article class="rounded-xl border bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-gray-500">
      Total invoices
    </p>
    <p class="mt-2 text-3xl font-bold text-gray-900">
      1,284
    </p>
    <p class="mt-2 text-sm text-green-600">
      +12% this month
    </p>
  </article>

  <article class="rounded-xl border bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-gray-500">
      Pending
    </p>
    <p class="mt-2 text-3xl font-bold text-gray-900">
      94
    </p>
  </article>

  <article class="rounded-xl border bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-gray-500">
      Rejected
    </p>
    <p class="mt-2 text-3xl font-bold text-gray-900">
      17
    </p>
  </article>

  <article class="rounded-xl border bg-white p-5 shadow-sm">
    <p class="text-sm font-medium text-gray-500">
      Paid
    </p>
    <p class="mt-2 text-3xl font-bold text-gray-900">
      1,173
    </p>
  </article>
</div>
```

---

## Project 3: Product card

```html
<article class="group overflow-hidden rounded-2xl border border-gray-200 bg-white">
  <div class="aspect-square overflow-hidden bg-gray-100">
    <img
      src="/product.jpg"
      alt="Wireless headphones"
      class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
    >
  </div>

  <div class="p-5">
    <p class="text-sm text-gray-500">
      Audio
    </p>

    <h3 class="mt-1 font-semibold text-gray-900">
      Wireless Headphones
    </h3>

    <div class="mt-4 flex items-center justify-between">
      <span class="text-lg font-bold text-gray-900">
        ₹4,999
      </span>

      <button class="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
        Add
      </button>
    </div>
  </div>
</article>
```

---

## Project 4: Responsive invoice list page

```html
<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">
        Invoices
      </h1>
      <p class="mt-1 text-sm text-gray-500">
        Manage invoice processing and approvals.
      </p>
    </div>

    <button class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
      New invoice
    </button>
  </div>

  <div class="mt-6 flex flex-col gap-3 md:flex-row">
    <input
      placeholder="Search invoices..."
      class="w-full rounded-lg border border-gray-300 px-3 py-2 md:max-w-sm"
    >

    <select class="rounded-lg border border-gray-300 px-3 py-2">
      <option>All statuses</option>
      <option>Pending</option>
      <option>Approved</option>
      <option>Rejected</option>
    </select>
  </div>

  <div class="mt-6 overflow-x-auto rounded-xl border border-gray-200">
    <table class="min-w-full divide-y divide-gray-200">
      ...
    </table>
  </div>
</div>
```

---

# 46. Responsive Strategy

Do not design desktop first and then desperately repair mobile.

Use mobile-first thinking.

## Step 1: Build the smallest layout

```html
<div class="grid grid-cols-1">
```

## Step 2: Add room when available

```html
<div class="grid grid-cols-1 md:grid-cols-2">
```

## Step 3: Optimize large screens

```html
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
```

## Common responsive decisions

Ask these questions:

1. Should this stack?
2. Should this hide?
3. Should typography increase?
4. Should padding increase?
5. Should a sidebar appear?
6. Should actions wrap?
7. Should a table scroll?
8. Should the component width be capped?

## Example toolbar

```html
<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
```

This one pattern solves many responsive toolbars.

---

# 47. Design System Strategy

A professional Tailwind codebase should become more consistent over time.

## Define visual rules

For example:

```text
Primary color  -> brand-600
Danger color   -> red-600
Card radius    -> rounded-xl
Input radius   -> rounded-lg
Card border    -> border-gray-200
Body text      -> text-gray-700
Muted text     -> text-gray-500
Page bg        -> bg-gray-50
```

## Build primitives

Typical reusable primitives:

```text
Button
Input
Select
Textarea
Checkbox
Badge
Alert
Card
Modal
Drawer
Dropdown
Tabs
Table
Pagination
Tooltip
Toast
Skeleton
```

## Component variants

Example design API:

```text
<Button variant="primary" size="md">
<Button variant="secondary" size="sm">
<Button variant="danger" size="lg">
```

Then map each variant to static Tailwind strings.

## Avoid uncontrolled arbitrary values

Bad design system:

```text
p-[17px]
p-[19px]
p-[21px]
rounded-[11px]
rounded-[13px]
bg-[#3655e8]
bg-[#3c5ae9]
```

Better:

```text
p-4
p-5
p-6
rounded-lg
rounded-xl
bg-brand-600
```

Arbitrary values should be exceptions, not your default design language.

---

# 48. Performance and Production Optimization

Tailwind's compiler scans source and generates styles for detected utilities.

This is fundamentally different from shipping every imaginable utility to the browser.

## Keep source detection correct

If Tailwind cannot detect a class, the generated CSS may not include it.

## Avoid runtime-generated class fragments

Bad:

```js
`text-${color}-600`
```

Better:

```js
const textColors = {
  success: "text-green-600",
  danger: "text-red-600",
};
```

## Keep dependencies current

Production CSS toolchains evolve.

When upgrading:

- read official release notes,
- read upgrade guides,
- test builds,
- inspect browser compatibility,
- verify third-party plugins.

## Avoid massive custom CSS duplication

Do not add CSS that recreates existing utilities unless necessary.

## Measure real performance

Do not optimize based only on intuition.

Check:

- CSS bundle size,
- page rendering,
- image size,
- JavaScript bundle,
- web fonts,
- layout shifts,
- interaction performance.

Tailwind is only one piece of frontend performance.

---

# 49. Debugging Tailwind

## Problem 1: Class has no effect

Check:

1. Is Tailwind imported?
2. Is the class spelled correctly?
3. Is another utility overriding it?
4. Is the element actually rendered?
5. Is the class dynamically generated?
6. Is a parent layout constraint causing the issue?
7. Is your Tailwind version compatible with that utility?
8. Is the source file scanned?
9. Did the development build restart correctly?
10. Is normal CSS specificity interfering?

## Problem 2: Width does not work

Example:

```html
<div class="w-full">
```

but it still appears narrow.

Check parent width.

`w-full` means:

> 100% of available containing width.

It does not mean:

> entire browser viewport in every situation.

## Problem 3: `h-full` does not work

Percentage height depends on parent height.

Often you really need:

```html
min-h-screen
```

or an explicit parent height.

## Problem 4: Flex child overflows

Try:

```html
min-w-0
```

Example:

```html
<div class="flex">
  <aside class="w-64 shrink-0"></aside>
  <main class="min-w-0 flex-1"></main>
</div>
```

## Problem 5: z-index does not work

Understand stacking contexts.

Properties such as:

- transforms,
- opacity,
- filters,
- positioned elements,
- isolation,

can create new stacking contexts.

Increasing `z-50` does not always solve architecture problems.

## Problem 6: Responsive class seems reversed

Remember mobile-first behavior.

```html
hidden md:block
```

means:

```text
default  -> hidden
md+      -> block
```

## Problem 7: Dynamic color is missing

Bad:

```js
`bg-${statusColor}-500`
```

Use complete mapped classes.

## Problem 8: Dark mode does not activate

Check:

- dark mode strategy,
- ancestor selector/class,
- local storage logic,
- system preference handling,
- correct Tailwind configuration for your version.

---

# 50. Common Mistakes and Anti-Patterns

## Mistake 1: Learning Tailwind without CSS

Tailwind is not a substitute for understanding layout.

Learn CSS fundamentals.

## Mistake 2: Using arbitrary values everywhere

Bad:

```html
<div class="mt-[13px] ml-[27px] w-[491px]">
```

Use the design scale unless the value is genuinely required.

## Mistake 3: Giant unreadable class strings without structure

Instead of random ordering:

```html
<div class="text-white p-4 hover:bg-blue-700 flex rounded-lg w-full bg-blue-600 items-center shadow">
```

group mentally or format consistently:

```html
<div
  class="
    flex
    w-full
    items-center
    rounded-lg
    bg-blue-600
    p-4
    text-white
    shadow
    hover:bg-blue-700
  "
>
```

Teams often adopt a class sorting formatter.

## Mistake 4: Overusing `@apply`

Do not convert every utility combination back into CSS just because class strings look long.

You can often create a component instead.

## Mistake 5: Removing focus outline

Bad accessibility:

```html
focus:outline-none
```

without replacement.

## Mistake 6: Using color alone for state

Add text/icons/semantics.

## Mistake 7: Building inaccessible custom controls

A beautiful Tailwind dropdown can still be inaccessible.

Styling and accessibility are separate responsibilities.

## Mistake 8: Random z-index values

Avoid:

```text
z-[999999]
```

Create layering rules.

## Mistake 9: Hardcoding dynamic classes

Use static maps.

## Mistake 10: Copying old version configuration blindly

Always identify whether documentation is for Tailwind v3 or v4.

---

# 51. Migration from Plain CSS or Bootstrap

## Plain CSS example

Before:

```css
.card {
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,.05);
}
```

After:

```html
<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
```

## Bootstrap example

Before:

```html
<div class="d-flex align-items-center justify-content-between p-3">
```

Tailwind:

```html
<div class="flex items-center justify-between p-3">
```

Button:

Bootstrap:

```html
<button class="btn btn-primary">
```

Tailwind:

```html
<button class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
```

## Migration strategy

Do not rewrite an entire large app at once unless you have strong reasons.

Safer approach:

```text
1. Introduce Tailwind build tooling.
2. Choose one page/component.
3. Define design tokens.
4. Convert repeatable primitives.
5. Build shared components.
6. Gradually migrate.
7. Remove obsolete CSS when no longer referenced.
```

---

# 52. Tailwind v3 to v4 Migration Notes

Tailwind v4 introduced major architectural changes.

Important categories to review:

```text
installation packages
CSS import syntax
configuration model
theme customization
browser support
plugins
source detection
deprecated utilities
changed defaults
compatibility with build tools
```

## Old CSS

Typical v3:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Typical v4:

```css
@import "tailwindcss";
```

## Old configuration thinking

v3 often centered customization in:

```text
tailwind.config.js
```

v4 emphasizes CSS configuration and theme variables.

## Browser support

Tailwind v4 targets modern browser capabilities.

If you must support older browsers, assess requirements before upgrading.

## Upgrade approach

For real projects:

1. commit current state,
2. update dependencies,
3. follow the official upgrade guide,
4. run automated migration tooling if appropriate,
5. fix build errors,
6. compare screenshots,
7. test responsive states,
8. test dark mode,
9. test custom plugins/utilities,
10. run production build.

Never upgrade a large production UI without visual regression testing.

---

# 53. Testing Tailwind Interfaces

Tailwind class names themselves usually are not the behavior you should test.

Bad UI test:

```js
expect(button).toHaveClass("bg-blue-600");
```

unless that specific class is intentionally part of the contract.

Better behavior test:

```js
expect(button).toBeEnabled();
expect(dialog).toBeVisible();
expect(alert).toHaveTextContent("Invoice saved");
```

## Visual testing

Useful for Tailwind-heavy UIs:

- screenshot testing,
- Storybook visual review,
- responsive viewport testing,
- dark-mode snapshots.

## Test breakpoints

At minimum check:

```text
small mobile
large mobile
tablet
laptop
large desktop
```

## Test states

Each component should be checked in:

```text
default
hover
focus
active
disabled
loading
error
empty
long-content
dark mode
```

---

# 54. Folder Structure and Architecture

Example React-style structure:

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx
│   ├── invoice/
│   │   ├── InvoiceCard.jsx
│   │   └── InvoiceTable.jsx
│   └── layout/
│       ├── Header.jsx
│       ├── Sidebar.jsx
│       └── AppShell.jsx
├── pages/
├── styles/
│   └── app.css
└── utils/
    └── cn.js
```

Angular:

```text
src/app/
├── core/
├── shared/
│   └── components/
├── features/
│   ├── invoices/
│   ├── vendors/
│   └── dashboard/
└── app.component.*
```

Laravel:

```text
resources/
├── css/
│   └── app.css
├── views/
│   ├── components/
│   ├── layouts/
│   └── invoices/
└── js/
```

## Architecture principle

Tailwind should remain a styling tool.

Do not mix:

```text
business logic
API logic
authorization
domain state
```

into CSS abstractions.

---

# 55. Production Checklist

Before releasing a Tailwind application, review:

- [ ] Production build succeeds.
- [ ] Tailwind version is intentional and documented.
- [ ] Source scanning includes all required templates/components.
- [ ] No important classes are dynamically constructed in unsafe ways.
- [ ] Mobile layout works.
- [ ] Tablet layout works.
- [ ] Desktop layout works.
- [ ] Dark mode works if supported.
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Form labels are present.
- [ ] Error states are understandable without color alone.
- [ ] Dialogs and menus are accessible.
- [ ] Tables are usable on narrow screens.
- [ ] Images have correct sizing/object-fit.
- [ ] Long text does not break layouts.
- [ ] Loading states exist.
- [ ] Empty states exist.
- [ ] Error states exist.
- [ ] Disabled states are clear.
- [ ] Hover-only actions are usable on touch devices.
- [ ] Motion is reasonable.
- [ ] Reduced-motion users are respected where relevant.
- [ ] CSS bundle is checked.
- [ ] Custom theme tokens are consistent.
- [ ] Arbitrary values are justified.
- [ ] Old unused custom CSS has been removed.
- [ ] Major browsers required by the project are tested.

---

# 56. Interview Questions

## Beginner

### What is Tailwind CSS?

A utility-first CSS framework that provides small composable classes for styling interfaces directly in markup.

### What does utility-first mean?

Instead of writing a custom class for every component, you combine small classes that each handle a specific CSS concern.

### What is `p-4`?

A padding utility based on Tailwind's spacing scale.

### Difference between `hidden` and `invisible`?

`hidden` removes the element from layout via display behavior. `invisible` hides it visually while generally preserving its layout space.

### What does `md:flex` mean?

Apply `display: flex` at the medium breakpoint and above.

---

## Intermediate

### How is responsive design handled?

Using breakpoint variants:

```html
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

Tailwind uses a mobile-first approach.

### What are state variants?

Prefixes that apply styles under certain states:

```text
hover:
focus:
active:
disabled:
checked:
dark:
group-hover:
peer-checked:
```

### What are arbitrary values?

Values outside the standard theme scale:

```html
w-[378px]
```

### Why avoid dynamic class fragments?

Tailwind source detection depends on discovering class names in source. Building partial strings can prevent required CSS from being generated.

### What are `group` and `peer`?

They allow styling elements based on state of a parent (`group`) or sibling (`peer`).

---

## Advanced

### How would you create a design system with Tailwind?

Define tokens, reusable primitives, controlled variants, consistent spacing/radius/color rules, and framework components.

### When should you use custom CSS instead of utilities?

When selectors are complex, markup cannot be changed, a reusable custom utility is clearer, or specialized CSS behavior is difficult to express cleanly with utility composition.

### How do Tailwind v4 theme variables differ from classic v3 configuration?

v4 moves core customization toward CSS-first variables using mechanisms such as `@theme`, while v3 commonly centered theme extension in `tailwind.config.js`.

### How do you avoid class conflicts in component libraries?

Use controlled variant maps and, where useful, tools such as `clsx` plus Tailwind-aware class merging.

### Why can z-index fail even with large values?

Because CSS stacking contexts can isolate z-index comparisons. You must understand the containing stacking context, not merely increase the number.

---

# 57. Practice Exercises

## Exercise 1

Create a card with:

```text
white background
24px-ish padding using Tailwind scale
rounded corners
subtle shadow
title
description
button
```

## Exercise 2

Create a navbar:

```text
logo left
links center/right
mobile menu button
links hidden on mobile
```

## Exercise 3

Create a responsive product grid:

```text
1 column mobile
2 tablet
3 laptop
4 desktop
```

## Exercise 4

Create a login form with:

```text
email
password
remember checkbox
forgot link
submit button
error state
```

## Exercise 5

Create an admin dashboard:

```text
sidebar
header
4 KPI cards
table
responsive collapse
```

## Exercise 6

Add dark mode to the dashboard.

## Exercise 7

Build a status badge component supporting:

```text
pending
approved
rejected
cancelled
```

## Exercise 8

Build a modal with:

```text
overlay
dialog
title
body
cancel
confirm
keyboard focus
```

## Exercise 9

Create a skeleton loading state.

## Exercise 10

Create a design token theme with:

```text
brand colors
font
custom breakpoint
```

---

# 58. Learning Roadmap

## Phase 1 — CSS foundations

Learn:

```text
box model
display
position
flexbox
grid
responsive design
pseudo classes
specificity
overflow
stacking context
```

## Phase 2 — Tailwind basics

Learn:

```text
spacing
sizing
colors
typography
borders
shadows
flex
grid
```

Build:

```text
card
button
form
navbar
```

## Phase 3 — Responsive Tailwind

Learn:

```text
sm:
md:
lg:
xl:
2xl:
```

Build:

```text
responsive landing page
dashboard
product grid
```

## Phase 4 — State variants

Learn:

```text
hover
focus
active
disabled
group
peer
data
aria
```

Build:

```text
tabs
dropdown
toggle
interactive cards
```

## Phase 5 — Advanced Tailwind

Learn:

```text
dark mode
arbitrary values
arbitrary variants
theme variables
custom utilities
custom variants
source detection
```

## Phase 6 — Component architecture

Learn:

```text
component extraction
variant APIs
class composition
design tokens
accessibility
testing
```

## Phase 7 — Production

Learn:

```text
build optimization
migration
browser support
visual regression
component documentation
design system governance
```

---

# 59. Quick Reference Cheatsheet

## Layout

```text
block
inline
inline-block
flex
inline-flex
grid
hidden
```

## Flexbox

```text
flex-row
flex-col
items-center
items-start
items-end
justify-start
justify-center
justify-end
justify-between
gap-*
flex-1
grow
shrink-0
```

## Grid

```text
grid
grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-4
grid-cols-12
col-span-*
gap-*
```

## Spacing

```text
p-*
px-*
py-*
pt-*
pr-*
pb-*
pl-*

m-*
mx-*
my-*
mt-*
mr-*
mb-*
ml-*

gap-*
space-x-*
space-y-*
```

## Sizing

```text
w-full
w-auto
w-fit
w-screen
h-full
h-screen
min-h-screen
max-w-sm
max-w-md
max-w-lg
max-w-xl
max-w-7xl
size-*
```

## Typography

```text
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-4xl

font-normal
font-medium
font-semibold
font-bold

text-left
text-center
text-right

leading-*
tracking-*
truncate
```

## Visual

```text
bg-*
text-*
border
border-*
rounded-*
shadow-*
ring-*
outline-*
opacity-*
```

## Position

```text
relative
absolute
fixed
sticky
top-*
right-*
bottom-*
left-*
inset-0
z-*
```

## Responsive

```text
sm:
md:
lg:
xl:
2xl:
```

## States

```text
hover:
focus:
focus-visible:
active:
disabled:
checked:
first:
last:
odd:
even:
group-hover:
peer-checked:
dark:
data-[...]:
aria-[...]:
```

## Animation

```text
transition
duration-*
ease-*
animate-spin
animate-pulse
animate-bounce
scale-*
translate-*
rotate-*
```

## Overflow

```text
overflow-hidden
overflow-auto
overflow-x-auto
overflow-y-auto
```

---

# 60. Final Principles

If you remember only a few ideas, remember these:

1. **Learn CSS first.** Tailwind is a CSS tool, not a CSS replacement.
2. **Think mobile-first.** Build the smallest layout first, then enhance it with breakpoints.
3. **Prefer the design scale.** Use arbitrary values only when genuinely needed.
4. **Keep class names statically discoverable.** Avoid constructing utility names from fragments.
5. **Extract components, not just class lists.** Reuse UI through real application components.
6. **Use design tokens.** Consistency is more important than having unlimited styling freedom.
7. **Accessibility is still your responsibility.** Tailwind only controls presentation.
8. **Understand Flexbox, Grid, stacking contexts, and overflow.** These solve most layout problems.
9. **Use state variants deliberately.** `hover`, `focus`, `disabled`, `group`, `peer`, `data`, and `aria` are major productivity tools.
10. **Check the Tailwind version.** v3 and v4 configuration patterns differ significantly.
11. **Do not fear custom CSS.** Use it when it is clearer than forcing everything into utilities.
12. **Build real projects.** You will learn Tailwind much faster by creating dashboards, forms, tables, modals, and responsive layouts than by memorizing documentation.

---

# Appendix A — CSS to Tailwind Translation Practice

```css
display: flex;
```

```html
flex
```

```css
align-items: center;
```

```html
items-center
```

```css
justify-content: space-between;
```

```html
justify-between
```

```css
width: 100%;
```

```html
w-full
```

```css
min-height: 100vh;
```

```html
min-h-screen
```

```css
overflow-x: auto;
```

```html
overflow-x-auto
```

```css
position: fixed;
inset: 0;
```

```html
fixed inset-0
```

```css
border-radius: 9999px;
```

```html
rounded-full
```

```css
font-weight: 700;
```

```html
font-bold
```

```css
text-align: center;
```

```html
text-center
```

```css
cursor: not-allowed;
```

```html
cursor-not-allowed
```

---

# Appendix B — Scenario Decision Guide

## "I need content horizontally and vertically centered"

```html
<div class="flex items-center justify-center">
```

If the parent must fill screen height:

```html
<div class="flex min-h-screen items-center justify-center">
```

## "I need equal cards"

```html
<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
```

## "I need sidebar + content"

```html
<div class="flex">
  <aside class="w-64 shrink-0"></aside>
  <main class="min-w-0 flex-1"></main>
</div>
```

## "I need a sticky top bar"

```html
<header class="sticky top-0 z-30">
```

## "I need a modal overlay"

```html
<div class="fixed inset-0 z-50 bg-black/50">
```

## "I need a responsive table"

```html
<div class="overflow-x-auto">
```

## "I need mobile stacked and desktop horizontal"

```html
<div class="flex flex-col md:flex-row">
```

## "I need text hidden after one line"

```html
<p class="truncate">
```

## "I need image crop without distortion"

```html
<img class="h-full w-full object-cover">
```

## "I need exact 72px height"

Use an arbitrary value when it truly belongs outside your design scale:

```html
<div class="h-[72px]">
```

But first check whether a standard size fits.

---

# Appendix C — Example Enterprise Page

```html
<div class="min-h-screen bg-gray-50">
  <header class="sticky top-0 z-30 border-b border-gray-200 bg-white">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <span class="text-lg font-bold text-gray-900">
          Finance Portal
        </span>
      </div>

      <nav class="hidden items-center gap-6 md:flex">
        <a class="text-sm font-medium text-gray-600 hover:text-gray-900">
          Dashboard
        </a>
        <a class="text-sm font-medium text-gray-600 hover:text-gray-900">
          Invoices
        </a>
        <a class="text-sm font-medium text-gray-600 hover:text-gray-900">
          Vendors
        </a>
      </nav>

      <button class="rounded-full">
        <img
          src="/avatar.jpg"
          alt="Profile"
          class="size-9 rounded-full object-cover"
        >
      </button>
    </div>
  </header>

  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">
          Invoice Dashboard
        </h1>
        <p class="mt-1 text-sm text-gray-500">
          Monitor invoice processing status and exceptions.
        </p>
      </div>

      <button class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
        Upload invoice
      </button>
    </div>

    <section class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-gray-500">
          Total
        </p>
        <p class="mt-2 text-3xl font-bold text-gray-900">
          1,284
        </p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-gray-500">
          Pending
        </p>
        <p class="mt-2 text-3xl font-bold text-yellow-600">
          94
        </p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-gray-500">
          Approved
        </p>
        <p class="mt-2 text-3xl font-bold text-green-600">
          1,173
        </p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-gray-500">
          Rejected
        </p>
        <p class="mt-2 text-3xl font-bold text-red-600">
          17
        </p>
      </article>
    </section>

    <section class="mt-8 rounded-xl border border-gray-200 bg-white">
      <div class="flex flex-col gap-4 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
        <h2 class="font-semibold text-gray-900">
          Recent invoices
        </h2>

        <div class="flex flex-col gap-3 sm:flex-row">
          <input
            class="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            placeholder="Search..."
          >

          <select class="rounded-lg border border-gray-300 px-3 py-2 text-sm">
            <option>All statuses</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Invoice
              </th>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Vendor
              </th>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
              <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Amount
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50">
              <td class="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-900">
                INV-10021
              </td>
              <td class="px-5 py-4 text-sm text-gray-600">
                ABC Pvt Ltd
              </td>
              <td class="px-5 py-4">
                <span class="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-700">
                  Pending
                </span>
              </td>
              <td class="whitespace-nowrap px-5 py-4 text-right text-sm font-medium text-gray-900">
                ₹24,500
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</div>
```

Study this example and identify:

```text
container
responsive padding
sticky header
responsive navigation
grid
cards
status badge
responsive controls
table overflow
hover state
semantic colors
spacing rhythm
```

---

# Appendix D — Recommended Learning Projects

Build these in order:

1. Profile card
2. Login page
3. Registration form
4. Navbar
5. Pricing cards
6. Product grid
7. Blog page
8. Admin dashboard
9. Responsive data table
10. Sidebar layout
11. Modal
12. Dropdown
13. Tabs
14. Toast notifications
15. Settings form
16. Dark mode dashboard
17. Ecommerce product page
18. Invoice management UI
19. Full design system
20. Production frontend connected to a real API

By project 20 you should be comfortable solving most everyday Tailwind problems.

---

# Appendix E — Version Awareness

This handbook is written around the **modern Tailwind v4 generation** while deliberately explaining older v3 patterns you are likely to encounter in tutorials and existing codebases.

Because Tailwind continues to evolve, verify version-sensitive areas against the official documentation when starting or upgrading a production project, especially:

```text
installation commands
build tool plugins
browser compatibility
theme configuration
directives
custom variants
source scanning
official plugins
migration behavior
```

The durable concepts in this handbook—CSS fundamentals, utility composition, responsive design, Flexbox, Grid, state variants, accessibility, design systems, and component architecture—remain the most important skills regardless of minor version changes.

---

# Appendix F — Tailwind v4 Internals and Configuration Deep Dive

This appendix goes deeper than normal beginner tutorials. You do not need to master every item on day one, but understanding these concepts will make large Tailwind projects much easier to reason about.

## F.1 Tailwind as a build tool

Tailwind is not simply a static CSS file containing millions of prewritten classes. In a normal project, Tailwind examines source files, identifies utility tokens, combines those with your theme and custom definitions, and emits the CSS your application needs.

A useful mental model is:

```text
Application source
  HTML / JSX / TSX / Vue / Blade / Angular templates
                    |
                    v
             source detection
                    |
                    v
      utility + variant interpretation
                    |
                    v
       theme token value resolution
                    |
                    v
             generated CSS
```

This explains several common questions:

- Why can a class disappear when generated dynamically?
- Why can adding a new `@theme` variable create a new class?
- Why can a custom utility automatically work with `hover:` or `lg:`?
- Why is a build/watch process needed in normal production projects?

Tailwind's output is still ordinary CSS interpreted by the browser.

## F.2 `@import "tailwindcss"`

A modern v4 stylesheet commonly begins with:

```css
@import "tailwindcss";
```

This imports Tailwind's framework CSS into the build.

Older Tailwind v3 tutorials often show:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

When copying examples, first identify the major version because setup syntax is one of the easiest areas to mix incorrectly.

## F.3 Preflight in depth

Tailwind's base layer includes **Preflight**, a set of base/reset styles designed to reduce browser inconsistencies and make utility-driven styling predictable.

### Common beginner surprise: headings

Plain browser HTML might visually style this by default:

```html
<h1>Dashboard</h1>
```

In a Tailwind project, do not depend on that browser-default appearance. Style intentionally:

```html
<h1 class="text-3xl font-bold tracking-tight text-gray-900">
  Dashboard
</h1>
```

### Common beginner surprise: lists

If you want visible bullets, specify them:

```html
<ul class="list-disc pl-6">
  <li>One</li>
  <li>Two</li>
</ul>
```

### Introducing Tailwind into legacy applications

Preflight can affect old pages that relied on browser defaults. When integrating Tailwind into an existing system, visually inspect:

```text
headings
lists
images
buttons
inputs
selects
tables
embedded widgets
rich text / WYSIWYG output
```

Do not assume that merely adding Tailwind's stylesheet is visually neutral.

## F.4 Cascade layers

Modern CSS cascade layers help establish predictable precedence. Conceptually, Tailwind organizes concerns into layers such as:

```text
theme
base
components
utilities
```

Your exact generated output may contain more implementation detail, but the architectural lesson is straightforward:

- **base** is for defaults/foundations,
- **components** is for reusable higher-level custom rules,
- **utilities** are focused classes intended to remain easy to compose and override.

Example base rule:

```css
@layer base {
  body {
    background: var(--color-gray-50);
    color: var(--color-gray-900);
  }
}
```

Example component rule:

```css
@layer components {
  .legacy-widget-card {
    border-radius: var(--radius-xl);
    background: var(--color-white);
    padding: --spacing(6);
  }
}
```

Use custom layers when they reduce complexity. Do not recreate an enormous BEM stylesheet inside Tailwind just because layers exist.

## F.5 `@theme` — design tokens that affect Tailwind's API

`@theme` is one of the most important v4 concepts.

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eef2ff;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;

  --font-display: "Inter", ui-sans-serif, system-ui;

  --breakpoint-3xl: 120rem;
}
```

These values are not merely ordinary CSS custom properties. Theme variables participate in Tailwind's utility/variant generation model.

Examples that may become available from tokens:

```html
<div class="bg-brand-600"></div>
<p class="text-brand-700"></p>
<h1 class="font-display"></h1>
<div class="3xl:grid-cols-6"></div>
```

### `@theme` versus `:root`

Use `@theme` when the value is part of your Tailwind design-token API.

Use `:root` for ordinary app/runtime variables that should not create Tailwind utility names.

```css
:root {
  --sidebar-open-width: 17rem;
  --runtime-progress: 0%;
}
```

You can still consume normal variables in arbitrary values:

```html
<div class="w-[var(--sidebar-open-width)]"></div>
```

## F.6 Theme variable namespaces

Tailwind uses namespaces to associate tokens with utility families.

Important conceptual namespaces include:

```text
--color-*          colors
--font-*           font families
--text-*           font sizes
--font-weight-*    font weights
--tracking-*       letter spacing
--leading-*        line height
--breakpoint-*     viewport breakpoint variants
--container-*      container query sizes
--radius-*         border radius
--shadow-*         shadows
--ease-*           timing functions
--animate-*        animations
```

Do not feel obligated to customize everything. Default tokens are valuable because they create a coherent scale immediately.

## F.7 When to create a design token

Create a token when a value is:

- repeated,
- meaningful,
- controlled by your design system,
- likely to change globally,
- shared by multiple components.

Good examples:

```text
brand color
application surface color
card radius
standard panel shadow
company font
large desktop breakpoint
```

Keep a one-off exact measurement arbitrary when it really is unique:

```html
<div class="top-[117px]"></div>
```

## F.8 `@source`

Tailwind normally discovers source classes automatically, but shared packages or unusual paths may need explicit inclusion.

```css
@source "../node_modules/@company/ui-library";
```

Use cases:

```text
monorepo shared UI package
vendor component package containing Tailwind classes
external template directory
files ignored by normal automatic detection
```

Think of it as telling the scanner:

> Also examine this source location for utility tokens.

## F.9 Why dynamic utility fragments are dangerous

This is a major production issue.

Risky:

```js
const color = status === "approved" ? "green" : "red";
const classes = `bg-${color}-100 text-${color}-700`;
```

Your JavaScript understands how to build the final class at runtime. A source scanner does not necessarily execute the code to discover every possible final token.

Prefer complete mappings:

```js
const statusClasses = {
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};
```

This is also better design-system architecture because you can explicitly decide which status colors are allowed.

## F.10 `@utility`

Register your own focused utility:

```css
@utility content-auto {
  content-visibility: auto;
}
```

Then:

```html
<section class="content-auto">
  ...
</section>
```

A registered utility can participate in Tailwind variants, which makes it more powerful than a random isolated CSS class.

### Good custom utility characteristics

```text
single concern
short name
repeatable behavior
understandable mapping
useful with variants
```

### Weak custom utility

```css
@utility invoice-entire-page-final-design-v2 {
  /* 40 unrelated declarations */
}
```

That is a component or stylesheet concern, not a utility.

## F.11 `@variant`

Apply a Tailwind variant inside CSS:

```css
.my-link {
  color: var(--color-gray-700);

  @variant hover {
    color: var(--color-indigo-600);
  }
}
```

This is useful when custom CSS is the right abstraction but you still want Tailwind's variant semantics.

## F.12 `@custom-variant`

Create domain-specific conditions:

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"], [data-theme="midnight"] *));
```

Now you can write:

```html
<div class="theme-midnight:bg-black theme-midnight:text-white">
```

Potential enterprise uses:

```text
density mode
special embedded mode
customer theme
application shell state
admin-only parent context
```

Keep custom variants semantic and documented.

## F.13 Manual dark mode with `@custom-variant`

System preference is useful, but many applications need a manual setting.

Class-based strategy:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Then:

```html
<html class="dark">
```

Data-attribute strategy:

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

Then:

```html
<html data-theme="dark">
```

This makes ordinary utilities work:

```html
<div class="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
```

## F.14 `@apply`

`@apply` lets custom CSS reuse utility declarations.

```css
.select2-search input {
  @apply rounded-lg border border-gray-300 px-3 py-2;
}
```

Strong use case:

> A third-party widget creates markup/classes you cannot control.

Weak use case:

> Hiding all utilities from your own component markup because they look unfamiliar.

If you control the UI and it is reusable, prefer an actual React/Vue/Angular/Blade component when appropriate.

## F.15 `@reference`

Some isolated CSS contexts need access to Tailwind's theme/custom utility definitions without duplicating the stylesheet.

Conceptual pattern:

```css
@reference "../../app.css";

.special-title {
  @apply text-2xl font-bold text-gray-900;
}
```

This can matter in:

```text
Vue component style blocks
Svelte component style blocks
CSS modules
```

## F.16 Compatibility directives

When migrating older Tailwind code, compatibility mechanisms such as `@config` and `@plugin` can bridge v3-style JavaScript configuration/plugin definitions with v4 CSS-first features.

Migration principle:

```text
New project:
  prefer modern CSS-first architecture

Existing mature project:
  migrate incrementally when safer
```

## F.17 `--alpha()`

Tailwind provides a build-time alpha helper for theme colors in custom CSS.

Concept:

```css
.panel {
  color: --alpha(var(--color-indigo-500) / 50%);
}
```

Use when you need to remain aligned with Tailwind tokens while writing custom CSS.

## F.18 `--spacing()`

Keep custom CSS aligned to your Tailwind spacing scale:

```css
.legacy-panel {
  padding: --spacing(6);
}
```

Useful with calculations:

```html
<div class="py-[calc(--spacing(4)-1px)]">
```

## F.19 Legacy `theme()` function

Older code may contain:

```css
.widget {
  margin: theme(spacing.12);
}
```

Modern v4 code generally prefers CSS theme variables and newer build-time helpers. Recognize `theme()` when maintaining older projects, but do not automatically copy it into new architecture.

## F.20 Browser baseline thinking

Tailwind v4 is designed around modern browser capabilities. The practical lesson is not to memorize only version numbers; it is to make browser support an explicit project requirement.

Before adopting or upgrading, ask:

```text
Which Chrome/Edge versions must work?
Which Safari versions must work?
Which Firefox versions must work?
Do customers use locked-down enterprise browsers?
Do kiosks/webviews update regularly?
```

Tailwind also exposes utilities for newer platform features whose support may be narrower than Tailwind's core baseline. Always check the underlying CSS feature when compatibility matters.

---

# Appendix G — Complete Utility Family Deep Reference

This section maps the major CSS families you will meet in current Tailwind. The goal is not memorizing every class; the goal is knowing which family to search when solving a UI problem.

## G.1 Layout family

### Aspect ratio

Use cases:

```text
video embeds
square product cards
photo galleries
responsive thumbnails
```

Examples:

```html
<div class="aspect-video"></div>
<div class="aspect-square"></div>
```

Custom:

```css
@theme {
  --aspect-poster: 2 / 3;
}
```

### Columns

```html
<article class="columns-1 md:columns-2 lg:columns-3">
```

Good for editorial flow, not application grids where exact row alignment matters.

### Break controls

Families conceptually include:

```text
break-before-*
break-after-*
break-inside-*
```

Useful for:

```text
print layout
multi-column content
avoiding card fragmentation
```

### Box decoration break

Relevant when inline/fragmented elements span lines or columns and you need borders/background decoration to clone or slice across fragments.

Rare in CRUD applications, useful in editorial/design-heavy interfaces.

### Box sizing

```text
box-border
box-content
```

If an element appears larger than its declared width, inspect padding/border and box sizing.

### Display

Important utilities:

```text
block
inline
inline-block
flex
inline-flex
grid
inline-grid
table
contents
flow-root
hidden
```

Scenario:

```html
<button class="inline-flex items-center gap-2">
```

### Float and clear

Use floats mainly for text wrapping:

```html
<img class="float-left mr-4 mb-2" ...>
```

Do not build modern app shells with floats.

### Isolation

```html
<div class="isolate">
```

Useful for intentionally creating a local stacking context.

### Object fit

```text
object-cover
object-contain
object-fill
object-none
object-scale-down
```

### Object position

```text
object-center
object-top
object-bottom
object-left
object-right
```

### Overflow

```text
overflow-auto
overflow-hidden
overflow-clip
overflow-visible
overflow-scroll
overflow-x-auto
overflow-y-auto
```

### Overscroll behavior

```text
overscroll-auto
overscroll-contain
overscroll-none
```

Nested modal example:

```html
<div class="max-h-[70vh] overflow-y-auto overscroll-contain">
```

### Position

```text
static
relative
absolute
fixed
sticky
```

### Inset

```text
inset-0
inset-x-0
inset-y-0
top-*
right-*
bottom-*
left-*
```

### Visibility

```text
visible
invisible
collapse
```

### Z-index

```text
z-auto
z-0
z-10
z-20
z-30
z-40
z-50
```

Treat z-index as a layering system rather than an arms race.

## G.2 Flexbox family

### Flex basis

Controls initial main-axis size.

```html
<div class="basis-1/3"></div>
```

### Direction

```text
flex-row
flex-row-reverse
flex-col
flex-col-reverse
```

### Wrapping

```text
flex-wrap
flex-nowrap
flex-wrap-reverse
```

### Flexible sizing

```text
flex-1
flex-auto
flex-initial
flex-none
```

### Grow/shrink

```text
grow
grow-0
shrink
shrink-0
```

Sidebar example:

```html
<aside class="w-64 shrink-0"></aside>
<main class="min-w-0 flex-1"></main>
```

### Order

```text
order-first
order-last
order-none
order-1
order-2
...
```

Accessibility warning: visual order can differ from DOM/focus/screen-reader order. Do not use `order-*` casually to create a semantic mismatch.

## G.3 Grid family

### Template columns

```html
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
```

### Column span/start/end

```html
<div class="col-span-12 lg:col-span-8"></div>
```

### Template rows

```html
<div class="grid grid-rows-3"></div>
```

### Row span/start/end

Useful in dashboard/masonry-like structured layouts.

### Auto-flow

Controls placement of automatically positioned grid items.

### Auto columns/rows

Useful for dynamically generated grid tracks.

### Custom track definitions

```html
<div class="grid grid-cols-[16rem_minmax(0,1fr)]">
```

This is excellent for application shells with a fixed sidebar and flexible content.

## G.4 Alignment family

Main-axis distribution:

```text
justify-start
justify-center
justify-end
justify-between
justify-around
justify-evenly
```

Cross-axis alignment:

```text
items-start
items-center
items-end
items-baseline
items-stretch
```

Individual item:

```text
self-start
self-center
self-end
self-stretch
```

Grid-oriented:

```text
justify-items-*
justify-self-*
content-*
place-content-*
place-items-*
place-self-*
```

Quick center:

```html
<div class="grid place-items-center">
```

## G.5 Spacing family

Margin:

```text
m-*
mx-*
my-*
mt-*
mr-*
mb-*
ml-*
```

Padding:

```text
p-*
px-*
py-*
pt-*
pr-*
pb-*
pl-*
```

Grid/flex gap:

```text
gap-*
gap-x-*
gap-y-*
```

Sibling spacing utilities can also be useful:

```text
space-x-*
space-y-*
```

Prefer `gap` when children are naturally part of a flex/grid relationship.

## G.6 Sizing family

Width:

```text
w-auto
w-full
w-screen
w-fit
w-min
w-max
w-1/2
w-1/3
w-64
```

Height:

```text
h-auto
h-full
h-screen
h-dvh
h-svh
h-lvh
```

Minimum/maximum:

```text
min-w-0
min-w-full
max-w-sm
max-w-md
max-w-lg
max-w-7xl
min-h-screen
max-h-*
```

Square shortcut:

```html
<div class="size-10"></div>
```

Use dynamic viewport units for mobile full-height UI when the browser's address/navigation bars matter.

## G.7 Typography family

### Font family

```text
font-sans
font-serif
font-mono
```

### Font size

```text
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
...
```

### Font smoothing

```text
antialiased
subpixel-antialiased
```

### Font style

```text
italic
not-italic
```

### Font weight

```text
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
font-black
```

### Letter spacing

```text
tracking-tight
tracking-normal
tracking-wide
tracking-wider
```

### Line clamp

Useful for card descriptions:

```html
<p class="line-clamp-3">
```

### Line height

```text
leading-tight
leading-normal
leading-relaxed
leading-loose
```

### Lists

```text
list-none
list-disc
list-decimal
list-inside
list-outside
```

### Text alignment

```text
text-left
text-center
text-right
text-justify
text-start
text-end
```

### Text color

```html
<p class="text-gray-600"></p>
```

### Text decoration

```text
underline
overline
line-through
no-underline
decoration-*
underline-offset-*
```

### Transform case

```text
uppercase
lowercase
capitalize
normal-case
```

### Overflow/wrap

```text
truncate
text-ellipsis
text-clip
whitespace-nowrap
whitespace-pre-wrap
break-words
```

### Vertical align

Useful for inline/table-cell content.

### Generated content

```html
<span class="after:content-['*'] after:text-red-500">
```

Do not place essential information only in pseudo-content.

## G.8 Background family

Background color:

```html
<div class="bg-white"></div>
```

Alpha:

```html
<div class="bg-black/50"></div>
```

Background image:

```html
<div class="bg-[url('/hero.jpg')]"></div>
```

Position:

```text
bg-center
bg-top
bg-bottom
```

Repeat:

```text
bg-repeat
bg-no-repeat
bg-repeat-x
bg-repeat-y
```

Size:

```text
bg-cover
bg-contain
bg-auto
```

Attachment/clip/origin are less common but useful for creative layouts.

## G.9 Gradient family

Common conceptual pattern:

```html
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
```

Use gradients intentionally. For enterprise dashboards, solid semantic colors are often clearer than decorative gradients on every card.

## G.10 Border family

Width:

```text
border
border-2
border-t
border-b
border-l
border-r
```

Color:

```html
<div class="border border-gray-200"></div>
```

Style:

```text
border-solid
border-dashed
border-dotted
border-double
border-none
```

Radius:

```text
rounded-sm
rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-full
```

Outline:

```text
outline-none
outline-2
outline-offset-2
outline-indigo-500
```

Focus rings:

```html
<button class="focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
```

## G.11 Effects family

Box shadow:

```text
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-none
```

Opacity:

```text
opacity-0
opacity-50
opacity-100
```

Blend modes:

```text
mix-blend-*
bg-blend-*
```

Use blend modes mainly for creative/media compositions.

## G.12 Filter family

```text
blur-*
brightness-*
contrast-*
drop-shadow-*
grayscale
hue-rotate-*
invert
saturate-*
sepia
```

Example:

```html
<img class="grayscale transition hover:grayscale-0">
```

Backdrop filters:

```text
backdrop-blur-*
backdrop-brightness-*
backdrop-contrast-*
backdrop-grayscale
backdrop-hue-rotate-*
backdrop-invert
backdrop-saturate-*
backdrop-sepia
```

Use carefully because large blurred/translucent surfaces can increase rendering cost.

## G.13 Mask family

Modern Tailwind versions expose CSS masking capabilities. Masks can create fades, cutouts, image-shaped visibility, and decorative reveals.

Typical use cases:

```text
fade overflowing media at edges
logo/image masking
complex decorative reveal
```

This is advanced. Prefer simpler clipping/overflow when it solves the same problem.

## G.14 Table family

Concepts:

```text
border-collapse
border-separate
border-spacing-*
table-auto
table-fixed
caption-top
caption-bottom
```

Use semantic `<table>` markup for genuinely tabular information.

## G.15 Transition family

```text
transition
transition-colors
transition-opacity
transition-shadow
transition-transform
duration-*
delay-*
ease-*
```

Button:

```html
<button class="transition-colors duration-200 hover:bg-indigo-700">
```

## G.16 Animation family

Common built-ins:

```text
animate-spin
animate-pulse
animate-bounce
```

Respect reduced motion:

```html
<div class="motion-reduce:animate-none">
```

## G.17 Transform family

```text
translate-*
rotate-*
scale-*
skew-*
origin-*
perspective-*
backface-*
```

Hover lift:

```html
<article class="transition hover:-translate-y-1 hover:shadow-lg">
```

## G.18 Interactivity family

Modern Tailwind covers many browser UI properties:

```text
accent-color
appearance
caret-color
color-scheme
cursor
field-sizing
pointer-events
resize
scroll-behavior
scrollbar-color
scrollbar-width
scrollbar-gutter
scroll-margin
scroll-padding
scroll-snap-align
scroll-snap-stop
scroll-snap-type
touch-action
user-select
will-change
```

### Accent color

Useful for native checkbox/radio styling while preserving native semantics.

### Appearance

`appearance-none` removes native control appearance. Once you do that, you are responsible for rebuilding visual states accessibly.

### Field sizing

Modern CSS can allow form controls to size based on content. Browser support can be narrower; verify before relying on it.

### Pointer events

```text
pointer-events-none
pointer-events-auto
```

Decorative overlay:

```html
<div class="pointer-events-none absolute inset-0"></div>
```

### Resize

```text
resize
resize-none
resize-x
resize-y
```

### Scroll behavior

```html
<html class="scroll-smooth">
```

Respect user motion preferences for nonessential smooth movement.

### Scroll snapping

Useful for mobile carousels:

```html
<div class="flex snap-x snap-mandatory overflow-x-auto">
  <article class="snap-start">...</article>
</div>
```

### Touch action

Relevant for custom pan/zoom/drag interfaces.

### User select

```text
select-none
select-text
select-all
```

Do not prevent normal text selection without a reason.

### Will change

`will-change` is a performance hint, not a magic accelerator. Use only when actual rendering analysis justifies it.

## G.19 SVG family

```text
fill-*
stroke-*
stroke-* width utilities
```

Icon inheriting current text color:

```html
<svg class="size-5 fill-current" aria-hidden="true">...</svg>
```

## G.20 Accessibility family

Core patterns include:

```text
sr-only
not-sr-only
forced-color-adjust utilities
forced-colors variants
motion preferences
contrast/environment variants
```

Remember: semantic HTML, focus management, keyboard behavior, labels, and ARIA correctness are not automatically provided by a styling framework.


---

# Appendix H — Variants and Conditional Styling Masterclass

Variants are one of Tailwind's biggest strengths. They let you express *when* a utility should apply without leaving your markup.

A useful abstraction is:

```text
condition:utility
```

Example:

```text
hover:bg-indigo-700
```

means:

```text
when this element is hovered
→ use indigo-700 background
```

Variants can be stacked:

```html
<button class="dark:md:hover:bg-fuchsia-600">
```

Think:

```text
dark mode
AND md viewport or larger
AND hovered
→ apply background
```

## H.1 Hover

```html
<button class="bg-indigo-600 hover:bg-indigo-700">
  Save
</button>
```

Do not place critical functionality only behind hover. Touch devices may not have a meaningful hover interaction.

## H.2 Focus

```html
<input class="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20">
```

Use focus for input/keyboard interaction state.

## H.3 Focus-visible

`focus-visible:` is often preferable for keyboard-oriented focus indicators on clickable controls.

```html
<button
  class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
>
```

Do not remove focus without a visible alternative.

## H.4 Focus-within

A parent can style itself when a descendant is focused.

Example search box shell:

```html
<div class="rounded-lg border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
  <input class="w-full border-0 bg-transparent px-3 py-2 outline-none">
</div>
```

Great for compound controls with icons/buttons around the input.

## H.5 Active

```html
<button class="active:scale-[0.98]">
```

Use active states to communicate press feedback, but keep changes subtle.

## H.6 Visited

Useful for article/search result links where visited state improves navigation.

Be aware browsers restrict which CSS properties can be changed in `:visited` for privacy reasons.

## H.7 Target

The `:target` pseudo-class can style an element whose ID matches the URL fragment.

Useful for:

```text
anchor-based documentation
CSS-only reveal experiments
highlighting linked sections
```

## H.8 First / last / only child

```html
<li class="border-b last:border-b-0">
```

```html
<li class="first:pt-0 last:pb-0">
```

This avoids server/template conditions purely for cosmetic position styling.

## H.9 Odd / even

```html
<tr class="odd:bg-white even:bg-gray-50">
```

Use striped tables when it genuinely improves row tracking.

## H.10 Empty

```html
<div class="empty:hidden">
```

Useful when a wrapper should disappear if it contains no rendered content.

Be careful: whitespace/text nodes and framework behavior can affect whether an element is technically empty.

## H.11 Disabled and enabled

```html
<button
  disabled
  class="disabled:cursor-not-allowed disabled:opacity-50"
>
```

Prefer actual HTML disabled semantics rather than only visually dimming a clickable element.

## H.12 Required / optional

```html
<input required class="required:border-l-4">
```

Styling can reinforce state, but visible labels should explain required fields clearly.

## H.13 Valid / invalid

```html
<input
  type="email"
  class="valid:border-green-500 invalid:border-red-500"
>
```

A UX issue: `:invalid` may become active before the user has meaningfully interacted with a field. Modern `user-valid` / `user-invalid` patterns can provide gentler post-interaction feedback where browser support/behavior fits your requirements.

## H.14 User-valid / user-invalid

Concept:

```html
<input class="user-invalid:border-red-500 user-valid:border-green-500">
```

Still show textual error messages.

## H.15 In-range / out-of-range

Useful for numeric/date inputs with `min` and `max` constraints.

```html
<input type="number" min="1" max="100" class="out-of-range:border-red-500">
```

## H.16 Placeholder-shown

Useful for floating-label patterns.

```html
<div class="relative">
  <input
    placeholder=" "
    class="peer block w-full rounded-lg border px-3 pb-2 pt-5"
  >
  <label
    class="absolute left-3 top-2 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </label>
</div>
```

Floating labels can become visually complex. Ensure labels remain programmatically associated and readable.

## H.17 Autofill

Browser autofill may apply its own appearance. Tailwind's autofill variant can help harmonize autofilled controls with your design.

Always test actual browser password/email autofill instead of only manual typing.

## H.18 Read-only

```html
<input readonly class="read-only:bg-gray-50 read-only:text-gray-500">
```

Do not confuse `readonly` with `disabled`:

```text
readonly
→ value can usually be focused/copied/submitted

disabled
→ not normally interactive/submitted
```

## H.19 Checked

```html
<input type="checkbox" class="checked:bg-indigo-600">
```

Good for native controls and custom control patterns.

## H.20 Indeterminate

Checkboxes can represent mixed state.

Common scenario:

```text
Select all
  [~] some rows selected
```

Visual styling should match the actual DOM indeterminate state set by application logic.

## H.21 Pseudo-elements: before and after

```html
<span class="before:mr-2 before:content-['•']">
```

Use for decoration, not essential accessible text.

## H.22 Placeholder

```html
<input class="placeholder:text-gray-400">
```

A placeholder is not a replacement for a label.

## H.23 File selector button

File inputs can style the file-selector button using the file variant.

Conceptual example:

```html
<input
  type="file"
  class="file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-700"
>
```

## H.24 Marker

Style list markers:

```html
<ul class="list-disc marker:text-indigo-500">
```

## H.25 Selection

```html
<body class="selection:bg-indigo-200 selection:text-indigo-950">
```

Useful for branded text-selection styling while maintaining contrast.

## H.26 Backdrop pseudo-element

The browser backdrop behind elements such as native dialogs can be styled through backdrop variants when applicable.

This can simplify native `<dialog>` implementations.

## H.27 Group variants

A `group` marks an ancestor whose state should affect descendants.

```html
<a class="group block rounded-xl p-4 hover:bg-indigo-50">
  <h3 class="text-gray-900 group-hover:text-indigo-700">
    Invoice
  </h3>
  <svg class="text-gray-400 group-hover:text-indigo-600">...</svg>
</a>
```

### Named groups

In nested interactive structures, named groups can distinguish parent state contexts when supported by your Tailwind version.

Think:

```text
group/card
group/menu
```

This prevents the wrong ancestor hover/open state from controlling a deeply nested child.

## H.28 Peer variants

`peer` marks a sibling whose state affects a later sibling.

```html
<label>
  <input type="checkbox" class="peer sr-only">
  <span class="bg-gray-300 peer-checked:bg-indigo-600">
    ...
  </span>
</label>
```

Use cases:

```text
custom switches
radio cards
floating labels
validation hints
conditional helper text
```

## H.29 `has-*` variants

CSS `:has()` enables an element to style itself based on descendants.

Conceptual selection card:

```html
<label class="rounded-xl border p-4 has-checked:border-indigo-600 has-checked:bg-indigo-50">
  <input type="radio" name="plan">
  Pro plan
</label>
```

This can remove extra wrapper state classes.

## H.30 ARIA variants

ARIA state can drive styling.

Accordion trigger:

```html
<button
  aria-expanded="false"
  class="group flex w-full items-center justify-between aria-expanded:bg-gray-50"
>
  Details
  <svg class="transition group-aria-expanded:rotate-180">...</svg>
</button>
```

Common semantic states:

```text
aria-expanded
aria-selected
aria-checked
aria-disabled
aria-current
```

Critical rule:

> Do not set fake ARIA values just to trigger CSS. ARIA must represent real state.

## H.31 Data attribute variants

Headless components frequently expose state via data attributes.

```html
<button
  data-state="open"
  class="data-[state=open]:bg-indigo-50 data-[state=open]:text-indigo-700"
>
```

This keeps application/library state and visual state synchronized.

Common headless states:

```text
data-state=open
data-state=closed
data-selected
data-disabled
data-side=top
data-orientation=vertical
```

## H.32 Supports variants

Feature queries let you progressively enhance when a browser supports a CSS property/value.

Use cases:

```text
backdrop filters
new layout behavior
advanced color/features
```

Always provide a reasonable baseline first.

## H.33 Print variant

Create print-specific changes:

```html
<button class="print:hidden">Print</button>
```

```html
<main class="print:max-w-none print:p-0">
```

Useful for reports/invoices where printed layout differs from app chrome.

## H.34 Motion-safe and motion-reduce

```html
<div class="motion-safe:transition motion-safe:hover:-translate-y-1 motion-reduce:transform-none">
```

Respect user preferences. Animation is decoration/communication—not a mandatory challenge.

## H.35 Contrast variants

Users may request more contrast. When available/relevant, use contrast condition variants to reinforce boundaries or text.

Do not design normal mode at such low contrast that the UI is barely usable without a special preference.

## H.36 Forced-colors

Windows high contrast and other forced-color environments can replace your colors.

Custom controls need careful testing because visual indicators you created with background colors/shadows may disappear.

Concept:

```html
<input class="appearance-none forced-colors:appearance-auto">
```

The best solution may be allowing native appearance under forced colors.

## H.37 Inverted-colors

Some users use display/color inversion. Specialized media variants can remove effects such as shadows that become visually problematic.

This is advanced accessibility polish.

## H.38 Pointer-fine and pointer-coarse

Do not assume desktop width means mouse.

Touch-friendly adjustment:

```html
<button class="p-2 pointer-coarse:p-4">
```

A tablet with a wide screen may still have a coarse primary pointer.

## H.39 Responsive variants

Default viewport variants:

```text
sm
md
lg
xl
2xl
```

Remember mobile-first:

```html
<div class="block md:flex">
```

means block at smaller widths, flex at medium and above.

## H.40 Max-width viewport variants

```html
<div class="max-md:hidden">
```

Use max variants for bounded or below-breakpoint behaviors.

## H.41 Range variants

Combine minimum and maximum boundaries:

```html
<div class="md:max-xl:grid-cols-2">
```

Useful when a middle range needs a special layout.

Avoid breakpoint spaghetti.

## H.42 Arbitrary viewport breakpoints

```html
<div class="min-[900px]:grid max-[600px]:text-sm">
```

Use for true one-off layout thresholds. If repeated, promote the breakpoint to your theme.

## H.43 Container queries

Mark container:

```html
<div class="@container">
```

Respond inside it:

```html
<div class="flex flex-col @md:flex-row">
```

This responds to **component container width**, not viewport width.

Excellent for reusable components rendered in:

```text
sidebar
modal
wide page
2-column dashboard
4-column dashboard
```

## H.44 Container max/range queries

Patterns include:

```text
@max-md:...
@sm:@max-lg:...
```

They let a component define layout bands based on its own available space.

## H.45 Named containers

Nested component systems can use named containers so a child queries the correct ancestor.

Use when a component sits inside another query container and the relationship would otherwise be ambiguous.

## H.46 Size containers

Normal container queries often focus on inline size (usually width). Size containers can expose block-size-dependent query units/behavior where needed.

This is specialized. Most app components only need width-based container queries.

## H.47 Container query units

Modern CSS units include concepts such as:

```text
cqw
cqh
cqi
cqb
```

Example:

```html
<div class="@container">
  <div class="w-[50cqw]">
```

Use sparingly; tokenized layouts are often easier to maintain.

## H.48 Choosing viewport vs container queries

Use viewport queries when the decision depends on the page/browser:

```text
show desktop navigation
switch entire app shell
increase global page gutters
```

Use container queries when the decision belongs to the component:

```text
card image beside text when enough card width exists
form fields switch from stacked to row inside modal
widget changes KPI arrangement depending on panel size
```

A strong modern UI often uses both.

---

# Appendix I — Design System and Component Architecture Deep Dive

Tailwind becomes significantly more valuable when it is used as part of a deliberate UI architecture rather than as a collection of random class strings.

## I.1 The four levels of a healthy Tailwind system

```text
1. Primitive design tokens
2. Semantic design tokens
3. Reusable UI primitives
4. Feature/application components
```

Example:

```text
Primitive:
  indigo-600

Semantic:
  primary-action

UI primitive:
  <Button variant="primary">

Feature component:
  <ApproveInvoiceButton>
```

## I.2 Primitive versus semantic color

Primitive tokens describe appearance:

```text
gray-50
gray-900
indigo-600
red-600
```

Semantic tokens describe purpose:

```text
surface
text-primary
text-muted
action-primary
danger
success
warning
```

Semantic thinking helps when themes change.

Imagine rebranding from indigo to teal. If every business component hardcodes `indigo-600`, migration is larger than if the primary action meaning is centralized.

## I.3 Example theme foundation

```css
@import "tailwindcss";

@theme {
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;

  --font-display: "Inter", ui-sans-serif, system-ui;

  --radius-control: 0.5rem;
  --radius-panel: 0.75rem;
}
```

Regular semantic runtime variables can sit above these when appropriate:

```css
:root {
  --app-surface: var(--color-white);
  --app-text: var(--color-gray-900);
  --app-primary: var(--color-brand-600);
}

.dark {
  --app-surface: var(--color-gray-900);
  --app-text: var(--color-gray-100);
}
```

The exact architecture depends on your design system, but separate **meaning** from **raw palette** where it pays off.

## I.4 UI primitive inventory

A mature application commonly benefits from primitives such as:

```text
Button
IconButton
Link
Input
Textarea
Select
Checkbox
Radio
Switch
Field
FormMessage
Badge
Alert
Card
Divider
Avatar
Skeleton
Spinner
Tooltip
Popover
DropdownMenu
Dialog
Drawer
Tabs
Accordion
Table
Pagination
Breadcrumb
Toast
```

Do not build every primitive from scratch if a well-tested accessible headless solution fits the project.

## I.5 Why components are better than `@apply` for behavior

Consider a reusable button.

CSS-only abstraction:

```css
.btn-primary {
  @apply rounded-lg bg-indigo-600 px-4 py-2 text-white;
}
```

A framework component can also enforce:

```text
correct HTML element
loading behavior
disabled semantics
icon placement
focus styles
analytics hook
variant API
size API
consistent text wrapping
```

Example React API:

```jsx
<Button variant="primary" size="md" loading={saving}>
  Save
</Button>
```

That is a stronger abstraction than a CSS class alone.

## I.6 Static variant maps

Button example:

```js
const buttonVariants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
  secondary:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",
};

const buttonSizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};
```

Benefits:

```text
all final Tailwind tokens are visible
allowed combinations are controlled
visual choices are reviewable
source detection is reliable
TypeScript typing is easy
```

## I.7 Avoid exposing Tailwind through props

Weak API:

```jsx
<Button
  background="indigo-600"
  paddingX="4"
  radius="lg"
  hoverBackground="indigo-700"
/>
```

This merely rebuilds a second styling language.

Prefer:

```jsx
<Button variant="primary" size="md">
```

Expose a `className` escape hatch only when appropriate.

## I.8 Class composition helpers

Conditional code can be cleaner with a helper:

```js
import clsx from "clsx";

const className = clsx(
  "rounded-lg px-4 py-2",
  active && "bg-indigo-600 text-white",
  disabled && "cursor-not-allowed opacity-50"
);
```

A Tailwind-aware merge helper can resolve conflicts such as:

```text
px-4
px-6
```

This is useful when a component provides defaults and consumers are intentionally allowed to override them.

Do not let merging become a substitute for clear component responsibilities.

## I.9 Styling slot-based components

Complex components have subparts:

```text
Dialog
  Overlay
  Panel
  Header
  Title
  Description
  Footer
```

Rather than one giant configurable class prop, define stable subcomponent contracts.

Example conceptual API:

```jsx
<Dialog>
  <Dialog.Overlay />
  <Dialog.Panel>
    <Dialog.Title>Delete?</Dialog.Title>
    <Dialog.Description>...</Dialog.Description>
  </Dialog.Panel>
</Dialog>
```

Tailwind classes then stay close to each structural slot.

## I.10 Compound variants

Sometimes styles depend on multiple props.

Example:

```text
variant=primary + size=sm
variant=ghost + disabled=true
```

You can model compound combinations in your component library instead of scattering ternary expressions in pages.

## I.11 Controlled arbitrary values

Arbitrary values are not inherently bad.

Good:

```html
<div class="grid-cols-[18rem_minmax(0,1fr)]">
```

if the application shell truly requires an 18rem rail.

Questionable:

```html
<div class="p-[17px] mt-[23px] rounded-[11px]">
```

repeated across dozens of components.

A useful rule:

```text
One-off geometry → arbitrary value may be correct
Repeated design choice → token/component rule
```

## I.12 Component spacing rhythm

Define predictable internal spacing.

Example card rules:

```text
small card   p-4
normal card  p-6
large card   p-8
```

Instead of:

```text
card A p-5
card B p-7
card C p-[22px]
```

Consistency often makes an interface look more professional than additional visual effects.

## I.13 Radius hierarchy

Example:

```text
small control  rounded-md
input/button   rounded-lg
card           rounded-xl
modal          rounded-2xl
pill/avatar    rounded-full
```

This provides visual grammar.

## I.14 Shadow hierarchy

Example:

```text
normal panel   shadow-sm
floating menu  shadow-lg
modal          shadow-xl
```

Use borders with shadows when surfaces need definition in both light and dark modes.

## I.15 Typography hierarchy

Example application system:

```text
Page title        text-2xl / text-3xl, font-bold
Section title     text-lg / text-xl, font-semibold
Card title        text-base, font-semibold
Body              text-sm / text-base
Metadata          text-xs / text-sm, muted
Table header      text-xs, uppercase, tracking-wide
```

Use fewer deliberate levels instead of random combinations.

## I.16 Status color architecture

Do not let every feature invent its own meaning.

Standardize:

```text
success   green
danger    red
warning   amber/yellow
info      blue
draft     gray
```

Then use text labels/icons too.

Example badge map:

```js
const statusStyles = {
  approved: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  draft: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};
```

## I.17 Dark mode as a token/system problem

Do not mechanically add:

```text
dark:bg-black
```

to everything.

Design dark mode by semantic surfaces:

```text
page background
raised surface
border
primary text
muted text
interactive hover
focus ring
status colors
charts/images
```

Example card:

```html
<div class="border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
```

Then ensure nested muted text also has an appropriate dark value.

## I.18 Density modes

Enterprise software sometimes needs comfortable and compact densities.

Possible approach:

```text
comfortable row → py-3
compact row     → py-2
```

Rather than pages overriding each table individually, make density a supported component/system state.

A custom variant can be useful when density is ancestor-driven.

## I.19 Responsive component contracts

Decide whether each component responds to:

```text
viewport
container
content overflow
explicit prop
```

Example:

- App sidebar responds to viewport.
- KPI card internal layout responds to container.
- Tag list wraps based on content.
- Dialog size may be an explicit prop.

This avoids overusing viewport breakpoints everywhere.

## I.20 Rich text and CMS content

Utility-first markup is difficult when HTML comes from a CMS and cannot contain your classes.

Approaches:

```text
custom CSS under a rich-content wrapper
Tailwind Typography plugin when appropriate
arbitrary descendant variants for small controlled cases
server-side sanitation/transformation
```

Avoid applying giant arbitrary selector chains to untrusted HTML without understanding security/sanitization.

## I.21 Third-party widgets

If a library outputs fixed classes:

```html
<div class="select2-dropdown">...</div>
```

custom CSS + `@apply` can be cleaner than DOM manipulation.

```css
.select2-dropdown {
  @apply rounded-lg border border-gray-200 bg-white shadow-lg;
}
```

## I.22 Documentation strategy

Document primitives with:

```text
purpose
variants
sizes
states
accessibility behavior
examples
do/don't guidance
```

A Storybook-like environment can make Tailwind component states visible and testable.

## I.23 Visual regression strategy

Capture components/pages at:

```text
mobile
wide mobile
tablet
desktop
wide desktop
light
dark
loading
empty
error
long content
```

This is especially valuable when:

```text
upgrading Tailwind
changing theme tokens
refactoring component variants
changing browser baseline
```

## I.24 Architecture smell checklist

Watch for:

- dozens of arbitrary shades representing the same semantic color,
- five different button radii,
- every page implementing its own modal shell,
- dynamic class interpolation,
- giant `@apply` component stylesheet,
- no focus styles,
- responsive overrides on every individual utility,
- repeated z-index values with no layering policy,
- inconsistent dark mode colors,
- components exposing raw Tailwind token props,
- inaccessible custom controls.

Fix these as system problems rather than patching individual pages.


---

# Appendix J — End-to-End Scenario Labs

These labs combine multiple Tailwind concepts. Do not only copy the code. Read the explanation and identify why every class exists.

## J.1 Scenario Lab — Responsive invoice management page

### Requirement

Build a page with:

```text
page title
upload action
search
status filter
KPI cards
responsive invoice table
mobile-safe layout
loading/error-ready structure
```

### Markup

```html
<div class="min-h-screen bg-gray-50 dark:bg-gray-950">
  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="min-w-0">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Invoices
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Search, review, and process supplier invoices.
        </p>
      </div>

      <button
        class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Upload invoice
      </button>
    </header>

    <section class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">1,284</p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Pending</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">94</p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Approved</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">1,173</p>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Rejected</p>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">17</p>
      </article>
    </section>

    <section class="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div class="border-b border-gray-200 p-4 dark:border-gray-800 sm:p-5">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 class="font-semibold text-gray-900 dark:text-white">Recent invoices</h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Latest processed documents.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <label class="sr-only" for="invoice-search">Search invoices</label>
            <input
              id="invoice-search"
              type="search"
              placeholder="Search invoice..."
              class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white sm:w-64"
            >

            <label class="sr-only" for="status-filter">Filter by status</label>
            <select
              id="status-filter"
              class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            >
              <option>All statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead class="bg-gray-50 dark:bg-gray-950/50">
            <tr>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Invoice</th>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Vendor</th>
              <th class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
              <th class="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Amount</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td class="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-900 dark:text-white">INV-10021</td>
              <td class="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">ABC Pvt Ltd</td>
              <td class="px-5 py-4">
                <span class="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Pending
                </span>
              </td>
              <td class="whitespace-nowrap px-5 py-4 text-right text-sm font-medium text-gray-900 dark:text-white">₹24,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</div>
```

### What this teaches

```text
min-h-screen
max-width page containers
responsive gutters
mobile-first header stacking
responsive KPI grid
dark mode
form focus states
screen-reader labels
responsive table overflow
semantic status badge
numeric alignment
hover states
```

### Why not make the table `grid`?

Because the content is tabular data with headers/rows. Native table semantics help assistive technology and preserve the correct relationship between columns and cells.

---

## J.2 Scenario Lab — Container-query product card

### Problem

The same product card appears in:

```text
narrow sidebar
2-column grid
wide recommendation panel
```

Viewport breakpoints are insufficient because the component can be narrow even on a desktop viewport.

### Solution

```html
<div class="@container">
  <article class="overflow-hidden rounded-2xl border border-gray-200 bg-white @md:flex">
    <div class="aspect-square bg-gray-100 @md:w-48 @md:shrink-0">
      <img
        src="/headphones.jpg"
        alt="Wireless headphones"
        class="h-full w-full object-cover"
      >
    </div>

    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wide text-indigo-600">
        Audio
      </p>

      <h3 class="mt-1 text-lg font-semibold text-gray-900">
        Wireless Headphones
      </h3>

      <p class="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
        Lightweight wireless headphones with active noise cancellation.
      </p>

      <div class="mt-5 flex items-center justify-between gap-4">
        <span class="text-lg font-bold text-gray-900">₹4,999</span>
        <button class="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black">
          Add
        </button>
      </div>
    </div>
  </article>
</div>
```

### Behavior

```text
narrow container
→ image above content

wide enough container
→ image beside content
```

The card is portable because it responds to its own allocated space.

---

## J.3 Scenario Lab — Accessible settings form

```html
<form class="mx-auto max-w-2xl space-y-8">
  <section>
    <div>
      <h2 class="text-lg font-semibold text-gray-900">Profile</h2>
      <p class="mt-1 text-sm text-gray-500">Update your visible account information.</p>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <label class="block">
        <span class="text-sm font-medium text-gray-700">First name</span>
        <input
          required
          class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 user-invalid:border-red-500"
        >
      </label>

      <label class="block">
        <span class="text-sm font-medium text-gray-700">Last name</span>
        <input
          required
          class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 user-invalid:border-red-500"
        >
      </label>
    </div>
  </section>

  <section class="border-t border-gray-200 pt-8">
    <fieldset>
      <legend class="text-lg font-semibold text-gray-900">Notifications</legend>
      <p class="mt-1 text-sm text-gray-500">Choose which updates you receive.</p>

      <div class="mt-5 space-y-4">
        <label class="flex items-start gap-3">
          <input type="checkbox" class="mt-1 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
          <span>
            <span class="block text-sm font-medium text-gray-900">Approval updates</span>
            <span class="block text-sm text-gray-500">Receive a message when an invoice is approved or rejected.</span>
          </span>
        </label>
      </div>
    </fieldset>
  </section>

  <div class="flex justify-end gap-3 border-t border-gray-200 pt-6">
    <button type="button" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
      Cancel
    </button>
    <button type="submit" class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
      Save changes
    </button>
  </div>
</form>
```

### Accessibility lessons

- `<label>` associates visible text with controls.
- `<fieldset>` and `<legend>` group related checkboxes.
- Focus styling remains visible.
- Validation color is supplemental; add actual error messages in real validation.
- Buttons have correct `type` attributes.

---

## J.4 Scenario Lab — Selectable radio cards with `has-*`

```html
<fieldset>
  <legend class="font-semibold text-gray-900">Choose plan</legend>

  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
    <label class="cursor-pointer rounded-xl border border-gray-200 p-4 transition has-checked:border-indigo-600 has-checked:bg-indigo-50">
      <input class="sr-only" type="radio" name="plan" value="basic">
      <span class="block font-semibold text-gray-900">Basic</span>
      <span class="mt-1 block text-sm text-gray-500">For small teams</span>
    </label>

    <label class="cursor-pointer rounded-xl border border-gray-200 p-4 transition has-checked:border-indigo-600 has-checked:bg-indigo-50">
      <input class="sr-only" type="radio" name="plan" value="pro">
      <span class="block font-semibold text-gray-900">Pro</span>
      <span class="mt-1 block text-sm text-gray-500">For growing teams</span>
    </label>
  </div>
</fieldset>
```

### Why this is elegant

The label's visual selection state follows its checked descendant without JavaScript adding/removing visual classes.

Still ensure keyboard focus is visibly represented; `has-*` does not replace focus styling.

---

## J.5 Scenario Lab — Accessible disclosure using ARIA state

```html
<div class="rounded-xl border border-gray-200">
  <button
    aria-expanded="false"
    aria-controls="invoice-extra"
    class="group flex w-full items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-gray-50 aria-expanded:bg-gray-50"
  >
    Additional invoice details

    <svg
      aria-hidden="true"
      class="size-5 text-gray-500 transition-transform group-aria-expanded:rotate-180"
      viewBox="0 0 20 20"
    >
      ...
    </svg>
  </button>

  <div id="invoice-extra" class="border-t border-gray-200 p-4">
    Additional content
  </div>
</div>
```

Application logic must update `aria-expanded` and hide/show the controlled region correctly.

The key design insight is that visual state derives from semantic state.

---

## J.6 Scenario Lab — Dark theme with Light / Dark / System modes

### CSS

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

### JavaScript concept

```js
const media = window.matchMedia("(prefers-color-scheme: dark)");

function shouldUseDark(theme) {
  return theme === "dark" || (theme === "system" && media.matches);
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", shouldUseDark(theme));
}

function saveTheme(theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", theme);
  }

  applyTheme(theme);
}

const initialTheme = localStorage.getItem("theme") ?? "system";
applyTheme(initialTheme);
```

### Component

```html
<div class="rounded-xl border border-gray-200 bg-white p-6 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
  <h2 class="font-semibold">Appearance</h2>
  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Choose your preferred color theme.</p>
</div>
```

### Production consideration

Apply the theme early enough during page load to avoid a noticeable flash of the wrong theme.

---

## J.7 Scenario Lab — Responsive app shell with mobile drawer concept

Desktop:

```html
<div class="flex min-h-screen bg-gray-50">
  <aside class="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
    Desktop sidebar
  </aside>

  <div class="min-w-0 flex-1">
    <header class="sticky top-0 z-30 border-b border-gray-200 bg-white">
      Header
    </header>

    <main class="p-4 sm:p-6 lg:p-8">
      Content
    </main>
  </div>
</div>
```

Mobile drawer when open:

```html
<div class="fixed inset-0 z-50 lg:hidden">
  <div class="absolute inset-0 bg-black/40"></div>

  <aside class="absolute inset-y-0 left-0 w-[min(20rem,85vw)] bg-white shadow-xl">
    Mobile sidebar
  </aside>
</div>
```

### Why `min-w-0` matters

Without it, the main flex child can allow intrinsic content—especially tables or long text—to force the entire page wider than the viewport.

---

## J.8 Scenario Lab — Skeleton → content → error states

### Skeleton

```html
<div class="animate-pulse rounded-xl border border-gray-200 bg-white p-6">
  <div class="h-4 w-24 rounded bg-gray-200"></div>
  <div class="mt-3 h-8 w-40 rounded bg-gray-200"></div>
  <div class="mt-4 h-4 w-full rounded bg-gray-200"></div>
</div>
```

### Loaded content

```html
<div class="rounded-xl border border-gray-200 bg-white p-6">
  <p class="text-sm text-gray-500">Monthly spend</p>
  <p class="mt-2 text-3xl font-bold text-gray-900">₹2.4M</p>
</div>
```

### Error

```html
<div role="alert" class="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
  <h3 class="font-semibold">Unable to load spend data</h3>
  <p class="mt-1 text-sm">Try refreshing this section.</p>
  <button class="mt-4 rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800">
    Retry
  </button>
</div>
```

A production component is not complete until its non-happy states have deliberate design.

---

# Appendix K — Production Debugging and Troubleshooting Playbook

## K.1 Use browser DevTools first

When a class appears not to work:

1. Inspect the element.
2. Confirm the class is present in rendered HTML.
3. Search the Styles panel for the generated rule.
4. Check whether it is crossed out.
5. Inspect the computed value.
6. Inspect parent layout constraints.

This distinguishes:

```text
class not generated
class generated but overridden
class applied correctly but parent/layout changes result
browser feature unsupported
```

## K.2 Problem — Tailwind styles are completely absent

Check:

```text
Is main CSS imported?
Is development server/build running?
Is generated CSS included in final page?
Is the CSS request failing?
Is PostCSS/Vite configuration correct?
```

Do not debug individual utility classes until the framework stylesheet itself is confirmed.

## K.3 Problem — only some classes are missing

Common cause: source detection.

Check whether missing classes live in:

```text
external package
unusual folder
runtime-generated content
CMS templates
ignored directory
```

Use `@source` when an external source location genuinely needs explicit registration.

## K.4 Problem — interpolated classes missing

Bad:

```js
`text-${color}-600`
```

Fix:

```js
const textColor = {
  success: "text-green-600",
  warning: "text-amber-600",
  danger: "text-red-600",
};
```

Do not solve a predictable design state with arbitrary runtime class construction.

## K.5 Problem — `w-full` does not fill viewport

`w-full` means 100% of containing block, not necessarily viewport.

Inspect:

```text
parent max-width
parent padding
parent width
flex/grid track
positioned containing block
```

If you truly mean viewport width, understand whether `w-screen` is appropriate—but beware scrollbar/overflow implications.

## K.6 Problem — `h-full` does nothing

Percentage height generally needs a defined containing height.

For pages, you often wanted:

```html
<div class="min-h-screen">
```

For a child inside a card, ensure the parent has a meaningful height.

## K.7 Problem — mobile `100vh` leaves weird space

Mobile browser chrome can change visible viewport height.

Consider modern viewport units:

```text
dvh
svh
lvh
```

Choose based on desired behavior and browser policy.

## K.8 Problem — flex child refuses to shrink

Classic fix:

```html
<main class="min-w-0 flex-1">
```

Then apply truncation/overflow to inner content as needed.

## K.9 Problem — `truncate` not working

Truncation requires a constrained width.

Check:

```text
Does parent/element have available width constraint?
Is it inside flex without min-w-0?
Is whitespace behavior correct?
Is overflow hidden/ellipsis behavior generated by chosen utility?
```

Example:

```html
<div class="min-w-0 flex-1">
  <p class="truncate">Very long value...</p>
</div>
```

## K.10 Problem — grid overflows

A custom/flexible track often needs `minmax(0, 1fr)` rather than a bare `1fr` in difficult intrinsic sizing situations.

Tailwind arbitrary grid template:

```html
<div class="grid grid-cols-[16rem_minmax(0,1fr)]">
```

Also inspect child min-width and unbreakable content.

## K.11 Problem — horizontal scroll from nowhere

Common causes:

```text
w-screen inside padded container
absolute child extending outside
negative margins
fixed pixel width
long unbreakable text
transform
wide table
min-width
```

Do not globally add:

```css
body { overflow-x: hidden; }
```

before finding the actual cause. That can hide legitimate layout bugs.

## K.12 Problem — sticky does not stick

Check:

```text
Is top/bottom offset set?
Which ancestor is the scroll container?
Does an ancestor have overflow that changes scrolling context?
Is there enough scrolling space?
Is sticky element taller than available region?
```

Example:

```html
<header class="sticky top-0">
```

## K.13 Problem — z-index does not win

Study stacking contexts.

A child with `z-50` may still sit behind another element if its ancestor stacking context is lower.

Inspect ancestors for:

```text
transform
filter
opacity
isolation
position + z-index
```

Fix architecture, not merely the number.

## K.14 Problem — absolute element positions relative to wrong ancestor

An absolutely positioned element uses an appropriate positioned containing block.

Common pattern:

```html
<div class="relative">
  <span class="absolute right-0 top-0">...</span>
</div>
```

Without `relative`, it may anchor elsewhere.

## K.15 Problem — modal content extends beyond screen

Use viewport-safe shell:

```html
<div class="fixed inset-0 overflow-y-auto p-4">
```

Panel:

```html
<div class="mx-auto w-full max-w-lg rounded-2xl bg-white">
```

For fixed header/footer inside modal, constrain body:

```html
<div class="max-h-[70vh] overflow-y-auto overscroll-contain">
```

## K.16 Problem — table destroys mobile layout

Wrap it:

```html
<div class="overflow-x-auto">
  <table class="min-w-full">...</table>
</div>
```

Do not force 12 columns into a 360px viewport by shrinking text until unreadable.

Alternative product designs:

```text
horizontal scroll
hide low-priority columns
mobile card representation
row details screen
```

Choose based on information needs.

## K.17 Problem — hover UI fails on touch devices

Never make critical controls appear only on hover.

Weak:

```html
<button class="opacity-0 group-hover:opacity-100">Delete</button>
```

If mobile users need Delete, provide a touch-accessible path.

Use pointer media variants when helpful.

## K.18 Problem — dark mode flashes on load

Cause: theme is applied only after initial render.

Solutions depend on architecture:

```text
apply theme class very early
render theme server-side when known
inline tiny initialization script in head
persist preference
respect system preference
```

Avoid rendering a large light page and flipping it after JavaScript boot if you can determine preference sooner.

## K.19 Problem — dark mode contrast is poor

Do not simply invert backgrounds.

Review semantic pairs:

```text
page background / text
card background / text
muted text
borders
hover surface
focus ring
status badges
code blocks
inputs
```

A dark mode is a complete palette, not `dark:bg-black` everywhere.

## K.20 Problem — focus ring gets clipped

Ancestor may have:

```text
overflow-hidden
```

or ring may extend beyond boundaries.

Options:

```text
use outline where appropriate
adjust ring offset
avoid unnecessary overflow clipping
put focus visual on correct element
```

Do not remove the focus visual.

## K.21 Problem — custom CSS overrides utilities unexpectedly

Inspect:

```text
specificity
source order
cascade layer
!important
inline style
```

Tailwind does not bypass CSS cascade rules.

## K.22 Problem — arbitrary value syntax fails

Verify:

```text
balanced brackets
valid CSS value
spaces encoded appropriately for class syntax
correct property namespace
your Tailwind version supports syntax
```

When using CSS variables and ambiguous namespaces, Tailwind may need a type hint in advanced cases.

Conceptual examples:

```html
<div class="text-(length:--my-var)"></div>
<div class="text-(color:--my-var)"></div>
```

## K.23 Problem — Sass/Less workflow conflicts with Tailwind v4

Modern Tailwind v4 is designed as a complete CSS build tool and is not intended to be layered with preprocessors in the old way.

For new v4 architecture, prefer native CSS capabilities and Tailwind's own build pipeline.

When migrating a legacy Sass-heavy system, plan carefully rather than assuming old preprocessing assumptions remain unchanged.

## K.24 Problem — editor marks `@theme` as invalid

Your editor/CSS language server may not understand Tailwind custom at-rules.

Use official Tailwind editor tooling/language support where available rather than assuming the CSS is actually invalid.

## K.25 Problem — upgrade builds but UI changed

A build passing proves syntax/build success, not visual equivalence.

After Tailwind upgrades:

```text
compare screenshots
check form controls
check borders/rings/shadows
check responsive breakpoints
check dark mode
check custom plugins/utilities
check arbitrary values
check third-party components
```

## K.26 Debugging priority order

Use this sequence:

```text
1. Rendered HTML correct?
2. Class token present?
3. CSS rule generated?
4. Rule applied or overridden?
5. Parent layout correct?
6. Browser supports property?
7. Application state correct?
```

This prevents random class experimentation.

---

# Appendix L — Migration and Production Governance

## L.1 Migrating a large plain-CSS project

Do not start by deleting all existing styles.

Recommended sequence:

```text
1. Add Tailwind build pipeline.
2. Establish tokens.
3. Build new UI primitives.
4. Migrate one low-risk feature/page.
5. Compare visuals/accessibility.
6. Migrate shared patterns.
7. Remove old selectors only when unused.
8. Repeat feature by feature.
```

This allows Tailwind and legacy CSS to coexist during transition.

## L.2 Migrating Bootstrap

Bootstrap components may encode both appearance and behavior conventions.

Inventory:

```text
grid/layout
buttons
forms
modals
navbars
dropdowns
tooltips
utilities
JavaScript plugins
```

Do not translate only class names. Reassess component behavior/accessibility too.

Example:

```text
Bootstrap .row/.col-* grid
→ Tailwind Grid/Flex based on actual layout need
```

## L.3 Migrating Tailwind v3 to v4

Tailwind provides an official upgrade tool for much of the migration work.

High-level process:

```text
create migration branch
confirm modern Node environment
run official upgrade tooling
review package changes
review generated CSS changes
review config migration
run tests
perform visual regression
check browser targets
```

Important differences include:

```text
CSS import model
CLI package
CSS-first theme configuration
automatic source detection
modern browser baseline
changed/deprecated behavior
plugin/config compatibility
```

If legacy browser support is mandatory, confirm whether remaining on Tailwind v3.4 is required.

## L.4 Browser support governance

Document supported browsers in the repository.

Example policy:

```text
Supported:
Chrome >= company baseline
Edge >= company baseline
Firefox >= company baseline
Safari >= company baseline
```

Then evaluate each newer CSS feature separately if it exceeds that baseline.

## L.5 Design-token governance

Require review before adding:

```text
new brand shade
new spacing token
new radius
new shadow
new breakpoint
```

Why?

Because unrestricted extension eventually recreates random CSS values under Tailwind names.

## L.6 Arbitrary-value governance

Not every arbitrary value needs approval, but repeated arbitrary values are a signal.

A useful review question:

> Is this a one-off implementation detail or a missing design token?

## L.7 Component governance

Before creating a new component, search existing primitives.

Before adding a new variant, ask:

```text
Is it a real design state?
Will it be reused?
Can an existing variant handle it?
Does it preserve accessibility?
```

## L.8 Accessibility definition of done

For interactive components, define acceptance criteria such as:

```text
semantic element used
keyboard operable
visible focus
screen reader name
state communicated programmatically
color not sole indicator
reduced motion considered
forced colors acceptable where required
```

## L.9 Tailwind code review checklist

Reviewers should look for:

- [ ] mobile-first responsive logic,
- [ ] unnecessary arbitrary values,
- [ ] dynamic utility fragments,
- [ ] inconsistent design tokens,
- [ ] inaccessible hover-only actions,
- [ ] missing focus states,
- [ ] incorrect HTML semantics,
- [ ] excessive z-index,
- [ ] overflow risks,
- [ ] long-string risks,
- [ ] dark-mode gaps,
- [ ] repeated class groups that may be a component,
- [ ] unnecessary `@apply`,
- [ ] unnecessary custom CSS,
- [ ] browser-compatibility risks.

## L.10 Production testing matrix

For a major page, test combinations:

```text
Viewport:
  small mobile
  large mobile
  tablet
  laptop
  desktop

Theme:
  light
  dark

Input:
  keyboard
  mouse
  touch when possible

State:
  loading
  empty
  normal
  error
  disabled
  long content

Data:
  minimum
  normal
  maximum/large
```

## L.11 Performance review

Tailwind-specific:

```text
production build enabled
source scanning configured correctly
unnecessary external source paths avoided
custom CSS duplication limited
```

Whole frontend:

```text
images optimized
fonts optimized
JS bundle reviewed
lazy loading sensible
layout shifts measured
animation/render cost reviewed
```

Do not blame or credit Tailwind for performance problems unrelated to CSS.

---

# Appendix M — Master Quick Lookup Matrix

When the requirement sounds like this, start here:

| Requirement | Tailwind concept to investigate |
|---|---|
| Center items horizontally/vertically | Flex/Grid alignment, `items-center`, `justify-center`, `place-items-center` |
| Mobile stacked, desktop row | `flex-col md:flex-row` |
| Responsive card columns | `grid-cols-*` breakpoint variants |
| Component changes based on its own width | `@container`, `@md:*` |
| Full-page minimum height | `min-h-screen` / modern viewport units |
| Sticky header | `sticky top-0` + stacking/overflow understanding |
| Modal overlay | `fixed inset-0 z-*` |
| Crop image to card | `object-cover` |
| Fit whole image | `object-contain` |
| Long text one-line ellipsis | `truncate` + width/min-width constraints |
| Flex child overflows | `min-w-0` |
| Table on mobile | `overflow-x-auto` wrapper |
| Child style from parent hover | `group` + `group-hover:*` |
| Sibling style from input state | `peer` + `peer-checked:*` |
| Parent style from checked descendant | `has-checked:*` |
| Style headless component state | `data-[...]:*` |
| Style semantic accessible state | `aria-*` variants |
| Keyboard focus | `focus-visible:*` |
| Form validation | `user-invalid:*`, error text, ARIA relationship |
| Dark theme | `dark:*` + theme strategy |
| Reduced animation | `motion-reduce:*` / `motion-safe:*` |
| Touch-friendly spacing | `pointer-coarse:*` |
| Exact one-off value | arbitrary value `[value]` |
| CSS property no built-in utility | arbitrary property `[property:value]` |
| Complex child selector | arbitrary variant `[&...]:*` |
| Repeated new primitive | `@utility` |
| Project-specific state prefix | `@custom-variant` |
| Theme token | `@theme` |
| External classes not detected | `@source` |
| Custom CSS wants Tailwind utilities | `@apply` when appropriate |
| Isolated CSS needs theme reference | `@reference` |
| Runtime status colors | static class map, not string interpolation |
| Layering bug | stacking context + z-index analysis |
| Legacy browser support | compatibility review before v4 adoption |

---

# Appendix N — Final Tailwind Mastery Exam

If you can answer and implement the following without blindly copying a tutorial, you have moved beyond beginner-level Tailwind.

## Fundamentals

1. Explain why Tailwind requires CSS knowledge.
2. Translate a CSS declaration into a Tailwind utility.
3. Explain utility-first architecture.
4. Explain why Tailwind is not a component library.
5. Explain the role of Preflight.

## Layout

6. Build a Flexbox toolbar.
7. Build a Grid dashboard.
8. Explain `min-w-0` in a flex layout.
9. Explain why `h-full` can fail.
10. Debug a sticky header.
11. Explain a stacking context.
12. Build a mobile-safe data table.

## Responsive design

13. Explain mobile-first breakpoint behavior.
14. Build a breakpoint range.
15. Explain viewport query versus container query.
16. Build a component using `@container`.
17. Explain when an arbitrary breakpoint is justified.

## State variants

18. Style hover/focus/active/disabled states.
19. Use `group`.
20. Use `peer`.
21. Style from an ARIA state.
22. Style from a data attribute.
23. Explain `has-*`.
24. Respect reduced motion.
25. Improve controls for coarse pointers.

## Tailwind v4

26. Explain `@theme`.
27. Explain `@source`.
28. Explain `@utility`.
29. Explain `@variant`.
30. Explain `@custom-variant`.
31. Explain appropriate `@apply` usage.
32. Explain `@reference`.
33. Recognize v3-style configuration.
34. Explain v4 browser-baseline implications.

## Architecture

35. Build static variant maps.
36. Explain why `bg-${color}-500` is risky.
37. Design a Button component API.
38. Create a token hierarchy.
39. Explain when arbitrary values become a design smell.
40. Explain when plain CSS is preferable.

## Accessibility

41. Create an icon button with accessible name.
42. Keep a visible focus indicator.
43. Build a labeled form field with error text.
44. Explain why color alone is insufficient for status.
45. Explain what extra behavior a modal needs beyond Tailwind styling.

## Production

46. Diagnose a missing generated class.
47. Diagnose unexpected specificity.
48. Diagnose dark-mode flash.
49. Plan a Tailwind v3→v4 migration.
50. Define a responsive/visual regression test matrix.

If any answer is unclear, return to the relevant section and build a small isolated example. Mastery comes from understanding behavior, not memorizing names.

---

# Appendix O — Final Reference Notes

This handbook intentionally emphasizes the **durable mental model** of Tailwind while documenting the major modern v4 concepts. Tailwind can continue to add utilities, variants, or syntax refinements over time.

For production work, always verify version-sensitive topics in official documentation, especially:

```text
installation packages and commands
framework-specific setup
browser requirements
new/changed utilities
custom directive syntax
source detection behavior
plugin compatibility
upgrade instructions
```

The concepts most worth internalizing permanently are:

```text
CSS fundamentals
utility composition
mobile-first responsive design
container-aware component design
semantic HTML
accessible states
static class detection
design tokens
component architecture
browser/debugging fundamentals
```

Once these are strong, learning a newly added Tailwind utility is usually a matter of understanding the underlying CSS property and reading its current syntax.

