# MSSQL / Microsoft SQL Server Master Handbook

> A single-file learning reference for Microsoft SQL Server and T-SQL, designed for beginners, developers, analysts, DBAs, and interview preparation.
>
> **Goal:** Learn not only *what* a SQL Server feature is, but *why it exists, when to use it, when not to use it, and how it behaves in real business scenarios*.

**Version note:** Reviewed on **2026-08-13** against Microsoft documentation for **SQL Server 2025 (17.x)**, the current major release at that time. Most core T-SQL examples also apply to earlier supported versions, but edition, compatibility-level, cloud-platform, and preview-feature differences are called out where they matter. Run write examples only in a disposable practice database.

---

# How to Use This Handbook

You do **not** need to memorize every command.

Use this handbook in four ways:

1. **Learning path** — read the chapters in order if you are new to SQL Server.
2. **Reference guide** — search for a topic such as `CTE`, `MERGE`, `ROW_NUMBER`, `deadlock`, or `index`.
3. **Practice guide** — run the examples in a test database.
4. **Interview handbook** — use the revision and interview sections near the end.

A good learning sequence is:

```text
SQL basics
   ↓
Tables + Data Types + Constraints
   ↓
SELECT + Filtering + Sorting
   ↓
Joins + Aggregation
   ↓
Subqueries + CTEs + Window Functions
   ↓
Stored Procedures + Functions + Views
   ↓
Transactions + Error Handling
   ↓
Indexes + Execution Plans + Performance
   ↓
Concurrency + Locks + Deadlocks
   ↓
Security + Backup + Administration
   ↓
Advanced SQL Server Features
```

---

# Table of Contents

1. [What is SQL Server?](#1-what-is-sql-server)
2. [SQL, T-SQL, MSSQL, SSMS and SQL Server](#2-sql-t-sql-mssql-ssms-and-sql-server)
3. [SQL Server Architecture](#3-sql-server-architecture)
4. [Installing and Connecting](#4-installing-and-connecting)
5. [Database Fundamentals](#5-database-fundamentals)
6. [Creating a Practice Database](#6-creating-a-practice-database)
7. [SQL Server Data Types](#7-sql-server-data-types)
8. [DDL, DML, DQL, DCL and TCL](#8-ddl-dml-dql-dcl-and-tcl)
9. [CREATE, ALTER, DROP and TRUNCATE](#9-create-alter-drop-and-truncate)
10. [Constraints](#10-constraints)
11. [INSERT](#11-insert)
12. [SELECT Fundamentals](#12-select-fundamentals)
13. [WHERE and Filtering](#13-where-and-filtering)
14. [ORDER BY and TOP](#14-order-by-and-top)
15. [UPDATE](#15-update)
16. [DELETE and TRUNCATE](#16-delete-and-truncate)
17. [Operators](#17-operators)
18. [NULL](#18-null)
19. [Built-in Functions](#19-built-in-functions)
20. [CASE Expressions](#20-case-expressions)
21. [Aggregate Functions](#21-aggregate-functions)
22. [GROUP BY and HAVING](#22-group-by-and-having)
23. [Joins](#23-joins)
24. [UNION, INTERSECT and EXCEPT](#24-union-intersect-and-except)
25. [Subqueries](#25-subqueries)
26. [EXISTS, IN and APPLY](#26-exists-in-and-apply)
27. [Common Table Expressions](#27-common-table-expressions)
28. [Recursive CTEs](#28-recursive-ctes)
29. [Window Functions](#29-window-functions)
30. [PIVOT and UNPIVOT](#30-pivot-and-unpivot)
31. [Temporary Tables, Table Variables and CTEs](#31-temporary-tables-table-variables-and-ctes)
32. [Views](#32-views)
33. [Stored Procedures](#33-stored-procedures)
34. [User-Defined Functions](#34-user-defined-functions)
35. [Triggers](#35-triggers)
36. [Transactions](#36-transactions)
37. [TRY/CATCH and Error Handling](#37-trycatch-and-error-handling)
38. [Transactions and Isolation Levels](#38-transactions-and-isolation-levels)
39. [Locks, Blocking and Deadlocks](#39-locks-blocking-and-deadlocks)
40. [Indexes](#40-indexes)
41. [Execution Plans](#41-execution-plans)
42. [Query Performance Tuning](#42-query-performance-tuning)
43. [Statistics and Cardinality](#43-statistics-and-cardinality)
44. [Normalization and Denormalization](#44-normalization-and-denormalization)
45. [Keys and Relationships](#45-keys-and-relationships)
46. [Identity, Sequence and GUID](#46-identity-sequence-and-guid)
47. [MERGE and Upsert Patterns](#47-merge-and-upsert-patterns)
48. [Dynamic SQL](#48-dynamic-sql)
49. [Pagination](#49-pagination)
50. [Date and Time Patterns](#50-date-and-time-patterns)
51. [String Processing](#51-string-processing)
52. [JSON in SQL Server](#52-json-in-sql-server)
53. [XML in SQL Server](#53-xml-in-sql-server)
54. [Transactions for Real Business Processes](#54-transactions-for-real-business-processes)
55. [Bulk Import and Export](#55-bulk-import-and-export)
56. [SQL Server Security](#56-sql-server-security)
57. [Schemas](#57-schemas)
58. [Backup and Restore](#58-backup-and-restore)
59. [Recovery Models](#59-recovery-models)
60. [SQL Server Agent](#60-sql-server-agent)
61. [Database Maintenance](#61-database-maintenance)
62. [Monitoring and Troubleshooting](#62-monitoring-and-troubleshooting)
63. [DMVs](#63-dmvs)
64. [Query Store](#64-query-store)
65. [Change Tracking and CDC](#65-change-tracking-and-cdc)
66. [Temporal Tables](#66-temporal-tables)
67. [Computed Columns](#67-computed-columns)
68. [Partitioning](#68-partitioning)
69. [Columnstore Indexes](#69-columnstore-indexes)
70. [Full-Text Search](#70-full-text-search)
71. [Linked Servers](#71-linked-servers)
72. [Service Broker Overview](#72-service-broker-overview)
73. [High Availability Concepts](#73-high-availability-concepts)
74. [SQL Server Development Best Practices](#74-sql-server-development-best-practices)
75. [Common Anti-Patterns](#75-common-anti-patterns)
76. [Real-World Scenario Examples](#76-real-world-scenario-examples)
77. [Interview Questions and Answers](#77-interview-questions-and-answers)
78. [Practice Exercises](#78-practice-exercises)
79. [Project Ideas](#79-project-ideas)
80. [MSSQL Learning Roadmap](#80-mssql-learning-roadmap)
81. [Quick Revision Cheat Sheet](#81-quick-revision-cheat-sheet)

---

# 1. What is SQL Server?

**Microsoft SQL Server** is a relational database management system (RDBMS).

Its job is to safely store, retrieve, modify, secure, and manage structured data.

Typical SQL Server applications include:

- ERP systems
- Finance systems
- Invoice-processing applications
- HR systems
- Manufacturing systems
- E-commerce applications
- Banking applications
- Reporting systems
- Data warehouses
- APIs and backend applications

A SQL Server database can contain:

```text
Database
├── Schemas
├── Tables
├── Views
├── Stored Procedures
├── Functions
├── Triggers
├── Indexes
├── Constraints
├── Users
└── Other database objects
```

Example:

An e-commerce system may store:

```text
Customer
Order
OrderItem
Product
Payment
Shipment
```

Instead of keeping everything in Excel files, SQL Server provides:

- data integrity
- concurrency
- transactions
- security
- indexing
- backup
- recovery
- automation
- query optimization

---

# 2. SQL, T-SQL, MSSQL, SSMS and SQL Server

These terms are often confused.

## SQL

**SQL = Structured Query Language**

It is the language used to work with relational databases.

Example:

```sql
SELECT *
FROM Employees;
```

## T-SQL

**T-SQL = Transact-SQL**

T-SQL is Microsoft's extension of SQL.

It adds features such as:

- variables
- loops
- `IF`
- `TRY/CATCH`
- stored procedures
- SQL Server-specific functions
- transactions
- error handling

Example:

```sql
DECLARE @Salary DECIMAL(12,2) = 50000;

IF @Salary > 40000
    PRINT 'Senior salary range';
ELSE
    PRINT 'Standard salary range';
```

## SQL Server

SQL Server is the actual database engine.

## MSSQL

"MSSQL" is an informal/common way of referring to Microsoft SQL Server.

## SSMS

**SQL Server Management Studio** is a graphical management application used to:

- connect to SQL Server
- write queries
- manage databases
- configure security
- view execution plans
- inspect jobs
- manage backups

Important:

```text
SSMS ≠ SQL Server
```

SSMS is a client/management application.  
SQL Server is the database engine.

---

# 3. SQL Server Architecture

Understanding the architecture helps when learning performance and administration.

## 3.1 SQL Server Instance

One machine can host one or more SQL Server instances.

Examples:

```text
SERVER01
SERVER01\DEV
SERVER01\TEST
```

Each instance has its own:

- databases
- configuration
- logins
- SQL Server Agent jobs
- memory settings
- services

## 3.2 Database Engine

The Database Engine handles:

- T-SQL execution
- transactions
- storage
- locking
- indexing
- query optimization
- security

## 3.3 Relational Engine

The relational engine deals with logical query processing.

It includes:

- parser
- algebrizer
- optimizer
- executor

Simplified:

```text
SQL Query
   ↓
Parse
   ↓
Validate Objects
   ↓
Optimize
   ↓
Execution Plan
   ↓
Execute
```

## 3.4 Storage Engine

The storage engine handles:

- data pages
- indexes
- buffer cache
- transaction log
- locking
- physical I/O

## 3.5 Pages and Extents

SQL Server stores data primarily in **8 KB pages**.

An **extent** contains 8 pages.

```text
Page = 8 KB
Extent = 8 pages = 64 KB
```

You normally do not manage pages manually, but they become important in performance tuning.

## 3.6 MDF, NDF and LDF

Typical database files:

| Type | Meaning |
|---|---|
| `.mdf` | Primary data file |
| `.ndf` | Secondary data file |
| `.ldf` | Transaction log file |

Example:

```text
CompanyDB.mdf
CompanyDB_log.ldf
```

## 3.7 Transaction Log

Every important data modification is recorded in the transaction log.

It allows SQL Server to support:

- rollback
- crash recovery
- transaction consistency
- log backups
- point-in-time recovery

---

# 4. Installing and Connecting

Typical SQL Server learning tools:

- SQL Server Developer Edition
- SQL Server Express
- SQL Server Management Studio
- Visual Studio Code with the MSSQL extension
- `sqlcmd`

Azure Data Studio retired on **2026-02-28** and no longer receives support or security fixes. Existing users should migrate queries, connections, and database-project work to supported tooling such as the MSSQL extension for Visual Studio Code.

For learning, **Developer Edition** is commonly suitable because it exposes enterprise-level functionality for non-production development/testing.

Connection information usually includes:

```text
Server Name
Authentication Type
Username
Password
Database
```

Example connection names:

```text
localhost
.
.\SQLEXPRESS
MYSERVER
MYSERVER\SQL2022
```

Test the connection:

```sql
SELECT @@SERVERNAME AS ServerName;
SELECT @@VERSION AS VersionInfo;
SELECT DB_NAME() AS CurrentDatabase;
```

---

# 5. Database Fundamentals

Create database:

```sql
CREATE DATABASE CompanyDB;
GO
```

Use database:

```sql
USE CompanyDB;
GO
```

List databases:

```sql
SELECT name
FROM sys.databases;
```

Delete a database:

```sql
DROP DATABASE CompanyDB;
```

Never casually execute `DROP DATABASE` in production.

---

# 6. Creating a Practice Database

This handbook uses a reusable business schema.

```sql
CREATE DATABASE MSSQLPractice;
GO

USE MSSQLPractice;
GO
```

## Departments

```sql
CREATE TABLE dbo.Departments
(
    DepartmentId INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL UNIQUE
);
```

## Employees

```sql
CREATE TABLE dbo.Employees
(
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeCode VARCHAR(20) NOT NULL UNIQUE,
    FullName VARCHAR(150) NOT NULL,
    Email VARCHAR(200) NULL,
    DepartmentId INT NULL,
    ManagerId INT NULL,
    Salary DECIMAL(12,2) NOT NULL,
    JoiningDate DATE NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT FK_Employees_Departments
        FOREIGN KEY (DepartmentId)
        REFERENCES dbo.Departments(DepartmentId),

    CONSTRAINT FK_Employees_Manager
        FOREIGN KEY (ManagerId)
        REFERENCES dbo.Employees(EmployeeId),

    CONSTRAINT CK_Employees_Salary
        CHECK (Salary >= 0)
);
```

## Customers

```sql
CREATE TABLE dbo.Customers
(
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerName VARCHAR(150) NOT NULL,
    Email VARCHAR(200),
    City VARCHAR(100),
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);
```

## Products

```sql
CREATE TABLE dbo.Products
(
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(150) NOT NULL,
    UnitPrice DECIMAL(12,2) NOT NULL,
    StockQty INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1
);
```

## Orders

```sql
CREATE TABLE dbo.Orders
(
    OrderId BIGINT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    OrderDate DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Status VARCHAR(30) NOT NULL DEFAULT 'NEW',
    TotalAmount DECIMAL(14,2) NOT NULL DEFAULT 0,

    CONSTRAINT FK_Orders_Customers
        FOREIGN KEY (CustomerId)
        REFERENCES dbo.Customers(CustomerId)
);
```

## Order Items

```sql
CREATE TABLE dbo.OrderItems
(
    OrderItemId BIGINT IDENTITY(1,1) PRIMARY KEY,
    OrderId BIGINT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(12,2) NOT NULL,

    CONSTRAINT FK_OrderItems_Orders
        FOREIGN KEY (OrderId)
        REFERENCES dbo.Orders(OrderId),

    CONSTRAINT FK_OrderItems_Products
        FOREIGN KEY (ProductId)
        REFERENCES dbo.Products(ProductId),

    CONSTRAINT CK_OrderItems_Quantity
        CHECK (Quantity > 0)
);
```

Seed data:

```sql
INSERT INTO dbo.Departments (DepartmentName)
VALUES ('IT'), ('Finance'), ('HR'), ('Operations');

INSERT INTO dbo.Employees
(
    EmployeeCode,
    FullName,
    Email,
    DepartmentId,
    Salary,
    JoiningDate
)
VALUES
('E001', 'Aarav Mehta', 'aarav@example.com', 1, 65000, '2022-01-15'),
('E002', 'Sara Khan',   'sara@example.com',  2, 58000, '2023-04-10'),
('E003', 'Rohan Shah',  'rohan@example.com', 1, 75000, '2021-08-01'),
('E004', 'Neha Patil',  'neha@example.com',  3, 52000, '2024-02-20');

INSERT INTO dbo.Customers (CustomerName, Email, City)
VALUES
('Alpha Traders', 'alpha@example.com', 'Mumbai'),
('Bright Retail', 'bright@example.com', 'Pune'),
('Crown Systems', 'crown@example.com', 'Delhi');

INSERT INTO dbo.Products (ProductName, UnitPrice, StockQty)
VALUES
('Laptop', 60000, 25),
('Monitor', 15000, 50),
('Keyboard', 1500, 100),
('Mouse', 800, 150);
```

---

# 7. SQL Server Data Types

Choosing the correct data type matters for:

- storage
- performance
- accuracy
- indexing
- validation

## 7.1 Integer Types

| Data Type | Typical Use |
|---|---|
| `TINYINT` | small numeric codes |
| `SMALLINT` | medium-small ranges |
| `INT` | most IDs/counts |
| `BIGINT` | very large IDs/counts |

Example:

```sql
Age TINYINT
EmployeeId INT
OrderId BIGINT
```

Do not use `BIGINT` everywhere without reason.

## 7.2 Decimal and Numeric

Use:

```sql
DECIMAL(precision, scale)
```

Example:

```sql
Salary DECIMAL(12,2)
```

`DECIMAL(12,2)` allows 12 total digits, including 2 after the decimal point.

Good for:

- money
- tax
- quantities requiring exact decimal precision

## 7.3 FLOAT and REAL

These are approximate numeric types.

Use for scientific calculations where approximation is acceptable.

Avoid for exact financial values.

Bad:

```sql
InvoiceAmount FLOAT
```

Better:

```sql
InvoiceAmount DECIMAL(18,2)
```

## 7.4 MONEY

SQL Server supports `MONEY`, but many systems prefer `DECIMAL` for clearer precision control.

## 7.5 Character Data

| Type | Notes |
|---|---|
| `CHAR(n)` | fixed length |
| `VARCHAR(n)` | variable length |
| `VARCHAR(MAX)` | large variable text |
| `NCHAR(n)` | Unicode fixed length |
| `NVARCHAR(n)` | Unicode variable length |
| `NVARCHAR(MAX)` | large Unicode text |

Use Unicode types when multilingual text matters.

Example:

```sql
CustomerName NVARCHAR(150)
```

## 7.6 Date and Time

Common choices:

```text
DATE
TIME
DATETIME
DATETIME2
SMALLDATETIME
DATETIMEOFFSET
```

For new development, `DATETIME2` is usually preferred over legacy `DATETIME`.

Example:

```sql
CreatedAt DATETIME2(3)
```

## 7.7 BIT

Boolean-like field:

```sql
IsActive BIT
```

Values:

```text
0
1
NULL
```

## 7.8 UNIQUEIDENTIFIER

Stores GUID values.

```sql
DocumentId UNIQUEIDENTIFIER
```

Example:

```sql
SELECT NEWID();
```

## 7.9 BINARY and VARBINARY

Used for binary values.

Example:

```sql
FileHash VARBINARY(32)
```

Usually store large files in dedicated object/file storage unless database storage is an intentional design decision.

## 7.10 XML

SQL Server has a native `XML` data type.

## 7.11 JSON

SQL Server 2016 and later can store JSON text in types such as `NVARCHAR(MAX)` and use functions including `ISJSON`, `JSON_VALUE`, `JSON_QUERY`, and `OPENJSON`. SQL Server 2025 also provides a native binary `JSON` data type. Choose based on the deployed version and compatibility requirements; JSON is useful for document-shaped payloads, but stable relational attributes still belong in typed columns when they need constraints, joins, or ordinary indexing.

---

# 8. DDL, DML, DQL, DCL and TCL

These labels are teaching categories rather than separate SQL Server execution modes. Some references classify `SELECT` as DML instead of using the informal `DQL` label; the command's behavior does not change.

## DDL — Data Definition Language

Used to define database structures.

Examples:

```sql
CREATE
ALTER
DROP
TRUNCATE
```

## DML — Data Manipulation Language

Used to modify rows.

Examples:

```sql
INSERT
UPDATE
DELETE
MERGE
```

## DQL — Data Query Language

Used to retrieve rows without modifying them. The main command is `SELECT`; it returns a result set to the client:

```sql
SELECT
```

## DCL — Data Control Language

Examples:

```sql
GRANT
DENY
REVOKE
```

## TCL — Transaction Control Language

Examples:

```sql
BEGIN TRANSACTION
COMMIT
ROLLBACK
SAVE TRANSACTION
```

---

# 9. CREATE, ALTER, DROP and TRUNCATE

## CREATE

```sql
CREATE TABLE dbo.Test
(
    Id INT PRIMARY KEY,
    Name VARCHAR(100)
);
```

## ALTER

Add column:

```sql
ALTER TABLE dbo.Test
ADD Email VARCHAR(200);
```

Change column:

```sql
ALTER TABLE dbo.Test
ALTER COLUMN Name VARCHAR(200) NOT NULL;
```

Drop column:

```sql
ALTER TABLE dbo.Test
DROP COLUMN Email;
```

## DROP

Removes the object.

```sql
DROP TABLE dbo.Test;
```

## TRUNCATE

Removes all rows while keeping the table definition. SQL Server deallocates data pages rather than logging a separate delete for every row, resets an identity seed, does not accept `WHERE`, and does not fire `DELETE` triggers. It can be rolled back when run inside an explicit transaction, but restrictions apply when another table references the target with a foreign key.

```sql
TRUNCATE TABLE dbo.StageImport;
```

Use `DELETE` when you need selected rows, delete-trigger behavior, or fewer foreign-key restrictions. Use `TRUNCATE` only when the business operation truly means “empty this entire table.” Both operations are destructive and require appropriate permission.

---

# 10. Constraints

Constraints protect data quality.

## 10.1 PRIMARY KEY

Uniquely identifies each row.

```sql
EmployeeId INT PRIMARY KEY
```

Properties:

- unique
- not null
- normally indexed

## 10.2 FOREIGN KEY

Maintains relationship integrity.

```sql
CONSTRAINT FK_Employee_Department
FOREIGN KEY (DepartmentId)
REFERENCES dbo.Departments(DepartmentId)
```

Without a foreign key, an employee could reference a department that does not exist.

## 10.3 UNIQUE

```sql
Email VARCHAR(200) UNIQUE
```

Useful for:

- employee code
- username
- invoice number within a defined business scope

## 10.4 CHECK

```sql
CHECK (Salary >= 0)
```

Example invoice rule:

```sql
CHECK (InvoiceAmount > 0)
```

## 10.5 DEFAULT

```sql
IsActive BIT NOT NULL DEFAULT 1
```

A default supplies a value only when an `INSERT` omits the column or explicitly uses the `DEFAULT` keyword. It does not replace an explicitly supplied `NULL`, and adding a default does not automatically update existing rows unless the `ALTER TABLE` statement requests that behavior.

## 10.6 NOT NULL

```sql
FullName VARCHAR(150) NOT NULL
```

Means the value is mandatory.

---

# 11. INSERT

`INSERT` adds rows and reports the affected-row count to the client unless `SET NOCOUNT ON` suppresses that message. Always name target columns so a later schema change does not silently change value-to-column mapping.

Single row:

```sql
INSERT INTO dbo.Departments (DepartmentName)
VALUES ('Legal');
```

Multiple rows:

```sql
INSERT INTO dbo.Departments (DepartmentName)
VALUES
('Sales'),
('Marketing'),
('Quality');
```

Insert from another table:

```sql
INSERT INTO dbo.EmployeeArchive
(
    EmployeeId,
    FullName
)
SELECT
    EmployeeId,
    FullName
FROM dbo.Employees
WHERE IsActive = 0;
```

Return inserted values:

```sql
INSERT INTO dbo.Customers (CustomerName, City)
OUTPUT inserted.CustomerId, inserted.CustomerName
VALUES ('Demo Customer', 'Mumbai');
```

`OUTPUT inserted...` returns values from the row as stored, including generated identity values and defaults. For example, the result might be:

```text
CustomerId  CustomerName
----------  -------------
42          Demo Customer
```

---

# 12. SELECT Fundamentals

Return all columns:

```sql
SELECT *
FROM dbo.Employees;
```

Prefer explicit columns in production code:

```sql
SELECT
    EmployeeId,
    EmployeeCode,
    FullName,
    Salary
FROM dbo.Employees;
```

Why avoid `SELECT *`?

- retrieves unnecessary columns
- makes APIs fragile
- can increase I/O
- makes code harder to review
- may prevent efficient covering indexes

Aliases:

```sql
SELECT
    FullName AS EmployeeName,
    Salary AS MonthlySalary
FROM dbo.Employees;
```

Expressions:

```sql
SELECT
    FullName,
    Salary,
    Salary * 12 AS AnnualSalary
FROM dbo.Employees;
```

DISTINCT:

```sql
SELECT DISTINCT City
FROM dbo.Customers;
```

Use `DISTINCT` intentionally, not as a bandage for incorrect joins.

---

# 13. WHERE and Filtering

Equality:

```sql
SELECT *
FROM dbo.Employees
WHERE DepartmentId = 1;
```

Comparison:

```sql
SELECT *
FROM dbo.Employees
WHERE Salary >= 60000;
```

Multiple conditions:

```sql
SELECT *
FROM dbo.Employees
WHERE DepartmentId = 1
  AND Salary >= 60000;
```

OR:

```sql
SELECT *
FROM dbo.Customers
WHERE City = 'Mumbai'
   OR City = 'Pune';
```

IN:

```sql
SELECT *
FROM dbo.Customers
WHERE City IN ('Mumbai', 'Pune', 'Delhi');
```

BETWEEN:

```sql
SELECT *
FROM dbo.Employees
WHERE Salary BETWEEN 50000 AND 70000;
```

Remember `BETWEEN` is inclusive.

LIKE:

```sql
SELECT *
FROM dbo.Employees
WHERE FullName LIKE 'A%';
```

Patterns:

```text
'A%'   starts with A
'%A'   ends with A
'%ar%' contains ar
'_a%'  second character is a
```

---

# 14. ORDER BY and TOP

Sort ascending:

```sql
SELECT FullName, Salary
FROM dbo.Employees
ORDER BY Salary ASC;
```

Descending:

```sql
SELECT FullName, Salary
FROM dbo.Employees
ORDER BY Salary DESC;
```

Top 3 highest salaries:

```sql
SELECT TOP (3)
    FullName,
    Salary
FROM dbo.Employees
ORDER BY Salary DESC;
```

Percentage:

```sql
SELECT TOP (10) PERCENT *
FROM dbo.Employees
ORDER BY Salary DESC;
```

Use deterministic ordering when result order matters.

If salaries can tie, add a unique tie-breaker:

```sql
ORDER BY Salary DESC, EmployeeId ASC;
```

Without `ORDER BY`, SQL Server does not promise which rows qualify as the “top” rows or what order a result set uses.

---

# 15. UPDATE

Update one employee:

```sql
UPDATE dbo.Employees
SET Salary = 70000
WHERE EmployeeId = 1;
```

Immediately after the statement, `@@ROWCOUNT` reports how many rows SQL Server affected. Applications should also validate expected row counts—for example, zero rows may mean the employee does not exist, while more than one row may expose an unsafe filter.

Multiple columns:

```sql
UPDATE dbo.Employees
SET
    Salary = 72000,
    IsActive = 1
WHERE EmployeeId = 1;
```

Danger:

```sql
UPDATE dbo.Employees
SET Salary = 0;
```

This updates every row.

Safe habit:

```sql
SELECT *
FROM dbo.Employees
WHERE EmployeeId = 1;

UPDATE dbo.Employees
SET Salary = 70000
WHERE EmployeeId = 1;
```

For important manual production updates, consider a transaction:

```sql
BEGIN TRANSACTION;

UPDATE dbo.Employees
SET Salary = 70000
WHERE EmployeeId = 1;

SELECT *
FROM dbo.Employees
WHERE EmployeeId = 1;

-- COMMIT;
-- ROLLBACK;
```

---

# 16. DELETE and TRUNCATE

DELETE selected rows:

```sql
DELETE FROM dbo.Employees
WHERE IsActive = 0;
```

DELETE all rows:

```sql
DELETE FROM dbo.StageImport;
```

TRUNCATE all rows:

```sql
TRUNCATE TABLE dbo.StageImport;
```

## DELETE vs TRUNCATE

| Feature | DELETE | TRUNCATE |
|---|---|---|
| WHERE supported | Yes | No |
| Removes selected rows | Yes | No |
| Removes all rows | Yes | Yes |
| Identity reset | Usually no | Yes |
| Row-level delete triggers | Yes | No |
| Logging pattern | Row-oriented | More minimal allocation deallocation |
| Foreign-key limitations | Fewer | More restrictive |

Do not decide only based on speed.  
Choose based on semantics and constraints.

---

# 17. Operators

## Arithmetic

```sql
+ - * / %
```

Example:

```sql
SELECT 10 + 5;
SELECT 10 % 3;
```

## Comparison

| Operator | Meaning |
|---|---|
| `=` | equal |
| `<>` or `!=` | not equal |
| `>` / `>=` | greater than / greater than or equal |
| `<` / `<=` | less than / less than or equal |

A comparison involving `NULL` normally evaluates to unknown rather than true. Use `IS NULL` or `IS NOT NULL` for null tests.

## Logical

`AND` requires both predicates to be true, `OR` requires at least one, and `NOT` negates a predicate. Because `AND` has higher precedence than `OR`, use parentheses whenever mixed conditions could be misunderstood:

```sql
WHERE IsActive = 1
  AND (DepartmentId = 2 OR DepartmentId = 5);
```

## Assignment

```sql
SET @x = 10;
```

---

# 18. NULL

`NULL` means **unknown / missing**, not zero and not an empty string.

Incorrect:

```sql
WHERE Email = NULL
```

Correct:

```sql
WHERE Email IS NULL
```

Not null:

```sql
WHERE Email IS NOT NULL
```

## ISNULL

```sql
SELECT
    FullName,
    ISNULL(Email, 'No Email') AS Email
FROM dbo.Employees;
```

## COALESCE

```sql
SELECT COALESCE(WorkEmail, PersonalEmail, 'No Email')
FROM dbo.People;
```

`COALESCE` returns the first non-null expression.

`ISNULL(expression, replacement)` is a two-argument SQL Server function; `COALESCE(a, b, c, ...)` is a standard SQL expression that can test several alternatives. They can infer result types and nullability differently, so check the returned data type when mixing lengths or numeric types rather than treating them as interchangeable syntax.

## NULL arithmetic

```sql
SELECT 100 + NULL;
```

Result:

```text
NULL
```

Handle nullable values intentionally.

---

# 19. Built-in Functions

SQL Server provides many built-in functions.

## 19.1 String Functions

```sql
SELECT LEN('SQL Server');
SELECT UPPER('sql');
SELECT LOWER('SQL');
SELECT LTRIM('  test');
SELECT RTRIM('test  ');
SELECT TRIM('  test  ');
SELECT LEFT('ABCDEFG', 3);
SELECT RIGHT('ABCDEFG', 3);
SELECT SUBSTRING('ABCDEFG', 2, 3);
SELECT REPLACE('A-B-C', '-', '/');
SELECT CHARINDEX('Server', 'SQL Server');
SELECT CONCAT('SQL', ' ', 'Server');
```

## 19.2 Numeric Functions

```sql
SELECT ABS(-100);
SELECT ROUND(123.4567, 2);
SELECT CEILING(10.2);
SELECT FLOOR(10.9);
SELECT POWER(2, 3);
```

## 19.3 Date Functions

```sql
SELECT GETDATE();
SELECT SYSDATETIME();
SELECT GETUTCDATE();
SELECT YEAR(GETDATE());
SELECT MONTH(GETDATE());
SELECT DAY(GETDATE());
SELECT DATEADD(DAY, 7, GETDATE());
SELECT DATEDIFF(DAY, '2026-01-01', '2026-02-01');
SELECT EOMONTH(GETDATE());
```

## 19.4 Conversion

```sql
SELECT CAST('100' AS INT);
SELECT CONVERT(DATE, '2026-08-12');
```

Safer conversions:

```sql
SELECT TRY_CAST('ABC' AS INT);
SELECT TRY_CONVERT(DATE, 'invalid');
```

Instead of failing, `TRY_CAST` and `TRY_CONVERT` return `NULL`.

That makes them useful for validation and staged imports, but it can also hide bad input if `NULL` is accepted silently. Count or quarantine failed conversions before loading production tables.

---

# 20. CASE Expressions

CASE allows conditional logic inside queries.

```sql
SELECT
    FullName,
    Salary,
    CASE
        WHEN Salary >= 70000 THEN 'High'
        WHEN Salary >= 50000 THEN 'Medium'
        ELSE 'Low'
    END AS SalaryBand
FROM dbo.Employees;
```

Real scenario: invoice status:

```sql
SELECT
    InvoiceId,
    CASE
        WHEN IsPosted = 1 THEN 'Posted'
        WHEN IsApproved = 1 THEN 'Approved'
        WHEN IsRejected = 1 THEN 'Rejected'
        ELSE 'Pending'
    END AS InvoiceStatus
FROM dbo.Invoices;
```

CASE can be used in:

- SELECT
- ORDER BY
- GROUP BY expressions
- aggregates
- updates

Conditional aggregate:

```sql
SELECT
    COUNT(*) AS Total,
    SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END) AS ActiveCount
FROM dbo.Employees;
```

---

# 21. Aggregate Functions

Common aggregate functions:

```text
COUNT
SUM
AVG
MIN
MAX
```

Examples:

```sql
SELECT COUNT(*) AS EmployeeCount
FROM dbo.Employees;
```

```sql
SELECT SUM(Salary) AS TotalMonthlyPayroll
FROM dbo.Employees;
```

```sql
SELECT AVG(Salary) AS AverageSalary
FROM dbo.Employees;
```

Important:

```sql
COUNT(*)          -- counts rows
COUNT(ColumnName) -- ignores NULL values
```

---

# 22. GROUP BY and HAVING

Group employees by department:

```sql
SELECT
    DepartmentId,
    COUNT(*) AS EmployeeCount,
    AVG(Salary) AS AverageSalary
FROM dbo.Employees
GROUP BY DepartmentId;
```

Filter groups:

```sql
SELECT
    DepartmentId,
    COUNT(*) AS EmployeeCount
FROM dbo.Employees
GROUP BY DepartmentId
HAVING COUNT(*) >= 2;
```

## WHERE vs HAVING

`WHERE` filters rows **before grouping**.

`HAVING` filters groups **after grouping**.

Example:

```sql
SELECT
    DepartmentId,
    AVG(Salary) AS AvgSalary
FROM dbo.Employees
WHERE IsActive = 1
GROUP BY DepartmentId
HAVING AVG(Salary) > 55000;
```

---

# 23. Joins

Joins combine related tables.

## 23.1 INNER JOIN

Returns matched rows.

```sql
SELECT
    e.FullName,
    d.DepartmentName
FROM dbo.Employees e
INNER JOIN dbo.Departments d
    ON d.DepartmentId = e.DepartmentId;
```

Use when you only want employees having valid department matches.

## 23.2 LEFT JOIN

Returns all rows from the left table.

```sql
SELECT
    e.FullName,
    d.DepartmentName
FROM dbo.Employees e
LEFT JOIN dbo.Departments d
    ON d.DepartmentId = e.DepartmentId;
```

Employees without departments still appear.

Predicates on the right table usually belong in `ON` when unmatched left rows must remain. This query preserves every employee but matches only active departments:

```sql
SELECT e.FullName, d.DepartmentName
FROM dbo.Employees AS e
LEFT JOIN dbo.Departments AS d
    ON d.DepartmentId = e.DepartmentId
   AND d.IsActive = 1;
```

Moving `d.IsActive = 1` to `WHERE` would reject rows where `d` is `NULL`, effectively changing this part of the query to inner-join behavior.

## 23.3 RIGHT JOIN

Returns all rows from the right table.

Usually a `LEFT JOIN` written in reverse is easier to read.

## 23.4 FULL OUTER JOIN

Returns:

- matches
- unmatched left rows
- unmatched right rows

Useful in reconciliation scenarios.

Example: compare yesterday vs today source files.

```sql
SELECT
    a.InvoiceNo AS SourceAInvoice,
    b.InvoiceNo AS SourceBInvoice
FROM dbo.SourceA a
FULL OUTER JOIN dbo.SourceB b
    ON b.InvoiceNo = a.InvoiceNo;
```

## 23.5 CROSS JOIN

Every row combines with every row.

If table A has 3 rows and table B has 4 rows:

```text
3 × 4 = 12 rows
```

Example:

```sql
SELECT
    c.ColorName,
    s.SizeName
FROM dbo.Colors c
CROSS JOIN dbo.Sizes s;
```

Useful for generating combinations.

## 23.6 SELF JOIN

A table joined to itself.

Employee-manager example:

```sql
SELECT
    e.FullName AS Employee,
    m.FullName AS Manager
FROM dbo.Employees e
LEFT JOIN dbo.Employees m
    ON m.EmployeeId = e.ManagerId;
```

## Common Join Error: Duplicate Explosion

Suppose:

```text
Orders has 1 row
OrderItems has 5 rows
Payments has 2 rows
```

Joining both child tables directly can produce:

```text
5 × 2 = 10 rows
```

This can incorrectly multiply totals.

Fix by:

- aggregating child tables first
- joining at compatible granularity
- understanding table relationships

---

# 24. UNION, INTERSECT and EXCEPT

Each input query must return the same number of columns in the same positions, with compatible data types. Output column names come from the first query. These operators compare complete result rows, not just the first column.

## UNION

Combines result sets and removes duplicates.

```sql
SELECT Email FROM dbo.Employees
UNION
SELECT Email FROM dbo.Customers;
```

## UNION ALL

Keeps duplicates and is normally cheaper.

```sql
SELECT Email FROM dbo.Employees
UNION ALL
SELECT Email FROM dbo.Customers;
```

Use `UNION ALL` unless duplicate removal is actually required.

## INTERSECT

Returns common rows.

```sql
SELECT Email FROM dbo.Employees
INTERSECT
SELECT Email FROM dbo.Customers;
```

## EXCEPT

Returns rows in first query but not second.

```sql
SELECT Email FROM dbo.Employees
EXCEPT
SELECT Email FROM dbo.Customers;
```

Useful for reconciliation.

---

# 25. Subqueries

A subquery is a query inside another query.

## Scalar Subquery

A scalar subquery must return at most one value: zero rows becomes `NULL`, one row supplies the value, and more than one row raises an error. Use an aggregate or a predicate that guarantees uniqueness when the outer query requires one value.

```sql
SELECT
    FullName,
    Salary,
    (SELECT AVG(Salary) FROM dbo.Employees) AS CompanyAverage
FROM dbo.Employees;
```

## Filter Subquery

```sql
SELECT *
FROM dbo.Employees
WHERE Salary >
(
    SELECT AVG(Salary)
    FROM dbo.Employees
);
```

## Correlated Subquery

Runs logically with reference to the outer row.

```sql
SELECT
    e.EmployeeId,
    e.FullName
FROM dbo.Employees e
WHERE Salary >
(
    SELECT AVG(e2.Salary)
    FROM dbo.Employees e2
    WHERE e2.DepartmentId = e.DepartmentId
);
```

This returns employees earning more than their department average.

---

# 26. EXISTS, IN and APPLY

## EXISTS

Checks whether matching rows exist.

```sql
SELECT c.*
FROM dbo.Customers c
WHERE EXISTS
(
    SELECT 1
    FROM dbo.Orders o
    WHERE o.CustomerId = c.CustomerId
);
```

Business meaning:

> Return customers who have at least one order.

## NOT EXISTS

```sql
SELECT c.*
FROM dbo.Customers c
WHERE NOT EXISTS
(
    SELECT 1
    FROM dbo.Orders o
    WHERE o.CustomerId = c.CustomerId
);
```

Returns customers who never ordered.

## IN

```sql
SELECT *
FROM dbo.Employees
WHERE DepartmentId IN (1, 2, 3);
```

`IN` is excellent for simple membership checks.

For anti-joins, `NOT EXISTS` is often easier to reason about around nullability than `NOT IN`.

## CROSS APPLY

`APPLY` is powerful when the right side depends on each row from the left side.

Example: latest order for each customer:

```sql
SELECT
    c.CustomerId,
    c.CustomerName,
    x.OrderId,
    x.OrderDate
FROM dbo.Customers c
CROSS APPLY
(
    SELECT TOP (1)
        o.OrderId,
        o.OrderDate
    FROM dbo.Orders o
    WHERE o.CustomerId = c.CustomerId
    ORDER BY o.OrderDate DESC
) x;
```

`CROSS APPLY` removes customers having no matching right-side row.

## OUTER APPLY

Keeps left-side rows even when the dependent right-side query returns no row. In the “latest order per customer” example, replacing `CROSS APPLY` with `OUTER APPLY` returns customers without orders and supplies `NULL` for their order columns. Use `APPLY` for table-valued functions or correlated top-N logic; use an ordinary join when the right side does not depend on each left row.

---

# 27. Common Table Expressions

A CTE makes complex queries easier to read.

```sql
WITH HighSalaryEmployees AS
(
    SELECT
        EmployeeId,
        FullName,
        Salary
    FROM dbo.Employees
    WHERE Salary >= 60000
)
SELECT *
FROM HighSalaryEmployees;
```

A CTE is not automatically a persisted temporary result.

Think of it primarily as a query-expression organization feature.

Useful for:

- readable multi-step queries
- recursion
- window-function filtering
- complex reporting

Multiple CTEs:

```sql
WITH ActiveEmployees AS
(
    SELECT *
    FROM dbo.Employees
    WHERE IsActive = 1
),
DeptSummary AS
(
    SELECT
        DepartmentId,
        COUNT(*) AS EmployeeCount
    FROM ActiveEmployees
    GROUP BY DepartmentId
)
SELECT *
FROM DeptSummary;
```

---

# 28. Recursive CTEs

Recursive CTEs can traverse hierarchical data.

Employee hierarchy:

```sql
WITH EmployeeHierarchy AS
(
    SELECT
        EmployeeId,
        FullName,
        ManagerId,
        0 AS LevelNo
    FROM dbo.Employees
    WHERE ManagerId IS NULL

    UNION ALL

    SELECT
        e.EmployeeId,
        e.FullName,
        e.ManagerId,
        h.LevelNo + 1
    FROM dbo.Employees e
    INNER JOIN EmployeeHierarchy h
        ON e.ManagerId = h.EmployeeId
)
SELECT *
FROM EmployeeHierarchy;
```

Use cases:

- organization hierarchy
- bill of materials
- folder trees
- category trees
- approval hierarchies

Protect against accidental infinite recursion caused by bad data.

---

# 29. Window Functions

Window functions are among the most important advanced SQL topics.

They calculate values across related rows **without collapsing rows like GROUP BY**.

## ROW_NUMBER

```sql
SELECT
    EmployeeId,
    FullName,
    DepartmentId,
    Salary,
    ROW_NUMBER() OVER
    (
        PARTITION BY DepartmentId
        ORDER BY Salary DESC
    ) AS RowNo
FROM dbo.Employees;
```

Use case: top employee per department.

```sql
WITH Ranked AS
(
    SELECT
        *,
        ROW_NUMBER() OVER
        (
            PARTITION BY DepartmentId
            ORDER BY Salary DESC
        ) AS rn
    FROM dbo.Employees
)
SELECT *
FROM Ranked
WHERE rn = 1;
```

## RANK

Tied values get the same rank and gaps appear.

Example:

```text
1
2
2
4
```

## DENSE_RANK

No gaps:

```text
1
2
2
3
```

## LAG

Previous row value:

```sql
SELECT
    OrderDate,
    TotalAmount,
    LAG(TotalAmount) OVER (ORDER BY OrderDate) AS PreviousAmount
FROM dbo.Orders;
```

## LEAD

`LEAD(expression, offset?, default?)` returns a value from a later row in the window order. The default offset is one, and the optional default is returned when no later row exists:

```sql
SELECT
    OrderDate,
    TotalAmount,
    LEAD(TotalAmount, 1, 0) OVER (ORDER BY OrderDate, OrderId) AS NextAmount
FROM dbo.Orders;
```

The unique `OrderId` tie-breaker makes the order deterministic when two orders share a date.

## Running Total

```sql
SELECT
    OrderDate,
    TotalAmount,
    SUM(TotalAmount) OVER
    (
        ORDER BY OrderDate
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS RunningTotal
FROM dbo.Orders;
```

## Department Average Without Grouping

```sql
SELECT
    FullName,
    DepartmentId,
    Salary,
    AVG(Salary) OVER
    (
        PARTITION BY DepartmentId
    ) AS DepartmentAverage
FROM dbo.Employees;
```

Window functions are extremely useful for:

- ranking
- de-duplication
- running balances
- previous/next comparisons
- first/last record logic
- analytics
- reconciliation

---

# 30. PIVOT and UNPIVOT

PIVOT turns row values into columns.

Suppose:

```text
Month   Amount
Jan     100
Feb     200
Mar     300
```

Desired:

```text
Jan  Feb  Mar
100  200  300
```

Example:

```sql
SELECT *
FROM
(
    SELECT
        MONTH(OrderDate) AS MonthNo,
        TotalAmount
    FROM dbo.Orders
) src
PIVOT
(
    SUM(TotalAmount)
    FOR MonthNo IN ([1], [2], [3], [4])
) p;
```

Conditional aggregation is often easier and more flexible:

```sql
SELECT
    SUM(CASE WHEN MONTH(OrderDate) = 1 THEN TotalAmount ELSE 0 END) AS Jan,
    SUM(CASE WHEN MONTH(OrderDate) = 2 THEN TotalAmount ELSE 0 END) AS Feb
FROM dbo.Orders;
```

UNPIVOT performs the reverse transformation.

---

# 31. Temporary Tables, Table Variables and CTEs

## Local Temp Table

```sql
CREATE TABLE #EmployeeTemp
(
    EmployeeId INT,
    Salary DECIMAL(12,2)
);
```

Visible to the current session.

## Global Temp Table

```sql
CREATE TABLE ##GlobalTemp
(
    Id INT
);
```

Visible across sessions while it remains alive.

Use global temporary tables cautiously.

## SELECT INTO

```sql
SELECT
    EmployeeId,
    FullName,
    Salary
INTO #HighSalary
FROM dbo.Employees
WHERE Salary > 60000;
```

## Table Variable

```sql
DECLARE @Employees TABLE
(
    EmployeeId INT,
    FullName VARCHAR(150)
);
```

## Choosing

### CTE

Good for:

- readability
- one logical query
- recursion

### Temp Table

Good for:

- multi-step processing
- larger intermediate datasets
- indexing intermediate results
- repeated reuse

### Table Variable

Good for:

- smaller temporary structures
- procedural logic

Table variables are scoped to the batch/procedure/function, support limited indexing through declared constraints/index syntax, and participate in `tempdb` storage. They are not “memory-only.” Modern SQL Server versions have improved table-variable cardinality estimation, but statistics and recompilation behavior still differ from temporary tables; workload characteristics matter.

Always measure instead of following simplistic rules such as:

```text
"Temp table always faster"
```

or:

```text
"Table variable always stays in memory"
```

Both are misleading.

---

# 32. Views

A view is a stored query definition.

```sql
CREATE VIEW dbo.vw_EmployeeDepartment
AS
SELECT
    e.EmployeeId,
    e.FullName,
    e.Salary,
    d.DepartmentName
FROM dbo.Employees e
LEFT JOIN dbo.Departments d
    ON d.DepartmentId = e.DepartmentId;
```

Use:

```sql
SELECT *
FROM dbo.vw_EmployeeDepartment;
```

Benefits:

- abstraction
- reuse
- security boundary in some designs
- simplified reporting

A normal view does not automatically store a separate copy of its result.

## Indexed Views

SQL Server supports indexed views under specific rules.

They can persist indexed results for suitable workloads, but have design and maintenance costs.

Use only when justified by measurements and supported patterns.

---

# 33. Stored Procedures

Stored procedures are reusable server-side programs.

```sql
CREATE OR ALTER PROCEDURE dbo.GetEmployeesByDepartment
    @DepartmentId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        EmployeeId,
        FullName,
        Salary
    FROM dbo.Employees
    WHERE DepartmentId = @DepartmentId;
END;
GO
```

Execute:

```sql
EXEC dbo.GetEmployeesByDepartment @DepartmentId = 1;
```

## Output Parameter

```sql
CREATE OR ALTER PROCEDURE dbo.GetEmployeeCount
    @DepartmentId INT,
    @EmployeeCount INT OUTPUT
AS
BEGIN
    SELECT @EmployeeCount = COUNT(*)
    FROM dbo.Employees
    WHERE DepartmentId = @DepartmentId;
END;
```

Call:

```sql
DECLARE @Count INT;

EXEC dbo.GetEmployeeCount
    @DepartmentId = 1,
    @EmployeeCount = @Count OUTPUT;

SELECT @Count;
```

## Return Value

Stored-procedure return codes are normally better suited to status information than returning business datasets.

## Benefits

- reusable business logic
- controlled permissions
- parameterization
- transaction encapsulation
- API/backend integration

## Important Practices

Use:

```sql
SET NOCOUNT ON;
```

Avoid:

```sql
SELECT *
```

Validate input.

Use explicit transactions only where needed.

Handle errors.

Be aware of parameter-sensitive execution plans.

---

# 34. User-Defined Functions

## Scalar Function

Returns one scalar value for the supplied inputs. In the example, `@MonthlySalary` is a `DECIMAL(12,2)` parameter and the function returns a `DECIMAL(14,2)` annual amount:

```sql
CREATE OR ALTER FUNCTION dbo.CalculateAnnualSalary
(
    @MonthlySalary DECIMAL(12,2)
)
RETURNS DECIMAL(14,2)
AS
BEGIN
    RETURN @MonthlySalary * 12;
END;
```

Use:

```sql
SELECT dbo.CalculateAnnualSalary(50000);
```

Expected result: `600000.00`. Scalar UDFs can be convenient for reusable calculations, but invoking one row by row may inhibit optimization or add CPU overhead. Newer versions can inline eligible scalar UDFs; verify the actual execution plan instead of assuming inlining.

## Inline Table-Valued Function

```sql
CREATE OR ALTER FUNCTION dbo.GetDepartmentEmployees
(
    @DepartmentId INT
)
RETURNS TABLE
AS
RETURN
(
    SELECT
        EmployeeId,
        FullName,
        Salary
    FROM dbo.Employees
    WHERE DepartmentId = @DepartmentId
);
```

Use:

```sql
SELECT *
FROM dbo.GetDepartmentEmployees(1);
```

Inline TVFs are often optimizer-friendly compared with more procedural alternatives.

Functions have restrictions compared with stored procedures.

---

# 35. Triggers

A trigger runs automatically in response to an event.

## AFTER Trigger

```sql
CREATE TABLE dbo.EmployeeAudit
(
    AuditId BIGINT IDENTITY PRIMARY KEY,
    EmployeeId INT,
    OldSalary DECIMAL(12,2),
    NewSalary DECIMAL(12,2),
    ChangedAt DATETIME2 DEFAULT SYSDATETIME()
);
```

```sql
CREATE TRIGGER dbo.trg_Employees_SalaryAudit
ON dbo.Employees
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.EmployeeAudit
    (
        EmployeeId,
        OldSalary,
        NewSalary
    )
    SELECT
        i.EmployeeId,
        d.Salary,
        i.Salary
    FROM inserted i
    INNER JOIN deleted d
        ON d.EmployeeId = i.EmployeeId
    WHERE ISNULL(i.Salary, 0) <> ISNULL(d.Salary, 0);
END;
```

Critical concept:

```text
inserted
deleted
```

Triggers must handle **multiple rows**, not only one row.

Bad trigger:

```sql
SELECT @EmployeeId = EmployeeId
FROM inserted;
```

This incorrectly assumes only one row.

Use triggers carefully because hidden side effects can make systems harder to debug.

---

# 36. Transactions

A transaction groups operations into one logical unit.

Example: transfer money.

```sql
BEGIN TRANSACTION;

UPDATE dbo.Accounts
SET Balance = Balance - 1000
WHERE AccountId = 1;

UPDATE dbo.Accounts
SET Balance = Balance + 1000
WHERE AccountId = 2;

COMMIT;
```

If the second update fails and the first update is already committed independently, money could disappear.

Transactions prevent that.

## ACID

### Atomicity

All statements in the transaction commit as a unit or are rolled back. Atomicity does not mean errors automatically roll back every open transaction; application code still needs correct `TRY/CATCH`, `XACT_STATE()`, `XACT_ABORT`, and rollback handling.

### Consistency

Each committed transaction should move the database from one valid state to another, respecting constraints and business invariants. SQL Server enforces declared constraints, while the application or stored procedure must correctly implement rules that are not represented in the schema.

### Isolation

Concurrent work is separated according to the selected isolation level. Stronger isolation prevents more anomalies but may use more locks, row versions, waiting, or conflict handling.

### Durability

Once commit succeeds, transaction-log and recovery mechanisms preserve the change across expected process or server failures. Durability is not a substitute for tested backups, high availability, and disaster recovery.

---

# 37. TRY/CATCH and Error Handling

Recommended transaction pattern:

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    UPDATE dbo.Products
    SET StockQty = StockQty - 1
    WHERE ProductId = 1
      AND StockQty > 0;

    IF @@ROWCOUNT = 0
        THROW 50001, 'Product is out of stock.', 1;

    INSERT INTO dbo.Orders
    (
        CustomerId,
        Status,
        TotalAmount
    )
    VALUES
    (
        1,
        'NEW',
        60000
    );

    COMMIT;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0
        ROLLBACK;

    THROW;
END CATCH;
```

Useful error functions:

```sql
ERROR_NUMBER()
ERROR_MESSAGE()
ERROR_LINE()
ERROR_PROCEDURE()
ERROR_SEVERITY()
ERROR_STATE()
```

Prefer `THROW` in modern T-SQL error propagation patterns.

---

# 38. Transactions and Isolation Levels

Isolation level controls how transactions interact.

Common levels:

```text
READ UNCOMMITTED
READ COMMITTED
REPEATABLE READ
SNAPSHOT
SERIALIZABLE
```

| Level | Prevents dirty reads | Repeated-row stability | Phantom/range protection | Main mechanism |
|---|---:|---:|---:|---|
| `READ UNCOMMITTED` | No | No | No | minimal read locking |
| `READ COMMITTED` | Yes | No | No | shared locks, or row versions with RCSI |
| `REPEATABLE READ` | Yes | Yes | No | holds qualifying row locks longer |
| `SNAPSHOT` | Yes | Yes | Yes for the transaction snapshot | row versions; update conflicts possible |
| `SERIALIZABLE` | Yes | Yes | Yes | key-range locking |

This table is a learning model; exact blocking and version-store behavior depends on database options, predicates, access paths, and concurrent writes.

## READ UNCOMMITTED

Allows dirty reads.

```sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
```

`NOLOCK` is closely related in effect for table access.

Do not treat `NOLOCK` as a universal performance fix.

It can produce:

- dirty data
- missing rows
- duplicate-looking reads
- inconsistent results

## READ COMMITTED

Common default behavior.

Prevents reading uncommitted changes.

## REPEATABLE READ

Protects rows already read from being changed until the transaction finishes.

## SERIALIZABLE

Strongest traditional isolation level.

Can reduce concurrency significantly.

## SNAPSHOT

Uses row versioning to provide consistent reads without normal shared-lock behavior for those reads.

It requires database configuration.

## READ COMMITTED SNAPSHOT

A commonly considered row-versioning mode for improving read/write concurrency.

Changing isolation behavior is a system-level design decision, not a random query trick.

---

# 39. Locks, Blocking and Deadlocks

## Locks

SQL Server uses locks to preserve consistency.

Common lock modes include:

```text
Shared (S)
Exclusive (X)
Update (U)
Intent locks
Schema locks
```

- Shared (`S`) locks protect reads in lock-based isolation.
- Exclusive (`X`) locks protect changed data and conflict with other access.
- Update (`U`) locks help coordinate a read that may become a write.
- Intent locks summarize lower-level locks so SQL Server can check compatibility efficiently.
- Schema locks protect metadata stability or schema modification.

Locks can exist at key, row, page, object, database, or metadata resources, and SQL Server may escalate many fine-grained locks. Do not force lock hints without evidence; an appropriate index and short transaction often reduce the lock footprint more safely.

## Blocking

Blocking happens when one session waits for another session to release an incompatible lock.

Blocking is not always bad.

Example:

```text
Session A updates invoice 1001
Session B tries to update invoice 1001
Session B waits
```

That can be correct behavior.

Problematic blocking happens when:

- transactions stay open too long
- indexes are missing
- huge updates run in one transaction
- applications forget to commit/rollback

## Deadlock

A deadlock occurs when transactions wait on each other in a cycle.

Example:

```text
Transaction A locks Row 1
Transaction B locks Row 2

A requests Row 2
B requests Row 1
```

SQL Server detects the cycle and selects one transaction as a deadlock victim.

Ways to reduce deadlocks:

- access objects in consistent order
- keep transactions short
- use appropriate indexes
- avoid user interaction during transactions
- retry deadlock victims safely
- reduce unnecessary locking footprint

---

# 40. Indexes

Indexes are essential to SQL Server performance.

Think of a book.

Without an index:

```text
Read every page to find "transactions"
```

With an index:

```text
Use the index to jump near the correct page
```

## 40.1 Clustered Index

A clustered index determines the primary logical ordering/organization of table rows within the B-tree structure.

One table can have only one clustered index.

Example:

```sql
CREATE CLUSTERED INDEX IX_Orders_OrderId
ON dbo.Orders(OrderId);
```

A primary key is often clustered by default, but it does not have to be.

## 40.2 Nonclustered Index

Separate index structure pointing to rows.

```sql
CREATE NONCLUSTERED INDEX IX_Employees_DepartmentId
ON dbo.Employees(DepartmentId);
```

## 40.3 Composite Index

```sql
CREATE INDEX IX_Orders_Customer_OrderDate
ON dbo.Orders(CustomerId, OrderDate);
```

Column order matters.

The index above naturally supports queries starting with `CustomerId`.

## 40.4 Included Columns

```sql
CREATE INDEX IX_Employees_Department
ON dbo.Employees(DepartmentId)
INCLUDE (FullName, Salary);
```

Included columns can help make an index covering without adding them to the key.

## 40.5 Filtered Index

```sql
CREATE INDEX IX_Employees_Active
ON dbo.Employees(DepartmentId)
WHERE IsActive = 1;
```

Excellent when queries focus on a selective subset.

## 40.6 Unique Index

```sql
CREATE UNIQUE INDEX UX_Employees_Email
ON dbo.Employees(Email)
WHERE Email IS NOT NULL;
```

## Index Trade-Off

Indexes improve reads but cost:

- storage
- insert work
- update work
- delete work
- maintenance

Do not create an index for every column.

---

# 41. Execution Plans

SQL Server's optimizer chooses an execution plan.

Important operators include:

- Index Seek
- Index Scan
- Table Scan
- Key Lookup
- Nested Loops
- Hash Match
- Merge Join
- Sort
- Filter
- Aggregate
- Spool

## Seek vs Scan

A seek is often efficient for selective queries.

A scan is not automatically bad.

Example:

```sql
SELECT SUM(TotalAmount)
FROM dbo.Orders;
```

Scanning a large portion of the table may be the correct plan.

The question is not:

```text
"Is there a scan?"
```

The question is:

```text
"Is this plan appropriate for the amount and distribution of data?"
```

## Estimated vs Actual Execution Plan

Estimated plan:

- no query execution required
- optimizer's estimate

Actual plan:

- query runs
- includes actual runtime row counts and other runtime information

Large differences between estimated and actual rows can indicate estimation problems.

---

# 42. Query Performance Tuning

A strong tuning process:

```text
1. Understand the business query
2. Capture execution plan
3. Measure duration / CPU / logical reads
4. Identify expensive operations
5. Check predicates and joins
6. Check indexes
7. Check row estimates
8. Rewrite only when justified
9. Re-measure
```

## SET STATISTICS IO

```sql
SET STATISTICS IO ON;
```

Shows logical reads.

Turn it off after measurement with `SET STATISTICS IO OFF;`. Compare logical reads for the same representative parameters and cache conditions; a lower duration from one run may simply reflect caching or concurrent server load.

## SET STATISTICS TIME

```sql
SET STATISTICS TIME ON;
```

Shows CPU and elapsed timing.

Turn it off with `SET STATISTICS TIME OFF;`. CPU time measures processor work used by the request, while elapsed time also includes waits such as I/O, blocking, scheduling, and network-related delays.

## SARGability

SARGable predicates allow efficient index searching.

Bad:

```sql
WHERE YEAR(OrderDate) = 2026
```

Better:

```sql
WHERE OrderDate >= '20260101'
  AND OrderDate <  '20270101'
```

Bad:

```sql
WHERE UPPER(CustomerName) = 'ALPHA'
```

Depending on collation and requirements, applying functions to indexed columns can hinder index use.

## Implicit Conversion

Bad design:

```text
EmployeeCode column = VARCHAR
parameter = NVARCHAR or INT
```

Implicit conversion can hurt index usage and correctness.

Keep data types aligned.

## Leading Wildcard

```sql
WHERE CustomerName LIKE '%alpha%'
```

A normal B-tree index cannot efficiently seek by arbitrary leading substring.

Consider:

- full-text search
- specialized search solution
- different data design

---

# 43. Statistics and Cardinality

Statistics describe data distribution.

SQL Server uses them to estimate row counts.

The optimizer asks questions such as:

```text
How many rows probably match DepartmentId = 5?
How many rows will this join produce?
```

Bad estimates can produce inappropriate joins or memory grants.

Important concepts:

- auto-create statistics
- auto-update statistics
- stale statistics
- skewed data
- parameter sensitivity

Update manually when necessary:

```sql
UPDATE STATISTICS dbo.Orders;
```

Or:

```sql
EXEC sp_updatestats;
```

Do not blindly update everything too frequently without understanding workload cost.

---

# 44. Normalization and Denormalization

Normalization reduces redundant data and dependency problems.

## First Normal Form (1NF)

Values should be atomic from the perspective of the relational design.

Bad:

```text
Skills = "SQL,Java,Python"
```

Better:

```text
Employee
Skill
EmployeeSkill
```

## Second Normal Form (2NF)

Non-key attributes should depend on the complete key.

Especially relevant with composite keys.

## Third Normal Form (3NF)

Non-key attributes should depend on the key, not on another non-key attribute.

Bad:

```text
Employee
---------
EmployeeId
DepartmentId
DepartmentName
```

`DepartmentName` depends on `DepartmentId`, not directly on the employee key.

Better:

```text
Employee
Department
```

## Denormalization

Sometimes deliberately duplicate/precompute data for reporting or performance.

Use when:

- measurements prove benefit
- consistency strategy is defined
- reporting workload justifies it

Do not denormalize merely because joins look complicated.

---

# 45. Keys and Relationships

## Primary Key

Unique row identifier.

## Candidate Key

Any set of columns that can uniquely identify a row.

## Alternate Key

Candidate key not chosen as primary key.

## Natural Key

Business-meaningful identifier.

Example:

```text
EmployeeCode
GST invoice number within vendor/year/company context
Email in certain systems
```

## Surrogate Key

Artificial identifier.

Example:

```text
EmployeeId INT IDENTITY
```

## Composite Key

Multiple columns together form the key.

Example:

```sql
PRIMARY KEY (OrderId, ProductId)
```

## One-to-One

```text
Employee ↔ EmployeeProfile
```

## One-to-Many

```text
Customer → Orders
```

## Many-to-Many

Requires junction table.

```text
Student
Course
StudentCourse
```

---

# 46. Identity, Sequence and GUID

## IDENTITY

```sql
Id INT IDENTITY(1,1)
```

Common for surrogate keys.

Retrieve generated identity:

```sql
SELECT SCOPE_IDENTITY();
```

`SCOPE_IDENTITY()` is generally safer for current-scope identity retrieval than global/session alternatives.

## SEQUENCE

```sql
CREATE SEQUENCE dbo.InvoiceSequence
    AS BIGINT
    START WITH 1000
    INCREMENT BY 1;
```

Use:

```sql
SELECT NEXT VALUE FOR dbo.InvoiceSequence;
```

Sequences are independent database objects and can be used across tables.

## GUID

```sql
SELECT NEWID();
```

GUID advantages:

- globally unique
- useful in distributed systems

Trade-offs:

- larger keys
- wider indexes
- random GUIDs may increase fragmentation/page-split pressure when used as clustered keys

Sequential GUID strategies may reduce some of those costs.

---

# 47. MERGE and Upsert Patterns

`MERGE` can synchronize source and target.

Example syntax:

```sql
MERGE dbo.TargetProducts AS T
USING dbo.StageProducts AS S
    ON T.ProductCode = S.ProductCode
WHEN MATCHED THEN
    UPDATE SET
        T.ProductName = S.ProductName,
        T.UnitPrice = S.UnitPrice
WHEN NOT MATCHED BY TARGET THEN
    INSERT
    (
        ProductCode,
        ProductName,
        UnitPrice
    )
    VALUES
    (
        S.ProductCode,
        S.ProductName,
        S.UnitPrice
    );
```

The terminating semicolon is required for `MERGE`. The source must not contain multiple rows that attempt to update the same target row. `MERGE` has historically required careful handling because of concurrency and edge-case behavior; review current product fixes, test every action branch, add an appropriate unique constraint, and validate concurrency behavior before production use.

A simpler and frequently easier-to-reason-about upsert pattern is:

```sql
UPDATE T
SET
    T.ProductName = S.ProductName,
    T.UnitPrice = S.UnitPrice
FROM dbo.TargetProducts T
INNER JOIN dbo.StageProducts S
    ON S.ProductCode = T.ProductCode;

INSERT INTO dbo.TargetProducts
(
    ProductCode,
    ProductName,
    UnitPrice
)
SELECT
    S.ProductCode,
    S.ProductName,
    S.UnitPrice
FROM dbo.StageProducts S
WHERE NOT EXISTS
(
    SELECT 1
    FROM dbo.TargetProducts T
    WHERE T.ProductCode = S.ProductCode
);
```

For concurrent upserts, transaction isolation and uniqueness constraints matter.

---

# 48. Dynamic SQL

Dynamic SQL builds SQL text at runtime.

```sql
DECLARE @sql NVARCHAR(MAX);

SET @sql = N'
SELECT
    EmployeeId,
    FullName
FROM dbo.Employees
WHERE DepartmentId = @DeptId;
';

EXEC sys.sp_executesql
    @sql,
    N'@DeptId INT',
    @DeptId = 1;
```

Use `sp_executesql` with parameters.

Dangerous:

```sql
SET @sql =
    'SELECT * FROM dbo.Users WHERE Username = '''
    + @Username +
    '''';
```

This may create SQL injection risk.

Parameterized dynamic SQL:

```sql
DECLARE @sql NVARCHAR(MAX) =
N'SELECT *
  FROM dbo.Users
  WHERE Username = @Username;';

EXEC sys.sp_executesql
    @sql,
    N'@Username VARCHAR(100)',
    @Username;
```

Dynamic object names cannot usually be parameterized the same way.

When dynamically injecting identifiers, validate them and use:

```sql
QUOTENAME()
```

`QUOTENAME()` safely delimits one identifier; it does not prove that the identifier is authorized or turn arbitrary SQL fragments into safe input. Choose table/column/direction values from a server-side allowlist, use `QUOTENAME()` for the selected identifier, and keep data values parameterized.

---

# 49. Pagination

Modern pagination pattern:

```sql
SELECT
    OrderId,
    OrderDate,
    TotalAmount
FROM dbo.Orders
ORDER BY OrderId
OFFSET 20 ROWS
FETCH NEXT 10 ROWS ONLY;
```

For page 3 with page size 10:

```text
OFFSET = (3 - 1) × 10 = 20
```

Large offsets can become expensive.

For very large datasets, keyset/seek pagination may be better:

```sql
SELECT TOP (10)
    OrderId,
    OrderDate,
    TotalAmount
FROM dbo.Orders
WHERE OrderId > @LastSeenOrderId
ORDER BY OrderId;
```

---

# 50. Date and Time Patterns

## Today's Date

```sql
SELECT CAST(GETDATE() AS DATE);
```

## Start and End Range

Good:

```sql
WHERE CreatedAt >= '20260812'
  AND CreatedAt <  '20260813'
```

This avoids problems with time components.

## Current Month

```sql
DECLARE @Start DATE =
    DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1);

SELECT *
FROM dbo.Orders
WHERE OrderDate >= @Start
  AND OrderDate < DATEADD(MONTH, 1, @Start);
```

## Previous Month

```sql
DECLARE @CurrentMonth DATE =
    DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1);

SELECT *
FROM dbo.Orders
WHERE OrderDate >= DATEADD(MONTH, -1, @CurrentMonth)
  AND OrderDate < @CurrentMonth;
```

## Age Calculation Warning

This is not always correct:

```sql
DATEDIFF(YEAR, BirthDate, GETDATE())
```

Because the birthday might not have occurred yet in the current year.

Business date calculations require precise definitions.

---

# 51. String Processing

Split CSV-like input:

```sql
SELECT value
FROM STRING_SPLIT('A,B,C', ',');
```

Aggregate values into a string:

```sql
SELECT
    DepartmentId,
    STRING_AGG(FullName, ', ') AS EmployeeNames
FROM dbo.Employees
GROUP BY DepartmentId;
```

Concatenation:

```sql
SELECT CONCAT(FirstName, ' ', LastName);
```

Substring:

```sql
SELECT SUBSTRING('INV-2026-0001', 5, 4);
```

Find:

```sql
SELECT CHARINDEX('-', 'INV-2026-0001');
```

Use structured relational rows instead of storing comma-separated values when the values need relational querying.

---

# 52. JSON in SQL Server

JSON is useful when integrating with APIs.

Example JSON:

```json
{
  "invoiceNo": "INV-1001",
  "amount": 12500
}
```

Store:

```sql
CREATE TABLE dbo.ApiMessages
(
    MessageId BIGINT IDENTITY PRIMARY KEY,
    Payload NVARCHAR(MAX)
);
```

For SQL Server 2025, a native binary `JSON` column is also available:

```sql
CREATE TABLE dbo.ApiMessages2025
(
    MessageId BIGINT IDENTITY PRIMARY KEY,
    Payload JSON NOT NULL
);
```

Use `NVARCHAR(MAX)` when compatibility with earlier versions is required. A check constraint such as `CHECK (ISJSON(Payload) = 1)` validates text storage; the native type validates JSON by type and avoids reparsing the text representation for supported operations. Version-specific features such as `CREATE JSON INDEX` must be checked for preview/availability status before production adoption.

Validate:

```sql
SELECT ISJSON(Payload)
FROM dbo.ApiMessages;
```

Extract:

```sql
DECLARE @json NVARCHAR(MAX) =
N'{"invoiceNo":"INV-1001","amount":12500}';

SELECT
    JSON_VALUE(@json, '$.invoiceNo') AS InvoiceNo,
    JSON_VALUE(@json, '$.amount') AS Amount;
```

Parse object/array:

```sql
SELECT *
FROM OPENJSON(@json);
```

Convert rows to JSON:

```sql
SELECT
    EmployeeId,
    FullName,
    Salary
FROM dbo.Employees
FOR JSON PATH;
```

Use JSON when flexible API/document exchange is useful, but do not replace a relational schema with arbitrary JSON without a reason.

---

# 53. XML in SQL Server

SQL Server has native XML capabilities.

Example:

```sql
DECLARE @x XML =
N'<invoice>
    <number>INV-1001</number>
    <amount>1000</amount>
</invoice>';
```

Read value:

```sql
SELECT
    @x.value('(/invoice/number/text())[1]', 'VARCHAR(50)');
```

XML is common in:

- older integrations
- SOAP systems
- legacy enterprise applications
- configuration formats

---

# 54. Transactions for Real Business Processes

Consider invoice posting.

Required steps:

```text
1. Validate invoice
2. Write posting header
3. Write posting lines
4. Update invoice status
5. Write audit history
```

If step 4 fails after steps 2 and 3, partial data must not remain.

Pattern:

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    INSERT INTO dbo.PostingHeader (...)
    VALUES (...);

    DECLARE @PostingId BIGINT = SCOPE_IDENTITY();

    INSERT INTO dbo.PostingLines (...)
    SELECT ...
    FROM ...;

    UPDATE dbo.Invoices
    SET Status = 'POSTED'
    WHERE InvoiceId = @InvoiceId;

    INSERT INTO dbo.InvoiceAudit (...)
    VALUES (...);

    COMMIT;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0
        ROLLBACK;

    THROW;
END CATCH;
```

Keep the transaction as short as possible.

Do not:

```text
Open transaction
→ call external API
→ wait for user
→ send email
→ sleep
→ commit
```

Long transactions increase blocking and recovery pressure.

---

# 55. Bulk Import and Export

Common approaches include:

- `BULK INSERT`
- `bcp`
- SSIS
- import/export tooling
- application-side bulk copy APIs

Example:

```sql
BULK INSERT dbo.StageCustomers
FROM 'C:\Import\customers.csv'
WITH
(
    FIRSTROW = 2,
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '0x0a'
);
```

Production imports should handle:

- encoding
- quoted delimiters
- malformed rows
- schema validation
- duplicate rows
- audit records
- retry behavior
- staging tables

Strong pattern:

```text
External File
    ↓
Staging Table
    ↓
Validation
    ↓
Rejected Rows / Errors
    ↓
Transformation
    ↓
Final Tables
```

---

# 56. SQL Server Security

Security has several layers.

```text
Windows/Host
   ↓
SQL Server Instance Login
   ↓
Database User
   ↓
Database Role
   ↓
Object Permission
   ↓
Row/Column Security where required
```

## Authentication

Common modes:

- Windows Authentication
- SQL Server Authentication

For enterprise environments, integrated identity is often preferred where appropriate.

## Login

Server-level principal.

```sql
CREATE LOGIN AppLogin
WITH PASSWORD = 'StrongPasswordHere';
```

## User

Database-level principal mapped to a login.

```sql
USE CompanyDB;

CREATE USER AppUser
FOR LOGIN AppLogin;
```

## Role

```sql
CREATE ROLE AppReadOnly;
```

Grant:

```sql
GRANT SELECT ON SCHEMA::dbo TO AppReadOnly;
```

Add user:

```sql
ALTER ROLE AppReadOnly
ADD MEMBER AppUser;
```

## GRANT

Allows permission.

```sql
GRANT SELECT ON dbo.Employees TO AppUser;
```

## DENY

Explicitly blocks permission.

```sql
DENY DELETE ON dbo.Employees TO AppUser;
```

## REVOKE

Removes a previously granted/denied permission so normal permission resolution applies again.

## Principle of Least Privilege

Applications should receive only the permissions they actually require.

Do not make every application account:

```text
sysadmin
db_owner
```

---

# 57. Schemas

A schema is a logical namespace/container for database objects.

Examples:

```text
dbo.Employee
hr.Employee
finance.Invoice
sales.Customer
```

Create:

```sql
CREATE SCHEMA finance;
```

Benefits:

- organization
- permission management
- naming clarity
- separation of domains

Example:

```sql
GRANT SELECT ON SCHEMA::finance
TO FinanceReader;
```

---

# 58. Backup and Restore

Backups are critical.

Main backup types:

- full backup
- differential backup
- transaction log backup

## Full Backup

```sql
BACKUP DATABASE CompanyDB
TO DISK = 'D:\Backup\CompanyDB_full.bak'
WITH COMPRESSION;
```

## Differential

```sql
BACKUP DATABASE CompanyDB
TO DISK = 'D:\Backup\CompanyDB_diff.bak'
WITH DIFFERENTIAL, COMPRESSION;
```

## Log Backup

```sql
BACKUP LOG CompanyDB
TO DISK = 'D:\Backup\CompanyDB_log.trn'
WITH COMPRESSION;
```

## Restore Full

```sql
RESTORE DATABASE CompanyDB_Restore
FROM DISK = 'D:\Backup\CompanyDB_full.bak'
WITH
    MOVE 'CompanyDB'
        TO 'D:\Data\CompanyDB_Restore.mdf',
    MOVE 'CompanyDB_log'
        TO 'D:\Data\CompanyDB_Restore_log.ldf';
```

A backup strategy is incomplete until restore procedures are tested.

Important concept:

```text
Backup success ≠ recovery readiness
```

You must test restores.

---

# 59. Recovery Models

Main recovery models:

```text
SIMPLE
FULL
BULK_LOGGED
```

## SIMPLE

Transaction log is automatically reusable after checkpoints when possible.

No normal point-in-time log backup chain.

Common for:

- dev/test
- databases where point-in-time recovery is unnecessary

## FULL

Supports transaction log backups and point-in-time recovery when backup chain requirements are met.

Common for important production databases.

## BULK_LOGGED

Special model that can reduce logging for certain bulk operations while retaining log-backup behavior, with recovery implications.

Do not change recovery models casually.

---

# 60. SQL Server Agent

SQL Server Agent automates scheduled work.

Common jobs:

- nightly backups
- data imports
- cleanup
- report refresh
- reminder emails
- stored procedure execution
- ETL
- index/statistics maintenance

Typical hierarchy:

```text
Job
├── Step 1
├── Step 2
└── Step 3
```

Schedule examples:

```text
Every day 01:00
Every Monday 08:00
Every 15 minutes
```

Production jobs should include:

- clear names
- failure alerts
- logging
- retry policy where appropriate
- owner strategy
- run history review

---

# 61. Database Maintenance

Maintenance topics include:

- backup verification
- integrity checking
- index maintenance
- statistics maintenance
- file-growth monitoring
- job-history cleanup

## DBCC CHECKDB

```sql
DBCC CHECKDB ('CompanyDB');
```

Checks logical and physical database integrity.

Schedule appropriately based on database size and operational constraints.

## Index Fragmentation

Do not automatically rebuild every index every night.

Consider:

- actual fragmentation
- page count
- workload
- maintenance window
- transaction log impact
- availability requirements

Modern tuning should be evidence-based.

---

# 62. Monitoring and Troubleshooting

When users say:

```text
"SQL Server is slow"
```

Ask:

```text
What is slow?
One query?
One database?
All applications?
CPU?
Disk?
Blocking?
Memory?
Network?
```

Key resources:

- execution plans
- Query Store
- DMVs
- wait statistics
- blocking sessions
- SQL Server error log
- Windows event log
- Agent job history

Basic active-request query:

```sql
SELECT
    session_id,
    status,
    command,
    cpu_time,
    total_elapsed_time,
    reads,
    writes,
    blocking_session_id
FROM sys.dm_exec_requests
WHERE session_id <> @@SPID;
```

---

# 63. DMVs

Dynamic Management Views expose server/database runtime information.

DMV data is often transient and may reset after restart, failover, cache eviction, or other events. Results are a snapshot, not a permanent audit trail. Required permissions vary by DMV and SQL Server version; grant diagnostic access deliberately rather than giving broad administrator roles.

## Active Sessions

```sql
SELECT *
FROM sys.dm_exec_sessions
WHERE is_user_process = 1;
```

## Active Requests

```sql
SELECT *
FROM sys.dm_exec_requests;
```

## Query Text

```sql
SELECT
    r.session_id,
    r.status,
    t.text
FROM sys.dm_exec_requests r
CROSS APPLY sys.dm_exec_sql_text(r.sql_handle) t;
```

## Missing Index Information

SQL Server exposes missing-index DMVs, but their suggestions should be treated as clues rather than automatically executed prescriptions.

Why?

They may:

- overlap
- recommend too many indexes
- ignore write cost
- ignore existing near-equivalent indexes

---

# 64. Query Store

Query Store records query execution history and plan information inside the database.

It is useful for:

- identifying regressions
- comparing plans
- tracking runtime changes
- understanding expensive queries
- plan management scenarios

Typical question:

> The application became slow after deployment. Which queries changed plans?

Query Store can help answer this.

Configuration and capabilities vary by SQL Server version and deployment platform.

---

# 65. Change Tracking and CDC

These features answer different questions.

| Feature | Main question | Captures intermediate values? | Typical consumer |
|---|---|---:|---|
| Change Tracking | Which primary keys changed since a version? | No | occasionally connected synchronization client |
| CDC | What insert/update/delete changes occurred, with captured columns? | Yes, subject to configuration/retention | ETL, downstream data pipeline |

## Change Tracking

Change Tracking is lightweight and records that a row changed, plus key/version information. A consumer uses the key to read the current row from the base table. It does not preserve every intermediate value, and clients must synchronize before cleanup retention makes an old version invalid.

## Change Data Capture (CDC)

CDC reads the transaction log and exposes captured changes through change tables/functions. It can retain before/after information for updates, but cleanup retention, capture jobs/processes, schema changes, permissions, and downstream checkpoints must be operated deliberately.

Common use cases:

- ETL
- replication-like pipelines
- audit/event integration
- data warehouses

Do not confuse CDC with a complete security audit solution.

---

# 66. Temporal Tables

System-versioned temporal tables keep historical row versions.

Conceptual structure:

```text
Current Table
+
History Table
```

Example use cases:

- employee master history
- price history
- workflow status history
- configuration history

Query history syntax can include:

```sql
SELECT *
FROM dbo.Employee
FOR SYSTEM_TIME AS OF '2026-01-01';
```

Temporal tables are useful when the question is:

> What did this row look like at a particular point in time?

They are not a replacement for every audit requirement.

---

# 67. Computed Columns

A computed column is derived from other columns.

```sql
CREATE TABLE dbo.InvoiceLine
(
    Qty DECIMAL(12,2),
    UnitPrice DECIMAL(12,2),
    LineAmount AS (Qty * UnitPrice)
);
```

Computed columns may also be persisted in suitable deterministic cases.

Example:

```sql
LineAmount AS (Qty * UnitPrice) PERSISTED
```

Persisted computed columns can sometimes be indexed.

---

# 68. Partitioning

Partitioning divides a large table/index horizontally based on a partition key.

Example concept:

```text
Orders
├── 2024 partition
├── 2025 partition
├── 2026 partition
└── future partition
```

Benefits can include:

- manageability
- partition-level maintenance
- data lifecycle management
- certain query benefits

Partitioning is not:

```text
"automatic performance for every big table"
```

A poor query can still scan many partitions.

Partition elimination depends on suitable predicates and design.

---

# 69. Columnstore Indexes

Columnstore indexes store data by column rather than traditional row-oriented storage.

Excellent for:

- analytics
- aggregates
- data warehouses
- large scans
- compression-heavy reporting

Example workload:

```sql
SELECT
    ProductCategory,
    SUM(SalesAmount)
FROM dbo.FactSales
WHERE SaleDate >= '20260101'
GROUP BY ProductCategory;
```

Traditional rowstore is often better for highly selective transactional operations.

SQL Server can support hybrid patterns depending on workload and version.

---

# 70. Full-Text Search

Full-text search is designed for linguistic text search.

Use cases:

- document search
- description search
- article search
- product text search

Basic `LIKE '%term%'` becomes inefficient and limited for large text-search workloads.

Full-text search supports richer concepts such as:

- words
- phrases
- inflectional forms
- proximity in supported configurations

---

# 71. Linked Servers

A linked server allows SQL Server to access another data source through configured providers.

Example conceptual query:

```sql
SELECT *
FROM [RemoteServer].[DatabaseName].[dbo].[Customers];
```

Use cases:

- legacy integrations
- controlled cross-server queries
- migration

Risks:

- distributed query performance
- network dependency
- security complexity
- transaction complexity

For modern architectures, APIs, ETL or dedicated integration pipelines may sometimes be better.

---

# 72. Service Broker Overview

SQL Server Service Broker provides database-integrated messaging.

Concepts:

- message types
- contracts
- queues
- services
- conversations

Use cases:

- asynchronous processing
- decoupled database tasks
- queued workloads

It is powerful but less commonly used by everyday application developers than normal tables, jobs, message brokers, or event platforms.

Learn it when your system uses it or when database-native messaging is specifically required.

---

# 73. High Availability Concepts

High availability and disaster recovery are different but related.

## Availability Groups

Used for high availability/disaster recovery architectures in suitable editions/configurations.

Concepts:

```text
Primary Replica
Secondary Replica
Availability Database
Listener
Synchronous / Asynchronous Commit
Automatic / Manual Failover
```

Synchronous commit can reduce potential data loss but adds commit latency; asynchronous commit usually fits distant disaster-recovery replicas but can lose recent transactions after a forced failover. A listener gives clients a stable connection name. Availability Groups do not replace backups, and server-level objects such as logins or jobs may need separate synchronization.

## Failover Cluster Instance

Protects the SQL Server instance through Windows clustering and shared-storage style architecture.

## Log Shipping

Copies transaction log backups to another SQL Server and restores them on a schedule.

Simple and reliable for some DR scenarios.

## Replication

Designed primarily for data distribution rather than being a universal backup/HA solution.

## RPO

**Recovery Point Objective**

How much data loss can the business tolerate?

Example:

```text
RPO = 15 minutes
```

## RTO

**Recovery Time Objective**

How long can the system be unavailable?

Example:

```text
RTO = 1 hour
```

Architecture should be chosen based on business requirements, not feature popularity.

---

# 74. SQL Server Development Best Practices

## 74.1 Always Use Schema Names

Schema qualification avoids ambiguous name resolution, communicates ownership, and can improve plan reuse by ensuring every caller resolves the same object.

Good:

```sql
SELECT *
FROM dbo.Employees;
```

Avoid:

```sql
SELECT *
FROM Employees;
```

## 74.2 Avoid SELECT *

Good:

```sql
SELECT
    EmployeeId,
    FullName
FROM dbo.Employees;
```

## 74.3 Parameterize Queries

Application code should avoid concatenating untrusted input into SQL text.

Parameters separate code from data, reduce SQL-injection risk, and encourage plan reuse. They do not validate business rules: still constrain allowed sort columns, operators, page sizes, and object names in application logic.

## 74.4 Use Correct Data Types

Bad:

```sql
Amount VARCHAR(50)
```

Good:

```sql
Amount DECIMAL(18,2)
```

## 74.5 Use UTC Strategically

For cross-region systems, storing UTC timestamps is often useful.

Business-local dates may still need local timezone semantics.

Define the rule explicitly.

## 74.6 Keep Transactions Short

Do only the transactional work inside a transaction.

Validate non-database input and call external services before opening it where possible. Inside the transaction, touch rows in a consistent order, avoid user interaction, commit or roll back on every path, and return promptly so locks and row versions are not retained unnecessarily.

## 74.7 Enforce Important Rules in the Database

Examples:

- primary key
- foreign key
- unique key
- check constraint

Application validation is valuable, but important data-integrity rules should not depend only on one application screen.

## 74.8 Index Based on Workload

Do not build indexes from theory alone.

Observe real queries.

Record the filters, joins, sort, selected columns, frequency, and expected row count. Test a proposed index with the actual plan and logical reads, then account for insert/update/delete cost and overlap with existing indexes.

## 74.9 Avoid Unbounded Result Sets

API endpoint:

```sql
SELECT *
FROM dbo.AuditLog;
```

can become dangerous when the table has millions of rows.

Use:

- filters
- pagination
- date range
- appropriate indexes

## 74.10 Log Important Changes

For critical operations, maintain:

- who
- what
- when
- source/application
- old/new values where required

---

# 75. Common Anti-Patterns

## Anti-Pattern 1: Storing CSV in a Column

Bad:

```text
ApproverIds = "12,18,25"
```

Better:

```text
ApprovalWorkflow
----------------
WorkflowId
ApproverId
SequenceNo
```

## Anti-Pattern 2: Dates as VARCHAR

Bad:

```sql
InvoiceDate VARCHAR(20)
```

Better:

```sql
InvoiceDate DATE
```

## Anti-Pattern 3: Amount as VARCHAR

Bad:

```text
"₹1,00,000"
```

Store:

```text
100000.00
```

Format for display in the application.

## Anti-Pattern 4: No Primary Key

Every important business table should normally have a clear unique identifier.

Without one, updates, deletes, foreign keys, replication/change-processing tools, and duplicate detection become harder or ambiguous. If no stable natural key exists, add a surrogate key and separately enforce the real business uniqueness that must not be duplicated.

## Anti-Pattern 5: `NOLOCK` Everywhere

It can return inconsistent data.

Use only when business semantics tolerate it and you understand the consequences.

`NOLOCK` does not mean “no locks at all,” does not prevent every kind of blocking, and can observe data that later rolls back. For a system-wide read/write blocking problem, investigate indexes, transaction scope, batching, and row-versioning options instead of scattering hints through queries.

## Anti-Pattern 6: Cursor for Simple Set Logic

Bad:

```text
Loop through 1 million rows
Update one row at a time
```

Prefer set-based operations where possible.

## Anti-Pattern 7: Function on Indexed Filter Column

Bad:

```sql
WHERE CONVERT(DATE, CreatedAt) = '2026-08-12'
```

Better:

```sql
WHERE CreatedAt >= '20260812'
  AND CreatedAt <  '20260813'
```

## Anti-Pattern 8: OR Conditions That Destroy Selectivity

Sometimes separate branches with `UNION ALL` can be more optimizer-friendly, but always verify.

## Anti-Pattern 9: One Giant Stored Procedure

A 5,000-line procedure handling every workflow state becomes difficult to test and maintain.

Break responsibilities logically.

## Anti-Pattern 10: Catch Error and Ignore It

Bad:

```sql
BEGIN CATCH
    PRINT 'Error';
END CATCH
```

The caller may believe the transaction succeeded.

Prefer clear failure propagation and structured logging.

---

# 76. Real-World Scenario Examples

## Scenario 1: Find Latest Status for Every Invoice

Table:

```text
InvoiceStatusHistory
--------------------
InvoiceId
Status
ChangedAt
```

Solution:

```sql
WITH Ranked AS
(
    SELECT
        InvoiceId,
        Status,
        ChangedAt,
        ROW_NUMBER() OVER
        (
            PARTITION BY InvoiceId
            ORDER BY ChangedAt DESC
        ) AS rn
    FROM dbo.InvoiceStatusHistory
)
SELECT
    InvoiceId,
    Status,
    ChangedAt
FROM Ranked
WHERE rn = 1;
```

Concepts:

- CTE
- window function
- de-duplication
- latest-row selection

---

## Scenario 2: Employees Without Attendance

```sql
SELECT e.EmployeeId, e.FullName
FROM dbo.Employees e
WHERE e.IsActive = 1
  AND NOT EXISTS
  (
      SELECT 1
      FROM dbo.Attendance a
      WHERE a.EmployeeId = e.EmployeeId
        AND a.AttendanceDate = @Date
  );
```

Concepts:

- anti-join
- `NOT EXISTS`
- date filtering

---

## Scenario 3: Duplicate Invoice Detection

Suppose uniqueness should be:

```text
VendorId + InvoiceNumber + FinancialYear
```

Find duplicates:

```sql
SELECT
    VendorId,
    InvoiceNumber,
    FinancialYear,
    COUNT(*) AS DuplicateCount
FROM dbo.Invoices
GROUP BY
    VendorId,
    InvoiceNumber,
    FinancialYear
HAVING COUNT(*) > 1;
```

Prevent future duplicates:

```sql
CREATE UNIQUE INDEX UX_Invoices_Vendor_Invoice_FY
ON dbo.Invoices
(
    VendorId,
    InvoiceNumber,
    FinancialYear
);
```

Application checks alone are not enough under concurrency.

---

## Scenario 4: Reconciliation Between Two Systems

```sql
SELECT
    COALESCE(a.InvoiceNo, b.InvoiceNo) AS InvoiceNo,
    a.Amount AS SystemAAmount,
    b.Amount AS SystemBAmount,
    CASE
        WHEN a.InvoiceNo IS NULL THEN 'Missing in A'
        WHEN b.InvoiceNo IS NULL THEN 'Missing in B'
        WHEN a.Amount <> b.Amount THEN 'Amount Mismatch'
        ELSE 'Matched'
    END AS ReconciliationStatus
FROM dbo.SystemAInvoices a
FULL OUTER JOIN dbo.SystemBInvoices b
    ON b.InvoiceNo = a.InvoiceNo;
```

Concepts:

- `FULL OUTER JOIN`
- `COALESCE`
- `CASE`
- reconciliation

---

## Scenario 5: Department Salary Report

```sql
SELECT
    d.DepartmentName,
    COUNT(e.EmployeeId) AS EmployeeCount,
    SUM(e.Salary) AS TotalSalary,
    AVG(e.Salary) AS AverageSalary,
    MIN(e.Salary) AS MinimumSalary,
    MAX(e.Salary) AS MaximumSalary
FROM dbo.Departments d
LEFT JOIN dbo.Employees e
    ON e.DepartmentId = d.DepartmentId
GROUP BY d.DepartmentName
ORDER BY AverageSalary DESC;
```

---

## Scenario 6: Top 3 Salaries Per Department

```sql
WITH SalaryRank AS
(
    SELECT
        e.EmployeeId,
        e.FullName,
        e.DepartmentId,
        e.Salary,
        DENSE_RANK() OVER
        (
            PARTITION BY e.DepartmentId
            ORDER BY e.Salary DESC
        ) AS SalaryRank
    FROM dbo.Employees e
)
SELECT *
FROM SalaryRank
WHERE SalaryRank <= 3;
```

---

## Scenario 7: Running Account Balance

```sql
SELECT
    AccountId,
    TransactionDate,
    Amount,
    SUM(Amount) OVER
    (
        PARTITION BY AccountId
        ORDER BY TransactionDate, TransactionId
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS RunningBalance
FROM dbo.AccountTransactions;
```

---

## Scenario 8: Inventory Purchase Transaction

Requirement:

```text
Create order
Create order item
Reduce stock
Either all succeed or all fail
```

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    DECLARE @ProductId INT = 1;
    DECLARE @Qty INT = 2;

    UPDATE dbo.Products
    SET StockQty = StockQty - @Qty
    WHERE ProductId = @ProductId
      AND StockQty >= @Qty;

    IF @@ROWCOUNT = 0
        THROW 50001, 'Insufficient inventory.', 1;

    INSERT INTO dbo.Orders
    (
        CustomerId,
        Status,
        TotalAmount
    )
    VALUES
    (
        1,
        'NEW',
        120000
    );

    DECLARE @OrderId BIGINT =
        CONVERT(BIGINT, SCOPE_IDENTITY());

    INSERT INTO dbo.OrderItems
    (
        OrderId,
        ProductId,
        Quantity,
        UnitPrice
    )
    SELECT
        @OrderId,
        ProductId,
        @Qty,
        UnitPrice
    FROM dbo.Products
    WHERE ProductId = @ProductId;

    COMMIT;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0
        ROLLBACK;

    THROW;
END CATCH;
```

---

## Scenario 9: Slowly Processing Millions of Rows

Bad:

```text
Cursor through each order
Call UPDATE for every row
```

Better approach:

```sql
UPDATE o
SET Status = 'ARCHIVED'
FROM dbo.Orders o
WHERE o.OrderDate < '20250101'
  AND o.Status = 'COMPLETED';
```

For very large updates, batch intentionally:

```sql
WHILE 1 = 1
BEGIN
    UPDATE TOP (5000) dbo.Orders
    SET Status = 'ARCHIVED'
    WHERE OrderDate < '20250101'
      AND Status = 'COMPLETED';

    IF @@ROWCOUNT = 0
        BREAK;
END;
```

Batching can reduce long blocking/log pressure, but batch size should be tested.

---

## Scenario 10: Search API With Optional Filters

Naive:

```sql
WHERE (@DepartmentId IS NULL OR DepartmentId = @DepartmentId)
  AND (@IsActive IS NULL OR IsActive = @IsActive)
```

This is convenient but may produce difficult optimization patterns for large/skewed workloads.

Alternatives include:

- recompilation in appropriate scenarios
- dynamic parameterized SQL
- dedicated procedures for important search paths

Measure before choosing.

---

# 77. Interview Questions and Answers

## Q1. What is the difference between SQL and T-SQL?

SQL is the standard query language concept. T-SQL is Microsoft's extension containing procedural and SQL Server-specific functionality.

## Q2. Primary key vs unique key?

Both enforce uniqueness. A primary key represents the main row identifier and cannot contain null. Unique constraints/indexes represent additional uniqueness rules and have different null/design semantics.

## Q3. DELETE vs TRUNCATE vs DROP?

- `DELETE`: removes rows, supports `WHERE`
- `TRUNCATE`: removes all rows while keeping the table
- `DROP`: removes the table object itself

## Q4. WHERE vs HAVING?

- `WHERE`: filters rows before aggregation
- `HAVING`: filters groups after aggregation

## Q5. Clustered vs nonclustered index?

- clustered: table's rowstore B-tree organization uses the clustered key
- nonclustered: separate B-tree with row locators

## Q6. CTE vs temp table?

- CTE: query expression, useful for readability/recursion
- temp table: materialized temporary object usable across multiple statements and indexable

## Q7. What is a deadlock?

Two or more transactions form a circular dependency on locks. SQL Server selects a victim to break the cycle.

## Q8. What is blocking?

A session waits for another session to release a conflicting lock.

## Q9. What is a transaction?

A group of operations treated as one logical unit.

## Q10. What is ACID?

Atomicity, Consistency, Isolation, Durability.

## Q11. What is a view?

A stored query definition that exposes a virtual table-like interface.

## Q12. Stored procedure vs function?

Stored procedures can perform broader procedural/database operations and return result sets/output parameters. Functions return a value/table and have stricter rules.

## Q13. `UNION` vs `UNION ALL`?

`UNION` removes duplicates. `UNION ALL` keeps them and is normally cheaper.

## Q14. `RANK` vs `DENSE_RANK`?

`RANK` leaves gaps after ties. `DENSE_RANK` does not.

## Q15. `ROW_NUMBER` use case?

Select one row per group, pagination, de-duplication, ranking.

## Q16. What is an execution plan?

The optimizer's physical strategy for executing a query.

## Q17. What is an index seek?

A targeted navigation into an index based on suitable search predicates.

## Q18. Is an index scan always bad?

No. Scanning can be correct when many rows are required or the table/index is small.

## Q19. What is a covering index?

An index containing all columns needed by a query so additional row lookups may be avoided.

## Q20. What is a filtered index?

An index containing only rows matching a filter predicate.

## Q21. What is SARGability?

Writing predicates so SQL Server can efficiently use searchable index ranges when appropriate.

## Q22. Why is `WHERE YEAR(DateColumn)=2026` often less efficient?

It applies a function to the column and can make index seeking harder. Use a range predicate.

## Q23. Why avoid `SELECT *`?

Unnecessary I/O, brittle contracts, less efficient index coverage, unclear dependencies.

## Q24. Why avoid `NOLOCK` blindly?

It allows inconsistent/dirty reads and can produce incorrect results.

## Q25. What is parameter sniffing / parameter sensitivity?

SQL Server may compile/reuse a plan based on parameter values. A plan ideal for one value distribution may perform poorly for another.

## Q26. What are statistics?

Metadata describing data distribution used by the optimizer for row estimates.

## Q27. What does `SCOPE_IDENTITY()` do?

Returns the last identity generated in the current scope.

## Q28. Identity vs Sequence?

Identity belongs to a table column. Sequence is an independent object that can generate numbers for multiple consumers.

## Q29. What is a trigger?

Code automatically executed in response to configured database/table events.

## Q30. What are `inserted` and `deleted`?

Logical tables exposed to DML triggers representing new and old row versions.

## Q31. Why must triggers be set-based?

A single DML statement may modify multiple rows.

## Q32. What is a correlated subquery?

A subquery referencing columns from the outer query.

## Q33. `EXISTS` vs `IN`?

Both can express membership. `EXISTS` maps naturally to existence checks and `NOT EXISTS` is robust for anti-join logic. Optimizer behavior depends on the specific query.

## Q34. What is a recursive CTE?

A CTE that repeatedly references itself to traverse hierarchical/recursive relationships.

## Q35. What is Query Store?

A database feature that records query, plan, and runtime history for performance troubleshooting and plan management.

---

# 78. Practice Exercises

Try to solve these before reading hints.

## Beginner

1. Create a `Vendors` table.
2. Add primary key and unique vendor code.
3. Insert 10 vendors.
4. Select vendors from Mumbai.
5. Sort vendors by name.
6. Update a vendor email.
7. Delete inactive vendors.
8. Count vendors per city.
9. Find cities having more than 2 vendors.
10. Return vendors with missing email.

## Intermediate

11. Create `Invoices` and `InvoiceLines`.
12. Join invoices to vendors.
13. Calculate invoice total from lines.
14. Find invoices with no lines.
15. Find duplicate invoice numbers per vendor.
16. Find top 5 invoices by amount.
17. Rank invoices by amount within vendor.
18. Find latest invoice for every vendor.
19. Calculate monthly invoice totals.
20. Compare current month vs previous month.

## Advanced

21. Build an approval hierarchy using recursive CTE.
22. Implement an invoice-posting transaction.
23. Write a stored procedure with optional filters.
24. Add error handling.
25. Create an audit trigger.
26. Create an appropriate filtered index.
27. Compare execution plan before and after index.
28. Find blocking sessions.
29. Simulate and resolve a deadlock in test sessions.
30. Design backup and restore strategy for RPO 15 minutes.

## Expert

31. Partition a large audit table by date in a lab environment.
32. Create a reporting workload using columnstore.
33. Design CDC-based warehouse ingestion.
34. Build Query Store regression investigation.
35. Compare row-versioning isolation against lock-based behavior.
36. Tune a parameter-sensitive stored procedure.
37. Design a secure multi-schema database.
38. Create automated maintenance and integrity jobs.
39. Test point-in-time restore.
40. Document HA/DR strategy with RPO and RTO.

---

# 79. Project Ideas

## Project 1: Employee Management System

Tables:

```text
Employee
Department
Designation
Attendance
Leave
Salary
EmployeeHistory
```

Learn:

- relationships
- views
- stored procedures
- reporting
- security
- window functions

## Project 2: Invoice Management System

Tables:

```text
Vendor
Invoice
InvoiceLine
PurchaseOrder
GoodsReceipt
Workflow
Approval
Posting
Payment
Audit
```

Learn:

- transactions
- workflow
- duplicate detection
- reconciliation
- indexing
- audit
- status history

## Project 3: E-Commerce Database

Tables:

```text
Customer
Product
Inventory
Order
OrderItem
Payment
Shipment
Return
```

Learn:

- transaction design
- inventory consistency
- reporting
- concurrency

## Project 4: Helpdesk System

Tables:

```text
Ticket
User
Category
Priority
StatusHistory
Comment
Attachment
SLA
```

Learn:

- SLA queries
- status history
- latest-row logic
- full-text search
- pagination

## Project 5: Banking Ledger

Tables:

```text
Account
Transaction
Transfer
Beneficiary
Audit
```

Learn:

- ACID
- isolation
- locking
- running balance
- audit
- security

---

# 80. MSSQL Learning Roadmap

## Stage 1 — Beginner

Master:

```text
Database
Table
Row
Column
Data types
CREATE
INSERT
SELECT
WHERE
ORDER BY
UPDATE
DELETE
Constraints
NULL
```

Target:

> Be able to create a small database and perform CRUD operations confidently.

## Stage 2 — SQL Developer

Master:

```text
Joins
GROUP BY
HAVING
Subqueries
EXISTS
CTE
Window functions
Views
Stored procedures
Functions
Transactions
TRY/CATCH
```

Target:

> Be able to write production-style business queries and database APIs.

## Stage 3 — Performance

Master:

```text
Indexes
Execution plans
Statistics
SARGability
Logical reads
Parameter sensitivity
Blocking
Deadlocks
Temp tables
Query Store
```

Target:

> Be able to diagnose why a query is slow instead of guessing.

## Stage 4 — Database Design

Master:

```text
Normalization
Keys
Relationships
Schemas
Data types
Constraints
Audit design
Archiving
Partition strategy
```

Target:

> Be able to design maintainable relational schemas.

## Stage 5 — Administration

Master:

```text
Backups
Restore
Recovery models
Agent
Security
Permissions
DBCC CHECKDB
Monitoring
Maintenance
```

Target:

> Understand how databases are safely operated in production.

## Stage 6 — Advanced

Learn as needed:

```text
CDC
Change Tracking
Temporal Tables
Columnstore
Partitioning
Full-text
Service Broker
Linked Servers
High Availability
Disaster Recovery
```

---

# 81. Quick Revision Cheat Sheet

## CRUD

```sql
INSERT INTO TableName (...) VALUES (...);

SELECT ...
FROM TableName
WHERE ...;

UPDATE TableName
SET Column = Value
WHERE ...;

DELETE FROM TableName
WHERE ...;
```

## Join

```sql
SELECT ...
FROM A
JOIN B
    ON B.Id = A.BId;
```

## Aggregation

```sql
SELECT
    GroupColumn,
    COUNT(*) AS Total,
    SUM(Amount) AS Amount
FROM TableName
GROUP BY GroupColumn
HAVING COUNT(*) > 1;
```

## CTE

```sql
WITH CTE AS
(
    SELECT ...
)
SELECT *
FROM CTE;
```

## Ranking

```sql
ROW_NUMBER() OVER
(
    PARTITION BY GroupColumn
    ORDER BY SortColumn DESC
)
```

## Previous Value

```sql
LAG(Amount) OVER
(
    ORDER BY DateColumn
)
```

## Transaction

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    -- changes

    COMMIT;
END TRY
BEGIN CATCH
    IF XACT_STATE() <> 0
        ROLLBACK;

    THROW;
END CATCH;
```

## Safe Date Range

```sql
WHERE DateTimeColumn >= @StartDate
  AND DateTimeColumn <  @EndDateExclusive;
```

## Duplicate Detection

```sql
SELECT
    Key1,
    Key2,
    COUNT(*)
FROM TableName
GROUP BY
    Key1,
    Key2
HAVING COUNT(*) > 1;
```

## Latest Row Per Group

```sql
WITH X AS
(
    SELECT
        *,
        ROW_NUMBER() OVER
        (
            PARTITION BY BusinessKey
            ORDER BY CreatedAt DESC
        ) AS rn
    FROM TableName
)
SELECT *
FROM X
WHERE rn = 1;
```

## Exists

```sql
WHERE EXISTS
(
    SELECT 1
    FROM Child c
    WHERE c.ParentId = p.ParentId
)
```

## Missing Child

```sql
WHERE NOT EXISTS
(
    SELECT 1
    FROM Child c
    WHERE c.ParentId = p.ParentId
)
```

## SARGable Date Filter

Avoid:

```sql
WHERE YEAR(OrderDate) = 2026
```

Prefer:

```sql
WHERE OrderDate >= '20260101'
  AND OrderDate <  '20270101'
```

---

# Bonus: SQL Logical Query Processing Order

A useful conceptual order is:

```text
FROM
JOIN / ON
WHERE
GROUP BY
HAVING
SELECT
DISTINCT
ORDER BY
TOP / OFFSET-FETCH behavior
```

This explains many SQL questions.

Example:

```sql
SELECT Salary * 12 AS AnnualSalary
FROM dbo.Employees
WHERE AnnualSalary > 700000;
```

`AnnualSalary` usually cannot be referenced directly in `WHERE` because the alias is established later in logical processing.

Use:

```sql
SELECT Salary * 12 AS AnnualSalary
FROM dbo.Employees
WHERE Salary * 12 > 700000;
```

or a CTE/subquery.

---

# Bonus: Set-Based Thinking

SQL is fundamentally set-oriented.

Beginner thinking:

```text
Get row 1
Process row 1
Get row 2
Process row 2
...
```

SQL thinking:

```text
Describe the entire set of rows that should change.
```

Example:

Instead of:

```text
For every inactive employee:
    update status
```

Use:

```sql
UPDATE dbo.Employees
SET SomeStatus = 'ARCHIVED'
WHERE IsActive = 0;
```

Set-based thinking is one of the most important skills for becoming strong in SQL.

---

# Bonus: Stored Procedure Production Template

```sql
CREATE OR ALTER PROCEDURE dbo.ProcessInvoice
    @InvoiceId BIGINT,
    @ProcessedBy VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;

    BEGIN TRY
        BEGIN TRANSACTION;

        IF NOT EXISTS
        (
            SELECT 1
            FROM dbo.Invoices
            WHERE InvoiceId = @InvoiceId
        )
        BEGIN
            THROW 50001, 'Invoice not found.', 1;
        END;

        IF EXISTS
        (
            SELECT 1
            FROM dbo.Invoices
            WHERE InvoiceId = @InvoiceId
              AND Status = 'POSTED'
        )
        BEGIN
            THROW 50002, 'Invoice already posted.', 1;
        END;

        -- Business processing goes here.

        UPDATE dbo.Invoices
        SET
            Status = 'PROCESSED',
            ProcessedBy = @ProcessedBy,
            ProcessedAt = SYSDATETIME()
        WHERE InvoiceId = @InvoiceId;

        INSERT INTO dbo.InvoiceAudit
        (
            InvoiceId,
            ActionName,
            ActionBy,
            ActionAt
        )
        VALUES
        (
            @InvoiceId,
            'PROCESSED',
            @ProcessedBy,
            SYSDATETIME()
        );

        COMMIT;
    END TRY
    BEGIN CATCH
        IF XACT_STATE() <> 0
            ROLLBACK;

        THROW;
    END CATCH;
END;
GO
```

Why this is useful:

- predictable transaction behavior
- input validation
- clear errors
- auditability
- `SET NOCOUNT ON`
- `SET XACT_ABORT ON`
- rollback on failure

---

# Bonus: Performance Troubleshooting Checklist

When a query is slow:

- [ ] Confirm the exact query.
- [ ] Confirm whether it is always slow or intermittently slow.
- [ ] Capture actual execution plan.
- [ ] Check logical reads.
- [ ] Check CPU and elapsed time.
- [ ] Check blocking.
- [ ] Check row-estimate accuracy.
- [ ] Check missing or redundant indexes.
- [ ] Check implicit conversions.
- [ ] Check SARGability.
- [ ] Check sort/hash spills where visible.
- [ ] Check parameter sensitivity.
- [ ] Check statistics freshness.
- [ ] Check whether too many rows are requested.
- [ ] Check whether application sends different parameter types.
- [ ] Check Query Store for regression.
- [ ] Re-test after every meaningful change.

Do not make five tuning changes simultaneously.

Otherwise you will not know which change helped.

---

# Bonus: Database Design Checklist

Before creating a table:

- [ ] What business entity does this table represent?
- [ ] What is the primary key?
- [ ] Is there a natural business key?
- [ ] Which columns are mandatory?
- [ ] Which values must be unique?
- [ ] Which columns need foreign keys?
- [ ] Which values need check constraints?
- [ ] Are data types correct?
- [ ] Should dates be `DATE` or `DATETIME2`?
- [ ] Is money stored as `DECIMAL`?
- [ ] Do we need audit columns?
- [ ] Do we need history?
- [ ] What are the important query patterns?
- [ ] Which indexes are justified?
- [ ] What is the expected data volume?
- [ ] What is the retention/archive strategy?
- [ ] Does sensitive data need special protection?

---

# Bonus: SQL Code Review Checklist

Review every important query for:

- [ ] Correct schema names
- [ ] No accidental `SELECT *`
- [ ] Correct joins
- [ ] Correct join cardinality
- [ ] Correct null handling
- [ ] Correct date boundaries
- [ ] Correct numeric precision
- [ ] Correct transaction scope
- [ ] Error handling
- [ ] Parameterization
- [ ] SQL-injection safety
- [ ] SARGable filters
- [ ] Appropriate indexes
- [ ] Set-based logic
- [ ] Multi-row trigger safety
- [ ] No unnecessary `NOLOCK`
- [ ] Deterministic ordering
- [ ] Pagination where needed
- [ ] Auditing where needed

---

# Bonus: Common SQL Server System Objects to Know

System catalog views:

```sql
sys.databases
sys.tables
sys.columns
sys.indexes
sys.index_columns
sys.objects
sys.schemas
sys.foreign_keys
sys.procedures
sys.views
```

Example: list tables:

```sql
SELECT
    s.name AS SchemaName,
    t.name AS TableName
FROM sys.tables t
INNER JOIN sys.schemas s
    ON s.schema_id = t.schema_id
ORDER BY
    s.name,
    t.name;
```

List columns:

```sql
SELECT
    t.name AS TableName,
    c.name AS ColumnName,
    ty.name AS DataType,
    c.max_length,
    c.is_nullable
FROM sys.tables t
INNER JOIN sys.columns c
    ON c.object_id = t.object_id
INNER JOIN sys.types ty
    ON ty.user_type_id = c.user_type_id
WHERE t.name = 'Employees'
ORDER BY c.column_id;
```

---

# Bonus: Useful Metadata and Diagnostic Commands

```sql
SELECT @@VERSION;
SELECT @@SERVERNAME;
SELECT DB_NAME();
SELECT SUSER_SNAME();
SELECT HOST_NAME();
SELECT APP_NAME();
SELECT @@SPID;
```

Procedure information:

```sql
EXEC sp_help 'dbo.Employees';
```

Object definition:

```sql
SELECT OBJECT_DEFINITION(OBJECT_ID('dbo.GetEmployeesByDepartment'));
```

---

# Bonus: Clean Naming Conventions

There is no single universal naming convention.

Choose one and stay consistent.

Example:

```text
dbo.Employee
dbo.Department
dbo.Invoice
dbo.InvoiceLine
dbo.Payment
```

Constraints:

```text
PK_Employee
FK_Employee_Department
UQ_Employee_EmployeeCode
CK_Invoice_Amount
DF_Employee_IsActive
```

Indexes:

```text
IX_Invoice_VendorId_InvoiceDate
UX_Invoice_Vendor_InvoiceNo
```

Stored procedures:

```text
dbo.Employee_GetById
dbo.Invoice_Create
dbo.Invoice_Post
```

Avoid prefixes such as `sp_` for custom procedures because `sp_` has special historical/system resolution implications.

---

# Bonus: Development vs Production Mindset

Development question:

```text
"Does the query return the correct result?"
```

Production questions:

```text
Does it remain correct under concurrency?
Does it perform with 100 million rows?
Does it block other requests?
Can we recover if it fails?
Can we audit what happened?
Can unauthorized users access the data?
Can the operation be retried?
Does it work when nulls or duplicate requests occur?
```

A strong SQL Server engineer thinks about both correctness **and operational behavior**.

---

# Bonus: What to Learn After This Handbook

After mastering this file, move deeper into:

1. query-optimizer internals
2. execution-plan analysis
3. wait statistics
4. memory grants
5. tempdb internals
6. transaction-log internals
7. row versioning
8. index internals
9. advanced Query Store
10. Extended Events
11. high availability
12. disaster recovery
13. automation with PowerShell
14. SQL Server in containers
15. Azure SQL Database
16. Azure SQL Managed Instance
17. data warehousing
18. dimensional modeling
19. ETL/ELT
20. SQL Server Integration Services where relevant
21. SQL Server Reporting Services where relevant
22. business intelligence ecosystems
23. security hardening
24. encryption
25. auditing and compliance

---

# Bonus: SQL Server 2025 Vector Essentials

SQL Server 2025 adds a native `VECTOR(n)` type for storing fixed-length numeric vectors. An **embedding** is a vector produced by a model to represent features or semantic meaning. Keeping an embedding beside its relational row can support “find similar items” queries while ordinary columns still enforce tenant, security, date, category, or status filters.

This example stores three-dimensional learning vectors; production embedding models commonly use many more dimensions, and every value inserted into a column must match its declared dimension count:

```sql
CREATE TABLE dbo.ArticleEmbeddings
(
    ArticleId BIGINT PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Embedding VECTOR(3) NOT NULL
);

INSERT INTO dbo.ArticleEmbeddings (ArticleId, Title, Embedding)
VALUES
    (1, N'Index design',  '[0.10, 0.20, 0.30]'),
    (2, N'Query tuning',  '[0.11, 0.19, 0.31]'),
    (3, N'Backup basics', '[0.90, 0.10, 0.05]');
```

`VECTOR_DISTANCE(metric, vector1, vector2)` returns a scalar `FLOAT` distance. Supported metrics include `'cosine'`, `'euclidean'`, and `'dot'`; for the first two, smaller distance means greater similarity.

```sql
DECLARE @QueryVector VECTOR(3) = '[0.10, 0.20, 0.29]';

SELECT TOP (2)
    ArticleId,
    Title,
    VECTOR_DISTANCE('cosine', @QueryVector, Embedding) AS Distance
FROM dbo.ArticleEmbeddings
ORDER BY Distance ASC, ArticleId ASC;
```

This is an **exact** nearest-neighbor query: it calculates distance for every row that survives earlier filters and does not use a vector index. It is simple and exact but becomes CPU-intensive over large candidate sets. Approximate vector indexes/search can trade some recall for speed, but their availability or preview status is version/platform-specific and must be verified before production use. The database also does not create embeddings automatically unless a separately configured model/integration is used; applications can generate embeddings and pass them as parameters.

---

# Official Learning References

Use Microsoft Learn as the source of truth for edition-, version-, and platform-sensitive behavior:

- [SQL Server technical documentation](https://learn.microsoft.com/en-us/sql/sql-server/)
- [SQL Server 2025 release notes](https://learn.microsoft.com/en-us/sql/sql-server/sql-server-2025-release-notes)
- [Transact-SQL reference](https://learn.microsoft.com/en-us/sql/t-sql/language-reference)
- [Database Engine documentation](https://learn.microsoft.com/en-us/sql/database-engine/sql-database-engine)
- [Indexes and performance](https://learn.microsoft.com/en-us/sql/relational-databases/indexes/indexes)
- [Transactions and locking](https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide)
- [Backup and restore](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/)
- [Security](https://learn.microsoft.com/en-us/sql/relational-databases/security/)
- [JSON data type](https://learn.microsoft.com/en-us/sql/t-sql/data-types/json-data-type)
- [Vector data type](https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type)
- [Visual Studio Code MSSQL extension](https://learn.microsoft.com/en-us/sql/tools/visual-studio-code-extensions/mssql/mssql-extension-visual-studio-code)

Check each article's **Applies to** list before copying syntax between SQL Server, Azure SQL Database, Azure SQL Managed Instance, and Microsoft Fabric.

---

# Final Mastery Advice

Do not aim to become a person who knows the largest number of SQL keywords.

Aim to become a person who can answer:

```text
What result does the business actually need?
What data model correctly represents it?
What query expresses that requirement clearly?
What happens when multiple users run it at the same time?
How will it behave with 10 rows?
How will it behave with 100 million rows?
How do I prove it is fast?
How do I recover if it fails?
How do I secure it?
How do I maintain it for years?
```

That is the difference between knowing SQL syntax and becoming a strong SQL Server engineer.

---

# Suggested 12-Week Study Plan

## Week 1

- SQL Server basics
- databases
- tables
- data types
- constraints
- CRUD

## Week 2

- filtering
- sorting
- functions
- null handling
- CASE
- aggregates

## Week 3

- joins
- UNION
- subqueries
- EXISTS

## Week 4

- CTEs
- recursive CTEs
- window functions

## Week 5

- views
- procedures
- functions
- triggers

## Week 6

- transactions
- TRY/CATCH
- isolation levels
- locks

## Week 7

- indexes
- execution plans
- statistics

## Week 8

- query optimization
- parameter sensitivity
- tempdb concepts
- blocking/deadlocks

## Week 9

- schemas
- permissions
- security
- auditing

## Week 10

- backup
- restore
- recovery models
- SQL Server Agent

## Week 11

- Query Store
- DMVs
- CDC
- temporal tables
- JSON/XML

## Week 12

- build a complete project
- tune it
- secure it
- back it up
- restore it
- document it
- practice interview questions

---

# End of Handbook

Keep this file as your master reference and extend it with:

- examples from your own projects
- execution plans you investigated
- production incidents you learned from
- reusable query templates
- company-specific standards
- interview questions
- performance findings
- backup/recovery procedures

The best SQL handbook is one that grows with your real experience.
