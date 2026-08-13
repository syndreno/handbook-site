# Java Servlet Master Handbook
## Beginner → Advanced → Real-World Development

> A single-file learning handbook for Java/Jakarta Servlets.  
> Goal: understand **what Servlets are, how the Servlet container works, how HTTP maps to Java code, and how to build maintainable server-side Java web applications**.

---

## Handbook Status

- **Primary API used:** Jakarta Servlet 6.1
- **Namespace used in modern examples:** `jakarta.servlet.*`
- **Recommended modern learning runtime:** Java 17+ with Apache Tomcat 11
- **Older tutorials/projects:** may use `javax.servlet.*`
- **Important:** Servlets are still foundational even when you later use JSP, Spring MVC, Spring Boot, Jakarta Faces, or other Java web frameworks.

### Modern vs Legacy Package Names

Older Java EE code:

```java
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
```

Modern Jakarta EE code:

```java
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
```

The concepts are almost the same, but the package namespace changed from `javax.*` to `jakarta.*`.

---

# Table of Contents

1. [What Is a Servlet?](#1-what-is-a-servlet)
2. [Where Servlets Fit in Java Web Development](#2-where-servlets-fit-in-java-web-development)
3. [Prerequisites](#3-prerequisites)
4. [HTTP Fundamentals You Must Know](#4-http-fundamentals-you-must-know)
5. [Servlet Container](#5-servlet-container)
6. [Servlet Lifecycle](#6-servlet-lifecycle)
7. [Your First Servlet Project](#7-your-first-servlet-project)
8. [Servlet Interfaces and Classes](#8-servlet-interfaces-and-classes)
9. [URL Mapping](#9-url-mapping)
10. [HTTP Methods](#10-http-methods)
11. [HttpServletRequest](#11-httpservletrequest)
12. [Request Parameters](#12-request-parameters)
13. [Request Headers](#13-request-headers)
14. [Reading Request Bodies](#14-reading-request-bodies)
15. [Request Attributes](#15-request-attributes)
16. [HttpServletResponse](#16-httpservletresponse)
17. [Status Codes](#17-status-codes)
18. [Response Headers](#18-response-headers)
19. [Character Encoding and Content Types](#19-character-encoding-and-content-types)
20. [Redirect vs Forward vs Include](#20-redirect-vs-forward-vs-include)
21. [RequestDispatcher](#21-requestdispatcher)
22. [ServletConfig](#22-servletconfig)
23. [ServletContext](#23-servletcontext)
24. [Scopes](#24-scopes)
25. [Cookies](#25-cookies)
26. [Sessions](#26-sessions)
27. [URL Rewriting](#27-url-rewriting)
28. [Forms and Validation](#28-forms-and-validation)
29. [File Upload](#29-file-upload)
30. [Filters](#30-filters)
31. [Listeners](#31-listeners)
32. [Annotations](#32-annotations)
33. [web.xml](#33-webxml)
34. [Programmatic Registration](#34-programmatic-registration)
35. [Exception and Error Handling](#35-exception-and-error-handling)
36. [Async Servlets](#36-async-servlets)
37. [Non-Blocking I/O](#37-non-blocking-io)
38. [Authentication and Authorization](#38-authentication-and-authorization)
39. [Web Security](#39-web-security)
40. [JDBC with Servlets](#40-jdbc-with-servlets)
41. [DAO + Service + Servlet Architecture](#41-dao--service--servlet-architecture)
42. [Servlet + JSP MVC](#42-servlet--jsp-mvc)
43. [JSON APIs with Servlets](#43-json-apis-with-servlets)
44. [CORS](#44-cors)
45. [Pagination, Search, and Sorting](#45-pagination-search-and-sorting)
46. [Logging](#46-logging)
47. [Thread Safety](#47-thread-safety)
48. [Performance and Scalability](#48-performance-and-scalability)
49. [Caching](#49-caching)
50. [Deployment and WAR Files](#50-deployment-and-war-files)
51. [Tomcat Concepts](#51-tomcat-concepts)
52. [Testing Servlets](#52-testing-servlets)
53. [Design Patterns](#53-design-patterns)
54. [Real-World Scenario Examples](#54-real-world-scenario-examples)
55. [Common Errors and Troubleshooting](#55-common-errors-and-troubleshooting)
56. [Bad Practices and Better Alternatives](#56-bad-practices-and-better-alternatives)
57. [Servlet Interview Questions](#57-servlet-interview-questions)
58. [Practice Exercises](#58-practice-exercises)
59. [Project Ideas](#59-project-ideas)
60. [Learning Roadmap](#60-learning-roadmap)
61. [Quick Reference Cheat Sheet](#61-quick-reference-cheat-sheet)
62. [Official References](#62-official-references)

---

# 1. What Is a Servlet?

A **Servlet** is a Java class managed by a **Servlet container**. It receives requests from clients, executes server-side logic, and creates responses.

A browser may request:

```text
GET /products
```

The Servlet container finds the matching Servlet:

```java
@WebServlet("/products")
public class ProductServlet extends HttpServlet {
}
```

Then it calls the appropriate method, usually:

```java
doGet(...)
```

Your Servlet can:

- read URL/query parameters
- read form data
- read headers
- access cookies
- access sessions
- call services
- query databases
- validate input
- redirect users
- forward requests
- return HTML
- return JSON
- return files
- set HTTP status codes and headers

### Simple mental model

```text
Browser
   |
   | HTTP Request
   v
Servlet Container
   |
   | finds URL mapping
   v
Servlet
   |
   | business/database logic
   v
HTTP Response
   |
   v
Browser
```

---

# 2. Where Servlets Fit in Java Web Development

A traditional Java web application may use:

```text
Browser
   |
   v
Servlet / Controller
   |
   v
Service
   |
   v
DAO / Repository
   |
   v
Database
```

For server-rendered HTML:

```text
Browser
   |
   v
Servlet Controller
   |
   | request attributes
   v
JSP View
   |
   v
HTML Response
```

Servlets are a foundational layer for many higher-level Java web technologies.

### Servlet vs Spring MVC

Servlet:

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(
            HttpServletRequest req,
            HttpServletResponse resp) throws IOException {

        resp.getWriter().println("Hello");
    }
}
```

Spring MVC:

```java
@GetMapping("/hello")
@ResponseBody
public String hello() {
    return "Hello";
}
```

Spring MVC is more convenient, but internally Java web servers still rely heavily on Servlet infrastructure.

---

# 3. Prerequisites

Before learning Servlets, understand:

### Java

- classes and objects
- inheritance
- interfaces
- exceptions
- collections
- strings
- streams
- annotations
- packages
- Maven or Gradle basics

### Web

- HTTP
- URLs
- forms
- HTML
- cookies
- sessions
- status codes

### Recommended environment

For this handbook:

```text
Java: 17+
Servlet API: Jakarta Servlet 6.1
Container: Apache Tomcat 11
Build: Maven
IDE: IntelliJ IDEA / Eclipse / VS Code
```

You can also use Tomcat 10.1 with Jakarta Servlet 6.0 when working on Jakarta EE 10-era projects.

---

# 4. HTTP Fundamentals You Must Know

Servlets are much easier when HTTP is understood first.

## 4.1 HTTP Request

Example:

```http
GET /shop/products?id=10 HTTP/1.1
Host: example.com
Accept: text/html
User-Agent: Browser
Cookie: JSESSIONID=ABC123
```

Main parts:

```text
Method      GET
Path        /shop/products
Query       id=10
Headers     Host, Accept, Cookie...
Body        optional
```

## 4.2 HTTP Response

```http
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8

<h1>Product</h1>
```

Main parts:

```text
Status code
Headers
Body
```

## 4.3 Common HTTP Methods

| Method | Typical meaning |
|---|---|
| GET | Read data |
| POST | Create/process data |
| PUT | Replace/update resource |
| PATCH | Partial update |
| DELETE | Delete resource |
| HEAD | Same headers as GET but no body |
| OPTIONS | Discover supported communication options |

Servlet `HttpServlet` provides methods such as:

```java
doGet()
doPost()
doPut()
doDelete()
doHead()
doOptions()
```

---

# 5. Servlet Container

A Servlet does not normally run directly.

It runs inside a **Servlet container**.

Examples:

- Apache Tomcat
- Jetty
- Undertow
- application servers implementing Jakarta EE web technologies

The container handles:

- creating Servlet objects
- calling lifecycle methods
- URL mapping
- creating request/response objects
- thread management
- sessions
- security integration
- filters
- listeners
- deployment
- class loading

### Important principle

You normally do **not** write:

```java
new ProductServlet();
```

The container creates and manages the Servlet.

---

# 6. Servlet Lifecycle

The basic lifecycle is:

```text
1. Class loaded
2. Servlet object created
3. init()
4. service()
5. service()
6. service()
7. ...
8. destroy()
```

## 6.1 init()

Called once after Servlet creation.

```java
@Override
public void init() throws ServletException {
    System.out.println("Servlet initialized");
}
```

Use cases:

- read configuration
- initialize expensive reusable resources
- initialize application components

Avoid opening one database `Connection` and sharing it forever.

## 6.2 service()

For HTTP Servlets, `HttpServlet.service()` examines the request method.

Example:

```text
GET     -> doGet()
POST    -> doPost()
PUT     -> doPut()
DELETE  -> doDelete()
```

Usually you override `doGet()`, `doPost()`, etc., rather than `service()`.

## 6.3 destroy()

Called before the Servlet is removed from service.

```java
@Override
public void destroy() {
    System.out.println("Servlet destroyed");
}
```

Use it for cleanup of resources owned by the Servlet.

---

# 7. Your First Servlet Project

## 7.1 Maven project structure

```text
servlet-master-demo/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/example/web/
        │       └── HelloServlet.java
        └── webapp/
            ├── index.html
            └── WEB-INF/
                └── web.xml
```

## 7.2 Maven dependency

```xml
<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.1.0</version>
    <scope>provided</scope>
</dependency>
```

Why `provided`?

Because the Servlet container provides the Servlet API implementation at runtime.

A basic Maven configuration:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="
         http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>servlet-master-demo</artifactId>
    <version>1.0.0</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.release>17</maven.compiler.release>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>6.1.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

</project>
```

## 7.3 First Servlet

```java
package com.example.web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().println("Hello Servlet!");
    }
}
```

Request:

```text
http://localhost:8080/servlet-master-demo/hello
```

Possible response:

```text
Hello Servlet!
```

---

# 8. Servlet Interfaces and Classes

Important hierarchy:

```text
Servlet
  |
  +-- GenericServlet
         |
         +-- HttpServlet
```

## 8.1 Servlet interface

The low-level contract.

Important methods:

```java
init(...)
service(...)
destroy()
getServletConfig()
getServletInfo()
```

## 8.2 GenericServlet

Protocol-independent helper implementation.

Rarely used directly for normal HTTP applications.

## 8.3 HttpServlet

Designed for HTTP.

Most applications extend:

```java
HttpServlet
```

Example:

```java
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response) {
    }

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response) {
    }
}
```

---

# 9. URL Mapping

A Servlet must be mapped to a URL.

## 9.1 Annotation mapping

```java
@WebServlet("/users")
public class UserServlet extends HttpServlet {
}
```

## 9.2 Multiple mappings

```java
@WebServlet(urlPatterns = {
    "/users",
    "/members"
})
```

## 9.3 Exact mapping

```text
/users
```

Matches:

```text
/app/users
```

## 9.4 Path mapping

```java
@WebServlet("/api/*")
```

Matches:

```text
/api/users
/api/orders
/api/products/10
```

## 9.5 Extension mapping

```text
*.action
```

Examples:

```text
/login.action
/logout.action
```

## 9.6 Default mapping

```text
/
```

Useful for Front Controller-style routing, but must be designed carefully.

---

# 10. HTTP Methods

## 10.1 GET

Use for retrieving information.

```java
@Override
protected void doGet(
        HttpServletRequest req,
        HttpServletResponse resp)
        throws IOException {

    resp.getWriter().println("Showing products");
}
```

Example:

```text
GET /products
```

GET should normally be safe and should not perform destructive changes.

Bad:

```text
GET /delete-user?id=10
```

Better:

```text
DELETE /users/10
```

or for HTML forms:

```text
POST /users/delete
```

## 10.2 POST

Use when submitting or creating information.

```java
@Override
protected void doPost(
        HttpServletRequest req,
        HttpServletResponse resp)
        throws IOException {

    String name = req.getParameter("name");

    resp.getWriter().println("Created: " + name);
}
```

## 10.3 PUT

```java
@Override
protected void doPut(
        HttpServletRequest req,
        HttpServletResponse resp)
        throws IOException {

    resp.getWriter().println("Updating resource");
}
```

## 10.4 DELETE

```java
@Override
protected void doDelete(
        HttpServletRequest req,
        HttpServletResponse resp)
        throws IOException {

    resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
}
```

---

# 11. HttpServletRequest

`HttpServletRequest` represents the incoming HTTP request.

Useful methods:

```java
request.getMethod();
request.getRequestURI();
request.getRequestURL();
request.getContextPath();
request.getServletPath();
request.getPathInfo();
request.getQueryString();

request.getParameter("name");
request.getParameterValues("skills");
request.getParameterMap();

request.getHeader("User-Agent");
request.getHeaderNames();

request.getCookies();
request.getSession();

request.getAttribute("user");
request.setAttribute("user", user);

request.getInputStream();
request.getReader();

request.getRemoteAddr();
request.getLocale();
```

Example:

```java
String method = request.getMethod();
String uri = request.getRequestURI();
String ip = request.getRemoteAddr();
```

---

# 12. Request Parameters

Request parameters usually come from:

- query string
- HTML form fields

## 12.1 Query parameter

Request:

```text
/products?id=25
```

Read:

```java
String id = request.getParameter("id");
```

## 12.2 Form parameter

HTML:

```html
<form method="post" action="register">
    <input name="username">
    <input name="email">
    <button type="submit">Register</button>
</form>
```

Servlet:

```java
String username = request.getParameter("username");
String email = request.getParameter("email");
```

## 12.3 Multiple values

HTML:

```html
<input type="checkbox" name="skills" value="Java">
<input type="checkbox" name="skills" value="SQL">
<input type="checkbox" name="skills" value="Angular">
```

Servlet:

```java
String[] skills = request.getParameterValues("skills");

if (skills != null) {
    for (String skill : skills) {
        System.out.println(skill);
    }
}
```

## 12.4 Important validation rule

Never assume a parameter exists.

Bad:

```java
int age = Integer.parseInt(request.getParameter("age"));
```

Safer:

```java
String ageText = request.getParameter("age");

if (ageText == null || ageText.isBlank()) {
    response.sendError(400, "Age is required");
    return;
}

try {
    int age = Integer.parseInt(ageText);
} catch (NumberFormatException ex) {
    response.sendError(400, "Age must be numeric");
}
```

---

# 13. Request Headers

Read a header:

```java
String userAgent = request.getHeader("User-Agent");
```

Authorization:

```java
String auth = request.getHeader("Authorization");
```

Content type:

```java
String contentType = request.getContentType();
```

Enumerate headers:

```java
var names = request.getHeaderNames();

while (names.hasMoreElements()) {
    String name = names.nextElement();
    String value = request.getHeader(name);

    System.out.println(name + " = " + value);
}
```

### Use cases

- authentication
- content negotiation
- caching
- tracing
- client metadata
- API versioning
- CORS

---

# 14. Reading Request Bodies

For text:

```java
String body = request.getReader()
        .lines()
        .reduce("", (a, b) -> a + b);
```

A clearer version:

```java
StringBuilder body = new StringBuilder();

try (var reader = request.getReader()) {
    String line;

    while ((line = reader.readLine()) != null) {
        body.append(line);
    }
}
```

For binary input:

```java
try (var input = request.getInputStream()) {
    byte[] data = input.readAllBytes();
}
```

### JSON request example

Request:

```json
{
  "name": "Shoeb",
  "role": "Developer"
}
```

A Servlet does not automatically map JSON to Java objects. Typically use a JSON library such as Jackson or JSON-B.

---

# 15. Request Attributes

Attributes are server-side objects attached to a request.

```java
request.setAttribute("username", "Aisha");
```

Read:

```java
String username =
    (String) request.getAttribute("username");
```

Common use:

```text
Servlet Controller
    |
    | setAttribute()
    v
JSP
```

Example:

```java
request.setAttribute("products", products);
request.getRequestDispatcher("/WEB-INF/views/products.jsp")
       .forward(request, response);
```

### Parameter vs attribute

| Request parameter | Request attribute |
|---|---|
| Comes from client | Usually set by server code |
| Usually String/String[] | Can be any Java object |
| `getParameter()` | `getAttribute()` |
| Query/form data | Internal server communication |

---

# 16. HttpServletResponse

Represents the outgoing HTTP response.

Common methods:

```java
response.setStatus(200);
response.sendError(404);
response.sendRedirect("/login");

response.setHeader("X-Test", "value");
response.addHeader("Set-Cookie", "...");

response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");

response.getWriter();
response.getOutputStream();
```

## Text output

```java
response.setContentType("text/plain");
response.setCharacterEncoding("UTF-8");

response.getWriter().println("Hello");
```

## HTML output

```java
response.setContentType("text/html");
response.setCharacterEncoding("UTF-8");

response.getWriter().println("""
    <!doctype html>
    <html>
    <body>
        <h1>Hello</h1>
    </body>
    </html>
    """);
```

For large server-rendered pages, prefer a view technology rather than building HTML manually inside Java.

---

# 17. Status Codes

Common statuses:

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 301 | Moved Permanently |
| 302 | Found / redirect |
| 304 | Not Modified |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 409 | Conflict |
| 415 | Unsupported Media Type |
| 422 | Unprocessable Content |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

Example:

```java
response.setStatus(HttpServletResponse.SC_CREATED);
```

Error:

```java
response.sendError(
    HttpServletResponse.SC_BAD_REQUEST,
    "Invalid employee ID"
);
```

---

# 18. Response Headers

Set:

```java
response.setHeader("X-Request-Id", requestId);
```

Add another value:

```java
response.addHeader("Cache-Control", "no-store");
```

Common response headers:

```text
Content-Type
Content-Disposition
Cache-Control
Location
Set-Cookie
ETag
Last-Modified
Access-Control-Allow-Origin
```

---

# 19. Character Encoding and Content Types

For HTML:

```java
response.setContentType("text/html");
response.setCharacterEncoding("UTF-8");
```

For JSON:

```java
response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");
```

For plain text:

```java
response.setContentType("text/plain");
```

Set encoding **before** writing response data.

Example:

```java
response.setCharacterEncoding("UTF-8");
response.setContentType("application/json");

response.getWriter().write(json);
```

---

# 20. Redirect vs Forward vs Include

This is one of the most important Servlet topics.

## 20.1 Redirect

```java
response.sendRedirect(
    request.getContextPath() + "/login"
);
```

Flow:

```text
Browser -> /submit
Server  -> 302 Location: /login
Browser -> /login
```

Properties:

- new browser request
- URL changes
- request attributes do not survive
- can redirect outside current application

## 20.2 Forward

```java
request.getRequestDispatcher("/WEB-INF/views/home.jsp")
       .forward(request, response);
```

Flow:

```text
Browser -> Servlet
             |
             v
            JSP
```

Properties:

- server-side
- same request
- browser URL does not change
- request attributes remain available

## 20.3 Include

```java
request.getRequestDispatcher("/header")
       .include(request, response);
```

Used when another resource's response should become part of the current response.

## Quick comparison

| Feature | Redirect | Forward |
|---|---|---|
| New request | Yes | No |
| Browser URL changes | Yes | No |
| Request attributes retained | No | Yes |
| Can target external URL | Yes | Normally no |
| Extra network round-trip | Yes | No |

---

# 21. RequestDispatcher

Get dispatcher:

```java
RequestDispatcher dispatcher =
    request.getRequestDispatcher("/WEB-INF/views/user.jsp");
```

Forward:

```java
dispatcher.forward(request, response);
```

Include:

```java
dispatcher.include(request, response);
```

### Why keep JSP under WEB-INF?

Example:

```text
/WEB-INF/views/users.jsp
```

Browsers cannot normally access resources inside `WEB-INF` directly.

That encourages requests to go through the Servlet controller.

---

# 22. ServletConfig

`ServletConfig` holds configuration for one Servlet.

Example annotation:

```java
@WebServlet(
    value = "/report",
    initParams = {
        @WebInitParam(
            name = "pageSize",
            value = "50"
        )
    }
)
public class ReportServlet extends HttpServlet {
}
```

Read:

```java
String pageSize =
    getServletConfig().getInitParameter("pageSize");
```

Or simply:

```java
String pageSize = getInitParameter("pageSize");
```

### Use when

The setting belongs specifically to one Servlet.

---

# 23. ServletContext

`ServletContext` represents the web application context.

Get it:

```java
ServletContext context = getServletContext();
```

Store shared application data:

```java
context.setAttribute("applicationName", "Employee Portal");
```

Read:

```java
String appName =
    (String) context.getAttribute("applicationName");
```

Application-wide init parameter:

```xml
<context-param>
    <param-name>companyName</param-name>
    <param-value>ABC Ltd</param-value>
</context-param>
```

Read:

```java
String companyName =
    getServletContext().getInitParameter("companyName");
```

---

# 24. Scopes

Understanding scope prevents many bugs.

## 24.1 Request scope

Lifetime:

```text
one request
```

Example:

```java
request.setAttribute("employee", employee);
```

Use for:

- validation errors
- page data
- controller-to-view data

## 24.2 Session scope

Lifetime:

```text
multiple requests from one user/session
```

Example:

```java
session.setAttribute("loggedInUser", user);
```

Use for:

- authenticated user identity
- shopping cart
- limited workflow state

## 24.3 Application scope

Lifetime:

```text
whole deployed application
```

Example:

```java
getServletContext().setAttribute("config", config);
```

Use for truly shared data.

Do not put user-specific information here.

### Scope comparison

```text
Request      -> shortest
Session      -> per user/browser session
Application  -> all users
```

---

# 25. Cookies

A cookie is small data sent to a browser and returned on later requests.

Create:

```java
Cookie cookie = new Cookie("theme", "dark");

cookie.setMaxAge(60 * 60 * 24 * 30);
cookie.setHttpOnly(true);
cookie.setSecure(true);

response.addCookie(cookie);
```

Read:

```java
Cookie[] cookies = request.getCookies();

if (cookies != null) {
    for (Cookie cookie : cookies) {
        if ("theme".equals(cookie.getName())) {
            String theme = cookie.getValue();
        }
    }
}
```

Delete:

```java
Cookie cookie = new Cookie("theme", "");
cookie.setMaxAge(0);
cookie.setPath("/");

response.addCookie(cookie);
```

### Typical cookie uses

- session identifiers
- language
- UI theme
- safe preferences

Avoid storing:

- passwords
- sensitive personal data
- authorization decisions directly in untrusted cookie values

---

# 26. Sessions

HTTP is stateless.

Sessions let the server associate multiple requests with a logical user interaction.

Create/get session:

```java
HttpSession session = request.getSession();
```

Get existing only:

```java
HttpSession session = request.getSession(false);
```

Store:

```java
session.setAttribute("user", user);
```

Read:

```java
User user = (User) session.getAttribute("user");
```

Remove one:

```java
session.removeAttribute("user");
```

Invalidate everything:

```java
session.invalidate();
```

## Login example

```java
if (authenticationService.isValid(username, password)) {

    request.changeSessionId();

    HttpSession session = request.getSession();
    session.setAttribute("username", username);

    response.sendRedirect(
        request.getContextPath() + "/dashboard"
    );

} else {
    request.setAttribute(
        "error",
        "Invalid username or password"
    );

    request.getRequestDispatcher("/WEB-INF/views/login.jsp")
           .forward(request, response);
}
```

Calling `changeSessionId()` after authentication helps reduce session fixation risk.

---

# 27. URL Rewriting

Sessions often use cookies such as `JSESSIONID`.

If URL-based session tracking is needed, encode URLs through the response.

```java
String url =
    response.encodeURL(
        request.getContextPath() + "/cart"
    );
```

Redirect:

```java
String redirectUrl =
    response.encodeRedirectURL(
        request.getContextPath() + "/checkout"
    );
```

Avoid manually appending `jsessionid`.

---

# 28. Forms and Validation

HTML:

```html
<form action="register" method="post">
    <input name="name">
    <input name="email">
    <button type="submit">Register</button>
</form>
```

Servlet:

```java
@Override
protected void doPost(
        HttpServletRequest request,
        HttpServletResponse response)
        throws ServletException, IOException {

    String name = request.getParameter("name");
    String email = request.getParameter("email");

    Map<String, String> errors = new HashMap<>();

    if (name == null || name.isBlank()) {
        errors.put("name", "Name is required");
    }

    if (email == null || !email.contains("@")) {
        errors.put("email", "Valid email is required");
    }

    if (!errors.isEmpty()) {
        request.setAttribute("errors", errors);
        request.setAttribute("name", name);
        request.setAttribute("email", email);

        request.getRequestDispatcher(
            "/WEB-INF/views/register.jsp"
        ).forward(request, response);

        return;
    }

    // service.register(...)

    response.sendRedirect(
        request.getContextPath() + "/register-success"
    );
}
```

### Why validate server-side?

Browser validation can be bypassed.

Always validate important input on the server.

---

# 29. File Upload

Servlets support multipart requests.

Annotation:

```java
@WebServlet("/upload")
@MultipartConfig(
    maxFileSize = 5 * 1024 * 1024,
    maxRequestSize = 10 * 1024 * 1024
)
public class UploadServlet extends HttpServlet {
}
```

HTML:

```html
<form action="upload"
      method="post"
      enctype="multipart/form-data">

    <input type="file" name="document">

    <button type="submit">
        Upload
    </button>
</form>
```

Servlet:

```java
@Override
protected void doPost(
        HttpServletRequest request,
        HttpServletResponse response)
        throws IOException, ServletException {

    Part filePart = request.getPart("document");

    String submittedName =
        filePart.getSubmittedFileName();

    long size = filePart.getSize();

    response.getWriter().println(
        "Uploaded " + submittedName +
        " (" + size + " bytes)"
    );
}
```

### Security rules for uploads

Never trust:

```java
filePart.getSubmittedFileName()
```

directly as a server filesystem path.

Validate:

- size
- extension
- MIME/content type
- actual file content where required
- generated storage name
- storage location

Avoid allowing executable files into publicly executable directories.

---

# 30. Filters

A **Filter** intercepts requests/responses before/after Servlet execution.

Flow:

```text
Request
   |
   v
Filter 1
   |
   v
Filter 2
   |
   v
Servlet
   |
   v
Filter 2
   |
   v
Filter 1
   |
   v
Response
```

Common uses:

- authentication
- authorization
- logging
- CORS
- character encoding
- request tracing
- response headers
- rate-limiting integration

## Authentication filter

```java
@WebFilter("/secure/*")
public class AuthenticationFilter implements Filter {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest =
            (HttpServletRequest) request;

        HttpServletResponse httpResponse =
            (HttpServletResponse) response;

        HttpSession session =
            httpRequest.getSession(false);

        boolean loggedIn =
            session != null &&
            session.getAttribute("user") != null;

        if (!loggedIn) {
            httpResponse.sendRedirect(
                httpRequest.getContextPath() + "/login"
            );
            return;
        }

        chain.doFilter(request, response);
    }
}
```

### Critical concept

If you forget:

```java
chain.doFilter(...)
```

the request does not continue to later filters/Servlets unless you intentionally terminate it.

---

# 31. Listeners

Listeners react to lifecycle events.

Examples:

- application starts/stops
- session created/destroyed
- request starts/ends
- attributes added/removed

## Application listener

```java
@WebListener
public class ApplicationListener
        implements ServletContextListener {

    @Override
    public void contextInitialized(
            ServletContextEvent event) {

        System.out.println("Application started");
    }

    @Override
    public void contextDestroyed(
            ServletContextEvent event) {

        System.out.println("Application stopped");
    }
}
```

## Session listener

```java
@WebListener
public class SessionCounterListener
        implements HttpSessionListener {

    @Override
    public void sessionCreated(
            HttpSessionEvent event) {

        System.out.println("Session created");
    }

    @Override
    public void sessionDestroyed(
            HttpSessionEvent event) {

        System.out.println("Session destroyed");
    }
}
```

### Important listener interfaces

```text
ServletContextListener
ServletContextAttributeListener
ServletRequestListener
ServletRequestAttributeListener
HttpSessionListener
HttpSessionAttributeListener
HttpSessionIdListener
```

---

# 32. Annotations

Common Servlet annotations:

```text
@WebServlet
@WebFilter
@WebListener
@WebInitParam
@MultipartConfig
@ServletSecurity
```

Example:

```java
@WebServlet(
    name = "EmployeeServlet",
    urlPatterns = "/employees",
    loadOnStartup = 1
)
```

`loadOnStartup` can request initialization during application startup rather than waiting for the first matching request.

---

# 33. web.xml

Deployment descriptor:

```text
WEB-INF/web.xml
```

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<web-app
    xmlns="https://jakarta.ee/xml/ns/jakartaee"
    version="6.1">

    <display-name>Servlet Demo</display-name>

    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>
            com.example.web.HelloServlet
        </servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>

</web-app>
```

### Annotation vs web.xml

Use annotations for:

- local mappings
- small/simple configuration

Use `web.xml` when:

- centralized deployment configuration is useful
- configuration must be external to source annotations
- legacy applications depend on it
- security/error/session settings need explicit descriptor configuration

---

# 34. Programmatic Registration

Servlets can also be registered programmatically.

Initializer:

```java
public class AppInitializer
        implements ServletContainerInitializer {

    @Override
    public void onStartup(
            Set<Class<?>> classes,
            ServletContext context) {

        ServletRegistration.Dynamic servlet =
            context.addServlet(
                "healthServlet",
                new HealthServlet()
            );

        servlet.addMapping("/health");
    }
}
```

Useful for:

- frameworks
- libraries
- dynamic configuration

Normal beginner applications usually use annotations or `web.xml`.

---

# 35. Exception and Error Handling

## 35.1 sendError

```java
response.sendError(
    HttpServletResponse.SC_NOT_FOUND,
    "Employee not found"
);
```

## 35.2 Catch expected application errors

```java
try {
    employeeService.create(employee);
} catch (DuplicateEmployeeException ex) {
    response.sendError(
        HttpServletResponse.SC_CONFLICT,
        "Employee already exists"
    );
}
```

## 35.3 Central error pages

`web.xml`:

```xml
<error-page>
    <error-code>404</error-code>
    <location>/errors/404.html</location>
</error-page>

<error-page>
    <exception-type>
        java.lang.Throwable
    </exception-type>
    <location>/errors/500.jsp</location>
</error-page>
```

### Production rule

Do not send stack traces, SQL details, file paths, secrets, or internal architecture details to users.

Log detailed internal information server-side.

Return safe client-facing messages.

---

# 36. Async Servlets

Normally a Servlet request occupies a container thread while work is executing.

For long-running operations, asynchronous processing may be useful.

```java
@WebServlet(
    value = "/long-task",
    asyncSupported = true
)
public class LongTaskServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response) {

        AsyncContext async = request.startAsync();

        async.start(() -> {
            try {
                HttpServletResponse asyncResponse =
                    (HttpServletResponse)
                        async.getResponse();

                asyncResponse.setContentType("text/plain");
                asyncResponse.getWriter()
                             .println("Task complete");

            } catch (IOException ex) {
                throw new RuntimeException(ex);
            } finally {
                async.complete();
            }
        });
    }
}
```

### Useful when

- waiting on slow remote I/O
- long-polling-style operations
- integrating asynchronous workflows

### Not magic

Async does not automatically make slow code faster.

It changes how request execution uses threads/resources.

---

# 37. Non-Blocking I/O

Servlet APIs also support non-blocking I/O using callbacks.

Important types:

```text
ReadListener
WriteListener
ServletInputStream
ServletOutputStream
```

Conceptual example:

```java
ServletInputStream input =
    request.getInputStream();

input.setReadListener(
    new ReadListener() {
        // callbacks
    }
);
```

This is an advanced topic.

Use it when high concurrency and non-blocking streaming genuinely matter. Do not add complexity without a measured need.

---

# 38. Authentication and Authorization

Authentication answers:

```text
Who are you?
```

Authorization answers:

```text
What are you allowed to do?
```

## 38.1 Session-based application authentication

Typical flow:

```text
POST /login
    |
    v
Validate credentials
    |
    v
Create authenticated session
    |
    v
Redirect to dashboard
```

## 38.2 Role check

```java
if (request.isUserInRole("ADMIN")) {
    // admin behavior
}
```

## 38.3 Declarative security

Example:

```java
@WebServlet("/admin/*")
@ServletSecurity(
    @HttpConstraint(
        rolesAllowed = {"ADMIN"}
    )
)
public class AdminServlet extends HttpServlet {
}
```

Container authentication requires corresponding server/application security configuration.

---

# 39. Web Security

Servlet knowledge without security knowledge is incomplete.

## 39.1 SQL injection

Bad:

```java
String sql =
    "SELECT * FROM users WHERE email='" +
    email + "'";
```

Use parameterized queries:

```java
PreparedStatement ps =
    connection.prepareStatement(
        "SELECT * FROM users WHERE email = ?"
    );

ps.setString(1, email);
```

## 39.2 XSS

Never assume user-supplied HTML/text is safe to render.

If a user enters:

```html
<script>alert('xss')</script>
```

it must not become executable markup in your rendered page.

Output-encode based on context.

## 39.3 CSRF

For session-authenticated state-changing forms, use CSRF protection.

Concept:

```text
Server generates unpredictable CSRF token
        |
        v
Token placed in form
        |
        v
POST includes token
        |
        v
Server validates token
```

Do not use GET for state-changing operations.

## 39.4 Session fixation

After successful login:

```java
request.changeSessionId();
```

## 39.5 Secure cookies

Session/auth-related cookies should use appropriate security attributes such as:

```text
Secure
HttpOnly
SameSite
```

depending on your application architecture.

## 39.6 HTTPS

Production authentication and sensitive traffic should use HTTPS.

## 39.7 Security headers

Examples often applied at proxy/container/application level:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
```

Choose policies according to the application rather than blindly copying values.

## 39.8 Never trust client input

Validate:

```text
parameters
headers
cookies
uploaded files
JSON
path values
query strings
```

---

# 40. JDBC with Servlets

A beginner example:

```java
@WebServlet("/employees")
public class EmployeeServlet extends HttpServlet {

    private EmployeeService employeeService;

    @Override
    public void init() {
        employeeService =
            new EmployeeService(
                new EmployeeDao()
            );
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        List<Employee> employees =
            employeeService.findAll();

        request.setAttribute(
            "employees",
            employees
        );

        request.getRequestDispatcher(
            "/WEB-INF/views/employees.jsp"
        ).forward(request, response);
    }
}
```

DAO:

```java
public class EmployeeDao {

    public Employee findById(long id)
            throws SQLException {

        String sql = """
            SELECT id, name, email
            FROM employee
            WHERE id = ?
            """;

        try (
            Connection connection =
                DataSourceProvider
                    .getDataSource()
                    .getConnection();

            PreparedStatement statement =
                connection.prepareStatement(sql)
        ) {

            statement.setLong(1, id);

            try (ResultSet rs =
                    statement.executeQuery()) {

                if (rs.next()) {
                    return new Employee(
                        rs.getLong("id"),
                        rs.getString("name"),
                        rs.getString("email")
                    );
                }

                return null;
            }
        }
    }
}
```

### Critical rule

Do not share one mutable JDBC `Connection` instance across concurrent Servlet requests.

Prefer a `DataSource` backed by a connection pool.

---

# 41. DAO + Service + Servlet Architecture

Avoid putting everything in a Servlet.

Bad:

```text
Servlet
 ├── validation
 ├── SQL
 ├── business calculations
 ├── email
 ├── HTML
 └── logging
```

Better:

```text
Servlet
   |
   v
Service
   |
   v
DAO
   |
   v
Database
```

Example package layout:

```text
com.example
├── model
│   └── Employee.java
├── dto
│   └── EmployeeRequest.java
├── dao
│   └── EmployeeDao.java
├── service
│   └── EmployeeService.java
├── web
│   ├── EmployeeServlet.java
│   └── LoginServlet.java
├── filter
│   └── AuthenticationFilter.java
├── listener
│   └── ApplicationListener.java
└── util
    └── DataSourceProvider.java
```

## Responsibility

### Servlet

- HTTP request/response
- parameters
- status codes
- routing
- forwarding/redirecting

### Service

- business rules
- workflows
- transactions
- coordination

### DAO

- SQL
- database mapping

---

# 42. Servlet + JSP MVC

Classic MVC:

```text
Model      -> Java objects/services
View       -> JSP
Controller -> Servlet
```

## Controller

```java
@WebServlet("/employees")
public class EmployeeServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        List<Employee> employees =
            employeeService.findAll();

        request.setAttribute(
            "employees",
            employees
        );

        request.getRequestDispatcher(
            "/WEB-INF/views/employees.jsp"
        ).forward(request, response);
    }
}
```

## JSP conceptual view

```jsp
<h1>Employees</h1>

<c:forEach var="employee"
           items="${employees}">
    <p>${employee.name}</p>
</c:forEach>
```

### Rule

Keep business logic out of JSP.

JSP should primarily render the model prepared by the controller.

---

# 43. JSON APIs with Servlets

Servlets can return JSON.

Example:

```java
@WebServlet("/api/status")
public class StatusServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        response.setContentType(
            "application/json"
        );
        response.setCharacterEncoding(
            "UTF-8"
        );

        response.getWriter().write("""
            {
              "status": "UP"
            }
            """);
    }
}
```

For real objects, use a JSON library.

Pseudo-example with an object mapper:

```java
response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");

objectMapper.writeValue(
    response.getOutputStream(),
    employee
);
```

### API endpoint conventions

```text
GET    /api/employees
GET    /api/employees/10
POST   /api/employees
PUT    /api/employees/10
DELETE /api/employees/10
```

### Return suitable status codes

Create:

```text
201 Created
```

Delete successfully with no body:

```text
204 No Content
```

Missing item:

```text
404 Not Found
```

Invalid request:

```text
400 Bad Request
```

---

# 44. CORS

CORS controls whether browsers allow frontend JavaScript from another origin to call your application.

Example:

```text
Frontend:
https://app.example.com

API:
https://api.example.com
```

Simple filter:

```java
@WebFilter("/api/*")
public class CorsFilter implements Filter {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        HttpServletResponse http =
            (HttpServletResponse) response;

        http.setHeader(
            "Access-Control-Allow-Origin",
            "https://app.example.com"
        );

        http.setHeader(
            "Access-Control-Allow-Methods",
            "GET,POST,PUT,DELETE,OPTIONS"
        );

        http.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization"
        );

        chain.doFilter(request, response);
    }
}
```

Do not blindly use:

```text
Access-Control-Allow-Origin: *
```

especially when credentials or sensitive APIs are involved.

---

# 45. Pagination, Search, and Sorting

Request:

```text
/employees?page=2&size=20&search=shaikh&sort=name
```

Servlet:

```java
int page = parsePositiveInt(
    request.getParameter("page"),
    1
);

int size = parsePositiveInt(
    request.getParameter("size"),
    20
);

String search =
    request.getParameter("search");

String sort =
    request.getParameter("sort");
```

### Security rule for sorting

Do not insert arbitrary client input directly into SQL identifiers.

Bad:

```java
"ORDER BY " + request.getParameter("sort")
```

Whitelist allowed sort values:

```java
String orderBy = switch (sort) {
    case "name" -> "name";
    case "email" -> "email";
    case "createdAt" -> "created_at";
    default -> "id";
};
```

Pagination SQL concept:

```sql
SELECT id, name, email
FROM employee
ORDER BY id
LIMIT ? OFFSET ?
```

---

# 46. Logging

Avoid:

```java
System.out.println(...)
```

for serious production logging.

Use a logging abstraction/framework chosen by your application.

Log useful context:

```text
request ID
user ID where safe
path
method
duration
status
exception
business operation
```

Do not log:

```text
passwords
full authentication tokens
secret keys
sensitive payment data
unnecessary personal information
```

### Request ID filter concept

```java
String requestId =
    UUID.randomUUID().toString();

request.setAttribute(
    "requestId",
    requestId
);

response.setHeader(
    "X-Request-Id",
    requestId
);
```

---

# 47. Thread Safety

This is one of the most important Servlet concepts.

A Servlet instance can process multiple requests concurrently.

Therefore instance fields can be dangerous.

## Bad

```java
@WebServlet("/counter")
public class CounterServlet extends HttpServlet {

    private int value;

    @Override
    protected void doGet(
            HttpServletRequest req,
            HttpServletResponse resp)
            throws IOException {

        value++;
        resp.getWriter().println(value);
    }
}
```

Multiple threads can modify `value` concurrently.

## Even worse

```java
private String currentUsername;

protected void doGet(...) {
    currentUsername =
        request.getParameter("username");
}
```

One user's request may overwrite data used by another request.

## Safer principle

Keep request-specific data in local variables:

```java
protected void doGet(...) {
    String username =
        request.getParameter("username");
}
```

Dependencies stored as fields should generally be immutable/stateless/thread-safe, or designed for concurrent use.

---

# 48. Performance and Scalability

Servlet performance depends on much more than Servlet code.

Common bottlenecks:

- slow SQL
- missing indexes
- network calls
- large responses
- blocking APIs
- connection pool exhaustion
- excessive session data
- synchronization
- logging overhead
- repeated parsing/computation
- bad caching strategy

### Rule 1: measure before optimizing

Use:

- logs
- metrics
- traces
- profiler
- database execution plans
- load testing

### Rule 2: avoid long synchronized sections

Bad:

```java
synchronized (this) {
    // slow database query
}
```

This can serialize requests.

### Rule 3: use pools appropriately

Typical resources:

```text
HTTP request threads
DB connection pool
HTTP client connection pool
executor threads
```

Pools must be sized based on workload and dependencies.

---

# 49. Caching

## Browser/client cache

```java
response.setHeader(
    "Cache-Control",
    "public, max-age=300"
);
```

Sensitive response:

```java
response.setHeader(
    "Cache-Control",
    "no-store"
);
```

### Conditional requests

Advanced HTTP caching may involve:

```text
ETag
If-None-Match
Last-Modified
If-Modified-Since
304 Not Modified
```

Caching is powerful but must respect:

- authorization
- freshness
- data sensitivity
- invalidation strategy

---

# 50. Deployment and WAR Files

Traditional Servlet applications are packaged as:

```text
WAR
```

Example:

```text
employee-portal.war
```

Build:

```bash
mvn clean package
```

Possible output:

```text
target/employee-portal.war
```

Typical WAR structure:

```text
employee-portal.war
├── index.html
├── assets/
└── WEB-INF/
    ├── web.xml
    ├── classes/
    └── lib/
```

`WEB-INF` is special.

Clients cannot directly browse normal resources inside it.

---

# 51. Tomcat Concepts

Useful Tomcat terms:

```text
CATALINA_HOME
CATALINA_BASE
webapps
conf
logs
bin
lib
work
temp
```

A common development deployment:

```text
tomcat/
└── webapps/
    └── employee-portal.war
```

After deployment:

```text
http://localhost:8080/employee-portal/
```

### Context path

For:

```text
employee-portal.war
```

context path is commonly:

```text
/employee-portal
```

Avoid hardcoding it:

Bad:

```java
response.sendRedirect(
    "/employee-portal/login"
);
```

Better:

```java
response.sendRedirect(
    request.getContextPath() + "/login"
);
```

---

# 52. Testing Servlets

Testing should happen at multiple levels.

## 52.1 Unit-test business logic separately

Service:

```java
public class DiscountService {

    public BigDecimal calculate(
            BigDecimal amount) {

        // testable without Servlet container
        return ...;
    }
}
```

This is why business logic should not live inside `doGet()`.

## 52.2 Controller/Servlet tests

You can test Servlet behavior using mock request/response objects from appropriate test libraries or framework test utilities.

Test:

- parameter validation
- response status
- redirect target
- forwarding target
- service interactions

## 52.3 Integration tests

Deploy application to:

- local Tomcat
- embedded/test container
- test environment

Then call real HTTP endpoints.

Test:

```text
GET /employees
POST /login
POST /employees
DELETE /api/employees/10
```

## 52.4 Security tests

Test:

- unauthenticated access
- wrong roles
- CSRF
- invalid input
- large uploads
- malicious filenames
- bad content types
- session invalidation

---

# 53. Design Patterns

## 53.1 MVC

```text
Model      Data/business objects
View       JSP
Controller Servlet
```

## 53.2 Front Controller

Instead of many unrelated controllers, use one entry point.

```java
@WebServlet("/app/*")
public class FrontControllerServlet
        extends HttpServlet {
}
```

It can route internally:

```text
/app/users
/app/orders
/app/reports
```

Frameworks such as Spring MVC popularized this style.

## 53.3 DAO

Separates database access.

```text
EmployeeServlet
       |
       v
EmployeeService
       |
       v
EmployeeDao
```

## 53.4 Service Layer

Centralizes business rules.

Example:

```text
approveInvoice()
calculateTax()
createEmployee()
cancelOrder()
```

## 53.5 DTO

Do not expose internal entity/domain objects blindly.

Create request/response-specific structures where useful.

## 53.6 Post/Redirect/Get (PRG)

Problem:

```text
POST /register
refresh browser
POST repeats
```

Solution:

```text
POST /register
     |
     v
save
     |
     v
302 redirect
     |
     v
GET /register-success
```

Code:

```java
protected void doPost(...) {

    service.create(...);

    response.sendRedirect(
        request.getContextPath() +
        "/register-success"
    );
}
```

This is a very important web pattern.

---

# 54. Real-World Scenario Examples

## Scenario 1: Login

### Requirements

- user enters username/password
- server validates
- successful login creates session
- dashboard requires authentication
- logout destroys session

### Login Servlet

```java
@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    private AuthenticationService authService;

    @Override
    public void init() {
        authService =
            new AuthenticationService();
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        request.getRequestDispatcher(
            "/WEB-INF/views/login.jsp"
        ).forward(request, response);
    }

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String username =
            request.getParameter("username");

        String password =
            request.getParameter("password");

        User user =
            authService.authenticate(
                username,
                password
            );

        if (user == null) {
            request.setAttribute(
                "error",
                "Invalid credentials"
            );

            request.getRequestDispatcher(
                "/WEB-INF/views/login.jsp"
            ).forward(request, response);

            return;
        }

        request.changeSessionId();

        request.getSession()
               .setAttribute("user", user);

        response.sendRedirect(
            request.getContextPath() +
            "/dashboard"
        );
    }
}
```

### Logout

```java
@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        HttpSession session =
            request.getSession(false);

        if (session != null) {
            session.invalidate();
        }

        response.sendRedirect(
            request.getContextPath() +
            "/login"
        );
    }
}
```

### Why POST for logout?

Logout changes authentication state, so POST is generally a better semantic/security choice than a state-changing GET link.

---

## Scenario 2: Employee CRUD

URLs:

```text
GET  /employees
GET  /employees/create
POST /employees/create
GET  /employees/edit?id=10
POST /employees/edit
POST /employees/delete
```

List Servlet:

```java
@WebServlet("/employees")
public class EmployeeListServlet
        extends HttpServlet {

    private EmployeeService service;

    @Override
    public void init() {
        service = new EmployeeService();
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute(
            "employees",
            service.findAll()
        );

        request.getRequestDispatcher(
            "/WEB-INF/views/employees/list.jsp"
        ).forward(request, response);
    }
}
```

Create:

```java
@WebServlet("/employees/create")
public class EmployeeCreateServlet
        extends HttpServlet {

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {

        String name =
            request.getParameter("name");

        String email =
            request.getParameter("email");

        if (name == null ||
            name.isBlank() ||
            email == null ||
            email.isBlank()) {

            request.setAttribute(
                "error",
                "Name and email are required"
            );

            request.getRequestDispatcher(
                "/WEB-INF/views/employees/create.jsp"
            ).forward(request, response);

            return;
        }

        service.create(name, email);

        response.sendRedirect(
            request.getContextPath() +
            "/employees"
        );
    }
}
```

---

## Scenario 3: Shopping Cart

Store cart in session:

```java
HttpSession session =
    request.getSession();

Cart cart =
    (Cart) session.getAttribute("cart");

if (cart == null) {
    cart = new Cart();
    session.setAttribute("cart", cart);
}

cart.add(product);
```

Do not store unnecessary huge object graphs in sessions.

For scalable distributed environments, understand how session storage/replication will work.

---

## Scenario 4: Download a PDF

```java
@WebServlet("/download")
public class DownloadServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        Path file =
            Path.of("/safe/storage/report.pdf");

        response.setContentType(
            "application/pdf"
        );

        response.setHeader(
            "Content-Disposition",
            "attachment; filename=\"report.pdf\""
        );

        response.setContentLengthLong(
            Files.size(file)
        );

        try (
            InputStream input =
                Files.newInputStream(file);

            ServletOutputStream output =
                response.getOutputStream()
        ) {
            input.transferTo(output);
        }
    }
}
```

Never accept an arbitrary path from a user and pass it directly to `Path.of()`.

---

## Scenario 5: API Health Check

```java
@WebServlet("/api/health")
public class HealthServlet extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        response.setContentType(
            "application/json"
        );

        response.getWriter().write("""
            {
              "status": "UP"
            }
            """);
    }
}
```

A real health endpoint may distinguish:

- liveness
- readiness
- dependency health

Avoid exposing sensitive internal details publicly.

---

## Scenario 6: Search

Request:

```text
GET /employees?search=rahul
```

Servlet:

```java
String search =
    request.getParameter("search");

List<Employee> employees =
    service.search(search);

request.setAttribute(
    "employees",
    employees
);

request.getRequestDispatcher(
    "/WEB-INF/views/employees/list.jsp"
).forward(request, response);
```

DAO should use prepared statements rather than concatenating search text into SQL.

---

## Scenario 7: Role-Based Page

```java
HttpSession session =
    request.getSession(false);

User user = session == null
    ? null
    : (User) session.getAttribute("user");

if (user == null) {
    response.sendError(401);
    return;
}

if (!user.hasRole("ADMIN")) {
    response.sendError(403);
    return;
}
```

Better in many applications: centralize such checks in filters/container security rather than repeating them in every Servlet.

---

## Scenario 8: Validation with PRG

Flow:

```text
GET /profile/edit
       |
       v
show form

POST /profile/edit
       |
       +-- invalid -> forward form with errors
       |
       +-- valid -> save -> redirect /profile
```

This pattern combines:

- server-side validation
- request attributes for validation errors
- redirect after successful mutation

---

# 55. Common Errors and Troubleshooting

## 404 Not Found

Possible causes:

- wrong context path
- wrong URL mapping
- WAR not deployed
- Servlet scanning/config issue
- typo
- wrong package/deployment

Check:

```java
@WebServlet("/users")
```

Then URL should include context:

```text
http://localhost:8080/myapp/users
```

---

## 405 Method Not Allowed

Example:

Form sends POST:

```html
<form method="post">
```

But Servlet only implements:

```java
doGet()
```

Fix:

```java
doPost()
```

---

## 500 Internal Server Error

Typical causes:

- NullPointerException
- SQL exception
- class loading problem
- bad dependency
- invalid configuration

Look at server logs and full stack trace.

---

## `ClassNotFoundException`

Possible causes:

- missing dependency
- dependency not packaged
- wrong class name
- container/library mismatch

---

## `NoClassDefFoundError`

Class existed at compile time but is missing/incompatible at runtime.

---

## `javax.servlet` vs `jakarta.servlet`

Modern Tomcat/Jakarta applications use:

```java
jakarta.servlet.*
```

Legacy Java EE/Tomcat 9-era code commonly uses:

```java
javax.servlet.*
```

You cannot fix migration simply by changing one import if other dependencies still target the old namespace.

---

## Response already committed

After enough response data is sent, headers/status may already be committed.

Bad idea:

```java
response.getWriter().println("Hello");

response.sendRedirect("/login");
```

Plan response control flow first.

---

## `getWriter()` and `getOutputStream()`

Normally choose one response body API.

Text:

```java
getWriter()
```

Binary:

```java
getOutputStream()
```

Do not casually mix both for one response.

---

## Session is unexpectedly null

If using:

```java
request.getSession(false)
```

it intentionally returns `null` when no session exists.

---

# 56. Bad Practices and Better Alternatives

## Bad: SQL in `doGet()`

```java
protected void doGet(...) {
    Connection ...
    PreparedStatement ...
    ResultSet ...
}
```

Better:

```text
Servlet -> Service -> DAO
```

---

## Bad: HTML everywhere in Java

```java
out.println("<html>");
out.println("<table>");
out.println(...);
```

Better:

- JSP/view technology for server-rendered HTML
- JSON serializer for APIs

---

## Bad: Servlet instance fields for request data

```java
private String username;
```

Better:

```java
String username =
    request.getParameter("username");
```

local variable.

---

## Bad: Swallow exceptions

```java
catch (Exception e) {
}
```

Better:

- handle expected exceptions
- log unexpected exceptions
- return safe response
- preserve useful diagnostics server-side

---

## Bad: Hardcoded context path

```java
"/myapp/login"
```

Better:

```java
request.getContextPath() + "/login"
```

---

## Bad: Trusting client-supplied IDs for authorization

Request:

```text
/accounts?id=100
```

Do not assume a logged-in user may access account `100`.

Authorization must be checked server-side.

---

## Bad: Putting passwords in session

Do not store raw passwords.

Store only what the application actually needs.

---

## Bad: Global mutable collections

```java
private final List<User> users =
    new ArrayList<>();
```

Unsafe unless correctly synchronized/designed—and even then it is rarely a good production persistence strategy.

---

# 57. Servlet Interview Questions

## Q1. What is a Servlet?

A Java server-side component managed by a Servlet container that processes requests and produces responses, commonly over HTTP.

## Q2. What is a Servlet container?

The runtime that manages Servlet lifecycle, request routing, threading, sessions, filters, listeners, deployment, and related web infrastructure.

## Q3. What is the Servlet lifecycle?

Conceptually:

```text
creation -> init() -> service()/HTTP methods -> destroy()
```

## Q4. `doGet()` vs `doPost()`?

`doGet()` commonly retrieves resources. `doPost()` commonly processes submitted data or creates/changes state.

## Q5. `forward()` vs `sendRedirect()`?

`forward()` stays on the server using the same request. `sendRedirect()` tells the client to make another request.

## Q6. Request parameter vs attribute?

Parameter usually comes from client input and is string-based. Attribute is a server-side object associated with the request.

## Q7. Session vs cookie?

A cookie is stored/sent by the client. Session state is logically maintained server-side and commonly associated with a client by a session cookie.

## Q8. ServletConfig vs ServletContext?

`ServletConfig` is Servlet-specific configuration. `ServletContext` represents the entire web application.

## Q9. What is a Filter?

A component that intercepts requests/responses around Servlet execution.

## Q10. What is a Listener?

A component receiving lifecycle/event notifications for application, request, session, or attributes.

## Q11. Are Servlets thread-safe automatically?

No. One Servlet instance may handle concurrent requests, so shared mutable state requires careful design.

## Q12. What is `WEB-INF`?

A protected web-application area containing configuration/classes/libraries and resources not normally directly accessible by clients.

## Q13. Why use `request.getContextPath()`?

To build URLs without hardcoding the deployed application context.

## Q14. What is PRG?

Post/Redirect/Get: after a successful POST, redirect to a GET page to reduce accidental repeat submissions.

## Q15. What is `HttpSession.invalidate()`?

Ends the current session and invalidates its stored attributes.

## Q16. What is `getSession(false)`?

Returns the existing session or `null`; it does not create a new one.

## Q17. Why use PreparedStatement?

It supports parameterized SQL and is fundamental for safe value handling and SQL-injection prevention.

## Q18. Why should business logic not be in Servlets?

It makes code harder to test, reuse, maintain, and evolve. Services should own business rules.

## Q19. What is async processing?

The request can enter asynchronous mode so work/response completion can continue without keeping the original container request handling flow occupied in the usual way.

## Q20. `javax.servlet` vs `jakarta.servlet`?

Java EE-era Servlet packages used `javax.servlet`. Modern Jakarta EE uses `jakarta.servlet`.

---

# 58. Practice Exercises

## Beginner

1. Create `/hello`.
2. Create `/welcome?name=Shoeb`.
3. Read two numbers and return their sum.
4. Build a registration form.
5. Validate email and age.
6. Create a cookie storing theme.
7. Read and display the cookie.
8. Add a simple session counter.
9. Build login/logout.
10. Forward from Servlet to JSP.

## Intermediate

1. Build employee CRUD.
2. Add DAO/service layers.
3. Add JDBC connection pooling.
4. Create authentication filter.
5. Add role authorization.
6. Add request logging filter.
7. Add application listener.
8. Implement file upload.
9. Implement file download.
10. Implement search and pagination.
11. Add centralized error pages.
12. Build a JSON CRUD API.

## Advanced

1. Implement Front Controller routing.
2. Add async request processing.
3. Stream a large file safely.
4. Add ETag/conditional caching.
5. Add request IDs.
6. Add CORS with an allowlist.
7. Build CSRF protection for forms.
8. Test concurrency assumptions.
9. Create integration tests against Tomcat.
10. Load-test the application.
11. Measure database pool saturation.
12. Implement graceful handling of downstream failures.

---

# 59. Project Ideas

## Project 1: Employee Management System

Features:

```text
Login
Employee CRUD
Departments
Search
Pagination
Role-based access
Audit logging
CSV export
```

Learn:

- Servlets
- JSP
- Filters
- Sessions
- JDBC
- MVC

## Project 2: Expense Approval System

Features:

```text
Employee submits expense
Manager approval
Finance approval
Status history
Attachments
Dashboard
```

Learn:

- workflows
- authorization
- file upload
- relational database modeling
- filters
- audit trail

## Project 3: Invoice Processing Portal

Features:

```text
Upload invoice
Store metadata
List invoices
Search/filter
Approval workflow
Download attachment
Status API
```

Learn:

- multipart upload
- DAO/service architecture
- JSON
- session security
- workflow modeling

## Project 4: Mini E-commerce

Features:

```text
Products
Cart
Login
Orders
Checkout simulation
Admin product CRUD
```

Learn:

- sessions
- cookies
- MVC
- authorization
- CRUD

## Project 5: REST-style Employee API

Endpoints:

```text
GET    /api/employees
GET    /api/employees/{id}
POST   /api/employees
PUT    /api/employees/{id}
DELETE /api/employees/{id}
```

Learn:

- HTTP methods
- status codes
- JSON
- validation
- API error design

---

# 60. Learning Roadmap

## Stage 1 — HTTP Foundation

Master:

```text
HTTP request
HTTP response
GET
POST
headers
body
status codes
cookies
```

## Stage 2 — Servlet Basics

Master:

```text
HttpServlet
@WebServlet
doGet
doPost
request
response
URL mapping
```

## Stage 3 — Navigation and State

Master:

```text
forward
redirect
request attributes
cookies
HttpSession
ServletContext
```

## Stage 4 — Web Components

Master:

```text
filters
listeners
annotations
web.xml
multipart upload
error handling
```

## Stage 5 — Architecture

Master:

```text
MVC
DAO
Service layer
DTO
PRG
Front Controller
```

## Stage 6 — Database

Master:

```text
JDBC
DataSource
connection pooling
PreparedStatement
transactions
pagination
```

## Stage 7 — Security

Master:

```text
authentication
authorization
sessions
CSRF
XSS
SQL injection
HTTPS
secure cookies
security headers
```

## Stage 8 — APIs

Master:

```text
JSON
REST-style routing
status codes
CORS
content types
validation
```

## Stage 9 — Advanced Servlet

Master:

```text
async processing
non-blocking I/O
programmatic registration
dispatcher types
streaming
caching
```

## Stage 10 — Production

Master:

```text
logging
metrics
thread safety
connection pools
performance
deployment
Tomcat configuration
testing
troubleshooting
```

---

# 61. Quick Reference Cheat Sheet

## Servlet

```java
@WebServlet("/hello")
public class HelloServlet
        extends HttpServlet {

    @Override
    protected void doGet(
            HttpServletRequest req,
            HttpServletResponse resp)
            throws IOException {

        resp.getWriter()
            .println("Hello");
    }
}
```

## Parameter

```java
request.getParameter("name");
```

## Attribute

```java
request.setAttribute("user", user);

request.getAttribute("user");
```

## Session

```java
HttpSession session =
    request.getSession();

session.setAttribute("user", user);

session.getAttribute("user");

session.invalidate();
```

## Existing session only

```java
request.getSession(false);
```

## Cookie

```java
Cookie c =
    new Cookie("theme", "dark");

response.addCookie(c);
```

## Forward

```java
request
    .getRequestDispatcher("/page.jsp")
    .forward(request, response);
```

## Redirect

```java
response.sendRedirect(
    request.getContextPath() +
    "/login"
);
```

## Status

```java
response.setStatus(201);
```

## Error

```java
response.sendError(404);
```

## JSON

```java
response.setContentType(
    "application/json"
);
```

## Filter

```java
@WebFilter("/*")
public class AppFilter
        implements Filter {

    public void doFilter(
            ServletRequest req,
            ServletResponse res,
            FilterChain chain)
            throws IOException,
                   ServletException {

        chain.doFilter(req, res);
    }
}
```

## Listener

```java
@WebListener
public class AppListener
        implements ServletContextListener {
}
```

## Upload

```java
@MultipartConfig
```

```java
Part part =
    request.getPart("file");
```

## Application context

```java
getServletContext();
```

## Request body

```java
request.getReader();
```

## Binary response

```java
response.getOutputStream();
```

---

# Additional Must-Know Concepts

## Dispatcher Types

A filter can be associated with dispatch types:

```text
REQUEST
FORWARD
INCLUDE
ERROR
ASYNC
```

Example:

```java
@WebFilter(
    urlPatterns = "/*",
    dispatcherTypes = {
        DispatcherType.REQUEST,
        DispatcherType.ERROR
    }
)
```

This controls when a filter participates.

---

## `getRequestURI()` vs `getContextPath()` vs `getServletPath()`

Suppose:

```text
URL:
http://localhost:8080/shop/products/list

context path:
/shop

Servlet mapping:
/products/*

path info:
/list
```

Typical values:

```java
request.getContextPath();
// /shop

request.getServletPath();
// /products

request.getPathInfo();
// /list

request.getRequestURI();
// /shop/products/list
```

Understanding these is essential for custom routing.

---

## Content-Disposition

Download:

```java
response.setHeader(
    "Content-Disposition",
    "attachment; filename=\"report.csv\""
);
```

Inline:

```text
inline
```

may let compatible browsers display the resource directly.

Always sanitize/generated filenames properly.

---

## `setHeader()` vs `addHeader()`

```java
setHeader(...)
```

replaces an existing value for that header name.

```java
addHeader(...)
```

adds another value.

Some headers can intentionally have multiple values.

---

## `sendError()` vs `setStatus()`

`setStatus()`:

```java
response.setStatus(404);
```

sets status but does not itself define how the body is produced.

`sendError()`:

```java
response.sendError(404, "Not found");
```

tells the container to send an error response and may trigger configured error handling.

---

## `flushBuffer()`

```java
response.flushBuffer();
```

forces buffered output toward the client and commits the response.

After commitment, changing important headers/status/redirect behavior may no longer be possible.

---

## Response Buffer

Servlet responses are often buffered.

Useful methods include:

```java
response.getBufferSize();
response.setBufferSize(...);
response.isCommitted();
response.reset();
response.resetBuffer();
```

Use them only when you understand response commitment.

---

## Request Character Encoding

For form/request body decoding where applicable:

```java
request.setCharacterEncoding("UTF-8");
```

Set it before parameters/body are decoded if your situation requires explicit configuration.

A centralized encoding filter is common.

---

# End-to-End Example Architecture

```text
Browser
   |
   | POST /employees
   v
Security Filter
   |
   v
Encoding Filter
   |
   v
EmployeeServlet
   |
   | parse + validate HTTP input
   v
EmployeeService
   |
   | business rules
   v
EmployeeDao
   |
   | PreparedStatement
   v
Database
   |
   v
EmployeeDao
   |
   v
EmployeeService
   |
   v
EmployeeServlet
   |
   +---- invalid -> forward JSP with errors
   |
   +---- success -> redirect /employees
```

The most important architectural rule is:

```text
Servlet = HTTP/controller layer
```

not:

```text
Servlet = entire application
```

---

# Mental Model: What Happens for Every Request?

Suppose the browser requests:

```text
GET /employee-app/employees?id=10
```

Think through this sequence:

```text
1. Browser creates HTTP request.

2. Tomcat receives connection/request.

3. Container determines deployed context:
   /employee-app

4. Container maps:
   /employees

   to EmployeeServlet.

5. Matching filters execute.

6. Container calls HttpServlet.service().

7. service() recognizes GET.

8. HttpServlet calls doGet().

9. Servlet reads:
   request.getParameter("id")

10. Servlet calls service/business layer.

11. Business layer calls DAO.

12. DAO queries database.

13. Servlet chooses response:

    A. JSON
    B. HTML directly
    C. forward to JSP
    D. redirect
    E. error response

14. Filters finish their response-side work.

15. Container commits HTTP response.

16. Browser receives response.
```

If this complete flow is clear, most Servlet topics become easier.

---

# Decision Guide

## Should I use a request attribute?

Use when data only needs to survive the current request/forward.

```java
request.setAttribute(...)
```

## Should I use a session?

Use when user-specific state must survive multiple requests.

```java
session.setAttribute(...)
```

Do not use a session as a dumping ground.

## Should I use ServletContext?

Use for application-wide state/configuration that is truly shared.

## Should I redirect?

Use when the client should make a new request, especially after successful POST.

## Should I forward?

Use when the same server request should render another internal resource.

## Should I use a Filter?

Use for cross-cutting HTTP concerns affecting many endpoints.

## Should I use a Listener?

Use for lifecycle/event behavior rather than per-request controller logic.

## Should I use async?

Only when the application has a real async/concurrency need and the entire design benefits.

---

# Servlet Mastery Checklist

Use this checklist after completing the handbook.

## Foundation

- [ ] I can explain HTTP requests and responses.
- [ ] I understand GET vs POST vs PUT vs DELETE.
- [ ] I understand status codes.
- [ ] I understand headers and bodies.
- [ ] I understand cookies and stateless HTTP.

## Core Servlet

- [ ] I can create `HttpServlet`.
- [ ] I can use `@WebServlet`.
- [ ] I understand Servlet lifecycle.
- [ ] I understand URL mapping.
- [ ] I can read request parameters.
- [ ] I can read headers.
- [ ] I can read request bodies.
- [ ] I can write response text/JSON/binary output.

## Navigation

- [ ] I understand redirect.
- [ ] I understand forward.
- [ ] I understand include.
- [ ] I understand RequestDispatcher.
- [ ] I understand PRG.

## State

- [ ] I understand request attributes.
- [ ] I understand sessions.
- [ ] I understand cookies.
- [ ] I understand ServletContext.
- [ ] I understand ServletConfig.

## Components

- [ ] I can build filters.
- [ ] I understand filter chains.
- [ ] I can build listeners.
- [ ] I can configure multipart upload.
- [ ] I understand annotations and `web.xml`.

## Architecture

- [ ] I understand MVC.
- [ ] I understand DAO.
- [ ] I understand Service Layer.
- [ ] I avoid SQL inside Servlets.
- [ ] I avoid business logic inside JSP.
- [ ] I understand Front Controller.

## Security

- [ ] I know SQL injection prevention.
- [ ] I understand XSS.
- [ ] I understand CSRF.
- [ ] I understand authentication vs authorization.
- [ ] I understand session fixation.
- [ ] I understand secure cookie concepts.
- [ ] I know client input must never be trusted.

## Production

- [ ] I understand Servlet thread safety.
- [ ] I understand connection pooling.
- [ ] I understand logging.
- [ ] I understand caching basics.
- [ ] I can deploy a WAR.
- [ ] I can troubleshoot 404/405/500 errors.
- [ ] I understand `javax` vs `jakarta`.

## Advanced

- [ ] I understand async Servlet processing.
- [ ] I know what non-blocking I/O means.
- [ ] I understand dispatcher types.
- [ ] I know programmatic Servlet registration exists.
- [ ] I understand JSON API design basics.
- [ ] I understand CORS.

---

# Suggested Order for a New Learner

Do not try to memorize every API method at once.

Study in this order:

```text
1. HTTP
2. First Servlet
3. GET/POST
4. Request parameters
5. Response
6. Forward/redirect
7. JSP + request attributes
8. Sessions/cookies
9. Filters
10. JDBC
11. MVC + DAO + Service
12. Security
13. JSON APIs
14. Testing
15. Performance/thread safety
16. Async/advanced features
```

Build something after every few topics.

A developer who only reads Servlets may forget them.

A developer who builds:

```text
login
CRUD
search
upload
session
filter
API
```

will understand them far more deeply.

---

# 62. Official References

Use official documentation when API behavior matters:

- Jakarta Servlet specification:  
  https://jakarta.ee/specifications/servlet/

- Jakarta Servlet 6.1:  
  https://jakarta.ee/specifications/servlet/6.1/

- Jakarta Servlet API documentation:  
  https://jakarta.ee/specifications/servlet/6.1/apidocs/

- Jakarta EE Servlet tutorial:  
  https://jakarta.ee/learn/docs/jakartaee-tutorial/current/web/servlets/servlets.html

- Jakarta EE Servlet starter guide:  
  https://jakarta.ee/learn/starter-guides/how-to-start-with-servlets/

- Apache Tomcat:  
  https://tomcat.apache.org/

- Tomcat version/specification mapping:  
  https://tomcat.apache.org/whichversion.html

---

# Final Summary

If you remember only the most important ideas, remember these:

```text
Servlet = Java HTTP controller managed by a container.

HttpServletRequest = incoming HTTP request.

HttpServletResponse = outgoing HTTP response.

doGet/doPost/etc. = HTTP method handlers.

Filter = cross-cutting request/response interception.

Listener = lifecycle/event observer.

HttpSession = user-specific state across requests.

ServletContext = application-wide shared context.

Forward = same request, server-side.

Redirect = new request, client-side.

Request attribute = server-side data for current request.

DAO = persistence logic.

Service = business logic.

Servlet = HTTP orchestration.

Servlet instances may handle concurrent requests.

Never trust client input.

Use PreparedStatement for SQL values.

Use secure session/authentication practices.

Use PRG after successful form submissions.

Learn `jakarta.servlet.*` for modern Jakarta Servlet applications.

Understand `javax.servlet.*` because many enterprise legacy systems still use it.
```

Once these concepts are solid, moving to higher-level Java web frameworks becomes much easier because you understand the HTTP/Servlet foundation beneath them.
