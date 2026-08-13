# JSP Master Learning Handbook

> **JavaServer Pages (JSP) — Beginner to Advanced, with practical scenarios, patterns, examples, pitfalls, security, and interview preparation**

---

## Table of Contents

1. [What is JSP?](#1-what-is-jsp)
2. [Where JSP Fits in Java Web Development](#2-where-jsp-fits-in-java-web-development)
3. [JSP vs Servlet vs HTML vs Template Engines](#3-jsp-vs-servlet-vs-html-vs-template-engines)
4. [JSP Request Flow and Architecture](#4-jsp-request-flow-and-architecture)
5. [Setting Up a JSP Project](#5-setting-up-a-jsp-project)
6. [Your First JSP Page](#6-your-first-jsp-page)
7. [JSP Lifecycle](#7-jsp-lifecycle)
8. [JSP Syntax Overview](#8-jsp-syntax-overview)
9. [JSP Directives](#9-jsp-directives)
10. [JSP Scripting Elements](#10-jsp-scripting-elements)
11. [JSP Comments](#11-jsp-comments)
12. [JSP Implicit Objects](#12-jsp-implicit-objects)
13. [JSP Scopes](#13-jsp-scopes)
14. [Request Parameters and Form Handling](#14-request-parameters-and-form-handling)
15. [JSP Standard Actions](#15-jsp-standard-actions)
16. [Expression Language (EL)](#16-expression-language-el)
17. [JSTL](#17-jstl)
18. [JSP Includes](#18-jsp-includes)
19. [Forwarding Requests](#19-forwarding-requests)
20. [JavaBeans with JSP](#20-javabeans-with-jsp)
21. [Sessions and Authentication](#21-sessions-and-authentication)
22. [Cookies](#22-cookies)
23. [Application and Session State](#23-application-and-session-state)
24. [Error Handling](#24-error-handling)
25. [Custom Error Pages](#25-custom-error-pages)
26. [JSP with Servlets — MVC Pattern](#26-jsp-with-servlets--mvc-pattern)
27. [JSP with JDBC](#27-jsp-with-jdbc)
28. [DAO Pattern](#28-dao-pattern)
29. [CRUD Application Example](#29-crud-application-example)
30. [Filters](#30-filters)
31. [Listeners](#31-listeners)
32. [File Upload](#32-file-upload)
33. [File Download](#33-file-download)
34. [Pagination](#34-pagination)
35. [Search and Filtering](#35-search-and-filtering)
36. [Role-Based Authorization](#36-role-based-authorization)
37. [Internationalization (i18n)](#37-internationalization-i18n)
38. [JSP Security](#38-jsp-security)
39. [XSS Prevention](#39-xss-prevention)
40. [CSRF Protection](#40-csrf-protection)
41. [SQL Injection Prevention](#41-sql-injection-prevention)
42. [JSP Configuration and web.xml](#42-jsp-configuration-and-webxml)
43. [JSP Fragments and Tag Files](#43-jsp-fragments-and-tag-files)
44. [Custom JSP Tags](#44-custom-jsp-tags)
45. [MVC Project Structure](#45-mvc-project-structure)
46. [JSP Best Practices](#46-jsp-best-practices)
47. [Common JSP Mistakes](#47-common-jsp-mistakes)
48. [Performance Optimization](#48-performance-optimization)
49. [Debugging JSP Applications](#49-debugging-jsp-applications)
50. [JSP in Modern Jakarta EE](#50-jsp-in-modern-jakarta-ee)
51. [Spring MVC with JSP](#51-spring-mvc-with-jsp)
52. [Real-World Scenarios](#52-real-world-scenarios)
53. [Mini Project — Employee Management System](#53-mini-project--employee-management-system)
54. [JSP Interview Questions](#54-jsp-interview-questions)
55. [Learning Roadmap](#55-learning-roadmap)
56. [Quick Reference Cheat Sheet](#56-quick-reference-cheat-sheet)
57. [Final Checklist](#57-final-checklist)

---

# 1. What is JSP?

**JSP** stands for **JavaServer Pages**. In modern Jakarta EE terminology, the specification is called **Jakarta Server Pages**.

JSP is a server-side view technology used to generate dynamic HTML using Java web applications.

A JSP page normally contains:

- HTML
- JSP tags
- Expression Language (EL)
- JSTL tags
- occasionally Java code in older applications

Example:

```jsp
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome ${user.name}</h1>
</body>
</html>
```

The browser does **not** execute JSP directly.

The web server/container converts JSP into a servlet, compiles it, executes it, and sends the generated HTML back to the browser.

### Simple mental model

```text
Browser
   |
   | HTTP Request
   v
Servlet / Controller
   |
   | prepares data
   v
JSP View
   |
   | generates HTML
   v
Browser
```

### Typical use cases

JSP is often found in:

- enterprise Java applications
- banking portals
- internal HR applications
- admin panels
- old or existing Spring MVC applications
- Java EE/Jakarta EE systems
- Servlet-based web applications

---

# 2. Where JSP Fits in Java Web Development

JSP is normally responsible for the **View** layer.

A healthy application separates responsibilities like this:

```text
Controller  -> Servlet / Spring MVC Controller
Service     -> Business logic
DAO         -> Database operations
Model       -> Java objects/entities/DTOs
View        -> JSP
```

Example:

```text
GET /employees
      |
      v
EmployeeServlet
      |
      v
EmployeeService
      |
      v
EmployeeDAO
      |
      v
Database
      |
      v
Servlet adds employee list to request
      |
      v
employees.jsp
      |
      v
HTML table
```

### Bad architecture

Avoid putting everything in JSP:

```jsp
<%
Connection con = DriverManager.getConnection(...);
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM employee");
...
%>
```

This mixes database logic with presentation logic.

### Better architecture

Servlet:

```java
List<Employee> employees = employeeService.getAllEmployees();
request.setAttribute("employees", employees);
request.getRequestDispatcher("/WEB-INF/views/employees.jsp")
       .forward(request, response);
```

JSP:

```jsp
<c:forEach items="${employees}" var="employee">
    <p>${employee.name}</p>
</c:forEach>
```

---

# 3. JSP vs Servlet vs HTML vs Template Engines

| Technology | Main Purpose | Runs Where? |
|---|---|---|
| HTML | Static page structure | Browser |
| CSS | Styling | Browser |
| JavaScript | Browser-side behavior | Browser |
| Servlet | Request handling/business flow | Server |
| JSP | Server-rendered HTML view | Server |
| Thymeleaf | Java template engine | Server |
| React/Angular | Client-side UI | Browser |

### Servlet generating HTML directly

```java
response.getWriter().println("<h1>Hello</h1>");
```

Works, but becomes difficult to maintain.

### JSP

```jsp
<h1>Hello</h1>
```

Much easier for view development.

### JSP vs modern frontend frameworks

A JSP application generally uses server-side rendering:

```text
Request -> Server -> HTML -> Browser
```

An Angular/React SPA generally works like:

```text
Browser -> REST API -> JSON -> Browser renders UI
```

Both architectures can be valid depending on the application.

---

# 4. JSP Request Flow and Architecture

Suppose a user opens:

```text
http://localhost:8080/app/products
```

Possible flow:

```text
1. Browser sends GET /products
2. ProductServlet receives request
3. Servlet calls ProductService
4. ProductService calls ProductDAO
5. DAO reads database
6. Servlet stores List<Product> in request scope
7. Servlet forwards request to products.jsp
8. JSP renders products as HTML
9. Server sends HTML to browser
```

Controller:

```java
@WebServlet("/products")
public class ProductServlet extends HttpServlet {

    private final ProductService productService = new ProductService();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("products", productService.findAll());
        request.getRequestDispatcher("/WEB-INF/views/products.jsp")
               .forward(request, response);
    }
}
```

View:

```jsp
<c:forEach items="${products}" var="product">
    <h3>${product.name}</h3>
</c:forEach>
```

---

# 5. Setting Up a JSP Project

A traditional Maven web application may look like:

```text
jsp-master-app/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/example/app/
        │       ├── controller/
        │       ├── service/
        │       ├── dao/
        │       └── model/
        └── webapp/
            ├── WEB-INF/
            │   ├── views/
            │   │   ├── home.jsp
            │   │   └── employees.jsp
            │   └── web.xml
            ├── css/
            ├── js/
            └── index.jsp
```

### Typical server/container choices

- Apache Tomcat
- Jetty
- Payara
- WildFly
- Open Liberty

### Important compatibility note

Older Java EE applications commonly use:

```java
javax.servlet.*
javax.servlet.http.*
```

Modern Jakarta EE applications use:

```java
jakarta.servlet.*
jakarta.servlet.http.*
```

Do not mix `javax.*` and `jakarta.*` dependencies randomly. Choose versions compatible with your servlet container.

---

# 6. Your First JSP Page

Create:

```text
src/main/webapp/index.jsp
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>My First JSP</title>
</head>
<body>
    <h1>Hello JSP!</h1>
</body>
</html>
```

When requested, the JSP container converts this JSP into Java servlet code internally.

---

# 7. JSP Lifecycle

Understanding the lifecycle is essential.

A JSP is internally translated into a servlet.

Typical lifecycle:

```text
JSP file
   |
   v
Translation to Servlet source
   |
   v
Compilation
   |
   v
Class loading
   |
   v
jspInit()
   |
   v
_jspService() for every request
   |
   v
jspDestroy()
```

### jspInit()

Called once when the JSP servlet is initialized.

```jsp
<%!
public void jspInit() {
    System.out.println("JSP initialized");
}
%>
```

### _jspService()

Generated by the container. It handles HTTP requests.

You normally do **not** override this method manually.

### jspDestroy()

Called before the JSP-generated servlet is destroyed.

```jsp
<%!
public void jspDestroy() {
    System.out.println("JSP destroyed");
}
%>
```

### Scenario

First request may be slightly slower because translation/compilation can happen.

Subsequent requests normally reuse the compiled servlet.

---

# 8. JSP Syntax Overview

Major JSP syntax categories:

```text
1. Directives
2. Declarations
3. Scriptlets
4. Expressions
5. JSP actions
6. Expression Language
7. JSTL
8. Custom tags
```

Modern JSP development should prefer:

```text
EL + JSTL + custom tags
```

over scriptlets.

---

# 9. JSP Directives

Directives give instructions to the JSP container.

Syntax:

```jsp
<%@ directive attribute="value" %>
```

There are three important directives:

```text
page
include
taglib
```

## 9.1 page directive

Example:

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
```

Common attributes:

```jsp
<%@ page
    language="java"
    contentType="text/html;charset=UTF-8"
    pageEncoding="UTF-8"
    session="true"
    isErrorPage="false"
%>
```

### import attribute

```jsp
<%@ page import="java.util.List" %>
```

Multiple imports:

```jsp
<%@ page import="java.util.List,java.util.ArrayList" %>
```

Avoid large imports if JSP is used correctly because Java logic should reside outside the page.

## 9.2 include directive

```jsp
<%@ include file="header.jsp" %>
```

This is a **static include** performed during translation.

## 9.3 taglib directive

Used to load JSTL or custom tag libraries.

Classic example:

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

The exact URI/dependency depends on the JSP/JSTL generation used by your container.

---

# 10. JSP Scripting Elements

Older JSP applications frequently use scripting elements.

There are three forms:

```text
Declaration  <%! ... %>
Scriptlet    <% ... %>
Expression   <%= ... %>
```

## 10.1 Declaration

Defines variables or methods at servlet class level.

```jsp
<%!
private int visitCount = 0;

public String greet(String name) {
    return "Hello " + name;
}
%>
```

### Important warning

Instance fields in JSP can create thread-safety problems because multiple requests may execute concurrently.

Avoid mutable JSP instance variables.

## 10.2 Scriptlet

```jsp
<%
String name = "Shoeb";
out.println(name);
%>
```

Conditional example:

```jsp
<%
int age = 20;
if (age >= 18) {
%>
    <p>Adult</p>
<%
} else {
%>
    <p>Minor</p>
<%
}
%>
```

This works, but modern JSP should use JSTL/EL instead.

## 10.3 Expression

```jsp
<%= "Hello JSP" %>
```

Equivalent idea:

```java
out.print("Hello JSP");
```

Example:

```jsp
<p>Current year: <%= java.time.Year.now() %></p>
```

### Prefer EL

Instead of:

```jsp
<%= request.getAttribute("username") %>
```

Prefer:

```jsp
${username}
```

---

# 11. JSP Comments

## HTML comment

```html
<!-- Browser can see this comment in page source -->
```

## JSP comment

```jsp
<%-- This is removed on the server side --%>
```

Use JSP comments for server-side implementation notes that should not appear in rendered HTML.

---

# 12. JSP Implicit Objects

JSP provides objects automatically.

Main implicit objects:

| Object | Purpose |
|---|---|
| request | Current HTTP request |
| response | Current HTTP response |
| session | User HTTP session |
| application | ServletContext/application scope |
| out | JSP writer |
| config | ServletConfig |
| pageContext | JSP PageContext |
| page | Current generated servlet object |
| exception | Exception on error page |

## 12.1 request

```jsp
<%
String username = request.getParameter("username");
%>
```

Modern form:

```jsp
${param.username}
```

## 12.2 response

```jsp
<%
response.setHeader("Cache-Control", "no-store");
%>
```

Usually response manipulation belongs in a servlet/filter.

## 12.3 session

```jsp
<%
String user = (String) session.getAttribute("user");
%>
```

EL:

```jsp
${sessionScope.user}
```

## 12.4 application

```jsp
${applicationScope.companyName}
```

## 12.5 out

```jsp
<%
out.println("Hello");
%>
```

## 12.6 pageContext

Useful for scope handling and tag APIs.

```jsp
<%
pageContext.setAttribute("message", "Hello");
%>
```

---

# 13. JSP Scopes

JSP supports four major scopes.

```text
page
request
session
application
```

| Scope | Lifetime | Typical Use |
|---|---|---|
| page | current JSP page | temporary view variable |
| request | one request | controller -> JSP data |
| session | multiple requests from user | logged-in user/cart |
| application | entire application | global configuration/counters |

## Page scope

```jsp
<c:set var="title" value="Dashboard" scope="page" />
```

## Request scope

Servlet:

```java
request.setAttribute("employee", employee);
```

JSP:

```jsp
${requestScope.employee.name}
```

Usually `${employee.name}` is sufficient.

## Session scope

```java
request.getSession().setAttribute("loggedInUser", user);
```

```jsp
${sessionScope.loggedInUser.name}
```

## Application scope

```java
getServletContext().setAttribute("companyName", "ABC Ltd");
```

```jsp
${applicationScope.companyName}
```

### Scope lookup order

When you write:

```jsp
${name}
```

EL generally searches scopes in this order:

```text
page -> request -> session -> application
```

Use explicit scope when ambiguity matters.

---

# 14. Request Parameters and Form Handling

HTML form:

```jsp
<form method="post" action="login">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Login</button>
</form>
```

Servlet:

```java
String username = request.getParameter("username");
String password = request.getParameter("password");
```

JSP EL can access parameters:

```jsp
${param.username}
```

For repeated parameters:

```html
<input type="checkbox" name="skill" value="Java">
<input type="checkbox" name="skill" value="SQL">
```

Servlet:

```java
String[] skills = request.getParameterValues("skill");
```

EL:

```jsp
${paramValues.skill}
```

### Important pattern

Do not process validation/database updates directly in JSP.

Use:

```text
Form -> Servlet -> Validate -> Service -> DAO -> Redirect/Forward
```

---

# 15. JSP Standard Actions

JSP standard actions use XML-like syntax.

Common actions:

```text
jsp:include
jsp:forward
jsp:param
jsp:useBean
jsp:setProperty
jsp:getProperty
```

## jsp:include

```jsp
<jsp:include page="header.jsp" />
```

Dynamic include performed at request time.

## jsp:param

```jsp
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Dashboard" />
</jsp:include>
```

## jsp:forward

```jsp
<jsp:forward page="login.jsp" />
```

In MVC applications, forwarding is normally controlled by servlet/controller code.

---

# 16. Expression Language (EL)

Expression Language reduces the need for Java scriptlets.

Syntax:

```jsp
${expression}
```

Examples:

```jsp
${user.name}
${employee.salary}
${param.id}
${sessionScope.user}
```

## Access bean properties

Java bean:

```java
public class Employee {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

JSP:

```jsp
${employee.name}
```

EL calls the getter conceptually:

```java
employee.getName()
```

## Access map values

```jsp
${employeeMap["name"]}
```

or:

```jsp
${employeeMap.name}
```

## Access list/array

```jsp
${employees[0].name}
```

## Arithmetic

```jsp
${10 + 20}
${price * quantity}
```

## Comparison

```jsp
${age >= 18}
${status == 'ACTIVE'}
${salary gt 50000}
```

Operators:

```text
== or eq
!= or ne
<  or lt
>  or gt
<= or le
>= or ge
```

## Logical operators

```jsp
${isAdmin && active}
${isAdmin and active}
${!empty user}
```

## empty operator

```jsp
${empty employees}
${not empty employees}
```

Useful for null/empty collections and strings.

## EL implicit objects

```text
pageScope
requestScope
sessionScope
applicationScope
param
paramValues
header
headerValues
cookie
initParam
pageContext
```

Examples:

```jsp
${param.id}
${header['User-Agent']}
${cookie.theme.value}
```

---

# 17. JSTL

**JSTL** stands for **JSP Standard Tag Library**.

It provides tags for:

- conditions
- loops
- variable assignment
- URLs
- formatting
- internationalization
- XML in older applications
- SQL tags in demos/legacy code

Do not use JSTL SQL tags for production database architecture.

## Core taglib

A common declaration in traditional JSP applications is:

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

Your actual dependency/URI should match the JSTL generation used by your container.

## c:out

```jsp
<c:out value="${user.name}" />
```

Useful because output escaping behavior can help reduce XSS risks.

## c:set

```jsp
<c:set var="message" value="Welcome" />
```

```jsp
${message}
```

## c:remove

```jsp
<c:remove var="message" />
```

## c:if

```jsp
<c:if test="${user.admin}">
    <a href="admin">Admin Panel</a>
</c:if>
```

## c:choose

Equivalent to if/else-if/else.

```jsp
<c:choose>
    <c:when test="${score >= 80}">
        Grade A
    </c:when>
    <c:when test="${score >= 60}">
        Grade B
    </c:when>
    <c:otherwise>
        Grade C
    </c:otherwise>
</c:choose>
```

## c:forEach

```jsp
<c:forEach items="${employees}" var="employee">
    <p>${employee.name}</p>
</c:forEach>
```

With status:

```jsp
<c:forEach items="${employees}" var="employee" varStatus="status">
    <p>${status.count}. ${employee.name}</p>
</c:forEach>
```

Useful properties:

```text
status.index   -> zero-based
status.count   -> one-based
status.first
status.last
```

## c:forTokens

```jsp
<c:forTokens items="Java,SQL,JSP" delims="," var="skill">
    ${skill}<br>
</c:forTokens>
```

## c:url

```jsp
<c:url value="/employees" var="employeeUrl" />
<a href="${employeeUrl}">Employees</a>
```

## c:param

```jsp
<c:url value="/employee/edit" var="editUrl">
    <c:param name="id" value="${employee.id}" />
</c:url>
```

---

# 18. JSP Includes

There are two major include styles.

## Static include

```jsp
<%@ include file="header.jsp" %>
```

Think:

```text
Copy included file content into JSP before compilation.
```

Useful for largely static reusable fragments.

## Dynamic include

```jsp
<jsp:include page="header.jsp" />
```

Think:

```text
Execute included resource during the request.
```

### Practical scenario

Header:

```jsp
<header>
    <h1>Employee Portal</h1>
</header>
```

Main page:

```jsp
<jsp:include page="/WEB-INF/views/common/header.jsp" />

<main>
    Dashboard content
</main>
```

---

# 19. Forwarding Requests

A servlet often forwards to JSP:

```java
request.getRequestDispatcher("/WEB-INF/views/dashboard.jsp")
       .forward(request, response);
```

### Forward vs redirect

**Forward**:

```java
request.getRequestDispatcher("/page.jsp")
       .forward(request, response);
```

- same request
- URL usually remains unchanged
- request attributes remain available
- server-side transfer

**Redirect**:

```java
response.sendRedirect("employees");
```

- browser makes a new request
- URL changes
- request attributes are lost
- useful after successful POST

### Post/Redirect/Get pattern

Recommended:

```text
POST /employee/create
        |
        v
Save employee
        |
        v
Redirect /employees
        |
        v
GET /employees
```

This prevents accidental duplicate form submission on refresh.

---

# 20. JavaBeans with JSP

A JavaBean usually has:

- private fields
- public getters/setters
- a public no-argument constructor in traditional bean usage

Example:

```java
public class User {
    private String name;
    private String email;

    public User() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```

Old-style JSP bean usage:

```jsp
<jsp:useBean id="user" class="com.example.User" scope="request" />
<jsp:setProperty name="user" property="name" value="Shoeb" />
<jsp:getProperty name="user" property="name" />
```

Modern MVC code more often creates the object in Java and sends it to JSP:

```java
request.setAttribute("user", user);
```

Then:

```jsp
${user.name}
```

---

# 21. Sessions and Authentication

HTTP itself is stateless.

A session helps the server remember a user across requests.

Login servlet:

```java
if (authService.isValid(username, password)) {
    HttpSession session = request.getSession();
    session.setAttribute("loggedInUser", user);
    response.sendRedirect("dashboard");
} else {
    request.setAttribute("error", "Invalid username or password");
    request.getRequestDispatcher("/WEB-INF/views/login.jsp")
           .forward(request, response);
}
```

JSP:

```jsp
<p>Welcome ${sessionScope.loggedInUser.name}</p>
```

Logout:

```java
HttpSession session = request.getSession(false);
if (session != null) {
    session.invalidate();
}
response.sendRedirect("login");
```

### Never store passwords in session

Store only the minimum required user/session information.

---

# 22. Cookies

Create cookie:

```java
Cookie cookie = new Cookie("theme", "dark");
cookie.setMaxAge(7 * 24 * 60 * 60);
response.addCookie(cookie);
```

Read in servlet:

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

Read with EL:

```jsp
${cookie.theme.value}
```

### Security-related attributes

For authentication-related cookies, understand:

```text
HttpOnly
Secure
SameSite
```

Actual session-cookie security is usually configured in the application/container rather than manually inside JSP.

---

# 23. Application and Session State

Use session scope for user-specific state:

```text
shopping cart
logged-in user
wizard progress
```

Use application scope only for truly shared information:

```text
reference configuration
shared read-mostly constants
application-wide counters
```

Avoid storing large mutable datasets in application scope unless you intentionally implement caching and concurrency controls.

---

# 24. Error Handling

Never expose stack traces to end users in production.

Controller example:

```java
try {
    employeeService.create(employee);
    response.sendRedirect("employees");
} catch (Exception e) {
    log("Unable to create employee", e);
    request.setAttribute("error", "Unable to save employee.");
    request.getRequestDispatcher("/WEB-INF/views/error.jsp")
           .forward(request, response);
}
```

JSP:

```jsp
<c:if test="${not empty error}">
    <div class="error">
        <c:out value="${error}" />
    </div>
</c:if>
```

---

# 25. Custom Error Pages

JSP can be configured as an error page.

Example error page:

```jsp
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<body>
    <h1>Something went wrong</h1>
</body>
</html>
```

`web.xml`:

```xml
<error-page>
    <error-code>404</error-code>
    <location>/WEB-INF/views/errors/404.jsp</location>
</error-page>

<error-page>
    <error-code>500</error-code>
    <location>/WEB-INF/views/errors/500.jsp</location>
</error-page>
```

Exception mapping:

```xml
<error-page>
    <exception-type>java.lang.Exception</exception-type>
    <location>/WEB-INF/views/errors/500.jsp</location>
</error-page>
```

---

# 26. JSP with Servlets — MVC Pattern

This is one of the most important JSP concepts.

## Model

```java
public class Employee {
    private int id;
    private String name;
    private String department;

    // constructors, getters, setters
}
```

## Controller

```java
@WebServlet("/employees")
public class EmployeeServlet extends HttpServlet {

    private final EmployeeService service = new EmployeeService();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        List<Employee> employees = service.findAll();
        request.setAttribute("employees", employees);

        request.getRequestDispatcher("/WEB-INF/views/employees.jsp")
               .forward(request, response);
    }
}
```

## View

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${employees}" var="employee">
            <tr>
                <td><c:out value="${employee.id}" /></td>
                <td><c:out value="${employee.name}" /></td>
                <td><c:out value="${employee.department}" /></td>
            </tr>
        </c:forEach>
    </tbody>
</table>
```

### Why `/WEB-INF/views`?

Files under `WEB-INF` cannot normally be requested directly by the browser.

That enforces controller flow:

```text
Browser -> Servlet -> JSP
```

rather than:

```text
Browser -> JSP directly
```

---

# 27. JSP with JDBC

JDBC should not be written inside JSP.

Use DAO classes.

Connection helper:

```java
public class Database {

    private static final String URL = "jdbc:mysql://localhost:3306/company";
    private static final String USER = "appuser";
    private static final String PASSWORD = "secret";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
```

For production systems, prefer a configured **DataSource / connection pool** over opening raw DriverManager connections for every operation.

---

# 28. DAO Pattern

DAO = **Data Access Object**.

Purpose:

```text
Controller should not know SQL.
JSP should not know SQL.
DAO contains persistence logic.
```

Example:

```java
public class EmployeeDAO {

    public List<Employee> findAll() throws SQLException {
        String sql = "SELECT id, name, department FROM employee";
        List<Employee> employees = new ArrayList<>();

        try (Connection con = Database.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Employee employee = new Employee();
                employee.setId(rs.getInt("id"));
                employee.setName(rs.getString("name"));
                employee.setDepartment(rs.getString("department"));
                employees.add(employee);
            }
        }

        return employees;
    }
}
```

---

# 29. CRUD Application Example

CRUD means:

```text
Create
Read
Update
Delete
```

## Create

Form:

```jsp
<form method="post" action="employees">
    <input type="hidden" name="action" value="create">

    <label>Name</label>
    <input name="name" required>

    <label>Department</label>
    <input name="department" required>

    <button type="submit">Save</button>
</form>
```

Servlet:

```java
String name = request.getParameter("name");
String department = request.getParameter("department");

Employee employee = new Employee();
employee.setName(name);
employee.setDepartment(department);

service.create(employee);
response.sendRedirect("employees");
```

DAO:

```java
String sql = "INSERT INTO employee(name, department) VALUES (?, ?)";

try (Connection con = Database.getConnection();
     PreparedStatement ps = con.prepareStatement(sql)) {

    ps.setString(1, employee.getName());
    ps.setString(2, employee.getDepartment());
    ps.executeUpdate();
}
```

## Read

```java
request.setAttribute("employees", service.findAll());
request.getRequestDispatcher("/WEB-INF/views/employees.jsp")
       .forward(request, response);
```

## Update

```java
String sql = "UPDATE employee SET name=?, department=? WHERE id=?";
```

## Delete

```java
String sql = "DELETE FROM employee WHERE id=?";
```

### Important production rule

Sensitive state-changing operations should generally use POST/PUT-like controller actions rather than deleting data through a simple GET link.

---

# 30. Filters

Filters intercept requests/responses before or after a servlet/JSP.

Useful for:

- authentication
- authorization
- logging
- CORS in API-style applications
- character encoding
- security headers
- audit information

Example authentication filter:

```java
@WebFilter("/secure/*")
public class AuthenticationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        HttpSession session = httpRequest.getSession(false);

        if (session == null || session.getAttribute("loggedInUser") == null) {
            httpResponse.sendRedirect(httpRequest.getContextPath() + "/login");
            return;
        }

        chain.doFilter(request, response);
    }
}
```

### Better than checking login in every JSP

Bad:

```jsp
<%
if (session.getAttribute("user") == null) {
    response.sendRedirect("login.jsp");
}
%>
```

Better:

```text
AuthenticationFilter protects all secure routes centrally.
```

---

# 31. Listeners

Servlet listeners react to lifecycle events.

Examples:

- application startup
- application shutdown
- session creation/destruction
- request creation/destruction
- attribute changes

Example application listener:

```java
@WebListener
public class AppListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("Application started");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("Application stopped");
    }
}
```

Use cases:

- initialize caches
- load configuration
- schedule resource cleanup
- metrics setup

---

# 32. File Upload

HTML form:

```jsp
<form method="post"
      action="upload"
      enctype="multipart/form-data">

    <input type="file" name="document" required>
    <button type="submit">Upload</button>
</form>
```

Servlet:

```java
@WebServlet("/upload")
@MultipartConfig(
    maxFileSize = 5 * 1024 * 1024,
    maxRequestSize = 10 * 1024 * 1024
)
public class UploadServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        Part part = request.getPart("document");
        String submittedName = part.getSubmittedFileName();

        // Validate extension/content/size and generate safe server filename.
    }
}
```

### Security checklist

Never trust:

- original filename
- MIME type sent by browser
- file extension alone
- client-side size validation

Store uploads outside public web root when appropriate.

---

# 33. File Download

Servlet example:

```java
response.setContentType("application/pdf");
response.setHeader(
    "Content-Disposition",
    "attachment; filename=report.pdf"
);

try (InputStream in = Files.newInputStream(path);
     OutputStream out = response.getOutputStream()) {
    in.transferTo(out);
}
```

Do not allow users to construct arbitrary server filesystem paths.

---

# 34. Pagination

Suppose there are 100,000 employees.

Do not load everything and paginate only in JSP.

Use database pagination.

Parameters:

```text
page=3
size=20
```

Calculate:

```java
int offset = (page - 1) * size;
```

SQL style varies by database.

Example MySQL-style query:

```sql
SELECT id, name, department
FROM employee
ORDER BY id
LIMIT ? OFFSET ?;
```

Servlet:

```java
request.setAttribute("employees", service.findPage(page, size));
request.setAttribute("currentPage", page);
request.setAttribute("totalPages", totalPages);
```

JSP:

```jsp
<c:forEach begin="1" end="${totalPages}" var="pageNo">
    <a href="employees?page=${pageNo}&size=20">
        ${pageNo}
    </a>
</c:forEach>
```

For large page counts, render a limited window instead of thousands of page numbers.

---

# 35. Search and Filtering

Form:

```jsp
<form method="get" action="employees">
    <input name="q" value="${param.q}" placeholder="Search employee">

    <select name="department">
        <option value="">All departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
    </select>

    <button type="submit">Search</button>
</form>
```

DAO:

```sql
SELECT id, name, department
FROM employee
WHERE name LIKE ?
ORDER BY name;
```

Java:

```java
ps.setString(1, "%" + query + "%");
```

Use parameters for values, never string-concatenate user input into SQL.

---

# 36. Role-Based Authorization

Suppose roles are:

```text
USER
MANAGER
ADMIN
```

UI-only condition:

```jsp
<c:if test="${sessionScope.loggedInUser.role == 'ADMIN'}">
    <a href="admin/users">Manage Users</a>
</c:if>
```

This only hides the link.

It does **not** secure the endpoint.

Server-side authorization must still be performed in a filter/controller/security framework.

Example:

```java
if (!"ADMIN".equals(user.getRole())) {
    response.sendError(HttpServletResponse.SC_FORBIDDEN);
    return;
}
```

---

# 37. Internationalization (i18n)

Use resource bundles for multiple languages.

Example files:

```text
messages.properties
messages_hi.properties
messages_fr.properties
```

`messages.properties`:

```properties
welcome=Welcome
logout=Logout
```

`messages_hi.properties`:

```properties
welcome=स्वागत है
logout=लॉग आउट
```

JSTL formatting example:

```jsp
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<fmt:setLocale value="${sessionScope.language}" />
<fmt:setBundle basename="messages" />

<h1><fmt:message key="welcome" /></h1>
```

---

# 38. JSP Security

Security is not an optional advanced topic. It belongs in normal JSP development.

Important areas:

1. Authentication
2. Authorization
3. XSS
4. CSRF
5. SQL injection
6. Session fixation
7. Secure cookies
8. Security headers
9. File upload validation
10. Access control
11. Input validation
12. Output encoding
13. Secrets management
14. Error handling

### Principle

```text
Never trust browser input.
```

This includes:

```text
query parameters
form fields
headers
cookies
uploaded files
hidden form inputs
URL IDs
JSON/XML payloads
```

---

# 39. XSS Prevention

Suppose an attacker submits:

```html
<script>alert('xss')</script>
```

Unsafe rendering:

```jsp
${comment}
```

Depending on EL/JSP behavior and context, raw output can create risk.

Prefer an output-escaping tag where appropriate:

```jsp
<c:out value="${comment}" />
```

Also remember that HTML text, HTML attributes, JavaScript, CSS, and URL contexts require appropriate context-sensitive encoding.

### Do not build JavaScript using untrusted values directly

Bad:

```jsp
<script>
    let name = '${param.name}';
</script>
```

Use safe serialization/encoding strategies instead.

---

# 40. CSRF Protection

CSRF = Cross-Site Request Forgery.

Dangerous endpoint:

```text
POST /account/delete
```

A malicious external page could try to make an authenticated browser submit requests.

Common defense:

```text
1. Server generates unpredictable CSRF token
2. Store token server-side/session
3. Put token in form
4. Validate token during POST
```

Example form concept:

```jsp
<input type="hidden"
       name="csrfToken"
       value="${sessionScope.csrfToken}">
```

Controller validates the submitted token.

In framework-based applications, use the framework's built-in CSRF facilities.

---

# 41. SQL Injection Prevention

Bad:

```java
String sql = "SELECT * FROM users WHERE username='" + username + "'";
```

Attacker-controlled input can modify query behavior.

Correct:

```java
String sql = "SELECT id, username, password_hash FROM users WHERE username=?";

try (PreparedStatement ps = con.prepareStatement(sql)) {
    ps.setString(1, username);
}
```

### Rule

Use:

```text
PreparedStatement
ORM parameter binding
query parameters
```

Never concatenate untrusted input into SQL.

---

# 42. JSP Configuration and web.xml

Typical deployment descriptor:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee">

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

</web-app>
```

Servlet mapping using XML:

```xml
<servlet>
    <servlet-name>EmployeeServlet</servlet-name>
    <servlet-class>com.example.EmployeeServlet</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name>EmployeeServlet</servlet-name>
    <url-pattern>/employees</url-pattern>
</servlet-mapping>
```

Modern code often uses annotations such as:

```java
@WebServlet("/employees")
```

But `web.xml` remains useful for centralized configuration.

### Disable JSP scriptlets globally in stricter projects

A JSP property group can enforce JSP rules depending on your container/spec setup.

Conceptually:

```xml
<jsp-config>
    <jsp-property-group>
        <url-pattern>*.jsp</url-pattern>
        <scripting-invalid>true</scripting-invalid>
    </jsp-property-group>
</jsp-config>
```

This can help enforce EL/JSTL-only views.

---

# 43. JSP Fragments and Tag Files

Reusable view components are important in large applications.

Examples:

```text
header
footer
navigation
alert
pagination
form field
status badge
```

A simple fragment:

```jsp
<nav>
    <a href="${pageContext.request.contextPath}/home">Home</a>
    <a href="${pageContext.request.contextPath}/employees">Employees</a>
</nav>
```

Include:

```jsp
<jsp:include page="/WEB-INF/views/common/nav.jsp" />
```

Tag files provide a more component-like solution.

Typical path:

```text
/WEB-INF/tags/
```

Example tag file `alert.tag`:

```jsp
<%@ tag body-content="empty" %>
<%@ attribute name="message" required="true" %>

<div class="alert">
    <c:out value="${message}" />
</div>
```

Use it after declaring the tag directory:

```jsp
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags" %>

<ui:alert message="Employee saved successfully" />
```

---

# 44. Custom JSP Tags

Custom tags encapsulate reusable presentation logic.

They are useful when:

- the same view logic appears repeatedly
- a reusable UI component is needed
- you want to avoid Java code in JSP

Examples:

```text
<app:statusBadge status="${employee.status}" />
<app:money value="${invoice.total}" />
<app:permission name="EMPLOYEE_EDIT">...</app:permission>
```

For many applications, tag files are simpler than writing full Java tag handler classes.

---

# 45. MVC Project Structure

Recommended educational structure:

```text
src/main/java/
└── com/example/app/
    ├── controller/
    │   ├── LoginServlet.java
    │   └── EmployeeServlet.java
    ├── service/
    │   ├── AuthService.java
    │   └── EmployeeService.java
    ├── dao/
    │   └── EmployeeDAO.java
    ├── model/
    │   ├── Employee.java
    │   └── User.java
    ├── filter/
    │   ├── AuthenticationFilter.java
    │   └── EncodingFilter.java
    ├── listener/
    │   └── AppListener.java
    └── util/
        └── Database.java

src/main/webapp/
├── assets/
│   ├── css/
│   └── js/
└── WEB-INF/
    ├── views/
    │   ├── login.jsp
    │   ├── employees.jsp
    │   ├── employee-form.jsp
    │   └── common/
    │       ├── header.jsp
    │       └── footer.jsp
    ├── tags/
    └── web.xml
```

---

# 46. JSP Best Practices

## 1. Keep Java code out of JSP

Bad:

```jsp
<%
List<Employee> employees = employeeDAO.findAll();
%>
```

Good:

```java
request.setAttribute("employees", service.findAll());
```

```jsp
<c:forEach items="${employees}" var="employee">
```

## 2. Use MVC

```text
Servlet/Controller -> data preparation
Service -> business rules
DAO -> database
JSP -> HTML rendering
```

## 3. Place JSP views under WEB-INF

Prevents direct access.

## 4. Prefer EL + JSTL

Avoid scriptlets.

## 5. Escape untrusted output

Use proper output encoding.

## 6. Validate all input server-side

Browser validation can be bypassed.

## 7. Use POST-Redirect-GET

Prevents duplicate form submission.

## 8. Keep reusable sections separate

```text
header.jsp
footer.jsp
navigation.jsp
```

## 9. Use filters for cross-cutting concerns

```text
authentication
logging
encoding
headers
```

## 10. Keep secrets out of JSP and source code

Use configuration/secrets management.

---

# 47. Common JSP Mistakes

## Mistake 1: Database query directly in JSP

```jsp
<% ResultSet rs = statement.executeQuery(...); %>
```

Fix: DAO pattern.

## Mistake 2: Too many scriptlets

```jsp
<% if (...) { %>
```

Fix: JSTL.

## Mistake 3: Business logic in view

```jsp
<%
if (orderTotal > 10000) {
    discount = calculateDiscount(...);
}
%>
```

Fix: service layer.

## Mistake 4: Trusting hidden fields

```html
<input type="hidden" name="role" value="ADMIN">
```

A user can modify this value.

Fix: server-side authorization.

## Mistake 5: Using GET for destructive operations

Bad:

```html
<a href="deleteEmployee?id=15">Delete</a>
```

Prefer a POST form with CSRF protection.

## Mistake 6: Not escaping output

Bad:

```jsp
${userComment}
```

Prefer context-safe encoding.

## Mistake 7: Storing huge objects in session

This hurts memory usage and clustered deployment.

## Mistake 8: Hardcoding context path

Bad:

```html
<a href="/myapp/employees">Employees</a>
```

Better:

```jsp
<a href="${pageContext.request.contextPath}/employees">Employees</a>
```

---

# 48. Performance Optimization

Important areas:

## Avoid unnecessary session creation

If a JSP truly does not need a session:

```jsp
<%@ page session="false" %>
```

## Do not load huge datasets

Use:

```text
pagination
filtering
lazy retrieval at service/DAO level
```

## Use a connection pool

Prefer container/framework DataSource pooling.

## Cache carefully

Possible cache targets:

```text
reference data
lookup tables
rarely changing configuration
```

Do not cache user-specific/private data globally.

## Minimize repeated work in JSP

Prepare derived values in controller/service where possible.

## Static resources

Use caching/compression/CDN strategies as appropriate for:

```text
CSS
JavaScript
images
fonts
```

---

# 49. Debugging JSP Applications

Common errors:

## 404 Not Found

Check:

```text
URL mapping
context path
@WebServlet mapping
WEB-INF direct access
server deployment
```

## 500 Internal Server Error

Check server logs for:

```text
JSP compilation error
NullPointerException
EL property resolution
missing tag library
DAO/database error
```

## JSP compilation error

Example:

```text
Unable to compile class for JSP
```

Often caused by:

```text
bad Java in scriptlet
taglib mismatch
missing dependency
syntax error
javax/jakarta incompatibility
```

## Attribute is null

Controller:

```java
request.setAttribute("employees", employees);
```

JSP expects:

```jsp
${employees}
```

If controller uses `employeeList` instead, JSP receives nothing under `employees`.

## Session value missing

Check:

```text
session invalidated?
new session created?
attribute name typo?
request went to a different application/domain?
```

## Character encoding problems

Use UTF-8 consistently in:

```text
HTML
JSP pageEncoding
request encoding
response encoding
database
JDBC
```

---

# 50. JSP in Modern Jakarta EE

A key historical transition is:

```text
Java EE namespace: javax.*
Jakarta EE namespace: jakarta.*
```

Old servlet import:

```java
import javax.servlet.http.HttpServlet;
```

Modern servlet import:

```java
import jakarta.servlet.http.HttpServlet;
```

This matters when upgrading applications and servers.

### Migration scenario

Suppose an old application runs on an older Tomcat generation and uses:

```java
javax.servlet.*
```

Moving to a newer Jakarta-based server can require:

- dependency updates
- import changes
- tag library/JSTL compatibility changes
- third-party library upgrades
- framework upgrades

Do not perform a package rename blindly. Validate every dependency.

---

# 51. Spring MVC with JSP

JSP is also commonly used with Spring MVC in older and existing enterprise applications.

Controller:

```java
@Controller
public class EmployeeController {

    @GetMapping("/employees")
    public String employees(Model model) {
        model.addAttribute("employees", employeeService.findAll());
        return "employees";
    }
}
```

JSP:

```jsp
<c:forEach items="${employees}" var="employee">
    <div>${employee.name}</div>
</c:forEach>
```

View resolver concept:

```text
prefix: /WEB-INF/views/
suffix: .jsp
```

Returning:

```java
"employees"
```

resolves to:

```text
/WEB-INF/views/employees.jsp
```

### Modern note

Spring applications often use Thymeleaf or SPA frontends today, but JSP remains important for maintaining existing enterprise systems.

---

# 52. Real-World Scenarios

## Scenario 1: Login page

Requirements:

```text
User enters username/password
Validate credentials
Create session
Redirect to dashboard
```

Flow:

```text
login.jsp
   |
POST /login
   |
LoginServlet
   |
AuthService
   |
UserDAO
   |
Database
   |
Session created
   |
Redirect /dashboard
```

Do not verify credentials inside JSP.

---

## Scenario 2: Employee list

Controller:

```java
List<Employee> employees = service.findAll();
request.setAttribute("employees", employees);
```

JSP:

```jsp
<c:choose>
    <c:when test="${empty employees}">
        <p>No employees found.</p>
    </c:when>
    <c:otherwise>
        <table>
            <c:forEach items="${employees}" var="employee">
                <tr>
                    <td><c:out value="${employee.name}" /></td>
                    <td><c:out value="${employee.department}" /></td>
                </tr>
            </c:forEach>
        </table>
    </c:otherwise>
</c:choose>
```

---

## Scenario 3: Edit form

Servlet loads employee:

```java
int id = Integer.parseInt(request.getParameter("id"));
Employee employee = service.findById(id);
request.setAttribute("employee", employee);
request.getRequestDispatcher("/WEB-INF/views/employee-form.jsp")
       .forward(request, response);
```

JSP:

```jsp
<form method="post" action="employee/update">
    <input type="hidden" name="id" value="${employee.id}">

    <input name="name" value="${employee.name}">
    <input name="department" value="${employee.department}">

    <button type="submit">Update</button>
</form>
```

Server must verify that the authenticated user has permission to edit that employee.

---

## Scenario 4: Shopping cart

Session:

```java
HttpSession session = request.getSession();
List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");
```

JSP:

```jsp
<c:forEach items="${sessionScope.cart}" var="item">
    <p>
        <c:out value="${item.product.name}" />
        x ${item.quantity}
    </p>
</c:forEach>
```

Do not trust product price sent by the browser. Reload authoritative price from the server/database before checkout.

---

## Scenario 5: Admin-only navigation

```jsp
<c:if test="${sessionScope.loggedInUser.role == 'ADMIN'}">
    <a href="${pageContext.request.contextPath}/admin">Admin</a>
</c:if>
```

Also enforce role in a filter/controller.

---

## Scenario 6: Flash message after save

Problem:

```text
POST -> redirect -> request attributes disappear
```

Simple session flash approach:

```java
request.getSession().setAttribute("flashSuccess", "Employee saved");
response.sendRedirect("employees");
```

JSP:

```jsp
<c:if test="${not empty sessionScope.flashSuccess}">
    <div class="success">
        <c:out value="${sessionScope.flashSuccess}" />
    </div>
    <c:remove var="flashSuccess" scope="session" />
</c:if>
```

A larger application should use a clean flash-message abstraction rather than duplicating this logic everywhere.

---

## Scenario 7: Server-side validation

Form:

```jsp
<input name="email" value="${form.email}">
<c:if test="${not empty errors.email}">
    <span class="error"><c:out value="${errors.email}" /></span>
</c:if>
```

Servlet/service builds an error map:

```java
Map<String, String> errors = new HashMap<>();

if (email == null || email.isBlank()) {
    errors.put("email", "Email is required");
}
```

If validation fails:

```java
request.setAttribute("errors", errors);
request.setAttribute("form", submittedForm);
request.getRequestDispatcher("/WEB-INF/views/register.jsp")
       .forward(request, response);
```

---

## Scenario 8: Dashboard KPIs

Controller:

```java
DashboardDTO dashboard = dashboardService.getDashboard(userId);
request.setAttribute("dashboard", dashboard);
```

JSP:

```jsp
<div class="card">
    Total Employees: ${dashboard.totalEmployees}
</div>

<div class="card">
    Pending Approvals: ${dashboard.pendingApprovals}
</div>
```

Avoid writing multiple separate database queries directly from JSP cards.

---

# 53. Mini Project — Employee Management System

Build this project to master JSP properly.

## Features

```text
Login
Logout
Employee list
Create employee
Edit employee
Delete employee
Search
Pagination
Role-based access
Validation
Error handling
Flash messages
Audit logging
```

## Database

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE'
);
```

## Suggested routes

```text
GET  /login
POST /login
POST /logout

GET  /employees
GET  /employee/create
POST /employee/create
GET  /employee/edit?id=1
POST /employee/update
POST /employee/delete
```

## Layers

```text
JSP
 |
Servlet
 |
Service
 |
DAO
 |
Database
```

## Employee List JSP

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>Employees</title>
</head>
<body>

<h1>Employees</h1>

<form method="get" action="${pageContext.request.contextPath}/employees">
    <input type="text" name="q" value="${param.q}" placeholder="Search">
    <button type="submit">Search</button>
</form>

<c:choose>
    <c:when test="${empty employees}">
        <p>No employee found.</p>
    </c:when>

    <c:otherwise>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${employees}" var="employee">
                    <tr>
                        <td>${employee.id}</td>
                        <td><c:out value="${employee.name}" /></td>
                        <td><c:out value="${employee.email}" /></td>
                        <td><c:out value="${employee.department}" /></td>
                        <td><c:out value="${employee.status}" /></td>
                        <td>
                            <a href="${pageContext.request.contextPath}/employee/edit?id=${employee.id}">
                                Edit
                            </a>

                            <form method="post"
                                  action="${pageContext.request.contextPath}/employee/delete"
                                  style="display:inline">
                                <input type="hidden" name="id" value="${employee.id}">
                                <button type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </c:otherwise>
</c:choose>

</body>
</html>
```

### What this project teaches

```text
JSP basics
EL
JSTL
MVC
Servlet routing
form handling
JDBC
DAO
sessions
filters
validation
security
CRUD
pagination
```

---

# 54. JSP Interview Questions

## Beginner

### What is JSP?

A server-side Java view technology used to generate dynamic web content. JSP is translated into a servlet by the web container.

### What is the difference between JSP and Servlet?

Servlets are better suited for request/controller logic, while JSP is better suited for rendering HTML views.

### What are JSP implicit objects?

Common implicit objects include:

```text
request
response
session
application
out
config
pageContext
page
exception
```

### What is Expression Language?

EL provides concise syntax such as:

```jsp
${employee.name}
```

instead of Java code in the page.

### What is JSTL?

A standard JSP tag library providing tags for loops, conditions, formatting, URLs, and related tasks.

---

## Intermediate

### Difference between include directive and jsp:include?

```jsp
<%@ include file="header.jsp" %>
```

is translation-time/static include.

```jsp
<jsp:include page="header.jsp" />
```

is request-time/dynamic include.

### Difference between forward and redirect?

Forward:

```text
same request
server-side
URL remains generally unchanged
request attributes survive
```

Redirect:

```text
new request
browser-side
URL changes
request attributes do not survive
```

### What are JSP scopes?

```text
page
request
session
application
```

### Why avoid scriptlets?

Because they mix presentation and Java logic, make testing harder, reduce readability, and encourage poor architecture.

### Why put JSP under WEB-INF?

To prevent users from directly requesting the view and bypassing controller logic.

---

## Advanced

### Is JSP thread-safe?

The generated servlet may handle multiple requests concurrently. Mutable JSP instance fields can therefore introduce race conditions.

### How does JSP become a servlet?

The container translates JSP source into servlet Java source, compiles it, loads it, initializes it, and executes its service logic for requests.

### How should authentication be implemented?

Use controllers/filters/security frameworks. JSP should render state, not own authentication logic.

### How should JSP prevent XSS?

Treat all untrusted data carefully and apply correct context-aware output encoding. Use safe tag/function support and avoid embedding untrusted content directly into executable JavaScript/CSS/HTML contexts.

### Why is a connection pool better than DriverManager in production?

Opening database connections is expensive. Pools reuse connections and provide better performance/resource control.

### Why use POST-Redirect-GET?

It avoids duplicate form submission when the user refreshes after a successful POST.

### What happens to request attributes after redirect?

They are lost because redirect creates a new HTTP request.

### How do you persist one-time messages across redirect?

Use a flash-message mechanism, often implemented using session storage that is removed after display.

---

# 55. Learning Roadmap

Follow this order.

## Stage 1 — Web foundations

Learn:

```text
HTTP
request/response
GET/POST
HTML forms
cookies
sessions
status codes
```

## Stage 2 — Servlets

Learn:

```text
HttpServlet
@WebServlet
doGet
doPost
RequestDispatcher
sendRedirect
ServletContext
```

## Stage 3 — JSP fundamentals

Learn:

```text
JSP lifecycle
directives
scriptlets for understanding legacy code
implicit objects
includes
```

## Stage 4 — EL

Master:

```text
properties
maps
lists
scope
param
empty
operators
```

## Stage 5 — JSTL

Master:

```text
c:if
c:choose
c:forEach
c:set
c:out
c:url
fmt tags
```

## Stage 6 — MVC

Build:

```text
Servlet -> Service -> DAO -> JSP
```

## Stage 7 — Database

Learn:

```text
JDBC
PreparedStatement
transactions
DataSource
connection pooling
DAO pattern
```

## Stage 8 — Production features

Learn:

```text
filters
listeners
validation
pagination
search
file upload
error pages
logging
```

## Stage 9 — Security

Master:

```text
XSS
CSRF
SQL injection
session security
authentication
authorization
file upload security
security headers
```

## Stage 10 — Framework integration

Learn how JSP is used with:

```text
Spring MVC
Jakarta EE
legacy Java EE systems
```

---

# 56. Quick Reference Cheat Sheet

## Page directive

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
```

## Tag library

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

## EL output

```jsp
${user.name}
```

## Escaped JSTL output

```jsp
<c:out value="${user.name}" />
```

## Condition

```jsp
<c:if test="${user.active}">
    Active
</c:if>
```

## If/else

```jsp
<c:choose>
    <c:when test="${condition}">
        Yes
    </c:when>
    <c:otherwise>
        No
    </c:otherwise>
</c:choose>
```

## Loop

```jsp
<c:forEach items="${employees}" var="employee">
    ${employee.name}
</c:forEach>
```

## Request parameter

```jsp
${param.id}
```

## Session attribute

```jsp
${sessionScope.loggedInUser}
```

## Context path

```jsp
${pageContext.request.contextPath}
```

## Dynamic include

```jsp
<jsp:include page="header.jsp" />
```

## Forward from servlet

```java
request.getRequestDispatcher("/WEB-INF/views/page.jsp")
       .forward(request, response);
```

## Redirect

```java
response.sendRedirect("employees");
```

## Set request attribute

```java
request.setAttribute("employee", employee);
```

## Set session attribute

```java
request.getSession().setAttribute("user", user);
```

## PreparedStatement

```java
PreparedStatement ps = con.prepareStatement(
    "SELECT * FROM employee WHERE id=?"
);
ps.setInt(1, id);
```

---

# 57. Final Checklist

A developer who understands the following topics has a strong JSP foundation.

### JSP Fundamentals

- [ ] Understand what JSP is
- [ ] Understand how JSP becomes a servlet
- [ ] Understand JSP lifecycle
- [ ] Understand directives
- [ ] Understand declarations, scriptlets, and expressions
- [ ] Know why scriptlets should usually be avoided
- [ ] Understand JSP implicit objects
- [ ] Understand page/request/session/application scopes

### Expression Language

- [ ] Access bean properties
- [ ] Access maps/lists
- [ ] Use request parameters
- [ ] Use scope objects
- [ ] Use logical/comparison operators
- [ ] Use `empty`

### JSTL

- [ ] `c:out`
- [ ] `c:set`
- [ ] `c:remove`
- [ ] `c:if`
- [ ] `c:choose`
- [ ] `c:forEach`
- [ ] `c:url`
- [ ] formatting/i18n tags

### MVC

- [ ] JSP contains presentation only
- [ ] Servlet/controller handles request flow
- [ ] Service contains business logic
- [ ] DAO contains persistence logic
- [ ] Models/DTOs carry data
- [ ] JSPs are stored under `WEB-INF/views`

### Web Concepts

- [ ] GET vs POST
- [ ] Forward vs redirect
- [ ] Post/Redirect/Get
- [ ] Sessions
- [ ] Cookies
- [ ] Filters
- [ ] Listeners
- [ ] Form validation
- [ ] Error handling

### Database

- [ ] JDBC basics
- [ ] PreparedStatement
- [ ] DAO pattern
- [ ] Transactions
- [ ] Connection pools/DataSource
- [ ] Pagination
- [ ] Search/filtering

### Security

- [ ] XSS prevention
- [ ] CSRF protection
- [ ] SQL injection prevention
- [ ] Server-side authorization
- [ ] Secure session handling
- [ ] Safe file uploads
- [ ] Avoid exposing exceptions
- [ ] Safe output encoding

### Real-World Development

- [ ] Login/logout
- [ ] CRUD
- [ ] Search
- [ ] Pagination
- [ ] Role-based screens
- [ ] Reusable JSP fragments
- [ ] Tag files/custom tags
- [ ] Production error pages
- [ ] Logging and debugging
- [ ] Understand `javax.*` vs `jakarta.*`

---

# Recommended Practice Projects

Build these in order:

## Project 1 — Student Registration

Features:

```text
add student
list students
edit student
delete student
validation
```

## Project 2 — Employee Portal

Features:

```text
login
session
role-based access
employee CRUD
search
pagination
```

## Project 3 — Expense Approval System

Features:

```text
employee submits expense
manager approves/rejects
finance approves
status history
role-based dashboard
```

This teaches workflow-style enterprise JSP development.

## Project 4 — Shopping Cart

Features:

```text
product list
cart in session
quantity update
checkout
order creation
```

## Project 5 — Support Ticket System

Features:

```text
create ticket
comment on ticket
status change
assignment
role-based access
file attachment
search
pagination
```

---

# JSP Mental Model to Remember

The most important principle is:

```text
JSP should DISPLAY data.
Servlet/Controller should HANDLE requests.
Service should MAKE business decisions.
DAO should TALK to the database.
```

When you see a JSP containing large Java blocks, SQL, authentication code, business calculations, or database connections, treat it as a sign that responsibilities should probably be moved into proper Java classes.

A clean JSP should look primarily like:

```jsp
HTML
+ EL
+ JSTL
+ reusable view tags/components
```

not like a Java source file embedded inside HTML.

---

# Final Example — Clean Production-Style Flow

## Request

```text
GET /employees?department=IT&page=1
```

## Controller

```java
@WebServlet("/employees")
public class EmployeeServlet extends HttpServlet {

    private final EmployeeService service = new EmployeeService();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        String department = request.getParameter("department");
        int page = parsePositiveInt(request.getParameter("page"), 1);
        int size = 20;

        EmployeePage result = service.search(department, page, size);

        request.setAttribute("result", result);
        request.setAttribute("department", department);

        request.getRequestDispatcher("/WEB-INF/views/employees.jsp")
               .forward(request, response);
    }

    private int parsePositiveInt(String raw, int defaultValue) {
        try {
            int value = Integer.parseInt(raw);
            return value > 0 ? value : defaultValue;
        } catch (Exception e) {
            return defaultValue;
        }
    }
}
```

## Service

```java
public EmployeePage search(String department, int page, int size) {
    // Validate filter/business rules.
    // Call DAO.
    // Build pagination DTO.
    return employeeDAO.search(department, page, size);
}
```

## DAO

```java
public List<Employee> search(String department, int limit, int offset)
        throws SQLException {

    String sql = """
        SELECT id, name, email, department, status
        FROM employee
        WHERE (? IS NULL OR department = ?)
        ORDER BY name
        LIMIT ? OFFSET ?
        """;

    try (Connection con = dataSource.getConnection();
         PreparedStatement ps = con.prepareStatement(sql)) {

        ps.setString(1, department);
        ps.setString(2, department);
        ps.setInt(3, limit);
        ps.setInt(4, offset);

        // map result set...
    }
}
```

## JSP

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>Employees</title>
</head>
<body>

<h1>Employee Directory</h1>

<c:choose>
    <c:when test="${empty result.items}">
        <p>No employees found.</p>
    </c:when>

    <c:otherwise>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <c:forEach items="${result.items}" var="employee">
                    <tr>
                        <td><c:out value="${employee.name}" /></td>
                        <td><c:out value="${employee.email}" /></td>
                        <td><c:out value="${employee.department}" /></td>
                        <td><c:out value="${employee.status}" /></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </c:otherwise>
</c:choose>

</body>
</html>
```

This is the architecture you should aim to understand and reproduce without copying blindly.

---

# End of Handbook

Use this handbook in three ways:

1. **Learn:** read each section in order.
2. **Practice:** type and modify every example yourself.
3. **Master:** build the Employee Management System and Support Ticket System without looking at the solution first.

The goal is not to memorize JSP tags. The goal is to understand how JSP fits inside a clean, secure, maintainable Java web application.
