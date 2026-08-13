# Clean Coding in Python — Master Handbook

> **A beginner-to-advanced, practical reference for writing readable, maintainable, testable, secure, and production-ready Python.**

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Clean Code Means](#2-what-clean-code-means)
3. [Pythonic Thinking and the Zen of Python](#3-pythonic-thinking-and-the-zen-of-python)
4. [Project Setup for Clean Python Development](#4-project-setup-for-clean-python-development)
5. [Naming: Variables, Functions, Classes, Modules, and Constants](#5-naming-variables-functions-classes-modules-and-constants)
6. [Variables and State](#6-variables-and-state)
7. [Functions: The Core Unit of Clean Code](#7-functions-the-core-unit-of-clean-code)
8. [Function Arguments and Return Values](#8-function-arguments-and-return-values)
9. [Control Flow and Guard Clauses](#9-control-flow-and-guard-clauses)
10. [Collections and Data Structures](#10-collections-and-data-structures)
11. [Comprehensions: Powerful but Easy to Abuse](#11-comprehensions-powerful-but-easy-to-abuse)
12. [Strings and Text Processing](#12-strings-and-text-processing)
13. [Exceptions and Error Handling](#13-exceptions-and-error-handling)
14. [Comments, Docstrings, and Documentation](#14-comments-docstrings-and-documentation)
15. [Type Hints and Static Analysis](#15-type-hints-and-static-analysis)
16. [Classes and Object-Oriented Clean Code](#16-classes-and-object-oriented-clean-code)
17. [SOLID Principles in Python](#17-solid-principles-in-python)
18. [Dataclasses and Value Objects](#18-dataclasses-and-value-objects)
19. [Composition vs Inheritance](#19-composition-vs-inheritance)
20. [Modules, Packages, and Boundaries](#20-modules-packages-and-boundaries)
21. [Imports and Dependency Management](#21-imports-and-dependency-management)
22. [File and Resource Handling](#22-file-and-resource-handling)
23. [Iterators and Generators](#23-iterators-and-generators)
24. [Decorators](#24-decorators)
25. [Context Managers](#25-context-managers)
26. [Functional Techniques](#26-functional-techniques)
27. [Logging](#27-logging)
28. [Configuration and Environment Variables](#28-configuration-and-environment-variables)
29. [Validation and Parsing](#29-validation-and-parsing)
30. [Dates, Times, and Time Zones](#30-dates-times-and-time-zones)
31. [Working with Files, JSON, CSV, and Serialization](#31-working-with-files-json-csv-and-serialization)
32. [Database Code](#32-database-code)
33. [API and Service-Layer Code](#33-api-and-service-layer-code)
34. [AsyncIO and Concurrency](#34-asyncio-and-concurrency)
35. [Performance Without Sacrificing Clarity](#35-performance-without-sacrificing-clarity)
36. [Security-Oriented Clean Coding](#36-security-oriented-clean-coding)
37. [Testing Clean Python Code](#37-testing-clean-python-code)
38. [Mocking and Test Doubles](#38-mocking-and-test-doubles)
39. [Refactoring Techniques](#39-refactoring-techniques)
40. [Common Code Smells and Anti-Patterns](#40-common-code-smells-and-anti-patterns)
41. [Design Patterns in Python](#41-design-patterns-in-python)
42. [Clean Architecture for Python Applications](#42-clean-architecture-for-python-applications)
43. [Clean CLI and Automation Scripts](#43-clean-cli-and-automation-scripts)
44. [Code Review Standards](#44-code-review-standards)
45. [Legacy Code Cleanup Strategy](#45-legacy-code-cleanup-strategy)
46. [Real-World Refactoring Case Studies](#46-real-world-refactoring-case-studies)
47. [Production Readiness Checklist](#47-production-readiness-checklist)
48. [Clean Code Checklist](#48-clean-code-checklist)
49. [Suggested Learning Roadmap](#49-suggested-learning-roadmap)
50. [Practice Exercises](#50-practice-exercises)
51. [Glossary](#51-glossary)
52. [Final Principles to Remember](#52-final-principles-to-remember)

---

# 1. How to Use This Handbook

This handbook is designed for:

- complete Python beginners;
- developers who already know Python syntax but want better coding habits;
- backend, automation, scripting, data, API, and DevOps developers;
- developers preparing for code reviews or technical interviews;
- teams that want a practical Python coding standard.

You do **not** need to read it only once from top to bottom.

A good approach is:

1. Learn the foundational sections first.
2. Practice the examples.
3. Return to architecture, testing, typing, performance, and design-pattern sections as your projects grow.
4. Use the checklists during development and code review.
5. Refactor older code using the code-smell and case-study sections.

Throughout the handbook, examples commonly use the following labels:

- **Bad** — code that may work but creates readability, maintenance, testing, or reliability problems.
- **Better** — improved code with clearer intent or structure.
- **Good** — a strong default for production code.
- **Trade-off** — a reminder that clean code is contextual, not dogmatic.

---

# 2. What Clean Code Means

Clean code is code that another developer can understand, modify, test, and operate with minimal unnecessary mental effort.

Clean code is **not** simply:

- short code;
- clever one-liners;
- heavily abstracted code;
- code with many comments;
- object-oriented code;
- code that follows every style rule mechanically.

A useful definition is:

> Clean code makes the programmer's intent obvious while minimizing accidental complexity.

## 2.1 Core qualities of clean code

Clean Python code is usually:

### Readable

You should understand what code does without mentally decoding it.

### Predictable

Names, APIs, error behavior, and side effects should behave consistently.

### Focused

A function, class, or module should have a clear responsibility.

### Testable

Important behavior should be easy to verify in isolation.

### Maintainable

Changing one feature should not unexpectedly break unrelated features.

### Explicit where necessary

Python encourages concise syntax, but important business behavior should not be hidden behind clever tricks.

### Safe

The code handles invalid input, failure states, secrets, resources, and boundaries responsibly.

## 2.2 Code is read more often than it is written

Consider:

```python
x = [i for i in d if i["s"] == 1]
```

It is short, but the reader must discover what `x`, `i`, `d`, and `"s"` represent.

Compare:

```python
active_users = [
    user
    for user in users
    if user["status"] == "active"
]
```

The second version is longer but requires less interpretation.

## 2.3 Optimize for clarity first

A useful order of priorities is:

1. Correctness
2. Clarity
3. Maintainability
4. Testability
5. Reliability
6. Performance
7. Brevity

The order may change in performance-critical systems, but clarity should be the default.

---

# 3. Pythonic Thinking and the Zen of Python

Python has cultural conventions that influence what clean code looks like.

You can display the Zen of Python with:

```bash
python -m this
```

Important ideas include:

- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Complex is better than complicated.
- Readability counts.
- Errors should never pass silently.
- There should preferably be one obvious way to do it.

## 3.1 Pythonic does not mean "shortest"

Bad:

```python
result = [x * 2 for x in values if x > 0 if x % 2 == 0]
```

If the business rule is important, clarity may be better:

```python
positive_even_values = [
    value
    for value in values
    if value > 0 and value % 2 == 0
]

doubled_values = [
    value * 2
    for value in positive_even_values
]
```

Or:

```python
def is_positive_even(value: int) -> bool:
    return value > 0 and value % 2 == 0


doubled_values = [
    value * 2
    for value in values
    if is_positive_even(value)
]
```

## 3.2 Use language features when they communicate intent

Good:

```python
if user is None:
    ...
```

Instead of:

```python
if user == None:
    ...
```

Good:

```python
if not items:
    ...
```

Instead of:

```python
if len(items) == 0:
    ...
```

Good:

```python
for index, item in enumerate(items):
    ...
```

Instead of manually maintaining an index.

---

# 4. Project Setup for Clean Python Development

Clean code is easier when the development environment automatically enforces consistency.

A typical project might look like:

```text
my_project/
├── pyproject.toml
├── README.md
├── .gitignore
├── .env.example
├── src/
│   └── my_project/
│       ├── __init__.py
│       ├── domain/
│       ├── services/
│       ├── repositories/
│       └── cli.py
└── tests/
    ├── unit/
    └── integration/
```

## 4.1 Use a virtual environment

Example:

```bash
python -m venv .venv
```

Activate on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Activate on Linux/macOS:

```bash
source .venv/bin/activate
```

Why this matters:

- isolates dependencies;
- avoids global-package conflicts;
- improves reproducibility;
- makes deployment easier.

## 4.2 Prefer centralized configuration

Modern Python projects commonly keep build, formatter, linter, and test configuration in `pyproject.toml`.

Example:

```toml
[project]
name = "invoice_service"
version = "0.1.0"
requires-python = ">=3.12"

[tool.pytest.ini_options]
testpaths = ["tests"]
```

## 4.3 Useful quality tools

A strong toolchain may contain:

- **Black** — opinionated formatting;
- **Ruff** — fast linting and many code-quality checks;
- **mypy** or another type checker — static type validation;
- **pytest** — testing;
- **coverage.py** — test coverage measurement;
- **pre-commit** — automatic checks before commits.

The exact tools can change over time. The principle is more important:

> Automate style and mechanical checks so humans can focus on design and correctness.

## 4.4 Example pre-commit workflow

Develop normally:

```bash
git add .
git commit -m "Add invoice validation"
```

Pre-commit hooks can catch:

- trailing whitespace;
- formatting issues;
- lint violations;
- accidentally committed large files;
- simple security mistakes.

---

# 5. Naming: Variables, Functions, Classes, Modules, and Constants

Naming is one of the highest-impact clean-code skills.

A good name answers:

- What does this represent?
- Why does it exist?
- What unit is it in?
- What kind of value is it?
- What action will this function perform?

## 5.1 Variable names

Bad:

```python
d = 7
t = 1500
x = t * d
```

Better:

```python
days_worked = 7
daily_rate = 1500
total_pay = daily_rate * days_worked
```

## 5.2 Include units when ambiguity matters

Bad:

```python
timeout = 30
```

Better:

```python
timeout_seconds = 30
```

Bad:

```python
file_size = 25
```

Better:

```python
file_size_mb = 25
```

## 5.3 Boolean names should sound like yes/no questions

Good:

```python
is_active = True
has_permission = False
can_retry = True
should_notify = False
```

Less clear:

```python
active = True
permission = False
retry = True
notification = False
```

## 5.4 Function names should usually contain verbs

Good:

```python
calculate_tax()
send_email()
load_customer()
validate_invoice()
archive_report()
```

Avoid vague names:

```python
process()
handle()
do_work()
run_logic()
data()
```

Sometimes `process()` is reasonable inside a narrowly focused class, but vague names should not become a habit.

## 5.5 Class names should usually be nouns

Good:

```python
Invoice
PaymentService
UserRepository
EmailSender
TaxCalculator
```

## 5.6 Constants use uppercase

```python
MAX_RETRY_COUNT = 3
DEFAULT_TIMEOUT_SECONDS = 30
SUPPORTED_FILE_TYPES = {".pdf", ".png", ".jpg"}
```

## 5.7 Avoid unnecessary type encoding in names

Avoid Hungarian-style names such as:

```python
str_customer_name = "Asha"
lst_orders = []
dict_config = {}
```

Prefer:

```python
customer_name = "Asha"
orders = []
config = {}
```

Python types can be expressed through type hints when necessary.

## 5.8 Avoid misleading names

Bad:

```python
users = get_active_user_ids()
```

The name suggests user objects, but the function returns IDs.

Better:

```python
active_user_ids = get_active_user_ids()
```

## 5.9 Use domain language

If your business calls something an `invoice`, do not call it `document` in one layer, `bill` in another, and `voucher` in another unless they are genuinely different concepts.

Consistent domain language reduces translation effort.

---

# 6. Variables and State

Mutable state creates many bugs.

Clean Python attempts to:

- keep variable scope small;
- minimize reassignment;
- avoid hidden global state;
- separate inputs from outputs;
- use immutable values when practical.

## 6.1 Keep variables close to where they are used

Bad:

```python
discount = 0.10

# 80 lines of unrelated code

final_amount = amount - amount * discount
```

Better:

```python
discount_rate = 0.10
final_amount = amount * (1 - discount_rate)
```

Keep related logic together.

## 6.2 Avoid unnecessary temporary variables

Too indirect:

```python
customer_value = customer
name_value = customer_value.name
display_value = name_value.upper()
return display_value
```

Better:

```python
return customer.name.upper()
```

But do not compress complex transformations until they become hard to understand.

## 6.3 Avoid global mutable state

Bad:

```python
current_user = None


def login(user):
    global current_user
    current_user = user
```

Better:

```python
class Session:
    def __init__(self) -> None:
        self.current_user = None

    def login(self, user) -> None:
        self.current_user = user
```

Or better still, pass state explicitly where practical.

## 6.4 Beware mutable default arguments

Bad:

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

The list is created once, not once per function call.

Good:

```python
def add_item(item, items=None):
    if items is None:
        items = []

    items.append(item)
    return items
```

With types:

```python
def add_item(
    item: str,
    items: list[str] | None = None,
) -> list[str]:
    if items is None:
        items = []

    items.append(item)
    return items
```

---

# 7. Functions: The Core Unit of Clean Code

Functions should express one coherent idea.

## 7.1 Prefer one responsibility

Bad:

```python
def create_user(data):
    validate_email(data["email"])
    user = save_to_database(data)
    send_welcome_email(user)
    write_audit_log(user)
    generate_report()
    return user
```

This function mixes:

- validation;
- persistence;
- email;
- auditing;
- reporting.

A service may orchestrate several steps, but low-level details should live behind clear abstractions.

Better:

```python
def create_user(
    command: CreateUserCommand,
    user_repository: UserRepository,
    email_sender: EmailSender,
    audit_logger: AuditLogger,
) -> User:
    user = User.create(
        name=command.name,
        email=command.email,
    )

    user_repository.save(user)
    email_sender.send_welcome_email(user)
    audit_logger.user_created(user)

    return user
```

## 7.2 Keep functions small enough to understand

"Functions must be five lines" is not a useful universal rule.

Instead ask:

- Can I describe this function in one sentence?
- Does it operate at one abstraction level?
- Does it have multiple reasons to change?
- Is its control flow difficult to follow?
- Are comments needed to explain separate internal sections?

If yes, extraction may help.

## 7.3 Do not mix abstraction levels

Bad:

```python
def checkout(order):
    total = sum(item.price * item.quantity for item in order.items)

    connection = mysql.connector.connect(...)
    cursor = connection.cursor()
    cursor.execute("INSERT INTO orders ...")

    requests.post(
        "https://payment.example.com/charge",
        json={"amount": total},
    )
```

The function mixes:

- domain calculation;
- database mechanics;
- network protocol details.

Better:

```python
def checkout(
    order: Order,
    order_repository: OrderRepository,
    payment_gateway: PaymentGateway,
) -> Receipt:
    total = order.total()
    payment = payment_gateway.charge(total)
    order.mark_paid(payment.transaction_id)
    order_repository.save(order)

    return Receipt.from_order(order)
```

## 7.4 Prefer intention-revealing helper functions

Instead of:

```python
if user.age >= 18 and user.status == "active" and not user.is_blocked:
    grant_access()
```

Use:

```python
if user.can_access_portal():
    grant_access()
```

The business rule now has a name.

## 7.5 Avoid hidden side effects

Surprising:

```python
def get_user(user_id):
    user = repository.find(user_id)
    analytics.track("user_loaded", user_id)
    cache.set(user_id, user)
    return user
```

A getter that writes analytics and cache state may surprise callers.

Prefer explicit orchestration or clearly documented behavior.

---

# 8. Function Arguments and Return Values

## 8.1 Keep argument lists manageable

Bad:

```python
def create_employee(
    first_name,
    last_name,
    email,
    phone,
    department,
    manager,
    joining_date,
    salary,
    location,
):
    ...
```

Better:

```python
from dataclasses import dataclass
from datetime import date


@dataclass(frozen=True)
class NewEmployee:
    first_name: str
    last_name: str
    email: str
    phone: str
    department: str
    manager: str
    joining_date: date
    salary: float
    location: str


def create_employee(command: NewEmployee):
    ...
```

## 8.2 Use keyword-only arguments for important options

Example:

```python
def send_email(
    recipient: str,
    subject: str,
    *,
    cc: list[str] | None = None,
    urgent: bool = False,
) -> None:
    ...
```

Call:

```python
send_email(
    "user@example.com",
    "Deployment complete",
    urgent=True,
)
```

This is clearer than:

```python
send_email("user@example.com", "Deployment complete", None, True)
```

## 8.3 Avoid flag arguments when they represent separate behavior

Bad:

```python
def export_report(report, as_pdf):
    if as_pdf:
        ...
    else:
        ...
```

Better:

```python
def export_pdf(report):
    ...


def export_csv(report):
    ...
```

If a format is genuinely a parameterized strategy, an enum or strategy object may be appropriate.

## 8.4 Return consistent types

Bad:

```python
def find_user(user_id):
    if user_id == 0:
        return False
    if not exists(user_id):
        return None
    return User(...)
```

Now callers must handle `False`, `None`, and `User`.

Better:

```python
def find_user(user_id: int) -> User | None:
    ...
```

Or raise a domain exception when absence is exceptional.

## 8.5 Avoid returning magic tuples

Hard to read:

```python
return True, user, None
```

Better:

```python
from dataclasses import dataclass


@dataclass(frozen=True)
class RegistrationResult:
    success: bool
    user: User | None
    error_message: str | None
```

---

# 9. Control Flow and Guard Clauses

Deep nesting is hard to read.

## 9.1 Replace nested conditions with guard clauses

Bad:

```python
def withdraw(account, amount):
    if account.is_active:
        if amount > 0:
            if account.balance >= amount:
                account.balance -= amount
                return True

    return False
```

Better:

```python
def withdraw(account, amount):
    if not account.is_active:
        return False

    if amount <= 0:
        return False

    if account.balance < amount:
        return False

    account.balance -= amount
    return True
```

## 9.2 Prefer positive business predicates

Instead of:

```python
if not user.is_not_eligible():
    ...
```

Prefer:

```python
if user.is_eligible():
    ...
```

Double negatives increase mental effort.

## 9.3 Simplify boolean expressions

Bad:

```python
if is_active == True:
    ...
```

Good:

```python
if is_active:
    ...
```

Bad:

```python
if is_active == False:
    ...
```

Good:

```python
if not is_active:
    ...
```

## 9.4 Do not hide important logic in giant expressions

Bad:

```python
eligible = user.age >= 18 and user.country in allowed and not user.blocked and user.kyc_status == "verified" and user.balance >= minimum_balance
```

Better:

```python
def is_eligible(user: User) -> bool:
    return (
        user.age >= 18
        and user.country in ALLOWED_COUNTRIES
        and not user.blocked
        and user.kyc_status == "verified"
        and user.balance >= MINIMUM_BALANCE
    )
```

Even better when business rules deserve names:

```python
def is_eligible(user: User) -> bool:
    return (
        user.is_adult()
        and user.is_in_supported_country()
        and user.is_verified()
        and user.has_required_balance()
        and not user.is_blocked
    )
```

---

# 10. Collections and Data Structures

Choosing the right data structure makes code simpler.

## 10.1 List

Use when:

- order matters;
- duplicates are allowed;
- you process items sequentially.

```python
invoice_numbers = ["INV-101", "INV-102", "INV-103"]
```

## 10.2 Set

Use when:

- uniqueness matters;
- fast membership checks matter;
- order is not the primary concern.

Bad:

```python
allowed_roles = ["admin", "manager", "auditor"]

if role in allowed_roles:
    ...
```

For repeated membership tests:

```python
ALLOWED_ROLES = {"admin", "manager", "auditor"}

if role in ALLOWED_ROLES:
    ...
```

## 10.3 Dictionary

Use key-value structures when lookup by key is natural.

```python
users_by_id = {
    101: "Asha",
    102: "Rahul",
}
```

## 10.4 Tuple

Useful for fixed, lightweight groups, but avoid ambiguous positional tuples for complex domain data.

Good:

```python
coordinates = (19.0760, 72.8777)
```

Less good:

```python
employee = ("E101", "Asha", "Finance", 75000, True)
```

Prefer a dataclass for the employee.

## 10.5 defaultdict

Instead of:

```python
groups = {}

for employee in employees:
    department = employee.department

    if department not in groups:
        groups[department] = []

    groups[department].append(employee)
```

Use:

```python
from collections import defaultdict

groups: dict[str, list[Employee]] = defaultdict(list)

for employee in employees:
    groups[employee.department].append(employee)
```

## 10.6 Counter

For counting:

```python
from collections import Counter

statuses = ["paid", "paid", "pending", "failed", "paid"]
counts = Counter(statuses)

print(counts["paid"])
```

Better than manually maintaining count dictionaries.

---

# 11. Comprehensions: Powerful but Easy to Abuse

## 11.1 Good use

```python
active_emails = [
    user.email
    for user in users
    if user.is_active
]
```

## 11.2 Too much logic

Avoid:

```python
results = [
    transform(x)
    for x in values
    if validate(x) and x.status != "blocked" and (x.score > 50 or x.priority)
]
```

When conditions become business logic, name them:

```python
def should_process(item: Item) -> bool:
    return (
        validate(item)
        and item.status != "blocked"
        and (item.score > 50 or item.priority)
    )


results = [
    transform(item)
    for item in values
    if should_process(item)
]
```

## 11.3 Avoid side effects inside comprehensions

Bad:

```python
[send_email(user) for user in users]
```

The comprehension creates a list you do not want.

Better:

```python
for user in users:
    send_email(user)
```

## 11.4 Generator expressions for streaming

Instead of building a full list:

```python
total = sum([invoice.amount for invoice in invoices])
```

Prefer:

```python
total = sum(invoice.amount for invoice in invoices)
```

---

# 12. Strings and Text Processing

## 12.1 Prefer f-strings for readable interpolation

Good:

```python
message = f"Invoice {invoice.number} belongs to {invoice.vendor_name}"
```

Avoid needless concatenation:

```python
message = (
    "Invoice "
    + invoice.number
    + " belongs to "
    + invoice.vendor_name
)
```

## 12.2 Avoid building long strings with repeated `+=` in loops

Better:

```python
lines = []

for user in users:
    lines.append(f"{user.id},{user.name}")

content = "\n".join(lines)
```

## 12.3 Normalize user input explicitly

```python
normalized_email = email.strip().lower()
```

Be careful: not every identifier is case-insensitive.

## 12.4 Prefer parser functions to scattered string manipulation

Bad:

```python
parts = invoice_no.split("-")
year = int(parts[1])
sequence = int(parts[2])
```

Better:

```python
from dataclasses import dataclass


@dataclass(frozen=True)
class InvoiceNumber:
    prefix: str
    year: int
    sequence: int


def parse_invoice_number(value: str) -> InvoiceNumber:
    prefix, year_text, sequence_text = value.split("-", maxsplit=2)

    return InvoiceNumber(
        prefix=prefix,
        year=int(year_text),
        sequence=int(sequence_text),
    )
```

---

# 13. Exceptions and Error Handling

Good error handling makes failure understandable and recoverable.

## 13.1 Never use a bare `except` casually

Bad:

```python
try:
    process_payment()
except:
    pass
```

This can suppress:

- programming bugs;
- system-exit signals;
- keyboard interruption;
- real operational failures.

Better:

```python
try:
    process_payment()
except PaymentGatewayError as exc:
    logger.exception("Payment gateway failed")
    raise CheckoutError("Unable to complete payment") from exc
```

## 13.2 Catch exceptions at the right level

Low-level code should raise meaningful errors.

Boundary-level code should decide how to present or recover from them.

Example:

```python
class CustomerNotFoundError(Exception):
    pass


def get_customer(customer_id: int) -> Customer:
    customer = repository.find(customer_id)

    if customer is None:
        raise CustomerNotFoundError(
            f"Customer {customer_id} was not found"
        )

    return customer
```

An API handler could translate this into a 404 response.

## 13.3 Do not use exceptions for normal branching

Avoid:

```python
try:
    user = users[user_id]
except KeyError:
    user = None
```

If absence is expected:

```python
user = users.get(user_id)
```

## 13.4 Preserve exception context

Bad:

```python
except DatabaseError:
    raise ServiceError("Database failed")
```

Better:

```python
except DatabaseError as exc:
    raise ServiceError("Unable to save invoice") from exc
```

## 13.5 Custom exceptions should communicate domain meaning

Useful:

```python
class InsufficientBalanceError(Exception):
    pass


class DuplicateInvoiceError(Exception):
    pass


class UnsupportedDocumentTypeError(Exception):
    pass
```

Less useful:

```python
class ProcessingError(Exception):
    pass
```

unless the domain genuinely needs such a broad category.

## 13.6 Error messages should contain actionable context

Poor:

```python
raise ValueError("Invalid value")
```

Better:

```python
raise ValueError(
    f"Invoice amount must be positive; received {amount}"
)
```

Do not include secrets or sensitive personal data in exception messages.

---

# 14. Comments, Docstrings, and Documentation

Comments should explain **why**, not narrate obvious code.

## 14.1 Avoid obvious comments

Bad:

```python
# Increment counter by 1
counter += 1
```

## 14.2 Useful comment: business reason

Good:

```python
# The external payroll API treats midnight as belonging to the previous
# payroll day, so subtract one second before converting the date.
payroll_timestamp = midnight - timedelta(seconds=1)
```

## 14.3 Do not use comments to compensate for bad names

Bad:

```python
# Check if customer is active and has verified email
if c.a and c.ev:
    ...
```

Better:

```python
if customer.is_active and customer.email_verified:
    ...
```

## 14.4 Docstrings describe public behavior

Example:

```python
def calculate_late_fee(
    amount: Decimal,
    days_overdue: int,
) -> Decimal:
    """Calculate the late-payment fee for an overdue invoice.

    Args:
        amount: Outstanding invoice amount.
        days_overdue: Number of full days past the due date.

    Returns:
        Calculated late fee.

    Raises:
        ValueError: If amount or days_overdue is negative.
    """
```

## 14.5 Document behavior, contracts, and surprises

Good documentation explains:

- assumptions;
- accepted formats;
- return values;
- exceptions;
- important side effects;
- performance characteristics when relevant;
- domain rules.

It should not repeat the implementation line by line.

---

# 15. Type Hints and Static Analysis

Type hints improve communication and tooling.

## 15.1 Basic types

```python
def calculate_total(
    quantity: int,
    unit_price: float,
) -> float:
    return quantity * unit_price
```

## 15.2 Collections

```python
def active_user_names(users: list[User]) -> list[str]:
    return [
        user.name
        for user in users
        if user.is_active
    ]
```

## 15.3 Optional values

```python
def find_user(user_id: int) -> User | None:
    ...
```

## 15.4 Protocols for behavior-oriented typing

A protocol lets code depend on capability rather than concrete inheritance.

```python
from typing import Protocol


class MessageSender(Protocol):
    def send(self, recipient: str, message: str) -> None:
        ...


class EmailSender:
    def send(self, recipient: str, message: str) -> None:
        print(f"Email to {recipient}: {message}")


def notify(
    sender: MessageSender,
    recipient: str,
    message: str,
) -> None:
    sender.send(recipient, message)
```

## 15.5 Type aliases

```python
UserId = int
InvoiceNumber = str
```

Be careful: basic aliases improve readability but do not create runtime-distinct types.

For stronger domain typing, consider classes or `NewType`.

```python
from typing import NewType

UserId = NewType("UserId", int)
```

## 15.6 Avoid `Any` everywhere

This defeats much of the benefit of typing:

```python
def process(data: Any) -> Any:
    ...
```

Use `Any` intentionally at dynamic boundaries, not as a shortcut for avoiding design.

## 15.7 Use types to expose contracts

Compare:

```python
def load(id):
    ...
```

With:

```python
def load_customer(customer_id: int) -> Customer | None:
    ...
```

The second function communicates much more before reading its implementation.

---

# 16. Classes and Object-Oriented Clean Code

Classes are useful when behavior and state belong together.

They are not automatically cleaner than functions.

## 16.1 Avoid "God classes"

Bad:

```python
class ApplicationManager:
    def create_user(self):
        ...

    def send_email(self):
        ...

    def calculate_tax(self):
        ...

    def backup_database(self):
        ...

    def create_report(self):
        ...

    def deploy_server(self):
        ...
```

This class has unrelated responsibilities.

Split by capability:

```python
class UserService:
    ...


class EmailSender:
    ...


class TaxCalculator:
    ...


class BackupService:
    ...
```

## 16.2 Put domain behavior near the data it governs

An anemic model:

```python
class Account:
    def __init__(self, balance):
        self.balance = balance


def withdraw(account, amount):
    if amount <= account.balance:
        account.balance -= amount
```

Better:

```python
class Account:
    def __init__(self, balance: Decimal) -> None:
        self._balance = balance

    @property
    def balance(self) -> Decimal:
        return self._balance

    def withdraw(self, amount: Decimal) -> None:
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")

        if amount > self._balance:
            raise InsufficientBalanceError()

        self._balance -= amount
```

The invariant lives with the object.

## 16.3 Encapsulation is about protecting valid state

Python does not enforce strict private fields, but conventions matter.

```python
class Order:
    def __init__(self) -> None:
        self._status = "draft"
```

The underscore says: "This is internal; use the object's API."

## 16.4 Properties can protect invariants

```python
class Product:
    def __init__(self, price: Decimal) -> None:
        self.price = price

    @property
    def price(self) -> Decimal:
        return self._price

    @price.setter
    def price(self, value: Decimal) -> None:
        if value < 0:
            raise ValueError("Price cannot be negative")

        self._price = value
```

Do not create properties merely to imitate another language's getter/setter style.

---

# 17. SOLID Principles in Python

SOLID is a design heuristic, not a law.

## 17.1 S — Single Responsibility Principle

A unit should have one coherent reason to change.

Bad:

```python
class InvoiceService:
    def calculate_total(self, invoice):
        ...

    def save_pdf(self, invoice):
        ...

    def send_email(self, invoice):
        ...
```

Better:

```python
class InvoiceCalculator:
    ...


class InvoicePdfRenderer:
    ...


class InvoiceEmailSender:
    ...
```

## 17.2 O — Open/Closed Principle

Software should often be extendable without repeatedly modifying central conditional logic.

Bad:

```python
def calculate_discount(customer_type, amount):
    if customer_type == "regular":
        return amount * Decimal("0.05")
    elif customer_type == "premium":
        return amount * Decimal("0.10")
    elif customer_type == "vip":
        return amount * Decimal("0.15")
```

Strategy-oriented design:

```python
from typing import Protocol


class DiscountPolicy(Protocol):
    def discount(self, amount: Decimal) -> Decimal:
        ...


class RegularDiscount:
    def discount(self, amount: Decimal) -> Decimal:
        return amount * Decimal("0.05")


class PremiumDiscount:
    def discount(self, amount: Decimal) -> Decimal:
        return amount * Decimal("0.10")
```

## 17.3 L — Liskov Substitution Principle

Subtypes should honor the expectations of the abstraction they implement.

A common violation is subclassing only for code reuse while changing fundamental behavior.

Bad conceptual design:

```python
class Bird:
    def fly(self):
        ...


class Penguin(Bird):
    def fly(self):
        raise RuntimeError("Penguins cannot fly")
```

Better abstractions:

```python
class Bird:
    ...


class FlyingBird(Bird):
    def fly(self):
        ...
```

## 17.4 I — Interface Segregation Principle

Do not force consumers to depend on methods they do not need.

Avoid giant interfaces:

```python
class Repository(Protocol):
    def create(self): ...
    def read(self): ...
    def update(self): ...
    def delete(self): ...
    def search(self): ...
    def export(self): ...
    def import_all(self): ...
```

A read-only service may only need:

```python
class CustomerReader(Protocol):
    def find_by_id(self, customer_id: int) -> Customer | None:
        ...
```

## 17.5 D — Dependency Inversion Principle

High-level business logic should depend on abstractions rather than infrastructure details.

Bad:

```python
class OrderService:
    def __init__(self):
        self.db = MySQLOrderRepository(...)
```

Better:

```python
class OrderService:
    def __init__(self, repository: OrderRepository) -> None:
        self._repository = repository
```

Now testing can use an in-memory repository.

---

# 18. Dataclasses and Value Objects

Dataclasses reduce boilerplate for data-oriented objects.

## 18.1 Basic dataclass

```python
from dataclasses import dataclass


@dataclass
class Customer:
    customer_id: int
    name: str
    email: str
```

## 18.2 Frozen value object

```python
from dataclasses import dataclass
from decimal import Decimal


@dataclass(frozen=True)
class Money:
    amount: Decimal
    currency: str
```

`frozen=True` prevents accidental mutation through normal assignment.

## 18.3 Validate value objects on creation

```python
from dataclasses import dataclass


@dataclass(frozen=True)
class EmailAddress:
    value: str

    def __post_init__(self) -> None:
        if "@" not in self.value:
            raise ValueError("Invalid email address")
```

In real applications, email validation rules may be more nuanced.

## 18.4 Why value objects help

Instead of passing raw strings everywhere:

```python
def send(email: str):
    ...
```

You can pass validated concepts:

```python
def send(email: EmailAddress):
    ...
```

The invalid state is harder to represent.

---

# 19. Composition vs Inheritance

Inheritance creates tight relationships.

Composition is often easier to change and test.

## 19.1 Inheritance-heavy design

```python
class EmailNotificationService(BaseNotificationService):
    ...
```

If the base class contains unrelated behavior, subclasses become coupled to it.

## 19.2 Composition

```python
class NotificationService:
    def __init__(self, sender: MessageSender) -> None:
        self._sender = sender

    def notify(
        self,
        recipient: str,
        message: str,
    ) -> None:
        self._sender.send(recipient, message)
```

Now use:

```python
service = NotificationService(EmailSender())
```

or:

```python
service = NotificationService(SmsSender())
```

## 19.3 When inheritance is reasonable

Use inheritance when:

- there is a genuine "is-a" relationship;
- the subtype can honor the parent's contract;
- polymorphism is useful;
- the hierarchy is stable and small.

---

# 20. Modules, Packages, and Boundaries

A clean codebase is easier to navigate.

## 20.1 Group by business capability when possible

Instead of:

```text
app/
├── models/
├── services/
├── utils/
├── helpers/
└── controllers/
```

A larger business application may benefit from:

```text
app/
├── billing/
│   ├── domain.py
│   ├── service.py
│   └── repository.py
├── users/
│   ├── domain.py
│   ├── service.py
│   └── repository.py
└── notifications/
    ├── service.py
    └── senders.py
```

There is no universal layout. The goal is to make boundaries obvious.

## 20.2 Avoid dumping everything into `utils.py`

`utils.py`, `helpers.py`, and `common.py` often become junk drawers.

Instead of:

```text
utils.py
```

with 60 unrelated functions, create focused modules:

```text
dates.py
currency.py
file_hashing.py
invoice_numbers.py
```

## 20.3 Keep public interfaces small

If a package exposes only a few concepts, keep that explicit.

Avoid exposing internal implementation details accidentally.

## 20.4 Watch for circular imports

Circular imports often indicate:

- mixed responsibilities;
- unclear dependency direction;
- shared concepts living in the wrong module.

Treat them as a design signal rather than only a syntax problem.

---

# 21. Imports and Dependency Management

## 21.1 Keep imports organized

Typical grouping:

```python
import json
from pathlib import Path

import requests

from my_project.domain.invoice import Invoice
from my_project.repositories.invoice import InvoiceRepository
```

Groups:

1. standard library;
2. third-party packages;
3. local application imports.

## 21.2 Avoid wildcard imports

Bad:

```python
from math import *
```

Good:

```python
from math import ceil, floor
```

or:

```python
import math

value = math.ceil(2.4)
```

Explicit imports reveal dependencies.

## 21.3 Avoid import-time side effects

Bad module:

```python
connection = connect_to_production_database()
```

Simply importing the module now performs a network operation.

Prefer explicit initialization.

## 21.4 Pin and manage dependencies intentionally

For applications, reproducible dependencies matter.

For reusable libraries, version ranges need careful compatibility design.

The exact dependency tool is less important than these principles:

- lock what you deploy;
- audit unused dependencies;
- upgrade regularly;
- separate runtime and development dependencies;
- avoid adding packages for trivial functionality.

---

# 22. File and Resource Handling

Use context managers to guarantee cleanup.

Bad:

```python
file = open("report.txt", "r")
content = file.read()
file.close()
```

If `read()` raises, `close()` may never run.

Good:

```python
with open("report.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

Prefer `pathlib` for file paths:

```python
from pathlib import Path

report_path = Path("reports") / "monthly.txt"

content = report_path.read_text(encoding="utf-8")
```

## 22.1 Explicit encoding

Avoid platform-dependent surprises:

```python
Path("data.txt").read_text(encoding="utf-8")
```

## 22.2 Do not swallow file errors blindly

Bad:

```python
try:
    content = Path(path).read_text()
except Exception:
    content = ""
```

This makes "missing file", "permission denied", and "invalid encoding" look identical.

Handle only expected failures.

---

# 23. Iterators and Generators

Generators improve memory usage and express streaming workflows.

## 23.1 List approach

```python
def read_numbers(path: Path) -> list[int]:
    numbers = []

    with path.open(encoding="utf-8") as file:
        for line in file:
            numbers.append(int(line))

    return numbers
```

## 23.2 Generator approach

```python
from collections.abc import Iterator


def read_numbers(path: Path) -> Iterator[int]:
    with path.open(encoding="utf-8") as file:
        for line in file:
            yield int(line)
```

Usage:

```python
for number in read_numbers(Path("numbers.txt")):
    process(number)
```

## 23.3 When generators help

Use them when:

- input can be very large;
- consumers process one item at a time;
- loading everything into memory is unnecessary.

Avoid generators when a concrete list is simpler and the dataset is small.

---

# 24. Decorators

Decorators are useful for cross-cutting behavior, but they can hide control flow.

## 24.1 Simple decorator

```python
from functools import wraps
from time import perf_counter


def measure_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        started_at = perf_counter()
        try:
            return func(*args, **kwargs)
        finally:
            elapsed = perf_counter() - started_at
            print(f"{func.__name__}: {elapsed:.3f}s")

    return wrapper
```

Use:

```python
@measure_time
def generate_report():
    ...
```

## 24.2 Good decorator use cases

- authorization;
- retries;
- tracing;
- metrics;
- caching;
- transaction boundaries;
- registration.

## 24.3 Avoid decorator abuse

Do not create decorators for core business behavior if they make execution order mysterious.

Ask:

> Would a new developer understand this function's behavior without inspecting five decorators?

---

# 25. Context Managers

Context managers make acquire/use/release behavior explicit.

Built-in example:

```python
with open("data.txt", encoding="utf-8") as file:
    ...
```

Custom example:

```python
from contextlib import contextmanager


@contextmanager
def database_transaction(connection):
    try:
        yield
        connection.commit()
    except Exception:
        connection.rollback()
        raise
```

Usage:

```python
with database_transaction(connection):
    update_invoice()
    insert_audit_record()
```

Context managers are excellent for:

- files;
- database transactions;
- locks;
- temporary directories;
- temporary configuration;
- tracing spans.

---

# 26. Functional Techniques

Python supports functional styles, but readability comes first.

## 26.1 Prefer pure functions for calculations

A pure function:

- depends only on inputs;
- returns an output;
- does not mutate external state.

Example:

```python
from decimal import Decimal


def calculate_tax(
    subtotal: Decimal,
    rate: Decimal,
) -> Decimal:
    return subtotal * rate
```

Easy to test:

```python
assert calculate_tax(
    Decimal("100"),
    Decimal("0.18"),
) == Decimal("18.00")
```

## 26.2 Separate pure calculation from side effects

Instead of:

```python
def calculate_and_save_total(order):
    total = ...
    database.save(total)
    return total
```

Use:

```python
def calculate_order_total(order: Order) -> Decimal:
    ...


def save_order_total(order: Order, total: Decimal) -> None:
    ...
```

## 26.3 `map()` vs comprehension

Python often reads more naturally with a comprehension:

```python
names = [user.name for user in users]
```

Instead of:

```python
names = list(map(lambda user: user.name, users))
```

## 26.4 Lambda should stay small

Good:

```python
users.sort(key=lambda user: user.last_name)
```

Avoid multi-concept lambda expressions.

---

# 27. Logging

Production code should use logging instead of scattered `print()` statements.

## 27.1 Basic setup

```python
import logging

logger = logging.getLogger(__name__)
```

Usage:

```python
logger.info(
    "Invoice approved",
    extra={"invoice_id": invoice.id},
)
```

## 27.2 Choose log levels deliberately

- `DEBUG` — detailed diagnostic information;
- `INFO` — normal significant events;
- `WARNING` — unexpected but recoverable condition;
- `ERROR` — operation failed;
- `CRITICAL` — severe failure threatening application operation.

## 27.3 Do not log secrets

Never log:

- passwords;
- API keys;
- access tokens;
- session secrets;
- full payment-card numbers;
- private keys.

Be cautious with personal or regulated data.

## 27.4 Log context, not noise

Poor:

```python
logger.info("Started")
logger.info("Step 1")
logger.info("Step 2")
logger.info("Done")
```

Better:

```python
logger.info(
    "Invoice import completed",
    extra={
        "batch_id": batch_id,
        "processed": processed_count,
        "failed": failed_count,
    },
)
```

## 27.5 Use exception logging

```python
try:
    client.send(payload)
except NetworkError:
    logger.exception(
        "Failed to send payload",
        extra={"request_id": request_id},
    )
    raise
```

`logger.exception()` captures the stack trace inside an exception handler.

---

# 28. Configuration and Environment Variables

Configuration should not be scattered throughout code.

Bad:

```python
DATABASE_URL = "postgresql://prod-user:secret@prod-db/app"
```

Never hard-code credentials.

Better conceptually:

```python
import os

database_url = os.environ["DATABASE_URL"]
```

But avoid reading environment variables throughout the application.

Centralize configuration:

```python
from dataclasses import dataclass
import os


@dataclass(frozen=True)
class Settings:
    database_url: str
    debug: bool


def load_settings() -> Settings:
    return Settings(
        database_url=os.environ["DATABASE_URL"],
        debug=os.getenv("DEBUG", "false").lower() == "true",
    )
```

Then inject `Settings`.

## 28.1 Fail fast on invalid required configuration

If a production-required setting is missing, startup should usually fail clearly rather than continue in a broken state.

## 28.2 Keep `.env.example`, not real secrets

Example:

```text
DATABASE_URL=
API_BASE_URL=
LOG_LEVEL=INFO
```

Do not commit actual secret values.

---

# 29. Validation and Parsing

Treat external input as untrusted.

External input includes:

- HTTP requests;
- CLI arguments;
- environment variables;
- database data from other systems;
- CSV files;
- third-party APIs;
- message queues;
- uploaded files.

## 29.1 Validate at boundaries

Instead of validating the same field everywhere, convert external data into a trusted internal representation.

Example:

```python
from dataclasses import dataclass
from decimal import Decimal


@dataclass(frozen=True)
class CreateInvoiceCommand:
    invoice_number: str
    amount: Decimal
```

Parser:

```python
def parse_invoice(payload: dict[str, object]) -> CreateInvoiceCommand:
    invoice_number = str(payload["invoice_number"]).strip()
    amount = Decimal(str(payload["amount"]))

    if not invoice_number:
        raise ValueError("invoice_number is required")

    if amount <= 0:
        raise ValueError("amount must be positive")

    return CreateInvoiceCommand(
        invoice_number=invoice_number,
        amount=amount,
    )
```

Once parsing succeeds, downstream code can rely on stronger assumptions.

## 29.2 Separate parsing from business validation

Parsing asks:

> Is this input structurally valid?

Business validation asks:

> Is this operation allowed?

Example:

- Parsing: invoice amount must be a decimal.
- Business rule: invoice amount cannot exceed purchase-order balance.

Keep these concerns distinct when possible.

---

# 30. Dates, Times, and Time Zones

Date/time code causes many subtle bugs.

## 30.1 Prefer aware datetimes for real-world timestamps

```python
from datetime import datetime, timezone

now = datetime.now(timezone.utc)
```

## 30.2 Do not mix naive and aware datetimes

A naive datetime has no timezone information.

An aware datetime does.

Choose a consistent application strategy.

## 30.3 Store timestamps in a normalized form

A common design:

- store in UTC;
- convert to local timezone at boundaries;
- preserve business-local dates separately when they are domain concepts.

## 30.4 Use `zoneinfo` for named time zones

```python
from datetime import datetime
from zoneinfo import ZoneInfo

mumbai = ZoneInfo("Asia/Kolkata")

local_time = datetime.now(mumbai)
```

## 30.5 Avoid assuming every day has 24 hours

Daylight-saving transitions affect some time zones.

If your business logic means "same local time tomorrow", date/calendar operations may be more appropriate than adding 24 hours.

---

# 31. Working with Files, JSON, CSV, and Serialization

## 31.1 JSON

```python
import json
from pathlib import Path


def load_json(path: Path) -> dict[str, object]:
    with path.open(encoding="utf-8") as file:
        return json.load(file)
```

## 31.2 Separate I/O from interpretation

Good structure:

```python
def load_json(path: Path) -> dict[str, object]:
    ...


def parse_customer(payload: dict[str, object]) -> Customer:
    ...
```

This keeps filesystem errors separate from domain validation.

## 31.3 CSV

```python
import csv
from pathlib import Path


def read_customers(path: Path):
    with path.open(
        newline="",
        encoding="utf-8",
    ) as file:
        reader = csv.DictReader(file)

        for row in reader:
            yield row
```

## 31.4 Avoid unsafe deserialization

Do not deserialize untrusted content with mechanisms that can execute arbitrary code.

Prefer safe, data-only formats when exchanging untrusted data.

---

# 32. Database Code

Database code becomes cleaner when persistence is separated from business logic.

## 32.1 Avoid SQL scattered across business services

Bad:

```python
def approve_invoice(invoice_id):
    cursor.execute(
        "UPDATE invoices SET status='approved' WHERE id=%s",
        (invoice_id,),
    )
    ...
```

Better:

```python
class InvoiceRepository:
    def get(self, invoice_id: int) -> Invoice | None:
        ...

    def save(self, invoice: Invoice) -> None:
        ...
```

Service:

```python
def approve_invoice(
    invoice_id: int,
    repository: InvoiceRepository,
) -> Invoice:
    invoice = repository.get(invoice_id)

    if invoice is None:
        raise InvoiceNotFoundError(invoice_id)

    invoice.approve()
    repository.save(invoice)

    return invoice
```

## 32.2 Parameterize SQL

Bad:

```python
query = f"SELECT * FROM users WHERE email = '{email}'"
```

This creates SQL-injection risk.

Use your database library's parameter binding.

Conceptually:

```python
cursor.execute(
    "SELECT * FROM users WHERE email = %s",
    (email,),
)
```

The placeholder syntax differs by driver.

## 32.3 Keep transaction boundaries explicit

A use case may require multiple writes to succeed atomically.

Example:

```python
with transaction:
    invoice_repository.save(invoice)
    audit_repository.add(event)
```

## 32.4 Avoid N+1 query problems

This is inefficient:

```python
orders = order_repository.list_all()

for order in orders:
    order.customer = customer_repository.get(order.customer_id)
```

For large datasets, fetch related data efficiently using your ORM/database features.

## 32.5 Repository abstraction is not mandatory everywhere

For simple scripts, direct query functions may be cleaner than building a large repository architecture.

Use abstractions when they reduce complexity, not because a diagram says so.

---

# 33. API and Service-Layer Code

Good API code separates transport concerns from business logic.

A request handler should usually:

1. parse input;
2. authenticate/authorize;
3. call an application use case;
4. map result to an HTTP response.

It should not contain the entire business system.

## 33.1 Bad handler

```python
def create_order(request):
    body = request.json
    customer = db.query(...)
    if customer:
        total = ...
        db.insert(...)
        send_email(...)
        return {"success": True}
```

## 33.2 Cleaner layering

```python
def create_order_endpoint(request):
    command = parse_create_order_request(request)
    order = order_service.create(command)
    return serialize_order(order)
```

The service owns business orchestration.

## 33.3 Do not leak database models directly across every boundary

Persistence models and public API schemas may evolve independently.

Mapping can be useful:

```python
def to_order_response(order: Order) -> dict[str, object]:
    return {
        "id": order.id,
        "status": order.status.value,
        "total": str(order.total),
    }
```

## 33.4 Idempotency

For operations like payments or event processing, consider whether retries could duplicate actions.

A clean API contract defines what repeated requests mean.

---

# 34. AsyncIO and Concurrency

Concurrency can improve throughput but adds complexity.

## 34.1 Use async primarily for I/O-bound workloads

Examples:

- HTTP requests;
- database calls using async drivers;
- sockets;
- queues;
- many simultaneous I/O operations.

Example:

```python
import asyncio


async def fetch_all(client, urls: list[str]) -> list[str]:
    tasks = [
        client.get(url)
        for url in urls
    ]
    responses = await asyncio.gather(*tasks)
    return [response.text for response in responses]
```

## 34.2 Do not use async merely because it looks modern

A synchronous batch script may be simpler and perfectly adequate.

## 34.3 Avoid blocking the event loop

Bad inside async code:

```python
async def handler():
    time.sleep(5)
```

Better:

```python
async def handler():
    await asyncio.sleep(5)
```

For CPU-bound work, use suitable process/thread strategies instead of pretending `async` makes CPU work parallel.

## 34.4 Structured concurrency mindset

Keep task lifetimes understandable:

- know who starts a task;
- know who waits for it;
- know how cancellation works;
- know how exceptions propagate.

"Fire-and-forget" tasks can easily become lost failures.

## 34.5 Concurrency requires state discipline

Avoid shared mutable state.

Prefer:

- immutable messages;
- queues;
- isolated workers;
- locks only where required;
- small critical sections.

---

# 35. Performance Without Sacrificing Clarity

Do not optimize blindly.

## 35.1 Measure first

Use profiling before major optimization.

Questions:

- Is the program CPU-bound or I/O-bound?
- Which function consumes the time?
- Is the database the bottleneck?
- Is memory usage the real problem?
- Is latency caused by network calls?

## 35.2 Choose appropriate algorithms

Bad membership testing for large repeated operations:

```python
allowed_ids = [1, 2, 3, ...]
if user_id in allowed_ids:
    ...
```

Use a set when appropriate:

```python
allowed_ids = {1, 2, 3, ...}
if user_id in allowed_ids:
    ...
```

## 35.3 Avoid repeated expensive work

Bad:

```python
for row in rows:
    settings = load_settings_from_disk()
    process(row, settings)
```

Better:

```python
settings = load_settings_from_disk()

for row in rows:
    process(row, settings)
```

## 35.4 Stream large data

Instead of:

```python
lines = file.readlines()
```

Use:

```python
for line in file:
    ...
```

## 35.5 Cache only when invalidation is understood

Caching adds:

- staleness;
- synchronization complexity;
- memory usage;
- invalidation logic.

Do not cache just because a decorator makes it easy.

## 35.6 Readability still matters

This:

```python
lookup = {item.id: item for item in items}
```

is both clear and efficient.

A micro-optimized, obscure implementation is rarely justified without evidence.

---

# 36. Security-Oriented Clean Coding

Security is part of code quality.

## 36.1 Never hard-code secrets

Bad:

```python
API_KEY = "abcd1234-secret"
```

Use a secure secret/configuration mechanism.

## 36.2 Validate input

Do not trust:

- user input;
- headers;
- uploaded files;
- third-party payloads;
- database fields originating externally.

## 36.3 Parameterize database queries

Never build SQL by interpolating untrusted values.

## 36.4 Avoid shell injection

Dangerous:

```python
import os

os.system(f"convert {filename} output.pdf")
```

Safer pattern:

```python
import subprocess

subprocess.run(
    ["convert", filename, "output.pdf"],
    check=True,
)
```

Still validate filenames and command behavior.

Avoid `shell=True` unless there is a strong, understood reason.

## 36.5 Path traversal

Bad:

```python
path = upload_root / user_filename
```

A filename like `../../secret.txt` may escape the intended directory.

Use generated filenames, strict validation, resolved-path checks, or framework-safe upload utilities.

## 36.6 Do not use `eval()` on untrusted input

Bad:

```python
result = eval(user_input)
```

This can execute arbitrary code.

## 36.7 Least privilege

The application should use only the permissions it needs.

Examples:

- database account should not be an administrator;
- file process should not write everywhere;
- service token should have minimal scopes.

## 36.8 Dependency security

Keep third-party dependencies:

- minimal;
- updated;
- reviewed;
- pinned/locked where appropriate;
- scanned for known vulnerabilities in your delivery pipeline.

---

# 37. Testing Clean Python Code

Clean code and testable code reinforce each other.

## 37.1 What to test

Test:

- business rules;
- boundary conditions;
- error behavior;
- important transformations;
- integrations;
- security-sensitive behavior.

Do not waste effort testing trivial language behavior.

## 37.2 Arrange, Act, Assert

Example:

```python
def test_withdraw_reduces_balance():
    # Arrange
    account = Account(Decimal("100"))

    # Act
    account.withdraw(Decimal("30"))

    # Assert
    assert account.balance == Decimal("70")
```

## 37.3 Test behavior, not implementation

Brittle:

```python
mock_repository.save.assert_called_once_before(mock_logger.info)
```

Unless ordering is a real requirement, this over-specifies implementation.

Prefer:

```python
saved_order = repository.saved_orders[0]
assert saved_order.status == OrderStatus.PAID
```

## 37.4 Parameterized tests

```python
import pytest


@pytest.mark.parametrize(
    ("amount", "rate", "expected"),
    [
        (100, 0.10, 10),
        (200, 0.20, 40),
        (0, 0.18, 0),
    ],
)
def test_calculate_tax(amount, rate, expected):
    assert calculate_tax(amount, rate) == expected
```

## 37.5 Test failure cases

```python
def test_withdraw_rejects_amount_above_balance():
    account = Account(Decimal("100"))

    with pytest.raises(InsufficientBalanceError):
        account.withdraw(Decimal("150"))
```

## 37.6 Unit vs integration tests

### Unit test

Tests small business logic quickly and in isolation.

### Integration test

Tests collaboration with real infrastructure or larger components.

Examples:

- real database;
- filesystem;
- HTTP framework;
- queue;
- serialization.

A healthy suite usually contains both.

## 37.7 Coverage is a signal, not the goal

100% line coverage does not guarantee good tests.

A useful question:

> If this business rule breaks, will a test fail?

---

# 38. Mocking and Test Doubles

Mocks are useful but easy to overuse.

## 38.1 Fake repository example

```python
class InMemoryUserRepository:
    def __init__(self) -> None:
        self.users: dict[int, User] = {}

    def get(self, user_id: int) -> User | None:
        return self.users.get(user_id)

    def save(self, user: User) -> None:
        self.users[user.id] = user
```

This is often easier to reason about than a complex mock.

## 38.2 Mock external boundaries

Good candidates:

- payment gateway;
- email provider;
- third-party HTTP API;
- clock;
- filesystem boundary;
- message publisher.

## 38.3 Avoid mocking every internal method

If a test needs 15 mocks for one class, the class may have too many collaborators or the test is coupled to implementation.

## 38.4 Inject clocks instead of patching time everywhere

Example:

```python
from typing import Protocol
from datetime import datetime


class Clock(Protocol):
    def now(self) -> datetime:
        ...


class SystemClock:
    def now(self) -> datetime:
        return datetime.now()
```

Tests can provide a fixed clock.

---

# 39. Refactoring Techniques

Refactoring changes internal structure without intentionally changing externally observable behavior.

## 39.1 Rename

Before:

```python
def calc(x, y):
    return x * y
```

After:

```python
def calculate_line_total(
    quantity: int,
    unit_price: Decimal,
) -> Decimal:
    return quantity * unit_price
```

## 39.2 Extract function

Before:

```python
def generate_invoice(invoice):
    subtotal = sum(
        line.quantity * line.unit_price
        for line in invoice.lines
    )
    tax = subtotal * Decimal("0.18")
    total = subtotal + tax
    ...
```

After:

```python
def calculate_invoice_total(invoice: Invoice) -> Decimal:
    subtotal = sum(
        line.quantity * line.unit_price
        for line in invoice.lines
    )
    tax = subtotal * TAX_RATE
    return subtotal + tax
```

## 39.3 Replace magic number with named constant

Before:

```python
if attempts >= 3:
    ...
```

After:

```python
MAX_LOGIN_ATTEMPTS = 3

if attempts >= MAX_LOGIN_ATTEMPTS:
    ...
```

## 39.4 Replace condition with polymorphism

Before:

```python
if payment.method == "card":
    ...
elif payment.method == "bank":
    ...
elif payment.method == "wallet":
    ...
```

After:

```python
handler = handlers[payment.method]
handler.process(payment)
```

Only do this when the variability is meaningful. A small `if` statement is often simpler than a class hierarchy.

## 39.5 Introduce parameter object

Before:

```python
search(
    customer_id,
    start_date,
    end_date,
    min_amount,
    max_amount,
    status,
    region,
)
```

After:

```python
@dataclass(frozen=True)
class InvoiceSearch:
    customer_id: int | None = None
    start_date: date | None = None
    end_date: date | None = None
    min_amount: Decimal | None = None
    max_amount: Decimal | None = None
    status: str | None = None
    region: str | None = None


search(criteria)
```

## 39.6 Replace primitive with domain type

Before:

```python
def approve(invoice_id: str, approver_email: str):
    ...
```

After:

```python
def approve(
    invoice_id: InvoiceId,
    approver: EmailAddress,
):
    ...
```

## 39.7 Refactor in small safe steps

Good workflow:

1. Add characterization tests if behavior is poorly understood.
2. Make one structural change.
3. Run tests.
4. Commit when stable.
5. Continue.

Avoid combining a massive refactor and a major behavior change in one unreviewable diff.

---

# 40. Common Code Smells and Anti-Patterns

## 40.1 Long function

Signal:

- many unrelated sections;
- comments acting as headings;
- deep nesting;
- too many local variables.

Response:

- extract functions;
- separate orchestration from details;
- move domain behavior to domain objects.

## 40.2 Long parameter list

Response:

- parameter object;
- cohesive class;
- dependency injection;
- reconsider responsibility.

## 40.3 Duplicate code

Do not immediately abstract every two similar lines.

Ask:

> Are these genuinely the same concept, or do they merely look similar today?

Premature deduplication can couple unrelated features.

## 40.4 Magic values

Bad:

```python
if status == 7:
    ...
```

Better:

```python
if status == InvoiceStatus.APPROVED:
    ...
```

## 40.5 Boolean blindness

Hard to understand:

```python
create_user(data, True, False, True)
```

Use named keywords or richer types.

## 40.6 Feature envy

A method constantly pulls fields from another object to make decisions.

Bad:

```python
def can_ship(order):
    return (
        order.status == "paid"
        and order.address is not None
        and not order.is_cancelled
    )
```

Maybe this belongs on `Order`:

```python
if order.can_ship():
    ...
```

## 40.7 Shotgun surgery

One business rule change requires edits in 12 files.

This indicates a concept is scattered.

Centralize the rule or introduce a clearer abstraction.

## 40.8 Dead code

Delete:

- unused functions;
- commented-out old implementations;
- abandoned feature flags;
- unused imports;
- stale branches in conditionals.

Version control already stores history.

## 40.9 Catch-all exception swallowing

Bad:

```python
try:
    ...
except Exception:
    return None
```

This converts all failures into unexplained absence.

## 40.10 Stringly typed design

Bad:

```python
status = "approved"
```

with dozens of raw status strings.

Better:

```python
from enum import Enum


class InvoiceStatus(str, Enum):
    DRAFT = "draft"
    APPROVED = "approved"
    REJECTED = "rejected"
```

## 40.11 Temporal coupling

Code must be called in an undocumented order:

```python
service.load()
service.validate()
service.prepare()
service.execute()
```

If possible, design an API that makes valid order obvious or impossible to misuse.

## 40.12 Hidden I/O

Function name suggests calculation but performs database or network access.

Bad:

```python
def calculate_total(order):
    discount = requests.get(...)
    ...
```

Make external dependencies visible.

---

# 41. Design Patterns in Python

Patterns are vocabulary for recurring design problems.

Do not force them into every problem.

## 41.1 Strategy

Use when behavior changes by policy.

```python
class ShippingPolicy(Protocol):
    def cost(self, order: Order) -> Decimal:
        ...


class StandardShipping:
    def cost(self, order: Order) -> Decimal:
        return Decimal("50")


class ExpressShipping:
    def cost(self, order: Order) -> Decimal:
        return Decimal("150")
```

## 41.2 Factory

Use when object creation is complex or varies by type.

```python
def create_exporter(format_name: str) -> Exporter:
    match format_name:
        case "pdf":
            return PdfExporter()
        case "csv":
            return CsvExporter()
        case _:
            raise UnsupportedFormatError(format_name)
```

## 41.3 Adapter

Use when a third-party API does not match your internal interface.

```python
class SmsSenderAdapter:
    def __init__(self, client: VendorSmsClient) -> None:
        self._client = client

    def send(self, recipient: str, message: str) -> None:
        self._client.push(
            phone=recipient,
            body=message,
        )
```

The rest of your application no longer depends directly on the vendor API.

## 41.4 Repository

Use to isolate persistence semantics when that separation provides value.

```python
class UserRepository(Protocol):
    def get(self, user_id: int) -> User | None:
        ...

    def save(self, user: User) -> None:
        ...
```

## 41.5 Observer / Event

Useful when one business event has multiple reactions.

```python
@dataclass(frozen=True)
class InvoiceApproved:
    invoice_id: int
```

Handlers:

```python
def send_approval_email(event: InvoiceApproved):
    ...


def update_reporting(event: InvoiceApproved):
    ...
```

Avoid uncontrolled event chains that make behavior impossible to trace.

## 41.6 Dependency Injection

Pass collaborators rather than constructing them everywhere.

```python
class PaymentService:
    def __init__(
        self,
        gateway: PaymentGateway,
        repository: PaymentRepository,
    ) -> None:
        self._gateway = gateway
        self._repository = repository
```

## 41.7 Null Object

Instead of repeated `None` checks:

```python
class NoOpMetrics:
    def increment(self, name: str) -> None:
        pass
```

Now code can always call:

```python
metrics.increment("orders_created")
```

Use this only when "do nothing" is a valid behavior.

---

# 42. Clean Architecture for Python Applications

Architecture should manage dependency direction.

A common layered structure:

```text
src/
└── shop/
    ├── domain/
    │   ├── order.py
    │   └── money.py
    ├── application/
    │   ├── create_order.py
    │   └── ports.py
    ├── infrastructure/
    │   ├── postgres_orders.py
    │   └── stripe_gateway.py
    └── interfaces/
        ├── api.py
        └── cli.py
```

## 42.1 Domain layer

Contains:

- entities;
- value objects;
- domain rules;
- domain exceptions.

Should ideally have minimal dependency on web frameworks or databases.

## 42.2 Application layer

Contains use cases:

```python
class CreateOrder:
    def __init__(
        self,
        orders: OrderRepository,
        payments: PaymentGateway,
    ) -> None:
        self._orders = orders
        self._payments = payments

    def execute(
        self,
        command: CreateOrderCommand,
    ) -> Order:
        ...
```

## 42.3 Infrastructure layer

Implements technical details:

- SQL database;
- Redis;
- HTTP clients;
- cloud storage;
- email provider.

## 42.4 Interface layer

Translates input/output:

- REST API;
- CLI;
- scheduled job;
- message consumer.

## 42.5 Dependency rule

Business logic should not require knowledge of a specific web framework or database driver.

This makes:

- testing easier;
- technology replacement safer;
- business behavior reusable.

## 42.6 Do not over-architect small programs

For a 40-line script, four architecture layers may make code worse.

Use the smallest architecture that keeps complexity under control.

---

# 43. Clean CLI and Automation Scripts

Scripts also deserve clean design.

## 43.1 Avoid everything at module level

Bad:

```python
import requests

url = input("URL: ")
response = requests.get(url)
print(response.text)
```

Better:

```python
def fetch_page(url: str) -> str:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    return response.text


def main() -> int:
    url = input("URL: ").strip()
    content = fetch_page(url)
    print(content)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

## 43.2 Why `main()` helps

It:

- makes code import-safe;
- improves testing;
- provides a clear entry point;
- reduces global state.

## 43.3 Return meaningful exit codes

```python
def main() -> int:
    try:
        run_job()
    except ConfigurationError as exc:
        logger.error("%s", exc)
        return 2
    except JobError as exc:
        logger.error("%s", exc)
        return 1

    return 0
```

## 43.4 Separate CLI parsing from business logic

CLI:

```python
args = parser.parse_args()
result = service.run(args.source, args.destination)
```

Business service should not know about `argparse.Namespace`.

## 43.5 Make automation idempotent where possible

If a job runs twice, will it:

- duplicate records?
- send duplicate emails?
- overwrite good output?
- corrupt state?

Design rerunnable automation whenever practical.

---

# 44. Code Review Standards

A code review is not a formatting contest.

Mechanical checks should be automated.

Humans should focus on:

- correctness;
- clarity;
- design;
- security;
- failure handling;
- tests;
- domain rules;
- maintainability.

## 44.1 Review questions

### Intent

- Is the purpose of the change clear?
- Does the code match the requirement?

### Names

- Do names reveal domain meaning?
- Are booleans clear?
- Are units obvious?

### Functions

- Does each function have a coherent responsibility?
- Is nesting reasonable?
- Are side effects visible?

### Errors

- Are expected failures handled?
- Are errors actionable?
- Is exception context preserved?

### Types and data

- Are invalid states easy or hard to represent?
- Are return types consistent?
- Are raw dictionaries spreading through the system unnecessarily?

### Security

- Is untrusted input validated?
- Are secrets protected?
- Are queries parameterized?
- Is shell execution safe?

### Tests

- Are important behaviors tested?
- Are failure cases tested?
- Are tests coupled too tightly to implementation?

### Operations

- Are logs useful?
- Is configuration externalized?
- Could retrying create duplicates?
- Are resources cleaned up?

## 44.2 Review comments should be actionable

Less useful:

> This is bad.

Better:

> Could we extract the eligibility rule into `customer.is_eligible_for_credit()`? It appears in three places and currently has slightly different conditions.

---

# 45. Legacy Code Cleanup Strategy

Legacy systems often cannot be rewritten safely.

Use incremental improvement.

## 45.1 Step 1 — Understand behavior

Before changing the code:

- identify entry points;
- trace important data flow;
- inspect production logs;
- understand integrations;
- identify business-critical behavior.

## 45.2 Step 2 — Add characterization tests

A characterization test documents what the system currently does, even if the behavior is imperfect.

Example:

```python
def test_legacy_invoice_total_behavior():
    invoice = legacy_fixture()

    result = calculate_total(invoice)

    assert result == Decimal("1180.00")
```

## 45.3 Step 3 — Create seams

A seam is a place where behavior can be replaced or isolated.

Example:

Before:

```python
def process():
    response = requests.get(PROD_URL)
```

After:

```python
def process(client: ExternalClient):
    response = client.fetch()
```

Now the network dependency is replaceable in tests.

## 45.4 Step 4 — Rename aggressively but safely

Legacy names such as:

```python
x
flg
data1
tmp2
proc_inv
```

increase maintenance cost.

Rename based on proven meaning.

## 45.5 Step 5 — Extract one responsibility at a time

Do not redesign the whole system during one bug fix.

## 45.6 Step 6 — Remove duplication after understanding it

Two code blocks may look identical but implement subtly different business rules.

Confirm behavior before consolidating.

## 45.7 Step 7 — Add boundaries around external systems

Wrap:

- old database calls;
- legacy HTTP clients;
- filesystem conventions;
- global configuration.

This protects new code from legacy details.

---

# 46. Real-World Refactoring Case Studies

## Case Study 1 — Invoice Approval

### Problem

Original code:

```python
def approve_invoice(invoice, user, db, email):
    if invoice.status == "pending":
        if user.role == "manager" or user.role == "finance":
            if invoice.amount > 0:
                invoice.status = "approved"
                db.save(invoice)
                email.send(
                    user.email,
                    "Approved"
                )
                return True
    return False
```

Problems:

- deep nesting;
- raw role strings;
- mixed authorization, domain behavior, persistence, and notification;
- boolean return says little about failure.

### Refactor 1 — guard clauses

```python
def approve_invoice(invoice, user, db, email):
    if invoice.status != "pending":
        return False

    if user.role not in {"manager", "finance"}:
        return False

    if invoice.amount <= 0:
        return False

    invoice.status = "approved"
    db.save(invoice)
    email.send(user.email, "Approved")
    return True
```

Better, but responsibilities remain mixed.

### Refactor 2 — domain behavior

```python
class Invoice:
    def approve(self) -> None:
        if self.status is not InvoiceStatus.PENDING:
            raise InvalidInvoiceStateError()

        if self.amount <= 0:
            raise InvalidInvoiceAmountError()

        self.status = InvoiceStatus.APPROVED
```

### Refactor 3 — authorization policy

```python
class InvoiceApprovalPolicy:
    APPROVER_ROLES = {
        Role.MANAGER,
        Role.FINANCE,
    }

    def ensure_can_approve(self, user: User) -> None:
        if user.role not in self.APPROVER_ROLES:
            raise PermissionError("User cannot approve invoices")
```

### Refactor 4 — application service

```python
class ApproveInvoice:
    def __init__(
        self,
        repository: InvoiceRepository,
        policy: InvoiceApprovalPolicy,
        notifier: ApprovalNotifier,
    ) -> None:
        self._repository = repository
        self._policy = policy
        self._notifier = notifier

    def execute(
        self,
        invoice_id: int,
        actor: User,
    ) -> Invoice:
        invoice = self._repository.get(invoice_id)

        if invoice is None:
            raise InvoiceNotFoundError(invoice_id)

        self._policy.ensure_can_approve(actor)
        invoice.approve()
        self._repository.save(invoice)
        self._notifier.invoice_approved(invoice, actor)

        return invoice
```

Now each concern has a clear location.

---

## Case Study 2 — CSV Employee Import

### Initial version

```python
def import_employees(path):
    file = open(path)
    rows = file.readlines()
    for row in rows[1:]:
        p = row.split(",")
        if len(p) >= 4:
            if "@" in p[2]:
                db.insert(p[0], p[1], p[2], p[3])
    file.close()
```

Problems:

- manual CSV parsing;
- global database dependency;
- no encoding;
- no error reporting;
- invalid rows silently ignored;
- file cleanup risk;
- index-based data;
- hard to test.

### Better version

```python
import csv
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class EmployeeRow:
    employee_id: str
    name: str
    email: str
    department: str


def parse_employee_row(row: dict[str, str]) -> EmployeeRow:
    employee_id = row["employee_id"].strip()
    name = row["name"].strip()
    email = row["email"].strip().lower()
    department = row["department"].strip()

    if not employee_id:
        raise ValueError("employee_id is required")

    if "@" not in email:
        raise ValueError(f"Invalid email: {email}")

    return EmployeeRow(
        employee_id=employee_id,
        name=name,
        email=email,
        department=department,
    )


def read_employee_rows(path: Path):
    with path.open(
        newline="",
        encoding="utf-8",
    ) as file:
        yield from csv.DictReader(file)
```

Application service:

```python
def import_employees(
    path: Path,
    repository: EmployeeRepository,
) -> ImportSummary:
    imported = 0
    failed = 0

    for raw_row in read_employee_rows(path):
        try:
            employee = parse_employee_row(raw_row)
            repository.save(employee)
            imported += 1
        except ValueError:
            failed += 1
            logger.exception("Invalid employee row")

    return ImportSummary(
        imported=imported,
        failed=failed,
    )
```

The behavior is now observable and testable.

---

## Case Study 3 — Payment Retry Logic

### Bad

```python
def pay(order):
    for i in range(3):
        try:
            return gateway.charge(order.total)
        except:
            time.sleep(5)
    return None
```

Problems:

- retries all errors;
- bare exception;
- fixed delay;
- magic values;
- failure returns ambiguous `None`;
- blocks blindly;
- no logging.

### Better

```python
MAX_PAYMENT_ATTEMPTS = 3
RETRY_DELAY_SECONDS = 2


def charge_with_retry(
    gateway: PaymentGateway,
    amount: Decimal,
) -> Payment:
    for attempt in range(1, MAX_PAYMENT_ATTEMPTS + 1):
        try:
            return gateway.charge(amount)
        except TemporaryGatewayError as exc:
            if attempt == MAX_PAYMENT_ATTEMPTS:
                raise PaymentFailedError(
                    "Payment gateway unavailable after retries"
                ) from exc

            logger.warning(
                "Temporary payment failure; retrying",
                extra={"attempt": attempt},
            )
            time.sleep(RETRY_DELAY_SECONDS)

    raise AssertionError("Unreachable")
```

A production system might use exponential backoff, jitter, idempotency keys, and a retry library, but the structure remains explicit.

---

## Case Study 4 — Report Generation

### Bad

```python
def generate(data, t):
    if t == 1:
        ...
    elif t == 2:
        ...
    elif t == 3:
        ...
```

### Better with explicit format enum

```python
from enum import Enum


class ReportFormat(str, Enum):
    PDF = "pdf"
    CSV = "csv"
    XLSX = "xlsx"
```

Factory:

```python
def get_report_exporter(
    format_: ReportFormat,
) -> ReportExporter:
    exporters = {
        ReportFormat.PDF: PdfExporter(),
        ReportFormat.CSV: CsvExporter(),
        ReportFormat.XLSX: ExcelExporter(),
    }

    return exporters[format_]
```

Usage:

```python
exporter = get_report_exporter(ReportFormat.PDF)
exporter.export(report)
```

---

## Case Study 5 — User Registration

### Messy version

```python
def reg(d):
    if d.get("email"):
        if "@" in d["email"]:
            if db.find(d["email"]) is None:
                pwd = hash(d["password"])
                u = db.insert(d["email"], pwd)
                send_mail(d["email"])
                return {"ok": 1, "u": u}
    return {"ok": 0}
```

### Clean boundary model

```python
@dataclass(frozen=True)
class RegisterUser:
    email: EmailAddress
    password: str
```

### Domain/application service

```python
class RegistrationService:
    def __init__(
        self,
        users: UserRepository,
        password_hasher: PasswordHasher,
        notifier: UserNotifier,
    ) -> None:
        self._users = users
        self._password_hasher = password_hasher
        self._notifier = notifier

    def register(self, command: RegisterUser) -> User:
        existing = self._users.find_by_email(command.email)

        if existing is not None:
            raise DuplicateUserError(command.email)

        password_hash = self._password_hasher.hash(
            command.password
        )

        user = User.register(
            email=command.email,
            password_hash=password_hash,
        )

        self._users.save(user)
        self._notifier.welcome(user)

        return user
```

Benefits:

- clear dependencies;
- domain concepts are named;
- duplicates have explicit error behavior;
- hashing is replaceable and testable;
- email is not mixed into persistence.

---

# 47. Production Readiness Checklist

Use this before deployment.

## Application behavior

- [ ] Inputs are validated at system boundaries.
- [ ] Important domain rules are centralized.
- [ ] Error behavior is intentional.
- [ ] Critical operations are idempotent where needed.
- [ ] Timeouts are configured for external calls.
- [ ] Retries are limited and apply only to retryable failures.
- [ ] Resource cleanup is guaranteed.

## Security

- [ ] No secrets are hard-coded.
- [ ] SQL/query parameters are safely bound.
- [ ] Shell execution does not interpolate untrusted input.
- [ ] File paths and uploads are validated.
- [ ] Sensitive values are not logged.
- [ ] Dependencies are reviewed and updated.
- [ ] Service accounts follow least privilege.

## Observability

- [ ] Important operations have useful logs.
- [ ] Exceptions include actionable context.
- [ ] Correlation/request identifiers exist where useful.
- [ ] Metrics exist for important system health and business events.
- [ ] Health checks represent actual dependency health appropriately.

## Configuration

- [ ] Required settings are validated at startup.
- [ ] Development and production settings are separated safely.
- [ ] Secret values use an appropriate secret store or environment mechanism.
- [ ] Default values are safe.

## Testing

- [ ] Core business rules have unit tests.
- [ ] Failure paths have tests.
- [ ] Critical integrations have integration tests.
- [ ] Tests do not require production services.
- [ ] Deployment-sensitive behavior is covered.

## Operations

- [ ] Database migrations are reviewed.
- [ ] Rollback or recovery strategy exists.
- [ ] Scheduled jobs are safe to retry where practical.
- [ ] External-call timeouts are present.
- [ ] Capacity/performance risks are understood.
- [ ] Alerts are actionable rather than noisy.

---

# 48. Clean Code Checklist

Use this during everyday development.

## Naming

- [ ] Variable names reveal meaning.
- [ ] Function names describe actions.
- [ ] Boolean names read like yes/no questions.
- [ ] Units appear in names when needed.
- [ ] Domain terminology is consistent.
- [ ] Magic strings and numbers are minimized.

## Functions

- [ ] Each function has one coherent responsibility.
- [ ] Arguments are understandable.
- [ ] Return types are consistent.
- [ ] Side effects are obvious.
- [ ] Deep nesting has been reduced.
- [ ] Guard clauses are used when they improve clarity.
- [ ] Function length is justified by readability, not arbitrary rules.

## Data

- [ ] The correct data structure is used.
- [ ] Mutable global state is avoided.
- [ ] Mutable default arguments are not used accidentally.
- [ ] Important concepts have dedicated types where useful.
- [ ] Invalid states are difficult to represent where practical.

## Classes

- [ ] Classes represent cohesive concepts.
- [ ] God classes are avoided.
- [ ] Composition is preferred where inheritance adds coupling.
- [ ] Encapsulation protects invariants.
- [ ] Dependencies are explicit.

## Error handling

- [ ] Expected exceptions are handled specifically.
- [ ] Errors are not silently swallowed.
- [ ] Exception context is preserved.
- [ ] Error messages are actionable.
- [ ] Exceptions do not expose sensitive information.

## Documentation

- [ ] Comments explain why, not obvious what.
- [ ] Public APIs have useful docstrings when needed.
- [ ] Complex business rules are documented.
- [ ] README/setup instructions are current.
- [ ] Dead commented-out code is removed.

## Testing

- [ ] Business behavior is tested.
- [ ] Edge cases are tested.
- [ ] Failure cases are tested.
- [ ] Tests are readable.
- [ ] Tests are not overly coupled to implementation.
- [ ] External services are isolated appropriately.

## Security

- [ ] Secrets are externalized.
- [ ] Inputs are validated.
- [ ] Queries are parameterized.
- [ ] Shell calls are safe.
- [ ] Paths are validated.
- [ ] Sensitive data is not unnecessarily stored or logged.

## Performance

- [ ] Performance changes are based on measurement.
- [ ] Data structures fit usage patterns.
- [ ] Large data is streamed when useful.
- [ ] Repeated expensive work is avoided.
- [ ] Caching has a clear invalidation strategy.

---

# 49. Suggested Learning Roadmap

## Stage 1 — Foundations

Learn:

- naming;
- variables;
- conditionals;
- loops;
- functions;
- exceptions;
- modules;
- PEP-style formatting.

Practice:

- small calculators;
- file-processing scripts;
- validation functions;
- simple command-line tools.

## Stage 2 — Intermediate Clean Python

Learn:

- type hints;
- dataclasses;
- enums;
- generators;
- decorators;
- context managers;
- logging;
- configuration;
- testing.

Practice:

- CSV importer;
- invoice calculator;
- CLI backup tool;
- REST API client;
- log analyzer.

## Stage 3 — Object Design

Learn:

- encapsulation;
- composition;
- SOLID;
- protocols;
- dependency injection;
- value objects;
- repositories;
- services.

Practice:

- order management;
- employee onboarding;
- invoice approval;
- payment workflow.

## Stage 4 — Production Engineering

Learn:

- database boundaries;
- API design;
- concurrency;
- security;
- profiling;
- observability;
- retries;
- idempotency;
- configuration management.

Practice:

- production-style API;
- asynchronous data collector;
- queue consumer;
- scheduled job;
- database-backed service.

## Stage 5 — Architecture and Refactoring

Learn:

- modular design;
- dependency direction;
- clean architecture;
- design patterns;
- code smells;
- legacy refactoring;
- testing seams.

Practice:

- take a messy project and improve it in small commits;
- add characterization tests first;
- split responsibilities;
- isolate infrastructure;
- document architectural decisions.

---

# 50. Practice Exercises

## Exercise 1 — Naming cleanup

Refactor:

```python
def p(a, b, c):
    if c:
        return a * b * 0.9
    return a * b
```

Goals:

- rename variables;
- remove magic values;
- clarify boolean meaning;
- add useful types.

---

## Exercise 2 — Guard clauses

Refactor:

```python
def approve(user, invoice):
    if user:
        if user.active:
            if invoice:
                if invoice.status == "pending":
                    return True
    return False
```

Goals:

- reduce nesting;
- name the rule;
- decide whether booleans or exceptions fit the use case.

---

## Exercise 3 — Mutable default

Find and fix the bug:

```python
def collect(value, values=[]):
    values.append(value)
    return values
```

Explain why the bug happens.

---

## Exercise 4 — Separate I/O from logic

Refactor:

```python
def average_from_file(path):
    values = [
        int(line)
        for line in open(path)
    ]
    return sum(values) / len(values)
```

Goals:

- safe file handling;
- parsing;
- validation;
- empty-file behavior;
- testable calculation.

---

## Exercise 5 — Error handling

Refactor:

```python
def load_config(path):
    try:
        return json.load(open(path))
    except:
        return {}
```

Questions:

- Which failures are expected?
- Should missing configuration be fatal?
- Should malformed JSON be treated differently?
- How will operations know what went wrong?

---

## Exercise 6 — Domain model

Create a `BankAccount` that guarantees:

- balance cannot become negative;
- deposits must be positive;
- withdrawals must be positive;
- insufficient funds raise a meaningful exception.

Add tests.

---

## Exercise 7 — Strategy pattern

Build a discount engine with:

- regular customer;
- premium customer;
- employee customer.

Then add a fourth policy without modifying the checkout service.

---

## Exercise 8 — Repository

Create an in-memory repository and a database-backed repository that both support:

```python
get(invoice_id)
save(invoice)
```

The business service should work with either.

---

## Exercise 9 — Logging

Take a script full of `print()` calls and classify each message as:

- debug;
- info;
- warning;
- error.

Add context such as record IDs without logging sensitive values.

---

## Exercise 10 — Legacy refactor

Start from:

```python
def run(d, flag, x):
    if flag == 1:
        for i in d:
            if i["s"] == 0:
                i["s"] = 1
                db.save(i)
                send(i["e"])
```

Refactor in several small steps:

1. rename identifiers;
2. replace magic values;
3. extract eligibility rule;
4. isolate persistence;
5. isolate notification;
6. add tests;
7. replace raw dictionaries with structured data.

---

# 51. Glossary

## Abstraction

A simplified interface that hides unnecessary implementation details.

## Cohesion

How strongly the responsibilities inside a module/class/function belong together.

High cohesion is usually desirable.

## Coupling

How strongly one component depends on another.

Lower unnecessary coupling improves changeability.

## Dependency Injection

Supplying a dependency from outside rather than constructing it internally.

## Domain

The business problem area your software models.

Examples:

- invoicing;
- payroll;
- logistics;
- banking.

## Entity

An object primarily identified by identity over time.

Example: an `Invoice` with invoice ID 123.

## Value Object

An object identified by its values rather than identity.

Examples:

- money;
- email address;
- coordinates.

## Side Effect

A behavior beyond returning a value.

Examples:

- writing a file;
- updating a database;
- sending an HTTP request;
- mutating shared state.

## Pure Function

A function whose result depends only on its inputs and that has no externally visible side effects.

## Idempotency

The property that performing an operation repeatedly has the same intended effect as performing it once.

Important for:

- retries;
- payments;
- webhooks;
- scheduled jobs.

## Invariant

A condition that must always remain true for an object or system.

Example:

> An account balance must never be negative.

## Guard Clause

An early return or exception that handles an invalid or exceptional condition before the main path.

## Refactoring

Improving internal code structure without intentionally changing observable behavior.

## Code Smell

A structural signal that code may have a deeper maintainability problem.

## Protocol

A Python typing construct describing required behavior without requiring inheritance from a shared concrete base class.

## Repository

An abstraction that provides collection-like access to domain objects while hiding persistence details.

## Service

A component containing a coherent operation or capability that does not naturally belong to one entity/value object.

## Adapter

A component that translates one interface into another.

## Factory

A function or object responsible for creating other objects, often hiding construction details.

## Strategy

An interchangeable implementation of a behavior or policy.

---

# 52. Final Principles to Remember

If you remember only a small number of ideas from this handbook, remember these:

1. **Optimize for the next reader.**
2. **Use names to reveal intent.**
3. **Keep responsibilities cohesive.**
4. **Make dependencies and side effects visible.**
5. **Prefer simple control flow.**
6. **Validate data at boundaries.**
7. **Model important domain concepts explicitly.**
8. **Use exceptions intentionally, not blindly.**
9. **Automate formatting and mechanical checks.**
10. **Write tests around important behavior.**
11. **Measure before optimizing.**
12. **Treat security and operations as code-quality concerns.**
13. **Prefer composition when inheritance creates unnecessary coupling.**
14. **Refactor in small, safe steps.**
15. **Do not abstract merely to look sophisticated.**
16. **Do not compress code until meaning disappears.**
17. **Make invalid states difficult to represent where practical.**
18. **Keep infrastructure details away from core business rules when the project is large enough to benefit.**
19. **Delete dead code instead of preserving it as comments.**
20. **Clean code is contextual: clarity beats dogma.**

---

# Appendix A — Before and After Mini Examples

## A.1 Membership

Bad:

```python
if role == "admin" or role == "manager" or role == "auditor":
    ...
```

Good:

```python
ALLOWED_ROLES = {"admin", "manager", "auditor"}

if role in ALLOWED_ROLES:
    ...
```

## A.2 Dictionary access

Verbose:

```python
if "email" in payload:
    email = payload["email"]
else:
    email = None
```

Clean:

```python
email = payload.get("email")
```

Use direct indexing when the key is mandatory:

```python
email = payload["email"]
```

This fails fast if the required field is missing.

## A.3 Index loops

Bad:

```python
for i in range(len(users)):
    print(i, users[i].name)
```

Good:

```python
for index, user in enumerate(users):
    print(index, user.name)
```

## A.4 Parallel iteration

Bad:

```python
for i in range(len(names)):
    print(names[i], emails[i])
```

Good:

```python
for name, email in zip(names, emails):
    print(name, email)
```

## A.5 Swap values

Unnecessary temporary variable:

```python
temp = left
left = right
right = temp
```

Pythonic:

```python
left, right = right, left
```

## A.6 Defaulting

Potentially incorrect:

```python
name = value or "Unknown"
```

This treats `""`, `0`, `False`, and `None` the same.

When only `None` means missing:

```python
name = "Unknown" if value is None else value
```

## A.7 Sorting

Bad:

```python
users.sort(key=lambda u: u[1])
```

when user objects exist.

Good:

```python
users.sort(key=lambda user: user.last_name)
```

## A.8 Dictionary creation

Verbose:

```python
users_by_id = {}

for user in users:
    users_by_id[user.id] = user
```

Good:

```python
users_by_id = {
    user.id: user
    for user in users
}
```

## A.9 Resource safety

Bad:

```python
file = open(path)
data = file.read()
file.close()
```

Good:

```python
with open(path, encoding="utf-8") as file:
    data = file.read()
```

## A.10 Path handling

Less expressive:

```python
path = base_dir + "/" + filename
```

Better:

```python
path = Path(base_dir) / filename
```

---

# Appendix B — A Sample Clean Python Feature

This example combines many principles.

## Requirement

Create an invoice only when:

- invoice number is present;
- amount is positive;
- invoice number is unique;
- vendor exists.

After creation:

- save invoice;
- publish an audit event.

## Domain

```python
from dataclasses import dataclass
from decimal import Decimal


class InvalidInvoiceError(Exception):
    pass


@dataclass
class Invoice:
    invoice_number: str
    vendor_id: int
    amount: Decimal

    @classmethod
    def create(
        cls,
        invoice_number: str,
        vendor_id: int,
        amount: Decimal,
    ) -> "Invoice":
        invoice_number = invoice_number.strip()

        if not invoice_number:
            raise InvalidInvoiceError(
                "Invoice number is required"
            )

        if amount <= 0:
            raise InvalidInvoiceError(
                "Invoice amount must be positive"
            )

        return cls(
            invoice_number=invoice_number,
            vendor_id=vendor_id,
            amount=amount,
        )
```

## Ports

```python
from typing import Protocol


class InvoiceRepository(Protocol):
    def exists_by_number(
        self,
        invoice_number: str,
    ) -> bool:
        ...

    def save(self, invoice: Invoice) -> None:
        ...


class VendorRepository(Protocol):
    def exists(self, vendor_id: int) -> bool:
        ...


class AuditPublisher(Protocol):
    def invoice_created(
        self,
        invoice: Invoice,
    ) -> None:
        ...
```

## Application service

```python
class DuplicateInvoiceError(Exception):
    pass


class VendorNotFoundError(Exception):
    pass


class CreateInvoiceService:
    def __init__(
        self,
        invoices: InvoiceRepository,
        vendors: VendorRepository,
        audit: AuditPublisher,
    ) -> None:
        self._invoices = invoices
        self._vendors = vendors
        self._audit = audit

    def create(
        self,
        *,
        invoice_number: str,
        vendor_id: int,
        amount: Decimal,
    ) -> Invoice:
        if self._invoices.exists_by_number(invoice_number):
            raise DuplicateInvoiceError(invoice_number)

        if not self._vendors.exists(vendor_id):
            raise VendorNotFoundError(vendor_id)

        invoice = Invoice.create(
            invoice_number=invoice_number,
            vendor_id=vendor_id,
            amount=amount,
        )

        self._invoices.save(invoice)
        self._audit.invoice_created(invoice)

        return invoice
```

## Unit test

```python
def test_create_invoice():
    invoices = InMemoryInvoiceRepository()
    vendors = InMemoryVendorRepository(existing_ids={10})
    audit = InMemoryAuditPublisher()

    service = CreateInvoiceService(
        invoices=invoices,
        vendors=vendors,
        audit=audit,
    )

    invoice = service.create(
        invoice_number="INV-1001",
        vendor_id=10,
        amount=Decimal("1500.00"),
    )

    assert invoice.invoice_number == "INV-1001"
    assert invoices.exists_by_number("INV-1001")
    assert audit.created_invoices == [invoice]
```

## Why this design is clean

It has:

- meaningful names;
- clear business rules;
- validation near the domain;
- explicit dependencies;
- testable behavior;
- infrastructure-independent application logic;
- meaningful exceptions;
- no global state;
- no hidden database access.

---

# Appendix C — Recommended Personal Rules for Daily Python Work

Use these as a practical default:

1. Run a formatter automatically.
2. Run a linter automatically.
3. Type important application boundaries.
4. Write tests before or alongside risky changes.
5. Never commit secrets.
6. Prefer `pathlib` over manual path concatenation.
7. Prefer context managers for resource ownership.
8. Avoid bare `except`.
9. Avoid mutable default arguments.
10. Do not hide business rules in anonymous booleans or magic values.
11. Keep I/O separate from calculations where practical.
12. Use enums for important finite states.
13. Use dataclasses/value objects for structured domain data.
14. Keep public APIs small.
15. Make external calls use timeouts.
16. Design retries intentionally.
17. Avoid `eval()` and unsafe deserialization of untrusted input.
18. Treat logs as production interfaces.
19. Review for readability after the code works.
20. Leave the codebase slightly cleaner than you found it.

---

# Appendix D — Suggested Mastery Projects

## Project 1 — Clean Expense Tracker

Practice:

- dataclasses;
- validation;
- file persistence;
- testing;
- CLI design;
- reporting.

Features:

- add expense;
- categorize expense;
- monthly summary;
- export CSV;
- validation errors;
- unit tests.

## Project 2 — Invoice Processing Service

Practice:

- domain modeling;
- repository pattern;
- strategy pattern;
- logging;
- configuration;
- API boundaries;
- testing.

Features:

- import invoice;
- validate vendor;
- detect duplicates;
- calculate tax;
- approval workflow;
- audit log.

## Project 3 — REST API Client

Practice:

- HTTP boundary design;
- retries;
- timeouts;
- adapters;
- exceptions;
- typed models.

Features:

- authentication;
- paginated fetch;
- retry transient failures;
- cache optional results;
- transform API payloads.

## Project 4 — Batch File Processor

Practice:

- generators;
- streaming;
- pathlib;
- error reporting;
- concurrency.

Features:

- scan folder;
- validate files;
- process in batches;
- quarantine invalid files;
- generate summary report.

## Project 5 — Clean Architecture E-Commerce Backend

Practice:

- entities;
- value objects;
- repositories;
- dependency injection;
- application services;
- integration tests;
- database transactions;
- API endpoints.

Features:

- customers;
- products;
- carts;
- orders;
- payments;
- inventory;
- shipping;
- notifications.

---

# Closing Note

Clean coding is not the art of making every function tiny, every class abstract, or every project architecturally perfect.

It is the discipline of making software easier to understand and safer to change.

When deciding between two implementations, ask:

> **Which version makes the correct behavior easiest to see, easiest to test, and hardest to misuse?**

That question will guide you better than almost any rigid rule.


---

# Appendix E — Python-Specific Clean-Code Traps

These are common sources of bugs even in otherwise readable Python.

## E.1 `is` vs `==`

Use `is` for object identity, especially `None`.

Good:

```python
if result is None:
    ...
```

Use `==` for value equality.

```python
if status == "approved":
    ...
```

Do not write:

```python
if status is "approved":
    ...
```

Two equal strings are not guaranteed to be the same object.

---

## E.2 Truthiness vs explicit checks

Python treats these as falsey:

- `None`
- `False`
- numeric zero
- empty strings
- empty collections

This is useful:

```python
if not users:
    return []
```

But it can be wrong when `0`, `False`, and `None` mean different things.

Risky:

```python
timeout = supplied_timeout or 30
```

If `0` is a valid timeout, it gets replaced.

Better:

```python
timeout = (
    30
    if supplied_timeout is None
    else supplied_timeout
)
```

---

## E.3 Mutable dataclass defaults

Bad:

```python
from dataclasses import dataclass


@dataclass
class Order:
    items: list[str] = []
```

The mutable value would be shared.

Good:

```python
from dataclasses import dataclass, field


@dataclass
class Order:
    items: list[str] = field(default_factory=list)
```

---

## E.4 Shallow vs deep copies

This:

```python
copy_of_rows = rows.copy()
```

copies the outer list, not nested mutable objects.

Example:

```python
rows = [["A"], ["B"]]
copy_of_rows = rows.copy()

copy_of_rows[0].append("X")

print(rows)
# [["A", "X"], ["B"]]
```

Use `copy.deepcopy()` only when deep-copy semantics are actually needed.

Often, immutable data or explicit reconstruction is cleaner than relying on deep copies.

---

## E.5 Late binding in closures

Surprising:

```python
functions = []

for number in range(3):
    functions.append(lambda: number)

print([func() for func in functions])
# [2, 2, 2]
```

The lambda looks up `number` when called.

One explicit fix:

```python
functions = []

for number in range(3):
    functions.append(
        lambda value=number: value
    )
```

Avoid clever closure tricks when a normal function or data structure is clearer.

---

## E.6 Generator exhaustion

A generator is consumed as it is iterated.

```python
values = (number * 2 for number in range(3))

print(list(values))
# [0, 2, 4]

print(list(values))
# []
```

If data must be reused multiple times, materialize it:

```python
values = [
    number * 2
    for number in range(3)
]
```

---

## E.7 Floating-point money calculations

Binary floating point is not ideal for exact decimal money.

Risky:

```python
total = 0.1 + 0.2
```

For financial amounts:

```python
from decimal import Decimal

total = Decimal("0.1") + Decimal("0.2")
```

Important: construct `Decimal` from strings when exact decimal input matters.

Prefer:

```python
Decimal("0.1")
```

rather than:

```python
Decimal(0.1)
```

---

## E.8 Chained comparisons

Python supports clear mathematical comparisons:

```python
if 0 < percentage <= 100:
    ...
```

Prefer this to:

```python
if percentage > 0 and percentage <= 100:
    ...
```

---

## E.9 Membership instead of repeated equality

Bad:

```python
if status == "pending" or status == "queued" or status == "retry":
    ...
```

Good:

```python
if status in {"pending", "queued", "retry"}:
    ...
```

---

## E.10 `dict.get()` can hide missing required data

This:

```python
email = payload.get("email")
```

is good if email is optional.

If email is mandatory, direct access can reveal malformed input earlier:

```python
email = payload["email"]
```

Then translate `KeyError` at the input boundary or validate explicitly.

---

## E.11 Avoid excessive chained calls

Hard to debug:

```python
result = service.load().normalize().validate().transform().save()
```

If each step is substantial or can fail, intermediate names may improve clarity:

```python
raw_data = service.load()
normalized_data = normalize(raw_data)
validated_data = validate(normalized_data)
result = transform(validated_data)

repository.save(result)
```

---

## E.12 `for ... else`

Python's loop `else` can be elegant but unfamiliar.

Example:

```python
for user in users:
    if user.id == target_id:
        found_user = user
        break
else:
    found_user = None
```

This is valid Python, but use it only when your team finds it readable.

Sometimes this is clearer:

```python
found_user = next(
    (
        user
        for user in users
        if user.id == target_id
    ),
    None,
)
```

Or a normal helper function.

---

## E.13 EAFP vs LBYL

Python often favors **EAFP**:

> Easier to Ask Forgiveness than Permission.

Example:

```python
try:
    value = mapping[key]
except KeyError:
    ...
```

**LBYL** means:

> Look Before You Leap.

```python
if key in mapping:
    value = mapping[key]
```

Neither is always better.

Use EAFP when:

- the operation is normally expected to succeed;
- the exception is specific;
- checking first would duplicate work or introduce race conditions.

Use LBYL when:

- the condition is expected frequently;
- the check expresses a business rule;
- exceptions would obscure normal control flow.

---

## E.14 `getattr()` and dynamic programming

Dynamic access:

```python
value = getattr(obj, field_name)
```

can be useful in framework or generic code.

But do not replace simple explicit code with dynamic tricks.

Bad:

```python
for name in ["name", "email", "phone"]:
    setattr(user, name, payload[name])
```

when fields have different validation rules.

Explicit business assignments may be safer.

---

## E.15 Monkey patching

Changing classes/functions at runtime can be useful in tests and frameworks but makes production behavior harder to trace.

Prefer:

- dependency injection;
- adapters;
- protocols;
- explicit configuration.

Use monkey patching narrowly and intentionally.

---

## E.16 Dunder methods

Special methods such as:

```python
__str__
__repr__
__eq__
__hash__
__iter__
__enter__
__exit__
```

let custom objects behave naturally in Python.

Example:

```python
@dataclass(frozen=True)
class EmployeeId:
    value: int

    def __str__(self) -> str:
        return f"EMP-{self.value:05d}"
```

Do not call most dunder methods directly.

Prefer:

```python
str(employee_id)
```

rather than:

```python
employee_id.__str__()
```

---

## E.17 `__repr__` should help debugging

Example:

```python
class Job:
    def __repr__(self) -> str:
        return (
            f"Job(id={self.id!r}, "
            f"status={self.status!r})"
        )
```

Never expose secrets in `__repr__`.

---

## E.18 Equality and hashing

If objects are used as dictionary keys or set members, equality and hashing semantics matter.

Immutable value objects are often good candidates:

```python
@dataclass(frozen=True)
class ProductCode:
    value: str
```

Be cautious with mutable hashable objects.

Changing data used to calculate a hash can break collection behavior.

---

## E.19 Enums for finite states

Instead of raw strings:

```python
status = "approved"
```

Use:

```python
from enum import Enum


class ApprovalStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
```

Benefits:

- typo prevention;
- discoverability;
- centralized vocabulary;
- better type checking.

---

## E.20 Structural pattern matching

`match` can be clean for genuine structural variants.

Example:

```python
def describe_status(status: InvoiceStatus) -> str:
    match status:
        case InvoiceStatus.PENDING:
            return "Waiting for approval"
        case InvoiceStatus.APPROVED:
            return "Approved"
        case InvoiceStatus.REJECTED:
            return "Rejected"
```

Do not convert every short `if/elif` chain into `match`.

Use it when it communicates structure more clearly.

---

## E.21 Named tuples vs dataclasses

A lightweight immutable record can use `NamedTuple`:

```python
from typing import NamedTuple


class Coordinate(NamedTuple):
    latitude: float
    longitude: float
```

Choose a dataclass when you need:

- richer methods;
- custom validation;
- defaults;
- mutable or frozen semantics;
- inheritance/customization.

---

## E.22 `TypedDict` for dictionary-shaped boundaries

When external data naturally remains dictionary-shaped:

```python
from typing import TypedDict


class UserPayload(TypedDict):
    name: str
    email: str
```

This improves static analysis without forcing a class everywhere.

For important internal domain concepts, a dataclass or dedicated object may be stronger.

---

## E.23 Abstract base classes vs protocols

Use an abstract base class when:

- shared inheritance semantics matter;
- common implementation belongs in the base;
- runtime subtype relationships are important.

Use a protocol when:

- only behavior matters;
- structural typing is desirable;
- implementations should remain loosely coupled.

---

## E.24 `@staticmethod` and `@classmethod`

Use `@classmethod` when behavior concerns class-level construction or alternate constructors:

```python
@dataclass
class User:
    email: str

    @classmethod
    def from_payload(cls, payload: dict[str, str]) -> "User":
        return cls(email=payload["email"].strip().lower())
```

Use `@staticmethod` when a function conceptually belongs in a class namespace but needs neither `self` nor `cls`.

If it does not meaningfully belong to the class, a module-level function is often cleaner.

---

## E.25 Properties should not hide expensive surprises

A property looks like cheap attribute access:

```python
customer.balance
```

Avoid properties that secretly:

- perform network calls;
- run expensive database queries;
- mutate state;
- trigger major calculations.

Make expensive behavior explicit:

```python
customer_service.load_balance(customer.id)
```

---

## E.26 Do not rely on destructor cleanup

`__del__` timing can be difficult to reason about.

Prefer context managers for important cleanup.

```python
with resource:
    ...
```

---

## E.27 `assert` is not input validation

Bad:

```python
def withdraw(amount):
    assert amount > 0
```

Assertions can be disabled and are intended primarily for programmer assumptions.

Use:

```python
if amount <= 0:
    raise ValueError("amount must be positive")
```

Use assertions for internal invariants that truly indicate programming errors.

---

## E.28 `None` as a meaningful state

Do not automatically use `None` for every failure.

Ask what `None` means.

Good:

```python
def find_user(user_id: int) -> User | None:
    ...
```

Absence is expected.

For business rejection, a meaningful exception/result type may be clearer.

---

## E.29 Beware broad utility classes

Python does not need Java-style "static utility classes."

Instead of:

```python
class StringUtils:
    @staticmethod
    def normalize_email(value):
        ...
```

Prefer:

```python
def normalize_email(value: str) -> str:
    ...
```

inside a focused module such as `emails.py`.

---

## E.30 Avoid unnecessary getters/setters

Over-engineered:

```python
class User:
    def get_name(self):
        return self._name

    def set_name(self, value):
        self._name = value
```

Python usually starts with simple attributes:

```python
user.name
```

If validation becomes necessary later, a property can preserve the public access syntax.

---

# Appendix F — Formatting and Style Baseline

Formatting should reduce arguments, not create them.

## F.1 General formatting rules

A clean team baseline usually includes:

- consistent indentation;
- sensible line length;
- blank lines separating logical units;
- one statement per line;
- trailing commas in multiline structures when useful;
- automatic formatting.

Example:

```python
def calculate_invoice_total(
    subtotal: Decimal,
    tax_rate: Decimal,
    discount: Decimal,
) -> Decimal:
    taxable_amount = subtotal - discount
    tax = taxable_amount * tax_rate
    return taxable_amount + tax
```

## F.2 Avoid compressed statements

Bad:

```python
if valid: save(); notify(); return True
```

Good:

```python
if valid:
    save()
    notify()
    return True
```

## F.3 Parentheses over backslashes for continuation

Avoid:

```python
total = subtotal + \
    tax - \
    discount
```

Prefer:

```python
total = (
    subtotal
    + tax
    - discount
)
```

## F.4 Consistency beats personal preference

If the formatter chooses a valid consistent layout, accept it unless readability is materially harmed.

Spend review time on behavior rather than whitespace.

---

# Appendix G — Reusable Tooling Baseline

Tooling is intended to automate mechanical quality checks.

A practical project can combine:

- formatter;
- linter;
- static type checker;
- test runner;
- coverage;
- pre-commit hooks;
- security/dependency scanning in CI.

## G.1 Example `pyproject.toml` starting point

Treat this as a starting template and adjust it for your Python version and project needs.

```toml
[project]
name = "clean-python-example"
version = "0.1.0"
requires-python = ">=3.11"

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-ra"

[tool.coverage.run]
branch = true
source = ["src"]

[tool.coverage.report]
show_missing = true
skip_covered = true

[tool.black]
line-length = 88

[tool.ruff]
line-length = 88

[tool.mypy]
python_version = "3.11"
warn_unused_configs = true
disallow_untyped_defs = true
check_untyped_defs = true
```

For a current project, align `requires-python` and checker configuration with the Python versions you actually support.

## G.2 Example development workflow

```bash
python -m pytest
ruff check .
black --check .
mypy src
```

The exact commands depend on the tools and project setup.

## G.3 CI quality gate mindset

A pull request can automatically verify:

1. project installs successfully;
2. formatter check passes;
3. linter passes;
4. type checks pass;
5. unit tests pass;
6. integration tests pass where applicable;
7. coverage does not unexpectedly collapse;
8. security/dependency checks run;
9. build/package succeeds.

Do not make CI so slow and noisy that developers stop trusting it.

---

# Appendix H — Scenario-Based Clean-Code Guide

Use this section as a quick decision reference.

## H.1 Small one-off script

Prioritize:

- clear `main()`;
- meaningful names;
- `pathlib`;
- context managers;
- explicit errors;
- minimal dependencies.

Do **not** start with ten layers of architecture.

---

## H.2 Long-running backend service

Prioritize:

- explicit configuration;
- dependency injection;
- logging and metrics;
- service boundaries;
- timeouts;
- retries;
- idempotency;
- domain exceptions;
- database transactions;
- unit and integration tests.

---

## H.3 Data-processing pipeline

Prioritize:

- pure transformation functions;
- generators for large inputs;
- explicit schemas;
- validation at ingestion;
- rejected-record reporting;
- deterministic behavior;
- checkpoints/idempotency;
- memory awareness.

Suggested flow:

```text
read
  ↓
parse
  ↓
validate
  ↓
normalize
  ↓
transform
  ↓
persist
  ↓
report
```

Keep each stage separately testable.

---

## H.4 Automation job

Prioritize:

- rerun safety;
- explicit exit codes;
- logs;
- lock/concurrency behavior;
- failure summaries;
- timeouts;
- retries;
- config validation.

Ask:

> What happens if the scheduler runs this job twice?

---

## H.5 REST API

Prioritize:

- schema validation;
- authentication/authorization boundaries;
- thin request handlers;
- application services;
- stable response contracts;
- appropriate error mapping;
- idempotency for dangerous repeated actions;
- request IDs and observability.

---

## H.6 Third-party integration

Create an adapter around vendor-specific behavior.

Application:

```python
payment_gateway.charge(payment)
```

Adapter internally handles vendor details:

```python
vendor_client.create_charge(...)
```

Benefits:

- vendor changes are localized;
- tests do not require vendor SDK objects;
- business code uses domain language.

---

## H.7 Database-heavy reporting

Prioritize:

- readable queries;
- explicit filters;
- indexes based on measured workload;
- bounded result sets;
- streaming/pagination for large exports;
- query-count awareness;
- separation between query construction and presentation.

Do not move huge datasets into Python just to perform operations the database can perform clearly and efficiently.

---

## H.8 Financial calculations

Prioritize:

- `Decimal`;
- explicit rounding rules;
- named currency;
- auditability;
- immutable value objects;
- tests around boundary and rounding cases.

Example:

```python
from dataclasses import dataclass
from decimal import Decimal, ROUND_HALF_UP


@dataclass(frozen=True)
class Money:
    amount: Decimal
    currency: str

    def rounded(self) -> "Money":
        return Money(
            amount=self.amount.quantize(
                Decimal("0.01"),
                rounding=ROUND_HALF_UP,
            ),
            currency=self.currency,
        )
```

Use the rounding rule required by your actual business/accounting domain.

---

## H.9 Security-sensitive authentication code

Prioritize:

- established cryptographic/password libraries;
- no home-grown crypto;
- constant-time comparison where relevant;
- rate limits;
- secret management;
- audit logging without secrets;
- generic external error messages;
- detailed secure internal diagnostics.

Security-sensitive primitives should be delegated to well-reviewed libraries rather than reimplemented.

---

## H.10 File-upload processing

Prioritize:

- generated storage names;
- content/type validation;
- size limits;
- safe directory handling;
- malware/content scanning when the threat model requires it;
- processing in isolated locations;
- no execution of uploaded content;
- cleanup of temporary files.

---

## H.11 Concurrent worker

Prioritize:

- bounded concurrency;
- backpressure;
- clear cancellation;
- timeouts;
- isolated mutable state;
- idempotent message handling;
- retry/dead-letter strategy.

Avoid creating an unbounded task for every input.

---

## H.12 Shared Python library

Prioritize:

- small public API;
- semantic compatibility;
- clear type hints;
- helpful docstrings;
- predictable exceptions;
- minimal dependencies;
- no import-time side effects;
- tests across supported Python versions.

---

# Appendix I — Clean-Code Decision Framework

When you are unsure whether to refactor, ask these questions in order.

## 1. Is the code correct?

Never make code beautifully wrong.

## 2. Can a teammate understand the intent quickly?

If not:

- rename;
- simplify;
- extract;
- document the reason.

## 3. Is the business rule located where someone would expect it?

If not, move or centralize it.

## 4. Can important behavior be tested without excessive setup?

If not, inspect:

- hidden dependencies;
- global state;
- oversized responsibilities;
- direct infrastructure access.

## 5. Are failure modes explicit?

If not:

- define meaningful exceptions;
- validate boundaries;
- avoid silent fallback.

## 6. Is this abstraction paying for itself?

If not, remove it.

Every abstraction has a cost:

- another name;
- another file;
- another jump while reading;
- another contract to understand.

## 7. Would duplication or abstraction be safer?

A little duplication can be safer than prematurely coupling unrelated concepts.

Abstract when shared meaning is stable, not merely shared syntax.

## 8. Is performance actually a problem?

Measure before making readability worse.

## 9. Is the code secure at its boundaries?

Check:

- data validation;
- secrets;
- SQL;
- shell execution;
- file paths;
- serialization;
- permissions.

## 10. Can future change be localized?

If a likely business change requires edits throughout the codebase, improve the boundary now if the cost is justified.

---

# Appendix J — 30-Day Clean Python Practice Plan

## Days 1–5: Readability

Practice:

- naming;
- formatting;
- guard clauses;
- constants;
- small function extraction.

Daily task:

Take one messy 30–50 line function and make the intent clearer without changing behavior.

## Days 6–10: Data and types

Practice:

- type hints;
- dataclasses;
- enums;
- value objects;
- collection choice.

Daily task:

Replace one raw dictionary/tuple-heavy structure with a clearer model where justified.

## Days 11–15: Error handling and boundaries

Practice:

- input validation;
- custom exceptions;
- context managers;
- logging;
- configuration.

Daily task:

Choose one external boundary and make its failure behavior explicit.

## Days 16–20: Testing

Practice:

- Arrange/Act/Assert;
- parameterization;
- failure tests;
- fakes;
- integration boundaries.

Daily task:

Write tests for one business rule and one failure path.

## Days 21–25: Design

Practice:

- composition;
- SOLID;
- protocols;
- adapters;
- repositories;
- dependency injection.

Daily task:

Identify one unnecessary coupling and replace it with a clearer boundary.

## Days 26–30: Production thinking

Practice:

- timeouts;
- retries;
- security;
- profiling;
- idempotency;
- code review;
- legacy refactoring.

Final task:

Take a small application and perform a complete review using the checklists in this handbook.

---

# Appendix K — Master Review Questions

Before calling a Python feature "done", ask:

### Understanding

- Can someone understand the main path without stepping through every line?
- Do names match the business vocabulary?
- Are complex rules named?

### Design

- Are responsibilities placed in sensible units?
- Are dependencies explicit?
- Is the design simpler than the problem, or has abstraction made it harder?

### Data

- Are types and structures appropriate?
- Are invalid states controlled?
- Are mutable values shared unintentionally?

### Failures

- What can fail?
- Who handles each failure?
- Is retry appropriate?
- Are timeouts defined?
- Are errors observable?

### Security

- What input is untrusted?
- Could input become SQL, shell, HTML, a path, or executable data?
- Could logs expose secrets?
- Are permissions minimal?

### Testing

- What behavior matters most?
- What boundary cases matter?
- What happens when dependencies fail?
- Will refactoring implementation details unnecessarily break tests?

### Operations

- What will support engineers see when this fails?
- Can a failed job be retried safely?
- Can the system identify which record/request failed?
- Is configuration validated before traffic/work begins?

### Maintenance

- What is the next likely change?
- How many files would it touch?
- Is duplicated business knowledge spreading?
- Is there dead code that should be deleted?

---

**End of Clean Coding in Python — Master Handbook**
