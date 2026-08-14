# Laravel Master Handbook

> **A beginner-to-advanced, scenario-driven learning guide for Laravel 13.x**  
> Baseline verified against **Laravel Framework 13.25.0** in August 2026. Laravel 13 supports PHP 8.3–8.5, receives bug fixes through Q3 2027, and security fixes through March 17, 2028.  
> Core concepts are also applicable to Laravel 12.x, but Chapter 61 and other explicitly marked Laravel 13 features require a 13.x application. Always use the newest compatible patch release and read the upgrade guide before changing major versions.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Laravel Is](#2-what-laravel-is)
3. [Prerequisites](#3-prerequisites)
4. [Web Fundamentals You Must Understand](#4-web-fundamentals-you-must-understand)
5. [Installation and First Project](#5-installation-and-first-project)
6. [Laravel Directory Structure](#6-laravel-directory-structure)
7. [Configuration and Environment](#7-configuration-and-environment)
8. [Request Lifecycle](#8-request-lifecycle)
9. [Routing](#9-routing)
10. [Controllers](#10-controllers)
11. [Requests and Responses](#11-requests-and-responses)
12. [Middleware](#12-middleware)
13. [Blade Templates](#13-blade-templates)
14. [Forms, CSRF, and Method Spoofing](#14-forms-csrf-and-method-spoofing)
15. [Validation](#15-validation)
16. [Sessions, Cookies, and Flash Data](#16-sessions-cookies-and-flash-data)
17. [Service Container and Dependency Injection](#17-service-container-and-dependency-injection)
18. [Service Providers](#18-service-providers)
19. [Facades, Contracts, and Helpers](#19-facades-contracts-and-helpers)
20. [Artisan Console](#20-artisan-console)
21. [Database Fundamentals](#21-database-fundamentals)
22. [Query Builder](#22-query-builder)
23. [Migrations](#23-migrations)
24. [Seeders and Factories](#24-seeders-and-factories)
25. [Eloquent ORM](#25-eloquent-orm)
26. [Eloquent Relationships](#26-eloquent-relationships)
27. [Advanced Eloquent](#27-advanced-eloquent)
28. [Transactions, Locking, and Data Integrity](#28-transactions-locking-and-data-integrity)
29. [Pagination](#29-pagination)
30. [Authentication](#30-authentication)
31. [Authorization: Gates and Policies](#31-authorization-gates-and-policies)
32. [Security Features](#32-security-features)
33. [Building APIs](#33-building-apis)
34. [API Authentication: Sanctum and Passport](#34-api-authentication-sanctum-and-passport)
35. [API Resources and JSON Responses](#35-api-resources-and-json-responses)
36. [Rate Limiting](#36-rate-limiting)
37. [Cache and Redis](#37-cache-and-redis)
38. [File Storage and Uploads](#38-file-storage-and-uploads)
39. [Mail](#39-mail)
40. [Notifications](#40-notifications)
41. [Events and Listeners](#41-events-and-listeners)
42. [Queues and Jobs](#42-queues-and-jobs)
43. [Task Scheduling](#43-task-scheduling)
44. [HTTP Client](#44-http-client)
45. [Broadcasting and Realtime Apps](#45-broadcasting-and-realtime-apps)
46. [Collections](#46-collections)
47. [Strings, Helpers, and Utility APIs](#47-strings-helpers-and-utility-apis)
48. [Concurrency, Processes, and Context](#48-concurrency-processes-and-context)
49. [Localization](#49-localization)
50. [Search](#50-search)
51. [Logging and Error Handling](#51-logging-and-error-handling)
52. [Testing](#52-testing)
53. [Browser Testing](#53-browser-testing)
54. [Mocking, Fakes, and Test Doubles](#54-mocking-fakes-and-test-doubles)
55. [Debugging and Observability](#55-debugging-and-observability)
56. [Performance and Scalability](#56-performance-and-scalability)
57. [Deployment](#57-deployment)
58. [Laravel Sail and Containers](#58-laravel-sail-and-containers)
59. [Official Laravel Packages](#59-official-laravel-packages)
60. [Package Development](#60-package-development)
61. [Laravel 13 AI SDK, MCP, and AI-Aware Development](#61-laravel-13-ai-sdk-mcp-and-ai-aware-development)
62. [Architecture and Clean Code](#62-architecture-and-clean-code)
63. [Design Patterns Commonly Used in Laravel](#63-design-patterns-commonly-used-in-laravel)
64. [Real-World Scenario: Blog](#64-real-world-scenario-blog)
65. [Real-World Scenario: E-Commerce Checkout](#65-real-world-scenario-e-commerce-checkout)
66. [Real-World Scenario: Invoice Approval Workflow](#66-real-world-scenario-invoice-approval-workflow)
67. [Real-World Scenario: SaaS Application](#67-real-world-scenario-saas-application)
68. [Real-World Scenario: Webhooks](#68-real-world-scenario-webhooks)
69. [Common Laravel Mistakes](#69-common-laravel-mistakes)
70. [Troubleshooting Guide](#70-troubleshooting-guide)
71. [Artisan and Developer Cheat Sheet](#71-artisan-and-developer-cheat-sheet)
72. [Laravel Interview Questions](#72-laravel-interview-questions)
73. [12-Week Learning Roadmap](#73-12-week-learning-roadmap)
74. [Project Ideas by Difficulty](#74-project-ideas-by-difficulty)
75. [Mastery Checklist](#75-mastery-checklist)
76. [Glossary](#76-glossary)
77. [Official References](#77-official-references)

---

# 1. How to Use This Handbook

This file is designed to work as both:

- a **learning path** for someone new to Laravel;
- a **reference handbook** for an experienced developer;
- a **revision file** before interviews;
- a **practical cookbook** when building real applications.

Do not try to memorize every method. Focus on understanding:

1. what problem a Laravel feature solves;
2. when you should use it;
3. where it belongs in an application;
4. how it interacts with other Laravel features;
5. what can go wrong if it is misused.

A productive order is:

`HTTP -> Routing -> Controllers -> Validation -> Database -> Eloquent -> Blade/API -> Authentication -> Authorization -> Queues -> Testing -> Deployment -> Architecture`

---

# 2. What Laravel Is

Laravel is a PHP web application framework. It gives you conventions and reusable building blocks for common web-development problems such as:

- routing URLs;
- handling HTTP requests and responses;
- database access;
- authentication;
- authorization;
- validation;
- background jobs;
- caching;
- mail;
- notifications;
- scheduled tasks;
- file storage;
- testing;
- realtime communication;
- API development.

Without a framework, you would repeatedly write plumbing code for all of these concerns.

## 2.1 Laravel's main philosophy

Laravel strongly favors:

- expressive code;
- convention over unnecessary configuration;
- dependency injection;
- testability;
- readable APIs;
- separation of responsibilities.

## 2.2 Laravel and MVC

Laravel applications often use **MVC**:

- **Model**: represents data and business-related persistence behavior.
- **View**: displays HTML/UI.
- **Controller**: coordinates a request and returns a response.

Example:

```text
GET /products/10
      |
      v
Route
      |
      v
ProductController@show
      |
      v
Product model -> database
      |
      v
Blade view / JSON response
```

MVC is useful, but Laravel is bigger than MVC. Modern Laravel applications also use services, jobs, events, listeners, policies, form requests, actions, DTOs, queues, and domain classes.

---

# 3. Prerequisites

Before trying to master Laravel, be comfortable with the following.

## 3.1 PHP fundamentals

You should know:

- variables and data types;
- arrays;
- loops;
- functions;
- namespaces;
- exceptions;
- classes and objects;
- inheritance;
- interfaces;
- traits;
- visibility (`public`, `protected`, `private`);
- constructors;
- static methods;
- anonymous functions;
- arrow functions;
- enums;
- attributes;
- type declarations;
- nullable and union types.

Example interface:

```php
interface PaymentGateway
{
    public function charge(int $amount): bool;
}
```

Laravel's service container becomes much easier to understand once interfaces and constructors are familiar.

## 3.2 Composer

Composer is PHP's dependency manager.

Important commands:

```bash
composer install
composer update
composer require vendor/package
composer remove vendor/package
composer dump-autoload
```

Understand the difference:

- `composer.json` describes required packages and constraints.
- `composer.lock` locks exact installed versions.
- `vendor/` contains installed Composer packages.

Do not normally commit `vendor/` to Git.

## 3.3 SQL and relational databases

Know:

```sql
SELECT
INSERT
UPDATE
DELETE
JOIN
GROUP BY
ORDER BY
INDEX
PRIMARY KEY
FOREIGN KEY
TRANSACTION
```

Laravel can hide much SQL behind Eloquent, but a developer who does not understand SQL will eventually create slow or incorrect queries.

## 3.4 HTML, CSS, and JavaScript

For server-rendered Laravel applications, understand HTML forms, input names, HTTP methods, DOM basics, and JavaScript requests.

For API-only Laravel applications, frontend knowledge is less critical initially, but understanding browser/server interaction remains essential.

---

# 4. Web Fundamentals You Must Understand

## 4.1 HTTP request

A browser may send:

```http
POST /orders HTTP/1.1
Content-Type: application/json
Authorization: Bearer token

{
  "product_id": 10,
  "quantity": 2
}
```

A request contains:

- method;
- URL;
- headers;
- query parameters;
- cookies;
- body.

## 4.2 HTTP response

A server might return:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 501,
  "status": "created"
}
```

## 4.3 Common HTTP methods

| Method | Typical purpose |
| --- | --- |
| GET | Read data |
| POST | Create or trigger operation |
| PUT | Replace a resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

## 4.4 Common status codes

| Code | Meaning |
| ---: | --- |
| 200 | Success |
| 201 | Created |
| 204 | Success, no body |
| 302 | Redirect |
| 400 | Bad request |
| 401 | Unauthenticated |
| 403 | Authenticated but forbidden |
| 404 | Not found |
| 409 | Conflict |
| 422 | Validation/business input error |
| 429 | Too many requests |
| 500 | Server error |

## 4.5 Stateless vs stateful

HTTP is inherently stateless. Applications create continuity using mechanisms such as:

- cookies;
- sessions;
- bearer tokens;
- database state.

---

# 5. Installation and First Project

Laravel 13 requires PHP 8.3 or newer and officially supports PHP through 8.5.

Typical prerequisites:

- PHP;
- Composer;
- Laravel installer or Composer;
- Node.js/npm when compiling frontend assets;
- database server if not using SQLite.

Confirm the tools before creating a project:

```bash
php -v
composer --version
node --version
npm --version
```

Install the Laravel installer if the `laravel` command is not already available:

```bash
composer global require laravel/installer
```

Create a project using the Laravel installer:

```bash
laravel new shop
cd shop
npm install
npm run build
composer run dev
```

Or with Composer:

```bash
composer create-project laravel/laravel shop
cd shop
php artisan serve
```

Then open the local development URL shown by the command.

Verify the installed framework and environment:

```bash
php artisan --version
composer show laravel/framework
php artisan about
php artisan test
```

For this handbook, `php artisan --version` should report Laravel Framework `13.x`. `composer show` displays the exact patch and dependency constraints; the test command should finish without failures in a new application. The installer may prompt for a starter kit, database, and testing framework, so actual generated files depend on those choices.

## 5.1 First useful command

```bash
php artisan about
```

This gives a quick overview of the application environment.

## 5.2 Project setup checklist

After creating a project:

```text
1. Configure .env
2. Generate APP_KEY if required
3. Configure database
4. Run migrations
5. Install/build frontend dependencies
6. Run tests
7. Start development server
```

---

# 6. Laravel Directory Structure

A Laravel application usually contains:

```text
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
vendor/
```

## 6.1 `app/`

Your application code lives here.

Common subdirectories include:

```text
app/
  Console/
  Exceptions/
  Http/
    Controllers/
    Middleware/
    Requests/
  Models/
  Providers/
```

Laravel creates some directories only when you generate the corresponding class.

## 6.2 `routes/`

Contains route definitions.

Typical files include:

- `web.php` for browser routes;
- console-related route definitions;
- API routes when configured for the application.

## 6.3 `database/`

Contains:

- migrations;
- factories;
- seeders.

## 6.4 `resources/`

Contains source assets and views, such as Blade templates and frontend source files.

## 6.5 `public/`

The web server document root should point here.

`public/index.php` is the HTTP entry point.

Never expose the whole Laravel project directory as the public web root.

## 6.6 `storage/`

Contains generated application files such as:

- logs;
- cached views;
- framework files;
- local application files.

The web server must be able to write to required storage paths.

## 6.7 `vendor/`

Composer dependencies.

Do not manually modify framework source in `vendor/`. Your changes will disappear after package updates.

---

# 7. Configuration and Environment

## 7.1 `.env`

Environment-specific values belong in `.env`.

Example:

```dotenv
APP_NAME="My Shop"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shop
DB_USERNAME=root
DB_PASSWORD=
```

## 7.2 Never commit secrets

Do not commit production `.env` files containing:

- database passwords;
- API keys;
- SMTP passwords;
- cloud credentials;
- encryption keys.

Commit `.env.example` with placeholder values instead.

## 7.3 Access configuration correctly

Prefer:

```php
config('app.name');
```

Do not scatter direct `env()` calls throughout application code.

Use `env()` primarily from configuration files.

Reason: production configuration caching can change how environment values are loaded.

## 7.4 Configuration cache

In production:

```bash
php artisan config:cache
```

Clear while troubleshooting:

```bash
php artisan config:clear
```

## 7.5 Environment-specific behavior

Example:

```php
if (app()->environment('local')) {
    // development-only behavior
}
```

Avoid putting important business rules behind environment checks unless genuinely necessary.

---

# 8. Request Lifecycle

Understanding the lifecycle removes much of Laravel's “magic”.

Simplified flow:

```text
Web server
   |
public/index.php
   |
Bootstrap application
   |
Service providers
   |
HTTP middleware
   |
Router
   |
Controller / route closure
   |
Response
   |
Middleware after-response logic
   |
Browser/client
```

## 8.1 Why this matters

Suppose authentication unexpectedly rejects a request.

Instead of guessing, trace the lifecycle:

1. Did the request match a route?
2. Which middleware ran?
3. Which guard was used?
4. Was the controller reached?
5. What response was returned?

This mental model makes debugging far easier.

---

# 9. Routing

Routes map incoming requests to application behavior.

## 9.1 Basic routes

```php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Hello Laravel';
});
```

## 9.2 Route to controller

```php
use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index']);
```

## 9.3 Route parameters

```php
Route::get('/users/{id}', function (string $id) {
    return "User {$id}";
});
```

Optional:

```php
Route::get('/reports/{year?}', function (?string $year = null) {
    // ...
});
```

## 9.4 Route model binding

Instead of manually querying:

```php
Route::get('/products/{product}', function (App\Models\Product $product) {
    return $product;
});
```

Laravel resolves the model from the parameter.

Controller example:

```php
public function show(Product $product)
{
    return view('products.show', compact('product'));
}
```

### Scenario

URL:

```text
/products/42
```

Laravel resolves product ID `42`. If no matching model exists, a 404 response is produced.

## 9.5 Custom route key

If URLs use slugs:

```php
public function getRouteKeyName(): string
{
    return 'slug';
}
```

Then:

```text
/products/macbook-pro
```

can resolve by slug.

## 9.6 Named routes

```php
Route::get('/dashboard', DashboardController::class)
    ->name('dashboard');
```

Generate URL:

```php
route('dashboard');
```

Named routes prevent hard-coded URL strings from spreading everywhere.

## 9.7 Route groups

```php
Route::middleware(['auth'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/users', [AdminUserController::class, 'index'])
            ->name('users.index');
    });
```

Route name:

```text
admin.users.index
```

## 9.8 Resource controllers

```php
Route::resource('products', ProductController::class);
```

Typical generated actions:

| HTTP | URI | Action |
| --- | --- | --- |
| GET | `/products` | index |
| GET | `/products/create` | create |
| POST | `/products` | store |
| GET | `/products/{product}` | show |
| GET | `/products/{product}/edit` | edit |
| PUT/PATCH | `/products/{product}` | update |
| DELETE | `/products/{product}` | destroy |

## 9.9 Inspect routes

```bash
php artisan route:list
```

Use this whenever you are unsure why a URL is not matching.

---

# 10. Controllers

Controllers keep route files small and organize request handling.

Generate:

```bash
php artisan make:controller ProductController
```

Resource controller:

```bash
php artisan make:controller ProductController --resource
```

Example:

```php
namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return view('products.index', [
            'products' => Product::latest()->paginate(20),
        ]);
    }
}
```

## 10.1 Keep controllers thin

Bad:

```text
Controller
  validates
  calculates tax
  writes 7 tables
  sends mail
  calls ERP
  generates PDF
  handles retry logic
  contains 400 lines
```

Better:

```text
Controller
  -> Form Request
  -> Application service/action
  -> Domain/business logic
  -> Job/event where appropriate
  -> Response
```

A controller should coordinate, not become your entire application.

## 10.2 Invokable controller

For one-action endpoints:

```bash
php artisan make:controller DownloadInvoiceController --invokable
```

```php
class DownloadInvoiceController
{
    public function __invoke(Invoice $invoice)
    {
        // ...
    }
}
```

Route:

```php
Route::get('/invoices/{invoice}/download', DownloadInvoiceController::class);
```

---

# 11. Requests and Responses

Laravel wraps HTTP input with `Illuminate\Http\Request`.

```php
use Illuminate\Http\Request;

public function store(Request $request)
{
    $name = $request->input('name');
    $email = $request->input('email');
}
```

## 11.1 Common request access

```php
$request->input('name');
$request->string('name');
$request->integer('quantity');
$request->boolean('active');
$request->query('page');
$request->file('invoice');
$request->has('discount');
$request->filled('email');
$request->only(['name', 'email']);
$request->except(['password']);
```

## 11.2 Responses

String:

```php
return 'OK';
```

JSON:

```php
return response()->json([
    'success' => true,
]);
```

View:

```php
return view('products.index', compact('products'));
```

Redirect:

```php
return redirect()->route('products.index');
```

Redirect with message:

```php
return redirect()
    ->route('products.index')
    ->with('success', 'Product created.');
```

Download:

```php
return response()->download($path);
```

## 11.3 Correct response codes matter

Creating an API resource:

```php
return response()->json($order, 201);
```

Deleting without response body:

```php
return response()->noContent();
```

---

# 12. Middleware

Middleware inspects or transforms requests before or after application logic.

Typical uses:

- authentication;
- authorization;
- rate limiting;
- localization;
- logging;
- tenant resolution;
- security headers.

Generate:

```bash
php artisan make:middleware EnsureUserIsAdmin
```

Example:

```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        abort_unless($request->user()?->is_admin, 403);

        return $next($request);
    }
}
```

## 12.1 Before middleware

```text
Request -> Middleware -> Controller
```

## 12.2 After middleware

A middleware can also inspect the response after downstream code runs.

## 12.3 Scenario: tenant selection

For a SaaS domain:

```text
acme.example.com
```

middleware may:

1. read the host;
2. find tenant `acme`;
3. ensure the tenant is active;
4. put tenant context into a service;
5. continue request handling.

Do not repeat this tenant-resolution logic in every controller.

## 12.4 Register and apply a middleware alias

In the current application skeleton, register custom aliases in `bootstrap/app.php`:

```php
use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Foundation\Configuration\Middleware;

->withMiddleware(function (Middleware $middleware): void {
    $middleware->alias([
        'admin' => EnsureUserIsAdmin::class,
    ]);
})
```

Then apply it to routes:

```php
Route::middleware(['auth', 'admin'])->group(function () {
    Route::resource('admin/products', AdminProductController::class);
});
```

The alias is configuration; the middleware's `handle()` method performs the check. A missing alias causes route compilation/resolution errors, while a failed check should return `403`.

---

# 13. Blade Templates

Blade is Laravel's server-side templating engine.

Example:

```blade
<h1>{{ $product->name }}</h1>
<p>₹{{ number_format($product->price, 2) }}</p>
```

Blade escapes `{{ }}` output by default.

## 13.1 Conditions

```blade
@if ($user->is_admin)
    <a href="/admin">Admin</a>
@elseif ($user->is_manager)
    <span>Manager</span>
@else
    <span>User</span>
@endif
```

## 13.2 Loops

```blade
@foreach ($products as $product)
    <div>{{ $product->name }}</div>
@endforeach
```

## 13.3 Layouts

```blade
{{-- resources/views/layouts/app.blade.php --}}
<html>
<body>
    @yield('content')
</body>
</html>
```

Child:

```blade
@extends('layouts.app')

@section('content')
    <h1>Products</h1>
@endsection
```

## 13.4 Components

```blade
<x-alert type="success">
    Saved successfully.
</x-alert>
```

Components are ideal for reusable UI pieces.

## 13.5 Raw output warning

```blade
{!! $html !!}
```

This disables escaping and may create XSS vulnerabilities if the content is untrusted.

Use raw output only when the HTML is trusted or sanitized.

---

## 13.6 Choosing a Laravel Frontend Architecture

Laravel supports several frontend styles. Learn Blade first so you understand Laravel's server-rendered model, then choose based on product needs.

### Option A: Blade

Best for:

- traditional business applications;
- content sites;
- forms and dashboards without heavy client state;
- teams wanting the simplest full-stack architecture.

Flow:

```text
Browser -> Laravel route/controller -> Blade HTML -> Browser
```

### Option B: Blade + Livewire

Best for:

- reactive forms;
- admin panels;
- filters/search tables;
- modal workflows;
- teams strongest in PHP rather than JavaScript SPA architecture.

Livewire lets server-side PHP components respond to browser interactions while providing a dynamic UI experience.

### Option C: Inertia + React/Vue/Svelte

Best for:

- highly interactive product UIs;
- teams already strong in a modern JS framework;
- SPA-like experience while keeping Laravel routes/controllers and one application repository.

Concept:

```text
Laravel route/controller
   -> Inertia response + props
   -> React/Vue/Svelte page
```

You generally do not need to build a separate REST API just so your own Inertia frontend can communicate with your Laravel backend.

### Option D: Laravel API + separate frontend/mobile app

Best for:

- multiple independent clients;
- public/partner API;
- mobile application;
- separately deployed frontend architecture.

Trade-off: you now own a formal API contract, authentication/CORS concerns, versioning, and potentially multiple repositories/deployments.

### Current Laravel starter-kit choices

Laravel 13 provides official starter-kit paths for React, Svelte, Vue, and Livewire. The JavaScript-framework kits use Inertia, while the Livewire kit keeps the frontend primarily PHP/server-driven. Current Laravel applications use Vite for frontend asset bundling.

### Decision table

| Need | Good starting choice |
| --- | --- |
| Simple CRUD/admin | Blade or Livewire |
| Dynamic Laravel-first UI | Livewire |
| React/Vue/Svelte team | Inertia |
| Mobile/public API | Laravel API + Sanctum/OAuth as needed |
| SEO/content-heavy site | Blade, Livewire, or SSR-capable approach |

Do not choose a SPA architecture only because it is fashionable. Pick the simplest architecture that satisfies the user experience and team capabilities.

### Vite

Typical commands:

```bash
npm install
npm run dev
npm run build
```

During development Vite provides a fast development asset pipeline. Production deployments should build versioned production assets.

---

# 14. Forms, CSRF, and Method Spoofing

## 14.1 CSRF

HTML form:

```blade
<form method="POST" action="{{ route('products.store') }}">
    @csrf

    <input name="name">
    <button type="submit">Save</button>
</form>
```

`@csrf` inserts a token used to protect browser sessions from cross-site request forgery.

## 14.2 PUT/PATCH/DELETE forms

HTML forms natively support GET and POST. Laravel uses method spoofing:

```blade
<form method="POST" action="{{ route('products.update', $product) }}">
    @csrf
    @method('PUT')

    ...
</form>
```

Delete:

```blade
@method('DELETE')
```

---

# 15. Validation

Never trust client input.

Simple controller validation:

```php
$validated = $request->validate([
    'name' => ['required', 'string', 'max:255'],
    'email' => ['required', 'email'],
    'quantity' => ['required', 'integer', 'min:1'],
]);
```

## 15.1 Form Requests

For non-trivial endpoints, create a dedicated request:

```bash
php artisan make:request StoreProductRequest
```

```php
use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('create', Product::class) ?? false;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'sku' => ['required', 'string', 'max:50', 'unique:products,sku'],
            'price' => ['required', 'numeric', 'min:0'],
        ];
    }
}
```

Controller:

```php
public function store(StoreProductRequest $request)
{
    $product = Product::create($request->validated());

    return redirect()
        ->route('products.show', $product)
        ->with('success', 'Product created.');
}
```

`authorize()` runs before the controller. Returning `false` produces a `403`; validation failure redirects browser requests back with errors (or returns `422` JSON when the client expects JSON). `validated()` returns only fields that passed the declared rules.

## 15.2 Validation is not authorization

Validation answers:

> Is the data structurally acceptable?

Authorization answers:

> Is this user allowed to perform this action?

They are different concerns.

## 15.3 Business validation

Suppose a transfer is structurally valid but account balance is insufficient.

Input validation:

```text
amount is numeric, positive, required
```

Business rule:

```text
amount <= available account balance
```

The latter belongs in business/domain logic, not necessarily a generic form rule.

## 15.4 Custom validation rules

Generate:

```bash
php artisan make:rule ValidPurchaseOrder
```

Use custom rules when a validation concept is reusable or complex.

---

# 16. Sessions, Cookies, and Flash Data

Sessions keep server-side state across browser requests.

```php
session(['cart_id' => 123]);
```

Retrieve:

```php
$cartId = session('cart_id');
```

Via request:

```php
$request->session()->put('cart_id', 123);
```

## 16.1 Flash data

Useful for one-time messages after a redirect:

```php
return redirect()
    ->route('products.index')
    ->with('success', 'Product created.');
```

Blade:

```blade
@if (session('success'))
    <div>{{ session('success') }}</div>
@endif
```

## 16.2 Do not put huge objects in session

Prefer storing identifiers rather than entire datasets.

Bad:

```text
session contains 5,000 product records
```

Better:

```text
session contains cart ID -> cart items stored in database/cache
```

---

# 17. Service Container and Dependency Injection

The service container resolves classes and their dependencies.

Example interface:

```php
interface PaymentGateway
{
    public function charge(int $amount): PaymentResult;
}
```

Implementation:

```php
class StripePaymentGateway implements PaymentGateway
{
    public function charge(int $amount): PaymentResult
    {
        // ...
    }
}
```

Controller:

```php
class CheckoutController
{
    public function __construct(
        private PaymentGateway $gateway
    ) {}
}
```

Container binding:

```php
use App\Contracts\PaymentGateway;
use App\Services\StripePaymentGateway;

$this->app->bind(PaymentGateway::class, StripePaymentGateway::class);
```

Laravel can now inject the implementation automatically.

## 17.1 Why DI matters

Without DI:

```php
$gateway = new StripePaymentGateway();
```

The caller is tightly coupled to Stripe.

With DI:

```php
public function __construct(PaymentGateway $gateway)
```

You can swap Stripe with another provider or a test fake.

## 17.2 Automatic resolution

Concrete classes with resolvable constructor dependencies often require no manual binding.

```php
class InvoiceService
{
    public function __construct(TaxCalculator $taxCalculator) {}
}
```

Laravel can resolve both automatically if no interface choice is required.

## 17.3 Singleton binding

```php
$this->app->singleton(ExchangeRateClient::class, function ($app) {
    return new ExchangeRateClient(config('services.fx.key'));
});
```

Use a singleton when one shared instance per application lifecycle is appropriate.

---

# 18. Service Providers

Service providers are central bootstrapping locations.

Common responsibilities:

- container bindings;
- application boot logic;
- registering package services;
- defining macros;
- event configuration when appropriate.

Simplified:

```php
class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            PaymentGateway::class,
            StripePaymentGateway::class
        );
    }

    public function boot(): void
    {
        // Work that should happen after services are registered.
    }
}
```

Rule of thumb:

- `register()` -> register bindings/services.
- `boot()` -> use already-registered services to configure behavior.

---

# 19. Facades, Contracts, and Helpers

Laravel offers several ways to access framework services.

Facade:

```php
Cache::get('key');
```

Helper:

```php
cache('key');
```

Dependency injection:

```php
public function __construct(CacheRepository $cache) {}
```

## 19.1 Facades are not ordinary static classes

Laravel facades provide a static-looking interface to services managed by the container.

## 19.2 When to use what

Use facades when:

- code is short and framework-oriented;
- testing remains simple;
- dependency is obvious.

Use explicit constructor injection when:

- dependency is core to the class;
- you want strong architectural boundaries;
- implementations may be swapped;
- you want dependencies visible in the constructor.

Avoid dogma. Consistency and clarity are more important than blindly banning facades.

---

# 20. Artisan Console

Artisan is Laravel's command-line interface.

List commands:

```bash
php artisan list
```

Help:

```bash
php artisan help migrate
```

Generate code:

```bash
php artisan make:model Product -mfc
```

Common flags may generate related files such as migration, factory, and controller.

## 20.1 Custom command

```bash
php artisan make:command SyncExchangeRates
```

Example scenario:

```text
Every hour:
  scheduled task
     -> artisan command
        -> currency provider
        -> store rates
```

Keep commands thin when possible; call reusable services rather than embedding all business logic inside the command.

---

# 21. Database Fundamentals

Laravel supports relational databases through its database layer and can also integrate with other data stores.

Database configuration generally lives in:

```text
config/database.php
```

with credentials supplied through environment variables.

## 21.1 Connection use

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')->get();
```

## 21.2 Raw SQL

```php
$rows = DB::select(
    'select * from users where status = ?',
    ['active']
);
```

Prefer parameter binding instead of string concatenation.

Bad:

```php
DB::select("select * from users where email = '$email'");
```

This can introduce SQL injection.

---

# 22. Query Builder

Query Builder provides fluent database queries without requiring Eloquent models.

```php
$orders = DB::table('orders')
    ->where('status', 'pending')
    ->where('total', '>', 1000)
    ->orderByDesc('created_at')
    ->get();
```

## 22.1 Select columns

```php
DB::table('users')
    ->select(['id', 'name', 'email'])
    ->get();
```

## 22.2 Joins

```php
DB::table('orders')
    ->join('users', 'users.id', '=', 'orders.user_id')
    ->select('orders.*', 'users.name as customer_name')
    ->get();
```

## 22.3 Aggregates

```php
$total = DB::table('orders')->sum('total');
$count = DB::table('orders')->where('status', 'pending')->count();
```

## 22.4 Inserts

```php
DB::table('products')->insert([
    'name' => 'Keyboard',
    'price' => 2500,
]);
```

## 22.5 Updates

```php
DB::table('products')
    ->where('id', 10)
    ->update(['price' => 2300]);
```

## 22.6 Deletes

```php
DB::table('products')->where('id', 10)->delete();
```

## 22.7 Query Builder vs Eloquent

The most common return contracts are:

| Operation | Input | Return value |
| --- | --- | --- |
| `get()` | Built query | Collection of result objects |
| `first()` | Built query | First result object or `null` |
| `firstOrFail()` | Built query | First result or a not-found exception |
| `value('column')` | Column name | Single scalar value or `null` |
| `exists()` | Built query | Boolean |
| `insert([...])` | One row or multiple rows | Boolean success indicator |
| `insertGetId([...])` | One row | Inserted primary-key value |
| `update([...])` | Changed columns | Number of affected rows |
| `delete()` | Built query | Number of affected rows |

Always include a deliberate `where` clause before an update or delete unless changing every row is truly intended. Check affected-row counts when “record did not exist” must be distinguished from success.

Use Eloquent when:

- records represent domain entities;
- relationships matter;
- you want model scopes/casts/events.

Use Query Builder when:

- performing reports;
- doing large aggregate queries;
- the result is not naturally an entity;
- you need direct control and simpler SQL-like behavior.

Both are valid tools.

---

# 23. Migrations

Migrations are version control for database schema.

Generate:

```bash
php artisan make:migration create_products_table
```

Example:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku')->unique();
            $table->string('name');
            $table->decimal('price', 12, 2);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
```

Run:

```bash
php artisan migrate
```

Rollback latest batch:

```bash
php artisan migrate:rollback
```

Rebuild development database:

```bash
php artisan migrate:fresh --seed
```

**Danger:** `migrate:fresh` drops tables. Never run destructive database commands against production casually.

## 23.1 Foreign keys

```php
$table->foreignId('user_id')
    ->constrained()
    ->cascadeOnDelete();
```

Choose delete behavior based on business meaning.

Examples:

- order items may be deleted with an order;
- invoices may need to remain for audit even if a user is deactivated;
- historical financial data usually should not disappear because a parent account was removed.

## 23.2 Indexes

```php
$table->index('status');
$table->unique('email');
$table->index(['company_id', 'created_at']);
```

Indexes improve reads but cost storage and write overhead.

Do not add indexes blindly. Index columns used frequently in filters, joins, ordering, or uniqueness checks, and validate with query plans when performance matters.

## 23.3 Schema changes in production

Be careful with:

- dropping columns;
- changing large tables;
- adding non-null columns without defaults;
- long table locks;
- renaming columns used by running code.

For zero-downtime systems, deploy backward-compatible schema changes in stages.

Example:

```text
Deploy 1: add nullable new column
Deploy 2: write to old + new column
Backfill data
Deploy 3: read from new column
Deploy 4: remove old column later
```

---

# 24. Seeders and Factories

## 24.1 Seeders

Seeders create known data.

```bash
php artisan make:seeder RoleSeeder
```

```php
class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'user']);
    }
}
```

Run:

```bash
php artisan db:seed
```

## 24.2 Factories

Factories generate realistic test/development data.

```php
User::factory()->count(50)->create();
```

Factory states:

```php
User::factory()->admin()->create();
```

Factories are especially useful in tests because they let each test build only the data it needs.

---

# 25. Eloquent ORM

Eloquent is Laravel's Active Record ORM.

A model usually maps to a table:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'sku',
        'name',
        'price',
        'active',
    ];
}
```

## 25.1 Create

```php
$product = Product::create([
    'sku' => 'KB-001',
    'name' => 'Mechanical Keyboard',
    'price' => 2999,
    'active' => true,
]);
```

## 25.2 Read

```php
$product = Product::find(10);
```

Throw 404-style model exception if missing:

```php
$product = Product::findOrFail(10);
```

Find using a condition:

```php
$product = Product::where('sku', 'KB-001')->first();
```

## 25.3 Update

```php
$product->update([
    'price' => 2799,
]);
```

## 25.4 Delete

```php
$product->delete();
```

## 25.5 Mass assignment

Laravel protects against accidentally assigning sensitive fields.

```php
protected $fillable = ['name', 'email'];
```

Never blindly do this with untrusted input:

```php
User::create($request->all());
```

Imagine a submitted payload contains:

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "is_admin": true
}
```

Use validated/allowed fields instead.

## 25.6 Attribute casting

```php
protected function casts(): array
{
    return [
        'active' => 'boolean',
        'published_at' => 'datetime',
        'settings' => 'array',
        'price' => 'decimal:2',
    ];
}
```

Casts let application code work with meaningful PHP values instead of raw database strings.

## 25.7 Soft deletes

```php
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
}
```

Migration:

```php
$table->softDeletes();
```

Then delete sets `deleted_at` instead of physically removing the row.

Query deleted rows:

```php
Product::withTrashed()->get();
Product::onlyTrashed()->get();
```

Restore:

```php
$product->restore();
```

Use soft deletes when restoration/audit matters, but do not treat them as a replacement for a proper audit trail.

---

# 26. Eloquent Relationships

Relationships are among Laravel's most important features.

## 26.1 One-to-one

Example: user has one profile.

```php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
```

```php
$user->profile;
```

## 26.2 One-to-many

User has many orders:

```php
class User extends Model
{
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
```

Order belongs to user:

```php
class Order extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Usage:

```php
$user->orders;
$order->user;
```

## 26.3 Many-to-many

Users and roles:

```php
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

Attach:

```php
$user->roles()->attach($roleId);
```

Detach:

```php
$user->roles()->detach($roleId);
```

Synchronize exactly:

```php
$user->roles()->sync([1, 2, 5]);
```

## 26.4 Pivot data

Suppose `order_product` stores quantity and price:

```php
return $this->belongsToMany(Product::class)
    ->withPivot(['quantity', 'unit_price'])
    ->withTimestamps();
```

Access:

```php
$product->pivot->quantity;
```

## 26.5 Has-many-through

Useful when A reaches C through B.

Conceptual example:

```text
Country -> Users -> Posts
```

A country may access posts through its users.

## 26.6 Polymorphic relationships

Suppose comments can belong to both posts and videos:

```text
comments
  id
  body
  commentable_id
  commentable_type
```

Then one comment system can support multiple model types.

Use polymorphism when the behavior is genuinely shared. Avoid it when different resource types have very different rules and lifecycle requirements.

## 26.7 Eager loading and the N+1 problem

Bad:

```php
$orders = Order::all();

foreach ($orders as $order) {
    echo $order->user->name;
}
```

This may execute:

```text
1 query for orders
+ 1 query per order for user
```

Better:

```php
$orders = Order::with('user')->get();
```

Nested:

```php
Order::with(['user', 'items.product'])->get();
```

## 26.8 Constrained eager loading

```php
User::with([
    'orders' => fn ($query) => $query->where('status', 'paid')
])->get();
```

## 26.9 Relationship existence

```php
User::has('orders')->get();
```

```php
User::whereHas('orders', function ($query) {
    $query->where('status', 'overdue');
})->get();
```

---

# 27. Advanced Eloquent

## 27.1 Local scopes

Use scopes for reusable query intent.

```php
public function scopeActive($query)
{
    return $query->where('active', true);
}
```

Usage:

```php
Product::active()->get();
```

Scenario:

Instead of repeating:

```php
->where('status', 'approved')
->whereNull('cancelled_at')
```

throughout 15 controllers, create a meaningful scope such as `approved()`.

## 27.2 Global scopes

Global scopes automatically apply conditions to all queries.

Tenant filtering is a common example, but this is powerful and therefore risky.

Ask:

- Will background jobs have tenant context?
- Will admin reports need to bypass the scope?
- Could data become silently invisible?

## 27.3 Accessors and mutators

Use these to transform model values.

Conceptual example:

```php
protected function name(): Attribute
{
    return Attribute::make(
        get: fn (string $value) => ucfirst($value),
        set: fn (string $value) => trim($value),
    );
}
```

Do not hide expensive database/API calls inside accessors. Accessors should remain predictable.

## 27.4 Custom casts

Useful for domain-specific value objects such as:

- money;
- address;
- encrypted structured settings;
- status objects.

## 27.5 Model events

Common lifecycle events include creating, created, updating, updated, deleting, deleted, etc.

Example use:

```text
When invoice becomes approved -> emit domain/application event
```

Avoid burying critical, surprising business workflows in many implicit model hooks. Explicit orchestration is often easier to understand.

## 27.6 Observers

Observers group model-event handlers.

```bash
php artisan make:observer ProductObserver --model=Product
```

Good uses:

- simple audit metadata;
- search index sync trigger;
- cleanup closely tied to a model lifecycle.

Be careful with:

- external API calls;
- complex financial logic;
- long-running work.

Those often belong in services/jobs/events instead.

## 27.7 Chunking large datasets

Do not load millions of rows with:

```php
User::all();
```

Use chunked iteration:

```php
User::chunkById(1000, function ($users) {
    foreach ($users as $user) {
        // process
    }
});
```

For streaming-like use cases, also learn cursors and lazy collections.

---

# 28. Transactions, Locking, and Data Integrity

Transactions make multiple database changes succeed or fail together.

```php
DB::transaction(function () use ($order) {
    $order->markPaid();
    Inventory::decrementFor($order);
    Ledger::recordPayment($order);
});
```

If an exception escapes the transaction closure, Laravel rolls back the database transaction.

## 28.1 Scenario: bank transfer

Bad sequence without transaction:

```text
1. Debit account A succeeds
2. Application crashes
3. Credit account B never happens
```

With transaction:

```text
BEGIN
  debit A
  credit B
COMMIT
```

If any step fails:

```text
ROLLBACK
```

## 28.2 Row locking

When two requests may update the same inventory simultaneously, use database-level locking where appropriate.

Concept:

```php
$product = Product::whereKey($id)
    ->lockForUpdate()
    ->firstOrFail();
```

Perform inside a transaction.

## 28.3 Optimistic concurrency

For some systems, compare a version or updated timestamp before applying an update.

Example:

```text
User A opens invoice version 4
User B updates -> version 5
User A submits stale version 4
System rejects conflict rather than overwriting B
```

## 28.4 External side effects and transactions

A database transaction cannot roll back an already-sent email or external payment.

Bad:

```text
begin DB transaction
charge external card
DB insert fails
rollback DB
card charge still exists
```

Use patterns such as:

- idempotency keys;
- outbox/event records;
- jobs dispatched after commit;
- compensation/refund logic.

---

# 29. Pagination

Never return massive datasets when the UI needs only one page.

```php
$products = Product::latest()->paginate(20);
```

Blade:

```blade
{{ $products->links() }}
```

## 29.1 Simple pagination

When total count is unnecessary, simple pagination may avoid the full count query.

## 29.2 Cursor pagination

Cursor pagination is useful for very large or frequently changing ordered datasets.

Typical use:

```text
Activity feed
Audit log
Infinite scroll
```

Choose the pagination strategy based on UX and query characteristics.

---

# 30. Authentication

Authentication answers:

> Who is the user?

Laravel provides authentication infrastructure and official starter kits/packages for common flows.

Typical flows include:

- registration;
- login;
- logout;
- password reset;
- email verification;
- session authentication;
- API token authentication.

## 30.1 Protect a route

```php
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class);
});
```

## 30.2 Current user

```php
$user = $request->user();
```

or:

```php
$user = auth()->user();
```

## 30.3 Guards and providers

Conceptually:

- **guard** defines how a request is authenticated;
- **provider** defines how users are retrieved.

Example situations:

```text
Web browser -> session guard
API -> token authentication
Separate staff/customer user stores -> potentially separate providers/guards
```

Do not create multiple guards just because roles differ. Often one user system plus authorization policies/roles is simpler.

## 30.4 Authentication vs authorization

A logged-in user may still not be allowed to approve an invoice.

```text
Authentication: Shoeb is logged in.
Authorization: Is Shoeb allowed to approve Invoice #123?
```

Keep these concepts separate.

---

# 31. Authorization: Gates and Policies

## 31.1 Gates

Gates are useful for abilities that may not map neatly to a model.

Concept:

```php
Gate::define('view-admin-dashboard', function (User $user) {
    return $user->is_admin;
});
```

Check:

```php
Gate::authorize('view-admin-dashboard');
```

## 31.2 Policies

Policies organize authorization around models/resources.

Generate:

```bash
php artisan make:policy InvoicePolicy --model=Invoice
```

Example:

```php
public function approve(User $user, Invoice $invoice): bool
{
    return $user->company_id === $invoice->company_id
        && $user->can_approve_invoices;
}
```

Controller:

```php
$this->authorize('approve', $invoice);
```

## 31.3 Scenario: approval amount limit

Suppose:

```text
Manager: <= ₹100,000
Director: <= ₹1,000,000
Finance Controller: unlimited final approval
```

Do not rely only on hiding buttons in Blade.

Frontend/UI authorization improves user experience, but server-side authorization must enforce the rule.

---

# 32. Security Features

Security is not a single package. It is a collection of practices.

## 32.1 CSRF

Protect state-changing browser forms using Laravel's CSRF protection.

Laravel 13 formalizes this protection in the origin-aware `PreventRequestForgery` middleware while retaining token-based compatibility. Keep `@csrf` in browser forms, send the expected CSRF/XSRF token from same-origin JavaScript clients, and do not disable protection globally to “fix” a misconfigured domain or session cookie.

## 32.2 XSS

Blade escaped output:

```blade
{{ $comment }}
```

is safer than raw output:

```blade
{!! $comment !!}
```

## 32.3 SQL injection

Use Eloquent, Query Builder, or bound parameters instead of concatenating user input into SQL.

## 32.4 Password hashing

Never store plaintext passwords.

Use Laravel's hashing APIs.

```php
Hash::make($password);
```

Check:

```php
Hash::check($plain, $hash);
```

## 32.5 Encryption

Use Laravel encryption for application secrets/data that need reversible encryption.

Hashing and encryption are different:

```text
Hash: one-way -> password verification
Encryption: reversible with key -> protected data that must later be decrypted
```

## 32.6 Mass-assignment safety

Whitelist fields or deliberately control assignment.

## 32.7 File upload safety

Validate:

- size;
- MIME/content type where appropriate;
- extension;
- allowed categories;
- storage location.

Do not trust the original filename.

Never store untrusted executable files inside a publicly executable directory.

## 32.8 Authorization every time

Do not assume ownership because a URL contains an ID.

Bad:

```php
Invoice::findOrFail($request->invoice_id)->delete();
```

Better:

```php
$invoice = Invoice::findOrFail($request->invoice_id);
$this->authorize('delete', $invoice);
$invoice->delete();
```

## 32.9 Sensitive logging

Do not log:

- passwords;
- access tokens;
- card numbers;
- private keys;
- sensitive personal information unnecessarily.

## 32.10 Production debug mode

Never expose verbose debug pages to production users.

Production should use:

```dotenv
APP_ENV=production
APP_DEBUG=false
```

---

# 33. Building APIs

A clean API separates transport concerns from business logic.

Example endpoint:

```php
Route::get('/api/products/{product}', [ProductApiController::class, 'show']);
```

Controller:

```php
public function show(Product $product)
{
    return new ProductResource($product);
}
```

## 33.1 Good REST-style resource design

Prefer nouns:

```text
GET    /api/orders
POST   /api/orders
GET    /api/orders/123
PATCH  /api/orders/123
DELETE /api/orders/123
```

Instead of RPC-like endpoints for everything:

```text
/api/getOrders
/api/createOrder
/api/updateOrder
```

Actions that do not fit CRUD can be explicit:

```text
POST /api/invoices/123/approve
POST /api/orders/123/cancel
```

## 33.2 Consistent JSON errors

Define a consistent shape.

Example:

```json
{
  "message": "Invoice cannot be approved",
  "code": "INVOICE_INVALID_STATE",
  "errors": {}
}
```

## 33.3 API versioning

Possible strategy:

```text
/api/v1/orders
/api/v2/orders
```

Do not version prematurely, but do have a plan for breaking external clients.

## 33.4 Idempotency

For payment/order creation endpoints, duplicate client retries can be dangerous.

Example:

```text
POST payment request
network timeout
client does not know if payment succeeded
client retries
```

Use an idempotency key so the same logical request is processed once.

---

# 34. API Authentication: Sanctum and Passport

## 34.1 Sanctum

Sanctum is commonly used for:

- SPA authentication;
- first-party APIs;
- simple personal access tokens;
- mobile/API token use cases.

Install the default API stack in a new application with:

```bash
php artisan install:api
```

For first-party SPA authentication, Sanctum uses the normal session cookie and CSRF protection rather than placing a bearer token in browser storage. For personal access tokens, send the token in the `Authorization: Bearer ...` header and grant only required abilities.

## 34.2 Passport

Passport provides OAuth2 server capabilities for scenarios requiring OAuth2 flows and third-party delegated authorization.

When OAuth2 is truly required, the installer can configure Passport:

```bash
php artisan install:api --passport
```

## 34.3 Choosing

Typical rule of thumb:

```text
First-party SPA/mobile/simple token API -> Sanctum
Need full OAuth2 authorization server -> Passport
```

Do not choose Passport merely because it sounds more “enterprise”. Use the simplest security model that correctly solves the problem.

## 34.4 Token scopes/abilities

A token should receive only required permissions.

Example:

```text
invoice:read
invoice:approve
vendor:read
```

Avoid issuing all-powerful tokens to every integration.

---

# 35. API Resources and JSON Responses

API Resources transform models into stable JSON representations.

Generate:

```bash
php artisan make:resource ProductResource
```

Example:

```php
class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'name' => $this->name,
            'price' => (string) $this->price,
            'available' => $this->stock > 0,
        ];
    }
}
```

## 35.1 Why not return models directly everywhere?

Direct model serialization can accidentally expose:

- internal fields;
- foreign keys;
- timestamps clients do not need;
- future schema changes.

Resources create a deliberate API contract.

## 35.2 Resource collections

```php
return ProductResource::collection(
    Product::paginate(20)
);
```

## 35.3 Conditional relationships

Only include relationships when loaded, preventing accidental extra queries and keeping representations intentional.

---

# 36. Rate Limiting

Rate limiting protects endpoints from abuse or accidental overload.

Examples:

- login attempts;
- OTP requests;
- public APIs;
- expensive report generation;
- webhook endpoints.

Concept:

```text
Allow 60 requests/minute/user
```

Return status `429 Too Many Requests` when limits are exceeded.

Rate-limit by the right identity:

- IP for anonymous clients;
- authenticated user ID;
- tenant;
- API token;
- a combination when needed.

Define a named limiter in a service provider and apply it to the route:

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

RateLimiter::for('reports', function (Request $request) {
    $identity = $request->user()?->id ?: $request->ip();

    return Limit::perMinute(10)->by((string) $identity);
});
```

```php
Route::post('/reports', GenerateReportController::class)
    ->middleware(['auth', 'throttle:reports']);
```

The limiter returns a `Limit` policy; the route returns `429` after that identity exhausts it. In a tenant system, include the tenant ID when the limit is tenant-scoped.

---

# 37. Cache and Redis

Caching stores expensive results temporarily.

## 37.1 Basic cache

```php
$value = Cache::get('dashboard.total');
```

Store:

```php
Cache::put('dashboard.total', $total, now()->addMinutes(10));
```

Remember pattern:

```php
$total = Cache::remember(
    'dashboard.total',
    now()->addMinutes(10),
    fn () => Order::sum('total')
);
```

## 37.2 What to cache

Good candidates:

- expensive reports;
- reference/master data;
- external API responses;
- computed dashboards;
- configuration-like application data.

Poor candidates:

- highly volatile data requiring immediate accuracy unless invalidation is robust;
- secrets in inappropriate cache stores;
- enormous objects when a smaller representation works.

## 37.3 Cache invalidation

The hard question is often not “how do I cache?” but “when do I invalidate?”

Example:

```text
Cache: product:10
Product updated
-> forget product:10
```

## 37.4 Cache stampede

If 10,000 requests all see an expired expensive key and recompute it simultaneously, your database can be overwhelmed.

Learn techniques such as:

- atomic locks;
- stale-while-revalidate style behavior where suitable;
- randomized TTLs;
- background refresh.

## 37.5 Redis

Redis is often used for:

- cache;
- queues;
- session storage;
- locks;
- counters;
- pub/sub related infrastructure.

Redis is not automatically better for every piece of data. Use it for workloads that match its strengths.

---

# 38. File Storage and Uploads

Laravel's filesystem abstraction lets application code work with different disks.

Common disks:

- local filesystem;
- public local storage;
- S3-compatible object storage.

Store upload:

```php
$this->authorize('create', Invoice::class);

$validated = $request->validate([
    'invoice' => [
        'required',
        'file',
        'mimes:pdf',
        'mimetypes:application/pdf',
        'max:10240',
    ],
]);

$path = $validated['invoice']->store('invoices', 'local');
```

Specific disk:

```php
$path = $request->file('invoice')->store('invoices', 's3');
```

`store()` returns the relative path on the selected disk. Save that path plus trusted metadata in the database; do not treat it as a public URL.

## 38.1 Validate before storing

```php
$request->validate([
    'invoice' => [
        'required',
        'file',
        'mimes:pdf,jpg,jpeg,png',
        'max:10240',
    ],
]);
```

## 38.2 Filename strategy

Do not rely on original filenames as unique IDs.

Better:

```text
UUID/random storage key
+ store original filename separately as metadata
```

## 38.3 Public vs private files

Public:

```text
product thumbnails
public brochures
```

Private:

```text
employee documents
invoices
contracts
KYC documents
```

Private files should be served through authorization-aware download routes or signed object-storage URLs when appropriate.

```php
use Illuminate\Support\Facades\Storage;

public function download(Invoice $invoice)
{
    $this->authorize('view', $invoice);

    abort_unless(Storage::disk('local')->exists($invoice->file_path), 404);

    return Storage::disk('local')->download(
        $invoice->file_path,
        "invoice-{$invoice->id}.pdf"
    );
}
```

For higher-risk files, store privately, scan before use, restrict size and content type, and never execute uploaded content. `mimes` inspects the detected file type rather than trusting only the client-provided extension; `mimetypes` adds an explicit MIME requirement.

## 38.4 Storage link

For local public storage, Laravel commonly uses:

```bash
php artisan storage:link
```

---

# 39. Mail

Laravel provides a mail abstraction for sending application email.

Generate mailable:

```bash
php artisan make:mail InvoiceApproved
```

Typical call:

```php
Mail::to($user->email)->send(
    new InvoiceApproved($invoice)
);
```

For non-trivial production mail, queue it:

```php
Mail::to($user->email)->queue(
    new InvoiceApproved($invoice)
);
```

## 39.1 Why queue mail?

Without queue:

```text
User clicks Approve
-> app waits for SMTP
-> 2.5 seconds later response
```

With queue:

```text
User clicks Approve
-> DB update
-> queue mail job
-> immediate response
-> worker sends mail
```

## 39.2 Failure strategy

Email delivery can fail. Design around that fact:

- retries;
- failed jobs;
- observability;
- idempotency if messages trigger downstream actions.

---

# 40. Notifications

Notifications provide one abstraction for communication channels such as:

- mail;
- database;
- broadcast;
- custom integrations.

Generate:

```bash
php artisan make:notification InvoiceRequiresApproval
```

Send:

```php
$user->notify(new InvoiceRequiresApproval($invoice));
```

## 40.1 Mail vs notification

Use a Mailable when email itself is the primary concept.

Use a Notification when the same application event may be delivered through multiple channels.

Example:

```text
Invoice approved
  -> email
  -> in-app notification
  -> realtime browser notification
```

---

# 41. Events and Listeners

Events decouple “something happened” from “what should react”.

Example:

```text
Event: InvoiceApproved
Listeners:
  -> SendApprovalEmail
  -> UpdateAnalytics
  -> NotifyERP
```

Dispatch:

```php
event(new InvoiceApproved($invoice));
```

## 41.1 Benefits

Without events:

```php
approveInvoice();
sendMail();
updateDashboard();
callERP();
writeAudit();
```

Everything becomes tightly coupled.

With events, independent reactions can evolve separately.

## 41.2 Do not overuse events

If the next step is mandatory to complete the operation correctly, making it an invisible event listener can reduce clarity.

Use events for meaningful decoupling, not as a replacement for normal function calls.

---

# 42. Queues and Jobs

Queues move work outside the current request.

Great queue candidates:

- email;
- PDF generation;
- OCR processing;
- imports;
- exports;
- image resizing;
- ERP synchronization;
- webhook delivery;
- AI processing;
- large reports.

Generate:

```bash
php artisan make:job ProcessInvoiceOcr
```

Dispatch:

```php
ProcessInvoiceOcr::dispatch($invoice->id);
```

Worker:

```bash
php artisan queue:work
```

## 42.1 Job should be idempotent where possible

Workers can retry failed jobs.

Bad:

```text
Retry creates duplicate ERP journal
```

Better:

```text
Job checks external/reference ID
If already posted -> stop safely
Else -> post once
```

## 42.2 Retry and backoff

External APIs may fail temporarily. Configure attempts and retry delays according to the failure type.

Do not endlessly retry permanent errors such as invalid credentials or invalid business data.

## 42.3 Failed jobs

Monitor failed jobs. A queue is not reliable simply because a job was dispatched.

Operationally, you need to know:

```text
Was it queued?
Was it processed?
Did it fail?
How many times?
Can it be retried safely?
```

## 42.4 Job chains

Scenario:

```text
Parse invoice
 -> validate extracted data
 -> match purchase order
 -> create posting payload
```

A chain is useful when each step depends on the previous one succeeding.

## 42.5 Job batches

Scenario:

```text
Import 100,000 customers
split into 100 jobs
track batch progress
notify when complete
```

## 42.6 Dispatch after commit

If a job depends on database records created inside a transaction, ensure it is not processed before the transaction commits.

This avoids:

```text
job starts -> record not visible yet -> fails
```

Dispatch explicitly after commit when needed:

```php
ProcessInvoiceOcr::dispatch($invoice->id)->afterCommit();
```

Alternatively, set the queue connection's `after_commit` option when that behavior should be the default. Remember that “dispatched” means accepted for queueing; monitor workers and failed jobs to know whether it completed.

---

# 43. Task Scheduling

Laravel's scheduler keeps recurring application tasks in code.

Examples:

- daily reminders;
- hourly synchronization;
- cleanup tasks;
- report generation;
- expired-token cleanup.

Conceptual schedule:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('reports:daily')->dailyAt('07:00');
```

In current Laravel applications, application schedules commonly live in `routes/console.php`. Confirm registration and next run times with `php artisan schedule:list`; use `php artisan schedule:work` during local development.

Server cron normally invokes Laravel's scheduler every minute, and Laravel decides what is due.

## 43.1 Avoid overlaps

If a task may run longer than its interval, protect it against overlap.

Example:

```text
Sync starts at 10:00
still running 10:05
next scheduled sync starts
both modify same rows
```

Use non-overlap or distributed-lock mechanisms where required.

## 43.2 One server vs many servers

In horizontally scaled deployments, make sure a scheduled task intended to run once does not execute independently on every server.

---

# 44. HTTP Client

Laravel's HTTP client is useful for calling external services.

```php
$response = Http::withToken($token)
    ->timeout(10)
    ->get('https://api.example.com/orders/123');
```

Check:

```php
if ($response->successful()) {
    $data = $response->json();
}
```

## 44.1 Retry

Transient failures may be retried carefully.

```php
$response = Http::timeout(10)
    ->connectTimeout(3)
    ->retry(3, 200)
    ->get($url)
    ->throw();
```

This returns an `Illuminate\Http\Client\Response` on success and throws for terminal `4xx`/`5xx` responses. Retry only failures that may actually be transient; unsafe write requests also need provider-supported idempotency.

## 44.2 Never omit timeouts

An integration without sensible timeouts can tie up application workers when a remote service hangs.

## 44.3 Integration service pattern

Avoid placing API calls everywhere.

Better:

```text
ErpClient
  createJournal()
  getVendor()
  getPurchaseOrder()
```

Then controllers/jobs depend on `ErpClient`, not raw HTTP calls.

## 44.4 Test integrations with fakes

Do not call real payment/ERP APIs in normal automated tests.

Use Laravel HTTP fakes to control responses.

---

# 45. Broadcasting and Realtime Apps

Broadcasting lets server-side events reach connected clients.

Use cases:

- chat;
- live dashboards;
- progress updates;
- notifications;
- collaborative UI;
- job completion status.

Concept:

```text
Laravel event
  -> broadcaster / realtime server
  -> WebSocket channel
  -> browser subscribed through Echo
```

Laravel Reverb is Laravel's first-party realtime/WebSocket server option.

## 45.1 Public, private, presence channels

Conceptually:

- public: anyone can subscribe;
- private: subscription requires authorization;
- presence: private + knowledge of connected members.

Never put confidential data on publicly subscribable channels.

---

# 46. Collections

Laravel collections provide expressive operations over arrays/data sequences.

```php
$names = collect($users)
    ->filter(fn ($user) => $user['active'])
    ->map(fn ($user) => $user['name'])
    ->values();
```

Important methods to learn:

```text
map
filter
reject
first
firstWhere
pluck
keyBy
groupBy
sortBy
sortByDesc
sum
avg
reduce
contains
unique
flatten
flatMap
partition
chunk
```

## 46.1 Collection vs database query

Bad for huge table:

```php
User::all()->filter(...);
```

Better:

```php
User::where(...)->get();
```

Filter in the database whenever possible. Use collections after retrieving an appropriately sized dataset.

---

# 47. Strings, Helpers, and Utility APIs

Laravel includes utilities such as `Str` and `Arr`.

Examples:

```php
Str::slug('Laravel Master Handbook');
Str::uuid();
Str::limit($text, 100);
```

```php
Arr::get($data, 'customer.address.city');
```

Useful helpers include concepts such as:

```text
app()
auth()
config()
route()
url()
view()
response()
redirect()
collect()
now()
abort()
optional()/null-safe PHP alternatives depending on context
```

Helpers are convenient. Avoid hiding major business dependencies behind too many global helper calls.

---

# 48. Concurrency, Processes, and Context

Modern Laravel includes APIs for coordinating work beyond basic synchronous requests.

## 48.1 Concurrency

When several independent tasks can execute concurrently, total latency may be reduced.

Scenario:

```text
Dashboard needs:
  sales summary      700 ms
  inventory summary  500 ms
  vendor summary     600 ms
```

Sequential theoretical total:

```text
~1800 ms
```

Concurrent work can approach the slowest task plus overhead when infrastructure and workloads support it.

Do not parallelize tasks that depend on each other's result.

```php
use Illuminate\Support\Facades\Concurrency;

[$sales, $inventory] = Concurrency::run([
    fn () => Order::paid()->sum('total'),
    fn () => Product::sum('stock'),
]);
```

`run()` receives independent closures and returns results in the same order. Measure the serialization/process overhead; concurrency can be slower for tiny queries and does not make an already overloaded database faster.

## 48.2 Processes

Laravel can manage external processes where that is appropriate.

Use cases:

- invoke a controlled CLI utility;
- media conversion;
- document tooling.

Security rule: never concatenate untrusted input into shell commands.

```php
use Illuminate\Support\Facades\Process;

$result = Process::timeout(30)->run(['ffmpeg', '-version']);

if ($result->failed()) {
    throw new RuntimeException($result->errorOutput());
}

$versionOutput = $result->output();
```

The result exposes success/failure, exit code, standard output, and standard error. Array arguments avoid shell interpolation; still validate every user-influenced value and prefer purpose-built libraries when possible.

## 48.3 Context

Request/job context helps carry metadata useful for logging and tracing.

Examples:

```text
request ID
tenant ID
invoice ID
integration correlation ID
```

This is extremely useful when debugging distributed/background workflows.

```php
use Illuminate\Support\Facades\Context;
use Illuminate\Support\Str;

Context::add('request_id', (string) Str::uuid());
Context::add('tenant_id', $tenant->id);

$requestId = Context::get('request_id');
```

Context metadata can travel into supported queued work and logging. It improves correlation; it is not an authorization source, and sensitive payloads should not be copied into it.

---

# 49. Localization

Localization lets applications support multiple languages.

Typical usage:

```php
__('messages.welcome');
```

Language resources separate translated text from code.

## 49.1 What not to hard-code

Bad:

```php
return 'Your invoice is approved';
```

when the same user-facing message must support multiple languages.

Better:

```php
return __('invoice.approved');
```

## 49.2 Formatting

Translation is only part of localization. Also consider:

- dates;
- currency;
- number formats;
- pluralization;
- timezone.

Store timestamps in a consistent canonical form and format for the user at the boundaries.

---

# 50. Search

For database-like search, start simple:

```php
Product::where('name', 'like', "%{$term}%")->get();
```

For richer search requirements, Laravel Scout can synchronize searchable models to supported search engines/drivers.

Use cases:

- full-text product search;
- typo tolerance;
- relevance ranking;
- faceted search;
- large search indexes.

Do not introduce a dedicated search engine when normal indexed database queries already meet requirements.

---

# 51. Logging and Error Handling

## 51.1 Logging

```php
Log::info('Invoice approved', [
    'invoice_id' => $invoice->id,
    'user_id' => auth()->id(),
]);
```

Use structured context rather than building difficult-to-search strings.

Better:

```text
message: Invoice approved
invoice_id: 123
user_id: 45
```

than:

```text
Shoeb approved the invoice whose id is 123 ...
```

## 51.2 Log levels

Understand standard levels such as:

```text
debug
info
notice
warning
error
critical
alert
emergency
```

Choose levels consistently so alerting is meaningful.

## 51.3 Exceptions

Use exceptions for exceptional failure states.

Example custom exception:

```php
throw new InvoiceAlreadyPostedException($invoice->id);
```

Centralized rendering can convert domain/application exceptions to appropriate HTTP responses.

## 51.4 Do not swallow exceptions

Bad:

```php
try {
    $erp->post($invoice);
} catch (Throwable $e) {
    // nothing
}
```

Now the system silently lies about success.

At minimum, decide whether to:

- rethrow;
- retry;
- convert to domain error;
- log;
- mark operation failed.

---

# 52. Testing

A professional Laravel application should have automated tests.

Common categories:

- unit tests;
- feature/integration tests;
- HTTP tests;
- database tests;
- console tests;
- browser tests.

Run:

```bash
php artisan test
```

## 52.1 Unit test

Tests an isolated class.

Example:

```text
TaxCalculator
input: 1000, tax 18%
output: 180
```

No framework/database is required if the class is pure.

## 52.2 Feature test

Tests behavior through more of Laravel.

Example:

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Tests\TestCase;

class CreateProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_create_product(): void
    {
        $user = User::factory()->create();

        Gate::before(
            fn (User $authenticated) => $authenticated->is($user) ? true : null
        );

        $response = $this->actingAs($user)->post('/products', [
            'sku' => 'KB-001',
            'name' => 'Keyboard',
            'price' => 2500,
        ]);

        $response->assertRedirect();

        $this->assertDatabaseHas('products', [
            'sku' => 'KB-001',
        ]);
    }
}
```

The test-only `Gate::before()` grants this fixture user all abilities so the test reaches the creation path; production authorization still comes from real gates/policies. Add companion tests for redirect-to-login/`401`, `403`, and `422`; a happy-path test alone does not prove security.

## 52.3 Test behavior, not implementation trivia

Prefer:

```text
Given a manager with approval rights
When approving a pending invoice
Then invoice becomes approved
And approval audit is stored
```

over tests tightly coupled to every private method call.

## 52.4 Arrange, Act, Assert

A simple testing structure:

```text
Arrange -> create required state
Act     -> perform behavior
Assert  -> verify result
```

## 52.5 Important test scenarios

For each important endpoint test:

```text
happy path
invalid input
unauthenticated
unauthorized
missing resource
boundary values
conflict/state transition
external failure if integration exists
```

---

# 53. Browser Testing

Laravel Dusk provides browser-level testing.

Dusk is an optional development dependency, not part of every fresh application:

```bash
composer require laravel/dusk --dev
php artisan dusk:install
php artisan dusk
```

Use browser tests for flows where real browser behavior matters:

- JavaScript interaction;
- login flow;
- complex multi-step UI;
- modal/dropdown behavior;
- client-side integration.

Do not make every test a browser test. They are slower and more operationally expensive than feature/unit tests.

A good testing pyramid has many fast lower-level tests and fewer end-to-end tests.

---

# 54. Mocking, Fakes, and Test Doubles

Laravel provides convenient fakes for many framework systems.

Examples conceptually:

```text
Mail::fake()
Notification::fake()
Queue::fake()
Event::fake()
Storage::fake()
Http::fake()
```

## 54.1 Scenario: order test

You want to test:

```text
Creating an order dispatches confirmation mail
```

You do **not** want the automated test to send a real email.

Use a fake and assert the mail was queued/sent.

## 54.2 Mock only at meaningful boundaries

Good mock boundary:

```text
External payment gateway
```

Less useful:

```text
Mock every Eloquent method and every internal function
```

Over-mocking can create tests that pass even though the real system is broken.

---

# 55. Debugging and Observability

Useful debugging tools/techniques include:

- logs;
- exception stack traces;
- `php artisan route:list`;
- `php artisan about`;
- database query inspection;
- Laravel Telescope;
- Laravel Pulse;
- queue monitoring with Horizon for Redis queues;
- application performance monitoring in production.

## 55.1 Telescope

Great for development/debugging visibility into things such as:

- requests;
- queries;
- jobs;
- exceptions;
- cache activity;
- mail;
- events.

Treat Telescope access as sensitive.

## 55.2 Pulse

Pulse provides application performance/usage insight useful for understanding runtime behavior.

## 55.3 Correlation IDs

For multi-step workflows, assign a correlation/request ID.

Example log trail:

```text
correlation_id=abc123 OCR started
correlation_id=abc123 PO matched
correlation_id=abc123 ERP posting requested
correlation_id=abc123 ERP response=success
```

Without correlation, logs from concurrent requests become difficult to connect.

---

# 56. Performance and Scalability

Performance work should be measured, not guessed.

## 56.1 Common bottlenecks

- N+1 queries;
- missing indexes;
- selecting unnecessary columns;
- huge result sets;
- synchronous external API calls;
- slow filesystem/network operations;
- no caching for expensive repeated data;
- inefficient serialization;
- too much work in middleware;
- queue backlog;
- insufficient PHP workers;
- oversized sessions.

## 56.2 Optimize database first

Example:

Bad:

```php
Order::with('items.product', 'customer', 'approvals.user')->get();
```

for 2 million orders.

Better:

- filter;
- paginate;
- select only needed data;
- add appropriate indexes;
- precompute reports when suitable.

## 56.3 Cache carefully

Cache expensive stable data, but define invalidation.

## 56.4 Queues improve latency, not necessarily total work

Moving a PDF generation to queue makes the HTTP response faster, but CPU work still exists. Capacity planning must include workers.

## 56.5 Octane

Laravel Octane runs Laravel on long-lived application servers for higher throughput scenarios.

Important mental shift:

```text
Traditional PHP request:
boot application -> handle request -> process ends

Long-lived worker:
boot application once -> handle many requests
```

Therefore, avoid leaking request-specific mutable state into long-lived singleton/static objects.

## 56.6 Horizontal scaling

For multiple application servers:

Prefer shared/external services for state that must be consistent, such as:

- database;
- Redis sessions/cache;
- object storage;
- centralized queues.

Do not depend on a local file created on Server A being present on Server B.

---

# 57. Deployment

Production deployment is more than copying files.

Typical flow:

```text
1. Build/test code
2. Upload/release application
3. Install Composer dependencies without dev packages
4. Build frontend assets
5. Configure environment/secrets
6. Run safe migrations
7. Cache production configuration/routes/views where appropriate
8. Restart long-lived workers
9. Run health checks
10. Monitor errors
```

A conventional release command sequence may include:

```bash
composer install --no-dev --prefer-dist --optimize-autoloader
npm ci
npm run build
php artisan migrate --force
php artisan optimize
php artisan queue:restart
```

Run the test suite and build artifacts before sending traffic to the release. `--force` permits migrations in production; it is not a safety guarantee, so inspect each migration and take/back-test backups appropriate to the data risk. `queue:restart` asks workers to exit gracefully after their current job; a supervisor must start replacement processes.

Useful production optimization commands commonly include:

```bash
php artisan optimize
```

and specific caching commands where needed.

## 57.1 Web server root

Point the web server to:

```text
/path/to/project/public
```

not the repository root.

## 57.2 Permissions

The application needs appropriate write permission for runtime directories such as storage/cache paths.

Do not solve permission problems with dangerous world-writable settings if a narrower ownership/permission setup works.

## 57.3 Queue workers

Queue workers are long-running processes. Use a process supervisor/container orchestration platform so they restart when they crash or when servers reboot.

After deployment, workers must load new code. Restart them gracefully according to your deployment strategy.

## 57.4 Scheduler

Configure the server/orchestrator to invoke the Laravel scheduler as required.

## 57.5 Zero-downtime thinking

A safe deployment ensures old and new application versions can coexist briefly.

Avoid migrations that instantly break the previously running code.

## 57.6 Health endpoints

A useful production health strategy distinguishes:

- process is alive;
- application can serve traffic;
- critical dependencies are reachable.

Do not make every health check perform an expensive full dependency test every second.

## 57.7 Rollback

Know how to rollback application code.

Database rollback is harder because production migrations may have transformed real data. Prefer forward-fix/backward-compatible migration strategies.

---

# 58. Laravel Sail and Containers

Laravel Sail provides a Docker-based local development environment.

Why use containers locally?

- consistent dependencies;
- easier onboarding;
- isolated services;
- reproducible PHP/database/Redis versions.

Typical environment might include:

```text
PHP application
MySQL/PostgreSQL
Redis
Mail testing service
Search service
```

Containers do not remove the need to understand Linux, networking, volumes, ports, and permissions.

---

# 59. Official Laravel Packages

Important official packages/tools to recognize:

| Package/tool | Main purpose |
| --- | --- |
| Sanctum | SPA/simple API authentication |
| Passport | OAuth2 server |
| Horizon | Redis queue dashboard/monitoring |
| Telescope | Debugging/inspection |
| Pulse | Application performance insight |
| Scout | Search abstraction |
| Socialite | OAuth/social login |
| Cashier | Subscription billing integrations |
| Dusk | Browser testing |
| Octane | Long-lived high-performance application runtime |
| Pennant | Feature flags |
| Pint | Code formatting |
| Reverb | Realtime/WebSocket server |
| Sail | Docker development environment |
| Fortify | Backend authentication features |
| Precognition | Live validation-oriented workflows |
| AI SDK | Provider-agnostic agents, generation, embeddings, files, and vector stores |
| MCP | MCP servers, clients, tools, resources, and prompts |
| Boost | Version-aware context and agentic development guidance |

Do not install packages simply because they are official. Understand whether the application needs the capability.

---

# 60. Package Development

A Laravel package can provide reusable functionality across applications.

Typical package components:

- service provider;
- configuration;
- migrations;
- routes;
- commands;
- views;
- translations;
- facades/contracts;
- tests.

## 60.1 Good package candidate

```text
Company-wide audit framework used by 8 Laravel applications
```

## 60.2 Poor package candidate

```text
One 20-line helper used only inside one project
```

Package extraction creates maintenance overhead. Extract when reuse and boundaries justify it.

---

# 61. Laravel 13 AI SDK, MCP, and AI-Aware Development

Laravel 13 introduces first-party AI capabilities as a major framework area. Treat AI as another external/nondeterministic dependency, not magic.

The AI SDK and MCP support are first-party Composer packages; they are not automatically installed in every Laravel application.

## 61.1 AI SDK concepts

Install and publish the AI SDK, then run its conversation-storage migrations:

```bash
composer require laravel/ai
php artisan vendor:publish --provider="Laravel\Ai\AiServiceProvider"
php artisan migrate
```

Configure a provider credential such as `OPENAI_API_KEY` in `.env`, keep the key out of version control, and access provider selection through `config/ai.php`. Before sending production data, define retention, privacy, regional, cost, and incident-response requirements with the chosen provider.

The first-party AI SDK covers capabilities including:

- text generation;
- agents/tool calling;
- embeddings;
- image generation;
- audio;
- transcription;
- vector-store/search related workflows;
- reranking.

The important architectural advantage is that AI features can be expressed through Laravel-style APIs rather than placing raw provider-specific HTTP calls throughout your codebase.

## 61.2 Agent example concept

```php
use App\Ai\Agents\InvoiceAssistant;

$response = InvoiceAssistant::make()->prompt(
    'Explain why invoice INV-1001 failed validation.'
);

return (string) $response;
```

The prompt call returns a response object; casting it to `string` yields generated text. It may perform network I/O and can fail, time out, cost money, or produce incorrect output. Put slow calls in jobs when the HTTP response does not need to wait, and fake the AI boundary in normal automated tests.

Your real production agent should have deliberate:

- instructions;
- tool permissions;
- provider/model configuration;
- timeouts;
- token/cost controls;
- logging;
- data-protection rules;
- fallback behavior.

## 61.3 Embeddings

Embeddings convert content into vectors that represent semantic meaning.

Use cases:

```text
semantic document search
similar products
knowledge-base retrieval
invoice/vendor description matching
RAG retrieval
```

Generate an embedding through the configured AI provider:

```php
use Illuminate\Support\Str;

$embedding = Str::of('PO does not match the invoice')->toEmbeddings();
```

The call returns an embedding value suitable for supported vector operations. An embedding is not a human-readable summary; it is a numerical representation used for similarity calculations. Cache/reuse embeddings when the source text and model are unchanged, and record the embedding model/version so later migrations are possible.

## 61.4 Semantic/vector search

Traditional keyword search asks:

```text
Does this document contain “purchase order mismatch”?
```

Semantic search asks:

```text
Which documents are conceptually closest to “PO does not match invoice”?
```

Laravel 13 query-builder example, scoped to the current tenant before similarity search:

```php
use Illuminate\Support\Facades\DB;

$documents = DB::table('documents')
    ->where('tenant_id', $tenant->id)
    ->whereVectorSimilarTo('embedding', $query)
    ->limit(10)
    ->get();
```

`whereVectorSimilarTo()` accepts the vector column and a natural-language query, then returns ordinary query results after `get()`. Enforce tenant/user metadata constraints in the database/vector query itself, not only after retrieving a global top-N set.

This is powerful for natural-language search, but still requires:

- good chunking;
- appropriate embedding model;
- access-control filtering;
- metadata filtering;
- relevance evaluation.

Never retrieve documents from tenants/users the requester is not authorized to access simply because vectors are similar.

## 61.5 Reranking

A typical retrieval pipeline can be:

```text
query
 -> generate query embedding
 -> authorization and tenant metadata constraints
 -> vector search permitted top 50
 -> rerank top candidates
 -> choose top 5
 -> provide to model
```

Reranking helps improve relevance ordering after broad retrieval.

## 61.6 RAG architecture

RAG = Retrieval-Augmented Generation.

Example Laravel knowledge assistant:

```text
Upload policy PDF
  -> extract text
  -> chunk text
  -> embeddings
  -> vector store

User asks question
  -> authenticate/authorize
  -> retrieve permitted chunks
  -> prompt model with evidence
  -> answer with references
```

Key safety/quality requirement: retrieval authorization happens before sensitive content is exposed to the AI call.

## 61.7 Tool-calling agents

Agents may call application-defined tools.

Example tools:

```text
getInvoice(invoice_no)
getPurchaseOrder(po_no)
getApprovalHistory(invoice_id)
createHelpdeskTicket(...)
```

Do not expose unrestricted generic database or shell tools to an agent.

Prefer narrow tools with explicit schemas and server-side authorization.

## 61.8 Human approval for risky actions

For actions such as:

- payment;
- posting to ERP;
- deleting records;
- sending mass email;
- changing user access;

use human confirmation or strict deterministic policy rather than allowing an LLM to autonomously execute a high-impact operation.

## 61.9 MCP

MCP (Model Context Protocol) is a standard approach for exposing tools/context to AI clients and agents.

When using Laravel MCP capabilities, think in terms of:

```text
Resource/tool definition
 -> authentication
 -> authorization
 -> structured input validation
 -> application service
 -> structured result
```

The same normal backend security rules still apply.

Minimal setup:

```bash
composer require laravel/mcp
php artisan vendor:publish --tag=ai-routes
php artisan make:mcp-server InvoiceServer
```

Register a protected web server in the generated `routes/ai.php`:

```php
use App\Mcp\Servers\InvoiceServer;
use Laravel\Mcp\Facades\Mcp;

Mcp::web('/mcp/invoices', InvoiceServer::class)
    ->middleware(['auth', 'throttle:60,1']);
```

Publishing creates the AI routes file; creating the server creates a class under `app/Mcp/Servers`. A route alone is not sufficient security: every tool must validate its structured inputs and authorize the authenticated user for the exact record/action. Do not expose a broad “run SQL”, filesystem, or shell tool to a remote model.

## 61.10 Laravel Boost and agentic development

Laravel's AI-assisted development tooling can provide agents with version-specific Laravel context and conventions.

Use AI coding assistants as accelerators, but still review:

- authorization;
- validation;
- migrations;
- query performance;
- transactions;
- queue behavior;
- tests;
- package/version assumptions.

Generated code is not automatically correct because it looks idiomatic.

## 61.11 Laravel 13 JSON:API resources

Laravel 13 adds first-party JSON:API-oriented resource support.

JSON:API is useful when clients benefit from a standardized representation of:

- resource objects;
- relationships;
- links;
- included relationships;
- sparse fieldsets;
- standardized response structure.

Use ordinary API Resources for simple APIs when JSON:API's stronger convention is unnecessary.

Generate a JSON:API resource:

```bash
php artisan make:resource PostResource --json-api
```

```php
use Illuminate\Http\Resources\JsonApi\JsonApiResource;

class PostResource extends JsonApiResource
{
    public $attributes = [
        'title',
        'body',
        'created_at',
    ];

    public $relationships = [
        'author',
        'comments',
    ];
}
```

Returning `new PostResource($post)` produces a JSON:API `data` object and the `application/vnd.api+json` content type. Relationships are included only when requested through supported `include` behavior. Treat sparse fieldsets and includes as serialization controls—not authorization—and avoid exposing a relationship the caller may not access.

## 61.12 Laravel 13 queue routing

Laravel 13 can centrally route classes of jobs to particular queue connections/queues.

Register the default route centrally, such as in `AppServiceProvider::boot()`:

```php
use App\Jobs\ProcessInvoiceOcr;
use Illuminate\Support\Facades\Queue;

Queue::route(
    ProcessInvoiceOcr::class,
    connection: 'redis',
    queue: 'ocr',
);
```

The connection selects the backend configuration; the queue selects the workload lane within that connection. Workers must listen to `ocr` or routed jobs will remain pending.

Scenario:

```text
emails -> default queue
OCR -> CPU-heavy queue
ERP posting -> integration queue
reports -> low-priority queue
```

This keeps workload classes isolated and easier to scale.

## 61.13 PHP attributes in Laravel 13

Laravel 13 expands attribute-based declarations for concerns such as middleware, authorization, and queue job behavior.

Attributes can improve locality:

```php
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Routing\Attributes\Controllers\Authorize;
use Illuminate\Routing\Attributes\Controllers\Middleware;

#[Middleware('auth')]
class CommentController
{
    #[Authorize('create', [Comment::class, 'post'])]
    public function store(Post $post)
    {
        // Validate and create a comment for the authorized post.
    }
}
```

Queue-job behavior can also be declared explicitly:

```php
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\Attributes\Backoff;
use Illuminate\Queue\Attributes\FailOnTimeout;
use Illuminate\Queue\Attributes\Timeout;
use Illuminate\Queue\Attributes\Tries;

#[Tries(5)]
#[Backoff([10, 60, 300])]
#[Timeout(120)]
#[FailOnTimeout]
class ProcessInvoiceOcr implements ShouldQueue
{
    public function handle(): void
    {
        // Perform retry-safe OCR work.
    }
}
```

Do not mix several configuration styles randomly. Pick conventions your team can consistently discover and maintain.

---

# 62. Architecture and Clean Code

Laravel makes it easy to start coding quickly. The challenge is keeping the application understandable after 3 years and 50 developers.

## 62.1 The “fat controller” trap

Bad controller:

```php
public function approve(Request $request, int $id)
{
    // 180 lines:
    // validate
    // authorize
    // load invoice
    // calculate tax
    // update status
    // insert audit
    // send mail
    // call ERP
    // retry HTTP
    // generate PDF
    // update dashboard
}
```

Better:

```php
public function approve(
    ApproveInvoiceRequest $request,
    Invoice $invoice,
    ApproveInvoice $action
) {
    $this->authorize('approve', $invoice);

    $action->handle(
        invoice: $invoice,
        approver: $request->user(),
        data: ApprovalData::fromRequest($request),
    );

    return redirect()->back()->with('success', 'Invoice approved.');
}
```

Now the HTTP layer is easy to read.

## 62.2 Application services/actions

Example:

```php
final class ApproveInvoice
{
    public function __construct(
        private ApprovalPolicy $approvalPolicy,
        private AuditService $audit,
    ) {}

    public function handle(
        Invoice $invoice,
        User $approver,
        ApprovalData $data,
    ): void {
        // orchestrate use case
    }
}
```

An action class represents a business use case:

```text
ApproveInvoice
CreatePurchaseOrder
RegisterVendor
CancelOrder
IssueRefund
```

## 62.3 DTOs

DTO = Data Transfer Object.

Instead of passing a loose array:

```php
$service->create($request->all());
```

use a defined data structure:

```php
final readonly class CreateVendorData
{
    public function __construct(
        public string $name,
        public string $taxId,
        public string $email,
    ) {}
}
```

Benefits:

- type clarity;
- explicit fields;
- IDE support;
- easier refactoring;
- avoids mystery array keys.

Do not create DTOs for every two-value method merely to follow a trend.

## 62.4 Repository pattern

A repository can abstract persistence:

```php
interface InvoiceRepository
{
    public function findPendingByNumber(string $number): ?Invoice;
}
```

This is useful when:

- persistence is genuinely complex;
- multiple data sources exist;
- domain layer should not depend on Eloquent;
- queries have meaningful reusable business semantics.

It can be unnecessary boilerplate when the repository simply mirrors every Eloquent method:

```text
find()
all()
create()
update()
delete()
```

Eloquent itself already provides persistence behavior. Add repositories for a reason, not by habit.

## 62.5 Domain services

Use domain services for business logic that does not naturally belong to one entity.

Example:

```text
PricingService
CreditEligibilityService
InvoiceMatchingService
TaxCalculationService
```

## 62.6 Value objects

Instead of:

```php
$amount = 1000.50;
$currency = 'INR';
```

consider a `Money` value object in financial code.

It can enforce:

- currency;
- precision;
- valid arithmetic;
- formatting boundaries.

## 62.7 Enums

Use enums for stable finite states.

```php
enum InvoiceStatus: string
{
    case Draft = 'draft';
    case PendingApproval = 'pending_approval';
    case Approved = 'approved';
    case Posted = 'posted';
    case Rejected = 'rejected';
}
```

This is safer than scattering strings such as:

```php
if ($status === 'APPROVEDD')
```

## 62.8 State transitions

Do not allow arbitrary status changes.

Example valid graph:

```text
Draft
  -> PendingApproval
PendingApproval
  -> Approved
  -> Rejected
Approved
  -> Posted
```

Invalid:

```text
Draft -> Posted
Rejected -> Posted
```

Enforce transitions in a centralized domain/application layer.

## 62.9 Keep infrastructure at the edges

Business logic should not care whether mail is sent by SES, SMTP, or another provider.

Conceptual layering:

```text
HTTP/CLI/Queue entry point
        |
Application use case
        |
Domain rules
        |
Ports/interfaces
        |
Infrastructure: DB, ERP, mail, cloud
```

Laravel does not force strict clean architecture, but the principle helps large systems.

## 62.10 Naming

Prefer names that describe business intent.

Weak:

```text
DataService
CommonHelper
UtilityManager
processData()
doAction()
```

Better:

```text
InvoiceMatcher
PurchaseOrderValidator
ApprovalLimitService
approveInvoice()
releasePayment()
```

## 62.11 Avoid “Helpers.php” dumping grounds

A giant helper file often becomes unmanaged global logic.

Prefer:

- dedicated service classes;
- value objects;
- model methods for model-owned behavior;
- small pure utility classes for genuine utilities.

## 62.12 SOLID in Laravel

### Single Responsibility

A class should have one coherent reason to change.

### Open/Closed

Depend on abstractions where interchangeable implementations are expected.

### Liskov Substitution

Implementations of an interface should honor the interface's behavioral expectations.

### Interface Segregation

Prefer focused interfaces rather than a huge interface with unrelated methods.

### Dependency Inversion

High-level business logic should depend on abstractions rather than concrete external services.

Laravel's service container makes dependency inversion practical.

---

# 63. Design Patterns Commonly Used in Laravel

## 63.1 MVC

Use for separating request coordination, data, and UI.

## 63.2 Dependency Injection

Use to provide required collaborators without constructing them internally.

## 63.3 Repository

Use for meaningful persistence abstraction when justified.

## 63.4 Service Layer

Use for business/application operations that span multiple models/services.

## 63.5 Strategy

Scenario: payment providers.

```php
interface PaymentStrategy
{
    public function pay(PaymentData $data): PaymentResult;
}
```

Implementations:

```text
StripePayment
RazorpayPayment
BankTransferPayment
```

Runtime chooses strategy.

## 63.6 Factory

Scenario: construct an integration client based on company/configuration.

```text
ErpClientFactory
  SAP -> SapClient
  Oracle -> OracleClient
```

## 63.7 Adapter

Wrap a third-party API in your own interface.

```text
Your app expects:
PaymentGateway::charge(Money)

Stripe has:
PaymentIntent API

StripeGateway adapts Stripe to your interface.
```

This prevents provider details from leaking everywhere.

## 63.8 Observer

Use when multiple parts react to lifecycle events, especially when reactions are secondary.

Laravel model observers are one form; application/domain events are another.

## 63.9 Command

Jobs and Artisan commands often embody the Command pattern: package an operation as an object.

## 63.10 Pipeline

Useful when data passes through ordered transformation/validation stages.

Invoice example:

```text
Normalize OCR fields
 -> validate vendor
 -> validate tax
 -> match PO
 -> calculate confidence
 -> choose workflow
```

Each stage can be isolated.

## 63.11 Specification-like rule objects

For complex approval logic:

```text
WithinApprovalLimit
VendorIsActive
InvoiceIsNotDuplicate
PurchaseOrderHasBalance
```

Small rule objects can make policy logic testable and composable.

## 63.12 State pattern

Useful when object behavior differs significantly by status.

For simple workflows, an enum + transition service may be enough. Do not implement a full state pattern unless complexity justifies it.

## 63.13 Decorator

Add behavior around another service.

Example:

```text
ErpClient
 -> LoggingErpClient
 -> RetryingErpClient
 -> real SapErpClient
```

## 63.14 Null Object

Instead of repeated null checks, a no-op implementation can sometimes simplify optional services.

## 63.15 CQRS

CQRS separates write commands from read queries.

Useful when:

- write domain is complex;
- reporting/read models differ heavily;
- scale requirements differ.

Overkill for normal CRUD applications.

## 63.16 Event sourcing

Persist domain events rather than only latest state.

Powerful for audit-heavy domains, but complex. Do not adopt it merely because an approval system has an audit log.

---

# 64. Real-World Scenario: Blog

Build this project first because it exercises core Laravel concepts without overwhelming domain complexity.

## 64.1 Requirements

```text
Users register/login
Authors create posts
Posts have categories/tags
Posts have comments
Draft/published state
Admin moderates comments
Public list is paginated
Search by title
```

## 64.2 Suggested models

```text
User
Post
Category
Tag
Comment
```

Relationships:

```text
User 1 -> many Posts
Post many -> many Tags
Category 1 -> many Posts
Post 1 -> many Comments
User 1 -> many Comments
```

## 64.3 Route design

```text
GET    /posts
GET    /posts/{post:slug}
GET    /dashboard/posts
POST   /dashboard/posts
PATCH  /dashboard/posts/{post}
DELETE /dashboard/posts/{post}
```

## 64.4 Authorization

Policy:

```text
Author may update own draft/published post
Admin may update any post
Normal user cannot access author dashboard
```

## 64.5 Skills practiced

- routing;
- route model binding;
- controllers;
- form requests;
- Blade/Livewire/Inertia;
- Eloquent relationships;
- policies;
- factories;
- pagination;
- file upload for cover image;
- tests.

---

# 65. Real-World Scenario: E-Commerce Checkout

E-commerce adds transactional consistency and concurrency.

## 65.1 Models

```text
User
Product
Inventory
Cart
CartItem
Order
OrderItem
Payment
Shipment
Coupon
```

## 65.2 Checkout flow

```text
1. Validate cart
2. Authorize customer
3. Load current product pricing
4. Validate inventory
5. Apply discounts
6. Calculate tax/shipping
7. Create order + immutable order items
8. Reserve/decrement inventory safely
9. Initiate payment
10. Confirm payment asynchronously if required
11. Queue confirmation notification
```

## 65.3 Never trust client totals

Bad request body:

```json
{
  "product_id": 99,
  "quantity": 2,
  "total": 1
}
```

The server must calculate trusted totals from server-side product/pricing data.

## 65.4 Preserve order price history

Do not calculate old order totals from today's product price.

Store snapshot fields in `order_items`:

```text
product_id
product_name
sku
unit_price
quantity
tax
line_total
```

## 65.5 Prevent overselling

Concurrent checkouts require transaction/locking or another safe inventory reservation strategy.

## 65.6 Payment webhooks

Payment provider may asynchronously notify:

```text
payment.succeeded
payment.failed
refund.completed
```

Webhook handling must be idempotent.

---

# 66. Real-World Scenario: Invoice Approval Workflow

This scenario demonstrates enterprise Laravel design.

## 66.1 Requirements

```text
Invoice uploaded
OCR extracts fields
System validates supplier/invoice number/totals
PO invoice tries PO/receipt match
Mismatch creates approval workflow
Non-PO invoice always requires workflow
Approvers have amount limits
Finance Controller gives final approval
Approved invoice posts to ERP
Every step is audited
Failures are retryable and visible
```

## 66.2 Suggested models

```text
Invoice
InvoiceLine
Vendor
PurchaseOrder
GoodsReceipt
Workflow
WorkflowStep
Approval
Posting
IntegrationAttempt
AuditLog
Attachment
```

## 66.3 Status model

```text
received
ocr_processing
validation_failed
pending_match
pending_approval
approved
posting
posted
posting_failed
rejected
```

Use an enum and controlled transition service.

## 66.4 Upload request

Controller responsibilities:

```text
validate upload
create invoice shell record
authorize company/location
store file
queue OCR
return tracking response
```

Do not run a 30-second OCR process inside the upload HTTP request.

## 66.5 OCR job

```text
ProcessInvoiceOcr
  -> fetch private file
  -> call OCR engine
  -> normalize fields
  -> persist raw extraction + normalized data
  -> dispatch validation/matching step
```

Store both:

- raw machine extraction for audit/debug;
- normalized structured fields for business logic.

## 66.6 Duplicate invoice rule

Possible uniqueness dimensions:

```text
company + vendor + invoice_number + fiscal context
```

Do not rely only on AI/OCR confidence to prevent duplicates.

## 66.7 PO matching service

```php
final class InvoiceMatcher
{
    public function match(Invoice $invoice): MatchResult
    {
        // vendor match
        // PO validity
        // receipt quantity/value
        // tolerance
        // tax/value consistency
    }
}
```

Result should explain **why** a match failed.

Example:

```json
{
  "matched": false,
  "reasons": [
    "PO_VALUE_EXCEEDED",
    "GOODS_RECEIPT_MISSING"
  ]
}
```

## 66.8 Approval workflow

Do not hard-code approval logic in 12 nested `if` statements.

Model workflow explicitly:

```text
Workflow
  Step 1 Manager <= 100k
  Step 2 Director <= 1m
  Step 3 Finance Controller final
```

Each approval records:

```text
approver_user_id
step
status
decision_at
comment
amount/context snapshot
```

Never overwrite approval history.

## 66.9 ERP posting

Posting should usually be a queued integration job.

Requirements:

- idempotency key;
- correlation ID;
- request payload audit with sensitive redaction;
- response status;
- retry policy;
- manual retry support;
- permanent-failure state.

## 66.10 Transaction boundary

Inside database transaction:

```text
mark approval
create audit
advance workflow state
```

After commit:

```text
queue ERP posting if now fully approved
queue notifications
```

## 66.11 Tests

Must test:

```text
exact-match auto path
PO mismatch workflow path
non-PO mandatory workflow
unauthorized approver
amount above approver limit
reject flow
final approval
duplicate approval request
ERP temporary failure retry
ERP permanent validation error
idempotent ERP posting
```

---

# 67. Real-World Scenario: SaaS Application

SaaS introduces tenancy and subscription concerns.

## 67.1 Common tenancy models

### Shared database, shared tables

Every tenant-owned row has `tenant_id`.

Pros:

- simple infrastructure;
- efficient for many tenants.

Risks:

- missing tenant filter can leak data.

### Shared database, separate schemas

More isolation, more operational complexity.

### Database per tenant

Strong separation, but migration/connection/operations become more complex.

## 67.2 Tenant context

A request may resolve tenant from:

- subdomain;
- custom domain;
- route segment;
- authenticated membership.

Centralize tenant resolution.

## 67.3 Authorization remains mandatory

A `tenant_id` global scope alone is not a complete authorization system.

Still validate membership and permissions.

## 67.4 Queued jobs and tenancy

A common bug:

```text
HTTP request has tenant context
job dispatched
worker later runs without tenant context
query returns wrong/no data
```

Put required tenant identifier in the job and explicitly restore/validate context.

## 67.5 Tenant-aware cache keys

Bad:

```text
settings
```

Better:

```text
tenant:123:settings
```

## 67.6 Subscription feature gating

Use feature flags/entitlements rather than scattering plan-name checks.

Bad:

```php
if ($user->plan === 'gold')
```

Better concept:

```php
$entitlements->allows($tenant, Feature::AdvancedReports)
```

---

# 68. Real-World Scenario: Webhooks

A webhook is an HTTP request another system sends to notify your application about an event.

Examples:

- payment succeeded;
- shipment delivered;
- Git push event;
- ERP document posted.

## 68.1 Secure webhook flow

```text
Receive raw request
 -> verify signature
 -> validate timestamp/replay window
 -> identify event ID
 -> reject duplicate already-processed event
 -> store event
 -> queue processing
 -> return quickly
```

## 68.2 Why respond quickly?

Providers often expect fast `2xx` responses and retry on timeout.

Do heavy processing asynchronously.

## 68.3 Idempotency

Providers may deliver the same event more than once.

Store a unique provider event ID.

```text
stripe_event_id UNIQUE
```

If event already processed, return success without applying the action twice.

## 68.4 Signature verification

Never trust a webhook merely because it contains the correct-looking JSON.

Verify the provider-specific cryptographic signature using the raw body as required by that provider's protocol.

---

# 69. Common Laravel Mistakes

## 69.1 Fat controllers

Move complex use cases into services/actions.

## 69.2 Business logic in Blade

Blade should primarily render UI.

Do not perform complex database writes/calculation workflows inside templates.

## 69.3 Calling `env()` everywhere

Read environment values through config outside configuration files.

## 69.4 Returning raw models from every API

Use resource classes/contracts for stable APIs.

## 69.5 N+1 queries

Use eager loading and query inspection.

## 69.6 Loading huge datasets

Use pagination/chunking/cursors.

## 69.7 No database constraints

Application validation is not enough.

Use:

- unique constraints;
- foreign keys;
- appropriate nullability;
- checks where supported/appropriate.

## 69.8 No transactions for multi-write operations

Use transactions for atomic business changes.

## 69.9 External API calls inside long DB transactions

Keep transactions short. Network calls can block while locks are held.

## 69.10 Hidden critical logic in model observers

Critical workflows should be discoverable and explicit.

## 69.11 Queue jobs that cannot be retried safely

Design idempotency.

## 69.12 Trusting frontend authorization

Hidden button != security.

Always authorize server-side.

## 69.13 Storing uploaded files under predictable public paths

Use proper private storage and authorization.

## 69.14 Using floats for money

Use database decimals and deliberate money handling/value objects.

## 69.15 No indexes

A query that is fast with 1,000 rows may fail badly with 10 million.

## 69.16 Premature abstractions

Do not create:

```text
Controller -> Service -> Repository -> Manager -> Helper -> Model
```

when each layer merely forwards the same call.

Every abstraction should reduce complexity, not rename it.

## 69.17 Catching `Throwable` and returning success

Never hide failures.

## 69.18 Hard-coded status strings

Use enums/constants/state objects.

## 69.19 No tests around money/workflow/security

These are precisely the areas where regressions cost the most.

## 69.20 Running destructive migration commands carelessly

Know what environment/database you are connected to.

---

# 70. Troubleshooting Guide

## 70.1 `Class not found`

Check:

```text
namespace
use/import statement
file/class name
Composer autoload
package actually installed
```

Try when appropriate:

```bash
composer dump-autoload
```

## 70.2 Route returns 404

Run:

```bash
php artisan route:list
```

Check:

- route method;
- URI;
- prefix;
- domain;
- route cache;
- web server rewriting;
- model binding value.

## 70.3 419 / CSRF-related form failure

Check:

- `@csrf` exists;
- session cookie is working;
- app URL/domain/protocol is correct;
- session storage works;
- reverse proxy HTTPS configuration is correct;
- form is sent to the expected Laravel application/domain.

## 70.4 403 response

Look for:

- policy/gate rejection;
- custom middleware;
- tenant mismatch;
- signed URL validation;
- server filesystem permissions when the 403 comes from the web server rather than Laravel.

## 70.5 Database connection error

Check:

```dotenv
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Also check:

- database service is running;
- firewall/network;
- user permissions;
- TLS requirements;
- cached config.

After `.env` changes during development, if configuration appears stale:

```bash
php artisan config:clear
```

## 70.6 Migration says table/column already exists

Do not blindly delete migration records.

First understand:

```text
What schema exists?
What migrations table says ran?
Was schema changed manually?
Are multiple branches creating same object?
```

Then repair deliberately.

## 70.7 Storage permission errors

Verify write access to runtime directories and ownership of files created by web/worker users.

Also distinguish:

```text
web server user
queue worker user
CLI/deployment user
```

They may not be the same.

## 70.8 Uploaded image/file not visible

Check:

- which disk it was stored on;
- whether it is private/public;
- public storage symlink if using local public disk;
- URL generation;
- filesystem permissions;
- object-storage credentials and bucket policy.

## 70.9 Queue jobs never run

Check:

```text
QUEUE_CONNECTION
worker running?
correct queue name?
job delayed?
failed jobs?
Redis/database reachable?
worker using old cached config/code?
```

Run worker during development:

```bash
php artisan queue:work
```

## 70.10 Queue works locally, not production

Common causes:

- worker supervisor not configured;
- worker not restarted after deploy;
- different `.env`;
- permissions;
- missing extension/package;
- wrong queue name;
- external service unreachable from production.

## 70.11 Mail not sending

Check:

- mail transport config;
- credentials;
- sender domain;
- TLS/port;
- provider sandbox restrictions;
- queued mail worker;
- logs/failed jobs.

## 70.12 `APP_KEY` errors

Generate for a new application:

```bash
php artisan key:generate
```

Do not casually change a production key. Existing encrypted data/cookies may no longer be decryptable.

## 70.13 Changes not appearing

Potential caches/build artifacts:

```bash
php artisan optimize:clear
```

Also consider:

- browser cache;
- Vite build/HMR;
- PHP OPcache;
- long-running queue/Octane processes;
- CDN cache.

Do not make clearing everything your permanent deployment strategy; understand each cache.

## 70.14 N+1 performance issue

Inspect queries and eager-load required relationships.

Typical fix:

```php
Invoice::with(['vendor', 'approvals.user'])->paginate();
```

## 70.15 Memory exhausted during import

Avoid loading entire files/database tables at once.

Use:

- streaming readers;
- chunks;
- batches;
- queues;
- lazy collections;
- explicit object cleanup where needed.

## 70.16 `Too many connections`

Investigate:

- PHP/application worker count;
- queue concurrency;
- connection pooling/runtime model;
- long-running queries;
- transaction duration;
- database max connections;
- leaked/long-lived state in unusual runtimes.

Do not simply increase DB limits forever.

## 70.17 CORS errors

Understand that CORS is enforced by browsers.

Check:

- exact frontend origin;
- allowed methods/headers;
- credential mode;
- preflight OPTIONS request;
- reverse proxy behavior.

Do not “fix” CORS by allowing every origin with credentials.

## 70.18 Production 500 with no visible details

Correct production behavior hides stack traces from users.

Check application/server logs and monitoring instead of enabling debug publicly.

---

# 71. Artisan and Developer Cheat Sheet

## Project/application

```bash
laravel new my-app
php artisan about
php artisan serve
php artisan list
php artisan help <command>
```

## Routes

```bash
php artisan route:list
```

## Code generation

```bash
php artisan make:model Product
php artisan make:model Product -m
php artisan make:controller ProductController
php artisan make:controller ProductController --resource
php artisan make:request StoreProductRequest
php artisan make:middleware EnsureAdmin
php artisan make:policy ProductPolicy --model=Product
php artisan make:job GenerateReport
php artisan make:event InvoiceApproved
php artisan make:listener SendInvoiceApprovedNotification
php artisan make:notification InvoiceApprovedNotification
php artisan make:mail InvoiceApprovedMail
php artisan make:command SyncVendors
php artisan make:observer ProductObserver --model=Product
php artisan make:rule ValidTaxNumber
php artisan make:resource ProductResource
php artisan make:seeder ProductSeeder
php artisan make:factory ProductFactory --model=Product
```

## Database

The final command below destroys all tables in the selected database. Use it only in a disposable development/test database after verifying the active environment and connection.

```bash
php artisan migrate
php artisan migrate:status
php artisan migrate:rollback
php artisan db:seed
php artisan migrate:fresh --seed
```

## Cache/optimization

```bash
php artisan optimize
php artisan optimize:clear
php artisan config:cache
php artisan config:clear
php artisan route:cache
php artisan route:clear
php artisan view:cache
php artisan view:clear
```

## Queues

```bash
php artisan queue:work
php artisan queue:restart
php artisan queue:failed
php artisan queue:retry all
```

## Testing

```bash
php artisan test
php artisan test --filter=Invoice
```

## Storage

```bash
php artisan storage:link
```

## Composer

```bash
composer install
composer update
composer require vendor/package
composer remove vendor/package
composer dump-autoload
```

## Frontend

```bash
npm install
npm run dev
npm run build
```

---

# 72. Laravel Interview Questions

Use these to test understanding rather than memorizing one-line answers.

## Beginner

### 1. What is Laravel?

A PHP web application framework providing structured solutions for routing, HTTP handling, database access, authentication, queues, caching, testing, and other common application concerns.

### 2. What is MVC?

A separation pattern involving Models, Views, and Controllers. Laravel supports MVC but also uses many additional architectural concepts.

### 3. What is Artisan?

Laravel's command-line interface for framework/application operations and custom commands.

### 4. What is a migration?

A version-controlled description of database schema changes.

### 5. What is Eloquent?

Laravel's Active Record ORM.

### 6. What is route model binding?

Automatic resolution of route parameters into model instances.

### 7. What is middleware?

A request/response pipeline component used to inspect, reject, or modify HTTP traffic.

### 8. What is Blade?

Laravel's server-side templating engine.

### 9. Why use `@csrf`?

To include Laravel's CSRF token in state-changing browser forms.

### 10. What is mass assignment?

Assigning many model attributes at once. Laravel provides safeguards so untrusted fields are not accidentally assigned.

## Intermediate

### 11. `find()` vs `findOrFail()`?

`find()` may return null. `findOrFail()` throws a model-not-found exception when missing, which HTTP handling commonly turns into a 404.

### 12. What is eager loading?

Loading relationships in planned queries to avoid repeated lazy-loading queries such as N+1 patterns.

### 13. What is the service container?

The dependency-resolution system that creates classes and maps abstractions to implementations.

### 14. What is a service provider?

A bootstrapping class used to register/configure application and framework services.

### 15. Facade vs dependency injection?

A facade offers a concise static-looking proxy to a container service. DI makes dependencies explicit through constructors/methods. Both can be valid depending on context.

### 16. Authentication vs authorization?

Authentication identifies the user. Authorization decides whether that user may perform an action.

### 17. Gates vs policies?

Gates define abilities, often general ones. Policies organize authorization around a model/resource.

### 18. Why use Form Requests?

To extract validation/authorization-related HTTP input concerns from controllers and make them reusable/testable.

### 19. When should you use a queue?

For slow, retryable, asynchronous, or non-response-critical work such as mail, imports, OCR, reports, and external integration processing.

### 20. What is an idempotent job?

A job that can safely be attempted again without incorrectly duplicating its logical effect.

### 21. What is a database transaction?

A group of database operations that commit atomically or roll back together.

### 22. What is `lockForUpdate()` for?

A pessimistic database lock commonly used in a transaction when concurrent writers must not change a selected row simultaneously.

### 23. Why should external API calls generally not happen inside long DB transactions?

Network calls can be slow/unreliable while database locks remain held, increasing contention and failure complexity.

### 24. What is a Laravel API Resource?

A transformation layer between internal models/data and external JSON representations.

### 25. Sanctum vs Passport?

Sanctum suits common first-party SPA/simple token needs. Passport is for OAuth2 server requirements.

## Advanced

### 26. Explain the N+1 problem.

One query loads parent records and then one additional query is triggered per parent while accessing a relationship. Eager loading or query redesign usually solves it.

### 27. How would you design a large import?

Stream/chunk input, validate in batches, queue work, use idempotency, capture row-level errors, avoid loading all rows into memory, and provide progress/observability.

### 28. How would you safely process a payment webhook?

Verify signature, validate replay window, persist provider event ID uniquely, acknowledge quickly, queue heavy work, and make processing idempotent.

### 29. How would you prevent double inventory decrement?

Use appropriate transaction/concurrency control such as row locking or an atomic database operation, plus invariant checks.

### 30. How would you design multi-tenant cache keys?

Always include tenant identity in tenant-specific keys and ensure tenant context is explicit in queued/background operations.

### 31. What changes with Octane/long-lived workers?

Application state can persist across requests, so request-specific mutable data must not leak through singletons/statics. Workers also need deliberate restart/reload behavior during deployment.

### 32. What is the outbox pattern?

Persist an outgoing integration/event intent in the same DB transaction as the business change, then asynchronously deliver it. This reduces inconsistency between committed DB state and external messaging.

### 33. Why are DB constraints still needed if Laravel validation exists?

Validation is subject to race conditions and bypass paths. The database is the final integrity boundary for uniqueness, references, and schema-level invariants.

### 34. Repository pattern: always or sometimes?

Sometimes. It is useful for genuine persistence boundaries/complex queries, but wrapping every Eloquent CRUD call often adds useless ceremony.

### 35. How do you decide between event listener and direct service call?

Use a direct call for mandatory, obvious steps in the use case. Use events when reactions are meaningfully decoupled/secondary or multiple independent listeners should react.

### 36. How would you handle an ERP posting job that times out after the ERP may already have accepted the document?

Use a stable idempotency/reference key and query/reconcile the external state before blindly retrying a create operation.

### 37. Why are audit logs different from application logs?

Application logs diagnose software/runtime behavior. Audit logs are durable business/security records of who did what, when, and often before/after state.

### 38. What is optimistic locking?

Rejecting an update when the stored version has changed since the client originally read it, preventing stale overwrites.

### 39. What is RAG?

Retrieval-Augmented Generation: retrieve relevant controlled evidence and provide it to a generative model to ground a response.

### 40. What security risk exists in vector search for a multi-tenant app?

Similarity search can retrieve semantically relevant data from the wrong tenant if authorization/metadata filtering is not enforced before content is exposed.

---

# 73. 12-Week Learning Roadmap

## Week 1 — PHP and Web Foundation

Learn:

- modern PHP syntax;
- OOP/interfaces/traits/enums;
- Composer;
- HTTP methods/status codes;
- basic SQL.

Build:

```text
Plain-PHP mini CRUD or command-line OOP exercise
```

Goal: Laravel syntax should not be hiding PHP concepts from you.

## Week 2 — Laravel Fundamentals

Learn:

- installation;
- directories;
- `.env`/config;
- routes;
- controllers;
- requests;
- responses;
- Blade.

Build:

```text
Simple notes application without authentication
```

## Week 3 — Database and Eloquent

Learn:

- migrations;
- factories;
- seeders;
- CRUD;
- query builder;
- Eloquent;
- relationships;
- eager loading.

Build:

```text
Blog database with posts, users, categories, comments
```

## Week 4 — Validation and Security

Learn:

- Form Requests;
- CSRF;
- authentication;
- policies;
- hashing;
- uploads;
- session.

Build:

```text
Authenticated author dashboard
```

## Week 5 — Frontend Choice

Choose one primary path first:

```text
Blade + Livewire
OR
Inertia + React/Vue/Svelte
OR
API backend + separate frontend
```

Build:

```text
Interactive CRUD dashboard with filters/forms/pagination
```

## Week 6 — APIs

Learn:

- REST design;
- resources;
- status codes;
- Sanctum;
- rate limiting;
- API testing.

Build:

```text
Mobile-ready product/order API
```

## Week 7 — Service Container and Architecture

Learn:

- DI;
- container bindings;
- providers;
- actions/services;
- DTOs;
- value objects;
- interfaces.

Refactor:

```text
Move business logic out of controllers
```

## Week 8 — Async and Integrations

Learn:

- jobs;
- queues;
- events/listeners;
- mail;
- notifications;
- HTTP client;
- webhooks;
- scheduler.

Build:

```text
Async invoice/report processing flow
```

## Week 9 — Testing

Learn:

- unit tests;
- feature tests;
- HTTP tests;
- database factories;
- fakes;
- integration boundaries.

Target:

```text
Critical business workflows have automated coverage
```

## Week 10 — Performance

Learn:

- N+1;
- indexes;
- query plans;
- caching;
- Redis;
- chunking;
- queue throughput;
- Horizon/Pulse/Telescope.

Exercise:

```text
Seed 500k records and optimize a slow report
```

## Week 11 — Production

Learn:

- Linux/web server basics;
- environment/secrets;
- deployment;
- workers;
- scheduler;
- logs;
- health checks;
- storage;
- Docker/Sail;
- backups/rollback thinking.

Deploy:

```text
A real application to a production-like server
```

## Week 12 — Advanced Project

Build one end-to-end system containing:

```text
authentication
authorization
complex relationships
transactions
queue
external API/webhook
cache
tests
observability
deployment documentation
```

Optional Laravel 13 extension:

```text
AI semantic search or controlled assistant feature
```

---

# 74. Project Ideas by Difficulty

## Beginner

1. Todo manager with users and categories.
2. Expense tracker with monthly summaries.
3. Blog with comments and admin moderation.
4. Employee leave-request portal.
5. Contact manager with CSV import/export.

## Intermediate

1. Inventory management system.
2. Helpdesk/ticket application.
3. Recruitment/job application portal.
4. Vendor onboarding workflow.
5. Restaurant ordering backend.
6. Event booking system.
7. Subscription SaaS dashboard.

## Advanced

1. Invoice OCR + approval + ERP integration system.
2. Multi-tenant project-management SaaS.
3. E-commerce platform with payment webhooks and inventory locking.
4. Document knowledge base with semantic search/RAG.
5. Realtime operations dashboard using Reverb/Echo.
6. Large background import/export platform with progress tracking.
7. Financial workflow system with immutable audit trail and maker-checker approvals.

For every advanced project, include:

- architecture diagram;
- database design;
- API contract;
- authorization matrix;
- failure/retry strategy;
- tests;
- deployment plan;
- observability plan.

---

# 75. Mastery Checklist

Use this as your final self-assessment.

## Foundation

- [ ] I understand HTTP request/response flow.
- [ ] I understand PHP OOP, interfaces, traits, enums, and exceptions.
- [ ] I understand Composer and autoloading.
- [ ] I can read and write normal SQL.

## Laravel basics

- [ ] I can create and configure a Laravel project.
- [ ] I understand Laravel's directory structure.
- [ ] I understand routes and route model binding.
- [ ] I can design resourceful routes.
- [ ] I can write thin controllers.
- [ ] I understand requests and responses.
- [ ] I can write middleware.
- [ ] I can use Blade/components.
- [ ] I understand frontend options: Blade, Livewire, Inertia, API frontend.

## Input/security

- [ ] I use Form Requests for meaningful validation.
- [ ] I understand CSRF.
- [ ] I understand XSS risks.
- [ ] I understand SQL injection risks.
- [ ] I understand mass-assignment risks.
- [ ] I validate file uploads.
- [ ] I never trust frontend-only authorization.

## Database/Eloquent

- [ ] I can create safe migrations.
- [ ] I understand indexes and constraints.
- [ ] I can use factories and seeders.
- [ ] I can use Query Builder.
- [ ] I understand Eloquent CRUD.
- [ ] I understand all common relationship types.
- [ ] I can identify/fix N+1 queries.
- [ ] I understand scopes, casts, accessors, mutators, and observers.
- [ ] I can process large datasets with chunking/lazy techniques.
- [ ] I understand database transactions.
- [ ] I understand concurrency/locking basics.

## Authentication/authorization

- [ ] I understand guards and user providers conceptually.
- [ ] I can protect routes.
- [ ] I can create gates and policies.
- [ ] I know authentication is different from authorization.
- [ ] I understand email verification/password reset flows.
- [ ] I understand Sanctum vs Passport.

## API

- [ ] I can design resource-oriented APIs.
- [ ] I use appropriate HTTP status codes.
- [ ] I can create API Resources.
- [ ] I understand pagination and rate limiting.
- [ ] I can design idempotent write endpoints.
- [ ] I understand API versioning trade-offs.

## Async/integration

- [ ] I can create jobs and run workers.
- [ ] I understand retries/backoff.
- [ ] I design retry-safe/idempotent jobs.
- [ ] I understand failed-job operations.
- [ ] I understand job chains/batches.
- [ ] I understand events/listeners.
- [ ] I can use the scheduler.
- [ ] I can use the HTTP client with timeout/retry behavior.
- [ ] I can securely process webhooks.
- [ ] I understand correlation IDs.

## Cache/storage/realtime

- [ ] I understand cache-aside/remember patterns.
- [ ] I understand cache invalidation.
- [ ] I know common Redis use cases.
- [ ] I can store public/private files correctly.
- [ ] I understand signed/private download patterns.
- [ ] I understand broadcasting/Reverb at a high level.

## Architecture

- [ ] I know when to introduce actions/services.
- [ ] I can use DI and container bindings.
- [ ] I understand service providers.
- [ ] I can create explicit DTOs/value objects when helpful.
- [ ] I know repository pattern is optional, not mandatory.
- [ ] I can model state transitions.
- [ ] I can separate business logic from HTTP/infrastructure logic.
- [ ] I understand strategy, adapter, factory, pipeline, and observer patterns.

## Testing

- [ ] I write unit tests for pure business logic.
- [ ] I write feature tests for application workflows.
- [ ] I test authorization failures.
- [ ] I test validation boundaries.
- [ ] I use factories.
- [ ] I can fake mail, queues, events, storage, and HTTP.
- [ ] I do not over-mock internal implementation.

## Performance/operations

- [ ] I can inspect slow database queries.
- [ ] I understand pagination/chunking.
- [ ] I understand queue throughput/backlogs.
- [ ] I know how configuration caching affects production.
- [ ] I know workers must be restarted/reloaded on deployment.
- [ ] I understand horizontal-scaling state concerns.
- [ ] I understand Octane's long-lived worker implications.
- [ ] I can use logs/Telescope/Pulse/Horizon appropriately.

## Laravel 13

- [ ] I know Laravel 13 requires PHP 8.3+.
- [ ] I understand the purpose of the AI SDK.
- [ ] I understand embeddings and semantic/vector search concepts.
- [ ] I understand JSON:API resources conceptually.
- [ ] I understand centralized queue routing conceptually.
- [ ] I recognize expanded PHP attribute-based framework configuration.
- [ ] I understand MCP/tool security boundaries.

If you can confidently explain and demonstrate most of this checklist without copying a tutorial, you are operating well beyond beginner Laravel usage.

---

# 76. Glossary

**Active Record** — ORM pattern where model objects contain persistence behavior for their records.

**API Resource** — Laravel transformation layer for turning models/data into controlled JSON responses.

**Artisan** — Laravel command-line interface.

**Authentication** — Determining who the requester is.

**Authorization** — Determining what the requester may do.

**Backoff** — Delay strategy between retries.

**Blade** — Laravel server-side template engine.

**Broadcasting** — Publishing server-side events to realtime clients/channels.

**Cache** — Temporary fast storage of data that can be recomputed/refetched.

**Cast** — Conversion between raw model attributes and application-level PHP types/objects.

**Collection** — Laravel fluent wrapper for working with sequences of data.

**Composer** — PHP dependency/package manager.

**Contract** — Interface defining a Laravel/application service abstraction.

**Controller** — HTTP-layer class coordinating requests and responses.

**CSRF** — Cross-Site Request Forgery; attacks that trick an authenticated browser into making unwanted state-changing requests.

**Cursor pagination** — Pagination based on a position/key rather than numeric offset.

**Dependency Injection** — Providing a class's dependencies from outside instead of constructing them internally.

**DTO** — Data Transfer Object; explicit structure used to carry data between layers.

**Eager Loading** — Loading relationships in planned queries to avoid repeated lazy queries.

**Eloquent** — Laravel ORM.

**Embedding** — Numerical vector representing semantic characteristics of content.

**Event** — Object/message representing that something happened in the application.

**Facade** — Laravel's static-looking proxy to a service resolved from the service container.

**Factory** — Test/development data generator for models; also a general object-creation design pattern.

**Feature Test** — Test that exercises multiple application/framework layers together.

**Gate** — Laravel authorization ability definition.

**Guard** — Authentication mechanism used for a request/context.

**Horizon** — Laravel tooling for Redis queue monitoring/management.

**Idempotency** — Property where repeating the same logical operation does not create incorrect duplicate effects.

**Inertia** — Bridge for building Laravel applications using Laravel routes/controllers with React, Vue, or Svelte frontend pages.

**Job** — Object representing work that can often be queued.

**JSON:API** — Specification for structured JSON APIs and relationships.

**Lazy Loading** — Loading a relationship only when accessed.

**Listener** — Code that reacts to an event.

**Livewire** — Laravel ecosystem framework for reactive frontends using server-driven PHP components.

**MCP** — Model Context Protocol; standard for exposing tools/context to AI systems.

**Middleware** — Component in the HTTP pipeline that can inspect/modify/reject requests/responses.

**Migration** — Version-controlled database schema change.

**Model** — Eloquent class representing a data entity/table record behavior.

**N+1 Query** — Performance issue where one query loads parents followed by one additional query per parent.

**Observer** — Object grouping reactions to model lifecycle events.

**Octane** — Laravel package/runtime approach for serving applications through long-lived high-performance workers.

**ORM** — Object-Relational Mapper; maps relational database data to application objects.

**Outbox Pattern** — Persisting integration/event intent transactionally before asynchronous delivery.

**Policy** — Model/resource-focused authorization class.

**Provider (auth)** — Component that retrieves users for authentication.

**Queue** — Infrastructure holding background work for workers.

**RAG** — Retrieval-Augmented Generation; retrieving relevant evidence for a generative AI model.

**Rate Limiting** — Restricting how often an identity can perform an operation.

**Redis** — In-memory data store commonly used for Laravel cache, queue, sessions, locks, and counters.

**Reverb** — Laravel first-party realtime/WebSocket server.

**Route Model Binding** — Automatic resolution of route parameters to model instances.

**Scope** — Reusable Eloquent query constraint.

**Seeder** — Class that inserts initial/development database data.

**Service Container** — Laravel's dependency-resolution and binding system.

**Service Provider** — Laravel application bootstrapping/registration class.

**Soft Delete** — Marking a row as deleted using a timestamp instead of physically removing it.

**Telescope** — Laravel debugging/inspection tool.

**Transaction** — Atomic database unit of work that commits or rolls back as a group.

**Value Object** — Object defined by its value, often used for domain concepts such as Money or EmailAddress.

**Vector Search** — Similarity search over numerical embeddings.

**Vite** — Frontend asset bundler used by current Laravel applications.

**Webhook** — HTTP callback sent from an external system to notify your application of an event.

**Worker** — Long-running process that consumes queued jobs.

**XSS** — Cross-Site Scripting; injection of executable browser content into pages viewed by users.

---

# 77. Official References

This handbook is a learning companion, not a replacement for framework documentation. APIs evolve, so verify version-specific details against the official documentation when implementing production code.

- [Laravel 13 Documentation](https://laravel.com/docs/13.x)
- [Laravel 13 Installation](https://laravel.com/docs/13.x/installation)
- [Laravel Release Notes](https://laravel.com/docs/13.x/releases)
- [Laravel 13 Upgrade Guide](https://laravel.com/docs/13.x/upgrade)
- [Laravel Framework Package Releases](https://packagist.org/packages/laravel/framework)
- [Laravel Frontend](https://laravel.com/docs/13.x/frontend)
- [Laravel Starter Kits](https://laravel.com/docs/13.x/starter-kits)
- [Laravel Service Container](https://laravel.com/docs/13.x/container)
- [Laravel Routing](https://laravel.com/docs/13.x/routing)
- [Laravel Middleware](https://laravel.com/docs/13.x/middleware)
- [Laravel Validation](https://laravel.com/docs/13.x/validation)
- [Laravel Database](https://laravel.com/docs/13.x/database)
- [Laravel Eloquent](https://laravel.com/docs/13.x/eloquent)
- [Laravel Eloquent Relationships](https://laravel.com/docs/13.x/eloquent-relationships)
- [Laravel API and JSON:API Resources](https://laravel.com/docs/13.x/eloquent-resources)
- [Laravel Authentication](https://laravel.com/docs/13.x/authentication)
- [Laravel Authorization](https://laravel.com/docs/13.x/authorization)
- [Laravel Queues](https://laravel.com/docs/13.x/queues)
- [Laravel Request Forgery Protection](https://laravel.com/docs/13.x/csrf)
- [Laravel Cache](https://laravel.com/docs/13.x/cache)
- [Laravel Task Scheduling](https://laravel.com/docs/13.x/scheduling)
- [Laravel Testing](https://laravel.com/docs/13.x/testing)
- [Laravel Deployment](https://laravel.com/docs/13.x/deployment)
- [Laravel AI SDK](https://laravel.com/docs/13.x/ai-sdk)
- [Laravel MCP](https://laravel.com/docs/13.x/mcp)
- [Laravel Boost](https://laravel.com/docs/13.x/boost)
- [Laravel API Documentation](https://api.laravel.com/docs/13.x/)

---

# Final Learning Advice

The fastest way to become strong in Laravel is not to memorize Artisan commands. Build systems that force you to solve progressively harder problems.

A strong Laravel developer should be able to answer all of these questions for a feature:

```text
Where does the request enter?
Who validates the input?
Who authorizes the user?
Where is the business rule?
What transaction guarantees integrity?
What happens under concurrency?
What happens if an external system times out?
Can the operation be retried safely?
How will this behave with one million rows?
How will it be tested?
How will it be monitored in production?
How can another developer understand it six months later?
```

When you can answer those questions clearly, you are no longer merely “using Laravel”. You are engineering applications with Laravel.

---

**End of Laravel Master Handbook**
