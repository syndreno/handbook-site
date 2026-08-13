# Vanilla JavaScript Mastery Guide

> **Goal:** Master modern Vanilla JavaScript from absolute beginner fundamentals to advanced, production-ready usage without relying on frameworks. Every major topic includes beginner-friendly meaning, purpose, mental models, examples, real-world scenarios, pitfalls, and practice guidance.
>
> Use this file as a **learning roadmap, reference manual, interview guide, practice workbook, and real-world coding handbook**.
>
> **Edition:** Beginner-Friendly Expanded Master Edition — designed to be understandable even when a learner opens a topic for the first time.
>

---

# Table of Contents

1. [How to Use This Guide](#1-how-to-use-this-guide)
2. [JavaScript Mental Model](#2-javascript-mental-model)
3. [JavaScript Runtime and Execution](#3-javascript-runtime-and-execution)
4. [Variables: `var`, `let`, `const`](#4-variables-var-let-const)
5. [Data Types](#5-data-types)
6. [Type Conversion and Coercion](#6-type-conversion-and-coercion)
7. [Operators](#7-operators)
8. [Truthy and Falsy Values](#8-truthy-and-falsy-values)
9. [Control Flow](#9-control-flow)
10. [Loops and Iteration](#10-loops-and-iteration)
11. [Functions](#11-functions)
12. [Parameters and Arguments](#12-parameters-and-arguments)
13. [Scope and Lexical Environment](#13-scope-and-lexical-environment)
14. [Hoisting and Temporal Dead Zone](#14-hoisting-and-temporal-dead-zone)
15. [Closures](#15-closures)
16. [`this`](#16-this)
17. [`call`, `apply`, and `bind`](#17-call-apply-and-bind)
18. [Objects](#18-objects)
19. [Property Descriptors](#19-property-descriptors)
20. [Arrays](#20-arrays)
21. [Array Transformation Methods](#21-array-transformation-methods)
22. [Strings](#22-strings)
23. [Numbers, Precision, and Money](#23-numbers-precision-and-money)
24. [Dates and Time](#24-dates-and-time)
25. [Destructuring](#25-destructuring)
26. [Spread and Rest](#26-spread-and-rest)
27. [Optional Chaining and Nullish Coalescing](#27-optional-chaining-and-nullish-coalescing)
28. [Sets, Maps, WeakSet, WeakMap](#28-sets-maps-weakset-weakmap)
29. [Symbols](#29-symbols)
30. [Iterables and Iterators](#30-iterables-and-iterators)
31. [Generators](#31-generators)
32. [Prototypes and Prototype Chain](#32-prototypes-and-prototype-chain)
33. [Classes](#33-classes)
34. [Composition vs Inheritance](#34-composition-vs-inheritance)
35. [Error Handling](#35-error-handling)
36. [Synchronous vs Asynchronous JavaScript](#36-synchronous-vs-asynchronous-javascript)
37. [Callbacks](#37-callbacks)
38. [Promises](#38-promises)
39. [`async` / `await`](#39-async--await)
40. [Promise Utilities](#40-promise-utilities)
41. [Event Loop](#41-event-loop)
42. [Timers](#42-timers)
43. [Modules](#43-modules)
44. [DOM Fundamentals](#44-dom-fundamentals)
45. [DOM Manipulation](#45-dom-manipulation)
46. [Events](#46-events)
47. [Event Bubbling, Capturing, and Delegation](#47-event-bubbling-capturing-and-delegation)
48. [Forms and Validation](#48-forms-and-validation)
49. [Fetch API](#49-fetch-api)
50. [AbortController](#50-abortcontroller)
51. [JSON](#51-json)
52. [Web Storage](#52-web-storage)
53. [Cookies](#53-cookies)
54. [URL and History APIs](#54-url-and-history-apis)
55. [File and Blob APIs](#55-file-and-blob-apis)
56. [Clipboard API](#56-clipboard-api)
57. [Observers](#57-observers)
58. [Web Workers](#58-web-workers)
59. [Regular Expressions](#59-regular-expressions)
60. [Functional Programming Concepts](#60-functional-programming-concepts)
61. [Pure Functions and Immutability](#61-pure-functions-and-immutability)
62. [Currying and Partial Application](#62-currying-and-partial-application)
63. [Memoization](#63-memoization)
64. [Debounce and Throttle](#64-debounce-and-throttle)
65. [Common Design Patterns](#65-common-design-patterns)
66. [SOLID Ideas in JavaScript](#66-solid-ideas-in-javascript)
67. [Memory Management](#67-memory-management)
68. [Shallow Copy vs Deep Copy](#68-shallow-copy-vs-deep-copy)
69. [Equality Rules](#69-equality-rules)
70. [Performance Optimization](#70-performance-optimization)
71. [Security Essentials](#71-security-essentials)
72. [Debugging](#72-debugging)
73. [Testing Vanilla JavaScript](#73-testing-vanilla-javascript)
74. [Clean Code Guidelines](#74-clean-code-guidelines)
75. [Data Structures](#75-data-structures)
76. [Algorithms and Big-O](#76-algorithms-and-big-o)
77. [Real-World Scenario Projects](#77-real-world-scenario-projects)
78. [Common JavaScript Mistakes](#78-common-javascript-mistakes)
79. [Interview Topics](#79-interview-topics)
80. [Practice Challenges](#80-practice-challenges)
81. [Mastery Roadmap](#81-mastery-roadmap)
82. [Final Master Checklist](#82-final-master-checklist)
83. [Quick Reference Cheat Sheet](#83-quick-reference-cheat-sheet)
84. [Strict Mode](#84-strict-mode)
85. [Object Utilities, Getters, Setters, Freeze, and Seal](#85-object-utilities-getters-setters-freeze-and-seal)
86. [Proxy and Reflect](#86-proxy-and-reflect)
87. [Async Iteration and Async Generators](#87-async-iteration-and-async-generators)
88. [Typed Arrays, ArrayBuffer, and Binary Data](#88-typed-arrays-arraybuffer-and-binary-data)
89. [Browser Rendering and Animation Timing](#89-browser-rendering-and-animation-timing)
90. [Custom Events and EventTarget](#90-custom-events-and-eventtarget)
91. [IndexedDB](#91-indexeddb)
92. [WebSocket and Server-Sent Events](#92-websocket-and-server-sent-events)
93. [Streams API](#93-streams-api)
94. [Web Components and Shadow DOM](#94-web-components-and-shadow-dom)
95. [Service Workers and Cache API](#95-service-workers-and-cache-api)
96. [Internationalization with `Intl`](#96-internationalization-with-intl)
97. [Browser Security Model: Same-Origin, CORS, CSP, and Trusted Data](#97-browser-security-model-same-origin-cors-csp-and-trusted-data)
98. [Accessibility in Vanilla JavaScript](#98-accessibility-in-vanilla-javascript)
99. [JSDoc and Type-Safe JavaScript Thinking](#99-jsdoc-and-type-safe-javascript-thinking)
100. [Modern JavaScript Features and Compatibility](#100-modern-javascript-features-and-compatibility)
101. [Production-Style Vanilla JavaScript Architecture](#101-production-style-vanilla-javascript-architecture)

---

# 1. How to Use This Guide

> ### Beginner explanation
>
> This guide is designed so that you can open **any section independently** and still understand what the topic means. You do not need to memorize everything on the first pass. JavaScript becomes easier when you repeatedly move between **concept → example → experiment → debugging → real use case**.
>
> When you see a new term, first ask: **What problem does this solve?** Then run the smallest example. Only after that should you study edge cases and internals.

### A beginner-friendly study method

For every topic in this file, use this five-question checklist:

1. **What is it?** — explain it in one sentence without technical jargon.
2. **Why does JavaScript have it?** — identify the problem it solves.
3. **How do I write it?** — learn the syntax.
4. **Where would I use it in a real application?** — connect it to a business scenario.
5. **What mistake am I likely to make?** — learn the common failure before production does.

Example for `Array.prototype.filter()`:

```text
What?     Creates a new array containing only matching items.
Why?      Lets us select data without manually managing another array.
Syntax?   items.filter(item => condition)
Use case? Show only pending invoices.
Mistake?  Expecting it to change the original array.
```

### Before you begin: vocabulary

| Term | Simple meaning |
|---|---|
| **Value** | A piece of data such as `10`, `"hello"`, or an object. |
| **Variable** | A named place through which your code refers to a value. |
| **Expression** | Code that produces a value, such as `2 + 3`. |
| **Statement** | An instruction, such as `if (...) { ... }`. |
| **Function** | Reusable behavior that can accept input and return output. |
| **Object** | A collection of related values stored under property names. |
| **Array** | An ordered collection of values. |
| **Method** | A function accessed through an object, such as `items.map(...)`. |
| **Callback** | A function passed to other code so it can be called later. |
| **API** | A defined way for one piece of software to interact with another. |
| **Runtime** | The environment in which JavaScript actually executes. |
| **DOM** | JavaScript's object representation of an HTML page. |
| **Asynchronous** | Work that can finish later without blocking all other work. |


For every topic:

1. Read the concept.
2. Rewrite the examples yourself.
3. Change inputs and predict results.
4. Intentionally break the code.
5. Debug it using browser DevTools.
6. Build one tiny feature with the concept.
7. Explain the concept out loud without notes.
8. Solve the exercises.
9. Revisit it after a few days.

A useful progression:

```text
Learn syntax
    ↓
Understand behavior
    ↓
Predict output
    ↓
Write from memory
    ↓
Debug failures
    ↓
Use in mini-project
    ↓
Explain to another developer
```

Priority legend:

- 🔥 **Must Know**
- ⭐ **Important**
- 🧠 **Advanced**
- 🔹 **Good to Know**

---

# 2. JavaScript Mental Model

> ### Beginner explanation
>
> Before learning syntax, understand what JavaScript is doing for you. JavaScript is a language for describing **data and behavior**. You store information in values, group data into objects/arrays, write behavior in functions, and react to events such as a click or an API response.

### Mental model

Imagine a browser application as four layers:

```text
Data          → users, invoices, totals, status values
Logic         → functions that validate, calculate, transform
Browser APIs  → DOM, events, fetch, storage, timers
UI            → HTML elements the user sees and interacts with
```

JavaScript connects these layers. A button click may read form data, validate it, call an API, transform the response, and update the DOM.

### Why Vanilla JavaScript matters

Frameworks automate many repetitive tasks, but they still rely on JavaScript fundamentals. If you understand Vanilla JavaScript, concepts such as component state, event handlers, data mapping, asynchronous APIs, and rendering are much easier to understand in any framework.

### Real-world example

A simple invoice screen might do this:

```text
User enters amount
      ↓
JavaScript reads input
      ↓
JavaScript validates number
      ↓
JavaScript calculates tax
      ↓
JavaScript updates total on screen
      ↓
User clicks Save
      ↓
JavaScript sends JSON to API
```


🔥 JavaScript is a high-level, dynamically typed, garbage-collected programming language.

JavaScript is commonly used for:

- Browser interaction
- Form validation
- UI logic
- Data transformation
- API calls
- Real-time dashboards
- Client-side routing
- Storage
- File processing
- Browser automation logic
- Server-side programming through runtimes such as Node.js

## ECMAScript vs JavaScript

**ECMAScript** is the language specification.

**JavaScript** is an implementation of that specification.

Think of it as:

```text
ECMAScript = Rules / Specification
JavaScript = Language implementation following those rules
```

## Vanilla JavaScript

Vanilla JavaScript means:

> JavaScript written without a frontend framework such as Angular, React, or Vue.

Example:

```js
const button = document.querySelector("#save");

button.addEventListener("click", () => {
  console.log("Saved");
});
```

A framework may hide many browser-level details. Vanilla JavaScript teaches you what actually happens underneath.

---

# 3. JavaScript Runtime and Execution

> ### Beginner explanation
>
> Your JavaScript source code is just text. A JavaScript engine must **read, understand, execute, and manage** that code. You normally do not control these internal steps directly, but knowing the model explains errors, performance behavior, recursion, asynchronous execution, and memory leaks.

### The three pieces to remember

1. **Call stack** — which function is currently running and which function called it.
2. **Heap / managed memory** — where dynamically allocated values are kept by the engine.
3. **Host environment** — the browser provides capabilities that are not part of the core language itself, such as DOM, `fetch`, timers, and storage.

### Simple analogy

Think of the call stack as a stack of work papers on your desk. When function `A` calls function `B`, you place `B` on top. If `B` calls `C`, `C` goes on top. When `C` finishes, you remove it and continue `B`.

### Why this matters in practice

A function that recursively calls itself forever keeps adding stack frames until the runtime cannot continue:

```js
function repeatForever() {
  repeatForever();
}

// repeatForever(); // eventually causes a stack overflow
```

And a long synchronous calculation keeps the browser's main thread busy, which can make buttons and animations appear frozen.


🔥 Must know for advanced JavaScript.

A simplified execution flow:

```text
Source Code
   ↓
Parser
   ↓
Abstract Syntax Tree
   ↓
Interpreter / Compiler
   ↓
Bytecode / Optimized Machine Code
   ↓
Execution
```

In a browser, JavaScript works alongside browser APIs:

```text
JavaScript Engine
├── Call Stack
├── Heap
└── Garbage Collector

Browser
├── DOM
├── Timers
├── Fetch
├── Events
└── Web APIs
```

## Call Stack

The call stack tracks function execution.

```js
function third() {
  console.log("third");
}

function second() {
  third();
}

function first() {
  second();
}

first();
```

Conceptually:

```text
first()
  ↓
second()
  ↓
third()
```

When `third()` finishes, its stack frame is removed.

## Heap

Objects, arrays, functions, and other allocated data are generally stored in memory managed by the runtime.

Do not oversimplify this into "primitives always live on stack, objects always live on heap" as an absolute implementation guarantee. JavaScript engines are free to optimize internally.

---

# 4. Variables: `var`, `let`, `const`

> ### Beginner explanation
>
> Variables let you give meaningful names to values. Instead of writing the same raw value everywhere, you name it once and use the name. In modern JavaScript, the main decision is simple: **use `const` unless the variable itself needs to point to a different value; then use `let`.**

### Declaration, initialization, assignment, reassignment

```js
let amount;      // declaration
amount = 100;    // assignment + first initialization
amount = 200;    // reassignment
```

```js
const taxRate = 0.18; // declaration and initialization together
```

A `const` variable must be initialized immediately because JavaScript will not let you later make the variable point somewhere else.

### What “block scope” means

A block is usually code between `{` and `}`:

```js
if (true) {
  const message = "inside";
}

// console.log(message); // ReferenceError
```

This is useful because temporary values stay where they belong instead of leaking into unrelated code.

### Real-world rule

```js
const invoiceId = 1001; // identity will not be reassigned
let status = "DRAFT";   // workflow status will change
```

The keyword communicates intent to the next developer.


🔥 Use `const` by default.

```js
const taxRate = 0.18;
let total = 0;
```

Use `let` when reassignment is required.

```js
let status = "pending";
status = "approved";
```

Avoid `var` in modern code unless you specifically need its legacy function-scoping behavior.

```js
var oldStyle = true;
```

## Comparison

| Feature | `var` | `let` | `const` |
|---|---:|---:|---:|
| Block scoped | No | Yes | Yes |
| Function scoped | Yes | Yes | Yes |
| Reassignable | Yes | Yes | No |
| Redeclarable in same scope | Yes | No | No |
| TDZ | No | Yes | Yes |
| Recommended modern usage | Rare | Yes | Yes |

## `const` does not make objects immutable

```js
const user = {
  name: "Shoeb"
};

user.name = "Alex"; // allowed
```

But:

```js
user = {}; // TypeError
```

`const` protects the variable binding, not the contents of the object.

### Real-world scenario

```js
const invoice = {
  invoiceNo: "INV-1001",
  amount: 12000
};

invoice.amount = 12500;
```

The `invoice` reference stays constant while object properties may change.

---

# 5. Data Types

> ### Beginner explanation
>
> A **data type** tells JavaScript what kind of value it is working with and therefore which operations make sense. You can concatenate strings, add numbers, call array methods on arrays, and access properties on objects.

### Primitive vs object values

A primitive is a simple value. When you assign it to another variable, you get the value itself:

```js
let first = 10;
let second = first;
second = 20;

console.log(first); // 10
```

Objects behave differently because variables refer to the same object:

```js
const firstUser = { name: "A" };
const secondUser = firstUser;

secondUser.name = "B";
console.log(firstUser.name); // "B"
```

This reference behavior is one of the most important ideas in JavaScript because it explains accidental mutation.

### When each primitive is useful

| Type | Example | Typical use |
|---|---|---|
| `string` | `"INV-1001"` | Text, identifiers, labels. |
| `number` | `1250.50` | Quantities and normal arithmetic. |
| `bigint` | `9007199254740993n` | Integers larger than safe `number` range. |
| `boolean` | `true` | Yes/no state. |
| `undefined` | `undefined` | Value has not been supplied/assigned. |
| `null` | `null` | Intentionally no value. |
| `symbol` | `Symbol("id")` | Unique keys and advanced protocols. |


## Primitive Types

🔥 Know all seven.

```text
string
number
bigint
boolean
undefined
null
symbol
```

Examples:

```js
const name = "Shoeb";
const amount = 1500.50;
const hugeNumber = 9007199254740993n;
const active = true;
let value;
const empty = null;
const uniqueId = Symbol("id");
```

## Objects

Objects are non-primitive values.

```js
const user = {};
const items = [];
const fn = function () {};
const date = new Date();
```

## `typeof`

```js
typeof "hello";       // "string"
typeof 123;           // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof 10n;           // "bigint"
typeof Symbol();      // "symbol"
typeof {};            // "object"
typeof [];            // "object"
typeof function() {}; // "function"
typeof null;          // "object" (historical quirk)
```

Use:

```js
Array.isArray(value);
```

to detect arrays.

---

# 6. Type Conversion and Coercion

> ### Beginner explanation
>
> HTML inputs, URL parameters, and many external values arrive as **strings**, even when they visually look like numbers. Type conversion is the process of deliberately changing a value from one type to another. Type coercion is when JavaScript performs a conversion for you automatically.

### Why beginners get confused

```js
"10" + 5; // "105"
"10" - 5; // 5
```

For `+`, JavaScript may concatenate strings. For subtraction, it needs numeric operands, so it attempts numeric conversion.

### Real-world form example

```js
const quantityInput = "2";
const priceInput = "100.50";

const quantity = Number(quantityInput);
const price = Number(priceInput);

if (!Number.isFinite(quantity) || !Number.isFinite(price)) {
  throw new Error("Quantity and price must be numeric");
}

const lineTotal = quantity * price;
```

### Important distinction

```js
Number("");      // 0
parseInt("12px", 10); // 12
Number("12px");  // NaN
```

Use the conversion that matches your validation rules. If the entire input must be a number, `Number(...)` plus validation is usually clearer than accepting partial numeric text.


## Explicit Conversion

```js
Number("100");       // 100
String(100);         // "100"
Boolean(1);          // true
parseInt("42px", 10); // 42
parseFloat("10.75"); // 10.75
```

## Implicit Coercion

```js
"5" + 2; // "52"
"5" - 2; // 3
true + 1; // 2
```

Why?

`+` can mean string concatenation.

Other arithmetic operators generally convert operands to numbers.

## Production advice

Prefer explicit conversions.

Bad:

```js
const total = inputValue * 1;
```

Better:

```js
const total = Number(inputValue);
```

Validation:

```js
const amount = Number(input);

if (!Number.isFinite(amount)) {
  throw new Error("Invalid amount");
}
```

---

# 7. Operators

> ### Beginner explanation
>
> Operators are symbols or keywords that combine, compare, assign, or inspect values. You already use operators whenever you write arithmetic or conditions.

### Operator families

| Family | Examples | Purpose |
|---|---|---|
| Arithmetic | `+ - * / % **` | Perform calculations. |
| Comparison | `=== !== > < >= <=` | Produce `true` or `false`. |
| Logical | `&& || !` | Combine/negate conditions. |
| Assignment | `= += -= *=` | Store/update values. |
| Nullish | `??` | Fallback only for `null`/`undefined`. |
| Optional access | `?.` | Safely stop property access if value is nullish. |
| Conditional | `? :` | Choose one of two values. |
| Type | `typeof`, `instanceof` | Inspect certain type relationships. |

### Short-circuit behavior

Logical operators do more than return booleans; they return one of their operands:

```js
const displayName = user.name || "Anonymous";
```

This is convenient, but `||` treats `0`, `false`, and `""` as missing. Use `??` when those values are valid.


## Arithmetic

```js
+ - * / % **
```

Example:

```js
const subtotal = 1000;
const tax = subtotal * 0.18;
const total = subtotal + tax;
```

## Equality

Prefer:

```js
===
!==
```

Example:

```js
"1" === 1; // false
```

instead of:

```js
"1" == 1; // true
```

## Logical Operators

```js
&&
||
!
```

Scenario:

```js
if (user.isActive && user.hasPermission) {
  openDashboard();
}
```

## Nullish Coalescing

```js
const quantity = inputQuantity ?? 1;
```

Unlike `||`, it does not replace valid values such as `0`, `false`, or `""`.

## Optional Chaining

```js
const city = employee?.address?.city;
```

---

# 8. Truthy and Falsy Values

> ### Beginner explanation
>
> Conditions such as `if (value)` need a boolean decision. JavaScript therefore treats some non-boolean values as if they were `true` or `false`. These are called **truthy** and **falsy** values.

### Why it matters

This is convenient:

```js
if (user) {
  showProfile(user);
}
```

But it can also hide valid values:

```js
const discount = 0;

if (!discount) {
  console.log("This also runs for a valid zero discount");
}
```

When your business rule distinguishes `0`, empty string, `false`, `null`, and `undefined`, write an explicit comparison.

```js
if (discount == null) {
  // specifically null or undefined because of the intentional == null pattern
}
```

In most other comparisons, prefer strict equality.


Falsy values:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy, including:

```js
[]
{}
"false"
"0"
```

Common mistake:

```js
if (items) {
  // [] is truthy
}
```

Correct check:

```js
if (items.length > 0) {
}
```

---

# 9. Control Flow

> ### Beginner explanation
>
> Control flow decides **which code runs**. Without control flow, every line would execute in the same order regardless of data. Business software is mostly rules, so conditions appear everywhere.

### Choosing the right form

- Use `if` when conditions are flexible or ranges overlap.
- Use `switch` when one value is matched against several known cases.
- Use a ternary when you are choosing between **two simple values**.
- Use guard clauses to exit early from invalid situations.

### Business example

```js
function getApprovalLevel(amount) {
  if (amount <= 10_000) return "MANAGER";
  if (amount <= 100_000) return "FINANCE_MANAGER";
  return "FINANCE_CONTROLLER";
}
```

This reads from easiest rule to highest level and avoids nested blocks.

### Avoid

Do not turn every `if` into a ternary. Deeply nested ternaries are harder to read and debug than ordinary statements.


## `if`

```js
if (amount > 100000) {
  requireExtraApproval();
}
```

## `else if`

```js
if (score >= 90) {
  grade = "A";
} else if (score >= 75) {
  grade = "B";
} else {
  grade = "C";
}
```

## `switch`

Useful for finite known states.

```js
switch (invoice.status) {
  case "PENDING":
    showPending();
    break;

  case "APPROVED":
    showApproved();
    break;

  case "REJECTED":
    showRejected();
    break;

  default:
    showUnknown();
}
```

## Guard clauses

Prefer:

```js
function processInvoice(invoice) {
  if (!invoice) return;
  if (!invoice.id) return;
  if (invoice.status !== "READY") return;

  postInvoice(invoice);
}
```

over deep nesting.

---

# 10. Loops and Iteration

> ### Beginner explanation
>
> Loops repeat code. The important skill is not memorizing every loop syntax; it is choosing the form that clearly communicates **what is being repeated and whether you need an index, a value, a property name, or early exit**.

### Quick selection guide

| Need | Prefer |
|---|---|
| Iterate array/string values | `for...of` |
| Need manual index/control | classic `for` |
| Repeat while condition remains true | `while` |
| Iterate object keys | `Object.keys()` + `for...of`, or carefully `for...in` |
| Transform array | `map()` |
| Select array values | `filter()` |
| Search first matching item | `find()` |
| Aggregate | `reduce()` |

### Real-world example

```js
for (const invoice of invoices) {
  if (invoice.cancelled) continue;

  if (invoice.id === requestedId) {
    console.log("Found", invoice);
    break;
  }
}
```

`continue` skips one iteration; `break` ends the entire loop.


## Classic `for`

```js
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
```

Useful when you need the index or precise loop control.

## `for...of`

Best for iterable values.

```js
for (const invoice of invoices) {
  console.log(invoice.invoiceNo);
}
```

## `for...in`

Iterates enumerable property names.

```js
for (const key in user) {
  console.log(key, user[key]);
}
```

Usually avoid `for...in` for arrays.

## `while`

```js
while (queue.length > 0) {
  process(queue.shift());
}
```

## `break`

```js
for (const record of records) {
  if (record.id === targetId) {
    result = record;
    break;
  }
}
```

## `continue`

```js
for (const employee of employees) {
  if (!employee.active) continue;

  sendNotification(employee);
}
```

---

# 11. Functions

> ### Beginner explanation
>
> A function packages behavior under a name. It can accept input through parameters, perform work, and optionally return a result. Good functions let you express business rules in readable pieces instead of repeating logic everywhere.

### Input → behavior → output

```text
amount + rate
     ↓
calculateTax()
     ↓
tax value
```

```js
function calculateTax(amount, rate) {
  return amount * rate;
}
```

### Functions are values

This is special and powerful in JavaScript:

```js
const operation = calculateTax;
```

You can store a function, pass it to another function, or return it from a function. That is why callbacks, event handlers, `map`, `filter`, and promises work naturally.

### Real-world design

Prefer:

```js
validateInvoice(invoice);
calculateInvoiceTotals(invoice);
saveInvoice(invoice);
```

instead of one 300-line `processInvoice()` function that performs unrelated responsibilities.


🔥 Functions are first-class values in JavaScript.

## Declaration

```js
function add(a, b) {
  return a + b;
}
```

## Expression

```js
const add = function (a, b) {
  return a + b;
};
```

## Arrow Function

```js
const add = (a, b) => a + b;
```

## Higher-Order Function

A function that accepts another function or returns one.

```js
function execute(operation, a, b) {
  return operation(a, b);
}

execute((x, y) => x + y, 2, 3);
```

## Callback

```js
function processUser(user, callback) {
  callback(user);
}
```

## Recursive Function

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

---

# 12. Parameters and Arguments

> ### Beginner explanation
>
> **Parameters** are the names written in a function definition. **Arguments** are the actual values passed when the function is called.

```js
function greet(name) { // name = parameter
  return `Hello ${name}`;
}

greet("Shoeb"); // "Shoeb" = argument
```

### Why default parameters help

```js
function createUser(name, role = "USER") {
  return { name, role };
}
```

The function still works when a caller omits the optional role.

### Why object parameters scale better

Compare:

```js
createInvoice("INV-1", 1000, "INR", "ABC", false, 30);
```

with:

```js
createInvoice({
  invoiceNo: "INV-1",
  amount: 1000,
  currency: "INR",
  vendor: "ABC",
  urgent: false,
  paymentDays: 30
});
```

The second call documents itself and is easier to extend without remembering argument positions.


## Default Parameter

```js
function calculateTax(amount, rate = 0.18) {
  return amount * rate;
}
```

## Rest Parameter

```js
function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
```

## Object Parameter

Useful when a function needs many arguments.

Bad:

```js
createEmployee(
  "Shoeb",
  "IT",
  "Mumbai",
  true,
  "ADMIN"
);
```

Better:

```js
createEmployee({
  name: "Shoeb",
  department: "IT",
  city: "Mumbai",
  active: true,
  role: "ADMIN"
});
```

Function:

```js
function createEmployee({
  name,
  department,
  city,
  active = true,
  role = "USER"
}) {
  return { name, department, city, active, role };
}
```

---

# 13. Scope and Lexical Environment

> ### Beginner explanation
>
> Scope answers a simple question: **“Where can this variable be accessed?”** Scope protects temporary values from leaking into unrelated parts of a program and lets different functions safely use the same local variable names.

### Scope chain mental model

When JavaScript sees a variable name, it roughly searches:

```text
Current block/function
        ↓ not found
Outer lexical scope
        ↓ not found
Next outer scope
        ↓
Global/module environment
```

Example:

```js
const company = "Acme";

function createInvoice() {
  const currency = "INR";

  function printSummary() {
    const title = "Invoice";
    console.log(title, company, currency);
  }

  printSummary();
}
```

`printSummary()` can see its own `title`, the outer `currency`, and global `company`. The outer function cannot see `title`.


Types of scope:

```text
Global Scope
Function Scope
Block Scope
Module Scope
Lexical Scope
```

Example:

```js
const company = "Acme";

function processInvoice() {
  const status = "pending";

  if (true) {
    const localMessage = "Inside block";
    console.log(company, status, localMessage);
  }
}
```

`localMessage` cannot be accessed outside its block.

## Lexical scope

A function can access variables from where it was **defined**, not where it was called.

```js
const tax = 0.18;

function calculate(amount) {
  return amount + amount * tax;
}
```

---

# 14. Hoisting and Temporal Dead Zone

> ### Beginner explanation
>
> “Hoisting” is a teaching term used to explain why declarations sometimes appear usable before the line where you wrote them. JavaScript creates bindings while preparing a scope before normal statement execution begins. Different declaration types are initialized differently.

### The safest beginner rule

Write declarations **before you use them**, even if some declaration forms technically work earlier.

```js
const rate = 0.18;
const tax = calculateTax(1000, rate);

function calculateTax(amount, rate) {
  return amount * rate;
}
```

Function declarations are intentionally usable earlier; `let`/`const` are not usable before initialization.

### TDZ in plain English

The Temporal Dead Zone is the part of a scope where the binding exists but JavaScript refuses access because the declaration has not been initialized yet.

It helps catch code that accesses a variable too early instead of silently receiving `undefined` as `var` often does.


Function declarations are available before their declaration line:

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

`var` is hoisted and initialized with `undefined`.

```js
console.log(x); // undefined
var x = 10;
```

Equivalent mental model:

```js
var x;
console.log(x);
x = 10;
```

`let` and `const` are hoisted but remain inaccessible until initialization.

```js
console.log(a); // ReferenceError
let a = 10;
```

The inaccessible period is the **Temporal Dead Zone**.

---

# 15. Closures

> ### Beginner explanation
>
> A closure is not special syntax. It is a behavior that naturally happens because functions remember the lexical environment where they were created. A returned or delayed function can therefore keep using variables from an earlier call.

### Think of a closure as a backpack

When a function leaves its original scope, it can carry references to the outer variables it still needs.

```text
createCounter()
   └── count = 0
        ↓ captured by
returned function
```

### Why it exists in real code

Closures are behind:

- Event handlers that remember configuration.
- Factory functions.
- Private state.
- Debounce/throttle implementations.
- Memoization caches.
- Functions created inside loops and modules.

### Key warning

A closure keeps **references**, not frozen snapshots. If the captured value changes, the closure sees the current value. It can also keep large objects reachable longer than expected, so closures matter for memory management too.


🔥 One of the most important JavaScript concepts.

A closure occurs when a function remembers variables from its lexical scope even after the outer function has finished.

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

## Scenario: private state

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}
```

`balance` cannot be directly accessed from outside.

## Scenario: configuration factory

```js
function createApiClient(baseUrl) {
  return function request(endpoint) {
    return fetch(`${baseUrl}${endpoint}`);
  };
}

const employeeApi = createApiClient("/api/employees");
```

## Common mistake

Closures may unintentionally keep large objects in memory.

---

# 16. `this`

> ### Beginner explanation
>
> `this` is a special value provided when a normal function is called. The hardest part is that `this` is usually determined by the **call site**, not simply by where the function was written. Arrow functions are different: they do not create their own `this`; they use the surrounding lexical `this`.

### Ask: “Who is calling this function?”

```js
const user = {
  name: "Shoeb",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```

The call is `user.greet()`, so `this` is `user`.

But:

```js
const fn = user.greet;
fn();
```

Now there is no `user.` receiver in the call. In strict/module code, `this` will not be the user object.

### Beginner rule

Do not use `this` automatically. For many application functions, explicit parameters are clearer. Use `this` when object/class method semantics actually help.


🔥 `this` depends on **how a function is called**.

## Object method

```js
const user = {
  name: "Shoeb",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

## Detached method problem

```js
const greet = user.greet;
greet();
```

`this` is no longer `user`.

## Arrow functions

Arrow functions do not create their own `this`.

```js
const user = {
  name: "Shoeb",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};
```

---

# 17. `call`, `apply`, and `bind`

> ### Beginner explanation
>
> `call`, `apply`, and `bind` let you explicitly control the `this` value of a **normal function**. They solve the same general problem but differ in when the function runs and how arguments are supplied.

| Method | Executes now? | Arguments |
|---|---:|---|
| `call` | Yes | Passed one by one |
| `apply` | Yes | Passed in an array/array-like value |
| `bind` | No | Returns a new bound function |

### Typical use case

A callback may lose its original receiver:

```js
const handler = service.handle.bind(service);
button.addEventListener("click", handler);
```

`bind` creates a function that will continue calling `handle` with `service` as `this`.

These methods cannot change the lexical `this` behavior of arrow functions.


## `call`

```js
function greet(message) {
  console.log(message, this.name);
}

const user = { name: "Shoeb" };

greet.call(user, "Hello");
```

## `apply`

Arguments are passed as an array.

```js
greet.apply(user, ["Hello"]);
```

## `bind`

Returns a new function.

```js
const boundGreet = greet.bind(user);

boundGreet("Hello");
```

Use `bind` when passing methods as callbacks.

---

# 18. Objects

> ### Beginner explanation
>
> Objects group related data under named properties. Most business data naturally fits this model: an employee has an id and department; an invoice has a number, vendor, amount, and status.

```js
const invoice = {
  invoiceNo: "INV-1001",
  amount: 5000,
  status: "PENDING"
};
```

### Dot vs bracket notation

Use dot notation when the property name is known in code:

```js
invoice.amount;
```

Use bracket notation when the property name is dynamic or not a valid identifier:

```js
const field = "amount";
invoice[field];
```

### Missing properties

Reading a missing property normally returns `undefined`:

```js
invoice.poNumber; // undefined
```

That is why validation and optional chaining are common when processing external data.

### Important object-reference lesson

Passing an object to a function lets that function mutate the same object unless you deliberately avoid mutation.


🔥 Objects are fundamental to JavaScript.

```js
const invoice = {
  invoiceNo: "INV-001",
  vendor: "ABC Ltd",
  amount: 10000
};
```

## Access properties

```js
invoice.amount;
invoice["amount"];
```

Bracket notation supports dynamic keys:

```js
const field = "amount";
invoice[field];
```

## Computed properties

```js
const key = "invoiceNo";

const data = {
  [key]: "INV-100"
};
```

## Object methods

```js
Object.keys(invoice);
Object.values(invoice);
Object.entries(invoice);
Object.hasOwn(invoice, "amount");
```

## Transformation example

```js
const normalized = Object.fromEntries(
  Object.entries(invoice).map(([key, value]) => [
    key.toLowerCase(),
    value
  ])
);
```

---

# 19. Property Descriptors

> ### Beginner explanation
>
> Every object property has hidden configuration in addition to its visible value. These settings control whether the property can be changed, enumerated in loops/object methods, or reconfigured. Most application code never needs to edit descriptors directly, but understanding them explains behavior of built-in and library objects.

### Descriptor vocabulary

- `writable` — can the value be assigned again?
- `enumerable` — does it appear in operations such as `Object.keys()`?
- `configurable` — can the descriptor be changed or the property deleted?
- `get` / `set` — can property access be implemented through functions?

### When you may use this

- Library design.
- Creating read-only public properties.
- Understanding getters/setters.
- Framework internals and metaprogramming.

Do not use descriptors just to make ordinary business objects more complicated.


🧠 Advanced.

Properties have descriptors such as:

```text
value
writable
enumerable
configurable
```

Example:

```js
const user = {};

Object.defineProperty(user, "id", {
  value: 1001,
  writable: false,
  enumerable: true,
  configurable: false
});
```

Useful for libraries, framework internals, and controlled APIs.

---

# 20. Arrays

> ### Beginner explanation
>
> An array is an ordered collection. Each element has a numeric index beginning at `0`. Arrays are ideal when you have **many values of the same conceptual kind**, such as invoices, employees, line items, or API results.

```js
const invoices = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 }
];
```

`invoices[0]` is the first invoice.

### Method selection guide

| Goal | Method |
|---|---|
| Add/remove at end | `push` / `pop` |
| Add/remove at beginning | `unshift` / `shift` |
| Copy a portion | `slice` |
| Insert/remove in place | `splice` |
| Find one item | `find` |
| Find its index | `findIndex` |
| Check any match | `some` |
| Check all match | `every` |
| Transform all | `map` |
| Select some | `filter` |
| Combine into result | `reduce` |

### Most important question

Always ask whether the method **mutates the original array** or returns a new one. Accidental mutation is a frequent source of bugs.


🔥 Essential.

```js
const invoices = [
  { id: 1, amount: 100 },
  { id: 2, amount: 250 }
];
```

Important methods:

```js
push()
pop()
shift()
unshift()
slice()
splice()
concat()
includes()
indexOf()
find()
findIndex()
some()
every()
sort()
reverse()
flat()
flatMap()
```

## Mutating methods

Examples:

```text
push
pop
shift
unshift
splice
sort
reverse
```

## Non-mutating methods

Examples:

```text
slice
concat
map
filter
reduce
```

Modern JavaScript also has copy-oriented methods such as:

```js
toSorted()
toReversed()
toSpliced()
with()
```

when supported by your target environment.

---

# 21. Array Transformation Methods

> ### Beginner explanation
>
> `map`, `filter`, and `reduce` are common because business applications constantly transform collections. They are not “better than loops” in every situation; they are useful because each one expresses a specific intent clearly.

### One-sentence rule

```text
map    = same number of items, transformed values
filter = zero to same number of items, selected values
reduce = many items become one accumulated result
find   = first matching item
some   = does at least one match?
every  = do all match?
```

### Scenario: invoice dashboard

```js
const approved = invoices
  .filter(invoice => invoice.status === "APPROVED")
  .map(invoice => ({
    id: invoice.id,
    amount: invoice.amount
  }));

const approvedTotal = approved.reduce(
  (sum, invoice) => sum + invoice.amount,
  0
);
```

### Common beginner mistake with callbacks

```js
const totals = items.map(item => {
  item.amount * 1.18; // no return!
});
```

This produces `undefined` values. With braces, explicitly `return` the transformed result.


## `map`

Transform every item.

```js
const amounts = invoices.map(invoice => invoice.amount);
```

Scenario: add calculated tax.

```js
const invoicesWithTax = invoices.map(invoice => ({
  ...invoice,
  tax: invoice.amount * 0.18
}));
```

## `filter`

Keep matching elements.

```js
const pending = invoices.filter(
  invoice => invoice.status === "PENDING"
);
```

## `find`

Returns the first matching element.

```js
const invoice = invoices.find(
  invoice => invoice.id === 10
);
```

## `some`

```js
const hasRejected = invoices.some(
  invoice => invoice.status === "REJECTED"
);
```

## `every`

```js
const allApproved = invoices.every(
  invoice => invoice.status === "APPROVED"
);
```

## `reduce`

🔥 Powerful for aggregation.

```js
const total = invoices.reduce(
  (sum, invoice) => sum + invoice.amount,
  0
);
```

### Scenario: grouping

```js
const grouped = invoices.reduce((result, invoice) => {
  const status = invoice.status;

  result[status] ??= [];
  result[status].push(invoice);

  return result;
}, {});
```

### Scenario: lookup table

```js
const byId = employees.reduce((result, employee) => {
  result[employee.id] = employee;
  return result;
}, {});
```

---

# 22. Strings

> ### Beginner explanation
>
> Strings represent text. Even values that look numeric—invoice numbers, employee IDs, phone numbers, postal codes—may belong as strings when you do not perform arithmetic on them.

### Strings are immutable

A string method does not modify the original string:

```js
const value = " pending ";
const cleaned = value.trim().toUpperCase();

console.log(value);   // " pending "
console.log(cleaned); // "PENDING"
```

### Method reference

| Method | Meaning | Example use |
|---|---|---|
| `trim()` | Remove edge whitespace | Clean form/OCR text |
| `includes()` | Contains substring? | Search/filter |
| `startsWith()` | Begins with text? | Prefix validation |
| `slice()` | Extract portion | Get code segment |
| `split()` | Convert to array | CSV-like parsing/simple tokens |
| `replace()` | Replace match | Normalization |
| `toLowerCase()` | Lowercase copy | Case-insensitive comparison |

### Case-insensitive comparison

```js
const same = a.trim().toLowerCase() === b.trim().toLowerCase();
```


Important methods:

```js
trim()
trimStart()
trimEnd()
toLowerCase()
toUpperCase()
includes()
startsWith()
endsWith()
slice()
substring()
split()
replace()
replaceAll()
match()
```

## Template literals

```js
const message = `Invoice ${invoiceNo} is approved.`;
```

## Scenario: OCR normalization

```js
function normalizeText(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .toUpperCase();
}
```

---

# 23. Numbers, Precision, and Money

> ### Beginner explanation
>
> JavaScript has one ordinary `number` type for integers and decimal-looking numbers. Internally it uses binary floating-point, which is excellent for general calculation but cannot exactly represent every decimal fraction.

### Why `0.1 + 0.2` is surprising

The issue is similar to trying to represent `1/3` exactly in decimal: `0.333333...` never ends. Some base-10 decimals cannot be represented exactly in base 2, so tiny rounding differences appear.

### Money scenario

For ₹1,250.75 you can store minor units when appropriate:

```js
const amountInPaise = 125075;
```

Then perform integer arithmetic where possible.

### `NaN`

`NaN` means a numeric operation failed to produce a valid number.

```js
const amount = Number("abc");
Number.isNaN(amount); // true
```

Prefer `Number.isNaN` and `Number.isFinite` for validation rather than relying on coercing global helpers.


JavaScript uses floating-point numbers.

```js
0.1 + 0.2;
// 0.30000000000000004
```

## Money

Do not depend blindly on floating-point calculations for financial values.

Prefer integer minor units where appropriate:

```js
const amountInPaise = 105050; // ₹1,050.50
```

Then:

```js
const amount = amountInPaise / 100;
```

For serious financial systems, use a decimal arithmetic library or backend/database decimal types.

## Useful methods

```js
Number.isFinite()
Number.isInteger()
Number.isNaN()
parseInt()
parseFloat()
toFixed()
```

Important:

```js
(10.555).toFixed(2); // string result
```

---

# 24. Dates and Time

> ### Beginner explanation
>
> Dates are difficult because a “date” may mean a calendar day, a local wall-clock time, or an exact moment in global time. JavaScript's legacy `Date` object represents an instant while formatting/parsing can involve the local timezone.

### Three concepts to separate

```text
Calendar date     → 2026-08-12
Local time        → 6:30 PM in Mumbai
UTC instant       → a globally comparable timestamp
```

### Practical rules

- Use well-defined ISO formats for APIs.
- Store instants consistently, commonly in UTC.
- Include timezone requirements in business rules.
- Use `Intl.DateTimeFormat` for user-facing formatting.
- Avoid ambiguous strings such as `08/12/26` because different locales interpret them differently.

### Scenario

An invoice date may be a **calendar date** where timezone conversion should not accidentally move it to the previous/next date. A “created at” timestamp is an **instant** where timezone conversion for display is expected. Treat these as different requirements.


```js
const now = new Date();
```

Use ISO format when exchanging dates:

```text
2026-08-12T10:30:00.000Z
```

## Common problem

```js
new Date("2026-08-12");
```

Timezone interpretation can produce surprising results.

## Recommendation

- Store timestamps in UTC.
- Convert to local time for display.
- Avoid manually slicing date strings unless format is fully controlled.
- Understand locale/timezone requirements.

Example:

```js
const formatted = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(new Date());
```

---

# 25. Destructuring

> ### Beginner explanation
>
> Destructuring is shorthand for extracting values from an object or array into variables. It does not create a magical new data type; it simply makes common assignments more readable.

Without destructuring:

```js
const invoiceNo = invoice.invoiceNo;
const amount = invoice.amount;
```

With destructuring:

```js
const { invoiceNo, amount } = invoice;
```

### Why it helps

It is especially useful for function parameters and API responses because it makes the fields a function depends on obvious.

```js
function printInvoice({ invoiceNo, amount }) {
  console.log(invoiceNo, amount);
}
```

### Be careful with nested destructuring

Deep patterns can throw when an intermediate value is missing. Defaults or simpler explicit access are often easier to maintain.


## Object destructuring

```js
const employee = {
  id: 100,
  name: "Shoeb",
  role: "Developer"
};

const { id, name } = employee;
```

Alias:

```js
const { name: employeeName } = employee;
```

Default:

```js
const { active = true } = employee;
```

## Array destructuring

```js
const [first, second] = values;
```

Swap values:

```js
[a, b] = [b, a];
```

---

# 26. Spread and Rest

> ### Beginner explanation
>
> The `...` syntax has two opposite-looking roles. **Spread** expands a collection into another context. **Rest** collects remaining values into one array/object.

### Memory trick

```text
Spread = open / expand
Rest   = gather / collect the rest
```

### Spread scenario

Update one field without intentionally changing the original top-level object:

```js
const approvedInvoice = {
  ...invoice,
  status: "APPROVED"
};
```

### Rest scenario

Remove a field while collecting everything else:

```js
const { password, ...publicUser } = user;
```

### Critical limitation

Object and array spread make **shallow copies**. Nested objects remain shared references unless you clone them separately.


Same syntax:

```text
...
```

Different meaning depending on context.

## Spread

```js
const updated = {
  ...employee,
  active: false
};
```

Arrays:

```js
const merged = [...firstList, ...secondList];
```

## Rest

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

Object rest:

```js
const { password, ...safeUser } = user;
```

Useful when removing sensitive fields before returning data.

---

# 27. Optional Chaining and Nullish Coalescing

> ### Beginner explanation
>
> Optional chaining (`?.`) and nullish coalescing (`??`) help deal with **missing values** without long repetitive checks. They are related but solve different problems.

### Optional chaining = safe access

```js
const poNumber = invoice?.purchaseOrder?.number;
```

If `invoice` or `purchaseOrder` is `null`/`undefined`, the expression returns `undefined` instead of throwing during that access chain.

### Nullish coalescing = safe default

```js
const retryCount = config.retryCount ?? 3;
```

Only `null` and `undefined` trigger the fallback.

### Why `??` is often safer than `||`

```js
const retries = 0;

retries || 3; // 3 — zero was treated as falsy
retries ?? 3; // 0 — zero was preserved
```

Use these features to represent optional data, not to hide fields that are supposed to be mandatory.


## Optional chaining

```js
const city = employee?.address?.city;
```

Without it:

```js
const city =
  employee &&
  employee.address &&
  employee.address.city;
```

Do not use optional chaining to silently hide required-data bugs.

Bad:

```js
saveInvoice(invoice?.id);
```

when `invoice.id` is mandatory.

Better:

```js
if (!invoice?.id) {
  throw new Error("Invoice ID is required");
}
```

## Nullish coalescing

```js
const discount = providedDiscount ?? 0;
```

Difference:

```js
0 || 10; // 10
0 ?? 10; // 0
```

---

# 28. Sets, Maps, WeakSet, WeakMap

> ### Beginner explanation
>
> JavaScript gives you several collection types because different data structures solve different problems. Arrays are best for ordered lists; plain objects are convenient records; `Map` is designed for key-value collections; `Set` is designed for uniqueness.

### Quick decision guide

| Need | Choose |
|---|---|
| Ordered list | `Array` |
| Business record with named fields | Object |
| Key-value collection with arbitrary key types | `Map` |
| Unique values | `Set` |
| Object-associated metadata that should not keep objects alive | `WeakMap` |
| Weak collection of objects | `WeakSet` |

### Scenario: fast lookup

```js
const vendorById = new Map(
  vendors.map(vendor => [vendor.id, vendor])
);

const vendor = vendorById.get(invoice.vendorId);
```

This avoids repeatedly scanning the full vendor array for each invoice.


## Set

Unique values.

```js
const vendorIds = new Set([1, 2, 2, 3]);

console.log([...vendorIds]);
// [1, 2, 3]
```

Scenario: remove duplicates.

```js
const uniqueDepartments = [...new Set(
  employees.map(employee => employee.department)
)];
```

## Map

Key-value collection.

```js
const permissions = new Map();

permissions.set("ADMIN", ["read", "write"]);
permissions.set("USER", ["read"]);
```

Unlike plain objects, keys can be any value.

## WeakMap / WeakSet

🧠 Useful for associating metadata with objects without preventing garbage collection.

---

# 29. Symbols

> ### Beginner explanation
>
> A `Symbol` is a primitive value whose main feature is uniqueness. Even two symbols with the same description are different values.

```js
Symbol("id") === Symbol("id"); // false
```

### Why it exists

Symbols are useful when libraries or advanced code need property keys that are unlikely to collide with ordinary string property names. JavaScript also defines **well-known symbols** that let objects participate in language protocols such as iteration.

### Should a beginner use it often?

No. Learn enough to recognize symbols and understand `Symbol.iterator`. Ordinary application data usually uses normal string property names.


🧠 Advanced.

Symbols create unique property keys.

```js
const internalId = Symbol("id");

const user = {
  [internalId]: 123
};
```

Well-known symbols influence language behavior, such as:

```js
Symbol.iterator
```

---

# 30. Iterables and Iterators

> ### Beginner explanation
>
> Iteration is the general idea of producing one value at a time from a collection. An **iterable** is a value that knows how to create an iterator; an **iterator** is an object whose `next()` method produces successive results.

This is why the same syntax works with different collection types:

```js
for (const value of [1, 2, 3]) {}
for (const char of "ABC") {}
for (const value of new Set([1, 2, 3])) {}
```

Each implements the iterable protocol.

### Why learn this?

You rarely build custom iterators in everyday CRUD applications, but the concept explains `for...of`, spread syntax, generators, Maps/Sets, and many APIs that consume iterables.


An iterable can be consumed with:

```js
for...of
```

Examples:

- Arrays
- Strings
- Maps
- Sets

Iterator protocol:

```js
{
  next() {
    return {
      value: ...,
      done: ...
    };
  }
}
```

Custom iterable:

```js
const range = {
  start: 1,
  end: 3,

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current <= end) {
          return {
            value: current++,
            done: false
          };
        }

        return {
          done: true
        };
      }
    };
  }
};

for (const value of range) {
  console.log(value);
}
```

---

# 31. Generators

> ### Beginner explanation
>
> A generator is a function that can **pause and resume**. A normal function runs until it returns or throws. A generator can `yield` a value, pause its state, and continue later when `next()` is called.

```js
function* ids() {
  yield 1;
  yield 2;
  yield 3;
}
```

### Mental model

```text
next() → run until yield 1 → pause
next() → continue until yield 2 → pause
next() → continue until yield 3 → pause
next() → finish
```

### Where useful

- Lazy sequences.
- Large/generated data streams.
- Custom iterables.
- State-machine-like flows.

They are an advanced tool; do not replace simple array operations with generators just because they look sophisticated.


Generators simplify iterator creation.

```js
function* range(start, end) {
  for (let value = start; value <= end; value++) {
    yield value;
  }
}
```

Usage:

```js
for (const value of range(1, 5)) {
  console.log(value);
}
```

Generators are useful for:

- Lazy sequences
- Custom iteration
- Controlled execution
- Large sequence generation

---

# 32. Prototypes and Prototype Chain

> ### Beginner explanation
>
> JavaScript uses **prototype-based inheritance**. When you access a property that is not directly on an object, JavaScript can search another object linked as its prototype, then that object's prototype, and so on until `null`.

### Why arrays have methods

```js
const items = [];
items.map(...);
```

You did not define `map` on this particular array. The method is available through the array's prototype chain.

### Simplified lookup

```text
items
 ↓ property not found
Array.prototype
 ↓ property not found
Object.prototype
 ↓
null
```

### Why this matters

Understanding prototypes explains:

- Classes.
- Method sharing.
- `instanceof`.
- Inheritance.
- Why modifying built-in prototypes is dangerous.

Avoid adding custom methods to built-in prototypes in shared production code because names can collide with other code or future language features.


🔥 Important for deep JavaScript understanding.

Objects may inherit behavior from other objects.

```js
const animal = {
  speak() {
    console.log("sound");
  }
};

const dog = Object.create(animal);

dog.speak();
```

Lookup concept:

```text
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

Constructor function example:

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user = new User("Shoeb");
```

---

# 33. Classes

> ### Beginner explanation
>
> `class` provides a familiar syntax for creating objects that share behavior. JavaScript classes are built on top of the prototype system; they do not replace it with a completely different object model.

### What a class gives you

- A constructor for initial state.
- Instance methods shared through the prototype.
- Inheritance syntax with `extends`.
- Private fields with `#`.
- Static behavior attached to the class itself.

### Instance vs static

```js
const employee = new Employee("A", 1000);
employee.getAnnualSalary(); // instance behavior

InvoiceValidator.isValid(invoice); // static behavior
```

### When to use classes

Classes work well when your domain contains objects with meaningful identity/state and shared behavior. For simple data transformation, plain objects and functions are often simpler.


Classes provide cleaner syntax over prototypes.

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}
```

## Inheritance

```js
class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }
}
```

## Private fields

```js
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

## Static method

```js
class InvoiceValidator {
  static isValid(invoice) {
    return Boolean(invoice?.invoiceNo);
  }
}
```

---

# 34. Composition vs Inheritance

> ### Beginner explanation
>
> Inheritance reuses behavior through an “is-a” relationship. Composition builds behavior by combining smaller pieces through “has-a” relationships. Both are valid, but composition often creates fewer dependencies between unrelated responsibilities.

### Inheritance example

```text
Manager IS-A Employee
```

### Composition example

```text
InvoiceService HAS-A Validator
InvoiceService HAS-A Repository
InvoiceService HAS-A Logger
```

### Why composition is easier to test

You can pass fake dependencies:

```js
const service = createInvoiceService({
  validator: fakeValidator,
  repository: fakeRepository,
  logger: fakeLogger
});
```

The service does not need to create or know implementation details of those dependencies itself.


Inheritance:

```text
Manager IS-A Employee
```

Composition:

```text
Order HAS-A Validator
Order HAS-A Logger
Order HAS-A PaymentProcessor
```

Composition example:

```js
function createInvoiceService({
  validator,
  repository,
  logger
}) {
  return {
    async save(invoice) {
      validator.validate(invoice);
      await repository.save(invoice);
      logger.info("Invoice saved");
    }
  };
}
```

Composition usually creates more flexible, testable systems.

---

# 35. Error Handling

> ### Beginner explanation
>
> Errors represent situations where normal execution cannot continue as expected. Good error handling does **not** mean wrapping everything in `try...catch`. It means deciding where an error should be detected, where context should be added, and where it can be meaningfully handled.

### Three categories to think about

1. **Validation errors** — bad user/business input.
2. **Operational errors** — network unavailable, API failure, permission denied.
3. **Programming errors** — bugs such as accessing a property of `undefined`.

### Handle where recovery is possible

```js
try {
  await saveInvoice(invoice);
  showSuccess();
} catch (error) {
  showError("Could not save invoice. Please retry.");
  console.error(error);
}
```

The UI converts a technical failure into a useful user action while logs retain diagnostic detail.

### Avoid empty catches

```js
try {
  riskyOperation();
} catch (error) {
  // ignored — usually dangerous
}
```


## `try...catch`

```js
try {
  processInvoice(invoice);
} catch (error) {
  console.error(error);
}
```

## `finally`

```js
try {
  await uploadFile();
} finally {
  hideLoader();
}
```

## Throw custom errors

```js
function validateAmount(amount) {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }
}
```

## Custom error class

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
```

Production advice:

- Throw errors when an operation cannot continue.
- Do not silently swallow errors.
- Add useful context.
- Never expose sensitive internal details to users.

---

# 36. Synchronous vs Asynchronous JavaScript

> ### Beginner explanation
>
> Synchronous code finishes one operation before the next statement continues. Asynchronous APIs allow your program to start an operation whose result will become available later, letting the browser continue processing user interaction and other work.

### Important correction

`async` does not automatically mean “run on another CPU thread.” JavaScript can coordinate non-blocking work while the browser/runtime handles operations outside the current call stack.

### Example

```js
console.log("before");

fetch("/api/invoices")
  .then(() => console.log("response ready"));

console.log("after");
```

The request is initiated, then synchronous execution continues. The callback runs later after the result is ready and scheduling rules allow it.

This model is essential before learning promises and `async`/`await`.


Synchronous:

```js
const a = calculate();
const b = transform(a);
save(b);
```

Each step waits for the previous one.

Asynchronous:

```js
const response = await fetch("/api/invoices");
```

The browser can continue handling other work while waiting for network completion.

Common async operations:

- HTTP requests
- Timers
- User interaction
- File reading
- IndexedDB
- Some browser APIs

---

# 37. Callbacks

> ### Beginner explanation
>
> A callback is simply a function given to other code so that other code can call it at the appropriate time. Callbacks are used for both **synchronous** operations (`map`) and **asynchronous/event-driven** operations (`addEventListener`).

Synchronous callback:

```js
const names = users.map(user => user.name);
```

Event callback:

```js
button.addEventListener("click", () => {
  console.log("clicked later");
});
```

### Why callbacks matter

They let behavior be configurable. `map` does not know how *you* want to transform an item; you provide that behavior as a callback.

### Callback hell

The problem is not callbacks themselves. The problem is deeply nested asynchronous control flow where error handling and sequencing become hard to follow. Promises give that workflow a composable abstraction.


```js
function loadData(callback) {
  setTimeout(() => {
    callback({ id: 1 });
  }, 100);
}
```

Usage:

```js
loadData(data => {
  console.log(data);
});
```

Nested callbacks can become difficult to maintain:

```js
login(user => {
  getPermissions(user, permissions => {
    loadDashboard(permissions, dashboard => {
      render(dashboard);
    });
  });
});
```

Promises solve this more cleanly.

---

# 38. Promises

> ### Beginner explanation
>
> A Promise is an object representing an asynchronous result that may be available now, later, or never if the operation fails. Instead of handing a callback directly to every nested operation, promises let you build a chain of success and failure handling.

### Promise lifecycle

```text
          fulfilled → value
pending ─┤
          rejected  → reason/error
```

A promise settles only once.

### Think “eventual value”

```js
const invoicePromise = fetchInvoice(1001);
```

`invoicePromise` is not the invoice itself. It is a promise **for** the future invoice result.

### Important behavior

Returning a value from `.then()` feeds the next step. Returning a promise makes the chain wait for it. Throwing makes the chain reject.

This is the foundation of `async`/`await`, which provides more readable syntax over promises.


A Promise represents a future result.

States:

```text
pending
fulfilled
rejected
```

Example:

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("done");
  } else {
    reject(new Error("failed"));
  }
});
```

Consume:

```js
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("finished");
  });
```

---

# 39. `async` / `await`

> ### Beginner explanation
>
> `async`/`await` lets promise-based code read more like ordinary sequential code. An `async` function always returns a promise. `await` pauses **that async function's continuation** until the awaited promise settles; it does not freeze the entire browser.

### Example mental model

```js
async function load() {
  const response = await fetch("/api/data");
  return response.json();
}
```

Read it as:

```text
Start request
Suspend the remaining part of load()
Let other work continue
Resume load() when response is ready
```

### Common performance mistake

Do not serialize independent work unnecessarily:

```js
const users = await getUsers();
const roles = await getRoles();
```

If neither depends on the other, start them together with `Promise.all()`.


🔥 Recommended for most async control flow.

```js
async function getInvoices() {
  const response = await fetch("/api/invoices");

  if (!response.ok) {
    throw new Error("Unable to load invoices");
  }

  return response.json();
}
```

## Error handling

```js
async function loadInvoices() {
  try {
    const invoices = await getInvoices();
    renderInvoices(invoices);
  } catch (error) {
    showError(error.message);
  }
}
```

## Sequential vs concurrent

Sequential:

```js
const users = await getUsers();
const roles = await getRoles();
```

Concurrent:

```js
const [users, roles] = await Promise.all([
  getUsers(),
  getRoles()
]);
```

Use concurrency when operations do not depend on each other.

---

# 40. Promise Utilities

> ### Beginner explanation
>
> Promise utility methods coordinate **multiple promises**. Choosing the correct utility depends on the business rule: do all operations need to succeed, do you want every outcome, or is one successful result enough?

| Utility | Meaning | Example scenario |
|---|---|---|
| `Promise.all` | Fail if any input rejects | Dashboard needs users + roles + departments |
| `Promise.allSettled` | Wait for all outcomes | Bulk sync where partial failure is acceptable |
| `Promise.race` | First settled result wins | Race operation against timeout |
| `Promise.any` | First fulfilled result wins | Try equivalent data sources |

### Important detail

These utilities coordinate promises; they do not magically make CPU-heavy JavaScript run in parallel on the same thread. Their biggest benefit is controlling concurrent asynchronous operations clearly.


## `Promise.all`

All must succeed.

```js
const [users, departments] = await Promise.all([
  fetchUsers(),
  fetchDepartments()
]);
```

Use when all results are required.

## `Promise.allSettled`

Collect every result even if some fail.

```js
const results = await Promise.allSettled([
  syncInvoices(),
  syncEmployees(),
  syncVendors()
]);
```

Useful for bulk operations.

## `Promise.race`

Returns the first settled promise.

Useful for timeout patterns.

## `Promise.any`

Returns the first successfully fulfilled promise.

Useful when multiple equivalent sources are available.

---

# 41. Event Loop

> ### Beginner explanation
>
> The event loop explains how JavaScript can react to timers, promises, network results, and user events even though normal JavaScript execution on the browser's main thread uses one call stack at a time.

### Simplified sequence

1. Run the current synchronous JavaScript until the call stack is empty.
2. Process queued microtasks, such as promise reactions.
3. The browser may render.
4. Take another task such as a timer/event callback.
5. Repeat.

### Why this matters

It explains output-order questions, but more importantly it explains real bugs:

- UI freezes caused by long synchronous work.
- Promise callbacks running before timer callbacks.
- Race conditions between network requests.
- Why `setTimeout(fn, 0)` is not immediate.

### Rule

Never memorize only “promise before timeout.” Learn the queue model so you can reason about more complex cases.


🔥 Must understand.

Simplified browser model:

```text
Call Stack
    │
    ├───────────────┐
    │               │
    ▼               ▼
Web APIs        Promise jobs
    │               │
    ▼               ▼
Task Queue   Microtask Queue
    │               │
    └─────── Event Loop
```

Example:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Why?

1. Synchronous code runs first.
2. Promise handlers enter the microtask queue.
3. Timers enter a task/macrotask queue.
4. Microtasks are processed before the next task.

---

# 42. Timers

> ### Beginner explanation
>
> Timers schedule a callback to become eligible after a delay. They do not guarantee exact execution time because the callback still has to wait until JavaScript can process the corresponding task.

### `setTimeout`

One scheduled execution:

```js
const id = setTimeout(saveDraft, 1000);
clearTimeout(id);
```

### `setInterval`

Repeated scheduling:

```js
const id = setInterval(refreshStatus, 5000);
clearInterval(id);
```

### Production concerns

- Clear timers when a feature is destroyed/no longer needed.
- Do not use intervals for precise clocks.
- Prevent overlapping async interval work if one run may take longer than the interval.
- Prefer recursive timeout scheduling when you need to wait until the previous async run finishes.


```js
setTimeout()
setInterval()
clearTimeout()
clearInterval()
```

Example:

```js
const timerId = setTimeout(() => {
  console.log("Executed later");
}, 1000);

clearTimeout(timerId);
```

Avoid relying on exact timing.

```js
setTimeout(fn, 0);
```

means "run after current execution and queued higher-priority work", not "run immediately".

---

# 43. Modules

> ### Beginner explanation
>
> Modules let you split a program into files with explicit boundaries. A module can export selected values and import values exported by other modules. This prevents one giant script from becoming an unstructured collection of globals.

### Example structure

```text
invoice/
├── invoice-api.js
├── invoice-validator.js
├── invoice-calculator.js
└── invoice-page.js
```

`invoice-page.js` can import only what it needs.

### Benefits

- Names stay scoped to modules.
- Dependencies become visible.
- Functions are easier to test.
- Files can focus on one responsibility.
- Browser-native ES modules support deferred/module-aware loading behavior.

### Beginner advice

Do not create a separate file for every two-line function. Split by responsibility and cohesion, not by arbitrary line count.


## Named export

```js
export function calculateTax(amount) {
  return amount * 0.18;
}
```

Import:

```js
import { calculateTax } from "./tax.js";
```

## Default export

```js
export default class InvoiceService {}
```

Import:

```js
import InvoiceService from "./InvoiceService.js";
```

## Dynamic import

```js
const module = await import("./heavy-feature.js");
```

Useful for lazy loading.

Benefits:

- Encapsulation
- Reusability
- Clear dependency graph
- Smaller modules
- Easier testing

---

# 44. DOM Fundamentals

> ### Beginner explanation
>
> The DOM (Document Object Model) is the browser's object representation of the HTML document. JavaScript does not directly “edit HTML text” every time you change the page; it usually works with DOM objects representing elements.

HTML:

```html
<p id="status">Pending</p>
```

JavaScript finds the corresponding element object:

```js
const statusElement = document.querySelector("#status");
```

Then changes it:

```js
statusElement.textContent = "Approved";
```

### Why selectors matter

- `#id` selects by unique id.
- `.class` selects by class.
- `[data-id="1"]` selects by attribute.
- `form input[name="amount"]` can select by structure.

Prefer stable selectors intended for scripting, often IDs or `data-*` attributes, instead of fragile visual CSS structure.


The DOM represents HTML as objects.

HTML:

```html
<div id="message">Hello</div>
```

JavaScript:

```js
const message = document.getElementById("message");
```

Other selectors:

```js
document.querySelector(".item");
document.querySelectorAll(".item");
```

Prefer `querySelector` / `querySelectorAll` for flexible CSS selectors.

---

# 45. DOM Manipulation

> ### Beginner explanation
>
> DOM manipulation means creating, changing, moving, or removing elements. The key skill is keeping **data logic separate from rendering logic** so your code does not become a mix of calculations and scattered DOM updates.

### Safe text vs HTML

```js
element.textContent = userProvidedText;
```

Use `textContent` when you want text. `innerHTML` parses HTML and becomes dangerous with untrusted input unless you apply a robust sanitization strategy.

### Rendering example

```js
function createInvoiceRow(invoice) {
  const row = document.createElement("tr");

  const numberCell = document.createElement("td");
  numberCell.textContent = invoice.invoiceNo;

  const amountCell = document.createElement("td");
  amountCell.textContent = String(invoice.amount);

  row.append(numberCell, amountCell);
  return row;
}
```

This function has one clear job: convert invoice data into a DOM row.


## Create element

```js
const row = document.createElement("tr");
```

## Set text

```js
row.textContent = "Invoice";
```

Prefer `textContent` when inserting plain text.

## Add class

```js
row.classList.add("active");
```

## Remove class

```js
row.classList.remove("active");
```

## Toggle

```js
row.classList.toggle("selected");
```

## Attributes

```js
button.setAttribute("aria-label", "Save invoice");
```

## Dataset

HTML:

```html
<button data-invoice-id="1001">Open</button>
```

JavaScript:

```js
button.dataset.invoiceId;
```

---

# 46. Events

> ### Beginner explanation
>
> Events are notifications that something happened: the user clicked, typed, submitted a form, pressed a key, the document loaded, and so on. You register a function called an **event listener/handler** to respond.

```js
button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Clicked", event.currentTarget);
}
```

### `target` vs `currentTarget`

- `event.target` — the deepest element where the event originated.
- `event.currentTarget` — the element whose listener is currently running.

This difference becomes important with nested HTML and event delegation.

### Cleanup

When you add long-lived listeners to objects that outlive a screen/component, remember that removing them may be necessary to prevent unexpected behavior and retained references.


```js
button.addEventListener("click", event => {
  console.log(event.target);
});
```

Common events:

```text
click
input
change
submit
keydown
keyup
focus
blur
DOMContentLoaded
load
```

## Prevent form submission

```js
form.addEventListener("submit", event => {
  event.preventDefault();
});
```

---

# 47. Event Bubbling, Capturing, and Delegation

> ### Beginner explanation
>
> Browser events usually travel through the DOM tree. Understanding that journey lets you intentionally intercept events and use **event delegation**, one of the most useful Vanilla JavaScript patterns.

### Event phases

```text
window/document
      ↓ capturing
ancestor
      ↓
target
      ↑ bubbling
ancestor
      ↑
document/window
```

Most event listeners are used in the bubbling phase by default.

### Why delegation is powerful

Imagine a table with 1,000 invoice rows and dynamically added rows. Instead of one listener per delete button, attach one listener to the table and inspect the clicked element using `closest()`.

### `stopPropagation()` warning

Do not stop propagation automatically. It can break other code that legitimately relies on bubbling. Use it only when the event truly should not continue.


## Bubbling

Most events travel from the target upward.

```text
button
 ↓
div
 ↓
body
 ↓
document
```

## Delegation

Instead of attaching 1,000 listeners:

```js
rows.forEach(row => {
  row.addEventListener("click", handler);
});
```

attach one listener:

```js
table.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");

  if (!button) return;

  const action = button.dataset.action;

  if (action === "delete") {
    deleteInvoice(button.dataset.id);
  }
});
```

Benefits:

- Fewer listeners
- Handles dynamically created elements
- Cleaner code

---

# 48. Forms and Validation

> ### Beginner explanation
>
> Forms collect user input. Validation checks whether that input is complete, correctly formatted, and valid according to business rules before you continue.

### Three validation layers

```text
HTML constraints       → quick user feedback
JavaScript validation  → richer client-side behavior
Server validation      → authoritative security/business enforcement
```

Never skip server validation because browser code can be modified or bypassed.

### Use `FormData`

```js
const formData = new FormData(form);
const invoiceNo = formData.get("invoiceNo");
```

### Validation principle

Separate **normalization** from **validation** where practical:

```js
const normalizedInvoiceNo = invoiceNo.trim().toUpperCase();
```

Then validate the normalized value against explicit rules.


HTML validation helps, but business validation should also exist in JavaScript and backend layers.

```js
function validateInvoice(formData) {
  const errors = {};

  if (!formData.invoiceNo?.trim()) {
    errors.invoiceNo = "Invoice number is required";
  }

  if (!Number.isFinite(formData.amount) || formData.amount <= 0) {
    errors.amount = "Amount must be positive";
  }

  return errors;
}
```

Never rely solely on client-side validation for security.

---

# 49. Fetch API

> ### Beginner explanation
>
> `fetch()` is the browser's promise-based API for HTTP requests. It lets your page communicate with servers without navigating to a new page.

### Request/response mental model

```text
Browser JavaScript
      ↓ HTTP request
Server/API
      ↓ HTTP response
fetch Promise
      ↓
Read status/headers/body
```

### Important beginner facts

- `fetch()` returns a Promise.
- A `404` or `500` normally still produces a `Response`; it does not automatically reject because the network transport succeeded.
- The body is read separately using methods such as `.json()`, `.text()`, or `.blob()`.
- A response body can generally only be consumed once unless cloned appropriately.

### Request design

Create a small request wrapper when your application needs consistent base URLs, error handling, headers, JSON parsing, and authentication behavior. Avoid copying the same fetch/error code across every page.


🔥 Essential for browser applications.

## GET

```js
const response = await fetch("/api/invoices");

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

const data = await response.json();
```

Important:

`fetch()` does **not** reject just because the server returns `404` or `500`.

Always check:

```js
response.ok
```

## POST

```js
const response = await fetch("/api/invoices", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(invoice)
});
```

## Reusable wrapper

```js
async function request(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Request failed: ${response.status} ${errorBody}`
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
```

---

# 50. AbortController

> ### Beginner explanation
>
> `AbortController` gives cooperating APIs, especially `fetch`, a standard cancellation signal. Cancellation is important whenever an older operation becomes irrelevant.

### Search race example

The user types:

```text
"i"
"in"
"inv"
"invo"
```

Four requests may start. The oldest request might finish last and incorrectly overwrite the newest results. Aborting the previous request reduces wasted work and helps prevent stale UI updates.

### Important detail

Aborting a fetch causes its promise to reject. Your error handling should distinguish intentional cancellation from a genuine failure when necessary.

This tool is also useful for grouping cancellation of multiple operations that share one signal.


Useful for cancelling requests.

```js
const controller = new AbortController();

fetch("/api/search?q=invoice", {
  signal: controller.signal
});

controller.abort();
```

Scenario: search autocomplete.

```js
let currentController;

async function search(query) {
  currentController?.abort();

  currentController = new AbortController();

  const response = await fetch(
    `/api/search?q=${encodeURIComponent(query)}`,
    {
      signal: currentController.signal
    }
  );

  return response.json();
}
```

This prevents outdated searches from winning a race.

---

# 51. JSON

> ### Beginner explanation
>
> JSON is a **text data format**, not a JavaScript object. JavaScript objects and JSON often look similar, but converting between them is explicit.

```js
const object = { id: 1 };
const jsonText = JSON.stringify(object);
const parsedObject = JSON.parse(jsonText);
```

### Why APIs use JSON

Text can be transported between systems written in different languages. A PHP, Java, .NET, Python, or JavaScript service can all exchange the same JSON structure.

### Common mistakes

- Trying to access properties on JSON text before parsing it.
- Calling `JSON.parse()` on an object that is already parsed.
- Expecting functions/`undefined`/Map/Set to survive normal JSON serialization unchanged.
- Assuming JSON parsing validates business rules. It only validates JSON syntax; your application must validate the resulting data shape.


Convert object to JSON:

```js
const json = JSON.stringify(invoice);
```

Parse JSON:

```js
const invoice = JSON.parse(json);
```

JSON supports:

```text
objects
arrays
strings
numbers
booleans
null
```

It does not directly support:

```text
undefined
functions
symbols
BigInt
Map
Set
Date semantics
```

Dates become strings.

---

# 52. Web Storage

> ### Beginner explanation
>
> Web Storage gives browser JavaScript a simple key-value store. Both `localStorage` and `sessionStorage` store **strings**, so objects normally require JSON serialization.

### Difference

- `localStorage` persists beyond a page reload and usually beyond closing/reopening the browser until removed.
- `sessionStorage` is scoped more closely to a tab/session lifecycle.

### Good uses

- UI preference such as theme.
- Non-sensitive filter preferences.
- Draft data when appropriate.

### Poor uses

- Secrets.
- Large databases.
- Data requiring reliable multi-user/server consistency.

Storage APIs are synchronous, so avoid using them as a high-volume data engine.


## localStorage

Persists until cleared.

```js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
```

Objects require JSON:

```js
localStorage.setItem(
  "preferences",
  JSON.stringify(preferences)
);
```

## sessionStorage

Usually lasts for the browser tab/session.

Do not store highly sensitive data casually in web storage.

---

# 53. Cookies

> ### Beginner explanation
>
> A cookie is a small piece of browser-stored data associated with a website. Unlike `localStorage`, cookies can automatically accompany matching HTTP requests, which makes them important for server-managed sessions.

### Security attributes matter

- `HttpOnly` prevents JavaScript from reading the cookie.
- `Secure` limits transmission to HTTPS.
- `SameSite` helps control cross-site sending behavior.
- `Path`/`Domain` define where the cookie applies.

### Authentication insight

For session authentication, a secure `HttpOnly` cookie can be useful because application JavaScript never needs to directly read the session secret. However, cookie-based authentication also requires correct CSRF defenses and server configuration.

Do not build authentication solely by copying tokens into random browser storage without understanding the threat model.


Cookies are commonly involved in browser/server authentication.

Important properties:

```text
HttpOnly
Secure
SameSite
Expires
Max-Age
Path
Domain
```

JavaScript cannot read `HttpOnly` cookies.

This is often desirable for authentication cookies because it reduces token theft through XSS.

---

# 54. URL and History APIs

> ### Beginner explanation
>
> The `URL` API safely parses and builds URLs. The History API lets a page change the browser's visible URL/history without a full page navigation when building client-side navigation.

### Why use `URLSearchParams`

Do not manually concatenate untrusted query strings:

```js
const url = new URL("/invoices", location.origin);
url.searchParams.set("vendor", vendorName);
```

The API handles encoding correctly.

### History scenario

A filter page can update:

```text
/invoices?status=pending
```

so users can bookmark/share the current state. When using `pushState`, you must also handle back/forward navigation (`popstate`) if you are implementing routing behavior.


## URL

```js
const url = new URL(window.location.href);

url.searchParams.get("invoiceId");
```

Create query params:

```js
const url = new URL("/invoices", window.location.origin);

url.searchParams.set("status", "pending");
```

## History

```js
history.pushState(
  { page: "invoice" },
  "",
  "/invoice/1001"
);
```

Useful for client-side navigation.

---

# 55. File and Blob APIs

> ### Beginner explanation
>
> Browser file APIs let users select local files and let JavaScript inspect/read those files after the user grants access through the page. A `Blob` represents binary/text data with an optional MIME type; a `File` is a specialized Blob with file metadata such as name.

### Typical invoice/OCR flow

```text
<input type="file">
       ↓
File object
       ↓
Validate size/type
       ↓
Preview or send using FormData
       ↓
Receive extracted JSON
```

### Important safety rule

Do not trust `file.type` or filename alone for security. Client-side checks improve UX, but the server must independently verify uploads.

When creating object URLs with `URL.createObjectURL`, revoke them after use so resources can be released.


Read user-selected file:

```js
const file = input.files[0];

console.log(file.name);
console.log(file.type);
console.log(file.size);
```

Read text:

```js
const text = await file.text();
```

Create Blob:

```js
const blob = new Blob(
  [JSON.stringify(data, null, 2)],
  {
    type: "application/json"
  }
);
```

Create downloadable object URL:

```js
const url = URL.createObjectURL(blob);

// later
URL.revokeObjectURL(url);
```

Scenario:

- Invoice upload
- JSON export
- CSV generation
- Client-side preview

---

# 56. Clipboard API

> ### Beginner explanation
>
> The Clipboard API allows a page, under browser security and permission rules, to read from or write to the user's clipboard. Writing is useful for “Copy invoice number”, “Copy JSON”, or “Copy link” features.

### Example with feedback

```js
async function copyInvoiceNo(invoiceNo) {
  try {
    await navigator.clipboard.writeText(invoiceNo);
    showMessage("Copied");
  } catch (error) {
    showMessage("Copy failed");
  }
}
```

Clipboard access may require HTTPS, user interaction, or permission depending on the operation/browser. Always provide a visible success/failure response instead of assuming the operation worked.


```js
await navigator.clipboard.writeText(
  JSON.stringify(data, null, 2)
);
```

Useful for:

- Copy JSON
- Copy invoice number
- Copy generated IDs
- Developer/debugging tools

Permissions and secure-context requirements may apply.

---

# 57. Observers

> ### Beginner explanation
>
> Observer APIs let the browser notify your code about specific changes instead of your code repeatedly polling and checking. This is often more efficient and expressive.

### `IntersectionObserver`

Answers questions such as: “Has this element entered the viewport?”

Use for:

- Lazy loading.
- Infinite scrolling triggers.
- Visibility analytics.

### `MutationObserver`

Answers: “Did the DOM structure/attributes/text change?”

Use when you truly need to react to DOM modifications made by other code. If you control the change yourself, calling your own update logic directly is often simpler than observing your own DOM mutations.

Disconnect observers when no longer needed.


## IntersectionObserver

Useful for:

- Lazy loading
- Infinite scrolling
- Visibility tracking

```js
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("Visible");
    }
  }
});
```

## MutationObserver

Useful for observing DOM changes.

```js
const observer = new MutationObserver(mutations => {
  console.log(mutations);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
```

Use sparingly; unnecessary observation can create performance problems.

---

# 58. Web Workers

> ### Beginner explanation
>
> Browser UI code runs mainly on the main thread. A long CPU-heavy loop can prevent painting and input handling. Web Workers provide another JavaScript execution context for CPU-intensive tasks so the main UI thread can remain responsive.

### Communication model

Workers do not share ordinary variables with your page. They communicate through messages:

```text
Main thread --postMessage--> Worker
Main thread <--message------ Worker
```

Values are transferred or structured-cloned according to the API.

### Good worker tasks

- Large parsing/transformation.
- Image processing.
- Data analysis.
- CPU-heavy calculations.

### Not useful for

Simple DOM updates. Workers cannot directly access the page DOM; send the result back and update DOM on the main thread.


Web Workers allow JavaScript to perform CPU-heavy work away from the main UI thread.

Main thread:

```js
const worker = new Worker("./worker.js");

worker.postMessage({
  numbers: largeArray
});

worker.onmessage = event => {
  console.log(event.data);
};
```

Useful for:

- Large calculations
- Parsing
- Image processing
- OCR-related preprocessing
- Complex data transformations

Workers cannot directly manipulate the DOM.

---

# 59. Regular Expressions

> ### Beginner explanation
>
> A regular expression (regex) describes a text pattern. It is useful when a requirement is naturally about **text shape**: digits, prefixes, optional separators, repeated whitespace, known identifiers, and so on.

### Learn regex incrementally

Instead of starting with a giant pattern, compose your understanding:

```text
\d       one digit
\d+      one or more digits
^\d+$    the entire string must be digits
```

### Scenario

```js
const invoicePattern = /^INV-\d{4,}$/;
```

This says:

```text
^       beginning
INV-    literal prefix
\d{4,} at least four digits
$       end
```

### Warning

Regex is not a replacement for a real parser or business validation model. A syntactically valid email/invoice number may still be invalid in your system.


Useful tokens:

```text
^ beginning
$ end
. any character
* zero or more
+ one or more
? optional
[] character class
() capture group
{} count
| OR
\d digit
\w word character
\s whitespace
```

Example invoice number:

```js
const pattern = /^INV-\d{4,}$/;

pattern.test("INV-1001");
```

Extract numbers:

```js
const value = "Invoice Total: 12,450.50";

const match = value.match(/[\d,]+(?:\.\d+)?/);

const amount = Number(
  match[0].replaceAll(",", "")
);
```

Do not use regex to parse complex languages such as full HTML or arbitrarily complex invoice layouts.

---

# 60. Functional Programming Concepts

> ### Beginner explanation
>
> Functional programming is a style where you build behavior from functions, favor explicit inputs/outputs, and often avoid unnecessary mutation. JavaScript supports this style naturally, but you do not need to make every program “purely functional”.

### Core idea

Prefer code where data flow is easy to see:

```js
const total = invoices
  .filter(isApproved)
  .map(getAmount)
  .reduce(sum, 0);
```

instead of code where hidden global state is changed in many places.

### Why this helps

- Easier unit testing.
- Easier reasoning.
- Reusable transformation functions.
- Fewer accidental side effects.

Use functional techniques pragmatically alongside objects/classes when they make the design clearer.


JavaScript supports functional programming strongly because functions are first-class values.

Important ideas:

```text
Pure functions
Immutability
Higher-order functions
Function composition
Currying
Partial application
Declarative transformations
```

Example pipeline:

```js
const activeEmployeeNames = employees
  .filter(employee => employee.active)
  .map(employee => employee.name)
  .sort();
```

---

# 61. Pure Functions and Immutability

> ### Beginner explanation
>
> A pure function depends only on its inputs and does not change observable state outside itself. Immutability means treating existing values as unchanged and producing new values for updates.

### Pure example

```js
function addTax(amount, rate) {
  return amount + amount * rate;
}
```

### Side-effect example

```js
function approveInvoice(invoice) {
  invoice.status = "APPROVED"; // mutates caller-owned object
}
```

Mutation is not automatically evil, but hidden/shared mutation makes debugging harder. If several parts of the app share the same object, one function may change data another function was not expecting to change.

### Pragmatic rule

Use immutable updates at module/state boundaries where predictability matters. Do not clone large structures blindly without considering cost.


Pure function:

```js
function calculateTax(amount, rate) {
  return amount * rate;
}
```

Same input → same output.

No hidden side effects.

Impure:

```js
let taxRate = 0.18;

function calculate(amount) {
  console.log("Calculating");
  return amount * taxRate;
}
```

## Immutable update

Instead of:

```js
employee.active = false;
```

use when immutability is desired:

```js
const updatedEmployee = {
  ...employee,
  active: false
};
```

Immutability improves predictability but excessive copying may have performance costs.

---

# 62. Currying and Partial Application

> ### Beginner explanation
>
> Currying and partial application create specialized functions from more general ones. They are useful concepts for function composition, but they are not required in every application.

### Partial application in plain English

Start with:

```js
calculateTax(rate, amount)
```

Fix the rate once:

```js
const calculateGST = amount => calculateTax(0.18, amount);
```

Now callers only provide the changing value.

### Currying

Currying changes a multi-argument function into a chain of one-argument functions:

```js
const multiply = a => b => a * b;
```

Use these patterns when they make configuration/reuse clearer. Avoid them when they make straightforward business code harder for the team to read.


## Currying

```js
const multiply = a => b => a * b;

const double = multiply(2);

double(5); // 10
```

## Partial application

```js
function calculateTax(rate, amount) {
  return amount * rate;
}

const calculateGST = calculateTax.bind(null, 0.18);
```

Useful for reusable configured functions.

---

# 63. Memoization

> ### Beginner explanation
>
> Memoization remembers the result of an expensive function for inputs it has already seen. On a repeated call, it can return the cached result instead of recalculating.

### Best fit

Memoization works when:

- The function is deterministic for the chosen cache key.
- Calculation is expensive enough to justify caching.
- Inputs repeat.
- You have a cache eviction/invalidation story if data can change.

### Bad fit

Do not memoize a function that reads constantly changing external state unless the cache key/version accounts for that state.

### Production question

Always ask: **How does the cache stop growing?** A `Map` that stores every unique request forever can become a memory leak.


Cache previous results.

```js
function memoize(fn) {
  const cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = fn(value);
    cache.set(value, result);

    return result;
  };
}
```

Useful for expensive deterministic calculations.

Be careful:

- Cache can grow forever.
- Object arguments require better cache keys.
- Stale data can make caching incorrect.

---

# 64. Debounce and Throttle

> ### Beginner explanation
>
> Some browser events can fire many times per second. Calling an API or heavy calculation for every event may be wasteful. Debouncing and throttling are rate-control patterns.

### Visual difference

```text
Input events:  x x x x x       x
Debounce:                 RUN     RUN
Throttle:      RUN   RUN   RUN   RUN
```

- **Debounce** waits until activity has been quiet for a period.
- **Throttle** allows execution at a limited frequency while activity continues.

### Typical choices

| Scenario | Prefer |
|---|---|
| Search after typing stops | Debounce |
| Autosave after user pauses | Debounce |
| Scroll position tracking | Throttle |
| Mouse/pointer tracking | Throttle |

Production implementations may need leading/trailing invocation options and cancellation methods.


## Debounce

Execute only after calls stop for a delay.

```js
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

Use cases:

- Search box
- Input validation
- Resize handling
- Autosave

## Throttle

Execute at most once during a time interval.

```js
function throttle(fn, delay) {
  let allowed = true;

  return function (...args) {
    if (!allowed) return;

    allowed = false;
    fn.apply(this, args);

    setTimeout(() => {
      allowed = true;
    }, delay);
  };
}
```

Use cases:

- Scroll tracking
- Mouse movement
- Resize
- Repeated events

Difference:

```text
Debounce = wait until activity stops
Throttle = limit execution frequency
```

---

# 65. Common Design Patterns

> ### Beginner explanation
>
> A design pattern is a reusable **design idea**, not a piece of code you must copy exactly. Patterns give developers shared vocabulary for recurring architecture problems.

### Do not pattern-hunt

Start with the problem. Introduce a pattern only when it reduces duplication/coupling or makes change easier.

### Pattern selection examples

| Problem | Possible pattern |
|---|---|
| Need objects created with shared behavior/config | Factory |
| Need interchangeable business rules | Strategy |
| Need subscribers notified of events | Observer / Pub-Sub |
| Need a simpler interface over complex subsystem | Facade |
| Need data-access logic separated | Repository |
| Need dependencies supplied externally | Dependency Injection |

### Example thought process

A tax engine with 20 `if/else` branches that change often may benefit from Strategy. A two-case calculation probably does not need a formal pattern.


## Module Pattern

```js
const cart = (() => {
  const items = [];

  return {
    add(item) {
      items.push(item);
    },

    getItems() {
      return [...items];
    }
  };
})();
```

## Factory Pattern

```js
function createUser({
  name,
  role = "USER"
}) {
  return {
    name,
    role,
    canApprove() {
      return role === "MANAGER";
    }
  };
}
```

## Strategy Pattern

```js
const taxStrategies = {
  GST: amount => amount * 0.18,
  VAT: amount => amount * 0.20
};

function calculateTax(type, amount) {
  const strategy = taxStrategies[type];

  if (!strategy) {
    throw new Error("Unknown tax type");
  }

  return strategy(amount);
}
```

Useful when large `if/else` chains represent interchangeable business rules.

## Observer / Pub-Sub

```js
class EventBus {
  #listeners = new Map();

  on(eventName, listener) {
    const listeners =
      this.#listeners.get(eventName) ?? [];

    listeners.push(listener);

    this.#listeners.set(
      eventName,
      listeners
    );
  }

  emit(eventName, payload) {
    const listeners =
      this.#listeners.get(eventName) ?? [];

    for (const listener of listeners) {
      listener(payload);
    }
  }
}
```

---

# 66. SOLID Ideas in JavaScript

> ### Beginner explanation
>
> SOLID is a group of object-oriented design principles intended to make software easier to change and test. In JavaScript, treat SOLID as **design guidance**, not strict rules that force every function into a class.

### Plain-English meanings

- **S — Single Responsibility:** one module/function/class should have one coherent reason to change.
- **O — Open/Closed:** prefer extending behavior without repeatedly rewriting stable core logic.
- **L — Liskov Substitution:** replacements for an abstraction should honor its expected behavior.
- **I — Interface Segregation:** consumers should depend only on behavior they actually need.
- **D — Dependency Inversion:** high-level policy should not be tightly coupled to concrete low-level details.

### Most useful practical outcome

If business logic can be tested without a real DOM, real HTTP server, or real database, your boundaries are probably improving.


## Single Responsibility

Bad:

```js
function processInvoice(invoice) {
  validate(invoice);
  calculateTax(invoice);
  saveToDatabase(invoice);
  sendEmail(invoice);
  writeAuditLog(invoice);
}
```

Better:

```text
InvoiceValidator
TaxCalculator
InvoiceRepository
NotificationService
AuditLogger
```

## Open/Closed

Prefer extension through strategies/configuration instead of constantly editing large condition chains.

## Dependency Inversion

Bad:

```js
class InvoiceService {
  save(invoice) {
    fetch("/api/invoices", {
      method: "POST",
      body: JSON.stringify(invoice)
    });
  }
}
```

Better:

```js
class InvoiceService {
  constructor(repository) {
    this.repository = repository;
  }

  save(invoice) {
    return this.repository.save(invoice);
  }
}
```

This improves testability.

---

# 67. Memory Management

> ### Beginner explanation
>
> JavaScript automatically allocates and releases memory, but “automatic” does not mean “impossible to leak”. Garbage collection can only reclaim values that are no longer reachable from live references.

### Reachability mental model

```text
Global/module references
       ↓
live objects
       ↓
objects referenced by those objects
```

If a global `Map` still references an old 50 MB dataset, the garbage collector cannot know that you personally consider it useless.

### Common browser leak scenario

```js
window.addEventListener("resize", handleResize);
```

If the code creates a new screen/controller repeatedly and each one adds a new listener without cleanup, old state may remain reachable and callbacks may run multiple times.

Use DevTools Memory tools when diagnosing long-lived application growth instead of guessing.


JavaScript has automatic garbage collection.

A value becomes eligible for collection when it is no longer reachable.

Common memory leak sources:

- Forgotten event listeners
- Long-running timers
- Large global caches
- Closures holding unnecessary data
- Detached DOM elements
- Unbounded arrays/maps

Example:

```js
const cache = new Map();

function cacheUser(user) {
  cache.set(user.id, user);
}
```

If the application never removes entries, memory usage may grow indefinitely.

---

# 68. Shallow Copy vs Deep Copy

> ### Beginner explanation
>
> Copying an object can mean two different things. A **shallow copy** creates a new outer object but keeps references to nested objects. A **deep copy** recursively creates independent nested data where supported.

### Picture

```text
Original ── address object
Copy     ──┘
```

with shallow spread, both outer objects still point to the same nested `address`.

### Why `structuredClone` matters

`structuredClone()` performs a standardized deep clone for many structured data types and handles cycles. It still is not appropriate for every value (for example functions are not cloneable this way).

### Design question before cloning

Ask why you need a deep clone. Sometimes the better solution is to update only the specific nested branch immutably rather than duplicating an entire large object graph.


Shallow copy:

```js
const copy = {
  ...original
};
```

Nested objects still share references.

```js
const user = {
  address: {
    city: "Mumbai"
  }
};

const copy = { ...user };

copy.address.city = "Pune";

console.log(user.address.city);
// Pune
```

Deep copy:

```js
const deepCopy = structuredClone(user);
```

`structuredClone` supports many built-in data types, but not every possible value such as functions.

Avoid abusing:

```js
JSON.parse(JSON.stringify(value));
```

because it changes or loses certain data types.

---

# 69. Equality Rules

> ### Beginner explanation
>
> Equality is about deciding whether two values should count as the same. JavaScript has several equality algorithms because historical compatibility and special numeric cases matter.

### Practical defaults

Use:

```js
===
!==
```

for ordinary application comparisons.

### Reference equality

```js
const a = { id: 1 };
const b = { id: 1 };

a === b; // false
```

They contain similar data but are different objects.

### Value comparison

If your business needs deep/value equality, you must define what “equal” means—same selected fields, same nested structure, same order, etc. Do not assume `===` performs deep object comparison.


Prefer strict equality:

```js
===
!==
```

## `Object.is`

```js
Object.is(NaN, NaN); // true
NaN === NaN;         // false
```

```js
Object.is(0, -0); // false
0 === -0;         // true
```

## Object equality

```js
{} === {}; // false
```

Objects compare by reference.

```js
const a = {};
const b = a;

a === b; // true
```

---

# 70. Performance Optimization

> ### Beginner explanation
>
> Performance optimization means making the application fast enough for real workloads **without sacrificing correctness and maintainability unnecessarily**. The first step is measurement, not clever code.

### Performance layers

```text
Algorithm choice
Data structure choice
DOM/rendering work
Network requests
Parsing/serialization
Memory usage
Main-thread CPU time
Asset loading
```

### Example: correct data structure

Repeatedly searching a 50,000-item array for every invoice is a design issue. Converting reference data into a `Map` can reduce repeated lookup cost dramatically.

### Browser rule

The user notices responsiveness. A 200 ms CPU loop on the main thread can feel worse than a longer network request that leaves the UI responsive.

Use browser Performance tools to identify the actual bottleneck before micro-optimizing syntax.


Measure before optimizing.

Important areas:

## DOM

Avoid repeated layout-heavy DOM changes.

Instead of repeatedly appending:

```js
for (const item of items) {
  document.body.append(createRow(item));
}
```

consider using a fragment:

```js
const fragment = document.createDocumentFragment();

for (const item of items) {
  fragment.append(createRow(item));
}

document.body.append(fragment);
```

## Network

- Avoid duplicate requests.
- Cache where appropriate.
- Cancel obsolete requests.
- Batch requests if backend supports it.
- Lazy-load non-critical data.

## Algorithms

Bad for large datasets:

```js
for (const employee of employees) {
  const department = departments.find(
    department => department.id === employee.departmentId
  );
}
```

Potential `O(n × m)`.

Better:

```js
const departmentById = new Map(
  departments.map(department => [
    department.id,
    department
  ])
);

for (const employee of employees) {
  const department =
    departmentById.get(employee.departmentId);
}
```

---

# 71. Security Essentials

> ### Beginner explanation
>
> Browser JavaScript runs in an untrusted client environment. Users can inspect requests, modify JavaScript, call APIs manually, and alter form fields. Therefore security boundaries must be enforced on trusted server-side systems too.

### Threat-model questions

For every feature ask:

1. Is any untrusted text being interpreted as HTML/code?
2. Can a user change an ID/role/amount in DevTools and bypass a rule?
3. Are secrets being shipped to the browser?
4. Are authentication credentials protected appropriately?
5. Are state-changing requests protected against relevant cross-site attacks?
6. Are uploaded files validated server-side?

### Golden rule

**The frontend can improve UX; it cannot be your sole security enforcement layer.**

A hidden “Approve” button is not authorization. The API that performs approval must independently verify the authenticated user's permission.


🔥 Critical.

## XSS

Unsafe:

```js
element.innerHTML = userInput;
```

Safer for plain text:

```js
element.textContent = userInput;
```

## CSRF

Use proper server-side CSRF defenses for cookie-authenticated state-changing requests.

## CORS

CORS is a browser security mechanism controlled primarily by server response headers.

It is not an authentication system.

## Sensitive data

Do not expose:

- Passwords
- API secrets
- Private keys
- Database credentials
- Internal tokens

in browser JavaScript.

Anything delivered to the browser should be considered accessible to the user.

## Prototype pollution

Never blindly merge untrusted object paths into objects.

Validate allowed keys.

## URL injection

Validate external URLs before assigning them to navigation-related fields.

## Client-side authorization

Do not rely on frontend checks alone.

Frontend:

```js
if (user.role === "ADMIN") {
  showAdminButton();
}
```

Backend must independently verify authorization.

---

# 72. Debugging

> ### Beginner explanation
>
> Debugging is the skill of turning “it does not work” into a specific, testable explanation. Strong developers do not rely only on adding `console.log` everywhere; they inspect state, execution order, network requests, call stacks, and DOM changes systematically.

### A repeatable debugging process

```text
Reproduce reliably
      ↓
Reduce the problem
      ↓
Inspect inputs/state
      ↓
Set breakpoint
      ↓
Follow execution
      ↓
Find first incorrect assumption
      ↓
Fix + add regression test
```

### Useful breakpoint skill

Pause **before** the bad result appears, then step through the code and inspect variables. The first place where actual state differs from expected state is more valuable than the final line that throws the error.


Use browser DevTools.

Important tools:

```text
Console
Sources
Breakpoints
Network
Application
Performance
Memory
Elements
```

## Useful console methods

```js
console.log()
console.table()
console.error()
console.warn()
console.time()
console.timeEnd()
console.trace()
```

Example:

```js
console.table(invoices);
```

## `debugger`

```js
function calculate(invoice) {
  debugger;

  return invoice.amount * 1.18;
}
```

The browser pauses when DevTools is open.

---

# 73. Testing Vanilla JavaScript

> ### Beginner explanation
>
> A test is executable evidence that code behaves as expected for chosen scenarios. Tests are especially effective when business logic is written as small functions that do not require the DOM/network just to calculate a result.

### Test levels

- **Unit:** one small function/module.
- **Integration:** multiple pieces working together.
- **End-to-End:** user-level behavior in a real/realistic browser system.

### Scenario table

For `calculateInvoiceTotal`, test:

```text
Normal items
Empty items
Zero quantity
Decimal prices
Invalid data behavior
Discount/tax edge cases
```

### Testing mindset

Do not test implementation details just because they exist. Test observable behavior and important business rules. A refactor should not break tests if behavior remains correct.


Even without frameworks, write testable JavaScript.

Pure function:

```js
export function calculateTotal(items) {
  return items.reduce(
    (sum, item) =>
      sum + item.quantity * item.price,
    0
  );
}
```

Test idea:

```js
const result = calculateTotal([
  {
    quantity: 2,
    price: 100
  }
]);

console.assert(result === 200);
```

For larger applications use a testing tool such as Vitest/Jest or browser automation tools such as Playwright.

Test layers:

```text
Unit
Integration
End-to-End
```

---

# 74. Clean Code Guidelines

> ### Beginner explanation
>
> Clean code is code whose intention is easy for another developer—including future you—to understand and safely modify. “Clean” does not mean fewer lines at any cost.

### Prefer intention-revealing names

```js
const x = a * b;
```

vs:

```js
const lineTotal = quantity * unitPrice;
```

The second version carries business meaning.

### Function design questions

Before adding code to a function ask:

- Does this belong to the same responsibility?
- Can I name what this function does in one short sentence?
- Are inputs explicit?
- Are outputs/side effects predictable?
- Can I test it independently?

### Comment rule

Use comments to explain **why** a surprising decision exists, not to narrate obvious syntax.


## Use descriptive names

Bad:

```js
function calc(a, b) {
  return a * b;
}
```

Better:

```js
function calculateLineTotal(
  quantity,
  unitPrice
) {
  return quantity * unitPrice;
}
```

## Small focused functions

Bad:

```js
function handleEverything() {
  // 300 lines
}
```

Better:

```text
validateInvoice()
normalizeInvoice()
calculateInvoiceTotal()
saveInvoice()
notifyApprover()
```

## Prefer guard clauses

Bad:

```js
if (user) {
  if (user.active) {
    if (user.role === "ADMIN") {
      openAdmin();
    }
  }
}
```

Better:

```js
if (!user) return;
if (!user.active) return;
if (user.role !== "ADMIN") return;

openAdmin();
```

## Avoid magic values

Bad:

```js
if (amount > 50000) {
}
```

Better:

```js
const HIGH_VALUE_THRESHOLD = 50000;

if (amount > HIGH_VALUE_THRESHOLD) {
}
```

---

# 75. Data Structures

> ### Beginner explanation
>
> A data structure is a way of organizing data so particular operations are efficient and clear. JavaScript gives you built-in structures such as arrays, objects, Maps, and Sets; computer-science structures help you understand why some algorithms scale better than others.

### Choose by operation

```text
Need ordered access             → Array
Need key lookup                 → Map/Object
Need uniqueness                 → Set
Need last-in-first-out          → Stack
Need first-in-first-out         → Queue
Need parent/child hierarchy     → Tree
Need arbitrary relationships    → Graph
```

### Business mapping

- DOM = tree.
- Approval dependencies = graph.
- Undo history = stack.
- Background work = queue.
- Vendor id lookup = Map.

You do not need to manually implement every structure in production, but implementing simplified versions teaches the underlying behavior.


Must understand conceptually:

## Array

Ordered collection.

## Object / Map

Key-value lookup.

## Set

Unique collection.

## Stack

LIFO:

```text
push
pop
```

Example:

```js
class Stack {
  #items = [];

  push(value) {
    this.#items.push(value);
  }

  pop() {
    return this.#items.pop();
  }
}
```

## Queue

FIFO.

```js
class Queue {
  #items = [];

  enqueue(value) {
    this.#items.push(value);
  }

  dequeue() {
    return this.#items.shift();
  }
}
```

For high-performance queues, avoid repeated large-array `shift()` by using an index or dedicated structure.

## Linked List

Useful conceptual structure for understanding references.

## Tree

Used for hierarchical structures.

Examples:

- DOM
- Organization hierarchy
- Category tree

## Graph

Useful for:

- Workflow dependencies
- Routes
- Social connections
- Approval networks

---

# 76. Algorithms and Big-O

> ### Beginner explanation
>
> An algorithm is a step-by-step procedure for solving a problem. Big-O notation describes how the amount of work grows as input size grows; it does **not** give an exact runtime in milliseconds.

### Growth intuition

If `n` doubles:

```text
O(1)       roughly same work
O(log n)   slightly more
O(n)       roughly double
O(n log n) a little more than double
O(n²)      roughly four times
```

### Why this matters in application code

A nested search may feel instant with 20 invoices but become slow with 100,000.

```js
for (const invoice of invoices) {
  vendors.find(v => v.id === invoice.vendorId);
}
```

Pre-indexing vendors into a `Map` changes the lookup strategy and can greatly reduce scaling cost.

Optimize based on expected data size and measured bottlenecks—not Big-O notation alone.


Important complexity classes:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
```

## O(1)

```js
map.get(id);
```

## O(n)

```js
items.find(item => item.id === id);
```

## O(n²)

```js
for (const a of items) {
  for (const b of items) {
    compare(a, b);
  }
}
```

Learn:

- Linear search
- Binary search
- Sorting
- Recursion
- BFS
- DFS
- Hash-based lookup
- Two pointers
- Sliding window

Do not memorize algorithms blindly. Understand the problems they solve.

---

# 77. Real-World Scenario Projects

> ### Beginner explanation
>
> Projects convert isolated syntax knowledge into engineering skill. A real feature forces several concepts to interact: state, validation, DOM rendering, asynchronous APIs, errors, and data transformation.

### How to build each project

Do not build everything at once. Use vertical slices:

```text
1. Hard-coded sample data
2. Pure business functions
3. Basic DOM rendering
4. User events
5. Validation
6. API integration
7. Loading/error states
8. Persistence
9. Tests
10. Refactoring and performance review
```

### Learning rule

For every project, keep a `README.md` answering:

- Which JavaScript concepts did I use?
- Which bug took the longest to solve?
- Which code would I redesign now?
- What security/performance concern exists?
- Which tests protect the core business rules?

This reflection is what turns a tutorial project into learning.


## Project 1: Invoice Calculator

Concepts:

```text
Functions
Arrays
Objects
reduce
Validation
DOM
Events
```

Example:

```js
function calculateInvoiceTotal(items) {
  return items.reduce((total, item) => {
    const lineTotal =
      item.quantity * item.unitPrice;

    return total + lineTotal;
  }, 0);
}
```

Add:

- Tax
- Discount
- Rounding
- Validation
- Editable line items
- JSON export

---

## Project 2: Employee Directory

Concepts:

```text
Fetch
filter
map
sort
search
DOM
debounce
```

Features:

- Load employees
- Search by name
- Filter by department
- Sort by joining date
- View details
- Paginate results

---

## Project 3: Approval Workflow

Concepts:

```text
State
Objects
Strategies
Events
Async API calls
Validation
Role-based UI
```

Example states:

```text
DRAFT
SUBMITTED
MANAGER_APPROVED
FINANCE_APPROVED
REJECTED
POSTED
```

Create allowed transitions:

```js
const transitions = {
  DRAFT: ["SUBMITTED"],
  SUBMITTED: [
    "MANAGER_APPROVED",
    "REJECTED"
  ],
  MANAGER_APPROVED: [
    "FINANCE_APPROVED",
    "REJECTED"
  ],
  FINANCE_APPROVED: ["POSTED"],
  REJECTED: []
};
```

---

## Project 4: OCR JSON Review UI

Concepts:

```text
File API
Fetch
JSON
Forms
Dynamic DOM
Validation
Object transformation
Error handling
```

Features:

- Upload PDF/image
- Call OCR API
- Display extracted JSON
- Edit incorrect values
- Highlight missing required fields
- Export corrected JSON

---

## Project 5: Search Autocomplete

Concepts:

```text
input events
debounce
AbortController
Fetch
DOM
race conditions
```

---

## Project 6: Client-Side Dashboard

Concepts:

```text
Promise.all
Fetch
DOM rendering
Date formatting
Aggregation
Maps
Charts via native canvas if desired
```

---

# 78. Common JavaScript Mistakes

> ### Beginner explanation
>
> This section is a checklist of traps that often appear after the basic syntax seems easy. Do not memorize the list as trivia. For every mistake, reproduce the bug in a tiny file, inspect the result, and then write the safer version.

### Categorize mistakes

```text
Type/coercion mistakes
Reference/mutation mistakes
Async ordering mistakes
DOM/event mistakes
Network/API mistakes
Date/number mistakes
Security mistakes
Architecture/readability mistakes
```

### Best practice exercise

Pick five mistakes per week and create a tiny “before vs after” example. Example:

```js
// risky assumption
const total = input.value + 10;

// explicit intent
const amount = Number(input.value);
const total = amount + 10;
```

The goal is to recognize the underlying category when you encounter a new bug.


1. Using `==` without understanding coercion.
2. Using `var` unnecessarily.
3. Assuming `const` makes objects immutable.
4. Mutating shared objects accidentally.
5. Forgetting that `sort()` mutates arrays.
6. Forgetting that `reverse()` mutates arrays.
7. Confusing `slice()` and `splice()`.
8. Using `map()` when no transformed array is needed.
9. Using `forEach()` when you need `break`.
10. Treating `forEach(async () => {})` as awaited sequential logic.
11. Forgetting `await`.
12. Forgetting to check `response.ok`.
13. Assuming `fetch()` rejects for HTTP 500.
14. Forgetting return inside a block arrow function.
15. Losing `this` after passing a method.
16. Using arrow function where dynamic `this` is required.
17. Using regular function where lexical `this` is desired.
18. Forgetting event cleanup.
19. Leaving intervals running.
20. Storing unlimited data in caches.
21. Using `innerHTML` with untrusted input.
22. Relying only on client-side authorization.
23. Trusting client-side validation.
24. Comparing objects using `===` expecting value equality.
25. Assuming `{...obj}` deep-clones.
26. Using JSON cloning for unsupported types.
27. Modifying arrays while iterating unexpectedly.
28. Using floating-point numbers carelessly for money.
29. Treating `toFixed()` as returning a number.
30. Misunderstanding timezone conversion.
31. Parsing dates from ambiguous formats.
32. Passing unencoded query parameters.
33. Ignoring aborted fetch errors.
34. Creating race conditions in autocomplete.
35. Creating giant functions with mixed responsibilities.
36. Deeply nesting conditionals.
37. Swallowing errors with empty `catch`.
38. Logging sensitive data.
39. Creating unnecessary global variables.
40. Assuming empty arrays are falsy.
41. Assuming empty objects are falsy.
42. Using `parseInt` without understanding partial parsing.
43. Comparing `NaN` with `===`.
44. Forgetting that `typeof null === "object"`.
45. Using `for...in` for arrays.
46. Forgetting that object keys are strings/symbols in plain objects.
47. Recreating expensive objects repeatedly.
48. Blocking the UI with heavy computation.
49. Not canceling obsolete requests.
50. Optimizing before measuring.

---

# 79. Interview Topics

> ### Beginner explanation
>
> Interview questions are useful only after you understand the underlying behavior. A good answer should explain **what**, **why**, and **a concrete example** instead of reciting one sentence from memory.

### Answer framework

For a question such as “What is a closure?” use:

```text
Definition
   ↓
Tiny example
   ↓
Real use case
   ↓
Common pitfall
```

Example answer outline:

> A closure happens when a function keeps access to variables from its lexical scope after that outer execution has finished. It is used for private state, callbacks, factories, memoization, and debounce. Because it retains references, it can also affect memory usage.

### Senior-level interviews

Expect tradeoff questions, not only definitions: “Why choose Map over Object?”, “How would you prevent stale API responses?”, “How would you diagnose a memory leak?”, or “How would you structure this module for testing?”


You should be able to explain clearly:

## Beginner

- `var` vs `let` vs `const`
- Primitive vs object
- `==` vs `===`
- `null` vs `undefined`
- Truthy/falsy
- Function declaration vs expression
- Arrow functions
- Array methods
- Objects
- DOM selection
- Events

## Intermediate

- Scope
- Hoisting
- TDZ
- Closure
- `this`
- `call` / `apply` / `bind`
- Prototype
- Classes
- Promise
- `async` / `await`
- Event loop
- Microtask vs task
- Modules
- Event delegation
- Debounce
- Throttle
- Shallow vs deep clone

## Advanced

- Execution context
- Lexical environment
- Prototype chain
- Garbage collection
- Memory leaks
- Iterators
- Generators
- Symbols
- Property descriptors
- Async race conditions
- Promise concurrency
- Performance
- Security
- Architecture and module boundaries

---

# 80. Practice Challenges

> ### Beginner explanation
>
> Practice challenges should be solved in increasing layers. First make the result correct. Then improve readability, handle edge cases, add tests, and finally consider performance.

### Four-pass challenge method

```text
Pass 1: Correct result
Pass 2: Edge cases
Pass 3: Clean/refactor
Pass 4: Complexity + tests
```

### Example: remove duplicates

Ask yourself:

1. Are values primitives or objects?
2. What defines a duplicate?
3. Should original order be preserved?
4. How large can the input be?
5. May the original array be mutated?

The same “simple” problem can require different solutions depending on requirements. This is exactly the type of reasoning professional development requires.


## Beginner

- Reverse a string.
- Check palindrome.
- Find maximum number.
- Remove duplicates.
- Count character frequency.
- FizzBuzz.
- Calculate invoice total.
- Validate email input.
- Search array of employees.
- Sort transactions by amount.

## Intermediate

- Group invoices by vendor.
- Group employees by department.
- Flatten nested arrays.
- Implement custom `map`.
- Implement custom `filter`.
- Implement custom `reduce`.
- Build debounce.
- Build throttle.
- Build memoize.
- Build event emitter.
- Implement retry for a fetch request.
- Implement API timeout.
- Build autocomplete.
- Build modal without library.

## Advanced

- Implement deep equality.
- Implement deep clone for selected types.
- Build LRU cache.
- Build promise pool with concurrency limit.
- Build custom iterator.
- Build tree traversal.
- Build BFS.
- Build DFS.
- Build pub/sub system.
- Build state machine for invoice workflow.
- Build virtualized long list concept.
- Build client-side router.
- Build mini templating engine.
- Build form validation framework.
- Build request cache with TTL.

---

# 81. Mastery Roadmap

> ### Beginner explanation
>
> The roadmap gives you an order, but mastery is not strictly linear. You will repeatedly revisit earlier topics with deeper understanding. For example, you may first learn “promises let me wait for API calls” and later revisit promises when studying the event loop, concurrency, error propagation, and cancellation.

### Suggested progression rule

Do not move to the next phase because you merely read the section. Move when you can:

```text
Explain the idea
Write a small example without copying
Debug a broken example
Use it in a mini-project
```

### Framework readiness checkpoint

Before jumping into a frontend framework, be comfortable with:

- Functions and closures.
- Objects/arrays and immutable transformations.
- Modules.
- DOM/events.
- Promises and `async`/`await`.
- Fetch and error handling.
- `this`/classes/prototypes at least conceptually.

Framework learning becomes much less mysterious once these are solid.


## Phase 1 — Fundamentals

Learn:

```text
Syntax
Variables
Types
Operators
Conditions
Loops
Functions
Arrays
Objects
Strings
```

Build:

- Calculator
- Number guessing game
- Invoice line calculator

---

## Phase 2 — Core Language Behavior

Learn:

```text
Scope
Hoisting
Closures
this
Prototypes
Classes
Destructuring
Spread
Map
Set
```

Build:

- Employee manager
- Expense tracker

---

## Phase 3 — Async JavaScript

Learn:

```text
Callbacks
Promises
async/await
Event Loop
Timers
Promise utilities
AbortController
```

Build:

- API dashboard
- Search autocomplete

---

## Phase 4 — Browser and DOM

Learn:

```text
DOM
Events
Forms
Event delegation
Storage
URL
History
Files
Observers
```

Build:

- Todo app
- Invoice editor
- JSON viewer

---

## Phase 5 — Advanced JavaScript

Learn:

```text
Iterators
Generators
Symbols
Descriptors
Functional programming
Design patterns
Memory
Performance
Security
```

Build:

- Workflow engine
- Event bus
- Data processing utility library

---

## Phase 6 — Production Skills

Learn:

```text
Modules
Testing
Debugging
Clean architecture
Error handling
Security
Performance
Browser compatibility
```

Build:

- Production-style Vanilla JavaScript application with modules and tests.

---

# 82. Final Master Checklist

> ### Beginner explanation
>
> Treat this checklist as a **diagnostic tool**, not a scorecard. A checked item should mean more than “I have heard of this word.” Use three levels of mastery:

```text
Level 1 — I can explain it.
Level 2 — I can code it without copying.
Level 3 — I can choose when to use it and debug it in a real scenario.
```

When reviewing the checklist, mark weak topics and return to their section. For high-priority topics such as functions, arrays/objects, scope, closures, promises, event loop, DOM/events, fetch, errors, security, and debugging, target Level 3.


## Core Syntax

- [ ] Variables
- [ ] Primitive types
- [ ] Objects
- [ ] Arrays
- [ ] Operators
- [ ] Conditions
- [ ] Loops
- [ ] Functions
- [ ] Parameters
- [ ] Default parameters
- [ ] Rest parameters

## Language Internals

- [ ] Execution context
- [ ] Call stack
- [ ] Heap concept
- [ ] Scope
- [ ] Lexical environment
- [ ] Scope chain
- [ ] Hoisting
- [ ] TDZ
- [ ] Closure
- [ ] `this`
- [ ] Prototype chain

## Objects and Collections

- [ ] Object methods
- [ ] Destructuring
- [ ] Spread
- [ ] Map
- [ ] Set
- [ ] WeakMap
- [ ] WeakSet
- [ ] Symbols
- [ ] Property descriptors

## Functions

- [ ] Declaration
- [ ] Expression
- [ ] Arrow functions
- [ ] Callbacks
- [ ] Higher-order functions
- [ ] Pure functions
- [ ] Recursive functions
- [ ] Generators

## Arrays

- [ ] `map`
- [ ] `filter`
- [ ] `reduce`
- [ ] `find`
- [ ] `findIndex`
- [ ] `some`
- [ ] `every`
- [ ] `sort`
- [ ] `flat`
- [ ] Mutating vs non-mutating methods

## Async

- [ ] Callbacks
- [ ] Promises
- [ ] `async`
- [ ] `await`
- [ ] Promise chaining
- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.any`
- [ ] `Promise.race`
- [ ] Event loop
- [ ] Microtasks
- [ ] Timers
- [ ] Race conditions
- [ ] AbortController

## Browser

- [ ] DOM
- [ ] Selectors
- [ ] DOM creation
- [ ] Classes
- [ ] Attributes
- [ ] Dataset
- [ ] Events
- [ ] Bubbling
- [ ] Capturing
- [ ] Delegation
- [ ] Forms
- [ ] Validation
- [ ] Fetch
- [ ] Storage
- [ ] Cookies
- [ ] URL
- [ ] History
- [ ] File API
- [ ] Blob
- [ ] Clipboard
- [ ] Observers
- [ ] Workers

## Architecture

- [ ] ES modules
- [ ] Separation of concerns
- [ ] Composition
- [ ] Error handling
- [ ] Dependency injection idea
- [ ] Strategy pattern
- [ ] Factory pattern
- [ ] Observer/pub-sub
- [ ] Clean code
- [ ] Testing

## Advanced

- [ ] Iterators
- [ ] Generators
- [ ] Memoization
- [ ] Debounce
- [ ] Throttle
- [ ] Memory leaks
- [ ] Garbage collection
- [ ] Shallow copy
- [ ] Deep copy
- [ ] Equality rules
- [ ] Regex
- [ ] Performance
- [ ] Security

## Computer Science

- [ ] Big-O
- [ ] Stack
- [ ] Queue
- [ ] Hash lookup
- [ ] Linked list
- [ ] Tree
- [ ] Graph
- [ ] BFS
- [ ] DFS
- [ ] Binary search
- [ ] Sorting concepts

---

# 83. Quick Reference Cheat Sheet

> ### Beginner explanation
>
> This cheat sheet is for **recall after learning**, not a replacement for learning. If a line looks unfamiliar, use the corresponding full section above before copying the syntax into a project.

### How to use a cheat sheet correctly

1. Remember the intent: “I need the first matching array item.”
2. Find the tool: `find()`.
3. Write the code yourself.
4. Check mutation/return behavior.
5. Handle missing/invalid results.

Example:

```js
const invoice = invoices.find(item => item.id === requestedId);

if (!invoice) {
  throw new Error("Invoice not found");
}
```

Knowing the method name is only step one; production code also handles the unsuccessful path.


## Variables

```js
const value = 10;
let count = 0;
```

## Conditional

```js
if (condition) {
} else if (otherCondition) {
} else {
}
```

## Ternary

```js
const status =
  active ? "ACTIVE" : "INACTIVE";
```

## Function

```js
function add(a, b) {
  return a + b;
}
```

## Arrow

```js
const add = (a, b) => a + b;
```

## Object

```js
const user = {
  id: 1,
  name: "Shoeb"
};
```

## Array transformation

```js
items.map(item => transform(item));

items.filter(item => item.active);

items.reduce(
  (total, item) => total + item.amount,
  0
);
```

## Destructuring

```js
const { id, name } = user;

const [first, second] = values;
```

## Spread

```js
const updated = {
  ...user,
  active: true
};
```

## Optional chaining

```js
user?.address?.city;
```

## Nullish fallback

```js
const value = input ?? defaultValue;
```

## Async

```js
async function loadData() {
  const response = await fetch("/api/data");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
```

## Error handling

```js
try {
  await loadData();
} catch (error) {
  console.error(error);
}
```

## Event

```js
button.addEventListener("click", () => {
  console.log("clicked");
});
```

## DOM

```js
const element =
  document.querySelector("#id");

element.textContent = "Updated";
```

## Module

```js
export function helper() {}

import { helper } from "./helper.js";
```

---


# 84. Strict Mode

> ### Beginner explanation
>
> Strict mode tells JavaScript to apply stricter error checking and remove some confusing legacy behavior. **ES modules and class bodies are already strict**, so modern projects often receive strict behavior automatically.

Classic script example:

```js
"use strict";

function example() {
  // strict rules apply here
}
```

## Why strict mode exists

Older JavaScript allowed some mistakes to fail silently. Strict mode converts several of those cases into errors, making bugs easier to detect.

Example conceptually:

```js
"use strict";

// accidentalGlobal = 10;
// ReferenceError instead of silently creating a global variable
```

## What a beginner should remember

- ES modules are strict automatically.
- Classes are strict automatically.
- Do not depend on sloppy-mode behavior.
- Avoid accidental globals.
- Expect stricter `this` behavior in normal function calls.

### Real-world use case

If you are maintaining an old non-module script, adding strict mode can reveal hidden mistakes. Test carefully because legacy code may have relied on behaviors strict mode rejects.

---

# 85. Object Utilities, Getters, Setters, Freeze, and Seal

> ### Beginner explanation
>
> JavaScript's `Object` utility methods help you inspect, copy, create, transform, and restrict objects. These tools are important because objects are the main shape used for application records and configuration.

## Common utilities

| Method | Beginner meaning | Typical use |
|---|---|---|
| `Object.keys(obj)` | Array of own enumerable keys | Loop field names |
| `Object.values(obj)` | Array of own enumerable values | Aggregate values |
| `Object.entries(obj)` | Array of `[key, value]` pairs | Transform objects |
| `Object.fromEntries(entries)` | Build object from pairs | Reverse `entries()` style transforms |
| `Object.assign(target, source)` | Copy enumerable properties | Shallow merge/copy |
| `Object.create(proto)` | Create object with chosen prototype | Prototype-based design |
| `Object.hasOwn(obj, key)` | Check own property | Avoid inherited-property confusion |
| `Object.freeze(obj)` | Prevent normal top-level changes | Protect configuration intent |
| `Object.seal(obj)` | Prevent add/remove of properties | Restrict object shape |

## Getters and setters

A getter makes property access run a function:

```js
const invoice = {
  subtotal: 1000,
  tax: 180,

  get total() {
    return this.subtotal + this.tax;
  }
};

console.log(invoice.total); // 1180
```

A setter runs when assigning:

```js
const account = {
  _name: "",

  set name(value) {
    this._name = value.trim();
  },

  get name() {
    return this._name;
  }
};
```

## Freeze is shallow

```js
const config = Object.freeze({
  api: {
    timeout: 1000
  }
});

config.api.timeout = 2000; // nested object can still be mutable
```

`Object.freeze()` does not recursively deep-freeze nested objects.

### Best practice

Use getters/setters for meaningful property semantics, not to hide surprising expensive operations behind what looks like a simple property read.

---

# 86. Proxy and Reflect

> ### Beginner explanation
>
> A `Proxy` can intercept operations performed on another object, such as reading a property, assigning a property, checking a key, or calling a function. `Reflect` provides standard methods for performing many of those underlying operations.

This is advanced metaprogramming. You do **not** need Proxy for ordinary CRUD objects.

## Basic example

```js
const invoice = {
  amount: 1000
};

const proxy = new Proxy(invoice, {
  get(target, property, receiver) {
    console.log(`Reading ${String(property)}`);
    return Reflect.get(target, property, receiver);
  }
});

console.log(proxy.amount);
```

## Validation example

```js
const invoice = new Proxy({}, {
  set(target, property, value, receiver) {
    if (property === "amount" && value < 0) {
      throw new Error("Amount cannot be negative");
    }

    return Reflect.set(target, property, value, receiver);
  }
});
```

## Real-world uses

- Reactive systems and framework internals.
- Validation wrappers.
- Logging/debug instrumentation.
- Virtualized object behavior.
- Access-control abstractions.

## Caution

Proxies can make code harder to reason about because ordinary-looking property access can run hidden logic. Prefer explicit functions unless interception provides clear value.

---

# 87. Async Iteration and Async Generators

> ### Beginner explanation
>
> Normal `for...of` consumes values that are available synchronously. `for await...of` can consume values that become available asynchronously over time.

## Async iterable example

```js
async function* generatePages() {
  for (let page = 1; page <= 3; page++) {
    const response = await fetch(`/api/invoices?page=${page}`);

    if (!response.ok) {
      throw new Error(`Page ${page} failed`);
    }

    yield response.json();
  }
}

for await (const pageData of generatePages()) {
  console.log(pageData);
}
```

## Mental model

```text
request page 1 → await → yield page 1
request page 2 → await → yield page 2
request page 3 → await → yield page 3
```

## When useful

- Paginated APIs.
- Streams/chunks.
- Sequential asynchronous data sources.
- Processing results as they arrive.

### Important distinction

This example is sequential by design. If all pages can safely load concurrently, `Promise.all()` may be faster. Choose based on API limits, ordering, memory, and dependency rules.

---

# 88. Typed Arrays, ArrayBuffer, and Binary Data

> ### Beginner explanation
>
> Normal JavaScript arrays can contain mixed values and are convenient for application data. Binary APIs need a more precise representation of bytes and numeric memory. `ArrayBuffer`, typed arrays, and `DataView` provide that lower-level model.

## Core concepts

```text
ArrayBuffer → raw block of bytes
TypedArray  → numeric view over those bytes
DataView    → flexible reading/writing with explicit numeric formats
```

Example:

```js
const buffer = new ArrayBuffer(4);
const bytes = new Uint8Array(buffer);

bytes[0] = 255;
bytes[1] = 10;
```

## Common typed arrays

```text
Uint8Array
Int8Array
Uint16Array
Int16Array
Uint32Array
Int32Array
Float32Array
Float64Array
```

## Real-world uses

- Image/audio manipulation.
- File formats.
- WebSocket binary messages.
- Cryptographic/browser APIs.
- Canvas/WebGL data.
- High-performance numeric work.

You normally do not use typed arrays for ordinary invoice records or UI lists.

---

# 89. Browser Rendering and Animation Timing

> ### Beginner explanation
>
> Browser JavaScript shares the main thread with important browser work such as layout, painting, and user interaction. Animation code should cooperate with the browser's rendering schedule instead of blindly running through timers.

## `requestAnimationFrame`

```js
function animate() {
  updateAnimationState();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

The browser calls the callback before a suitable repaint, which makes it a better fit for visual animation than `setInterval`.

## Why heavy JavaScript causes jank

```text
Long JavaScript task
      ↓
Browser cannot promptly paint
      ↓
Animation/input feels frozen
```

## Practical performance rules

- Keep animation callbacks small.
- Avoid repeatedly forcing layout measurements and style writes back-and-forth.
- Batch DOM reads and writes when possible.
- Use CSS animations/transitions when they fit the job.
- Move genuine CPU-heavy work to a Worker when possible.

## Microtasks and rendering

A huge chain of microtasks can also delay the browser's opportunity to render. “Asynchronous” code can still create responsiveness problems if it monopolizes scheduling.

---

# 90. Custom Events and EventTarget

> ### Beginner explanation
>
> You can create your own events so independent parts of an application communicate through event-style messages instead of directly calling each other's internal functions.

## `CustomEvent`

```js
const event = new CustomEvent("invoice:approved", {
  detail: {
    invoiceId: 1001
  }
});

document.dispatchEvent(event);
```

Listen:

```js
document.addEventListener("invoice:approved", event => {
  console.log(event.detail.invoiceId);
});
```

## Dedicated EventTarget

Instead of using `document` as a global bus:

```js
const bus = new EventTarget();

bus.addEventListener("refresh", () => {
  console.log("Refresh requested");
});

bus.dispatchEvent(new Event("refresh"));
```

## When useful

- Loose communication between UI modules.
- Wrapping event-driven browser APIs.
- Small application-level event buses.

## Caution

Events can hide control flow if overused. For direct one-to-one behavior, an explicit function call is usually easier to trace.

---

# 91. IndexedDB

> ### Beginner explanation
>
> `localStorage` is simple but small, string-only, and synchronous. IndexedDB is a browser database designed for much larger structured data and asynchronous access.

## Good use cases

- Offline-first data.
- Large cached API datasets.
- Draft records.
- Client-side queues waiting to sync.
- Structured objects and binary data.

## Mental model

```text
Database
  └── Object Store (similar to a collection/table concept)
        ├── Record
        ├── Record
        └── Record
```

IndexedDB uses transactions and asynchronous requests.

## Why beginners may use a wrapper

The raw API is verbose. Many projects use a small well-maintained wrapper library, but learning the core concepts helps you understand what that wrapper is doing.

## Important design concern

Browser storage is not a trusted system of record. Users can clear it, devices can fail, and client-side data can be modified. Critical enterprise data still needs authoritative server persistence.

---

# 92. WebSocket and Server-Sent Events

> ### Beginner explanation
>
> Normal `fetch()` is request/response: the browser asks, the server answers. Real-time applications sometimes need the server to push updates without the page repeatedly polling.

## WebSocket

WebSocket establishes a long-lived two-way connection.

```js
const socket = new WebSocket("wss://example.com/socket");

socket.addEventListener("message", event => {
  console.log(event.data);
});

socket.addEventListener("open", () => {
  socket.send(JSON.stringify({ type: "subscribe" }));
});
```

Use for:

- Chat.
- Collaborative applications.
- Two-way live control.
- Rapid real-time updates.

## Server-Sent Events (SSE)

SSE is primarily server → browser streaming over HTTP semantics.

```js
const source = new EventSource("/api/updates");

source.onmessage = event => {
  console.log(event.data);
};
```

Use for:

- Job progress.
- Notifications.
- Server status feeds.
- One-way live dashboards.

## Production concerns

Reconnect strategy, authentication, duplicate messages, ordering, offline behavior, and server capacity all matter.

---

# 93. Streams API

> ### Beginner explanation
>
> A stream lets you process data gradually instead of waiting for the entire payload to exist in memory. This is useful for large responses or data that arrives over time.

## Fetch response body

A fetch response can expose a `ReadableStream`:

```js
const response = await fetch("/api/large-data");
const reader = response.body.getReader();

while (true) {
  const { value, done } = await reader.read();

  if (done) break;

  console.log("Received chunk", value);
}
```

## Stream concepts

```text
ReadableStream  → produces data
WritableStream  → consumes data
TransformStream → converts chunks while streaming
```

## Why streams matter

Without streaming:

```text
Download all 500 MB → hold/process entire data
```

With streaming:

```text
Receive chunk → process → release/continue
Receive chunk → process → release/continue
```

This can improve memory usage and time-to-first-result.

---

# 94. Web Components and Shadow DOM

> ### Beginner explanation
>
> Web Components are browser standards for creating reusable custom HTML elements without requiring a framework. The main building blocks are **Custom Elements**, **Shadow DOM**, and HTML templates/slots.

## Custom element

```js
class InvoiceBadge extends HTMLElement {
  connectedCallback() {
    const status = this.getAttribute("status") ?? "UNKNOWN";
    this.textContent = status;
  }
}

customElements.define("invoice-badge", InvoiceBadge);
```

HTML:

```html
<invoice-badge status="APPROVED"></invoice-badge>
```

## Shadow DOM

Shadow DOM can encapsulate internal markup/styles from the surrounding page.

```js
const shadow = this.attachShadow({ mode: "open" });
shadow.innerHTML = `<span>Internal UI</span>`;
```

## When useful

- Reusable design-system controls.
- Framework-independent widgets.
- Embeddable UI components.

## Important caution

Accessibility, theming, form participation, and styling boundaries require deliberate design. Do not choose Shadow DOM solely because it looks advanced.

---

# 95. Service Workers and Cache API

> ### Beginner explanation
>
> A Service Worker is a special browser worker that can sit between your web application and the network for supported requests. It enables capabilities such as offline caching, advanced request strategies, and push-related features.

## Lifecycle idea

```text
register
  ↓
install
  ↓
activate
  ↓
intercept fetch events
```

Registration:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

Inside service worker:

```js
self.addEventListener("fetch", event => {
  // choose network/cache strategy
});
```

## Cache API

```js
const cache = await caches.open("app-v1");
await cache.add("/offline.html");
```

## Use cases

- Offline pages.
- Cached static assets.
- Progressive Web Apps.
- Resilient network strategies.

## Risk

Caching bugs can keep old application versions alive. Version caches deliberately and understand service-worker updates before adding one to a production app.

---

# 96. Internationalization with `Intl`

> ### Beginner explanation
>
> Formatting numbers, currencies, dates, and human-readable lists is locale-sensitive. Do not manually build formatting rules with string concatenation when the browser's `Intl` APIs can apply language/region-aware behavior.

## Currency

```js
const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});

formatter.format(123456.78);
```

## Date/time

```js
const formatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium"
});

formatter.format(new Date());
```

## Relative time

```js
const relative = new Intl.RelativeTimeFormat("en", {
  numeric: "auto"
});

relative.format(-1, "day");
```

## Why this matters

Formatting is not only adding commas. Different locales use different grouping, decimal separators, date orders, languages, and pluralization rules.

Keep underlying numeric/date values separate from display strings.

---

# 97. Browser Security Model: Same-Origin, CORS, CSP, and Trusted Data

> ### Beginner explanation
>
> Browsers intentionally restrict how one website can interact with another. These restrictions protect users from pages silently reading or manipulating data from unrelated sites.

## Origin

An origin is primarily determined by:

```text
scheme + host + port
```

Examples may be different origins if any relevant part differs.

## Same-Origin Policy

The browser restricts certain cross-origin reads/interactions by default.

## CORS

CORS is a protocol through which the **server** can tell the browser which cross-origin requests/responses are allowed.

Important:

> CORS is not authentication and is not a substitute for authorization.

A non-browser client may not enforce browser CORS rules at all.

## CSP

Content Security Policy is delivered through server headers and can restrict where scripts, styles, frames, and other resources may come from. A strong CSP can reduce the impact of certain injection attacks.

## Trusted data rule

Treat these as untrusted until validated/encoded for the destination context:

- Form input.
- URL parameters.
- API data.
- `postMessage` data.
- File contents.
- Third-party content.

Security depends on **context-aware handling**, not a single “sanitize everything” function.

---

# 98. Accessibility in Vanilla JavaScript

> ### Beginner explanation
>
> JavaScript can easily create interfaces that visually work with a mouse but fail for keyboard users or assistive technology. Accessibility should be part of component behavior, not added only at the end.

## Prefer native HTML first

Bad idea:

```html
<div id="save">Save</div>
```

Better:

```html
<button id="save" type="button">Save</button>
```

A real button already has keyboard, focus, and semantic behavior.

## Focus management

If JavaScript opens a modal, consider:

- Where focus moves when it opens.
- Keeping focus appropriately within the modal when required.
- Where focus returns when it closes.
- Escape-key behavior.

## Dynamic status messages

For important asynchronous updates, appropriate ARIA live regions may help assistive technology announce changes.

## Rule

Do not recreate native controls with generic `<div>` elements unless you are prepared to implement the complete keyboard/semantic behavior correctly.

Test with keyboard-only navigation, visible focus, meaningful labels, and browser accessibility tools.

---

# 99. JSDoc and Type-Safe JavaScript Thinking

> ### Beginner explanation
>
> JavaScript is dynamically typed, but you should still think carefully about the **expected shape and type of data** entering and leaving functions. JSDoc comments can document those expectations and editors may provide type-aware assistance.

## Example

```js
/**
 * Calculate one invoice line total.
 * @param {number} quantity
 * @param {number} unitPrice
 * @returns {number}
 */
function calculateLineTotal(quantity, unitPrice) {
  return quantity * unitPrice;
}
```

Object shape:

```js
/**
 * @typedef {Object} Invoice
 * @property {string} invoiceNo
 * @property {number} amount
 * @property {"DRAFT"|"APPROVED"|"REJECTED"} status
 */
```

## Why this helps

- Makes contracts visible.
- Improves autocomplete/editor feedback.
- Reduces ambiguity.
- Eases future TypeScript migration.

## Important limitation

JSDoc does not automatically validate untrusted runtime API data. Runtime validation is still required at external boundaries.

---

# 100. Modern JavaScript Features and Compatibility

> ### Beginner explanation
>
> JavaScript continues to evolve. A feature can be part of modern ECMAScript but still depend on the browsers/runtimes your application supports. Learn modern syntax, but verify compatibility before using newer APIs in production.

## Modern features worth recognizing

```text
let / const
arrow functions
classes
modules
Promises
async / await
optional chaining
nullish coalescing
private class fields
logical assignment operators
numeric separators
structuredClone
newer non-mutating array methods
```

### Logical assignment

```js
config.timeout ??= 5000;
cache[key] ||= createValue();
ready &&= validateReadyState();
```

Understand the short-circuit semantics before using them.

### Numeric separator

```js
const oneMillion = 1_000_000;
```

This improves source-code readability but does not change the numeric value.

## Compatibility strategy

Before adopting a feature:

1. Know your supported browser/runtime versions.
2. Check whether syntax transformation or a polyfill is needed.
3. Distinguish **syntax support** from **web API support**.
4. Test actual target environments.

### Progressive enhancement

Build core functionality with broadly available platform behavior, then enhance where newer capabilities exist when appropriate.

---

# 101. Production-Style Vanilla JavaScript Architecture

> ### Beginner explanation
>
> A production Vanilla JavaScript application should not mean “one giant `script.js` file”. You can organize browser code into modules with clear boundaries just as you would in a framework-based project.

## Example project

```text
src/
├── api/
│   ├── http-client.js
│   └── invoice-api.js
├── domain/
│   ├── invoice-calculator.js
│   ├── invoice-validator.js
│   └── invoice-status.js
├── ui/
│   ├── invoice-form.js
│   ├── invoice-table.js
│   └── notification.js
├── utils/
│   ├── debounce.js
│   └── format.js
├── pages/
│   └── invoice-page.js
└── main.js
```

## Responsibility example

### `invoice-calculator.js`

Pure business calculations. No DOM and ideally no network dependency.

```js
export function calculateInvoiceTotal(items) {
  return items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
}
```

### `invoice-api.js`

HTTP communication only.

```js
export async function saveInvoice(invoice) {
  const response = await fetch("/api/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(invoice)
  });

  if (!response.ok) {
    throw new Error(`Save failed: ${response.status}`);
  }

  return response.json();
}
```

### `invoice-form.js`

Reads/renders form UI and emits/calls application behavior.

## Application flow

```text
DOM event
   ↓
Read user input
   ↓
Normalize + validate
   ↓
Pure business calculation
   ↓
API module
   ↓
Handle result/error
   ↓
Render UI state
```

## State model

Even without a framework, explicitly model UI state:

```js
const state = {
  invoices: [],
  loading: false,
  error: null,
  selectedInvoiceId: null
};
```

Avoid letting the DOM become the only source of truth for business data.

## Production review checklist

Before calling a Vanilla JavaScript feature production-ready, ask:

- Are modules focused and named clearly?
- Are API errors handled?
- Are required inputs validated?
- Are untrusted values inserted safely into the DOM?
- Are obsolete requests cancelled where relevant?
- Are event listeners/timers cleaned up?
- Are business calculations independently testable?
- Are loading, empty, success, and error states represented?
- Is keyboard/accessibility behavior correct?
- Are performance bottlenecks measured?
- Are secrets absent from frontend code?

This architecture gives you the same engineering fundamentals frameworks later formalize through components, services, stores, hooks, or dependency systems.

---

# Final Learning Principle

Do not judge JavaScript mastery by how much syntax you remember.

A strong Vanilla JavaScript developer should be able to answer:

```text
What happens?
Why does it happen?
What are the alternatives?
What can go wrong?
Which approach fits this scenario?
How does this affect performance?
How does this affect maintainability?
How does this affect security?
```

Your target should be:

```text
JavaScript Syntax
       ↓
Core Language Behavior
       ↓
Browser APIs
       ↓
Async Programming
       ↓
Architecture
       ↓
Performance + Security
       ↓
Production Problem Solving
```

Once these foundations are strong, learning Angular, React, Vue, Node.js, TypeScript, or other JavaScript ecosystems becomes significantly easier.

---

# Recommended Practice Rule

For each concept in this file, create at least:

```text
1 basic example
1 business example
1 edge-case example
1 intentionally broken example
1 debugging exercise
1 mini-feature
```

Example for `reduce`:

```text
Basic:
Sum numbers

Business:
Calculate invoice total

Advanced:
Group invoices by vendor

Edge case:
Empty array

Debugging:
Missing initial accumulator

Mini feature:
Invoice summary report
```

That practice pattern turns knowledge into usable engineering skill.

---

**End of Vanilla JavaScript Mastery Guide**
