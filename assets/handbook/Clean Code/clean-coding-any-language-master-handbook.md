# Clean Coding Master Handbook — Language-Agnostic Edition

> A practical, beginner-friendly and in-depth handbook for writing code that is easy to read, change, test, debug, review, and maintain — regardless of programming language.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Clean Code Really Means](#2-what-clean-code-really-means)
3. [The Cost of Bad Code](#3-the-cost-of-bad-code)
4. [The Core Clean-Code Mindset](#4-the-core-clean-code-mindset)
5. [The Fundamental Principles](#5-the-fundamental-principles)
6. [Naming Things Well](#6-naming-things-well)
7. [Variables and Constants](#7-variables-and-constants)
8. [Functions and Methods](#8-functions-and-methods)
9. [Parameters and Return Values](#9-parameters-and-return-values)
10. [Control Flow and Conditionals](#10-control-flow-and-conditionals)
11. [Loops and Collection Processing](#11-loops-and-collection-processing)
12. [Comments and Documentation](#12-comments-and-documentation)
13. [Formatting and Code Style](#13-formatting-and-code-style)
14. [Data Structures and Data Modeling](#14-data-structures-and-data-modeling)
15. [Object-Oriented Clean Code](#15-object-oriented-clean-code)
16. [Functional Programming Clean-Code Ideas](#16-functional-programming-clean-code-ideas)
17. [SOLID Principles](#17-solid-principles)
18. [DRY, KISS, YAGNI and Related Principles](#18-dry-kiss-yagni-and-related-principles)
19. [Modules, Packages and File Organization](#19-modules-packages-and-file-organization)
20. [Coupling and Cohesion](#20-coupling-and-cohesion)
21. [Dependencies and Dependency Injection](#21-dependencies-and-dependency-injection)
22. [Error and Exception Handling](#22-error-and-exception-handling)
23. [Null, Optional and Missing Values](#23-null-optional-and-missing-values)
24. [Validation and Defensive Programming](#24-validation-and-defensive-programming)
25. [Clean API Design](#25-clean-api-design)
26. [Database and Persistence Code](#26-database-and-persistence-code)
27. [Configuration and Environment Management](#27-configuration-and-environment-management)
28. [Logging and Observability](#28-logging-and-observability)
29. [Testing Clean Code](#29-testing-clean-code)
30. [Test Doubles: Mocks, Stubs, Fakes and Spies](#30-test-doubles-mocks-stubs-fakes-and-spies)
31. [Refactoring](#31-refactoring)
32. [Code Smells](#32-code-smells)
33. [Design Patterns — Use Them Carefully](#33-design-patterns--use-them-carefully)
34. [Clean Architecture and Layering](#34-clean-architecture-and-layering)
35. [Concurrency and Asynchronous Code](#35-concurrency-and-asynchronous-code)
36. [Performance Without Destroying Readability](#36-performance-without-destroying-readability)
37. [Security as Part of Clean Code](#37-security-as-part-of-clean-code)
38. [Clean Frontend Code](#38-clean-frontend-code)
39. [Clean Backend and Service Code](#39-clean-backend-and-service-code)
40. [Clean CLI, Scripts and Automation](#40-clean-cli-scripts-and-automation)
41. [Working with Legacy Code](#41-working-with-legacy-code)
42. [Code Reviews](#42-code-reviews)
43. [Git and Commit Hygiene](#43-git-and-commit-hygiene)
44. [AI-Generated Code and Clean Coding](#44-ai-generated-code-and-clean-coding)
45. [Language-Specific Mapping](#45-language-specific-mapping)
46. [Real-World Scenario Playbook](#46-real-world-scenario-playbook)
47. [Clean-Code Decision Framework](#47-clean-code-decision-framework)
48. [Beginner-to-Advanced Learning Roadmap](#48-beginner-to-advanced-learning-roadmap)
49. [Practical Checklists](#49-practical-checklists)
50. [Final Principles to Remember](#50-final-principles-to-remember)

---

# 1. How to Use This Handbook

This handbook is designed to work in three ways:

1. **Learn from the beginning** — read it from top to bottom.
2. **Use it as a reference** — jump directly to a topic when reviewing or refactoring code.
3. **Use it during code review** — apply the checklists near the end.

The examples use language-neutral pseudocode where possible:

```text
function calculateTotal(items):
    ...
```

When useful, examples are also shown in familiar syntax that can easily map to Python, JavaScript/TypeScript, PHP, Java, C#, Go, C++, Ruby, Kotlin, Swift, and other languages.

Clean coding is not about making code look "clever". It is about reducing the effort needed to understand and safely change a system.

---

# 2. What Clean Code Really Means

Clean code is code that another developer — including your future self — can understand without excessive mental effort.

Good code usually has these properties:

- Its intention is obvious.
- Names explain what values and operations mean.
- Functions are focused.
- Business rules are visible.
- Dependencies are controlled.
- Errors are handled deliberately.
- Tests provide confidence.
- Duplication is controlled.
- The design can evolve without rewriting everything.
- Unexpected behavior is minimized.

A useful rule:

> Code is read far more often than it is written.

Therefore, optimize primarily for **human understanding**, then for correctness, maintainability, safety, and performance.

---

# 3. The Cost of Bad Code

Bad code creates more than aesthetic problems.

It produces real engineering costs:

- Small changes take too long.
- Bugs appear in unrelated areas.
- Developers are afraid to refactor.
- New team members take longer to onboard.
- Tests become difficult to write.
- Deployments become risky.
- Debugging takes hours instead of minutes.
- Features are implemented repeatedly because existing code is too confusing.
- Security bugs hide inside unclear logic.
- Performance problems become difficult to isolate.

## Example

Suppose a developer writes:

```text
if u.a == 1 and u.t > 100 and not u.x:
    p(u)
```

The code may work, but the reader must reverse-engineer what `a`, `t`, `x`, and `p` mean.

Compare:

```text
if user.isActive and user.totalPurchaseAmount > PREMIUM_THRESHOLD and not user.isBlocked:
    promoteToPremium(user)
```

The second version communicates business intent immediately.

---

# 4. The Core Clean-Code Mindset

Before individual rules, adopt these habits.

## 4.1 Write for the next reader

Assume the next reader:

- did not write the code,
- does not know your assumptions,
- may be debugging under pressure,
- may be a junior developer,
- may be you six months later.

## 4.2 Make illegal or confusing states difficult to represent

Instead of:

```text
status = "x"
```

prefer a constrained representation:

```text
status = OrderStatus.SHIPPED
```

## 4.3 Keep complexity local

Complexity cannot always be removed, but it can often be isolated.

For example:

```text
tax = TaxCalculator.calculate(order, customer, region)
```

is easier to reason about than scattering country-specific tax logic across controllers, database code, templates, and reports.

## 4.4 Make behavior predictable

A function named:

```text
getUserProfile()
```

should not unexpectedly:

- delete temporary files,
- send email,
- change permissions,
- update billing,
- modify global state.

Names and behavior should match.

## 4.5 Prefer boring code over clever code

This:

```text
result = users.filter(isActive).map(toDto)
```

is usually better than a highly compressed trick that saves two lines but requires deep language knowledge.

---

# 5. The Fundamental Principles

Clean coding is built on a few recurring ideas.

## Clarity

The code should explain what it does.

## Simplicity

Use the simplest design that solves the current problem correctly.

## Consistency

Similar problems should be solved in similar ways.

## Local reasoning

A developer should be able to understand a function or module without reading the entire application.

## Encapsulation

Hide internal implementation details behind stable interfaces.

## Separation of concerns

Different responsibilities should not be mixed unnecessarily.

## Testability

Important behavior should be easy to verify automatically.

## Explicitness

Important business rules, side effects, boundaries, and failures should be visible rather than hidden.

---

# 6. Naming Things Well

Naming is one of the highest-impact clean-code skills.

## 6.1 Use intention-revealing names

Bad:

```text
d = 30
```

Better:

```text
trialPeriodDays = 30
```

Bad:

```text
x = customer.purchases
```

Better:

```text
purchaseHistory = customer.purchases
```

## 6.2 Avoid meaningless names

Avoid:

```text
data
info
temp
obj
thing
val
item1
item2
abc
foo
bar
```

These names may occasionally be acceptable in tiny scopes, but descriptive names are usually better.

## 6.3 Name booleans like questions

Good:

```text
isActive
hasPermission
canEdit
shouldRetry
wasProcessed
```

Less clear:

```text
active
permission
retry
processed
```

## 6.4 Functions should usually use verbs

Examples:

```text
calculateInvoiceTotal()
sendWelcomeEmail()
findUserByEmail()
validateOrder()
archiveExpiredSessions()
```

## 6.5 Classes and data types usually use nouns

Examples:

```text
Invoice
OrderRepository
PaymentGateway
UserProfile
TaxCalculator
```

## 6.6 Collections should sound plural

```text
users
invoiceLines
failedPayments
activeSessions
```

## 6.7 Use domain language

If the business calls something a "Purchase Order", prefer:

```text
purchaseOrder
```

rather than inventing:

```text
buyingDocument
```

Clean code should reflect the vocabulary used by the domain.

## 6.8 Avoid encoding type in the name when the language already expresses it

Usually avoid:

```text
strName
intCount
arrUsers
boolValid
```

Prefer:

```text
name
count
users
isValid
```

This is especially important in typed languages where the compiler already knows the type.

## 6.9 Avoid misleading names

Do not call something `userList` if it is actually:

- a database query,
- a map/dictionary,
- an iterator,
- a single object.

## 6.10 Avoid unnecessary abbreviations

Bad:

```text
calcInvAmt()
usrRepo
cfgMgr
```

Better:

```text
calculateInvoiceAmount()
userRepository
configurationManager
```

Well-known abbreviations such as HTTP, URL, ID, API, SQL may be acceptable depending on team conventions.

---

# 7. Variables and Constants

## 7.1 Keep scope small

Bad:

```text
total = 0
# 70 lines of unrelated logic
total = calculate(...)
```

Better: declare the variable close to where it is used.

Small scope reduces the number of possible meanings and changes.

## 7.2 Prefer immutable values

If a value does not need to change, do not make it mutable.

Conceptually:

```text
final taxRate = 0.18
```

or:

```text
const taxRate = 0.18
```

Immutability reduces accidental state changes.

## 7.3 Replace magic numbers and strings

Bad:

```text
if attempts > 3:
```

Better:

```text
MAX_LOGIN_ATTEMPTS = 3

if attempts > MAX_LOGIN_ATTEMPTS:
```

Bad:

```text
if order.status == "S":
```

Better:

```text
if order.status == OrderStatus.SHIPPED:
```

## 7.4 Do not reuse variables for different meanings

Bad:

```text
result = fetchUser()
result = result.email
result = sendEmail(result)
```

Better:

```text
user = fetchUser()
emailAddress = user.email
sendResult = sendEmail(emailAddress)
```

## 7.5 Derive instead of synchronize duplicate state

Risky:

```text
items
itemCount
```

If `itemCount` can be calculated from `items.length`, storing both may introduce inconsistency.

Prefer:

```text
itemCount = items.length
```

when needed.

---

# 8. Functions and Methods

Functions are the basic units of behavior.

## 8.1 A function should do one coherent thing

Bad:

```text
function createOrder(request):
    validateRequest(request)
    calculateTax()
    saveOrder()
    generatePdf()
    sendEmail()
    updateAnalytics()
    clearCache()
```

This may be too many responsibilities for one function.

Better:

```text
function createOrder(command):
    validatedOrder = orderValidator.validate(command)
    order = orderService.create(validatedOrder)
    orderRepository.save(order)
    return order
```

Other workflows such as emails or analytics can be triggered separately where appropriate.

## 8.2 Keep functions small enough to understand

There is no universal maximum line count.

A 5-line function can be confusing, while a 30-line function can sometimes be perfectly clear.

Ask:

> Can I understand this function without mentally executing many unrelated steps?

## 8.3 Keep abstraction levels consistent

Bad:

```text
function processOrder(order):
    validateOrder(order)
    sql = "INSERT INTO ..."
    db.execute(sql)
    sendConfirmation(order)
```

The function mixes business-level operations and low-level SQL details.

Better:

```text
function processOrder(order):
    validateOrder(order)
    orderRepository.save(order)
    notificationService.sendConfirmation(order)
```

## 8.4 Avoid hidden side effects

Bad:

```text
function getBalance(account):
    balance = calculateBalance(account)
    account.lastCheckedAt = now()
    auditRepository.save(account)
    return balance
```

A getter unexpectedly modifies state.

Better:

```text
function calculateBalance(account):
    return ...
```

and:

```text
function recordBalanceCheck(account):
    ...
```

if both operations are required.

## 8.5 Prefer command-query separation

A **query** returns information without changing state.

```text
balance = account.getBalance()
```

A **command** changes state.

```text
account.withdraw(amount)
```

Avoid functions that unpredictably do both.

## 8.6 Extract meaningful operations

Before:

```text
if user.age >= 18 and user.country in allowedCountries and not user.isSuspended:
```

After:

```text
if user.isEligibleForPurchase():
```

The second version expresses domain meaning.

---

# 9. Parameters and Return Values

## 9.1 Limit parameter count

Bad:

```text
createUser(name, email, phone, country, role, status, department, managerId)
```

Better:

```text
createUser(CreateUserRequest request)
```

or:

```text
createUser(UserRegistration registration)
```

Too many parameters increase:

- call-site mistakes,
- ordering errors,
- testing complexity,
- API instability.

## 9.2 Avoid boolean flag arguments

Bad:

```text
generateReport(true, false)
```

What do those booleans mean?

Better:

```text
generateReport(
    format = ReportFormat.PDF,
    includeCharts = false
)
```

Or create separate methods:

```text
generateSummaryReport()
generateDetailedReport()
```

## 9.3 Avoid output parameters

Instead of:

```text
calculateTotals(order, outputTotals)
```

prefer:

```text
totals = calculateTotals(order)
```

## 9.4 Return meaningful result types

Instead of:

```text
return -1
```

consider:

```text
return UserNotFound
```

or:

```text
return Result.failure("USER_NOT_FOUND")
```

or an appropriate exception, depending on the design.

## 9.5 Avoid returning unrelated tuples without meaning

Bad:

```text
return (true, 12, "ok")
```

Better:

```text
return ValidationResult(
    isValid = true,
    errorCount = 12,
    message = "ok"
)
```

Named structure reduces ambiguity.

---

# 10. Control Flow and Conditionals

## 10.1 Prefer guard clauses

Deep nesting:

```text
if user != null:
    if user.isActive:
        if user.hasPermission("EDIT"):
            updateProfile()
```

Cleaner:

```text
if user == null:
    return

if not user.isActive:
    return

if not user.hasPermission("EDIT"):
    return

updateProfile()
```

Guard clauses flatten the happy path.

## 10.2 Extract complex conditions

Bad:

```text
if order.total > 10000 and customer.age > 18 and customer.country == "IN" and not customer.blocked:
```

Better:

```text
if highValueOrderPolicy.isEligible(order, customer):
```

## 10.3 Avoid negative logic when positive logic is clearer

Harder:

```text
if not user.isNotEligible:
```

Better:

```text
if user.isEligible:
```

## 10.4 Avoid giant switch/match statements when behavior belongs to types

Bad concept:

```text
switch payment.type:
    CREDIT_CARD: ...
    UPI: ...
    BANK_TRANSFER: ...
    WALLET: ...
```

If this switch appears repeatedly, use polymorphism or a strategy map:

```text
processor = paymentProcessors.get(payment.type)
processor.process(payment)
```

A single switch used once may still be perfectly fine. Do not over-engineer.

---

# 11. Loops and Collection Processing

## 11.1 Make the intent clear

Imperative:

```text
activeUsers = []

for user in users:
    if user.isActive:
        activeUsers.append(user)
```

Declarative where supported:

```text
activeUsers = users.filter(user => user.isActive)
```

Choose the version that is clearest in the language and team.

## 11.2 Avoid doing many unrelated things inside one loop

Bad:

```text
for order in orders:
    validate(order)
    calculate(order)
    save(order)
    sendEmail(order)
    updateDashboard(order)
```

This may make failures and retries difficult.

Consider separate stages or a dedicated processing pipeline.

## 11.3 Avoid accidental quadratic complexity

Bad:

```text
for user in users:
    for admin in admins:
        if user.managerId == admin.id:
            ...
```

Better:

```text
adminsById = indexById(admins)

for user in users:
    admin = adminsById.get(user.managerId)
```

Clean code includes choosing appropriate data structures.

---

# 12. Comments and Documentation

Comments should explain **why**, not repeat **what**.

## Bad comment

```text
# Increment count by 1
count = count + 1
```

The code already says that.

## Useful comment

```text
# Payment provider occasionally sends duplicate callbacks.
# We keep the idempotency key for 24 hours to prevent double charging.
```

This provides context that cannot be inferred easily from code.

## 12.1 Prefer better code before adding a comment

Instead of:

```text
# Check whether customer can get discount
if c.t > 5000 and c.y > 2:
```

write:

```text
if customer.isEligibleForLoyaltyDiscount():
```

## 12.2 Good documentation targets

Document:

- public APIs,
- unusual business rules,
- non-obvious security constraints,
- architectural decisions,
- external system assumptions,
- complex algorithms,
- migration notes,
- operational runbooks.

## 12.3 Avoid stale comments

A wrong comment is often worse than no comment.

Treat documentation as code: review and update it when behavior changes.

---

# 13. Formatting and Code Style

Formatting communicates structure.

Use consistent:

- indentation,
- line length,
- blank lines,
- import ordering,
- brace style,
- naming conventions,
- file naming,
- quote style,
- trailing commas if applicable.

Prefer automated formatters.

Examples:

- Python → Black / Ruff formatting rules
- JavaScript/TypeScript → Prettier
- Go → `gofmt`
- Java → Spotless / formatter integrations
- C# → `dotnet format`
- PHP → PHP-CS-Fixer / Pint

The specific formatter is less important than team consistency.

---

# 14. Data Structures and Data Modeling

Clean code starts with good data modeling.

## 14.1 Use meaningful types

Weak model:

```text
price = 1200.50
currency = "INR"
```

Stronger model:

```text
Money(amount = 1200.50, currency = Currency.INR)
```

The stronger model can enforce rules such as:

- no invalid currencies,
- safe rounding,
- no accidental addition of INR and USD,
- consistent formatting.

## 14.2 Prefer domain objects over primitive obsession

Primitive obsession occurs when important concepts are represented only with raw strings, numbers, or booleans.

Examples:

```text
email: string
employeeId: string
orderStatus: string
percentage: float
```

Possible domain types:

```text
EmailAddress
EmployeeId
OrderStatus
Percentage
```

Use richer types where the domain benefits from validation and behavior.

## 14.3 Prevent invalid states

Weak:

```text
Order(
    isPaid = true,
    paymentId = null
)
```

If a paid order requires a payment ID, model it so that such a combination is difficult or impossible to create.

---

# 15. Object-Oriented Clean Code

Object-oriented programming can organize behavior and data well when used carefully.

## 15.1 Encapsulate invariants

Bad:

```text
account.balance = account.balance - amount
```

Better:

```text
account.withdraw(amount)
```

`withdraw()` can enforce:

- no negative amount,
- sufficient balance,
- overdraft rules,
- audit recording.

## 15.2 Avoid anemic domain models when behavior clearly belongs with data

Anemic:

```text
class Order:
    total
    status
```

and all behavior elsewhere:

```text
OrderService.calculateTotal(order)
OrderService.cancel(order)
OrderService.ship(order)
```

Sometimes services are appropriate, but domain behavior often belongs near the domain data.

## 15.3 Prefer composition over inheritance

Inheritance:

```text
class EmailNotification extends Notification
class SmsNotification extends Notification
```

This can be fine.

But deep inheritance such as:

```text
BaseNotification
  -> ExternalNotification
      -> ScheduledExternalNotification
          -> RegionalScheduledExternalNotification
```

becomes difficult to understand.

Composition:

```text
NotificationService(
    channel,
    formatter,
    retryPolicy
)
```

is often more flexible.

## 15.4 Keep objects focused

A `User` object should probably not also:

- connect to databases,
- render HTML,
- send HTTP requests,
- generate PDFs,
- manage cache.

---

# 16. Functional Programming Clean-Code Ideas

Functional techniques improve predictability even in non-functional languages.

## 16.1 Prefer pure functions

A pure function:

- returns the same output for the same input,
- does not modify external state.

Example:

```text
function calculateDiscount(total, loyaltyYears):
    ...
```

Pure functions are easier to:

- test,
- reuse,
- parallelize,
- reason about.

## 16.2 Isolate side effects

Separate:

```text
invoice = calculateInvoice(order)
```

from:

```text
invoiceRepository.save(invoice)
emailService.send(invoice)
```

## 16.3 Prefer transformations over mutation

Instead of:

```text
customer.status = "ACTIVE"
```

where appropriate:

```text
updatedCustomer = customer.withStatus(ACTIVE)
```

This is especially useful in concurrent or event-driven systems.

---

# 17. SOLID Principles

SOLID is a set of design principles for maintainable object-oriented systems.

## S — Single Responsibility Principle

A module should have one primary reason to change.

Bad:

```text
InvoiceService
- calculate totals
- save to database
- generate PDF
- send email
- create audit logs
```

Possible decomposition:

```text
InvoiceCalculator
InvoiceRepository
InvoicePdfRenderer
InvoiceNotifier
AuditLogger
```

Do not split everything into microscopic classes. Split responsibilities when they change for different reasons.

## O — Open/Closed Principle

Software should be easier to extend without repeatedly modifying stable code.

Bad:

```text
if paymentType == "CARD":
...
elif paymentType == "UPI":
...
elif paymentType == "WALLET":
...
```

Better when many payment types exist:

```text
PaymentProcessor interface
CardPaymentProcessor
UpiPaymentProcessor
WalletPaymentProcessor
```

## L — Liskov Substitution Principle

Subtypes should behave in ways expected by users of the base type.

Problem:

```text
class Bird:
    fly()

class Penguin extends Bird:
    fly():
        throw UnsupportedOperation
```

The abstraction is wrong because not every bird can fly.

Better:

```text
Bird
FlyingBird
SwimmingBird
```

## I — Interface Segregation Principle

Clients should not depend on methods they do not need.

Bad:

```text
interface Worker:
    work()
    eat()
    sleep()
    chargeBattery()
```

This makes little sense for both humans and robots.

Better:

```text
Workable
Feedable
Rechargeable
```

## D — Dependency Inversion Principle

High-level business logic should depend on abstractions, not specific infrastructure.

Bad:

```text
class CheckoutService:
    stripe = new StripeSdk()
```

Better:

```text
class CheckoutService:
    paymentGateway: PaymentGateway
```

Then infrastructure provides:

```text
StripePaymentGateway
```

---

# 18. DRY, KISS, YAGNI and Related Principles

## DRY — Don't Repeat Yourself

DRY means avoiding duplication of **knowledge**, not merely duplicated text.

Bad:

```text
tax = amount * 0.18
```

copied into 15 files.

Better:

```text
taxPolicy.calculate(amount)
```

However, do not combine two pieces of code just because they look similar if they represent different business rules.

Premature abstraction can be worse than small duplication.

## KISS — Keep It Simple

Prefer:

```text
if total >= freeShippingThreshold:
    shipping = 0
```

over a configuration-driven rules engine when the business has only one simple rule.

## YAGNI — You Aren't Gonna Need It

Do not implement speculative features.

Examples:

- supporting 12 database engines when only one is planned,
- building plugin architecture before any plugins exist,
- creating a generic workflow engine for two simple states.

Build extension points when real requirements justify them.

## Principle of Least Surprise

Code should behave in the way most developers would expect.

## Law of Demeter

Avoid long navigation chains:

```text
order.customer.address.country.taxPolicy.rate
```

Prefer asking a suitable object/service:

```text
taxService.rateFor(order)
```

## Tell, Don't Ask

Instead of:

```text
if account.balance >= amount:
    account.balance -= amount
```

prefer:

```text
account.withdraw(amount)
```

Tell the object what to do rather than pulling out its data and making decisions elsewhere.

---

# 19. Modules, Packages and File Organization

Good structure makes navigation easy.

## 19.1 Organize around meaningful boundaries

Weak structure:

```text
controllers/
services/
repositories/
models/
utils/
```

This can become huge in large applications.

Feature-oriented structure:

```text
orders/
    order_controller
    order_service
    order_repository
    order_model

payments/
    payment_controller
    payment_service
    payment_gateway
```

Both styles can work. Choose based on application size and architecture.

## 19.2 Avoid the "utils" dumping ground

A file named:

```text
utils
helpers
common
misc
```

often collects unrelated code.

Prefer specific names:

```text
dateFormatter
currencyParser
retryPolicy
fileHasher
emailValidator
```

## 19.3 Keep public surface area small

A module should expose only what other modules need.

Hide internal helpers where the language supports it.

---

# 20. Coupling and Cohesion

## Cohesion

High cohesion means a module's elements belong together.

Example:

```text
InvoiceCalculator
- calculateSubtotal
- calculateTax
- calculateGrandTotal
```

Good cohesion.

## Coupling

Coupling is how strongly modules depend on each other.

High coupling:

```text
OrderService
 -> UserController
 -> DatabaseConnection
 -> GlobalConfig
 -> EmailSdk
 -> PaymentSdk
 -> CacheSingleton
```

Lower coupling:

```text
OrderService
 -> OrderRepository
 -> PaymentGateway
 -> NotificationPort
```

Aim for:

- **high cohesion**
- **low unnecessary coupling**

---

# 21. Dependencies and Dependency Injection

Dependency injection means providing dependencies from the outside.

Without DI:

```text
class ReportService:
    db = new MySqlConnection(...)
```

With DI:

```text
class ReportService:
    constructor(reportRepository):
        this.reportRepository = reportRepository
```

Benefits:

- easier testing,
- easier replacement of infrastructure,
- clearer dependency graph,
- fewer hidden globals.

## Constructor injection

Often preferred for required dependencies:

```text
OrderService(orderRepository, paymentGateway)
```

## Method injection

Useful when dependency is specific to one operation:

```text
export(report, writer)
```

## Avoid service locator abuse

Bad:

```text
service = GlobalContainer.resolve("payment")
```

This hides dependencies.

Prefer declaring them explicitly.

---

# 22. Error and Exception Handling

Errors are part of normal software design.

## 22.1 Do not ignore errors

Bad:

```text
try:
    save()
catch:
    pass
```

This converts visible failure into silent corruption or unexpected behavior.

## 22.2 Add meaningful context

Weak:

```text
throw Error("failed")
```

Better:

```text
throw InvoiceSaveError(invoiceId, cause)
```

or:

```text
"Failed to save invoice 74219 after database timeout"
```

Do not expose secrets in error messages.

## 22.3 Catch errors where you can actually handle them

Avoid:

```text
try:
    entireApplication()
catch Exception:
    log("something failed")
```

unless this is a top-level safety boundary.

Handle errors at layers that know what recovery means.

## 22.4 Distinguish error categories

Examples:

- validation error,
- authentication error,
- authorization error,
- not found,
- conflict,
- external service timeout,
- database failure,
- internal programming bug.

Different errors deserve different responses.

## 22.5 Preserve the original cause

If wrapping an exception, retain the cause/stack trace when the language supports it.

## 22.6 Use retries carefully

Retry transient failures such as:

- temporary network timeout,
- rate-limit response,
- temporary lock.

Do not blindly retry:

- invalid credentials,
- validation failures,
- malformed requests.

Use:

- maximum attempts,
- exponential backoff,
- jitter,
- idempotency when required.

---

# 23. Null, Optional and Missing Values

Null-related bugs are common.

## 23.1 Avoid returning null when a clearer model exists

Possible approaches:

```text
Optional<User>
Maybe<User>
Result<User, Error>
```

or empty collections:

```text
[]
```

instead of null collections.

## 23.2 Use null to represent one clear meaning only

Do not let null simultaneously mean:

- not found,
- not loaded,
- not permitted,
- system error,
- field intentionally empty.

These cases are different.

## 23.3 Validate required data early

Instead of allowing a null to fail 20 function calls later, reject invalid input at the boundary.

---

# 24. Validation and Defensive Programming

Validation belongs at system boundaries.

Typical boundaries:

- HTTP request,
- CLI arguments,
- message queue event,
- file import,
- database result from legacy system,
- third-party API response,
- user input.

## Example

Bad:

```text
user.age = request.age
```

Better:

```text
age = Age.parse(request.age)
```

The parsing step can enforce:

- numeric input,
- valid range,
- domain rules.

## Avoid scattered validation

If every layer revalidates the same condition differently, inconsistencies appear.

Centralize rules where appropriate.

---

# 25. Clean API Design

A good API should be predictable and hard to misuse.

## 25.1 Use consistent resource naming

For REST-like APIs:

```text
GET    /orders
GET    /orders/{id}
POST   /orders
PATCH  /orders/{id}
DELETE /orders/{id}
```

Avoid random patterns such as:

```text
/getAllOrders
/orderCreate
/remove_order
```

unless required by an existing convention.

## 25.2 Use consistent response structures

Do not return:

```text
{ "user": ... }
```

in one endpoint and:

```text
{ "result": ... }
```

in another without reason.

## 25.3 Validate input explicitly

Return clear client errors rather than obscure server exceptions.

## 25.4 Design idempotency where needed

Operations such as payment creation may be retried by clients.

Use idempotency keys where duplicate processing would be harmful.

## 25.5 Version intentionally

Avoid breaking public consumers accidentally.

---

# 26. Database and Persistence Code

Database code should reveal intent and protect consistency.

## 26.1 Keep SQL or query logic in appropriate boundaries

Avoid scattering raw SQL across:

- controllers,
- templates,
- business entities,
- scheduled scripts.

Use repositories/data access modules where helpful.

## 26.2 Use transactions for atomic operations

If these must succeed together:

```text
create order
reserve inventory
record payment reference
```

use a transaction or an appropriate distributed consistency strategy.

## 26.3 Avoid N+1 query problems

Bad concept:

```text
orders = loadOrders()

for order in orders:
    order.customer = loadCustomer(order.customerId)
```

For 1000 orders, that may create 1001 queries.

Use:

- joins,
- eager loading,
- batching,
- prefetching.

## 26.4 Do not store derived values unnecessarily

If a value can be reliably calculated, storing it can create synchronization bugs.

Sometimes derived values are intentionally persisted for performance or auditing; document why.

## 26.5 Never build SQL with unsafe string concatenation

Bad:

```text
sql = "SELECT * FROM users WHERE email = '" + email + "'"
```

Use parameterized queries.

---

# 27. Configuration and Environment Management

Configuration should not be hidden inside source code.

Bad:

```text
databasePassword = "prod-password-123"
apiUrl = "https://production.example.com"
```

Better:

```text
databasePassword = config.databasePassword
apiUrl = config.apiUrl
```

Use environment-appropriate configuration and secret-management mechanisms.

Keep clear separation among:

- code,
- configuration,
- secrets.

Validate critical configuration at startup.

Example:

```text
if DATABASE_URL is missing:
    failStartup("DATABASE_URL is required")
```

Failing immediately is often better than failing randomly during a user request.

---

# 28. Logging and Observability

Logs should help answer:

- What happened?
- Where?
- For which request/user/entity?
- Why did it fail?
- How long did it take?

## 28.1 Use structured logs

Better:

```text
{
  "event": "payment_failed",
  "orderId": "ORD-991",
  "provider": "ExamplePay",
  "reason": "timeout"
}
```

than:

```text
"Something went wrong"
```

## 28.2 Do not log secrets

Never log:

- passwords,
- tokens,
- API keys,
- complete credit-card numbers,
- private keys,
- sensitive personal data unless explicitly justified and protected.

## 28.3 Use appropriate log levels

Typical intent:

```text
DEBUG -> developer diagnostics
INFO  -> important normal event
WARN  -> unexpected but recoverable situation
ERROR -> operation failed
```

## 28.4 Add correlation IDs

In distributed systems, a request/correlation ID makes it possible to trace one request across services.

---

# 29. Testing Clean Code

Clean code and testability reinforce each other.

A function that is impossible to test often has excessive dependencies or hidden side effects.

## Testing pyramid

A common strategy:

```text
       /\
      /E2E\
     /----\
    /Integration\
   /----------\
  / Unit Tests \
 /______________\
```

The exact shape depends on the system, but small fast tests should usually be more numerous than slow end-to-end tests.

## 29.1 Unit tests

Test a small behavior in isolation.

Example:

```text
Given subtotal = 1000
And loyaltyYears = 5
When discount is calculated
Then result = 100
```

## 29.2 Integration tests

Verify components work together:

- repository + database,
- service + queue,
- HTTP client + sandbox API.

## 29.3 End-to-end tests

Verify a complete user or business workflow.

Example:

```text
Login -> Add item -> Checkout -> Pay -> View order
```

## 29.4 Arrange-Act-Assert

A common structure:

```text
# Arrange
order = Order(total = 1000)

# Act
discount = calculator.calculate(order)

# Assert
assert discount == 100
```

## 29.5 Test behavior, not implementation details

Fragile test:

```text
assert privateHelperWasCalledExactlyThreeTimes()
```

Better:

```text
assert invoice.total == 1180
```

The second test survives internal refactoring.

## 29.6 Test names should explain behavior

Good:

```text
rejects_order_when_inventory_is_unavailable
applies_loyalty_discount_after_two_years
returns_not_found_for_unknown_customer
```

---

# 30. Test Doubles: Mocks, Stubs, Fakes and Spies

These terms are often mixed up.

## Stub

Returns predefined data.

```text
currencyRateStub.getRate("USD", "INR") -> 83.5
```

## Mock

Used to verify an expected interaction.

```text
verify(emailService).send(orderConfirmation)
```

## Fake

A lightweight working implementation.

Example:

```text
InMemoryUserRepository
```

instead of a real database.

## Spy

Records calls while allowing more real behavior than a strict mock.

## Practical rule

Do not mock everything.

Excessive mocking makes tests tightly coupled to implementation.

Prefer testing behavior through stable boundaries.

---

# 31. Refactoring

Refactoring means changing internal structure without changing external behavior.

Examples:

- rename variable,
- extract function,
- extract class,
- remove duplication,
- simplify conditional,
- replace magic values with named constants,
- split module,
- introduce strategy,
- remove dead code.

## Safe refactoring loop

```text
1. Add or confirm tests
2. Make one small structural change
3. Run tests
4. Commit when stable
5. Repeat
```

Small steps reduce risk.

## Example: Extract function

Before:

```text
if customer.totalSpend > 50000 and customer.accountAgeDays > 365:
    discount = subtotal * 0.10
```

After:

```text
if customer.isPreferredCustomer():
    discount = preferredCustomerDiscount(subtotal)
```

---

# 32. Code Smells

A code smell is a signal that design may need improvement.

It is not automatically a bug.

## Common smells

### Long function

A function performs too many unrelated operations.

### Large class

A class owns too many responsibilities.

### Long parameter list

The API is difficult to understand and change.

### Duplicate code

The same business rule appears in several places.

### Primitive obsession

Important concepts are represented only as strings/numbers.

### Feature envy

A method uses another object's data more than its own.

### Shotgun surgery

One small feature requires edits in many unrelated files.

### Divergent change

One module changes for many unrelated reasons.

### God object

One object knows and controls almost everything.

### Boolean blindness

Calls such as:

```text
process(true, false, true)
```

are impossible to understand without opening the function.

### Temporal coupling

Functions must be called in a hidden order:

```text
processor.initialize()
processor.load()
processor.normalize()
processor.run()
```

If ordering is mandatory, encode the lifecycle more clearly.

### Dead code

Unused functions, branches, imports, comments, feature flags, or configuration should be removed when safe.

Version control already remembers old code.

---

# 33. Design Patterns — Use Them Carefully

Patterns are reusable design ideas, not goals.

## Strategy

Use when behavior varies by policy.

```text
TaxStrategy
  IndiaTaxStrategy
  UaeTaxStrategy
  SingaporeTaxStrategy
```

## Factory

Use when object creation is complex or varies.

```text
PaymentProcessorFactory.create(type)
```

## Adapter

Use when integrating incompatible interfaces.

```text
LegacyPaymentAdapter
```

converts your clean interface to the vendor's API.

## Decorator

Adds behavior without changing the underlying object.

```text
RetryingPaymentGateway(
    LoggingPaymentGateway(
        StripePaymentGateway()
    )
)
```

## Observer / Publish-Subscribe

Use when multiple parts react to an event.

```text
OrderPlaced
 -> send confirmation
 -> update analytics
 -> reserve shipping
```

## Repository

Encapsulates persistence access.

```text
OrderRepository.findById(id)
OrderRepository.save(order)
```

## Builder

Helpful when construction has many optional values.

```text
ReportBuilder()
    .title(...)
    .dateRange(...)
    .includeCharts(...)
    .build()
```

## State

Useful when behavior depends strongly on lifecycle state.

```text
DraftOrder
PaidOrder
ShippedOrder
CancelledOrder
```

## Warning

Do not introduce a pattern only because you know it.

A pattern that adds more indirection than value makes the code less clean.

---

# 34. Clean Architecture and Layering

A maintainable system usually separates business logic from infrastructure.

A simple layered model:

```text
Presentation
    ↓
Application / Use Cases
    ↓
Domain
    ↓
Infrastructure
```

## Presentation

Examples:

- HTTP controller,
- UI,
- CLI command,
- message consumer.

Responsibilities:

- parse input,
- authenticate where appropriate,
- call application logic,
- map result to output.

## Application / Use Cases

Coordinates a user/business action.

Example:

```text
PlaceOrder
ApproveInvoice
ResetPassword
```

## Domain

Contains core business concepts and rules.

Example:

```text
Order
Invoice
Payment
DiscountPolicy
```

## Infrastructure

Contains technical details:

- SQL,
- ORM,
- HTTP SDK,
- filesystem,
- email provider,
- queue provider.

## Dependency direction

Core business logic should not need to know whether data comes from:

- MySQL,
- PostgreSQL,
- REST API,
- filesystem,
- in-memory test fake.

This is the practical benefit of dependency inversion.

---

# 35. Concurrency and Asynchronous Code

Concurrency adds complexity because ordering becomes less predictable.

## 35.1 Minimize shared mutable state

Danger:

```text
globalCounter++
```

from several threads/tasks.

Possible solutions:

- immutable messages,
- actor/message-passing models,
- atomic operations,
- locks,
- isolated state ownership.

## 35.2 Use clear async boundaries

Bad:

```text
saveOrder()
sendEmail()
publishEvent()
```

when some calls are asynchronous but the function name gives no clue about lifecycle.

Use conventions appropriate to the language, such as:

```text
await saveOrder()
```

## 35.3 Handle timeout, cancellation and retry

Every external async operation should have thought given to:

- timeout,
- retry,
- cancellation,
- partial completion,
- idempotency.

## 35.4 Avoid fire-and-forget for critical operations

If sending an invoice to accounting is critical, do not start a background operation and simply assume success.

Persist or queue the work reliably.

---

# 36. Performance Without Destroying Readability

Clean code is not necessarily slow code.

But premature optimization can make code difficult to maintain.

## Process

1. Make it correct.
2. Make it clear.
3. Measure.
4. Optimize the actual bottleneck.
5. Measure again.

## Example

Do not replace a readable operation with bit tricks unless profiling proves it matters.

## High-impact performance areas

Usually focus first on:

- database query count,
- network calls,
- serialization,
- disk I/O,
- large allocations,
- algorithmic complexity,
- caching,
- concurrency,
- rendering large UI lists.

Micro-optimizing variable access is rarely the first priority.

## Document non-obvious optimization

If a strange-looking implementation is deliberately faster, explain why:

```text
# We intentionally keep the precomputed lookup table.
# This endpoint processes ~2M records/day and profiling showed
# repeated normalization consumed 38% of runtime.
```

---

# 37. Security as Part of Clean Code

Security should not be treated as a final patch.

## 37.1 Validate and sanitize at boundaries

Do not trust:

- HTTP input,
- files,
- headers,
- queue messages,
- browser values,
- third-party APIs.

## 37.2 Parameterize database queries

Prevent SQL injection.

## 37.3 Encode output by context

HTML, JavaScript, SQL, shell, URLs and JSON have different escaping requirements.

## 37.4 Never hardcode secrets

Store secrets in:

- environment variables,
- secret stores,
- platform secret managers.

## 37.5 Apply least privilege

A service account should have only the permissions it needs.

## 37.6 Keep authorization close to protected operations

Do not rely only on hiding buttons in the UI.

Backend code must enforce authorization.

## 37.7 Avoid sensitive data in logs

Redact or omit credentials, tokens, payment details and sensitive personal data.

## 37.8 Make dangerous operations obvious

Prefer:

```text
deleteUserPermanently(userId)
```

over:

```text
process(userId, 4)
```

---

# 38. Clean Frontend Code

Frontend clean code has additional concerns.

## Separate

- view rendering,
- state management,
- data fetching,
- validation,
- domain/business logic,
- formatting.

## Bad component

A single UI component that:

- fetches data,
- transforms data,
- validates forms,
- stores global state,
- renders 800 lines,
- directly calls analytics,
- contains permissions,
- calculates prices.

## Cleaner split

```text
OrderPage
OrderForm
OrderSummary
useOrderData / OrderStore
orderValidator
pricingService
```

## Keep components focused

A component should preferably have one clear UI responsibility.

## Avoid duplicated server state

Use a consistent data-fetching/state strategy rather than manually copying API responses into many disconnected variables.

## Keep business rules out of templates

Bad:

```text
<button visible if total > 5000 && user.role == "MGR" && region != "X">
```

Better:

```text
canApproveOrder
```

computed in appropriate application/domain logic.

---

# 39. Clean Backend and Service Code

Backend code should separate transport from business rules.

## Controller

Bad:

```text
POST /orders
- validate inventory
- calculate tax
- execute SQL
- call payment provider
- generate invoice
- send email
```

Cleaner:

```text
controller:
    request = parseRequest()
    result = placeOrder.execute(request)
    return mapToHttpResponse(result)
```

## Application service

```text
placeOrder.execute(command):
    order = orderFactory.create(command)
    payment = paymentGateway.authorize(order.total)
    order.markPaid(payment.id)
    orderRepository.save(order)
    eventBus.publish(OrderPlaced(order.id))
```

The controller stays focused on HTTP.

---

# 40. Clean CLI, Scripts and Automation

"Temporary" scripts often become permanent.

Apply the same discipline.

## A good script should have

- clear arguments,
- help text,
- input validation,
- safe defaults,
- useful exit codes,
- logs,
- dry-run mode for destructive tasks,
- idempotency when possible.

Example:

```text
cleanup-users --inactive-days 365 --dry-run
```

is safer than a script that immediately deletes accounts.

## Destructive script pattern

```text
1. Parse arguments
2. Validate environment
3. Query candidates
4. Print summary
5. Require explicit destructive flag
6. Execute
7. Record audit output
```

---

# 41. Working with Legacy Code

Legacy code is often code without reliable tests and with high change risk.

Do not begin by rewriting everything.

## Strategy

### Step 1 — Understand current behavior

Collect:

- logs,
- examples,
- production outputs,
- database effects,
- API contracts.

### Step 2 — Add characterization tests

These tests capture what the system currently does.

Even if behavior is strange, the test gives you a safety net.

### Step 3 — Find seams

A seam is a place where behavior can be substituted.

Examples:

- wrapper around a payment SDK,
- repository interface around database access,
- function around a global clock.

### Step 4 — Refactor in small steps

Avoid giant "cleanup" pull requests.

### Step 5 — Improve code around the change

A useful principle:

> Leave the code a little cleaner than you found it.

## Strangler pattern

For large legacy systems, gradually replace one capability at a time rather than rewriting the entire system at once.

---

# 42. Code Reviews

Code review is not only for finding bugs.

It also improves:

- design,
- readability,
- knowledge sharing,
- security,
- consistency.

## Reviewer questions

- Can I understand the intention?
- Are names clear?
- Is the change smaller than necessary?
- Are responsibilities separated?
- Are edge cases handled?
- Are errors observable?
- Are tests meaningful?
- Is duplication justified?
- Are security boundaries respected?
- Could this break existing behavior?
- Is there unnecessary abstraction?
- Is documentation needed?

## Review comments should be specific

Weak:

```text
This is bad.
```

Better:

```text
This function both validates the invoice and performs persistence.
Could we extract the database write into InvoiceRepository so the
validation rule can be tested independently?
```

## Distinguish blocking from optional feedback

Useful labels:

```text
Blocking:
Suggestion:
Question:
Nit:
```

This prevents minor style preferences from blocking useful work.

---

# 43. Git and Commit Hygiene

Clean code also includes clean change history.

## Make focused commits

Good:

```text
Add validation for duplicate invoice numbers
```

Less useful:

```text
changes
fix
final final
update code
```

## Separate unrelated refactoring from behavior changes when possible

This makes review and rollback safer.

## Good commit message structure

```text
Prevent duplicate invoice creation

- validate vendor + invoice number combination
- return conflict response
- add repository integration test
```

## Keep commits buildable when practical

Avoid leaving the branch in a broken state after every intermediate commit.

---

# 44. AI-Generated Code and Clean Coding

AI can generate code quickly, but generated code still needs engineering judgment.

## Never assume generated code is correct

Review for:

- incorrect APIs,
- deprecated approaches,
- hidden edge cases,
- insecure defaults,
- unnecessary complexity,
- fake libraries or functions,
- missing error handling,
- lack of tests.

## Good AI workflow

```text
1. Describe the requirement clearly.
2. Ask for a small implementation.
3. Review the design.
4. Run tests and static analysis.
5. Verify security-sensitive areas.
6. Refactor names and boundaries.
7. Add missing tests.
8. Commit only code you understand.
```

## Useful prompt style

Instead of:

```text
Write an order system.
```

use:

```text
Implement an OrderService that:
- accepts validated CreateOrderCommand
- calculates totals through PricingService
- persists through OrderRepository
- never sends email directly
- returns OrderResult
- includes unit tests for inventory failure and successful creation
- avoids global state
```

AI is most useful when you already have clear design constraints.

---

# 45. Language-Specific Mapping

Clean-code principles are language-agnostic, but syntax and tools differ.

## Python

Focus on:

- PEP 8 style,
- type hints where useful,
- small modules,
- explicit exceptions,
- context managers,
- dataclasses/value objects,
- avoiding excessive global state.

Example:

```python
def calculate_total(lines: list[InvoiceLine]) -> Money:
    return sum((line.total for line in lines), start=Money.zero())
```

Prefer:

```python
def is_eligible_for_discount(customer: Customer) -> bool:
    ...
```

over cryptic one-liners.

## JavaScript / TypeScript

Focus on:

- `const` by default,
- TypeScript types for domain contracts,
- explicit async handling,
- avoiding deeply nested callbacks,
- small modules,
- schema validation at external boundaries.

Prefer:

```ts
const activeUsers = users.filter(user => user.isActive);
```

Type domain concepts:

```ts
type OrderId = string;
type OrderStatus = "draft" | "paid" | "shipped";
```

Use richer branded/value types for high-risk domains where useful.

## PHP

Focus on:

- strict typing where possible,
- dependency injection,
- PSR conventions,
- typed properties,
- clear service/repository boundaries,
- avoiding enormous controllers,
- avoiding global helper abuse.

Example:

```php
final class InvoiceService
{
    public function __construct(
        private InvoiceRepository $repository,
        private TaxCalculator $taxCalculator,
    ) {}
}
```

## Java

Focus on:

- meaningful packages,
- immutable data where practical,
- small interfaces,
- dependency injection,
- avoiding excessive inheritance,
- value objects,
- clear exception types.

Use records/value types where suitable.

## C#

Focus on:

- dependency injection,
- async/await correctness,
- nullable reference type awareness,
- records/value objects,
- clear service boundaries,
- LINQ used for clarity rather than cleverness.

## Go

Focus on:

- small interfaces,
- explicit error handling,
- composition,
- simple package boundaries,
- context propagation,
- `gofmt`,
- avoiding unnecessary abstraction.

Go often favors direct, simple code over pattern-heavy architecture.

## C++

Focus on:

- RAII,
- ownership clarity,
- smart pointers,
- const correctness,
- value semantics,
- avoiding unsafe raw memory manipulation unless justified,
- deterministic resource management.

## Rust

Focus on:

- ownership and borrowing,
- explicit `Result` / `Option`,
- strong domain types,
- immutable-by-default style,
- exhaustive matching,
- avoiding unnecessary `unwrap()` in production paths.

## Kotlin

Focus on:

- null safety,
- data classes,
- sealed classes,
- immutable collections where practical,
- extension functions used deliberately,
- coroutines with structured concurrency.

## Swift

Focus on:

- optionals,
- value types,
- protocol-oriented design,
- clear async boundaries,
- immutable state where possible.

---

# 46. Real-World Scenario Playbook

This section shows how clean-code ideas apply to realistic situations.

## Scenario 1 — User registration

### Poor design

```text
register(request):
    checkEmailRegex()
    executeSQL()
    sendEmail()
    assignRole()
    logToFile()
    return json()
```

### Cleaner design

```text
RegistrationController
    ↓
RegisterUser
    ↓
UserRegistrationPolicy
UserRepository
PasswordHasher
EventPublisher
```

Pseudo-flow:

```text
command = RegisterUserCommand.from(request)

user = registerUser.execute(command)

return UserResponse.from(user)
```

The use case:

```text
execute(command):
    ensureEmailAvailable(command.email)

    user = User.register(
        email = command.email,
        passwordHash = passwordHasher.hash(command.password)
    )

    userRepository.save(user)
    eventPublisher.publish(UserRegistered(user.id))

    return user
```

### Why this is cleaner

- Controller handles HTTP only.
- Password logic is isolated.
- Uniqueness rule is explicit.
- Notifications can react to `UserRegistered`.
- Domain logic can be tested without HTTP.

---

## Scenario 2 — Invoice approval workflow

Requirements:

- invoice below ₹50,000 → manager approval,
- ₹50,000 or above → manager + finance approval,
- rejected invoice cannot be approved later without reopening.

### Weak implementation

```text
if amount < 50000:
    status = 2
else:
    status = 5
```

Magic numbers hide business meaning.

### Cleaner model

```text
ApprovalLevel.MANAGER
ApprovalLevel.FINANCE
InvoiceStatus.PENDING_MANAGER
InvoiceStatus.PENDING_FINANCE
InvoiceStatus.REJECTED
InvoiceStatus.APPROVED
```

Policy:

```text
function requiredApprovals(invoice):
    if invoice.amount < FINANCE_APPROVAL_THRESHOLD:
        return [MANAGER]

    return [MANAGER, FINANCE]
```

Domain transition:

```text
invoice.approveBy(manager)

if invoice.requiresFinanceApproval():
    invoice.markPendingFinance()
else:
    invoice.markApproved()
```

Illegal transition:

```text
invoice.approveBy(finance)
```

should fail when status is `REJECTED`.

### Clean-code lessons

- Model states explicitly.
- Use named thresholds.
- Centralize workflow rules.
- Make invalid transitions impossible or clearly rejected.

---

## Scenario 3 — E-commerce discount rules

Bad:

```text
if total > 5000:
    discount = 0.10
elif customer.years > 2:
    discount = 0.05
elif coupon == "SAVE10":
    discount = 0.10
```

This becomes difficult as rules grow.

Cleaner:

```text
discountPolicies = [
    HighValueOrderDiscount(),
    LoyaltyDiscount(),
    CouponDiscount(),
]
```

Then decide the business composition rule:

```text
bestDiscount = max(
    policy.calculate(order, customer)
    for policy in discountPolicies
)
```

or stacking:

```text
discount = policies.reduce(applyPolicy, order)
```

The clean design depends on business semantics.

---

## Scenario 4 — File import

Requirements:

- CSV uploaded,
- validate headers,
- validate rows,
- store valid rows,
- produce rejection report.

Clean pipeline:

```text
Upload
  ↓
Parse
  ↓
Schema Validation
  ↓
Row Validation
  ↓
Normalization
  ↓
Persistence
  ↓
Import Report
```

Avoid a single 800-line `importFile()` function.

Represent errors:

```text
RowError(
    rowNumber = 17,
    field = "employee_id",
    code = "INVALID_FORMAT",
    message = "Employee ID must match SG-12345"
)
```

This makes support and debugging much easier.

---

## Scenario 5 — External payment API

Bad:

```text
result = http.post(...)
if result.status == 200:
    ...
```

Cleaner abstraction:

```text
interface PaymentGateway:
    authorize(paymentRequest) -> PaymentAuthorization
```

Vendor adapter:

```text
ExamplePayGateway
    - maps your request to vendor format
    - calls HTTP client
    - translates vendor errors
    - returns your domain result
```

Business logic should not know the vendor's exact JSON format.

---

## Scenario 6 — Batch job

A nightly job updates employee status.

Weak:

```text
for employee in allEmployees:
    update()
```

Cleaner:

```text
JobRun
  - runId
  - startedAt
  - processedCount
  - successCount
  - failureCount
```

Process in batches:

```text
for batch in employeeRepository.activeEmployees(batchSize=500):
    processBatch(batch)
```

Add:

- idempotency,
- retry,
- failure report,
- job metrics,
- correlation ID.

---

## Scenario 7 — Feature flags

Bad:

```text
if config.flagA:
    ...
```

scattered everywhere.

Better:

```text
pricingStrategy = pricingStrategyResolver.for(user)
```

Feature-flag checks stay near the boundary and choose a strategy.

Remove old flags after rollout is complete.

---

## Scenario 8 — Permission checks

Bad frontend-only rule:

```text
if user.role == "ADMIN":
    showDeleteButton()
```

and API deletes without authorization.

Cleaner:

```text
authorization.require(
    currentUser,
    Permission.DELETE_USER,
    targetUser
)
```

The backend is the source of truth.

The UI may also hide unauthorized actions for usability.

---

## Scenario 9 — Retryable message consumer

Message queues may deliver the same message more than once.

Unsafe:

```text
onPaymentMessage(message):
    createPayment(message)
```

Possible duplicate payment.

Cleaner:

```text
if processedMessageRepository.exists(message.id):
    return

transaction:
    paymentService.process(message)
    processedMessageRepository.record(message.id)
```

Use the idempotency strategy appropriate for your infrastructure.

---

## Scenario 10 — Time-dependent logic

Bad:

```text
if now() > subscription.expiresAt:
```

inside code that is hard to test.

Better:

```text
SubscriptionService(clock)
```

then:

```text
if clock.now() > subscription.expiresAt:
```

Tests can supply a fixed clock.

---

## Scenario 11 — Reporting query

A report requires complex SQL joins.

Do not force domain objects through 25 repositories if a dedicated query is clearer.

Use a read model:

```text
SalesReportQuery.fetch(dateRange, region)
```

Clean code is about clarity, not blindly applying one architecture everywhere.

---

## Scenario 12 — Caching

Cache should not contaminate every caller.

Bad:

```text
if cache.has(id):
    return cache.get(id)

user = db.load(id)
cache.put(id, user)
return user
```

copied everywhere.

Better:

```text
CachedUserRepository(
    inner = SqlUserRepository(),
    cache = RedisCache()
)
```

The rest of the application depends on `UserRepository`.

---

# 47. Clean-Code Decision Framework

When you are unsure whether code is clean, ask these questions in order.

## 1. Is it correct?

Clean-looking incorrect code is still bad code.

## 2. Can I understand its intent quickly?

If not, improve naming, structure or abstractions.

## 3. Is the behavior located where I would expect?

A pricing rule should not be hidden inside a controller or HTML template.

## 4. Can I change one requirement without editing many unrelated modules?

If not, coupling may be too high.

## 5. Can I test the important rule without starting the entire system?

If not, dependencies may be too tightly bound.

## 6. Are failures explicit?

Could errors disappear silently?

## 7. Is the abstraction helping?

If the abstraction requires more explanation than the problem, remove or simplify it.

## 8. Is there duplication of business knowledge?

If yes, centralize it appropriately.

## 9. Am I solving a real requirement or an imagined future requirement?

Apply YAGNI.

## 10. Have I optimized based on measurement?

If not, keep the clear version first.

---

# 48. Beginner-to-Advanced Learning Roadmap

## Level 1 — Beginner

Master:

- meaningful variable names,
- consistent formatting,
- small functions,
- basic input validation,
- simple control flow,
- avoiding magic values,
- comments that explain why,
- basic unit tests.

Practice:

```text
Take a 100-line function and split it into named steps.
```

## Level 2 — Intermediate

Master:

- SOLID basics,
- module boundaries,
- dependency injection,
- error handling,
- repository/service patterns,
- pure functions,
- immutability,
- test doubles,
- refactoring.

Practice:

```text
Refactor a controller that contains SQL and business rules.
```

## Level 3 — Advanced

Master:

- domain modeling,
- clean architecture,
- event-driven boundaries,
- concurrency,
- idempotency,
- observability,
- performance profiling,
- security design,
- legacy-code migration.

Practice:

```text
Design a payment workflow where external provider failures
can be retried safely without double charging.
```

## Level 4 — Senior / Lead

Master:

- choosing trade-offs,
- preventing over-engineering,
- designing team conventions,
- reviewing architecture,
- simplifying complex systems,
- migration strategies,
- setting testing strategy,
- identifying operational risks,
- designing for ownership.

The senior skill is not using the most patterns.

It is choosing the **smallest reliable design that handles the real constraints**.

---

# 49. Practical Checklists

## Before Writing Code

- What problem am I solving?
- What are the inputs and outputs?
- What are the edge cases?
- What can fail?
- What must be transactional?
- What is security-sensitive?
- What already exists that I can reuse?
- What should not be coupled to infrastructure?

## While Writing Code

- Are names clear?
- Are functions focused?
- Is control flow simple?
- Are magic values named?
- Are side effects obvious?
- Are dependencies explicit?
- Am I repeating business rules?
- Am I adding speculative complexity?

## Before Commit

- Does it compile/run?
- Do tests pass?
- Did I run formatter/linter?
- Did I remove debug prints?
- Did I remove commented-out code?
- Did I accidentally include a secret?
- Did I add tests for the new behavior?
- Is the commit focused?
- Does the message explain the change?

## Before Pull Request

- Can another developer understand the change?
- Is the PR reasonably small?
- Are risky changes documented?
- Are database migrations backward compatible where required?
- Are logs/metrics sufficient?
- Is rollback possible?
- Are permissions and validation handled?
- Did I update relevant docs?

## Function Checklist

A good function usually:

- has a clear verb-based name,
- performs one coherent operation,
- has few parameters,
- avoids boolean blindness,
- does not hide unrelated side effects,
- handles or propagates errors intentionally,
- is easy to test,
- returns a meaningful result.

## Class / Module Checklist

A good class/module usually:

- has one primary responsibility,
- has high cohesion,
- exposes a small public API,
- does not know unnecessary implementation details,
- depends on abstractions at important boundaries,
- avoids global mutable state,
- has a name that matches its role.

## Database Checklist

- Are queries parameterized?
- Are indexes considered?
- Are N+1 queries avoided?
- Is transaction scope correct?
- Can the operation be retried safely?
- Are migrations safe?
- Are constraints enforced at the database when appropriate?
- Is sensitive data protected?

## API Checklist

- Are request/response models explicit?
- Is validation complete?
- Are status/error semantics consistent?
- Is authorization enforced?
- Are retries/idempotency considered?
- Are breaking changes controlled?
- Are secrets excluded from errors/logs?

## Security Checklist

- Validate untrusted input.
- Use parameterized queries.
- Encode output correctly.
- Never hardcode secrets.
- Avoid sensitive logs.
- Apply least privilege.
- Enforce authorization server-side.
- Keep dependencies patched.
- Use secure defaults.
- Fail safely.

## Performance Checklist

- Measure before optimizing.
- Check database calls.
- Check network calls.
- Check algorithmic complexity.
- Check memory allocation.
- Check large payloads.
- Add caching only where useful.
- Re-measure after optimization.

## Legacy-Code Checklist

- Capture current behavior.
- Add characterization tests.
- Identify a small seam.
- Change one responsibility at a time.
- Avoid simultaneous rewrite + feature expansion.
- Monitor behavior after deployment.

## Code Review Checklist

- Correctness
- Readability
- Naming
- Responsibilities
- Coupling
- Duplication
- Error handling
- Security
- Tests
- Performance risks
- Backward compatibility
- Operational visibility

---

# 50. Final Principles to Remember

If you remember only a small part of this handbook, remember these:

1. **Code is communication.**
2. **Choose names that reveal intent.**
3. **Keep functions and modules focused.**
4. **Make dependencies and side effects visible.**
5. **Prefer simple designs over clever designs.**
6. **Model important domain concepts explicitly.**
7. **Avoid duplication of business knowledge.**
8. **Use abstraction only when it reduces real complexity.**
9. **Handle errors deliberately; never hide failures.**
10. **Validate at boundaries.**
11. **Write tests for important behavior.**
12. **Refactor in small safe steps.**
13. **Measure before optimizing.**
14. **Security is part of code quality.**
15. **Consistency beats personal preference.**
16. **Do not over-engineer for imaginary future requirements.**
17. **Keep business logic independent of frameworks where practical.**
18. **Prefer composition over deep inheritance.**
19. **Leave the code cleaner than you found it.**
20. **The best code is the simplest code that correctly expresses the real requirement.**

---

# Appendix A — Bad vs Clean Quick Reference

## Naming

Bad:

```text
x = 18
```

Clean:

```text
minimumVotingAge = 18
```

## Magic values

Bad:

```text
if retries > 5:
```

Clean:

```text
MAX_RETRY_ATTEMPTS = 5
```

## Boolean flags

Bad:

```text
render(true, false)
```

Clean:

```text
render(
    mode = RenderMode.PRINT,
    includeFooter = false
)
```

## Deep nesting

Bad:

```text
if user:
    if active:
        if allowed:
            execute()
```

Clean:

```text
if user is null:
    return
if not active:
    return
if not allowed:
    return

execute()
```

## Hidden side effect

Bad:

```text
getUser()
# also updates database
```

Clean:

```text
findUser()
recordUserAccess()
```

## Global dependency

Bad:

```text
GlobalDb.save(order)
```

Clean:

```text
orderRepository.save(order)
```

## Primitive status

Bad:

```text
status = 4
```

Clean:

```text
status = InvoiceStatus.APPROVED
```

## Scattered permissions

Bad:

```text
if role == "ADMIN":
```

in 30 files.

Clean:

```text
authorization.can(currentUser, Permission.DELETE_USER)
```

---

# Appendix B — Refactoring Kata

Use this exercise to practice.

## Starting code

```text
function calc(o, c, p):
    t = 0
    for i in o:
        t = t + i.p * i.q

    if c.y > 2:
        t = t * 0.9

    if p == "EXP":
        t = t + 500
    else:
        t = t + 100

    return t
```

## Step 1 — Rename

```text
function calculateOrderTotal(orderLines, customer, shippingMethod):
```

## Step 2 — Extract subtotal

```text
subtotal = calculateSubtotal(orderLines)
```

## Step 3 — Extract discount policy

```text
discountedSubtotal = loyaltyDiscount.apply(subtotal, customer)
```

## Step 4 — Extract shipping

```text
shippingCost = shippingCalculator.calculate(shippingMethod)
```

## Step 5 — Final function

```text
function calculateOrderTotal(orderLines, customer, shippingMethod):
    subtotal = calculateSubtotal(orderLines)
    discountedSubtotal = loyaltyDiscount.apply(subtotal, customer)
    shippingCost = shippingCalculator.calculate(shippingMethod)

    return discountedSubtotal + shippingCost
```

Now each rule has a name and can be tested independently.

---

# Appendix C — Example Project Structure

A medium-sized application might use:

```text
src/
├── orders/
│   ├── domain/
│   │   ├── Order
│   │   ├── OrderLine
│   │   └── OrderStatus
│   ├── application/
│   │   ├── PlaceOrder
│   │   └── CancelOrder
│   ├── infrastructure/
│   │   ├── SqlOrderRepository
│   │   └── OrderHttpController
│   └── tests/
│
├── payments/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── tests/
│
├── shared/
│   ├── Money
│   ├── Clock
│   └── Result
│
└── bootstrap/
    └── dependency_container
```

Do not copy this blindly.

The best structure is the one that lets developers find code quickly and keeps domain responsibilities clear.

---

# Appendix D — Clean Code Vocabulary

| Term | Meaning |
|---|---|
| Abstraction | A simplified interface hiding unnecessary details |
| Cohesion | How strongly related the responsibilities inside a module are |
| Coupling | How dependent modules are on each other |
| Encapsulation | Hiding internal state/implementation behind controlled behavior |
| Side effect | A change outside a function's returned value |
| Pure function | Function without external side effects and deterministic output |
| Invariant | Rule that must always remain true |
| Idempotent | Repeating an operation produces no additional unintended effect |
| Refactoring | Improving structure without intentionally changing behavior |
| Code smell | Design warning sign that may justify refactoring |
| Dependency injection | Supplying dependencies from outside an object/function |
| Domain model | Code representing business concepts and rules |
| Adapter | Converts one interface to another |
| Repository | Abstraction over persistence access |
| DTO | Data-transfer object used to move data between boundaries |
| Value object | Object defined by its value rather than identity |
| Entity | Domain object with identity across time |
| Immutability | State cannot change after creation |
| Guard clause | Early return that removes unnecessary nesting |
| Technical debt | Future cost caused by design/implementation shortcuts |
| Characterization test | Test that captures existing legacy behavior |
| Seam | Place where behavior/dependency can be replaced |
| Observability | Ability to understand system behavior through logs, metrics, traces |
| Inversion of control | Framework/design controls when dependencies/logic are invoked |
| Contract | Expected behavior between components |
| Fail fast | Detect invalid state as early as possible |

---

# Appendix E — Practice Projects

Use these projects to apply the handbook.

## Beginner

1. Todo application
2. Expense tracker
3. Student grade calculator
4. File organizer
5. Contact manager

Focus on:

- names,
- small functions,
- validation,
- formatting,
- tests.

## Intermediate

1. Inventory management system
2. Invoice approval system
3. Authentication service
4. REST API for orders
5. CSV/Excel import processor

Focus on:

- modules,
- repositories,
- dependency injection,
- tests,
- error handling,
- domain models.

## Advanced

1. Payment processing service
2. Event-driven order workflow
3. Multi-tenant SaaS backend
4. Background job platform
5. Notification service supporting email/SMS/push

Focus on:

- architecture,
- idempotency,
- concurrency,
- security,
- observability,
- resilience.

---

# Appendix F — Suggested Daily Clean-Code Practice

When learning, practice on real code instead of memorizing principles.

A useful routine:

```text
15 min — Read one clean-code topic
20 min — Refactor a small code example
15 min — Write or improve tests
10 min — Review the change and explain why it is cleaner
```

Each week, choose one theme:

```text
Week 1 — Naming
Week 2 — Functions
Week 3 — Error handling
Week 4 — Testing
Week 5 — SOLID
Week 6 — Refactoring
Week 7 — Architecture
Week 8 — Legacy code
```

---

# Closing Note

Clean coding is not a collection of rigid laws.

It is a discipline for reducing unnecessary complexity.

Two experienced developers may choose different designs and both can be clean if the code remains:

- understandable,
- correct,
- testable,
- maintainable,
- safe,
- appropriate for the real problem.

When uncertain, prefer the design that makes the business intent easiest to see.

> **Make the code easy to read, easy to change, and difficult to misuse.**
