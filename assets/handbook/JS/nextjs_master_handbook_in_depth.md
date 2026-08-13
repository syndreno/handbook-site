# Next.js Master Learning Handbook

> **A beginner-to-production reference for modern Next.js (App Router first)**

> **Current-version note (verified August 2026):** This edition is aligned with the **Next.js 16.3.x** documentation generation. The current installation documentation lists **Node.js 20.9+** as the minimum. Version-sensitive syntax should always be checked against the official docs during upgrades.
>
> Version context: **Next.js 16.3.x generation (August 2026)**. The core ideas in this handbook are intentionally explained from first principles, while version-sensitive features are called out where appropriate.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Next.js Is](#2-what-nextjs-is)
3. [React vs Next.js](#3-react-vs-nextjs)
4. [Prerequisites](#4-prerequisites)
5. [Installing and Creating a Project](#5-installing-and-creating-a-project)
6. [Project Structure](#6-project-structure)
7. [App Router Mental Model](#7-app-router-mental-model)
8. [Pages, Layouts, Templates, Loading and Errors](#8-pages-layouts-templates-loading-and-errors)
9. [File-System Routing](#9-file-system-routing)
10. [Dynamic Routes](#10-dynamic-routes)
11. [Catch-All and Optional Catch-All Routes](#11-catch-all-and-optional-catch-all-routes)
12. [Route Groups and Private Folders](#12-route-groups-and-private-folders)
13. [Parallel Routes](#13-parallel-routes)
14. [Intercepting Routes](#14-intercepting-routes)
15. [Navigation](#15-navigation)
16. [Server Components](#16-server-components)
17. [Client Components](#17-client-components)
18. [Server vs Client Component Decision Guide](#18-server-vs-client-component-decision-guide)
19. [Composition Patterns](#19-composition-patterns)
20. [Fetching Data](#20-fetching-data)
21. [Sequential vs Parallel Data Fetching](#21-sequential-vs-parallel-data-fetching)
22. [Streaming and Suspense](#22-streaming-and-suspense)
23. [Caching Mental Model](#23-caching-mental-model)
24. [Cache Components and `use cache`](#24-cache-components-and-use-cache)
25. [Revalidation and Cache Invalidation](#25-revalidation-and-cache-invalidation)
26. [Dynamic APIs](#26-dynamic-apis)
27. [Static, Dynamic and Partial Rendering](#27-static-dynamic-and-partial-rendering)
28. [Server Functions and Server Actions](#28-server-functions-and-server-actions)
29. [Forms](#29-forms)
30. [Route Handlers and APIs](#30-route-handlers-and-apis)
31. [Cookies](#31-cookies)
32. [Headers](#32-headers)
33. [Redirects, Rewrites and Not Found](#33-redirects-rewrites-and-not-found)
34. [Proxy](#34-proxy)
35. [Authentication](#35-authentication)
36. [Authorization](#36-authorization)
37. [Security](#37-security)
38. [Environment Variables](#38-environment-variables)
39. [Metadata and SEO](#39-metadata-and-seo)
40. [Open Graph, Twitter Cards and Social Images](#40-open-graph-twitter-cards-and-social-images)
41. [Images](#41-images)
42. [Fonts](#42-fonts)
43. [Scripts](#43-scripts)
44. [CSS and Styling](#44-css-and-styling)
45. [Tailwind CSS](#45-tailwind-css)
46. [TypeScript](#46-typescript)
47. [State Management](#47-state-management)
48. [Context Providers](#48-context-providers)
49. [URL State and Search Parameters](#49-url-state-and-search-parameters)
50. [Data Mutation Architecture](#50-data-mutation-architecture)
51. [Database Integration](#51-database-integration)
52. [ORM Patterns](#52-orm-patterns)
53. [Validation](#53-validation)
54. [Error Handling](#54-error-handling)
55. [Logging and Observability](#55-logging-and-observability)
56. [Background/Post-Response Work](#56-backgroundpost-response-work)
57. [Internationalization](#57-internationalization)
58. [Accessibility](#58-accessibility)
59. [Performance](#59-performance)
60. [Core Web Vitals](#60-core-web-vitals)
61. [Testing](#61-testing)
62. [Debugging](#62-debugging)
63. [ESLint and Code Quality](#63-eslint-and-code-quality)
64. [Deployment](#64-deployment)
65. [Self-Hosting](#65-self-hosting)
66. [Docker](#66-docker)
67. [CI/CD](#67-cicd)
68. [Production Architecture](#68-production-architecture)
69. [Common Application Patterns](#69-common-application-patterns)
70. [E-Commerce Scenario](#70-e-commerce-scenario)
71. [Dashboard Scenario](#71-dashboard-scenario)
72. [Blog/CMS Scenario](#72-blogcms-scenario)
73. [SaaS Scenario](#73-saas-scenario)
74. [File Upload Scenario](#74-file-upload-scenario)
75. [Real-Time Features](#75-real-time-features)
76. [Legacy Pages Router](#76-legacy-pages-router)
77. [Migrating Pages Router to App Router](#77-migrating-pages-router-to-app-router)
78. [Common Mistakes](#78-common-mistakes)
79. [Best Practices](#79-best-practices)
80. [Folder Architecture Examples](#80-folder-architecture-examples)
81. [Reusable Utility Patterns](#81-reusable-utility-patterns)
82. [Interview Questions](#82-interview-questions)
83. [Practice Exercises](#83-practice-exercises)
84. [Portfolio Projects](#84-portfolio-projects)
85. [30-Day Learning Roadmap](#85-30-day-learning-roadmap)
86. [Production Checklist](#86-production-checklist)
87. [Quick Reference Cheat Sheet](#87-quick-reference-cheat-sheet)
88. [Glossary](#88-glossary)
89. [Official Learning References](#89-official-learning-references)

---

# 1. How to Use This Handbook

Next.js can feel confusing because several concepts overlap:

- React renders user interfaces.
- Next.js decides how those interfaces are routed, rendered, cached, streamed and deployed.
- Some code executes on the server.
- Some code executes in the browser.
- Some pages are precomputed.
- Some requests are rendered dynamically.
- Data may be cached independently of UI.
- A single application may use several rendering strategies at once.

Do **not** try to memorize every API first.

Use this learning order:

```text
React basics
    ↓
Next.js project + routing
    ↓
Server Components
    ↓
Client Components
    ↓
Data fetching
    ↓
Caching and rendering
    ↓
Server Actions / forms
    ↓
Route Handlers
    ↓
Authentication + authorization
    ↓
Performance + testing
    ↓
Deployment + architecture
```

When reading a feature, always ask four questions:

1. **Where does this code run?**
2. **When does it run?**
3. **Can the result be cached?**
4. **Can browser users access the data/code directly?**

Those four questions solve a large percentage of Next.js confusion.

---

# 2. What Next.js Is

Next.js is a React framework for building full-stack web applications.

React itself mainly gives you a component model. Next.js adds application-level capabilities such as:

- routing
- layouts
- server rendering
- static generation
- React Server Components
- server-side data fetching
- APIs
- server-side mutations
- caching and revalidation
- image optimization
- font optimization
- metadata and SEO
- navigation
- error handling
- streaming
- deployment conventions

A simple mental model:

```text
React = UI building blocks
Next.js = application framework around React
```

## Typical Next.js applications

Next.js is useful for:

- company websites
- blogs
- documentation websites
- e-commerce stores
- SaaS applications
- authenticated dashboards
- admin panels
- marketplaces
- portals
- content platforms
- full-stack CRUD systems

---

# 3. React vs Next.js

Consider a traditional React SPA.

You may need to add libraries manually for:

```text
Routing
SEO strategy
Server rendering
API layer
Image optimization
Code splitting strategy
Server-side authentication
Deployment behavior
```

Next.js provides conventions and built-in primitives for many of these.

## React example

```tsx
function Product() {
  return <h1>Product</h1>
}
```

This is simply a component.

## Next.js page

```tsx
// app/products/page.tsx
export default function ProductsPage() {
  return <h1>Products</h1>
}
```

The file location itself creates a URL:

```text
app/products/page.tsx
        ↓
/products
```

That is **file-system routing**.

---

# 4. Prerequisites

Before studying Next.js deeply, understand:

## HTML

Know:

- semantic tags
- forms
- accessibility basics
- metadata
- links
- images

## CSS

Know:

- box model
- flexbox
- grid
- responsive design
- positioning
- selectors

## JavaScript

You should be comfortable with:

```js
const
let
functions
arrow functions
objects
arrays
map
filter
reduce
destructuring
spread syntax
modules
Promises
async/await
try/catch
fetch
```

## React

Understand:

- components
- props
- state
- event handlers
- hooks
- controlled forms
- composition
- context
- Suspense at a conceptual level

## TypeScript

Not strictly required, but strongly recommended.

Know:

```ts
type
interface
union types
generics
function types
optional properties
utility types
```

---

# 5. Installing and Creating a Project

A common starting command is:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

A typical setup may ask whether you want:

```text
TypeScript
ESLint
Tailwind CSS
src directory
App Router
import alias
```

For a serious new application, a sensible baseline is:

```text
TypeScript: Yes
ESLint: Yes
App Router: Yes
Tailwind: optional
src/: preference
```

## Common scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

Use:

```bash
npm run dev
```

for development.

Use:

```bash
npm run build
npm run start
```

to test a production build locally.

---

# 6. Project Structure

A small App Router project:

```text
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   └── api/
│       └── products/
│           └── route.ts
├── components/
├── lib/
├── public/
├── next.config.ts
├── package.json
└── tsconfig.json
```

A scalable project often separates responsibilities:

```text
src/
├── app/
├── components/
├── features/
├── lib/
├── data/
├── actions/
├── types/
├── hooks/
└── styles/
```

There is no magical "perfect" folder structure. Prefer a structure that makes ownership obvious.

---

# 7. App Router Mental Model

The App Router lives under:

```text
app/
```

It is built around nested route segments.

Example:

```text
app/
└── dashboard/
    └── users/
        └── page.tsx
```

URL:

```text
/dashboard/users
```

Each folder represents a **route segment**.

Special files give a segment behavior.

Common special files include:

```text
page.tsx
layout.tsx
template.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
default.tsx
```

The App Router also supports:

- Server Components
- streaming
- nested layouts
- parallel routes
- intercepting routes
- Server Functions
- advanced caching

---

# 8. Pages, Layouts, Templates, Loading and Errors

## `page.tsx`

Makes a route publicly accessible.

```tsx
export default function AboutPage() {
  return <h1>About</h1>
}
```

Path:

```text
app/about/page.tsx
```

URL:

```text
/about
```

## `layout.tsx`

Wraps child routes and persists across navigation.

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </section>
  )
}
```

Useful for:

- navigation
- sidebars
- shared shells
- persistent UI
- providers

## Root layout

Every App Router application needs a root layout.

```tsx
// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## `template.tsx`

Looks similar to a layout but creates a new instance when its relevant route segment changes.

Use a template when you intentionally need state/effects to reset.

## `loading.tsx`

Provides an instant loading UI for a route segment.

```tsx
export default function Loading() {
  return <p>Loading products...</p>
}
```

## `error.tsx`

Defines a route-segment error boundary.

Because error boundaries require client-side behavior:

```tsx
'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

---

# 9. File-System Routing

Folder:

```text
app/contact/page.tsx
```

Route:

```text
/contact
```

Folder:

```text
app/account/settings/page.tsx
```

Route:

```text
/account/settings
```

## Important rule

A folder alone does not necessarily expose a route.

For example:

```text
app/products/
```

does not become `/products` until a routable file such as `page.tsx` exists.

---

# 10. Dynamic Routes

Suppose product IDs change dynamically:

```text
/products/1
/products/2
/products/macbook-pro
```

Create:

```text
app/products/[id]/page.tsx
```

Example:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <h1>Product: {id}</h1>
}
```

Current Next.js generations use async request APIs in contexts where `params` and related values are promises.

## Scenario: blog slug

```text
/blog/learn-nextjs
/blog/react-server-components
```

Structure:

```text
app/blog/[slug]/page.tsx
```

---

# 11. Catch-All and Optional Catch-All Routes

## Catch-all

```text
app/docs/[...slug]/page.tsx
```

Matches:

```text
/docs/react
/docs/react/hooks
/docs/react/hooks/use-state
```

The value is an array-like route path.

## Optional catch-all

```text
app/docs/[[...slug]]/page.tsx
```

Can also match:

```text
/docs
```

Useful for:

- documentation
- category hierarchies
- CMS page trees

---

# 12. Route Groups and Private Folders

## Route groups

Use parentheses:

```text
app/
├── (marketing)/
│   ├── about/
│   └── pricing/
└── (dashboard)/
    └── account/
```

Parentheses organize routes without changing the URL.

Example:

```text
app/(marketing)/about/page.tsx
```

still maps to:

```text
/about
```

Use route groups for:

- separate layouts
- logical organization
- application areas

## Private folders

A common convention is:

```text
_components/
_lib/
```

These can colocate implementation details without representing routes.

Example:

```text
app/dashboard/
├── _components/
│   └── chart.tsx
└── page.tsx
```

---

# 13. Parallel Routes

Parallel routes allow multiple route areas to render in one layout.

Example:

```text
app/dashboard/
├── @analytics/
│   └── page.tsx
├── @team/
│   └── page.tsx
└── layout.tsx
```

Layout:

```tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      {children}
      <section>{analytics}</section>
      <section>{team}</section>
    </>
  )
}
```

Good scenarios:

- dashboards
- split panes
- multi-panel admin screens
- conditional slots

Do not use parallel routes merely because they look sophisticated. Ordinary composition is simpler when independent routing behavior is unnecessary.

---

# 14. Intercepting Routes

Intercepting routes let you show another route inside the current UI context.

Classic scenario:

A photo gallery has:

```text
/photos
/photos/123
```

Clicking photo `123` from the gallery may open it in a modal while preserving the gallery underneath.

But directly opening:

```text
/photos/123
```

should show the full page.

This pattern is useful for:

- image modals
- quick product previews
- login modals
- detail previews

Think:

```text
soft navigation → modal
hard/direct navigation → normal full page
```

---

# 15. Navigation

## `<Link>`

Prefer Next.js `Link` for internal navigation.

```tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </nav>
  )
}
```

Benefits include client-side navigation behavior and framework optimizations.

## Programmatic navigation

Client Component:

```tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Button() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

Other common methods:

```ts
router.push('/path')
router.replace('/path')
router.refresh()
router.back()
router.forward()
```

Use declarative `<Link>` when possible. Use the router when navigation depends on an event or application logic.

---

# 16. Server Components

In the App Router, components are Server Components by default unless they are inside a Client Component boundary or explicitly marked with `'use client'`.

Example:

```tsx
export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}
```

## Why Server Components matter

They can:

- access backend resources
- query a database
- use secrets safely on the server
- reduce browser JavaScript
- fetch data close to its source
- compose server-side UI

## Example: database query

```tsx
import { db } from '@/lib/db'

export default async function UsersPage() {
  const users = await db.user.findMany()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

The database library does not need to become browser code.

## Server Components cannot directly use browser-only interactivity

You cannot do this in a normal Server Component:

```tsx
const [count, setCount] = useState(0)
```

Nor should you directly use browser APIs such as:

```js
window
document
localStorage
navigator
```

---

# 17. Client Components

Use `'use client'` when a component requires client-side React capabilities.

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}
```

Use Client Components when you need:

- state
- effects
- event handlers
- browser APIs
- client-only libraries
- interactive hooks

## Important mental model

`'use client'` creates a client boundary.

It does **not** mean that every file in your project should start with it.

Bad habit:

```tsx
'use client'
```

everywhere.

Better:

Keep the majority of your tree server-renderable and move interactivity into small client islands.

---

# 18. Server vs Client Component Decision Guide

Ask:

### Does it need `useState`, `useEffect`, browser APIs or event handlers?

If yes:

```text
Client Component
```

Otherwise prefer:

```text
Server Component
```

## Example page

```text
ProductPage (Server)
├── ProductDetails (Server)
├── Reviews (Server)
└── AddToCartButton (Client)
```

Only the button needs browser interactivity.

This is better than converting the whole product page into a Client Component.

---

# 19. Composition Patterns

A Client Component can receive server-rendered elements as children.

Example:

```tsx
// ClientModal.tsx
'use client'

export function ClientModal({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
```

Server parent:

```tsx
import { ClientModal } from './ClientModal'
import { ProductDetails } from './ProductDetails'

export default function Page() {
  return (
    <ClientModal>
      <ProductDetails />
    </ClientModal>
  )
}
```

This helps keep server code on the server while still composing interactive UI.

## Provider pattern

Providers generally need a client boundary.

```tsx
'use client'

import { createContext } from 'react'

export function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SomeContext.Provider value={{}}>
      {children}
    </SomeContext.Provider>
  )
}
```

Place providers as deep as practical instead of wrapping unnecessary parts of the tree.

---

# 20. Fetching Data

A Server Component can directly fetch:

```tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/products')

  if (!res.ok) {
    throw new Error('Failed to load products')
  }

  const products = await res.json()

  return <pre>{JSON.stringify(products, null, 2)}</pre>
}
```

You can also query databases directly:

```tsx
const users = await db.user.findMany()
```

## Do not create internal HTTP calls without a reason

Instead of:

```tsx
await fetch('http://localhost:3000/api/users')
```

from your own Server Component, it is often better to call shared server-side data code directly:

```tsx
await getUsers()
```

Why?

```text
Server Component
   ↓
getUsers()
   ↓
database
```

is simpler than:

```text
Server Component
   ↓
HTTP request to own API
   ↓
Route Handler
   ↓
database
```

Route Handlers are useful when you genuinely need an HTTP interface.

---

# 21. Sequential vs Parallel Data Fetching

## Sequential

```tsx
const user = await getUser()
const orders = await getOrders(user.id)
```

This is correct when the second operation depends on the first.

## Accidental waterfall

```tsx
const products = await getProducts()
const categories = await getCategories()
const offers = await getOffers()
```

If they are independent, do them in parallel:

```tsx
const [products, categories, offers] = await Promise.all([
  getProducts(),
  getCategories(),
  getOffers(),
])
```

## Rule

Use sequential fetching for dependencies.

Use parallel fetching for independent work.

---

# 22. Streaming and Suspense

Without streaming, a slow piece of data can delay the whole route.

React Suspense allows independently resolving UI.

```tsx
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading revenue...</p>}>
        <Revenue />
      </Suspense>

      <Suspense fallback={<p>Loading orders...</p>}>
        <Orders />
      </Suspense>
    </>
  )
}
```

Mental model:

```text
Fast shell rendered
     ↓
response begins
     ↓
slow sections stream later
```

Useful for:

- dashboards
- feeds
- analytics
- pages with one slow external API

`loading.tsx` is a convenient route-level Suspense mechanism, while explicit `<Suspense>` gives more granular control.

---

# 23. Caching Mental Model

Caching is one of the most important Next.js topics.

Do not memorize isolated configuration flags. First understand the goal.

Without caching:

```text
request → expensive data work → render → response
request → expensive data work → render → response
request → expensive data work → render → response
```

With caching:

```text
request → expensive work → cache result → response
request → reuse cache → response
request → reuse cache → response
```

But not all information should be cached.

Examples:

| Data | Typical behavior |
|---|---|
| Marketing page | cache aggressively |
| Product catalog | cache + revalidate |
| User dashboard | often request/user-specific |
| Shopping cart | dynamic |
| Public blog post | cache |
| Stock balance | depends on freshness requirement |

The correct strategy depends on business freshness requirements.

---

# 24. Cache Components and `use cache`

Modern Next.js includes a Cache Components model that can be enabled through Next.js configuration.

Example configuration:

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

A cacheable function/component can use:

```tsx
'use cache'

export async function getProducts() {
  return db.product.findMany()
}
```

Conceptually:

```text
dynamic application shell
      +
explicitly cached work
```

This enables developers to be more intentional about cache boundaries.

## When should something be cached?

Good candidates:

- public content
- product metadata
- category trees
- CMS content
- expensive computations shared across users

Avoid treating private user-specific data as globally reusable cache data unless the cache key and privacy model are designed correctly.

---

# 25. Revalidation and Cache Invalidation

A cache is useful only if you know when it becomes stale.

Typical invalidation strategies:

## Time-based

Example concept:

```text
Cache for 5 minutes
```

Useful when slight staleness is acceptable.

## Event-based

Example:

```text
Admin updates product
        ↓
invalidate product cache
        ↓
next request sees new data
```

Modern Next.js supports cache invalidation concepts such as paths/tags and cache-aware APIs.

Example mutation concept:

```tsx
'use server'

import { revalidatePath } from 'next/cache'

export async function updateProduct() {
  await saveProduct()
  revalidatePath('/products')
}
```

Use path-based invalidation when a route should be refreshed.

Tag-based invalidation is more useful when the same data appears in many places.

Mental model:

```text
"product:123" changed
        ↓
invalidate anything tagged product:123
```

---

# 26. Dynamic APIs

Request-specific values make rendering request-aware.

Examples include:

- cookies
- request headers
- search parameters
- authentication context

A page showing the current signed-in user cannot be globally identical for everyone.

Example:

```tsx
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value

  return <p>Theme: {theme}</p>
}
```

Always understand whether data is:

```text
global/public
or
request-specific/private
```

That distinction heavily affects caching.

---

# 27. Static, Dynamic and Partial Rendering

Three useful concepts:

## Static rendering

Output can be prepared ahead of requests.

Good for:

- docs
- blog posts
- landing pages
- public reference content

## Dynamic rendering

Output depends on incoming request data.

Good for:

- authenticated dashboards
- personalized pages
- live request-specific data

## Partial rendering

A page can mix stable/cached content with request-specific or streaming parts.

Example:

```text
Product page
├── Product title        ← cacheable
├── Product description  ← cacheable
├── Recommendations      ← perhaps cached
└── Your cart count      ← user-specific
```

Modern Next.js is best understood as allowing **different data/rendering lifetimes inside the same route**, rather than forcing every page into a single simplistic category.

---

# 28. Server Functions and Server Actions

A Server Function marked with `'use server'` executes on the server.

Example:

```ts
'use server'

export async function createTodo(formData: FormData) {
  const title = String(formData.get('title'))

  await db.todo.create({
    data: { title },
  })
}
```

Use from a form:

```tsx
import { createTodo } from './actions'

export default function NewTodo() {
  return (
    <form action={createTodo}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  )
}
```

This is extremely useful for application mutations.

## Common uses

- create record
- update profile
- delete task
- add item to cart
- submit settings
- change status

## Security rule

A Server Action is not a magical trusted private function simply because it is written in your source code.

Treat mutations as security boundaries:

```text
validate input
authenticate user
authorize operation
perform mutation
revalidate
return safe result
```

---

# 29. Forms

HTML forms are a core web primitive. Next.js integrates naturally with them.

## Simple server action form

```tsx
<form action={createUser}>
  <input name="name" required />
  <input name="email" type="email" required />
  <button type="submit">Create user</button>
</form>
```

## Validation

Never trust browser validation alone.

Browser:

```html
<input required />
```

improves UX.

Server validation protects the system.

Example with Zod:

```ts
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})
```

Then:

```ts
const parsed = UserSchema.safeParse({
  name: formData.get('name'),
  email: formData.get('email'),
})

if (!parsed.success) {
  return {
    errors: parsed.error.flatten().fieldErrors,
  }
}
```

## Pending UI

A good form should communicate:

```text
idle
submitting
success
validation error
server error
```

Do not allow users to wonder whether their click worked.

---

# 30. Route Handlers and APIs

Route Handlers use:

```text
route.ts
```

inside the `app` directory.

Example:

```text
app/api/products/route.ts
```

GET:

```ts
export async function GET() {
  const products = await db.product.findMany()

  return Response.json(products)
}
```

POST:

```ts
export async function POST(request: Request) {
  const body = await request.json()

  const product = await db.product.create({
    data: body,
  })

  return Response.json(product, { status: 201 })
}
```

Supported HTTP-method patterns include:

```text
GET
POST
PUT
PATCH
DELETE
HEAD
OPTIONS
```

## When to use Route Handlers

Use them for:

- public/private HTTP APIs
- webhooks
- mobile clients
- third-party integrations
- browser fetch endpoints
- callback endpoints

## When not to use them

A Server Component querying your own database generally does not need to call your own Route Handler first.

---

# 31. Cookies

Read cookies on the server:

```tsx
import { cookies } from 'next/headers'

const cookieStore = await cookies()
const token = cookieStore.get('session')?.value
```

Cookies are useful for:

- sessions
- preferences
- locale
- consent
- feature flags

Security settings for authentication cookies usually include concepts such as:

```text
HttpOnly
Secure
SameSite
expiration
restricted path/domain
```

Do not store sensitive application secrets directly in readable browser cookies.

---

# 32. Headers

Request headers can provide:

- authorization information
- locale
- custom request context
- tracing identifiers
- user-agent metadata

Example:

```tsx
import { headers } from 'next/headers'

export default async function Page() {
  const headerStore = await headers()
  const userAgent = headerStore.get('user-agent')

  return <p>{userAgent}</p>
}
```

Be careful not to trust arbitrary client-controlled headers as proof of identity.

---

# 33. Redirects, Rewrites and Not Found

## Redirect

A redirect changes where the user/browser goes.

```ts
import { redirect } from 'next/navigation'

redirect('/login')
```

Example:

```text
/profile
   ↓ redirect
/login
```

## Rewrite

A rewrite serves content from another destination while the visible URL can remain unchanged.

Concept:

```text
visible URL: /support
served from: /help-center
```

Useful for:

- migrations
- proxying
- legacy URL compatibility
- application restructuring

## Not found

```tsx
import { notFound } from 'next/navigation'

if (!product) {
  notFound()
}
```

Provide:

```text
not-found.tsx
```

for custom UI.

---

# 34. Proxy

In modern Next.js 16, the old `middleware.ts` convention is named **Proxy** and typically uses:

```text
proxy.ts
```

Proxy runs before matched routes complete.

Concept:

```text
Request
   ↓
Proxy
   ↓
Route
   ↓
Response
```

Example:

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const hasSession = request.cookies.has('session')

  if (!hasSession) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
```

Useful for:

- coarse route redirects
- rewrites
- localization
- request header manipulation
- early access checks

## Important security principle

Do not rely on Proxy as your only authorization layer.

Always protect the actual data operation too.

Think:

```text
Proxy = early gate / routing layer
Data access = final security boundary
```

---

# 35. Authentication

Authentication answers:

> **Who is this user?**

Typical methods:

- session cookies
- OAuth/OIDC
- credentials
- enterprise SSO
- passkeys
- magic links

For production applications, using a well-maintained authentication solution is usually preferable to inventing your own protocol implementation.

Conceptual flow:

```text
User logs in
    ↓
credentials/provider verified
    ↓
session established
    ↓
browser receives secure session cookie
    ↓
server verifies session on protected operations
```

## Authentication helper

Example conceptual function:

```ts
export async function requireUser() {
  const session = await getSession()

  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  return session.user
}
```

Use in protected data access:

```ts
export async function getOrders() {
  const user = await requireUser()

  return db.order.findMany({
    where: { userId: user.id },
  })
}
```

This is stronger than protecting only the UI.

---

# 36. Authorization

Authorization answers:

> **What is this user allowed to do?**

Authentication:

```text
Shoeb is logged in.
```

Authorization:

```text
Shoeb can edit invoice 123.
```

They are different.

## Role-based authorization

```ts
if (user.role !== 'ADMIN') {
  throw new Error('Forbidden')
}
```

## Ownership authorization

```ts
const order = await db.order.findUnique({
  where: { id: orderId },
})

if (!order || order.userId !== user.id) {
  throw new Error('Forbidden')
}
```

## Better policy

Do not scatter security rules randomly through components.

Centralize them where practical:

```text
auth/
permissions/
policies/
data-access/
```

Example:

```ts
export function canEditProject(user, project) {
  return (
    user.role === 'ADMIN' ||
    project.ownerId === user.id
  )
}
```

---

# 37. Security

Security is a system property, not one package.

## Validate all untrusted input

Sources include:

- forms
- JSON bodies
- URL params
- query strings
- cookies
- headers
- webhook payloads

## Protect secrets

Never expose private secrets through variables intentionally bundled for the browser.

Public variables are conventionally exposed with a public prefix such as:

```text
NEXT_PUBLIC_
```

Anything browser-accessible must be treated as public.

## Avoid injection

Use parameterized ORM/database operations.

Bad conceptual SQL:

```ts
`SELECT * FROM users WHERE email = '${email}'`
```

Prefer parameterized queries/ORM APIs.

## Server Action safety

For every mutation:

```text
1. authenticate
2. authorize
3. validate
4. mutate
5. sanitize returned data
```

## Route Handler safety

Treat Route Handlers like internet-facing API endpoints.

Add:

- auth
- authorization
- validation
- rate limits where appropriate
- safe error responses
- logging
- anti-abuse controls

## XSS

Do not insert untrusted HTML.

Be especially careful with:

```tsx
dangerouslySetInnerHTML
```

Sanitize trusted-content workflows carefully.

## CSRF

Understand how your auth/session approach handles cross-site requests. SameSite cookies and framework/action protections help, but security decisions should be explicit.

## Security headers

Production deployments often consider:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- framing restrictions

---

# 38. Environment Variables

Example:

```env
DATABASE_URL="..."
AUTH_SECRET="..."
NEXT_PUBLIC_API_BASE_URL="..."
```

Access server-side:

```ts
process.env.DATABASE_URL
```

## Public vs private

```text
DATABASE_URL
```

should remain server-only.

```text
NEXT_PUBLIC_ANALYTICS_ID
```

is intentionally browser-exposed.

Do not put credentials in a public variable.

## Validate configuration on startup

Instead of discovering missing variables after deployment, validate them.

Example idea:

```ts
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required')
}
```

Large applications often use a schema validator.

---

# 39. Metadata and SEO

Metadata affects:

- page title
- search snippets
- sharing
- indexing
- canonical URLs

Static example:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our products',
}
```

Dynamic example:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.summary,
  }
}
```

SEO is not only metadata.

Also consider:

```text
semantic HTML
accessible content
fast loading
correct canonical URLs
structured internal linking
sitemap
robots rules
structured data where useful
```

---

# 40. Open Graph, Twitter Cards and Social Images

Social previews need metadata such as:

```text
title
description
image
URL
```

You can define Open Graph metadata and dynamic social images.

Scenario:

A blog post:

```text
/blog/nextjs-caching
```

can have an image generated using its:

```text
title
author
category
brand
```

This creates more useful link previews when shared.

Avoid giant social images that become unnecessarily expensive to generate on every request. Cache or precompute where appropriate.

---

# 41. Images

Use Next.js image tooling for application images where it fits.

```tsx
import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="User profile"
      width={200}
      height={200}
    />
  )
}
```

Important image concepts:

- intrinsic dimensions
- responsive sizes
- loading priority
- remote image allowlists
- layout stability
- correct alt text

## Scenario: hero image

If the image is a major above-the-fold visual, optimize loading intentionally.

## Scenario: product grid

Do not send oversized 4000px images when each card displays at 300px.

Performance is not just framework configuration; your source assets matter.

---

# 42. Fonts

Next.js font utilities can help optimize font loading.

Concept:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

Benefits can include:

- self-hosting behavior
- reduced layout shifts
- convenient CSS variable integration

Use only the font weights/styles you actually need.

---

# 43. Scripts

Third-party scripts may include:

- analytics
- chat widgets
- tag managers
- payment providers

Loading strategy matters because third-party JavaScript can hurt page performance.

Before adding a script, ask:

```text
Does it need to load immediately?
Can it wait until interaction?
Can it load after the page becomes interactive?
Is it needed on every route?
```

Never place every vendor script in the root layout by default.

---

# 44. CSS and Styling

Common options:

- global CSS
- CSS Modules
- Tailwind CSS
- component libraries
- CSS-in-JS solutions compatible with your architecture

## Global CSS

Good for:

```text
reset
design tokens
body defaults
typography base
```

## CSS Modules

```tsx
import styles from './button.module.css'

export function Button() {
  return <button className={styles.primary}>Save</button>
}
```

They naturally scope class names.

## Design principle

Styling technology matters less than consistency.

Create:

```text
spacing scale
typography scale
color tokens
component states
breakpoints
```

instead of arbitrary values everywhere.

---

# 45. Tailwind CSS

Tailwind is common in Next.js projects.

Example:

```tsx
export function Card() {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Card title</h2>
      <p className="mt-2 text-sm">Description</p>
    </div>
  )
}
```

Good Tailwind practice:

- extract meaningful reusable components
- avoid huge unreadable class chains
- use design tokens
- keep responsive behavior consistent
- do not recreate arbitrary CSS for every component

A component is not "reusable" merely because it has 60 Tailwind classes. Reusability comes from a stable interface and clear responsibility.

---

# 46. TypeScript

Type your component props:

```tsx
type UserCardProps = {
  name: string
  email: string
  active?: boolean
}

export function UserCard({
  name,
  email,
  active = true,
}: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{active ? 'Active' : 'Inactive'}</p>
    </article>
  )
}
```

## Avoid excessive `any`

Bad:

```ts
function saveUser(data: any) {}
```

Better:

```ts
type CreateUserInput = {
  name: string
  email: string
}

function saveUser(data: CreateUserInput) {}
```

## Runtime validation is still required

TypeScript checks your source code during development/build.

It does **not** guarantee that an HTTP request contains valid data at runtime.

Therefore:

```text
TypeScript type
+
runtime schema validation
```

is a powerful combination.

---

# 47. State Management

Do not install a global state library before determining what type of state you have.

Different state categories:

## Server state

Examples:

- products
- orders
- user records
- reports

Often should be fetched on the server or managed by a server-data library where client fetching is appropriate.

## URL state

Examples:

```text
?page=2
?search=laptop
?sort=price
```

Use the URL when state should be:

- shareable
- bookmarkable
- preserved after refresh
- visible to navigation

## Local UI state

Examples:

- modal open
- accordion expanded
- selected tab
- temporary input

Use `useState`.

## Global client state

Examples:

- complicated editor state
- interactive application session state
- multi-step unsaved workflow

Possible tools include context or dedicated state libraries.

The best state is often the state you do **not** duplicate.

---

# 48. Context Providers

Context is useful for client-wide concerns:

- theme
- client-only preferences
- complex shared interactive state

Example:

```tsx
'use client'

import {
  createContext,
  useContext,
  useState,
} from 'react'

const ThemeContext = createContext<{
  theme: string
  toggle: () => void
} | null>(null)

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () =>
          setTheme(v => (v === 'light' ? 'dark' : 'light')),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
```

Avoid putting all server data into Context just because Context exists.

---

# 49. URL State and Search Parameters

Suppose a user searches:

```text
/products?query=phone&page=2
```

The URL should often be the source of truth.

Benefits:

- refresh-safe
- shareable
- browser back/forward works
- server can render from the query

Page concept:

```tsx
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string
    page?: string
  }>
}) {
  const params = await searchParams
  const query = params.query ?? ''
  const page = Number(params.page ?? '1')

  const products = await searchProducts({ query, page })

  return <ProductList products={products} />
}
```

Great for:

- search
- filters
- pagination
- sort
- tabs with navigational meaning

---

# 50. Data Mutation Architecture

A robust mutation flow:

```text
Client submits
     ↓
Server Action / Route Handler
     ↓
authenticate
     ↓
authorize
     ↓
validate
     ↓
database transaction
     ↓
invalidate cache
     ↓
return controlled result
     ↓
UI updates
```

Example:

```ts
'use server'

import { revalidatePath } from 'next/cache'

export async function renameProject(
  projectId: string,
  formData: FormData
) {
  const user = await requireUser()

  const name = String(formData.get('name') ?? '').trim()

  if (name.length < 2) {
    return { error: 'Name is too short' }
  }

  const project = await db.project.findUnique({
    where: { id: projectId },
  })

  if (!project || project.ownerId !== user.id) {
    return { error: 'Forbidden' }
  }

  await db.project.update({
    where: { id: projectId },
    data: { name },
  })

  revalidatePath(`/projects/${projectId}`)

  return { success: true }
}
```

This pattern is much more important than memorizing one form hook.

---

# 51. Database Integration

A Next.js server environment can connect to databases through:

- ORM
- query builder
- database SDK
- direct database driver

Popular relational patterns use PostgreSQL/MySQL/SQL Server.

Document databases may use MongoDB-style SDKs.

## Keep database access server-only

Create:

```text
lib/db.ts
```

Example conceptual module:

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}
```

The exact connection pattern depends on your runtime and database provider.

## Serverless connection concerns

Understand:

- connection pooling
- provider limits
- cold starts
- edge compatibility
- transactions

Deployment architecture affects database architecture.

---

# 52. ORM Patterns

An ORM maps database concepts into code.

Example model idea:

```text
User
- id
- name
- email

Order
- id
- userId
- total
```

Typical operations:

```ts
db.user.findMany()
db.user.findUnique()
db.user.create()
db.user.update()
db.user.delete()
```

## Avoid leaking ORM models blindly

Your database model and public API response do not need to be identical.

Database:

```text
User
- id
- email
- passwordHash
- role
- internalNotes
```

Public DTO:

```text
UserProfile
- id
- displayName
```

Return only what the consumer needs.

---

# 53. Validation

Use runtime validation at external boundaries.

Example:

```ts
import { z } from 'zod'

const ProductSchema = z.object({
  name: z.string().min(2).max(100),
  price: z.coerce.number().positive(),
})
```

Form:

```ts
const result = ProductSchema.safeParse({
  name: formData.get('name'),
  price: formData.get('price'),
})
```

If invalid:

```ts
if (!result.success) {
  return {
    success: false,
    errors: result.error.flatten(),
  }
}
```

Validate:

- route params when necessary
- search params
- JSON
- forms
- external API data when reliability matters
- environment variables

---

# 54. Error Handling

Errors have several levels.

## Expected errors

Examples:

- invalid password
- duplicate email
- insufficient balance
- validation failure

Return a controlled result.

```ts
return {
  success: false,
  message: 'Email already exists',
}
```

## Unexpected errors

Examples:

- database unavailable
- coding bug
- external service failure

Throw/report them so monitoring can detect the problem.

## Do not leak internal errors

Bad API response:

```json
{
  "error": "SQLSTATE ... /server/private/path..."
}
```

Better:

```json
{
  "error": "Unable to process request"
}
```

Log private diagnostics server-side.

## Error boundaries

Use:

```text
error.tsx
```

to recover UI where appropriate.

Use:

```text
global-error.tsx
```

for top-level cases if your architecture needs it.

---

# 55. Logging and Observability

Production systems need visibility.

Record meaningful events such as:

```text
request ID
user ID where appropriate
operation
duration
status
external dependency
error type
```

Avoid logging:

- passwords
- access tokens
- full sensitive payloads
- payment secrets

Structured logging is better than random `console.log()` statements.

Example:

```ts
logger.info({
  event: 'order_created',
  orderId,
  userId,
})
```

Observability usually includes:

```text
logs
metrics
traces
error reporting
availability checks
```

---

# 56. Background/Post-Response Work

Modern Next.js provides an `after` API for work that should happen after a response or prerender finishes.

Concept:

```ts
import { after } from 'next/server'

after(async () => {
  await writeAnalyticsEvent()
})
```

Useful for non-blocking work such as:

- logging
- analytics
- side-effect reporting

Do not confuse "after the response" with a durable job queue.

For critical work such as:

- payment settlement
- guaranteed email delivery
- long-running exports
- retries
- scheduled jobs

use an appropriate durable queue/job infrastructure when needed.

---

# 57. Internationalization

Internationalization usually involves:

- locale detection
- locale route segment
- translated messages
- formatting dates
- formatting numbers
- formatting currencies

Route example:

```text
/en/products
/hi/products
/fr/products
```

Structure:

```text
app/[lang]/...
```

Keep translation messages separate from business logic.

Use locale-aware APIs:

```ts
new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
}).format(125000)
```

Output:

```text
₹1,25,000.00
```

Locale behavior can vary, so test formatting requirements explicitly.

---

# 58. Accessibility

Accessibility is not optional polish.

Use semantic HTML:

```html
<button>
<nav>
<main>
<header>
<label>
```

instead of clickable generic divs.

Bad:

```tsx
<div onClick={save}>Save</div>
```

Better:

```tsx
<button type="button" onClick={save}>
  Save
</button>
```

Check:

- keyboard navigation
- focus visibility
- form labels
- error announcements
- image alt text
- color contrast
- heading hierarchy
- dialog behavior
- reduced motion preferences where appropriate

A framework cannot repair inaccessible application design automatically.

---

# 59. Performance

Performance starts with architecture.

## Major principles

### Send less JavaScript

Prefer Server Components for non-interactive content.

### Fetch efficiently

Avoid accidental waterfalls.

### Stream slow areas

Use Suspense.

### Cache reusable data

Avoid repeating expensive work.

### Optimize assets

Images, fonts and third-party scripts matter.

### Avoid giant client bundles

Do not import server libraries or enormous component libraries into client boundaries unnecessarily.

### Lazy-load expensive interaction

Example conceptual dynamic import:

```tsx
import dynamic from 'next/dynamic'

const HeavyEditor = dynamic(() => import('./HeavyEditor'))
```

Use when the component does not need to be in the initial bundle.

---

# 60. Core Web Vitals

Important user-centric metrics include concepts around:

- loading performance
- interaction responsiveness
- visual stability

Common causes of poor experience:

```text
huge hero image
slow server response
large client JavaScript
layout shifting ads/images
blocking third-party scripts
expensive hydration
long event handlers
```

Performance debugging should identify the bottleneck rather than applying random optimizations.

---

# 61. Testing

Use several testing layers.

## Unit tests

Test isolated logic:

```ts
expect(calculateTax(1000)).toBe(180)
```

Great for:

- calculations
- validators
- permissions
- formatting
- reducers

## Component tests

Test UI behavior.

Example concepts:

```text
button renders
validation error appears
modal opens
callback fires
```

## Integration tests

Test boundaries such as:

```text
action + database
route handler + validation
auth + permission
```

## End-to-end tests

Tools such as Playwright can test real workflows:

```text
login
create project
edit project
logout
```

Do not test implementation details when user behavior is the actual requirement.

---

# 62. Debugging

Debug systematically.

## Browser-side problems

Inspect:

```text
DevTools console
Network tab
React state
browser storage
client bundle behavior
```

## Server-side problems

Inspect:

```text
terminal logs
server stack trace
database logs
environment variables
request details
deployment logs
```

## Common hydration mismatch causes

Examples:

- time-dependent client/server values
- random values during render
- browser-only conditional markup
- invalid HTML nesting
- third-party DOM manipulation

Bad:

```tsx
<p>{Math.random()}</p>
```

when server/client output must match.

## Reproduce production mode

Sometimes:

```bash
npm run build
npm run start
```

reveals issues hidden by the development environment.

---

# 63. ESLint and Code Quality

Linting catches classes of mistakes early.

Also consider:

- formatter
- TypeScript strictness
- pre-commit checks
- CI validation
- consistent naming

A useful CI baseline:

```text
install
type-check
lint
test
build
```

Never make production deployment the first time the application runs a full build.

---

# 64. Deployment

A Next.js application can be deployed through different environments depending on the features you use.

Possible approaches include:

- managed Next.js platform
- Node.js server
- container
- serverless architecture
- platform adapter

Before deployment, know:

```text
runtime requirements
database connectivity
environment variables
persistent storage behavior
image optimization behavior
cache topology
background job strategy
websocket requirements
```

## Production workflow

```bash
npm ci
npm run build
npm run start
```

Exact commands depend on package manager and deployment model.

---

# 65. Self-Hosting

When self-hosting, you own more infrastructure concerns.

You may need:

```text
reverse proxy
TLS
process/container management
load balancing
cache coordination
health checks
logging
scaling
deployment rollback
```

A common architecture:

```text
Internet
   ↓
Load Balancer / Reverse Proxy
   ↓
Next.js instances
   ↓
Database / Cache / Object Storage
```

When multiple application instances exist, make sure cache/session architecture behaves correctly across instances.

---

# 66. Docker

A typical production Docker design uses multiple stages.

Example:

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
```

This is a learning example, not a universally optimized production image.

Production improvements may include:

- standalone output
- non-root user
- smaller runtime stage
- health checks
- immutable image
- secret injection at runtime
- signal handling
- dependency/security scanning

Do not bake secret `.env` files into public container images.

---

# 67. CI/CD

A basic pipeline:

```text
Push code
   ↓
Install dependencies
   ↓
Type check
   ↓
Lint
   ↓
Test
   ↓
Build
   ↓
Security checks
   ↓
Deploy staging
   ↓
Smoke test
   ↓
Deploy production
```

Example GitHub Actions concept:

```yaml
name: CI

on:
  pull_request:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

Real pipelines should pin and update dependencies according to your organization’s security policy.

---

# 68. Production Architecture

A medium-sized SaaS might look like:

```text
Browser
   │
   ▼
CDN / Edge Layer
   │
   ▼
Next.js Application
   ├── Server Components
   ├── Server Actions
   ├── Route Handlers
   └── Proxy
   │
   ├───────────────┐
   ▼               ▼
PostgreSQL       Redis
   │               │
   └───────┬───────┘
           ▼
     Object Storage
           │
           ▼
     Background Jobs
```

## Responsibilities

### Next.js

- rendering
- navigation
- web endpoints
- web mutations
- authentication integration

### PostgreSQL

- durable relational data

### Redis

Potential uses:

- shared cache
- queue support
- rate-limit state
- transient coordination

### Object storage

- uploads
- generated files
- images

### Worker

- emails
- reports
- image processing
- asynchronous jobs

Avoid turning Next.js into a place where every infrastructure responsibility lives.

---

# 69. Common Application Patterns

## CRUD

```text
Create
Read
Update
Delete
```

Example resources:

- users
- products
- invoices
- tasks

A clean feature architecture:

```text
features/products/
├── actions.ts
├── queries.ts
├── schemas.ts
├── permissions.ts
├── types.ts
└── components/
```

## Search + filters

Store navigational filters in URL params.

## Pagination

Prefer deterministic paging.

Possible models:

- offset/page-number pagination
- cursor pagination

Large changing datasets often benefit from cursor-based designs.

## Optimistic UI

Update visible UI immediately, then reconcile with server result.

Useful when:

- mutations are likely to succeed
- instant feedback matters

Be prepared to roll back or display errors.

---

# 70. E-Commerce Scenario

Suppose you build:

```text
/
 /products
 /products/[slug]
 /cart
 /checkout
 /account/orders
```

## Product listing

Could use:

- cached product metadata
- URL search params
- server-side filtering
- pagination

## Product details

Could contain:

```text
ProductPage (Server)
├── ProductImages
├── ProductInfo
├── Price
├── InventoryStatus
├── Reviews
└── AddToCartButton (Client)
```

## Cart

Cart is user/session-specific.

Do not globally cache one user's cart for everyone.

## Checkout

Critical checks must run on the server:

```text
recalculate price
validate stock
verify discounts
verify user
create payment intent
store order transaction
```

Never trust a price sent from the browser.

Bad:

```json
{
  "productId": "123",
  "price": 1
}
```

The server should load authoritative pricing itself.

---

# 71. Dashboard Scenario

Dashboard route:

```text
/dashboard
/dashboard/users
/dashboard/reports
/dashboard/settings
```

Layout:

```tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
```

Dashboard data often includes:

```text
current user
permissions
live metrics
filters
large tables
exports
```

Use:

- Server Components for initial server data
- Suspense for slow cards
- Client Components for interactive charts/filter controls
- URL params for shareable filters
- Server Actions for simple mutations
- Route Handlers for export/download APIs where suitable

---

# 72. Blog/CMS Scenario

Routes:

```text
/
/blog
/blog/[slug]
/categories/[slug]
```

Blog posts are excellent cache candidates.

Typical flow:

```text
CMS
 ↓
Next.js data fetch
 ↓
cache
 ↓
rendered article
```

When editor publishes:

```text
webhook
 ↓
Route Handler
 ↓
verify webhook signature
 ↓
invalidate relevant cache
 ↓
new content visible
```

SEO should include:

- metadata
- canonical URL
- sitemap
- structured headings
- social image
- article schema where relevant

---

# 73. SaaS Scenario

Example application:

```text
/login
/app
/app/projects
/app/projects/[id]
/app/billing
/app/settings
```

Core concerns:

```text
tenant isolation
authentication
authorization
billing
audit logging
usage limits
background jobs
email
invites
```

## Multi-tenant rule

Every tenant-bound query must respect tenant boundaries.

Bad:

```ts
db.project.findMany()
```

when a user should see only their company data.

Better:

```ts
db.project.findMany({
  where: {
    organizationId: user.organizationId,
  },
})
```

Authorization mistakes in SaaS products are far more serious than UI bugs.

---

# 74. File Upload Scenario

Do not assume large file uploads should pass through the same path as small form data.

A scalable flow:

```text
Browser
  ↓
request signed upload permission
  ↓
server authorizes
  ↓
browser uploads directly to object storage
  ↓
storage event / server callback
  ↓
database records metadata
```

Benefits:

- less application-server bandwidth
- better large-file scalability
- object-storage durability

Validate:

- user permission
- content type
- file size
- storage key
- malware scanning where needed
- ownership

Never trust the filename alone to decide file type.

---

# 75. Real-Time Features

Real-time use cases:

- chat
- live notifications
- collaborative editing
- dashboards
- order tracking

Possible technologies:

- WebSockets
- Server-Sent Events
- managed real-time providers
- database real-time services

Next.js can participate in these systems, but your hosting runtime matters.

Questions to ask:

```text
Does the platform support long-lived connections?
Will connections survive instance scaling?
Do I need pub/sub?
How do multiple server instances share events?
```

For simple "refresh every 30 seconds" dashboards, polling may be simpler than WebSockets.

Choose complexity based on actual requirements.

---

# 76. Legacy Pages Router

Older Next.js applications commonly use:

```text
pages/
```

Example:

```text
pages/index.tsx
pages/about.tsx
pages/products/[id].tsx
pages/api/users.ts
```

Common legacy data APIs include:

```text
getStaticProps
getStaticPaths
getServerSideProps
```

These are important for maintaining existing systems, but new learning should prioritize App Router architecture unless a project specifically requires Pages Router.

## Example

```tsx
export async function getServerSideProps() {
  const users = await getUsers()

  return {
    props: { users },
  }
}
```

App Router approaches replace this mental model with async Server Components, caching primitives and request-aware APIs.

---

# 77. Migrating Pages Router to App Router

Do not rewrite a large production application in one giant change unless there is a strong reason.

Safer migration:

```text
1. understand current behavior
2. add App Router incrementally
3. move simple routes
4. establish shared data layer
5. migrate layouts
6. move complex data flows
7. re-test auth/caching/SEO
8. retire old routes
```

Conceptual mapping:

| Pages Router | App Router idea |
|---|---|
| `_app.tsx` | root/nested layouts |
| `_document.tsx` | root layout/document structure |
| `getServerSideProps` | async request-time server work |
| `getStaticProps` | cache/static rendering patterns |
| `getStaticPaths` | `generateStaticParams` |
| API Routes | Route Handlers |
| `next/router` | `next/navigation` |

Do not mechanically translate APIs one-to-one without understanding the new rendering model.

---

# 78. Common Mistakes

## Mistake 1: Adding `'use client'` everywhere

Result:

- larger client bundle
- unnecessary hydration
- loss of server-only advantages

Use the smallest necessary client boundary.

## Mistake 2: Calling your own API from every Server Component

Instead, directly call shared data-access functions when an HTTP boundary is unnecessary.

## Mistake 3: Trusting form input

Always validate server-side.

## Mistake 4: Protecting only the page

A hidden button is not authorization.

Protect the mutation/data layer.

## Mistake 5: Ignoring caching semantics

Developers sometimes assume:

```text
fetch = always fresh
```

or:

```text
page = always cached
```

Neither assumption is a safe universal mental model.

Understand the version and cache configuration you use.

## Mistake 6: Duplicating server data in global client state

If the server/URL already owns the state, do not automatically copy it into a global store.

## Mistake 7: Fetch waterfalls

Parallelize independent data.

## Mistake 8: Sending secrets to client code

Anything exposed to browser JavaScript is public.

## Mistake 9: Using Proxy as complete authorization

Enforce authorization at protected operations too.

## Mistake 10: No production build until deployment

Run a production build in CI.

## Mistake 11: Ignoring loading/error states

Every network operation can fail or take time.

## Mistake 12: Giant root layout

Do not put every provider, script, query and component in the global root.

---

# 79. Best Practices

1. Prefer Server Components by default.
2. Add Client Components only for browser interactivity.
3. Keep data access close to the server.
4. Validate every external boundary.
5. Authenticate and authorize mutations.
6. Keep secrets server-only.
7. Use URL search params for navigational state.
8. Parallelize independent I/O.
9. Stream slow UI.
10. Cache public reusable work intentionally.
11. Invalidate cache after relevant mutations.
12. Keep Route Handlers thin.
13. Separate business logic from framework adapters.
14. Return minimal data to the client.
15. Use semantic HTML.
16. Test critical workflows.
17. Monitor production errors.
18. Keep dependencies current, especially security patches.
19. Prefer feature-oriented architecture as applications grow.
20. Optimize based on measurements, not guesses.

---

# 80. Folder Architecture Examples

## Small application

```text
app/
components/
lib/
public/
```

Enough for small projects.

## Medium application

```text
src/
├── app/
├── components/
│   ├── ui/
│   └── layout/
├── features/
│   ├── auth/
│   ├── products/
│   └── orders/
├── lib/
├── data/
├── actions/
├── types/
└── hooks/
```

## Feature-oriented design

```text
src/features/orders/
├── components/
│   ├── order-card.tsx
│   └── order-table.tsx
├── actions/
│   ├── create-order.ts
│   └── cancel-order.ts
├── data/
│   ├── get-order.ts
│   └── list-orders.ts
├── schemas/
│   └── order.ts
├── permissions/
│   └── order.ts
└── types.ts
```

The goal is for developers to answer:

> "Where does order-related code belong?"

without searching the entire repository.

---

# 81. Reusable Utility Patterns

## `cn` class utility

```ts
export function cn(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(' ')
}
```

## Safe number parsing

```ts
export function parsePositiveInt(
  value: string | undefined,
  fallback = 1
) {
  const parsed = Number(value)

  if (!Number.isInteger(parsed) || parsed < 1) {
    return fallback
  }

  return parsed
}
```

## Domain error

```ts
export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message)
    this.name = 'ForbiddenError'
  }
}
```

## Result type

```ts
type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string }
```

Useful for expected application outcomes.

## Data-access function

```ts
export async function getProjectForUser(
  projectId: string,
  userId: string
) {
  return db.project.findFirst({
    where: {
      id: projectId,
      members: {
        some: { userId },
      },
    },
  })
}
```

Encapsulating access rules reduces accidental insecure queries.

---

# 82. Interview Questions

## Beginner

### What is Next.js?

A React framework for building web applications with routing, multiple rendering strategies, server-side capabilities, optimizations and full-stack primitives.

### What is file-system routing?

The folder/file structure under route directories determines URL paths.

### What is a layout?

Shared UI that wraps nested routes and can persist across navigation.

### What is a Server Component?

A component rendered in the server environment that can access server resources and does not require its own browser JavaScript for interactivity.

### What is a Client Component?

A component inside a `'use client'` boundary used for client-side state, effects, event handlers and browser APIs.

## Intermediate

### When would you use a Route Handler instead of a Server Action?

Use a Route Handler when you need an HTTP endpoint—for external consumers, browser fetch APIs, webhooks or integrations. Server Actions are convenient for mutations initiated from your Next.js UI.

### Why should you avoid unnecessary `'use client'`?

It expands the client boundary and may increase JavaScript/hydration cost.

### What is streaming?

Sending ready parts of the UI before slower parts complete, usually using Suspense boundaries.

### What is revalidation?

Updating or invalidating cached data/output when it becomes stale or after a mutation.

### What is the difference between authentication and authorization?

Authentication identifies the user. Authorization determines what that user may access or change.

## Advanced

### How would you secure a Server Action?

Authenticate, authorize, validate input, avoid trusting client-provided sensitive values, perform a controlled mutation, and return only safe information.

### Why can a Next.js caching bug become a security bug?

If private user-specific data is accidentally reused across users, one user may see another user's data. Cache keys and cache boundaries must respect privacy.

### How would you prevent data-fetch waterfalls?

Start independent promises early and await them together, or move independent fetches into components that can render/stream concurrently.

### What should be considered when self-hosting multiple Next.js instances?

Shared cache behavior, session strategy, database connection pooling, load balancing, deployment consistency, object storage, logging and background work.

### Why might URL state be better than global state?

Search, pagination and filtering become shareable, refresh-safe and compatible with browser navigation.

---

# 83. Practice Exercises

## Level 1

Build:

```text
Home
About
Contact
Products
```

Learn:

- pages
- layouts
- Link
- CSS

## Level 2

Create:

```text
/products/[id]
```

Load mock product data.

Learn:

- dynamic params
- Server Components
- not found

## Level 3

Build searchable products:

```text
/products?query=phone&page=2
```

Learn:

- search params
- URL state
- pagination

## Level 4

Create a todo application.

Learn:

- Server Actions
- forms
- validation
- database
- revalidation

## Level 5

Add login.

Learn:

- authentication
- cookies
- protected operations
- authorization

## Level 6

Build dashboard cards with different loading times.

Learn:

- Suspense
- streaming
- loading UI
- parallel requests

## Level 7

Add an external webhook.

Learn:

- Route Handlers
- signatures
- error responses
- idempotency

## Level 8

Containerize and deploy.

Learn:

- production builds
- Docker
- environment variables
- logs
- health checks

---

# 84. Portfolio Projects

## Project 1: Developer Blog

Features:

- App Router
- dynamic articles
- metadata
- sitemap
- markdown/CMS
- dark mode
- search
- static/cached content

## Project 2: Task Manager

Features:

- auth
- CRUD
- Server Actions
- optimistic interactions
- validation
- PostgreSQL
- filters
- due dates

## Project 3: E-Commerce Store

Features:

- product listing
- categories
- product details
- search
- cart
- checkout
- order history
- admin products
- caching

## Project 4: Multi-Tenant SaaS

Features:

- organizations
- invitations
- role-based access
- billing
- audit log
- dashboard
- background jobs
- usage quotas

## Project 5: Enterprise Admin Portal

Features:

- SSO integration
- roles/permissions
- large data table
- exports
- filters in URL
- audit history
- API integration
- health/monitoring

Build at least one application where security and data rules matter. A visually attractive landing page alone does not demonstrate full-stack Next.js mastery.

---

# 85. 30-Day Learning Roadmap

## Days 1–3: Fundamentals

Study:

- Next.js purpose
- project creation
- App Router
- pages/layouts
- navigation

Build a five-page website.

## Days 4–6: Routing

Study:

- dynamic routes
- route groups
- catch-all
- not found
- loading/error files

Build a docs-style route hierarchy.

## Days 7–10: Server and Client Components

Study:

- server default
- `'use client'`
- composition
- props
- providers

Refactor a page to minimize client JavaScript.

## Days 11–14: Data

Study:

- async Server Components
- fetch
- direct database queries
- parallel fetching
- Suspense/streaming

Build a product catalog.

## Days 15–17: Caching

Study:

- cache lifetime
- explicit cache boundaries
- revalidation
- invalidation
- request-specific rendering

Build cached public content with an admin update.

## Days 18–20: Mutations

Study:

- Server Actions
- forms
- validation
- pending/error UI

Build CRUD.

## Days 21–22: APIs

Study:

- Route Handlers
- request/response
- webhooks
- validation

Expose one API and consume one external API.

## Days 23–24: Authentication

Study:

- session
- authorization
- protected data
- Proxy
- secure cookies

Protect a dashboard.

## Days 25–26: Performance and SEO

Study:

- metadata
- images
- fonts
- streaming
- bundle reduction
- Core Web Vitals

Audit your project.

## Days 27–28: Testing

Write:

- unit tests
- component tests
- end-to-end critical flow

## Days 29–30: Production

Build:

```text
production build
Docker image
CI pipeline
deployment
logging
health checks
```

Then document architectural decisions.

---

# 86. Production Checklist

## Architecture

- [ ] App Router boundaries make sense.
- [ ] Server and Client Components are intentionally separated.
- [ ] Business logic is not tightly coupled to UI where avoidable.
- [ ] Data-access code is server-only.
- [ ] Large features have clear ownership/folders.

## Security

- [ ] Authentication is implemented.
- [ ] Authorization is enforced at protected operations.
- [ ] Server Actions validate input.
- [ ] Route Handlers validate input.
- [ ] Secrets are not exposed to browser bundles.
- [ ] Sensitive data is not logged.
- [ ] Security headers are reviewed.
- [ ] Dependency security updates are part of maintenance.
- [ ] Webhook signatures are verified.
- [ ] File uploads have type/size/access rules.

## Data

- [ ] Database indexes support important queries.
- [ ] Transactions protect multi-step critical writes.
- [ ] Database connection behavior fits deployment runtime.
- [ ] Pagination exists for unbounded lists.
- [ ] Private data is not globally cached.

## Caching

- [ ] Cache strategy is documented.
- [ ] Freshness requirements are explicit.
- [ ] Mutations invalidate the relevant cache.
- [ ] Personalized data is treated carefully.
- [ ] Multi-instance cache behavior is understood.

## UX

- [ ] Loading states exist.
- [ ] Empty states exist.
- [ ] Expected errors are friendly.
- [ ] Forms show validation.
- [ ] Pending forms prevent accidental duplicate actions.
- [ ] Mobile behavior is tested.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Form controls have labels.
- [ ] Buttons are real buttons.
- [ ] Images have appropriate alt text.
- [ ] Heading structure is sensible.
- [ ] Focus states are visible.

## SEO

- [ ] Page titles are useful.
- [ ] Descriptions exist where meaningful.
- [ ] Canonical URLs are correct.
- [ ] Sitemap is configured.
- [ ] Robots behavior is correct.
- [ ] Social metadata is tested.

## Performance

- [ ] Large client bundles are investigated.
- [ ] Independent I/O is parallelized.
- [ ] Slow sections stream where useful.
- [ ] Images are appropriately sized.
- [ ] Third-party scripts are justified.
- [ ] Fonts are optimized.
- [ ] Performance is measured in production-like conditions.

## Reliability

- [ ] Errors are reported centrally.
- [ ] Logs include enough context.
- [ ] External API failures are handled.
- [ ] Critical background work uses durable infrastructure.
- [ ] Backups/recovery exist for production data.

## Testing

- [ ] Core business logic has unit tests.
- [ ] Critical mutations have integration coverage.
- [ ] Critical user flow has E2E coverage.
- [ ] Production build runs in CI.

## Deployment

- [ ] Environment variables are documented.
- [ ] Production secrets are stored securely.
- [ ] Health check exists if infrastructure requires it.
- [ ] Rollback process is known.
- [ ] Migrations are planned safely.
- [ ] Staging resembles production enough to catch real issues.

---

# 87. Quick Reference Cheat Sheet

## Create app

```bash
npx create-next-app@latest
```

## Page

```text
app/products/page.tsx
→ /products
```

## Dynamic page

```text
app/products/[id]/page.tsx
→ /products/123
```

## Catch all

```text
app/docs/[...slug]/page.tsx
```

## Root layout

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## Link

```tsx
import Link from 'next/link'

<Link href="/products">Products</Link>
```

## Client Component

```tsx
'use client'
```

Use for:

```text
state
effects
events
browser APIs
```

## Server Component

Default App Router component.

Good for:

```text
database
secrets
server fetch
server rendering
```

## Route Handler

```text
app/api/users/route.ts
```

```ts
export async function GET() {
  return Response.json({ ok: true })
}
```

## Server Action

```ts
'use server'

export async function save(formData: FormData) {
  // validate + authorize + mutate
}
```

## Redirect

```ts
import { redirect } from 'next/navigation'

redirect('/login')
```

## Not found

```ts
import { notFound } from 'next/navigation'

notFound()
```

## Cookies

```ts
import { cookies } from 'next/headers'

const store = await cookies()
```

## Headers

```ts
import { headers } from 'next/headers'

const store = await headers()
```

## Search params

```tsx
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
}
```

## Dynamic params

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
}
```

## Revalidate route

```ts
import { revalidatePath } from 'next/cache'

revalidatePath('/products')
```

## Proxy

```text
proxy.ts
```

Use for early routing/request behavior, not as your only data authorization layer.

## Metadata

```ts
export const metadata = {
  title: 'My Page',
  description: 'Description',
}
```

## Image

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

---

# 88. Glossary

## App Router

The modern Next.js router based around the `app` directory, nested layouts and React Server Components.

## Route Segment

A folder level that participates in a route.

## Server Component

A React component rendered in the server environment and able to directly access server resources.

## Client Component

A component inside a `'use client'` boundary that can use client-side React behavior and browser APIs.

## Hydration

The browser process that attaches React client behavior to server-produced HTML for interactive client portions.

## RSC

React Server Components.

## SSR

Server-Side Rendering. HTML is produced on a server in relation to a request/rendering process.

## SSG

Static Site Generation. Pages/content are prepared ahead of individual requests.

## ISR

Incremental Static Regeneration—a historical/common term for updating statically generated content after deployment according to revalidation rules.

## Streaming

Sending completed UI portions progressively rather than waiting for all rendering work to finish.

## Suspense

React mechanism for displaying fallback UI while child work is pending.

## Server Function

A function that is executed on the server and can be referenced from application code according to React/Next.js server function semantics.

## Server Action

A Server Function used as an action/mutation entry point, commonly from forms or interactive UI.

## Route Handler

An HTTP request handler defined using `route.ts` in the App Router.

## Proxy

The Next.js 16-era name/file convention replacing what older Next.js versions called Middleware.

## Revalidation

Refreshing/invalidation of cached content or data.

## Cache Invalidation

Making previously cached data no longer valid after a relevant change.

## Dynamic Route

A route whose segment value comes from the URL, such as `[id]`.

## Route Group

A folder wrapped in parentheses that helps organize routes without becoming part of the URL.

## Parallel Route

A named route slot that can render alongside other slots in a shared layout.

## Intercepting Route

A routing pattern that can render a route inside the context of another route, commonly for modals.

## ORM

Object-Relational Mapper, a tool used to communicate with relational databases through programmatic models/APIs.

## DTO

Data Transfer Object. A deliberately shaped object passed across an application/API boundary.

## CSR

Client-Side Rendering. Rendering work occurring in the browser.

## SEO

Search Engine Optimization.

## CDN

Content Delivery Network.

## CSP

Content Security Policy.

## CI/CD

Continuous Integration / Continuous Delivery or Deployment.

---

# 89. Official Learning References

Because Next.js changes frequently, always verify version-sensitive behavior in the current official documentation.

Official resources:

- Next.js Documentation: https://nextjs.org/docs
- Next.js App Router: https://nextjs.org/docs/app
- Next.js Blog / Releases: https://nextjs.org/blog
- React Documentation: https://react.dev

Important version-sensitive topics to re-check when upgrading:

```text
caching defaults and Cache Components
request APIs
Server Actions / Server Functions
Proxy behavior
runtime support
Turbopack
deployment adapters
configuration options
security releases
```

As of the August 2026 context used for this handbook, the modern documentation includes the Next.js 16.3.x architecture, Cache Components guidance, Route Handlers, Server Functions/Actions, and the `proxy.ts` naming used in place of the older middleware convention.

---

---

# PART II — IN-DEPTH NEXT.JS ENGINEERING

The first part taught the framework feature-by-feature. This part explains how those pieces fit together in production. Read it when you want to move from “I know the syntax” to “I understand the architecture.”

---

# 90. The Complete Next.js Request Lifecycle

A useful simplified flow is:

```text
Browser
   ↓
CDN / reverse proxy / hosting layer
   ↓
proxy.ts (when matched)
   ↓
Next.js router
   ├── Route Handler → HTTP response
   └── Page route
         ↓
      Server Components
         ↓
      data sources / cache / auth
         ↓
      RSC payload + HTML
         ↓
      Browser
         ↓
      Client Components hydrate and become interactive
```

Understanding this lifecycle helps you locate bugs.

## Scenario: HTML appears, but button clicks do nothing

Likely areas to inspect:

```text
Client Component boundary
JavaScript bundle loading
hydration errors
event handler code
browser console
```

The server-rendered HTML working does not prove hydration succeeded.

## Scenario: page works after clicking a link but fails after refresh

A soft client navigation and a hard HTTP request can expose different assumptions. Check:

```text
auth cookies
redirects
Proxy
rewrites
browser-only state
request-time data
```

## Debugging checklist

For a failing page ask:

```text
1. Did the request reach the expected hostname?
2. Did Proxy change or redirect it?
3. Which route matched?
4. Is the result being served from a cache?
5. Which Server Components executed?
6. Which database/API calls ran?
7. Did a Suspense boundary wait or stream?
8. Which Client Components were sent?
9. Did hydration succeed?
10. Did client navigation modify the URL/state afterward?
```

---

# 91. React Server Components in Depth

React Server Components are more than “components that run on the server.” They change where application work belongs.

Example:

```tsx
export default async function ProductPage() {
  const product = await db.product.findUnique({
    where: { id: 'p1' },
  })

  return <h1>{product?.name}</h1>
}
```

The browser does not need your:

```text
database driver
database password
ORM query
server-only transformation code
internal service credentials
```

The server executes those concerns and returns the representation needed for the UI.

## Traditional client SPA flow

```text
Browser loads JavaScript
      ↓
React mounts
      ↓
useEffect/fetch calls /api/product
      ↓
API queries database
      ↓
JSON returns
      ↓
React finally renders product
```

## Server Component flow

```text
Request
  ↓
Server Component queries data
  ↓
useful UI produced on server
  ↓
browser receives rendered result
```

Client fetching is still useful for:

- live data after page load
- polling
- real-time interactions
- highly interactive client applications
- browser-only APIs
- data that refreshes independently of navigation

The lesson is not “never fetch on the client.” The lesson is “initial server-available data does not automatically require client fetching.”

---

# 92. Server vs Client Boundary

A Server Component can pass serializable data to a Client Component.

```tsx
<ClientProductCard
  product={{
    id: product.id,
    name: product.name,
    price: product.price,
  }}
/>
```

Do not attempt to pass server resources like:

```text
database connections
open sockets
request objects
secret-manager clients
arbitrary class instances
server-only functions
```

## Good mental model

```text
Server
  ↓ performs privileged work
plain minimal data
  ↓ crosses boundary
Client
  ↓ interactive behavior
```

## Data minimization

Bad:

```tsx
<ClientProfile user={entireDatabaseRow} />
```

when the component only needs:

```text
name
avatar URL
```

Better:

```tsx
<ClientProfile
  user={{
    name: user.name,
    avatarUrl: user.avatarUrl,
  }}
/>
```

This improves:

- security
- payload size
- clarity
- refactor safety

---

# 93. `server-only` and Environment Boundaries

For important server modules, make the intent explicit:

```ts
import 'server-only'

export async function getSensitiveReport() {
  // database / secret-backed code
}
```

Good server-only candidates:

```text
database.ts
auth/session.ts
payments-server.ts
secret-manager.ts
admin-data.ts
```

The goal is to make accidental browser imports fail earlier.

Likewise, browser-only utilities should not be imported from server-only execution paths without a clear reason.

---

# 94. App Router Special Files — Full Mental Model

Group special files by purpose.

## Route/UI files

```text
page.tsx
layout.tsx
template.tsx
default.tsx
```

## Loading and error files

```text
loading.tsx
error.tsx
global-error.tsx
not-found.tsx
global-not-found.tsx
unauthorized.tsx
forbidden.tsx
```

Some newer conventions can be version-sensitive. Check the current 16.x API reference before depending on a recently introduced file in production.

## HTTP endpoints

```text
route.ts
```

## Metadata files

```text
favicon.ico
icon.tsx
apple-icon.tsx
opengraph-image.tsx
twitter-image.tsx
robots.ts
sitemap.ts
manifest.ts
```

## Request interception

```text
proxy.ts
```

## Instrumentation

```text
instrumentation.ts
instrumentation-client.ts
```

Once you classify these files, the App Router feels much less magical.

---

# 95. Layout vs Template

Both wrap descendants, but their lifecycle differs.

## Layout

Use for persistent shared UI:

```text
/dashboard/users
/dashboard/reports
/dashboard/settings
```

Shared shell:

```text
sidebar
topbar
organization switcher
```

## Template

Use when you intentionally want a new subtree instance during navigation.

Scenario:

- page-transition animation should restart
- effect should run again on segment change
- local state should reset as users switch child routes

Rule:

```text
layout   → persistent structure
template → structure that intentionally remounts
```

Do not use templates by default.

---

# 96. `default.tsx`

`default.tsx` is mainly relevant to Parallel Routes.

Suppose:

```text
app/dashboard/
├── @analytics/
├── @team/
└── layout.tsx
```

During some hard navigations, Next.js may need fallback content for a slot whose active state cannot be inferred. `default.tsx` provides that fallback.

If you do not use Parallel Routes, you probably do not need it.

---

# 97. `generateStaticParams`

For:

```text
app/products/[slug]/page.tsx
```

you may know important slugs before requests arrive.

```tsx
export async function generateStaticParams() {
  const products = await getPopularProducts()

  return products.map(product => ({
    slug: product.slug,
  }))
}
```

Useful for:

- documentation
- blogs
- known product pages
- category routes

It is a rendering/pre-generation decision, not an authorization feature.

---

# 98. Async Request APIs

Modern Next.js request values are asynchronous in many places.

Examples:

```text
params
searchParams
cookies()
headers()
draftMode()
```

Example:

```tsx
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ tab?: string }>
}) {
  const { id } = await params
  const { tab } = await searchParams

  return <p>{id} / {tab}</p>
}
```

Older tutorials may show synchronous examples. Always identify the Next.js version before copying code.

---

# 99. Navigation Hooks

Important Client Component hooks include:

```text
useRouter
usePathname
useSearchParams
useParams
useSelectedLayoutSegment
useSelectedLayoutSegments
```

## `usePathname`

```tsx
'use client'

import { usePathname } from 'next/navigation'

export function ActivePath() {
  const pathname = usePathname()

  return <span>{pathname}</span>
}
```

Good scenario:

- highlighting current sidebar item

Do not move a whole page into a Client Component merely to read one navigation value. Isolate the client feature.

---

# 100. URL State in Depth

Suppose an invoice screen is:

```text
/invoices?status=pending&company=2&page=4&sort=date-desc
```

That URL completely describes the current table state.

Advantages:

- bookmarkable
- shareable
- refresh-safe
- browser back/forward works
- server can render directly
- analytics can understand navigation

Good URL-state candidates:

```text
search
page
sort
filter
report date range
navigational tab
```

Poor URL-state candidates:

```text
password
hover state
animation progress
sensitive unsaved form content
```

---

# 101. Prefetching

Next.js can prepare likely navigation targets before the user clicks.

```tsx
<Link href="/dashboard">Dashboard</Link>
```

This improves perceived navigation speed.

But prefetching still consumes resources. On enormous lists of links, be conscious of:

```text
bandwidth
server work
cache work
browser memory
```

Optimization is not automatically “prefetch everything.”

---

# 102. Rendering Vocabulary

Do not use these terms interchangeably.

## Server rendering

Server participates in producing the UI.

## Static rendering / prerendering

Work can be prepared ahead of a unique request.

## Dynamic rendering

Work depends on an incoming request or uncached runtime behavior.

## Client rendering

Browser JavaScript creates/updates UI.

## Hydration

React attaches client behavior to server-produced markup for interactive sections.

## Streaming

Server sends completed UI progressively.

## React Server Components

A component model where some components execute only on the server.

One route can combine all of these.

---

# 103. Cache Components Mental Model

Older teaching often labels a whole route:

```text
static OR dynamic
```

Modern Next.js is more granular.

Product page:

```text
Product name           → stable/public
Description            → stable/public
Marketing images       → stable/public
Current stock          → frequently changing
Personal price         → user-specific
Cart count             → user-specific
```

The stronger question is:

> Which subtree/data can be reused, for how long, and for which audience?

That is the heart of Cache Components thinking.

---

# 104. `use cache` In Depth

Concept:

```ts
export async function getCategories() {
  'use cache'

  return db.category.findMany()
}
```

Good candidates:

```text
public category tree
country list
public article
shared configuration
```

Dangerous candidates:

```text
current user's bank balance
private invoices
private permission set
```

unless the cache scope/key is deliberately designed for that identity.

## Security rule

Before caching, classify data:

```text
public/shared
tenant-specific
user-specific
request-specific
secret
```

Incorrect caching can become a data leak, not merely a stale-data bug.

---

# 105. `cacheLife`

`cacheLife` controls how cacheable work ages under the Cache Components model.

Conceptual example:

```ts
import { cacheLife } from 'next/cache'

async function getArticle() {
  'use cache'
  cacheLife('hours')

  return loadArticle()
}
```

The exact available profiles/configuration are version-sensitive.

Choose lifetime from business freshness requirements.

Examples:

```text
FAQ                       → hours may be fine
Product title             → minutes may be fine
Flash-sale inventory      → much fresher
Current authorization     → generally not broad shared cache
```

Caching is a business decision expressed technically.

---

# 106. `cacheTag`

Tags describe the identity of cached data.

Example:

```text
Product 123 cache entry
Tags:
- product:123
- category:phones
```

That product may appear on:

```text
/products/123
/products
/categories/phones
/search
/home featured products
```

Tagging by data identity can be cleaner than remembering every path.

---

# 107. `updateTag` vs `revalidateTag`

Use the exact API signatures from the current docs, but understand the conceptual difference.

## `updateTag`

Useful in mutation flows where the user needs newly updated data immediately.

```text
user changes project title
    ↓
DB update
    ↓
expire project tag
    ↓
subsequent read gets fresh value
```

## `revalidateTag`

Useful when stale-while-revalidate style freshness is acceptable, such as CMS/catalog content depending on the profile used.

Use semantics based on business expectations, not API name memorization.

---

# 108. `revalidatePath`

Use path invalidation when a route is the natural scope.

```ts
'use server'

import { revalidatePath } from 'next/cache'

export async function createInvoice() {
  await saveInvoice()
  revalidatePath('/invoices')
}
```

Good when one route owns the data view.

Use tags when the same changed entity appears across many routes.

---

# 109. `use cache: remote`

Modern Next.js documents remote cache support for platforms that provide a remote cache handler.

Architecture:

```text
Instance A ─┐
Instance B ─┼→ shared remote cache
Instance C ─┘
```

Why it can matter:

- many replicas
- shared cache consistency
- process-local memory is insufficient

Tradeoffs:

```text
network latency
storage cost
serialization
operational dependency
```

Use it when deployment architecture needs it.

---

# 110. `connection()`

`connection()` lets code explicitly wait for a real incoming request before continuing rendering.

Concept:

```ts
import { connection } from 'next/server'

export default async function Page() {
  await connection()

  return <p>{new Date().toISOString()}</p>
}
```

This is a specialized rendering-control primitive.

Do not use it merely because you want “fresh data.” Determine why the route must be request-time first.

---

# 111. Legacy Caching APIs

Older applications may use:

```text
unstable_cache
unstable_noStore
fetch cache options
route-segment configuration
```

Some remain supported while others are legacy or no longer preferred.

Migration lesson:

Do not combine code snippets from Next.js 13, 14, 15 and 16 and assume their caching defaults are identical.

---

# 112. Data Fetching Patterns

## Pattern A — Server Component → database

```text
Page
 ↓
DAL/query
 ↓
database
```

Strong default for application-owned server data.

## Pattern B — Server Component → external API

```text
Page
 ↓
fetch
 ↓
service
```

Use when another system owns the data.

## Pattern C — browser → Route Handler

```text
Client Component
 ↓
fetch('/api/...')
 ↓
Route Handler
 ↓
service/database
```

Useful for interactive browser-side requests.

## Pattern D — form → Server Action

```text
form
 ↓
Server Action
 ↓
database
```

Excellent for application mutations.

## Pattern E — external provider → Route Handler

```text
provider webhook
 ↓
Route Handler
 ↓
verify + process
```

Use for public callbacks/integrations.

---

# 113. Request Waterfalls

Sequential independent work:

```ts
const a = await getA()
const b = await getB()
const c = await getC()
```

If each takes 500 ms, total can approach 1500 ms.

Parallel:

```ts
const [a, b, c] = await Promise.all([
  getA(),
  getB(),
  getC(),
])
```

Potentially closer to the slowest single request.

But dependency matters:

```ts
const user = await getUser()
const projects = await getProjects(user.id)
```

That sequence is legitimate.

Think in dependency graphs, not only line order.

---

# 114. Suspense Boundary Design

Poor:

```text
one Suspense around whole dashboard
```

Better:

```text
Dashboard shell              → immediate
Account summary              → fast
Revenue chart                → Suspense
Open invoices                → Suspense
Recommendations              → Suspense
```

Good boundaries follow meaningful UX sections.

Do not create 50 tiny loading placeholders that make the page visually chaotic.

---

# 115. Loading UX

Three separate loading scopes:

```text
route loading    → loading.tsx
section loading  → Suspense
mutation loading → pending form/button state
```

Prefer a placeholder that resembles the expected layout.

For a table, a row skeleton usually communicates more than a generic centered spinner.

---

# 116. Server Actions as Security Boundaries

Production action example:

```ts
'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const Schema = z.object({
  title: z.string().min(2).max(100),
})

export async function createProject(formData: FormData) {
  const user = await requireUser()

  const parsed = Schema.safeParse({
    title: formData.get('title'),
  })

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  if (!(await canCreateProject(user))) {
    return {
      ok: false,
      message: 'Forbidden',
    }
  }

  await db.project.create({
    data: {
      title: parsed.data.title,
      ownerId: user.id,
    },
  })

  revalidatePath('/projects')

  return { ok: true }
}
```

The important architecture is:

```text
authenticate
validate
authorize
mutate
invalidate
return safe result
```

---

# 117. Hidden Form Fields Are Not Trusted

This:

```html
<input type="hidden" name="role" value="ADMIN" />
```

is still controlled by the browser user.

Hidden means invisible in normal UI, not secure.

Use the server to derive authoritative values such as:

```text
role
price
user ID
organization ID
approval level
```

---

# 118. Optimistic Updates

Example:

```text
User clicks Like
   ↓
UI immediately shows 11
   ↓
server request
   ├── succeeds → keep 11
   └── fails    → revert + show error
```

Good for low-risk, likely-to-succeed actions.

Use caution for:

```text
payments
inventory commitments
financial balances
irreversible actions
```

Correctness may be more important than instant feedback.

---

# 119. Form State Model

Every serious form should handle:

```text
initial
editing
submitting
validation failure
success
unexpected failure
```

A destructive form may also require:

```text
confirmation
already deleted
permission changed
conflict with newer version
```

Good feedback:

```text
Save
Saving...
Saved
```

instead of leaving the user unsure whether anything happened.

---

# 120. Route Handlers as Real HTTP APIs

A Route Handler is an HTTP boundary, not merely “backend code in Next.js.”

Design:

```text
method
URL
auth
request schema
status code
response schema
cache headers
rate limit
errors
idempotency
```

Example endpoint:

```text
POST /api/orders
```

Possible responses:

```text
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
409 Conflict
429 Too Many Requests
500 Internal Server Error
```

When other clients consume the endpoint, HTTP semantics matter.

---

# 121. Backend for Frontend (BFF)

Next.js can act as a web-oriented backend layer.

```text
Browser
   ↓
Next.js BFF
   ├── HR service
   ├── Finance service
   └── Notification service
   ↓
UI-shaped result
```

Useful for:

- combining services
- server-side credentials
- normalizing auth
- transforming backend contracts for a specific UI

Do not automatically put:

- long-running jobs
- all enterprise business logic
- every microservice responsibility

inside Next.js.

---

# 122. Webhooks

Webhook flow:

```text
Provider
  ↓ POST
/api/webhooks/provider
  ↓
verify cryptographic signature
  ↓
parse event
  ↓
check idempotency
  ↓
perform/queue work
  ↓
respond promptly
```

Never trust a body merely because it contains:

```json
{ "event": "payment.succeeded" }
```

Verify the provider's signature according to its official protocol.

---

# 123. Idempotency

Providers retry. Users double-click. Networks retry.

Without protection:

```text
request A → create order
request B → create second order
```

Possible defenses:

```text
idempotency key
unique database constraint
transaction
provider idempotency support
processed webhook event ID
```

Critical mutations should assume duplicate delivery is possible.

---

# 124. HTTP Caching vs Next.js Caching

These are not the same thing.

## HTTP/browser/CDN caching

Common mechanisms:

```text
Cache-Control
ETag
Last-Modified
```

## Next.js application caching

Framework-managed caching of data/rendering work.

## Other caches you may have

```text
Redis
database cache
reverse proxy cache
object storage CDN
in-memory application cache
```

Whenever someone says “the cache,” ask which one.

---

# 125. Cookies In Depth

A cookie has attributes:

```text
HttpOnly
Secure
SameSite
Path
Domain
Expires / Max-Age
```

Authentication cookies commonly aim for:

```text
HttpOnly → JavaScript cannot directly read
Secure   → sent over HTTPS
SameSite → controls cross-site sending behavior
```

Exact choices depend on auth architecture.

Do not store huge user objects in cookies. Cookies are sent with matching requests and increase overhead.

---

# 126. Session Models

## Database-backed session

Cookie contains session ID.

```text
browser cookie
   ↓
server lookup
   ↓
session/user
```

Pros:

- easy centralized revocation
- mutable server-side session state

Cons:

- session store lookup

## Stateless signed/encrypted token

More session information is carried in the token.

Pros:

- fewer server lookups in some designs

Cons:

- revocation/changes can be harder

Use a mature auth library/provider unless you have a strong reason to build session infrastructure yourself.

---

# 127. Authentication vs Authorization

Authentication:

> Who are you?

Authorization:

> Are you allowed to perform this action on this resource?

A strong flow:

```text
identity provider / credentials
      ↓
session
      ↓
requireUser()
      ↓
permission policy
      ↓
data access / mutation
```

Do not reduce security to:

```tsx
{cookie && <AdminButton />}
```

---

# 128. Authorization Models

## RBAC

```text
ADMIN
MANAGER
USER
```

Simple when roles map cleanly to permissions.

## Permission-based

```text
invoice.read
invoice.approve
invoice.post
```

More granular.

## Attribute-based

Decision uses attributes:

```text
company
amount
location
department
resource owner
workflow status
```

Example:

```text
Manager can approve only if:
- same company
- invoice status = PENDING_MANAGER
- amount <= manager limit
```

Enterprise applications often need more than a single role string.

---

# 129. Data Access Layer (DAL)

Instead of database queries scattered across pages/actions:

```ts
export async function listInvoicesForCurrentUser(filters) {
  const user = await requireUser()

  return db.invoice.findMany({
    where: buildAllowedInvoiceFilter(user, filters),
  })
}
```

Benefits:

- authorization is harder to forget
- query logic is reusable
- test target is clear
- sensitive field selection is centralized

For security-sensitive apps, a DAL is one of the highest-value architecture patterns.

---

# 130. DTOs and Minimal Data

Database row:

```text
Employee
- id
- name
- salary
- passwordHash
- resetToken
- department
- internalNotes
```

UI needs:

```text
id
name
department
```

Return only:

```ts
return {
  id: employee.id,
  name: employee.name,
  department: employee.department,
}
```

This is a DTO-style boundary.

Benefits:

- fewer accidental leaks
- smaller payloads
- explicit contract

---

# 131. XSS

Cross-Site Scripting happens when attacker-controlled script executes in your application's origin.

React safely escapes normal text:

```tsx
<p>{userComment}</p>
```

Be very careful with:

```tsx
dangerouslySetInnerHTML
```

If raw HTML is a real requirement:

- sanitize it
- constrain the source
- use a security-reviewed approach
- combine with CSP where appropriate

---

# 132. CSRF

Cross-Site Request Forgery tricks a user's browser into sending an authenticated request they did not intend.

Concept:

```text
user logged into app.example
      ↓
visits malicious.example
      ↓
malicious page triggers app.example mutation
      ↓
browser may include cookies depending on policy
```

Defenses can involve:

- SameSite cookies
- origin checks
- CSRF tokens where required
- framework protections
- safe HTTP-method design

Understand your session and mutation architecture rather than assuming all POSTs are safe.

---

# 133. Content Security Policy

CSP can restrict which scripts/resources are allowed.

Concept:

```text
Allow scripts only from:
- self
- trusted provider
- valid nonce/hash
```

A strong CSP can reduce XSS impact, but requires careful coordination with:

- analytics
- third-party scripts
- inline code
- styles
- nonces

Do not copy a random CSP without understanding every directive.

---

# 134. CORS

CORS is a browser cross-origin policy.

Example:

```text
frontend: https://app.example.com
API:      https://api.example.com
```

The API may need appropriate CORS headers.

Understand:

```text
origin
credentials
preflight OPTIONS
allowed methods
allowed headers
```

CORS is not authentication.

---

# 135. Rate Limiting

Useful for:

```text
login
OTP
password reset
public API
expensive search
AI endpoint
upload signing
```

Concept:

```text
key: user/IP/API key
window: 1 minute
limit: 20
```

Distributed deployment usually requires shared state. Do not assume process memory is enough across multiple replicas.

---

# 136. Environment Variables and Build Boundaries

Server-only:

```text
DATABASE_URL
AUTH_SECRET
PAYMENT_SECRET
```

Browser-public convention:

```text
NEXT_PUBLIC_ANALYTICS_ID
```

Anything sent to browser JavaScript must be treated as public.

Also distinguish:

```text
build-time environment
runtime environment
```

Public variables may be embedded into browser output and therefore may require a rebuild when changed.

---

# 137. `next.config.ts` In Depth

Common configuration categories:

```text
images
redirects
rewrites
headers
cacheComponents
reactCompiler
output
package/build behavior
version-sensitive experimental options
```

Example:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

Keep configuration understandable. Document every unusual option because it can change behavior across the whole application.

---

# 138. Turbopack

Turbopack is the Rust-based bundler integrated deeply into modern Next.js.

Conceptually:

```text
source files
   ↓
dependency graph
   ↓
server/client bundles
   ↓
development/build output
```

Next.js 16.3 includes further Turbopack memory and build improvements.

As an application developer, focus on recognizing bundling problems:

```text
unexpected client dependency
huge bundle
module resolution issue
slow development compile
unsupported package behavior
```

---

# 139. Bundle Analysis

Large client bundles may come from:

```text
chart library imported globally
entire icon set
rich-text editor on every page
large date library
server helper accidentally crossing client boundary
duplicate libraries
```

Investigation questions:

```text
Which chunk is large?
Why is package X included?
Can it stay server-side?
Can it be lazy-loaded?
Can a smaller dependency replace it?
```

Measure before optimizing.

---

# 140. React Compiler

React Compiler can optimize component rendering at build time.

Mental model:

```text
normal React code
    ↓
compiler analysis
    ↓
automatic safe memoization optimizations where possible
```

This can reduce some manual need for:

```text
useMemo
useCallback
React.memo
```

But it does not remove the need for good architecture.

You still need:

- sensible state ownership
- small client boundaries
- efficient I/O
- good bundle choices

---

# 141. Node.js vs Edge Runtime

## Node.js runtime

Generally offers broad compatibility with:

```text
Node APIs
database drivers
server libraries
```

## Edge-style runtime

Different runtime model with different package/API compatibility.

Before choosing a runtime, ask:

```text
Does my DB driver work?
Does auth library work?
Do I need Node built-ins?
What platform benefits do I gain?
```

Do not choose Edge simply because the word sounds faster.

---

# 142. Current Next.js 16.3 Environment Baseline

The current official App Router installation documentation for Next.js 16.3 lists:

```text
Minimum Node.js: 20.9
Supported development OS families:
- Windows (including WSL)
- macOS
- Linux
```

Pin your team runtime using one consistent mechanism such as:

```text
.nvmrc
Volta
asdf
container image
CI configuration
```

This avoids “works on my machine” Node-version differences.

---

# 143. `public/` and Static Assets

File:

```text
public/logo.svg
```

can be referenced as:

```tsx
<img src="/logo.svg" alt="Logo" />
```

Use `public/` for genuinely public static resources.

Never place:

```text
private reports
secret keys
internal config
```

in that directory.

---

# 144. Image Optimization In Depth

Image performance depends on:

```text
source dimensions
compression
format
responsive sizes
loading priority
layout stability
remote host
cache behavior
```

Scenario:

Displayed card size:

```text
300 × 300
```

Source file:

```text
5000 × 5000 PNG, 12 MB
```

No framework can make that source choice ideal.

Prepare sensible assets and use `sizes`/priority behavior intentionally.

Do not mark every image high priority.

---

# 145. Metadata Files

Example robots file:

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

Example sitemap:

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
    },
  ]
}
```

For very large sites, sitemap generation may need splitting and efficient querying.

---

# 146. SEO Beyond Metadata

Public-page SEO includes:

```text
crawlability
semantic HTML
canonical URL
internal links
metadata
social preview
robots
sitemap
performance
structured data
correct HTTP statuses
```

Scenario:

```text
/products?sort=price
/products?sort=name
/products?color=red
```

Should all combinations be indexed?

Maybe not.

SEO architecture must decide which URLs represent canonical content.

---

# 147. JSON-LD

Structured data can describe entities such as:

```text
Product
Article
Organization
Breadcrumb
```

Concept:

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
}
```

Rules:

- use valid schema
- ensure it matches visible content
- serialize safely
- never invent ratings or misleading properties

---

# 148. Styling Architecture

Scalable UI layers:

```text
design tokens
   ↓
primitive components
   ↓
feature components
   ↓
pages
```

Example primitives:

```text
Button
Input
Dialog
Table
```

Feature components:

```text
InvoiceFilterForm
InvoiceApprovalDialog
InvoiceTable
```

This is more maintainable than styling each screen independently.

---

# 149. Client State Decision Tree

Before adding a global state library ask:

```text
Is it server data?
  → server/data layer

Is it navigation/filter state?
  → URL

Is it local to one component?
  → useState

Is it derived?
  → calculate it

Is it shared across many interactive client components?
  → Context/state library may help
```

The best state is often the state you do not duplicate.

---

# 150. Avoid Unnecessary `useEffect`

Old SPA pattern:

```tsx
useEffect(() => {
  fetch('/api/products')
}, [])
```

may be unnecessary if the page can fetch products as a Server Component.

Effects are appropriate for synchronizing with client-side external systems such as:

```text
DOM events
WebSocket
browser storage
third-party widget
IntersectionObserver
```

Do not use `useEffect` merely because older React tutorials fetched all data there.

---

# 151. Database Transactions

Scenario: create order.

```text
1. reserve stock
2. create order
3. create order lines
4. consume coupon
```

If step 3 fails after step 1, the database can become inconsistent.

Transaction concept:

```text
BEGIN
reserve
create order
create lines
consume coupon
COMMIT
```

On failure:

```text
ROLLBACK
```

Next.js does not remove normal database consistency requirements.

---

# 152. Indexes Matter More Than React Tricks

Query:

```sql
SELECT *
FROM invoices
WHERE company_id = ?
  AND status = ?
ORDER BY created_at DESC
LIMIT 50;
```

With millions of rows, indexing matters.

Measure:

```text
query duration
rows scanned
query plan
index use
connection wait
```

If the database takes 4 seconds, memoizing a button will not fix the page.

---

# 153. N+1 Queries

You load 100 orders:

```text
1 query
```

Then load customer for each:

```text
100 more queries
```

Total:

```text
101 queries
```

Use joins/includes/batching when appropriate.

Server rendering can expose backend inefficiencies quickly, so profile data access.

---

# 154. Pagination

## Offset pagination

```text
?page=5
```

Easy to understand and jump between pages.

Possible drawbacks:

- large offsets can be expensive
- rows can shift as data changes

## Cursor pagination

```text
?after=abc123
```

Good for:

- large feeds
- rapidly changing data
- infinite scroll

Tradeoff:

- harder direct page jumping

Choose from data and UX requirements.

---

# 155. Search Architecture

Levels:

## Database filters

Good for small/admin datasets.

## Database full-text

Good when built-in search features are enough.

## Dedicated search engine/service

Good for:

```text
typo tolerance
relevance ranking
facets
large catalogs
advanced search
```

Next.js provides integration/UI, not the search engine itself.

---

# 156. File Upload Architecture

For large files:

```text
Browser
  ↓ request signed upload URL
Next.js
  ↓ authenticate + authorize
Storage
  ↑ browser uploads directly
```

Then:

```text
finalize/callback
  ↓
validate metadata
  ↓
create DB record
```

Benefits:

- lower Next.js bandwidth usage
- scalable large upload path
- object-storage durability

---

# 157. File Upload Security

Never validate only the extension.

An attacker can rename:

```text
malware.exe → invoice.pdf
```

Consider:

```text
size
MIME/content type
file signature where needed
random storage key
private access
malware scanning where required
allowed formats
```

Separate “uploaded” from “trusted.”

---

# 158. Private File Downloads

Do not rely only on a hard-to-guess storage URL.

Pattern:

```text
GET /api/documents/123/download
    ↓
authenticate
    ↓
authorize document access
    ↓
return short-lived signed storage URL
```

Application permission remains the security boundary.

---

# 159. Real-Time Architecture

One server:

```text
Browser ↔ WebSocket server
```

Multiple replicas:

```text
Browser A ↔ Instance 1
Browser B ↔ Instance 2
               ↓
        shared pub/sub?
```

You may need:

```text
managed realtime provider
Redis pub/sub
message broker
```

The hosting model determines the right solution.

---

# 160. Polling vs SSE vs WebSockets

## Polling

```text
GET every 30 seconds
```

Simple and often sufficient.

## Server-Sent Events

One-way server → browser stream.

Good for:

- progress/status streams
- live notifications

## WebSockets

Two-way long-lived connection.

Good for:

- chat
- collaboration
- multiplayer/high-frequency events

Use the simplest technology that meets the requirement.

---

# 161. Background Jobs

Do not keep a normal web request waiting for:

```text
50,000-row export
10,000 emails
video processing
500-page OCR
```

Architecture:

```text
Server Action / Route Handler
        ↓
create job
        ↓
queue
        ↓
worker
        ↓
job status + result storage
        ↓
UI polls/subscribes
```

This gives retries, progress and resilience.

---

# 162. `after()` vs Durable Queue

`after()` is useful for post-response work such as:

```text
small analytics write
non-critical logging
light side effect
```

A durable queue is better for:

```text
payment-related work
large exports
important email
retry-required integration
long-running processing
```

Question:

> If the process dies right after returning the response, must this work still happen?

If yes, use durable infrastructure.

---

# 163. Payment Architecture

Never trust browser values for:

```text
price
discount
tax
currency
payment status
```

Server flow:

```text
product IDs from client
      ↓
load authoritative prices
      ↓
validate stock/discount
      ↓
calculate total
      ↓
create provider payment intent/session
      ↓
provider confirmation/webhook
      ↓
mark order paid
```

Do not mark payment successful simply because the browser reached `/success`.

---

# 164. Concurrency and Race Conditions

Stock = 1.

Two users buy at the same time.

```text
A reads 1
B reads 1
A buys
B buys
```

Correctness belongs in the database/business layer using mechanisms such as:

```text
atomic update
transaction
row lock where appropriate
unique constraint
version field
```

A disabled button cannot solve server race conditions.

---

# 165. Error Taxonomy

Classify failures.

```text
Validation      → user input problem
Authentication  → not logged in/session expired
Authorization   → user is known but forbidden
Not Found       → resource missing
Conflict        → duplicate/version/state conflict
Rate Limit      → too many attempts
Dependency      → downstream service failed
Unexpected      → bug/infrastructure failure
```

Different categories deserve different UX and monitoring.

---

# 166. 401 vs 403 vs 404

Conceptually:

```text
401 → not authenticated
403 → authenticated but not allowed
404 → resource not found
```

Modern Next.js documents helper/convention support around unauthorized/forbidden/not-found behavior, but verify exact availability/stability for your installed minor version.

Do not turn every error into a generic 500 page.

---

# 167. Instrumentation and Observability

Instrumentation can initialize cross-cutting monitoring such as:

```text
OpenTelemetry
tracing
monitoring SDKs
startup hooks
```

A centralized instrumentation point is easier to manage than initializing the same SDK in many files.

---

# 168. Request IDs

A request can cross:

```text
Next.js
 ↓
internal API
 ↓
ERP
 ↓
database
```

A request/correlation ID helps connect logs.

Example log:

```json
{
  "requestId": "8f2...",
  "event": "invoice_post_failed",
  "invoiceId": "INV123"
}
```

Then one identifier can trace the full request path.

---

# 169. Structured Logging

Bad:

```ts
console.log('failed')
```

Better:

```ts
logger.error({
  event: 'invoice_post_failed',
  invoiceId,
  userId,
  requestId,
  errorCode,
})
```

Never log:

```text
passwords
tokens
full payment details
secret environment variables
sensitive documents
```

---

# 170. Metrics and Tracing

Useful technical metrics:

```text
request rate
error rate
p50/p95/p99 latency
DB query time
cache hit ratio
queue depth
```

Business metrics:

```text
orders completed
invoice posting failures
OCR failure rate
login failure rate
```

Tracing answers:

> Where did the request spend time?

Example:

```text
Total 2.4 s
├── Next.js render 100 ms
├── auth 40 ms
├── DB 1.8 s
└── external API 400 ms
```

Without this, you may optimize React when the database is actually slow.

---

# 171. Accessibility for Forms

A good field has:

```text
label
input
help text
error association
keyboard behavior
status feedback
```

Example:

```tsx
<label htmlFor="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  aria-describedby="email-error"
/>
<p id="email-error">{error}</p>
```

When validation fails, consider focus and screen-reader announcements.

---

# 172. Accessible Dialogs

A modal requires more than a fixed-position `<div>`.

It needs:

```text
focus management
Escape behavior
correct semantics
background interaction handling
focus restoration
```

Use a tested accessible dialog primitive/library unless you have a strong reason to implement one yourself.

---

# 173. Testing Strategy

Practical pyramid:

```text
many unit tests
     ↓
some integration tests
     ↓
fewer high-value E2E tests
```

## Unit

```text
permissions
calculations
validators
formatters
workflow transition logic
```

## Integration

```text
Server Action + DB
Route Handler + auth
DAL + permission
```

## E2E

```text
login → create → approve → logout
```

Test behavior, not implementation trivia.

---

# 174. Testing Server Actions

Do not place all business logic directly inside a 200-line action.

Extract:

```text
parseInput()
canApprove()
calculateTotal()
transitionWorkflow()
```

Unit-test those functions, then integration-test the action boundary.

This produces much more maintainable tests.

---

# 175. E2E Scenario

Requirement:

> User can create a project.

Test flow:

```text
1. open login
2. authenticate test user
3. navigate to projects
4. click New Project
5. enter title
6. save
7. verify project appears
```

Do not assert every CSS class unless styling itself is the behavior under test.

---

# 176. Development vs Production

Development can differ in:

```text
compilation
caching
React checks
hot reload
source maps
error pages
performance
```

Always validate:

```bash
npm run build
npm run start
```

A page working in `next dev` is not proof that the production build is valid.

---

# 177. Package Managers

Common choices:

```text
npm
pnpm
yarn
bun
```

Choose one per repository and commit its lockfile.

Avoid:

```text
Developer A uses npm
Developer B regenerates yarn.lock
CI uses pnpm
```

Consistency is more important than arguing that one package manager is universally best.

---

# 178. Dependency Selection

Before installing a package ask:

```text
Do we need it?
Is it maintained?
Does it support current React/Next.js?
Server, client or both?
Bundle cost?
Security history?
Does the platform already solve this?
```

Every dependency creates long-term maintenance work.

---

# 179. TypeScript Strictness

Strong compiler checks help with:

```text
undefined values
API contracts
refactors
editor tooling
```

Do not silence every problem with:

```ts
as any
```

A type assertion should communicate real knowledge, not disable safety.

---

# 180. Runtime Validation vs TypeScript

This does not validate runtime data:

```ts
const data: User = await response.json()
```

The server could return:

```json
{ "name": 123 }
```

Use runtime validation when trust matters.

Mental rule:

```text
TypeScript validates developer assumptions.
Runtime schemas validate real external data.
```

---

# 181. Date and Time Handling

Distinguish:

```text
instant in time
calendar date
local time
time zone
display format
```

Example:

```text
Meeting: 2026-08-13 10:00 Asia/Kolkata
Birthday: 1999-05-10 (date only)
```

Do not automatically convert every database field through the browser's timezone. Define business meaning first.

---

# 182. Internationalization Architecture

Separate:

```text
locale routing
translation messages
number formatting
date formatting
content localization
SEO alternate URLs
```

Example:

```text
/en/products/phone
/hi/products/phone
```

Use `Intl` for locale-aware formatting instead of handcrafted comma/date rules.

---

# 183. Feature Flags

Feature flag:

```text
new_checkout = enabled for 10% users
```

Use cases:

- gradual rollout
- internal preview
- A/B test
- emergency disable

Never use a feature flag as security authorization.

Also remove old flags once rollout is complete.

---

# 184. Draft Mode

CMS preview requirement:

```text
public user → published cached content
editor      → unpublished preview content
```

Conceptual flow:

```text
CMS preview link
   ↓
secure preview endpoint
   ↓
enable Draft Mode
   ↓
page fetches preview content
```

Protect preview enablement with a secret/token and correct authorization.

---

# 185. MDX

MDX combines Markdown with component usage.

Useful for:

```text
documentation
blogs
learning websites
interactive articles
```

Concept:

```mdx
# Caching

<Warning>
Never globally cache private user data.
</Warning>
```

Do not execute arbitrary untrusted user-submitted MDX.

---

# 186. Monorepos

Example:

```text
apps/
├── web/
├── admin/
└── docs/

packages/
├── ui/
├── types/
├── config/
└── domain/
```

Benefits:

- shared code
- coordinated refactoring
- consistent tooling

Costs:

- dependency graph complexity
- build/deploy coordination
- ownership challenges

Use a monorepo when multiple applications genuinely benefit from a shared lifecycle.

---

# 187. Shared Package Environment Safety

A shared package may contain:

```text
Button        → universal
Chart         → client
DB helper     → server-only
```

Do not create a barrel that mixes secret server modules and client modules carelessly.

Environment boundaries should remain obvious.

---

# 188. Multi-Tenant SaaS

Every tenant-owned query needs a tenant boundary.

Bad:

```ts
const invoice = await db.invoice.findUnique({
  where: { id },
})
```

then display without organization validation.

Better:

```ts
const invoice = await db.invoice.findFirst({
  where: {
    id,
    organizationId: currentOrganization.id,
  },
})
```

Never trust a client-provided organization ID without verifying membership.

---

# 189. Audit Logs

Enterprise audit records commonly capture:

```text
actor
operation
resource
previous/new state summary
timestamp
request ID
```

Example:

```json
{
  "actorUserId": "u1",
  "action": "INVOICE_APPROVED",
  "resourceId": "inv123",
  "requestId": "req456"
}
```

Audit logs are not the same as debug logs. They are often durable and access-controlled.

---

# 190. Optimistic Concurrency

Two admins load version 5 of an invoice.

Admin A saves → version 6.

Admin B then tries to save version 5.

Use a version check:

```text
UPDATE ...
WHERE id = 123
  AND version = 5
```

If no row updates, show a conflict and ask the user to refresh/reconcile.

This prevents silent overwriting of another user's changes.

---

# 191. E-Commerce Cache Design

Classify independently:

```text
hero content          → public/cacheable
categories            → public/cacheable
product description   → public/cacheable
base price            → business freshness policy
stock                 → highly freshness-sensitive
cart                  → private
personal discount     → private
payment status        → authoritative/dynamic
```

Do not label the entire application “static” or “dynamic.”

---

# 192. Dashboard Cache Design

Dashboard may contain:

```text
company logo           → cacheable
KPI definitions        → cacheable
current user permission→ security-sensitive
live attendance        → fresh
report result          → cache by filter if safe
notifications          → user-specific
```

Different pieces have different lifetimes.

---

# 193. Admin Table Architecture

Requirements:

```text
search
filters
sort
pagination
permissions
bulk actions
export
```

Strong structure:

```text
Page Server Component
├── parse URL params
├── authenticate
├── load permitted rows
└── render
    ├── FilterBar (small Client Component)
    ├── table markup
    └── action controls
```

URL example:

```text
/admin/users?status=active&role=manager&page=2
```

This keeps state shareable and server-authoritative.

---

# 194. Search Box Updating URL

Conceptual Client Component:

```tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export function SearchBox() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function update(value: string) {
    const params = new URLSearchParams(searchParams)

    if (value) params.set('query', value)
    else params.delete('query')

    params.set('page', '1')

    router.replace(`/products?${params.toString()}`)
  }

  return (
    <input
      onChange={e => update(e.target.value)}
      placeholder="Search"
    />
  )
}
```

For real applications, debounce frequent updates.

---

# 195. Debouncing

Without debounce:

```text
s   → request
sh  → request
sho → request
shoe→ request
```

With a delay after the final keystroke:

```text
user types quickly
      ↓
wait briefly
      ↓
one request
```

Good for:

- search
- suggestions
- expensive filtering

Do not debounce every interaction automatically.

---

# 196. Infinite Scroll

Infinite scroll requires thinking about:

```text
pagination
URL/history
return position
loading
accessibility
SEO
refresh behavior
```

Sometimes a simple “Load more” button is better.

For admin/business tables, numbered pagination is often easier to navigate and audit.

---

# 197. Large Tables

Avoid rendering 100,000 rows in the browser.

Use:

```text
server pagination
server filters
DB indexes
stable IDs
virtualization when needed
responsive design
```

Virtualization reduces browser rendering cost but does not remove network/database cost.

---

# 198. Charts

Chart libraries are commonly client-side and can be large.

Good pattern:

```text
Server Component queries/aggregates data
      ↓
small chart-ready dataset
      ↓
Client Chart Component
```

Do not send millions of raw rows to the browser just so it can calculate monthly totals.

---

# 199. Export Architecture

Small export:

```text
Route Handler
  ↓
query
  ↓
generate file
  ↓
response
```

Large export:

```text
request export
  ↓
queue job
  ↓
worker generates
  ↓
object storage
  ↓
user downloads when ready
```

Long report generation should not hold a normal HTTP request unnecessarily.

---

# 200. Production Architecture Example

```text
Internet
   ↓
CDN / Load Balancer
   ↓
Next.js replicas
   ├── Server Components
   ├── Server Actions
   ├── Route Handlers
   └── Proxy
   │
   ├──────────────┬──────────────┐
   ↓              ↓              ↓
PostgreSQL      Redis       Object Storage
   │              │              │
   └──────────────┴──────┬───────┘
                         ↓
                    Job Workers
                         ↓
               External Services/ERP
```

This is a common shape, not a requirement.

Next.js handles the web application layer. Specialized infrastructure handles persistence, queues, large files and external systems.


# 201. Self-Hosting and Multiple Instances

When you run several Next.js replicas:

```text
Load Balancer
├── Instance A
├── Instance B
└── Instance C
```

new concerns appear:

```text
session sharing
cache sharing/invalidation
background jobs
file persistence
logs
health checks
graceful shutdown
```

A design that works on one laptop can fail when requests land on different processes.

---

# 202. Session Sharing

Dangerous design:

```text
session stored only in Instance A memory
```

User logs in through A, then next request reaches B.

Possible solutions:

```text
shared session store
stateless signed session
sticky load balancing
```

Shared/stateless approaches are usually easier to scale than accidental process-local sessions.

---

# 203. Cache Consistency Across Replicas

Scenario:

```text
Instance A → cached old product
Instance B → cached new product
```

Users see different results depending on the load balancer.

Understand:

```text
which caches are local
which caches are remote/shared
how invalidation propagates
what deployment platform does automatically
```

This is why cache topology is an infrastructure topic, not merely a React topic.

---

# 204. Reverse Proxy Responsibilities

Self-hosted architecture often uses:

```text
Nginx / Apache / cloud load balancer
              ↓
          Next.js server
```

The proxy may handle:

```text
TLS
compression
request-size limits
timeouts
host routing
security headers
static caching
```

Avoid conflicting policies between:

```text
CDN
reverse proxy
Next.js config
Route Handler
```

Know which layer owns each header/cache rule.

---

# 205. Health Checks

Infrastructure may need:

```text
liveness  → is process alive?
readiness → can it safely receive traffic?
```

A health endpoint should be cheap.

Do not create a check that runs ten expensive DB queries every few seconds across every replica.

Decide whether dependency failures should make the instance unready based on architecture.

---

# 206. Graceful Shutdown

During deployment:

```text
stop new traffic
    ↓
finish in-flight requests
    ↓
close connections
    ↓
exit process
```

This matters for:

- active requests
- DB transactions
- streaming responses
- job handoffs

Your container/process platform should be configured to allow an appropriate shutdown period.

---

# 207. Docker Production Thinking

A production container should aim for:

```text
reproducible build
small runtime image
non-root execution
no baked secrets
health behavior
immutable filesystem assumptions where possible
```

Consider Next.js standalone output for efficient container packaging where appropriate.

Do not copy your full development machine into an image merely because it runs.

---

# 208. CI Pipeline

A strong baseline:

```text
checkout
   ↓
install from lockfile
   ↓
type-check
   ↓
lint
   ↓
unit/integration tests
   ↓
next build
   ↓
security/dependency checks
   ↓
deploy staging
   ↓
smoke test
   ↓
production rollout
```

Not every small project needs every gate immediately, but production should never be the first environment that runs a full build.

---

# 209. Build Caching in CI

CI may cache Next.js build artifacts to speed repeated builds.

Cache keys should reflect meaningful inputs such as:

```text
OS/runtime
Node version
lockfile
build configuration
```

Do not reuse stale cache indefinitely without understanding invalidation.

Follow current Next.js CI caching guidance for your CI provider.

---

# 210. Database Migrations

Avoid dangerous deployment patterns such as running a destructive migration independently from every replica startup.

Safer expand-and-contract example:

```text
1. add nullable new column
2. deploy code that can write new column
3. backfill old rows
4. switch reads
5. enforce constraints
6. remove old column later
```

This enables safer rollouts and rollbacks.

---

# 211. Rollback Planning

Before deployment ask:

```text
Can old application code run against the new DB schema?
Can cache format changes break old code?
How do we restore the previous image/build?
Are static assets version-safe?
```

Rollback is an architectural requirement, not just a deployment button.

---

# 212. Gradual Rollout

Risky feature flow:

```text
deploy disabled
    ↓
enable internal users
    ↓
5%
    ↓
monitor
    ↓
25%
    ↓
100%
```

This separates deployment from release.

Feature flags help, but remember: flags do not replace authorization.

---

# 213. Performance Budget

Define acceptable performance rather than saying “make it fast.”

Possible budgets:

```text
client JS size
LCP target
API p95 latency
DB p95 query time
maximum image size
error rate
```

Exact targets depend on your application and network audience.

Without a budget, performance tends to degrade gradually.

---

# 214. Performance Investigation

Do not randomly add caching or memoization.

Use:

```text
1. reproduce
2. measure
3. find bottleneck
4. change one major cause
5. measure again
```

Potential bottlenecks:

```text
network
server cold start
database
external API
server rendering
client JavaScript
images
fonts
third-party scripts
```

Fix the largest problem first.

---

# 215. Hydration Mismatches

Common causes:

```text
Date.now()
Math.random()
localStorage-dependent initial render
browser-only conditions
timezone differences
invalid HTML nesting
third-party DOM modifications
```

Example problem:

Server:

```text
10:00:01
```

Client initial render:

```text
10:00:02
```

Do not simply suppress hydration warnings. Understand why server and client output differ.

---

# 216. Browser Storage

`localStorage` and `sessionStorage` exist only in the browser.

```tsx
'use client'

import { useEffect, useState } from 'react'

export function Preference() {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    setValue(localStorage.getItem('preference'))
  }, [])

  return <span>{value}</span>
}
```

If the server needs a preference during rendering, a cookie may be a better source.

---

# 217. Cookie vs localStorage

## Cookie

Can be sent to the server automatically according to cookie rules.

Good for:

```text
server session
locale
server-needed preference
```

## localStorage

Browser-only.

Good for:

```text
non-sensitive client preference
local draft where appropriate
```

For authentication, follow your authentication library/provider's security architecture rather than choosing storage casually.

---

# 218. Third-Party UI Libraries

Before adopting a UI package check:

```text
React 19 support
Next.js App Router support
Client Component requirements
bundle size
accessibility
maintenance
license
```

Create a small client adapter when only a specific widget needs browser behavior.

Do not mark an entire route `'use client'` just because one dropdown library needs it.

---

# 219. Dynamic Imports

Great for heavy interactive features that are not needed immediately:

```text
rich-text editor
map
chart
3D viewer
PDF viewer
```

Example:

```tsx
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./Editor'))
```

Use bundle analysis to identify real opportunities.

Lazy-loading tiny components everywhere can create more complexity than benefit.

---

# 220. Third-Party Scripts

Each script may add:

```text
DNS lookup
download
parse
execution
main-thread work
privacy impact
```

Classify scripts:

```text
essential
analytics
marketing
support
experiments
```

Load only where and when necessary.

A site can have excellent Next.js code and still be slow because of third-party JavaScript.

---

# 221. Analytics Event Design

Bad event names:

```text
click1
click2
new_button_test_final
```

Better:

```text
checkout_started
checkout_completed
invoice_approved
search_performed
```

Define a stable event schema.

Never send sensitive data casually to analytics platforms.

---

# 222. Consent and Privacy

When optional tracking requires consent:

```text
render essential application
      ↓
obtain consent
      ↓
load optional analytics/marketing
```

Do not make privacy logic an afterthought inside one random Client Component.

It affects script loading, cookies and data sharing.

---

# 223. Static Export

Some Next.js applications can be deployed as static output.

Good for:

```text
marketing sites
documentation
fully static content
```

Not appropriate when you require runtime server features such as:

```text
request-time authenticated rendering
runtime Route Handlers
Server Actions
server-only dynamic data
```

Choose deployment model from requirements.

---

# 224. Next.js With a Separate Backend

Enterprise architecture can be:

```text
Next.js
   ↓
Spring Boot / .NET / Laravel / Node API
   ↓
database
```

Next.js can still provide:

- Server Components
- SSR
- web routing
- BFF transformation
- web authentication integration

You do not need to move an existing authoritative backend into Next.js just to use Next.js.

---

# 225. Next.js With Microservices

Example:

```text
Next.js BFF
├── Employee service
├── Invoice service
├── Travel service
└── Notification service
```

Benefits:

- browser sees one web-oriented layer
- internal service topology is hidden
- auth can be normalized
- UI-specific aggregation is easier

Do not duplicate core domain business rules from every microservice inside the BFF.

---

# 226. REST Integration

Server example:

```ts
const response = await fetch(
  `${process.env.API_URL}/products`,
  {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }
)

if (!response.ok) {
  throw new Error(`API failed: ${response.status}`)
}

const products = await response.json()
```

Keep private service credentials server-side.

Validate external data when reliability/security matters.

---

# 227. GraphQL Integration

Server path:

```text
Server Component
   ↓
GraphQL query
   ↓
API
```

Client path:

```text
Client Component
   ↓
GraphQL client
   ↓
API
```

Use a browser GraphQL client when its normalized cache/live behavior provides real value.

Simple initial reads often remain simpler on the server.

---

# 228. External API Timeouts

A downstream service can hang.

Without timeout control:

```text
user request
  ↓
external API waits too long
  ↓
resources remain occupied
```

Use Web/platform-supported abort/timeout patterns.

Retry only when the operation is safe to retry.

---

# 229. Retry Strategy

Good retry candidates:

```text
transient GET failure
503 from dependency
idempotent read
```

Dangerous automatic retries:

```text
charge payment
create order
send irreversible command
```

unless idempotency is guaranteed.

Distributed retry systems commonly use backoff and jitter.

---

# 230. Graceful Degradation

Product page depends on:

```text
critical product data
optional recommendations
```

If recommendations fail, the product page should often still work.

Architecture:

```text
Product details → critical
Recommendations → separate Suspense/error boundary
```

Classify dependencies:

```text
critical
important
optional
```

Then decide how much failure should propagate.

---

# 231. Error Boundary Granularity

Too broad:

```text
one root error boundary for everything
```

One chart failure can replace the whole dashboard.

Too narrow:

```text
error boundary around every tiny element
```

creates complexity.

Good boundaries wrap meaningful recoverable regions.

---

# 232. Domain-Oriented Folder Structure

As projects grow, organizing only by technical type becomes difficult.

Instead of:

```text
components/
hooks/
services/
utils/
```

with hundreds of unrelated files, use business features:

```text
features/
├── invoices/
├── employees/
├── travel/
└── procurement/
```

Each feature can own:

```text
components
actions
data
schemas
permissions
types
```

Shared generic primitives stay separate.

---

# 233. Avoid the `utils.ts` Dumping Ground

Bad:

```text
utils.ts → 2,000 unrelated lines
```

Better intent-specific modules:

```text
currency.ts
dates.ts
url.ts
invoice-permissions.ts
validation.ts
```

File names should help developers discover code.

---

# 234. Domain Logic vs Framework Logic

Pure domain function:

```ts
export function canApproveInvoice(
  user: User,
  invoice: Invoice
) {
  return (
    user.role === 'MANAGER' &&
    invoice.status === 'PENDING_MANAGER' &&
    invoice.amount <= user.approvalLimit
  )
}
```

No Next.js import required.

Then Server Action uses it:

```text
framework boundary
   ↓
domain policy
   ↓
DB transaction
```

Framework-independent business logic is easier to test.

---

# 235. Avoid Fat Components

Bad page handles:

```text
auth
query
permission
business calculations
API transformation
mutation
analytics
rendering
```

Better:

```tsx
export default async function Page() {
  const user = await requireUser()
  const data = await loadDashboard(user)

  return <Dashboard data={data} />
}
```

Split responsibilities without creating unnecessary abstractions.

---

# 236. Avoid Premature Abstraction

Do not create:

```text
GenericUniversalConfigurableEverythingTable
```

before you understand repeated requirements.

A small amount of duplication can be safer than a wrong abstraction that later controls 50 screens.

Extract patterns after real similarity appears.

---

# 237. Component API Design

Poor API:

```tsx
<Button blue rounded big left compact={false} />
```

Better:

```tsx
<Button variant="primary" size="lg">
  Save
</Button>
```

Component props should communicate design intent, not expose every internal styling detail.

---

# 238. Controlled vs Uncontrolled Inputs

Controlled:

```tsx
const [value, setValue] = useState('')

<input
  value={value}
  onChange={e => setValue(e.target.value)}
/>
```

Useful for live interactive behavior.

Native/uncontrolled form:

```tsx
<form action={save}>
  <input name="title" />
</form>
```

Often enough for simple Server Action forms.

Do not put every input in React state unless you need that state.

---

# 239. Form Libraries

A form library helps with complex cases:

```text
field arrays
client validation
dirty/touched tracking
conditional forms
multi-step editing
```

For a simple form with three fields, native HTML + server validation may be cleaner.

The simplest adequate solution is usually easiest to maintain.

---

# 240. Toasts vs Inline Errors

Toast is good for:

```text
saved
copied
background task queued
```

Inline error is better for:

```text
email invalid
amount required
invoice cannot be approved
```

Do not make critical information disappear after three seconds.

---

# 241. Navigation After Mutation

Typical choices:

```text
Create resource → redirect to detail
Update resource → stay + refresh/revalidate
Delete resource → redirect to list
```

Match navigation to the resource lifecycle.

---

# 242. Empty States

Different messages:

```text
No invoices exist yet.
```

vs:

```text
No invoices match your filters.
```

Different actions:

```text
Create Invoice
Clear Filters
```

An empty state is a normal UI state, not an error.

---

# 243. Skeleton vs Spinner

Spinner:

- compact action
- unknown result shape

Skeleton:

- known card/table/page structure
- layout preservation

Choose based on user understanding and layout stability.

---

# 244. Responsive Tables

A 12-column desktop table rarely fits a phone.

Options:

```text
horizontal scroll
priority columns
row details panel
card transformation
mobile-specific condensed view
```

Do not solve responsiveness by shrinking text until it is unreadable.

---

# 245. Server Rendering and Viewport

The server usually should not depend on exact browser width for basic responsive UI.

Use CSS:

```text
media queries
container queries
responsive grid/flex
```

rather than fragile server-side user-agent branching.

---

# 246. Design Tokens

Centralize visual choices:

```text
spacing
colors
font sizes
radius
shadow
breakpoints
```

Example:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --radius-md: 0.5rem;
}
```

Tailwind configuration can provide the same design-system idea.

---

# 247. Dark Mode

Possible preference source:

```text
system theme
cookie
localStorage
account setting
```

If server output needs the theme on first paint, server-readable preference such as a cookie can reduce flashing.

Be aware of hydration and system theme changes.

---

# 248. Server CPU Work

Heavy synchronous work reduces request throughput.

Examples:

```text
large PDF generation
video processing
huge spreadsheet
mass image manipulation
```

Move heavy tasks to a worker/service when appropriate.

A Server Component is not a replacement for a background processing architecture.

---

# 249. Large Request Bodies

Large uploads can hit:

```text
reverse proxy limits
platform limits
memory limits
timeouts
```

For large files, direct object-storage upload is often safer than increasing request-body limits indefinitely.

---

# 250. HTTP Methods

General intent:

```text
GET    → read
POST   → create/action
PUT    → replace
PATCH  → partial update
DELETE → delete
```

Avoid state-changing GET endpoints.

Browsers/crawlers/caches may prefetch or retry GETs.

Bad:

```text
GET /api/delete-user?id=1
```

---

# 251. Status Codes

Common meanings:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
429 Too Many Requests
500 Internal Server Error
503 Service Unavailable
```

Choose a consistent API convention and document it.

---

# 252. API Error Contract

Consistent example:

```json
{
  "error": {
    "code": "INVOICE_NOT_APPROVABLE",
    "message": "Invoice cannot be approved in its current state."
  }
}
```

Avoid every endpoint inventing a different shape.

Consistency reduces client-side error handling complexity.

---

# 253. API Documentation

When other teams/mobile clients consume Route Handlers, consider OpenAPI or equivalent contract documentation.

Document:

```text
URL
method
auth
request body
response
errors
examples
version/deprecation
```

Using Next.js does not remove API documentation responsibilities.

---

# 254. API Authentication Choices

Possible mechanisms:

```text
session cookie
Bearer token
API key
OAuth token
signed webhook
mTLS/infrastructure identity
```

Choose based on caller.

```text
browser user        → session often fits
server-to-server    → service identity/token
webhook             → signature
```

---

# 255. Least Privilege

Application database credentials should not automatically have unlimited administrative powers.

Cloud credentials should access only needed resources.

If the web application is compromised, least privilege reduces blast radius.

---

# 256. SSRF

Danger:

```ts
fetch(userProvidedUrl)
```

on the server.

An attacker may try:

```text
localhost
internal services
private network
cloud metadata endpoints
```

Use allowlists and safe URL validation for server-side proxy/fetch features.

---

# 257. Open Redirects

Danger:

```text
/login?next=https://evil.example
```

followed by an unvalidated:

```ts
redirect(next)
```

Validate destinations.

Common safe policy:

```text
allow only local relative application paths
```

or explicit trusted origins.

---

# 258. Mass Assignment

Client sends:

```json
{
  "name": "A",
  "role": "ADMIN"
}
```

Danger:

```ts
db.user.update({ data: body })
```

Whitelist writable fields:

```ts
data: {
  name: parsed.name,
}
```

Runtime schemas and explicit mapping prevent unintended field changes.

---

# 259. Database Constraints

Application validation alone can race.

Two requests both check:

```text
email does not exist
```

then both insert.

Database should enforce:

```text
UNIQUE(email)
```

Use:

```text
friendly application validation
+
authoritative DB constraints
```

---

# 260. Serverless Database Connections

Serverless-style platforms can create many concurrent runtime instances.

Naive connection creation can exhaust database limits.

Understand:

```text
connection pooling
provider proxy
driver recommendations
runtime lifecycle
concurrency
```

Follow your database provider's recommended Next.js/serverless setup.

---

# 261. Cache Stampede

Popular cache expires.

Then:

```text
10,000 requests arrive
all recompute
DB overloaded
```

Mitigation strategies can include:

```text
stale-while-revalidate
request coalescing/locking
staggered expiration
managed cache behavior
```

High-traffic caching requires distributed-systems thinking.

---

# 262. Cache Key Design

Function:

```ts
getPrice(productId, currency)
```

Cache key must distinguish currency.

Bad:

```text
product:123
```

Good concept:

```text
product:123:currency:INR
```

Missing input dimensions create wrong results.

For private data, missing identity scope can create security leaks.

---

# 263. Personalization and Cache Safety

If this UI is globally cached incorrectly:

```tsx
<h1>Welcome, {user.name}</h1>
```

one user could receive another user's personalized result.

When uncertain about private cache isolation, keep the work request/user scoped.

Performance never justifies leaking data.

---

# 264. Cache Strategy Table

For serious systems, document cache policy explicitly.

| Data | Audience | Freshness | Suggested Thinking |
|---|---|---|---|
| Marketing FAQ | Public | Hours okay | Long cache |
| Product description | Public | Minutes okay | Cache + invalidation |
| Inventory | Public/business | Seconds | Fresh/event-driven |
| User role | Private | Security-sensitive | Request/session aware |
| Cart | Private | Immediate | User-scoped/dynamic |
| Country list | Public | Days | Long cache |

The exact implementation depends on the current Cache Components model and business requirements.

---

# 265. Framework Security Updates

A production framework must be patched.

Good process:

```text
monitor advisories
keep supported patch version
review release notes
run tests
upgrade quickly for critical fixes
redeploy
```

“Next.js 16” is not one immutable security state. Patch versions matter.

---

# 266. Upgrade Strategy

Major version migration:

```text
read official upgrade guide
update Next/React
run official codemods where useful
fix async API changes
review caching changes
review Proxy/middleware changes
review lint/build commands
test auth
test production build
test performance
roll out gradually
```

Never upgrade a major framework by editing only `package.json` and hoping.

---

# 267. Codemods

Codemods can automate repetitive source transformations.

They are useful for:

```text
API renames
async request API migration
file convention updates
```

But review the generated code.

A codemod can update syntax; it cannot understand your business cache/security semantics.

---

# 268. Pages Router Maintenance

Important legacy concepts:

```text
pages/index.tsx
pages/[id].tsx
pages/api/*
getServerSideProps
getStaticProps
getStaticPaths
_app
_document
```

Existing stable applications may continue using these patterns.

Migrate because of a real maintenance/feature reason, not because old code is unfashionable.

---

# 269. Pages Router to App Router Mental Shift

Pages Router commonly separates:

```text
component
+
special page-level data function
```

App Router allows:

```text
nested Server Components
async data near component
streaming
fine-grained cache boundaries
```

Migration is an architecture change, not just moving files from `pages/` to `app/`.

---

# 270. Migration Cache Risk

Old route may be request-fresh.

New route may accidentally cache.

Or an old static route may become unintentionally dynamic and slower.

Migration testing must compare:

```text
freshness
cache invalidation
request personalization
performance
```

not only visual output.

---

# 271. Migration Authorization Risk

Old authorization may live in:

```text
getServerSideProps
```

When moving the UI, ensure security also moves to:

```text
DAL
Server Action
Route Handler
resource ownership policy
```

Test direct calls, not just whether the admin button is hidden.

---

# 272. Enterprise Workflow State Machines

Many business systems become hard to reason about when they use dozens of booleans:

```text
isApproved
isRejected
isPosted
isPending
isQuery
```

Impossible combinations appear.

Prefer explicit states when the domain fits:

```text
DRAFT
SUBMITTED
OCR_PROCESSED
QUERY
PENDING_MANAGER
PENDING_FINANCE
APPROVED
POSTING
POSTED
REJECTED
```

Then define allowed transitions.

---

# 273. State Transition Validation

Allowed:

```text
PENDING_MANAGER → PENDING_FINANCE
```

Forbidden:

```text
POSTED → PENDING_MANAGER
```

Server code owns transition validation.

Do not let a browser simply submit:

```json
{ "status": "POSTED" }
```

and update the row blindly.

---

# 274. Approval Workflow Scenario

Client sends:

```text
invoiceId
decision
comment
```

Server derives:

```text
current workflow step
current user
role/permission
company
approval limit
next status
```

This prevents DevTools manipulation of the workflow.

---

# 275. Audit Trail Scenario

For an approval record:

```text
invoice ID
from status
to status
actor
comment
timestamp
request ID
```

UI can display:

```text
10:01 Submitted by User A
10:30 Approved by Manager B
11:05 Approved by Finance C
11:20 Posted to ERP
```

Auditability dramatically improves support and compliance.

---

# 276. External ERP Posting Scenario

Do not make UI wait indefinitely for an unreliable ERP.

Better:

```text
invoice approved
      ↓
create posting job
      ↓
worker calls ERP
      ├── success → POSTED
      └── failure → POSTING_FAILED / retry
```

The user can see status while work is retried reliably.

---

# 277. Legacy API Normalization

External services may return inconsistent contracts:

```text
ERP → { errorCode: 12 }
HR  → { status: 'FAIL' }
CRM → HTTP 200 with error text
```

Create an integration adapter:

```text
timeout
parse
runtime validation
error mapping
logging
```

Return a consistent internal result.

This keeps legacy quirks out of UI components.

---

# 278. Recommended Feature Architecture

```text
src/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (app)/
│   ├── api/
│   ├── layout.tsx
│   └── error.tsx
│
├── features/
│   ├── auth/
│   ├── invoices/
│   │   ├── actions/
│   │   ├── data/
│   │   ├── domain/
│   │   ├── permissions/
│   │   ├── schemas/
│   │   └── components/
│   └── users/
│
├── components/
│   ├── ui/
│   └── layout/
│
└── lib/
    ├── db/
    ├── auth/
    ├── logging/
    ├── env/
    └── integrations/
```

Principle:

```text
routes compose features
features own business behavior
lib owns infrastructure/shared capabilities
UI primitives remain generic
```

---

# 279. Clean Data Function

```ts
import 'server-only'

export async function getInvoiceForUser(
  invoiceId: string,
  user: AuthenticatedUser
) {
  return db.invoice.findFirst({
    where: {
      id: invoiceId,
      companyId: user.companyId,
    },
    select: {
      id: true,
      number: true,
      amount: true,
      status: true,
    },
  })
}
```

Characteristics:

```text
server-only
tenant-aware
minimal fields
reusable
testable
```

---

# 280. Clean Server Action

```ts
'use server'

export async function approveInvoice(
  invoiceId: string,
  formData: FormData
) {
  const user = await requireUser()

  const input = ApprovalSchema.parse({
    comment: formData.get('comment'),
  })

  const invoice = await getInvoiceForApproval(
    invoiceId,
    user
  )

  if (!invoice) {
    return { ok: false, message: 'Invoice not found.' }
  }

  assertCanApprove(user, invoice)

  await approveInvoiceTransaction({
    invoice,
    user,
    comment: input.comment,
  })

  return { ok: true }
}
```

Each helper has a clear responsibility.

---

# 281. Clean Route Handler

```ts
export async function POST(request: Request) {
  const auth = await authenticateApiRequest(request)

  if (!auth.ok) {
    return Response.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const raw = await request.json()
  const parsed = ApiSchema.safeParse(raw)

  if (!parsed.success) {
    return Response.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }

  const result = await service(parsed.data, auth.user)

  return Response.json(result, { status: 201 })
}
```

The HTTP boundary translates web concerns. Domain logic can live elsewhere.

---

# 282. Master “Where Does This Code Go?” Decision Tree

```text
Need to display server data?
→ Server Component

Need database access?
→ server-only DAL/data function

Need browser state/click/effect?
→ Client Component

Need mutation from your Next.js UI?
→ Server Action often fits

Need public/internal HTTP endpoint?
→ Route Handler

Need webhook?
→ Route Handler

Need early redirect/rewrite?
→ Proxy

Need shareable filters?
→ URL search params

Need reusable public data?
→ consider cache strategy / Cache Components

Need private user data?
→ request/user scope unless safely isolated

Need long-running reliable work?
→ queue + worker

Need large private files?
→ object storage + authorization
```

---

# 283. Master Performance Decision Tree

If page is slow:

## Server response slow?

Check:

```text
database
external API
request waterfall
CPU-heavy server work
cache misses
```

## Server fast, interaction late?

Check:

```text
client bundle
hydration
third-party scripts
giant Client Component boundary
```

## Main visual late?

Check:

```text
hero image
font
TTFB
resource priority
```

## Layout shifts?

Check:

```text
missing image dimensions
font metrics
late banners
poor skeleton sizing
```

Measure first.

---

# 284. Master Security Decision Tree

For each incoming value:

```text
trusted?
→ usually no
→ validate
```

For each user action:

```text
authenticated?
authorized for THIS exact resource?
```

For each server object:

```text
does client need every field?
→ usually no
→ return DTO/minimal select
```

For each cache:

```text
can two different users safely share this entry?
→ if unsure, do not globally cache
```

For each secret:

```text
can it enter browser bundle/log/public file?
→ redesign if yes
```

---

# 285. Master Debugging Decision Tree

## Page does not load

```text
route match?
build/server error?
auth redirect?
data dependency?
```

## Button does not work

```text
Client Component?
hydration?
event handler?
action/network?
```

## Old data appears

```text
which cache?
correct invalidation?
CDN/browser cache?
multiple replicas?
```

## Wrong user's data appears

Treat as a security incident.

Check immediately:

```text
cache scope
tenant filter
authorization
session identity
DTO/data selection
```

## Production-only problem

```text
production build
environment variables
runtime compatibility
filesystem case
reverse proxy/CDN
database network
Node version
```

---

# 286. Common Error: `window is not defined`

Meaning:

Browser-only code executed in a server/build environment.

Fix by:

- moving browser behavior to a Client Component
- accessing `window` in an appropriate effect/event
- using a client-only dynamic import when a library requires it

Do not make the whole app client-rendered as the first fix.

---

# 287. Common Error: Hydration Failed

Investigate:

```text
random values
time values
localStorage
browser conditionals
invalid HTML
locale/timezone
third-party DOM changes
```

Server and initial client render must agree for hydrated markup.

---

# 288. Common Error: Too Many DB Connections

Check:

```text
DB client created repeatedly?
hot reload duplicates?
serverless concurrency?
pool configuration?
connection leak?
provider proxy needed?
```

Use the database vendor/ORM's recommended Next.js pattern.

---

# 289. Common Error: Works Locally, Fails in Docker

Check:

```text
environment variables
port/host binding
Linux filesystem case sensitivity
native packages
Node version
build architecture
DB hostname/network
missing static files
```

A Windows/macOS development filesystem can hide import-case bugs that fail on Linux.

---

# 290. Common Error: API Returns HTML Instead of JSON

Possible causes:

```text
wrong URL
404 HTML page
login redirect
Proxy rewrite
upstream error page
```

Inspect:

```text
status
content-type
response text
```

before assuming `.json()` is the problem.

---

# 291. Fetch Error Handling

```ts
const response = await fetch(url)

if (!response.ok) {
  const text = await response.text()
  throw new Error(
    `Request failed: ${response.status} ${text}`
  )
}

const data = await response.json()
```

In production, avoid leaking sensitive upstream error bodies to users or logs.

---

# 292. Abort and Stale Requests

Search race:

```text
"a" request is slow
"ab" request is fast
"ab" result displays
then old "a" result arrives and overwrites it
```

Possible solutions:

```text
AbortController
request sequence IDs
data library stale handling
URL navigation semantics
```

Async UI needs race-condition awareness.

---

# 293. Client Data Libraries Still Have a Place

Useful for:

```text
polling
optimistic client mutation
infinite queries
frequent refetching
highly interactive dashboards
```

Server Components do not make client query libraries obsolete.

Choose the data owner/lifetime first.

---

# 294. Hybrid Server + Client Data

Pattern:

```text
Server Component provides initial snapshot
        ↓
Client Component initializes live query/polling
        ↓
subsequent client updates
```

Good for:

```text
monitoring dashboards
notifications
live status
```

Be aware of duplicate fetches and decide which cache owns freshness.

---

# 295. React Form Hooks Concepts

Modern React provides action/form-oriented hooks such as concepts around pending form status and action state.

They help model:

```text
pending
previous server result
validation error
```

Use exact APIs from the React version bundled/supported by your Next.js release.

The server must still validate and authorize regardless of client form state.

---

# 296. Progressive Enhancement

Next.js forms build on real web primitives.

Whenever possible, use:

```text
links
forms
URLs
HTTP semantics
semantic HTML
```

rather than recreating all navigation/submission behavior manually in JavaScript.

Understanding the web platform makes Next.js much easier.

---

# 297. Why `fetch` Rules Change Across Versions

Do not memorize timeless statements such as:

```text
"Next.js fetch is always cached"
```

or:

```text
"fetch is never cached"
```

Behavior depends on:

```text
Next.js version
Cache Components setting
fetch options
dynamic context
route architecture
```

Read the official caching docs for the version you are running.

---

# 298. Server-Side API Secrets

Server fetch:

```ts
await fetch('https://provider.example/data', {
  headers: {
    Authorization: `Bearer ${process.env.API_SECRET}`,
  },
})
```

can keep credentials server-side.

If browser code needs the result:

```text
browser
 ↓
your server/BFF
 ↓ with secret
provider
```

unless the provider explicitly gives browser-safe public credentials.

---

# 299. Do Not Build an Open Proxy

Dangerous:

```text
/api/proxy?url=<anything>
```

then server fetches arbitrary destination.

Risks:

```text
SSRF
bandwidth abuse
access to internal network
credential forwarding mistakes
```

Restrict destinations, methods, headers, response sizes and authentication.

---

# 300. Response and RSC Payload Size

Do not return/send 100,000 rows when the UI shows 20.

Large data costs:

```text
DB work
server memory
serialization
network
browser parse
client memory
```

Also avoid passing enormous server datasets into Client Components.

Pagination and minimal field selection improve both security and performance.

---

# 301. Client Boundary Dependency Cost

A small Client Component can import a huge dependency graph.

Example:

```text
Client button
  ↓ imports utility barrel
  ↓ imports chart package + editor + date library
```

Keep client imports focused.

A `'use client'` line affects the dependency boundary, not just one component's syntax.

---

# 302. Barrel File Trap

Risky shared file:

```ts
export * from './database'
export * from './browser-format'
```

A client import from that barrel can blur environment boundaries.

Prefer explicit server/client modules and avoid barrels that mix privileged and browser-safe exports.

---

# 303. Circular Dependencies

Example:

```text
invoice → user → permission → invoice
```

Can create:

```text
undefined exports
initialization surprises
hard-to-debug bundles
```

Fix by defining a clearer dependency direction or extracting a shared domain concept.

---

# 304. Architecture Decision Records

Record important choices:

```text
Why Server Actions?
Why URL filters?
Why Cache Components enabled?
Why PostgreSQL?
Why direct object-storage uploads?
```

Simple ADR format:

```text
Context
Decision
Alternatives
Consequences
```

Future developers then understand the reason, not only the code.

---

# 305. Production Runbook

Document:

```text
how to deploy
how to rollback
where logs are
how to restart
how to verify database
how to invalidate cache
how to rotate secrets
how to retry failed jobs
who owns each external service
```

Operational knowledge should not live only in one developer's memory.

---

# 306. Incident Debugging Flow

Users report: “Invoice page is slow.”

Check:

```text
1. all users or one tenant?
2. client or server delay?
3. request latency trend
4. DB query time
5. external service latency
6. cache hit/miss
7. recent deployment
8. error rate
9. infrastructure resource saturation
```

Do not rewrite components before identifying the bottleneck.

---

# 307. Cache Debugging Flow

“Product still shows old name.”

Ask:

```text
Which cache contains it?
What key/tag?
What cache lifetime?
Was invalidation called?
Does this page use the same cached function?
Is a CDN/browser also caching?
Are replicas sharing cache?
```

“Caching problem” is not a precise diagnosis.

---

# 308. Auth Debugging Flow

“Logged-in user is redirected to login.”

Check:

```text
cookie present?
Path/Domain correct?
Secure cookie on correct HTTPS environment?
SameSite behavior?
session expired?
Proxy reads same session?
multiple hostnames?
clock/token expiry?
```

Many authentication bugs are HTTP/session bugs, not React bugs.

---

# 309. Build Debugging Flow

Build fails while dev works.

Inspect:

```text
TypeScript errors
server/client import boundary
browser API during prerender
missing env variable
package runtime support
ESM/CommonJS issue
case-sensitive import path
dynamic rendering requirement
```

Always reproduce with a real production build.

---

# 310. Beginner Project Roadmap

## Project A — Public Blog

Learn:

```text
routing
layouts
dynamic slugs
metadata
images
sitemap
cached content
```

## Project B — Task Manager

Learn:

```text
database
Server Actions
validation
revalidation
auth
ownership permissions
```

## Project C — Dashboard

Learn:

```text
URL filters
pagination
charts
Suspense
roles
large tables
```

## Project D — E-Commerce

Learn:

```text
catalog caching
private cart
server pricing
inventory
payment concepts
webhooks
idempotency
```

## Project E — Enterprise Workflow

Learn:

```text
SSO
workflow state machine
multi-level permissions
audit log
file upload
background jobs
ERP integration
```

---

# 311. Enterprise Invoice Workflow Capstone

Requirement:

> Employees submit invoices. OCR processes attachments. Managers approve within amount limits. Finance performs final approval. Approved invoices are posted to ERP. Users search/filter thousands of invoices. The system must keep an audit history and generate large exports.

## Routes

```text
/login
/invoices
/invoices/new
/invoices/[id]
/reports
/admin
/api/webhooks/ocr
/api/webhooks/erp
```

## Rendering

```text
invoice list       → Server Component
invoice detail     → Server Component
filter controls    → Client Component where interaction needs it
approval dialog    → Client Component
charts             → client visualization with server aggregation
```

## State

```text
filters/pagination → URL
modal open         → local client state
invoice truth      → database
OCR/job status     → database + polling/realtime
```

## Mutations

```text
submit invoice     → Server Action
approve/reject     → Server Action
admin changes      → Server Action
provider callbacks → Route Handlers
```

## Security

```text
SSO/session        → trusted auth integration
DAL                → company isolation
approval           → role + amount + state validation server-side
attachments        → private object storage
download           → authorized signed URL
```

## Cache

```text
company reference data → cacheable
vendor master          → cacheable with invalidation
invoice list           → filter/user/company sensitive
current workflow       → freshness sensitive
permissions            → security sensitive
```

## Background jobs

```text
OCR
ERP posting
large exports
email
```

## Database

```text
Invoice
InvoiceLine
Attachment
WorkflowEvent
AuditEvent
User
Company
Role/Permission
Job
```

Use indexes, transactions, constraints and explicit workflow states.

## Observability

Track:

```text
request ID
invoice ID
user ID
OCR job ID
ERP posting ID
latency
failure reason
```

## Testing

Unit:

```text
approval limit
workflow transition
permission policy
```

Integration:

```text
submit + DB
approve + audit
webhook signature/idempotency
```

E2E:

```text
login
create invoice
manager approval
finance approval
posting status
```

This capstone combines nearly every major Next.js concept.

---

# 312. 100 Next.js Mastery Questions

Use these as revision/interview prompts.

1. What does Next.js add to React?
2. What is App Router?
3. What is a route segment?
4. What does `page.tsx` do?
5. What does `layout.tsx` do?
6. Layout vs template?
7. What does `loading.tsx` do?
8. What does `error.tsx` do?
9. What does `not-found.tsx` do?
10. What is `default.tsx` for?
11. What is a dynamic route?
12. Catch-all vs optional catch-all?
13. What is a route group?
14. What is a private folder?
15. What are Parallel Routes?
16. What are Intercepting Routes?
17. What is `generateStaticParams`?
18. Why are modern `params`/`searchParams` asynchronous?
19. What does `<Link>` provide?
20. When do you use `useRouter`?
21. What is a Server Component?
22. What is a Client Component?
23. What does `'use client'` define?
24. Why minimize client boundaries?
25. What data can cross server/client boundaries?
26. Why use `server-only`?
27. What is hydration?
28. What causes hydration mismatches?
29. What is streaming?
30. What is Suspense?
31. What is a request waterfall?
32. Parallel vs sequential data fetching?
33. Why query DB directly from a Server Component/DAL?
34. When is browser fetching appropriate?
35. What is Cache Components?
36. What does `'use cache'` do conceptually?
37. What is `cacheLife`?
38. What is `cacheTag`?
39. Why use tags?
40. `updateTag` vs `revalidateTag` conceptually?
41. When use `revalidatePath`?
42. What is remote cache?
43. Why can caching become a security problem?
44. What does `connection()` indicate?
45. What is a Server Action?
46. Server Action vs Route Handler?
47. Why validate Server Action input?
48. Why are hidden fields untrusted?
49. What is optimistic UI?
50. What is a Route Handler?
51. What does BFF mean?
52. Why verify webhooks?
53. What is idempotency?
54. HTTP cache vs Next.js cache?
55. What does HttpOnly mean?
56. What does Secure mean for a cookie?
57. What does SameSite control?
58. Database session vs stateless session?
59. Authentication vs authorization?
60. What is RBAC?
61. What is attribute-based authorization?
62. Why protect DAL/actions and not only pages?
63. What is a DTO?
64. Why minimize fields returned to client?
65. What is XSS?
66. What is CSRF?
67. What is CORS?
68. What is CSP?
69. What is rate limiting?
70. Why keep secrets out of `NEXT_PUBLIC_*`?
71. What is `proxy.ts`?
72. Why is Proxy not enough for resource authorization?
73. Redirect vs rewrite?
74. What is metadata?
75. What are sitemap/robots files?
76. How does image optimization help?
77. What is Turbopack?
78. What is React Compiler?
79. Node runtime vs Edge-style runtime?
80. Why are URLs good for filters?
81. When should you use Context?
82. Why avoid unnecessary effects?
83. What is an N+1 query?
84. Why do DB indexes matter?
85. Offset vs cursor pagination?
86. Why use direct object-storage uploads?
87. Polling vs SSE vs WebSockets?
88. `after()` vs durable queue?
89. Why use DB transactions?
90. What is optimistic concurrency?
91. Unit vs integration vs E2E testing?
92. What is structured logging?
93. What is tracing?
94. Why run production builds in CI?
95. What changes when self-hosting multiple replicas?
96. Why plan DB migrations for rollback?
97. Why must framework patch versions be maintained?
98. How do you migrate Pages Router safely?
99. How would you design a secure enterprise workflow?
100. How do you decide where new code belongs?

If you can answer these without memorized one-line definitions—and can give a scenario for each—you have a strong Next.js foundation.

---

# 313. Current-Version Notes for This Handbook

This edition was verified against official Next.js information available in August 2026.

Important current facts:

```text
Current documented release generation: Next.js 16.3.x
Next.js 16.3 release date: August 3, 2026
Minimum Node.js in current installation docs: 20.9
App Router remains the primary modern router
Server Components are default in App Router
Client Components use 'use client'
Server mutations use React Server Functions/Actions
Route Handlers use Web Request/Response APIs
Next.js 16 renamed Middleware to Proxy
Cache Components uses cacheComponents: true
'use cache' is central to the modern explicit cache model
'use cache: remote' is documented for remote cache handlers
cookies() is asynchronous
Turbopack is central to modern Next.js tooling
React Compiler integration is supported/configurable
```

Version-sensitive behavior should always be checked during upgrades.

Official starting points:

```text
https://nextjs.org/docs
https://nextjs.org/docs/app
https://nextjs.org/blog
https://nextjs.org/docs/app/getting-started/upgrading
https://nextjs.org/docs/app/api-reference
```

---

# 314. Final Engineering Philosophy

A beginner asks:

> Which Next.js API do I use?

An intermediate developer asks:

> Should this be a Server Component or Client Component?

A production engineer asks:

> Where is the trust boundary? Who owns the data? How fresh must it be? Can it be cached safely? What happens when the dependency fails? What happens under concurrency? How will we observe and operate it?

That is the real progression.

For every new requirement classify it:

```text
UI
routing
server data
browser interaction
mutation
HTTP integration
authentication
authorization
cache
background work
observability
deployment
```

Then select the simplest primitive that satisfies the requirement.

Build your knowledge on durable foundations:

```text
HTTP
React
security
databases
distributed systems
accessibility
performance
clean architecture
```

Next.js versions will change. Those fundamentals will keep your mental model stable.


# Final Mental Model

If you remember only one architecture diagram, remember this:

```text
                        NEXT.JS APPLICATION
                               │
              ┌────────────────┴────────────────┐
              │                                 │
        SERVER WORLD                      BROWSER WORLD
              │                                 │
      Server Components                  Client Components
      Data access                        State
      Database                           Effects
      Secrets                            Event handlers
      Server Functions                   Browser APIs
      Route Handlers                           │
      Cache                                    │
              │                                 │
              └────────── React UI ─────────────┘
                               │
                        ROUTING + RENDERING
                               │
                ┌──────────────┼──────────────┐
                │              │              │
              Cache          Dynamic       Streaming
                │              │              │
                └──────────────┼──────────────┘
                               │
                         USER EXPERIENCE
```

And for every feature, ask:

```text
1. Where does this run?
2. Who is allowed to call it?
3. Is the input trusted?
4. Should the result be cached?
5. How does it become fresh again?
6. Does it need browser JavaScript?
7. What happens when it is slow?
8. What happens when it fails?
```

If you can answer those eight questions confidently, you are no longer just memorizing Next.js APIs—you are thinking like a production Next.js engineer.

---

## Closing Learning Advice

Do not measure Next.js mastery by how many framework APIs you can name.

A strong Next.js developer can look at a requirement such as:

> "Build an authenticated product dashboard with filters, live inventory, cached product metadata and an admin update form."

and reason:

```text
public product metadata → cacheable server data
current inventory → freshness requirement determines caching
dashboard page → Server Component
filter state → URL search params
interactive chart → Client Component
admin update → Server Action
input → runtime validation
admin permission → server-side authorization
after update → invalidate relevant product/inventory cache
slow analytics → Suspense/streaming
external integrations → Route Handler
session → secure server-validated authentication
```

That reasoning—not the syntax—is the real goal of this handbook.
