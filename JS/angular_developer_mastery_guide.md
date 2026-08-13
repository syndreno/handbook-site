# Angular Developer Mastery Guide

> **Goal:** Become a production-ready, senior-level Angular developer who can design, build, test, optimize, secure, deploy, debug, review, and maintain large Angular applications.
>
> **Current baseline:** Angular **v22** ecosystem, verified August 2026.
>
> This roadmap teaches modern Angular first: standalone architecture, Signals, modern template control flow, zoneless change detection, Signal Forms, RxJS interoperability, functional APIs, SSR/hydration, and modern testing. It also covers legacy concepts such as NgModules because real enterprise applications may still use them.

---

# Table of Contents

1. [What a Strong Angular Developer Must Know](#1-what-a-strong-angular-developer-must-know)
2. [Phase 0 - Development Environment](#2-phase-0---development-environment)
3. [Phase 1 - Web Fundamentals](#3-phase-1---web-fundamentals)
4. [Phase 2 - JavaScript Deep Dive](#4-phase-2---javascript-deep-dive)
5. [Phase 3 - TypeScript Mastery](#5-phase-3---typescript-mastery)
6. [Phase 4 - Angular Fundamentals](#6-phase-4---angular-fundamentals)
7. [Phase 5 - Components in Depth](#7-phase-5---components-in-depth)
8. [Phase 6 - Templates and Modern Control Flow](#8-phase-6---templates-and-modern-control-flow)
9. [Phase 7 - Angular Signals and Reactivity](#9-phase-7---angular-signals-and-reactivity)
10. [Phase 8 - Dependency Injection](#10-phase-8---dependency-injection)
11. [Phase 9 - Services and Application Logic](#11-phase-9---services-and-application-logic)
12. [Phase 10 - Angular Router](#12-phase-10---angular-router)
13. [Phase 11 - Forms](#13-phase-11---forms)
14. [Phase 12 - HTTP and API Integration](#14-phase-12---http-and-api-integration)
15. [Phase 13 - RxJS Mastery](#15-phase-13---rxjs-mastery)
16. [Phase 14 - Signals vs RxJS](#16-phase-14---signals-vs-rxjs)
17. [Phase 15 - State Management](#17-phase-15---state-management)
18. [Phase 16 - Component Architecture](#18-phase-16---component-architecture)
19. [Phase 17 - Styling and UI Engineering](#19-phase-17---styling-and-ui-engineering)
20. [Phase 18 - Accessibility](#20-phase-18---accessibility)
21. [Phase 19 - Security](#21-phase-19---security)
22. [Phase 20 - Performance Optimization](#22-phase-20---performance-optimization)
23. [Phase 21 - SSR, SSG and Hydration](#23-phase-21---ssr-ssg-and-hydration)
24. [Phase 22 - Testing](#24-phase-22---testing)
25. [Phase 23 - Error Handling and Observability](#25-phase-23---error-handling-and-observability)
26. [Phase 24 - Angular Architecture for Enterprise Applications](#26-phase-24---angular-architecture-for-enterprise-applications)
27. [Phase 25 - Clean Code and Coding Standards](#27-phase-25---clean-code-and-coding-standards)
28. [Phase 26 - Git and Team Development](#28-phase-26---git-and-team-development)
29. [Phase 27 - Build, Deployment and CI/CD](#29-phase-27---build-deployment-and-cicd)
30. [Phase 28 - Browser and Frontend Debugging](#30-phase-28---browser-and-frontend-debugging)
31. [Phase 29 - Legacy Angular Knowledge](#31-phase-29---legacy-angular-knowledge)
32. [Phase 30 - Advanced Angular Topics](#32-phase-30---advanced-angular-topics)
33. [Phase 31 - Design Patterns](#33-phase-31---design-patterns)
34. [Phase 32 - Backend Knowledge for Angular Developers](#34-phase-32---backend-knowledge-for-angular-developers)
35. [Phase 33 - Projects to Build](#35-phase-33---projects-to-build)
36. [Phase 34 - Angular Interview Preparation](#36-phase-34---angular-interview-preparation)
37. [24-Week Learning Plan](#37-24-week-learning-plan)
38. [Senior Angular Developer Checklist](#38-senior-angular-developer-checklist)
39. [Common Angular Mistakes](#39-common-angular-mistakes)
40. [Recommended Learning Order](#40-recommended-learning-order)
41. [Official References](#41-official-references)

---

# 1. What a Strong Angular Developer Must Know

Being a strong Angular developer means much more than knowing components and services.

You should be comfortable across these layers:

```text
Browser fundamentals
        ↓
HTML + CSS + JavaScript
        ↓
TypeScript
        ↓
Angular core
        ↓
Signals + RxJS
        ↓
Router + Forms + HTTP
        ↓
Architecture + State
        ↓
Testing + Security + Accessibility
        ↓
Performance + SSR
        ↓
Build + CI/CD + Production debugging
        ↓
Team leadership + code review + design decisions
```

A senior Angular developer should be able to answer questions such as:

- Where should this state live?
- Should this value be a Signal, Observable, plain property, route state, or store state?
- Should this feature be eagerly or lazily loaded?
- Should data load in a component, service, resolver, resource, or store?
- How should API errors be normalized?
- How can this component remain reusable?
- How will this code behave with SSR?
- Is this UI accessible using only a keyboard?
- Why did change detection run?
- Why is the initial bundle large?
- Why is this API being called multiple times?
- How should authentication tokens be handled?
- How should feature boundaries be defined?
- How can the code be tested without brittle implementation-level mocks?
- How should a large Angular application be split between teams?

Those are the questions this roadmap prepares you to handle.

---

# 2. Phase 0 - Development Environment

Before learning Angular deeply, become comfortable with your development environment.

## Required tools

Learn:

- Node.js
- npm
- Angular CLI
- Git
- VS Code or another TypeScript-capable IDE
- Chrome/Edge DevTools
- Terminal / PowerShell / Bash

Verify:

```bash
node --version
npm --version
npx ng version
git --version
```

## Angular CLI

Know the purpose of:

```bash
ng new
ng serve
ng generate
ng build
ng test
ng update
ng add
ng lint
```

Useful generation examples:

```bash
ng generate component users/user-list
ng generate service core/auth
ng generate guard auth
ng generate interceptor auth
ng generate pipe shared/currency-format
```

Do not memorize every CLI command. Understand how schematics modify a workspace safely.

## package.json

Understand:

- `dependencies`
- `devDependencies`
- `scripts`
- semantic versioning
- lock files
- npm package resolution

Example:

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  }
}
```

## Configuration files

Know why these exist:

```text
angular.json
package.json
package-lock.json
tsconfig.json
tsconfig.app.json
tsconfig.spec.json
src/
public/
```

Learn environment/configuration patterns without hard-coding secrets in frontend source.

---

# 3. Phase 1 - Web Fundamentals

Angular cannot compensate for weak web fundamentals.

## HTML

Master:

- semantic HTML
- headings
- forms
- labels
- buttons
- links
- tables
- lists
- images
- native form controls
- `data-*`
- ARIA basics
- keyboard focus
- DOM structure

Prefer:

```html
<button type="button">Save</button>
```

over:

```html
<div (click)="save()">Save</div>
```

The native button already gives you keyboard, accessibility, focus, and semantic behavior.

## CSS

Master:

- selectors
- cascade
- specificity
- inheritance
- box model
- display
- positioning
- Flexbox
- CSS Grid
- responsive layouts
- media/container queries
- CSS variables/custom properties
- transitions
- animations
- pseudo-classes
- pseudo-elements
- logical properties
- modern viewport units
- typography
- CSS architecture

You should understand why a style applies—not keep adding `!important`.

## Browser fundamentals

Learn:

- DOM
- CSSOM
- render tree
- layout
- paint
- compositing
- event loop
- task queue
- microtask queue
- HTTP
- HTTPS
- cookies
- localStorage
- sessionStorage
- IndexedDB
- CORS
- CSP
- same-origin policy
- browser caching
- DNS basics
- HTTP status codes

## HTTP status codes

Know at minimum:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
429 Too Many Requests
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

---

# 4. Phase 2 - JavaScript Deep Dive

You should understand JavaScript independently of Angular.

## Variables

Know:

```javascript
const
let
```

Avoid `var` in modern application code unless you are studying legacy behavior.

## Types

Understand:

```text
string
number
boolean
null
undefined
symbol
bigint
object
```

Understand primitive vs reference semantics.

## Equality

Understand:

```javascript
=== 
!== 
Object.is()
```

Avoid relying on coercive equality unless you have a deliberate reason.

## Functions

Learn:

- function declarations
- expressions
- arrow functions
- callbacks
- higher-order functions
- closures
- lexical scope

Example:

```javascript
function createCounter() {
  let count = 0;

  return () => ++count;
}
```

Understand why `count` remains available.

## Objects

Master:

```javascript
const user = {
  id: 1,
  name: 'Asha'
};

const updated = {
  ...user,
  name: 'Ravi'
};
```

Learn immutability patterns.

## Arrays

Master:

```javascript
map
filter
find
findIndex
some
every
reduce
sort
toSorted
flat
flatMap
```

Understand when a method mutates the original array.

## Destructuring

```javascript
const { id, name } = user;
const [first, second] = items;
```

## Spread and rest

```javascript
const newArray = [...oldArray, newItem];

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

## Optional chaining

```javascript
user.address?.city
```

## Nullish coalescing

```javascript
const displayName = user.name ?? 'Unknown';
```

Understand why `??` differs from `||`.

## Classes

Understand:

- constructor
- public/private/protected
- static
- inheritance
- composition

Angular uses classes heavily, but do not force object-oriented inheritance where composition is cleaner.

## Modules

Understand:

```javascript
export
export default
import
dynamic import()
```

## Promises

Master:

```javascript
async
await
Promise.all
Promise.allSettled
Promise.race
```

Understand:

- pending
- fulfilled
- rejected

## Event loop

Be able to explain why:

```javascript
console.log('A');

Promise.resolve().then(() => console.log('B'));

setTimeout(() => console.log('C'));

console.log('D');
```

generally produces:

```text
A
D
B
C
```

This knowledge matters for Angular async behavior, rendering, tests, and RxJS.

---

# 5. Phase 3 - TypeScript Mastery

Angular development is TypeScript development.

## Basic types

```typescript
let username: string;
let age: number;
let active: boolean;
```

## Arrays

```typescript
const ids: number[] = [1, 2, 3];
const names: Array<string> = ['A', 'B'];
```

## Objects

```typescript
interface User {
  id: number;
  name: string;
  active: boolean;
}
```

## Type aliases

```typescript
type UserId = string | number;
```

Understand when `interface` and `type` are interchangeable and where they differ.

## Union types

```typescript
type Status = 'idle' | 'loading' | 'success' | 'error';
```

Prefer explicit domain unions over random strings.

## Literal types

```typescript
type Role = 'admin' | 'manager' | 'user';
```

## Optional properties

```typescript
interface User {
  id: number;
  middleName?: string;
}
```

## Readonly

```typescript
interface User {
  readonly id: number;
}
```

## Functions

```typescript
function calculateTotal(price: number, qty: number): number {
  return price * qty;
}
```

## Generics

Essential.

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

Usage:

```typescript
type UserResponse = ApiResponse<User>;
```

## Generic constraints

```typescript
function getId<T extends { id: number }>(item: T): number {
  return item.id;
}
```

## Utility types

Master:

```text
Partial<T>
Required<T>
Readonly<T>
Pick<T, K>
Omit<T, K>
Record<K, T>
Exclude<T, U>
Extract<T, U>
NonNullable<T>
ReturnType<T>
Parameters<T>
Awaited<T>
```

Example:

```typescript
type UserSummary = Pick<User, 'id' | 'name'>;
```

## `keyof`

```typescript
type UserKey = keyof User;
```

## Indexed access types

```typescript
type UserName = User['name'];
```

## `typeof`

```typescript
const config = {
  apiUrl: '/api',
  timeout: 5000
};

type Config = typeof config;
```

## Mapped types

```typescript
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

## Conditional types

```typescript
type Unwrap<T> = T extends Promise<infer U> ? U : T;
```

## `infer`

Understand how it is used in advanced generic types.

## Discriminated unions

Very important for application state.

```typescript
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }
  | { status: 'loading' };
```

This is often safer than:

```typescript
interface BadState<T> {
  loading: boolean;
  data?: T;
  error?: string;
}
```

because invalid states become harder to represent.

## Type narrowing

Understand:

```typescript
typeof
instanceof
in
custom type predicates
discriminated unions
```

## `unknown` vs `any`

Prefer:

```typescript
unknown
```

when the type is actually unknown.

Avoid spreading `any` across the application.

## `never`

Understand exhaustive checks:

```typescript
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
```

## Enums

Know how enums work, but consider string unions when they provide a simpler domain model.

## Classes and access modifiers

Know:

```typescript
public
private
protected
readonly
abstract
```

## Strict mode

Keep TypeScript strictness enabled.

Understand:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

A high-quality Angular codebase should use strong typing rather than suppressing compiler errors.

---

# 6. Phase 4 - Angular Fundamentals

Start with Angular's mental model.

Angular applications are built from:

- components
- templates
- directives
- pipes
- services
- dependency injection
- routing
- forms
- HTTP
- reactive state

## Create an application

```bash
ng new angular-mastery
cd angular-mastery
ng serve
```

## Standalone-first architecture

Modern Angular should be learned using standalone components first.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <h2>{{ name }}</h2>
  `
})
export class UserCard {
  name = 'Angular Developer';
}
```

You still need to understand NgModules for older enterprise projects and libraries, but they should not dominate your learning.

## Bootstrapping

Understand the purpose of:

```typescript
bootstrapApplication(AppComponent, {
  providers: []
});
```

Know that application-level providers are configured during bootstrap.

---

# 7. Phase 5 - Components in Depth

Components are the core UI building block.

## Component anatomy

Understand:

```typescript
@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {}
```

## Responsibilities

A component should primarily handle:

- presentation
- user interaction
- orchestration of UI state
- communication with dependencies

Avoid turning components into giant business-logic classes.

## Inputs

Modern signal input:

```typescript
user = input.required<User>();
```

Optional/default input:

```typescript
size = input<'small' | 'medium' | 'large'>('medium');
```

Learn input transforms where useful.

## Outputs

Use outputs to report meaningful user/domain events upward.

Conceptually:

```text
Parent provides data
        ↓
      Input
        ↓
     Child
        ↓
      Output
        ↓
Parent reacts
```

Avoid output names that expose implementation details.

Prefer:

```text
submitted
deleted
selectionChanged
```

over:

```text
buttonClicked
```

when the parent actually cares about the domain action.

## Two-way component binding

Understand model inputs for custom controls and components that intentionally update a bound value.

Example concept:

```typescript
value = model(0);
```

Used as:

```html
<app-slider [(value)]="volume" />
```

Do not use two-way binding everywhere. One-way data flow remains easier to reason about.

## Host bindings and host listeners

Understand host configuration and when a directive/component should apply attributes/classes/events to its host.

## Content projection

Learn:

```html
<ng-content />
```

Named/multi-slot projection is essential for reusable design-system components.

Example concept:

```html
<app-card>
  <h2 card-title>Title</h2>
  <p>Content</p>
</app-card>
```

## View queries

Learn modern signal-based queries such as:

```text
viewChild
viewChildren
contentChild
contentChildren
```

Use them when the component genuinely needs access to a child element/component.

Do not use queries as a replacement for good data flow.

## Lifecycle

Understand the lifecycle conceptually:

```text
construction
input initialization
initialization
content initialization
view initialization
updates
destruction
```

Know lifecycle hooks used by existing code:

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

Also learn modern render callbacks where appropriate.

A senior developer should know when lifecycle hooks indicate necessary framework integration and when they signal poor architecture.

---

# 8. Phase 6 - Templates and Modern Control Flow

Master template syntax.

## Interpolation

```html
<h1>{{ title }}</h1>
```

## Property binding

```html
<img [src]="imageUrl" [alt]="imageAlt" />
```

## Event binding

```html
<button (click)="save()">Save</button>
```

## Class binding

```html
<div [class.active]="isActive()">...</div>
```

## Style binding

```html
<div [style.width.px]="width()">...</div>
```

## Modern control flow

### `@if`

```html
@if (user()) {
  <p>Welcome, {{ user()!.name }}</p>
} @else {
  <p>Please sign in.</p>
}
```

### `@for`

```html
@for (user of users(); track user.id) {
  <app-user-row [user]="user" />
} @empty {
  <p>No users found.</p>
}
```

Learn why `track` matters for rendering efficiency and identity.

### `@switch`

```html
@switch (status()) {
  @case ('loading') {
    <app-spinner />
  }
  @case ('error') {
    <app-error />
  }
  @default {
    <app-content />
  }
}
```

## Template variables

Understand local template references.

## Pipes

Built-in examples:

```text
date
currency
decimal
percent
json
async
```

Create custom pipes only for presentation transformations.

Keep pipes pure unless you have a strong reason not to.

## `@defer`

Learn deferrable views for expensive, noncritical UI.

Concept:

```html
@defer (on viewport) {
  <app-heavy-dashboard />
} @placeholder {
  <app-dashboard-skeleton />
} @loading {
  <app-spinner />
}
```

Understand:

- trigger conditions
- placeholders
- loading state
- error state
- bundle splitting
- interaction with hydration

Use deferral to improve real user performance—not merely because the API exists.

---

# 9. Phase 7 - Angular Signals and Reactivity

Signals are central to modern Angular.

## Writable signal

```typescript
count = signal(0);
```

Read:

```typescript
this.count();
```

Set:

```typescript
this.count.set(10);
```

Update:

```typescript
this.count.update(value => value + 1);
```

## Computed signal

```typescript
firstName = signal('Asha');
lastName = signal('Patel');

fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

Use `computed()` for derived state.

Do not manually synchronize derived values when they can be computed.

Bad:

```typescript
firstName = signal('');
lastName = signal('');
fullName = signal('');
```

Better:

```typescript
fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

## Effects

Use `effect()` for side effects, not as your primary state propagation mechanism.

Good effect examples:

- logging
- integrating with non-Angular APIs
- syncing to browser APIs
- analytics
- imperative external effects

Avoid chains of effects that manually copy state from signal to signal.

## `linkedSignal`

Learn it for state that depends on another source but remains writable.

Use it when:

- a selection should reset when available options change
- editable state depends on another reactive source
- state requires dependent initialization

## Signal inputs

Learn:

```typescript
productId = input.required<string>();
```

## Model signals

Learn:

```typescript
value = model('');
```

for deliberate two-way component APIs.

## Queries as signals

Learn signal-based `viewChild` and related APIs.

## Async resources

Angular v22 makes asynchronous resource-based reactivity an important topic.

Concept:

```typescript
selectedUserId = signal('100');

userResource = resource({
  params: () => ({ id: this.selectedUserId() }),
  loader: ({ params }) => fetchUser(params.id)
});
```

Understand resource states:

```text
loading
resolved/value
error
reload
```

## `httpResource`

Learn reactive HTTP data loading with signal-based inputs.

Conceptually:

```typescript
userId = signal('100');

user = httpResource(() => `/api/users/${this.userId()}`);
```

Use it when its declarative model fits the data flow.

Do not assume it replaces every `HttpClient` + RxJS use case.

## Important signal principles

1. Keep state minimal.
2. Derive values with `computed`.
3. Use effects only for effects.
4. Do not mutate objects secretly.
5. Keep ownership clear.
6. Avoid duplicated sources of truth.
7. Separate server state from UI state.
8. Prefer predictable state transitions.

---

# 10. Phase 8 - Dependency Injection

Dependency Injection is one of Angular's most important architectural systems.

## Understand providers

A provider tells Angular how to create or obtain a dependency.

## `inject()`

Modern Angular code frequently uses:

```typescript
private readonly http = inject(HttpClient);
```

Understand how this differs from constructor injection and how injection context works.

## Service registration

Typical root service:

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {}
```

Understand:

```text
root provider
route provider
component provider
environment provider
```

Provider location affects lifetime and instance scope.

## InjectionToken

Use tokens for dependencies without runtime classes.

```typescript
export const API_URL = new InjectionToken<string>('API_URL');
```

## Provider patterns

Learn:

```text
useClass
useValue
useFactory
useExisting
multi providers
```

## Hierarchical DI

Understand parent/child injectors.

This is essential when diagnosing why:

- a service has multiple instances
- state unexpectedly resets
- a feature receives a different implementation
- an interceptor/provider behaves differently

## Avoid service locator abuse

DI does not mean "inject everything everywhere."

Dependencies should reflect real architectural relationships.

---

# 11. Phase 9 - Services and Application Logic

Services should represent reusable non-view responsibilities.

Examples:

```text
AuthService
UserService
InvoiceService
NotificationService
PermissionService
FeatureFlagService
```

But avoid one giant:

```text
CommonService
UtilityService
HelperService
DataService
```

that becomes a dumping ground.

## Service responsibilities

A service may handle:

- API interaction
- domain logic
- state
- caching
- orchestration
- platform abstraction
- cross-component functionality

## Example service

```typescript
@Injectable({ providedIn: 'root' })
export class UserApi {
  private readonly http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}
```

## Separate API DTOs from domain models when necessary

Do not assume the backend representation is always the ideal UI/domain representation.

Example:

```text
API DTO
   ↓ mapper
Domain Model
   ↓
Component/View Model
```

This helps when APIs contain:

- inconsistent naming
- nullable legacy fields
- date strings
- transport-only fields
- different enum values

---

# 12. Phase 10 - Angular Router

Routing is much more than changing pages.

## Learn route definitions

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./user/user.component').then(m => m.UserComponent)
  }
];
```

## Route parameters

Learn:

```text
path parameters
query parameters
fragments
route data
resolved data
```

## Nested routes

Understand feature layouts:

```text
/admin
/admin/users
/admin/roles
/admin/settings
```

with child routes/outlets.

## Lazy loading

Lazy loading should be a default architectural consideration.

Benefits:

- smaller initial JS bundle
- faster startup
- feature isolation

Learn:

```text
loadComponent
loadChildren
```

## Guards

Understand:

```text
CanActivate
CanActivateChild
CanDeactivate
CanMatch
```

Modern code typically uses functional guards.

Important security principle:

**Client-side guards are UX/navigation controls, not backend authorization.**

Your API must independently authorize every protected operation.

## Resolvers

Use resolvers for essential route data when navigation should wait for it.

Do not load everything through resolvers.

Consider user experience: a resolver can block navigation.

## Preloading

Learn:

```text
NoPreloading
PreloadAllModules
custom preloading strategy
```

## Router events

Know why you may observe:

```text
NavigationStart
RoutesRecognized
GuardsCheckStart
ResolveStart
NavigationEnd
NavigationCancel
NavigationError
```

Useful for:

- analytics
- loading indicators
- diagnostics
- route performance tracking

## Route-level providers

Understand feature-scoped service instances via route providers.

## Advanced routing

Learn:

- redirects
- wildcard routes
- route titles
- custom matchers
- secondary/named outlets
- route reuse strategy
- scroll restoration
- same-URL navigation behavior
- navigation state
- error handling

---

# 13. Phase 11 - Forms

Forms are one of the largest Angular skill areas.

You should understand all major approaches even if your projects standardize on one.

## 13.1 Native form fundamentals

Before Angular forms, understand:

```html
<form>
<input>
<select>
<textarea>
<button>
<label>
```

Understand:

- submit behavior
- browser validation
- disabled vs readonly
- checkbox/radio semantics
- autocomplete
- accessibility labels

---

## 13.2 Reactive Forms

Still common in enterprise applications.

Learn:

```text
FormControl
FormGroup
FormArray
FormBuilder
validators
async validators
valueChanges
statusChanges
typed forms
```

Example:

```typescript
form = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
  email: new FormControl('', { nonNullable: true })
});
```

Understand:

```text
setValue
patchValue
reset
disable
enable
dirty
pristine
touched
untouched
valid
invalid
pending
```

## Custom validators

Example pattern:

```typescript
const positiveNumber: ValidatorFn = control => {
  return control.value > 0 ? null : { positiveNumber: true };
};
```

## Async validators

Know:

- debouncing
- cancellation
- backend uniqueness checks
- pending state
- API failure behavior

## Dynamic forms

Master `FormArray`.

Examples:

- invoice line items
- addresses
- dynamic approvers
- order items
- questionnaire rows

## ControlValueAccessor

Important for legacy/custom reactive form controls.

Understand how reusable custom inputs integrate with Angular Forms.

---

## 13.3 Signal Forms

Signal Forms should be part of a modern Angular v22 learning path.

Understand:

- form model signals
- field binding
- validation schemas
- synchronous validation
- asynchronous validation
- form state as signals
- nested models
- arrays
- custom controls
- interoperability/migration from Reactive Forms

Conceptually:

```typescript
loginModel = signal({
  email: '',
  password: ''
});
```

Then construct a signal form and validation schema around the model.

Learn both Signal Forms and Reactive Forms because many production systems will contain both for years.

---

## 13.4 Template-driven forms

Understand them even if you do not prefer them for large enterprise workflows.

They are useful for:

- small/simple forms
- prototypes
- basic template-centric UI

Know:

```text
ngModel
ngForm
validation state
two-way binding
```

---

# 14. Phase 12 - HTTP and API Integration

## HttpClient

Understand:

```typescript
get
post
put
patch
delete
```

Example:

```typescript
getUser(id: string) {
  return this.http.get<User>(`/api/users/${id}`);
}
```

## Request options

Learn:

- headers
- query parameters
- response types
- credentials
- progress events

## Functional interceptors

Modern Angular recommends functional interceptors.

Typical uses:

- authentication header
- correlation ID
- global error normalization
- request timing
- retry policy
- telemetry

Concept:

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  return next(authReq);
};
```

## Do not blindly retry everything

Retries may be appropriate for:

- temporary network failures
- idempotent reads

Be careful retrying:

```text
POST payment
POST order
POST invoice posting
```

A retry could duplicate a real transaction unless the backend supports idempotency.

## API response design

Prefer consistent responses and error contracts.

Example:

```typescript
interface ApiError {
  code: string;
  message: string;
  traceId?: string;
  fieldErrors?: Record<string, string[]>;
}
```

## Cancellation

Understand how unsubscribing can cancel requests and how switch-based RxJS flows prevent stale request races.

## File handling

Learn:

```text
multipart/form-data
upload progress
Blob
ArrayBuffer
file download
object URLs
```

---

# 15. Phase 13 - RxJS Mastery

RxJS remains extremely important in Angular.

Do not learn operators by memorizing a list. Learn how asynchronous streams behave.

## Observable

An Observable represents a stream of values over time.

```typescript
const source$ = interval(1000);
```

## Observer

Conceptually handles:

```text
next
error
complete
```

## Subscription

Understand:

```typescript
const subscription = observable$.subscribe(...);

subscription.unsubscribe();
```

## Cold vs hot

Understand the difference.

### Cold

Each subscriber gets its own execution.

Common examples:

- many HTTP observables
- `of`
- `from`

### Hot

A producer can exist independently and multiple subscribers observe the same source.

Common examples:

- subjects
- events
- shared streams

## Subjects

Understand:

```text
Subject
BehaviorSubject
ReplaySubject
AsyncSubject
```

Do not use subjects as a default replacement for every variable.

## Essential creation functions

Learn:

```text
of
from
defer
interval
timer
combineLatest
forkJoin
merge
concat
race
```

## Transformation

Learn:

```text
map
scan
switchMap
mergeMap
concatMap
exhaustMap
```

### This group is interview-critical

You should deeply understand:

#### `switchMap`

Cancels the previous inner subscription.

Good for:

- search
- filters
- route-driven requests
- latest-only API behavior

#### `mergeMap`

Runs inner work concurrently.

Good when all operations should execute independently.

#### `concatMap`

Queues work sequentially.

Good when operation order matters.

#### `exhaustMap`

Ignores new source emissions while current work is running.

Good for preventing repeated login/submit actions.

## Filtering

Learn:

```text
filter
take
takeUntil
first
distinctUntilChanged
debounceTime
throttleTime
auditTime
skip
```

## Combining

Learn:

```text
combineLatest
withLatestFrom
forkJoin
zip
merge
concat
```

Understand the semantics, not only syntax.

## Error handling

Learn:

```text
catchError
retry
retryWhen / equivalent retry configuration patterns
throwError
finalize
```

## Side effects

Learn:

```text
tap
finalize
```

Do not mutate application state unpredictably inside random `tap` calls.

## Multicasting

Understand:

```text
share
shareReplay
```

Know that caching streams incorrectly can cause:

- stale data
- memory retention
- duplicate requests
- hidden lifecycle behavior

## Subscription management

Prefer framework-supported lifecycle-safe mechanisms.

Learn:

```text
AsyncPipe
takeUntilDestroyed
toSignal
toObservable
```

Avoid large collections of manual subscriptions.

Bad pattern:

```typescript
private subscriptions: Subscription[] = [];
```

unless there is a deliberate reason.

## Marble thinking

You do not need to draw marble diagrams daily, but you should be able to reason in timelines.

Example:

```text
search:  a----ab--abc-------
request: ----x----x----x----
switch:             latest--
```

---

# 16. Phase 14 - Signals vs RxJS

A senior Angular developer should not argue "Signals replace RxJS" or "RxJS should do everything."

They solve overlapping but different problems.

## Prefer Signals for

- local synchronous state
- derived UI state
- component inputs
- simple feature state
- state consumed heavily by templates
- reactive computed values

Example:

```typescript
products = signal<Product[]>([]);
search = signal('');

filtered = computed(() =>
  this.products().filter(product =>
    product.name.toLowerCase().includes(this.search().toLowerCase())
  )
);
```

## Prefer RxJS for

- event streams
- websocket streams
- complex async orchestration
- cancellation
- debouncing
- concurrency
- multi-event composition
- API workflows
- continuous async sources

Example:

```typescript
searchResults$ = this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
);
```

## Bridge when needed

Learn:

```text
toSignal()
toObservable()
```

Avoid repeatedly converting back and forth without architectural purpose.

## Decision question

Ask:

> Is this primarily synchronous state or an asynchronous event stream?

That usually leads you toward the correct primitive.

---

# 17. Phase 15 - State Management

State management is an architecture decision, not a library decision.

## Categories of state

### Local component state

Examples:

```text
modal open
selected tab
input visibility
hover state
temporary filters
```

Usually use:

```text
signals
plain properties
```

### Feature state

Examples:

```text
invoice editor
shopping cart
user management filters
wizard progress
```

Possible solutions:

```text
feature service + signals
service + RxJS
signal store
NgRx
```

### Server state

Examples:

```text
users from API
products
invoices
dashboard statistics
```

Think about:

- loading
- errors
- caching
- refresh
- invalidation
- stale data
- request deduplication

### URL state

Examples:

```text
search
page
sort
filters
selected entity ID
```

Do not duplicate shareable/navigation state in local variables when the URL should own it.

## Start simple

A typical escalation path:

```text
Component Signal
      ↓
Feature Service + Signals
      ↓
Feature Store
      ↓
Global Store when justified
```

## NgRx

Learn NgRx when working with applications that benefit from explicit state transitions and larger team coordination.

Understand concepts such as:

```text
Store
Actions
Reducers
Selectors
Effects
Entity
Signal Store / signal-oriented state patterns
```

Do not introduce a global store merely because the application has API calls.

## State rules

1. Define the owner of every state.
2. Maintain one source of truth.
3. Derive instead of duplicate.
4. Keep state transitions explicit.
5. Avoid exposing writable state publicly.
6. Separate server state and UI state.
7. Keep stores feature-focused.
8. Normalize large entity collections when useful.

---

# 18. Phase 16 - Component Architecture

## Smart/container vs presentational thinking

The terms are less important than the separation.

### Feature/container component

May:

- retrieve state
- call services
- coordinate route data
- perform business actions

### Presentational component

Should mostly:

- receive data
- render UI
- emit meaningful actions

Example:

```text
UserPage
 ├── UserHeader
 ├── UserDetailsCard
 ├── UserPermissionList
 └── UserActivityTable
```

## Component extraction

Extract a component when it:

- has its own responsibility
- is reused
- has complex markup
- has independent behavior
- improves readability
- creates a meaningful UI boundary

Do not create dozens of components for trivial fragments without benefit.

## Feature boundaries

Prefer organizing by business feature.

Good:

```text
src/app/
  core/
  shared/
  features/
    auth/
    users/
    invoices/
    reports/
```

Often better than:

```text
components/
services/
models/
pages/
```

where unrelated features become mixed.

## Feature example

```text
features/
  invoices/
    data-access/
    models/
    pages/
    ui/
    utilities/
    invoices.routes.ts
```

Use naming/boundaries appropriate for your team. Do not cargo-cult folder structures.

---

# 19. Phase 17 - Styling and UI Engineering

Angular does not remove the need for strong CSS engineering.

## Component style encapsulation

Understand:

```text
Emulated
ShadowDom
None
```

Know the consequences of each.

## CSS architecture

Learn:

- design tokens
- CSS variables
- spacing systems
- typography scales
- component states
- responsive breakpoints
- themes
- dark mode
- reusable utilities

Example:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
}
```

## Avoid deep selector dependence

Do not build a system that depends on fragile internal DOM selectors of third-party components.

## Angular Material / CDK

Useful topics:

- Material components
- CDK Overlay
- Portal
- Drag and Drop
- Accessibility utilities
- virtual scrolling
- layout primitives

Learn the CDK concepts even if your design system is custom.

## Responsive design

Test:

```text
mobile
tablet
laptop
desktop
large desktop
zoomed layouts
```

Do not build UI only at your own monitor width.

---

# 20. Phase 18 - Accessibility

Accessibility is part of engineering quality.

Learn WCAG concepts and practical browser accessibility.

## Must know

- semantic elements
- labels
- accessible names
- keyboard navigation
- focus order
- focus management
- visible focus
- color contrast
- screen reader basics
- ARIA roles
- ARIA states
- live regions
- errors and validation announcements

## Golden rule

Use native elements whenever possible.

Prefer:

```html
<button>Delete</button>
```

instead of creating a fake button.

## Keyboard testing

Try your UI with:

```text
Tab
Shift+Tab
Enter
Space
Escape
Arrow keys
```

depending on the component pattern.

## Forms

Every form input should have an accessible label.

Errors should not be indicated using color only.

## Dialogs

Understand:

- initial focus
- focus trap
- escape behavior
- return focus
- accessible title

---

# 21. Phase 19 - Security

Frontend security knowledge is mandatory.

## XSS

Understand cross-site scripting.

Angular escapes template interpolation by default, but developers can still introduce risk through unsafe DOM usage or bypass APIs.

Never treat user-controlled HTML as safe by default.

## Sanitization

Understand Angular sanitization contexts.

Be extremely careful with APIs that intentionally bypass security.

## Avoid direct unsafe DOM manipulation

Do not use random `innerHTML` assignment with untrusted data.

## Authentication vs authorization

Authentication:

> Who are you?

Authorization:

> What are you allowed to do?

Frontend permission checks improve UX, but backend authorization is mandatory.

## JWT

Understand:

- access token
- refresh token
- expiry
- claims
- signatures
- secure storage trade-offs
- token theft risks

Do not assume "JWT" automatically means secure.

## Cookies

Learn:

```text
HttpOnly
Secure
SameSite
Domain
Path
```

## CSRF/XSRF

Understand when cookie-based authentication requires CSRF defenses.

## CORS

Know that CORS is a browser policy, not a backend authorization mechanism.

## CSP

Learn Content Security Policy.

A strong CSP can reduce XSS impact.

## Open redirects

Validate externally supplied redirect URLs.

## Dependency security

Regularly review:

```bash
npm audit
```

but understand that audit output requires context; not every finding is equally exploitable.

Keep framework and dependencies supported and updated.

## Secrets

Never put real secrets in an Angular bundle.

Anything shipped to the browser should be considered visible to the user.

Bad:

```typescript
const databasePassword = 'secret';
```

Frontend environment files are configuration, not secret vaults.

---

# 22. Phase 20 - Performance Optimization

Do not optimize blindly. Measure first.

## Metrics to understand

Learn Core Web Vitals:

```text
LCP
INP
CLS
```

Also track:

```text
bundle size
initial JS
route chunk sizes
API latency
render time
memory
long tasks
```

## Lazy loading

Split features by route.

## `@defer`

Defer noncritical UI.

## Signals and change detection

Modern signal-based Angular can update more granularly.

Understand how reactive reads connect state to rendering.

## Zoneless Angular

Modern Angular defaults to zoneless behavior.

Learn:

- what Zone.js historically did
- how Angular knows when to update in zoneless mode
- compatible notification mechanisms
- how third-party libraries behave

Do not keep outdated change-detection mental models forever.

## Avoid expensive template work

Bad:

```html
@for (item of calculateVeryExpensiveList(); track item.id) {
```

when that function performs expensive work every evaluation.

Prefer derived/cached reactive state:

```typescript
visibleItems = computed(() => {
  // calculate from source signals
});
```

## Large lists

Learn:

- pagination
- infinite scrolling
- virtual scrolling
- server-side filtering/sorting

Do not render 50,000 DOM nodes when users can only see 30.

## Images

Optimize:

- format
- dimensions
- responsive images
- lazy loading
- priority for hero/LCP images

## Bundle analysis

Know how to inspect what contributes to a bundle.

Look for:

- giant utility libraries
- duplicated dependencies
- importing entire packages
- large editors/chart libraries in initial bundle
- unnecessary polyfills

## Memory leaks

Watch for:

- subscriptions
- global event listeners
- timers
- detached DOM
- retained closures
- long-lived caches

## Network performance

Use:

- caching
- compression
- CDN
- HTTP caching headers
- request consolidation
- pagination
- prefetch/preload carefully

---

# 23. Phase 21 - SSR, SSG and Hydration

Modern Angular supports multiple rendering strategies.

## CSR

Client-side rendering:

```text
Server sends shell
      ↓
JavaScript loads
      ↓
Angular renders app
```

Good for many authenticated applications.

## SSR

Server-side rendering:

```text
Request
  ↓
Server renders HTML
  ↓
Browser receives useful HTML
  ↓
Angular hydrates
```

Benefits may include:

- faster initial content
- SEO
- social crawlers
- improved perceived startup

Costs:

- server complexity
- server load
- SSR-safe coding requirements

## SSG / prerendering

Pages can be generated ahead of time.

Good for:

- documentation
- marketing
- product/static content

## Hybrid rendering

Different routes may use different strategies.

Example:

```text
/                 prerender
/products/:id     SSR
/dashboard        CSR
```

## Hydration

Understand that hydration reuses server-rendered DOM instead of destroying and recreating it.

Learn:

- full hydration
- incremental hydration
- event replay
- hydration mismatch debugging

## SSR-safe code

The server does not have normal browser globals.

Avoid direct unconditional access to:

```text
window
document
localStorage
navigator
```

Use platform-aware abstractions.

## Incremental hydration

Study its relationship with deferrable UI and interactive islands/sections.

---

# 24. Phase 22 - Testing

A professional Angular developer writes tests that protect behavior without making refactoring impossible.

## Testing pyramid/strategy

Use an appropriate mix of:

```text
unit
component
integration
end-to-end
```

Do not attempt to unit-test every private method.

Test user-visible/domain behavior.

## Modern Angular unit testing

New Angular projects use Vitest as the default unit test runner.

Learn:

- test structure
- assertions
- spies/mocks
- async testing
- Angular `TestBed`
- fixtures
- component rendering
- dependency replacement

## Component tests

Test:

- rendered state
- inputs
- outputs
- user actions
- validation
- loading
- errors
- accessibility-sensitive behavior

## Service tests

Test:

- data mapping
- business logic
- state transitions
- error handling

## HTTP testing

Learn Angular HTTP testing utilities.

Test:

- URL
- HTTP method
- payload
- params
- headers when important
- response mapping
- errors

## Router testing

Learn `RouterTestingHarness`.

Test:

- protected routes
- redirects
- route parameters
- navigation result
- guards
- errors

## RxJS testing

For complex streams, learn:

- deterministic tests
- virtual time/marble approaches when valuable
- cancellation behavior
- errors
- completion

## Signal testing

Test observable behavior from public state.

Example:

```typescript
expect(store.total()).toBe(100);
```

Change source state, then assert the derived state.

## E2E

Know at least one modern E2E framework such as Playwright or Cypress.

Test critical flows:

```text
login
checkout
invoice submission
approval
user creation
permissions
search
```

Avoid enormous E2E suites for every trivial branch.

## Good test qualities

Tests should be:

- deterministic
- readable
- focused
- fast enough
- behavior-oriented
- independent

---

# 25. Phase 23 - Error Handling and Observability

Production applications fail.

Your architecture should make failure understandable.

## Error categories

Separate:

```text
validation error
authentication error
authorization error
business-rule error
network error
server error
unexpected frontend error
```

## Global error handling

Understand Angular's error handling mechanisms.

Do not show raw stack traces to users.

## API error normalization

Convert inconsistent backend errors into one frontend shape.

Example:

```typescript
interface AppError {
  kind: 'validation' | 'network' | 'unauthorized' | 'server' | 'unknown';
  message: string;
  traceId?: string;
}
```

## User-facing errors

Good:

> Invoice could not be submitted because the purchase order is closed.

Poor:

> Http failure response for /api/invoice: 500 Internal Server Error.

## Logging

Include useful context:

```text
timestamp
route
operation
correlation/trace ID
error code
application version
```

Do not log:

- passwords
- tokens
- sensitive personal data
- confidential payloads unnecessarily

## Observability

Learn concepts:

```text
logs
metrics
traces
frontend telemetry
session/error reporting
release correlation
```

---

# 26. Phase 24 - Angular Architecture for Enterprise Applications

This is where intermediate developers become senior developers.

## Layer thinking

One possible architecture:

```text
UI
↓
Feature orchestration
↓
Domain/application services
↓
Data access
↓
API
```

Do not force this structure onto tiny applications, but understand separation of concerns.

## Recommended feature-oriented structure

```text
src/app/
│
├── core/
│   ├── auth/
│   ├── config/
│   ├── errors/
│   └── layout/
│
├── shared/
│   ├── ui/
│   ├── directives/
│   ├── pipes/
│   └── utilities/
│
└── features/
    ├── invoices/
    │   ├── pages/
    │   ├── ui/
    │   ├── data-access/
    │   ├── state/
    │   ├── models/
    │   └── invoices.routes.ts
    │
    ├── users/
    └── reports/
```

## `core` should stay focused

Typical core concerns:

- authentication
- global application shell
- error handling
- runtime configuration
- global telemetry

Do not place every service in `core`.

## Shared code

Shared code should be truly reusable and preferably not know about specific feature business rules.

Bad shared component:

```text
SharedInvoiceApprovalForPlantMumbaiComponent
```

That belongs to the invoice domain.

## Feature ownership

A feature should expose a deliberate public API instead of allowing imports into every internal file.

## Dependency direction

Try to prevent:

```text
Feature A ↔ Feature B
```

circular coupling.

Prefer:

```text
Feature A → shared/domain abstraction ← Feature B
```

when both need common functionality.

## Monorepos

For very large systems, learn:

- workspace boundaries
- libraries
- dependency constraints
- incremental builds
- affected testing
- shared design systems

Tools such as Nx can help, but architecture principles matter more than the tool.

## Microfrontends

Learn the concept, but use only when organizational/runtime independence justifies the cost.

Microfrontends introduce complexity:

- dependency/version coordination
- routing
- shared authentication
- design consistency
- cross-app communication
- deployment
- performance
- ownership

Do not use microfrontends simply because the application is large.

---

# 27. Phase 25 - Clean Code and Coding Standards

## Naming

Bad:

```typescript
let d: any;
let temp: any;
let arr: any[];
```

Better:

```typescript
const invoiceDetails: InvoiceDetails;
const pendingApprovals: Approval[];
```

## Functions

Keep functions focused.

Bad:

```typescript
saveValidateCalculateSendEmailRefreshAndLog()
```

Better separate responsibilities.

## Avoid boolean parameter confusion

Bad:

```typescript
loadUsers(true, false, true);
```

Better:

```typescript
loadUsers({
  includeInactive: true,
  refreshCache: false,
  showLoader: true
});
```

## Avoid magic values

Bad:

```typescript
if (status === 7) {}
```

Better:

```typescript
if (status === InvoiceStatus.Approved) {}
```

or a suitable union/domain constant.

## Keep templates readable

Bad:

```html
@if (user() && user()!.permissions && user()!.permissions.includes('A') && !isLocked()) {
```

Better:

```typescript
canApprove = computed(() => ...);
```

```html
@if (canApprove()) {
```

## Prefer immutable updates

Signals:

```typescript
users.update(users =>
  users.map(user =>
    user.id === updated.id ? updated : user
  )
);
```

Avoid hidden object mutation when other code assumes immutability.

## No `any` by default

If you write:

```typescript
any
```

you should know why the actual type cannot be represented.

## Small public APIs

Expose only what consumers need.

## Comments

Good comments explain:

- why
- constraints
- non-obvious business rules

Bad comments repeat code.

Bad:

```typescript
// Increment count by 1
count++;
```

Good:

```typescript
// The ERP allows at most three posting retries for the same correlation ID.
```

## Follow Angular style conventions

Use consistent:

- filenames
- naming
- project organization
- source layout
- test placement
- selectors

---

# 28. Phase 26 - Git and Team Development

Learn:

```bash
git clone
git status
git add
git commit
git fetch
git pull
git push
git branch
git switch
git merge
git rebase
git cherry-pick
git revert
git reset
git stash
git log
git diff
```

## Understand merge conflicts

Do not resolve conflicts by blindly choosing "ours" or "theirs."

Understand both changes.

## Commit quality

Prefer:

```text
fix(invoice): prevent duplicate approval submission
```

over:

```text
changes
```

## Pull requests

A good PR should explain:

- problem
- solution
- important design decisions
- screenshots when UI changed
- testing performed
- risks
- migration impact

## Code review

Review for:

```text
correctness
architecture
readability
security
accessibility
performance
tests
backward compatibility
```

Do not focus only on formatting.

---

# 29. Phase 27 - Build, Deployment and CI/CD

## Production builds

Understand:

```bash
ng build
```

and workspace build configurations.

## Environment/runtime configuration

Separate:

```text
build-time configuration
runtime configuration
secrets
```

Never assume frontend environment variables are secret after bundling.

## CI pipeline

Typical pipeline:

```text
Install
  ↓
Lint
  ↓
Type check/build
  ↓
Unit tests
  ↓
Security/dependency checks
  ↓
E2E/integration tests
  ↓
Build artifact
  ↓
Deploy
```

## Deployment targets

Understand deployment to:

```text
static hosting
CDN/object storage
Nginx
Apache
IIS
container
Kubernetes
SSR Node server/platform
cloud frontend platforms
```

## SPA server fallback

For client-side routing, the web server generally needs to serve the Angular entry document for unknown client routes.

Otherwise:

```text
/users/123
```

may work during Angular navigation but return 404 when refreshed directly.

## Cache busting

Understand content hashes in generated assets.

## Source maps

Know how source maps help debugging and why production source-map exposure should be a deliberate decision.

---

# 30. Phase 28 - Browser and Frontend Debugging

Master DevTools.

## Elements

Inspect:

- DOM
- styles
- computed styles
- accessibility tree

## Console

Use:

- breakpoints
- logging
- error stacks
- network error inspection

## Network

Inspect:

```text
requests
status codes
headers
payloads
response
timing
initiator
cache behavior
CORS
```

## Performance

Learn to identify:

- long tasks
- layout work
- rendering bottlenecks
- excessive scripting
- slow interaction

## Memory

Learn:

- heap snapshots
- allocation patterns
- detached nodes
- retained objects

## Angular DevTools

Use Angular-specific profiling/debugging where useful.

Inspect:

- component tree
- dependency/state behavior
- performance/change detection information

---

# 31. Phase 29 - Legacy Angular Knowledge

Modern Angular developers often inherit older applications.

You should recognize:

```text
NgModule
AppModule
feature modules
shared modules
HttpClientModule
RouterModule.forRoot()
RouterModule.forChild()
@Input()
@Output()
EventEmitter
@ViewChild()
@ContentChild()
*ngIf
*ngFor
ng-template
Zone.js-based change detection
constructor injection
Karma/Jasmine
```

Do not call these concepts "wrong." Many are valid APIs or historical architecture patterns.

Your job is to understand:

1. why they exist,
2. how the modern equivalent differs,
3. how to migrate safely,
4. when migration is worth the cost.

## Migration mindset

Bad migration:

> Rewrite the entire application because Angular added a new API.

Better:

- upgrade Angular versions incrementally
- keep behavior protected by tests
- migrate high-value areas
- use automated schematics where available
- measure performance
- remove deprecated APIs safely
- avoid mixing unrelated refactors into version upgrades

---

# 32. Phase 30 - Advanced Angular Topics

Once you are comfortable building normal applications, learn:

## Custom directives

Examples:

- permission behavior
- input behavior
- element interaction
- reusable DOM behavior

## Custom pipes

Create only when transformation belongs in view presentation.

## Dynamic component rendering

Understand dynamic component creation for:

- plugin systems
- configurable dashboards
- dialogs
- dynamic forms

## Angular CDK

Deepen knowledge of:

```text
Overlay
Portal
A11y
DragDrop
Scrolling
```

## Internationalization

Learn:

- translation workflow
- locale data
- date/number formats
- pluralization
- RTL considerations

## Service workers / PWA

Understand:

- caching
- offline behavior
- update lifecycle
- stale content risks

## Web Workers

Use for real CPU-heavy browser work.

Do not move normal API calls to workers without a reason.

## Custom elements

Understand Angular Elements/custom-element integration when embedding Angular UI in non-Angular hosts.

## Library development

Learn:

- public APIs
- packaging
- semantic versioning
- peer dependencies
- backwards compatibility
- reusable components
- schematics when appropriate

## Workspace libraries

Useful for:

- design systems
- domain modules
- data access
- shared utilities

## Angular compiler concepts

Know at a high level:

- template compilation
- AOT
- generated code
- tree shaking
- bundling

You do not need to memorize compiler internals, but understanding compilation helps diagnose template/build issues.

---

# 33. Phase 31 - Design Patterns

Do not force patterns. Learn the problem each pattern solves.

## Facade

A facade can simplify access to a complex feature.

```text
Component
   ↓
InvoiceFacade
   ↓
Store / API / rules / cache
```

Useful when components should not know every internal dependency.

## Adapter

Convert external data to your internal model.

```text
ERP payload
    ↓
Adapter
    ↓
Invoice domain model
```

## Strategy

Useful when behavior varies.

Example:

```text
PO invoice validation
Non-PO invoice validation
Advance payment validation
```

through a common validation interface.

## Factory

Use when object creation varies based on type/configuration.

## Repository/data-access abstraction

Useful when domain code should not care whether data comes from:

```text
REST
GraphQL
cache
mock
IndexedDB
```

Do not add abstraction layers when they provide no actual flexibility or testability.

## Observer

RxJS is deeply connected to the Observer pattern.

## Dependency Injection

Angular makes inversion of control a first-class framework concept.

## Composition over inheritance

Prefer composing services/components rather than building deep class hierarchies.

---

# 34. Phase 32 - Backend Knowledge for Angular Developers

You do not need to become a backend specialist, but you should understand the API you consume.

Learn:

## REST

```text
resources
HTTP verbs
status codes
idempotency
pagination
filtering
sorting
versioning
```

## Authentication

Understand common approaches:

```text
session/cookie auth
OAuth 2.0 concepts
OpenID Connect
access/refresh tokens
SSO
```

## JSON

Be comfortable with:

- nullability
- date/time formats
- nested data
- large numbers
- field naming
- schema validation

## Pagination

Common approaches:

```text
offset/page-based
cursor-based
```

## API contracts

Know the importance of:

- stable fields
- versioning
- error codes
- trace IDs
- validation responses

## WebSockets / SSE

Learn when real-time updates are needed.

Examples:

- notification feed
- job progress
- trading data
- chat
- live dashboard

## GraphQL

Optional unless your work uses it.

Understand:

- query
- mutation
- subscription
- schema
- resolver concept
- normalized caching considerations

---

# 35. Phase 33 - Projects to Build

Reading alone will not make you strong.

Build progressively harder projects.

---

## Project 1 - Task Manager

Learn:

- components
- signals
- forms
- local state
- filtering
- reusable UI

Features:

```text
create task
edit task
delete task
status
priority
search
filter
sorting
```

---

## Project 2 - User Management Admin

Learn:

- routing
- CRUD
- HTTP
- guards
- role-based UI
- lazy loading
- validation

Features:

```text
login
users
roles
permissions
pagination
search
profile
audit history
```

---

## Project 3 - E-commerce Application

Learn:

- feature architecture
- state management
- caching
- route params
- cart
- checkout flow

Features:

```text
products
categories
filters
product details
cart
wishlist
checkout
order history
```

Add:

- loading skeletons
- error recovery
- responsive design
- E2E tests

---

## Project 4 - Enterprise Invoice Processing System

This is an excellent advanced Angular project because it combines forms, workflow, business rules, tables, files, permissions, and APIs.

Features:

```text
login / SSO simulation
invoice upload
OCR result review
vendor details
PO / non-PO flows
line-item editor
tax calculation
validation
approval workflow
role-based access
comments
attachments
audit log
dashboard
search
advanced filters
export
notifications
```

Technical requirements:

- standalone features
- Signals
- RxJS API workflows
- Signal or Reactive Forms
- dynamic FormArray/line-item equivalent
- lazy routes
- functional guards
- functional interceptors
- shared design system
- typed API DTOs
- error normalization
- loading states
- Vitest tests
- E2E critical-flow tests

---

## Project 5 - Production-grade SaaS Dashboard

Include:

```text
SSR for public pages
CSR for dashboard
authentication
feature flags
analytics
charts
large table
virtual scroll
theme
accessibility
responsive UI
observability
CI/CD
```

At this stage, treat the project like real software:

- architecture document
- ADRs
- lint rules
- tests
- CI
- release notes
- performance budget
- security review

---

# 36. Phase 34 - Angular Interview Preparation

Do not prepare only definitions. Be able to reason through scenarios.

## Core questions

Be able to explain:

1. What is Angular?
2. What is a standalone component?
3. How does dependency injection work?
4. How are providers scoped?
5. What is a Signal?
6. `signal` vs `computed` vs `effect`.
7. When should you use RxJS instead of Signals?
8. Observable vs Promise.
9. Subject vs BehaviorSubject.
10. `switchMap` vs `mergeMap` vs `concatMap` vs `exhaustMap`.
11. What causes memory leaks?
12. How do you unsubscribe safely?
13. How does routing work?
14. Guards vs resolvers.
15. How does lazy loading work?
16. Reactive Forms vs Signal Forms.
17. What is a custom form control?
18. How do HTTP interceptors work?
19. What is dependency injection hierarchy?
20. What is SSR?
21. What is hydration?
22. What is incremental hydration?
23. What is zoneless Angular?
24. What is `@defer`?
25. How does Angular protect against XSS?
26. Why are route guards not sufficient authorization?
27. How do you optimize a large Angular app?
28. How do you test routed components?
29. How would you organize an enterprise Angular codebase?
30. How would you debug duplicate API requests?

## Scenario questions

### Scenario: search API is returning results out of order

Expected reasoning:

```text
input stream
↓
debounce
↓
distinctUntilChanged
↓
switchMap
↓
latest request wins
```

### Scenario: initial bundle is 8 MB

Investigate:

- route lazy loading
- bundle composition
- large third-party libraries
- charts/editors
- duplicate dependencies
- eagerly imported features
- deferred UI
- unnecessary assets/polyfills

### Scenario: service state resets when navigating

Investigate provider scope.

Was the service provided at:

```text
component
route
feature
root
```

?

### Scenario: user can hide admin button but still call API

Correct answer:

Frontend visibility is not authorization.

The backend must validate identity and permissions.

### Scenario: two values must always remain derived

Use computed state instead of manually synchronizing multiple state variables.

---

# 37. 24-Week Learning Plan

This schedule assumes consistent hands-on practice.

Adjust hours based on your experience.

## Weeks 1-2 - Web + JavaScript

Study:

- HTML
- CSS
- browser
- JavaScript
- async/await
- event loop
- modules

Build:

- vanilla JS task manager

Goal:

You should understand the browser before adding Angular.

---

## Weeks 3-4 - TypeScript

Study:

- interfaces
- type aliases
- unions
- generics
- utility types
- narrowing
- mapped types
- conditional types
- strict typing

Build:

- typed API models
- generic repository examples
- reusable utility types

Goal:

Write TypeScript without falling back to `any`.

---

## Weeks 5-6 - Angular Core

Study:

- CLI
- components
- templates
- standalone APIs
- inputs
- outputs
- model
- directives
- pipes
- lifecycle

Build:

- task manager in Angular

---

## Weeks 7-8 - Signals

Study:

- signal
- computed
- effect
- linkedSignal
- inputs
- model
- queries
- resources
- httpResource basics

Refactor project state toward clean reactive ownership.

---

## Weeks 9-10 - Router + DI + Services

Study:

- DI
- inject
- provider hierarchy
- routes
- lazy loading
- guards
- resolvers
- route data
- preloading

Build:

- admin portal skeleton

---

## Weeks 11-12 - Forms

Study:

- native forms
- Reactive Forms
- Signal Forms
- custom validation
- async validation
- dynamic arrays
- custom controls

Build:

- complex invoice/order form

---

## Weeks 13-14 - HTTP + RxJS

Study:

- HttpClient
- interceptors
- typed APIs
- error handling
- RxJS operators
- flattening operators
- cancellation
- sharing

Build:

- autocomplete search
- paginated table
- upload flow
- retry/error UI

---

## Weeks 15-16 - State + Architecture

Study:

- local/feature/global state
- feature stores
- NgRx concepts
- folder architecture
- facades
- DTO mapping
- domain boundaries

Refactor admin application into scalable features.

---

## Weeks 17-18 - Testing

Study:

- Vitest
- TestBed
- component testing
- HTTP testing
- router testing
- E2E

Target:

Write tests for behavior, not implementation details.

---

## Weeks 19-20 - Performance + SSR

Study:

- lazy loading
- defer
- zoneless
- bundle analysis
- rendering
- Core Web Vitals
- SSR
- SSG
- hydration
- incremental hydration

Measure your application before and after optimizations.

---

## Weeks 21-22 - Security + Accessibility

Study:

- XSS
- CSP
- auth
- cookies
- CSRF
- CORS
- keyboard navigation
- focus
- forms
- ARIA

Perform a security/accessibility review of your project.

---

## Weeks 23-24 - Production Engineering

Study:

- Git workflows
- CI/CD
- deployment
- logging
- telemetry
- error handling
- architecture decisions
- code review

Complete one production-grade portfolio application.

---

# 38. Senior Angular Developer Checklist

Use this as your final self-assessment.

## Web

- [ ] I understand semantic HTML.
- [ ] I can build responsive layouts without depending entirely on a UI framework.
- [ ] I understand DOM events.
- [ ] I understand the event loop and microtasks.
- [ ] I understand HTTP, CORS, cookies, caching, and CSP basics.

## JavaScript

- [ ] I understand closures.
- [ ] I understand reference vs value behavior.
- [ ] I understand promises and async/await.
- [ ] I understand modules.
- [ ] I can use array methods effectively.
- [ ] I can write immutable updates.

## TypeScript

- [ ] I use strict typing.
- [ ] I understand generics.
- [ ] I understand utility types.
- [ ] I understand discriminated unions.
- [ ] I understand narrowing.
- [ ] I understand `unknown`, `never`, and `any`.
- [ ] I can model APIs and domain data cleanly.

## Angular core

- [ ] I understand standalone components.
- [ ] I can design good component APIs.
- [ ] I understand signal inputs.
- [ ] I understand outputs.
- [ ] I understand model inputs.
- [ ] I understand content projection.
- [ ] I understand queries.
- [ ] I understand lifecycle behavior.
- [ ] I can create directives and pipes.

## Signals

- [ ] I understand writable Signals.
- [ ] I use computed values for derived state.
- [ ] I know when effects are appropriate.
- [ ] I understand linkedSignal.
- [ ] I understand async resources.
- [ ] I understand httpResource.
- [ ] I avoid duplicated reactive state.

## Dependency Injection

- [ ] I understand providers.
- [ ] I understand hierarchical injection.
- [ ] I understand InjectionToken.
- [ ] I understand provider scope.
- [ ] I can diagnose multiple service instances.

## Router

- [ ] I can create nested routes.
- [ ] I use lazy loading.
- [ ] I understand route params/query params.
- [ ] I understand guards.
- [ ] I understand resolvers.
- [ ] I understand preloading.
- [ ] I can test router behavior.

## Forms

- [ ] I understand Reactive Forms.
- [ ] I understand Signal Forms.
- [ ] I can create custom validators.
- [ ] I can create async validators.
- [ ] I can build dynamic forms.
- [ ] I understand reusable custom controls.
- [ ] I can design accessible error messages.

## HTTP

- [ ] I use typed HTTP responses.
- [ ] I understand interceptors.
- [ ] I understand cancellation.
- [ ] I normalize API errors.
- [ ] I understand uploads/downloads.
- [ ] I understand idempotency concerns.

## RxJS

- [ ] I understand Observable lifecycle.
- [ ] I know cold vs hot.
- [ ] I understand subjects.
- [ ] I understand switchMap.
- [ ] I understand mergeMap.
- [ ] I understand concatMap.
- [ ] I understand exhaustMap.
- [ ] I understand combineLatest and forkJoin.
- [ ] I handle errors correctly.
- [ ] I prevent subscription leaks.
- [ ] I understand share/shareReplay trade-offs.

## State management

- [ ] I can classify state as local, feature, server, global, or URL state.
- [ ] I choose the simplest suitable state solution.
- [ ] I understand store concepts.
- [ ] I avoid multiple sources of truth.
- [ ] I can explain when NgRx is justified.

## Architecture

- [ ] I organize by feature.
- [ ] I understand feature boundaries.
- [ ] I separate UI from data access.
- [ ] I can map DTOs into domain models.
- [ ] I avoid circular dependencies.
- [ ] I can design reusable libraries.
- [ ] I can explain architecture trade-offs.

## Testing

- [ ] I can write component tests.
- [ ] I can test services.
- [ ] I can test HTTP.
- [ ] I can test routing.
- [ ] I understand E2E strategy.
- [ ] My tests verify behavior rather than private implementation.

## Security

- [ ] I understand XSS.
- [ ] I understand Angular sanitization.
- [ ] I understand authentication vs authorization.
- [ ] I understand cookie security.
- [ ] I understand CSRF.
- [ ] I understand CORS.
- [ ] I never store true secrets in frontend source.

## Accessibility

- [ ] My application is keyboard usable.
- [ ] Inputs have labels.
- [ ] Focus is managed correctly.
- [ ] I use semantic elements.
- [ ] I understand ARIA basics.
- [ ] Error feedback is accessible.

## Performance

- [ ] I measure before optimizing.
- [ ] I use route lazy loading.
- [ ] I understand `@defer`.
- [ ] I understand zoneless Angular.
- [ ] I can investigate bundle size.
- [ ] I can profile rendering.
- [ ] I can identify memory leaks.
- [ ] I understand Core Web Vitals.

## SSR

- [ ] I understand CSR vs SSR vs SSG.
- [ ] I understand hydration.
- [ ] I understand incremental hydration.
- [ ] I write SSR-safe code.
- [ ] I know when SSR is not necessary.

## Production

- [ ] I understand Angular production builds.
- [ ] I can configure SPA hosting.
- [ ] I understand CI/CD.
- [ ] I can debug a production network issue.
- [ ] I understand source maps.
- [ ] I understand logging and trace IDs.
- [ ] I can perform code reviews.
- [ ] I can explain technical trade-offs to teammates.

---

# 39. Common Angular Mistakes

Avoid these habits.

## 1. Using `any` everywhere

You lose one of Angular/TypeScript's biggest advantages.

## 2. Putting business logic in templates

Templates should be readable.

## 3. One giant component

Split by responsibility.

## 4. One giant `CommonService`

Use meaningful service boundaries.

## 5. Manually subscribing everywhere

Use:

```text
AsyncPipe
signals
takeUntilDestroyed
framework-safe reactive patterns
```

as appropriate.

## 6. Nested subscriptions

Bad:

```typescript
source$.subscribe(a => {
  other$(a).subscribe(b => {
    ...
  });
});
```

Usually use composition:

```typescript
source$.pipe(
  switchMap(a => other$(a))
)
```

or another suitable flattening operator.

## 7. Using `effect()` to copy state

Prefer `computed()` when one value derives from another.

## 8. Global state for everything

Keep state close to the feature that owns it.

## 9. Calling APIs directly from every component

Centralize data-access behavior when it improves reuse, consistency, typing, caching, or testing.

## 10. Treating route guards as security

Backend authorization is mandatory.

## 11. Loading every feature at startup

Use lazy loading.

## 12. Ignoring accessibility

Accessibility bugs are product bugs.

## 13. Ignoring loading/error/empty states

Every remote-data UI should consider:

```text
loading
success
empty
error
retry
```

## 14. Keeping outdated Angular patterns forever

Understand legacy APIs, but learn current Angular architecture.

## 15. Migrating everything only because a new API exists

Modernization should reduce risk or improve quality—not create unnecessary churn.

## 16. Premature microfrontends

Use them for organizational independence, not fashion.

## 17. Overengineering small applications

Architecture complexity should match product complexity.

## 18. Underengineering large applications

A 200-component enterprise application needs boundaries, ownership, tests, and standards.

## 19. Trusting backend data without modeling it

Validate and map uncertain API data where appropriate.

## 20. Optimizing without profiling

Measure first.

---

# 40. Recommended Learning Order

If you want the shortest correct sequence, follow this:

```text
1. HTML
2. CSS
3. JavaScript
4. TypeScript
5. Git + npm
6. Angular CLI
7. Standalone Components
8. Templates
9. Inputs / Outputs / model
10. Signals
11. Dependency Injection
12. Services
13. Router
14. HTTP
15. RxJS
16. Forms
17. State Management
18. Component Architecture
19. Testing
20. Security
21. Accessibility
22. Performance
23. SSR / Hydration
24. Enterprise Architecture
25. CI/CD
26. Production Debugging
27. Team Leadership / Code Review
```

Do not start by memorizing NgRx, microfrontends, or advanced RxJS before you can build a clean normal Angular feature.

---

# 41. Official References

Use official documentation as your primary source.

## Angular

- Angular documentation: https://angular.dev/
- Angular overview: https://angular.dev/overview
- Angular releases: https://angular.dev/reference/releases
- Angular version compatibility: https://angular.dev/reference/versions
- Angular roadmap: https://angular.dev/roadmap
- Angular style guide: https://angular.dev/style-guide
- Components: https://angular.dev/guide/components
- Signals: https://angular.dev/guide/signals
- Async resources: https://angular.dev/guide/signals/resource
- Dependency Injection: https://angular.dev/guide/di
- Routing: https://angular.dev/guide/routing
- Route loading strategies: https://angular.dev/guide/routing/loading-strategies
- Route guards: https://angular.dev/guide/routing/route-guards
- Forms: https://angular.dev/guide/forms
- Signal Forms: https://angular.dev/guide/forms/signals/overview
- HTTP: https://angular.dev/guide/http
- HTTP interceptors: https://angular.dev/guide/http/interceptors
- httpResource: https://angular.dev/guide/http/http-resource
- Testing: https://angular.dev/guide/testing
- SSR: https://angular.dev/best-practices/performance/ssr
- Hydration: https://angular.dev/guide/hydration
- Zoneless Angular: https://angular.dev/guide/zoneless
- Accessibility: https://angular.dev/best-practices/a11y
- `@defer`: https://angular.dev/guide/templates/defer

## TypeScript

- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/

## RxJS

- RxJS overview: https://rxjs.dev/guide/overview
- RxJS Observables: https://rxjs.dev/guide/observable
- RxJS operators: https://rxjs.dev/guide/operators
- RxJS Subjects: https://rxjs.dev/guide/subject

---

# Final Mastery Rule

Do not judge your Angular skill by how many APIs you can remember.

Judge it by whether you can repeatedly build features that are:

```text
Correct
Readable
Typed
Maintainable
Testable
Accessible
Secure
Fast
Observable
Scalable
Easy for another developer to change
```

A strong Angular developer understands the framework.

A senior Angular developer understands **trade-offs, architecture, browser behavior, production failure modes, and team scalability**.

Keep building real applications, reading framework documentation, reviewing production code, measuring performance, and explaining your design decisions. That is what turns Angular knowledge into engineering mastery.
