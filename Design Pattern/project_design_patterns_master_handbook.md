# Project Design Patterns Master Handbook

> A practical, beginner-friendly, end-to-end reference for learning **software project design patterns**, **application architecture patterns**, **enterprise patterns**, and **project structure practices**.
>
> This handbook is designed so that a beginner can open any section, understand **what the pattern is, why it exists, when to use it, when not to use it, and how it looks in a real project**.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is a Design Pattern?](#2-what-is-a-design-pattern)
3. [Design Pattern vs Architecture vs Principle vs Framework](#3-design-pattern-vs-architecture-vs-principle-vs-framework)
4. [Core Design Principles You Must Know First](#4-core-design-principles-you-must-know-first)
5. [SOLID Principles](#5-solid-principles)
6. [DRY, KISS, YAGNI, SoC and Other Principles](#6-dry-kiss-yagni-soc-and-other-principles)
7. [Coupling, Cohesion, Composition and Abstraction](#7-coupling-cohesion-composition-and-abstraction)
8. [The Three GoF Pattern Families](#8-the-three-gof-pattern-families)
9. [Creational Patterns](#9-creational-patterns)
10. [Structural Patterns](#10-structural-patterns)
11. [Behavioral Patterns](#11-behavioral-patterns)
12. [Application and Enterprise Patterns](#12-application-and-enterprise-patterns)
13. [Repository Pattern](#13-repository-pattern)
14. [Service Layer Pattern](#14-service-layer-pattern)
15. [Unit of Work Pattern](#15-unit-of-work-pattern)
16. [Data Mapper vs Active Record](#16-data-mapper-vs-active-record)
17. [DTO, Entity, Value Object and Model](#17-dto-entity-value-object-and-model)
18. [Dependency Injection and IoC](#18-dependency-injection-and-ioc)
19. [MVC, MVP, MVVM](#19-mvc-mvp-mvvm)
20. [Layered / N-Tier Architecture](#20-layered--n-tier-architecture)
21. [Clean Architecture](#21-clean-architecture)
22. [Hexagonal / Ports and Adapters](#22-hexagonal--ports-and-adapters)
23. [Onion Architecture](#23-onion-architecture)
24. [Modular Monolith](#24-modular-monolith)
25. [Microservices](#25-microservices)
26. [Event-Driven Architecture](#26-event-driven-architecture)
27. [CQRS](#27-cqrs)
28. [Event Sourcing](#28-event-sourcing)
29. [Saga Pattern](#29-saga-pattern)
30. [API Gateway, BFF and Service Aggregator](#30-api-gateway-bff-and-service-aggregator)
31. [Caching Patterns](#31-caching-patterns)
32. [Resilience Patterns](#32-resilience-patterns)
33. [Concurrency and Async Patterns](#33-concurrency-and-async-patterns)
34. [Messaging Patterns](#34-messaging-patterns)
35. [Frontend Design Patterns](#35-frontend-design-patterns)
36. [Project Folder Structure Patterns](#36-project-folder-structure-patterns)
37. [Designing a Real-World Project](#37-designing-a-real-world-project)
38. [Invoice Processing System Example](#38-invoice-processing-system-example)
39. [E-Commerce Example](#39-e-commerce-example)
40. [Approval Workflow Example](#40-approval-workflow-example)
41. [Common Anti-Patterns](#41-common-anti-patterns)
42. [How to Choose the Right Pattern](#42-how-to-choose-the-right-pattern)
43. [Pattern Combinations](#43-pattern-combinations)
44. [Testing Design Patterns](#44-testing-design-patterns)
45. [Refactoring Legacy Code Toward Patterns](#45-refactoring-legacy-code-toward-patterns)
46. [Performance and Scalability Considerations](#46-performance-and-scalability-considerations)
47. [Security Considerations](#47-security-considerations)
48. [Design Pattern Interview Guide](#48-design-pattern-interview-guide)
49. [Practice Projects](#49-practice-projects)
50. [Learning Roadmap](#50-learning-roadmap)
51. [Cheat Sheet](#51-cheat-sheet)
52. [Final Design Checklist](#52-final-design-checklist)

---

# 1. How to Use This Handbook

Do **not** try to memorize every design pattern.

Instead, for every pattern ask:

1. What problem does this pattern solve?
2. What would the code look like without the pattern?
3. What changes become easier after using the pattern?
4. What extra complexity does the pattern introduce?
5. Is the project large enough to justify that complexity?

A design pattern is useful only when it solves a real design problem.

A common beginner mistake is:

> "I learned the Factory Pattern, so I should use Factory everywhere."

That is wrong.

A better mindset is:

> "I have a creation problem with multiple implementations. Would Factory simplify it?"

Patterns are **tools**, not rules.

---

# 2. What Is a Design Pattern?

A **design pattern** is a reusable solution idea for a common software design problem.

It is not a complete piece of code.

It is not a library.

It is not a framework.

It is a proven way of organizing responsibilities between objects, classes, modules, or services.

## Example

Suppose your application sends notifications.

Today you support:

- Email
- SMS

Tomorrow the business asks for:

- WhatsApp
- Push Notification
- Microsoft Teams

You could write:

```ts
if (type === "email") {
    sendEmail();
} else if (type === "sms") {
    sendSms();
} else if (type === "whatsapp") {
    sendWhatsApp();
}
```

This works at first.

But as more notification types are added, this code becomes difficult to maintain.

A better design may use:

- Strategy Pattern
- Factory Pattern
- Dependency Injection

The pattern is not the final code. It is the **design approach**.

---

# 3. Design Pattern vs Architecture vs Principle vs Framework

These concepts are often confused.

## Design Principle

A guideline that helps you make good design decisions.

Examples:

- SOLID
- DRY
- KISS
- YAGNI
- Separation of Concerns

## Design Pattern

A reusable solution structure for a recurring problem.

Examples:

- Factory
- Strategy
- Observer
- Adapter
- Repository

## Architecture Pattern

Defines the high-level organization of an application.

Examples:

- Layered Architecture
- Clean Architecture
- Hexagonal Architecture
- Microservices
- Event-Driven Architecture

## Framework

A reusable software platform that provides implementation infrastructure.

Examples:

- Angular
- Spring Boot
- Laravel
- ASP.NET Core
- Django

## Library

A reusable set of functions/classes that your application calls.

Examples:

- Lodash
- Axios
- NumPy

## Easy Comparison

| Concept | Main Question |
|---|---|
| Principle | How should I think about good design? |
| Pattern | How can I solve this recurring problem? |
| Architecture | How should the whole system be organized? |
| Framework | What platform can help me build it? |
| Library | What reusable code can I call? |

---

# 4. Core Design Principles You Must Know First

Patterns make more sense when you understand design principles.

The most important idea is:

> Software should be easy to change.

Good software design tries to reduce the cost of future change.

Examples of expected changes:

- Database changes
- New payment provider
- New notification channel
- New tax rule
- New API
- New business workflow
- New UI
- New authentication provider
- New vendor integration

If changing one small requirement forces you to modify twenty unrelated files, the design has high coupling.

---

# 5. SOLID Principles

SOLID contains five important object-oriented design principles.

---

## 5.1 Single Responsibility Principle — SRP

> A class or module should have one primary reason to change.

Bad example:

```ts
class InvoiceService {
    calculateTax() {}
    saveToDatabase() {}
    generatePDF() {}
    sendEmail() {}
    writeAuditLog() {}
}
```

This class handles:

- Calculation
- Persistence
- PDF generation
- Email
- Audit

Too many responsibilities.

Better:

```ts
class InvoiceCalculator {}
class InvoiceRepository {}
class InvoicePdfGenerator {}
class InvoiceNotificationService {}
class AuditLogger {}
```

### Real-world scenario

If the email provider changes, the tax calculation class should not change.

---

## 5.2 Open/Closed Principle — OCP

> Software should be open for extension but closed for unnecessary modification.

Suppose you calculate discounts.

Bad:

```ts
function calculateDiscount(type: string, amount: number) {
    if (type === "regular") return amount * 0.05;
    if (type === "premium") return amount * 0.10;
    if (type === "vip") return amount * 0.20;
}
```

Every new customer type modifies the same function.

Better:

```ts
interface DiscountStrategy {
    calculate(amount: number): number;
}

class RegularDiscount implements DiscountStrategy {
    calculate(amount: number) {
        return amount * 0.05;
    }
}

class VipDiscount implements DiscountStrategy {
    calculate(amount: number) {
        return amount * 0.20;
    }
}
```

Now new strategies can be added without changing existing strategies.

---

## 5.3 Liskov Substitution Principle — LSP

> A subtype should be usable wherever its parent type is expected without breaking behavior.

Bad conceptual example:

```text
Bird
 ├── Sparrow
 └── Penguin
```

If `Bird` requires every bird to `fly()`, Penguin violates the assumption.

Better abstraction:

```text
Bird
 ├── FlyingBird
 │    └── Sparrow
 └── Penguin
```

Do not force subclasses to support behavior they cannot logically provide.

---

## 5.4 Interface Segregation Principle — ISP

> Prefer small focused interfaces over one large interface.

Bad:

```ts
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
    driveForklift(): void;
}
```

A software robot may not eat or sleep.

Better:

```ts
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface ForkliftOperator {
    driveForklift(): void;
}
```

---

## 5.5 Dependency Inversion Principle — DIP

> High-level business logic should depend on abstractions rather than concrete implementations.

Bad:

```ts
class OrderService {
    private repo = new MySqlOrderRepository();
}
```

`OrderService` is directly tied to MySQL.

Better:

```ts
interface OrderRepository {
    save(order: Order): Promise<void>;
}

class OrderService {
    constructor(private repo: OrderRepository) {}
}
```

Now implementations can include:

- MySQL
- PostgreSQL
- MongoDB
- In-memory testing repository

---

# 6. DRY, KISS, YAGNI, SoC and Other Principles

## DRY — Don't Repeat Yourself

Avoid duplicating knowledge.

Bad:

```ts
const gst1 = amount1 * 0.18;
const gst2 = amount2 * 0.18;
const gst3 = amount3 * 0.18;
```

Better:

```ts
function calculateGST(amount: number) {
    return amount * 0.18;
}
```

But do not remove duplication too early.

Two pieces of code that look similar may represent different business rules.

---

## KISS — Keep It Simple

Choose the simplest design that meets the requirement.

Do not introduce:

- Kafka
- Microservices
- Event Sourcing
- Kubernetes
- CQRS

for a tiny CRUD application without a clear reason.

---

## YAGNI — You Aren't Gonna Need It

Do not implement functionality only because "we may need it someday."

Example:

Do not build multi-region failover for an internal application with 30 users unless the requirement actually exists.

---

## Separation of Concerns — SoC

Different concerns should live in different parts of the system.

Example:

```text
Controller -> HTTP concern
Service -> Business logic
Repository -> Data access
Validator -> Validation
Mapper -> Object conversion
```

---

## Law of Demeter

A component should know as little as possible about the internal structure of other components.

Bad:

```ts
order.getCustomer().getAddress().getCountry().getTaxRules()
```

This creates deep coupling.

Better:

```ts
taxService.getRulesFor(order)
```

---

## Tell, Don't Ask

Instead of requesting internal data and making decisions outside an object, ask the object to perform the behavior.

Bad:

```ts
if (account.balance >= amount) {
    account.balance -= amount;
}
```

Better:

```ts
account.withdraw(amount);
```

---

## Favor Composition Over Inheritance

Instead of:

```text
EmailNotification extends Notification
SmsNotification extends Notification
WhatsAppNotification extends Notification
```

sometimes it is cleaner to compose:

```text
NotificationService
    uses MessageFormatter
    uses Transport
    uses RetryPolicy
```

Composition usually makes behavior easier to replace.

---

# 7. Coupling, Cohesion, Composition and Abstraction

## Coupling

Coupling means how strongly one component depends on another.

### High coupling

```ts
class PaymentService {
    stripe = new StripeClient("secret-key");
}
```

### Lower coupling

```ts
class PaymentService {
    constructor(private gateway: PaymentGateway) {}
}
```

Low coupling makes changes and testing easier.

---

## Cohesion

Cohesion describes how closely related the responsibilities inside a module are.

High cohesion is good.

A `TaxCalculator` containing tax rules has high cohesion.

A `UtilityManager` containing:

- Tax calculation
- File upload
- Email sending
- Date formatting
- Authentication

has low cohesion.

---

## Abstraction

Expose what callers need, hide implementation details.

Example:

```ts
paymentGateway.charge(order)
```

The caller should not need to know:

- HTTP endpoint
- API signature
- Token format
- Retry implementation

---

## Composition

Build complex behavior by combining small components.

Example:

```text
InvoiceProcessor
 ├── OCRReader
 ├── InvoiceValidator
 ├── VendorMatcher
 ├── TaxCalculator
 ├── WorkflowRouter
 └── InvoiceRepository
```

---

# 8. The Three GoF Pattern Families

The famous "Gang of Four" book describes 23 classical patterns.

They are divided into:

## Creational Patterns

Concerned with object creation.

- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

## Structural Patterns

Concerned with object composition and structure.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

## Behavioral Patterns

Concerned with communication and responsibility between objects.

- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

---

# 9. Creational Patterns

# 9.1 Singleton Pattern

## Intent

Ensure only one instance of a class exists and provide a global access point.

## Example uses

- Configuration manager
- Application logger
- In-memory registry

Example:

```ts
class Config {
    private static instance: Config;

    private constructor() {}

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }
}
```

## Scenario

Your application loads configuration from environment variables once.

```ts
const config = Config.getInstance();
```

## Advantages

- One shared instance
- Centralized configuration

## Problems

Singleton can create hidden global dependencies.

It can make testing difficult.

Modern dependency injection often provides a cleaner alternative.

## Use when

- Exactly one logical instance is required
- Lifecycle is truly application-wide

## Avoid when

You only want Singleton because creating dependencies manually feels inconvenient.

---

# 9.2 Factory Method Pattern

## Intent

Delegate object creation to a factory instead of directly calling constructors everywhere.

Example:

```ts
interface NotificationSender {
    send(message: string): void;
}

class EmailSender implements NotificationSender {
    send(message: string) {
        console.log("Email:", message);
    }
}

class SmsSender implements NotificationSender {
    send(message: string) {
        console.log("SMS:", message);
    }
}

class NotificationFactory {
    static create(type: string): NotificationSender {
        if (type === "email") return new EmailSender();
        if (type === "sms") return new SmsSender();

        throw new Error("Unsupported notification type");
    }
}
```

Usage:

```ts
const sender = NotificationFactory.create("email");
sender.send("Invoice approved");
```

## Real-world scenarios

- Payment gateways
- Report generators
- File parsers
- Database providers
- Notification transports
- OCR engines

## Use when

The exact implementation depends on:

- Configuration
- Input type
- Environment
- Business rule

---

# 9.3 Abstract Factory Pattern

## Intent

Create families of related objects without exposing concrete classes.

Example scenario:

Your application supports different cloud providers.

```text
CloudFactory
 ├── AWSFactory
 │    ├── S3Storage
 │    └── SQSQueue
 └── AzureFactory
      ├── BlobStorage
      └── ServiceBusQueue
```

Example interface:

```ts
interface CloudFactory {
    createStorage(): Storage;
    createQueue(): Queue;
}
```

## Use when

Related components must be created together.

Examples:

- Windows UI components vs macOS UI components
- AWS infrastructure vs Azure infrastructure
- SAP integration family vs Oracle integration family

---

# 9.4 Builder Pattern

## Intent

Construct complex objects step by step.

Bad constructor:

```ts
new Report(
    "Monthly",
    true,
    false,
    "PDF",
    "India",
    null,
    true,
    "Finance"
);
```

Hard to understand.

Builder:

```ts
const report = new ReportBuilder()
    .title("Monthly")
    .format("PDF")
    .region("India")
    .department("Finance")
    .includeSummary(true)
    .build();
```

## Real-world scenarios

- HTTP request construction
- Search queries
- Report generation
- SQL query builders
- Test object creation
- Complex configuration

---

# 9.5 Prototype Pattern

## Intent

Create new objects by cloning an existing object.

Example:

```ts
const standardInvoiceTemplate = {
    currency: "INR",
    gstRate: 18,
    country: "India",
    paymentTerms: 30
};

const vendorInvoice = {
    ...standardInvoiceTemplate,
    vendor: "ABC Pvt Ltd"
};
```

## Useful when

Object creation is expensive or many objects share a common baseline.

Examples:

- Document templates
- Game objects
- UI component templates
- Configuration profiles

---

# 10. Structural Patterns

# 10.1 Adapter Pattern

## Intent

Convert one interface into another interface expected by your application.

Scenario:

Your application expects:

```ts
interface PaymentGateway {
    charge(amount: number): Promise<string>;
}
```

Third-party library provides:

```ts
stripe.makePayment(...)
```

Adapter:

```ts
class StripeAdapter implements PaymentGateway {
    constructor(private stripe: StripeClient) {}

    async charge(amount: number): Promise<string> {
        const result = await this.stripe.makePayment({
            amountInPaise: amount * 100
        });

        return result.transactionId;
    }
}
```

Now business logic depends on `PaymentGateway`, not Stripe.

## Common uses

- Third-party SDKs
- Legacy systems
- External APIs
- Database drivers
- Payment providers
- OCR engines

---

# 10.2 Facade Pattern

## Intent

Provide a simple interface over a complicated subsystem.

Without facade:

```ts
validateInvoice();
runOCR();
findVendor();
calculateTax();
matchPO();
startWorkflow();
saveAudit();
```

Facade:

```ts
invoiceProcessor.process(invoiceFile);
```

Internally the facade coordinates multiple services.

## Use when

A subsystem is complicated and consumers should not know every internal step.

---

# 10.3 Decorator Pattern

## Intent

Add behavior to an object without changing its original class.

Example:

```ts
interface Sender {
    send(message: string): void;
}

class EmailSender implements Sender {
    send(message: string) {
        console.log(message);
    }
}

class RetrySenderDecorator implements Sender {
    constructor(private wrapped: Sender) {}

    send(message: string) {
        try {
            this.wrapped.send(message);
        } catch {
            this.wrapped.send(message);
        }
    }
}
```

Possible decorators:

```text
EmailSender
   ↓
LoggingDecorator
   ↓
RetryDecorator
   ↓
MetricsDecorator
```

## Real-world examples

- Logging
- Caching
- Retry
- Authorization
- Metrics
- Compression

Middleware systems often behave similarly to decorators.

---

# 10.4 Proxy Pattern

## Intent

Provide a substitute object that controls access to another object.

Examples:

- Lazy loading
- Security
- Remote service proxy
- Caching proxy

```ts
class CachedProductRepository implements ProductRepository {
    constructor(
        private realRepository: ProductRepository,
        private cache: Cache
    ) {}

    async findById(id: string) {
        const cached = await this.cache.get(id);

        if (cached) return cached;

        const product = await this.realRepository.findById(id);
        await this.cache.set(id, product);

        return product;
    }
}
```

---

# 10.5 Composite Pattern

## Intent

Treat individual objects and groups of objects uniformly.

Scenario:

Company organization hierarchy:

```text
Company
 ├── Finance
 │    ├── Employee A
 │    └── Employee B
 └── IT
      ├── Developer
      └── Support
```

Both employee and department may expose:

```ts
getCost()
```

A department calculates the sum of children.

## Common uses

- File systems
- Menu trees
- Organization hierarchy
- UI component trees
- Product bundles

---

# 10.6 Bridge Pattern

## Intent

Separate an abstraction from its implementation so both can vary independently.

Example:

```text
Report
 ├── InvoiceReport
 └── TaxReport

Renderer
 ├── PDFRenderer
 ├── ExcelRenderer
 └── HTMLRenderer
```

Without Bridge, you may create:

```text
PdfInvoiceReport
ExcelInvoiceReport
HtmlInvoiceReport
PdfTaxReport
ExcelTaxReport
HtmlTaxReport
```

This causes class explosion.

Bridge separates:

```text
Report -> Renderer
```

---

# 10.7 Flyweight Pattern

## Intent

Share common immutable objects to reduce memory usage.

Example:

A document editor contains one million characters.

Instead of storing font metadata separately for every character, share font style objects.

Common use cases:

- Game engines
- Map markers
- Document rendering
- Large object collections

Modern applications use this pattern less explicitly because frameworks and runtime optimizations often help automatically.

---

# 11. Behavioral Patterns

# 11.1 Strategy Pattern

## Intent

Encapsulate interchangeable algorithms behind a common interface.

Example:

```ts
interface TaxStrategy {
    calculate(amount: number): number;
}

class IndiaTaxStrategy implements TaxStrategy {
    calculate(amount: number) {
        return amount * 0.18;
    }
}

class UAEVATStrategy implements TaxStrategy {
    calculate(amount: number) {
        return amount * 0.05;
    }
}
```

Usage:

```ts
class InvoiceCalculator {
    constructor(private taxStrategy: TaxStrategy) {}

    total(amount: number) {
        return amount + this.taxStrategy.calculate(amount);
    }
}
```

## Use cases

- Tax calculation
- Discount algorithms
- Routing algorithms
- Authentication strategies
- Compression
- Payment provider selection
- OCR preprocessing method

---

# 11.2 Observer Pattern

## Intent

Notify multiple subscribers when something happens.

Example event:

```text
InvoiceApproved
```

Subscribers:

```text
SendEmail
UpdateERP
WriteAuditLog
NotifyVendor
UpdateDashboard
```

Conceptual code:

```ts
eventBus.subscribe("InvoiceApproved", sendEmail);
eventBus.subscribe("InvoiceApproved", updateERP);

eventBus.publish("InvoiceApproved", invoice);
```

## Common uses

- Event systems
- UI state
- Domain events
- Notifications
- WebSockets

---

# 11.3 Command Pattern

## Intent

Represent an operation as an object.

Example:

```ts
interface Command {
    execute(): Promise<void>;
}

class ApproveInvoiceCommand implements Command {
    constructor(private invoiceId: string) {}

    async execute() {
        // approval logic
    }
}
```

Benefits:

- Queue commands
- Retry commands
- Log commands
- Undo commands
- Schedule commands

Common use:

```text
Command Bus
   ↓
ApproveInvoiceCommand
   ↓
ApproveInvoiceHandler
```

CQRS commonly uses commands.

---

# 11.4 Chain of Responsibility

## Intent

Pass a request through a sequence of handlers until one handles it or all handlers process it.

Example approval workflow:

```text
Manager
  ↓
Department Head
  ↓
Finance Controller
  ↓
CFO
```

Example middleware:

```text
Request
 ↓
Authentication
 ↓
Authorization
 ↓
Validation
 ↓
Logging
 ↓
Controller
```

Express.js and ASP.NET middleware pipelines are similar.

---

# 11.5 State Pattern

## Intent

Change object behavior based on its internal state.

Invoice states:

```text
Draft
  ↓
Submitted
  ↓
UnderReview
  ↓
Approved
  ↓
Posted
```

Instead of huge condition blocks:

```ts
if (status === "draft") ...
else if (status === "submitted") ...
else if ...
```

state objects can own allowed behavior.

Useful when state transitions have complex rules.

---

# 11.6 Template Method Pattern

## Intent

Define the overall algorithm in a base class while allowing subclasses to override selected steps.

Example:

```ts
abstract class DocumentProcessor {
    process() {
        this.load();
        this.extract();
        this.validate();
        this.save();
    }

    abstract load(): void;
    abstract extract(): void;
    abstract validate(): void;

    save() {
        console.log("Saved");
    }
}
```

Implementations:

```text
PdfInvoiceProcessor
ImageInvoiceProcessor
EmailInvoiceProcessor
```

---

# 11.7 Iterator Pattern

## Intent

Traverse a collection without exposing its internal representation.

Example:

```ts
for (const item of invoice.items) {
    // ...
}
```

Modern languages often provide iterator support directly.

Useful for:

- Collections
- Pagination
- Streams
- Tree traversal

---

# 11.8 Mediator Pattern

## Intent

Reduce direct communication between many components by routing communication through a mediator.

Without mediator:

```text
A <-> B
A <-> C
A <-> D
B <-> C
B <-> D
C <-> D
```

With mediator:

```text
A ─┐
B ─┼──> Mediator
C ─┤
D ─┘
```

Common in:

- UI components
- Command buses
- Chat rooms
- Workflow orchestration

---

# 11.9 Memento Pattern

## Intent

Capture and restore an object's previous state.

Common uses:

- Undo/redo
- Editor history
- Workflow snapshots
- Game save states

Example:

```text
Current Document
    ↓ save
Memento Snapshot
    ↓ restore
Previous Document State
```

---

# 11.10 Visitor Pattern

## Intent

Add operations to a complex object structure without changing the object classes.

Example document elements:

```text
Paragraph
Image
Table
Chart
```

Visitors:

```text
PDFExportVisitor
HTMLExportVisitor
ValidationVisitor
```

Useful when:

- Object structure is stable
- Operations change frequently

---

# 11.11 Interpreter Pattern

## Intent

Represent and evaluate a grammar or expression language.

Examples:

- Search filters
- Rule engines
- Query languages
- Mathematical expressions

Example rule:

```text
amount > 100000 AND country = "IN"
```

Interpreter objects can represent:

```text
AND
├── GreaterThan(amount, 100000)
└── Equals(country, IN)
```

For complex languages, parser libraries are generally preferable.

---

# 12. Application and Enterprise Patterns

The GoF patterns mainly focus on objects.

Real enterprise systems also use patterns at higher levels.

Important ones include:

- Repository
- Service Layer
- Unit of Work
- Data Mapper
- Active Record
- DTO
- Value Object
- Specification
- Domain Service
- Application Service
- Transaction Script
- Table Module
- Gateway
- Mapper

---

# 13. Repository Pattern

## Intent

Hide database access behind a domain-friendly interface.

Example:

```ts
interface InvoiceRepository {
    findById(id: string): Promise<Invoice | null>;
    save(invoice: Invoice): Promise<void>;
    findPendingApprovals(userId: string): Promise<Invoice[]>;
}
```

MySQL implementation:

```ts
class MySqlInvoiceRepository implements InvoiceRepository {
    async findById(id: string) {
        // SQL query
    }

    async save(invoice: Invoice) {
        // INSERT / UPDATE
    }

    async findPendingApprovals(userId: string) {
        // SQL query
    }
}
```

## Why use it?

Business logic should say:

```ts
invoiceRepository.findById(id)
```

instead of knowing:

```sql
SELECT * FROM invoice_details WHERE invd_id = ?
```

## Benefits

- Easier testing
- Database isolation
- Business-readable API
- Centralized data-access rules

## Mistake

Do not create meaningless repositories that only wrap ORM methods one-to-one.

Bad:

```ts
repository.find()
repository.save()
repository.delete()
```

when the ORM already provides exactly the same behavior.

A repository is most valuable when it expresses domain-specific queries.

---

# 14. Service Layer Pattern

A service layer coordinates business operations.

Example:

```ts
class ApproveInvoiceService {
    constructor(
        private invoiceRepo: InvoiceRepository,
        private workflow: WorkflowService,
        private eventBus: EventBus
    ) {}

    async approve(invoiceId: string, approverId: string) {
        const invoice = await this.invoiceRepo.findById(invoiceId);

        invoice.approveBy(approverId);

        await this.invoiceRepo.save(invoice);

        await this.eventBus.publish(
            new InvoiceApproved(invoice.id)
        );
    }
}
```

## Responsibilities

Good application service:

- Coordinates use case
- Loads entities
- Calls domain behavior
- Persists results
- Publishes events

Avoid putting every business rule inside the service.

Rich domain entities can own rules.

---

# 15. Unit of Work Pattern

## Intent

Treat multiple data changes as one business transaction.

Scenario:

Approving an invoice may:

1. Update invoice status
2. Insert workflow history
3. Create ERP posting record
4. Write audit entry

All should succeed or fail together.

Concept:

```ts
await unitOfWork.begin();

try {
    await invoiceRepo.save(invoice);
    await workflowRepo.save(history);
    await postingRepo.create(posting);

    await unitOfWork.commit();
} catch (error) {
    await unitOfWork.rollback();
    throw error;
}
```

ORMs such as Hibernate, Entity Framework and SQLAlchemy often provide Unit of Work behavior.

---

# 16. Data Mapper vs Active Record

## Active Record

The model knows how to save itself.

```ts
const user = await User.findById(10);
user.name = "Shoeb";
await user.save();
```

Common in:

- Laravel Eloquent
- Rails Active Record

### Advantages

- Simple
- Productive
- Great for CRUD systems

### Disadvantages

Domain logic becomes coupled to persistence.

---

## Data Mapper

Domain objects do not know how they are stored.

```ts
const user = await userRepository.findById(10);
user.changeName("Shoeb");
await userRepository.save(user);
```

Common in more domain-heavy systems.

### Advantages

- Domain remains clean
- Easier testing
- Persistence-independent

### Disadvantages

- More code
- More abstractions

---

# 17. DTO, Entity, Value Object and Model

These are frequently confused.

## Entity

An object with identity.

Example:

```text
Invoice #INV-1001
Employee SGID 12345
Order #ORD-500
```

Even if fields change, identity remains.

---

## Value Object

Defined entirely by its values.

Examples:

- Money
- EmailAddress
- DateRange
- Address
- TaxRate

```ts
class Money {
    constructor(
        readonly amount: number,
        readonly currency: string
    ) {}
}
```

Two `Money(100, "INR")` instances represent the same value.

Value objects are often immutable.

---

## DTO — Data Transfer Object

Used to transfer data between layers or processes.

Example API DTO:

```ts
interface CreateInvoiceRequest {
    vendorCode: string;
    invoiceNumber: string;
    invoiceDate: string;
    amount: number;
}
```

DTOs should normally contain data, not business behavior.

---

## Database Model

Represents persistence structure.

```text
invoice_details table
```

It does not always need to be identical to the domain entity.

---

# 18. Dependency Injection and IoC

## Dependency Injection

Dependencies are supplied to a class instead of created internally.

Bad:

```ts
class InvoiceService {
    repo = new MySqlInvoiceRepository();
    mailer = new GmailMailer();
}
```

Better:

```ts
class InvoiceService {
    constructor(
        private repo: InvoiceRepository,
        private mailer: Mailer
    ) {}
}
```

Composition root:

```ts
const service = new InvoiceService(
    new MySqlInvoiceRepository(),
    new SmtpMailer()
);
```

## Benefits

- Testability
- Replaceability
- Loose coupling
- Environment-specific implementations

---

## IoC — Inversion of Control

Instead of your code controlling every dependency and lifecycle, a container or framework controls them.

Examples:

- Spring Container
- ASP.NET Core DI Container
- Angular Dependency Injection
- Laravel Service Container

---

# 19. MVC, MVP, MVVM

# MVC — Model View Controller

```text
User
 ↓
Controller
 ↓
Model / Service
 ↓
View
```

Common in:

- Laravel
- CodeIgniter
- Rails
- ASP.NET MVC

### Controller

Handles request/response.

### Model

Represents data or domain behavior.

### View

Displays output.

---

# MVP — Model View Presenter

```text
View <-> Presenter <-> Model
```

Presenter contains presentation logic.

Useful in UI applications where the view should remain passive.

---

# MVVM — Model View ViewModel

```text
View <-> ViewModel <-> Model
```

Popular in:

- Angular-like reactive design
- WPF
- mobile frameworks

ViewModel exposes state and commands required by the view.

---

# 20. Layered / N-Tier Architecture

A common enterprise architecture.

```text
Presentation Layer
        ↓
Application / Service Layer
        ↓
Domain / Business Layer
        ↓
Infrastructure / Data Layer
```

Example:

```text
Angular UI
   ↓
API Controller
   ↓
Invoice Service
   ↓
Invoice Repository
   ↓
MySQL
```

## Benefits

- Easy to understand
- Clear responsibility separation
- Works well for CRUD/business applications

## Risks

Large projects often become:

```text
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

where every request is just passed through layers without meaningful design.

This is sometimes called a "lasagna architecture."

---

# 21. Clean Architecture

Clean Architecture organizes dependencies around business rules.

Core rule:

> Dependencies point inward.

Typical layers:

```text
┌─────────────────────────────┐
│ Frameworks / Infrastructure │
├─────────────────────────────┤
│ Interface Adapters          │
├─────────────────────────────┤
│ Application Use Cases       │
├─────────────────────────────┤
│ Domain / Enterprise Rules   │
└─────────────────────────────┘
```

The domain should not depend on:

- MySQL
- Angular
- Express
- Laravel
- AWS
- Stripe

Instead, infrastructure depends on abstractions defined by the core.

Example:

```text
Domain
  Invoice
  Money
  ApprovalPolicy

Application
  ApproveInvoiceUseCase

Ports
  InvoiceRepository
  EventPublisher

Infrastructure
  MySqlInvoiceRepository
  KafkaEventPublisher

Presentation
  InvoiceController
```

## Advantages

- Highly testable
- Infrastructure replaceable
- Business rules protected

## Disadvantages

- More files
- More abstractions
- Can be excessive for small CRUD projects

---

# 22. Hexagonal / Ports and Adapters

Hexagonal Architecture is also called:

> Ports and Adapters Architecture

Core application:

```text
            REST API
               │
               ▼
        ┌──────────────┐
        │ Application  │
        │    Core      │
        └──────────────┘
         ▲     ▲      ▲
         │     │      │
      MySQL   SAP    Email
```

## Ports

Interfaces defined by the application.

Example:

```ts
interface InvoiceRepository {}
interface ErpGateway {}
interface NotificationPort {}
```

## Adapters

Concrete implementations.

```text
MySqlInvoiceRepository
SapErpAdapter
SmtpNotificationAdapter
```

The core should work even if external systems change.

---

# 23. Onion Architecture

Onion Architecture places domain rules at the center.

```text
Infrastructure
   Application Services
      Domain Services
         Domain Model
```

Dependency direction points toward the center.

It is conceptually similar to Clean Architecture and Hexagonal Architecture.

Differences are mostly terminology and emphasis.

---

# 24. Modular Monolith

A modular monolith is one deployable application divided into strongly isolated modules.

Example:

```text
Application
├── Invoice Module
├── Procurement Module
├── Travel Module
├── Attendance Module
├── HR Module
└── Reporting Module
```

Each module should ideally own:

- Business logic
- Data access
- APIs
- Events
- Internal models

Modules communicate through defined interfaces or events.

## Why it is powerful

You get many benefits of modular systems without distributed-system complexity.

## Best choice for many business applications

Before starting with microservices, consider a modular monolith.

---

# 25. Microservices

Microservices split a system into independently deployable services.

Example:

```text
API Gateway
├── User Service
├── Order Service
├── Payment Service
├── Inventory Service
└── Notification Service
```

Each service may own its own database.

## Advantages

- Independent deployment
- Independent scaling
- Team autonomy
- Technology flexibility

## Costs

Microservices introduce major complexity:

- Network failures
- Distributed transactions
- Eventual consistency
- Observability
- Deployment complexity
- Service discovery
- API versioning
- Data duplication

## Use when

You actually need independent scaling, deployment, ownership or isolation.

Do not use microservices merely because they are popular.

---

# 26. Event-Driven Architecture

Components communicate through events.

Example:

```text
OrderPlaced
   ├── Inventory Service
   ├── Payment Service
   ├── Notification Service
   └── Analytics Service
```

Producer does not directly call every consumer.

## Advantages

- Loose coupling
- Asynchronous processing
- Easy extensibility

## Challenges

- Event ordering
- Duplicate events
- Debugging
- Eventual consistency
- Schema versioning

---

## Domain Events

Represent something meaningful that happened in the business.

Examples:

```text
InvoiceSubmitted
InvoiceApproved
InvoiceRejected
PaymentCompleted
EmployeeSeparated
VendorCreated
```

Events are usually written in past tense because they describe something that already happened.

---

# 27. CQRS

CQRS means:

> Command Query Responsibility Segregation

Separate operations that change state from operations that read state.

## Commands

```text
CreateInvoice
ApproveInvoice
RejectInvoice
PostInvoice
```

## Queries

```text
GetInvoiceById
GetPendingInvoices
GetInvoiceDashboard
```

Concept:

```text
Commands -> Write Model -> Database
Queries  -> Read Model  -> Database / Search Index / Cache
```

## Why use it?

Read requirements and write requirements may be very different.

Example:

A dashboard may need a denormalized high-performance read model.

## Do you always need separate databases?

No.

CQRS can start simply with separate command/query code paths while using the same database.

---

# 28. Event Sourcing

Traditional systems store current state.

Example:

```text
Invoice Status = Approved
```

Event sourcing stores the sequence of events:

```text
InvoiceCreated
InvoiceSubmitted
InvoiceValidated
InvoiceApproved
```

Current state is reconstructed from events.

## Advantages

- Complete audit history
- Time-travel/debugging
- Event replay
- Powerful domain modeling

## Challenges

- Complex
- Event schema evolution
- Large event streams
- Eventual consistency
- Requires different thinking

Do not use Event Sourcing only for audit logging.

A normal audit table may be enough.

---

# 29. Saga Pattern

Distributed systems cannot rely on one database transaction across multiple services.

A Saga coordinates multiple local transactions.

Example order flow:

```text
Create Order
   ↓
Reserve Inventory
   ↓
Charge Payment
   ↓
Create Shipment
```

If payment fails:

```text
Release Inventory
Cancel Order
```

Those reverse operations are called compensating actions.

## Two Saga Styles

### Choreography

Services react to events.

```text
OrderCreated
  ↓
InventoryReserved
  ↓
PaymentCompleted
  ↓
ShipmentCreated
```

### Orchestration

A central orchestrator tells services what to do.

```text
OrderSaga
 ├── Reserve Inventory
 ├── Charge Payment
 └── Create Shipment
```

---

# 30. API Gateway, BFF and Service Aggregator

# API Gateway

One entry point for multiple backend services.

Responsibilities may include:

- Routing
- Authentication
- Rate limiting
- TLS termination
- Request transformation

```text
Client
  ↓
API Gateway
 ├── Order Service
 ├── Payment Service
 └── User Service
```

---

# Backend for Frontend — BFF

Create backend APIs tailored to different frontend clients.

```text
Web App -> Web BFF
Mobile -> Mobile BFF
```

Useful when mobile and web require very different payloads.

---

# Aggregator Pattern

A service combines responses from multiple services.

Example dashboard:

```text
Dashboard Aggregator
 ├── User Service
 ├── Invoice Service
 ├── Workflow Service
 └── Analytics Service
```

---

# 31. Caching Patterns

# Cache-Aside

Application checks cache first.

```text
Request
 ↓
Cache?
 ├── Hit -> Return
 └── Miss
       ↓
    Database
       ↓
    Update Cache
       ↓
    Return
```

Pseudo-code:

```ts
let product = await cache.get(id);

if (!product) {
    product = await repository.findById(id);
    await cache.set(id, product);
}
```

---

# Read-Through Cache

Application reads from cache.

Cache itself loads missing data from storage.

---

# Write-Through Cache

Writes go to cache and underlying database together.

---

# Write-Behind Cache

Writes go to cache first and database asynchronously later.

Faster, but introduces consistency risk.

---

# Cache Invalidation

One of the hardest caching problems.

Common approaches:

- TTL expiration
- Event-based invalidation
- Versioned keys
- Explicit delete on update

Example:

```text
product:123:v7
```

---

# 32. Resilience Patterns

Distributed systems fail.

Design for failure.

---

# Retry Pattern

Retry temporary failures.

Good for:

- Network timeout
- Temporary service unavailable
- Rate limit with retry-after

Do not retry:

- Validation error
- Invalid credentials
- Permanent business rejection

Use exponential backoff.

Example:

```text
1 sec
2 sec
4 sec
8 sec
```

Add random jitter to avoid many clients retrying together.

---

# Circuit Breaker

Stop repeatedly calling a failing service.

States:

```text
Closed
  ↓ many failures
Open
  ↓ wait
Half-Open
  ↓ success
Closed
```

Useful for external APIs.

---

# Timeout Pattern

Never let remote calls wait forever.

Example:

```text
ERP call timeout = 5 seconds
```

Timeout values should reflect business requirements.

---

# Bulkhead Pattern

Isolate resources so one failure does not consume everything.

Example:

```text
Payment thread pool
Notification thread pool
Report thread pool
```

If report generation overloads, payment processing can continue.

---

# Fallback Pattern

Return an alternate response when the primary service fails.

Example:

```text
Live exchange rate unavailable
        ↓
Use last known cached rate
```

Only use fallback when stale/alternate data is acceptable.

---

# 33. Concurrency and Async Patterns

# Producer-Consumer

Producer creates work.

Consumer processes work.

```text
Invoice Upload
    ↓
Queue
    ↓
OCR Worker
```

Useful when OCR is slow.

---

# Worker Pool

Multiple workers process jobs in parallel.

```text
Queue
 ├── Worker 1
 ├── Worker 2
 ├── Worker 3
 └── Worker 4
```

---

# Future / Promise

Represents a result that will be available later.

JavaScript:

```ts
const result = await processInvoice();
```

---

# Fan-Out / Fan-In

Run independent work in parallel then combine results.

```text
Invoice
 ├── Vendor Lookup
 ├── Duplicate Check
 ├── Tax Validation
 └── PO Lookup
        ↓
     Combine
```

---

# 34. Messaging Patterns

# Message Queue

One message is usually processed by one consumer.

Example:

```text
Producer -> Queue -> Worker
```

Good for background jobs.

---

# Publish/Subscribe

One event can be received by many subscribers.

```text
InvoiceApproved
 ├── Email
 ├── ERP
 ├── Analytics
 └── Audit
```

---

# Dead Letter Queue

Messages that repeatedly fail are moved to a special queue.

```text
Main Queue
   ↓ fail repeatedly
Dead Letter Queue
```

This prevents poison messages from blocking the system.

---

# Idempotent Consumer

Processing the same event twice should not create duplicate effects.

Example:

If `PaymentCompleted` arrives twice, do not post the payment twice.

Use:

```text
event_id
```

Store processed event IDs.

---

# Outbox Pattern

Problem:

```text
Save invoice to database
Publish InvoiceApproved event
```

What happens if database succeeds but event publishing fails?

Outbox solution:

```text
Database Transaction
 ├── Update Invoice
 └── Insert Outbox Event
```

A background publisher later sends the outbox event.

This greatly improves reliability.

---

# Inbox Pattern

Consumers store received message IDs before/while processing.

Prevents duplicate processing.

Often combined with Outbox.

---

# 35. Frontend Design Patterns

Modern frontend projects also benefit from patterns.

---

# Container / Presentational Pattern

Container:

- Fetches data
- Manages state
- Handles side effects

Presentational component:

- Receives props/input
- Displays UI
- Emits actions

Example:

```text
InvoiceListContainer
    ↓
InvoiceListComponent
```

---

# Smart vs Dumb Components

Smart component:

- Business awareness
- API interaction
- State

Dumb component:

- Reusable UI
- Input/output only

---

# Facade Service in Angular

Instead of components calling many services:

```text
Component
 ├── InvoiceService
 ├── WorkflowService
 ├── VendorService
 └── UserService
```

use:

```text
Component
   ↓
InvoiceFacade
 ├── InvoiceService
 ├── WorkflowService
 ├── VendorService
 └── UserService
```

The component becomes simpler.

---

# State Management Pattern

Centralize application state.

Examples:

- Redux
- NgRx
- Zustand
- Pinia

Typical flow:

```text
View
 ↓ action
Store
 ↓ reducer/effect
State
 ↓ selector
View
```

Use global state only for truly shared state.

Do not move every local form field into global state.

---

# 36. Project Folder Structure Patterns

A good folder structure communicates architecture.

---

# Layer-Based Structure

```text
src/
├── controllers/
├── services/
├── repositories/
├── models/
├── validators/
└── utilities/
```

### Good for

- Small projects
- Simple CRUD applications

### Problem

As project size increases, files related to one feature become scattered.

---

# Feature-Based Structure

```text
src/
├── invoice/
│   ├── invoice.controller.ts
│   ├── invoice.service.ts
│   ├── invoice.repository.ts
│   └── invoice.model.ts
├── vendor/
└── workflow/
```

Usually easier to scale.

---

# Clean Architecture Structure

```text
src/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── services/
│   └── events/
│
├── application/
│   ├── use-cases/
│   ├── ports/
│   ├── dto/
│   └── mappers/
│
├── infrastructure/
│   ├── database/
│   ├── messaging/
│   ├── external-services/
│   └── repositories/
│
└── presentation/
    ├── controllers/
    ├── middleware/
    └── routes/
```

---

# Feature + Clean Architecture Hybrid

For large systems:

```text
src/
├── invoice/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── presentation/
│
├── vendor/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── presentation/
│
└── workflow/
```

This works very well for modular monoliths.

---

# 37. Designing a Real-World Project

Before choosing patterns, understand the problem.

## Step 1 — Identify actors

Example:

```text
Employee
Manager
Finance User
Administrator
External Vendor
ERP System
```

## Step 2 — Identify use cases

```text
Create Invoice
Upload Invoice
Validate Invoice
Approve Invoice
Reject Invoice
Post to ERP
Search Invoice
Generate Report
```

## Step 3 — Identify business rules

Example:

```text
Invoice > ₹100,000 requires second-level approval.
Vendor must be active.
Duplicate invoice number is not allowed for the same vendor.
ERP posting is allowed only after final approval.
```

## Step 4 — Identify external dependencies

```text
Database
ERP
Email
OCR
SSO
File Storage
Message Broker
```

## Step 5 — Protect the domain

Business rules should not depend directly on those external systems.

## Step 6 — Define interfaces

```text
InvoiceRepository
OcrEngine
ErpGateway
NotificationGateway
FileStorage
```

## Step 7 — Implement adapters

```text
MySqlInvoiceRepository
PaddleOcrAdapter
SapErpAdapter
SmtpNotificationAdapter
S3FileStorageAdapter
```

---

# 38. Invoice Processing System Example

Consider an invoice OCR and workflow system.

Requirements:

1. User uploads PDF/image
2. OCR extracts fields
3. Vendor is identified
4. Invoice number/date/amount are validated
5. Duplicate check runs
6. PO/GIR matching happens
7. Matching invoices may be auto-posted
8. Mismatches enter approval workflow
9. Final approval posts to ERP
10. Audit trail is maintained

A possible architecture:

```text
                   ┌─────────────────┐
                   │   Web / Angular │
                   └────────┬────────┘
                            │
                       REST API
                            │
                   ┌────────▼────────┐
                   │ Invoice Facade  │
                   └────────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
        Upload UseCase  OCR UseCase  Approval UseCase
              │             │             │
      ┌───────▼──────┐ ┌────▼────┐ ┌─────▼─────┐
      │ File Storage │ │ OCR Port │ │ Workflow  │
      └──────────────┘ └────┬────┘ └───────────┘
                            │
                     PaddleOCR Adapter
```

Patterns involved:

| Requirement | Useful Pattern |
|---|---|
| Different OCR engines | Strategy + Adapter |
| Vendor-specific extraction rules | Strategy |
| Engine creation from config | Factory |
| Complex extraction setup | Builder |
| External ERP API | Adapter |
| Database access | Repository |
| Multiple DB updates | Unit of Work |
| Approval sequence | Chain of Responsibility |
| Invoice lifecycle | State |
| Approval notifications | Observer / Events |
| Background OCR | Producer-Consumer |
| Reliable event publishing | Outbox |
| Duplicate message handling | Idempotency |
| API simplification | Facade |
| Retry ERP failures | Retry + Circuit Breaker |

---

## Vendor-Specific Extraction Strategy

```ts
interface ExtractionStrategy {
    extract(document: OcrDocument): InvoiceFields;
}
```

Implementations:

```text
DefaultInvoiceExtraction
VendorABCExtraction
VendorXYZExtraction
```

Selection:

```text
Vendor detected
      ↓
ExtractionStrategyFactory
      ↓
Appropriate strategy
```

---

## OCR Adapter

Your application should not directly depend on PaddleOCR everywhere.

```ts
interface OcrEngine {
    read(file: DocumentFile): Promise<OcrResult>;
}
```

Adapter implementations:

```text
PaddleOcrAdapter
TesseractAdapter
CloudVisionAdapter
```

Now the business layer can switch engines.

---

## Approval Chain

```text
Invoice
   ↓
Manager Approval
   ↓
Amount > Threshold?
   ├── No -> Finance Controller
   └── Yes -> Department Head
                ↓
         Finance Controller
                ↓
              ERP
```

This can be modeled using:

- Chain of Responsibility
- State Machine
- Workflow Engine

---

# 39. E-Commerce Example

Requirements:

```text
Browse Products
Add to Cart
Apply Discount
Checkout
Pay
Reserve Inventory
Ship
Notify Customer
```

Useful patterns:

| Area | Pattern |
|---|---|
| Payment providers | Strategy + Adapter |
| Discounts | Strategy |
| Order construction | Builder |
| Product hierarchy | Composite |
| Checkout API | Facade |
| Order events | Observer |
| Order state | State |
| Distributed checkout | Saga |
| Inventory updates | Event-driven |
| Product caching | Cache-Aside |
| Reliable messages | Outbox |
| API entry | Gateway |

Architecture:

```text
Client
  ↓
API Gateway
  ↓
Order Service
 ├── Payment Gateway
 ├── Inventory Gateway
 └── Notification Event
```

---

# 40. Approval Workflow Example

Assume:

```text
₹0 - ₹50,000
    Manager

₹50,001 - ₹5,00,000
    Manager -> Department Head

Above ₹5,00,000
    Manager -> Department Head -> Finance Controller
```

A naive implementation:

```ts
if (amount <= 50000) {
    managerApprove();
} else if (amount <= 500000) {
    managerApprove();
    departmentHeadApprove();
} else {
    managerApprove();
    departmentHeadApprove();
    financeControllerApprove();
}
```

This becomes difficult when rules expand.

Better design:

```text
ApprovalPolicy
       ↓
WorkflowBuilder
       ↓
Approval Steps
```

Possible patterns:

- Specification for eligibility rules
- Strategy for selecting approval policy
- Chain of Responsibility for sequential processing
- State for lifecycle
- Observer for notifications

---

# 41. Common Anti-Patterns

Patterns describe good reusable designs.

Anti-patterns describe common bad designs.

---

# God Object

One class knows or does everything.

Example:

```text
ApplicationManager
 ├── Database
 ├── Email
 ├── Tax
 ├── Validation
 ├── Reports
 ├── Authentication
 ├── Workflow
 └── Files
```

Solution:

Split by responsibility.

---

# Spaghetti Code

Logic jumps across many places without clear structure.

Symptoms:

- Global variables
- Nested conditionals
- Random side effects
- Hard-to-follow control flow

---

# Copy-Paste Programming

Same business rule copied into multiple places.

Problem:

One copy is fixed while another is forgotten.

---

# Shotgun Surgery

One small requirement requires changes in many files.

Example:

Changing GST rate requires editing:

- Controller
- Service
- Report
- PDF
- API
- SQL
- Frontend

The knowledge should have one owner.

---

# Golden Hammer

> "I know microservices, so every project should use microservices."

Or:

> "Repository Pattern solves everything."

Choose patterns based on problems, not personal preference.

---

# Premature Abstraction

Creating interfaces and factories for things that will never vary.

Bad:

```text
DateFormatterFactoryProviderManager
```

for one simple date formatter.

---

# Premature Optimization

Adding complexity before performance is actually measured.

Always measure first.

---

# Big Ball of Mud

System has no recognizable architecture.

Everything depends on everything.

This often happens when projects grow without boundaries.

---

# Service Locator

Components request dependencies from a global container.

```ts
const repo = ServiceLocator.get("InvoiceRepository");
```

Dependency is hidden.

Constructor injection is usually clearer.

---

# Anemic Domain Model

Entities contain only fields/getters/setters.

All business logic lives in huge service classes.

Example:

```ts
invoice.status = "approved";
```

Better:

```ts
invoice.approve(approver);
```

This is not always a problem in simple CRUD applications, but in complex domains rich models often improve maintainability.

---

# Distributed Monolith

A system is split into microservices but services are tightly coupled.

Symptoms:

- Every deployment requires all services
- Synchronous calls everywhere
- Shared database
- One service cannot run independently

You get microservice complexity without microservice benefits.

---

# 42. How to Choose the Right Pattern

Use this decision guide.

## Object creation is complicated?

Consider:

- Factory
- Abstract Factory
- Builder
- Prototype

## Multiple interchangeable algorithms?

Use:

- Strategy

## Need to adapt a third-party API?

Use:

- Adapter

## Need one simple API over many services?

Use:

- Facade

## Need to add behavior without changing original class?

Use:

- Decorator

## Need lifecycle-specific behavior?

Use:

- State

## Need sequential processing?

Use:

- Chain of Responsibility

## Need event subscribers?

Use:

- Observer / Pub-Sub

## Need database isolation?

Use:

- Repository

## Need multiple writes as one transaction?

Use:

- Unit of Work

## Need reliable async integration?

Consider:

- Queue
- Outbox
- Idempotent Consumer

## Need distributed business transaction?

Use:

- Saga

## Read and write workloads differ significantly?

Consider:

- CQRS

## Need complete event history as the source of truth?

Consider:

- Event Sourcing

---

# 43. Pattern Combinations

Patterns are commonly combined.

---

## Factory + Strategy

Factory chooses the correct strategy.

```text
Payment Type
   ↓
PaymentStrategyFactory
   ↓
UPI / Card / BankTransfer Strategy
```

---

## Adapter + Strategy

Different third-party providers share one strategy interface.

```text
PaymentGateway
 ├── StripeAdapter
 ├── RazorpayAdapter
 └── PayPalAdapter
```

---

## Repository + Unit of Work

Repositories perform persistence operations.

Unit of Work coordinates one transaction.

---

## State + Strategy

State controls which behavior is currently allowed.

Strategy chooses how that behavior is performed.

---

## Observer + Command

A command changes the system.

An event informs subscribers afterward.

```text
ApproveInvoiceCommand
        ↓
Invoice Approved
        ↓
InvoiceApproved Event
        ├── Email Handler
        └── ERP Handler
```

---

## CQRS + Event-Driven Architecture

Commands update write models.

Events update read models.

---

## Event Sourcing + CQRS

A common but not mandatory combination.

```text
Command
 ↓
Aggregate
 ↓
Events
 ↓
Event Store
 ↓
Projection
 ↓
Read Model
```

---

# 44. Testing Design Patterns

Good architecture should make testing easier.

---

# Unit Testing

Test one class/component in isolation.

Example:

```ts
const fakeRepo = new InMemoryInvoiceRepository();

const service = new ApproveInvoiceService(fakeRepo);

await service.approve("INV-1");

expect(fakeRepo.savedInvoice.status).toBe("APPROVED");
```

---

# Test Doubles

## Dummy

Passed but not used.

## Stub

Returns predefined values.

## Fake

Working simplified implementation.

Example:

```text
InMemoryInvoiceRepository
```

## Mock

Verifies interactions.

Example:

```text
expect(mailer.send).toHaveBeenCalled()
```

## Spy

Records calls while retaining behavior.

---

# Integration Testing

Test multiple real components together.

Example:

```text
InvoiceRepository + MySQL Test Database
```

---

# Contract Testing

Verify service integration expectations.

Useful for microservices.

Example:

```text
Order Service expects Payment API response:
{
    "status": "SUCCESS",
    "transactionId": "..."
}
```

---

# Architecture Testing

Some tools can automatically verify architecture rules.

Examples:

```text
Domain must not import Infrastructure.
Controllers must not access database directly.
```

---

# 45. Refactoring Legacy Code Toward Patterns

Do not rewrite everything at once.

Use incremental refactoring.

---

## Step 1 — Add tests

Protect current behavior.

---

## Step 2 — Identify unstable areas

Look for:

- Frequently changed code
- Huge `if/else`
- Large classes
- Duplicate logic
- External SDK usage everywhere

---

## Step 3 — Extract responsibilities

Before:

```ts
processInvoice()
```

contains 600 lines.

After:

```text
InvoiceValidator
VendorMatcher
DuplicateChecker
GIRMatcher
WorkflowRouter
ErpPoster
```

---

## Step 4 — Introduce interfaces at boundaries

Example:

```text
ERP
Email
OCR
Storage
Database
```

External boundaries are strong candidates for adapters.

---

## Step 5 — Replace conditions with strategies

Before:

```ts
if (vendor === "A") ...
else if (vendor === "B") ...
else if (vendor === "C") ...
```

After:

```text
VendorExtractionStrategy
```

---

## Step 6 — Introduce domain behavior

Before:

```ts
invoice.status = "APPROVED";
invoice.approvedBy = userId;
```

After:

```ts
invoice.approve(userId);
```

---

## Step 7 — Refactor by module

Do not redesign the whole codebase simultaneously.

Modernize one bounded feature at a time.

---

# 46. Performance and Scalability Considerations

Design patterns can improve maintainability but may introduce overhead.

Always measure.

---

# N+1 Query Problem

Example:

```text
Load 100 invoices
For each invoice:
    query vendor
```

Results:

```text
1 + 100 queries
```

Fix with:

- JOIN
- eager loading
- batching

---

# Pagination

Never load millions of records into memory.

Use:

- Offset pagination
- Cursor pagination

Cursor pagination scales better for frequently changing large datasets.

---

# Caching

Cache data that:

- Is frequently read
- Changes less often
- Is expensive to compute

Avoid caching highly volatile data without a clear invalidation strategy.

---

# Async Processing

Move slow non-immediate operations to background jobs.

Examples:

- OCR
- Email
- PDF generation
- Large reports
- ERP synchronization

---

# Horizontal Scaling

Run multiple application instances.

Requires stateless request handling.

Do not store critical user session state only in process memory.

Use shared stores when needed.

---

# 47. Security Considerations

Architecture must include security from the beginning.

---

# Authentication vs Authorization

Authentication:

> Who are you?

Authorization:

> What are you allowed to do?

---

# Policy-Based Authorization

Instead of:

```ts
if (role === "ADMIN")
```

everywhere, centralize rules.

Example:

```ts
authorization.canApproveInvoice(user, invoice)
```

---

# Input Validation

Validate data at system boundaries.

But remember:

> Frontend validation is for user experience.
> Backend validation is for security and correctness.

---

# Parameterized Queries

Never build SQL using raw user input.

Bad:

```ts
"SELECT * FROM user WHERE name = '" + input + "'"
```

Use parameters.

---

# Secret Management

Do not hard-code:

- Passwords
- Tokens
- API keys
- Database credentials

Use:

- Environment variables
- Secret managers
- Vault services

---

# Audit Logging

Sensitive business operations should create an audit trail.

Examples:

```text
Invoice approved
Payment released
Role changed
Vendor updated
Record deleted
```

Audit logs should ideally contain:

```text
Who
What
When
Target
Old Value
New Value
Request / Correlation ID
```

---

# 48. Design Pattern Interview Guide

Be prepared to answer questions like:

## What is a design pattern?

A reusable design approach for a recurring software problem.

## Factory vs Abstract Factory?

Factory creates a specific product.

Abstract Factory creates a family of related products.

## Strategy vs State?

Both may use composition and interchangeable implementations.

Strategy:

> Caller chooses an algorithm.

State:

> Behavior changes because the object's internal lifecycle state changes.

## Adapter vs Facade?

Adapter:

> Changes one interface into another expected interface.

Facade:

> Simplifies a complex subsystem behind one high-level interface.

## Decorator vs Proxy?

Decorator primarily adds behavior.

Proxy primarily controls access.

Their structures may look similar.

## Observer vs Pub/Sub?

Observer usually means direct or in-process subscriber relationships.

Pub/Sub often uses a message broker or event channel and producers do not know subscribers.

## Repository vs DAO?

Both abstract data access.

Repository is usually domain-oriented.

DAO is commonly table/data-operation oriented.

## Active Record vs Data Mapper?

Active Record model knows persistence.

Data Mapper keeps persistence separate.

## Monolith vs Modular Monolith?

A normal monolith may have poorly defined internal boundaries.

A modular monolith deliberately isolates business modules.

## Microservices vs Modular Monolith?

Use microservices only when independent deployment/scaling/ownership justifies distributed-system complexity.

## CQRS vs CRUD?

CRUD uses similar data models for reads and writes.

CQRS deliberately separates read and write responsibilities.

## Event Sourcing vs Audit Log?

Audit log records history as a secondary concern.

Event Sourcing treats events as the primary source of truth.

---

# 49. Practice Projects

Use these projects to master patterns.

---

## Beginner Project 1 — Notification System

Support:

- Email
- SMS
- WhatsApp

Practice:

- Strategy
- Factory
- Adapter
- Dependency Injection

---

## Beginner Project 2 — Report Generator

Generate:

- PDF
- Excel
- HTML

Practice:

- Strategy
- Factory
- Builder
- Template Method

---

## Intermediate Project 3 — E-Commerce Checkout

Support:

- Different payment methods
- Discounts
- Inventory
- Order status
- Notifications

Practice:

- Strategy
- State
- Observer
- Repository
- Unit of Work
- Adapter

---

## Intermediate Project 4 — Approval Workflow

Create:

```text
Employee
Manager
Department Head
Finance
```

Practice:

- Chain of Responsibility
- State
- Specification
- Observer
- Command

---

## Advanced Project 5 — Invoice OCR Platform

Support:

- PDF/image upload
- OCR
- Vendor detection
- Field extraction
- Line items
- Validation
- Approval workflow
- ERP posting

Practice:

- Clean Architecture
- Repository
- Factory
- Strategy
- Adapter
- Builder
- State
- Chain of Responsibility
- Outbox
- Queue
- Retry
- Circuit Breaker

---

## Advanced Project 6 — Event-Driven Order Platform

Build:

```text
Order
Payment
Inventory
Shipping
Notification
```

Practice:

- Microservices
- Saga
- Event-driven architecture
- Idempotency
- Outbox
- Dead letter queue
- CQRS

---

# 50. Learning Roadmap

Recommended order:

## Phase 1 — Fundamentals

Learn:

- Classes
- Interfaces
- Composition
- Abstraction
- Encapsulation
- Coupling
- Cohesion

---

## Phase 2 — Principles

Master:

- SOLID
- DRY
- KISS
- YAGNI
- Separation of Concerns

---

## Phase 3 — Essential GoF Patterns

Start with:

1. Strategy
2. Factory
3. Adapter
4. Facade
5. Observer
6. State
7. Builder
8. Decorator
9. Chain of Responsibility
10. Command

These appear frequently in real applications.

---

## Phase 4 — Enterprise Application Patterns

Learn:

- Repository
- Service Layer
- DTO
- Value Objects
- Unit of Work
- Data Mapper
- Specification
- Domain Events

---

## Phase 5 — Architecture

Learn:

1. Layered Architecture
2. Modular Monolith
3. Clean Architecture
4. Hexagonal Architecture
5. Domain-Driven Design basics

---

## Phase 6 — Distributed Systems

Only after mastering application architecture:

- Microservices
- Event-driven architecture
- CQRS
- Saga
- Outbox
- Idempotency
- Circuit breaker
- Distributed tracing

---

## Phase 7 — Build Real Projects

Patterns become meaningful only when you experience the problems they solve.

Build projects and intentionally refactor them.

---

# 51. Cheat Sheet

| Problem | Pattern |
|---|---|
| Choose one algorithm from many | Strategy |
| Create implementation based on input | Factory |
| Create related implementation family | Abstract Factory |
| Construct complex object step by step | Builder |
| Clone template objects | Prototype |
| Convert incompatible interface | Adapter |
| Simplify complex subsystem | Facade |
| Add behavior dynamically | Decorator |
| Control access / lazy load | Proxy |
| Tree hierarchy | Composite |
| Separate abstraction from implementation | Bridge |
| Save memory by sharing objects | Flyweight |
| Notify subscribers | Observer |
| Sequential handler pipeline | Chain of Responsibility |
| Represent operation as object | Command |
| Behavior changes by lifecycle | State |
| Fixed algorithm with customizable steps | Template Method |
| Traverse collections | Iterator |
| Centralize component communication | Mediator |
| Save/restore state | Memento |
| Add operations to stable object hierarchy | Visitor |
| Evaluate small grammar/rules | Interpreter |
| Hide database implementation | Repository |
| Coordinate use case | Service Layer |
| Transaction across repositories | Unit of Work |
| External system integration | Adapter / Gateway |
| Reliable async event publication | Outbox |
| Prevent duplicate message handling | Idempotent Consumer |
| Distributed transaction | Saga |
| Separate read/write models | CQRS |
| Event history as source of truth | Event Sourcing |
| Temporary remote failure | Retry |
| Stop hammering failing service | Circuit Breaker |
| Isolate resource failures | Bulkhead |
| Fast repeated reads | Cache-Aside |
| Background processing | Producer-Consumer |
| One entry for services | API Gateway |
| Frontend-specific backend | BFF |

---

# 52. Final Design Checklist

Before calling a project architecture "good", ask:

## Requirements

- [ ] Do I understand the real business requirements?
- [ ] Do I know the important use cases?
- [ ] Do I know which requirements are likely to change?

## Responsibilities

- [ ] Does every module have a clear responsibility?
- [ ] Are business rules kept separate from HTTP/database/framework code?
- [ ] Are large classes split appropriately?

## Coupling

- [ ] Can I replace external dependencies without rewriting business logic?
- [ ] Are third-party SDKs hidden behind adapters?
- [ ] Are modules communicating through stable interfaces?

## Domain

- [ ] Are important business concepts explicitly modeled?
- [ ] Do entities protect their own invariants where appropriate?
- [ ] Are value objects used for meaningful domain values?

## Persistence

- [ ] Is SQL/ORM logic separated from controllers?
- [ ] Are transactions used for related data changes?
- [ ] Are important queries optimized?

## APIs

- [ ] Are request DTOs validated?
- [ ] Are domain entities not exposed blindly over APIs?
- [ ] Are errors consistent?
- [ ] Is versioning considered where needed?

## Async Work

- [ ] Are slow operations moved to background jobs where appropriate?
- [ ] Are consumers idempotent?
- [ ] Is failed-message handling implemented?
- [ ] Is reliable event publishing required?

## Resilience

- [ ] Do external calls have timeouts?
- [ ] Are temporary failures retried safely?
- [ ] Is a circuit breaker useful?
- [ ] Can one dependency failure bring down the whole system?

## Security

- [ ] Authentication is implemented correctly.
- [ ] Authorization rules are centralized.
- [ ] Input is validated.
- [ ] SQL is parameterized.
- [ ] Secrets are not hard-coded.
- [ ] Sensitive actions are audited.

## Testing

- [ ] Business rules can be unit-tested.
- [ ] Infrastructure can be replaced with fakes/mocks.
- [ ] Important integrations have integration tests.
- [ ] Architecture boundaries can be verified.

## Maintainability

- [ ] Names reflect business concepts.
- [ ] No unnecessary abstractions exist.
- [ ] No pattern is being used only because it is fashionable.
- [ ] New developers can understand the project structure quickly.

---

# Bonus: A Practical Pattern Selection Formula

Before adding any pattern, write four lines:

```text
Problem:
Why current design is painful:
Pattern being considered:
Complexity introduced:
```

Example:

```text
Problem:
We support three OCR providers with different APIs.

Why current design is painful:
Business logic contains provider-specific SDK calls.

Pattern being considered:
Adapter + Strategy.

Complexity introduced:
One interface and one adapter class per provider.
```

If you cannot clearly explain the problem the pattern solves, you probably do not need the pattern yet.

---

# Bonus: Preferred Architecture for a Typical Enterprise Business Application

For many medium-to-large internal business systems, a strong starting point is:

```text
Modular Monolith
      +
Feature-Based Modules
      +
Clean / Hexagonal Boundaries
      +
Repository only where useful
      +
Application Use Cases
      +
Domain Services / Entities
      +
Dependency Injection
      +
Events for side effects
      +
Background Queue for slow work
```

Example:

```text
src/
├── invoice/
│   ├── domain/
│   │   ├── Invoice.ts
│   │   ├── Money.ts
│   │   ├── InvoiceStatus.ts
│   │   └── InvoiceApproved.ts
│   │
│   ├── application/
│   │   ├── ApproveInvoice.ts
│   │   ├── ExtractInvoice.ts
│   │   └── InvoiceRepository.ts
│   │
│   ├── infrastructure/
│   │   ├── MySqlInvoiceRepository.ts
│   │   ├── PaddleOcrAdapter.ts
│   │   └── SapErpAdapter.ts
│   │
│   └── presentation/
│       ├── InvoiceController.ts
│       └── invoice.routes.ts
│
├── workflow/
├── vendor/
└── shared/
```

This gives clear boundaries without immediately introducing microservices.

---

# Bonus: Golden Rules to Remember

1. **Start simple.**
2. **Design around business change.**
3. **Prefer composition over deep inheritance.**
4. **Depend on abstractions at unstable boundaries.**
5. **Keep business logic independent from frameworks when complexity justifies it.**
6. **Use patterns to remove pain, not to show technical knowledge.**
7. **A modular monolith is often a better starting point than microservices.**
8. **External integrations deserve adapters.**
9. **Async workflows require idempotency and failure handling.**
10. **Tests are part of architecture, not an afterthought.**
11. **Naming is architecture documentation.**
12. **Business rules should have one clear owner.**
13. **Do not create interfaces for everything blindly.**
14. **Measure performance before optimizing.**
15. **Refactor incrementally instead of rewriting the whole system.**

---

# Final Summary

Design patterns are not about memorizing diagrams.

Mastery comes from recognizing recurring problems:

```text
Creation problem
      -> Factory / Builder

Changing algorithm
      -> Strategy

External incompatible system
      -> Adapter

Complicated subsystem
      -> Facade

Lifecycle changes
      -> State

Sequential processing
      -> Chain of Responsibility

Many listeners
      -> Observer / Events

Database boundary
      -> Repository

Distributed transaction
      -> Saga

Reliable events
      -> Outbox + Idempotency

Large system structure
      -> Modular Monolith / Clean / Hexagonal / Microservices
```

The best developer is not the person who uses the most patterns.

The best developer is the person who knows:

> **which problem exists, which pattern can help, and when the pattern would create more complexity than value.**

---

## Suggested Next Study Topics

After mastering this handbook, continue with:

1. Domain-Driven Design
2. Refactoring techniques
3. Enterprise Integration Patterns
4. Distributed Systems
5. Database design patterns
6. API design
7. Event-driven systems
8. System design
9. Software architecture
10. Testing architecture
11. Observability
12. DevOps architecture
13. Cloud architecture patterns
14. Security architecture
15. Performance engineering

---

**End of Project Design Patterns Master Handbook**
