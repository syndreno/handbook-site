# Node.js Mastery Handbook
## Beginner to Advanced — A Single-File Learning & Reference Guide

> **Purpose:** This handbook is designed to take a learner from “What is Node.js?” to building, testing, securing, debugging, optimizing, and deploying production-grade Node.js applications.
>
> It is intentionally written as a **learning guide + long-term reference**. Each major topic explains:
> - **What it is**
> - **Why it exists**
> - **How it works**
> - **When to use it**
> - **Examples**
> - **Real-world scenarios**
> - **Common mistakes**
> - **Best practices**

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is Node.js?](#2-what-is-nodejs)
3. [Node.js vs JavaScript vs Browser JavaScript](#3-nodejs-vs-javascript-vs-browser-javascript)
4. [How Node.js Works Internally](#4-how-nodejs-works-internally)
5. [Installing and Managing Node.js](#5-installing-and-managing-nodejs)
6. [Your First Node.js Program](#6-your-first-nodejs-program)
7. [Node.js Project Structure](#7-nodejs-project-structure)
8. [package.json Deep Dive](#8-packagejson-deep-dive)
9. [npm and Package Management](#9-npm-and-package-management)
10. [Semantic Versioning](#10-semantic-versioning)
11. [JavaScript Knowledge Required for Node.js](#11-javascript-knowledge-required-for-nodejs)
12. [CommonJS Modules](#12-commonjs-modules)
13. [ECMAScript Modules](#13-ecmascript-modules)
14. [CommonJS vs ESM](#14-commonjs-vs-esm)
15. [Node.js Global Objects](#15-nodejs-global-objects)
16. [The Event Loop](#16-the-event-loop)
17. [Blocking vs Non-Blocking Code](#17-blocking-vs-non-blocking-code)
18. [Callbacks](#18-callbacks)
19. [Promises](#19-promises)
20. [async/await](#20-asyncawait)
21. [Advanced Promise Patterns](#21-advanced-promise-patterns)
22. [Error Handling](#22-error-handling)
23. [AbortController and Cancellation](#23-abortcontroller-and-cancellation)
24. [Events and EventEmitter](#24-events-and-eventemitter)
25. [Buffers](#25-buffers)
26. [File System](#26-file-system)
27. [Paths](#27-paths)
28. [OS Module](#28-os-module)
29. [URL and URLSearchParams](#29-url-and-urlsearchparams)
30. [Streams](#30-streams)
31. [Readable Streams](#31-readable-streams)
32. [Writable Streams](#32-writable-streams)
33. [Transform and Duplex Streams](#33-transform-and-duplex-streams)
34. [Backpressure](#34-backpressure)
35. [Pipelines](#35-pipelines)
36. [HTTP Server with Core Node.js](#36-http-server-with-core-nodejs)
37. [HTTP Request and Response Concepts](#37-http-request-and-response-concepts)
38. [Creating a REST API Without a Framework](#38-creating-a-rest-api-without-a-framework)
39. [Fetch API in Node.js](#39-fetch-api-in-nodejs)
40. [WebSocket Client in Modern Node.js](#40-websocket-client-in-modern-nodejs)
41. [Express.js Fundamentals](#41-expressjs-fundamentals)
42. [Routing](#42-routing)
43. [Middleware](#43-middleware)
44. [Controllers, Services, and Repositories](#44-controllers-services-and-repositories)
45. [Request Validation](#45-request-validation)
46. [Centralized Error Handling](#46-centralized-error-handling)
47. [REST API Design](#47-rest-api-design)
48. [API Pagination, Filtering, Sorting, and Search](#48-api-pagination-filtering-sorting-and-search)
49. [Database Fundamentals](#49-database-fundamentals)
50. [SQL Databases with Node.js](#50-sql-databases-with-nodejs)
51. [MySQL Example](#51-mysql-example)
52. [PostgreSQL Example](#52-postgresql-example)
53. [MongoDB Example](#53-mongodb-example)
54. [ORMs and Query Builders](#54-orms-and-query-builders)
55. [Transactions](#55-transactions)
56. [Connection Pooling](#56-connection-pooling)
57. [Database Performance](#57-database-performance)
58. [Authentication Fundamentals](#58-authentication-fundamentals)
59. [Password Hashing](#59-password-hashing)
60. [Sessions and Cookies](#60-sessions-and-cookies)
61. [JWT Authentication](#61-jwt-authentication)
62. [Refresh Tokens](#62-refresh-tokens)
63. [Authorization and RBAC](#63-authorization-and-rbac)
64. [OAuth 2.0 and OpenID Connect](#64-oauth-20-and-openid-connect)
65. [Security Essentials](#65-security-essentials)
66. [CORS](#66-cors)
67. [CSRF](#67-csrf)
68. [Injection Attacks](#68-injection-attacks)
69. [Rate Limiting](#69-rate-limiting)
70. [Secrets and Environment Variables](#70-secrets-and-environment-variables)
71. [Node.js Permission Model](#71-nodejs-permission-model)
72. [Crypto Module](#72-crypto-module)
73. [File Uploads](#73-file-uploads)
74. [Email Sending](#74-email-sending)
75. [Background Jobs and Queues](#75-background-jobs-and-queues)
76. [Caching](#76-caching)
77. [Redis Concepts](#77-redis-concepts)
78. [Real-Time Applications](#78-real-time-applications)
79. [WebSockets](#79-websockets)
80. [Socket.IO Concept](#80-socketio-concept)
81. [Timers](#81-timers)
82. [Process Object](#82-process-object)
83. [Signals and Graceful Shutdown](#83-signals-and-graceful-shutdown)
84. [Child Processes](#84-child-processes)
85. [Worker Threads](#85-worker-threads)
86. [Cluster and Multi-Core Scaling](#86-cluster-and-multi-core-scaling)
87. [DNS, TCP, UDP, TLS, HTTP/2](#87-dns-tcp-udp-tls-http2)
88. [Compression](#88-compression)
89. [AsyncLocalStorage](#89-asynclocalstorage)
90. [Logging](#90-logging)
91. [Testing](#91-testing)
92. [Node.js Built-In Test Runner](#92-nodejs-built-in-test-runner)
93. [Unit, Integration, and End-to-End Tests](#93-unit-integration-and-end-to-end-tests)
94. [Mocking](#94-mocking)
95. [Debugging](#95-debugging)
96. [Performance Monitoring](#96-performance-monitoring)
97. [Memory Management and Garbage Collection](#97-memory-management-and-garbage-collection)
98. [Memory Leaks](#98-memory-leaks)
99. [CPU Profiling](#99-cpu-profiling)
100. [TypeScript with Node.js](#100-typescript-with-nodejs)
101. [Native TypeScript Type Stripping](#101-native-typescript-type-stripping)
102. [Configuration Management](#102-configuration-management)
103. [Clean Architecture](#103-clean-architecture)
104. [MVC Architecture](#104-mvc-architecture)
105. [Layered Architecture](#105-layered-architecture)
106. [Hexagonal / Ports and Adapters](#106-hexagonal--ports-and-adapters)
107. [Dependency Injection](#107-dependency-injection)
108. [Monolith vs Modular Monolith vs Microservices](#108-monolith-vs-modular-monolith-vs-microservices)
109. [Microservice Communication](#109-microservice-communication)
110. [API Gateway](#110-api-gateway)
111. [Message Brokers and Event-Driven Architecture](#111-message-brokers-and-event-driven-architecture)
112. [Idempotency](#112-idempotency)
113. [Retries, Timeout, Circuit Breaker](#113-retries-timeout-circuit-breaker)
114. [Dockerizing Node.js](#114-dockerizing-nodejs)
115. [Production Deployment](#115-production-deployment)
116. [Reverse Proxy](#116-reverse-proxy)
117. [Health Checks](#117-health-checks)
118. [Observability](#118-observability)
119. [CI/CD](#119-cicd)
120. [Node.js CLI Applications](#120-nodejs-cli-applications)
121. [Building npm Packages](#121-building-npm-packages)
122. [Modern Built-In APIs Worth Knowing](#122-modern-built-in-apis-worth-knowing)
123. [Common Anti-Patterns](#123-common-anti-patterns)
124. [Production Checklist](#124-production-checklist)
125. [Real-World Project Scenarios](#125-real-world-project-scenarios)
126. [Interview Questions](#126-interview-questions)
127. [Learning Roadmap](#127-learning-roadmap)
128. [Practice Projects](#128-practice-projects)
129. [Cheat Sheet](#129-cheat-sheet)
130. [Official References](#130-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize everything.

Use this learning order:

```text
JavaScript fundamentals
        ↓
Node runtime basics
        ↓
Modules
        ↓
Async programming
        ↓
File system + streams
        ↓
HTTP
        ↓
Express / API design
        ↓
Database
        ↓
Authentication + security
        ↓
Testing
        ↓
Architecture
        ↓
Performance
        ↓
Deployment
        ↓
Advanced Node internals
```

For each topic:

1. Read the explanation.
2. Type the example yourself.
3. Modify it.
4. Break it intentionally.
5. Understand the error.
6. Build one small practical use case.

That method is far more effective than copying code.

---

# 2. What Is Node.js?

Node.js is a **JavaScript runtime environment**.

A runtime is an environment that executes your code.

Historically, JavaScript mainly ran inside browsers. Node.js made it possible to run JavaScript outside the browser.

For example:

```bash
node app.js
```

Node.js can be used to build:

- REST APIs
- Web servers
- Real-time chat servers
- WebSocket servers
- Background workers
- Command-line tools
- Automation scripts
- ETL/data-processing scripts
- Microservices
- Serverless functions
- Development tools
- Build systems
- API gateways
- Bots
- Streaming systems
- File processors
- Backend-for-frontend services

### Simple mental model

```text
Your JavaScript
      ↓
    Node.js
      ↓
V8 + Node Core APIs + libuv + OS
      ↓
 Files / Network / Processes / Timers / CPU / Memory
```

### Important

Node.js is **not**:

- a programming language
- a web framework
- a database
- a browser
- the same thing as npm

JavaScript is the language.

Node.js is the runtime.

Express is a framework.

npm is a package manager and package registry ecosystem.

---

# 3. Node.js vs JavaScript vs Browser JavaScript

JavaScript syntax is largely the same, but the environment is different.

## Browser

A browser gives you APIs such as:

```js
document
window
localStorage
location
navigator
```

Example:

```js
document.querySelector('#title');
```

A normal Node.js server does not have a browser DOM, so this does not work:

```js
document.querySelector('#title');
// ReferenceError: document is not defined
```

## Node.js

Node.js gives you server/system APIs such as:

```js
process
Buffer
fs
path
http
crypto
stream
worker_threads
```

Example:

```js
import fs from 'node:fs';

const text = fs.readFileSync('./note.txt', 'utf8');
console.log(text);
```

## Modern overlap

Modern Node.js also implements several web-platform APIs, such as:

- `fetch`
- `Headers`
- `Request`
- `Response`
- `FormData`
- `AbortController`
- `URL`
- `URLSearchParams`
- `WebSocket` in modern releases
- Web Streams

This makes some browser/server code easier to share.

---

# 4. How Node.js Works Internally

A useful simplified architecture:

```text
┌───────────────────────────┐
│      Your JavaScript      │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│            V8             │
│ JS parsing and execution  │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│       Node.js APIs        │
│ fs/http/stream/crypto/... │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│           libuv           │
│ event loop / async I/O    │
│ thread pool / OS handles  │
└─────────────┬─────────────┘
              │
┌─────────────▼─────────────┐
│      Operating System     │
└───────────────────────────┘
```

## V8

V8 is the JavaScript engine used by Node.js.

It handles tasks such as:

- parsing JavaScript
- compiling JavaScript
- executing JavaScript
- memory allocation
- garbage collection

## libuv

libuv helps Node.js provide:

- the event loop
- asynchronous file operations
- networking
- timers
- thread-pool-backed operations
- cross-platform OS abstraction

## Important misconception

You may hear:

> “Node.js is single-threaded.”

A better statement is:

> Your normal JavaScript execution runs on a main JavaScript thread, while Node.js can use operating-system asynchronous facilities, a libuv thread pool, worker threads, and child processes for other work.

This difference matters greatly when learning performance.

---

# 5. Installing and Managing Node.js

Check installed versions:

```bash
node --version
npm --version
```

For production work, prefer a supported **LTS** version instead of choosing a release simply because it has the highest version number.

## Version managers

Version managers make it easy to switch between Node.js versions.

Popular approaches include:

- `nvm`
- `nvm-windows`
- `fnm`
- `volta`

Conceptually:

```bash
nvm install 24
nvm use 24
```

Why use a version manager?

Project A may require Node 22.

Project B may require Node 24.

A version manager prevents painful manual installations.

## Verify installation

```bash
node -v
npm -v
```

Start REPL:

```bash
node
```

Then:

```js
> 2 + 2
4
```

Exit:

```text
Ctrl + C
Ctrl + C
```

or:

```js
.exit
```

---

# 6. Your First Node.js Program

Create:

```text
hello.js
```

Add:

```js
const name = 'Node.js';

console.log(`Hello from ${name}`);
```

Run:

```bash
node hello.js
```

Output:

```text
Hello from Node.js
```

## Read command-line arguments

```js
console.log(process.argv);
```

Run:

```bash
node hello.js Shoeb
```

A more useful version:

```js
const name = process.argv[2] ?? 'Guest';

console.log(`Hello, ${name}`);
```

---

# 7. Node.js Project Structure

Create a project:

```bash
mkdir node-master-demo
cd node-master-demo
npm init -y
```

A small application might look like:

```text
node-master-demo/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── middleware/
│   ├── config/
│   └── utils/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Why separate `app.js` and `server.js`?

`app.js` can configure the application.

`server.js` can start listening.

This improves testability.

Example:

```js
// app.js
import express from 'express';

export const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

```js
// server.js
import { app } from './app.js';

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

Tests can import `app` without automatically opening a network port.

---

# 8. package.json Deep Dive

`package.json` describes your Node project.

Example:

```json
{
  "name": "invoice-api",
  "version": "1.0.0",
  "description": "Invoice processing API",
  "type": "module",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node --watch src/server.js",
    "test": "node --test"
  },
  "engines": {
    "node": ">=24"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

## Important fields

### `name`

Package/project name.

### `version`

Version following semantic versioning.

### `type`

```json
"type": "module"
```

means `.js` files use ECMAScript module behavior by default.

### `scripts`

Commands:

```bash
npm run dev
npm test
npm start
```

### `dependencies`

Packages required at runtime.

### `devDependencies`

Packages normally needed for development/build/testing.

Example:

```bash
npm install express
npm install --save-dev eslint
```

---

# 9. npm and Package Management

npm is used for managing packages.

## Install package

```bash
npm install express
```

Short form:

```bash
npm i express
```

## Development dependency

```bash
npm i -D eslint
```

## Uninstall

```bash
npm uninstall express
```

## Update

```bash
npm update
```

## View outdated dependencies

```bash
npm outdated
```

## Security audit

```bash
npm audit
```

## Clean deterministic install

For CI/CD:

```bash
npm ci
```

`npm ci` expects a lockfile and performs a clean install.

## package-lock.json

The lockfile records exact dependency resolution.

Commit it to source control for applications.

Why?

Two developers running:

```bash
npm install
```

should receive a predictable dependency tree.

## npx

Run package binaries without permanently installing them globally.

Example:

```bash
npx eslint .
```

---

# 10. Semantic Versioning

Version:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
4.7.2
```

- `4` = major
- `7` = minor
- `2` = patch

## Typical meaning

Patch:

```text
1.2.3 → 1.2.4
```

Bug fix, backward compatible.

Minor:

```text
1.2.3 → 1.3.0
```

New backward-compatible functionality.

Major:

```text
1.2.3 → 2.0.0
```

Potential breaking changes.

## Version ranges

```json
"library": "^2.3.4"
```

Caret generally allows compatible updates within the same major version.

```json
"library": "~2.3.4"
```

Tilde generally allows patch-level updates within `2.3.x`.

Exact:

```json
"library": "2.3.4"
```

Understanding version ranges is important when debugging “it worked yesterday” dependency problems.

---

# 11. JavaScript Knowledge Required for Node.js

Before becoming strong in Node.js, understand:

- variables
- primitive/reference types
- operators
- conditions
- loops
- functions
- arrow functions
- scope
- closures
- objects
- arrays
- destructuring
- spread/rest
- classes
- prototypes
- exceptions
- modules
- callbacks
- promises
- async/await
- iterators
- generators
- maps/sets
- optional chaining
- nullish coalescing

## Destructuring

```js
const user = {
  id: 1,
  name: 'Aisha'
};

const { id, name } = user;
```

## Rest parameters

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
```

## Optional chaining

```js
const city = customer.address?.city;
```

## Nullish coalescing

```js
const port = process.env.PORT ?? 3000;
```

This differs from `||`.

```js
const count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0
```

Use `??` when `0`, `false`, and empty strings can be valid values.

---

# 12. CommonJS Modules

Traditional Node.js module system.

## Export

```js
// math.cjs
function add(a, b) {
  return a + b;
}

module.exports = {
  add
};
```

## Import

```js
const { add } = require('./math.cjs');

console.log(add(2, 3));
```

## Other export style

```js
exports.multiply = (a, b) => a * b;
```

Important:

```js
exports = {};
```

does **not** replace `module.exports` as people sometimes expect.

---

# 13. ECMAScript Modules

Modern standard module system.

Set:

```json
{
  "type": "module"
}
```

Then:

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from './math.js';

console.log(add(2, 3));
```

## Default export

```js
export default function logger(message) {
  console.log(message);
}
```

Import:

```js
import logger from './logger.js';
```

## Dynamic import

```js
const module = await import('./feature.js');
```

Useful for:

- lazy loading
- optional functionality
- plugin systems

---

# 14. CommonJS vs ESM

| Topic | CommonJS | ESM |
|---|---|---|
| Import | `require()` | `import` |
| Export | `module.exports` | `export` |
| Typical extension | `.cjs` | `.mjs` |
| `.js` behavior | depends on package config | depends on package config |
| Standard | Node legacy ecosystem | JavaScript standard |
| Static analysis | weaker | stronger |

For new projects, ESM is usually a good default unless your ecosystem or existing codebase requires CommonJS.

## `__dirname` in ESM

In CommonJS:

```js
console.log(__dirname);
```

In ESM, use:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Modern Node versions also provide convenient `import.meta` properties; however, understand the portable URL-based pattern because you will see it often.

---

# 15. Node.js Global Objects

Useful globals include:

```js
console
process
Buffer
setTimeout
setInterval
setImmediate
queueMicrotask
URL
URLSearchParams
fetch
AbortController
globalThis
```

## `globalThis`

Preferred universal global object:

```js
globalThis.appName = 'Demo';
```

Avoid unnecessarily creating global state.

Global mutable state makes:

- testing harder
- concurrency reasoning harder
- module behavior unpredictable

---

# 16. The Event Loop

The event loop is one of the most important Node.js concepts.

Node.js can begin an asynchronous operation, continue doing other work, and later process the completion callback.

Example:

```js
import fs from 'node:fs';

console.log('A');

fs.readFile('./data.txt', 'utf8', () => {
  console.log('B');
});

console.log('C');
```

Likely output:

```text
A
C
B
```

Why?

`readFile()` does not make the JavaScript thread sit idle until disk I/O is finished.

## Simplified event-loop view

```text
        ┌───────────────┐
        │    timers     │
        └──────┬────────┘
               ↓
        ┌───────────────┐
        │ pending work  │
        └──────┬────────┘
               ↓
        ┌───────────────┐
        │     poll      │
        │   I/O work    │
        └──────┬────────┘
               ↓
        ┌───────────────┐
        │     check     │
        │ setImmediate  │
        └──────┬────────┘
               ↓
        ┌───────────────┐
        │ close callbacks│
        └───────────────┘
```

This is deliberately simplified. The real scheduling behavior also includes microtasks and Node-specific queues.

## Microtasks

Promise callbacks:

```js
Promise.resolve().then(() => {
  console.log('promise');
});
```

`queueMicrotask`:

```js
queueMicrotask(() => {
  console.log('microtask');
});
```

Node also has:

```js
process.nextTick(...)
```

Use `process.nextTick()` carefully. Excessive recursive scheduling can delay I/O.

---

# 17. Blocking vs Non-Blocking Code

## Blocking

```js
import fs from 'node:fs';

const data = fs.readFileSync('./large.txt', 'utf8');

console.log(data);
```

The main JavaScript thread waits.

## Non-blocking

```js
import fs from 'node:fs/promises';

const data = await fs.readFile('./large.txt', 'utf8');
console.log(data);
```

The async operation allows the runtime to make progress elsewhere while waiting for I/O.

## When synchronous APIs are acceptable

Synchronous code can be reasonable during:

- startup
- small CLI tools
- build scripts
- one-time configuration loading

Avoid blocking operations inside hot request handlers.

Bad:

```js
app.get('/report', (req, res) => {
  const file = fs.readFileSync('./huge-report.csv');
  res.send(file);
});
```

One slow blocking read can delay unrelated requests handled by the same event-loop thread.

---

# 18. Callbacks

A callback is a function passed to another function to be called later.

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet('Aisha', () => {
  console.log('Done');
});
```

## Error-first callbacks

Traditional Node pattern:

```js
fs.readFile('./file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
```

Convention:

```text
callback(error, result)
```

## Callback hell

```js
step1((err, a) => {
  step2(a, (err, b) => {
    step3(b, (err, c) => {
      step4(c, () => {
        // deeply nested
      });
    });
  });
});
```

Promises and async/await usually produce easier-to-read application code.

---

# 19. Promises

A Promise represents an operation that may complete later.

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
    resolve('Completed');
  } else {
    reject(new Error('Failed'));
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

Do not wrap something in `new Promise()` if the API already returns a promise.

Bad:

```js
return new Promise(async (resolve, reject) => {
  // unnecessary and error-prone
});
```

Prefer directly returning/awaiting the existing promise.

---

# 20. async/await

`async/await` is syntax built on Promises.

```js
async function loadUser() {
  const response = await fetch('https://example.com/api/user');
  return response.json();
}
```

Error handling:

```js
async function main() {
  try {
    const user = await loadUser();
    console.log(user);
  } catch (error) {
    console.error('Unable to load user', error);
  }
}
```

## Sequential vs concurrent

Sequential:

```js
const users = await getUsers();
const orders = await getOrders();
```

If independent, this wastes time.

Concurrent:

```js
const [users, orders] = await Promise.all([
  getUsers(),
  getOrders()
]);
```

Use concurrency when operations do not depend on each other.

---

# 21. Advanced Promise Patterns

## Promise.all

All must succeed.

```js
const results = await Promise.all([
  fetchUsers(),
  fetchProducts(),
  fetchOrders()
]);
```

If one rejects, `Promise.all()` rejects.

## Promise.allSettled

Wait for everything and inspect individual results.

```js
const results = await Promise.allSettled([
  sendEmailA(),
  sendEmailB(),
  sendEmailC()
]);
```

Useful for batch jobs where one failure should not stop all processing.

## Promise.race

Settles when the first promise settles.

```js
const result = await Promise.race([
  operation(),
  timeoutPromise()
]);
```

## Promise.any

Returns first fulfilled promise.

Useful when trying alternative replicas/providers.

---

# 22. Error Handling

Errors can come from:

- programming mistakes
- invalid input
- database failures
- network failures
- permission issues
- file errors
- external service failures
- timeouts

## Throw an Error object

Good:

```js
throw new Error('Invoice not found');
```

Avoid:

```js
throw 'Invoice not found';
```

## Custom errors

```js
class ValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}
```

Use:

```js
throw new ValidationError('Invalid invoice', [
  'invoiceNumber is required'
]);
```

## Operational vs programming errors

Operational:

- database temporarily unavailable
- invalid user input
- remote API timeout

Programming:

- accessing property of `undefined`
- wrong assumptions
- unhandled code path

Do not hide programming errors with blanket `try/catch` blocks.

---

# 23. AbortController and Cancellation

Cancellation is important for:

- HTTP timeouts
- user-aborted requests
- shutting down work
- preventing wasted resources

Example:

```js
const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort();
}, 3000);

try {
  const response = await fetch('https://example.com/slow', {
    signal: controller.signal
  });

  console.log(await response.text());
} finally {
  clearTimeout(timeout);
}
```

Modern code can also use timeout helpers where supported:

```js
const response = await fetch(url, {
  signal: AbortSignal.timeout(3000)
});
```

---

# 24. Events and EventEmitter

Node core uses an event-driven architecture extensively.

```js
import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

emitter.on('invoiceProcessed', invoice => {
  console.log('Processed:', invoice.id);
});

emitter.emit('invoiceProcessed', {
  id: 101
});
```

## `once`

```js
emitter.once('ready', () => {
  console.log('Runs only once');
});
```

## Real-world scenario

After an invoice is saved:

```text
invoice.created
    ├── send acknowledgement
    ├── write audit log
    └── update analytics
```

Be careful with in-process event emitters for critical distributed workflows.

If the process crashes, in-memory events disappear.

For durable enterprise workflows, consider a message broker.

---

# 25. Buffers

A Buffer represents binary data.

Use cases:

- files
- images
- PDFs
- TCP packets
- encryption
- compressed data
- Base64 conversion

Example:

```js
const buffer = Buffer.from('Hello');

console.log(buffer);
console.log(buffer.toString('utf8'));
```

Base64:

```js
const encoded = Buffer.from('secret').toString('base64');
console.log(encoded);

const decoded = Buffer.from(encoded, 'base64').toString('utf8');
console.log(decoded);
```

Important:

Base64 is **encoding**, not encryption.

---

# 26. File System

Node provides:

```js
node:fs
node:fs/promises
```

Prefer promise APIs in modern application code.

## Read text

```js
import { readFile } from 'node:fs/promises';

const text = await readFile('./data.txt', 'utf8');
```

## Write

```js
import { writeFile } from 'node:fs/promises';

await writeFile('./output.txt', 'Hello Node.js');
```

## Append

```js
import { appendFile } from 'node:fs/promises';

await appendFile('./app.log', 'Started\n');
```

## Directory

```js
import { mkdir } from 'node:fs/promises';

await mkdir('./uploads/invoices', {
  recursive: true
});
```

## Read directory

```js
import { readdir } from 'node:fs/promises';

const files = await readdir('./uploads');

console.log(files);
```

## Delete

```js
import { rm } from 'node:fs/promises';

await rm('./temp', {
  recursive: true,
  force: true
});
```

## Check file safely

Rather than “check then use,” often attempt the operation and handle the error.

Why?

```text
check file exists
      ↓
another process removes file
      ↓
open file
```

This is a race condition.

---

# 27. Paths

Never construct important paths by manually concatenating separators.

Bad:

```js
const file = folder + '/' + filename;
```

Use:

```js
import path from 'node:path';

const file = path.join(folder, filename);
```

Useful methods:

```js
path.join()
path.resolve()
path.basename()
path.dirname()
path.extname()
path.parse()
path.normalize()
```

Example:

```js
const file = '/uploads/invoice.pdf';

console.log(path.basename(file)); // invoice.pdf
console.log(path.extname(file));  // .pdf
```

## Security warning

Never blindly do:

```js
const file = path.join(uploadRoot, req.params.filename);
```

without validating that the final resolved path stays inside the allowed directory.

Otherwise, path traversal attacks such as:

```text
../../secret.txt
```

may become possible.

---

# 28. OS Module

```js
import os from 'node:os';

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus().length);
```

Use cases:

- diagnostics
- resource sizing
- platform-specific logic
- temporary directories

Temporary directory:

```js
console.log(os.tmpdir());
```

---

# 29. URL and URLSearchParams

Parse URLs with the `URL` class.

```js
const url = new URL(
  'https://example.com/invoices?page=2&status=pending'
);

console.log(url.pathname);
console.log(url.searchParams.get('page'));
```

Build query string:

```js
const params = new URLSearchParams({
  page: '1',
  limit: '20',
  status: 'approved'
});

console.log(params.toString());
```

---

# 30. Streams

Streams process data piece by piece instead of loading everything into memory.

Imagine a 5 GB file.

Bad approach:

```text
Read all 5 GB into RAM → process → write
```

Stream approach:

```text
read chunk
   ↓
process chunk
   ↓
write chunk
   ↓
repeat
```

Node stream types:

1. Readable
2. Writable
3. Duplex
4. Transform

Use cases:

- large files
- HTTP bodies
- compression
- encryption
- video streaming
- proxying
- CSV processing
- data exports

---

# 31. Readable Streams

Example:

```js
import fs from 'node:fs';

const stream = fs.createReadStream('./large.log', {
  encoding: 'utf8'
});

stream.on('data', chunk => {
  console.log('Chunk:', chunk.length);
});

stream.on('end', () => {
  console.log('Finished');
});

stream.on('error', error => {
  console.error(error);
});
```

Better abstraction when possible: use `pipeline()`.

---

# 32. Writable Streams

```js
import fs from 'node:fs';

const stream = fs.createWriteStream('./output.log');

stream.write('First line\n');
stream.write('Second line\n');
stream.end('Last line\n');
```

Events include:

```text
finish
error
close
drain
```

---

# 33. Transform and Duplex Streams

## Duplex

Can be read from and written to.

Example concept:

```text
TCP socket
```

## Transform

Input is transformed into output.

Examples:

- gzip compression
- encryption
- uppercase text transformation

```js
import { Transform } from 'node:stream';

const upper = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

process.stdin
  .pipe(upper)
  .pipe(process.stdout);
```

---

# 34. Backpressure

Backpressure occurs when the producer generates data faster than the consumer can handle it.

Example:

```text
Disk read: 500 MB/s
Consumer: 50 MB/s
```

Without flow control, memory usage may grow badly.

Node streams provide backpressure handling.

For writable streams:

```js
const canContinue = writable.write(chunk);

if (!canContinue) {
  // wait for 'drain'
}
```

Using `pipeline()` usually helps you handle stream flow safely.

---

# 35. Pipelines

```js
import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import zlib from 'node:zlib';

await pipeline(
  fs.createReadStream('./large.log'),
  zlib.createGzip(),
  fs.createWriteStream('./large.log.gz')
);
```

Advantages:

- proper error propagation
- cleanup
- backpressure handling
- clearer code

---

# 36. HTTP Server with Core Node.js

```js
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Hello'
  }));
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});
```

Node itself can build an HTTP server.

Frameworks like Express make routing and middleware easier, but understanding raw HTTP is important.

---

# 37. HTTP Request and Response Concepts

An HTTP request contains:

```text
method
URL
headers
body
```

Example:

```http
POST /api/invoices HTTP/1.1
Content-Type: application/json
Authorization: Bearer ...
```

Response contains:

```text
status code
headers
body
```

Common status codes:

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | Success, no body |
| 400 | Bad request |
| 401 | Authentication required/failed |
| 403 | Authenticated but forbidden |
| 404 | Not found |
| 409 | Conflict |
| 422 | Validation/domain input problem |
| 429 | Too many requests |
| 500 | Internal server error |
| 502 | Bad gateway |
| 503 | Service unavailable |
| 504 | Gateway timeout |

Do not return HTTP 200 for every result.

Bad:

```json
{
  "status": 500,
  "message": "Database failed"
}
```

with actual HTTP status 200.

Use the correct transport-level status.

---

# 38. Creating a REST API Without a Framework

```js
import http from 'node:http';

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/users') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify([
      { id: 1, name: 'Aisha' }
    ]));

    return;
  }

  res.writeHead(404, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    error: 'Not Found'
  }));
});

server.listen(3000);
```

This teaches why frameworks exist.

As APIs grow, you need:

- routing
- parsing
- validation
- middleware
- error handling
- security
- controllers

Frameworks organize these concerns.

---

# 39. Fetch API in Node.js

Modern Node.js includes a browser-compatible `fetch()`.

```js
const response = await fetch(
  'https://jsonplaceholder.typicode.com/todos/1'
);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

const data = await response.json();

console.log(data);
```

POST:

```js
const response = await fetch('https://example.com/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    productId: 5,
    quantity: 2
  })
});
```

Important:

`fetch()` does not reject merely because the server returns 404/500.

Check:

```js
response.ok
response.status
```

---

# 40. WebSocket Client in Modern Node.js

Modern Node.js provides web-compatible WebSocket capabilities.

Concept:

```js
const socket = new WebSocket('wss://example.com/socket');

socket.addEventListener('open', () => {
  socket.send('hello');
});

socket.addEventListener('message', event => {
  console.log(event.data);
});
```

For sophisticated server-side WebSocket applications, ecosystem libraries may still be useful depending on required features.

---

# 41. Express.js Fundamentals

Install:

```bash
npm i express
```

Example:

```js
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Aisha' }
  ]);
});

app.listen(3000);
```

Why Express?

It provides convenient abstractions for:

- routing
- middleware
- request parsing
- response helpers
- error pipeline

Learn core Node HTTP first, then Express becomes easier to understand.

---

# 42. Routing

```js
app.get('/users', getUsers);
app.post('/users', createUser);
app.get('/users/:id', getUserById);
app.patch('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
```

## Route parameters

Request:

```text
GET /users/42
```

```js
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});
```

## Query parameters

Request:

```text
GET /users?page=2&limit=20
```

```js
console.log(req.query.page);
console.log(req.query.limit);
```

---

# 43. Middleware

Middleware runs during the request/response pipeline.

```text
Request
   ↓
Logging middleware
   ↓
Authentication middleware
   ↓
Validation middleware
   ↓
Controller
   ↓
Response
```

Example:

```js
function requestLogger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(requestLogger);
```

Authentication:

```js
function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: 'Authentication required'
    });
  }

  next();
}
```

Important:

If middleware neither sends a response nor calls `next()`, the request may hang.

---

# 44. Controllers, Services, and Repositories

Avoid putting everything inside routes.

Bad:

```js
app.post('/invoice', async (req, res) => {
  // validate
  // perform 5 queries
  // calculate tax
  // send mail
  // update audit
  // create workflow
  // 200 lines...
});
```

Better:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Database
```

## Controller

Deals with HTTP.

```js
export async function createInvoiceController(req, res) {
  const invoice = await invoiceService.create(req.body);

  res.status(201).json(invoice);
}
```

## Service

Business rules.

```js
export async function createInvoice(data) {
  validateBusinessRules(data);

  return invoiceRepository.create(data);
}
```

## Repository

Persistence logic.

```js
export async function create(invoice) {
  return db.query(/* ... */);
}
```

Benefits:

- easier testing
- clearer responsibilities
- reusable logic
- easier database migration

---

# 45. Request Validation

Never trust client input.

Validate:

- required fields
- types
- length
- format
- ranges
- allowed values
- nested objects

Example conceptual schema using a validation library:

```js
const schema = {
  invoiceNumber: 'required string',
  amount: 'required positive number',
  currency: 'INR | USD | EUR'
};
```

Validate at the application boundary.

Bad:

```js
const amount = req.body.amount;
// directly use it everywhere
```

Good flow:

```text
Request
  ↓
Schema validation
  ↓
Normalized DTO
  ↓
Business logic
```

---

# 46. Centralized Error Handling

A production API should not repeat response logic everywhere.

Custom error:

```js
class AppError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}
```

Middleware:

```js
function errorHandler(error, req, res, next) {
  console.error(error);

  const statusCode = error.statusCode ?? 500;

  res.status(statusCode).json({
    error: {
      code: error.code ?? 'INTERNAL_ERROR',
      message:
        statusCode >= 500
          ? 'Internal server error'
          : error.message
    }
  });
}
```

Do not expose:

- stack traces
- SQL statements
- internal file paths
- secrets

to production clients.

---

# 47. REST API Design

Good resource-based URLs:

```text
GET    /api/invoices
POST   /api/invoices
GET    /api/invoices/:id
PATCH  /api/invoices/:id
DELETE /api/invoices/:id
```

Avoid:

```text
/getAllInvoices
/createNewInvoice
/deleteInvoiceById
```

## Nested resource

```text
GET /api/invoices/123/lines
```

## Actions that do not fit CRUD cleanly

Sometimes an action endpoint is reasonable:

```text
POST /api/invoices/123/approve
POST /api/invoices/123/cancel
```

Focus on clarity over artificial purity.

---

# 48. API Pagination, Filtering, Sorting, and Search

Example:

```text
GET /api/invoices?page=2&limit=25&status=pending&sort=-createdAt
```

Response:

```json
{
  "data": [],
  "pagination": {
    "page": 2,
    "limit": 25,
    "total": 240,
    "pages": 10
  }
}
```

For very large/changing datasets, cursor pagination can be better than offset pagination.

Example:

```text
GET /api/invoices?after=eyJpZCI6MTAwfQ&limit=25
```

Never allow arbitrary client-provided SQL column expressions.

Use an allow-list:

```js
const allowedSortFields = new Set([
  'createdAt',
  'invoiceNumber',
  'amount'
]);
```

---

# 49. Database Fundamentals

Node.js can talk to almost any database.

Categories:

## Relational

- PostgreSQL
- MySQL
- MariaDB
- SQL Server
- SQLite
- Oracle

Concepts:

- tables
- rows
- columns
- keys
- joins
- indexes
- transactions
- constraints

## Document

- MongoDB

Concepts:

- documents
- collections
- embedded objects

## Cache/key-value

- Redis

Choose database based on data and workload, not hype.

---

# 50. SQL Databases with Node.js

General pattern:

```text
Request
  ↓
Service
  ↓
Repository
  ↓
Connection Pool
  ↓
Database
```

Never create a fresh physical database connection for every simple request if the driver provides pooling.

Use parameterized queries.

Bad:

```js
const sql =
  `SELECT * FROM users WHERE email = '${email}'`;
```

This can create SQL injection vulnerabilities.

Good:

```js
const sql = 'SELECT * FROM users WHERE email = ?';
```

or PostgreSQL-style placeholders:

```js
const sql = 'SELECT * FROM users WHERE email = $1';
```

---

# 51. MySQL Example

Typical library:

```bash
npm i mysql2
```

Conceptual example:

```js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

const [rows] = await pool.execute(
  'SELECT id, name FROM users WHERE status = ?',
  ['ACTIVE']
);

console.log(rows);
```

## Insert

```js
const [result] = await pool.execute(
  'INSERT INTO users(name, email) VALUES (?, ?)',
  ['Aisha', 'aisha@example.com']
);

console.log(result.insertId);
```

---

# 52. PostgreSQL Example

Typical package:

```bash
npm i pg
```

Example:

```js
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const result = await pool.query(
  'SELECT id, name FROM users WHERE status = $1',
  ['ACTIVE']
);

console.log(result.rows);
```

Use:

```js
await pool.end();
```

during controlled shutdown where appropriate.

---

# 53. MongoDB Example

Install:

```bash
npm i mongodb
```

Example:

```js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL);

await client.connect();

const db = client.db('app');

const users = db.collection('users');

await users.insertOne({
  name: 'Aisha',
  status: 'ACTIVE'
});

const user = await users.findOne({
  name: 'Aisha'
});
```

MongoDB is not “SQL without SQL.”

Model documents according to access patterns.

---

# 54. ORMs and Query Builders

ORMs can provide:

- model definitions
- migrations
- associations
- query APIs
- validation
- transaction APIs

Examples in the Node ecosystem include tools such as:

- Prisma
- Sequelize
- TypeORM
- MikroORM
- Drizzle

Query builders may provide a middle ground between raw SQL and full ORM abstractions.

Important:

An ORM does not remove the need to understand:

- SQL
- indexes
- joins
- query plans
- transactions
- constraints
- locking

You can still create a slow query through an ORM.

---

# 55. Transactions

Use a transaction when multiple database changes must succeed or fail together.

Example:

```text
Create order
   ↓
Reserve inventory
   ↓
Create payment record
```

If inventory reservation fails, you may need to roll back the order creation.

Pseudo-code:

```js
const connection = await pool.getConnection();

try {
  await connection.beginTransaction();

  await createOrder(connection);
  await reserveInventory(connection);
  await createPaymentRecord(connection);

  await connection.commit();
} catch (error) {
  await connection.rollback();
  throw error;
} finally {
  connection.release();
}
```

Do not hold transactions open while waiting on slow external HTTP APIs unless the design truly requires it.

---

# 56. Connection Pooling

Opening database connections has cost.

A pool reuses connections.

```text
Application
   ↓
Connection Pool
├── Connection 1
├── Connection 2
├── Connection 3
└── ...
```

Do not blindly set pool size to a huge value.

If 50 app instances each open 100 DB connections:

```text
50 × 100 = 5000 connections
```

Your database may collapse.

Pool sizing is a system-level decision.

---

# 57. Database Performance

Learn to recognize:

- N+1 queries
- missing indexes
- `SELECT *`
- unbounded result sets
- large offset pagination
- excessive round trips
- lock contention
- long transactions
- connection pool exhaustion

Bad:

```js
const users = await getUsers();

for (const user of users) {
  user.orders = await getOrders(user.id);
}
```

100 users may create 101 queries.

Better approaches:

- joins
- batch query with `IN (...)`
- data loader pattern
- prefetching

---

# 58. Authentication Fundamentals

Authentication asks:

> Who are you?

Authorization asks:

> What are you allowed to do?

Never confuse them.

Authentication methods include:

- username/password
- session cookie
- JWT
- API key
- OAuth/OIDC
- SSO
- mutual TLS
- signed requests

---

# 59. Password Hashing

Never store plain-text passwords.

Never “encrypt” passwords for normal password storage.

Use a password hashing algorithm designed for passwords.

Common choices include:

- Argon2
- bcrypt
- scrypt

Node has a built-in `scrypt` implementation.

Concept:

```js
import {
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual
} from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);

async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const derivedKey = await scrypt(password, salt, 64);

  return `${salt}:${Buffer.from(derivedKey).toString('hex')}`;
}
```

Real applications need careful storage format/versioning and verification logic.

Use mature libraries and established security practices rather than inventing a custom password scheme.

---

# 60. Sessions and Cookies

Session model:

```text
Browser
  ↓ cookie containing session ID
Server
  ↓
Session Store
  ↓
User session data
```

Cookie example:

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax
```

Important cookie properties:

- `HttpOnly`
- `Secure`
- `SameSite`
- appropriate `Domain`
- appropriate `Path`
- expiration

Do not put sensitive server session state directly into an unprotected cookie.

---

# 61. JWT Authentication

A JWT is a signed token format.

Structure:

```text
header.payload.signature
```

Typical flow:

```text
Login
  ↓
Verify credentials
  ↓
Issue access token
  ↓
Client sends token
  ↓
API verifies token
```

Authorization header:

```http
Authorization: Bearer <token>
```

Important:

JWT payloads are commonly encoded, not encrypted.

Do not put secrets in them unless you are specifically using an encrypted-token design.

Validate:

- signature
- algorithm
- expiration
- issuer
- audience
- relevant claims

---

# 62. Refresh Tokens

Access token:

- short-lived
- sent often

Refresh token:

- longer-lived
- used to obtain new access tokens

A robust design may include:

- token rotation
- revocation
- device/session tracking
- reuse detection
- secure storage

Do not issue access tokens valid for years merely to avoid refresh-token design.

---

# 63. Authorization and RBAC

RBAC = Role-Based Access Control.

Example:

```text
USER
MANAGER
FINANCE
ADMIN
```

Middleware:

```js
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Forbidden'
      });
    }

    next();
  };
}
```

Use:

```js
app.post(
  '/invoices/:id/approve',
  requireAuth,
  requireRole('FINANCE', 'ADMIN'),
  approveInvoice
);
```

Real systems may need:

- role-based rules
- attribute-based access control
- resource ownership
- tenant isolation
- row-level authorization

---

# 64. OAuth 2.0 and OpenID Connect

OAuth 2.0 is primarily an authorization framework.

OpenID Connect adds identity/authentication concepts on top of OAuth 2.0.

Typical “Sign in with …” implementations use OIDC.

Do not implement OAuth/OIDC protocols from scratch unless you have strong reason and expertise.

Use mature providers/libraries.

Understand:

```text
authorization server
client
resource server
access token
refresh token
authorization code
PKCE
scope
redirect URI
ID token
```

---

# 65. Security Essentials

Security is not one middleware.

Protect against:

- SQL injection
- NoSQL injection
- command injection
- path traversal
- XSS
- CSRF
- SSRF
- insecure deserialization
- weak authentication
- broken authorization
- dependency vulnerabilities
- secret leakage
- excessive permissions
- denial of service
- unsafe file upload
- log injection
- prototype pollution
- open redirects

General rules:

1. Validate all external input.
2. Parameterize database queries.
3. Escape/encode output for its context.
4. Use least privilege.
5. Set request/body limits.
6. Keep dependencies updated.
7. Do not expose internal errors.
8. Use TLS.
9. Apply authentication and authorization separately.
10. Log security-relevant events without logging secrets.

---

# 66. CORS

CORS is a browser security mechanism controlling cross-origin access.

It is not an API authentication system.

Bad assumption:

> “My API uses CORS, so attackers cannot call it.”

Non-browser clients can call your API regardless of browser CORS restrictions.

CORS should be configured intentionally.

Example concept:

```js
const allowedOrigins = new Set([
  'https://app.example.com'
]);
```

Do not blindly use:

```text
Access-Control-Allow-Origin: *
```

for endpoints where credentials or business rules require stricter access.

---

# 67. CSRF

CSRF matters especially when browsers automatically send authentication credentials such as cookies.

Mitigations can include:

- SameSite cookies
- CSRF tokens
- origin checks
- proper CORS design

A JWT stored in a cookie can still create CSRF considerations.

The token format does not automatically solve browser security.

---

# 68. Injection Attacks

## SQL injection

Bad:

```js
`SELECT * FROM users WHERE id = ${req.query.id}`
```

Good:

```js
'SELECT * FROM users WHERE id = ?'
```

## Command injection

Dangerous:

```js
exec(`convert ${req.body.filename}`);
```

An attacker may inject shell syntax.

Prefer direct argument APIs:

```js
spawn('convert', [validatedFilename]);
```

Still validate inputs.

## Path injection/traversal

Validate resolved paths and allowed filenames.

---

# 69. Rate Limiting

Rate limiting helps protect:

- login endpoints
- password reset
- OTP endpoints
- expensive searches
- public APIs
- resource-intensive processing

Possible dimensions:

- IP
- user
- API key
- tenant
- endpoint

A distributed application should generally use a shared store or gateway-level rate limiter, not just process-local counters.

---

# 70. Secrets and Environment Variables

Use environment variables for deploy-specific configuration.

```bash
DB_HOST=localhost
DB_USER=app
PORT=3000
```

Access:

```js
const port = Number(process.env.PORT ?? 3000);
```

Do not commit production secrets.

`.gitignore`:

```gitignore
.env
```

Provide:

```text
.env.example
```

without real credentials.

Example:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

For mature production environments, use a dedicated secret manager.

---

# 71. Node.js Permission Model

Modern Node.js has a permission model that can restrict access to system resources.

Conceptually:

```text
Application asks to read file
        ↓
Node permission policy
        ↓
Allowed? → continue
Denied?  → error
```

This can reduce damage if code or a dependency attempts unexpected resource access.

Example concept:

```bash
node --permission --allow-fs-read=./config app.js
```

The exact permission flags evolve across Node versions, so verify the documentation for the version you deploy.

Security principle:

> A process should receive only the permissions it actually needs.

---

# 72. Crypto Module

Node provides:

```js
node:crypto
```

Use cases:

- random IDs
- hashing
- HMAC
- encryption
- signatures
- key generation
- password derivation
- TLS-related utilities

## Random UUID

```js
import { randomUUID } from 'node:crypto';

console.log(randomUUID());
```

## Hash

```js
import { createHash } from 'node:crypto';

const hash = createHash('sha256')
  .update('hello')
  .digest('hex');

console.log(hash);
```

Hashing is not encryption.

## HMAC

Useful for verifying message authenticity when parties share a secret.

```js
import { createHmac } from 'node:crypto';

const signature = createHmac('sha256', secret)
  .update(payload)
  .digest('hex');
```

When validating MACs/signatures represented as buffers, use constant-time comparison when appropriate.

---

# 73. File Uploads

File-upload endpoints are security-sensitive.

Validate:

- maximum size
- allowed content type
- extension
- actual file signature/magic bytes where appropriate
- filename
- destination path
- authorization

Do not trust:

```text
Content-Type: image/png
```

just because the client sent it.

Store generated filenames:

```js
const safeName = `${crypto.randomUUID()}.pdf`;
```

rather than directly using:

```text
../../server.js
```

from the client-provided filename.

For large files, stream instead of loading everything into memory.

---

# 74. Email Sending

A common Node email flow:

```text
API request
  ↓
Business operation
  ↓
Queue email job
  ↓
Return API response
  ↓
Email worker sends message
```

Why queue email?

Email providers can be slow or temporarily unavailable.

The user should not wait 20 seconds for an invoice API solely because an email provider is slow.

Email providers/libraries might use:

- SMTP
- provider HTTP APIs

Implement:

- retries
- idempotency
- delivery logging
- templates
- bounce handling where needed

---

# 75. Background Jobs and Queues

Use a queue when work should happen asynchronously and reliably.

Examples:

- send email
- process invoices
- generate PDF
- resize images
- OCR
- export reports
- sync ERP
- send notifications

Architecture:

```text
API
 ↓
Queue
 ↓
Worker 1
Worker 2
Worker 3
```

Popular external queue/broker technologies include:

- Redis-backed job queues
- RabbitMQ
- Kafka
- cloud queue services

Important concepts:

- acknowledgment
- retries
- dead-letter queue
- idempotency
- visibility timeout
- concurrency
- ordering
- poison messages

---

# 76. Caching

Cache data that is expensive to calculate/fetch and safe to reuse.

Example:

```text
Request user profile
      ↓
Check cache
  ↙       ↘
Hit       Miss
 ↓          ↓
Return    Query DB
             ↓
         Store cache
             ↓
           Return
```

Cache problems:

- stale data
- invalidation
- cache stampede
- memory use
- consistency

Famous rule:

> Caching makes reads faster by trading simplicity and freshness for performance.

---

# 77. Redis Concepts

Redis is often used for:

- cache
- session storage
- rate limiting
- distributed locks
- queue backing
- short-lived state

Example pseudo-code:

```js
const key = `user:${id}`;

let user = await redis.get(key);

if (!user) {
  user = await repository.getUser(id);

  await redis.set(
    key,
    JSON.stringify(user),
    { EX: 300 }
  );
}
```

Always decide:

- TTL
- invalidation strategy
- serialization format
- behavior if Redis is unavailable

Cache should not silently become your source of truth unless designed that way.

---

# 78. Real-Time Applications

Real-time scenarios:

- chat
- live notifications
- dashboards
- presence
- multiplayer systems
- live job progress

Common techniques:

- WebSocket
- Server-Sent Events
- long polling

Choose based on communication needs.

SSE is useful when server → client streaming is enough.

WebSocket is useful for bidirectional communication.

---

# 79. WebSockets

HTTP:

```text
request → response
```

WebSocket:

```text
persistent connection
client ↔ server
```

Typical architecture at scale:

```text
Client
  ↓
WebSocket server A ─┐
WebSocket server B ─┼→ Redis/pub-sub/broker
WebSocket server C ─┘
```

Why shared pub/sub?

A user connected to server A may need an event created by server C.

---

# 80. Socket.IO Concept

Socket.IO provides higher-level real-time abstractions such as:

- event-based messaging
- rooms
- reconnection
- fallback behaviors
- acknowledgments

Concept:

```js
io.on('connection', socket => {
  socket.on('joinRoom', roomId => {
    socket.join(roomId);
  });

  socket.on('message', data => {
    io.to(data.roomId).emit('message', data);
  });
});
```

Socket.IO is not identical to raw WebSocket protocol.

Use the correct client/server pair.

---

# 81. Timers

## setTimeout

```js
const timer = setTimeout(() => {
  console.log('Runs later');
}, 1000);
```

## clearTimeout

```js
clearTimeout(timer);
```

## setInterval

```js
const id = setInterval(() => {
  console.log('Repeating');
}, 5000);
```

Intervals can overlap conceptually if work takes longer than expected.

For jobs, often schedule the next execution only after the previous work completes.

## setImmediate

Schedules work for a later event-loop phase.

Do not build correctness around fragile assumptions comparing tiny `setTimeout(..., 0)` and `setImmediate()` timing unless you fully understand the context.

---

# 82. Process Object

`process` gives information/control over the running Node process.

Examples:

```js
console.log(process.pid);
console.log(process.platform);
console.log(process.arch);
console.log(process.cwd());
console.log(process.env.NODE_ENV);
```

## Exit code

Prefer:

```js
process.exitCode = 1;
```

when possible so pending stdout/stderr can finish naturally.

Direct:

```js
process.exit(1);
```

terminates immediately and can interrupt pending work.

---

# 83. Signals and Graceful Shutdown

Production servers should shut down cleanly.

Typical signals:

```text
SIGTERM
SIGINT
```

Example:

```js
const server = app.listen(port);

async function shutdown(signal) {
  console.log(`${signal} received`);

  server.close(async () => {
    try {
      await db.close();
      process.exitCode = 0;
    } catch (error) {
      console.error(error);
      process.exitCode = 1;
    }
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
```

Graceful shutdown may need to:

- stop accepting traffic
- finish in-flight HTTP requests
- stop consumers
- close DB pools
- flush telemetry
- close sockets
- enforce a maximum shutdown timeout

---

# 84. Child Processes

Node can launch external processes.

APIs include:

```text
spawn
exec
execFile
fork
```

## `spawn`

Good for streaming output.

```js
import { spawn } from 'node:child_process';

const child = spawn('node', ['script.js']);

child.stdout.on('data', chunk => {
  process.stdout.write(chunk);
});
```

## `exec`

Collects command output in memory and usually involves a shell.

Be very careful with untrusted input.

## `fork`

Designed for launching another Node process with IPC support.

---

# 85. Worker Threads

Worker threads execute JavaScript in parallel threads.

Use them for CPU-intensive JavaScript.

Examples:

- image transformation
- large calculations
- parsing huge datasets
- cryptographic CPU work
- compression logic
- ML preprocessing
- expensive transformations

Do **not** use worker threads merely because a database query is slow.

I/O already benefits from Node's async model.

Main:

```js
import { Worker } from 'node:worker_threads';

const worker = new Worker(
  new URL('./worker.js', import.meta.url),
  {
    workerData: {
      value: 42
    }
  }
);

worker.on('message', result => {
  console.log(result);
});
```

Worker:

```js
import {
  parentPort,
  workerData
} from 'node:worker_threads';

const result = workerData.value * 2;

parentPort.postMessage(result);
```

For repeated work, prefer a worker pool instead of creating a new worker for every tiny task.

---

# 86. Cluster and Multi-Core Scaling

A single Node process does not automatically execute one request handler across every CPU core.

Ways to scale:

- multiple application processes
- container replicas
- orchestration
- process managers
- cluster-style architecture

Typical production architecture:

```text
           Load Balancer
          /      |      \
     Node A   Node B   Node C
```

Keep instances stateless when possible.

Do not store critical user session state only in process memory if requests may hit different replicas.

---

# 87. DNS, TCP, UDP, TLS, HTTP/2

Node exposes low-level networking modules.

## DNS

```js
import dns from 'node:dns/promises';

const result = await dns.lookup('example.com');

console.log(result);
```

## TCP

```js
import net from 'node:net';

const server = net.createServer(socket => {
  socket.write('Hello\n');
  socket.end();
});

server.listen(9000);
```

## UDP

Use:

```text
node:dgram
```

Useful for protocols where connectionless datagrams are appropriate.

## TLS

Use:

```text
node:tls
```

Provides TLS functionality built over Node/OpenSSL capabilities.

## HTTP/2

Use:

```text
node:http2
```

Most business APIs operate behind gateways/proxies, but understanding these modules helps you understand the stack below Express.

---

# 88. Compression

Node provides:

```js
node:zlib
```

Example:

```js
import {
  createGzip
} from 'node:zlib';
import {
  createReadStream,
  createWriteStream
} from 'node:fs';
import {
  pipeline
} from 'node:stream/promises';

await pipeline(
  createReadStream('./report.csv'),
  createGzip(),
  createWriteStream('./report.csv.gz')
);
```

Compression saves bandwidth but consumes CPU.

Do not compress already highly compressed formats unnecessarily.

---

# 89. AsyncLocalStorage

`AsyncLocalStorage` lets you preserve context across asynchronous operations.

Excellent use case:

```text
Request ID / correlation ID
```

Instead of passing request ID through every function:

```js
serviceA(requestId);
serviceB(requestId);
repository(requestId);
```

you can maintain asynchronous context.

Example:

```js
import { AsyncLocalStorage } from 'node:async_hooks';

const requestContext = new AsyncLocalStorage();

function log(message) {
  const context = requestContext.getStore();

  console.log({
    requestId: context?.requestId,
    message
  });
}

app.use((req, res, next) => {
  requestContext.run(
    {
      requestId: crypto.randomUUID()
    },
    next
  );
});
```

This is especially useful for structured logs and tracing.

---

# 90. Logging

`console.log()` is useful during learning, but production systems usually need structured logging.

Prefer:

```json
{
  "level": "info",
  "time": "2026-08-12T10:00:00Z",
  "requestId": "abc",
  "route": "/api/invoices",
  "durationMs": 42,
  "message": "request completed"
}
```

over:

```text
Everything worked.
```

Useful levels:

```text
trace
debug
info
warn
error
fatal
```

Never log:

- passwords
- raw access tokens
- refresh tokens
- private keys
- full payment-card details
- unnecessary personal data

---

# 91. Testing

Tests increase confidence that changes do not break behavior.

Main categories:

```text
Unit
Integration
End-to-End
```

You need all three, but not necessarily in equal amounts.

## Good test characteristics

Tests should be:

- deterministic
- isolated when appropriate
- readable
- fast enough for their layer
- behavior-focused
- easy to diagnose when failing

Avoid tests that merely duplicate implementation details.

---

# 92. Node.js Built-In Test Runner

Modern Node.js includes a built-in test runner.

Example:

```js
import test from 'node:test';
import assert from 'node:assert/strict';

function add(a, b) {
  return a + b;
}

test('add returns sum', () => {
  assert.equal(add(2, 3), 5);
});
```

Run:

```bash
node --test
```

Subtests:

```js
test('user service', async t => {
  await t.test('creates user', () => {
    // ...
  });

  await t.test('rejects duplicate email', () => {
    // ...
  });
});
```

This means many projects can start testing without immediately adding a third-party test framework.

---

# 93. Unit, Integration, and End-to-End Tests

## Unit test

Tests one small unit.

```text
calculateTax()
```

No real database.

## Integration test

Tests components together.

```text
repository + real/test database
```

## End-to-end

Tests the application from the outside.

```text
HTTP request
   ↓
API
   ↓
Service
   ↓
Database
   ↓
HTTP response
```

Example scenario:

```text
POST /api/invoices
→ 201
→ row exists in database
→ response contains generated ID
```

---

# 94. Mocking

Mocks replace dependencies in tests.

Example:

```js
const fakeRepository = {
  async getUser(id) {
    return {
      id,
      name: 'Test User'
    };
  }
};
```

Use mocks to isolate behavior.

Do not mock everything.

If every interaction is mocked, the test may prove only that your mocks agree with your code.

Integration tests catch real mismatches.

---

# 95. Debugging

## Built-in debugger

```bash
node inspect app.js
```

## Chrome/IDE inspector

```bash
node --inspect app.js
```

Break immediately:

```bash
node --inspect-brk app.js
```

Then attach Chrome DevTools or your IDE.

## Useful debugging strategy

1. Reproduce reliably.
2. Minimize the failing case.
3. Inspect actual values.
4. Check assumptions.
5. Read stack trace from first relevant application frame.
6. Add targeted logging.
7. Write a failing test.
8. Fix root cause.
9. Keep regression test.

Do not randomly change code until the error disappears.

---

# 96. Performance Monitoring

Performance questions should be measured.

Observe:

- request latency
- throughput
- event-loop delay
- CPU
- memory
- GC activity
- database latency
- dependency latency
- queue depth
- error rate

Node provides modules such as:

```text
node:perf_hooks
node:v8
node:inspector
node:diagnostics_channel
```

Do not optimize based on intuition alone.

---

# 97. Memory Management and Garbage Collection

JavaScript allocates objects in managed memory.

V8's garbage collector reclaims objects that are no longer reachable.

Example:

```js
function createUser() {
  const user = {
    name: 'Aisha'
  };

  return user;
}
```

When nothing can reach an object anymore, it can eventually be garbage collected.

## Memory categories you may observe

- heap
- external memory
- buffers
- code
- native allocations

Check memory:

```js
console.log(process.memoryUsage());
```

---

# 98. Memory Leaks

A memory leak occurs when objects remain reachable even though the application no longer needs them.

Common causes:

- unbounded arrays/maps
- event listeners never removed
- timers never cleared
- accidental global state
- caches without eviction
- retained closures
- socket/request references
- large buffers

Example:

```js
const requests = [];

app.use((req, res, next) => {
  requests.push(req);
  next();
});
```

This can retain every request indefinitely.

## Cache leak

Bad:

```js
const cache = new Map();

function cacheEverything(key, value) {
  cache.set(key, value);
}
```

No TTL.

No maximum size.

No eviction.

Eventually memory may grow without bound.

---

# 99. CPU Profiling

If CPU is high:

1. reproduce load
2. capture profile
3. find hot functions
4. distinguish app code vs dependency code
5. optimize algorithm/query/work distribution
6. measure again

Potential causes:

- massive JSON parsing
- regex backtracking
- tight loops
- synchronous crypto/compression
- inefficient algorithms
- template generation
- image/OCR work
- accidental infinite loop

CPU-heavy work can block the event loop.

Use worker threads or external workers when appropriate.

---

# 100. TypeScript with Node.js

TypeScript adds static type syntax and tooling on top of JavaScript.

Example:

```ts
type User = {
  id: number;
  name: string;
};

function formatUser(user: User): string {
  return `${user.id}: ${user.name}`;
}
```

Benefits:

- earlier error detection
- refactoring support
- IDE completion
- clearer contracts
- easier large-codebase navigation

Typical full TypeScript setup uses:

- TypeScript compiler
- `tsconfig.json`
- a build or runtime tool
- type checking

Example:

```bash
npm i -D typescript
```

Initialize:

```bash
npx tsc --init
```

For large production codebases, TypeScript is often worth learning after you understand JavaScript fundamentals.

---

# 101. Native TypeScript Type Stripping

Modern Node.js can directly execute a subset of TypeScript syntax by stripping erasable type syntax.

Example:

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet('Node'));
```

Run on a supported modern Node version:

```bash
node app.ts
```

Important limitations of native type stripping:

- it does not perform type checking
- Node does not use `tsconfig.json` to transform your program
- some TypeScript syntax that requires generated JavaScript is unsupported
- `.tsx` is not handled by this lightweight mechanism
- complex TypeScript projects may still need a full TypeScript toolchain

Use native stripping for lightweight cases.

Use a full TypeScript setup when you need:

- type checking
- full compiler behavior
- path mappings
- transformations
- ecosystem tooling
- framework-specific TS builds

---

# 102. Configuration Management

Separate configuration from business logic.

Bad:

```js
const dbHost = '10.10.12.40';
const apiKey = 'secret-key';
```

Better:

```js
const config = {
  port: Number(process.env.PORT ?? 3000),
  dbHost: requireEnv('DB_HOST'),
  dbUser: requireEnv('DB_USER')
};
```

Validation:

```js
function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}
```

Fail fast during startup instead of discovering missing configuration after receiving production traffic.

---

# 103. Clean Architecture

Goal:

Business logic should not depend directly on frameworks/databases.

Simplified:

```text
┌─────────────────────────┐
│ Framework / HTTP / DB   │
├─────────────────────────┤
│ Adapters / Repositories │
├─────────────────────────┤
│ Application Use Cases   │
├─────────────────────────┤
│ Domain                  │
└─────────────────────────┘
```

Example:

```js
class ApproveInvoice {
  constructor(invoiceRepository) {
    this.invoiceRepository = invoiceRepository;
  }

  async execute(invoiceId, approver) {
    const invoice =
      await this.invoiceRepository.findById(invoiceId);

    invoice.approve(approver);

    await this.invoiceRepository.save(invoice);

    return invoice;
  }
}
```

The use case does not care whether persistence is:

- MySQL
- PostgreSQL
- MongoDB
- mock repository

That improves maintainability and testing.

---

# 104. MVC Architecture

MVC:

```text
Model
View
Controller
```

For backend APIs, people often adapt MVC:

```text
Route → Controller → Model/Service
```

MVC is simple and useful for smaller applications.

Avoid turning controllers into giant business-logic files.

---

# 105. Layered Architecture

A common enterprise structure:

```text
Presentation
   ↓
Application / Service
   ↓
Domain
   ↓
Data Access
```

Example:

```text
routes/
controllers/
services/
repositories/
models/
```

Each layer should have a clear responsibility.

Bad dependency direction:

```text
Repository imports Express request object
```

A repository should not care about HTTP.

---

# 106. Hexagonal / Ports and Adapters

Core business logic defines interfaces (“ports”).

External systems implement adapters.

```text
             HTTP Adapter
                  ↓
          ┌───────────────┐
Database →│ Business Core │← Message Queue
Adapter   └───────────────┘
                  ↑
             CLI Adapter
```

Useful when:

- business rules are complex
- integrations change
- testing matters
- multiple interfaces call the same core logic

---

# 107. Dependency Injection

Instead of creating dependencies internally:

```js
class UserService {
  constructor() {
    this.repository = new MySqlUserRepository();
  }
}
```

inject them:

```js
class UserService {
  constructor(repository) {
    this.repository = repository;
  }
}
```

Production:

```js
const service =
  new UserService(new MySqlUserRepository());
```

Test:

```js
const service =
  new UserService(new FakeUserRepository());
```

This reduces coupling.

---

# 108. Monolith vs Modular Monolith vs Microservices

## Monolith

One deployable application.

Advantages:

- simple deployment
- simple debugging
- local transactions
- easy development initially

## Modular monolith

One deployment, but strongly separated internal modules.

Example:

```text
modules/
├── invoice/
├── workflow/
├── vendor/
├── payment/
└── auth/
```

Often an excellent choice.

## Microservices

Multiple independently deployable services.

Advantages:

- independent scaling
- team autonomy
- failure isolation possibilities
- technology flexibility

Costs:

- network failures
- observability complexity
- distributed transactions
- deployment complexity
- versioning
- data ownership
- eventual consistency

Do not choose microservices simply because a project is “enterprise.”

---

# 109. Microservice Communication

## Synchronous

HTTP/gRPC:

```text
Service A → Service B → response
```

Simple but creates temporal coupling.

## Asynchronous

Message broker:

```text
Service A → event → broker → Service B
```

Useful for:

- decoupling
- background processing
- fan-out
- resilience

But introduces:

- eventual consistency
- duplicate delivery
- message ordering questions
- retry semantics

---

# 110. API Gateway

Gateway sits between clients and services.

```text
Clients
  ↓
API Gateway
 ├── Auth service
 ├── Invoice service
 ├── Payment service
 └── Vendor service
```

Possible responsibilities:

- routing
- authentication
- rate limiting
- TLS termination
- request limits
- logging
- API versioning
- aggregation

Do not put all business logic into the gateway.

---

# 111. Message Brokers and Event-Driven Architecture

Event:

```json
{
  "eventId": "uuid",
  "type": "invoice.approved",
  "invoiceId": 123,
  "occurredAt": "2026-08-12T10:00:00Z"
}
```

Consumers:

```text
invoice.approved
   ├── ERP posting
   ├── notification
   ├── analytics
   └── audit
```

Important design topics:

- event schema
- versioning
- idempotency
- ordering
- retries
- dead-letter handling
- tracing
- delivery semantics

Assume messages may be delivered more than once unless your infrastructure explicitly guarantees otherwise.

---

# 112. Idempotency

An idempotent operation can be retried without creating unintended duplicate effects.

Payment example:

Client retries because network timed out.

Without idempotency:

```text
Payment created twice
```

With key:

```http
Idempotency-Key: 89b1...
```

Server stores outcome for that key.

Repeated request returns the same logical result.

Use for:

- payments
- invoice creation
- ERP posting
- job processing
- external callbacks

---

# 113. Retries, Timeout, Circuit Breaker

Every network call needs a timeout strategy.

Bad:

```js
await callERP();
// may hang longer than business flow allows
```

Better:

```js
await callERP({
  signal: AbortSignal.timeout(5000)
});
```

## Retries

Retry only failures likely to be transient.

Good candidates:

- connection reset
- 503
- 429 with policy
- temporary timeout

Do not blindly retry:

- invalid credentials
- validation errors
- permanent 404
- non-idempotent operation without protection

Use exponential backoff + jitter.

## Circuit breaker

If a dependency is repeatedly failing:

```text
Closed → failures → Open
                  ↓
            fail fast
                  ↓
             Half-open
                  ↓
             test recovery
```

This can reduce cascading failures.

---

# 114. Dockerizing Node.js

Example Dockerfile:

```dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production

USER node

CMD ["node", "src/server.js"]
```

Important improvements depend on the app:

- multi-stage builds
- non-root user
- minimal runtime image
- `.dockerignore`
- health check
- pinned image policy
- no secrets baked into image

`.dockerignore`:

```text
node_modules
npm-debug.log
.git
.env
coverage
```

---

# 115. Production Deployment

Possible deployment platforms:

- Linux VM
- Windows Server
- container platform
- Kubernetes
- serverless
- managed application platform

Typical architecture:

```text
Internet
   ↓
Load Balancer / Reverse Proxy
   ↓
Node instances
   ↓
Database / Cache / Queue
```

Production requirements:

- TLS
- logs
- metrics
- health checks
- graceful shutdown
- restart policy
- resource limits
- secrets
- backups
- monitoring
- alerts

---

# 116. Reverse Proxy

Node applications are frequently placed behind:

- Nginx
- Apache
- IIS
- cloud load balancers
- Kubernetes ingress/gateway

Responsibilities may include:

- TLS termination
- routing
- compression
- static files
- buffering
- connection management
- request limits

If Express is behind a trusted proxy, configure proxy trust appropriately before relying on forwarded client IP/protocol values.

---

# 117. Health Checks

Useful endpoints:

```text
/health/live
/health/ready
```

## Liveness

Is the process alive?

```json
{
  "status": "ok"
}
```

## Readiness

Can it serve traffic?

May check essential dependencies.

Do not make liveness depend on every external service.

Otherwise one dependency outage can cause constant process restarts.

---

# 118. Observability

Three pillars commonly discussed:

```text
Logs
Metrics
Traces
```

## Logs

What happened?

## Metrics

How often/how much?

Examples:

```text
requests/sec
p95 latency
error %
memory MB
CPU %
```

## Traces

Where did time go across services?

```text
API → Auth → Invoice → ERP
```

Correlation IDs and trace context are critical for distributed systems.

---

# 119. CI/CD

Typical pipeline:

```text
Commit
  ↓
Install dependencies
  ↓
Lint
  ↓
Type check
  ↓
Unit tests
  ↓
Integration tests
  ↓
Security checks
  ↓
Build image/artifact
  ↓
Deploy
  ↓
Health verification
```

Use:

```bash
npm ci
```

in CI for repeatable installs.

Never put production secrets directly in source-controlled pipeline files.

---

# 120. Node.js CLI Applications

Node is excellent for command-line tools.

Basic:

```js
const [command, ...args] = process.argv.slice(2);

if (command === 'greet') {
  console.log(`Hello ${args[0] ?? 'Guest'}`);
}
```

Run:

```bash
node cli.js greet Aisha
```

## Shebang

Unix-like environment:

```js
#!/usr/bin/env node

console.log('CLI started');
```

Package:

```json
{
  "bin": {
    "mytool": "./src/cli.js"
  }
}
```

CLI concerns:

- arguments
- flags
- exit codes
- stdin/stdout/stderr
- configuration
- interactive prompts
- progress
- errors

---

# 121. Building npm Packages

Package design topics:

- public API
- semantic versioning
- `exports`
- ESM/CJS compatibility
- TypeScript declarations
- tests
- README
- license
- publishing files
- changelog

Example exports:

```json
{
  "exports": {
    ".": "./src/index.js",
    "./logger": "./src/logger.js"
  }
}
```

Avoid exposing every internal file unintentionally.

Design a stable public surface.

---

# 122. Modern Built-In APIs Worth Knowing

Modern Node.js includes many powerful built-ins.

Learn at least what these modules/APIs are for:

```text
node:assert
node:async_hooks
node:buffer
node:child_process
node:cluster
node:crypto
node:dgram
node:diagnostics_channel
node:dns
node:events
node:fs
node:http
node:http2
node:https
node:inspector
node:module
node:net
node:os
node:path
node:perf_hooks
node:process
node:readline
node:stream
node:test
node:timers
node:tls
node:url
node:util
node:v8
node:vm
node:worker_threads
node:zlib
```

Also know built-in/web-compatible globals such as:

```text
fetch
AbortController
URL
URLSearchParams
FormData
Headers
Request
Response
WebSocket
ReadableStream
WritableStream
TransformStream
crypto
```

Not every API belongs in every application.

The goal is to know what exists so you do not install dependencies for functionality Node already provides well.

---

# 123. Common Anti-Patterns

## 1. Blocking the event loop

Bad:

```js
fs.readFileSync(...)
```

inside frequent request handlers.

## 2. Giant controller

```text
route + validation + SQL + email + workflow
all in one function
```

## 3. Unbounded concurrency

Bad:

```js
await Promise.all(
  millionItems.map(processItem)
);
```

This may launch far too much work at once.

Use bounded concurrency.

## 4. Missing timeout

Every remote request waits forever.

## 5. Swallowing errors

```js
try {
  await work();
} catch {}
```

## 6. Returning internal errors

```js
res.status(500).json({
  sql: error.sql,
  stack: error.stack
});
```

## 7. Secrets in source

```js
const password = 'Prod@123';
```

## 8. Trusting client role

```json
{
  "role": "ADMIN"
}
```

Authorization must come from trusted server-side identity/claims.

## 9. Using memory as distributed state

```js
const sessions = {};
```

fails when there are multiple replicas unless architecture accounts for it.

## 10. No graceful shutdown

Containers terminate while requests/database writes are active.

## 11. Async `forEach`

Bad:

```js
items.forEach(async item => {
  await processItem(item);
});
```

`forEach` does not await those callbacks.

Sequential:

```js
for (const item of items) {
  await processItem(item);
}
```

Concurrent:

```js
await Promise.all(
  items.map(processItem)
);
```

## 12. `await` in unnecessary sequence

Bad:

```js
const a = await getA();
const b = await getB();
```

when independent.

Better:

```js
const [a, b] = await Promise.all([
  getA(),
  getB()
]);
```

## 13. One catch-all module

```text
utils.js
```

with 4,000 unrelated lines.

Organize utilities by domain/responsibility.

---

# 124. Production Checklist

Before production, review:

## Runtime

- [ ] Supported Node.js LTS release
- [ ] Version pinned/documented
- [ ] `NODE_ENV=production` where relevant
- [ ] graceful shutdown implemented
- [ ] resource limits understood

## Dependencies

- [ ] lockfile committed
- [ ] `npm ci` used in CI
- [ ] dependency audit/review
- [ ] unnecessary dependencies removed

## Configuration

- [ ] secrets outside repository
- [ ] environment validated at startup
- [ ] `.env` ignored
- [ ] production config documented

## HTTP

- [ ] body-size limits
- [ ] timeouts
- [ ] correct status codes
- [ ] request IDs
- [ ] CORS explicitly configured
- [ ] proxy settings correct

## Security

- [ ] authentication tested
- [ ] authorization tested
- [ ] SQL queries parameterized
- [ ] file uploads restricted
- [ ] rate limiting on sensitive routes
- [ ] TLS used
- [ ] sensitive logs removed
- [ ] dependency vulnerabilities reviewed
- [ ] least privilege applied

## Database

- [ ] connection pool configured
- [ ] indexes reviewed
- [ ] migrations automated
- [ ] transaction boundaries correct
- [ ] backups tested

## Reliability

- [ ] external calls have timeouts
- [ ] retry policy intentional
- [ ] idempotency where needed
- [ ] queue dead-letter strategy
- [ ] shutdown drains work

## Observability

- [ ] structured logs
- [ ] health endpoints
- [ ] metrics
- [ ] alerts
- [ ] trace/correlation IDs

## Testing

- [ ] unit tests
- [ ] integration tests
- [ ] critical end-to-end flows
- [ ] failure paths tested

---

# 125. Real-World Project Scenarios

This section connects Node concepts to actual systems.

---

## Scenario 1 — Invoice Upload and OCR API

Requirement:

```text
Upload PDF/JPG
↓
Validate
↓
Store
↓
OCR
↓
Extract fields
↓
Return JSON
```

Suggested architecture:

```text
POST /api/invoices
      ↓
Upload validation
      ↓
Store object/file
      ↓
Create DB record
      ↓
Queue OCR job
      ↓
Return 202 Accepted
```

Worker:

```text
Queue
 ↓
OCR worker
 ↓
Extract text
 ↓
Field mapping
 ↓
Validation
 ↓
Update invoice
 ↓
Emit invoice.processed
```

Why queue OCR?

OCR can be CPU/GPU intensive and slow.

Do not block API workers unnecessarily.

Relevant Node concepts:

- streams
- file system
- queues
- worker processes
- validation
- database
- events
- structured logging
- idempotency

---

## Scenario 2 — High-Traffic Product API

Requirement:

```text
GET /api/products/:id
```

Architecture:

```text
Request
 ↓
Auth/rate limit
 ↓
Cache
 ↙   ↘
hit   miss
 ↓      ↓
return  DB
         ↓
       cache
         ↓
       return
```

Relevant concepts:

- Redis
- connection pool
- caching
- metrics
- load balancing
- stateless services

---

## Scenario 3 — ERP Posting

Requirement:

After finance approval, send document to ERP.

Naive:

```text
Approve API
 ↓
Call ERP
 ↓
Wait 30 sec
 ↓
Response
```

Better:

```text
Approve API
 ↓
DB transaction
 ↓
Outbox/event
 ↓
Return success
```

Worker:

```text
Posting event
 ↓
Call ERP with timeout
 ↓
Retry transient error
 ↓
Store external reference
```

Add:

- idempotency
- retry
- dead-letter handling
- audit
- correlation ID

---

## Scenario 4 — Chat System

```text
User A ─┐
        ├─ WebSocket servers ─ Redis/pubsub ─ DB
User B ─┘
```

Need:

- authentication during socket connection
- room authorization
- message persistence
- reconnection
- presence
- rate limiting

---

## Scenario 5 — Report Export

User requests a 3-million-row CSV.

Bad:

```js
const allRows = await db.query(...);
const csv = convertAllToString(allRows);
res.send(csv);
```

Potential massive memory usage.

Better:

```text
DB cursor/stream
       ↓
Transform rows to CSV
       ↓
gzip if appropriate
       ↓
HTTP/file stream
```

This is where streams shine.

---

## Scenario 6 — Image Processing

Uploading 100 images and resizing them in the main request thread can create CPU contention.

Options:

- worker-thread pool
- separate worker service
- job queue

Architecture:

```text
Upload API
 ↓
Object storage
 ↓
Queue
 ↓
Image worker pool
```

---

## Scenario 7 — Payment Webhook

Provider may send the same webhook more than once.

Flow:

```text
Webhook
 ↓
Verify signature
 ↓
Check event ID
 ↓
Already processed?
   ├─ Yes → return success
   └─ No  → process transaction
```

This is idempotency.

---

## Scenario 8 — Multi-Tenant SaaS

Every query must be scoped by tenant.

Bad:

```sql
SELECT * FROM invoices WHERE id = ?
```

Better:

```sql
SELECT *
FROM invoices
WHERE id = ?
  AND tenant_id = ?
```

Authorization must enforce tenant identity server-side.

Never trust tenant ID merely because client sent it.

---

# 126. Interview Questions

## Beginner

### What is Node.js?

A JavaScript runtime for executing JavaScript outside the browser, commonly used for server-side and tooling workloads.

### Is Node.js a framework?

No.

### What is npm?

Package manager/registry ecosystem used by Node developers.

### Difference between `dependencies` and `devDependencies`?

Runtime dependencies vs primarily development/build/test dependencies.

### What is package-lock.json?

A lockfile recording dependency resolution for reproducible installs.

---

## Intermediate

### What is the event loop?

The mechanism through which Node coordinates asynchronous work and schedules callbacks while the main JavaScript thread continues processing executable tasks.

### Why is blocking code dangerous in a Node server?

It prevents the JavaScript thread from serving other work until the blocking operation finishes.

### Promise.all vs Promise.allSettled?

`all` rejects when one member rejects.

`allSettled` returns results for all members.

### What is backpressure?

A flow-control problem where a data producer is faster than the consumer.

### Why use streams?

To process large/continuous data incrementally with controlled memory usage.

### What is middleware?

A function in a request pipeline that can inspect/modify requests/responses, finish the response, or pass control onward.

---

## Advanced

### When should you use worker threads?

CPU-intensive JavaScript work that benefits from parallel execution.

### Why not use workers for ordinary DB calls?

Database/network I/O is already asynchronous; workers add overhead and do not make remote I/O inherently faster.

### How do you detect event-loop blocking?

Measure event-loop delay, CPU profiles, latency patterns, and inspect synchronous/hot CPU code.

### How do you scale Node across cores?

Multiple processes/replicas, worker threads for appropriate CPU tasks, process managers, containers, or orchestration.

### What is AsyncLocalStorage useful for?

Maintaining request/correlation context across asynchronous boundaries.

### What is idempotency?

Ability to safely repeat an operation without unintended duplicate side effects.

### How would you make a Node service resilient to a failing downstream API?

Timeouts, bounded retries with backoff/jitter, circuit breaking when appropriate, graceful degradation, queueing, metrics, and idempotency.

### What causes memory leaks?

Unintentionally retained references such as global collections, listeners, timers, caches, closures, requests, or buffers.

---

# 127. Learning Roadmap

## Stage 1 — JavaScript Core

Master:

- variables/types
- functions
- objects
- arrays
- destructuring
- modules
- promises
- async/await
- errors

Build:

```text
CLI calculator
File-based notes application
```

---

## Stage 2 — Node Fundamentals

Master:

- Node runtime
- process
- npm
- modules
- fs
- path
- events
- buffers
- streams

Build:

```text
File organizer
Log analyzer
CSV reader
```

---

## Stage 3 — HTTP/API

Master:

- raw HTTP
- REST
- Express
- routing
- middleware
- validation
- error handling

Build:

```text
Todo REST API
```

---

## Stage 4 — Database

Master:

- SQL
- database driver
- pooling
- indexes
- transactions
- migrations

Build:

```text
Employee management API
```

---

## Stage 5 — Authentication

Master:

- password hashing
- sessions
- JWT
- cookies
- RBAC
- OAuth/OIDC basics

Build:

```text
User authentication API
```

---

## Stage 6 — Production Engineering

Master:

- logs
- health checks
- graceful shutdown
- Docker
- CI/CD
- security
- caching
- queues

Build:

```text
Production-ready order service
```

---

## Stage 7 — Advanced Node

Master:

- event loop
- worker threads
- child processes
- streams/backpressure
- AsyncLocalStorage
- performance profiling
- memory analysis

Build:

```text
Large-file processing service
```

---

## Stage 8 — Architecture

Master:

- layered architecture
- clean architecture
- modular monolith
- microservices
- message brokers
- idempotency
- retry patterns

Build:

```text
Invoice workflow platform
```

---

# 128. Practice Projects

Build these in order.

## Beginner

1. CLI calculator
2. Notes CLI
3. File organizer
4. JSON database simulator
5. Log parser

## Intermediate

6. Todo REST API
7. Employee CRUD API
8. Authentication API
9. Blog backend
10. File upload service
11. URL shortener
12. WebSocket chat

## Advanced

13. Invoice processing API
14. Job queue system
15. API gateway
16. Redis-cached product API
17. Multi-tenant SaaS backend
18. Payment webhook processor
19. Real-time notification service
20. Large CSV streaming exporter
21. Worker-thread image processor
22. Microservices order platform

For each project include:

```text
README
environment validation
structured logs
tests
error handling
security
Dockerfile
health endpoint
```

---

# 129. Cheat Sheet

## Create project

```bash
npm init -y
```

## Install dependency

```bash
npm i express
```

## Dev dependency

```bash
npm i -D eslint
```

## Run

```bash
node src/server.js
```

## Watch

```bash
node --watch src/server.js
```

## Test

```bash
node --test
```

## Check syntax

```bash
node --check app.js
```

## Environment

```js
process.env.PORT
```

## Current directory

```js
process.cwd()
```

## Read file

```js
import { readFile } from 'node:fs/promises';

const data = await readFile(path, 'utf8');
```

## Write file

```js
import { writeFile } from 'node:fs/promises';

await writeFile(path, data);
```

## Path

```js
import path from 'node:path';

path.join('uploads', 'invoice.pdf');
```

## UUID

```js
import { randomUUID } from 'node:crypto';

randomUUID();
```

## HTTP server

```js
import http from 'node:http';

http
  .createServer((req, res) => {
    res.end('Hello');
  })
  .listen(3000);
```

## Fetch

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

const data = await response.json();
```

## Event

```js
emitter.on('event', listener);
emitter.emit('event', data);
```

## Promise concurrency

```js
const [a, b] = await Promise.all([
  getA(),
  getB()
]);
```

## Timeout

```js
AbortSignal.timeout(5000)
```

## Handle shutdown

```js
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
```

## Memory

```js
process.memoryUsage()
```

## CPU count

```js
import os from 'node:os';

os.cpus().length
```

---

# 130. Official References

Use official documentation as the final authority for runtime APIs and version-specific behavior.

- Node.js home: https://nodejs.org/
- Node.js documentation: https://nodejs.org/api/
- Node.js releases: https://nodejs.org/en/about/previous-releases
- npm documentation: https://docs.npmjs.com/

Important reference topics:

- Event loop and asynchronous behavior
- `node:fs`
- `node:stream`
- `node:http`
- `node:test`
- `node:worker_threads`
- `node:async_hooks`
- permission model
- process APIs
- package/module APIs
- TypeScript execution support
- CLI flags

---

# Appendix A — A Clean REST API Example Structure

```text
src/
├── app.js
├── server.js
├── config/
│   ├── env.js
│   └── database.js
├── modules/
│   └── invoice/
│       ├── invoice.routes.js
│       ├── invoice.controller.js
│       ├── invoice.service.js
│       ├── invoice.repository.js
│       ├── invoice.schema.js
│       └── invoice.errors.js
├── middleware/
│   ├── auth.js
│   ├── request-id.js
│   ├── not-found.js
│   └── error-handler.js
└── shared/
    ├── logger.js
    └── errors.js
```

Flow:

```text
HTTP
 ↓
Route
 ↓
Auth
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

---

# Appendix B — Example Error Response Standard

```json
{
  "error": {
    "code": "INVOICE_NOT_FOUND",
    "message": "Invoice was not found",
    "requestId": "090aa4d9-53cd-4ca7-b2e7-b7caf4e537b5"
  }
}
```

Validation:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "invoiceNumber",
        "message": "invoiceNumber is required"
      }
    ]
  }
}
```

Do not expose stack traces to clients in production.

---

# Appendix C — Example Environment Validation

```js
const required = [
  'DB_HOST',
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME'
];

for (const name of required) {
  if (!process.env[name]) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }
}

export const config = Object.freeze({
  port: Number(process.env.PORT ?? 3000),
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
  }
});
```

Why validate at startup?

Bad:

```text
Server starts
↓
Traffic arrives
↓
First DB request
↓
Crash because DB_HOST is missing
```

Better:

```text
Startup
↓
Validate config
↓
Fail immediately
```

Operations teams can diagnose the issue before traffic is served.

---

# Appendix D — Example Bounded Concurrency

Bad:

```js
await Promise.all(
  invoices.map(processInvoice)
);
```

If `invoices` contains 100,000 items, this can attempt far too much work at once.

Simple worker-pool pattern:

```js
async function processWithConcurrency(
  items,
  concurrency,
  handler
) {
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const index = nextIndex++;

      if (index >= items.length) {
        return;
      }

      await handler(items[index]);
    }
  }

  await Promise.all(
    Array.from(
      { length: concurrency },
      () => worker()
    )
  );
}
```

Use:

```js
await processWithConcurrency(
  invoices,
  5,
  processInvoice
);
```

This concept matters for:

- outbound API calls
- DB-heavy batch work
- file processing
- emails
- cloud operations

---

# Appendix E — Example Retry Helper

A simplified educational example:

```js
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

async function retry(
  operation,
  {
    attempts = 3,
    baseDelayMs = 200
  } = {}
) {
  let lastError;

  for (
    let attempt = 1;
    attempt <= attempts;
    attempt++
  ) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === attempts) {
        break;
      }

      const exponential =
        baseDelayMs * 2 ** (attempt - 1);

      const jitter =
        Math.floor(Math.random() * 100);

      await sleep(exponential + jitter);
    }
  }

  throw lastError;
}
```

Real production retries should also decide:

- which errors are retryable
- whether operation is idempotent
- maximum total duration
- cancellation
- telemetry

---

# Appendix F — Event Loop Thought Exercises

## Exercise 1

Predict:

```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');
```

Typical:

```text
A
D
C
B
```

Reason:

Synchronous work completes first, then microtasks such as resolved Promise handlers execute before a later timer callback.

---

## Exercise 2

Why is this dangerous?

```js
while (true) {
  // work
}
```

Because JavaScript never returns control to the event loop.

No normal I/O callback can be processed.

---

## Exercise 3

Why can this be bad?

```js
JSON.parse(veryLargeString);
```

`JSON.parse()` is synchronous CPU work.

For extremely large payloads it may block the event loop.

Use request size limits and appropriate streaming/worker designs for genuinely huge data.

---

# Appendix G — Backend Design Questions You Should Ask

When designing a Node.js feature, ask:

## API

- What is the contract?
- What are status codes?
- What validation is required?
- Is the operation idempotent?
- What is the timeout?

## Security

- Who may call it?
- Who owns the resource?
- What roles are allowed?
- What inputs are untrusted?
- Are secrets exposed?

## Database

- What indexes are needed?
- Is a transaction required?
- Is the query bounded?
- Could an N+1 query occur?
- Does tenant scope exist?

## Reliability

- What happens when dependency X fails?
- Should we retry?
- Could a retry duplicate data?
- Do we need a queue?
- What happens during process shutdown?

## Performance

- Could it block the event loop?
- Can data be streamed?
- Is work CPU-heavy?
- Do we need caching?
- Is concurrency bounded?

## Observability

- What should be logged?
- What metrics matter?
- How do we trace a request?
- What alert tells us it is broken?

Thinking in this way is what separates “code that runs” from production engineering.

---

# Appendix H — Node.js Mastery Checklist

## JavaScript

- [ ] Scope and closures
- [ ] Objects and prototypes
- [ ] Arrays and collections
- [ ] Promises
- [ ] async/await
- [ ] Error handling
- [ ] Modules

## Node Core

- [ ] Runtime architecture
- [ ] V8 concept
- [ ] libuv concept
- [ ] Event loop
- [ ] Globals
- [ ] Process
- [ ] File system
- [ ] Path
- [ ] Buffer
- [ ] Events
- [ ] Streams
- [ ] HTTP
- [ ] URL
- [ ] Crypto

## Backend

- [ ] Express or another framework
- [ ] Routing
- [ ] Middleware
- [ ] Validation
- [ ] Error handling
- [ ] REST conventions
- [ ] Database
- [ ] Transactions
- [ ] Connection pooling

## Security

- [ ] Password hashing
- [ ] Sessions
- [ ] JWT
- [ ] OAuth/OIDC fundamentals
- [ ] RBAC
- [ ] CORS
- [ ] CSRF
- [ ] Injection prevention
- [ ] Rate limiting
- [ ] Secret management

## Reliability

- [ ] Timeouts
- [ ] Retries
- [ ] Idempotency
- [ ] Queues
- [ ] Graceful shutdown
- [ ] Health checks

## Advanced Node

- [ ] Child processes
- [ ] Worker threads
- [ ] Multi-process scaling
- [ ] AsyncLocalStorage
- [ ] Diagnostics
- [ ] Event-loop delay
- [ ] Heap analysis
- [ ] CPU profiling

## Architecture

- [ ] MVC
- [ ] Layered architecture
- [ ] Clean architecture
- [ ] Modular monolith
- [ ] Microservices
- [ ] Event-driven systems

## Production

- [ ] Docker
- [ ] CI/CD
- [ ] Reverse proxy
- [ ] Structured logging
- [ ] Metrics
- [ ] Tracing
- [ ] Alerts
- [ ] Security review

---

# Final Advice

Do not measure Node.js skill by how many npm libraries you know.

Strong Node.js developers understand:

```text
JavaScript
+
runtime behavior
+
asynchronous I/O
+
HTTP
+
data
+
security
+
reliability
+
performance
+
architecture
+
operations
```

The most important questions are rarely:

> “Which package should I install?”

They are usually:

> “What is happening to the event loop?”

> “Can this operation fail halfway?”

> “Can this request be retried safely?”

> “Can this consume unbounded memory?”

> “Who is authorized to perform this operation?”

> “What happens when the database or ERP is unavailable?”

> “How do I observe and debug this in production?”

If you can answer those questions confidently, you are moving from **Node.js learner** to **Node.js engineer**.

---

**End of Node.js Mastery Handbook**


---

# Appendix I — 2026 Node.js Version Snapshot

> **Snapshot date: 12 August 2026.** Runtime versions change, so always verify the Node.js release page before starting or upgrading a production project.

At this snapshot:

```text
Node.js 26 → Current release line
Node.js 24 (Krypton) → LTS
Node.js 22 (Jod) → LTS
```

For production applications, prefer a supported LTS line unless you have a specific reason to run Current.

Why?

LTS releases are the normal production target because they receive a longer support lifecycle.

Do not start a new production system on an End-of-Life release.

A useful policy:

```text
Development experimentation → Current may be acceptable
Production application      → supported LTS normally preferred
Legacy application          → create an upgrade plan
```

---

# Appendix J — Module Resolution, Caching, Exports, and Imports

Understanding modules at syntax level is not enough for advanced Node.js development.

You should also understand how Node decides **what a module name means**.

## Relative imports

```js
import './logger.js';
import '../config/env.js';
```

Relative ESM imports should use explicit paths/extensions according to Node's module rules.

## Built-in module imports

Preferred modern style:

```js
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
```

Why `node:`?

It clearly communicates:

> This is a Node.js built-in module.

It also avoids ambiguity with package names.

## Package import

```js
import express from 'express';
```

Node resolves this through package resolution rules, commonly involving `node_modules` and package metadata.

## CommonJS cache

CommonJS modules are generally cached after first successful loading.

Example:

```js
// counter.cjs
console.log('Module loaded');

module.exports = {
  count: 0
};
```

```js
const a = require('./counter.cjs');
const b = require('./counter.cjs');

console.log(a === b);
```

You will normally see:

```text
Module loaded
true
```

This means modules are often effectively singletons **within one process/module cache**.

Important consequence:

```js
// config.cjs
module.exports = {
  users: []
};
```

Every importer may share the same mutable array.

That can be intentional or dangerous.

## `require.cache`

CommonJS exposes module cache information.

Advanced tooling/tests sometimes manipulate it, but application code should not rely on constantly clearing the cache as normal architecture.

## Package `exports`

For a reusable package:

```json
{
  "name": "invoice-utils",
  "exports": {
    ".": "./src/index.js",
    "./money": "./src/money.js"
  }
}
```

Consumers can use:

```js
import utils from 'invoice-utils';
import { formatMoney } from 'invoice-utils/money';
```

Internal files not exported become outside the supported package API.

This is good package design.

Bad package consumer:

```js
import hiddenThing from
  'invoice-utils/src/internal/private-helper.js';
```

A later package version can reorganize internals and break you.

## Package `imports`

A package can define internal aliases beginning with `#`.

```json
{
  "imports": {
    "#config": "./src/config/index.js",
    "#logger": "./src/shared/logger.js"
  }
}
```

Then:

```js
import { config } from '#config';
```

This can provide a clean alternative to brittle paths such as:

```js
import { config } from
  '../../../../config/index.js';
```

## Conditional exports

Libraries may expose different implementations depending on conditions.

Concept:

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  }
}
```

Package authors need to understand this carefully because dual ESM/CommonJS packaging can create subtle compatibility problems.

## Top-level await

ES modules can use:

```js
const config = await loadConfig();

export { config };
```

without wrapping it in an async function.

Use carefully.

If module initialization waits on slow external operations, every importer may effectively wait for that module graph to initialize.

---

# Appendix K — Native `.env` Support

Modern Node.js includes built-in utilities for `.env` files.

Example `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=invoice_db
LOG_LEVEL=info
```

Run:

```bash
node --env-file=.env src/server.js
```

Then:

```js
console.log(process.env.DB_HOST);
```

You can also use a file only if it exists:

```bash
node --env-file-if-exists=.env.local src/server.js
```

Modern Node also exposes programmatic environment-file utilities.

This means a simple Node application may not need a third-party dotenv package merely to populate `process.env`.

## Important typing rule

Environment values are strings.

Given:

```env
PORT=3000
DEBUG=false
```

you get conceptually:

```js
typeof process.env.PORT;
// "string"

typeof process.env.DEBUG;
// "string"
```

Therefore this is dangerous:

```js
if (process.env.DEBUG) {
  console.log('Debug enabled');
}
```

Because:

```text
"false"
```

is a non-empty string and therefore truthy.

Parse explicitly:

```js
const debug =
  process.env.DEBUG === 'true';

const port =
  Number(process.env.PORT ?? 3000);
```

For production systems, validate environment variables with a schema.

---

# Appendix L — Built-In SQLite

Modern Node.js includes a built-in:

```text
node:sqlite
```

At the August 2026 snapshot, this API is still classified as a **release candidate**, so verify its stability and API before making a long-term production decision.

Basic idea:

```js
import {
  DatabaseSync
} from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  )
`);

const insert = db.prepare(
  'INSERT INTO users(id, name) VALUES (?, ?)'
);

insert.run(1, 'Aisha');

const query = db.prepare(
  'SELECT id, name FROM users'
);

console.log(query.all());
```

## Good SQLite scenarios

- desktop tooling
- local utilities
- test fixtures
- lightweight internal tools
- embedded applications
- single-machine services with suitable workload

## Think carefully before using SQLite for

- high-write distributed systems
- many independent app replicas writing concurrently
- workloads that really require a client/server database

SQLite is powerful, but it solves a different problem from PostgreSQL/MySQL.

---

# Appendix M — Node Streams vs Web Streams

Node has its traditional stream API:

```text
Readable
Writable
Duplex
Transform
```

Modern JavaScript runtimes also support the WHATWG/Web Streams API:

```text
ReadableStream
WritableStream
TransformStream
```

Example web stream:

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('Hello');
    controller.enqueue('World');
    controller.close();
  }
});
```

Consume:

```js
for await (const chunk of stream) {
  console.log(chunk);
}
```

## Why two stream systems?

Node streams existed before Web Streams became a cross-runtime standard.

Web Streams are now useful for interoperable APIs such as:

- Fetch bodies
- browser/server shared code
- edge/server runtimes

## Interoperability

Modern Node can convert between Node streams and Web Streams.

Conceptually:

```js
Readable.toWeb(nodeReadable);
Readable.fromWeb(webReadable);
```

Do not randomly convert between representations.

Use the stream type expected by the API you're integrating with.

---

# Appendix N — stdin, stdout, stderr, Readline, TTY, and REPL

A backend developer should understand process I/O.

## Standard streams

```text
stdin  → input
stdout → normal output
stderr → error/diagnostic output
```

Node exposes:

```js
process.stdin
process.stdout
process.stderr
```

Example:

```js
process.stdout.write('Hello\n');
process.stderr.write('Something went wrong\n');
```

Unlike `console.log`, `process.stdout.write` does not automatically add a newline.

## CLI pipelines

A strong CLI should support shell composition.

Example:

```bash
cat invoices.json | node validate.js
```

Read stdin:

```js
let input = '';

process.stdin.setEncoding('utf8');

for await (const chunk of process.stdin) {
  input += chunk;
}

console.log(JSON.parse(input));
```

For huge streams, process incrementally instead of collecting everything.

## Readline

Useful for interactive terminal applications.

```js
import {
  createInterface
} from 'node:readline/promises';
import {
  stdin as input,
  stdout as output
} from 'node:process';

const rl = createInterface({
  input,
  output
});

const name =
  await rl.question('Your name: ');

console.log(`Hello ${name}`);

rl.close();
```

## Exit codes

Conventional:

```text
0     → success
non-0 → failure
```

CLI scripts should return meaningful exit codes so automation can detect failure.

Example shell usage:

```bash
node validate.js

if [ $? -ne 0 ]; then
  echo "Validation failed"
fi
```

## REPL

Node's interactive shell:

```bash
node
```

Useful for:

- trying APIs
- checking syntax
- quick calculations
- debugging assumptions

---

# Appendix O — Unhandled Errors and Process Failure Strategy

Two events you will encounter:

```text
uncaughtException
unhandledRejection
```

Do not treat them as a magic way to keep a corrupted application running forever.

## Uncaught exception

Example:

```js
throw new Error('Unexpected failure');
```

If not handled in the normal call path, the process may terminate.

A severe unexpected programming error can leave application state uncertain.

A production strategy often is:

```text
log/capture failure
↓
stop accepting work
↓
gracefully terminate where possible
↓
let supervisor/orchestrator restart process
```

rather than:

```js
process.on('uncaughtException', err => {
  console.log(err);
  // pretend nothing happened forever
});
```

## Unhandled rejection

Bad:

```js
async function run() {
  throw new Error('Failed');
}

run();
```

No caller awaits/catches the promise.

Always make promise ownership explicit.

Top-level:

```js
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
```

---

# Appendix P — EventEmitter Listener Management

EventEmitter is simple, but long-running applications can leak listeners.

Bad:

```js
app.get('/run', (req, res) => {
  globalEmitter.on(
    'completed',
    result => {
      // ...
    }
  );
});
```

Every request adds another permanent listener.

After thousands of requests:

```text
thousands of listeners
```

Possible consequences:

- memory growth
- duplicate work
- MaxListeners warnings
- hard-to-debug behavior

Solutions:

- use `once()` when appropriate
- remove listeners
- scope emitter lifetime
- avoid global emitter misuse

Example:

```js
function onCompleted(result) {
  console.log(result);
}

emitter.on('completed', onCompleted);

// later
emitter.off(
  'completed',
  onCompleted
);
```

---

# Appendix Q — HTTP Timeouts and Resource Limits

A production HTTP server needs more thought than:

```js
app.listen(3000);
```

Attackers or broken clients can:

- open connections slowly
- upload huge bodies
- never finish requests
- keep sockets open
- exhaust memory

Understand server settings related to:

- request timeout
- headers timeout
- keep-alive timeout
- maximum headers
- body-size limits
- socket limits

At the framework layer:

```js
app.use(
  express.json({
    limit: '1mb'
  })
);
```

Do not accept arbitrary 2 GB JSON bodies if your endpoint expects a 2 KB object.

For file uploads, use streaming and dedicated upload-size limits.

---

# Appendix R — Diagnostics Channel and Diagnostic Reports

Advanced production debugging requires more than logs.

## Diagnostic reports

Node can generate a JSON diagnostic report containing information such as:

- JavaScript stack traces
- native stack traces
- heap statistics
- platform information
- resource usage
- libuv handles

Programmatic example:

```js
process.report.writeReport();
```

Or:

```js
const report =
  process.report.getReport();

console.log(report.header);
```

Useful when investigating:

- crashes
- memory issues
- stuck processes
- production runtime state

Be careful:

Diagnostic output may contain sensitive environment/runtime details.

Protect report files.

## Diagnostics Channel

Node exposes:

```text
node:diagnostics_channel
```

It provides named channels for diagnostic messages.

Concept:

```js
import diagnosticsChannel
  from 'node:diagnostics_channel';

const channel =
  diagnosticsChannel.channel(
    'invoice.processing'
  );

if (channel.hasSubscribers) {
  channel.publish({
    invoiceId: 123,
    phase: 'ocr'
  });
}
```

Instrumentation libraries can subscribe without tightly coupling themselves to your business code.

This is an advanced observability concept, but useful to know.

---

# Appendix S — Built-In Test Coverage and Test Organization

Node's built-in test runner can be used for much more than one-file assertions.

A useful structure:

```text
tests/
├── unit/
│   ├── tax.test.js
│   └── invoice-service.test.js
├── integration/
│   ├── invoice-repository.test.js
│   └── auth.test.js
└── fixtures/
```

## Naming

Use descriptive test names:

```js
test(
  'rejects invoice when total is negative',
  async () => {
    // ...
  }
);
```

instead of:

```js
test('test 4', () => {});
```

## Arrange / Act / Assert

```js
test('calculates tax', () => {
  // Arrange
  const amount = 100;

  // Act
  const result =
    calculateTax(amount, 0.18);

  // Assert
  assert.equal(result, 18);
});
```

## Coverage

Coverage helps answer:

> Which code paths did tests execute?

But 100% coverage does **not** mean bug-free software.

A bad assertion can “cover” code without verifying meaningful behavior.

Aim for:

- critical business rules covered
- failure paths covered
- security rules covered
- high-risk integrations tested

---

# Appendix T — Supply-Chain and npm Security

Modern Node applications often contain far more dependency code than application code.

A dependency tree may include:

```text
your app
 ↓
direct dependency
 ↓
transitive dependency
 ↓
another transitive dependency
```

Security practices:

## 1. Minimize dependencies

Do not install a package for something trivial that Node already handles.

Question:

```text
Do we really need this package?
```

## 2. Review package ownership/maintenance

Before adding an important dependency, review:

- maintenance activity
- release history
- issue handling
- ecosystem adoption
- security history
- package scope
- what transitive dependencies it introduces

## 3. Lock dependencies

Commit:

```text
package-lock.json
```

Use:

```bash
npm ci
```

in CI.

## 4. Audit

```bash
npm audit
```

Treat audit output thoughtfully.

Not every vulnerability has the same exploitability in your environment.

## 5. Avoid unnecessary install scripts

Package install scripts can execute code.

Understand what your build environment permits.

## 6. Never publish secrets

Before publishing npm packages, inspect what files will be included.

Useful command:

```bash
npm pack --dry-run
```

## 7. Separate runtime and dev dependencies

Production images should not automatically include every development tool.

---

# Appendix U — API Versioning and Backward Compatibility

APIs become contracts.

Breaking clients casually is expensive.

Common approaches:

## URL versioning

```text
/api/v1/invoices
/api/v2/invoices
```

## Header/media-type versioning

Possible, but more operationally subtle.

## Additive change

Usually safer:

Before:

```json
{
  "id": 1,
  "name": "Aisha"
}
```

After:

```json
{
  "id": 1,
  "name": "Aisha",
  "status": "ACTIVE"
}
```

## Breaking change

Before:

```json
{
  "amount": 100
}
```

After:

```json
{
  "totalAmount": "100 INR"
}
```

You changed:

- field name
- type
- semantics

Think about:

- deprecation period
- migration documentation
- telemetry showing old-version usage
- compatibility adapters

---

# Appendix V — Data Transfer Objects and Domain Models

Do not let every layer pass arbitrary request objects everywhere.

Bad:

```js
service.createInvoice(req);
```

Now service depends on HTTP details.

Better:

```js
const input = {
  invoiceNumber:
    req.body.invoiceNumber,
  amount:
    Number(req.body.amount),
  vendorId:
    req.body.vendorId
};

await service.createInvoice(input);
```

A DTO defines the data contract between boundaries.

Benefits:

- validation
- clear types
- easier testing
- framework independence
- controlled data exposure

Never blindly return a database record if it contains fields clients should not see.

Bad:

```js
res.json(userRow);
```

if row includes:

```text
password_hash
password_reset_token
internal_notes
```

Map a response DTO.

---

# Appendix W — Date, Time, and Timezone Handling

Dates cause many production bugs.

Questions you must answer:

- Is this an instant in time?
- Is this a local calendar date?
- Which timezone owns the business rule?
- Is daylight-saving time relevant?

For timestamps, ISO 8601 UTC is common:

```text
2026-08-12T12:45:00.000Z
```

Example:

```js
const now =
  new Date().toISOString();
```

Do not store ambiguous strings like:

```text
12/08/26
```

Does that mean:

```text
12 August
or
8 December?
```

For business dates such as invoice date, understand whether a timezone conversion should happen at all.

Date-only values and instants are different concepts.

---

# Appendix X — Numeric Precision and Money

JavaScript numbers are IEEE-754 floating-point.

Classic example:

```js
console.log(0.1 + 0.2);
```

You should not blindly use floating-point arithmetic for financial correctness.

Common approaches:

## Store minor units

Instead of:

```text
₹123.45
```

represent:

```text
12345 paise
```

where suitable.

## Decimal database types

Use proper database decimal/numeric types.

Do not store money in binary float columns without understanding precision consequences.

## Define rounding policy

Financial systems need explicit rules:

- rounding mode
- number of decimal places
- per-line vs total rounding
- tax calculation rules
- currency precision

This is a domain requirement, not merely a JavaScript problem.

---

# Appendix Y — Concurrency Race Conditions in Node.js

“Single JavaScript thread” does **not** mean race conditions cannot happen.

Example:

```js
const balance =
  await getBalance(accountId);

const newBalance =
  balance - 100;

await saveBalance(
  accountId,
  newBalance
);
```

Two requests can interleave:

```text
Request A reads 500
Request B reads 500
Request A writes 400
Request B writes 400
```

Expected after two withdrawals:

```text
300
```

Actual:

```text
400
```

This is a lost update.

Solutions depend on the database/domain:

- atomic update
- transaction
- row lock
- optimistic concurrency/version
- serialized queue

Example atomic SQL concept:

```sql
UPDATE accounts
SET balance = balance - ?
WHERE id = ?
  AND balance >= ?;
```

Concurrency correctness usually belongs in data/domain design, not an in-memory JavaScript mutex when multiple app instances exist.

---

# Appendix Z — Production Troubleshooting Playbook

When a Node service becomes slow:

## Step 1 — Determine scope

Ask:

```text
All routes?
One route?
One tenant?
One dependency?
Only under load?
Only one instance?
```

## Step 2 — Check basic signals

```text
CPU
memory
event-loop delay
request latency
error rate
DB latency
DB pool usage
queue depth
external dependency latency
```

## High CPU + high event-loop delay

Suspect:

- CPU-heavy JS
- synchronous code
- regex issue
- giant JSON parse/stringify
- loop bug

## Low CPU + requests hanging

Suspect:

- downstream API
- exhausted DB pool
- socket issue
- lock contention
- unresolved promise
- missing timeout

## Memory keeps rising

Suspect:

- cache
- listener leak
- retained request objects
- buffers
- unbounded map/array
- queue backlog in process

## Frequent process restarts

Check:

- OOM kill
- uncaught error
- orchestrator health-check failure
- container memory limit
- startup configuration
- dependency outage causing liveness failure

## Database slowdown

Check:

- slow queries
- missing indexes
- connection exhaustion
- locks
- N+1 queries
- result-set size

The key principle:

```text
Measure → isolate → reproduce → profile → fix → verify
```

not:

```text
guess → restart → hope
```

---

# Appendix AA — What “Node.js Mastery” Actually Means

A beginner asks:

> How do I create an API?

An intermediate developer asks:

> How do I structure the API cleanly?

An advanced developer asks:

> What happens when this request is duplicated, the DB succeeds, the ERP times out, the process receives SIGTERM, and the retry runs on another instance?

That progression is Node.js mastery.

You should be able to reason across:

```text
Language
Runtime
Operating system
Network
Database
Security
Concurrency
Reliability
Architecture
Deployment
Observability
```

A mature Node engineer knows when Node is an excellent fit—and when another architecture or runtime may be more appropriate.

