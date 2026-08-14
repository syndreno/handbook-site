# Python Mastery Guide — Beginner to Advanced

> **Expanded beginner-friendly edition:** Every major chapter explains the concept before showing syntax. The goal is that a new learner can open any section, understand what the feature means, why it exists, when to use it, and then learn from the examples.

> A practical, scenario-driven handbook for mastering modern Python 3.
>
> **Edition baseline (August 2026):** The latest stable feature series is Python 3.14. The core examples are intentionally conservative and generally run on Python 3.10 or newer; sections that need a later version say so. Prefer the newest maintenance release in a supported series rather than a preview release for ordinary projects.
>
> Use this file as:
> - a complete learning roadmap,
> - a revision handbook,
> - a coding reference,
> - an interview-preparation guide,
> - a source of practice exercises and project ideas.

---

# Table of Contents

1. [How to Use This Guide](#1-how-to-use-this-guide)
2. [Python Mental Model](#2-python-mental-model)
3. [Installation and Environment](#3-installation-and-environment)
4. [Your First Python Program](#4-your-first-python-program)
5. [Variables and Data Types](#5-variables-and-data-types)
6. [Operators](#6-operators)
7. [Strings](#7-strings)
8. [Lists](#8-lists)
9. [Tuples](#9-tuples)
10. [Sets](#10-sets)
11. [Dictionaries](#11-dictionaries)
12. [Conditions](#12-conditions)
13. [Loops](#13-loops)
14. [Comprehensions](#14-comprehensions)
15. [Functions](#15-functions)
16. [Scope and Namespaces](#16-scope-and-namespaces)
17. [Errors and Exception Handling](#17-errors-and-exception-handling)
18. [Modules and Packages](#18-modules-and-packages)
19. [Object-Oriented Programming](#19-object-oriented-programming)
20. [Dataclasses](#20-dataclasses)
21. [Iterators and Iterables](#21-iterators-and-iterables)
22. [Generators](#22-generators)
23. [Decorators](#23-decorators)
24. [Context Managers](#24-context-managers)
25. [Lambda and Functional Programming](#25-lambda-and-functional-programming)
26. [Type Hints](#26-type-hints)
27. [Pattern Matching](#27-pattern-matching)
28. [Files and Directories](#28-files-and-directories)
29. [JSON, CSV, XML, YAML](#29-json-csv-xml-yaml)
30. [Dates and Times](#30-dates-and-times)
31. [Regular Expressions](#31-regular-expressions)
32. [Logging](#32-logging)
33. [Command-Line Applications](#33-command-line-applications)
34. [Environment Variables and Configuration](#34-environment-variables-and-configuration)
35. [Virtual Environments and Dependencies](#35-virtual-environments-and-dependencies)
36. [HTTP Requests and APIs](#36-http-requests-and-apis)
37. [Database Programming](#37-database-programming)
38. [Concurrency Overview](#38-concurrency-overview)
39. [Threading](#39-threading)
40. [Multiprocessing](#40-multiprocessing)
41. [Asyncio](#41-asyncio)
42. [Testing](#42-testing)
43. [Debugging](#43-debugging)
44. [Clean Code and Pythonic Design](#44-clean-code-and-pythonic-design)
45. [SOLID Principles in Python](#45-solid-principles-in-python)
46. [Design Patterns](#46-design-patterns)
47. [Data Structures and Algorithms](#47-data-structures-and-algorithms)
48. [Memory Management](#48-memory-management)
49. [Performance Optimization](#49-performance-optimization)
50. [Security](#50-security)
51. [Packaging and Publishing](#51-packaging-and-publishing)
52. [Useful Standard-Library Modules](#52-useful-standard-library-modules)
53. [Automation with Python](#53-automation-with-python)
54. [Web Development](#54-web-development)
55. [Data Analysis](#55-data-analysis)
56. [Machine Learning and AI](#56-machine-learning-and-ai)
57. [OCR and Document Processing](#57-ocr-and-document-processing)
58. [Python for DevOps](#58-python-for-devops)
59. [Python Interview Concepts](#59-python-interview-concepts)
60. [Common Beginner Mistakes](#60-common-beginner-mistakes)
61. [Practice Scenarios](#61-practice-scenarios)
62. [Project Roadmap](#62-project-roadmap)
63. [90-Day Learning Plan](#63-90-day-learning-plan)
64. [Python Cheat Sheet](#64-python-cheat-sheet)
65. [Final Mastery Checklist](#65-final-mastery-checklist)

- [Appendix: Official References](#appendix-official-references)

---

# 1. How to Use This Guide

> **Beginner explanation:** This handbook is designed to be read in layers. First understand the idea, then run the example, then change the example yourself. You do not need to memorize every method or keyword; the goal is to understand what problem each feature solves and to become comfortable finding the exact syntax when you need it.

**What you should do for every topic:**
- Explain the concept in your own words.
- Type the example instead of only reading it.
- Change inputs and observe what changes.
- Intentionally create an error and read the traceback.
- Build one tiny real-world use case with the concept.

Do not try to memorize Python syntax.

Use this cycle:

```text
Learn concept
    ↓
Type example yourself
    ↓
Change the example
    ↓
Break it intentionally
    ↓
Understand the error
    ↓
Solve a small real-world problem
    ↓
Use it in a project
```

Recommended stages:

| Stage | Topics |
|---|---|
| Beginner | variables, collections, conditions, loops, functions |
| Intermediate | files, exceptions, modules, OOP, comprehensions |
| Advanced | generators, decorators, typing, async, concurrency |
| Professional | testing, packaging, architecture, performance, security |
| Specialized | web, automation, data, AI, DevOps, OCR |

---


## Beginner Glossary Before You Continue

These words appear throughout Python tutorials. Learn them early:

| Term | Simple meaning |
|---|---|
| **Program** | A set of instructions for the computer |
| **Source code** | The Python text you write |
| **Interpreter** | The program that reads and executes Python code |
| **Statement** | An instruction such as `x = 10` |
| **Expression** | Code that produces a value, such as `2 + 3` |
| **Variable/name** | A name that refers to a value/object |
| **Object** | A value in Python with a type and behavior |
| **Type** | The category of an object, such as `int` or `str` |
| **Function** | Reusable behavior that can accept input and return output |
| **Argument** | A value supplied when calling a function |
| **Parameter** | A named input in a function definition |
| **Method** | A function accessed through an object or class |
| **Class** | A blueprint/type used to create objects |
| **Instance** | One concrete object created from a class |
| **Iterable** | An object that can be looped over |
| **Exception** | An object representing an error/failure condition |
| **Module** | A Python file that can be imported |
| **Package** | A group of related modules |
| **Library** | Reusable code, often containing packages/modules |
| **Framework** | A larger structure that controls part of your application's flow |
| **API** | A defined interface through which software components communicate |

## Comments

Comments are notes for humans and are ignored by Python during normal execution.

```python
# This is a comment
invoice_total = 1180
```

Use comments to explain **why** something is done, not to repeat obvious code.

Bad:

```python
# Add 1 to count
count += 1
```

Better:

```python
# Retry numbering shown to the user starts at 1.
display_attempt = retry_index + 1
```

## Docstrings

A docstring documents a module, class, function, or method and can be inspected by tools.

```python
def calculate_total(
    subtotal: float,
    tax: float,
) -> float:
    """Return the invoice total including tax."""
    return subtotal + tax
```

A useful function docstring may explain:

- purpose,
- important parameters,
- returned value,
- exceptions,
- non-obvious behavior.

Do not write a long docstring for a function whose purpose is already completely obvious from its name and signature.

## Reading User Input

`input()` reads text entered by the user.

```python
name = input("Enter your name: ")
print(f"Hello, {name}")
```

Important: `input()` returns a **string**, even if the user types digits.

```python
age_text = input("Enter age: ")
age = int(age_text)
```

Handle invalid input:

```python
try:
    age = int(input("Enter age: "))
except ValueError:
    print("Please enter a whole number.")
```

## `print()` Is Output, Not Business Logic

`print()` is excellent for learning and simple CLI programs, but reusable business functions should usually **return data** rather than only printing it.

Less reusable:

```python
def calculate_total(a, b):
    print(a + b)
```

More reusable:

```python
def calculate_total(a, b):
    return a + b


total = calculate_total(10, 20)
print(total)
```



## How Every Topic Should Be Read

When you open any chapter, answer these five questions:

1. **What is it?** — Explain the feature in plain English.
2. **Why does it exist?** — Identify the problem it solves.
3. **When should I use it?** — Name at least one realistic situation.
4. **What can go wrong?** — Understand one common mistake or edge case.
5. **Can I build something with it?** — Write a small example without copying.

If you cannot answer these questions yet, keep practicing that topic before treating it as complete.

# 2. Python Mental Model

> **Beginner explanation:** Before learning syntax, understand how Python thinks about data. A variable is usually best imagined as a **name attached to an object**, not as a box permanently containing a value. This becomes very important when you work with lists, dictionaries, function arguments, copies, classes, and mutable objects.

**Why this matters:** Two different variable names can point to the same object. If that object is mutable and you change it through one name, the change may be visible through the other name too.

**Mental model:** `name → object in memory`.

Python is:

- interpreted,
- dynamically typed,
- strongly typed,
- garbage collected,
- object-oriented,
- multi-paradigm,
- indentation-sensitive.

Almost everything in Python is an object.

```python
x = 10

print(type(x))
print(id(x))
```

`x` is a **name/reference** pointing to an integer object.

## Assignment does not necessarily copy objects

> **What this means:** When you assign one variable to another, Python usually copies the **reference**, not the object itself. This distinction matters most for mutable objects such as lists and dictionaries.

```python
a = [1, 2, 3]
b = a

b.append(4)

print(a)
# [1, 2, 3, 4]
```

Both names reference the same list.

To copy:

```python
b = a.copy()
```

For nested structures:

```python
import copy

b = copy.deepcopy(a)
```

`deepcopy()` is not a universal “safer copy.” It recursively duplicates reachable objects, can be expensive, and may be inappropriate for resources such as files, sockets, locks, or database connections. Prefer a purpose-built copy of the data your application actually owns.

---

# 3. Installation and Environment

> **Beginner explanation:** Your Python environment is the combination of the Python interpreter, your project files, and the packages installed for that project. Learning to create an isolated environment early prevents the classic problem where one project needs one package version and another project needs a different version.

**You should understand:** interpreter, terminal, project folder, virtual environment, package installer, and editor/IDE are different things even though you use them together.

Check Python:

```bash
python --version
```

On some systems:

```bash
python3 --version
```

At the time of this edition, Python 3.14 is the current stable feature series. Download Python from the official Python website or use a trusted operating-system package manager. A command such as this is expected to print a version, for example:

```text
Python 3.14.7
```

Confirm which interpreter and package installer a project is using:

```bash
python -c "import sys; print(sys.executable)"
python -m pip --version
```

Using `python -m pip` ties `pip` to the same interpreter selected by `python`, which avoids a common multi-version setup mistake.

Run a file:

```bash
python app.py
```

Interactive shell:

```bash
python
```

Exit:

```python
exit()
```

## Recommended project layout

> **What this means:** A consistent folder structure helps separate application code, tests, configuration, and documentation. Small scripts can stay simple, but larger projects benefit from predictable organization.

```text
my_project/
│
├── src/
│   └── my_project/
│       ├── __init__.py
│       └── main.py
│
├── tests/
│   └── test_main.py
│
├── .env
├── .gitignore
├── README.md
├── pyproject.toml
└── requirements.txt
```

This is a menu, not a requirement for every script. `pyproject.toml` describes a package and its dependencies; `requirements.txt` is often used as an environment snapshot or deployment input. A `.env` file may contain local secrets, so list it in `.gitignore` and commit an example such as `.env.example` instead. With a `src/` layout, install the project (often `python -m pip install -e .`) before importing it in development.

---

# 4. Your First Python Program

> **Beginner explanation:** A Python program is simply a sequence of instructions that the Python interpreter executes. `print()` is often the first function beginners use because it lets you immediately see a value or message on the screen.

**Learning goal:** Understand statements, function calls, string literals, variables, and how Python executes a file from top to bottom.

```python
print("Hello, Python!")
```

Variables:

```python
name = "Shoeb"
age = 27

print(name)
print(age)
```

Formatted output:

```python
print(f"My name is {name} and I am {age} years old.")
```

---


## Indentation

Python uses indentation to define blocks of code.

```python
if is_active:
    print("User is active")
    print("This line is also inside the if block")

print("This line is outside the if block")
```

Most Python projects use **4 spaces** per indentation level.

Incorrect indentation can cause:

- `IndentationError`,
- incorrect control flow,
- code running inside or outside the wrong block.

## Case Sensitivity

Python is case-sensitive:

```python
name = "Alice"
Name = "Bob"

print(name)
print(Name)
```

These are two different names.

## Statements vs Expressions

An **expression** produces a value:

```python
2 + 3
len("Python")
price * quantity
```

A **statement** performs an instruction:

```python
total = price * quantity
return total
import json
```

This distinction becomes useful when learning comprehensions, lambdas, conditionals, and function bodies.

# 5. Variables and Data Types

> **Beginner explanation:** Programs need to remember information. Variables give meaningful names to values, while data types describe what kind of value you are working with and what operations make sense for it.

For example, `"10"` is text while `10` is a number. They look similar to a human but behave differently in Python. Choosing the correct type makes your program easier to understand and prevents many bugs.

**Common use cases:** names → `str`, counters → `int`, money-like measurements → often `Decimal`, yes/no flags → `bool`, missing value → `None`.

Python does not require explicit variable declarations.

```python
name = "Alice"
age = 30
salary = 75000.50
is_active = True
value = None
```

Core types:

| Type | Example |
|---|---|
| `int` | `10` |
| `float` | `10.5` |
| `complex` | `2 + 3j` |
| `str` | `"Python"` |
| `bool` | `True` |
| `NoneType` | `None` |
| `list` | `[1, 2, 3]` |
| `tuple` | `(1, 2, 3)` |
| `set` | `{1, 2, 3}` |
| `dict` | `{"name": "Alice"}` |

Check type:

```python
print(type(age))
```

Check using `isinstance`:

```python
if isinstance(age, int):
    print("age is an integer")
```


## Integers

`int` represents whole numbers with no decimal point.

```python
quantity = 5
year = 2026
balance_change = -250
```

Use integers for counts, indexes, IDs that are truly numeric, and whole-number calculations.

Do **not** convert identifiers to integers just because they contain digits if leading zeroes or formatting matter.

```python
postal_code = "004001"  # text-like identifier
```

## Floats

`float` represents binary floating-point numbers.

```python
temperature = 36.5
ratio = 0.75
```

Floats are excellent for scientific measurements and many approximate calculations, but binary floating point cannot exactly represent every decimal fraction.

```python
print(0.1 + 0.2)
```

For accounting-style exact decimal arithmetic, learn `Decimal` later in this guide.

## Booleans

`bool` has two values:

```python
True
False
```

Use booleans for yes/no state:

```python
is_active = True
is_paid = False
```

Boolean names are often clearest when they read like a question:

```python
is_valid
has_permission
can_retry
should_notify
```

## `None`

`None` represents the absence of a value.

```python
manager_email = None
```

It is different from:

```python
""      # empty text
0       # zero
False   # false
[]      # empty list
```

Check it using identity:

```python
if manager_email is None:
    ...
```

## Complex Numbers

Python also supports complex numbers:

```python
z = 2 + 3j
```

They are useful in scientific, engineering, and mathematical domains but uncommon in everyday business applications.

## Bytes and Binary Data

`str` represents Unicode text. `bytes` represents raw binary data.

```python
text = "Python"
raw = b"Python"
```

Files such as PDFs, images, ZIP archives, and network payloads may need to be handled as bytes.

Convert text to bytes with **encoding**:

```python
raw = "₹100".encode("utf-8")
```

Convert bytes to text with **decoding**:

```python
text = raw.decode("utf-8")
```

If you decode using the wrong encoding, you can get errors or corrupted text.

## Type conversion

> **What this means:** Type conversion creates a value of one type from another. This is common when reading user input, CSV files, environment variables, or API data because those sources often provide text even when you need a number.

```python
age = int("27")
price = float("99.50")
code = str(1001)
enabled = bool(1)
```

Boolean conversion uses **truthiness**, not human-language parsing. Every non-empty string is truthy:

```python
print(bool("false"))
# True
```

Parse configuration text explicitly instead:

```python
enabled = raw_value.strip().lower() in {"1", "true", "yes", "on"}
```

For strict configuration, reject values outside the accepted set instead of silently treating them as false.

## Multiple assignment

> **What this means:** Python can assign several names in one statement by unpacking values from an iterable. This is concise and especially useful for fixed-size results such as coordinates or multiple return values.

```python
x, y, z = 10, 20, 30
```

Swap:

```python
x, y = y, x
```

## Constants

> **What this means:** Python does not technically prevent a constant from changing. Uppercase names are a convention telling other developers, “Treat this value as configuration that should not be reassigned.”

Python does not enforce constants, but uppercase names are conventional:

```python
MAX_RETRIES = 5
API_TIMEOUT = 30
```

---

# 6. Operators

> **Beginner explanation:** Operators are symbols or keywords that tell Python to perform an operation: add numbers, compare values, combine conditions, check membership, or check object identity.

**Think of operators as questions or actions:** `+` asks Python to combine/add, `==` asks whether values are equal, `in` asks whether something exists inside a collection, and `and/or/not` combine logical conditions.

## Arithmetic

> **What this means:** Arithmetic operators perform numerical calculations. Pay attention to `/` versus `//`: normal division returns a fractional result, while floor division rounds down toward negative infinity.

```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

## Comparison

> **What this means:** Comparison operators produce `True` or `False`. They are the building blocks of `if` statements, filtering logic, validation rules, and sorting decisions.

```python
a == b
a != b
a > b
a < b
a >= b
a <= b
```

## Logical

> **What this means:** Logical operators combine boolean conditions. `and` requires both sides to be truthy, `or` needs at least one truthy side, and `not` reverses truthiness.

```python
is_admin and is_active
is_admin or is_manager
not is_deleted
```

`and` and `or` short-circuit: Python may skip the right operand when the result is already known. They also return one of their operands rather than always returning a `bool`:

```python
display_name = supplied_name or "Anonymous"
print(display_name)
# Anonymous  (when supplied_name is empty)
```

## Membership

> **What this means:** `in` and `not in` ask whether a value is present in a collection. Membership checks are common in validation, permissions, duplicate detection, and filtering.

```python
"python" in ["python", "java", "go"]
```

## Identity

> **What this means:** `is` checks whether two names refer to the exact same object. Use it especially with `None`; use `==` when you want to compare values.

```python
x is None
x is not None
```

Prefer:

```python
if value is None:
    ...
```

instead of:

```python
if value == None:
    ...
```

---

# 7. Strings

> **Beginner explanation:** A string is text. Names, invoice numbers, file paths, email addresses, API responses, and messages are commonly represented as strings. Python strings are **immutable**, meaning an operation such as `.upper()` creates a new string rather than changing the original string object.

**Key skills:** indexing, slicing, searching, replacing, splitting, joining, formatting, and normalization.

Strings are immutable.

```python
language = "Python"
```

Indexing:

```python
print(language[0])
print(language[-1])
```

Slicing:

```python
print(language[0:3])
print(language[:3])
print(language[3:])
print(language[::-1])
```

Common methods:

```python
text = "  Python Programming  "

print(text.strip())
print(text.lower())
print(text.upper())
print(text.replace("Python", "Java"))
print(text.startswith("  Python"))
print(text.endswith("  "))
```

Split:

```python
csv = "apple,banana,mango"

items = csv.split(",")
```

Join:

```python
result = ", ".join(items)
```

## f-strings

> **What this means:** f-strings let you embed Python expressions directly inside text. They are the clearest default for building readable messages, logs, and formatted output.

```python
name = "Alice"
amount = 1250.567

print(f"Customer: {name}")
print(f"Amount: ₹{amount:.2f}")
```

Debug syntax:

```python
count = 42

print(f"{count=}")
```

## Scenario: invoice number normalization

```python
invoice_number = " inv-2026-001 "

normalized = invoice_number.strip().upper()

print(normalized)
# INV-2026-001
```

## Raw strings

> **What this means:** A raw string tells Python not to treat backslashes as normal escape sequences. This is useful for regex patterns and Windows-style paths.

Useful for regular expressions and Windows paths:

```python
path = r"C:\Users\Alice\Documents"
```

---

# 8. Lists

> **Beginner explanation:** A list is an ordered, changeable collection. Use it when you need to keep multiple values in sequence and the collection may grow, shrink, or change.

Examples include a list of users, invoice line items, filenames, API results, or task IDs. Lists allow duplicate values and preserve order.

Lists are ordered and mutable.

```python
users = ["Alice", "Bob", "Charlie"]
```

Access:

```python
users[0]
users[-1]
```

Modify:

```python
users[1] = "Robert"
```

Add:

```python
users.append("David")
users.insert(1, "Eve")
users.extend(["Frank", "Grace"])
```

Remove:

```python
users.remove("David")
last = users.pop()
```

Sorting:

```python
numbers = [5, 2, 9, 1]

numbers.sort()
```

Non-mutating:

```python
sorted_numbers = sorted(numbers)
```

## Scenario: sort invoices by amount

```python
invoices = [
    {"number": "INV001", "amount": 500},
    {"number": "INV002", "amount": 1500},
    {"number": "INV003", "amount": 750},
]

sorted_invoices = sorted(
    invoices,
    key=lambda invoice: invoice["amount"],
    reverse=True,
)
```

## Unpacking

> **What this means:** Unpacking assigns elements from an iterable into separate variables. The starred target, such as `*remaining`, collects any extra elements.

```python
first, second, *remaining = [10, 20, 30, 40, 50]
```

---

# 9. Tuples

> **Beginner explanation:** A tuple is an ordered collection similar to a list, but it is intended not to change after creation. Use a tuple when the group of values represents one fixed structure or when immutability communicates intent.

A common example is returning several values from a function or representing coordinates such as `(latitude, longitude)`.

Tuples are ordered and immutable.

```python
coordinates = (19.0760, 72.8777)
```

Useful for:

- fixed records,
- returning multiple values,
- dictionary keys when elements are hashable.

```python
def get_user():
    return "Alice", 30

name, age = get_user()
```

Single-item tuple:

```python
value = (10,)
```

---

# 10. Sets

> **Beginner explanation:** A set is an unordered collection of unique values. It is especially useful for removing duplicates and for very fast membership checks.

If your question is mainly, “Have I already seen this value?” or “Which values are shared between these two groups?”, a set is often the right tool.

Sets contain unique values.

```python
roles = {"admin", "manager", "user"}
```

Add:

```python
roles.add("auditor")
```

Remove:

```python
roles.discard("user")
```

Set operations:

```python
a = {"python", "sql", "docker"}
b = {"python", "aws", "docker"}

print(a | b)  # union
print(a & b)  # intersection
print(a - b)  # difference
print(a ^ b)  # symmetric difference
```

## Scenario: remove duplicate invoice IDs

```python
invoice_ids = ["A1", "A2", "A1", "A3"]

unique_ids = set(invoice_ids)
```

---

# 11. Dictionaries

> **Beginner explanation:** A dictionary stores values by meaningful keys instead of numeric positions. It is one of the most important Python structures because JSON objects, configuration, database-style records, and API payloads often map naturally to dictionaries.

Think of a dictionary like a labeled record: `"invoice_number"` identifies the value `"INV001"`.

Dictionaries store key-value pairs.

```python
user = {
    "name": "Alice",
    "age": 30,
    "active": True,
}
```

Read:

```python
print(user["name"])
```

Safe read:

```python
print(user.get("department"))
```

Default:

```python
department = user.get("department", "Unknown")
```

Modify:

```python
user["age"] = 31
```

Add:

```python
user["city"] = "Mumbai"
```

Delete:

```python
user.pop("city")
```

Loop:

```python
for key, value in user.items():
    print(key, value)
```

## Scenario: JSON-like invoice structure

```python
invoice = {
    "invoice_number": "INV001",
    "vendor": {
        "name": "ABC Pvt Ltd",
        "gstin": "27ABCDE1234F1Z5",
    },
    "amounts": {
        "subtotal": 1000,
        "tax": 180,
        "total": 1180,
    },
    "line_items": [
        {
            "description": "Laptop",
            "quantity": 1,
            "unit_price": 1000,
        }
    ],
}
```

---

# 12. Conditions

> **Beginner explanation:** Conditions let a program make decisions. Python evaluates an expression as true or false, then chooses which block of code to execute.

Use conditions for business rules such as “approve if amount is below the limit”, “reject if a required field is missing”, or “retry if an API request failed”.

```python
age = 25

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Multiple branches:

```python
score = 85

if score >= 90:
    grade = "A+"
elif score >= 75:
    grade = "A"
elif score >= 60:
    grade = "B"
else:
    grade = "C"
```

## Truthy and falsy values

> **What this means:** Python lets many values behave like booleans. Empty collections, zero, `None`, and `False` are falsy; most other values are truthy. This allows concise checks such as `if items:`.

Falsy examples:

```python
False
None
0
0.0
""
[]
{}
set()
```

Instead of:

```python
if len(items) > 0:
    ...
```

prefer:

```python
if items:
    ...
```

## Conditional expression

> **What this means:** A conditional expression is Python's one-line form of a simple `if/else` that chooses one value. Use it only when both branches remain easy to read.

```python
status = "adult" if age >= 18 else "minor"
```

---

# 13. Loops

> **Beginner explanation:** Loops repeat work. A `for` loop is normally used when you want to process every item in a collection, while a `while` loop repeats as long as a condition remains true.

The important skill is not just writing loops—it is knowing when to stop, when to skip an item, and when a built-in operation or comprehension would be clearer.

## for

> **What this means:** A `for` loop asks Python to take each value from an iterable one at a time and run the indented block for that value.

```python
for item in ["A", "B", "C"]:
    print(item)
```

## range

> **What this means:** `range()` represents a sequence of integers without storing every number as a list. It is commonly used when you need to repeat something a known number of times.

```python
for i in range(5):
    print(i)
```

```python
for i in range(1, 11, 2):
    print(i)
```

## enumerate

> **What this means:** `enumerate()` gives you both the item and its position while looping. It is cleaner and safer than manually maintaining an index variable.

```python
for index, name in enumerate(["Alice", "Bob"], start=1):
    print(index, name)
```

## zip

> **What this means:** `zip()` walks through multiple iterables together and returns corresponding values as tuples. It stops when the shortest input is exhausted.

```python
names = ["Alice", "Bob"]
scores = [90, 85]

for name, score in zip(names, scores):
    print(name, score)
```

## while

> **What this means:** A `while` loop repeats as long as its condition remains truthy. Use it for retries, polling, user interaction, or any process where the number of repetitions is not known in advance.

```python
attempt = 1

while attempt <= 3:
    print(f"Attempt {attempt}")
    attempt += 1
```

## break

> **What this means:** `break` exits the nearest loop immediately. Use it when continuing the loop would be unnecessary after a condition is satisfied.

```python
for value in values:
    if value == target:
        break
```

## continue

> **What this means:** `continue` skips the rest of the current loop iteration and starts the next one. It is useful for ignoring invalid or unwanted items early.

```python
for number in range(10):
    if number % 2 == 0:
        continue

    print(number)
```

## loop `else`

> **What this means:** The `else` attached to a loop runs only if the loop finishes normally without hitting `break`. It is uncommon but useful for search-style logic.

```python
numbers = [1, 3, 5]

for number in numbers:
    if number % 2 == 0:
        print("Found even number")
        break
else:
    print("No even numbers found")
```

---

# 14. Comprehensions

> **Beginner explanation:** A comprehension is compact syntax for building a new collection from an existing iterable. It combines “loop over these values”, optionally “filter them”, and “transform each value” into one expression.

Use comprehensions for simple transformations. If the logic becomes difficult to read, use a normal loop.

## List comprehension

> **What this means:** A list comprehension creates a new list by transforming items from an iterable, optionally keeping only items that satisfy a condition.

```python
squares = [x * x for x in range(10)]
```

With condition:

```python
even_numbers = [x for x in range(20) if x % 2 == 0]
```

## Dictionary comprehension

> **What this means:** A dictionary comprehension creates key-value pairs from an iterable. It is useful for indexing records, renaming fields, or transforming configuration.

```python
square_map = {x: x * x for x in range(5)}
```

## Set comprehension

> **What this means:** A set comprehension builds a collection of unique transformed values. Duplicates are removed automatically.

```python
lengths = {len(word) for word in ["cat", "python", "dog"]}
```

## Generator expression

> **What this means:** A generator expression looks similar to a list comprehension but produces values lazily, which can reduce memory use for large inputs.

```python
total = sum(x * x for x in range(1_000_000))
```

## Scenario: normalize OCR fields

```python
raw_fields = {
    " Invoice Number ": " INV001 ",
    " Vendor Name ": " ABC LTD ",
}

normalized = {
    key.strip().lower().replace(" ", "_"): value.strip()
    for key, value in raw_fields.items()
}
```

---

# 15. Functions

> **Beginner explanation:** A function is a reusable unit of behavior. Functions let you give a name to a task, pass data into it through parameters, and optionally return a result.

Good functions reduce duplication and make code easier to test. A beginner should think: **input → work → output**.

```python
def greet(name):
    return f"Hello {name}"
```

Type-hinted:

```python
def greet(name: str) -> str:
    return f"Hello {name}"
```

## Default arguments

> **What this means:** A default argument gives a parameter a fallback value when the caller does not provide one. Defaults should normally be immutable values such as `None`, strings, numbers, or tuples.

```python
def connect(timeout: int = 30):
    ...
```

## Keyword arguments

> **What this means:** Keyword arguments let the caller name the parameter being supplied. This makes calls easier to read and avoids relying only on argument order.

```python
def create_user(name, role, active=True):
    ...

create_user(
    name="Alice",
    role="admin",
    active=False,
)
```

## `*args`

> **What this means:** `*args` collects extra positional arguments into a tuple. Use it when a function genuinely accepts a variable number of positional values, not simply to avoid designing a clear interface.

```python
def total(*numbers):
    return sum(numbers)

print(total(10, 20, 30))
```

## `**kwargs`

> **What this means:** `**kwargs` collects extra keyword arguments into a dictionary. It is useful for forwarding optional configuration, but overuse can hide what parameters a function actually expects.

```python
def print_config(**config):
    for key, value in config.items():
        print(key, value)

print_config(host="localhost", port=3306)
```

## Positional-only and keyword-only parameters

> **What this means:** These parameter markers let an API control how callers supply arguments. They can make public functions clearer and prevent ambiguous calls.

```python
def calculate_total(price, quantity, /, *, tax_rate=0.18):
    subtotal = price * quantity
    return subtotal * (1 + tax_rate)
```

Usage:

```python
calculate_total(100, 2, tax_rate=0.18)
```

## Mutable default argument trap

> **What this means:** Default argument objects are created once when the function is defined, not every time it is called. A mutable default can therefore accidentally retain state between calls.

Bad:

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

Correct:

```python
def add_item(item, items=None):
    if items is None:
        items = []

    items.append(item)
    return items
```

## Functions are first-class objects

> **What this means:** Python functions are values. You can assign them to variables, pass them into other functions, return them, store them in dictionaries, and wrap them with decorators.

```python
def add(a, b):
    return a + b

operation = add

print(operation(2, 3))
```

## Scenario: reusable invoice validator

```python
def validate_invoice(invoice: dict) -> list[str]:
    errors = []

    if not invoice.get("invoice_number"):
        errors.append("Invoice number is required")

    if not invoice.get("vendor_name"):
        errors.append("Vendor name is required")

    if invoice.get("total", 0) <= 0:
        errors.append("Invoice total must be greater than zero")

    return errors
```

---


## Return Values

A function can return a value to its caller:

```python
def calculate_tax(amount, rate):
    return amount * rate
```

If execution reaches the end of a function without an explicit `return`, Python returns `None`.

```python
def log_message(message):
    print(message)


result = log_message("Hello")
print(result)
# None
```

## Early Returns

Returning early can keep validation logic flat and readable.

```python
def calculate_discount(user, amount):
    if user is None:
        return 0

    if not user.is_active:
        return 0

    if amount < 1000:
        return 0

    return amount * 0.10
```

## Recursive Functions

Recursion means a function calls itself to solve a smaller version of the same problem.

```python
def factorial(number: int) -> int:
    """Return number!, rejecting booleans and negative integers."""
    if isinstance(number, bool) or not isinstance(number, int):
        raise TypeError("number must be an integer")

    if number < 0:
        raise ValueError("factorial is undefined for negative integers")

    if number in (0, 1):
        return 1

    return (
        number *
        factorial(number - 1)
    )


print(factorial(5))
# 120
```

Every recursive solution needs a **base case** that stops recursion. The validation matters: the shorter condition `number <= 1` would incorrectly return `1` for negative inputs.

Recursion is natural for some tree and graph problems, but Python has a recursion-depth limit and loops are often simpler for ordinary repetition.

## Closures

A closure is created when an inner function remembers values from its enclosing function.

```python
def make_multiplier(factor):
    def multiply(value):
        return value * factor

    return multiply


double = make_multiplier(2)

print(double(10))
```

Closures are the foundation for many decorator patterns.

## Function Documentation

A professional function should make its contract clear through:

- a meaningful name,
- focused parameters,
- type hints where useful,
- a return type,
- a docstring when behavior is not obvious,
- predictable exceptions.

Example:

```python
def calculate_invoice_total(
    subtotal: float,
    tax: float,
) -> float:
    """Return subtotal plus tax.

    Raises:
        ValueError: If either amount is negative.
    """
    if subtotal < 0 or tax < 0:
        raise ValueError(
            "Amounts cannot be negative"
        )

    return subtotal + tax
```

# 16. Scope and Namespaces

> **Beginner explanation:** Scope answers the question: “Where is this variable name visible?” A variable created inside a function normally belongs to that function and cannot be accessed everywhere in the program.

Understanding scope prevents accidental overwriting of data and explains why the same variable name can safely exist in different functions.

Python follows the **LEGB** rule:

```text
Local
Enclosing
Global
Built-in
```

Example:

```python
message = "global"

def outer():
    message = "enclosing"

    def inner():
        message = "local"
        print(message)

    inner()

outer()
```

## global

```python
count = 0

def increment():
    global count
    count += 1
```

Prefer avoiding global mutable state.

## nonlocal

```python
def counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment
```

---

# 17. Errors and Exception Handling

> **Beginner explanation:** Errors are normal in software. Exception handling lets you respond to expected failures without crashing the entire program, while still allowing unexpected failures to remain visible.

Use exceptions for exceptional situations such as invalid input, missing files, network failures, and unavailable resources. Do not use `try/except` to hide bugs.

Basic:

```python
try:
    number = int("abc")
except ValueError:
    print("Invalid integer")
```

Multiple exceptions:

```python
try:
    result = values[index] / divisor
except IndexError:
    print("Invalid index")
except ZeroDivisionError:
    print("Cannot divide by zero")
```

Else:

```python
try:
    number = int("10")
except ValueError:
    print("Invalid")
else:
    print("Success:", number)
```

Finally:

```python
try:
    file = open("data.txt")
finally:
    file.close()
```

Prefer context managers instead:

```python
with open("data.txt") as file:
    content = file.read()
```

## Raise exceptions

> **What this means:** `raise` deliberately stops normal execution and signals that the current operation cannot continue correctly. Raise specific exceptions with useful messages.

```python
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("Insufficient balance")

    return balance - amount
```

## Custom exception

> **What this means:** A custom exception gives your application a meaningful error type, making it easier for calling code to distinguish business failures from unrelated programming or system errors.

```python
class InvoiceValidationError(Exception):
    pass
```

Usage:

```python
def validate_total(total):
    if total <= 0:
        raise InvoiceValidationError(
            "Invoice total must be greater than zero"
        )
```

## Exception chaining

> **What this means:** Exception chaining preserves the original failure while adding a higher-level explanation. This is valuable when translating low-level errors into domain-specific ones.

```python
try:
    value = int(raw_value)
except ValueError as exc:
    raise ValueError("Invalid invoice amount") from exc
```

---

# 18. Modules and Packages

> **Beginner explanation:** As a program grows, keeping everything in one file becomes difficult. A **module** is a Python file that can be imported, while a **package** is a directory used to organize related modules.

This is how you split a large application into understandable pieces such as `parser`, `validator`, `database`, and `api`.

File:

```text
calculator.py
```

```python
def add(a, b):
    return a + b
```

Import:

```python
import calculator

print(calculator.add(2, 3))
```

Specific import:

```python
from calculator import add
```

Alias:

```python
import numpy as np
```

## `__name__ == "__main__"`

> **What this means:** This check distinguishes “this file is being run directly” from “this file is being imported.” It keeps command-line startup logic from executing during imports or tests.

```python
def main():
    print("Application started")


if __name__ == "__main__":
    main()
```

This prevents execution when imported as a module.

## Package

> **What this means:** A package groups related Python modules under one importable namespace. Packages make larger applications easier to organize and reuse.

```text
invoice_engine/
├── __init__.py
├── parser.py
├── validator.py
└── exporter.py
```

---

# 19. Object-Oriented Programming

> **Beginner explanation:** Object-oriented programming groups related **data** and **behavior** into objects. A class is the blueprint; an object is a concrete instance created from that blueprint.

Use classes when a concept has meaningful state and behavior that belong together. Do not create a class just because Python supports classes—simple functions and dictionaries are often enough.

## Class

> **What this means:** A class describes the attributes and behavior its instances should have. Creating an instance calls the class and normally initializes that object's state through `__init__`.

```python
class User:
    def __init__(self, name: str, role: str):
        self.name = name
        self.role = role

    def describe(self):
        return f"{self.name} is {self.role}"
```

Create object:

```python
user = User("Alice", "Admin")

print(user.describe())
```

## Instance attributes

> **What this means:** Instance attributes belong to one specific object. Different instances can therefore hold different values for the same attribute name.

```python
self.name
```

## Class attributes

> **What this means:** Class attributes live on the class and are shared as defaults across instances unless an instance overrides the name. Be cautious with mutable class attributes.

```python
class Employee:
    company = "ABC Ltd"
```

## Instance method

> **What this means:** An instance method receives the current object as `self`, so it can read or modify instance state.

```python
def calculate_salary(self):
    ...
```

## Class method

> **What this means:** A class method receives the class as `cls` rather than a particular instance. It is commonly used for alternative constructors and behavior that belongs to the class as a whole.

```python
class User:
    total_users = 0

    @classmethod
    def get_total_users(cls):
        return cls.total_users
```

## Static method

> **What this means:** A static method is a function placed inside a class namespace because it is conceptually related to the class, but it does not receive `self` or `cls` automatically.

```python
class NumberUtils:

    @staticmethod
    def is_even(number):
        return number % 2 == 0
```

## Inheritance

> **What this means:** Inheritance lets one class reuse or specialize behavior from another class. Use it when the child truly satisfies an “is-a” relationship with the parent.

```python
class Employee:
    def work(self):
        return "Working"


class Developer(Employee):
    def code(self):
        return "Writing Python"
```

## Method overriding

> **What this means:** Overriding means a subclass provides its own implementation of a method inherited from a parent class. The method should still honor the meaning expected by callers.

```python
class Employee:
    def calculate_bonus(self):
        return 1000


class Manager(Employee):
    def calculate_bonus(self):
        return 5000
```

## `super()`

> **What this means:** `super()` lets a class call behavior from the next class in the method-resolution order. It is commonly used to extend parent initialization instead of duplicating it.

```python
class Employee:
    def __init__(self, name):
        self.name = name


class Developer(Employee):
    def __init__(self, name, language):
        super().__init__(name)
        self.language = language
```

## Encapsulation

> **What this means:** Encapsulation means keeping an object's internal implementation controlled behind a clear public interface. Python relies more on naming conventions and design discipline than strict access modifiers.

Python commonly uses conventions:

```python
self.public
self._protected
self.__private
```

`__private` triggers name mangling; it is not true security.

## Property

> **What this means:** A property lets attribute access run method logic behind the scenes. It is useful when validation or computed behavior is needed while keeping a clean `obj.value` interface.

```python
class Product:
    def __init__(self, price):
        self._price = price

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("Price cannot be negative")

        self._price = value
```

## Abstract base classes

> **What this means:** An abstract base class defines behavior that subclasses are expected to implement. It is useful when several implementations must follow the same explicit contract.

```python
from abc import ABC, abstractmethod


class PaymentProcessor(ABC):

    @abstractmethod
    def pay(self, amount: float) -> None:
        pass
```

Implement:

```python
class CardPaymentProcessor(PaymentProcessor):

    def pay(self, amount: float) -> None:
        print(f"Paid {amount} using card")
```

## Composition over inheritance

> **What this means:** Composition builds objects from smaller collaborating objects instead of inheriting large behavior trees. It often reduces coupling and makes testing easier.

```python
class EmailService:
    def send(self, message):
        ...


class InvoiceService:
    def __init__(self, email_service):
        self.email_service = email_service
```

---


## Magic / Dunder Methods

Python syntax often calls special methods behind the scenes. These methods start and end with double underscores, so they are commonly called **dunder methods**.

Example:

```python
class Money:
    def __init__(self, amount):
        self.amount = amount

    def __repr__(self):
        return f"Money(amount={self.amount!r})"

    def __eq__(self, other):
        if not isinstance(other, Money):
            return NotImplemented

        return self.amount == other.amount
```

Python can now use:

```python
a = Money(100)
b = Money(100)

print(a == b)
print(a)
```

Important dunder methods to recognize:

| Method | Related behavior |
|---|---|
| `__init__` | initialize instance |
| `__repr__` | developer representation |
| `__str__` | friendly string representation |
| `__len__` | `len(obj)` |
| `__iter__` | iteration |
| `__next__` | next iterator value |
| `__getitem__` | indexing such as `obj[key]` |
| `__contains__` | `x in obj` |
| `__eq__` | `==` |
| `__lt__` | `<` |
| `__hash__` | hashing/dictionary or set compatibility |
| `__enter__` | enter context manager |
| `__exit__` | leave context manager |
| `__call__` | call an object like a function |

Do not add dunder methods simply because they exist. Implement them when your object naturally participates in that Python behavior.

## Descriptors

A descriptor is an object that controls attribute access by implementing methods such as:

```python
__get__
__set__
__delete__
```

Properties, methods, and many framework fields are built on descriptor behavior.

Simple example:

```python
class PositiveNumber:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, instance, owner):
        if instance is None:
            return self

        return instance.__dict__[self.name]

    def __set__(self, instance, value):
        if value < 0:
            raise ValueError(
                f"{self.name} cannot be negative"
            )

        instance.__dict__[self.name] = value


class Product:
    price = PositiveNumber()

    def __init__(self, price):
        self.price = price
```

**When should a beginner use descriptors?** Rarely. First learn properties well. Descriptors become useful when the **same attribute behavior** must be reused across many classes or when working with frameworks that rely on them.

## `__slots__`

Normally, many Python objects store instance attributes in a dictionary. `__slots__` can restrict declared attributes and may reduce per-instance memory in some designs.

```python
class Point:
    __slots__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y
```

Do not use `__slots__` as a default optimization. It changes object behavior and inheritance considerations. Measure whether it is useful.

## Metaclasses

A metaclass is the mechanism Python uses to create classes. In the simplest mental model:

```text
class creates instances
metaclass creates classes
```

Normal application code almost never needs a custom metaclass. Frameworks sometimes use metaclasses for registration, validation, or declarative APIs.

Recognize this syntax:

```python
class MyClass(
    metaclass=SomeMetaClass
):
    ...
```

Before writing a metaclass, ask whether a class decorator, `__init_subclass__`, factory, or normal composition would be simpler.

## `__init_subclass__`

This hook runs when a class is subclassed and can provide lightweight registration or validation.

```python
class Plugin:
    registry = {}

    def __init_subclass__(
        cls,
        *,
        name,
        **kwargs,
    ):
        super().__init_subclass__(**kwargs)
        Plugin.registry[name] = cls


class PdfPlugin(
    Plugin,
    name="pdf",
):
    pass
```

This can be simpler than introducing a metaclass for many plugin systems.

# 20. Dataclasses

> **Beginner explanation:** A dataclass is a convenient way to create classes whose main purpose is storing structured data. Python can automatically generate common methods such as the constructor and readable representation.

Use dataclasses for domain records such as `Invoice`, `User`, `Coordinate`, or `LineItem` when you want more structure and type clarity than a plain dictionary.

Dataclasses reduce boilerplate.

```python
from dataclasses import dataclass


@dataclass
class Invoice:
    invoice_number: str
    vendor_name: str
    total: float
```

Usage:

```python
invoice = Invoice(
    invoice_number="INV001",
    vendor_name="ABC Ltd",
    total=1180.0,
)
```

Defaults:

```python
@dataclass
class User:
    name: str
    active: bool = True
```

Default factory:

```python
from dataclasses import dataclass, field


@dataclass
class Order:
    items: list[str] = field(default_factory=list)
```

Frozen:

```python
@dataclass(frozen=True)
class Coordinate:
    lat: float
    lon: float
```

---

# 21. Iterators and Iterables

> **Beginner explanation:** An **iterable** is something you can loop over. An **iterator** is the object that produces one value at a time and remembers where it currently is.

A `for` loop handles the iterator protocol automatically, which is why you can loop over lists, strings, files, generators, and many custom objects using the same syntax.

An **iterable** can return an iterator.

Examples:

```python
list
tuple
str
dict
set
```

Iterator:

```python
numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
```

Custom iterator:

```python
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration

        value = self.current
        self.current -= 1
        return value
```

---

# 22. Generators

> **Beginner explanation:** A generator is an easy way to produce values one at a time instead of creating the entire result in memory. The `yield` keyword pauses the function, remembers its state, and continues from that point when the next value is requested.

Generators are especially valuable for large files, database streams, batches, and pipelines where loading everything at once would waste memory.

Generators produce values lazily.

```python
def count_up_to(limit):
    number = 1

    while number <= limit:
        yield number
        number += 1
```

Usage:

```python
for number in count_up_to(5):
    print(number)
```

## Why generators matter

> **What this means:** The main advantage of a generator is that it can process a stream without storing the entire stream at once. This can drastically reduce peak memory usage.

Instead of loading one million records into memory:

```python
records = load_all_records()
```

process one at a time:

```python
for record in stream_records():
    process(record)
```

## Scenario: read a very large file

```python
def read_lines(path):
    with open(path, encoding="utf-8") as file:
        for line in file:
            yield line.rstrip("\n")
```

---

# 23. Decorators

> **Beginner explanation:** A decorator wraps a function or class to add reusable behavior without putting that behavior directly inside the original function.

Typical uses include logging, authorization, retries, caching, timing, validation, and framework routing. First master normal functions and closures before trying to write complex decorators.

Decorators wrap functions.

```python
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)

    return wrapper
```

Usage:

```python
@log_call
def greet(name):
    return f"Hello {name}"
```

Preserve metadata:

```python
from functools import wraps


def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)

    return wrapper
```

## Scenario: timing decorator

```python
from functools import wraps
from time import perf_counter


def measure_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = perf_counter()
        result = func(*args, **kwargs)
        duration = perf_counter() - start

        print(f"{func.__name__}: {duration:.4f}s")
        return result

    return wrapper
```

## Decorator with arguments

> **What this means:** A decorator with arguments has one extra layer: the outer function receives decorator configuration, the middle function receives the function being decorated, and the wrapper handles each call.

```python
from collections.abc import Callable
from functools import wraps
from time import sleep
from typing import ParamSpec, TypeVar

P = ParamSpec("P")
R = TypeVar("R")


def retry(
    max_attempts: int,
    *,
    exceptions: tuple[type[Exception], ...],
    base_delay: float = 0.25,
):
    """Retry selected transient failures with exponential backoff."""
    if max_attempts < 1:
        raise ValueError("max_attempts must be at least 1")

    def decorator(func: Callable[P, R]) -> Callable[P, R]:
        @wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions:
                    if attempt == max_attempts:
                        raise

                    sleep(base_delay * (2 ** (attempt - 1)))

        return wrapper

    return decorator
```

Example use:

```python
@retry(max_attempts=3, exceptions=(TimeoutError,))
def read_remote_status() -> str:
    ...
```

Parameters: `max_attempts` includes the first call, `exceptions` names only failures believed to be temporary, and `base_delay` controls backoff. The wrapper returns the original function's value or re-raises the final selected exception. Do not blindly retry validation errors, authentication failures, or non-idempotent operations such as charging a card unless the protocol provides an idempotency key.

---

# 24. Context Managers

> **Beginner explanation:** A context manager handles **setup and cleanup** around a block of code. The `with` statement is the common interface for using one.

Opening and closing files, database transactions, locks, and temporary resources are common examples. Context managers are valuable because cleanup still happens when an error occurs.

Used for resource management.

```python
with open("file.txt") as file:
    text = file.read()
```

The file closes automatically.

Custom context manager:

```python
class DatabaseConnection:
    def __enter__(self):
        print("Open connection")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Close connection")
```

`__enter__()` returns the value bound after `as`. `__exit__()` receives the exception type, exception value, and traceback when the block fails. Returning a truthy value suppresses that exception; returning `False` or `None`, as above, lets it propagate after cleanup. Suppress exceptions only when the context manager can handle them completely and intentionally.

Usage:

```python
with DatabaseConnection() as db:
    ...
```

Using `contextlib`:

```python
from contextlib import contextmanager


@contextmanager
def transaction():
    print("BEGIN")

    try:
        yield
        print("COMMIT")
    except Exception:
        print("ROLLBACK")
        raise
```

---

# 25. Lambda and Functional Programming

> **Beginner explanation:** Python treats functions as values, so you can pass a function to another function, return one from a function, or store one in a variable. A `lambda` is simply a small anonymous function expression.

Use lambdas for short callbacks such as sort keys. If the logic deserves a name or contains several steps, use a normal `def`.

Lambda:

```python
square = lambda x: x * x
```

Usually use lambdas for short callback logic:

```python
users.sort(key=lambda user: user["name"])
```

## map

> **What this means:** `map()` applies a function to every item and returns a lazy iterator. List comprehensions are often easier to read when the transformation is simple.

```python
numbers = [1, 2, 3]

squares = list(map(lambda x: x * x, numbers))
```

Often clearer as:

```python
squares = [x * x for x in numbers]
```

## filter

> **What this means:** `filter()` keeps items for which a predicate is truthy. A comprehension is often more readable for straightforward filtering.

```python
active_users = list(
    filter(lambda user: user["active"], users)
)
```

Often clearer as:

```python
active_users = [
    user for user in users
    if user["active"]
]
```

## reduce

> **What this means:** `reduce()` repeatedly combines values into one result. Built-ins such as `sum`, `min`, `max`, and `any` are clearer when they match the operation.

```python
from functools import reduce

total = reduce(
    lambda a, b: a + b,
    [1, 2, 3, 4],
)
```

Usually prefer:

```python
total = sum([1, 2, 3, 4])
```

---

# 26. Type Hints

> **Beginner explanation:** Python does not require you to declare types before running a program, but type hints let you document the types you expect. Editors and static-analysis tools can use those hints to detect mistakes earlier.

Type hints do not normally enforce types at runtime by themselves. Their main value is communication, tooling, refactoring confidence, and clearer APIs.

Type hints improve readability and static analysis.

```python
name: str = "Alice"
age: int = 30
```

Functions:

```python
def calculate_total(
    price: float,
    quantity: int,
) -> float:
    return price * quantity
```

Collections:

```python
invoice_ids: list[str] = ["INV001", "INV002"]

user_roles: dict[str, list[str]] = {
    "alice": ["admin", "manager"],
}
```

Optional:

```python
def find_user(user_id: int) -> dict | None:
    ...
```

Type alias:

```python
InvoiceData = dict[str, str | float]
```

Callable:

```python
from collections.abc import Callable


def execute(
    operation: Callable[[int, int], int],
    a: int,
    b: int,
) -> int:
    return operation(a, b)
```

Protocol:

```python
from typing import Protocol


class Sender(Protocol):
    def send(self, message: str) -> None:
        ...
```

TypedDict:

```python
from typing import TypedDict


class UserData(TypedDict):
    name: str
    age: int
```

Generic:

```python
from typing import TypeVar

T = TypeVar("T")


def first(items: list[T]) -> T:
    if not items:
        raise ValueError("items must not be empty")

    return items[0]
```

The parameter is a list of `T` and the result is one `T`. Without an explicit check, an empty list would raise `IndexError`; choosing `ValueError` makes the public contract clearer. If callers should handle absence normally, return `T | None` instead.

---

# 27. Pattern Matching

> **Beginner explanation:** Structural pattern matching lets you compare a value against several possible shapes. It is more powerful than a simple switch statement because it can unpack structured data such as dictionaries, tuples, and objects while matching.

Use it when you have several well-defined structural cases. Simple two-way conditions are often clearer with `if`.

Structural pattern matching is useful for structured branching.

```python
def handle_status(status):
    match status:
        case "pending":
            return "Waiting"
        case "approved":
            return "Completed"
        case "rejected":
            return "Rejected"
        case _:
            return "Unknown"
```

Matching dictionaries:

```python
def process_event(event):
    match event:
        case {"type": "invoice", "amount": amount}:
            return f"Invoice amount: {amount}"

        case {"type": "payment", "status": "success"}:
            return "Payment completed"

        case _:
            return "Unsupported event"
```

---

# 28. Files and Directories

> **Beginner explanation:** Real programs frequently need to read input from disk and write results back to disk. Python's `pathlib` gives an object-oriented, cross-platform way to work with paths and is usually clearer than manually joining path strings.

Always think about missing files, permissions, encoding, large files, and safe filenames.

## Read text

> **What this means:** Reading text means decoding bytes from a file into Python strings. Always know which character encoding the file uses; UTF-8 is the common default for modern text files.

```python
from pathlib import Path

path = Path("data.txt")

content = path.read_text(encoding="utf-8")
```

## Write text

> **What this means:** Writing text encodes a Python string into file bytes. Decide whether existing content should be replaced, appended, or preserved before opening the file.

```python
path.write_text(
    "Hello Python",
    encoding="utf-8",
)
```

## Append

> **What this means:** Append mode writes new content at the end of a file without deleting what is already there. It is often used for simple logs or incremental exports.

```python
with path.open("a", encoding="utf-8") as file:
    file.write("New line\n")
```

## Path operations

> **What this means:** `pathlib.Path` provides methods for joining paths, checking file types, listing directories, creating folders, and matching file patterns in a platform-friendly way.

```python
from pathlib import Path

folder = Path("invoices")

for file in folder.iterdir():
    print(file.name)
```

Recursive:

```python
for file in folder.rglob("*.pdf"):
    print(file)
```

Create folder:

```python
Path("output").mkdir(
    parents=True,
    exist_ok=True,
)
```

Check:

```python
path.exists()
path.is_file()
path.is_dir()
```

---

# 29. JSON, CSV, XML, YAML

> **Beginner explanation:** These are common data formats used to exchange or store structured information. Python objects are not automatically files—you must **serialize** data to a format when writing and **deserialize** it when reading.

JSON is common for APIs, CSV for tabular data, XML for many enterprise integrations, and YAML for human-readable configuration.

## JSON

> **What this means:** JSON represents objects, arrays, strings, numbers, booleans, and null. In Python, dictionaries and lists map naturally to JSON objects and arrays, but some Python types need custom conversion.

```python
import json

data = {
    "invoice_number": "INV001",
    "amount": 1180,
}

json_text = json.dumps(
    data,
    indent=2,
)
```

Write:

```python
with open("invoice.json", "w", encoding="utf-8") as file:
    json.dump(
        data,
        file,
        indent=2,
    )
```

Read:

```python
with open("invoice.json", encoding="utf-8") as file:
    data = json.load(file)
```

`json.dump()` and `json.dumps()` accept JSON-compatible data: dictionaries with suitable keys, lists/tuples, strings, JSON numbers, booleans, and `None`. Values such as `datetime`, `Decimal`, `Path`, or arbitrary class instances need an explicit conversion or encoder. Also impose input-size and nesting limits before parsing JSON from an untrusted source; syntactically valid data can still consume excessive memory or CPU.

## CSV

> **What this means:** CSV stores rows and columns as text. It is simple and widely supported, but it does not preserve rich types automatically—dates, numbers, and missing values may need explicit parsing.

```python
import csv

with open(
    "users.csv",
    newline="",
    encoding="utf-8",
) as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row)
```

Write:

```python
import csv

rows = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
]

with open(
    "users.csv",
    "w",
    newline="",
    encoding="utf-8",
) as file:
    writer = csv.DictWriter(
        file,
        fieldnames=["name", "age"],
    )

    writer.writeheader()
    writer.writerows(rows)
```

## XML

> **What this means:** XML represents nested structured data using tags and attributes. It is common in enterprise systems, standards-based integrations, and older APIs.

```python
import xml.etree.ElementTree as ET

tree = ET.parse("invoice.xml")
root = tree.getroot()

for child in root:
    print(child.tag, child.text)
```

The standard XML parsers are suitable for trusted or controlled documents, but hostile XML can use resource-exhaustion techniques. For untrusted uploads, enforce size/depth limits and use a hardened XML solution appropriate to your threat model. Never enable external entity or network access merely to make an unknown document parse.

## YAML

> **What this means:** YAML is often used for configuration because it is easier for humans to read than JSON. Because some YAML loaders can construct arbitrary objects, use safe loading for untrusted files.

YAML normally requires an external package such as PyYAML.

```python
import yaml

with open("config.yaml", encoding="utf-8") as file:
    config = yaml.safe_load(file)
```

Prefer `safe_load`, not unsafe object deserialization.

---

# 30. Dates and Times

> **Beginner explanation:** Dates and times become difficult when applications involve time zones, formatting, deadlines, daylight-saving rules, or comparisons. Python's `datetime` tools represent these concepts explicitly.

For production systems, prefer timezone-aware datetimes when an instant can be observed from different locations.

```python
from datetime import datetime, timezone

now = datetime.now(timezone.utc)

print(now.isoformat())
# Example: 2026-08-13T09:30:00+00:00
```

Specific date:

```python
from datetime import date

invoice_date = date(2026, 8, 12)
```

Formatting:

```python
formatted = now.strftime("%d-%m-%Y %H:%M:%S")
```

Parsing:

```python
parsed = datetime.strptime(
    "12-08-2026",
    "%d-%m-%Y",
)
```

Timedelta:

```python
from datetime import timedelta

tomorrow = now + timedelta(days=1)
```

Convert an instant for display in another IANA time zone (Python 3.9+):

```python
from zoneinfo import ZoneInfo

india_time = now.astimezone(ZoneInfo("Asia/Kolkata"))
```

Naive datetimes have `tzinfo=None`; their time zone is implicit and easy to misinterpret. Prefer aware values for instants, commonly store or transmit UTC, and convert at system boundaries for local display. A `date` is still the right type for a calendar-only value such as an invoice date or birthday.

---

# 31. Regular Expressions

> **Beginner explanation:** A regular expression is a pattern language for finding or validating text. Regex is useful when the text follows a recognizable pattern, such as invoice IDs, email-like strings, log entries, or reference numbers.

Regex is powerful but can become unreadable. Use normal string methods when they solve the problem more clearly.

```python
import re
```

Search:

```python
text = "Invoice INV-2026-001"

match = re.search(
    r"INV-\d{4}-\d+",
    text,
)

if match:
    print(match.group())
```

Find all:

```python
numbers = re.findall(
    r"\d+",
    "PO 1001 Invoice 2002",
)
```

Replace:

```python
cleaned = re.sub(
    r"\s+",
    " ",
    text,
)
```

## Scenario: GSTIN-like pattern

```python
gstin_pattern = r"\b\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]\b"
```

Use `re.fullmatch(pattern, value)` when the whole input must conform; `re.search()` only needs a matching substring. Compile patterns reused many times with `re.compile()`. Do not depend only on regex for business validation: validate structure and business rules separately. Be cautious with complex patterns on attacker-controlled long strings because catastrophic backtracking can consume excessive CPU; bound input length and prefer simple, well-tested patterns.

---

# 32. Logging

> **Beginner explanation:** Logging records what an application is doing so developers and operators can understand normal activity and investigate failures later. Unlike temporary `print()` debugging, logs can contain severity levels, timestamps, module names, and structured context.

Good logs explain important events without exposing passwords, tokens, or confidential data.

Avoid using `print()` for production diagnostics.

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format=(
        "%(asctime)s "
        "%(levelname)s "
        "%(name)s "
        "%(message)s"
    ),
)

logger = logging.getLogger(__name__)
```

Usage:

```python
logger.debug("Debug details")
logger.info("Invoice processing started")
logger.warning("Vendor mapping missing")
logger.error("Invoice processing failed")
logger.exception("Unhandled exception")
```

`logger.exception()` should normally be called inside an `except` block because it includes the active traceback. Outside exception handling, use `logger.error()` instead.

Scenario:

```python
try:
    process_invoice()
except Exception:
    logger.exception(
        "Failed to process invoice"
    )
```

---

# 33. Command-Line Applications

> **Beginner explanation:** A command-line interface lets users control a Python program through terminal arguments instead of changing source code. This is ideal for automation, developer utilities, scripts, batch jobs, and server administration.

A good CLI validates inputs, provides `--help`, returns meaningful exit codes, and reports errors clearly.

Read arguments with `argparse`.

```python
import argparse
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(
        description="Invoice processor"
    )

    parser.add_argument(
        "--file",
        required=True,
        type=Path,
        help="PDF invoice to process",
    )

    parser.add_argument(
        "--output",
        type=Path,
        default=Path("output.json"),
    )

    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if not args.file.is_file():
        print(f"Input file does not exist: {args.file}")
        return 2

    print(f"Writing result to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

Run:

```bash
python app.py --file invoice.pdf --output result.json
```

`argparse` handles `--help` and syntax errors. Returning an integer from `main()` gives shell automation a useful exit status: `0` means success and a nonzero value means failure. `type=Path` converts argument text before `main()` receives it, but it does not prove the path exists—validation still belongs in the program.

---

# 34. Environment Variables and Configuration

> **Beginner explanation:** Configuration is information that can change between environments without requiring a source-code change: database URLs, API endpoints, feature switches, timeouts, and secrets are common examples.

Separating configuration from code lets the same application run safely in development, testing, and production.

Never hard-code passwords or API keys.

Bad:

```python
API_KEY = "secret-key"
```

Better:

```python
import os

api_key = os.getenv("API_KEY")
```

Required:

```python
api_key = os.environ["API_KEY"]
```

`os.getenv("NAME")` returns `None` (or a supplied default) when absent; `os.environ["NAME"]` raises `KeyError`, which is useful for truly required configuration. Environment variables are always strings, so parse and validate numbers and booleans explicitly:

```python
raw_timeout = os.environ.get("API_TIMEOUT_SECONDS", "10")

try:
    api_timeout = float(raw_timeout)
except ValueError as exc:
    raise ValueError("API_TIMEOUT_SECONDS must be numeric") from exc

if api_timeout <= 0:
    raise ValueError("API_TIMEOUT_SECONDS must be positive")
```

`.env` example:

```env
APP_ENV=development
DATABASE_URL=mysql://...
API_KEY=...
```

Do not commit `.env`.

`.gitignore`:

```text
.env
.venv/
__pycache__/
*.pyc
```

---

# 35. Virtual Environments and Dependencies

> **Beginner explanation:** Python applications often depend on third-party packages. A virtual environment gives one project its own isolated package installation so changes do not unexpectedly affect other projects.

Dependency management also means recording compatible package versions so another developer or server can reproduce the environment.

Create:

```bash
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\activate
```

Linux/macOS:

```bash
source .venv/bin/activate
```

Install package:

```bash
python -m pip install requests
```

List:

```bash
python -m pip list
```

Freeze:

```bash
python -m pip freeze > requirements.txt
```

Install:

```bash
python -m pip install -r requirements.txt
```

Modern projects frequently use `pyproject.toml` for project metadata and tool configuration.

`pip freeze` records everything installed in the current environment; it does not distinguish direct from transitive dependencies and may include unrelated development tools. Use it deliberately for a clean environment or deployment snapshot. For an installable project, declare direct dependencies and `requires-python` in `pyproject.toml`; use a lock or constraints workflow when exact reproducibility is required.

---

# 36. HTTP Requests and APIs

> **Beginner explanation:** An API lets one program communicate with another through a defined contract. With HTTP APIs, your Python program sends a request containing a method, URL, headers, and sometimes a body; the server returns a status code, headers, and response body.

Professional API code must handle more than the happy path: timeouts, authentication, retries, pagination, rate limits, invalid JSON, and partial failures all matter.

A common external package is `requests`.

```python
import requests

response = requests.get(
    "https://api.example.com/users",
    timeout=10,
)

response.raise_for_status()

data = response.json()
```

POST:

```python
payload = {
    "name": "Alice",
}

response = requests.post(
    "https://api.example.com/users",
    json=payload,
    timeout=10,
)
```

Headers:

```python
headers = {
    "Authorization": f"Bearer {token}",
}

response = requests.get(
    url,
    headers=headers,
    timeout=10,
)
```

## Production concerns

> **What this means:** A network request that works once on your laptop is not yet production-ready. Real systems must define how they behave when servers are slow, unavailable, rate-limited, authenticated incorrectly, or return unexpected data.

Always think about:

- timeouts,
- retries,
- authentication,
- rate limits,
- pagination,
- status codes,
- JSON validation,
- network failures,
- idempotency,
- secret handling.

## Retry example

> **What this means:** Retries help with temporary failures, not permanent errors. Good retry logic uses a limit, delay/backoff, and only retries operations that are safe to repeat.

```python
from time import sleep

import requests


def get_with_retry(url, attempts=3):
    if attempts < 1:
        raise ValueError("attempts must be at least 1")

    for attempt in range(1, attempts + 1):
        try:
            response = requests.get(
                url,
                timeout=10,
            )

            if response.status_code not in {
                408, 429, 500, 502, 503, 504
            }:
                response.raise_for_status()
                return response

            response.raise_for_status()

        except (
            requests.Timeout,
            requests.ConnectionError,
            requests.HTTPError,
        ):
            if attempt == attempts:
                raise

            sleep(2 ** (attempt - 1))
```

This example retries only `GET`, an idempotent method, and a small set of commonly transient statuses. A production client should also cap delays, add random jitter, honor a valid `Retry-After` header where applicable, reuse a `requests.Session`, and validate the returned content type/schema. Do not retry every `4xx` response: authentication and validation failures normally require a change, not another identical request.

---

# 37. Database Programming

> **Beginner explanation:** A database stores information persistently so it remains available after the Python process ends. Python normally sends queries through a database driver or an ORM, then receives rows or affected-record information.

Learn SQL even if you use an ORM. You need to understand queries, indexes, constraints, transactions, and parameterization to build reliable database-backed applications.

Use parameterized SQL.

Do not do:

```python
query = (
    "SELECT * FROM users "
    f"WHERE name = '{name}'"
)
```

Use:

```python
cursor.execute(
    "SELECT * FROM users WHERE name = ?",
    (name,),
)
```

Placeholder syntax varies by database driver.

## SQLite example

> **What this means:** SQLite stores a relational database in a local file and is built into Python. It is excellent for learning SQL, local tools, prototypes, and small applications.

```python
import sqlite3

connection = sqlite3.connect(
    "app.db"
)

cursor = connection.cursor()

cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    )
    """
)

cursor.execute(
    "INSERT INTO users(name) VALUES (?)",
    ("Alice",),
)

connection.commit()
connection.close()
```

Context manager:

```python
from contextlib import closing


with closing(sqlite3.connect("app.db")) as connection:
    with connection:  # commit on success; roll back on exception
        connection.execute(
            "INSERT INTO users(name) VALUES (?)",
            ("Bob",),
        )
```

The `sqlite3.Connection` context manager controls a transaction, but leaving it does **not** close the connection. `closing()` makes the lifetime explicit. In larger applications, a framework or connection pool usually owns connection cleanup.

## Transactions

> **What this means:** A transaction groups database changes into one all-or-nothing unit. It protects data consistency when several related writes must succeed together.

Concept:

```text
BEGIN
↓
Perform related operations
↓
COMMIT if successful
or
ROLLBACK if anything fails
```

Use transactions for operations that must succeed or fail together.

## ORM concepts

> **What this means:** An ORM maps database rows and relationships to Python objects or models. It can improve developer productivity, but generated queries still need to be understood and optimized.

Common ORM capabilities:

- model classes,
- relationships,
- migrations,
- query building,
- transaction management.

Understand SQL even when using an ORM.

---

# 38. Concurrency Overview

> **Beginner explanation:** Concurrency means making progress on more than one task during the same period. Python offers several models because different bottlenecks need different solutions.

If your program mostly **waits** for files, APIs, or sockets, threads or async I/O may help. If it spends its time doing heavy independent CPU calculations, multiple processes may help. Measure before adding concurrency because it also adds complexity.

Three major approaches:

| Technique | Best for |
|---|---|
| Threading | I/O-bound work |
| Multiprocessing | CPU-bound work |
| Asyncio | high-volume I/O concurrency |

Examples:

```text
Downloading 100 URLs → asyncio or threads
Image processing → multiprocessing
OCR CPU work → multiprocessing
Waiting for APIs → asyncio
```

Python's exact runtime behavior depends on interpreter implementation, workload, and libraries, so benchmark realistic workloads.

Most CPython installations use a Global Interpreter Lock (GIL), so only one thread executes Python bytecode at a time even though threads overlap I/O and some native-library work. CPython 3.13+ also offers an optional **free-threaded** build that can disable the GIL; it is not something ordinary code should assume. It may have single-thread overhead, and imported extension modules can re-enable the GIL when they are not marked as free-threading compatible. Correct synchronization is required in either build—do not treat the traditional GIL as a data-consistency lock.

---


## I/O-bound vs CPU-bound

This distinction helps choose the correct concurrency tool.

### I/O-bound

The program spends much of its time **waiting**:

```text
HTTP requests
database queries
disk operations
network sockets
remote services
```

Threads or async I/O may improve throughput because other work can happen during waiting.

### CPU-bound

The program spends most of its time **computing**:

```text
image transforms
some OCR workloads
compression
large numerical calculations
certain parsing tasks
```

Multiple processes or optimized native/vectorized libraries may help.

## Concurrency vs Parallelism

They are related but not identical.

**Concurrency** means multiple tasks make progress during overlapping periods.

**Parallelism** means multiple tasks literally execute at the same instant, normally on different CPU cores or execution units.

An async program can be highly concurrent even when one Python thread is executing Python code at a time.

## Race Condition

A race condition occurs when the result depends on unpredictable timing between concurrent operations.

Conceptual example:

```text
Thread A reads balance = 100
Thread B reads balance = 100
Thread A writes 90
Thread B writes 80
```

One update may be lost.

Strategies include:

- avoiding shared mutable state,
- locks,
- queues/message passing,
- transactions,
- atomic operations where supported.

## Deadlock

A deadlock happens when tasks wait forever for resources held by each other.

Example:

```text
Task A holds Lock 1
Task A waits for Lock 2

Task B holds Lock 2
Task B waits for Lock 1
```

Reduce risk by keeping locking simple and acquiring multiple locks in a consistent order.

# 39. Threading

> **Beginner explanation:** Threads are multiple execution flows inside one process that share memory. They are often useful for I/O-heavy tasks because one thread can make progress while another waits.

Shared memory is convenient but dangerous: two threads can read or update the same state at the wrong time, producing race conditions. Prefer isolated work and minimal shared mutable state.

```python
from concurrent.futures import ThreadPoolExecutor
from urllib.request import urlopen


def download(url: str) -> bytes:
    with urlopen(url, timeout=10) as response:
        return response.read()


urls = [
    "https://example.com/",
    "https://www.python.org/",
]

with ThreadPoolExecutor(
    max_workers=2,
) as executor:
    results = list(
        executor.map(download, urls)
    )

print([len(body) for body in results])
# Example: [1256, 51480] (page sizes change over time)
```

`executor.map()` preserves input order and re-raises a worker exception while results are consumed. Bound the worker count, set timeouts on I/O, and decide whether one failed item should stop the batch or be recorded as a per-item failure.

Protect shared mutable state:

```python
from threading import Lock

lock = Lock()
```

Prefer reducing shared state instead of relying heavily on locks.

---

# 40. Multiprocessing

> **Beginner explanation:** Multiprocessing runs work in separate operating-system processes. Each process has its own Python interpreter and memory space, which can make it useful for CPU-heavy tasks that can be split into independent pieces.

The trade-off is higher startup/memory cost and the need to serialize data between processes.

Useful for CPU-intensive work.

```python
from concurrent.futures import ProcessPoolExecutor


def calculate(number):
    return number * number


if __name__ == "__main__":
    with ProcessPoolExecutor() as executor:
        results = list(
            executor.map(
                calculate,
                range(100),
            )
        )
```

On Windows, the main guard is especially important for multiprocessing entry points.

---

# 41. Asyncio

> **Beginner explanation:** `asyncio` is Python's built-in framework for cooperative asynchronous I/O. An async task voluntarily gives control back to the event loop when it reaches an `await`, allowing another task to run while the first one is waiting.

Async code is valuable when one process must manage many waiting operations, such as API calls or network connections. It does not automatically make CPU-heavy code faster.

Async programming is useful when tasks spend time waiting.

```python
import asyncio


async def fetch_data():
    await asyncio.sleep(1)
    return "done"


async def main():
    result = await fetch_data()
    print(result)


asyncio.run(main())
```

Concurrent tasks:

```python
async def main():
    async with asyncio.TaskGroup() as group:
        tasks = [
            group.create_task(fetch_data())
            for _ in range(3)
        ]

    results = [task.result() for task in tasks]
    print(results)


asyncio.run(main())
# ['done', 'done', 'done']
```

`TaskGroup` (Python 3.11+) provides structured concurrency: when one child fails, the remaining children are cancelled and the group waits for them before raising an exception group. `asyncio.gather()` is still useful when its result-order and failure semantics are what you need. Put time limits around external operations with `asyncio.timeout()` (3.11+) or `asyncio.wait_for()`, and allow cancellation to propagate unless you can finish cleanup safely.

## Important concepts

Understand:

```text
event loop
coroutine
await
Task
Future
cancellation
timeout
semaphore
queue
```

## Semaphore

Useful for limiting API concurrency:

```python
import asyncio

semaphore = asyncio.Semaphore(5)


async def limited_call():
    async with semaphore:
        return await call_api()
```

---

# 42. Testing

> **Beginner explanation:** A test is executable proof that a piece of behavior works as expected. Instead of manually checking the same feature after every change, you describe the expected behavior once and let the computer repeatedly verify it.

Start by testing business rules and edge cases. Good tests make refactoring safer because they tell you when behavior changes unexpectedly.

## Why test?

Tests protect against:

- regressions,
- incorrect business rules,
- refactoring mistakes,
- invalid edge cases.

## Simple pytest example

`pytest` is a third-party test runner. Install it in the active virtual environment, save tests in a file such as `tests/test_totals.py`, and run it from the project root:

```bash
python -m pip install pytest
python -m pytest -q
```

Expected output for the two passing tests below is similar to `2 passed`.

```python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5
```

## Arrange-Act-Assert

```python
def calculate_total(invoice):
    return invoice["subtotal"] + invoice["tax"]


def test_invoice_total():
    # Arrange
    invoice = {
        "subtotal": 100,
        "tax": 18,
    }

    # Act
    total = calculate_total(invoice)

    # Assert
    assert total == 118
```

## Exception test

```python
import pytest


def process_amount(amount):
    if amount < 0:
        raise ValueError("amount must not be negative")

    return amount


def test_negative_amount():
    with pytest.raises(ValueError):
        process_amount(-1)
```

## Parameterized test

```python
import pytest


@pytest.mark.parametrize(
    ("input_value", "expected"),
    [
        (2, 4),
        (3, 9),
        (4, 16),
    ],
)
def test_square(
    input_value,
    expected,
):
    assert square(input_value) == expected
```

## Mocking

Use mocks for boundaries such as:

- API calls,
- email,
- database,
- clock,
- filesystem,
- cloud services.

Do not mock every internal function.

## Testing pyramid

```text
Many unit tests
       ↓
Fewer integration tests
       ↓
Few end-to-end tests
```

---


## Test Fixtures

A fixture provides reusable test setup.

Conceptually:

```text
create test data
      ↓
run test
      ↓
clean up
```

With pytest:

```python
import pytest


@pytest.fixture
def sample_invoice():
    return {
        "subtotal": 100,
        "tax": 18,
    }


def test_total(sample_invoice):
    assert (
        sample_invoice["subtotal"]
        + sample_invoice["tax"]
        == 118
    )
```

Fixtures are useful for reusable objects, temporary files, database setup, authenticated clients, and other common test prerequisites.

## Unit vs Integration vs End-to-End

### Unit test

Tests one small unit of logic in isolation.

Example:

```text
calculate_tax()
```

### Integration test

Checks whether multiple components work together.

Example:

```text
InvoiceRepository
        +
SQLite database
```

### End-to-end test

Exercises a full user-visible workflow.

Example:

```text
HTTP request
    ↓
validation
    ↓
service
    ↓
database
    ↓
HTTP response
```

Use many fast focused tests and fewer expensive full-system tests.

## What Makes a Good Test?

A useful test should be:

- deterministic,
- independent where practical,
- easy to understand,
- focused on observable behavior,
- fast enough to run frequently,
- explicit about expected outcomes.

Avoid testing private implementation details when the public behavior is what matters.

## Coverage

Coverage tools report which lines or branches executed during tests.

High coverage does **not** automatically mean good testing.

For example, a test can execute a line without checking that the result is correct.

Focus first on:

```text
business-critical rules
edge cases
error behavior
historically buggy code
integration boundaries
```

# 43. Debugging

> **Beginner explanation:** Debugging is the process of finding the true cause of incorrect behavior. The goal is not to randomly change code until the symptom disappears; it is to create evidence and eliminate incorrect assumptions.

A traceback is a map of how Python reached an exception. Learn to read it—it is one of your most valuable debugging tools.

## Basic inspection

```python
print(variable)
```

Better:

```python
print(repr(variable))
```

## Built-in debugger

```python
breakpoint()
```

Then use debugger commands.

Useful commands include `n` (next line), `s` (step into), `c` (continue), `p expression` (print), `pp expression` (pretty-print), `l` (list source), and `q` (quit). Debuggers execute expressions in the paused program, so avoid side effects while inspecting production-like data.

## Inspect exception traceback

Read from the bottom upward:

```text
Exception type
↓
Message
↓
Your application frame
↓
Previous calls
```

## Useful debugging approach

1. reproduce consistently,
2. reduce the failing case,
3. inspect actual inputs,
4. check assumptions,
5. isolate the layer,
6. write a failing test,
7. fix,
8. rerun test suite.

---

# 44. Clean Code and Pythonic Design

> **Beginner explanation:** Clean code communicates intent clearly to another developer, including your future self. Pythonic code uses the language's common conventions and built-in strengths without becoming unnecessarily clever.

Clarity, meaningful names, small focused units, explicit error handling, and simple control flow usually matter more than reducing the number of lines.

## Prefer expressive names

Bad:

```python
def p(a):
    ...
```

Better:

```python
def process_invoice(invoice):
    ...
```

## Small focused functions

Bad:

```python
def process_everything():
    # read file
    # OCR
    # normalize
    # validate
    # database
    # email
    # export
    ...
```

Better:

```python
def read_document(path):
    ...

def extract_text(document):
    ...

def normalize_fields(fields):
    ...

def validate_invoice(invoice):
    ...

def persist_invoice(invoice):
    ...
```

## Early return

Instead of:

```python
def process(user):
    if user:
        if user.active:
            if user.email:
                send_email(user)
```

Prefer:

```python
def process(user):
    if user is None:
        return

    if not user.active:
        return

    if not user.email:
        return

    send_email(user)
```

## EAFP

Python commonly follows:

> Easier to Ask Forgiveness than Permission.

Instead of:

```python
if key in data:
    value = data[key]
```

Often:

```python
try:
    value = data[key]
except KeyError:
    ...
```

Catch only the exception you expect from the smallest useful block. A broad `except Exception` around several operations can hide an unrelated programming bug. Use whichever style is clearer for the situation; pre-checks are still appropriate when they avoid expensive work or when the operation is not safe to attempt speculatively.

## Avoid duplicate logic

Extract shared behavior.

## Separate business logic from infrastructure

Example:

```text
invoice/
├── domain/
│   ├── models.py
│   └── rules.py
│
├── services/
│   └── invoice_service.py
│
├── infrastructure/
│   ├── database.py
│   └── ocr.py
│
└── api/
    └── routes.py
```

---


## PEP 8

PEP 8 is Python's widely used style guide. You do not need to memorize every rule, but follow the main ideas:

- use consistent indentation,
- choose readable names,
- keep imports organized,
- avoid excessively long or complicated expressions,
- use whitespace consistently,
- prefer conventional Python naming.

Typical naming:

```python
invoice_total = 100       # variable
calculate_total()         # function

class InvoiceService:     # class
    pass

MAX_RETRIES = 3           # constant convention
```

## Formatting

A formatter automatically applies a consistent code style.

This removes arguments such as:

```text
Should this expression wrap here?
How many blank lines?
Where should this comma go?
```

The exact formatter is less important than using one consistently across the project.

## Linting

A linter looks for suspicious or undesirable code patterns, such as:

- unused imports,
- undefined names,
- unreachable code,
- style problems,
- potentially unsafe patterns.

A linter complements tests; it does not replace them.

## Static Type Checking

A type checker analyzes your type hints without executing the application.

Example mistake:

```python
def add(a: int, b: int) -> int:
    return a + b


result = add("10", 20)
```

Python may only discover the problem when that code path runs. A static type checker may flag it earlier.

## Documentation

Professional code needs more than inline comments.

Useful documentation can include:

```text
README
installation steps
configuration
API contract
architecture decisions
examples
troubleshooting
deployment instructions
```

Write documentation for the decisions and workflows a future developer cannot easily infer from the code.

# 45. SOLID Principles in Python

> **Beginner explanation:** SOLID is a group of design principles that help larger object-oriented systems remain easier to change. They are guidelines, not rules that must be applied to every small script.

Use them when code starts gaining multiple implementations, dependencies, and reasons to change. Avoid creating unnecessary abstraction only to “follow SOLID”.

## S — Single Responsibility

One class/function should have one primary reason to change.

Bad:

```python
class Invoice:
    def calculate_total(self):
        ...

    def save_to_database(self):
        ...

    def send_email(self):
        ...
```

Better:

```text
Invoice
InvoiceRepository
EmailService
```

## O — Open/Closed

Extend behavior without repeatedly modifying central logic.

```python
class Extractor:
    def extract(self, file):
        raise NotImplementedError
```

Different implementations:

```text
PDFExtractor
ImageExtractor
ExcelExtractor
```

## L — Liskov Substitution

Subclasses should honor the expectations of their base abstraction.

If code accepts a `DocumentStore`, replacing one valid implementation with another should not break documented behavior. A subtype should not strengthen preconditions unexpectedly, return an incompatible result, or silently remove guarantees promised by the abstraction.

```python
from typing import Protocol


class DocumentStore(Protocol):
    def save(self, name: str, content: bytes) -> None:
        ...


def archive(store: DocumentStore, content: bytes) -> None:
    store.save("invoice.pdf", content)
```

Both a local store and a cloud store can satisfy this contract. Tests should verify the shared observable behavior.

## I — Interface Segregation

Prefer small focused interfaces.

A read-only report generator should not depend on one large interface that also requires `delete()`, `send_email()`, and `approve()`. Give clients the smallest behavior they need—perhaps a `ReportReader` protocol containing only `get_report()`. This reduces fake methods and makes alternate implementations easier.

## D — Dependency Inversion

High-level logic depends on abstractions, not concrete infrastructure.

```python
class InvoiceService:
    def __init__(self, store: DocumentStore) -> None:
        self.store = store

    def archive(self, content: bytes) -> None:
        self.store.save("invoice.pdf", content)
```

The caller injects the concrete store. The service can be tested with an in-memory implementation and does not need to know a cloud SDK. In Python, an abstraction can be a protocol or focused callable; it does not always require an inheritance hierarchy.

---

# 46. Design Patterns

> **Beginner explanation:** A design pattern is a reusable idea for organizing code around a recurring design problem. A pattern is not code you copy exactly; it is a vocabulary and structure that can be adapted to your situation.

Learn the problem first, then the pattern. Using a pattern without a real problem usually makes code more complicated.

## Strategy

Use when behavior can vary.

```python
class TaxStrategy:
    def calculate(self, amount):
        raise NotImplementedError
```

Implement:

```python
class IndiaTaxStrategy(TaxStrategy):
    def calculate(self, amount):
        return amount * 0.18
```

## Factory

```python
def create_extractor(file_type):
    match file_type:
        case "pdf":
            return PdfExtractor()
        case "image":
            return ImageExtractor()
        case _:
            raise ValueError("Unsupported type")
```

## Repository

```python
class InvoiceRepository:
    def save(self, invoice):
        ...
```

Keeps persistence logic away from domain logic.

## Adapter

Convert an external interface to your application's expected interface.

Example:

```text
Google OCR
Azure OCR
PaddleOCR
Tesseract
        ↓
OCRAdapter interface
```

## Observer / event approach

Useful when one event triggers independent actions:

```text
InvoiceApproved
├── SendEmail
├── WriteAuditLog
├── CreateERPJob
└── UpdateAnalytics
```

---

# 47. Data Structures and Algorithms

> **Beginner explanation:** Data structures determine how information is organized, and algorithms determine how it is processed. Choosing the right structure can improve both clarity and performance far more than micro-optimizing syntax.

You should understand not only how to use a list, set, dictionary, queue, heap, or tree, but what operations each one makes cheap or expensive.

A Python developer should understand more than syntax.

## Big-O basics

> **What this means:** Big-O notation describes how resource usage grows as input size grows. It is a comparison tool, not a precise timing measurement.

| Operation | Typical complexity |
|---|---|
| List indexing | O(1) |
| List search | O(n) |
| Dict lookup | O(1) average |
| Set membership | O(1) average |
| Sorting | O(n log n) |

## Stack

> **What this means:** A stack follows **last in, first out (LIFO)**. The most recently added item is the first one removed, like a stack of plates.

```python
stack = []

stack.append(1)
stack.append(2)

item = stack.pop()
```

## Queue

> **What this means:** A queue normally follows **first in, first out (FIFO)**. The oldest waiting job is processed first.

```python
from collections import deque

queue = deque()

queue.append("job1")
queue.append("job2")

job = queue.popleft()
```

## Counter

> **What this means:** `Counter` is a dictionary-like tool specialized for counting hashable values. It is ideal for frequencies such as words, statuses, or error codes.

```python
from collections import Counter

counts = Counter(
    ["A", "B", "A", "C", "A"]
)

print(counts)
```

## Defaultdict

> **What this means:** `defaultdict` automatically creates a default value for a missing key. It is useful when grouping or accumulating values without repeatedly checking whether a key already exists.

```python
from collections import defaultdict

groups = defaultdict(list)

for user in users:
    groups[user["department"]].append(user)
```

## Heap

> **What this means:** A heap is a structure optimized for repeatedly retrieving the smallest or largest-priority item. It is useful for priority queues and top-N problems.

```python
import heapq

numbers = [5, 1, 9, 3]

heapq.heapify(numbers)

smallest = heapq.heappop(numbers)
```

## Binary search

> **What this means:** Binary search repeatedly halves a **sorted** search space, giving logarithmic lookup behavior. It does not work correctly on arbitrary unsorted data.

```python
from bisect import bisect_left

numbers = [1, 3, 5, 7, 9]

index = bisect_left(numbers, 5)
```

---

# 48. Memory Management

> **Beginner explanation:** Every object your program creates consumes memory. Python manages most allocation and cleanup automatically, but developers still need to understand references, object lifetimes, copies, and large collections.

Memory problems often come from keeping data alive longer than necessary or loading an entire dataset when streaming would be sufficient.

Important concepts:

- objects live in memory,
- variables hold references,
- reference counting is commonly involved,
- cyclic garbage collection handles certain reference cycles,
- immutable objects may be reused internally,
- large collections consume memory quickly.

## Check object size

> **What this means:** `sys.getsizeof()` reports the shallow memory size of an object itself. It does not automatically include all nested objects referenced by a container.

```python
import sys

print(sys.getsizeof([1, 2, 3]))
```

## Avoid unnecessary copies

Instead of:

```python
data = list(range(10_000_000))
```

possibly:

```python
data = range(10_000_000)
```

Use generators when streaming is enough.

---

# 49. Performance Optimization

> **Beginner explanation:** Performance optimization means improving the part of a program that is actually limiting speed, memory, latency, or throughput. Guessing is unreliable, so profile and measure before changing code.

The biggest improvements usually come from better algorithms, fewer database/network operations, batching, caching, and appropriate concurrency—not from clever one-line syntax.

Rule:

> Measure first. Optimize the actual bottleneck.

Use:

```python
from time import perf_counter
```

```python
start = perf_counter()

run_operation()

print(
    perf_counter() - start
)
```

## Profiling

> **What this means:** Profiling measures where a program spends time. Use it to identify expensive functions before deciding what to optimize.

```bash
python -m cProfile app.py
```

## Common optimization ideas

- use appropriate data structures,
- replace repeated list searches with sets/dicts,
- avoid unnecessary nested loops,
- batch database operations,
- reduce network calls,
- cache expensive deterministic results,
- stream large data,
- use vectorized libraries for numerical workloads,
- use multiprocessing for CPU-heavy independent work,
- use async for high-volume waiting workloads.

## Caching

> **What this means:** Caching stores a previously computed result so repeated requests can avoid doing the expensive work again. It is only safe when you understand when cached data becomes stale.

```python
from functools import lru_cache


@lru_cache(maxsize=128)
def expensive_lookup(key):
    ...
```

---

# 50. Security

> **Beginner explanation:** Security means designing your application so untrusted input, leaked credentials, unsafe dependencies, and dangerous operations cannot easily harm users or systems.

Treat data from users, files, APIs, environment variables, and databases as potentially invalid. Validate at boundaries, minimize privileges, protect secrets, and avoid dangerous deserialization or command construction.

Security is part of professional Python development.

## Never hard-code secrets

> **What this means:** Secrets belong outside source code because repositories, logs, backups, screenshots, and build systems can expose committed credentials long after the line is deleted.

Use environment variables or a secret manager.

## Avoid command injection

Bad:

```python
import os

os.system(
    f"convert {user_filename}"
)
```

Prefer:

```python
import subprocess

subprocess.run(
    ["convert", user_filename],
    check=True,
)
```

Do not use `shell=True` unless you understand and control the risk.

## SQL injection

> **What this means:** SQL injection happens when untrusted text is interpreted as part of the SQL command. Parameterized queries keep data separate from executable SQL syntax.

Always parameterize SQL.

## Path traversal

Never blindly concatenate user-provided filenames:

```python
output = base_dir / user_filename
```

Validate that resolved paths remain inside the allowed directory.

One containment check for a single-file upload is:

```python
from pathlib import Path


def safe_upload_path(base_dir: Path, supplied_name: str) -> Path:
    # Accept a filename, not a client-controlled directory tree.
    if Path(supplied_name).name != supplied_name:
        raise ValueError("a plain filename is required")

    base = base_dir.resolve()
    candidate = (base / supplied_name).resolve()

    if not candidate.is_relative_to(base):  # Python 3.9+
        raise ValueError("path escapes the upload directory")

    return candidate
```

This illustrates lexical containment but does not by itself eliminate every race or symbolic-link attack. For hostile multi-user filesystems, use operating-system facilities and an upload-storage design that avoids trusting client filenames at all; generate server-side names and restrict permissions.

## Unsafe pickle

> **What this means:** `pickle` is a Python object-serialization format that can execute code while loading crafted data. Only unpickle data from a source you fully trust.

Do not unpickle untrusted input.

```python
pickle.loads(untrusted_bytes)
```

can execute arbitrary code through crafted payloads.

## YAML

Prefer:

```python
yaml.safe_load(...)
```

## Validate uploads

Check:

- size,
- type,
- extension,
- content,
- filename,
- storage location.

Do not trust file extensions alone.

---

# 51. Packaging and Publishing

> **Beginner explanation:** Packaging turns reusable Python code into an installable project with metadata and dependencies. Even if you never publish publicly, learning packaging makes internal libraries and applications easier to install consistently.

`pyproject.toml` is the central configuration file used by modern Python packaging and many development tools.

Modern project configuration commonly lives in `pyproject.toml`.

Example:

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "invoice-engine"
version = "0.1.0"
description = "Invoice processing engine"
requires-python = ">=3.11"

dependencies = [
    "requests>=2.32,<3",
]
```

`[build-system]` tells build frontends which backend creates distributions. `[project]` contains standardized package metadata. Choose one backend and follow its package-discovery rules; a `pyproject.toml` alone does not guarantee that the intended source files will be included.

Editable install:

```bash
python -m pip install -e .
```

Build:

```bash
python -m pip install build
python -m build
```

The command normally creates a wheel (`.whl`) and source distribution (`.tar.gz`) in `dist/`. Test-install the wheel in a fresh virtual environment before publishing. Publishing to a package index also requires a unique name, credentials, and a deliberate release process; never embed index tokens in the file.

Key concepts:

```text
package
distribution
version
dependency
wheel
source distribution
semantic versioning
```

Semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
2.4.1
```

Semantic Versioning is a useful convention, not something Python packaging enforces automatically. Whatever version policy you choose, document what counts as a breaking change and avoid overwriting an already published release.

---

# 52. Useful Standard-Library Modules

> **Beginner explanation:** Python comes with a large standard library, often described as “batteries included.” Before adding a third-party dependency, check whether the standard library already solves the problem well enough.

Knowing the major modules makes you faster because you recognize built-in solutions for files, dates, logging, processes, iteration, hashing, databases, concurrency, and more.

Must know:

| Module | Purpose |
|---|---|
| `pathlib` | file paths |
| `os` | OS integration |
| `sys` | interpreter/system |
| `json` | JSON |
| `csv` | CSV |
| `datetime` | date/time |
| `re` | regex |
| `logging` | logging |
| `argparse` | CLI |
| `subprocess` | run processes |
| `shutil` | file operations |
| `tempfile` | temporary files |
| `collections` | advanced collections |
| `itertools` | iterator utilities |
| `functools` | functional utilities |
| `statistics` | statistics |
| `decimal` | decimal arithmetic |
| `fractions` | rational numbers |
| `sqlite3` | SQLite |
| `hashlib` | hashing |
| `secrets` | secure random tokens |
| `uuid` | UUID |
| `concurrent.futures` | concurrency |
| `asyncio` | async I/O |
| `dataclasses` | data classes |
| `typing` | type hints |
| `enum` | enumerations |
| `copy` | shallow/deep copy |

## `Decimal` for money

> **What this means:** `Decimal` represents decimal numbers in a way that is better suited to exact base-10 arithmetic. It is commonly used when accounting rules require predictable decimal calculations.

Floating-point values can have representation surprises.

For financial arithmetic:

```python
from decimal import Decimal

price = Decimal("100.10")
tax = Decimal("18.02")

total = price + tax
```

Avoid constructing money values from binary floats:

```python
Decimal(0.1)
```

Prefer strings:

```python
Decimal("0.1")
```

## Enum

> **What this means:** An enum defines a closed set of named values. It avoids scattering magic strings such as `'approved'` and `'rejected'` across a codebase.

```python
from enum import Enum


class InvoiceStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
```

---

# 53. Automation with Python

> **Beginner explanation:** Automation means turning a repetitive manual procedure into a repeatable program. Python is especially strong here because it has readable syntax and libraries for files, APIs, spreadsheets, databases, browsers, operating systems, and cloud services.

Start by documenting the manual process step by step. Then automate one deterministic step at a time and add logging/error handling.

Python is excellent for automation.

Examples:

- rename files,
- move invoices,
- generate reports,
- call APIs,
- automate Excel,
- send emails,
- transform data,
- schedule jobs,
- parse logs,
- monitor folders,
- generate PDFs,
- scrape permitted web data.

## Scenario: rename files

```python
from pathlib import Path

folder = Path("documents")

for index, path in enumerate(
    folder.glob("*.pdf"),
    start=1,
):
    new_name = (
        folder /
        f"invoice_{index:04}.pdf"
    )

    path.rename(new_name)
```

## Scenario: move processed invoices

```python
from pathlib import Path
import shutil

source = Path("incoming")
processed = Path("processed")

processed.mkdir(exist_ok=True)

for file in source.glob("*.pdf"):
    process(file)

    shutil.move(
        str(file),
        processed / file.name,
    )
```

## Scenario: monitor directory conceptually

```text
incoming/
    ↓
validate file
    ↓
extract text
    ↓
normalize data
    ↓
save JSON
    ↓
move to processed/
or failed/
```

---

# 54. Web Development

> **Beginner explanation:** Web development with Python usually means building server-side applications or APIs. The framework handles HTTP plumbing, but you still need to understand routing, validation, authentication, business logic, databases, and responses.

Framework knowledge changes over time; HTTP and software-design fundamentals transfer between frameworks.

Major Python web approaches include:

- lightweight APIs,
- full-stack web frameworks,
- async APIs,
- background workers.

Important concepts independent of framework:

```text
HTTP
routing
request/response
JSON
validation
authentication
authorization
cookies
sessions
CORS
CSRF
database
ORM
migrations
middleware
caching
rate limiting
logging
background jobs
deployment
```

## Basic API architecture

```text
HTTP Request
    ↓
Route
    ↓
Validation
    ↓
Service
    ↓
Repository
    ↓
Database
    ↓
Response
```

Keep routes thin.

Bad:

```text
route:
    validation
    business rules
    SQL
    email
    formatting
    logging
```

Better:

```text
route
  ↓
service
  ↓
repositories/adapters
```

---

# 55. Data Analysis

> **Beginner explanation:** Data analysis turns raw records into useful information. The core work is usually not plotting—it is understanding the data, cleaning bad values, choosing correct types, combining sources, transforming columns, grouping records, and validating conclusions.

Always inspect data quality before trusting the result.

Common workflow:

```text
Load
↓
Inspect
↓
Clean
↓
Transform
↓
Analyze
↓
Visualize
↓
Export
```

Popular ecosystem tools include libraries for:

- arrays,
- DataFrames,
- scientific computing,
- plotting,
- notebooks.

## Pandas-style concepts

```python
import pandas as pd

df = pd.read_csv("sales.csv")
```

Inspect:

```python
df.head()
df.info()
df.describe()
```

Filter:

```python
high_value = df[
    df["amount"] > 10000
]
```

Group:

```python
summary = (
    df.groupby("vendor")["amount"]
    .sum()
    .sort_values(ascending=False)
)
```

Missing values:

```python
df["amount"] = (
    df["amount"]
    .fillna(0)
)
```

---

# 56. Machine Learning and AI

> **Beginner explanation:** Machine learning uses data to fit models that make predictions or recognize patterns. Modern AI applications may also use pre-trained models or LLMs rather than training a model from scratch.

The important engineering mindset is that model output is probabilistic. Validate important outputs, measure quality using representative data, and keep deterministic business rules outside the model where possible.

Before jumping to libraries, understand:

```text
features
labels
training
validation
test set
overfitting
underfitting
classification
regression
clustering
precision
recall
F1 score
confusion matrix
embeddings
inference
```

Typical pipeline:

```text
Raw Data
  ↓
Cleaning
  ↓
Feature Engineering
  ↓
Train/Validation/Test
  ↓
Model Training
  ↓
Evaluation
  ↓
Deployment
  ↓
Monitoring
```

## AI application architecture

```text
User Input
   ↓
Preprocessing
   ↓
Retriever / Tools
   ↓
LLM / Model
   ↓
Structured validation
   ↓
Business rules
   ↓
Final output
```

Never assume an LLM response is guaranteed correct.

Validate structured outputs.

---

# 57. OCR and Document Processing

> **Beginner explanation:** OCR converts visible text in images or scanned pages into machine-readable text. Reliable document extraction requires more than OCR: you often need preprocessing, layout information, field matching, table reconstruction, validation, and confidence/evidence tracking.

For invoices, the same label can appear in different positions and vendors use different wording, so robust extraction combines several signals rather than relying on one regex or one LLM response.

A robust document extraction pipeline might look like:

```text
Input
  ├── PDF
  ├── JPG
  ├── PNG
  └── TIFF
       ↓
File validation
       ↓
PDF text extraction
or page rendering
       ↓
Image preprocessing
       ↓
OCR
       ↓
Layout reconstruction
       ↓
Candidate extraction
       ↓
Field normalization
       ↓
Business validation
       ↓
Confidence scoring
       ↓
Structured JSON
```

## Example output

```json
{
  "invoice_number": "INV-2026-001",
  "invoice_date": "2026-08-12",
  "vendor_name": "ABC Pvt Ltd",
  "currency": "INR",
  "subtotal": 1000.00,
  "tax": 180.00,
  "total": 1180.00,
  "line_items": [
    {
      "description": "Service Charge",
      "quantity": 1,
      "unit_price": 1000.00,
      "amount": 1000.00
    }
  ]
}
```

## Important OCR principles

Do not rely on OCR text alone.

Keep:

- text,
- coordinates,
- page number,
- confidence,
- nearby labels,
- table structure.

Example evidence model:

```python
from dataclasses import dataclass


@dataclass
class OCRToken:
    text: str
    confidence: float
    x1: int
    y1: int
    x2: int
    y2: int
    page: int
```

## Field extraction scenario

For:

```text
Invoice No: INV001
Invoice Date: 12/08/2026
```

Use:

1. label aliases,
2. spatial relationship,
3. regex,
4. document context,
5. validation.

Do not map fields using only nearest text.

## Confidence score example

```text
OCR confidence        25%
Label match           25%
Spatial proximity     20%
Format validation     15%
Vendor template match 15%
```

---

# 58. Python for DevOps

> **Beginner explanation:** DevOps scripting uses Python to automate operational work such as deployments, health checks, log analysis, cloud API calls, configuration validation, and reporting.

Operational scripts should be treated like real software: make them idempotent where possible, log actions, validate inputs, handle partial failures, and avoid embedding secrets.

Useful automation scenarios:

- parse logs,
- call cloud APIs,
- health checks,
- automate deployment steps,
- validate configuration,
- rotate backups,
- process monitoring,
- generate infrastructure reports,
- interact with Docker/Kubernetes APIs.

## Run external commands

> **What this means:** `subprocess` starts another program from Python and gives you controlled access to its arguments, output, errors, and exit status.

```python
import subprocess

result = subprocess.run(
    ["git", "status"],
    capture_output=True,
    text=True,
    check=True,
)

print(result.stdout)
```

## Health check

> **What this means:** A health check answers whether a dependent service is reachable and behaving as expected. Production checks should use realistic timeouts and distinguish temporary network failure from application failure.

```python
import requests


def check_service(url):
    try:
        response = requests.get(
            url,
            timeout=5,
        )

        return response.status_code == 200

    except requests.RequestException:
        return False
```

## Log parser

> **What this means:** A log parser transforms plain log lines into useful events or statistics. Reliable parsers should handle malformed lines and changing formats gracefully.

```python
from pathlib import Path


def find_errors(path):
    for line in Path(path).read_text(
        encoding="utf-8"
    ).splitlines():

        if "ERROR" in line:
            yield line
```

---

# 59. Python Interview Concepts

> **Beginner explanation:** Interview questions often test whether you understand **why Python behaves the way it does**, not whether you remember obscure syntax. Be able to explain concepts with a tiny example and a practical use case.

Focus on references and mutability, collections, function arguments, scope, iterators/generators, exceptions, OOP, context managers, typing, concurrency, and complexity.

Know how to explain these clearly.

## List vs tuple

> **What this means:** The key choice is usually mutability and intent: use a list for a collection expected to change and a tuple for a fixed record-like sequence.

```text
List:
- mutable
- []
- good for changing collections

Tuple:
- immutable
- ()
- good for fixed structures
```

## `==` vs `is`

> **What this means:** `==` asks whether two objects have equal values; `is` asks whether they are literally the same object in memory.

```python
a == b
```

compares values.

```python
a is b
```

checks object identity.

## Shallow vs deep copy

> **What this means:** A shallow copy duplicates the outer container but keeps references to nested objects. A deep copy recursively copies nested content as well.

```python
copy.copy(...)
copy.deepcopy(...)
```

## Mutable vs immutable

> **What this means:** Mutable objects can change in place; immutable objects cannot. This affects copying, hashing, function defaults, and whether shared references are safe.

Common immutable:

```text
int
float
bool
str
tuple
frozenset
```

Common mutable:

```text
list
dict
set
most custom objects
```

## Generator vs list

> **What this means:** A list computes and stores all elements immediately. A generator computes values on demand, trading random access and reuse for lower memory usage.

Generator:

- lazy,
- memory-efficient,
- one-pass by nature.

List:

- stored in memory,
- random access,
- reusable.

## Decorator

> **What this means:** A decorator is a higher-order callable used to apply reusable behavior around another callable without editing its internal body.

A callable that wraps or modifies another callable.

## Context manager

> **What this means:** A context manager defines what should happen when entering and leaving a `with` block, making cleanup deterministic.

Controls setup/cleanup around a block.

## `__init__`

> **What this means:** `__init__` initializes an instance after Python has created it. Its job is usually to establish valid instance state.

Initializes an already-created instance.

## `__new__`

> **What this means:** `__new__` is responsible for creating and returning the instance before `__init__` runs. Most application code rarely needs to override it.

Creates the instance.

## Dunder methods

> **What this means:** Double-underscore methods are hooks that integrate your objects with Python syntax and built-in operations—for example `len(obj)`, iteration, comparison, or `with`.

Examples:

```python
__init__
__str__
__repr__
__len__
__iter__
__next__
__enter__
__exit__
__eq__
__hash__
```

## `__str__` vs `__repr__`

> **What this means:** `__str__` is intended for friendly display, while `__repr__` is intended to give developers an unambiguous or useful debugging representation.

`__str__`:

- user-friendly.

`__repr__`:

- developer/debug representation.

## Closure

> **What this means:** A closure is an inner function that remembers values from its enclosing scope even after the outer function has finished executing.

```python
def multiplier(factor):
    def multiply(value):
        return value * factor

    return multiply
```

## MRO

> **What this means:** The Method Resolution Order is the sequence Python follows when searching classes for an attribute or method, especially in multiple inheritance.

Method Resolution Order determines lookup order in inheritance hierarchies.

```python
ClassName.mro()
```

## Duck typing

> **What this means:** Duck typing focuses on supported behavior rather than exact class identity. If an object provides the operations a function needs, it can often be accepted.

> If an object supports the required behavior, its exact class may not matter.

```python
def save(writer):
    writer.write("data")
```

Anything with suitable `write()` behavior may work.

---

# 60. Common Beginner Mistakes

> **Beginner explanation:** Many Python bugs come from a small group of recurring misunderstandings. Studying these mistakes is useful because it teaches the language model behind the syntax.

When you encounter one of these bugs yourself, add a small test or note so you remember the reason, not just the fix.

## 1. Mutable default arguments

Bad:

```python
def foo(items=[]):
    ...
```

## 2. Using `is` for value comparison

Bad:

```python
if status is "active":
    ...
```

Use:

```python
if status == "active":
    ...
```

## 3. Catching everything silently

Bad:

```python
try:
    ...
except:
    pass
```

## 4. Giant functions

Split responsibilities.

## 5. Hard-coded file paths

Use configuration and `pathlib`.

## 6. Hard-coded secrets

Use environment variables or secret storage.

## 7. Ignoring encoding

Prefer:

```python
open(
    path,
    encoding="utf-8",
)
```

## 8. Modifying a collection while iterating unexpectedly

Risky:

```python
for item in items:
    if should_remove(item):
        items.remove(item)
```

Prefer:

```python
items = [
    item
    for item in items
    if not should_remove(item)
]
```

## 9. Using float for exact financial totals

Prefer `Decimal` when exact decimal arithmetic is required.

## 10. Overusing classes

A function is often enough.

## 11. Overusing one-liners

Readable code beats clever code.

## 12. Ignoring tests

Every important business rule should be testable.

---

# 61. Practice Scenarios

> **Beginner explanation:** Exercises become valuable when you solve them before looking at a solution. The purpose is to practice breaking a requirement into data, rules, steps, and edge cases.

For each scenario, first write examples of valid input, invalid input, expected output, and edge cases. Then design the function.

Solve these without immediately copying solutions.

## Beginner

### Scenario 1 — Even or odd

Input:

```text
17
```

Output:

```text
Odd
```

### Scenario 2 — Calculate invoice total

Input:

```text
subtotal = 1000
tax_rate = 18%
```

Output:

```text
1180
```

### Scenario 3 — Password validation

Rules:

- minimum 8 characters,
- contains digit,
- contains uppercase,
- contains lowercase.

### Scenario 4 — Duplicate remover

Input:

```python
["INV1", "INV2", "INV1", "INV3"]
```

Output:

```python
["INV1", "INV2", "INV3"]
```

Preserve original order.

### Scenario 5 — Word frequency

Input:

```text
python is good and python is easy
```

Output:

```python
{
    "python": 2,
    "is": 2,
    "good": 1,
    "and": 1,
    "easy": 1
}
```

---

## Intermediate

### Scenario 6 — CSV report

Read:

```text
employee,salary,department
```

Calculate:

- total salary,
- average salary,
- highest salary,
- department totals.

### Scenario 7 — File organizer

Organize:

```text
downloads/
```

into:

```text
images/
documents/
videos/
archives/
others/
```

### Scenario 8 — Invoice validator

Validate:

```text
invoice_number
invoice_date
vendor
subtotal
tax
total
```

Rules:

```text
subtotal + tax = total
```

with configurable tolerance.

### Scenario 9 — API pagination

Call pages until no `next` value exists.

### Scenario 10 — Log analyzer

Read application logs and output:

```text
error count
warning count
top error messages
errors per hour
```

---

## Advanced

### Scenario 11 — Concurrent downloader

Download 100 independent files safely with:

- timeout,
- retry,
- concurrency limit,
- logging.

### Scenario 12 — Plugin architecture

Support:

```text
PDF extractor
Image extractor
CSV extractor
```

without modifying the processing service each time.

### Scenario 13 — OCR pipeline

Input:

```text
PDF / image
```

Output:

```text
structured invoice JSON
```

Include:

- validation,
- confidence,
- field evidence,
- line items,
- error reporting.

### Scenario 14 — Async API aggregator

Call 20 services concurrently and combine results.

Requirements:

- timeout,
- retry,
- partial failures,
- concurrency limit.

### Scenario 15 — Task queue

Build a mini worker system:

```text
job producer
    ↓
queue
    ↓
worker
    ↓
result
```

---

# 62. Project Roadmap

> **Beginner explanation:** Projects connect isolated concepts into real engineering skill. A project forces you to make decisions about structure, error handling, persistence, testing, and maintainability that small syntax exercises do not reveal.

Do not build all projects at once. Finish a small version, then add features and refactor it using newly learned concepts.

Build projects in increasing difficulty.

## Project 1 — CLI Calculator

Learn:

- functions,
- conditions,
- input,
- exceptions.

## Project 2 — Todo CLI

Learn:

- lists,
- dictionaries,
- JSON,
- files.

Features:

```text
add
remove
list
complete
search
```

## Project 3 — Expense Tracker

Learn:

- classes,
- CSV/JSON,
- dates,
- reports.

## Project 4 — File Organizer

Learn:

- pathlib,
- shutil,
- exceptions,
- CLI.

## Project 5 — REST API Client

Learn:

- HTTP,
- requests,
- auth,
- pagination,
- retry.

## Project 6 — CRUD Web API

Learn:

- routing,
- schema validation,
- database,
- testing,
- architecture.

## Project 7 — Background Job Processor

Learn:

- queues,
- threads/processes,
- retries,
- logging.

## Project 8 — Invoice OCR Engine

Learn:

- file ingestion,
- PDF/image handling,
- OCR,
- regex,
- layout analysis,
- validation,
- JSON,
- tests,
- performance.

## Project 9 — Data Dashboard Backend

Learn:

- pandas,
- database queries,
- caching,
- APIs.

## Project 10 — Production-Ready Service

Add:

```text
Docker
CI
tests
linting
typing
structured logging
metrics
health endpoint
config
secrets
database migrations
API docs
```

---

# 63. 90-Day Learning Plan

> **Beginner explanation:** This plan provides an order, not a deadline. Progress is better measured by what you can build and explain than by the number of days completed.

If one stage takes longer, continue practicing it. Strong foundations make advanced topics much easier.

## Days 1–10 — Foundations

Study:

```text
syntax
variables
types
operators
strings
lists
tuples
sets
dicts
conditions
loops
```

Build:

```text
calculator
number guessing game
text analyzer
```

## Days 11–20 — Functions and Files

Study:

```text
functions
scope
exceptions
modules
files
JSON
CSV
pathlib
```

Build:

```text
todo CLI
file organizer
```

## Days 21–30 — OOP

Study:

```text
classes
inheritance
composition
properties
dataclasses
ABC
```

Build:

```text
expense tracker
inventory application
```

## Days 31–40 — Advanced Python

Study:

```text
iterators
generators
decorators
context managers
typing
regex
logging
```

Build:

```text
log analyzer
ETL utility
```

## Days 41–50 — Testing and Quality

Study:

```text
pytest
mocking
linting
formatting
type checking
clean code
SOLID
```

Refactor earlier projects.

## Days 51–60 — API and Database

Study:

```text
HTTP
REST
requests
SQL
transactions
ORM concepts
```

Build:

```text
CRUD API
API integration service
```

## Days 61–70 — Concurrency

Study:

```text
threads
processes
asyncio
queues
timeouts
retry
```

Build:

```text
concurrent downloader
async API aggregator
```

## Days 71–80 — Specialization

Choose one:

```text
backend
automation
data
AI
OCR
DevOps
```

## Days 81–90 — Professional Project

Build one production-style application containing:

```text
clean architecture
tests
typing
logging
configuration
database
API
Docker
README
CI
```

---

# 64. Python Cheat Sheet

> **Beginner explanation:** A cheat sheet is for **recall after learning**, not for learning a concept for the first time. Use this section when you already know what you want to do but need to remember the syntax.

If a line here feels mysterious, return to the full section that explains the concept.

## Variable

```python
name = "Alice"
```

## String

```python
name.upper()
name.lower()
name.strip()
name.split(",")
```

## List

```python
items.append(x)
items.pop()
items.remove(x)
items.sort()
```

## Dict

```python
data["key"]
data.get("key")
data.items()
data.keys()
data.values()
```

## Set

```python
items.add(x)
items.discard(x)
```

## Condition

```python
if condition:
    ...
elif other:
    ...
else:
    ...
```

## Loop

```python
for item in items:
    ...
```

```python
while condition:
    ...
```

## Function

```python
def add(a, b):
    return a + b
```

## Exception

```python
try:
    ...
except ValueError:
    ...
finally:
    ...
```

## File

```python
from pathlib import Path

text = Path("file.txt").read_text(
    encoding="utf-8"
)
```

## JSON

```python
import json

json.dumps(data)
json.loads(text)
```

## Dataclass

```python
from dataclasses import dataclass


@dataclass
class User:
    name: str
```

## Generator

```python
def values():
    yield 1
    yield 2
```

## Decorator

```python
@decorator
def function():
    ...
```

## Context manager

```python
with resource:
    ...
```

## Async

```python
async def main():
    await operation()
```

## Type hint

```python
def add(a: int, b: int) -> int:
    return a + b
```

---

# 65. Final Mastery Checklist

> **Beginner explanation:** This checklist helps you identify gaps. Mark an item complete only when you can explain it, write a small example without copying, and recognize a real use case.

Mastery is not “I have seen this topic.” Mastery is “I can use it correctly and debug it when it fails.”

Use this section to track your progress.

## Core Python

- [ ] Python syntax
- [ ] Variables
- [ ] Primitive types
- [ ] Strings
- [ ] Lists
- [ ] Tuples
- [ ] Sets
- [ ] Dictionaries
- [ ] Operators
- [ ] Conditions
- [ ] Loops
- [ ] Comprehensions
- [ ] Functions
- [ ] Scope
- [ ] Exceptions
- [ ] Modules
- [ ] Packages

## Intermediate Python

- [ ] File handling
- [ ] JSON
- [ ] CSV
- [ ] XML basics
- [ ] YAML basics
- [ ] pathlib
- [ ] regex
- [ ] datetime
- [ ] logging
- [ ] CLI applications
- [ ] environment variables
- [ ] virtual environments

## OOP

- [ ] Classes
- [ ] Objects
- [ ] Instance methods
- [ ] Class methods
- [ ] Static methods
- [ ] Inheritance
- [ ] Composition
- [ ] Encapsulation conventions
- [ ] Properties
- [ ] Abstract base classes
- [ ] Dataclasses

## Advanced Python

- [ ] Iterables
- [ ] Iterators
- [ ] Generators
- [ ] Decorators
- [ ] Context managers
- [ ] Closures
- [ ] Lambda
- [ ] Functional tools
- [ ] Type hints
- [ ] Generics
- [ ] Protocols
- [ ] Pattern matching
- [ ] Dunder methods

## Professional Development

- [ ] Clean code
- [ ] PEP 8 mindset
- [ ] SOLID
- [ ] Design patterns
- [ ] Unit testing
- [ ] Integration testing
- [ ] Mocking
- [ ] Debugging
- [ ] Profiling
- [ ] Security
- [ ] Dependency management
- [ ] Packaging

## Backend

- [ ] HTTP fundamentals
- [ ] REST APIs
- [ ] authentication
- [ ] authorization
- [ ] database programming
- [ ] SQL
- [ ] transactions
- [ ] ORM concepts
- [ ] caching
- [ ] background jobs

## Concurrency

- [ ] Threading
- [ ] Multiprocessing
- [ ] Asyncio
- [ ] Race conditions
- [ ] Locks
- [ ] Queues
- [ ] Semaphores
- [ ] Timeouts
- [ ] Retries

## Algorithms

- [ ] Big-O
- [ ] arrays/lists
- [ ] stacks
- [ ] queues
- [ ] hash maps
- [ ] sets
- [ ] heaps
- [ ] sorting
- [ ] binary search
- [ ] recursion
- [ ] trees basics
- [ ] graphs basics

## Specialized Areas

- [ ] Automation
- [ ] Web development
- [ ] Data processing
- [ ] AI/ML basics
- [ ] OCR/document processing
- [ ] DevOps scripting

---

# Mastery Rules

Remember these principles:

1. **Readability beats cleverness.**
2. **Functions should have focused responsibilities.**
3. **Use the right data structure.**
4. **Handle errors intentionally.**
5. **Never trust external input.**
6. **Validate data at boundaries.**
7. **Use tests for important business logic.**
8. **Measure before optimizing.**
9. **Prefer composition when inheritance adds unnecessary coupling.**
10. **Keep secrets out of source code.**
11. **Use `Decimal` when exact decimal financial calculations matter.**
12. **Use generators for large streams of data.**
13. **Understand SQL even if you use an ORM.**
14. **Use concurrency only when it solves a real bottleneck.**
15. **Write code for the next developer who must understand it.**
16. **Build projects instead of only watching tutorials.**
17. **Read tracebacks carefully.**
18. **Automate repetitive work.**
19. **Refactor after correctness, not before understanding the problem.**
20. **Master the standard library before adding unnecessary dependencies.**

---

# Recommended Daily Practice

A productive 60–90 minute session:

```text
15 min → review old concepts
20 min → learn one new concept
25 min → code examples without copying
20 min → solve one scenario
10 min → refactor and write notes
```

For deeper weekend practice:

```text
1 hour → learn
2 hours → project
30 min → tests
30 min → refactor
30 min → document what you learned
```

---

# What "Mastering Python" Actually Means

You do **not** need to memorize every module or method.

A strong Python developer can:

```text
understand a requirement
        ↓
model the data
        ↓
choose suitable abstractions
        ↓
write readable code
        ↓
handle edge cases
        ↓
test behavior
        ↓
debug failures
        ↓
measure performance
        ↓
secure inputs and secrets
        ↓
deploy and maintain the program
```

Syntax is only the beginning.

True mastery comes from repeatedly building real systems.

---

# Suggested Capstone Project

Build a **Document & Invoice Processing Platform** with:

```text
Upload API
    ↓
File validation
    ↓
PDF/image preprocessing
    ↓
OCR
    ↓
Field extraction
    ↓
Line-item extraction
    ↓
Validation
    ↓
Confidence score
    ↓
JSON output
    ↓
Database
    ↓
Audit log
    ↓
Review API/UI
```

Add:

- multiple document formats,
- vendor-specific mapping,
- default field aliases,
- retries,
- structured logs,
- tests,
- asynchronous processing,
- configurable OCR provider,
- configurable LLM provider,
- evidence coordinates,
- human review,
- metrics,
- Docker,
- CI,
- security controls.

This single project can force you to use almost every important Python skill in this handbook.

---

# Final Advice

Do not move to the next topic simply because you have read the current one.

Move forward when you can:

1. explain the concept without notes,
2. write a small example from memory,
3. identify where it is useful,
4. identify where it should not be used,
5. debug a broken example,
6. apply it inside a project.

That is how Python knowledge turns into engineering skill.

---

# Appendix: Official References

Use primary documentation to verify behavior that changes across Python or library versions:

- [Python documentation](https://docs.python.org/3/) — tutorial, language reference, standard library, how-to guides, and “What's New” notes.
- [Python downloads](https://www.python.org/downloads/) — current stable releases and installers.
- [Python Packaging User Guide](https://packaging.python.org/) — `pyproject.toml`, builds, dependency specifications, and publishing.
- [Python Enhancement Proposals](https://peps.python.org/) — design and status of language, packaging, typing, and runtime changes.
- [PyPI](https://pypi.org/) — published package metadata; verify that a package's own documentation supports your Python version.
- [Python security response](https://www.python.org/dev/security/) — reporting and response information for Python vulnerabilities.

Third-party APIs such as `requests`, PyYAML, pytest, pandas, web frameworks, and OCR libraries have independent release cycles. Pin or constrain them according to your deployment policy, read their versioned documentation, and test upgrades in an isolated environment.

---

**End of Python Mastery Guide**
