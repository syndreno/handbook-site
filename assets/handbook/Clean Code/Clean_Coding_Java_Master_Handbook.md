# Clean Coding Java — Master Handbook

> A practical, beginner-friendly, in-depth handbook for writing Java code that is readable, maintainable, testable, secure, scalable, and easy for teams to evolve.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Clean Code Means](#2-what-clean-code-means)
3. [Core Clean-Code Principles](#3-core-clean-code-principles)
4. [Java Project Structure](#4-java-project-structure)
5. [Naming](#5-naming)
6. [Variables and Constants](#6-variables-and-constants)
7. [Methods](#7-methods)
8. [Classes and Objects](#8-classes-and-objects)
9. [Encapsulation](#9-encapsulation)
10. [Immutability](#10-immutability)
11. [Constructors and Object Creation](#11-constructors-and-object-creation)
12. [Null Handling and Optional](#12-null-handling-and-optional)
13. [Enums](#13-enums)
14. [Records and Value Objects](#14-records-and-value-objects)
15. [Collections](#15-collections)
16. [Generics](#16-generics)
17. [Streams and Lambdas](#17-streams-and-lambdas)
18. [Exceptions and Error Handling](#18-exceptions-and-error-handling)
19. [Resource Management](#19-resource-management)
20. [SOLID Principles](#20-solid-principles)
21. [DRY, KISS, YAGNI and Separation of Concerns](#21-dry-kiss-yagni-and-separation-of-concerns)
22. [Composition vs Inheritance](#22-composition-vs-inheritance)
23. [Interfaces and Abstractions](#23-interfaces-and-abstractions)
24. [Dependency Injection](#24-dependency-injection)
25. [Design Patterns for Clean Java](#25-design-patterns-for-clean-java)
26. [Packages and Modules](#26-packages-and-modules)
27. [DTOs, Entities, Domain Models and Mappers](#27-dtos-entities-domain-models-and-mappers)
28. [Layered and Hexagonal Architecture](#28-layered-and-hexagonal-architecture)
29. [Clean API Design](#29-clean-api-design)
30. [Persistence and Database Code](#30-persistence-and-database-code)
31. [Logging](#31-logging)
32. [Configuration and Secrets](#32-configuration-and-secrets)
33. [Security-Oriented Clean Coding](#33-security-oriented-clean-coding)
34. [Concurrency and Thread Safety](#34-concurrency-and-thread-safety)
35. [Performance Without Destroying Readability](#35-performance-without-destroying-readability)
36. [Testing Clean Java Code](#36-testing-clean-java-code)
37. [Unit Testing Principles](#37-unit-testing-principles)
38. [Mocking](#38-mocking)
39. [Integration and End-to-End Testing](#39-integration-and-end-to-end-testing)
40. [Test-Driven Development](#40-test-driven-development)
41. [Refactoring](#41-refactoring)
42. [Code Smells and Their Fixes](#42-code-smells-and-their-fixes)
43. [Comments and Documentation](#43-comments-and-documentation)
44. [Formatting and Style](#44-formatting-and-style)
45. [Static Analysis and Quality Tools](#45-static-analysis-and-quality-tools)
46. [Build and Dependency Hygiene](#46-build-and-dependency-hygiene)
47. [Code Review](#47-code-review)
48. [Legacy Code Strategy](#48-legacy-code-strategy)
49. [Real-World Scenario Patterns](#49-real-world-scenario-patterns)
50. [Common Anti-Patterns](#50-common-anti-patterns)
51. [Clean Coding Interview Knowledge](#51-clean-coding-interview-knowledge)
52. [Professional Checklists](#52-professional-checklists)
53. [Practice Exercises](#53-practice-exercises)
54. [Recommended Learning Path](#54-recommended-learning-path)
55. [Final Golden Rules](#55-final-golden-rules)

---

# 1. How to Use This Handbook

This handbook is designed for:

- beginners learning Java,
- developers moving from syntax to professional coding,
- backend developers,
- Spring/Spring Boot developers,
- full-stack developers,
- interview preparation,
- code review preparation,
- refactoring legacy applications,
- enterprise Java projects.

Do not try to memorize everything.

A better approach is:

1. understand the principle,
2. read the bad example,
3. read the improved example,
4. identify why the improved code is easier to change,
5. use the idea in a real project,
6. revisit the section during code review.

The goal of clean code is not to produce "beautiful-looking code."

The goal is to produce code that future developers can understand and safely modify.

---

# 2. What Clean Code Means

Clean code is code that is:

- easy to read,
- easy to understand,
- easy to modify,
- easy to test,
- difficult to misuse,
- predictable,
- explicit about important decisions,
- small enough to reason about,
- organized around business intent.

Consider:

```java
if (u != null && u.getS() == 1 && u.getAge() >= 18) {
    x(u);
}
```

This may work, but the intent is hidden.

A cleaner version:

```java
if (isEligibleAdultCustomer(user)) {
    activateCustomer(user);
}
```

Now the code tells a story.

Clean code optimizes for the human reader.

---

# 3. Core Clean-Code Principles

A useful mental model is:

> Code should communicate intent with the minimum necessary complexity.

Important principles include:

- meaningful names,
- small focused methods,
- single responsibility,
- high cohesion,
- low coupling,
- clear boundaries,
- explicit error handling,
- predictable side effects,
- immutable data when practical,
- tests that describe behavior,
- removing duplication,
- avoiding premature abstraction,
- avoiding premature optimization.

## Readability over cleverness

Avoid code that proves how clever you are.

Prefer code that allows another developer to understand the behavior immediately.

Bad:

```java
var result = list.stream()
        .filter(x -> x.a() && !x.b())
        .map(x -> x.c().trim())
        .filter(s -> !s.isEmpty())
        .toList();
```

Better:

```java
List<String> activeCustomerEmails = customers.stream()
        .filter(Customer::isActive)
        .filter(customer -> !customer.isBlocked())
        .map(Customer::email)
        .map(String::trim)
        .filter(email -> !email.isBlank())
        .toList();
```

---

# 4. Java Project Structure

A predictable project structure improves navigation.

A common Maven layout:

```text
project/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   │   └── com/example/application/
    │   └── resources/
    └── test/
        ├── java/
        └── resources/
```

A domain-oriented application might use:

```text
com.example.shop
├── order
│   ├── Order.java
│   ├── OrderService.java
│   ├── OrderRepository.java
│   ├── OrderController.java
│   └── OrderMapper.java
├── customer
└── payment
```

This is often easier to maintain than:

```text
controller/
service/
repository/
entity/
dto/
```

for very large applications because related functionality stays closer together.

## Guideline

Organize code so that a developer asking:

> "Where is the order functionality?"

can find the answer quickly.

---

# 5. Naming

Names are one of the highest-value parts of clean code.

## Variables

Bad:

```java
int d;
String s;
List<User> l;
```

Better:

```java
int retryCount;
String customerEmail;
List<User> activeUsers;
```

## Methods

Methods should usually describe actions.

Good examples:

```java
calculateInvoiceTotal()
sendPasswordResetEmail()
findActiveCustomerById()
validatePaymentRequest()
```

## Boolean names

Prefer questions:

```java
isActive
hasPermission
canRetry
shouldNotify
```

Avoid:

```java
status
flag
check
value
```

## Classes

Classes usually represent nouns or concepts:

```java
Invoice
PaymentProcessor
CustomerRepository
OrderValidator
EmailNotificationService
```

Avoid vague names such as:

```java
Manager
Helper
Util
Processor
Data
Common
Misc
```

unless the class really has one clear responsibility.

## Avoid misleading names

Bad:

```java
List<User> userMap;
```

It is not a map.

Better:

```java
List<User> users;
```

## Include units

Bad:

```java
long timeout;
```

Better:

```java
long timeoutMillis;
```

Even better:

```java
Duration timeout;
```

Using domain types removes ambiguity.

---

# 6. Variables and Constants

## Keep variable scope small

Bad:

```java
String email = null;

// 100 lines later

email = customer.getEmail();
```

Better:

```java
String email = customer.getEmail();
notificationService.send(email);
```

Declare variables near where they are used.

## Avoid reusing variables for different meanings

Bad:

```java
String value = request.getEmail();
value = value.trim();
value = repository.findId(value);
```

Better:

```java
String normalizedEmail = request.getEmail().trim();
String customerId = repository.findIdByEmail(normalizedEmail);
```

## Use constants instead of magic numbers

Bad:

```java
if (failedAttempts >= 5) {
    lockAccount();
}
```

Better:

```java
private static final int MAX_FAILED_LOGIN_ATTEMPTS = 5;

if (failedAttempts >= MAX_FAILED_LOGIN_ATTEMPTS) {
    lockAccount();
}
```

For time values, prefer Java time types:

```java
private static final Duration SESSION_TIMEOUT = Duration.ofMinutes(30);
```

instead of:

```java
private static final long SESSION_TIMEOUT = 1_800_000;
```

---

# 7. Methods

Methods are where clean-code quality becomes visible quickly.

## One method, one responsibility

Bad:

```java
public void processOrder(Order order) {
    validate(order);

    BigDecimal total = calculateTotal(order);

    Connection connection = openConnection();
    saveOrder(connection, order);

    String html = buildEmail(order);
    sendEmail(order.getCustomerEmail(), html);

    writeAuditLog(order);
}
```

This method validates, calculates, persists, formats email, sends email, and audits.

Better:

```java
public void placeOrder(Order order) {
    orderValidator.validate(order);

    Order pricedOrder = pricingService.price(order);

    orderRepository.save(pricedOrder);

    orderNotificationService.notifyPlaced(pricedOrder);

    auditService.recordOrderPlaced(pricedOrder);
}
```

The method now describes the business workflow.

## Keep methods short, but do not worship line counts

There is no universal "maximum 10 lines" rule.

A method is too long when it requires the reader to keep too many concepts in their head simultaneously.

## Avoid boolean parameter traps

Bad:

```java
generateReport(true);
```

What does `true` mean?

Better:

```java
generateDetailedReport();
```

or:

```java
generateReport(ReportType.DETAILED);
```

## Minimize parameters

Bad:

```java
createUser(
    String firstName,
    String lastName,
    String email,
    String phone,
    String city,
    String country,
    String department,
    String role
);
```

Better:

```java
createUser(CreateUserCommand command);
```

## Avoid hidden side effects

Bad:

```java
public boolean isValid(User user) {
    user.setLastValidatedAt(Instant.now());
    return validator.validate(user);
}
```

A method named `isValid()` should not unexpectedly mutate the user.

Better:

```java
public boolean isValid(User user) {
    return validator.validate(user);
}
```

Record validation separately if needed.

---

# 8. Classes and Objects

A good class has:

- one primary responsibility,
- clear invariants,
- related data and behavior,
- minimal public surface,
- meaningful collaborators.

Bad:

```java
public class UserManager {

    public void saveUser() {}
    public void sendEmail() {}
    public void generatePdf() {}
    public void calculateTax() {}
    public void uploadFile() {}
}
```

This class has unrelated responsibilities.

Better:

```java
public class UserService {
    private final UserRepository userRepository;

    public void register(User user) {
        userRepository.save(user);
    }
}
```

and separate collaborators:

```java
EmailService
PdfGenerator
TaxCalculator
FileStorage
```

## High cohesion

A class is cohesive when its fields and methods strongly belong together.

For example:

```java
public final class Money {

    private final BigDecimal amount;
    private final Currency currency;

    public Money add(Money other) {
        requireSameCurrency(other);
        return new Money(amount.add(other.amount), currency);
    }
}
```

The data and behavior belong together.

---

# 9. Encapsulation

Encapsulation means protecting internal state and exposing meaningful operations.

Bad:

```java
public class BankAccount {
    public BigDecimal balance;
}
```

Anyone can do:

```java
account.balance = new BigDecimal("-1000000");
```

Better:

```java
public class BankAccount {

    private BigDecimal balance;

    public BankAccount(BigDecimal openingBalance) {
        if (openingBalance.signum() < 0) {
            throw new IllegalArgumentException("Opening balance cannot be negative");
        }

        this.balance = openingBalance;
    }

    public void deposit(BigDecimal amount) {
        requirePositive(amount);
        balance = balance.add(amount);
    }

    public void withdraw(BigDecimal amount) {
        requirePositive(amount);

        if (amount.compareTo(balance) > 0) {
            throw new InsufficientFundsException();
        }

        balance = balance.subtract(amount);
    }

    public BigDecimal balance() {
        return balance;
    }
}
```

The object protects its business rules.

---

# 10. Immutability

Immutable objects are easier to understand because their state does not change unexpectedly.

Advantages:

- safer concurrency,
- easier testing,
- fewer side effects,
- simpler reasoning,
- safe sharing,
- better use as map keys.

Example:

```java
public final class EmailAddress {

    private final String value;

    public EmailAddress(String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException("Email is required");
        }

        this.value = value;
    }

    public String value() {
        return value;
    }
}
```

When using collections, use defensive copying:

```java
public final class Order {

    private final List<OrderItem> items;

    public Order(List<OrderItem> items) {
        this.items = List.copyOf(items);
    }

    public List<OrderItem> items() {
        return items;
    }
}
```

`List.copyOf()` prevents callers from changing the internal list through their original reference.

---

# 11. Constructors and Object Creation

A constructor should leave the object in a valid state.

Bad:

```java
User user = new User();
user.setEmail(email);
user.setStatus("ACTIVE");
user.setRole("USER");
```

Between lines, the object may be invalid.

Better:

```java
User user = new User(email, UserStatus.ACTIVE, Role.USER);
```

## Static factory methods

Static factory methods can communicate intent better.

```java
public static User register(String email) {
    return new User(email, UserStatus.PENDING, Role.USER);
}
```

Usage:

```java
User user = User.register(email);
```

## Builder pattern

Useful when there are many optional values.

```java
ReportRequest request = ReportRequest.builder()
        .department("Finance")
        .from(startDate)
        .to(endDate)
        .includeInactive(false)
        .build();
```

Do not automatically use builders for every class. For small value objects, constructors or records are usually simpler.

---

# 12. Null Handling and Optional

`null` is one of the most common sources of runtime errors.

Bad:

```java
if (customer != null) {
    if (customer.getAddress() != null) {
        if (customer.getAddress().getCity() != null) {
            ...
        }
    }
}
```

The better solution depends on the domain.

## Enforce required values

```java
public Customer(String name, EmailAddress email) {
    this.name = Objects.requireNonNull(name, "name");
    this.email = Objects.requireNonNull(email, "email");
}
```

## Optional for absent return values

```java
public Optional<Customer> findByEmail(String email) {
    return repository.findByEmail(email);
}
```

Usage:

```java
Customer customer = service.findByEmail(email)
        .orElseThrow(() -> new CustomerNotFoundException(email));
```

## Avoid Optional fields

Usually avoid:

```java
private Optional<String> middleName;
```

Prefer:

```java
private String middleName;
```

or model the domain differently.

`Optional` is primarily useful for method return types.

## Never return null Optional

Wrong:

```java
return null;
```

Correct:

```java
return Optional.empty();
```

---

# 13. Enums

Avoid representing fixed domain values as arbitrary strings.

Bad:

```java
if ("APPROVED".equals(order.getStatus())) {
    ...
}
```

Better:

```java
public enum OrderStatus {
    CREATED,
    APPROVED,
    SHIPPED,
    CANCELLED
}
```

Usage:

```java
if (order.status() == OrderStatus.APPROVED) {
    ...
}
```

Enums can contain behavior:

```java
public enum PaymentStatus {

    PENDING(false),
    COMPLETED(true),
    FAILED(true);

    private final boolean terminal;

    PaymentStatus(boolean terminal) {
        this.terminal = terminal;
    }

    public boolean isTerminal() {
        return terminal;
    }
}
```

---

# 14. Records and Value Objects

Records are excellent for immutable data carriers.

```java
public record CustomerResponse(
        long id,
        String name,
        String email
) {}
```

They automatically provide:

- constructor,
- accessors,
- `equals()`,
- `hashCode()`,
- `toString()`.

Records are especially useful for:

- DTOs,
- commands,
- API responses,
- events,
- configuration values,
- simple value objects.

Validation is still possible:

```java
public record Money(BigDecimal amount, Currency currency) {

    public Money {
        Objects.requireNonNull(amount);
        Objects.requireNonNull(currency);

        if (amount.scale() > 2) {
            throw new IllegalArgumentException("Amount supports at most 2 decimals");
        }
    }
}
```

Do not use records blindly for mutable domain entities that require lifecycle behavior.

---

# 15. Collections

Choose the data structure based on intent.

## List

Use when:

- order matters,
- duplicates are allowed.

```java
List<OrderItem> items = new ArrayList<>();
```

## Set

Use when:

- duplicates should not exist.

```java
Set<String> permissions = new HashSet<>();
```

## Map

Use when retrieving values by key.

```java
Map<Long, Customer> customersById = new HashMap<>();
```

## Prefer interfaces

Bad:

```java
ArrayList<User> users = new ArrayList<>();
```

Better:

```java
List<User> users = new ArrayList<>();
```

## Avoid exposing mutable collections

Bad:

```java
public List<String> getRoles() {
    return roles;
}
```

Better:

```java
public List<String> getRoles() {
    return List.copyOf(roles);
}
```

or:

```java
public List<String> roles() {
    return Collections.unmodifiableList(roles);
}
```

---

# 16. Generics

Generics provide compile-time type safety.

Without generics:

```java
List values = new ArrayList();
values.add("hello");

Integer number = (Integer) values.get(0);
```

This fails at runtime.

With generics:

```java
List<String> values = new ArrayList<>();
```

The compiler protects you.

## Generic method

```java
public static <T> T requirePresent(Optional<T> value, String message) {
    return value.orElseThrow(() -> new IllegalArgumentException(message));
}
```

## PECS

A useful rule:

> Producer Extends, Consumer Super.

Producer:

```java
public void processNumbers(List<? extends Number> numbers) {
}
```

Consumer:

```java
public void addIntegers(List<? super Integer> target) {
    target.add(10);
}
```

Avoid overly complex generic hierarchies that make APIs difficult to understand.

---

# 17. Streams and Lambdas

Streams are powerful when expressing transformations.

Good:

```java
List<String> activeEmails = customers.stream()
        .filter(Customer::isActive)
        .map(Customer::email)
        .filter(Objects::nonNull)
        .map(String::trim)
        .filter(email -> !email.isBlank())
        .toList();
```

A stream pipeline should read like a story.

## Avoid streams when they reduce clarity

Bad:

```java
orders.stream().forEach(order -> {
    validate(order);
    save(order);
    notify(order);
    audit(order);
});
```

A loop may communicate side effects more clearly:

```java
for (Order order : orders) {
    processOrder(order);
}
```

## Avoid deeply nested stream expressions

Bad:

```java
customers.stream()
    .flatMap(c -> c.orders().stream()
        .filter(o -> o.items().stream()
            .anyMatch(i -> i.price().compareTo(BigDecimal.ZERO) > 0)))
    ...
```

Extract methods:

```java
customers.stream()
        .flatMap(customer -> customer.orders().stream())
        .filter(this::containsPricedItem)
        .toList();
```

---

# 18. Exceptions and Error Handling

Exceptions should communicate meaningful failure.

Bad:

```java
throw new Exception("error");
```

Better:

```java
throw new CustomerNotFoundException(customerId);
```

## Do not catch exceptions just to ignore them

Bad:

```java
try {
    repository.save(order);
} catch (Exception e) {
}
```

This destroys important failure information.

## Do not catch Exception everywhere

Bad:

```java
catch (Exception e)
```

unless you are at a system boundary and deliberately converting/logging unexpected failures.

Prefer specific exceptions:

```java
catch (SQLException e) {
    throw new OrderPersistenceException(order.id(), e);
}
```

## Preserve the cause

Bad:

```java
throw new RuntimeException(e.getMessage());
```

Better:

```java
throw new OrderPersistenceException("Failed to save order", e);
```

## Checked vs unchecked

Use checked exceptions when the caller is realistically expected to recover from a condition.

Use unchecked exceptions for many programming errors, invariant violations, invalid state, and business/service failures where forced catch declarations add little value.

What matters most is consistency.

## Do not use exceptions for normal control flow

Bad:

```java
try {
    return map.get(key).toString();
} catch (NullPointerException e) {
    return "";
}
```

Better:

```java
Object value = map.get(key);
return value == null ? "" : value.toString();
```

---

# 19. Resource Management

Use try-with-resources.

Bad:

```java
Connection connection = dataSource.getConnection();

try {
    ...
} finally {
    connection.close();
}
```

Better:

```java
try (Connection connection = dataSource.getConnection()) {
    ...
}
```

It works with `AutoCloseable`.

Typical resources:

- database connections,
- streams,
- readers,
- writers,
- files,
- HTTP clients/resources depending on API.

---

# 20. SOLID Principles

SOLID is a set of design principles for maintainable object-oriented systems.

## S — Single Responsibility Principle

A class should have one primary reason to change.

Bad:

```java
public class InvoiceService {

    public BigDecimal calculate(Invoice invoice) {
        ...
    }

    public void save(Invoice invoice) {
        ...
    }

    public void generatePdf(Invoice invoice) {
        ...
    }

    public void email(Invoice invoice) {
        ...
    }
}
```

Better:

```java
InvoiceCalculator
InvoiceRepository
InvoicePdfGenerator
InvoiceNotificationService
```

## O — Open/Closed Principle

Software should be open for extension but closed for modification.

Bad:

```java
public BigDecimal calculateDiscount(Customer customer) {
    if (customer.type() == REGULAR) {
        return ...
    } else if (customer.type() == PREMIUM) {
        return ...
    } else if (customer.type() == VIP) {
        return ...
    }
}
```

Better:

```java
public interface DiscountPolicy {
    BigDecimal calculate(Customer customer);
}
```

Implementations:

```java
RegularDiscountPolicy
PremiumDiscountPolicy
VipDiscountPolicy
```

## L — Liskov Substitution Principle

A subtype should behave in a way compatible with its parent abstraction.

Classic violation:

```java
class Bird {
    void fly() {}
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException();
    }
}
```

Better abstractions:

```java
interface Bird {}

interface FlyingBird extends Bird {
    void fly();
}
```

## I — Interface Segregation Principle

Do not force clients to depend on operations they do not use.

Bad:

```java
interface Worker {
    void work();
    void eat();
    void sleep();
}
```

A machine implementing this interface makes little sense.

Better:

```java
interface Workable {
    void work();
}

interface Feedable {
    void eat();
}
```

## D — Dependency Inversion Principle

High-level business logic should depend on abstractions, not infrastructure details.

Bad:

```java
public class OrderService {

    private final MySqlOrderRepository repository =
            new MySqlOrderRepository();
}
```

Better:

```java
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }
}
```

---

# 21. DRY, KISS, YAGNI and Separation of Concerns

## DRY — Don't Repeat Yourself

Bad:

```java
double finalPrice = price - price * 0.18;
```

copied in six classes.

Better:

```java
taxCalculator.calculateNetPrice(price);
```

However, not every repeated line is meaningful duplication.

Two code blocks that happen to look similar today may represent different concepts.

Do not create the wrong abstraction merely to eliminate duplicate lines.

## KISS — Keep It Simple

Bad:

```java
interface AbstractEntityPropertyResolutionStrategyFactoryProvider {
}
```

when all you needed was:

```java
UserMapper
```

## YAGNI — You Aren't Gonna Need It

Do not build features based only on imagined future requirements.

Examples:

- plugin systems nobody requested,
- generic workflow engines for one workflow,
- database tables for hypothetical future scenarios,
- five abstraction layers around a simple service.

## Separation of concerns

Different responsibilities should live in different components.

For example:

```text
Controller -> HTTP handling
Service    -> application/business workflow
Domain     -> business rules
Repository -> persistence abstraction
Client     -> external service integration
Mapper     -> model conversion
```

---

# 22. Composition vs Inheritance

Inheritance creates strong coupling.

Bad:

```java
class CsvExporter extends DatabaseService {
}
```

A CSV exporter is not a database service.

Prefer composition:

```java
public class CsvExporter {

    private final CustomerRepository repository;

    public CsvExporter(CustomerRepository repository) {
        this.repository = repository;
    }
}
```

Use inheritance when there is a genuine "is-a" relationship and substitutability makes sense.

Use composition when one component simply needs another component's behavior.

---

# 23. Interfaces and Abstractions

Create abstractions around meaningful boundaries.

Good:

```java
public interface PaymentGateway {
    PaymentResult charge(PaymentRequest request);
}
```

Possible implementations:

```java
StripePaymentGateway
RazorpayPaymentGateway
FakePaymentGateway
```

Avoid creating interfaces only because:

> "Every class should have an interface."

A simple internal class may not need one.

An interface is especially valuable when:

- multiple implementations exist,
- an external dependency must be isolated,
- testing requires substitution,
- the boundary is architectural,
- a contract is part of the domain.

---

# 24. Dependency Injection

Dependency injection makes dependencies explicit.

Bad:

```java
public class NotificationService {

    private final EmailClient client = new EmailClient();
}
```

Better:

```java
public class NotificationService {

    private final EmailClient client;

    public NotificationService(EmailClient client) {
        this.client = client;
    }
}
```

Benefits:

- testability,
- loose coupling,
- replacement of implementations,
- explicit dependencies.

Constructor injection is usually the cleanest default.

Avoid hidden service locators:

```java
ServiceRegistry.get(PaymentService.class)
```

because dependencies become invisible.

---

# 25. Design Patterns for Clean Java

Patterns are tools, not goals.

Use them when they simplify a known problem.

## Strategy

Useful when behavior varies.

```java
public interface ShippingCostPolicy {
    Money calculate(Order order);
}
```

Implementations:

```java
StandardShippingCostPolicy
ExpressShippingCostPolicy
InternationalShippingCostPolicy
```

## Factory

Useful when object construction varies.

```java
public PaymentProcessor create(PaymentMethod method) {
    return switch (method) {
        case CARD -> new CardPaymentProcessor();
        case UPI -> new UpiPaymentProcessor();
        case BANK_TRANSFER -> new BankTransferProcessor();
    };
}
```

## Builder

Useful for complex object construction with many optional values.

## Adapter

Useful when integrating incompatible APIs.

```java
public class LegacySmsAdapter implements SmsSender {

    private final LegacySmsApi legacyApi;

    @Override
    public void send(String number, String message) {
        legacyApi.dispatch(number, message);
    }
}
```

## Decorator

Useful for adding behavior around another implementation.

Examples:

- caching,
- metrics,
- retries,
- logging.

## Observer / Domain Events

Useful for decoupling reactions from the primary action.

```java
OrderPlaced event
```

Subscribers might:

- send email,
- update analytics,
- reserve stock,
- publish integration messages.

## State

Useful when behavior depends heavily on object state.

Instead of giant `if`/`switch` blocks, state-specific behavior may be modeled explicitly.

## Template Method

Useful when an algorithm has a stable sequence with customizable steps.

Use carefully; composition is often easier to evolve.

---

# 26. Packages and Modules

Package names should reflect domain or responsibility.

Good:

```text
com.example.billing.invoice
com.example.billing.payment
com.example.customer.registration
```

Avoid:

```text
com.example.misc
com.example.common.everything
com.example.helpers
```

## Keep package dependencies directional

A domain package should not depend on web-controller implementation details.

Example direction:

```text
web -> application -> domain
                 -> ports
infrastructure -> ports
```

Avoid cyclic dependencies.

---

# 27. DTOs, Entities, Domain Models and Mappers

Do not use one class for every layer by default.

A database entity:

```java
@Entity
class CustomerEntity {
    ...
}
```

may have persistence-specific concerns.

An API request:

```java
public record CreateCustomerRequest(
        String name,
        String email
) {}
```

A domain model:

```java
public class Customer {
    ...
}
```

A response:

```java
public record CustomerResponse(
        long id,
        String name,
        String email
) {}
```

Separating them can prevent:

- leaking DB internals into APIs,
- mass assignment issues,
- accidental persistence coupling,
- unwanted serialization,
- difficult evolution.

Mapper:

```java
public Customer toDomain(CustomerEntity entity) {
    return new Customer(
            entity.getId(),
            new EmailAddress(entity.getEmail())
    );
}
```

For very small systems, separate models may be unnecessary. Use judgment.

---

# 28. Layered and Hexagonal Architecture

## Traditional layers

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

This is easy to understand and works well for many systems.

## Problem

In large systems, business logic can become tightly coupled to frameworks.

## Hexagonal / Ports and Adapters

Core idea:

> Business logic should not depend directly on infrastructure.

Example:

```text
        REST Controller
              |
              v
       Application Service
              |
              v
           Domain
              |
        Repository Port
              ^
              |
       JPA Repository Adapter
```

Domain interface:

```java
public interface OrderRepository {
    Optional<Order> findById(OrderId id);
    void save(Order order);
}
```

Infrastructure implementation:

```java
public class JpaOrderRepositoryAdapter implements OrderRepository {
    ...
}
```

This allows the business core to remain independent of JPA.

Do not introduce architectural complexity unless the application's size and lifetime justify it.

---

# 29. Clean API Design

An API should communicate intent.

Bad:

```java
public Object process(Object input, int type, boolean mode);
```

Better:

```java
public PaymentResult authorizePayment(
        PaymentRequest request
);
```

## Prefer domain types

Bad:

```java
void transfer(String from, String to, double amount)
```

Better:

```java
void transfer(
        AccountId source,
        AccountId destination,
        Money amount
)
```

## Avoid primitive obsession

Instead of:

```java
String email
String phone
String customerId
String currency
```

consider:

```java
EmailAddress
PhoneNumber
CustomerId
Currency
```

when validation or behavior matters.

## Return useful result objects

Instead of:

```java
boolean createOrder(...)
```

consider:

```java
OrderCreationResult createOrder(...)
```

with structured information.

---

# 30. Persistence and Database Code

Keep SQL/persistence concerns away from business logic.

Bad:

```java
public void approveOrder(long id) throws SQLException {
    Connection c = ...
    PreparedStatement p = ...
    ...
    if (...) {
       // business calculations
    }
}
```

Better:

```java
public void approveOrder(OrderId orderId) {

    Order order = repository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException(orderId));

    order.approve();

    repository.save(order);
}
```

Repository hides storage details.

## Avoid N+1 query problems

Example problematic flow:

```java
for (Order order : orders) {
    customerRepository.findById(order.customerId());
}
```

If 1,000 orders exist, this can produce 1,001 queries.

Prefer:

- joins,
- fetch strategies,
- batch queries,
- projections,
- carefully designed repository methods.

## Transactions

A business operation that must succeed or fail atomically should normally define a transaction boundary.

Example:

```java
@Transactional
public void transferMoney(...) {
    debit(...);
    credit(...);
}
```

Do not place enormous unrelated workflows inside one transaction.

---

# 31. Logging

Logs are operational documentation.

Good logging answers:

- what happened?
- to which request/entity?
- what was the result?
- what failed?
- where can we correlate the event?

Bad:

```java
log.info("here");
log.info("test");
log.info("value=" + value);
```

Better:

```java
log.info(
        "Order placed. orderId={}, customerId={}",
        order.id(),
        order.customerId()
);
```

## Parameterized logging

Prefer:

```java
log.debug("Customer loaded. customerId={}", customerId);
```

over:

```java
log.debug("Customer loaded: " + customerId);
```

## Log levels

### TRACE

Very detailed diagnostic information.

### DEBUG

Developer-focused information.

### INFO

Normal important application events.

### WARN

Unexpected but recoverable conditions.

### ERROR

Failures requiring investigation.

## Never log sensitive data

Avoid logging:

- passwords,
- authentication tokens,
- session IDs,
- full credit-card data,
- private keys,
- secrets,
- sensitive personal information unless strictly controlled.

---

# 32. Configuration and Secrets

Avoid hardcoding environment-specific data.

Bad:

```java
String databasePassword = "admin123";
```

Better:

```java
String databasePassword =
        environment.getProperty("DATABASE_PASSWORD");
```

Configuration should normally come from:

- environment variables,
- configuration files,
- secret managers,
- deployment platforms.

Do not commit secrets to Git.

Use typed configuration where possible.

For Spring Boot, configuration classes can make settings clearer than scattered string lookups.

---

# 33. Security-Oriented Clean Coding

Secure code and clean code overlap heavily.

## Validate input

Do not trust external input.

Validate:

- required fields,
- length,
- allowed formats,
- allowed ranges,
- domain constraints.

## Use parameterized SQL

Never:

```java
String sql =
        "SELECT * FROM users WHERE email = '" + email + "'";
```

Use prepared statements:

```java
PreparedStatement statement =
        connection.prepareStatement(
            "SELECT * FROM users WHERE email = ?"
        );

statement.setString(1, email);
```

## Authorization belongs in business-sensitive paths

Authentication answers:

> Who are you?

Authorization answers:

> Are you allowed to perform this operation?

Do not rely only on hiding UI buttons.

## Prevent over-posting

Do not bind arbitrary request JSON directly into sensitive persistence entities.

Use explicit request DTOs.

## Sensitive errors

Do not return internal stack traces to clients.

Bad response:

```text
SQLException at com.company.PaymentDao line 523...
```

Better:

```json
{
  "code": "PAYMENT_PROCESSING_FAILED",
  "message": "Unable to process payment."
}
```

Keep detailed diagnostics in secure logs.

---

# 34. Concurrency and Thread Safety

Concurrent programs can fail in non-obvious ways.

Bad:

```java
public class Counter {

    private int count;

    public void increment() {
        count++;
    }
}
```

`count++` is not atomic.

Possible solutions include:

```java
AtomicInteger
```

or synchronization:

```java
public synchronized void increment() {
    count++;
}
```

Choose based on requirements.

## Prefer immutability

Immutable data drastically reduces concurrency problems.

## Avoid shared mutable state

Bad:

```java
static List<Request> requests = new ArrayList<>();
```

used by multiple threads without protection.

## Concurrent collections

Use specialized collections when appropriate:

```java
ConcurrentHashMap
CopyOnWriteArrayList
BlockingQueue
```

## Executors

Prefer executor abstractions over manually creating many threads.

```java
ExecutorService executor =
        Executors.newFixedThreadPool(10);
```

Always manage lifecycle correctly.

## CompletableFuture

Useful for asynchronous composition.

```java
CompletableFuture<Customer> customerFuture =
        CompletableFuture.supplyAsync(
            () -> customerService.load(customerId),
            executor
        );
```

Avoid chains so complex that error handling becomes unreadable.

## Virtual threads

Modern Java provides virtual threads for high-concurrency blocking workloads.

The clean-code principle still applies:

- control concurrency,
- propagate cancellation appropriately,
- define timeouts,
- handle exceptions,
- avoid unbounded work,
- protect shared state.

---

# 35. Performance Without Destroying Readability

The first optimization should usually be:

> Choose the right algorithm and data structure.

Example:

Searching repeatedly in a list:

```java
for (Order order : orders) {
    if (customerIds.contains(order.customerId())) {
        ...
    }
}
```

If `customerIds` is a `List`, lookup may be O(n).

Using a `Set` may improve repeated membership checks:

```java
Set<Long> customerIds = new HashSet<>(ids);
```

## Avoid premature optimization

Do not make code complicated based on assumptions.

Measure first using:

- profiling,
- metrics,
- benchmarks,
- database query analysis.

## Watch common performance problems

- N+1 database queries,
- unnecessary serialization,
- loading huge collections,
- unnecessary object creation in hot paths,
- repeated expensive calculations,
- poor indexes,
- excessive remote API calls,
- excessive logging,
- blocking calls in constrained thread pools.

## Benchmark correctly

For microbenchmarks, use a proper benchmarking framework rather than naïve `System.nanoTime()` loops for serious decisions.

---

# 36. Testing Clean Java Code

Clean production code and clean test code support each other.

A useful test communicates:

- context,
- action,
- expected behavior.

Example:

```java
@Test
void shouldRejectWithdrawalWhenBalanceIsInsufficient() {

    BankAccount account =
            new BankAccount(new BigDecimal("100.00"));

    assertThrows(
            InsufficientFundsException.class,
            () -> account.withdraw(new BigDecimal("150.00"))
    );
}
```

Tests are executable documentation.

---

# 37. Unit Testing Principles

A unit test should generally be:

- fast,
- deterministic,
- isolated,
- readable,
- focused on behavior.

## AAA pattern

Arrange:

```java
Customer customer = activeCustomer();
```

Act:

```java
Discount discount = calculator.calculate(customer);
```

Assert:

```java
assertEquals(expectedDiscount, discount);
```

## Descriptive test names

Bad:

```java
test1()
```

Better:

```java
shouldApplyVipDiscountWhenCustomerIsVip()
```

## Test behavior, not implementation

Bad:

```java
verify(repository, times(1)).findById(id);
verify(mapper, times(1)).map(...);
```

if those interactions are not important business behavior.

Prefer verifying the observable outcome.

---

# 38. Mocking

Mocks are useful for external collaborators.

Example:

```java
PaymentGateway gateway = mock(PaymentGateway.class);

when(gateway.charge(any()))
        .thenReturn(PaymentResult.success());
```

Do not mock everything.

Avoid mocking simple value objects or collections.

A test requiring 15 mocks often indicates the production class has too many responsibilities.

Useful alternatives:

- fakes,
- in-memory repositories,
- test builders,
- real value objects.

---

# 39. Integration and End-to-End Testing

## Unit test

Tests a small unit of behavior.

## Integration test

Tests multiple real components together.

Examples:

- repository + real test database,
- HTTP client + mock server,
- application + message broker.

## End-to-end test

Tests a major user workflow through the full application.

A healthy test strategy usually includes many unit tests, selected integration tests, and fewer end-to-end tests.

---

# 40. Test-Driven Development

TDD cycle:

```text
Red -> Green -> Refactor
```

## Red

Write a failing test describing desired behavior.

## Green

Write the simplest code to make it pass.

## Refactor

Improve structure without changing behavior.

TDD can help with:

- API design,
- modularity,
- regression safety,
- incremental design.

It is a technique, not a religion.

---

# 41. Refactoring

Refactoring means improving internal structure without changing observable behavior.

Typical refactorings:

- rename variable,
- rename method,
- extract method,
- extract class,
- introduce parameter object,
- replace conditional with polymorphism,
- replace primitive with value object,
- move method,
- inline unnecessary abstraction,
- split large service,
- remove dead code.

Example:

Before:

```java
if (customer.getType().equals("VIP") &&
    customer.getTotalOrders() > 10 &&
    customer.getBalance().compareTo(BigDecimal.ZERO) >= 0) {
    ...
}
```

After:

```java
if (customer.isEligibleForVipReward()) {
    ...
}
```

The condition is now a domain concept.

---

# 42. Code Smells and Their Fixes

## Long Method

Symptoms:

- many local variables,
- many nested conditions,
- several responsibilities.

Fix:

- extract meaningful operations.

## Large Class

Symptoms:

- hundreds/thousands of lines,
- many dependencies,
- unrelated methods.

Fix:

- split by responsibility.

## Primitive Obsession

Bad:

```java
String email;
String customerId;
String status;
```

Fix with domain types where useful.

## Feature Envy

A method uses another object's data more than its own.

Bad:

```java
public BigDecimal calculate(Customer customer) {
    return customer.getOrders()
        .stream()
        ...
}
```

Maybe the behavior belongs inside `Customer` or a dedicated domain service.

## Data Clumps

Same group of parameters repeatedly appears:

```java
String street,
String city,
String state,
String postalCode
```

Introduce:

```java
Address
```

## Shotgun Surgery

One small business change requires modifications across many unrelated files.

This may indicate poor encapsulation.

## Divergent Change

One class changes for many unrelated reasons.

Split responsibilities.

## Dead Code

Delete unused code.

Version control already remembers old code.

Do not keep:

```java
// old implementation
// maybe needed later
```

## Comments explaining bad code

If the code is difficult to understand, first try improving the code itself.

---

# 43. Comments and Documentation

Good comments explain things the code cannot express clearly.

Useful comment:

```java
// The external provider treats midnight as the previous billing day.
// Keep this conversion until API v3 is retired.
```

Poor comment:

```java
// increment i
i++;
```

## Javadoc

Useful for public APIs and non-obvious contracts.

```java
/**
 * Transfers money between accounts atomically.
 *
 * @throws InsufficientFundsException
 *         when the source account does not contain enough funds
 */
public void transfer(
        AccountId source,
        AccountId destination,
        Money amount
) {
}
```

Do not write Javadocs that simply repeat the method name.

## TODO comments

A useful TODO has context:

```java
// TODO(SHOP-1842): Remove compatibility branch after legacy checkout is retired.
```

Bad:

```java
// TODO fix later
```

---

# 44. Formatting and Style

Consistency matters more than personal preference.

Use:

- automated formatting,
- standard indentation,
- predictable braces,
- sensible line lengths,
- organized imports.

Do not spend code-review time debating whitespace that tooling can enforce.

Example:

```java
public PaymentResult charge(
        Customer customer,
        Money amount,
        PaymentMethod method
) {
    ...
}
```

Formatting should reveal structure.

---

# 45. Static Analysis and Quality Tools

Automation can catch many issues before humans review code.

Useful categories include:

- compiler warnings,
- formatting,
- linting,
- bug detection,
- security scanning,
- test coverage,
- dependency vulnerability analysis.

Common Java ecosystem tools include:

```text
Checkstyle
PMD
SpotBugs
Error Prone
SonarQube / SonarCloud
JaCoCo
OWASP Dependency-Check
Maven Enforcer Plugin
```

Use tools to support judgment, not replace it.

A project with 100% coverage can still be badly designed.

---

# 46. Build and Dependency Hygiene

A clean project has predictable builds.

## Maven

Typical commands:

```bash
mvn clean test
mvn clean verify
mvn package
```

## Gradle

Typical commands:

```bash
./gradlew clean test
./gradlew build
```

## Dependency principles

- add dependencies only when they solve a real problem,
- remove unused dependencies,
- avoid unnecessary transitive dependencies,
- lock or manage versions deliberately,
- keep security fixes current,
- understand licenses where relevant,
- avoid libraries for trivial functionality.

## Reproducible builds

A build should behave consistently across:

- developer machines,
- CI,
- staging,
- production packaging.

---

# 47. Code Review

A code review should focus on correctness and maintainability, not ego.

Review:

- business correctness,
- naming,
- complexity,
- security,
- error handling,
- transactions,
- concurrency,
- test quality,
- API design,
- backward compatibility,
- observability,
- performance risks.

A useful review comment:

```text
Could this validation move into Money so that every caller
gets the same invariant automatically?
```

Poor review comment:

```text
Bad code.
```

Review the code, not the person.

---

# 48. Legacy Code Strategy

Legacy code is often business-critical.

Do not rewrite everything automatically.

A safer strategy:

1. understand current behavior,
2. add characterization tests,
3. identify change boundaries,
4. make small refactorings,
5. extract responsibilities,
6. replace risky areas gradually.

## Characterization tests

A characterization test records what the system currently does, even if the behavior looks strange.

This gives you safety before refactoring.

## Strangler pattern

Gradually replace old functionality with new components.

Example:

```text
Old Billing Module
      ↓
Facade/Router
  ↙       ↘
Old       New
```

Move one capability at a time.

---

# 49. Real-World Scenario Patterns

## Scenario 1 — User Registration

Poor version:

```java
public void register(
        String name,
        String email,
        String password
) throws Exception {

    if (name == null || email == null || password == null) {
        throw new Exception("invalid");
    }

    if (repository.find(email) != null) {
        throw new Exception("exists");
    }

    User user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    repository.save(user);

    emailService.send(email, "Welcome");
}
```

Problems:

- generic exceptions,
- weak validation,
- raw password storage,
- mutable object creation,
- unclear repository API,
- notification tightly coupled.

Cleaner design:

```java
public void register(RegisterUserCommand command) {

    EmailAddress email = new EmailAddress(command.email());

    ensureEmailAvailable(email);

    PasswordHash passwordHash =
            passwordHasher.hash(command.password());

    User user = User.register(
            command.name(),
            email,
            passwordHash
    );

    userRepository.save(user);

    eventPublisher.publish(
            new UserRegistered(user.id(), user.email())
    );
}
```

This makes important concepts explicit.

---

## Scenario 2 — Invoice Calculation

Bad:

```java
public double total(List<Item> items) {
    double x = 0;

    for (Item i : items) {
        x += i.p * i.q;
    }

    return x * 1.18;
}
```

Cleaner:

```java
public Money calculateInvoiceTotal(List<InvoiceItem> items) {

    Money subtotal = items.stream()
            .map(InvoiceItem::lineTotal)
            .reduce(Money.zero(INR), Money::add);

    Money tax = taxPolicy.calculate(subtotal);

    return subtotal.add(tax);
}
```

Now the domain concepts are visible.

---

## Scenario 3 — Payment Processing

Bad:

```java
if (type.equals("CARD")) {
    ...
} else if (type.equals("UPI")) {
    ...
} else if (type.equals("BANK")) {
    ...
}
```

Better:

```java
PaymentProcessor processor =
        processorFactory.forMethod(request.method());

return processor.process(request);
```

Each payment method can evolve independently.

---

## Scenario 4 — Approval Workflow

Bad:

```java
if (level == 1 && amount < 10000) {
    ...
} else if (level == 1 && amount >= 10000) {
    ...
} else if (level == 2 && role.equals("FINANCE")) {
    ...
}
```

Better domain model:

```java
ApprovalDecision decision =
        approvalPolicy.evaluate(request, approver);
```

Policy implementations can encapsulate rules.

If workflow rules change frequently, consider storing policy configuration separately from code—but only if the requirement actually exists.

---

## Scenario 5 — External API Integration

Do not scatter HTTP code throughout business services.

Create a client boundary:

```java
public interface ExchangeRateProvider {
    ExchangeRate getRate(
            Currency source,
            Currency target,
            LocalDate date
    );
}
```

Adapter:

```java
public final class HttpExchangeRateProvider
        implements ExchangeRateProvider {

    private final HttpClient client;

    ...
}
```

Business code remains independent of HTTP details.

---

## Scenario 6 — File Upload

Separate concerns:

```text
Controller
  -> validation
  -> storage service
  -> metadata service
  -> antivirus/security checks if required
  -> response mapping
```

Avoid controllers containing 300 lines of file handling logic.

---

## Scenario 7 — Reporting

A reporting service should not know HTML, CSV, Excel, database queries, and email all at once.

Possible design:

```java
ReportDataProvider
ReportGenerator
ReportRenderer
ReportDeliveryService
```

Example renderers:

```java
CsvReportRenderer
PdfReportRenderer
ExcelReportRenderer
```

---

## Scenario 8 — Notification System

Interface:

```java
public interface NotificationChannel {
    void send(Notification notification);
}
```

Implementations:

```java
EmailNotificationChannel
SmsNotificationChannel
PushNotificationChannel
```

The domain chooses the notification intent, not provider-specific mechanics.

---

# 50. Common Anti-Patterns

## God Object

One class knows everything and does everything.

Fix by decomposing responsibilities.

## Utility Class Explosion

Bad:

```text
StringUtils
DateUtils
OrderUtils
CustomerUtils
ApplicationUtils
CommonUtils
```

Some utilities are valid, but many indicate behavior has been removed from the objects that own it.

## Singleton Everywhere

Singletons introduce hidden global state and can make testing harder.

Prefer dependency injection unless true process-wide identity is necessary.

## Anemic Domain Model

Example:

```java
class Order {
    getters;
    setters;
}
```

while all behavior lives in:

```java
OrderService
```

For rich business domains, move invariants and domain behavior into domain objects.

## Service Layer as a Dumping Ground

A service with 80 dependencies and 5,000 lines is not clean architecture.

## Catch-and-Log-and-Throw

Bad:

```java
catch (Exception e) {
    log.error("failed", e);
    throw e;
}
```

If every layer logs the same exception, logs become duplicated.

Usually log at a meaningful boundary.

## Returning Magic Status Codes

Bad:

```java
return 7;
```

Better:

```java
return PaymentStatus.DECLINED;
```

## Stringly-Typed Programming

Bad:

```java
Map<String, String> data;
```

used for important domain objects.

Prefer typed structures.

---

# 51. Clean Coding Interview Knowledge

Be able to explain these topics clearly.

## What is clean code?

Code optimized for human understanding, safe modification, testing, and long-term maintenance.

## Why are small methods useful?

They reduce cognitive load and allow responsibilities to be named explicitly.

## What is high cohesion?

A class's members strongly relate to one responsibility.

## What is low coupling?

A component depends minimally on implementation details of other components.

## What is dependency inversion?

High-level policies depend on abstractions rather than low-level implementations.

## DRY vs abstraction

DRY removes duplicated knowledge, not merely repeated syntax.

## Composition vs inheritance

Prefer composition for flexible reuse; use inheritance only when a true substitutable "is-a" relationship exists.

## What is technical debt?

The future cost created by design or implementation shortcuts.

## What is refactoring?

Improving internal structure without changing observable behavior.

## What is a code smell?

A symptom that may indicate deeper design problems.

## Why is immutability useful?

It reduces state changes, side effects, concurrency risks, and reasoning complexity.

---

# 52. Professional Checklists

## Before Writing Code

- [ ] Do I understand the business requirement?
- [ ] What are the inputs and outputs?
- [ ] What can fail?
- [ ] Where should validation occur?
- [ ] Does a similar domain abstraction already exist?
- [ ] What is the simplest design that works?
- [ ] Do I need a new dependency?
- [ ] Is this synchronous or asynchronous work?
- [ ] Does it require a transaction?
- [ ] Are there security implications?

## Method Checklist

- [ ] Does the method name reveal intent?
- [ ] Does it do one primary thing?
- [ ] Are parameters understandable?
- [ ] Can boolean parameters be replaced?
- [ ] Are side effects obvious?
- [ ] Is error behavior clear?
- [ ] Is the method easy to test?

## Class Checklist

- [ ] Does the class have one primary responsibility?
- [ ] Are fields private?
- [ ] Are invariants protected?
- [ ] Is mutable state minimized?
- [ ] Are dependencies explicit?
- [ ] Is the public API minimal?
- [ ] Does the class have too many dependencies?
- [ ] Is behavior located near the data it uses?

## API Checklist

- [ ] Are request/response models explicit?
- [ ] Are validation failures clear?
- [ ] Are HTTP/domain concerns separated?
- [ ] Are sensitive fields excluded?
- [ ] Are error responses structured?
- [ ] Is backward compatibility considered?
- [ ] Is authorization enforced server-side?

## Database Checklist

- [ ] Are queries parameterized?
- [ ] Are transaction boundaries correct?
- [ ] Is N+1 query behavior avoided?
- [ ] Are indexes appropriate?
- [ ] Is pagination used for large datasets?
- [ ] Is persistence logic separated from business logic?

## Logging Checklist

- [ ] Does the log contain useful context?
- [ ] Is the level appropriate?
- [ ] Are secrets excluded?
- [ ] Are identifiers available for correlation?
- [ ] Are exceptions logged only where meaningful?
- [ ] Is noisy logging avoided?

## Security Checklist

- [ ] Validate untrusted input.
- [ ] Escape/encode output where required.
- [ ] Use parameterized database access.
- [ ] Enforce authorization.
- [ ] Protect secrets.
- [ ] Avoid sensitive data in logs.
- [ ] Use secure password hashing.
- [ ] Validate uploaded files.
- [ ] Use timeouts for external calls.
- [ ] Keep dependencies patched.

## Testing Checklist

- [ ] Is important business behavior covered?
- [ ] Are edge cases tested?
- [ ] Are failure paths tested?
- [ ] Are tests deterministic?
- [ ] Are test names meaningful?
- [ ] Are excessive mocks avoided?
- [ ] Do integration tests cover important boundaries?

## Code Review Checklist

- [ ] Is the behavior correct?
- [ ] Can the code be understood quickly?
- [ ] Are names meaningful?
- [ ] Is complexity justified?
- [ ] Is duplication meaningful or accidental?
- [ ] Is error handling correct?
- [ ] Are race conditions possible?
- [ ] Are database/network calls efficient?
- [ ] Are logs useful and safe?
- [ ] Are tests adequate?
- [ ] Does the code introduce unnecessary abstractions?
- [ ] Can a future developer modify it safely?

---

# 53. Practice Exercises

## Beginner

### Exercise 1

Refactor:

```java
public double c(double p, int q) {
    return p * q * 1.18;
}
```

Think about:

- naming,
- money type,
- tax policy,
- method responsibility.

### Exercise 2

Refactor:

```java
if (user != null &&
    user.getStatus().equals("ACTIVE") &&
    user.getRole().equals("ADMIN")) {
    ...
}
```

Possible direction:

```java
if (user.canManageSystem()) {
    ...
}
```

### Exercise 3

Replace magic values:

```java
if (retry > 3) {
    Thread.sleep(5000);
}
```

Use named constants or configuration.

---

## Intermediate

### Exercise 4

Refactor this class:

```java
public class CustomerService {

    public void save() {}
    public void sendEmail() {}
    public void createInvoice() {}
    public void exportCsv() {}
    public void resetPassword() {}
}
```

Identify responsibilities and split them.

### Exercise 5

Replace this conditional design:

```java
switch (paymentType) {
    case "CARD":
        ...
        break;
    case "UPI":
        ...
        break;
    case "BANK":
        ...
        break;
}
```

Try Strategy + Factory.

### Exercise 6

Design a `Money` value object.

Requirements:

- BigDecimal amount,
- Currency,
- no cross-currency addition,
- immutable,
- equality by value.

---

## Advanced

### Exercise 7

Design an order approval workflow with:

- amount thresholds,
- department-specific approvers,
- final finance approval,
- rejection,
- audit history.

Try:

```text
ApprovalPolicy
ApprovalStep
ApprovalDecision
ApprovalHistory
Approver
```

### Exercise 8

Build a payment service using hexagonal architecture.

Core port:

```java
PaymentGateway
PaymentRepository
EventPublisher
```

Adapters:

```java
RazorpayAdapter
JpaPaymentRepository
KafkaEventPublisher
```

### Exercise 9

Refactor a 1,000-line legacy service safely using characterization tests.

Document:

- existing behavior,
- dependencies,
- seams,
- incremental extraction plan.

---

# 54. Recommended Learning Path

## Stage 1 — Java readability

Master:

- naming,
- formatting,
- variables,
- methods,
- classes,
- exceptions,
- collections.

## Stage 2 — Object-oriented design

Master:

- encapsulation,
- immutability,
- composition,
- interfaces,
- domain modeling,
- value objects.

## Stage 3 — Design principles

Master:

- SOLID,
- DRY,
- KISS,
- YAGNI,
- separation of concerns,
- dependency injection.

## Stage 4 — Professional backend design

Master:

- API boundaries,
- DTOs,
- persistence,
- transactions,
- logging,
- configuration,
- security.

## Stage 5 — Testing

Master:

- unit tests,
- integration tests,
- mocking,
- test doubles,
- TDD.

## Stage 6 — Architecture

Master:

- layered architecture,
- ports and adapters,
- domain boundaries,
- package dependencies,
- event-driven patterns.

## Stage 7 — Advanced engineering

Master:

- concurrency,
- performance profiling,
- observability,
- legacy refactoring,
- static analysis,
- secure coding,
- code review.

---

# 55. Final Golden Rules

Keep these rules near your IDE.

1. **Make code read like a story.**
2. **Choose names that reveal intent.**
3. **Keep methods focused.**
4. **Keep classes cohesive.**
5. **Hide internal state.**
6. **Prefer immutable data when practical.**
7. **Make invalid states difficult to represent.**
8. **Use domain types instead of meaningless primitives where valuable.**
9. **Avoid hidden side effects.**
10. **Depend on abstractions at important boundaries.**
11. **Prefer composition over inheritance for reuse.**
12. **Do not abstract before you understand the duplication.**
13. **Do not optimize before measuring.**
14. **Do not swallow exceptions.**
15. **Preserve useful exception context.**
16. **Never log secrets.**
17. **Validate untrusted input.**
18. **Write tests that describe behavior.**
19. **Refactor continuously in small safe steps.**
20. **Delete dead code.**
21. **Let tools handle formatting and repetitive quality checks.**
22. **Keep infrastructure details away from core business rules when practical.**
23. **Design APIs so they are difficult to misuse.**
24. **Prefer explicitness over cleverness.**
25. **Optimize for the developer who will modify the code six months from now.**

---

# Appendix A — Example Clean Feature Structure

A practical order feature might look like:

```text
order/
├── api/
│   ├── OrderController.java
│   ├── CreateOrderRequest.java
│   └── OrderResponse.java
├── application/
│   ├── CreateOrderUseCase.java
│   └── OrderMapper.java
├── domain/
│   ├── Order.java
│   ├── OrderId.java
│   ├── OrderItem.java
│   ├── OrderStatus.java
│   ├── OrderRepository.java
│   └── OrderPricingPolicy.java
└── infrastructure/
    ├── JpaOrderEntity.java
    ├── JpaOrderRepository.java
    └── OrderRepositoryAdapter.java
```

This is only one valid approach.

Architecture should solve real project problems rather than imitate diagrams.

---

# Appendix B — Example Before and After

## Before

```java
public String doIt(
        String id,
        String t,
        boolean x
) {

    User u = repo.get(id);

    if (u == null) {
        return "0";
    }

    if (t.equals("1")) {
        if (x) {
            mail.send(u.getEmail(), "done");
        }

        u.setStatus("A");
        repo.save(u);

        return "1";
    }

    return "2";
}
```

Problems:

- meaningless names,
- magic return codes,
- magic status values,
- boolean parameter ambiguity,
- multiple responsibilities,
- unclear business intent.

## After

```java
public ActivationResult activateCustomer(
        CustomerId customerId,
        NotificationPreference notificationPreference
) {

    Customer customer = customerRepository
            .findById(customerId)
            .orElseThrow(
                () -> new CustomerNotFoundException(customerId)
            );

    customer.activate();

    customerRepository.save(customer);

    if (notificationPreference.shouldNotify()) {
        notificationService.sendActivationConfirmation(customer);
    }

    return ActivationResult.success(customer.id());
}
```

The second version is longer, but much easier to understand and evolve.

Clean code is not about minimizing characters.

It is about minimizing confusion.

---

# Appendix C — Clean Code Decision Guide

When unsure, ask:

```text
Can I understand this without mentally decoding it?
        |
        +-- No -> improve naming or extract concepts
        |
        +-- Yes
              |
              v
Does this unit do more than one unrelated thing?
        |
        +-- Yes -> split responsibility
        |
        +-- No
              |
              v
Does this code hide important side effects?
        |
        +-- Yes -> make them explicit
        |
        +-- No
              |
              v
Is this abstraction solving a real current problem?
        |
        +-- No -> simplify
        |
        +-- Yes
              |
              v
Can I test important behavior easily?
        |
        +-- No -> reduce coupling / expose clear boundaries
        |
        +-- Yes -> good direction
```

---

# Appendix D — Suggested Clean-Code Practice Project

Build a small **Order Management System**.

Features:

```text
Customer Registration
Product Catalog
Create Order
Calculate Tax
Apply Discount
Inventory Check
Payment
Approval
Order Status
Email Notification
Audit Log
Reports
```

Practice these concepts:

```text
Value Objects
Records
Enums
SOLID
Strategy
Factory
Repository
Dependency Injection
Validation
Exception Handling
Logging
Unit Tests
Integration Tests
Transactions
Security
Refactoring
```

Suggested core objects:

```java
Customer
CustomerId
EmailAddress
Product
ProductId
Money
Order
OrderItem
OrderId
OrderStatus
Payment
PaymentMethod
PaymentStatus
DiscountPolicy
TaxPolicy
```

Suggested boundaries:

```java
OrderRepository
PaymentGateway
InventoryGateway
NotificationSender
EventPublisher
```

By completing one project while repeatedly applying this handbook, clean coding becomes a habit rather than a list of rules.

---

# Appendix E — Daily Clean Coding Habit

Before committing code, spend five minutes asking:

```text
Can I improve one name?
Can I remove one unnecessary branch?
Can I extract one meaningful concept?
Can I remove one duplication?
Can I improve one error message?
Can I add one important test?
Can I delete one obsolete line?
```

Small improvements performed consistently create clean systems.

---

# Closing Principle

> Clean Java code is not code that uses the most patterns, abstractions, frameworks, or language features. It is code that expresses the business intent clearly, protects important rules, remains easy to test, and allows the next developer to make changes with confidence.

Use this handbook as a reference while coding, refactoring, reviewing pull requests, preparing for interviews, and designing new Java applications.
