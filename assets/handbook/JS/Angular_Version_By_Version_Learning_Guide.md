# Angular Version-by-Version Learning Guide

> **Purpose:** Understand how Angular evolved without drowning in changelog noise.
>
> This guide focuses on changes that affect how a learner thinks, writes code, upgrades projects, or recognizes legacy syntax. It is **not** a commit-by-commit changelog.
>
> **Current learning baseline:** Angular v22-era development. Angular v22 was released on **2026-06-03**. Angular's official release policy now targets a major release roughly every 12 months; prior to v22, Angular generally followed a six-month major cycle.

---

## Table of Contents

1. [How to Read Angular Versions](#1-how-to-read-angular-versions)
2. [AngularJS 1.x vs Angular 2+](#2-angularjs-1x-vs-angular-2)
3. [Why Angular 3 Was Skipped](#3-why-angular-3-was-skipped)
4. [Version Timeline at a Glance](#4-version-timeline-at-a-glance)
5. [Angular 2](#5-angular-2--the-rewrite)
6. [Angular 4](#6-angular-4--smaller-faster-and-more-consistent)
7. [Angular 5](#7-angular-5--production-tooling-and-http-modernization)
8. [Angular 6](#8-angular-6--cli-workflows-rxjs-6-and-angular-elements)
9. [Angular 7](#9-angular-7--cli-ux-and-cdk-productivity)
10. [Angular 8](#10-angular-8--differential-loading-and-ivy-preview)
11. [Angular 9](#11-angular-9--ivy-by-default)
12. [Angular 10](#12-angular-10--quality-and-ecosystem-tightening)
13. [Angular 11](#13-angular-11--build-and-developer-experience-improvements)
14. [Angular 12](#14-angular-12--ivy-era-consolidation)
15. [Angular 13](#15-angular-13--view-engine-removal-and-modern-packaging)
16. [Angular 14](#16-angular-14--typed-forms-and-standalone-preview)
17. [Angular 15](#17-angular-15--standalone-stable)
18. [Angular 16](#18-angular-16--signals-and-hydration-preview)
19. [Angular 17](#19-angular-17--new-template-era)
20. [Angular 18](#20-angular-18--zoneless-experiments-and-reactivity-progress)
21. [Angular 19](#21-angular-19--standalone-default-and-server-rendering-progress)
22. [Angular 20](#22-angular-20--stabilization-and-zoneless-maturity)
23. [Angular 21](#23-angular-21--zoneless-default-and-vitest-default)
24. [Angular 22](#24-angular-22--stable-signal-forms-and-async-signals)
25. [Compatibility Matrix](#25-compatibility-matrix)
26. [How to Read Legacy Projects](#26-how-to-read-legacy-projects)
27. [Upgrade Strategy](#27-upgrade-strategy)
28. [Modernization Playbook](#28-modernization-playbook)
29. [What a New Learner Should Focus On Today](#29-what-a-new-learner-should-focus-on-today)
30. [Official Sources](#30-official-sources)

---

# 1. How to Read Angular Versions

Angular follows semantic versioning:

```text
major.minor.patch
```

Example:

```text
22.1.1
│  │ │
│  │ └─ patch: bug fixes
│  └─── minor: backward-compatible features/improvements
└────── major: larger platform changes, possible migrations/breaking changes
```

## Major upgrade mindset

When moving from one major version to another:

- read the official Update Guide
- use `ng update`
- run migrations
- update one major at a time for old projects
- run tests after each step

Do not treat a major upgrade as “just change package.json numbers.”

---

# 2. AngularJS 1.x vs Angular 2+

AngularJS and modern Angular are different frameworks.

## AngularJS 1.x style

```js
app.controller('UserCtrl', function($scope) {
  $scope.name = 'Asha';
});
```

```html
<div ng-controller="UserCtrl">
  {{ name }}
</div>
```

Concepts commonly seen:

- `$scope`
- controllers
- digest cycle
- directives such as `ng-repeat`
- dependency names in strings/minification concerns

## Angular 2+ style

```ts
@Component({
  selector: 'app-user',
  template: `<h2>{{ name }}</h2>`
})
export class User {
  name = 'Asha';
}
```

The shift was architectural, not cosmetic.

---

# 3. Why Angular 3 Was Skipped

Angular did not release a framework major version called Angular 3.

The package versions in the Angular ecosystem were not all aligned after Angular 2; notably the Router had already advanced. The team aligned future major versions by moving to Angular 4.

For learners, simply remember:

```text
Angular 2 → Angular 4
```

There is no missing framework generation you need to learn.

---

# 4. Version Timeline at a Glance

| Version | Initial release | Learner headline |
|---|---:|---|
| Angular 2 | 2016-09-14 | Complete AngularJS rewrite; components + TypeScript |
| Angular 4 | 2017-03-23 | Smaller/faster compiler output; template improvements |
| Angular 5 | 2017-11-01 | Build optimizer, newer HttpClient/PWA direction |
| Angular 6 | 2018-05-03 | `ng update`, `ng add`, RxJS 6, Angular Elements |
| Angular 7 | 2018-10-18 | CLI prompts, CDK virtual scroll and drag/drop |
| Angular 8 | 2019-05-28 | Differential loading, dynamic imports, Ivy preview |
| Angular 9 | 2020-02-06 | Ivy becomes default |
| Angular 10 | 2020-06-24 | Ecosystem tightening, build warnings, tooling quality |
| Angular 11 | 2020-11-11 | Build/HMR/reporting improvements |
| Angular 12 | 2021-05-12 | Ivy consolidation, stricter modern defaults |
| Angular 13 | 2021-11-03 | View Engine removed; modern package pipeline |
| Angular 14 | 2022-06-02 | Typed forms; standalone developer preview |
| Angular 15 | 2022-11-16 | Standalone APIs stable |
| Angular 16 | 2023-05-03 | Signals preview; hydration preview |
| Angular 17 | 2023-11-08 | `@if/@for/@switch`, `@defer`, new build direction |
| Angular 18 | 2024-05-22 | Zoneless developer-preview era; reactivity/server progress |
| Angular 19 | 2024-11-19 | Standalone becomes default direction; incremental hydration preview |
| Angular 20 | 2025-05-28 | Modern APIs stabilize; zoneless becomes mature/stable during v20 line |
| Angular 21 | 2025-11-19 | Zoneless default; Vitest default; Signal Forms preview |
| Angular 22 | 2026-06-03 | Signal Forms + resource/httpResource + Angular Aria stable |

The release dates above are based on Angular's official changelog/release records.

---

# 5. Angular 2 — The Rewrite

Angular 2 established the architecture that modern Angular evolved from.

## Big ideas

- TypeScript-first development
- component architecture
- dependency injection
- decorators/metadata
- template binding
- RxJS-based async patterns
- Router
- forms
- Ahead-of-Time compilation direction

## Typical Angular 2-era component

```ts
@Component({
  selector: 'app-user',
  template: `
    <h2>{{ name }}</h2>
    <button (click)="rename()">Rename</button>
  `
})
export class UserComponent {
  name = 'Asha';

  rename() {
    this.name = 'Priya';
  }
}
```

## What looks old today

Angular 2-era tutorials often emphasize:

- NgModules for everything
- constructor injection
- decorator inputs/outputs
- structural directives (`*ngIf`, `*ngFor`)
- Zone.js-driven change detection

These concepts are still useful for reading older applications, but new Angular uses simpler standalone and signal-first patterns.

---

# 6. Angular 4 — Smaller, Faster, and More Consistent

Angular 4 focused on compatibility and compiler/template improvements rather than another rewrite.

## Learner-relevant changes

- improved generated code/build size characteristics
- richer template conditionals, including `else` support with `ngIf`
- animation functionality separated into its own package direction
- framework packages became more aligned around the same major version

## Historical `ngIf` with else

```html
<div *ngIf="user; else loading">
  Welcome {{ user.name }}
</div>

<ng-template #loading>
  Loading...
</ng-template>
```

Modern equivalent:

```html
@if (user()) {
  Welcome {{ user()!.name }}
} @else {
  Loading...
}
```

## Learning lesson

Angular 4 shows the pattern that continues for years: Angular changes incrementally, and migration tooling preserves the same overall component model.

---

# 7. Angular 5 — Production Tooling and HTTP Modernization

Angular 5 improved production output and application tooling.

## Learner-relevant changes

- build optimizer work
- service-worker/PWA tooling matured
- newer `HttpClient` direction became the standard replacement for the older HTTP API
- forms gained useful update timing options

## Old HTTP style you may encounter

```ts
import { Http } from '@angular/http';
```

This package is obsolete.

## Modern HTTP style

```ts
private http = inject(HttpClient);

loadUsers() {
  return this.http.get<User[]>('/api/users');
}
```

## Form update timing concept

Controls can be configured to update on events such as change, blur, or submit depending on form API/options.

## Learning lesson

If an old tutorial imports from `@angular/http`, it is historically useful but not a modern coding reference.

---

# 8. Angular 6 — CLI Workflows, RxJS 6, and Angular Elements

Angular 6 was very important for project maintenance workflows.

## Major learner changes

### `ng update`

A framework-supported path for dependency and code migrations.

```bash
ng update @angular/core @angular/cli
```

### `ng add`

Libraries can provide schematics that configure themselves.

```bash
ng add @angular/material
```

### RxJS 6

Pipeable operators became the normal syntax.

Older style:

```ts
observable.map(...).filter(...)
```

Modern style:

```ts
observable.pipe(
  map(...),
  filter(...)
)
```

### Tree-shakable providers

The familiar pattern became standard:

```ts
@Injectable({ providedIn: 'root' })
export class UserService {}
```

### Angular Elements

Enabled packaging Angular components as custom elements/web components for certain integration scenarios.

## Learning lesson

Angular 6 is where the CLI became much more central to safe framework evolution.

---

# 9. Angular 7 — CLI UX and CDK Productivity

Angular 7 did not rewrite application architecture. It improved developer experience and the Component Dev Kit.

## Notable learner features

- interactive CLI prompts
- CDK virtual scrolling
- CDK drag and drop
- performance/platform refinements

## Virtual scrolling scenario

If you have 100,000 rows, rendering all rows at once is expensive.

Virtual scrolling renders only the visible window.

Concept:

```text
100,000 records in data
↓
~30 visible DOM rows
↓
scroll swaps rendered window
```

## Learning lesson

The CDK is valuable because it gives behavior primitives without forcing your design system.

---

# 10. Angular 8 — Differential Loading and Ivy Preview

Angular 8 prepared the ecosystem for the Ivy compiler/runtime and improved browser delivery.

## Important changes

### Differential loading

The build could produce modern and legacy JavaScript bundles for different browsers, improving delivery for modern browsers of that era.

This specific historical mechanism is less important in current Angular because browser support and build tooling evolved, but it explains old build output.

### Lazy routes switch to dynamic `import()`

Old string syntax:

```ts
loadChildren: './admin/admin.module#AdminModule'
```

New direction:

```ts
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
```

Modern standalone direction:

```ts
loadComponent: () => import('./admin').then(m => m.Admin)
```

### Ivy preview

Ivy was available as an opt-in preview before becoming default in v9.

### Web worker support

CLI tooling made worker setup easier.

## Learning lesson

If you see string-based lazy loading, you are looking at genuinely old Angular routing code.

---

# 11. Angular 9 — Ivy by Default

Angular 9 made Ivy the default compilation/rendering engine.

## Why Ivy mattered

- improved compilation model
- better debugging and generated code behavior
- foundation for future features
- stronger template type checking direction
- enabled later simplifications in libraries/components

Most current Angular developers do not “use Ivy APIs” directly. Ivy is infrastructure under modern Angular.

## Legacy clue

Old projects/libraries may contain references to:

- View Engine
- `ngcc` (Angular compatibility compiler)
- entry-point compatibility processing

These are migration-era concepts, not modern app architecture.

## Learning lesson

Do not spend beginner time learning View Engine internals. Learn only enough to recognize old build errors during migration.

---

# 12. Angular 10 — Quality and Ecosystem Tightening

Angular 10 focused more on ecosystem quality than dramatic template syntax.

## Learner-relevant themes

- newer TypeScript/toolchain requirements
- warnings for CommonJS dependencies because they can reduce optimization
- stricter project/tooling defaults
- framework/material quality improvements

## CommonJS warning concept

A dependency packaged in a way that blocks optimal tree-shaking can cause larger bundles.

Learner takeaway:

> Dependency format matters to frontend performance.

## Learning lesson

Not every major Angular release gives a shiny new syntax. Some releases primarily improve maintainability, build quality, and ecosystem health.

---

# 13. Angular 11 — Build and Developer Experience Improvements

Angular 11 continued build system and tooling improvements.

## Themes learners may notice in old projects

- improved build/reporting experience
- development-server/HMR improvements
- stricter template/type-checking direction
- experimental/transition work around newer build tooling

## Why this matters today

When maintaining an Angular 11 project, the biggest challenge is usually not a missing v11 syntax. It is the age of:

- Node.js
- TypeScript
- RxJS
- third-party libraries
- build plugins

The compatibility matrix matters during upgrades.

---

# 14. Angular 12 — Ivy Era Consolidation

Angular 12 pushed the ecosystem further toward Ivy-only and modern build defaults.

## Learner-relevant themes

- Ivy becomes the expected library/application direction
- View Engine is clearly on the path out
- stricter project defaults
- modern Sass/build tooling improvements
- newer TypeScript and browser support requirements

## What to recognize in Angular 12 code

Most business code still looks like classic Angular:

```ts
@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Standalone components did not exist yet.

## Learning lesson

Angular 12 is still firmly an NgModule-era project from an architectural perspective.

---

# 15. Angular 13 — View Engine Removal and Modern Packaging

Angular 13 removed View Engine from the main path and simplified the package ecosystem.

## Big learner changes

- View Engine support removed
- `ngcc` era ends for modern libraries
- Angular Package Format modernized
- dynamic component creation became simpler because factories were no longer central

## Old dynamic component code

```ts
const factory = componentFactoryResolver.resolveComponentFactory(MyComponent);
container.createComponent(factory);
```

Modern direction:

```ts
container.createComponent(MyComponent);
```

## Learning lesson

If a migration fails because a library only supports View Engine, that library is extremely old and likely needs replacement/upgrading.

---

# 16. Angular 14 — Typed Forms and Standalone Preview

Angular 14 is one of the most important modernization milestones.

## 1. Typed Reactive Forms

Before typed forms, many form values effectively behaved like `any`.

Modern typed direction:

```ts
form = new FormGroup({
  email: new FormControl('', { nonNullable: true }),
  age: new FormControl(0, { nonNullable: true })
});
```

TypeScript now understands the shape much better.

## 2. Standalone components — Developer Preview

Traditional:

```ts
@NgModule({
  declarations: [UserCardComponent]
})
export class UsersModule {}
```

Standalone preview direction:

```ts
@Component({
  standalone: true,
  selector: 'app-user-card',
  imports: [CommonModule],
  template: `...`
})
export class UserCardComponent {}
```

## 3. Router improvements

Angular 14 added several useful Router capabilities, including APIs that worked naturally with standalone architecture and route-level providers/title improvements.

## Learning lesson

Angular 14 is the beginning of the modern “less NgModule ceremony” era.

---

# 17. Angular 15 — Standalone Stable

Angular 15 graduated standalone APIs to stable.

## What changed in how you build apps

You could now confidently build production applications without an AppModule-first architecture.

Bootstrap:

```ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

## Functional Router APIs

Functional guards became a clean alternative to guard classes.

```ts
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isLoggedIn();
};
```

## Directive Composition API

Components/directives can compose host directive behavior instead of duplicating it.

## `NgOptimizedImage`

Angular's image optimization tooling became an important performance primitive.

## Learning lesson

If starting a new project from Angular 15 onward, standalone architecture is the direction to prefer.

---

# 18. Angular 16 — Signals and Hydration Preview

Angular 16 began Angular's modern reactivity transformation.

## 1. Signals — Developer Preview

```ts
count = signal(0);

double = computed(() => this.count() * 2);
```

This introduced fine-grained reactive state directly into Angular core.

## 2. Effects

```ts
effect(() => {
  console.log(this.count());
});
```

## 3. Non-destructive hydration — Developer Preview

Server-rendered DOM could be reused during client bootstrap rather than discarded.

## 4. Destruction-aware APIs

`DestroyRef` and RxJS interop utilities reduced manual teardown boilerplate.

Conceptual pattern:

```ts
source$.pipe(
  takeUntilDestroyed()
)
```

## 5. Required inputs and stronger component APIs

Angular continued improving how component contracts can be expressed.

## Learning lesson

Angular 16 is where Signals enter the story, but old tutorials calling them “experimental/developer preview” should not be used to judge their current maturity.

---

# 19. Angular 17 — New Template Era

Angular 17 is another major learning milestone.

## 1. Built-in control flow

Old:

```html
<div *ngIf="isLoggedIn; else login">Welcome</div>
<ng-template #login>Login</ng-template>
```

New:

```html
@if (isLoggedIn()) {
  <div>Welcome</div>
} @else {
  <div>Login</div>
}
```

Old loop:

```html
<li *ngFor="let user of users; trackBy: trackUser">
  {{ user.name }}
</li>
```

New:

```html
@for (user of users(); track user.id) {
  <li>{{ user.name }}</li>
}
```

## 2. Deferrable Views

```html
@defer (on viewport) {
  <app-heavy-chart />
} @placeholder {
  <div>Chart placeholder</div>
}
```

This made code splitting/loading behavior much easier to express in templates.

## 3. New build/application pipeline direction

Angular moved toward a faster modern build stack centered around esbuild/Vite-powered development capabilities.

## 4. SSR package/tooling improvements

Server rendering became easier to add and more integrated with the CLI.

## 5. Hydration graduated from its earlier preview stage

Server-rendered Angular became a more mainstream application choice.

## Learning lesson

Angular 17 syntax is where modern templates start looking visibly different from Angular 2–16 tutorials.

---

# 20. Angular 18 — Zoneless Experiments and Reactivity Progress

Angular 18 continued the signals/server modernization and introduced an important change-detection direction.

## Zoneless change detection — Developer Preview era

Historically Angular depended on Zone.js to schedule change detection after async activity.

Zoneless direction:

```ts
bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()]
});
```

The exact API evolved in later versions, so do not copy the preview API into current Angular.

## Why zoneless mattered

- less monkey-patching of browser APIs
- potentially smaller/more predictable runtime
- clearer relationship between reactive state and UI updates
- foundation for a signal-driven Angular future

## Server/hydration improvements

Angular 18 continued work around hydration, event replay, and rendering performance.

## Learning lesson

When reading v18 tutorials, treat zoneless APIs as historical preview syntax. The concept survived; the recommended API/default changed later.

---

# 21. Angular 19 — Standalone Default and Server Rendering Progress

Angular 19 made the standalone direction even stronger and advanced SSR/hydration.

## 1. Standalone becomes the default component direction

Newly generated components no longer need the learner to think “add `standalone: true` everywhere” as a special opt-in concept.

Modern component:

```ts
@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  template: `...`
})
export class Profile {}
```

Legacy NgModule-based components can still exist.

## 2. Incremental hydration — Developer Preview

Angular could leave deferred sections unhydrated and activate them later.

Concept:

```html
@defer (hydrate on viewport) {
  <app-comments />
}
```

Exact supported trigger syntax/options should be checked against the version in your project.

## 3. Server route configuration and rendering strategy improvements

Angular's SSR story moved toward explicit per-route rendering choices.

## 4. Signal ecosystem expands

More component APIs and reactive primitives moved toward signal-based alternatives.

## Learning lesson

Angular 19 projects are recognizably “modern Angular”: standalone-first, signal-friendly, built-in control flow, and serious SSR/hydration capabilities.

---

# 22. Angular 20 — Stabilization and Zoneless Maturity

Angular 20 continued promoting modern APIs from preview toward production-ready status.

## Key themes

- continued stabilization of signal-based APIs
- zoneless change detection matured and became stable during the v20 release line
- server/hydration tooling improved
- DevTools improved visibility into deferred/hydrated behavior
- diagnostics and template tooling continued to improve

## Modern zoneless opt-in in Angular 20

```ts
bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection()]
});
```

In Angular 21+, zoneless becomes the default, so this explicit opt-in is generally unnecessary for a normal current app.

## Learning lesson

Angular 20 is a transition release: modern APIs are no longer just exciting experiments; they are becoming the normal production path.

---

# 23. Angular 21 — Zoneless Default and Vitest Default

Angular 21 materially changes the default experience of new Angular development.

## 1. Zoneless by default

You no longer need to opt into zoneless for a normal Angular 21+ app.

This means modern code should notify Angular through supported mechanisms such as:

- signals read by templates
- bound events
- input updates
- AsyncPipe/mark-for-check patterns when appropriate

## 2. Vitest becomes the default unit-test runner

New CLI projects move away from Karma as the default.

```bash
ng test
```

now runs the modern Vitest-based setup in new current projects.

Legacy Karma remains relevant for older applications.

## 3. Signal Forms introduced in preview/experimental form

Signal-based forms arrived for real-world exploration.

Concept:

```ts
model = signal({ email: '', password: '' });
loginForm = form(model);
```

## 4. Angular Aria preview

Headless accessibility primitives expanded Angular's first-party UI foundation.

## 5. AI tooling integration

Angular began shipping more official support/resources for AI-assisted development workflows, including Angular-aware tooling.

## Learning lesson

Angular 21 is the point where a learner should stop assuming Zone.js and Karma are “just how Angular works.”

---

# 24. Angular 22 — Stable Signal Forms and Async Signals

Angular 22 is the current major baseline of this guide.

Released: **2026-06-03**.

## 1. Signal Forms stable

Signal Forms become a production-ready first-party form option.

```ts
import { signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';

loginModel = signal({
  email: '',
  password: ''
});

loginForm = form(this.loginModel, path => {
  required(path.email);
  email(path.email);
  required(path.password);
});
```

```html
<input [formField]="loginForm.email">
<input type="password" [formField]="loginForm.password">
```

### Why learners care

There are now **three** legitimate form models:

```text
Signal Forms      → new signal-based apps
Reactive Forms    → complex/existing enterprise apps
Template-driven   → small/simple forms
```

Do not claim one approach replaces all others automatically.

## 2. Async signal APIs stable

`resource()` and `httpResource()` are production-ready for reactive async data patterns.

```ts
userId = signal(1);
user = httpResource(() => `/api/users/${this.userId()}`);
```

```html
@if (user.hasValue()) {
  <h2>{{ user.value().name }}</h2>
} @else if (user.isLoading()) {
  Loading...
} @else if (user.error()) {
  Failed to load.
}
```

Important: `httpResource` is excellent for reactive reads, but normal `HttpClient` calls are generally clearer for mutations such as POST/PUT/DELETE.

## 3. Angular Aria stable

Angular now provides stable accessibility-focused headless UI primitives, helping teams build custom design systems without reinventing complex interaction behavior.

## 4. Template/API ergonomics continue improving

Angular 22 continues the direction established by v17–v21:

- less ceremony
- stronger typing
- signal-first APIs
- standalone-first design
- zoneless default
- modern testing/build tooling

## 5. Release cadence changes

Angular's official policy now targets one major release per year. Before v22, the project generally targeted two majors per year.

## What a new v22 learner should write

Prefer:

```text
standalone-first
Signals for local/derived state
built-in control flow
lazy route components
inject()
functional interceptors/guards
Vitest testing
zoneless-compatible code
Signal Forms or Reactive Forms based on need
```

Understand but do not default to:

```text
AppModule-heavy architecture
*ngIf/*ngFor for new templates
EventEmitter everywhere
manual subscriptions for simple state
Zone.js-dependent assumptions
Karma-first testing
```

---

# 25. Compatibility Matrix

Exact patch-level compatibility changes over time. Always verify against the official Angular compatibility page.

Below is a learner-friendly snapshot of major ranges from Angular's official compatibility table.

| Angular | Typical supported Node.js range from official historical table | TypeScript family | RxJS |
|---|---|---|---|
| 22.0.x | `^22.22.3 || ^24.15.0 || ^26.0.0` | `>=6.0.0 <6.1.0` | `^6.5.3 || ^7.4.0` |
| 21.x | `^20.19.0 || ^22.12.0 || ^24.0.0` | `>=5.9.0 <6.0.0` | `^6.5.3 || ^7.4.0` |
| 20.2/20.3 | `^20.19.0 || ^22.12.0 || ^24.0.0` | `>=5.8.0 <6.0.0` | `^6.5.3 || ^7.4.0` |
| 20.0/20.1 | `^20.19.0 || ^22.12.0 || ^24.0.0` | `>=5.8.0 <5.9.0` | `^6.5.3 || ^7.4.0` |
| 19.2 | `^18.19.1 || ^20.11.1 || ^22.0.0` | `>=5.5.0 <5.9.0` | `^6.5.3 || ^7.4.0` |
| 18.1/18.2 | `^18.19.1 || ^20.11.1 || ^22.0.0` | `>=5.4.0 <5.6.0` | `^6.5.3 || ^7.4.0` |
| 17.3 | `^18.13.0 || ^20.9.0` | `>=5.2.0 <5.5.0` | `^6.5.3 || ^7.4.0` |
| 16.1/16.2 | `^16.14.0 || ^18.10.0` | `>=4.9.3 <5.2.0` | `^6.5.3 || ^7.4.0` |
| 15.1/15.2 | `^14.20.0 || ^16.13.0 || ^18.10.0` | `>=4.8.2 <5.0.0` | `^6.5.3 || ^7.4.0` |
| 14.2/14.3 | `^14.15.0 || ^16.10.0` | `>=4.6.2 <4.9.0` | `^6.5.3 || ^7.4.0` |
| 13.3/13.4 | `^12.20.0 || ^14.15.0 || ^16.10.0` | `>=4.4.3 <4.7.0` | `^6.5.3 || ^7.4.0` |
| 12.2 | `^12.14.0 || ^14.15.0` | `>=4.2.3 <4.4.0` | `^6.5.3 || ^7.0.0` |
| 11.2 | `^10.13.0 || ^12.11.0` | `>=4.0.0 <4.2.0` | `^6.5.3` |
| 10.2 | `^10.13.0 || ^12.11.0` | `>=3.9.0 <4.1.0` | `^6.5.3` |
| 9.1 | `^10.13.0 || ^12.11.0` | `>=3.6.0 <3.9.0` | `^6.5.3` |
| 8.2 | `^10.9.0` | `>=3.4.2 <3.6.0` | `^6.4.0` |
| 7.2 | `^8.9.0 || ^10.9.0` | `>=3.1.3 <3.3.0` | `^6.0.0` |
| 6.1 | `^8.9.0` | `>=2.7.2 <3.0.0` | `^6.0.0` |
| 5.2 | `^6.9.0 || ^8.9.0` | `>=2.4.2 <2.7.0` | `^5.5.0` |
| 4.2–4.4 | `^6.9.0 || ^8.9.0` | `>=2.1.6 <2.5.0` | `^5.0.1` |
| 2.x | `^6.9.0` | `>=1.8.0 <2.2.0` | `^5.0.1` |

## Why compatibility matters

Example: you clone an Angular 12 project in 2026 and run it using a very new Node.js version.

Possible result:

```text
npm dependency errors
builder failures
OpenSSL/toolchain errors
TypeScript peer dependency conflicts
```

The code may be fine—the toolchain combination is unsupported.

### Correct workflow

1. Check Angular version in `package.json`.
2. Check official compatibility table.
3. Use a compatible Node version (NVM helps).
4. Install dependencies.
5. Then start the upgrade.

---

# 26. How to Read Legacy Projects

## Angular 2–13 clues

```ts
@NgModule({
  declarations: [...],
  imports: [...],
  providers: [...],
  bootstrap: [...]
})
export class AppModule {}
```

This is normal for that era.

## Angular 14–18 transition clues

You may see a mix:

```text
standalone components
NgModules
signals
RxJS Subjects
*ngIf
@if
constructor DI
inject()
```

Mixed style is not automatically wrong. Migration is often incremental.

## Modern Angular clues

```ts
@Component({
  imports: [RouterLink],
  template: `
    @if (user()) {
      <a [routerLink]="['/users', user()!.id]">
        {{ user()!.name }}
      </a>
    }
  `
})
export class UserCard {
  user = input<User | null>(null);
}
```

And application bootstrap:

```ts
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
```

---

# 27. Upgrade Strategy

Angular's official guidance supports structured migration, and old projects should generally move one major version at a time.

## Example: Angular 12 → Angular 22

Do **not** jump:

```text
12 → 22
```

Use:

```text
12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22
```

At each step:

```bash
ng update @angular/core@13 @angular/cli@13
```

Then the next major, using the versions appropriate for that step.

## Upgrade checklist per major

```text
[ ] clean git status
[ ] compatible Node.js active
[ ] current version builds
[ ] current tests pass
[ ] run ng update
[ ] read migration output
[ ] fix compile errors
[ ] run tests
[ ] smoke-test key screens
[ ] commit
```

## Third-party packages

Before upgrading, inventory libraries:

```bash
npm outdated
```

Check especially:

- UI component libraries
- auth libraries
- editors
- charts
- grids
- date libraries
- custom builders
- state libraries

A framework upgrade can be blocked by one abandoned package.

---

# 28. Modernization Playbook

Framework upgrade and code modernization are related but should often be separate.

## Step 1 — Reach a supported Angular version

First make the application build/run on a supported framework/toolchain.

## Step 2 — Standalone migration

Use Angular-provided migrations where appropriate.

Before:

```ts
@NgModule({
  declarations: [UserListComponent]
})
export class UsersModule {}
```

After conceptually:

```ts
@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html'
})
export class UserList {}
```

## Step 3 — Built-in control flow

Before:

```html
<div *ngIf="loading">Loading</div>
<ul>
  <li *ngFor="let user of users; trackBy: trackUser">
    {{ user.name }}
  </li>
</ul>
```

After:

```html
@if (loading()) {
  <div>Loading</div>
}

<ul>
  @for (user of users(); track user.id) {
    <li>{{ user.name }}</li>
  }
</ul>
```

## Step 4 — Modern DI

Before:

```ts
constructor(private api: UserApi) {}
```

Modern option:

```ts
private api = inject(UserApi);
```

Constructor injection is not “invalid”; `inject()` is simply a modern option with advantages in functional APIs and migrations.

## Step 5 — Signals for UI state

Before:

```ts
loading = false;
```

After:

```ts
loading = signal(false);
```

Derived values:

```ts
visibleUsers = computed(() => ...);
```

## Step 6 — Signal component APIs

Before:

```ts
@Input() user!: User;
@Output() saved = new EventEmitter<User>();
```

After:

```ts
user = input.required<User>();
saved = output<User>();
```

## Step 7 — Zoneless compatibility

Look for code depending on Zone.js timing assumptions:

- manual async callbacks that mutate plain fields
- reliance on `NgZone.onStable`
- third-party integrations with hidden state changes

Prefer signals and explicit Angular notification patterns.

## Step 8 — Test migration

Move older Karma suites to current testing infrastructure when the project is ready.

Do not change framework, state architecture, forms architecture, and all tests in one unreviewable change.

---

# 29. What a New Learner Should Focus On Today

## Learn deeply

```text
TypeScript
standalone components
component composition
modern templates
@if / @for / @switch / @let
Signals
computed/effect
inputs/outputs/model
DI + inject()
services
routing + lazy loading
HttpClient
httpResource/resource concepts
RxJS essentials
Signal Forms + Reactive Forms
functional guards/interceptors
Vitest/TestBed
security
performance
accessibility
SSR/hydration basics
```

## Learn enough to maintain old apps

```text
NgModules
*ngIf / *ngFor
@Input / @Output / EventEmitter
constructor injection
Zone.js behavior
Karma/Jasmine
View Engine terminology
ngcc terminology
older lazy-load syntax
```

## Do not spend much time on obsolete APIs

Examples:

- `@angular/http`
- string-based lazy routes
- View Engine implementation details
- `ComponentFactoryResolver`-heavy patterns unless maintaining legacy code

---

# 30. Official Sources

Use these as the source of truth:

- Angular documentation: https://angular.dev/
- Version compatibility: https://angular.dev/reference/versions
- Versioning/releases/support: https://angular.dev/reference/releases
- Update Guide: https://angular.dev/update-guide
- Migrations: https://angular.dev/reference/migrations
- Angular roadmap: https://angular.dev/roadmap
- Angular framework changelog: https://github.com/angular/angular/blob/main/CHANGELOG.md
- Historical changelog archive: https://github.com/angular/angular/blob/main/CHANGELOG_ARCHIVE.md

---

# Appendix A — Version Memory Map

If you remember only one line per major version, remember this:

```text
2  = rewrite / component Angular
4  = refinement after v2, v3 skipped
5  = production tooling + modern HTTP era
6  = ng update/ng add + RxJS 6 + Elements
7  = CLI/CDK productivity
8  = differential loading + Ivy preview
9  = Ivy default
10 = ecosystem/tooling tightening
11 = build/DX improvements
12 = Ivy consolidation
13 = View Engine removed
14 = typed forms + standalone preview
15 = standalone stable
16 = Signals + hydration preview
17 = @if/@for + @defer + modern build/SSR era
18 = zoneless preview era
19 = standalone default direction + incremental hydration preview
20 = stabilization + zoneless maturity
21 = zoneless default + Vitest default + Signal Forms preview
22 = Signal Forms/resource/httpResource/Angular Aria stable
```

---

# Appendix B — Which Tutorial Is Too Old?

## Red flags

If a tutorial teaches these as the preferred modern approach, check its date/version:

```ts
platformBrowserDynamic().bootstrapModule(AppModule)
```

```html
*ngIf
*ngFor
```

```ts
@Input()
@Output() something = new EventEmitter()
```

```ts
constructor(private service: MyService) {}
```

```ts
import { Http } from '@angular/http';
```

```ts
loadChildren: './feature/feature.module#FeatureModule'
```

Not all of these are “wrong.” Some are still supported or common. The issue is when an old tutorial presents them as the only/default way and never explains modern standalone/signals/control-flow/testing patterns.

---

# Appendix C — Practical Decision Guide

## New Angular v22 application

Start with:

```text
standalone
zoneless default
signals
built-in control flow
lazy routing
Vitest
```

Choose forms:

```text
Signal Forms → new signal-heavy form flows
Reactive Forms → complex/established enterprise form ecosystems
Template-driven → simple forms
```

Choose async model:

```text
httpResource/resource → reactive GET/read state
HttpClient + RxJS → general HTTP flows, mutations, stream composition
```

Choose global state:

```text
local signals first
feature service/store when shared
NgRx/other dedicated state library only when complexity justifies it
```

---

# Final Perspective

Angular did not evolve by replacing itself every year. The same core ideas—components, templates, DI, routing, forms, and strong tooling—remain recognizable from Angular 2 onward.

The biggest evolution happened in **developer ergonomics and reactivity**:

```text
NgModule-first
    ↓
Standalone-first

structural directive syntax
    ↓
built-in template control flow

Zone.js-driven defaults
    ↓
zoneless defaults

plain fields + RxJS for almost everything
    ↓
Signals for synchronous reactive state + RxJS for streams

Karma default
    ↓
Vitest default

traditional forms only
    ↓
Signal Forms + Reactive Forms + Template-driven Forms
```

That is the most useful way for a learner to understand Angular's version history: not as 20 isolated release notes, but as a sequence of architectural simplifications that lead to modern Angular.
