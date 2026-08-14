# CodeIgniter 3 Master Handbook

## Beginner-to-Advanced Learning Guide with Real-World Scenarios, Patterns, Examples, Security, APIs, Database Work, Deployment, and Legacy Modernization

> **Purpose:** This is a single-file learning and reference handbook for CodeIgniter 3 (CI3).  
> It is written so that a beginner can learn from the beginning, while an experienced developer can use it as a day-to-day reference.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is CodeIgniter 3?](#2-what-is-codeigniter-3)
3. [CI3 Status and PHP Compatibility](#3-ci3-status-and-php-compatibility)
4. [Prerequisites](#4-prerequisites)
5. [MVC Explained Clearly](#5-mvc-explained-clearly)
6. [How a CI3 Request Works](#6-how-a-ci3-request-works)
7. [Installing CodeIgniter 3](#7-installing-codeigniter-3)
8. [Project Folder Structure](#8-project-folder-structure)
9. [Important Configuration Files](#9-important-configuration-files)
10. [URLs and `index.php`](#10-urls-and-indexphp)
11. [Routing](#11-routing)
12. [Controllers](#12-controllers)
13. [Views](#13-views)
14. [Models](#14-models)
15. [Loader](#15-loader)
16. [Autoloading](#16-autoloading)
17. [Helpers](#17-helpers)
18. [Libraries](#18-libraries)
19. [Custom Libraries](#19-custom-libraries)
20. [Extending Core Classes](#20-extending-core-classes)
21. [Input Handling](#21-input-handling)
22. [URI Class](#22-uri-class)
23. [Output and HTTP Responses](#23-output-and-http-responses)
24. [Forms](#24-forms)
25. [Form Validation](#25-form-validation)
26. [Sessions](#26-sessions)
27. [Flashdata and Tempdata](#27-flashdata-and-tempdata)
28. [Cookies](#28-cookies)
29. [Database Configuration](#29-database-configuration)
30. [Query Builder](#30-query-builder)
31. [CRUD Operations](#31-crud-operations)
32. [Joins, Grouping, Aggregates, and Advanced Queries](#32-joins-grouping-aggregates-and-advanced-queries)
33. [Raw SQL and Bindings](#33-raw-sql-and-bindings)
34. [Query Results](#34-query-results)
35. [Transactions](#35-transactions)
36. [Multiple Database Connections](#36-multiple-database-connections)
37. [Stored Procedures](#37-stored-procedures)
38. [Database Forge](#38-database-forge)
39. [Database Migrations](#39-database-migrations)
40. [Pagination](#40-pagination)
41. [File Uploads](#41-file-uploads)
42. [Image Manipulation](#42-image-manipulation)
43. [Email](#43-email)
44. [File and Download Helpers](#44-file-and-download-helpers)
45. [ZIP Files](#45-zip-files)
46. [Caching](#46-caching)
47. [Benchmarking and Profiling](#47-benchmarking-and-profiling)
48. [Logging and Error Handling](#48-logging-and-error-handling)
49. [Custom 404 and Error Pages](#49-custom-404-and-error-pages)
50. [Security Fundamentals](#50-security-fundamentals)
51. [CSRF Protection](#51-csrf-protection)
52. [XSS and Output Escaping](#52-xss-and-output-escaping)
53. [SQL Injection Protection](#53-sql-injection-protection)
54. [Authentication](#54-authentication)
55. [Authorization and Role-Based Access Control](#55-authorization-and-role-based-access-control)
56. [Password Security](#56-password-security)
57. [AJAX with CI3](#57-ajax-with-ci3)
58. [Building JSON APIs](#58-building-json-apis)
59. [REST-Style API Design](#59-rest-style-api-design)
60. [API Authentication Concepts](#60-api-authentication-concepts)
61. [CORS](#61-cors)
62. [Hooks](#62-hooks)
63. [CLI Controllers](#63-cli-controllers)
64. [Cron Jobs](#64-cron-jobs)
65. [Environment-Specific Configuration](#65-environment-specific-configuration)
66. [Reusable Base Controllers](#66-reusable-base-controllers)
67. [Service-Layer Pattern](#67-service-layer-pattern)
68. [Repository-Like Data Access Pattern](#68-repository-like-data-access-pattern)
69. [Clean Controller Design](#69-clean-controller-design)
70. [Validation and Business Rules](#70-validation-and-business-rules)
71. [Reusable Layouts and Templates](#71-reusable-layouts-and-templates)
72. [HMVC: What It Is and What CI3 Does Not Include](#72-hmvc-what-it-is-and-what-ci3-does-not-include)
73. [Third-Party Packages and Composer](#73-third-party-packages-and-composer)
74. [Common Integrations](#74-common-integrations)
75. [Testing CI3 Applications](#75-testing-ci3-applications)
76. [Performance Optimization](#76-performance-optimization)
77. [Apache Deployment](#77-apache-deployment)
78. [Nginx Deployment](#78-nginx-deployment)
79. [IIS Deployment](#79-iis-deployment)
80. [Production Deployment Checklist](#80-production-deployment-checklist)
81. [PHP 7 to PHP 8 Migration Issues](#81-php-7-to-php-8-migration-issues)
82. [CI2 to CI3 Migration Concepts](#82-ci2-to-ci3-migration-concepts)
83. [Legacy Project Modernization Strategy](#83-legacy-project-modernization-strategy)
84. [Common Errors and Troubleshooting](#84-common-errors-and-troubleshooting)
85. [Real-World Scenario: Employee Management](#85-real-world-scenario-employee-management)
86. [Real-World Scenario: Invoice Approval System](#86-real-world-scenario-invoice-approval-system)
87. [Real-World Scenario: E-Commerce Order](#87-real-world-scenario-e-commerce-order)
88. [Recommended Application Structure](#88-recommended-application-structure)
89. [Coding Standards and Best Practices](#89-coding-standards-and-best-practices)
90. [Bad Patterns to Avoid](#90-bad-patterns-to-avoid)
91. [Useful CI3 Functions Cheat Sheet](#91-useful-ci3-functions-cheat-sheet)
92. [Interview Questions](#92-interview-questions)
93. [Practice Exercises](#93-practice-exercises)
94. [30-Day Learning Roadmap](#94-30-day-learning-roadmap)
95. [Final Mastery Checklist](#95-final-mastery-checklist)
96. [Glossary](#96-glossary)
97. [Official References](#97-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize the entire framework.

Learn CI3 in this order:

```text
PHP fundamentals
      ↓
HTTP request/response
      ↓
MVC
      ↓
Routing
      ↓
Controllers
      ↓
Views
      ↓
Models
      ↓
Database / Query Builder
      ↓
Forms + Validation
      ↓
Sessions + Authentication
      ↓
Security
      ↓
AJAX / APIs
      ↓
Architecture
      ↓
Deployment
      ↓
Legacy modernization
```

For every topic, ask yourself:

1. What problem does this feature solve?
2. Where does the code live?
3. When should I use it?
4. When should I avoid it?
5. What happens if it fails?
6. How would I use it in a real project?

---

# 2. What Is CodeIgniter 3?

CodeIgniter 3 is a lightweight PHP web application framework.

Instead of writing every part of a PHP application manually, CI3 provides reusable framework components for common tasks such as:

- routing;
- controllers;
- views;
- database access;
- form validation;
- sessions;
- uploads;
- email;
- caching;
- logging;
- security helpers;
- pagination.

Without a framework, a developer may repeatedly write code for database connections, request parsing, routing and common utilities.

CI3 gives these tasks a consistent structure.

## Plain PHP example

```php
<?php

$conn = new mysqli('localhost', 'root', '', 'company');

$result = $conn->query('SELECT * FROM employees');

while ($row = $result->fetch_assoc()) {
    echo $row['name'];
}
```

## CI3-style example

```php
class Employee_model extends CI_Model
{
    public function get_all()
    {
        return $this->db
            ->get('employees')
            ->result();
    }
}
```

The main advantage is not that the second example is shorter.

The important advantage is **application organization**.

---

# 3. CI3 Status and PHP Compatibility

CodeIgniter 3 is the legacy, maintenance branch of CodeIgniter. CodeIgniter 4 is the current major version. The latest published CI3 release is 3.1.13, released in March 2022; the CI3 repository describes the branch as receiving mostly security maintenance.

For existing CI3 applications, it remains important to understand the framework because many production systems still use it.

For brand-new applications, evaluate whether a newer supported framework is more appropriate.

The official 3.1.13 requirements page recommends PHP 5.6 or newer and notes that older PHP versions should not be used. That statement is a minimum requirement, not a promise that stock CI3 works unchanged on every future PHP release. CI3 3.1.12 and 3.1.13 contain important PHP 8.0 and PHP 8.1 compatibility work. Stock 3.1.13 should not be treated as officially compatible with PHP 8.2 or later without your own compatibility fixes and regression testing.

> **Security note:** PHP 5.6 and many later PHP releases are themselves end-of-life. A framework may technically run on a PHP version that is no longer safe to operate. Check both the framework and PHP support status when choosing a production runtime.

## Important practical rule

Do not assume that:

```text
old CI3 version + latest PHP version = safe
```

A safer process is:

```text
1. Identify CI3 version
2. Identify PHP version
3. Read CI3 changelog
4. Test all framework libraries used
5. Fix application-level PHP deprecations/errors
6. Run regression tests
7. Upgrade in stages
```

Useful primary sources are the [CI3 server requirements](https://codeigniter.com/userguide3/general/requirements.html), [CI3 changelog](https://codeigniter.com/userguide3/changelog.html), and the [official CI3 repository](https://github.com/bcit-ci/CodeIgniter).

---

# 4. Prerequisites

Before learning CI3, be comfortable with basic PHP, HTML forms, HTTP and SQL. You do not need to be an expert, but you should understand what the following examples receive and return.

## PHP basics

You should know:

```php
$company = 'Acme';

$amount = 1000;

if ($amount > 500) {
    echo 'Approval required';
}
```

`$company` and `$amount` are variables. The `if` statement evaluates a Boolean condition. Because `1000 > 500` is true, the expected output is:

```text
Approval required
```

## Arrays

```php
$user = [
    'id' => 10,
    'name' => 'John',
    'role' => 'admin'
];

echo $user['name'];
```

This is an associative array: each value is addressed by a named key. The expression `$user['name']` returns `John`.

## Functions

```php
function calculate_tax($amount, $rate)
{
    return $amount * $rate;
}

$tax = calculate_tax(1000, 0.18);
echo $tax;
```

`calculate_tax()` accepts an amount and a decimal rate, multiplies them, and returns the result to the caller. It does not print by itself. The example stores the returned value in `$tax` and prints `180`.

## Classes

```php
class Invoice
{
    public $amount;

    public function getAmount()
    {
        return $this->amount;
    }
}

$invoice = new Invoice();
$invoice->amount = 1250;
echo $invoice->getAmount();
```

`new Invoice()` creates an object. `->` accesses an object's property or method. `getAmount()` returns the current `$amount`, so the output is `1250`.

Also learn:

- PHP superglobals;
- HTTP GET and POST;
- HTML forms;
- cookies;
- sessions;
- SQL;
- MySQL/MariaDB basics;
- JSON;
- HTTP status codes;
- object-oriented PHP.

You should also be able to create a database and run a simple parameterized query. CI3 organizes and assists with these concepts; it does not remove the need to understand them.

---

# 5. MVC Explained Clearly

MVC means:

```text
Model
View
Controller
```

## Controller

The controller receives a request and decides what should happen.

Example:

```text
/user/profile/25
```

The controller may:

1. read user ID `25`;
2. ask the model for the user;
3. pass the result to a view.

## Model

A model usually handles data-related operations.

Example:

```php
class User_model extends CI_Model
{
    public function get_by_id($id)
    {
        return $this->db
            ->where('id', $id)
            ->get('users')
            ->row();
    }
}
```

## View

The view generates presentation output.

```php
<h1><?= html_escape($user->name); ?></h1>
```

## Complete flow

```text
Browser
   |
   | GET /users/25
   v
Router
   |
   v
Users Controller
   |
   v
User_model
   |
   v
Database
   |
   v
User_model
   |
   v
Users Controller
   |
   v
profile.php View
   |
   v
HTML Response
```

## Why MVC matters

It prevents code such as this:

```php
<?php

// database query
// validation
// HTML
// session check
// mail sending
// business calculations
// redirect

?>
```

all being mixed into one file.

---

# 6. How a CI3 Request Works

Suppose the user opens:

```text
https://example.com/products/show/15
```

A simplified CI3 flow is:

```text
Web Server
   ↓
index.php
   ↓
CodeIgniter bootstrap
   ↓
Router
   ↓
Products controller
   ↓
show(15)
   ↓
Product_model
   ↓
Database
   ↓
View
   ↓
Output
```

This request lifecycle is extremely important when debugging.

If a page does not work, determine which stage is failing.

For example:

```text
404                       → routing/controller problem
controller loads          → routing probably okay
empty result              → model/query/data problem
data available but no UI  → view problem
redirect loop             → authentication/session/routing issue
500 error                 → PHP/framework/application error
```

---

# 7. Installing CodeIgniter 3

Use the latest stable CI3 package rather than copying an old tutorial's framework files. A basic installation does not require Composer.

Typical installation process:

```text
1. Confirm the intended PHP runtime and required extensions
2. Download and extract the stable CI3 package
3. Point the web server document root at the project directory containing index.php
4. Configure the application base URL and encryption key
5. Configure a least-privilege database account, if the application uses a database
6. Configure routes and optional URL rewriting
7. Make only required runtime directories writable
8. Open the welcome page and inspect the CI/PHP logs for errors
```

Typical project:

```text
myapp/
├── application/
├── system/
├── user_guide/
├── index.php
└── .htaccess
```

Never place business-specific code inside the `system` folder.

The `system` directory belongs to the framework.

Your application code belongs primarily inside:

```text
application/
```

The important files and directories are:

| Path | Purpose | Editing rule |
| --- | --- | --- |
| `index.php` | Front controller that starts CI3 | Adjust environment/system paths only when needed |
| `application/` | Your controllers, models, views and configuration | Normal application work happens here |
| `system/` | Framework source | Replace during framework upgrades; do not add business code |
| `user_guide/` | Offline documentation | Optional in production |

For local development, start with error display and logging appropriate to a development environment. In production, set the environment to `production`, disable public diagnostic output, keep logs outside public reach, and verify that `application/logs/`, the configured session path, cache directories and upload directories have only the permissions they need.

> **Do not use `chmod 777` as a general installation fix.** It grants unnecessary write access and can hide an ownership/configuration problem.

---

# 8. Project Folder Structure

Important directories:

```text
application/
├── cache/
├── config/
├── controllers/
├── core/
├── helpers/
├── hooks/
├── language/
├── libraries/
├── logs/
├── migrations/
├── models/
├── third_party/
└── views/
```

## `controllers/`

Contains request controllers.

```text
application/controllers/Users.php
```

## `models/`

Contains application data models.

```text
application/models/User_model.php
```

## `views/`

Contains HTML/templates.

```text
application/views/users/list.php
```

## `config/`

Contains configuration.

Examples:

```text
config.php
database.php
routes.php
autoload.php
hooks.php
migration.php
```

## `libraries/`

Custom application libraries.

## `helpers/`

Custom helper functions.

## `core/`

Custom extensions of CI core classes.

Example:

```text
MY_Controller.php
```

## `logs/`

CI3 application logs.

Make sure the web server has the required write permissions if file logging is enabled.

---

# 9. Important Configuration Files

## `application/config/config.php`

Contains general application settings.

Important examples:

```php
$config['base_url'] = 'https://example.com/';
$config['index_page'] = '';
$config['encryption_key'] = 'use-a-long-random-secret';
$config['csrf_protection'] = TRUE;
$config['log_threshold'] = 1;
```

## `application/config/database.php`

Database settings.

```php
$db['default'] = [
    'dsn'      => '',
    'hostname' => 'localhost',
    'username' => 'app_user',
    'password' => 'secret',
    'database' => 'company',
    'dbdriver' => 'mysqli',
    'db_debug' => FALSE,
    'char_set' => 'utf8mb4',
    'dbcollat' => 'utf8mb4_unicode_ci',
];
```

Do not commit production secrets into a public repository.

## `routes.php`

Controls URL mapping from incoming URI patterns to controller methods. Route order matters, and routes do not replace authorization.

```php
$route['employees/(:num)'] = 'employees/show/$1';
```

This maps `/employees/25` to `Employees::show(25)`.

## `autoload.php`

Controls components loaded on every request.

```php
$autoload['libraries'] = ['database', 'session'];
$autoload['helper'] = ['url'];
```

Autoload only widely used dependencies. A component used by one controller should usually be loaded by that controller so the dependency and initialization cost remain visible.

---

# 10. URLs and `index.php`

Default CI3 URLs may look like:

```text
https://example.com/index.php/users/profile/10
```

Most production applications remove `index.php` using server rewrite rules.

Then the URL becomes:

```text
https://example.com/users/profile/10
```

This is mainly a web server configuration concern.

---

# 11. Routing

Routes are defined in:

```text
application/config/routes.php
```

## Default controller

```php
$route['default_controller'] = 'home';
```

## Custom route

```php
$route['employees'] = 'employee/index';
```

Now:

```text
/employees
```

runs:

```text
Employee::index()
```

## Parameter route

```php
$route['employee/(:num)'] = 'employee/show/$1';
```

Request:

```text
/employee/25
```

runs:

```php
Employee::show(25)
```

## Wildcards

Common placeholders:

```text
(:num)
(:any)
```

`(:num)` matches digits. `(:any)` matches a non-empty URI segment, not an arbitrary multi-segment path. Captures are passed into the destination as `$1`, `$2`, and so on.

Example:

```php
$route['product/(:num)'] = 'products/show/$1';
```

## Scenario: SEO-friendly URL

Instead of:

```text
/products/show/25
```

you want:

```text
/products/25
```

Use:

```php
$route['products/(:num)'] = 'products/show/$1';
```

Routes are evaluated from top to bottom. Put a specific route before a broad wildcard when both could match.

```php
$route['reports/monthly'] = 'reports/monthly';
$route['reports/(:any)'] = 'reports/show/$1';
```

CI3 also supports HTTP-verb-specific routes. This is useful when the same resource URL performs different actions for `GET` and `POST`:

```php
$route['employees']['get']  = 'employees/index';
$route['employees']['post'] = 'employees/store';
```

The first route handles `GET /employees`; the second handles `POST /employees`. Routing selects a controller method, but that method must still validate input, authenticate the caller and enforce authorization.

## Reserved routes

Common reserved configuration:

```php
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
```

---

# 12. Controllers

A CI3 controller extends `CI_Controller`.

File:

```text
application/controllers/Products.php
```

Example:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller
{
    public function index()
    {
        echo 'Product list';
    }

    public function show($id)
    {
        echo 'Product ID: ' . (int) $id;
    }
}
```

Public controller methods can be routed from a URL. Protected/private methods are for internal controller logic and cannot be normal route targets. In `show($id)`, `$id` comes from the URI or a route capture; casting to `(int)` affects how it is printed but is not a complete existence or authorization check.

For each controller action, define a small request contract:

| Concern | Example for `Products::show($id)` |
| --- | --- |
| HTTP method | `GET` |
| Input | Numeric product ID |
| Success | HTML response with status `200` |
| Missing record | `show_404()` / status `404` |
| Permission failure | Status `403` |
| Side effects | None |

## Constructor

```php
public function __construct()
{
    parent::__construct();

    $this->load->model('Product_model');
}
```

Always call:

```php
parent::__construct();
```

when overriding a CI controller constructor.

## Scenario: authenticated page

```php
public function __construct()
{
    parent::__construct();

    if (!$this->session->userdata('user_id')) {
        redirect('login');
    }
}
```

For large systems, move repeated authentication logic into a base controller or authentication service.

## Keep controllers thin

Bad:

```php
public function save()
{
    // 150 lines:
    // validation
    // query
    // calculations
    // email
    // file upload
    // approvals
    // audit log
}
```

Better:

```php
public function save()
{
    $input = $this->input->post();

    $result = $this->invoice_service->create($input);

    if (!$result['success']) {
        // handle failure
    }

    redirect('invoices');
}
```

---

# 13. Views

Views live in:

```text
application/views/
```

Controller:

```php
$data['name'] = 'John';

$this->load->view('users/profile', $data);
```

View:

```php
<h1>Hello <?= html_escape($name); ?></h1>
```

## Nested folders

```text
views/
└── employees/
    ├── index.php
    ├── create.php
    └── edit.php
```

Load:

```php
$this->load->view('employees/index', $data);
```

## Return a view as a string

```php
$html = $this->load->view('invoice/pdf', $data, TRUE);
```

Useful for:

- email templates;
- PDFs;
- reusable HTML fragments.

## Avoid database queries in views

Bad:

```php
<?php $employees = $this->db->get('employees')->result(); ?>
```

The controller/model should prepare data first.

---

# 14. Models

Models usually extend `CI_Model`.

```php
class Employee_model extends CI_Model
{
    public function get_all()
    {
        return $this->db->get('employees')->result();
    }
}
```

Load model:

```php
$this->load->model('Employee_model');
```

Use:

```php
$employees = $this->Employee_model->get_all();
```

## Aliasing

```php
$this->load->model('Employee_model', 'employees');

$list = $this->employees->get_all();
```

## Good model responsibility

A model may answer questions such as:

```text
get employee
find invoice
insert order
update payment
search customers
check duplicate invoice
load workflow
```

Avoid making every model method depend directly on HTTP POST/session values.

Better:

```php
public function create($data)
{
    return $this->db->insert('employees', $data);
}
```

Instead of:

```php
public function create()
{
    return $this->db->insert('employees', [
        'name' => $_POST['name']
    ]);
}
```

The second implementation makes the model harder to test and reuse.

---

# 15. Loader

The loader gives access to framework components.

## Library

```php
$this->load->library('session');
```

## Helper

```php
$this->load->helper('url');
```

## Model

```php
$this->load->model('User_model');
```

## View

```php
$this->load->view('users/index');
```

## Config

```php
$this->load->config('payments');
```

## Database

```php
$this->load->database();
```

---

# 16. Autoloading

File:

```text
application/config/autoload.php
```

Example:

```php
$autoload['libraries'] = ['database', 'session'];
$autoload['helper'] = ['url', 'form'];
```

Use autoload for components used on nearly every request.

Do not autoload everything.

Why?

Because unnecessary components:

- use memory;
- increase initialization work;
- hide dependencies.

---

# 17. Helpers

Helpers are collections of procedural functions.

Built-in helper examples include:

```text
url
form
file
download
security
text
date
string
cookie
```

Load:

```php
$this->load->helper('url');
```

Use:

```php
echo base_url('assets/css/app.css');
```

## Custom helper

File:

```text
application/helpers/invoice_helper.php
```

```php
<?php

function format_invoice_number($number)
{
    return strtoupper(trim($number));
}
```

Load:

```php
$this->load->helper('invoice');
```

Use:

```php
$number = format_invoice_number(' inv-1001 ');
```

## When to create a helper

Good for:

- small stateless formatting functions;
- reusable conversion functions;
- utility functions.

Not ideal for:

- database-heavy business processes;
- objects that need configuration or state.

For those, prefer libraries/services/models.

---

# 18. Libraries

Libraries are classes that group related behavior and may hold configuration or state. They differ from helpers, which are primarily collections of standalone functions.

Load:

```php
$this->load->library('session');
```

Load with configuration and an alias:

```php
$config = ['mailtype' => 'html'];

$this->load->library(
    'email',
    $config,
    'mailer'
);

$this->mailer->from('noreply@example.com');
```

`library($name, $params, $alias)` loads/initializes the class and attaches it to the CI super-object. In this example, the Email library is available as `$this->mailer` because of the alias. The loader returns itself for chaining; the useful result is the attached class instance.

Examples of CI3 libraries:

```text
Session
Form_validation
Email
Upload
Pagination
Image_lib
Zip
Encryption
Calendar
Table
User_agent
```

---

# 19. Custom Libraries

Suppose an invoice approval calculation is reused in many controllers.

Create:

```text
application/libraries/Approval_engine.php
```

```php
<?php

class Approval_engine
{
    public function required_level($amount)
    {
        if ($amount >= 1000000) {
            return 'finance_controller';
        }

        if ($amount >= 100000) {
            return 'manager';
        }

        return 'auto';
    }
}
```

Load:

```php
$this->load->library('approval_engine');
```

Use:

```php
$level = $this->approval_engine->required_level(250000);
```

## Access CI super-object

Inside a custom library:

```php
class Audit_service
{
    protected $CI;

    public function __construct()
    {
        $this->CI =& get_instance();
        $this->CI->load->database();
    }
}
```

`get_instance()` returns the main CodeIgniter application object. The `=&` assignment keeps a reference to that object, so the library can use components loaded by CI. This is a CI3-specific service-locator pattern; `$this->CI->load->database()` loads the database and `$this->CI->db` then refers to the active database connection.

Then:

```php
$saved = $this->CI->db->insert('audit_log', [
    'event' => 'invoice.created'
]);
```

`insert()` accepts a table name and an associative array of column values. It returns `TRUE` on success and `FALSE` on failure. Keep the super-object dependency localized; passing simple values into a library method is easier to test than reading request/session data from everywhere.

---

# 20. Extending Core Classes

One of the most useful CI3 patterns is:

```text
application/core/MY_Controller.php
```

`MY_` is the default subclass prefix from `$config['subclass_prefix']`. The filename and class name must use the configured prefix. Extend a core class to add framework-wide behavior without editing `system/`; use an ordinary library/service instead when the behavior is not truly a core concern.

Example:

```php
<?php

class MY_Controller extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->load->helper('url');
        $this->load->library('session');
    }

    protected function require_login()
    {
        if (!$this->session->userdata('user_id')) {
            redirect('login');
        }
    }
}
```

Controller:

```php
class Dashboard extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->require_login();
    }
}
```

## Admin base controller

```php
class Admin_Controller extends MY_Controller
{
    public function __construct()
    {
        parent::__construct();

        if ($this->session->userdata('role') !== 'admin') {
            show_error('Forbidden', 403);
        }
    }
}
```

This removes repeated authorization code.

---

# 21. Input Handling

Do not directly rely on:

```php
$_POST
$_GET
```

unless there is a specific reason.

CI3 provides the Input class.

## POST

```php
$name = $this->input->post('name');
```

The first argument is the input key. If the key is absent, the usual result is `NULL`. Calling `post()` with no key returns the available POST array, but explicitly selecting expected keys makes the request contract clearer.

## GET

```php
$page = $this->input->get('page');
```

Values from `post()` and `get()` are still untrusted strings/arrays supplied by the client. Convert and validate them for the expected type before using them.

## Request headers

```php
$token = $this->input->get_request_header('Authorization');
```

## IP address

```php
$ip = $this->input->ip_address();
```

## User agent

```php
$agent = $this->input->user_agent();
```

## Important principle

Input retrieval is not the same thing as business validation.

This:

```php
$email = $this->input->post('email');
```

does not prove that `$email` is valid.

Use form validation and business rules.

---

# 22. URI Class

Example request:

```text
/orders/view/500
```

Segments approximately represent:

```text
1 = orders
2 = view
3 = 500
```

Read:

```php
$order_id = $this->uri->segment(3);
```

`segment($number, $default = NULL)` uses one-based segment numbering and returns the segment string or the supplied default when missing. Cast and validate numeric identifiers before use:

```php
$order_id = (int) $this->uri->segment(3, 0);

if ($order_id < 1) {
    show_404();
}
```

However, when possible, controller method parameters are often easier to understand:

```php
public function view($order_id)
{
}
```

---

# 23. Output and HTTP Responses

## JSON output

```php
$this->output
    ->set_content_type('application/json')
    ->set_output(json_encode([
        'success' => TRUE
    ]));
```

## Status code

```php
$this->output
    ->set_status_header(201)
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
```

Typical HTTP status codes:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
500 Internal Server Error
```

Be consistent across APIs.

`set_status_header($code)` selects the HTTP status. `set_content_type($mime)` sets the response `Content-Type`, and `set_output($body)` stores the final response body. These methods return the Output object, which is why the calls can be chained. A `204 No Content` response must not include a body.

For JSON, also handle encoding failure in reusable infrastructure instead of assuming `json_encode()` always succeeds. Invalid byte sequences, unsupported values or recursion can cause failure. On PHP 7.3+, `JSON_THROW_ON_ERROR` provides a catchable `JsonException`; older supported runtimes can check `json_last_error()`.

---

# 24. Forms

Example HTML:

```html
<form method="post" action="<?= site_url('employees/store'); ?>">
    <input type="text" name="name">
    <input type="email" name="email">
    <button type="submit">Save</button>
</form>
```

`site_url()` builds an application URL using the configured base URL and index-page setting. The browser sends the named fields to `Employees::store()` as POST data. The controller must still load dependencies, enforce authorization, validate the fields and handle failures.

Using Form Helper:

```php
$this->load->helper('form');

echo form_open('employees/store');
```

When CI3 CSRF protection is enabled, `form_open()` adds the hidden CSRF field for a normal internal form. Use `set_value('name')` to repopulate a rejected form and `validation_errors()` to show server-side validation messages; escape any output that is not already escaped by the helper.

Do not trust browser-side validation alone.

JavaScript validation improves UX.

Server-side validation protects the application.

You need both.

---

# 25. Form Validation

Load:

```php
$this->load->library('form_validation');
```

Set rules:

```php
$this->form_validation->set_rules(
    'email',
    'Email',
    'required|valid_email'
);

$this->form_validation->set_rules(
    'name',
    'Name',
    'required|min_length[2]|max_length[100]'
);
```

`set_rules($field, $label, $rules)` receives the submitted field name, a human-readable label for error messages, and either a pipe-separated rule string or a rule array. It registers rules and returns the Form Validation object for optional chaining. `run()` executes all registered rules and returns `TRUE` only when validation passes.

Run:

```php
if ($this->form_validation->run() === FALSE) {
    $this->load->view('employees/create');
    return;
}
```

## Common rules

```text
required
trim
valid_email
min_length[n]
max_length[n]
exact_length[n]
numeric
integer
decimal
is_natural
matches[field]
is_unique[table.field]
in_list[a,b,c]
regex_match[/pattern/]
```

## Scenario: invoice form

```php
$this->form_validation->set_rules(
    'invoice_no',
    'Invoice Number',
    'required|max_length[50]'
);

$this->form_validation->set_rules(
    'amount',
    'Amount',
    'required|decimal'
);

$this->form_validation->set_rules(
    'vendor_id',
    'Vendor',
    'required|integer'
);
```

## Callback validation

```php
$this->form_validation->set_rules(
    'invoice_no',
    'Invoice Number',
    'required|callback_invoice_unique'
);

public function invoice_unique($invoice_no)
{
    if ($this->Invoice_model->exists($invoice_no)) {
        $this->form_validation->set_message(
            'invoice_unique',
            'This invoice already exists.'
        );

        return FALSE;
    }

    return TRUE;
}
```

For complicated domain validation, a service is often cleaner than putting many rules into controller callbacks.

`is_unique[table.field]` is useful for friendly feedback, but it cannot by itself prevent two simultaneous requests from inserting the same value. Add a database `UNIQUE` constraint and handle the possible insert failure as the final guarantee.

---

# 26. Sessions

Load:

```php
$this->load->library('session');
```

CI3 sessions store user state across requests. The browser normally holds only a session identifier cookie; the session data is kept by the configured driver. CI3 provides files, database, Redis and Memcached drivers. Choose the driver for your deployment topology and test its locking, permissions, expiry and cleanup behavior.

Example `application/config/config.php` settings for a single-server file-based deployment:

```php
$config['sess_driver'] = 'files';
$config['sess_cookie_name'] = 'ci_session';
$config['sess_samesite'] = 'Lax';
$config['sess_expiration'] = 7200;
$config['sess_save_path'] = '/var/lib/myapp/sessions';
$config['sess_match_ip'] = FALSE;
$config['sess_time_to_update'] = 300;
$config['sess_regenerate_destroy'] = FALSE;

$config['cookie_secure'] = TRUE; // production HTTPS only
```

The save path must exist, be writable by the PHP/web-server user and not be publicly downloadable. A local file driver is usually unsuitable for load-balanced servers unless all requests for a session reach the same storage; database, Redis or Memcached may be more appropriate there.

## Store

```php
$this->session->set_userdata([
    'user_id' => 25,
    'name' => 'John',
    'role' => 'manager'
]);
```

## Read

```php
$user_id = $this->session->userdata('user_id');
```

## Check

```php
if (!$this->session->userdata('user_id')) {
    redirect('login');
}
```

## Remove

```php
$this->session->unset_userdata('role');
```

## Destroy

```php
$this->session->sess_destroy();
```

`set_userdata()` stores one key or an array of keys. `userdata($key)` returns the stored value or `NULL` when absent. `unset_userdata()` removes selected data. `sess_destroy()` destroys the whole session and should normally be used during logout, followed by a redirect so the next request starts cleanly.

Use session regeneration/security settings appropriately for authentication systems.

Never store plain-text passwords in session data.

After successful authentication, call `sess_regenerate(TRUE)` before storing the authenticated identity to reduce session-fixation risk. Keep only the minimum identity/state required, and re-check important permissions against authoritative data when stale session values could be dangerous.

---

# 27. Flashdata and Tempdata

## Flashdata

Data that normally survives for the next request.

```php
$this->session->set_flashdata(
    'success',
    'Employee created successfully.'
);

redirect('employees');
```

View:

```php
<?php if ($message = $this->session->flashdata('success')): ?>
    <div><?= html_escape($message); ?></div>
<?php endif; ?>
```

Typical use cases:

- success message after redirect;
- validation workflow message;
- one-time notification.

## Tempdata

Useful for temporary data with an expiry window.

```php
$this->session->set_tempdata(
    'password_reset_user_id',
    25,
    300
);

$user_id = $this->session->tempdata(
    'password_reset_user_id'
);

$this->session->unset_tempdata(
    'password_reset_user_id'
);
```

The third argument to `set_tempdata()` is the time to live in seconds, so `300` means five minutes. `tempdata()` returns the current value or `NULL` if it is missing/expired. Tempdata is convenient state, not a substitute for a securely generated, single-use reset token stored and validated server-side.

Use cases:

- temporary verification state;
- short-lived wizard state;
- temporary filters.

---

# 28. Cookies

Cookies are small name/value values sent by a browser with matching requests. They are useful for low-risk client preferences and for session identifiers, but the client can read, modify, replay or delete ordinary cookies.

Load the Cookie Helper and set a one-month preference cookie:

```php
$this->load->helper('cookie');

set_cookie([
    'name' => 'theme',
    'value' => 'dark',
    'expire' => 30 * 24 * 60 * 60,
    'path' => '/',
    'secure' => TRUE,
    'httponly' => TRUE,
    'samesite' => 'Lax'
]);
```

`expire` is a lifetime in seconds for this helper call. `Secure` limits transmission to HTTPS. `HttpOnly` prevents normal JavaScript access. `SameSite` controls when a browser sends the cookie in cross-site contexts. These attributes reduce risk; they do not make an untrusted cookie authoritative.

Read and delete it:

```php
$theme = get_cookie('theme');

delete_cookie('theme', '', '/');
```

`get_cookie()` returns the cookie value or `NULL` when it is absent. When deleting, use the same path/domain/prefix that were used to create the cookie; otherwise the browser may retain a differently scoped cookie.

Use cookies for appropriate client-side state.

Do not put sensitive secrets into ordinary cookies.

Authentication should use secure session/token patterns.

Recommended attributes depend on architecture, but modern deployments should evaluate:

```text
Secure
HttpOnly
SameSite
```

Use server-side session/authentication state for identity and authorization. If a cookie value affects application behavior, validate it against an allowlist such as `['light', 'dark']`.

---

# 29. Database Configuration

File:

```text
application/config/database.php
```

Load database:

```php
$this->load->database();
```

or autoload it.

Example:

```php
$db['default'] = [
    'hostname' => 'localhost',
    'username' => 'app_user',
    'password' => 'secret',
    'database' => 'erp',
    'dbdriver' => 'mysqli',
    'db_debug' => FALSE,
    'char_set' => 'utf8mb4',
    'dbcollat' => 'utf8mb4_unicode_ci',
];
```

## Production principle

Use a dedicated database user.

Do not run a normal application with unnecessary administrative privileges.

---

# 30. Query Builder

Query Builder is one of the most important CI3 features.

It builds SQL through PHP method calls and automatically escapes ordinary values in supported operations. It improves consistency and reduces injection risk, but it does not validate business input or safely choose arbitrary table/column names for you.

| Call | Main input | Output |
| --- | --- | --- |
| `select($columns)` | Column expression/string | Database builder for chaining |
| `where($key, $value)` | Column/condition and value | Database builder for chaining |
| `get($table)` | Table name | Query result object, or `FALSE` on failure depending on DB debug/error handling |
| `insert($table, $data)` | Table and column/value array | Boolean success result |
| `update($table, $data)` | Table and changed values | Boolean success result |
| `delete($table)` | Table; usually after `where()` | Boolean success result |
| `count_all_results($table)` | Table plus accumulated conditions | Integer count |

## Select

```php
$query = $this->db
    ->select('id, name, email')
    ->from('employees')
    ->get();

$employees = $query->result();
```

## Where

```php
$this->db->where('status', 'ACTIVE');

$query = $this->db->get('employees');
```

## Multiple conditions

```php
$query = $this->db
    ->where('department_id', 10)
    ->where('status', 'ACTIVE')
    ->get('employees');
```

## Associative array

```php
$query = $this->db
    ->where([
        'department_id' => 10,
        'status' => 'ACTIVE'
    ])
    ->get('employees');
```

## Like

```php
$query = $this->db
    ->like('name', $keyword)
    ->get('employees');
```

## Order

```php
$query = $this->db
    ->order_by('created_at', 'DESC')
    ->get('employees');
```

## Limit

```php
$query = $this->db
    ->limit(20, 0)
    ->get('employees');
```

## Generated SQL

For debugging:

```php
$sql = $this->db->last_query();
```

Avoid exposing full SQL/database errors to production users.

---

# 31. CRUD Operations

CRUD means:

```text
Create
Read
Update
Delete
```

## Create

```php
$data = [
    'name' => 'Alice',
    'email' => 'alice@example.com'
];

$this->db->insert('employees', $data);
```

Check the Boolean return before treating the operation as successful. `insert_id()` returns the generated identity for drivers/tables that provide one; it is meaningful only after a successful insert on the same connection.

Get insert ID:

```php
$id = $this->db->insert_id();
```

## Read

```php
$employee = $this->db
    ->where('id', $id)
    ->get('employees')
    ->row();
```

## Update

```php
$this->db
    ->where('id', $id)
    ->update('employees', [
        'name' => 'Alice Smith'
    ]);
```

An update can return `TRUE` even when the submitted value is identical and no row changes. Use `affected_rows()` carefully and perform a separate existence check when you must distinguish “not found” from “no change.”

## Delete

```php
$this->db
    ->where('id', $id)
    ->delete('employees');
```

Never call an unqualified delete from request code. Validate the identifier, authorize access to that specific row and consider a soft-delete/status change when audit or recovery requirements prohibit permanent removal.

## Recommended model

```php
class Employee_model extends CI_Model
{
    protected $table = 'employees';

    public function find($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->get($this->table)
            ->row();
    }

    public function create(array $data)
    {
        $this->db->insert($this->table, $data);

        return $this->db->insert_id();
    }

    public function update_by_id($id, array $data)
    {
        return $this->db
            ->where('id', (int) $id)
            ->update($this->table, $data);
    }

    public function delete_by_id($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->delete($this->table);
    }
}
```

---

# 32. Joins, Grouping, Aggregates, and Advanced Queries

## Join

```php
$query = $this->db
    ->select('e.id, e.name, d.name AS department')
    ->from('employees e')
    ->join('departments d', 'd.id = e.department_id', 'left')
    ->get();
```

## Count

```php
$count = $this->db
    ->where('status', 'ACTIVE')
    ->count_all_results('employees');
```

## Group by

```php
$query = $this->db
    ->select('department_id, COUNT(*) AS total')
    ->from('employees')
    ->group_by('department_id')
    ->get();
```

## HAVING

```php
$query = $this->db
    ->select('vendor_id, SUM(amount) AS total')
    ->from('invoices')
    ->group_by('vendor_id')
    ->having('SUM(amount) >', 100000)
    ->get();
```

## Grouped WHERE clauses

```php
$this->db
    ->group_start()
        ->where('status', 'PENDING')
        ->or_where('status', 'REVIEW')
    ->group_end()
    ->where('is_deleted', 0);

$query = $this->db->get('invoices');
```

---

# 33. Raw SQL and Bindings

Sometimes Query Builder is not the clearest solution.

Use bound values rather than string concatenation.

Good:

```php
$sql = '
    SELECT *
    FROM invoices
    WHERE vendor_id = ?
      AND status = ?
';

$query = $this->db->query($sql, [
    $vendor_id,
    $status
]);
```

Avoid:

```php
$sql = "
    SELECT *
    FROM invoices
    WHERE vendor_id = '$vendor_id'
";
```

String-building SQL from untrusted values creates injection risk.

---

# 34. Query Results

Execution methods such as `get()` return a database result object for a successful read query. Result conversion does not load the whole application model—it only transforms rows returned by that query.

## Multiple rows as objects

```php
$rows = $query->result();

foreach ($rows as $row) {
    echo $row->name;
}
```

## Multiple rows as arrays

```php
$rows = $query->result_array();

echo $rows[0]['name'];
```

## Single row as object

```php
$row = $query->row();
```

## Single row as array

```php
$row = $query->row_array();
```

## Number of rows

```php
$count = $query->num_rows();
```

`result()` and `result_array()` return empty arrays when the query has no rows. `row()` and `row_array()` return `NULL` when the requested row does not exist. Check for those empty results before dereferencing properties or array keys.

---

# 35. Transactions

Transactions protect multi-step database operations.

Imagine creating an order:

```text
1. Create order
2. Create order items
3. Reduce stock
4. Create payment record
```

If step 3 fails, steps 1 and 2 should often be rolled back.

## Automatic-style transaction

```php
$this->db->trans_start();

$this->db->insert('orders', $order);

$order_id = $this->db->insert_id();

foreach ($items as $item) {
    $item['order_id'] = $order_id;
    $this->db->insert('order_items', $item);
}

$this->db->trans_complete();

if ($this->db->trans_status() === FALSE) {
    // transaction failed
}
```

## Manual transaction

```php
$this->db->trans_begin();

$this->db->insert('payments', $payment);

if ($this->db->trans_status() === FALSE) {
    $this->db->trans_rollback();
    return FALSE;
}

$this->db->trans_commit();

return TRUE;
```

## Business rule

Transactions protect **database consistency**.

They do not automatically undo external operations such as:

- emails already sent;
- HTTP APIs already called;
- uploaded files already written.

Design those workflows carefully.

---

# 36. Multiple Database Connections

Example:

```php
$legacy_db = $this->load->database('legacy', TRUE);
```

Then:

```php
$query = $legacy_db->get('employees');
```

Useful when:

- reading an old ERP database;
- connecting to reporting DB;
- separating application and audit DBs;
- accessing multiple companies/databases.

Keep cross-database transaction expectations realistic.

A normal CI transaction on one connection does not magically become a distributed transaction across all systems.

---

# 37. Stored Procedures

Some enterprise applications use stored procedures.

Basic example:

```php
$query = $this->db->query(
    'CALL get_employee(?)',
    [$employee_id]
);
```

Exact syntax depends on the database driver.

Stored procedures may involve special handling for:

- output parameters;
- multiple result sets;
- cursor cleanup;
- SQL Server vs MySQL differences.

## When stored procedures are useful

- existing legacy DB;
- centralized database logic;
- reporting workloads;
- database-owned business processes.

## Tradeoff

Too much business logic in stored procedures can make application testing and portability harder.

---

# 38. Database Forge

Database Forge helps create or alter database structures programmatically.

Load:

```php
$this->load->dbforge();
```

Example:

```php
$fields = [
    'id' => [
        'type' => 'INT',
        'constraint' => 11,
        'unsigned' => TRUE,
        'auto_increment' => TRUE
    ],
    'name' => [
        'type' => 'VARCHAR',
        'constraint' => 100
    ]
];

$this->dbforge->add_field($fields);
$this->dbforge->add_key('id', TRUE);
$this->dbforge->create_table('departments');
```

Database Forge is frequently used with migrations.

---

# 39. Database Migrations

Migrations version-control database schema changes.

Example concept:

```text
001_create_users
002_create_roles
003_add_status_to_users
```

Instead of manually telling another developer:

```text
"Please add this column in your DB."
```

you commit a migration.

Example:

```php
class Migration_Add_status_to_users extends CI_Migration
{
    public function up()
    {
        $fields = [
            'status' => [
                'type' => 'VARCHAR',
                'constraint' => 20,
                'default' => 'ACTIVE'
            ]
        ];

        $this->dbforge->add_column('users', $fields);
    }

    public function down()
    {
        $this->dbforge->drop_column('users', 'status');
    }
}
```

A good migration strategy makes deployments repeatable.

Enable and configure the migration library in `application/config/migration.php`. CI3 supports sequential filenames such as `001_create_users.php` and timestamp filenames such as `20260813090000_create_users.php`; use the configured type consistently. Sequential migrations require three-digit numbers with no gaps.

```php
$config['migration_enabled'] = TRUE;
$config['migration_type'] = 'timestamp';
$config['migration_table'] = 'migrations';
$config['migration_auto_latest'] = FALSE;
$config['migration_path'] = APPPATH . 'migrations/';
```

Run migrations from a protected deployment or CLI-only action:

```php
$this->load->library('migration');

if (!$this->migration->latest()) {
    $message = $this->migration->error_string();
    log_message('error', 'Migration failed: ' . $message);
    return FALSE;
}

return TRUE;
```

`latest()` applies all outstanding migrations up to the newest version and returns `TRUE` on success. `error_string()` provides a failure message. Do not expose an unauthenticated web URL that can migrate production. Back up important data, review destructive `down()` operations, and understand that a schema rollback cannot necessarily reconstruct deleted production data.

---

# 40. Pagination

Load:

```php
$this->load->library('pagination');
```

Example configuration:

```php
$config['base_url'] = site_url('employees/index');
$config['total_rows'] = 500;
$config['per_page'] = 20;
$config['uri_segment'] = 3;

$this->pagination->initialize($config);
```

`total_rows` should normally come from a count query using the same filters as the list query. `per_page` is the page size. By default, CI3 treats the URI value as a row offset, so an offset of `40` with `20` rows per page selects the third page.

Query:

```php
$limit = 20;
$offset = (int) $this->uri->segment(3, 0);

$data['employees'] = $this->Employee_model
    ->get_page($limit, $offset);

$data['pagination_links'] =
    $this->pagination->create_links();
```

Model:

```php
public function get_page($limit, $offset)
{
    return $this->db
        ->limit($limit, $offset)
        ->get('employees')
        ->result();
}
```

`create_links()` returns the pagination HTML as a string; render it in the view where the navigation belongs. Validate/cast the offset and use the configured `uri_segment` consistently. If `use_page_numbers` is enabled, convert the page number to an offset before applying `limit()`.

For very large tables, investigate keyset/cursor pagination instead of always relying on huge offsets.

---

# 41. File Uploads

Load:

```php
$config = [
    'upload_path' => './uploads/',
    'allowed_types' => 'pdf|jpg|jpeg|png',
    'max_size' => 5120,
    'encrypt_name' => TRUE
];

$this->load->library('upload', $config);
```

`upload_path` must exist and be writable. `allowed_types` is a pipe-separated allowlist understood by the Upload library. `max_size` is measured in kilobytes by CI3, so `5120` represents about 5 MiB. `encrypt_name` generates a server-side name instead of trusting the client filename.

The HTML form must use `multipart/form-data`, and the input name must match the argument passed to `do_upload()`:

```html
<form method="post" enctype="multipart/form-data">
    <input type="file" name="document" required>
    <button type="submit">Upload</button>
</form>
```

Upload:

```php
if (!$this->upload->do_upload('document')) {
    $error = $this->upload->display_errors('', '');
} else {
    $file = $this->upload->data();
}
```

`do_upload('document')` validates and moves the uploaded file, returning `TRUE` or `FALSE`. On success, `data()` returns metadata such as `file_name`, `full_path`, `file_size` and detected `file_type`. Store only the fields your application needs, and do not return `full_path` to an untrusted client.

## Security rules

Never trust only:

```text
file extension
```

Validate:

- allowed extension;
- detected MIME/type;
- maximum size;
- generated server-side filename;
- storage location;
- access permissions;
- whether files need malware scanning;
- whether uploaded files should be outside the public web root.

Avoid allowing executable file types in upload directories.

## Scenario: invoice upload

Allowed:

```text
PDF
JPEG
PNG
```

Do not accept:

```text
.php
.phtml
.phar
```

just because a user changes the extension.

---

# 42. Image Manipulation

CI3 provides an image manipulation library.

Example use cases:

- resize profile picture;
- create thumbnail;
- crop image;
- rotate image.

Example:

```php
$config['image_library'] = 'gd2';
$config['source_image'] = './uploads/photo.jpg';
$config['maintain_ratio'] = TRUE;
$config['width'] = 300;
$config['height'] = 300;

$this->load->library('image_lib', $config);

$this->image_lib->resize();
```

Always handle failure:

```php
if (!$this->image_lib->resize()) {
    log_message('error', $this->image_lib->display_errors('', ''));
}
```

---

# 43. Email

Load:

```php
$this->load->library('email');
```

Configure SMTP appropriately.

Example configuration can be passed when loading or placed in `application/config/email.php`:

```php
$config = [
    'protocol' => 'smtp',
    'smtp_host' => 'smtp.example.com',
    'smtp_port' => 587,
    'smtp_user' => 'smtp-user',
    'smtp_pass' => 'load-from-protected-config',
    'smtp_crypto' => 'tls',
    'mailtype' => 'text',
    'charset' => 'utf-8'
];

$this->load->library('email', $config);
```

The correct port/crypto combination depends on the mail provider. Keep credentials out of source control and verify certificate/TLS behavior in the deployed environment.

Example:

```php
$this->email->from('noreply@example.com', 'Portal');
$this->email->to('user@example.com');
$this->email->subject('Invoice Submitted');
$this->email->message('Your invoice has been submitted.');
```

Send:

```php
if (!$this->email->send()) {
    log_message('error', $this->email->print_debugger());
}
```

`send()` returns a Boolean. `print_debugger()` can contain server conversation details, so write a suitably redacted diagnostic to protected logs and never show it to normal users.

## Real-world advice

For critical emails:

```text
HTTP request
   ↓
save business transaction
   ↓
commit
   ↓
enqueue notification
   ↓
worker sends email
```

This is more resilient than making an important database transaction depend entirely on a slow mail server.

CI3 does not provide a modern queue system out of the box, so teams commonly integrate a database queue, Redis-backed worker, message broker or other job mechanism.

---

# 44. File and Download Helpers

Example download:

```php
$this->load->helper('download');

$data = file_get_contents('/safe/path/report.pdf');

force_download('report.pdf', $data);
```

`file_get_contents()` reads the complete file into memory; it returns a string or `FALSE`. `force_download($filename, $data)` sends download headers and the supplied bytes. Check the read result, use an application-controlled path, and consider a streaming response for very large files.

Before downloading a private document, authorize the user.

Do not assume that knowing a filename means the user is allowed to access it.

---

# 45. ZIP Files

CI3 provides a ZIP library.

```php
$this->load->library('zip');

$this->zip->read_file('/path/report1.pdf');
$this->zip->read_file('/path/report2.pdf');

$this->zip->download('reports.zip');
```

Useful for:

- bulk invoice download;
- report packages;
- export bundles.

---

# 46. Caching

Caching avoids repeating expensive work.

Types you may use in a CI3 system:

```text
Page/output cache
Application cache
Database query cache
External cache
Browser/CDN cache
```

## Output cache

Example:

```php
$this->output->cache(5);
```

The value is typically expressed in minutes.

Use only when the page can safely be cached.

Do not accidentally cache private, user-specific or authorization-sensitive output.

Every cache needs an invalidation rule. A five-minute expiry may be acceptable for public reference data, while a changed product price might need explicit invalidation immediately after an update. Include tenant, language, permission scope and relevant filters in application-cache keys so data cannot leak between contexts.

Database query caching stores query results on disk but does not automatically understand your business changes. Use it only when you can safely delete/refresh affected cache segments; many applications prefer an explicit application or external cache with clearer keys and lifetimes.

## Cache candidate

Good:

```text
public product catalogue
rarely changing reference data
public news page
```

Risky:

```text
bank balance
private dashboard
role-specific approval queue
one user's invoice
```

---

# 47. Benchmarking and Profiling

CI3 has benchmarking/profiling functionality useful during development.

Enable profiler:

```php
$this->output->enable_profiler(TRUE);
```

The profiler can expose request information such as execution details and database queries.

Never casually expose debugging/profiling information in production because it may leak sensitive internals.

---

# 48. Logging and Error Handling

Use:

```php
log_message('error', 'Payment API failed');
log_message('debug', 'Workflow calculation started');
log_message('info', 'Invoice submitted');
```

Log configuration is controlled through application config.

Typical CI3 log levels are `error`, `debug` and `info`. `$config['log_threshold']` controls what is written: `0` disables logging, `1` records errors, `2` adds debug messages, `3` adds informational messages, and `4` records all levels. CI3 also supports an array of selected thresholds. Confirm the exact setting in the version you deploy and protect log files from web access.

## Good logging

```php
log_message(
    'error',
    'Invoice posting failed. invoice_id=' . (int) $invoice_id
);
```

## Bad logging

```php
log_message(
    'error',
    'Password=' . $password
);
```

Do not log:

- passwords;
- session secrets;
- private API keys;
- authorization tokens;
- full card details.

## Production errors

User sees:

```text
Something went wrong. Reference: ERR-8F21
```

Log contains:

```text
timestamp
error reference
request/context ID
technical exception
safe business identifiers
```

---

# 49. Custom 404 and Error Pages

Configure:

```php
$route['404_override'] = 'errors/page_missing';
```

or use appropriate CI error facilities.

Custom error pages should:

- be understandable;
- return the correct status code;
- avoid exposing stack traces;
- provide a useful navigation path.

API 404:

```json
{
  "success": false,
  "error": "RESOURCE_NOT_FOUND",
  "message": "Invoice was not found."
}
```

---

# 50. Security Fundamentals

Security is not one function.

A secure application requires several layers:

```text
Authentication
Authorization
Input validation
Output encoding
CSRF protection
SQL injection protection
Secure sessions
Secure cookies
File upload protection
Password hashing
HTTPS
Access control
Logging
Secret management
Error handling
Dependency patching
Server hardening
```

## Golden rule

Never trust:

```text
browser
hidden field
query string
POST body
filename
cookie
HTTP header
API payload
JavaScript validation
```

Every important business rule must be enforced server-side.

---

# 51. CSRF Protection

CSRF stands for Cross-Site Request Forgery.

Imagine a logged-in user visits a malicious website.

That website attempts to make the user's browser submit a request to your application using the user's existing authenticated session.

CSRF protection helps prevent this.

CI3 can enable CSRF protection in configuration.

```php
$config['csrf_protection'] = TRUE;
```

Use framework-generated form helpers/tokens correctly.

For AJAX requests, include the current CSRF token according to your chosen CI3 setup.

CI3 exposes the configured token field name and current hash:

```php
$token_name = $this->security->get_csrf_token_name();
$token_hash = $this->security->get_csrf_hash();
```

Send both with a state-changing AJAX request:

```javascript
const csrfName = <?= json_encode($token_name); ?>;
const csrfHash = <?= json_encode($token_hash); ?>;

const body = new URLSearchParams();
body.set(csrfName, csrfHash);
body.set('status', 'APPROVED');

fetch('/invoices/25/approve', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
});
```

The JavaScript uses `json_encode()` so the PHP strings become correctly quoted JavaScript string literals. If `$config['csrf_regenerate']` is enabled, a successful request can rotate the hash; return/render the new hash before the next AJAX mutation. Never place a CSRF token in a public log or third-party URL.

Do not disable CSRF globally simply because one AJAX endpoint fails.

Understand and fix token handling.

---

# 52. XSS and Output Escaping

XSS means Cross-Site Scripting.

Suppose a user enters:

```html
<script>alert('XSS')</script>
```

If the application stores it and later prints it as executable HTML, another user's browser can execute it.

## Safe output

```php
<?= html_escape($comment); ?>
```

## Key concept

**Validate input. Encode output for the destination context.**

Do not assume that globally mutating all input with an XSS filter solves all output-security problems.

Different output contexts require different encoding strategies:

```text
HTML text
HTML attribute
URL
JavaScript
JSON
CSS
```

Prefer avoiding dangerous dynamic JavaScript/HTML construction.

---

# 53. SQL Injection Protection

Query Builder:

```php
$this->db
    ->where('email', $email)
    ->get('users');
```

Bound query:

```php
$this->db->query(
    'SELECT * FROM users WHERE email = ?',
    [$email]
);
```

Avoid:

```php
$this->db->query(
    "SELECT * FROM users WHERE email = '$email'"
);
```

## Dynamic column/order problem

Parameter binding protects values, not arbitrary SQL identifiers.

Bad:

```php
$this->db->order_by($_GET['sort'], $_GET['direction']);
```

Better:

```php
$allowed_columns = [
    'name',
    'created_at',
    'amount'
];

$sort = $this->input->get('sort');

if (!in_array($sort, $allowed_columns, TRUE)) {
    $sort = 'created_at';
}

$direction = strtoupper((string) $this->input->get('direction'));

if (!in_array($direction, ['ASC', 'DESC'], TRUE)) {
    $direction = 'DESC';
}

$this->db->order_by($sort, $direction);
```

This whitelist pattern is essential for dynamic sorting/filtering.

---

# 54. Authentication

Authentication answers:

> Who is the user?

Typical login flow:

```text
POST /login
   ↓
validate input
   ↓
find user by username/email
   ↓
password_verify()
   ↓
regenerate/authenticate session
   ↓
store minimum identity data
   ↓
redirect dashboard
```

Example:

```php
$user = $this->User_model
    ->find_by_email($email);

if (!$user || !password_verify($password, $user->password_hash)) {
    $this->session->set_flashdata(
        'error',
        'Invalid credentials.'
    );

    redirect('login');
}

$this->session->sess_regenerate(TRUE);

$this->session->set_userdata([
    'user_id' => $user->id,
    'role' => $user->role
]);

redirect('dashboard');
```

This example assumes the database, session library, URL helper and `User_model` are loaded. `$email` and `$password` must come from a validated POST request. `find_by_email()` should return one user object or `NULL`; `password_verify()` accepts the submitted plain-text password and stored password hash and returns a Boolean.

A production login also needs:

- rate limiting or progressive delay by account and source;
- account status/lock checks;
- HTTPS and secure cookie settings;
- session regeneration after success;
- safe audit events that never contain the password;
- a logout action that destroys the session;
- a secure reset/recovery flow;
- multi-factor authentication when the risk warrants it.

Use generic login errors rather than telling an attacker exactly which part was wrong.

---

# 55. Authorization and Role-Based Access Control

Authorization answers:

> What is this user allowed to do?

Example roles:

```text
USER
MANAGER
FINANCE
ADMIN
```

Bad:

```php
if ($this->session->userdata('role') == 'ADMIN') {
    // allow everything
}
```

for every endpoint scattered across the project.

Better: centralize permission checks.

Example library:

```php
class Authorization
{
    protected $CI;

    public function __construct()
    {
        $this->CI =& get_instance();
    }

    public function require_role(array $roles)
    {
        $role = $this->CI->session->userdata('role');

        if (!in_array($role, $roles, TRUE)) {
            show_error('Forbidden', 403);
        }
    }
}
```

Use:

```php
$this->authorization->require_role([
    'FINANCE',
    'ADMIN'
]);
```

## Object-level authorization

Checking role is not enough.

Suppose:

```text
/user/invoice/500
```

A normal user must not be able to change `500` to `501` and see another user's invoice.

You also need ownership/access checks.

---

# 56. Password Security

Never store:

```text
MD5(password)
SHA1(password)
plain password
reversible encrypted password
```

Use PHP's password API.

Hash:

```php
$hash = password_hash(
    $password,
    PASSWORD_DEFAULT
);
```

Verify:

```php
if (password_verify($password, $hash)) {
    // valid
}
```

`password_hash()` creates a salted one-way hash and returns a string containing the algorithm and work parameters. `password_verify()` reads that metadata from the hash, verifies the supplied password, and returns `TRUE` or `FALSE`. Do not supply your own salt.

When the configured default algorithm changes, upgrade a valid hash during login:

```php
if (password_verify($password, $user->password_hash)) {
    if (password_needs_rehash(
        $user->password_hash,
        PASSWORD_DEFAULT
    )) {
        $new_hash = password_hash(
            $password,
            PASSWORD_DEFAULT
        );

        $this->User_model->update_password_hash(
            $user->id,
            $new_hash
        );
    }
}
```

`password_needs_rehash()` returns `TRUE` when the stored hash no longer matches the requested algorithm/options. Size the database column generously (commonly `VARCHAR(255)`) because `PASSWORD_DEFAULT` output can change over time.

Password reset should use:

- random high-entropy tokens;
- expiry;
- one-time usage;
- rate limiting;
- secure transport;
- audit logging.

---

# 57. AJAX with CI3

Frontend:

```javascript
fetch('/employees/search?q=alice')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

Controller:

```php
public function search()
{
    $keyword = trim((string) $this->input->get('q'));

    $rows = $this->Employee_model->search($keyword);

    return $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode([
            'success' => TRUE,
            'data' => $rows
        ]));
}
```

For state-changing AJAX requests:

- use POST/PUT-like semantics as appropriate;
- validate input;
- enforce CSRF/session rules;
- enforce authorization;
- return structured errors.

---

# 58. Building JSON APIs

A basic CI3 API endpoint can be written without installing a REST extension.

```php
public function show($id)
{
    $invoice = $this->Invoice_model->find($id);

    if (!$invoice) {
        return $this->json([
            'success' => FALSE,
            'error' => 'NOT_FOUND'
        ], 404);
    }

    return $this->json([
        'success' => TRUE,
        'data' => $invoice
    ]);
}
```

Reusable base method:

```php
protected function json(array $payload, $status = 200)
{
    return $this->output
        ->set_status_header($status)
        ->set_content_type('application/json')
        ->set_output(json_encode($payload));
}
```

## Recommended envelope

Success:

```json
{
  "success": true,
  "data": {
    "id": 10,
    "status": "APPROVED"
  }
}
```

Failure:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invoice number is required.",
    "fields": {
      "invoice_no": "Invoice number is required."
    }
  }
}
```

Consistency is more important than inventing a complicated format.

---

# 59. REST-Style API Design

REST-style URLs focus on resources.

Instead of:

```text
/api/getInvoices
/api/createInvoice
/api/updateInvoice
/api/deleteInvoice
```

prefer conceptual resource endpoints:

```text
GET    /api/invoices
GET    /api/invoices/25
POST   /api/invoices
PUT    /api/invoices/25
DELETE /api/invoices/25
```

CI3 itself does not automatically give you a full modern REST API layer.

You can implement REST-style APIs manually or use carefully maintained third-party components.

## Controller challenge

PHP traditionally exposes POST naturally, but for JSON APIs you may need to read raw input:

```php
$raw = $this->input->raw_input_stream;

$data = json_decode($raw, TRUE);
```

Always detect malformed JSON.

```php
if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    return $this->json([
        'success' => FALSE,
        'error' => [
            'code' => 'INVALID_JSON',
            'message' => 'Request body must be a JSON object.'
        ]
    ], 400);
}
```

`raw_input_stream` is the unparsed request body. `json_decode($raw, TRUE)` converts a JSON object into an associative PHP array, or returns `NULL` for malformed JSON and for the valid JSON literal `null`. `json_last_error()` distinguishes decoding errors. After decoding, validate allowed keys and value types; JSON parsing is not business validation.

---

# 60. API Authentication Concepts

Common patterns include:

```text
Session cookie
API key
Bearer token
JWT
OAuth2
SSO
SAML-backed session
```

Do not implement authentication cryptography casually.

For internal APIs, design:

```text
identity
token lifecycle
expiry
revocation
authorization
auditing
rate limits
secret rotation
```

If using JWT:

- verify signature;
- verify algorithm;
- verify expiry;
- validate issuer/audience when applicable;
- keep signing keys secure;
- define revocation strategy.

---

# 61. CORS

CORS controls which browser origins may call your API.

Do not simply return:

```text
Access-Control-Allow-Origin: *
```

for every authenticated enterprise API.

Use an explicit allowlist when possible.

Example conceptual rule:

```text
Allowed:
https://portal.example.com

Not automatically allowed:
https://random-site.example
```

Remember: CORS is a browser policy, not a replacement for authentication or authorization.

For an allowed origin, a credentialed API generally returns that exact origin rather than `*`, adds `Vary: Origin`, and handles the browser's `OPTIONS` preflight. Conceptual CI3 code:

```php
$origin = $this->input->get_request_header('Origin');
$allowed = ['https://portal.example.com'];

if (in_array($origin, $allowed, TRUE)) {
    $this->output
        ->set_header('Access-Control-Allow-Origin: ' . $origin)
        ->set_header('Vary: Origin')
        ->set_header('Access-Control-Allow-Credentials: true');
}

if ($this->input->method(TRUE) === 'OPTIONS') {
    return $this->output
        ->set_header('Access-Control-Allow-Methods: GET, POST')
        ->set_header('Access-Control-Allow-Headers: Content-Type, Authorization')
        ->set_status_header(204)
        ->set_output('');
}
```

Only return allow headers to a trusted origin. Define the smallest required methods/headers, and ensure caches respect `Vary: Origin`. Cookie-based cross-origin requests also require a deliberate SameSite/CSRF design.

---

# 62. Hooks

Hooks let you execute custom code at certain framework lifecycle points without editing CI system files.

Enable:

```php
$config['enable_hooks'] = TRUE;
```

Configuration lives in:

```text
application/config/hooks.php
```

Example hook registration:

```php
$hook['post_controller_constructor'][] = [
    'class' => 'Request_context',
    'function' => 'start',
    'filename' => 'Request_context.php',
    'filepath' => 'hooks'
];
```

CI3 loads `application/hooks/Request_context.php` and calls `Request_context::start()` after the routed controller has been constructed. The exact hook point determines which framework objects are available. Keep hook code fast and failure-aware because it may execute on many requests.

Useful scenarios:

- request audit context;
- custom maintenance checks;
- common instrumentation;
- selective pre/post processing.

Do not turn hooks into invisible business logic that is difficult to trace.

Core business actions should remain explicit.

---

# 63. CLI Controllers

CI3 can run controllers from command line.

Example:

```php
class Jobs extends CI_Controller
{
    public function daily_report()
    {
        if (!is_cli()) {
            show_404();
        }

        echo "Running report...\n";
    }
}
```

Command concept:

```bash
php index.php jobs daily_report
```

Use cases:

- scheduled report;
- cleanup;
- import;
- reconciliation;
- retry jobs;
- batch processing.

Always prevent web access if a task is designed only for CLI.

---

# 64. Cron Jobs

Cron should trigger a CLI-safe task.

Example Linux cron:

```cron
0 9 * * * /usr/bin/php /var/www/app/index.php jobs reminder
```

The cron expression above means a run at 09:00 server time.

Important:

- know server timezone;
- log start/end;
- prevent accidental overlapping runs;
- use locks for long jobs;
- record processed items;
- make jobs retry-safe.

## Idempotency

If a cron executes twice, it should not accidentally:

- pay twice;
- send duplicate irreversible transactions;
- create duplicate rows.

Design with idempotency keys/status tracking.

---

# 65. Environment-Specific Configuration

Common environments:

```text
development
testing
production
```

The front controller can define environment behavior.

The stock `index.php` derives `ENVIRONMENT` from the `CI_ENV` server variable and otherwise defaults to `development`:

```php
define(
    'ENVIRONMENT',
    isset($_SERVER['CI_ENV'])
        ? $_SERVER['CI_ENV']
        : 'development'
);
```

Set `CI_ENV` in the web-server/process configuration, not from untrusted request input. Environment overrides can live in directories such as:

```text
application/config/development/config.php
application/config/testing/config.php
application/config/production/config.php
```

Keep common settings in `application/config/config.php` and override only differences. Database configuration can likewise use an environment-specific `database.php`.

Environment-specific config can help separate:

```text
database
API URL
mail server
logging
debug behavior
```

Never use production secrets in development.

Never enable detailed errors in production just to debug quickly.

---

# 66. Reusable Base Controllers

A practical architecture:

```text
MY_Controller
├── Public_Controller
├── Authenticated_Controller
├── Admin_Controller
└── Api_Controller
```

Example:

```php
class Api_Controller extends MY_Controller
{
    protected function response(
        array $data,
        $status = 200
    ) {
        return $this->output
            ->set_status_header($status)
            ->set_content_type('application/json')
            ->set_output(json_encode($data));
    }
}
```

This centralizes:

- JSON responses;
- session checks;
- request ID;
- common view data;
- authorization support.

Avoid putting every possible behavior inside one giant `MY_Controller`.

---

# 67. Service-Layer Pattern

CI3 doesn't force a service layer, but large projects often benefit from one.

Example flow:

```text
Controller
    ↓
Invoice_service
    ↓
Invoice_model
Workflow_model
Audit_model
Mailer/Queue
```

Example service:

```php
class Invoice_service
{
    protected $CI;

    public function __construct()
    {
        $this->CI =& get_instance();

        $this->CI->load->model([
            'Invoice_model',
            'Audit_model'
        ]);
    }

    public function submit(array $input, $user_id)
    {
        // validate business rule
        // create invoice
        // determine workflow
        // audit
        // return result
    }
}
```

## Why this helps

The controller no longer owns the whole business process.

Good for workflows involving:

- several tables;
- several validations;
- permissions;
- audit logging;
- integration calls.

---

# 68. Repository-Like Data Access Pattern

CI3 models often already behave like repositories.

You can use a consistent convention:

```php
class Invoice_model extends CI_Model
{
    public function find($id) {}
    public function find_by_number($number) {}
    public function search(array $filters) {}
    public function create(array $data) {}
    public function update_by_id($id, array $data) {}
}
```

Avoid creating abstraction layers merely because another framework uses them.

Add layers when they solve a real complexity problem.

---

# 69. Clean Controller Design

A clean controller method should usually make the workflow obvious.

Example:

```php
public function store()
{
    if (!$this->validate_create_request()) {
        return $this->load->view('invoices/create');
    }

    $input = $this->build_create_payload();

    $result = $this->invoice_service->create(
        $input,
        $this->session->userdata('user_id')
    );

    if (!$result['success']) {
        $this->session->set_flashdata(
            'error',
            $result['message']
        );

        return redirect('invoices/create');
    }

    $this->session->set_flashdata(
        'success',
        'Invoice created.'
    );

    return redirect('invoices/' . $result['id']);
}
```

The controller coordinates.

It should not become the entire application.

---

# 70. Validation and Business Rules

There are two different concepts.

## Input validation

Examples:

```text
email must be valid
amount must be numeric
name is required
date format must be valid
```

## Business validation

Examples:

```text
invoice number must be unique for this vendor/company
invoice cannot be approved by its creator
approval amount cannot exceed authorization limit
closed accounting period cannot accept posting
employee must belong to selected department
```

Do not try to force every domain rule into a generic form rule.

A service/domain method may be clearer.

---

# 71. Reusable Layouts and Templates

Simple layout approach:

Controller:

```php
$data['title'] = 'Employees';
$data['content'] = 'employees/index';

$this->load->view('layouts/main', $data);
```

`layouts/main.php`:

```php
<!doctype html>
<html>
<head>
    <title><?= html_escape($title); ?></title>
</head>
<body>

<?php $this->load->view('partials/header'); ?>

<main>
    <?php $this->load->view($content); ?>
</main>

<?php $this->load->view('partials/footer'); ?>

</body>
</html>
```

For large systems, a template library may make this more structured.

---

# 72. HMVC: What It Is and What CI3 Does Not Include

HMVC means Hierarchical Model-View-Controller.

It organizes features into modules such as:

```text
modules/
├── invoice/
├── users/
├── finance/
└── reports/
```

Important:

**HMVC is not the normal built-in application structure of stock CodeIgniter 3.**

Many CI3 projects use third-party HMVC solutions.

Before maintaining a legacy application, check whether directories/classes come from:

- CI3 core;
- custom project code;
- third-party HMVC package.

This distinction matters when upgrading.

---

# 73. Third-Party Packages and Composer

CI3 projects can use Composer packages.

Install Composer dependencies in the project and enable the generated autoloader explicitly. CI3's `composer_autoload` setting may be `TRUE` (for the expected default path) or an absolute path to `vendor/autoload.php`, depending on the project layout:

```php
$config['composer_autoload'] = FCPATH . 'vendor/autoload.php';
```

`FCPATH` is the directory containing the front controller. Confirm that the chosen path exists in every environment; a missing autoloader will break package class loading.

Typical package categories:

```text
PDF generation
Excel processing
HTTP clients
JWT libraries
cloud SDKs
logging
mailers
barcode/QR libraries
```

Use Composer rather than manually copying random libraries when practical.

For each dependency, record:

```text
package
version
purpose
license
supported PHP versions
security status
upgrade notes
```

Do not install an abandoned package merely because an old tutorial recommends it.

---

# 74. Common Integrations

A real CI3 application often integrates with external systems.

Examples:

```text
ERP
SAP
SSO
SAML
OAuth
payment gateway
SMS
email
OCR
document storage
HR system
REST API
SOAP API
SFTP
Excel
PDF
```

## Recommended integration pattern

Do not call an external API directly from ten controllers.

Create one integration client/library.

Example:

```text
application/libraries/Erp_client.php
```

```php
class Erp_client
{
    public function post_invoice(array $invoice)
    {
        // HTTP request
        // timeout
        // safe logging
        // response mapping
        // error normalization
    }
}
```

Then business code depends on a clear interface.

---

# 75. Testing CI3 Applications

Legacy CI3 applications often have weak test coverage.

Improve gradually.

## What to test first

1. money calculations;
2. approval routing;
3. duplicate checks;
4. authentication;
5. authorization;
6. invoice/order state changes;
7. API integrations;
8. migration logic;
9. critical reports.

## Unit-test friendly code

Hard to test:

```php
public function calculate()
{
    $amount = $this->input->post('amount');
    $role = $this->session->userdata('role');

    return $role === 'MANAGER' && $amount <= 50000;
}
```

Easier:

```php
public function calculate($amount, $role)
{
    return $role === 'MANAGER' && $amount <= 50000;
}
```

Both methods return a Boolean indicating whether the role/amount combination is allowed. The second is easier to test because all inputs are explicit; a test does not have to construct a POST request and session.

For example, extract an approval rule into a plain PHP class:

```php
class Approval_policy
{
    public function level_for($amount)
    {
        return $amount >= 100000 ? 'MANAGER' : 'AUTO';
    }
}
```

A PHPUnit-style test can exercise it without booting a web request:

```php
public function test_large_amount_requires_manager()
{
    $policy = new Approval_policy();

    $this->assertSame(
        'MANAGER',
        $policy->level_for(150000)
    );
}
```

The test supplies `150000`, calls the public method and asserts the exact returned string. Choose a PHPUnit version compatible with the PHP runtime used by the legacy project. For controllers and framework-integrated models, use a maintained CI3 testing harness or higher-level HTTP/integration tests; do not pretend that CI3 has the same built-in testing architecture as CI4.

## Regression tests

Before PHP/framework upgrades, build a regression checklist for critical workflows.

---

# 76. Performance Optimization

Do not optimize blindly.

Measure first.

Common bottlenecks:

```text
N+1 database queries
unindexed filters
large SELECT *
loading huge tables
slow external APIs
large images
repeated configuration lookups
session locking
expensive report queries
unbounded export queries
sending mail synchronously
```

## N+1 example

Bad:

```php
$employees = $this->Employee_model->get_all();

foreach ($employees as $employee) {
    $employee->department =
        $this->Department_model->find(
            $employee->department_id
        );
}
```

This may create:

```text
1 employee query
+ 100 department queries
```

Better:

```sql
SELECT e.*, d.name AS department_name
FROM employees e
LEFT JOIN departments d
  ON d.id = e.department_id
```

## Index thinking

A query filtering frequently on:

```text
company_id
status
created_at
vendor_id
```

may require well-designed indexes.

Do not add indexes randomly; understand query patterns and DB execution plans.

---

# 77. Apache Deployment

Common `.htaccess` concept:

```apache
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^(.*)$ index.php/$1 [L]
```

Exact rewrite rules depend on:

- server config;
- application path;
- Apache version;
- hosting environment.

Then:

```php
$config['index_page'] = '';
```

## Production checks

- `mod_rewrite` available;
- correct document root;
- no directory listing;
- sensitive files blocked;
- HTTPS redirect;
- secure headers;
- application writable directories only where required.

---

# 78. Nginx Deployment

Typical concept:

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

PHP requests are forwarded to PHP-FPM.

Actual configuration depends on server layout.

Security considerations:

- correct `SCRIPT_FILENAME`;
- do not expose hidden/config files;
- prevent arbitrary PHP execution in upload folders;
- HTTPS;
- access logs;
- error logs.

---

# 79. IIS Deployment

CI3 also runs on Windows/IIS.

URL Rewrite is commonly used instead of Apache `.htaccess`.

Conceptual `web.config` rewrite:

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="CodeIgniter" stopProcessing="true">
          <match url="^(.*)$" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.php/{R:1}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

Exact IIS configuration varies.

Verify:

```text
URL Rewrite module
FastCGI/PHP setup
filesystem permissions
upload limits
request limits
HTTPS bindings
default document
rewrite behavior
```

---

# 80. Production Deployment Checklist

Before release:

- [ ] Environment is production.
- [ ] Detailed PHP errors are not displayed publicly.
- [ ] Database credentials are production-safe.
- [ ] Production secrets are not committed to source control.
- [ ] HTTPS works.
- [ ] CSRF policy is correct.
- [ ] Session settings are reviewed.
- [ ] Upload folders cannot execute PHP.
- [ ] Logs are writable but not publicly downloadable.
- [ ] Debug profiler is disabled.
- [ ] Database migrations are reviewed.
- [ ] Database backup exists.
- [ ] Critical workflows are smoke-tested.
- [ ] Cron/CLI jobs are configured.
- [ ] Email/API integrations use production endpoints.
- [ ] Cache permissions are correct.
- [ ] File storage paths are correct.
- [ ] Security headers are reviewed.
- [ ] Default/sample files are removed when unnecessary.
- [ ] Monitoring/alerts exist for major failures.
- [ ] Rollback procedure is known.

---

# 81. PHP 7 to PHP 8 Migration Issues

A CI3 project contains:

```text
framework code
application code
third-party libraries
Composer packages
server extensions
```

All of them must be compatible.

Common PHP modernization problems in older code include:

```text
removed mysql_* functions
removed mcrypt usage
old constructors
dynamic properties warnings/deprecations
strict type behavior changes
count() on invalid values
in_array() assumptions
undefined array keys/offsets
round() receiving invalid strings
each() removal
create_function() removal
curly-brace string offsets
changed error levels
incompatible third-party packages
```

## Example: unsafe `count()`

Legacy:

```php
if (count($result) > 0) {
}
```

If `$result` may not be countable, normalize first.

```php
if (is_array($result) && count($result) > 0) {
}
```

or redesign the function to always return a predictable type.

## Example: undefined offset

Bad:

```php
$name = $row[0]['name'];
```

Safer:

```php
$name = isset($row[0]['name'])
    ? $row[0]['name']
    : null;
```

On newer PHP versions:

```php
$name = $row[0]['name'] ?? null;
```

provided your application's supported PHP version allows the syntax.

## Upgrade strategy

```text
1. Back up
2. Put project in source control
3. Upgrade CI3 framework to latest suitable CI3 release
4. Fix application deprecations
5. Upgrade third-party libraries
6. Test session/authentication
7. Test email
8. Test uploads
9. Test DB layer
10. Test scheduled jobs
11. Run complete business regression
12. Only then move production
```

---

# 82. CI2 to CI3 Migration Concepts

When migrating an old CodeIgniter 2 application, do not simply replace the `system` directory and hope everything works.

Review:

- PHP version compatibility;
- CI upgrade guide;
- session changes;
- database drivers;
- removed/deprecated functionality;
- encryption;
- libraries/helpers;
- custom core extensions;
- third-party packages;
- routes;
- error handling.

Create an inventory first:

```text
Controllers: 82
Models: 47
Libraries: 18
Helpers: 12
Cron jobs: 7
External APIs: 6
Custom core classes: 3
```

Then classify by business criticality.

---

# 83. Legacy Project Modernization Strategy

For a large CI3 application, modernization does not have to mean immediate full rewrite.

A practical sequence:

```text
Phase 1: Stabilize
Phase 2: Secure
Phase 3: Add tests
Phase 4: Refactor boundaries
Phase 5: Upgrade dependencies
Phase 6: Extract APIs/services
Phase 7: Migrate framework gradually if justified
```

## Phase 1: Stabilize

- source control;
- environment documentation;
- reproducible local setup;
- dependency inventory;
- error log cleanup.

## Phase 2: Secure

- password hashing;
- SQL bindings;
- upload hardening;
- authorization audit;
- CSRF;
- session configuration;
- secret management.

## Phase 3: Add tests

Start with financially/business-critical logic.

## Phase 4: Refactor boundaries

Convert giant controller methods into:

```text
controller
service
model
integration client
```

## Phase 5: Upgrade

Upgrade PHP/framework/dependencies with regression testing.

---

# 84. Common Errors and Troubleshooting

## 404 controller not found

Check:

```text
controller filename
class name
route
method visibility
URL case sensitivity
server rewrite
```

## Database connection error

Check:

```text
host
port
username
password
database
driver
DB server reachable
extension installed
production firewall
```

## Blank page

Check:

```text
PHP error logs
CI logs
environment
display_errors settings
syntax error
memory exhaustion
fatal error
```

## Session not persisting

Check:

```text
cookie domain/path
HTTPS/Secure setting
session save path
session driver
permissions
reverse proxy behavior
multiple servers
SameSite behavior
```

## Upload fails

Check:

```text
PHP upload_max_filesize
PHP post_max_size
CI max_size
directory permissions
allowed_types
server request limits
disk space
temporary upload directory
```

## Email fails

Check:

```text
SMTP host
port
TLS mode
credentials
firewall
DNS
certificate
sender policy
mail server response
```

## Query works in DB client but not CI

Check:

```text
same database?
same user?
same schema?
bindings?
transaction state?
charset?
connection group?
SQL mode?
```

---

# 85. Real-World Scenario: Employee Management

Requirements:

```text
Admin can create employee
Manager can view own department
User can view own profile
Email must be unique
Deleted employees should remain in audit history
```

## Table

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department_id INT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at DATETIME NOT NULL,
    deleted_at DATETIME NULL
);
```

`deleted_at` supports a simple soft-delete approach: removing an employee sets the timestamp instead of erasing the row. Normal list queries must add `WHERE deleted_at IS NULL`; audit reports can deliberately include archived rows. In a real schema, also add foreign keys and indexes based on query patterns.

## Model

```php
class Employee_model extends CI_Model
{
    public function create(array $data)
    {
        $this->db->insert('employees', $data);

        return $this->db->insert_id();
    }

    public function find($id)
    {
        return $this->db
            ->where('id', $id)
            ->get('employees')
            ->row();
    }

    public function by_department($department_id)
    {
        return $this->db
            ->where('department_id', $department_id)
            ->where('status', 'ACTIVE')
            ->where('deleted_at', NULL)
            ->get('employees')
            ->result();
    }
}
```

## Controller flow

```text
POST /employees
     ↓
require ADMIN
     ↓
validate
     ↓
normalize
     ↓
Employee_model::create()
     ↓
audit
     ↓
flashdata
     ↓
redirect
```

## Important security

Do not trust a hidden field:

```html
<input type="hidden" name="role" value="ADMIN">
```

A user can change it.

Server-side authorization determines whether role assignment is allowed.

---

# 86. Real-World Scenario: Invoice Approval System

This example combines many CI3 concepts.

## Business requirements

```text
1. User uploads invoice
2. Invoice number/vendor/amount are validated
3. Duplicate invoice is rejected
4. PDF/image is stored
5. Approval route is selected
6. Invoice starts as PENDING
7. Approver approves/rejects
8. Every action is audited
9. Final approval allows ERP posting
```

## Suggested tables

```text
invoices
invoice_documents
invoice_approvals
invoice_audit_log
vendors
users
roles
```

## Workflow

```text
Upload
  ↓
Technical validation
  ↓
Business validation
  ↓
Save invoice
  ↓
Create approval rows
  ↓
Commit DB transaction
  ↓
Notification
  ↓
Approver action
  ↓
Final approval
  ↓
ERP posting
```

## Controller

```php
class Invoices extends Authenticated_Controller
{
    public function store()
    {
        if ($this->form_validation->run('invoice_create') === FALSE) {
            return $this->load->view('invoices/create');
        }

        $result = $this->invoice_service->submit(
            [
                'vendor_id' => $this->input->post('vendor_id'),
                'invoice_no' => $this->input->post('invoice_no'),
                'amount' => $this->input->post('amount')
            ],
            $this->session->userdata('user_id')
        );

        if (!$result['success']) {
            $this->session->set_flashdata(
                'error',
                $result['message']
            );

            return redirect('invoices/create');
        }

        return redirect('invoices/' . $result['invoice_id']);
    }
}
```

## Service pseudo-code

```php
public function submit(array $input, $user_id)
{
    if ($this->Invoice_model->duplicate_exists(
        $input['vendor_id'],
        $input['invoice_no']
    )) {
        return [
            'success' => FALSE,
            'message' => 'Duplicate invoice.'
        ];
    }

    $this->CI->db->trans_begin();

    $invoice_id = $this->Invoice_model->create([
        'vendor_id' => $input['vendor_id'],
        'invoice_no' => $input['invoice_no'],
        'amount' => $input['amount'],
        'status' => 'PENDING',
        'created_by' => $user_id
    ]);

    if (!$invoice_id) {
        $this->CI->db->trans_rollback();

        return [
            'success' => FALSE,
            'message' => 'Could not save invoice.'
        ];
    }

    // Create approval rows and an audit row using $invoice_id.

    if ($this->CI->db->trans_status() === FALSE) {
        $this->CI->db->trans_rollback();

        return [
            'success' => FALSE,
            'message' => 'Could not save invoice.'
        ];
    }

    $this->CI->db->trans_commit();

    return [
        'success' => TRUE,
        'invoice_id' => $invoice_id
    ];
}
```

`Invoice_model::create()` is expected to return the new insert ID or a false-like value on failure. The approval and audit writes are omitted because their schemas are project-specific, but they must occur before `trans_status()` is checked. File storage and notification delivery are external side effects: plan cleanup/retry behavior because rolling back the database does not remove an already moved file or unsend a message.

## Approval authorization

Never approve only by invoice ID.

Check:

```text
invoice exists
current state allows approval
current user is assigned approver
approval is still pending
user has permission
request is not duplicate/replayed
```

Example update pattern:

```php
$this->db
    ->where('invoice_id', $invoice_id)
    ->where('approver_id', $user_id)
    ->where('status', 'PENDING')
    ->update('invoice_approvals', [
        'status' => 'APPROVED',
        'approved_at' => date('Y-m-d H:i:s')
    ]);
```

Then verify affected rows.

---

# 87. Real-World Scenario: E-Commerce Order

Requirements:

```text
customer creates order
stock is checked
order lines saved
stock reduced
payment initiated
confirmation sent
```

## Correct separation

```text
Order Controller
    ↓
Order Service
    ↓
Product Model
Order Model
Inventory Model
Payment Client
Notification Queue
```

## Transaction boundary

Database transaction:

```text
order
order_items
inventory
```

External payment call may need a different consistency strategy.

For payment systems, learn:

```text
idempotency
webhooks
pending states
retry
reconciliation
```

Do not mark an order "paid" merely because the browser returned from a payment page.

Verify payment server-to-server.

---

# 88. Recommended Application Structure

Stock CI3 application structure can be organized like this:

```text
application/
├── config/
│   ├── autoload.php
│   ├── config.php
│   ├── database.php
│   └── routes.php
├── controllers/
│   ├── Auth.php
│   ├── Dashboard.php
│   ├── Invoices.php
│   └── api/
│       └── Invoices.php
├── core/
│   ├── MY_Controller.php
│   ├── Authenticated_Controller.php
│   └── Api_Controller.php
├── helpers/
│   └── app_helper.php
├── libraries/
│   ├── Authorization.php
│   ├── Invoice_service.php
│   └── Erp_client.php
├── models/
│   ├── User_model.php
│   ├── Invoice_model.php
│   └── Audit_model.php
└── views/
    ├── layouts/
    ├── partials/
    ├── auth/
    └── invoices/
```

This is an architectural recommendation, not a mandatory CI3 structure.

---

# 89. Coding Standards and Best Practices

## 1. One responsibility per method

Bad:

```php
process_everything()
```

Better:

```text
validateInvoice()
createInvoice()
buildWorkflow()
recordAudit()
queueNotification()
```

## 2. Meaningful names

Bad:

```php
function getData($x) {}
```

Better:

```php
function find_pending_invoices($company_id) {}
```

## 3. Predictable return types

Bad:

```php
return FALSE;
// sometimes array
// sometimes null
// sometimes object
```

Better: document and normalize result contracts.

## 4. Avoid magic values

Bad:

```php
if ($status == 7) {
}
```

Better:

```php
const STATUS_APPROVED = 7;
```

or use descriptive string/config/domain constants.

## 5. Centralize reusable rules

Examples:

```text
authorization
status mapping
date formatting
API response format
audit
```

## 6. Use transactions for related DB writes

Define exactly which writes must commit together and check `trans_status()`. Do not include a slow external API call inside a database transaction without understanding lock duration and recovery behavior.

## 7. Escape output

Use `html_escape()` for untrusted HTML text/quoted attributes and context-appropriate handling for URLs, JavaScript, JSON and CSS. Escaping for one context is not automatically safe for another.

## 8. Validate business state on the server

Re-read authoritative state before a transition such as approve, cancel or pay. Hidden inputs and disabled buttons are user-interface hints, not enforcement.

## 9. Log failures with context

Include a request/reference ID and safe identifiers, but exclude secrets and unnecessary personal data. Make logs useful for diagnosing what failed and where.

## 10. Never expose internal exceptions to users

Return a stable, helpful public error and record the technical detail privately. API clients should receive a deliberate status/code rather than a database stack trace.

---

# 90. Bad Patterns to Avoid

## Fat controller

```text
Controller method = 500 lines
```

Refactor business processes.

## God model

```text
Common_model.php
```

with 300 unrelated methods is difficult to maintain.

Prefer focused models.

## Raw SQL everywhere

Query Builder is not mandatory, but random copied SQL across controllers creates maintenance problems.

## Queries in views

Views should present prepared data.

## Hard-coded secrets

Bad:

```php
$api_key = 'LIVE-SECRET-123';
```

Use protected environment/config mechanisms.

## Trusting hidden inputs

```html
<input type="hidden" name="approved" value="1">
```

The browser is controlled by the user.

## Authorization only in menus

Hiding an "Admin" button does not secure `/admin/delete/10`.

The endpoint must enforce authorization.

## Catching every error and returning success

Bad:

```php
try {
    // failed
} catch (Exception $e) {
}

echo 'Success';
```

Failure must remain failure.

---

# 91. Useful CI3 Functions Cheat Sheet

This is a memory aid, not a substitute for checking the official signature for your installed version. `$this` below means a CI controller/model/library with access to the CI super-object. URL and escaping functions require the relevant helper/core setup; session and database methods require those components to be loaded.

## Loading, URLs and views

| Call | Important inputs | Return/output | Typical use |
| --- | --- | --- | --- |
| `base_url($uri = '')` | Optional relative asset/path | Absolute URL based on `base_url` | Link to assets or known paths |
| `site_url($uri = '')` | URI string or segment array | Application URL including configured `index_page` | Link to a controller route |
| `redirect($uri, $method = 'auto', $code = NULL)` | Destination, redirect method, optional status | Sends redirect headers; terminates execution | Post/Redirect/Get or navigation |
| `$this->load->view($view, $vars = [], $return = FALSE)` | View name, data, return flag | Sends rendered output, or returns HTML when third argument is `TRUE` | Render a page, fragment or email body |
| `$this->load->model($model, $name = '', $db_conn = FALSE)` | Model name, optional alias/DB config | Loader object; model becomes a controller property | Make a model available |
| `$this->load->library($library, $params = NULL, $name = NULL)` | Class name, constructor/config values, optional alias | Loader object; library becomes a property | Load session, email or custom class |
| `$this->load->helper($helpers)` | Helper name or array of names | Loader object; functions become available | Load `url`, `form`, `cookie`, etc. |

## Request and session

| Call | Important inputs | Return/output | Typical use |
| --- | --- | --- | --- |
| `$this->input->post($key = NULL)` | Optional POST key | One value, POST array, or `NULL` | Read submitted form data before validation |
| `$this->input->get($key = NULL)` | Optional query key | One value, query array, or `NULL` | Read search/filter/page input |
| `$this->input->method($upper = FALSE)` | Whether to uppercase result | HTTP method string | Enforce POST/GET/DELETE behavior |
| `$this->session->userdata($key = NULL)` | Optional session key | One value, session array, or `NULL` | Read authenticated/session state |
| `$this->session->set_userdata($key, $value = NULL)` | Key/value or associative array | No business result; mutates session | Store session state |
| `$this->session->flashdata($key = NULL)` | Optional flash key | Flash value/array or `NULL` | Read a next-request message |
| `$this->session->set_flashdata($key, $value = NULL)` | Key/value or array | No business result; marks flashdata | Store a message before redirect |

Input access does not perform domain validation. Session access does not prove that the user still has a permission stored there.

## Database builder and writes

| Call | Important inputs | Return/output | Typical use |
| --- | --- | --- | --- |
| `$this->db->select($select)` | Column list/expression | DB builder | Choose result columns |
| `$this->db->from($table)` | Table name | DB builder | Choose source table |
| `$this->db->where($key, $value = NULL)` | Condition and value | DB builder | Add an AND condition |
| `$this->db->join($table, $condition, $type = '')` | Table, ON condition, join type | DB builder | Combine related tables |
| `$this->db->order_by($column, $direction = '')` | Whitelisted column/direction | DB builder | Sort results |
| `$this->db->limit($value, $offset = 0)` | Row limit and offset | DB builder | Paginate/bound a query |
| `$this->db->get($table = '')` | Optional table | Query result object or failure | Execute a SELECT |
| `$this->db->insert($table, $data)` | Table and column/value array | Boolean | Insert one row |
| `$this->db->update($table, $data)` | Table and changes, usually after `where()` | Boolean | Update matching rows |
| `$this->db->delete($table)` | Table, normally after `where()` | Boolean | Delete matching rows |
| `$this->db->query($sql, $binds = FALSE)` | SQL and optional bound values | Query object for reads; Boolean for writes | Execute SQL not clearly expressed by Query Builder |
| `$this->db->insert_id()` | None | Last generated identity for the connection/driver | Read ID after a successful insert |
| `$this->db->affected_rows()` | None | Integer affected-row count | Inspect the previous write |
| `$this->db->last_query()` | None | Last SQL string | Development/debug logging; never expose publicly |

Builder calls accumulate state until an execution call such as `get()`, `insert()`, `update()` or `delete()`. Whitelist dynamic identifiers such as sort columns; bindings protect values, not arbitrary SQL syntax.

## Query results, errors and output

| Call | Important inputs | Return/output | Typical use |
| --- | --- | --- | --- |
| `$query->result()` | Optional custom class name | Array of row objects | Iterate multiple rows |
| `$query->result_array()` | None | Array of associative arrays | Array-oriented processing/JSON mapping |
| `$query->row()` | Optional row index/class | One row object or `NULL` | Fetch one record |
| `$query->row_array()` | Optional row index | One associative array or `NULL` | Fetch one record as an array |
| `$query->num_rows()` | None | Integer | Count returned rows |
| `show_404($page = '', $log_error = TRUE)` | Optional page label/log flag | Sends the framework 404 response and exits | Missing route/resource |
| `show_error($message, $status = 500, $heading = 'An Error Was Encountered')` | Safe message/status/heading | Sends an error page and exits | Deliberate HTTP failure |
| `log_message($level, $message)` | `error`, `debug` or `info`; safe text | No application result to depend on | Record diagnostics |
| `$this->output->set_status_header($code, $text = '')` | Status code/optional reason | Output object | Select HTTP status |
| `$this->output->set_content_type($mime, $charset = NULL)` | MIME type/charset | Output object | Declare HTML, JSON, PDF, etc. |
| `$this->output->set_output($body)` | Final response string | Output object | Set response body |
| `html_escape($value)` | String or array | HTML-escaped value | Encode untrusted text for HTML output |

`html_escape()` is for HTML contexts. It is not a general SQL, URL, JavaScript or shell escaping function.

---

# 92. Interview Questions

## Beginner

### What is CodeIgniter?

A PHP web application framework that provides an MVC-oriented structure and reusable components for common web development tasks.

### What is MVC?

Model handles data/domain access, View handles presentation and Controller coordinates a request.

### Where are routes defined?

```text
application/config/routes.php
```

### How do you load a model?

```php
$this->load->model('User_model');
```

### How do you load a view?

```php
$this->load->view('users/index', $data);
```

### What is Query Builder?

CI3's database query construction API for common SELECT/INSERT/UPDATE/DELETE patterns.

---

## Intermediate

### Difference between helper and library?

A helper typically contains stateless functions. A library is a class and can encapsulate state/configuration/dependencies.

### Why use a model?

To separate data access/domain data operations from HTTP/controller logic.

### What is flashdata?

Session data intended to survive for the next request, useful after redirects.

### Why use transactions?

To maintain consistency when several related DB operations must succeed or fail together.

### How do you prevent SQL injection?

Use Query Builder or bound query parameters, plus whitelisting for dynamic SQL identifiers.

### What is CSRF?

An attack where another site causes a user's browser to submit an unwanted authenticated request.

---

## Advanced

### How would you refactor a 1000-line controller?

Identify:

```text
HTTP concerns
validation
business workflows
data access
integrations
authorization
presentation
```

Move them into appropriate services, models, libraries/base controllers and views without changing behavior all at once.

### How would you migrate a CI3 application to a new PHP version?

Inventory framework/dependencies, upgrade CI3 where appropriate, scan application incompatibilities, upgrade libraries, add regression tests, test critical framework components, deploy gradually.

### How do you handle a workflow with DB save plus external API?

Use a clear transaction boundary. Commit internal state safely, use pending states/idempotency/retry/outbox or job mechanisms, and do not assume a DB rollback can undo a completed external call.

### Why is role checking alone insufficient?

Because authorization may also depend on object ownership, company, department, workflow assignment, status and amount limits.

---

# 93. Practice Exercises

## Beginner

- [ ] Install CI3 locally.
- [ ] Create `Home` controller.
- [ ] Create a view.
- [ ] Pass variables from controller to view.
- [ ] Create custom route.
- [ ] Create a model.
- [ ] Read rows from database.
- [ ] Insert a row.
- [ ] Build an edit page.
- [ ] Delete a row safely.

## Intermediate

- [ ] Add form validation.
- [ ] Add session login.
- [ ] Add role-based authorization.
- [ ] Add pagination.
- [ ] Add file upload.
- [ ] Add email.
- [ ] Build AJAX search.
- [ ] Build JSON endpoint.
- [ ] Use transaction.
- [ ] Create migration.

## Advanced

- [ ] Create `MY_Controller`.
- [ ] Create service layer.
- [ ] Create API base controller.
- [ ] Add audit logging.
- [ ] Add request IDs.
- [ ] Build approval workflow.
- [ ] Build retry-safe cron.
- [ ] Secure file downloads.
- [ ] Write regression tests.
- [ ] Upgrade a legacy CI3 app to a newer PHP environment in a test branch.

---

# 94. 30-Day Learning Roadmap

## Days 1-3 — Foundation

Learn:

```text
PHP OOP
HTTP
MVC
CI3 structure
request lifecycle
```

Build:

```text
Hello World page
About page
custom route
```

## Days 4-6 — Controllers and Views

Learn:

```text
controller methods
parameters
views
partials
layout
redirect
```

Build:

```text
employee list UI
employee detail UI
```

## Days 7-10 — Database

Learn:

```text
database config
models
Query Builder
CRUD
joins
transactions
```

Build:

```text
employee CRUD
```

## Days 11-13 — Forms

Learn:

```text
form helper
validation
flashdata
business rules
```

Build:

```text
employee create/edit forms
```

## Days 14-16 — Authentication

Learn:

```text
session
login
logout
password_hash
password_verify
authorization
```

Build:

```text
admin/user login
```

## Days 17-19 — Files and Communication

Learn:

```text
uploads
image processing
downloads
email
```

Build:

```text
employee document upload
```

## Days 20-22 — APIs

Learn:

```text
JSON
HTTP status
AJAX
REST-style resources
CORS
API auth concepts
```

Build:

```text
/api/employees
```

## Days 23-24 — Advanced Framework Features

Learn:

```text
hooks
CLI
cron
migrations
cache
profiler
```

## Days 25-26 — Security

Audit:

```text
SQL injection
XSS
CSRF
upload attacks
session
authorization
secrets
```

## Days 27-28 — Architecture

Refactor:

```text
fat controller
duplicate code
common permissions
service layer
integration client
```

## Days 29-30 — Deployment and Capstone

Deploy a project containing:

```text
login
roles
CRUD
file upload
search
pagination
API
audit
cron
transaction
```

---

# 95. Final Mastery Checklist

You can consider yourself comfortable with CI3 when you can explain and implement all of these without blindly copying a tutorial.

## Framework

- [ ] Request lifecycle.
- [ ] MVC.
- [ ] Project directories.
- [ ] Routes.
- [ ] Controllers.
- [ ] Models.
- [ ] Views.
- [ ] Loader.
- [ ] Autoload.
- [ ] Helpers.
- [ ] Libraries.
- [ ] Core extensions.
- [ ] Hooks.

## HTTP

- [ ] GET/POST.
- [ ] Request headers.
- [ ] Redirects.
- [ ] HTTP status codes.
- [ ] JSON output.
- [ ] AJAX.
- [ ] REST-style API.

## Database

- [ ] Connection configuration.
- [ ] Query Builder.
- [ ] Raw SQL bindings.
- [ ] CRUD.
- [ ] Joins.
- [ ] Grouping.
- [ ] Pagination.
- [ ] Transactions.
- [ ] Multiple DB connections.
- [ ] Migrations.
- [ ] Database Forge.
- [ ] Stored procedure considerations.

## User State

- [ ] Sessions.
- [ ] Flashdata.
- [ ] Cookies.
- [ ] Login.
- [ ] Logout.
- [ ] RBAC.
- [ ] Object-level authorization.

## Input/Files

- [ ] Form validation.
- [ ] File upload.
- [ ] Safe download.
- [ ] Image manipulation.

## Security

- [ ] SQL injection protection.
- [ ] XSS/output encoding.
- [ ] CSRF.
- [ ] Password hashing.
- [ ] Session safety.
- [ ] Upload safety.
- [ ] Secret management.
- [ ] Production error safety.
- [ ] HTTPS.
- [ ] Authorization.

## Operations

- [ ] Logs.
- [ ] Errors.
- [ ] Profiler.
- [ ] Caching.
- [ ] CLI.
- [ ] Cron.
- [ ] Deployment.
- [ ] Environment configuration.
- [ ] Backup/rollback thinking.
- [ ] Performance troubleshooting.

## Legacy Engineering

- [ ] PHP compatibility assessment.
- [ ] CI2-to-CI3 migration concepts.
- [ ] Third-party dependency audit.
- [ ] Regression testing.
- [ ] Incremental modernization.
- [ ] Framework migration planning.

---

# 96. Glossary

## MVC

Model-View-Controller architecture.

## Controller

Class responsible for handling a routed request and coordinating application behavior.

## Model

Class commonly used for data access and data-related domain operations.

## View

Presentation/template file.

## Route

Rule mapping a URL to controller behavior.

## Query Builder

CI3 database query-building interface.

## Session

Server-managed state associated with a user's requests.

## Flashdata

Short-lived session data typically used for the next request.

## CSRF

Cross-Site Request Forgery.

## XSS

Cross-Site Scripting.

## SQL Injection

Injection of malicious/unintended SQL through unsafe query construction.

## Authentication

Verifying identity.

## Authorization

Checking permission.

## RBAC

Role-Based Access Control.

## CRUD

Create, Read, Update, Delete.

## API

Application Programming Interface.

## REST

An architectural style often used to model HTTP APIs around resources.

## CORS

Cross-Origin Resource Sharing.

## CLI

Command-Line Interface.

## Migration

Version-controlled database schema change.

## Transaction

Group of DB operations treated as a unit of work.

## Idempotency

Property where safely repeating an operation does not create unintended duplicate effects.

## N+1 Query

Performance problem where one query loads a list and then another query is executed for each item.

---

# 97. Official References

Use the official CI3 documentation as the source of truth when a framework behavior is unclear.

Official documentation: [CodeIgniter 3.1.13 User Guide](https://codeigniter.com/userguide3/)

Official legacy repository: [bcit-ci/CodeIgniter](https://github.com/bcit-ci/CodeIgniter)

Especially useful documentation sections:

```text
General Topics
    Controllers
    Views
    Models
    Routing
    Helpers
    Libraries
    Hooks
    Security
    CLI
    Environments

Library Reference
    Session
    Form Validation
    Upload
    Email
    Pagination
    Encryption
    Image Manipulation

Database Reference
    Configuration
    Connecting
    Queries
    Query Builder
    Transactions
    Database Forge

Installation
    Downloading
    Upgrade Guides
    Troubleshooting

Changelog
```

---

# Appendix A — Complete CRUD Mini Project

This example implements all four CRUD operations: create, read, update and soft delete. It assumes a login action has already stored `user_id` and `role` in the session. Any write requires the `ADMIN` role. Enable CI3 CSRF protection so `form_open()` adds and validates a token for POST forms:

```php
$config['csrf_protection'] = TRUE;
```

## Database table

```sql
CREATE TABLE employees (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NULL,
    deleted_at DATETIME NULL,
    UNIQUE KEY uq_employees_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

The unique index is the final protection against duplicate emails, including concurrent requests. `deleted_at` implements soft deletion: active queries exclude rows whose timestamp is set.

## Routes

Put specific routes before the general numeric detail route:

```php
$route['employees']['get'] = 'employees/index';
$route['employees/create']['get'] = 'employees/create';
$route['employees/create']['post'] = 'employees/create';
$route['employees/(:num)/edit']['get'] = 'employees/edit/$1';
$route['employees/(:num)/edit']['post'] = 'employees/edit/$1';
$route['employees/(:num)/delete']['post'] = 'employees/delete/$1';
$route['employees/(:num)']['get'] = 'employees/show/$1';
```

The nested `get`/`post` keys restrict each route by HTTP method. The numeric capture becomes `$1`, which CI3 passes to the controller as `$id`.

## Model

`application/models/Employee_model.php` contains database operations and returns predictable results:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Employee_model extends CI_Model
{
    protected $table = 'employees';

    public function all()
    {
        return $this->db
            ->where('deleted_at', NULL)
            ->order_by('id', 'DESC')
            ->get($this->table)
            ->result();
    }

    public function find($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->where('deleted_at', NULL)
            ->get($this->table)
            ->row();
    }

    public function email_exists_except($email, $except_id = NULL)
    {
        $this->db->where('email', $email);

        if ($except_id !== NULL) {
            $this->db->where('id !=', (int) $except_id);
        }

        return $this->db
            ->count_all_results($this->table) > 0;
    }

    public function create(array $data)
    {
        if (!$this->db->insert($this->table, $data)) {
            return FALSE;
        }

        return $this->db->insert_id();
    }

    public function update_by_id($id, array $data)
    {
        return $this->db
            ->where('id', (int) $id)
            ->where('deleted_at', NULL)
            ->update($this->table, $data);
    }

    public function soft_delete($id)
    {
        return $this->update_by_id($id, [
            'deleted_at' => date('Y-m-d H:i:s')
        ]);
    }
}
```

`all()` returns an array of row objects; `find()` returns one object or `NULL`; `email_exists_except()` returns a Boolean; `create()` returns the insert ID or `FALSE`; and update/delete methods return a Boolean database result.

## Controller

`application/controllers/Employees.php` coordinates HTTP input, validation, authorization, the model and redirects:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Employees extends CI_Controller
{
    protected $editing_id = NULL;

    public function __construct()
    {
        parent::__construct();

        $this->load->model('Employee_model');
        $this->load->library(['form_validation', 'session']);
        $this->load->helper(['url', 'form']);

        if (!$this->session->userdata('user_id')) {
            redirect('login');
        }
    }

    protected function require_admin()
    {
        if ($this->session->userdata('role') !== 'ADMIN') {
            show_error('Forbidden', 403);
        }
    }

    protected function set_rules()
    {
        $this->form_validation->set_rules(
            'name',
            'Name',
            'required|trim|min_length[2]|max_length[100]'
        );

        $this->form_validation->set_rules(
            'email',
            'Email',
            'required|trim|valid_email|max_length[150]'
                . '|callback_email_available'
        );
    }

    public function email_available($email)
    {
        if ($this->Employee_model->email_exists_except(
            $email,
            $this->editing_id
        )) {
            $this->form_validation->set_message(
                'email_available',
                'The Email field must contain a unique value.'
            );

            return FALSE;
        }

        return TRUE;
    }

    public function index()
    {
        $this->load->view('employees/index', [
            'employees' => $this->Employee_model->all()
        ]);
    }

    public function show($id)
    {
        $employee = $this->Employee_model->find($id);

        if (!$employee) {
            show_404();
        }

        $this->load->view('employees/show', [
            'employee' => $employee
        ]);
    }

    public function create()
    {
        $this->require_admin();
        $this->set_rules();

        if ($this->form_validation->run() === FALSE) {
            return $this->load->view('employees/create');
        }

        $id = $this->Employee_model->create([
            'name' => $this->input->post('name'),
            'email' => $this->input->post('email'),
            'created_at' => date('Y-m-d H:i:s')
        ]);

        if ($id === FALSE) {
            log_message('error', 'Employee insert failed.');
            show_error('Could not create employee.', 500);
        }

        $this->session->set_flashdata(
            'success',
            'Employee created.'
        );

        redirect('employees/' . $id);
    }

    public function edit($id)
    {
        $this->require_admin();

        $employee = $this->Employee_model->find($id);

        if (!$employee) {
            show_404();
        }

        $this->editing_id = (int) $id;
        $this->set_rules();

        if ($this->form_validation->run() === FALSE) {
            return $this->load->view('employees/edit', [
                'employee' => $employee
            ]);
        }

        $saved = $this->Employee_model->update_by_id($id, [
            'name' => $this->input->post('name'),
            'email' => $this->input->post('email'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        if (!$saved) {
            log_message(
                'error',
                'Employee update failed. id=' . (int) $id
            );
            show_error('Could not update employee.', 500);
        }

        $this->session->set_flashdata(
            'success',
            'Employee updated.'
        );

        redirect('employees/' . (int) $id);
    }

    public function delete($id)
    {
        $this->require_admin();

        if ($this->input->method(TRUE) !== 'POST') {
            show_error('Method Not Allowed', 405);
        }

        if (!$this->Employee_model->find($id)) {
            show_404();
        }

        if (!$this->Employee_model->soft_delete($id)) {
            log_message(
                'error',
                'Employee delete failed. id=' . (int) $id
            );
            show_error('Could not delete employee.', 500);
        }

        $this->session->set_flashdata(
            'success',
            'Employee deleted.'
        );

        redirect('employees');
    }
}
```

The validation callback receives the submitted email and returns `TRUE` when available. During editing, `$editing_id` lets the existing employee keep their own address. The database unique index remains essential because validation and insert/update are separate operations.

## List view

`application/views/employees/index.php` escapes each database value before placing it in HTML:

```php
<h1>Employees</h1>

<?php if ($message = $this->session->flashdata('success')): ?>
    <p><?= html_escape($message); ?></p>
<?php endif; ?>

<p><a href="<?= site_url('employees/create'); ?>">Create employee</a></p>

<?php if (!$employees): ?>
    <p>No employees found.</p>
<?php endif; ?>

<?php foreach ($employees as $employee): ?>
    <p>
        <a href="<?= site_url('employees/' . (int) $employee->id); ?>">
            <?= html_escape($employee->name); ?>
        </a>
    </p>
<?php endforeach; ?>
```

## Detail view

`application/views/employees/show.php` provides read, edit and delete actions. Deletion uses a POST form rather than a state-changing link:

```php
<h1><?= html_escape($employee->name); ?></h1>

<?php if ($message = $this->session->flashdata('success')): ?>
    <p><?= html_escape($message); ?></p>
<?php endif; ?>

<p>Email: <?= html_escape($employee->email); ?></p>

<p>
    <a href="<?= site_url(
        'employees/' . (int) $employee->id . '/edit'
    ); ?>">Edit</a>
</p>

<?= form_open(
    'employees/' . (int) $employee->id . '/delete'
); ?>
    <button type="submit">Delete</button>
<?= form_close(); ?>
```

The controller, not the visibility of these buttons, enforces the `ADMIN` permission.

## Create view

`application/views/employees/create.php` displays validation errors and repopulates rejected fields:

```php
<h1>Create Employee</h1>

<?= validation_errors(); ?>

<?= form_open('employees/create'); ?>
    <label for="name">Name</label>
    <input id="name" name="name" value="<?= set_value('name'); ?>">

    <label for="email">Email</label>
    <input
        id="email"
        type="email"
        name="email"
        value="<?= set_value('email'); ?>"
    >

    <button type="submit">Save</button>
<?= form_close(); ?>
```

`set_value()` uses the submitted value after failure and escapes HTML by default in current CI3, making it suitable for these quoted attributes.

## Edit view

`application/views/employees/edit.php` uses the stored value as the default and a rejected submitted value when validation fails:

```php
<h1>Edit Employee</h1>

<?= validation_errors(); ?>

<?= form_open(
    'employees/' . (int) $employee->id . '/edit'
); ?>
    <label for="name">Name</label>
    <input
        id="name"
        name="name"
        value="<?= set_value('name', $employee->name); ?>"
    >

    <label for="email">Email</label>
    <input
        id="email"
        type="email"
        name="email"
        value="<?= set_value('email', $employee->email); ?>"
    >

    <button type="submit">Update</button>
<?= form_close(); ?>
```

## Expected behavior

| Request | Operation | Expected result |
| --- | --- | --- |
| `GET /employees` | Read list | Active employees are rendered |
| `GET /employees/5` | Read one | Employee 5 or a 404 response |
| `GET/POST /employees/create` | Create | Form, then insert and redirect |
| `GET/POST /employees/5/edit` | Update | Form, then update and redirect |
| `POST /employees/5/delete` | Soft delete | Timestamp set and redirect to list |

The redirect after each successful POST implements Post/Redirect/Get: refreshing the destination does not resubmit the write. Flashdata carries a one-request success message across that redirect. A production application should additionally add pagination, audit rows, centralized authorization, friendly duplicate-key handling and automated tests.

---

# Appendix B — Recommended Debugging Method

When a CI3 feature fails, do not randomly change code.

Use this sequence:

```text
1. Reproduce
2. Define expected behavior
3. Identify request URL/method
4. Confirm route
5. Confirm controller/method
6. Inspect input
7. Inspect validation
8. Inspect authorization
9. Inspect model call
10. Inspect generated SQL
11. Inspect DB result
12. Inspect business state
13. Inspect view/JSON output
14. Inspect CI log
15. Inspect PHP/web-server log
16. Fix root cause
17. Add regression test/check
```

Example:

```text
Problem:
"Invoice shows Waiting for Approval even after approval."

Debug:
1. Find invoice ID
2. Load current DB status
3. Find controller endpoint
4. Find approval update method
5. Check affected rows
6. Check status recalculation
7. Check transaction
8. Check cached data
9. Check page query/view
```

This is far more effective than changing random conditions.

---

# Appendix C — How to Read a Legacy CI3 Project

When joining an existing CI3 project, inspect in this order:

```text
1. index.php
2. application/config/config.php
3. application/config/database.php
4. application/config/routes.php
5. application/config/autoload.php
6. application/core/
7. application/hooks/
8. application/controllers/
9. application/models/
10. application/libraries/
11. application/helpers/
12. application/views/
13. Composer dependencies
14. Cron/scheduled scripts
15. Server rewrite config
16. Database schema
17. External integrations
18. Logs
```

Then draw a map:

```text
Feature
  ↓
Route
  ↓
Controller
  ↓
Service/Library
  ↓
Model
  ↓
Tables/SP/API
  ↓
View/API Response
```

Do this for the five most critical business processes first.

---

# Appendix D — Master CI3 Mental Model

When you see this:

```php
$this->load->model('Invoice_model');

$invoice = $this->Invoice_model->find($id);

$this->load->view('invoice/show', [
    'invoice' => $invoice
]);
```

read it mentally as:

```text
Controller:
"I need data."

Loader:
"Instantiate the model."

Model:
"Ask database for invoice."

Database:
"Return record."

Controller:
"Give record to template."

View:
"Render safe HTML."

Output:
"Send response to browser."
```

Once this mental model becomes automatic, CI3 becomes much easier to debug and maintain.

---

# Final Advice

Do not measure CodeIgniter knowledge by how many framework methods you remember.

A strong CI3 developer understands:

```text
request lifecycle
separation of concerns
SQL
business transactions
security
authorization
data consistency
error handling
integration reliability
deployment
legacy compatibility
```

The framework is only the tool.

The goal is to build applications that are:

```text
correct
secure
maintainable
testable
understandable
recoverable
```

That is what turns CodeIgniter knowledge into professional application engineering.
