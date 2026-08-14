# CodeIgniter 4 Master Learning Handbook

> **A beginner-to-advanced, single-file learning reference for CodeIgniter 4**
>
> Technical baseline: **CodeIgniter 4.7.4** / **PHP 8.2+** (verified August 2026). Use the newest compatible patch release rather than remaining on an older 4.7.x patch; 4.7.4 includes security fixes for HTTPS proxy-header trust, Query Builder `deleteBatch()`, and uploaded-file filename handling.
>
> This handbook is designed so that a new learner can start from the beginning, while an experienced developer can use it as a practical reference during real projects.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is CodeIgniter 4?](#2-what-is-codeigniter-4)
3. [Prerequisites](#3-prerequisites)
4. [Installing CodeIgniter 4](#4-installing-codeigniter-4)
5. [Running a CodeIgniter Application](#5-running-a-codeigniter-application)
6. [Understanding the Project Structure](#6-understanding-the-project-structure)
7. [How a Request Flows Through CodeIgniter](#7-how-a-request-flows-through-codeigniter)
8. [MVC Explained Properly](#8-mvc-explained-properly)
9. [Routing](#9-routing)
10. [Controllers](#10-controllers)
11. [HTTP Request](#11-http-request)
12. [HTTP Response](#12-http-response)
13. [Views](#13-views)
14. [Layouts, Sections, and View Cells](#14-layouts-sections-and-view-cells)
15. [Helpers](#15-helpers)
16. [Configuration and Environment Variables](#16-configuration-and-environment-variables)
17. [Namespaces and Autoloading](#17-namespaces-and-autoloading)
18. [Services and Dependency Management](#18-services-and-dependency-management)
19. [Database Configuration](#19-database-configuration)
20. [Raw Database Queries](#20-raw-database-queries)
21. [Query Builder](#21-query-builder)
22. [Models](#22-models)
23. [Entities](#23-entities)
24. [Migrations](#24-migrations)
25. [Seeders](#25-seeders)
26. [Database Transactions](#26-database-transactions)
27. [Validation](#27-validation)
28. [Working with Forms](#28-working-with-forms)
29. [Sessions and Flashdata](#29-sessions-and-flashdata)
30. [Cookies](#30-cookies)
31. [Filters / Middleware](#31-filters--middleware)
32. [Authentication and Authorization](#32-authentication-and-authorization)
33. [Security](#33-security)
34. [File Uploads](#34-file-uploads)
35. [File Downloads](#35-file-downloads)
36. [Email](#36-email)
37. [Pagination](#37-pagination)
38. [Caching](#38-caching)
39. [Logging](#39-logging)
40. [Error Handling and Exceptions](#40-error-handling-and-exceptions)
41. [Events](#41-events)
42. [Custom Libraries](#42-custom-libraries)
43. [CLI and Spark](#43-cli-and-spark)
44. [Creating Custom Spark Commands](#44-creating-custom-spark-commands)
45. [REST APIs](#45-rest-apis)
46. [API Validation and Response Design](#46-api-validation-and-response-design)
47. [API Authentication Concepts](#47-api-authentication-concepts)
48. [Rate Limiting and Throttling](#48-rate-limiting-and-throttling)
49. [CORS](#49-cors)
50. [Testing](#50-testing)
51. [Database Testing](#51-database-testing)
52. [Mocking and Testable Code](#52-mocking-and-testable-code)
53. [Clean Architecture in CodeIgniter 4](#53-clean-architecture-in-codeigniter-4)
54. [Repository and Service Patterns](#54-repository-and-service-patterns)
55. [DTOs and Value Objects](#55-dtos-and-value-objects)
56. [Real-World CRUD Project](#56-real-world-crud-project)
57. [Real-World Invoice Approval Scenario](#57-real-world-invoice-approval-scenario)
58. [Real-World E-Commerce Scenario](#58-real-world-e-commerce-scenario)
59. [Real-World Employee Portal Scenario](#59-real-world-employee-portal-scenario)
60. [Performance Optimization](#60-performance-optimization)
61. [Deployment](#61-deployment)
62. [Apache, Nginx, and IIS Notes](#62-apache-nginx-and-iis-notes)
63. [Docker Basics](#63-docker-basics)
64. [Production Security Checklist](#64-production-security-checklist)
65. [Common Mistakes](#65-common-mistakes)
66. [Debugging Guide](#66-debugging-guide)
67. [CodeIgniter 3 vs CodeIgniter 4](#67-codeigniter-3-vs-codeigniter-4)
68. [Migrating from CodeIgniter 3](#68-migrating-from-codeigniter-3)
69. [Recommended Project Structure](#69-recommended-project-structure)
70. [Coding Standards](#70-coding-standards)
71. [Useful Spark Commands](#71-useful-spark-commands)
72. [Common Code Recipes](#72-common-code-recipes)
73. [Interview Questions](#73-interview-questions)
74. [Practice Projects](#74-practice-projects)
75. [Learning Roadmap](#75-learning-roadmap)
76. [Final Cheat Sheet](#76-final-cheat-sheet)
77. [Official References](#77-official-references)

Additional navigation:

- [Extended Master Reference — Sections 78–182](#extended-master-reference--framework-features-you-should-also-know)
- [Appendices A–H — Feature Design and Study Guides](#appendix-a--mental-model-for-every-feature)
- [Appendices I–K — Topic Map and Decision Guides](#appendix-i--master-topic-map)

---

# 1. How to Use This Handbook

Do not try to memorize CodeIgniter.

The correct way to learn it is:

1. Understand the request lifecycle.
2. Understand MVC.
3. Learn routes and controllers.
4. Learn views and forms.
5. Learn the database layer.
6. Learn validation and security.
7. Build CRUD applications.
8. Build an API.
9. Learn testing.
10. Learn architecture and production practices.

Use this handbook in three ways.

## Beginner

Read chapters in order and type the examples yourself.

## Working Developer

Jump directly to topics such as Models, Filters, Validation, REST APIs, Migrations, Sessions, or Deployment.

## Interview Preparation

Study the conceptual explanations, common mistakes, architecture sections, and interview questions.

---

# 2. What Is CodeIgniter 4?

CodeIgniter 4 is a PHP application development framework.

A framework gives you a ready-made structure and reusable components for common web-development jobs such as:

- routing URLs;
- reading HTTP requests;
- returning responses;
- validating input;
- connecting to databases;
- working with sessions;
- building APIs;
- sending email;
- handling files;
- logging;
- caching;
- testing.

Without a framework, you might manually build all of these pieces for every application.

With CodeIgniter, you concentrate more on your business logic.

## Why developers choose CodeIgniter

Typical reasons include:

- lightweight architecture;
- easy learning curve;
- fast development;
- familiar MVC structure;
- Composer support;
- command-line tools;
- database abstraction;
- testing support;
- REST-friendly controllers;
- flexible architecture.

## CodeIgniter is not magic

Suppose you want:

```text
GET /products/15
```

A framework still needs you to decide:

- which route receives the request;
- which controller runs;
- where the product is loaded;
- what happens if product 15 does not exist;
- whether a logged-in user is required;
- whether HTML or JSON is returned.

CodeIgniter provides the tools. You provide the application rules.

---

# 3. Prerequisites

CodeIgniter 4.7 requires PHP 8.2 or newer. Before installing, verify the command-line PHP used by Composer/Spark and the PHP runtime used by the web server; they can be different installations.

```bash
php --version
php -m
composer --version
```

The first command prints the CLI PHP version. `php -m` lists enabled extensions. Composer prints its own version and will report incompatible package/platform requirements during dependency resolution. The current CI4 requirements include `intl` and `mbstring`, while a database driver extension such as `mysqli`, `pdo_mysql`, `pgsql`, or `sqlite3` depends on the database you choose. Check the [official server requirements](https://codeigniter.com/user_guide/intro/requirements.html) for the exact release.

## PHP concepts you should know

At minimum:

- variables;
- arrays;
- functions;
- loops;
- conditions;
- classes and objects;
- visibility: `public`, `protected`, `private`;
- inheritance;
- interfaces;
- exceptions;
- namespaces;
- Composer basics.

Example:

```php
class Invoice
{
    public function __construct(
        private int $id,
        private float $amount
    ) {}

    public function getAmount(): float
    {
        return $this->amount;
    }
}
```

If this code is completely unfamiliar, study PHP OOP before advanced CodeIgniter topics.

## Other useful knowledge

You should also know the basics of:

- HTML;
- CSS;
- JavaScript;
- HTTP;
- SQL;
- Git;
- terminal/command prompt.

---

# 4. Installing CodeIgniter 4

Composer is normally the preferred installation method.

## Create a project

```bash
composer create-project codeigniter4/appstarter myapp
```

`create-project` downloads the AppStarter skeleton into a new `myapp/` directory, resolves framework dependencies, and creates `composer.lock`. It requires the target directory to be absent or empty. Run it as your normal development user, not as the web-server user or root.

Move into the project:

```bash
cd myapp
```

Run it:

```bash
php spark serve
```

The development server usually becomes available at:

```text
http://localhost:8080
```

## Why Composer is preferred

Composer manages PHP dependencies.

Instead of manually downloading libraries, your project records its packages in:

```text
composer.json
```

Install dependencies using:

```bash
composer install
```

Update dependencies carefully using:

```bash
composer update
```

### Important distinction

`composer install` installs versions based on `composer.lock`.

`composer update` can resolve newer dependency versions and update `composer.lock`.

In production, `composer install` is generally the safer deployment operation.

Confirm the installed framework version with:

```bash
composer show codeigniter4/framework
```

For the baseline used by this handbook, the displayed version should be 4.7.4 or a later security-compatible release. Read the official upgrade guide before changing minor versions because framework and AppStarter files may both require attention.

---

# 5. Running a CodeIgniter Application

For development:

```bash
php spark serve
```

To use another port:

```bash
php spark serve --port 8081
```

In a real production environment, the application usually runs behind:

- Apache;
- Nginx;
- IIS;
- a container;
- a managed hosting service.

## Important

The web server should expose the application's:

```text
public/
```

directory.

Do not expose the entire project directory directly to the web if you can avoid it.

Why?

Because directories such as:

```text
app/
writable/
tests/
vendor/
```

should not be publicly browsable.

---

# 6. Understanding the Project Structure

A typical CI4 project contains:

```text
app/
public/
writable/
tests/
vendor/
.env
composer.json
spark
```

## `app/`

Your main application code.

Common folders:

```text
app/
├── Config/
├── Controllers/
├── Database/
│   ├── Migrations/
│   └── Seeds/
├── Entities/
├── Filters/
├── Helpers/
├── Libraries/
├── Models/
└── Views/
```

## `public/`

Public web root.

Typical contents:

```text
index.php
assets/
css/
js/
images/
```

## `writable/`

Runtime-generated files.

Examples:

- logs;
- cache;
- session files;
- uploaded/generated files depending on your design.

The web server process must be able to write to required parts of this directory.

## `vendor/`

Composer dependencies.

Do not manually edit package files here.

## `tests/`

Automated tests.

## `.env`

Environment-specific configuration.

Examples:

- development mode;
- database credentials;
- base URL;
- third-party API credentials.

Never commit production secrets into a public repository.

## `spark`

CodeIgniter command-line entry point.

Example:

```bash
php spark
```

---

# 7. How a Request Flows Through CodeIgniter

Understanding request flow is one of the most important parts of learning any framework.

Suppose the browser requests:

```text
GET /products/15
```

A simplified request flow is:

```text
Browser
   ↓
public/index.php
   ↓
CodeIgniter bootstraps
   ↓
Routing
   ↓
Before Filters
   ↓
Controller
   ↓
Service / Model
   ↓
Database
   ↓
View or JSON Response
   ↓
After Filters
   ↓
Browser
```

## Example

Route:

```php
$routes->get('products/(:num)', 'Products::show/$1');
```

Controller:

```php
public function show(int $id)
{
    $product = $this->productModel->find($id);

    if ($product === null) {
        throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
    }

    return view('products/show', [
        'product' => $product,
    ]);
}
```

The framework maps the URL to your controller and gives your code an organized place to handle it.

---

# 8. MVC Explained Properly

MVC means:

```text
Model
View
Controller
```

## Model

Responsible primarily for data access and persistence.

Example:

```php
$product = $productModel->find(10);
```

## View

Responsible for presentation.

Example:

```php
<h1><?= esc($product['name']) ?></h1>
```

## Controller

Coordinates the request.

Example:

```php
public function show($id)
{
    $product = $this->productModel->find($id);

    return view('products/show', [
        'product' => $product,
    ]);
}
```

## Beginner mistake

Putting everything in a controller:

```php
public function checkout()
{
    // 150 lines of validation
    // SQL queries
    // payment API
    // email sending
    // invoice creation
    // stock changes
    // HTML generation
}
```

This becomes difficult to test and maintain.

A better application may have:

```text
CheckoutController
    ↓
CheckoutService
    ├── OrderModel
    ├── PaymentGateway
    ├── InventoryService
    └── EmailService
```

MVC does not mean every business rule belongs in a Model.

As your application grows, introduce service classes for business logic.

---

# 9. Routing

Routes connect URLs to controller methods.

Routes are usually configured in:

```text
app/Config/Routes.php
```

## Basic route

```php
$routes->get('/', 'Home::index');
```

Meaning:

```text
GET /
→ Home controller
→ index() method
```

## HTTP methods

```php
$routes->get('products', 'Products::index');
$routes->post('products', 'Products::create');
$routes->put('products/(:num)', 'Products::update/$1');
$routes->delete('products/(:num)', 'Products::delete/$1');
```

## Route placeholders

Number:

```php
$routes->get('users/(:num)', 'Users::show/$1');
```

Any segment:

```php
$routes->get('blog/(:segment)', 'Blog::show/$1');
```

Multiple values:

```php
$routes->get(
    'company/(:num)/employee/(:num)',
    'Employees::show/$1/$2'
);
```

## Named routes

Named routes are useful because your code does not need to hard-code URLs everywhere.

Example:

```php
$routes->get('customers/(:num)', 'Customers::show/$1', [
    'as' => 'customer.show'
]);
```

This helps when generating URLs.

## Route groups

Useful for organizing related routes:

```php
$routes->group('admin', function ($routes) {
    $routes->get('users', 'Admin\Users::index');
    $routes->get('reports', 'Admin\Reports::index');
});
```

Result:

```text
/admin/users
/admin/reports
```

## Group namespace

```php
$routes->group('api', ['namespace' => 'App\Controllers\Api'], function ($routes) {
    $routes->get('products', 'Products::index');
});
```

## Group filter

```php
$routes->group('admin', ['filter' => 'auth'], function ($routes) {
    $routes->get('dashboard', 'Admin\Dashboard::index');
});
```

## Resource routes

For REST-style controllers:

```php
$routes->resource('products');
```

This can map common REST operations.

Before using it automatically, understand exactly what routes it creates:

```bash
php spark routes
```

## Defined routes vs Auto Routing

For production applications, explicit routes are often easier to review and secure.

Avoid relying blindly on legacy automatic routing.

A security principle:

> Every reachable controller action should be intentionally reachable.

---

# 10. Controllers

Controllers receive HTTP requests and return responses.

Example:

```php
<?php

namespace App\Controllers;

class Products extends BaseController
{
    public function index()
    {
        return view('products/index');
    }
}
```

## Passing data to views

```php
public function index()
{
    $data = [
        'title' => 'Products',
        'products' => [],
    ];

    return view('products/index', $data);
}
```

View:

```php
<h1><?= esc($title) ?></h1>
```

## Keep controllers thin

Prefer:

```php
public function approve(int $invoiceId)
{
    $this->invoiceApprovalService->approve(
        $invoiceId,
        user_id()
    );

    return redirect()
        ->back()
        ->with('success', 'Invoice approved.');
}
```

Instead of putting the entire approval workflow in the controller.

## Controller dependencies

A simple application may initialize services in `initController()`:

```php
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

public function initController(
    RequestInterface $request,
    ResponseInterface $response,
    LoggerInterface $logger
) {
    parent::initController($request, $response, $logger);

    $this->invoiceService = service('invoiceService');
}
```

For large applications, design dependencies deliberately rather than turning controllers into service locators.

---

# 11. HTTP Request

CodeIgniter exposes a request object.

Example:

```php
$name = $this->request->getPost('name');
```

## Common request methods

GET query parameter:

```php
$search = $this->request->getGet('search');
```

POST value:

```php
$email = $this->request->getPost('email');
```

JSON:

```php
$data = $this->request->getJSON(true);
```

Header:

```php
$token = $this->request->getHeaderLine('Authorization');
```

Request method:

```php
$method = $this->request->getMethod();
```

Uploaded file:

```php
$file = $this->request->getFile('invoice');
```

## Important rule

Never trust request data.

This is unsafe:

```php
$model->insert($this->request->getPost());
```

unless you intentionally validate and restrict fields.

Better:

```php
$data = $this->request->getPost([
    'name',
    'email',
]);
```

Then validate it.

---

# 12. HTTP Response

Controllers can return different responses.

## HTML

```php
return view('dashboard');
```

## JSON

```php
return $this->response->setJSON([
    'status' => 'success',
    'data' => $products,
]);
```

## Status code

```php
return $this->response
    ->setStatusCode(404)
    ->setJSON([
        'message' => 'Product not found',
    ]);
```

## Redirect

```php
return redirect()->to('/login');
```

Back:

```php
return redirect()->back();
```

With flash message:

```php
return redirect()
    ->to('/products')
    ->with('success', 'Product created.');
```

## Set header

```php
return $this->response
    ->setHeader('X-App-Version', '1.0')
    ->setJSON($data);
```

---

# 13. Views

Views are presentation files.

Example:

```text
app/Views/products/index.php
```

Controller:

```php
return view('products/index', [
    'products' => $products,
]);
```

View:

```php
<h1>Products</h1>

<?php foreach ($products as $product): ?>
    <p><?= esc($product['name']) ?></p>
<?php endforeach; ?>
```

## Why `esc()` matters

This:

```php
<?= $userInput ?>
```

can become unsafe if the value contains HTML/JavaScript.

Prefer:

```php
<?= esc($userInput) ?>
```

when displaying untrusted text.

## View responsibility

A view should mainly:

- display data;
- make small presentation decisions;
- build HTML.

Avoid complex SQL or large business rules inside views.

Bad:

```php
<?php
$db = db_connect();
$orders = $db
    ->query('SELECT id, total FROM orders ORDER BY created_at DESC')
    ->getResultArray();
?>
```

Good:

```php
return view('orders/index', [
    'orders' => $orderService->getOrdersForUser($userId),
]);
```

---

# 14. Layouts, Sections, and View Cells

Large applications should avoid repeating the same HTML layout.

## Layout example

`app/Views/layouts/main.php`:

```php
<!doctype html>
<html>
<head>
    <title><?= esc($title ?? 'Application') ?></title>
</head>
<body>
    <header>
        <h1>My App</h1>
    </header>

    <main>
        <?= $this->renderSection('content') ?>
    </main>
</body>
</html>
```

Child view:

```php
<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>

<h2>Dashboard</h2>

<?= $this->endSection() ?>
```

## View Cells

A reusable UI component may be appropriate for things such as:

- notification badge;
- shopping-cart summary;
- user menu;
- KPI tile;
- sidebar widget.

The key idea is to move reusable presentation logic out of large views.

A class-based cell can be rendered from a view with `view_cell()`:

```php
<?= view_cell(
    \App\Cells\CartSummaryCell::class,
    ['userId' => $userId]
) ?>
```

The first argument identifies the cell class and the second supplies public input values. The helper returns rendered HTML. A cell should receive only the data it needs and escape untrusted output in its view; do not use cells to hide unrelated database/business workflows.

---

# 15. Helpers

Helpers contain procedural utility functions.

Load one:

```php
helper('url');
```

Load multiple:

```php
helper(['url', 'form']);
```

## Custom helper

Create:

```text
app/Helpers/invoice_helper.php
```

Example:

```php
<?php

function format_invoice_number(int $id): string
{
    return 'INV-' . str_pad((string) $id, 6, '0', STR_PAD_LEFT);
}
```

Use:

```php
helper('invoice');

echo format_invoice_number(23);
```

## When should you use a helper?

Good for small stateless utility functions.

Examples:

- formatting;
- simple text helpers;
- URL utilities;
- date formatting.

Avoid putting complex workflows in helpers.

Bad:

```php
process_full_invoice_approval_workflow();
```

Better:

```text
InvoiceApprovalService
```

---

# 16. Configuration and Environment Variables

Configuration classes are located under:

```text
app/Config/
```

Examples:

```text
App.php
Database.php
Filters.php
Routes.php
Validation.php
```

## `.env`

Copy or rename the provided environment file as appropriate and configure your environment.

Example:

```ini
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = localhost
database.default.database = ci4_demo
database.default.username = root
database.default.password = secret
database.default.DBDriver = MySQLi
```

## Environment modes

Typical values include:

```text
development
testing
production
```

In production, detailed error information should not be exposed to end users.

## Never commit secrets

Do not commit:

```text
database passwords
SMTP passwords
API secrets
JWT signing secrets
cloud credentials
```

Use environment-specific secret management.

---

# 17. Namespaces and Autoloading

Namespaces prevent class-name collisions.

Example:

```php
namespace App\Services;
```

Import another class:

```php
use App\Models\InvoiceModel;
```

Then:

```php
$model = new InvoiceModel();
```

## PSR-4 concept

A namespace maps to a directory.

Typical CodeIgniter application namespace:

```text
App\
```

maps to:

```text
app/
```

Therefore:

```php
App\Services\InvoiceService
```

normally lives in:

```text
app/Services/InvoiceService.php
```

## Why this matters

Once you understand PSR-4, project organization becomes much clearer.

---

# 18. Services and Dependency Management

CodeIgniter services provide shared framework or application objects.

Examples include services for:

- request;
- response;
- logger;
- validation;
- cache.

Using helper:

```php
$logger = service('logger');
```

You can also define your own services.

## Example business service

`app/Services/InvoiceService.php`:

```php
<?php

namespace App\Services;

use App\Models\InvoiceModel;

class InvoiceService
{
    public function __construct(
        private ?InvoiceModel $invoiceModel = null
    ) {
        $this->invoiceModel ??= new InvoiceModel();
    }

    public function markAsPaid(int $invoiceId): bool
    {
        return $this->invoiceModel->update($invoiceId, [
            'status' => 'paid',
        ]);
    }
}
```

To make `service('invoiceService')` work, register the factory in `app/Config/Services.php`:

```php
<?php

namespace Config;

use App\Models\InvoiceModel;
use App\Services\InvoiceService;
use CodeIgniter\Config\BaseService;

class Services extends BaseService
{
    public static function invoiceService(
        bool $getShared = true
    ): InvoiceService {
        if ($getShared) {
            return static::getSharedInstance(
                'invoiceService'
            );
        }

        return new InvoiceService(new InvoiceModel());
    }
}
```

`service('invoiceService')` calls this method and normally returns a shared instance. Passing `false` as the second argument—`service('invoiceService', false)`—requests a new instance. `getSharedInstance()` calls the same factory with sharing disabled and stores the resulting object. Custom service names and factory method names must match.

Services are convenient at framework boundaries such as controllers and commands. Domain classes are easier to test when their dependencies are passed explicitly through constructors rather than looked up through `service()` inside every method.

## Why services matter

Suppose creating an order requires:

1. validating stock;
2. creating order;
3. creating order items;
4. reducing stock;
5. generating invoice;
6. sending email.

That is business logic, not simply database CRUD.

A service class is a cleaner home for this process.

---

# 19. Database Configuration

Typical database configuration in `.env`:

```ini
database.default.hostname = localhost
database.default.database = shop
database.default.username = root
database.default.password = secret
database.default.DBDriver = MySQLi
database.default.DBPrefix =
database.default.port = 3306
```

Connect:

```php
$db = \Config\Database::connect();
```

## Multiple database groups

Applications may use:

```text
default
reporting
legacy
analytics
```

Example idea:

```php
$legacyDb = \Config\Database::connect('legacy');
```

Use multiple connections only when the business need justifies the added complexity.

---

# 20. Raw Database Queries

Run a parameterized query:

```php
$db = db_connect();

$query = $db->query(
    'SELECT * FROM products WHERE id = ?',
    [$id]
);

$product = $query->getRowArray();
```

## Never concatenate untrusted SQL values

Unsafe:

```php
$sql = "SELECT * FROM users WHERE email = '$email'";
```

Better:

```php
$query = $db->query(
    'SELECT * FROM users WHERE email = ?',
    [$email]
);
```

Bindings make SQL injection much harder.

## Result formats

Multiple rows:

```php
$rows = $query->getResultArray();
```

Single row:

```php
$row = $query->getRowArray();
```

Object results are also available when appropriate.

---

# 21. Query Builder

Query Builder creates SQL through PHP methods.

## Select

```php
$db = db_connect();

$builder = $db->table('products');

$products = $builder
    ->select('id, name, price')
    ->where('active', 1)
    ->orderBy('name', 'ASC')
    ->get()
    ->getResultArray();
```

## Insert

```php
$builder->insert([
    'name' => 'Keyboard',
    'price' => 1499,
]);
```

## Update

```php
$builder
    ->where('id', 10)
    ->update([
        'price' => 1399,
    ]);
```

## Delete

```php
$builder
    ->where('id', 10)
    ->delete();
```

## LIKE

```php
$builder->like('name', $search);
```

## Multiple conditions

```php
$builder
    ->where('status', 'active')
    ->where('price >=', 1000)
    ->where('price <=', 5000);
```

## Join

```php
$orders = $db->table('orders o')
    ->select('o.id, o.total, u.name AS customer_name')
    ->join('users u', 'u.id = o.user_id')
    ->where('o.status', 'paid')
    ->get()
    ->getResultArray();
```

## Grouping conditions

SQL requirement:

```sql
WHERE status = 'open'
AND (priority = 'high' OR overdue = 1)
```

Builder:

```php
$builder
    ->where('status', 'open')
    ->groupStart()
        ->where('priority', 'high')
        ->orWhere('overdue', 1)
    ->groupEnd();
```

---

# 22. Models

A Model wraps common database operations.

Example:

```php
<?php

namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';

    protected $allowedFields = [
        'name',
        'sku',
        'price',
        'status',
    ];

    protected $useTimestamps = true;
}
```

Use:

```php
$model = new ProductModel();

$product = $model->find(10);
```

## Find all

```php
$products = $model->findAll();
```

## First

```php
$product = $model
    ->where('sku', 'KB-100')
    ->first();
```

## Insert

```php
$model->insert([
    'name' => 'Keyboard',
    'sku' => 'KB-100',
    'price' => 1499,
    'status' => 'active',
]);
```

## Update

```php
$model->update(10, [
    'price' => 1599,
]);
```

## Delete

```php
$model->delete(10);
```

## Allowed fields

`$allowedFields` is extremely important.

It controls fields that may be changed through mass assignment.

Do not blindly allow sensitive columns such as:

```text
is_admin
role
password_hash
credit_limit
approval_status
```

unless your application specifically intends to update them.

## Model validation

Models can define validation rules:

```php
protected $validationRules = [
    'name' => 'required|min_length[3]|max_length[100]',
    'price' => 'required|decimal',
];
```

## Callbacks

Models provide callbacks around database operations.

Typical use cases:

- normalizing data;
- setting generated fields;
- auditing;
- transforming results.

Do not hide large business workflows inside callbacks because they become difficult to understand.

---

# 23. Entities

Entities represent a row as a domain-style object.

Example:

```php
<?php

namespace App\Entities;

use CodeIgniter\Entity\Entity;

class User extends Entity
{
    protected $casts = [
        'id' => 'integer',
        'active' => 'boolean',
    ];

    public function getDisplayName(): string
    {
        return trim(
            ($this->attributes['first_name'] ?? '') . ' ' .
            ($this->attributes['last_name'] ?? '')
        );
    }
}
```

Model:

```php
protected $returnType = \App\Entities\User::class;
```

Then:

```php
$user = $userModel->find(1);

echo $user->getDisplayName();
```

## When entities are useful

Use entities when:

- data needs typed transformations;
- domain behavior belongs near the data object;
- you want cleaner object-style code.

For tiny CRUD systems, arrays may be enough.

Do not introduce abstraction only for fashion.

---

# 24. Migrations

Migrations version your database schema.

Generate:

```bash
php spark make:migration CreateProductsTable
```

Example:

```php
<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateProductsTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 150,
            ],
            'price' => [
                'type' => 'DECIMAL',
                'constraint' => '10,2',
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);

        $this->forge->addKey('id', true);

        $this->forge->createTable('products');
    }

    public function down()
    {
        $this->forge->dropTable('products');
    }
}
```

Run:

```bash
php spark migrate
```

Rollback:

```bash
php spark migrate:rollback
```

## Why migrations matter

Imagine five developers.

Developer A manually adds:

```text
approval_status
```

to their local database.

Developer B does not know.

Production also lacks it.

The application breaks.

Migration files make schema changes part of version-controlled code.

---

# 25. Seeders

Seeders insert initial or sample data.

Generate:

```bash
php spark make:seeder ProductSeeder
```

Example:

```php
<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'name' => 'Keyboard',
                'price' => 1499,
            ],
            [
                'name' => 'Mouse',
                'price' => 799,
            ],
        ];

        $this->db->table('products')->insertBatch($data);
    }
}
```

Run:

```bash
php spark db:seed ProductSeeder
```

## Good seed data

Seeders are useful for:

- lookup tables;
- roles;
- permissions;
- development data;
- automated tests.

Avoid placing unknown production secrets into seed files.

---

# 26. Database Transactions

Transactions make multiple database changes act like one unit.

Example business operation:

```text
Create order
Create order items
Reduce inventory
Record payment
```

If the final step fails, leaving the first three committed may produce inconsistent data.

Example:

```php
$db = db_connect();

$db->transStart();

$orderModel->insert($orderData);

$orderId = $orderModel->getInsertID();

foreach ($items as $item) {
    $orderItemModel->insert([
        'order_id' => $orderId,
        'product_id' => $item['product_id'],
        'quantity' => $item['quantity'],
    ]);
}

$inventoryService->reserve($items);

$db->transComplete();

if ($db->transStatus() === false) {
    throw new RuntimeException('Order transaction failed.');
}
```

## When to use transactions

Use them when multiple writes must succeed or fail together.

Common examples:

- finance;
- invoice posting;
- stock transfers;
- order creation;
- account balance changes.

---

# 27. Validation

Validation protects your application from malformed or incomplete input.

Example rules:

```php
$rules = [
    'name' => 'required|min_length[3]|max_length[100]',
    'email' => 'required|valid_email',
    'age' => 'permit_empty|integer|greater_than_equal_to[18]',
];
```

Validate:

```php
if (! $this->validate($rules)) {
    return view('users/create', [
        'validation' => $this->validator,
    ]);
}
```

## API validation

```php
$data = $this->request->getJSON(true);

$validation = service('validation');

$validation->setRules([
    'sku' => 'required|max_length[50]',
    'price' => 'required|decimal|greater_than[0]',
]);

if (! $validation->run($data)) {
    return $this->response
        ->setStatusCode(422)
        ->setJSON([
            'message' => 'Validation failed',
            'errors' => $validation->getErrors(),
        ]);
}
```

## Validation is not authorization

These are different.

Validation asks:

```text
Is this input structurally valid?
```

Authorization asks:

```text
Is this user allowed to perform this action?
```

Both are required.

---

# 28. Working with Forms

Simple form:

```php
<form method="post" action="<?= site_url('products') ?>">
    <?= csrf_field() ?>

    <label>Name</label>
    <input type="text" name="name">

    <label>Price</label>
    <input type="number" step="0.01" name="price">

    <button type="submit">Save</button>
</form>
```

Controller:

```php
public function create()
{
    $rules = [
        'name' => 'required|max_length[150]',
        'price' => 'required|decimal',
    ];

    if (! $this->validate($rules)) {
        return redirect()
            ->back()
            ->withInput()
            ->with('errors', $this->validator->getErrors());
    }

    $this->productModel->insert([
        'name' => $this->request->getPost('name'),
        'price' => $this->request->getPost('price'),
    ]);

    return redirect()
        ->to('/products')
        ->with('success', 'Product created.');
}
```

## Old input

After a validation error:

```php
value="<?= old('name') ?>"
```

## Error display

```php
<?php if ($errors = session('errors')): ?>
    <ul>
        <?php foreach ($errors as $error): ?>
            <li><?= esc($error) ?></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>
```

---

# 29. Sessions and Flashdata

Sessions store state between requests. The browser receives a session identifier cookie; the configured handler stores the associated session data. In `app/Config/Session.php`, choose and configure a file, database, Redis or Memcached handler appropriate to the deployment.

For the file handler, the save path must be writable and outside the public web root. Multiple web servers need shared/sticky session design instead of unrelated local files. In production, also review cookie name, lifetime, `Secure`, `HttpOnly`, SameSite behavior, session ID regeneration and cleanup.

Example:

```php
$session = session();

$session->set('user_id', 42);
```

Read:

```php
$userId = session('user_id');
```

Remove:

```php
session()->remove('user_id');
```

Destroy:

```php
session()->destroy();
```

`set($key, $value)` stores data. `session('user_id')` reads a key and returns its value or `null` when absent. `remove($key)` deletes selected data. `destroy()` invalidates the session and is normally used during logout. Regenerate the session ID after authentication or a privilege change to reduce session-fixation risk.

## Flashdata

Flashdata is temporary session data intended for the next request.

Set:

```php
return redirect()
    ->to('/products')
    ->with('success', 'Product saved.');
```

View:

```php
<?php if (session('success')): ?>
    <div>
        <?= esc(session('success')) ?>
    </div>
<?php endif; ?>
```

## Use case

The Post/Redirect/Get flow:

```text
POST /products
→ create product
→ redirect to GET /products
→ show one-time success message
```

This helps prevent accidental duplicate form submission on refresh.

---

# 30. Cookies

Cookies are stored in the user's browser.

Common uses:

- preferences;
- remember-me identifiers;
- non-sensitive UI settings.

Never put secrets directly in an ordinary cookie.

Example concept:

```php
$this->response->setCookie(
    'theme',
    'dark',
    3600,
    '',
    '/',
    '',
    true,
    true,
    'Lax'
);
```

The first three arguments are name, value and lifetime in seconds. The later arguments set domain, path, prefix, `Secure`, `HttpOnly` and SameSite. `setCookie()` returns the response object for chaining. This example assumes production HTTPS; a Secure cookie is not sent over plain local HTTP. Return the response carrying the cookie, and when redirecting set the cookie on the `RedirectResponse` so it is not lost. Use named/configured options if that is clearer for your version, and do not copy positional security settings without understanding them.

Read a request cookie:

```php
$theme = $this->request->getCookie('theme');
```

It returns the client-supplied string or `null`; validate it against an allowlist such as `['light', 'dark']`. Delete a cookie by returning an expired cookie through `deleteCookie()` with the same path/domain scope used when it was created.

## Session vs Cookie

Session:

```text
state primarily managed server-side
```

Cookie:

```text
stored in browser and sent with matching requests
```

Use secure cookie settings in production, especially:

- Secure;
- HttpOnly;
- SameSite.

---

# 31. Filters / Middleware

Filters run before or after controller execution.

Typical uses:

- authentication;
- authorization;
- CSRF;
- API token checking;
- audit logging;
- request throttling;
- response headers.

Generate:

```bash
php spark make:filter AuthFilter
```

Simplified filter:

```php
<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if (! session('user_id')) {
            return redirect()->to('/login');
        }
    }

    public function after(
        RequestInterface $request,
        ResponseInterface $response,
        $arguments = null
    ) {
        // Optional after logic.
    }
}
```

Register alias in filter configuration:

```php
public array $aliases = [
    'auth' => \App\Filters\AuthFilter::class,
];
```

Use on route:

```php
$routes->get('dashboard', 'Dashboard::index', [
    'filter' => 'auth',
]);
```

## Scenario

An HR application has:

```text
/employee/profile
/hr/employees
/admin/settings
```

Authentication asks:

```text
Is the person logged in?
```

Authorization asks:

```text
Does the logged-in user have HR or Admin permission?
```

Use filters to stop unauthorized requests before reaching business logic.

---

# 32. Authentication and Authorization

Authentication means:

```text
Who are you?
```

Authorization means:

```text
What are you allowed to do?
```

Do not build a serious authentication system casually.

For CodeIgniter 4, CodeIgniter Shield is the official authentication and authorization framework and is generally the right place to begin for modern CI4 authentication needs.

## Typical authentication features

- login;
- logout;
- password hashing;
- password reset;
- remember me;
- email verification;
- session authentication;
- token authentication.

## Authorization concepts

### Roles

Example:

```text
Admin
Finance
HR
Employee
```

### Permissions

Example:

```text
invoice.view
invoice.approve
invoice.post
user.manage
report.export
```

Permissions are usually more flexible than hard-coded role checks.

Instead of:

```php
if ($user->role === 'FINANCE') {
```

prefer a concept like:

```php
if ($user->can('invoice.approve')) {
```

when your authentication library supports it.

---

# 33. Security

Security must be designed into the application.

## 33.1 SQL Injection

Avoid string-concatenated SQL.

Bad:

```php
$sql = "SELECT * FROM users WHERE id = " . $_GET['id'];
```

Use:

- Query Builder;
- Model methods;
- bound parameters.

## 33.2 Cross-Site Scripting (XSS)

Escape output:

```php
<?= esc($comment) ?>
```

Be especially careful when displaying user-provided HTML.

## 33.3 CSRF

CSRF attacks try to make an authenticated browser perform an unwanted request.

For forms:

```php
<?= csrf_field() ?>
```

Enable/configure the framework CSRF protection appropriately for your application.

## 33.4 Mass Assignment

Never casually do:

```php
$userModel->save($this->request->getPost());
```

Suppose a malicious POST adds:

```text
is_admin=1
```

Restrict fields explicitly.

## 33.5 Passwords

Never store plaintext passwords.

Use modern password hashing through the authentication system or PHP password APIs.

Never:

```php
md5($password)
```

for password storage.

## 33.6 Access Control

Never trust the UI to enforce permission.

Hiding a button is not security.

Backend must still verify permission.

## 33.7 File Uploads

Never trust:

- original filename;
- extension alone;
- MIME claim alone;
- client-supplied path.

Generate safe names and validate the file.

## 33.8 Production errors

Do not display stack traces and secrets to production users.

Log detailed server-side information instead.

---

# 34. File Uploads

Form:

```html
<form method="post" enctype="multipart/form-data">
    <input type="file" name="invoice">
    <button type="submit">Upload</button>
</form>
```

Controller:

```php
$file = $this->request->getFile('invoice');

if (! $file || ! $file->isValid()) {
    return redirect()
        ->back()
        ->with('error', 'Invalid upload.');
}
```

Generate random name:

```php
$newName = $file->getRandomName();

$file->move(
    WRITEPATH . 'uploads/invoices',
    $newName
);
```

## Validation example

```php
$rules = [
    'invoice' => [
        'label' => 'Invoice',
        'rules' => [
            'uploaded[invoice]',
            'max_size[invoice,10240]',
            'ext_in[invoice,pdf,jpg,jpeg,png]',
            'mime_in[invoice,application/pdf,image/jpeg,image/png]',
        ],
    ],
];
```

`uploaded` requires a successfully uploaded file. `max_size` uses kilobytes, so `10240` is about 10 MiB. `ext_in` limits extensions and `mime_in` checks the detected media type. No single signal proves a document is safe; keep an explicit random destination name, store sensitive files outside `public/`, and add malware/content scanning where the risk requires it.

> **Version warning:** CI4 4.7.4 fixed a path-traversal vulnerability when `UploadedFile::move()` was called without an explicit filename. Even on a patched version, passing `getRandomName()` as shown above makes the storage decision explicit.

## Scenario: invoice OCR

Upload pipeline:

```text
Browser upload
    ↓
Validate file
    ↓
Generate safe filename
    ↓
Store outside public area
    ↓
Create DB document record
    ↓
Queue/process OCR
    ↓
Store extracted JSON
    ↓
User reviews result
```

Never make the browser wait for a very expensive document-processing job if asynchronous processing is available in your architecture.

---

# 35. File Downloads

A protected download should check authorization before returning the file.

Example concept:

```php
public function download(int $documentId)
{
    $document = $this->documentModel->find($documentId);

    if (! $document) {
        throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
    }

    if (! $this->documentPolicy->canDownload($document, $this->currentUser)) {
        return $this->response->setStatusCode(403);
    }

    $path = WRITEPATH . 'documents/' . $document['stored_name'];

    return $this->response->download($path, null)
        ->setFileName($document['original_name']);
}
```

Do not expose sensitive filesystem paths directly.

---

# 36. Email

Common use cases:

- account verification;
- password reset;
- invoice notification;
- approval reminder;
- reports.

Example:

```php
$email = service('email');

$email->setTo('user@example.com');
$email->setSubject('Invoice Approved');
$email->setMessage('Your invoice has been approved.');

if (! $email->send()) {
    log_message('error', 'Invoice email failed.');
}
```

`setTo()`, `setSubject()` and `setMessage()` configure the message and return the Email object. `send()` attempts delivery and returns a Boolean; it does not guarantee that the recipient ultimately reads or accepts the message. Configure SMTP timeouts/TLS, avoid logging credentials or message secrets, and use retryable jobs for important delivery.

Configure SMTP through environment/configuration.

## Production advice

For high-volume email, do not rely on a long-running HTTP request.

Prefer a queued background process if your architecture supports one.

---

# 37. Pagination

Pagination prevents loading thousands of rows at once.

Example:

```php
$products = $productModel
    ->where('status', 'active')
    ->paginate(20);

return view('products/index', [
    'products' => $products,
    'pager' => $productModel->pager,
]);
```

View:

```php
<?= $pager->links() ?>
```

## Why pagination matters

Imagine:

```text
1,000,000 invoices
```

Loading all rows is:

- slow;
- memory-heavy;
- bad for database load;
- unusable in browser.

Always paginate large result sets.

---

# 38. Caching

Caching stores expensive results temporarily so they do not need to be rebuilt on every request.

Good candidates:

- reference/master data;
- dashboard summaries;
- configuration derived from DB;
- expensive report metadata;
- API responses where freshness requirements allow it.

Example concept:

```php
$cache = service('cache');

$departments = $cache->get('departments');

if ($departments === null) {
    $departments = $departmentModel->findAll();

    $cache->save(
        'departments',
        $departments,
        600
    );
}
```

## Cache invalidation

The difficult question is not:

```text
How do I cache?
```

It is:

```text
When does this cached value become wrong?
```

Example:

If administrators update department data, clear or refresh the corresponding cache.

---

# 39. Logging

Logging is essential in production.

Example:

```php
log_message(
    'info',
    'Invoice {invoiceId} approved by user {userId}',
    [
        'invoiceId' => $invoiceId,
        'userId' => $userId,
    ]
);
```

Typical log levels include concepts such as:

- emergency;
- alert;
- critical;
- error;
- warning;
- notice;
- info;
- debug.

## What to log

Useful:

```text
request correlation ID
user ID
invoice ID
operation
result
error code
duration
external service response status
```

Avoid logging:

```text
passwords
access tokens
full card numbers
private keys
unnecessary personal data
```

---

# 40. Error Handling and Exceptions

Do not silently swallow failures.

Bad:

```php
try {
    $service->postInvoice();
} catch (\Throwable $e) {
    return 'failed';
}
```

Better:

```php
try {
    $service->postInvoice();
} catch (\Throwable $e) {
    log_message('error', 'Invoice posting failed: {message}', [
        'message' => $e->getMessage(),
    ]);

    return redirect()
        ->back()
        ->with('error', 'Unable to post invoice.');
}
```

## API example

Return stable error formats:

```json
{
  "status": "error",
  "code": "INVOICE_NOT_FOUND",
  "message": "Invoice was not found."
}
```

Do not return database stack traces to API clients.

---

# 41. Events

Events allow code to react when something occurs.

Concept:

```text
Invoice approved
    ├── write audit log
    ├── update metric
    └── send notification
```

Without events, you might tightly couple all of those actions.

Use events when they genuinely reduce coupling.

Do not hide the central business workflow across dozens of event listeners.

If a process must happen transactionally, make that relationship explicit.

---

# 42. Custom Libraries

Create reusable application classes.

Example:

```text
app/Libraries/PdfInvoiceParser.php
```

```php
<?php

namespace App\Libraries;

class PdfInvoiceParser
{
    public function parse(string $filePath): array
    {
        // Parse document.
        return [];
    }
}
```

Use:

```php
$parser = new \App\Libraries\PdfInvoiceParser();

$data = $parser->parse($path);
```

## Library vs Service

There is no universal law, but a practical distinction is:

```text
Library:
reusable capability

Service:
application/business operation
```

Example:

```text
PdfTextExtractor → library/component
InvoiceProcessingService → business service
```

---

# 43. CLI and Spark

Run:

```bash
php spark
```

Common development commands include:

```bash
php spark serve
php spark routes
php spark migrate
php spark migrate:rollback
php spark db:seed ProductSeeder
php spark cache:clear
```

Generators reduce repetitive boilerplate.

Examples:

```bash
php spark make:controller Products
php spark make:model ProductModel
php spark make:entity Product
php spark make:migration CreateProductsTable
php spark make:seeder ProductSeeder
php spark make:filter AuthFilter
php spark make:test ProductServiceTest
```

## Why CLI commands are valuable

Suppose your application must:

```text
send overdue invoice reminders every morning
```

Do not create a public URL:

```text
/send-reminders
```

that anyone might accidentally call.

A custom Spark command is usually a better architecture.

---

# 44. Creating Custom Spark Commands

Example command goal:

```bash
php spark invoices:send-reminders
```

Conceptual class:

```php
<?php

namespace App\Commands;

use CodeIgniter\CLI\BaseCommand;
use CodeIgniter\CLI\CLI;

class SendInvoiceReminders extends BaseCommand
{
    protected $group = 'Invoices';
    protected $name = 'invoices:send-reminders';
    protected $description = 'Send reminders for overdue invoices.';

    public function run(array $params)
    {
        $service = service('invoiceReminderService');

        $count = $service->sendOverdueReminders();

        CLI::write("Sent {$count} reminders.");
    }
}
```

`service('invoiceReminderService')` requires a matching static factory in `app/Config/Services.php`, or the command should construct/inject the service explicitly. `sendOverdueReminders()` is an application method expected to return the number sent; `CLI::write()` prints that count to the terminal.

Then schedule at OS/container level.

Linux cron example:

```cron
0 9 * * * cd /var/www/app && php spark invoices:send-reminders
```

For production scheduling, also consider:

- locking to prevent duplicate runs;
- logging;
- retries;
- failure alerts;
- idempotency.

---

# 45. REST APIs

A REST-style API exposes resources using HTTP methods.

Example:

```text
GET    /api/products
GET    /api/products/10
POST   /api/products
PUT    /api/products/10
DELETE /api/products/10
```

## Resource controller

CodeIgniter provides API-oriented controller support such as `ResourceController`.

Example:

```php
<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;

class Products extends ResourceController
{
    protected $modelName = \App\Models\ProductModel::class;
    protected $format = 'json';

    public function index()
    {
        return $this->respond(
            $this->model->findAll()
        );
    }

    public function show($id = null)
    {
        $product = $this->model->find($id);

        if (! $product) {
            return $this->failNotFound('Product not found.');
        }

        return $this->respond($product);
    }
}
```

## Create

```php
public function create()
{
    $data = $this->request->getJSON(true);

    if (! is_array($data)) {
        return $this->fail(
            'Request body must be a JSON object.',
            400
        );
    }

    $payload = [
        'name' => $data['name'] ?? null,
        'price' => $data['price'] ?? null,
    ];

    if (! $this->validateData($payload, [
        'name' => 'required|max_length[150]',
        'price' => 'required|decimal',
    ])) {
        return $this->failValidationErrors(
            $this->validator->getErrors()
        );
    }

    $id = $this->model->insert($payload, true);

    return $this->respondCreated([
        'id' => $id,
        'message' => 'Product created.',
    ]);
}
```

`getJSON(true)` requests associative arrays, while the `is_array()` check rejects an empty/non-object body. Malformed JSON should be mapped to a `400 Bad Request` by your API exception/error policy. Building `$payload` explicitly prevents extra JSON keys from reaching the model even when `$allowedFields` later changes. `validateData()` returns a Boolean and populates `$this->validator`; `insert($payload, true)` returns the new ID or `false`.

## REST principle

Use HTTP status codes properly.

Examples:

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
500 Internal Server Error
```

---

# 46. API Validation and Response Design

A consistent API is easier to consume.

Recommended success shape:

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "name": "Keyboard"
  }
}
```

Recommended validation error shape:

```json
{
  "status": "error",
  "code": "VALIDATION_FAILED",
  "message": "Some fields are invalid.",
  "errors": {
    "name": "The name field is required."
  }
}
```

## Do not return random formats

Bad API:

Endpoint A:

```json
{"ok": true}
```

Endpoint B:

```json
{"status": 1}
```

Endpoint C:

```json
["success"]
```

Choose conventions and keep them consistent.

---

# 47. API Authentication Concepts

Possible strategies include:

- session cookies;
- personal access tokens;
- bearer tokens;
- OAuth-style flows;
- JWT in architectures that actually need it.

Do not assume JWT is always the best option.

For many first-party web applications, secure server-side sessions can be simpler.

For API tokens, important requirements include:

- secure generation;
- secure storage;
- expiration;
- revocation;
- scope/permissions;
- rotation;
- audit trail.

Use a maintained authentication solution rather than inventing cryptography.

---

# 48. Rate Limiting and Throttling

Rate limiting protects endpoints from excessive requests.

Examples:

```text
Login: 5 attempts / minute
Password reset: limited per account/IP
Public API: 100 requests / minute
OCR upload: stricter because processing is expensive
```

A throttling filter can reject excess requests before expensive business logic executes.

Possible response:

```http
HTTP/1.1 429 Too Many Requests
```

## Do not use IP alone for every rule

Users may share corporate NAT addresses.

Depending on the endpoint, a limit may consider:

- authenticated account;
- API key;
- IP;
- endpoint;
- tenant.

---

# 49. CORS

CORS controls browser requests across origins.

Example:

Frontend:

```text
https://app.example.com
```

API:

```text
https://api.example.com
```

Browsers enforce cross-origin rules.

Do not blindly configure:

```text
Access-Control-Allow-Origin: *
```

for sensitive authenticated APIs.

Allow only the origins and methods required by your application.

CORS is not authentication.

---

# 50. Testing

Automated tests give you confidence that changes did not break existing behavior.

Testing levels:

```text
Unit Test
Integration Test
Feature Test
End-to-End Test
```

## Unit test

Tests a small class.

Example:

```php
public function testDiscountCalculation(): void
{
    $service = new DiscountService();

    $result = $service->calculate(1000, 10);

    $this->assertSame(900.0, $result);
}
```

The test class should extend `CodeIgniter\Test\CIUnitTestCase` (or another appropriate PHPUnit/CI4 base class), and the test filename/class belongs under `tests/`. Run the suite from the project root:

```bash
composer test
```

The command exits non-zero when tests fail, making it suitable for CI pipelines. Check `composer.json` if the project defines a different script.

## Feature test

Tests application behavior closer to HTTP.

Concept:

```php
use CodeIgniter\Test\FeatureTestTrait;

class ProductRoutesTest extends \CodeIgniter\Test\CIUnitTestCase
{
    use FeatureTestTrait;

    public function testProductListLoads(): void
    {
        $result = $this->get('/products');

        $result->assertStatus(200);
    }
}
```

`FeatureTestTrait::get()` simulates a GET request through the application and returns a test response. `assertStatus(200)` fails the test unless the response status is exactly 200. Add authentication/session data and database setup when the route requires them.

## What to test

High-value areas:

- financial calculations;
- access control;
- invoice status transitions;
- order totals;
- workflow routing;
- API validation;
- login;
- permissions.

Do not chase coverage percentage while ignoring important behavior.

---

# 51. Database Testing

Database tests should be repeatable.

A good database test:

1. starts from known schema/data;
2. runs operation;
3. checks database result;
4. cleans up or uses isolated database state.

Test scenario:

```text
Given invoice status = pending
When Finance Controller approves
Then status = approved
And audit row exists
And posting event is scheduled
```

Avoid tests that depend on random production-like data already present in a developer's local database.

CI4's `DatabaseTestTrait` provides database assertions and controlled test setup:

```php
use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\DatabaseTestTrait;

class InvoiceModelTest extends CIUnitTestCase
{
    use DatabaseTestTrait;

    protected $refresh = true;
    protected $namespace = 'App';

    public function testInsertCreatesPendingInvoice(): void
    {
        $model = new \App\Models\InvoiceModel();

        $id = $model->insert([
            'invoice_no' => 'INV-1001',
            'status' => 'pending',
        ], true);

        $this->seeInDatabase('invoices', [
            'id' => $id,
            'status' => 'pending',
        ]);
    }
}
```

`$refresh = true` refreshes the database state using migrations around tests according to the trait's configuration. `$namespace` tells it where to discover application migrations. `seeInDatabase()` fails unless a matching row exists. Always point the `testing` environment at an isolated test database—never production.

---

# 52. Mocking and Testable Code

Consider:

```php
class PaymentService
{
    public function pay()
    {
        $response = file_get_contents('https://payment.example.com');
    }
}
```

Hard to test.

Better:

```php
class PaymentService
{
    public function __construct(
        private PaymentGatewayInterface $gateway
    ) {}

    public function pay(Order $order)
    {
        return $this->gateway->charge($order);
    }
}
```

Test with:

```text
FakePaymentGateway
```

This allows you to test without contacting a real payment provider.

Testable design usually comes from:

- small classes;
- explicit dependencies;
- pure functions where possible;
- avoiding hidden global state;
- separating I/O from business logic.

---

# 53. Clean Architecture in CodeIgniter 4

A small application may work perfectly with:

```text
Controller
Model
View
```

As the application grows, you may use:

```text
Controller
    ↓
Service
    ↓
Repository / Model
    ↓
Database
```

With domain objects:

```text
Controller
    ↓
Application Service
    ↓
Domain
    ↓
Repository Interface
    ↓
Infrastructure
```

You do not need maximum architecture for every project.

## Rule

> Add structure when it removes real complexity, not because an architecture diagram looks impressive.

---

# 54. Repository and Service Patterns

## Repository

A repository centralizes data-access queries for a domain.

Example:

```php
interface InvoiceRepositoryInterface
{
    public function findById(int $id): ?array;

    public function findPendingForApprover(int $userId): array;

    public function saveStatus(int $id, string $status): void;
}
```

Implementation:

```php
class InvoiceRepository implements InvoiceRepositoryInterface
{
    public function __construct(
        private InvoiceModel $model
    ) {}

    public function findById(int $id): ?array
    {
        return $this->model->find($id);
    }

    public function findPendingForApprover(int $userId): array
    {
        return $this->model
            ->where('approver_id', $userId)
            ->where('status', 'pending')
            ->findAll();
    }

    public function saveStatus(int $id, string $status): void
    {
        $this->model->update($id, [
            'status' => $status,
        ]);
    }
}
```

## Service

Service holds business use cases.

```php
class ApproveInvoiceService
{
    public function __construct(
        private InvoiceRepositoryInterface $invoices
    ) {}

    public function approve(int $invoiceId, int $userId): void
    {
        $invoice = $this->invoices->findById($invoiceId);

        if (! $invoice) {
            throw new DomainException('Invoice not found.');
        }

        if ((int) $invoice['approver_id'] !== $userId) {
            throw new DomainException('Not allowed.');
        }

        if ($invoice['status'] !== 'pending') {
            throw new DomainException('Invoice cannot be approved.');
        }

        $this->invoices->saveStatus(
            $invoiceId,
            'approved'
        );
    }
}
```

## Why separate them?

Repository answers:

```text
How do I fetch/save data?
```

Service answers:

```text
What must happen for this business operation?
```

---

# 55. DTOs and Value Objects

DTO = Data Transfer Object.

Instead of passing an arbitrary array:

```php
$service->createInvoice($data);
```

you can use:

```php
final class CreateInvoiceData
{
    public function __construct(
        public readonly string $invoiceNumber,
        public readonly int $vendorId,
        public readonly float $amount
    ) {}
}
```

Then:

```php
$dto = new CreateInvoiceData(
    invoiceNumber: $data['invoice_number'],
    vendorId: (int) $data['vendor_id'],
    amount: (float) $data['amount'],
);
```

## Benefits

- clearer contract;
- better IDE support;
- fewer misspelled array keys;
- easier testing.

Do not overuse DTOs in tiny scripts.

---

# 56. Real-World CRUD Project

This module implements create, read, update and delete behavior. It assumes the application has enabled the CSRF filter for browser POST forms and configured a `permission:product.manage` filter alias through its authentication/authorization layer. Public read routes and protected write routes are shown separately.

## Database table

```sql
CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    sku VARCHAR(50) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL,
    UNIQUE KEY uq_products_sku (sku)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Create the equivalent schema through a migration in a real CI4 project. `DECIMAL` avoids binary floating-point storage for money, and the unique key is the final concurrency-safe guarantee that two rows cannot share a SKU.

## Model

```php
<?php

namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';

    protected $allowedFields = [
        'name',
        'sku',
        'price',
        'status',
    ];

    protected $useTimestamps = true;
}
```

## Routes

```php
$routes->get('products', 'Products::index');
$routes->get('products/new', 'Products::new', [
    'filter' => 'permission:product.manage',
]);
$routes->get('products/(:num)', 'Products::show/$1');
$routes->get('products/(:num)/edit', 'Products::edit/$1', [
    'filter' => 'permission:product.manage',
]);
$routes->post('products', 'Products::create', [
    'filter' => 'permission:product.manage',
]);
$routes->post('products/(:num)', 'Products::update/$1', [
    'filter' => 'permission:product.manage',
]);
$routes->post('products/(:num)/delete', 'Products::delete/$1', [
    'filter' => 'permission:product.manage',
]);
```

Place `products/new` before `products/(:num)` so the literal path is unambiguous. The filter protects both write endpoints and their forms. The exact filter alias/arguments depend on the authentication package or custom filter configured by the application.

## Controller

```php
<?php

namespace App\Controllers;

use App\Models\ProductModel;
use CodeIgniter\Exceptions\PageNotFoundException;

class Products extends BaseController
{
    private ProductModel $products;

    public function __construct()
    {
        $this->products = new ProductModel();
    }

    public function index()
    {
        $search = trim((string) $this->request->getGet('search'));

        $query = $this->products;

        if ($search !== '') {
            $query = $query->like('name', $search);
        }

        return view('products/index', [
            'products' => $query->paginate(20),
            'pager' => $this->products->pager,
            'search' => $search,
        ]);
    }

    public function show(int $id)
    {
        $product = $this->products->find($id);

        if (! $product) {
            throw PageNotFoundException::forPageNotFound();
        }

        return view('products/show', [
            'product' => $product,
        ]);
    }

    public function new()
    {
        return view('products/new');
    }

    public function edit(int $id)
    {
        $product = $this->products->find($id);

        if (! $product) {
            throw PageNotFoundException::forPageNotFound();
        }

        return view('products/edit', [
            'product' => $product,
        ]);
    }

    public function create()
    {
        $rules = [
            'name' => 'required|min_length[3]|max_length[150]',
            'sku' => 'required|max_length[50]',
            'price' => 'required|decimal|greater_than_equal_to[0]',
            'status' => 'required|in_list[active,inactive]',
        ];

        if (! $this->validate($rules)) {
            return redirect()
                ->back()
                ->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        $id = $this->products->insert([
            'name' => $this->request->getPost('name'),
            'sku' => $this->request->getPost('sku'),
            'price' => $this->request->getPost('price'),
            'status' => $this->request->getPost('status'),
        ], true);

        if ($id === false) {
            return redirect()
                ->back()
                ->withInput()
                ->with(
                    'errors',
                    $this->products->errors()
                        ?: ['save' => 'Could not create product.']
                );
        }

        return redirect()
            ->to('/products/' . $id)
            ->with('success', 'Product created.');
    }

    public function update(int $id)
    {
        if (! $this->products->find($id)) {
            throw PageNotFoundException::forPageNotFound();
        }

        $rules = [
            'name' => 'required|min_length[3]|max_length[150]',
            'price' => 'required|decimal|greater_than_equal_to[0]',
            'status' => 'required|in_list[active,inactive]',
        ];

        if (! $this->validate($rules)) {
            return redirect()
                ->back()
                ->withInput()
                ->with('errors', $this->validator->getErrors());
        }

        $saved = $this->products->update($id, [
            'name' => $this->request->getPost('name'),
            'price' => $this->request->getPost('price'),
            'status' => $this->request->getPost('status'),
        ]);

        if (! $saved) {
            return redirect()
                ->back()
                ->withInput()
                ->with(
                    'errors',
                    $this->products->errors()
                        ?: ['save' => 'Could not update product.']
                );
        }

        return redirect()
            ->to('/products/' . $id)
            ->with('success', 'Product updated.');
    }

    public function delete(int $id)
    {
        if (! $this->products->find($id)) {
            throw PageNotFoundException::forPageNotFound();
        }

        if (! $this->products->delete($id)) {
            return redirect()
                ->back()
                ->with('error', 'Could not delete product.');
        }

        return redirect()
            ->to('/products')
            ->with('success', 'Product deleted.');
    }
}
```

`new()` and `edit()` render forms; the original routes would return errors without these two methods. `insert($data, true)` returns the new primary key or `false`. `update()` and `delete()` return Boolean results; this example checks validation/model failures and record existence before reporting success. The authorization filter remains the real permission boundary—hiding links is not security.

## Minimal create view

`app/Views/products/new.php`:

```php
<h1>Create Product</h1>

<?php foreach (session('errors') ?? [] as $error): ?>
    <p><?= esc($error) ?></p>
<?php endforeach; ?>

<form method="post" action="<?= site_url('products') ?>">
    <?= csrf_field() ?>

    <label for="name">Name</label>
    <input id="name" name="name" value="<?= old('name') ?>">

    <label for="sku">SKU</label>
    <input id="sku" name="sku" value="<?= old('sku') ?>">

    <label for="price">Price</label>
    <input id="price" name="price" inputmode="decimal" value="<?= old('price') ?>">

    <label for="status">Status</label>
    <select id="status" name="status">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
    </select>

    <button type="submit">Save</button>
</form>
```

`csrf_field()` outputs the hidden CSRF token. `old()` reads flashdata created by `withInput()` and escapes output by default for safe use in these quoted HTML attributes. The controller still validates every field because browser controls can be bypassed.

## Expected behavior

| Request | Method | Result |
| --- | --- | --- |
| `/products` | GET | Paginated/searchable list |
| `/products/new` | GET | Create form |
| `/products` | POST | Validate, insert, redirect to detail |
| `/products/10` | GET | Product detail or 404 |
| `/products/10/edit` | GET | Edit form or 404 |
| `/products/10` | POST | Validate, update, redirect |
| `/products/10/delete` | POST | Delete, then redirect to list |

Create `index.php`, `show.php`, and `edit.php` views following the same rules: escape model output, include CSRF on POST forms, repopulate validation failures, and render delete as a POST form. Whether delete is hard or soft is a business/audit decision; configure the Model accordingly rather than assuming permanent deletion is always acceptable.

## What this project teaches

- routes;
- controllers;
- request input;
- validation;
- Model;
- search;
- pagination;
- redirect;
- flash messages;
- views;
- CRUD.

---

# 57. Real-World Invoice Approval Scenario

Consider a business application with these steps:

```text
Invoice received
    ↓
OCR extraction
    ↓
Validation
    ↓
PO/GIR matching
    ↓
Approval workflow
    ↓
Finance Controller approval
    ↓
ERP posting
```

A poor design might put everything in:

```text
InvoiceController.php
```

A better design:

```text
Controllers/
    InvoiceController.php

Services/
    InvoiceUploadService.php
    InvoiceExtractionService.php
    InvoiceMatchingService.php
    InvoiceWorkflowService.php
    InvoicePostingService.php

Models/
    InvoiceModel.php
    InvoiceLineModel.php
    InvoiceApprovalModel.php
    InvoiceAuditModel.php

Repositories/
    InvoiceRepository.php

Filters/
    AuthFilter.php
    PermissionFilter.php

Commands/
    ProcessPendingInvoices.php
    RetryFailedPostings.php
```

## Status transitions

Do not let any code arbitrarily set any status.

Define rules:

```text
uploaded
→ extracted
→ validation_failed
→ matching
→ approval_pending
→ approved
→ posting
→ posted
```

Not every transition is valid.

For example:

```text
posted → approval_pending
```

should normally be rejected.

## Service example

```php
class InvoiceWorkflowService
{
    public function approve(
        int $invoiceId,
        int $approverId
    ): void {
        $invoice = $this->invoiceRepository->findById($invoiceId);

        if (! $invoice) {
            throw new DomainException('Invoice not found.');
        }

        if ($invoice->status !== 'approval_pending') {
            throw new DomainException(
                'Invoice is not awaiting approval.'
            );
        }

        if (! $this->authorization->canApprove(
            $approverId,
            $invoice
        )) {
            throw new DomainException('User cannot approve this invoice.');
        }

        $this->database->transStart();

        $this->invoiceRepository->markApproved(
            $invoiceId,
            $approverId
        );

        $this->auditRepository->record(
            'invoice.approved',
            $invoiceId,
            $approverId
        );

        $this->database->transComplete();
    }
}
```

## Important production requirements

Include:

- idempotency;
- audit log;
- retry strategy;
- transactions;
- permission checks;
- concurrency handling;
- unique constraints;
- external ERP error handling;
- status history.

---

# 58. Real-World E-Commerce Scenario

Modules:

```text
Users
Catalog
Cart
Orders
Payments
Inventory
Shipping
Coupons
Notifications
Admin
```

Possible architecture:

```text
ProductController
    ↓
CatalogService
    ↓
ProductRepository
```

Checkout:

```text
CheckoutController
    ↓
CheckoutService
        ├── CartService
        ├── InventoryService
        ├── PricingService
        ├── PaymentGateway
        ├── OrderRepository
        └── NotificationService
```

## Transaction challenge

Do not keep a database transaction open while waiting unnecessarily for a slow external payment provider.

A better workflow may depend on payment-provider behavior:

```text
Create payment intent
↓
Payment provider
↓
Receive verified callback/webhook
↓
Transactionally update order/payment state
```

Always design for duplicate payment notifications.

That means operations should be idempotent.

---

# 59. Real-World Employee Portal Scenario

Example modules:

```text
Login
Employee Profile
Attendance
Leave
Manager Approval
HR Reports
Admin
```

## Routes

```php
$routes->group('employee', ['filter' => 'auth'], function ($routes) {
    $routes->get('profile', 'Employee\Profile::index');
    $routes->get('attendance', 'Employee\Attendance::index');
});

$routes->group('hr', ['filter' => 'permission:hr.access'], function ($routes) {
    $routes->get('employees', 'Hr\Employees::index');
    $routes->get('reports', 'Hr\Reports::index');
});
```

## Attendance report query

Avoid loading everything and filtering in PHP.

Bad:

```php
$all = $attendanceModel->findAll();

$filtered = array_filter(
    $all,
    static fn (array $row): bool =>
        (int) $row['employee_id'] === $employeeId
        && $row['attendance_date'] >= $fromDate
        && $row['attendance_date'] <= $toDate
);
```

Better:

```php
$rows = $attendanceModel
    ->where('employee_id', $employeeId)
    ->where('attendance_date >=', $fromDate)
    ->where('attendance_date <=', $toDate)
    ->orderBy('attendance_date', 'DESC')
    ->findAll();
```

Let the database do filtering.

---

# 60. Performance Optimization

Performance optimization begins with measurement.

Do not optimize based only on guesswork.

## 60.1 Database indexes

A common slow query:

```sql
SELECT *
FROM invoices
WHERE vendor_id = ?
  AND status = ?
ORDER BY created_at DESC;
```

An appropriate composite index may help depending on query patterns and database engine.

Use query plans to verify.

## 60.2 Avoid N+1 queries

Bad:

```php
foreach ($orders as $order) {
    $customer = $customerModel->find($order['customer_id']);
}
```

100 orders can create 101 queries.

Better:

- join;
- batch fetch;
- pre-load mappings.

## 60.3 Select only required columns

Avoid:

```sql
SELECT *
```

when you only need:

```text
id
invoice_no
status
amount
```

## 60.4 Paginate

Never render tens of thousands of records on one page.

## 60.5 Cache appropriate data

Good cache candidates:

- master data;
- expensive dashboard aggregations;
- rarely changing lookups.

## 60.6 Move slow work away from request path

Examples:

- email;
- PDF conversion;
- OCR;
- ERP synchronization;
- large exports.

Depending on architecture, process them using command workers, queues, scheduled tasks, or external job systems.

## 60.7 Production mode

Ensure production is configured correctly and unnecessary debugging overhead is disabled.

---

# 61. Deployment

A production deployment should be repeatable.

Typical flow:

```text
Developer pushes code
↓
CI pipeline runs tests
↓
Build artifact/container
↓
Deploy
↓
composer install --no-dev
↓
run migrations
↓
clear/warm caches if necessary
↓
health check
```

## Basic deployment checklist

- production environment mode;
- correct base URL;
- correct database connection;
- writable permissions;
- HTTPS;
- secrets not committed;
- public web root points to `public/`;
- logs monitored;
- backups tested;
- migrations reviewed;
- health endpoint;
- rollback process.

## Composer production installation

Common concept:

```bash
composer install \
  --no-dev \
  --optimize-autoloader
```

Use flags appropriate to your deployment strategy.

---

# 62. Apache, Nginx, and IIS Notes

## Apache

Point DocumentRoot to:

```text
/path/to/project/public
```

Ensure rewrite configuration is supported.

## Nginx

The important idea is:

```text
public/index.php
```

acts as the front controller for application routes.

Static files should be served directly when possible.

## IIS

Point the site/application to:

```text
project\public
```

and configure URL Rewrite so application routes reach:

```text
index.php
```

Do not blindly copy rewrite rules from old CI3 projects because project layout differs.

## Common deployment error

Symptoms:

```text
Home page works
/products returns 404
```

Possible causes:

- rewrite module/rules missing;
- wrong document root;
- route not defined;
- base URL mismatch.

---

# 63. Docker Basics

Minimal architecture:

```text
docker-compose
├── php/app
├── nginx
└── database
```

Example learning-only `compose.yaml` concept:

```yaml
services:
  app:
    build: .
    volumes:
      - .:/var/www/html

  db:
    image: mysql:8
    environment:
      MYSQL_DATABASE: ci4
      MYSQL_USER: ci4
      MYSQL_PASSWORD: ci4pass
      MYSQL_ROOT_PASSWORD: rootpass
```

Do not use obvious development passwords in production.

## Why containers help

They make development environments more consistent.

A team can align:

```text
PHP version
extensions
web server
database
system packages
```

---

# 64. Production Security Checklist

Use this before release.

- [ ] Production environment is enabled.
- [ ] Debug output is not exposed.
- [ ] HTTPS is enforced.
- [ ] Database credentials are not committed.
- [ ] API secrets are not committed.
- [ ] Public root is `public/`.
- [ ] CSRF strategy is configured correctly.
- [ ] Authentication is tested.
- [ ] Authorization is tested on backend.
- [ ] Password storage uses secure hashing.
- [ ] Session cookie settings are hardened.
- [ ] Sensitive cookies use Secure/HttpOnly as appropriate.
- [ ] User output is escaped.
- [ ] Database inputs use Query Builder/bindings.
- [ ] File uploads are validated.
- [ ] File names are generated safely.
- [ ] Sensitive uploads are not publicly accessible.
- [ ] Rate limits protect abuse-prone endpoints.
- [ ] Logs do not contain secrets.
- [ ] Security headers are reviewed.
- [ ] Backups exist.
- [ ] Backup restoration has been tested.
- [ ] Dependencies are regularly updated.
- [ ] Automated tests cover permission rules.

---

# 65. Common Mistakes

## Mistake 1: Huge controllers

Bad:

```text
InvoiceController = 4,000 lines
```

Fix:

- extract business services;
- extract queries;
- use smaller controllers.

## Mistake 2: SQL in views

Views should not own database access.

## Mistake 3: Trusting frontend validation

JavaScript validation improves UX.

Backend validation provides security and correctness.

You need both.

## Mistake 4: Hiding button instead of authorization

A malicious user can call the endpoint manually.

Always enforce permissions server-side.

## Mistake 5: Committing `.env`

Never put production credentials into Git.

## Mistake 6: `SELECT *` everywhere

Fetch only required data for heavy queries.

## Mistake 7: No indexes

Large tables need an indexing strategy based on actual query patterns.

## Mistake 8: Updating status directly from arbitrary request values

Unsafe:

```php
$model->update($id, [
    'status' => $this->request->getPost('status'),
]);
```

Use an explicit transition service.

## Mistake 9: No transaction for multi-write financial operation

Use database transactions where atomicity is required.

## Mistake 10: Logging secrets

Do not log:

```text
password
access token
private key
authorization header
```

## Mistake 11: Production using development configuration

This can expose sensitive details and hurt performance/security.

## Mistake 12: Blindly porting CodeIgniter 3 code

CI4 is a major redesign, not CI3 with a new version number.

---

# 66. Debugging Guide

When something breaks, debug systematically.

## Step 1: Read the actual error

Do not immediately change random code.

Find:

```text
exception type
message
file
line
stack trace
```

## Step 2: Check logs

Look under the configured writable log directory.

## Step 3: Confirm route

```bash
php spark routes
```

If:

```text
GET /invoice/10
```

returns 404, verify the route exists.

## Step 4: Confirm request data

During development, inspect:

```php
$data = $this->request->getPost();
```

Do not leave sensitive dumps in production.

## Step 5: Confirm validation errors

```php
dd($this->validator->getErrors());
```

Development only.

## Step 6: Check database result

Ask:

- does row exist?
- correct DB?
- correct environment?
- correct connection group?
- field name correct?
- migration executed?

## Step 7: Reduce the problem

If a 200-line service fails, isolate:

```text
input
query
calculation
external call
save
```

Test the failing piece.

## Common 404 causes

- route missing;
- wrong HTTP method;
- namespace mismatch;
- controller name mismatch;
- rewrite config issue.

## Common database causes

- wrong credentials;
- migration not run;
- missing extension;
- incorrect table prefix;
- query error;
- invalid column.

## Common 500 causes

- uncaught exception;
- PHP type error;
- missing class;
- syntax error;
- write permission;
- dependency mismatch.

---

# 67. CodeIgniter 3 vs CodeIgniter 4

CodeIgniter 4 should be treated as a modern rewrite rather than a drop-in upgrade.

Conceptual differences include:

| Area | CodeIgniter 3 | CodeIgniter 4 |
| --- | --- | --- |
| PHP style | Older architecture | Modern PHP architecture |
| Namespaces | Limited/legacy style | Core design concept |
| Composer | Optional/less central | First-class workflow |
| CLI | Limited | Spark CLI |
| Routing | CI3 style | Modern routing options |
| Models | Older pattern | Richer Model layer |
| Entities | Not core concept | Supported |
| Migrations | Available | Improved modern workflow |
| Testing | Less integrated | Stronger testing support |
| Request/Response | Older APIs | PSR-inspired modern HTTP objects |
| Filters | Hooks/libraries often used | First-class filters |
| Structure | `application/` | `app/`, `public/`, `writable/` |

## CI3 habit

```php
$this->load->model('invoice_model');
```

CI4 style:

```php
use App\Models\InvoiceModel;

$model = new InvoiceModel();
```

## CI3 input

```php
$this->input->post('name');
```

CI4:

```php
$this->request->getPost('name');
```

---

# 68. Migrating from CodeIgniter 3

Do not try to upgrade a large CI3 application by changing a few files.

Treat migration as controlled modernization.

## Migration plan

### Phase 1: Inventory

List:

- controllers;
- models;
- libraries;
- helpers;
- hooks;
- routes;
- cron jobs;
- session usage;
- upload flows;
- authentication;
- custom core extensions.

### Phase 2: Identify business behavior

Separate:

```text
what the application does
```

from:

```text
how CI3 implemented it
```

### Phase 3: Build CI4 skeleton

Set up:

- routes;
- environment;
- database;
- authentication;
- common layout;
- error handling.

### Phase 4: Migrate feature-by-feature

Example order:

```text
Login
Master Data
User Management
Invoice Listing
Invoice Detail
Approval
Posting
Reports
```

### Phase 5: Replace CI3-specific APIs

Examples:

```text
$this->load
$this->input
$this->session
hooks
old libraries
```

with CI4-native patterns.

### Phase 6: Add tests

Protect important business behavior before and during migration.

## Do not perform a blind syntax conversion

A migration is an opportunity to fix:

- giant controllers;
- insecure SQL;
- global helpers;
- hard-coded credentials;
- weak validation;
- no tests;
- old PHP compatibility hacks.

---

# 69. Recommended Project Structure

For a medium/large business system:

```text
app/
├── Commands/
├── Config/
├── Controllers/
│   ├── Api/
│   ├── Admin/
│   └── Web/
├── Database/
│   ├── Migrations/
│   └── Seeds/
├── DTO/
├── Entities/
├── Exceptions/
├── Filters/
├── Helpers/
├── Libraries/
├── Models/
├── Repositories/
├── Services/
├── Validation/
└── Views/
```

Another approach is feature-based structure:

```text
app/
├── Modules/
│   ├── Invoice/
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Services/
│   │   └── Views/
│   ├── Employee/
│   └── Procurement/
```

Choose structure based on application size and team conventions.

## Rule

Consistency is more valuable than constantly moving folders to follow trends.

---

# 70. Coding Standards

Write code for the next developer.

## Prefer meaningful names

Bad:

```php
$a = $m->get($x);
```

Better:

```php
$invoice = $invoiceRepository->findById($invoiceId);
```

## Small methods

Bad:

```php
public function process()
{
    // 600 lines
}
```

Better:

```php
validateInvoice();
matchPurchaseOrder();
resolveWorkflow();
persistResult();
notifyApprover();
```

## Early returns

Instead of deep nesting:

```php
if ($invoice) {
    if ($invoice['status'] === 'pending') {
        if ($allowed) {
            $invoiceService->approve($invoice['id']);
        }
    }
}
```

Prefer:

```php
if (! $invoice) {
    throw new DomainException('Invoice not found.');
}

if ($invoice['status'] !== 'pending') {
    throw new DomainException('Invalid status.');
}

if (! $allowed) {
    throw new DomainException('Not allowed.');
}

// Main operation.
```

## Use constants/enums where suitable

Avoid scattering:

```text
P
A
R
0
1
2
```

through the application without meaning.

Use expressive domain values.

---

# 71. Useful Spark Commands

List commands:

```bash
php spark
```

Run local server:

```bash
php spark serve
```

Show routes:

```bash
php spark routes
```

Create controller:

```bash
php spark make:controller Products
```

Create model:

```bash
php spark make:model ProductModel
```

Create entity:

```bash
php spark make:entity Product
```

Create migration:

```bash
php spark make:migration CreateProductsTable
```

Run migrations:

```bash
php spark migrate
```

Rollback migration:

```bash
php spark migrate:rollback
```

Create seeder:

```bash
php spark make:seeder ProductSeeder
```

Run seeder:

```bash
php spark db:seed ProductSeeder
```

Create filter:

```bash
php spark make:filter AuthFilter
```

Create test:

```bash
php spark make:test ProductServiceTest
```

Clear cache:

```bash
php spark cache:clear
```

Always inspect current command help when unsure:

```bash
php spark help
```

or command-specific help where available.

---

# 72. Common Code Recipes

Each recipe assumes the surrounding controller/model dependency exists. Request methods return untrusted client values, Model methods may return `null`/`false`, and response/redirect helpers return response objects that the controller should return.

## Get POST field

```php
$name = $this->request->getPost('name');
```

## Get JSON body

```php
$data = $this->request->getJSON(true);
```

## Return JSON

```php
return $this->response->setJSON([
    'status' => 'success',
]);
```

## Redirect

```php
return redirect()->to('/dashboard');
```

## Redirect back with error

```php
return redirect()
    ->back()
    ->withInput()
    ->with('error', 'Validation failed.');
```

## Get database connection

```php
$db = db_connect();
```

## Find record

```php
$product = $productModel->find($id);
```

## Where

```php
$users = $userModel
    ->where('active', 1)
    ->findAll();
```

## Order

```php
$rows = $model
    ->orderBy('created_at', 'DESC')
    ->findAll();
```

## Limit

```php
$rows = $model
    ->orderBy('created_at', 'DESC')
    ->findAll(10);
```

## Count

```php
$count = $model
    ->where('status', 'pending')
    ->countAllResults();
```

## Pagination

```php
$rows = $model->paginate(25);

$pager = $model->pager;
```

## Session value

```php
$userId = session('user_id');
```

## Log

```php
log_message('info', 'Processing invoice {id}', [
    'id' => $invoiceId,
]);
```

## Escape HTML

```php
<?= esc($name) ?>
```

## CSRF field

```php
<?= csrf_field() ?>
```

## Recipe inputs and outputs

| Call | Main input | Return/output |
| --- | --- | --- |
| `$this->request->getPost('name')` | POST field name | Submitted value or `null` |
| `$this->request->getJSON(true)` | `true` requests arrays | Decoded data; malformed/empty bodies need error handling |
| `$this->response->setJSON($data)` | Serializable data | Response object with JSON body/content type |
| `redirect()->to($url)` | Target URL | Redirect response object |
| `db_connect($group = null)` | Optional DB group | Database connection |
| `$model->find($id)` | Primary key | Row/entity or `null` |
| `$model->paginate(25)` | Page size | Current page rows; pager stored on Model |
| `session('user_id')` | Session key | Value or `null` |
| `log_message($level, $message, $context)` | Level, template, safe context | No business value to depend on |
| `esc($value, $context = 'html')` | Value and output context | Escaped value |
| `csrf_field()` | None | Hidden HTML input containing current token |

---

# 73. Interview Questions

## Beginner

### What is CodeIgniter?

A PHP application development framework that provides organized structure and libraries for common web-development tasks.

### What is MVC?

Model handles data-related behavior, View handles presentation, and Controller coordinates requests and responses.

### Where are routes configured?

Typically under:

```text
app/Config/Routes.php
```

### What is the purpose of `public/`?

It is the intended public web root and contains the front controller and public assets.

### What is `writable/`?

Runtime-writable storage for logs, cache, sessions, and similar files.

### What is Spark?

CodeIgniter's CLI entry point.

---

## Intermediate

### What are filters?

Classes that can run before or after controllers to handle cross-cutting concerns such as authentication, CSRF, permissions, logging, or throttling.

### What is `$allowedFields`?

A Model property that restricts fields allowed during mass assignment.

### Model vs Query Builder?

Model provides higher-level table/entity operations and conventions. Query Builder provides fluent SQL construction and can be used directly for specialized queries.

### Why migrations?

They version-control database schema changes and make environments reproducible.

### Why use transactions?

To ensure multiple database operations succeed or fail as one logical unit.

### What is flashdata?

Session data intended to survive temporarily, commonly for a single redirected request.

---

## Advanced

### How would you design an invoice approval workflow?

Use:

- explicit status transitions;
- authorization;
- service layer;
- transaction boundaries;
- audit history;
- retry/idempotency for external posting;
- database constraints;
- tests for transitions and permissions.

### How do you prevent N+1 queries?

Use joins, batch loading, prefetching, or optimized repository queries instead of querying related data inside loops.

### How should external APIs be integrated?

Wrap them in dedicated clients/services, define timeouts, validate responses, handle retries carefully, log correlation IDs, and keep business logic separate.

### How do you make business code testable?

Use small classes, explicit dependencies, interfaces for external systems, controlled side effects, and deterministic domain logic.

### When would you use a repository?

When data-access behavior is complex enough that centralizing it improves maintainability and testability.

---

# 74. Practice Projects

Build these in order.

## Project 1: Notes Application

Learn:

- routes;
- controllers;
- views;
- forms;
- validation;
- CRUD.

Features:

```text
Create note
Edit note
Delete note
Search notes
```

## Project 2: Product Inventory

Learn:

- Models;
- migrations;
- seeders;
- pagination;
- filters.

Features:

```text
Products
Categories
Stock
Low-stock report
```

## Project 3: Employee Portal

Learn:

- authentication;
- roles;
- permissions;
- sessions;
- reports.

Features:

```text
Employee profile
Attendance
Leave request
Manager approval
HR dashboard
```

## Project 4: REST API

Learn:

- API controllers;
- JSON;
- status codes;
- validation;
- API authentication;
- rate limiting.

Features:

```text
Products API
Orders API
API token authentication
Pagination
Filtering
```

## Project 5: Invoice Workflow System

Learn:

- service layer;
- transactions;
- uploads;
- asynchronous processing architecture;
- audit logs;
- state transitions;
- ERP integration.

Features:

```text
Invoice upload
Extraction
Validation
Matching
Approval
Posting
Retry
Audit
```

---

# 75. Learning Roadmap

## Stage 1 — PHP foundation

Master:

```text
PHP syntax
OOP
Composer
exceptions
namespaces
SQL
HTTP
```

## Stage 2 — CI4 fundamentals

Master:

```text
project structure
routes
controllers
requests
responses
views
helpers
configuration
```

Build a simple static site.

## Stage 3 — Database

Master:

```text
database connection
Query Builder
Models
Entities
Migrations
Seeders
Transactions
```

Build CRUD.

## Stage 4 — Forms and security

Master:

```text
validation
CSRF
sessions
cookies
filters
escaping
upload security
```

Build login-protected forms.

## Stage 5 — Professional application

Master:

```text
authentication
authorization
services
repositories
logging
error handling
email
pagination
cache
```

Build Employee Portal.

## Stage 6 — APIs

Master:

```text
REST
ResourceController
JSON
validation
status codes
API auth
CORS
rate limiting
```

Build REST backend.

## Stage 7 — Testing

Master:

```text
unit tests
feature tests
database tests
mocks
test data
```

Add tests to existing projects.

## Stage 8 — Architecture

Master:

```text
service layer
repository pattern
DTO
domain rules
transactions
idempotency
state machines
integration boundaries
```

Build Invoice Workflow.

## Stage 9 — Production

Master:

```text
deployment
Linux/server basics
Apache/Nginx/IIS
Docker
security
monitoring
backups
performance
CI/CD
```

---

# 76. Final Cheat Sheet

## MVC

```text
Route → Controller → Service/Model → View/JSON
```

## Create project

```bash
composer create-project codeigniter4/appstarter myapp
```

## Run

```bash
php spark serve
```

## Route

```php
$routes->get('products/(:num)', 'Products::show/$1');
```

## Controller

```php
public function show(int $id)
{
    return view('products/show', [
        'product' => $this->productModel->find($id),
    ]);
}
```

## Model

```php
class ProductModel extends Model
{
    protected $table = 'products';

    protected $allowedFields = [
        'name',
        'price',
    ];
}
```

## Read POST

```php
$name = $this->request->getPost('name');
```

## Validate

```php
if (! $this->validate([
    'name' => 'required|max_length[100]',
])) {
    return redirect()->back()->withInput();
}
```

## JSON

```php
return $this->response->setJSON($data);
```

## Redirect

```php
return redirect()->to('/products');
```

## Database

```php
$db = db_connect();
```

## Transaction

```php
$db = db_connect();

$db->transStart();

$db->table('orders')->insert($orderData);
$db->table('inventory')
    ->where('product_id', $productId)
    ->decrement('quantity', $quantity);

$db->transComplete();

if ($db->transStatus() === false) {
    throw new RuntimeException('Transaction failed.');
}
```

## Session

```php
session()->set('user_id', 10);
```

## Flashdata

```php
return redirect()
    ->back()
    ->with('success', 'Saved.');
```

## Escape output

```php
<?= esc($value) ?>
```

## CSRF

```php
<?= csrf_field() ?>
```

## Migration

```bash
php spark make:migration CreateProductsTable
php spark migrate
```

## Show routes

```bash
php spark routes
```

## Golden Rules

1. Keep controllers thin.
2. Validate every untrusted input.
3. Enforce authorization on the server.
4. Escape untrusted HTML output.
5. Use bindings/Query Builder instead of concatenated SQL.
6. Restrict `$allowedFields`.
7. Use transactions for atomic multi-write operations.
8. Use migrations for schema changes.
9. Keep secrets outside source code.
10. Log failures without leaking secrets.
11. Write tests for important business rules.
12. Paginate large datasets.
13. Avoid N+1 queries.
14. Separate business logic from presentation.
15. Design external integrations for retries and duplicate requests.
16. Prefer explicit routes for sensitive systems.
17. Do not expose the whole project directory as web root.
18. Do not blindly copy CI3 patterns into CI4.
19. Measure before optimizing.
20. Keep the architecture as simple as the application allows.

---

# 77. Official References

Use the official documentation as the final authority when framework behavior differs by version.

- [CodeIgniter 4.7.4 User Guide](https://codeigniter.com/user_guide/)
- [Server Requirements](https://codeigniter.com/user_guide/intro/requirements.html)
- [Installation](https://codeigniter.com/user_guide/installation/index.html)
- [Routing](https://codeigniter.com/user_guide/incoming/routing.html)
- [Controllers](https://codeigniter.com/user_guide/incoming/controllers.html)
- [Database](https://codeigniter.com/user_guide/database/index.html)
- [Models](https://codeigniter.com/user_guide/models/model.html)
- [Validation](https://codeigniter.com/user_guide/libraries/validation.html)
- [Filters](https://codeigniter.com/user_guide/incoming/filters.html)
- [CLI / Spark](https://codeigniter.com/user_guide/cli/cli_commands.html)
- [CLI Generators](https://codeigniter.com/user_guide/cli/cli_generators.html)
- [Testing](https://codeigniter.com/user_guide/testing/index.html)
- [Deployment](https://codeigniter.com/user_guide/installation/deployment.html)
- [Official releases](https://github.com/codeigniter4/CodeIgniter4/releases)

---

# Appendix A — Mental Model for Every Feature

Whenever you build a new feature, answer these questions.

## Request

```text
What URL?
What HTTP method?
What input?
Who is calling it?
```

## Security

```text
Is authentication required?
Which permission?
What validation?
Is CSRF relevant?
Is rate limiting needed?
```

## Business logic

```text
What rules must always be true?
What statuses may change?
What happens on duplicate requests?
```

## Database

```text
Which tables?
Which transaction boundary?
Which constraints?
Which indexes?
```

## Integration

```text
Which external systems?
Timeout?
Retry?
Idempotency?
Failure handling?
```

## Response

```text
HTML or JSON?
Which HTTP status?
What should the user see?
```

## Operations

```text
What should be logged?
What should be monitored?
Can the operation be retried?
```

## Testing

```text
Success case?
Validation failure?
Permission failure?
Database failure?
External integration failure?
Duplicate request?
Concurrency?
```

If you answer these questions before coding, your CodeIgniter project will usually be much easier to maintain.

---

# Appendix B — Example Feature Design: Create Employee

## Requirement

HR can create an employee.

Fields:

```text
name
email
department
joining_date
manager_id
```

## Route

```php
$routes->post(
    'hr/employees',
    'Hr\Employees::create',
    ['filter' => 'permission:employee.create']
);
```

## Validation

```php
$rules = [
    'name' => 'required|min_length[3]|max_length[100]',
    'email' => 'required|valid_email|max_length[150]',
    'department' => 'required|max_length[100]',
    'joining_date' => 'required|valid_date[Y-m-d]',
    'manager_id' => 'permit_empty|integer',
];
```

## Business checks

Validation is not enough.

You may also need:

```text
Email must be unique.
Department must exist.
Manager must be an active employee.
Joining date must meet business policy.
```

## Service

```php
class CreateEmployeeService
{
    public function execute(CreateEmployeeData $data): int
    {
        if ($this->employees->existsByEmail($data->email)) {
            throw new DomainException('Email already exists.');
        }

        if (! $this->departments->exists($data->departmentId)) {
            throw new DomainException('Department does not exist.');
        }

        if ($data->managerId !== null
            && ! $this->employees->isActive($data->managerId)) {
            throw new DomainException('Manager is invalid.');
        }

        return $this->employees->create($data);
    }
}
```

This shows the difference between:

```text
input validation
```

and:

```text
business validation
```

---

# Appendix C — Example Feature Design: Update Invoice Status

Bad endpoint:

```text
POST /invoice/set-status
{
  "invoice_id": 10,
  "status": "posted"
}
```

Why bad?

The caller can try any status.

Better endpoints express actions:

```text
POST /invoices/10/submit
POST /invoices/10/approve
POST /invoices/10/reject
POST /invoices/10/post
```

Each action has its own rules.

Example:

```php
public function approve(int $invoiceId)
{
    try {
        $this->approvalService->approve(
            $invoiceId,
            $this->currentUser->id
        );

        return $this->respond([
            'status' => 'success',
            'message' => 'Invoice approved.',
        ]);
    } catch (DomainException $e) {
        return $this->fail(
            $e->getMessage(),
            409
        );
    }
}
```

This is much easier to secure, audit, test, and understand.

---

# Appendix D — SQL and Model Decision Guide

Use a Model for common CRUD:

```php
$productModel->find($id);
```

Use Query Builder for custom database queries:

```php
$db->table('invoices')
   ->select('invoices.id, invoices.invoice_no, vendors.name AS vendor')
   ->join('vendors', 'vendors.id = invoices.vendor_id')
   ->where('invoices.status', 'pending')
   ->get();
```

Use raw SQL when:

- the query is genuinely easier/clearer as SQL;
- you need database-specific features;
- you have measured a performance reason.

Still use bindings.

Do not force every complex reporting query through a Model if Query Builder/raw SQL is clearer.

---

# Appendix E — Security Review Example

Suppose the application has:

```text
POST /invoice/123/approve
```

Review:

## Authentication

Can anonymous users reach it?

## Authorization

Is the current user actually the assigned approver?

## Object-level authorization

Even if the user can approve invoices, can they approve *this* invoice?

## CSRF

If using cookie/session authentication from a browser, is the action protected appropriately?

## Input

Is invoice ID constrained to numeric route input?

## State

Is the invoice actually pending?

## Replay

What happens if the user clicks Approve twice?

## Concurrency

What if two approvers submit simultaneously?

## Audit

Do we store:

```text
invoice ID
old status
new status
user ID
timestamp
reason
request correlation ID
```

## Error response

Does the system avoid exposing sensitive internals?

This mindset is more valuable than memorizing framework functions.

---

# Appendix F — Maintainability Checklist

Before merging a feature:

- [ ] Route is explicit and understandable.
- [ ] Controller method is small.
- [ ] Request input is validated.
- [ ] Authorization is enforced server-side.
- [ ] SQL is parameterized.
- [ ] Mass-assignment fields are restricted.
- [ ] Business rules are in a testable class.
- [ ] Multi-write operation uses transaction if required.
- [ ] Error path is handled.
- [ ] Logs are useful and safe.
- [ ] Views escape untrusted output.
- [ ] Large lists are paginated.
- [ ] Queries are reviewed for N+1 behavior.
- [ ] Migration exists for schema change.
- [ ] Tests cover important cases.
- [ ] Secrets are not in code.
- [ ] External operations have timeouts and failure handling.
- [ ] Status transitions are intentional.
- [ ] Code names express business meaning.

---

# Appendix G — Suggested 30-Day CodeIgniter 4 Study Plan

## Days 1–3

Study:

```text
PHP OOP
Composer
Namespaces
HTTP basics
```

Build small plain-PHP examples.

## Days 4–6

Study:

```text
CI4 installation
structure
routes
controllers
views
```

Build static pages.

## Days 7–10

Study:

```text
database
Query Builder
Models
Migrations
Seeders
```

Build product CRUD.

## Days 11–13

Study:

```text
forms
validation
sessions
flashdata
CSRF
```

Add admin forms.

## Days 14–16

Study:

```text
filters
authentication
authorization
```

Protect admin pages.

## Days 17–19

Study:

```text
services
transactions
logging
exceptions
```

Add order workflow.

## Days 20–22

Study:

```text
REST APIs
JSON
status codes
API validation
```

Expose Product API.

## Days 23–24

Study:

```text
uploads
email
cache
pagination
```

Build document upload.

## Days 25–27

Study:

```text
unit tests
feature tests
database tests
```

Test the important workflows.

## Days 28–29

Study:

```text
deployment
web server
environment
security
performance
```

Deploy to a test environment.

## Day 30

Build one small feature without this handbook.

Then review where you struggled.

That tells you exactly what to study next.

---

# Appendix H — Final Developer Mindset

A strong CodeIgniter developer does not simply know:

```php
$model->find();
```

A strong developer understands:

```text
HTTP
PHP
SQL
security
architecture
business rules
testing
debugging
deployment
operations
```

Framework syntax changes over time.

Engineering principles remain useful much longer.

When you encounter a new CodeIgniter feature, ask:

```text
What problem does it solve?
Where does it belong in the request lifecycle?
What are its security implications?
How will I test it?
How will it behave in production?
```

That is the mindset that turns framework knowledge into professional engineering skill.

---

# Extended Master Reference — Framework Features You Should Also Know

The previous chapters contain the learning path most developers use every day. This extended reference covers additional CodeIgniter 4 framework areas that are easy to miss but important for a genuinely complete mental model.

Because the reference contains more than 100 short topics, use this range map instead of a 100-line duplicate table of contents:

| Sections | Focus |
| --- | --- |
| 78–86 | URI, routing, request formats, localization, time and HTTP integrations |
| 87–98 | Files, images, encryption, browser security and advanced Models |
| 99–109 | Database tooling, factories/modules/packages and validation design |
| 110–120 | Sessions, authentication, authorization, tenancy, jobs and webhooks |
| 121–136 | Observability, configuration, dependency design, encoding and data delivery |
| 137–149 | Database integrity, money, state, errors, migrations and performance debugging |
| 150–159 | Testing, code quality, dependency hygiene and upgrades |
| 160–179 | Architecture decisions, integrations, imports, caching, rate limits and logging |
| 180–182 | Production readiness, senior-level knowledge and mastery exercises |

---

# 78. URI and URL Handling

A URI identifies a path inside your application.

Example:

```text
https://example.com/products/15?tab=reviews
```

Conceptually:

```text
scheme   = https
host     = example.com
path     = /products/15
query    = tab=reviews
```

Do not manually concatenate URLs everywhere.

CodeIgniter provides URL helpers and routing utilities so URLs can respect the configured base URL.

Typical helper usage:

```php
helper('url');

echo site_url('products/15');
```

Asset URL:

```php
echo base_url('assets/css/app.css');
```

## Why URL helpers matter

This is fragile:

```php
<a href="/myapp/products/15">
```

If deployment changes from:

```text
https://server/myapp/
```

to:

```text
https://products.example.com/
```

hard-coded paths become difficult to maintain.

Central configuration plus URL helpers reduces that problem.

---

# 79. Route Design for Large Applications

As route files grow, organize them by responsibility.

Example:

```php
$routes->group('api/v1', [
    'namespace' => 'App\Controllers\Api\V1',
], static function ($routes) {
    $routes->get('invoices', 'Invoices::index');
    $routes->get('invoices/(:num)', 'Invoices::show/$1');
    $routes->post('invoices', 'Invoices::create');
});
```

## API versioning

One possible strategy:

```text
/api/v1/invoices
/api/v2/invoices
```

Do not create a new API version for every tiny change.

Version when compatibility requirements justify it.

## Route priority mindset

When routes overlap, test them carefully.

For example:

```text
/products/new
/products/(:segment)
```

The generic route may also match:

```text
new
```

Explicit and well-ordered route design avoids surprises.

Always inspect:

```bash
php spark routes
```

when debugging routing.

---

# 80. Advanced Request Input

Different request sources have different meanings.

## Query string

```text
GET /invoices?status=pending&page=2
```

Read:

```php
$status = $this->request->getGet('status');
```

Good for:

- filters;
- search;
- pagination;
- sorting.

## Form body

```php
$name = $this->request->getPost('name');
```

Good for browser forms.

## JSON body

```php
$data = $this->request->getJSON(true);
```

Common in REST APIs.

## Headers

```php
$authorization = $this->request
    ->getHeaderLine('Authorization');
```

## Important rule

Do not use a generic input source when your contract is specific.

If an API requires JSON, read and validate JSON.

This makes behavior predictable.

---

# 81. Content Negotiation

Content negotiation helps an application choose a representation based on request preferences.

A client may send:

```http
Accept: application/json
```

or:

```http
Accept: text/html
```

The same business resource might theoretically be represented differently.

Example concept:

```text
Browser → HTML
API client → JSON
```

However, many applications stay simpler by having clearly separate:

```text
/web/*
/api/*
```

controllers.

Use content negotiation when it provides a genuine benefit rather than making every endpoint return multiple formats.

---

# 82. Localization and Language Files

Localization lets an application display messages in different languages.

Instead of hard-coding:

```php
echo 'Invoice approved successfully';
```

you can use language keys.

Example language file concept:

```php
// app/Language/en/Messages.php
return [
    'invoiceApproved' => 'Invoice approved successfully.',
];
```

Then retrieve translated text:

```php
$message = lang('Messages.invoiceApproved');
```

`lang($key, $args = [], $locale = null)` reads `filename.key`, applies optional replacement values, and returns the localized string. Here it loads `Messages.php` for the active locale and returns `Invoice approved successfully.`. Add another file such as `app/Language/hi/Messages.php` with the same key for another locale.

## Why language keys help

They separate:

```text
application behavior
```

from:

```text
display language
```

This becomes important for:

- international applications;
- regional portals;
- reusable packages.

## Locale selection

Possible inputs include:

- application default;
- user profile;
- route segment;
- browser language preferences.

Do not allow locale handling to become an authorization mechanism. It is only presentation behavior.

---

# 83. Dates, Times, and Time Zones

Date/time bugs are extremely common in business applications.

Store and compare time deliberately.

A common strategy is:

```text
Store timestamps in UTC
Display in user's/business timezone
```

CodeIgniter provides date/time tools including a localized immutable time class.

```php
use CodeIgniter\I18n\Time;

$utc = Time::parse(
    '2026-08-12 10:30:00',
    'UTC'
);

$mumbai = $utc->setTimezone('Asia/Kolkata');

echo $mumbai->toDateTimeString();
```

`Time::parse($value, $timezone)` returns a Time object representing the supplied instant. Because Time is immutable, `setTimezone()` returns a new object. The expected output is `2026-08-12 16:00:00`. Use an IANA timezone such as `Asia/Kolkata`, not a fixed label like `IST`, when daylight/region rules matter.

## Scenario

ERP stores:

```text
2026-08-12 10:30 UTC
```

Mumbai user sees:

```text
2026-08-12 16:00 IST
```

New York user sees another local time.

## Never assume server timezone equals business timezone

Your:

```text
developer laptop
production server
database
browser
```

may all use different time zones.

## Date-only vs timestamp

These are not the same.

Joining date:

```text
2026-08-12
```

may be a business date without timezone conversion.

Login timestamp:

```text
2026-08-12T12:40:00Z
```

is an instant in time.

Model them appropriately.

---

# 84. HTTP Client with CURLRequest

Applications often call external services.

Examples:

- ERP API;
- payment gateway;
- OCR service;
- HR system;
- SMS service.

CodeIgniter includes an HTTP client based around CURLRequest.

Conceptual use:

```php
$client = service('curlrequest');

$response = $client->get(
    'https://api.example.com/products',
    [
        'headers' => [
            'Accept' => 'application/json',
        ],
        'timeout' => 10,
    ]
);
```

`get($url, $options)` returns a PSR-7 response or throws when transport/error options require it. Inspect the response deliberately:

```php
$status = $response->getStatusCode();
$body = (string) $response->getBody();

if ($status !== 200) {
    throw new RuntimeException(
        'Product API returned HTTP ' . $status
    );
}

$data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
```

`getStatusCode()` returns an integer; `getBody()` returns a stream that can be cast to a string. `json_decode(..., JSON_THROW_ON_ERROR)` returns decoded data or throws `JsonException`. Catch and map connection, HTTP and JSON failures at the integration boundary without leaking credentials or full sensitive payloads.

## Production rules for HTTP integrations

Always think about:

```text
timeout
authentication
TLS verification
retry
rate limits
error responses
duplicate operations
logging
circuit breaking
```

Never assume an external API will always respond quickly.

---

# 85. External API Integration Pattern

Avoid this inside a controller:

```php
$response = file_get_contents($erpUrl);
```

Instead:

```text
Controller
    ↓
InvoicePostingService
    ↓
ErpClientInterface
    ↓
SapErpClient
```

Example interface:

```php
interface ErpClientInterface
{
    public function postInvoice(Invoice $invoice): PostingResult;
}
```

Why?

You can test:

```text
InvoicePostingService
```

using:

```text
FakeErpClient
```

without calling SAP/ERP.

---

# 86. Retry and Idempotency

Suppose an ERP request times out.

Did ERP receive it?

You may not know.

Blindly retrying could create a duplicate posting.

Use an idempotency strategy.

Example:

```text
client_reference = INV-2026-000123
```

ERP or your integration layer should reject or return the result of a previously processed identical business operation.

## Retry only appropriate failures

Potentially retry:

```text
network timeout
HTTP 503
temporary connection failure
```

Usually do not retry:

```text
invalid vendor
missing GL
authorization denied
bad request
```

Those require correction.

---

# 87. Files and File Objects

CodeIgniter's file APIs provide safer abstractions than manipulating everything with raw strings.

A file has useful metadata such as:

- path;
- size;
- MIME/media type;
- extension;
- modification time.

Use file APIs where they improve validation and readability.

## Never trust original upload name

A browser may provide:

```text
invoice.pdf
```

but the name is user-controlled.

Store something like:

```text
9b93d772f42c4a0d8f.pdf
```

and save the original name separately as metadata.

---

# 88. File Collections

File collections are useful when your application needs to work with groups of filesystem files according to rules.

Potential uses:

- export packages;
- document batches;
- deployment publishing;
- static resource processing.

For simple single-file upload flows, you may never need them.

The important lesson is that CodeIgniter provides a filesystem abstraction beyond uploaded files alone.

---

# 89. Image Manipulation

Applications may need to:

- resize avatars;
- generate thumbnails;
- rotate images;
- crop photos;
- watermark images.

Do not serve a 12 MB uploaded photo everywhere when a 100 KB thumbnail is sufficient.

A typical upload workflow might be:

```text
Validate upload
↓
Store original
↓
Generate randomized file name
↓
Create 300×300 thumbnail
↓
Store thumbnail path
```

For sensitive documents, decide whether image transformation belongs in the web request or a background process.

Example thumbnail generation:

```php
$source = WRITEPATH . 'uploads/photo.jpg';
$target = WRITEPATH . 'thumbnails/photo.jpg';

service('image')
    ->withFile($source)
    ->fit(300, 300, 'center')
    ->save($target, 85);
```

`withFile()` selects the source. `fit(width, height, position)` resizes/crops it to the requested box. `save(path, quality)` writes the result; `85` is the output quality setting for formats that support it. The GD or ImageMagick dependency must be configured/available, and processing can throw on unreadable/unsupported files—handle failure and never overwrite an original unintentionally.

---

# 90. Encryption

Encryption and hashing solve different problems.

## Hashing

One-way:

```text
password → hash
```

You generally cannot recover the original password.

Use for passwords.

## Encryption

Reversible using a key:

```text
plaintext
→ encrypt(key)
→ ciphertext
→ decrypt(key)
→ plaintext
```

Use only when the application genuinely needs to recover the original value.

CodeIgniter includes an encryption service for symmetric encryption.

```php
$encrypter = service('encrypter');

$ciphertext = $encrypter->encrypt(
    'sensitive value'
);

$stored = base64_encode($ciphertext);

$decoded = base64_decode($stored, true);

if ($decoded === false) {
    throw new RuntimeException('Invalid ciphertext encoding.');
}

$plaintext = $encrypter->decrypt($decoded);
```

`encrypt()` accepts plaintext bytes and returns binary ciphertext. Base64 makes those bytes safe for a text column, but it is encoding—not extra encryption. `decrypt()` returns the original bytes or fails when the key/ciphertext is invalid. Validate strict `base64_decode()` before decrypting, store the key in protected deployment configuration, and plan key rotation before encrypting long-lived data.

## Key management matters

Encryption is not useful if the key is:

```php
$key = '123456';
```

inside Git.

Keys should be managed securely outside normal source code.

---

# 91. Honeypot Protection

A honeypot adds a form field that normal users are not expected to fill.

Some automated bots fill every field.

That can help identify basic automated submissions.

Useful for:

- public contact forms;
- simple spam reduction.

It is not a replacement for:

- rate limiting;
- authentication;
- CAPTCHA when justified;
- validation;
- abuse monitoring.

CodeIgniter includes a Honeypot filter/class that can be enabled for this purpose.

---

# 92. Security Headers

Useful security headers depend on the application, but commonly reviewed headers include:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
Permissions-Policy
```

Older applications may also use:

```text
X-Frame-Options
```

A Content Security Policy can restrict which script/style/frame sources the browser may load.

Do not copy a CSP from another project blindly.

Build it around the resources your application actually needs.

---

# 93. Content Security Policy

Suppose an attacker injects:

```html
<script src="https://evil.example/x.js"></script>
```

A restrictive CSP may block that external script.

CSP is defense-in-depth, not a substitute for escaping and secure coding.

A mature CSP rollout often uses:

1. inventory of required resources;
2. report-only mode;
3. review violations;
4. tighten policy;
5. enforce.

Be particularly careful with:

```text
'unsafe-inline'
'unsafe-eval'
*
```

because overly broad policies reduce protection.

---

# 94. Method Spoofing

HTML forms natively support:

```text
GET
POST
```

but REST-style applications may want:

```text
PUT
PATCH
DELETE
```

Frameworks can support method spoofing so a POST form can indicate an intended HTTP method.

```php
<form method="post" action="<?= site_url('products/10') ?>">
    <?= csrf_field() ?>
    <input type="hidden" name="_method" value="DELETE">
    <button type="submit">Delete</button>
</form>
```

The browser sends POST, but CI4 interprets the `_method` field as the effective `DELETE` method and can match a `$routes->delete(...)` route. Use only supported values such as `PUT`, `PATCH` or `DELETE`, keep CSRF/authorization enabled, and never trust the method alone as permission.

Use it only where configured and expected.

Security filters should evaluate the effective HTTP method correctly.

---

# 95. Response Traits and API Controllers

CodeIgniter REST helpers reduce repetitive response code.

Typical concepts:

```php
return $this->respond($data);
return $this->respondCreated($data);
return $this->failNotFound();
return $this->failValidationErrors($errors);
```

This is useful because API response behavior becomes more standardized.

Still define your own application-wide API conventions.

A framework helper cannot decide your business error codes for you.

---

# 96. Model Advanced Features

A Model can do more than `find()` and `insert()`.

Features you should investigate include:

- validation;
- callbacks;
- timestamps;
- soft deletes;
- return types;
- field protection;
- data conversion/casting depending on framework version and usage;
- builder access;
- batch operations.

## Soft delete

Instead of physically deleting:

```text
DELETE FROM users WHERE id = 10
```

a row may be marked:

```text
deleted_at = 2026-08-12 10:00:00
```

This is useful when business/audit requirements require recoverability.

But soft delete does not automatically solve legal data-retention requirements.

Configure the Model and table together:

```php
class UserModel extends \CodeIgniter\Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $useSoftDeletes = true;
    protected $deletedField = 'deleted_at';
    protected $useTimestamps = true;
    protected $allowedFields = ['name', 'email'];
}
```

The table needs a nullable `deleted_at` column. With this configuration, `$model->delete($id)` sets the timestamp instead of removing the row; ordinary finds exclude deleted rows. `$model->withDeleted()->findAll()` includes both active and deleted rows, while `$model->onlyDeleted()->findAll()` returns only deleted rows. These calls return row/entity arrays according to the Model return type.

---

# 97. Soft Deletes

Soft deletion is appropriate when:

- records may need restoration;
- history is needed;
- relationships should remain valid.

It may be inappropriate when:

- data must truly be erased;
- table size becomes problematic;
- downstream systems require hard deletion.

You also need to decide:

```text
Should unique email remain reserved after soft delete?
```

This is a database/business-rule question, not merely a framework option.

---

# 98. Model Callbacks

Common callbacks can conceptually run around:

```text
insert
update
delete
find
```

Possible uses:

```text
normalize email to lowercase
generate slug
add audit metadata
transform results
```

Avoid surprising side effects.

Bad callback:

```text
Every invoice update calls ERP and sends three emails.
```

That business behavior should be explicit.

Example small normalization callback:

```php
class UserModel extends \CodeIgniter\Model
{
    protected $beforeInsert = ['normalizeEmail'];
    protected $beforeUpdate = ['normalizeEmail'];

    protected function normalizeEmail(array $event): array
    {
        if (isset($event['data']['email'])) {
            $event['data']['email'] = strtolower(
                trim($event['data']['email'])
            );
        }

        return $event;
    }
}
```

The callback receives an event array containing operation data, modifies the email when present, and must return the array so the Model can continue. Callback property order matters. Keep transformations deterministic and test them through insert/update behavior.

---

# 99. Database Forge

Database Forge provides programmatic schema-management operations.

Migrations commonly use it to:

- create tables;
- drop tables;
- add fields;
- modify fields;
- add keys.

Example mental model:

```text
Migration = versioned schema change
Forge = API used to perform schema changes
```

Most application developers interact with Forge mainly through migrations.

---

# 100. Database Metadata

Sometimes code or tooling needs to inspect schema information.

Examples:

- list tables;
- inspect field definitions;
- check indexes/keys depending on driver support;
- build developer tooling.

Do not use metadata inspection on every normal request if the schema is known ahead of time.

That creates unnecessary work and can hide migration problems.

```php
$db = db_connect();

$tables = $db->listTables();
$fields = $db->getFieldData('invoices');
$hasStatus = $db->fieldExists('status', 'invoices');
```

`listTables()` returns table names, `getFieldData()` returns field metadata objects, and `fieldExists(field, table)` returns a Boolean. Driver capabilities/details vary, so use these APIs mainly for migrations, diagnostics and developer tooling—not as a substitute for a known schema.

---

# 101. Database Utilities and Maintenance

Database utility features may help with maintenance operations depending on the database driver.

Production database operations should still be handled according to proper operational practices.

For backups:

```text
Creating a backup
```

is only half the job.

You must verify:

```text
Can it be restored?
```

A backup that has never been restore-tested should not be considered fully trustworthy.

---

# 102. Database Events

Database events can provide hooks for analysis or instrumentation.

Potential uses:

- query timing;
- diagnostic information;
- profiling.

Avoid adding heavy work around every query.

If every query triggers an external log API call, your database performance problem can become an application-wide performance problem.

Development-only timing/logging can subscribe to the `DBQuery` event:

```php
use CodeIgniter\Database\Query;
use CodeIgniter\Events\Events;

Events::on('DBQuery', static function (Query $query): void {
    log_message('debug', 'SQL duration: {duration}', [
        'duration' => $query->getDuration(),
    ]);
});
```

The listener receives the completed Query object. `getDuration()` returns execution time. Register listeners during application bootstrap/configuration, keep callbacks lightweight, and do not log unrestricted SQL/parameters in production because they may contain sensitive data.

---

# 103. Factories

Factories help create or retrieve class instances by convention.

The broad idea:

```text
Give framework a class type/name
→ framework resolves an application/package class
→ optionally shares instance
```

Factories can reduce manual construction for certain extension points.

For business-critical dependencies, explicit construction or services can sometimes be clearer.

Understand both tools and choose based on readability.

---

# 104. Code Modules

A module packages related application components under a namespace.

A module may contain its own:

```text
Controllers
Models
Config
Database
Views
Language
```

Possible modules:

```text
Invoice
Procurement
Attendance
Travel
AssetManagement
```

## When modules help

Useful when:

- application is large;
- features have clear boundaries;
- teams own different areas;
- features may be reusable.

## When modules hurt

If every tiny page becomes a module, developers spend more time navigating architecture than solving problems.

---

# 105. Package Development

Reusable functionality may belong in a Composer package instead of directly in one application.

Good candidates:

- shared company authentication client;
- reusable API SDK;
- common document parser;
- shared logging integration.

Package design should avoid depending unnecessarily on one application's:

```text
database tables
routes
session keys
environment assumptions
```

The less application-specific coupling, the more reusable the package.

---

# 106. Events vs Services vs Callbacks

Use a service when:

```text
The caller needs this business operation to happen.
```

Example:

```text
ApproveInvoiceService
```

Use an event when:

```text
Other parts may react to something that already happened.
```

Example:

```text
InvoiceApproved
```

Use a model callback when:

```text
Small persistence-specific transformation belongs around model operation.
```

Example:

```text
normalize email before insert
```

Do not choose only based on what is technically possible.

Choose the mechanism that makes intent obvious.

---

# 107. Validation Custom Rules

Built-in validation rules cover many cases.

You may need business-specific reusable validation.

Examples:

```text
valid_sgid
valid_vendor_code
valid_purchase_order
company_email
```

However, ask whether the rule is:

```text
input-format validation
```

or:

```text
business logic
```

Example:

```text
Invoice can be approved only if GIR is matched.
```

That is not simply a field validation rule. It belongs in business workflow logic.

---

# 108. Custom Error Messages

A technical error:

```text
The invoice_number field must contain a unique value.
```

may be less useful than:

```text
Invoice number INV-1009 already exists for this vendor.
```

Give users messages that help them correct the problem.

For APIs, separate:

```text
human message
machine-readable code
field errors
```

Example:

```json
{
  "code": "DUPLICATE_INVOICE",
  "message": "This invoice has already been registered.",
  "errors": {
    "invoice_number": "Duplicate invoice number."
  }
}
```

---

# 109. Validation Scenario: Create Vendor

Input:

```json
{
  "code": "V100",
  "name": "ABC Industries",
  "email": "ap@abc.example"
}
```

Field validation:

```text
code required
name required
email valid
```

Business validation:

```text
vendor code must be unique within company
vendor must not be blacklisted
required tax registration must exist
```

Infrastructure validation:

```text
external ERP vendor lookup succeeds
```

These are different layers.

Keep them separate so failures are understandable.

---

# 110. Session Security

Secure session design includes:

- regenerate session identifier after login;
- expire sessions appropriately;
- invalidate on logout;
- secure cookies;
- avoid putting unnecessary sensitive data into session;
- prevent session fixation;
- review concurrent-session requirements.

Do not store the entire user database row in session if only these are needed:

```text
user ID
authentication state
small permission/session metadata
```

Fresh authorization data may sometimes need to be loaded from database/cache.

On successful login:

```php
$session = session();
$session->regenerate(true);
$session->set([
    'user_id' => $user->id,
    'authenticated' => true,
]);
```

`regenerate(true)` creates a new session ID and destroys the old session data before the application stores the authenticated identity. On logout, call `session()->destroy()` and return a redirect. Also review the `Session` and `Cookie` config values for expiry, handler storage, Secure, HttpOnly and SameSite behavior.

---

# 111. Remember-Me Design

A naïve implementation:

```text
cookie = user_id=10
```

is insecure.

Anyone could change it.

Use a maintained authentication library.

A proper remember-me mechanism generally uses a high-entropy random token, secure storage strategy, expiration, rotation, and revocation.

This is exactly the kind of feature you should not reinvent casually.

---

# 112. Authentication with CodeIgniter Shield

CodeIgniter Shield is the official CI4 authentication/authorization project.

Study its documentation for the current version when implementing:

- session authentication;
- groups;
- permissions;
- access tokens;
- authentication actions.

Important principle:

> Do not copy authentication examples from an old blog without checking the current Shield documentation.

Security libraries evolve.

Use the [official Shield documentation](https://shield.codeigniter.com/) for installation, migrations, authenticators, groups, permissions and filters. Pin a compatible Composer version, read its upgrade notes, and test login, logout, recovery, remember-me, token and authorization flows after upgrades.

---

# 113. Authorization Policy Pattern

For complex object-level authorization, a policy-style class can keep rules readable.

Example:

```php
class InvoicePolicy
{
    public function approve(User $user, Invoice $invoice): bool
    {
        if (! $user->can('invoice.approve')) {
            return false;
        }

        if ($invoice->status !== 'approval_pending') {
            return false;
        }

        return $invoice->approverId === $user->id;
    }
}
```

Controller/service can ask:

```php
$policy->approve($user, $invoice)
```

instead of repeating permission logic in multiple controllers.

---

# 114. Multi-Tenant Applications

A multi-tenant application serves multiple customers/companies from one application.

Possible isolation designs:

```text
shared database + tenant_id
schema per tenant
database per tenant
```

If using shared tables, every tenant-owned query must enforce tenant scope.

Dangerous:

```php
$invoiceModel->find($id);
```

if invoice IDs are guessable and tenant ownership is not checked.

Better concept:

```php
$invoiceRepository->findForTenant(
    $tenantId,
    $invoiceId
);
```

Multi-tenancy is primarily a data-isolation problem.

---

# 115. Audit Logging

Application logs and audit logs are different.

Application log:

```text
Database timeout while posting invoice.
```

Audit log:

```text
User 104 changed invoice 551
from approval_pending to approved
at 2026-08-12T10:30:00Z.
```

Audit records often need stronger guarantees and longer retention.

Useful fields:

```text
event
entity_type
entity_id
actor_id
old_value
new_value
timestamp
IP/request metadata when appropriate
correlation_id
```

Do not store sensitive data unnecessarily.

---

# 116. Concurrency

Two users can act at nearly the same time.

Example:

```text
User A approves invoice 100
User B approves invoice 100
```

Both requests read:

```text
status = pending
```

Then both write.

Possible protections include:

- conditional updates;
- optimistic locking;
- row locks where appropriate;
- unique constraints;
- state transition checks inside transactions.

Example SQL idea:

```sql
UPDATE invoices
SET status = 'approved'
WHERE id = ?
  AND status = 'pending';
```

Then verify affected rows.

Concurrency must be handled at the database/business layer, not only with disabled UI buttons.

---

# 117. Idempotent Endpoints

An idempotent operation can be repeated without creating duplicate business effects.

For example:

```text
POST /payments
```

may use:

```text
Idempotency-Key: 8d51...
```

Server records that key.

If client retries, server returns the original result instead of creating another payment.

Useful for:

- payments;
- ERP posting;
- invoice submission;
- external callbacks;
- slow network operations.

---

# 118. Webhooks

A webhook is an HTTP request sent by another system when something happens.

Example:

```text
Payment provider
→ POST /webhooks/payment
```

Never trust webhook data merely because the endpoint is hard to guess.

Verify according to provider protocol:

- signature;
- timestamp;
- shared secret/public key;
- replay protection.

Then process idempotently.

Return quickly when possible and move long work to a background job.

---

# 119. Background Jobs

Long operations should often leave the request path.

Examples:

```text
OCR
large PDF generation
bulk email
ERP sync
big Excel export
image conversion
```

General architecture:

```text
HTTP request
↓
Create job row/message
↓
Return accepted response
↓
Worker processes job
↓
Store status/result
```

CodeIgniter provides CLI infrastructure, and the ecosystem may provide task/queue packages. Check the current official package maturity before committing a critical production design to newer/beta components.

---

# 120. Job Table Pattern

If a dedicated queue system is not available, a controlled database job table can be a simple option.

Example:

```text
jobs
----
id
type
payload
status
attempts
available_at
locked_at
last_error
created_at
updated_at
```

Worker:

```bash
php spark jobs:work
```

Important concerns:

- atomic claim;
- timeout;
- retry;
- max attempts;
- dead-letter/failure state;
- duplicate prevention;
- worker monitoring.

Do not simply:

```sql
SELECT * FROM jobs WHERE status='pending' LIMIT 1
```

from multiple workers without concurrency protection.

---

# 121. Logging Correlation IDs

A correlation ID links logs from one business/request flow.

Example:

```text
request_id = req_01J...
```

Log:

```text
[req_01J...] invoice uploaded
[req_01J...] OCR started
[req_01J...] ERP request sent
[req_01J...] ERP returned 503
```

This makes troubleshooting dramatically easier.

Propagate correlation IDs to external services when possible.

---

# 122. Observability

Production observability has three major signals:

```text
Logs
Metrics
Traces
```

Examples:

Logs:

```text
Invoice 100 failed validation.
```

Metrics:

```text
invoice_processing_duration_seconds
erp_post_failures_total
pending_invoice_count
```

Traces:

```text
browser request
→ API
→ database
→ OCR service
→ ERP
```

CodeIgniter logging is one component of a wider production monitoring strategy.

---

# 123. Health Checks

A health endpoint might answer:

```text
Is application process alive?
```

A deeper readiness check might answer:

```text
Can application reach required database/cache?
```

Do not expose detailed internal diagnostics publicly.

Example output:

```json
{
  "status": "ok"
}
```

Monitoring systems can call this endpoint periodically.

---

# 124. Environment Configuration Strategy

Typical environments:

```text
local
development
testing
staging/UAT
production
```

Never write code like:

```php
if ($_SERVER['HTTP_HOST'] === 'prod-server-3') {
```

for important environment logic.

Use configuration and environment variables.

Separate:

```text
code
```

from:

```text
deployment configuration
```

---

# 125. Secrets Management

`.env` is useful for local/deployment configuration but mature production systems may use a dedicated secret manager.

Examples of secrets:

```text
DB password
SMTP password
API key
encryption key
OAuth client secret
```

Requirements:

- restricted access;
- rotation;
- auditing;
- no source-control history;
- no plaintext logs.

If a secret is accidentally committed, deleting the line later does not make the old secret safe.

Rotate it.

---

# 126. Configuration Classes

Config classes provide typed, centralized application settings.

Example conceptual config:

```php
namespace Config;

use CodeIgniter\Config\BaseConfig;

class Invoice extends BaseConfig
{
    public int $maxUploadMb = 10;
    public int $approvalReminderHours = 24;
}
```

Then application code can read one configuration source instead of scattering magic values:

```php
$maxUpload = config('Invoice')->maxUploadMb;
```

Use environment variables for values that vary by deployment, and config classes for application configuration structure.

---

# 127. Common Functions

CodeIgniter exposes useful global functions for framework tasks.

Examples you will commonly encounter include concepts like:

```text
service()
config()
helper()
view()
redirect()
session()
db_connect()
log_message()
```

Do not confuse convenience with architecture.

This:

```php
service('everything')
```

inside every method creates hidden dependencies.

Use convenience functions thoughtfully.

---

# 128. Dependency Injection

Dependency injection means a class receives what it needs instead of constructing every dependency internally.

Hard to test:

```php
class InvoiceService
{
    public function process()
    {
        $erp = new SapErpClient();
    }
}
```

Better:

```php
class InvoiceService
{
    public function __construct(
        private ErpClientInterface $erp
    ) {}
}
```

Test:

```php
$service = new InvoiceService(
    new FakeErpClient()
);
```

Dependency injection is not a framework-specific idea. It is a general software-design technique.

---

# 129. Service Locator vs Dependency Injection

Service locator:

```php
$cache = service('cache');
```

Dependency injection:

```php
public function __construct(
    CacheInterface $cache
) {}
```

Service locators are convenient.

Dependency injection makes dependencies explicit.

A practical application may use both.

For critical domain services, explicit dependencies are often easier to test and reason about.

---

# 130. View Escaping Context

Escaping depends on where data is placed.

HTML text:

```php
<?= esc($value) ?>
```

But values used in:

```text
HTML attribute
JavaScript
CSS
URL
```

may need context-appropriate handling.

Never build JavaScript by directly concatenating untrusted strings.

Prefer serializing data safely:

```php
<script>
const data = <?= json_encode($data) ?>;
</script>
```

with appropriate JSON/HTML safety considerations for your context.

---

# 131. Output Encoding vs Input Validation

Validation:

```text
"Is this a valid email?"
```

Escaping:

```text
"How do I safely display this value in HTML?"
```

These are not interchangeable.

A display name may legitimately contain:

```text
O'Connor
```

Validation should allow valid content.

Escaping should ensure it cannot become executable markup.

---

# 132. Upload Threat Model

An upload endpoint should consider:

```text
oversized files
malware
fake extension
path traversal
decompression bombs
HTML/SVG active content
public execution
duplicate upload
sensitive data exposure
```

For documents:

- store outside executable public directories;
- use random stored names;
- verify file type;
- scan when required;
- restrict size;
- authorize downloads;
- record audit metadata.

---

# 133. Large File Processing

Do not assume a 200 MB file should be read fully into PHP memory.

For large processing:

- stream where possible;
- set explicit limits;
- process asynchronously;
- control temporary storage;
- clean temporary files;
- monitor disk usage.

`writable/` can become a production incident if temporary files are never cleaned.

---

# 134. Data Export Design

Exports such as:

```text
CSV
Excel
PDF
```

can become expensive.

For 100 rows:

```text
synchronous download
```

may be fine.

For 2 million rows:

```text
create export job
→ background worker
→ store file
→ notify user
```

is more reliable.

Also enforce authorization on generated export files.

---

# 135. Search and Filtering Design

List endpoint:

```text
GET /invoices
```

Possible query parameters:

```text
status
vendor
from_date
to_date
min_amount
max_amount
page
sort
```

Validate filters.

Do not allow arbitrary SQL column names directly from user input.

Unsafe:

```php
$builder->orderBy(
    $this->request->getGet('sort')
);
```

Use allow-list:

```php
$allowedSorts = [
    'invoice_date',
    'amount',
    'created_at',
];
```

---

# 136. Pagination for APIs

API response can include metadata:

```json
{
  "data": [],
  "meta": {
    "page": 2,
    "per_page": 25,
    "total": 240,
    "pages": 10
  }
}
```

For very large datasets, cursor/keyset pagination may perform better than deep offset pagination.

Example concept:

```text
GET /api/invoices?after_id=10000&limit=100
```

Choose based on consumer needs.

---

# 137. Database Index Thinking

Do not create an index on every column.

Indexes:

- speed many reads;
- consume space;
- add write overhead.

Design indexes around real queries.

Example query:

```sql
WHERE company_id = ?
  AND status = ?
ORDER BY created_at DESC
```

may benefit from an index designed around those columns.

Verify with your database's execution plan tools.

---

# 138. Unique Constraints

Application validation alone cannot fully prevent duplicates under concurrency.

Two requests may both check:

```text
invoice number does not exist
```

at the same time.

Both then insert.

Database unique constraint is the final protection.

Example:

```text
UNIQUE(company_id, vendor_id, invoice_number)
```

Then application catches duplicate violation and returns a meaningful message.

---

# 139. Foreign Keys

Foreign keys protect relational integrity.

Example:

```text
invoice.vendor_id
→ vendors.id
```

They can prevent orphan data.

Decide deletion behavior carefully:

```text
RESTRICT
CASCADE
SET NULL
```

Do not use `CASCADE` automatically for financial/audit records without understanding consequences.

---

# 140. Money

Do not casually model money using binary floating-point.

Database:

```text
DECIMAL(15,2)
```

is common for currency amounts.

In PHP, exact financial rules may require:

- integer minor units;
- decimal arithmetic library;
- careful rounding policy.

Define:

```text
currency
rounding rule
tax precision
display precision
calculation precision
```

Explicitly.

A ₹0.01 difference repeated across millions of records becomes real money.

---

# 141. Status as a State Machine

Instead of treating status as a free text field:

```text
pending
approved
rejected
posted
```

treat it as a state machine.

Example allowed transitions:

```text
uploaded → extracted
extracted → validation_failed
extracted → approval_pending
approval_pending → approved
approval_pending → rejected
approved → posting
posting → posted
posting → posting_failed
posting_failed → posting
```

Write tests for every allowed and forbidden transition.

---

# 142. Exception Types

Do not throw generic `Exception` for every failure.

Create meaningful exceptions when useful:

```text
InvoiceNotFoundException
InvoiceAlreadyPostedException
ApprovalNotAllowedException
ErpUnavailableException
```

Controller/API layer can map them to:

```text
404
409
403
503
```

without parsing error-message strings.

---

# 143. Domain Errors vs System Errors

Domain error:

```text
Invoice cannot be approved because amount exceeds approval limit.
```

Expected business condition.

System error:

```text
Database connection timed out.
```

Unexpected infrastructure failure.

Treat them differently.

Domain errors can often be shown to the user.

System errors should usually produce a generic user message plus detailed internal logs.

---

# 144. API Error Mapping

Example:

```text
InvoiceNotFoundException → 404
ValidationException → 422
UnauthorizedException → 401
ForbiddenException → 403
ConflictException → 409
ErpUnavailableException → 503
```

Centralize this mapping when the API becomes large.

Avoid repeating identical try/catch blocks in every controller.

---

# 145. Versioned Database Changes

Never edit an already-deployed migration casually.

Once migration `001_create_invoices` has run in production, create a new migration:

```text
002_add_payment_date_to_invoices
```

Why?

Existing environments remember what has already run.

Changing history creates inconsistent schemas.

Treat deployed migrations as historical records.

---

# 146. Zero-Downtime Migration Thinking

Potentially dangerous change:

```text
rename column invoice_amount → total_amount
```

Old application expects:

```text
invoice_amount
```

New application expects:

```text
total_amount
```

During rolling deployment, both versions may run.

Safer pattern can be:

1. add new column;
2. write both;
3. backfill;
4. deploy reads from new;
5. stop writing old;
6. remove old in later deployment.

This is an advanced operations topic but extremely important for large systems.

---

# 147. Logging SQL Carefully

SQL logging is helpful in development.

In production, SQL may contain:

- personal data;
- invoice details;
- access tokens if badly designed;
- huge payloads.

Do not enable unrestricted verbose SQL logging without considering performance and data exposure.

---

# 148. Development Toolbar

CodeIgniter's developer tools can help inspect request performance and debugging information in development.

Use such tooling to investigate:

- queries;
- timings;
- request details.

Do not expose development diagnostics in production.

The AppStarter normally enables the `toolbar` after-filter in development. The toolbar injects a collector panel into compatible HTML responses; collectors can show timeline, database, log, view and route information. Confirm `CI_ENVIRONMENT = production` and that debug/toolbar filters are not exposed on production responses, especially JSON/download endpoints.

---

# 149. Debugging Performance

When a page is slow, break down the time:

```text
routing
controller/service
database
external API
view rendering
network/browser
```

Do not assume database is always the problem.

Example:

```text
DB query: 80 ms
ERP API: 12 seconds
```

Adding a DB index will not solve the 12-second ERP call.

---

# 150. Testing Authorization

For every protected action, test at least:

```text
anonymous user
authenticated unauthorized user
authorized user
wrong tenant/object
```

Example:

```text
Finance user can approve assigned invoice.
Finance user cannot approve another company's invoice.
Employee cannot approve invoice.
Anonymous user is rejected.
```

Authorization bugs are often more serious than UI bugs.

---

# 151. Testing Validation

Test boundaries.

If field is:

```text
max 100 characters
```

test:

```text
0
1
100
101
```

If amount must be greater than zero:

```text
-1
0
0.01
```

Boundary tests catch mistakes quickly.

---

# 152. Testing Failure Paths

Do not test only:

```text
everything succeeds
```

Also test:

```text
database failure
external API timeout
duplicate invoice
invalid status
permission denied
file too large
bad MIME type
second retry
```

Production reliability is mostly about how software behaves when something goes wrong.

---

# 153. Fixtures and Factories for Tests

Create readable test data builders.

Instead of repeating:

```php
[
    'invoice_number' => 'INV-1001',
    'amount' => '5000.00',
    'vendor_id' => 25,
    'status' => 'pending',
    'created_by' => 10,
]
```

in every test, use a factory/helper:

```php
$invoice = InvoiceFactory::pending([
    'amount' => 5000,
]);
```

Tests become easier to understand.

---

# 154. Unit vs Feature Test Decision

Use unit test when checking:

```text
calculation
state transition
policy rule
parser
```

Use feature/integration test when checking:

```text
route
filter
request validation
controller response
database integration
```

You need both.

Not every class requires its own isolated unit test if higher-level tests cover it better.

---

# 155. Static Analysis and Code Quality

Beyond CI4 itself, professional PHP projects often use tools for:

- coding standard checks;
- static analysis;
- automated refactoring;
- dependency auditing.

The framework does not replace these practices.

A good CI pipeline may run:

```text
composer validate
coding standard
static analysis
unit tests
feature tests
security/dependency scan
```

before deployment.

---

# 156. Composer Dependency Hygiene

Before adding a package, ask:

```text
Is it actively maintained?
Does it support my PHP/CI4 version?
How many transitive dependencies?
Is the license acceptable?
Is it security-sensitive?
Can I remove it later?
```

Do not install a 40-package dependency tree to implement a five-line utility.

But also do not reinvent a mature security library.

Balance matters.

---

# 157. Upgrading CodeIgniter

Framework upgrades should be deliberate.

Typical process:

1. read upgrade notes/changelog;
2. update dependencies in a branch;
3. run automated tests;
4. fix deprecations;
5. test critical workflows;
6. deploy to staging;
7. monitor;
8. release production.

Never assume:

```bash
composer update
```

is a safe production upgrade procedure by itself.

---

# 158. Deprecations

A deprecation means:

```text
This behavior still exists now, but may be removed/changed later.
```

Do not ignore deprecation messages indefinitely.

Treat them as early migration warnings.

Fixing them gradually is much easier than fixing hundreds during a forced major upgrade.

---

# 159. CI4 Upgrade Checklist

- [ ] Read official changelog.
- [ ] Read upgrade guide.
- [ ] Check minimum PHP version.
- [ ] Check extensions.
- [ ] Check Composer dependencies.
- [ ] Run full tests.
- [ ] Review routing behavior.
- [ ] Review filter behavior.
- [ ] Review validation changes.
- [ ] Review database/model changes.
- [ ] Test session/authentication.
- [ ] Test file uploads.
- [ ] Test CLI jobs.
- [ ] Test external integrations.
- [ ] Review deprecations.
- [ ] Deploy to staging first.

---

# 160. Architecture Decision Example

Requirement:

```text
Generate monthly payroll report.
10,000 employees.
Report takes 3 minutes.
```

Bad design:

```text
GET /report/payroll
→ browser waits 3 minutes
→ request times out
```

Better:

```text
POST /reports/payroll
→ create report job
→ return job ID

GET /reports/jobs/123
→ processing

Worker
→ builds file

GET /reports/jobs/123
→ complete + authorized download URL
```

This is not "more framework code."

It is better system design.

---

# 161. Architecture Decision Example: Simple Admin CRUD

Requirement:

```text
Manage 50 departments.
```

Do not build:

```text
CQRS
event sourcing
message bus
10 repositories
8 DTOs
3 domain layers
```

A simple:

```text
Controller
Model
View
Validation
```

may be ideal.

Architecture should match complexity.

---

# 162. Architecture Decision Example: Financial Posting

Requirement:

```text
Post approved invoice to ERP exactly once.
```

Now complexity is justified:

```text
explicit state machine
idempotency
transaction
audit log
ERP client
retry policy
job worker
monitoring
reconciliation
```

The cost of duplicate or missing posting is high.

Design effort should reflect business risk.

---

# 163. Reconciliation

When integrating systems, successful API response is not always enough.

You may need periodic reconciliation:

```text
Local posted invoices
vs
ERP posted invoices
```

Find:

```text
local says posted, ERP missing
ERP says posted, local pending
amount mismatch
duplicate document
```

Create a scheduled command/report.

This is especially important for finance and payment systems.

---

# 164. Reconciliation Command Example

Command:

```bash
php spark invoices:reconcile --date=2026-08-11
```

Process:

```text
Load local postings
Fetch ERP posting report
Match by business key
Record discrepancies
Generate alert/report
```

Do not automatically "fix" every mismatch without understanding business impact.

---

# 165. Audit-Friendly Delete Design

For business records:

```text
Delete Invoice
```

may really mean:

```text
Cancel Invoice
```

instead of physical deletion.

Possible states:

```text
draft
submitted
cancelled
```

Keep original data and reason:

```text
cancelled_by
cancelled_at
cancel_reason
```

This may be much more appropriate than deleting the row.

---

# 166. Frontend + CI4 API Architecture

Modern architecture may be:

```text
Angular/React/Vue
      ↓
CodeIgniter 4 REST API
      ↓
Database
```

In this design:

- views may be minimal or unused;
- controllers return JSON;
- authentication may use secure session cookies or tokens;
- CORS matters if origins differ;
- CSRF strategy depends on auth design;
- API contracts become important.

CodeIgniter is still useful even if it does not render HTML.

---

# 167. Same-Origin SPA

A simple architecture:

```text
https://app.example.com/
```

serves:

```text
SPA assets
/api/*
```

from the same origin.

Advantages can include simpler:

- cookies;
- CORS;
- deployment;
- CSRF behavior.

Do not split frontend/API across domains unless there is a reason.

---

# 168. API Contract Documentation

Document endpoints.

For each API:

```text
method
path
authentication
permission
request schema
response schema
error codes
examples
```

Example:

```text
POST /api/v1/invoices/{id}/approve

Permission:
invoice.approve

Response 200:
approved

Response 403:
not allowed

Response 409:
invalid current status
```

OpenAPI/Swagger tooling can help maintain machine-readable API contracts.

---

# 169. API Backward Compatibility

Suppose mobile client expects:

```json
{"name":"Keyboard"}
```

Changing to:

```json
{"product_name":"Keyboard"}
```

can break old clients.

For externally consumed APIs:

- evolve additively when possible;
- version breaking changes;
- announce deprecations;
- measure old version usage.

Internal APIs also benefit from stable contracts.

---

# 170. Data Validation Boundary

Validate data when it enters your system.

Boundaries include:

```text
HTTP request
CSV import
ERP response
queue message
webhook
CLI arguments
file OCR result
```

Do not trust internal-looking data merely because another service produced it.

Systems fail and contracts drift.

---

# 171. OCR Result Validation Scenario

OCR output:

```json
{
  "invoice_no": "I8V-1O09",
  "total": "1O,500.00"
}
```

OCR may confuse:

```text
0 and O
1 and I
```

Do not immediately post to ERP.

Pipeline:

```text
OCR
↓
schema validation
↓
normalization
↓
vendor/PO lookup
↓
calculation checks
↓
confidence/rule evaluation
↓
human review if needed
↓
workflow/posting
```

Framework validation is only one piece of this data-quality process.

---

# 172. Import Processing

CSV import can contain 100,000 rows.

Do not:

```text
read entire file
insert one row
insert one row
insert one row
```

without thinking about performance.

Possible improvements:

- stream rows;
- validate in batches;
- batch insert;
- transaction boundaries;
- reject file report;
- duplicate handling;
- resume strategy.

Always define whether import is:

```text
all-or-nothing
```

or:

```text
partial success allowed
```

---

# 173. Transaction Boundary Design

Do not use one huge transaction for a 30-minute import.

Long transactions can:

- hold locks;
- grow logs;
- block users;
- increase rollback cost.

Use appropriate chunking if business rules allow it.

Atomicity must match the business operation.

---

# 174. Database Deadlocks

Deadlocks can happen when transactions lock resources in conflicting order.

Applications should:

- keep transactions short;
- update resources in consistent order;
- avoid unnecessary locks;
- retry deadlocked transactions carefully when safe.

Do not simply catch every DB error and retry infinitely.

---

# 175. Cache Key Design

Bad cache key:

```text
report
```

Better:

```text
invoice-summary:company:2:month:2026-08
```

A cache key should identify every input that affects the cached result.

If permissions affect data, do not accidentally share one user's sensitive cached result with another user.

---

# 176. Cache Stampede

If a popular cache entry expires, 500 requests might all rebuild it simultaneously.

Mitigation strategies can include:

- locking;
- stale-while-revalidate patterns;
- randomized expiry;
- background refresh.

Usually not necessary for small systems, but important at scale.

---

# 177. Rate-Limit Scenario

Endpoint:

```text
POST /api/ocr
```

OCR is expensive.

Possible policy:

```text
anonymous: not allowed
user: 10/min
tenant: 100/min
file size: 10 MB
concurrent OCR jobs: 5/tenant
```

HTTP rate limiting alone may not control concurrent expensive jobs.

Also limit job concurrency.

---

# 178. Logging Scenario

Bad:

```php
log_message('error', json_encode($request->getJSON(true)));
```

Why?

The request might contain:

```text
password
bank account
tax ID
API token
personal information
```

Instead log safe identifiers:

```php
log_message(
    'error',
    'Invoice import failed. invoiceId={invoiceId} errorCode={errorCode}',
    [
        'invoiceId' => $invoiceId,
        'errorCode' => $errorCode,
    ]
);
```

---

# 179. Error Correlation Response

For unexpected server error:

```json
{
  "status": "error",
  "code": "INTERNAL_ERROR",
  "message": "Unable to process request.",
  "request_id": "req_01J..."
}
```

Logs contain:

```text
req_01J...
full exception
stack trace
internal details
```

User/support can provide request ID without exposing internals.

---

# 180. Production Readiness Review

Before go-live, ask:

## Application

- routes reviewed?
- validation complete?
- permissions complete?
- errors handled?
- tests passing?

## Database

- migrations tested?
- indexes reviewed?
- constraints present?
- backup verified?
- rollback plan?

## Security

- HTTPS?
- secrets secure?
- production mode?
- session settings?
- CSRF/CORS correct?
- uploads protected?
- dependencies current?

## Operations

- logs collected?
- alerts configured?
- health check?
- scheduled jobs monitored?
- disk-space monitoring?
- backup restoration tested?

## Business

- audit trail?
- reconciliation?
- support runbook?
- ownership?
- data retention?

Production readiness is bigger than:

```text
It works on my laptop.
```

---

# 181. What a Senior CodeIgniter Developer Should Know

Framework:

```text
routing
controllers
request/response
filters
models
Query Builder
migrations
validation
sessions
cache
CLI
testing
```

PHP:

```text
OOP
typing
exceptions
Composer
namespaces
interfaces
traits
iterators
modern PHP features
```

Database:

```text
SQL
joins
indexes
transactions
constraints
query plans
locking
normalization
```

Web:

```text
HTTP
cookies
sessions
CORS
CSRF
XSS
TLS
caching
status codes
```

Architecture:

```text
service layer
dependency injection
idempotency
state machines
queues/jobs
integration design
observability
```

Operations:

```text
Linux/web server
deployment
Docker
logs
monitoring
backups
CI/CD
security updates
```

Knowing framework syntax alone is not senior-level knowledge.

---

# 182. Final Mastery Exercises

Do each without copying a full tutorial.

## Exercise 1

Create `/hello/(:segment)` route that safely displays a name.

## Exercise 2

Create Product CRUD with migration and validation.

## Exercise 3

Add authentication and restrict Product write operations.

## Exercise 4

Add `product.manage` permission.

## Exercise 5

Add pagination and search.

## Exercise 6

Create Product REST API.

## Exercise 7

Write tests for Product API validation.

## Exercise 8

Create file upload with size/type validation.

## Exercise 9

Build custom Spark command to deactivate expired products.

## Exercise 10

Build invoice state machine.

## Exercise 11

Simulate ERP timeout and implement safe retry.

## Exercise 12

Add audit logs.

## Exercise 13

Add idempotency to invoice posting.

## Exercise 14

Add API rate limiting.

## Exercise 15

Dockerize the application.

## Exercise 16

Deploy it using `public/` as web root.

## Exercise 17

Run security review.

## Exercise 18

Profile a slow query and add a justified index.

## Exercise 19

Write a reconciliation command.

## Exercise 20

Upgrade CI4 in a branch and resolve deprecations safely.

If you can explain and implement these exercises, you have moved well beyond beginner CodeIgniter development.

---

# Appendix I — Master Topic Map

Use this topic map for revision.

```text
CODEIGNITER 4
│
├── Foundation
│   ├── PHP
│   ├── Composer
│   ├── Namespaces
│   ├── HTTP
│   └── MVC
│
├── Application
│   ├── Structure
│   ├── Config
│   ├── Environment
│   ├── Modules
│   ├── Services
│   └── Factories
│
├── Incoming Request
│   ├── Routing
│   ├── Request
│   ├── Filters
│   ├── Validation
│   ├── Files
│   └── Security
│
├── Business Logic
│   ├── Controllers
│   ├── Services
│   ├── DTOs
│   ├── Policies
│   ├── Events
│   └── Domain Rules
│
├── Data
│   ├── DB Connection
│   ├── Query Builder
│   ├── Models
│   ├── Entities
│   ├── Transactions
│   ├── Migrations
│   ├── Seeders
│   ├── Forge
│   └── Metadata
│
├── Outgoing Response
│   ├── Response
│   ├── Views
│   ├── Layouts
│   ├── JSON
│   ├── Localization
│   └── Content Negotiation
│
├── Libraries
│   ├── Session
│   ├── Email
│   ├── Cache
│   ├── Encryption
│   ├── Time
│   ├── HTTP Client
│   ├── Files
│   ├── Images
│   └── Honeypot
│
├── API
│   ├── Resource Controllers
│   ├── JSON
│   ├── Status Codes
│   ├── CORS
│   ├── Auth
│   ├── Rate Limiting
│   └── Versioning
│
├── CLI
│   ├── Spark
│   ├── Generators
│   ├── Custom Commands
│   ├── Cron
│   └── Workers
│
├── Testing
│   ├── Unit
│   ├── Feature
│   ├── Database
│   ├── Mocks
│   └── Failure Cases
│
├── Security
│   ├── SQL Injection
│   ├── XSS
│   ├── CSRF
│   ├── Auth
│   ├── Authorization
│   ├── Uploads
│   ├── CSP
│   └── Secrets
│
├── Performance
│   ├── Indexes
│   ├── N+1
│   ├── Pagination
│   ├── Cache
│   ├── Jobs
│   └── Profiling
│
└── Production
    ├── Deployment
    ├── Apache/Nginx/IIS
    ├── Docker
    ├── Logs
    ├── Metrics
    ├── Backups
    ├── Health Checks
    ├── CI/CD
    └── Upgrades
```

---

# Appendix J — Quick Decision Table

| Problem | First Tool/Pattern to Consider |
| --- | --- |
| URL maps to action | Route |
| Handle request | Controller |
| Read request input | Request object |
| Return HTTP output | Response object |
| Display HTML | View |
| Reuse layout | View layout/sections |
| Simple utility function | Helper |
| Business workflow | Service |
| Standard table CRUD | Model |
| Complex SQL | Query Builder / bound SQL |
| Represent row as object | Entity |
| Change schema | Migration |
| Insert initial/sample data | Seeder |
| Multi-write atomicity | Transaction |
| Validate incoming fields | Validation |
| Login/access checks | Authentication/Authorization |
| Cross-cutting request rule | Filter |
| Temporary user state | Session |
| One-time redirect message | Flashdata |
| Browser preference | Cookie |
| Expensive reusable result | Cache |
| Scheduled server task | Spark command |
| External HTTP API | CURLRequest/client service |
| REST resource | ResourceController/API controller |
| Repeatable verification | Automated test |
| Reusable feature boundary | Module/package |
| Slow background work | Worker/queue/job |
| External duplicate risk | Idempotency |
| Status workflow | State machine |
| Production troubleshooting | Logs + correlation ID |
| System mismatch | Reconciliation |

---

# Appendix K — Never Forget These 25 Rules

1. **Public traffic should enter through `public/`.**
2. **Define and review routes intentionally.**
3. **Keep controllers small.**
4. **Put business workflows in testable services.**
5. **Never trust request input.**
6. **Validation and authorization are different.**
7. **Always enforce permissions on the backend.**
8. **Escape untrusted output.**
9. **Use parameterized SQL/Query Builder.**
10. **Protect Model mass assignment.**
11. **Use migrations for schema changes.**
12. **Use database constraints for data integrity.**
13. **Use transactions when writes must be atomic.**
14. **Design status transitions explicitly.**
15. **Expect duplicate requests.**
16. **Expect concurrent requests.**
17. **Expect external systems to fail.**
18. **Use timeouts for network calls.**
19. **Do not log secrets.**
20. **Move slow work out of the HTTP path when appropriate.**
21. **Write tests for money, permissions, and workflow rules.**
22. **Measure performance before optimizing.**
23. **Keep secrets out of source control.**
24. **Read upgrade notes before framework upgrades.**
25. **Choose the simplest architecture that safely satisfies the business requirement.**

---

**End of CodeIgniter 4 Master Learning Handbook**
