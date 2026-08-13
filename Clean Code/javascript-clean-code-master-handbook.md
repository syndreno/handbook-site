# JavaScript Clean Coding — Master Handbook

> A practical, beginner-friendly, in-depth handbook for writing JavaScript that is readable, maintainable, testable, secure, and easy to change.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Clean Code Means](#2-what-clean-code-means)
3. [The Core Principles](#3-the-core-principles)
4. [Naming](#4-naming)
5. [Variables, Constants, and Scope](#5-variables-constants-and-scope)
6. [Functions](#6-functions)
7. [Function Parameters and Return Values](#7-function-parameters-and-return-values)
8. [Conditionals and Control Flow](#8-conditionals-and-control-flow)
9. [Loops, Iteration, and Array Methods](#9-loops-iteration-and-array-methods)
10. [Objects and Data Modeling](#10-objects-and-data-modeling)
11. [Classes, Composition, and OOP](#11-classes-composition-and-oop)
12. [SOLID Principles in JavaScript](#12-solid-principles-in-javascript)
13. [Functional Programming for Cleaner JavaScript](#13-functional-programming-for-cleaner-javascript)
14. [Immutability and Side Effects](#14-immutability-and-side-effects)
15. [Modules and Project Structure](#15-modules-and-project-structure)
16. [Error Handling](#16-error-handling)
17. [Promises and Async/Await](#17-promises-and-asyncawait)
18. [API and Network Code](#18-api-and-network-code)
19. [DOM and Frontend Clean Code](#19-dom-and-frontend-clean-code)
20. [Node.js Clean Code](#20-nodejs-clean-code)
21. [Validation and Sanitization](#21-validation-and-sanitization)
22. [Security-Oriented Clean Coding](#22-security-oriented-clean-coding)
23. [Logging and Observability](#23-logging-and-observability)
24. [Testing for Clean Code](#24-testing-for-clean-code)
25. [Testable Design](#25-testable-design)
26. [Comments and Documentation](#26-comments-and-documentation)
27. [Formatting and Style](#27-formatting-and-style)
28. [Magic Values and Configuration](#28-magic-values-and-configuration)
29. [Null, Undefined, and Defensive Coding](#29-null-undefined-and-defensive-coding)
30. [Dates, Numbers, Strings, and Data Conversion](#30-dates-numbers-strings-and-data-conversion)
31. [Performance Without Destroying Readability](#31-performance-without-destroying-readability)
32. [Common Code Smells](#32-common-code-smells)
33. [Refactoring Patterns](#33-refactoring-patterns)
34. [Clean Architecture in JavaScript](#34-clean-architecture-in-javascript)
35. [Design Patterns You Should Actually Know](#35-design-patterns-you-should-actually-know)
36. [Clean REST/API Service Example](#36-clean-restapi-service-example)
37. [Clean Frontend Feature Example](#37-clean-frontend-feature-example)
38. [Real-World Refactoring Case Study](#38-real-world-refactoring-case-study)
39. [Code Review Guide](#39-code-review-guide)
40. [Linting, Formatting, and Automation](#40-linting-formatting-and-automation)
41. [Git and Clean-Code Workflow](#41-git-and-clean-code-workflow)
42. [Beginner-to-Advanced Practice Roadmap](#42-beginner-to-advanced-practice-roadmap)
43. [Interview and Team Discussion Questions](#43-interview-and-team-discussion-questions)
44. [Master Clean-Code Checklist](#44-master-clean-code-checklist)
45. [Final Principles to Remember](#45-final-principles-to-remember)

---

# 1. How to Use This Handbook

This handbook is designed to work in three ways:

1. **Learning path** — read it from top to bottom if you are new to clean coding.
2. **Reference guide** — jump directly to the topic you need while coding.
3. **Code-review checklist** — use the later sections before creating a pull request.

Clean code is not about making code look clever. It is about making the next developer—including your future self—understand the code with the least possible mental effort.

A useful mental model is:

```text
Working code        = behaves correctly today
Clean code          = behaves correctly and is easy to understand
Maintainable code   = clean code that is easy to change safely
Production code     = maintainable code with validation, errors, tests,
                      security, logging, and operational awareness
```

Throughout this handbook you will see:

- **Bad** examples — code that works but creates maintenance problems.
- **Better** examples — improved structure and naming.
- **Scenario** examples — how the rule applies to real applications.
- **Why** explanations — so you understand the reasoning instead of memorizing rules.

---

# 2. What Clean Code Means

Clean JavaScript usually has these properties:

- It is easy to read.
- It communicates intent.
- It has predictable behavior.
- Functions do focused work.
- Names explain business meaning.
- Side effects are controlled.
- Error cases are explicit.
- Duplicate logic is minimized.
- Business rules are testable.
- Dependencies are visible.
- Modules have clear responsibilities.
- Comments explain **why**, not compensate for confusing code.
- A developer can safely change one part without unexpectedly breaking five others.

## Example

### Hard to read

```js
function p(a, b) {
  if (a && a.s === 1 && b > 0) {
    return b - b * 0.1;
  }
  return b;
}
```

### Cleaner

```js
function calculatePrice(customer, originalPrice) {
  const isPremiumCustomer = customer?.status === 'premium';

  if (!isPremiumCustomer) {
    return originalPrice;
  }

  const premiumDiscountRate = 0.1;
  return originalPrice * (1 - premiumDiscountRate);
}
```

The second version uses more characters but requires less thinking.

---

# 3. The Core Principles

## 3.1 Readability over cleverness

Prefer code that is obvious over code that is impressive.

### Clever but unnecessary

```js
const activeNames = users.filter(Boolean).filter(x => x.a).map(x => x.n);
```

### Clear

```js
const activeUsers = users.filter(user => user?.isActive);
const activeUserNames = activeUsers.map(user => user.name);
```

Compact code is not automatically clean code.

## 3.2 KISS — Keep It Simple

Do not introduce complexity before it is needed.

### Over-engineered

```js
class GreetingStrategyFactory {
  create(language) {
    return language === 'en'
      ? new EnglishGreetingStrategy()
      : new DefaultGreetingStrategy();
  }
}
```

For two simple choices, this may be enough:

```js
function getGreeting(language) {
  return language === 'en' ? 'Hello' : 'Hi';
}
```

Use abstractions when they solve a real problem, not because a pattern exists.

## 3.3 DRY — Don't Repeat Yourself

Duplicate **knowledge**, not merely similar-looking syntax, should be reduced.

### Repeated business rule

```js
const checkoutTotal = total - total * 0.15;
const invoiceTotal = subtotal - subtotal * 0.15;
```

### Centralized rule

```js
const PREMIUM_DISCOUNT_RATE = 0.15;

function applyPremiumDiscount(amount) {
  return amount * (1 - PREMIUM_DISCOUNT_RATE);
}
```

Do not force unrelated logic into one abstraction merely because it looks similar today.

## 3.4 YAGNI — You Aren't Gonna Need It

Do not build speculative functionality.

If the application only exports CSV today, do not build a complete plugin framework for CSV, PDF, XML, XLSX, and JSON unless the requirement actually exists.

## 3.5 Separation of Concerns

Different responsibilities should usually live in different functions/modules.

Bad controller:

```js
async function createOrder(req, res) {
  // validation
  // pricing
  // database insert
  // email
  // payment call
  // logging
  // HTTP response
}
```

Cleaner structure:

```text
controller -> validates HTTP boundary and maps response
service    -> coordinates business use case
repository -> stores/retrieves data
payment    -> talks to payment provider
notifier   -> sends email/message
```

## 3.6 Principle of Least Surprise

A function named `getUser()` should not delete logs, mutate global state, and send an email.

Names and behavior should match.

## 3.7 Boy Scout Rule

> Leave the code slightly cleaner than you found it.

Small improvements compound:

- rename one confusing variable;
- remove one dead branch;
- extract one duplicated rule;
- add one missing test;
- simplify one nested conditional.

---

# 4. Naming

Naming is one of the highest-value clean-code skills.

## 4.1 Variables should reveal intent

Bad:

```js
const d = 7;
const x = order.total * 0.18;
```

Better:

```js
const trialPeriodDays = 7;
const gstAmount = order.total * 0.18;
```

## 4.2 Avoid meaningless names

Avoid names such as:

```text
data
info
item
thing
temp
obj
arr
val
res
foo
bar
```

They can be acceptable in tiny, obvious scopes, but not for important business data.

Bad:

```js
function process(data) {
  return data.filter(item => item.a);
}
```

Better:

```js
function getActiveEmployees(employees) {
  return employees.filter(employee => employee.isActive);
}
```

## 4.3 Boolean names should sound true/false

Prefer:

```js
const isActive = true;
const hasPermission = false;
const canEditInvoice = true;
const shouldRetry = false;
```

Avoid:

```js
const active = true;
const permission = false;
const edit = true;
```

Useful prefixes:

```text
is...
has...
can...
should...
was...
needs...
```

## 4.4 Functions should usually use verbs

```js
getUserById()
calculateTax()
sendInvoiceEmail()
validatePayment()
formatCurrency()
createOrder()
archiveAccount()
```

## 4.5 Collections should normally be plural

```js
const user = ...;
const users = ...;

const invoice = ...;
const invoices = ...;
```

## 4.6 Use business vocabulary

If your organization calls an entity an `invoice`, do not randomly call it `bill`, `document`, `record`, and `voucher` in different modules unless those terms have different meanings.

Shared vocabulary reduces mental translation.

## 4.7 Avoid encoded names

Bad:

```js
const strUserName = 'Asha';
const arrOrders = [];
const objConfig = {};
```

JavaScript and modern editors already expose type information.

Use:

```js
const userName = 'Asha';
const orders = [];
const config = {};
```

## 4.8 Avoid misleading names

Bad:

```js
const userList = new Set();
```

Better:

```js
const uniqueUsers = new Set();
```

## 4.9 Name units

Bad:

```js
const timeout = 5000;
```

Better:

```js
const timeoutMs = 5000;
```

Other examples:

```js
const distanceKm = 12;
const fileSizeBytes = 2048;
const taxRatePercent = 18;
```

## Naming checklist

Ask:

- What does this represent?
- Is the unit clear?
- Is it singular/plural correctly?
- Can a new team member understand it without opening five other files?
- Does the function name accurately describe its side effects?

---

# 5. Variables, Constants, and Scope

## 5.1 Prefer `const`

Use `const` by default.

```js
const customerName = 'Meera';
```

Use `let` only when reassignment is required.

```js
let retryCount = 0;
retryCount += 1;
```

Avoid `var` in modern JavaScript because its function scope and hoisting behavior make code easier to misuse.

## 5.2 Keep scope small

Bad:

```js
let total;
let tax;
let result;

// 80 lines later...
```

Better:

```js
function calculateOrderTotal(order) {
  const subtotal = calculateSubtotal(order.items);
  const tax = calculateTax(subtotal);
  return subtotal + tax;
}
```

The shorter the lifetime of a variable, the easier it is to reason about.

## 5.3 Avoid global mutable state

Bad:

```js
let currentUser;

function login(user) {
  currentUser = user;
}
```

Global mutable state makes tests and concurrency harder.

Prefer explicit state passing or encapsulated state.

```js
function createSession(user) {
  return {
    user,
    createdAt: new Date()
  };
}
```

## 5.4 Avoid unnecessary reassignment

Bad:

```js
let price = product.price;
price = price * 1.18;
price = price - discount;
return price;
```

Cleaner:

```js
const priceWithTax = product.price * 1.18;
const finalPrice = priceWithTax - discount;
return finalPrice;
```

Intermediate names document the calculation.

## 5.5 Destructure when it improves clarity

```js
const { name, email, role } = user;
```

But avoid destructuring so aggressively that the source becomes unclear.

Potentially confusing:

```js
const { id, status, type, name } = payload;
```

If several objects have `id` and `status`, explicit access may be clearer:

```js
const orderId = order.id;
const paymentStatus = payment.status;
```

---

# 6. Functions

Functions are the main unit of behavior in JavaScript. Clean functions reduce complexity dramatically.

## 6.1 One level of responsibility

A function should ideally do one conceptual job.

Bad:

```js
async function registerUser(input) {
  if (!input.email.includes('@')) throw new Error('Invalid email');

  const passwordHash = await hash(input.password);
  const user = await db.users.insert({ ...input, passwordHash });

  await mailer.send({
    to: user.email,
    subject: 'Welcome'
  });

  console.log(`Registered ${user.id}`);
  return user;
}
```

This may work, but validation, persistence, hashing, notification, and logging are mixed.

Cleaner orchestration:

```js
async function registerUser(input, dependencies) {
  const validInput = validateRegistration(input);
  const passwordHash = await dependencies.passwordHasher.hash(validInput.password);

  const user = await dependencies.userRepository.create({
    ...validInput,
    passwordHash
  });

  await dependencies.welcomeNotifier.send(user);
  return user;
}
```

The orchestration still coordinates several actions, but the details are delegated.

## 6.2 Keep functions small—but not artificially tiny

There is no universal maximum line count.

The better question is:

> Can I describe this function with one clear sentence without using “and then and then and then”?

## 6.3 Avoid hidden side effects

Bad:

```js
function getCartTotal(cart) {
  cart.lastViewedAt = Date.now();
  analytics.track('cart_viewed');
  return calculateTotal(cart.items);
}
```

A getter-like function unexpectedly mutates state and sends analytics.

Better:

```js
function calculateCartTotal(cart) {
  return calculateTotal(cart.items);
}

function recordCartViewed(cart, analytics) {
  analytics.track('cart_viewed', { cartId: cart.id });
}
```

## 6.4 Avoid flag arguments when they represent different behaviors

Bad:

```js
function createReport(data, isDetailed) {
  if (isDetailed) {
    // detailed report
  } else {
    // summary report
  }
}
```

Better:

```js
function createSummaryReport(data) {}
function createDetailedReport(data) {}
```

A boolean flag often means the function has two responsibilities.

## 6.5 Prefer intention-revealing helpers

Bad:

```js
if (user.age >= 18 && user.status === 'active' && !user.blocked) {
  // allow purchase
}
```

Better:

```js
function canPurchase(user) {
  return user.age >= 18 && user.status === 'active' && !user.blocked;
}

if (canPurchase(user)) {
  // allow purchase
}
```

## 6.6 Avoid deeply nested functions unless closure is the purpose

Nested functions can be useful when a helper belongs only to one function, but excessive nesting makes scanning difficult.

## 6.7 Function abstraction levels

Try not to mix low-level implementation with high-level business flow.

Bad:

```js
async function placeOrder(order) {
  validateOrder(order);

  const payload = JSON.stringify(order);
  const response = await fetch('https://payment.example/charge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  });

  if (!response.ok) throw new Error('Payment failed');
  await saveOrder(order);
}
```

Cleaner:

```js
async function placeOrder(order, paymentGateway, orderRepository) {
  validateOrder(order);
  await paymentGateway.charge(order);
  return orderRepository.save(order);
}
```

---

# 7. Function Parameters and Return Values

## 7.1 Minimize parameter count

Bad:

```js
function createUser(name, email, phone, role, country, language, timezone) {}
```

Better:

```js
function createUser({
  name,
  email,
  phone,
  role,
  country,
  language,
  timezone
}) {}
```

An options object improves readability at call sites:

```js
createUser({
  name: 'Rohan',
  email: 'rohan@example.com',
  role: 'admin',
  country: 'IN'
});
```

## 7.2 Do not mutate arguments unless the contract explicitly says so

Bad:

```js
function applyDiscount(order) {
  order.total *= 0.9;
  return order;
}
```

Safer:

```js
function applyDiscount(order) {
  return {
    ...order,
    total: order.total * 0.9
  };
}
```

## 7.3 Return one conceptual type

Bad:

```js
function findUser(id) {
  if (!id) return false;
  if (id === 'system') return 'SYSTEM';
  return { id, name: 'User' };
}
```

Callers now need to handle boolean, string, and object.

Prefer a stable contract:

```js
function findUser(id) {
  if (!id) return null;
  return users.find(user => user.id === id) ?? null;
}
```

## 7.4 Use explicit result objects for complex outcomes

Useful when success/failure are expected business outcomes rather than exceptions.

```js
function validateCoupon(coupon, order) {
  if (!coupon) {
    return { ok: false, reason: 'COUPON_MISSING' };
  }

  if (coupon.expiresAt < new Date()) {
    return { ok: false, reason: 'COUPON_EXPIRED' };
  }

  return { ok: true, discountRate: coupon.discountRate };
}
```

## 7.5 Prefer meaningful return values

Instead of:

```js
await saveUser(user);
return true;
```

consider:

```js
return userRepository.save(user);
```

The caller may need the saved ID, timestamps, or normalized record.

---

# 8. Conditionals and Control Flow

## 8.1 Use guard clauses

Bad:

```js
function processPayment(payment) {
  if (payment) {
    if (payment.amount > 0) {
      if (payment.method) {
        return charge(payment);
      }
    }
  }

  return null;
}
```

Better:

```js
function processPayment(payment) {
  if (!payment) return null;
  if (payment.amount <= 0) return null;
  if (!payment.method) return null;

  return charge(payment);
}
```

Guard clauses remove nesting and expose the happy path.

## 8.2 Name complex conditions

Bad:

```js
if (
  user.role === 'admin' ||
  (user.role === 'manager' && document.ownerId === user.id) ||
  permissions.includes('DOCUMENT_EDIT')
) {
  editDocument();
}
```

Better:

```js
const isAdmin = user.role === 'admin';
const isOwningManager =
  user.role === 'manager' && document.ownerId === user.id;
const hasExplicitEditPermission = permissions.includes('DOCUMENT_EDIT');

const canEditDocument =
  isAdmin || isOwningManager || hasExplicitEditPermission;

if (canEditDocument) {
  editDocument();
}
```

## 8.3 Prefer positive conditions when practical

Harder:

```js
if (!isNotAllowed) {}
```

Clearer:

```js
if (isAllowed) {}
```

## 8.4 Avoid giant `if/else if` chains

Bad:

```js
function getShippingCost(type) {
  if (type === 'standard') return 40;
  else if (type === 'express') return 80;
  else if (type === 'same-day') return 150;
  else if (type === 'pickup') return 0;
  return 40;
}
```

For fixed mappings:

```js
const SHIPPING_COST_BY_TYPE = {
  standard: 40,
  express: 80,
  'same-day': 150,
  pickup: 0
};

function getShippingCost(type) {
  return SHIPPING_COST_BY_TYPE[type] ?? SHIPPING_COST_BY_TYPE.standard;
}
```

For behavior, use functions or polymorphism rather than merely replacing every `if` with a map.

## 8.5 Ternaries should stay simple

Good:

```js
const label = isActive ? 'Active' : 'Inactive';
```

Hard to read:

```js
const result = a ? (b ? c : d) : e ? f : g;
```

Use `if` statements when logic is non-trivial.

## 8.6 `switch` is fine when it expresses a finite domain

```js
function getStatusLabel(status) {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'approved':
      return 'Approved';
    case 'rejected':
      return 'Rejected';
    default:
      return 'Unknown';
  }
}
```

Use the construct that communicates intent best.

---

# 9. Loops, Iteration, and Array Methods

JavaScript gives you several tools. Choose based on intent rather than fashion.

## 9.1 `map` — transform each element

```js
const userNames = users.map(user => user.name);
```

Do not use `map` for side effects:

```js
// Avoid
users.map(user => console.log(user));
```

Use:

```js
users.forEach(user => console.log(user));
```

## 9.2 `filter` — keep matching elements

```js
const activeUsers = users.filter(user => user.isActive);
```

## 9.3 `find` — get first matching element

```js
const admin = users.find(user => user.role === 'admin');
```

## 9.4 `some` — does at least one match?

```js
const hasOverdueInvoice = invoices.some(invoice => invoice.isOverdue);
```

## 9.5 `every` — do all match?

```js
const allItemsInStock = items.every(item => item.stock > 0);
```

## 9.6 `reduce` — aggregate when it is truly clearer

Good:

```js
const total = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
```

Avoid forcing `reduce` into multi-purpose state machines that no one can quickly read.

## 9.7 `for...of` — excellent for imperative flow and `await`

```js
for (const file of files) {
  await uploadFile(file);
}
```

Avoid:

```js
files.forEach(async file => {
  await uploadFile(file);
});
```

`forEach` does not await the asynchronous callback as a sequence.

## 9.8 Parallel work with `Promise.all`

When operations are independent:

```js
await Promise.all(files.map(file => uploadFile(file)));
```

But do not do this for thousands of operations if the external system cannot handle the concurrency. Consider batching or a concurrency limiter.

---

# 10. Objects and Data Modeling

## 10.1 Model domain concepts explicitly

Bad:

```js
const data = {
  a: 'INV-1001',
  b: 2500,
  c: 0
};
```

Better:

```js
const invoice = {
  invoiceNumber: 'INV-1001',
  amount: 2500,
  paymentStatus: 'pending'
};
```

## 10.2 Avoid “god objects”

A huge object passed everywhere tends to couple unrelated modules.

Bad:

```js
function calculateTax(appState) {
  // reads appState.user, appState.cart, appState.config,
  // appState.company, appState.session...
}
```

Better:

```js
function calculateTax({ taxableAmount, taxRate }) {
  return taxableAmount * taxRate;
}
```

Pass only what the function needs.

## 10.3 Prefer consistent object shapes

Bad:

```js
const users = [
  { id: 1, name: 'A' },
  { userId: 2, fullName: 'B' }
];
```

Normalize at the boundary:

```js
function mapApiUser(apiUser) {
  return {
    id: apiUser.user_id,
    name: apiUser.full_name
  };
}
```

The rest of your application can use one internal shape.

## 10.4 Use optional chaining carefully

Useful:

```js
const city = user?.address?.city;
```

But excessive optional chaining can hide invalid states:

```js
const total = order?.customer?.account?.plan?.discount?.amount;
```

If an order must always have a customer and account, validate those requirements instead of silently returning `undefined` everywhere.

## 10.5 Use object spread intentionally

```js
const updatedUser = {
  ...user,
  name: newName
};
```

Remember spread is shallow.

```js
const copy = { ...user };
copy.address.city = 'Pune';
```

If `address` is shared, the original user's nested address also changes.

---

# 11. Classes, Composition, and OOP

JavaScript supports object-oriented programming, but clean design does not require classes everywhere.

## 11.1 Use classes for meaningful stateful abstractions

```js
class ShoppingCart {
  #items = [];

  addItem(item) {
    this.#items.push(item);
  }

  getTotal() {
    return this.#items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
```

A class can be appropriate when behavior and state naturally belong together.

## 11.2 Do not create classes merely to hold one stateless function

Unnecessary:

```js
class PriceCalculator {
  calculate(price, taxRate) {
    return price * (1 + taxRate);
  }
}
```

Simpler:

```js
function calculatePriceWithTax(price, taxRate) {
  return price * (1 + taxRate);
}
```

## 11.3 Prefer composition over inheritance

Inheritance:

```js
class EmailNotificationService extends NotificationService {}
class SmsNotificationService extends NotificationService {}
```

Composition can be easier to evolve:

```js
function createNotificationService({ sender, formatter }) {
  return {
    async send(message) {
      const formattedMessage = formatter.format(message);
      return sender.send(formattedMessage);
    }
  };
}
```

## 11.4 Avoid deep inheritance trees

Deep inheritance creates fragile coupling.

```text
BaseEntity
  -> UserEntity
     -> EmployeeEntity
        -> ManagerEntity
           -> RegionalManagerEntity
```

Ask whether capabilities such as permissions, payroll behavior, or regional behavior can be composed instead.

---

# 12. SOLID Principles in JavaScript

SOLID originated in object-oriented design, but the ideas apply to functions and modules too.

## 12.1 S — Single Responsibility Principle

A module should have one primary reason to change.

Bad:

```js
class UserService {
  createUser() {}
  sendEmail() {}
  generatePdf() {}
  calculatePayroll() {}
}
```

Better separation:

```text
UserService
EmailService
PdfService
PayrollService
```

Do not interpret SRP as “every function can only have one line.” It is about cohesive responsibility.

## 12.2 O — Open/Closed Principle

Software should be reasonably extensible without repeatedly modifying stable core logic.

Bad:

```js
function calculateDiscount(customerType, amount) {
  if (customerType === 'regular') return amount * 0.05;
  if (customerType === 'premium') return amount * 0.1;
  if (customerType === 'vip') return amount * 0.2;
}
```

Flexible strategy map:

```js
const discountStrategies = {
  regular: amount => amount * 0.05,
  premium: amount => amount * 0.1,
  vip: amount => amount * 0.2
};

function calculateDiscount(customerType, amount) {
  const strategy = discountStrategies[customerType] ?? (() => 0);
  return strategy(amount);
}
```

Do not prematurely abstract a two-case rule. Apply OCP when extension pressure is real.

## 12.3 L — Liskov Substitution Principle

A replacement implementation should honor the expected contract.

If a storage service says `save()` resolves with the saved object, every implementation should follow that rule rather than one returning a boolean, one throwing for normal misses, and one returning `undefined`.

## 12.4 I — Interface Segregation Principle

Consumers should not depend on capabilities they do not use.

Bad conceptual interface:

```text
UserRepository:
  create
  read
  update
  delete
  exportCsv
  sendEmail
  resetPassword
```

Prefer cohesive contracts:

```text
UserRepository
UserExporter
PasswordResetService
NotificationService
```

JavaScript does not require formal interfaces for the principle to be useful.

## 12.5 D — Dependency Inversion Principle

High-level business logic should depend on abstractions/contracts rather than hard-coded infrastructure.

Hard-coded:

```js
async function createInvoice(invoice) {
  await mysql.query('INSERT ...');
  await sendgrid.send(...);
}
```

Dependency-injected:

```js
function createInvoiceService({ invoiceRepository, notifier }) {
  return {
    async create(invoice) {
      const savedInvoice = await invoiceRepository.save(invoice);
      await notifier.invoiceCreated(savedInvoice);
      return savedInvoice;
    }
  };
}
```

This design is easier to test and replace.

---

# 13. Functional Programming for Cleaner JavaScript

Functional programming ideas can make business logic predictable.

## 13.1 Pure functions

A pure function:

1. returns the same output for the same input;
2. does not cause observable side effects.

Pure:

```js
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
```

Impure:

```js
let taxRate = 0.18;

function calculateTax(amount) {
  console.log('Calculating');
  return amount * taxRate;
}
```

Pure functions are easy to test.

## 13.2 Separate computation from effects

```js
function buildInvoiceEmail(invoice) {
  return {
    subject: `Invoice ${invoice.number}`,
    body: `Amount: ${invoice.amount}`
  };
}

async function sendInvoiceEmail(invoice, mailer) {
  const message = buildInvoiceEmail(invoice);
  return mailer.send(message);
}
```

The formatting logic can be tested without sending email.

## 13.3 Function composition

```js
const trim = value => value.trim();
const lowercase = value => value.toLowerCase();

const normalizeEmail = email => lowercase(trim(email));
```

Keep pipelines readable. Avoid dense point-free compositions that require library expertise merely to understand simple business logic.

## 13.4 Higher-order functions

A higher-order function accepts or returns functions.

```js
function withLogging(fn, logger) {
  return async (...args) => {
    logger.info('Started');
    const result = await fn(...args);
    logger.info('Finished');
    return result;
  };
}
```

Useful for cross-cutting concerns, but avoid stacking wrappers until debugging becomes painful.

---

# 14. Immutability and Side Effects

## 14.1 Why uncontrolled mutation is dangerous

```js
function promoteUser(user) {
  user.role = 'admin';
}
```

Any other code holding a reference to `user` now sees the changed role.

Safer:

```js
function promoteUser(user) {
  return {
    ...user,
    role: 'admin'
  };
}
```

## 14.2 Arrays

Mutating:

```js
users.push(newUser);
```

Immutable alternative:

```js
const updatedUsers = [...users, newUser];
```

Mutation is not inherently evil. Local controlled mutation can be efficient and clear. The danger is **shared unexpected mutation**.

## 14.3 Side effects should live near boundaries

Typical effects:

- HTTP calls
- database writes
- filesystem writes
- DOM changes
- timers
- logging
- email/SMS
- random values
- current time

A powerful design approach is:

```text
External input -> validate -> pure business logic -> explicit effects -> output
```

---

# 15. Modules and Project Structure

A clean project groups code around responsibilities and, for larger applications, often around features.

## 15.1 Avoid giant utility files

Bad:

```text
utils.js
  formatDate
  hashPassword
  calculateTax
  uploadImage
  validateInvoice
  buildReport
  parseCsv
  checkPermission
  ...100 functions
```

A generic `utils.js` often becomes a dumping ground.

Prefer focused modules:

```text
currency.js
date.js
invoice-validation.js
permissions.js
csv-parser.js
```

## 15.2 Feature-oriented structure

Example backend:

```text
src/
  modules/
    users/
      user.controller.js
      user.service.js
      user.repository.js
      user.validation.js
      user.test.js
    orders/
      order.controller.js
      order.service.js
      order.repository.js
      order.validation.js
  shared/
    errors/
    logging/
    database/
  app.js
```

## 15.3 Frontend feature structure

```text
src/
  features/
    checkout/
      api/
      components/
      hooks/
      validation/
      checkout.service.js
      checkout.test.js
    profile/
      ...
  shared/
    components/
    formatters/
```

## 15.4 Avoid circular dependencies

```text
userService -> orderService -> paymentService -> userService
```

Circular dependencies often reveal unclear boundaries.

## 15.5 Keep public module APIs small

Do not export every internal helper.

```js
function normalizeOrder(order) {}
function validateOrder(order) {}

export function prepareOrder(order) {
  const normalizedOrder = normalizeOrder(order);
  validateOrder(normalizedOrder);
  return normalizedOrder;
}
```

Only `prepareOrder` is part of the public contract.

---

# 16. Error Handling

Good error handling makes failures understandable and actionable.

## 16.1 Do not silently swallow errors

Bad:

```js
try {
  await saveOrder(order);
} catch (error) {
  // ignore
}
```

Better:

```js
try {
  await saveOrder(order);
} catch (error) {
  logger.error('Failed to save order', {
    orderId: order.id,
    error
  });
  throw error;
}
```

## 16.2 Add context when rethrowing

```js
try {
  return await paymentGateway.charge(payment);
} catch (cause) {
  throw new Error(`Unable to charge order ${payment.orderId}`, {
    cause
  });
}
```

## 16.3 Create domain-specific errors when useful

```js
class InsufficientStockError extends Error {
  constructor(productId) {
    super(`Insufficient stock for product ${productId}`);
    this.name = 'InsufficientStockError';
    this.productId = productId;
  }
}
```

Then boundary code can map it:

```js
if (error instanceof InsufficientStockError) {
  return res.status(409).json({
    code: 'INSUFFICIENT_STOCK'
  });
}
```

## 16.4 Expected business outcomes vs exceptional failures

A coupon being expired may be an expected result.

A database being unavailable is an exceptional system failure.

Do not use exceptions for every ordinary branch.

## 16.5 Never expose sensitive internals to clients

Bad API response:

```json
{
  "error": "SQLSTATE connection password=secret123 ..."
}
```

Return a safe message to the client and log internal detail server-side.

---

# 17. Promises and Async/Await

## 17.1 Prefer `async/await` for sequential workflows

```js
async function createOrder(input) {
  const order = await orderRepository.create(input);
  const payment = await paymentGateway.charge(order);
  return { order, payment };
}
```

## 17.2 Do not mix styles without a reason

Avoid:

```js
async function getUser() {
  return userRepository.find().then(user => {
    return user;
  });
}
```

Use:

```js
async function getUser() {
  return userRepository.find();
}
```

## 17.3 Avoid unnecessary `await`

Both may work:

```js
return await repository.save(user);
```

```js
return repository.save(user);
```

`return await` can be useful inside `try/catch` when you need the local catch to intercept the rejection. Otherwise, direct return is often simpler.

## 17.4 Sequential vs parallel execution

Sequential:

```js
const user = await getUser();
const orders = await getOrders(user.id);
```

The second depends on the first.

Parallel:

```js
const [products, categories] = await Promise.all([
  getProducts(),
  getCategories()
]);
```

## 17.5 Handle partial failure intentionally

`Promise.all()` rejects when any promise rejects.

When you need all outcomes:

```js
const results = await Promise.allSettled(tasks);
```

Then inspect fulfilled/rejected states explicitly.

## 17.6 Add cancellation/timeouts where relevant

Browser example:

```js
const controller = new AbortController();

const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch(url, {
    signal: controller.signal
  });
  return await response.json();
} finally {
  clearTimeout(timeoutId);
}
```

Production network calls should not be allowed to hang forever.

---

# 18. API and Network Code

## 18.1 Keep HTTP concerns at the boundary

Controller:

```js
export async function createUserController(req, res, next) {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
```

Service:

```js
export async function createUser(input) {
  // business logic; no Express-specific req/res here
}
```

This makes the service usable outside HTTP.

## 18.2 Normalize external data

Third-party APIs may return ugly shapes.

```js
function mapPaymentResponse(response) {
  return {
    transactionId: response.txn_id,
    status: response.payment_status,
    paidAmount: Number(response.amount_paid)
  };
}
```

Do not allow vendor-specific field names to spread through the entire application.

## 18.3 Check response status explicitly

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Request failed with status ${response.status}`);
}
```

`fetch()` does not reject merely because the server returned 404 or 500.

## 18.4 Retry only appropriate operations

Retries can be useful for transient failures, but careless retries can duplicate payments or writes.

Think about **idempotency**.

Safe-ish candidate:

```text
GET product catalog
```

Risky without idempotency protection:

```text
POST payment charge
```

---

# 19. DOM and Frontend Clean Code

## 19.1 Separate DOM lookup, state, and business behavior

Bad:

```js
button.addEventListener('click', () => {
  const quantity = Number(document.querySelector('#qty').value);
  const price = Number(document.querySelector('#price').dataset.price);
  const discount = quantity > 5 ? 0.1 : 0;
  document.querySelector('#total').textContent =
    price * quantity * (1 - discount);
});
```

Cleaner:

```js
function calculateTotal({ price, quantity }) {
  const discountRate = quantity > 5 ? 0.1 : 0;
  return price * quantity * (1 - discountRate);
}

function readOrderForm() {
  return {
    quantity: Number(document.querySelector('#qty').value),
    price: Number(document.querySelector('#price').dataset.price)
  };
}

button.addEventListener('click', () => {
  const order = readOrderForm();
  const total = calculateTotal(order);
  document.querySelector('#total').textContent = total;
});
```

The calculation can now be tested independently of the DOM.

## 19.2 Avoid scattered selectors

Bad:

```js
document.querySelector('#checkout-form')
// ... elsewhere

document.querySelector('#checkout-form')
```

Prefer centralized access when the element is repeatedly used.

## 19.3 Use event delegation for large dynamic lists

```js
list.addEventListener('click', event => {
  const deleteButton = event.target.closest('[data-action="delete"]');
  if (!deleteButton) return;

  deleteItem(deleteButton.dataset.itemId);
});
```

## 19.4 Avoid mixing rendering with business rules

Rendering function:

```js
function renderOrderTotal(total) {
  totalElement.textContent = formatCurrency(total);
}
```

Calculation:

```js
function calculateOrderTotal(order) {}
```

Keep them separate.

---

# 20. Node.js Clean Code

## 20.1 Keep process/environment access centralized

Instead of reading environment variables everywhere:

```js
process.env.DB_HOST
process.env.API_TIMEOUT
process.env.JWT_SECRET
```

Create configuration once:

```js
export const config = {
  databaseHost: requireEnv('DB_HOST'),
  apiTimeoutMs: Number(process.env.API_TIMEOUT_MS ?? 5000),
  jwtSecret: requireEnv('JWT_SECRET')
};

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}
```

## 20.2 Graceful shutdown

Servers should handle termination signals when applicable.

```js
process.on('SIGTERM', async () => {
  logger.info('Shutting down');
  await database.close();
  server.close();
});
```

## 20.3 Avoid blocking the event loop

Heavy CPU work can block Node.js.

Examples:

- huge synchronous JSON transformation;
- CPU-intensive image processing;
- large cryptographic computation;
- synchronous filesystem APIs in request handlers.

Use worker threads, streaming, queues, or asynchronous APIs where appropriate.

## 20.4 Stream large data

Instead of loading a multi-GB file completely into memory, use streams.

```js
createReadStream(filePath)
  .pipe(transformStream)
  .pipe(createWriteStream(outputPath));
```

---

# 21. Validation and Sanitization

Validation protects business rules. Sanitization protects how data is used or displayed. They are related but not identical.

## 21.1 Validate at boundaries

External input includes:

- HTTP request bodies;
- query parameters;
- route parameters;
- form values;
- environment variables;
- command-line arguments;
- files;
- third-party API responses;
- messages from queues.

Do not assume external data is valid.

Bad:

```js
async function createAccount(req, res) {
  return userRepository.create(req.body);
}
```

Better:

```js
function validateCreateAccountInput(input) {
  if (typeof input.email !== 'string') {
    throw new ValidationError('Email is required');
  }

  if (typeof input.password !== 'string' || input.password.length < 12) {
    throw new ValidationError('Password is too short');
  }

  return {
    email: input.email.trim().toLowerCase(),
    password: input.password
  };
}
```

## 21.2 Validation should communicate business meaning

Bad:

```js
if (amount < 0) {
  throw new Error('Invalid');
}
```

Better:

```js
if (amount <= 0) {
  throw new ValidationError('Payment amount must be greater than zero');
}
```

## 21.3 Do not rely only on frontend validation

Browser validation improves user experience but does not protect your server.

Always validate again at the trusted backend boundary.

## 21.4 Separate structural and business validation

Structural validation asks:

```text
Is email present?
Is amount a number?
Is currency one of the allowed values?
```

Business validation asks:

```text
Does this customer have enough credit?
Is this order still editable?
Can this user approve this amount?
```

Keeping these concepts separate often makes code easier to maintain.

## 21.5 Parse once

Bad:

```js
if (Number(req.body.quantity) > 0) {
  order.quantity = Number(req.body.quantity);
}
```

Better:

```js
const quantity = Number(req.body.quantity);

if (!Number.isInteger(quantity) || quantity <= 0) {
  throw new ValidationError('Quantity must be a positive integer');
}

order.quantity = quantity;
```

---

# 22. Security-Oriented Clean Coding

Clean code and secure code reinforce each other because explicit data flow is easier to audit.

## 22.1 Never trust input

Input must be validated and encoded or parameterized for its destination.

## 22.2 Prevent SQL injection with parameterized queries

Dangerous:

```js
const query = `SELECT * FROM users WHERE email = '${email}'`;
```

Safer conceptually:

```js
const query = 'SELECT * FROM users WHERE email = ?';
const [rows] = await db.execute(query, [email]);
```

Use the parameter mechanism provided by your database library or ORM.

## 22.3 Prevent XSS

Dangerous browser code:

```js
container.innerHTML = userComment;
```

Safer for plain text:

```js
container.textContent = userComment;
```

If HTML is intentionally accepted, use a robust sanitization strategy appropriate for your application.

## 22.4 Never store plain-text passwords

Passwords should be processed by a password-hashing function designed for password storage. Keep authentication implementation in focused modules rather than scattered through controllers.

## 22.5 Do not log secrets

Avoid logging:

- passwords;
- access tokens;
- refresh tokens;
- API secrets;
- private keys;
- complete payment-card data;
- sensitive personal data unless absolutely required and appropriately protected.

Bad:

```js
logger.info('Login attempt', req.body);
```

Better:

```js
logger.info('Login attempt', {
  email: req.body.email
});
```

## 22.6 Authorization belongs on the server

Hiding a button in the UI does not enforce authorization.

Bad assumption:

```text
User cannot see Delete button -> user cannot delete data
```

Correct model:

```text
Frontend visibility = user experience
Backend authorization = security control
```

## 22.7 Avoid hard-coded secrets

Bad:

```js
const apiKey = 'prod-secret-123';
```

Use secret/configuration management appropriate to the environment.

## 22.8 Validate redirect URLs and file paths

Input that controls redirects or filesystem paths can create security problems if used directly.

Example path safety principle:

```js
const resolvedPath = path.resolve(uploadRoot, requestedFileName);

if (!resolvedPath.startsWith(path.resolve(uploadRoot) + path.sep)) {
  throw new Error('Invalid file path');
}
```

Security details vary by platform, so prefer framework/library security features rather than inventing your own cryptography or sanitizers.

---

# 23. Logging and Observability

Logs should help answer:

```text
What happened?
Where did it happen?
Which request/job/entity was involved?
How severe was it?
What should an operator investigate next?
```

## 23.1 Prefer structured logs

Less useful:

```js
console.log('order failed ' + order.id + ' ' + error.message);
```

Better:

```js
logger.error('Order processing failed', {
  orderId: order.id,
  customerId: order.customerId,
  errorName: error.name,
  errorMessage: error.message
});
```

## 23.2 Use appropriate levels

Conceptually:

```text
DEBUG -> detailed developer diagnostics
INFO  -> meaningful normal application events
WARN  -> unexpected but recoverable situations
ERROR -> failures needing investigation
```

## 23.3 Do not log everything

Excessive logging creates noise, cost, and potential data exposure.

A good log should have operational value.

## 23.4 Correlation IDs

In distributed systems, attach a request/correlation ID to related logs.

```js
logger.info('Payment requested', {
  requestId,
  orderId
});
```

Then support teams can trace one request across services.

## 23.5 Metrics and logs solve different problems

Logs explain individual events.

Metrics answer aggregate questions such as:

```text
How many requests failed in the last 5 minutes?
What is p95 response time?
How many jobs are waiting?
```

Observability also commonly includes traces.

---

# 24. Testing for Clean Code

Clean code is easier to test, and tests make refactoring safer.

## 24.1 Test behavior, not implementation details

Fragile test:

```js
expect(service.internalCounter).toBe(2);
```

Better:

```js
expect(result.total).toBe(118);
```

Tests should usually care about observable behavior.

## 24.2 Arrange, Act, Assert

```js
it('applies premium discount', () => {
  // Arrange
  const customer = { type: 'premium' };
  const amount = 1000;

  // Act
  const total = calculateFinalPrice(customer, amount);

  // Assert
  expect(total).toBe(900);
});
```

## 24.3 Name tests as behavior specifications

Weak:

```js
it('test1', () => {});
```

Better:

```js
it('rejects checkout when cart is empty', () => {});
```

## 24.4 Test important branches

For a payment calculation, think about:

```text
normal payment
zero amount
negative amount
maximum allowed amount
unsupported currency
expired coupon
rounding edge case
```

## 24.5 Unit tests

Good for focused business rules:

```js
expect(calculateTax(1000, 0.18)).toBe(180);
```

## 24.6 Integration tests

Useful for boundaries between real components:

```text
service + database repository
HTTP endpoint + middleware + service
repository + actual database schema
```

## 24.7 End-to-end tests

Useful for high-value user flows:

```text
login -> add product -> checkout -> order confirmation
```

Do not try to prove every tiny rule exclusively through slow end-to-end tests.

## 24.8 Test pyramid as a heuristic

A healthy suite often has:

```text
many fast focused tests
some integration tests
fewer full end-to-end tests
```

The exact ratio depends on the system.

## 24.9 Avoid giant fixture objects

Bad:

```js
const user = {
  // 80 unrelated fields
};
```

Prefer builders/factories:

```js
function buildUser(overrides = {}) {
  return {
    id: 'user-1',
    role: 'user',
    isActive: true,
    ...overrides
  };
}
```

Then:

```js
const blockedAdmin = buildUser({
  role: 'admin',
  isBlocked: true
});
```

---

# 25. Testable Design

A common reason code is difficult to test is hidden dependencies.

## 25.1 Hard-coded dependency

```js
async function getDashboard() {
  const response = await fetch('https://api.example.com/dashboard');
  return response.json();
}
```

More testable:

```js
function createDashboardService({ dashboardClient }) {
  return {
    async getDashboard() {
      return dashboardClient.fetchDashboard();
    }
  };
}
```

Test:

```js
const fakeDashboardClient = {
  fetchDashboard: async () => ({ revenue: 100 })
};

const service = createDashboardService({
  dashboardClient: fakeDashboardClient
});
```

## 25.2 Time as a dependency

Hard to test:

```js
function isExpired(subscription) {
  return new Date() > subscription.expiresAt;
}
```

More deterministic:

```js
function isExpired(subscription, now = new Date()) {
  return now > subscription.expiresAt;
}
```

Test with a fixed time.

## 25.3 Randomness as a dependency

```js
function generateOtp(random = Math.random) {
  return Math.floor(100000 + random() * 900000);
}
```

Tests can inject a deterministic function.

## 25.4 Avoid mocking everything

If a pure function can be called directly, do that.

Over-mocking makes tests mirror implementation and break during harmless refactoring.

---

# 26. Comments and Documentation

Comments are valuable when they explain information code cannot express well.

## 26.1 Do not narrate obvious code

Bad:

```js
// Increase count by one
count += 1;
```

## 26.2 Explain why

Useful:

```js
// Payment provider occasionally returns HTTP 409 for a transaction that
// completed successfully. We verify by idempotency key before retrying.
```

This preserves important operational knowledge.

## 26.3 Document non-obvious business rules

```js
// Finance policy: invoices submitted after the 25th are posted in the
// next accounting period unless manually approved.
```

A better long-term solution may also be a named rule/function and formal documentation, but the comment adds necessary context.

## 26.4 Remove commented-out code

Avoid:

```js
// const oldTotal = calculateOldTotal(order);
// if (legacy) { ... }
```

Version control already stores history.

## 26.5 TODO comments should be actionable

Weak:

```js
// TODO fix this
```

Better:

```js
// TODO: remove fallback after all clients migrate to API v3.
```

In team environments, link a tracked issue where practical.

## 26.6 JSDoc for public contracts

Useful when JavaScript code benefits from editor/type documentation:

```js
/**
 * Calculates the final order amount after discount.
 *
 * @param {number} subtotal - Amount before discount.
 * @param {number} discountRate - Decimal rate such as 0.1 for 10%.
 * @returns {number} Final amount.
 */
function calculateFinalAmount(subtotal, discountRate) {
  return subtotal * (1 - discountRate);
}
```

Do not document every trivial private function just to increase comment count.

---

# 27. Formatting and Style

Formatting removes visual friction.

## 27.1 Use automated formatting

A formatter eliminates recurring arguments about:

- indentation;
- spacing;
- line wrapping;
- semicolons;
- quote style;
- trailing commas.

The exact style matters less than consistency.

## 27.2 Keep related lines together

```js
const subtotal = calculateSubtotal(items);
const tax = calculateTax(subtotal);
const total = subtotal + tax;

await orderRepository.save({ subtotal, tax, total });
```

Blank lines can communicate conceptual grouping.

## 27.3 Avoid horizontal complexity

Hard:

```js
const result = await service.process(user, account, subscription, permissions, products, taxConfig, paymentConfig);
```

Readable formatting:

```js
const result = await service.process(
  user,
  account,
  subscription,
  permissions,
  products,
  taxConfig,
  paymentConfig
);
```

But seven positional parameters may also be a design smell—formatting does not replace refactoring.

## 27.4 Keep files navigable

A 3,000-line module may be technically valid but hard to understand. Split when cohesive concepts emerge.

---

# 28. Magic Values and Configuration

A magic value is an unexplained literal with business meaning.

Bad:

```js
if (failedAttempts >= 5) {
  lockAccount();
}
```

Better:

```js
const MAX_FAILED_LOGIN_ATTEMPTS = 5;

if (failedAttempts >= MAX_FAILED_LOGIN_ATTEMPTS) {
  lockAccount();
}
```

## 28.1 Not every literal needs a constant

This is usually unnecessary:

```js
const ONE = 1;
count += ONE;
```

The constant should clarify meaning.

## 28.2 Configuration vs business constants

Configuration often varies by environment:

```text
API URL
connection pool size
request timeout
feature switch
```

Business constants often represent domain policy:

```text
minimum age
maximum approval limit
free-shipping threshold
```

Treat them differently when appropriate.

## 28.3 Centralize enums/status values

Instead of repeating strings:

```js
if (invoice.status === 'apprvoed') {}
```

Centralize:

```js
const InvoiceStatus = Object.freeze({
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected'
});
```

Then:

```js
if (invoice.status === InvoiceStatus.APPROVED) {}
```

TypeScript can provide even stronger guarantees, but consistent constants still help JavaScript projects.

---

# 29. Null, Undefined, and Defensive Coding

## 29.1 Know the difference conceptually

`undefined` often means a value was not supplied or does not exist.

`null` is often used intentionally to represent “no value.”

Choose conventions and stay consistent.

## 29.2 Use nullish coalescing for null/undefined defaults

```js
const pageSize = input.pageSize ?? 20;
```

Unlike `||`, it preserves valid falsy values such as `0`.

Compare:

```js
const quantity = input.quantity || 1;
```

If `0` is meaningful, this unexpectedly becomes `1`.

Use:

```js
const quantity = input.quantity ?? 1;
```

## 29.3 Optional chaining is for genuinely optional paths

```js
const middleName = customer.profile?.middleName;
```

But if `customer.profile` must exist by business rule, validate it instead of hiding the broken state.

## 29.4 Fail fast for impossible states

```js
function calculateInvoiceTotal(invoice) {
  if (!invoice.items) {
    throw new Error('Invoice items are required');
  }

  return invoice.items.reduce(...);
}
```

Silent fallback can make data corruption harder to detect.

---

# 30. Dates, Numbers, Strings, and Data Conversion

These basic data types cause many production bugs.

## 30.1 Do not rely on implicit conversion

Bad:

```js
const total = formValue + 100;
```

If `formValue` is `'50'`, the result is `'50100'`.

Better:

```js
const amount = Number(formValue);

if (!Number.isFinite(amount)) {
  throw new ValidationError('Amount must be numeric');
}

const total = amount + 100;
```

## 30.2 Prefer strict equality

Use:

```js
value === 0
value !== null
```

Instead of loose equality unless you deliberately need coercion and the behavior is well understood.

## 30.3 Currency requires care

Binary floating-point arithmetic can create surprises:

```js
0.1 + 0.2
```

For money, consider representing the smallest currency unit as an integer when appropriate.

```js
const pricePaise = 1099;
const quantity = 3;
const totalPaise = pricePaise * quantity;
```

For complex financial calculations, use a suitable decimal/money strategy rather than casually relying on floating-point values.

## 30.4 Dates should have clear timezone semantics

Avoid passing ambiguous date strings around the system.

Decide whether a value represents:

```text
an instant in time
a local calendar date
a local time
a timezone-aware appointment
```

These are different domain concepts.

## 30.5 Normalize strings intentionally

```js
function normalizeEmail(email) {
  return email.trim().toLowerCase();
}
```

But do not blindly lowercase values where case has meaning.

---

# 31. Performance Without Destroying Readability

Premature optimization is a common source of unnecessary complexity.

## 31.1 Measure before optimizing

Do not replace clear code with obscure code because it “feels faster.”

First identify the bottleneck.

## 31.2 Choose the right data structure

Repeated membership checks:

```js
const allowedIds = ['a', 'b', 'c'];

if (allowedIds.includes(userId)) {}
```

For large collections and frequent membership checks, a `Set` may better express intent:

```js
const allowedIds = new Set(['a', 'b', 'c']);

if (allowedIds.has(userId)) {}
```

## 31.3 Avoid repeated expensive work

Bad:

```js
for (const order of orders) {
  const config = JSON.parse(largeConfigText);
  processOrder(order, config);
}
```

Better:

```js
const config = JSON.parse(largeConfigText);

for (const order of orders) {
  processOrder(order, config);
}
```

## 31.4 Avoid accidental N+1 queries

Problem:

```js
const users = await userRepository.getAll();

for (const user of users) {
  user.orders = await orderRepository.getByUserId(user.id);
}
```

This may cause one query for users plus one query per user.

Better solutions depend on the database layer but may include:

- joins;
- eager loading;
- batch fetching;
- `WHERE user_id IN (...)`;
- data loaders.

## 31.5 Cache only with a clear invalidation strategy

Caching can improve performance while introducing stale-data complexity.

Ask:

```text
What is cached?
For how long?
Who invalidates it?
Can stale data be tolerated?
What happens if the cache is unavailable?
```

## 31.6 Optimize critical paths, preserve clear interfaces

You can often keep a clean public function while optimizing its internals.

---

# 32. Common Code Smells

A code smell is not automatically a bug. It is a signal worth investigating.

## 32.1 Long function

Symptoms:

- multiple abstraction levels;
- many temporary variables;
- many branches;
- hard-to-name sections.

Refactor by extracting meaningful operations—not arbitrary line ranges.

## 32.2 Long parameter list

```js
createOrder(a, b, c, d, e, f, g, h)
```

Consider cohesive parameter objects or redesigned responsibilities.

## 32.3 Duplicate code

Repeated business rules are especially dangerous because fixes can diverge.

## 32.4 Shotgun surgery

One business change requires edits in 12 unrelated files.

This suggests the concept is not encapsulated well.

## 32.5 Divergent change

One file changes for many unrelated reasons.

Example:

```text
user.js changes for authentication,
payroll,
email,
reporting,
and audit logging.
```

Split responsibilities.

## 32.6 Primitive obsession

Bad:

```js
function pay(amount, currency, cardNumber, expiryMonth, expiryYear) {}
```

Consider stronger concepts:

```js
function pay(money, paymentMethod) {}
```

Even in JavaScript, domain objects can improve clarity.

## 32.7 Feature envy

A function spends most of its time reaching deep into another object's data.

```js
function getCustomerDiscount(order) {
  return order.customer.account.plan.discountRules.currentRate;
}
```

Maybe discount behavior belongs closer to the customer/account/plan concept.

## 32.8 Boolean blindness

```js
createReport(true, false, true)
```

No reader knows what those values mean.

Prefer an options object:

```js
createReport({
  includeCharts: true,
  includeRawData: false,
  compress: true
});
```

## 32.9 Temporal coupling

Danger:

```js
service.initialize();
service.loadConfig();
service.connect();
service.start();
```

If methods must be called in an exact hidden order, design a safer API.

## 32.10 Dead code

Remove unused:

- imports;
- variables;
- functions;
- feature branches;
- commented code;
- obsolete configuration.

Dead code creates false paths for readers.

## 32.11 Generic “manager/service/helper” classes

Names such as these are not always bad, but often hide unclear responsibility:

```text
DataManager
CommonService
AppHelper
GeneralUtils
ProcessHandler
```

Ask what the component actually does.

## 32.12 Deep nesting

```js
if (a) {
  if (b) {
    if (c) {
      if (d) {
        // ...
      }
    }
  }
}
```

Use guard clauses, extraction, or a clearer state model.

## 32.13 Giant switch by entity type

If many operations all switch on the same `type`, a strategy/polymorphic design may be cleaner.

## 32.14 Inconsistent return shapes

```js
return false;
return null;
return { success: true };
return user;
```

Stabilize the contract.

---

# 33. Refactoring Patterns

Refactoring changes code structure without intentionally changing externally observable behavior.

## 33.1 Rename Variable

Before:

```js
const x = invoice.amount * 0.18;
```

After:

```js
const gstAmount = invoice.amount * GST_RATE;
```

## 33.2 Extract Function

Before:

```js
function checkout(order) {
  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // more logic...
}
```

After:

```js
function calculateSubtotal(items) {
  return items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function checkout(order) {
  const subtotal = calculateSubtotal(order.items);
}
```

## 33.3 Replace Nested Conditional with Guard Clauses

Before:

```js
function approve(invoice, user) {
  if (invoice) {
    if (user) {
      if (user.canApprove) {
        return doApprove(invoice);
      }
    }
  }
}
```

After:

```js
function approve(invoice, user) {
  if (!invoice) throw new Error('Invoice required');
  if (!user) throw new Error('User required');
  if (!user.canApprove) throw new AuthorizationError();

  return doApprove(invoice);
}
```

## 33.4 Replace Magic Number with Named Constant

```js
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
```

## 33.5 Introduce Parameter Object

Before:

```js
sendEmail(to, cc, subject, body, attachments, priority);
```

After:

```js
sendEmail({
  to,
  cc,
  subject,
  body,
  attachments,
  priority
});
```

## 33.6 Extract Module

When invoice validation has grown beyond a few checks:

```text
invoice.service.js
```

can become:

```text
invoice.service.js
invoice.validation.js
invoice.pricing.js
invoice.repository.js
```

Split based on real responsibilities.

## 33.7 Replace Conditional with Strategy

Before:

```js
function exportReport(type, data) {
  if (type === 'csv') return exportCsv(data);
  if (type === 'json') return exportJson(data);
  if (type === 'xml') return exportXml(data);
}
```

After:

```js
const exporters = {
  csv: exportCsv,
  json: exportJson,
  xml: exportXml
};

function exportReport(type, data) {
  const exporter = exporters[type];

  if (!exporter) {
    throw new Error(`Unsupported export type: ${type}`);
  }

  return exporter(data);
}
```

## 33.8 Encapsulate external dependency

Before:

```js
fetch(...paymentProviderSpecificRequest)
```

scattered throughout the app.

After:

```js
paymentGateway.charge(...)
paymentGateway.refund(...)
paymentGateway.getStatus(...)
```

Vendor details stay behind one adapter.

## 33.9 Refactor in small verified steps

Safe approach:

```text
1. Ensure behavior is understood.
2. Add/strengthen tests around risky behavior.
3. Make one structural change.
4. Run tests/linter.
5. Continue.
```

Avoid rewriting a large production module from scratch when incremental refactoring can preserve behavior more safely.

---

# 34. Clean Architecture in JavaScript

Clean architecture is about dependency direction and separation of business rules from infrastructure.

A practical simplified model:

```text
HTTP / UI / CLI
      |
      v
Controllers / Adapters
      |
      v
Application Use Cases
      |
      v
Domain Rules
      |
      v
Ports / Interfaces
      |
      v
Database / APIs / Email / Filesystem
```

The high-level rules should not need to know whether data lives in MySQL, MongoDB, a REST API, or an in-memory test double.

## 34.1 Example folder structure

```text
src/
  domain/
    order.js
    order-rules.js

  application/
    place-order.js
    cancel-order.js

  infrastructure/
    database/
      mysql-order-repository.js
    payments/
      stripe-payment-gateway.js
    email/
      smtp-notifier.js

  interfaces/
    http/
      order-controller.js
      routes.js

  config/
    index.js
```

## 34.2 Use case

```js
export function createPlaceOrder({
  orderRepository,
  paymentGateway,
  clock
}) {
  return async function placeOrder(input) {
    const order = createOrder({
      ...input,
      createdAt: clock.now()
    });

    await paymentGateway.charge(order);
    return orderRepository.save(order);
  };
}
```

The use case does not know how HTTP, SQL, or a particular payment SDK works.

## 34.3 Avoid architecture astronautics

A five-file application does not need 40 architectural layers.

Use boundaries proportional to:

- application size;
- team size;
- business complexity;
- expected lifetime;
- testing needs;
- integration complexity.

---

# 35. Design Patterns You Should Actually Know

Patterns are vocabulary for recurring design problems. They are tools, not goals.

## 35.1 Strategy Pattern

Use when one operation can have interchangeable algorithms.

```js
const shippingStrategies = {
  standard: order => calculateStandardShipping(order),
  express: order => calculateExpressShipping(order),
  pickup: () => 0
};
```

Scenario: shipping, pricing, tax, export formats, notification channels.

## 35.2 Factory Pattern

Use when object construction has meaningful variation.

```js
function createPaymentGateway(provider, config) {
  switch (provider) {
    case 'provider-a':
      return new ProviderAGateway(config);
    case 'provider-b':
      return new ProviderBGateway(config);
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}
```

## 35.3 Adapter Pattern

Use when external APIs have incompatible contracts.

```js
class ProviderAPaymentAdapter {
  constructor(client) {
    this.client = client;
  }

  async charge({ amount, currency }) {
    const response = await this.client.makePayment({
      value: amount,
      currency_code: currency
    });

    return {
      transactionId: response.txn,
      status: response.state
    };
  }
}
```

Your business layer sees one consistent gateway contract.

## 35.4 Repository Pattern

Encapsulates data access.

```js
class UserRepository {
  async findById(id) {}
  async save(user) {}
}
```

This can reduce database details leaking into business logic.

Do not add a repository layer if your application is so simple that it merely duplicates every ORM method without adding any boundary value.

## 35.5 Observer / Publish-Subscribe

Useful for decoupled events.

```js
eventBus.publish('order.created', {
  orderId: order.id
});
```

Subscribers might:

```text
send email
update analytics
schedule fulfillment
write audit event
```

Be careful: event-driven systems can hide execution flow. Good naming, tracing, and documentation become more important.

## 35.6 Dependency Injection

```js
const orderService = createOrderService({
  orderRepository,
  paymentGateway,
  logger
});
```

Dependencies are visible and replaceable.

## 35.7 Facade

Provides a simpler interface over complex subsystems.

```js
checkoutFacade.checkout(cart, customer)
```

Internally it may coordinate pricing, inventory, payment, and order creation.

## 35.8 Builder

Useful for constructing complex objects, especially test data or configurable requests.

```js
const order = new OrderBuilder()
  .forCustomer(customer)
  .withItem(product, 2)
  .withCoupon('SAVE10')
  .build();
```

## Pattern warning

Never start with:

> Which design pattern can I use here?

Start with:

> What problem makes this code hard to change?

Then select a pattern only if it simplifies that problem.

---

# 36. Clean REST/API Service Example

Consider an endpoint that creates an order.

## 36.1 Controller

```js
export function createOrderController({ placeOrder }) {
  return async function handleCreateOrder(req, res, next) {
    try {
      const input = {
        customerId: req.body.customerId,
        items: req.body.items
      };

      const order = await placeOrder(input);

      res.status(201).json({
        id: order.id,
        status: order.status,
        total: order.total
      });
    } catch (error) {
      next(error);
    }
  };
}
```

The controller knows HTTP.

## 36.2 Validation

```js
export function validateOrderInput(input) {
  if (!input.customerId) {
    throw new ValidationError('Customer is required');
  }

  if (!Array.isArray(input.items) || input.items.length === 0) {
    throw new ValidationError('Order must contain at least one item');
  }

  return input;
}
```

## 36.3 Use case

```js
export function createPlaceOrder({
  productRepository,
  orderRepository,
  paymentGateway,
  idGenerator,
  clock
}) {
  return async function placeOrder(rawInput) {
    const input = validateOrderInput(rawInput);

    const products = await productRepository.findByIds(
      input.items.map(item => item.productId)
    );

    const order = buildOrder({
      id: idGenerator.next(),
      customerId: input.customerId,
      requestedItems: input.items,
      products,
      createdAt: clock.now()
    });

    await paymentGateway.authorize({
      orderId: order.id,
      amount: order.total
    });

    return orderRepository.save(order);
  };
}
```

## 36.4 Pure domain calculation

```js
export function buildOrder({
  id,
  customerId,
  requestedItems,
  products,
  createdAt
}) {
  const productById = new Map(
    products.map(product => [product.id, product])
  );

  const items = requestedItems.map(requestedItem => {
    const product = productById.get(requestedItem.productId);

    if (!product) {
      throw new ValidationError(
        `Unknown product: ${requestedItem.productId}`
      );
    }

    return {
      productId: product.id,
      quantity: requestedItem.quantity,
      unitPrice: product.price,
      lineTotal: product.price * requestedItem.quantity
    };
  });

  const total = items.reduce(
    (sum, item) => sum + item.lineTotal,
    0
  );

  return {
    id,
    customerId,
    items,
    total,
    status: 'pending',
    createdAt
  };
}
```

## 36.5 Why this is clean

```text
Controller       -> HTTP translation
Validator        -> input rules
Use case         -> application workflow
Domain function  -> order calculation
Repository       -> data persistence
Payment gateway  -> external payment integration
```

Each layer has a recognizable job.

---

# 37. Clean Frontend Feature Example

Suppose a checkout page must calculate totals and submit an order.

## 37.1 Pure calculation

```js
export function calculateCartSummary(items) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 1000 ? 0 : 80;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping
  };
}
```

## 37.2 API module

```js
export async function createOrder(orderInput) {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderInput)
  });

  if (!response.ok) {
    throw new Error('Unable to create order');
  }

  return response.json();
}
```

## 37.3 UI orchestration

```js
async function handleCheckout() {
  setCheckoutState({ status: 'submitting' });

  try {
    const order = await createOrder(buildOrderInput(cart));

    setCheckoutState({
      status: 'success',
      orderId: order.id
    });
  } catch (error) {
    setCheckoutState({
      status: 'error',
      message: getUserFriendlyError(error)
    });
  }
}
```

## 37.4 Clean separation

```text
calculation -> no DOM/network
API client  -> only transport concerns
UI handler  -> coordinates state and user feedback
```

The same principle applies whether you use vanilla JavaScript, React, Vue, Angular, Svelte, or another frontend framework.

---

# 38. Real-World Refactoring Case Study

## 38.1 Starting code

```js
async function p(req, res) {
  try {
    let d = req.body;

    if (!d.email || !d.items || d.items.length === 0) {
      return res.status(400).send('bad');
    }

    let t = 0;

    for (let i = 0; i < d.items.length; i++) {
      t += d.items[i].price * d.items[i].qty;
    }

    if (d.vip === true) {
      t = t - t * 0.1;
    }

    let r = await db.query(
      `INSERT INTO orders(email,total) VALUES('${d.email}',${t})`
    );

    await fetch('https://mail.example/send', {
      method: 'POST',
      body: JSON.stringify({
        email: d.email,
        text: 'order created'
      })
    });

    console.log('ok ' + r.id);
    res.send({ id: r.id, t: t });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
}
```

Problems:

```text
unclear names
HTTP + business + database + email mixed
client-provided prices trusted
SQL injection risk
magic discount value
raw exception returned to client
console logging
mutation of total
weak validation
provider details embedded in controller
```

## 38.2 Extract meaningful constants

```js
const VIP_DISCOUNT_RATE = 0.1;
```

## 38.3 Create input validation

```js
function validateCreateOrderInput(input) {
  if (typeof input.email !== 'string' || !input.email.includes('@')) {
    throw new ValidationError('Valid email is required');
  }

  if (!Array.isArray(input.items) || input.items.length === 0) {
    throw new ValidationError('At least one item is required');
  }

  return {
    email: input.email.trim().toLowerCase(),
    items: input.items,
    isVip: input.vip === true
  };
}
```

## 38.4 Never trust client prices

Instead of receiving:

```js
{
  productId: 'P1',
  price: 1,
  qty: 100
}
```

receive:

```js
{
  productId: 'P1',
  quantity: 100
}
```

Then load authoritative prices from the server-side product repository.

## 38.5 Pure price calculation

```js
function calculateOrderTotal(items, isVip) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  if (!isVip) {
    return subtotal;
  }

  return subtotal * (1 - VIP_DISCOUNT_RATE);
}
```

## 38.6 Repository

```js
class OrderRepository {
  constructor(db) {
    this.db = db;
  }

  async create({ email, total }) {
    const sql = `
      INSERT INTO orders (email, total)
      VALUES (?, ?)
    `;

    const [result] = await this.db.execute(sql, [email, total]);

    return {
      id: result.insertId,
      email,
      total
    };
  }
}
```

## 38.7 Notifier adapter

```js
class OrderNotifier {
  constructor(mailClient) {
    this.mailClient = mailClient;
  }

  async orderCreated(order) {
    return this.mailClient.send({
      to: order.email,
      subject: `Order ${order.id} created`,
      body: 'Your order has been created successfully.'
    });
  }
}
```

## 38.8 Service

```js
function createOrderService({
  productRepository,
  orderRepository,
  notifier
}) {
  return {
    async create(rawInput) {
      const input = validateCreateOrderInput(rawInput);

      const products = await productRepository.findByIds(
        input.items.map(item => item.productId)
      );

      const items = mergeRequestedQuantitiesWithProducts(
        input.items,
        products
      );

      const total = calculateOrderTotal(items, input.isVip);

      const order = await orderRepository.create({
        email: input.email,
        total
      });

      await notifier.orderCreated(order);
      return order;
    }
  };
}
```

## 38.9 Controller

```js
function createOrderController({ orderService, logger }) {
  return async function createOrder(req, res, next) {
    try {
      const order = await orderService.create(req.body);

      res.status(201).json({
        id: order.id,
        total: order.total
      });
    } catch (error) {
      logger.error('Create order failed', {
        errorName: error.name,
        errorMessage: error.message
      });

      next(error);
    }
  };
}
```

## 38.10 What improved?

```text
Before                         After
-----------------------------  ---------------------------------
p, d, t, r                     meaningful names
client prices trusted          server-side authoritative prices
SQL string interpolation       parameterized query
one giant function             focused modules
email provider embedded        notifier abstraction
raw error exposed              centralized safe error handling
magic 0.1                      named business constant
hard to unit test              pure calculations + injected deps
```

This is what clean-code refactoring looks like in real systems: not just prettier syntax, but clearer boundaries and safer behavior.

---

# 39. Code Review Guide

A code review should evaluate more than formatting.

## 39.1 Correctness

Ask:

- Does the code satisfy the requirement?
- What happens on empty input?
- What happens at boundaries?
- Are asynchronous failures handled?
- Are race conditions possible?
- Is data conversion correct?

## 39.2 Readability

Ask:

- Can I understand the main flow quickly?
- Do names communicate domain meaning?
- Are complex conditions named?
- Is nesting manageable?
- Are comments explaining why?

## 39.3 Design

Ask:

- Does this module have a focused responsibility?
- Are dependencies obvious?
- Is business logic mixed with HTTP/DOM/database code?
- Is a new abstraction justified?
- Is duplication hiding a reusable business rule?

## 39.4 Security

Ask:

- Is external input validated?
- Is authorization enforced server-side?
- Are database queries parameterized?
- Could output create XSS?
- Are secrets logged?
- Are errors exposing internals?

## 39.5 Performance

Ask only where relevant:

- Are there N+1 queries?
- Is a large dataset loaded unnecessarily?
- Is CPU-heavy work blocking the event loop?
- Is concurrency uncontrolled?
- Is repeated expensive work avoidable?

## 39.6 Testing

Ask:

- Are important business branches tested?
- Would the test fail if behavior broke?
- Are tests too coupled to implementation?
- Is the new code structured so it can be tested?

## 39.7 Review tone

Prefer objective, actionable review comments.

Less useful:

```text
This code is bad.
```

Better:

```text
This controller currently contains validation, pricing, persistence,
and notification logic. Extracting pricing into a pure function and
persistence into the repository would make the business rule easier to
test and reduce controller responsibility.
```

---

# 40. Linting, Formatting, and Automation

Tooling can enforce mechanical rules so humans can focus on design.

## 40.1 Formatter

Use a formatter to standardize code layout.

Common workflow concept:

```text
save file -> formatter runs
commit/push -> CI verifies formatting
```

## 40.2 Linter

A linter can catch issues such as:

```text
unused variables
accidental globals
unreachable code
suspicious comparisons
incorrect promise handling
inconsistent conventions
```

Keep lint rules meaningful. Thousands of warnings train teams to ignore warnings.

## 40.3 Example package scripts

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

The exact tools can differ; the clean-code principle is automatic consistency.

## 40.4 CI quality gate

A practical pipeline may run:

```text
install dependencies
format check
lint
unit tests
integration tests
build
security/dependency checks
```

## 40.5 Pre-commit hooks

Useful for fast checks, but avoid turning every commit into a long local CI pipeline.

A good split is:

```text
pre-commit -> quick formatting/lint checks
CI         -> complete verification
```

---

# 41. Git and Clean-Code Workflow

Clean code is also influenced by how changes are delivered.

## 41.1 Small focused commits

Better:

```text
Add invoice validation
Extract tax calculation
Add tests for tax rounding
```

Harder to review:

```text
Fix everything
```

## 41.2 Keep refactoring and behavior changes distinguishable

When possible, separate:

```text
commit 1 -> pure structural refactor
commit 2 -> behavior change
```

Reviewers can verify the functional change more easily.

## 41.3 Pull requests should have one coherent goal

A feature PR that also upgrades 30 packages, reformats the whole repository, renames unrelated files, and changes architecture is difficult to review safely.

## 41.4 Describe reasoning

A useful pull-request description answers:

```text
What changed?
Why?
How was it tested?
What risks or migration steps exist?
```

## 41.5 Review the diff yourself first

Before requesting review:

```text
read every changed line
remove debugging code
remove accidental files
check names
run tests
check lint/format
verify no secrets were added
```

---

# 42. Beginner-to-Advanced Practice Roadmap

## Level 1 — Readable syntax

Master:

```text
const vs let
strict equality
clear variable naming
small scopes
functions
arrays and objects
guard clauses
map/filter/find/some/every
basic error handling
```

Practice task:

Build a shopping-cart calculator using pure functions.

## Level 2 — Maintainable functions

Master:

```text
single responsibility
parameter objects
stable return contracts
extract function
remove duplication
side effects
validation
```

Practice task:

Refactor a 100-line order-processing function into focused helpers.

## Level 3 — Async and boundaries

Master:

```text
Promises
async/await
Promise.all
timeouts
API adapters
repository abstraction
HTTP boundary separation
```

Practice task:

Build a user-registration flow with repository and email dependencies.

## Level 4 — Testing

Master:

```text
pure function tests
service tests
fake dependencies
integration tests
edge cases
error cases
```

Practice task:

Write tests before refactoring an existing payment calculation.

## Level 5 — Design

Master:

```text
SOLID
composition
dependency injection
strategy
adapter
repository
feature modules
clean architecture
```

Practice task:

Build an order module that supports two payment providers without changing the business use case.

## Level 6 — Production engineering

Master:

```text
logging
security
validation
configuration
observability
performance profiling
concurrency
graceful failures
CI checks
```

Practice task:

Turn a small REST API into a production-ready service with safe errors, logs, tests, validation, and quality gates.

## Level 7 — Team-level clean code

Master:

```text
code-review communication
architecture decision records
shared vocabulary
coding standards
incremental refactoring
legacy-code strategies
technical-debt prioritization
```

Practice task:

Review a real pull request and explain each requested change in terms of maintainability, risk, and business impact.

---

# 43. Interview and Team Discussion Questions

Use these to test whether you understand the ideas rather than memorizing definitions.

1. What is the difference between code that works and clean code?
2. Why can a longer function name be better than a shorter one?
3. When is duplication preferable to a premature abstraction?
4. Why should `const` usually be the default?
5. What makes a function “do one thing”?
6. When should you use a parameter object?
7. Why are boolean flag parameters sometimes a smell?
8. What is a pure function?
9. Why are pure functions easy to test?
10. What is a side effect?
11. Why is shared mutable state risky?
12. What is the benefit of guard clauses?
13. When is `reduce()` less readable than a loop?
14. Why does `forEach(async () => {})` surprise developers?
15. When should independent promises use `Promise.all()`?
16. What happens when one promise in `Promise.all()` rejects?
17. What is dependency injection?
18. What problem does the Adapter pattern solve?
19. What problem does the Strategy pattern solve?
20. What does the Single Responsibility Principle actually mean?
21. How does dependency inversion improve testability?
22. What is an N+1 query problem?
23. Why should external API data be normalized?
24. What is the difference between validation and sanitization?
25. Why is frontend validation insufficient for security?
26. Why are parameterized SQL queries important?
27. Why should server errors not be returned directly to clients?
28. What makes a log useful?
29. Why can too much logging be harmful?
30. What is the difference between unit, integration, and end-to-end tests?
31. Why can mocking too many dependencies create brittle tests?
32. Why should time and randomness sometimes be injected?
33. What is a code smell?
34. What is shotgun surgery?
35. What is primitive obsession?
36. Why can generic `utils.js` files become a design problem?
37. When is inheritance worse than composition?
38. Why are circular module dependencies risky?
39. What is the danger of premature optimization?
40. How would you refactor a 500-line controller safely?

---

# 44. Master Clean-Code Checklist

Use this before merging production JavaScript.

## Naming

- [ ] Variables explain what they represent.
- [ ] Boolean names read like true/false questions.
- [ ] Function names communicate behavior.
- [ ] Collection names are plural where appropriate.
- [ ] Units are encoded in names when ambiguity is possible.
- [ ] Domain vocabulary is consistent.
- [ ] There are no important `data`, `temp`, `obj`, or `thing` names.

## Variables and State

- [ ] `const` is used by default.
- [ ] `let` is used only for intentional reassignment.
- [ ] No unnecessary `var` remains.
- [ ] Variable scope is as small as practical.
- [ ] Shared mutable state is minimized.
- [ ] Function arguments are not unexpectedly mutated.

## Functions

- [ ] Each function has a focused responsibility.
- [ ] Function size is understandable, not arbitrarily tiny.
- [ ] Parameter count is manageable.
- [ ] Complex inputs use meaningful parameter objects where helpful.
- [ ] Return types/shapes are consistent.
- [ ] Hidden side effects are avoided.
- [ ] Flag arguments have been reviewed for split responsibilities.

## Control Flow

- [ ] Deep nesting is minimized.
- [ ] Guard clauses are used when they improve clarity.
- [ ] Complex conditions have meaningful names.
- [ ] Nested ternaries are avoided.
- [ ] Large repeated type/status conditionals have been reviewed for a strategy or mapping.

## Collections

- [ ] `map` is used for transformation.
- [ ] `filter` is used for filtering.
- [ ] `find` is used when only one matching item is needed.
- [ ] `some`/`every` express boolean collection checks cleanly.
- [ ] `reduce` is used only where it remains understandable.
- [ ] Async collection processing has correct sequential/parallel behavior.

## Modules and Architecture

- [ ] Modules have cohesive responsibilities.
- [ ] Giant catch-all utility files are avoided.
- [ ] External provider details are isolated.
- [ ] Database details do not unnecessarily leak into business logic.
- [ ] HTTP/DOM concerns are separated from core rules where practical.
- [ ] Circular dependencies are absent or intentionally resolved.
- [ ] Public module APIs expose only what consumers need.

## Async Code

- [ ] Promises are awaited or intentionally returned.
- [ ] Independent operations use controlled concurrency when appropriate.
- [ ] `forEach(async ...)` is not being incorrectly relied upon.
- [ ] Network calls have reasonable timeout/cancellation behavior where needed.
- [ ] Retry logic considers idempotency.
- [ ] Partial failure behavior is intentional.

## Error Handling

- [ ] Errors are not silently swallowed.
- [ ] Error messages include useful context.
- [ ] Expected business outcomes are distinguished from system failures.
- [ ] Client responses do not expose sensitive internals.
- [ ] Domain-specific errors are used where they improve handling.

## Validation and Security

- [ ] Every external input boundary is validated.
- [ ] Server-side authorization is enforced.
- [ ] Database inputs use parameters/bindings.
- [ ] HTML output is safely encoded/sanitized where required.
- [ ] Secrets are not hard-coded.
- [ ] Secrets and sensitive data are not logged.
- [ ] Redirects, file paths, and uploads are validated where applicable.

## Testing

- [ ] Important business rules have tests.
- [ ] Edge cases are covered.
- [ ] Failure paths are covered.
- [ ] Tests focus on behavior rather than private implementation.
- [ ] Test data is readable.
- [ ] Dependencies can be replaced or faked where useful.
- [ ] Refactoring can be performed with reasonable confidence.

## Performance

- [ ] No obvious N+1 data-access pattern exists.
- [ ] Large files/datasets are not loaded unnecessarily.
- [ ] CPU-heavy synchronous work is not blocking critical Node.js paths.
- [ ] Repeated expensive computations are reviewed.
- [ ] Caching has a clear invalidation strategy.
- [ ] Optimizations are based on evidence where possible.

## Documentation

- [ ] Comments explain why, not obvious syntax.
- [ ] Dead commented-out code is removed.
- [ ] TODOs are actionable.
- [ ] Public/non-obvious contracts are documented where helpful.
- [ ] Important business assumptions are discoverable.

## Tooling and Delivery

- [ ] Formatter passes.
- [ ] Linter passes.
- [ ] Tests pass.
- [ ] Build passes.
- [ ] No debug statements were accidentally committed.
- [ ] No secret/config file was accidentally committed.
- [ ] Pull request has one coherent purpose.
- [ ] The diff was self-reviewed before requesting review.

---

# 45. Final Principles to Remember

You do not need to memorize every rule in this handbook. Internalize these ideas:

## 1. Optimize for the reader

Code is written once and read many times.

## 2. Make intent visible

Names, structure, boundaries, and tests should explain what the software means.

## 3. Keep business logic separate from technical details

Your pricing rule should not care whether the request came from Express, React, a CLI, or a queue.

## 4. Prefer explicit behavior over hidden magic

Dependencies, side effects, errors, and state changes should be discoverable.

## 5. Small is useful only when it improves understanding

Do not split code into hundreds of tiny functions that require constant jumping between files.

## 6. Duplication is cheaper than the wrong abstraction

Wait until you understand the shared concept before generalizing it.

## 7. Tests buy refactoring confidence

Clean code is not static. Good software keeps changing.

## 8. Security starts at boundaries

Validate input, enforce authorization, protect secrets, and encode output correctly.

## 9. Measure before optimizing

Readable code is the default. Complexity must earn its place.

## 10. Clean code is contextual

A 30-line script, a browser widget, a financial platform, and a distributed backend do not need the same architecture.

The goal is not maximum abstraction.

The goal is **minimum necessary complexity with maximum clarity**.

---

# Appendix A — Quick Bad vs Better Reference

## Naming

```js
// Bad
const d = 30;

// Better
const sessionTimeoutMinutes = 30;
```

## Boolean

```js
// Bad
const permission = true;

// Better
const canEditInvoice = true;
```

## Mutation

```js
// Risky shared mutation
user.role = 'admin';

// Safer immutable update
const updatedUser = { ...user, role: 'admin' };
```

## Nested condition

```js
// Bad
if (user) {
  if (user.active) {
    if (user.canBuy) {
      checkout();
    }
  }
}

// Better
if (!user) return;
if (!user.active) return;
if (!user.canBuy) return;

checkout();
```

## Magic value

```js
// Bad
if (attempts >= 5) {}

// Better
const MAX_LOGIN_ATTEMPTS = 5;
if (attempts >= MAX_LOGIN_ATTEMPTS) {}
```

## Parameter list

```js
// Bad
createUser(name, email, role, locale, timezone, department);

// Better
createUser({ name, email, role, locale, timezone, department });
```

## Async loop

```js
// Wrong expectation of sequential waiting
items.forEach(async item => {
  await save(item);
});

// Sequential
for (const item of items) {
  await save(item);
}

// Parallel
await Promise.all(items.map(item => save(item)));
```

## Error swallowing

```js
// Bad
try {
  await save();
} catch {}

// Better
try {
  await save();
} catch (error) {
  logger.error('Save failed', { error });
  throw error;
}
```

## HTTP + business logic

```js
// Avoid tightly coupling core calculations to req/res.
function calculateTotal(req, res) {}

// Better
function calculateTotal(order) {}
```

---

# Appendix B — Practice Refactoring Exercises

## Exercise 1 — Rename and simplify

Refactor:

```js
function f(a) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    x += a[i].p * a[i].q;
  }
  return x;
}
```

Target ideas:

- rename function;
- rename parameters;
- use domain terminology;
- consider `reduce` if it remains readable.

Possible solution:

```js
function calculateCartSubtotal(items) {
  return items.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0
  );
}
```

## Exercise 2 — Remove nesting

Refactor:

```js
function ship(order) {
  if (order) {
    if (order.paid) {
      if (order.address) {
        return createShipment(order);
      }
    }
  }
  return null;
}
```

Possible solution:

```js
function ship(order) {
  if (!order) return null;
  if (!order.paid) return null;
  if (!order.address) return null;

  return createShipment(order);
}
```

Then ask whether each failure should actually return `null` or raise a meaningful domain error.

## Exercise 3 — Remove mixed responsibilities

Refactor a function that:

```text
validates a CSV upload
parses rows
calculates totals
writes database rows
sends an email
returns an HTTP response
```

Suggested decomposition:

```text
CSV controller
upload validator
CSV parser
calculation service
repository
notification service
```

## Exercise 4 — Replace hidden dependency

Refactor:

```js
function isSubscriptionExpired(subscription) {
  return new Date() > subscription.expiresAt;
}
```

Possible solution:

```js
function isSubscriptionExpired(subscription, now) {
  return now > subscription.expiresAt;
}
```

## Exercise 5 — Stabilize return contract

Refactor:

```js
function authenticate(input) {
  if (!input) return false;
  if (!input.email) return 'missing email';
  if (isValid(input)) return { id: 1 };
  return null;
}
```

Possible direction:

```js
function authenticate(input) {
  if (!input?.email) {
    return {
      ok: false,
      reason: 'EMAIL_REQUIRED'
    };
  }

  if (!isValid(input)) {
    return {
      ok: false,
      reason: 'INVALID_CREDENTIALS'
    };
  }

  return {
    ok: true,
    user: { id: 1 }
  };
}
```

---

# Appendix C — Daily Clean-Code Routine

Before coding:

```text
1. Understand the behavior.
2. Identify input and output boundaries.
3. Identify important business rules.
4. Decide what must be validated.
5. Reuse existing project vocabulary.
```

While coding:

```text
1. Use clear names immediately.
2. Keep side effects visible.
3. Extract logic when a concept becomes clear.
4. Handle failure paths intentionally.
5. Write tests around important rules.
```

Before committing:

```text
1. Read the diff.
2. Remove debug code.
3. Rename unclear variables.
4. Remove dead code.
5. Run formatter.
6. Run linter.
7. Run tests.
8. Check for secrets.
```

Before pull request:

```text
1. Confirm one coherent goal.
2. Explain why the change exists.
3. Explain how it was tested.
4. Mention migration/risk areas.
5. Re-read from the reviewer's perspective.
```

---

# Appendix D — Clean-Code Decision Framework

When unsure how to structure something, ask these questions in order:

```text
1. What business concept am I implementing?
2. What should this code be called?
3. What inputs does it actually need?
4. What output should it guarantee?
5. What can fail?
6. What side effects occur?
7. Can the business rule be pure?
8. Which technical details should stay at the boundary?
9. How will I test the important behavior?
10. Is this abstraction solving today's problem or an imaginary future one?
```

If you can answer these questions clearly, the resulting design is usually much easier to maintain.

---

# Appendix E — Example Clean Project Skeleton

```text
my-app/
  src/
    modules/
      users/
        user.controller.js
        user.service.js
        user.repository.js
        user.validation.js
        user.mapper.js
        user.errors.js
        user.test.js

      orders/
        order.controller.js
        order.service.js
        order.repository.js
        order.validation.js
        order.pricing.js
        order.errors.js
        order.test.js

    integrations/
      payments/
        payment-gateway.js
        provider-a.adapter.js
      email/
        email-notifier.js

    shared/
      config/
      logging/
      errors/
      database/
      security/

    app.js
    server.js

  test/
    integration/
    e2e/

  .env.example
  eslint.config.js
  package.json
  README.md
```

This is an example, not a mandatory universal structure. Use the smallest structure that keeps your actual system understandable.

---

# Appendix F — A Compact Clean-Code Manifesto

```text
I will prefer clarity over cleverness.
I will name things by their meaning.
I will keep dependencies visible.
I will separate business rules from infrastructure where useful.
I will validate data at trust boundaries.
I will make failures explicit.
I will control side effects and shared mutation.
I will write tests that protect behavior.
I will automate formatting and mechanical quality checks.
I will refactor incrementally instead of tolerating confusion forever.
I will not introduce abstractions without a real problem to solve.
I will optimize after measuring.
I will leave the code easier to understand than I found it.
```

---

## End of Handbook

Use this handbook as a living reference. Clean coding is not a destination or a fixed set of formatting rules; it is the discipline of continually reducing unnecessary mental complexity while preserving correct behavior.
