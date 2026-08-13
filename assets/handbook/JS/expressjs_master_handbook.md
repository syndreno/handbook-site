# Express.js Master Handbook

> **A beginner-to-production guide for learning Express.js as a single reference handbook**  
> Target: **Express 5.x** with modern Node.js (Express 5.x requires Node.js 18+).  
> Main examples use **ES Modules (ESM)**. CommonJS notes are included where useful.

---

## How to Use This Handbook

This file is designed to work in three ways:

1. **Learn from zero** — read the chapters in order.
2. **Use as a reference** — jump directly to a topic when building an application.
3. **Prepare for real projects/interviews** — study the scenario sections, mistakes, checklists, and project exercises.

Do not try to memorize every Express method. Focus first on understanding the request lifecycle:

```text
Client
  |
  | HTTP request
  v
Node HTTP server
  |
  v
Express application
  |
  +--> Application middleware
  |
  +--> Router middleware
  |
  +--> Matching route
  |
  +--> Controller / handler
  |
  +--> Service / business logic
  |
  +--> Database / external APIs
  |
  +--> Response
  v
Client

If something fails:
route/middleware -> next(error) / thrown async error -> error middleware -> response
```

If you understand that pipeline, most Express concepts become much easier.

---

# Table of Contents

1. [What Is Express.js?](#1-what-is-expressjs)
2. [Express vs Node.js](#2-express-vs-nodejs)
3. [Prerequisites: HTTP and Node Fundamentals](#3-prerequisites-http-and-node-fundamentals)
4. [Installation and First Application](#4-installation-and-first-application)
5. [CommonJS vs ES Modules](#5-commonjs-vs-es-modules)
6. [Understanding the Express Request Lifecycle](#6-understanding-the-express-request-lifecycle)
7. [The Express Application Object](#7-the-express-application-object)
8. [Routing Fundamentals](#8-routing-fundamentals)
9. [Route Parameters, Query Strings, and Request Bodies](#9-route-parameters-query-strings-and-request-bodies)
10. [The Request Object](#10-the-request-object)
11. [The Response Object](#11-the-response-object)
12. [Middleware — The Most Important Express Concept](#12-middleware--the-most-important-express-concept)
13. [Built-in Middleware](#13-built-in-middleware)
14. [Router and Modular Routing](#14-router-and-modular-routing)
15. [Route Chaining, app.route(), and router.route()](#15-route-chaining-approute-and-routerroute)
16. [router.param() and Parameter Preloading](#16-routerparam-and-parameter-preloading)
17. [Error Handling](#17-error-handling)
18. [Async/Await in Express 5](#18-asyncawait-in-express-5)
19. [404 Handling](#19-404-handling)
20. [Serving Static Files](#20-serving-static-files)
21. [REST API Design](#21-rest-api-design)
22. [Validation and Sanitization](#22-validation-and-sanitization)
23. [Authentication](#23-authentication)
24. [Authorization: RBAC and Permissions](#24-authorization-rbac-and-permissions)
25. [Cookies and Sessions](#25-cookies-and-sessions)
26. [CORS](#26-cors)
27. [CSRF](#27-csrf)
28. [Security Hardening](#28-security-hardening)
29. [Rate Limiting and Brute-Force Protection](#29-rate-limiting-and-brute-force-protection)
30. [File Uploads](#30-file-uploads)
31. [Database Integration](#31-database-integration)
32. [Database Transactions](#32-database-transactions)
33. [MVC, Layered, and Feature-Based Architecture](#33-mvc-layered-and-feature-based-architecture)
34. [Controller-Service-Repository Pattern](#34-controller-service-repository-pattern)
35. [Dependency Injection](#35-dependency-injection)
36. [Environment Variables and Configuration](#36-environment-variables-and-configuration)
37. [Logging](#37-logging)
38. [API Response Design](#38-api-response-design)
39. [Pagination, Filtering, Sorting, and Search](#39-pagination-filtering-sorting-and-search)
40. [API Versioning](#40-api-versioning)
41. [OpenAPI / Swagger Documentation](#41-openapi--swagger-documentation)
42. [Template Engines and Server-Side Rendering](#42-template-engines-and-server-side-rendering)
43. [Testing Express Applications](#43-testing-express-applications)
44. [Mocking and Test Strategy](#44-mocking-and-test-strategy)
45. [Performance Optimization](#45-performance-optimization)
46. [Caching](#46-caching)
47. [Compression](#47-compression)
48. [Streams and Large Responses](#48-streams-and-large-responses)
49. [Server-Sent Events](#49-server-sent-events)
50. [WebSockets and Socket.IO](#50-websockets-and-socketio)
51. [Background Jobs and Queues](#51-background-jobs-and-queues)
52. [Reverse Proxies and trust proxy](#52-reverse-proxies-and-trust-proxy)
53. [Health Checks and Graceful Shutdown](#53-health-checks-and-graceful-shutdown)
54. [Production Deployment](#54-production-deployment)
55. [Dockerizing Express](#55-dockerizing-express)
56. [Nginx with Express](#56-nginx-with-express)
57. [Process Management and Scaling](#57-process-management-and-scaling)
58. [Observability and Monitoring](#58-observability-and-monitoring)
59. [Express with TypeScript](#59-express-with-typescript)
60. [Express 4 to Express 5 Migration Notes](#60-express-4-to-express-5-migration-notes)
61. [Microservices with Express](#61-microservices-with-express)
62. [Common Design Patterns](#62-common-design-patterns)
63. [Common Anti-Patterns](#63-common-anti-patterns)
64. [Debugging Common Problems](#64-debugging-common-problems)
65. [Complete Production-Style API Example](#65-complete-production-style-api-example)
66. [Real-World Scenarios](#66-real-world-scenarios)
67. [Interview Questions and Answers](#67-interview-questions-and-answers)
68. [Practice Projects](#68-practice-projects)
69. [Express.js Cheat Sheet](#69-expressjs-cheat-sheet)
70. [Learning Roadmap](#70-learning-roadmap)
71. [Official References](#71-official-references)

---

# 1. What Is Express.js?

**Express.js** is a minimal web framework for Node.js. It helps you build HTTP servers, REST APIs, server-rendered websites, backend-for-frontend services, webhooks, and many other web applications without manually implementing common HTTP plumbing.

Without Express, you can build a server using Node's built-in `http` module. Express adds convenient abstractions for:

- routing
- middleware
- request parsing
- responses
- error handling
- static files
- routers and modular application structure
- integration with template engines and third-party middleware

Express intentionally does **not** force a particular database, ORM, authentication system, project architecture, validation library, or templating engine.

### Mental model

Think of Express as a programmable pipeline:

```text
Incoming request
      |
      v
middleware #1
      |
      v
middleware #2
      |
      v
route handler
      |
      v
response
```

A middleware can:

- inspect the request
- modify the request
- modify the response
- end the response
- pass control to the next middleware
- report an error

### When Express is a good choice

Use Express when you want:

- a REST API
- backend for React/Angular/Vue
- an internal business API
- authentication services
- CRUD applications
- webhook receivers
- upload/download APIs
- server-side rendered websites
- prototypes that can later grow into production applications
- a thin HTTP layer in front of services

### When Express may not be the best tool

You may prefer something else when:

- you need an opinionated full-stack framework with file-based conventions
- you need extremely high-performance specialized networking
- your application is primarily serverless functions and a framework optimized for that environment fits better
- you want batteries-included dependency injection, decorators, modules, and enterprise architecture out of the box

Express can still be used in many of these cases; the point is that it is deliberately minimal.

---

# 2. Express vs Node.js

A common beginner mistake is thinking Node.js and Express.js are competitors.

They are not.

```text
JavaScript language
       |
       v
Node.js runtime
       |
       v
Node HTTP APIs
       |
       v
Express.js framework
       |
       v
Your application
```

## Node.js alone

```js
import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Asha' }]));
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000);
```

## Same idea with Express

```js
import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Asha' }]);
});

app.listen(3000);
```

Express uses Node's HTTP capabilities underneath. The Express `req` and `res` objects extend Node's request and response objects.

---

# 3. Prerequisites: HTTP and Node Fundamentals

Before Express, understand these concepts.

## 3.1 HTTP request

An HTTP request has several important pieces:

```text
POST /api/users?notify=true HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer ...

{
  "name": "Asha",
  "email": "asha@example.com"
}
```

Pieces:

- method: `POST`
- path: `/api/users`
- query string: `?notify=true`
- headers
- request body

## 3.2 HTTP response

```text
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 42,
  "name": "Asha"
}
```

Pieces:

- status code
- headers
- response body

## 3.3 Common HTTP methods

| Method | Typical purpose | Example |
|---|---|---|
| GET | Read | Get products |
| POST | Create/action | Create order |
| PUT | Replace resource | Replace user profile |
| PATCH | Partial update | Change user email |
| DELETE | Delete | Delete comment |
| HEAD | Headers without body | Check resource metadata |
| OPTIONS | Supported communication options | CORS preflight |

## 3.4 Common status codes

| Code | Meaning | Typical use |
|---|---|---|
| 200 | OK | Successful read/update |
| 201 | Created | Successful creation |
| 204 | No Content | Success with no response body |
| 400 | Bad Request | Invalid request format |
| 401 | Unauthorized | Missing/invalid authentication |
| 403 | Forbidden | Authenticated but not allowed |
| 404 | Not Found | Resource/route missing |
| 409 | Conflict | Duplicate/invalid resource state |
| 422 | Unprocessable Content | Validation/domain error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server failure |
| 502 | Bad Gateway | Upstream service failed |
| 503 | Service Unavailable | Service temporarily unavailable |

## 3.5 Node's event loop

Node is excellent at handling many concurrent I/O operations. Avoid blocking the event loop with long synchronous CPU or filesystem work.

Bad in a request:

```js
import fs from 'node:fs';

app.get('/report', (req, res) => {
  const data = fs.readFileSync('./huge-report.json', 'utf8');
  res.type('json').send(data);
});
```

Better:

```js
import fs from 'node:fs/promises';

app.get('/report', async (req, res) => {
  const data = await fs.readFile('./huge-report.json', 'utf8');
  res.type('json').send(data);
});
```

For CPU-heavy work such as video encoding, massive PDF processing, or expensive calculations, consider worker threads or background workers instead of doing everything directly inside the request.

---

# 4. Installation and First Application

Express 5.x requires Node.js 18 or newer.

## 4.1 Create a project

```bash
mkdir express-learning
cd express-learning
npm init -y
npm install express
```

## 4.2 Enable ES Modules

`package.json`:

```json
{
  "name": "express-learning",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

## 4.3 First server

`src/server.js`:

```js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT, (error) => {
  if (error) {
    console.error('Failed to start server:', error);
    return;
  }

  console.log(`Server running on http://localhost:${PORT}`);
});
```

Visit:

```text
http://localhost:3000
```

### Why `process.env.PORT || 3000`?

Deployment platforms often provide the port through an environment variable. Hard-coding only `3000` can make deployment harder.

---

# 5. CommonJS vs ES Modules

Node supports two major module systems.

## ES Modules

```js
import express from 'express';
export default router;
```

Usually enabled with:

```json
{
  "type": "module"
}
```

## CommonJS

```js
const express = require('express');
module.exports = router;
```

Modern projects increasingly use ESM, but you will encounter both in existing Express codebases.

### `__dirname` in ESM

Classic `__dirname` is not automatically defined in ESM.

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Modern Node also provides conveniences around `import.meta` depending on the Node version, but the pattern above remains easy to recognize in existing projects.

---

# 6. Understanding the Express Request Lifecycle

Consider:

```js
app.use((req, res, next) => {
  console.log('A');
  next();
});

app.get('/hello', (req, res) => {
  console.log('B');
  res.send('Hello');
});

app.use((req, res) => {
  console.log('C');
  res.status(404).send('Not Found');
});
```

Request:

```text
GET /hello
```

Output:

```text
A
B
```

`C` is not reached because the route handler ended the response.

Request:

```text
GET /missing
```

Output:

```text
A
C
```

### Core rule

**Middleware order matters.**

Express processes matching middleware and routes in the order they are registered.

Bad order:

```js
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.get('/users', getUsers); // never reached
```

Correct:

```js
app.get('/users', getUsers);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
```

---

# 7. The Express Application Object

Create it with:

```js
const app = express();
```

The `app` object is the main Express application.

Common responsibilities:

```js
app.use(...);      // middleware
app.get(...);      // GET route
app.post(...);     // POST route
app.put(...);
app.patch(...);
app.delete(...);
app.set(...);      // settings
app.get('key');    // read setting when used with one argument
app.param(...);    // parameter callback
app.route(...);    // chain routes for a path
app.listen(...);   // listen for requests
```

## app.locals

Application-wide values useful for templates or shared presentation data:

```js
app.locals.appName = 'Invoice Portal';
```

Unlike `res.locals`, `app.locals` lives for the lifetime of the application.

## Application settings

```js
app.set('trust proxy', 1);
app.set('view engine', 'ejs');
```

Read a setting:

```js
console.log(app.get('view engine'));
```

Do not confuse:

```js
app.get('/users', handler); // GET route
```

with:

```js
app.get('view engine'); // read app setting
```

The arguments determine the behavior.

---

# 8. Routing Fundamentals

Routing tells Express what code should run for a particular HTTP method and path.

## Basic routes

```js
app.get('/products', (req, res) => {
  res.json([]);
});

app.post('/products', (req, res) => {
  res.status(201).json({ message: 'Product created' });
});

app.patch('/products/:id', (req, res) => {
  res.json({ message: `Product ${req.params.id} updated` });
});

app.delete('/products/:id', (req, res) => {
  res.status(204).end();
});
```

## Multiple handlers

```js
app.get('/admin', authenticate, authorizeAdmin, (req, res) => {
  res.json({ message: 'Welcome admin' });
});
```

Flow:

```text
authenticate
   -> authorizeAdmin
      -> final handler
```

## `app.all()`

Matches all HTTP methods for a route.

```js
app.all('/maintenance', (req, res) => {
  res.status(503).send('Maintenance');
});
```

## Express 5 route path caution

Express 5 uses newer path matching rules. Important migration examples include:

```js
// Express 5: wildcard must be named
app.all('/*splat', handler);

// Include root path too
app.all('/{*splat}', handler);
```

Optional pieces use braces instead of old `?` string-pattern syntax:

```js
// Useful form: /file or /file.json
app.get('/:file{.:ext}', handler);
```

When upgrading older route patterns, check the Express 5 migration guide instead of assuming Express 4 path syntax still behaves the same.

---

# 9. Route Parameters, Query Strings, and Request Bodies

These three are frequently confused.

## 9.1 Route parameter

URL:

```text
GET /users/42
```

Route:

```js
app.get('/users/:id', (req, res) => {
  console.log(req.params.id); // "42"
  res.json({ id: req.params.id });
});
```

Use route parameters to identify a resource.

Examples:

```text
/users/42
/orders/ORD-1001
/posts/hello-express
```

## 9.2 Query string

URL:

```text
GET /products?page=2&limit=20&category=laptop
```

```js
app.get('/products', (req, res) => {
  const { page, limit, category } = req.query;
  res.json({ page, limit, category });
});
```

Use query parameters for:

- filtering
- sorting
- pagination
- search
- optional flags

## 9.3 Request body

Request:

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Asha",
  "email": "asha@example.com"
}
```

Enable JSON parsing:

```js
app.use(express.json());
```

Then:

```js
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ name, email });
});
```

### Security rule

`req.params`, `req.query`, headers, cookies, and `req.body` all come from outside your trust boundary. Validate them.

Never assume:

```js
req.body.email.toLowerCase()
```

is safe before checking that `email` exists and is a string.

---

# 10. The Request Object

The request object is conventionally called `req`.

Useful properties and methods include:

```js
req.params
req.query
req.body
req.headers
req.method
req.path
req.url
req.originalUrl
req.hostname
req.protocol
req.ip
req.ips
req.cookies      // with cookie parsing middleware
req.app
req.baseUrl
req.route
req.secure
req.get('Header-Name')
req.is('application/json')
req.accepts(...)
```

## Example diagnostic route

```js
app.post('/debug/:id', (req, res) => {
  res.json({
    method: req.method,
    id: req.params.id,
    query: req.query,
    body: req.body,
    contentType: req.get('content-type'),
    ip: req.ip,
    originalUrl: req.originalUrl
  });
});
```

## `req.baseUrl` vs `req.originalUrl`

Useful with routers.

```js
app.use('/api/users', userRouter);
```

Inside the router, a request to `/api/users/42` may have contextual values that help distinguish the mount point and the original URL.

## `req.ip` and proxies

When Express is behind Nginx, a cloud load balancer, or another proxy, client IP detection depends on correctly configuring `trust proxy`. Do not blindly enable it without understanding your proxy topology.

---

# 11. The Response Object

The response object is conventionally called `res`.

Common methods:

```js
res.send(...)
res.json(...)
res.status(...)
res.end()
res.redirect(...)
res.render(...)
res.sendFile(...)
res.download(...)
res.set(...)
res.append(...)
res.cookie(...)
res.clearCookie(...)
res.type(...)
res.location(...)
```

## JSON response

```js
res.status(200).json({
  success: true,
  data: products
});
```

## Chaining

```js
res
  .status(201)
  .location(`/users/${user.id}`)
  .json(user);
```

## Redirect

```js
res.redirect('/login');
```

## File download

```js
res.download('/safe/path/report.pdf', 'monthly-report.pdf');
```

## `res.locals`

Request-scoped values:

```js
app.use((req, res, next) => {
  res.locals.requestId = crypto.randomUUID();
  next();
});
```

Often used for:

- template variables
- current authenticated user
- request ID
- contextual data for later middleware

## `res.headersSent`

Useful inside error handling when you need to know whether headers were already sent.

### Common mistake: sending twice

Bad:

```js
app.get('/users/:id', async (req, res) => {
  const user = await findUser(req.params.id);

  if (!user) {
    res.status(404).json({ message: 'Not found' });
  }

  res.json(user); // may attempt second response
});
```

Correct:

```js
if (!user) {
  return res.status(404).json({ message: 'Not found' });
}

return res.json(user);
```

---

# 12. Middleware — The Most Important Express Concept

A middleware function usually has this shape:

```js
function middleware(req, res, next) {
  // do something
  next();
}
```

Error middleware has four parameters:

```js
function errorHandler(err, req, res, next) {
  // handle error
}
```

## What middleware can do

Middleware can:

1. execute code
2. inspect the request
3. change `req`
4. change `res`
5. end the request-response cycle
6. call `next()`
7. call `next(error)`

## Application-level middleware

```js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

## Path-specific middleware

```js
app.use('/admin', authenticate);
```

## Router-level middleware

```js
router.use(authenticate);
```

## Route-level middleware

```js
router.post('/orders', authenticate, validateOrder, createOrder);
```

## Third-party middleware

Typical examples:

- `helmet`
- `cors`
- `express-rate-limit`
- `multer`
- `express-session`
- logging middleware

## Middleware order example

```js
app.use(requestId);
app.use(logger);
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.use(notFoundHandler);
app.use(errorHandler);
```

### Scenario: authentication

```js
async function authenticate(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const user = await verifyTokenAndGetUser(token);
  req.user = user;
  next();
}
```

Then:

```js
router.get('/me', authenticate, (req, res) => {
  res.json(req.user);
});
```

### Scenario: timing requests

```js
function timer(req, res, next) {
  const startedAt = performance.now();

  res.on('finish', () => {
    const duration = performance.now() - startedAt;
    console.log(`${req.method} ${req.originalUrl} ${duration.toFixed(1)}ms`);
  });

  next();
}
```

---

# 13. Built-in Middleware

Express includes several important middleware functions.

## `express.json()`

Parses JSON request bodies.

```js
app.use(express.json({ limit: '1mb' }));
```

Only applies to matching content types.

## `express.urlencoded()`

Parses URL-encoded form data.

```js
app.use(express.urlencoded({ extended: true }));
```

Useful for traditional HTML forms.

## `express.static()`

Serves files from a directory.

```js
app.use('/assets', express.static('public'));
```

## `express.raw()`

Produces a `Buffer` body.

```js
app.use('/webhooks/payment', express.raw({ type: 'application/json' }));
```

This can be useful when a webhook signature must be verified using the exact raw bytes.

## `express.text()`

Parses body as text.

```js
app.use('/text-import', express.text({ type: 'text/plain' }));
```

### Important parsing lesson

Do not automatically enable every parser for every route without considering:

- accepted content types
- body size
- security
- webhook signature requirements
- performance

---

# 14. Router and Modular Routing

`express.Router()` creates a router. Think of it as a mini routing application.

## `routes/users.routes.js`

```js
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Asha' }]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

export default router;
```

## `app.js`

```js
import express from 'express';
import userRouter from './routes/users.routes.js';

const app = express();

app.use('/api/users', userRouter);

export default app;
```

Routes become:

```text
GET /api/users
GET /api/users/:id
```

## Why routers matter

Instead of:

```text
server.js
  2000 lines of routes
```

You can have:

```text
src/
  routes/
    users.routes.js
    orders.routes.js
    invoices.routes.js
    auth.routes.js
```

## `mergeParams`

Suppose:

```js
app.use('/users/:userId/orders', orderRouter);
```

If the child router needs `userId`:

```js
const router = Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.json({ userId: req.params.userId });
});
```

Without `mergeParams: true`, parent route parameters are not preserved in the child router by default.

---

# 15. Route Chaining, app.route(), and router.route()

When several HTTP methods use the same path:

```js
router
  .route('/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
```

This can be cleaner than:

```js
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
```

Use whichever is clearest for your team.

---

# 16. router.param() and Parameter Preloading

`router.param()` can run logic when a named route parameter appears.

```js
router.param('userId', async (req, res, next, userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  req.userRecord = user;
  next();
});

router.get('/users/:userId', (req, res) => {
  res.json(req.userRecord);
});
```

### Good use case

Several routes need the same entity lookup:

```text
GET    /projects/:projectId
PATCH  /projects/:projectId
DELETE /projects/:projectId
```

### Caution

Do not hide too much business logic inside `router.param()`. Loading a common entity is fine; a complex workflow is usually clearer in controllers/services.

---

# 17. Error Handling

Centralized error handling keeps controllers clean and responses consistent.

## Custom error class

```js
export class AppError extends Error {
  constructor(message, statusCode = 500, details) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
  }
}
```

## Throw from handler/service

```js
app.get('/users/:id', async (req, res) => {
  const user = await userRepository.findById(req.params.id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  res.json(user);
});
```

## Central error middleware

Register it after routes:

```js
app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      message: statusCode >= 500 ? 'Internal server error' : err.message,
      details: err.details
    }
  });
});
```

## Error middleware signature matters

Express recognizes error middleware by four arguments:

```js
(err, req, res, next)
```

Even if you do not directly use `next`, keep the expected signature where appropriate.

## Operational vs programmer errors

Operational errors:

- user not found
- invalid input
- database temporarily unavailable
- third-party API timeout

Programmer errors:

- reading property of `undefined`
- incorrect assumptions
- coding bug

Do not expose internal stack traces to production clients.

---

# 18. Async/Await in Express 5

One of the most useful Express 5 improvements is automatic forwarding of rejected promises from route handlers and middleware to error handling.

## Express 5

```js
app.get('/users/:id', async (req, res) => {
  const user = await getUserById(req.params.id); // if this rejects...
  res.json(user);
});
```

If the async handler rejects or throws, Express forwards the error to the error-handling pipeline.

## Older Express 4 style you may see

```js
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
```

or wrapper utilities such as `asyncHandler(...)`.

When maintaining Express 4, do not assume Express 5's rejected-promise behavior is available.

---

# 19. 404 Handling

A 404 is usually not an error thrown by Express. It means no route sent a response.

Place a 404 middleware **after all valid routes**:

```js
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: `Cannot ${req.method} ${req.originalUrl}`
    }
  });
});
```

Then place the error handler after the 404 handler.

Typical order:

```js
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use(notFoundHandler);
app.use(errorHandler);
```

---

# 20. Serving Static Files

```js
app.use(express.static('public'));
```

Files:

```text
public/
  logo.png
  styles.css
```

Accessible as:

```text
/logo.png
/styles.css
```

Mounted prefix:

```js
app.use('/assets', express.static('public'));
```

Now:

```text
/assets/logo.png
```

## Absolute path pattern

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, '../public')));
```

## Security notes

- Do not expose your project root as static content.
- Do not accidentally serve `.env`, source code, backups, or private uploads.
- Express 5's static dotfile behavior is more restrictive by default.
- Public and private file storage should be treated differently.

---

# 21. REST API Design

REST is an architectural style, not merely “JSON over HTTP.”

A practical API should use meaningful resources and HTTP semantics.

## Poor route design

```text
POST /getUsers
POST /createUser
POST /deleteUser
```

## Better resource-oriented design

```text
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

## Nested resources

```text
GET  /users/:userId/orders
POST /users/:userId/orders
GET  /users/:userId/orders/:orderId
```

Do not over-nest everything.

Instead of:

```text
/companies/:companyId/departments/:departmentId/users/:userId/orders/:orderId/items/:itemId
```

consider whether some resources have globally unique IDs and can be addressed directly.

## Example CRUD controller

```js
export async function createProduct(req, res) {
  const product = await productService.create(req.body);

  res
    .status(201)
    .location(`/api/products/${product.id}`)
    .json({ data: product });
}
```

## Idempotency

Typically:

- GET should not change server state.
- PUT is intended to be idempotent.
- DELETE is conceptually idempotent with respect to the resulting resource state.
- POST is not inherently idempotent.

For payment/order creation, an idempotency key can prevent accidental duplicate operations.

---

# 22. Validation and Sanitization

Validation answers:

> Is this input structurally and semantically acceptable?

Sanitization answers:

> Should this input be normalized/cleaned before use?

## Never trust client input

Bad:

```js
const user = await db.users.create(req.body);
```

A client may send fields you never intended:

```json
{
  "name": "Asha",
  "role": "admin",
  "isVerified": true
}
```

Prefer an explicit validated object.

## Example with Zod

```bash
npm install zod
```

```js
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().transform(v => v.toLowerCase()),
  age: z.number().int().min(18).max(120).optional()
});

app.post('/users', async (req, res) => {
  const input = createUserSchema.parse(req.body);
  const user = await userService.create(input);
  res.status(201).json({ data: user });
});
```

## Validation middleware

```js
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!result.success) {
      return res.status(422).json({
        error: {
          code: 'VALIDATION_ERROR',
          issues: result.error.issues
        }
      });
    }

    req.validated = result.data;
    next();
  };
}
```

## Business validation

Schema validation is not enough.

Example:

```text
quantity is integer > 0        -> schema validation
product has enough stock       -> business validation
customer credit limit permits  -> business validation
```

Keep both layers.

---

# 23. Authentication

Authentication answers:

> Who is this caller?

Common approaches:

- session/cookie authentication
- bearer token/JWT authentication
- OAuth 2.0 / OpenID Connect via an identity provider
- API keys for machine clients
- mutual TLS in specialized environments

## Password storage

Never store plaintext passwords.

Use a password hashing algorithm/library designed for passwords, such as Argon2 or bcrypt.

Conceptual example:

```js
const passwordHash = await hashPassword(password);
await userRepository.create({ email, passwordHash });
```

Login:

```js
const user = await userRepository.findByEmail(email);
const valid = user && await verifyPassword(password, user.passwordHash);

if (!valid) {
  throw new AppError('Invalid credentials', 401);
}
```

## Bearer token middleware

```js
async function authenticate(req, res, next) {
  const authorization = req.get('authorization');

  if (!authorization?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing bearer token' });
  }

  const token = authorization.slice('Bearer '.length);
  const payload = await tokenService.verify(token);

  req.auth = {
    userId: payload.sub,
    roles: payload.roles ?? []
  };

  next();
}
```

## JWT caution

A JWT is a token format, not a complete security architecture.

You still need to decide:

- signing algorithm and key management
- expiration
- refresh strategy
- token revocation requirements
- where tokens are stored
- rotation
- issuer/audience validation
- permission model
- compromised token handling

For browser apps, blindly storing long-lived tokens in `localStorage` is not automatically safer than secure cookies. Choose a model based on your threat model.

---

# 24. Authorization: RBAC and Permissions

Authorization answers:

> What is this authenticated caller allowed to do?

## RBAC

Role-Based Access Control:

```text
USER
MANAGER
ADMIN
```

Middleware:

```js
function allowRoles(...allowedRoles) {
  return (req, res, next) => {
    const roles = req.auth?.roles ?? [];
    const allowed = roles.some(role => allowedRoles.includes(role));

    if (!allowed) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}
```

Usage:

```js
router.delete(
  '/users/:id',
  authenticate,
  allowRoles('ADMIN'),
  deleteUser
);
```

## Permission-based model

Often more scalable:

```text
invoice:read
invoice:create
invoice:approve
invoice:post
```

```js
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.auth?.permissions?.includes(permission)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}
```

## Resource ownership

A user may be allowed to edit their own profile but not someone else's.

```js
if (req.auth.userId !== req.params.id && !req.auth.roles.includes('ADMIN')) {
  throw new AppError('Forbidden', 403);
}
```

This is more than a route-level role check; it is domain authorization.

---

# 25. Cookies and Sessions

Cookies are values a server instructs a browser to store and send with matching future requests.

## Set a cookie

```js
res.cookie('theme', 'dark', {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000
});
```

## Clear cookie

```js
res.clearCookie('theme');
```

## Important cookie attributes

- `HttpOnly`: prevents normal JavaScript access to the cookie.
- `Secure`: send only over HTTPS.
- `SameSite`: helps control cross-site cookie behavior.
- `Path`: path scope.
- `Domain`: domain scope.
- `Max-Age`/`Expires`: persistence.

## Sessions

With server-side sessions, the browser commonly stores a session identifier while the session data lives in a server-side store.

Concept:

```text
Browser cookie: sessionId=abc123
                    |
                    v
Session store: abc123 -> { userId: 42, role: "ADMIN" }
```

Typical middleware:

```bash
npm install express-session
```

```js
import session from 'express-session';

app.use(session({
  name: 'app.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
}));
```

### Production warning

Do not rely on the default in-memory session store for production-scale applications. Use an appropriate shared/persistent session store, especially when multiple app instances are running.

---

# 26. CORS

**CORS** means Cross-Origin Resource Sharing.

Browsers enforce the same-origin policy. CORS response headers tell a browser whether frontend JavaScript from another origin may read the response.

Example origins:

```text
https://app.example.com
https://api.example.com
```

These are different origins because the hosts differ.

Install middleware:

```bash
npm install cors
```

Basic development setup:

```js
import cors from 'cors';

app.use(cors());
```

Do not automatically use permissive CORS in production.

## Restrict allowed origins

```js
const allowedOrigins = new Set([
  'https://app.example.com',
  'https://admin.example.com'
]);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    callback(new Error('Origin not allowed'));
  },
  credentials: true
}));
```

## Important misconception

CORS is primarily a **browser access-control mechanism**. It is not authentication.

An attacker can still send requests from a non-browser client. Protect the API with proper authentication, authorization, validation, and network controls as required.

## Preflight request

For some cross-origin requests, the browser sends an `OPTIONS` request first.

```text
OPTIONS /api/orders
```

The server responds with allowed methods/headers/origin information.

---

# 27. CSRF

**Cross-Site Request Forgery (CSRF)** happens when a browser is tricked into making an unwanted authenticated request to another site.

It matters especially when authentication credentials are sent automatically by the browser, such as cookies.

Possible defenses include:

- `SameSite` cookies where suitable
- CSRF tokens
- validating `Origin`/`Referer` in appropriate designs
- avoiding unsafe state changes through GET
- requiring custom headers for API requests where the architecture permits

### Example scenario

Suppose a banking site authenticates using a cookie. An attacker hosts this form:

```html
<form action="https://bank.example/transfer" method="POST">
  <input name="amount" value="5000">
  <input name="to" value="attacker">
</form>
```

If the browser automatically attaches the bank cookie and the bank has no CSRF defense, the request may be treated as authenticated.

### Important distinction

- **CORS** controls whether browser JavaScript can read/use cross-origin responses.
- **CSRF protection** protects authenticated state-changing requests from being forged.
- **XSS** is a different vulnerability where malicious script executes in your site context.

Do not treat any one of these as a replacement for the others.

---

# 28. Security Hardening

Security should be designed into the application, not added at the end.

## 28.1 Use supported versions

Keep Node, Express, and dependencies maintained and patched.

```bash
npm audit
npm outdated
```

Review results rather than blindly applying changes that may break your application.

## 28.2 Use TLS/HTTPS

Production traffic containing credentials, tokens, personal information, or sensitive business data should use HTTPS.

TLS is often terminated at:

- Nginx
- HAProxy
- cloud load balancer
- ingress controller
- managed platform edge

## 28.3 Helmet

```bash
npm install helmet
```

```js
import helmet from 'helmet';

app.use(helmet());
```

Helmet helps set security-related HTTP response headers. It is valuable, but it does not replace secure application logic.

## 28.4 Reduce fingerprinting

```js
app.disable('x-powered-by');
```

This removes the default `X-Powered-By: Express` header.

## 28.5 Validate all input

Validate:

- body
- query string
- URL parameters
- uploaded files
- headers used by business logic
- webhook payloads
- external API responses when your application depends on their shape

## 28.6 Prevent open redirects

Bad:

```js
app.get('/go', (req, res) => {
  res.redirect(req.query.url);
});
```

An attacker could create:

```text
https://trusted.example/go?url=https://evil.example
```

Better: allow only known relative paths or approved hosts.

```js
const allowedHosts = new Set(['docs.example.com']);

app.get('/go', (req, res) => {
  const target = new URL(req.query.url);

  if (!allowedHosts.has(target.hostname)) {
    return res.status(400).json({ message: 'Invalid redirect target' });
  }

  res.redirect(target.toString());
});
```

## 28.7 Prevent injection

SQL example — bad:

```js
const sql = `SELECT * FROM users WHERE email = '${req.body.email}'`;
```

Use parameterized queries:

```js
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [req.body.email]
);
```

Also understand NoSQL injection, command injection, template injection, and path traversal depending on your stack.

## 28.8 Limit body sizes

```js
app.use(express.json({ limit: '1mb' }));
```

Do not accept 100 MB JSON requests when your API only needs a few kilobytes.

## 28.9 Secrets

Never commit:

```text
JWT_SECRET=...
DATABASE_PASSWORD=...
AWS_SECRET_ACCESS_KEY=...
```

into source control.

Use environment variables or a secrets manager.

## 28.10 Security checklist

- HTTPS
- supported dependencies
- Helmet/security headers
- input validation
- output escaping in templates
- safe SQL/DB queries
- authentication
- authorization
- secure cookie settings
- rate limiting
- CSRF defense where relevant
- safe CORS policy
- request body limits
- upload restrictions
- no sensitive stack traces in production
- secret management
- audit/security logs where appropriate
- dependency scanning
- backups and recovery

---

# 29. Rate Limiting and Brute-Force Protection

Rate limiting restricts how frequently a caller can hit an endpoint.

Typical use cases:

- login
- password reset
- OTP request
- public API
- expensive search/report endpoint
- webhook endpoint under abuse

Example with `express-rate-limit`:

```bash
npm install express-rate-limit
```

```js
import { rateLimit } from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: 'draft-8',
  legacyHeaders: false
});

app.use('/api', apiLimiter);
```

Stricter login limit:

```js
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false
});

app.post('/auth/login', loginLimiter, loginController);
```

### Distributed systems

If you run 10 Express instances, an in-memory limit on each instance may not represent a global limit. A shared backing store can be required.

### Avoid simplistic assumptions

IP-only blocking can cause problems behind NAT, mobile networks, proxies, and corporate gateways. For login defense, combine rate controls with account-aware protections and monitoring.

---

# 30. File Uploads

Express's JSON parser is not a multipart file upload solution. A common middleware is Multer.

```bash
npm install multer
```

## Memory upload example

```js
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

app.post('/profile/avatar', upload.single('avatar'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Avatar is required' });
  }

  // Upload req.file.buffer to trusted object storage, for example.
  res.status(201).json({
    originalName: req.file.originalname,
    size: req.file.size,
    mimeType: req.file.mimetype
  });
});
```

## Disk upload example

```js
const upload = multer({ dest: 'uploads/' });
```

## Security checklist for uploads

Do not trust only the filename or client-provided MIME type.

Validate:

- maximum size
- number of files
- file extension when relevant
- actual file signature/type when required
- destination path
- generated server-side filename
- access permissions
- malware scanning for higher-risk systems

Prefer storing public-facing user uploads in dedicated object storage/CDN rather than making your application source directory writable.

## Scenario: invoice upload API

```text
POST /api/invoices
multipart/form-data
  file: invoice.pdf
  vendorId: 84
```

Possible flow:

```text
Express receives upload
      |
      v
Validate metadata + size + file type
      |
      v
Store file safely
      |
      v
Create invoice record
      |
      v
Enqueue OCR job
      |
      v
202 Accepted + job/invoice ID
```

Do not keep an HTTP request open for several minutes while a heavy OCR pipeline runs if asynchronous processing is a better design.

---

# 31. Database Integration

Express is database-agnostic. You install a driver or ORM/ODM suitable for your database.

Common options include:

- MongoDB native driver / Mongoose
- PostgreSQL `pg`
- MySQL `mysql2`
- Prisma
- Sequelize
- TypeORM
- Knex
- Drizzle and other query builders/ORMs

The right tool depends on the project.

## 31.1 MongoDB with Mongoose

```bash
npm install mongoose
```

Connection:

```js
import mongoose from 'mongoose';

export async function connectDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
}
```

Model:

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
```

Service:

```js
export async function listUsers() {
  return User.find().sort({ createdAt: -1 }).lean();
}
```

## 31.2 PostgreSQL with `pg`

```bash
npm install pg
```

```js
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
```

Parameterized query:

```js
const result = await pool.query(
  'SELECT id, name, email FROM users WHERE id = $1',
  [userId]
);
```

## 31.3 MySQL with `mysql2`

```bash
npm install mysql2
```

```js
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  connectionLimit: 10
});
```

```js
const [rows] = await pool.execute(
  'SELECT id, name, email FROM users WHERE id = ?',
  [userId]
);
```

## Connection pooling

For relational databases, repeatedly opening a brand-new connection per query is inefficient. Use a pool according to your driver's guidance.

## Keep database logic out of routes

Poor:

```js
router.get('/users/:id', async (req, res) => {
  // 70 lines of SQL and business logic here
});
```

Better:

```text
route -> controller -> service -> repository -> database
```

---

# 32. Database Transactions

Transactions keep a group of database changes consistent.

### Scenario: order creation

You may need to:

1. create order
2. create order items
3. reduce inventory
4. create payment record

If step 3 fails, you may need to roll back steps 1 and 2.

Conceptual PostgreSQL example:

```js
const client = await pool.connect();

try {
  await client.query('BEGIN');

  const orderResult = await client.query(
    'INSERT INTO orders(customer_id) VALUES($1) RETURNING id',
    [customerId]
  );

  const orderId = orderResult.rows[0].id;

  await client.query(
    'INSERT INTO order_items(order_id, product_id, quantity) VALUES($1, $2, $3)',
    [orderId, productId, quantity]
  );

  await client.query(
    'UPDATE products SET stock = stock - $1 WHERE id = $2 AND stock >= $1',
    [quantity, productId]
  );

  await client.query('COMMIT');
  return orderId;
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  client.release();
}
```

### Important lesson

A database transaction cannot magically roll back an email already sent or an external payment already captured. Distributed workflows may require idempotency, compensating actions, outbox patterns, or orchestration.

---

# 33. MVC, Layered, and Feature-Based Architecture

Express does not force one project structure.

## 33.1 Small application

```text
src/
  app.js
  server.js
  routes.js
```

Perfectly acceptable for a small application.

## 33.2 Layered structure

```text
src/
  app.js
  server.js
  config/
  routes/
  controllers/
  services/
  repositories/
  models/
  middleware/
  validators/
  errors/
  utils/
```

Good when the team thinks in technical layers.

## 33.3 Feature-based structure

```text
src/
  app.js
  server.js
  modules/
    auth/
      auth.routes.js
      auth.controller.js
      auth.service.js
      auth.repository.js
      auth.schema.js
    users/
      user.routes.js
      user.controller.js
      user.service.js
      user.repository.js
      user.schema.js
    orders/
      order.routes.js
      order.controller.js
      order.service.js
      order.repository.js
      order.schema.js
  shared/
    middleware/
    errors/
    config/
```

Feature-based organization often scales well because code for one business capability stays together.

## MVC terminology

Classic MVC means:

- Model — domain/data
- View — rendered UI
- Controller — handles input and coordinates response

For JSON APIs without server-rendered views, teams often still say “MVC” even though the structure is closer to layered API architecture.

---

# 34. Controller-Service-Repository Pattern

A clean division of responsibility:

```text
Route
  |
  v
Controller
  |
  v
Service
  |
  v
Repository
  |
  v
Database
```

## Route

Defines endpoint and middleware.

```js
router.post('/', authenticate, validate(createOrderSchema), createOrder);
```

## Controller

Deals with HTTP details.

```js
export async function createOrder(req, res) {
  const order = await orderService.create({
    userId: req.auth.userId,
    ...req.validated.body
  });

  res.status(201).json({ data: order });
}
```

## Service

Business logic.

```js
export async function create(input) {
  const product = await productRepository.findById(input.productId);

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  if (product.stock < input.quantity) {
    throw new AppError('Insufficient stock', 409);
  }

  return orderRepository.create(input);
}
```

## Repository

Database interaction.

```js
export async function findById(id) {
  const result = await pool.query(
    'SELECT * FROM products WHERE id = $1',
    [id]
  );

  return result.rows[0] ?? null;
}
```

## Why use layers?

Benefits:

- easier testing
- less duplicated business logic
- controllers remain small
- database implementation can change more easily
- responsibilities are easier to understand

### Do not over-engineer

For a tiny application, five layers may make simple code harder to follow. Architecture should solve actual complexity, not create artificial complexity.

---

# 35. Dependency Injection

Dependency injection means giving an object/function the dependencies it needs instead of having it directly construct or import every dependency.

Without DI:

```js
import { userRepository } from './user.repository.js';

export async function getUser(id) {
  return userRepository.findById(id);
}
```

Simple manual DI:

```js
export function createUserService({ userRepository }) {
  return {
    async getUser(id) {
      return userRepository.findById(id);
    }
  };
}
```

Composition:

```js
const userService = createUserService({ userRepository });
```

Test:

```js
const fakeRepo = {
  findById: async id => ({ id, name: 'Test User' })
};

const service = createUserService({ userRepository: fakeRepo });
```

You do not need a heavy DI container to benefit from dependency injection.

---

# 36. Environment Variables and Configuration

Do not scatter raw environment access across hundreds of files.

Bad:

```js
if (process.env.NODE_ENV === 'production') { ... }
```

everywhere.

Better: centralize configuration.

```js
export const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
};
```

Validate required settings at startup.

```js
if (!config.databaseUrl) {
  throw new Error('DATABASE_URL is required');
}
```

A schema library can validate configuration more systematically.

## Typical environments

```text
development
staging / UAT
production
```

Environment behavior may differ for:

- database URL
- logging level
- cookie security
- API base URLs
- email providers
- feature flags

Avoid hiding major business behavior inside undocumented environment conditions.

---

# 37. Logging

Logs answer questions such as:

- What request failed?
- Which user/request caused it?
- How long did it take?
- Which upstream service failed?
- What error stack was recorded?

## Structured logging

Structured JSON logs are easier for machines to search.

Example:

```json
{
  "level": "error",
  "requestId": "97f...",
  "method": "POST",
  "path": "/api/orders",
  "statusCode": 500,
  "message": "Database timeout"
}
```

Libraries often used include Pino and Winston. Express production guidance specifically discusses using appropriate logging tooling rather than relying on casual `console.log()` use for production activity logs.

## Request ID middleware

```js
import crypto from 'node:crypto';

app.use((req, res, next) => {
  req.id = req.get('x-request-id') || crypto.randomUUID();
  res.set('x-request-id', req.id);
  next();
});
```

## Never log secrets

Avoid logging:

- passwords
- full authorization headers
- session IDs
- private keys
- complete payment details
- sensitive personal data unless explicitly required and protected

---

# 38. API Response Design

Consistency helps frontend teams and API consumers.

One possible success envelope:

```json
{
  "data": {
    "id": 42,
    "name": "Asha"
  }
}
```

Collection:

```json
{
  "data": [],
  "meta": {
    "page": 2,
    "limit": 20,
    "total": 113
  }
}
```

Error:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email"
      }
    ],
    "requestId": "2c343..."
  }
}
```

## Do you need `success: true`?

It is optional. HTTP already provides status semantics. Some organizations use an envelope for consistency; others prefer leaner REST responses.

The important thing is a documented, predictable contract.

## Never always return 200

Bad:

```json
HTTP 200
{
  "success": false,
  "error": "Not found"
}
```

Use meaningful HTTP status codes unless a specific external protocol forces another contract.

---

# 39. Pagination, Filtering, Sorting, and Search

Collection endpoints need boundaries.

## Offset pagination

Request:

```text
GET /api/products?page=3&limit=20
```

```js
const page = Math.max(Number(req.query.page) || 1, 1);
const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
const offset = (page - 1) * limit;
```

## Filtering

```text
GET /api/invoices?status=APPROVED&vendorId=42
```

## Sorting

```text
GET /api/products?sort=-createdAt,name
```

Never pass arbitrary sort field text directly into raw SQL. Map allowed API fields to known DB columns.

```js
const allowedSorts = {
  createdAt: 'created_at',
  name: 'name',
  price: 'price'
};
```

## Search

```text
GET /api/products?q=laptop
```

At small scale, DB text search may be sufficient. At larger scale, requirements may justify specialized search infrastructure.

## Cursor pagination

Useful for large, changing datasets:

```text
GET /api/events?after=eyJpZCI6MTAwMH0&limit=50
```

A cursor can encode the continuation position instead of relying on large offsets.

### Offset vs cursor

| Topic | Offset | Cursor |
|---|---|---|
| Easy to implement | Excellent | Moderate |
| Jump to page 50 | Easy | Harder |
| Stable under inserts | Weaker | Better when designed well |
| Huge offsets | Can become expensive | Often better |

---

# 40. API Versioning

Common strategies:

## URL versioning

```text
/api/v1/users
/api/v2/users
```

Easy to understand and operate.

## Header/media type versioning

Version information is sent in headers.

This can produce cleaner URLs but may be harder to inspect manually.

### When to create v2

Do not create a new version for every additive change.

Usually version when introducing breaking contract changes such as:

- field removed/renamed
- meaning changed
- incompatible request structure
- incompatible response structure

---

# 41. OpenAPI / Swagger Documentation

OpenAPI describes an HTTP API in a machine-readable document.

It can capture:

- endpoints
- methods
- parameters
- request bodies
- response schemas
- authentication schemes
- examples

Simplified YAML:

```yaml
openapi: 3.1.0
info:
  title: Store API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          description: User returned
        '404':
          description: User not found
```

You can expose interactive documentation using Swagger UI tooling, or generate clients/tests from the OpenAPI contract.

### Contract-first vs code-first

**Contract-first:** design OpenAPI before implementation.

**Code-first:** generate/specify docs alongside application code.

Both can work. The critical requirement is keeping the documentation synchronized with actual behavior.

---

# 42. Template Engines and Server-Side Rendering

Express can render HTML through template engines.

Popular choices historically include:

- EJS
- Pug
- Handlebars integrations

## EJS example

```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
app.set('views', './views');
```

Route:

```js
app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    user: req.user
  });
});
```

`views/dashboard.ejs`:

```html
<!doctype html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1>Welcome <%= user.name %></h1>
  </body>
</html>
```

Be careful with unescaped HTML rendering features. User-controlled input must not become executable HTML/JavaScript.

## When SSR with Express makes sense

- internal admin tools
- classic server-rendered applications
- simple sites
- email/template generation
- gradual migration from legacy server-rendered systems

---

# 43. Testing Express Applications

A useful test pyramid:

```text
        E2E
      /     \
 Integration
 /           \
   Unit tests
```

## Unit test

Tests a small function/service without starting HTTP infrastructure.

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTotal } from './order.service.js';

test('calculateTotal sums items', () => {
  const result = calculateTotal([
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  ]);

  assert.equal(result, 250);
});
```

## Integration HTTP test with Supertest

```bash
npm install --save-dev supertest
```

Make `app.js` export the app without listening:

```js
import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
```

Then `server.js`:

```js
import app from './app.js';

app.listen(3000);
```

Test:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../src/app.js';

test('GET /health', async () => {
  const response = await request(app)
    .get('/health')
    .expect(200);

  assert.deepEqual(response.body, { status: 'ok' });
});
```

### Why separate `app.js` and `server.js`?

It makes the app easy to import in tests without opening a real listening port.

## What to test

For an endpoint such as `POST /orders`, test:

- valid request -> 201
- invalid request -> 422/400
- unauthenticated -> 401
- unauthorized -> 403
- unknown product -> 404
- insufficient stock -> 409
- success response contract
- database/service failure -> expected safe error behavior

---

# 44. Mocking and Test Strategy

Mocks can isolate a unit from external systems.

Example fake repository:

```js
function createFakeUserRepository() {
  const users = new Map();

  return {
    async findById(id) {
      return users.get(id) ?? null;
    },
    async create(user) {
      users.set(user.id, user);
      return user;
    }
  };
}
```

## Avoid over-mocking

If every test mocks Express, the database, validation, serialization, and the service, you may only prove that your mocks agree with each other.

Balance:

- unit tests for business logic
- integration tests for database repositories
- HTTP integration tests for routes/middleware
- a smaller number of end-to-end tests for critical flows

---

# 45. Performance Optimization

Optimize based on measurement, not guesswork.

## 45.1 Avoid synchronous work in request paths

Avoid:

```js
fs.readFileSync(...)
crypto.pbkdf2Sync(...)
large synchronous loops
```

inside high-traffic request handlers.

## 45.2 Reduce unnecessary database work

Bad:

```text
GET /orders
  query orders
  for each order:
    query customer
    query items
```

This can create an N+1 query problem.

Use:

- joins
- batching
- eager loading where appropriate
- carefully designed repository queries

## 45.3 Paginate collections

Do not return all 5 million audit records in one response.

## 45.4 Cache expensive repeated reads

See caching chapter.

## 45.5 Compress text responses

Use application middleware or preferably edge/reverse-proxy compression for appropriate production setups.

## 45.6 Scale horizontally

```text
            Load balancer
           /      |      \
          v       v       v
      Express  Express  Express
         |        |        |
         +--------+--------+
                  |
          Shared database/cache
```

## 45.7 Profile before tuning

Monitor:

- latency percentiles
- throughput
- CPU
- memory
- event loop delay
- DB query time
- external service latency
- error rate

---

# 46. Caching

Caching stores results so expensive work does not need to be repeated immediately.

## In-memory cache

Useful only for some single-process cases:

```js
const cache = new Map();
```

Problems in multi-instance environments:

```text
Instance A cache != Instance B cache
```

## Redis-style shared cache

Concept:

```js
const key = `product:${id}`;
const cached = await redis.get(key);

if (cached) {
  return JSON.parse(cached);
}

const product = await productRepository.findById(id);
await redis.set(key, JSON.stringify(product), { EX: 60 });
return product;
```

## Cache invalidation

If product 42 changes:

```js
await productRepository.update(42, changes);
await redis.del('product:42');
```

### Famous hard problem

A cache that returns old incorrect business data can be worse than no cache. Define:

- TTL
- invalidation strategy
- cache key design
- acceptable staleness
- fallback behavior when cache is unavailable

## HTTP caching

Use HTTP headers such as:

- `Cache-Control`
- `ETag`
- `Last-Modified`

where appropriate. Public CDN/browser caching and server-side Redis caching solve different problems.

---

# 47. Compression

Compression reduces transferred response size for compressible content.

```bash
npm install compression
```

```js
import compression from 'compression';

app.use(compression());
```

For high-traffic production deployments, compression is often better handled by a reverse proxy or edge/CDN so Express can focus on application logic.

Do not waste CPU compressing already compressed formats such as many image/video/archive formats when it provides little benefit.

---

# 48. Streams and Large Responses

Node streams let you process data progressively instead of loading everything into memory.

Bad for a giant file:

```js
const file = await fs.readFile('/reports/huge.zip');
res.send(file);
```

Streaming:

```js
import fs from 'node:fs';

app.get('/download', (req, res, next) => {
  const stream = fs.createReadStream('/reports/huge.csv');

  res.type('text/csv');

  stream.on('error', next);
  stream.pipe(res);
});
```

Express helpers such as `res.download()` and `res.sendFile()` are often easier for file delivery, but understanding streams is essential for large data processing.

## Scenario: export 10 million records

Do not:

1. fetch all rows into RAM
2. create one giant array
3. stringify all of it

Consider:

- streaming DB cursor
- incremental CSV generation
- background export job
- object storage
- notification when file is ready

---

# 49. Server-Sent Events

**Server-Sent Events (SSE)** let the server continuously send text events over an HTTP connection to a browser.

Useful for:

- job progress
- notification streams
- live status dashboard
- AI token/event streaming

Example:

```js
app.get('/events', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });

  res.flushHeaders();

  const timer = setInterval(() => {
    res.write(`data: ${JSON.stringify({ time: new Date().toISOString() })}\n\n`);
  }, 5000);

  req.on('close', () => {
    clearInterval(timer);
  });
});
```

Client:

```js
const source = new EventSource('/events');

source.onmessage = event => {
  console.log(JSON.parse(event.data));
};
```

SSE is server-to-client. For full bidirectional real-time communication, WebSockets may fit better.

---

# 50. WebSockets and Socket.IO

Express itself is primarily an HTTP request/response framework. For WebSockets, integrate a WebSocket library or Socket.IO with the underlying HTTP server.

Conceptual Socket.IO setup:

```js
import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'https://app.example.com'
  }
});

io.on('connection', socket => {
  console.log('Connected:', socket.id);

  socket.on('join-order', orderId => {
    socket.join(`order:${orderId}`);
  });
});

server.listen(3000);
```

Send update:

```js
io.to(`order:${orderId}`).emit('order-status', {
  orderId,
  status: 'SHIPPED'
});
```

## Horizontal scaling consideration

If WebSocket clients connect across multiple application instances, you need an architecture that shares/broadcasts events appropriately and handles load balancer behavior.

---

# 51. Background Jobs and Queues

Not every task belongs inside an HTTP request.

Use background jobs for:

- OCR
- email
- invoice PDF processing
- video conversion
- scheduled reports
- imports
- large exports
- retrying external API integration

Pattern:

```text
POST /api/invoices
      |
      v
validate + save record
      |
      v
enqueue OCR job
      |
      v
202 Accepted

Worker process
      |
      v
OCR -> extraction -> validation -> DB update
```

Queue systems can provide:

- retries
- backoff
- concurrency control
- delayed jobs
- dead-letter/error handling
- persistence

Examples in the Node ecosystem include BullMQ with Redis and integration with cloud queue services.

## Endpoint pattern

```js
app.post('/reports', async (req, res) => {
  const job = await reportQueue.add('generate-report', {
    userId: req.auth.userId,
    filters: req.body.filters
  });

  res.status(202).json({
    data: {
      jobId: job.id,
      status: 'QUEUED'
    }
  });
});
```

Then:

```text
GET /reports/jobs/:jobId
```

can return progress/status.

---

# 52. Reverse Proxies and trust proxy

In production, Express is often behind a proxy:

```text
Browser
   |
   v
Nginx / load balancer / ingress
   |
   v
Express
```

The proxy may handle:

- TLS
- compression
- static files
- load balancing
- buffering
- request limits
- caching

## `trust proxy`

Without correct proxy trust configuration, Express may see the proxy's IP/protocol rather than the original client information.

Examples:

```js
app.set('trust proxy', 1);
```

or more specific trust functions/subnets depending on topology.

### Security warning

Do not blindly copy `app.set('trust proxy', true)` into every application. If the network path allows clients to directly control forwarded headers, incorrect trust configuration can let them spoof values used by `req.ip`, `req.protocol`, or security logic.

Document the actual proxy chain first.

---

# 53. Health Checks and Graceful Shutdown

Production systems need to know whether the process is alive and ready to receive traffic.

## Liveness

```js
app.get('/health/live', (req, res) => {
  res.json({ status: 'ok' });
});
```

## Readiness

A readiness endpoint may check essential dependencies:

```js
app.get('/health/ready', async (req, res) => {
  try {
    await database.ping();
    res.json({ status: 'ready' });
  } catch {
    res.status(503).json({ status: 'not-ready' });
  }
});
```

Be careful not to make health endpoints themselves extremely expensive.

## Graceful shutdown

```js
const server = app.listen(config.port);

async function shutdown(signal) {
  console.log(`Received ${signal}`);

  server.close(async error => {
    if (error) {
      console.error(error);
      process.exitCode = 1;
    }

    try {
      await database.close();
      await queue.close();
    } finally {
      process.exit();
    }
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
```

A robust shutdown design may also need a timeout so a stuck connection cannot prevent termination forever.

### Typical shutdown sequence

```text
Receive termination signal
        |
        v
Mark instance unready
        |
        v
Stop accepting new traffic
        |
        v
Finish/close active work within timeout
        |
        v
Close DB/cache/queue resources
        |
        v
Exit
```

---

# 54. Production Deployment

Production is more than `node server.js`.

Think about:

- environment variables/secrets
- HTTPS
- reverse proxy
- restart policy
- logs
- metrics/traces
- health checks
- backups
- database migrations
- horizontal scaling
- load balancing
- timeouts
- rate limits
- dependency updates
- incident handling

## Set production environment

Commonly:

```bash
NODE_ENV=production
```

## Stateless application principle

For easy horizontal scaling, avoid relying on mutable process-local state for data that must be shared between requests/instances.

Problem:

```js
const loggedInUsers = new Map();
```

If request 1 hits instance A and request 2 hits instance B, state may be inconsistent.

Use appropriate shared systems for:

- persistent application data
- session state
- shared cache
- queue state

---

# 55. Dockerizing Express

Example `Dockerfile`:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production
EXPOSE 3000

USER node
CMD ["node", "src/server.js"]
```

Example `.dockerignore`:

```text
node_modules
npm-debug.log
.git
.env
coverage
*.log
```

## Better production considerations

Depending on the project:

- pin/regularly update a supported Node base image
- use multi-stage builds if compilation is needed
- do not bake secrets into the image
- run as a non-root user where possible
- include health checks at orchestration/platform level
- keep image small, but not at the cost of maintainability/debuggability
- scan image dependencies

## Docker Compose development example

```yaml
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://app:secret@db:5432/app
    depends_on:
      - db

  db:
    image: postgres:17
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: app
```

Do not use literal production secrets in committed Compose files.

---

# 56. Nginx with Express

Typical architecture:

```text
Internet
   |
 HTTPS
   |
   v
Nginx :443
   |
 HTTP on private/local network
   |
   v
Express :3000
```

Simplified Nginx concept:

```nginx
server {
    listen 443 ssl;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Production configuration also needs proper TLS, timeouts, request limits, logging, security controls, and possibly WebSocket/SSE considerations.

Then configure Express `trust proxy` to match the actual trusted proxy topology.

---

# 57. Process Management and Scaling

A production Node process needs restart and lifecycle management.

Possible approaches:

- systemd/init system
- container orchestrator
- managed cloud platform
- PM2 in environments where it is chosen operationally

Express production guidance recommends ensuring automatic restart and notes modern deployments often use the operating system/init system or platform supervision.

## Horizontal scaling

```text
               Load Balancer
             /      |       \
            /       |        \
        API-1     API-2     API-3
          |         |         |
          +---------+---------+
                    |
          DB / Redis / queues
```

### Sticky sessions?

If you use process-local session state, you may feel forced into sticky sessions. A better architecture for many systems is shared session storage so any healthy instance can serve the request.

---

# 58. Observability and Monitoring

Observability is broader than logging.

Three common pillars:

```text
Logs
Metrics
Traces
```

## Useful HTTP metrics

- request count
- error count/rate
- response duration
- status codes
- request size
- response size
- active requests

## Runtime metrics

- CPU
- RSS/heap memory
- garbage collection behavior
- event loop delay
- process restarts

## Dependency metrics

- DB query latency
- DB pool saturation
- Redis latency
- queue depth
- external API errors

## Distributed tracing

In a microservice flow:

```text
Frontend
   |
   v
API Gateway
   |
   v
Order Service
   |
   +--> Payment Service
   |
   +--> Inventory Service
```

A trace ID helps connect work across services.

OpenTelemetry is commonly used as a vendor-neutral standard for telemetry instrumentation and export.

---

# 59. Express with TypeScript

Install basics:

```bash
npm install express
npm install --save-dev typescript @types/node @types/express tsx
```

`tsconfig.json` example:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"]
}
```

Example:

```ts
import express, {
  type Request,
  type Response,
  type NextFunction
} from 'express';

const app = express();

app.get('/users/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});
```

## Extending request data

You may want authenticated data such as:

```ts
req.auth.userId
```

One approach is module declaration merging.

```ts
declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        roles: string[];
      };
    }
  }
}
```

Then authentication middleware can safely populate `req.auth`.

### TypeScript does not replace runtime validation

This:

```ts
interface CreateUserBody {
  email: string;
}
```

cannot guarantee that a remote HTTP client actually sent a valid email string.

Use runtime validation as well.

---

# 60. Express 4 to Express 5 Migration Notes

Express 5 modernized several behaviors. Always review the official migration guide for an actual upgrade.

Important concepts include:

## 60.1 Node version

Express 5.x requires Node.js 18+.

## 60.2 Rejected promises

Express 5 forwards rejected promises from handlers/middleware to error handling.

```js
app.get('/user/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  res.send(user);
});
```

## 60.3 Route path syntax changes

Old wildcard:

```js
app.all('*', handler);
```

Express 5 form:

```js
app.all('/*splat', handler);
```

To match root `/` too:

```js
app.all('/{*splat}', handler);
```

Old optional style:

```js
'/:file.:ext?'
```

Express 5-style braces:

```js
'/:file{.:ext}'
```

Some regexp-like characters in string paths no longer work as before.

## 60.4 `express.urlencoded()` default

The `extended` default changed to `false` in Express 5. If you require rich `qs` parsing behavior, configure it explicitly:

```js
app.use(express.urlencoded({ extended: true }));
```

## 60.5 Static dotfiles

`express.static()` now defaults to ignoring dotfiles. If a legitimate directory such as `/.well-known` must be served, configure that path intentionally.

```js
app.use(
  '/.well-known',
  express.static('public/.well-known', { dotfiles: 'allow' })
);

app.use(express.static('public'));
```

## 60.6 Removed/deprecated old signatures

Very old Express patterns may no longer work. During a migration, search for removed signatures and deprecated APIs rather than only changing the package version.

### Migration strategy

1. add tests to critical routes
2. move to a supported Node version
3. upgrade dependencies
4. review Express migration guide
5. run official codemods where suitable
6. fix route syntax
7. test middleware/error behavior
8. test static files and body parsing
9. load/performance test important endpoints
10. deploy gradually with monitoring

---

# 61. Microservices with Express

Express can be used to build individual HTTP services.

Example architecture:

```text
             API Gateway
          /      |       \
         v       v        v
      Users    Orders   Invoices
        |        |         |
        DB       DB        DB
```

Potential benefits:

- independent deployment
- domain isolation
- different scaling profiles
- team ownership boundaries

Costs:

- network failures
- distributed transactions
- observability complexity
- deployment complexity
- API compatibility
- retries/idempotency
- duplicated infrastructure

Do not split a small monolith into microservices merely because microservices sound advanced.

## Timeout example

When service A calls service B, always think about:

```text
What if B takes 90 seconds?
```

Use explicit timeouts.

## Retry caution

Retries can multiply load during an outage.

Only retry operations that are safe or properly idempotent, and use bounded retry/backoff strategies.

---

# 62. Common Design Patterns

## 62.1 Middleware pipeline

Use middleware for cross-cutting HTTP concerns:

```text
request ID
logging
authentication
validation
rate limit
```

## 62.2 Controller-Service-Repository

Separates transport, business logic, and persistence.

## 62.3 Factory pattern

Create configured components:

```js
export function createOrderService(deps) {
  return { ... };
}
```

## 62.4 Adapter pattern

Wrap third-party providers behind your interface.

```js
class EmailProvider {
  async send(message) {}
}
```

Then an SES, SMTP, or another provider adapter can implement that contract.

## 62.5 Strategy pattern

Different calculation methods:

```text
GST calculation strategy
shipping strategy
payment strategy
```

## 62.6 Repository pattern

Hides persistence details from business services.

## 62.7 Outbox pattern

Useful when a DB change and eventual message/event publication must be coordinated reliably.

Simplified idea:

```text
DB transaction:
  save order
  save outbox event

background publisher:
  read unsent outbox event
  publish event
  mark sent
```

## 62.8 Idempotency pattern

Client sends:

```text
Idempotency-Key: 80ac...
```

Server remembers outcome for the key so retries do not accidentally create duplicate payments/orders.

---

# 63. Common Anti-Patterns

## 63.1 Everything in `server.js`

```text
200 routes
SQL
email
validation
business logic
all in one file
```

Hard to test and maintain.

## 63.2 Fat controllers

Controller should not contain every rule in the system.

## 63.3 Returning raw database errors

Bad:

```json
{
  "error": "duplicate key value violates unique constraint users_email_key..."
}
```

Translate known failures into safe API errors.

## 63.4 Trusting `req.body`

Never mass-assign arbitrary input directly into privileged DB fields.

## 63.5 Catch and ignore

Bad:

```js
try {
  await importantOperation();
} catch (error) {
  console.log(error);
}

res.json({ success: true });
```

The client receives false success.

## 63.6 Missing `return` after response

```js
if (!user) {
  res.status(404).json({ message: 'Not found' });
}

// code continues unexpectedly
```

## 63.7 No request timeout strategy

A single slow upstream dependency can occupy resources for a long time.

## 63.8 Process memory as database

Do not keep important business state only in arrays/maps in a horizontally scaled production service.

## 63.9 Blocking CPU work

Heavy synchronous processing blocks unrelated requests handled by the same event loop.

## 63.10 `next()` after sending response

Bad unless deliberately designed:

```js
res.json({ ok: true });
next();
```

A later middleware may attempt another response.

---

# 64. Debugging Common Problems

## Error: `Cannot set headers after they are sent`

Usually means you tried to send more than one response.

Example:

```js
if (!user) {
  res.status(404).send('Not found');
}

res.send(user);
```

Fix:

```js
if (!user) {
  return res.status(404).send('Not found');
}

return res.send(user);
```

## `req.body` is undefined

Possible causes:

- `express.json()` not registered
- middleware registered after route
- wrong `Content-Type`
- parser not appropriate for multipart/form-data

Correct order:

```js
app.use(express.json());
app.use('/api', router);
```

## Route returns 404 unexpectedly

Check:

- HTTP method
- mount path
- router path
- route order
- Express 5 path syntax
- trailing/case-sensitive routing settings

Example:

```js
app.use('/api/users', router);
router.get('/:id', handler);
```

Final URL:

```text
/api/users/:id
```

not:

```text
/:id
```

## CORS works in Postman but not browser

Expected possibility: Postman is not enforcing browser CORS rules. Inspect browser developer tools and server CORS headers.

## `req.ip` shows proxy address

Review your proxy chain and `trust proxy` setting.

## Login cookie not sent

Check:

- `Secure`
- `SameSite`
- domain
- path
- HTTPS
- CORS credentials settings
- frontend `credentials` option

## Memory grows continuously

Investigate:

- global arrays/maps
- retained listeners
- unbounded caches
- unclosed streams
- enormous body/file buffering
- unresolved work
- third-party library leaks

## App crashes during async operation

Make sure the failure occurs in a promise/handler Express can observe, or that detached asynchronous work handles its own errors.

Example of detached work that needs explicit care:

```js
app.post('/start', (req, res) => {
  doSomethingLater(); // not awaited
  res.status(202).end();
});
```

If `doSomethingLater()` rejects, it is no longer part of the route's awaited flow.

---

# 65. Complete Production-Style API Example

This example combines many concepts into a small users API.

## 65.1 Structure

```text
src/
  app.js
  server.js
  config/
    env.js
  modules/
    users/
      user.routes.js
      user.controller.js
      user.service.js
      user.repository.js
      user.schema.js
  middleware/
    request-id.js
    not-found.js
    error-handler.js
  errors/
    app-error.js
```

## 65.2 `config/env.js`

```js
export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: process.env.DATABASE_URL
};

if (!env.databaseUrl) {
  throw new Error('DATABASE_URL is required');
}
```

## 65.3 `errors/app-error.js`

```js
export class AppError extends Error {
  constructor(message, statusCode, code = 'APPLICATION_ERROR', details) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}
```

## 65.4 `modules/users/user.schema.js`

```js
import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().transform(v => v.toLowerCase())
});
```

## 65.5 `modules/users/user.repository.js`

```js
const users = new Map();
let nextId = 1;

export const userRepository = {
  async findAll() {
    return [...users.values()];
  },

  async findById(id) {
    return users.get(id) ?? null;
  },

  async findByEmail(email) {
    return [...users.values()].find(user => user.email === email) ?? null;
  },

  async create(input) {
    const user = {
      id: String(nextId++),
      ...input,
      createdAt: new Date().toISOString()
    };

    users.set(user.id, user);
    return user;
  }
};
```

This in-memory repository is only for learning. Replace it with a real database for persistence.

## 65.6 `modules/users/user.service.js`

```js
import { AppError } from '../../errors/app-error.js';
import { userRepository } from './user.repository.js';

export const userService = {
  async list() {
    return userRepository.findAll();
  },

  async getById(id) {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404, 'USER_NOT_FOUND');
    }

    return user;
  },

  async create(input) {
    const existing = await userRepository.findByEmail(input.email);

    if (existing) {
      throw new AppError('Email already exists', 409, 'EMAIL_EXISTS');
    }

    return userRepository.create(input);
  }
};
```

## 65.7 `modules/users/user.controller.js`

```js
import { createUserSchema } from './user.schema.js';
import { userService } from './user.service.js';

export async function listUsers(req, res) {
  const users = await userService.list();
  res.json({ data: users });
}

export async function getUser(req, res) {
  const user = await userService.getById(req.params.id);
  res.json({ data: user });
}

export async function createUser(req, res) {
  const input = createUserSchema.parse(req.body);
  const user = await userService.create(input);

  res
    .status(201)
    .location(`/api/v1/users/${user.id}`)
    .json({ data: user });
}
```

## 65.8 `modules/users/user.routes.js`

```js
import { Router } from 'express';
import {
  createUser,
  getUser,
  listUsers
} from './user.controller.js';

const router = Router();

router.get('/', listUsers);
router.post('/', createUser);
router.get('/:id', getUser);

export default router;
```

## 65.9 `middleware/request-id.js`

```js
import crypto from 'node:crypto';

export function requestId(req, res, next) {
  req.id = req.get('x-request-id') || crypto.randomUUID();
  res.set('x-request-id', req.id);
  next();
}
```

## 65.10 `middleware/not-found.js`

```js
export function notFound(req, res) {
  res.status(404).json({
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: `Cannot ${req.method} ${req.originalUrl}`,
      requestId: req.id
    }
  });
}
```

## 65.11 `middleware/error-handler.js`

```js
import { ZodError } from 'zod';

export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ZodError) {
    return res.status(422).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Request validation failed',
        details: err.issues,
        requestId: req.id
      }
    });
  }

  const statusCode = err.statusCode ?? 500;

  return res.status(statusCode).json({
    error: {
      code: err.code ?? 'INTERNAL_ERROR',
      message: statusCode >= 500 ? 'Internal server error' : err.message,
      details: err.details,
      requestId: req.id
    }
  });
}
```

## 65.12 `app.js`

```js
import express from 'express';
import helmet from 'helmet';
import userRouter from './modules/users/user.routes.js';
import { requestId } from './middleware/request-id.js';
import { notFound } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

const app = express();

app.disable('x-powered-by');
app.use(requestId);
app.use(helmet());
app.use(express.json({ limit: '1mb' }));

app.get('/health/live', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/users', userRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
```

## 65.13 `server.js`

```js
import app from './app.js';
import { env } from './config/env.js';

const server = app.listen(env.port, error => {
  if (error) {
    console.error('Startup error', error);
    process.exit(1);
  }

  console.log(`API listening on port ${env.port}`);
});

function shutdown(signal) {
  console.log(`${signal} received`);

  server.close(error => {
    if (error) {
      console.error('Shutdown error', error);
      process.exit(1);
    }

    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
```

## 65.14 Try it

Create user:

```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Asha","email":"asha@example.com"}'
```

List:

```bash
curl http://localhost:3000/api/v1/users
```

Get:

```bash
curl http://localhost:3000/api/v1/users/1
```

---

# 66. Real-World Scenarios

This chapter connects individual Express concepts into complete business flows.

## 66.1 E-commerce product API

Requirements:

```text
GET    /products
GET    /products/:id
POST   /products
PATCH  /products/:id
DELETE /products/:id
```

Rules:

- anyone can read active products
- only admins can create/update/delete
- price must be positive
- SKU must be unique
- list supports pagination/filtering

Pipeline:

```text
POST /products
  -> request ID
  -> rate limit
  -> authenticate
  -> require ADMIN permission
  -> validate body
  -> controller
  -> product service
  -> repository
  -> DB
  -> 201 response
```

Route:

```js
router.post(
  '/',
  authenticate,
  requirePermission('product:create'),
  validate(createProductSchema),
  createProduct
);
```

## 66.2 Login system

Endpoints:

```text
POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/refresh
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/me
```

Security concerns:

- password hashing
- rate limit login/reset
- avoid user enumeration where appropriate
- secure session/token handling
- token expiration and rotation
- audit suspicious events
- CSRF if cookie-based state-changing authentication model requires it

Flow:

```text
POST /auth/login
    |
    v
validate email/password shape
    |
    v
load user
    |
    v
verify password hash
    |
    v
issue session/token
    |
    v
return safe user profile
```

Never return `passwordHash` to the client.

## 66.3 Invoice OCR system

Endpoints:

```text
POST /invoices
GET  /invoices/:id
GET  /invoices/:id/extraction
POST /invoices/:id/reprocess
PATCH /invoices/:id/fields
POST /invoices/:id/approve
```

Upload request:

```text
POST /invoices
Content-Type: multipart/form-data
```

Recommended architecture:

```text
Upload API
   |
   +--> validate PDF/image
   +--> object storage
   +--> invoice DB record: UPLOADED
   +--> queue OCR job
   |
   v
202 Accepted

OCR worker
   |
   +--> download file
   +--> OCR
   +--> extract key-value fields
   +--> validate confidence/rules
   +--> save extraction
   +--> status = EXTRACTED / REVIEW_REQUIRED / FAILED
```

Why queue it?

OCR can be slow and CPU/GPU intensive. The API remains responsive while workers scale independently.

## 66.4 Payment webhook

Payment providers commonly sign webhook payloads.

A signature may depend on the exact raw request bytes.

Concept:

```js
app.post(
  '/webhooks/payment',
  express.raw({ type: 'application/json' }),
  paymentWebhookHandler
);
```

Handler concept:

```js
async function paymentWebhookHandler(req, res) {
  const signature = req.get('provider-signature');

  const event = paymentProvider.verifyWebhook({
    rawBody: req.body,
    signature
  });

  await webhookService.processIdempotently(event);

  res.sendStatus(200);
}
```

Important concerns:

- verify signature
- prevent replay where provider protocol supports it
- process events idempotently
- quickly acknowledge if provider expects fast response
- queue slow downstream work
- log event IDs safely

## 66.5 Multi-tenant SaaS

URL/header may identify tenant:

```text
https://acme.example.com
```

or:

```text
X-Tenant-Id: acme
```

Tenant resolution middleware:

```js
async function resolveTenant(req, res, next) {
  const tenantKey = req.get('x-tenant-id');
  const tenant = await tenantRepository.findByKey(tenantKey);

  if (!tenant) {
    return res.status(404).json({ message: 'Tenant not found' });
  }

  req.tenant = tenant;
  next();
}
```

Critical security rule:

Tenant isolation must be enforced in data access/business logic, not merely trusted because the client sent a tenant ID.

Repository queries should usually include tenant scope:

```sql
SELECT *
FROM invoices
WHERE tenant_id = $1
  AND id = $2
```

## 66.6 Admin approval workflow

Example invoice flow:

```text
DRAFT
  |
  v
SUBMITTED
  |
  v
MANAGER_APPROVED
  |
  v
FINANCE_APPROVED
  |
  v
POSTED
```

Endpoint:

```text
POST /invoices/:id/actions/approve
```

Service logic should verify:

- authenticated user
- permission
- current workflow status
- approver belongs to required level
- record not already acted upon
- concurrency/version state

Do not let the frontend alone enforce workflow order.

## 66.7 Long report generation

Bad:

```text
GET /reports/annual -> request runs 4 minutes -> proxy timeout
```

Better:

```text
POST /reports
  -> 202 { jobId }

GET /report-jobs/:jobId
  -> { status: "RUNNING", progress: 64 }

GET /reports/:reportId/download
  -> stream/file URL when ready
```

## 66.8 External API aggregation

Endpoint:

```text
GET /dashboard
```

Needs:

```text
customer service
billing service
inventory service
```

Use bounded timeouts and consider partial failure behavior.

```js
const [customer, billing, inventory] = await Promise.all([
  customerClient.get(...),
  billingClient.get(...),
  inventoryClient.get(...)
]);
```

`Promise.all()` fails fast if one rejects. Sometimes that is correct; sometimes `Promise.allSettled()` plus partial-response rules fit better.

## 66.9 Search endpoint with safe filters

Client:

```text
GET /employees?department=IT&status=ACTIVE&sort=-joinedAt&page=1
```

Do not concatenate raw client strings into SQL.

Create explicit mappings:

```js
const SORT_COLUMNS = {
  joinedAt: 'joined_at',
  name: 'name'
};
```

and parameterize values.

## 66.10 Idempotent order creation

Client retries after network timeout:

```text
POST /orders
Idempotency-Key: d9dcb...
```

Possible flow:

```text
check idempotency record
    |
    +-- existing completed -> return stored response
    |
    +-- existing processing -> return appropriate conflict/status
    |
    +-- missing -> reserve key -> process order -> store outcome
```

This is particularly important for payments and other non-repeatable operations.

---

# 67. Interview Questions and Answers

## Q1. What is Express.js?

Express is a minimal Node.js web framework used to build HTTP applications and APIs using routing and middleware abstractions on top of Node's HTTP APIs.

## Q2. What is middleware?

Middleware is a function in the request processing chain that can inspect/change the request/response, end the response, call the next middleware, or forward an error.

Typical signature:

```js
(req, res, next) => {}
```

## Q3. Why is middleware order important?

Express executes matching middleware in registration order. A parser, authentication middleware, route, 404 handler, or error handler placed in the wrong position may not work as intended.

## Q4. Difference between `app.use()` and `app.get()`?

`app.use()` mounts middleware and can apply across methods and path prefixes. `app.get()` registers a handler specifically for GET requests matching a route.

## Q5. Difference between `req.params`, `req.query`, and `req.body`?

```text
/users/:id       -> req.params
/users?page=2    -> req.query
POST JSON body   -> req.body
```

## Q6. What does `next()` do?

It passes control to the next matching middleware/handler in the stack.

## Q7. What does `next(err)` do?

It skips normal middleware and forwards control to error-handling middleware.

## Q8. What changed for async errors in Express 5?

Rejected promises/throws from promise-returning route handlers and middleware are automatically forwarded to Express error handling.

## Q9. How do you make routes modular?

Use `express.Router()` and mount routers:

```js
app.use('/api/users', userRouter);
```

## Q10. What is `mergeParams`?

It allows a child router to preserve parameters from the parent router's mount path.

## Q11. Why should business logic not live entirely in controllers?

It becomes harder to reuse/test and couples domain behavior to HTTP concerns. A service layer can hold business rules while controllers handle transport concerns.

## Q12. How do you handle 404?

Add normal middleware after all routes that sends 404 when no prior handler handled the request.

## Q13. How do you define error middleware?

```js
function errorHandler(err, req, res, next) {}
```

Register it after routes/404 logic.

## Q14. What causes “headers already sent” errors?

Usually sending more than one response for the same request, or trying to change headers after the body/headers have begun sending.

## Q15. Why use `return res.status(...).json(...)`?

`return` stops the current handler function and prevents accidental execution of later code that may send another response.

## Q16. What is CORS?

A browser mechanism using HTTP headers to determine whether frontend JavaScript from another origin may access a response.

## Q17. Does CORS secure an API from non-browser clients?

No. Authentication/authorization and other security controls are still required.

## Q18. What is CSRF?

An attack that causes a user's browser to submit an unwanted authenticated state-changing request, especially relevant to automatically attached credentials such as cookies.

## Q19. Session vs JWT?

A server-side session commonly stores session state on the server with an ID in a cookie. A JWT is a signed token containing claims. Neither is universally better; architecture, revocation needs, browser threat model, scale, and identity requirements matter.

## Q20. Why use HTTP status codes correctly?

They communicate standard response semantics to clients, monitoring, proxies, tools, and humans.

## Q21. How can Express scale?

Run multiple stateless application instances behind a load balancer and use shared persistent systems for state that must be shared.

## Q22. Why is synchronous I/O dangerous in request handlers?

It blocks the Node event loop and can delay unrelated concurrent requests.

## Q23. What is `trust proxy`?

It configures which proxy hops/addresses Express should trust when deriving properties based on forwarded headers such as client IP and protocol.

## Q24. Why separate `app.js` and `server.js`?

It lets tests import the Express application without opening a real network listener, and separates application configuration from process startup.

## Q25. What is graceful shutdown?

Stopping new work, allowing in-flight requests to finish within bounds, closing dependencies, and exiting cleanly when the process receives a termination signal.

## Q26. How do you protect an upload endpoint?

Limit size/count, validate file type/content, generate safe names, control storage paths, authenticate/authorize, scan when appropriate, and avoid exposing arbitrary uploaded content unsafely.

## Q27. How should validation be organized?

Validate external data at the boundary using schemas, then apply separate domain/business validation in services.

## Q28. What is an N+1 query problem?

Fetching a list with one query and then issuing additional queries per item, creating many unnecessary DB round trips.

## Q29. How can you improve API performance?

Measure first, then consider DB optimization, pagination, caching, compression, asynchronous I/O, reverse proxy/CDN, background jobs, and horizontal scaling.

## Q30. What is the difference between authentication and authorization?

Authentication identifies the caller. Authorization decides what that caller is allowed to do.

## Q31. When should you return 401 vs 403?

A common convention:

- `401`: authentication missing/invalid
- `403`: identity is known but lacks permission

## Q32. Why shouldn't you store sessions in process memory in scaled production?

Different instances do not share memory; state disappears on restart and can become inconsistent.

## Q33. What is a reverse proxy?

A server in front of Express that accepts client traffic and forwards it to application instances, often handling TLS, compression, static files, routing, and load balancing.

## Q34. What is the difference between SSE and WebSockets?

SSE is a simple server-to-client event stream over HTTP. WebSockets provide full bidirectional persistent communication.

## Q35. What is an idempotency key?

A client-generated key that lets the server recognize retries of the same logical operation and prevent duplicate side effects.

---

# 68. Practice Projects

Use these in order. Do not only watch tutorials—build and debug applications yourself.

## Level 1 — Basics

### Project 1: Notes API

Build:

```text
GET    /notes
GET    /notes/:id
POST   /notes
PATCH  /notes/:id
DELETE /notes/:id
```

Learn:

- routing
- params
- query
- JSON body
- status codes
- middleware

Start with an in-memory array, then migrate to a database.

### Project 2: URL shortener

Features:

- create short URL
- redirect short code
- expiration
- click count

Learn:

- redirects
- DB lookup
- validation
- unique keys

## Level 2 — Intermediate

### Project 3: Authentication API

Features:

- register
- login
- logout
- current profile
- password reset
- role checks

Learn:

- hashing
- cookies/sessions or tokens
- auth middleware
- rate limiting
- validation

### Project 4: E-commerce API

Entities:

```text
users
products
categories
cart
orders
order_items
```

Learn:

- transactions
- authorization
- pagination
- filtering
- repositories/services

### Project 5: File upload portal

Features:

- authenticated upload
- size/type validation
- object storage
- private download authorization

Learn:

- multipart forms
- streams
- permissions

## Level 3 — Advanced

### Project 6: Invoice processing backend

Features:

- upload PDF/image
- queue OCR
- extraction status
- manual corrections
- approval workflow
- audit history
- final posting integration

Learn:

- queues
- workers
- uploads
- workflow states
- RBAC/permissions
- external API integration
- idempotency

### Project 7: Real-time support dashboard

Features:

- tickets
- chat/status updates
- SSE/WebSocket
- authentication
- presence/status

Learn:

- long-lived connections
- horizontal scaling challenges
- real-time event architecture

### Project 8: Multi-tenant SaaS API

Features:

- organizations
- members
- permissions
- tenant-scoped data
- audit log
- API keys

Learn:

- tenant isolation
- advanced authorization
- security architecture

## Level 4 — Production Engineering

Take one prior project and add:

- Docker
- reverse proxy
- CI/CD
- health checks
- structured logs
- metrics
- tracing
- graceful shutdown
- load tests
- rate limiting
- API docs
- integration tests
- migrations
- backups
- Redis cache
- background queue
- horizontal scaling

At this point you are no longer learning only Express syntax; you are learning backend engineering.

---

# 69. Express.js Cheat Sheet

## Create app

```js
import express from 'express';
const app = express();
```

## Body parsers

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.raw());
```

## Static files

```js
app.use('/assets', express.static('public'));
```

## HTTP routes

```js
app.get('/path', handler);
app.post('/path', handler);
app.put('/path', handler);
app.patch('/path', handler);
app.delete('/path', handler);
app.options('/path', handler);
app.head('/path', handler);
app.all('/path', handler);
```

## Middleware

```js
app.use(middleware);
app.use('/admin', adminMiddleware);
```

## Middleware array / multiple handlers

```js
app.get('/secure', authenticate, authorize, controller);
```

or:

```js
const guards = [authenticate, authorize];
app.get('/secure', guards, controller);
```

## Router

```js
import { Router } from 'express';
const router = Router();

router.get('/', handler);
app.use('/api/users', router);
```

## Router options

```js
const router = Router({
  caseSensitive: false,
  mergeParams: true,
  strict: false
});
```

## Params

```js
router.get('/:id', (req, res) => {
  console.log(req.params.id);
});
```

## Query

```js
const { page, limit, sort } = req.query;
```

## Body

```js
const { name, email } = req.body;
```

## Header

```js
const auth = req.get('authorization');
```

## Common request properties

```js
req.app
req.baseUrl
req.body
req.cookies
req.hostname
req.ip
req.ips
req.method
req.originalUrl
req.params
req.path
req.protocol
req.query
req.route
req.secure
req.subdomains
req.url
```

## Useful request methods

```js
req.get('content-type')
req.header('content-type')
req.accepts('json')
req.acceptsCharsets(...)
req.acceptsEncodings(...)
req.acceptsLanguages(...)
req.is('application/json')
req.range(size)
```

## Status + JSON

```js
res.status(200).json({ data });
```

## Create response

```js
res.status(201).json({ data: created });
```

## Empty success

```js
res.status(204).end();
```

## Send text/HTML/buffer

```js
res.send('Hello');
```

## Common response methods/properties

```js
res.app
res.headersSent
res.locals
res.status(code)
res.send(body)
res.json(value)
res.jsonp(value)
res.end()
res.redirect(url)
res.render(view, locals)
res.sendFile(path)
res.download(path)
res.set(field, value)
res.get(field)
res.append(field, value)
res.type(type)
res.location(path)
res.cookie(name, value, options)
res.clearCookie(name, options)
res.attachment(filename)
res.format({...})
res.links({...})
res.sendStatus(code)
res.vary(field)
```

## `res.format()` content negotiation example

```js
res.format({
  'application/json': () => res.json({ message: 'hello' }),
  'text/html': () => res.send('<h1>hello</h1>'),
  default: () => res.status(406).send('Not Acceptable')
});
```

## Cookie

```js
res.cookie('sid', value, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax'
});
```

## Route chain

```js
router
  .route('/:id')
  .get(getOne)
  .patch(updateOne)
  .delete(deleteOne);
```

## Parameter middleware

```js
router.param('id', async (req, res, next, id) => {
  req.record = await repository.findById(id);
  next();
});
```

## Normal middleware

```js
function middleware(req, res, next) {
  next();
}
```

## Error middleware

```js
function errorHandler(err, req, res, next) {
  res.status(500).json({ message: 'Internal server error' });
}
```

## `next()` variants

Normal continuation:

```js
next();
```

Error:

```js
next(error);
```

Skip remaining handlers for current route and continue route matching:

```js
next('route');
```

Inside router middleware, Express also supports router-control behavior such as `next('router')` for appropriate router escape scenarios. These are advanced tools; prefer straightforward route organization when possible.

## 404

```js
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
```

## Listen

```js
const server = app.listen(3000, error => {
  if (error) throw error;
  console.log('Listening');
});
```

## App settings

```js
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.enable('case sensitive routing');
app.disable('x-powered-by');
```

Check:

```js
app.enabled('case sensitive routing');
app.disabled('x-powered-by');
```

## App locals

```js
app.locals.appName = 'Portal';
```

## Response locals

```js
res.locals.user = req.user;
```

## Sub-application

Express applications can be mounted inside another Express application:

```js
const admin = express();

admin.get('/', (req, res) => {
  res.send('Admin home');
});

app.use('/admin', admin);
```

Routers are generally more common for modular route organization.

## Express 5 wildcard

```js
app.all('/{*splat}', handler);
```

## Async handler

```js
app.get('/users', async (req, res) => {
  const users = await userService.list();
  res.json({ data: users });
});
```

## Recommended rough middleware order

```js
app.disable('x-powered-by');

app.use(requestId);
app.use(logger);
app.use(helmet());
app.use(cors(corsOptions));
app.use(rateLimiter);
app.use(express.json({ limit: '1mb' }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRouter);

app.use(notFound);
app.use(errorHandler);
```

Some routes such as raw signed webhooks may need their parser registered before a general JSON parser or on a separate route with deliberately chosen parsing behavior.

---

# 70. Learning Roadmap

## Stage 1 — JavaScript + Node basics

Learn:

```text
JavaScript functions
objects/arrays
modules
promises
async/await
try/catch
Node npm
package.json
environment variables
HTTP basics
```

## Stage 2 — Express fundamentals

Learn:

```text
express()
app.listen()
routes
req/res
params
query
body
middleware
Router
404
error handling
```

Build a CRUD API.

## Stage 3 — Real API development

Learn:

```text
validation
database
controller/service/repository
authentication
authorization
pagination
file upload
OpenAPI
testing
```

Build authentication + e-commerce API.

## Stage 4 — Security + production

Learn:

```text
HTTPS
Helmet
CORS
CSRF
secure cookies
rate limiting
secrets
logging
health checks
graceful shutdown
Docker
reverse proxy
```

Deploy your application.

## Stage 5 — Scale and architecture

Learn:

```text
Redis
caching
queues
background workers
SSE/WebSockets
observability
load balancing
horizontal scaling
idempotency
transactions
microservices trade-offs
```

Build an asynchronous invoice/report processing system.

## Recommended learning method

For every topic:

```text
1. Understand WHY it exists
2. Write smallest working example
3. Break it intentionally
4. Read the error
5. Fix it
6. Apply it to a real scenario
7. Write a test
8. Explain it in your own words
```

This produces deeper skill than memorizing snippets.

---

# 71. Official References

Use the official documentation as the final source of truth for version-specific behavior.

- Express home/documentation: `https://expressjs.com/`
- Express 5 API: `https://expressjs.com/en/5x/api/`
- Express 5 installation: `https://expressjs.com/en/5x/starter/installing/`
- Express 5 migration guide: `https://expressjs.com/en/guide/migrating-5/`
- Security best practices: `https://expressjs.com/en/advanced/best-practice-security/`
- Performance/reliability best practices: `https://expressjs.com/en/advanced/best-practice-performance/`
- Database integration: `https://expressjs.com/en/guide/database-integration/`
- Node.js documentation: `https://nodejs.org/docs/latest/api/`

Third-party middleware and libraries evolve independently. Always read their current official documentation before copying configuration into production.

---

# Appendix A — Express Concepts A to Z

## A — Application

The object returned by `express()` representing your Express app.

## B — Body

Data sent inside an HTTP request. Parse only expected content types and validate the resulting data.

## C — Controller / CORS / Cookie

- Controller: HTTP-facing handler layer.
- CORS: browser cross-origin response access policy.
- Cookie: browser-managed value sent with matching requests.

## D — Database / Dependency Injection

Express does not choose your database. DI makes dependencies explicit and easier to test.

## E — Error Handling / ESM

Use centralized error middleware; ESM is the modern `import`/`export` module system.

## F — File Upload / Filtering

Multipart uploads need dedicated handling. Collection endpoints commonly support controlled filters.

## G — Graceful Shutdown

Stop accepting work, finish bounded in-flight work, close resources, exit safely.

## H — HTTP / Headers / Helmet

Express is fundamentally an HTTP framework. Headers carry protocol metadata. Helmet helps configure security-related response headers.

## I — Idempotency / Input Validation

Idempotency protects retry-sensitive operations. Validate all untrusted input.

## J — JSON / JWT

JSON is a common API representation. JWT is a signed token format, not an entire authentication architecture.

## K — Keys

API keys, secret keys, and idempotency keys solve different problems. Never expose private secrets.

## L — Logging / Load Balancing

Structured logs help diagnosis. Load balancing distributes traffic across instances.

## M — Middleware / MVC / MongoDB

Middleware is Express's central composition model. MVC is one architecture style. MongoDB is one of many databases Express can use.

## N — Node.js / `next()`

Express runs on Node.js. `next()` advances middleware processing.

## O — OpenAPI / Observability

OpenAPI documents HTTP contracts. Observability uses logs, metrics, and traces to understand running systems.

## P — Parameters / Pagination / Proxy

Path parameters identify route components; pagination bounds collections; reverse proxies commonly sit in front of Express.

## Q — Query String / Queue

Query strings handle optional request modifiers; queues move slow/retryable work outside request latency.

## R — Request / Response / Router / REST / Rate Limit

Core Express concepts used in almost every API.

## S — Service / Session / Static / Security / SSE

Services hold business rules; sessions track server-side login state; static middleware serves files; SSE streams server events.

## T — Transactions / TLS / TypeScript

Transactions maintain DB consistency, TLS protects traffic, TypeScript adds static type checking.

## U — URL / Upload

Route paths and URLs are core to routing; uploads require size/type/storage safety.

## V — Validation / Versioning / Views

Validate boundaries, version breaking API changes deliberately, and use views for server-side HTML rendering.

## W — Webhook / WebSocket / Worker

Webhooks receive server-to-server events, WebSockets provide bidirectional real-time communication, workers run background jobs.

## X — XSS / `X-Forwarded-*`

XSS is script injection into trusted web content. Forwarded headers carry proxy-derived client/protocol information and must only be trusted according to correct proxy configuration.

## Y — YAML

OpenAPI specifications and deployment configuration are often written in YAML.

## Z — Zero Trust of Input

A useful backend rule: treat external input as untrusted until validated and authorized.

---

# Appendix B — Production Readiness Checklist

Use this before calling an Express API production-ready.

## Application

- [ ] Express/Node versions are supported.
- [ ] Configuration is validated at startup.
- [ ] Routes are modular and understandable.
- [ ] Business logic is testable outside controllers.
- [ ] Async errors reach centralized error handling.
- [ ] 404 behavior is consistent.
- [ ] API response contracts are documented.

## Validation and Data

- [ ] Body/params/query are validated.
- [ ] Unknown privileged fields cannot be mass-assigned.
- [ ] DB queries are parameterized/safe.
- [ ] Transactions protect multi-step DB workflows where required.
- [ ] Pagination exists for large collections.
- [ ] Database indexes match important query patterns.

## Authentication and Authorization

- [ ] Passwords are securely hashed.
- [ ] Credentials/tokens have appropriate lifetimes.
- [ ] Authorization is enforced server-side.
- [ ] Resource ownership/tenant isolation is checked.
- [ ] Sensitive endpoints have brute-force/rate protection.

## Web Security

- [ ] HTTPS/TLS is enabled.
- [ ] Security headers are configured.
- [ ] `X-Powered-By` is disabled if desired.
- [ ] CORS is intentionally configured.
- [ ] CSRF threat is addressed for the chosen authentication architecture.
- [ ] Cookies use appropriate `HttpOnly`, `Secure`, `SameSite` settings.
- [ ] Open redirects are prevented.
- [ ] Upload endpoints are restricted.
- [ ] Request size limits are configured.
- [ ] Secrets are outside source control.

## Reliability

- [ ] Health endpoints exist.
- [ ] Graceful shutdown is implemented.
- [ ] External calls have explicit timeouts.
- [ ] Retry behavior is bounded and safe.
- [ ] Idempotency exists for retry-sensitive operations.
- [ ] Slow/background work uses workers/queues when suitable.
- [ ] Application restarts automatically after a crash.

## Operations

- [ ] Structured logs are centralized.
- [ ] Request IDs/correlation IDs exist.
- [ ] Metrics are collected.
- [ ] Alerts cover meaningful failure conditions.
- [ ] Database backups are tested.
- [ ] Deployment rollback strategy exists.
- [ ] Dependency and container vulnerabilities are monitored.
- [ ] Capacity/load testing has been considered.

---

# Appendix C — Common HTTP API Decision Guide

| Situation | Typical choice |
|---|---|
| Read resource | `GET /resources/:id` |
| List resources | `GET /resources` |
| Create resource | `POST /resources` + 201 |
| Partial update | `PATCH /resources/:id` |
| Replace representation | `PUT /resources/:id` |
| Delete | `DELETE /resources/:id` |
| Async long job | `POST` + 202 + job/status resource |
| Missing auth | 401 |
| Authenticated but forbidden | 403 |
| Resource missing | 404 |
| Duplicate/conflicting state | 409 |
| Input validation failure | 400 or 422 according to API convention |
| Rate limit exceeded | 429 |
| Unexpected server error | 500 |
| Temporary dependency/service unavailable | commonly 503 when semantically appropriate |

The exact status code contract should be documented and consistent across your API.

---

# Appendix D — Middleware Order Diagnostic

When something does not work, inspect registration order.

A common API stack:

```text
1. proxy/trust configuration (app setting)
2. request ID/context
3. access logging
4. security headers
5. CORS
6. global rate limiting
7. specialized raw webhook routes if needed
8. JSON/form parsers
9. public routes
10. authentication
11. protected routers
12. 404 handler
13. centralized error handler
```

This is a guideline, not a universal law. For example, route-specific rate limiting, parsers, or authentication can be mounted inside routers.

Ask these questions:

```text
Did the middleware path match?
Did an earlier middleware end the response?
Did an earlier middleware forget next()?
Did the body parser run before the route?
Did error middleware come last?
Did the router mount path combine as expected?
```

---

# Appendix E — Final Mental Model

When debugging or designing any Express endpoint, walk through this checklist mentally:

```text
1. What HTTP method/path reaches this endpoint?
2. Which middleware runs before it?
3. What external input enters through params/query/body/headers/cookies/files?
4. How is that input validated?
5. Who is the caller?
6. What is the caller allowed to do?
7. What business rule is being executed?
8. What database/external systems are touched?
9. Does this operation need a transaction or idempotency?
10. Could this work be too slow for an HTTP request?
11. What response/status code is returned?
12. What happens when every dependency fails?
13. What gets logged/observed?
14. How will it behave with multiple Express instances?
15. How will it shut down or recover during deployment/failure?
```

If you can answer those questions clearly, you are thinking beyond Express syntax and toward production backend engineering.

---

**End of Express.js Master Handbook**
