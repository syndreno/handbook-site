# Java Hibernate Master Handbook

> **A beginner-to-advanced, single-file learning handbook for Hibernate ORM and Jakarta Persistence (JPA)**
>
> Goal: Help a new Java developer understand *why* persistence frameworks exist, how Hibernate works internally, how to model real business relationships, how to query efficiently, how to avoid common performance bugs, and how to use Hibernate professionally in standalone Java and Spring Boot applications.

---

## Version Note — August 2026

This handbook focuses on concepts that remain valid across modern Hibernate versions, while using the modern `jakarta.persistence.*` API namespace.

- Hibernate ORM **7.4** is the latest stable series as of August 2026.
- Jakarta Persistence **3.2** is the current final persistence specification; Jakarta Persistence 4.0 is under development.
- Many production systems still run Hibernate 6.x, so this guide intentionally emphasizes concepts and APIs that transfer cleanly between Hibernate 6 and 7.
- Older code may use `javax.persistence.*`. Modern Jakarta-based applications use `jakarta.persistence.*`.

Official references:

- Hibernate ORM: https://hibernate.org/orm/
- Hibernate ORM documentation: https://hibernate.org/orm/documentation/
- Jakarta Persistence: https://jakarta.ee/specifications/persistence/

---

# Table of Contents

1. What Hibernate Is
2. Why ORM Exists
3. JDBC vs JPA vs Hibernate
4. Core Hibernate Architecture
5. Project Setup
6. Configuration
7. First Hibernate Application
8. Entity Fundamentals
9. Entity Lifecycle and States
10. Persistence Context
11. Dirty Checking
12. Flushing
13. Primary Keys and ID Generation
14. Basic Field Mapping
15. Value Types and Embeddables
16. Attribute Converters
17. Enums, Dates, UUIDs, JSON and LOBs
18. Relationships Overview
19. One-to-One
20. One-to-Many and Many-to-One
21. Many-to-Many
22. Association Ownership and `mappedBy`
23. Cascading
24. Orphan Removal
25. Fetching: LAZY vs EAGER
26. N+1 Query Problem
27. Fetch Join, Entity Graphs and Batch Fetching
28. Inheritance Mapping
29. Composite Keys
30. Natural IDs
31. Entity Equality: `equals()` and `hashCode()`
32. Transactions
33. ACID and Database Isolation
34. Optimistic Locking
35. Pessimistic Locking
36. HQL / JPQL
37. Typed Queries and Parameters
38. Joins, Aggregates, Grouping and Subqueries
39. DTO Projections
40. Criteria API
41. Native SQL
42. Named Queries
43. Pagination
44. Bulk Update and Delete
45. Stored Procedures
46. First-Level Cache
47. Second-Level Cache
48. Query Cache
49. Hibernate Statistics and SQL Logging
50. JDBC Batching
51. Bulk Insert Strategies
52. Read-Only Workloads
53. Filters and Soft Delete
54. Auditing
55. Multi-Tenancy
56. Schema Generation and Validation
57. Flyway/Liquibase Strategy
58. Validation
59. Repository/DAO Patterns
60. Service Layer and Transaction Boundaries
61. Spring Boot + Hibernate/JPA
62. Spring Data JPA Relationship
63. Open Session in View
64. Testing
65. Testcontainers
66. Database Constraints and Indexes
67. Performance Tuning Checklist
68. Common Exceptions and Troubleshooting
69. Common Anti-Patterns
70. Security Considerations
71. Real-World E-Commerce Example
72. Real-World Banking Example
73. Real-World HR Example
74. Invoice / Purchase-Order Example
75. Interview Questions
76. Practice Exercises
77. Mini Projects
78. Learning Roadmap
79. Production Checklist
80. Cheat Sheet
81. Glossary

---

# 1. What Hibernate Is

Hibernate ORM is a Java persistence framework that maps Java objects to relational database data.

Without Hibernate, application code commonly looks like this:

```java
Connection connection = dataSource.getConnection();
PreparedStatement ps = connection.prepareStatement(
    "SELECT id, name, email FROM users WHERE id = ?"
);
ps.setLong(1, userId);
ResultSet rs = ps.executeQuery();

if (rs.next()) {
    User user = new User();
    user.setId(rs.getLong("id"));
    user.setName(rs.getString("name"));
    user.setEmail(rs.getString("email"));
}
```

With JPA/Hibernate:

```java
User user = entityManager.find(User.class, userId);
```

Hibernate handles much of the repetitive mapping work:

```text
Java object <-> Hibernate/JPA <-> JDBC <-> Relational Database
```

Hibernate is not a database. It sits between your Java domain model and the database.

---

# 2. Why ORM Exists

Object-oriented Java and relational databases model data differently.

Java thinks in:

- objects
- references
- inheritance
- collections
- encapsulation

Relational databases think in:

- tables
- rows
- columns
- primary keys
- foreign keys
- joins

This difference is commonly called the **object-relational impedance mismatch**.

Example Java model:

```java
class Order {
    Customer customer;
    List<OrderItem> items;
}
```

Possible database model:

```text
customers
---------
id
name

orders
------
id
customer_id

order_items
-----------
id
order_id
product_id
quantity
```

ORM converts between these two models.

### When ORM is especially useful

- large domain models
- CRUD-heavy enterprise applications
- systems containing many relationships
- applications where maintainability matters more than handcrafted SQL everywhere
- applications that need automatic dirty checking and transaction-aware persistence

### When raw SQL/JDBC may still be better

- very specialized reporting queries
- ETL pipelines
- huge bulk imports
- database-specific analytics
- extremely performance-sensitive data transformations

Professional applications commonly use Hibernate for domain persistence and native SQL for selected specialized operations.

---

# 3. JDBC vs JPA vs Hibernate

This distinction is extremely important.

## JDBC

JDBC is Java's low-level API for communicating with relational databases.

You manually manage:

- SQL
- connections
- statements
- parameters
- result sets
- object mapping

## Jakarta Persistence (JPA)

Jakarta Persistence is a **specification/API** describing standard persistence behavior.

Examples:

```java
@Entity
@Id
@OneToMany
EntityManager
TypedQuery
```

Jakarta Persistence itself is not the ORM engine.

## Hibernate ORM

Hibernate is a persistence provider implementing Jakarta Persistence and also providing additional Hibernate-specific functionality.

Think:

```text
Jakarta Persistence = contract/specification
Hibernate ORM       = implementation/provider
JDBC                = lower-level database communication API
Database            = MySQL/PostgreSQL/Oracle/SQL Server/etc.
```

### Portable JPA code

```java
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
```

### Hibernate-specific code

```java
import org.hibernate.Session;
import org.hibernate.annotations.BatchSize;
```

Prefer standard Jakarta APIs where they solve the requirement. Use Hibernate extensions when they provide a meaningful benefit.

---

# 4. Core Hibernate Architecture

A simplified architecture:

```text
Application
   |
EntityManager / Session
   |
Persistence Context
   |
Hibernate ORM Engine
   |
JDBC
   |
Database
```

## Important Components

### Entity

A Java class mapped to persistent database data.

```java
@Entity
class Customer {
    @Id
    private Long id;
}
```

### EntityManager

Standard Jakarta Persistence interface for CRUD and queries.

```java
entityManager.persist(customer);
entityManager.find(Customer.class, 1L);
```

### Session

Hibernate-native persistence interface.

```java
Session session = entityManager.unwrap(Session.class);
```

### EntityManagerFactory / SessionFactory

Heavyweight factory created once per application/database configuration.

```text
EntityManagerFactory -> creates EntityManager
SessionFactory       -> creates Session
```

Do not create a new factory for every request.

### Persistence Context

An in-memory tracking area containing managed entities.

It enables:

- identity guarantee
- automatic dirty checking
- write-behind
- first-level cache

### Transaction

Defines an atomic unit of database work.

```java
EntityTransaction tx = em.getTransaction();
tx.begin();
// database operations
tx.commit();
```

---

# 5. Project Setup

## Maven Example

Use the Hibernate version approved for your application stack.

```xml
<dependencies>
    <dependency>
        <groupId>org.hibernate.orm</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>${hibernate.version}</version>
    </dependency>

    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <version>${postgresql.version}</version>
    </dependency>
</dependencies>
```

For MySQL, use the official MySQL JDBC driver instead.

### Modern package namespace

Use:

```java
import jakarta.persistence.*;
```

Older tutorials may show:

```java
import javax.persistence.*;
```

Do not mix the two namespaces in a modern Jakarta application.

---

# 6. Configuration

Hibernate needs database connection and ORM configuration.

A standalone JPA project commonly uses `META-INF/persistence.xml`.

```xml
<persistence xmlns="https://jakarta.ee/xml/ns/persistence"
             version="3.0">

    <persistence-unit name="appPU">
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>

        <properties>
            <property name="jakarta.persistence.jdbc.url"
                      value="jdbc:postgresql://localhost:5432/appdb"/>
            <property name="jakarta.persistence.jdbc.user"
                      value="appuser"/>
            <property name="jakarta.persistence.jdbc.password"
                      value="secret"/>

            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
            <property name="hibernate.hbm2ddl.auto" value="validate"/>
        </properties>
    </persistence-unit>
</persistence>
```

Create the factory:

```java
EntityManagerFactory emf =
    Persistence.createEntityManagerFactory("appPU");
```

Create an EntityManager:

```java
EntityManager em = emf.createEntityManager();
```

Close them correctly:

```java
em.close();
emf.close();
```

### Production recommendation

Do not place real database passwords directly in source-controlled configuration files. Use environment variables, secret managers, or platform-provided secrets.

---

# 7. First Hibernate Application

Entity:

```java
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    // getters and setters
}
```

Insert:

```java
EntityManager em = emf.createEntityManager();
EntityTransaction tx = em.getTransaction();

try {
    tx.begin();

    Student student = new Student();
    student.setName("Aisha");
    student.setEmail("aisha@example.com");

    em.persist(student);

    tx.commit();
} catch (RuntimeException ex) {
    if (tx.isActive()) {
        tx.rollback();
    }
    throw ex;
} finally {
    em.close();
}
```

Find:

```java
Student student = em.find(Student.class, 1L);
```

Update:

```java
Student student = em.find(Student.class, 1L);
student.setName("Aisha Khan");
```

Notice: no explicit `update()` is required when the entity is managed. Dirty checking handles it during flush/commit.

Delete:

```java
Student student = em.find(Student.class, 1L);
em.remove(student);
```

---

# 8. Entity Fundamentals

A basic entity:

```java
@Entity
@Table(name = "products")
public class Product {

    @Id
    private Long id;

    private String name;

    protected Product() {
    }
}
```

Important rules and recommendations:

- Every entity needs an identifier.
- Entities are normally non-final unless your provider/configuration supports alternatives.
- Provide a suitable no-argument constructor where required by your chosen specification/provider combination.
- Avoid putting expensive business logic in getters.
- Treat entity classes as domain objects, not mere SQL rows.

## `@Entity`

Marks a persistent entity.

```java
@Entity
public class Employee {
}
```

## `@Table`

Changes the table mapping.

```java
@Table(name = "employees")
```

Use when:

- table name differs from class name
- schema/catalog must be specified
- unique constraints/index metadata is needed

```java
@Table(
    name = "users",
    uniqueConstraints = @UniqueConstraint(columnNames = "email")
)
```

---

# 9. Entity Lifecycle and States

Understanding entity state is one of the most important Hibernate concepts.

The major states are:

```text
Transient -> Managed/Persistent -> Detached -> Removed
```

## Transient

Object exists only in Java memory.

```java
Customer customer = new Customer();
```

Hibernate is not tracking it.

## Managed / Persistent

Entity belongs to the current persistence context.

```java
em.persist(customer);
```

or:

```java
Customer customer = em.find(Customer.class, 1L);
```

Changes are tracked.

## Detached

Entity was managed earlier but is no longer attached to the current persistence context.

Examples:

```java
em.detach(customer);
```

or the EntityManager was closed.

Changes on a detached object are not automatically persisted.

## Removed

Entity has been marked for deletion.

```java
em.remove(customer);
```

### State example

```java
Customer c = new Customer();      // transient
em.persist(c);                    // managed
em.detach(c);                     // detached
Customer managed = em.merge(c);   // managed copy returned
em.remove(managed);               // removed
```

Important: `merge()` returns a managed instance. Do not assume the passed detached object itself becomes managed.

---

# 10. Persistence Context

The persistence context is Hibernate's working set of managed entities.

Example:

```java
Customer first = em.find(Customer.class, 1L);
Customer second = em.find(Customer.class, 1L);

System.out.println(first == second); // usually true in the same persistence context
```

Hibernate maintains one managed Java instance per entity identity inside a persistence context.

This provides:

- identity consistency
- first-level caching
- change tracking
- write-behind

### Why this matters

Suppose two services load the same customer in the same transaction. Hibernate can reuse the managed instance instead of treating them as unrelated copies.

---

# 11. Dirty Checking

Dirty checking means Hibernate detects modifications to managed entities.

```java
@Transactional
public void renameCustomer(Long id, String newName) {
    Customer customer = em.find(Customer.class, id);
    customer.setName(newName);
}
```

No call like this is required:

```java
em.update(customer); // not standard JPA and unnecessary here
```

At flush time, Hibernate detects changed persistent state and emits SQL similar to:

```sql
UPDATE customers
SET name = ?
WHERE id = ?;
```

### Important lesson

Persistence behavior depends heavily on whether an entity is managed.

---

# 12. Flushing

**Flush** synchronizes pending persistence-context changes with the database.

```java
em.flush();
```

Flush is not the same as commit.

```text
flush  = send SQL changes toward the database inside current transaction
commit = permanently commit the transaction
```

Hibernate may flush automatically:

- before transaction commit
- before selected queries whose correctness depends on pending changes
- when explicitly requested

Example:

```java
order.setStatus(OrderStatus.PAID);
em.flush();
```

Use explicit flush sparingly.

### Why early flush may help

Suppose a unique constraint might fail and you want the failure before executing later business work:

```java
em.persist(account);
em.flush(); // constraint problem appears here
sendWelcomeWorkflow();
```

Still remember: external side effects should normally be coordinated carefully with transaction semantics.

---

# 13. Primary Keys and ID Generation

Every entity needs an identifier.

```java
@Id
private Long id;
```

Generated identifier:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

Common strategies:

- `AUTO`
- `IDENTITY`
- `SEQUENCE`
- `TABLE`
- UUID-based strategies depending on API/provider/version

## IDENTITY

Often backed by auto-increment/identity columns.

```java
@GeneratedValue(strategy = GenerationType.IDENTITY)
```

Potential drawback: identity generation may reduce insert batching opportunities because the generated identifier is needed immediately.

## SEQUENCE

Excellent for databases supporting sequences.

```java
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_seq")
@SequenceGenerator(
    name = "order_seq",
    sequenceName = "order_seq",
    allocationSize = 50
)
private Long id;
```

Sequence allocation can improve insertion performance.

## UUID

Useful in distributed systems where identifiers can be generated without database round trips.

```java
@Id
@GeneratedValue(strategy = GenerationType.UUID)
private UUID id;
```

Trade-offs include larger indexes compared with compact numeric keys.

### Business key vs surrogate key

Do not make mutable business data the primary key unnecessarily.

Usually better:

```text
id = 10582
invoiceNumber = INV-2026-00981
```

rather than making invoice number itself the entity identity.

---

# 14. Basic Field Mapping

```java
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "employee_name", nullable = false, length = 150)
    private String name;

    @Column(nullable = false)
    private BigDecimal salary;

    @Transient
    private String uiDisplayValue;
}
```

## `@Column`

Useful options:

```java
@Column(
    name = "email_address",
    nullable = false,
    unique = true,
    length = 200,
    precision = 12,
    scale = 2
)
```

Do not rely only on ORM annotations for business-critical database integrity. Real database constraints should exist too.

## `@Transient`

Not persisted:

```java
@Transient
private BigDecimal calculatedTax;
```

## `transient` keyword vs `@Transient`

Java's `transient` keyword relates primarily to Java serialization.

JPA `@Transient` explicitly tells ORM that the attribute is not persistent.

---

# 15. Value Types and Embeddables

Use an embeddable when several fields conceptually form one value object.

Example address:

```java
@Embeddable
public class Address {
    private String line1;
    private String city;
    private String state;
    private String postalCode;
}
```

Embed it:

```java
@Entity
public class Customer {

    @Id
    private Long id;

    @Embedded
    private Address address;
}
```

Possible columns remain in the customer table:

```text
customers
---------
id
line1
city
state
postal_code
```

Override column names:

```java
@Embedded
@AttributeOverrides({
    @AttributeOverride(
        name = "city",
        column = @Column(name = "billing_city")
    ),
    @AttributeOverride(
        name = "postalCode",
        column = @Column(name = "billing_postal_code")
    )
})
private Address billingAddress;
```

### Good use cases

- Money
- Address
- GeoCoordinates
- DateRange
- ContactDetails

Embeddables make the domain model more expressive without creating an independent entity identity.

---

# 16. Attribute Converters

Use `AttributeConverter` when a Java type needs custom database representation.

Example:

```java
@Converter
public class YesNoConverter
        implements AttributeConverter<Boolean, String> {

    @Override
    public String convertToDatabaseColumn(Boolean value) {
        return Boolean.TRUE.equals(value) ? "Y" : "N";
    }

    @Override
    public Boolean convertToEntityAttribute(String value) {
        return "Y".equalsIgnoreCase(value);
    }
}
```

Use it:

```java
@Convert(converter = YesNoConverter.class)
private Boolean active;
```

Useful when integrating with legacy schemas.

Other scenarios:

- encrypted string storage
- strongly typed domain values
- custom status codes
- legacy `'Y'/'N'` flags

Do not hide complicated business logic inside converters.

---

# 17. Enums, Dates, UUIDs, JSON and LOBs

## Enum

Prefer storing enum names rather than ordinals.

```java
@Enumerated(EnumType.STRING)
private OrderStatus status;
```

Why?

If ordinal values are stored:

```text
NEW = 0
PAID = 1
SHIPPED = 2
```

Reordering the enum can corrupt meaning.

## Date and time

Modern Java commonly uses `java.time`:

```java
private LocalDate invoiceDate;
private LocalDateTime createdAt;
private Instant processedAt;
```

Choose based on meaning:

- `LocalDate` -> date only
- `LocalDateTime` -> local date/time without offset
- `Instant` -> global timestamp
- `OffsetDateTime` -> timestamp carrying offset

## UUID

```java
private UUID externalReference;
```

Good for public references and distributed identifier generation.

## Large Objects

```java
@Lob
private String largeText;
```

or:

```java
@Lob
private byte[] document;
```

Do not casually store every large uploaded document inside your primary transactional database. Consider object storage depending on system needs.

## JSON

Modern Hibernate supports richer type mappings depending on version and database.

Conceptual example:

```java
@JdbcTypeCode(SqlTypes.JSON)
private Map<String, Object> metadata;
```

Use JSON when the data is genuinely semi-structured. Do not replace a well-designed relational model with arbitrary JSON blobs merely to avoid schema design.

---

# 18. Relationships Overview

Common database relationships:

```text
One-to-One
One-to-Many
Many-to-One
Many-to-Many
```

Examples:

```text
User       -> UserProfile       one-to-one
Department -> Employees         one-to-many
Employee   -> Department        many-to-one
Student    -> Courses           many-to-many
```

Relationships are one of the most important and frequently misunderstood Hibernate topics.

---

# 19. One-to-One

Scenario:

```text
User 1 --- 1 UserProfile
```

```java
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(
        mappedBy = "user",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private UserProfile profile;
}
```

```java
@Entity
public class UserProfile {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;
}
```

Owning side:

```java
@JoinColumn(name = "user_id")
```

The side containing the foreign-key mapping usually owns the association.

### Shared primary key with `@MapsId`

Sometimes profile identity equals user identity.

```java
@Entity
class UserProfile {

    @Id
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
}
```

Useful when the dependent record cannot exist independently.

---

# 20. One-to-Many and Many-to-One

Scenario:

```text
Department 1 ----- * Employee
```

Employee owns the foreign key:

```java
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;
}
```

Department:

```java
@Entity
public class Department {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(
        mappedBy = "department",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<Employee> employees = new ArrayList<>();

    public void addEmployee(Employee employee) {
        employees.add(employee);
        employee.setDepartment(this);
    }

    public void removeEmployee(Employee employee) {
        employees.remove(employee);
        employee.setDepartment(null);
    }
}
```

### Why helper methods matter

Bidirectional relationships have two Java references.

Correct:

```java
department.addEmployee(employee);
```

Risky:

```java
department.getEmployees().add(employee);
```

because the reverse side may remain inconsistent in memory.

---

# 21. Many-to-Many

Scenario:

```text
Student * ----- * Course
```

```java
@Entity
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}
```

```java
@Entity
public class Course {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}
```

## Better real-world design: link entity

Many-to-many tables often gain additional columns:

```text
student_course
--------------
student_id
course_id
enrolled_at
status
grade
```

Now it is not merely a join table. Model it as an entity:

```text
Student 1 --- * Enrollment * --- 1 Course
```

This is often cleaner and more extensible.

---

# 22. Association Ownership and `mappedBy`

A bidirectional relationship has:

- owning side
- inverse side

`mappedBy` means:

> "The foreign-key relationship is mapped by a field on the other entity."

Example:

```java
@OneToMany(mappedBy = "department")
private List<Employee> employees;
```

and:

```java
@ManyToOne
@JoinColumn(name = "department_id")
private Department department;
```

`Employee.department` is the owning side.

A frequent beginner bug:

```java
department.getEmployees().add(employee);
```

but forgetting:

```java
employee.setDepartment(department);
```

Then the foreign key may not be updated as expected.

---

# 23. Cascading

Cascade controls whether an operation on one entity propagates to associated entities.

```java
@OneToMany(
    mappedBy = "order",
    cascade = CascadeType.ALL
)
private List<OrderItem> items;
```

Standard cascade types:

```text
PERSIST
MERGE
REMOVE
REFRESH
DETACH
ALL
```

## Example

Without persist cascade:

```java
em.persist(order);
em.persist(item1);
em.persist(item2);
```

With `CascadeType.PERSIST`:

```java
order.addItem(item1);
order.addItem(item2);
em.persist(order);
```

### Dangerous use of REMOVE

Avoid blindly cascading deletion across shared relationships.

Example:

```text
Order -> Product
```

Deleting an order should not delete the shared product.

So this is usually dangerous:

```java
@ManyToOne(cascade = CascadeType.ALL)
private Product product;
```

Cascade should model lifecycle ownership, not convenience.

---

# 24. Orphan Removal

```java
@OneToMany(
    mappedBy = "order",
    cascade = CascadeType.ALL,
    orphanRemoval = true
)
private List<OrderItem> items;
```

If an item is removed from the parent collection:

```java
order.removeItem(item);
```

Hibernate can delete the corresponding row.

Use when child lifetime is truly controlled by the parent.

Good example:

```text
Order -> OrderItem
```

Less appropriate:

```text
Employee -> Skill
```

because a skill may be shared or independent.

---

# 25. Fetching: LAZY vs EAGER

Fetching controls when associated data is loaded.

## LAZY

Load association only when needed.

```java
@OneToMany(fetch = FetchType.LAZY)
private List<OrderItem> items;
```

## EAGER

Association should be loaded eagerly according to mapping semantics/provider strategy.

```java
@ManyToOne(fetch = FetchType.EAGER)
private Customer customer;
```

### Recommendation

Do not solve fetching problems by marking everything `EAGER`.

Prefer:

- mostly lazy associations
- query-specific fetch plans
- fetch joins
- entity graphs
- batching
- DTO projections

Different use cases need different data shapes.

Example:

```text
Order details page -> order + customer + items
Order count report  -> only count
Shipping export     -> selected columns
```

A single permanent fetch strategy is rarely optimal for every case.

---

# 26. N+1 Query Problem

Suppose you load 100 orders:

```java
List<Order> orders = em.createQuery(
    "select o from Order o",
    Order.class
).getResultList();

for (Order order : orders) {
    System.out.println(order.getCustomer().getName());
}
```

Potential SQL behavior:

```text
1 query -> load orders
100 queries -> load each customer
-----------------------------
101 total queries
```

This is the **N+1 problem**.

It can destroy production performance.

Important: `EAGER` does not automatically guarantee one efficient SQL join.

Always inspect generated SQL and query counts for important use cases.

---

# 27. Fetch Join, Entity Graphs and Batch Fetching

## Fetch Join

```java
List<Order> orders = em.createQuery(
    """
    select o
    from Order o
    join fetch o.customer
    where o.status = :status
    """,
    Order.class
)
.setParameter("status", OrderStatus.PAID)
.getResultList();
```

This loads order and customer in one query shape.

## Fetching a collection

```java
select distinct o
from Order o
left join fetch o.items
where o.id = :id
```

Be careful when fetching multiple to-many collections. Cartesian multiplication may occur.

## Entity Graph

Entity graphs define use-case-specific fetch plans without permanently changing mappings.

```java
@EntityGraph(attributePaths = {"customer", "items"})
```

Common in Spring Data JPA.

## Batch Fetching

Hibernate can load multiple lazy associations in batches.

```java
@BatchSize(size = 50)
@OneToMany(mappedBy = "order")
private List<OrderItem> items;
```

Or configure a default batch fetch size globally.

### Choose based on use case

```text
Need one aggregate with details?   -> fetch join / entity graph
Need many parents lazily accessed? -> batch fetching
Need report fields only?           -> DTO projection
```

---

# 28. Inheritance Mapping

Suppose:

```java
abstract class Payment
CreditCardPayment extends Payment
BankTransferPayment extends Payment
```

Three common inheritance strategies exist.

## SINGLE_TABLE

```java
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "payment_type")
public abstract class Payment {
}
```

All subclasses share one table.

Pros:

- fast polymorphic queries
- fewer joins

Cons:

- many nullable columns
- table can become wide

## JOINED

```java
@Inheritance(strategy = InheritanceType.JOINED)
```

Base fields in parent table and subtype fields in child tables.

Pros:

- normalized schema

Cons:

- polymorphic queries require joins

## TABLE_PER_CLASS

```java
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
```

Separate table per concrete class.

Pros:

- isolated subtype tables

Cons:

- polymorphic querying can be expensive/complex

### Practical guidance

Use inheritance only when the domain truly has an "is-a" relationship. Composition is often simpler.

---

# 29. Composite Keys

Some legacy or domain tables use multiple columns as a primary key.

Example:

```text
invoice_line
------------
invoice_id
line_number
```

## `@Embeddable` + `@EmbeddedId`

```java
@Embeddable
public class InvoiceLineId implements Serializable {
    private Long invoiceId;
    private Integer lineNumber;

    // equals and hashCode
}
```

```java
@Entity
public class InvoiceLine {

    @EmbeddedId
    private InvoiceLineId id;
}
```

## `@IdClass`

Alternative:

```java
@Entity
@IdClass(InvoiceLineId.class)
public class InvoiceLine {

    @Id
    private Long invoiceId;

    @Id
    private Integer lineNumber;
}
```

Composite keys add complexity. Prefer a surrogate ID when database/domain constraints allow it, while preserving a unique business constraint for the real business key.

---

# 30. Natural IDs

A natural ID is a stable business identifier.

Examples:

- country ISO code
- immutable employee number
- SKU, if guaranteed stable

Hibernate provides `@NaturalId`:

```java
@NaturalId
@Column(nullable = false, unique = true, updatable = false)
private String employeeNumber;
```

Natural ID is Hibernate-specific functionality.

Do not confuse:

```text
Primary key  -> database/entity identity
Natural key  -> business-meaningful unique value
```

---

# 31. Entity Equality: `equals()` and `hashCode()`

Entity equality is subtle because generated identifiers may be null before persistence.

Bad simplistic pattern:

```java
@Override
public boolean equals(Object o) {
    return id.equals(((User) o).id);
}
```

For two new transient entities:

```java
id == null
```

Problems become worse when entities are stored in a `HashSet` before and after ID generation.

Common strategies include:

- immutable natural/business key equality when one exists
- carefully designed identifier-based equality
- avoiding mutable fields in equality

General rules:

- `equals()` and `hashCode()` must agree
- never use mutable associations in them
- avoid loading lazy collections during equality checks
- understand generated-ID lifecycle before implementing them

There is no one universal implementation appropriate for every entity model.

---

# 32. Transactions

A transaction groups operations into an all-or-nothing unit.

Example transfer:

```java
@Transactional
public void transfer(
        Long fromAccountId,
        Long toAccountId,
        BigDecimal amount) {

    Account from = em.find(Account.class, fromAccountId);
    Account to = em.find(Account.class, toAccountId);

    from.debit(amount);
    to.credit(amount);
}
```

If the second operation fails, the entire transaction should roll back.

## Standalone transaction

```java
EntityTransaction tx = em.getTransaction();

try {
    tx.begin();
    // work
    tx.commit();
} catch (RuntimeException e) {
    if (tx.isActive()) {
        tx.rollback();
    }
    throw e;
}
```

## Spring transaction

```java
@Transactional
public void placeOrder(...) {
    // transactional business operation
}
```

### Transaction boundary rule

Place transaction boundaries around business use cases, not random individual repository calls.

Better:

```text
placeOrder() -> one transaction
```

Rather than:

```text
saveOrder()     -> transaction 1
saveItem()      -> transaction 2
reserveStock()  -> transaction 3
```

when they must succeed or fail together.

---

# 33. ACID and Database Isolation

Transactions rely on database ACID principles:

```text
A = Atomicity
C = Consistency
I = Isolation
D = Durability
```

## Isolation anomalies

Common concurrency phenomena:

- dirty reads
- non-repeatable reads
- phantom reads
- lost updates

Typical isolation levels:

```text
READ UNCOMMITTED
READ COMMITTED
REPEATABLE READ
SERIALIZABLE
```

Actual behavior varies by database implementation.

Hibernate does not magically eliminate database concurrency concerns. You still need to understand your database's isolation and locking behavior.

---

# 34. Optimistic Locking

Use optimistic locking when conflicts are possible but not expected constantly.

```java
@Version
private long version;
```

Table:

```text
accounts
--------
id
balance
version
```

Update may conceptually become:

```sql
UPDATE accounts
SET balance = ?, version = ?
WHERE id = ? AND version = ?;
```

If another transaction has already changed the row, zero rows may be updated and Hibernate reports an optimistic locking conflict.

### Scenario

Two users edit the same customer:

```text
User A reads version 5
User B reads version 5
User A saves -> version 6
User B saves -> conflict
```

Without concurrency control, User B could silently overwrite User A.

Optimistic locking is excellent for:

- profile editing
- business documents
- configuration data
- moderate-contention workflows

---

# 35. Pessimistic Locking

Pessimistic locking asks the database to lock data so conflicting transactions wait/fail according to DB behavior.

```java
Account account = em.find(
    Account.class,
    accountId,
    LockModeType.PESSIMISTIC_WRITE
);
```

Conceptually similar to database row locking such as `SELECT ... FOR UPDATE` depending on dialect.

Good for:

- stock reservation with strict contention requirements
- financial counters
- inventory slots

Trade-offs:

- blocking
- deadlocks
- reduced throughput

Use carefully and keep transactions short.

---

# 36. HQL / JPQL

JPQL/HQL query entities and attributes instead of raw table/column names.

Entity:

```java
@Entity
@Table(name = "employees")
class Employee {
    private String name;
    private BigDecimal salary;
}
```

JPQL/HQL:

```java
select e
from Employee e
where e.salary > :minSalary
```

Not:

```sql
SELECT * FROM employees WHERE salary > ?
```

Hibernate's HQL is a rich query language and may provide features beyond standard JPQL.

### Basic query

```java
List<Employee> employees = em.createQuery(
    "select e from Employee e where e.active = true",
    Employee.class
).getResultList();
```

---

# 37. Typed Queries and Parameters

Always use parameters rather than string concatenation.

Good:

```java
TypedQuery<Employee> query = em.createQuery(
    "select e from Employee e where e.department.name = :dept",
    Employee.class
);

query.setParameter("dept", departmentName);
```

Bad:

```java
"select e from Employee e where e.name = '" + userInput + "'"
```

Parameterized queries improve safety and maintainability.

---

# 38. Joins, Aggregates, Grouping and Subqueries

## Join

```java
select o
from Order o
join o.customer c
where c.country = :country
```

## Left join

```java
select c
from Customer c
left join c.orders o
```

## Aggregation

```java
select count(o)
from Order o
where o.status = :status
```

## Grouping

```java
select o.status, count(o)
from Order o
group by o.status
```

## Having

```java
select c.id, count(o)
from Customer c
join c.orders o
group by c.id
having count(o) > 10
```

## Subquery

```java
select e
from Employee e
where e.salary > (
    select avg(e2.salary)
    from Employee e2
)
```

Use domain-oriented queries where suitable, but do not force every analytical report into entity loading.

---

# 39. DTO Projections

If a screen needs only three columns, loading full entities and relationships can be wasteful.

DTO:

```java
public record OrderSummary(
    Long id,
    String customerName,
    BigDecimal total
) {}
```

Projection query:

```java
List<OrderSummary> rows = em.createQuery(
    """
    select new com.example.OrderSummary(
        o.id,
        o.customer.name,
        o.total
    )
    from Order o
    where o.status = :status
    """,
    OrderSummary.class
)
.setParameter("status", OrderStatus.PAID)
.getResultList();
```

Excellent for:

- reports
- dashboards
- lists
- export endpoints
- read-heavy APIs

Do not use entities as universal API response DTOs.

---

# 40. Criteria API

Criteria builds queries programmatically.

```java
CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
Root<Employee> employee = cq.from(Employee.class);

cq.select(employee)
  .where(cb.greaterThan(employee.get("salary"), minSalary));

List<Employee> results = em.createQuery(cq).getResultList();
```

Criteria is verbose but useful for dynamic query construction.

Example dynamic search:

```text
employee name: optional
department: optional
min salary: optional
active: optional
```

Instead of concatenating query strings, build predicates conditionally.

For large enterprise search screens, specification/query-builder patterns may improve organization.

---

# 41. Native SQL

Sometimes SQL is the right tool.

```java
List<Object[]> rows = em.createNativeQuery(
    """
    SELECT department_id, COUNT(*)
    FROM employees
    GROUP BY department_id
    """
).getResultList();
```

Good scenarios:

- database-specific functions
- CTE-heavy reporting
- advanced window functions
- legacy queries
- performance-critical SQL already optimized by DB experts

Use native SQL intentionally rather than as an escape from learning ORM.

---

# 42. Named Queries

Define a reusable named query:

```java
@Entity
@NamedQuery(
    name = "Employee.findActive",
    query = "select e from Employee e where e.active = true"
)
public class Employee {
}
```

Use:

```java
List<Employee> employees = em
    .createNamedQuery("Employee.findActive", Employee.class)
    .getResultList();
```

Useful when queries are reused and centralized validation is desirable.

---

# 43. Pagination

Offset pagination:

```java
List<Order> orders = em.createQuery(
    "select o from Order o order by o.createdAt desc",
    Order.class
)
.setFirstResult(0)
.setMaxResults(20)
.getResultList();
```

Page 2:

```java
.setFirstResult(20)
.setMaxResults(20)
```

### Large-offset problem

Huge offsets can become expensive.

For large datasets consider keyset/seek pagination:

```text
WHERE (created_at, id) < (:lastCreatedAt, :lastId)
ORDER BY created_at DESC, id DESC
LIMIT 20
```

Hibernate offers key-based/keyset-oriented capabilities in modern versions, but the principle is database-independent: avoid scanning huge discarded offsets when scale matters.

### Fetch joins + pagination

Be careful paginating queries that fetch-join to-many collections. Row multiplication may make pagination incorrect or force in-memory work. Often use a two-step query:

1. page parent IDs
2. fetch details for those IDs

---

# 44. Bulk Update and Delete

Bulk JPQL:

```java
int updated = em.createQuery(
    """
    update Employee e
    set e.active = false
    where e.lastWorkingDate < :cutoff
    """
)
.setParameter("cutoff", cutoff)
.executeUpdate();
```

Important: bulk updates operate directly in the database and bypass normal managed-entity dirty checking.

If affected entities are already managed, persistence-context state may become stale.

Common strategy:

```java
em.clear();
```

after appropriate bulk operations, or structure the transaction to avoid stale managed instances.

---

# 45. Stored Procedures

JPA supports stored-procedure invocation.

Conceptual example:

```java
StoredProcedureQuery query = em
    .createStoredProcedureQuery("calculate_monthly_bonus")
    .registerStoredProcedureParameter(
        "department_id",
        Long.class,
        ParameterMode.IN
    )
    .setParameter("department_id", 10L);

query.execute();
```

Use when:

- existing enterprise database logic is stored in procedures
- database team owns specific calculations
- migration constraints require compatibility

Avoid moving all business logic into stored procedures without architectural justification.

---

# 46. First-Level Cache

Every persistence context has a first-level cache.

```java
Customer a = em.find(Customer.class, 1L);
Customer b = em.find(Customer.class, 1L);
```

The second call may not require another SQL query because the entity is already managed.

The first-level cache:

- is mandatory conceptually as part of persistence context identity
- is scoped to the EntityManager/Session
- is not a cross-request application cache

### Clearing

```java
em.clear();
```

This detaches all currently managed entities.

Useful during huge batch processing to avoid memory growth.

---

# 47. Second-Level Cache

Second-level cache can share cached entity data across sessions/persistence contexts.

Concept:

```text
Request 1 Session -> L1 cache
                    |
                    v
                L2 cache
                    |
                    v
                 Database
```

Use it selectively for data with suitable access patterns.

Good candidates:

- countries
- reference tables
- slowly changing configuration

Poor candidates:

- highly volatile balances
- frequently updated stock counts
- data requiring strict immediate consistency unless cache strategy is designed carefully

Common cache providers/integrations vary by Hibernate version and application stack.

Do not enable L2 cache globally and assume performance will automatically improve.

---

# 48. Query Cache

Query cache is different from entity cache.

A cached query result often represents identifiers/result metadata rather than acting as a magical copy of every entity state.

Use only after profiling.

Best candidate:

```text
Same query + same parameters + frequently repeated + underlying data changes infrequently
```

Bad candidate:

```text
Every request has different filters and rapidly changing data
```

Caching adds invalidation complexity. Measure before and after.

---

# 49. Hibernate Statistics and SQL Logging

You cannot tune Hibernate blindly.

Enable SQL logging in development/test environments.

Useful things to inspect:

- query count
- SQL shape
- duplicated selects
- unexpected joins
- N+1 behavior
- batch effectiveness
- slow queries

Hibernate statistics can expose counts such as:

- entity loads
- query execution count
- cache hits/misses
- collection fetches

Example native Hibernate access:

```java
SessionFactory sessionFactory =
    emf.unwrap(SessionFactory.class);

Statistics statistics = sessionFactory.getStatistics();
statistics.setStatisticsEnabled(true);
```

Do not leave excessively verbose SQL logging enabled carelessly in high-volume production environments.

---

# 50. JDBC Batching

Batching groups similar statements, reducing network/database round trips.

Typical configuration:

```properties
hibernate.jdbc.batch_size=50
hibernate.order_inserts=true
hibernate.order_updates=true
```

Example:

```java
for (int i = 0; i < 10_000; i++) {
    Customer customer = buildCustomer(i);
    em.persist(customer);

    if (i % 50 == 0) {
        em.flush();
        em.clear();
    }
}
```

Why flush + clear?

Without clearing, Hibernate may track all 10,000 entities in memory.

### ID strategy matters

Certain identifier strategies may prevent or reduce efficient insert batching. Sequence-based allocation often works better than per-row identity generation for large insert workloads.

---

# 51. Bulk Insert Strategies

For 100 rows, normal entity persistence may be fine.

For 10 million rows, reconsider.

Options:

- Hibernate batching
- stateless Hibernate sessions for specialized workloads
- JDBC batch operations
- database bulk loader
- native copy/import commands
- ETL tools

ORM is not automatically the best mechanism for every data volume.

### StatelessSession concept

Hibernate offers a lower-level stateless session model for high-volume operations without the normal persistence-context behavior.

Trade-off: you lose conveniences such as normal first-level caching and automatic dirty checking.

---

# 52. Read-Only Workloads

Reporting endpoints should not necessarily manage thousands of full entities.

Prefer:

- DTO projection
- scalar queries
- read-only hints/session configuration when appropriate
- streaming carefully
- pagination

Example:

```java
select new com.example.InvoiceExportRow(
    i.invoiceNumber,
    v.name,
    i.total,
    i.status
)
from Invoice i
join i.vendor v
where i.invoiceDate between :from and :to
```

The database should return only what the report needs.

---

# 53. Filters and Soft Delete

## Soft delete concept

Instead of deleting:

```sql
DELETE FROM customers WHERE id = 5;
```

mark:

```text
deleted = true
```

Why?

- audit/history
- restore capability
- business retention requirements

Hibernate provides version-dependent features/annotations for soft-delete behavior, and applications can also implement explicit status filtering.

Simple domain approach:

```java
private boolean deleted;
```

Query:

```java
select c from Customer c where c.deleted = false
```

### Warning

Soft delete affects:

- unique constraints
- indexes
- reports
- foreign keys
- query correctness
- archival policies

Treat it as a data-model decision, not just an annotation trick.

## Hibernate Filters

Filters can dynamically restrict entity data based on session-level parameters.

Possible use cases:

- tenant restriction
- active/inactive records
- regional data visibility

They are Hibernate-specific.

---

# 54. Auditing

Basic auditing fields:

```java
private Instant createdAt;
private String createdBy;
private Instant updatedAt;
private String updatedBy;
```

Lifecycle callback example:

```java
@PrePersist
void beforeInsert() {
    createdAt = Instant.now();
}

@PreUpdate
void beforeUpdate() {
    updatedAt = Instant.now();
}
```

For full historical revisions, Hibernate Envers is commonly used.

Concept:

```text
Customer current table
Customer audit/revision history
```

Use cases:

- who changed vendor bank details?
- what was the invoice status yesterday?
- what fields changed during approval?

Application audit requirements should be designed with security and regulatory needs in mind.

---

# 55. Multi-Tenancy

Multi-tenancy means one application serves multiple isolated tenants/customers.

Common models:

## Database per tenant

```text
Tenant A -> DB_A
Tenant B -> DB_B
```

Strong isolation but higher operational overhead.

## Schema per tenant

```text
DB
|- tenant_a schema
|- tenant_b schema
```

## Shared schema with tenant discriminator

```text
orders
------
id
tenant_id
...
```

Lower infrastructure overhead but requires extremely careful tenant filtering.

Hibernate has multi-tenancy support, and modern versions provide several tenant-related features.

### Security rule

Tenant isolation must never depend only on UI-provided filters. Tenant identity must be enforced server-side in a trustworthy context.

---

# 56. Schema Generation and Validation

Common `hibernate.hbm2ddl.auto` modes historically include:

```text
none
validate
update
create
create-drop
```

Development example:

```properties
hibernate.hbm2ddl.auto=create-drop
```

Production recommendation:

```properties
hibernate.hbm2ddl.auto=validate
```

and use versioned migration tooling such as Flyway or Liquibase.

### Why avoid `update` in serious production environments?

Automatic schema mutation may:

- make uncontrolled changes
- be insufficient for complex migrations
- fail to capture data backfills
- make rollback strategy unclear

Production schema changes should be explicit, reviewed, repeatable and version-controlled.

---

# 57. Flyway/Liquibase Strategy

Hibernate maps the object model. Migration tools manage database evolution.

Example migration:

```sql
-- V15__add_invoice_status.sql
ALTER TABLE invoices
ADD COLUMN status VARCHAR(30) NOT NULL DEFAULT 'DRAFT';

CREATE INDEX idx_invoices_status
ON invoices(status);
```

Then Hibernate validates that mappings agree with schema.

Recommended pattern:

```text
Migration tool -> creates/upgrades schema
Hibernate      -> validates schema and handles runtime persistence
```

---

# 58. Validation

Jakarta Bean Validation integrates naturally with persistence applications.

```java
@Entity
public class Employee {

    @NotBlank
    @Column(nullable = false)
    private String name;

    @Email
    @Column(nullable = false)
    private String email;

    @PositiveOrZero
    private BigDecimal salary;
}
```

Remember:

```text
@NotNull               -> application validation
@Column(nullable=false)-> ORM schema metadata / DB mapping intent
NOT NULL constraint    -> database integrity
```

Strong systems use validation at appropriate layers rather than relying only on one.

---

# 59. Repository/DAO Patterns

A repository hides persistence details from business services.

```java
public interface OrderRepository {
    Optional<Order> findById(Long id);
    List<Order> findPending();
    void save(Order order);
}
```

Implementation:

```java
public class JpaOrderRepository implements OrderRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Optional<Order> findById(Long id) {
        return Optional.ofNullable(em.find(Order.class, id));
    }

    @Override
    public void save(Order order) {
        if (order.getId() == null) {
            em.persist(order);
        } else {
            em.merge(order);
        }
    }
}
```

However, be careful with generic "save everything" abstractions. In many transactional applications, managed entities do not need an explicit save after modification.

---

# 60. Service Layer and Transaction Boundaries

Repository:

```java
@Repository
public class OrderRepository {
    // persistence operations
}
```

Service:

```java
@Service
public class OrderService {

    @Transactional
    public void approveOrder(Long orderId) {
        Order order = repository.getRequired(orderId);
        order.approve();
        auditService.recordApproval(order);
    }
}
```

Controller:

```java
@RestController
public class OrderController {
    // HTTP concerns
}
```

Good separation:

```text
Controller -> Service -> Repository -> Hibernate -> DB
```

Keep business rules in domain/service layers rather than controllers or persistence annotations.

---

# 61. Spring Boot + Hibernate/JPA

Spring Boot commonly auto-configures Hibernate as the JPA provider when JPA dependencies are included.

Typical dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

Configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/appdb
spring.datasource.username=app
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=validate
```

Entity:

```java
@Entity
public class Product {
    @Id
    @GeneratedValue
    private Long id;
}
```

Repository:

```java
public interface ProductRepository
        extends JpaRepository<Product, Long> {
}
```

Service:

```java
@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repository;

    @Transactional
    public void changePrice(Long id, BigDecimal price) {
        Product product = repository.findById(id)
            .orElseThrow();

        product.setPrice(price);
    }
}
```

Again, dirty checking persists the managed change.

---

# 62. Spring Data JPA Relationship

Spring Data JPA is not Hibernate.

Think:

```text
Spring Data JPA
      |
Jakarta Persistence API
      |
Hibernate ORM provider
      |
JDBC
      |
Database
```

Spring Data JPA adds repository abstractions such as:

```java
JpaRepository
CrudRepository
Pageable
Specification
@EntityGraph
```

Hibernate remains the ORM engine in a typical Spring Boot JPA stack.

Derived query:

```java
List<Employee> findByDepartmentIdAndActiveTrue(Long departmentId);
```

Custom query:

```java
@Query("""
    select e
    from Employee e
    where e.salary >= :salary
""")
List<Employee> findWithMinimumSalary(BigDecimal salary);
```

---

# 63. Open Session in View

Open Session/EntityManager in View keeps the persistence context open during web response rendering.

Why it feels convenient:

```java
order.getCustomer().getName()
```

may still lazily load outside the service method.

Why it can be dangerous:

- hidden database calls in controllers/JSON serialization
- N+1 queries outside business-service boundaries
- unpredictable performance
- accidental lazy loading

A disciplined architecture often loads the required data within the transactional service and converts it to DTOs before leaving the boundary.

---

# 64. Testing

## Unit test

Pure business logic should often be testable without Hibernate.

```java
@Test
void orderCannotBeApprovedWithoutItems() {
    Order order = new Order();

    assertThrows(
        IllegalStateException.class,
        order::approve
    );
}
```

## Persistence integration test

Test:

- mappings
- constraints
- queries
- transaction behavior
- cascade behavior
- lazy loading
- optimistic locks

Example with Spring:

```java
@DataJpaTest
class OrderRepositoryTest {
}
```

Do not assume an in-memory database behaves identically to PostgreSQL/MySQL/SQL Server.

---

# 65. Testcontainers

Testcontainers starts real database containers during tests.

Advantages:

- same database engine as production
- realistic SQL behavior
- real constraints/index semantics
- realistic dialect behavior

Conceptual Spring Boot test:

```java
@Testcontainers
@SpringBootTest
class InvoiceRepositoryIT {

    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:latest");
}
```

For reproducible CI, pin a known database image version instead of relying blindly on `latest`.

---

# 66. Database Constraints and Indexes

Hibernate cannot compensate for a poorly designed database.

Important constraints:

- primary key
- foreign key
- not null
- unique
- check constraints where appropriate

Example:

```sql
ALTER TABLE invoice_lines
ADD CONSTRAINT fk_line_invoice
FOREIGN KEY (invoice_id)
REFERENCES invoices(id);
```

Indexes should match access patterns.

Query:

```sql
SELECT *
FROM invoices
WHERE vendor_id = ?
  AND status = ?
ORDER BY invoice_date DESC;
```

Potential useful index:

```sql
CREATE INDEX idx_invoice_vendor_status_date
ON invoices(vendor_id, status, invoice_date DESC);
```

Do not index every column. Every index costs storage and write performance.

Use the database execution plan for serious tuning.

---

# 67. Performance Tuning Checklist

Before blaming Hibernate, inspect the entire data-access path.

## Query count

Ask:

```text
How many SQL statements does this endpoint execute?
```

## Query shape

Ask:

```text
Are we selecting 50 columns when only 4 are needed?
```

## N+1

Check collections and to-one relationships.

## Indexes

Verify execution plans.

## Fetch strategy

Use:

- fetch join
- entity graph
- DTO projection
- batch fetch

## Pagination

Never return an unbounded table to a UI.

## Batching

Use JDBC batching for large write loops.

## Persistence-context size

Flush and clear during large batch processing.

## Caching

Cache only after measuring.

## Transactions

Keep transactions coherent and not unnecessarily long.

## Connection pool

Tune pool size based on database capacity and workload, not arbitrary large numbers.

## Logging

Measure actual SQL and latency.

### Golden rule

> Optimize a measured bottleneck, not an imagined one.

---

# 68. Common Exceptions and Troubleshooting

## LazyInitializationException

Typical reason:

```java
Order order = service.findOrder(id);
// transaction/session ends
order.getItems().size();
```

The collection was lazy and no persistence context is available.

Better solutions:

- fetch needed data inside transaction
- use fetch join/entity graph
- return a DTO designed for the use case

Do not automatically "fix" it by making every relationship eager.

---

## EntityExistsException / duplicate identity issues

Possible causes:

- persisting an entity that already exists
- conflicting managed instance identity
- incorrect persist/merge usage

Understand entity state before choosing `persist()` or `merge()`.

---

## TransientPropertyValueException

Typical scenario:

```java
Order order = new Order();
order.setCustomer(new Customer());
em.persist(order);
```

but the customer is transient and no appropriate cascade exists.

Fix depends on domain:

- persist customer first
- use correct cascade if parent truly owns lifecycle
- load an existing customer instead

---

## ConstraintViolationException

Possible database constraint failure:

- unique constraint
- foreign key
- not-null
- check constraint

Read the underlying SQL/database error.

---

## OptimisticLockException

Another transaction modified the row/version.

Handle according to business case:

- tell user data changed
- reload and retry
- automatic retry only when semantically safe

---

## MultipleBagFetchException

A Hibernate query may fail when trying to simultaneously fetch multiple bag/list-like collections whose SQL row multiplication cannot be safely reconstructed in the requested way.

Possible redesigns:

- fetch one collection at a time
- use sets where domain-appropriate
- separate queries
- batch fetching
- DTO projection

Do not change a collection from `List` to `Set` only to silence an exception if ordering/duplicates matter to the domain.

---

## Detached entity passed to persist

You are attempting to `persist()` an object that Hibernate treats as detached/existing.

Potential approaches:

- load managed entity and apply changes
- use `merge()` when detached-entity merging is actually intended
- redesign API to pass command DTOs instead of detached entity graphs

---

# 69. Common Anti-Patterns

## Anti-pattern 1: Everything EAGER

```java
@OneToMany(fetch = FetchType.EAGER)
```

everywhere causes oversized queries and hidden loading.

## Anti-pattern 2: Returning entities directly from REST APIs

Problems:

- lazy-loading surprises
- infinite recursive JSON graphs
- leaking internal fields
- API coupled to DB model

Use DTOs.

## Anti-pattern 3: Cascading `ALL` everywhere

Cascade should represent lifecycle ownership.

## Anti-pattern 4: Calling `save()` after every setter

For managed entities in a transaction, dirty checking already exists.

## Anti-pattern 5: No transaction around multi-step business logic

Can leave data partially updated.

## Anti-pattern 6: Querying inside a loop

Classic N+1 pattern.

## Anti-pattern 7: `ddl-auto=update` as production migration strategy

Use controlled migrations.

## Anti-pattern 8: Huge entity graphs

Do not model the entire enterprise database as one traversable object graph that any request can accidentally load.

## Anti-pattern 9: Using entities as form/request models

Use request DTOs and validate inputs.

## Anti-pattern 10: Ignoring database constraints

Application checks alone are vulnerable to race conditions.

## Anti-pattern 11: Long-running transactions containing external API calls

Example:

```text
begin DB transaction
update row
call slow third-party HTTP API for 30 seconds
commit
```

This can hold locks/connections unnecessarily.

Consider outbox/event patterns or carefully designed workflows.

---

# 70. Security Considerations

Hibernate does not replace application security.

## Parameterize queries

```java
query.setParameter("email", email);
```

## Never trust tenant IDs from request parameters

```text
GET /invoices?tenantId=another-company
```

Tenant authorization must come from authenticated context.

## Avoid exposing entities directly

Sensitive fields might leak:

```text
passwordHash
internalCost
bankAccount
approvalNotes
```

## Database credentials

Store secrets securely.

## Authorization

Query by both identity and authorization context when necessary.

Instead of:

```java
em.find(Invoice.class, invoiceId)
```

possibly use:

```java
select i
from Invoice i
where i.id = :id
  and i.company.id = :companyId
```

when company-level isolation must be enforced.

---

# 71. Real-World E-Commerce Example

Domain:

```text
Customer
  |
  +-- Orders
        |
        +-- OrderItems -- Product
        |
        +-- Payment
```

## Entities

```java
@Entity
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Customer customer;

    @OneToMany(
        mappedBy = "order",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<OrderItem> items = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @Version
    private long version;

    public void addItem(Product product, int quantity) {
        items.add(new OrderItem(this, product, quantity));
    }

    public void markPaid() {
        if (items.isEmpty()) {
            throw new IllegalStateException("Empty order cannot be paid");
        }
        status = OrderStatus.PAID;
    }
}
```

Order item:

```java
@Entity
public class OrderItem {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Product product;

    private int quantity;

    private BigDecimal unitPrice;
}
```

### Important domain decision

Store `unitPrice` on `OrderItem`.

Why?

If Product price changes next month, historical order totals must not change.

This illustrates an important ORM lesson:

> Good persistence begins with good domain/data modeling, not annotations.

## Order details query

```java
select distinct o
from Order o
join fetch o.customer
left join fetch o.items i
left join fetch i.product
where o.id = :id
```

Depending on graph size, a DTO projection or multiple optimized queries may be better than one giant join.

---

# 72. Real-World Banking Example

Entities:

```text
Account
TransactionEntry
Transfer
```

Account:

```java
@Entity
public class Account {

    @Id
    private UUID id;

    @Version
    private long version;

    @Column(nullable = false, precision = 19, scale = 4)
    private BigDecimal balance;

    public void debit(BigDecimal amount) {
        if (amount.signum() <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        if (balance.compareTo(amount) < 0) {
            throw new IllegalStateException("Insufficient funds");
        }
        balance = balance.subtract(amount);
    }
}
```

Transfer service:

```java
@Transactional
public void transfer(UUID fromId, UUID toId, BigDecimal amount) {
    Account from = accountRepository.getForUpdate(fromId);
    Account to = accountRepository.getForUpdate(toId);

    from.debit(amount);
    to.credit(amount);

    ledgerRepository.record(fromId, toId, amount);
}
```

### Key lessons

- transactions are mandatory
- concurrency must be considered
- money should use `BigDecimal`, not floating-point primitive types
- immutable ledger records may be better than rewriting history
- authorization and idempotency matter

Real banking systems are more complex, but this model teaches the core persistence concerns.

---

# 73. Real-World HR Example

Domain:

```text
Department 1 --- * Employee
Employee   1 --- * EmploymentHistory
Employee   * --- * Skill (through EmployeeSkill)
```

Employee:

```java
@Entity
@Table(
    name = "employees",
    uniqueConstraints = @UniqueConstraint(
        name = "uk_employee_number",
        columnNames = "employee_number"
    )
)
public class Employee {

    @Id
    @GeneratedValue
    private Long id;

    @NaturalId
    @Column(name = "employee_number", updatable = false)
    private String employeeNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    private Department department;

    @Enumerated(EnumType.STRING)
    private EmploymentStatus status;

    private LocalDate joiningDate;
    private LocalDate leavingDate;

    @Version
    private long version;
}
```

Scenario: employee transfer.

```java
@Transactional
public void transferDepartment(
        Long employeeId,
        Long newDepartmentId) {

    Employee employee = employeeRepository.getRequired(employeeId);
    Department newDepartment = departmentRepository.getRequired(newDepartmentId);

    employee.changeDepartment(newDepartment);
}
```

Dirty checking updates the relationship foreign key.

---

# 74. Invoice / Purchase-Order Example

Domain:

```text
Vendor
  |
  +-- Invoices
        |
        +-- InvoiceLines
        |
        +-- PurchaseOrder
        |
        +-- ApprovalSteps
```

Invoice:

```java
@Entity
@Table(
    name = "invoices",
    uniqueConstraints = @UniqueConstraint(
        name = "uk_vendor_invoice_number",
        columnNames = {"vendor_id", "invoice_number"}
    )
)
public class Invoice {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @Column(name = "invoice_number", nullable = false)
    private String invoiceNumber;

    private LocalDate invoiceDate;

    @Column(precision = 19, scale = 4)
    private BigDecimal total;

    @Enumerated(EnumType.STRING)
    private InvoiceStatus status;

    @OneToMany(
        mappedBy = "invoice",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<InvoiceLine> lines = new ArrayList<>();

    @Version
    private long version;
}
```

Why unique on `(vendor_id, invoice_number)`?

Different vendors may legally use the same invoice number, while the same vendor should generally not submit the same invoice number twice according to the application's business rules.

## Approval query

```java
select i
from Invoice i
join fetch i.vendor
where i.status = :status
order by i.invoiceDate asc
```

## Dashboard projection

```java
select new com.example.InvoiceStatusCount(
    i.status,
    count(i)
)
from Invoice i
group by i.status
```

## Safe state transition

```java
public void approve() {
    if (status != InvoiceStatus.PENDING_APPROVAL) {
        throw new IllegalStateException(
            "Only pending invoices can be approved"
        );
    }
    status = InvoiceStatus.APPROVED;
}
```

Prefer domain behavior over exposing arbitrary public status setters.

---

# 75. Interview Questions

## Beginner

### What is Hibernate?

Hibernate is an ORM framework that maps Java domain objects to relational database data and implements Jakarta Persistence while also providing provider-specific features.

### What is JPA?

JPA, now Jakarta Persistence, is a standard specification/API for Java persistence. Hibernate is one implementation/provider.

### What is an entity?

A persistent domain object mapped to database data and identified by a primary key.

### What is the persistence context?

A context that tracks managed entity instances and supports identity, dirty checking and first-level caching.

### What is dirty checking?

Automatic detection of changes made to managed entity state so Hibernate can generate update SQL during flush.

---

## Intermediate

### `persist()` vs `merge()`?

`persist()` makes a new transient entity managed and schedules insertion.

`merge()` copies state from a detached/new object into a managed instance and returns that managed instance.

### First-level vs second-level cache?

First-level cache is scoped to the persistence context. Second-level cache may be shared across sessions and is optional/configurable.

### LAZY vs EAGER?

They describe association loading semantics. Lazy delays loading until needed; eager requests eager availability but does not guarantee a single efficient SQL statement.

### What is N+1?

One query loads N parent rows and then additional queries load related data repeatedly, often N more queries.

### What does `mappedBy` mean?

It identifies the field on the owning side that maps the association.

### Cascade vs orphanRemoval?

Cascade propagates persistence operations. Orphan removal deletes a child removed from an owning aggregate relationship when configured.

---

## Advanced

### Why can fetch-joining multiple collections be problematic?

SQL joins multiply rows across collection combinations, causing large result sets and potentially unsupported/ambiguous bag fetching.

### Why can bulk JPQL leave stale entities?

Bulk operations execute directly against the database and bypass normal managed-object synchronization.

### Why is IDENTITY not always ideal for bulk inserts?

Immediate DB-generated IDs may interfere with batching because each insert can require identity retrieval.

### Optimistic vs pessimistic locking?

Optimistic locking detects conflicts, typically with a version column. Pessimistic locking obtains database locks proactively.

### Why should entities not usually be returned directly from REST controllers?

It couples API representation to persistence, can trigger lazy loading/recursive serialization, and may expose fields unintentionally.

### What is write-behind?

Hibernate may defer SQL until flush rather than executing every object change immediately.

### What is a persistence-context identity guarantee?

Within one persistence context, repeated loading of the same entity identity resolves to the same managed entity instance.

---

# 76. Practice Exercises

## Beginner Exercises

1. Create a `Book` entity with:
   - ID
   - title
   - ISBN
   - price
   - published date

2. Implement CRUD for `Book`.

3. Create `Author` and map:

```text
Author 1 --- * Book
```

4. Query books by minimum price.

5. Query books by author.

## Intermediate Exercises

6. Create:

```text
Customer 1 --- * Order
Order 1 --- * OrderItem
OrderItem * --- 1 Product
```

7. Add cascading only where lifecycle ownership makes sense.

8. Demonstrate an N+1 problem intentionally.

9. Fix it using a fetch join.

10. Create a DTO projection for order summaries.

11. Add pagination.

12. Add optimistic locking.

13. Write a bulk update to archive old records.

14. Add a Flyway migration.

## Advanced Exercises

15. Process 100,000 imported rows with batching.

16. Compare performance with and without periodic `flush()/clear()`.

17. Add second-level caching to a stable reference entity.

18. Build dynamic Criteria filters.

19. Build tenant-aware queries.

20. Create integration tests using the same database engine as production.

21. Add an audit trail for status transitions.

22. Compare entity loading vs DTO projection query count and memory usage.

---

# 77. Mini Projects

## Project 1 — Library Management

Entities:

```text
Book
Author
Member
Loan
Category
```

Learn:

- basic mappings
- one-to-many
- many-to-many/link entity
- queries
- transactions

## Project 2 — E-Commerce

Entities:

```text
Customer
Address
Product
Category
Order
OrderItem
Payment
Shipment
```

Learn:

- aggregate modeling
- cascading
- optimistic locking
- DTO projections
- pagination
- N+1 tuning

## Project 3 — HRMS

Entities:

```text
Employee
Department
ManagerHierarchy
Skill
EmployeeSkill
Attendance
LeaveRequest
```

Learn:

- recursive/self relationships
- reporting queries
- composite uniqueness
- auditing
- status workflows

## Project 4 — Invoice Workflow

Entities:

```text
Vendor
Invoice
InvoiceLine
PurchaseOrder
GoodsReceipt
ApprovalStep
Payment
```

Learn:

- transactional workflow
- unique invoice constraints
- state transitions
- audit history
- concurrency
- reporting projections

---

# 78. Learning Roadmap

## Phase 1 — Foundation

Master:

```text
SQL
JDBC basics
relational modeling
primary/foreign keys
transactions
Java classes and collections
```

## Phase 2 — Hibernate Basics

Learn:

```text
@Entity
@Id
@GeneratedValue
EntityManager
persist/find/remove
entity lifecycle
persistence context
dirty checking
```

## Phase 3 — Relationships

Learn deeply:

```text
@ManyToOne
@OneToMany
@OneToOne
@ManyToMany
mappedBy
@JoinColumn
cascade
orphanRemoval
```

## Phase 4 — Querying

Learn:

```text
JPQL/HQL
joins
aggregation
DTO projection
Criteria
native SQL
pagination
```

## Phase 5 — Transactions and Concurrency

Learn:

```text
transaction boundaries
isolation
@Version
optimistic locking
pessimistic locking
```

## Phase 6 — Performance

Master:

```text
N+1
fetch joins
entity graphs
batch fetching
JDBC batching
query plans
indexes
L1/L2 cache
```

## Phase 7 — Production Architecture

Learn:

```text
Spring Boot
Spring Data JPA
Flyway/Liquibase
DTO/API boundaries
testing
Testcontainers
auditing
multi-tenancy
security
observability
```

## Phase 8 — Advanced Hibernate

Study provider-specific features when needed:

```text
Hibernate filters
natural IDs
Envers
custom types
JSON mappings
stateless sessions
advanced HQL
Hibernate-specific fetch/performance features
```

---

# 79. Production Checklist

Before deploying a Hibernate-backed service, verify:

- [ ] Entities have correct primary keys.
- [ ] Foreign keys exist in the database.
- [ ] Important columns have proper `NOT NULL` constraints.
- [ ] Business uniqueness rules have unique constraints.
- [ ] Enum values are stored safely.
- [ ] Money uses `BigDecimal` with suitable precision/scale.
- [ ] Important status transitions are validated.
- [ ] `@Version` is used where lost updates matter.
- [ ] Fetch strategy has been reviewed.
- [ ] Major API endpoints have no N+1 problem.
- [ ] Query counts are known for critical endpoints.
- [ ] Large result sets are paginated.
- [ ] Report screens use projections where appropriate.
- [ ] Large write workloads use batching or another suitable bulk mechanism.
- [ ] Database indexes match important queries.
- [ ] Schema changes are migration-controlled.
- [ ] `ddl-auto` is not carelessly modifying production schema.
- [ ] Transactions represent complete business operations.
- [ ] Long external calls do not unnecessarily hold DB transactions open.
- [ ] Lazy loading does not leak unpredictably into controllers/serialization.
- [ ] Entities are not exposing secret/internal fields in APIs.
- [ ] Database credentials are secret-managed.
- [ ] Integration tests run against realistic database behavior.
- [ ] Concurrency scenarios have been tested.
- [ ] SQL logging/observability exists for troubleshooting.
- [ ] Slow queries are investigated using DB execution plans.
- [ ] Cache is enabled only where it provides measured benefit.
- [ ] Multi-tenant isolation is enforced server-side if applicable.

---

# 80. Cheat Sheet

## Entity

```java
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;
}
```

## Persist

```java
em.persist(entity);
```

## Find

```java
Customer c = em.find(Customer.class, id);
```

## Delete

```java
em.remove(c);
```

## One-to-Many

```java
@OneToMany(mappedBy = "customer")
private List<Order> orders;
```

## Many-to-One

```java
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "customer_id")
private Customer customer;
```

## One-to-One

```java
@OneToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "profile_id")
private Profile profile;
```

## Many-to-Many

```java
@ManyToMany
@JoinTable(
    name = "student_course",
    joinColumns = @JoinColumn(name = "student_id"),
    inverseJoinColumns = @JoinColumn(name = "course_id")
)
private Set<Course> courses;
```

## Enum

```java
@Enumerated(EnumType.STRING)
private Status status;
```

## Version

```java
@Version
private long version;
```

## Embeddable

```java
@Embedded
private Address address;
```

## JPQL/HQL

```java
select e
from Employee e
where e.active = true
```

## Fetch Join

```java
select o
from Order o
join fetch o.customer
where o.id = :id
```

## DTO Projection

```java
select new com.example.OrderDto(o.id, o.total)
from Order o
```

## Pagination

```java
query.setFirstResult(offset);
query.setMaxResults(limit);
```

## Transaction

```java
@Transactional
public void executeBusinessOperation() {
}
```

## Batch Loop

```java
for (int i = 0; i < rows.size(); i++) {
    em.persist(rows.get(i));

    if (i % 50 == 0) {
        em.flush();
        em.clear();
    }
}
```

---

# 81. Glossary

**ORM**  
Object-Relational Mapping: mapping objects to relational database structures.

**JPA / Jakarta Persistence**  
Standard Java/Jakarta persistence API and specification.

**Hibernate ORM**  
Popular ORM provider implementing Jakarta Persistence and adding provider-specific functionality.

**Entity**  
Persistent object with database identity.

**EntityManager**  
Standard persistence API used to manage entities and queries.

**Session**  
Hibernate-native persistence interface.

**Persistence Context**  
Tracking context containing managed entity instances.

**Transient Entity**  
New object not yet managed/persisted.

**Managed Entity**  
Entity currently tracked by a persistence context.

**Detached Entity**  
Formerly managed entity no longer attached to a persistence context.

**Dirty Checking**  
Automatic detection of changes to managed entities.

**Flush**  
Synchronizing pending in-memory changes with database SQL inside the current transaction.

**Cascade**  
Propagation of persistence operations to related entities.

**Orphan Removal**  
Deletion of a dependent child when removed from a parent-owned association.

**Lazy Loading**  
Deferring association loading until accessed.

**Eager Loading**  
Requesting association data be available eagerly according to mapping/fetch plan.

**N+1 Problem**  
One initial query followed by many repetitive child/association queries.

**Fetch Join**  
JPQL/HQL join that also initializes an association as part of the query result.

**Entity Graph**  
Declarative use-case-specific fetch plan.

**DTO Projection**  
Selecting only the data required into a non-entity result object.

**First-Level Cache**  
Persistence-context-scoped identity/cache mechanism.

**Second-Level Cache**  
Optional cache shared beyond a single persistence context.

**Optimistic Lock**  
Conflict detection typically based on a version field.

**Pessimistic Lock**  
Database locking used to prevent conflicting concurrent access.

**JPQL**  
Standard object-oriented query language defined by Jakarta Persistence.

**HQL**  
Hibernate Query Language, Hibernate's rich entity-oriented query language.

**Native Query**  
Direct SQL executed through the persistence layer.

**Migration**  
Version-controlled database schema/data change.

**Dialect**  
Hibernate's knowledge of database-specific SQL behavior and capabilities.

---

# Bonus: How to Think Like a Strong Hibernate Developer

A beginner asks:

> "Which annotation should I use?"

A strong Hibernate developer asks:

> "What is the ownership and lifecycle of this data?"

A beginner asks:

> "How do I make this relationship EAGER?"

A strong Hibernate developer asks:

> "What exact data shape does this use case need, and how many SQL statements should it execute?"

A beginner asks:

> "Should I call save after changing the entity?"

A strong Hibernate developer asks:

> "Is this entity managed inside the correct transaction boundary?"

A beginner asks:

> "Hibernate generated SQL, so database design does not matter, right?"

A strong Hibernate developer knows:

> ORM and relational database knowledge must be used together.

The most valuable Hibernate skills are therefore not memorizing annotations. They are:

1. understanding entity state,
2. modeling ownership correctly,
3. understanding transactions,
4. predicting generated SQL,
5. recognizing N+1 and row multiplication,
6. using DTO projections when entities are unnecessary,
7. controlling fetch plans per use case,
8. designing database constraints and indexes correctly,
9. handling concurrency deliberately,
10. measuring real performance.

---

# Bonus: Hibernate Debugging Method

When something goes wrong, use this sequence.

## Step 1 — Identify the entity state

Ask:

```text
Transient?
Managed?
Detached?
Removed?
```

## Step 2 — Identify the transaction

Ask:

```text
Is a transaction active?
Where does it begin?
Where does it end?
```

## Step 3 — Inspect SQL

Ask:

```text
What SQL actually executed?
How many queries executed?
```

## Step 4 — Inspect ownership

Ask:

```text
Which side has @JoinColumn?
Which side has mappedBy?
Did I update both sides in memory?
```

## Step 5 — Inspect fetching

Ask:

```text
Was a lazy association accessed outside the persistence context?
Is N+1 happening?
Is one query multiplying rows dramatically?
```

## Step 6 — Inspect database constraints

Ask:

```text
Foreign key failure?
Unique constraint?
NOT NULL?
Check constraint?
```

## Step 7 — Inspect concurrency

Ask:

```text
Did another transaction update this row?
Should @Version be present?
Is a database lock required?
```

This method solves a large percentage of real Hibernate problems faster than randomly changing annotations.

---

# Bonus: Choosing Between Hibernate Techniques

| Problem | Prefer |
|---|---|
| Load one entity by PK | `find()` |
| Create new aggregate | `persist()` + appropriate cascade |
| Modify managed entity | setters/domain method + dirty checking |
| Detached state coming from another layer | Usually reload managed entity and apply requested changes; use `merge()` deliberately |
| List page needing 5 fields | DTO projection |
| Detail page needing several associations | fetch join / entity graph |
| N+1 on repeated lazy loads | fetch join, entity graph, batch fetch |
| Dynamic filters | Criteria/specification/query builder |
| Very specialized database query | native SQL |
| 100k inserts | batching + flush/clear or specialized bulk approach |
| Prevent lost update | optimistic lock (`@Version`) |
| High-contention critical row | carefully considered pessimistic lock |
| Database schema deployment | Flyway/Liquibase |
| Full history of entity revisions | audit solution such as Envers or domain audit tables |
| API output | DTO, not persistence entity |

---

# Bonus: Common Scenario Decision Examples

## Scenario A — Product List API

Requirement:

```text
Return 20 products:
id, name, price, categoryName
```

Bad approach:

```java
List<Product> products = repository.findAll();
```

Then serialize entire entities.

Better:

```java
select new ProductListItem(
    p.id,
    p.name,
    p.price,
    p.category.name
)
from Product p
order by p.name
```

with pagination.

---

## Scenario B — Order Detail API

Requirement:

```text
Order + customer + order lines + product names
```

Options:

- fetch-join carefully
- DTO projection
- multiple deliberate queries

Do not rely on accidental lazy loading during JSON serialization.

---

## Scenario C — Employee Mass Deactivation

Requirement:

```text
Deactivate 80,000 employees whose leaving date is older than cutoff.
```

Bad:

```java
for each employee:
    load entity
    set active=false
```

Better when no per-entity domain side effect is required:

```java
update Employee e
set e.active = false
where e.leavingDate < :cutoff
```

Then clear/avoid stale persistence context.

---

## Scenario D — Prevent Duplicate Invoice

Application-only check:

```java
if (!repository.exists(vendorId, invoiceNo)) {
    repository.save(invoice);
}
```

Two concurrent requests can both pass the check.

Correct architecture includes a database unique constraint:

```text
UNIQUE(vendor_id, invoice_number)
```

and application handling for the constraint failure.

---

## Scenario E — Stock Reservation

Two users buy the last item simultaneously.

Possible designs:

- optimistic lock on stock row with retry
- pessimistic lock for critical section
- atomic SQL update such as `quantity = quantity - 1 where quantity > 0`
- dedicated inventory service/event architecture at larger scale

Hibernate is one part of the solution; concurrency semantics come first.

---

# Final Summary

To master Hibernate, do not stop at CRUD.

You should be able to explain and demonstrate:

```text
JDBC vs JPA vs Hibernate
Entity lifecycle
Persistence context
Dirty checking
Flush behavior
ID generation
Basic/embedded/custom mappings
All relationship types
Ownership and mappedBy
Cascade and orphan removal
Lazy/eager fetching
N+1 detection and correction
HQL/JPQL
Criteria API
Native queries
DTO projections
Pagination
Bulk operations
Transactions
Isolation
Optimistic/pessimistic locking
First/second-level caching
Batch processing
Auditing
Multi-tenancy
Schema migrations
Spring Boot integration
Testing
Database constraints/indexes
Performance tuning
Production debugging
```

If you can model a realistic business workflow, predict the SQL Hibernate will generate, explain the transaction boundary, avoid N+1, choose a good fetch strategy, enforce database constraints, and handle concurrent updates correctly, you have moved from "knowing Hibernate annotations" to actually understanding professional ORM development.

---

**End of Java Hibernate Master Handbook**
