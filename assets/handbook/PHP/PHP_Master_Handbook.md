# PHP Master Handbook
## Beginner to Advanced — A Single-File Learning Guide with Explanations, Scenarios, Examples, Best Practices, Security, Databases, APIs, Testing, Architecture, and Interview Preparation

> **Goal of this handbook:** A new learner should be able to open this file, choose any PHP topic, understand what it means, see why it is useful, learn the syntax, and study a realistic use case.
>
> This guide focuses on **modern PHP 8.x** practices. Some features depend on the exact PHP 8.x version installed on your system.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is PHP?](#2-what-is-php)
3. [How PHP Works](#3-how-php-works)
4. [Installing and Running PHP](#4-installing-and-running-php)
5. [Your First PHP Program](#5-your-first-php-program)
6. [PHP Syntax Fundamentals](#6-php-syntax-fundamentals)
7. [Comments](#7-comments)
8. [Variables](#8-variables)
9. [Constants](#9-constants)
10. [Data Types](#10-data-types)
11. [Type Juggling and Type Casting](#11-type-juggling-and-type-casting)
12. [Strict Types](#12-strict-types)
13. [Operators](#13-operators)
14. [Conditional Statements](#14-conditional-statements)
15. [match Expression](#15-match-expression)
16. [Loops](#16-loops)
17. [break and continue](#17-break-and-continue)
18. [Strings](#18-strings)
19. [Arrays](#19-arrays)
20. [Array Functions](#20-array-functions)
21. [Destructuring and Spread Operator](#21-destructuring-and-spread-operator)
22. [Functions](#22-functions)
23. [Function Parameters](#23-function-parameters)
24. [Return Types](#24-return-types)
25. [Named Arguments](#25-named-arguments)
26. [Anonymous Functions and Closures](#26-anonymous-functions-and-closures)
27. [Arrow Functions](#27-arrow-functions)
28. [Variable Scope](#28-variable-scope)
29. [References](#29-references)
30. [include, require, include_once, require_once](#30-include-require-include_once-require_once)
31. [Useful Built-in Functions](#31-useful-built-in-functions)
32. [Date and Time](#32-date-and-time)
33. [Regular Expressions](#33-regular-expressions)
34. [JSON](#34-json)
35. [Files and Directories](#35-files-and-directories)
36. [Superglobals](#36-superglobals)
37. [Handling Forms](#37-handling-forms)
38. [GET vs POST](#38-get-vs-post)
39. [Cookies](#39-cookies)
40. [Sessions](#40-sessions)
41. [File Uploads](#41-file-uploads)
42. [HTTP Headers and Redirects](#42-http-headers-and-redirects)
43. [Error Handling](#43-error-handling)
44. [Exceptions](#44-exceptions)
45. [Custom Exceptions](#45-custom-exceptions)
46. [Object-Oriented Programming](#46-object-oriented-programming)
47. [Classes and Objects](#47-classes-and-objects)
48. [Properties and Methods](#48-properties-and-methods)
49. [Constructors and Destructors](#49-constructors-and-destructors)
50. [Visibility](#50-visibility)
51. [Inheritance](#51-inheritance)
52. [Method Overriding](#52-method-overriding)
53. [Abstract Classes](#53-abstract-classes)
54. [Interfaces](#54-interfaces)
55. [Traits](#55-traits)
56. [Static Members](#56-static-members)
57. [Class Constants](#57-class-constants)
58. [final Keyword](#58-final-keyword)
59. [Late Static Binding](#59-late-static-binding)
60. [Magic Methods](#60-magic-methods)
61. [Object Cloning](#61-object-cloning)
62. [Anonymous Classes](#62-anonymous-classes)
63. [Namespaces](#63-namespaces)
64. [Autoloading](#64-autoloading)
65. [Composer](#65-composer)
66. [Enums](#66-enums)
67. [Attributes](#67-attributes)
68. [Readonly Data](#68-readonly-data)
69. [Union, Intersection and Nullable Types](#69-union-intersection-and-nullable-types)
70. [Generators](#70-generators)
71. [Iterators and Iterables](#71-iterators-and-iterables)
72. [Fibers and Concurrency Concepts](#72-fibers-and-concurrency-concepts)
73. [Database Fundamentals](#73-database-fundamentals)
74. [PDO](#74-pdo)
75. [Prepared Statements](#75-prepared-statements)
76. [Transactions](#76-transactions)
77. [Database Design for PHP Developers](#77-database-design-for-php-developers)
78. [CRUD Application Example](#78-crud-application-example)
79. [Authentication Fundamentals](#79-authentication-fundamentals)
80. [Password Hashing](#80-password-hashing)
81. [Authorization and Roles](#81-authorization-and-roles)
82. [Security Fundamentals](#82-security-fundamentals)
83. [SQL Injection](#83-sql-injection)
84. [Cross-Site Scripting](#84-cross-site-scripting)
85. [CSRF](#85-csrf)
86. [Session Security](#86-session-security)
87. [File Upload Security](#87-file-upload-security)
88. [Input Validation and Sanitization](#88-input-validation-and-sanitization)
89. [Environment Variables and Secrets](#89-environment-variables-and-secrets)
90. [Building REST APIs](#90-building-rest-apis)
91. [HTTP Methods and Status Codes](#91-http-methods-and-status-codes)
92. [API Validation](#92-api-validation)
93. [API Error Responses](#93-api-error-responses)
94. [API Authentication](#94-api-authentication)
95. [cURL and Calling External APIs](#95-curl-and-calling-external-apis)
96. [Dependency Injection](#96-dependency-injection)
97. [SOLID Principles](#97-solid-principles)
98. [Common Design Patterns](#98-common-design-patterns)
99. [MVC Architecture](#99-mvc-architecture)
100. [Repository and Service Layers](#100-repository-and-service-layers)
101. [DTOs and Value Objects](#101-dtos-and-value-objects)
102. [Clean Code in PHP](#102-clean-code-in-php)
103. [PSR Standards](#103-psr-standards)
104. [Logging](#104-logging)
105. [Configuration Management](#105-configuration-management)
106. [Testing](#106-testing)
107. [Unit, Integration and Feature Tests](#107-unit-integration-and-feature-tests)
108. [Mocking and Test Doubles](#108-mocking-and-test-doubles)
109. [Debugging](#109-debugging)
110. [Xdebug](#110-xdebug)
111. [Performance and Optimization](#111-performance-and-optimization)
112. [Caching](#112-caching)
113. [OPcache](#113-opcache)
114. [Memory Management](#114-memory-management)
115. [Background Jobs and Queues](#115-background-jobs-and-queues)
116. [Cron Jobs](#116-cron-jobs)
117. [Email Sending](#117-email-sending)
118. [CLI Applications](#118-cli-applications)
119. [Working with XML](#119-working-with-xml)
120. [CSV Processing](#120-csv-processing)
121. [Common PHP Frameworks](#121-common-php-frameworks)
122. [Laravel Learning Map](#122-laravel-learning-map)
123. [Symfony Learning Map](#123-symfony-learning-map)
124. [Legacy PHP and CodeIgniter Notes](#124-legacy-php-and-codeigniter-notes)
125. [PHP Application Folder Structure](#125-php-application-folder-structure)
126. [Real-World Mini Projects](#126-real-world-mini-projects)
127. [Common Mistakes](#127-common-mistakes)
128. [PHP Interview Questions](#128-php-interview-questions)
129. [PHP Roadmap](#129-php-roadmap)
130. [Final Mastery Checklist](#130-final-mastery-checklist)

---

# 1. How to Use This Handbook

Do not try to memorize PHP.

Use this process:

1. Read the concept.
2. Understand why it exists.
3. Type the example yourself.
4. Change the example.
5. Break the example intentionally.
6. Read the error.
7. Build a small use case.
8. Revisit the topic later.

A useful progression is:

```text
Syntax
  ↓
Functions
  ↓
Arrays / Strings
  ↓
Forms / HTTP
  ↓
OOP
  ↓
Database
  ↓
Security
  ↓
Composer
  ↓
Architecture
  ↓
APIs
  ↓
Testing
  ↓
Framework
  ↓
Production systems
```

---

# 2. What Is PHP?

PHP is a general-purpose programming language primarily used for server-side web development.

PHP originally became popular because developers could place PHP directly inside HTML.

Example:

```php
<h1>Hello <?= htmlspecialchars($username) ?></h1>
```

Today PHP is used for much more:

- Websites
- REST APIs
- Backend systems
- E-commerce
- ERP applications
- Invoice processing
- Admin portals
- Authentication systems
- CLI scripts
- Scheduled jobs
- Queue workers
- File processing
- Microservices

Popular platforms and frameworks using PHP include WordPress, Laravel, Symfony, Drupal, Magento/Adobe Commerce, and many internal enterprise systems.

---

# 3. How PHP Works

Consider this request:

```text
Browser → Web Server → PHP → Database → PHP → HTML/JSON → Browser
```

Example:

A user opens:

```text
https://example.com/profile.php?id=15
```

The browser does **not** normally receive your PHP source code.

The server executes something similar to:

```php
<?php

$userId = $_GET['id'] ?? null;

// Database logic...

echo "<h1>User Profile</h1>";
```

The browser receives the generated output.

For an API:

```text
Frontend → POST /api/login → PHP → Database → JSON response
```

---

# 4. Installing and Running PHP

Check installation:

```bash
php -v
```

Run a PHP file:

```bash
php app.php
```

Start PHP's development server:

```bash
php -S localhost:8000
```

Then visit:

```text
http://localhost:8000
```

Common local development options:

- Standalone PHP
- XAMPP
- WAMP
- Laragon
- Docker
- Laravel Herd
- A local Nginx/Apache setup

For professional development, learn both:

```text
PHP CLI
Composer
Web server
Database
Environment variables
Git
```

---

# 5. Your First PHP Program

Create:

```text
hello.php
```

```php
<?php

echo "Hello, PHP!";
```

Run:

```bash
php hello.php
```

Output:

```text
Hello, PHP!
```

PHP files normally begin with:

```php
<?php
```

When a file contains only PHP, it is common practice to omit the closing `?>` to avoid accidental whitespace output.

---

# 6. PHP Syntax Fundamentals

Statements normally end with `;`.

```php
<?php

$name = "Shoeb";
$age = 30;

echo $name;
echo $age;
```

PHP is case-sensitive for variable names:

```php
$name = "Ali";

echo $name; // Ali
echo $Name; // undefined variable
```

Use braces to define blocks:

```php
if ($age >= 18) {
    echo "Adult";
}
```

---

# 7. Comments

Single line:

```php
// This is a comment
```

Another single-line style:

```php
# This also works
```

Multi-line:

```php
/*
This is a
multi-line comment
*/
```

PHPDoc:

```php
/**
 * Calculate invoice total.
 *
 * @param float $subtotal
 * @param float $tax
 * @return float
 */
function calculateTotal(float $subtotal, float $tax): float
{
    return $subtotal + $tax;
}
```

Use comments to explain **why**, not obvious code.

Bad:

```php
// Increment count
$count++;
```

Better:

```php
// Skip the first row because it contains CSV headings.
$rowNumber++;
```

---

# 8. Variables

PHP variables start with `$`.

```php
$name = "Aisha";
$age = 25;
$salary = 50000.50;
$isActive = true;
```

Good naming:

```php
$invoiceNumber
$customerEmail
$totalAmount
$isApproved
```

Poor naming:

```php
$x
$a1
$data2
$temp123
```

Use descriptive names unless a short variable is obvious in a tiny context.

---

# 9. Constants

Constants store values that should not change.

```php
define('APP_NAME', 'Invoice Portal');

echo APP_NAME;
```

Modern class constants:

```php
class InvoiceStatus
{
    public const PENDING = 'pending';
    public const APPROVED = 'approved';
}
```

Usage:

```php
$status = InvoiceStatus::PENDING;
```

Use constants for values such as:

- statuses
- fixed configuration names
- mathematical constants
- role names
- internal keys

Do **not** hardcode secrets as constants inside source code.

---

# 10. Data Types

Important PHP types:

```text
int
float
string
bool
array
object
null
resource
callable
iterable
```

Example:

```php
$quantity = 10;             // int
$price = 199.99;            // float
$product = "Keyboard";      // string
$isAvailable = true;        // bool
$tags = ['usb', 'gaming'];  // array
$middleName = null;         // null
```

Check type:

```php
var_dump($quantity);
```

Output:

```text
int(10)
```

Useful checks:

```php
is_int($value);
is_float($value);
is_string($value);
is_bool($value);
is_array($value);
is_object($value);
is_null($value);
```

---

# 11. Type Juggling and Type Casting

PHP can convert types automatically.

```php
$result = "10" + 5;

echo $result;
```

Depending on the value and PHP version, automatic numeric conversion may occur.

Do not rely unnecessarily on implicit conversion.

Explicit casting:

```php
$age = (int) "25";
$price = (float) "199.50";
$name = (string) 123;
$isEnabled = (bool) 1;
```

Scenario: input received from a form.

```php
$quantity = (int) ($_POST['quantity'] ?? 0);
```

Be careful:

```php
(bool) "false"
```

A non-empty string is normally truthy, so this is not the same as boolean `false`.

For boolean input, validate intentionally.

---

# 12. Strict Types

At the top of a PHP file:

```php
<?php

declare(strict_types=1);
```

Example:

```php
function add(int $a, int $b): int
{
    return $a + $b;
}

add("10", 5);
```

With strict type handling, passing an incompatible scalar value can result in a `TypeError`.

Professional projects often use:

```php
declare(strict_types=1);
```

Why?

Because this:

```php
calculateTax("abc");
```

should fail early rather than silently creating unexpected data.

---

# 13. Operators

## Arithmetic

```php
$a + $b;
$a - $b;
$a * $b;
$a / $b;
$a % $b;
$a ** $b;
```

Example:

```php
$subtotal = 1000;
$taxRate = 18;

$tax = $subtotal * $taxRate / 100;
```

## Assignment

```php
$x = 10;
$x += 5;
$x -= 2;
$x *= 3;
$x /= 2;
```

## Comparison

```php
$a == $b;
$a === $b;
$a != $b;
$a !== $b;
$a > $b;
$a < $b;
$a >= $b;
$a <= $b;
```

Important:

```php
5 == "5";   // loose comparison
5 === "5";  // strict comparison
```

Prefer `===` and `!==` in most application code.

## Logical

```php
&&
||
!
```

Example:

```php
if ($isLoggedIn && $isAdmin) {
    echo "Admin area";
}
```

## Null coalescing

```php
$name = $_GET['name'] ?? 'Guest';
```

Equivalent idea:

```php
$name = isset($_GET['name']) ? $_GET['name'] : 'Guest';
```

## Null coalescing assignment

```php
$config['timeout'] ??= 30;
```

## Spaceship operator

```php
$a <=> $b
```

Useful in sorting.

```php
usort($users, fn ($a, $b) => $a['age'] <=> $b['age']);
```

---

# 14. Conditional Statements

## if

```php
if ($age >= 18) {
    echo "Eligible";
}
```

## if / else

```php
if ($invoiceTotal > 100000) {
    echo "Manager approval required";
} else {
    echo "Standard approval";
}
```

## elseif

```php
if ($score >= 90) {
    $grade = 'A';
} elseif ($score >= 75) {
    $grade = 'B';
} elseif ($score >= 60) {
    $grade = 'C';
} else {
    $grade = 'D';
}
```

## Ternary operator

```php
$statusLabel = $isActive ? 'Active' : 'Inactive';
```

Use ternary when the condition is simple.

Avoid:

```php
$result = $a ? ($b ? ($c ? 'x' : 'y') : 'z') : 'n';
```

Complex logic is clearer using `if`.

---

# 15. match Expression

`match` is a modern alternative to many `switch` use cases.

```php
$statusMessage = match ($status) {
    'pending' => 'Waiting for approval',
    'approved' => 'Approved successfully',
    'rejected' => 'Rejected',
    default => 'Unknown status',
};
```

Advantages:

- returns a value
- strict comparison
- no accidental fall-through
- often cleaner than `switch`

Scenario:

```php
$httpCode = match ($result) {
    'created' => 201,
    'invalid' => 422,
    'unauthorized' => 401,
    default => 500,
};
```

---

# 16. Loops

## for

```php
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
```

Use when the number of iterations is known.

## while

```php
$count = 1;

while ($count <= 5) {
    echo $count;
    $count++;
}
```

## do while

```php
$count = 1;

do {
    echo $count;
    $count++;
} while ($count <= 5);
```

Runs at least once.

## foreach

Most important loop for arrays.

```php
$users = ['Ali', 'Sara', 'John'];

foreach ($users as $user) {
    echo $user;
}
```

Key and value:

```php
$user = [
    'name' => 'Ali',
    'email' => 'ali@example.com',
];

foreach ($user as $key => $value) {
    echo "$key: $value";
}
```

---

# 17. break and continue

`break` stops the loop.

```php
foreach ($numbers as $number) {
    if ($number === 100) {
        break;
    }

    echo $number;
}
```

`continue` skips the current iteration.

```php
foreach ($users as $user) {
    if (!$user['active']) {
        continue;
    }

    sendEmail($user);
}
```

Scenario:

```php
foreach ($invoices as $invoice) {
    if ($invoice['status'] === 'cancelled') {
        continue;
    }

    processInvoice($invoice);
}
```

---

# 18. Strings

## Single quotes

```php
$name = 'Ali';
```

## Double quotes

Double quotes allow variable interpolation:

```php
$name = 'Ali';

echo "Hello $name";
```

Output:

```text
Hello Ali
```

## Concatenation

PHP uses `.`:

```php
$fullName = $firstName . ' ' . $lastName;
```

## Common string functions

```php
strlen($text);
trim($text);
strtolower($text);
strtoupper($text);
ucfirst($text);
ucwords($text);
str_contains($text, 'invoice');
str_starts_with($text, 'INV');
str_ends_with($text, '.pdf');
str_replace('old', 'new', $text);
substr($text, 0, 10);
explode(',', $text);
implode(',', $items);
```

Scenario: clean a vendor name.

```php
$vendorName = "  ACME INDUSTRIES LTD  ";

$vendorName = trim($vendorName);
$vendorName = strtolower($vendorName);

echo $vendorName;
```

---

# 19. Arrays

PHP arrays can act as:

- indexed lists
- associative maps
- nested data structures

## Indexed array

```php
$colors = ['red', 'green', 'blue'];
```

Access:

```php
echo $colors[0];
```

## Associative array

```php
$user = [
    'name' => 'Sara',
    'email' => 'sara@example.com',
    'active' => true,
];
```

Access:

```php
echo $user['email'];
```

## Nested array

```php
$order = [
    'id' => 1001,
    'customer' => [
        'name' => 'Ali',
        'email' => 'ali@example.com',
    ],
    'items' => [
        ['name' => 'Keyboard', 'qty' => 1],
        ['name' => 'Mouse', 'qty' => 2],
    ],
];
```

Access:

```php
echo $order['customer']['name'];
echo $order['items'][0]['name'];
```

---

# 20. Array Functions

PHP has many powerful array functions.

## count

```php
count($users);
```

## in_array

```php
if (in_array('admin', $roles, true)) {
    echo 'Allowed';
}
```

Use strict mode when appropriate:

```php
in_array($needle, $haystack, true);
```

## array_key_exists

```php
if (array_key_exists('email', $user)) {
    // key exists
}
```

## isset vs array_key_exists

```php
$user = ['middle_name' => null];

isset($user['middle_name']);            // false
array_key_exists('middle_name', $user); // true
```

## array_map

Transform values.

```php
$numbers = [1, 2, 3];

$squared = array_map(
    fn ($number) => $number * $number,
    $numbers
);
```

## array_filter

```php
$activeUsers = array_filter(
    $users,
    fn ($user) => $user['active'] === true
);
```

## array_reduce

```php
$total = array_reduce(
    $items,
    fn ($sum, $item) => $sum + $item['amount'],
    0
);
```

## array_column

```php
$emails = array_column($users, 'email');
```

## array_merge

```php
$result = array_merge($defaults, $custom);
```

## array_unique

```php
$unique = array_unique($values);
```

## sort vs asort vs ksort

```php
sort($values);   // reindexes
asort($values);  // preserves keys
ksort($values);  // sorts by keys
```

---

# 21. Destructuring and Spread Operator

Destructuring:

```php
[$name, $email] = ['Ali', 'ali@example.com'];
```

Associative destructuring:

```php
['name' => $name, 'email' => $email] = $user;
```

Spread:

```php
$first = [1, 2];
$second = [3, 4];

$combined = [...$first, ...$second];
```

Useful when composing configuration:

```php
$config = [
    ...$defaultConfig,
    ...$environmentConfig,
];
```

---

# 22. Functions

Functions package reusable behavior.

```php
function greet(): void
{
    echo "Hello";
}
```

With arguments:

```php
function greetUser(string $name): string
{
    return "Hello, $name";
}
```

Usage:

```php
$message = greetUser('Sara');
```

Good functions normally:

- do one clear job
- have meaningful names
- avoid hidden side effects
- are reasonably small
- validate important assumptions

Bad:

```php
function doStuff($x)
{
    // 200 lines doing unrelated work
}
```

Better:

```php
validateInvoice();
calculateInvoiceTotals();
saveInvoice();
sendApprovalNotification();
```

---

# 23. Function Parameters

```php
function calculateTax(float $amount, float $rate): float
{
    return $amount * $rate / 100;
}
```

Default values:

```php
function greet(string $name = 'Guest'): string
{
    return "Hello $name";
}
```

Variadic:

```php
function total(float ...$amounts): float
{
    return array_sum($amounts);
}

echo total(10, 20, 30);
```

Pass by reference:

```php
function increment(int &$value): void
{
    $value++;
}
```

Use references sparingly because they make data flow harder to reason about.

---

# 24. Return Types

```php
function getUserName(): string
{
    return 'Ali';
}
```

Void:

```php
function logMessage(string $message): void
{
    echo $message;
}
```

Never:

```php
function fail(string $message): never
{
    throw new RuntimeException($message);
}
```

Nullable:

```php
function findUser(int $id): ?User
{
    // User or null
}
```

---

# 25. Named Arguments

```php
function createUser(
    string $name,
    string $email,
    bool $active = true
): array {
    return compact('name', 'email', 'active');
}
```

Call:

```php
$user = createUser(
    email: 'ali@example.com',
    name: 'Ali',
    active: false
);
```

Named arguments are useful when a function has several optional or similarly typed parameters.

Be cautious when using them with third-party libraries because parameter names become part of how your code calls the library.

---

# 26. Anonymous Functions and Closures

Anonymous function:

```php
$greet = function (string $name): string {
    return "Hello $name";
};

echo $greet('Ali');
```

Closure capturing external data:

```php
$taxRate = 18;

$calculateTax = function (float $amount) use ($taxRate): float {
    return $amount * $taxRate / 100;
};
```

Closures are common in:

- array functions
- route handlers
- event systems
- callbacks
- collection pipelines

---

# 27. Arrow Functions

Short closure syntax:

```php
$taxRate = 18;

$tax = fn (float $amount): float => $amount * $taxRate / 100;
```

Useful for:

```php
$names = array_map(
    fn ($user) => $user['name'],
    $users
);
```

Use regular closures when logic requires multiple statements.

---

# 28. Variable Scope

Global:

```php
$name = 'Ali';
```

Function-local:

```php
function example(): void
{
    $name = 'Sara';
}
```

A function does not automatically receive global variables.

Possible but usually discouraged:

```php
$name = 'Ali';

function sayHello(): void
{
    global $name;

    echo $name;
}
```

Better:

```php
function sayHello(string $name): void
{
    echo $name;
}
```

Explicit dependencies make code easier to test.

---

# 29. References

Normal assignment:

```php
$a = 10;
$b = $a;

$b = 20;

echo $a; // 10
```

Reference:

```php
$a = 10;
$b =& $a;

$b = 20;

echo $a; // 20
```

References can be useful but frequently create surprising coupling.

Avoid using them unless you have a clear reason.

---

# 30. include, require, include_once, require_once

```php
include 'header.php';
```

If `include` fails, PHP generally emits a warning and execution may continue.

```php
require 'config.php';
```

If `require` fails, execution cannot continue normally.

`*_once` prevents loading the same file multiple times:

```php
require_once 'helpers.php';
```

Modern applications typically rely more on Composer autoloading than manually requiring class files.

---

# 31. Useful Built-in Functions

Debug:

```php
var_dump($value);
print_r($array);
```

Existence:

```php
isset($value);
empty($value);
```

Math:

```php
round(10.567, 2);
ceil(10.1);
floor(10.9);
min(1, 2, 3);
max(1, 2, 3);
```

Numbers:

```php
is_numeric($value);
number_format(1234567.89, 2);
```

Random:

```php
random_int(1, 100);
random_bytes(32);
```

Use cryptographically secure random functions for security-sensitive values.

---

# 32. Date and Time

Basic:

```php
echo date('Y-m-d H:i:s');
```

Object-oriented API:

```php
$date = new DateTimeImmutable();

echo $date->format('Y-m-d');
```

Add one month:

```php
$nextMonth = $date->modify('+1 month');
```

Timezone:

```php
$timezone = new DateTimeZone('Asia/Kolkata');

$date = new DateTimeImmutable('now', $timezone);
```

Difference:

```php
$start = new DateTimeImmutable('2026-01-01');
$end = new DateTimeImmutable('2026-02-15');

$diff = $start->diff($end);

echo $diff->days;
```

Prefer `DateTimeImmutable` in business logic because it avoids accidental mutation.

---

# 33. Regular Expressions

Use `preg_match`.

```php
$email = 'user@example.com';

if (preg_match('/^[^@\s]+@[^@\s]+\.[^@\s]+$/', $email)) {
    echo 'Pattern matched';
}
```

However, for email validation use:

```php
filter_var($email, FILTER_VALIDATE_EMAIL);
```

Regex use cases:

- invoice number patterns
- extracting document identifiers
- validating custom formats
- replacing repeated whitespace
- parsing structured strings

Example:

```php
$text = 'Invoice No: INV-2026-00123';

preg_match('/INV-\d{4}-\d+/', $text, $matches);

print_r($matches);
```

Regex is powerful, but don't use it when simpler string functions are clearer.

---

# 34. JSON

Encode:

```php
$data = [
    'invoice_no' => 'INV-1001',
    'amount' => 1250.50,
];

$json = json_encode($data, JSON_PRETTY_PRINT);

echo $json;
```

Decode to associative array:

```php
$data = json_decode($json, true);
```

Modern exception-based handling:

```php
try {
    $data = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    // invalid JSON
}
```

Encode with exceptions:

```php
$json = json_encode(
    $data,
    JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT
);
```

---

# 35. Files and Directories

Read entire file:

```php
$content = file_get_contents('data.txt');
```

Write:

```php
file_put_contents('output.txt', 'Hello');
```

Append:

```php
file_put_contents(
    'app.log',
    "Started\n",
    FILE_APPEND
);
```

Check:

```php
file_exists('data.txt');
is_file('data.txt');
is_dir('storage');
```

Create directory:

```php
if (!is_dir('storage')) {
    mkdir('storage', 0775, true);
}
```

Delete file:

```php
unlink('temporary.txt');
```

Never blindly use a filename coming from a user.

---

# 36. Superglobals

PHP has predefined variables available across scopes.

Important ones:

```text
$_GET
$_POST
$_SERVER
$_FILES
$_COOKIE
$_SESSION
$_ENV
$_REQUEST
$GLOBALS
```

Examples:

```php
$id = $_GET['id'] ?? null;
$email = $_POST['email'] ?? null;
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
```

Do not directly trust values from superglobals.

Treat them as untrusted input.

---

# 37. Handling Forms

HTML:

```html
<form method="POST" action="save-user.php">
    <input type="text" name="name">
    <input type="email" name="email">
    <button type="submit">Save</button>
</form>
```

PHP:

```php
<?php

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');

if ($name === '') {
    die('Name is required');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email');
}
```

Important sequence:

```text
Receive
  ↓
Normalize
  ↓
Validate
  ↓
Authorize
  ↓
Process
  ↓
Persist
  ↓
Respond
```

---

# 38. GET vs POST

Use GET for retrieving information.

Example:

```text
/products.php?page=2
```

Use POST for actions that create or modify server state.

Example:

```text
POST /users
```

GET data appears in the URL.

POST body does not normally appear in the URL, but this does **not** make it automatically secure. Use HTTPS.

REST convention:

```text
GET     /users
GET     /users/10
POST    /users
PUT     /users/10
PATCH   /users/10
DELETE  /users/10
```

---

# 39. Cookies

Set:

```php
setcookie(
    'theme',
    'dark',
    [
        'expires' => time() + 86400 * 30,
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]
);
```

Read:

```php
$theme = $_COOKIE['theme'] ?? 'light';
```

Cookies are stored on the client.

Do not store sensitive plain-text information such as passwords inside cookies.

---

# 40. Sessions

Start:

```php
session_start();
```

Set:

```php
$_SESSION['user_id'] = 1001;
```

Read:

```php
$userId = $_SESSION['user_id'] ?? null;
```

Remove:

```php
unset($_SESSION['user_id']);
```

Destroy:

```php
session_destroy();
```

After successful login, regenerate the session ID:

```php
session_regenerate_id(true);
```

Scenario:

```php
if (!isset($_SESSION['user_id'])) {
    header('Location: /login.php');
    exit;
}
```

---

# 41. File Uploads

HTML:

```html
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="invoice">
    <button type="submit">Upload</button>
</form>
```

PHP:

```php
$file = $_FILES['invoice'] ?? null;

if (!$file) {
    die('No file received');
}
```

Never trust:

```php
$file['name']
$file['type']
```

Validate:

- upload error
- actual MIME type
- size
- extension policy
- destination
- generated filename
- malware controls when needed

Generate your own filename:

```php
$filename = bin2hex(random_bytes(16)) . '.pdf';
```

---

# 42. HTTP Headers and Redirects

Redirect:

```php
header('Location: /dashboard.php');
exit;
```

JSON:

```php
header('Content-Type: application/json');

echo json_encode(['success' => true]);
```

Status code:

```php
http_response_code(404);
```

Download:

```php
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="invoice.pdf"');
```

Headers must normally be sent before output.

---

# 43. Error Handling

Development settings can expose errors:

```php
error_reporting(E_ALL);
ini_set('display_errors', '1');
```

Do not expose detailed internal errors in production.

Production should usually:

- log technical details
- return safe user messages
- include request/correlation IDs where appropriate

Example:

```php
try {
    processPayment();
} catch (Throwable $e) {
    error_log($e->getMessage());

    echo 'Unable to process your request.';
}
```

---

# 44. Exceptions

Throw:

```php
throw new RuntimeException('Invoice not found');
```

Catch:

```php
try {
    loadInvoice(1001);
} catch (RuntimeException $e) {
    echo $e->getMessage();
}
```

Finally:

```php
try {
    $connection = openConnection();
} finally {
    closeConnection();
}
```

Catch multiple:

```php
try {
    // ...
} catch (ValidationException | DomainException $e) {
    // ...
}
```

---

# 45. Custom Exceptions

```php
class InvoiceNotFoundException extends RuntimeException
{
}
```

Usage:

```php
function getInvoice(int $id): array
{
    $invoice = null;

    if ($invoice === null) {
        throw new InvoiceNotFoundException(
            "Invoice $id not found"
        );
    }

    return $invoice;
}
```

Custom exceptions help express business meaning.

---

# 46. Object-Oriented Programming

OOP models behavior using objects.

Think about a real invoice:

```text
Invoice
 ├── invoice number
 ├── vendor
 ├── amount
 ├── status
 ├── approve()
 ├── reject()
 └── calculateTotal()
```

In PHP:

```php
final class Invoice
{
    public function __construct(
        private string $number,
        private float $amount
    ) {
    }

    public function getAmount(): float
    {
        return $this->amount;
    }
}
```

OOP becomes especially useful when applications grow beyond a few scripts.

---

# 47. Classes and Objects

Class:

```php
class User
{
    public string $name;
}
```

Object:

```php
$user = new User();
$user->name = 'Ali';

echo $user->name;
```

Think of a class as a blueprint and an object as one concrete instance.

---

# 48. Properties and Methods

```php
class BankAccount
{
    private float $balance = 0;

    public function deposit(float $amount): void
    {
        if ($amount <= 0) {
            throw new InvalidArgumentException(
                'Amount must be positive'
            );
        }

        $this->balance += $amount;
    }

    public function getBalance(): float
    {
        return $this->balance;
    }
}
```

This protects invariants.

The caller cannot directly do:

```php
$account->balance = -999999;
```

because the property is private.

---

# 49. Constructors and Destructors

Constructor:

```php
class User
{
    public function __construct(
        public string $name,
        public string $email
    ) {
    }
}
```

Usage:

```php
$user = new User(
    'Sara',
    'sara@example.com'
);
```

Destructor:

```php
public function __destruct()
{
    // cleanup
}
```

Destructors exist, but explicit resource management is often easier to reason about.

---

# 50. Visibility

`public`

Accessible from anywhere.

`protected`

Accessible inside the class and child classes.

`private`

Accessible only inside the declaring class.

Example:

```php
class Employee
{
    public string $name;
    protected float $salary;
    private string $passwordHash;
}
```

Prefer the smallest visibility needed.

---

# 51. Inheritance

```php
class Employee
{
    public function work(): string
    {
        return 'Working';
    }
}

class Developer extends Employee
{
    public function code(): string
    {
        return 'Writing code';
    }
}
```

Use inheritance for a true **is-a** relationship.

Avoid inheritance simply to reuse a few lines of code. Composition is often safer.

---

# 52. Method Overriding

```php
class Notification
{
    public function send(): string
    {
        return 'Generic notification';
    }
}

class EmailNotification extends Notification
{
    public function send(): string
    {
        return 'Email sent';
    }
}
```

A child class replaces inherited behavior.

---

# 53. Abstract Classes

```php
abstract class PaymentGateway
{
    abstract public function pay(float $amount): bool;

    public function validateAmount(float $amount): void
    {
        if ($amount <= 0) {
            throw new InvalidArgumentException();
        }
    }
}
```

Child:

```php
class StripeGateway extends PaymentGateway
{
    public function pay(float $amount): bool
    {
        $this->validateAmount($amount);

        return true;
    }
}
```

Use abstract classes when related implementations share both contract and implementation.

---

# 54. Interfaces

```php
interface Logger
{
    public function log(string $message): void;
}
```

Implementation:

```php
class FileLogger implements Logger
{
    public function log(string $message): void
    {
        file_put_contents(
            'app.log',
            $message . PHP_EOL,
            FILE_APPEND
        );
    }
}
```

Interface advantages:

```text
High-level code depends on behavior
instead of one specific implementation.
```

That enables testing and substitution.

---

# 55. Traits

Trait:

```php
trait HasTimestamps
{
    public function currentTimestamp(): string
    {
        return date('Y-m-d H:i:s');
    }
}
```

Use:

```php
class Invoice
{
    use HasTimestamps;
}
```

Traits provide code reuse across unrelated classes.

Avoid building huge traits that hide major dependencies.

---

# 56. Static Members

```php
class MathHelper
{
    public static function percentage(
        float $amount,
        float $rate
    ): float {
        return $amount * $rate / 100;
    }
}
```

Call:

```php
$tax = MathHelper::percentage(1000, 18);
```

Statics are useful for:

- pure helpers
- factories
- constants
- stateless utilities

Overuse can make dependency management and testing harder.

---

# 57. Class Constants

```php
final class Role
{
    public const ADMIN = 'admin';
    public const USER = 'user';
}
```

Usage:

```php
if ($role === Role::ADMIN) {
    // ...
}
```

Modern applications may use enums instead when the value set is a real domain type.

---

# 58. final Keyword

Prevent inheritance:

```php
final class InvoiceService
{
}
```

Prevent overriding:

```php
class BaseService
{
    final public function validate(): void
    {
    }
}
```

`final` can make domain behavior more predictable.

---

# 59. Late Static Binding

`self::` resolves relative to the class where the method is defined.

`static::` supports late static binding.

Example:

```php
class BaseModel
{
    protected static string $table = 'base';

    public static function table(): string
    {
        return static::$table;
    }
}

class User extends BaseModel
{
    protected static string $table = 'users';
}

echo User::table();
```

Output:

```text
users
```

Useful in inheritance-based framework internals, although composition is often preferable in your own domain code.

---

# 60. Magic Methods

Common magic methods:

```text
__construct()
__destruct()
__get()
__set()
__isset()
__unset()
__call()
__callStatic()
__toString()
__invoke()
__clone()
__serialize()
__unserialize()
```

Example:

```php
class Money
{
    public function __construct(
        private float $amount
    ) {
    }

    public function __toString(): string
    {
        return number_format($this->amount, 2);
    }
}
```

Magic methods are powerful but can hide behavior. Use them intentionally.

---

# 61. Object Cloning

```php
$copy = clone $original;
```

Customize:

```php
public function __clone()
{
    $this->id = null;
}
```

Scenario:

Duplicate an invoice template without copying its database identity.

---

# 62. Anonymous Classes

```php
$logger = new class implements Logger {
    public function log(string $message): void
    {
        echo $message;
    }
};
```

Useful for:

- tiny implementations
- tests
- one-off adapters

Do not replace normal named classes when the behavior has domain meaning.

---

# 63. Namespaces

Namespace prevents class-name collisions.

```php
namespace App\Services;

class InvoiceService
{
}
```

Another class:

```php
namespace App\Controllers;

use App\Services\InvoiceService;

class InvoiceController
{
}
```

Folder layout commonly mirrors namespaces:

```text
src/
└── Services/
    └── InvoiceService.php
```

---

# 64. Autoloading

Without autoloading:

```php
require_once 'User.php';
require_once 'Invoice.php';
require_once 'Payment.php';
```

This becomes hard to maintain.

Composer can autoload classes automatically.

Example `composer.json`:

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

Then:

```bash
composer dump-autoload
```

Bootstrap:

```php
require __DIR__ . '/vendor/autoload.php';
```

Now:

```php
use App\Services\InvoiceService;
```

---

# 65. Composer

Composer is PHP's dependency manager.

Initialize:

```bash
composer init
```

Install package:

```bash
composer require monolog/monolog
```

Development package:

```bash
composer require --dev phpunit/phpunit
```

Install existing project's dependencies:

```bash
composer install
```

Update dependencies:

```bash
composer update
```

Important files:

```text
composer.json
composer.lock
vendor/
```

Commit:

```text
composer.json
composer.lock
```

Normally do not commit:

```text
vendor/
```

unless a specific deployment strategy requires it.

`composer.lock` helps different environments install consistent versions.

---

# 66. Enums

Enums model a fixed set of valid values.

```php
enum InvoiceStatus: string
{
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';
}
```

Usage:

```php
$status = InvoiceStatus::Pending;
```

Value:

```php
echo $status->value;
```

Convert safely:

```php
$status = InvoiceStatus::tryFrom($input);

if ($status === null) {
    throw new InvalidArgumentException(
        'Invalid invoice status'
    );
}
```

Enums are preferable to scattered status strings.

---

# 67. Attributes

Attributes add structured metadata.

Example:

```php
#[Attribute]
class Route
{
    public function __construct(
        public string $path
    ) {
    }
}
```

Usage:

```php
class UserController
{
    #[Route('/users')]
    public function index(): void
    {
    }
}
```

Frameworks can inspect attributes using reflection.

Common use cases:

- routes
- validation metadata
- serialization rules
- dependency injection metadata
- ORM mapping

---

# 68. Readonly Data

Readonly properties help model values that should not change after initialization.

```php
final class InvoiceNumber
{
    public function __construct(
        public readonly string $value
    ) {
    }
}
```

Attempting to reassign the property after initialization is not allowed.

Use readonly data for:

- IDs
- immutable DTO values
- value objects
- configuration snapshots

Modern PHP versions also provide additional readonly-related class features.

---

# 69. Union, Intersection and Nullable Types

Union:

```php
function normalizeId(int|string $id): string
{
    return (string) $id;
}
```

Nullable:

```php
function findEmail(): ?string
{
    return null;
}
```

Equivalent idea:

```php
string|null
```

Intersection:

```php
function process(
    Countable&Iterator $items
): void {
}
```

Use types to make contracts explicit.

Avoid huge unions such as:

```php
string|int|float|array|object|null
```

That often means your design is unclear.

---

# 70. Generators

A generator yields values one at a time.

```php
function numbers(): Generator
{
    for ($i = 1; $i <= 1000000; $i++) {
        yield $i;
    }
}
```

Usage:

```php
foreach (numbers() as $number) {
    // process
}
```

Why useful?

Normal:

```php
$rows = loadOneMillionRows();
```

may require large memory.

Generator:

```text
Read one row
Process one row
Yield next row
```

Scenario:

- processing large CSV files
- streaming database records
- ETL pipelines
- large report exports

---

# 71. Iterators and Iterables

A function accepting anything iterable:

```php
function printItems(iterable $items): void
{
    foreach ($items as $item) {
        echo $item;
    }
}
```

Accepts arrays and iterator-like objects.

Custom iteration is available through interfaces such as:

```text
Iterator
IteratorAggregate
Traversable
```

You normally encounter these in:

- collections
- framework internals
- database iterators
- lazy processing

---

# 72. Fibers and Concurrency Concepts

A Fiber allows cooperative execution to suspend and resume.

It is mainly relevant to:

- async frameworks
- event loops
- concurrency libraries

Most normal PHP business applications do not directly need Fibers.

Important distinction:

```text
Concurrency != Parallelism
```

Traditional PHP web execution is request-oriented, but modern runtimes and libraries can support long-running workers, event loops, and concurrent I/O.

Learn Fibers after mastering normal request/response PHP.

---

# 73. Database Fundamentals

Most PHP systems use databases such as:

- MySQL
- MariaDB
- PostgreSQL
- SQL Server
- SQLite

Basic concepts:

```text
Table
Row
Column
Primary key
Foreign key
Index
Constraint
Transaction
Join
Normalization
```

Example tables:

```text
users
invoices
invoice_items
vendors
payments
```

Relationship:

```text
invoice 1 ──── * invoice_items
```

Do not store line items in a single comma-separated column.

---

# 74. PDO

PDO provides a consistent database interface.

Connection:

```php
$pdo = new PDO(
    'mysql:host=localhost;dbname=app;charset=utf8mb4',
    'app_user',
    'secret',
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
);
```

Query:

```php
$stmt = $pdo->query(
    'SELECT id, name, email FROM users'
);

$users = $stmt->fetchAll();
```

Use a dedicated low-privilege database user in production.

---

# 75. Prepared Statements

Never concatenate untrusted values into SQL.

Bad:

```php
$sql = "SELECT * FROM users WHERE email = '$email'";
```

Good:

```php
$stmt = $pdo->prepare(
    'SELECT * FROM users WHERE email = :email'
);

$stmt->execute([
    'email' => $email,
]);

$user = $stmt->fetch();
```

Insert:

```php
$stmt = $pdo->prepare(
    'INSERT INTO users (name, email)
     VALUES (:name, :email)'
);

$stmt->execute([
    'name' => $name,
    'email' => $email,
]);
```

Prepared statements are fundamental to SQL injection prevention.

---

# 76. Transactions

A transaction makes multiple database operations act as one logical unit.

Scenario:

Transfer ₹1000 from Account A to Account B.

Operations:

```text
1. Deduct from A
2. Add to B
```

You cannot allow only step 1 to succeed.

PHP:

```php
try {
    $pdo->beginTransaction();

    debitAccount($pdo, $fromId, 1000);
    creditAccount($pdo, $toId, 1000);

    $pdo->commit();
} catch (Throwable $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }

    throw $e;
}
```

Use transactions for multi-step data consistency.

---

# 77. Database Design for PHP Developers

## Primary key

```sql
id BIGINT PRIMARY KEY
```

## Foreign key

```sql
invoice_id BIGINT
```

references invoice.

## Index

Use indexes for columns frequently used in:

- `WHERE`
- `JOIN`
- sorting
- uniqueness checks

But too many indexes slow writes and consume storage.

## Correct data type

Money:

Prefer an exact decimal type:

```sql
DECIMAL(15, 2)
```

Avoid floating-point types for important financial amounts.

Dates:

```sql
DATE
DATETIME
TIMESTAMP
```

Boolean:

Often stored as a small integer or database-specific boolean type.

## Normalization

Bad:

```text
invoice:
item1, qty1, item2, qty2, item3, qty3
```

Better:

```text
invoices
invoice_items
```

---

# 78. CRUD Application Example

CRUD:

```text
Create
Read
Update
Delete
```

## Create

```php
$stmt = $pdo->prepare(
    'INSERT INTO products (name, price)
     VALUES (:name, :price)'
);

$stmt->execute([
    'name' => $name,
    'price' => $price,
]);
```

## Read

```php
$stmt = $pdo->prepare(
    'SELECT id, name, price
     FROM products
     WHERE id = :id'
);

$stmt->execute(['id' => $id]);

$product = $stmt->fetch();
```

## Update

```php
$stmt = $pdo->prepare(
    'UPDATE products
     SET name = :name, price = :price
     WHERE id = :id'
);

$stmt->execute([
    'id' => $id,
    'name' => $name,
    'price' => $price,
]);
```

## Delete

```php
$stmt = $pdo->prepare(
    'DELETE FROM products WHERE id = :id'
);

$stmt->execute(['id' => $id]);
```

Before update/delete, verify that the current user is authorized.

---

# 79. Authentication Fundamentals

Authentication asks:

> Who are you?

Typical login flow:

```text
User submits email/password
        ↓
Find user by email
        ↓
Verify password hash
        ↓
Regenerate session ID
        ↓
Store authenticated user ID
        ↓
Redirect to dashboard
```

Do not store plain-text passwords.

Do not compare passwords directly to database values unless the stored value is a proper password hash verified by PHP's password API.

---

# 80. Password Hashing

Create hash:

```php
$hash = password_hash(
    $password,
    PASSWORD_DEFAULT
);
```

Verify:

```php
if (password_verify($password, $hash)) {
    echo 'Password correct';
}
```

Check whether hash should be upgraded:

```php
if (password_needs_rehash($hash, PASSWORD_DEFAULT)) {
    $newHash = password_hash(
        $password,
        PASSWORD_DEFAULT
    );
}
```

Do not invent your own password hashing algorithm.

---

# 81. Authorization and Roles

Authorization asks:

> What are you allowed to do?

Example roles:

```text
User
Manager
Finance
Admin
```

Naive:

```php
if ($_SESSION['role'] === 'admin') {
    deleteUser();
}
```

Better applications centralize authorization:

```php
$authorization->requirePermission(
    $user,
    'user.delete'
);
```

Do not rely only on hiding frontend buttons.

Backend must enforce permissions.

---

# 82. Security Fundamentals

Treat security as part of application design.

Major topics:

- SQL injection
- XSS
- CSRF
- broken access control
- insecure direct object references
- session fixation
- session hijacking
- weak password storage
- unsafe file uploads
- directory traversal
- secret leakage
- insecure deserialization
- SSRF
- command injection
- dependency vulnerabilities

Core rule:

```text
Never trust client input.
```

Client includes:

- browser
- JavaScript
- mobile app
- request headers
- cookies
- uploaded files
- URL
- API body

---

# 83. SQL Injection

Vulnerable:

```php
$sql = "
    SELECT *
    FROM users
    WHERE email = '$email'
";
```

Attacker-controlled input may modify query meaning.

Safe:

```php
$stmt = $pdo->prepare(
    'SELECT * FROM users WHERE email = :email'
);

$stmt->execute([
    'email' => $email,
]);
```

Prepared statements are necessary, but also:

- use least privilege DB accounts
- validate data
- don't dynamically concatenate arbitrary table/column names from user input

---

# 84. Cross-Site Scripting

Suppose:

```php
echo $_GET['name'];
```

An attacker may submit HTML/JavaScript.

For HTML text output:

```php
echo htmlspecialchars(
    $name,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);
```

Important principle:

```text
Escape for the output context.
```

HTML context, JavaScript context, URL context, CSS context, and attributes are different contexts.

Templating engines often provide automatic escaping—understand when it applies.

---

# 85. CSRF

CSRF tricks an authenticated browser into sending an unwanted request.

Protect state-changing forms using CSRF tokens.

Generate:

```php
$_SESSION['csrf_token'] ??= bin2hex(
    random_bytes(32)
);
```

Form:

```html
<input
    type="hidden"
    name="csrf_token"
    value="<?= htmlspecialchars($_SESSION['csrf_token']) ?>"
>
```

Validate:

```php
if (
    !isset($_POST['csrf_token']) ||
    !hash_equals(
        $_SESSION['csrf_token'],
        $_POST['csrf_token']
    )
) {
    http_response_code(403);
    exit('Invalid CSRF token');
}
```

Frameworks normally provide CSRF protection; use their implementation where applicable.

---

# 86. Session Security

Important measures:

- HTTPS
- secure cookies
- HttpOnly cookies
- SameSite configuration
- regenerate session ID after authentication
- idle timeout
- absolute timeout where appropriate
- server-side authorization
- logout invalidation

Example:

```php
session_regenerate_id(true);
```

Do not place sensitive information in URLs.

---

# 87. File Upload Security

Never do:

```php
move_uploaded_file(
    $_FILES['file']['tmp_name'],
    'uploads/' . $_FILES['file']['name']
);
```

Safer approach:

1. check upload error
2. check size
3. inspect real MIME type
4. allow only required types
5. generate random filename
6. store outside executable web path where possible
7. apply malware scanning if required
8. never execute uploaded data
9. validate file content when practical

Example MIME detection:

```php
$finfo = new finfo(FILEINFO_MIME_TYPE);

$mime = $finfo->file(
    $_FILES['file']['tmp_name']
);
```

---

# 88. Input Validation and Sanitization

Validation:

> Is this value acceptable?

Example:

```php
$email = filter_var(
    $input,
    FILTER_VALIDATE_EMAIL
);

if ($email === false) {
    throw new InvalidArgumentException(
        'Invalid email'
    );
}
```

Sanitization:

> Transform data into another form.

Do not confuse validation and output escaping.

Example:

```text
Validation prevents invalid email.
Escaping prevents HTML injection.
Prepared statement protects SQL context.
```

Each solves a different problem.

---

# 89. Environment Variables and Secrets

Do not write:

```php
$dbPassword = 'ProductionPassword123';
```

inside committed source code.

Prefer environment configuration:

```text
DB_HOST=localhost
DB_NAME=app
DB_USER=app_user
DB_PASSWORD=secret
```

Read:

```php
$password = getenv('DB_PASSWORD');
```

Common approach:

```text
.env
```

During development, libraries may load `.env` files.

Do not commit production secrets.

Use a secret manager for serious production environments.

---

# 90. Building REST APIs

Example endpoint:

```text
GET /api/invoices/1001
```

Response:

```json
{
  "data": {
    "id": 1001,
    "number": "INV-1001",
    "status": "approved"
  }
}
```

PHP:

```php
header('Content-Type: application/json');

echo json_encode(
    [
        'data' => [
            'id' => 1001,
            'number' => 'INV-1001',
        ],
    ],
    JSON_THROW_ON_ERROR
);
```

A good API separates:

```text
Transport
Validation
Authorization
Business logic
Persistence
Serialization
```

---

# 91. HTTP Methods and Status Codes

Common methods:

```text
GET     Read
POST    Create/action
PUT     Replace
PATCH   Partial update
DELETE  Delete
```

Common status codes:

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
503 Service Unavailable
```

Difference:

```text
401 = authentication missing/invalid
403 = authenticated but not allowed
```

---

# 92. API Validation

Input:

```json
{
  "email": "bad-email",
  "age": -5
}
```

Response:

```json
{
  "error": "validation_failed",
  "fields": {
    "email": ["Must be a valid email address"],
    "age": ["Must be at least 0"]
  }
}
```

Do not silently accept malformed data.

Validation should occur before business operations.

---

# 93. API Error Responses

Avoid sending stack traces to clients.

Bad:

```json
{
  "error": "SQLSTATE[23000] table users..."
}
```

Better:

```json
{
  "error": "duplicate_email",
  "message": "An account with this email already exists."
}
```

Internally log:

- stack trace
- request ID
- user ID when safe
- relevant context

Avoid logging secrets.

---

# 94. API Authentication

Common approaches:

- server session cookies
- API keys
- OAuth 2.0 / OpenID Connect
- signed tokens
- personal access tokens

Do not invent cryptographic token formats.

For enterprise SSO, commonly rely on established identity protocols and libraries.

Always use HTTPS.

Token storage decisions depend on client architecture and threat model.

---

# 95. cURL and Calling External APIs

Basic GET:

```php
$ch = curl_init(
    'https://api.example.com/users'
);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);

$response = curl_exec($ch);

if ($response === false) {
    throw new RuntimeException(
        curl_error($ch)
    );
}

curl_close($ch);
```

POST JSON:

```php
$payload = json_encode(
    ['name' => 'Ali'],
    JSON_THROW_ON_ERROR
);

$ch = curl_init(
    'https://api.example.com/users'
);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Accept: application/json',
    ],
]);
```

Production clients should consider:

- connect timeout
- request timeout
- retries for appropriate failures
- idempotency
- TLS verification
- rate limits
- observability

---

# 96. Dependency Injection

Bad:

```php
class InvoiceService
{
    public function process(): void
    {
        $logger = new FileLogger();
        $mailer = new Mailer();
    }
}
```

The class creates its own dependencies.

Better:

```php
class InvoiceService
{
    public function __construct(
        private Logger $logger,
        private Mailer $mailer
    ) {
    }
}
```

Usage:

```php
$service = new InvoiceService(
    $logger,
    $mailer
);
```

Benefits:

- testability
- substitution
- clearer dependencies
- lower coupling

---

# 97. SOLID Principles

## S — Single Responsibility

A class should have one coherent reason to change.

Bad:

```text
InvoiceService:
- parse PDF
- calculate tax
- save database
- send email
- generate Excel
- authenticate user
```

Better split responsibilities.

## O — Open/Closed

Code should allow new behavior without constantly modifying stable core logic.

Example: define a payment interface and add new gateway implementations.

## L — Liskov Substitution

A subtype should behave compatibly with its parent contract.

## I — Interface Segregation

Prefer small focused interfaces.

Bad:

```php
interface Worker
{
    public function work();
    public function eat();
    public function fly();
    public function swim();
}
```

## D — Dependency Inversion

High-level business logic should depend on abstractions rather than concrete infrastructure.

---

# 98. Common Design Patterns

## Factory

Centralizes object creation.

```php
final class LoggerFactory
{
    public static function create(string $type): Logger
    {
        return match ($type) {
            'file' => new FileLogger(),
            default => throw new InvalidArgumentException(),
        };
    }
}
```

## Strategy

Swap business algorithms.

```php
interface DiscountStrategy
{
    public function calculate(float $amount): float;
}
```

Possible implementations:

```text
RegularDiscount
FestivalDiscount
VIPDiscount
```

## Repository

Encapsulates data access.

```php
interface UserRepository
{
    public function findById(int $id): ?User;
}
```

## Adapter

Converts one interface into another expected interface.

Useful for third-party integrations.

## Observer / Event pattern

One event can trigger multiple independent reactions.

```text
InvoiceApproved
 ├── Send email
 ├── Write audit log
 └── Queue ERP posting
```

## Decorator

Adds behavior around another implementation.

Example:

```text
CachingUserRepository
   wraps
DatabaseUserRepository
```

Do not use patterns merely to look advanced. Use them when they solve a real design problem.

---

# 99. MVC Architecture

MVC:

```text
Model
View
Controller
```

Request:

```text
Browser
  ↓
Router
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Database
```

Response:

```text
Database
  ↓
Repository
  ↓
Service
  ↓
Controller
  ↓
View/JSON
  ↓
Browser
```

Controller should generally coordinate the request, not contain every business rule.

Bad controller:

```text
400 lines:
validation
SQL
tax calculation
email
PDF
authorization
```

Better:

```php
public function approve(int $id): Response
{
    $this->authorization->require('invoice.approve');

    $this->invoiceService->approve($id);

    return new JsonResponse(['success' => true]);
}
```

---

# 100. Repository and Service Layers

Repository:

```text
How do I load/save data?
```

Service:

```text
What business operation should happen?
```

Example:

```php
interface InvoiceRepository
{
    public function find(int $id): ?Invoice;

    public function save(Invoice $invoice): void;
}
```

Service:

```php
final class ApproveInvoice
{
    public function __construct(
        private InvoiceRepository $invoices
    ) {
    }

    public function execute(int $id): void
    {
        $invoice = $this->invoices->find($id);

        if (!$invoice) {
            throw new InvoiceNotFoundException();
        }

        $invoice->approve();

        $this->invoices->save($invoice);
    }
}
```

---

# 101. DTOs and Value Objects

DTO = Data Transfer Object.

```php
final readonly class CreateUserData
{
    public function __construct(
        public string $name,
        public string $email
    ) {
    }
}
```

Value object represents a domain value.

```php
final class EmailAddress
{
    public function __construct(
        private string $value
    ) {
        if (!filter_var(
            $value,
            FILTER_VALIDATE_EMAIL
        )) {
            throw new InvalidArgumentException(
                'Invalid email'
            );
        }
    }

    public function value(): string
    {
        return $this->value;
    }
}
```

Benefits:

- validation near the data
- stronger business meaning
- less primitive obsession

---

# 102. Clean Code in PHP

Prefer:

```php
$isEligibleForApproval
```

over:

```php
$flag
```

Prefer:

```php
calculateInvoiceTotal()
```

over:

```php
processData()
```

Avoid deep nesting:

```php
if ($user) {
    if ($user->active) {
        if ($user->role === 'admin') {
            // ...
        }
    }
}
```

Use guard clauses:

```php
if (!$user) {
    throw new UserNotFoundException();
}

if (!$user->active) {
    throw new AccountInactiveException();
}

if ($user->role !== 'admin') {
    throw new AuthorizationException();
}

// main logic
```

Also:

- keep functions focused
- use types
- avoid duplicated logic
- avoid global mutable state
- separate I/O from business logic
- remove dead code
- prefer explicitness

---

# 103. PSR Standards

The PHP ecosystem uses PHP-FIG recommendations known as PSRs.

Important areas to learn:

- coding style
- autoloading
- logging interfaces
- HTTP message interfaces
- HTTP server handlers/middleware
- caching interfaces
- container interfaces

Common style example:

```php
final class InvoiceService
{
    public function calculateTotal(
        float $subtotal,
        float $tax
    ): float {
        return $subtotal + $tax;
    }
}
```

Use an automatic formatter or coding-standard tool in professional projects.

---

# 104. Logging

Never debug production by only doing:

```php
echo $error;
```

Use structured logging.

Conceptual example:

```php
$logger->error(
    'Invoice processing failed',
    [
        'invoice_id' => $invoiceId,
        'exception' => $e,
    ]
);
```

Log levels commonly include:

```text
emergency
alert
critical
error
warning
notice
info
debug
```

Do not log:

- passwords
- raw authentication tokens
- unnecessary personal information
- private keys
- complete card data

---

# 105. Configuration Management

Different environments need different configuration.

```text
development
testing
staging
production
```

Examples:

```text
APP_ENV
APP_DEBUG
DB_HOST
DB_PORT
DB_NAME
CACHE_DRIVER
MAIL_HOST
```

Do not use:

```php
if ($_SERVER['HTTP_HOST'] === 'my-laptop') {
    // 100 lines of special config
}
```

Centralize configuration.

Validate required configuration at startup.

---

# 106. Testing

A test verifies expected behavior automatically.

Example idea:

```php
final class TaxCalculatorTest extends TestCase
{
    public function testCalculatesTax(): void
    {
        $calculator = new TaxCalculator();

        $result = $calculator->calculate(
            1000,
            18
        );

        $this->assertSame(180.0, $result);
    }
}
```

Why testing matters:

- prevents regressions
- documents expected behavior
- enables refactoring
- reduces fear of changes
- improves design feedback

---

# 107. Unit, Integration and Feature Tests

## Unit test

Tests one small unit in isolation.

```text
TaxCalculator
DiscountRule
InvoiceStatus
```

## Integration test

Tests components together.

```text
Repository ↔ actual test database
```

## Feature / application test

Tests a user-visible behavior.

```text
POST /api/login
→ 200
→ session created
```

Good systems use several test levels.

Do not attempt to make every test a unit test.

---

# 108. Mocking and Test Doubles

Suppose service sends an email.

You do not want every unit test to send a real email.

Interface:

```php
interface Mailer
{
    public function send(
        string $to,
        string $message
    ): void;
}
```

Test fake:

```php
final class FakeMailer implements Mailer
{
    public array $sent = [];

    public function send(
        string $to,
        string $message
    ): void {
        $this->sent[] = compact(
            'to',
            'message'
        );
    }
}
```

Use mocks carefully.

Too much mocking can test implementation details rather than behavior.

---

# 109. Debugging

Basic tools:

```php
var_dump($value);
print_r($array);
```

Better debugging:

- IDE breakpoints
- Xdebug
- application logs
- database query logging
- request IDs
- profiler
- exception stack traces

Debug systematically:

```text
1. Reproduce
2. Minimize
3. Observe actual data
4. Identify failing boundary
5. Form hypothesis
6. Test hypothesis
7. Fix root cause
8. Add regression test
```

Do not randomly change code until the error disappears.

---

# 110. Xdebug

Xdebug can provide:

- interactive debugging
- stack traces
- breakpoints
- code coverage
- profiling tools

Typical IDE workflow:

```text
Browser request
   ↓
PHP + Xdebug
   ↓
IDE breakpoint
   ↓
Inspect variables
   ↓
Step over / step into
```

Learn to use a debugger once you move beyond beginner PHP.

---

# 111. Performance and Optimization

Do not optimize blindly.

First measure.

Potential bottlenecks:

- database queries
- repeated network calls
- large file processing
- inefficient loops
- N+1 queries
- excessive serialization
- no indexes
- large memory arrays
- slow external APIs

Bad:

```php
foreach ($users as $user) {
    $orders = loadOrdersForUser($user->id);
}
```

This may create:

```text
1 user query
+ 1000 order queries
```

Potential fix:

```text
Batch query
Join
Eager loading
```

---

# 112. Caching

Cache expensive values that can safely be reused.

Examples:

- configuration
- reference data
- permissions
- API responses
- rendered fragments
- database query results

Common cache stores:

```text
Redis
Memcached
filesystem
application memory
```

Cache challenges:

```text
When does cache expire?
What happens after update?
What if cache is unavailable?
```

Classic saying:

```text
Cache invalidation is hard.
```

Always define a consistency strategy.

---

# 113. OPcache

OPcache improves PHP performance by caching compiled bytecode.

Without it, PHP may need to repeatedly parse and compile scripts.

Conceptually:

```text
PHP source
   ↓
Compiled opcodes
   ↓
OPcache
   ↓
Reuse
```

Production PHP generally benefits substantially from properly configured OPcache.

---

# 114. Memory Management

Large array:

```php
$rows = loadMillionsOfRows();
```

may exhaust memory.

Alternatives:

- generators
- chunked database queries
- streaming
- process one file row at a time

CSV example:

```php
$handle = fopen('large.csv', 'r');

while (($row = fgetcsv($handle)) !== false) {
    processRow($row);
}

fclose($handle);
```

Do not load an entire multi-GB file if you only need one row at a time.

---

# 115. Background Jobs and Queues

Some work should not block a web request.

Example:

```text
User uploads invoice
   ↓
Save upload
   ↓
Queue OCR job
   ↓
Return "processing"
```

Worker:

```text
OCR
↓
Extract fields
↓
Validate
↓
Store result
↓
Notify user
```

Common job types:

- email
- OCR
- PDF generation
- image processing
- report exports
- API synchronization
- ERP posting

Queues improve responsiveness and reliability.

---

# 116. Cron Jobs

Cron runs commands on a schedule.

Example:

```cron
0 9 * * * /usr/bin/php /var/www/app/bin/daily-report.php
```

Meaning:

```text
Every day at 09:00
```

PHP job:

```php
<?php

require __DIR__ . '/../vendor/autoload.php';

generateDailyReport();
```

Production scheduled jobs should have:

- logging
- locking to prevent duplicate execution when needed
- failure alerts
- idempotency where appropriate

---

# 117. Email Sending

Avoid writing raw SMTP logic yourself.

Use a maintained mail library or framework mail component.

Conceptual usage:

```php
$mailer->send(
    to: $user->email,
    subject: 'Invoice Approved',
    body: 'Your invoice has been approved.'
);
```

Production concerns:

- SMTP/API credentials
- retry
- queue
- bounce handling
- HTML/text versions
- SPF/DKIM/DMARC configuration at infrastructure level
- avoiding duplicate mail

---

# 118. CLI Applications

PHP is useful outside websites.

Example:

```php
<?php

echo "Processing...\n";
```

Run:

```bash
php import.php
```

Arguments:

```php
$args = $argv;

print_r($args);
```

Command:

```bash
php import.php invoices.csv
```

Use CLI for:

- imports
- migrations
- maintenance
- batch processing
- queue workers
- admin tools
- scheduled jobs

---

# 119. Working with XML

Simple XML:

```php
$xml = simplexml_load_file(
    'invoice.xml'
);

echo $xml->invoiceNumber;
```

For sensitive/untrusted XML, understand parser security and do not enable dangerous entity behavior.

XML appears often in:

- enterprise integrations
- legacy APIs
- SOAP
- financial documents
- configuration formats

---

# 120. CSV Processing

Read:

```php
$handle = fopen('users.csv', 'r');

$header = fgetcsv($handle);

while (($row = fgetcsv($handle)) !== false) {
    $data = array_combine(
        $header,
        $row
    );

    processUser($data);
}

fclose($handle);
```

Write:

```php
$handle = fopen('output.csv', 'w');

fputcsv($handle, ['Name', 'Email']);
fputcsv($handle, ['Ali', 'ali@example.com']);

fclose($handle);
```

For imports, validate each row and maintain a rejected-row report.

---

# 121. Common PHP Frameworks

## Laravel

Known for:

- expressive syntax
- routing
- Eloquent ORM
- queues
- events
- validation
- migrations
- authentication ecosystem
- jobs
- testing
- console tooling

Excellent for application development and developer productivity.

## Symfony

Known for:

- reusable components
- strong architecture
- dependency injection
- enterprise capabilities
- explicit configuration options
- long-lived applications

Many PHP frameworks use Symfony components.

## CodeIgniter

Popular for lightweight and legacy/business applications.

Modern CodeIgniter differs significantly from older CodeIgniter 2/3 systems.

## Slim / Mezzio

Useful for smaller HTTP/API applications or middleware-oriented systems.

Do not learn only framework magic. Learn core PHP first.

---

# 122. Laravel Learning Map

After mastering core PHP:

```text
Routing
↓
Controllers
↓
Requests / Validation
↓
Blade
↓
Database / Query Builder
↓
Eloquent
↓
Migrations
↓
Relationships
↓
Authentication
↓
Authorization
↓
Service Container
↓
Events
↓
Jobs / Queues
↓
Mail / Notifications
↓
Caching
↓
Testing
↓
API Resources
↓
Deployment
```

Do not put all application logic in controllers or Eloquent models.

Learn:

- service container
- dependency injection
- policies
- form requests
- jobs
- events
- resources
- testing

---

# 123. Symfony Learning Map

Recommended order:

```text
HTTP request/response
↓
Routing
↓
Controller
↓
Service container
↓
Dependency injection
↓
Configuration
↓
Doctrine
↓
Validation
↓
Security
↓
Forms
↓
Console
↓
Messenger
↓
Events
↓
Cache
↓
Testing
```

Understanding Symfony components teaches many reusable backend engineering concepts.

---

# 124. Legacy PHP and CodeIgniter Notes

Real companies often contain legacy systems.

You may encounter:

```text
PHP 5-era code
CodeIgniter 2
CodeIgniter 3
mysql_* APIs
old session handling
autoload patterns
dynamic properties
mcrypt
manual includes
global helpers
large controllers
raw SQL everywhere
```

When modernizing:

1. create a backup
2. add tests around critical behavior
3. upgrade incrementally
4. replace removed APIs
5. inspect deprecated behavior
6. upgrade dependencies
7. verify database behavior
8. verify session/authentication behavior
9. enable strict error reporting in non-production
10. compare before/after results

Do not combine a major PHP upgrade, framework upgrade, DB migration, and complete architecture rewrite into one untestable change unless absolutely necessary.

---

# 125. PHP Application Folder Structure

Example:

```text
project/
├── bin/
│   └── console
├── config/
│   ├── app.php
│   └── database.php
├── public/
│   └── index.php
├── src/
│   ├── Controller/
│   ├── Domain/
│   ├── DTO/
│   ├── Exception/
│   ├── Repository/
│   ├── Service/
│   └── Support/
├── storage/
│   ├── cache/
│   ├── logs/
│   └── uploads/
├── tests/
│   ├── Unit/
│   └── Integration/
├── vendor/
├── .env
├── .env.example
├── .gitignore
├── composer.json
└── composer.lock
```

Public document root should point to:

```text
public/
```

not the whole project.

This helps protect:

```text
.env
config
source
logs
vendor internals
```

---

# 126. Real-World Mini Projects

Build these in order.

## Project 1 — CLI Expense Tracker

Concepts:

- variables
- arrays
- functions
- loops
- files
- JSON

Features:

```text
Add expense
List expenses
Calculate total
Filter by month
Persist to JSON
```

## Project 2 — Contact Form

Concepts:

- HTML form
- POST
- validation
- escaping
- CSRF
- email

## Project 3 — User Authentication

Concepts:

- PDO
- password hashing
- sessions
- CSRF
- authorization

Features:

```text
Register
Login
Logout
Profile
Change password
```

## Project 4 — Product CRUD

Concepts:

- routing
- controllers
- database
- validation
- MVC

## Project 5 — Invoice Management System

Entities:

```text
Vendor
Invoice
InvoiceLine
User
Approval
Payment
```

Features:

```text
Upload invoice
Create invoice
Line items
Calculate GST/tax
Approval workflow
Status history
Search/filter
Export
```

## Project 6 — REST API

Endpoints:

```text
POST   /api/login
GET    /api/invoices
GET    /api/invoices/{id}
POST   /api/invoices
PATCH  /api/invoices/{id}
DELETE /api/invoices/{id}
```

Add:

- validation
- authentication
- authorization
- pagination
- error responses
- tests

## Project 7 — Large CSV Importer

Requirements:

- streaming
- validation
- rejected rows
- transaction strategy
- chunk processing
- logging
- restartability

## Project 8 — OCR Processing Pipeline

Flow:

```text
Upload PDF/Image
      ↓
Validate file
      ↓
Store safely
      ↓
Queue processing
      ↓
OCR engine
      ↓
Normalize text
      ↓
Field mapping
      ↓
Confidence validation
      ↓
JSON result
      ↓
Manual review if necessary
```

This project teaches:

- file uploads
- queues
- external processes/APIs
- JSON
- validation
- architecture
- logging
- error handling
- security

---

# 127. Common Mistakes

## Mistake 1: Trusting request input

Bad:

```php
$id = $_GET['id'];
```

Better:

```php
$id = filter_input(
    INPUT_GET,
    'id',
    FILTER_VALIDATE_INT
);

if ($id === false || $id === null) {
    // invalid
}
```

## Mistake 2: Loose comparison everywhere

Avoid unnecessary:

```php
if ($status == 0)
```

Prefer explicit intent:

```php
if ($status === 0)
```

## Mistake 3: SQL concatenation

Never:

```php
"WHERE id = " . $_GET['id']
```

Use prepared statements.

## Mistake 4: Giant controller

Split orchestration, domain logic, and persistence.

## Mistake 5: Catching and hiding every exception

Bad:

```php
try {
    process();
} catch (Throwable $e) {
}
```

Now failures disappear.

At minimum, handle or log intentionally.

## Mistake 6: Returning sensitive error messages

Do not expose database passwords, SQL, stack traces, internal paths, or secrets.

## Mistake 7: Using float for critical money calculations

Use appropriate decimal handling and database exact decimal types.

## Mistake 8: N+1 database queries

Profile database access.

## Mistake 9: No tests before refactoring legacy code

Add characterization/regression tests first.

## Mistake 10: Business logic in templates

A view should not contain your entire approval workflow.

## Mistake 11: Hardcoding configuration

Use environment/config files.

## Mistake 12: Assuming frontend validation is security

Backend validates again.

---

# 128. PHP Interview Questions

## Beginner

### What is PHP?

A server-side general-purpose language widely used for web backends.

### Difference between `==` and `===`?

`==` performs loose comparison.

`===` requires same value and compatible exact type.

### Difference between `include` and `require`?

A missing required file is fatal to normal execution, while include generally produces a warning and may allow execution to continue.

### What is `isset()`?

Checks whether a variable/key exists and is not `null`.

### What is `empty()`?

Checks whether a value is considered empty according to PHP's rules.

### GET vs POST?

GET normally retrieves and places parameters in the URL.

POST normally sends request body data and is used for creation/actions.

---

## Intermediate

### Interface vs abstract class?

Interface defines a contract.

An abstract class can define both abstract behavior and shared implementation/state.

### What is a trait?

A reusable group of methods/properties that can be included in classes.

### What is dependency injection?

Supplying a class's dependencies from outside instead of constructing them internally.

### Why prepared statements?

To separate SQL structure from parameter values and help prevent SQL injection.

### Session vs cookie?

Cookie is stored client-side.

Session state is generally stored server-side, with a session identifier usually maintained by a cookie.

### What is Composer?

PHP dependency and package manager.

### What is autoloading?

Loading class definitions automatically when referenced instead of manually requiring each file.

---

## Advanced

### What is covariance/contravariance?

They describe type compatibility when overriding methods and substituting return/parameter types.

### What is late static binding?

`static::` resolves using the runtime called class in inheritance contexts rather than always the class where the method was originally defined.

### What is a generator?

A function using `yield` to lazily produce values.

### Why is immutability useful?

It reduces unexpected state changes and makes code easier to reason about.

### Repository vs service?

Repository encapsulates persistence.

Service orchestrates application/business behavior.

### Unit vs integration test?

Unit isolates a small component.

Integration verifies collaboration with real components such as a database.

### What is idempotency?

Repeating the same operation produces no additional unintended effect.

Critical for retries, payments, APIs, and background jobs.

### How do you optimize a slow PHP endpoint?

Measure first, then inspect:

```text
database query count/time
indexes
external API latency
N+1 queries
serialization
cache usage
CPU
memory
filesystem I/O
application profiling
```

---

# 129. PHP Roadmap

## Stage 1 — Beginner

Master:

```text
Syntax
Variables
Types
Operators
Conditions
Loops
Strings
Arrays
Functions
Files
Forms
```

Build:

```text
Calculator
Expense tracker
Simple form
CSV reader
```

## Stage 2 — Web Developer

Master:

```text
HTTP
GET/POST
Cookies
Sessions
Uploads
Validation
JSON
Errors
PDO
SQL
CRUD
```

Build:

```text
Login system
Product CRUD
Admin portal
```

## Stage 3 — OOP Developer

Master:

```text
Classes
Interfaces
Traits
Inheritance
Composition
Enums
Exceptions
Namespaces
Composer
Autoloading
```

Build:

```text
Service-layer application
```

## Stage 4 — Professional Backend Developer

Master:

```text
Dependency injection
SOLID
MVC
Repository
DTO
Value object
Logging
Testing
Security
REST API
Caching
Queues
Cron
```

Build:

```text
Production-style API
Invoice workflow
```

## Stage 5 — Framework Developer

Choose:

```text
Laravel
or
Symfony
```

Do not skip core PHP.

## Stage 6 — Senior-Level Topics

Learn:

```text
Architecture
Domain modeling
Distributed systems basics
Caching strategy
Queues
Idempotency
Transactions
Observability
CI/CD
Containerization
Security
Performance
Database optimization
Refactoring legacy systems
```

---

# 130. Final Mastery Checklist

Use this checklist to assess yourself.

## PHP Language

- [ ] I understand PHP execution.
- [ ] I can run PHP using CLI.
- [ ] I understand variables and constants.
- [ ] I understand scalar and compound data types.
- [ ] I understand strict types.
- [ ] I understand type casting.
- [ ] I understand operators.
- [ ] I understand conditions.
- [ ] I understand `match`.
- [ ] I understand loops.
- [ ] I can manipulate strings.
- [ ] I can manipulate arrays.
- [ ] I know important array functions.
- [ ] I understand functions.
- [ ] I understand closures.
- [ ] I understand arrow functions.
- [ ] I understand variable scope.
- [ ] I understand references.

## Web Fundamentals

- [ ] I understand request/response.
- [ ] I understand GET and POST.
- [ ] I can process HTML forms.
- [ ] I understand superglobals.
- [ ] I can work with sessions.
- [ ] I can work with cookies.
- [ ] I can securely handle file uploads.
- [ ] I know how redirects work.
- [ ] I can return JSON.

## OOP

- [ ] I understand classes and objects.
- [ ] I understand properties and methods.
- [ ] I understand constructors.
- [ ] I understand visibility.
- [ ] I understand inheritance.
- [ ] I understand interfaces.
- [ ] I understand abstract classes.
- [ ] I understand traits.
- [ ] I understand static members.
- [ ] I understand `final`.
- [ ] I understand namespaces.
- [ ] I understand enums.
- [ ] I understand attributes.
- [ ] I understand readonly data.
- [ ] I understand union and nullable types.
- [ ] I understand generators.

## Composer and Ecosystem

- [ ] I can create `composer.json`.
- [ ] I can install packages.
- [ ] I understand `composer.lock`.
- [ ] I understand PSR-4.
- [ ] I can configure autoloading.
- [ ] I understand basic PSR concepts.

## Databases

- [ ] I understand relational database basics.
- [ ] I can use PDO.
- [ ] I always use prepared statements for values.
- [ ] I understand CRUD.
- [ ] I understand transactions.
- [ ] I understand indexes.
- [ ] I understand primary/foreign keys.
- [ ] I understand basic normalization.
- [ ] I know why exact decimal types matter for money.

## Security

- [ ] I understand SQL injection.
- [ ] I understand XSS.
- [ ] I understand CSRF.
- [ ] I understand secure password hashing.
- [ ] I understand authentication.
- [ ] I understand authorization.
- [ ] I understand session fixation.
- [ ] I know basic secure cookie options.
- [ ] I validate input.
- [ ] I escape output.
- [ ] I protect secrets.
- [ ] I securely validate uploads.

## APIs

- [ ] I understand REST conventions.
- [ ] I understand HTTP methods.
- [ ] I know important HTTP status codes.
- [ ] I validate API inputs.
- [ ] I return structured errors.
- [ ] I understand API authentication concepts.
- [ ] I can call external APIs using an HTTP client/cURL.
- [ ] I understand retries and idempotency.

## Architecture

- [ ] I understand MVC.
- [ ] I understand dependency injection.
- [ ] I understand SOLID.
- [ ] I understand service layers.
- [ ] I understand repositories.
- [ ] I understand DTOs.
- [ ] I understand value objects.
- [ ] I know when composition is preferable to inheritance.
- [ ] I understand common design patterns.

## Quality

- [ ] I write clean names.
- [ ] I write focused functions.
- [ ] I avoid unnecessary global state.
- [ ] I handle errors intentionally.
- [ ] I use logging.
- [ ] I understand unit tests.
- [ ] I understand integration tests.
- [ ] I can debug with breakpoints.
- [ ] I understand static analysis conceptually.
- [ ] I use formatting/coding standards.

## Production

- [ ] I understand environment-based configuration.
- [ ] I understand OPcache.
- [ ] I understand caching.
- [ ] I understand queues.
- [ ] I understand background workers.
- [ ] I understand cron jobs.
- [ ] I know how to process large files without loading everything into memory.
- [ ] I understand monitoring/logging basics.
- [ ] I understand database performance basics.
- [ ] I understand safe deployment concepts.

---

# Bonus: How to Think Like a Professional PHP Developer

A beginner often asks:

```text
How can I make this code work?
```

A professional also asks:

```text
What happens if input is invalid?
What happens if the database fails?
What happens if the API times out?
Can this operation be repeated safely?
Can another user access this record?
Can an attacker manipulate this value?
Can I test this logic?
Can I understand this code six months later?
Can another developer safely change it?
What happens with 1 million records?
How will I debug this in production?
```

That difference is what moves you from merely knowing PHP syntax to becoming a backend engineer.

---

# Bonus: Example — Turning Beginner PHP into Professional PHP

## Beginner version

```php
<?php

$email = $_POST['email'];

$db = new PDO(
    'mysql:host=localhost;dbname=test',
    'root',
    ''
);

$sql = "
    SELECT *
    FROM users
    WHERE email = '$email'
";

$user = $db->query($sql)->fetch();

echo $user['name'];
```

Problems:

```text
No validation
SQL injection
No error strategy
No authorization
Direct infrastructure usage
Unsafe output
Hardcoded database credentials
```

## Improved version

```php
<?php

declare(strict_types=1);

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('Invalid email');
}

$stmt = $pdo->prepare(
    'SELECT id, name, email
     FROM users
     WHERE email = :email'
);

$stmt->execute([
    'email' => $email,
]);

$user = $stmt->fetch();

if (!$user) {
    http_response_code(404);
    exit('User not found');
}

echo htmlspecialchars(
    $user['name'],
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);
```

Then improve further:

```text
Controller
↓
Validator
↓
Authorization
↓
UserRepository
↓
Response/View
```

This is the progression you should follow throughout your PHP journey.

---

# Bonus: Recommended Practice Rules

1. Prefer `declare(strict_types=1);` for your own modern application files.
2. Prefer `===` over `==` unless loose comparison is intentional.
3. Prefer prepared statements over SQL concatenation.
4. Prefer Composer autoloading over manual class includes.
5. Prefer dependency injection over creating infrastructure inside services.
6. Prefer explicit validation.
7. Prefer output escaping at rendering time.
8. Prefer enums/value objects for meaningful domain concepts.
9. Prefer immutable data when mutation is unnecessary.
10. Prefer logging over `echo` debugging in production.
11. Prefer small focused classes over "God objects".
12. Prefer tests before risky refactoring.
13. Prefer measuring performance before optimizing.
14. Prefer framework security mechanisms when they are correctly configured and maintained.
15. Prefer current maintained dependencies over abandoned packages.
16. Prefer least-privilege database/application credentials.
17. Prefer HTTPS everywhere in production.
18. Prefer safe defaults.
19. Prefer boring, readable code over clever code.
20. Prefer maintainability over unnecessary abstraction.

---

# Bonus: Suggested Project Progression

```text
1. Calculator
2. CLI Expense Tracker
3. CSV Reader
4. Contact Form
5. Login/Register System
6. Product CRUD
7. Role-Based Admin Panel
8. REST API
9. Invoice Management Application
10. Background Job System
11. Large File Importer
12. External API Integration
13. Payment Workflow Demo
14. OCR Invoice Pipeline
15. Framework-Based Production Application
```

For every project, include:

```text
README
Git
Composer
Environment config
Validation
Error handling
Logging
Tests
Security review
Clean folder structure
```

---

# Bonus: What to Learn Outside PHP

A strong PHP backend engineer should also know:

## Web

```text
HTTP
HTTPS
DNS
Cookies
CORS
REST
JSON
HTML basics
JavaScript basics
```

## Database

```text
SQL
Indexes
Transactions
Locks
Normalization
Query plans
```

## Tools

```text
Git
Composer
Linux commands
Docker
IDE debugger
Postman/Bruno/cURL
```

## Production

```text
Nginx/Apache
PHP-FPM
Environment variables
CI/CD
Logs
Monitoring
Queues
Redis
Backups
Security headers
TLS
```

## Software Engineering

```text
Clean Code
SOLID
Design patterns
Testing
Architecture
Code review
Refactoring
Documentation
```

---

# Master Rule

> **Learning PHP is not about remembering every function.**
>
> Mastery means understanding data flow, HTTP, types, OOP, databases, security, testing, architecture, failure handling, and maintainability well enough to build reliable systems.

Keep building projects, read framework/source code, debug real problems, and revisit this handbook whenever a concept becomes unclear.


---

# Advanced Master Reference

The previous chapters cover the core learning path. This section fills in additional language, runtime, architecture, database, security, and production topics that developers frequently meet in serious PHP systems.

---

# 131. Nullsafe Operator

Suppose a user may or may not have a manager.

Traditional code:

```php
$managerName = null;

if ($user !== null && $user->manager !== null) {
    $managerName = $user->manager->name;
}
```

Nullsafe operator:

```php
$managerName = $user?->manager?->name;
```

If any value in the nullsafe chain is `null`, the expression returns `null` instead of trying to access the next member.

Useful for optional relationships.

Do not use it to hide important missing data that should actually produce an error.

---

# 132. Constructor Property Promotion

Traditional:

```php
class User
{
    private string $name;
    private string $email;

    public function __construct(
        string $name,
        string $email
    ) {
        $this->name = $name;
        $this->email = $email;
    }
}
```

Property promotion:

```php
class User
{
    public function __construct(
        private string $name,
        private string $email
    ) {
    }
}
```

This reduces repetitive code.

It works well for:

- services
- DTOs
- value objects
- dependency injection

---

# 133. First-Class Callable Syntax

A callable represents executable behavior.

Traditional callable:

```php
$callback = [$service, 'process'];
```

Modern first-class callable syntax:

```php
$callback = $service->process(...);
```

Then:

```php
$result = $callback($invoice);
```

Useful when passing methods into:

- pipelines
- array functions
- event handlers
- higher-order functions

---

# 134. Argument Unpacking

Given:

```php
$numbers = [10, 20, 30];
```

Call:

```php
$result = max(...$numbers);
```

For your own function:

```php
function createPoint(int $x, int $y): array
{
    return [$x, $y];
}

$args = [10, 20];

$point = createPoint(...$args);
```

Named argument unpacking can also be useful when keys match parameter names.

---

# 135. Dynamic PHP Features and Why to Use Them Carefully

PHP supports dynamic behavior.

Variable variable:

```php
$field = 'email';
$email = 'ali@example.com';

echo $$field;
```

Dynamic method call:

```php
$method = 'process';

$service->$method();
```

Dynamic class:

```php
$className = InvoiceService::class;

$service = new $className();
```

These techniques are useful in framework internals and plugin systems but can make application code harder to:

- analyze
- autocomplete
- refactor
- test
- secure

Prefer explicit code unless dynamic behavior solves a real requirement.

---

# 136. SPL — Standard PHP Library

SPL contains useful data structures, iterators, and interfaces.

Examples:

```text
SplQueue
SplStack
SplPriorityQueue
SplFixedArray
SplFileObject
DirectoryIterator
RecursiveDirectoryIterator
ArrayIterator
```

Queue:

```php
$queue = new SplQueue();

$queue->enqueue('job-1');
$queue->enqueue('job-2');

echo $queue->dequeue();
```

File processing:

```php
$file = new SplFileObject('data.csv');

while (!$file->eof()) {
    $row = $file->fgetcsv();

    // process row
}
```

Learn SPL when you need more specialized behavior than normal arrays.

---

# 137. Useful PHP Interfaces

## Countable

```php
class Cart implements Countable
{
    public function __construct(
        private array $items = []
    ) {
    }

    public function count(): int
    {
        return count($this->items);
    }
}
```

Then:

```php
count($cart);
```

## Stringable

Objects with `__toString()` satisfy string-like behavior.

## JsonSerializable

Control JSON representation:

```php
final class User implements JsonSerializable
{
    public function __construct(
        private int $id,
        private string $name
    ) {
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}
```

## IteratorAggregate

Expose custom iteration while keeping the collection implementation encapsulated.

---

# 138. Reflection

Reflection lets code inspect classes, methods, properties, parameters, and attributes at runtime.

Example:

```php
$reflection = new ReflectionClass(
    InvoiceService::class
);

echo $reflection->getName();

foreach ($reflection->getMethods() as $method) {
    echo $method->getName();
}
```

Frameworks use reflection for:

- dependency injection
- attributes
- route discovery
- serialization
- ORM metadata

Avoid reflection when normal interfaces can solve the problem more simply.

---

# 139. Serialization

PHP supports:

```php
serialize($value);
unserialize($value);
```

However, do **not** blindly unserialize untrusted data.

For external data exchange, JSON is generally easier to inspect and more interoperable:

```php
json_encode($data);
json_decode($json, true);
```

Serialization use cases may include controlled internal persistence or framework internals.

Security rule:

> Never treat attacker-controlled serialized PHP object data as safe.

---

# 140. Streams

PHP abstracts many I/O operations as streams.

Examples:

```text
file://
php://
http://
https://
```

Read request body:

```php
$body = file_get_contents('php://input');
```

Write to standard output:

```php
$stdout = fopen('php://stdout', 'w');

fwrite($stdout, "Hello\n");
```

Temporary in-memory/file-backed stream:

```php
$stream = fopen('php://temp', 'w+');
```

Streams are useful for:

- large data
- HTTP bodies
- CSV processing
- generated files
- CLI tools

---

# 141. Stream Contexts

A stream context configures stream behavior.

Example concept:

```php
$context = stream_context_create([
    'http' => [
        'timeout' => 5,
    ],
]);
```

Then:

```php
$content = file_get_contents(
    $url,
    false,
    $context
);
```

For production HTTP integrations, a dedicated HTTP client library is usually easier to configure and test than raw stream wrappers.

---

# 142. Output Buffering

PHP can buffer output before sending it.

```php
ob_start();

echo '<h1>Hello</h1>';

$content = ob_get_clean();
```

Now `$content` contains the generated output.

Use cases:

- legacy templating
- capturing rendered content
- middleware-like transformations

Modern template engines/frameworks usually handle this internally.

---

# 143. CORS

CORS controls which browser origins may make certain cross-origin requests.

Example header:

```php
header(
    'Access-Control-Allow-Origin: https://frontend.example.com'
);
```

Do not blindly use:

```text
Access-Control-Allow-Origin: *
```

for APIs involving sensitive credentials.

CORS is a **browser security policy**, not an authentication mechanism.

Your API still needs authentication and authorization.

---

# 144. php.ini

`php.ini` controls PHP runtime configuration.

Find active configuration:

```bash
php --ini
```

Useful settings include concepts such as:

```text
memory_limit
max_execution_time
upload_max_filesize
post_max_size
display_errors
error_reporting
date.timezone
session.*
opcache.*
```

Check a setting:

```bash
php -i
```

or:

```php
echo ini_get('memory_limit');
```

Configuration may differ between:

```text
CLI PHP
Apache module
PHP-FPM
IIS/FastCGI
```

Always verify which runtime configuration your application is actually using.

---

# 145. PHP-FPM

PHP-FPM is a common FastCGI process manager used with web servers such as Nginx.

Conceptual request flow:

```text
Browser
  ↓
Nginx
  ↓
PHP-FPM worker
  ↓
PHP application
  ↓
Response
```

Important operational ideas:

- worker processes
- process pools
- memory consumption
- request timeout
- slow request logs
- max children
- recycling workers

A PHP application can be fast while a badly configured worker pool still creates production problems.

---

# 146. Apache, Nginx and IIS Concepts

PHP is often hosted behind:

```text
Apache
Nginx
IIS
```

Important concepts:

- document root
- URL rewriting
- HTTPS termination
- static file handling
- request body limits
- FastCGI
- security headers
- reverse proxy
- access/error logs

Recommended document root:

```text
/project/public
```

rather than:

```text
/project
```

---

# 147. Static Analysis

Static analysis checks code without running every possible execution path.

Popular PHP tools include static analyzers that can detect:

- wrong parameter types
- impossible conditions
- missing array keys
- invalid method calls
- incorrect return values
- nullable mistakes
- dead code patterns

Example bug:

```php
function getName(): string
{
    return null;
}
```

A static analyzer can catch this before production.

Treat static analysis as an important professional PHP skill.

---

# 148. Code Formatting and Automated Quality Checks

Automate style checks.

Typical pipeline:

```text
Formatter
↓
Coding standard
↓
Static analysis
↓
Unit tests
↓
Integration tests
↓
Security/dependency checks
```

Do not make developers manually debate spacing in every code review.

Automated formatting allows review discussions to focus on behavior and architecture.

---

# 149. Composer Version Constraints

Examples:

```json
{
  "require": {
    "vendor/package": "^2.3"
  }
}
```

Common version constraint concepts:

```text
^
~
exact versions
ranges
wildcards
```

Understand semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Conceptually:

```text
PATCH = compatible bug fix
MINOR = backward-compatible feature
MAJOR = potentially breaking changes
```

Actual package compatibility still depends on the package's release practices.

---

# 150. Composer Scripts

Composer can run project commands.

Example concept:

```json
{
  "scripts": {
    "test": "phpunit",
    "analyse": "phpstan analyse"
  }
}
```

Then:

```bash
composer test
composer analyse
```

Useful for standardizing developer workflow and CI.

Be cautious with scripts in untrusted third-party projects because Composer commands can execute code.

---

# 151. Creating Your Own Composer Package

Typical package:

```text
my-package/
├── src/
├── tests/
├── composer.json
├── README.md
└── LICENSE
```

Example autoloading:

```json
{
  "autoload": {
    "psr-4": {
      "Acme\\Invoice\\": "src/"
    }
  }
}
```

Good reusable packages should have:

- narrow purpose
- stable public API
- tests
- documentation
- semantic versioning
- minimal dependencies

---

# 152. Database Isolation Levels

Transactions do not automatically solve every concurrency problem.

Isolation levels describe how concurrent transactions may observe each other's changes.

Important phenomena:

```text
Dirty read
Non-repeatable read
Phantom read
Serialization conflict
```

Database engines implement isolation differently.

Do not memorize only theory—learn how your chosen database behaves.

Scenario:

```text
Two users approve the same invoice simultaneously.
```

Your application may need:

- transaction
- locking
- version checking
- unique constraint
- idempotent business logic

---

# 153. Database Locks

Locking coordinates concurrent access.

Concepts:

```text
shared lock
exclusive lock
row lock
table lock
optimistic locking
pessimistic locking
```

Example pessimistic approach conceptually:

```sql
SELECT *
FROM invoices
WHERE id = 1001
FOR UPDATE;
```

Then validate and modify within the same transaction.

Use locks carefully because long transactions can reduce throughput and create deadlocks.

---

# 154. Deadlocks

A deadlock can occur when transactions wait on resources held by one another.

Example:

```text
Transaction A locks invoice 1
Transaction B locks invoice 2
A wants invoice 2
B wants invoice 1
```

The database may abort one transaction.

Applications should:

- keep transactions short
- lock resources in consistent order
- use correct indexes
- retry suitable deadlock failures safely

---

# 155. Optimistic Locking

Instead of locking first, detect whether data changed.

Table:

```text
id
status
version
```

Update:

```sql
UPDATE invoices
SET status = :status,
    version = version + 1
WHERE id = :id
  AND version = :expected_version;
```

If zero rows update, another transaction changed the record.

Useful in systems where conflicts are possible but not extremely frequent.

---

# 156. Database Pagination

Simple:

```sql
LIMIT 20 OFFSET 10000
```

Large offsets can become expensive.

For large datasets, consider keyset/cursor pagination.

Example concept:

```sql
SELECT *
FROM invoices
WHERE id > :last_id
ORDER BY id
LIMIT 20;
```

Benefits:

- stable performance
- better behavior for large tables

Tradeoff:

- you cannot jump to arbitrary page numbers as easily

---

# 157. ORM Concepts

ORM maps database data to objects.

Two common styles:

```text
Active Record
Data Mapper
```

Active Record:

```text
$user->save()
```

Data Mapper:

```text
$userRepository->save($user)
```

Advantages:

- less repetitive SQL
- relationships
- model mapping
- framework integration

Risks:

- hidden queries
- N+1 problems
- inefficient loading
- treating database as magic

Learn SQL even if you use an ORM.

---

# 158. Database Migrations

A migration versions database schema changes.

Example concept:

```text
001_create_users
002_create_invoices
003_add_status_to_invoices
```

Benefits:

- reproducible environments
- deployment history
- team synchronization
- safer schema evolution

Production migrations require care.

For large tables, adding indexes or rewriting columns can lock or heavily load a database.

---

# 159. API Pagination

Response:

```json
{
  "data": [],
  "meta": {
    "page": 2,
    "per_page": 20,
    "total": 350
  }
}
```

Or cursor-based:

```json
{
  "data": [],
  "next_cursor": "eyJpZCI6MTAwMX0="
}
```

Choose pagination based on:

- data size
- sort requirements
- consistency needs
- user experience

---

# 160. Rate Limiting

Rate limiting restricts how often a client may call an endpoint.

Example:

```text
100 requests/minute/user
```

Useful for:

- login endpoints
- password reset
- public APIs
- expensive searches
- abuse prevention

Response commonly uses:

```text
429 Too Many Requests
```

Rate limits should often identify callers using a combination of authenticated identity, API key, and/or network information depending on the system.

---

# 161. Idempotency

An idempotent operation can be safely retried without creating duplicate side effects.

Problem:

```text
Client sends payment request
Server processes payment
Network response is lost
Client retries
```

Without idempotency:

```text
Payment may happen twice.
```

Typical solution:

```text
Idempotency-Key: random-request-id
```

Server stores the result associated with the key.

The exact design should consider:

- key scope
- expiration
- payload consistency
- transaction boundaries

---

# 162. Webhooks

A webhook lets one service notify another service.

Example:

```text
Payment Provider
      ↓
POST /webhooks/payment
      ↓
Your PHP app
```

Secure webhook processing commonly requires:

1. verify provider signature
2. validate timestamp/replay rules if supported
3. parse payload
4. check event ID
5. process idempotently
6. return quickly
7. queue expensive work

Never trust a webhook only because its JSON "looks correct."

---

# 163. Event-Driven Application Design

Instead of tightly coupling actions:

```php
approveInvoice();
sendEmail();
postToErp();
writeAudit();
updateDashboard();
```

Publish a domain/application event:

```text
InvoiceApproved
```

Handlers:

```text
SendApprovalEmail
QueueErpPosting
WriteAuditLog
UpdateMetrics
```

Benefits:

- lower coupling
- independent handlers
- easier extension

Risks:

- harder tracing
- eventual consistency
- duplicate events
- ordering problems

Use events intentionally.

---

# 164. Domain-Driven Design Basics

DDD focuses software around business language and rules.

Example invoice domain terms:

```text
Invoice
Vendor
Purchase Order
Approval
Posting
Payment
Rejection
Deviation
```

Instead of generic:

```php
$data['flag'] = 2;
```

Prefer domain meaning:

```php
$invoice->approve($approver);
```

Useful DDD concepts:

```text
Entity
Value Object
Aggregate
Repository
Domain Service
Domain Event
Bounded Context
Ubiquitous Language
```

Do not force full DDD onto tiny CRUD applications.

---

# 165. Entity vs Value Object

Entity:

Has identity.

```text
Invoice #1001
User #500
```

Even if its fields change, it is still the same entity.

Value object:

Defined by value.

```text
Money(1000, INR)
EmailAddress("a@example.com")
DateRange(start, end)
```

Two value objects with equal values are conceptually equivalent.

---

# 166. CQRS Basics

CQRS means separating command/write concerns from query/read concerns.

Command:

```text
ApproveInvoice
```

Query:

```text
GetInvoiceDashboard
```

Benefits in some systems:

- optimized read models
- clearer intent
- complex workflow separation

Costs:

- more architecture
- synchronization complexity
- eventual consistency

Do not use CQRS merely because it sounds advanced.

---

# 167. Race Conditions

Race condition:

Two operations act on shared state at almost the same time.

Example:

```text
Available stock = 1

Request A checks stock → 1
Request B checks stock → 1
A buys item
B buys item
```

Now stock may become invalid.

Solutions may include:

- atomic database updates
- locks
- transactions
- uniqueness constraints
- optimistic concurrency
- queues

Never assume "PHP requests run one at a time."

---

# 168. Atomic Database Operations

Instead of:

```text
SELECT balance
PHP calculates balance - 100
UPDATE balance
```

sometimes use one atomic update:

```sql
UPDATE accounts
SET balance = balance - 100
WHERE id = :id
  AND balance >= 100;
```

Then check affected row count.

This can reduce race-condition windows.

---

# 169. Money Handling

Do not rely casually on binary floating-point values for critical money arithmetic.

Example issue:

```php
var_dump(0.1 + 0.2);
```

Financial systems commonly use:

- integer minor units, e.g. paise/cents
- arbitrary precision decimal libraries
- exact database DECIMAL values

Example:

```text
₹123.45
→ 12345 paise
```

Choose one consistent strategy across:

```text
input
domain
calculation
database
API
display
```

Be explicit about rounding rules.

---

# 170. Internationalization and Localization

Applications may need different:

- languages
- date formats
- number formats
- currencies
- timezones

Do not hardcode:

```php
echo '₹' . $amount;
```

everywhere.

Use locale-aware formatting tools where required.

Store canonical data, then format for display.

Dates should have explicit timezone strategy.

---

# 171. Timezone Strategy

Common production strategy:

```text
Store timestamp in UTC
↓
Convert to user's/business timezone for display
```

But business dates such as:

```text
invoice date
financial posting date
holiday date
```

may represent calendar dates rather than instants.

Know the difference between:

```text
2026-08-12
```

and:

```text
2026-08-12T18:30:00+05:30
```

---

# 172. Path Traversal

Vulnerable:

```php
$file = $_GET['file'];

readfile(
    __DIR__ . '/files/' . $file
);
```

An attacker might attempt path components such as:

```text
../../...
```

Safer design:

- do not expose arbitrary filesystem paths
- map allowed IDs to known files
- canonicalize/check paths when necessary
- authorize file access
- store generated names

---

# 173. Command Injection

Dangerous:

```php
$file = $_GET['file'];

shell_exec("convert $file output.png");
```

User input may alter shell commands.

Prefer APIs that avoid the shell.

When process execution is necessary:

- use structured process libraries
- allowlist arguments
- avoid constructing shell command strings
- use least privilege
- apply timeouts
- isolate risky processing

Escaping alone should not be your entire security design.

---

# 174. SSRF

Server-Side Request Forgery occurs when an attacker influences the server to request unintended destinations.

Dangerous concept:

```php
$url = $_POST['url'];

echo file_get_contents($url);
```

Potential targets may include:

- localhost services
- cloud metadata services
- internal APIs
- private network systems

Protection may include:

- URL allowlists
- host validation
- network egress rules
- blocking private/internal ranges
- redirect controls

---

# 175. Open Redirect

Dangerous:

```php
header(
    'Location: ' . $_GET['next']
);
```

Attacker sends:

```text
/login?next=https://evil.example
```

Users may trust the original domain and then be redirected to phishing content.

Prefer relative internal routes or a strict allowlist.

---

# 176. Security Headers

Common web security headers/concepts include:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
frame-ancestors via CSP
Permissions-Policy
```

Do not copy a random header set without understanding application requirements.

For example, a Content Security Policy must match the scripts, frames, styles, and integrations your application actually needs.

---

# 177. Content Security Policy

CSP reduces the impact of many script injection attacks by restricting allowed content sources.

Conceptual header:

```text
Content-Security-Policy:
default-src 'self';
script-src 'self';
object-src 'none';
frame-ancestors 'none'
```

Production CSP deployment often starts with careful testing because overly strict rules can break legitimate resources.

CSP complements output encoding—it does not replace it.

---

# 178. Authentication Brute-Force Protection

Login endpoints should consider:

- rate limits
- monitoring
- temporary throttling
- MFA where appropriate
- generic failure messages
- password hashing cost
- security alerts for suspicious activity

Avoid telling an attacker:

```text
Email exists but password is wrong.
```

when account enumeration is a concern.

---

# 179. Multi-Factor Authentication Concepts

MFA adds another factor beyond the password.

Possible factors:

```text
TOTP authenticator
hardware security key
passkey
organization identity provider
recovery codes
```

Do not implement cryptographic protocols from scratch when maintained libraries/services exist.

Recovery mechanisms must be treated as highly sensitive.

---

# 180. Secure Password Reset Flow

Typical flow:

```text
User enters email
↓
Generate random one-time token
↓
Store secure representation + expiry
↓
Email reset link
↓
Verify token
↓
Allow password change
↓
Invalidate token
↓
Optionally revoke sessions
```

Use cryptographically secure random tokens:

```php
$token = bin2hex(
    random_bytes(32)
);
```

Do not create predictable reset tokens from:

```text
user ID
timestamp
email
```

alone.

---

# 181. Audit Logging

Security/business audit log example:

```text
2026-08-12T10:10:00Z
user=SG12345
action=invoice.approved
invoice_id=1001
request_id=abc123
```

Audit logs differ from debug logs.

Audit log answers:

```text
Who did what?
To which record?
When?
What important state changed?
```

Protect audit logs from unauthorized modification.

---

# 182. Soft Delete vs Hard Delete

Hard delete:

```sql
DELETE FROM users WHERE id = 10;
```

Soft delete:

```text
deleted_at = timestamp
```

Benefits of soft delete:

- recovery
- audit history
- referential continuity

Costs:

- every query must handle deleted records correctly
- unique constraints become more complex
- data retention obligations still matter

Choose intentionally.

---

# 183. Data Retention

Do not keep every piece of data forever by accident.

Define:

```text
What data?
Why stored?
How long?
Who can access it?
When deleted/anonymized?
How is backup retention handled?
```

This matters for:

- logs
- uploaded documents
- personal data
- audit data
- exports
- temporary OCR files

---

# 184. Large File Processing Pattern

Avoid:

```php
$content = file_get_contents(
    '5GB-file.csv'
);
```

Better:

```text
Open stream
↓
Read chunk/row
↓
Validate
↓
Process
↓
Release temporary data
↓
Continue
```

For database inserts:

```text
Chunk 500 rows
↓
Transaction
↓
Batch insert
↓
Commit
↓
Next chunk
```

Choose chunk size based on measurement.

---

# 185. Retry Strategy

Retries are useful for transient failures:

```text
network timeout
temporary 503
deadlock
short-lived service interruption
```

Retries are dangerous for non-idempotent actions.

Bad:

```text
Retry payment charge blindly 10 times
```

Good retry design considers:

- idempotency
- maximum attempts
- exponential backoff
- jitter
- retryable vs non-retryable errors

---

# 186. Circuit Breaker Concept

If an external service is repeatedly failing, constantly calling it can worsen the problem.

Circuit breaker concept:

```text
Closed
→ requests flow

Repeated failures
→ Open

Open
→ fail fast temporarily

Later
→ Half-open test
```

Often implemented by infrastructure/libraries rather than handwritten in every PHP class.

---

# 187. Timeouts

Every external operation should have sensible limits.

Examples:

```text
HTTP connection timeout
HTTP request timeout
database timeout
queue job timeout
CLI timeout
OCR process timeout
```

Without timeouts:

```text
one stuck external dependency
→ PHP worker remains occupied
→ worker pool fills
→ application becomes unavailable
```

---

# 188. Observability

Observability commonly combines:

```text
Logs
Metrics
Traces
```

Examples of useful metrics:

```text
request count
error rate
latency
database query time
queue depth
job failures
memory usage
cache hit ratio
```

Request correlation ID:

```text
request_id = 7f1a...
```

Include it across:

```text
web request
logs
queue job
external service calls
```

so one business operation can be traced.

---

# 189. Health Checks

Example endpoints:

```text
/health/live
/health/ready
```

Liveness:

```text
Is the application process alive?
```

Readiness:

```text
Can it currently serve requests?
```

Avoid making every health request perform dozens of expensive dependency checks.

---

# 190. Graceful Failure

External ERP unavailable?

Instead of:

```text
HTTP request waits forever
then user sees generic 500
```

Better design may:

```text
Validate invoice
↓
Save operation
↓
Queue ERP posting
↓
Mark "Posting Pending"
↓
Retry safely
↓
Alert after repeated failure
```

Architecture should assume dependencies sometimes fail.

---

# 191. Feature Flags

Feature flag:

```php
if ($features->enabled('new_invoice_workflow')) {
    // new behavior
} else {
    // old behavior
}
```

Use cases:

- controlled rollout
- emergency disable
- A/B testing
- gradual migration

Avoid leaving old feature flags permanently. They create hidden branches and technical debt.

---

# 192. Configuration vs Feature Flag

Configuration:

```text
DB_HOST
MAIL_FROM
OCR_TIMEOUT
```

Feature flag:

```text
ENABLE_NEW_APPROVAL_FLOW
```

Configuration describes environment/behavior parameters.

Feature flag controls rollout of a capability.

Do not use feature flags as permanent business data.

---

# 193. SOAP

Many enterprise systems still expose SOAP services.

PHP can work with SOAP through supported extensions/libraries.

Concepts:

```text
WSDL
SOAP envelope
operation
XML schema
service endpoint
```

SOAP is common in:

- ERP integrations
- banking
- government systems
- older enterprise services

Learn enough XML and HTTP to debug the actual request and response.

---

# 194. Dependency Vulnerability Management

Third-party packages become part of your attack surface.

Regularly review:

```text
composer.lock
outdated packages
security advisories
abandoned packages
transitive dependencies
```

Upgrade intentionally and test changes.

Do not depend on an abandoned package for critical authentication or cryptography if a maintained alternative exists.

---

# 195. Backward Compatibility

A breaking change can include:

```text
renaming public method
changing parameter type
removing class
changing exception contract
changing API response shape
```

For shared libraries/APIs, think about compatibility before release.

Internal applications can sometimes change faster, but deployments may still involve multiple services using different versions.

---

# 196. Deprecation Strategy

Instead of immediately deleting an old method:

```php
public function oldMethod(): void
{
    trigger_error(
        'oldMethod() is deprecated; use newMethod()',
        E_USER_DEPRECATED
    );

    $this->newMethod();
}
```

Then:

1. announce replacement
2. migrate callers
3. remove in planned breaking release

---

# 197. Code Review Checklist

When reviewing PHP code, ask:

## Correctness

- Does it handle null/empty/invalid values?
- What happens on failure?
- Are edge cases covered?

## Security

- Is input validated?
- Is output escaped?
- Are SQL parameters bound?
- Is authorization enforced?
- Are secrets protected?

## Database

- Is transaction needed?
- Could this create N+1 queries?
- Is an index needed?
- Can concurrency break it?

## Maintainability

- Are names clear?
- Is business logic in the right layer?
- Is there duplication?
- Are dependencies explicit?

## Testing

- Is critical behavior tested?
- Is failure behavior tested?
- Could this change cause regression?

---

# 198. Production Deployment Checklist

Before deployment:

- [ ] Composer dependencies are locked.
- [ ] Production secrets are not committed.
- [ ] Debug mode is disabled.
- [ ] Detailed errors are not exposed publicly.
- [ ] Database migrations are reviewed.
- [ ] Backups/recovery strategy exists.
- [ ] Tests pass.
- [ ] Static analysis passes.
- [ ] Coding standards pass.
- [ ] Dependencies are reviewed.
- [ ] HTTPS is configured.
- [ ] Security headers are reviewed.
- [ ] File permissions are appropriate.
- [ ] Upload directories cannot execute arbitrary uploaded scripts.
- [ ] Logging works.
- [ ] Monitoring works.
- [ ] Queue workers are running if required.
- [ ] Scheduled jobs are configured if required.
- [ ] OPcache/runtime settings are appropriate.
- [ ] Rollback approach is understood.

---

# 199. PHP Debugging Cheat Sheet

Show type/value:

```php
var_dump($value);
```

Pretty array:

```php
print_r($array);
```

Stop:

```php
die('reached here');
```

Exception:

```php
throw new RuntimeException(
    'Unexpected state'
);
```

Log:

```php
error_log(
    json_encode($context)
);
```

Check loaded extensions:

```bash
php -m
```

Check config:

```bash
php --ini
```

Syntax check:

```bash
php -l file.php
```

PHP information:

```bash
php -i
```

Composer autoload refresh:

```bash
composer dump-autoload
```

---

# 200. PHP Syntax Quick Reference

Variable:

```php
$name = 'Ali';
```

Constant:

```php
const APP_NAME = 'Portal';
```

Array:

```php
$items = [
    'a',
    'b',
];
```

Map:

```php
$user = [
    'id' => 1,
    'name' => 'Ali',
];
```

Condition:

```php
if ($active) {
    // ...
} else {
    // ...
}
```

Match:

```php
$result = match ($status) {
    'ok' => 1,
    default => 0,
};
```

Loop:

```php
foreach ($items as $item) {
    // ...
}
```

Function:

```php
function add(int $a, int $b): int
{
    return $a + $b;
}
```

Class:

```php
final class User
{
    public function __construct(
        public readonly int $id,
        public string $name
    ) {
    }
}
```

Interface:

```php
interface Logger
{
    public function log(string $message): void;
}
```

Enum:

```php
enum Status: string
{
    case Active = 'active';
    case Inactive = 'inactive';
}
```

Exception:

```php
try {
    // ...
} catch (Throwable $e) {
    // ...
}
```

PDO:

```php
$stmt = $pdo->prepare(
    'SELECT * FROM users WHERE id = :id'
);

$stmt->execute(['id' => $id]);
```

JSON:

```php
$json = json_encode(
    $data,
    JSON_THROW_ON_ERROR
);
```

---

# 201. Practice Exercises

## Variables

Create variables for:

```text
invoice number
vendor name
subtotal
GST
final total
approval status
```

Print a formatted summary.

## Conditions

Rule:

```text
Amount < 10,000
→ Employee approval

10,000–100,000
→ Manager approval

> 100,000
→ Finance approval
```

Implement it using both:

```text
if/elseif
match
```

where suitable.

## Arrays

Create 5 invoice line items:

```text
description
quantity
unit_price
tax_rate
```

Calculate:

```text
line subtotal
tax
line total
invoice total
```

## Functions

Create:

```php
calculateLineTotal()
calculateTax()
calculateInvoiceTotal()
```

Use strict types.

## OOP

Create:

```text
Invoice
InvoiceLine
Money
Vendor
```

Move calculation rules into appropriate objects.

## Database

Create tables:

```text
vendors
invoices
invoice_items
```

Implement CRUD using PDO prepared statements.

## Security

Build a form and protect it from:

```text
XSS
CSRF
SQL injection
invalid input
```

## API

Create:

```text
POST /api/invoices
GET /api/invoices/{id}
```

Return validation errors using JSON.

## Testing

Test:

```text
zero amount
negative amount
normal amount
multiple tax rates
invalid invoice state
double approval
```

---

# 202. Scenario Exercises for Real-World Thinking

## Scenario A — Duplicate Invoice

Requirement:

```text
Same vendor + invoice number
must not be entered twice.
```

Think about:

```text
application validation
database unique constraint
concurrent requests
error response
```

Do not rely only on:

```php
SELECT then INSERT
```

because two concurrent requests can both pass the SELECT.

A database uniqueness constraint should protect the invariant.

---

## Scenario B — Double Approval

Two managers click Approve simultaneously.

Questions:

```text
Can both write?
Should approval be idempotent?
Should status transition be atomic?
Do we need optimistic locking?
Should audit log have one or two entries?
```

---

## Scenario C — External ERP Is Down

Invoice is already approved but ERP cannot be reached.

Possible model:

```text
Approved
↓
ERP Posting Pending
↓
Posting job
↓
Posted
```

Rather than rolling the user-facing approval back because an external dependency temporarily failed.

---

## Scenario D — 2 Million Row CSV

Do not:

```text
Read everything into one PHP array.
```

Design:

```text
stream
chunk
validate
batch insert
log rejected rows
resume/retry safely
```

---

## Scenario E — Unauthorized Record Access

Endpoint:

```text
GET /invoice.php?id=5001
```

Logged-in user changes `5001` to `5002`.

Question:

```text
Does the backend verify the user has permission to see invoice 5002?
```

Authentication alone is not enough.

---

# 203. "When Should I Use What?" Reference

## `isset()` vs `array_key_exists()`

Use `isset()` when you care that value exists **and is not null**.

Use `array_key_exists()` when the key itself must exist even if its value is `null`.

## `require` vs `include`

Use `require` for files your application cannot run without.

## Array vs object

Use arrays for simple ad-hoc collections/data.

Use objects when the data has behavior, invariants, identity, or a stable contract.

## Interface vs abstract class

Use interface for capability/contract.

Use abstract class when related types share implementation/state.

## Inheritance vs composition

Prefer composition unless the subtype truly satisfies the parent's contract.

## Session vs token

Depends on architecture.

Traditional server-rendered application often uses sessions.

Distributed APIs/mobile systems may use token-based approaches.

## Queue vs synchronous request

Queue slow, retryable, non-immediate work.

Keep work synchronous when the user needs the result immediately and execution is fast/reliable.

## Cache vs database

Database is source of truth.

Cache is generally a performance layer.

---

# 204. Final Learning Strategy

Use this cycle for each chapter:

```text
Understand
↓
Type example
↓
Modify example
↓
Build mini-feature
↓
Write test
↓
Break it
↓
Debug it
↓
Refactor it
↓
Explain it without notes
```

If you can explain a concept simply, implement it correctly, secure it, test it, and identify when **not** to use it, you understand it at a professional level.

---

# End of PHP Master Handbook

Keep this file as a living handbook.

Whenever you discover:

- a useful pattern
- a production failure
- an interview question
- a new PHP language feature
- a database lesson
- a security issue
- a framework concept

add a small section with:

```text
What is it?
Why does it exist?
When should I use it?
Example
Real-world scenario
Common mistake
Best practice
```

That process will turn this handbook into your own long-term PHP engineering knowledge base.
