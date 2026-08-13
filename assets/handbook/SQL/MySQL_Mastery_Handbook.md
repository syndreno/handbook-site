# MySQL Mastery Handbook
## Beginner to Advanced — A Single Master Reference for Learning, Practice, Projects, Troubleshooting, Performance, and Interviews

> **Goal of this handbook:** Teach MySQL from the ground up in simple language, while also covering the concepts that working developers, database engineers, analysts, backend engineers, and interview candidates need in real projects.
>
> You can read this file from top to bottom as a course, or use the Table of Contents as a reference.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is MySQL?](#2-what-is-mysql)
3. [Database Fundamentals](#3-database-fundamentals)
4. [Installing and Connecting to MySQL](#4-installing-and-connecting-to-mysql)
5. [MySQL Architecture — Mental Model](#5-mysql-architecture--mental-model)
6. [SQL Command Categories](#6-sql-command-categories)
7. [Databases and Tables](#7-databases-and-tables)
8. [MySQL Data Types](#8-mysql-data-types)
9. [NULL, DEFAULT, AUTO_INCREMENT, and Generated Values](#9-null-default-auto_increment-and-generated-values)
10. [Constraints](#10-constraints)
11. [CRUD — INSERT, SELECT, UPDATE, DELETE](#11-crud--insert-select-update-delete)
12. [Filtering with WHERE](#12-filtering-with-where)
13. [Sorting, Limiting, and Pagination](#13-sorting-limiting-and-pagination)
14. [Operators and Expressions](#14-operators-and-expressions)
15. [String Functions](#15-string-functions)
16. [Numeric Functions](#16-numeric-functions)
17. [Date and Time](#17-date-and-time)
18. [Conditional Logic — CASE, IF, COALESCE](#18-conditional-logic--case-if-coalesce)
19. [Aggregate Functions](#19-aggregate-functions)
20. [GROUP BY and HAVING](#20-group-by-and-having)
21. [Joins](#21-joins)
22. [Self Joins and Advanced Join Scenarios](#22-self-joins-and-advanced-join-scenarios)
23. [Subqueries](#23-subqueries)
24. [Common Table Expressions — CTEs](#24-common-table-expressions--ctes)
25. [Recursive CTEs](#25-recursive-ctes)
26. [Set Operations — UNION and UNION ALL](#26-set-operations--union-and-union-all)
27. [Views](#27-views)
28. [Indexes](#28-indexes)
29. [EXPLAIN and Query Optimization](#29-explain-and-query-optimization)
30. [Transactions and ACID](#30-transactions-and-acid)
31. [Isolation Levels and Concurrency](#31-isolation-levels-and-concurrency)
32. [Locks and Deadlocks](#32-locks-and-deadlocks)
33. [Storage Engines and InnoDB](#33-storage-engines-and-innodb)
34. [Normalization](#34-normalization)
35. [Denormalization](#35-denormalization)
36. [Keys and Relationships](#36-keys-and-relationships)
37. [Database Design Workflow](#37-database-design-workflow)
38. [Stored Procedures](#38-stored-procedures)
39. [Stored Functions](#39-stored-functions)
40. [Triggers](#40-triggers)
41. [Events and Scheduled Jobs](#41-events-and-scheduled-jobs)
42. [Window Functions](#42-window-functions)
43. [JSON in MySQL](#43-json-in-mysql)
44. [Temporary Tables](#44-temporary-tables)
45. [User Variables and Session Variables](#45-user-variables-and-session-variables)
46. [Users, Roles, and Privileges](#46-users-roles-and-privileges)
47. [Security Best Practices](#47-security-best-practices)
48. [SQL Injection and Safe Application Queries](#48-sql-injection-and-safe-application-queries)
49. [Import, Export, Backup, and Restore](#49-import-export-backup-and-restore)
50. [Replication Fundamentals](#50-replication-fundamentals)
51. [High Availability and Scaling Concepts](#51-high-availability-and-scaling-concepts)
52. [Partitioning](#52-partitioning)
53. [Character Sets and Collations](#53-character-sets-and-collations)
54. [SQL Modes](#54-sql-modes)
55. [Metadata and INFORMATION_SCHEMA](#55-metadata-and-information_schema)
56. [Performance Schema and Monitoring](#56-performance-schema-and-monitoring)
57. [Common Performance Problems](#57-common-performance-problems)
58. [Schema Migration Strategy](#58-schema-migration-strategy)
59. [Soft Delete, Audit, and History Patterns](#59-soft-delete-audit-and-history-patterns)
60. [Multi-Tenant Database Patterns](#60-multi-tenant-database-patterns)
61. [Pagination Patterns](#61-pagination-patterns)
62. [Search Patterns](#62-search-patterns)
63. [Reporting and Analytics Patterns](#63-reporting-and-analytics-patterns)
64. [Financial and Invoice Database Scenarios](#64-financial-and-invoice-database-scenarios)
65. [E-Commerce Database Scenario](#65-e-commerce-database-scenario)
66. [HR and Attendance Database Scenario](#66-hr-and-attendance-database-scenario)
67. [Ticket / Workflow System Scenario](#67-ticket--workflow-system-scenario)
68. [Common MySQL Errors and Troubleshooting](#68-common-mysql-errors-and-troubleshooting)
69. [Anti-Patterns to Avoid](#69-anti-patterns-to-avoid)
70. [Testing SQL](#70-testing-sql)
71. [Interview Questions and Answers](#71-interview-questions-and-answers)
72. [Practice Exercises](#72-practice-exercises)
73. [Mini Projects](#73-mini-projects)
74. [Cheat Sheet](#74-cheat-sheet)
75. [Learning Roadmap](#75-learning-roadmap)
76. [Final Checklist](#76-final-checklist)

---

# 1. How to Use This Handbook

There are three useful ways to use this file.

### Path A — Complete Beginner

Read in this order:

```text
Database Fundamentals
→ Databases and Tables
→ Data Types
→ CRUD
→ WHERE
→ GROUP BY
→ Joins
→ Subqueries
→ Indexes
→ Transactions
→ Normalization
→ Projects
```

### Path B — Backend Developer

Focus on:

```text
Schema design
Constraints
CRUD
Joins
Indexes
Transactions
Isolation
Deadlocks
Query optimization
Security
Migrations
Pagination
JSON
Application patterns
```

### Path C — Database / Senior Developer

Focus on:

```text
EXPLAIN
Index design
Concurrency
Locking
Isolation
Partitioning
Replication
Monitoring
Performance Schema
High availability
Backup/restore
Schema evolution
```

### Recommended Learning Method

For every topic:

1. Read the concept.
2. Type the example manually.
3. Change the example.
4. Break it intentionally.
5. Understand the error.
6. Rebuild it from memory.
7. Apply it to a small project.

That approach is much more effective than memorizing syntax.

---

# 2. What Is MySQL?

MySQL is a **relational database management system**, usually abbreviated as **RDBMS**.

A database stores structured information.

Examples:

- users
- products
- invoices
- payments
- employees
- attendance
- orders
- application logs
- tickets
- workflows

MySQL allows applications to create, read, update, delete, search, validate, relate, aggregate, and protect this data.

## 2.1 Database vs DBMS vs MySQL

### Database

The actual organized collection of data.

Example:

```text
company_db
```

### DBMS

Software that manages databases.

Examples:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle Database
- MariaDB

### SQL

SQL means **Structured Query Language**.

SQL is the language used to communicate with a relational database.

Example:

```sql
SELECT *
FROM employees;
```

### MySQL

MySQL is a database server that understands SQL plus MySQL-specific features.

---

# 3. Database Fundamentals

Before learning syntax, understand the main database concepts.

## 3.1 Table

A table stores one type of entity.

Example:

```text
employees
```

| employee_id | name | department | salary |
|---:|---|---|---:|
| 1 | Asha | IT | 60000 |
| 2 | Rahul | HR | 45000 |

## 3.2 Row

A row represents one record.

Example:

```text
1, Asha, IT, 60000
```

## 3.3 Column

A column represents one property.

Examples:

```text
employee_id
name
department
salary
```

## 3.4 Primary Key

A primary key uniquely identifies a row.

```sql
employee_id BIGINT PRIMARY KEY
```

Two employees must not have the same `employee_id`.

## 3.5 Foreign Key

A foreign key creates a relationship between tables.

Example:

```text
employees.department_id
        ↓
departments.department_id
```

## 3.6 Schema

In MySQL, `SCHEMA` is effectively used as a synonym for `DATABASE`.

```sql
CREATE DATABASE company_db;
```

and:

```sql
CREATE SCHEMA company_db;
```

represent the same general idea.

## 3.7 Relational Thinking

Do not repeat everything in one giant table.

Bad:

```text
employee_name
department_name
department_manager
department_location
```

repeated for every employee.

Better:

```text
employees
departments
```

and relate them using a key.

---

# 4. Installing and Connecting to MySQL

Typical tools include:

- MySQL Server
- MySQL Shell
- MySQL command-line client
- MySQL Workbench
- DBeaver
- DataGrip
- application database drivers

## 4.1 Command-Line Login

```bash
mysql -u root -p
```

You will be prompted for the password.

## 4.2 Connect to a Specific Host

```bash
mysql -h 127.0.0.1 -P 3306 -u app_user -p
```

Important parameters:

| Parameter | Meaning |
|---|---|
| `-h` | host |
| `-P` | port |
| `-u` | username |
| `-p` | ask for password |

## 4.3 Common Commands

```sql
SHOW DATABASES;
```

```sql
USE company_db;
```

```sql
SHOW TABLES;
```

```sql
DESCRIBE employees;
```

```sql
SHOW CREATE TABLE employees;
```

```sql
SELECT VERSION();
```

---

# 5. MySQL Architecture — Mental Model

You do not need to become a DBA immediately, but you should know what happens conceptually.

```text
Application
    ↓
MySQL connection
    ↓
SQL parser
    ↓
Optimizer
    ↓
Execution engine
    ↓
Storage engine
    ↓
Data / indexes
```

## 5.1 Parser

Checks SQL syntax.

For example:

```sql
SELEC * FROM users;
```

fails because `SELECT` is misspelled.

## 5.2 Optimizer

The optimizer decides how the query should be executed.

For example:

```sql
SELECT *
FROM users
WHERE email = 'a@example.com';
```

If an index exists on `email`, the optimizer may use it instead of reading the whole table.

## 5.3 Storage Engine

The storage engine manages how data is stored and retrieved.

For most transactional applications, **InnoDB** is the important engine to understand.

---

# 6. SQL Command Categories

SQL is commonly grouped into categories.

## 6.1 DDL — Data Definition Language

Defines database structures.

```sql
CREATE TABLE
ALTER TABLE
DROP TABLE
TRUNCATE TABLE
```

## 6.2 DML — Data Manipulation Language

Changes table data.

```sql
INSERT
UPDATE
DELETE
```

## 6.3 DQL — Data Query Language

Reads data.

```sql
SELECT
```

## 6.4 TCL — Transaction Control Language

Controls transactions.

```sql
COMMIT
ROLLBACK
SAVEPOINT
```

## 6.5 DCL — Data Control Language

Controls permissions.

```sql
GRANT
REVOKE
```

---

# 7. Databases and Tables

## 7.1 Create Database

```sql
CREATE DATABASE learning_db;
```

Safer version:

```sql
CREATE DATABASE IF NOT EXISTS learning_db;
```

## 7.2 Select Database

```sql
USE learning_db;
```

## 7.3 Create Table

```sql
CREATE TABLE employees (
    employee_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employee_code VARCHAR(20) NOT NULL UNIQUE,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    salary DECIMAL(12,2),
    joining_date DATE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## 7.4 Describe Table

```sql
DESCRIBE employees;
```

## 7.5 Alter Table

Add a column:

```sql
ALTER TABLE employees
ADD COLUMN phone VARCHAR(20);
```

Change a column:

```sql
ALTER TABLE employees
MODIFY COLUMN phone VARCHAR(30);
```

Rename a column:

```sql
ALTER TABLE employees
RENAME COLUMN employee_name TO full_name;
```

Drop a column:

```sql
ALTER TABLE employees
DROP COLUMN phone;
```

## 7.6 Rename Table

```sql
RENAME TABLE employees TO staff;
```

## 7.7 DROP vs TRUNCATE vs DELETE

### DELETE

Removes rows and can use `WHERE`.

```sql
DELETE FROM employees
WHERE employee_id = 10;
```

### TRUNCATE

Removes all rows from the table.

```sql
TRUNCATE TABLE employees;
```

Use it when you intentionally want to clear the entire table.

### DROP

Removes the table itself.

```sql
DROP TABLE employees;
```

Think:

```text
DELETE   → remove records
TRUNCATE → empty the table
DROP     → remove the table
```

---

# 8. MySQL Data Types

Choosing the correct data type matters for:

- storage
- validation
- indexes
- performance
- correctness

---

## 8.1 Integer Types

Common types include:

```text
TINYINT
SMALLINT
MEDIUMINT
INT
BIGINT
```

Example:

```sql
age TINYINT UNSIGNED
```

```sql
employee_id BIGINT UNSIGNED
```

### Scenario

If your value is:

```text
0 or 1
```

you might use:

```sql
is_active BOOLEAN
```

In MySQL, `BOOLEAN` is treated as a numeric boolean-like type.

---

## 8.2 DECIMAL

Use `DECIMAL` for exact fixed-point values such as money.

```sql
invoice_amount DECIMAL(15,2)
```

Example values:

```text
1250.00
9999999.95
```

### Why not FLOAT for money?

Floating-point values can involve binary rounding behavior.

For money:

```text
Prefer DECIMAL
```

---

## 8.3 FLOAT and DOUBLE

Useful for approximate numeric measurements.

Examples:

- scientific values
- sensor readings
- approximate calculations

```sql
temperature DOUBLE
```

Do not default to them for financial amounts.

---

## 8.4 CHAR vs VARCHAR

### CHAR

Fixed-length string.

```sql
country_code CHAR(2)
```

Example:

```text
IN
US
GB
```

### VARCHAR

Variable-length string.

```sql
employee_name VARCHAR(100)
```

Use `VARCHAR` for:

- names
- email
- descriptions
- codes of varying length

---

## 8.5 TEXT

Useful for larger text.

```sql
comments TEXT
```

Possible uses:

- long remarks
- article content
- audit description
- workflow comments

Do not use `TEXT` automatically for every string.

---

## 8.6 DATE

Stores a calendar date.

```sql
invoice_date DATE
```

Example:

```text
2026-08-12
```

---

## 8.7 TIME

Stores a time value.

```sql
shift_start TIME
```

Example:

```text
09:30:00
```

---

## 8.8 DATETIME

Stores date and time.

```sql
approved_at DATETIME
```

---

## 8.9 TIMESTAMP

Also stores date/time and is commonly used for audit timestamps.

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

Be deliberate about timezone behavior in your application architecture.

---

## 8.10 ENUM

Example:

```sql
status ENUM('PENDING', 'APPROVED', 'REJECTED')
```

ENUM can be convenient for small, stable sets of values, but it can become awkward when business states change frequently.

Alternative:

```text
status table
```

or a validated `VARCHAR` depending on your design.

---

## 8.11 JSON

```sql
metadata JSON
```

Useful for optional or semi-structured attributes.

Example:

```json
{
  "source": "OCR",
  "confidence": 0.97
}
```

Do not use JSON to avoid designing normal relational columns when the values are important for joins, validation, filtering, and reporting.

---

## 8.12 Binary Types

Examples:

```text
BINARY
VARBINARY
BLOB
```

Possible uses:

- hashes
- binary payloads
- file data

In many application architectures, files are stored in object/file storage and only metadata/path/reference is stored in MySQL.

---

# 9. NULL, DEFAULT, AUTO_INCREMENT, and Generated Values

## 9.1 NULL

`NULL` means the value is absent or unknown.

It does not mean:

```text
0
''
false
```

Example:

```sql
middle_name VARCHAR(100) NULL
```

## 9.2 NOT NULL

```sql
full_name VARCHAR(100) NOT NULL
```

Use `NOT NULL` when the value is required.

## 9.3 DEFAULT

```sql
status VARCHAR(20) NOT NULL DEFAULT 'PENDING'
```

## 9.4 AUTO_INCREMENT

```sql
id BIGINT PRIMARY KEY AUTO_INCREMENT
```

The database automatically generates an increasing identifier.

## 9.5 Generated Columns

Example:

```sql
CREATE TABLE order_lines (
    quantity DECIMAL(12,2),
    unit_price DECIMAL(12,2),
    line_total DECIMAL(14,2)
        GENERATED ALWAYS AS (quantity * unit_price) STORED
);
```

Generated columns are useful when a value is derived consistently from other values.

---

# 10. Constraints

Constraints protect data quality.

## 10.1 PRIMARY KEY

```sql
employee_id BIGINT PRIMARY KEY
```

Characteristics:

- unique
- not null
- identifies one record

## 10.2 UNIQUE

```sql
email VARCHAR(255) UNIQUE
```

Prevents duplicate values according to the constraint semantics.

## 10.3 NOT NULL

```sql
invoice_no VARCHAR(100) NOT NULL
```

## 10.4 FOREIGN KEY

```sql
CREATE TABLE departments (
    department_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    employee_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    department_id BIGINT,
    full_name VARCHAR(100) NOT NULL,
    CONSTRAINT fk_employee_department
        FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

## 10.5 CHECK

Example:

```sql
salary DECIMAL(12,2) CHECK (salary >= 0)
```

## 10.6 Why Database Constraints Matter

Application validation is not enough.

Imagine two applications write to the same database:

```text
Web app
Batch job
```

If validation exists only in the web app, the batch job can still create invalid data.

Critical rules should often be protected at the database level too.

---

# 11. CRUD — INSERT, SELECT, UPDATE, DELETE

CRUD means:

```text
Create
Read
Update
Delete
```

---

## 11.1 INSERT

```sql
INSERT INTO employees (
    employee_code,
    employee_name,
    email,
    salary,
    joining_date
)
VALUES (
    'E001',
    'Asha Patil',
    'asha@example.com',
    60000.00,
    '2026-01-10'
);
```

### Insert Multiple Rows

```sql
INSERT INTO departments (department_name)
VALUES
    ('IT'),
    ('Finance'),
    ('HR');
```

---

## 11.2 SELECT

```sql
SELECT *
FROM employees;
```

Prefer selecting only required columns in production code:

```sql
SELECT
    employee_id,
    employee_name,
    email
FROM employees;
```

---

## 11.3 UPDATE

```sql
UPDATE employees
SET salary = 65000
WHERE employee_id = 1;
```

### Critical Safety Rule

Before executing a serious update:

```sql
SELECT *
FROM employees
WHERE employee_id = 1;
```

Verify the rows first.

Then execute the `UPDATE`.

---

## 11.4 DELETE

```sql
DELETE FROM employees
WHERE employee_id = 5;
```

Again, verify with `SELECT` first.

Dangerous:

```sql
DELETE FROM employees;
```

This deletes every row.

---

# 12. Filtering with WHERE

## 12.1 Equality

```sql
SELECT *
FROM employees
WHERE department_id = 5;
```

## 12.2 Comparison

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

Operators:

```text
=
<>
!=
>
<
>=
<=
```

## 12.3 AND

```sql
SELECT *
FROM employees
WHERE department_id = 5
  AND salary > 50000;
```

## 12.4 OR

```sql
SELECT *
FROM employees
WHERE department_id = 5
   OR department_id = 8;
```

## 12.5 Parentheses Matter

```sql
SELECT *
FROM employees
WHERE is_active = 1
  AND (department_id = 5 OR department_id = 8);
```

Without parentheses, the logic may mean something different.

---

## 12.6 IN

Instead of:

```sql
WHERE department_id = 1
   OR department_id = 2
   OR department_id = 3
```

use:

```sql
WHERE department_id IN (1, 2, 3)
```

---

## 12.7 BETWEEN

```sql
SELECT *
FROM invoices
WHERE invoice_date BETWEEN '2026-08-01' AND '2026-08-31';
```

Be especially careful when using date-time columns because the ending boundary may include only midnight if expressed as a date.

For `DATETIME`, a safer half-open interval is often:

```sql
WHERE created_at >= '2026-08-01'
  AND created_at <  '2026-09-01'
```

---

## 12.8 LIKE

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'Sho%';
```

Meaning:

```text
starts with Sho
```

```sql
WHERE employee_name LIKE '%Shaikh%'
```

Meaning:

```text
contains Shaikh
```

Wildcard characters:

```text
% → any number of characters
_ → one character
```

---

## 12.9 NULL Comparison

Wrong:

```sql
WHERE manager_id = NULL
```

Correct:

```sql
WHERE manager_id IS NULL
```

and:

```sql
WHERE manager_id IS NOT NULL
```

---

# 13. Sorting, Limiting, and Pagination

## 13.1 ORDER BY

Ascending:

```sql
SELECT *
FROM employees
ORDER BY employee_name ASC;
```

Descending:

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

Multiple columns:

```sql
ORDER BY department_id ASC, salary DESC;
```

## 13.2 LIMIT

```sql
SELECT *
FROM employees
ORDER BY employee_id DESC
LIMIT 10;
```

## 13.3 OFFSET Pagination

```sql
SELECT *
FROM invoices
ORDER BY invoice_id DESC
LIMIT 20 OFFSET 40;
```

This means:

```text
skip 40
return next 20
```

Equivalent MySQL syntax often seen:

```sql
LIMIT 40, 20;
```

For very large datasets, keyset pagination is often more efficient; it is covered later.

---

# 14. Operators and Expressions

## 14.1 Arithmetic

```sql
SELECT
    quantity,
    unit_price,
    quantity * unit_price AS line_total
FROM order_lines;
```

Operators:

```text
+
-
*
/
%
```

## 14.2 Logical

```text
AND
OR
NOT
```

## 14.3 Comparison

```text
=
!=
<>
>
<
>=
<=
```

## 14.4 Aliases

```sql
SELECT
    employee_name AS name,
    salary AS monthly_salary
FROM employees;
```

---

# 15. String Functions

## 15.1 CONCAT

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;
```

## 15.2 CONCAT_WS

```sql
SELECT CONCAT_WS(' - ', employee_code, employee_name)
FROM employees;
```

## 15.3 LENGTH

```sql
SELECT LENGTH(employee_name)
FROM employees;
```

Remember: byte length and character length are not always the same for multi-byte character sets.

## 15.4 CHAR_LENGTH

```sql
SELECT CHAR_LENGTH(employee_name)
FROM employees;
```

## 15.5 UPPER / LOWER

```sql
SELECT UPPER(employee_name)
FROM employees;
```

```sql
SELECT LOWER(email)
FROM employees;
```

## 15.6 TRIM

```sql
SELECT TRIM(employee_name)
FROM employees;
```

Useful when imported source data contains unnecessary spaces.

## 15.7 LEFT / RIGHT

```sql
SELECT LEFT(invoice_no, 3)
FROM invoices;
```

## 15.8 SUBSTRING

```sql
SELECT SUBSTRING(employee_code, 2, 4)
FROM employees;
```

## 15.9 REPLACE

```sql
SELECT REPLACE(phone, '-', '')
FROM employees;
```

## 15.10 LOCATE

```sql
SELECT LOCATE('@', email)
FROM employees;
```

---

# 16. Numeric Functions

## 16.1 ROUND

```sql
SELECT ROUND(125.678, 2);
```

Result:

```text
125.68
```

## 16.2 CEIL

```sql
SELECT CEIL(10.2);
```

Result:

```text
11
```

## 16.3 FLOOR

```sql
SELECT FLOOR(10.8);
```

Result:

```text
10
```

## 16.4 ABS

```sql
SELECT ABS(-500);
```

## 16.5 MOD

```sql
SELECT MOD(10, 3);
```

---

# 17. Date and Time

Date handling is one of the most important real-world database skills.

## 17.1 Current Date

```sql
SELECT CURRENT_DATE;
```

## 17.2 Current Date and Time

```sql
SELECT CURRENT_TIMESTAMP;
```

## 17.3 Date Addition

```sql
SELECT DATE_ADD('2026-08-12', INTERVAL 10 DAY);
```

## 17.4 Date Subtraction

```sql
SELECT DATE_SUB('2026-08-12', INTERVAL 1 MONTH);
```

## 17.5 DATEDIFF

```sql
SELECT DATEDIFF('2026-08-20', '2026-08-12');
```

## 17.6 Extract Components

```sql
SELECT YEAR(invoice_date)
FROM invoices;
```

```sql
SELECT MONTH(invoice_date)
FROM invoices;
```

```sql
SELECT DAY(invoice_date)
FROM invoices;
```

## 17.7 DATE_FORMAT

```sql
SELECT DATE_FORMAT(invoice_date, '%d-%m-%Y')
FROM invoices;
```

Useful for display, but generally store dates using date types instead of formatted strings.

## 17.8 Monthly Reporting

```sql
SELECT
    YEAR(invoice_date) AS yr,
    MONTH(invoice_date) AS mon,
    COUNT(*) AS invoice_count
FROM invoices
GROUP BY
    YEAR(invoice_date),
    MONTH(invoice_date)
ORDER BY yr, mon;
```

---

# 18. Conditional Logic — CASE, IF, COALESCE

## 18.1 CASE

```sql
SELECT
    employee_name,
    salary,
    CASE
        WHEN salary >= 100000 THEN 'HIGH'
        WHEN salary >= 50000 THEN 'MEDIUM'
        ELSE 'LOW'
    END AS salary_band
FROM employees;
```

## 18.2 Business Scenario

Invoice status:

```sql
SELECT
    invoice_no,
    CASE
        WHEN is_rejected = 1 THEN 'REJECTED'
        WHEN payment_date IS NOT NULL THEN 'PAID'
        WHEN erp_posted_date IS NOT NULL THEN 'POSTED'
        WHEN approved_at IS NOT NULL THEN 'APPROVED'
        ELSE 'PENDING'
    END AS display_status
FROM invoices;
```

The order matters.

A paid invoice may also be approved, so the most final condition should usually be tested first.

## 18.3 COALESCE

Returns the first non-NULL value.

```sql
SELECT COALESCE(phone, mobile, 'NO CONTACT')
FROM employees;
```

## 18.4 IFNULL

```sql
SELECT IFNULL(manager_name, 'No Manager')
FROM employees;
```

## 18.5 NULLIF

```sql
SELECT NULLIF(actual_value, expected_value);
```

It returns `NULL` when the two expressions are equal.

---

# 19. Aggregate Functions

Aggregate functions summarize multiple rows.

## 19.1 COUNT

```sql
SELECT COUNT(*)
FROM employees;
```

## 19.2 COUNT(column)

```sql
SELECT COUNT(email)
FROM employees;
```

`COUNT(email)` ignores NULL email values.

## 19.3 SUM

```sql
SELECT SUM(invoice_amount)
FROM invoices;
```

## 19.4 AVG

```sql
SELECT AVG(salary)
FROM employees;
```

## 19.5 MIN

```sql
SELECT MIN(salary)
FROM employees;
```

## 19.6 MAX

```sql
SELECT MAX(salary)
FROM employees;
```

---

# 20. GROUP BY and HAVING

## 20.1 GROUP BY

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;
```

## 20.2 SUM per Vendor

```sql
SELECT
    vendor_id,
    SUM(invoice_amount) AS total_amount
FROM invoices
GROUP BY vendor_id;
```

## 20.3 HAVING

`WHERE` filters rows before grouping.

`HAVING` filters grouped results.

```sql
SELECT
    vendor_id,
    SUM(invoice_amount) AS total_amount
FROM invoices
GROUP BY vendor_id
HAVING SUM(invoice_amount) > 1000000;
```

## 20.4 WHERE + HAVING

```sql
SELECT
    vendor_id,
    COUNT(*) AS invoice_count
FROM invoices
WHERE invoice_date >= '2026-01-01'
GROUP BY vendor_id
HAVING COUNT(*) >= 10;
```

---

# 21. Joins

Joins combine related tables.

Assume:

```text
employees
departments
```

## 21.1 INNER JOIN

Returns matching records.

```sql
SELECT
    e.employee_name,
    d.department_name
FROM employees e
INNER JOIN departments d
    ON d.department_id = e.department_id;
```

Mental model:

```text
only rows that match on both sides
```

## 21.2 LEFT JOIN

Returns all rows from the left table plus matching data from the right.

```sql
SELECT
    e.employee_name,
    d.department_name
FROM employees e
LEFT JOIN departments d
    ON d.department_id = e.department_id;
```

Employees without a department are still returned.

## 21.3 Find Missing Relationships

```sql
SELECT e.*
FROM employees e
LEFT JOIN departments d
    ON d.department_id = e.department_id
WHERE d.department_id IS NULL;
```

This pattern is extremely useful.

## 21.4 RIGHT JOIN

Returns all rows from the right side plus matches from the left.

```sql
SELECT
    e.employee_name,
    d.department_name
FROM employees e
RIGHT JOIN departments d
    ON d.department_id = e.department_id;
```

Many teams prefer rewriting logic using `LEFT JOIN` for readability.

## 21.5 CROSS JOIN

Produces every combination.

```sql
SELECT
    p.product_name,
    s.size_name
FROM products p
CROSS JOIN sizes s;
```

If:

```text
3 products
4 sizes
```

result:

```text
12 combinations
```

Use carefully because row counts can grow quickly.

---

# 22. Self Joins and Advanced Join Scenarios

## 22.1 Employee-Manager Relationship

Table:

```text
employees
------------------------------------------------
employee_id
employee_name
manager_id
```

`manager_id` points back to `employees.employee_id`.

Query:

```sql
SELECT
    e.employee_name AS employee,
    m.employee_name AS manager
FROM employees e
LEFT JOIN employees m
    ON m.employee_id = e.manager_id;
```

This is called a **self join**.

## 22.2 Join More Than Two Tables

```sql
SELECT
    i.invoice_no,
    v.vendor_name,
    c.company_name
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
JOIN companies c
    ON c.company_id = i.company_id;
```

## 22.3 Avoid Accidental Row Multiplication

Suppose:

```text
invoice
→ 5 line items
→ 3 approvals
```

If you join both child tables directly:

```text
5 × 3 = 15 rows
```

This can produce incorrect totals.

Solutions may include:

- aggregate one child first
- use separate subqueries
- use CTEs
- carefully define join granularity

Always ask:

> What does one row in my result represent?

---

# 23. Subqueries

A subquery is a query inside another query.

## 23.1 Scalar Subquery

```sql
SELECT
    employee_name,
    salary,
    (SELECT AVG(salary) FROM employees) AS company_average
FROM employees;
```

## 23.2 Filter Using Subquery

```sql
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

## 23.3 IN Subquery

```sql
SELECT *
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location = 'Mumbai'
);
```

## 23.4 EXISTS

```sql
SELECT v.*
FROM vendors v
WHERE EXISTS (
    SELECT 1
    FROM invoices i
    WHERE i.vendor_id = v.vendor_id
);
```

Interpretation:

```text
return vendors that have at least one invoice
```

## 23.5 NOT EXISTS

```sql
SELECT v.*
FROM vendors v
WHERE NOT EXISTS (
    SELECT 1
    FROM invoices i
    WHERE i.vendor_id = v.vendor_id
);
```

Useful for:

```text
vendors with no invoices
employees with no attendance
orders with no payment
```

---

# 24. Common Table Expressions — CTEs

A CTE makes complex SQL easier to understand.

```sql
WITH vendor_totals AS (
    SELECT
        vendor_id,
        SUM(invoice_amount) AS total_amount
    FROM invoices
    GROUP BY vendor_id
)
SELECT *
FROM vendor_totals
WHERE total_amount > 100000;
```

## Why CTEs Help

They let you break a large query into logical steps.

Instead of:

```text
one massive nested query
```

you can think:

```text
Step 1 → filter
Step 2 → aggregate
Step 3 → join
Step 4 → display
```

## Multi-CTE Example

```sql
WITH paid AS (
    SELECT *
    FROM invoices
    WHERE payment_date IS NOT NULL
),
vendor_summary AS (
    SELECT
        vendor_id,
        COUNT(*) AS invoice_count,
        SUM(invoice_amount) AS total_paid
    FROM paid
    GROUP BY vendor_id
)
SELECT *
FROM vendor_summary;
```

---

# 25. Recursive CTEs

Recursive CTEs are useful for hierarchical data.

Example:

```text
CEO
 ├─ Manager A
 │   ├─ Employee 1
 │   └─ Employee 2
 └─ Manager B
```

Example query:

```sql
WITH RECURSIVE hierarchy AS (
    SELECT
        employee_id,
        employee_name,
        manager_id,
        0 AS level
    FROM employees
    WHERE employee_id = 1

    UNION ALL

    SELECT
        e.employee_id,
        e.employee_name,
        e.manager_id,
        h.level + 1
    FROM employees e
    JOIN hierarchy h
        ON e.manager_id = h.employee_id
)
SELECT *
FROM hierarchy;
```

Use cases:

- organization hierarchy
- category trees
- approval hierarchy
- folder trees
- bill of materials

---

# 26. Set Operations — UNION and UNION ALL

## 26.1 UNION ALL

Combines result sets and keeps duplicates.

```sql
SELECT email FROM customers
UNION ALL
SELECT email FROM vendors;
```

## 26.2 UNION

Combines result sets and removes duplicates.

```sql
SELECT email FROM customers
UNION
SELECT email FROM vendors;
```

## Performance Thinking

If duplicate removal is not needed, prefer:

```text
UNION ALL
```

because removing duplicates requires additional work.

---

# 27. Views

A view is a stored SQL query exposed like a table.

```sql
CREATE VIEW active_employees AS
SELECT
    employee_id,
    employee_name,
    department_id
FROM employees
WHERE is_active = 1;
```

Use:

```sql
SELECT *
FROM active_employees;
```

## Good Uses

- reusable reporting logic
- simplified access
- hiding unnecessary columns
- compatibility layer
- centralizing complex joins

## Caution

A view is not automatically a performance optimization.

Complex views can hide expensive SQL.

Always inspect the actual query plan.

---

# 28. Indexes

Indexes are one of the most important MySQL performance topics.

Think of an index like the index at the back of a book.

Without an index:

```text
read many/all rows
```

With a useful index:

```text
navigate to matching rows more directly
```

## 28.1 Create Index

```sql
CREATE INDEX idx_employees_email
ON employees(email);
```

## 28.2 Unique Index

```sql
CREATE UNIQUE INDEX ux_employees_code
ON employees(employee_code);
```

## 28.3 Composite Index

```sql
CREATE INDEX idx_invoice_vendor_date
ON invoices(vendor_id, invoice_date);
```

Column order matters.

For this index:

```text
(vendor_id, invoice_date)
```

queries filtering by:

```text
vendor_id
```

can often benefit.

Queries filtering only by:

```text
invoice_date
```

may not benefit from the same index in the same way.

This is related to the **leftmost prefix** concept.

## 28.4 Good Candidates for Indexes

Columns used frequently in:

- `WHERE`
- `JOIN`
- `ORDER BY`
- `GROUP BY`
- uniqueness checks

Examples:

```text
email
employee_code
invoice_no
vendor_id
created_at
status
```

But index usefulness depends on selectivity and query patterns.

## 28.5 Too Many Indexes

Indexes improve reads but add work to:

- INSERT
- UPDATE
- DELETE

because indexes must also be maintained.

Do not create indexes blindly.

## 28.6 Covering Index Concept

Suppose query:

```sql
SELECT invoice_no, invoice_date
FROM invoices
WHERE vendor_id = 100;
```

A carefully designed index may contain all data required by the query, reducing additional row lookups.

Do not chase covering indexes for every query; balance read performance against index size and write cost.

---

# 29. EXPLAIN and Query Optimization

Use `EXPLAIN` to inspect how MySQL plans to execute a query.

```sql
EXPLAIN
SELECT *
FROM invoices
WHERE vendor_id = 100;
```

Depending on version and need, other EXPLAIN forms may provide more detail.

## 29.1 Important Things to Observe

Look for concepts such as:

- access type
- possible indexes
- selected index
- estimated rows
- filtering
- extra operations
- sorting
- temporary work

## 29.2 Query Optimization Workflow

Use this order:

```text
1. Identify slow query
2. Verify query requirement
3. Check row counts
4. Run EXPLAIN
5. Check existing indexes
6. Check WHERE / JOIN conditions
7. Reduce unnecessary columns
8. Rewrite if necessary
9. Add or modify index if justified
10. Re-test
```

## 29.3 Avoid Function on Indexed Column When Possible

Potentially less index-friendly:

```sql
WHERE DATE(created_at) = '2026-08-12'
```

Often better:

```sql
WHERE created_at >= '2026-08-12 00:00:00'
  AND created_at <  '2026-08-13 00:00:00'
```

## 29.4 Avoid Leading Wildcard for Normal B-Tree Search

```sql
WHERE name LIKE '%abc'
```

may not use a normal index efficiently for prefix lookup.

Where appropriate:

```sql
WHERE name LIKE 'abc%'
```

is more index-friendly.

For advanced text search, consider full-text search or an external search system depending on requirements.

## 29.5 Do Not Use SELECT * Without Need

Instead of:

```sql
SELECT *
FROM huge_table;
```

select what is required:

```sql
SELECT
    invoice_id,
    invoice_no,
    invoice_amount
FROM huge_table;
```

Benefits can include:

- less network data
- less memory
- better covering-index opportunities
- clearer API contracts

---

# 30. Transactions and ACID

A transaction groups database operations into one logical unit.

Example:

```text
Transfer ₹1,000:
1. debit account A
2. credit account B
```

Both should succeed together.

## 30.1 Transaction Example

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

COMMIT;
```

If something fails:

```sql
ROLLBACK;
```

## 30.2 ACID

### Atomicity

All operations happen or none happen.

### Consistency

Data rules remain valid.

### Isolation

Concurrent transactions should not interfere in unsafe ways.

### Durability

Committed data should survive expected failures according to the database's durability configuration.

---

## 30.3 Savepoints

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

SAVEPOINT after_debit;

UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

ROLLBACK TO SAVEPOINT after_debit;

COMMIT;
```

Use savepoints carefully; application transaction design should remain understandable.

---

# 31. Isolation Levels and Concurrency

Multiple users can update data simultaneously.

Isolation levels determine how transactions interact.

Common isolation levels:

```text
READ UNCOMMITTED
READ COMMITTED
REPEATABLE READ
SERIALIZABLE
```

## 31.1 Dirty Read

Transaction A changes a value but has not committed.

Transaction B reads that uncommitted value.

If A rolls back, B read data that never became permanent.

## 31.2 Non-Repeatable Read

A transaction reads the same row twice and gets different committed values because another transaction updated it.

## 31.3 Phantom Read

A transaction repeats a range query and sees new or removed matching rows because another transaction inserted/deleted data.

## 31.4 Setting Isolation

Example:

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

Do not change isolation level just because one sounds "safer."

Higher isolation can increase contention.

Choose based on application correctness requirements.

---

# 32. Locks and Deadlocks

## 32.1 Why Locks Exist

Imagine two requests update the same invoice simultaneously.

Without concurrency control:

```text
Request A reads 100
Request B reads 100
A writes 110
B writes 120
```

One change may overwrite the other.

Locks help coordinate concurrent modifications.

## 32.2 SELECT ... FOR UPDATE

```sql
START TRANSACTION;

SELECT balance
FROM accounts
WHERE account_id = 1
FOR UPDATE;

UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

COMMIT;
```

Use only inside an intentional transaction.

## 32.3 Deadlock

Example:

```text
Transaction A locks row 1
Transaction B locks row 2
A waits for row 2
B waits for row 1
```

Now both wait on each other.

MySQL/InnoDB can detect deadlocks and abort one transaction.

Your application should generally be prepared to retry appropriate transactions.

## 32.4 Reduce Deadlocks

Common practices:

- keep transactions short
- access rows in consistent order
- use appropriate indexes
- avoid unnecessary locks
- do not keep database transactions open while waiting for user input
- retry deadlock victims safely

---

# 33. Storage Engines and InnoDB

A storage engine handles physical data storage behavior.

For normal transactional applications, focus on **InnoDB**.

Important InnoDB concepts include:

- transactions
- row-level locking behavior
- foreign keys
- crash recovery
- clustered primary key organization
- MVCC

## 33.1 Check Table Engine

```sql
SHOW TABLE STATUS LIKE 'employees';
```

or:

```sql
SHOW CREATE TABLE employees;
```

## 33.2 Clustered Primary Key Concept

InnoDB organizes table data around the primary key.

Therefore:

- primary key choice matters
- very wide primary keys can make secondary indexes larger
- random insertion patterns can affect page behavior

A common choice for internal identifiers is:

```sql
BIGINT AUTO_INCREMENT
```

but UUID-based designs are also possible when their tradeoffs are understood.

---

# 34. Normalization

Normalization reduces unnecessary duplication and data anomalies.

## 34.1 Bad Design

```text
invoice
--------------------------------------------------
invoice_no
vendor_name
vendor_address
vendor_gst
vendor_phone
vendor_email
```

If a vendor appears on 50,000 invoices, master information is repeated 50,000 times.

## 34.2 Better Design

```text
vendors
--------
vendor_id
vendor_name
gst_no
...

invoices
--------
invoice_id
vendor_id
invoice_no
...
```

## 34.3 First Normal Form — 1NF

Store atomic values.

Bad:

```text
phone_numbers = "9999,8888,7777"
```

Better:

```text
employee_phones
---------------
employee_id
phone_number
```

when multiple phones are a real relational entity.

## 34.4 Second Normal Form — 2NF

A non-key attribute should depend on the full candidate key, especially relevant to composite-key designs.

## 34.5 Third Normal Form — 3NF

Non-key attributes should not depend on other non-key attributes in a way that creates transitive duplication.

Example:

Bad:

```text
employee_id
department_id
department_name
```

`department_name` depends on `department_id`, not directly on the employee identity.

Move it to:

```text
departments
```

## 34.6 Practical Rule

Normalize until:

- data has a clear owner
- duplication is controlled
- relationships are clear
- update anomalies are reduced

Then denormalize only when a measured requirement justifies it.

---

# 35. Denormalization

Denormalization intentionally duplicates or precomputes data for a reason.

Example:

```text
daily_sales_summary
```

stores pre-aggregated daily totals instead of calculating billions of records repeatedly.

Use when:

- reporting is expensive
- historical snapshot must be preserved
- read latency requirements justify it
- data warehouse/star schema needs it

Do not denormalize because joins "look difficult."

---

# 36. Keys and Relationships

## 36.1 Natural Key

A value that already has business meaning.

Example:

```text
employee_code = 'SG12345'
```

## 36.2 Surrogate Key

Artificial identifier:

```text
employee_id = 9872
```

## 36.3 Composite Key

Multiple columns form one key.

Example:

```sql
PRIMARY KEY (order_id, product_id)
```

## 36.4 One-to-One

Example:

```text
users
user_profiles
```

One user has one profile.

## 36.5 One-to-Many

Example:

```text
vendor
  ↓
many invoices
```

## 36.6 Many-to-Many

Example:

```text
users
roles
user_roles
```

`user_roles` is the bridge table.

```sql
CREATE TABLE user_roles (
    user_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);
```

---

# 37. Database Design Workflow

When creating a new system, use a repeatable process.

## Step 1 — Identify Entities

For an invoice system:

```text
Vendor
Invoice
Invoice Line
Purchase Order
Approval
Payment
User
Company
Location
```

## Step 2 — Define One Responsibility per Table

Example:

```text
vendors → vendor master
invoices → invoice header
invoice_lines → invoice line details
approvals → approval history
```

## Step 3 — Define Keys

Use stable identifiers.

## Step 4 — Define Relationships

```text
vendor 1 → many invoices
invoice 1 → many lines
invoice 1 → many approvals
```

## Step 5 — Define Constraints

Examples:

```text
invoice_no required
amount >= 0
vendor exists
company exists
```

## Step 6 — Define Expected Queries

Do not design only for writes.

Ask:

```text
How will users search?
How will reports filter?
Which joins happen every request?
```

## Step 7 — Add Indexes Based on Access Patterns

Example:

```text
Find invoice by:
company_id + vendor_id + invoice_no
```

Possible index:

```sql
CREATE INDEX idx_invoice_lookup
ON invoices(company_id, vendor_id, invoice_no);
```

## Step 8 — Test with Realistic Data Volume

A query that is fast with 100 rows may be slow with 10 million.

---

# 38. Stored Procedures

A stored procedure is reusable logic stored in the database.

```sql
DELIMITER //

CREATE PROCEDURE get_employee_by_department(
    IN p_department_id BIGINT
)
BEGIN
    SELECT
        employee_id,
        employee_name,
        email
    FROM employees
    WHERE department_id = p_department_id;
END //

DELIMITER ;
```

Call:

```sql
CALL get_employee_by_department(5);
```

## Good Uses

- controlled database-side operations
- legacy enterprise systems
- batch routines
- encapsulated reporting logic
- operations shared by multiple applications

## Caution

Business logic split across application code and dozens of procedures can become difficult to version, test, and deploy.

Use deliberately.

---

# 39. Stored Functions

A stored function returns a value.

```sql
DELIMITER //

CREATE FUNCTION calculate_tax(
    amount DECIMAL(15,2),
    tax_rate DECIMAL(6,3)
)
RETURNS DECIMAL(15,2)
DETERMINISTIC
BEGIN
    RETURN amount * tax_rate / 100;
END //

DELIMITER ;
```

Use:

```sql
SELECT calculate_tax(1000, 18);
```

---

# 40. Triggers

A trigger runs automatically when a table event occurs.

Example:

```sql
DELIMITER //

CREATE TRIGGER trg_invoice_after_update
AFTER UPDATE ON invoices
FOR EACH ROW
BEGIN
    IF OLD.status <> NEW.status THEN
        INSERT INTO invoice_status_history (
            invoice_id,
            old_status,
            new_status,
            changed_at
        )
        VALUES (
            NEW.invoice_id,
            OLD.status,
            NEW.status,
            CURRENT_TIMESTAMP
        );
    END IF;
END //

DELIMITER ;
```

## Trigger Events

Examples:

```text
BEFORE INSERT
AFTER INSERT
BEFORE UPDATE
AFTER UPDATE
BEFORE DELETE
AFTER DELETE
```

## Caution

Triggers are invisible from normal application flow.

Too much logic in triggers can make debugging difficult.

Use triggers when automatic database-level behavior is justified and documented.

---

# 41. Events and Scheduled Jobs

MySQL can execute scheduled events when the event scheduler is enabled/configured.

Example:

```sql
CREATE EVENT archive_old_logs
ON SCHEDULE EVERY 1 DAY
DO
    DELETE FROM application_logs
    WHERE created_at < CURRENT_DATE - INTERVAL 90 DAY;
```

Possible uses:

- cleanup
- archival
- summary tables
- scheduled maintenance

In many production environments, teams prefer an external scheduler because it offers centralized job monitoring and deployment. Choose based on operational needs.

---

# 42. Window Functions

Window functions perform calculations across related rows **without collapsing the result like GROUP BY**.

This is one of the most important advanced SQL topics.

## 42.1 ROW_NUMBER

```sql
SELECT
    employee_id,
    department_id,
    salary,
    ROW_NUMBER() OVER (
        PARTITION BY department_id
        ORDER BY salary DESC
    ) AS salary_rank
FROM employees;
```

## 42.2 RANK

```sql
RANK() OVER (
    PARTITION BY department_id
    ORDER BY salary DESC
)
```

If two salaries tie, they receive the same rank and the next rank may be skipped.

## 42.3 DENSE_RANK

Similar to `RANK`, but does not leave rank gaps.

## 42.4 Top 3 Employees per Department

```sql
WITH ranked AS (
    SELECT
        employee_id,
        employee_name,
        department_id,
        salary,
        ROW_NUMBER() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC
        ) AS rn
    FROM employees
)
SELECT *
FROM ranked
WHERE rn <= 3;
```

## 42.5 Running Total

```sql
SELECT
    transaction_date,
    amount,
    SUM(amount) OVER (
        ORDER BY transaction_date
    ) AS running_total
FROM transactions;
```

## 42.6 Previous Row — LAG

```sql
SELECT
    invoice_date,
    invoice_amount,
    LAG(invoice_amount) OVER (
        ORDER BY invoice_date
    ) AS previous_amount
FROM invoices;
```

## 42.7 Next Row — LEAD

```sql
LEAD(status) OVER (
    ORDER BY changed_at
)
```

Useful in history analysis.

---

# 43. JSON in MySQL

MySQL can store and query JSON documents.

## 43.1 Create JSON Column

```sql
CREATE TABLE ocr_results (
    ocr_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    extracted_data JSON NOT NULL
);
```

## 43.2 Insert JSON

```sql
INSERT INTO ocr_results (
    invoice_id,
    extracted_data
)
VALUES (
    1,
    JSON_OBJECT(
        'invoice_no', 'INV-1001',
        'confidence', 0.98
    )
);
```

## 43.3 Extract JSON Value

```sql
SELECT
    JSON_EXTRACT(extracted_data, '$.invoice_no')
FROM ocr_results;
```

Common shorthand:

```sql
SELECT extracted_data->'$.invoice_no'
FROM ocr_results;
```

For unquoted scalar text in supported contexts:

```sql
SELECT extracted_data->>'$.invoice_no'
FROM ocr_results;
```

## 43.4 When JSON Is Appropriate

Good:

```text
OCR raw metadata
dynamic provider payload
rare optional attributes
external API snapshot
```

Bad:

```text
put every invoice field inside one JSON column
```

if the fields are required for:

- joins
- reports
- constraints
- search
- accounting logic

A useful hybrid:

```text
important business fields → regular columns
raw provider payload      → JSON
```

---

# 44. Temporary Tables

Temporary tables exist for the current session.

```sql
CREATE TEMPORARY TABLE temp_vendor_totals AS
SELECT
    vendor_id,
    SUM(invoice_amount) AS total_amount
FROM invoices
GROUP BY vendor_id;
```

Use:

```sql
SELECT *
FROM temp_vendor_totals;
```

Potential uses:

- complex multi-step processing
- temporary batch calculations
- breaking down difficult procedures

Do not use temporary tables when a simple CTE or direct query is clearer.

---

# 45. User Variables and Session Variables

Example user variable:

```sql
SET @company_id = 2;
```

Use:

```sql
SELECT *
FROM invoices
WHERE company_id = @company_id;
```

System/session settings are different from user-defined variables.

Use session-level configuration carefully because connection pools can reuse sessions.

---

# 46. Users, Roles, and Privileges

Do not let every application connect as `root`.

## 46.1 Create User

```sql
CREATE USER 'app_user'@'10.%'
IDENTIFIED BY 'strong-password-here';
```

## 46.2 Grant Privileges

```sql
GRANT SELECT, INSERT, UPDATE, DELETE
ON app_db.*
TO 'app_user'@'10.%';
```

## 46.3 Read-Only User

```sql
GRANT SELECT
ON reporting_db.*
TO 'report_user'@'10.%';
```

## 46.4 Principle of Least Privilege

Give only the permissions required.

Example:

```text
reporting dashboard
```

probably does not need:

```text
DROP
ALTER
CREATE USER
```

## 46.5 Roles

Where roles are used in your MySQL environment, group privileges into roles rather than repeating every grant per user.

---

# 47. Security Best Practices

Database security is not only about passwords.

Important practices:

- use least privilege
- avoid root for applications
- keep MySQL patched
- restrict network access
- use TLS where required
- keep secrets outside source code
- rotate credentials
- encrypt sensitive backups
- audit privileged actions
- validate input
- use parameterized queries
- protect personal and financial data
- separate environments
- avoid production copies on developer laptops unless properly sanitized

## 47.1 Do Not Store Plain Passwords

Application passwords should be stored using a modern password hashing algorithm in the application/security layer, not reversible plaintext.

Database example:

```text
password_hash
```

not:

```text
password
```

---

# 48. SQL Injection and Safe Application Queries

Dangerous application code conceptually:

```text
"SELECT * FROM users WHERE email = '" + userInput + "'"
```

An attacker can manipulate the SQL structure.

Correct approach:

```text
parameterized / prepared queries
```

Example pseudo-code:

```text
SELECT *
FROM users
WHERE email = ?
```

Then bind:

```text
userInput
```

Do not "fix" SQL injection by manually adding quotes or replacing a few characters.

Use the database driver's parameter mechanism.

---

# 49. Import, Export, Backup, and Restore

## 49.1 Export with mysqldump

Typical logical backup:

```bash
mysqldump -u root -p app_db > app_db.sql
```

## 49.2 Restore

```bash
mysql -u root -p app_db < app_db.sql
```

## 49.3 Export Selected Tables

```bash
mysqldump -u root -p app_db users invoices > selected.sql
```

## 49.4 Important Backup Principle

A backup is not proven until restore is tested.

You need answers to:

```text
Can we restore?
How long will restore take?
How much data can we lose?
Where are backups stored?
Are backups encrypted?
Are backup credentials protected?
```

## 49.5 RPO

Recovery Point Objective:

```text
How much data loss is acceptable?
```

## 49.6 RTO

Recovery Time Objective:

```text
How long can recovery take?
```

---

# 50. Replication Fundamentals

Replication means maintaining copies of database changes on another server.

Conceptual model:

```text
Primary
  ↓
Replica 1
Replica 2
```

Possible uses:

- read scaling
- disaster recovery architecture
- analytics isolation
- high availability components

Important:

> A replica is not automatically a backup.

If someone deletes important rows on the primary, that deletion may replicate too.

---

# 51. High Availability and Scaling Concepts

Scaling databases requires understanding where the bottleneck actually is.

## 51.1 Vertical Scaling

Upgrade one server:

```text
more CPU
more RAM
faster storage
```

## 51.2 Read Scaling

Send read-only traffic to replicas.

## 51.3 Caching

Use cache for hot reusable data when appropriate.

Example:

```text
product catalog
configuration
session-derived data
```

## 51.4 Sharding

Split data across multiple databases.

Example:

```text
customer_id 1-1M   → shard A
customer_id 1M-2M  → shard B
```

Sharding adds significant complexity:

- distributed queries
- rebalancing
- global uniqueness
- transactions across shards
- operational overhead

Do not shard prematurely.

## 51.5 Connection Pooling

Applications should normally use a bounded connection pool instead of opening unlimited connections.

Too many connections can exhaust server resources.

---

# 52. Partitioning

Partitioning divides one logical table into partitions according to a partitioning rule.

Possible use case:

```text
very large transaction history
```

with partitioning by date.

Partitioning is not a substitute for indexes.

Use it only when:

- table is genuinely large
- maintenance or pruning benefits are understood
- queries match the partition strategy
- operational behavior has been tested

---

# 53. Character Sets and Collations

Character set controls how characters are encoded.

Collation controls comparison and sort behavior.

For modern multilingual applications, UTF-8-compatible MySQL configurations are typically used.

Example table definition:

```sql
CREATE TABLE customers (
    customer_id BIGINT PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL
) CHARACTER SET utf8mb4;
```

Collation affects things like:

- case sensitivity
- accent sensitivity
- ordering
- uniqueness behavior

Never change collation blindly on a production table without testing index and comparison effects.

---

# 54. SQL Modes

SQL modes affect server behavior for certain input and query situations.

Check:

```sql
SELECT @@sql_mode;
```

Why it matters:

- invalid date handling
- strictness
- grouping behavior
- data truncation behavior

Do not solve application errors by disabling strict behavior without understanding the underlying problem.

---

# 55. Metadata and INFORMATION_SCHEMA

`INFORMATION_SCHEMA` contains metadata about databases.

## 55.1 Find Tables

```sql
SELECT
    table_schema,
    table_name
FROM information_schema.tables
WHERE table_schema = 'app_db';
```

## 55.2 Find Columns

```sql
SELECT
    table_name,
    column_name,
    data_type
FROM information_schema.columns
WHERE table_schema = 'app_db'
  AND column_name = 'invoice_no';
```

Very useful when you inherit a large system and need to discover where a field is stored.

## 55.3 Find Indexes

```sql
SELECT
    table_name,
    index_name,
    column_name
FROM information_schema.statistics
WHERE table_schema = 'app_db'
ORDER BY table_name, index_name, seq_in_index;
```

---

# 56. Performance Schema and Monitoring

MySQL exposes performance instrumentation that can help diagnose database activity.

At a high level, monitoring should answer:

```text
Which queries are slow?
Which queries run most often?
Which tables receive most reads/writes?
Are transactions waiting?
Are locks accumulating?
Are connections exhausted?
Is memory pressure high?
Is disk I/O saturated?
Are replicas lagging?
```

Useful operational signals include:

- active connections
- threads
- query latency
- rows examined
- buffer pool behavior
- lock waits
- deadlocks
- disk latency
- CPU
- replication status

Do not optimize from guesswork.

Measure first.

---

# 57. Common Performance Problems

## 57.1 Missing Index

Symptom:

```text
large scan
```

Fix:

```text
create appropriate index based on access pattern
```

## 57.2 Wrong Composite Index Order

Query:

```sql
WHERE company_id = ?
  AND status = ?
ORDER BY created_at DESC
```

An index might need to reflect this access pattern.

There is no single universal ordering rule; use statistics and `EXPLAIN`.

## 57.3 Returning Too Many Rows

```sql
SELECT *
FROM logs;
```

against 100 million rows is usually not a useful API endpoint.

Add:

- filters
- limits
- archive policies
- pagination

## 57.4 N+1 Query Problem

Application:

```text
1 query to get 100 invoices
100 queries to get vendor for each invoice
```

Total:

```text
101 queries
```

Possible improvement:

```text
join
batch fetch
ORM eager loading
```

## 57.5 Large OFFSET Pagination

```sql
LIMIT 20 OFFSET 1000000
```

The database may still need to walk past a very large number of rows.

Use keyset pagination where appropriate.

## 57.6 Unnecessary DISTINCT

Developers sometimes write:

```sql
SELECT DISTINCT ...
```

to hide duplicate rows created by a bad join.

Fix the join logic first.

## 57.7 Functions on Filter Columns

Potential issue:

```sql
WHERE YEAR(created_at) = 2026
```

Often better:

```sql
WHERE created_at >= '2026-01-01'
  AND created_at <  '2027-01-01'
```

## 57.8 Data Type Mismatch

Joining:

```text
VARCHAR employee_id
```

to:

```text
BIGINT employee_id
```

can hurt correctness and performance.

Related columns should use compatible data types.

---

# 58. Schema Migration Strategy

Production databases evolve.

Examples:

- add column
- create index
- rename field
- split table
- change nullability
- backfill data

## 58.1 Safe Migration Mindset

Never think only:

```text
Will SQL execute?
```

Also think:

```text
Will it lock the table?
How long?
Will old application code still work?
Can deployment be rolled back?
Does backfill need batching?
What happens during mixed-version deployment?
```

## 58.2 Expand-and-Contract Pattern

Suppose:

```text
old_name
```

must become:

```text
full_name
```

Safer sequence:

```text
1. Add full_name
2. Application writes both
3. Backfill old rows
4. Application reads full_name
5. Verify
6. Stop old_name writes
7. Later remove old_name
```

This helps avoid risky all-at-once deployments.

---

# 59. Soft Delete, Audit, and History Patterns

## 59.1 Soft Delete

Instead of deleting:

```sql
DELETE FROM users WHERE user_id = 10;
```

mark:

```sql
UPDATE users
SET deleted_at = CURRENT_TIMESTAMP
WHERE user_id = 10;
```

Read active:

```sql
WHERE deleted_at IS NULL
```

## Advantages

- recovery
- audit
- history

## Disadvantages

- every query must consider deletion
- unique constraints become more complex
- table grows continuously
- accidental inclusion of deleted rows

Use only when the business requires it.

---

## 59.2 Audit Fields

Common columns:

```text
created_at
created_by
updated_at
updated_by
```

Do not expect `updated_at` alone to explain what changed.

For important workflow/history:

```text
status_history
approval_history
invoice_change_log
```

may be needed.

---

# 60. Multi-Tenant Database Patterns

A multi-tenant system serves multiple companies/customers.

## Pattern A — Tenant Column

```text
invoices
--------
tenant_id
invoice_id
...
```

Every query includes tenant isolation.

Example index:

```sql
CREATE INDEX idx_invoice_tenant_created
ON invoices(tenant_id, created_at);
```

Risk:

```text
missing tenant filter → possible cross-tenant data exposure
```

## Pattern B — Database per Tenant

Advantages:

- strong logical separation
- individual backup/restore

Disadvantages:

- many schemas/databases
- migration complexity
- operational overhead

## Pattern C — Hybrid

Large tenants receive dedicated databases while smaller tenants share.

Choose based on:

- security
- compliance
- scale
- tenant count
- operations
- reporting needs

---

# 61. Pagination Patterns

## 61.1 Offset Pagination

```sql
SELECT
    invoice_id,
    invoice_no,
    created_at
FROM invoices
ORDER BY created_at DESC
LIMIT 20 OFFSET 100;
```

Easy to implement.

## 61.2 Keyset Pagination

Previous response ended at:

```text
created_at = 2026-08-12 10:00:00
invoice_id = 5000
```

Next page:

```sql
SELECT
    invoice_id,
    invoice_no,
    created_at
FROM invoices
WHERE
    created_at < '2026-08-12 10:00:00'
    OR (
        created_at = '2026-08-12 10:00:00'
        AND invoice_id < 5000
    )
ORDER BY created_at DESC, invoice_id DESC
LIMIT 20;
```

This avoids walking through huge offsets.

Always include a stable tie-breaker such as `invoice_id`.

---

# 62. Search Patterns

## 62.1 Exact Lookup

```sql
WHERE invoice_no = ?
```

Use a normal index.

## 62.2 Prefix Lookup

```sql
WHERE invoice_no LIKE 'INV%'
```

Can often use a suitable B-tree index.

## 62.3 Contains Search

```sql
WHERE description LIKE '%bearing%'
```

May become expensive on large datasets.

Options depend on need:

- full-text indexes
- dedicated search engines
- precomputed search fields

## 62.4 Case-Insensitive Behavior

Do not assume behavior from the SQL text alone.

Case comparison depends on collation.

---

# 63. Reporting and Analytics Patterns

## 63.1 Daily Count

```sql
SELECT
    DATE(created_at) AS created_date,
    COUNT(*) AS count
FROM invoices
GROUP BY DATE(created_at)
ORDER BY created_date;
```

For high-volume systems, consider whether grouping a large raw table repeatedly is acceptable.

## 63.2 Conditional Aggregation

```sql
SELECT
    COUNT(*) AS total,
    SUM(status = 'PENDING') AS pending_count,
    SUM(status = 'APPROVED') AS approved_count,
    SUM(status = 'REJECTED') AS rejected_count
FROM invoices;
```

A more portable pattern is:

```sql
SELECT
    COUNT(*) AS total,
    SUM(CASE WHEN status = 'PENDING' THEN 1 ELSE 0 END) AS pending_count,
    SUM(CASE WHEN status = 'APPROVED' THEN 1 ELSE 0 END) AS approved_count
FROM invoices;
```

## 63.3 Pivot-Style Output

```sql
SELECT
    department_id,
    SUM(CASE WHEN attendance_status = 'PRESENT' THEN 1 ELSE 0 END) AS present_count,
    SUM(CASE WHEN attendance_status = 'ABSENT' THEN 1 ELSE 0 END) AS absent_count
FROM attendance
GROUP BY department_id;
```

---

# 64. Financial and Invoice Database Scenarios

This section combines many concepts into a realistic design.

## 64.1 Tables

```sql
CREATE TABLE vendors (
    vendor_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    vendor_code VARCHAR(50) NOT NULL UNIQUE,
    vendor_name VARCHAR(200) NOT NULL,
    tax_id VARCHAR(50),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE invoices (
    invoice_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    vendor_id BIGINT NOT NULL,
    invoice_no VARCHAR(100) NOT NULL,
    invoice_date DATE NOT NULL,
    currency_code CHAR(3) NOT NULL,
    invoice_amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'RECEIVED',
    erp_posted_at DATETIME NULL,
    payment_date DATE NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_invoice_vendor
        FOREIGN KEY (vendor_id)
        REFERENCES vendors(vendor_id),

    CONSTRAINT ux_invoice_business_key
        UNIQUE (company_id, vendor_id, invoice_no)
);
```

## 64.2 Invoice Lines

```sql
CREATE TABLE invoice_lines (
    invoice_line_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    line_no INT NOT NULL,
    description VARCHAR(500),
    quantity DECIMAL(12,3),
    unit_price DECIMAL(15,4),
    tax_amount DECIMAL(15,2),
    line_amount DECIMAL(15,2) NOT NULL,

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id),

    UNIQUE (invoice_id, line_no)
);
```

## 64.3 Approval History

```sql
CREATE TABLE invoice_approvals (
    approval_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    level_no INT NOT NULL,
    approver_user_id BIGINT NOT NULL,
    decision VARCHAR(20) NOT NULL,
    comments TEXT,
    decided_at DATETIME NULL,

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id)
);
```

## 64.4 Find Invoices Waiting for Approval

```sql
SELECT
    i.invoice_id,
    i.invoice_no,
    v.vendor_name,
    i.invoice_amount
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
WHERE i.status = 'PENDING_APPROVAL'
ORDER BY i.created_at;
```

## 64.5 Duplicate Invoice Check

```sql
SELECT
    company_id,
    vendor_id,
    invoice_no,
    COUNT(*) AS duplicate_count
FROM invoices
GROUP BY
    company_id,
    vendor_id,
    invoice_no
HAVING COUNT(*) > 1;
```

But the stronger solution is usually a unique constraint that prevents duplicates from being created.

## 64.6 Paid Amount per Vendor

```sql
SELECT
    v.vendor_name,
    COUNT(*) AS paid_invoices,
    SUM(i.invoice_amount) AS total_paid
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
WHERE i.payment_date IS NOT NULL
GROUP BY
    v.vendor_id,
    v.vendor_name
ORDER BY total_paid DESC;
```

## 64.7 Workflow Duration

```sql
SELECT
    invoice_id,
    TIMESTAMPDIFF(HOUR, created_at, erp_posted_at) AS posting_hours
FROM invoices
WHERE erp_posted_at IS NOT NULL;
```

---

# 65. E-Commerce Database Scenario

Typical entities:

```text
customers
products
categories
orders
order_items
payments
shipments
inventory
```

## 65.1 Order Header

```sql
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT NOT NULL,
    order_status VARCHAR(30) NOT NULL,
    order_total DECIMAL(15,2) NOT NULL,
    created_at DATETIME NOT NULL
);
```

## 65.2 Order Items

```sql
CREATE TABLE order_items (
    order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    line_total DECIMAL(15,2) NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
```

## 65.3 Why Store Unit Price in Order Item?

Product price may change later.

If you only join to the current product price, an old order could appear to have a different value.

Therefore:

```text
order item stores transaction-time price
```

This is an example of preserving historical business facts.

---

# 66. HR and Attendance Database Scenario

Entities:

```text
employees
departments
locations
attendance_logs
daily_attendance
leave_requests
holidays
```

## 66.1 Raw Punch Table

```sql
CREATE TABLE attendance_logs (
    attendance_log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employee_id BIGINT NOT NULL,
    punch_time DATETIME NOT NULL,
    device_id VARCHAR(100),
    direction VARCHAR(10),
    INDEX idx_attendance_employee_time (employee_id, punch_time)
);
```

## 66.2 Daily Attendance Summary

```sql
CREATE TABLE daily_attendance (
    employee_id BIGINT NOT NULL,
    attendance_date DATE NOT NULL,
    first_in DATETIME NULL,
    last_out DATETIME NULL,
    total_minutes INT NULL,
    attendance_status VARCHAR(20) NOT NULL,
    PRIMARY KEY (employee_id, attendance_date)
);
```

## 66.3 First Punch and Last Punch

```sql
SELECT
    employee_id,
    DATE(punch_time) AS attendance_date,
    MIN(punch_time) AS first_punch,
    MAX(punch_time) AS last_punch
FROM attendance_logs
GROUP BY
    employee_id,
    DATE(punch_time);
```

Production attendance logic can be much more complex due to:

- overnight shifts
- missing punches
- holidays
- leave
- remote work
- multiple doors/devices
- timezone handling

Do not reduce a real attendance system to only `MIN/MAX` without business rules.

---

# 67. Ticket / Workflow System Scenario

Tables:

```text
tickets
ticket_status_history
ticket_assignees
ticket_comments
users
```

## 67.1 Current State vs History

Store current state on main table for fast lookup:

```text
tickets.status
```

and append history:

```text
ticket_status_history
```

Example:

```sql
CREATE TABLE ticket_status_history (
    history_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    ticket_id BIGINT NOT NULL,
    old_status VARCHAR(30),
    new_status VARCHAR(30) NOT NULL,
    changed_by BIGINT NOT NULL,
    changed_at DATETIME NOT NULL
);
```

This supports:

- current dashboard
- audit trail
- SLA calculation
- root-cause analysis

---

# 68. Common MySQL Errors and Troubleshooting

## 68.1 Duplicate Entry

Typical cause:

```text
UNIQUE or PRIMARY KEY violation
```

Example:

```text
duplicate invoice_no for same business key
```

Do not remove the unique constraint automatically.

First determine whether the application is creating an invalid duplicate.

---

## 68.2 Cannot Add or Update Child Row

Usually foreign key failure.

Example:

```text
invoice.vendor_id = 500
```

but vendor 500 does not exist.

Check:

```sql
SELECT *
FROM vendors
WHERE vendor_id = 500;
```

---

## 68.3 Data Too Long for Column

Example:

```text
VARCHAR(20)
```

receives 60 characters.

Do not blindly increase every column.

Ask whether the input itself is valid.

---

## 68.4 Incorrect Decimal / Numeric Value

Check:

- data type
- input formatting
- empty strings
- commas
- locale formatting

Bad input:

```text
"1,25,000.00"
```

may need application normalization before database insertion.

---

## 68.5 Column Cannot Be Null

Your schema says:

```text
NOT NULL
```

but application sent:

```text
NULL
```

Either:

- data is truly required → fix application
- schema rule is wrong → change design intentionally

---

## 68.6 Lock Wait Timeout

Possible causes:

- long transaction
- missing index causing broad locking
- competing updates
- forgotten uncommitted transaction

Investigate the blocker instead of only increasing timeout.

---

## 68.7 Deadlock

Expected in sufficiently concurrent systems.

Actions:

- inspect deadlock details
- make transactions shorter
- lock in consistent order
- improve indexing
- add application retry

---

## 68.8 Too Many Connections

Possible causes:

- connection leak
- pool size too high
- DB undersized
- application opening a connection per operation without closing
- traffic spike

Do not only increase maximum connections.

Find the cause.

---

## 68.9 Row Size Too Large

Usually the table design contains too many large variable-width columns or unsuitable schema decisions.

Potential actions:

- move rarely used large fields to child tables
- use appropriate text types
- normalize
- review row format/storage behavior
- stop adding unrelated columns to one giant table

---

## 68.10 Definer Errors

Views, procedures, triggers, or events may refer to a definer account that does not exist on another server.

When migrating database objects:

```text
review DEFINER
security context
execution privileges
```

Do not blindly recreate privileged users just to satisfy an old definer string.

---

# 69. Anti-Patterns to Avoid

## 69.1 One Giant Table

Bad:

```text
200+ unrelated columns
```

Symptoms:

- many NULL columns
- row-size problems
- difficult deployments
- hard-to-understand ownership

## 69.2 Comma-Separated IDs

Bad:

```text
role_ids = '1,4,7,9'
```

Better:

```text
user_roles
```

## 69.3 Storing Dates as VARCHAR

Bad:

```text
invoice_date VARCHAR(20)
```

values:

```text
12/08/26
2026-08-12
Aug 12
```

Better:

```sql
invoice_date DATE
```

## 69.4 Using FLOAT for Exact Money

Prefer:

```sql
DECIMAL
```

## 69.5 No Foreign Keys Anywhere

Some architectures intentionally manage referential integrity outside the database, but removing all foreign keys simply because they seem inconvenient can create orphaned data.

Make it an explicit architectural decision.

## 69.6 No Indexes

Works in development with 500 rows.

Fails with 50 million rows.

## 69.7 Index Every Column

Also wrong.

Indexes have maintenance and storage cost.

## 69.8 Dynamic SQL by String Concatenation

Security risk and maintenance problem.

Use parameterized SQL.

## 69.9 Status as Magic Numbers

Bad:

```text
status = 7
```

with no clear meaning.

Better:

- documented lookup table
- enum-like application constant
- clear domain mapping

## 69.10 Business Logic from Display Text

Do not make core logic depend on labels like:

```text
"Pending for Query"
```

Use stable internal status codes:

```text
PENDING_QUERY
```

and display friendly labels separately.

---

# 70. Testing SQL

SQL should be tested like application code.

## 70.1 Test Normal Cases

Example:

```text
invoice has one vendor and three lines
```

## 70.2 Test Empty Cases

```text
vendor has zero invoices
```

## 70.3 Test NULL

```text
manager_id is NULL
```

## 70.4 Test Duplicates

```text
same invoice number
```

## 70.5 Test Boundaries

```text
amount = 0
date = month-end
timestamp = midnight
```

## 70.6 Test High Volume

Do not rely only on tiny local data.

## 70.7 Test Concurrent Updates

Especially for:

- inventory
- balances
- booking
- payment
- approval

---

# 71. Interview Questions and Answers

## Q1. What is a primary key?

A column or set of columns that uniquely identifies a row.

## Q2. Primary key vs unique key?

A primary key is the main row identifier. A table has one primary key definition, which can be composite. Unique constraints/indexes enforce uniqueness on other candidate values.

## Q3. INNER JOIN vs LEFT JOIN?

`INNER JOIN` returns matching rows.

`LEFT JOIN` returns all left-side rows and matching right-side values, or NULL when no match exists.

## Q4. WHERE vs HAVING?

`WHERE` filters rows before grouping.

`HAVING` filters grouped/aggregated results.

## Q5. DELETE vs TRUNCATE vs DROP?

```text
DELETE   → remove selected/all rows
TRUNCATE → empty table
DROP     → remove table structure itself
```

## Q6. What is an index?

A data structure that helps the database locate rows efficiently for supported access patterns.

## Q7. Why not index every column?

Because indexes:

- consume storage
- slow writes
- require maintenance

## Q8. What is a composite index?

An index containing multiple columns.

Example:

```sql
(company_id, vendor_id, invoice_no)
```

## Q9. What is the leftmost-prefix idea?

For a multi-column B-tree index, leading columns are important for which filter patterns can efficiently use the index.

## Q10. What is normalization?

Organizing data to reduce duplication and anomalies.

## Q11. What is a transaction?

A group of operations treated as one logical unit.

## Q12. What does ACID mean?

```text
Atomicity
Consistency
Isolation
Durability
```

## Q13. What is a deadlock?

Two or more transactions wait for locks held by each other, so one must be aborted.

## Q14. What is a view?

A stored query presented like a virtual table.

## Q15. View vs table?

A table stores rows. A normal view stores query definition and reads underlying data when queried.

## Q16. Subquery vs CTE?

Both can represent intermediate result logic. CTEs often improve readability and can support recursion.

## Q17. What is a window function?

A function that computes values across related rows while still returning individual rows.

## Q18. ROW_NUMBER vs RANK vs DENSE_RANK?

```text
ROW_NUMBER → always unique sequence
RANK       → ties share rank, gaps possible
DENSE_RANK → ties share rank, no gaps
```

## Q19. What is SQL injection?

An attack where untrusted input changes the intended SQL structure.

Prevention:

```text
parameterized queries
least privilege
input validation
```

## Q20. Why use DECIMAL for money?

Because financial values normally require exact fixed-point decimal behavior rather than binary floating-point approximation.

## Q21. What is a foreign key?

A constraint linking a child column to a valid parent key.

## Q22. What is a covering index?

An index containing the values needed to satisfy a query without additional row lookup in favorable plans.

## Q23. What is cardinality/selectivity?

Concepts describing value distribution and how effectively a condition narrows rows. High-selectivity filters can often make indexes more useful.

## Q24. Why can `LIKE '%abc%'` be slow?

A normal B-tree index cannot efficiently seek from an unknown prefix.

## Q25. How do you optimize a slow query?

```text
measure
EXPLAIN
check rows examined
check indexes
review joins
review filters
return fewer columns/rows
retest
```

---

# 72. Practice Exercises

Use this schema:

```sql
CREATE TABLE departments (
    department_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
    employee_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    department_id BIGINT,
    manager_id BIGINT,
    salary DECIMAL(12,2),
    joining_date DATE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);
```

## Beginner

1. Insert 5 departments.
2. Insert 20 employees.
3. Select all active employees.
4. Select employees earning more than 50,000.
5. Sort employees by salary descending.
6. Find employees whose names start with `A`.
7. Find employees without a manager.
8. Update one employee's salary.
9. Mark one employee inactive.
10. Count total active employees.

## Intermediate

11. Count employees per department.
12. Show department name and employee count.
13. Find departments with more than 5 employees.
14. Find employees earning above company average.
15. Find employees earning above their department average.
16. Show employee-manager pairs.
17. Find departments with no employees.
18. Find top-paid employee in each department.
19. Find top 3 employees per department.
20. Find employees who joined in the last 12 months.

## Advanced

21. Build recursive org hierarchy.
22. Calculate salary rank by department.
23. Calculate cumulative payroll.
24. Create an index strategy for employee search.
25. Run `EXPLAIN` before and after indexes.
26. Design an audit history table.
27. Simulate a transaction rollback.
28. Simulate a deadlock in two sessions.
29. Implement keyset pagination.
30. Build an employee activity reporting view.

---

# 73. Mini Projects

## Project 1 — Employee Management System

Tables:

```text
employees
departments
roles
employee_roles
locations
```

Features:

- add employee
- transfer department
- assign roles
- deactivate employee
- employee search
- employee count by department

Topics practiced:

```text
CRUD
foreign keys
joins
indexes
constraints
```

---

## Project 2 — Invoice Processing System

Tables:

```text
vendors
invoices
invoice_lines
ocr_results
approvals
payments
status_history
```

Features:

- duplicate invoice prevention
- OCR JSON storage
- approval workflow
- invoice line extraction
- posting status
- payment status
- vendor reports

Topics:

```text
transactions
JSON
indexes
workflow history
reporting
conditional logic
```

---

## Project 3 — Attendance System

Tables:

```text
employees
attendance_logs
daily_attendance
holidays
leave_requests
```

Features:

- first in
- last out
- working duration
- attendance status
- department report
- monthly attendance

Topics:

```text
dates
aggregation
window functions
indexes
summary tables
```

---

## Project 4 — E-Commerce Backend

Tables:

```text
customers
products
inventory
orders
order_items
payments
shipments
```

Features:

- stock management
- order checkout
- payment status
- order history
- top products
- revenue dashboard

Topics:

```text
transactions
locking
joins
indexes
analytics
```

---

## Project 5 — Helpdesk Workflow

Tables:

```text
tickets
users
teams
comments
status_history
attachments
```

Features:

- ticket assignment
- status movement
- comments
- SLA report
- pending ticket dashboard

Topics:

```text
history
joins
CTEs
dates
reporting
```

---

# 74. Cheat Sheet

## Database

```sql
CREATE DATABASE db_name;
USE db_name;
DROP DATABASE db_name;
SHOW DATABASES;
```

## Tables

```sql
SHOW TABLES;
DESCRIBE table_name;
SHOW CREATE TABLE table_name;
```

## Select

```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1
LIMIT 10;
```

## Insert

```sql
INSERT INTO table_name (col1, col2)
VALUES (val1, val2);
```

## Update

```sql
UPDATE table_name
SET col1 = value
WHERE id = ?;
```

## Delete

```sql
DELETE FROM table_name
WHERE id = ?;
```

## Join

```sql
SELECT a.*, b.name
FROM a
JOIN b ON b.id = a.b_id;
```

## Group

```sql
SELECT category_id, COUNT(*)
FROM products
GROUP BY category_id;
```

## Having

```sql
SELECT vendor_id, SUM(amount)
FROM invoices
GROUP BY vendor_id
HAVING SUM(amount) > 100000;
```

## CTE

```sql
WITH x AS (
    SELECT ...
)
SELECT *
FROM x;
```

## Window

```sql
ROW_NUMBER() OVER (
    PARTITION BY department_id
    ORDER BY salary DESC
)
```

## Transaction

```sql
START TRANSACTION;

-- statements

COMMIT;
```

Rollback:

```sql
ROLLBACK;
```

## Index

```sql
CREATE INDEX idx_name
ON table_name(column_name);
```

## Explain

```sql
EXPLAIN
SELECT ...
```

## Date Range

```sql
WHERE created_at >= '2026-08-01'
  AND created_at <  '2026-09-01'
```

## NULL

```sql
IS NULL
IS NOT NULL
```

---

# 75. Learning Roadmap

## Level 1 — Beginner

Master:

- database/table/row/column
- data types
- primary keys
- constraints
- INSERT
- SELECT
- UPDATE
- DELETE
- WHERE
- ORDER BY
- LIMIT
- basic functions

### Goal

You can comfortably create and query a basic database.

---

## Level 2 — Intermediate

Master:

- joins
- GROUP BY
- HAVING
- aggregates
- subqueries
- CTEs
- date functions
- CASE
- views
- indexes

### Goal

You can build normal business reports and backend queries.

---

## Level 3 — Advanced Developer

Master:

- transactions
- locking
- isolation
- deadlocks
- window functions
- normalization
- schema design
- JSON
- complex joins
- pagination
- EXPLAIN

### Goal

You can design reliable application databases.

---

## Level 4 — Senior / Performance

Master:

- index architecture
- query plans
- high-volume data design
- transaction design
- monitoring
- migrations
- replication concepts
- backup and recovery
- connection management
- partitioning
- operational troubleshooting

### Goal

You can diagnose performance and reliability issues instead of only writing SQL.

---

## Level 5 — Production Mastery

Practice:

- restore tests
- production-safe migrations
- failure scenarios
- concurrency testing
- security hardening
- observability
- capacity planning
- incident troubleshooting

### Goal

You understand MySQL as part of a complete production system.

---

# 76. Final Checklist

You should be able to explain and demonstrate all of the following.

## Fundamentals

- [ ] Database, schema, table, row, column
- [ ] Primary key
- [ ] Foreign key
- [ ] Unique constraint
- [ ] NULL
- [ ] Data types
- [ ] AUTO_INCREMENT
- [ ] CHECK / validation rules

## Querying

- [ ] SELECT
- [ ] WHERE
- [ ] AND / OR
- [ ] IN
- [ ] BETWEEN
- [ ] LIKE
- [ ] ORDER BY
- [ ] LIMIT
- [ ] aliases
- [ ] CASE
- [ ] NULL handling

## Aggregation

- [ ] COUNT
- [ ] SUM
- [ ] AVG
- [ ] MIN
- [ ] MAX
- [ ] GROUP BY
- [ ] HAVING
- [ ] conditional aggregation

## Relationships

- [ ] INNER JOIN
- [ ] LEFT JOIN
- [ ] self join
- [ ] one-to-one
- [ ] one-to-many
- [ ] many-to-many

## Advanced SQL

- [ ] subqueries
- [ ] EXISTS
- [ ] CTE
- [ ] recursive CTE
- [ ] UNION
- [ ] window functions
- [ ] JSON
- [ ] temporary tables
- [ ] views

## Design

- [ ] normalization
- [ ] denormalization
- [ ] surrogate keys
- [ ] natural keys
- [ ] composite keys
- [ ] audit/history
- [ ] soft delete
- [ ] multi-tenancy

## Performance

- [ ] index
- [ ] composite index
- [ ] leftmost prefix concept
- [ ] covering index
- [ ] EXPLAIN
- [ ] query-plan thinking
- [ ] N+1 problem
- [ ] pagination
- [ ] slow-query diagnosis

## Reliability

- [ ] transactions
- [ ] ACID
- [ ] isolation
- [ ] locking
- [ ] deadlocks
- [ ] retry strategy
- [ ] backup
- [ ] restore
- [ ] RPO
- [ ] RTO
- [ ] replication basics

## Security

- [ ] users
- [ ] grants
- [ ] roles
- [ ] least privilege
- [ ] SQL injection
- [ ] prepared statements
- [ ] secrets management
- [ ] secure backups

## Production

- [ ] schema migration
- [ ] expand-and-contract
- [ ] connection pooling
- [ ] monitoring
- [ ] performance schema concepts
- [ ] capacity planning
- [ ] high availability concepts

---

# Appendix A — A Complete Practice Schema

The following schema can be used for hands-on exercises.

```sql
CREATE DATABASE IF NOT EXISTS mysql_mastery;
USE mysql_mastery;

CREATE TABLE companies (
    company_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_code VARCHAR(20) NOT NULL UNIQUE,
    company_name VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE departments (
    department_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    department_code VARCHAR(20) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (company_id, department_code),
    FOREIGN KEY (company_id)
        REFERENCES companies(company_id)
);

CREATE TABLE employees (
    employee_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    department_id BIGINT NULL,
    manager_id BIGINT NULL,
    employee_code VARCHAR(30) NOT NULL,
    employee_name VARCHAR(150) NOT NULL,
    email VARCHAR(255),
    salary DECIMAL(12,2),
    joining_date DATE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,

    UNIQUE (company_id, employee_code),

    FOREIGN KEY (company_id)
        REFERENCES companies(company_id),

    FOREIGN KEY (department_id)
        REFERENCES departments(department_id),

    FOREIGN KEY (manager_id)
        REFERENCES employees(employee_id),

    INDEX idx_employee_department (department_id),
    INDEX idx_employee_manager (manager_id),
    INDEX idx_employee_email (email)
);

CREATE TABLE vendors (
    vendor_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    vendor_code VARCHAR(30) NOT NULL,
    vendor_name VARCHAR(200) NOT NULL,
    tax_id VARCHAR(50),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (company_id, vendor_code),

    FOREIGN KEY (company_id)
        REFERENCES companies(company_id)
);

CREATE TABLE invoices (
    invoice_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,
    vendor_id BIGINT NOT NULL,
    invoice_no VARCHAR(100) NOT NULL,
    invoice_date DATE NOT NULL,
    currency_code CHAR(3) NOT NULL DEFAULT 'INR',
    net_amount DECIMAL(15,2) NOT NULL,
    tax_amount DECIMAL(15,2) NOT NULL DEFAULT 0,
    invoice_amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'RECEIVED',
    erp_posted_at DATETIME NULL,
    payment_date DATE NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,

    UNIQUE (company_id, vendor_id, invoice_no),

    FOREIGN KEY (company_id)
        REFERENCES companies(company_id),

    FOREIGN KEY (vendor_id)
        REFERENCES vendors(vendor_id),

    INDEX idx_invoice_vendor_date (vendor_id, invoice_date),
    INDEX idx_invoice_company_status_date (company_id, status, invoice_date),
    INDEX idx_invoice_created (created_at)
);

CREATE TABLE invoice_lines (
    invoice_line_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    line_no INT NOT NULL,
    item_code VARCHAR(100),
    description VARCHAR(500),
    quantity DECIMAL(12,3),
    unit_price DECIMAL(15,4),
    tax_amount DECIMAL(15,2) NOT NULL DEFAULT 0,
    line_amount DECIMAL(15,2) NOT NULL,

    UNIQUE (invoice_id, line_no),

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id)
        ON DELETE CASCADE
);

CREATE TABLE invoice_approvals (
    approval_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    approval_level INT NOT NULL,
    approver_employee_id BIGINT NOT NULL,
    decision VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    comments TEXT,
    assigned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    decided_at DATETIME NULL,

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id),

    FOREIGN KEY (approver_employee_id)
        REFERENCES employees(employee_id),

    INDEX idx_approval_invoice_level (
        invoice_id,
        approval_level
    ),

    INDEX idx_approval_approver_status (
        approver_employee_id,
        decision
    )
);

CREATE TABLE invoice_status_history (
    status_history_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    old_status VARCHAR(30),
    new_status VARCHAR(30) NOT NULL,
    changed_by_employee_id BIGINT NULL,
    changed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    comments VARCHAR(1000),

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id),

    FOREIGN KEY (changed_by_employee_id)
        REFERENCES employees(employee_id),

    INDEX idx_status_history_invoice_time (
        invoice_id,
        changed_at
    )
);

CREATE TABLE ocr_results (
    ocr_result_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    invoice_id BIGINT NOT NULL,
    provider_name VARCHAR(100),
    confidence DECIMAL(6,5),
    extracted_json JSON NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (invoice_id)
        REFERENCES invoices(invoice_id)
        ON DELETE CASCADE
);

CREATE TABLE attendance_logs (
    attendance_log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employee_id BIGINT NOT NULL,
    punch_time DATETIME NOT NULL,
    device_code VARCHAR(100),
    direction VARCHAR(10),

    FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id),

    INDEX idx_attendance_employee_time (
        employee_id,
        punch_time
    )
);
```

---

# Appendix B — Practice Queries Against the Master Schema

## Find Active Employees with Department

```sql
SELECT
    e.employee_code,
    e.employee_name,
    d.department_name
FROM employees e
LEFT JOIN departments d
    ON d.department_id = e.department_id
WHERE e.is_active = 1
ORDER BY e.employee_name;
```

## Employee Count per Department

```sql
SELECT
    d.department_name,
    COUNT(e.employee_id) AS employee_count
FROM departments d
LEFT JOIN employees e
    ON e.department_id = d.department_id
   AND e.is_active = 1
GROUP BY
    d.department_id,
    d.department_name
ORDER BY employee_count DESC;
```

## Vendors with No Invoice

```sql
SELECT
    v.vendor_id,
    v.vendor_name
FROM vendors v
WHERE NOT EXISTS (
    SELECT 1
    FROM invoices i
    WHERE i.vendor_id = v.vendor_id
);
```

## Invoice Summary

```sql
SELECT
    i.invoice_no,
    i.invoice_date,
    v.vendor_name,
    i.net_amount,
    i.tax_amount,
    i.invoice_amount,
    i.status
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
ORDER BY i.invoice_date DESC, i.invoice_id DESC;
```

## Monthly Invoice Amount

```sql
SELECT
    YEAR(invoice_date) AS year_no,
    MONTH(invoice_date) AS month_no,
    COUNT(*) AS invoice_count,
    SUM(invoice_amount) AS total_amount
FROM invoices
GROUP BY
    YEAR(invoice_date),
    MONTH(invoice_date)
ORDER BY year_no, month_no;
```

## Top Vendors by Spend

```sql
SELECT
    v.vendor_id,
    v.vendor_name,
    COUNT(*) AS invoice_count,
    SUM(i.invoice_amount) AS total_amount
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
GROUP BY
    v.vendor_id,
    v.vendor_name
ORDER BY total_amount DESC
LIMIT 10;
```

## Top 3 Invoices per Vendor

```sql
WITH ranked AS (
    SELECT
        i.invoice_id,
        i.vendor_id,
        i.invoice_no,
        i.invoice_amount,
        ROW_NUMBER() OVER (
            PARTITION BY i.vendor_id
            ORDER BY i.invoice_amount DESC, i.invoice_id DESC
        ) AS rn
    FROM invoices i
)
SELECT *
FROM ranked
WHERE rn <= 3;
```

## Pending Approval Worklist

```sql
SELECT
    a.approval_id,
    a.approval_level,
    i.invoice_no,
    v.vendor_name,
    i.invoice_amount,
    e.employee_name AS approver_name,
    a.assigned_at
FROM invoice_approvals a
JOIN invoices i
    ON i.invoice_id = a.invoice_id
JOIN vendors v
    ON v.vendor_id = i.vendor_id
JOIN employees e
    ON e.employee_id = a.approver_employee_id
WHERE a.decision = 'PENDING'
ORDER BY a.assigned_at;
```

## Attendance First and Last Punch

```sql
SELECT
    employee_id,
    DATE(punch_time) AS attendance_date,
    MIN(punch_time) AS first_punch,
    MAX(punch_time) AS last_punch
FROM attendance_logs
GROUP BY
    employee_id,
    DATE(punch_time)
ORDER BY attendance_date DESC, employee_id;
```

---

# Appendix C — Query Review Checklist

Before merging a SQL query into production, ask:

## Correctness

- [ ] What does one output row represent?
- [ ] Are NULL cases handled?
- [ ] Could joins multiply rows?
- [ ] Are date boundaries correct?
- [ ] Are duplicates expected or accidental?
- [ ] Is status logic ordered correctly?
- [ ] Is the query tenant/company scoped?

## Performance

- [ ] Are filters selective?
- [ ] Are join columns indexed where needed?
- [ ] Is `SELECT *` necessary?
- [ ] How many rows are examined?
- [ ] What does `EXPLAIN` show?
- [ ] Is the result size bounded?
- [ ] Does pagination scale?
- [ ] Are functions preventing useful index access?
- [ ] Is `DISTINCT` hiding a join problem?

## Security

- [ ] Are inputs parameterized?
- [ ] Does database user have least privilege?
- [ ] Could query expose another tenant?
- [ ] Does output contain sensitive columns unnecessarily?

## Reliability

- [ ] Should statements be inside a transaction?
- [ ] What happens if the second statement fails?
- [ ] Could concurrent requests update the same row?
- [ ] Is retry safe?
- [ ] Could this cause a deadlock?
- [ ] Is the transaction short?

---

# Appendix D — Database Design Review Checklist

Before creating a table:

- [ ] What business entity does this table represent?
- [ ] What is its primary key?
- [ ] Does it need a business/natural unique key?
- [ ] Which columns are mandatory?
- [ ] Are money fields DECIMAL?
- [ ] Are dates stored as DATE/DATETIME/TIMESTAMP instead of strings?
- [ ] Are relationships represented with keys?
- [ ] Are repeated values normalized?
- [ ] Are historical transaction values preserved where required?
- [ ] Which queries will use this table?
- [ ] Which indexes do those queries need?
- [ ] What is the expected table size after 1 year?
- [ ] What is the deletion/archive strategy?
- [ ] What is the audit requirement?
- [ ] Does the table contain personal/sensitive information?
- [ ] How will the schema be migrated later?

---

# Appendix E — Production Incident Checklist

When "MySQL is slow":

1. Check whether the problem is database-wide or one query.
2. Check CPU, memory, disk latency, and connection usage.
3. Check slow/high-frequency queries.
4. Inspect blocking transactions.
5. Inspect lock waits and deadlocks.
6. Run `EXPLAIN` on major queries.
7. Compare row estimates with reality.
8. Check missing/wrong indexes.
9. Check traffic changes.
10. Check recent deployments or migrations.
11. Check backup/maintenance activity.
12. Check replication lag if replicas are involved.
13. Apply the smallest verified change.
14. Measure again.

When "the application cannot connect":

1. Is MySQL running?
2. Is host correct?
3. Is port correct?
4. Is DNS correct?
5. Is firewall allowing traffic?
6. Is the user allowed from this host?
7. Is password correct?
8. Is TLS required/misconfigured?
9. Are max connections exhausted?
10. Is the connection pool healthy?

When "data is wrong":

1. Preserve evidence.
2. Identify exact affected rows.
3. Determine when it changed.
4. Check audit/history.
5. Check application logs.
6. Check recent jobs/triggers/procedures.
7. Avoid mass update until root cause is known.
8. Prepare rollback/fix SQL.
9. Verify with SELECT first.
10. Execute controlled correction.
11. Add a rule/test/constraint to prevent recurrence.

---

# Appendix F — Important Principles to Remember

### Principle 1

**Correct data is more important than clever SQL.**

### Principle 2

**Indexes should be designed for real query patterns, not guessed.**

### Principle 3

**Every production UPDATE and DELETE deserves respect.**

### Principle 4

**A fast query on 100 rows proves almost nothing about 100 million rows.**

### Principle 5

**Use database constraints to protect important invariants.**

### Principle 6

**Do not keep a transaction open longer than necessary.**

### Principle 7

**Never concatenate untrusted input into SQL.**

### Principle 8

**A backup you have never restored is an unverified backup.**

### Principle 9

**Never use DISTINCT as a bandage for an incorrect join.**

### Principle 10

**Before optimizing a query, know what one result row means.**

### Principle 11

**Do not treat JSON as an excuse to avoid relational design.**

### Principle 12

**Do not change production schema without understanding locking, deployment compatibility, rollback, and data backfill.**

### Principle 13

**Measure before optimization and measure again after optimization.**

### Principle 14

**Security boundaries should exist in more than one layer when the risk justifies it.**

### Principle 15

**Database mastery comes from debugging real data problems, not memorizing syntax alone.**

---

# End of MySQL Mastery Handbook

Use this file as a living document.

As you learn more, add:

- real queries you solved
- EXPLAIN examples
- bugs you fixed
- index experiments
- deadlock examples
- migration lessons
- production incident notes
- project schemas
- interview questions
- company-specific patterns

The strongest database handbook is not only a syntax guide.

It becomes a record of **how to think about data correctly, safely, and efficiently**.


---

# Appendix G — Advanced INSERT, UPDATE, and DELETE Patterns

## G.1 INSERT ... SELECT

Use data returned by one query as rows for another table.

```sql
INSERT INTO archived_invoices (
    invoice_id,
    invoice_no,
    invoice_date,
    invoice_amount
)
SELECT
    invoice_id,
    invoice_no,
    invoice_date,
    invoice_amount
FROM invoices
WHERE invoice_date < '2025-01-01';
```

### Scenario

You want to create a reporting snapshot from older records.

Always verify the `SELECT` independently first:

```sql
SELECT ...
FROM invoices
WHERE ...;
```

before running the insert.

---

## G.2 UPSERT with ON DUPLICATE KEY UPDATE

An upsert means:

```text
insert when missing
otherwise update existing row
```

Example:

```sql
INSERT INTO employee_settings (
    employee_id,
    setting_key,
    setting_value
)
VALUES (
    10,
    'theme',
    'dark'
)
ON DUPLICATE KEY UPDATE
    setting_value = 'dark';
```

This requires a primary/unique key that defines what counts as the duplicate.

Example table:

```sql
CREATE TABLE employee_settings (
    employee_id BIGINT NOT NULL,
    setting_key VARCHAR(100) NOT NULL,
    setting_value VARCHAR(1000),
    PRIMARY KEY (employee_id, setting_key)
);
```

### Real-World Scenario

You import daily configuration values.

You do not want:

```text
same employee + same setting
```

to create duplicate rows.

---

## G.3 INSERT IGNORE

Example:

```sql
INSERT IGNORE INTO departments (department_name)
VALUES ('IT');
```

This can suppress certain errors and continue.

### Warning

Do not use `IGNORE` merely to make errors disappear.

It can hide data-quality problems.

Ask:

```text
Which errors am I intentionally ignoring?
Why?
```

---

## G.4 REPLACE

MySQL supports `REPLACE`, but it behaves differently from a simple update.

Conceptually, when a duplicate key is found, replacement behavior can involve deleting the existing row and inserting another one.

This can affect:

- auto-increment values
- triggers
- foreign keys
- audit behavior

For normal application upserts, `INSERT ... ON DUPLICATE KEY UPDATE` is usually easier to reason about.

---

## G.5 Multi-Table UPDATE

Example:

```sql
UPDATE invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
SET i.status = 'BLOCKED'
WHERE v.is_active = 0
  AND i.status = 'RECEIVED';
```

Before running:

```sql
SELECT i.*
FROM invoices i
JOIN vendors v
    ON v.vendor_id = i.vendor_id
WHERE v.is_active = 0
  AND i.status = 'RECEIVED';
```

Verify first.

---

## G.6 Multi-Table DELETE

MySQL can delete rows using joins.

Example:

```sql
DELETE l
FROM application_logs l
JOIN users u
    ON u.user_id = l.user_id
WHERE u.deleted_at IS NOT NULL
  AND l.created_at < CURRENT_DATE - INTERVAL 1 YEAR;
```

This is powerful and dangerous.

Use:

- transaction where appropriate
- backup/restore strategy
- pre-delete SELECT
- bounded batches for large deletes

---

# Appendix H — Foreign Key Actions

Foreign keys can define what happens when a parent changes.

Example:

```sql
FOREIGN KEY (invoice_id)
REFERENCES invoices(invoice_id)
ON DELETE CASCADE
ON UPDATE RESTRICT
```

## H.1 RESTRICT / NO ACTION

Prevent deletion/change when dependent child rows exist.

Scenario:

```text
Do not delete vendor while invoices still reference it.
```

## H.2 CASCADE

Parent deletion/update propagates to child rows.

Example:

```text
delete temporary invoice
→ automatically delete its OCR raw results
```

Use only when the child truly has no independent life.

## H.3 SET NULL

When parent is deleted:

```text
child.foreign_key = NULL
```

Requires the child column to allow NULL.

Scenario:

```text
employee.manager_id
```

If a manager account is removed, you may choose to set subordinates' `manager_id` to NULL—although business applications often deactivate people instead of deleting them.

## H.4 Choosing a Delete Action

Ask:

```text
Does the child have meaning without the parent?
Should deletion be forbidden?
Should child data be deleted?
Should relation become unknown?
```

Do not add `CASCADE` everywhere for convenience.

---

# Appendix I — Prepared Statements Inside MySQL

Applications should normally use their driver's prepared-statement API.

MySQL also supports server-side SQL preparation concepts.

Example:

```sql
PREPARE stmt
FROM 'SELECT employee_id, employee_name
      FROM employees
      WHERE department_id = ?';

SET @department_id = 10;

EXECUTE stmt USING @department_id;

DEALLOCATE PREPARE stmt;
```

This is different from dynamically concatenating user input.

In application code, still prefer your language/database driver's parameter-binding mechanism.

---

# Appendix J — Stored Procedure Control Flow

Stored programs can include control logic.

## J.1 IF

```sql
IF p_amount > 100000 THEN
    SET v_level = 2;
ELSE
    SET v_level = 1;
END IF;
```

## J.2 CASE

```sql
CASE p_status
    WHEN 'APPROVED' THEN
        SET v_code = 1;
    WHEN 'REJECTED' THEN
        SET v_code = 2;
    ELSE
        SET v_code = 0;
END CASE;
```

## J.3 WHILE

```sql
WHILE v_counter <= 10 DO
    SET v_counter = v_counter + 1;
END WHILE;
```

## J.4 LOOP

```sql
my_loop: LOOP
    SET v_counter = v_counter + 1;

    IF v_counter > 10 THEN
        LEAVE my_loop;
    END IF;
END LOOP;
```

## J.5 IN, OUT, and INOUT Parameters

```sql
DELIMITER //

CREATE PROCEDURE get_invoice_count(
    IN p_vendor_id BIGINT,
    OUT p_count BIGINT
)
BEGIN
    SELECT COUNT(*)
    INTO p_count
    FROM invoices
    WHERE vendor_id = p_vendor_id;
END //

DELIMITER ;
```

Call:

```sql
CALL get_invoice_count(100, @invoice_count);

SELECT @invoice_count;
```

## J.6 Exception Handlers

Stored programs can define handlers.

Example pattern:

```sql
DECLARE EXIT HANDLER FOR SQLEXCEPTION
BEGIN
    ROLLBACK;
    RESIGNAL;
END;
```

Then:

```sql
START TRANSACTION;
-- work
COMMIT;
```

### Important

Do not swallow errors silently.

Bad:

```text
error occurred
→ handler does nothing
→ caller believes success
```

---

# Appendix K — Cursors

A cursor lets a stored program process rows one at a time.

Conceptually:

```text
open query
fetch row
process
fetch next row
...
```

Row-by-row database processing is often slower and more complicated than set-based SQL.

Before using a cursor, ask:

> Can I solve this with one INSERT/UPDATE/SELECT statement instead?

Use cursors only when sequential row processing is truly necessary.

---

# Appendix L — InnoDB Internals for Developers

You do not need to memorize internals, but the following mental model helps explain real performance and concurrency behavior.

## L.1 Buffer Pool

Frequently used table/index pages are cached in memory.

Conceptually:

```text
query
 ↓
buffer pool?
 ├─ yes → use memory page
 └─ no  → load from storage
```

A healthy system tries to keep frequently accessed data in memory when practical.

## L.2 Redo Log

Redo information helps InnoDB recover committed changes after a crash.

High-level idea:

```text
record change information
→ write durable log
→ data pages can be flushed separately
```

## L.3 Undo Information

Undo information supports:

- rollback
- MVCC visibility

If a transaction changes a row, older row versions may be required so other transactions can see the correct snapshot.

## L.4 MVCC

MVCC means **Multi-Version Concurrency Control**.

It allows readers and writers to coexist more efficiently.

Conceptual example:

```text
Transaction A sees version 1
Transaction B updates row to version 2
A may continue seeing version 1 according to its snapshot
```

The exact behavior depends on isolation and statement type.

## L.5 Purge

Old row versions eventually become unnecessary and can be cleaned up.

Long-running transactions can delay cleanup because older versions may still be needed.

Therefore:

```text
do not keep transactions open unnecessarily
```

---

# Appendix M — Record Locks, Gap Locks, and Range Locking

InnoDB locking is more nuanced than "one row gets locked."

## M.1 Record Lock

Locks an index record.

## M.2 Gap Concept

The database may protect a gap between indexed records under some operations/isolation scenarios to prevent conflicting insertions into a searched range.

## M.3 Next-Key Concept

A combination of record and gap-style range protection is often discussed as next-key locking.

### Why Developers Care

Suppose:

```sql
SELECT *
FROM bookings
WHERE seat_no BETWEEN 10 AND 20
FOR UPDATE;
```

Concurrency behavior may involve more than only the rows currently returned.

## Practical Rule

If locking seems broader than expected:

- inspect isolation level
- inspect indexes
- inspect query predicates
- check whether a useful index exists
- keep transaction short

---

# Appendix N — Autocommit

MySQL sessions commonly operate with autocommit enabled.

Conceptually:

```sql
UPDATE employees
SET salary = 50000
WHERE employee_id = 10;
```

may be committed automatically when it succeeds outside an explicit transaction.

Check:

```sql
SELECT @@autocommit;
```

Disable for the session:

```sql
SET autocommit = 0;
```

However, application frameworks often manage transaction boundaries themselves.

Do not change autocommit globally without understanding application behavior.

---

# Appendix O — Optimizer Concepts

The optimizer tries to find an efficient execution plan.

It considers information such as:

- available indexes
- value distribution/statistics
- join order
- estimated rows
- predicates
- sorting/grouping needs

## O.1 Statistics

The optimizer does not execute every possible plan to discover the best one.

It estimates.

If estimates are poor, the chosen plan can be poor.

## O.2 Join Order

SQL may be written:

```sql
FROM huge_table h
JOIN small_table s ...
```

but the optimizer may execute tables in a different logical order when it believes that is cheaper.

## O.3 Sargability

A predicate is often called **sargable** when the database can efficiently use an index to search it.

More index-friendly:

```sql
WHERE created_at >= ?
  AND created_at < ?
```

Potentially less index-friendly:

```sql
WHERE DATE(created_at) = ?
```

## O.4 Selectivity

An index on:

```text
gender
```

with only a few values may be less useful for some queries than an index on:

```text
unique email
```

because the second condition identifies far fewer rows.

But selectivity is only one part of index design.

---

# Appendix P — EXPLAIN ANALYZE Mindset

Where supported by your MySQL version, execution analysis can compare estimated planning with actual execution behavior.

The key questions are:

```text
How many rows did the optimizer expect?
How many were actually processed?
Where is most time spent?
Which loop repeats many times?
```

If a plan expects:

```text
10 rows
```

but actually processes:

```text
5,000,000 rows
```

that discrepancy is a valuable clue.

Always consider production impact before running diagnostic queries on large workloads.

---

# Appendix Q — Index Design Deep Dive

## Q.1 Equality Then Range

Query:

```sql
SELECT
    invoice_id,
    invoice_no
FROM invoices
WHERE company_id = ?
  AND vendor_id = ?
  AND invoice_date >= ?
  AND invoice_date < ?
ORDER BY invoice_date DESC;
```

A candidate index:

```sql
(company_id, vendor_id, invoice_date)
```

may match the access pattern well.

## Q.2 Ordering

If your common query is:

```sql
WHERE company_id = ?
ORDER BY created_at DESC
LIMIT 20
```

consider an index beginning with:

```text
company_id, created_at
```

subject to testing.

## Q.3 Indexing Boolean Columns

Indexing:

```text
is_active
```

alone may have low selectivity.

But a composite index such as:

```text
(company_id, is_active, created_at)
```

may still be useful for a specific workload.

Do not use simplistic rules like:

```text
"never index booleans"
```

or:

```text
"always index WHERE columns"
```

Test the actual query.

## Q.4 Redundant Indexes

If you already have:

```text
(a, b, c)
```

an additional index on:

```text
(a)
```

might be redundant for some access patterns, but not always.

Review actual workload before removing indexes.

## Q.5 Index Width

An index on:

```text
VARCHAR(2000)
```

can be large.

Index size matters because:

- more storage
- more cache usage
- more write work

Use appropriately sized columns and index only what is needed.

---

# Appendix R — FULLTEXT Search

For natural-language text search, MySQL provides full-text indexing capabilities for supported engines/configurations.

Conceptual example:

```sql
CREATE FULLTEXT INDEX ft_product_text
ON products(product_name, description);
```

Search:

```sql
SELECT
    product_id,
    product_name
FROM products
WHERE MATCH(product_name, description)
      AGAINST('industrial bearing');
```

Use cases:

- product descriptions
- article content
- support knowledge base

For advanced search requirements such as:

- typo tolerance
- complex ranking
- language analysis
- distributed search
- faceting at massive scale

a dedicated search platform may be more appropriate.

---

# Appendix S — Spatial Data Concepts

MySQL supports spatial data types and functions.

Possible entities:

```text
POINT
LINESTRING
POLYGON
```

Scenario:

```text
store store-location coordinates
find nearby service centers
represent delivery zones
```

Do not store latitude and longitude as random strings.

If geographic queries matter, design the spatial model deliberately and understand coordinate systems and spatial indexes.

---

# Appendix T — UUID Keys

UUIDs can be useful when IDs must be created independently across systems.

## Advantages

- distributed generation
- difficult to guess sequentially
- merging datasets can be easier

## Tradeoffs

- larger than integer IDs
- random key order can affect index locality
- secondary indexes can become larger
- less human-friendly

## Design Options

Possible representations include:

```text
CHAR(36)
BINARY(16)
```

A compact binary representation is often more storage-efficient than text.

Do not choose UUID or AUTO_INCREMENT based on fashion.

Choose based on:

- distributed architecture
- index behavior
- storage
- interoperability
- exposure requirements

---

# Appendix U — Sequence and Identifier Design

A business identifier is not always the same as the table primary key.

Example:

```text
invoice_id   = 582910      ← internal surrogate
invoice_no   = INV/26/442  ← business document number
```

Why separate them?

Business identifiers can:

- have formatting rules
- be reused by different vendors
- change under migration
- contain prefixes
- be unique only within a company/vendor/year

The internal primary key should remain stable.

---

# Appendix V — Binary Log Concepts

The binary log records database changes in forms used for replication and recovery-related workflows.

Developers should understand why it matters for:

- replication
- point-in-time recovery
- auditing/change pipelines in some architectures

Do not treat binary logs as normal application log files.

Operational settings affect:

- storage use
- retention
- durability
- replication behavior

These should be managed by database administrators/platform engineers according to recovery requirements.

---

# Appendix W — Slow Query Investigation

A repeatable investigation approach:

## Step 1

Identify actual slow SQL.

Do not start with:

```text
"database is slow"
```

Find:

```text
query fingerprint
duration
frequency
rows examined
```

## Step 2

Run the exact query with representative parameters.

Different parameters can create very different row counts.

## Step 3

Run `EXPLAIN`.

## Step 4

Inspect:

- filter conditions
- join predicates
- index choices
- sort/group behavior
- temporary operations
- estimated rows

## Step 5

Check table size.

```sql
SELECT
    table_name,
    table_rows
FROM information_schema.tables
WHERE table_schema = 'app_db';
```

Treat metadata row counts as estimates where applicable.

## Step 6

Review indexes.

```sql
SHOW INDEX FROM invoices;
```

## Step 7

Change only one or a small number of factors.

## Step 8

Measure again.

---

# Appendix X — Large DELETE and Archival Strategy

This can be dangerous:

```sql
DELETE FROM application_logs
WHERE created_at < '2020-01-01';
```

on hundreds of millions of rows.

Possible problems:

- huge transaction
- large undo/redo activity
- lock pressure
- replication lag
- disk usage spikes

A safer architecture may use:

- small batches
- archival tables
- partition maintenance
- retention jobs
- maintenance windows

Example batch:

```sql
DELETE FROM application_logs
WHERE created_at < '2020-01-01'
ORDER BY log_id
LIMIT 10000;
```

Then repeat through a controlled job while observing system impact.

---

# Appendix Y — Online Schema Change Mindset

A simple-looking statement:

```sql
ALTER TABLE huge_table
ADD COLUMN ...
```

may have major production impact depending on:

- MySQL version
- exact alteration
- table size
- storage engine
- algorithm
- locking behavior

Before a production `ALTER`:

```text
Read the version-specific documentation.
Test against similar data volume.
Check lock behavior.
Plan rollback.
Monitor replication.
Coordinate deployment.
```

Never assume every DDL change is instant.

---

# Appendix Z — Common Application Integration Rules

Whether you use:

- PHP
- Java
- Python
- Node.js
- .NET
- Go

the same database rules apply.

## Z.1 Use a Connection Pool

Do not create uncontrolled connections.

## Z.2 Use Parameters

Never concatenate untrusted input.

## Z.3 Bound Query Results

APIs should not accidentally return millions of rows.

## Z.4 Keep Transactions Small

Do not:

```text
begin transaction
→ call external API
→ wait 30 seconds
→ update database
→ commit
```

The transaction holds resources while waiting.

A better workflow may separate external I/O from the critical database transaction.

## Z.5 Retry Only Safe Operations

If a transaction fails due to a deadlock, retrying may be appropriate.

But understand idempotency.

Example:

```text
charge credit card
```

must not accidentally happen twice just because database retry logic reruns the whole business process.

## Z.6 Log Query Context, Not Secrets

Useful:

```text
request id
operation name
elapsed time
rows affected
```

Avoid logging:

```text
passwords
access tokens
full sensitive payloads
```

---

# Appendix AA — Data Integrity Patterns

## AA.1 Duplicate Prevention

Do not rely only on:

```text
SELECT first
then INSERT
```

Two concurrent requests can both see "not found" and then insert.

Use a database unique constraint.

Example:

```sql
UNIQUE (company_id, vendor_id, invoice_no)
```

Then handle the duplicate-key result correctly in the application.

## AA.2 Counter Updates

Unsafe pattern:

```text
SELECT count = 10
application adds 1
UPDATE count = 11
```

Two concurrent requests can lose an update.

Atomic SQL:

```sql
UPDATE counters
SET counter_value = counter_value + 1
WHERE counter_id = 1;
```

## AA.3 Inventory Decrement

Example:

```sql
UPDATE inventory
SET available_qty = available_qty - 1
WHERE product_id = ?
  AND available_qty >= 1;
```

Then check affected rows.

This avoids blindly producing negative inventory.

For more complex reservations, use an explicit transaction/locking design.

---

# Appendix AB — Idempotency Pattern

An operation is idempotent when repeating the same request does not create unintended duplicate effects.

Example:

```text
payment callback arrives 3 times
```

You want one payment record.

Possible table:

```sql
CREATE TABLE payment_events (
    provider_event_id VARCHAR(100) PRIMARY KEY,
    received_at DATETIME NOT NULL,
    payload JSON NOT NULL
);
```

Insert the event once.

Duplicate event ID:

```text
already processed
```

This pattern is useful for:

- payment callbacks
- webhook processing
- message consumers
- import jobs

---

# Appendix AC — Status Machine Design

Avoid uncontrolled status changes.

Bad:

```text
RECEIVED → PAID
```

if approval/posting is required.

Model allowed transitions:

```text
RECEIVED
  ↓
VALIDATED
  ↓
PENDING_APPROVAL
  ↓
APPROVED
  ↓
POSTED
  ↓
PAID
```

Alternative path:

```text
PENDING_APPROVAL
  ↓
REJECTED
```

Use:

- stable status codes
- transition validation
- history table
- transaction around state change

Do not use display labels as state-machine identifiers.

---

# Appendix AD — Snapshot vs Live Master Data

Suppose a vendor changes address after an invoice is posted.

Question:

> Should an old invoice report show today's vendor address or the address printed at transaction time?

Sometimes you need both.

Pattern:

```text
vendors          → current master
invoice_snapshot → historical values
```

Examples of snapshot fields:

```text
vendor_name_at_invoice
vendor_tax_id_at_invoice
billing_address_at_invoice
```

This is intentional denormalization for historical truth.

---

# Appendix AE — Money and Currency Design

For multi-currency systems:

```text
amount
currency_code
exchange_rate
base_amount
```

Example:

```sql
invoice_amount DECIMAL(15,2),
currency_code CHAR(3),
exchange_rate DECIMAL(18,8),
base_amount DECIMAL(15,2)
```

Important questions:

- Which exchange rate source?
- What effective date?
- How many decimal places?
- What rounding rule?
- Is base amount stored or recalculated?
- Are tax amounts rounded per line or header?

Financial correctness needs business rules, not only data types.

---

# Appendix AF — Timezone Design

Timezones create subtle bugs.

Questions:

```text
Is this timestamp an instant in time?
Or a local business time?
```

For event timestamps:

```text
created_at
approved_at
paid_at
```

a common architecture is to store a consistent timezone reference and convert for display.

For business-local values:

```text
store opens at 09:00 local time
```

you may need timezone/location context separately.

Never assume all servers, databases, users, and business locations share the same timezone.

---

# Appendix AG — NULL Design Decisions

Use NULL intentionally.

Good:

```text
payment_date = NULL
```

meaning:

```text
not paid yet
```

Potentially confusing:

```text
discount = NULL
```

Does this mean:

```text
unknown discount?
no discount?
not applicable?
```

Sometimes:

```text
discount = 0
```

is more correct.

Database design should distinguish:

```text
unknown
not applicable
zero
empty
```

---

# Appendix AH — Naming Conventions

Pick a convention and stay consistent.

Example:

```text
tables: snake_case plural
columns: snake_case
primary key: <entity>_id
foreign key: same name as referenced key
timestamps: created_at, updated_at
booleans: is_active, has_access
```

Example:

```text
invoice_approvals
approval_id
invoice_id
approver_employee_id
created_at
```

Avoid vague columns:

```text
flag1
status2
data
value
type1
remarks_new
temp_final
```

Names are part of database documentation.

---

# Appendix AI — Column Type Selection Checklist

Before choosing a type:

### Number?

Ask:

```text
integer or decimal?
signed or unsigned?
range?
exact or approximate?
```

### String?

Ask:

```text
max reasonable length?
fixed or variable?
indexed?
multilingual?
```

### Date?

Use:

```text
DATE / DATETIME / TIMESTAMP / TIME
```

instead of a string.

### Money?

Use exact decimal according to the business precision.

### Boolean?

Use a clear boolean-like column:

```text
is_active
```

not:

```text
status = 0/1/2/3
```

if there are actually multiple states.

---

# Appendix AJ — Read/Write Separation Considerations

In replicated systems:

```text
writes → primary
reads  → replica
```

But replica reads can be stale due to replication delay.

Scenario:

```text
user updates profile
immediately reloads page
read goes to lagging replica
old data appears
```

Solutions depend on architecture:

- read-after-write from primary
- session stickiness
- consistency token
- tolerate eventual consistency

Do not send every read to a replica without understanding freshness requirements.

---

# Appendix AK — Caching and MySQL

Cache only when it solves a measured problem.

Possible cache candidates:

```text
reference/master data
frequent identical dashboard aggregates
configuration
product catalog
```

Hard problems:

- cache invalidation
- stale data
- race conditions
- distributed consistency

Database remains the source of truth unless architecture deliberately says otherwise.

---

# Appendix AL — Data Warehouse vs Transaction Database

An OLTP application database is designed for:

```text
small transactions
frequent inserts/updates
point lookups
operational workflows
```

Analytical systems are designed for:

```text
large scans
aggregations
historical trends
BI
```

Do not automatically run extremely heavy analytics against the same production database serving real-time application requests.

Possible architecture:

```text
MySQL OLTP
   ↓
ETL/CDC
   ↓
warehouse/lake
   ↓
BI
```

---

# Appendix AM — Data Retention

Every large table should eventually have a retention answer.

Ask:

```text
How long do we keep data?
Legal requirement?
Audit requirement?
Business need?
Can it be archived?
Can it be anonymized?
Can it be deleted?
```

Examples:

```text
debug logs       → 30 days
audit logs       → years
invoice records  → legal/business retention
temporary OCR    → defined retention
```

Do not retain everything forever by default.

---

# Appendix AN — Personal Data and Privacy Design

For personal data:

```text
name
email
phone
address
government identifiers
```

consider:

- purpose limitation
- access control
- retention
- masking
- audit
- encryption
- deletion/anonymization requirements

Do not copy sensitive production data into development/test environments unless authorized and protected.

---

# Appendix AO — MySQL Administration Starter Commands

## Server Version

```sql
SELECT VERSION();
```

## Current Database

```sql
SELECT DATABASE();
```

## Current User

```sql
SELECT CURRENT_USER();
```

## Active Processes

```sql
SHOW PROCESSLIST;
```

For more detail:

```sql
SHOW FULL PROCESSLIST;
```

## Table Definition

```sql
SHOW CREATE TABLE invoices;
```

## Indexes

```sql
SHOW INDEX FROM invoices;
```

## Variables

```sql
SHOW VARIABLES;
```

Specific variable:

```sql
SHOW VARIABLES LIKE 'max_connections';
```

## Status Counters

```sql
SHOW STATUS;
```

Use these commands for diagnosis, not as a replacement for proper monitoring.

---

# Appendix AP — Database Environment Strategy

Common environments:

```text
local
development
test
UAT/staging
production
```

Good practice:

- separate credentials
- separate databases
- separate secrets
- sanitized test data
- migration automation
- no production root credentials in developer config

Never let a local test accidentally point to production.

---

# Appendix AQ — Migration File Discipline

Example migration naming:

```text
20260812_001_create_invoice_status_history.sql
20260812_002_add_vendor_invoice_index.sql
```

Each migration should have:

```text
purpose
forward change
compatibility consideration
rollback strategy
verification query
```

Avoid editing migration history after it has already been applied to shared environments.

Create a new migration.

---

# Appendix AR — SQL Formatting Standard

Readable SQL:

```sql
SELECT
    i.invoice_id,
    i.invoice_no,
    v.vendor_name,
    i.invoice_amount
FROM invoices AS i
JOIN vendors AS v
    ON v.vendor_id = i.vendor_id
WHERE i.company_id = ?
  AND i.status = 'APPROVED'
  AND i.invoice_date >= ?
  AND i.invoice_date < ?
ORDER BY
    i.invoice_date DESC,
    i.invoice_id DESC
LIMIT 100;
```

Harder to maintain:

```sql
select i.invoice_id,i.invoice_no,v.vendor_name,i.invoice_amount from invoices i join vendors v on v.vendor_id=i.vendor_id where i.company_id=? and i.status='APPROVED' and i.invoice_date>=? and i.invoice_date<? order by i.invoice_date desc,i.invoice_id desc limit 100;
```

Consistency improves:

- reviews
- debugging
- diff quality
- onboarding

---

# Appendix AS — How to Read an Unknown Database

When joining an existing project:

## Step 1

List databases and tables.

## Step 2

Find business-critical tables.

## Step 3

Use:

```sql
SHOW CREATE TABLE ...
```

## Step 4

Identify:

```text
primary keys
foreign keys
indexes
timestamps
status fields
```

## Step 5

Search metadata for field names.

## Step 6

Read views, procedures, triggers, and events.

## Step 7

Find application queries.

## Step 8

Map important workflows.

Example:

```text
invoice uploaded
→ OCR
→ validation
→ approval
→ posting
→ payment
```

## Step 9

Build an ER diagram.

## Step 10

Document undocumented magic values.

This is often more useful than reading hundreds of SQL files randomly.

---

# Appendix AT — SQL Code Review Questions

When reviewing another developer's SQL:

1. Is the result logically correct?
2. Can the join multiply rows?
3. Does it handle NULL correctly?
4. Does it need `DISTINCT`, or is that hiding an error?
5. Are predicates parameterized?
6. Is tenant/company scope present?
7. Is the date range correct?
8. Is result size bounded?
9. What index supports the query?
10. What does `EXPLAIN` show?
11. Is transaction handling correct?
12. Could concurrent execution cause a race?
13. Are money values exact?
14. Are status values stable?
15. Does the query expose sensitive data?
16. How will it behave with 10× or 100× data?

---

# Appendix AU — Advanced Practice Challenges

## Challenge 1 — Duplicate-Safe Invoice Import

Design an import that receives:

```text
company
vendor
invoice number
invoice date
amount
OCR JSON
```

Requirements:

- prevent duplicate invoices
- store raw OCR data
- create invoice and OCR data atomically
- return existing invoice when duplicate arrives

Topics:

```text
unique constraints
transactions
upsert/idempotency
JSON
```

---

## Challenge 2 — Approval Concurrency

Two finance users click Approve at the same time.

Requirements:

- only one transition should win
- history should remain correct
- final status cannot be written twice incorrectly

Topics:

```text
transactions
row locking
conditional update
idempotency
history
```

---

## Challenge 3 — 100-Million-Row Attendance Table

Requirements:

- employee/date search
- monthly attendance
- latest punch
- retention
- archive

Design:

```text
indexes
summary table
retention
partitioning evaluation
query patterns
```

---

## Challenge 4 — High-Volume API Pagination

Table:

```text
50 million invoices
```

Requirement:

```text
show newest 50 invoices
scroll continuously
```

Implement:

```text
keyset pagination
stable ordering
composite index
```

Compare against large OFFSET.

---

## Challenge 5 — Vendor Spend Dashboard

Requirements:

```text
monthly spend
top vendors
pending amount
posted amount
paid amount
```

Build using:

- conditional aggregation
- CTE
- window functions
- indexes
- summary tables if needed

---

# Appendix AV — Recommended Daily SQL Practice

### 15 Minutes

Write 5 basic queries:

```text
SELECT
WHERE
JOIN
GROUP BY
CASE
```

### 15 Minutes

Take one existing query and:

```text
EXPLAIN it
rewrite it
add/remove an index in a test DB
compare
```

### 15 Minutes

Practice one scenario:

```text
duplicate prevention
transaction
hierarchy
top-N
pagination
history
```

### Weekly

Design one small database from scratch.

Examples:

```text
library
payroll
inventory
expense claims
ticketing
invoice processing
learning platform
```

This builds real database thinking.

---

# Appendix AW — Mastery Test

You are approaching strong MySQL proficiency when you can solve questions like these without blindly searching syntax:

1. Why did a LEFT JOIN unexpectedly lose rows?
2. Why did a JOIN triple the SUM?
3. Why is `WHERE DATE(created_at)=?` slow?
4. Why does an index on `(a,b,c)` not solve every query on `b`?
5. Why can two "check then insert" requests create duplicates?
6. Why can a long transaction hurt the database even if it changes only one row?
7. How would you avoid double-processing a payment callback?
8. How would you model a workflow with current status plus full history?
9. How would you paginate 50 million records?
10. How would you safely add a non-null field to a massive production table?
11. How would you investigate a lock wait timeout?
12. How would you prove that a backup can restore?
13. When would you deliberately denormalize?
14. When is JSON appropriate and when is it harmful?
15. How would you design tenant isolation?
16. How would you preserve historical invoice values when master data changes?
17. How would you choose between integer and UUID identifiers?
18. How would you prevent negative inventory under concurrency?
19. How would you identify the true bottleneck of a slow endpoint?
20. How would you review a dangerous production UPDATE?

If you can explain not only the answer but the **tradeoff**, you are moving from SQL user to database engineer.

---

# Appendix AX — Glossary

**ACID** — Atomicity, Consistency, Isolation, Durability.

**Aggregate** — Calculation across many rows, such as `SUM` or `COUNT`.

**B-tree** — Common ordered index structure used for efficient lookup/range operations.

**Candidate Key** — A set of columns capable of uniquely identifying a row.

**Cardinality** — Context-dependent term often used when discussing number/distribution of distinct values and optimizer estimates.

**Clustered Index** — Storage organization where row data is associated with the clustering key; InnoDB clusters table data by primary key.

**Collation** — Rules for comparing and sorting characters.

**Composite Index** — Index containing more than one column.

**Constraint** — Database rule such as primary key, unique, foreign key, check, or not-null.

**CTE** — Common Table Expression.

**DDL** — Commands that define structures.

**Deadlock** — Cyclic transaction lock dependency.

**Denormalization** — Intentional duplication/precomputation for specific requirements.

**DML** — Commands that modify data.

**Durability** — Committed data survives expected failure according to durability settings.

**Foreign Key** — Relationship constraint to a parent key.

**Full Table Scan** — Reading a large/all portion of a table rather than navigating selectively through an index.

**Idempotency** — Safe repetition of an operation without unintended duplicate effects.

**Index** — Data structure used to speed supported access patterns.

**Isolation** — Rules governing visibility/interference among concurrent transactions.

**Join** — Combines related rows from multiple inputs.

**Keyset Pagination** — Pagination based on last-seen ordered key values.

**Lock** — Concurrency control mechanism.

**MVCC** — Multi-Version Concurrency Control.

**Normalization** — Structuring relational data to reduce redundancy/anomalies.

**NULL** — Missing/unknown value marker.

**OLTP** — Online Transaction Processing.

**Optimizer** — Component that chooses an execution plan.

**Primary Key** — Main unique row identifier.

**Query Plan** — Strategy selected to execute SQL.

**RDBMS** — Relational Database Management System.

**Replica** — Server maintaining replicated data changes from another server.

**RPO** — Recovery Point Objective.

**RTO** — Recovery Time Objective.

**Sargable** — Predicate form that can efficiently use a searchable index access path.

**Schema** — Database structure/namespace.

**Selectivity** — Degree to which a filter narrows rows.

**Surrogate Key** — Artificial identifier with no business meaning.

**Transaction** — Atomic logical unit of database work.

**Trigger** — Automatically executed database logic on table events.

**Unique Constraint** — Rule preventing duplicate candidate values.

**View** — Stored query exposed as a virtual table.

**Window Function** — Calculation over a related set of rows without collapsing each row into one group result.

---

# Appendix AY — What to Learn After This Handbook

Once the concepts in this file are comfortable, continue with:

```text
1. Advanced InnoDB architecture
2. MySQL execution plans
3. Query optimizer statistics
4. Production observability
5. Backup/recovery drills
6. Replication operations
7. High-availability architecture
8. Schema migration at scale
9. Database security
10. Data warehousing
11. Change Data Capture
12. Distributed databases
13. PostgreSQL / SQL Server comparison
14. ORM performance
15. Database reliability engineering
```

The important progression is:

```text
SQL syntax
   ↓
relational thinking
   ↓
schema design
   ↓
performance
   ↓
concurrency
   ↓
operations
   ↓
architecture
```

That progression turns "I know SQL" into "I can design and operate reliable data-backed systems."
