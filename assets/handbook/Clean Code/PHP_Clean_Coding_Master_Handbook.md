# Clean Coding PHP — Master Handbook

> **A beginner-to-advanced practical handbook for writing readable, maintainable, testable, secure, and production-friendly PHP.**
>
> This handbook focuses on *how to think about code quality*, not merely how to make PHP code “work.”
>
> **Edition:** August 2026  
> **Primary target:** Modern PHP 8.x codebases  
> **Useful for:** Core PHP, Laravel, Symfony, CodeIgniter, Slim, WordPress-oriented PHP (with framework-specific conventions), APIs, CLI tools, background jobs, and enterprise applications.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Clean Code Really Means](#2-what-clean-code-really-means)
3. [The Clean-Code Mindset](#3-the-clean-code-mindset)
4. [Modern PHP Baseline](#4-modern-php-baseline)
5. [Formatting and Coding Standards](#5-formatting-and-coding-standards)
6. [Naming Things Well](#6-naming-things-well)
7. [Variables and Data](#7-variables-and-data)
8. [Expressions and Conditions](#8-expressions-and-conditions)
9. [Functions and Methods](#9-functions-and-methods)
10. [Parameters and Return Values](#10-parameters-and-return-values)
11. [Types and Type Safety](#11-types-and-type-safety)
12. [Arrays, Collections, DTOs, and Value Objects](#12-arrays-collections-dtos-and-value-objects)
13. [Classes and Objects](#13-classes-and-objects)
14. [Encapsulation](#14-encapsulation)
15. [Inheritance vs Composition](#15-inheritance-vs-composition)
16. [Interfaces and Abstractions](#16-interfaces-and-abstractions)
17. [SOLID Principles](#17-solid-principles)
18. [DRY, KISS, YAGNI, and Related Principles](#18-dry-kiss-yagni-and-related-principles)
19. [Coupling and Cohesion](#19-coupling-and-cohesion)
20. [Dependency Injection](#20-dependency-injection)
21. [Exceptions and Error Handling](#21-exceptions-and-error-handling)
22. [Null Handling and Optional Data](#22-null-handling-and-optional-data)
23. [Comments and Documentation](#23-comments-and-documentation)
24. [Database Code](#24-database-code)
25. [Security-Oriented Clean Code](#25-security-oriented-clean-code)
26. [Input Validation and Output Encoding](#26-input-validation-and-output-encoding)
27. [Authentication and Password Handling](#27-authentication-and-password-handling)
28. [File and Upload Handling](#28-file-and-upload-handling)
29. [HTTP/API Clean Code](#29-httpapi-clean-code)
30. [Configuration and Environment Management](#30-configuration-and-environment-management)
31. [Logging and Observability](#31-logging-and-observability)
32. [Testing Clean PHP](#32-testing-clean-php)
33. [Static Analysis and Automated Quality Tools](#33-static-analysis-and-automated-quality-tools)
34. [Refactoring](#34-refactoring)
35. [Common Code Smells](#35-common-code-smells)
36. [Common PHP Anti-Patterns](#36-common-php-anti-patterns)
37. [Clean Architecture and Layering](#37-clean-architecture-and-layering)
38. [Repositories, Services, DTOs, and Domain Objects](#38-repositories-services-dtos-and-domain-objects)
39. [Design Patterns Worth Knowing](#39-design-patterns-worth-knowing)
40. [Performance Without Destroying Readability](#40-performance-without-destroying-readability)
41. [Concurrency, Jobs, and Idempotency](#41-concurrency-jobs-and-idempotency)
42. [Dates, Money, and Other Dangerous Data](#42-dates-money-and-other-dangerous-data)
43. [Legacy PHP Cleanup Strategy](#43-legacy-php-cleanup-strategy)
44. [Framework-Specific Guidance](#44-framework-specific-guidance)
45. [Code Review Master Checklist](#45-code-review-master-checklist)
46. [Production Readiness Checklist](#46-production-readiness-checklist)
47. [Scenario-Based Refactoring Examples](#47-scenario-based-refactoring-examples)
48. [Practice Exercises](#48-practice-exercises)
49. [Learning Roadmap](#49-learning-roadmap)
50. [Quick Reference Cheat Sheet](#50-quick-reference-cheat-sheet)
51. [PHP-Specific Clean-Code Pitfalls](#51-php-specific-clean-code-pitfalls)
52. [Namespaces, Composer, and Autoloading](#52-namespaces-composer-and-autoloading)
53. [The PSR Ecosystem for Clean PHP](#53-the-psr-ecosystem-for-clean-php)
54. [Boundary Mapping and External Data](#54-boundary-mapping-and-external-data)
55. [Advanced Security Clean-Code Patterns](#55-advanced-security-clean-code-patterns)
56. [Test Doubles and Designing for Testability](#56-test-doubles-and-designing-for-testability)
57. [CI Quality Gates](#57-ci-quality-gates)
58. [Clean Code in Teams](#58-clean-code-in-teams)
59. [Definition of Done](#59-definition-of-done)
60. [Refactoring Recipes](#60-refactoring-recipes)
61. [Official References](#61-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize everything.

A better learning sequence is:

1. Read the clean-code principles.
2. Apply naming and function rules immediately.
3. Learn types and OOP.
4. Learn SOLID and dependency injection.
5. Learn testing and static analysis.
6. Refactor existing code.
7. Study architecture after you have felt the pain of badly structured code.
8. Revisit this handbook during code reviews.

Use this document in three ways:

- **Learning:** read sections in order.
- **Reference:** jump directly to a problem.
- **Code review:** use the checklists near the end.

---

# 2. What Clean Code Really Means

Clean code is code that a developer can understand, change, test, and safely extend without spending unnecessary mental effort.

Clean code is **not**:

- code with the fewest possible lines;
- code using the newest language feature everywhere;
- code with lots of comments;
- code with many design patterns;
- code that looks “clever”;
- code that is theoretically perfect but impossible for the team to maintain.

A useful definition:

> **Clean code communicates intent clearly and makes incorrect changes difficult.**

Consider this:

```php
$x = $p * 0.18;
```

Technically correct, but unclear.

Better:

```php
$taxAmount = $price * 0.18;
```

Better still, if the rule matters to the business:

```php
$taxAmount = $taxCalculator->calculateFor($price);
```

The correct level depends on the application.

## Clean code optimizes for humans

Computers execute code.

Humans:

- read it;
- review it;
- debug it;
- extend it;
- test it;
- operate it;
- inherit it years later.

Therefore readability is not cosmetic. It is an engineering requirement.

---

# 3. The Clean-Code Mindset

Before rules, develop these habits.

## 3.1 Make intent obvious

A reader should be able to answer:

- What does this code do?
- Why does it exist?
- What can fail?
- What data goes in?
- What comes out?
- What assumptions does it make?

## 3.2 Prefer boring code

“Boring” code is predictable.

Predictable code is easier to maintain.

Avoid:

```php
$result = fn($x) => ($x ?? 0) ?: false;
```

when a normal function would communicate intent better.

## 3.3 Optimize for change

Requirements change.

Ask:

> “If this rule changes next month, how many files will I need to edit?”

If “everywhere,” your design is probably too coupled.

## 3.4 Make invalid states difficult

Instead of:

```php
$orderStatus = 'xyz';
```

prefer an enum:

```php
enum OrderStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Cancelled = 'cancelled';
}
```

Now arbitrary status values are harder to introduce.

## 3.5 Separate business rules from infrastructure

Business rule:

```php
$discount = $customer->isPremium() ? 0.10 : 0.00;
```

Infrastructure:

```php
$pdo->query(...);
```

Do not mix them unnecessarily.

---

# 4. Modern PHP Baseline

As of August 2026, supported PHP branches include PHP 8.2, 8.3, 8.4, and 8.5. For new code, choose a currently supported PHP version compatible with your deployment ecosystem.

A clean modern PHP project should normally prefer:

```php
<?php

declare(strict_types=1);
```

Then use:

- scalar and object type declarations;
- return types;
- typed properties;
- enums where appropriate;
- readonly data where appropriate;
- constructor property promotion when it improves readability;
- namespaces;
- Composer autoloading;
- exceptions instead of silent failure;
- automated tests;
- static analysis;
- automated formatting or code-style validation.

## 4.1 Avoid unnecessary legacy habits

Try not to build new applications around:

- manual `require_once` chains;
- global state;
- untyped public properties;
- magic strings everywhere;
- silent error suppression with `@`;
- SQL concatenation;
- huge procedural scripts;
- mixed HTML, SQL, authorization, validation, and business rules in one file.

Legacy systems may contain these patterns. Clean them incrementally rather than rewriting blindly.

---

# 5. Formatting and Coding Standards

Formatting should require almost no discussion during code review.

Modern PHP teams commonly use PHP-FIG coding standards and automated tooling.

PHP-FIG's **PER Coding Style** supersedes PSR-12. Existing projects may still explicitly use PSR-12, and that is normal.

## 5.1 Example

Prefer:

```php
final class InvoiceService
{
    public function calculateTotal(Invoice $invoice): Money
    {
        return $invoice->subtotal()
            ->add($invoice->tax())
            ->subtract($invoice->discount());
    }
}
```

Avoid inconsistent formatting:

```php
class InvoiceService{
public function calculateTotal($invoice){
return $invoice->subtotal()+$invoice->tax()-$invoice->discount();
}}
```

## 5.2 Automate style

Useful tools include:

- PHP_CodeSniffer (`phpcs`, `phpcbf`);
- PHP CS Fixer;
- IDE/editor formatting;
- CI quality gates.

Example Composer scripts:

```json
{
    "scripts": {
        "lint": "phpcs src tests",
        "fix": "phpcbf src tests",
        "analyse": "phpstan analyse",
        "test": "phpunit"
    }
}
```

The exact tool matters less than consistency.

---

# 6. Naming Things Well

Naming is one of the highest-impact clean-code skills.

## 6.1 Variables should describe meaning

Bad:

```php
$a = 500;
$b = 0.18;
$c = $a * $b;
```

Good:

```php
$subtotal = 500;
$taxRate = 0.18;
$taxAmount = $subtotal * $taxRate;
```

## 6.2 Avoid misleading names

Bad:

```php
$userList = new User();
```

`userList` sounds like a collection.

Better:

```php
$user = new User();
```

## 6.3 Avoid meaningless names

Bad:

```php
$data = getData();
$temp = process($data);
$result = save($temp);
```

Better:

```php
$invoice = $invoiceRepository->findById($invoiceId);
$validatedInvoice = $invoiceValidator->validate($invoice);
$savedInvoice = $invoiceRepository->save($validatedInvoice);
```

## 6.4 Use verbs for actions

Good method names:

```php
sendInvoice()
calculateTax()
findCustomerByEmail()
markAsPaid()
cancelOrder()
```

## 6.5 Use nouns for objects/data

```php
Invoice
Customer
PaymentGateway
OrderRepository
TaxCalculator
```

## 6.6 Boolean names should sound like yes/no questions

Good:

```php
$isActive
$hasPermission
$canEdit
$shouldRetry
```

Weak:

```php
$status
$flag
$check
```

## 6.7 Avoid type information in names when PHP already communicates it

Usually avoid:

```php
$userArray
$nameString
$totalFloat
```

Prefer domain meaning:

```php
$users
$name
$total
```

## 6.8 Avoid unexplained abbreviations

Bad:

```php
$usr
$invDt
$amt
$cfg
```

Better:

```php
$user
$invoiceDate
$amount
$config
```

Use abbreviations only when universally understood in your domain.

---

# 7. Variables and Data

## 7.1 Keep scope small

Bad:

```php
$total = 0;

// 100 lines later...

$total += $price;
```

The reader must remember `$total` across a large region.

Prefer declaring variables close to where they are used.

## 7.2 Avoid reusing variables for different meanings

Bad:

```php
$value = $_POST['amount'];
$value = (float) $value;
$value = $value * 1.18;
$value = number_format($value, 2);
```

Better:

```php
$rawAmount = $_POST['amount'] ?? '';
$amount = (float) $rawAmount;
$totalWithTax = $amount * 1.18;
$formattedTotal = number_format($totalWithTax, 2);
```

Even better: use validation and a Money object for financial code.

## 7.3 Prefer immutable data when possible

Mutation makes behavior harder to reason about.

Mutable:

```php
$user->name = 'A';
$user->name = 'B';
$user->name = 'C';
```

More controlled:

```php
$updatedUser = $user->rename('C');
```

Whether this is appropriate depends on your domain model.

## 7.4 Constants instead of magic values

Bad:

```php
if ($attempts > 5) {
    lockAccount();
}
```

Better:

```php
private const MAX_LOGIN_ATTEMPTS = 5;

if ($attempts > self::MAX_LOGIN_ATTEMPTS) {
    $this->lockAccount();
}
```

Better still, when configuration is environment-dependent, inject a configuration value.

---

# 8. Expressions and Conditions

Complex conditions increase cognitive load.

## 8.1 Extract intention-revealing conditions

Bad:

```php
if ($user->status === 'active' && $user->age >= 18 && !$user->isBlocked) {
    // ...
}
```

Better:

```php
if ($user->canPlaceOrder()) {
    // ...
}
```

Inside:

```php
public function canPlaceOrder(): bool
{
    return $this->status === UserStatus::Active
        && $this->age >= 18
        && !$this->isBlocked;
}
```

## 8.2 Prefer positive conditions

Harder:

```php
if (!$user->isNotEligible()) {
```

Better:

```php
if ($user->isEligible()) {
```

## 8.3 Guard clauses reduce nesting

Bad:

```php
function processOrder(?Order $order): void
{
    if ($order !== null) {
        if ($order->isPaid()) {
            if (!$order->isCancelled()) {
                ship($order);
            }
        }
    }
}
```

Better:

```php
function processOrder(?Order $order): void
{
    if ($order === null) {
        return;
    }

    if (!$order->isPaid()) {
        return;
    }

    if ($order->isCancelled()) {
        return;
    }

    ship($order);
}
```

## 8.4 Avoid deeply nested ternaries

Avoid:

```php
$label = $active ? ($admin ? 'Admin' : 'User') : ($deleted ? 'Deleted' : 'Inactive');
```

Prefer explicit control flow or a dedicated method.

---

# 9. Functions and Methods

A good function should do one understandable job.

## 9.1 One level of abstraction

Bad:

```php
function checkout(array $request): void
{
    $email = trim(strtolower($request['email']));
    $pdo = new PDO(...);
    $pdo->prepare('INSERT ...')->execute(...);
    mail($email, 'Order received', '...');
    file_put_contents('/tmp/order.log', '...');
}
```

This function mixes:

- input normalization;
- database access;
- email;
- logging.

Better:

```php
public function checkout(CheckoutRequest $request): Order
{
    $order = $this->orderFactory->createFrom($request);

    $this->orderRepository->save($order);
    $this->confirmationMailer->send($order);

    return $order;
}
```

## 9.2 Functions should be small enough to understand

There is no universal “maximum 10 lines” law.

Instead ask:

- Does this method have one clear responsibility?
- Is every line at roughly the same abstraction level?
- Can I name it accurately without “and”?
- Is there hidden business logic inside infrastructure code?

## 9.3 Avoid boolean parameters when meaning is unclear

Bad:

```php
generateReport(true, false);
```

What do `true` and `false` mean?

Better:

```php
generateReport(
    includeArchived: true,
    includeDetails: false,
);
```

Better when options form domain concepts:

```php
generateReport(new ReportOptions(
    includeArchived: true,
    includeDetails: false,
));
```

## 9.4 Command-query separation

A **command** changes state.

```php
$order->cancel();
```

A **query** returns information.

```php
$order->isCancelled();
```

Avoid methods that mysteriously do both.

Bad:

```php
$isValid = $order->validateAndSave();
```

Prefer:

```php
$validation = $validator->validate($order);
$repository->save($order);
```

---

# 10. Parameters and Return Values

## 10.1 Prefer few parameters

Hard to understand:

```php
createUser($name, $email, $phone, $country, $city, $zip, $role, $active);
```

Better:

```php
createUser(RegisterUserData $data);
```

## 10.2 Avoid output parameters

Avoid:

```php
function calculate(array $items, &$total): void
{
    // modifies $total
}
```

Prefer:

```php
function calculate(array $items): Money
{
    // ...
}
```

## 10.3 Return one predictable type

Bad:

```php
function findUser(int $id)
{
    if (...) {
        return $user;
    }

    if (...) {
        return false;
    }

    return null;
}
```

Better:

```php
function findUser(int $id): ?User
{
    // User or null
}
```

Or:

```php
function getUser(int $id): User
{
    throw UserNotFound::withId($id);
}
```

Pick semantics deliberately.

---

# 11. Types and Type Safety

Types are executable documentation.

## 11.1 Add parameter and return types

Weak:

```php
function add($a, $b)
{
    return $a + $b;
}
```

Better:

```php
function add(int $a, int $b): int
{
    return $a + $b;
}
```

## 11.2 Typed properties

```php
final class Customer
{
    public function __construct(
        private string $name,
        private string $email,
    ) {
    }
}
```

## 11.3 Use union types only when the domain truly permits multiple types

```php
function normalizeId(int|string $id): string
{
    return (string) $id;
}
```

Do not use broad unions to avoid designing a clean contract.

## 11.4 Prefer domain types to primitives

Primitive obsession:

```php
function pay(float $amount, string $currency): void
{
}
```

Better:

```php
function pay(Money $amount): void
{
}
```

## 11.5 `mixed` is a warning sign

`mixed` is sometimes necessary at system boundaries, serializers, generic libraries, or legacy integration points.

But inside business logic, repeated `mixed` often means the domain is not modeled clearly.

## 11.6 Use enums for closed sets

Bad:

```php
$status = 'PAID';
```

Better:

```php
enum PaymentStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Failed = 'failed';
}
```

---

# 12. Arrays, Collections, DTOs, and Value Objects

PHP arrays are flexible, but flexibility can hide bugs.

## 12.1 Problem with anonymous associative arrays

```php
$user = [
    'n' => 'Shoeb',
    'mail' => 'example@example.com',
    'stat' => 1,
];
```

What does `stat` mean?

What keys are required?

What types are valid?

## 12.2 Use a DTO for structured data

```php
final readonly class RegisterUserData
{
    public function __construct(
        public string $name,
        public string $email,
    ) {
    }
}
```

Usage:

```php
$data = new RegisterUserData(
    name: 'Aisha',
    email: 'aisha@example.com',
);
```

## 12.3 DTO vs Value Object

A **DTO** primarily transports data.

A **Value Object** represents a meaningful domain concept and usually enforces validity.

Example:

```php
final readonly class EmailAddress
{
    public function __construct(
        public string $value,
    ) {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException('Invalid email address.');
        }
    }
}
```

Now invalid email objects cannot be constructed.

## 12.4 Collection class

Instead of passing arbitrary arrays everywhere:

```php
final class OrderItems
{
    /** @var list<OrderItem> */
    private array $items;

    public function __construct(OrderItem ...$items)
    {
        $this->items = $items;
    }

    public function total(): Money
    {
        // ...
    }
}
```

This can centralize collection-related business rules.

---

# 13. Classes and Objects

A class should represent a clear responsibility or concept.

Bad “god class”:

```php
class AppHelper
{
    public function validateUser() {}
    public function sendEmail() {}
    public function calculateTax() {}
    public function uploadFile() {}
    public function queryDatabase() {}
}
```

Better:

```text
UserValidator
Mailer
TaxCalculator
FileStorage
UserRepository
```

## 13.1 Class names should explain responsibility

Good:

```text
InvoiceRepository
PaymentProcessor
OrderPolicy
CustomerService
TaxCalculator
```

Questionable:

```text
Manager
Helper
Utility
Common
Processor
Handler
Data
```

These names are not always wrong, but they often hide vague responsibilities.

## 13.2 Prefer final by default when inheritance is not part of the design

```php
final class TaxCalculator
{
}
```

This communicates that extension should happen through composition, not accidental subclassing.

---

# 14. Encapsulation

Encapsulation means protecting internal state and exposing meaningful operations.

Bad:

```php
class BankAccount
{
    public float $balance;
}
```

Anything can set:

```php
$account->balance = -999999;
```

Better:

```php
final class BankAccount
{
    public function __construct(
        private int $balanceInCents,
    ) {
    }

    public function deposit(int $amountInCents): void
    {
        if ($amountInCents <= 0) {
            throw new InvalidArgumentException('Deposit must be positive.');
        }

        $this->balanceInCents += $amountInCents;
    }

    public function balanceInCents(): int
    {
        return $this->balanceInCents;
    }
}
```

The object protects its invariant.

---

# 15. Inheritance vs Composition

Inheritance means:

> “A is a specialized B.”

Composition means:

> “A uses B.”

Prefer composition unless inheritance genuinely models the relationship.

## 15.1 Fragile inheritance

```php
class BaseReport
{
    public function export(): void
    {
        // ...
    }
}

class SalesReport extends BaseReport
{
}
```

This may be fine, but subclasses become coupled to base-class behavior.

## 15.2 Composition

```php
final class SalesReport
{
    public function __construct(
        private ReportExporter $exporter,
    ) {
    }
}
```

Now exporting behavior can vary independently.

---

# 16. Interfaces and Abstractions

An interface describes a contract.

```php
interface PaymentGateway
{
    public function charge(Money $amount, PaymentToken $token): PaymentResult;
}
```

Implementations:

```php
final class StripePaymentGateway implements PaymentGateway
{
    // ...
}

final class FakePaymentGateway implements PaymentGateway
{
    // useful in tests
}
```

## When to create an interface

Good reasons:

- multiple implementations exist;
- external infrastructure needs abstraction;
- the boundary is strategically important;
- tests benefit from substituting behavior;
- application/domain layer should not depend on vendor code.

Weak reason:

> “Every class must have an interface.”

Do not create abstractions with no purpose.

---

# 17. SOLID Principles

SOLID is a group of design principles for maintainable object-oriented systems.

---

## 17.1 S — Single Responsibility Principle

A class should have one reason to change.

Bad:

```php
final class Invoice
{
    public function calculateTotal(): float {}
    public function saveToDatabase(): void {}
    public function sendEmail(): void {}
    public function renderHtml(): string {}
}
```

This class changes when:

- pricing changes;
- database changes;
- email changes;
- HTML changes.

Better:

```text
Invoice
InvoiceRepository
InvoiceMailer
InvoiceRenderer
```

---

## 17.2 O — Open/Closed Principle

Software should be open for extension but closed for unnecessary modification.

Bad:

```php
function discount(string $type, float $price): float
{
    if ($type === 'regular') {
        return $price;
    }

    if ($type === 'premium') {
        return $price * 0.90;
    }

    if ($type === 'vip') {
        return $price * 0.80;
    }

    return $price;
}
```

Every new customer type changes the function.

Alternative:

```php
interface DiscountPolicy
{
    public function apply(Money $price): Money;
}
```

Implementations:

```php
final class PremiumDiscount implements DiscountPolicy
{
    public function apply(Money $price): Money
    {
        return $price->multiply(0.90);
    }
}
```

Do not overengineer a two-line rule, but recognize when change frequency justifies abstraction.

---

## 17.3 L — Liskov Substitution Principle

A subtype should be usable wherever its parent type is expected without surprising behavior.

Bad conceptual design:

```php
class Bird
{
    public function fly(): void {}
}

class Penguin extends Bird
{
    public function fly(): void
    {
        throw new LogicException('Penguins cannot fly.');
    }
}
```

The abstraction is wrong.

Better:

```php
interface Bird
{
}

interface FlyingBird extends Bird
{
    public function fly(): void;
}
```

---

## 17.4 I — Interface Segregation Principle

Do not force clients to depend on methods they do not need.

Bad:

```php
interface Machine
{
    public function print(): void;
    public function scan(): void;
    public function fax(): void;
}
```

A simple printer must implement irrelevant methods.

Better:

```php
interface Printer
{
    public function print(): void;
}

interface Scanner
{
    public function scan(): void;
}
```

---

## 17.5 D — Dependency Inversion Principle

High-level business logic should depend on abstractions, not concrete infrastructure.

Bad:

```php
final class CheckoutService
{
    private StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient('secret');
    }
}
```

Better:

```php
final class CheckoutService
{
    public function __construct(
        private PaymentGateway $paymentGateway,
    ) {
    }
}
```

Infrastructure is injected from outside.

---

# 18. DRY, KISS, YAGNI, and Related Principles

## 18.1 DRY — Don't Repeat Yourself

DRY means avoiding duplicated *knowledge*, not merely duplicated text.

Two identical-looking lines may represent different business rules.

Bad abstraction:

```php
function calculateEverything($type, $x, $y, $z, $special = false)
```

created only to remove a few duplicate lines.

Prefer a little duplication over the wrong abstraction.

## 18.2 KISS — Keep It Simple

Prefer the simplest design that clearly solves the current problem.

Avoid turning:

```php
$fullName = $firstName . ' ' . $lastName;
```

into a hierarchy of factories, builders, and format strategies without a need.

## 18.3 YAGNI — You Aren't Gonna Need It

Do not build speculative features.

Bad thought:

> “Maybe in three years we will support twelve databases, so I will write my own ORM abstraction now.”

Build extension points when real requirements justify them.

## 18.4 Rule of Three

If logic is duplicated once, observe it.

If the same concept appears a third time, abstraction may now be justified.

Not a law—just a useful heuristic.

---

# 19. Coupling and Cohesion

## Coupling

How strongly one module depends on another.

Lower coupling generally makes change easier.

## Cohesion

How strongly the contents of a module belong together.

High cohesion is usually desirable.

Bad:

```php
final class Utility
{
    public function hashPassword() {}
    public function calculateTax() {}
    public function resizeImage() {}
}
```

Low cohesion.

Better:

```text
PasswordHasher
TaxCalculator
ImageResizer
```

---

# 20. Dependency Injection

Dependency injection supplies dependencies from outside a class.

Bad:

```php
final class UserService
{
    public function register(User $user): void
    {
        $mailer = new Mailer();
        $database = new Database();

        // ...
    }
}
```

Better:

```php
final class UserService
{
    public function __construct(
        private UserRepository $users,
        private Mailer $mailer,
    ) {
    }

    public function register(User $user): void
    {
        $this->users->save($user);
        $this->mailer->sendWelcomeMessage($user);
    }
}
```

Benefits:

- easier testing;
- explicit dependencies;
- lower coupling;
- easier substitution;
- fewer hidden global dependencies.

## Avoid service locator abuse

Avoid:

```php
$container->get('mailer');
$container->get('database');
```

inside every business class.

Dependency injection is clearer when constructor dependencies are explicit.

---

# 21. Exceptions and Error Handling

Errors should be intentional and observable.

## 21.1 Do not swallow exceptions

Bad:

```php
try {
    $gateway->charge($amount);
} catch (Throwable $e) {
}
```

The application loses the failure.

Better:

```php
try {
    $gateway->charge($amount);
} catch (GatewayTimeout $e) {
    $this->logger->warning('Payment gateway timed out.', [
        'order_id' => $order->id(),
        'exception' => $e,
    ]);

    throw PaymentFailed::gatewayUnavailable(previous: $e);
}
```

## 21.2 Catch only when you can do something useful

Useful reasons:

- recover;
- add context;
- translate infrastructure exceptions to domain/application exceptions;
- compensate;
- retry appropriately;
- return a proper boundary response.

## 21.3 Avoid exceptions for normal branching

Bad:

```php
try {
    return $users->find($id);
} catch (Throwable $e) {
    return null;
}
```

If “not found” is expected, model it deliberately.

## 21.4 Domain-specific exceptions

```php
final class InsufficientBalance extends DomainException
{
}
```

is clearer than:

```php
throw new Exception('error');
```

---

# 22. Null Handling and Optional Data

Null is useful, but uncontrolled nullability spreads complexity.

## 22.1 Be explicit

```php
public function findById(int $id): ?User
```

clearly communicates that absence is possible.

## 22.2 Avoid returning null from methods that promise existence

```php
public function getById(int $id): User
{
    return $this->findById($id)
        ?? throw UserNotFound::withId($id);
}
```

## 22.3 Nullsafe operator

Useful:

```php
$country = $customer->address()?->country();
```

But if the business requires an address, silently accepting null may hide a broken invariant.

---

# 23. Comments and Documentation

Good code explains **what**.

Comments should often explain **why**.

Bad:

```php
// increment i by one
$i++;
```

Useful:

```php
// The partner API rejects duplicate timestamps, so add one second
// when multiple events are generated in the same clock tick.
$timestamp = $timestamp->modify('+1 second');
```

## 23.1 Do not use comments to rescue unreadable code

Bad:

```php
// Check if user can get discount
if ($u->s == 1 && $u->o > 20 && !$u->b) {
```

Better:

```php
if ($user->isEligibleForLoyaltyDiscount()) {
```

## 23.2 PHPDoc

Use PHPDoc when it adds information that PHP's native type system cannot fully express.

Example:

```php
/** @return list<User> */
public function activeUsers(): array
{
}
```

Do not add noisy documentation:

```php
/**
 * Get name.
 *
 * @return string
 */
public function name(): string
{
}
```

if it adds no value.

---

# 24. Database Code

Database code is a common source of security, reliability, and maintainability problems.

## 24.1 Never concatenate untrusted values into SQL

Bad:

```php
$sql = "SELECT * FROM users WHERE email = '$email'";
```

Better:

```php
$stmt = $pdo->prepare(
    'SELECT id, name, email FROM users WHERE email = :email'
);

$stmt->execute([
    'email' => $email,
]);
```

## 24.2 Select only what you need

Avoid:

```sql
SELECT *
```

when only three columns are needed.

Prefer:

```sql
SELECT id, name, email
```

Benefits:

- clearer data contract;
- lower transfer;
- less accidental coupling;
- safer schema evolution.

## 24.3 Repositories should hide persistence details

Instead of SQL scattered through controllers:

```php
final class PdoUserRepository implements UserRepository
{
    public function findByEmail(EmailAddress $email): ?User
    {
        // query and map
    }
}
```

## 24.4 Transactions for atomic workflows

If multiple writes must succeed or fail together:

```php
$pdo->beginTransaction();

try {
    $orders->save($order);
    $payments->record($payment);

    $pdo->commit();
} catch (Throwable $e) {
    $pdo->rollBack();
    throw $e;
}
```

Keep transaction boundaries deliberate.

## 24.5 Beware N+1 queries

Bad conceptual flow:

```php
foreach ($orders as $order) {
    $customer = $customerRepository->find($order->customerId());
}
```

This can execute hundreds of queries.

Batch or eager-load where appropriate.

---

# 25. Security-Oriented Clean Code

Security is part of code quality.

Clean security-oriented code makes the safe path obvious.

Principles:

- distrust external input;
- validate at boundaries;
- encode output for its context;
- use prepared SQL;
- use modern password APIs;
- keep secrets out of source code;
- authorize every protected action;
- use least privilege;
- log security-relevant events without leaking secrets;
- keep dependencies supported and patched.

## Never rely on obscurity

Bad:

```php
if ($_GET['secret'] === '12345') {
    deleteEverything();
}
```

Use proper authentication and authorization.

---

# 26. Input Validation and Output Encoding

Validation and escaping are different.

**Validation:** Is this input acceptable?

**Output encoding:** Is this value safe for the destination context?

## 26.1 Validate at boundaries

```php
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($email === false || $email === null) {
    throw new InvalidArgumentException('A valid email is required.');
}
```

For serious applications, dedicated request validation is often preferable.

## 26.2 Encode HTML output

```php
echo htmlspecialchars(
    $userProvidedName,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);
```

## 26.3 Context matters

HTML encoding is not the same as:

- URL encoding;
- JavaScript encoding;
- SQL parameterization;
- shell escaping.

Use the correct defense for the destination.

---

# 27. Authentication and Password Handling

Never store plain-text passwords.

Use PHP's password APIs.

```php
$hash = password_hash($password, PASSWORD_DEFAULT);
```

Verify:

```php
if (!password_verify($password, $storedHash)) {
    throw new AuthenticationFailed();
}
```

Rehash when algorithm parameters evolve:

```php
if (password_needs_rehash($storedHash, PASSWORD_DEFAULT)) {
    $newHash = password_hash($password, PASSWORD_DEFAULT);
    // persist safely
}
```

## Never implement your own password hashing algorithm

Avoid:

```php
md5($password);
sha1($password);
hash('sha256', $password);
```

Raw general-purpose hashes are not suitable password-storage strategies.

---

# 28. File and Upload Handling

Uploads are untrusted input.

Do not trust:

- original filename;
- extension;
- browser-provided MIME type;
- image metadata;
- file contents.

Safer workflow:

1. enforce size limits;
2. inspect content/type server-side;
3. generate your own storage filename;
4. store outside executable web roots when possible;
5. scan or transform files if the risk requires it;
6. authorize access to private files;
7. never construct arbitrary filesystem paths directly from user input.

Bad:

```php
move_uploaded_file(
    $_FILES['file']['tmp_name'],
    __DIR__ . '/uploads/' . $_FILES['file']['name']
);
```

Better architecture:

```php
$storedFile = $uploadService->store(
    UploadRequest::fromPhpFiles($_FILES['file'])
);
```

where the service owns all validation and naming rules.

---

# 29. HTTP/API Clean Code

Controllers should coordinate, not contain the whole application.

Bad:

```php
public function create()
{
    // validate 40 fields
    // write SQL
    // calculate tax
    // send email
    // create audit log
    // build response
}
```

Better:

```php
public function create(CreateOrderRequest $request): Response
{
    $command = $request->toCommand();

    $order = $this->createOrder->handle($command);

    return $this->responses->created(
        OrderResource::from($order)
    );
}
```

## 29.1 Use meaningful status codes

Examples:

- `200 OK` — successful retrieval/update;
- `201 Created` — created resource;
- `204 No Content` — successful action with no response body;
- `400 Bad Request` — malformed request;
- `401 Unauthorized` — authentication required/failed;
- `403 Forbidden` — authenticated but not allowed;
- `404 Not Found` — resource absent;
- `409 Conflict` — state conflict;
- `422 Unprocessable Content` — semantically invalid input in many APIs;
- `500 Internal Server Error` — unexpected server failure.

## 29.2 Stable response shapes

Avoid endpoints where error responses have random structures.

Prefer a consistent format such as:

```json
{
    "error": {
        "code": "ORDER_NOT_PAYABLE",
        "message": "The order cannot be paid in its current state."
    }
}
```

---

# 30. Configuration and Environment Management

Do not hard-code environment-specific values.

Bad:

```php
$databasePassword = 'ProdPassword123';
```

Better:

```php
$databasePassword = $_ENV['DB_PASSWORD'];
```

Use a configuration layer rather than accessing environment variables everywhere.

```php
final readonly class DatabaseConfig
{
    public function __construct(
        public string $dsn,
        public string $username,
        public string $password,
    ) {
    }
}
```

## Secrets

Do not commit:

- production passwords;
- private keys;
- API secrets;
- access tokens;
- database credentials.

---

# 31. Logging and Observability

Logging should help answer:

- What happened?
- When?
- For which request/order/user?
- What failed?
- Can we reproduce it?

Good structured log:

```php
$this->logger->error('Invoice posting failed.', [
    'invoice_id' => $invoice->id(),
    'company_id' => $invoice->companyId(),
    'exception' => $e,
]);
```

Bad:

```php
$this->logger->error('Error');
```

## Never log secrets

Avoid:

```php
$this->logger->info('Login', [
    'password' => $password,
]);
```

Also avoid blindly logging:

- tokens;
- authorization headers;
- session identifiers;
- full card data;
- private personal information.

---

# 32. Testing Clean PHP

Tests are not only for catching bugs.

Well-designed tests encourage better code structure.

## 32.1 Unit test

Tests one small unit, normally without real external infrastructure.

Example:

```php
final class DiscountCalculatorTest extends TestCase
{
    public function testPremiumCustomersReceiveTenPercentDiscount(): void
    {
        $calculator = new DiscountCalculator();

        $result = $calculator->for(
            CustomerType::Premium,
            Money::fromCents(10_000),
        );

        self::assertSame(9_000, $result->cents());
    }
}
```

## 32.2 Integration test

Tests collaboration with real infrastructure or a meaningful integration boundary.

Examples:

- repository with database;
- HTTP client with test server;
- queue adapter;
- filesystem adapter.

## 32.3 End-to-end test

Exercises a large part of the system like a real user or client.

## 32.4 Arrange–Act–Assert

```php
// Arrange
$order = OrderBuilder::paid();

// Act
$order->cancel();

// Assert
self::assertTrue($order->isCancelled());
```

## 32.5 Test behavior, not implementation details

Fragile:

```php
self::assertSame(3, $service->internalCounter);
```

Better:

```php
self::assertTrue($order->isEligibleForShipping());
```

## 32.6 Tests should communicate business rules

Good name:

```php
testCannotCancelAnOrderAfterShipment()
```

Weak:

```php
testCase1()
```

---

# 33. Static Analysis and Automated Quality Tools

Humans should review design and behavior.

Machines should catch mechanical problems.

A strong PHP quality pipeline may include:

```text
Syntax/lint
↓
Formatter / coding standard
↓
Static analysis
↓
Unit tests
↓
Integration tests
↓
Security/dependency checks
↓
Build/deploy
```

## 33.1 PHPStan

PHPStan can analyze PHP without executing it.

Typical command:

```bash
vendor/bin/phpstan analyse src tests
```

PHPStan provides rule levels from 0 through 10. Teams can adopt it gradually.

## 33.2 PHP_CodeSniffer

Check:

```bash
vendor/bin/phpcs src tests
```

Auto-fix supported violations:

```bash
vendor/bin/phpcbf src tests
```

## 33.3 PHP CS Fixer

```bash
vendor/bin/php-cs-fixer check
vendor/bin/php-cs-fixer fix
```

## 33.4 PHPUnit

```bash
vendor/bin/phpunit
```

Choose a PHPUnit major version compatible with the PHP version used by the project.

## 33.5 Composer audit

In Composer-based projects:

```bash
composer audit
```

Use dependency checks in CI.

## 33.6 Example quality script

```json
{
    "scripts": {
        "quality": [
            "@lint",
            "@analyse",
            "@test"
        ],
        "lint": "phpcs src tests",
        "analyse": "phpstan analyse",
        "test": "phpunit"
    }
}
```

---

# 34. Refactoring

Refactoring changes internal structure without intentionally changing observable behavior.

Good refactoring cycle:

```text
Understand
↓
Add/confirm tests
↓
Make one small change
↓
Run tests
↓
Commit
↓
Repeat
```

## 34.1 Extract method

Before:

```php
if ($customer->ordersCount() > 10 && $customer->totalSpent() > 100000) {
    $discount = 0.15;
}
```

After:

```php
if ($customer->isHighValueCustomer()) {
    $discount = 0.15;
}
```

## 34.2 Replace magic string with enum

Before:

```php
if ($invoice->status === 'POSTED') {
```

After:

```php
if ($invoice->status() === InvoiceStatus::Posted) {
```

## 34.3 Introduce parameter object

Before:

```php
search($query, $status, $page, $limit, $sort, $direction);
```

After:

```php
search(new InvoiceSearchCriteria(
    query: $query,
    status: $status,
    page: $page,
    limit: $limit,
    sort: $sort,
    direction: $direction,
));
```

## 34.4 Replace conditional with polymorphism

Use only when conditional variation is stable and meaningful.

Do not mechanically replace every `if` with classes.

---

# 35. Common Code Smells

A code smell is not automatically a bug. It is a signal to inspect the design.

## 35.1 Long method

Symptoms:

- multiple sections;
- many nested branches;
- comments acting as headings;
- hard to name.

Treatment:

- extract cohesive operations;
- improve domain model;
- split orchestration from detail.

## 35.2 Large class

Symptoms:

- many unrelated methods;
- too many dependencies;
- changes for many unrelated reasons.

Treatment:

- identify responsibilities;
- extract collaborators.

## 35.3 Long parameter list

Treatment:

- DTO;
- value object;
- configuration object;
- split responsibility.

## 35.4 Feature envy

A method spends most of its time reading another object's data.

Maybe the behavior belongs on that other object.

## 35.5 Primitive obsession

Domain ideas represented only by strings/ints/floats.

Examples:

```text
email -> string
money -> float
status -> string
country code -> string
invoice number -> string
```

Some deserve domain types.

## 35.6 Shotgun surgery

One small requirement requires edits across many files.

Likely duplicated knowledge or poor boundaries.

## 35.7 Divergent change

One class changes for many unrelated requirements.

Likely too many responsibilities.

## 35.8 Dead code

Delete code that is no longer used.

Version control remembers history.

Do not preserve obsolete code as comments.

---

# 36. Common PHP Anti-Patterns

## 36.1 Global variables

Avoid:

```php
global $pdo;
```

Prefer dependency injection.

## 36.2 Static utility dumping grounds

Avoid classes like:

```php
CommonHelper::doEverything();
```

when dependencies and responsibilities become hidden.

## 36.3 Hidden mutation

Avoid functions that unexpectedly modify input arrays by reference.

## 36.4 Error suppression

Avoid:

```php
@$file = file_get_contents($path);
```

Handle failure explicitly.

## 36.5 Mixing HTML, SQL, and business logic

Legacy:

```php
<?php
$sql = "SELECT * FROM orders WHERE user_id = " . $_GET['id'];
$result = mysqli_query($db, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    echo '<div>' . $row['name'] . '</div>';
}
?>
```

Problems:

- injection risk;
- no authorization boundary;
- database logic in view;
- unescaped output;
- difficult testing.

## 36.6 Catching `Throwable` everywhere

Catching broad failures at top-level boundaries is reasonable.

Catching `Throwable` deep in every method often hides programming errors.

## 36.7 Returning magic arrays

Avoid:

```php
return [
    'status' => 1,
    'msg' => 'ok',
    'd' => $data,
];
```

Prefer stable DTOs or response objects.

## 36.8 Massive base classes

Avoid one `BaseController` containing 80 helpers used by unrelated modules.

---

# 37. Clean Architecture and Layering

Clean architecture is primarily about **dependency direction**.

A practical layered PHP application can use:

```text
Presentation
    ↓
Application
    ↓
Domain
    ↑
Infrastructure implements interfaces required by inner layers
```

## Presentation

Examples:

- controllers;
- CLI commands;
- HTTP request/response mapping;
- views.

## Application

Use cases:

```text
CreateOrder
ApproveInvoice
RegisterCustomer
CancelPayment
```

Coordinates domain objects and ports.

## Domain

Business concepts and rules:

```text
Order
Invoice
Money
ApprovalPolicy
PaymentStatus
```

Should know as little as possible about frameworks and databases.

## Infrastructure

Technical details:

```text
PDO repositories
SMTP mailer
S3 storage
Redis cache
external API clients
```

## Example structure

```text
src/
├── Domain/
│   ├── Order/
│   │   ├── Order.php
│   │   ├── OrderStatus.php
│   │   ├── OrderRepository.php
│   │   └── OrderItem.php
│   └── Shared/
│       └── Money.php
├── Application/
│   └── Order/
│       ├── CreateOrder.php
│       └── CreateOrderCommand.php
├── Infrastructure/
│   ├── Persistence/
│   │   └── PdoOrderRepository.php
│   └── Mail/
│       └── SmtpOrderMailer.php
└── Presentation/
    └── Http/
        └── CreateOrderController.php
```

This is one possible structure—not a universal law.

---

# 38. Repositories, Services, DTOs, and Domain Objects

These names are frequently overused. Understand their purpose.

## 38.1 Repository

Abstracts persistence of domain objects.

```php
interface InvoiceRepository
{
    public function get(InvoiceId $id): Invoice;

    public function save(Invoice $invoice): void;
}
```

Do not turn a repository into a random query/helper bucket.

## 38.2 Application service/use case

Coordinates a business workflow.

```php
final class ApproveInvoice
{
    public function __construct(
        private InvoiceRepository $invoices,
        private AuthorizationService $authorization,
    ) {
    }

    public function handle(ApproveInvoiceCommand $command): void
    {
        $invoice = $this->invoices->get($command->invoiceId);

        $this->authorization->assertCanApprove(
            $command->approverId,
            $invoice
        );

        $invoice->approve($command->approverId);

        $this->invoices->save($invoice);
    }
}
```

## 38.3 Domain service

Use when domain behavior does not naturally belong to one entity/value object.

Do not create a “service” merely because you do not know where code belongs.

## 38.4 DTO

Transports data across boundaries.

DTOs usually should not become giant business-logic objects.

---

# 39. Design Patterns Worth Knowing

Patterns are vocabulary, not goals.

## 39.1 Strategy

Use when behavior varies.

```php
interface ShippingCostPolicy
{
    public function costFor(Order $order): Money;
}
```

Examples:

```text
StandardShipping
ExpressShipping
InternationalShipping
```

## 39.2 Factory

Use when object creation is non-trivial.

```php
final class PaymentRequestFactory
{
    public function fromOrder(Order $order): PaymentRequest
    {
        // ...
    }
}
```

## 39.3 Adapter

Wrap a vendor API behind your own interface.

```php
interface SmsSender
{
    public function send(PhoneNumber $to, string $message): void;
}
```

Then:

```php
final class TwilioSmsSender implements SmsSender
{
}
```

## 39.4 Decorator

Add behavior around another implementation.

```text
CachedProductRepository
LoggingPaymentGateway
RetryingHttpClient
```

## 39.5 Observer/Event

Useful for decoupling secondary reactions.

Example:

```text
OrderPlaced
├── SendConfirmationEmail
├── ReserveInventory
└── PublishAnalyticsEvent
```

Be careful: excessive event chains can make control flow difficult to understand.

## 39.6 Null Object

Instead of repeated null checks:

```php
interface Logger
{
    public function info(string $message): void;
}
```

You might use:

```php
final class NullLogger implements Logger
{
    public function info(string $message): void
    {
    }
}
```

Use standard ecosystem interfaces where appropriate rather than inventing duplicates.

---

# 40. Performance Without Destroying Readability

Do not optimize based on guesses.

Measure first.

Useful sequence:

```text
Correctness
↓
Clarity
↓
Measurement
↓
Optimization
↓
Re-measure
```

High-impact areas often include:

- database query count;
- indexes;
- external API latency;
- filesystem/network I/O;
- serialization;
- repeated expensive computation;
- N+1 queries;
- oversized payloads;
- unbounded loops/data loads.

## 40.1 Avoid premature micro-optimization

Do not make readable code obscure to save a few nanoseconds without evidence.

## 40.2 Composer autoloader optimization

For production builds, Composer supports optimized autoloading modes.

Common deployment:

```bash
composer install --no-dev --optimize-autoloader
```

Apply options appropriate to your runtime and deployment model.

---

# 41. Concurrency, Jobs, and Idempotency

Clean code must handle the fact that real systems can run the same operation twice.

## 41.1 Idempotency

An idempotent operation can be repeated without creating unintended duplicate effects.

Example problem:

```text
Payment webhook arrives
↓
Server times out
↓
Provider retries webhook
↓
Payment is recorded twice
```

Use an external event/payment ID as an idempotency key.

Conceptually:

```php
if ($processedEvents->exists($eventId)) {
    return;
}

$transaction->run(function () use ($eventId, $payment): void {
    $payments->record($payment);
    $processedEvents->markProcessed($eventId);
});
```

## 41.2 Job retry safety

Jobs may be retried.

Avoid jobs that assume:

> “This will run exactly once.”

## 41.3 Locking

When two workers can modify the same state, consider:

- database transactions;
- row locks;
- optimistic versioning;
- distributed locks where justified;
- unique constraints.

Correctness should not depend only on application-level `if` checks.

---

# 42. Dates, Money, and Other Dangerous Data

Some primitive data types hide major complexity.

## 42.1 Money

Avoid floating point for exact financial accounting.

Risky:

```php
$price = 0.1 + 0.2;
```

For financial systems, consider integer minor units or a dedicated money library/object.

Example:

```php
final readonly class Money
{
    public function __construct(
        public int $cents,
        public string $currency,
    ) {
    }
}
```

## 42.2 Dates

Use immutable date objects where possible:

```php
$createdAt = new DateTimeImmutable();
```

Be explicit about timezone.

Avoid ambiguous business rules like:

```php
if ($date == 'today')
```

Prefer explicit domain methods and normalized timezone handling.

## 42.3 Identifiers

Do not assume all IDs are safe as integers forever.

For cross-system identifiers, UUIDs, invoice numbers, SGIDs, employee codes, etc., use types that match the real domain.

---

# 43. Legacy PHP Cleanup Strategy

Do not rewrite a large legacy application just because it looks old.

A safer approach is incremental.

## Step 1: establish safety

Add:

- version control;
- reproducible environment;
- error logging;
- smoke tests;
- backups;
- basic CI.

## Step 2: characterize behavior

Before changing complex legacy code, write tests around current behavior.

These are often called characterization tests.

## Step 3: create seams

Extract external dependencies:

```text
database
filesystem
email
HTTP calls
global state
```

behind manageable boundaries.

## Step 4: add types gradually

Start with new code and stable areas.

Then tighten old code incrementally.

## Step 5: replace globals

Move from:

```php
global $db;
```

to constructor injection.

## Step 6: extract business rules

Move logic from:

```text
controller/view/database script
```

into testable classes.

## Step 7: replace unsafe SQL

Prioritize string-concatenated SQL with untrusted input.

## Step 8: increase static-analysis level gradually

Do not demand maximum strictness on day one if the codebase has thousands of errors.

Create a baseline, fix new violations, then reduce debt.

---

# 44. Framework-Specific Guidance

Clean-code principles remain useful across frameworks, but framework conventions matter.

## Laravel

Prefer:

- request validation;
- service/container injection;
- Eloquent relationships intentionally;
- query scopes for meaningful reusable filters;
- policies/gates for authorization;
- jobs for asynchronous work;
- events/listeners when decoupling is valuable;
- Form Requests / DTOs when controllers become noisy.

Avoid:

- massive controllers;
- massive Eloquent models;
- calling `DB::` throughout domain logic;
- hiding every business rule inside generic helpers.

## Symfony

Prefer:

- explicit services;
- constructor injection;
- request/response DTOs where useful;
- validator constraints;
- Messenger for asynchronous workflows;
- domain/application boundaries for complex systems.

## CodeIgniter

For older CodeIgniter applications especially:

- keep controllers thin;
- move query logic into repositories/models;
- avoid giant “common model” classes;
- centralize input validation;
- isolate legacy helpers;
- gradually introduce Composer autoloading and namespaces where project constraints permit.

## WordPress

WordPress has its own conventions and ecosystem constraints.

Do not blindly force generic PHP-FIG style onto a codebase that intentionally follows WordPress Coding Standards.

Still apply clean-code principles:

- small functions;
- capability checks;
- nonce verification where applicable;
- sanitization and escaping;
- prepared database queries;
- clear plugin boundaries;
- avoid global-state sprawl where possible.

---

# 45. Code Review Master Checklist

Use this before approving a pull request.

## Intent and readability

- [ ] Can I understand what the change does?
- [ ] Are names meaningful?
- [ ] Are responsibilities clear?
- [ ] Is any code unnecessarily clever?
- [ ] Are business rules explicit?

## Functions

- [ ] Does each method have a clear purpose?
- [ ] Are parameter lists manageable?
- [ ] Are return types predictable?
- [ ] Is nesting reasonable?
- [ ] Would guard clauses improve readability?

## Types

- [ ] Are parameter and return types present where practical?
- [ ] Are nullable values intentional?
- [ ] Are domain concepts modeled clearly?
- [ ] Are magic strings better represented by enums/constants?

## Classes

- [ ] Does each class have a focused responsibility?
- [ ] Is encapsulation preserved?
- [ ] Is inheritance actually appropriate?
- [ ] Are dependencies explicit?

## Error handling

- [ ] Are exceptions swallowed?
- [ ] Are errors translated at proper boundaries?
- [ ] Are logs useful?
- [ ] Are error messages safe for users?

## Database

- [ ] Are queries parameterized?
- [ ] Are transactions correct?
- [ ] Is there an N+1 query risk?
- [ ] Are indexes likely needed?
- [ ] Is persistence logic duplicated?

## Security

- [ ] Is input validated?
- [ ] Is output encoded?
- [ ] Is authorization checked?
- [ ] Are secrets protected?
- [ ] Is sensitive information excluded from logs?
- [ ] Are uploads handled safely?

## Testing

- [ ] Is new behavior tested?
- [ ] Are edge cases covered?
- [ ] Are tests readable?
- [ ] Do tests verify behavior rather than internals?
- [ ] Are bug fixes accompanied by regression tests?

## Maintainability

- [ ] Is code duplicated?
- [ ] Is abstraction premature?
- [ ] Is configuration hard-coded?
- [ ] Will another developer understand this six months later?

---

# 46. Production Readiness Checklist

- [ ] Supported PHP version
- [ ] Production error display disabled
- [ ] Error logging configured
- [ ] Secrets outside source repository
- [ ] Dependencies installed reproducibly
- [ ] `composer.lock` reviewed/committed for applications
- [ ] Optimized Composer autoloader as appropriate
- [ ] Database migrations tested
- [ ] Rollback/recovery approach known
- [ ] Health checks available
- [ ] Logs centralized where appropriate
- [ ] Metrics/tracing available for important services
- [ ] Timeouts configured for external calls
- [ ] Retries use backoff and are safe
- [ ] Jobs are idempotent
- [ ] Inputs validated
- [ ] Authorization reviewed
- [ ] Uploads secured
- [ ] Prepared SQL used
- [ ] Passwords use password hashing APIs
- [ ] Rate limiting applied where needed
- [ ] Static analysis passes
- [ ] Automated tests pass
- [ ] Dependency/security audit passes
- [ ] Backup restore process tested
- [ ] Monitoring/alerts configured

---

# 47. Scenario-Based Refactoring Examples

This section combines multiple principles in realistic situations.

---

## Scenario 1 — User Registration

### Dirty version

```php
function register()
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($name == '' || $email == '' || $password == '') {
        echo 'Invalid';
        return;
    }

    $password = md5($password);

    $db = mysqli_connect('localhost', 'root', '', 'app');

    mysqli_query(
        $db,
        "INSERT INTO users(name,email,password)
         VALUES('$name','$email','$password')"
    );

    mail($email, 'Welcome', 'Welcome!');
    echo 'Done';
}
```

### Problems

- direct superglobal access;
- weak validation;
- SQL injection;
- MD5 password hashing;
- connection configuration hard-coded;
- business workflow mixed with HTTP;
- direct email call;
- no duplicate-email handling;
- no error strategy;
- hard to test.

### Cleaner design

```php
final readonly class RegisterUserCommand
{
    public function __construct(
        public string $name,
        public EmailAddress $email,
        public string $plainPassword,
    ) {
    }
}
```

```php
final class RegisterUser
{
    public function __construct(
        private UserRepository $users,
        private PasswordHasher $passwordHasher,
        private WelcomeMailer $mailer,
    ) {
    }

    public function handle(RegisterUserCommand $command): User
    {
        if ($this->users->existsByEmail($command->email)) {
            throw EmailAlreadyRegistered::for($command->email);
        }

        $user = User::register(
            name: $command->name,
            email: $command->email,
            passwordHash: $this->passwordHasher->hash(
                $command->plainPassword
            ),
        );

        $this->users->save($user);
        $this->mailer->sendTo($user);

        return $user;
    }
}
```

Now infrastructure can vary independently.

---

## Scenario 2 — Invoice Approval

### Dirty version

```php
if (
    $invoice['status'] == 2 &&
    $user['role'] == 'FINANCE' &&
    $invoice['amount'] <= $user['limit']
) {
    $invoice['status'] = 3;
    update_invoice($invoice);
}
```

Problems:

- magic status numbers;
- magic role string;
- array-based domain;
- authorization and state transition mixed;
- unclear meaning.

### Cleaner model

```php
enum InvoiceStatus: string
{
    case PendingApproval = 'pending_approval';
    case Approved = 'approved';
    case Rejected = 'rejected';
}
```

```php
final class Invoice
{
    public function approveBy(Approver $approver): void
    {
        if ($this->status !== InvoiceStatus::PendingApproval) {
            throw InvoiceCannotBeApproved::becauseOfStatus($this->status);
        }

        if (!$approver->canApprove($this->amount)) {
            throw ApproverLimitExceeded::forAmount($this->amount);
        }

        $this->status = InvoiceStatus::Approved;
    }
}
```

Usage:

```php
$invoice->approveBy($approver);
$invoices->save($invoice);
```

The business rule is now discoverable.

---

## Scenario 3 — Report Filtering

### Dirty version

```php
function getReport(
    $company,
    $location,
    $from,
    $to,
    $status,
    $role,
    $sort,
    $direction,
    $page,
    $limit
) {
}
```

### Better

```php
final readonly class ReportCriteria
{
    public function __construct(
        public CompanyId $companyId,
        public ?LocationId $locationId,
        public DatePeriod $period,
        public ?ReportStatus $status,
        public SortOrder $sort,
        public Pagination $pagination,
    ) {
    }
}
```

```php
$report = $reportQuery->run($criteria);
```

---

## Scenario 4 — Payment Gateway

### Dirty version

```php
class CheckoutService
{
    public function pay($amount)
    {
        $stripe = new StripeSdk('secret-key');
        return $stripe->charge($amount);
    }
}
```

### Cleaner

```php
interface PaymentGateway
{
    public function charge(PaymentRequest $request): PaymentResult;
}
```

```php
final class CheckoutService
{
    public function __construct(
        private PaymentGateway $gateway,
    ) {
    }

    public function pay(Order $order, PaymentToken $token): PaymentResult
    {
        if (!$order->canBePaid()) {
            throw OrderNotPayable::for($order->id());
        }

        return $this->gateway->charge(
            PaymentRequest::fromOrder($order, $token)
        );
    }
}
```

In tests:

```php
$gateway = new FakePaymentGateway(
    PaymentResult::successful('txn-123')
);
```

---

## Scenario 5 — Conditional Explosion

### Dirty version

```php
if ($type === 'A') {
    // 30 lines
} elseif ($type === 'B') {
    // 35 lines
} elseif ($type === 'C') {
    // 28 lines
}
```

First ask whether these are genuinely different strategies.

If yes:

```php
interface InvoicePostingStrategy
{
    public function supports(DocumentType $type): bool;

    public function post(Invoice $invoice): PostingResult;
}
```

Implement:

```text
PurchaseOrderPostingStrategy
WorkOrderPostingStrategy
DebitNotePostingStrategy
```

Do not create strategies if the branches differ by only one trivial value.

---

## Scenario 6 — External API Failure

### Weak

```php
$response = file_get_contents($url);

if (!$response) {
    return false;
}
```

### Cleaner boundary

```php
interface ExchangeRateProvider
{
    public function rate(Currency $from, Currency $to): ExchangeRate;
}
```

Infrastructure adapter:

```php
final class HttpExchangeRateProvider implements ExchangeRateProvider
{
    public function __construct(
        private HttpClient $client,
        private LoggerInterface $logger,
    ) {
    }

    public function rate(Currency $from, Currency $to): ExchangeRate
    {
        try {
            $response = $this->client->request(/* ... */);
        } catch (TransportException $e) {
            $this->logger->warning('Exchange-rate API unavailable.', [
                'from' => $from->value,
                'to' => $to->value,
                'exception' => $e,
            ]);

            throw ExchangeRateUnavailable::fromProvider($e);
        }

        return $this->mapResponse($response);
    }
}
```

The application does not care which HTTP library is used.

---

# 48. Practice Exercises

Try these in order.

## Beginner

### Exercise 1 — Naming

Refactor:

```php
$a = 1000;
$b = 0.18;
$c = $a + ($a * $b);
```

Goal: communicate the business meaning.

### Exercise 2 — Guard clauses

Refactor:

```php
if ($user !== null) {
    if ($user->isActive()) {
        if ($user->hasPermission('edit')) {
            edit();
        }
    }
}
```

### Exercise 3 — Extract method

Refactor a 50-line function into intention-revealing methods.

---

## Intermediate

### Exercise 4 — Replace array with DTO

Convert:

```php
$order = [
    'customer' => 10,
    'amount' => 500,
    'currency' => 'INR',
    'status' => 'pending'
];
```

to structured types.

### Exercise 5 — Repository

Move PDO logic out of a controller.

### Exercise 6 — Dependency injection

Replace:

```php
$mailer = new Mailer();
```

inside business logic with injected dependency.

---

## Advanced

### Exercise 7 — Approval workflow

Build an invoice approval workflow supporting:

- employee;
- manager;
- finance controller;
- amount-based approval limit;
- rejection reason;
- audit history.

Constraints:

- no magic status numbers;
- no giant `if/elseif`;
- business rules unit-tested.

### Exercise 8 — Payment processing

Design:

- gateway abstraction;
- idempotency;
- retries;
- transaction log;
- timeout handling;
- webhook validation.

### Exercise 9 — Legacy modernization

Take a 500-line PHP page containing:

- HTML;
- SQL;
- `$_POST`;
- session authorization;
- email;
- file upload.

Refactor it incrementally into testable components without rewriting the whole application at once.

---

# 49. Learning Roadmap

## Phase 1 — Readable PHP

Learn:

- naming;
- formatting;
- functions;
- guard clauses;
- constants;
- type declarations;
- exceptions.

Goal:

> Another developer should understand your method without asking you what each variable means.

---

## Phase 2 — Object Design

Learn:

- encapsulation;
- composition;
- interfaces;
- DTOs;
- value objects;
- enums;
- dependency injection.

Goal:

> Business concepts should be visible in the code structure.

---

## Phase 3 — SOLID and Refactoring

Learn:

- SRP;
- OCP;
- LSP;
- ISP;
- DIP;
- code smells;
- refactoring techniques.

Goal:

> Requirements should change localized areas rather than the whole codebase.

---

## Phase 4 — Testing and Tooling

Learn:

- PHPUnit;
- unit tests;
- integration tests;
- PHPStan;
- formatter/coding-standard tools;
- Composer scripts;
- CI quality gates.

Goal:

> Machines should catch routine mistakes before reviewers do.

---

## Phase 5 — Architecture

Learn:

- application services/use cases;
- repositories;
- domain model;
- infrastructure adapters;
- events;
- transactions;
- idempotency.

Goal:

> Framework and database details should not dominate business logic.

---

## Phase 6 — Production Engineering

Learn:

- logging;
- monitoring;
- profiling;
- security;
- caching;
- queues;
- concurrency;
- deployment;
- dependency maintenance.

Goal:

> Clean code should remain reliable under real traffic, failure, and change.

---

# 50. Quick Reference Cheat Sheet

## Prefer

```text
Clear names
Small focused methods
Explicit types
Guard clauses
Enums for closed sets
Value objects for important concepts
Constructor injection
Prepared SQL
Meaningful exceptions
Structured logs
Automated tests
Static analysis
Automated formatting
Composition
Framework conventions
Incremental refactoring
```

## Be suspicious of

```text
$data
$temp
$flag
$helper
$manager
CommonUtility
Global state
Magic numbers
Magic strings
Huge controllers
Huge models
Deep nesting
Boolean parameter soup
Long parameter lists
SQL concatenation
Silent catch blocks
Error suppression
Duplicated business rules
Unnecessary inheritance
Premature abstraction
Premature optimization
```

## Ask during every refactor

1. What is this code trying to say?
2. Can I make the intention obvious?
3. Is this responsibility in the correct place?
4. Is the dependency explicit?
5. Is the data model clear?
6. What can fail?
7. Is failure handled at the right boundary?
8. Can I test this easily?
9. Will a future requirement require edits everywhere?
10. Am I simplifying or merely moving complexity?

---


# 51. PHP-Specific Clean-Code Pitfalls

General clean-code principles are important, but PHP has language-specific behaviors that deserve special attention.

## 51.1 Prefer strict comparisons when type matters

Loose comparison:

```php
if ($status == 0) {
}
```

Strict comparison:

```php
if ($status === 0) {
}
```

Use strict comparison by default when you know the expected type.

This reduces surprising coercion.

## 51.2 Understand `isset()`, `array_key_exists()`, and null

These are not identical.

```php
$data = [
    'name' => null,
];
```

```php
isset($data['name']);             // false
array_key_exists('name', $data); // true
```

Use the function that matches your real question:

- “Does this key exist?”
- “Does this key contain a non-null value?”

## 51.3 Be careful with `empty()`

`empty()` treats several values as empty, including values such as:

```text
""
"0"
0
0.0
false
null
[]
```

That can hide domain distinctions.

Instead of:

```php
if (empty($quantity)) {
```

consider explicit validation:

```php
if ($quantity === null || $quantity < 1) {
```

## 51.4 Prefer `match` when it expresses a closed mapping cleanly

```php
$label = match ($status) {
    InvoiceStatus::Pending => 'Pending',
    InvoiceStatus::Approved => 'Approved',
    InvoiceStatus::Rejected => 'Rejected',
};
```

This can be clearer than a long `switch`.

Do not force `match` into complex workflows just because it is modern.

## 51.5 Null coalescing is useful at boundaries

```php
$page = $_GET['page'] ?? '1';
```

But do not let raw request values travel deeply into the application.

Validate and map them first.

## 51.6 Avoid lingering references in `foreach`

References can cause subtle bugs:

```php
foreach ($items as &$item) {
    $item = trim($item);
}

unset($item);
```

If you must use a reference, explicitly `unset()` the reference variable afterward.

Often a transformation is clearer:

```php
$items = array_map(
    static fn(string $item): string => trim($item),
    $items
);
```

## 51.7 Closures should not hide too much context

Readable:

```php
$activeUsers = array_filter(
    $users,
    static fn(User $user): bool => $user->isActive()
);
```

Harder to reason about:

```php
$result = function () use (&$a, &$b, $c, $d, $e) {
    // 80 lines
};
```

Large closures with many captured variables often deserve a named object or method.

## 51.8 Generators are useful for large streams

Instead of loading a huge dataset into memory:

```php
function rows(PDOStatement $statement): Generator
{
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        yield $row;
    }
}
```

Use generators when streaming improves memory behavior and the interface remains understandable.

## 51.9 Traits are code reuse, not architecture

A small cohesive trait can be useful.

A trait with hidden state and many unrelated methods can create invisible coupling.

Before creating a trait, ask:

> Is this genuinely reusable behavior, or am I avoiding composition?

## 51.10 Magic methods should stay unsurprising

PHP magic methods include:

```text
__construct
__get
__set
__call
__invoke
__toString
__serialize
__unserialize
__clone
```

Some are fundamental.

But excessive use of `__get`, `__set`, and `__call` can hide the public API from developers and static-analysis tools.

Prefer explicit methods for important behavior.

## 51.11 Use `readonly` for stable data when appropriate

```php
final readonly class Coordinate
{
    public function __construct(
        public float $latitude,
        public float $longitude,
    ) {
    }
}
```

Readonly data can make invariants easier to understand.

Do not use it where legitimate mutation is central to the object.

## 51.12 Constructor property promotion can reduce noise

```php
final class InvoiceService
{
    public function __construct(
        private InvoiceRepository $invoices,
        private LoggerInterface $logger,
    ) {
    }
}
```

This is often clearer than repeating property declarations and assignments.

## 51.13 Named arguments improve clarity selectively

Good:

```php
new Pagination(
    page: 2,
    perPage: 50,
);
```

Named arguments can make boolean or same-type parameters clearer.

However, external library parameter names can become part of your calling contract. Use judgement.

## 51.14 Avoid dynamic-property thinking

Prefer declared properties and explicit object shape.

```php
final class User
{
    private string $name;
}
```

is easier to reason about than attaching arbitrary fields at runtime.

---

# 52. Namespaces, Composer, and Autoloading

Modern PHP code should normally use namespaces and Composer autoloading.

## 52.1 Namespace example

```php
<?php

declare(strict_types=1);

namespace App\Domain\Invoice;

final class Invoice
{
}
```

## 52.2 Import dependencies explicitly

```php
use App\Domain\Money\Money;
use Psr\Log\LoggerInterface;
```

Avoid huge files with dozens of unrelated imports; that may signal the class has too many responsibilities.

## 52.3 PSR-4 autoloading

Typical Composer configuration:

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

```text
App\Domain\Invoice\Invoice
```

maps naturally to a file such as:

```text
src/Domain/Invoice/Invoice.php
```

## 52.4 Regenerate autoload metadata after configuration changes

```bash
composer dump-autoload
```

Normal PSR-4 class additions generally do not require changing the mapping itself.

## 52.5 Do not manually include every class

Legacy:

```php
require_once 'User.php';
require_once 'Order.php';
require_once 'Invoice.php';
```

Modern Composer-based code:

```php
require dirname(__DIR__) . '/vendor/autoload.php';
```

usually once at the application entry point.

## 52.6 Keep dependency scopes correct

Runtime dependency:

```bash
composer require vendor/package
```

Development-only tool:

```bash
composer require --dev phpstan/phpstan
```

Do not ship unnecessary development dependencies into a production runtime unless your deployment strategy intentionally does so.

---

# 53. The PSR Ecosystem for Clean PHP

You do not need to memorize every PHP-FIG recommendation.

Understand why interoperability standards exist.

Commonly encountered standards include:

| Standard | Purpose |
|---|---|
| PSR-3 | Logger interface |
| PSR-4 | Autoloading |
| PSR-6 | Cache interfaces |
| PSR-7 | HTTP messages |
| PSR-11 | Container interface |
| PSR-14 | Event dispatcher |
| PSR-15 | HTTP server request handlers/middleware |
| PSR-16 | Simple cache |
| PSR-18 | HTTP client |
| PSR-12 | Older widely used extended coding style |
| PER Coding Style | Current PHP-FIG coding-style evolution |

## Why this matters

Imagine your application depends directly on a vendor logger:

```php
final class ImportService
{
    public function __construct(
        private VendorSpecificLogger $logger,
    ) {
    }
}
```

Depending on a shared logging interface can reduce vendor coupling:

```php
use Psr\Log\LoggerInterface;

final class ImportService
{
    public function __construct(
        private LoggerInterface $logger,
    ) {
    }
}
```

Use ecosystem abstractions when they genuinely improve interoperability.

Do not add a PSR interface just for appearance.

---

# 54. Boundary Mapping and External Data

External data is messy.

Examples:

- HTTP requests;
- JSON;
- CSV;
- database rows;
- ERP messages;
- SOAP;
- webhooks;
- queues;
- third-party APIs.

Do not let external shapes become your internal domain model.

## 54.1 Bad: passing raw JSON arrays everywhere

```php
$payload = json_decode($json, true);

$paymentService->process($payload);
```

Now every internal method knows the vendor's key names.

## 54.2 Better: translate at the boundary

```php
final readonly class PaymentWebhook
{
    public function __construct(
        public string $eventId,
        public string $transactionId,
        public int $amountInMinorUnits,
        public string $currency,
    ) {
    }
}
```

Mapper:

```php
final class VendorWebhookMapper
{
    public function fromPayload(array $payload): PaymentWebhook
    {
        // validate and translate vendor fields
    }
}
```

Then:

```php
$webhook = $mapper->fromPayload($payload);
$handler->handle($webhook);
```

## 54.3 Anti-corruption layer

When integrating with a complex external system, build a translation layer so vendor terminology does not spread through your domain.

External:

```text
DOC_STAT = 7
APRV_FLG = Y
```

Internal:

```php
InvoiceStatus::Approved
```

This makes the code understandable even if the external protocol is ugly.

---

# 55. Advanced Security Clean-Code Patterns

Security problems often begin as unclear boundaries.

## 55.1 Authorization belongs near protected use cases

Do not rely only on hiding a button in the UI.

Bad:

```php
if ($showApproveButton) {
    // user can approve
}
```

The server must independently authorize the action.

```php
$this->authorization->assertCanApprove($actor, $invoice);
```

## 55.2 Protect state-changing browser actions against CSRF

Frameworks often provide CSRF protection.

Use the framework's supported mechanism rather than inventing custom tokens casually.

## 55.3 Avoid command injection

Dangerous:

```php
shell_exec("convert " . $_GET['file']);
```

If shell execution is truly necessary:

- avoid user-controlled command construction;
- use safe process APIs;
- validate arguments;
- escape according to the platform;
- run with minimal permissions.

Often a native library is safer than invoking a shell.

## 55.4 Protect against path traversal

Dangerous:

```php
$file = __DIR__ . '/reports/' . $_GET['name'];
readfile($file);
```

An attacker may try values such as:

```text
../../secret
```

Prefer internal identifiers mapped to known storage objects.

## 55.5 Treat outbound URLs as untrusted when users control them

Server-side request forgery (SSRF) becomes possible when a server fetches arbitrary user-supplied URLs.

Use allowlists and network-level restrictions when the feature requires server-side fetching.

## 55.6 Be careful with deserialization

Never unserialize untrusted PHP serialized data casually.

Prefer safer structured formats such as JSON with explicit validation where possible.

## 55.7 Session security

Use framework/runtime features for:

- secure cookies;
- HTTP-only cookies;
- appropriate SameSite policy;
- session ID rotation after authentication;
- logout invalidation.

Security configuration should be centralized and reviewable.

---

# 56. Test Doubles and Designing for Testability

Test doubles are controlled substitutes used during tests.

Common forms:

- fake;
- stub;
- mock;
- spy.

The terminology varies, but the design lesson is stable.

## 56.1 Fake

A lightweight working implementation.

```php
final class InMemoryUserRepository implements UserRepository
{
    /** @var array<string, User> */
    private array $users = [];

    public function save(User $user): void
    {
        $this->users[$user->id()->value] = $user;
    }
}
```

Useful because the test does not need a real database.

## 56.2 Stub

Returns predetermined data.

Conceptually:

```php
$exchangeRates->willReturn(
    ExchangeRate::fromString('83.25')
);
```

## 56.3 Mock

Verifies an interaction.

Example intent:

> “When a user is successfully registered, exactly one welcome notification is sent.”

Do not mock every internal class.

Excessive mocking couples tests to implementation details.

## 56.4 A testability warning sign

If testing a simple pricing rule requires:

- a database;
- HTTP server;
- message queue;
- filesystem;
- ten framework services;

the business logic is probably too coupled to infrastructure.

---

# 57. CI Quality Gates

Clean code should be continuously enforced.

A useful CI pipeline can run:

```text
composer validate
↓
syntax/style checks
↓
static analysis
↓
unit tests
↓
integration tests
↓
dependency/security audit
↓
package/build
```

## Example commands

```bash
composer validate --strict
composer install --no-interaction --prefer-dist
vendor/bin/phpcs src tests
vendor/bin/phpstan analyse
vendor/bin/phpunit
composer audit
```

## Quality gate principle

Do not introduce a tool that produces thousands of ignored warnings forever.

Instead:

1. define an attainable baseline;
2. block new violations;
3. improve the baseline over time.

A quality tool only helps when the team trusts its output.

---

# 58. Clean Code in Teams

Clean code is a team property, not an individual style contest.

## 58.1 Automate subjective formatting disputes

Do not spend review time debating spaces and brace placement.

Configure the formatter once.

## 58.2 Keep pull requests focused

A review is harder when one pull request contains:

```text
new feature
+ unrelated refactor
+ dependency upgrade
+ formatting entire repository
+ renamed folders
```

Prefer smaller logical changes.

## 58.3 Explain architectural decisions

For non-obvious choices, record why.

Possible places:

- ADRs (Architecture Decision Records);
- README;
- design document;
- concise code comments near constraints.

## 58.4 Review the code, not the person

Good review comment:

> “Could we extract this validation into the existing InvoiceValidator so the rule has one source of truth?”

Poor review comment:

> “Why did you write this badly?”

## 58.5 Shared vocabulary improves design

Teams that consistently use terms such as:

```text
Invoice
Approval
Posting
Payment
Customer
Order
Settlement
```

reduce translation overhead.

Use domain language in:

- code;
- tests;
- tickets;
- documentation;
- conversations.

---

# 59. Definition of Done

A feature is not done merely because the happy path works locally.

Example engineering definition of done:

- [ ] Requirement implemented
- [ ] Naming and structure reviewed
- [ ] Inputs validated
- [ ] Authorization checked
- [ ] Failure cases handled
- [ ] Logs added where operationally useful
- [ ] Unit tests added/updated
- [ ] Integration tests added where necessary
- [ ] Static analysis passes
- [ ] Coding standard passes
- [ ] Database migration reviewed
- [ ] Security implications considered
- [ ] API compatibility considered
- [ ] Documentation updated
- [ ] Deployment/config changes documented
- [ ] Monitoring impact considered
- [ ] Code review completed

Customize this for your team.

---

# 60. Refactoring Recipes

Use these recipes when you know code is painful but are unsure where to start.

## Recipe 1 — Giant controller

### Symptoms

```text
validation
SQL
business rules
email
logging
HTML/JSON
```

all in one action.

### Refactor

1. extract request validation;
2. create use-case/application service;
3. move persistence behind repository;
4. move notification behind interface/service;
5. map use-case result to HTTP response.

---

## Recipe 2 — Giant service

### Symptom

A class has 20 dependencies.

### Ask

What independent responsibilities exist?

Possible extraction:

```text
InvoiceService
↓
InvoiceCreator
InvoiceApprover
InvoicePoster
InvoiceCancellationService
```

Do not split only by line count. Split by reason to change.

---

## Recipe 3 — Repeated status `if` statements

Before:

```php
if ($status === '1') {}
if ($status === '2') {}
if ($status === '3') {}
```

Refactor toward:

```php
enum Status: string
{
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';
}
```

Then put allowed transitions near the domain object.

---

## Recipe 4 — SQL everywhere

1. identify one use case;
2. move its query into a repository/query object;
3. add an integration test;
4. repeat gradually.

Do not rewrite every query in one enormous commit.

---

## Recipe 5 — Hard-to-test code

Look for hidden dependencies:

```text
new Database()
new Mailer()
time()
random_int()
file_get_contents()
global state
static service calls
```

Inject or wrap only the dependencies that need control during testing.

---

## Recipe 6 — Copy/paste business rule

If the same approval rule exists in:

```text
controller
scheduled job
API
admin screen
```

extract a single domain/application rule and call it from all entry points.

This is the kind of duplication DRY is meant to eliminate.

---

## Recipe 7 — Too many array keys

If you repeatedly write:

```php
$order['customer_id']
$order['currency']
$order['status']
$order['total']
```

consider introducing an object with types and meaningful operations.

---

## Recipe 8 — Too many booleans

Bad:

```php
processInvoice(true, false, true, false);
```

Use:

- named arguments;
- options DTO;
- enum;
- separate methods;
- strategy objects;

depending on the domain.

---

## Recipe 9 — Large legacy function

Do not immediately rewrite it.

1. write characterization tests;
2. rename confusing variables;
3. extract pure calculations first;
4. isolate I/O;
5. introduce explicit data objects;
6. repeat in small safe commits.

---

## Recipe 10 — “Helper” class growth

When `Helper.php` becomes a dumping ground:

1. list methods;
2. group by domain responsibility;
3. identify required dependencies;
4. create focused classes;
5. migrate callers incrementally;
6. delete the old helper when empty.

---


# 61. Official References

Use official documentation as the source of truth for version-sensitive behavior.

## PHP

- PHP Manual: <https://www.php.net/manual/>
- Supported PHP Versions: <https://www.php.net/supported-versions.php>
- PHP Downloads: <https://www.php.net/downloads.php>
- Migration Guides: available in the PHP Manual

## PHP-FIG

- Coding Style PER: <https://www.php-fig.org/per/coding-style/>
- PSR-12: <https://www.php-fig.org/psr/psr-12/>
- PSR standards index: <https://www.php-fig.org/psr/>

## Composer

- Composer documentation: <https://getcomposer.org/doc/>
- Composer schema/autoload configuration: <https://getcomposer.org/doc/04-schema.md>
- Autoloader optimization: <https://getcomposer.org/doc/articles/autoloader-optimization.md>

## PHPUnit

- PHPUnit: <https://phpunit.de/>
- Documentation: <https://phpunit.de/documentation.html>

## PHPStan

- PHPStan documentation: <https://phpstan.org/documentation>
- Rule levels: <https://phpstan.org/user-guide/rule-levels>

## Coding style tools

- PHP_CodeSniffer: <https://github.com/PHPCSStandards/PHP_CodeSniffer>
- PHP CS Fixer: <https://github.com/PHP-CS-Fixer/PHP-CS-Fixer>

---

# Appendix A — Example Modern Project Skeleton

```text
my-app/
├── bin/
│   └── console
├── config/
│   ├── app.php
│   └── services.php
├── public/
│   └── index.php
├── src/
│   ├── Application/
│   ├── Domain/
│   ├── Infrastructure/
│   └── Presentation/
├── tests/
│   ├── Unit/
│   ├── Integration/
│   └── Feature/
├── var/
│   ├── cache/
│   └── log/
├── .env.example
├── .gitignore
├── composer.json
├── composer.lock
├── phpstan.neon
├── phpunit.xml
└── README.md
```

Adjust this to the framework. Do not fight a framework's standard directory structure merely to imitate an architecture diagram.

---

# Appendix B — Example `composer.json` for Learning

```json
{
    "name": "acme/clean-php-example",
    "type": "project",
    "require": {
        "php": "^8.4 || ^8.5"
    },
    "require-dev": {
        "phpunit/phpunit": "^12.0 || ^13.0",
        "phpstan/phpstan": "^2.0",
        "phpcsstandards/php_codesniffer": "^4.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\": "tests/"
        }
    },
    "scripts": {
        "lint": "phpcs src tests",
        "analyse": "phpstan analyse src tests",
        "test": "phpunit",
        "quality": [
            "@lint",
            "@analyse",
            "@test"
        ]
    }
}
```

> Versions are examples, not a promise of compatibility for every environment. Check the official package requirements before copying this into a real project.

---

# Appendix C — Example PHPStan Configuration

```neon
parameters:
    level: 8

    paths:
        - src
        - tests

    treatPhpDocTypesAsCertain: false
```

For a legacy codebase, begin lower if necessary and increase gradually.

---

# Appendix D — Example Clean Use Case

```php
<?php

declare(strict_types=1);

namespace App\Application\Order;

use App\Domain\Order\Order;
use App\Domain\Order\OrderRepository;
use App\Domain\Payment\PaymentGateway;

final class PayOrder
{
    public function __construct(
        private OrderRepository $orders,
        private PaymentGateway $payments,
    ) {
    }

    public function handle(PayOrderCommand $command): void
    {
        $order = $this->orders->get($command->orderId);

        $this->assertPayable($order);

        $payment = $this->payments->charge(
            amount: $order->total(),
            token: $command->paymentToken,
        );

        $order->markPaid($payment->transactionId());

        $this->orders->save($order);
    }

    private function assertPayable(Order $order): void
    {
        if (!$order->canBePaid()) {
            throw OrderCannotBePaid::for($order->id());
        }
    }
}
```

Notice:

- dependencies are explicit;
- domain behavior is named;
- no SQL exists in the use case;
- no HTTP object exists in the use case;
- payment vendor details are hidden;
- failure is explicit;
- the class is easy to unit test.

---

# Appendix E — The “Clean Enough” Test

Before calling code finished, ask:

> **Could a competent PHP developer who did not write this code understand the business intent, safely modify it, and verify the change without needing a private explanation from me?**

If yes, the code is probably clean enough.

If not, improve:

- naming;
- boundaries;
- type clarity;
- method size;
- responsibilities;
- tests;
- documentation around non-obvious decisions.

Perfection is not the goal.

**Safe, understandable, change-friendly code is.**

---

# Final Principle

> **Write PHP for the next developer first and the interpreter second.**

The interpreter can execute ugly code.

Your team has to live with it.
