# Power BI Master Handbook
## A Complete Beginner-to-Advanced Learning Guide with Practical Scenarios, DAX, Power Query, Data Modeling, Visualization, Power BI Service, Security, Performance, Governance, and Real-World Projects

> **Purpose of this handbook**
>
> This handbook is designed to be a single learning reference for someone who is completely new to Power BI as well as for developers, analysts, BI engineers, and reporting professionals who want an in-depth reference.
>
> The goal is not only to tell you *what a feature does*, but also:
>
> - why it exists,
> - when to use it,
> - when not to use it,
> - how it works,
> - what common mistakes look like,
> - and how it appears in real business scenarios.

---

# Table of Contents

1. [Power BI Overview](#1-power-bi-overview)
2. [Business Intelligence Fundamentals](#2-business-intelligence-fundamentals)
3. [Power BI Ecosystem](#3-power-bi-ecosystem)
4. [Installation and Initial Setup](#4-installation-and-initial-setup)
5. [Power BI Desktop Interface](#5-power-bi-desktop-interface)
6. [End-to-End Power BI Workflow](#6-end-to-end-power-bi-workflow)
7. [Connecting to Data Sources](#7-connecting-to-data-sources)
8. [Import, DirectQuery, Live Connection, Composite Models, and Direct Lake](#8-import-directquery-live-connection-composite-models-and-direct-lake)
9. [Power Query Fundamentals](#9-power-query-fundamentals)
10. [Power Query Transformations](#10-power-query-transformations)
11. [Power Query M Language](#11-power-query-m-language)
12. [Data Cleaning Techniques](#12-data-cleaning-techniques)
13. [Combining Data with Merge and Append](#13-combining-data-with-merge-and-append)
14. [Parameters and Dynamic Power Query](#14-parameters-and-dynamic-power-query)
15. [Query Folding](#15-query-folding)
16. [Data Modeling Fundamentals](#16-data-modeling-fundamentals)
17. [Star Schema](#17-star-schema)
18. [Fact and Dimension Tables](#18-fact-and-dimension-tables)
19. [Relationships](#19-relationships)
20. [Cardinality and Filter Direction](#20-cardinality-and-filter-direction)
21. [Date Tables and Time Intelligence Foundations](#21-date-tables-and-time-intelligence-foundations)
22. [Calculated Columns, Measures, and Calculated Tables](#22-calculated-columns-measures-and-calculated-tables)
23. [DAX Fundamentals](#23-dax-fundamentals)
24. [DAX Evaluation Context](#24-dax-evaluation-context)
25. [CALCULATE and Filter Context](#25-calculate-and-filter-context)
26. [Important DAX Functions](#26-important-dax-functions)
27. [Iterator Functions](#27-iterator-functions)
28. [Time Intelligence](#28-time-intelligence)
29. [Advanced DAX Patterns](#29-advanced-dax-patterns)
30. [Variables in DAX](#30-variables-in-dax)
31. [Virtual Tables](#31-virtual-tables)
32. [Ranking, Segmentation, and Pareto Analysis](#32-ranking-segmentation-and-pareto-analysis)
33. [Visualizations](#33-visualizations)
34. [Choosing the Correct Visual](#34-choosing-the-correct-visual)
35. [Tables and Matrices](#35-tables-and-matrices)
36. [Conditional Formatting](#36-conditional-formatting)
37. [Slicers and Filters](#37-slicers-and-filters)
38. [Drill Down, Drill Through, and Tooltips](#38-drill-down-drill-through-and-tooltips)
39. [Bookmarks, Buttons, and Navigation](#39-bookmarks-buttons-and-navigation)
40. [Field Parameters](#40-field-parameters)
41. [Report Design and UX](#41-report-design-and-ux)
42. [Accessibility](#42-accessibility)
43. [Dashboard and KPI Design](#43-dashboard-and-kpi-design)
44. [Power BI Service](#44-power-bi-service)
45. [Workspaces](#45-workspaces)
46. [Semantic Models](#46-semantic-models)
47. [Reports, Dashboards, and Apps](#47-reports-dashboards-and-apps)
48. [Refresh and Scheduling](#48-refresh-and-scheduling)
49. [On-Premises Data Gateway](#49-on-premises-data-gateway)
50. [Row-Level Security](#50-row-level-security)
51. [Object-Level Security](#51-object-level-security)
52. [Sharing, Permissions, and Governance](#52-sharing-permissions-and-governance)
53. [Deployment Pipelines and ALM](#53-deployment-pipelines-and-alm)
54. [Incremental Refresh](#54-incremental-refresh)
55. [Aggregation Tables](#55-aggregation-tables)
56. [Performance Optimization](#56-performance-optimization)
57. [DAX Performance Tuning](#57-dax-performance-tuning)
58. [Power Query Performance Tuning](#58-power-query-performance-tuning)
59. [Model Performance Tuning](#59-model-performance-tuning)
60. [Power BI and Microsoft Fabric](#60-power-bi-and-microsoft-fabric)
61. [Dataflows](#61-dataflows)
62. [Paginated Reports](#62-paginated-reports)
63. [Power BI Embedded](#63-power-bi-embedded)
64. [Power BI REST API and Automation](#64-power-bi-rest-api-and-automation)
65. [Power BI with Excel](#65-power-bi-with-excel)
66. [Power BI with SQL](#66-power-bi-with-sql)
67. [Power BI with Python and R](#67-power-bi-with-python-and-r)
68. [Enterprise Architecture Patterns](#68-enterprise-architecture-patterns)
69. [Data Governance](#69-data-governance)
70. [Security Best Practices](#70-security-best-practices)
71. [Version Control and Power BI Projects](#71-version-control-and-power-bi-projects)
72. [Naming Conventions and Project Organization](#72-naming-conventions-and-project-organization)
73. [Testing Power BI Solutions](#73-testing-power-bi-solutions)
74. [Troubleshooting Guide](#74-troubleshooting-guide)
75. [Real-World Business Scenarios](#75-real-world-business-scenarios)
76. [Complete Sales Dashboard Project](#76-complete-sales-dashboard-project)
77. [Finance Dashboard Project](#77-finance-dashboard-project)
78. [HR Dashboard Project](#78-hr-dashboard-project)
79. [Operations Dashboard Project](#79-operations-dashboard-project)
80. [Inventory Dashboard Project](#80-inventory-dashboard-project)
81. [Executive Dashboard Project](#81-executive-dashboard-project)
82. [Common Power BI Mistakes](#82-common-power-bi-mistakes)
83. [Power BI Interview Preparation](#83-power-bi-interview-preparation)
84. [Power BI Learning Roadmap](#84-power-bi-learning-roadmap)
85. [Practice Exercises](#85-practice-exercises)
86. [Quick Reference Cheat Sheets](#86-quick-reference-cheat-sheets)
87. [Glossary](#87-glossary)
88. [Final Mastery Checklist](#88-final-mastery-checklist)

---

# 1. Power BI Overview

## What is Power BI?

Power BI is Microsoft's business intelligence and analytics platform used to:

- connect to data,
- clean and transform data,
- build data models,
- calculate business metrics,
- create interactive reports,
- publish reports,
- share insights,
- secure data,
- refresh reports automatically,
- and provide decision-support analytics.

A simple way to think about Power BI is:

```text
Raw Data
   ↓
Power Query
   ↓
Data Model
   ↓
DAX
   ↓
Visuals
   ↓
Power BI Service
   ↓
Business Users
```

Power BI is not only a charting tool.

A professional Power BI solution usually contains three major layers:

1. **Data preparation**
2. **Semantic/data modeling**
3. **Presentation and analytics**

---

## Example Scenario

Suppose a company has:

- customers in SQL Server,
- sales in Excel,
- product data in CSV,
- targets in SharePoint,
- and employee hierarchy in another database.

Power BI can combine these sources into a common semantic model and create dashboards showing:

- monthly sales,
- year-to-date revenue,
- top customers,
- profit margin,
- sales versus target,
- region performance,
- product performance,
- salesperson performance.

---

# 2. Business Intelligence Fundamentals

Before Power BI, understand Business Intelligence.

## BI means converting data into actionable information.

For example:

```text
Transaction:
Customer A purchased Product X for ₹25,000.

Information:
Mumbai revenue this month = ₹48 lakh.

Insight:
Mumbai revenue is 12% below target.

Action:
Increase sales activity in Mumbai or investigate declining product categories.
```

---

## Operational Systems vs Analytical Systems

### Operational systems

Designed for day-to-day transactions.

Examples:

- ERP
- CRM
- payroll system
- invoicing system
- ticketing system

These systems are often called **OLTP systems**.

### Analytical systems

Designed for reporting and analysis.

Examples:

- Power BI semantic model
- data warehouse
- lakehouse
- analytical database

These systems are often associated with **OLAP**.

---

# 3. Power BI Ecosystem

The Power BI ecosystem contains several products and services.

## Power BI Desktop

Windows desktop application primarily used to:

- connect to data,
- transform data,
- build models,
- create DAX calculations,
- and design reports.

---

## Power BI Service

Cloud service used for:

- publishing,
- sharing,
- collaboration,
- scheduled refresh,
- permissions,
- dashboards,
- apps,
- alerts,
- subscriptions,
- governance.

---

## Power BI Mobile

Applications for viewing reports on phones and tablets.

---

## Power BI Report Builder

Used for creating **paginated reports**.

Best when:

- exact page layout is needed,
- printing matters,
- reports contain many rows,
- invoices/statements must follow precise formatting.

---

## On-Premises Data Gateway

Allows Power BI Service to securely connect to data sources that are not directly accessible from the cloud.

Example:

```text
Power BI Service
       |
       | encrypted connection
       ↓
On-Premises Gateway
       |
       ↓
Company SQL Server
```

---

## Power BI Embedded

Used when Power BI reports need to be embedded inside custom applications.

Example:

```text
Customer Portal
    |
    +-- My Orders
    +-- My Profile
    +-- Analytics
          ↓
     Embedded Power BI Report
```

---

# 4. Installation and Initial Setup

Install Power BI Desktop from Microsoft's supported distribution channel.

After installation, configure:

- regional settings,
- privacy levels,
- data load settings,
- preview features where appropriate,
- Auto Date/Time behavior,
- default file locations.

For enterprise projects, avoid blindly enabling every preview feature.

---

# 5. Power BI Desktop Interface

Important views include:

## Report View

Used to create visuals and pages.

## Data View

Used to inspect loaded model data.

## Model View

Used to manage:

- tables,
- relationships,
- properties,
- hierarchies,
- model structure.

## Power Query Editor

Used for data transformation before data enters the model.

---

# 6. End-to-End Power BI Workflow

A professional workflow generally looks like this:

```text
1. Understand business requirement
2. Identify data sources
3. Profile data
4. Transform data
5. Design star schema
6. Create relationships
7. Create date table
8. Create base measures
9. Create advanced measures
10. Validate calculations
11. Build visuals
12. Add UX/navigation
13. Test security
14. Optimize performance
15. Publish
16. Configure gateway
17. Configure refresh
18. Configure permissions
19. Deploy
20. Monitor and maintain
```

---

# 7. Connecting to Data Sources

Power BI supports many types of sources.

Common examples:

- Excel
- CSV
- text files
- JSON
- XML
- SQL Server
- Oracle
- MySQL
- PostgreSQL
- Snowflake
- Azure SQL
- SharePoint
- Web APIs
- OData
- Microsoft Fabric
- Power Platform data sources
- folders
- cloud storage

---

## Excel Scenario

Assume `Sales.xlsx` contains:

| OrderID | OrderDate | Product | Qty | Price |
|---|---|---|---:|---:|
| 1001 | 2026-01-02 | Laptop | 2 | 60000 |
| 1002 | 2026-01-03 | Mouse | 10 | 800 |

Revenue is not directly stored.

Power BI can load the data and calculate:

```text
Revenue = Qty × Price
```

---

# 8. Import, DirectQuery, Live Connection, Composite Models, and Direct Lake

Choosing the storage/connectivity mode is one of the most important architectural decisions.

---

## Import Mode

Data is imported into the Power BI semantic model.

### Advantages

- very fast report interaction,
- powerful DAX capabilities,
- less dependency on source during user interaction,
- efficient compression.

### Disadvantages

- data must be refreshed,
- dataset size matters,
- not always suitable for near-real-time scenarios.

### Best for

Most BI dashboards.

---

## DirectQuery

Power BI sends queries to the underlying data source when users interact with the report.

### Advantages

- data remains in source,
- potentially fresher data,
- useful for very large datasets.

### Disadvantages

- performance depends on source,
- poorly designed visuals may generate expensive queries,
- some modeling features may have limitations.

### Scenario

A company has a multi-billion-row data warehouse and cannot import all transaction-level data.

DirectQuery may be considered.

---

## Live Connection

Report connects to an existing analytical model.

Examples include centrally managed semantic models or Analysis Services models.

Useful when a central BI team wants one governed model used by many report creators.

---

## Composite Models

A model may combine multiple storage modes.

Example:

```text
Imported Dimensions
+
DirectQuery Large Fact Table
```

---

## Direct Lake

In Microsoft Fabric architectures, Direct Lake allows Power BI to analyze lake-based data with performance characteristics designed to avoid traditional full imports while minimizing DirectQuery-style query translation.

Use it when your architecture is centered around Fabric lakehouse or warehouse workloads and the platform design supports it.

---

## Decision Guide

| Requirement | Likely Choice |
|---|---|
| Best interactive speed | Import |
| Very large data | DirectQuery / Direct Lake |
| Central semantic model | Live connection |
| Mixed requirements | Composite model |
| Fabric lakehouse architecture | Direct Lake |

Do not choose DirectQuery only because "the database is large." First ask:

- How much data is actually needed?
- Can old data be aggregated?
- Can incremental refresh be used?
- Can the model be redesigned?

---

# 9. Power Query Fundamentals

Power Query is the data preparation engine used by Power BI.

It performs **ETL/ELT-style transformations**.

ETL means:

```text
Extract
Transform
Load
```

---

## Applied Steps

Every transformation appears as a step.

Example:

```text
Source
↓
Promoted Headers
↓
Changed Type
↓
Removed Columns
↓
Filtered Rows
↓
Added Custom Column
```

Power Query transformations should be reproducible.

You should avoid manually editing source files every month when Power Query can automate the transformation.

---

# 10. Power Query Transformations

Important transformations include:

- rename columns,
- remove columns,
- reorder columns,
- change data types,
- filter rows,
- replace values,
- split columns,
- merge columns,
- extract text,
- trim text,
- clean text,
- uppercase/lowercase,
- group by,
- pivot,
- unpivot,
- transpose,
- fill down,
- fill up,
- remove duplicates,
- add index,
- add conditional columns,
- add custom columns.

---

## Example: Cleaning Employee Data

Raw data:

| SGID | Employee Name | Department |
|---|---|---|
| SG001 | `"  John "` | IT |
| SG002 | `"MAYA"` | Finance |
| SG003 | `"rahul"` | HR |

Transform:

1. Trim spaces.
2. Convert name to proper case.
3. Standardize department names.
4. Remove duplicate SGIDs.
5. Validate null SGIDs.

Result:

| SGID | Employee Name | Department |
|---|---|---|
| SG001 | John | IT |
| SG002 | Maya | Finance |
| SG003 | Rahul | HR |

---

# 11. Power Query M Language

Power Query uses the **M language**.

Typical structure:

```powerquery
let
    Source = Excel.Workbook(File.Contents("C:\Data\Sales.xlsx")),
    Sales = Source{[Item="Sales",Kind="Table"]}[Data],
    #"Changed Type" = Table.TransformColumnTypes(
        Sales,
        {
            {"OrderDate", type date},
            {"Qty", Int64.Type},
            {"Price", type number}
        }
    )
in
    #"Changed Type"
```

---

## Understanding `let ... in`

```powerquery
let
    Step1 = ...,
    Step2 = ...,
    Step3 = ...
in
    Step3
```

`let` defines intermediate expressions.

`in` specifies the expression that should be returned.

---

## Custom Column Example

```powerquery
[Quantity] * [UnitPrice]
```

---

## Conditional Logic

```powerquery
if [Sales] >= 100000 then "High"
else if [Sales] >= 50000 then "Medium"
else "Low"
```

---

## Useful M Concepts

Learn:

- values,
- lists,
- records,
- tables,
- functions,
- `each`,
- `let`,
- `if`,
- error handling,
- reusable functions.

---

## Reusable Function Example

Conceptually:

```powerquery
(amount as number, taxRate as number) as number =>
    amount * taxRate
```

Reusable functions are powerful when multiple files require identical logic.

---

# 12. Data Cleaning Techniques

Common data problems:

- nulls,
- blanks,
- duplicate records,
- wrong data types,
- malformed dates,
- inconsistent spelling,
- leading/trailing spaces,
- non-printable characters,
- invalid IDs,
- mixed units,
- duplicated headers,
- totals embedded in source data,
- merged spreadsheet cells.

---

## Important Principle

Do not treat Power BI as an excuse to load bad data unchanged.

Clean data before modeling.

---

## Example: Inconsistent Region Names

Raw values:

```text
Mumbai
MUMBAI
mumbai
Mumbai 
MUM
```

You may standardize them to:

```text
Mumbai
```

However, do not blindly replace values if `MUM` could have another business meaning.

---

# 13. Combining Data with Merge and Append

## Append

Append adds rows.

```text
January Sales
+
February Sales
+
March Sales
=
Quarter Sales
```

Use when tables have similar columns.

---

## Merge

Merge adds columns by matching keys.

Example:

```text
Sales
OrderID
CustomerID
Amount

Customers
CustomerID
CustomerName
Region
```

Merge on `CustomerID`.

---

## SQL Analogy

Power Query Merge is conceptually similar to SQL joins:

- left outer,
- right outer,
- full outer,
- inner,
- left anti,
- right anti.

---

## Anti Join Scenario

Find employees missing from attendance data.

```text
Employee Master
LEFT ANTI JOIN
Attendance
```

Result:

Employees with no attendance record.

This is extremely useful in auditing and data quality analysis.

---

# 14. Parameters and Dynamic Power Query

Parameters allow values to be changed without rewriting transformations.

Examples:

- server name,
- database name,
- file path,
- company ID,
- date range,
- environment name.

Example conceptual parameters:

```text
Environment = "PROD"
ServerName = "SQLPROD01"
DatabaseName = "SalesDW"
```

This helps when promoting reports between environments.

---

# 15. Query Folding

Query folding means Power Query translates transformations into operations that the source system can execute.

Example:

Instead of:

```text
Load 100 million rows → filter in Power BI
```

Power Query may send a query equivalent to:

```sql
SELECT ...
FROM Sales
WHERE OrderDate >= '2026-01-01'
```

This is usually much more efficient.

---

## Transformations that often preserve folding

Depending on connector:

- filtering,
- selecting columns,
- some joins,
- grouping,
- simple calculations.

Some transformations can stop folding.

---

## Why Query Folding Matters

Suppose source has 500 million rows.

You only need this year.

Without folding:

```text
500M rows transferred
↓
Power Query filters locally
```

With folding:

```text
Source filters data
↓
Only required rows returned
```

Huge difference.

---

# 16. Data Modeling Fundamentals

A data model describes how analytical data is organized and related.

Good modeling improves:

- accuracy,
- performance,
- DAX simplicity,
- report usability.

Poor modeling leads to:

- ambiguous filters,
- duplicate totals,
- complex DAX,
- slow reports.

---

# 17. Star Schema

Star schema is the recommended pattern for most Power BI analytical models.

Example:

```text
              DimDate
                 |
DimCustomer — FactSales — DimProduct
                 |
              DimStore
                 |
              DimSalesperson
```

The center table is a **fact table**.

Surrounding tables are **dimensions**.

---

# 18. Fact and Dimension Tables

## Fact Table

Contains measurable business events.

Examples:

- sales transactions,
- attendance punches,
- invoices,
- inventory movements,
- support tickets.

Typical columns:

```text
OrderID
DateKey
CustomerKey
ProductKey
Quantity
Amount
Discount
Cost
```

---

## Dimension Table

Contains descriptive information.

Example `DimProduct`:

```text
ProductKey
ProductName
Category
Brand
Color
```

---

## Grain

The grain describes what one row represents.

This is one of the most important concepts in BI.

Example:

> One row in FactSales represents one product line within one customer order.

Before designing any fact table, explicitly define its grain.

---

# 19. Relationships

Relationships allow filters to propagate between tables.

Example:

```text
DimProduct[ProductKey]
      1
      |
      *
FactSales[ProductKey]
```

A product filters all sales rows belonging to that product.

---

## Active Relationship

Used by default.

## Inactive Relationship

Exists but is not automatically used.

Example:

FactSales contains:

- OrderDate
- ShipDate

One date table may have:

```text
Date → OrderDate active
Date → ShipDate inactive
```

Then DAX can activate the ShipDate relationship with `USERELATIONSHIP`.

---

# 20. Cardinality and Filter Direction

Common cardinalities:

- one-to-many,
- many-to-one,
- one-to-one,
- many-to-many.

---

## One-to-Many

Most common and preferred.

```text
DimCustomer 1 → * FactSales
```

---

## Many-to-Many

Use carefully.

Possible scenario:

A customer belongs to multiple marketing segments.

You may need a bridge table.

---

## Single Direction vs Both Direction

Single-direction filtering is usually easier to reason about.

Bidirectional filtering can be useful but may cause:

- ambiguous filter paths,
- unexpected results,
- slower calculations.

Use bidirectional relationships intentionally, not as a default fix.

---

# 21. Date Tables and Time Intelligence Foundations

A proper date table is essential.

Example columns:

```text
Date
Year
Quarter
MonthNumber
MonthName
YearMonth
Week
Day
FiscalYear
FiscalQuarter
```

---

## DAX Date Table Example

```DAX
DimDate =
ADDCOLUMNS (
    CALENDAR ( DATE(2020,1,1), DATE(2030,12,31) ),
    "Year", YEAR ( [Date] ),
    "Month Number", MONTH ( [Date] ),
    "Month", FORMAT ( [Date], "MMM" ),
    "Year Month", FORMAT ( [Date], "YYYY-MM" ),
    "Quarter", "Q" & FORMAT ( [Date], "Q" )
)
```

Then sort Month by Month Number.

---

## Why not rely on month name alone?

Alphabetical sort:

```text
Apr
Aug
Dec
Feb
...
```

Correct chronological sort:

```text
Jan
Feb
Mar
...
```

---

# 22. Calculated Columns, Measures, and Calculated Tables

This distinction is critical.

---

## Calculated Column

Calculated row-by-row and stored in the model.

Example:

```DAX
Line Amount =
Sales[Quantity] * Sales[Unit Price]
```

Use when a value logically belongs to every row.

---

## Measure

Calculated at query time according to filter context.

Example:

```DAX
Total Sales =
SUM ( Sales[SalesAmount] )
```

If visual is filtered to Mumbai, the measure calculates Mumbai sales.

If filtered to 2026, it calculates 2026 sales.

---

## Calculated Table

A table created using DAX.

Example:

```DAX
HighValueCustomers =
FILTER (
    Customers,
    CALCULATE ( [Total Sales] ) > 100000
)
```

---

## General Rule

Prefer measures for analytical calculations.

Use calculated columns only when row-level storage is actually needed.

---

# 23. DAX Fundamentals

DAX stands for **Data Analysis Expressions**.

DAX is used to create:

- measures,
- calculated columns,
- calculated tables.

---

## Basic Measure

```DAX
Total Sales =
SUM ( FactSales[SalesAmount] )
```

---

## Average Sales

```DAX
Average Sales =
AVERAGE ( FactSales[SalesAmount] )
```

---

## Total Orders

```DAX
Total Orders =
DISTINCTCOUNT ( FactSales[OrderID] )
```

---

## Profit

```DAX
Profit =
[Total Sales] - [Total Cost]
```

---

## Profit Margin

```DAX
Profit Margin % =
DIVIDE ( [Profit], [Total Sales], 0 )
```

Prefer `DIVIDE()` instead of:

```DAX
[Profit] / [Total Sales]
```

because `DIVIDE` safely handles division by zero.

---

# 24. DAX Evaluation Context

DAX becomes much easier once you understand context.

Two major concepts:

- row context,
- filter context.

---

## Row Context

Exists when DAX evaluates one row at a time.

Example calculated column:

```DAX
LineAmount =
FactSales[Quantity] * FactSales[Price]
```

Power BI evaluates each row separately.

---

## Filter Context

The set of filters affecting a measure.

Example:

A visual has:

```text
Region = Mumbai
Year = 2026
Product Category = Electronics
```

Then:

```DAX
[Total Sales]
```

is evaluated only for matching rows.

---

# 25. CALCULATE and Filter Context

`CALCULATE` is arguably the most important DAX function.

It evaluates an expression under modified filter context.

---

## Example

```DAX
Mumbai Sales =
CALCULATE (
    [Total Sales],
    DimRegion[Region] = "Mumbai"
)
```

---

## Ignore a Filter

```DAX
All Region Sales =
CALCULATE (
    [Total Sales],
    REMOVEFILTERS ( DimRegion )
)
```

---

## Percentage of Total

```DAX
Sales % of Total =
DIVIDE (
    [Total Sales],
    CALCULATE (
        [Total Sales],
        REMOVEFILTERS ( DimProduct )
    )
)
```

---

# 26. Important DAX Functions

You should learn these categories.

## Aggregation

```text
SUM
AVERAGE
MIN
MAX
COUNT
COUNTA
DISTINCTCOUNT
```

## Logical

```text
IF
SWITCH
AND
OR
COALESCE
```

## Filter

```text
CALCULATE
FILTER
ALL
REMOVEFILTERS
KEEPFILTERS
VALUES
SELECTEDVALUE
```

## Relationship

```text
RELATED
RELATEDTABLE
USERELATIONSHIP
CROSSFILTER
```

## Table

```text
SUMMARIZE
SUMMARIZECOLUMNS
ADDCOLUMNS
SELECTCOLUMNS
UNION
INTERSECT
EXCEPT
```

## Time

```text
DATEADD
DATESYTD
DATESMTD
DATESQTD
SAMEPERIODLASTYEAR
TOTALYTD
```

## Ranking

```text
RANKX
TOPN
```

## Iterators

```text
SUMX
AVERAGEX
MINX
MAXX
COUNTX
```

---

# 27. Iterator Functions

Iterator functions process a table row by row.

Example:

```DAX
Revenue =
SUMX (
    FactSales,
    FactSales[Quantity] * FactSales[UnitPrice]
)
```

Difference:

```DAX
SUM ( Column )
```

adds a physical column.

`SUMX` evaluates an expression for every row and then sums the results.

---

## Scenario

If quantity and price are stored separately:

```DAX
SUM ( FactSales[Quantity] * FactSales[UnitPrice] )
```

is invalid.

Use:

```DAX
SUMX (
    FactSales,
    FactSales[Quantity] * FactSales[UnitPrice]
)
```

---

# 28. Time Intelligence

Time intelligence compares metrics across periods.

Examples:

- MTD,
- QTD,
- YTD,
- previous month,
- previous quarter,
- previous year,
- rolling 12 months.

---

## Sales YTD

```DAX
Sales YTD =
TOTALYTD (
    [Total Sales],
    DimDate[Date]
)
```

---

## Previous Year

```DAX
Sales PY =
CALCULATE (
    [Total Sales],
    SAMEPERIODLASTYEAR ( DimDate[Date] )
)
```

---

## YoY Growth

```DAX
YoY Growth % =
DIVIDE (
    [Total Sales] - [Sales PY],
    [Sales PY],
    0
)
```

---

## Previous Month

```DAX
Sales Previous Month =
CALCULATE (
    [Total Sales],
    DATEADD ( DimDate[Date], -1, MONTH )
)
```

---

## Rolling 12 Months

A typical pattern:

```DAX
Sales Rolling 12M =
VAR MaxDate =
    MAX ( DimDate[Date] )
RETURN
    CALCULATE (
        [Total Sales],
        DATESINPERIOD (
            DimDate[Date],
            MaxDate,
            -12,
            MONTH
        )
    )
```

---

# 29. Advanced DAX Patterns

Important advanced patterns include:

- cumulative totals,
- dynamic ranking,
- cohort analysis,
- segmentation,
- virtual relationships,
- budget vs actual,
- semi-additive measures,
- disconnected tables,
- dynamic measure selection,
- parent-child hierarchy,
- events-in-progress,
- snapshot fact tables,
- allocation logic.

---

## Running Total

```DAX
Running Sales =
VAR CurrentDate =
    MAX ( DimDate[Date] )
RETURN
    CALCULATE (
        [Total Sales],
        FILTER (
            ALL ( DimDate[Date] ),
            DimDate[Date] <= CurrentDate
        )
    )
```

---

# 30. Variables in DAX

Use `VAR` to make DAX easier to read and often easier to optimize.

```DAX
YoY Growth % =
VAR CurrentSales = [Total Sales]
VAR PreviousSales = [Sales PY]
VAR Difference = CurrentSales - PreviousSales
RETURN
    DIVIDE ( Difference, PreviousSales, 0 )
```

Advantages:

- readability,
- reuse,
- easier debugging,
- reduces repeated expressions.

---

# 31. Virtual Tables

DAX can create temporary tables during calculation.

Example:

```DAX
VAR CustomerSales =
    ADDCOLUMNS (
        VALUES ( DimCustomer[CustomerID] ),
        "Sales", [Total Sales]
    )
RETURN
    ...
```

These tables are not physically stored in the model.

They exist during expression evaluation.

Virtual tables are fundamental to advanced DAX.

---

# 32. Ranking, Segmentation, and Pareto Analysis

## Ranking

```DAX
Product Rank =
RANKX (
    ALLSELECTED ( DimProduct[ProductName] ),
    [Total Sales],
    ,
    DESC
)
```

---

## Sales Band

```DAX
Sales Band =
SWITCH (
    TRUE(),
    [Total Sales] >= 1000000, "Platinum",
    [Total Sales] >= 500000, "Gold",
    [Total Sales] >= 100000, "Silver",
    "Bronze"
)
```

---

## Pareto Principle

Typical business question:

> Which 20% of customers generate approximately 80% of revenue?

Implementation may involve:

1. calculating customer sales,
2. ranking customers,
3. calculating cumulative sales,
4. calculating cumulative percentage,
5. classifying customers.

---

# 33. Visualizations

Core visuals include:

- bar chart,
- column chart,
- line chart,
- area chart,
- pie/donut chart,
- scatter chart,
- waterfall,
- funnel,
- treemap,
- map,
- table,
- matrix,
- card,
- KPI,
- gauge,
- decomposition tree,
- key influencers,
- slicer.

Use visuals to communicate a question, not to decorate a page.

---

# 34. Choosing the Correct Visual

| Business Question | Suggested Visual |
|---|---|
| Compare categories | Bar/Column |
| Trend over time | Line |
| Actual vs target | Bar/KPI/Bullet-style design |
| Contribution to total | Bar/Treemap |
| Geographic distribution | Map |
| Relationship between two metrics | Scatter |
| Detailed records | Table |
| Hierarchical summary | Matrix |
| Change composition | Waterfall |
| Conversion stages | Funnel |

---

## Avoid Overusing Pie Charts

Pie charts become difficult when:

- categories are numerous,
- values are similar,
- exact comparison matters.

A bar chart is often more readable.

---

# 35. Tables and Matrices

## Table

Flat structure.

Example:

| Customer | Sales | Profit |
|---|---:|---:|

## Matrix

Supports hierarchical rows and columns.

Example:

```text
Region
  State
    City
```

Useful for financial and hierarchical reporting.

---

# 36. Conditional Formatting

Use conditional formatting to direct attention.

Examples:

- red for negative variance,
- data bars for revenue,
- icons for KPI status,
- background color based on performance.

Avoid making the entire report a rainbow.

Formatting should communicate meaning.

---

# 37. Slicers and Filters

Three main filter scopes:

- visual-level,
- page-level,
- report-level.

Slicers expose filtering to users.

Common slicers:

- date,
- region,
- department,
- product,
- employee,
- status.

---

## Scenario

HR dashboard has slicers:

```text
Year
Department
Location
Employment Type
Manager
```

A manager selects:

```text
Year = 2026
Department = IT
Location = Mumbai
```

All relevant visuals update.

---

# 38. Drill Down, Drill Through, and Tooltips

## Drill Down

Navigate hierarchy inside a visual.

Example:

```text
Year
↓
Quarter
↓
Month
↓
Day
```

---

## Drill Through

Navigate to another report page with selected context.

Example:

From customer summary:

```text
Right-click Customer A
→ Drill Through
→ Customer Detail
```

---

## Report Page Tooltip

Shows a custom mini-report when hovering over a data point.

Example:

Hover over "Mumbai" and see:

```text
Sales
Profit
Orders
Top Product
YoY Growth
```

---

# 39. Bookmarks, Buttons, and Navigation

Bookmarks capture report state.

Use cases:

- tab-like navigation,
- show/hide panels,
- reset filters,
- storytelling,
- alternate visual layouts.

---

## Scenario: Filter Panel

A button opens a slicer panel.

Another button closes it.

This creates a cleaner dashboard layout.

---

# 40. Field Parameters

Field parameters allow users to dynamically choose:

- dimensions,
- measures,
- axes.

Example:

A user can switch chart metric:

```text
Revenue
Profit
Orders
Quantity
```

without requiring four separate charts.

---

# 41. Report Design and UX

A technically correct report can still be difficult to use.

Good UX principles:

- clear visual hierarchy,
- consistent spacing,
- limited color palette,
- meaningful titles,
- consistent date/number formatting,
- fewer unnecessary visuals,
- logical navigation,
- responsive interactions,
- visible filter context.

---

## Recommended Page Structure

```text
Header
--------------------------------
Filters / Context
--------------------------------
KPI Cards
--------------------------------
Trend / Main Analysis
--------------------------------
Breakdown / Detail
--------------------------------
Navigation / Notes
```

---

## Dynamic Titles

Example:

```DAX
Report Title =
"Sales Analysis - "
    & SELECTEDVALUE ( DimRegion[Region], "All Regions" )
```

---

# 42. Accessibility

Design reports for a wide range of users.

Consider:

- sufficient contrast,
- readable fonts,
- meaningful alt text,
- logical tab order,
- do not rely only on color,
- descriptive visual titles.

Example:

Do not use only:

```text
Green = good
Red = bad
```

Also add text/icon/context.

---

# 43. Dashboard and KPI Design

A KPI needs more than a number.

Strong KPI structure:

```text
Current Value
Target
Variance
Variance %
Trend
Status
Context
```

Example:

```text
Revenue: ₹12.4 Cr
Target: ₹13.0 Cr
Variance: -₹0.6 Cr
Variance %: -4.6%
YoY: +8.2%
```

---

# 44. Power BI Service

After report development, publish to Power BI Service.

Important concepts:

- workspace,
- semantic model,
- report,
- dashboard,
- app,
- refresh,
- gateway,
- permissions,
- subscription,
- lineage,
- deployment.

---

# 45. Workspaces

Workspaces are collaboration containers.

Possible separation:

```text
Sales BI - Development
Sales BI - Testing
Sales BI - Production
```

Workspace roles typically provide different levels of capability.

Design permissions carefully.

Do not make every user an administrator.

---

# 46. Semantic Models

A semantic model contains the analytical model used by reports.

It may contain:

- tables,
- relationships,
- measures,
- hierarchies,
- metadata,
- security rules.

The term "semantic model" emphasizes that the model gives business meaning to raw data.

Instead of users asking:

```sql
SUM(net_amount - tax_adjustment)
```

they can use:

```text
Net Revenue
```

---

# 47. Reports, Dashboards, and Apps

## Report

Multi-page interactive analytical content.

## Dashboard

A service-level canvas that can combine tiles from reports and other sources.

## App

A packaged distribution experience for end users.

A common enterprise pattern:

```text
Workspace
  ↓
BI Team Builds Content
  ↓
App
  ↓
Business Users Consume Content
```

---

# 48. Refresh and Scheduling

Import models need refresh.

Refresh types may include:

- manual refresh,
- scheduled refresh,
- incremental refresh,
- API-triggered refresh.

---

## Example

Sales database updates every night at 1 AM.

Power BI refresh schedule:

```text
Source ETL complete: 1:30 AM
Power BI refresh: 2:00 AM
Business report ready: before 8:00 AM
```

Do not schedule Power BI refresh before upstream ETL is complete.

---

# 49. On-Premises Data Gateway

Use the gateway when cloud Power BI needs access to private/on-premises data.

Architecture:

```text
Power BI Service
       ↓
Gateway
       ↓
SQL Server / File Server / Other Source
```

---

## Gateway Best Practices

- use enterprise/standard mode for shared environments,
- keep gateway updated,
- install on stable always-on infrastructure,
- monitor resource usage,
- avoid using an employee laptop as production gateway,
- use service identities appropriately,
- configure high availability when business critical.

---

# 50. Row-Level Security

RLS limits which rows a user can see.

Example:

Regional managers should see only their own region.

---

## Static RLS

Role:

```DAX
DimRegion[Region] = "Mumbai"
```

---

## Dynamic RLS

Create a security table:

| UserEmail | Region |
|---|---|
| manager1@company.com | Mumbai |
| manager2@company.com | Delhi |

Rule conceptually:

```DAX
Security[UserEmail] = USERPRINCIPALNAME()
```

Relationships then propagate the allowed region.

---

## Dynamic RLS Scenario

User logs in:

```text
manager1@company.com
```

Security table returns:

```text
Mumbai
```

Report automatically shows Mumbai data only.

---

# 51. Object-Level Security

Object-Level Security can restrict access to specific model objects such as columns or tables.

Example:

HR analysts may see:

- employee name,
- department,
- attendance.

But only compensation team may see:

- salary,
- bonus,
- compensation grade.

Use OLS as part of proper semantic model security design where supported by your deployment architecture.

---

# 52. Sharing, Permissions, and Governance

Common methods:

- workspace access,
- report sharing,
- apps,
- build permission on semantic models,
- tenant policies.

Follow least privilege:

```text
Give users only the access they need.
```

---

# 53. Deployment Pipelines and ALM

Enterprise BI should separate environments.

Typical stages:

```text
Development
↓
Test/UAT
↓
Production
```

Deployment pipelines help manage lifecycle changes.

---

## Typical Release Process

```text
Developer updates report
↓
Peer review
↓
Dev validation
↓
Deploy to Test
↓
UAT
↓
Approval
↓
Deploy to Production
↓
Post-deployment validation
```

---

# 54. Incremental Refresh

Instead of refreshing the entire historical table, only recent partitions are refreshed.

Example:

Sales table contains 10 years.

Policy:

```text
Store: 10 years
Refresh: last 7 days
```

Older data does not need to be fully reloaded every night.

Benefits:

- faster refresh,
- reduced source load,
- better scalability.

---

# 55. Aggregation Tables

An aggregation table stores pre-summarized data.

Example detailed table:

```text
100 million transaction rows
```

Aggregation:

```text
Date
Product
Region
TotalSales
TotalQuantity
```

Maybe only 1 million rows.

High-level visuals can hit the aggregation table instead of transaction-level data.

---

# 56. Performance Optimization

Power BI performance depends on:

```text
Source
+
Power Query
+
Model
+
DAX
+
Visuals
+
Network
+
Capacity
```

Optimization must be end-to-end.

---

# 57. DAX Performance Tuning

General guidelines:

- prefer simple measures,
- avoid unnecessary iterators over huge tables,
- use variables,
- reduce repeated calculations,
- filter dimensions rather than massive fact tables where appropriate,
- avoid extremely complex nested logic,
- understand storage engine vs formula engine behavior,
- use performance analysis tools.

---

## Poor Pattern

```DAX
FILTER (
    FactSales,
    FactSales[Region] = "Mumbai"
)
```

If a region dimension exists, filtering the dimension is often preferable:

```DAX
DimRegion[Region] = "Mumbai"
```

---

# 58. Power Query Performance Tuning

Good practices:

- filter early,
- remove unnecessary columns early,
- preserve query folding,
- avoid repeated source access,
- use staging queries,
- avoid expensive row-by-row operations when possible,
- push heavy transformations to a suitable upstream system when appropriate.

---

# 59. Model Performance Tuning

VertiPaq compression is influenced heavily by cardinality.

High-cardinality columns consume more memory.

Examples:

High cardinality:

```text
TransactionGUID
TimestampWithMilliseconds
LongFreeTextComment
```

Low cardinality:

```text
Gender
Region
Status
```

---

## Remove Unused Columns

Do not load:

```text
25 columns
```

if the report needs only:

```text
8 columns.
```

Every loaded column has a cost.

---

## Integer Keys

Surrogate integer keys often model and compress better than long string keys.

Example:

Instead of:

```text
CustomerCode = "IND-WEST-MUM-CUST-2026-00001991"
```

use internal relationship key:

```text
CustomerKey = 101992
```

while keeping customer code as an attribute if users need it.

---

# 60. Power BI and Microsoft Fabric

Power BI is part of the broader Microsoft Fabric analytics ecosystem.

Fabric-oriented components can include:

- OneLake,
- Lakehouse,
- Warehouse,
- Data Factory experiences,
- Data Engineering,
- Data Science,
- Real-Time Intelligence,
- Power BI.

A conceptual enterprise flow:

```text
Sources
  ↓
Fabric ingestion
  ↓
Lakehouse/Warehouse
  ↓
Semantic Model
  ↓
Power BI Reports
```

The exact platform feature set evolves, so always verify architecture details against current Microsoft documentation when designing production Fabric systems.

---

# 61. Dataflows

Dataflows move reusable data preparation into a shared cloud-managed layer.

Without shared dataflow:

```text
Sales Report → cleans customer data
Finance Report → cleans customer data
Operations Report → cleans customer data
```

Repeated work.

With shared dataflow:

```text
Customer Dataflow
   ↓
Sales
Finance
Operations
```

Benefits:

- reuse,
- standardization,
- centralized transformation,
- governance.

---

# 62. Paginated Reports

Paginated reports are ideal for printable, pixel-controlled reporting.

Examples:

- invoice,
- purchase order,
- bank statement,
- salary statement,
- regulatory report,
- 100-page transaction listing.

Power BI interactive reports and paginated reports serve different needs.

---

# 63. Power BI Embedded

Power BI Embedded allows analytics inside applications.

Scenario:

A SaaS company has:

```text
app.company.com
```

Each client logs in and sees their analytics.

Power BI Embedded can provide the report experience inside that application.

Security and tenant isolation must be designed carefully.

---

# 64. Power BI REST API and Automation

Power BI provides APIs for administrative and automation scenarios.

Examples:

- trigger refresh,
- inspect workspaces,
- embed reports,
- automate deployments,
- monitor artifacts,
- integrate with CI/CD workflows.

A conceptual refresh automation:

```text
ETL completes
↓
Automation triggers semantic model refresh
↓
Refresh success checked
↓
Notification sent
```

---

# 65. Power BI with Excel

Excel and Power BI complement each other.

Power BI is better for:

- reusable dashboards,
- centralized models,
- governed analytics,
- large-scale interactive reporting.

Excel is excellent for:

- ad hoc calculation,
- manual modeling,
- familiar grid analysis,
- flexible financial work.

Some Power BI semantic models can also serve Excel-based analysis scenarios.

---

# 66. Power BI with SQL

SQL skills are extremely valuable for Power BI developers.

You should understand:

- SELECT,
- WHERE,
- GROUP BY,
- JOIN,
- CASE,
- CTE,
- window functions,
- views,
- indexes,
- execution plans,
- stored procedures,
- data types.

---

## Example

Instead of importing an unnecessarily huge source table:

```sql
SELECT *
FROM Sales;
```

create a purpose-designed view:

```sql
SELECT
    OrderID,
    OrderDate,
    CustomerID,
    ProductID,
    Quantity,
    NetAmount
FROM Sales
WHERE IsDeleted = 0;
```

---

# 67. Power BI with Python and R

Python or R may be used in selected data preparation and visualization scenarios.

Possible uses:

- statistical analysis,
- machine learning,
- specialized transformations,
- custom plots.

Do not use Python merely to replace something Power Query or DAX already does well.

Each additional technology adds:

- dependencies,
- support requirements,
- security considerations,
- refresh complexity.

---

# 68. Enterprise Architecture Patterns

## Small Team

```text
Excel/SQL
  ↓
Power BI Desktop
  ↓
Power BI Service
```

---

## Medium Organization

```text
Operational Systems
   ↓
SQL Data Warehouse
   ↓
Power BI Semantic Models
   ↓
Reports
   ↓
Apps
```

---

## Large Fabric-Oriented Architecture

```text
ERP / CRM / APIs / Files
         ↓
Data Ingestion
         ↓
OneLake / Lakehouse / Warehouse
         ↓
Curated Analytical Layer
         ↓
Certified Semantic Models
         ↓
Thin Reports
         ↓
Business Apps
```

---

## Thin Report Pattern

A thin report contains report pages and visuals while connecting to a shared semantic model.

Benefits:

- single calculation logic,
- easier governance,
- less duplication,
- consistent KPIs.

---

# 69. Data Governance

Governance means managing data as a trusted organizational asset.

Governance topics include:

- ownership,
- certification,
- sensitivity,
- lineage,
- naming standards,
- access control,
- refresh SLA,
- quality monitoring,
- change management.

---

## Certified Metrics

Imagine five departments calculate "Revenue" differently.

This creates conflict.

A governed semantic model establishes:

```text
Revenue = approved company definition
```

Then all reports reuse it.

---

# 70. Security Best Practices

Important principles:

- least privilege,
- RLS where necessary,
- OLS where necessary,
- secure gateway credentials,
- secure source credentials,
- avoid embedding secrets,
- govern external sharing,
- classify sensitive data,
- audit permissions,
- separate dev/test/prod,
- monitor suspicious access.

Remember:

> Hiding a column from report view is not a security feature.

---

# 71. Version Control and Power BI Projects

Modern Power BI development increasingly supports project-oriented development workflows.

Project formats can make components more source-control friendly compared with treating the entire report as one opaque binary artifact.

Possible workflow:

```text
Developer
↓
Power BI Project
↓
Git
↓
Pull Request
↓
Review
↓
CI/CD
↓
Deployment
```

Use source control for:

- change history,
- collaboration,
- rollback,
- review,
- release management.

---

# 72. Naming Conventions and Project Organization

Good names improve maintainability.

---

## Tables

```text
FactSales
FactInventory
DimCustomer
DimProduct
DimDate
BridgeCustomerSegment
```

---

## Measures

Use business-friendly names:

```text
Total Sales
Total Cost
Gross Profit
Gross Margin %
Orders
Average Order Value
```

Avoid:

```text
Measure1
Measure2
Test123
```

---

## Measure Table

You may organize measures in dedicated measure tables or meaningful display folders.

Example folders:

```text
Sales
Profitability
Time Intelligence
Targets
Customer Analytics
```

---

# 73. Testing Power BI Solutions

BI testing is not optional.

Test:

- data totals,
- filter behavior,
- relationships,
- DAX,
- RLS,
- refresh,
- performance,
- navigation,
- edge cases.

---

## Reconciliation

Source SQL:

```sql
SELECT SUM(NetAmount)
FROM Sales
WHERE OrderDate BETWEEN '2026-01-01' AND '2026-01-31';
```

Power BI:

```text
January Total Sales
```

The values should reconcile according to the same business rules.

---

## Edge Cases

Test:

- zero sales,
- blank targets,
- duplicate IDs,
- leap year,
- year-end,
- missing dates,
- new categories,
- deleted employees,
- negative values,
- cancelled invoices.

---

# 74. Troubleshooting Guide

## Problem: Totals are duplicated

Possible causes:

- wrong relationship,
- many-to-many issue,
- incorrect table grain,
- duplicate dimension keys.

---

## Problem: Visual is slow

Check:

- too many visuals,
- high-cardinality columns,
- inefficient DAX,
- DirectQuery source performance,
- complex custom visuals,
- model size.

---

## Problem: Refresh fails

Check:

- credentials,
- gateway status,
- source availability,
- schema changes,
- privacy settings,
- timeouts,
- API limits,
- file path changes.

---

## Problem: Relationship cannot be created

Possible reasons:

- mismatched data types,
- duplicate values on supposed "one" side,
- blank keys,
- ambiguous path.

---

## Problem: DAX gives incorrect total

Typical cause:

The total is recalculated in total filter context rather than simply adding visible row results.

You may need an iterator pattern.

Example:

```DAX
Correct Total =
SUMX (
    VALUES ( DimProduct[Product] ),
    [Some Measure]
)
```

Only use this pattern when it correctly matches the business logic.

---

# 75. Real-World Business Scenarios

This section connects Power BI concepts to real business work.

---

## Scenario 1: Sales Performance

Questions:

- What is total revenue?
- What is profit?
- Which regions are growing?
- Which products are underperforming?
- Who are top customers?
- How are we performing against target?

Model:

```text
DimDate
DimCustomer
DimProduct
DimRegion
DimSalesperson
FactSales
FactTargets
```

Measures:

```DAX
Total Sales =
SUM ( FactSales[NetAmount] )

Total Cost =
SUM ( FactSales[CostAmount] )

Gross Profit =
[Total Sales] - [Total Cost]

Gross Margin % =
DIVIDE ( [Gross Profit], [Total Sales], 0 )

Orders =
DISTINCTCOUNT ( FactSales[OrderID] )
```

---

## Scenario 2: Employee Attendance

Sources:

- employee master,
- attendance punch,
- holiday calendar,
- leave records.

Questions:

- present employees,
- absent employees,
- late arrivals,
- average working hours,
- location utilization,
- monthly attendance percentage.

Model:

```text
DimEmployee
DimDate
DimLocation
FactAttendance
FactLeave
```

---

## Scenario 3: Invoice Analytics

Fields:

```text
InvoiceID
Vendor
Company
InvoiceDate
InvoiceAmount
Status
ERPPostedDate
PaymentDate
ApprovalStage
```

KPIs:

- invoice received,
- pending approval,
- pending posting,
- rejected,
- average processing time,
- aging,
- overdue invoices.

---

## Scenario 4: IT Helpdesk

Questions:

- number of open tickets,
- SLA breaches,
- average resolution time,
- category-wise volume,
- team workload,
- repeat incidents.

---

# 76. Complete Sales Dashboard Project

## Business Requirement

Create an executive sales dashboard showing:

- revenue,
- profit,
- margin,
- order count,
- target achievement,
- YoY growth,
- top products,
- top customers,
- regional performance.

---

## Recommended Tables

### FactSales

```text
OrderID
OrderDateKey
CustomerKey
ProductKey
RegionKey
SalespersonKey
Quantity
GrossAmount
DiscountAmount
NetAmount
CostAmount
```

### FactTargets

```text
DateKey
RegionKey
SalespersonKey
TargetAmount
```

### Dimensions

```text
DimDate
DimCustomer
DimProduct
DimRegion
DimSalesperson
```

---

## Measures

```DAX
Total Sales =
SUM ( FactSales[NetAmount] )
```

```DAX
Total Cost =
SUM ( FactSales[CostAmount] )
```

```DAX
Gross Profit =
[Total Sales] - [Total Cost]
```

```DAX
Gross Margin % =
DIVIDE ( [Gross Profit], [Total Sales], 0 )
```

```DAX
Sales Target =
SUM ( FactTargets[TargetAmount] )
```

```DAX
Target Variance =
[Total Sales] - [Sales Target]
```

```DAX
Target Achievement % =
DIVIDE ( [Total Sales], [Sales Target], 0 )
```

```DAX
Sales PY =
CALCULATE (
    [Total Sales],
    SAMEPERIODLASTYEAR ( DimDate[Date] )
)
```

```DAX
YoY % =
DIVIDE (
    [Total Sales] - [Sales PY],
    [Sales PY],
    0
)
```

---

## Pages

### Page 1 – Executive Overview

- Revenue
- Profit
- Margin %
- Target Achievement
- YoY Growth
- Monthly trend
- Region breakdown

### Page 2 – Product Analysis

- Category
- Brand
- Product
- Revenue
- Margin
- Rank

### Page 3 – Customer Analysis

- Top customers
- customer contribution
- customer trends
- retention indicators

### Page 4 – Salesperson Analysis

- salesperson target,
- actual,
- achievement,
- ranking.

---

# 77. Finance Dashboard Project

Possible tables:

```text
FactGL
FactBudget
DimAccount
DimCostCenter
DimEntity
DimDate
```

KPIs:

- revenue,
- operating expense,
- EBITDA,
- budget,
- variance,
- cash flow,
- receivables,
- payables.

---

## Budget Variance

```DAX
Budget Variance =
[Actual Amount] - [Budget Amount]
```

Variance percentage:

```DAX
Budget Variance % =
DIVIDE (
    [Budget Variance],
    [Budget Amount],
    0
)
```

Be careful: favorable/unfavorable logic differs between revenue and expense accounts.

---

# 78. HR Dashboard Project

KPIs:

- headcount,
- active employees,
- joiners,
- exits,
- attrition,
- gender distribution,
- department distribution,
- average tenure,
- attendance,
- leave.

---

## Attrition Rate

Business definitions vary.

One possible conceptual formula:

```text
Attrition Rate =
Exits during period
-----------------------------
Average headcount during period
```

Never assume the definition. Confirm HR's approved business formula.

---

# 79. Operations Dashboard Project

Possible metrics:

- production volume,
- downtime,
- defect rate,
- cycle time,
- capacity utilization,
- SLA,
- backlog.

Example:

```DAX
Defect Rate % =
DIVIDE (
    [Defective Units],
    [Produced Units],
    0
)
```

---

# 80. Inventory Dashboard Project

Tables:

```text
FactInventorySnapshot
FactInventoryMovement
DimProduct
DimWarehouse
DimDate
```

KPIs:

- current stock,
- stock value,
- days of inventory,
- slow-moving stock,
- out-of-stock products,
- reorder requirement.

---

## Inventory Requires Careful Modeling

Inventory is often **semi-additive**.

You should not simply add month-end stock across months.

Example:

```text
Jan ending inventory = 100
Feb ending inventory = 120
```

Annual ending inventory is not:

```text
220
```

The correct figure may be the latest snapshot:

```text
120
```

---

# 81. Executive Dashboard Project

Executives usually need:

- high-level KPIs,
- variance,
- trends,
- exceptions,
- drivers,
- ability to drill into details.

Avoid giving executives 40 charts on one page.

Use:

```text
5–8 primary KPIs
3–5 analytical visuals
clear exceptions
drill-through for detail
```

---

# 82. Common Power BI Mistakes

## Mistake 1: One giant flat table

Works initially but becomes difficult to maintain.

Better:

```text
Star schema
```

---

## Mistake 2: Excessive calculated columns

Use measures when calculation is analytical rather than row storage.

---

## Mistake 3: Bidirectional relationships everywhere

Can create ambiguous and unexpected filtering.

---

## Mistake 4: Using `FORMAT()` unnecessarily in numeric measures

`FORMAT()` may convert numeric output to text, which can affect sorting and downstream behavior.

Prefer model formatting where possible.

---

## Mistake 5: Putting business logic only in visuals

Centralize reusable logic in measures.

---

## Mistake 6: Ignoring data quality

A beautiful dashboard built on incorrect data is still wrong.

---

## Mistake 7: Building before understanding requirements

Always ask:

```text
What business decision should this report support?
```

---

## Mistake 8: Too many visuals

Every visual generates cognitive and sometimes technical cost.

---

## Mistake 9: Importing unnecessary columns

Remove unused data.

---

## Mistake 10: No date table

Time intelligence becomes unreliable or limited.

---

## Mistake 11: No naming standards

Model becomes difficult to maintain.

---

## Mistake 12: No source reconciliation

Never assume numbers are correct because they "look reasonable."

---

# 83. Power BI Interview Preparation

## Beginner Questions

### What is Power BI?

A Microsoft analytics platform used to connect, transform, model, visualize, publish, and share data.

### What is Power Query?

The data transformation engine used to extract and reshape data before loading it into the model.

### What is DAX?

A formula language used for analytical calculations in semantic models.

### Difference between measure and calculated column?

A calculated column is computed row-by-row and stored. A measure is evaluated dynamically according to filter context.

---

## Intermediate Questions

### What is star schema?

A dimensional modeling approach where fact tables are surrounded by dimension tables.

### What is query folding?

The ability for Power Query to push transformations back to the data source.

### What is row context?

Context representing the current row during row-by-row evaluation.

### What is filter context?

Filters applied to a DAX expression from visuals, slicers, relationships, and DAX.

### Why is `CALCULATE` important?

It evaluates an expression under modified filter context.

---

## Advanced Questions

### What causes a DAX total to differ from visible row sum?

Measures are recalculated in total filter context; the total is not automatically the arithmetic sum of visible rows.

### When would you use a bridge table?

To model many-to-many relationships or mapping structures.

### What is a semi-additive measure?

A measure that can be aggregated across some dimensions but not all, such as inventory balance across time.

### Why is high cardinality expensive?

It reduces compression efficiency and can increase model memory and processing cost.

### How do you optimize DirectQuery?

Improve:

- source indexing,
- source SQL,
- star schema,
- visual count,
- DAX,
- aggregation strategy,
- query design.

---

# 84. Power BI Learning Roadmap

## Stage 1 – Beginner

Learn:

- Power BI interface,
- loading Excel/CSV,
- basic Power Query,
- simple visuals,
- filters,
- slicers,
- basic measures.

Practice:

Build a basic sales dashboard.

---

## Stage 2 – Data Preparation

Learn:

- data types,
- merge,
- append,
- pivot/unpivot,
- grouping,
- custom columns,
- parameters,
- query folding.

Practice:

Combine monthly files from a folder.

---

## Stage 3 – Modeling

Learn:

- fact tables,
- dimensions,
- star schema,
- grain,
- keys,
- cardinality,
- filter direction,
- date table.

Practice:

Convert a flat sales dataset into star schema.

---

## Stage 4 – DAX

Learn:

- measures,
- context,
- CALCULATE,
- FILTER,
- iterators,
- time intelligence,
- ranking,
- variables.

Practice:

Build:

```text
YTD
MTD
PY
YoY
Running Total
Rank
% of Total
```

---

## Stage 5 – Visualization

Learn:

- visual selection,
- drill-through,
- tooltips,
- bookmarks,
- field parameters,
- conditional formatting,
- accessibility.

---

## Stage 6 – Service

Learn:

- publishing,
- workspaces,
- apps,
- refresh,
- gateway,
- permissions,
- RLS.

---

## Stage 7 – Advanced

Learn:

- performance optimization,
- incremental refresh,
- aggregations,
- composite models,
- deployment pipelines,
- Fabric,
- ALM,
- APIs.

---

## Stage 8 – Enterprise

Learn:

- governance,
- architecture,
- reusable semantic models,
- security,
- testing,
- monitoring,
- CI/CD,
- version control.

---

# 85. Practice Exercises

## Exercise 1 – Sales Basics

Columns:

```text
Date
Product
Region
Quantity
UnitPrice
Cost
```

Create:

- Total Sales
- Total Cost
- Profit
- Margin %
- Orders
- Monthly trend

---

## Exercise 2 – Power Query

Given 12 monthly Excel files:

```text
Sales_2026_01.xlsx
Sales_2026_02.xlsx
...
Sales_2026_12.xlsx
```

Build a folder-based process that combines all files automatically.

---

## Exercise 3 – Data Modeling

Convert:

```text
OrderID
OrderDate
CustomerName
CustomerCity
ProductName
Category
SalesAmount
```

into:

```text
FactSales
DimCustomer
DimProduct
DimDate
```

---

## Exercise 4 – DAX

Create:

```text
Total Sales
Sales YTD
Sales PY
YoY %
Running Total
Sales % of Total
Product Rank
```

---

## Exercise 5 – RLS

Security table:

| Email | Region |
|---|---|
| user1@company.com | West |
| user2@company.com | North |

Implement dynamic regional RLS.

---

## Exercise 6 – Performance

Take an intentionally poor model with:

- unused columns,
- text keys,
- many bidirectional relationships,
- slow DAX.

Optimize it and document each change.

---

# 86. Quick Reference Cheat Sheets

# Power Query Cheat Sheet

```text
Filter rows
Remove columns
Change types
Split
Merge
Append
Group
Pivot
Unpivot
Replace
Trim
Clean
Fill
Index
Conditional column
Custom column
Parameter
Function
```

---

# DAX Cheat Sheet

```DAX
SUM
AVERAGE
DISTINCTCOUNT
DIVIDE
IF
SWITCH
CALCULATE
FILTER
VALUES
SELECTEDVALUE
REMOVEFILTERS
ALL
ALLSELECTED
KEEPFILTERS
SUMX
AVERAGEX
RANKX
TOPN
RELATED
USERELATIONSHIP
DATEADD
DATESYTD
SAMEPERIODLASTYEAR
```

---

# Modeling Cheat Sheet

```text
Prefer star schema.
Define grain first.
Use dimensions for filtering.
Use facts for events/measures.
Prefer one-to-many relationships.
Use bidirectional filters only intentionally.
Create a proper date table.
Use integer surrogate keys where practical.
Remove unused columns.
```

---

# Report UX Cheat Sheet

```text
Use clear titles.
Use consistent spacing.
Keep colors meaningful.
Avoid visual overload.
Show current filter context.
Use drill-through for detail.
Use tooltips for supporting insight.
Use bookmarks/buttons for navigation.
```

---

# Performance Cheat Sheet

```text
Filter early.
Preserve query folding.
Reduce data volume.
Remove unused columns.
Reduce high cardinality.
Use star schema.
Simplify DAX.
Reduce excessive visuals.
Use incremental refresh where appropriate.
Optimize source queries.
```

---

# 87. Glossary

## Aggregation

Summarized data such as total sales by month.

## BI

Business Intelligence.

## Cardinality

Relationship type or number of unique values, depending on context.

## DAX

Data Analysis Expressions.

## Dimension

Descriptive entity such as Product, Customer, or Date.

## DirectQuery

Connectivity mode where queries are sent to the source during interaction.

## Fact

Table containing measurable business events.

## Filter Context

Filters affecting DAX evaluation.

## Gateway

Software that allows Power BI Service to securely access private/on-premises sources.

## Grain

Business meaning represented by one row.

## Import Mode

Storage mode where data is loaded into the semantic model.

## M

Power Query formula language.

## Measure

Dynamic DAX calculation evaluated based on context.

## Query Folding

Pushing Power Query transformations back to the source.

## RLS

Row-Level Security.

## Semantic Model

Business-oriented analytical model containing tables, relationships, measures, and metadata.

## Star Schema

Modeling pattern with fact tables surrounded by dimensions.

## VertiPaq

Columnar storage engine used by imported Power BI semantic models.

---

# 88. Final Mastery Checklist

Use this as a self-assessment.

## Fundamentals

- [ ] I understand what Power BI is.
- [ ] I understand the Power BI ecosystem.
- [ ] I understand Power BI Desktop and Service.
- [ ] I can explain BI, OLTP, and analytical reporting.

## Data Connection

- [ ] I can connect to Excel.
- [ ] I can connect to CSV.
- [ ] I can connect to SQL.
- [ ] I understand Import.
- [ ] I understand DirectQuery.
- [ ] I understand composite model concepts.
- [ ] I understand Direct Lake conceptually.

## Power Query

- [ ] I can clean messy data.
- [ ] I can change data types.
- [ ] I can merge tables.
- [ ] I can append tables.
- [ ] I can pivot and unpivot.
- [ ] I can group data.
- [ ] I understand parameters.
- [ ] I understand query folding.
- [ ] I can read basic M code.
- [ ] I can create reusable transformations.

## Modeling

- [ ] I understand fact tables.
- [ ] I understand dimensions.
- [ ] I understand grain.
- [ ] I can create a star schema.
- [ ] I understand one-to-many.
- [ ] I understand many-to-many.
- [ ] I understand active/inactive relationships.
- [ ] I understand filter direction.
- [ ] I can create a date table.

## DAX

- [ ] I understand measures.
- [ ] I understand calculated columns.
- [ ] I understand row context.
- [ ] I understand filter context.
- [ ] I understand CALCULATE.
- [ ] I can use FILTER.
- [ ] I can use SUMX.
- [ ] I understand variables.
- [ ] I can create time-intelligence measures.
- [ ] I can create running totals.
- [ ] I can create ranking logic.
- [ ] I can create percent-of-total calculations.
- [ ] I understand virtual tables conceptually.

## Visualization

- [ ] I can choose appropriate visuals.
- [ ] I can use slicers.
- [ ] I can use drill-down.
- [ ] I can use drill-through.
- [ ] I can create tooltips.
- [ ] I can use bookmarks.
- [ ] I can use buttons.
- [ ] I understand field parameters.
- [ ] I understand accessibility basics.

## Service

- [ ] I can publish a report.
- [ ] I understand workspaces.
- [ ] I understand semantic models.
- [ ] I understand apps.
- [ ] I can configure refresh.
- [ ] I understand gateways.
- [ ] I understand RLS.
- [ ] I understand permissions.

## Advanced

- [ ] I understand incremental refresh.
- [ ] I understand aggregations.
- [ ] I understand composite models.
- [ ] I understand Power BI performance principles.
- [ ] I understand Power BI/Fabric architecture conceptually.
- [ ] I understand dataflows.
- [ ] I understand deployment pipelines.
- [ ] I understand version control concepts.
- [ ] I understand testing.
- [ ] I understand governance.

---

# Appendix A – A Better Way to Think About Power BI

Power BI mastery is not:

```text
Learn every button.
```

Power BI mastery is:

```text
Understand Business
       +
Understand Data
       +
Model Correctly
       +
Calculate Correctly
       +
Communicate Clearly
       +
Secure Properly
       +
Optimize Performance
```

---

# Appendix B – The Three-Layer Rule

Whenever you are confused, divide the problem into three layers.

## Layer 1 – Power Query

Question:

> How should I clean or reshape the raw data?

Example:

```text
"01-Jan-26" → valid Date type
```

---

## Layer 2 – Data Model / DAX

Question:

> How should the business calculation work?

Example:

```text
Revenue
Profit
YTD
YoY
Target Achievement
```

---

## Layer 3 – Report

Question:

> How should the result be communicated to users?

Example:

```text
KPI card
Trend line
Variance chart
Drill-through detail
```

Do not solve a model problem with visual formatting.

Do not solve a data-quality problem with complicated DAX if Power Query/source logic is the correct layer.

---

# Appendix C – Requirement Gathering Template

Before building a Power BI report, ask:

## Business

```text
Who will use this report?
What decision will they make?
How frequently will they use it?
What are the most important KPIs?
```

## Data

```text
Where does the data come from?
Who owns the source?
How often is the source updated?
How much history is required?
What is the expected row count?
```

## KPI

```text
What exactly is Revenue?
What exactly is Profit?
How is Target defined?
How is Attrition defined?
How is SLA calculated?
```

## Security

```text
Who can see what?
Does the report contain sensitive information?
Is regional/departmental restriction required?
```

## Refresh

```text
How fresh must the data be?
Daily?
Hourly?
Near-real-time?
```

## Distribution

```text
Who receives the report?
Workspace access?
Power BI App?
Embedded portal?
```

---

# Appendix D – Example Semantic Model

```text
                        DimDate
                           |
                           |
DimCustomer ----- FactSales ----- DimProduct
                           |
                           |
                       DimRegion
                           |
                           |
                    DimSalesperson


                        DimDate
                           |
                           |
                       FactTarget
                           |
                           |
                       DimRegion
```

This model allows:

- actual sales,
- target comparison,
- regional filtering,
- salesperson analysis,
- customer analysis,
- product analysis,
- time intelligence.

---

# Appendix E – Common DAX Starter Library

## Total Revenue

```DAX
Total Revenue =
SUM ( FactSales[Revenue] )
```

## Total Quantity

```DAX
Total Quantity =
SUM ( FactSales[Quantity] )
```

## Orders

```DAX
Orders =
DISTINCTCOUNT ( FactSales[OrderID] )
```

## Average Order Value

```DAX
Average Order Value =
DIVIDE (
    [Total Revenue],
    [Orders],
    0
)
```

## Total Cost

```DAX
Total Cost =
SUM ( FactSales[Cost] )
```

## Gross Profit

```DAX
Gross Profit =
[Total Revenue] - [Total Cost]
```

## Gross Margin %

```DAX
Gross Margin % =
DIVIDE (
    [Gross Profit],
    [Total Revenue],
    0
)
```

## Revenue YTD

```DAX
Revenue YTD =
TOTALYTD (
    [Total Revenue],
    DimDate[Date]
)
```

## Revenue PY

```DAX
Revenue PY =
CALCULATE (
    [Total Revenue],
    SAMEPERIODLASTYEAR ( DimDate[Date] )
)
```

## Revenue YoY %

```DAX
Revenue YoY % =
DIVIDE (
    [Total Revenue] - [Revenue PY],
    [Revenue PY],
    0
)
```

## Revenue % of Total

```DAX
Revenue % of Total =
DIVIDE (
    [Total Revenue],
    CALCULATE (
        [Total Revenue],
        REMOVEFILTERS ( DimProduct )
    ),
    0
)
```

## Product Rank

```DAX
Product Rank =
RANKX (
    ALLSELECTED ( DimProduct[ProductName] ),
    [Total Revenue],
    ,
    DESC,
    DENSE
)
```

---

# Appendix F – Suggested Portfolio Projects

Build at least five complete projects.

## Project 1

Sales Performance Dashboard

## Project 2

Financial Budget vs Actual Dashboard

## Project 3

HR Attendance and Attrition Dashboard

## Project 4

Inventory and Procurement Dashboard

## Project 5

Executive KPI Dashboard

For each project include:

```text
README
Business requirement
Data dictionary
Source description
Power Query steps
Star schema diagram
DAX measure list
Report screenshots
Performance notes
Security notes
Deployment notes
```

---

# Appendix G – 90-Day Power BI Mastery Plan

## Days 1–15

Focus:

- Desktop interface,
- Excel/CSV connections,
- Power Query basics,
- simple visuals.

Build:

One basic sales report.

---

## Days 16–30

Focus:

- data modeling,
- star schema,
- relationships,
- date tables.

Rebuild the same sales report using proper modeling.

---

## Days 31–50

Focus:

- DAX,
- CALCULATE,
- context,
- iterators,
- time intelligence.

Build at least 30 measures.

---

## Days 51–65

Focus:

- visualization,
- UX,
- bookmarks,
- tooltips,
- drill-through,
- dynamic titles.

Redesign your earlier report professionally.

---

## Days 66–75

Focus:

- Power BI Service,
- gateway,
- refresh,
- workspaces,
- apps,
- RLS.

Publish and secure your report.

---

## Days 76–85

Focus:

- performance,
- incremental refresh,
- aggregation,
- DirectQuery,
- enterprise patterns.

Benchmark your report.

---

## Days 86–90

Create a portfolio-quality final project.

Document:

- requirement,
- architecture,
- transformations,
- model,
- DAX,
- design,
- security,
- performance,
- deployment.

---

# Appendix H – Power BI Developer Mindset

Before adding a calculation, ask:

```text
Should this be done in:
Source SQL?
Power Query?
Calculated Column?
Measure?
Visual?
```

Before adding a relationship, ask:

```text
What is the grain?
Which side is unique?
How should filters propagate?
```

Before adding a visual, ask:

```text
What question does this visual answer?
```

Before publishing, ask:

```text
Who should be able to see this data?
How will it refresh?
How will we know if refresh fails?
```

Before calling a report finished, ask:

```text
Have the numbers been reconciled?
Has security been tested?
Has performance been tested?
Can a new user understand the page without explanation?
```

---

# Appendix I – Recommended Skills Around Power BI

To become a strong Power BI professional, also learn:

1. SQL
2. Data warehousing
3. Dimensional modeling
4. Excel
5. Basic statistics
6. Data visualization
7. Business requirement analysis
8. Power Platform fundamentals
9. Microsoft Fabric fundamentals
10. Git/version control
11. Cloud analytics concepts
12. Data governance
13. Basic API concepts
14. Python optionally
15. CI/CD and DevOps fundamentals for enterprise BI

---

# Appendix J – Advanced Topics to Continue After This Handbook

After mastering the content here, go deeper into:

- VertiPaq internals,
- storage engine vs formula engine,
- advanced DAX optimization,
- calculation groups,
- Tabular Object Model,
- external BI development tools,
- enterprise semantic model design,
- advanced composite models,
- advanced DirectQuery optimization,
- Direct Lake architecture,
- Fabric capacities,
- semantic model automation,
- XMLA-based management,
- CI/CD,
- metadata management,
- lineage,
- observability,
- enterprise governance,
- large-scale tenant administration.

---

# Conclusion

Power BI is easiest to master when learned in the correct order:

```text
Business Requirement
        ↓
Data Understanding
        ↓
Power Query
        ↓
Data Modeling
        ↓
DAX
        ↓
Visualization
        ↓
Power BI Service
        ↓
Security
        ↓
Performance
        ↓
Governance
        ↓
Enterprise Architecture
```

A Power BI developer should never be only a "dashboard creator."

A strong Power BI professional understands:

- business rules,
- source systems,
- data quality,
- dimensional modeling,
- DAX,
- visualization,
- performance,
- security,
- deployment,
- and governance.

Use this handbook as both:

1. a step-by-step learning guide, and
2. a reference while working on real Power BI projects.

---

**End of Power BI Master Handbook**
