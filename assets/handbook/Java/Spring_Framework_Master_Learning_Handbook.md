# Spring Framework Master Learning Handbook

> **Purpose:** A single-file, beginner-friendly to advanced handbook for learning the **Spring Framework** itself.
>
> **Current reference point:** Spring Framework **7.0.x** (7.0.8 was the current stable release when this handbook was prepared on 2026-08-12), with notes that remain useful for Spring Framework 6.x.
>
> **Java baseline:** Spring Framework 7 keeps Java **17+** as its minimum baseline. Modern Spring uses the `jakarta.*` namespace rather than the old `javax.*` Jakarta/Java EE APIs.
>
> **Important:** **Spring Framework is not Spring Boot.** Spring Boot uses Spring Framework and automates much of its setup. This handbook deliberately teaches Spring Framework concepts first so that Spring Boot does not feel like magic.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is the Spring Framework?](#2-what-is-the-spring-framework)
3. [The Problem Spring Solves](#3-the-problem-spring-solves)
4. [Spring Ecosystem Map](#4-spring-ecosystem-map)
5. [Spring Framework Modules](#5-spring-framework-modules)
6. [Environment and Project Setup](#6-environment-and-project-setup)
7. [Your First Spring Application Without Spring Boot](#7-your-first-spring-application-without-spring-boot)
8. [IoC and Dependency Injection](#8-ioc-and-dependency-injection)
9. [The Spring Container](#9-the-spring-container)
10. [Beans and Bean Definitions](#10-beans-and-bean-definitions)
11. [Bean Registration Styles](#11-bean-registration-styles)
12. [Component Scanning and Stereotype Annotations](#12-component-scanning-and-stereotype-annotations)
13. [Dependency Injection in Depth](#13-dependency-injection-in-depth)
14. [Resolving Multiple Beans](#14-resolving-multiple-beans)
15. [Bean Scopes](#15-bean-scopes)
16. [Bean Lifecycle](#16-bean-lifecycle)
17. [Lazy Initialization and Bean Creation Control](#17-lazy-initialization-and-bean-creation-control)
18. [BeanFactory vs ApplicationContext](#18-beanfactory-vs-applicationcontext)
19. [Container Extension Points](#19-container-extension-points)
20. [FactoryBean](#20-factorybean)
21. [Environment, Properties, Profiles, and Configuration](#21-environment-properties-profiles-and-configuration)
22. [Spring Resource Abstraction](#22-spring-resource-abstraction)
23. [Application Events](#23-application-events)
24. [Internationalization - i18n](#24-internationalization---i18n)
25. [Type Conversion and Formatting](#25-type-conversion-and-formatting)
26. [Validation and Data Binding](#26-validation-and-data-binding)
27. [Spring Expression Language - SpEL](#27-spring-expression-language---spel)
28. [Aspect-Oriented Programming - AOP](#28-aspect-oriented-programming---aop)
29. [Proxy Fundamentals and the Self-Invocation Problem](#29-proxy-fundamentals-and-the-self-invocation-problem)
30. [Transaction Management](#30-transaction-management)
31. [Transaction Propagation](#31-transaction-propagation)
32. [Transaction Isolation](#32-transaction-isolation)
33. [Programmatic Transactions](#33-programmatic-transactions)
34. [Spring JDBC](#34-spring-jdbc)
35. [NamedParameterJdbcTemplate](#35-namedparameterjdbctemplate)
36. [JDBC Batch Operations](#36-jdbc-batch-operations)
37. [DAO Exception Translation](#37-dao-exception-translation)
38. [JPA and Hibernate Integration](#38-jpa-and-hibernate-integration)
39. [Spring MVC Fundamentals](#39-spring-mvc-fundamentals)
40. [DispatcherServlet Request Flow](#40-dispatcherservlet-request-flow)
41. [Spring MVC Controllers](#41-spring-mvc-controllers)
42. [Request Mapping](#42-request-mapping)
43. [Binding Request Data](#43-binding-request-data)
44. [Returning Responses](#44-returning-responses)
45. [REST API Design with Spring MVC](#45-rest-api-design-with-spring-mvc)
46. [Validation in REST APIs](#46-validation-in-rest-apis)
47. [Exception Handling](#47-exception-handling)
48. [Filters, Interceptors, and Controller Advice](#48-filters-interceptors-and-controller-advice)
49. [Multipart File Upload](#49-multipart-file-upload)
50. [CORS](#50-cors)
51. [MVC Views, JSP, Thymeleaf, and Static Resources](#51-mvc-views-jsp-thymeleaf-and-static-resources)
52. [Asynchronous Spring MVC](#52-asynchronous-spring-mvc)
53. [WebSocket, SockJS, and STOMP](#53-websocket-sockjs-and-stomp)
54. [Spring WebFlux](#54-spring-webflux)
55. [Mono, Flux, and Reactive Thinking](#55-mono-flux-and-reactive-thinking)
56. [WebFlux Controllers](#56-webflux-controllers)
57. [Functional Web Endpoints](#57-functional-web-endpoints)
58. [REST Clients](#58-rest-clients)
59. [RestClient](#59-restclient)
60. [WebClient](#60-webclient)
61. [HTTP Service Clients](#61-http-service-clients)
62. [Task Execution and @Async](#62-task-execution-and-async)
63. [Scheduling](#63-scheduling)
64. [Caching](#64-caching)
65. [Email Integration](#65-email-integration)
66. [JMS Messaging](#66-jms-messaging)
67. [JMX](#67-jmx)
68. [Observability](#68-observability)
69. [Testing Spring Applications](#69-testing-spring-applications)
70. [Spring TestContext Framework](#70-spring-testcontext-framework)
71. [MockMvc](#71-mockmvc)
72. [WebTestClient](#72-webtestclient)
73. [Transactional Tests](#73-transactional-tests)
74. [AOT and Native Images](#74-aot-and-native-images)
75. [Spring Framework vs Spring Boot](#75-spring-framework-vs-spring-boot)
76. [Spring Security Integration Points](#76-spring-security-integration-points)
77. [Spring Data Integration Points](#77-spring-data-integration-points)
78. [Kotlin with Spring](#78-kotlin-with-spring)
79. [Recommended Application Architecture](#79-recommended-application-architecture)
80. [Real-World Scenario: Order Processing](#80-real-world-scenario-order-processing)
81. [Real-World Scenario: Invoice Approval Workflow](#81-real-world-scenario-invoice-approval-workflow)
82. [Real-World Scenario: Notification Service](#82-real-world-scenario-notification-service)
83. [Real-World Scenario: External API Integration](#83-real-world-scenario-external-api-integration)
84. [Common Mistakes and Anti-Patterns](#84-common-mistakes-and-anti-patterns)
85. [Performance and Production Considerations](#85-performance-and-production-considerations)
86. [Debugging Spring](#86-debugging-spring)
87. [Migration Notes: Spring 5 to 6 to 7](#87-migration-notes-spring-5-to-6-to-7)
88. [Annotation Cheat Sheet](#88-annotation-cheat-sheet)
89. [Interview Questions and Answers](#89-interview-questions-and-answers)
90. [Practice Exercises](#90-practice-exercises)
91. [Project Ideas](#91-project-ideas)
92. [Learning Roadmap](#92-learning-roadmap)
93. [Glossary](#93-glossary)
94. [Final Master Checklist](#94-final-master-checklist)
95. [Official References](#95-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize every annotation.

Use the handbook in layers:

### Level 1 - Beginner

Learn:

- What Spring is.
- IoC.
- Dependency Injection.
- Beans.
- `ApplicationContext`.
- `@Component`.
- `@Service`.
- `@Repository`.
- `@Controller`.
- `@Configuration`.
- `@Bean`.
- Constructor injection.
- Spring MVC basics.

### Level 2 - Intermediate

Learn:

- Bean scopes.
- Bean lifecycle.
- properties and profiles.
- validation.
- exception handling.
- JDBC.
- transactions.
- AOP.
- testing.
- REST clients.

### Level 3 - Advanced

Learn:

- `BeanPostProcessor`.
- `BeanFactoryPostProcessor`.
- custom scopes.
- proxy internals.
- transaction propagation/isolation.
- reactive programming.
- WebFlux.
- WebSocket/STOMP.
- AOT/native images.
- observability.
- framework integration design.

A useful learning method is:

```text
Read concept
   ↓
Understand why it exists
   ↓
Run the smallest possible example
   ↓
Change the example
   ↓
Break it intentionally
   ↓
Read the error
   ↓
Fix it
   ↓
Use it in a mini project
```

---

# 2. What Is the Spring Framework?

Spring Framework is a general-purpose Java application framework.

Its central idea is simple:

> Instead of your classes creating and wiring all of their dependencies themselves, let a container create, configure, connect, and manage them.

Spring provides infrastructure for:

- Dependency Injection.
- Inversion of Control.
- lifecycle management.
- configuration.
- events.
- resource loading.
- validation.
- data binding.
- type conversion.
- AOP.
- transactions.
- JDBC.
- ORM integration.
- web MVC.
- reactive web applications.
- REST clients.
- WebSocket.
- messaging.
- scheduling.
- caching.
- testing.
- observability.
- AOT processing.

Spring tries to let business classes focus on business logic rather than infrastructure plumbing.

---

# 3. The Problem Spring Solves

Consider ordinary Java code.

```java
public class OrderService {

    private final EmailService emailService = new EmailService();
    private final PaymentService paymentService = new PaymentService();

    public void placeOrder() {
        paymentService.pay();
        emailService.sendConfirmation();
    }
}
```

Problems:

1. `OrderService` decides which implementations to create.
2. It is tightly coupled to concrete classes.
3. Unit testing becomes harder.
4. Replacing email with SMS requires source changes.
5. Shared configuration becomes scattered.
6. Resource lifecycle becomes harder to manage.

A better design:

```java
public class OrderService {

    private final NotificationService notificationService;
    private final PaymentService paymentService;

    public OrderService(
            NotificationService notificationService,
            PaymentService paymentService) {

        this.notificationService = notificationService;
        this.paymentService = paymentService;
    }
}
```

Now another object can provide dependencies.

That "other object" is commonly the Spring container.

This is Dependency Injection.

---

# 4. Spring Ecosystem Map

"Spring" is an ecosystem, not one library.

```text
Spring Ecosystem
│
├── Spring Framework
│   ├── Core Container
│   ├── AOP
│   ├── Transactions
│   ├── JDBC
│   ├── MVC
│   ├── WebFlux
│   ├── Testing
│   └── Integration
│
├── Spring Boot
│   └── Auto-configuration and production-friendly application bootstrap
│
├── Spring Data
│   └── Repository abstractions for SQL/NoSQL databases
│
├── Spring Security
│   └── Authentication and authorization
│
├── Spring Cloud
│   └── Distributed-system patterns
│
├── Spring Batch
│   └── Batch processing
│
├── Spring Integration
│   └── Enterprise integration patterns
│
└── Other Spring projects
```

## Spring Framework vs Spring Boot

A useful mental model:

```text
Spring Framework = engine + core programming model

Spring Boot = automatic setup + sensible defaults + easier startup
```

Spring Boot does not replace the Spring Framework.

It uses it.

---

# 5. Spring Framework Modules

The framework is split into modules.

Common modules include:

| Module | Main Purpose |
|---|---|
| `spring-core` | Core utilities |
| `spring-beans` | Bean factory and bean configuration |
| `spring-context` | ApplicationContext, events, resources, i18n |
| `spring-expression` | SpEL |
| `spring-aop` | Spring AOP |
| `spring-aspects` | AspectJ integration |
| `spring-jdbc` | JDBC helpers |
| `spring-tx` | Transaction abstraction |
| `spring-orm` | ORM integration |
| `spring-web` | Core web infrastructure and HTTP clients |
| `spring-webmvc` | Servlet-based Spring MVC |
| `spring-webflux` | Reactive web stack |
| `spring-messaging` | Messaging abstractions |
| `spring-jms` | JMS support |
| `spring-test` | Testing utilities |

You normally include only the modules your application needs.

---

# 6. Environment and Project Setup

For modern Spring Framework development, use:

- Java 17 or newer.
- Maven or Gradle.
- an IDE such as IntelliJ IDEA, Eclipse, or VS Code.
- JUnit for testing.

For Spring Framework 7, modern applications use `jakarta.*` APIs.

Example:

```java
import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import jakarta.servlet.http.HttpServletRequest;
```

not:

```java
import javax.annotation.PostConstruct;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
```

## Maven Example

```xml
<properties>
    <maven.compiler.release>17</maven.compiler.release>
    <spring.version>7.0.8</spring.version>
</properties>

<dependencies>

    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>${spring.version}</version>
    </dependency>

</dependencies>
```

For a real project, keep Spring modules on the same compatible framework version.

If you use Spring Boot, normally let Spring Boot dependency management choose compatible Spring Framework versions instead of manually overriding them.

---

# 7. Your First Spring Application Without Spring Boot

This example intentionally avoids Spring Boot.

## Step 1 - Create a service

```java
package com.example.service;

public class GreetingService {

    public String greet(String name) {
        return "Hello " + name;
    }
}
```

## Step 2 - Register it

```java
package com.example.config;

import com.example.service.GreetingService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public GreetingService greetingService() {
        return new GreetingService();
    }
}
```

## Step 3 - Start the Spring container

```java
package com.example;

import com.example.config.AppConfig;
import com.example.service.GreetingService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {

    public static void main(String[] args) {

        try (var context =
                     new AnnotationConfigApplicationContext(AppConfig.class)) {

            GreetingService greetingService =
                    context.getBean(GreetingService.class);

            System.out.println(greetingService.greet("Shoeb"));
        }
    }
}
```

The container:

1. reads configuration.
2. finds the bean definition.
3. creates `GreetingService`.
4. stores/manages it.
5. returns it when requested.

---

# 8. IoC and Dependency Injection

## Inversion of Control

Without IoC:

```text
Your code controls object creation.
```

With IoC:

```text
The framework/container controls object creation and wiring.
```

IoC is a broad design principle.

Dependency Injection is one common way Spring implements IoC.

## Dependency Injection

Suppose:

```java
public interface PaymentGateway {
    void pay(double amount);
}
```

Implementation:

```java
public class StripePaymentGateway implements PaymentGateway {

    @Override
    public void pay(double amount) {
        System.out.println("Paid: " + amount);
    }
}
```

Service:

```java
public class OrderService {

    private final PaymentGateway paymentGateway;

    public OrderService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    public void checkout(double amount) {
        paymentGateway.pay(amount);
    }
}
```

Spring can create both objects and inject the gateway into the service.

This makes the service dependent on an abstraction rather than a concrete implementation.

Benefits:

- lower coupling.
- easier testing.
- implementation swapping.
- clearer dependencies.
- central configuration.

---

# 9. The Spring Container

The main Spring container interface is:

```java
ApplicationContext
```

It is responsible for:

- creating beans.
- configuring beans.
- injecting dependencies.
- handling lifecycle callbacks.
- publishing events.
- loading resources.
- resolving messages.
- supporting environment/profiles.
- registering framework infrastructure.

Common implementations:

```java
AnnotationConfigApplicationContext
ClassPathXmlApplicationContext
FileSystemXmlApplicationContext
AnnotationConfigWebApplicationContext
```

Modern Java applications typically use annotation/Java configuration.

---

# 10. Beans and Bean Definitions

A **Spring bean** is an object managed by the Spring container.

Example:

```java
@Component
public class InvoiceService {
}
```

When component scanning finds this class, Spring registers a bean definition.

A bean definition contains metadata such as:

- bean class.
- bean name.
- scope.
- constructor arguments.
- dependencies.
- lazy status.
- initialization method.
- destruction method.
- qualifiers.
- primary/fallback status.

Think of it as:

```text
Bean Definition = recipe
Bean = object created from the recipe
```

---

# 11. Bean Registration Styles

Spring supports several styles.

## 11.1 Java Configuration

```java
@Configuration
public class AppConfig {

    @Bean
    public TaxCalculator taxCalculator() {
        return new TaxCalculator();
    }
}
```

Use when:

- the class is third-party.
- construction requires custom logic.
- you want explicit wiring.
- you do not want the class itself coupled to Spring annotations.

## 11.2 Component Scanning

```java
@Service
public class OrderService {
}
```

with:

```java
@Configuration
@ComponentScan("com.example")
public class AppConfig {
}
```

Use when:

- the class belongs to your application.
- conventional auto-discovery is appropriate.

## 11.3 XML

```xml
<bean id="orderService"
      class="com.example.OrderService"/>
```

XML is less common in new projects but remains important when maintaining older enterprise systems.

## 11.4 Programmatic Registration

```java
var context = new AnnotationConfigApplicationContext();

context.registerBean(
        "clock",
        java.time.Clock.class,
        java.time.Clock::systemUTC
);

context.refresh();
```

Useful for:

- frameworks.
- dynamic registration.
- libraries.
- infrastructure code.

---

# 12. Component Scanning and Stereotype Annotations

## `@Component`

Generic Spring-managed component.

```java
@Component
public class PdfParser {
}
```

## `@Service`

Service/business-layer semantic stereotype.

```java
@Service
public class InvoiceService {
}
```

## `@Repository`

Persistence/data-access stereotype.

```java
@Repository
public class InvoiceRepository {
}
```

It also participates in Spring persistence exception translation when the relevant infrastructure is configured.

## `@Controller`

MVC controller returning views or responses.

```java
@Controller
public class HomeController {
}
```

## `@RestController`

Equivalent conceptually to:

```java
@Controller
@ResponseBody
```

Example:

```java
@RestController
public class UserController {
}
```

## Why use the correct stereotype?

This:

```java
@Service
public class PaymentService {
}
```

is clearer than:

```java
@Component
public class PaymentService {
}
```

because it communicates architectural intent.

---

# 13. Dependency Injection in Depth

Spring supports three common injection styles.

## 13.1 Constructor Injection

Recommended for required dependencies.

```java
@Service
public class OrderService {

    private final PaymentGateway paymentGateway;
    private final InvoiceRepository invoiceRepository;

    public OrderService(
            PaymentGateway paymentGateway,
            InvoiceRepository invoiceRepository) {

        this.paymentGateway = paymentGateway;
        this.invoiceRepository = invoiceRepository;
    }
}
```

Benefits:

- dependencies cannot be accidentally forgotten.
- fields can be `final`.
- class is easier to unit test.
- object can be valid immediately after construction.
- circular dependencies become visible earlier.

If a Spring-managed class has one constructor, `@Autowired` is normally unnecessary.

## 13.2 Setter Injection

Useful for optional/changeable dependencies.

```java
@Service
public class ReportService {

    private Formatter formatter;

    @Autowired
    public void setFormatter(Formatter formatter) {
        this.formatter = formatter;
    }
}
```

## 13.3 Field Injection

```java
@Autowired
private PaymentGateway paymentGateway;
```

This works, but it is generally discouraged for application code because:

- dependency is hidden.
- testing without Spring becomes less convenient.
- fields cannot naturally be final.
- design can accumulate too many dependencies unnoticed.

## Practical Rule

Use:

```text
Constructor injection -> required dependencies
Setter injection      -> optional configuration/dependency
Field injection       -> avoid in normal application classes
```

---

# 14. Resolving Multiple Beans

Suppose:

```java
public interface NotificationService {
    void send(String message);
}
```

Implementations:

```java
@Component
public class EmailNotificationService implements NotificationService {
    public void send(String message) {}
}
```

```java
@Component
public class SmsNotificationService implements NotificationService {
    public void send(String message) {}
}
```

Now this becomes ambiguous:

```java
public AlertService(NotificationService notificationService) {
}
```

Spring sees two candidates.

## Solution 1 - `@Primary`

```java
@Primary
@Component
public class EmailNotificationService
        implements NotificationService {
}
```

Spring selects it by default.

## Solution 2 - `@Qualifier`

```java
@Service
public class AlertService {

    private final NotificationService notificationService;

    public AlertService(
            @Qualifier("smsNotificationService")
            NotificationService notificationService) {

        this.notificationService = notificationService;
    }
}
```

## Solution 3 - Custom Qualifier

```java
@Target({
    ElementType.FIELD,
    ElementType.PARAMETER,
    ElementType.TYPE
})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface SmsChannel {
}
```

```java
@Component
@SmsChannel
public class SmsNotificationService
        implements NotificationService {
}
```

```java
public AlertService(
        @SmsChannel NotificationService notificationService) {
}
```

## `@Fallback`

Modern Spring also supports fallback candidates.

Conceptually:

```text
Primary candidate > normal candidates > fallback candidate
```

It can be useful when you want a default only if no stronger candidate exists.

## Injecting All Implementations

```java
@Service
public class NotificationManager {

    private final List<NotificationService> services;

    public NotificationManager(List<NotificationService> services) {
        this.services = services;
    }
}
```

Spring injects all beans of that type.

You can also inject:

```java
Map<String, NotificationService>
```

where map keys are bean names.

---

# 15. Bean Scopes

Spring supports several scopes.

## Singleton

Default.

```java
@Component
public class TaxService {
}
```

There is normally one instance per bean definition per Spring container.

Important:

> Spring singleton is not exactly the GoF global singleton pattern.

It is container-managed.

## Prototype

A new instance is created each time the container is asked for the bean.

```java
@Component
@Scope("prototype")
public class ReportJob {
}
```

## Request

One bean per HTTP request.

```java
@Component
@RequestScope
public class RequestMetadata {
}
```

## Session

One bean per HTTP session.

```java
@Component
@SessionScope
public class ShoppingCart {
}
```

## Application

One bean per `ServletContext`.

```java
@Component
@ApplicationScope
public class GlobalStatistics {
}
```

## WebSocket

One bean per WebSocket lifecycle.

## Scope Summary

| Scope | Lifetime |
|---|---|
| singleton | Spring container |
| prototype | each lookup/request from container |
| request | HTTP request |
| session | HTTP session |
| application | ServletContext |
| websocket | WebSocket |

## Important Prototype Trap

Suppose a singleton receives a prototype directly:

```java
@Service
public class JobRunner {

    private final ReportJob reportJob;

    public JobRunner(ReportJob reportJob) {
        this.reportJob = reportJob;
    }
}
```

The prototype is injected when the singleton is created.

You do **not** get a new `ReportJob` on every method call.

If a fresh instance is needed:

```java
@Service
public class JobRunner {

    private final ObjectProvider<ReportJob> provider;

    public JobRunner(ObjectProvider<ReportJob> provider) {
        this.provider = provider;
    }

    public void run() {
        ReportJob job = provider.getObject();
    }
}
```

---

# 16. Bean Lifecycle

A simplified Spring bean lifecycle:

```text
1. Bean definition discovered
2. Object instantiated
3. Dependencies populated
4. Aware callbacks
5. BeanPostProcessor before initialization
6. @PostConstruct
7. InitializingBean.afterPropertiesSet()
8. custom init method
9. BeanPostProcessor after initialization
10. Bean ready for use

Container shutdown:

11. @PreDestroy
12. DisposableBean.destroy()
13. custom destroy method
```

## `@PostConstruct`

```java
@Component
public class CacheLoader {

    @PostConstruct
    public void load() {
        System.out.println("Loading cache");
    }
}
```

## `@PreDestroy`

```java
@PreDestroy
public void cleanup() {
    System.out.println("Cleaning resources");
}
```

## `@Bean` init/destroy

```java
@Bean(
    initMethod = "connect",
    destroyMethod = "disconnect"
)
public LegacyClient legacyClient() {
    return new LegacyClient();
}
```

## `InitializingBean`

```java
public class MyBean implements InitializingBean {

    @Override
    public void afterPropertiesSet() {
    }
}
```

Generally, application code often prefers `@PostConstruct` over directly implementing Spring lifecycle interfaces because it is less coupled to Spring.

---

# 17. Lazy Initialization and Bean Creation Control

By default, singleton beans are generally created eagerly when the `ApplicationContext` starts.

Use `@Lazy`:

```java
@Component
@Lazy
public class HeavyReportEngine {
}
```

The bean is created when first needed.

You can also use:

```java
@Bean
@Lazy
public HeavyClient heavyClient() {
    return new HeavyClient();
}
```

## When lazy initialization is useful

- expensive initialization.
- rarely used integration.
- optional feature.
- startup optimization.

## Trade-off

Lazy initialization can move failures from startup time to runtime.

For critical dependencies, early failure is often better.

---

# 18. BeanFactory vs ApplicationContext

`BeanFactory` is the basic IoC container abstraction.

`ApplicationContext` builds on it and adds richer application features.

Think:

```text
BeanFactory
   ↓
Basic bean creation and dependency management

ApplicationContext
   ↓
BeanFactory capabilities
+ events
+ resources
+ i18n
+ environment
+ annotation support
+ integration infrastructure
```

Most application code should use `ApplicationContext`.

---

# 19. Container Extension Points

Spring is highly extensible.

Important extension interfaces include:

- `BeanPostProcessor`
- `BeanFactoryPostProcessor`
- `BeanDefinitionRegistryPostProcessor`

## BeanPostProcessor

Works with bean instances.

```java
@Component
public class LoggingBeanPostProcessor
        implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(
            Object bean,
            String beanName) {

        System.out.println("Before init: " + beanName);
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(
            Object bean,
            String beanName) {

        return bean;
    }
}
```

Spring itself uses post-processors heavily.

For example, proxy creation for:

- AOP.
- transactions.
- async methods.
- caching.

## BeanFactoryPostProcessor

Works with bean definitions before ordinary bean instances are created.

Useful for:

- changing configuration metadata.
- custom property processing.
- framework infrastructure.

### Important distinction

```text
BeanFactoryPostProcessor -> modifies bean definitions

BeanPostProcessor        -> modifies/wraps bean instances
```

---

# 20. FactoryBean

`FactoryBean<T>` is a special Spring extension.

It allows a bean to act as a factory for another object.

```java
public class ClientFactoryBean
        implements FactoryBean<ApiClient> {

    @Override
    public ApiClient getObject() {
        return new ApiClient("https://api.example.com");
    }

    @Override
    public Class<?> getObjectType() {
        return ApiClient.class;
    }
}
```

When registered, asking for the bean normally returns the produced `ApiClient`.

To get the factory itself, Spring conventionally uses the `&` prefix in bean lookup.

Do not confuse:

```text
FactoryBean
```

with:

```text
BeanFactory
```

They are completely different concepts.

---

# 21. Environment, Properties, Profiles, and Configuration

Applications should externalize environment-specific settings.

## `Environment`

```java
@Component
public class AppInfo {

    private final Environment environment;

    public AppInfo(Environment environment) {
        this.environment = environment;
    }

    public void print() {
        String url = environment.getProperty("api.url");
        System.out.println(url);
    }
}
```

## `@PropertySource`

```java
@Configuration
@PropertySource("classpath:application.properties")
public class AppConfig {
}
```

Example file:

```properties
api.url=https://api.example.com
api.timeout=5000
```

## `@Value`

```java
@Component
public class ApiClient {

    @Value("${api.url}")
    private String apiUrl;
}
```

With default:

```java
@Value("${api.timeout:3000}")
private int timeout;
```

## Profiles

Different environments often require different beans.

```java
@Configuration
@Profile("dev")
public class DevConfig {
}
```

```java
@Configuration
@Profile("prod")
public class ProdConfig {
}
```

Activate:

```java
context.getEnvironment()
       .setActiveProfiles("dev");
```

before refreshing the context.

### Scenario

Development:

```text
FakePaymentGateway
```

Production:

```text
RealPaymentGateway
```

Example:

```java
@Component
@Profile("dev")
public class FakePaymentGateway
        implements PaymentGateway {
}
```

```java
@Component
@Profile("prod")
public class RealPaymentGateway
        implements PaymentGateway {
}
```

---

# 22. Spring Resource Abstraction

Spring's `Resource` abstraction provides a uniform way to work with resources.

Common implementations include:

- `ClassPathResource`.
- `FileSystemResource`.
- `UrlResource`.
- servlet context resources.

Example:

```java
Resource resource =
        new ClassPathResource("templates/invoice.txt");

try (InputStream input = resource.getInputStream()) {
    // read resource
}
```

Injecting:

```java
@Value("classpath:templates/email.txt")
private Resource template;
```

Why it matters:

Your business code does not need separate loading logic for every source type.

---

# 23. Application Events

Spring supports in-process application events.

## Create event

```java
public record OrderPlacedEvent(
        long orderId,
        String email) {
}
```

## Publish

```java
@Service
public class OrderService {

    private final ApplicationEventPublisher publisher;

    public OrderService(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    public void placeOrder() {

        long orderId = 101;

        // save order...

        publisher.publishEvent(
            new OrderPlacedEvent(orderId, "user@example.com")
        );
    }
}
```

## Listen

```java
@Component
public class EmailListener {

    @EventListener
    public void handle(OrderPlacedEvent event) {
        System.out.println(
            "Send email for order " + event.orderId()
        );
    }
}
```

## Asynchronous Event Listener

With async support configured:

```java
@Async
@EventListener
public void handle(OrderPlacedEvent event) {
}
```

### When to use application events

Good for:

- decoupling modules inside one application.
- audit hooks.
- post-processing.
- notifications.
- domain-event style collaboration.

Do not confuse Spring application events with durable message brokers.

If the process crashes, an in-memory event is not automatically durable.

---

# 24. Internationalization - i18n

Spring provides message resolution.

Example property files:

```text
messages.properties
messages_fr.properties
messages_hi.properties
```

`messages.properties`:

```properties
welcome=Welcome
invoice.saved=Invoice saved successfully
```

Configuration:

```java
@Bean
public MessageSource messageSource() {

    ResourceBundleMessageSource source =
            new ResourceBundleMessageSource();

    source.setBasename("messages");
    source.setDefaultEncoding("UTF-8");

    return source;
}
```

Use:

```java
String message = messageSource.getMessage(
        "welcome",
        null,
        Locale.ENGLISH
);
```

Useful for:

- multilingual UI.
- validation messages.
- localized notifications.

---

# 25. Type Conversion and Formatting

Web requests contain strings.

Your Java objects may need:

- integers.
- dates.
- money.
- enums.
- custom IDs.

Spring provides:

- `Converter`.
- `ConverterFactory`.
- `GenericConverter`.
- `Formatter`.

## Custom Converter

```java
public record OrderId(long value) {
}
```

```java
@Component
public class StringToOrderIdConverter
        implements Converter<String, OrderId> {

    @Override
    public OrderId convert(String source) {
        return new OrderId(Long.parseLong(source));
    }
}
```

Now Spring can convert request values into `OrderId` where conversion infrastructure is active.

## Formatting

```java
public class DateFormatter
        implements Formatter<LocalDate> {

    @Override
    public LocalDate parse(
            String text,
            Locale locale) {

        return LocalDate.parse(text);
    }

    @Override
    public String print(
            LocalDate object,
            Locale locale) {

        return object.toString();
    }
}
```

---

# 26. Validation and Data Binding

Spring integrates with Jakarta Bean Validation.

Example DTO:

```java
public record CreateUserRequest(

    @NotBlank
    String name,

    @Email
    String email,

    @Min(18)
    int age
) {
}
```

Controller:

```java
@PostMapping("/users")
public ResponseEntity<Void> create(
        @Valid @RequestBody CreateUserRequest request) {

    return ResponseEntity.ok().build();
}
```

## Spring Validator

You can create custom validation independent of Bean Validation.

```java
@Component
public class OrderValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return Order.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(
            Object target,
            Errors errors) {

        Order order = (Order) target;

        if (order.total() < 0) {
            errors.rejectValue(
                "total",
                "negative",
                "Total cannot be negative"
            );
        }
    }
}
```

## Data Binding

Spring can bind incoming values to object properties.

The key class is:

```text
DataBinder
```

In MVC, much of this is handled automatically.

### Security Note

Never blindly expose sensitive internal fields for binding.

For browser forms or public APIs, prefer explicit DTOs rather than binding directly to persistence entities.

---

# 27. Spring Expression Language - SpEL

Spring Expression Language supports expressions such as:

```text
#{...}
```

Examples:

```java
@Value("#{2 * 10}")
private int value;
```

```java
@Value("#{systemProperties['user.home']}")
private String home;
```

Referencing another bean:

```java
@Value("#{priceService.defaultPrice}")
private BigDecimal price;
```

SpEL appears in features such as:

- `@Value`.
- caching expressions.
- security expressions in Spring Security.
- conditional infrastructure.

## SpEL vs Property Placeholder

Property placeholder:

```java
@Value("${api.url}")
```

SpEL:

```java
@Value("#{2 + 2}")
```

Think:

```text
${...} -> configuration property

#{...} -> expression evaluation
```

Avoid unnecessarily complex business rules in annotation expressions.

---

# 28. Aspect-Oriented Programming - AOP

Some behavior affects many parts of an application:

- logging.
- metrics.
- authorization.
- transactions.
- caching.
- auditing.

These are called **cross-cutting concerns**.

Instead of duplicating logic everywhere, AOP can apply it around selected method executions.

## Terminology

### Aspect

Module containing cross-cutting behavior.

### Join point

A point during execution.

In Spring AOP, practical join points are method executions on Spring-managed beans.

### Pointcut

Rule describing which join points to intercept.

### Advice

What to execute.

Types include:

- before.
- after returning.
- after throwing.
- after finally.
- around.

## Example Aspect

```java
@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.example.service.*.*(..))")
    public void beforeServiceMethod() {
        System.out.println("Service called");
    }
}
```

## Around Advice

```java
@Around("execution(* com.example.service.*.*(..))")
public Object measure(ProceedingJoinPoint joinPoint)
        throws Throwable {

    long start = System.nanoTime();

    try {
        return joinPoint.proceed();
    } finally {
        long elapsed = System.nanoTime() - start;
        System.out.println(
            joinPoint.getSignature()
            + " took "
            + elapsed
        );
    }
}
```

## Enable AspectJ-style Spring AOP

```java
@Configuration
@EnableAspectJAutoProxy
public class AopConfig {
}
```

---

# 29. Proxy Fundamentals and the Self-Invocation Problem

Spring AOP commonly works using proxies.

Conceptually:

```text
Caller
  |
  v
Spring Proxy
  |
  +---- logging
  +---- transaction
  +---- security
  |
  v
Real Service
```

Two broad proxy styles are encountered:

- JDK interface-based proxies.
- class-based proxies.

## Critical self-invocation issue

Consider:

```java
@Service
public class PaymentService {

    public void process() {
        saveTransaction();
    }

    @Transactional
    public void saveTransaction() {
        // DB work
    }
}
```

The call:

```java
process() -> this.saveTransaction()
```

happens inside the same object.

It may bypass the Spring proxy.

Therefore transaction/AOP advice may not run as expected.

### Better design

Move the transactional operation to another Spring bean:

```java
@Service
public class TransactionWriter {

    @Transactional
    public void saveTransaction() {
    }
}
```

```java
@Service
public class PaymentService {

    private final TransactionWriter writer;

    public PaymentService(TransactionWriter writer) {
        this.writer = writer;
    }

    public void process() {
        writer.saveTransaction();
    }
}
```

This proxy concept is one of the most important things to understand in Spring.

---

# 30. Transaction Management

A transaction groups database work into an atomic unit.

Example:

```text
Debit Account A
Credit Account B
```

If credit fails after debit, you normally want debit rolled back.

Spring provides a transaction abstraction that works across technologies such as:

- JDBC.
- JPA.
- Hibernate integration.
- JTA.

## Declarative Transaction

```java
@Service
public class TransferService {

    @Transactional
    public void transfer(
            long from,
            long to,
            BigDecimal amount) {

        accountRepository.debit(from, amount);
        accountRepository.credit(to, amount);
    }
}
```

Spring manages:

```text
begin
  ↓
method
  ↓
commit
```

On appropriate failure:

```text
begin
  ↓
method throws
  ↓
rollback
```

## Default rollback behavior

Commonly, unchecked exceptions cause rollback by default.

You can configure rollback behavior.

```java
@Transactional(rollbackFor = Exception.class)
public void importFile() throws Exception {
}
```

## Read-only hint

```java
@Transactional(readOnly = true)
public Invoice find(long id) {
    return repository.find(id);
}
```

`readOnly` is a transaction hint; exact effects depend on the underlying technology/database.

## Timeout

```java
@Transactional(timeout = 10)
public void process() {
}
```

## Transaction manager

Spring uses a `PlatformTransactionManager` abstraction for imperative transaction management.

Reactive applications use reactive transaction infrastructure.

---

# 31. Transaction Propagation

Propagation answers:

> What should happen if a transactional method calls another transactional method?

Important values:

| Propagation | Meaning |
|---|---|
| `REQUIRED` | Join existing transaction; otherwise create one |
| `REQUIRES_NEW` | Suspend existing and create a new transaction |
| `SUPPORTS` | Join if one exists; otherwise run without |
| `NOT_SUPPORTED` | Run without a transaction |
| `MANDATORY` | Existing transaction required |
| `NEVER` | Must run without transaction |
| `NESTED` | Nested behavior/savepoint semantics when supported |

## `REQUIRED`

Default.

```java
@Transactional
public void createOrder() {
    inventoryService.reserve();
}
```

If both participate with `REQUIRED`, they normally share one transaction.

## `REQUIRES_NEW`

Example audit record that should commit independently:

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void writeAudit() {
}
```

Be careful: independent transactions can create surprising consistency behavior.

## `MANDATORY`

Useful when a method must never run outside an existing transaction.

```java
@Transactional(propagation = Propagation.MANDATORY)
public void updateLedger() {
}
```

---

# 32. Transaction Isolation

Isolation deals with how concurrent transactions see data.

Common levels:

- `READ_UNCOMMITTED`
- `READ_COMMITTED`
- `REPEATABLE_READ`
- `SERIALIZABLE`

and database default.

Example:

```java
@Transactional(
    isolation = Isolation.REPEATABLE_READ
)
public void generateStatement() {
}
```

Typical concurrency phenomena:

- dirty read.
- non-repeatable read.
- phantom read.

Do not select the highest isolation blindly.

Higher isolation can reduce concurrency and throughput.

Choose based on business consistency requirements and your database behavior.

---

# 33. Programmatic Transactions

Declarative `@Transactional` is usually preferred.

Sometimes explicit control is useful.

`TransactionTemplate` example:

```java
@Service
public class ImportService {

    private final TransactionTemplate transactionTemplate;

    public ImportService(
            PlatformTransactionManager txManager) {

        this.transactionTemplate =
                new TransactionTemplate(txManager);
    }

    public void importRow() {

        transactionTemplate.execute(status -> {

            // database operations

            return null;
        });
    }
}
```

Use programmatic transactions when transaction boundaries must be dynamically controlled by code.

---

# 34. Spring JDBC

Raw JDBC involves repetitive code:

```text
open connection
prepare statement
bind values
execute
iterate result
translate SQL exceptions
close resources
```

Spring's JDBC support removes much of this boilerplate.

## JdbcTemplate

```java
@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int count() {
        return jdbcTemplate.queryForObject(
            "select count(*) from users",
            Integer.class
        );
    }
}
```

## Insert

```java
public int save(User user) {

    return jdbcTemplate.update(
        """
        insert into users(name, email)
        values (?, ?)
        """,
        user.name(),
        user.email()
    );
}
```

## Query with RowMapper

```java
public List<User> findAll() {

    return jdbcTemplate.query(
        """
        select id, name, email
        from users
        order by id
        """,
        (rs, rowNum) -> new User(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email")
        )
    );
}
```

## Reusable RowMapper

```java
public class UserRowMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rowNum)
            throws SQLException {

        return new User(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email")
        );
    }
}
```

---

# 35. NamedParameterJdbcTemplate

Named parameters improve readability.

Instead of:

```sql
where company_id = ?
and status = ?
```

you can write:

```sql
where company_id = :companyId
and status = :status
```

Example:

```java
@Repository
public class InvoiceRepository {

    private final NamedParameterJdbcTemplate jdbc;

    public InvoiceRepository(
            NamedParameterJdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Invoice> find(
            long companyId,
            String status) {

        String sql = """
            select id, invoice_no, status
            from invoice
            where company_id = :companyId
              and status = :status
            """;

        MapSqlParameterSource params =
                new MapSqlParameterSource()
                    .addValue("companyId", companyId)
                    .addValue("status", status);

        return jdbc.query(
            sql,
            params,
            (rs, rowNum) -> new Invoice(
                rs.getLong("id"),
                rs.getString("invoice_no"),
                rs.getString("status")
            )
        );
    }
}
```

---

# 36. JDBC Batch Operations

If you repeatedly execute the same statement, batching can reduce database round trips.

```java
jdbcTemplate.batchUpdate(
    """
    insert into audit_log(entity_id, action)
    values (?, ?)
    """,
    entries,
    100,
    (ps, entry) -> {
        ps.setLong(1, entry.entityId());
        ps.setString(2, entry.action());
    }
);
```

Good scenarios:

- bulk imports.
- migration scripts.
- nightly synchronization.
- large updates.

Always measure with the actual database driver and production-like data.

---

# 37. DAO Exception Translation

Spring provides a consistent data-access exception hierarchy.

Instead of forcing business code to deal directly with vendor-specific SQL exceptions, Spring can translate them into exceptions under:

```text
DataAccessException
```

Examples include categories such as:

- duplicate key.
- incorrect result size.
- data integrity violation.
- resource failure.

This makes the data-access layer less tightly coupled to vendor exception APIs.

---

# 38. JPA and Hibernate Integration

Spring Framework integrates with JPA and Hibernate.

Spring provides infrastructure around:

- persistence context lifecycle.
- `EntityManager`.
- transaction management.
- exception translation.
- ORM resource management.

Important distinction:

```text
Spring ORM/JPA integration != Spring Data JPA
```

Spring Data JPA adds repository abstractions such as:

```java
interface UserRepository
        extends JpaRepository<User, Long> {
}
```

That belongs to the separate Spring Data project.

## JPA Service Example

```java
@Service
public class CustomerService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void create(Customer customer) {
        entityManager.persist(customer);
    }
}
```

For new application design, constructor-oriented dependencies are preferred where the API/configuration allows.

---

# 39. Spring MVC Fundamentals

Spring MVC is the servlet-based web framework in Spring Framework.

It uses the Front Controller pattern.

The central servlet is:

```text
DispatcherServlet
```

Spring MVC supports:

- annotated controllers.
- REST APIs.
- HTML views.
- validation.
- data binding.
- multipart upload.
- exception handling.
- asynchronous requests.
- filters and interceptors.
- content negotiation.
- static resources.
- WebSocket integration.

---

# 40. DispatcherServlet Request Flow

Simplified MVC request lifecycle:

```text
Browser / Client
      |
      v
Servlet Container
      |
      v
Filters
      |
      v
DispatcherServlet
      |
      v
HandlerMapping
      |
      v
HandlerAdapter
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
Controller result
      |
      +--> HttpMessageConverter -> JSON/XML/etc.
      |
      or
      |
      +--> ViewResolver -> HTML View
      |
      v
HTTP Response
```

The `DispatcherServlet` coordinates request processing rather than containing all application behavior itself.

---

# 41. Spring MVC Controllers

## Basic Controller

```java
@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {

        model.addAttribute(
            "message",
            "Welcome"
        );

        return "home";
    }
}
```

This usually returns a logical view name.

## REST Controller

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public UserResponse find(
            @PathVariable long id) {

        return new UserResponse(
            id,
            "Asha"
        );
    }
}
```

Spring serializes the return value through an appropriate HTTP message converter.

---

# 42. Request Mapping

## GET

```java
@GetMapping("/users")
```

## POST

```java
@PostMapping("/users")
```

## PUT

```java
@PutMapping("/users/{id}")
```

## PATCH

```java
@PatchMapping("/users/{id}")
```

## DELETE

```java
@DeleteMapping("/users/{id}")
```

## Generic mapping

```java
@RequestMapping(
    path = "/reports",
    method = RequestMethod.GET
)
```

## Content type

```java
@PostMapping(
    value = "/users",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE
)
```

---

# 43. Binding Request Data

## Path Variable

URL:

```text
/orders/100
```

Controller:

```java
@GetMapping("/orders/{id}")
public OrderResponse find(
        @PathVariable long id) {
}
```

## Request Parameter

URL:

```text
/orders?status=APPROVED
```

```java
@GetMapping("/orders")
public List<OrderResponse> find(
        @RequestParam String status) {
}
```

Optional/default:

```java
@RequestParam(
    defaultValue = "0"
) int page
```

## Request Body

```java
@PostMapping("/orders")
public void create(
        @RequestBody CreateOrderRequest request) {
}
```

## Request Header

```java
@GetMapping("/profile")
public ProfileResponse profile(
        @RequestHeader("X-Tenant-Id")
        String tenantId) {
}
```

## Cookie

```java
@GetMapping("/theme")
public String theme(
        @CookieValue("theme")
        String theme) {

    return theme;
}
```

## Model Attribute

Useful for HTML form binding.

```java
@PostMapping("/register")
public String register(
        @ModelAttribute RegistrationForm form) {
}
```

---

# 44. Returning Responses

## Plain object

```java
@GetMapping("/{id}")
public UserResponse find(
        @PathVariable long id) {

    return service.find(id);
}
```

## ResponseEntity

```java
@GetMapping("/{id}")
public ResponseEntity<UserResponse> find(
        @PathVariable long id) {

    return ResponseEntity.ok(
        service.find(id)
    );
}
```

## Created response

```java
@PostMapping
public ResponseEntity<UserResponse> create(
        @RequestBody CreateUserRequest request) {

    UserResponse created = service.create(request);

    URI location = URI.create(
        "/api/users/" + created.id()
    );

    return ResponseEntity
            .created(location)
            .body(created);
}
```

## No content

```java
@DeleteMapping("/{id}")
public ResponseEntity<Void> delete(
        @PathVariable long id) {

    service.delete(id);

    return ResponseEntity.noContent().build();
}
```

---

# 45. REST API Design with Spring MVC

A clean controller should focus on HTTP concerns.

Example:

```java
@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(
            InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @PostMapping
    public ResponseEntity<InvoiceResponse> create(
            @Valid
            @RequestBody
            CreateInvoiceRequest request) {

        InvoiceResponse response =
                invoiceService.create(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
```

Business rules belong in the service.

```java
@Service
public class InvoiceService {

    @Transactional
    public InvoiceResponse create(
            CreateInvoiceRequest request) {

        // validation/business rules
        // calculate totals
        // save invoice
        // publish event

        return response;
    }
}
```

Avoid:

```text
Controller:
- SQL
- huge business rules
- transaction orchestration
- file parsing details
- external system rules
```

---

# 46. Validation in REST APIs

DTO:

```java
public record CreateInvoiceRequest(

    @NotBlank
    String invoiceNumber,

    @NotNull
    @Positive
    BigDecimal amount,

    @NotBlank
    String vendorCode

) {
}
```

Controller:

```java
@PostMapping
public ResponseEntity<Void> create(
        @Valid
        @RequestBody CreateInvoiceRequest request) {

    service.create(request);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .build();
}
```

## Nested validation

```java
public record CreateOrderRequest(

    @NotEmpty
    List<@Valid OrderItemRequest> items

) {
}
```

## Method validation

Spring can apply validation to service method parameters where method-validation infrastructure is enabled.

Example conceptual use:

```java
@Validated
@Service
public class PricingService {

    public BigDecimal calculate(
            @Positive BigDecimal amount) {
        return amount;
    }
}
```

---

# 47. Exception Handling

## Local handler

```java
@ExceptionHandler(OrderNotFoundException.class)
public ResponseEntity<String> handle(
        OrderNotFoundException ex) {

    return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(ex.getMessage());
}
```

## Global handler

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(OrderNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(
            OrderNotFoundException ex) {

        ApiError error =
                new ApiError(
                    "ORDER_NOT_FOUND",
                    ex.getMessage()
                );

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(error);
    }
}
```

## ProblemDetail

Modern Spring MVC supports RFC-style problem details.

Example:

```java
@ExceptionHandler(OrderNotFoundException.class)
public ProblemDetail handle(
        OrderNotFoundException ex) {

    ProblemDetail problem =
            ProblemDetail.forStatus(
                HttpStatus.NOT_FOUND
            );

    problem.setTitle("Order not found");
    problem.setDetail(ex.getMessage());

    return problem;
}
```

A consistent error format improves frontend and client integration.

---

# 48. Filters, Interceptors, and Controller Advice

These are often confused.

## Servlet Filter

Runs at servlet/filter-chain level.

Good for:

- correlation ID.
- request logging.
- security infrastructure.
- encoding.
- low-level request/response wrapping.

Conceptual:

```java
public class CorrelationIdFilter
        extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String id = UUID.randomUUID().toString();

        response.setHeader(
            "X-Correlation-Id",
            id
        );

        filterChain.doFilter(
            request,
            response
        );
    }
}
```

## HandlerInterceptor

Spring MVC-specific.

```java
public class AuditInterceptor
        implements HandlerInterceptor {

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler) {

        return true;
    }
}
```

Useful when you need access to the selected MVC handler.

## Controller Advice

Cross-controller logic.

Good for:

- exception handlers.
- binder configuration.
- model attributes.

### Quick Decision

```text
Need low-level request chain?
    -> Filter

Need selected controller/handler?
    -> Interceptor

Need controller-wide exception/binding behavior?
    -> ControllerAdvice
```

---

# 49. Multipart File Upload

Controller:

```java
@PostMapping(
    value = "/upload",
    consumes = MediaType.MULTIPART_FORM_DATA_VALUE
)
public ResponseEntity<Void> upload(
        @RequestParam("file")
        MultipartFile file)
        throws IOException {

    if (file.isEmpty()) {
        return ResponseEntity.badRequest().build();
    }

    byte[] bytes = file.getBytes();

    // validate
    // scan
    // store

    return ResponseEntity.ok().build();
}
```

Production concerns:

- maximum upload size.
- filename sanitization.
- MIME/content validation.
- malware scanning.
- streaming large files.
- avoid trusting `getOriginalFilename()`.
- storage permissions.
- temporary-file cleanup.

---

# 50. CORS

CORS controls which browser origins can call your application.

Controller example:

```java
@CrossOrigin(
    origins = "https://app.example.com"
)
@RestController
public class ApiController {
}
```

Global MVC configuration:

```java
@Configuration
@EnableWebMvc
public class WebConfig
        implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(
            CorsRegistry registry) {

        registry.addMapping("/api/**")
                .allowedOrigins(
                    "https://app.example.com"
                )
                .allowedMethods(
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                );
    }
}
```

Do not casually use:

```text
allowedOrigins("*")
```

with sensitive authenticated APIs.

CORS is a browser access policy, not a replacement for authentication or authorization.

---

# 51. MVC Views, JSP, Thymeleaf, and Static Resources

Spring MVC can return server-rendered views.

Example:

```java
@GetMapping("/invoice/{id}")
public String invoice(
        @PathVariable long id,
        Model model) {

    model.addAttribute(
        "invoice",
        service.find(id)
    );

    return "invoice";
}
```

A configured view resolver converts:

```text
"invoice"
```

into a template/view resource.

Possible view technologies include:

- JSP.
- Thymeleaf integration.
- FreeMarker.
- others.

## JSP Example Concept

```text
/WEB-INF/views/invoice.jsp
```

A view resolver may apply:

```text
prefix = /WEB-INF/views/
suffix = .jsp
```

so:

```text
invoice
```

becomes:

```text
/WEB-INF/views/invoice.jsp
```

## Static Resources

Spring MVC can also serve static resources through resource handling configuration.

Examples:

- CSS.
- JavaScript.
- images.
- downloadable assets.

---

# 52. Asynchronous Spring MVC

Servlet-based MVC can support asynchronous request handling.

Examples of return types/patterns include:

- `Callable`.
- `DeferredResult`.
- reactive types in supported controller scenarios.

Example:

```java
@GetMapping("/slow")
public Callable<String> slow() {

    return () -> {
        Thread.sleep(1000);
        return "done";
    };
}
```

This is not the same architecture as WebFlux.

MVC remains servlet-based even when asynchronous features are used.

---

# 53. WebSocket, SockJS, and STOMP

HTTP is request/response.

WebSocket supports full-duplex communication.

Good use cases:

- chat.
- live dashboard.
- live status.
- collaborative editing.
- notifications.
- monitoring.

Spring supports WebSocket and messaging abstractions.

STOMP gives a messaging protocol model over WebSocket.

Conceptual configuration:

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig
        implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(
            MessageBrokerRegistry registry) {

        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(
            StompEndpointRegistry registry) {

        registry.addEndpoint("/ws");
    }
}
```

Controller:

```java
@Controller
public class ChatController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public ChatMessage send(
            ChatMessage message) {

        return message;
    }
}
```

For production scale, understand broker choice, sessions, clustering, authentication, and message delivery guarantees.

---

# 54. Spring WebFlux

Spring WebFlux is Spring's reactive web stack.

Characteristics:

- non-blocking model.
- Reactive Streams support.
- backpressure.
- works with reactive runtimes such as Netty.
- supports annotated controllers.
- supports functional endpoints.
- integrates with Reactor.

Use WebFlux when the application genuinely benefits from reactive/non-blocking I/O.

Examples:

- very high concurrency with I/O-heavy work.
- streaming.
- reactive databases.
- many external reactive HTTP calls.
- server-sent event pipelines.

Do not use WebFlux only because it sounds newer.

If your application uses blocking JDBC and many blocking libraries, traditional MVC may be simpler.

---

# 55. Mono, Flux, and Reactive Thinking

Project Reactor provides two core types commonly used with WebFlux.

## Mono

Zero or one value.

```java
Mono<User>
```

Think:

```text
eventually 0..1 User
```

## Flux

Zero to many values.

```java
Flux<User>
```

Think:

```text
stream of 0..N Users
```

Example:

```java
Mono<User> user =
        repository.findById(id);
```

Transform:

```java
Mono<UserResponse> response =
        user.map(UserResponse::from);
```

Flat map:

```java
Mono<Order> order =
        user.flatMap(
            u -> orderService.create(u)
        );
```

## Blocking danger

Avoid:

```java
user.block();
```

inside a reactive request path unless you specifically understand the consequences and boundary.

Blocking an event-loop thread defeats the benefits of reactive execution.

---

# 56. WebFlux Controllers

Annotated WebFlux controllers look similar to MVC.

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(
            ProductService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Mono<ProductResponse> find(
            @PathVariable String id) {

        return service.find(id);
    }

    @GetMapping
    public Flux<ProductResponse> all() {
        return service.findAll();
    }
}
```

The similarity is intentional.

However, the execution/runtime model can be very different.

---

# 57. Functional Web Endpoints

Spring's web stacks also support functional endpoint styles.

Reactive example:

```java
@Bean
RouterFunction<ServerResponse> routes(
        ProductHandler handler) {

    return RouterFunctions.route()
        .GET("/products/{id}", handler::find)
        .POST("/products", handler::create)
        .build();
}
```

Handler:

```java
@Component
public class ProductHandler {

    public Mono<ServerResponse> find(
            ServerRequest request) {

        String id =
                request.pathVariable("id");

        return ServerResponse.ok()
                .bodyValue(
                    Map.of("id", id)
                );
    }
}
```

Use annotated or functional styles based on team needs and architecture.

---

# 58. REST Clients

Spring Framework provides several HTTP client approaches.

Modern choices include:

```text
RestClient
    -> synchronous/fluent

WebClient
    -> reactive/non-blocking

HTTP Service Clients
    -> declarative annotated interface

RestTemplate
    -> older synchronous template API
```

In Spring Framework 7, `RestTemplate` is deprecated in favor of `RestClient`.

For new blocking code, prefer `RestClient`.

For reactive/streaming scenarios, consider `WebClient`.

---

# 59. RestClient

Create:

```java
RestClient client =
        RestClient.builder()
            .baseUrl(
                "https://api.example.com"
            )
            .build();
```

GET:

```java
UserResponse user =
        client.get()
            .uri("/users/{id}", 10)
            .retrieve()
            .body(UserResponse.class);
```

POST:

```java
OrderResponse order =
        client.post()
            .uri("/orders")
            .contentType(
                MediaType.APPLICATION_JSON
            )
            .body(request)
            .retrieve()
            .body(OrderResponse.class);
```

## Handle status

```java
client.get()
    .uri("/users/{id}", id)
    .retrieve()
    .onStatus(
        status -> status.value() == 404,
        (request, response) -> {
            throw new UserNotFoundException(id);
        }
    )
    .body(UserResponse.class);
```

Production concerns:

- connection pooling.
- connect timeout.
- read timeout.
- authentication.
- retries.
- idempotency.
- observability.
- error mapping.

---

# 60. WebClient

Create:

```java
WebClient client =
        WebClient.builder()
            .baseUrl(
                "https://api.example.com"
            )
            .build();
```

GET:

```java
Mono<UserResponse> result =
        client.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(UserResponse.class);
```

List/stream:

```java
Flux<ProductResponse> products =
        client.get()
            .uri("/products")
            .retrieve()
            .bodyToFlux(ProductResponse.class);
```

POST:

```java
Mono<OrderResponse> order =
        client.post()
            .uri("/orders")
            .bodyValue(request)
            .retrieve()
            .bodyToMono(OrderResponse.class);
```

Use reactive composition rather than blocking in reactive pipelines.

---

# 61. HTTP Service Clients

Spring supports declarative HTTP service interfaces.

Conceptually:

```java
@HttpExchange("/users")
public interface UserApi {

    @GetExchange("/{id}")
    UserResponse find(
            @PathVariable long id);
}
```

A proxy implementation can be created using Spring HTTP client infrastructure.

This is useful when you want:

```text
Java interface
    ↓
HTTP client proxy
    ↓
remote REST endpoint
```

Benefits:

- concise client contract.
- easy reuse.
- clear method signatures.

Be careful not to hide important network behavior such as timeout, retry, or remote failure semantics.

---

# 62. Task Execution and @Async

Spring provides task executor abstractions.

Enable async:

```java
@Configuration
@EnableAsync
public class AsyncConfig {
}
```

Use:

```java
@Service
public class EmailService {

    @Async
    public void sendEmail(
            String email) {

        // send
    }
}
```

## Important proxy rule

Like transactions, `@Async` is commonly proxy-based.

Self-invocation can bypass it.

## Return types

Async methods can use supported future-like types where appropriate.

Example:

```java
@Async
public CompletableFuture<String> generate() {
    return CompletableFuture.completedFuture("done");
}
```

## Production Rule

Configure a bounded executor.

Do not assume an unlimited thread pool is safe.

Think about:

- core threads.
- max threads.
- queue capacity.
- rejection policy.
- task timeout.
- graceful shutdown.

---

# 63. Scheduling

Enable:

```java
@Configuration
@EnableScheduling
public class SchedulingConfig {
}
```

Fixed rate:

```java
@Scheduled(fixedRate = 60000)
public void refresh() {
}
```

Fixed delay:

```java
@Scheduled(fixedDelay = 60000)
public void cleanup() {
}
```

Cron:

```java
@Scheduled(cron = "0 0 9 * * MON-FRI")
public void weekdayJob() {
}
```

Externalized:

```java
@Scheduled(
    cron = "${jobs.invoice.cron}"
)
public void processInvoices() {
}
```

## Important distributed-system warning

If the same application runs on 4 server instances, a local scheduler may execute the job 4 times.

For clustered applications, consider:

- distributed locks.
- database coordination.
- a dedicated scheduler.
- message queues.
- external job orchestration.

depending on the requirement.

---

# 64. Caching

Enable caching:

```java
@Configuration
@EnableCaching
public class CacheConfig {
}
```

## `@Cacheable`

```java
@Cacheable(
    cacheNames = "products",
    key = "#id"
)
public Product find(long id) {
    return repository.find(id);
}
```

If key exists, Spring can skip method execution and return cached value.

## `@CachePut`

Always executes method and updates cache.

```java
@CachePut(
    cacheNames = "products",
    key = "#result.id"
)
public Product update(Product product) {
    return repository.update(product);
}
```

## `@CacheEvict`

```java
@CacheEvict(
    cacheNames = "products",
    key = "#id"
)
public void delete(long id) {
    repository.delete(id);
}
```

Evict all:

```java
@CacheEvict(
    cacheNames = "products",
    allEntries = true
)
public void resetCache() {
}
```

## Common cache mistakes

- caching mutable state blindly.
- no TTL strategy.
- stale data.
- wrong cache key.
- caching errors/null unexpectedly.
- assuming cache is source of truth.
- self-invocation bypassing proxy-based advice.

---

# 65. Email Integration

Spring provides mail support through abstractions such as `JavaMailSender`.

Conceptual example:

```java
@Service
public class NotificationMailService {

    private final JavaMailSender mailSender;

    public NotificationMailService(
            JavaMailSender mailSender) {

        this.mailSender = mailSender;
    }

    public void send(
            String to,
            String subject,
            String body) {

        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }
}
```

For real systems:

- use templates.
- retry temporary failures.
- avoid holding database transactions open while SMTP is slow.
- consider async or message-driven email.
- keep secrets outside source code.

---

# 66. JMS Messaging

Spring integrates with Java Message Service.

Important tools include:

- `JmsTemplate`.
- listener infrastructure.
- message conversion.

Send concept:

```java
jmsTemplate.convertAndSend(
    "invoice.queue",
    invoiceMessage
);
```

Receive concept:

```java
@JmsListener(
    destination = "invoice.queue"
)
public void process(
        InvoiceMessage message) {
}
```

Messaging is useful for:

- asynchronous workflows.
- decoupled services.
- buffering spikes.
- integration with enterprise brokers.

You still need to understand:

- acknowledgement.
- redelivery.
- duplicates.
- ordering.
- dead-letter queues.
- transactions.
- idempotency.

---

# 67. JMX

Spring provides JMX support for exposing managed application components.

JMX can be useful in certain enterprise environments for:

- management.
- monitoring.
- runtime operations.

Modern systems may more commonly use HTTP-based observability/management stacks, but JMX remains relevant in many JVM environments.

---

# 68. Observability

Modern Spring Framework includes observability support designed to integrate with observation/metrics/tracing ecosystems.

Observability typically involves:

```text
Metrics
Logs
Traces
```

A useful production request flow may include:

```text
Request
  |
  +-- correlation/trace ID
  |
  +-- timing
  |
  +-- database span
  |
  +-- external HTTP span
  |
  +-- status/error
```

Spring Boot often performs much of the practical observability configuration using Micrometer-related integrations.

At framework level, understand the concept rather than assuming logs alone are enough.

---

# 69. Testing Spring Applications

Tests fall into different categories.

## Pure Unit Test

No Spring container.

```java
class PriceServiceTest {

    @Test
    void calculatesTax() {

        TaxCalculator calculator =
                new FakeTaxCalculator();

        PriceService service =
                new PriceService(calculator);

        BigDecimal result =
                service.total(
                    new BigDecimal("100")
                );

        assertEquals(
            new BigDecimal("118"),
            result
        );
    }
}
```

This is fast.

Prefer it for pure business logic.

## Spring Integration Test

Loads Spring context when Spring behavior itself matters.

Examples:

- configuration wiring.
- transactions.
- MVC infrastructure.
- converters.
- repository integration.
- bean profiles.

Do not load the full application context for every tiny unit test.

---

# 70. Spring TestContext Framework

Example:

```java
@ExtendWith(SpringExtension.class)
@ContextConfiguration(
    classes = AppConfig.class
)
class OrderServiceIntegrationTest {

    @Autowired
    OrderService orderService;

    @Test
    void contextWiresService() {
        assertNotNull(orderService);
    }
}
```

Common testing annotations/concepts include:

- `@ContextConfiguration`.
- `@WebAppConfiguration`.
- `@ActiveProfiles`.
- `@TestPropertySource`.
- `@Sql`.
- `@DirtiesContext`.
- transaction-aware tests.

Spring caches test application contexts where possible to reduce repeated startup cost.

Avoid unnecessary `@DirtiesContext`, because it can defeat context caching.

---

# 71. MockMvc

`MockMvc` tests Spring MVC without requiring a real external HTTP server.

Example:

```java
mockMvc.perform(
        get("/api/users/10")
)
.andExpect(
        status().isOk()
)
.andExpect(
        jsonPath("$.id").value(10)
);
```

Controller test scenario:

```java
mockMvc.perform(
        post("/api/users")
            .contentType(
                MediaType.APPLICATION_JSON
            )
            .content("""
                {
                  "name": "Asha",
                  "email": "asha@example.com"
                }
                """)
)
.andExpect(
        status().isCreated()
);
```

Useful for verifying:

- mappings.
- JSON conversion.
- validation.
- status codes.
- exception handlers.
- headers.

---

# 72. WebTestClient

`WebTestClient` provides a fluent API for testing web endpoints and is especially natural in WebFlux scenarios.

Example:

```java
webTestClient.get()
    .uri("/api/products/1")
    .exchange()
    .expectStatus()
    .isOk()
    .expectBody()
    .jsonPath("$.id")
    .isEqualTo("1");
```

It can also be useful in selected MVC testing setups.

---

# 73. Transactional Tests

Spring's testing support can manage test transactions.

Example:

```java
@Transactional
@Test
void savesInvoice() {

    repository.save(invoice);

    assertTrue(
        repository.exists(invoice.id())
    );
}
```

Test-managed transactions commonly roll back after the test.

Be careful:

A test that always rolls back may hide problems that happen only on commit.

For some scenarios you need explicit commit-oriented integration tests.

Spring also provides utilities for interacting with test-managed transaction boundaries.

---

# 74. AOT and Native Images

AOT means Ahead-of-Time processing.

Spring supports AOT-related optimizations and native-image scenarios.

Why AOT/native can matter:

- faster startup.
- lower memory in some deployment profiles.
- serverless/container scenarios.

Challenges:

- reflection.
- dynamic proxies.
- classpath scanning.
- resources.
- serialization metadata.
- runtime-generated behavior.

Modern Spring can generate metadata/hints for many framework patterns.

When using native images, libraries that rely heavily on runtime reflection may need special handling.

Do not choose native images automatically; benchmark your actual workload.

---

# 75. Spring Framework vs Spring Boot

This deserves repeated emphasis.

## Plain Spring Framework

You may configure:

- dependencies.
- servlet registration.
- component scanning.
- message converters.
- data sources.
- transaction manager.
- task executor.
- JSON mapper.
- web server deployment.
- MVC configuration.

## Spring Boot

Boot often detects libraries and creates sensible defaults automatically.

Example:

Plain Spring:

```java
@Configuration
@EnableWebMvc
@ComponentScan("com.example")
public class WebConfig
        implements WebMvcConfigurer {
}
```

Spring Boot often handles equivalent infrastructure via auto-configuration.

### Mental model

Do not say:

> Spring Boot and Spring are competing frameworks.

Correct:

> Spring Boot is built on top of Spring Framework and simplifies application bootstrap/configuration.

---

# 76. Spring Security Integration Points

Spring Security is a separate Spring project.

It integrates deeply with Spring Framework and web infrastructure.

It handles:

- authentication.
- authorization.
- security filter chain.
- password storage.
- method security.
- CSRF.
- CORS interaction.
- OAuth2/OIDC.
- session security.
- security context.

A conceptual layered flow:

```text
HTTP Request
    |
Security Filter Chain
    |
Authentication / Authorization
    |
DispatcherServlet
    |
Controller
```

Do not implement security by merely checking:

```java
if (role.equals("ADMIN"))
```

inside random controllers.

Use a security framework and explicit authorization policy.

---

# 77. Spring Data Integration Points

Spring Data is a separate project.

It builds on Spring infrastructure such as:

- dependency injection.
- transactions.
- exception translation.
- repositories.
- conversion.

Spring Data projects include integrations for relational and NoSQL stores.

For JPA:

```java
public interface InvoiceRepository
        extends JpaRepository<Invoice, Long> {
}
```

Spring creates a repository implementation proxy.

But learning `JdbcTemplate`, transactions, JPA, and the container first helps you understand what Spring Data is automating.

---

# 78. Kotlin with Spring

Spring provides first-class Kotlin support.

Common Kotlin advantages:

- concise data classes.
- null-safety.
- extension functions.
- coroutines.
- expressive DSLs.

Example:

```kotlin
@Service
class GreetingService {

    fun greet(name: String): String =
        "Hello $name"
}
```

Constructor injection is concise:

```kotlin
@Service
class OrderService(
    private val repository: OrderRepository
)
```

When using Kotlin with Spring, understand:

- nullability.
- proxy/open-class concerns.
- Kotlin compiler plugins in some setups.
- coroutine integration.
- Reactor interop.

---

# 79. Recommended Application Architecture

A common layered architecture:

```text
Controller
   |
   v
Application / Service
   |
   v
Domain Logic
   |
   v
Repository / Gateway
   |
   v
Database / External System
```

Example packages:

```text
com.example.invoice
├── api
│   ├── InvoiceController
│   ├── CreateInvoiceRequest
│   └── InvoiceResponse
│
├── application
│   └── InvoiceService
│
├── domain
│   ├── Invoice
│   └── InvoiceStatus
│
├── persistence
│   └── JdbcInvoiceRepository
│
├── integration
│   └── SapClient
│
└── config
    └── InvoiceConfig
```

## Responsibilities

### Controller

- HTTP.
- status codes.
- request/response DTOs.
- input validation entry point.

### Service

- use-case orchestration.
- transaction boundary.
- business workflow.

### Domain

- core rules.
- state.
- invariants.

### Repository

- persistence abstraction.

### Integration/Gateway

- external systems.

---

# 80. Real-World Scenario: Order Processing

Requirement:

1. receive order.
2. validate request.
3. reserve inventory.
4. save order.
5. charge payment.
6. publish event.
7. send notification.

Controller:

```java
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService service;

    public OrderController(
            OrderService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<OrderResponse> create(
            @Valid
            @RequestBody CreateOrderRequest request) {

        OrderResponse response =
                service.create(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
```

Service:

```java
@Service
public class OrderService {

    private final OrderRepository repository;
    private final InventoryService inventory;
    private final PaymentGateway payment;
    private final ApplicationEventPublisher events;

    public OrderService(
            OrderRepository repository,
            InventoryService inventory,
            PaymentGateway payment,
            ApplicationEventPublisher events) {

        this.repository = repository;
        this.inventory = inventory;
        this.payment = payment;
        this.events = events;
    }

    @Transactional
    public OrderResponse create(
            CreateOrderRequest request) {

        inventory.reserve(request.items());

        Order order =
                Order.create(request);

        repository.save(order);

        payment.pay(order.total());

        events.publishEvent(
            new OrderPlacedEvent(
                order.id(),
                request.email()
            )
        );

        return OrderResponse.from(order);
    }
}
```

### Important architecture question

Should a slow remote payment HTTP call happen inside a database transaction?

Not always.

Holding a DB transaction while waiting for a remote network service can create:

- long locks.
- connection exhaustion.
- rollback complexity.
- distributed consistency problems.

At larger scale, you may use:

- local DB transaction.
- outbox pattern.
- asynchronous command/event.
- idempotency.
- saga/workflow pattern.

Spring gives infrastructure, but architecture still matters.

---

# 81. Real-World Scenario: Invoice Approval Workflow

Imagine:

```text
Invoice Uploaded
      |
      v
Extract / Validate
      |
      v
Business Rules
      |
      +--> Match -> Ready for Posting
      |
      +--> Mismatch -> Approval Workflow
                        |
                        v
                    Finance Approval
                        |
                        v
                      Posting
```

Useful Spring concepts:

| Requirement | Spring Feature |
|---|---|
| API upload | Spring MVC multipart |
| DTO validation | Bean Validation |
| business orchestration | `@Service` |
| DB atomic changes | `@Transactional` |
| repository | JDBC/JPA |
| external ERP call | `RestClient` |
| post-save notification | application event |
| background work | `@Async` / messaging |
| scheduled retry | `@Scheduled` |
| audit timing | AOP/observability |
| error response | `@RestControllerAdvice` |

Example service:

```java
@Service
public class InvoiceWorkflowService {

    private final InvoiceRepository repository;
    private final PostingClient postingClient;
    private final ApplicationEventPublisher events;

    public InvoiceWorkflowService(
            InvoiceRepository repository,
            PostingClient postingClient,
            ApplicationEventPublisher events) {

        this.repository = repository;
        this.postingClient = postingClient;
        this.events = events;
    }

    @Transactional
    public void approve(
            long invoiceId,
            String approver) {

        Invoice invoice =
                repository.findRequired(invoiceId);

        invoice.approve(approver);

        repository.save(invoice);

        events.publishEvent(
            new InvoiceApprovedEvent(
                invoiceId
            )
        );
    }
}
```

Listener:

```java
@Component
public class InvoicePostingListener {

    @EventListener
    public void afterApproval(
            InvoiceApprovedEvent event) {

        // trigger next operation
    }
}
```

For reliable cross-system posting, consider durable messaging/outbox rather than relying only on an in-memory event.

---

# 82. Real-World Scenario: Notification Service

Requirement:

Support:

- email.
- SMS.
- push.

Interface:

```java
public interface NotificationChannel {

    void send(
        Recipient recipient,
        String message
    );
}
```

Implementations:

```java
@Component
@Qualifier("email")
public class EmailChannel
        implements NotificationChannel {
}
```

```java
@Component
@Qualifier("sms")
public class SmsChannel
        implements NotificationChannel {
}
```

Strategy registry:

```java
@Service
public class NotificationService {

    private final Map<String, NotificationChannel> channels;

    public NotificationService(
            Map<String, NotificationChannel> channels) {

        this.channels = channels;
    }

    public void send(
            String channel,
            Recipient recipient,
            String message) {

        NotificationChannel sender =
                channels.get(channel);

        if (sender == null) {
            throw new IllegalArgumentException(
                "Unsupported channel: " + channel
            );
        }

        sender.send(recipient, message);
    }
}
```

This shows DI as a Strategy-pattern enabler.

---

# 83. Real-World Scenario: External API Integration

Suppose your service calls a vendor API.

Create dedicated gateway:

```java
@Component
public class VendorGateway {

    private final RestClient restClient;

    public VendorGateway(
            RestClient restClient) {
        this.restClient = restClient;
    }

    public VendorResponse fetch(
            String vendorCode) {

        return restClient.get()
            .uri(
                "/vendors/{code}",
                vendorCode
            )
            .retrieve()
            .body(VendorResponse.class);
    }
}
```

Do not spread remote HTTP calls throughout controllers/services.

A gateway provides a boundary for:

- auth headers.
- error mapping.
- timeout.
- logging.
- metrics.
- DTO mapping.
- retries.
- test doubles.

---

# 84. Common Mistakes and Anti-Patterns

## Mistake 1 - Field injection everywhere

Bad:

```java
@Autowired
private A a;

@Autowired
private B b;

@Autowired
private C c;
```

Prefer constructor injection.

---

## Mistake 2 - Huge service classes

If a service has:

```text
20 dependencies
50 methods
5000 lines
```

it likely has too many responsibilities.

Split by use case or domain responsibility.

---

## Mistake 3 - Business logic in controller

Bad:

```java
@PostMapping
public ResponseEntity<?> create(...) {

    // 200 lines of rules
    // SQL
    // calculations
    // email
    // ERP calls
}
```

Controllers should be thin.

---

## Mistake 4 - Calling `new` for managed collaborators

Bad:

```java
public class OrderService {

    private PaymentGateway gateway =
            new PaymentGateway();
}
```

This bypasses container management.

---

## Mistake 5 - Assuming `@Transactional` works on any call

Remember proxy boundaries and self-invocation.

---

## Mistake 6 - Catching every exception inside a transaction

Bad:

```java
@Transactional
public void save() {

    try {
        repository.insert();
    } catch (Exception e) {
        log.error("failed", e);
    }
}
```

If the exception is swallowed, the transaction may commit when you expected rollback.

Handle intentionally.

---

## Mistake 7 - Using singleton mutable state unsafely

Spring singleton beans are shared.

Bad:

```java
@Service
public class CounterService {

    private long currentUserId;
}
```

Concurrent requests can overwrite shared mutable fields.

Prefer stateless singleton services.

---

## Mistake 8 - Using request/session state for normal services

Do not turn business services into session state containers.

---

## Mistake 9 - Blocking WebFlux event loop

Bad:

```java
@GetMapping
public Mono<String> get() {

    String result =
            blockingDatabaseCall();

    return Mono.just(result);
}
```

If using reactive stack, choose reactive dependencies or isolate blocking work properly.

---

## Mistake 10 - Overusing AOP

AOP is powerful but can make execution flow invisible.

Use it for genuine cross-cutting infrastructure, not ordinary business logic.

---

## Mistake 11 - Cache without invalidation strategy

Cache correctness matters more than annotation count.

---

## Mistake 12 - Hardcoded environment settings

Bad:

```java
String dbUrl =
    "jdbc:postgresql://prod-db:5432/prod";
```

Externalize configuration.

---

## Mistake 13 - One transaction around remote network calls

May hold DB resources too long.

Design transaction boundaries carefully.

---

# 85. Performance and Production Considerations

## 85.1 Keep singleton services stateless

Good:

```java
@Service
public class TaxService {

    public BigDecimal calculate(
            BigDecimal amount) {
        ...
    }
}
```

Avoid shared per-request mutable state.

## 85.2 Database connection pools

A connection pool has finite capacity.

Long transactions can exhaust it.

Monitor:

- active connections.
- idle connections.
- wait time.
- transaction duration.

## 85.3 HTTP clients

Configure:

- connection pool.
- connect timeout.
- response/read timeout.
- TLS.
- proxy if required.
- max connections.
- keep-alive behavior.

## 85.4 Async executors

Use bounded resources.

## 85.5 Cache only after measuring

Cache is not always a free speed increase.

It adds invalidation and consistency complexity.

## 85.6 Avoid N+1 database patterns

Especially with ORM.

## 85.7 Batch bulk work

For large imports, consider JDBC batching or database-native bulk strategies.

## 85.8 Observability

Measure:

- request latency.
- error rate.
- DB latency.
- external API latency.
- pool saturation.
- queue depth.
- JVM memory.
- GC.
- scheduled-job duration.

---

# 86. Debugging Spring

Common error categories:

## `NoSuchBeanDefinitionException`

Meaning:

Spring cannot find the requested bean.

Check:

- component scan package.
- missing `@Component`.
- configuration not imported.
- profile inactive.
- bean conditional/configuration issue.
- wrong type.

## `NoUniqueBeanDefinitionException`

Meaning:

Multiple beans match.

Fix with:

- `@Primary`.
- `@Qualifier`.
- custom qualifier.
- injection design.

## Circular dependency

Example:

```text
A -> B -> A
```

Constructor injection exposes this clearly.

Often it indicates poor design.

Refactor responsibilities or introduce a better boundary.

## Bean initialization failure

Look for the deepest/root exception.

Spring exceptions may wrap:

```text
BeanCreationException
  caused by ...
    caused by ...
      SQL / validation / class loading error
```

Read from the bottom/root cause.

## 404 in MVC

Check:

- controller scanned?
- correct context path?
- mapping path?
- HTTP method?
- DispatcherServlet mapping?
- security filter?
- trailing/format assumptions?

## 415 Unsupported Media Type

Check:

```text
Content-Type
consumes
message converters
body format
```

## 400 Bad Request

Check:

- JSON syntax.
- request DTO.
- validation.
- parameter conversion.
- missing required field.

## Transaction did not start

Check:

- method called through Spring proxy?
- bean managed by Spring?
- transaction manager configured?
- visibility/proxy mode?
- self-invocation?
- correct `@Transactional` import?

---

# 87. Migration Notes: Spring 5 to 6 to 7

## Spring 5 generation

Typical older namespace:

```java
javax.servlet
javax.persistence
javax.validation
```

## Spring 6

Major baseline change:

```text
Java 17+
Jakarta EE 9+
```

Namespace migration:

```text
javax.* -> jakarta.*
```

Examples:

```java
javax.servlet.*
```

became:

```java
jakarta.servlet.*
```

## Spring 7

Spring Framework 7 keeps the Java 17 baseline while moving the Jakarta baseline forward to Jakarta EE 11.

Typical modern environment includes newer Servlet/JPA/Validation specifications and server/library generations.

## Migration Checklist

When migrating:

1. upgrade Java.
2. update Maven/Gradle dependencies.
3. replace relevant `javax.*` imports with `jakarta.*`.
4. update servlet container.
5. update JPA/Hibernate.
6. update validation provider.
7. remove deprecated APIs.
8. run full tests.
9. check AOP/proxy assumptions.
10. test serialized payloads.
11. test security configuration.
12. review third-party library compatibility.

Do not perform a major framework migration by changing only the version number.

---

# 88. Annotation Cheat Sheet

## Core Container

| Annotation | Purpose |
|---|---|
| `@Component` | generic managed component |
| `@Service` | service-layer component |
| `@Repository` | persistence component |
| `@Controller` | MVC controller |
| `@Configuration` | Java configuration class |
| `@Bean` | registers bean from method |
| `@ComponentScan` | scans packages for components |
| `@Import` | imports configuration |
| `@Autowired` | dependency injection |
| `@Qualifier` | choose candidate |
| `@Primary` | preferred candidate |
| `@Fallback` | fallback candidate |
| `@Lazy` | lazy initialization |
| `@Scope` | bean scope |
| `@Profile` | activate bean/config by profile |
| `@Value` | inject property/expression |
| `@PropertySource` | add properties source |

## Lifecycle

| Annotation | Purpose |
|---|---|
| `@PostConstruct` | callback after dependency injection |
| `@PreDestroy` | callback before bean destruction |

## AOP

| Annotation | Purpose |
|---|---|
| `@Aspect` | aspect class |
| `@Before` | before advice |
| `@After` | after advice |
| `@AfterReturning` | after normal return |
| `@AfterThrowing` | after exception |
| `@Around` | wraps execution |
| `@EnableAspectJAutoProxy` | enables proxy-based AspectJ annotation style |

## Transactions

| Annotation | Purpose |
|---|---|
| `@Transactional` | declarative transaction |
| `@EnableTransactionManagement` | transaction annotation infrastructure |

## MVC

| Annotation | Purpose |
|---|---|
| `@RestController` | REST controller |
| `@RequestMapping` | generic request mapping |
| `@GetMapping` | GET |
| `@PostMapping` | POST |
| `@PutMapping` | PUT |
| `@PatchMapping` | PATCH |
| `@DeleteMapping` | DELETE |
| `@PathVariable` | path value |
| `@RequestParam` | query/form parameter |
| `@RequestBody` | HTTP body |
| `@ResponseBody` | serialize return body |
| `@RequestHeader` | request header |
| `@CookieValue` | cookie |
| `@ModelAttribute` | model/form binding |
| `@ExceptionHandler` | exception handler |
| `@ControllerAdvice` | global controller advice |
| `@RestControllerAdvice` | REST-style controller advice |
| `@CrossOrigin` | CORS configuration |

## Validation

| Annotation | Purpose |
|---|---|
| `@Valid` | trigger nested/bean validation |
| `@Validated` | Spring validation groups/method validation integration |

Common Jakarta constraints:

```text
@NotNull
@NotBlank
@NotEmpty
@Size
@Min
@Max
@Positive
@Negative
@Email
@Pattern
@Past
@Future
```

## Async / Scheduling

| Annotation | Purpose |
|---|---|
| `@EnableAsync` | enable async method processing |
| `@Async` | execute through async interceptor |
| `@EnableScheduling` | enable scheduled processing |
| `@Scheduled` | scheduled method |

## Cache

| Annotation | Purpose |
|---|---|
| `@EnableCaching` | enables annotation cache support |
| `@Cacheable` | read-through caching |
| `@CachePut` | update cache after method |
| `@CacheEvict` | remove cache entry |

## Events

| Annotation | Purpose |
|---|---|
| `@EventListener` | application-event listener |
| `@TransactionalEventListener` | event listener synchronized with transaction phase |

## WebSocket Messaging

| Annotation | Purpose |
|---|---|
| `@EnableWebSocketMessageBroker` | enable message broker infrastructure |
| `@MessageMapping` | inbound message mapping |
| `@SendTo` | outbound destination |

---

# 89. Interview Questions and Answers

## Q1. What is Spring Framework?

A Java application framework whose core capabilities include an IoC container, dependency injection, AOP, transactions, data access, web frameworks, integration, and testing support.

## Q2. What is IoC?

Inversion of Control means control over object creation/configuration is moved from application classes to an external container/framework.

## Q3. What is DI?

Dependency Injection is supplying an object's collaborators from outside rather than letting the object construct them internally.

## Q4. IoC vs DI?

IoC is the broader principle.

DI is a concrete technique used to achieve IoC.

## Q5. What is a Spring bean?

An object managed by the Spring IoC container.

## Q6. What is `ApplicationContext`?

The main high-level Spring container abstraction that manages beans and also offers events, resources, i18n, environment, and other application services.

## Q7. `@Component` vs `@Service`?

Both create component candidates, but `@Service` communicates service-layer semantics.

## Q8. `@Repository` special purpose?

It marks persistence-layer components and participates in persistence exception translation when configured.

## Q9. Constructor vs field injection?

Constructor injection makes required dependencies explicit, supports immutability, and improves plain unit testing.

## Q10. What is bean scope?

It defines bean instance lifecycle/visibility, such as singleton, prototype, request, and session.

## Q11. Is Spring singleton global?

No. It is typically one instance per bean definition per Spring container.

## Q12. What is AOP?

A way to modularize cross-cutting behavior such as transactions, logging, metrics, or caching.

## Q13. What is a proxy in Spring?

An object placed in front of a target bean to apply interceptors/advice before or after method execution.

## Q14. Why can self-invocation break `@Transactional`?

Because an internal `this.method()` call may not pass through the Spring proxy that applies transaction advice.

## Q15. What does `@Transactional` do?

It marks a transaction boundary whose behavior is implemented by Spring transaction infrastructure.

## Q16. Default propagation?

`REQUIRED`.

## Q17. `REQUIRED` vs `REQUIRES_NEW`?

`REQUIRED` joins an existing transaction when available.

`REQUIRES_NEW` starts a new transaction and suspends the existing one where supported.

## Q18. What is `JdbcTemplate`?

A Spring JDBC abstraction that handles repetitive JDBC resource/error plumbing while allowing SQL to remain explicit.

## Q19. Spring MVC architecture?

It uses `DispatcherServlet` as a front controller that delegates to mappings, adapters, controllers, converters, resolvers, and exception handlers.

## Q20. `@Controller` vs `@RestController`?

`@Controller` is commonly used for MVC views.

`@RestController` implies response-body semantics for handler methods.

## Q21. `@RequestParam` vs `@PathVariable`?

Query:

```text
/users?status=ACTIVE
```

uses `@RequestParam`.

Path:

```text
/users/10
```

uses `@PathVariable`.

## Q22. Filter vs Interceptor?

Filter operates at servlet chain level.

Interceptor operates in Spring MVC handler processing.

## Q23. MVC vs WebFlux?

MVC is the servlet-based stack.

WebFlux is the reactive/non-blocking stack.

## Q24. Mono vs Flux?

`Mono` represents 0..1 item.

`Flux` represents 0..N items.

## Q25. RestClient vs WebClient?

`RestClient` is synchronous/fluent.

`WebClient` is reactive/non-blocking.

## Q26. What happened to RestTemplate?

In Spring Framework 7 it is deprecated in favor of `RestClient`.

## Q27. What is `BeanPostProcessor`?

A container extension point that can inspect or wrap bean instances before/after initialization.

## Q28. What is `BeanFactoryPostProcessor`?

A container extension point that modifies bean definitions before ordinary beans are instantiated.

## Q29. `FactoryBean` vs `BeanFactory`?

`FactoryBean` produces another bean.

`BeanFactory` is an IoC container interface.

## Q30. Why use Spring profiles?

To activate different configuration or beans for environments/use cases.

---

# 90. Practice Exercises

## Exercise 1 - Basic DI

Create:

```text
NotificationService interface
EmailNotificationService
OrderService
```

Inject the interface into `OrderService`.

Then create a second implementation and resolve ambiguity using `@Qualifier`.

---

## Exercise 2 - Profiles

Create:

```text
DevPaymentGateway
ProdPaymentGateway
```

Use:

```text
@Profile("dev")
@Profile("prod")
```

Switch profiles.

---

## Exercise 3 - Scope

Create a prototype bean with a random UUID.

Inject it directly into a singleton and observe behavior.

Then use `ObjectProvider` and compare.

---

## Exercise 4 - Lifecycle

Create a bean with:

```text
constructor
@PostConstruct
@PreDestroy
```

Print lifecycle order.

---

## Exercise 5 - AOP

Create a custom annotation:

```java
@TrackTime
```

Write an aspect that measures annotated method execution duration.

---

## Exercise 6 - JDBC

Create:

```text
users
```

table.

Implement:

```text
create
findById
findAll
update
delete
```

with `JdbcTemplate`.

---

## Exercise 7 - Transactions

Create:

```text
accounts
transfer_log
```

Perform a money transfer.

Throw an exception after debit and confirm rollback.

---

## Exercise 8 - MVC

Create REST endpoints:

```text
POST   /api/books
GET    /api/books
GET    /api/books/{id}
PUT    /api/books/{id}
DELETE /api/books/{id}
```

---

## Exercise 9 - Validation

Add:

```text
@NotBlank title
@Positive price
@NotBlank author
```

Return consistent validation errors.

---

## Exercise 10 - REST Client

Create two local applications.

Application A calls Application B using `RestClient`.

Handle:

```text
200
404
500
timeout
```

---

## Exercise 11 - Async

Create invoice upload endpoint.

After persistence, trigger a slow notification asynchronously.

Observe thread names.

---

## Exercise 12 - Cache

Cache a slow product lookup.

Observe:

```text
first call -> service executes
second call -> cache hit
```

Then update and evict.

---

## Exercise 13 - WebFlux

Create:

```text
GET /stream
```

that emits values periodically.

---

# 91. Project Ideas

## Beginner Project - Employee Directory

Features:

- CRUD.
- MVC REST API.
- validation.
- JDBC.
- global exception handling.

Learn:

- DI.
- controller/service/repository.
- DTOs.
- SQL.

---

## Intermediate Project - Invoice Workflow

Features:

- invoice upload.
- invoice metadata.
- validation.
- status workflow.
- approvals.
- audit events.
- transaction handling.
- external posting API.
- scheduled retry.

Learn:

- MVC.
- transactions.
- events.
- AOP.
- JDBC/JPA.
- REST clients.
- scheduling.

---

## Intermediate Project - E-Commerce Backend

Features:

- products.
- inventory.
- cart.
- orders.
- payment integration.
- cache.
- email.
- transaction handling.

---

## Advanced Project - Reactive Monitoring Dashboard

Features:

- WebFlux.
- server-sent events or WebSocket.
- external reactive APIs.
- reactive persistence.
- metrics.

---

## Advanced Project - Enterprise Integration Hub

Features:

- REST inbound.
- JMS.
- scheduled imports.
- multiple databases.
- external HTTP systems.
- resilience patterns.
- observability.
- audit.

---

# 92. Learning Roadmap

## Phase 1 - Java Foundation

You should know:

- classes.
- interfaces.
- inheritance.
- composition.
- exceptions.
- collections.
- generics.
- annotations.
- lambdas.
- streams.
- JDBC basics.
- Maven/Gradle.
- HTTP basics.

## Phase 2 - Spring Core

Master:

```text
IoC
DI
Beans
ApplicationContext
@Configuration
@Bean
@Component
@Service
@Repository
@Autowired
@Qualifier
@Primary
Scopes
Lifecycle
Properties
Profiles
```

## Phase 3 - AOP + Transactions

Master:

```text
proxy
advice
pointcut
self-invocation
@Transactional
propagation
isolation
rollback
```

## Phase 4 - Data Access

Learn:

```text
JdbcTemplate
NamedParameterJdbcTemplate
batch
DataAccessException
JPA integration
```

## Phase 5 - Web MVC

Learn:

```text
DispatcherServlet
Controller
REST
validation
exception handling
filters
interceptors
file upload
CORS
views
```

## Phase 6 - Integration

Learn:

```text
RestClient
WebClient
events
async
scheduling
cache
JMS
email
WebSocket
```

## Phase 7 - Testing

Learn:

```text
unit tests
SpringExtension
TestContext
MockMvc
WebTestClient
transaction tests
```

## Phase 8 - Advanced

Learn:

```text
BeanPostProcessor
FactoryBean
AOT
native
WebFlux
observability
performance
framework internals
```

## Phase 9 - Spring Boot

After understanding Spring Framework, learn how Spring Boot automates configuration.

You will understand terms such as:

```text
auto-configuration
starter
embedded server
externalized configuration
actuator
conditional beans
```

much faster.

---

# 93. Glossary

## Advice

Code executed by an AOP aspect at selected join points.

## AOP

Aspect-Oriented Programming.

## ApplicationContext

High-level Spring IoC container.

## Bean

Object managed by Spring.

## Bean Definition

Metadata describing how Spring should create/configure a bean.

## BeanFactory

Core IoC container abstraction.

## BeanPostProcessor

Hook for processing/wrapping bean instances.

## Component Scan

Automatic discovery of annotated component classes.

## Dependency Injection

Supplying dependencies from outside an object.

## DispatcherServlet

Central Front Controller of Spring MVC.

## IoC

Inversion of Control.

## Join Point

Execution point that may be intercepted.

## Pointcut

Expression/rule selecting join points.

## Proxy

Object that wraps/delegates to a target and can apply interceptors.

## Scope

Lifecycle/visibility rule for bean instances.

## SpEL

Spring Expression Language.

## Transaction

Atomic unit of data operations.

## WebFlux

Spring reactive web framework.

## WebClient

Reactive HTTP client.

## RestClient

Synchronous fluent HTTP client.

---

# 94. Final Master Checklist

You are strong in Spring Framework when you can explain and implement the following without simply copying annotations.

## Core

- [ ] Explain Spring Framework.
- [ ] Explain IoC.
- [ ] Explain Dependency Injection.
- [ ] Explain IoC vs DI.
- [ ] Explain a Spring bean.
- [ ] Explain a bean definition.
- [ ] Use `ApplicationContext`.
- [ ] Use Java configuration.
- [ ] Use component scanning.
- [ ] Explain XML configuration.
- [ ] Use constructor injection.
- [ ] Resolve multiple beans.
- [ ] Explain `@Primary`.
- [ ] Explain `@Qualifier`.
- [ ] Explain `@Fallback`.
- [ ] Explain scopes.
- [ ] Explain lifecycle.
- [ ] Explain lazy beans.
- [ ] Explain `BeanFactory`.
- [ ] Explain `BeanPostProcessor`.
- [ ] Explain `BeanFactoryPostProcessor`.
- [ ] Explain `FactoryBean`.

## Configuration

- [ ] Use properties.
- [ ] Use `Environment`.
- [ ] Use `@Value`.
- [ ] Use profiles.
- [ ] Load resources.
- [ ] Use application events.
- [ ] Explain i18n.
- [ ] Implement conversion.
- [ ] Implement validation.
- [ ] Understand SpEL.

## AOP

- [ ] Explain aspect.
- [ ] Explain advice.
- [ ] Explain pointcut.
- [ ] Explain proxy.
- [ ] Write before advice.
- [ ] Write around advice.
- [ ] Explain self-invocation.

## Transactions

- [ ] Use `@Transactional`.
- [ ] Explain rollback.
- [ ] Explain `REQUIRED`.
- [ ] Explain `REQUIRES_NEW`.
- [ ] Explain isolation.
- [ ] Explain transaction manager.
- [ ] Use `TransactionTemplate`.
- [ ] Identify dangerous long transactions.

## Data

- [ ] Use `JdbcTemplate`.
- [ ] Use `NamedParameterJdbcTemplate`.
- [ ] Write a `RowMapper`.
- [ ] Perform batch update.
- [ ] Explain exception translation.
- [ ] Understand JPA/Hibernate integration.
- [ ] Distinguish Spring Framework ORM support from Spring Data JPA.

## MVC

- [ ] Explain `DispatcherServlet`.
- [ ] Create controller.
- [ ] Create REST controller.
- [ ] Use request mappings.
- [ ] Use path variables.
- [ ] Use query parameters.
- [ ] Bind JSON.
- [ ] Return `ResponseEntity`.
- [ ] Validate DTOs.
- [ ] Handle exceptions globally.
- [ ] Explain filters.
- [ ] Explain interceptors.
- [ ] Handle multipart uploads.
- [ ] Configure CORS.
- [ ] Return server-side views.
- [ ] Understand async MVC.

## Reactive

- [ ] Explain WebFlux.
- [ ] Explain `Mono`.
- [ ] Explain `Flux`.
- [ ] Explain backpressure.
- [ ] Avoid blocking reactive pipelines.
- [ ] Build annotated WebFlux endpoint.
- [ ] Understand functional endpoints.

## Integration

- [ ] Use `RestClient`.
- [ ] Use `WebClient`.
- [ ] Explain HTTP Service Clients.
- [ ] Understand why `RestTemplate` is legacy/deprecated in Spring 7.
- [ ] Use application events.
- [ ] Use `@Async`.
- [ ] Configure scheduling.
- [ ] Use caching.
- [ ] Understand JMS.
- [ ] Understand WebSocket/STOMP.
- [ ] Understand mail integration.

## Testing

- [ ] Write pure unit tests without Spring.
- [ ] Load Spring context when needed.
- [ ] Use Spring TestContext.
- [ ] Use `MockMvc`.
- [ ] Use `WebTestClient`.
- [ ] Understand transactional tests.
- [ ] Avoid unnecessarily slow full-context testing.

## Architecture

- [ ] Keep controllers thin.
- [ ] Keep services focused.
- [ ] Separate DTOs from persistence entities where appropriate.
- [ ] Define external system gateways.
- [ ] Design transaction boundaries intentionally.
- [ ] Avoid shared mutable singleton state.
- [ ] Understand distributed scheduling.
- [ ] Design cache invalidation.
- [ ] Add observability.
- [ ] Understand migration from `javax.*` to `jakarta.*`.

---

# 95. Official References

Use official documentation as the source of truth when framework behavior changes.

- Spring Framework Reference Documentation: https://docs.spring.io/spring-framework/reference/
- Spring Framework Project Page: https://spring.io/projects/spring-framework
- Spring Framework GitHub: https://github.com/spring-projects/spring-framework
- Spring Framework 7 Release Notes: https://github.com/spring-projects/spring-framework/wiki/Spring-Framework-7.0-Release-Notes
- Spring Guides: https://spring.io/guides

---

# Appendix A - Minimal Core Spring Project

Directory:

```text
spring-core-demo/
├── pom.xml
└── src/
    └── main/
        └── java/
            └── com/
                └── example/
                    ├── Main.java
                    ├── AppConfig.java
                    ├── PaymentGateway.java
                    ├── MockPaymentGateway.java
                    └── OrderService.java
```

`PaymentGateway.java`:

```java
package com.example;

public interface PaymentGateway {

    void pay(double amount);
}
```

`MockPaymentGateway.java`:

```java
package com.example;

import org.springframework.stereotype.Component;

@Component
public class MockPaymentGateway
        implements PaymentGateway {

    @Override
    public void pay(double amount) {

        System.out.println(
            "Mock payment: " + amount
        );
    }
}
```

`OrderService.java`:

```java
package com.example;

import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final PaymentGateway gateway;

    public OrderService(
            PaymentGateway gateway) {

        this.gateway = gateway;
    }

    public void checkout(double total) {

        gateway.pay(total);
    }
}
```

`AppConfig.java`:

```java
package com.example;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example")
public class AppConfig {
}
```

`Main.java`:

```java
package com.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {

    public static void main(String[] args) {

        try (var context =
                 new AnnotationConfigApplicationContext(
                     AppConfig.class
                 )) {

            OrderService service =
                    context.getBean(
                        OrderService.class
                    );

            service.checkout(1000);
        }
    }
}
```

What happens:

```text
Main
 |
 v
AnnotationConfigApplicationContext
 |
 v
Reads AppConfig
 |
 v
Scans com.example
 |
 +--> MockPaymentGateway bean
 |
 +--> OrderService bean
        |
        +--> requires PaymentGateway
                 |
                 +--> MockPaymentGateway injected
 |
 v
Application ready
```

---

# Appendix B - Plain Spring MVC Architecture Without Boot

Typical classic structure:

```text
src/main/java
└── com.example
    ├── config
    │   ├── RootConfig.java
    │   └── WebConfig.java
    ├── controller
    ├── service
    └── repository
```

Web initializer:

```java
public class AppInitializer
        extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[]{
            RootConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[]{
            WebConfig.class
        };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}
```

Web configuration:

```java
@Configuration
@EnableWebMvc
@ComponentScan(
    basePackages = "com.example.controller"
)
public class WebConfig
        implements WebMvcConfigurer {
}
```

Root configuration:

```java
@Configuration
@ComponentScan(
    basePackages = {
        "com.example.service",
        "com.example.repository"
    }
)
public class RootConfig {
}
```

Conceptually:

```text
Servlet Container
       |
       v
AppInitializer
       |
       +--> Root ApplicationContext
       |      |
       |      +-- services
       |      +-- repositories
       |
       +--> Web ApplicationContext
              |
              +-- controllers
              +-- MVC infrastructure
              |
              v
        DispatcherServlet
```

Spring Boot simplifies much of this startup work, but the underlying concepts remain important.

---

# Appendix C - Decision Guide

## Should I use `@Component` or `@Bean`?

Use `@Component` when:

```text
class is yours
+ automatic scanning makes sense
```

Use `@Bean` when:

```text
third-party class
or custom construction logic
or explicit configuration is preferred
```

## Should I use MVC or WebFlux?

Choose MVC when:

```text
normal CRUD/business web application
blocking JDBC/JPA
team knows servlet model
reactive complexity gives little benefit
```

Choose WebFlux when:

```text
non-blocking end-to-end pipeline
high concurrent I/O
streaming
reactive persistence/integrations
team understands reactive programming
```

## Should I use RestClient or WebClient?

```text
Blocking application
    -> RestClient

Reactive application
    -> WebClient

Declarative interface desired
    -> HTTP Service Client
```

## Should I use an application event or message broker?

```text
In-process decoupling only
    -> Spring ApplicationEvent

Need durability / cross-service messaging
    -> Broker / durable messaging pattern
```

## Should I use `@Async` or a message queue?

```text
Simple in-process background work
    -> @Async may be enough

Need durability, retry, scale, decoupled worker
    -> message queue is usually stronger
```

## Should I use `@Transactional`?

Use it when multiple operations form a clear transactional unit.

Do not create giant transactions around unrelated network work just because it is easy to add an annotation.

---

# Appendix D - Master Mental Model

If you remember only one picture, remember this:

```text
                         SPRING CONTAINER
                    ┌──────────────────────┐
                    │                      │
Configuration ----> │ Bean Definitions     │
                    │       |              │
                    │       v              │
                    │ Create Beans         │
                    │       |              │
                    │       v              │
                    │ Inject Dependencies  │
                    │       |              │
                    │       v              │
                    │ Lifecycle            │
                    │       |              │
                    │       v              │
                    │ Proxies              │
                    │ AOP / TX / Cache     │
                    │ Async / Security*    │
                    └──────────┬───────────┘
                               |
                               v
                    Application Components
                               |
             ┌─────────────────┼─────────────────┐
             v                 v                 v
          Web/MVC           Data/DB          Integrations
             |                 |                 |
             v                 v                 v
        HTTP Client         JDBC/JPA        REST/JMS/etc.
```

`*` Spring Security is a separate project that integrates with this infrastructure.

The biggest Spring lesson is not annotation memorization.

It is understanding:

```text
Who creates the object?
Who owns its lifecycle?
How is the dependency chosen?
Is a proxy involved?
Where is the transaction boundary?
Which layer owns the responsibility?
What happens when the operation fails?
```

Once you can answer those questions, Spring becomes predictable instead of magical.

---

# End of Spring Framework Master Learning Handbook
