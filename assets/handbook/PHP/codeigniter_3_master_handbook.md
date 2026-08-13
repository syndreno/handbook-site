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

CodeIgniter 3 is the legacy branch of CodeIgniter.

For existing CI3 applications, it remains important to understand the framework because many production systems still use it.

For brand-new applications, evaluate whether a newer supported framework is more appropriate.

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

CI3 3.1.13 added compatibility work for PHP 8.0 and PHP 8.1. Stock CI3 should not automatically be assumed to support every newer PHP release without compatibility testing or patches.

---

# 4. Prerequisites

Before learning CI3, understand these PHP concepts.

## PHP basics

You should know:

```php
$company = 'Acme';

$amount = 1000;

if ($amount > 500) {
    echo 'Approval required';
}
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

## Functions

```php
function calculate_tax($amount, $rate)
{
    return $amount * $rate;
}
```

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
```

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

Typical installation process:

```text
1. Download CI3
2. Extract application
3. Configure base URL
4. Configure encryption key
5. Configure database
6. Configure routes
7. Configure rewrite rules
8. Test welcome page
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

Controls URL mapping.

## `autoload.php`

Controls automatically loaded libraries, helpers, models, etc.

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

Libraries are classes.

Load:

```php
$this->load->library('session');
```

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

Then:

```php
$this->CI->db->insert(...);
```

---

# 20. Extending Core Classes

One of the most useful CI3 patterns is:

```text
application/core/MY_Controller.php
```

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

## GET

```php
$page = $this->input->get('page');
```

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

Using Form Helper:

```php
$this->load->helper('form');

echo form_open('employees/store');
```

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

---

# 26. Sessions

Load:

```php
$this->load->library('session');
```

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

Use session regeneration/security settings appropriately for authentication systems.

Never store plain-text passwords in session data.

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

Use cases:

- temporary verification state;
- short-lived wizard state;
- temporary filters.

---

# 28. Cookies

CI3 can work with cookies through its input/output facilities and cookie helper.

Use cookies for appropriate client-side state.

Do not put sensitive secrets into ordinary cookies.

Authentication should use secure session/token patterns.

Recommended attributes depend on architecture, but modern deployments should evaluate:

```text
Secure
HttpOnly
SameSite
```

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

## Delete

```php
$this->db
    ->where('id', $id)
    ->delete('employees');
```

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

$this->pagination->initialize($config);
```

Query:

```php
$limit = 20;
$offset = (int) $this->uri->segment(3, 0);

$data['employees'] = $this->Employee_model
    ->get_page($limit, $offset);
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

Upload:

```php
if (!$this->upload->do_upload('document')) {
    $error = $this->upload->display_errors('', '');
} else {
    $file = $this->upload->data();
}
```

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
if (!is_array($data)) {
    // reject invalid JSON
}
```

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
    // ...
}
```

Easier:

```php
public function calculate($amount, $role)
{
    // pure business calculation
}
```

Pure functions/services are much easier to verify.

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
    created_at DATETIME NOT NULL
);
```

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

    // 1. create invoice
    // 2. create workflow
    // 3. audit action

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

## 7. Escape output

## 8. Validate business state on the server

## 9. Log failures with context

## 10. Never expose internal exceptions to users

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

## URLs

```php
base_url()
site_url()
redirect()
```

## Views

```php
$this->load->view()
```

## Models

```php
$this->load->model()
```

## Libraries

```php
$this->load->library()
```

## Helpers

```php
$this->load->helper()
```

## POST/GET

```php
$this->input->post()
$this->input->get()
```

## Session

```php
$this->session->userdata()
$this->session->set_userdata()
$this->session->flashdata()
$this->session->set_flashdata()
```

## Database

```php
$this->db->select()
$this->db->from()
$this->db->where()
$this->db->join()
$this->db->order_by()
$this->db->limit()
$this->db->get()
$this->db->insert()
$this->db->update()
$this->db->delete()
$this->db->query()
$this->db->insert_id()
$this->db->affected_rows()
$this->db->last_query()
```

## Query results

```php
$query->result()
$query->result_array()
$query->row()
$query->row_array()
$query->num_rows()
```

## Errors/logs

```php
show_404()
show_error()
log_message()
```

## Output

```php
$this->output->set_status_header()
$this->output->set_content_type()
$this->output->set_output()
```

## Escaping

```php
html_escape()
```

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

Official documentation:

```text
https://codeigniter.com/userguide3/
```

Official legacy repository:

```text
https://github.com/bcit-ci/CodeIgniter
```

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

This small example connects the main concepts.

## Route

```php
$route['employees'] = 'employees/index';
$route['employees/create'] = 'employees/create';
$route['employees/(:num)'] = 'employees/show/$1';
```

## Model

```php
<?php

class Employee_model extends CI_Model
{
    protected $table = 'employees';

    public function all()
    {
        return $this->db
            ->order_by('id', 'DESC')
            ->get($this->table)
            ->result();
    }

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
}
```

## Controller

```php
<?php

class Employees extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->load->model('Employee_model');
        $this->load->library([
            'form_validation',
            'session'
        ]);
        $this->load->helper([
            'url',
            'form'
        ]);
    }

    public function index()
    {
        $data['employees'] =
            $this->Employee_model->all();

        $this->load->view(
            'employees/index',
            $data
        );
    }

    public function show($id)
    {
        $data['employee'] =
            $this->Employee_model->find($id);

        if (!$data['employee']) {
            show_404();
        }

        $this->load->view(
            'employees/show',
            $data
        );
    }

    public function create()
    {
        $this->form_validation->set_rules(
            'name',
            'Name',
            'required|min_length[2]|max_length[100]'
        );

        $this->form_validation->set_rules(
            'email',
            'Email',
            'required|valid_email'
        );

        if ($this->form_validation->run() === FALSE) {
            return $this->load->view(
                'employees/create'
            );
        }

        $id = $this->Employee_model->create([
            'name' => trim(
                $this->input->post('name')
            ),
            'email' => trim(
                $this->input->post('email')
            ),
            'created_at' => date('Y-m-d H:i:s')
        ]);

        $this->session->set_flashdata(
            'success',
            'Employee created.'
        );

        redirect('employees/' . $id);
    }
}
```

## List view

```php
<h1>Employees</h1>

<?php foreach ($employees as $employee): ?>

    <p>
        <a href="<?= site_url(
            'employees/' . $employee->id
        ); ?>">
            <?= html_escape($employee->name); ?>
        </a>
    </p>

<?php endforeach; ?>
```

## Create view

```php
<h1>Create Employee</h1>

<?= validation_errors(); ?>

<?= form_open('employees/create'); ?>

<label>Name</label>
<input
    type="text"
    name="name"
    value="<?= set_value('name'); ?>"
>

<label>Email</label>
<input
    type="email"
    name="email"
    value="<?= set_value('email'); ?>"
>

<button type="submit">
    Save
</button>

<?= form_close(); ?>
```

Study this until you can explain exactly:

```text
why route exists
why controller exists
why model exists
why validation occurs before insert
why output is escaped
why redirect is used after POST
why flashdata is useful
```

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
