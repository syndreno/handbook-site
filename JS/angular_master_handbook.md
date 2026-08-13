# Angular Master Handbook

> **Beginner → Intermediate → Advanced → Enterprise**  
> A single-file learning and reference handbook for modern Angular, with practical scenarios, mental models, code examples, architecture guidance, debugging tips, testing, performance, security, deployment, legacy concepts, interview preparation, and a learning roadmap.

**Current baseline used by this handbook:** Angular **22.x** (official Angular documentation was at v22.1 in August 2026). Modern examples use **standalone components**, **Signals**, built-in template control flow (`@if`, `@for`, `@switch`), functional providers/guards/interceptors, and modern rendering APIs. A dedicated legacy section explains **NgModules**, older structural directives, decorator-based inputs/outputs, and other patterns you will still see in enterprise applications.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Angular Is](#2-what-angular-is)
3. [Prerequisites](#3-prerequisites)
4. [Installing Angular and Creating a Project](#4-installing-angular-and-creating-a-project)
5. [Angular CLI Mastery](#5-angular-cli-mastery)
6. [Angular Project Structure](#6-angular-project-structure)
7. [TypeScript Essentials for Angular](#7-typescript-essentials-for-angular)
8. [The Angular Mental Model](#8-the-angular-mental-model)
9. [Components](#9-components)
10. [Templates](#10-templates)
11. [Data Binding](#11-data-binding)
12. [Built-in Template Control Flow](#12-built-in-template-control-flow)
13. [Template Variables and `@let`](#13-template-variables-and-let)
14. [Component Inputs](#14-component-inputs)
15. [Component Outputs](#15-component-outputs)
16. [Two-Way Binding and `model()`](#16-two-way-binding-and-model)
17. [Content Projection](#17-content-projection)
18. [Component Queries](#18-component-queries)
19. [Component Lifecycle](#19-component-lifecycle)
20. [Directives](#20-directives)
21. [Pipes](#21-pipes)
22. [Component Styling and View Encapsulation](#22-component-styling-and-view-encapsulation)
23. [Dynamic Components](#23-dynamic-components)
24. [Services](#24-services)
25. [Dependency Injection](#25-dependency-injection)
26. [Angular Signals](#26-angular-signals)
27. [`computed`, `effect`, `linkedSignal`, and Async Resources](#27-computed-effect-linkedsignal-and-async-resources)
28. [RxJS Fundamentals for Angular](#28-rxjs-fundamentals-for-angular)
29. [Signals and RxJS Interoperability](#29-signals-and-rxjs-interoperability)
30. [HTTP Client](#30-http-client)
31. [HTTP Interceptors](#31-http-interceptors)
32. [API Error Handling, Retry, Cancellation, and Caching](#32-api-error-handling-retry-cancellation-and-caching)
33. [Angular Router Fundamentals](#33-angular-router-fundamentals)
34. [Route Parameters, Query Parameters, and Route State](#34-route-parameters-query-parameters-and-route-state)
35. [Lazy Loading and Preloading](#35-lazy-loading-and-preloading)
36. [Route Guards](#36-route-guards)
37. [Resolvers](#37-resolvers)
38. [Nested Routes, Multiple Outlets, and Advanced Routing](#38-nested-routes-multiple-outlets-and-advanced-routing)
39. [Forms Overview](#39-forms-overview)
40. [Template-Driven Forms](#40-template-driven-forms)
41. [Reactive Forms](#41-reactive-forms)
42. [Signal Forms](#42-signal-forms)
43. [Validation](#43-validation)
44. [Dynamic Forms and FormArray](#44-dynamic-forms-and-formarray)
45. [Custom Form Controls](#45-custom-form-controls)
46. [State Management](#46-state-management)
47. [Authentication and Authorization](#47-authentication-and-authorization)
48. [Angular Security](#48-angular-security)
49. [Browser Storage](#49-browser-storage)
50. [Change Detection](#50-change-detection)
51. [Zoneless Angular](#51-zoneless-angular)
52. [Performance Optimization](#52-performance-optimization)
53. [`@defer` and Deferrable Views](#53-defer-and-deferrable-views)
54. [SSR, SSG, Hybrid Rendering, and Hydration](#54-ssr-ssg-hybrid-rendering-and-hydration)
55. [Service Workers and PWA Concepts](#55-service-workers-and-pwa-concepts)
56. [Animations](#56-animations)
57. [Accessibility](#57-accessibility)
58. [Internationalization](#58-internationalization)
59. [Testing Strategy](#59-testing-strategy)
60. [Component Testing](#60-component-testing)
61. [Service and HTTP Testing](#61-service-and-http-testing)
62. [Router and Form Testing](#62-router-and-form-testing)
63. [End-to-End Testing](#63-end-to-end-testing)
64. [Configuration and Environments](#64-configuration-and-environments)
65. [Building for Production](#65-building-for-production)
66. [Deployment: Nginx, Apache, IIS, and Static Hosting](#66-deployment-nginx-apache-iis-and-static-hosting)
67. [Enterprise Project Architecture](#67-enterprise-project-architecture)
68. [Feature-Based Folder Structure](#68-feature-based-folder-structure)
69. [Reusable UI and Smart/Dumb Component Patterns](#69-reusable-ui-and-smartdumb-component-patterns)
70. [Practical CRUD Scenario](#70-practical-crud-scenario)
71. [Search, Debounce, Filter, Sort, and Pagination Scenario](#71-search-debounce-filter-sort-and-pagination-scenario)
72. [File Upload Scenario](#72-file-upload-scenario)
73. [Dashboard Scenario](#73-dashboard-scenario)
74. [Role-Based Workflow Scenario](#74-role-based-workflow-scenario)
75. [Optimistic UI and Caching Scenario](#75-optimistic-ui-and-caching-scenario)
76. [WebSocket / Real-Time Concepts](#76-websocket--real-time-concepts)
77. [Error Handling Architecture](#77-error-handling-architecture)
78. [Logging and Observability](#78-logging-and-observability)
79. [Angular Coding Standards](#79-angular-coding-standards)
80. [Common Anti-Patterns](#80-common-anti-patterns)
81. [Legacy Angular: NgModules and Older Syntax](#81-legacy-angular-ngmodules-and-older-syntax)
82. [Migrating Older Angular Applications](#82-migrating-older-angular-applications)
83. [Common Angular Errors and Debugging](#83-common-angular-errors-and-debugging)
84. [Angular DevTools and Debugging Workflow](#84-angular-devtools-and-debugging-workflow)
85. [Design Patterns Useful in Angular](#85-design-patterns-useful-in-angular)
86. [Angular Interview Questions](#86-angular-interview-questions)
87. [Practice Projects](#87-practice-projects)
88. [12-Week Learning Roadmap](#88-12-week-learning-roadmap)
89. [Angular Cheat Sheet](#89-angular-cheat-sheet)
90. [Glossary](#90-glossary)
91. [Official References](#91-official-references)
92. [Advanced Template Primitives](#92-advanced-template-primitives-ng-template-ng-container-and-outlets)
93. [Host Elements and Host Bindings](#93-host-elements-host-bindings-and-event-handling)
94. [DOM Access and Renderer Safety](#94-dom-access-elementref-and-renderer-safety)
95. [Advanced Dependency Injection](#95-advanced-dependency-injection-patterns)
96. [Advanced Signals Patterns](#96-advanced-signals-patterns)
97. [RxJS Operator Decision Guide](#97-rxjs-operator-decision-guide)
98. [Advanced HTTP Patterns](#98-advanced-http-patterns)
99. [Advanced Router Patterns](#99-advanced-router-patterns)
100. [Advanced Forms Patterns](#100-advanced-forms-patterns)
101. [Angular Material, CDK, and Component Libraries](#101-angular-material-cdk-and-component-libraries)
102. [Image and Asset Performance](#102-image-and-asset-performance)
103. [Custom Elements / Web Components](#103-custom-elements--web-components)
104. [Creating Reusable Angular Libraries](#104-creating-reusable-angular-libraries)
105. [Multi-Project Workspaces and Monorepos](#105-multi-project-workspaces-and-monorepo-thinking)
106. [Linting, Formatting, and Quality Gates](#106-linting-formatting-and-quality-gates)
107. [CI/CD and Release Strategy](#107-cicd-and-release-strategy)
108. [Application Startup and Bootstrap](#108-application-startup-and-bootstrap)
109. [Reusable Table Design Scenario](#109-reusable-table-design-scenario)
110. [Angular Code Review Checklist](#110-angular-code-review-checklist)
111. [Final A-to-Z Scenario Map](#111-final-a-to-z-scenario-map)
112. [Final Mastery Checklist](#112-final-mastery-checklist)

---

# 1. How to Use This Handbook

Do **not** try to memorize Angular API names. Learn Angular by repeatedly answering four questions:

1. **Where does the state live?** Component, service, signal, form, store, URL, or server?
2. **Who owns the state?** Parent, child, feature, application, or backend?
3. **How does data move?** Input, output, DI, signal, observable, router, or HTTP?
4. **When does the UI update?** After signal changes, observable emissions, form updates, routing, or async requests?

A good progression is:

```text
HTML/CSS/JavaScript
        ↓
TypeScript
        ↓
Components + Templates + Binding
        ↓
Services + Dependency Injection
        ↓
Routing + Forms + HTTP
        ↓
Signals + RxJS
        ↓
Architecture + Testing + Performance
        ↓
SSR + Security + Enterprise Patterns
```

### Learning rule

For every topic:

- understand **what problem it solves**;
- learn the **minimum syntax**;
- implement one **small example**;
- implement one **real application scenario**;
- learn the **common mistake**;
- understand **when not to use it**.

---

# 2. What Angular Is

Angular is a full web application framework maintained by Google. It provides an integrated approach for building applications with:

- components;
- templates;
- routing;
- dependency injection;
- forms;
- HTTP communication;
- reactive state primitives;
- testing support;
- server-side rendering;
- build tooling;
- accessibility and internationalization support.

Angular is especially useful for medium-to-large applications where teams benefit from strong conventions and built-in tooling.

## Angular vs a small UI library

A lightweight UI library may mainly solve **rendering**. Angular provides solutions for most layers of a frontend application.

```text
Browser
  │
  ├── Angular Components
  ├── Angular Router
  ├── Forms
  ├── Signals / RxJS
  ├── Services + DI
  ├── HttpClient
  └── Build / SSR / Testing tooling
          │
          ▼
       Backend API
```

## Typical Angular use cases

- enterprise portals;
- banking dashboards;
- HR applications;
- procurement systems;
- invoice/workflow systems;
- admin dashboards;
- e-commerce applications;
- SaaS applications;
- internal business tools;
- public sites requiring SSR/SEO.

---

# 3. Prerequisites

You should know the basics of:

### HTML

Understand:

- semantic elements;
- forms;
- inputs;
- buttons;
- tables;
- attributes;
- accessibility basics.

### CSS

Understand:

- selectors;
- box model;
- Flexbox;
- Grid;
- responsive design;
- classes;
- CSS variables.

### JavaScript

Must know:

- variables;
- functions;
- objects and arrays;
- destructuring;
- spread syntax;
- modules;
- classes;
- promises;
- `async/await`;
- array methods (`map`, `filter`, `reduce`);
- closures;
- event loop basics.

### TypeScript

Angular is TypeScript-first. You should become comfortable with types, interfaces, generics, unions, classes, decorators, access modifiers, and type narrowing.

---

# 4. Installing Angular and Creating a Project

Check Node and npm:

```bash
node -v
npm -v
```

Install the Angular CLI:

```bash
npm install -g @angular/cli
```

Check it:

```bash
ng version
```

Create an application:

```bash
ng new employee-portal
```

Useful choices for a modern project:

- routing: yes for most applications;
- stylesheet: CSS/SCSS according to team preference;
- SSR: enable if your application needs SEO or server/hybrid rendering.

Start the development server:

```bash
cd employee-portal
ng serve
```

Open:

```text
http://localhost:4200
```

## Create with SSR immediately

```bash
ng new customer-portal --ssr
```

## Important compatibility note

Angular, TypeScript, Node.js, and RxJS versions have compatibility ranges. Do not randomly upgrade just one of them in an enterprise project. Check Angular's official version compatibility table before upgrades.

---

# 5. Angular CLI Mastery

The CLI automates repetitive development tasks.

## Generate a component

```bash
ng generate component features/users/user-list
```

Short form:

```bash
ng g c features/users/user-list
```

## Generate a service

```bash
ng g s core/services/auth
```

## Generate a guard

```bash
ng g guard core/guards/auth
```

## Generate an interceptor

```bash
ng g interceptor core/interceptors/auth
```

## Build

```bash
ng build
```

## Production build

Modern CLI configurations normally optimize production output automatically through the configured build target:

```bash
ng build --configuration production
```

## Run tests

```bash
ng test
```

## Update Angular

```bash
ng update @angular/cli @angular/core
```

### Useful principle

Before a major update:

```text
Read migration notes
      ↓
Create branch
      ↓
Update CLI + Core
      ↓
Fix compile errors
      ↓
Run unit tests
      ↓
Run E2E tests
      ↓
Test production build
```

---

# 6. Angular Project Structure

A small modern project may look like:

```text
src/
├── app/
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   ├── app.html
│   └── app.css
├── assets/
├── environments/
├── index.html
├── main.ts
└── styles.css
```

A larger project should be feature-oriented:

```text
src/app/
├── core/
│   ├── auth/
│   ├── guards/
│   ├── interceptors/
│   ├── services/
│   └── tokens/
├── shared/
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   └── utils/
├── features/
│   ├── dashboard/
│   ├── invoices/
│   ├── users/
│   └── reports/
├── layout/
│   ├── header/
│   ├── sidebar/
│   └── shell/
├── app.routes.ts
└── app.config.ts
```

## Core vs Shared

**Core** contains application-wide infrastructure:

- authentication;
- API configuration;
- global error handling;
- interceptors;
- guards;
- singleton services.

**Shared** contains reusable presentation/utilities:

- buttons;
- modal components;
- pipes;
- directives;
- reusable form controls.

**Features** contain business capabilities:

- invoice approval;
- employee management;
- product catalog;
- reporting.

---

# 7. TypeScript Essentials for Angular

## Types

```ts
let employeeName: string = 'Asha';
let age: number = 30;
let active: boolean = true;
```

## Arrays

```ts
const roles: string[] = ['Admin', 'Finance', 'User'];
```

## Interfaces

```ts
interface Employee {
  id: number;
  name: string;
  email: string;
  active: boolean;
}
```

Usage:

```ts
const employee: Employee = {
  id: 101,
  name: 'Asha',
  email: 'asha@example.com',
  active: true,
};
```

## Type aliases

```ts
type Status = 'pending' | 'approved' | 'rejected';
```

This is much safer than arbitrary strings:

```ts
let status: Status = 'pending';
```

## Optional properties

```ts
interface Invoice {
  id: number;
  poNumber?: string;
}
```

## Generics

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
```

Usage:

```ts
const response: ApiResponse<Employee[]> = {
  data: [],
  message: 'Loaded',
  success: true,
};
```

## Utility types

```ts
type EmployeeUpdate = Partial<Employee>;
type EmployeeSummary = Pick<Employee, 'id' | 'name'>;
type NewEmployee = Omit<Employee, 'id'>;
```

## `unknown` vs `any`

Avoid:

```ts
let value: any;
```

Prefer:

```ts
let value: unknown;

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

`any` disables type checking. `unknown` forces safe validation.

## Enums vs unions

For many frontend states, unions are simple and tree-shake-friendly:

```ts
type PaymentStatus = 'draft' | 'submitted' | 'paid';
```

## Classes

```ts
class User {
  constructor(
    public id: number,
    public name: string,
  ) {}
}
```

## `readonly`

Use it when a reference should not be replaced:

```ts
readonly apiUrl = '/api/users';
```

Angular code often uses `readonly` with injected services and signals:

```ts
readonly loading = signal(false);
```

---

# 8. The Angular Mental Model

The application is a **tree of components**.

```text
App
├── Header
├── Sidebar
└── Router Outlet
    ├── Dashboard
    ├── Users
    │   ├── UserList
    │   └── UserCard
    └── Reports
```

Each component normally has:

```text
Component class  → state + behavior
Template         → UI
Styles           → presentation
Dependencies     → services/tools
```

A typical request flow:

```text
User clicks button
      ↓
Component handler runs
      ↓
Service calls backend
      ↓
State is updated
      ↓
Angular updates template
```

Keep business/API logic out of large templates. Keep components focused on orchestration and UI behavior; move reusable domain/API logic into services or dedicated state layers.

---

# 9. Components

A component is Angular's main UI building block.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `<h1>Welcome to Angular</h1>`,
})
export class WelcomeComponent {}
```

Use it:

```html
<app-welcome />
```

## External files

```ts
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {}
```

## Standalone components

Modern Angular components are standalone by default. Dependencies are imported directly into the component:

```ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `<a routerLink="/users">Users</a>`,
})
export class Home {}
```

## Keep components focused

Bad:

```text
InvoiceComponent
  ├── API calls
  ├── complex tax calculations
  ├── auth decisions
  ├── CSV generation
  ├── 1,500 lines template
  └── 2,000 lines TypeScript
```

Better:

```text
InvoicePage
  ├── InvoiceHeader
  ├── InvoiceLineTable
  ├── ApprovalPanel
  └── InvoiceState / InvoiceService
```

---

# 10. Templates

Templates are HTML enhanced with Angular syntax.

```ts
@Component({
  template: `
    <h1>{{ title }}</h1>
    <button (click)="refresh()">Refresh</button>
  `,
})
export class Dashboard {
  title = 'Dashboard';

  refresh() {
    console.log('Refreshing');
  }
}
```

## Template expressions

```html
<p>{{ firstName + ' ' + lastName }}</p>
<p>{{ total * taxRate }}</p>
<p>{{ user?.address?.city }}</p>
```

Keep template expressions lightweight. Avoid expensive methods executed repeatedly:

Bad:

```html
<div>{{ calculateHugeReport() }}</div>
```

Better:

```ts
readonly report = computed(() => calculateHugeReport(this.source()));
```

```html
<div>{{ report() }}</div>
```

---

# 11. Data Binding

Angular has several important binding directions.

## Interpolation

Component → view:

```html
<h2>{{ username }}</h2>
```

## Property binding

```html
<img [src]="profileImageUrl" [alt]="username" />
<button [disabled]="saving">Save</button>
```

## Attribute binding

Useful for ARIA and attributes that are not DOM properties:

```html
<button [attr.aria-label]="buttonLabel">Save</button>
```

## Class binding

```html
<div [class.active]="selected">...</div>
```

```html
<div [class]="statusClass">...</div>
```

## Style binding

```html
<div [style.width.px]="progress">...</div>
```

## Event binding

View → component:

```html
<button (click)="save()">Save</button>
<input (input)="onInput($event)" />
```

## Event object

```ts
onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}
```

## Two-way binding

```html
<input [(ngModel)]="name" />
```

Think of `[(...)]` as:

```text
[property] + (propertyChange)
```

The nickname is **banana in a box**.

---

# 12. Built-in Template Control Flow

Modern Angular has built-in `@if`, `@for`, and `@switch` blocks.

## `@if`

```html
@if (isLoggedIn()) {
  <p>Welcome back.</p>
} @else {
  <a routerLink="/login">Login</a>
}
```

### Scenario: API state

```html
@if (loading()) {
  <app-spinner />
} @else if (error()) {
  <app-error [message]="error()!" />
} @else {
  <app-user-list [users]="users()" />
}
```

## `@for`

```html
@for (user of users(); track user.id) {
  <app-user-card [user]="user" />
} @empty {
  <p>No users found.</p>
}
```

### Why `track` matters

Tracking helps Angular identify which list item corresponds to which DOM node.

Prefer a stable unique identifier:

```html
@for (invoice of invoices(); track invoice.id) {
  <tr>...</tr>
}
```

Avoid using an unstable object or random value.

Useful contextual variables:

```html
@for (item of items(); track item.id; let i = $index; let first = $first) {
  <p>{{ i + 1 }}. {{ item.name }}</p>
}
```

## `@switch`

```html
@switch (status()) {
  @case ('pending') {
    <span>Waiting for approval</span>
  }
  @case ('approved') {
    <span>Approved</span>
  }
  @case ('rejected') {
    <span>Rejected</span>
  }
  @default {
    <span>Unknown</span>
  }
}
```

Excellent for business workflow statuses.

---

# 13. Template Variables and `@let`

## Template reference variables

```html
<input #searchBox />
<button (click)="search(searchBox.value)">Search</button>
```

`#searchBox` references the DOM element or component/directive instance.

## `@let`

Use `@let` to avoid repeating expressions:

```html
@let fullName = user().firstName + ' ' + user().lastName;
<h2>{{ fullName }}</h2>
<p>Assigned to {{ fullName }}</p>
```

With async pipe:

```html
@let user = user$ | async;

@if (user) {
  <h2>{{ user.name }}</h2>
}
```

---

# 14. Component Inputs

Inputs pass data **parent → child**.

Modern input API:

```ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `<h3>{{ user().name }}</h3>`,
})
export class UserCard {
  user = input.required<User>();
}
```

Parent:

```html
<app-user-card [user]="selectedUser()" />
```

## Default input

```ts
size = input<'small' | 'medium' | 'large'>('medium');
```

## Aliases

```ts
title = input('', { alias: 'cardTitle' });
```

Use sparingly; mismatched names can confuse maintainers.

## Input transforms

Transforms are useful for normalizing incoming values. Prefer explicit typed transforms rather than surprising behavior.

## Principle

A child should normally **not mutate an object owned by its parent**.

Bad:

```ts
this.user().name = 'Changed';
```

Better:

- emit an event;
- update shared state through an intentional API;
- use a `model()` only when two-way value ownership is appropriate.

---

# 15. Component Outputs

Outputs send events **child → parent**.

```ts
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  template: `<button (click)="requestDelete()">Delete</button>`,
})
export class DeleteButton {
  deleted = output<number>();

  requestDelete() {
    this.deleted.emit(101);
  }
}
```

Parent:

```html
<app-delete-button (deleted)="deleteUser($event)" />
```

## Event naming

Prefer business events:

```text
invoiceApproved
userSelected
searchChanged
fileUploaded
```

Avoid implementation-style names:

```text
buttonClicked
handleAction
valueEvent
```

Business event names communicate intent.

## Outputs do not replace services

Use output for direct component communication. If unrelated parts of the application need shared coordination, prefer a shared service/store.

---

# 16. Two-Way Binding and `model()`

A `model()` input is useful when the child intentionally edits a value owned together with its parent.

Child:

```ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantity-picker',
  template: `
    <button (click)="decrement()">-</button>
    {{ quantity() }}
    <button (click)="increment()">+</button>
  `,
})
export class QuantityPicker {
  quantity = model(1);

  increment() {
    this.quantity.update(v => v + 1);
  }

  decrement() {
    this.quantity.update(v => Math.max(1, v - 1));
  }
}
```

Parent:

```ts
quantity = signal(2);
```

```html
<app-quantity-picker [(quantity)]="quantity" />
```

Use `model()` for controls such as:

- quantity picker;
- date picker;
- switch/toggle;
- custom selector.

Do not turn every input into two-way binding. Explicit one-way data flow is easier to reason about.

---

# 17. Content Projection

Content projection lets a parent provide markup inside a reusable child container.

Card:

```ts
@Component({
  selector: 'app-card',
  template: `
    <section class="card">
      <ng-content />
    </section>
  `,
})
export class Card {}
```

Usage:

```html
<app-card>
  <h2>Invoice #1001</h2>
  <p>Amount: ₹12,500</p>
</app-card>
```

## Multiple slots

```html
<header>
  <ng-content select="[card-title]" />
</header>

<section>
  <ng-content />
</section>

<footer>
  <ng-content select="[card-actions]" />
</footer>
```

Usage:

```html
<app-card>
  <h2 card-title>Invoice</h2>
  <p>Main content</p>
  <button card-actions>Approve</button>
</app-card>
```

### Use case

Create reusable shells:

- modal;
- card;
- page header;
- accordion;
- dialog layout;
- dashboard widget.

---

# 18. Component Queries

Queries obtain references to child components, directives, or DOM elements.

Modern APIs include `viewChild`, `viewChildren`, `contentChild`, and `contentChildren`.

Example:

```ts
import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  template: `<input #searchInput />`,
})
export class SearchPage {
  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  focusSearch() {
    this.searchInput()?.nativeElement.focus();
  }
}
```

## When queries are appropriate

- focus an input;
- integrate a third-party widget;
- call a deliberate child API;
- measure an element after rendering.

## Avoid excessive parent-child imperative calls

If you frequently write:

```ts
this.child.doThis();
this.child.changeThat();
this.child.refreshSomething();
```

consider whether data flow should instead be modeled with inputs, signals, or a shared state service.

---

# 19. Component Lifecycle

A component moves through creation, change detection, rendering, and destruction.

Common lifecycle APIs:

```text
constructor
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
afterNextRender
afterEveryRender
ngOnDestroy / DestroyRef
```

## `constructor`

Use mainly for standard class initialization. Dependency injection through `inject()` is commonly performed in fields.

## `ngOnInit`

Runs once after initial inputs are initialized.

```ts
ngOnInit() {
  this.loadInitialData();
}
```

But with signal inputs and computed state, you may not need `ngOnInit` as often as in older Angular code.

## `ngOnChanges`

Useful when reacting to input changes in legacy/decorator-style flows or when you need the previous/current values.

## `ngAfterViewInit`

Use when a task depends on the initialized view.

Do not arbitrarily change parent-visible state here; it can lead to change-detection errors such as `ExpressionChangedAfterItHasBeenCheckedError`.

## `DestroyRef`

Modern cleanup can use `DestroyRef`:

```ts
private destroyRef = inject(DestroyRef);

constructor() {
  const id = setInterval(() => console.log('tick'), 1000);

  this.destroyRef.onDestroy(() => clearInterval(id));
}
```

For RxJS, prefer `takeUntilDestroyed()` where appropriate.

---

# 20. Directives

Directives add behavior to existing elements/components.

## Attribute directive example

```ts
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective {
  private el = inject(ElementRef<HTMLInputElement>);

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
```

Usage:

```html
<input appAutoFocus />
```

## Host bindings/listeners using `host`

```ts
@Directive({
  selector: '[appClickable]',
  host: {
    '[class.clickable]': 'true',
    '(keydown.enter)': 'activate()',
  },
})
export class ClickableDirective {
  activate() {
    console.log('Activated');
  }
}
```

## Good directive use cases

- permission behavior;
- autofocus;
- tooltip trigger;
- input formatting;
- click-outside behavior;
- reusable DOM behavior.

Avoid directives that secretly perform unrelated business processes.

---

# 21. Pipes

Pipes transform values for display.

Built-ins include formatting for:

- dates;
- numbers;
- currency;
- percentages;
- JSON;
- async values.

Examples:

```html
<p>{{ invoiceDate | date:'dd-MMM-yyyy' }}</p>
<p>{{ amount | currency:'INR' }}</p>
<p>{{ ratio | percent:'1.0-2' }}</p>
```

## Custom pipe

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  transform(value: string): string {
    return value.replaceAll('_', ' ').toUpperCase();
  }
}
```

```html
{{ 'pending_for_approval' | statusLabel }}
```

## Pure pipes

Pure pipes recalculate when their input references change. They work well with immutable data.

Avoid using a pipe for actions with side effects or server calls.

---

# 22. Component Styling and View Encapsulation

Component styles normally apply to the component's view without becoming arbitrary global styles.

```ts
@Component({
  styles: `
    .title {
      font-weight: 700;
    }
  `,
})
export class Example {}
```

## Global styles

Use global styles for:

- resets;
- typography tokens;
- CSS variables;
- application theme;
- utility styles intentionally shared across features.

## CSS variables

```css
:root {
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --radius: 0.5rem;
}
```

## Avoid deep selector hacks

If a child component must expose custom styling, prefer:

- CSS variables;
- documented classes;
- inputs controlling visual variants;
- a proper theming API.

---

# 23. Dynamic Components

Sometimes the component type is selected at runtime.

Use cases:

- dashboard widget registry;
- dynamic form fields;
- plugin-style UI;
- modal body selected by type;
- CMS-driven component rendering.

`NgComponentOutlet` is convenient for template-driven dynamic rendering.

Conceptual example:

```html
<ng-container *ngComponentOutlet="currentComponent" />
```

For advanced control, use `ViewContainerRef.createComponent()`.

Rule: do not use dynamic components when a normal `@if` or router configuration is simpler.

---

# 24. Services

Services hold reusable logic that is not tied directly to one visual component.

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaxService {
  calculateTax(amount: number, rate: number): number {
    return amount * rate;
  }
}
```

Usage:

```ts
private taxService = inject(TaxService);
```

## Good service responsibilities

- API communication;
- authentication/session state;
- feature state;
- calculations;
- caching;
- configuration;
- browser integrations.

## Bad service design

A `CommonService` containing 100 unrelated methods is a warning sign.

Prefer:

```text
AuthService
InvoiceApi
InvoiceState
CurrencyFormatter
PermissionService
FileDownloadService
```

---

# 25. Dependency Injection

Dependency Injection (DI) means a class receives its dependencies instead of constructing them itself.

Bad coupling:

```ts
class InvoicePage {
  api = new InvoiceApi();
}
```

Better:

```ts
class InvoicePage {
  private api = inject(InvoiceApi);
}
```

Angular's injector controls how dependencies are created and shared.

## `providedIn: 'root'`

```ts
@Injectable({ providedIn: 'root' })
export class AuthService {}
```

Creates an application-level injectable that can be tree-shaken when unused.

## Component-level provider

```ts
@Component({
  providers: [EditorState],
})
export class EditorPage {}
```

Each component instance receives its own `EditorState` instance.

### Scenario

You open two independent editors on one screen. Component-level state prevents them from sharing accidental data.

## `InjectionToken`

Useful for non-class configuration:

```ts
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
```

Provider:

```ts
{ provide: API_BASE_URL, useValue: 'https://api.example.com' }
```

Inject:

```ts
private apiUrl = inject(API_BASE_URL);
```

## Provider strategies

```text
useClass
useValue
useFactory
useExisting
```

### Factory example

```ts
{
  provide: Logger,
  useFactory: () => {
    const env = inject(AppEnvironment);
    return env.production ? new RemoteLogger() : new ConsoleLogger();
  },
}
```

## Hierarchical DI

Providers can exist at application, route, component, and other injector scopes.

Mental model:

```text
Application injector
      ↓
Route injector
      ↓
Parent component injector
      ↓
Child component injector
```

When Angular resolves a token, it searches the relevant injector hierarchy.

## Injection context

`inject()` only works where Angular has an injection context, such as:

- dependency-created class field initializers;
- provider factories;
- functional guards;
- functional interceptors;
- explicitly created injection contexts.

Do not call `inject()` inside an arbitrary utility function executed later unless that function is deliberately run inside an injection context.

---

# 26. Angular Signals

Signals are Angular's fine-grained reactive state primitive.

## Writable signal

```ts
count = signal(0);
```

Read:

```ts
console.log(this.count());
```

Set:

```ts
this.count.set(10);
```

Update from old value:

```ts
this.count.update(v => v + 1);
```

Template:

```html
<p>{{ count() }}</p>
```

## Object state

```ts
user = signal<User | null>(null);
```

Update immutably:

```ts
this.user.update(user =>
  user ? { ...user, name: 'Updated Name' } : user
);
```

## Why signals matter

They give Angular precise knowledge of what state is consumed by what reactive code/template.

Use signals for:

- UI state;
- component state;
- feature state;
- derived state;
- state shared through a service.

### Example: invoice page

```ts
invoices = signal<Invoice[]>([]);
selectedId = signal<number | null>(null);
loading = signal(false);
```

---

# 27. `computed`, `effect`, `linkedSignal`, and Async Resources

## `computed()`

Derived state should normally be computed instead of manually synchronized.

```ts
firstName = signal('Asha');
lastName = signal('Patel');

fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

### Scenario: totals

```ts
items = signal<LineItem[]>([]);

total = computed(() =>
  this.items().reduce((sum, item) => sum + item.qty * item.price, 0)
);
```

Avoid:

```ts
items = signal([]);
total = signal(0);
// manually update total every time items changes
```

Duplicated state creates synchronization bugs.

## `effect()`

Use effects for **side effects** caused by reactive state.

```ts
effect(() => {
  localStorage.setItem('theme', this.theme());
});
```

Good effect use cases:

- analytics;
- logging;
- browser APIs;
- third-party library synchronization;
- storage synchronization.

Bad use:

```ts
effect(() => {
  this.total.set(this.price() * this.quantity());
});
```

Use `computed()` instead.

## `untracked()`

Sometimes you need to read a signal without making it a reactive dependency.

Conceptually:

```ts
effect(() => {
  const id = this.selectedId();
  const snapshot = untracked(() => this.debugState());
  console.log(id, snapshot);
});
```

## `linkedSignal()`

`linkedSignal()` is useful when writable state depends on other reactive state but still needs user overrides.

Scenario: selected shipping method should reset when available methods change.

```ts
shippingOptions = signal([
  { id: 1, name: 'Standard' },
  { id: 2, name: 'Express' },
]);

selected = linkedSignal(() => this.shippingOptions()[0]);
```

Unlike a normal `computed`, the linked signal remains writable.

## `resource()`

A resource bridges asynchronous loading into signal-based state.

Conceptual pattern:

```ts
userId = signal(1);

userResource = resource({
  params: () => ({ id: this.userId() }),
  loader: ({ params }) => fetch(`/api/users/${params.id}`).then(r => r.json()),
});
```

You can react to loading, error, and value state through the resource API.

## `httpResource()`

For HTTP-driven signal state, modern Angular also provides a reactive HTTP resource API. It is useful when the request naturally depends on signals and the page wants resource status represented as signals.

### Choose between `HttpClient` and resources

Use regular `HttpClient` when:

- implementing commands/mutations such as POST/PUT/DELETE;
- RxJS composition is natural;
- existing application architecture is observable-based.

Consider `httpResource()` when:

- loading data based on reactive parameters;
- the UI is signal-centric;
- you want loading/value/error state represented reactively.

---

# 28. RxJS Fundamentals for Angular

RxJS represents streams of values over time.

## Observable mental model

```text
Observable
  emits → value 1
  emits → value 2
  emits → value 3
  completes
```

Example:

```ts
this.http.get<User[]>('/api/users').subscribe(users => {
  console.log(users);
});
```

## Common operators

### `map`

Transform values:

```ts
users$.pipe(
  map(users => users.filter(u => u.active))
);
```

### `filter`

Filter stream emissions:

```ts
source$.pipe(filter(value => value > 10));
```

### `tap`

Side effect without changing the value:

```ts
source$.pipe(tap(value => console.log(value)));
```

### `switchMap`

Cancel the previous inner stream when a new value arrives.

Perfect for search:

```ts
search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
);
```

If the user types:

```text
a → an → angu → angular
```

old requests are abandoned as newer search terms arrive.

### `concatMap`

Queues operations and preserves order.

Use case: sequential uploads or ordered saves.

### `mergeMap`

Runs inner streams concurrently.

Use case: independent parallel operations.

### `exhaustMap`

Ignores new triggers while one operation is active.

Great for preventing double-submit:

```text
Click Save
  request starts
Click Save again → ignored until first finishes
```

### `catchError`

```ts
source$.pipe(
  catchError(error => {
    return of(fallbackValue);
  })
);
```

### `finalize`

```ts
this.loading.set(true);

this.api.load().pipe(
  finalize(() => this.loading.set(false))
).subscribe();
```

### `forkJoin`

Wait for several completing observables:

```ts
forkJoin({
  user: this.api.getUser(),
  roles: this.api.getRoles(),
  settings: this.api.getSettings(),
});
```

Good for page initialization when independent requests can run in parallel.

### `combineLatest`

Combine latest values from ongoing streams.

Useful for filters:

```text
search term + selected status + selected department
                      ↓
                 filtered result
```

## Subject types

- `Subject` — multicast event stream;
- `BehaviorSubject` — stores latest value;
- `ReplaySubject` — replays N previous values.

In new Angular code, signals often replace `BehaviorSubject` for synchronous application/UI state, but RxJS remains extremely important for asynchronous event streams and API orchestration.

---

# 29. Signals and RxJS Interoperability

Angular applications often use both.

Think:

```text
Signals → current reactive state
RxJS    → streams/events/async composition
```

Useful interop APIs include:

- `toSignal()` — Observable → Signal;
- `toObservable()` — Signal → Observable;
- `takeUntilDestroyed()` — automatic subscription cleanup.

## Observable to signal

```ts
users = toSignal(this.api.getUsers(), { initialValue: [] });
```

Template:

```html
@for (user of users(); track user.id) {
  <p>{{ user.name }}</p>
}
```

## Signal to observable

```ts
query = signal('');
query$ = toObservable(this.query);
```

Then:

```ts
results$ = this.query$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.api.search(query))
);
```

## Avoid ideology

Do not force everything into signals or everything into RxJS. Use the abstraction that makes the flow clearest.

---

# 30. HTTP Client

Configure `HttpClient` in `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
```

## GET

```ts
@Injectable({ providedIn: 'root' })
export class UserApi {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

## GET with query parameters

```ts
getUsers(search: string, page: number) {
  return this.http.get<User[]>('/api/users', {
    params: {
      search,
      page,
    },
  });
}
```

## POST

```ts
createUser(payload: CreateUserRequest) {
  return this.http.post<User>('/api/users', payload);
}
```

## PUT

```ts
updateUser(id: number, payload: UpdateUserRequest) {
  return this.http.put<User>(`/api/users/${id}`, payload);
}
```

## PATCH

```ts
changeStatus(id: number, status: UserStatus) {
  return this.http.patch(`/api/users/${id}`, { status });
}
```

## DELETE

```ts
deleteUser(id: number) {
  return this.http.delete<void>(`/api/users/${id}`);
}
```

## Typed DTOs

Create separate types when backend request and frontend view models differ:

```ts
interface CreateInvoiceRequest {
  vendorId: number;
  invoiceNumber: string;
  amount: number;
}

interface InvoiceDto {
  id: number;
  vendorName: string;
  status: string;
}
```

Do not use `any` just because the backend returns JSON.

---

# 31. HTTP Interceptors

Interceptors apply cross-cutting behavior to requests/responses.

Use cases:

- authorization token;
- correlation ID;
- standardized error handling;
- request timing;
- API version header;
- refresh-token coordination.

Functional interceptor:

```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();

  if (!token) {
    return next(req);
  }

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(cloned);
};
```

Configure:

```ts
provideHttpClient(
  withInterceptors([authInterceptor])
)
```

## Important

HTTP requests are immutable. Clone a request when modifying it.

## Keep interceptors focused

Avoid one giant interceptor containing:

- auth;
- spinner;
- error translation;
- logging;
- retry;
- caching;
- refresh token;
- routing.

Compose small responsibilities where possible.

---

# 32. API Error Handling, Retry, Cancellation, and Caching

## Local error handling

```ts
this.api.getInvoice(id).pipe(
  catchError(error => {
    this.error.set('Unable to load invoice.');
    return EMPTY;
  })
).subscribe(invoice => {
  this.invoice.set(invoice);
});
```

## Retry only when appropriate

Do not blindly retry all errors.

Reasonable candidates:

- transient network failures;
- temporary 5xx errors;
- idempotent GET requests.

Usually do not retry:

- 400 validation error;
- 401 without a refresh strategy;
- 403 permission error;
- destructive operations unless carefully designed.

## Request cancellation

`switchMap` is ideal when newer requests make older ones irrelevant.

Example: autocomplete search.

## Basic cache in service

```ts
@Injectable({ providedIn: 'root' })
export class LookupService {
  private departments = signal<Department[] | null>(null);

  loadDepartments() {
    const cached = this.departments();
    if (cached) return of(cached);

    return this.http.get<Department[]>('/api/departments').pipe(
      tap(data => this.departments.set(data)),
    );
  }
}
```

Cache invalidation matters more than cache creation. Define:

- what invalidates cache;
- TTL if needed;
- whether user/session changes require clearing it.

---

# 33. Angular Router Fundamentals

Configure routes:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'users', component: UserListPage },
  { path: '**', component: NotFoundPage },
];
```

Provide them:

```ts
provideRouter(routes)
```

Root template:

```html
<router-outlet />
```

Navigation:

```html
<a routerLink="/users">Users</a>
```

Programmatic:

```ts
private router = inject(Router);

openUser(id: number) {
  this.router.navigate(['/users', id]);
}
```

## SPA idea

The router changes the displayed component without reloading the entire document for each navigation.

---

# 34. Route Parameters, Query Parameters, and Route State

## Route parameter

Route:

```ts
{ path: 'users/:id', component: UserDetailsPage }
```

URL:

```text
/users/42
```

Read:

```ts
private route = inject(ActivatedRoute);

id = this.route.snapshot.paramMap.get('id');
```

For reactive parameter changes, use the route's observable/signal-compatible state rather than assuming the component is always recreated.

## Query parameters

URL:

```text
/invoices?status=pending&page=2
```

Navigation:

```ts
this.router.navigate(['/invoices'], {
  queryParams: {
    status: 'pending',
    page: 2,
  },
});
```

## URL as state

Put shareable navigation/filter state in the URL when appropriate:

```text
Good candidates:
search
page
sort
filters
selected tab
report period
```

Benefit: refresh, bookmarking, back/forward, and sharing continue to work.

---

# 35. Lazy Loading and Preloading

Lazy loading keeps large features out of the initial JavaScript bundle.

## Lazy standalone component

```ts
{
  path: 'reports',
  loadComponent: () =>
    import('./features/reports/reports.page')
      .then(m => m.ReportsPage),
}
```

## Lazy route collection

```ts
{
  path: 'admin',
  loadChildren: () =>
    import('./features/admin/admin.routes')
      .then(m => m.ADMIN_ROUTES),
}
```

## Scenario

A user may never open the Admin module. Do not force every user to download all admin code on initial load.

## Preloading

Preloading loads lazy code after initial startup according to a strategy, improving later navigation while preserving a smaller startup bundle.

Use when:

- features are likely to be visited shortly after startup;
- network conditions allow it;
- you want a balance between eager and purely lazy loading.

---

# 36. Route Guards

Guards control navigation.

Functional guard:

```ts
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn()
    ? true
    : router.createUrlTree(['/login']);
};
```

Route:

```ts
{
  path: 'admin',
  canActivate: [authGuard],
  loadComponent: () => import('./admin.page').then(m => m.AdminPage),
}
```

## Common guard categories

- `CanActivate` — can enter route?
- `CanActivateChild` — can enter child routes?
- `CanDeactivate` — can leave page?
- `CanMatch` — should this route definition match?

## Unsaved form scenario

```ts
export const unsavedGuard: CanDeactivateFn<EditInvoicePage> = component => {
  return component.hasUnsavedChanges()
    ? confirm('Discard unsaved changes?')
    : true;
};
```

## Critical security principle

A client-side guard is **not security by itself**. A user can alter browser code or call APIs directly. The backend must independently enforce authorization.

---

# 37. Resolvers

Resolvers load data before activating a route.

```ts
export const invoiceResolver: ResolveFn<Invoice> = route => {
  const api = inject(InvoiceApi);
  const id = Number(route.paramMap.get('id'));
  return api.getInvoice(id);
};
```

Route:

```ts
{
  path: 'invoices/:id',
  component: InvoicePage,
  resolve: {
    invoice: invoiceResolver,
  },
}
```

## Use resolver when

- a page cannot render meaningfully without core data;
- you want navigation to coordinate required loading;
- route-level error/navigation logic is desired.

## Do not overuse

If a page can render a shell immediately and progressively load several sections, component/resource-level loading may give better perceived performance.

---

# 38. Nested Routes, Multiple Outlets, and Advanced Routing

## Child routes

```ts
{
  path: 'products/:id',
  component: ProductPage,
  children: [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', component: ProductInfo },
    { path: 'reviews', component: ProductReviews },
  ],
}
```

Parent template:

```html
<h1>Product</h1>
<nav>...</nav>
<router-outlet />
```

## Router events

Useful for:

- analytics;
- loading indicators;
- debugging;
- navigation instrumentation.

Important events include:

```text
NavigationStart
RoutesRecognized
GuardsCheckStart / End
ResolveStart / End
NavigationEnd
NavigationCancel
NavigationError
```

## Component input binding from routes

Modern router configuration can bind route parameters/data directly to component inputs, reducing manual `ActivatedRoute` plumbing in suitable cases.

## View transitions

Router integration can use browser View Transitions as a progressive enhancement for route changes. Treat motion as enhancement, not a dependency for application correctness.

---

# 39. Forms Overview

Angular has three major form approaches:

| Approach | Best for | State lives in | Type safety |
|---|---|---|---|
| Template-driven | simple forms | component + template directives | lower |
| Reactive Forms | established complex forms | `FormControl`/`FormGroup` tree | strong |
| Signal Forms | modern signal-first forms | writable signal + form field tree | strong/inferred |

Learn all three because enterprise projects can contain any of them.

---

# 40. Template-Driven Forms

Good for small/simple forms.

```ts
@Component({
  imports: [FormsModule],
  template: `
    <form #form="ngForm" (ngSubmit)="submit()">
      <input
        name="email"
        [(ngModel)]="email"
        required
        email
      />

      <button [disabled]="form.invalid">Submit</button>
    </form>
  `,
})
export class ContactForm {
  email = '';

  submit() {
    console.log(this.email);
  }
}
```

### Good use cases

- search box;
- small contact form;
- simple settings form;
- quick prototype.

For large dynamic enterprise forms, Reactive Forms or Signal Forms are usually easier to structure and test.

---

# 41. Reactive Forms

Reactive Forms model form state explicitly in TypeScript.

```ts
@Component({
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="email" />
      <input formControlName="password" type="password" />
      <button [disabled]="form.invalid">Login</button>
    </form>
  `,
})
export class LoginPage {
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.getRawValue());
  }
}
```

## `FormGroup`

Represents a group of controls.

## `FormControl`

Represents one value/control.

## `FormArray`

Represents a dynamic sequence of controls/groups.

## `FormBuilder`

Convenient builder syntax:

```ts
private fb = inject(FormBuilder);

form = this.fb.nonNullable.group({
  name: ['', Validators.required],
  amount: [0, [Validators.required, Validators.min(0)]],
});
```

## Value changes

```ts
this.form.controls.name.valueChanges
  .pipe(takeUntilDestroyed())
  .subscribe(name => console.log(name));
```

---

# 42. Signal Forms

Signal Forms are the modern signal-based form system in Angular v22+.

Core idea:

```text
Writable signal model
        ↓
     form(...)
        ↓
typed field tree + validation/state
        ↓
template control binding
```

Conceptual example:

```ts
import { signal } from '@angular/core';
import { form, required, email } from '@angular/forms/signals';

loginModel = signal({
  email: '',
  password: '',
});

loginForm = form(this.loginModel, path => {
  required(path.email, { message: 'Email is required' });
  email(path.email, { message: 'Enter a valid email address' });
  required(path.password, { message: 'Password is required' });
});
```

Template concept:

```html
<input [formField]="loginForm.email" />
<input [formField]="loginForm.password" type="password" />
```

## Advantages

- model shape is the source of truth;
- types are inferred from the model;
- integrates naturally with signals;
- field state is reactive;
- schema-based validation centralizes rules.

## When to choose

Use Signal Forms for new Angular 22+ signal-first applications when your team is comfortable with the API and its ecosystem.

Use Reactive Forms when:

- maintaining a large existing Reactive Forms codebase;
- your component library integrates specifically around reactive forms;
- your team has mature patterns and utilities around `FormGroup`.

Know both.

---

# 43. Validation

Validation can be:

- synchronous;
- asynchronous;
- field-level;
- form-level/cross-field;
- backend validation.

## Reactive Forms validator

```ts
amount: new FormControl(0, {
  nonNullable: true,
  validators: [
    Validators.required,
    Validators.min(1),
    Validators.max(1_000_000),
  ],
})
```

## Custom validator

```ts
function noWhitespace(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '');
  return value.trim().length === 0 ? { whitespace: true } : null;
}
```

## Cross-field validator scenario

Password and confirm password:

```ts
function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}
```

## Async validation

Scenario: check whether username already exists.

Do not call the backend on every raw keystroke without debounce/cancellation.

## Server-side validation is mandatory

Frontend validation improves UX. Backend validation protects data integrity/security.

Never assume:

```text
Angular validator passed ⇒ request is trustworthy
```

Attackers can call the API without your Angular application.

---

# 44. Dynamic Forms and FormArray

Scenario: invoice line items.

```ts
private fb = inject(FormBuilder);

form = this.fb.nonNullable.group({
  invoiceNumber: ['', Validators.required],
  lines: this.fb.array([] as FormGroup[]),
});

get lines() {
  return this.form.controls.lines;
}

addLine() {
  this.lines.push(
    this.fb.nonNullable.group({
      description: ['', Validators.required],
      quantity: [1, Validators.min(1)],
      price: [0, Validators.min(0)],
    })
  );
}

removeLine(index: number) {
  this.lines.removeAt(index);
}
```

Template idea:

```html
<div formArrayName="lines">
  @for (line of lines.controls; track line; let i = $index) {
    <div [formGroupName]="i">
      <input formControlName="description" />
      <input formControlName="quantity" type="number" />
      <input formControlName="price" type="number" />
      <button type="button" (click)="removeLine(i)">Remove</button>
    </div>
  }
</div>
```

Dynamic forms are common in:

- invoices;
- purchase orders;
- survey builders;
- user permissions;
- configurable products;
- travel itineraries.

---

# 45. Custom Form Controls

Create a custom form control when native `<input>`, `<select>`, or `<textarea>` is insufficient.

Examples:

- date picker;
- rich-text editor;
- tag selector;
- searchable dropdown;
- file picker;
- rating control.

In Reactive Forms / legacy form integration, understand `ControlValueAccessor` (CVA).

Conceptual responsibilities:

```text
writeValue(value)        ← form writes into control
registerOnChange(fn)     ← control reports value changes
registerOnTouched(fn)    ← control reports touched
setDisabledState(...)    ← form controls disabled state
```

Modern Signal Forms also support custom controls through their control interfaces.

### Design rule

A reusable custom form control should behave like a normal native control:

- value in/out;
- disabled state;
- touched state;
- keyboard behavior;
- accessible label;
- validation integration.

---

# 46. State Management

There is no single state solution for every application.

## Level 1 — local component state

```ts
isOpen = signal(false);
```

Use for:

- modal visibility;
- current tab;
- local filter;
- expanded row.

## Level 2 — parent-owned state

Parent holds data and passes it to children with inputs/outputs.

Use when a small component tree shares one feature's state.

## Level 3 — service with signals

```ts
@Injectable()
export class InvoiceState {
  private readonly _invoices = signal<Invoice[]>([]);
  readonly invoices = this._invoices.asReadonly();

  readonly pending = computed(() =>
    this._invoices().filter(x => x.status === 'pending')
  );

  setInvoices(items: Invoice[]) {
    this._invoices.set(items);
  }
}
```

Provide at feature/route/component scope when the state should live only as long as that feature.

## Level 4 — RxJS state service

Useful when state is stream-heavy or existing architecture is observable-based.

## Level 5 — dedicated store library

A store library can help when the application has:

- many interconnected features;
- complex state transitions;
- strict event/action tracing needs;
- many developers working on shared state;
- strong testing/debugging requirements.

Examples in the Angular ecosystem include NgRx and signal-oriented store solutions.

### Do not install a global store automatically

For a 5-page CRUD application, a huge store architecture may create more complexity than it removes.

## State ownership decision tree

```text
Used only by one component?
  → local signal

Used by parent + children?
  → parent state + inputs/outputs

Used throughout one feature?
  → feature-scoped state service

Used across unrelated features?
  → application service/store

Should survive refresh/share URL?
  → URL or persisted storage/server
```

---

# 47. Authentication and Authorization

Authentication answers:

> Who is the user?

Authorization answers:

> What is the user allowed to do?

## Typical frontend flow

```text
Login
  ↓
Backend validates credentials
  ↓
Session / token established
  ↓
Frontend reads auth state
  ↓
Interceptor attaches credentials/token if appropriate
  ↓
Guards improve navigation UX
  ↓
Backend enforces permissions on every protected API
```

## Auth state service

```ts
@Injectable({ providedIn: 'root' })
export class AuthState {
  private readonly _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);

  setUser(user: User) {
    this._user.set(user);
  }

  clear() {
    this._user.set(null);
  }
}
```

## Role/permission check

Prefer permissions over hard-coded role checks when requirements are granular:

```ts
can(permission: Permission): boolean {
  return this.user()?.permissions.includes(permission) ?? false;
}
```

Template:

```html
@if (auth.can('invoice.approve')) {
  <button (click)="approve()">Approve</button>
}
```

Again, hiding a button is UX, not backend security.

---

# 48. Angular Security

Security is a system concern, not one library setting.

## XSS

Angular escapes normal interpolated values.

```html
<div>{{ userControlledText }}</div>
```

Do not bypass sanitization casually.

High-risk APIs include intentionally trusting raw HTML/URLs. If you must use them, validate and sanitize at the correct trust boundary.

## Never build HTML from untrusted data unnecessarily

Bad idea:

```text
backend string → bypass security → innerHTML
```

Prefer structured data rendered through Angular templates.

## Authentication tokens

Avoid treating `localStorage` as a magical secure vault. Any script executing in your origin can potentially access it.

Depending on backend architecture, secure HttpOnly cookies can reduce token exposure to JavaScript, but CSRF/XSRF and same-site configuration must then be handled correctly.

## CSRF/XSRF

Understand:

- same-origin policy;
- cookies;
- SameSite;
- anti-CSRF tokens;
- backend framework protections.

Angular's HTTP stack has XSRF support for common cookie/header patterns, but your backend and deployment must be configured consistently.

## CSP

A strong Content Security Policy can reduce impact of script injection.

## Dependency security

Regularly audit dependencies:

```bash
npm audit
```

But do not blindly run automated major upgrades without reviewing breaking changes.

## Route guards are not security

Always repeat this rule:

```text
Frontend authorization = UX
Backend authorization  = security boundary
```

## Avoid leaking secrets

Anything bundled into browser JavaScript can be inspected by users.

Never put in Angular environment files:

- database passwords;
- private API keys;
- signing secrets;
- service-account credentials.

Public client identifiers are different from secrets.

---

# 49. Browser Storage

Options:

## `localStorage`

Persists until removed.

Good for:

- non-sensitive UI preferences;
- theme;
- dismissed hints.

## `sessionStorage`

Persists for a browser tab/session.

## IndexedDB

Better for larger structured offline data.

## Cookies

Can be sent with requests and have security attributes (`HttpOnly`, `Secure`, `SameSite`) when set by the server.

## Never store unnecessarily

Ask:

1. Why do I need persistence?
2. How long should it live?
3. Is it sensitive?
4. How is it invalidated?
5. What happens if another tab changes it?

---

# 50. Change Detection

Change detection is how Angular determines what template output must update.

Modern Angular increasingly relies on explicit reactive notifications such as Signals, component input changes, and framework event handling.

## `OnPush`

In enterprise Angular, you will see:

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList {}
```

Historically and conceptually, `OnPush` reduces unnecessary checking by making update triggers more explicit. Signal-based state works naturally with efficient rendering.

## Immutable updates

Prefer:

```ts
this.users.update(users => [
  ...users,
  newUser,
]);
```

Instead of silently mutating nested structures that other reactive logic may not detect as expected.

## Expensive template work

Avoid:

```html
@for (item of getSortedAndFilteredItems(); track item.id) {
  ...
}
```

Prefer derived state:

```ts
visibleItems = computed(() =>
  this.items()
    .filter(/* ... */)
    .sort(/* ... */)
);
```

---

# 51. Zoneless Angular

Historically Angular often used Zone.js to notice async activity and trigger checks. Modern Angular supports zoneless operation, relying on explicit framework notifications.

Benefits can include:

- less runtime overhead;
- smaller dependency footprint;
- fewer unnecessary change-detection triggers;
- clearer reactive behavior.

A zoneless-friendly application updates UI through Angular-known mechanisms such as:

- signals;
- template event listeners;
- input updates;
- explicit change detection notifications;
- async pipe/framework APIs.

## Migration mindset

Do not merely delete Zone.js from a large legacy app and hope everything works.

Audit code that depends on async callbacks mutating fields without notifying Angular.

Example legacy pattern that may require adaptation:

```ts
setTimeout(() => {
  this.plainField = 'done';
}, 1000);
```

Signal-friendly:

```ts
status = signal('waiting');

setTimeout(() => {
  this.status.set('done');
}, 1000);
```

---

# 52. Performance Optimization

Performance is not "use OnPush everywhere". Measure first.

## Main areas

### 1. Initial JavaScript size

Use:

- lazy routes;
- `@defer`;
- tree-shakable providers;
- careful dependency selection.

### 2. Rendering work

Use:

- stable `track` keys in `@for`;
- computed derived state;
- virtual scrolling for huge lists;
- pagination/server-side filtering when data is huge.

### 3. Network

Use:

- caching;
- HTTP compression;
- CDN;
- request deduplication;
- parallel independent requests;
- cancellation for stale requests.

### 4. Images

Use:

- correct dimensions;
- modern formats;
- responsive images;
- lazy loading;
- Angular image optimization tools where applicable.

### 5. Avoid memory leaks

Clean up:

- subscriptions;
- timers;
- DOM listeners;
- third-party widgets.

## Performance smell

```ts
get total() {
  return this.items
    .filter(...)
    .map(...)
    .reduce(...);
}
```

called repeatedly by a large template.

Prefer a computed signal or pre-computed observable pipeline.

## Server-side pagination

For 1,000,000 invoices, do not download everything into Angular and then paginate 10 rows locally.

Use API parameters:

```text
GET /api/invoices?page=3&pageSize=25&status=pending&sort=-createdAt
```

---

# 53. `@defer` and Deferrable Views

`@defer` delays loading code until needed.

```html
@defer {
  <app-heavy-chart />
}
```

With placeholder:

```html
@defer (on viewport) {
  <app-heavy-chart />
} @placeholder {
  <div class="chart-skeleton">Loading chart area...</div>
} @loading {
  <p>Loading...</p>
} @error {
  <p>Unable to load chart.</p>
}
```

## Common triggers

Conceptually:

- idle;
- viewport;
- interaction;
- hover;
- timer;
- condition.

## Scenario

Dashboard has:

```text
Header      20 KB
Summary     30 KB
Charts     400 KB
Audit tab  300 KB
```

If charts are below the fold and audit is rarely opened, defer them.

## Requirement

Dependencies that you want split/deferred must satisfy Angular's deferrable loading rules, commonly working best with standalone dependencies.

---

# 54. SSR, SSG, Hybrid Rendering, and Hydration

## CSR

Client-Side Rendering:

```text
Server sends app shell
        ↓
Browser downloads JS
        ↓
Angular runs
        ↓
UI appears
```

Good for authenticated internal applications where SEO is irrelevant and the app is highly interactive.

## SSR

Server-Side Rendering renders HTML for a request on the server.

```text
Request
  ↓
Angular server rendering
  ↓
HTML returned
  ↓
Browser displays HTML
  ↓
Angular hydrates interactive app
```

Useful for:

- SEO;
- faster content display;
- public content pages;
- route-specific server data needs.

## SSG / prerendering

Generate HTML at build time.

Excellent for content that changes infrequently:

- marketing pages;
- documentation;
- product information that can be regenerated;
- help pages.

## Hybrid rendering

Modern Angular can choose different rendering modes by route.

Example strategy:

```text
/                 → prerender
/about            → prerender
/products/:slug   → server render
/account           → client render
/admin             → client render
```

## Hydration

Hydration attaches Angular behavior to server-rendered DOM instead of throwing away and recreating all initial HTML.

Benefits:

- preserves server-rendered DOM;
- improves user-perceived startup;
- avoids unnecessary rerendering.

## Incremental hydration

Advanced Angular rendering can hydrate deferred parts of an application later, reducing startup work for large pages.

## Browser-only APIs

SSR code may run where `window`, `document`, or `localStorage` is unavailable.

Avoid direct top-level usage:

```ts
const theme = localStorage.getItem('theme');
```

Instead isolate browser behavior and execute only in a browser-compatible context.

---

# 55. Service Workers and PWA Concepts

A Progressive Web App can provide:

- offline shell caching;
- installation;
- asset caching;
- update handling;
- push capabilities when architecture supports it.

Angular's service worker package can be added to applications that benefit from these behaviors.

Before enabling offline caching, define data correctness rules.

For example, an approval system should not show stale critical approval status indefinitely without clear indicators.

Think about:

```text
What is safe to cache?
How stale may it become?
What happens on app update?
What happens when backend data changes?
```

---

# 56. Animations

Modern Angular supports `animate.enter` and `animate.leave`, which work with CSS classes or animation functions.

Example:

```html
@if (showPanel()) {
  <div animate.enter="fade-in" animate.leave="fade-out">
    Panel content
  </div>
}
```

```css
.fade-in {
  animation: fade-in 200ms ease-out;
}

.fade-out {
  animation: fade-out 150ms ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

The older `@angular/animations` package is deprecated in modern Angular, so prefer native CSS/new enter-leave APIs for new development.

## Accessibility

Respect reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 57. Accessibility

Accessibility is part of correctness.

## Prefer semantic HTML

Good:

```html
<button (click)="save()">Save</button>
```

Bad:

```html
<div (click)="save()">Save</div>
```

A real button provides:

- keyboard behavior;
- focus behavior;
- semantics;
- assistive-technology support.

## Labels

```html
<label for="email">Email</label>
<input id="email" type="email" />
```

## ARIA

Use ARIA to supplement semantic HTML, not replace it.

```html
<button
  type="button"
  [attr.aria-expanded]="open()"
  aria-controls="filters"
>
  Filters
</button>
```

## Keyboard support

Custom widgets need:

- focus management;
- keyboard navigation;
- escape behavior where relevant;
- clear focus indication.

## Dialogs

A correct modal needs more than `position: fixed`:

- focus trap;
- accessible name;
- escape handling;
- restore focus;
- appropriate dialog semantics.

Prefer a mature accessible component library when possible.

---

# 58. Internationalization

Internationalization (i18n) prepares an application for different locales/languages.

Concerns include:

- translated text;
- dates;
- numbers;
- currencies;
- pluralization;
- directionality;
- locale-specific formats.

Do not concatenate sentences from fragments:

Bad:

```html
{{ count }} + ' invoices found'
```

Different languages may require different grammar/order.

Use translation-aware messages and locale formatting.

## Currency

```html
{{ amount | currency:'INR' }}
```

But remember formatting locale and business currency are separate decisions.

---

# 59. Testing Strategy

A healthy application uses multiple test layers.

```text
Many      unit tests
Some      component/integration tests
Fewer     end-to-end tests
```

## Unit test

Tests a small unit quickly.

Example:

```text
TaxService.calculateTax()
```

## Component test

Tests component behavior and rendered DOM.

## Integration test

Tests multiple Angular pieces together.

## E2E test

Tests the application through the browser as a user would.

### What to test

Test behavior that matters:

- calculations;
- validation;
- permission rules;
- navigation;
- API error states;
- important UI interactions.

Avoid brittle tests that merely repeat implementation details.

---

# 60. Component Testing

Conceptual TestBed example:

```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [UserCard],
  }).compileComponents();
});
```

Create fixture:

```ts
const fixture = TestBed.createComponent(UserCard);
const component = fixture.componentInstance;
fixture.detectChanges();
```

Query DOM:

```ts
const element: HTMLElement = fixture.nativeElement;
expect(element.querySelector('h2')?.textContent).toContain('Asha');
```

## Test inputs

Set input through the component reference APIs used by your Angular testing version rather than directly bypassing Angular input semantics when you specifically need to test change behavior.

## Test outputs

Listen/subscribe and verify the event emitted when the user performs the action.

## Prefer user-visible behavior

Instead of testing:

```text
private variable changed from false → true
```

test:

```text
clicking Expand displays details
```

---

# 61. Service and HTTP Testing

## Pure service

```ts
const service = new TaxService();
expect(service.calculateTax(100, 0.18)).toBe(18);
```

## Service with DI

Use TestBed and provide dependencies/test doubles.

## HTTP tests

Angular's HTTP testing utilities let you assert:

- URL;
- HTTP method;
- body;
- headers;
- response handling;
- errors.

Conceptual flow:

```text
call service method
      ↓
expect one outgoing request
      ↓
assert request properties
      ↓
flush mock response
      ↓
assert result
```

Never require a real backend for normal unit tests.

---

# 62. Router and Form Testing

## Router testing

Test:

- navigation to correct component;
- guard redirect;
- route parameter handling;
- resolver/error behavior.

Modern Angular provides router testing helpers/harnesses that can navigate and inspect the rendered route.

## Form testing

Test:

```text
initial state
required validation
invalid input
valid input
cross-field rules
submit behavior
server validation display
```

Signal Forms can often test schema/field logic directly without rendering a whole component, which keeps tests focused and fast.

---

# 63. End-to-End Testing

E2E test tools commonly used in modern frontend projects include Playwright and Cypress. Angular does not require you to use only one.

Test a small set of high-value journeys:

```text
login
create entity
edit entity
approval flow
critical report
logout
```

Avoid building thousands of slow E2E tests for logic that could be tested at a lower level.

## Example scenario

```text
Given user is Finance Approver
When user opens pending invoice
And clicks Approve
Then status becomes Approved
And approval is visible after refresh
```

This verifies the system flow rather than a single function.

---

# 64. Configuration and Environments

Frontend builds often need different public configuration:

- API base URL;
- production flag;
- analytics ID;
- feature flags;
- public identity-provider client ID.

Do **not** store secrets in frontend configuration.

A build-time environment file may look like:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://dev-api.example.com',
};
```

Production:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com',
};
```

For deployments where one build must run in many environments, consider runtime configuration loaded before application bootstrap instead of rebuilding for every environment.

---

# 65. Building for Production

Run:

```bash
ng build --configuration production
```

The output directory is configured by the Angular builder, often under `dist/`.

Check:

- build succeeds with no unexpected warnings;
- budgets are reasonable;
- source maps follow security/operations policy;
- environment configuration is correct;
- lazy chunks load;
- deep links work after deployment;
- API/CORS settings are correct;
- CSP and security headers are configured;
- error monitoring works.

## Bundle budgets

Set budgets so accidental size growth fails/warns in CI rather than silently shipping.

## CI pipeline concept

```text
Install dependencies
      ↓
Lint / format checks
      ↓
Unit tests
      ↓
Production build
      ↓
Security/license checks
      ↓
Deploy to environment
      ↓
Smoke tests
```

---

# 66. Deployment: Nginx, Apache, IIS, and Static Hosting

A client-side Angular router requires the web server to return the app's `index.html` for application routes that are not real static files.

Otherwise:

```text
User opens /users/42 directly
        ↓
Web server searches for physical /users/42
        ↓
404
```

Instead:

```text
/users/42
   ↓
rewrite to /index.html
   ↓
Angular Router handles /users/42
```

## Nginx concept

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Apache concept

Use rewrite rules to serve `index.html` for non-file/non-directory routes.

## IIS concept

Use URL Rewrite with a fallback to `/index.html` for routes that are not physical files/directories.

Conceptual `web.config` rule:

```xml
<rule name="Angular Routes" stopProcessing="true">
  <match url=".*" />
  <conditions logicalGrouping="MatchAll">
    <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
    <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
  </conditions>
  <action type="Rewrite" url="/index.html" />
</rule>
```

If the application is hosted under a subpath such as:

```text
https://example.com/hr/
```

configure base paths and rewrite rules accordingly.

## API proxy separation

Common deployment:

```text
/           → Angular static files
/api/*      → backend application
```

Do not accidentally rewrite API requests to Angular's `index.html`.

---

# 67. Enterprise Project Architecture

Architecture should make change safer, not merely create folders.

## Suggested layers

```text
UI / Feature pages
       ↓
Feature state / facade
       ↓
Domain/application logic
       ↓
API / infrastructure services
       ↓
Backend
```

Not every application needs all layers.

## Example invoice feature

```text
features/invoices/
├── pages/
│   ├── invoice-list/
│   └── invoice-details/
├── components/
│   ├── invoice-filter/
│   ├── invoice-table/
│   └── approval-panel/
├── data-access/
│   └── invoice.api.ts
├── state/
│   └── invoice.state.ts
├── models/
│   ├── invoice.model.ts
│   └── invoice.dto.ts
├── invoice.routes.ts
└── utils/
```

## Boundary rule

A `UserCard` should not know:

- API base URL;
- how authentication tokens work;
- database field names;
- how routing for another feature works.

Keep responsibilities local.

---

# 68. Feature-Based Folder Structure

Avoid organizing the whole app only by technical type:

```text
components/
services/
models/
pipes/
```

At scale, this becomes hard to navigate.

Prefer:

```text
features/
  users/
    pages/
    components/
    data-access/
    state/
    models/
  invoices/
    pages/
    components/
    data-access/
    state/
    models/
```

Technical categories can exist **inside a business feature**.

## Co-location

Keep files that change together near each other.

Example:

```text
invoice-table/
├── invoice-table.ts
├── invoice-table.html
├── invoice-table.css
└── invoice-table.spec.ts
```

---

# 69. Reusable UI and Smart/Dumb Component Patterns

The old terms "smart/dumb" describe a useful idea, though real applications are more flexible.

## Page/container component

Knows:

- routing;
- feature state;
- API orchestration;
- permissions.

## Presentational component

Knows:

- inputs;
- outputs;
- how to render one reusable UI responsibility.

Example:

```text
InvoiceListPage
  │
  ├── data/state/route
  │
  └── InvoiceTable
         ├── input: invoices
         ├── input: loading
         └── output: rowSelected
```

## Do not over-separate

A component used once with 12 inputs and 15 outputs may be worse than keeping that small piece in the page.

Extract components when they improve:

- reuse;
- readability;
- testing;
- isolation;
- ownership.

---

# 70. Practical CRUD Scenario

Build an employee manager.

## Model

```ts
export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  active: boolean;
}
```

## API

```ts
@Injectable({ providedIn: 'root' })
export class EmployeeApi {
  private http = inject(HttpClient);
  private baseUrl = '/api/employees';

  list() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  get(id: number) {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  create(payload: Omit<Employee, 'id'>) {
    return this.http.post<Employee>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<Employee>) {
    return this.http.patch<Employee>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

## State

```ts
@Injectable()
export class EmployeeState {
  private api = inject(EmployeeApi);

  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.api.list().pipe(
      finalize(() => this.loading.set(false)),
    ).subscribe({
      next: employees => this.employees.set(employees),
      error: () => this.error.set('Unable to load employees.'),
    });
  }
}
```

## Page

```ts
@Component({
  providers: [EmployeeState],
  template: `
    <h1>Employees</h1>

    @if (state.loading()) {
      <p>Loading...</p>
    } @else if (state.error()) {
      <p>{{ state.error() }}</p>
    } @else {
      @for (employee of state.employees(); track employee.id) {
        <app-employee-card [employee]="employee" />
      } @empty {
        <p>No employees.</p>
      }
    }
  `,
})
export class EmployeeListPage {
  readonly state = inject(EmployeeState);

  constructor() {
    this.state.load();
  }
}
```

### What this scenario teaches

```text
Model
API service
DI
Signals
loading/error state
@for
@empty
feature-scoped state
component composition
```

---

# 71. Search, Debounce, Filter, Sort, and Pagination Scenario

Requirement:

> Search invoices by vendor, filter status, sort by date, and paginate results without sending a request for every keystroke.

## Signals for controls

```ts
query = signal('');
status = signal<InvoiceStatus | 'all'>('all');
page = signal(1);
pageSize = signal(25);
```

Convert search to RxJS for debounce:

```ts
query$ = toObservable(this.query);

results$ = this.query$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.api.search({
    query,
    status: this.status(),
    page: this.page(),
    pageSize: this.pageSize(),
  }))
);
```

For all filters to trigger reactively, combine observable streams or build a signal/resource-based request parameter model.

## API request model

```ts
interface InvoiceSearchRequest {
  query: string;
  status: InvoiceStatus | 'all';
  page: number;
  pageSize: number;
  sort?: string;
}
```

## Response model

```ts
interface PageResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
```

## Important behaviors

- when query changes → reset page to 1;
- cancel old search request;
- put filters in URL if users should share/bookmark them;
- show empty state separately from error state;
- debounce text input but not necessarily status dropdown;
- use server pagination for large data.

---

# 72. File Upload Scenario

HTML:

```html
<input type="file" (change)="selectFile($event)" />
<button (click)="upload()" [disabled]="!file() || uploading()">
  Upload
</button>
```

Component:

```ts
file = signal<File | null>(null);
uploading = signal(false);

selectFile(event: Event) {
  const input = event.target as HTMLInputElement;
  this.file.set(input.files?.[0] ?? null);
}
```

Service:

```ts
uploadInvoice(file: File) {
  const body = new FormData();
  body.append('file', file);

  return this.http.post<UploadResult>('/api/invoices/upload', body, {
    reportProgress: true,
    observe: 'events',
  });
}
```

## Validate on both sides

Frontend can check:

- extension;
- MIME type;
- file size.

Backend must independently validate:

- actual file type/content;
- size;
- malware/security policy;
- storage path;
- authorization.

Never trust a filename extension alone.

---

# 73. Dashboard Scenario

Requirements:

- summary cards immediately;
- heavy charts below the fold;
- date filter;
- API failures isolated per widget.

Architecture:

```text
DashboardPage
├── DashboardFilters
├── SummaryCards
├── RevenueChart        (@defer on viewport)
├── StatusChart         (@defer on viewport)
└── RecentActivity
```

State:

```ts
period = signal<'week' | 'month' | 'quarter'>('month');
summary = resource(/* based on period */);
```

Derived:

```ts
completionRate = computed(() => {
  const s = this.summary.value();
  if (!s || s.total === 0) return 0;
  return s.completed / s.total;
});
```

## Important dashboard lesson

Do not create one API endpoint because "fewer calls is always faster" or many endpoints because "microservices". Design backend/frontend data boundaries around:

- independent loading;
- caching;
- authorization;
- failure isolation;
- payload size;
- backend cost.

---

# 74. Role-Based Workflow Scenario

Suppose an invoice can be:

```ts
type InvoiceStatus =
  | 'draft'
  | 'submitted'
  | 'manager_pending'
  | 'finance_pending'
  | 'approved'
  | 'rejected';
```

Permissions:

```ts
type Permission =
  | 'invoice.view'
  | 'invoice.edit'
  | 'invoice.submit'
  | 'invoice.managerApprove'
  | 'invoice.financeApprove';
```

UI:

```html
@if (permissions.can('invoice.managerApprove') && invoice().status === 'manager_pending') {
  <button (click)="approveAsManager()">Approve</button>
}
```

Better still, derive allowed actions:

```ts
availableActions = computed(() => {
  const invoice = this.invoice();
  const result: InvoiceAction[] = [];

  if (invoice.status === 'manager_pending' && this.permissions.can('invoice.managerApprove')) {
    result.push('approve', 'reject');
  }

  return result;
});
```

## Backend rule

The backend must verify:

```text
current user permission
current invoice state
allowed transition
business limits
concurrency/version
```

The frontend merely presents valid actions.

## State machine thinking

Model workflow transitions explicitly:

```text
Draft → Submitted → Manager Pending → Finance Pending → Approved
                    ↘ Rejected
                                      ↘ Rejected
```

This is clearer than dozens of unrelated boolean flags.

---

# 75. Optimistic UI and Caching Scenario

Optimistic UI updates before server confirmation.

Example: favorite an item.

```ts
favorite(id: number) {
  const before = this.items();

  this.items.update(items =>
    items.map(item =>
      item.id === id ? { ...item, favorite: true } : item
    )
  );

  this.api.favorite(id).subscribe({
    error: () => {
      this.items.set(before);
      this.toast.error('Unable to save favorite.');
    },
  });
}
```

## Use optimistic UI for

- low-risk reversible actions;
- favorites;
- likes;
- reorder actions;
- lightweight status changes with clear rollback.

Be cautious for:

- money transfer;
- irreversible approvals;
- inventory reservation;
- legally significant actions.

For those, confirmed server state should dominate.

---

# 76. WebSocket / Real-Time Concepts

Real-time applications may receive server events through WebSocket/SSE or another push mechanism.

Examples:

- chat;
- live notifications;
- job progress;
- stock/market display;
- live approval queue;
- collaborative editing.

Architecture:

```text
Backend event
    ↓
WebSocket/SSE client service
    ↓
RxJS stream
    ↓
feature state
    ↓
Angular components
```

Do not put raw socket setup separately in every component.

Service should handle:

- connection;
- reconnect/backoff;
- authentication;
- event decoding;
- cleanup;
- heartbeat if needed.

Feature state should decide what an event means to business data.

---

# 77. Error Handling Architecture

Errors occur at different layers.

## 1. Validation error

Example:

```text
Invoice number is required
```

Display next to field.

## 2. Business-rule error

Example:

```text
Invoice cannot be approved because GIR does not match.
```

Display actionable business message.

## 3. Authorization error

```text
You do not have permission to approve this invoice.
```

## 4. Not found

```text
Invoice no longer exists.
```

## 5. Conflict

Example HTTP 409:

```text
Another user already changed this record.
```

Offer refresh/reload behavior.

## 6. Server/unexpected error

```text
Something went wrong. Reference ID: ABC-123
```

Log technical detail, show safe user-facing message.

## Error model

Normalize backend errors:

```ts
interface AppError {
  type: 'validation' | 'business' | 'auth' | 'network' | 'server';
  message: string;
  fieldErrors?: Record<string, string[]>;
  correlationId?: string;
}
```

---

# 78. Logging and Observability

Production frontend debugging needs more than `console.log`.

Capture useful telemetry such as:

- uncaught errors;
- failed navigation;
- HTTP failure rates;
- performance timings;
- user-safe breadcrumb events;
- correlation/request IDs.

## Do not log sensitive data

Avoid logging:

- passwords;
- auth tokens;
- full payment details;
- sensitive personal data;
- confidential document contents.

## Correlation IDs

A backend may return/request a correlation ID:

```text
Browser error report: requestId=abc123
Backend logs:          requestId=abc123
```

This makes cross-system troubleshooting much easier.

---

# 79. Angular Coding Standards

## Prefer explicit types at boundaries

API response:

```ts
getUsers(): Observable<UserDto[]> { ... }
```

## Avoid `any`

Use:

- interfaces;
- generics;
- `unknown` + validation.

## Keep functions small

Bad:

```ts
submit() {
  // 200 lines
}
```

Better:

```ts
submit() {
  if (!this.validate()) return;
  const request = this.buildRequest();
  this.save(request);
}
```

## Name booleans clearly

Good:

```ts
isLoading
hasPermission
canApprove
shouldShowBanner
```

## Use domain names

Good:

```ts
approveInvoice()
loadVendorDetails()
calculateNetAmount()
```

Weak:

```ts
doAction()
processData()
handleStuff()
```

## Keep templates readable

If a template condition becomes:

```html
@if (a() && !b() && (c() || d()) && user()?.x?.y === 'Z')
```

extract a named derived value:

```ts
canApprove = computed(() => /* business condition */);
```

## Use readonly signals/dependencies

```ts
readonly loading = signal(false);
private readonly api = inject(InvoiceApi);
```

## Avoid duplicated derived state

Prefer `computed`.

## Keep backend DTO mapping explicit

A backend may expose:

```json
{
  "invd_net_amnt": 12500,
  "invd_vndr_name": "ABC Ltd"
}
```

Map it to clean frontend domain names:

```ts
interface Invoice {
  netAmount: number;
  vendorName: string;
}
```

This isolates backend naming quirks.

---

# 80. Common Anti-Patterns

## 1. Subscribing inside subscribing

Bad:

```ts
this.userApi.getUser().subscribe(user => {
  this.roleApi.getRoles(user.id).subscribe(roles => {
    // nested
  });
});
```

Use RxJS composition:

```ts
this.userApi.getUser().pipe(
  switchMap(user => this.roleApi.getRoles(user.id))
).subscribe();
```

## 2. Giant components

Split by responsibility.

## 3. Global store for every checkbox

Keep local state local.

## 4. Service named `CommonService`

Split by domain responsibility.

## 5. Business logic in template

Move to computed state/service.

## 6. Calling API from pipe

Pipes should not perform server requests.

## 7. Trusting route guard as security

Backend must authorize.

## 8. Manual subscription without cleanup

Prefer:

- async pipe;
- `toSignal`;
- `takeUntilDestroyed()`;
- framework-managed reactive APIs.

## 9. Mutating input objects

Use explicit data ownership.

## 10. Exposing secrets in environment files

Browser bundles are visible to users.

## 11. Downloading entire DB table to filter locally

Use server-side pagination/filtering.

## 12. `setTimeout` to "fix" change detection

Understand the state/lifecycle problem instead.

## 13. Boolean explosion

Bad:

```ts
isDraft
isPending
isApproved
isRejected
```

Prefer:

```ts
status: 'draft' | 'pending' | 'approved' | 'rejected'
```

## 14. Duplicate API calls from multiple subscriptions

Understand cold observables and use shared state/caching when needed.

## 15. Ignoring loading/empty/error states

Every server-driven UI should think in at least these states:

```text
initial
loading
success with data
success empty
error
refreshing
```

---

# 81. Legacy Angular: NgModules and Older Syntax

Modern Angular defaults to standalone architecture, but older enterprise projects frequently use NgModules.

## NgModule

```ts
@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class UserModule {}
```

Key properties:

```text
declarations → components/directives/pipes owned by module
imports      → other modules
exports      → things made available outside
providers    → DI providers
bootstrap    → root component in classic AppModule bootstrap
```

## Classic root module

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Modern equivalent is usually `bootstrapApplication()` with standalone configuration.

## Legacy structural directives

Older code:

```html
<div *ngIf="isVisible">...</div>
<li *ngFor="let user of users; trackBy: trackUser">...</li>
```

Modern code:

```html
@if (isVisible) {
  <div>...</div>
}

@for (user of users; track user.id) {
  <li>...</li>
}
```

## Decorator inputs/outputs

Older/common enterprise style:

```ts
@Input() user!: User;
@Output() selected = new EventEmitter<User>();
```

Modern API:

```ts
user = input.required<User>();
selected = output<User>();
```

## `ViewChild`

Older style:

```ts
@ViewChild('input') input!: ElementRef;
```

Modern signal query APIs are preferred in new code where applicable.

## Constructor injection

Still valid:

```ts
constructor(private api: UserApi) {}
```

Modern code often uses:

```ts
private readonly api = inject(UserApi);
```

You must understand both styles.

---

# 82. Migrating Older Angular Applications

Do not rewrite a stable enterprise app just to make the code look modern.

Use incremental migration.

## Recommended order

```text
1. Upgrade Angular versions safely
2. Fix build/test issues
3. Improve strict TypeScript
4. Convert leaf features to standalone
5. Adopt modern control flow
6. Introduce signals where they simplify state
7. Convert provider/guard/interceptor patterns when useful
8. Evaluate zoneless compatibility
9. Improve lazy loading / @defer
10. Remove deprecated APIs
```

## Standalone migration

Angular provides migration tooling to convert suitable components/modules incrementally.

## Do not combine every migration at once

Bad migration branch:

```text
Angular 16 → 22
NgModules → standalone
RxJS state → signals
all forms rewritten
all CSS framework replaced
folder architecture rewritten
SSR added
```

When it fails, you will not know which change caused the issue.

Prefer small reviewable steps.

---

# 83. Common Angular Errors and Debugging

## `ExpressionChangedAfterItHasBeenCheckedError` / NG0100

Often indicates state changed during/after a check in a way Angular considers inconsistent in development mode.

Common causes:

- child changes parent state during lifecycle;
- mutation in `ngAfterViewInit`;
- template method changes state;
- async/sync sequencing problem.

Do not use `setTimeout(..., 0)` as the automatic solution. Fix the data flow/lifecycle ownership.

## `NullInjectorError`

Meaning:

```text
Angular cannot resolve a dependency token.
```

Check:

- provider registered?
- correct scope?
- correct token?
- library provider function called?

## Unknown element

Possible causes:

- standalone component not imported;
- module does not export/import component;
- selector misspelled.

## Unknown pipe/directive

Import the standalone pipe/directive or corresponding module.

## `Cannot read properties of undefined`

Usually JavaScript/application data problem, not Angular-specific.

Check:

- async data not loaded yet;
- optional property missing;
- wrong API model;
- incorrect lifecycle assumption.

Use explicit loading state rather than spraying optional chaining everywhere.

## Circular dependency

Example:

```text
AuthService → UserService → AuthService
```

Refactor shared responsibility into a lower-level service/token.

## Route refresh returns 404

Web server lacks SPA fallback rewrite to `index.html`.

## CORS error

CORS is primarily a backend/server policy. Do not try to "fix CORS" by adding random headers in Angular.

## `inject()` outside injection context

Move it to:

- class field;
- provider factory;
- guard/interceptor;
- a function executed through a valid injection context.

---

# 84. Angular DevTools and Debugging Workflow

Use a repeatable debugging process.

## 1. Reproduce consistently

Write exact steps.

## 2. Check browser console

Look at first meaningful error, not only the last cascade.

## 3. Network tab

Check:

```text
URL
method
status
request payload
response body
headers
timing
redirects
```

## 4. Angular DevTools

Inspect component tree, state, and performance-related information supported by the current tool.

## 5. Add targeted logging

Do not print entire giant objects everywhere.

Good:

```ts
console.debug('Invoice load failed', {
  invoiceId: id,
  status: error.status,
});
```

## 6. Isolate layer

Ask:

```text
Template problem?
Component state problem?
Service problem?
HTTP/backend problem?
Router problem?
CSS/layout problem?
Build/deployment problem?
```

## 7. Reproduce with smallest case

Remove unrelated complexity.

---

# 85. Design Patterns Useful in Angular

## Facade

A component talks to one feature facade instead of coordinating many services directly.

```text
InvoicePage
    ↓
InvoiceFacade
  ├── InvoiceApi
  ├── PermissionService
  └── InvoiceState
```

Useful in complex features; unnecessary for tiny ones.

## Adapter

Convert external API model to internal model.

```ts
function mapInvoice(dto: InvoiceDto): Invoice {
  return {
    id: dto.invd_id,
    vendorName: dto.invd_vndr_name,
    amount: Number(dto.invd_net_amnt),
  };
}
```

## Strategy

Choose behavior at runtime.

Example:

```text
TaxCalculator
  ├── DomesticTaxStrategy
  ├── ExportTaxStrategy
  └── ExemptTaxStrategy
```

## Observer

RxJS observables and Angular reactive primitives embody observer/reactivity concepts.

## State machine

Great for workflows:

```text
Draft → Submitted → Approved
                 ↘ Rejected
```

## Repository/data-access abstraction

Frontend "repository" or API class can isolate transport details from feature state.

## Dependency inversion

Use tokens/interfaces/abstractions when alternate implementations are valuable, especially for libraries/testability.

## Composition over inheritance

Prefer composing components/services/directives instead of deep component inheritance hierarchies.

---

# 86. Angular Interview Questions

## Beginner

### What is Angular?
A full TypeScript-based web framework with components, templates, routing, DI, forms, HTTP, reactive APIs, build tooling, and more.

### What is a component?
A class plus template and metadata representing a reusable UI unit.

### What is interpolation?
A component-to-template binding:

```html
{{ value }}
```

### Property vs event binding?

```html
[property]="value"   <!-- component → view -->
(event)="handler()"  <!-- view → component -->
```

### What is two-way binding?
Synchronizes value in both directions, commonly represented with `[(...)]`.

### What is a service?
A reusable injectable class for non-visual responsibilities such as API access, state, or calculations.

### What is DI?
A mechanism where dependencies are supplied by an injector rather than manually constructed.

## Intermediate

### Signals vs Observables?
Signals model current reactive state with synchronous reads. Observables model streams of values over time and provide rich async composition. Angular applications often use both.

### `computed()` vs `effect()`?
`computed` derives state; `effect` performs side effects.

### `switchMap` vs `mergeMap`?
`switchMap` switches to the newest inner observable and cancels previous subscriptions. `mergeMap` allows concurrent inner observables.

### Why lazy loading?
Reduce initial JavaScript by loading feature code when needed.

### Guard vs resolver?
Guard controls whether navigation proceeds; resolver obtains data needed for a route.

### Reactive vs template-driven forms?
Reactive Forms define a typed form model in TypeScript; template-driven forms rely more on template directives and suit simpler forms.

### What is `OnPush`?
A change-detection strategy that makes update checks more targeted. Modern signal-driven state works well with efficient rendering.

## Advanced

### Why can a route guard not enforce security?
Because browser code is controlled by the client; backend APIs must enforce permissions independently.

### What is hierarchical DI?
Providers may exist at different injector scopes. Resolution walks the injector hierarchy, enabling global and feature/local service lifetimes.

### What is hydration?
Reuse server-rendered DOM when making an SSR page interactive on the client.

### What is zoneless Angular?
Angular operation without relying on Zone.js as the broad async-change signal; state changes notify Angular through explicit framework/reactive mechanisms.

### What problem does `linkedSignal()` solve?
Writable state that is dependent on another reactive source and should reset/recompute meaningfully when that source changes.

### `@defer` vs route lazy loading?
Route lazy loading splits code by navigation boundaries. `@defer` splits parts inside a template/page and loads them based on triggers.

### How do you prevent duplicate HTTP calls?
Depends on cause: centralize state, cache results, share streams where appropriate, avoid accidental multiple subscriptions, or model request state with a resource/store.

### How would you structure a large app?
Use feature boundaries, route-level lazy loading, dedicated data access/state layers where useful, reusable shared UI, core infrastructure, strict types, tests, and clear dependency direction.

---

# 87. Practice Projects

Build in increasing difficulty.

## Project 1 — Todo App

Learn:

- components;
- signals;
- `@for`;
- events;
- localStorage;
- basic forms.

Features:

```text
add todo
toggle complete
delete
filter
persist locally
```

## Project 2 — Employee CRUD

Learn:

- routing;
- HttpClient;
- Reactive Forms;
- validation;
- services;
- interceptors.

## Project 3 — Product Catalog

Learn:

- search;
- debounce;
- pagination;
- route params;
- lazy loading;
- caching.

## Project 4 — Admin Portal

Learn:

- authentication;
- role/permission model;
- nested routes;
- reusable table;
- dialogs;
- global error handling.

## Project 5 — Invoice Approval System

Learn:

- dynamic forms;
- file upload;
- business workflows;
- audit history;
- multi-level approvals;
- guards;
- state machines;
- optimistic vs confirmed actions;
- complex error handling.

## Project 6 — Public Commerce Site

Learn:

- SSR/SSG;
- hydration;
- SEO;
- defer;
- image optimization;
- performance budgets.

## Project 7 — Real-Time Operations Dashboard

Learn:

- WebSocket/SSE;
- RxJS;
- signals;
- resource cleanup;
- charts;
- progressive rendering.

---

# 88. 12-Week Learning Roadmap

## Week 1 — JavaScript + TypeScript foundation

Learn:

- ES modules;
- arrays/objects;
- promises;
- `async/await`;
- classes;
- interfaces;
- unions;
- generics.

Build: TypeScript console CRUD.

## Week 2 — Components and templates

Learn:

- components;
- standalone imports;
- interpolation;
- bindings;
- events;
- control flow.

Build: profile/dashboard UI.

## Week 3 — Component communication

Learn:

- input;
- output;
- model;
- content projection;
- queries;
- lifecycle.

Build: reusable card/modal/table.

## Week 4 — Services and DI

Learn:

- injectables;
- `inject()`;
- providers;
- scopes;
- tokens;
- hierarchical DI.

Build: mock employee service + feature state.

## Week 5 — Signals

Learn:

- signal;
- computed;
- effect;
- linkedSignal;
- resources;
- state ownership.

Build: shopping cart.

## Week 6 — RxJS

Learn:

- observable;
- subject;
- map;
- switchMap;
- concatMap;
- mergeMap;
- exhaustMap;
- catchError;
- combineLatest;
- forkJoin.

Build: live search page.

## Week 7 — HTTP and API architecture

Learn:

- CRUD;
- DTOs;
- interceptors;
- retry;
- errors;
- caching.

Build: employee API frontend.

## Week 8 — Routing

Learn:

- params;
- query params;
- lazy loading;
- guards;
- resolvers;
- nested routes.

Build: admin portal shell.

## Week 9 — Forms

Learn all three:

- template-driven;
- Reactive Forms;
- Signal Forms.

Build: multi-section invoice form.

## Week 10 — Testing + security

Learn:

- component tests;
- service tests;
- HTTP tests;
- router tests;
- XSS;
- auth;
- backend authorization boundary.

## Week 11 — Performance + rendering

Learn:

- lazy loading;
- `@defer`;
- change detection;
- zoneless concepts;
- SSR;
- hydration;
- SSG.

## Week 12 — Enterprise capstone

Build one complete system:

```text
Authentication
Dashboard
CRUD feature
Search/filter/pagination
Complex form
File upload
Role-based actions
Error handling
Tests
Production build
Deployment
```

Then review this handbook again. Concepts will make much more sense after the capstone.

---

# 89. Angular Cheat Sheet

## Component

```ts
@Component({
  selector: 'app-example',
  imports: [],
  template: `...`,
})
export class Example {}
```

## Signal

```ts
count = signal(0);
count();
count.set(1);
count.update(v => v + 1);
```

## Computed

```ts
total = computed(() => this.price() * this.qty());
```

## Effect

```ts
effect(() => console.log(this.count()));
```

## Input

```ts
user = input.required<User>();
```

## Output

```ts
saved = output<User>();
this.saved.emit(user);
```

## Two-way component model

```ts
value = model('');
```

```html
<app-editor [(value)]="value" />
```

## If

```html
@if (condition) {
  ...
} @else {
  ...
}
```

## For

```html
@for (item of items(); track item.id) {
  ...
} @empty {
  No items
}
```

## Switch

```html
@switch (status()) {
  @case ('ok') { ... }
  @default { ... }
}
```

## Let

```html
@let total = price() * quantity();
```

## Inject

```ts
private api = inject(UserApi);
```

## HttpClient

```ts
this.http.get<User[]>('/api/users');
```

## Functional interceptor

```ts
export const interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
```

## Route

```ts
{ path: 'users/:id', component: UserPage }
```

## Lazy route

```ts
{
  path: 'reports',
  loadComponent: () => import('./reports').then(m => m.ReportsPage),
}
```

## Guard

```ts
export const authGuard: CanActivateFn = () => true;
```

## Reactive Form

```ts
form = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
});
```

## RxJS search

```ts
search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => api.search(term))
);
```

## Subscription cleanup

```ts
observable$.pipe(
  takeUntilDestroyed()
).subscribe();
```

## Defer

```html
@defer (on viewport) {
  <app-chart />
}
```

---

# 90. Glossary

**Angular CLI** — command-line tooling for creating, developing, building, testing, and updating Angular projects.

**Binding** — connection between component state and template/DOM.

**Component** — Angular UI building block containing behavior, template, and metadata.

**Computed Signal** — read-only derived signal calculated from other reactive state.

**CSR** — Client-Side Rendering; the browser renders the application after JavaScript loads.

**Dependency Injection (DI)** — system for supplying dependencies to classes/functions.

**Directive** — behavior attached to an element/component.

**DTO** — Data Transfer Object representing data at an API boundary.

**Effect** — reactive side-effect function that reruns when tracked signals change.

**Guard** — router function controlling navigation.

**Hydration** — making server-rendered Angular DOM interactive while reusing the existing DOM.

**InjectionToken** — typed DI key for values/abstractions that are not naturally class tokens.

**Interceptor** — middleware-like HTTP function that can inspect/modify requests/responses.

**Lazy Loading** — loading feature code only when needed.

**linkedSignal** — writable reactive state linked to another signal-derived source.

**NgModule** — older/legacy Angular organizational and dependency configuration unit still supported and common in existing codebases.

**Observable** — RxJS stream of values over time.

**OnPush** — component change-detection strategy emphasizing targeted update triggers.

**Pipe** — display-oriented value transformation.

**Provider** — DI configuration describing how to create/obtain a dependency.

**Reactive Forms** — form API based on explicit `FormControl`, `FormGroup`, and related objects.

**Resolver** — router data-loading function executed as part of navigation.

**Resource** — signal-oriented abstraction for asynchronous data and its status.

**Route** — mapping from URL pattern to application behavior/component.

**RxJS** — reactive programming library heavily used in Angular for asynchronous streams.

**Service** — injectable class containing reusable non-view logic.

**Signal** — reactive value that Angular can track precisely.

**Signal Forms** — signal-based Angular form system built around a writable model signal and typed form-field tree.

**SPA** — Single-Page Application.

**SSG** — Static Site Generation / prerendering at build time.

**SSR** — Server-Side Rendering per request.

**Standalone Component** — component that directly declares/imports its dependencies without requiring declaration in an NgModule.

**Tree Shaking** — build-time elimination of unused code.

**Zoneless** — running Angular without using Zone.js as the broad async change-notification mechanism.

---

# 91. Official References

Use these as the source of truth when APIs evolve:

- Angular documentation: https://angular.dev/
- Angular version/release schedule: https://angular.dev/reference/releases
- Version compatibility: https://angular.dev/reference/versions
- Angular CLI: https://angular.dev/cli
- Components: https://angular.dev/guide/components
- Templates: https://angular.dev/guide/templates
- Signals: https://angular.dev/guide/signals
- Dependency Injection: https://angular.dev/guide/di
- Routing: https://angular.dev/guide/routing
- HTTP: https://angular.dev/guide/http
- Forms: https://angular.dev/guide/forms
- Signal Forms: https://angular.dev/guide/forms/signals/overview
- SSR / Hybrid Rendering: https://angular.dev/guide/ssr
- Hydration: https://angular.dev/guide/hydration
- Zoneless Angular: https://angular.dev/guide/zoneless
- Animations: https://angular.dev/guide/animations
- Testing: https://angular.dev/guide/testing
- Update command: https://angular.dev/cli/update

---
---

# 92. Advanced Template Primitives: `ng-template`, `ng-container`, and Outlets

These primitives are common in reusable Angular libraries and enterprise UIs.

## `ng-container`

`ng-container` groups Angular template logic without adding an unnecessary DOM element.

```html
<ng-container>
  <p>These nodes do not need an extra wrapper div.</p>
  <button>Action</button>
</ng-container>
```

This matters when extra DOM would break CSS Grid, Flexbox, table structure, or semantics.

## `ng-template`

`ng-template` defines template content that is not rendered immediately by itself.

```html
<ng-template #emptyState>
  <p>No records found.</p>
</ng-template>
```

It can later be rendered by Angular APIs or passed to reusable components.

## Template context

A reusable template can receive context data.

```html
<ng-template #row let-user>
  <strong>{{ user.name }}</strong>
</ng-template>
```

This pattern is useful in advanced reusable tables where the parent controls how a cell is rendered.

## `NgTemplateOutlet`

Conceptually:

```html
<ng-container
  *ngTemplateOutlet="rowTemplate; context: { $implicit: user }"
/>
```

Use cases:

- configurable tables;
- reusable list renderers;
- custom empty/loading templates;
- component libraries.

If a normal component/input solution is simpler, use that instead. Template outlets are powerful but increase abstraction.

---

# 93. Host Elements, Host Bindings, and Event Handling

Every component/directive is attached to a host element.

```html
<app-status-badge />
```

The `<app-status-badge>` element is the host.

Modern Angular encourages defining host behavior in the decorator:

```ts
@Component({
  selector: 'app-status-badge',
  host: {
    'role': 'status',
    '[class.approved]': 'status() === "approved"',
    '[attr.aria-label]': 'label()',
    '(click)': 'handleClick()',
  },
  template: `{{ label() }}`,
})
export class StatusBadge {
  status = input.required<'pending' | 'approved'>();
  label = computed(() => this.status() === 'approved' ? 'Approved' : 'Pending');

  handleClick() {}
}
```

Older code may use:

```ts
@HostBinding('class.active') active = true;
@HostListener('click') onClick() {}
```

Understand both styles when maintaining legacy projects.

## Host directives

Composition can attach directive behavior to components without deep inheritance.

Use case:

```text
Reusable focus behavior
Reusable keyboard behavior
Reusable tooltip behavior
Reusable accessibility behavior
```

Prefer composition when several components need the same host behavior.

---

# 94. DOM Access, `ElementRef`, and Renderer Safety

Angular should normally control DOM rendering through templates.

Direct DOM access is justified for cases such as:

- focus;
- measuring dimensions;
- integrating a non-Angular library;
- canvas/video APIs;
- observers such as ResizeObserver/IntersectionObserver.

Example:

```ts
private element = inject(ElementRef<HTMLElement>);
```

## Rule

Do not replace ordinary template binding with manual DOM mutation.

Bad:

```ts
this.element.nativeElement.querySelector('.title').innerHTML = userInput;
```

Better:

```html
<h2>{{ title() }}</h2>
```

## `Renderer2`

Legacy/existing code may use `Renderer2` for DOM operations. Know what it is, but first ask whether normal Angular bindings solve the requirement more clearly.

## SSR compatibility

Directly assuming browser globals exist can break server rendering:

```ts
window.addEventListener(...)
document.querySelector(...)
localStorage.getItem(...)
```

Isolate browser-specific code and ensure it executes only in an appropriate browser context.

---

# 95. Advanced Dependency Injection Patterns

## Route-scoped state

A route can provide a service so its lifetime follows that route subtree.

Conceptually:

```ts
{
  path: 'invoice/:id',
  providers: [InvoiceEditorState],
  loadComponent: () => import('./invoice-editor').then(m => m.InvoiceEditor),
}
```

This is useful when each route visit needs a fresh feature state instance.

## Multi providers

Multi providers allow several implementations under one token.

Use cases:

- plugin registrations;
- validation rules;
- menu contributions;
- feature hooks.

Concept:

```ts
{ provide: APP_ACTIONS, useClass: ExportAction, multi: true }
{ provide: APP_ACTIONS, useClass: PrintAction, multi: true }
```

Injection returns all registered values.

## `useExisting`

Alias one token to an existing instance rather than creating another one.

## Factory provider

Use when creation depends on configuration/another service.

## Injection scope decision

Ask:

```text
Should every consumer share one instance?
  → root/application scope

Should one feature navigation share it?
  → route/feature scope

Should each component instance have isolated state?
  → component scope
```

Incorrect scope can create subtle bugs such as data leaking between tabs/components or state resetting unexpectedly.

---

# 96. Advanced Signals Patterns

## Read-only public state

Keep write access private:

```ts
private readonly _items = signal<Item[]>([]);
readonly items = this._items.asReadonly();
```

Consumers can read but cannot directly write.

## Derived selectors

```ts
readonly pendingItems = computed(() =>
  this.items().filter(item => item.status === 'pending')
);
```

## Avoid signal copying

Bad:

```ts
source = signal(10);
copy = signal(this.source());
```

`copy` does not automatically remain synchronized.

If it is derived:

```ts
copy = computed(() => this.source());
```

If it is intentionally writable but linked to source changes, consider `linkedSignal()`.

## Signal object mutation

Avoid:

```ts
this.user().name = 'Asha';
```

Prefer:

```ts
this.user.update(user => ({ ...user, name: 'Asha' }));
```

## Equality

Reactive primitives may support equality semantics so equal values do not trigger unnecessary downstream work. Use custom equality only when you understand the cost; deep comparison can itself become expensive.

## Effects are not event buses

If you find effects coordinating many state changes in a loop, rethink the architecture.

Prefer:

```text
user event → command method → update state
state → computed derived values
state → UI
```

Effects are best at the boundary with non-reactive systems.

---

# 97. RxJS Operator Decision Guide

When mapping an event to an async request:

## `switchMap`

**Keep newest; cancel previous subscription.**

Use for:

- search suggestions;
- route-param-driven fetch;
- filter changes;
- latest selection.

```text
A starts
B starts → A canceled
C starts → B canceled
```

## `concatMap`

**Queue in order.**

Use for:

- sequential writes;
- ordered upload queue;
- operations where order matters.

```text
A finishes → B starts → B finishes → C starts
```

## `mergeMap`

**Run concurrently.**

Use for independent parallel work.

```text
A ──────►
B ───►
C ─────────►
```

## `exhaustMap`

**Ignore new triggers while busy.**

Use for:

- login submit;
- payment submit;
- approval button double-click prevention.

```text
A starts
B ignored
C ignored
A finishes
D can start
```

## `debounceTime`

Wait until events stop for a period.

Great for typing; usually poor for a button that should react immediately.

## `distinctUntilChanged`

Skip consecutive duplicates.

## `shareReplay`

Can share/cache observable results, but understand:

- ref counting;
- errors;
- completion;
- invalidation;
- memory lifetime.

Do not apply it to every HTTP call by habit.

---

# 98. Advanced HTTP Patterns

## Headers

```ts
this.http.get('/api/report', {
  headers: {
    'X-Correlation-ID': correlationId,
  },
});
```

Cross-cutting headers usually belong in an interceptor.

## Observe full response

```ts
this.http.get<User[]>('/api/users', {
  observe: 'response',
}).subscribe(response => {
  console.log(response.status);
  console.log(response.headers.get('X-Total-Count'));
  console.log(response.body);
});
```

## File download

```ts
this.http.get('/api/reports/123/pdf', {
  responseType: 'blob',
});
```

Treat filenames/content-disposition headers carefully and avoid trusting unsafe paths.

## Upload progress

Use `observe: 'events'` and `reportProgress: true` when your backend/runtime can report useful progress.

## Idempotency

For critical commands that may be retried, backend APIs can support idempotency keys. This is a server/API design concern but the frontend may generate/send a request identifier.

Example:

```text
POST payment
network timeout
frontend unsure whether request succeeded
```

Blind retry may duplicate a payment. Proper API idempotency avoids this class of failure.

## Concurrency / stale updates

For editing shared records, use versioning/ETags or equivalent server concurrency rules.

```text
User A opens version 5
User B edits → version 6
User A saves stale version 5
Backend returns conflict
```

Frontend should show a clear conflict/reload/merge flow.

---

# 99. Advanced Router Patterns

## Route data

Static route metadata:

```ts
{
  path: 'reports',
  component: ReportsPage,
  data: {
    title: 'Reports',
    permission: 'reports.view',
  },
}
```

Useful for:

- page titles;
- breadcrumbs;
- permissions metadata;
- analytics identifiers.

## `CanMatch` for alternate route implementations

A route can be conditionally matched based on feature flags, permissions, or environment.

Use carefully: avoid creating routing behavior users cannot understand.

## Preloading strategy

A custom strategy can preload routes based on route metadata.

Example idea:

```text
Dashboard → preload
Admin → do not preload
Reports → preload on good network
```

## Route reuse

Angular can customize route reuse. Only introduce custom reuse strategies when re-creating a page is genuinely expensive or UX requires preserving state. Custom caching of entire route components can create memory and stale-state complexity.

## Navigation error handling

Plan for:

- lazy chunk load failure after deployment;
- resolver errors;
- auth expiration;
- invalid route parameters.

---

# 100. Advanced Forms Patterns

## Disabled values

In Reactive Forms, disabled controls behave differently from enabled controls in `.value`. Use `getRawValue()` when you intentionally need all values.

## `updateOn`

Reactive controls can validate/update on different triggers such as change, blur, or submit.

Example:

```ts
new FormControl('', {
  validators: [Validators.required],
  updateOn: 'blur',
});
```

Useful for expensive validation that should not run on every keystroke.

## Backend field errors

Backend:

```json
{
  "fieldErrors": {
    "invoiceNumber": ["Invoice number already exists"]
  }
}
```

Frontend should map this to the correct form field and display it near that field when possible.

## Form DTO mapping

Do not submit a form object blindly when the API model differs.

```ts
const formValue = this.form.getRawValue();

const request: CreateInvoiceRequest = {
  invoiceNo: formValue.invoiceNumber.trim(),
  vendorId: formValue.vendor.id,
  amount: Number(formValue.amount),
};
```

This creates a clear API boundary.

## Form state before navigation

For long forms, decide whether drafts are:

- local only;
- saved automatically to backend;
- saved manually;
- restored after refresh.

Do not leave this as an accidental behavior.

---

# 101. Angular Material, CDK, and Component Libraries

For enterprise apps, a component system can dramatically improve consistency.

A mature library may provide:

- buttons;
- dialogs;
- tables;
- menus;
- form controls;
- date pickers;
- accessibility primitives;
- overlays;
- theming.

Angular Material is an Angular-native component library. The Angular CDK provides lower-level behavior primitives useful even when you build your own visual design.

Useful CDK concepts include areas such as:

- accessibility;
- overlay;
- drag/drop;
- virtual scrolling;
- clipboard;
- layout/observers.

## Virtual scroll scenario

If 50,000 rows must appear in a scrollable list, rendering all 50,000 DOM nodes is expensive.

Virtual scrolling renders only the visible window plus buffer.

However, for database-backed business tables, server-side pagination may still be the more appropriate solution.

## Component-library rule

Choose one consistent design system instead of mixing five libraries with conflicting CSS and accessibility behavior.

---

# 102. Image and Asset Performance

Large images can dominate page performance.

Checklist:

- use the correct dimensions;
- compress assets;
- avoid shipping a 4000×3000 image into a 200×150 card;
- use modern formats where supported;
- lazy-load below-the-fold imagery;
- reserve layout space to reduce layout shift;
- use responsive source sizes.

Angular provides image optimization features such as `NgOptimizedImage` for suitable applications.

Conceptual usage:

```html
<img
  ngSrc="/assets/hero.webp"
  width="1200"
  height="600"
  priority
  alt="Product dashboard"
/>
```

Use `priority` only for truly important above-the-fold imagery, not every image.

---

# 103. Custom Elements / Web Components

Angular components can be packaged for usage as custom elements in scenarios where a component must be embedded into another application outside normal Angular composition.

Potential use cases:

- widget embedded in a legacy server-rendered application;
- gradual migration from another frontend stack;
- organization-wide embedded UI widget.

Trade-offs:

- bundle/runtime duplication;
- CSS isolation/theming;
- event contracts;
- browser support requirements;
- versioning between host and widget.

If the host is already Angular, normal Angular libraries/components are usually simpler than custom elements.

---

# 104. Creating Reusable Angular Libraries

A library is useful when multiple applications genuinely share code.

Possible library contents:

- design system;
- authentication integration;
- common domain models;
- reusable directives/pipes;
- shared data-access SDK.

Create a library in an Angular workspace with the CLI tooling available for the installed version.

Library design principles:

1. keep public API small;
2. avoid leaking internal files;
3. make services tree-shakable;
4. avoid application-specific assumptions;
5. provide configuration through typed provider functions/tokens;
6. document breaking changes;
7. test against supported Angular versions;
8. avoid hidden global side effects.

## Public API

Consumers should import from an intentional package entry point:

```ts
import { MyButton, provideMyLibrary } from '@company/ui';
```

not deep internal paths:

```ts
import { InternalThing } from '@company/ui/src/lib/private/internal';
```

---

# 105. Multi-Project Workspaces and Monorepo Thinking

Large organizations may keep multiple applications/libraries in one repository or workspace.

Example:

```text
repo/
├── apps/
│   ├── employee-portal/
│   └── finance-portal/
├── libs/
│   ├── ui/
│   ├── auth/
│   └── finance-domain/
└── tooling/
```

Benefits:

- atomic changes across app/library boundaries;
- shared tooling;
- consistent lint/test configuration;
- easier code reuse when boundaries are enforced.

Risks:

- everything imports everything;
- slow CI;
- unclear ownership;
- giant shared library becoming a dumping ground.

Use explicit dependency boundaries and ownership rules.

---

# 106. Linting, Formatting, and Quality Gates

Automate style and correctness checks.

Common tooling includes:

- TypeScript strict mode;
- ESLint ecosystem;
- Prettier or another formatter;
- unit tests;
- build budgets;
- dependency scanning;
- CI checks.

## TypeScript strictness

Strict typing catches many frontend bugs before runtime.

Avoid disabling type checks globally because one API has poor types. Fix the boundary instead.

## Code quality gate example

```text
Pull Request
   ↓
format check
   ↓
lint
   ↓
unit tests
   ↓
production build
   ↓
optional E2E / security checks
   ↓
review + merge
```

The goal is not maximum rules. The goal is predictable quality with low developer friction.

---

# 107. CI/CD and Release Strategy

A frontend release is more than copying `dist/`.

## Pipeline

```text
checkout
  ↓
install locked dependencies
  ↓
type/lint checks
  ↓
unit tests
  ↓
production build
  ↓
artifact signing/scanning if required
  ↓
deploy
  ↓
smoke test
```

## Lock dependencies

Use a lockfile and CI install mode appropriate for npm so CI receives reproducible package versions.

## Cache carefully

Cache dependency downloads/build intermediates, but never allow stale caches to hide dependency/configuration changes.

## Versioning

For internal enterprise apps, still keep release identifiers so an issue report can answer:

```text
Which frontend build was the user running?
Which backend version handled the request?
```

Expose a non-sensitive build version in an About screen or diagnostics endpoint if useful.

## Rollback

Know how to roll back a broken static build quickly.

For SPAs, hashed assets plus HTML caching rules need coordinated deployment so `index.html` never references deleted chunks.

---

# 108. Application Startup and Bootstrap

Modern standalone bootstrap:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
```

Application config:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ],
};
```

## Startup configuration

Sometimes the app must load configuration before normal operation.

Examples:

- tenant information;
- API endpoint selected at deployment;
- feature flags;
- identity provider metadata.

Distinguish:

```text
Build-time configuration
Runtime public configuration
User/session data
Secrets (never browser-owned)
```

Avoid turning startup into a chain of 20 blocking network calls. Load only what is essential before first render.

---

# 109. Reusable Table Design Scenario

Enterprise Angular apps frequently need data tables. A reusable table should not become a universal 200-input monster.

Split responsibilities:

```text
Data fetching / pagination → page/state
Column rendering           → table config/templates
Sorting request            → output/query state
Selection                   → table + page contract
Business actions            → feature component
```

Possible API:

```ts
interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}
```

Usage concept:

```html
<app-data-table
  [rows]="invoices()"
  [columns]="columns"
  [loading]="loading()"
  (sortChanged)="changeSort($event)"
  (rowSelected)="openInvoice($event)"
/>
```

Do not put domain-specific rules such as "Finance Controller can approve invoice" inside a generic table component.

Keep that in the invoice feature.

---

# 110. Angular Code Review Checklist

Use this before merging significant Angular code.

## Architecture

- [ ] Is the code in the correct feature/layer?
- [ ] Is state owned at the narrowest sensible scope?
- [ ] Are API/data-access details isolated from presentation where useful?
- [ ] Is a new abstraction actually needed?

## Components

- [ ] Is each component's responsibility understandable?
- [ ] Are inputs read-only from the child's perspective?
- [ ] Are outputs named as domain events?
- [ ] Is the template readable?
- [ ] Are loading, empty, error, and success states handled?

## Signals

- [ ] Is derived state implemented with `computed()`?
- [ ] Are effects limited to real side effects?
- [ ] Are signal writes centralized where state ownership matters?
- [ ] Is object/array state updated intentionally?

## RxJS

- [ ] Is the correct flattening operator used?
- [ ] Are subscriptions cleaned up?
- [ ] Could async pipe / `toSignal` remove manual subscriptions?
- [ ] Are errors handled at the right layer?
- [ ] Are duplicate requests possible?

## HTTP

- [ ] Are request/response types explicit?
- [ ] Are query parameters encoded through HttpClient APIs?
- [ ] Are cancellation and race conditions handled?
- [ ] Is retry safe for the operation?
- [ ] Are backend validation errors surfaced appropriately?

## Forms

- [ ] Are types correct?
- [ ] Is validation duplicated unnecessarily?
- [ ] Are cross-field rules in the correct place?
- [ ] Is backend validation still authoritative?
- [ ] Is unsaved/draft behavior defined?

## Routing

- [ ] Should the feature be lazy loaded?
- [ ] Is shareable state represented in the URL?
- [ ] Are guards used only as frontend navigation controls?
- [ ] Does direct route refresh work in deployed environments?

## Security

- [ ] No secrets are shipped to the browser.
- [ ] No unsafe sanitization bypass without review.
- [ ] Backend enforces authorization.
- [ ] Sensitive data is not logged.
- [ ] Uploads are validated by the backend.

## Accessibility

- [ ] Semantic HTML is used.
- [ ] Forms have labels.
- [ ] Keyboard navigation works.
- [ ] Focus behavior is correct.
- [ ] ARIA is used only when needed and correctly.

## Performance

- [ ] Large features are lazy/deferred when useful.
- [ ] Lists use stable tracking keys.
- [ ] Huge data is not loaded unnecessarily.
- [ ] Expensive template calculations are avoided.
- [ ] Images/assets are appropriately sized.

## Testing

- [ ] Critical business behavior has tests.
- [ ] Tests assert behavior rather than private implementation details.
- [ ] API error paths are tested.
- [ ] Permission/workflow edge cases are tested.

## Maintainability

- [ ] Names describe domain intent.
- [ ] No unexplained magic constants.
- [ ] No giant `CommonService` additions.
- [ ] No unnecessary `any`.
- [ ] Comments explain **why**, not obvious **what**.

---

# 111. Final A-to-Z Scenario Map

When you need a feature, use this map to choose Angular concepts.

| Requirement | Angular concepts to consider |
|---|---|
| Show/hide UI | Signal + `@if` |
| Render list | `@for` + stable `track` |
| Parent passes data | `input()` |
| Child sends event | `output()` |
| Custom two-way control | `model()` / form control API |
| Derived total | `computed()` |
| Browser side effect | `effect()` carefully |
| Shared feature state | Scoped injectable + signals/store |
| Async stream | RxJS |
| Latest search request | `switchMap` |
| Prevent double submit | `exhaustMap` + disabled UI |
| Ordered async writes | `concatMap` |
| Parallel independent work | `mergeMap` / `forkJoin` depending completion needs |
| Backend request | `HttpClient` |
| Auth header | HTTP interceptor |
| Page navigation | Router |
| Protect navigation UX | Guard |
| Preload page data | Resolver/resource/component loading |
| Large feature | lazy route |
| Heavy below-fold widget | `@defer` |
| Simple form | template-driven or Signal Form |
| Complex existing form | Reactive Forms |
| New signal-first typed form | Signal Forms |
| Repeating controls | `FormArray` / signal-form collection model |
| Custom picker | custom form control |
| Public SEO page | SSR/SSG/hybrid rendering |
| Server-rendered interactivity | hydration |
| Huge visual list | virtual scroll and/or server pagination |
| Reusable modal/card shell | content projection |
| Runtime template rendering | `ng-template` / outlet |
| Runtime component type | `NgComponentOutlet` / dynamic component API |
| Shared DOM behavior | directive |
| Display formatting | pipe |
| Environment configuration | providers/runtime config/build config |
| Multiple app reuse | Angular library |
| Production diagnosis | error monitoring + correlation IDs |
| Secure permission | backend authorization; frontend permissions only for UX |

---

## Final Reminder

When learning Angular, avoid measuring progress by how many decorators or APIs you remember. Measure it by whether you can take a requirement, identify the correct state owner, build a clear component boundary, model async work safely, enforce security at the backend boundary, test the important behavior, and keep the application understandable six months later.

---

# 112. Final Mastery Checklist

A developer who can confidently explain and implement the following is in a strong position for real Angular work:

## Foundation

- [ ] HTML, CSS, JavaScript, TypeScript
- [ ] Angular CLI
- [ ] project structure
- [ ] standalone components

## UI

- [ ] templates
- [ ] interpolation/property/event/two-way binding
- [ ] `@if`, `@for`, `@switch`, `@let`
- [ ] inputs, outputs, `model()`
- [ ] directives
- [ ] pipes
- [ ] content projection
- [ ] queries
- [ ] lifecycle
- [ ] accessibility

## Data and Reactivity

- [ ] Signals
- [ ] `computed`
- [ ] `effect`
- [ ] `linkedSignal`
- [ ] resources / reactive async data
- [ ] RxJS
- [ ] signal/RxJS interop

## Application Architecture

- [ ] services
- [ ] dependency injection
- [ ] provider scopes
- [ ] feature state
- [ ] shared/global state decisions
- [ ] feature-based folders
- [ ] reusable components

## Backend Integration

- [ ] HttpClient
- [ ] DTO typing
- [ ] interceptors
- [ ] error handling
- [ ] caching
- [ ] cancellation
- [ ] pagination
- [ ] file uploads

## Navigation

- [ ] routes
- [ ] parameters
- [ ] query parameters
- [ ] lazy loading
- [ ] guards
- [ ] resolvers
- [ ] nested routes
- [ ] router events

## Forms

- [ ] template-driven forms
- [ ] Reactive Forms
- [ ] Signal Forms
- [ ] validation
- [ ] async validation
- [ ] cross-field validation
- [ ] dynamic forms
- [ ] custom controls

## Production Engineering

- [ ] security boundaries
- [ ] authentication/authorization
- [ ] change detection
- [ ] zoneless concepts
- [ ] `@defer`
- [ ] SSR/SSG/hydration
- [ ] testing
- [ ] performance
- [ ] logging/observability
- [ ] build and deployment
- [ ] legacy NgModule maintenance
- [ ] safe Angular upgrades

---

## Closing Principle

Angular mastery is not knowing the largest number of APIs. It is being able to choose a simple, maintainable design for a real requirement.

When you receive a requirement such as:

> “Build an invoice approval screen with search, pagination, role-based actions, validation, attachment upload, audit history, and server errors.”

You should be able to map it mentally:

```text
Route
  ↓
Page component
  ↓
Feature state / resource
  ↓
API service
  ↓
Backend

Page
 ├── Filter component
 ├── Table component
 ├── Form component
 ├── Attachment component
 └── Approval actions

State
 ├── invoices
 ├── selected invoice
 ├── filter/query/page
 ├── loading/error
 └── permissions

Cross-cutting
 ├── interceptor/auth
 ├── router guard (UX)
 ├── backend authorization (security)
 ├── tests
 ├── logging
 └── performance
```

That ability—to turn business requirements into clear component, state, data, and security boundaries—is what makes an Angular developer effective.
