# Spring Boot Master Handbook
## Beginner-to-Advanced Learning Guide with Concepts, Scenarios, Examples, Best Practices, Production Guidance, and Interview Preparation

> **Version note (August 2026):** This handbook is written for modern Spring Boot, with **Spring Boot 4.1.x** as the current reference line. Spring Boot 4.1 requires **Java 17+**. Most core concepts also apply to recent Spring Boot 3.x applications. Modern examples use `jakarta.*` packages instead of the older `javax.*` packages.
>
> **Goal:** Use this as a single long-term reference: learn Spring Boot from zero, build real APIs, understand what happens internally, and prepare for production work and interviews.

---

# Table of Contents

1. How to use this handbook
2. Spring ecosystem overview
3. Prerequisites
4. Project setup
5. First Spring Boot application
6. IoC, Dependency Injection, Beans
7. Component scanning and stereotype annotations
8. Bean configuration, lifecycle, scopes, and conditions
9. Auto-configuration and starters
10. Externalized configuration and profiles
11. Recommended architecture and package structure
12. Spring MVC request lifecycle
13. REST API development
14. DTOs and mapping
15. Validation
16. Exception handling
17. Jackson and JSON
18. Filters, interceptors, and AOP
19. Logging
20. Database setup
21. JPA and Hibernate
22. Spring Data repositories
23. Entity relationships
24. Fetch strategies and N+1
25. Transactions
26. Advanced persistence and locking
27. Database migrations
28. JDBC and alternatives to JPA
29. Caching
30. Spring Security
31. JWT authentication
32. OAuth 2.0 and OpenID Connect
33. CORS, CSRF, sessions, headers
34. Method-level authorization
35. External API calls
36. Resilience: timeout, retry, circuit breaker
37. Application events
38. Async processing
39. Scheduling
40. File upload/download
41. Email
42. Kafka and RabbitMQ
43. WebSocket and Server-Sent Events
44. Spring WebFlux
45. Spring Batch
46. Testing strategy
47. JUnit and Mockito
48. Spring Boot test slices
49. Integration testing and Testcontainers
50. API documentation with OpenAPI
51. Actuator
52. Observability
53. Configuration and secrets in production
54. Docker
55. Cloud Native Buildpacks
56. Kubernetes
57. Microservices
58. Spring Cloud concepts
59. Modular monoliths and Spring Modulith
60. Clean Architecture, Hexagonal Architecture, and DDD
61. Performance optimization
62. Concurrency and thread safety
63. AOT and native images
64. Common annotations cheat sheet
65. Common design patterns
66. Anti-patterns and mistakes
67. Debugging guide
68. Production-readiness checklist
69. Interview questions and answers
70. Practice projects
71. Learning roadmap
72. Official references

---

# 1. How to Use This Handbook

Do not try to memorize Spring Boot. Learn it in layers:

```text
Java
  ↓
Spring Core
  ↓
Spring Boot
  ↓
Spring MVC / REST
  ↓
Database / JPA
  ↓
Security
  ↓
Testing
  ↓
Production
  ↓
Distributed systems
```

For each concept, follow this cycle:

1. Understand **what problem it solves**.
2. Learn the minimum syntax.
3. Build a small example.
4. Break the example intentionally.
5. Read the error and debug it.
6. Apply it to a realistic use case.
7. Learn its production implications.

A developer who understands **why Spring creates a bean or proxy** is stronger than a developer who memorizes many annotations.

---

# 2. Spring Ecosystem Overview

## 2.1 Spring Framework

Spring Framework is a Java application framework whose core capabilities include:

- Inversion of Control
- Dependency Injection
- bean management
- transaction management
- Spring MVC
- Spring WebFlux
- database integration
- validation and data binding
- events
- AOP
- testing support

## 2.2 Spring Boot

Spring Boot builds on Spring and reduces setup work with:

- sensible defaults
- auto-configuration
- starter dependencies
- embedded servers
- externalized configuration
- executable JAR packaging
- production-ready health and metrics support

Traditional Spring applications often required more explicit infrastructure configuration. Spring Boot asks:

> Based on the dependencies and configuration available, what can I safely configure automatically?

Example:

```java
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot";
    }
}
```

With the web starter, Boot provides the supporting web infrastructure and embedded server.

## 2.3 Important projects

| Project | Purpose |
|---|---|
| Spring Framework | Core IoC, web, data, transaction, testing APIs |
| Spring Boot | Opinionated configuration and runtime platform |
| Spring MVC | Servlet-based web applications |
| Spring WebFlux | Reactive web applications |
| Spring Data | Data-access abstractions |
| Spring Security | Authentication and authorization |
| Spring Batch | Reliable batch processing |
| Spring Cloud | Distributed-system patterns |
| Spring Modulith | Modular Spring applications |
| Spring for Apache Kafka | Kafka integration |

## 2.4 Spring vs Spring Boot

```text
Spring      = the framework
Spring Boot = a highly convenient way to configure, package, and operate Spring applications
```

Boot does not replace Spring. Boot uses Spring.

---

# 3. Prerequisites

Before going deep, understand:

- classes and objects
- interfaces
- inheritance and composition
- exceptions
- collections
- generics
- annotations
- lambdas and streams
- `Optional`
- records
- enums
- date/time API
- concurrency basics
- Maven or Gradle basics
- SQL basics
- HTTP and JSON basics

## 3.1 Interfaces

```java
public interface PaymentService {
    PaymentResult pay(PaymentRequest request);
}
```

Implementation:

```java
public class CardPaymentService implements PaymentService {
    @Override
    public PaymentResult pay(PaymentRequest request) {
        return new PaymentResult(true);
    }
}
```

Spring commonly injects an implementation through its interface, reducing coupling.

## 3.2 Annotations

Spring APIs commonly use:

```java
@Service
@RestController
@Entity
@Transactional
@Valid
```

Annotations provide metadata that Spring uses to configure behavior.

## 3.3 Reflection and proxies

Spring can inspect classes and build proxy objects around them. Proxy-backed behavior is important for features such as:

- transactions
- caching
- asynchronous methods
- method security
- AOP

This explains several advanced Spring behaviors later in the handbook.

---

# 4. Project Setup

The easiest starting point is Spring Initializr.

Typical options:

```text
Project: Maven
Language: Java
Packaging: Jar
Java: 17+
```

Common dependencies:

```text
Spring Web
Validation
Spring Data JPA
Spring Security
Actuator
Database Driver
DevTools
```

## 4.1 Maven example

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.1.0</version>
    <relativePath/>
</parent>

<properties>
    <java.version>17</java.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

Run:

```bash
./mvnw spring-boot:run
```

Windows:

```powershell
mvnw.cmd spring-boot:run
```

Build and run:

```bash
./mvnw clean package
java -jar target/myapp.jar
```

## 4.2 Maven vs Gradle

Use Maven when you prefer convention and declarative XML or when your organization already uses it. Use Gradle when your team prefers a build DSL and custom build logic. Both are production-ready.

---

# 5. First Spring Boot Application

```java
package com.example.orders;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}
```

## 5.1 What `@SpringBootApplication` represents

Conceptually it combines:

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
```

It tells Spring Boot to:

- use the class as application configuration
- enable Boot auto-configuration
- scan the package and subpackages for Spring-managed components

## 5.2 Package placement

Recommended:

```text
com.example.orders
├── OrderApplication.java
├── controller
├── service
├── repository
├── entity
├── dto
├── exception
└── config
```

Keeping the main class near the package root lets component scanning naturally cover the application.

---

# 6. IoC, Dependency Injection, and Beans

This is the foundation of Spring.

## 6.1 Inversion of Control

Without Spring:

```java
public class OrderService {
    private final PaymentService paymentService =
        new CardPaymentService();
}
```

`OrderService` chooses and creates its dependency.

With Spring:

```java
@Service
public class OrderService {

    private final PaymentService paymentService;

    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
```

Spring creates and supplies the dependency. Control over object construction is inverted from application code to the container.

## 6.2 Dependency Injection

Dependency Injection means an object receives what it needs from outside.

### Constructor injection — preferred

```java
@Service
public class InvoiceService {

    private final InvoiceRepository repository;

    public InvoiceService(InvoiceRepository repository) {
        this.repository = repository;
    }
}
```

Advantages:

- dependencies are explicit
- `final` fields are possible
- unit testing is easy
- missing dependencies are visible immediately
- circular design problems become easier to detect

### Setter injection

Useful when a dependency is optional or genuinely replaceable.

### Field injection

```java
@Autowired
private InvoiceRepository repository;
```

It works, but constructor injection is generally clearer and easier to test.

## 6.3 Bean

A **bean** is an object managed by Spring.

```java
@Service
public class TaxCalculator {
}
```

Spring can create, configure, inject, proxy, and destroy the object.

## 6.4 ApplicationContext

`ApplicationContext` is Spring's main IoC container abstraction.

Mental model:

```text
read configuration
  ↓
discover bean definitions
  ↓
create beans
  ↓
resolve dependencies
  ↓
apply post-processors/proxies
  ↓
application ready
```

---

# 7. Component Scanning and Stereotypes

## `@Component`

Generic Spring-managed class.

```java
@Component
class CsvParser {}
```

## `@Service`

Business/application logic.

```java
@Service
class OrderService {}
```

## `@Repository`

Persistence/data-access component.

```java
@Repository
class LegacyOrderDao {}
```

It also has persistence-related semantics such as exception translation support.

## `@Controller`

MVC controller, often used when returning server-rendered views.

## `@RestController`

Controller whose methods normally return response bodies such as JSON.

Typical flow:

```text
@RestController
      ↓
@Service
      ↓
@Repository
```

These annotations express architectural intent as well as registering beans.

---

# 8. Bean Configuration, Lifecycle, Scopes, and Conditions

## 8.1 `@Configuration` and `@Bean`

Use `@Bean` when registering a class that you cannot or do not want to annotate.

```java
@Configuration
public class AppConfig {

    @Bean
    public Clock clock() {
        return Clock.systemUTC();
    }
}
```

Inject it normally:

```java
@Service
class TimeService {
    private final Clock clock;

    TimeService(Clock clock) {
        this.clock = clock;
    }
}
```

## 8.2 Multiple implementations

```java
interface NotificationService {
    void send(String message);
}
```

If both email and SMS implementations are beans, Spring needs help choosing one.

Use:

```java
@Qualifier("emailNotificationService")
```

or mark the preferred bean:

```java
@Primary
```

## 8.3 Bean scopes

| Scope | Meaning |
|---|---|
| singleton | one instance per Spring container; default |
| prototype | new instance when requested |
| request | one instance per HTTP request |
| session | one instance per HTTP session |

A default singleton bean can be used by many threads. Do not store request-specific mutable state in it.

Bad:

```java
@Service
class UserService {
    private String currentUsername;
}
```

## 8.4 Lifecycle

```java
@PostConstruct
void init() {
    // startup initialization for this bean
}

@PreDestroy
void cleanup() {
    // release resources
}
```

Modern imports come from `jakarta.annotation`.

## 8.5 Lazy beans

```java
@Lazy
@Component
class ExpensiveService {}
```

Lazy initialization can reduce startup work but may move failures from startup to first use.

## 8.6 Conditional beans

```java
@Bean
@ConditionalOnProperty(
    name = "feature.email.enabled",
    havingValue = "true"
)
EmailSender emailSender() {
    return new EmailSender();
}
```

Useful for optional integrations and feature-controlled configuration.

---

# 9. Auto-Configuration and Starters

## 9.1 Auto-configuration

Boot conditionally configures infrastructure based on:

- classes on the classpath
- existing beans
- configuration properties
- application type

Auto-configuration is conditional behavior, not magic.

## 9.2 Starters

Common starters include:

```text
spring-boot-starter-web
spring-boot-starter-data-jpa
spring-boot-starter-security
spring-boot-starter-validation
spring-boot-starter-actuator
spring-boot-starter-test
spring-boot-starter-cache
spring-boot-starter-webflux
```

A starter is a curated dependency set that simplifies compatible dependency selection.

## 9.3 Debugging auto-configuration

```properties
debug=true
```

or:

```bash
java -jar app.jar --debug
```

The condition evaluation report explains why configuration matched or did not match.

## 9.4 Excluding configuration

Possible:

```java
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
```

Only do this when you understand why the default configuration is unsuitable.

---

# 10. Externalized Configuration and Profiles

Spring Boot supports properties, YAML, environment variables, command-line arguments, and other configuration sources.

## Properties

```properties
server.port=8081
spring.application.name=order-service
```

## YAML

```yaml
server:
  port: 8081
spring:
  application:
    name: order-service
```

## `@Value`

```properties
app.currency=INR
```

```java
@Value("${app.currency}")
private String currency;
```

Good for a few isolated values.

## `@ConfigurationProperties`

Better for grouped settings:

```yaml
payment:
  gateway:
    base-url: https://payments.example.com
    timeout: 5s
    retry-count: 3
```

```java
@ConfigurationProperties(prefix = "payment.gateway")
public record PaymentGatewayProperties(
    URI baseUrl,
    Duration timeout,
    int retryCount
) {}
```

Benefits:

- type safety
- grouped settings
- easier validation
- cleaner configuration API

## Profiles

Files:

```text
application-dev.properties
application-test.properties
application-prod.properties
```

Activate:

```bash
java -jar app.jar --spring.profiles.active=prod
```

Profile-specific bean:

```java
@Profile("dev")
@Bean
PaymentGateway fakeGateway() {
    return new FakePaymentGateway();
}
```

Use profiles for meaningful environment/scenario differences. Do not hard-code secrets or production URLs in Java source.

---

# 11. Recommended Architecture and Package Structure

Simple layered architecture:

```text
com.example.orders
├── controller
├── service
├── repository
├── entity
├── dto
├── mapper
├── exception
├── config
└── security
```

Request flow:

```text
HTTP Request
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

## Controller should handle

- HTTP input/output
- request binding
- validation trigger
- HTTP status codes
- response DTOs

## Service should handle

- business rules
- orchestration
- transaction boundaries
- workflow decisions

## Repository should handle

- persistence operations
- queries

### Anti-pattern: everything in controller

Do not put SQL, payment calls, email sending, validation logic, and business workflow directly in one controller method.

---

# 12. Spring MVC Request Lifecycle

Simplified flow:

```text
Client
  ↓
Servlet container
  ↓
Filter chain
  ↓
DispatcherServlet
  ↓
HandlerMapping
  ↓
Controller
  ↓
Service
  ↓
HttpMessageConverter
  ↓
JSON response
```

## DispatcherServlet

It acts as Spring MVC's front controller. It coordinates:

- request routing
- parameter binding
- controller invocation
- validation
- response conversion
- exception resolution

Understanding this flow helps debug 404, 400, security, serialization, and controller issues.

---

# 13. REST API Development

## 13.1 Controller

```java
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @GetMapping
    public List<OrderResponse> findAll() {
        return List.of();
    }
}
```

## 13.2 Path variable

Request:

```text
GET /api/orders/100
```

```java
@GetMapping("/{id}")
public OrderResponse findById(@PathVariable Long id) {
    return service.findById(id);
}
```

## 13.3 Query parameter

```text
GET /api/orders?status=PAID
```

```java
@GetMapping
public List<OrderResponse> search(
        @RequestParam(required = false) String status) {
    return service.search(status);
}
```

## 13.4 Request body

```java
@PostMapping
public ResponseEntity<OrderResponse> create(
        @Valid @RequestBody CreateOrderRequest request) {

    OrderResponse created = service.create(request);

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(created);
}
```

## 13.5 PUT vs PATCH

- `PUT` generally represents replacing/updating the complete resource representation.
- `PATCH` represents partial modification.

## 13.6 Common HTTP status codes

| Code | Meaning |
|---|---|
| 200 | successful request |
| 201 | resource created |
| 204 | success with no response body |
| 400 | invalid request |
| 401 | authentication required/failed |
| 403 | authenticated but forbidden |
| 404 | resource not found |
| 409 | conflict |
| 500 | unexpected server failure |
| 503 | temporarily unavailable |

## 13.7 Resource-oriented URLs

Prefer:

```text
GET    /api/orders
GET    /api/orders/42
POST   /api/orders
PUT    /api/orders/42
PATCH  /api/orders/42
DELETE /api/orders/42
```

Avoid unnecessarily action-heavy paths such as `/getAllOrders`.

Domain actions can still be explicit:

```text
POST /api/invoices/123/approve
POST /api/orders/100/cancel
```

## 13.8 Idempotency

Idempotent means repeated execution has the same intended effect.

For retry-sensitive POST operations such as payments, use an idempotency key strategy to avoid duplicate processing.

---

# 14. DTOs and Mapping

Do not blindly expose JPA entities as API contracts.

Entity:

```java
@Entity
class User {
    @Id
    private Long id;
    private String name;
    private String passwordHash;
}
```

Returning it directly risks exposing `passwordHash`.

Response DTO:

```java
public record UserResponse(Long id, String name) {}
```

Request DTO:

```java
public record CreateUserRequest(
    @NotBlank String name,
    @Email String email
) {}
```

Manual mapping:

```java
private UserResponse map(User user) {
    return new UserResponse(user.getId(), user.getName());
}
```

For larger systems, mapping libraries such as MapStruct can reduce boilerplate.

Why DTOs matter:

- stable API contract
- security boundary
- no accidental lazy-loading serialization
- request and response models can differ
- database model can evolve independently

---

# 15. Validation

Use Jakarta Validation annotations:

```java
public record CreateEmployeeRequest(
    @NotBlank String name,
    @Email @NotBlank String email,
    @Positive BigDecimal salary
) {}
```

Controller:

```java
@PostMapping
public EmployeeResponse create(
        @Valid @RequestBody CreateEmployeeRequest request) {
    return service.create(request);
}
```

Common annotations:

```text
@NotNull
@NotBlank
@NotEmpty
@Size
@Min / @Max
@Positive
@Email
@Pattern
@Past / @Future
@DecimalMin / @DecimalMax
```

## Validation vs business rules

Validation:

```text
email format valid
quantity > 0
name not blank
```

Business rule:

```text
invoice cannot be approved twice
credit limit must not be exceeded
order cannot be cancelled after shipment
```

Business rules belong in the service/domain layer.

Custom class-level validators are useful for rules involving multiple request fields, such as `dueDate >= invoiceDate`.

---

# 16. Exception Handling

Avoid swallowing exceptions:

```java
try {
    ...
} catch (Exception e) {
    return null;
}
```

Create domain/application exceptions:

```java
public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(Long id) {
        super("Order not found: " + id);
    }
}
```

Global handling:

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(OrderNotFoundException.class)
    ResponseEntity<ApiError> handle(OrderNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ApiError("ORDER_NOT_FOUND", ex.getMessage()));
    }
}
```

Useful production error structure:

```json
{
  "timestamp": "2026-08-12T12:00:00Z",
  "status": 400,
  "code": "VALIDATION_FAILED",
  "message": "Request validation failed",
  "path": "/api/orders",
  "traceId": "4bd9...",
  "errors": [
    {"field": "quantity", "message": "must be greater than 0"}
  ]
}
```

Never expose stack traces, secrets, SQL credentials, private paths, or tokens to public clients.

---

# 17. Jackson and JSON

Spring MVC commonly uses Jackson to serialize Java objects to JSON and deserialize JSON to Java objects.

```java
public record ProductResponse(
    Long id,
    String name,
    BigDecimal price
) {}
```

Becomes:

```json
{
  "id": 1,
  "name": "Keyboard",
  "price": 2499.00
}
```

Common Jackson annotations:

```text
@JsonProperty
@JsonIgnore
@JsonInclude
@JsonFormat
@JsonCreator
```

Keep transport concerns out of persistence entities when possible. DTOs are often a cleaner API boundary.

---

# 18. Filters, Interceptors, and AOP

These are often confused.

## 18.1 Filter

Servlet-level request processing.

Use cases:

- request IDs
- low-level logging
- request wrapping
- security infrastructure
- headers

Example:

```java
@Component
public class RequestIdFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain)
            throws ServletException, IOException {

        String requestId = UUID.randomUUID().toString();
        response.setHeader("X-Request-Id", requestId);
        chain.doFilter(request, response);
    }
}
```

## 18.2 HandlerInterceptor

Spring MVC handler layer. Useful for logic around controller execution.

Typical callbacks:

```text
preHandle
postHandle
afterCompletion
```

Use cases include controller timing, locale setup, and request audit context.

## 18.3 AOP

AOP wraps method execution and is useful for cross-cutting behavior such as:

- transactions
- security
- metrics
- audit

Do not hide important business rules in aspects. Cross-cutting behavior should remain cross-cutting.


---

# 19. Logging

Use a logging API instead of `System.out.println`.

```java
private static final Logger log =
    LoggerFactory.getLogger(OrderService.class);
```

```java
log.info("Order created orderId={}", orderId);
```

## Levels

```text
TRACE → extremely detailed diagnostics
DEBUG → developer troubleshooting
INFO  → normal application milestones
WARN  → unusual but recoverable situation
ERROR → failure requiring attention
```

## Structured context

Good:

```java
log.info(
    "Invoice approved invoiceId={} approverId={} amount={}",
    invoiceId,
    approverId,
    amount
);
```

Bad:

```java
log.info("Password={}", password);
```

Never log:

- raw passwords
- access/refresh tokens
- API secrets
- card data
- private keys
- unnecessarily sensitive personal information

For distributed systems, propagate correlation/trace IDs so one request can be followed across services.

## Scenario: debugging a failed order

Useful logs might show:

```text
requestId=R1 orderId=200 customerId=9 action=order.create
requestId=R1 orderId=200 dependency=inventory durationMs=80 result=success
requestId=R1 orderId=200 dependency=payment durationMs=510 result=declined
```

This is much easier to investigate than unrelated plain text logs.

---

# 20. Database Setup

Common relational databases used with Spring Boot:

- PostgreSQL
- MySQL
- MariaDB
- SQL Server
- Oracle
- H2 for limited development/testing scenarios

For production-like integration tests, the actual database engine in Testcontainers often provides more confidence than relying only on H2.

## Dependencies

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

PostgreSQL driver example:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/orders
spring.datasource.username=orders_user
spring.datasource.password=${DB_PASSWORD}
```

Do not commit production passwords to Git.

## Connection pool mental model

Applications normally do not open a brand-new database connection for every query. A pool maintains reusable connections.

Monitor:

```text
active connections
idle connections
wait time
connection timeout
query time
```

A larger pool is not automatically faster. The database has limits too.

---

# 21. JPA and Hibernate

## 21.1 JPA vs Hibernate vs Spring Data JPA

```text
Spring Data JPA
      ↓
Jakarta Persistence (JPA API/specification)
      ↓
Hibernate (common implementation)
      ↓
JDBC driver
      ↓
Database
```

## 21.2 Entity

```java
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String orderNumber;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal totalAmount;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;
}
```

## 21.3 Why `BigDecimal` for money?

Avoid floating-point values such as `double` for exact monetary calculations. Use `BigDecimal` with explicit rounding rules.

Example:

```java
BigDecimal tax = amount
    .multiply(new BigDecimal("0.18"))
    .setScale(2, RoundingMode.HALF_UP);
```

## 21.4 Enum mapping

Prefer:

```java
@Enumerated(EnumType.STRING)
private OrderStatus status;
```

Stored values:

```text
NEW
PAID
CANCELLED
```

Ordinal storage like `0`, `1`, `2` is fragile when enum ordering changes.

## 21.5 Entity constructor

JPA entities need an appropriate no-argument constructor for persistence infrastructure. It can often be `protected`.

## 21.6 Equality warning

Be careful implementing `equals()` and `hashCode()` for JPA entities because:

- generated IDs can be null before persistence
- Hibernate may use proxies
- mutable business fields are unsafe equality keys

Choose identity semantics deliberately.

---

# 22. Spring Data JPA Repositories

Basic repository:

```java
public interface OrderRepository
        extends JpaRepository<Order, Long> {
}
```

You get operations such as:

```text
save
findById
findAll
deleteById
existsById
count
```

## 22.1 Derived queries

```java
List<Order> findByStatus(OrderStatus status);
```

```java
Optional<Order> findByOrderNumber(String orderNumber);
```

```java
List<Order> findByStatusAndTotalAmountGreaterThan(
    OrderStatus status,
    BigDecimal amount
);
```

Derived queries are convenient for simple conditions. Do not create unreadable method names for highly complex queries.

## 22.2 JPQL

```java
@Query("""
    select o
    from Order o
    where o.status = :status
      and o.totalAmount >= :minimum
""")
List<Order> findQualified(
    @Param("status") OrderStatus status,
    @Param("minimum") BigDecimal minimum
);
```

JPQL queries entities and mapped attributes rather than raw table names.

## 22.3 Native SQL

```java
@Query(
    value = "select * from orders where status = :status",
    nativeQuery = true
)
List<Order> findNative(String status);
```

Use native SQL when database-specific functionality or query control provides real value. It trades portability for control.

## 22.4 Pagination

```java
Page<Order> findByStatus(
    OrderStatus status,
    Pageable pageable
);
```

A public API may expose its own pagination DTO instead of leaking framework-specific page structure.

## 22.5 Sorting

```java
Sort sort = Sort.by(
    Sort.Order.desc("createdAt"),
    Sort.Order.asc("id")
);
```

Always validate client-controlled sort fields to avoid exposing arbitrary internal fields or expensive sort paths.

---

# 23. Entity Relationships

## 23.1 Many-to-one / one-to-many

```java
@Entity
public class Order {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;
}
```

```java
@Entity
public class Customer {

    @OneToMany(mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();
}
```

The foreign key normally lives on the many side: `orders.customer_id`.

## 23.2 One-to-one

```java
@OneToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "profile_id")
private UserProfile profile;
```

## 23.3 Many-to-many

```java
@ManyToMany
@JoinTable(
    name = "user_role",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
)
private Set<Role> roles = new HashSet<>();
```

If the link itself has data such as:

```text
assignedAt
assignedBy
status
```

model a separate entity:

```text
User → UserRole → Role
```

## 23.4 Cascade

Common cascade operations:

```text
PERSIST
MERGE
REMOVE
ALL
```

Do not put `CascadeType.ALL` everywhere.

Ask:

> Should this operation on the parent really be propagated to the child?

## 23.5 Orphan removal

```java
@OneToMany(
    mappedBy = "order",
    orphanRemoval = true
)
```

Removing a child from the collection can cause its database row to be deleted. Understand lifecycle ownership before enabling it.

## 23.6 Bidirectional helpers

If both sides are mapped, helper methods can maintain object consistency:

```java
public void addLine(OrderLine line) {
    lines.add(line);
    line.setOrder(this);
}
```

This prevents one side of the in-memory relationship from becoming stale.

---

# 24. Fetch Strategies and the N+1 Problem

## 24.1 LAZY

Relationship data is loaded when accessed.

## 24.2 EAGER

Relationship data is requested eagerly.

Making everything EAGER is not a performance solution.

## 24.3 N+1 example

Suppose one query loads 100 orders:

```sql
SELECT * FROM orders;
```

Then accessing each order's customer triggers another query:

```text
1 initial query
+ 100 customer queries
= 101 queries
```

That is an N+1 pattern.

## 24.4 Common solutions

Depending on the use case:

- fetch join
- entity graph
- DTO projection
- interface projection
- explicit query
- batch fetching
- redesign the read model

Fetch join example:

```java
@Query("""
    select o
    from Order o
    join fetch o.customer
    where o.id = :id
""")
Optional<Order> findDetailedById(Long id);
```

## 24.5 Projection

If a listing screen only needs:

```text
orderId
customerName
total
```

avoid loading a huge entity graph unnecessarily.

```java
public interface OrderSummary {
    Long getId();
    String getCustomerName();
    BigDecimal getTotalAmount();
}
```

The correct query should follow the use case, not the shape of your entity graph.

---

# 25. Transactions

Transactions are essential for consistent business operations.

## Scenario

Creating an order requires:

1. create order
2. create order lines
3. reserve inventory

If a database operation in the unit fails, earlier database changes may need rollback.

```java
@Transactional
public OrderResponse createOrder(CreateOrderRequest request) {
    // business work
}
```

## 25.1 ACID reminder

```text
Atomicity
Consistency
Isolation
Durability
```

## 25.2 Recommended boundary

Service methods are common transaction boundaries:

```java
@Service
class OrderService {

    @Transactional
    public void placeOrder(...) {
        ...
    }
}
```

## 25.3 Read-only transaction

```java
@Transactional(readOnly = true)
public OrderResponse find(Long id) {
    ...
}
```

This expresses intent and can enable persistence optimizations.

## 25.4 Rollback behavior

Runtime exceptions generally trigger rollback by default. Checked exception behavior may need explicit configuration depending on your intended semantics.

## 25.5 Proxy/self-invocation trap

```java
public void outer() {
    inner();
}

@Transactional
public void inner() {
}
```

With common proxy-based transaction handling, a direct call from one method to another on the same object may bypass the proxy interception expected for `inner()`.

Mental model:

```text
external caller
   ↓
Spring proxy
   ↓ transaction starts
real service method
   ↓
commit/rollback
```

A self-call may never cross the proxy boundary.

## 25.6 Keep transactions short

Avoid:

```text
start DB transaction
call remote payment service for 8 seconds
send email
upload file
commit
```

Long transactions hold database resources, increase contention, and complicate failure handling.

---

# 26. Advanced Persistence and Locking

## 26.1 Optimistic locking

Useful when concurrent conflicts are possible but not constant.

```java
@Version
private Long version;
```

Scenario:

```text
User A reads invoice version 5
User B reads invoice version 5
User B saves → version 6
User A attempts to save version 5 → conflict detected
```

This prevents silent lost updates.

## 26.2 Pessimistic locking

The database locks selected records more strongly.

Useful in specific contention-sensitive operations, but costs include:

- waiting
- reduced concurrency
- deadlock risk

Use intentionally.

## 26.3 Dynamic filtering with Specifications

Search request:

```text
status?
customer?
fromDate?
toDate?
minimumAmount?
```

Instead of creating dozens of repository methods, Spring Data specifications can build predicates dynamically.

## 26.4 Auditing

Typical fields:

```text
createdAt
createdBy
updatedAt
updatedBy
```

Spring Data auditing can populate these automatically when configured.

## 26.5 Soft delete

Instead of physically deleting:

```text
deleted=true
deletedAt=...
```

Benefits:

- auditability
- possible restoration

Costs:

- every query must treat deletion correctly
- unique constraints can become harder
- tables continue growing

Use when the domain requires it, not automatically.

## 26.6 Database constraints still matter

Application validation alone cannot protect data from every race or other writer.

Use database constraints for invariants such as:

```text
primary keys
foreign keys
unique constraints
not-null constraints
check constraints where appropriate
```

---

# 27. Database Migrations

Do not use Hibernate schema generation as your main production migration strategy.

Use version-controlled tools such as Flyway or Liquibase.

## Flyway example

```text
src/main/resources/db/migration/
├── V1__create_customer.sql
├── V2__create_order.sql
└── V3__add_order_status.sql
```

```sql
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    order_number VARCHAR(50) NOT NULL UNIQUE,
    total_amount NUMERIC(15,2) NOT NULL
);
```

Migrations answer:

```text
What schema version is production using?
What changed in this release?
Can a new environment build the schema from zero?
Can deployment migrate safely?
```

For large tables, learn zero/minimal-downtime migration techniques such as expand-and-contract changes.

---

# 28. JDBC and Alternatives to JPA

JPA is useful, but not mandatory.

Choose direct SQL/JDBC-style access when:

- query is highly complex
- reporting dominates
- database-specific functionality matters
- bulk operations dominate
- ORM introduces more complexity than value

A project can combine approaches:

```text
transactional CRUD → JPA
complex reporting  → JDBC/SQL
```

Spring's JDBC abstractions reduce repetitive connection/resource handling.

The best Spring developer also understands SQL, execution plans, indexes, and transaction semantics.

---

# 29. Caching

Caching stores a faster copy of data or computation results.

Enable support:

```java
@EnableCaching
@Configuration
class CacheConfig {}
```

Cache method:

```java
@Cacheable("products")
public Product findProduct(Long id) {
    return repository.findById(id).orElseThrow();
}
```

Evict:

```java
@CacheEvict(value = "products", key = "#id")
public void deleteProduct(Long id) {
    repository.deleteById(id);
}
```

Update:

```java
@CachePut(value = "products", key = "#result.id")
public Product update(Product product) {
    return repository.save(product);
}
```

Possible providers:

- local/in-memory cache
- Caffeine
- Redis
- managed/distributed caches

Every cache requires decisions about:

```text
cache key
TTL/expiration
eviction
consistency
update behavior
failure behavior
stampede prevention
```

`@Cacheable` is syntax; cache consistency is the design problem.

---

# 30. Spring Security

Security answers two separate questions.

## Authentication

> Who are you?

Examples:

- username/password
- session
- bearer token
- OAuth login
- client certificate

## Authorization

> What are you allowed to do?

Examples:

```text
USER    → read own profile
MANAGER → approve invoice
ADMIN   → manage users
```

## 30.1 Modern configuration shape

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http.authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
        );

        return http.build();
    }
}
```

## 30.2 Password storage

Never store plaintext passwords.

```java
@Bean
PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

Concept:

```text
password
  ↓
adaptive one-way password hash
  ↓
database
```

You normally should not design password storage around decrypting passwords later.

## 30.3 Security filter chain

Simplified:

```text
HTTP Request
  ↓
Security filters
  ↓
authentication
  ↓
authorization
  ↓
controller
```

Many Spring Security problems become easier once you understand that security happens before controller logic.

---

# 31. JWT Authentication

JWT is a compact token format often used with stateless APIs.

Typical flow:

```text
1. User authenticates
2. Authorization system issues token
3. Client stores token appropriately
4. Client sends Authorization: Bearer <token>
5. Resource server validates token
6. Security context is established
7. Authorization rules are evaluated
```

JWT structure:

```text
header.payload.signature
```

Example claims:

```json
{
  "sub": "user-123",
  "scope": "orders.read orders.write",
  "iss": "https://auth.example.com",
  "exp": 1786500000
}
```

## Important

A signed JWT is not automatically encrypted. Do not put secrets in the payload merely because the token is signed.

## Resource server approach

Prefer Spring Security's standards-based resource server support rather than creating a large custom JWT filter when standard behavior is enough.

Conceptual configuration:

```java
http
    .authorizeHttpRequests(auth -> auth
        .requestMatchers("/public/**").permitAll()
        .anyRequest().authenticated()
    )
    .oauth2ResourceServer(oauth2 ->
        oauth2.jwt(Customizer.withDefaults())
    );
```

Typical issuer configuration:

```properties
spring.security.oauth2.resourceserver.jwt.issuer-uri=https://auth.example.com
```

Exact settings depend on the identity provider.

Validate appropriate token properties such as signature, issuer, expiration, and audience according to your security design.

---

# 32. OAuth 2.0 and OpenID Connect

OAuth is primarily about delegated authorization. OpenID Connect adds identity/authentication semantics on top.

Common roles:

```text
Resource Owner
Client
Authorization Server
Resource Server
```

Spring Security supports OAuth-related roles including:

- OAuth2 Client
- OAuth2 Resource Server
- Authorization Server integrations

## Scenario: company SSO

```text
Browser
  ↓
Spring Boot application
  ↓ redirect
Identity Provider
  ↓
User signs in
  ↓
authorization response
  ↓
application receives authenticated identity
```

Common identity providers include enterprise SSO systems, Keycloak, Microsoft Entra ID, Okta, and Auth0.

## Authorization Code flow

Common for interactive browser login.

## Client Credentials flow

Common for service-to-service calls where no end-user identity is involved.

Security standards and provider behavior evolve. Always verify exact configuration against current official provider and Spring Security documentation.

---

# 33. CORS, CSRF, Sessions, and Security Headers

## 33.1 CORS

Browser scenario:

```text
Frontend: https://app.example.com
API:      https://api.example.com
```

The browser applies cross-origin rules. Configure allowed origins, methods, and headers intentionally.

Avoid unrestricted origins together with credentials unless you fully understand the security implications.

## 33.2 CSRF

CSRF is especially relevant when browsers automatically attach authentication credentials such as cookies.

Do not disable CSRF merely because a tutorial tells you to. First understand:

```text
How is the user authenticated?
Does the browser attach the credential automatically?
Is this a browser session application or bearer-token API?
```

## 33.3 Stateful session authentication

```text
login
 ↓
server security context/session
 ↓
browser session cookie
 ↓
subsequent authenticated requests
```

## 33.4 Stateless bearer-token API

```text
request
 ↓
Authorization: Bearer ...
 ↓
validate token each request
```

Both models can be valid.

## 33.5 Security headers

Examples:

```text
Content-Security-Policy
X-Content-Type-Options
Strict-Transport-Security
Referrer-Policy
```

Headers are one layer of security, not a substitute for secure authentication, authorization, input handling, TLS, and dependency management.

---

# 34. Method-Level Authorization

Enable:

```java
@EnableMethodSecurity
@Configuration
class MethodSecurityConfig {}
```

Role check:

```java
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) {
}
```

Permission/authority check:

```java
@PreAuthorize("hasAuthority('invoice:approve')")
public void approveInvoice(Long id) {
}
```

Request-level authorization protects URLs. Method security can protect business operations even when invoked from another code path.

---

# 35. External API Calls

Modern Spring applications commonly use synchronous clients such as `RestClient` and reactive `WebClient` for non-blocking scenarios.

Conceptual `RestClient` example:

```java
@Service
public class CurrencyClient {

    private final RestClient client;

    public CurrencyClient(RestClient.Builder builder) {
        this.client = builder
            .baseUrl("https://api.example.com")
            .build();
    }

    public CurrencyRate getRate(String currency) {
        return client.get()
            .uri("/rates/{currency}", currency)
            .retrieve()
            .body(CurrencyRate.class);
    }
}
```

For every remote dependency decide:

```text
connection timeout
response/read timeout
authentication
retry policy
rate-limit handling
idempotency
error mapping
circuit breaking
metrics/tracing
fallback behavior
```

Never let a remote dependency wait forever.

---

# 36. Resilience: Timeout, Retry, Circuit Breaker

Distributed systems fail in normal ways:

```text
DNS failure
connection refused
timeout
HTTP 429
HTTP 503
slow response
partial outage
network partition
```

## Timeout

A remote call needs a bounded wait time.

## Retry

Retry only failures likely to be transient and only when the operation is safe.

Do not blindly retry:

```text
400 validation error
incorrect credentials
business rejection
unsafe non-idempotent operation
```

Good retry design includes:

- maximum attempts
- backoff
- jitter where useful
- total time budget
- idempotency consideration

## Circuit breaker

Mental model:

```text
CLOSED → requests flow
  ↓ failures exceed threshold
OPEN → fail fast
  ↓ after wait period
HALF_OPEN → limited test calls
  ↓ healthy
CLOSED
```

Libraries such as Resilience4j are commonly used with Spring applications.

## Bulkhead

Isolate resource usage so one failing dependency cannot consume every thread/connection.

---

# 37. Application Events

Event:

```java
public record OrderCreatedEvent(Long orderId) {}
```

Publish:

```java
publisher.publishEvent(
    new OrderCreatedEvent(order.getId())
);
```

Listen:

```java
@EventListener
public void handle(OrderCreatedEvent event) {
    // react
}
```

Useful in-process decoupling:

```text
OrderService
  ↓ OrderCreatedEvent
  ├─ audit listener
  ├─ notification listener
  └─ analytics listener
```

Important: a normal Spring application event is an in-process mechanism. It is not automatically durable across a process crash.

For guaranteed cross-service/event delivery, use durable messaging and patterns such as outbox.

## Transactional event listener

`@TransactionalEventListener` can bind event handling to a transaction phase. Understand the selected phase and failure semantics before using it.

---

# 38. Async Processing

Enable:

```java
@EnableAsync
@Configuration
class AsyncConfig {}
```

Method:

```java
@Async
public void generateReport(Long reportId) {
    // expensive work
}
```

## Scenario

Instead of keeping an HTTP request open for a 2-minute report:

```text
POST /reports
   ↓
create job row
   ↓
return 202 + job ID
   ↓
background processing
   ↓
GET /reports/{id}/status
```

## Important limitations

`@Async` does not automatically make work durable. A process crash can lose in-memory work.

For critical jobs, prefer durable queues/job infrastructure.

Configure executors deliberately:

- core/max threads
- queue capacity
- rejection policy
- metrics

Also remember that proxy/self-invocation considerations can apply to async annotations.


---

# 39. Scheduling

Enable scheduling:

```java
@EnableScheduling
@Configuration
class SchedulingConfig {}
```

Fixed delay:

```java
@Scheduled(fixedDelay = 60_000)
public void pollPendingItems() {
}
```

Cron:

```java
@Scheduled(cron = "0 0 2 * * *")
public void nightlyCleanup() {
}
```

Prefer configuration over hard-coded schedules:

```java
@Scheduled(cron = "${jobs.cleanup.cron}")
```

## Multi-instance problem

If five application instances run the same scheduler:

```text
instance A → job
instance B → job
instance C → job
instance D → job
instance E → job
```

You may accidentally run the job five times.

Possible solutions:

- distributed locking
- leader-only execution
- dedicated scheduler service
- Kubernetes CronJob/external scheduler
- job platform

Choose based on required reliability.

## Time zones

Cron jobs can become confusing around time zones and daylight-saving changes. Define the business timezone explicitly where needed and store timestamps consistently, commonly in UTC.

---

# 40. File Upload and Download

Upload example:

```java
@PostMapping("/files")
public ResponseEntity<Void> upload(
        @RequestParam MultipartFile file) {

    if (file.isEmpty()) {
        throw new IllegalArgumentException("File is empty");
    }

    storageService.store(file);
    return ResponseEntity.noContent().build();
}
```

Important controls:

- maximum file size
- maximum request size
- content/type validation
- filename sanitization
- authorization
- malware scanning where required
- safe storage path
- encryption/retention
- streaming large files
- path traversal prevention

Do not trust:

```java
file.getOriginalFilename()
```

as a safe server filesystem path.

## Download

For large files, prefer streaming rather than loading the entire file into heap memory.

Define appropriate headers:

```text
Content-Type
Content-Length
Content-Disposition
```

and authorize access to the file resource.

---

# 41. Email

Spring applications often integrate SMTP or an email provider.

For a simple low-volume notification, synchronous mail may work. For critical or high-volume delivery, a better architecture is often:

```text
business transaction
   ↓
persist notification request/event
   ↓
queue/background worker
   ↓
mail provider
```

Why?

- mail systems can be slow
- provider can be unavailable
- retries should not roll back unrelated business data
- delivery status can be tracked independently

Store templates separately from service logic when emails become complex.

---

# 42. Kafka and RabbitMQ

Messaging helps decouple producers and consumers.

Example invoice flow:

```text
Invoice API
   ↓
invoice.uploaded event
   ↓
OCR worker
   ↓
validation/workflow
```

## 42.1 Kafka concepts

Learn:

```text
topic
partition
producer
consumer
consumer group
offset
key
retention
replication
consumer lag
```

### Partition key

Choosing a key can preserve order for related events within a partition.

Example:

```text
key = orderId
```

All events for one order can be routed consistently.

## 42.2 RabbitMQ concepts

Learn:

```text
producer
exchange
queue
binding
routing key
consumer
acknowledgement
dead-letter exchange
```

## 42.3 Delivery and idempotency

Assume consumers may see duplicates unless the entire system guarantees otherwise.

Design handler logic such as:

```text
if eventId already processed:
    return previous/safe result
else:
    process and record eventId
```

## 42.4 Dead-letter handling

A message that continually fails should not necessarily block an entire queue forever.

Use a dead-letter strategy with:

- failure reason
- retry count
- visibility/alerting
- replay procedure

## 42.5 Outbox pattern

Problem:

```text
DB order commit succeeds
Kafka publish fails
```

Now data exists but event is missing.

Outbox solution:

```text
one DB transaction:
  save order
  save outbox event

later publisher:
  reads unsent outbox rows
  publishes event
  marks sent
```

This is a common reliable event-publication pattern.

---

# 43. WebSocket and Server-Sent Events

## WebSocket

Persistent two-way communication.

Use cases:

- chat
- collaboration
- live dashboards with client interaction
- game/control channels

## Server-Sent Events (SSE)

Server-to-client stream over HTTP.

Use cases:

- report progress
- notifications
- live status feed
- streaming events to a browser

If the client only needs server → client updates, SSE may be simpler than WebSocket.

Always consider reconnect behavior, authentication expiry, scaling, and backpressure/message frequency.

---

# 44. Spring WebFlux and Reactive Programming

Spring WebFlux is Spring's reactive web stack.

Core Reactor types:

```text
Mono<T> = zero or one asynchronous value
Flux<T> = zero or many asynchronous values
```

Example:

```java
@GetMapping("/products/{id}")
public Mono<ProductResponse> find(@PathVariable Long id) {
    return service.find(id);
}
```

## When reactive can help

- many concurrent I/O-bound requests
- streaming
- reactive data stores
- long-lived connections
- end-to-end non-blocking architecture

## When it may not help

If the implementation performs blocking work such as classic JDBC directly on reactive event-loop threads, the design can lose much of its benefit and even become harmful.

Do not use WebFlux merely because it appears more advanced.

For many enterprise CRUD applications, Spring MVC is simpler and excellent.

## Reactive mental model

Traditional blocking:

```text
thread waits for I/O
```

Reactive:

```text
initiate I/O
thread can do other work
resume pipeline when data arrives
```

Reactive programming changes error handling, debugging, context propagation, and mental models. Learn it after mastering standard MVC unless your project needs it immediately.

---

# 45. Spring Batch

Spring Batch is designed for robust batch workloads.

Examples:

- import millions of records
- reconcile financial data
- generate nightly statements
- transform files
- perform migrations

Core concepts:

```text
Job
Step
ItemReader
ItemProcessor
ItemWriter
JobRepository
Chunk
```

Pipeline:

```text
CSV / DB
  ↓ ItemReader
validate/transform
  ↓ ItemProcessor
DB / file / API
  ↓ ItemWriter
```

Batch systems should consider:

- restartability
- checkpoints
- chunk size
- skip policy
- retry policy
- job parameters
- metadata
- parallelism
- monitoring

Do not implement a large, restart-sensitive batch process as one giant `@Scheduled` loop if Spring Batch fits the problem better.

---

# 46. Testing Strategy

Use multiple testing levels.

```text
          End-to-end
        /            \
     Integration tests
    /                 \
          Unit tests
```

## Unit tests

Test one class with dependencies replaced by mocks/fakes.

Advantages:

- fast
- deterministic
- easy business-rule coverage

## Integration tests

Test actual integration among components such as:

- Spring context
- database
- HTTP layer
- security configuration
- serialization
- messaging infrastructure

## End-to-end tests

Test complete critical journeys.

They provide confidence but are slower and more expensive to maintain.

## What to test

Do not test only the happy path.

Also test:

```text
invalid request
duplicate request
not found
authorization failure
concurrent update
database constraint failure
external timeout
partial dependency failure
retry behavior
```

---

# 47. JUnit and Mockito

Service:

```java
@Service
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order find(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new OrderNotFoundException(id));
    }
}
```

Unit test:

```java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    OrderRepository repository;

    @InjectMocks
    OrderService service;

    @Test
    void shouldReturnOrderWhenItExists() {
        Order order = new Order();

        when(repository.findById(1L))
            .thenReturn(Optional.of(order));

        Order result = service.find(1L);

        assertSame(order, result);
    }
}
```

Failure test:

```java
@Test
void shouldThrowWhenOrderDoesNotExist() {
    when(repository.findById(99L))
        .thenReturn(Optional.empty());

    assertThrows(
        OrderNotFoundException.class,
        () -> service.find(99L)
    );
}
```

## Avoid over-mocking

A test that verifies every internal call becomes tightly coupled to implementation details.

Prefer testing observable behavior and meaningful collaborations.

---

# 48. Spring Boot Test Slices

Test slices load a focused portion of the application.

Common concepts:

```text
@WebMvcTest
@DataJpaTest
@JsonTest
```

## MVC slice

```java
@WebMvcTest(OrderController.class)
class OrderControllerTest {
}
```

Use to test:

- routes
- request binding
- validation
- HTTP response
- exception handling

## Data JPA slice

```java
@DataJpaTest
class OrderRepositoryTest {
}
```

Use to test repository mapping/query behavior.

Slices are generally lighter than loading the entire application context.

---

# 49. Integration Testing and Testcontainers

Full application context:

```java
@SpringBootTest
class OrderApplicationIntegrationTest {
}
```

## Testcontainers

Testcontainers can launch real dependency containers for tests:

```text
PostgreSQL
MySQL
Redis
Kafka
RabbitMQ
```

Why this matters:

An H2 test might pass while PostgreSQL fails because of differences in:

- SQL syntax
- data types
- functions
- constraints
- locking
- indexes

Production-like infrastructure gives more realistic confidence.

## Test data strategy

Keep integration tests isolated. A test should not depend on another test leaving database state behind.

Use transactions, cleanup, fixtures, or container lifecycle appropriately.

---

# 50. API Documentation with OpenAPI

OpenAPI describes HTTP APIs, including:

- endpoints
- operations
- request bodies
- parameters
- responses
- schemas
- authentication requirements

Conceptual fragment:

```yaml
paths:
  /api/orders/{id}:
    get:
      responses:
        '200':
          description: Order found
        '404':
          description: Order not found
```

Spring ecosystem libraries can generate OpenAPI documentation from controllers and annotations.

API documentation is part of the contract, not an afterthought.

Document:

- status codes
- validation errors
- pagination
- security scheme
- examples
- date/time formats
- breaking-change policy

---

# 51. Actuator

Add the Actuator starter to expose production-management capabilities.

Common concepts/endpoints include:

```text
health
info
metrics
loggers
env
beans
mappings
threaddump
heapdump
prometheus
```

Example exposure:

```properties
management.endpoints.web.exposure.include=health,info,metrics,prometheus
```

Do not expose all management endpoints to the public internet.

## Health

Health answers whether the application can perform expected work.

In orchestration environments distinguish:

```text
liveness  → should this process be restarted?
readiness → should this instance receive traffic?
```

A temporary downstream outage may mean not-ready without necessarily meaning the JVM needs to be restarted.

---

# 52. Observability

Three core pillars:

```text
Logs
Metrics
Traces
```

Modern Spring Boot integrates metrics/tracing through the Micrometer observation ecosystem.

## Logs

Detailed events:

```text
Payment declined orderId=123
```

## Metrics

Numbers over time:

```text
requests/sec
error rate
p95 latency
JVM heap
GC pause
DB pool utilization
queue depth
consumer lag
```

## Traces

Follow one request across services:

```text
Gateway
  ↓ traceId X
Order Service
  ↓ traceId X
Payment Service
  ↓ traceId X
Database
```

## Useful operational signals

Watch:

```text
latency
traffic
errors
saturation
```

Add business metrics too:

```text
orders_created_total
payments_declined_total
invoice_approval_duration
```

Technical health is not the same as business health.

---

# 53. Configuration and Secrets in Production

Do not commit:

```properties
db.password=admin123
jwt.private-key=...
cloud.secret-key=...
```

Use suitable secret delivery:

- environment injection
- Kubernetes Secrets
- cloud secret managers
- Vault-like systems
- managed identities when supported

Categorize configuration:

```text
safe defaults       → source control
runtime environment → deployment config
secrets             → secret store
feature flags       → controlled feature configuration
```

Validate critical configuration at startup so the application fails clearly instead of starting in a broken state.

Never print all environment variables during debugging in production; they may contain credentials.

---

# 54. Docker

Basic multi-stage example:

```dockerfile
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Production considerations:

- run as non-root where practical
- use trusted maintained base images
- scan images/dependencies
- do not bake secrets into image layers
- log to stdout/stderr in container environments
- understand JVM memory inside containers
- configure health/readiness
- use resource limits intentionally

## Docker Compose

Very useful for local development:

```text
Spring Boot app
PostgreSQL
Redis
Kafka
```

A checked-in Compose file can make a developer environment reproducible.

---

# 55. Cloud Native Buildpacks

Spring Boot can create OCI images through buildpack integration without requiring a custom Dockerfile for many projects.

Typical Maven command:

```bash
./mvnw spring-boot:build-image
```

Potential benefits:

- repeatable image creation
- sensible application/JVM layering
- less Dockerfile maintenance

Use buildpacks or explicit Dockerfiles according to operational and security requirements.

---

# 56. Kubernetes

A Spring Boot developer should understand:

```text
Pod
Deployment
Service
ConfigMap
Secret
Ingress/Gateway
readiness probe
liveness probe
resource requests/limits
horizontal scaling
rolling updates
```

## Readiness

If readiness fails:

```text
stop routing new traffic to this instance
```

## Liveness

If liveness persistently fails:

```text
restart may be appropriate
```

Do not make liveness depend on every external dependency. A database outage should not automatically cause every application pod to restart repeatedly.

## Graceful shutdown

During deployment:

```text
mark instance not ready
stop receiving new requests
finish in-flight work within limit
close resources
terminate
```

This avoids unnecessary request failures during rolling deployments.

---

# 57. Microservices

Microservices are not simply "many Spring Boot repositories."

A microservice architecture usually consists of independently deployable services aligned to business capabilities.

Example:

```text
Order Service
Payment Service
Inventory Service
Shipping Service
Notification Service
```

## Potential benefits

- independent deployment
- team autonomy
- independent scaling
- fault isolation

## Costs

- network failure
- distributed transactions
- eventual consistency
- duplicate events
- observability complexity
- deployment complexity
- contract/version management
- more difficult testing
- more operational infrastructure

A well-designed modular monolith is often the better starting point until there is a real need for distribution.

## Database ownership

A common microservice principle is that a service owns its data model. Avoid making every service directly query the same shared schema, which tightly couples deployments.

## Distributed transaction reality

You usually cannot rely on one normal ACID transaction across independent service databases.

Learn:

- saga
- outbox
- idempotency
- compensation
- eventual consistency

---

# 58. Spring Cloud Concepts

Spring Cloud addresses distributed-system patterns.

Concepts worth understanding:

```text
central configuration
service discovery
API gateway
client-side/load balancing patterns
circuit breaker integration
distributed tracing
stream/event integration
```

Spring Cloud components and compatibility evolve. Verify that the Spring Cloud release train supports your Spring Boot version.

## API gateway responsibilities

Possible:

- routing
- edge authentication integration
- rate limiting
- request/response transformation
- common headers

Avoid putting core business logic in the gateway.

## Service discovery

In dynamic environments, service instances can change. Discovery or platform-native service naming helps clients locate them.

In Kubernetes, platform DNS/service mechanisms may already solve much of this problem.

---

# 59. Modular Monoliths and Spring Modulith

A modular monolith has one deployment unit but strong internal module boundaries.

Example:

```text
application
├── order
├── payment
├── inventory
└── notification
```

Each module should expose a controlled API and keep internals private where possible.

Benefits:

- simpler deployment than microservices
- clearer boundaries than a package-by-layer "big ball of mud"
- easier testing
- future extraction is possible if genuinely needed

Spring Modulith provides support for modeling, verifying, documenting, testing, and event-driven interaction among application modules.

## Package by feature

Instead of:

```text
controller/
service/
repository/
```

for the whole application, a larger project can use:

```text
order/
  OrderController
  OrderService
  OrderRepository
  Order
payment/
  PaymentController
  PaymentService
  PaymentRepository
  Payment
```

This keeps related business code together.

---

# 60. Clean Architecture, Hexagonal Architecture, and DDD

## 60.1 Layered architecture

```text
Controller
   ↓
Service
   ↓
Repository
```

Excellent for many applications.

## 60.2 Hexagonal architecture

Core idea:

> Business logic should not be tightly coupled to external infrastructure.

Example:

```text
REST Controller
      ↓
Application Service
      ↓
Domain
      ↓
PaymentPort interface
      ↓
StripePaymentAdapter
```

Port:

```java
public interface PaymentPort {
    PaymentResult charge(PaymentRequest request);
}
```

Adapter:

```java
@Component
public class StripePaymentAdapter implements PaymentPort {
    // provider-specific code
}
```

The domain/application layer depends on an abstraction, not the provider SDK.

## 60.3 Domain-Driven Design concepts

Learn when the business domain is complex:

```text
Entity
Value Object
Aggregate
Aggregate Root
Repository
Domain Service
Domain Event
Bounded Context
Ubiquitous Language
```

### Entity

Has identity across time.

Example:

```text
Order #123
```

### Value Object

Defined by value rather than identity.

Examples:

```text
Money(amount, currency)
EmailAddress(value)
DateRange(from, to)
```

Good value objects are often immutable and validate themselves.

### Aggregate

A consistency boundary containing related domain objects.

Changes should normally enter through the aggregate root so invariants remain valid.

### Bounded Context

A domain term can mean different things in different contexts.

Example `Customer`:

```text
Sales context     → prospect/account details
Billing context   → payer/tax details
Support context   → support relationship
```

Do not force a single giant entity to satisfy every context.

## 60.4 Do not over-engineer

Simple CRUD does not need twenty architecture layers. Add structure to manage real complexity, not to impress diagrams.


---

# 61. Performance Optimization

Do not optimize from guesswork. Measure first.

Common bottlenecks:

```text
slow SQL
missing/wrong indexes
N+1 queries
large result sets
connection-pool saturation
slow external APIs
thread-pool exhaustion
serialization cost
memory pressure
GC pressure
unbounded queues
large caches
lock contention
```

## 61.1 Database first

For many business systems, database access dominates latency.

Check:

- actual SQL
- execution plan
- row counts
- indexes
- query frequency
- lock waits
- connection wait time

Avoid:

```java
repository.findAll();
```

for millions of rows.

Use pagination, keyset pagination, streaming, or purpose-built batch/query techniques.

## 61.2 Indexes

For a query like:

```sql
WHERE customer_id = ?
  AND status = ?
ORDER BY created_at DESC
```

an appropriate composite index may help, but always confirm using real execution plans and workload.

Too many indexes also hurt writes and consume storage.

## 61.3 External calls

Record latency per downstream dependency.

A request taking 5 seconds may actually be:

```text
controller        2 ms
business logic    4 ms
DB               30 ms
payment API    4900 ms
serialization    10 ms
```

Optimize the real bottleneck.

## 61.4 JVM basics

Understand at least:

- heap
- garbage collection
- thread stacks
- metaspace
- allocation pressure
- heap dump
- thread dump

Do not randomly increase heap without understanding why memory usage is high.

## 61.5 Load testing

Test realistic:

```text
request rate
payload size
database size
concurrency
dependency latency
cache hit ratio
```

Watch p50, p95, and p99 latency rather than only average response time.

---

# 62. Concurrency and Thread Safety

Spring MVC handles many requests concurrently.

Default singleton service beans can therefore be called by multiple threads.

Bad mutable state:

```java
@Service
public class CounterService {
    private int count = 0;

    public int next() {
        return ++count;
    }
}
```

This increment is not safely coordinated among concurrent requests.

Prefer stateless services.

## Database race example

Unsafe pattern:

```text
Request A reads stock = 1
Request B reads stock = 1
A sells one
B sells one
```

Now two units were sold from stock 1.

Possible strategies:

- atomic database update
- optimistic locking
- pessimistic locking
- serialized processing
- domain-specific reservation model

## Thread pools

Know that different features may have different executors:

```text
HTTP request threads
@Async executor
scheduler threads
messaging consumer threads
reactive event loops
```

Unbounded queues and excessive thread counts can turn overload into memory exhaustion rather than useful throughput.

---

# 63. AOT and Native Images

Ahead-of-Time processing prepares more application metadata during build time.

GraalVM native images can compile supported Spring applications into native executables.

Potential benefits:

- fast startup
- lower memory in some workloads
- attractive for serverless or scale-to-zero patterns

Trade-offs:

- longer/more complex builds
- reflection/resource constraints
- library compatibility considerations
- different profiling/tuning characteristics

Measure your actual workload before deciding that native is better than the JVM.

---

# 64. Common Annotations Cheat Sheet

## Core

| Annotation | Purpose |
|---|---|
| `@Component` | Generic Spring-managed component |
| `@Service` | Business/application service |
| `@Repository` | Persistence component |
| `@Configuration` | Java configuration class |
| `@Bean` | Register a bean explicitly |
| `@Autowired` | Dependency injection marker |
| `@Qualifier` | Select a specific bean |
| `@Primary` | Preferred bean among candidates |
| `@Value` | Inject configuration value |
| `@Profile` | Activate bean for profile |
| `@Lazy` | Lazy initialization |

## Spring Boot

| Annotation | Purpose |
|---|---|
| `@SpringBootApplication` | Main Boot application configuration |
| `@ConfigurationProperties` | Type-safe configuration binding |

## Web

| Annotation | Purpose |
|---|---|
| `@Controller` | MVC controller |
| `@RestController` | REST controller |
| `@RequestMapping` | General/base route mapping |
| `@GetMapping` | HTTP GET |
| `@PostMapping` | HTTP POST |
| `@PutMapping` | HTTP PUT |
| `@PatchMapping` | HTTP PATCH |
| `@DeleteMapping` | HTTP DELETE |
| `@RequestBody` | Bind HTTP body |
| `@PathVariable` | Bind path segment |
| `@RequestParam` | Bind query/form parameter |
| `@RequestHeader` | Bind request header |
| `@CookieValue` | Bind cookie |
| `@RestControllerAdvice` | Global REST advice |
| `@ExceptionHandler` | Map exception to handler |

## Validation

| Annotation | Purpose |
|---|---|
| `@Valid` | Trigger cascading/request validation |
| `@Validated` | Spring validation/groups support |
| `@NotNull` | Must not be null |
| `@NotBlank` | Non-null string with non-whitespace content |
| `@NotEmpty` | Non-empty string/collection/etc. |
| `@Size` | Size constraint |
| `@Email` | Email-format constraint |
| `@Positive` | Positive number |
| `@Pattern` | Regex constraint |

## Persistence

| Annotation | Purpose |
|---|---|
| `@Entity` | Persistence entity |
| `@Table` | Table mapping |
| `@Id` | Primary key |
| `@GeneratedValue` | ID generation |
| `@Column` | Column mapping |
| `@OneToOne` | One-to-one relation |
| `@OneToMany` | One-to-many relation |
| `@ManyToOne` | Many-to-one relation |
| `@ManyToMany` | Many-to-many relation |
| `@JoinColumn` | Foreign-key mapping |
| `@Enumerated` | Enum mapping |
| `@Version` | Optimistic locking |
| `@Transactional` | Transaction boundary |

## Security

| Annotation | Purpose |
|---|---|
| `@EnableWebSecurity` | Web security configuration |
| `@EnableMethodSecurity` | Method authorization |
| `@PreAuthorize` | Authorize before method |
| `@PostAuthorize` | Authorize after method |

## Background / events / cache

| Annotation | Purpose |
|---|---|
| `@EnableAsync` | Enable async support |
| `@Async` | Execute using async infrastructure |
| `@EnableScheduling` | Enable scheduled tasks |
| `@Scheduled` | Schedule method |
| `@EventListener` | Listen for application event |
| `@TransactionalEventListener` | Transaction-phase event listener |
| `@EnableCaching` | Enable cache abstraction |
| `@Cacheable` | Cache method result |
| `@CachePut` | Update cache |
| `@CacheEvict` | Remove cache entry |

---

# 65. Common Design Patterns in Spring Boot

## 65.1 Dependency Injection

Central Spring pattern: dependencies are supplied rather than constructed internally.

## 65.2 Repository Pattern

```text
business logic
   ↓
repository abstraction
   ↓
persistence
```

## 65.3 Strategy Pattern

```java
public interface PaymentStrategy {
    PaymentResult pay(PaymentRequest request);
}
```

Implementations:

```text
CardPaymentStrategy
UpiPaymentStrategy
BankTransferPaymentStrategy
```

Choose based on payment type.

## 65.4 Factory Pattern

Useful when creation depends on runtime type:

```text
DocumentParserFactory
  ├─ PdfParser
  ├─ CsvParser
  └─ ExcelParser
```

## 65.5 Adapter Pattern

Wrap external infrastructure behind your own interface:

```text
PaymentPort
   ↓
StripeAdapter
```

Business code does not depend directly on Stripe's SDK.

## 65.6 Observer/Event Pattern

Application events or message subscribers react to published events.

## 65.7 Specification Pattern

Compose dynamic predicates or domain criteria.

## 65.8 Circuit Breaker Pattern

Temporarily fail fast against an unhealthy dependency.

## 65.9 Outbox Pattern

Reliably bridge database state changes and asynchronous event publishing.

## 65.10 Saga Pattern

Coordinate a business workflow across services through steps and compensating actions rather than one global ACID transaction.

Example:

```text
Create order
  ↓
Reserve inventory
  ↓
Charge payment
  ↓
Create shipment
```

If payment fails:

```text
release inventory
mark order failed
```

The compensation is a business action, not a database rollback of another service.

---

# 66. Anti-Patterns and Common Mistakes

## 1. Field injection everywhere

Prefer constructor injection for required dependencies.

## 2. Returning entities directly from APIs

Risks:

- leaking internal fields
- circular JSON
- lazy-loading surprises
- tight persistence/API coupling

## 3. Massive controllers

Controllers should not contain all business, persistence, email, and integration logic.

## 4. Massive services

A 5,000-line service is also a design problem. Split by cohesive responsibility.

## 5. Catching `Exception` everywhere

Bad:

```java
try {
    ...
} catch (Exception e) {
    return null;
}
```

Handle known failures at the correct abstraction level.

## 6. `CascadeType.ALL` everywhere

May persist or delete more data than intended.

## 7. EAGER everywhere

Can create unexpectedly large object graphs and slow queries.

## 8. No migrations

"Works on my database" is not a deployment strategy.

## 9. Secrets in Git

Never commit production secrets.

## 10. No remote-call timeout

One slow dependency can consume all request capacity.

## 11. Retrying every failure

Some failures are permanent or unsafe to repeat.

## 12. Logging credentials

Treat logs as potentially widely accessible operational data.

## 13. Long transactions around remote calls

Creates lock/resource contention and complicated failure behavior.

## 14. Starting with microservices without need

You pay distributed-system complexity immediately.

## 15. Ignoring SQL because JPA exists

ORM does not eliminate the need for database knowledge.

## 16. No pagination

Large unbounded responses cause database, heap, network, and client problems.

## 17. Only happy-path tests

Failure paths are where production bugs live.

## 18. Returning 200 for every outcome

Use meaningful HTTP semantics.

## 19. Hard-coded environment values

Externalize configuration.

## 20. Custom home-grown security unnecessarily

Prefer standards and well-tested Spring Security features.

## 21. Using `Optional` everywhere

`Optional` is useful for absent return values but should not automatically be used for every entity field, DTO property, or method parameter.

## 22. Generic `Util` and `CommonService` dumping grounds

If a class has unrelated responsibilities, split it into meaningful domain/application components.

---

# 67. Debugging Guide

## 67.1 Application fails at startup

Look for the first meaningful `Caused by` section.

Common causes:

```text
port already in use
missing configuration
bean creation failure
ambiguous bean
database unavailable
invalid migration
dependency/version mismatch
circular dependency
```

## 67.2 `No qualifying bean of type...`

Check:

- missing stereotype annotation
- package outside component scan
- bean configuration not imported
- wrong active profile
- conditional bean condition not matched
- wrong generic/type

## 67.3 Multiple beans found

If two beans implement the same interface:

- use `@Qualifier`
- use `@Primary`
- redesign selection logic

## 67.4 HTTP 404

Check:

```text
controller scanned?
correct base path?
correct HTTP method?
context path?
typo/trailing route differences?
```

## 67.5 HTTP 400

Common causes:

- malformed JSON
- validation failure
- type-conversion error
- missing required parameter
- unreadable body

## 67.6 HTTP 401

Authentication is missing or failed.

Check:

- token/cookie present
- token valid
- issuer/audience configuration
- authentication provider
- security filter logs

## 67.7 HTTP 403

The request is authenticated but not allowed, or another security rule such as CSRF may be involved depending on the setup.

Check roles/authorities and security matchers.

## 67.8 `LazyInitializationException`

A lazy relationship is being accessed outside a usable persistence context.

Do not immediately change everything to EAGER.

Better approaches:

- load needed relationship explicitly
- use fetch join
- use DTO projection
- adjust transaction/query boundary

## 67.9 `StackOverflowError` during JSON serialization

Often caused by bidirectional entities:

```text
parent → children → parent → children ...
```

Prefer DTOs rather than exposing the entity graph directly.

## 67.10 Deadlock

Investigate:

- transaction ordering
- lock order
- transaction duration
- indexes
- isolation
- concurrent workflow

Retry can be part of a solution for transient deadlocks, but first understand the cause.

## 67.11 Memory problem

Collect evidence:

```text
heap usage
GC logs/metrics
heap dump
thread dump
allocation profile
cache size
queue size
large response payloads
```

Do not guess.

## 67.12 Slow application

Break latency down:

```text
HTTP queue/thread wait
controller/service
DB queries
remote APIs
serialization
network
```

Use traces and metrics to find the real bottleneck.

---

# 68. Production-Readiness Checklist

## Architecture

- [ ] Responsibilities are clearly separated
- [ ] Business rules are not hidden in controllers
- [ ] External providers are appropriately abstracted
- [ ] Transaction boundaries are deliberate
- [ ] Critical background work is durable
- [ ] Multiple-instance behavior is considered

## API

- [ ] Correct HTTP methods/status codes
- [ ] Request validation exists
- [ ] Consistent error format exists
- [ ] Large collections are paginated
- [ ] Retry-sensitive operations are idempotent where required
- [ ] API contract is documented
- [ ] Date/time and decimal behavior are defined

## Database

- [ ] Schema migrations are version controlled
- [ ] Important constraints exist in the database
- [ ] Indexes are based on query patterns
- [ ] N+1 problems checked
- [ ] Connection pool monitored
- [ ] Transactions kept reasonably short
- [ ] Locking/concurrency strategy exists where needed
- [ ] Money uses correct decimal handling

## Security

- [ ] Passwords are one-way hashed appropriately
- [ ] Secrets are outside source control
- [ ] Authentication mechanism is standards-based
- [ ] Authorization exists at necessary boundaries
- [ ] CORS is intentional
- [ ] CSRF decision matches authentication model
- [ ] Management endpoints are protected
- [ ] Dependencies are scanned/patched
- [ ] Logs do not expose sensitive data
- [ ] TLS is enforced in production

## Reliability

- [ ] External-call timeouts exist
- [ ] Retries are bounded and safe
- [ ] Circuit breaker/bulkhead considered for important dependencies
- [ ] Failed messages/jobs are observable
- [ ] Duplicate message/request handling considered
- [ ] Graceful shutdown configured/tested

## Observability

- [ ] Useful structured logs
- [ ] Correlation/trace ID
- [ ] Request and dependency metrics
- [ ] Health/readiness
- [ ] Alerts
- [ ] Dashboards
- [ ] Business KPIs where useful

## Deployment

- [ ] Environment-specific config externalized
- [ ] Secrets delivered securely
- [ ] Container runs with appropriate privileges
- [ ] Resource limits understood
- [ ] Migration rollout strategy defined
- [ ] Rollback/roll-forward procedure known
- [ ] Health checks tested during deployment

## Testing

- [ ] Unit tests for business logic
- [ ] Controller tests
- [ ] Repository/query tests
- [ ] Integration tests
- [ ] Security/authorization tests
- [ ] Failure-path tests
- [ ] Production-like dependency tests where practical

---

# 69. Interview Questions and Answers

## Q1. What is Spring Boot?

Spring Boot is an opinionated way to build stand-alone, production-oriented Spring applications using auto-configuration, starters, embedded servers, externalized configuration, and operational features.

## Q2. What is IoC?

Inversion of Control means the framework/container controls object creation and wiring instead of application classes manually constructing their dependencies.

## Q3. What is Dependency Injection?

An object receives required collaborators from outside. Constructor injection is commonly preferred because dependencies are explicit and easy to test.

## Q4. What is a bean?

An object whose lifecycle and configuration are managed by the Spring container.

## Q5. `@Component` vs `@Service` vs `@Repository`?

All are stereotypes that can create managed components, but they express different architectural roles. `@Repository` also has persistence-related semantics.

## Q6. What does `@SpringBootApplication` do?

It combines the main Boot application-configuration concepts: Boot configuration, auto-configuration, and component scanning.

## Q7. What is auto-configuration?

Spring Boot conditionally creates configuration based on classpath dependencies, existing beans, properties, and environment.

## Q8. What is a starter?

A curated dependency bundle for a capability such as web, JPA, security, or testing.

## Q9. `@RestController` vs `@Controller`?

`@RestController` is primarily for response-body APIs such as JSON. `@Controller` is commonly used for MVC views unless response-body behavior is added explicitly.

## Q10. `@PathVariable` vs `@RequestParam`?

```text
/users/10            → PathVariable
/users?status=ACTIVE → RequestParam
```

## Q11. What does `@Transactional` do?

It declares transaction behavior around a Spring-managed method/class. Spring commonly implements this through proxies/interceptors.

## Q12. Why can self-invocation be a transaction problem?

A call from one method directly to another method on the same object may bypass the Spring proxy that applies transaction behavior.

## Q13. JPA vs Hibernate vs Spring Data JPA?

```text
JPA = persistence API/specification
Hibernate = common JPA implementation
Spring Data JPA = repository/data-access abstraction on JPA
```

## Q14. What is N+1?

One query loads a list, then additional queries are triggered for each row's relationships. It can severely hurt performance.

## Q15. LAZY vs EAGER?

LAZY defers relationship loading until needed. EAGER asks for immediate loading. Query design should follow the use case rather than making everything one style.

## Q16. Optimistic vs pessimistic locking?

Optimistic locking detects conflicting updates, commonly with a version. Pessimistic locking acquires stronger database locks to prevent concurrent conflicting access.

## Q17. Why DTOs?

They separate API/message contracts from persistence models, reduce accidental data exposure, and avoid many serialization/lazy-loading problems.

## Q18. Authentication vs authorization?

Authentication asks who the principal is. Authorization asks what that principal may do.

## Q19. 401 vs 403?

401 generally indicates missing/failed authentication. 403 means access is forbidden under the security rules for the request.

## Q20. What is JWT?

A compact token format for claims. Signed JWTs provide integrity/authenticity checks but are not inherently encrypted.

## Q21. OAuth2 vs OIDC?

OAuth focuses on delegated authorization. OpenID Connect adds an identity layer and authentication semantics.

## Q22. What is CORS?

A browser-enforced cross-origin access mechanism controlled by response/request headers and server policy.

## Q23. What is CSRF?

An attack where a browser is induced to send an unwanted authenticated request, especially relevant when credentials such as cookies are attached automatically.

## Q24. Filter vs interceptor?

A filter operates at the servlet request/response layer. A Spring MVC interceptor operates around handler/controller execution.

## Q25. Interceptor vs AOP?

An interceptor follows MVC request handling. AOP can wrap method execution outside the controller layer.

## Q26. What is Actuator?

Spring Boot's production-management capability for health, metrics, management endpoints, and operational integration.

## Q27. `@Value` vs `@ConfigurationProperties`?

Use `@Value` for isolated values; use configuration properties for structured type-safe settings.

## Q28. Why database migrations?

They version schema changes and make development, testing, and deployment repeatable.

## Q29. What is Testcontainers?

A testing approach/library that runs real containerized dependencies such as PostgreSQL during integration tests.

## Q30. Spring MVC vs WebFlux?

MVC is the traditional servlet/blocking web stack. WebFlux is a reactive/non-blocking stack. Choose based on workload and architecture, not trendiness.

## Q31. What is a circuit breaker?

A resilience mechanism that temporarily fails fast when a dependency is unhealthy instead of continuously sending calls likely to fail.

## Q32. What is an outbox pattern?

Store business changes and an event record in one database transaction, then publish the event asynchronously from the outbox.

## Q33. What is a saga?

A distributed business transaction made of multiple local steps and compensating actions rather than one global database transaction.

## Q34. What is a bean scope?

It defines how many instances of a bean Spring creates and how long they live, such as singleton, request, session, or prototype.

## Q35. Why constructor injection?

It makes required dependencies explicit, supports immutable fields, improves testability, and reveals dependency cycles.

## Q36. Why should services usually be stateless?

Singleton services can be accessed concurrently by many requests. Request-specific mutable fields create races and data leakage between requests.

## Q37. Why not expose every Actuator endpoint publicly?

Some management endpoints reveal sensitive operational/internal information or allow administrative actions. Expose only what is needed and protect it.

## Q38. What is eventual consistency?

In distributed systems, different components may temporarily hold different states before asynchronous processing brings them into agreement.

## Q39. Why use an idempotency key?

It lets a server recognize repeated delivery of the same logical operation and avoid duplicated side effects such as duplicate charges.

## Q40. Why is SQL knowledge still important with JPA?

JPA generates database operations, but performance, locking, indexes, constraints, query plans, and database behavior still determine correctness and speed.

---

# 70. Practice Projects

## Project 1 — Task Manager

Learn:

```text
Spring Boot basics
REST
DTOs
validation
JPA
exceptions
testing
```

Features:

- create task
- update task
- complete/reopen task
- filter by status
- pagination
- validation errors

## Project 2 — Employee Management

Learn:

```text
relationships
search
audit
roles
migrations
```

Features:

- employees
- departments
- managers
- role assignment
- joining/leaving dates
- active/inactive status

## Project 3 — E-commerce Backend

Learn:

```text
transactions
inventory
security
caching
payments
messaging
```

Modules:

```text
catalog
cart
order
payment
inventory
shipping
notification
```

Advanced challenges:

- idempotent order submission
- stock concurrency
- payment timeout
- outbox event
- cache invalidation

## Project 4 — Invoice Workflow System

Learn:

```text
file upload
workflow
approvals
audit
security
database locking
async/events
external integrations
```

Flow:

```text
Upload invoice
   ↓
Extract/enter metadata
   ↓
Validate
   ↓
Match purchase data
   ↓
Approval workflow
   ↓
Posting
   ↓
Payment status
```

Statuses:

```text
RECEIVED
VALIDATION_FAILED
PENDING_APPROVAL
APPROVED
REJECTED
POSTED
PAID
```

Add:

- approval history
- duplicate invoice protection
- optimistic locking
- attachment security
- audit events
- scheduled reminder job

## Project 5 — Banking Transfer Learning API

Learn:

- idempotency
- transaction boundaries
- locking
- audit
- security
- failure scenarios

A learning project can simplify regulatory requirements; real financial systems require much deeper compliance and controls.

## Project 6 — Modular Monolith

Modules:

```text
orders
payments
inventory
notifications
```

Rules:

- modules do not reach into each other's repositories
- cross-module interaction uses explicit APIs/events
- module boundaries are tested

## Project 7 — Microservices System

Only after mastering a modular monolith.

Services:

```text
gateway
identity
orders
payments
inventory
notifications
```

Add:

- Kafka
- Redis
- distributed tracing
- Docker
- Kubernetes
- retry/circuit breaker
- outbox
- saga workflow

---

# 71. Learning Roadmap

## Stage 1 — Java foundation

Learn:

```text
OOP
interfaces
exceptions
collections
generics
annotations
streams
Optional
records
concurrency basics
Maven
HTTP
SQL
```

Build a console inventory application.

## Stage 2 — Spring Core

Learn:

```text
IoC
DI
beans
ApplicationContext
component scanning
@Configuration
@Bean
scopes
profiles
AOP basics
```

## Stage 3 — Spring Boot Fundamentals

Learn:

```text
@SpringBootApplication
auto-configuration
starters
configuration
profiles
logging
```

Build a Hello/Task API.

## Stage 4 — REST Mastery

Learn:

```text
controllers
DTOs
validation
exceptions
HTTP semantics
pagination
API contracts
```

## Stage 5 — Database Mastery

Learn:

```text
SQL
JPA
Hibernate
repositories
relationships
transactions
locking
N+1
migrations
```

## Stage 6 — Security

Learn:

```text
authentication
authorization
password hashing
SecurityFilterChain
method security
JWT
OAuth2/OIDC
CORS
CSRF
```

## Stage 7 — Testing

Learn:

```text
JUnit
Mockito
@WebMvcTest
@DataJpaTest
@SpringBootTest
Testcontainers
```

## Stage 8 — Integration and Reliability

Learn:

```text
external API clients
timeouts
retry
circuit breaker
caching
async
scheduler
Kafka/RabbitMQ
```

## Stage 9 — Production

Learn:

```text
Actuator
logging
metrics
tracing
Docker
secrets
CI/CD
health checks
performance
```

## Stage 10 — Architecture

Learn:

```text
clean architecture
hexagonal architecture
DDD
modular monolith
microservices
outbox
saga
event-driven architecture
```

## Stage 11 — Cloud and Kubernetes

Learn:

```text
containers
Kubernetes
service networking
configuration
secrets
readiness/liveness
autoscaling
observability
```

---

# Suggested 16-Week Study Plan

| Week | Focus |
|---|---|
| 1–2 | Java, HTTP, SQL, Maven refresher |
| 3 | Spring IoC, DI, Beans |
| 4 | Boot, starters, config, profiles |
| 5 | Spring MVC and REST |
| 6 | DTOs, validation, exceptions |
| 7–8 | JPA, Hibernate, repositories, relationships |
| 9 | Transactions, locking, query performance |
| 10 | Spring Security |
| 11 | JWT, OAuth2/OIDC concepts |
| 12 | JUnit, Mockito, Spring testing |
| 13 | Cache, external APIs, resilience |
| 14 | Kafka/RabbitMQ, async, scheduling |
| 15 | Docker, Actuator, observability |
| 16 | Architecture, deployment, final project |

---

# Master End-to-End Scenario: Order Creation

Request:

```http
POST /api/orders
Content-Type: application/json
Authorization: Bearer <token>

{
  "customerId": 10,
  "items": [
    {"productId": 100, "quantity": 2}
  ]
}
```

## Step 1 — Security filter chain

```text
read bearer token
  ↓
validate signature/claims
  ↓
create Authentication
  ↓
authorize request
```

## Step 2 — DispatcherServlet

Finds the controller method mapped to `POST /api/orders`.

## Step 3 — JSON deserialization

Jackson converts JSON into `CreateOrderRequest`.

## Step 4 — Validation

`@Valid` checks request constraints.

If invalid:

```text
400 Bad Request
```

with a consistent validation error response.

## Step 5 — Controller

Controller delegates:

```java
orderService.create(request)
```

## Step 6 — Transaction

Service starts a database transaction.

## Step 7 — Repository work

Load products, verify data, create order and order lines.

## Step 8 — Business rules

Calculate:

```text
subtotal
discount
tax
total
```

Check inventory and customer rules.

## Step 9 — Commit

The local database transaction commits.

## Step 10 — Durable event

For important asynchronous integration, persist an outbox event in the same transaction.

## Step 11 — Event publication

Outbox publisher sends `OrderCreated` to the broker.

## Step 12 — Consumers

```text
Inventory consumer
Notification consumer
Analytics consumer
```

Each consumer handles duplicates safely.

## Step 13 — HTTP response

```http
HTTP/1.1 201 Created
```

```json
{
  "id": 9001,
  "status": "CREATED",
  "total": 4998.00
}
```

## Step 14 — Observability

Capture:

```text
HTTP latency
status code
trace ID
database duration
external dependency duration
order-created metric
```

This one flow touches most important Spring Boot topics.

---

# Spring Proxy Mental Model

Many Spring features wrap a bean:

```text
Caller
  ↓
Spring proxy
  ↓
security check
  ↓
transaction start
  ↓
real method
  ↓
transaction commit
  ↓
return
```

Common proxy-backed features can include:

```text
@Transactional
@Async
@Cacheable
method security
AOP
```

This explains why self-invocation and manually constructed objects can behave unexpectedly.

If you do:

```java
OrderService service = new OrderService(...);
```

that instance is not automatically a Spring-managed/proxied object.

---

# Spring Boot Startup Mental Model

When you call:

```java
SpringApplication.run(App.class, args);
```

think approximately:

```text
1. prepare environment/configuration
2. determine application type
3. create application context
4. load bean definitions
5. apply auto-configuration
6. create singleton beans
7. apply bean post-processors/proxies
8. start embedded web server if needed
9. publish lifecycle events
10. report application ready
```

The real internals are more detailed, but this model is excellent for practical debugging.

---

# REST API Rules Worth Memorizing

1. Use resources/nouns for normal CRUD URLs.
2. Use HTTP methods intentionally.
3. Use meaningful status codes.
4. Validate external input.
5. Keep API DTOs separate from persistence entities.
6. Paginate large collections.
7. Return a stable error contract.
8. Never expose internal stack traces to clients.
9. Design idempotency for retry-sensitive operations.
10. Document authentication/authorization requirements.
11. Define date/time formats.
12. Define money/decimal semantics.
13. Validate client-controlled sort/filter parameters.
14. Limit body/file sizes.
15. Version or evolve public APIs carefully.

---

# Database Rules Worth Memorizing

1. ORM does not replace SQL knowledge.
2. Inspect generated SQL for important paths.
3. Understand indexes and execution plans.
4. Detect N+1 queries.
5. Keep transactions deliberate and short.
6. Expect concurrent requests.
7. Enforce critical integrity with DB constraints.
8. Use version-controlled migrations.
9. Use projections for purpose-specific reads.
10. Paginate large result sets.
11. Monitor the connection pool.
12. Understand lock behavior.
13. Use decimal types for money.
14. Test against the real DB engine where useful.

---

# Security Rules Worth Memorizing

1. Never invent your own password cryptography.
2. Never log credentials or bearer tokens.
3. Prefer framework-supported standards.
4. Validate tokens according to issuer/audience/signature/expiry requirements.
5. Treat authentication and authorization separately.
6. Follow least privilege.
7. Validate untrusted input.
8. Protect management endpoints.
9. Patch dependencies.
10. Understand CORS before allowing origins.
11. Understand CSRF before disabling it.
12. Rotate secrets.
13. Use TLS.
14. Audit privileged operations.
15. Check object-level authorization, not only URL access.

---

# Code Quality Rules

Prefer:

```text
constructor injection
final dependencies
small cohesive methods
clear domain names
specific exceptions
immutable request/response DTOs
explicit transaction boundaries
purpose-specific repositories
```

Avoid:

```text
CommonService with unrelated behavior
Utils class containing half the application
catch(Exception) everywhere
return null as error handling
magic strings
hard-coded URLs
copy-pasted validation
business rules in controllers
```

Use enums/value objects instead of magic strings when the domain has a fixed vocabulary.

---

# Complete Mini CRUD Example

## Request DTO

```java
public record CreateProductRequest(
    @NotBlank String name,
    @Positive BigDecimal price
) {}
```

## Response DTO

```java
public record ProductResponse(
    Long id,
    String name,
    BigDecimal price
) {}
```

## Entity

```java
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal price;

    protected Product() {}

    public Product(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public BigDecimal getPrice() { return price; }
}
```

## Repository

```java
public interface ProductRepository
        extends JpaRepository<Product, Long> {
}
```

## Service

```java
@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public ProductResponse create(CreateProductRequest request) {
        Product product = new Product(request.name(), request.price());
        Product saved = repository.save(product);
        return map(saved);
    }

    @Transactional(readOnly = true)
    public ProductResponse find(Long id) {
        Product product = repository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        return map(product);
    }

    private ProductResponse map(Product product) {
        return new ProductResponse(
            product.getId(),
            product.getName(),
            product.getPrice()
        );
    }
}
```

## Controller

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ProductResponse> create(
            @Valid @RequestBody CreateProductRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(service.create(request));
    }

    @GetMapping("/{id}")
    public ProductResponse find(@PathVariable Long id) {
        return service.find(id);
    }
}
```

This mini application already demonstrates:

```text
REST controller
request DTO
response DTO
validation
constructor DI
service layer
transaction
JPA entity
repository
exception flow
HTTP status
```

---

# Additional Spring Concepts to Know

## Environment abstraction

Spring's `Environment` gives access to active profiles and properties.

## Type conversion

Spring can convert textual configuration/request data into types such as:

```text
Integer
Boolean
Enum
Duration
DataSize
LocalDate
```

## Resource abstraction

Spring's resource APIs provide a common model for:

```text
classpath resources
files
URLs
```

## Internationalization

Spring supports message bundles and locale-aware messages.

## Data binding

Spring binds request/configuration data to Java objects. Combine this power with explicit DTOs and validation.

## SpEL — Spring Expression Language

SpEL appears in areas such as:

```text
security expressions
cache keys
conditional configuration
```

Keep complex business logic in Java rather than turning annotations into unreadable programs.

---

# 72. Official References

Use official documentation as the final authority for version-specific behavior:

- Spring Boot: https://docs.spring.io/spring-boot/
- Spring Boot Reference: https://docs.spring.io/spring-boot/reference/
- Spring Framework Reference: https://docs.spring.io/spring-framework/reference/
- Spring Security Reference: https://docs.spring.io/spring-security/reference/
- Spring Data: https://spring.io/projects/spring-data
- Spring Initializr: https://start.spring.io/
- Spring Projects: https://spring.io/projects
- Spring Guides: https://spring.io/guides
- Spring Batch: https://spring.io/projects/spring-batch
- Spring Cloud: https://spring.io/projects/spring-cloud
- Spring Modulith: https://spring.io/projects/spring-modulith
- Spring for Apache Kafka: https://spring.io/projects/spring-kafka

---

# Final Mastery Checklist

You are approaching strong Spring Boot proficiency when you can confidently do and explain all of the following:

- [ ] Explain IoC and Dependency Injection
- [ ] Explain what a Spring bean is
- [ ] Explain component scanning
- [ ] Explain bean lifecycle and scopes
- [ ] Explain auto-configuration and starters
- [ ] Build typed configuration properties
- [ ] Use profiles appropriately
- [ ] Explain Spring MVC request flow
- [ ] Build clean REST APIs
- [ ] Use correct HTTP status codes
- [ ] Validate input
- [ ] Design DTOs instead of exposing entities
- [ ] Build global exception handling
- [ ] Understand Jackson serialization
- [ ] Choose between filter, interceptor, and AOP
- [ ] Implement useful structured logging
- [ ] Configure a relational database
- [ ] Explain JPA vs Hibernate vs Spring Data JPA
- [ ] Design entity relationships
- [ ] Detect and fix N+1 queries
- [ ] Write derived, JPQL, and native queries when appropriate
- [ ] Use transactions correctly
- [ ] Explain transaction proxy/self-invocation behavior
- [ ] Handle concurrent updates with locking/versioning
- [ ] Use database migrations
- [ ] Know when JDBC is better than JPA
- [ ] Design caching and invalidation
- [ ] Explain authentication vs authorization
- [ ] Configure Spring Security
- [ ] Understand JWT security properties
- [ ] Understand OAuth2/OIDC roles and flows
- [ ] Configure CORS intentionally
- [ ] Understand CSRF and sessions
- [ ] Use method-level authorization
- [ ] Call remote APIs with timeouts
- [ ] Design safe retry behavior
- [ ] Explain circuit breakers and bulkheads
- [ ] Use application events correctly
- [ ] Understand limitations of `@Async`
- [ ] Design scheduled jobs for multiple instances
- [ ] Handle files securely
- [ ] Explain Kafka/RabbitMQ fundamentals
- [ ] Design idempotent message consumers
- [ ] Explain outbox and saga patterns
- [ ] Understand WebSocket and SSE
- [ ] Explain MVC vs WebFlux
- [ ] Understand Spring Batch
- [ ] Write JUnit and Mockito tests
- [ ] Use test slices
- [ ] Write integration tests
- [ ] Use Testcontainers
- [ ] Document APIs with OpenAPI
- [ ] Configure Actuator safely
- [ ] Explain logs, metrics, and traces
- [ ] Manage secrets safely
- [ ] Dockerize an application
- [ ] Understand buildpacks
- [ ] Understand Kubernetes readiness/liveness
- [ ] Explain monolith vs modular monolith vs microservices
- [ ] Understand Spring Cloud's role
- [ ] Apply clean/hexagonal architecture when useful
- [ ] Diagnose slow SQL and application latency
- [ ] Understand singleton thread-safety concerns
- [ ] Debug common bean, MVC, security, JPA, and memory issues
- [ ] Perform a production-readiness review

---

# One-Line Mental Models

```text
Spring        = container + enterprise application framework
Spring Boot   = Spring with smart defaults and operational tooling
Bean          = object managed by Spring
IoC           = framework controls object construction/wiring
DI            = object receives its dependencies
Controller    = HTTP boundary
Service       = business/application logic
Repository    = data-access boundary
DTO           = transport/API contract
Entity        = persistence model
Transaction   = atomic consistency boundary
Filter        = servlet request pipeline component
Interceptor   = Spring MVC handler pipeline component
AOP           = method-level cross-cutting behavior
Actuator      = production management capabilities
Profile       = environment/scenario-specific activation
JWT           = compact token format
OAuth2        = delegated authorization framework
OIDC          = identity layer built on OAuth concepts
Cache         = faster copy requiring a consistency strategy
Kafka         = distributed event-streaming platform
RabbitMQ      = broker using exchanges/queues/routing
WebFlux       = reactive Spring web stack
Testcontainers= real ephemeral dependency containers for tests
Outbox        = reliable bridge from DB transaction to event publication
Saga          = distributed business workflow with compensation
```

---

# Closing Advice

Spring Boot mastery does not come from memorizing the maximum number of annotations.

A strong Spring Boot engineer understands:

```text
what Spring is doing
why it is doing it
where architectural boundaries belong
how data moves through the system
how failures happen
how concurrency changes behavior
how security is enforced
how the application is tested
how it is observed
how it behaves during deployment and production incidents
```

Whenever you learn a new Spring feature, ask:

1. What problem does this solve?
2. At which layer does it operate?
3. Is Spring using a proxy, filter, container hook, or generated configuration?
4. What happens if it fails?
5. What happens with concurrent requests?
6. What happens when five application instances run simultaneously?
7. How will I test it?
8. How will I monitor it?
9. What security/data risk does it introduce?
10. Is there a simpler design?

If you can answer those questions, you are no longer learning only Spring Boot syntax—you are learning to design reliable Spring applications.
