# Angular Master Handbook

> **Audience:** Beginner → Intermediate → Advanced → Production/Enterprise
>
> **Primary learning baseline:** Modern Angular **v22-era** patterns (standalone-first, Signals, built-in control flow, zoneless-ready/default, modern CLI/build/testing). Legacy patterns such as NgModule-first architecture, decorator inputs/outputs, `*ngIf`, `*ngFor`, Zone.js-dependent assumptions, and Karma/Jasmine are still explained because real projects may use them.
>
> **Goal:** One practical reference that teaches *what Angular concepts mean, why they exist, how to use them, when to use them, what mistakes to avoid, and how concepts connect in real applications*.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Angular Is](#2-what-angular-is)
3. [Prerequisites](#3-prerequisites)
4. [Installation, CLI, and First Project](#4-installation-cli-and-first-project)
5. [Workspace and Project Structure](#5-workspace-and-project-structure)
6. [TypeScript Essentials for Angular](#6-typescript-essentials-for-angular)
7. [Angular Mental Model](#7-angular-mental-model)
8. [Components](#8-components)
9. [Templates and Data Binding](#9-templates-and-data-binding)
10. [Built-in Control Flow](#10-built-in-control-flow)
11. [Signals and Modern Reactivity](#11-signals-and-modern-reactivity)
12. [Inputs, Outputs, and Two-Way Binding](#12-inputs-outputs-and-two-way-binding)
13. [Directives](#13-directives)
14. [Pipes](#14-pipes)
15. [Dependency Injection and Services](#15-dependency-injection-and-services)
16. [Lifecycle and Render Hooks](#16-lifecycle-and-render-hooks)
17. [View Queries, Content Queries, and DOM Access](#17-view-queries-content-queries-and-dom-access)
18. [Content Projection and Template Composition](#18-content-projection-and-template-composition)
19. [Forms Overview](#19-forms-overview)
20. [Signal Forms](#20-signal-forms)
21. [Reactive Forms](#21-reactive-forms)
22. [Template-Driven Forms](#22-template-driven-forms)
23. [Routing](#23-routing)
24. [HTTP and API Integration](#24-http-and-api-integration)
25. [RxJS in Angular](#25-rxjs-in-angular)
26. [State Management](#26-state-management)
27. [Error Handling](#27-error-handling)
28. [Authentication and Authorization](#28-authentication-and-authorization)
29. [Change Detection and Zoneless Angular](#29-change-detection-and-zoneless-angular)
30. [Performance Optimization](#30-performance-optimization)
31. [Deferrable Views](#31-deferrable-views)
32. [SSR, SSG, Hydration, and Hybrid Rendering](#32-ssr-ssg-hydration-and-hybrid-rendering)
33. [Styling, CSS, and Theming](#33-styling-css-and-theming)
34. [Angular Animations and Native CSS Animation Strategy](#34-angular-animations-and-native-css-animation-strategy)
35. [Accessibility](#35-accessibility)
36. [Security](#36-security)
37. [Testing](#37-testing)
38. [Angular Material and CDK](#38-angular-material-and-cdk)
39. [Internationalization](#39-internationalization)
40. [PWA and Service Workers](#40-pwa-and-service-workers)
41. [Web Workers](#41-web-workers)
42. [Custom Libraries](#42-custom-libraries)
43. [Monorepos and Large Workspaces](#43-monorepos-and-large-workspaces)
44. [Environment and Configuration Management](#44-environment-and-configuration-management)
45. [Build, Deployment, and CI/CD](#45-build-deployment-and-cicd)
46. [Architecture Patterns](#46-architecture-patterns)
47. [Enterprise Folder Structure](#47-enterprise-folder-structure)
48. [Common Angular Anti-Patterns](#48-common-angular-anti-patterns)
49. [Debugging Guide](#49-debugging-guide)
50. [Migration Strategy for Legacy Angular Apps](#50-migration-strategy-for-legacy-angular-apps)
51. [Real-World Mini Project: Product Admin Portal](#51-real-world-mini-project-product-admin-portal)
52. [Interview and Revision Checklist](#52-interview-and-revision-checklist)
53. [Learning Roadmap](#53-learning-roadmap)
54. [Glossary](#54-glossary)
55. [Official References](#55-official-references)

---

# 1. How to Use This Handbook

Angular is large because it solves many application-development problems in one ecosystem: UI composition, routing, dependency injection, forms, HTTP, testing, build tooling, server rendering, hydration, accessibility, and more.

Do **not** try to memorize every API. Learn in layers:

1. **Foundation** — TypeScript, components, templates, binding, control flow.
2. **Application building** — services, DI, routing, forms, HTTP.
3. **Reactivity** — Signals and RxJS.
4. **Production** — auth, testing, error handling, performance, security.
5. **Advanced** — SSR/hydration, custom libraries, architecture, migrations.

Each major concept in this handbook includes:

- **What it is**
- **Why it exists**
- **When to use it**
- **Example**
- **Common mistakes**
- **Production advice**

### Recommended practice pattern

For every topic:

1. Read the explanation.
2. Type the example manually.
3. Change one requirement.
4. Break the code intentionally.
5. Fix it without copying the original.
6. Build a small feature using the concept.

---

# 2. What Angular Is

Angular is a TypeScript-first web framework maintained by Google for building applications ranging from small SPAs to large enterprise systems.

Angular provides a coordinated set of first-party capabilities:

- component-based UI
- templates and data binding
- dependency injection
- routing
- forms
- HTTP client
- reactive primitives through Signals
- RxJS interoperability
- server-side rendering and hydration
- testing utilities
- build tooling through Angular CLI
- accessibility and component tooling through CDK/Material

## Angular vs AngularJS

**AngularJS** means Angular **1.x**. It used controllers, `$scope`, digest cycles, and a very different architecture.

**Angular** means Angular **2+**. It is a full rewrite centered around TypeScript, components, decorators/metadata, dependency injection, and a modern compilation/runtime model.

Do not treat AngularJS tutorials as Angular tutorials.

## Angular is opinionated—but not rigid

Angular gives strong defaults, but you still make architectural choices about:

- feature boundaries
- state placement
- API abstractions
- routing structure
- reactive patterns
- form strategy
- SSR vs CSR
- component granularity
- third-party state libraries

---

# 3. Prerequisites

You should know basic:

- HTML
- CSS
- JavaScript ES2015+
- TypeScript fundamentals
- HTTP/REST basics
- npm/package management
- Git fundamentals

## JavaScript concepts that matter most

- `let` / `const`
- arrays and objects
- destructuring
- spread syntax
- functions and arrow functions
- promises and `async`/`await`
- modules: `import` / `export`
- array methods: `map`, `filter`, `find`, `reduce`
- optional chaining: `obj?.value`
- nullish coalescing: `value ?? fallback`

## TypeScript concepts that matter most

- interfaces
- type aliases
- union types
- generics
- access modifiers
- abstract classes
- utility types
- type narrowing
- strict null checks

---

# 4. Installation, CLI, and First Project

## Node.js

Angular requires supported Node.js versions. The exact supported range depends on the Angular version, so check the official compatibility table before upgrading an old project.

## Install Angular CLI

```bash
npm install -g @angular/cli
```

Check versions:

```bash
node -v
npm -v
ng version
```

Create a project:

```bash
ng new shop-admin
cd shop-admin
ng serve
```

Open the development URL shown by the CLI.

## Useful CLI commands

```bash
ng new my-app
ng serve
ng build
ng test
ng generate component features/orders/order-list
ng generate service core/api/orders
ng generate guard core/auth/auth
ng generate interceptor core/http/auth
ng add <package>
ng update
```

Short aliases are available, but explicit commands are easier for beginners.

## Scenario: Creating a company dashboard

```bash
ng new company-dashboard --routing --style=scss
```

Then create feature UI:

```bash
ng g c features/employees/employee-list
ng g c features/employees/employee-detail
ng g s features/employees/data/employee-api
```

The CLI helps keep naming and generated boilerplate consistent.

---

# 5. Workspace and Project Structure

A modern Angular application usually contains files similar to:

```text
shop-admin/
├─ angular.json
├─ package.json
├─ tsconfig.json
├─ public/
└─ src/
   ├─ index.html
   ├─ main.ts
   ├─ styles.scss
   └─ app/
      ├─ app.ts
      ├─ app.html
      ├─ app.css
      ├─ app.config.ts
      └─ app.routes.ts
```

Exact generated names can vary by Angular/CLI generation style.

## Important files

### `package.json`

Contains dependencies and scripts.

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  }
}
```

### `angular.json`

Workspace build, serve, test, assets, styles, budgets, and builder configuration.

### `main.ts`

Bootstraps the application.

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
```

### `app.config.ts`

A common location for application-wide providers.

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

## Feature-first structure

Prefer organizing large applications by business feature instead of technical file type.

```text
app/
├─ core/
│  ├─ auth/
│  ├─ http/
│  └─ layout/
├─ shared/
│  ├─ ui/
│  ├─ directives/
│  └─ pipes/
├─ features/
│  ├─ orders/
│  ├─ invoices/
│  └─ users/
├─ app.config.ts
└─ app.routes.ts
```

This scales better than one giant `components/`, `services/`, and `models/` directory.

---

# 6. TypeScript Essentials for Angular

## Interfaces

```ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
```

Use interfaces/types to describe data contracts.

## Optional fields

```ts
interface Invoice {
  id: number;
  poNumber?: string;
}
```

`poNumber` may be missing.

## Union types

```ts
type Status = 'draft' | 'pending' | 'approved' | 'rejected';
```

This is better than arbitrary strings because TypeScript catches invalid values.

## Generics

```ts
interface ApiResponse<T> {
  data: T;
  message: string;
}

const response: ApiResponse<User[]> = {
  data: [],
  message: 'OK'
};
```

## Utility types

```ts
type UserCreate = Omit<User, 'id'>;
type UserPatch = Partial<UserCreate>;
type UserSummary = Pick<User, 'id' | 'name'>;
```

## Avoid `any`

Bad:

```ts
loadUser(data: any) {}
```

Better:

```ts
loadUser(data: User) {}
```

If data is genuinely unknown, prefer `unknown` and validate/narrow it.

---

# 7. Angular Mental Model

A useful mental model is:

```text
User action
   ↓
Component / template
   ↓
Signal / form / service / RxJS stream
   ↓
Business logic
   ↓
HTTP / router / storage / backend
   ↓
State changes
   ↓
Angular updates affected UI
```

Angular applications are trees of components. Data normally travels:

- **down** through inputs
- **up** through outputs/events
- **across features** through shared state/services
- **from backend** through HTTP/resource/RxJS

A well-designed app keeps UI components focused on presentation and moves reusable business/data logic into services or feature state classes.

---

# 8. Components

A component owns a portion of the UI.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{ name }}</h1>
  `
})
export class Welcome {
  name = 'Angular Learner';
}
```

Use it in another component:

```html
<app-welcome />
```

## Component responsibilities

A component can contain:

- local UI state
- event handlers
- input/output APIs
- injected services
- signal/computed values
- lifecycle behavior
- template imports

## Keep components focused

Bad component:

```text
InvoicePage
- fetches invoice
- calculates tax
- authorizes user
- formats date
- stores token
- controls modal
- sends audit events
- renders 1,500 lines of HTML
```

Better split:

```text
InvoicePage
├─ InvoiceSummary
├─ InvoiceLineTable
├─ TaxSummary
└─ ApprovalPanel

InvoiceStore / InvoiceApi / AuthService
```

## Inline vs external template

Inline is useful for tiny components.

```ts
@Component({
  selector: 'app-badge',
  template: `<span class="badge">{{ text }}</span>`
})
```

External files are better for larger UI.

```ts
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.html',
  styleUrl: './order-page.scss'
})
```

---

# 9. Templates and Data Binding

Angular templates extend HTML with Angular syntax.

## Interpolation

```html
<h2>{{ product.name }}</h2>
<p>{{ price * quantity }}</p>
```

Use for rendering text expressions.

## Property binding

```html
<img [src]="product.imageUrl" [alt]="product.name">
<button [disabled]="isSaving()">Save</button>
```

The value goes **from component → DOM/component property**.

## Attribute binding

```html
<td [attr.colspan]="columnSpan">Total</td>
```

Useful when you need an actual HTML attribute instead of a DOM property.

## Class binding

```html
<div [class.active]="selected()">Item</div>
```

Multiple classes:

```html
<div [class]="statusClasses()">...</div>
```

## Style binding

```html
<div [style.width.px]="progress()">...</div>
```

## Event binding

```html
<button (click)="save()">Save</button>
<input (input)="search($event)">
```

## Two-way binding

Classic forms example:

```html
<input [(ngModel)]="name">
```

Conceptually:

```text
component value → input
input event → component value
```

Modern Angular also supports model-based component two-way binding, discussed later.

## Template expressions

Keep template expressions simple.

Avoid:

```html
<div>{{ veryExpensiveCalculateEverything(order, tax, user, permissions) }}</div>
```

Prefer derived state:

```ts
total = computed(() => calculateTotal(this.order()));
```

```html
<div>{{ total() }}</div>
```

---

# 10. Built-in Control Flow

Modern Angular has built-in control-flow syntax.

## `@if`

```html
@if (isLoggedIn()) {
  <p>Welcome back.</p>
} @else {
  <a routerLink="/login">Login</a>
}
```

## `@else if`

```html
@if (status() === 'approved') {
  <span>Approved</span>
} @else if (status() === 'rejected') {
  <span>Rejected</span>
} @else {
  <span>Pending</span>
}
```

## `@for`

```html
@for (user of users(); track user.id) {
  <p>{{ user.name }}</p>
}
```

Tracking is important because it helps Angular reuse DOM elements efficiently.

Useful loop variables:

```html
@for (item of items(); track item.id; let i = $index; let first = $first) {
  <div>{{ i + 1 }}. {{ item.name }}</div>
}
```

## `@empty`

```html
@for (invoice of invoices(); track invoice.id) {
  <app-invoice-row [invoice]="invoice" />
} @empty {
  <p>No invoices found.</p>
}
```

## `@switch`

```html
@switch (role()) {
  @case ('admin') { <app-admin-panel /> }
  @case ('manager') { <app-manager-panel /> }
  @default { <app-user-panel /> }
}
```

## `@let`

Use a local template variable for a calculated expression.

```html
@let fullName = user().firstName + ' ' + user().lastName;
<h2>{{ fullName }}</h2>
```

## Legacy equivalents

Older code often uses:

```html
<div *ngIf="isOpen">...</div>
<li *ngFor="let item of items">...</li>
```

Understand these for maintenance, but prefer built-in control flow in new code.

---

# 11. Signals and Modern Reactivity

A **Signal** is a reactive value. Angular tracks where it is read and can update consumers when it changes.

## Writable signal

```ts
import { signal } from '@angular/core';

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

Update based on old value:

```ts
this.count.update(v => v + 1);
```

Template:

```html
<p>Count: {{ count() }}</p>
<button (click)="count.update(v => v + 1)">+</button>
```

## `computed`

Use for derived state.

```ts
quantity = signal(2);
unitPrice = signal(250);

total = computed(() => this.quantity() * this.unitPrice());
```

Do not store state that can be calculated reliably from other state.

Bad:

```ts
quantity = signal(2);
unitPrice = signal(250);
total = signal(500); // can become inconsistent
```

Better:

```ts
total = computed(() => this.quantity() * this.unitPrice());
```

## `effect`

Use an effect for imperative side effects when reactive dependencies change.

```ts
constructor() {
  effect(() => {
    console.log('Selected user:', this.selectedUserId());
  });
}
```

Typical effects:

- logging/analytics
- integration with non-Angular APIs
- persistence to browser storage
- imperative synchronization

Avoid using effects to copy derived values between signals when `computed` can express the relationship.

## Scenario: Search filtering

```ts
search = signal('');
users = signal<User[]>([]);

filteredUsers = computed(() => {
  const q = this.search().trim().toLowerCase();
  return this.users().filter(user =>
    user.name.toLowerCase().includes(q)
  );
});
```

```html
<input
  [value]="search()"
  (input)="search.set($any($event.target).value)"
>

@for (user of filteredUsers(); track user.id) {
  <p>{{ user.name }}</p>
}
```

## `linkedSignal`

A linked signal is useful when writable state depends on other reactive state but should still be manually changeable.

Typical scenario: a selected item should default to the first item whenever the available list changes, while still allowing the user to choose another item afterward.

## Async Signals: `resource` and `httpResource`

Modern Angular includes resource APIs for async state.

Conceptual `httpResource` example:

```ts
import { httpResource } from '@angular/common/http';

userId = signal(1);
user = httpResource(() => `/api/users/${this.userId()}`);
```

Template:

```html
@if (user.hasValue()) {
  <h2>{{ user.value().name }}</h2>
} @else if (user.error()) {
  <p>Could not load user.</p>
} @else if (user.isLoading()) {
  <p>Loading...</p>
}
```

Use `HttpClient` directly for mutations such as POST/PUT/DELETE where command-style control is usually clearer.

## Signals vs RxJS

Use Signals primarily for:

- component/view state
- synchronous derived state
- fine-grained reactive UI
- local/global state containers

Use RxJS primarily for:

- event streams
- HTTP pipelines
- cancellation
- debouncing
- combining async sources
- WebSockets
- stream transformation

They are complementary, not enemies.

---

# 12. Inputs, Outputs, and Two-Way Binding

Components communicate through explicit APIs.

## Modern signal input

```ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `<h3>{{ name() }}</h3>`
})
export class UserCard {
  name = input('Guest');
}
```

Parent:

```html
<app-user-card [name]="currentUser().name" />
```

## Required input

```ts
user = input.required<User>();
```

Use required inputs when the child cannot function correctly without that data.

## Transforming input values

Input transformations can normalize incoming values when appropriate. Keep transformations predictable and side-effect free.

## Modern output

```ts
import { output } from '@angular/core';

saved = output<User>();

save(user: User) {
  this.saved.emit(user);
}
```

Parent:

```html
<app-user-editor (saved)="handleSaved($event)" />
```

## Model input for two-way component binding

```ts
value = model(0);
```

Parent concept:

```html
<app-counter [(value)]="count" />
```

Use two-way component binding when the child is genuinely editing a value owned/coordinated by the parent.

## Legacy decorators

Older applications use:

```ts
@Input() name = '';
@Output() saved = new EventEmitter<User>();
```

These are important to understand for existing projects.

## Avoid event chains

Bad architecture:

```text
Child → output → Parent → output → Grandparent → output → Page
```

If many unrelated layers only relay events, consider a feature service/store.

---

# 13. Directives

Directives attach behavior to existing elements/components.

## Attribute directive example

```ts
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {
  private el = inject(ElementRef<HTMLInputElement>);

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
```

```html
<input appAutofocus>
```

## Prefer host bindings/listeners through directive/component metadata or host APIs

A directive should encapsulate reusable DOM behavior, not become a hidden business-logic container.

## When to create a directive

Good cases:

- permission behavior
- input formatting behavior
- focus management
- keyboard behavior
- reusable host interactions

Avoid creating a directive when plain CSS or a normal component is clearer.

## Structural directives

Historically, structural directives reshape template structure (`*ngIf`, `*ngFor`). In modern Angular, common conditional/list control flow is built into the template language, so custom structural directives are more specialized.

---

# 14. Pipes

Pipes transform values for display.

Built-ins include date, currency, decimal, percent, JSON, async, case conversion, etc.

```html
<p>{{ createdAt | date:'medium' }}</p>
<p>{{ amount | currency:'INR' }}</p>
<p>{{ customerName | uppercase }}</p>
```

## Custom pipe

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(/\s+/)
      .filter(Boolean)
      .map(word => word[0]?.toUpperCase() ?? '')
      .join('');
  }
}
```

```html
<span>{{ 'Shoeb Shaikh' | initials }}</span>
```

## Pure vs impure pipes

Pure pipes are preferable because Angular can avoid unnecessary re-execution when input identity does not change.

Avoid impure pipes for expensive filtering/sorting on large lists. Derived signals or prepared view models are usually clearer.

---

# 15. Dependency Injection and Services

Dependency Injection (DI) allows a class to request dependencies without constructing them directly.

## Service example

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
}
```

Inject it:

```ts
import { inject } from '@angular/core';

export class UserPage {
  private logger = inject(LoggerService);
}
```

## Why DI matters

Without DI:

```ts
const api = new UserApi(new HttpClient(/* impossible setup here */));
```

With DI:

```ts
private api = inject(UserApi);
```

Angular manages creation, scope, dependencies, and replacement during testing.

## Injection tokens

Use `InjectionToken` for configuration or values without a class type.

```ts
import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
```

Provider:

```ts
{ provide: API_BASE_URL, useValue: 'https://api.example.com' }
```

Consumer:

```ts
private baseUrl = inject(API_BASE_URL);
```

## Provider styles

```ts
{ provide: Token, useClass: SomeClass }
{ provide: Token, useValue: value }
{ provide: Token, useFactory: factoryFn }
{ provide: Token, useExisting: ExistingToken }
```

## Hierarchical DI

Providers can exist at different levels. A component-level provider can create a feature-local instance instead of using the application singleton.

Scenario: each editor tab needs isolated draft state.

```ts
@Component({
  selector: 'app-draft-editor',
  providers: [DraftStore],
  template: `...`
})
export class DraftEditor {}
```

Each editor instance receives its own `DraftStore`.

## Service design

Good service responsibilities:

- API access
- business rules
- orchestration
- state sharing
- logging
- authentication
- caching

Avoid a single `CommonService` with 80 unrelated methods.

---

# 16. Lifecycle and Render Hooks

Angular component lifecycle hooks help you react to component creation, input changes, rendered views, and destruction.

Common hooks:

```text
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
ngOnDestroy
```

## `ngOnInit`

Use for initialization that depends on injected dependencies or already-set initial inputs.

```ts
ngOnInit() {
  this.loadReferenceData();
}
```

## `ngOnChanges`

Useful when classic/decorator inputs change and you need transition logic.

For modern signal inputs, `computed`/`effect` often expresses reactive relationships more naturally.

## `ngAfterViewInit`

Use when logic requires initialized child views or DOM references.

## `ngOnDestroy`

Cleanup is important for manual subscriptions, timers, browser listeners, and third-party libraries.

Modern Angular also provides destruction-aware utilities such as `DestroyRef` and RxJS interop helpers.

## Render hooks

`afterNextRender` and `afterEveryRender` are useful for DOM work that should happen after Angular renders.

Typical example:

- measure an element after it becomes visible
- initialize a non-Angular chart library after DOM exists

Avoid manipulating DOM during arbitrary lifecycle phases when a render hook is more precise.

---

# 17. View Queries, Content Queries, and DOM Access

Queries let a component access child elements/components/directives.

## Template reference variable

```html
<input #searchBox>
<button (click)="focusSearch(searchBox)">Focus</button>
```

## Modern signal view query concept

```ts
searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');
```

Use queries when the parent truly needs a reference to a rendered child.

## Do not overuse `ElementRef`

Prefer:

- bindings
- directives
- components
- signals

Use direct DOM access mainly for specialized browser APIs or third-party integration.

## Content queries

Content queries inspect content projected into a component through `<ng-content>`.

Scenario: a reusable tabs component discovers projected tab panels.

---

# 18. Content Projection and Template Composition

Content projection allows reusable components to accept caller-provided markup.

## Basic projection

Card component:

```html
<div class="card">
  <ng-content />
</div>
```

Usage:

```html
<app-card>
  <h2>Invoice #1001</h2>
  <p>Pending approval</p>
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
```

Usage:

```html
<app-card>
  <h2 card-title>Profile</h2>
  <p>Profile content</p>
</app-card>
```

## `ng-template`

`ng-template` represents template content that is not rendered immediately by itself.

Useful for:

- custom cell templates
- modal templates
- reusable rendering slots
- dynamic composition

## `ng-container`

Groups template logic without adding an extra DOM element.

---

# 19. Forms Overview

Angular supports three important form approaches:

| Approach | Best for | Main state model |
|---|---|---|
| Signal Forms | New signal-based apps | Writable signal + field tree |
| Reactive Forms | Complex/enterprise/existing forms | `FormControl`, `FormGroup`, `FormArray` |
| Template-driven | Small/simple forms | Template directives + component properties |

Do not choose based on which syntax looks shortest. Choose based on complexity, type safety, team familiarity, and existing codebase.

---

# 20. Signal Forms

Signal Forms provide a modern signal-based forms model.

## Basic model

```ts
import { signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

loginModel = signal<LoginData>({
  email: '',
  password: ''
});

loginForm = form(this.loginModel, path => {
  required(path.email, { message: 'Email is required' });
  email(path.email, { message: 'Enter a valid email address' });
  required(path.password, { message: 'Password is required' });
});
```

Component imports:

```ts
@Component({
  imports: [FormField],
  templateUrl: './login.html'
})
```

Template:

```html
<input type="email" [formField]="loginForm.email">
<input type="password" [formField]="loginForm.password">
```

Read model:

```ts
const credentials = this.loginModel();
```

Read field state:

```ts
const emailValue = this.loginForm.email().value();
const isValid = this.loginForm.email().valid();
```

## Why Signal Forms are attractive

- model-first
- inferred typing
- reactive field state
- schema-style validation
- integrates naturally with signal-based applications

## Scenario: Registration form

Use a signal model for:

```ts
{
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
```

Then centralize required, email, length, and cross-field password matching rules in the form schema.

## Migration advice

Do not rewrite every existing reactive form only because Signal Forms exist. Migrate where the new model reduces complexity and where team/test coverage supports the change.

---

# 21. Reactive Forms

Reactive Forms remain extremely important in enterprise Angular.

## Basic example

```ts
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

profileForm = new FormGroup({
  name: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  }),
  email: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  })
});
```

```html
<form [formGroup]="profileForm" (ngSubmit)="save()">
  <input formControlName="name">
  <input formControlName="email">
  <button type="submit" [disabled]="profileForm.invalid">Save</button>
</form>
```

## `setValue` vs `patchValue`

`setValue` expects the complete structure.

```ts
this.profileForm.setValue({
  name: 'Asha',
  email: 'asha@example.com'
});
```

`patchValue` updates a subset.

```ts
this.profileForm.patchValue({
  name: 'Asha'
});
```

## `FormArray`

Use for dynamic lists.

Scenario: invoice line items.

```ts
lines = new FormArray([
  new FormGroup({
    description: new FormControl('', { nonNullable: true }),
    quantity: new FormControl(1, { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true })
  })
]);
```

## Custom validator

```ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function positiveNumber(control: AbstractControl): ValidationErrors | null {
  const value = Number(control.value);
  return value > 0 ? null : { positiveNumber: true };
}
```

## Async validator

Useful for server checks such as username uniqueness. Add debounce/cancellation thoughtfully to avoid sending a request for every keystroke.

## `valueChanges`

```ts
this.profileForm.controls.email.valueChanges
  .subscribe(email => console.log(email));
```

In real code, manage subscription lifetime or convert/interoperate with signals.

---

# 22. Template-Driven Forms

Template-driven forms are convenient for small forms.

```ts
import { FormsModule } from '@angular/forms';
```

```html
<form #form="ngForm" (ngSubmit)="submit()">
  <input
    name="email"
    [(ngModel)]="email"
    required
    email
  >

  <button [disabled]="form.invalid">Submit</button>
</form>
```

Use when:

- form is simple
- validation is straightforward
- team prefers template-centric code

Avoid for very dynamic forms with complicated cross-field state and large validation systems.

---

# 23. Routing

The Angular Router maps URLs to application views.

## Basic routes

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/user-list').then(m => m.UserList)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found/not-found').then(m => m.NotFound)
  }
];
```

## Router outlet

```html
<router-outlet />
```

## Router links

```html
<a routerLink="/users">Users</a>
<a [routerLink]="['/users', user.id]">Open</a>
```

## Route parameters

```ts
{
  path: 'users/:id',
  loadComponent: () => import('./user-detail').then(m => m.UserDetail)
}
```

Read parameter through `ActivatedRoute`:

```ts
private route = inject(ActivatedRoute);

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
}
```

For parameters that can change without destroying the component, use the observable/signal-friendly route state rather than relying only on snapshot.

## Query parameters

URL:

```text
/users?page=2&status=active
```

Useful for filters that should be bookmarkable/shareable.

## Child routes

```ts
{
  path: 'settings',
  loadComponent: () => import('./settings-shell').then(m => m.SettingsShell),
  children: [
    {
      path: 'profile',
      loadComponent: () => import('./profile').then(m => m.Profile)
    },
    {
      path: 'security',
      loadComponent: () => import('./security').then(m => m.Security)
    }
  ]
}
```

## Lazy loading

Lazy loading reduces initial JavaScript by loading route code only when needed.

```ts
loadComponent: () => import('./orders').then(m => m.Orders)
```

For route groups you can lazy-load route arrays as well.

## Guards

Functional guard example:

```ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn()
    ? true
    : router.createUrlTree(['/login']);
};
```

Remember: **client-side guards are not security boundaries**. The backend must enforce authorization.

## Resolvers

Resolvers load data before route activation when that improves UX/architecture.

Use carefully; blocking navigation for every API call can make apps feel slow.

## Route titles

Routes can define title information for browser/document titles.

## Preloading

Preloading can download lazy routes after initial startup, balancing startup performance with later navigation speed.

---

# 24. HTTP and API Integration

Configure HttpClient:

```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient()]
};
```

## API service

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserApi {
  private http = inject(HttpClient);
  private readonly baseUrl = '/api/users';

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  create(payload: Omit<User, 'id'>) {
    return this.http.post<User>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<User>) {
    return this.http.patch<User>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

## HttpClient Observables are cold

The request generally starts when the returned Observable is subscribed.

```ts
this.api.getAll().subscribe(...);
```

Multiple subscriptions can mean multiple requests unless you intentionally share/cache.

## Functional interceptor

```ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return next(req);
  }

  return next(req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }));
};
```

Register:

```ts
provideHttpClient(
  withInterceptors([authInterceptor])
)
```

## Interceptor uses

- auth headers
- correlation IDs
- consistent API error mapping
- telemetry
- caching where appropriate

Avoid placing feature-specific business logic into global interceptors.

## `httpResource`

For reactive GET-like data:

```ts
userId = signal(1);
user = httpResource(() => `/api/users/${this.userId()}`);
```

Use normal `HttpClient` for mutations.

## Validate server responses

TypeScript types do not validate runtime JSON.

This is unsafe:

```ts
this.http.get<User>('/api/user/1');
```

It tells TypeScript what you *expect*. It does not prove the server returned that shape.

For high-integrity applications, validate important API responses with a runtime schema/validation layer.

---

# 25. RxJS in Angular

RxJS models values that arrive over time as Observables.

## Observable mental model

```text
source → operators → subscriber
```

## Essential operators

### `map`

Transform values.

```ts
users$.pipe(
  map(users => users.map(u => u.name))
);
```

### `filter`

Ignore values that do not match.

### `tap`

Perform non-transforming side effects such as logging.

### `debounceTime`

Useful for search input.

### `distinctUntilChanged`

Ignore repeated equal values.

### `switchMap`

Switch to a new async source and cancel the previous inner subscription.

Perfect for typeahead search.

```ts
searchTerm$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
);
```

### `concatMap`

Queue operations in order.

Scenario: save sequential changes where order matters.

### `mergeMap`

Run inner operations concurrently.

Scenario: independent requests that may complete in any order.

### `exhaustMap`

Ignore new triggers while current operation is active.

Scenario: prevent repeated login button clicks from sending concurrent login requests.

### `catchError`

Handle errors within a stream.

### `forkJoin`

Wait for multiple finite Observables to complete and return combined final values.

### `combineLatest`

Combine latest values from long-lived streams.

## Async pipe

```html
@if (users$ | async; as users) {
  @for (user of users; track user.id) {
    <p>{{ user.name }}</p>
  }
}
```

The `async` pipe manages subscription/unsubscription.

## Signals ↔ RxJS interop

Modern Angular provides utilities to bridge signals and Observables. Use them when crossing boundaries instead of manually mirroring state with nested subscriptions/effects.

## Avoid nested subscriptions

Bad:

```ts
this.route.params.subscribe(params => {
  this.api.getUser(params['id']).subscribe(user => {
    this.api.getOrders(user.id).subscribe(orders => {
      // ...
    });
  });
});
```

Better: compose with RxJS operators such as `switchMap`.

---

# 26. State Management

State is information your application must remember.

Examples:

- logged-in user
- selected invoice
- shopping cart
- filter values
- cached API data
- UI modal state

## State categories

### Local component state

Use component signals.

```ts
isOpen = signal(false);
```

### Shared feature state

Use an injectable service/store.

```ts
@Injectable({ providedIn: 'root' })
export class CartStore {
  readonly items = signal<CartItem[]>([]);
  readonly count = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );
}
```

### Server state

Server-derived data should consider:

- loading
- error
- caching
- invalidation
- refetching
- optimistic updates

## Simple signal store pattern

```ts
@Injectable({ providedIn: 'root' })
export class UserStore {
  private api = inject(UserApi);

  private readonly _users = signal<User[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  load() {
    this._loading.set(true);
    this._error.set(null);

    this.api.getAll().subscribe({
      next: users => {
        this._users.set(users);
        this._loading.set(false);
      },
      error: () => {
        this._error.set('Could not load users');
        this._loading.set(false);
      }
    });
  }
}
```

For production, improve lifetime/error/cancellation patterns as needed.

## When to consider NgRx or another state library

Consider a dedicated state library when you have:

- complex cross-feature shared state
- complicated event flows
- strict auditability/predictability needs
- many derived selectors
- advanced effects and entity management
- team conventions built around store architecture

Do **not** add a global state library merely because the project is “enterprise.” Complexity should justify complexity.

---

# 27. Error Handling

Errors belong to different layers.

## User validation errors

Example: required email.

Handle in forms/UI.

## Expected domain errors

Example: “Invoice already approved.”

Display a meaningful message and preserve user context.

## HTTP errors

Map technical errors to domain-friendly outcomes.

```ts
return this.http.get<User[]>('/api/users').pipe(
  catchError(error => {
    console.error(error);
    return throwError(() => new Error('Unable to load users'));
  })
);
```

## Unexpected application errors

Log centrally and show a fallback UX where appropriate.

## Never expose sensitive backend details

Do not show raw stack traces, SQL text, internal hostnames, or secrets to users.

---

# 28. Authentication and Authorization

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to do?

## Typical SPA auth flow

```text
Login form
  ↓
POST /login
  ↓
Backend validates credentials
  ↓
Token/session established
  ↓
Client sends authenticated requests
  ↓
Backend enforces permissions
```

## Auth state service

```ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();

  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly isAdmin = computed(() => this._user()?.role === 'admin');
}
```

## Route guard

Use guards for navigation UX.

Do not rely on guards to protect data. Users can call backend APIs without using your Angular Router.

## Token storage

Security depends on backend/auth architecture. Common options include secure cookies and token-based flows. Avoid blindly copying localStorage JWT patterns into high-risk applications without understanding XSS, CSRF, token expiry, refresh strategy, and revocation.

---

# 29. Change Detection and Zoneless Angular

Change detection is how Angular synchronizes application state with rendered UI.

Historically Angular commonly used Zone.js to know that “something asynchronous happened” and schedule checks.

Modern Angular can run zoneless, and current Angular versions default to zoneless behavior for new/current applications.

## Good zoneless-compatible notification sources

Angular can react when you:

- update a signal read by a template
- trigger a bound template/host event
- update an input through Angular
- use mechanisms such as `AsyncPipe`
- explicitly mark a view for check when necessary

## Signals make UI updates explicit

```ts
count = signal(0);

increment() {
  this.count.update(v => v + 1);
}
```

Angular knows the template consuming `count()` may need updating.

## `OnPush`

`ChangeDetectionStrategy.OnPush` remains an important strategy and is a good discipline for predictable component updates, especially in legacy/transitioning codebases.

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
```

## Immutability matters

Bad:

```ts
this.user().name = 'New Name';
```

Better:

```ts
this.user.update(user => ({ ...user, name: 'New Name' }));
```

This creates a new object and communicates the state transition clearly.

---

# 30. Performance Optimization

Performance work should start with measurement.

## High-value practices

- lazy-load routes
- use `@defer` for heavy non-critical UI
- use stable tracking in `@for`
- avoid expensive template functions
- use `computed` for derived state
- split large components
- avoid unnecessary global state
- optimize images
- use SSR/hydration when it meaningfully helps
- reduce bundle size
- remove unused dependencies
- use browser performance tools and Angular DevTools

## `@for` tracking

Bad:

```html
@for (row of rows(); track $index) {
```

If rows can reorder/insert/delete, index tracking may cause unnecessary DOM reuse issues.

Better:

```html
@for (row of rows(); track row.id) {
```

## Avoid expensive template methods

Bad:

```html
<p>{{ calculateInvoiceTotal(invoice()) }}</p>
```

Better:

```ts
invoiceTotal = computed(() => calculateInvoiceTotal(this.invoice()));
```

## Bundle budgets

Configure build budgets to detect accidental bundle growth.

## Image optimization

Use Angular/image optimization guidance and modern web image formats where appropriate.

---

# 31. Deferrable Views

`@defer` delays loading/rendering of a block until a trigger occurs.

```html
@defer (on viewport) {
  <app-heavy-chart />
} @placeholder {
  <div class="chart-skeleton">Chart placeholder</div>
} @loading {
  <p>Loading chart...</p>
} @error {
  <p>Could not load chart.</p>
}
```

Common triggers include viewport, interaction, idle, timer, and conditions.

## Scenario: Analytics dashboard

Above the fold:

- KPI cards: load immediately

Below the fold:

- complex charts
- geographic map
- historical tables

Defer the below-the-fold features.

## Avoid over-deferring

Do not defer tiny UI fragments just because you can. Every boundary creates complexity and loading states.

---

# 32. SSR, SSG, Hydration, and Hybrid Rendering

## CSR — Client-Side Rendering

Browser receives the application and renders UI client-side.

Good for internal apps where SEO/first-content requirements may be less important.

## SSR — Server-Side Rendering

Server renders HTML for a request before sending it to the browser.

Benefits can include:

- faster initial content
- SEO
- social previews
- better perceived load performance

Trade-offs:

- server complexity
- hydration constraints
- environment differences
- caching decisions

## SSG / prerendering

Generate pages ahead of time.

Excellent for content that changes infrequently.

## Hybrid rendering

Different routes can use different rendering strategies.

Example:

```text
/marketing        → prerender
/products/:slug   → server render
/admin            → client render
```

## Hydration

Hydration reuses server-rendered DOM on the client instead of throwing it away and rebuilding everything.

## Incremental hydration

Incremental hydration can delay hydration of portions of the page until they are needed, working especially well with deferred UI and performance-sensitive SSR applications.

## Browser-only APIs

Code like this can fail during server rendering:

```ts
window.localStorage.getItem('token');
```

Use platform-aware architecture and only access browser APIs where the browser is actually available.

---

# 33. Styling, CSS, and Theming

Angular supports regular CSS, SCSS, and other configured style workflows.

## Component-scoped styles

```ts
@Component({
  styleUrl: './profile.scss'
})
```

Angular's view encapsulation normally scopes styles so component CSS does not casually leak everywhere.

## CSS variables for design tokens

```css
:root {
  --brand: #4f46e5;
  --surface: #ffffff;
  --text: #111827;
}
```

```css
.button-primary {
  background: var(--brand);
}
```

## Theme architecture

Prefer central tokens for:

- colors
- spacing
- radius
- typography
- shadows
- z-index layers

Avoid 40 slightly different hard-coded blues across components.

## Host selector

```css
:host {
  display: block;
}
```

## Avoid deep style coupling

A parent should not know the private DOM structure of every child component.

---

# 34. Angular Animations and Native CSS Animation Strategy

Animation strategy has evolved in Angular and the web platform.

For many UI transitions, prefer modern CSS transitions/animations because they are simple, performant, and platform-native.

```css
.panel {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 160ms ease, transform 160ms ease;
}

.panel.open {
  opacity: 1;
  transform: translateY(0);
}
```

Use Angular-specific animation capabilities when you need Angular-aware enter/leave orchestration or richer state-driven transitions.

Always respect `prefers-reduced-motion` for accessibility.

---

# 35. Accessibility

Accessibility is a functional requirement, not visual polish.

## Core practices

- semantic HTML
- real `<button>` for actions
- real `<a>` for navigation
- label form fields
- keyboard support
- visible focus states
- logical heading order
- sufficient contrast
- descriptive alt text
- ARIA only where needed
- announce meaningful dynamic state

Bad:

```html
<div (click)="save()">Save</div>
```

Better:

```html
<button type="button" (click)="save()">Save</button>
```

## Angular Aria / CDK

Angular's accessibility-oriented primitives and CDK can help with robust interaction patterns. Still test with keyboard and assistive-technology workflows.

---

# 36. Security

## XSS

Angular automatically escapes normal interpolation.

```html
<p>{{ untrustedComment }}</p>
```

Be extremely careful with HTML bypass/sanitizer escape hatches.

## Never trust client-side checks

This is only UX:

```ts
@if (auth.isAdmin()) {
  <button>Delete user</button>
}
```

Backend must still verify the user is authorized to delete users.

## Secrets do not belong in Angular builds

Anything delivered to the browser can be inspected.

Do not put:

- database passwords
- private API keys
- signing secrets
- service-account secrets

into Angular environment files and assume they are protected.

## CSRF/XSRF

Understand how your authentication transport works. Cookie-based authentication may require CSRF protection strategies.

## CSP

A strong Content Security Policy reduces XSS impact. Coordinate with deployment/backend teams.

## Dependency security

Keep Angular and dependencies updated, review advisories, and remove abandoned packages.

---

# 37. Testing

Modern Angular CLI projects use Vitest by default for unit testing, while older projects may still use Karma/Jasmine.

## What to test

Test behavior and contracts:

- component rendering
- user interactions
- form validation
- services
- guards
- HTTP logic
- routing
- state transitions
- pure business functions

## Basic component test

```ts
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { Counter } from './counter';

describe('Counter', () => {
  it('increments', async () => {
    const fixture = TestBed.createComponent(Counter);
    const component = fixture.componentInstance;

    component.increment();
    await fixture.whenStable();

    expect(component.count()).toBe(1);
  });
});
```

## Service test

```ts
TestBed.configureTestingModule({});
const service = TestBed.inject(CalculatorService);
expect(service.add(2, 3)).toBe(5);
```

## HTTP testing

Use Angular's HTTP testing utilities so tests do not hit real servers.

Concept:

```text
Call service
  ↓
HttpTestingController captures request
  ↓
assert method/url/body
  ↓
flush mock response
  ↓
assert service output
```

## Router testing

Test navigation outcomes, guards, route params, and routed rendering where relevant.

## E2E testing

Angular does not force one universal E2E framework. Popular teams use tools such as Playwright or Cypress depending on ecosystem decisions.

## Testing pyramid

A practical balance:

```text
few end-to-end tests
more integration/component tests
many fast unit/pure-function tests
```

Do not chase coverage percentage while missing critical behavior.

---

# 38. Angular Material and CDK

Angular Material provides ready-made UI components following Material Design principles.

Install:

```bash
ng add @angular/material
```

Common components:

- buttons
- form fields
- dialogs
- menus
- tables
- paginator
- sorting
- datepicker
- sidenav
- tabs
- snackbar

## CDK

The Component Dev Kit provides lower-level behavior primitives such as:

- overlay
- portal
- drag/drop
- virtual scrolling
- a11y helpers
- layout utilities
- component harnesses

Use CDK when you want behavior without Material's visual design.

---

# 39. Internationalization

Internationalization (i18n) prepares an application for multiple languages/locales.

Concerns include:

- translated text
- pluralization
- date formatting
- number formatting
- currency formatting
- directionality (LTR/RTL)

Use locale-aware formatting rather than manually concatenating date/currency strings.

Example:

```html
<p>{{ amount | currency:'INR' }}</p>
<p>{{ createdAt | date:'longDate' }}</p>
```

For large multilingual products, design translation keys/processes and QA workflows early.

---

# 40. PWA and Service Workers

A Progressive Web App can provide offline-aware behavior, caching, installability, and update flows.

Angular provides service-worker tooling.

```bash
ng add @angular/pwa
```

Use cases:

- field apps with unstable connectivity
- catalog browsing
- frequently used dashboards

Be careful caching authenticated or rapidly changing data. A stale service-worker cache can create confusing behavior if caching rules are poorly designed.

---

# 41. Web Workers

Web Workers run JavaScript away from the main UI thread.

Useful for CPU-heavy operations such as:

- large calculations
- parsing
- image/data transformations
- expensive algorithms

Not useful for ordinary API calls—the browser already handles network I/O asynchronously.

Workers cannot directly manipulate your DOM. Communicate using messages/data transfer.

---

# 42. Custom Libraries

Create reusable Angular libraries for shared capabilities across applications.

```bash
ng generate library company-ui
```

Potential library contents:

- design-system components
- auth SDK
- API client
- shared validation
- domain models

## Library design rules

- small public API
- avoid leaking internals
- semantic versioning
- tests
- documentation/examples
- avoid app-specific global assumptions

A library should be reusable because it expresses a stable shared contract, not merely because two files happen to look similar today.

---

# 43. Monorepos and Large Workspaces

Angular CLI supports multi-project workspaces, and external tools such as Nx can add advanced monorepo orchestration.

A large organization may structure:

```text
apps/
  admin/
  customer-portal/
libs/
  ui/
  auth/
  orders-domain/
  invoices-data-access/
```

Benefits:

- shared code
- atomic changes
- centralized tooling
- consistent versions

Risks:

- accidental coupling
- giant CI pipelines
- unclear ownership
- “shared” dumping grounds

Define dependency boundaries.

---

# 44. Environment and Configuration Management

Applications commonly need environment-specific API roots or feature flags.

## Important principle

Frontend configuration is **not secret**.

A value bundled into JavaScript is visible to users.

## Build-time configuration

Useful when deployment produces separate artifacts per environment.

## Runtime configuration

Useful when one build artifact must deploy to multiple environments.

Example architecture:

```text
/index.html
/assets/runtime-config.json
/main-*.js
```

The app loads non-secret runtime endpoints/settings during startup.

## Feature flags

Use feature flags to control rollout, but the backend must still enforce security-sensitive capabilities.

---

# 45. Build, Deployment, and CI/CD

Production build:

```bash
ng build
```

Do not deploy the development server (`ng serve`) as production hosting.

## SPA server rewrite

If the user opens:

```text
/orders/123
```

directly, your web server must usually rewrite unknown frontend routes to the Angular `index.html` while still serving real static files normally.

Without rewrite configuration, browser refresh can return 404 even though Angular routing works during client navigation.

## Typical CI pipeline

```text
Checkout
  ↓
Install exact dependencies
  ↓
Lint / format checks
  ↓
Unit tests
  ↓
Build
  ↓
Security/dependency checks
  ↓
Publish artifact
  ↓
Deploy
  ↓
Smoke test
```

## Reproducible installs

In CI, prefer lockfile-respecting installation such as:

```bash
npm ci
```

## Cache busting

Angular production builds use content-hashed assets so new deployments can coexist safely with browser caching.

---

# 46. Architecture Patterns

## Smart/container vs presentational components

Useful conceptual split:

### Container/page

- route-aware
- loads data
- coordinates state
- handles business interactions

### Presentational component

- receives data through inputs
- emits user intent through outputs
- minimal business knowledge

Do not force every component into a rigid label, but keep responsibilities clear.

## Facade pattern

A feature facade gives components a stable API over state/API complexity.

```ts
@Injectable()
export class OrdersFacade {
  readonly orders = ...;
  readonly loading = ...;

  load() { ... }
  approve(id: number) { ... }
}
```

Components do not care whether implementation uses signals, RxJS, NgRx, or HTTP directly.

## Repository/data-access pattern

Useful when backend interaction is complex or multiple API sources exist.

```text
OrderPage
  ↓
OrderFacade
  ↓
OrderRepository
  ↓
HttpClient
```

## Domain logic

Pure functions are powerful:

```ts
export function calculateInvoiceTotal(lines: InvoiceLine[]): number {
  return lines.reduce(
    (total, line) => total + line.quantity * line.unitPrice,
    0
  );
}
```

They are easy to test and independent of Angular.

---

# 47. Enterprise Folder Structure

Example:

```text
src/app/
├─ core/
│  ├─ auth/
│  │  ├─ auth.service.ts
│  │  ├─ auth.guard.ts
│  │  └─ auth.interceptor.ts
│  ├─ config/
│  ├─ error/
│  └─ layout/
├─ shared/
│  ├─ ui/
│  ├─ directives/
│  ├─ pipes/
│  └─ utilities/
├─ features/
│  ├─ invoices/
│  │  ├─ pages/
│  │  ├─ ui/
│  │  ├─ data-access/
│  │  ├─ state/
│  │  ├─ models/
│  │  └─ invoices.routes.ts
│  └─ users/
└─ app.routes.ts
```

## Feature boundaries

Inside `invoices/`, keep invoice-specific:

- API calls
- models
- components
- state
- routing

Do not move everything to `shared` too early.

A good rule:

> Code is shared after it proves it is shared.

---

# 48. Common Angular Anti-Patterns

## 1. Massive components

Symptom: 1,000+ line component with many unrelated responsibilities.

Fix: split UI, state, and data-access responsibilities.

## 2. `any` everywhere

Fix: create domain types and runtime validation where necessary.

## 3. Subscribing inside subscribing

Fix: compose RxJS pipelines.

## 4. Manual derived-state synchronization

Bad:

```ts
price = signal(10);
qty = signal(2);
total = signal(20);
```

Fix:

```ts
total = computed(() => this.price() * this.qty());
```

## 5. Business logic in templates

Templates should render and dispatch intent, not become mini-programs.

## 6. Huge global shared service

Split by domain responsibility.

## 7. Storing secrets in environment files

Frontend code is public to the browser.

## 8. Trusting route guards as security

Backend authorization is mandatory.

## 9. Using `localStorage` for every state value

Use it only for data that genuinely needs browser persistence and is appropriate to store there.

## 10. Mutating signal objects/arrays without creating a clear new state

Prefer immutable updates.

## 11. Premature global state library

Start with the simplest state boundary that solves the problem.

## 12. Ignoring loading/error/empty states

Every data screen should consider:

```text
loading
success
empty
error
permission denied
```

---

# 49. Debugging Guide

## First questions

1. Is the component created?
2. Is the route correct?
3. Is the API request sent?
4. What response/status came back?
5. Is the state updated?
6. Is the template reading the correct state?
7. Is the browser console showing an exception?

## Common tools

- browser console
- Network tab
- Elements tab
- Source maps
- Angular DevTools
- `ng version`
- TypeScript compiler errors
- unit tests

## “UI not updating”

Check:

- signal update actually happened
- you mutated an object without changing reactive state correctly
- component expects an input that never changed
- reactive form state is not notifying a zoneless template in your chosen pattern
- a third-party callback is outside your intended update mechanism

## “Route refresh gives 404”

Likely server rewrite configuration, not Angular Router code.

## “API works in Postman but fails in browser”

Investigate:

- CORS
- cookies/credentials
- TLS certificate
- mixed content
- proxy/base URL
- authentication headers

## “Expression changed” / lifecycle timing problems

Avoid changing bound state in a timing-sensitive lifecycle phase solely to “make the error disappear.” Understand why the state changes after a render/check and redesign the flow.

---

# 50. Migration Strategy for Legacy Angular Apps

Never jump into a large upgrade by changing every concept at once.

## Recommended sequence

1. Commit/branch clean baseline.
2. Ensure tests/build run.
3. Read Angular Update Guide.
4. Upgrade one major version at a time.
5. Apply migrations.
6. Fix build/tests.
7. Commit.
8. Continue to next major.
9. After framework upgrade, modernize patterns incrementally.

## Modernization stages

### Stage 1 — Framework compatibility

Get supported Angular/Node/TypeScript versions working.

### Stage 2 — Standalone

Move from NgModule-centric architecture where beneficial.

### Stage 3 — Built-in control flow

Convert common `*ngIf` / `*ngFor` patterns.

### Stage 4 — Modern DI

Adopt `inject()` where it improves readability/migration compatibility.

### Stage 5 — Signal APIs

Introduce Signals for component and feature state.

### Stage 6 — Signal inputs/outputs/queries

Modernize component APIs where useful.

### Stage 7 — Zoneless compatibility

Remove assumptions that require Zone.js.

### Stage 8 — Modern testing

Move to the current recommended test tooling when practical.

### Stage 9 — SSR/performance upgrades

Only after correctness is stable.

## Do not combine all migrations in one giant PR

Large “modernize everything” PRs are hard to review and rollback.

---

# 51. Real-World Mini Project: Product Admin Portal

This section connects many concepts.

## Requirements

Build an admin portal with:

- login
- product list
- search
- product create/edit form
- product details
- role-based delete button
- lazy routes
- API integration
- loading/error states
- tests

## Domain model

```ts
export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  active: boolean;
}
```

## API service

```ts
@Injectable({ providedIn: 'root' })
export class ProductApi {
  private http = inject(HttpClient);
  private baseUrl = '/api/products';

  list() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  get(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  create(payload: Omit<Product, 'id'>) {
    return this.http.post<Product>(this.baseUrl, payload);
  }

  update(id: number, payload: Partial<Product>) {
    return this.http.patch<Product>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

## Product list state

```ts
@Injectable()
export class ProductListStore {
  private api = inject(ProductApi);

  private readonly _products = signal<Product[]>([]);
  private readonly _search = signal('');
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly search = this._search.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly products = computed(() => {
    const q = this._search().trim().toLowerCase();
    return this._products().filter(product =>
      product.name.toLowerCase().includes(q) ||
      product.sku.toLowerCase().includes(q)
    );
  });

  setSearch(value: string) {
    this._search.set(value);
  }

  load() {
    this._loading.set(true);
    this._error.set(null);

    this.api.list().subscribe({
      next: products => {
        this._products.set(products);
        this._loading.set(false);
      },
      error: () => {
        this._error.set('Could not load products');
        this._loading.set(false);
      }
    });
  }
}
```

## List page template

```html
<input
  type="search"
  placeholder="Search products"
  [value]="store.search()"
  (input)="store.setSearch($any($event.target).value)"
>

@if (store.loading()) {
  <p>Loading products...</p>
} @else if (store.error(); as error) {
  <p>{{ error }}</p>
} @else {
  @for (product of store.products(); track product.id) {
    <a [routerLink]="['/products', product.id]">
      {{ product.sku }} — {{ product.name }}
    </a>
  } @empty {
    <p>No products found.</p>
  }
}
```

## Routes

```ts
export const productRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/product-list').then(m => m.ProductList)
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/product-editor').then(m => m.ProductEditor)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/product-detail').then(m => m.ProductDetail)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./pages/product-editor').then(m => m.ProductEditor)
  }
];
```

Main route:

```ts
{
  path: 'products',
  canActivate: [authGuard],
  loadChildren: () =>
    import('./features/products/product.routes').then(m => m.productRoutes)
}
```

## Edit form design

Choose:

- Signal Forms for a modern signal-first app
- Reactive Forms if your enterprise form infrastructure already relies on it

Validation rules:

- SKU required
- name required
- price > 0

## Authorization UX

```html
@if (auth.isAdmin()) {
  <button (click)="deleteProduct()">Delete</button>
}
```

Backend must also reject unauthorized delete requests.

## What this project teaches

- feature architecture
- routes
- DI
- HTTP
- Signals
- forms
- loading/error states
- auth UX
- testable service boundaries

---

# 52. Interview and Revision Checklist

You should be able to explain these without memorized definitions:

## Core

- What is Angular?
- Angular vs AngularJS?
- What is a component?
- What is a template?
- interpolation vs property binding vs event binding?
- standalone components?
- built-in control flow?

## Reactivity

- signal vs computed vs effect?
- Signals vs RxJS?
- when use `switchMap`?
- why avoid nested subscriptions?

## Components

- input/output/model?
- content projection?
- lifecycle hooks?
- view/content queries?

## DI

- what is dependency injection?
- `providedIn: 'root'`?
- injection token?
- provider scopes?

## Forms

- Signal Forms vs Reactive Forms vs Template-driven?
- sync/async validators?
- FormGroup/FormArray?

## Router

- lazy loading?
- route params vs query params?
- guard vs resolver?
- why guards are not security?

## HTTP

- interceptors?
- Observable nature of HttpClient?
- `httpResource` vs HttpClient?

## Performance

- `track` in `@for`?
- `@defer`?
- lazy loading?
- SSR/hydration?
- zoneless?

## Testing

- TestBed?
- service/component test?
- HTTP testing?
- Vitest vs legacy Karma?

## Security

- XSS?
- sanitizer bypass risk?
- frontend secrets?
- backend authorization?

---

# 53. Learning Roadmap

## Phase 1 — Beginner

Build 3 small apps using:

- components
- templates
- binding
- `@if`, `@for`, `@switch`
- signals
- input/output
- basic forms

Projects:

1. Todo list
2. Expense calculator
3. Contact manager

## Phase 2 — Intermediate

Learn:

- services
- DI
- router
- HTTP
- reactive/signal forms
- RxJS basics
- route guards
- interceptors

Projects:

1. Product CRUD
2. Employee directory
3. Blog admin

## Phase 3 — Advanced

Learn:

- state architecture
- complex RxJS
- signal/RxJS interoperability
- performance
- testing
- custom directives/pipes
- reusable UI
- error architecture

Project:

- multi-role enterprise dashboard

## Phase 4 — Production

Learn:

- auth security model
- SSR/hydration
- accessibility
- CI/CD
- logging/monitoring
- bundle optimization
- deployment rewrites
- migration strategy

## Phase 5 — Senior/Architect

Learn to reason about:

- boundaries
- state ownership
- caching
- server/client rendering trade-offs
- library APIs
- design systems
- monorepo boundaries
- migration risk
- observability
- performance budgets
- team conventions

---

# 54. Glossary

**Component** — A UI building block with behavior, template, and styles.

**Directive** — Behavior attached to an element/component.

**Pipe** — Display-oriented value transformation.

**Signal** — Reactive value tracked by Angular.

**Computed** — Read-only derived signal.

**Effect** — Side effect triggered by reactive dependencies.

**Observable** — RxJS stream of values over time.

**DI** — Dependency Injection; framework-managed dependency creation/resolution.

**Provider** — Recipe for creating/resolving a dependency.

**InjectionToken** — DI key often used for configuration/non-class dependencies.

**Standalone** — Component/directive/pipe architecture that does not require declaring everything in an NgModule.

**NgModule** — Legacy/still-supported grouping mechanism heavily used by older Angular apps.

**Router** — Maps URLs to application views.

**Guard** — Controls route navigation behavior.

**Resolver** — Preloads data for a route before activation.

**Interceptor** — Middleware for HttpClient requests/responses.

**CSR** — Client-side rendering.

**SSR** — Server-side rendering.

**SSG** — Static site generation/prerendering.

**Hydration** — Reusing server-rendered DOM when Angular starts in the browser.

**Incremental Hydration** — Hydrating portions of the app progressively as needed.

**Zoneless** — Angular change-detection scheduling without depending on Zone.js.

**Tree shaking** — Removing unused code from production bundles.

**Lazy loading** — Loading code only when needed.

**Deferrable view** — Template block loaded/rendered based on a trigger using `@defer`.

---

# 55. Official References

Use official Angular sources as the final authority, especially when upgrading versions:

- Angular documentation: https://angular.dev/
- Angular version compatibility: https://angular.dev/reference/versions
- Angular release/support policy: https://angular.dev/reference/releases
- Angular Update Guide: https://angular.dev/update-guide
- Angular migrations: https://angular.dev/reference/migrations
- Angular roadmap: https://angular.dev/roadmap
- Angular GitHub repository/changelog: https://github.com/angular/angular
- Angular CLI repository: https://github.com/angular/angular-cli

---

# Appendix A — Modern Angular Quick Reference

## Component

```ts
@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/users', user().id]">
      {{ user().name }}
    </a>
  `
})
export class UserCard {
  user = input.required<User>();
}
```

## Signal

```ts
count = signal(0);
double = computed(() => this.count() * 2);
```

## Output

```ts
selected = output<number>();
this.selected.emit(id);
```

## Service injection

```ts
private api = inject(UserApi);
```

## Route

```ts
{
  path: 'users',
  loadComponent: () => import('./users').then(m => m.Users)
}
```

## HTTP

```ts
return this.http.get<User[]>('/api/users');
```

## Reactive GET state

```ts
users = httpResource<User[]>(() => '/api/users');
```

## Control flow

```html
@if (users.hasValue()) {
  @for (user of users.value(); track user.id) {
    <p>{{ user.name }}</p>
  } @empty {
    <p>No users.</p>
  }
}
```

## Deferred block

```html
@defer (on viewport) {
  <app-chart />
} @placeholder {
  <app-chart-skeleton />
}
```

---

# Appendix B — Legacy Angular Translation Table

| Older pattern | Modern direction |
|---|---|
| NgModule-first architecture | Standalone-first architecture |
| `*ngIf` | `@if` |
| `*ngFor` | `@for` |
| `@Input()` | `input()` / `input.required()` where appropriate |
| `@Output() + EventEmitter` | `output()` where appropriate |
| constructor-only DI | `inject()` is a modern ergonomic option |
| manual derived state | `computed()` |
| many local Subjects | consider Signals for local synchronous state |
| eagerly loaded feature routes | lazy routes/components |
| Zone.js assumptions | zoneless-compatible reactivity |
| Karma/Jasmine default | Vitest default in current CLI |

Do not mechanically replace every old pattern. Understand the reason for the new pattern first.

---

# Appendix C — Production Readiness Checklist

## Correctness

- [ ] Strict TypeScript enabled
- [ ] No unexplained `any`
- [ ] API errors handled
- [ ] loading/empty/error states designed
- [ ] forms validate both client and server expectations

## Security

- [ ] backend enforces authorization
- [ ] no secrets in frontend bundle
- [ ] no unsafe sanitizer bypass without review
- [ ] auth token/cookie strategy reviewed
- [ ] security headers configured at deployment layer

## Performance

- [ ] large routes lazy-loaded
- [ ] stable `track` keys used in loops
- [ ] heavy below-fold UI considered for `@defer`
- [ ] images optimized
- [ ] bundle budgets reviewed
- [ ] expensive template computations removed

## Accessibility

- [ ] semantic controls
- [ ] keyboard flow tested
- [ ] labels present
- [ ] focus visible
- [ ] color contrast checked
- [ ] reduced-motion considered

## Testing

- [ ] core business logic unit-tested
- [ ] critical components tested
- [ ] HTTP behavior mocked/tested
- [ ] critical routes/guards tested
- [ ] high-value E2E flows covered

## Operations

- [ ] production build used
- [ ] SPA rewrites configured
- [ ] environment configuration correct
- [ ] logs/monitoring available
- [ ] source maps/security policy intentionally configured
- [ ] rollback process known

---

# Final Learning Advice

Angular mastery does not mean knowing every decorator, operator, or CLI flag from memory. It means being able to answer four questions for a feature:

1. **Where should this state live?**
2. **How should data flow between UI, services, and backend?**
3. **Which reactive tool makes that flow simplest and safest?**
4. **How will this feature remain testable, secure, accessible, and maintainable after the project grows?**

If you can consistently make good decisions about those four questions, the APIs become details you can look up when needed.
