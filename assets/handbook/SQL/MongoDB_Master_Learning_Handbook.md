# MongoDB Master Learning Handbook
## Beginner → Intermediate → Advanced → Production

> A single-file MongoDB learning and reference handbook for beginners, backend/full-stack developers, interview preparation, and production troubleshooting.

**Version note:** Prepared on **2026-08-12**. MongoDB documentation listed the **8.3 series as the current stable release** at that time. Core concepts here are broadly version-independent; verify version-specific behavior before production use.

---

# Table of Contents

1. How to Use This Handbook
2. MongoDB Learning Roadmap
3. Database Fundamentals
4. What Is MongoDB?
5. MongoDB vs SQL Databases
6. MongoDB Architecture and Terminology
7. JSON, BSON, Documents, and Data Types
8. Installation and Connections
9. mongosh Essentials
10. Databases and Collections
11. CRUD Overview
12. Insert Operations
13. Read and Query Operations
14. Query Operators
15. Arrays and Nested Documents
16. Projection, Sorting, Pagination, and Counting
17. Update Operations
18. Delete Operations
19. Upsert and Bulk Operations
20. Data Modeling Fundamentals
21. Embedding vs Referencing
22. Relationship Modeling
23. Schema Design Patterns
24. Schema Validation
25. Aggregation Framework
26. Aggregation Stages and Expressions
27. Advanced Aggregation Scenarios
28. Index Fundamentals
29. Index Types
30. Compound Indexes and ESR
31. explain() and Query Plans
32. Index Design Strategy
33. Transactions and Atomicity
34. Read Concern, Write Concern, and Read Preference
35. Replica Sets and High Availability
36. Sharding and Horizontal Scaling
37. Security
38. Backup and Restore
39. Monitoring and Performance
40. Change Streams
41. Time Series Collections
42. Geospatial Data
43. Text Search, Atlas Search, and Vector Search
44. GridFS and Capped Collections
45. Connection Pooling
46. Node.js Driver
47. Mongoose
48. Python / PyMongo
49. PHP
50. C#/.NET
51. REST API Architecture
52. SQL → MongoDB Cheat Sheet
53. E-Commerce Scenario
54. Invoice Processing Scenario
55. Chat Application Scenario
56. IoT Scenario
57. Common Anti-Patterns
58. Production Best Practices
59. Troubleshooting
60. Testing
61. Interview Questions
62. Practice Exercises
63. Practice Projects
64. 30-Day Learning Plan
65. Command Cheat Sheet
66. Glossary
67. Final Mental Models
68. Bonus Design Patterns and Checklists
69. Official Learning References

---

# 1. How to Use This Handbook

Do not try to memorize every MongoDB command. Focus on mental models and repeatable decision-making.

The most important MongoDB skills are:

1. Understanding the **document data model**.
2. Designing documents around **application access patterns**.
3. Writing correct filters and updates.
4. Understanding indexes and query plans.
5. Knowing when to embed and when to reference.
6. Building aggregation pipelines.
7. Understanding atomicity, replication, consistency, and transactions.
8. Operating MongoDB securely in production.

Use this learning cycle:

```text
Concept
   ↓
Small Example
   ↓
Real Scenario
   ↓
Try It Yourself
   ↓
Break It
   ↓
Debug It
   ↓
Measure Performance
```

For every section:

- type the examples yourself;
- change the sample data;
- intentionally make incorrect queries;
- inspect results;
- use `explain()` for important queries;
- explain the design decision in your own words.

---

# 2. MongoDB Learning Roadmap

## Level 1 — Beginner

Learn:

```text
documents
collections
BSON
ObjectId
CRUD
filters
operators
arrays
nested objects
sort
projection
```

**Goal:** Build a basic CRUD application.

## Level 2 — Intermediate

Learn:

```text
schema design
embedding
references
aggregation
indexes
unique constraints
TTL
schema validation
transactions
```

**Goal:** Design a real application database.

## Level 3 — Advanced

Learn:

```text
query execution
compound indexes
multikey behavior
read/write concerns
replica sets
sharding
change streams
profiling
```

**Goal:** Understand production behavior and scale.

## Level 4 — Production

Learn:

```text
security
monitoring
backup
restore
capacity planning
connection pooling
upgrades
migrations
observability
```

**Goal:** Operate MongoDB safely.

---

# 3. Database Fundamentals

A **database** stores information in a form applications can retrieve and modify efficiently.

Examples:

- users;
- products;
- employees;
- invoices;
- orders;
- messages;
- sensor readings.

A relational database commonly stores rows in tables:

```text
users
+----+-------+------------------+
| id | name  | email            |
+----+-------+------------------+
| 1  | Alex  | alex@example.com |
+----+-------+------------------+
```

MongoDB stores documents:

```javascript
{
  _id: 1,
  name: "Alex",
  email: "alex@example.com"
}
```

The deeper difference is not just **row vs JSON**. MongoDB encourages modeling related information in structures that resemble how application code reads and modifies the data.

---

# 4. What Is MongoDB?

MongoDB is a **document-oriented database**.

Instead of rows, MongoDB stores **documents**. Instead of tables, it uses **collections**.

```javascript
{
  _id: ObjectId("..."),
  name: "Aisha",
  email: "aisha@example.com",
  age: 29,
  skills: ["MongoDB", "Node.js", "Angular"],
  address: {
    city: "Mumbai",
    country: "India"
  }
}
```

MongoDB is useful when:

- data naturally looks like application objects;
- records contain nested structures;
- schemas evolve over time;
- entities may have optional/type-specific fields;
- horizontal scaling may eventually be required;
- you need a general-purpose operational database with rich querying.

Do **not** choose MongoDB only because someone says:

> “NoSQL is faster.”

Database choice depends on workload, relationships, consistency requirements, scaling, operations, and team expertise.

---

# 5. MongoDB vs SQL Databases

| Relational Database | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` |
| JOIN | `$lookup`, embedding, or application relationship |
| INSERT | `insertOne()` / `insertMany()` |
| SELECT | `find()` |
| UPDATE | `updateOne()` / `updateMany()` |
| DELETE | `deleteOne()` / `deleteMany()` |
| GROUP BY | `$group` |
| INDEX | Index |
| Transaction | Transaction |

SQL:

```sql
SELECT name, email
FROM users
WHERE age >= 18
ORDER BY name;
```

MongoDB:

```javascript
db.users
  .find(
    { age: { $gte: 18 } },
    { name: 1, email: 1, _id: 0 }
  )
  .sort({ name: 1 })
```

## SQL may be a better fit when

- normalized relational constraints are central;
- complex joins dominate the workload;
- the domain is strongly relational;
- existing tooling/team knowledge is SQL-centric.

## MongoDB may be a great fit when

- aggregate objects are commonly read together;
- nested structures are natural;
- schema evolution is common;
- denormalization improves access patterns;
- high write/data-volume scalability matters.

---

# 6. MongoDB Architecture and Terminology

## Database

Logical container for collections.

```text
shop
 ├── users
 ├── products
 └── orders
```

## Collection

A group of BSON documents.

## Document

A BSON record:

```javascript
{
  name: "Keyboard",
  price: 2500,
  stock: 20
}
```

## Field

A key/value pair:

```javascript
price: 2500
```

## `_id`

Every document has a unique `_id`. If omitted, MongoDB usually generates an `ObjectId`.

## `mongod`

The MongoDB database server process.

## `mongosh`

The MongoDB Shell used from a terminal.

## MongoDB Compass

A graphical tool useful for:

- browsing documents;
- filters;
- aggregations;
- indexes;
- schema exploration.

## MongoDB Atlas

MongoDB's managed cloud database platform.

---

# 7. JSON, BSON, Documents, and Data Types

MongoDB documents look like JSON but MongoDB stores BSON (**Binary JSON**).

Common BSON types:

| Type | Example |
|---|---|
| String | `"Alex"` |
| Boolean | `true` |
| Integer | `42` |
| Double | `99.5` |
| Decimal128 | precise decimal values |
| Date | `ISODate(...)` |
| ObjectId | `ObjectId(...)` |
| Array | `["A", "B"]` |
| Embedded document | `{ city: "Mumbai" }` |
| Null | `null` |
| Binary | files/binary chunks |
| Timestamp | special timestamp type |

## ObjectId

```javascript
ObjectId("66b06b238891d85cb6ea45a1")
```

Do not confuse ObjectId with a plain string.

Incorrect when `_id` is actually ObjectId:

```javascript
{ _id: "66b06b238891d85cb6ea45a1" }
```

Correct:

```javascript
{ _id: ObjectId("66b06b238891d85cb6ea45a1") }
```

## Dates

Prefer real BSON dates.

Bad:

```javascript
{ createdAt: "2026-08-12" }
```

Better:

```javascript
{ createdAt: ISODate("2026-08-12T10:00:00Z") }
```

Real dates support comparison, sorting, date arithmetic, aggregation, and TTL behavior.

## Money

Be careful with floating-point precision. For exact decimal values, consider Decimal128.

```javascript
{
  invoiceAmount: NumberDecimal("12500.75")
}
```

## Document size and growth

MongoDB documents have a maximum BSON size. The design lesson is more important than memorizing the number:

> Do not create documents or arrays that grow forever.

An endlessly growing array is an **unbounded array anti-pattern**.

---

# 8. Installation and Connections

## Option A — MongoDB Atlas

Good for quick cloud learning.

```text
Create account/project
      ↓
Create deployment
      ↓
Create database user
      ↓
Configure network access
      ↓
Copy connection string
      ↓
Connect via Compass/mongosh/app
```

## Option B — Local MongoDB

Good for offline development and server-learning.

## Option C — Docker

Basic learning container:

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  mongo
```

With persistence/authentication concept:

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=StrongPassword \
  mongo
```

## Connection strings

Local:

```text
mongodb://localhost:27017
```

Database:

```text
mongodb://localhost:27017/shop
```

Atlas commonly uses:

```text
mongodb+srv://...
```

Never hardcode production passwords in source code. Use environment variables, secret managers, or managed identity where available.

---

# 9. mongosh Essentials

```bash
mongosh
```

Show databases:

```javascript
show dbs
```

Switch database:

```javascript
use shop
```

Current database:

```javascript
db
```

Collections:

```javascript
show collections
```

Help:

```javascript
help
```

Collection help:

```javascript
db.users.help()
```

Exit:

```javascript
exit
```

---

# 10. Databases and Collections

Switching database:

```javascript
use learning
```

Create a collection explicitly:

```javascript
db.createCollection("users")
```

Or create through first write:

```javascript
db.users.insertOne({ name: "Alex" })
```

Good collection names:

```text
users
orders
products
invoice_events
```

Avoid unclear names such as:

```text
Tbl_User_Data_Final_New2
```

Choose a convention and keep it consistent.

---

# 11. CRUD Overview

```text
C = Create
R = Read
U = Update
D = Delete
```

MongoDB:

```javascript
db.users.insertOne(...)
db.users.find(...)
db.users.updateOne(...)
db.users.deleteOne(...)
```

---

# 12. Insert Operations

## `insertOne()`

```javascript
db.users.insertOne({
  name: "Aarav",
  email: "aarav@example.com",
  age: 25,
  active: true
})
```

## Custom `_id`

```javascript
db.users.insertOne({
  _id: "USR-1001",
  name: "Aarav"
})
```

`_id` must be unique.

## `insertMany()`

```javascript
db.products.insertMany([
  { name: "Keyboard", price: 2500, stock: 20 },
  { name: "Mouse", price: 1200, stock: 35 },
  { name: "Monitor", price: 15000, stock: 8 }
])
```

For large imports, batch operations can reduce network round trips, but do not blindly make enormous batches. Consider payload size, driver behavior, failure handling, and transaction needs.

---

# 13. Read and Query Operations

All documents:

```javascript
db.users.find()
```

One document:

```javascript
db.users.findOne({
  email: "aarav@example.com"
})
```

Equality:

```javascript
db.products.find({
  category: "Electronics"
})
```

Implicit AND:

```javascript
db.products.find({
  category: "Electronics",
  active: true
})
```

Nested fields using **dot notation**:

```javascript
db.users.find({
  "address.city": "Mumbai"
})
```

---

# 14. Query Operators

## Comparison

```javascript
{ price: { $eq: 1000 } }
{ status: { $ne: "inactive" } }
{ price: { $gt: 1000 } }
{ price: { $gte: 1000 } }
{ stock: { $lt: 10 } }
{ stock: { $lte: 10 } }
```

### `$in`

```javascript
db.orders.find({
  status: {
    $in: ["NEW", "APPROVED", "PROCESSING"]
  }
})
```

### `$nin`

```javascript
db.orders.find({
  status: {
    $nin: ["CANCELLED", "REJECTED"]
  }
})
```

## Logical operators

Explicit `$and`:

```javascript
db.products.find({
  $and: [
    { price: { $gte: 1000 } },
    { stock: { $gt: 0 } }
  ]
})
```

Usually cleaner:

```javascript
db.products.find({
  price: { $gte: 1000 },
  stock: { $gt: 0 }
})
```

`$or`:

```javascript
db.users.find({
  $or: [
    { role: "ADMIN" },
    { role: "MANAGER" }
  ]
})
```

`$nor`:

```javascript
db.users.find({
  $nor: [
    { blocked: true },
    { deleted: true }
  ]
})
```

## Element operators

`$exists`:

```javascript
db.users.find({ phone: { $exists: true } })
```

Missing field:

```javascript
db.users.find({ phone: { $exists: false } })
```

`$type`:

```javascript
db.users.find({ age: { $type: "int" } })
```

Useful for finding inconsistent data.

## `$regex`

```javascript
db.users.find({
  name: {
    $regex: "^sha",
    $options: "i"
  }
})
```

Anchored prefix regexes can be friendlier to indexes than arbitrary substring searches, but always inspect actual query plans.

## `$expr`

Allows aggregation expressions inside query predicates:

```javascript
db.orders.find({
  $expr: {
    $gt: ["$total", "$creditLimit"]
  }
})
```

---

# 15. Arrays and Nested Documents

Document:

```javascript
{
  name: "Alex",
  skills: ["JavaScript", "MongoDB", "Node.js"]
}
```

Array contains value:

```javascript
db.users.find({ skills: "MongoDB" })
```

`$all`:

```javascript
db.users.find({
  skills: {
    $all: ["MongoDB", "Node.js"]
  }
})
```

`$size`:

```javascript
db.users.find({ skills: { $size: 3 } })
```

Array of objects:

```javascript
{
  orderNo: "ORD-1001",
  items: [
    { sku: "KB-01", qty: 2, price: 2500 },
    { sku: "MS-01", qty: 1, price: 1200 }
  ]
}
```

`$elemMatch` ensures the same array element satisfies grouped predicates:

```javascript
db.orders.find({
  items: {
    $elemMatch: {
      qty: { $gte: 2 },
      price: { $gte: 2000 }
    }
  }
})
```

---

# 16. Projection, Sorting, Pagination, and Counting

Projection:

```javascript
db.users.find(
  { active: true },
  { name: 1, email: 1, _id: 0 }
)
```

Sort ascending:

```javascript
db.products.find().sort({ price: 1 })
```

Descending:

```javascript
db.products.find().sort({ price: -1 })
```

Limit:

```javascript
db.products.find().limit(10)
```

Skip:

```javascript
db.products.find().skip(20).limit(10)
```

Count:

```javascript
db.users.countDocuments({ active: true })
```

## Deep Pagination Warning

Page-number pagination with large `skip()` values can become inefficient.

Cursor/range pagination:

```javascript
db.orders
  .find({
    _id: { $gt: lastSeenId }
  })
  .sort({ _id: 1 })
  .limit(20)
```

For reliable cursor pagination, use a stable deterministic sort key; often a unique tie-breaker such as `_id` is included.

---

# 17. Update Operations

`updateOne()`:

```javascript
db.users.updateOne(
  { email: "aarav@example.com" },
  { $set: { active: false } }
)
```

`updateMany()`:

```javascript
db.users.updateMany(
  { department: "IT" },
  { $set: { location: "Mumbai" } }
)
```

Common update operators:

```javascript
{ $set: { status: "APPROVED" } }
{ $unset: { temporaryField: "" } }
{ $inc: { stock: -1 } }
{ $mul: { price: 1.05 } }
{ $rename: { mobile: "phone" } }
{ $currentDate: { updatedAt: true } }
```

Array push:

```javascript
db.users.updateOne(
  { _id: 1 },
  { $push: { skills: "Docker" } }
)
```

Add only when missing:

```javascript
db.users.updateOne(
  { _id: 1 },
  { $addToSet: { skills: "MongoDB" } }
)
```

Remove array value:

```javascript
db.users.updateOne(
  { _id: 1 },
  { $pull: { skills: "jQuery" } }
)
```

Positional update:

```javascript
db.orders.updateOne(
  {
    orderNo: "ORD-1",
    "items.sku": "B"
  },
  {
    $set: {
      "items.$.qty": 5
    }
  }
)
```

Array filters:

```javascript
db.orders.updateOne(
  { orderNo: "ORD-1" },
  {
    $set: {
      "items.$[item].discounted": true
    }
  },
  {
    arrayFilters: [
      { "item.price": { $gte: 1000 } }
    ]
  }
)
```

---

# 18. Delete Operations

Delete one:

```javascript
db.users.deleteOne({
  email: "old@example.com"
})
```

Delete many:

```javascript
db.logs.deleteMany({
  createdAt: {
    $lt: ISODate("2025-01-01")
  }
})
```

Dangerous:

```javascript
db.users.deleteMany({})
```

A useful destructive-operation habit:

```javascript
db.users.find(filter)
```

Verify first, then perform delete/update.

---

# 19. Upsert and Bulk Operations

Upsert = **update if found, insert if missing**.

```javascript
db.users.updateOne(
  { email: "new@example.com" },
  {
    $set: {
      name: "New User",
      active: true
    }
  },
  { upsert: true }
)
```

`$setOnInsert`:

```javascript
db.users.updateOne(
  { email: "new@example.com" },
  {
    $set: { lastLoginAt: new Date() },
    $setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
)
```

`bulkWrite()`:

```javascript
db.products.bulkWrite([
  {
    insertOne: {
      document: { sku: "A", stock: 10 }
    }
  },
  {
    updateOne: {
      filter: { sku: "B" },
      update: { $inc: { stock: 5 } }
    }
  },
  {
    deleteOne: {
      filter: { sku: "OLD" }
    }
  }
])
```

Good for imports, synchronization, ETL, and batch corrections.

---

# 20. Data Modeling Fundamentals

MongoDB schema design is one of the most important topics in this handbook.

Do not design MongoDB exactly like a relational database by default.

The central question is:

> **How will the application read and write this data?**

This is **access-pattern-driven modeling**.

Before designing a collection, ask:

1. What are the main queries?
2. What data is read together?
3. What changes frequently?
4. What rarely changes?
5. How large can each document become?
6. Can any array grow without limit?
7. Which values must be unique?
8. Which changes must be atomic?
9. Which indexes support the workload?
10. Could sharding eventually be required?

---

# 21. Embedding vs Referencing

## Embedding

```javascript
{
  _id: 1001,
  name: "Alex",
  address: {
    city: "Mumbai",
    pin: "400001"
  }
}
```

Advantages:

- one read;
- natural object structure;
- single-document atomicity;
- fewer joins/lookups.

Good when:

- child belongs strongly to parent;
- child is usually read with parent;
- child count is bounded;
- controlled duplication is acceptable.

## Referencing

Customers:

```javascript
{
  _id: ObjectId("..."),
  name: "Alex"
}
```

Orders:

```javascript
{
  customerId: ObjectId("..."),
  total: 5000
}
```

Good when:

- child has independent lifecycle;
- relationship count can be huge;
- entity is shared by many parents;
- duplication would be dangerous or expensive.

**Critical principle:** There is no universal winner. Choose based on access patterns, cardinality, update behavior, and growth.

---

# 22. Relationship Modeling

## One-to-One

User settings:

```javascript
{
  _id: 1,
  name: "Alex",
  settings: {
    theme: "dark",
    language: "en"
  }
}
```

Embedding is natural if settings are always used with the user.

## One-to-Few

```javascript
{
  _id: 1,
  name: "Alex",
  addresses: [
    { type: "home", city: "Mumbai" },
    { type: "office", city: "Thane" }
  ]
}
```

Good when the count remains small.

## One-to-Many

Customer → orders can grow indefinitely. Usually store orders separately:

```javascript
{
  customerId: ObjectId("..."),
  orderNo: "ORD-1001"
}
```

## Many-to-Many

Student ↔ courses may use an enrollment collection:

```javascript
{
  studentId: ObjectId("..."),
  courseId: ObjectId("..."),
  enrolledAt: ISODate("...")
}
```

Especially useful when the relationship itself has metadata.

---

# 23. Schema Design Patterns

Patterns are reusable ideas, not mandatory rules.

## Attribute Pattern

Useful when entities have varying searchable attributes.

```javascript
{
  attributes: [
    { key: "ram", value: "16GB" },
    { key: "cpu", value: "Intel" }
  ]
}
```

## Bucket Pattern

Group many small time/event records into bounded buckets. MongoDB time series collections may be preferable for true time-series workloads.

## Computed Pattern

Store expensive-to-calculate summaries:

```javascript
{
  productId: 10,
  reviewCount: 1284,
  averageRating: 4.72
}
```

Good when reads are frequent and recalculation/update strategy is controlled.

## Extended Reference Pattern

Copy frequently needed reference fields:

```javascript
{
  customer: {
    id: ObjectId("..."),
    name: "Alex",
    email: "alex@example.com"
  }
}
```

Can reduce lookups and preserve historical snapshots.

## Subset Pattern

Keep frequently needed data in the main document; move large/rarely used portions elsewhere.

## Outlier Pattern

Handle unusually large records specially instead of making all records complex.

## Polymorphic Pattern

Different types share a collection:

```javascript
{ type: "email", recipient: "...", subject: "..." }
{ type: "sms", phone: "...", message: "..." }
```

## Versioning Pattern

```javascript
{
  schemaVersion: 2,
  ...
}
```

Useful for gradual schema evolution.

---

# 24. Schema Validation

Flexible schema does **not** mean “no rules.”

```javascript
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        age: {
          bsonType: "int",
          minimum: 18
        }
      }
    }
  }
})
```

Why validation matters:

```javascript
{ age: 25 }
```

and:

```javascript
{ age: "twenty five" }
```

should usually not coexist in the same logical field.

Use both:

```text
Application validation
+
Database validation
```

Application validation gives friendly business errors; database validation provides a final integrity boundary against scripts, imports, or other services.


---

# 25. Aggregation Framework

Aggregation is MongoDB's pipeline-based data-processing framework.

Think:

```text
Documents
   ↓
Stage 1
   ↓
Stage 2
   ↓
Stage 3
   ↓
Result
```

Example:

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "PAID"
    }
  },
  {
    $group: {
      _id: "$customerId",
      totalSpent: {
        $sum: "$total"
      }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  }
])
```

Mental translation:

```text
Filter paid orders
       ↓
Group by customer
       ↓
Sum order values
       ↓
Sort highest spender first
```

## Aggregation vs `find()`

Use `find()` when you mainly need:

- filtering;
- projection;
- sorting;
- pagination.

Use aggregation when you need:

- grouping;
- calculations;
- transformations;
- joins;
- array expansion;
- reports;
- window calculations;
- multi-faceted result sets.

---

# 26. Aggregation Stages and Expressions

## `$match`

```javascript
{
  $match: {
    status: "PAID"
  }
}
```

Equivalent mental model:

```sql
WHERE status = 'PAID'
```

Place selective `$match` stages early when possible so later stages process less data.

## `$project`

Choose or calculate fields:

```javascript
{
  $project: {
    customer: 1,
    total: 1,
    tax: {
      $multiply: ["$total", 0.18]
    }
  }
}
```

## `$set` / `$addFields`

```javascript
{
  $set: {
    finalAmount: {
      $add: ["$subtotal", "$tax"]
    }
  }
}
```

## `$unset`

```javascript
{
  $unset: ["internalNotes", "debugData"]
}
```

## `$group`

```javascript
{
  $group: {
    _id: "$department",
    employeeCount: { $sum: 1 },
    averageSalary: { $avg: "$salary" },
    maxSalary: { $max: "$salary" },
    minSalary: { $min: "$salary" }
  }
}
```

Useful accumulators include:

```text
$sum
$avg
$min
$max
$first
$last
$push
$addToSet
```

## `$sort`

```javascript
{
  $sort: {
    total: -1
  }
}
```

## `$limit`

```javascript
{ $limit: 10 }
```

## `$skip`

```javascript
{ $skip: 20 }
```

## `$unwind`

Input:

```javascript
{
  orderNo: "A1",
  items: [
    { sku: "X", qty: 2 },
    { sku: "Y", qty: 1 }
  ]
}
```

Stage:

```javascript
{ $unwind: "$items" }
```

Conceptual output:

```javascript
{ orderNo: "A1", items: { sku: "X", qty: 2 } }
{ orderNo: "A1", items: { sku: "Y", qty: 1 } }
```

Useful when analyzing array elements individually.

## `$lookup`

Orders:

```javascript
{
  customerId: ObjectId("...")
}
```

Customers:

```javascript
{
  _id: ObjectId("..."),
  name: "Alex"
}
```

Join:

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customer"
    }
  }
])
```

The result field is an array. If the relationship is one-to-one, you may then use:

```javascript
{ $unwind: "$customer" }
```

### Pipeline `$lookup`

Useful for complex join predicates and projections:

```javascript
{
  $lookup: {
    from: "payments",
    let: { orderId: "$_id" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$orderId", "$$orderId"]
          }
        }
      },
      {
        $project: {
          reference: 1,
          status: 1,
          _id: 0
        }
      }
    ],
    as: "payments"
  }
}
```

## `$count`

```javascript
{ $count: "totalOrders" }
```

## `$facet`

Run multiple sub-pipelines on the same input:

```javascript
db.products.aggregate([
  {
    $facet: {
      rows: [
        { $sort: { price: -1 } },
        { $limit: 10 }
      ],
      statistics: [
        {
          $group: {
            _id: null,
            avgPrice: { $avg: "$price" },
            count: { $sum: 1 }
          }
        }
      ]
    }
  }
])
```

Great for API endpoints requiring both data and metadata.

## `$bucket`

```javascript
{
  $bucket: {
    groupBy: "$price",
    boundaries: [0, 1000, 5000, 10000, 50000],
    default: "Other",
    output: {
      count: { $sum: 1 }
    }
  }
}
```

## `$sortByCount`

```javascript
{ $sortByCount: "$category" }
```

Conceptually equals group + count + sort.

## `$replaceRoot` / `$replaceWith`

Useful for replacing the current document with a nested document or newly constructed object.

## `$merge`

Writes aggregation output into a target collection. Useful for ETL and materialized summaries.

## `$out`

Writes pipeline output to a collection. Understand replacement and deployment semantics before using it.

## `$setWindowFields`

Useful for:

- rankings;
- running totals;
- moving averages;
- previous/next comparisons.

Running total concept:

```javascript
{
  $setWindowFields: {
    partitionBy: "$customerId",
    sortBy: { createdAt: 1 },
    output: {
      runningSpend: {
        $sum: "$total",
        window: {
          documents: ["unbounded", "current"]
        }
      }
    }
  }
}
```

## Common aggregation expressions

Arithmetic:

```text
$add
$subtract
$multiply
$divide
$mod
```

Comparison:

```text
$eq
$ne
$gt
$gte
$lt
$lte
$cmp
```

Conditional:

```text
$cond
$switch
$ifNull
```

String:

```text
$concat
$toLower
$toUpper
$trim
$split
$strLenCP
```

Date:

```text
$dateToString
$dateAdd
$dateSubtract
$dateDiff
$year
$month
$dayOfMonth
$hour
```

Array:

```text
$filter
$map
$reduce
$arrayElemAt
$size
$concatArrays
$in
```

### `$cond`

```javascript
{
  $set: {
    stockStatus: {
      $cond: [
        { $gt: ["$stock", 0] },
        "IN_STOCK",
        "OUT_OF_STOCK"
      ]
    }
  }
}
```

### `$switch`

```javascript
{
  $set: {
    grade: {
      $switch: {
        branches: [
          {
            case: { $gte: ["$score", 90] },
            then: "A"
          },
          {
            case: { $gte: ["$score", 75] },
            then: "B"
          }
        ],
        default: "C"
      }
    }
  }
}
```

### `$filter`

```javascript
{
  $set: {
    expensiveItems: {
      $filter: {
        input: "$items",
        as: "item",
        cond: {
          $gte: ["$$item.price", 5000]
        }
      }
    }
  }
}
```

### `$map`

```javascript
{
  $set: {
    itemNames: {
      $map: {
        input: "$items",
        as: "item",
        in: "$$item.name"
      }
    }
  }
}
```

### `$reduce`

Example: calculate total quantity from an array:

```javascript
{
  $set: {
    totalQty: {
      $reduce: {
        input: "$items",
        initialValue: 0,
        in: {
          $add: ["$$value", "$$this.qty"]
        }
      }
    }
  }
}
```

---

# 27. Advanced Aggregation Scenarios

## Scenario 1 — Monthly Sales

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "PAID"
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" }
      },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1
    }
  }
])
```

## Scenario 2 — Best-Selling Products

```javascript
db.orders.aggregate([
  { $match: { status: "PAID" } },
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.sku",
      totalQty: { $sum: "$items.qty" },
      revenue: {
        $sum: {
          $multiply: ["$items.qty", "$items.price"]
        }
      }
    }
  },
  { $sort: { totalQty: -1 } },
  { $limit: 10 }
])
```

## Scenario 3 — Customer Lifetime Value

```javascript
db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: "$customerId",
      lifetimeValue: { $sum: "$total" },
      orderCount: { $sum: 1 },
      lastOrderAt: { $max: "$createdAt" }
    }
  }
])
```

## Scenario 4 — Paginated API plus total count

```javascript
db.products.aggregate([
  { $match: { active: true } },
  {
    $facet: {
      rows: [
        { $sort: { createdAt: -1, _id: -1 } },
        { $skip: 0 },
        { $limit: 20 }
      ],
      meta: [
        { $count: "total" }
      ]
    }
  }
])
```

## Scenario 5 — Average Processing Time by Status

```javascript
db.invoices.aggregate([
  {
    $match: {
      completedAt: { $exists: true }
    }
  },
  {
    $set: {
      processingHours: {
        $dateDiff: {
          startDate: "$createdAt",
          endDate: "$completedAt",
          unit: "hour"
        }
      }
    }
  },
  {
    $group: {
      _id: "$status",
      averageHours: { $avg: "$processingHours" },
      count: { $sum: 1 }
    }
  }
])
```

## How to think about aggregations

Translate the business requirement into English stages first.

Requirement:

> “Show top 10 customers by paid revenue in 2026.”

English pipeline:

```text
1. Filter 2026 records
2. Filter PAID
3. Group by customer
4. Sum revenue
5. Sort descending
6. Limit 10
7. Join customer name if required
8. Project final response
```

Then convert each sentence into a stage.

---

# 28. Index Fundamentals

An index is an additional data structure MongoDB can use to avoid scanning every document.

Without a useful index:

```text
Query
 ↓
Scan many/all documents
 ↓
Find matches
```

With a useful index:

```text
Query
 ↓
Navigate index
 ↓
Read matching documents
```

## Textbook analogy

Without book index:

> Scan 1,000 pages for “transactions.”

With index:

> Jump directly to relevant pages.

## Index cost

Indexes consume:

- storage;
- memory/cache;
- write time;
- maintenance work.

Every insert/update affecting indexed keys may require index changes.

Therefore:

> More indexes do not automatically mean better performance.

---

# 29. Index Types

## Default `_id` index

Every normal collection has a unique `_id` index.

## Single-field index

```javascript
db.users.createIndex({ email: 1 })
```

## Unique index

```javascript
db.users.createIndex(
  { email: 1 },
  { unique: true }
)
```

Useful for emails, usernames, external identifiers, business keys.

## Compound index

```javascript
db.orders.createIndex({
  customerId: 1,
  createdAt: -1
})
```

Supports a common query pattern:

```javascript
db.orders
  .find({ customerId })
  .sort({ createdAt: -1 })
```

## Multikey index

When an indexed field contains an array, MongoDB automatically uses a multikey index for it.

```javascript
db.users.createIndex({ skills: 1 })
```

Useful for:

```javascript
db.users.find({ skills: "MongoDB" })
```

Understand multikey restrictions before designing compound indexes involving multiple array paths.

## Sparse index

```javascript
db.users.createIndex(
  { optionalCode: 1 },
  { sparse: true }
)
```

Indexes only documents containing the indexed field. Partial indexes are often more expressive.

## Partial index

```javascript
db.orders.createIndex(
  { createdAt: -1 },
  {
    partialFilterExpression: {
      status: "OPEN"
    }
  }
)
```

Useful when a frequently queried subset is much smaller than the whole collection.

## TTL index

```javascript
db.sessions.createIndex(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
)
```

Document:

```javascript
{
  token: "...",
  expiresAt: ISODate("2026-08-12T20:00:00Z")
}
```

Useful for sessions, temporary tokens, short-lived records, caches, and retention policies.

Treat TTL removal as asynchronous; do not design logic that requires deletion at an exact millisecond.

## Text index

```javascript
db.articles.createIndex({
  title: "text",
  body: "text"
})
```

Query:

```javascript
db.articles.find({
  $text: {
    $search: "mongodb indexing"
  }
})
```

For advanced search, learn Atlas Search separately.

## Hashed index

```javascript
db.events.createIndex({
  userId: "hashed"
})
```

Especially important for hashed shard-key strategies.

## Wildcard index

```javascript
db.products.createIndex({
  "attributes.$**": 1
})
```

Useful for unpredictable field sets, but it does not replace workload-driven index design.

## Geospatial index

```javascript
db.places.createIndex({
  location: "2dsphere"
})
```

## Hidden index

A hidden index remains stored but is excluded from normal planner consideration. It can help test whether an index is still needed before dropping it. Verify exact behavior for your MongoDB version.

---

# 30. Compound Indexes and ESR

A common guideline for field ordering is:

```text
E = Equality
S = Sort
R = Range
```

Query:

```javascript
db.orders.find({
  customerId: "C100",
  total: { $gte: 5000 }
}).sort({
  createdAt: -1
})
```

Potential index:

```javascript
{
  customerId: 1,
  createdAt: -1,
  total: 1
}
```

Why:

```text
customerId → equality
createdAt  → sort
total      → range
```

ESR is a guideline, not a law. Query selectivity and workload can justify different ordering. Validate with realistic data and `explain()`.

## Index Prefix Rule

Given:

```javascript
{
  customerId: 1,
  status: 1,
  createdAt: -1
}
```

Natural index prefixes are:

```text
customerId
customerId + status
customerId + status + createdAt
```

Field order matters.

## Covered Query

Index:

```javascript
db.users.createIndex({
  email: 1,
  name: 1
})
```

Query:

```javascript
db.users.find(
  { email: "a@example.com" },
  { email: 1, name: 1, _id: 0 }
)
```

If all required filter/projection information can be satisfied from index keys under the relevant rules, MongoDB may avoid fetching the full documents.

## Sort direction

For compound indexes, sort direction matters when sorting on multiple fields. Always test the actual query shape rather than assuming an index supports every order combination.

---

# 31. `explain()` and Query Plans

Use `explain()` to understand execution:

```javascript
db.orders.find({
  status: "OPEN"
}).explain("executionStats")
```

Important fields/concepts:

```text
winningPlan
executionStats
nReturned
totalKeysExamined
totalDocsExamined
executionTimeMillis
```

## `COLLSCAN`

Collection scan.

It does not automatically mean a problem. A scan may be fine for:

- tiny collections;
- rare administrative tasks;
- migrations;
- queries matching most of the collection.

Context matters.

## `IXSCAN`

Index scan.

Usually indicates an index path is involved.

## Efficiency example

Suspicious:

```text
nReturned         = 20
totalDocsExamined = 1,000,000
```

Much more selective:

```text
nReturned         = 20
totalDocsExamined = 20
```

But never judge on one metric alone. Inspect the entire plan, sort behavior, keys examined, and execution context.

## Explain workflow

```text
1. Capture exact query
2. Run explain("executionStats")
3. Check winning plan
4. Compare docs/keys examined to rows returned
5. Check sorting
6. Check index boundaries
7. Adjust index/schema/query
8. Re-test using production-like data
```

---

# 32. Index Design Strategy

Do not begin with:

> “Which fields can I index?”

Begin with:

> “What queries does the application actually execute?”

Create an access-pattern table:

| Query | Filter | Sort | Frequency | Expected results |
|---|---|---|---|---|
| User by email | email | none | very high | 1 |
| Recent orders | customerId | createdAt desc | high | 20 |
| Open approvals | approverId + status | createdAt desc | high | 20–100 |
| Monthly report | date range | none | daily | many |

Possible indexes:

```javascript
{ email: 1 }
```

```javascript
{ customerId: 1, createdAt: -1 }
```

```javascript
{ approverId: 1, status: 1, createdAt: -1 }
```

Before adding an index ask:

1. Which query needs it?
2. How often does that query run?
3. How selective is it?
4. Can an existing compound index serve it?
5. Does it need sort support?
6. What write overhead is added?
7. How large will the index become?
8. Will arrays make it multikey?
9. Would a partial index be better?
10. How will you safely remove it if unused?

---

# 33. Transactions and Atomicity

A major MongoDB property:

> A write operation affecting a single document is atomic.

Example:

```javascript
{
  orderNo: "ORD-1",
  total: 5000,
  status: "PAID",
  payment: {
    reference: "PAY-123",
    paidAt: ISODate("...")
  }
}
```

If related state can reasonably live in one document, many consistency problems can be solved without a multi-document transaction.

## When multi-document transactions are appropriate

Example money transfer:

```text
Account A - ₹1000
Account B + ₹1000
```

Both operations must succeed together.

Application-driver flow:

```text
Start session
   ↓
Start transaction
   ↓
Operation 1
   ↓
Operation 2
   ↓
Commit
```

Failure:

```text
Abort transaction
```

## Transaction principles

- keep transactions short;
- handle retryable/transient errors according to driver guidance;
- do not use transactions as a substitute for good schema design;
- avoid unnecessary user interaction/network waits inside a transaction;
- understand deployment/version limitations.

---

# 34. Read Concern, Write Concern, and Read Preference

These topics become important in replicated/distributed deployments.

## Write Concern

Question:

> How much acknowledgement must MongoDB provide before the application treats a write as successful?

Trade-off:

```text
Stronger acknowledgement/durability
             ↕
Potentially higher latency
```

For critical writes, understand majority acknowledgement and journaling behavior for your deployment/version instead of accepting defaults blindly.

## Read Concern

Controls read consistency/isolation behavior.

Common concepts include:

```text
local
available
majority
linearizable
snapshot
```

Not every mode is available/appropriate in every context.

Choose based on:

- correctness;
- transaction behavior;
- latency;
- topology;
- recency requirements.

## Read Preference

Controls which replica-set members can serve reads.

Typical modes:

```text
primary
primaryPreferred
secondary
secondaryPreferred
nearest
```

Reading secondaries may reduce primary read load but can return less-recent data. Business correctness comes before load distribution.

---

# 35. Replica Sets and High Availability

A replica set is a group of MongoDB nodes maintaining copies of the same dataset.

```text
           ┌─────────────┐
Writes ───▶│   Primary   │
           └──────┬──────┘
                  │ replication
          ┌───────┴────────┐
          ▼                ▼
   ┌─────────────┐   ┌─────────────┐
   │ Secondary A │   │ Secondary B │
   └─────────────┘   └─────────────┘
```

## Primary

Normally receives writes.

## Secondary

Replicates operations from the primary. It may serve reads depending on read preference.

## Oplog

Replica sets replicate changes through an operation log.

```text
Primary changes data
      ↓
Operation recorded
      ↓
Secondaries replay changes
```

## Elections

If the primary fails, eligible members can elect a new primary.

Applications may experience a temporary write interruption during failover. Modern drivers monitor topology and reconnect to the new primary.

## Replica sets provide

- redundancy;
- high availability;
- automatic failover;
- foundation for transactions/change streams.

Replica sets do **not** horizontally split one dataset. That is sharding.

---

# 36. Sharding and Horizontal Scaling

Sharding distributes data across multiple shards.

```text
Application
    │
    ▼
 ┌────────┐
 │ mongos │
 └───┬────┘
     │
 ┌───┼──────────────┐
 ▼   ▼              ▼
Shard A          Shard B          Shard C
```

Each shard is commonly a replica set.

## Why shard?

Possible reasons:

- dataset outgrows one server/replica set;
- storage must be distributed;
- write throughput must scale horizontally;
- operational requirements demand distribution.

Do not shard merely because the collection has “many documents.” A well-indexed replica set can support very large workloads.

## Shard key

The shard key determines distribution and query routing.

Good shard-key characteristics often include:

- high cardinality;
- good write distribution;
- support for common routed queries;
- avoidance of hotspots.

## Ranged sharding

Concept:

```text
A–F → shard 1
G–M → shard 2
N–Z → shard 3
```

Good for range locality. Poorly chosen monotonically increasing keys can create a write hotspot.

## Hashed sharding

```text
userId
  ↓
hash(userId)
  ↓
distributed across shards
```

Good write distribution, potentially less natural range locality.

## `mongos`

The query router used by applications in a sharded cluster.

## Config servers

Store cluster metadata/configuration.

## Balancer

Helps redistribute data ranges according to cluster balancing rules.

## Targeted vs scatter-gather

If a query contains usable shard-key information, MongoDB can often target required shard(s).

Without it:

```text
mongos
 ├── shard A
 ├── shard B
 └── shard C
```

The query may need to scatter across shards and gather results.

Shard-key selection therefore affects both **distribution** and **query routing**.

## Zones

Zones can associate data ranges with specific shards, useful for geographic/data-residency or workload placement scenarios. Treat zone design as an advanced production topic.

---

# 37. Security

Security starts at design time.

## Authentication

Answers:

> Who are you?

## Authorization

Answers:

> What are you allowed to do?

MongoDB supports role-based access control.

## Least privilege

Bad:

```text
Application → full admin
```

Better:

```text
Application → required read/write only
Reporting   → read-only
Backup      → backup-related privileges
Admin       → administrative privileges
```

## Network security

Do not unnecessarily expose MongoDB to the public internet.

Use:

- firewalls;
- private networks;
- IP restrictions;
- security groups;
- VPN/private connectivity where suitable.

## TLS

Use encrypted connections in production.

```text
Application
    │ TLS
    ▼
 MongoDB
```

## Secrets

Never commit:

```javascript
const password = "ProdPassword123";
```

Prefer:

```text
environment variables
secret manager
vault
workload identity
```

## Encryption

Consider:

- encryption in transit;
- encryption at rest;
- field-level protection when required;
- key management and rotation.

## Auditing

Sensitive environments may require auditing of authentication, administrative actions, user changes, and data access. Available capabilities depend on MongoDB offering/edition.

## Security checklist

- [ ] Authentication enabled.
- [ ] Unique identities for people/applications.
- [ ] Least privilege applied.
- [ ] TLS enabled.
- [ ] No unnecessary public exposure.
- [ ] Secrets kept outside source control.
- [ ] Backups encrypted/protected.
- [ ] MongoDB/OS patching maintained.
- [ ] Monitoring and alerts configured.
- [ ] Restore process tested.

---

# 38. Backup and Restore

A backup is useful only if you can restore it.

Logical tools include:

```text
mongodump
mongorestore
```

Example:

```bash
mongodump --uri="mongodb://localhost:27017/shop"
```

Restore:

```bash
mongorestore --uri="mongodb://localhost:27017/shop" dump/
```

Production backup design depends on topology, data volume, point-in-time requirements, and service-level objectives.

## Production backup questions

1. How often are backups created?
2. Is point-in-time recovery required?
3. Where are backups stored?
4. Are they encrypted?
5. How long are they retained?
6. Are they stored separately from the primary environment?
7. When was restore last tested?
8. What is RPO?
9. What is RTO?

## RPO

Recovery Point Objective.

```text
RPO = 15 minutes
```

Business can tolerate approximately up to 15 minutes of data loss.

## RTO

Recovery Time Objective.

```text
RTO = 2 hours
```

Service should be restored within approximately two hours.

---

# 39. Monitoring and Performance

Monitor:

```text
CPU
memory
storage size
disk latency
connections
operation latency
replication lag
query latency
cache behavior
network traffic
storage growth
slow operations
```

Useful shell commands include:

```javascript
db.stats()
```

```javascript
db.orders.stats()
```

```javascript
db.orders.getIndexes()
```

Index usage:

```javascript
db.orders.aggregate([
  { $indexStats: {} }
])
```

Server status:

```javascript
db.serverStatus()
```

Permissions may restrict administrative commands in production.

## Database Profiler

MongoDB can profile operations. Profiling can generate overhead and substantial data, so configure it intentionally.

## Performance investigation workflow

```text
1. Identify slow endpoint/query
2. Capture exact query shape
3. Check data volume and cardinality
4. Inspect indexes
5. Run explain("executionStats")
6. Compare docs/keys examined to returned
7. Check sort behavior
8. Review schema shape
9. Review aggregation stages
10. Check CPU/memory/disk/network
11. Test change using realistic data
```

Never optimize only from intuition.

---

# 40. Change Streams

Change streams allow applications to react to MongoDB data changes.

Typical events include insert, update, replace, and delete.

Concept:

```javascript
const stream = db.orders.watch()
```

Architecture:

```text
Order changes
    ↓
Change stream
    ↓
Application consumer
    ↓
Notification / cache / sync / workflow
```

Use cases:

- real-time dashboards;
- notifications;
- event-driven workflows;
- cache invalidation;
- search-index sync;
- integration events.

Change streams use aggregation concepts, so events can be filtered/transformed.

Production consumers should understand:

- resume tokens;
- reconnect behavior;
- idempotency;
- duplicate/retry handling;
- ordering assumptions;
- deployment requirements.

---

# 41. Time Series Collections

Time series data is recorded over time:

- temperature;
- CPU metrics;
- IoT readings;
- electricity usage;
- application telemetry;
- financial observations.

Conceptual creation:

```javascript
db.createCollection("sensor_readings", {
  timeseries: {
    timeField: "timestamp",
    metaField: "metadata",
    granularity: "minutes"
  }
})
```

Measurement:

```javascript
{
  timestamp: ISODate("2026-08-12T10:00:00Z"),
  metadata: {
    sensorId: "S-1",
    location: "Plant-A"
  },
  temperature: 31.4
}
```

Use the metadata field for values that describe the series and are relatively stable, such as device or machine identity.

Time series collections have version-specific index and feature rules. Always verify the version you deploy.

---

# 42. Geospatial Data

MongoDB supports GeoJSON.

```javascript
{
  name: "Warehouse A",
  location: {
    type: "Point",
    coordinates: [72.8777, 19.0760]
  }
}
```

Important:

```text
GeoJSON Point = [longitude, latitude]
```

Create index:

```javascript
db.warehouses.createIndex({
  location: "2dsphere"
})
```

Nearby query:

```javascript
db.warehouses.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [72.88, 19.08]
      },
      $maxDistance: 5000
    }
  }
})
```

Use cases:

- nearest store;
- delivery radius;
- taxi/ride matching;
- service-center search;
- geofencing.

---

# 43. Text Search, Atlas Search, and Vector Search

These are related but different.

## Traditional text index

Useful for simpler full-text queries in MongoDB.

## Atlas Search

A richer search capability in MongoDB Atlas for requirements such as:

- relevance scoring;
- fuzzy matching;
- autocomplete;
- analyzers;
- advanced text-search pipelines.

Do not assume basic `$text` and Atlas Search are equivalent.

## Vector Search

Vector search finds semantically similar content.

```text
Text / image / document
        ↓
Embedding model
        ↓
Vector
        ↓
Vector search
        ↓
Semantically similar items
```

Use cases:

- RAG;
- semantic document search;
- similar products;
- recommendation;
- AI assistants.

RAG mental model:

```text
User question
     ↓
Create query embedding
     ↓
Vector search
     ↓
Retrieve relevant chunks
     ↓
Send evidence to LLM
     ↓
Generate answer
```

AI database design still needs normal engineering discipline:

- metadata filters;
- authorization;
- chunk IDs;
- source IDs;
- versioning;
- retention;
- auditability.


---

# 44. GridFS and Capped Collections

## GridFS

MongoDB documents have a BSON size limit. GridFS is a specification for storing files by splitting them into chunks and storing metadata/chunks in MongoDB collections.

Possible uses:

- large binary files;
- files that benefit from MongoDB-integrated storage/access patterns.

Do **not** automatically choose GridFS for every upload.

A common architecture is:

```text
Object storage
(S3 / Azure Blob / GCS)
        ↑
        │ file bytes
        │
MongoDB stores metadata
```

Example metadata:

```javascript
{
  fileName: "invoice.pdf",
  storageKey: "invoices/2026/abc.pdf",
  size: 524000,
  contentType: "application/pdf",
  uploadedAt: ISODate("...")
}
```

Use GridFS when its trade-offs actually fit the workload.

## Capped Collections

Capped collections use a fixed maximum size and preserve insertion-order characteristics.

Historically they have been useful for log-like/circular-buffer workloads.

Before choosing them, compare with modern alternatives:

- TTL indexes;
- time series collections;
- change streams;
- dedicated logging systems.

---

# 45. Connection Pooling

Opening a new connection for every HTTP request is usually a bad design.

Bad:

```text
HTTP Request
     ↓
Open MongoDB connection
     ↓
Query
     ↓
Close connection
```

Better:

```text
Application starts
      ↓
Driver creates/manages pool
      ↓
Requests reuse pooled connections
```

Connections involve cost:

- TCP networking;
- TLS handshakes;
- authentication;
- server connection resources.

Drivers normally manage pools for you.

Pool sizing should consider:

- application concurrency;
- number of application instances;
- MongoDB topology;
- database capacity;
- workload latency;
- serverless/container scaling behavior.

Do not set huge pool sizes just because a larger number “looks faster.”

---

# 46. Node.js Driver

Install:

```bash
npm install mongodb
```

Basic connection:

```javascript
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
  await client.connect();

  const db = client.db("shop");
  const users = db.collection("users");

  const user = await users.findOne({
    email: "alex@example.com"
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await client.close();
  });
```

In a long-running web server, create/reuse the client appropriately instead of connecting and closing for every request.

## Insert

```javascript
const result = await users.insertOne({
  name: "Alex",
  email: "alex@example.com",
  createdAt: new Date()
});
```

## Query

```javascript
const products = await db
  .collection("products")
  .find({
    price: { $gte: 1000 }
  })
  .sort({ price: 1 })
  .limit(20)
  .toArray();
```

## Projection

```javascript
const users = await db
  .collection("users")
  .find(
    { active: true },
    {
      projection: {
        name: 1,
        email: 1
      }
    }
  )
  .toArray();
```

## Update

```javascript
await users.updateOne(
  { email: "alex@example.com" },
  {
    $set: {
      active: true,
      updatedAt: new Date()
    }
  }
);
```

## ObjectId

```javascript
import { ObjectId } from "mongodb";

const id = new ObjectId(req.params.id);
```

Validate external IDs before using them.

## Transaction idea

```javascript
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    await accounts.updateOne(
      { _id: fromId },
      { $inc: { balance: -1000 } },
      { session }
    );

    await accounts.updateOne(
      { _id: toId },
      { $inc: { balance: 1000 } },
      { session }
    );
  });
} finally {
  await session.endSession();
}
```

Use current driver documentation for exact transaction/retry behavior.

---

# 47. Mongoose

Mongoose is a popular ODM for Node.js.

```bash
npm install mongoose
```

Connect:

```javascript
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB_URI);
```

Schema:

```javascript
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);
```

Model:

```javascript
const User = mongoose.model("User", userSchema);
```

Create:

```javascript
const user = await User.create({
  name: "Alex",
  email: "alex@example.com"
});
```

Query:

```javascript
const users = await User.find({
  active: true
});
```

## Important: `unique` is not normal validation

```javascript
unique: true
```

is related to database uniqueness/index behavior. Applications still need to handle duplicate-key errors and races.

## `lean()`

Read-only endpoint:

```javascript
const users = await User
  .find({ active: true })
  .lean();
```

Returns plain JavaScript objects instead of full Mongoose documents, which can reduce ODM overhead when document methods/features are unnecessary.

## Populate vs MongoDB data modeling

Mongoose `populate()` is convenient for references, but do not normalize everything simply because populate exists.

First decide the correct MongoDB document model. Then use ODM features.

---

# 48. Python / PyMongo

Install:

```bash
pip install pymongo
```

Connect:

```python
from pymongo import MongoClient
import os

client = MongoClient(os.environ["MONGODB_URI"])
db = client["shop"]
users = db["users"]
```

Insert:

```python
result = users.insert_one({
    "name": "Alex",
    "email": "alex@example.com"
})
```

Find one:

```python
user = users.find_one({
    "email": "alex@example.com"
})
```

Find many:

```python
for product in db.products.find({
    "price": {
        "$gte": 1000
    }
}).sort("price", 1):
    print(product)
```

Projection:

```python
for user in users.find(
    {"active": True},
    {"name": 1, "email": 1}
):
    print(user)
```

Update:

```python
users.update_one(
    {"email": "alex@example.com"},
    {
        "$set": {
            "active": False
        }
    }
)
```

---

# 49. PHP

PHP commonly uses the MongoDB extension plus MongoDB PHP library.

Composer concept:

```bash
composer require mongodb/mongodb
```

Example:

```php
<?php

require 'vendor/autoload.php';

$client = new MongoDB\Client(
    getenv('MONGODB_URI')
);

$collection = $client
    ->shop
    ->users;

$user = $collection->findOne([
    'email' => 'alex@example.com'
]);

var_dump($user);
```

Insert:

```php
$collection->insertOne([
    'name' => 'Alex',
    'email' => 'alex@example.com',
    'active' => true
]);
```

Query:

```php
$cursor = $client
    ->shop
    ->products
    ->find(
        [
            'price' => [
                '$gte' => 1000
            ]
        ],
        [
            'sort' => [
                'price' => 1
            ],
            'limit' => 20
        ]
    );
```

Framework applications should keep data access organized in services/repositories rather than scattering database calls across controllers and views.

---

# 50. C#/.NET

Install official driver through NuGet:

```text
MongoDB.Driver
```

Basic concept:

```csharp
using MongoDB.Driver;

var client = new MongoClient(
    Environment.GetEnvironmentVariable("MONGODB_URI")
);

var database = client.GetDatabase("shop");
var users = database.GetCollection<User>("users");
```

Query:

```csharp
var user = await users
    .Find(x => x.Email == "alex@example.com")
    .FirstOrDefaultAsync();
```

Insert:

```csharp
await users.InsertOneAsync(new User
{
    Name = "Alex",
    Email = "alex@example.com"
});
```

Update:

```csharp
var filter = Builders<User>.Filter.Eq(x => x.Email, "alex@example.com");
var update = Builders<User>.Update.Set(x => x.Active, false);

await users.UpdateOneAsync(filter, update);
```

Strongly typed models are useful, but still learn BSON types, indexes, aggregation, and query execution under the abstraction.

---

# 51. REST API Architecture

A maintainable architecture could be:

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
MongoDB Driver
```

Example request:

```text
GET /api/orders/:id
```

Flow:

```text
Route
 ↓
OrderController
 ↓
OrderService
 ↓
OrderRepository
 ↓
MongoDB
```

## Controller

HTTP concerns:

```javascript
async function getOrder(req, res) {
  const order = await orderService.getById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  return res.json(order);
}
```

## Service

Business logic:

```javascript
async function getById(id) {
  return orderRepository.findById(id);
}
```

## Repository

Database-specific access:

```javascript
async function findById(id) {
  return db.collection("orders").findOne({
    _id: new ObjectId(id)
  });
}
```

Benefits:

- easier testing;
- centralized queries;
- easier index/query review;
- less database code duplication;
- simpler future migrations.

## API validation

Validate before database access:

- required fields;
- allowed enums;
- numbers/ranges;
- date formats;
- ObjectId strings;
- pagination limits;
- sort fields.

Never pass arbitrary client JSON directly into MongoDB filters/updates without controlling allowed operators and fields.

---

# 52. SQL → MongoDB Cheat Sheet

## INSERT

SQL:

```sql
INSERT INTO users(name, email)
VALUES ('Alex', 'alex@example.com');
```

MongoDB:

```javascript
db.users.insertOne({
  name: "Alex",
  email: "alex@example.com"
})
```

## SELECT

```sql
SELECT * FROM users;
```

```javascript
db.users.find({})
```

## WHERE

```sql
SELECT *
FROM users
WHERE age >= 18;
```

```javascript
db.users.find({
  age: { $gte: 18 }
})
```

## AND

```sql
WHERE active = 1
  AND age >= 18
```

```javascript
{
  active: true,
  age: { $gte: 18 }
}
```

## OR

```sql
WHERE role = 'ADMIN'
   OR role = 'MANAGER'
```

```javascript
{
  $or: [
    { role: "ADMIN" },
    { role: "MANAGER" }
  ]
}
```

## IN

```sql
WHERE status IN ('NEW', 'OPEN')
```

```javascript
{
  status: {
    $in: ["NEW", "OPEN"]
  }
}
```

## ORDER BY

```sql
ORDER BY created_at DESC
```

```javascript
.sort({ createdAt: -1 })
```

## LIMIT / OFFSET

```sql
LIMIT 10 OFFSET 20
```

```javascript
.skip(20).limit(10)
```

## UPDATE

```sql
UPDATE users
SET active = 0
WHERE id = 10;
```

```javascript
db.users.updateOne(
  { _id: 10 },
  { $set: { active: false } }
)
```

## DELETE

```sql
DELETE FROM users
WHERE id = 10;
```

```javascript
db.users.deleteOne({ _id: 10 })
```

## GROUP BY

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

```javascript
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      count: { $sum: 1 }
    }
  }
])
```

## JOIN

```sql
SELECT *
FROM orders
JOIN customers
  ON orders.customer_id = customers.id;
```

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customer"
    }
  }
])
```

Do not recreate a fully normalized relational schema by habit. MongoDB may intentionally embed related data.

---

# 53. E-Commerce Scenario

Collections:

```text
users
products
orders
payments
inventory_events
```

## Product

```javascript
{
  _id: ObjectId("..."),
  sku: "KB-100",
  name: "Mechanical Keyboard",
  category: "Keyboard",
  price: NumberDecimal("3499.00"),
  stock: 28,
  attributes: {
    switch: "Red",
    layout: "TKL"
  },
  active: true,
  createdAt: ISODate("...")
}
```

Potential indexes based on workload:

```javascript
db.products.createIndex(
  { sku: 1 },
  { unique: true }
)
```

```javascript
db.products.createIndex({
  category: 1,
  active: 1,
  price: 1
})
```

## Order

```javascript
{
  _id: ObjectId("..."),
  orderNo: "ORD-2026-10001",

  customer: {
    id: ObjectId("..."),
    name: "Alex",
    email: "alex@example.com"
  },

  items: [
    {
      productId: ObjectId("..."),
      sku: "KB-100",
      name: "Mechanical Keyboard",
      qty: 2,
      unitPrice: NumberDecimal("3499.00")
    }
  ],

  shippingAddress: {
    city: "Mumbai",
    pin: "400001"
  },

  subtotal: NumberDecimal("6998.00"),
  tax: NumberDecimal("1259.64"),
  total: NumberDecimal("8257.64"),
  status: "PAID",
  createdAt: ISODate("...")
}
```

Why copy customer/product snapshots?

Historical accuracy.

If a product name or customer address changes tomorrow, yesterday's order often needs to retain the values used when the order was placed.

## Recent orders query

```javascript
db.orders
  .find({
    "customer.id": customerId
  })
  .sort({
    createdAt: -1,
    _id: -1
  })
  .limit(20)
```

Potential index:

```javascript
{
  "customer.id": 1,
  createdAt: -1,
  _id: -1
}
```

## Inventory concurrency

Do not implement:

```text
Read stock = 1
Then later write stock = 0
```

without a concurrency-safe condition.

Better pattern:

```javascript
db.products.updateOne(
  {
    _id: productId,
    stock: { $gte: qty }
  },
  {
    $inc: {
      stock: -qty
    }
  }
)
```

If modified count is zero, stock may be insufficient.

---

# 54. Invoice Processing Scenario

MongoDB can work well in document-processing systems because extracted data may vary by document/vendor type.

```javascript
{
  _id: ObjectId("..."),
  documentType: "INVOICE",

  sourceFile: {
    fileName: "INV-1001.pdf",
    storageKey: "invoice/2026/INV-1001.pdf"
  },

  vendor: {
    code: "V0001",
    name: "ABC Industries",
    taxId: "..."
  },

  invoice: {
    number: "INV-1001",
    date: ISODate("2026-08-10T00:00:00Z"),
    currency: "INR",
    subtotal: NumberDecimal("10000.00"),
    tax: NumberDecimal("1800.00"),
    total: NumberDecimal("11800.00")
  },

  purchaseOrder: {
    poNumber: "PO-501"
  },

  extractedFields: [
    {
      field: "invoice_number",
      value: "INV-1001",
      confidence: 0.98
    },
    {
      field: "total_amount",
      value: "11800",
      confidence: 0.96
    }
  ],

  validation: {
    status: "PASSED",
    errors: []
  },

  workflow: {
    currentStage: "FINANCE_APPROVAL"
  },

  createdAt: ISODate("..."),
  updatedAt: ISODate("...")
}
```

Different invoice types can contain optional values:

```javascript
{ freight: NumberDecimal("100.00") }
```

or:

```javascript
{ serviceCode: "998311" }
```

Flexible documents help, but important canonical business fields should still use validation and consistent types.

## Audit history

Do not append unlimited workflow history forever inside one invoice document.

Separate events:

```javascript
{
  invoiceId: ObjectId("..."),
  eventType: "APPROVED",
  stage: "FINANCE",
  actorId: "EMP001",
  createdAt: ISODate("...")
}
```

Index:

```javascript
{
  invoiceId: 1,
  createdAt: -1
}
```

## Duplicate invoice prevention

If business rules say vendor + invoice number must be unique:

```javascript
db.invoices.createIndex(
  {
    "vendor.code": 1,
    "invoice.number": 1
  },
  {
    unique: true
  }
)
```

Real systems may need additional dimensions such as company/legal entity/fiscal context. Model uniqueness from the true business rule.

---

# 55. Chat Application Scenario

Collections:

```text
users
conversations
messages
```

Do not embed millions of messages into one conversation.

## Conversation

```javascript
{
  _id: ObjectId("..."),
  participants: [
    ObjectId("u1"),
    ObjectId("u2")
  ],
  lastMessage: {
    text: "See you tomorrow",
    senderId: ObjectId("u1"),
    sentAt: ISODate("...")
  },
  updatedAt: ISODate("...")
}
```

## Message

```javascript
{
  _id: ObjectId("..."),
  conversationId: ObjectId("..."),
  senderId: ObjectId("..."),
  text: "Hello",
  sentAt: ISODate("...")
}
```

Index:

```javascript
{
  conversationId: 1,
  sentAt: -1,
  _id: -1
}
```

Recent messages:

```javascript
db.messages
  .find({ conversationId })
  .sort({ sentAt: -1, _id: -1 })
  .limit(50)
```

Use cursor pagination for older messages.

Change streams can support real-time application behavior, but WebSocket delivery, retries, ordering, and offline users remain application-level architecture concerns.

---

# 56. IoT Scenario

Time-series measurement:

```javascript
{
  timestamp: ISODate("2026-08-12T10:10:00Z"),
  metadata: {
    deviceId: "DEVICE-100",
    plant: "PUNE-1",
    machine: "CUTTER-4"
  },
  temperature: 72.1,
  vibration: 0.82,
  rpm: 1500
}
```

Common queries:

```text
Last hour readings for a device
Average temperature by machine
Threshold breaches
Daily maximum RPM
Rolling average vibration
```

Aggregation:

```javascript
db.sensor_readings.aggregate([
  {
    $match: {
      "metadata.deviceId": "DEVICE-100",
      timestamp: {
        $gte: ISODate("2026-08-12T09:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: null,
      avgTemperature: { $avg: "$temperature" },
      maxVibration: { $max: "$vibration" }
    }
  }
])
```

Retention might use time-series expiration settings or TTL features depending on the design/version.

---

# 57. Common Anti-Patterns

## 1. Treating MongoDB exactly like SQL

Over-normalizing every tiny relationship can create unnecessary `$lookup` operations and network reads.

## 2. Embedding everything

The opposite mistake:

```text
customer
 └── all orders forever
      └── all items
           └── all events forever
```

Documents grow without bound.

## 3. Unbounded arrays

Bad:

```javascript
{
  userId: 1,
  loginEvents: [
    // forever
  ]
}
```

Better: a separate events collection or bounded subset.

## 4. No index strategy

A query that feels instant with 1,000 test documents may fail badly at tens of millions.

## 5. Too many indexes

Indexes increase write cost and consume storage/memory.

## 6. Inconsistent data types

Bad mixture:

```javascript
{ amount: "1000" }
```

and:

```javascript
{ amount: 1000 }
```

## 7. Dates stored as arbitrary strings

Bad:

```javascript
"12/08/26"
```

Better:

```javascript
ISODate("...")
```

Format dates in the presentation layer.

## 8. Regex everywhere

Arbitrary substring regexes across huge collections may be costly. Use the correct indexing/search solution.

## 9. Huge `skip()` pagination

```javascript
.skip(1000000)
```

Use range/cursor pagination when appropriate.

## 10. Connection per request

Use driver-managed connection pools.

## 11. Massive long-running transactions

Keep transactions short and focused.

## 12. Public database exposure

Convenience must never override security.

## 13. No restore testing

“Backup completed” is not the same as “recovery works.”

## 14. Storing giant binary files in normal documents

Use GridFS or external object storage based on requirements.

## 15. Dynamic user-controlled operators

Dangerous pattern:

```javascript
collection.find(req.body)
```

A client may inject operators or query shapes you never intended. Whitelist allowed filter fields/operators.

## 16. Using transactions for every write

Single-document atomicity already solves many workflows.

## 17. Indexing every field individually

A set of random single-field indexes often fails to support real compound filter+sort patterns.

## 18. Ignoring null vs missing

A field explicitly containing `null` and a field that does not exist can behave differently depending on query/operator. Test your intended semantics.

---

# 58. Production Best Practices

## Schema

- design around access patterns;
- avoid unbounded growth;
- use consistent data types;
- use validation for critical fields;
- store dates as dates;
- document intentional duplication;
- consider future growth.

## Indexes

- index important query shapes;
- use compound indexes intentionally;
- verify with `explain()`;
- review unused/redundant indexes;
- understand write cost;
- build indexes using safe production procedures.

## Application

- reuse clients/pools;
- configure sensible timeouts;
- validate identifiers;
- validate allowed filters/sorts;
- handle duplicate-key errors;
- make external-event consumers idempotent;
- do not leak raw database errors to clients.

## Security

- authentication;
- RBAC;
- TLS;
- network restrictions;
- secret management;
- patch management.

## Operations

- backups;
- restore drills;
- alerts;
- capacity planning;
- slow-query review;
- replication-lag monitoring;
- disk-space alerts.

## Deployment

- use an appropriate replica-set topology for production HA;
- follow supported upgrade paths;
- read compatibility notes before major/minor upgrades;
- test changes in staging with production-like data.

---

# 59. Troubleshooting

## Duplicate key error (`E11000`)

Usually a unique index was violated.

Do not “fix” by removing uniqueness if uniqueness is a real business rule. Instead:

- identify the duplicate;
- clean invalid data;
- return a business-friendly conflict error;
- handle race conditions.

## Invalid ObjectId

Validate external IDs before constructing ObjectIds.

## Slow query

Check:

```text
filter
sort
projection
explain("executionStats")
indexes
docs examined
keys examined
array behavior
schema shape
```

## Cannot connect

Checklist:

```text
MongoDB service running?
Correct hostname?
Correct port?
DNS works?
Firewall/security group?
Atlas network access?
Credentials correct?
Authentication database correct?
TLS options correct?
Connection string encoded correctly?
```

## Authentication failure

Possible causes:

- wrong user/password;
- wrong auth database;
- wrong mechanism;
- URI special characters not encoded;
- role/user configuration issue.

## Memory appears high

Databases intentionally use memory for caching. Investigate actual memory pressure, working-set size, cache metrics, index sizes, and OS behavior before calling it a memory leak.

## Disk grows rapidly

Check:

- collections;
- indexes;
- logs;
- oplog size;
- retention/TTL;
- time-series retention;
- temporary/export files;
- backup artifacts.

## Replication lag

Investigate:

- network latency;
- disk performance;
- secondary hardware;
- write volume;
- long operations;
- maintenance state.

## Query suddenly stopped using an index

Check:

- query shape changed;
- data distribution changed;
- index changed/removed/hidden;
- collation mismatch;
- sort/projection changed;
- planner selected a different plan;
- version/configuration changed.

Always inspect the actual plan.

---

# 60. Testing

## Unit tests

Test business behavior:

```text
validation
transformations
business rules
error mapping
```

## Integration tests

Use a real MongoDB test instance/container for database behavior:

- indexes;
- unique constraints;
- transactions;
- aggregation;
- BSON/ObjectId behavior;
- schema validation.

## Isolation

Never run tests against production.

```text
app_test
```

Clean or isolate test data between tests.

## Example registration tests

```text
✓ creates valid user
✓ rejects duplicate email
✓ stores createdAt as date
✓ never stores plain password
✓ returns only public fields
✓ normalizes email consistently if required
```

## Index tests

For critical repositories, tests can verify required indexes exist in deployment automation or startup checks.

## Performance tests

Use production-like data volumes. A query against 100 sample documents tells you very little about 100 million documents.

---

# 61. Interview Questions

## Beginner

### What is MongoDB?

A document database that stores BSON documents in collections.

### What is BSON?

MongoDB's binary document representation supporting richer data types than standard JSON.

### What is a collection?

A group of MongoDB documents.

### What is `_id`?

The unique identifier for a document.

### `find()` vs `findOne()`?

`find()` produces a cursor over matching documents; `findOne()` returns one matching document (or no result).

### What is ObjectId?

A commonly generated BSON identifier type used for `_id` values.

## Intermediate

### Embedding vs referencing?

Embedding stores related data together. Referencing stores entities separately and links them by identifiers. The choice depends on access patterns, cardinality, growth, consistency, and update behavior.

### What is an index?

A structure used to find/sort relevant data efficiently without scanning the whole collection when the index fits the query.

### What is a compound index?

An index over multiple fields. Field order matters.

### What is a multikey index?

An index used for array fields; MongoDB automatically makes an index multikey when indexed values are arrays.

### What is aggregation?

A pipeline framework for filtering, transforming, grouping, joining, calculating, and analyzing documents.

### What is `$lookup`?

An aggregation stage used to combine data from another collection.

### What is `$unwind`?

Expands an array so each array element can be processed as its own pipeline document.

### What is upsert?

Update a matching document or insert one if no match exists.

### What is a TTL index?

An index supporting automatic expiration of date-based records.

## Advanced

### Replica set vs sharding?

```text
Replica set → copies the same data for availability/redundancy.
Sharding    → distributes portions of data for horizontal scaling.
```

### What is write concern?

Defines write acknowledgement/durability expectations.

### What is read preference?

Defines which replica-set members may serve reads.

### What is read concern?

Defines consistency/isolation characteristics for reads.

### What is a shard key?

Field or fields used to distribute sharded data and route queries.

### Why is shard-key selection difficult?

It affects write distribution, hotspots, query targeting, cardinality, range behavior, and future scalability.

### Why are unbounded arrays dangerous?

They can make documents increasingly expensive and eventually exceed practical/hard limits.

### What is `COLLSCAN`?

Collection scan.

### What is `IXSCAN`?

Index scan.

### Does MongoDB support multi-document transactions?

Yes. But good document modeling can often avoid needing them for naturally related data.

### What is denormalization?

Intentionally storing duplicated/combined information to optimize access patterns.

### Why not index every field?

Indexes consume storage/memory and increase write cost.

### What is a covered query?

A query whose required fields can be satisfied entirely from an appropriate index under MongoDB's rules.

### What is cursor pagination?

Pagination based on the last seen sort key instead of a large numeric offset.

### What is a change stream?

A subscription mechanism for reacting to database changes.

### Why can `$lookup` become expensive?

Large join inputs, missing indexes on join fields, broad pipelines, and poor modeling can produce expensive work. Review execution plans and consider whether frequently co-read data should be embedded or denormalized.

### What makes an index “good”?

It supports an important query shape with acceptable read benefit and write/storage cost.

---

# 62. Practice Exercises

Create sample data:

```javascript
db.employees.insertMany([
  {
    employeeId: 101,
    name: "Aisha",
    department: "IT",
    salary: 90000,
    skills: ["MongoDB", "Node.js"],
    active: true,
    joiningDate: ISODate("2023-01-10")
  },
  {
    employeeId: 102,
    name: "Rahul",
    department: "Finance",
    salary: 75000,
    skills: ["Excel", "Power BI"],
    active: true,
    joiningDate: ISODate("2022-04-15")
  },
  {
    employeeId: 103,
    name: "Meera",
    department: "IT",
    salary: 110000,
    skills: ["Python", "MongoDB"],
    active: false,
    joiningDate: ISODate("2021-08-20")
  }
])
```

Exercises:

1. Find all IT employees.
2. Find employees earning at least 90,000.
3. Find active IT employees.
4. Find employees with MongoDB skill.
5. Return only name and salary.
6. Hide `_id`.
7. Sort salary highest first.
8. Increase all IT salaries by 5,000.
9. Add Docker to Aisha with `$addToSet`.
10. Count employees by department.
11. Calculate average salary by department.
12. Find highest salary per department.
13. Create a unique index on `employeeId`.
14. Create an index suitable for active employees by department.
15. Run explain before/after the index.
16. Add an embedded manager object.
17. Query nested manager name using dot notation.
18. Add schema validation requiring `employeeId`, `name`, and `department`.
19. Find employees who joined after 2022-12-31.
20. Group employees by joining year.

Advanced:

21. Design an employee audit-event collection.
22. Design cursor pagination for employee search.
23. Create a partial index for active employees.
24. Model one employee with multiple bounded office addresses.
25. Explain why embedding all attendance records in employee is dangerous.

---

# 63. Practice Projects

## Project 1 — Employee Management

Features:

- create/update employee;
- department filtering;
- skill search;
- salary reports;
- soft-delete;
- audit dates.

Learn:

```text
CRUD
indexes
aggregation
validation
```

## Project 2 — E-Commerce API

Features:

- product catalog;
- category filters;
- cart/order creation;
- stock handling;
- order history;
- reports.

Learn:

```text
embedding
transactions
compound indexes
aggregation
concurrency
```

## Project 3 — Chat API

Features:

- conversations;
- messages;
- cursor pagination;
- unread state;
- change-stream notifications.

Learn:

```text
high-volume modeling
compound indexes
change streams
pagination
```

## Project 4 — Invoice Extraction Store

Features:

- file metadata;
- vendor details;
- dynamic OCR fields;
- confidence scores;
- validation errors;
- workflow state;
- audit events.

Learn:

```text
flexible documents
validation
audit design
indexing
```

## Project 5 — IoT Monitoring

Features:

- measurements;
- threshold detection;
- daily summaries;
- retention;
- dashboards.

Learn:

```text
time series
aggregation
TTL/window logic
```

## Project 6 — URL Shortener

Collections:

```text
links
click_events
```

Learn:

- unique indexes;
- high-read access;
- TTL for temporary links;
- event analytics;
- counters.

## Project 7 — Job Queue

Learn:

- atomic claim/update;
- status transitions;
- retry counts;
- indexes;
- TTL cleanup;
- concurrency.

---

# 64. 30-Day Learning Plan

## Days 1–3

```text
MongoDB concepts
documents
collections
BSON
ObjectId
mongosh
```

Practice inserts and simple reads.

## Days 4–6

```text
find
filters
projection
sorting
comparison operators
logical operators
```

## Days 7–9

```text
updates
array operators
nested documents
deletes
upsert
bulkWrite
```

## Days 10–12

```text
schema modeling
embedding
referencing
cardinality
unbounded arrays
validation
```

Design blog, e-commerce, employee models.

## Days 13–16

```text
$match
$project
$set
$group
$sort
$unwind
$lookup
$facet
```

Write at least 15 aggregation pipelines.

## Days 17–20

```text
single indexes
compound indexes
unique
multikey
partial
TTL
text
wildcard
hashed
```

Use `explain()` every day.

## Days 21–22

```text
transactions
atomicity
sessions
write concern
read concern
read preference
```

## Days 23–24

```text
replica sets
primary
secondary
oplog
elections
failover
```

## Days 25–26

```text
sharding
mongos
shard keys
hashed vs ranged
scatter-gather
```

## Day 27

```text
security
authentication
RBAC
TLS
secrets
```

## Day 28

```text
backup
restore
monitoring
profiling
slow queries
```

## Day 29

```text
change streams
time series
geospatial
search
GridFS
```

## Day 30

Build a complete project containing:

- CRUD;
- validation;
- at least three justified indexes;
- one compound index;
- aggregation report;
- cursor pagination;
- error handling;
- environment-based secrets;
- tests;
- README;
- explain-plan notes.

---

# 65. Command Cheat Sheet

## Database

```javascript
show dbs
use shop
db
```

## Collections

```javascript
show collections
db.createCollection("users")
db.users.drop()
```

`drop()` is destructive.

## Insert

```javascript
db.users.insertOne({ name: "Alex" })
```

```javascript
db.users.insertMany([
  { name: "A" },
  { name: "B" }
])
```

## Find

```javascript
db.users.find({})
```

```javascript
db.users.findOne({
  email: "a@example.com"
})
```

## Projection

```javascript
db.users.find(
  {},
  { name: 1, _id: 0 }
)
```

## Sort/limit

```javascript
db.users
  .find({})
  .sort({ createdAt: -1 })
  .limit(20)
```

## Update

```javascript
db.users.updateOne(
  { _id: 1 },
  { $set: { active: true } }
)
```

## Delete

```javascript
db.users.deleteOne({ _id: 1 })
```

## Index

```javascript
db.users.createIndex({ email: 1 })
```

Unique:

```javascript
db.users.createIndex(
  { email: 1 },
  { unique: true }
)
```

List:

```javascript
db.users.getIndexes()
```

Drop:

```javascript
db.users.dropIndex("email_1")
```

## Explain

```javascript
db.users.find({
  email: "a@example.com"
}).explain("executionStats")
```

## Aggregation

```javascript
db.orders.aggregate([
  { $match: { status: "PAID" } },
  {
    $group: {
      _id: "$customerId",
      total: { $sum: "$total" }
    }
  }
])
```

---

# 66. Glossary

**Aggregation** — pipeline framework for transforming/analyzing documents.

**Atlas** — MongoDB's managed cloud platform.

**BSON** — Binary JSON document representation used by MongoDB.

**Collection** — group of documents.

**Compound index** — index containing multiple fields.

**Cursor** — iterable/query-result abstraction returned by many read operations.

**Denormalization** — intentionally storing related/duplicated information together to optimize access.

**Document** — BSON record.

**Embedding** — storing related data inside another document.

**Index** — auxiliary structure helping suitable queries find/sort data efficiently.

**Multikey index** — index used when indexed values are arrays.

**`mongod`** — MongoDB server process.

**`mongos`** — sharded-cluster query router.

**`mongosh`** — MongoDB shell.

**ObjectId** — common BSON identifier type.

**Oplog** — operation log used for replica-set replication.

**Projection** — choosing fields returned by a query.

**Reference** — storing an identifier that links one document to another.

**Replica set** — nodes maintaining copies of the same dataset for redundancy/availability.

**Schema validation** — database-side rules limiting accepted document structures/types/values.

**Shard** — portion of a sharded MongoDB dataset, commonly backed by a replica set.

**Shard key** — field(s) used to distribute and route sharded data.

**TTL** — time-to-live expiration mechanism.

**Upsert** — update if present, otherwise insert.

**Working set** — frequently needed data/indexes for the workload.

---

# 67. Final Mental Models

## 1. MongoDB is not merely “SQL with JSON”

It is a document database where schema design is driven strongly by access patterns.

## 2. Think in aggregates

Ask:

> What information belongs together from the application's point of view?

## 3. Embedding is powerful, but growth must remain bounded

Starting heuristic:

```text
small + naturally related + read together
                 ↓
               embed
```

```text
huge + independent + unbounded
                 ↓
             reference
```

This is a heuristic, not an absolute rule.

## 4. Indexes come from queries

```text
Query pattern
   ↓
Index design
   ↓
explain()
   ↓
measure
```

Not:

```text
random indexes
   ↓
hope
```

## 5. Replication and sharding solve different problems

```text
Replica set = availability + redundancy
Sharding    = horizontal distribution
```

## 6. Single-document atomicity is a design advantage

Good embedding can reduce transaction requirements.

## 7. Flexible schema does not mean uncontrolled data

Use:

```text
application validation
+
database validation
+
consistent conventions
```

## 8. Performance is a system property

Depends on:

```text
schema
indexes
queries
hardware
working set
network
replication
concurrency
application behavior
```

## 9. Production knowledge includes operations

A strong MongoDB developer should understand:

```text
security
backup
restore
monitoring
replication
failover
capacity
```

## 10. Design for growth

Ask:

```text
What happens at 10× data?
100×?
1,000×?
```

---

# 68. Bonus Design Patterns and Checklists

## A. Database Design Checklist

Before creating a collection:

- [ ] What does one document represent?
- [ ] What are the five most common queries?
- [ ] Which fields are filtered?
- [ ] Which fields are sorted?
- [ ] Which data is always read together?
- [ ] Which arrays can grow?
- [ ] Could any array become unbounded?
- [ ] Which fields need uniqueness?
- [ ] Which fields need validation?
- [ ] Which fields are optional?
- [ ] Which fields contain dates?
- [ ] Which fields contain money?
- [ ] Is historical snapshotting required?
- [ ] Is soft delete required?
- [ ] Is audit history required?
- [ ] What is expected document size?
- [ ] What is expected collection size?
- [ ] Which indexes are required?
- [ ] Can indexes serve multiple access patterns?
- [ ] What happens at 100× volume?
- [ ] Might a future shard key matter?

## B. Query Review Checklist

- [ ] Exact filter documented.
- [ ] Exact projection documented.
- [ ] Exact sort documented.
- [ ] Expected result count known.
- [ ] Query frequency known.
- [ ] Existing indexes reviewed.
- [ ] `explain("executionStats")` run.
- [ ] `nReturned` inspected.
- [ ] `totalDocsExamined` inspected.
- [ ] `totalKeysExamined` inspected.
- [ ] Winning plan inspected.
- [ ] Sort support checked.
- [ ] Compound-index alternatives checked.
- [ ] Tested with production-like data.

## C. Soft Delete Pattern

Document:

```javascript
{
  deletedAt: null
}
```

Soft delete:

```javascript
{
  deletedAt: ISODate("...")
}
```

Active query:

```javascript
{
  deletedAt: null
}
```

Potential conditional uniqueness:

```javascript
db.users.createIndex(
  { email: 1 },
  {
    unique: true,
    partialFilterExpression: {
      deletedAt: null
    }
  }
)
```

Whether a soft-deleted email can be reused is a business-rule decision.

## D. Audit Event Pattern

Instead of endless embedded history:

```javascript
{
  entityType: "ORDER",
  entityId: ObjectId("..."),
  eventType: "STATUS_CHANGED",
  from: "NEW",
  to: "APPROVED",
  actorId: ObjectId("..."),
  createdAt: ISODate("...")
}
```

Index:

```javascript
{
  entityType: 1,
  entityId: 1,
  createdAt: -1
}
```

## E. Idempotency Pattern

External callbacks may be delivered more than once.

```javascript
{
  idempotencyKey: "PAYMENT-CALLBACK-XYZ",
  status: "PROCESSED",
  processedAt: ISODate("...")
}
```

Unique index:

```javascript
db.processed_events.createIndex(
  { idempotencyKey: 1 },
  { unique: true }
)
```

Now duplicate processing can be rejected at database level.

## F. Optimistic Concurrency Pattern

Document:

```javascript
{
  _id: 1,
  status: "DRAFT",
  version: 3
}
```

Conditional update:

```javascript
db.documents.updateOne(
  {
    _id: 1,
    version: 3
  },
  {
    $set: {
      status: "APPROVED"
    },
    $inc: {
      version: 1
    }
  }
)
```

If modified count is zero, another writer may already have changed the document.

## G. Atomic Job Claim Pattern

Queue document:

```javascript
{
  _id: ObjectId("..."),
  status: "READY",
  attempts: 0,
  createdAt: ISODate("...")
}
```

Worker conceptually uses `findOneAndUpdate` to atomically claim a job:

```javascript
db.jobs.findOneAndUpdate(
  {
    status: "READY"
  },
  {
    $set: {
      status: "PROCESSING",
      lockedAt: new Date()
    },
    $inc: {
      attempts: 1
    }
  },
  {
    sort: {
      createdAt: 1
    },
    returnDocument: "after"
  }
)
```

Only one worker should successfully claim a specific document through the atomic operation.

## H. Materialized Summary Pattern

Source orders may be expensive to aggregate on every dashboard request.

Summary:

```javascript
{
  date: ISODate("2026-08-12T00:00:00Z"),
  orders: 5100,
  revenue: NumberDecimal("9750000.00"),
  paidOrders: 4800
}
```

Generate through scheduled processing or `$merge` when appropriate.

Trade-off:

```text
faster reads
↕
summary freshness + update complexity
```

## I. Counter Pattern

If a high-traffic page repeatedly needs an expensive count, store/update a counter where correctness requirements allow.

But counters create synchronization requirements. Do not duplicate values without an ownership/update strategy.

## J. Versioned Migration Pattern

```javascript
{
  schemaVersion: 1,
  fullName: "Alex Doe"
}
```

Later:

```javascript
{
  schemaVersion: 2,
  name: {
    first: "Alex",
    last: "Doe"
  }
}
```

Migration strategies:

- offline bulk migration;
- background migration;
- lazy migration on read/write;
- dual-read during transition.

Choose based on data size, downtime tolerance, and application complexity.

## K. Multi-Tenant Modeling Questions

For SaaS applications ask:

```text
One database per tenant?
One collection per tenant?
Shared collections with tenantId?
```

Shared collection example:

```javascript
{
  tenantId: ObjectId("..."),
  invoiceNo: "INV-1"
}
```

Most queries/indexes may need `tenantId` near the front:

```javascript
{
  tenantId: 1,
  status: 1,
  createdAt: -1
}
```

Also enforce tenant isolation in application/security architecture. Never trust a client-supplied tenant ID without authorization checks.

## L. Status Workflow Pattern

```javascript
{
  status: "PENDING_APPROVAL",
  statusUpdatedAt: ISODate("..."),
  currentApproverId: "EMP-100"
}
```

Query:

```javascript
{
  currentApproverId: "EMP-100",
  status: "PENDING_APPROVAL"
}
```

Index:

```javascript
{
  currentApproverId: 1,
  status: 1,
  statusUpdatedAt: -1
}
```

Separate event history if status transitions are unbounded.

## M. Null vs Missing

Documents:

```javascript
{ name: "A", phone: null }
```

```javascript
{ name: "B" }
```

The first explicitly stores null; the second has no phone field. Decide what each means in your domain.

Use `$exists` when distinction matters.

## N. Pagination With Tie-Breaker

If many records have the same `createdAt`, do not cursor only on `createdAt`.

Sort:

```javascript
{
  createdAt: -1,
  _id: -1
}
```

Next-page predicate concept:

```javascript
{
  $or: [
    {
      createdAt: {
        $lt: lastCreatedAt
      }
    },
    {
      createdAt: lastCreatedAt,
      _id: {
        $lt: lastId
      }
    }
  ]
}
```

This creates stable ordering across equal timestamps.

## O. Data Ownership Rule

For every duplicated field, document which source owns the truth.

Example:

```text
customers.email = current customer email
orders.customer.email = historical order snapshot
```

Now duplication is intentional rather than accidental.

## P. Index Example From Access Patterns

Requirements:

```text
1. Find invoice by vendor + invoice number.
2. Show open invoices for approver newest first.
3. Search recent invoices for one tenant.
```

Possible indexes:

```javascript
db.invoices.createIndex(
  {
    tenantId: 1,
    vendorId: 1,
    invoiceNumber: 1
  },
  {
    unique: true
  }
)
```

```javascript
db.invoices.createIndex({
  tenantId: 1,
  approverId: 1,
  status: 1,
  createdAt: -1
})
```

```javascript
db.invoices.createIndex({
  tenantId: 1,
  createdAt: -1
})
```

Do not keep all proposed indexes automatically. Measure real workload and remove redundancy carefully.

## Q. Aggregation Thinking Framework

Requirement:

> Show top 10 customers by paid revenue in 2026.

Break down:

```text
1. Filter status
2. Filter date range
3. Group by customer
4. Sum total
5. Sort descending
6. Limit 10
7. Join customer details
8. Project response
```

Pipeline:

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "PAID",
      createdAt: {
        $gte: ISODate("2026-01-01T00:00:00Z"),
        $lt: ISODate("2027-01-01T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: "$customerId",
      revenue: { $sum: "$total" }
    }
  },
  { $sort: { revenue: -1 } },
  { $limit: 10 },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customer"
    }
  },
  { $unwind: "$customer" },
  {
    $project: {
      _id: 0,
      customerId: "$_id",
      customerName: "$customer.name",
      revenue: 1
    }
  }
])
```

The English → stages technique makes aggregation much easier.

## R. Naming Conventions

Possible consistent style:

```javascript
{
  customerId: ObjectId("..."),
  createdAt: ISODate("..."),
  updatedAt: ISODate("..."),
  isActive: true
}
```

Collections:

```text
users
orders
products
invoice_events
```

Avoid random mixing:

```text
CustomerID
customer_id
customerId
CUSTOMERID
```

unless integration constraints require it.

## S. Production Readiness Checklist

- [ ] Replica set / managed HA configured.
- [ ] Authentication enabled.
- [ ] Least-privilege users.
- [ ] TLS configured.
- [ ] Network exposure restricted.
- [ ] Secrets managed securely.
- [ ] Required indexes documented.
- [ ] Explain plans reviewed.
- [ ] Schema validation considered.
- [ ] Backups configured.
- [ ] Restore drill completed.
- [ ] Monitoring/alerts configured.
- [ ] Disk-capacity thresholds configured.
- [ ] Connection pools reviewed.
- [ ] Application timeouts configured.
- [ ] Retry/idempotency strategy documented.
- [ ] Upgrade process documented.
- [ ] Disaster recovery expectations documented.

## T. What to Learn Next

After mastering the core handbook, continue with:

```text
advanced aggregation
query planner behavior
index intersection
query settings
replica-set elections
oplog sizing
shard-key refinement
zones
balancer behavior
distributed transactions
change-stream resilience
backup automation
observability
Atlas administration
Atlas Search
Vector Search
data migration strategies
zero-downtime schema migrations
capacity planning
security hardening
```

The goal is not merely knowing commands. The goal is being able to answer:

> **How should we model, query, index, scale, secure, and operate this MongoDB workload safely?**

---

# 69. Official Learning References

For version-sensitive behavior, use the official MongoDB documentation as the source of truth.

Recommended official areas:

- MongoDB Manual
- CRUD Operations
- Data Modeling
- Aggregation Framework
- Indexes
- Schema Validation
- Transactions
- Replication
- Sharding
- Security
- Change Streams
- Time Series Collections
- Geospatial Queries
- MongoDB Drivers
- Release Notes

As software evolves, always check the documentation for the exact MongoDB server and driver versions used by your project.

---

# End of MongoDB Master Learning Handbook

Recommended practice ratio:

```text
Read    20%
Type    30%
Build   30%
Debug   20%
```

Do not only read. Build databases, create good and bad schemas, inspect query plans, test indexes, simulate growth, handle failures, and explain every design choice in your own words.
