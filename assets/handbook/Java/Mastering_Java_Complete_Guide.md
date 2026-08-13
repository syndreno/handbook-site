# Mastering Java — Complete Learning & Reference Guide

> A practical, scenario-driven Java handbook from absolute fundamentals to production-grade engineering.
>
> **Recommended baseline:** Learn the language using an LTS JDK. As of August 2026, Java 25 is the current LTS release; Java 26 is the current feature release. The core concepts in this guide are intentionally useful across Java 8, 11, 17, 21, 25, and newer releases.

---

## How to Use This Master File

Do not try to memorize Java line by line. Learn in layers:

1. **Read the concept**
2. **Type the example yourself**
3. **Change the example**
4. **Break it intentionally**
5. **Debug it**
6. **Solve a small problem without looking at the answer**
7. **Use it in a mini-project**
8. **Explain it in your own words**

A concept is not mastered because you recognize its syntax. You have mastered it when you can decide **when to use it, when not to use it, and what trade-offs it introduces**.


## The 6 Questions to Ask for Every Topic

For every Java concept in this file, train yourself to answer:

1. **What is it?**
2. **Why does Java have it?**
3. **What problem does it solve?**
4. **When should I use it?**
5. **When should I avoid it?**
6. **What common bug happens when it is misunderstood?**

If you can answer all six without reading the section, you understand the topic rather than only recognizing its syntax.

---


---


# Beginner Orientation — Words You Will See Everywhere

Before starting the chapters, become familiar with these terms. You do not need to master them yet.

| Term | Easy Meaning |
|---|---|
| Source code | Java text written by a developer |
| Compiler | Program that checks/translates source code |
| Bytecode | Intermediate instructions produced from Java source |
| JVM | Runtime that executes Java bytecode |
| JDK | Java development tools and runtime |
| Class | Blueprint/type describing data and behavior |
| Object | Actual instance of a class |
| Instance | Another word for an object created from a class |
| Variable | Named place/reference used to work with a value |
| Type | Describes what kind of value something represents |
| Method | Named reusable operation |
| Parameter | Variable declared by a method to receive input |
| Argument | Actual value supplied when calling a method |
| Return value | Result sent back by a method |
| Constructor | Logic used when creating an object |
| Interface | Contract describing behavior |
| Exception | Object representing abnormal/failure execution |
| Collection | Data structure holding multiple elements |
| Generic | Type-safe reusable code parameterized by type |
| Thread | Path of execution inside a process |
| Heap | JVM-managed memory area where ordinary objects generally live |
| Stack | Per-thread execution frames for method calls |
| Garbage collection | Automatic reclamation of unreachable object memory |
| Dependency | Another component/library that code relies on |
| API | Defined way for software components to communicate |
| Framework | Reusable application infrastructure that calls/organizes your code |
| Library | Reusable code that your application calls |
| Build tool | Tool that compiles, tests, packages, and manages dependencies |
| DTO | Data Transfer Object used to move structured data between boundaries |
| Entity | Object representing domain/persistent identity, depending on architecture |
| Repository | Abstraction used to load/save domain or persistence data |
| Service | Component that performs a coherent application/business responsibility |

## How to Read Java Code as a Beginner

When you see unfamiliar code, do not try to understand the complete line at once.

Example:

```java
List<String> activeNames =
    users.stream()
         .filter(User::isActive)
         .map(User::getName)
         .toList();
```

Break it into questions:

```text
What is the result type?        → List<String>
Where does data come from?      → users
What starts the pipeline?       → stream()
Which users remain?             → active users
What value is extracted?        → each user's name
What is returned?               → a list
```

This method of reading code scales from beginner examples to enterprise Java.

---

# Table of Contents

1. Java Mental Model
2. Installation and Development Environment
3. Your First Java Program
4. Java Compilation and Execution
5. Variables and Data Types
6. Primitive vs Reference Types
7. Operators
8. Input and Output
9. Conditional Statements
10. Loops
11. Arrays
12. Strings
13. Methods
14. Pass-by-Value
15. Classes and Objects
16. Constructors
17. Encapsulation
18. Inheritance
19. Polymorphism
20. Abstraction
21. Interfaces
22. Composition vs Inheritance
23. Access Modifiers
24. `static`, `final`, `this`, and `super`
25. Packages and Imports
26. Enums
27. Records
28. Sealed Classes
29. Nested and Inner Classes
30. Object Immutability
31. Object Class
32. `equals()`, `hashCode()`, and `toString()`
33. Exception Handling
34. Generics
35. Collections Framework
36. Comparable and Comparator
37. Iterators
38. Functional Programming
39. Lambda Expressions
40. Method References
41. Functional Interfaces
42. Stream API
43. Optional
44. Date and Time API
45. Regular Expressions
46. File Handling
47. NIO.2
48. Serialization Concepts
49. Annotations
50. Reflection
51. Java Modules
52. Threads
53. Synchronization
54. Locks
55. Atomic Classes
56. Executors
57. CompletableFuture
58. Concurrent Collections
59. Virtual Threads
60. Java Memory Model
61. JVM Architecture
62. Class Loading
63. Stack, Heap, Metaspace
64. Garbage Collection
65. JIT Compilation
66. JDBC
67. Transactions
68. HTTP Client
69. JSON in Java
70. Logging
71. Unit Testing
72. Mocking
73. Maven
74. Gradle
75. SOLID Principles
76. Clean Code
77. Design Patterns
78. Data Structures
79. Algorithms
80. Security Essentials
81. Performance Engineering
82. Debugging
83. Production Java Practices
84. Spring Ecosystem Orientation
85. Microservice Concepts
86. Scenario Cookbook
87. Common Java Mistakes
88. Interview Questions
89. Practice Exercises
90. Project Roadmap
91. Java Version Awareness
92. Java Cheat Sheet
93. Final Mastery Checklist

---

# 1. Java Mental Model

## Beginner Explanation

Before learning Java syntax, understand the basic mental model. You write human-readable Java source code, the Java compiler converts that source into **bytecode**, and the **JVM (Java Virtual Machine)** executes that bytecode. This extra JVM layer is a major reason Java applications can run on many operating systems without rewriting the program for each one.

Think of bytecode as an intermediate language. Your `.java` file is written for developers, while the generated `.class` file is written for the JVM.

### Why This Matters

This explains many things you will see later:

- why you install a JDK instead of only a compiler,
- why Java has garbage collection,
- why JVM memory settings matter,
- why the same Java application can run on Windows and Linux,
- and why Java performance involves both compilation and runtime optimization.

### Simple Analogy

```text
Java source code = recipe written by you
javac            = translator
bytecode         = standardized recipe
JVM              = chef that understands that standardized recipe
```


Java is a statically typed, general-purpose programming language designed around a virtual machine.

A typical flow is:

```text
Java Source Code (.java)
        ↓
javac compiler
        ↓
Bytecode (.class)
        ↓
JVM
        ↓
Operating System / CPU
```

This is why the same compiled bytecode can run on different platforms when a compatible JVM exists.

## JDK vs JVM vs JRE

### JVM

Java Virtual Machine.

Responsible for executing Java bytecode.

### JRE

Historically meant the JVM plus runtime libraries required to execute Java programs.

Modern JDK distributions generally provide what developers need without requiring a separately installed traditional JRE.

### JDK

Java Development Kit.

Contains developer tooling such as:

```text
java
javac
jar
javadoc
jdb
jshell
jcmd
jstack
jmap
jconsole
jfr
```

## Scenario

You receive a Java project from another developer.

If you only want to run an already packaged application, you need a suitable Java runtime.

If you want to compile, test, package, profile, or develop it, install a JDK.

---

# 2. Installation and Development Environment

## Beginner Explanation

A Java development environment is the collection of tools you use to write, compile, run, test, debug, and package Java applications. At minimum you need a **JDK**. In real development you will normally also use an IDE, Git, and a build tool such as Maven or Gradle.

Do not worry about installing every Java tool on day one. Start with a JDK and an IDE, then add tools as the project requires them.

### Why This Matters

A large number of beginner problems are not Java-language problems at all. They are environment problems such as:

```text
java command not found
wrong JDK selected
JAVA_HOME points to an old version
IDE uses a different JDK than the terminal
project requires Java 21 but Java 17 is installed
```

Understanding the environment helps you diagnose these problems quickly.


Recommended tools:

- OpenJDK or another trusted JDK distribution
- IntelliJ IDEA, Eclipse, or VS Code
- Git
- Maven
- Gradle when the project requires it
- Docker for application infrastructure
- Database client
- Postman or Bruno for API testing

Check Java:

```bash
java -version
```

Check compiler:

```bash
javac -version
```

## Environment Variables

Common variable:

```text
JAVA_HOME
```

Example conceptually:

```text
JAVA_HOME=C:\Program Files\Java\jdk-25
```

Then add:

```text
%JAVA_HOME%\bin
```

to `PATH`.

---

# 3. Your First Java Program

## Beginner Explanation

Every Java learner starts by creating a small class containing a `main` method. The `main` method is a conventional entry point that the Java launcher can use to begin executing a normal Java application.

Do not try to memorize the entire line `public static void main(String[] args)` immediately. Learn what each keyword means gradually. For now, think of it as the doorway through which the program starts.

### What Happens

```text
You run Main
   ↓
JVM loads Main
   ↓
JVM finds main(...)
   ↓
statements inside main run from top to bottom
```

Once you understand classes, methods, access modifiers, and `static`, the declaration will make much more sense.


```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

Compile:

```bash
javac Main.java
```

Run:

```bash
java Main
```

## Understanding `main`

```java
public static void main(String[] args)
```

- `public` — JVM can access it
- `static` — no `Main` object is required
- `void` — returns nothing
- `main` — conventional entry-point name
- `String[] args` — command-line arguments

Example:

```bash
java Main Shoeb
```

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello " + args[0]);
    }
}
```

---

# 4. Java Compilation and Execution

## Beginner Explanation

Java normally has two major stages: **compile time** and **runtime**. At compile time, `javac` checks your source code and produces bytecode. At runtime, the JVM loads and executes that bytecode.

This distinction is extremely important because Java errors can happen at different stages.

### Compile-Time Error

```java
int age = "twenty";
```

The compiler rejects this before the program runs.

### Runtime Error

```java
String value = null;
System.out.println(value.length());
```

This can compile successfully but fails while the program is running.

Learning to ask, “Is this a compile-time problem or runtime problem?” is an excellent debugging habit.


Source:

```java
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

Compilation produces bytecode:

```bash
javac Calculator.java
```

You can inspect bytecode:

```bash
javap -c Calculator
```

This is useful when learning:

- method invocation
- boxing/unboxing
- lambdas
- string concatenation
- synchronization
- compiler transformations

---

# 5. Variables and Data Types

## Beginner Explanation

A variable is a named place in your program used to hold a value. Every Java variable has a **type**, and that type determines what kind of value the variable can contain and which operations are valid.

Java is **statically typed**, meaning type checking happens primarily during compilation.

### Example

```java
int age = 28;
String name = "Asha";
boolean active = true;
```

Here:

```text
age    → integer
name   → text
active → true/false
```

### Why Types Matter

Types help the compiler catch mistakes early and make code easier to understand. For example, an invoice amount, customer name, and approval status represent very different kinds of data and should not all be treated as arbitrary text.


## Primitive Types

Primitive types are Java's built-in basic value types. They are not ordinary objects.

A beginner normally uses:

```text
int     → whole numbers
long    → larger whole numbers
double  → decimal calculations where exact decimal precision is not required
boolean → true/false
char    → one UTF-16 code unit
```

`byte`, `short`, and `float` exist for more specialized storage or interoperability needs.

Do not select a numeric type only by “which one is biggest.” Choose according to the meaning and precision requirements of the domain.


| Type | Typical Purpose |
|---|---|
| `byte` | very small integer |
| `short` | small integer |
| `int` | default integer |
| `long` | large integer |
| `float` | single-precision decimal |
| `double` | default floating point |
| `char` | UTF-16 code unit |
| `boolean` | `true` / `false` |

Example:

```java
int age = 28;
long population = 8_000_000_000L;
double salary = 125000.50;
boolean active = true;
char grade = 'A';
```

## Important: Money

Avoid binary floating-point for exact monetary calculations.

Bad:

```java
double total = 0.1 + 0.2;
```

Preferred:

```java
import java.math.BigDecimal;

BigDecimal price = new BigDecimal("99.99");
BigDecimal tax = new BigDecimal("18.00");

BigDecimal total = price.add(tax);
```

### Scenario

For:

- invoices
- taxes
- banking
- accounting
- financial reconciliation

prefer `BigDecimal`.

---

# 6. Primitive vs Reference Types

## Beginner Explanation

Java values fall into two broad categories: **primitive values** and **references to objects**. A primitive variable directly represents a simple value such as an integer or boolean. A reference variable holds a reference that points to an object.

This difference becomes important when you learn:

- `null`,
- object mutation,
- method arguments,
- collections,
- memory,
- equality,
- and garbage collection.

### Easy Mental Model

```text
int age = 28;
```

Think: `age` contains a simple numeric value.

```java
Customer customer = new Customer();
```

Think: `customer` contains a reference that leads to a `Customer` object.

The exact JVM implementation is more sophisticated, but this mental model is very useful while learning.


Primitive:

```java
int x = 10;
```

Reference:

```java
String name = "Java";
```

Other reference types:

```java
Customer customer;
List<String> names;
int[] numbers;
```

## Wrapper Classes

Collections and generic APIs work with reference types, so Java provides object wrappers around primitives.

For example:

```java
List<Integer> numbers = new ArrayList<>();
```

You cannot write:

```java
List<int> numbers;
```

Java can automatically convert between `int` and `Integer` in many situations. This is called **boxing** and **unboxing**.


Primitive wrappers include:

```text
byte    → Byte
short   → Short
int     → Integer
long    → Long
float   → Float
double  → Double
char    → Character
boolean → Boolean
```

### Autoboxing

```java
Integer number = 10;
```

### Unboxing

```java
int value = number;
```

### Null Danger

```java
Integer count = null;
int x = count; // NullPointerException
```

---

# 7. Operators

## Beginner Explanation

Operators are symbols that tell Java to perform an operation on one or more values. You use them for mathematics, comparisons, boolean logic, assignments, and low-level bit manipulation.

### Main Categories

```text
Arithmetic   → + - * / %
Comparison   → == != > < >= <=
Logical      → && || !
Assignment   → = += -= *= /=
Unary        → ++ -- + - !
Bitwise      → & | ^ ~ << >> >>>
Conditional  → ? :
```

### Scenario

Suppose an invoice should be automatically approved only when it is valid **and** below a limit:

```java
boolean autoApprove =
    isValid && amount.compareTo(limit) <= 0;
```

Here `&&` means both conditions must be true.

### Important Beginner Trap

Integer division removes the fractional part:

```java
System.out.println(5 / 2);   // 2
System.out.println(5.0 / 2); // 2.5
```

The operand types influence the result.


Arithmetic:

```java
+ - * / %
```

Comparison:

```java
== != > < >= <=
```

Logical:

```java
&& || !
```

Assignment:

```java
= += -= *= /= %=
```

Increment/decrement:

```java
++ --
```

Bitwise:

```java
& | ^ ~ << >> >>>
```

Ternary:

```java
String result = age >= 18 ? "Adult" : "Minor";
```

---

# 8. Input and Output

## Beginner Explanation

Input and output are how a program communicates with the outside world. **Input** provides data to the program; **output** sends information from the program somewhere else.

For beginner console programs, input may come from the keyboard and output may go to the terminal. In professional systems, input/output also includes files, databases, HTTP requests, message queues, and many other sources.

### Simple Flow

```text
User enters age
      ↓
Java reads age
      ↓
program processes age
      ↓
result is printed
```

`Scanner` is convenient for beginner console programs, while other APIs are better suited to high-performance or production workloads.


## Console Output

```java
System.out.println("Hello");
System.out.printf("Total: %.2f%n", 99.95);
```

## Scanner

```java
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.println("Hello " + name);
    }
}
```

For high-performance competitive-programming input, buffered input is often preferred.

---

# 9. Conditional Statements

## Beginner Explanation

Conditional statements let a program make decisions. Without conditions, your program would always execute the same path. With `if` and `switch`, behavior can change according to data.

### Real-World Example

```text
If invoice is invalid
    reject it
Else if amount is above approval limit
    send for approval
Else
    auto-approve it
```

This becomes Java logic using `if`, `else if`, and `else`.

Use `switch` when you are choosing between several known alternatives such as statuses, commands, or enum values.


## if

```java
if (amount > 10000) {
    System.out.println("Manager approval required");
}
```

## if-else

```java
if (stock > 0) {
    System.out.println("Available");
} else {
    System.out.println("Out of stock");
}
```

## else-if

```java
if (score >= 90) {
    grade = "A";
} else if (score >= 75) {
    grade = "B";
} else {
    grade = "C";
}
```

## switch

```java
switch (status) {
    case "NEW":
        processNew();
        break;
    case "APPROVED":
        post();
        break;
    default:
        reject();
}
```

Modern switch expression:

```java
String action = switch (status) {
    case "NEW" -> "PROCESS";
    case "APPROVED" -> "POST";
    case "REJECTED" -> "CLOSE";
    default -> "REVIEW";
};
```

---

# 10. Loops

## Beginner Explanation

Loops repeat work. Instead of writing the same statement 100 times, you write the logic once and tell Java when to repeat it.

### Common Choices

Use a `for` loop when you know or can naturally describe the iteration count.

Use an enhanced `for` loop when you simply want each element of a collection or array.

Use `while` when repetition depends mainly on a condition.

Use `do-while` when the body must execute at least once.

### Example Scenario

```text
For every invoice:
    validate invoice
    calculate result
    save status
```

That is a natural collection-processing loop.


## for

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

## enhanced for

```java
for (String name : names) {
    System.out.println(name);
}
```

## while

```java
while (queueHasData()) {
    processNext();
}
```

## do-while

```java
do {
    retry();
} while (!success && attempts < 3);
```

## break

```java
for (int number : numbers) {
    if (number == target) {
        break;
    }
}
```

## continue

```java
for (Invoice invoice : invoices) {
    if (invoice.isCancelled()) {
        continue;
    }

    process(invoice);
}
```

---

# 11. Arrays

## Beginner Explanation

An array stores multiple values of the same type under one variable name. Each value is identified by an **index**, starting at `0`.

```java
int[] scores = {80, 90, 75};
```

Conceptually:

```text
Index:  0   1   2
Value: 80  90  75
```

Arrays have a fixed length after creation. This makes them useful when size is known or when lower-level performance and primitive storage matter. For most dynamic business data, collections such as `ArrayList` are more convenient.


```java
int[] numbers = {10, 20, 30};
```

Access:

```java
System.out.println(numbers[0]);
```

Length:

```java
numbers.length
```

2D array:

```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};
```

## Array vs ArrayList

Use arrays when:

- size is fixed
- low-level performance matters
- primitive storage is beneficial

Use `ArrayList` when:

- size changes dynamically
- collection APIs are useful

---

# 12. Strings

## Beginner Explanation

`String` represents text. Strings appear everywhere: names, IDs, invoice numbers, URLs, JSON fields, log messages, and user input.

The most important beginner fact is that `String` objects are **immutable**. Operations such as `toUpperCase()` do not modify the existing string; they produce another string.

```java
String name = "java";
name.toUpperCase();

System.out.println(name); // still "java"
```

To keep the result:

```java
name = name.toUpperCase();
```

Also remember that `==` compares references for objects, while `equals()` is normally used to compare string content.


`String` is immutable.

```java
String name = "Java";
```

Common methods:

```java
name.length();
name.toUpperCase();
name.toLowerCase();
name.substring(1);
name.contains("av");
name.startsWith("J");
name.endsWith("a");
name.replace("Java", "JVM");
name.trim();
name.isEmpty();
name.isBlank();
```

## `==` vs `equals()`

Wrong for content comparison:

```java
if (a == b) {
}
```

Correct:

```java
if (a.equals(b)) {
}
```

Null-safe:

```java
import java.util.Objects;

if (Objects.equals(a, b)) {
}
```

## StringBuilder

Repeated concatenation inside loops can create many temporary objects.

```java
StringBuilder builder = new StringBuilder();

for (String value : values) {
    builder.append(value).append(",");
}

String result = builder.toString();
```

## Scenario

Building a CSV line:

```java
StringBuilder csv = new StringBuilder();

csv.append(invoiceNo)
   .append(',')
   .append(vendor)
   .append(',')
   .append(amount);
```

---

# 13. Methods

## Beginner Explanation

A method is a named block of reusable behavior. Methods help you divide a large problem into smaller understandable operations.

Instead of placing everything in `main`, you can write:

```text
readInvoice()
validateInvoice()
calculateTax()
saveInvoice()
```

Each method should ideally perform one coherent job.

### Method Anatomy

```java
public static int add(int a, int b) {
    return a + b;
}
```

```text
public      → visibility
static      → belongs to class
int         → return type
add         → method name
a, b        → parameters
return ...  → returned result
```

Well-designed methods are one of the foundations of clean Java code.


```java
public static int add(int a, int b) {
    return a + b;
}
```

## Overloading

Overloading means multiple methods have the same name but different parameter lists. It is useful when the operation represents the same idea for different input shapes.

The compiler decides which overload to call from the argument types at compile time.


```java
int add(int a, int b)
double add(double a, double b)
int add(int a, int b, int c)
```

Overloading is determined by parameter list, not only return type.

Invalid:

```java
int calculate()
double calculate()
```

## Varargs

```java
public static int sum(int... numbers) {
    int total = 0;

    for (int number : numbers) {
        total += number;
    }

    return total;
}
```

Call:

```java
sum(1, 2, 3, 4);
```

---

# 14. Java Is Pass-by-Value

## Beginner Explanation

Java is always **pass-by-value**. This statement often confuses beginners because objects can still appear to change after being passed to a method.

The key is understanding what value gets copied.

For a primitive, Java copies the primitive value.

For an object variable, Java copies the **reference value**. Both the caller and method may therefore refer to the same object.

### Mental Model

```text
caller reference ─────┐
                     ├──> Customer object
copied reference ─────┘
```

The method can mutate that shared object if it is mutable, but assigning its copied reference to a new object does not reassign the caller's variable.


Java always passes arguments by value.

For primitives, the primitive value is copied.

```java
static void change(int x) {
    x = 100;
}
```

The caller's value is unchanged.

For objects, the **reference value** is copied.

```java
static void rename(Customer customer) {
    customer.setName("Updated");
}
```

Both references can point to the same object, so mutation is visible.

But assigning a new object inside the method does not replace the caller's reference:

```java
static void replace(Customer customer) {
    customer = new Customer();
}
```

---

# 15. Classes and Objects

## Beginner Explanation

A **class** is a blueprint that describes what data an object has and what behavior it can perform. An **object** is a concrete instance created from that class.

For example:

```text
Class: Customer

Possible data:
- id
- name
- email

Possible behavior:
- updateEmail()
- deactivate()
```

Then:

```java
Customer customer = new Customer();
```

creates an object.

Classes are central to Java because much of Java application design involves modeling real business concepts as types with meaningful state and behavior.


```java
public class Customer {
    private String name;
    private String email;

    public void display() {
        System.out.println(name + " - " + email);
    }
}
```

Create object:

```java
Customer customer = new Customer();
```

A class describes state and behavior.

An object is an instance of that class.

---

# 16. Constructors

## Beginner Explanation

A constructor prepares a new object for use. It runs when you create an object with `new`.

A good constructor establishes a valid starting state.

```java
Customer customer =
    new Customer("Asha", "asha@example.com");
```

The constructor can require information that the object cannot sensibly exist without.

This helps prevent partially initialized objects such as a bank account with no account number or an invoice without required identity information.


```java
public class User {
    private final String name;

    public User(String name) {
        this.name = name;
    }
}
```

Constructor overloading:

```java
public User() {
    this("Unknown");
}

public User(String name) {
    this.name = name;
}
```

## Constructor Rules

- same name as class
- no return type
- can be overloaded
- can invoke another constructor using `this(...)`
- can invoke superclass constructor using `super(...)`

---

# 17. Encapsulation

## Beginner Explanation

Encapsulation means protecting an object's internal state and exposing controlled operations instead of allowing any code to change anything directly.

Think about a bank account. If `balance` were public, any code could set it to an invalid value. A safer object provides operations such as `deposit()` and `withdraw()` that enforce rules.

### Core Idea

Bad design asks:

```text
"Give me all your fields so I can change them."
```

Better design asks:

```text
"What valid operation do you want this object to perform?"
```

Encapsulation reduces accidental corruption and keeps business rules close to the data they protect.


Bad:

```java
public class BankAccount {
    public double balance;
}
```

Better:

```java
public class BankAccount {
    private BigDecimal balance = BigDecimal.ZERO;

    public BigDecimal getBalance() {
        return balance;
    }

    public void deposit(BigDecimal amount) {
        if (amount.signum() <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }

        balance = balance.add(amount);
    }
}
```

Encapsulation protects invariants.

The business rule belongs close to the state it protects.

---

# 18. Inheritance

## Beginner Explanation

Inheritance allows one class to reuse and specialize behavior from another class. It models an **is-a** relationship.

```text
Developer is an Employee
Car is a Vehicle
```

Inheritance can be useful, but it also creates tight coupling between parent and child classes. Do not use it only because two classes happen to share some code.

When behavior can vary independently, composition or interfaces are often easier to maintain.


```java
public class Employee {
    public void work() {
        System.out.println("Working");
    }
}
```

```java
public class Developer extends Employee {
    public void code() {
        System.out.println("Writing code");
    }
}
```

Inheritance models an **is-a** relationship.

```text
Developer is an Employee
```

Do not use inheritance only to reuse code.

---

# 19. Polymorphism

## Beginner Explanation

Polymorphism means you can work with an abstraction while different concrete implementations provide different behavior.

For example, an application may know only that it has a `PaymentProcessor`:

```java
processor.process(payment);
```

At runtime the implementation could be:

```text
CardPaymentProcessor
UpiPaymentProcessor
BankTransferProcessor
```

The caller does not need a giant `if/else` block for every implementation. This is one of the most powerful ideas behind extensible object-oriented design.


```java
abstract class PaymentProcessor {
    abstract void process();
}
```

```java
class CardProcessor extends PaymentProcessor {
    @Override
    void process() {
        System.out.println("Card payment");
    }
}
```

```java
class UpiProcessor extends PaymentProcessor {
    @Override
    void process() {
        System.out.println("UPI payment");
    }
}
```

Usage:

```java
PaymentProcessor processor = new UpiProcessor();
processor.process();
```

The caller depends on the abstraction rather than a concrete implementation.

---

# 20. Abstraction

## Beginner Explanation

Abstraction means exposing the important idea while hiding unnecessary implementation detail.

When you drive a car, you use the steering wheel and pedals without needing to understand every engine component. Software abstractions work similarly.

An abstract class can define shared behavior and require subclasses to provide missing pieces.

Abstraction helps you design code around concepts such as:

```text
PaymentProcessor
DocumentReader
NotificationSender
Repository
```

instead of tying every caller to one concrete implementation.


Abstract class:

```java
abstract class DocumentProcessor {

    public final void execute() {
        read();
        validate();
        save();
    }

    protected abstract void read();
    protected abstract void validate();

    protected void save() {
        System.out.println("Saving");
    }
}
```

Use an abstract class when related implementations share meaningful state or common behavior.

---

# 21. Interfaces

## Beginner Explanation

An interface defines a contract: it says **what an implementation must be able to do**, without requiring callers to know how it does it.

```java
interface NotificationService {
    void send(String message);
}
```

Many implementations can satisfy the same contract:

```text
EmailNotificationService
SmsNotificationService
TeamsNotificationService
```

Interfaces are extremely important in professional Java because they reduce coupling, support testing, and allow implementations to be replaced more easily.


```java
public interface NotificationService {
    void send(String message);
}
```

Implementation:

```java
public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}
```

## Default Method

A default method allows an interface to provide an implementation. This helped Java interfaces evolve while preserving compatibility with existing implementations.

Use default methods for behavior that genuinely belongs to the contract; do not turn interfaces into giant utility classes.


```java
interface Auditable {
    default void audit(String message) {
        System.out.println(message);
    }
}
```

## Static Method in Interface

```java
interface Validator {
    static boolean required(String value) {
        return value != null && !value.isBlank();
    }
}
```

Use interfaces heavily for boundaries:

```text
service
repository
gateway
validator
strategy
processor
client
```

---

# 22. Composition vs Inheritance

## Beginner Explanation

Composition means building an object by giving it other objects that perform specialized jobs.

```text
OrderService has a PaymentGateway
InvoiceService has an InvoiceRepository
```

Inheritance says **is-a**. Composition says **has-a**.

Composition is often preferred because each component can evolve or be replaced independently. It also makes dependency injection and unit testing much easier.


Prefer composition when the relationship is **has-a**.

```java
class OrderService {
    private final PaymentGateway paymentGateway;

    OrderService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }
}
```

```text
OrderService has a PaymentGateway
```

Composition generally produces looser coupling and better testability.

---

# 23. Access Modifiers

## Beginner Explanation

Access modifiers control where a class, method, constructor, or field can be accessed. They are a major part of encapsulation.

Think of them as visibility levels:

```text
private   → only this class
package   → this package
protected → package + certain subclass access
public    → accessible broadly
```

Do not make everything `public`. Exposing fewer implementation details gives you more freedom to change code later without breaking callers.


| Modifier | Same Class | Package | Subclass | Everywhere |
|---|---:|---:|---:|---:|
| `private` | Yes | No | No | No |
| package-private | Yes | Yes | context-dependent | No |
| `protected` | Yes | Yes | Yes | No |
| `public` | Yes | Yes | Yes | Yes |

Prefer the most restrictive visibility that still works.

---

# 24. `static`, `final`, `this`, and `super`

## Beginner Explanation

These four keywords appear throughout Java and have different purposes.

- `static` means a member belongs to the class rather than one object.
- `final` restricts reassignment, overriding, or inheritance depending on where it is used.
- `this` refers to the current object.
- `super` refers to superclass behavior or constructor logic.

Understanding them is essential because they affect object lifecycle, inheritance, state, and API design.


## static

Belongs to class rather than an individual instance.

```java
class IdGenerator {
    private static long sequence = 0;

    public static long next() {
        return ++sequence;
    }
}
```

Do not use unsynchronized mutable static state in concurrent production code.

## final

Final variable:

```java
final int maxRetries = 3;
```

Final reference:

```java
final List<String> names = new ArrayList<>();
names.add("A"); // allowed
```

The reference cannot be reassigned, but the referenced object may still be mutable.

Final method cannot be overridden.

Final class cannot be extended.

## this

```java
this.name = name;
```

Refers to current object.

## super

```java
super.process();
```

Refers to superclass behavior.

---

# 25. Packages and Imports

## Beginner Explanation

Packages organize Java types into namespaces. They prevent naming collisions and help describe architectural boundaries.

Two companies can both have a class named `User` if their package names differ:

```text
com.shop.customer.User
com.bank.security.User
```

Imports simply allow you to refer to a type without writing its full package name every time.

Good package structure should communicate application responsibilities, not become a random collection of files.


Package:

```java
package com.company.invoice;
```

Import:

```java
import java.util.List;
```

Recommended naming:

```text
com.company.project.feature
```

Example structure:

```text
com.acme.invoice.controller
com.acme.invoice.service
com.acme.invoice.domain
com.acme.invoice.repository
com.acme.invoice.client
com.acme.invoice.config
```

Avoid giant packages such as:

```text
util
common
misc
helper
```

unless their responsibility is genuinely cohesive.

---

# 26. Enums

## Beginner Explanation

An enum represents a fixed, known set of values. It is much safer than scattering arbitrary strings throughout a program.

Instead of:

```java
String status = "APPROVED";
```

you can use:

```java
InvoiceStatus status = InvoiceStatus.APPROVED;
```

Now the compiler knows which values are allowed.

Enums are ideal for:

```text
statuses
roles
payment types
document types
workflow stages
days/categories
```

Enums can also contain fields and methods, so they are more powerful than simple constants.


```java
public enum InvoiceStatus {
    NEW,
    VALIDATING,
    APPROVED,
    REJECTED,
    POSTED
}
```

Enum with behavior:

```java
public enum ApprovalResult {
    APPROVED(true),
    REJECTED(false);

    private final boolean successful;

    ApprovalResult(boolean successful) {
        this.successful = successful;
    }

    public boolean isSuccessful() {
        return successful;
    }
}
```

Use enums instead of magic strings whenever the domain has a closed set of values.

---

# 27. Records

## Beginner Explanation

A record is a concise way to model a value whose main purpose is carrying data. Java generates common boilerplate such as accessors, value-based equality, hash code, and a readable string representation.

For example, a DTO containing `id`, `name`, and `email` does not need dozens of lines of getters and boilerplate.

Records are especially useful when data should be treated as a stable value rather than a highly mutable object with a complex lifecycle.


Records are excellent for immutable data carriers.

```java
public record CustomerDto(
    long id,
    String name,
    String email
) {}
```

Usage:

```java
CustomerDto customer =
    new CustomerDto(1L, "Asha", "asha@example.com");

System.out.println(customer.name());
```

Records automatically provide commonly required data-carrier behavior such as accessors and value-based `equals`, `hashCode`, and `toString`.

Good uses:

- DTOs
- API responses
- commands
- events
- immutable query results

Do not force records onto entities whose identity and lifecycle require mutable domain behavior.

---

# 28. Sealed Classes

## Beginner Explanation

A sealed type lets you explicitly control which classes are allowed to implement or extend it.

This is useful when your domain has a known set of possibilities.

```text
PaymentResult
├── PaymentSuccess
└── PaymentFailure
```

If the hierarchy should not be open to arbitrary third-party subclasses, sealing makes that rule part of the type system. It also works very well with modern pattern matching.


Sealed hierarchies restrict which classes can extend or implement a type.

```java
sealed interface PaymentResult
        permits PaymentSuccess, PaymentFailure {
}

record PaymentSuccess(String transactionId)
        implements PaymentResult {
}

record PaymentFailure(String reason)
        implements PaymentResult {
}
```

Useful when the domain has a controlled hierarchy.

Examples:

```text
PaymentResult
DomainEvent
Expression
CommandResult
ValidationResult
```

---

# 29. Nested and Inner Classes

## Beginner Explanation

Java lets you declare classes inside other classes or even inside methods. These are called nested, inner, local, or anonymous classes depending on how they are declared.

Why do this? Sometimes a helper type only makes sense inside one surrounding class and should not become a top-level public concept.

### Main Difference

A `static` nested class does not need an instance of the outer class.

A non-static inner class is associated with an instance of the outer class.

Anonymous classes are useful for one-off implementations, although lambdas are usually cleaner when a functional interface is involved.


## Static Nested Class

```java
class Order {
    static class Builder {
    }
}
```

## Inner Class

```java
class Outer {
    class Inner {
    }
}
```

## Local Class

Declared inside a method.

## Anonymous Class

```java
Runnable task = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running");
    }
};
```

For functional interfaces, lambdas are usually cleaner:

```java
Runnable task = () -> System.out.println("Running");
```

---

# 30. Object Immutability

## Beginner Explanation

An immutable object cannot have its observable state changed after construction. Instead of modifying the same object, you create another value when something changes.

Immutability makes programs easier to reason about because a value cannot unexpectedly change somewhere else.

It is especially valuable for:

```text
money
identifiers
configuration
events
DTOs
concurrent code
cache keys
```

A `final` reference alone does not make the referenced object immutable, so immutability requires deliberate class design.


An immutable class should normally:

- not expose mutable internal state
- validate construction
- avoid setters
- use final fields
- defensively copy mutable inputs/outputs when required

Example:

```java
public final class Money {
    private final BigDecimal amount;

    public Money(BigDecimal amount) {
        this.amount = amount;
    }

    public BigDecimal amount() {
        return amount;
    }
}
```

Immutability helps with:

- reasoning
- thread safety
- caching
- domain modeling
- predictable APIs

---

# 31. `Object` Class

## Beginner Explanation

`Object` is the root class of normal Java class hierarchies. This means every ordinary Java object inherits fundamental behavior from `Object`.

Important methods include:

- `toString()` for a human-readable representation,
- `equals()` for logical equality,
- `hashCode()` for hash-based collections,
- `getClass()` for runtime type information.

Understanding `Object` explains why every Java object can be printed, compared, placed into generic object-oriented APIs, and inspected at runtime.


All Java classes ultimately derive from `Object`.

Important methods:

```java
equals()
hashCode()
toString()
getClass()
```

Legacy synchronization methods also exist:

```java
wait()
notify()
notifyAll()
```

---

# 32. `equals()`, `hashCode()`, and `toString()`

## Beginner Explanation

Java distinguishes **object identity** from **logical equality**.

Two different objects may represent the same logical value. `equals()` defines that logical equality. `hashCode()` provides a number used by hash-based collections to organize values efficiently.

If you put custom objects into `HashMap` or `HashSet`, the relationship between these methods becomes essential.

### Contract to Remember

```text
if a.equals(b) is true
then a.hashCode() == b.hashCode() must also be true
```

The reverse is not required: different objects may share the same hash code.


If two objects are equal according to `equals()`, they must return the same hash code.

Example:

```java
public final class ProductId {
    private final String value;

    public ProductId(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductId other)) return false;
        return Objects.equals(value, other.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

    @Override
    public String toString() {
        return value;
    }
}
```

This matters for:

```text
HashMap
HashSet
ConcurrentHashMap
```

---

# 33. Exception Handling

## Beginner Explanation

Exceptions represent situations where normal execution cannot continue as expected. Instead of returning mysterious values such as `-1` or `null` for every failure, Java can propagate an exception with useful context.

Examples:

```text
file not found
invalid invoice
database unavailable
network timeout
permission denied
```

Exception handling is not about hiding errors. It is about deciding **where a failure can be handled meaningfully**.

Use try-with-resources for resources such as files, streams, and JDBC objects so cleanup happens reliably.


Hierarchy conceptually:

```text
Throwable
├── Error
└── Exception
    ├── RuntimeException
    └── Checked Exceptions
```

## try-catch

```java
try {
    process();
} catch (ValidationException e) {
    System.err.println(e.getMessage());
}
```

## finally

```java
try {
    process();
} finally {
    cleanup();
}
```

## try-with-resources

Preferred for resources implementing `AutoCloseable`.

```java
try (BufferedReader reader = Files.newBufferedReader(path)) {
    System.out.println(reader.readLine());
}
```

## Custom Exception

```java
public class InvoiceNotFoundException extends RuntimeException {
    public InvoiceNotFoundException(long id) {
        super("Invoice not found: " + id);
    }
}
```

## Good Exception Practices

Do:

```java
throw new IllegalArgumentException("Amount must be positive");
```

Avoid:

```java
catch (Exception e) {
}
```

Never silently swallow errors unless there is a specific, documented reason.

Wrap low-level exceptions when translating infrastructure failures into domain/application concepts.

---

# 34. Generics

## Beginner Explanation

Generics let you write reusable code while keeping type safety.

Without generics, a container might hold arbitrary `Object` values and force you to cast them manually. With generics, Java can enforce what kind of data belongs there.

```java
List<String> names;
List<Invoice> invoices;
```

Both use the same `List` abstraction but preserve different element types.

Generics become extremely important when you work with collections, repositories, framework APIs, streams, functional interfaces, and reusable libraries.


Without generics:

```java
List list = new ArrayList();
```

With generics:

```java
List<String> names = new ArrayList<>();
```

Generic class:

```java
public class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}
```

## Bounded Generic

```java
public static <T extends Number> double doubleValue(T number) {
    return number.doubleValue();
}
```

## Wildcards

A wildcard means “some type that satisfies this relationship” rather than one exact generic type.

```java
List<?>              // list of some unknown type
List<? extends Number> // list producing Number-compatible values
List<? super Integer>  // list that can consume Integer values
```

Wildcards are mainly about API flexibility and type safety.


```java
List<?> values
List<? extends Number> numbers
List<? super Integer> integers
```

## PECS

Remember:

```text
Producer Extends
Consumer Super
```

Producer:

```java
double sum(List<? extends Number> numbers)
```

Consumer:

```java
void addDefaults(List<? super Integer> values)
```

## Type Erasure

Generic type information is largely used by the compiler and then erased/translated in generated bytecode. This is why `List<String>` and `List<Integer>` do not become completely separate runtime classes.

Type erasure explains several generic limitations and some surprising reflection behavior.


Java generics are largely implemented through type erasure.

Therefore this is not allowed:

```java
new T();
```

and runtime generic type information is limited unless preserved through other mechanisms.

---

# 35. Collections Framework

## Beginner Explanation

The Collections Framework provides reusable data structures for storing and organizing groups of objects. Choosing the correct collection is more important than memorizing every implementation.

Ask what your data needs:

```text
Need ordering?         → List
Need uniqueness?       → Set
Need key/value lookup? → Map
Need FIFO processing?  → Queue
Need both ends?        → Deque
Need sorted data?      → Tree-based collection
Need concurrency?      → concurrent collection
```

Different collections have different performance characteristics and semantic guarantees. Choose based on behavior first, then performance.


Core hierarchy:

```text
Collection
├── List
├── Set
└── Queue

Map is separate
```

## List

Ordered collection, duplicates allowed.

### ArrayList

```java
List<String> names = new ArrayList<>();
```

Best default `List` in many applications.

Typical operations:

- random access: fast
- append: generally fast
- middle insertion/removal: may require shifting

### LinkedList

Linked-node structure.

Do not automatically choose it for frequent insertion. Real performance depends on access pattern, locality, and traversal cost.

## Set

### HashSet

```java
Set<String> emails = new HashSet<>();
```

Use for uniqueness and fast membership checks.

### LinkedHashSet

Maintains encounter/insertion order.

### TreeSet

Sorted set.

```java
Set<Integer> numbers = new TreeSet<>();
```

## Map

### HashMap

`HashMap` stores key/value pairs and uses a key's hash code to help find a storage location quickly. It then uses equality checks to identify the correct key when necessary.

This is why mutable or incorrectly implemented keys can cause serious lookup problems.


```java
Map<String, Customer> customers = new HashMap<>();
```

### LinkedHashMap

Useful when predictable encounter order matters.

### TreeMap

Sorted keys.

### ConcurrentHashMap

For concurrent access patterns.

## Queue

```java
Queue<Job> jobs = new ArrayDeque<>();
```

## Deque

```java
Deque<String> stack = new ArrayDeque<>();
stack.push("A");
stack.pop();
```

Prefer `ArrayDeque` over legacy `Stack` for normal stack/deque behavior.

## Choosing the Right Collection

| Need | Typical Choice |
|---|---|
| ordered dynamic list | `ArrayList` |
| unique values | `HashSet` |
| insertion-order uniqueness | `LinkedHashSet` |
| sorted uniqueness | `TreeSet` |
| key-value lookup | `HashMap` |
| sorted key-value lookup | `TreeMap` |
| thread-safe scalable map | `ConcurrentHashMap` |
| FIFO queue | `ArrayDeque` |
| double-ended queue | `ArrayDeque` |

---

# 36. Comparable and Comparator

## Beginner Explanation

Sorting objects requires Java to know how two objects should be ordered.

`Comparable` defines a type's **natural ordering**. `Comparator` defines an external or alternate ordering.

For an employee:

```text
natural ordering  → perhaps employee ID
other ordering    → salary
other ordering    → name
other ordering    → department then name
```

Use `Comparator` when you need multiple sort strategies or do not want ordering logic embedded in the class itself.


## Comparable

Natural ordering.

```java
class Employee implements Comparable<Employee> {
    private final int id;

    Employee(int id) {
        this.id = id;
    }

    @Override
    public int compareTo(Employee other) {
        return Integer.compare(id, other.id);
    }
}
```

## Comparator

External/custom ordering.

```java
Comparator<Employee> bySalary =
    Comparator.comparing(Employee::getSalary);
```

Multiple fields:

```java
Comparator<Employee> comparator =
    Comparator.comparing(Employee::getDepartment)
              .thenComparing(Employee::getName);
```

Descending:

```java
Comparator<Employee> bySalaryDesc =
    Comparator.comparing(Employee::getSalary).reversed();
```

---

# 37. Iterators

## Beginner Explanation

An iterator is an object that walks through a collection one element at a time. Enhanced `for` loops often hide the iterator from you, but understanding it explains how collection traversal works.

Conceptually:

```text
Has another item?
      ↓ yes
give me next item
      ↓
repeat
```

Iterators are especially important when you need to remove elements safely during traversal or when working with APIs that expose iterative access rather than indexed access.


```java
Iterator<String> iterator = names.iterator();

while (iterator.hasNext()) {
    String value = iterator.next();
}
```

Safe removal while iterating:

```java
while (iterator.hasNext()) {
    if (iterator.next().isBlank()) {
        iterator.remove();
    }
}
```

Avoid structurally modifying many standard collections directly inside enhanced `for` loops.

---

# 38. Functional Programming

## Beginner Explanation

Functional programming focuses on transforming data through small composable operations while minimizing unnecessary shared mutable state.

Java remains an object-oriented language, but lambdas, streams, and functional interfaces allow a functional style when it makes code clearer.

The goal is not to turn every loop into a stream. The goal is to express transformations such as:

```text
take employees
→ keep active employees
→ extract emails
→ remove duplicates
→ sort
→ return result
```

in a concise and understandable way.


Java is not purely functional, but supports functional-style programming.

Important ideas:

- functions as values through functional interfaces
- immutability
- transformations
- declarative pipelines
- minimal side effects

Imperative:

```java
List<String> result = new ArrayList<>();

for (String name : names) {
    if (name.startsWith("A")) {
        result.add(name.toUpperCase());
    }
}
```

Functional style:

```java
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .toList();
```

---

# 39. Lambda Expressions

## Beginner Explanation

A lambda is a compact way to provide behavior where Java expects a functional interface.

Before lambdas, a tiny piece of behavior often required an anonymous class. Lambdas let you express the same intent much more directly.

```java
x -> x * 2
```

means roughly:

```text
receive x
return x multiplied by 2
```

Lambdas are used heavily in streams, collection operations, asynchronous code, event handlers, callbacks, and configuration APIs.


```java
(a, b) -> a + b
```

No parameters:

```java
() -> System.out.println("Hello")
```

One parameter:

```java
name -> name.toUpperCase()
```

Block:

```java
value -> {
    String cleaned = value.trim();
    return cleaned.toUpperCase();
}
```

---

# 40. Method References

## Beginner Explanation

A method reference is shorthand for a lambda that simply calls an existing method.

Instead of:

```java
name -> name.toUpperCase()
```

you can write:

```java
String::toUpperCase
```

Method references are not a different programming model. They are simply a cleaner way to say, “Use this existing method as the behavior.”

Use them when they improve readability; use a normal lambda when additional logic is required.


Static method:

```java
Integer::parseInt
```

Instance method of arbitrary object:

```java
String::toUpperCase
```

Instance method of known object:

```java
logger::info
```

Constructor:

```java
ArrayList::new
```

---

# 41. Functional Interfaces

## Beginner Explanation

A functional interface is an interface with exactly one abstract method. Because there is only one operation to implement, Java can represent its implementation with a lambda.

For example:

```java
Predicate<Invoice>
```

represents a function that receives an invoice and answers `true` or `false`.

Understanding the built-in functional interfaces lets you read modern Java APIs more easily because they appear everywhere in streams, collections, futures, and frameworks.


A functional interface has one abstract method.

Built-in examples:

```text
Predicate<T>
Function<T,R>
Consumer<T>
Supplier<T>
UnaryOperator<T>
BinaryOperator<T>
BiFunction<T,U,R>
BiConsumer<T,U>
BiPredicate<T,U>
```

Examples:

```java
Predicate<Integer> positive = x -> x > 0;

Function<String, Integer> length = String::length;

Consumer<String> printer = System.out::println;

Supplier<UUID> uuidSupplier = UUID::randomUUID;
```

Custom:

```java
@FunctionalInterface
interface InvoiceValidator {
    boolean validate(Invoice invoice);
}
```

---

# 42. Stream API

## Beginner Explanation

A stream is a pipeline for processing a sequence of elements. It does **not** store data itself. Instead, it reads values from a source such as a collection and applies operations.

Think of a factory conveyor belt:

```text
source
  ↓
filter unwanted items
  ↓
transform remaining items
  ↓
group/sort/reduce
  ↓
final result
```

Many stream operations are lazy. Intermediate operations build the pipeline, while a terminal operation triggers actual processing.

Streams are excellent for transformations and aggregations, but a simple loop is sometimes clearer. Readability matters more than using a fashionable API.


Streams process data through pipelines.

```java
List<String> result = users.stream()
    .filter(User::isActive)
    .map(User::getEmail)
    .filter(Objects::nonNull)
    .distinct()
    .sorted()
    .toList();
```

## Common Intermediate Operations

```text
filter
map
flatMap
distinct
sorted
limit
skip
peek
```

## Terminal Operations

```text
toList
collect
forEach
reduce
count
findFirst
findAny
anyMatch
allMatch
noneMatch
min
max
```

## map

`map` transforms each element into another value.

Think:

```text
Employee → employee name
Invoice  → invoice amount
String   → parsed integer
```

The number of stream elements usually remains the same; their type/value can change.


```java
List<String> names = employees.stream()
    .map(Employee::getName)
    .toList();
```

## filter

`filter` keeps only elements whose predicate evaluates to `true`.

Think:

```text
all invoices
→ keep only APPROVED invoices
```


```java
List<Invoice> highValue = invoices.stream()
    .filter(i -> i.amount().compareTo(new BigDecimal("100000")) > 0)
    .toList();
```

## flatMap

`flatMap` is useful when each input element contains or produces multiple values and you want one flattened stream.

Example:

```text
List<Invoice>
each Invoice has List<LineItem>
        ↓ flatMap
one Stream<LineItem>
```


```java
List<LineItem> allItems = invoices.stream()
    .flatMap(invoice -> invoice.items().stream())
    .toList();
```

## Grouping

```java
Map<String, List<Employee>> byDepartment =
    employees.stream()
        .collect(Collectors.groupingBy(Employee::getDepartment));
```

## Counting

```java
Map<String, Long> countByDepartment =
    employees.stream()
        .collect(Collectors.groupingBy(
            Employee::getDepartment,
            Collectors.counting()
        ));
```

## Sum

```java
BigDecimal total = invoices.stream()
    .map(Invoice::amount)
    .reduce(BigDecimal.ZERO, BigDecimal::add);
```

## Important Stream Rule

Avoid streams when the imperative version is substantially clearer.

Streams are excellent for transformations, but poor stream code can become harder to debug than a loop.

---

# 43. Optional

## Beginner Explanation

`Optional<T>` represents either:

```text
a value is present
or
a value is absent
```

It makes absence explicit in an API.

For example:

```java
Optional<User> findById(long id)
```

tells the caller that a user may not exist.

This is clearer than returning `null` without any indication in the method type. However, `Optional` should not be inserted into every field and every parameter. It is mainly useful for expressing optional return values.


Optional represents a value that may or may not exist.

```java
Optional<User> user = repository.findById(id);
```

Usage:

```java
user.ifPresent(System.out::println);
```

Default:

```java
String name = user.map(User::getName)
                  .orElse("Unknown");
```

Lazy default:

```java
User found = repository.findById(id)
    .orElseGet(() -> createDefaultUser());
```

Throw:

```java
User found = repository.findById(id)
    .orElseThrow(() -> new UserNotFoundException(id));
```

Avoid using `Optional` everywhere.

Common guideline:

- good as a return type
- usually unnecessary for fields
- usually unnecessary for method parameters

---

# 44. Date and Time API

## Beginner Explanation

Dates and times are harder than they first appear because real systems must deal with calendars, time zones, daylight-saving rules, UTC, durations, formatting, and business dates.

The `java.time` API separates different concepts instead of representing every kind of date/time with one class.

Examples:

```text
LocalDate     → date without time
LocalTime     → time without date
LocalDateTime → date + time but no zone
Instant       → point on UTC timeline
ZonedDateTime → date + time + time zone
Duration      → elapsed time
Period        → calendar date difference
```

Choosing the correct type prevents many production bugs.


Prefer `java.time`.

Important classes:

```text
LocalDate
LocalTime
LocalDateTime
Instant
ZonedDateTime
OffsetDateTime
Duration
Period
ZoneId
DateTimeFormatter
```

## Local Date

```java
LocalDate today = LocalDate.now();
```

## Parse

```java
DateTimeFormatter formatter =
    DateTimeFormatter.ofPattern("dd-MM-yyyy");

LocalDate date =
    LocalDate.parse("12-08-2026", formatter);
```

## UTC Timestamp

```java
Instant now = Instant.now();
```

## Time Zone

```java
ZonedDateTime mumbai =
    ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
```

## Scenario

Use:

- `LocalDate` for invoice date
- `Instant` for audit timestamps
- `ZonedDateTime` when wall-clock zone matters
- `Duration` for elapsed time
- `Period` for calendar date differences

Do not store ambiguous local date-times for globally distributed systems unless the business domain explicitly requires them.

---

# 45. Regular Expressions

## Beginner Explanation

A regular expression, or **regex**, is a small pattern language used to search, validate, split, or extract text.

For example, OCR output may contain:

```text
Invoice No: INV-2026-1234
```

A regex can help extract the invoice-number pattern.

Regex is powerful but can become unreadable quickly. Use it for well-defined text patterns, and prefer a proper parser when the input has a real grammar or complex format.


```java
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("Invoice 12345");

if (matcher.find()) {
    System.out.println(matcher.group());
}
```

Email-like basic pattern example:

```java
Pattern.compile("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
```

Do not attempt to implement complex standards with simplistic regex if a proven parser/library exists.

Use regex for:

- extraction
- cleanup
- validation of constrained formats
- OCR post-processing

---

# 46. File Handling

## Beginner Explanation

File handling means reading data from files, writing files, copying them, moving them, and managing file resources.

Java's modern `Files` and `Path` APIs make common operations straightforward.

A beginner should learn two important approaches:

```text
small file → reading the whole file may be fine
large file → stream/process gradually
```

Loading a multi-gigabyte file completely into memory can crash an application, so always consider file size.


Read string:

```java
String content = Files.readString(Path.of("input.txt"));
```

Write:

```java
Files.writeString(
    Path.of("output.txt"),
    "Hello"
);
```

Read lines:

```java
List<String> lines =
    Files.readAllLines(Path.of("input.txt"));
```

For very large files, stream instead of loading everything into memory.

```java
try (Stream<String> lines = Files.lines(Path.of("large.csv"))) {
    lines.forEach(System.out::println);
}
```

---

# 47. NIO.2

## Beginner Explanation

NIO.2 is Java's modern file-system API centered around `Path` and `Files`. It provides richer file and directory operations than older `java.io.File`-based code.

Use it for:

```text
walking directories
copying/moving files
checking file metadata
watching directories
reading/writing paths
symbolic links
```

For document-processing systems, NIO is especially useful for inbox/outbox folders and automated file pipelines.


Important APIs:

```text
Path
Paths
Files
FileSystem
WatchService
DirectoryStream
```

Directory listing:

```java
try (Stream<Path> paths = Files.list(Path.of("invoices"))) {
    paths.filter(Files::isRegularFile)
         .forEach(System.out::println);
}
```

Walk recursively:

```java
try (Stream<Path> paths = Files.walk(Path.of("root"))) {
    paths.forEach(System.out::println);
}
```

File copy:

```java
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
```

Move:

```java
Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
```

---

# 48. Serialization Concepts

## Beginner Explanation

Serialization means converting an in-memory object into a representation that can be stored or transferred, and later reconstructed or interpreted.

Examples include:

```text
Java object → JSON
Java object → database row
Java object → Protocol Buffers
```

Java also has native object serialization, but it is rarely the best default for modern application APIs or persistence.

The important concept is **data representation and compatibility**, not memorizing one serialization mechanism.


Java native object serialization exists, but it should not be your default persistence or API format for new applications.

Prefer explicit formats such as:

```text
JSON
Protocol Buffers
Avro
database records
```

Reasons include:

- compatibility
- security
- interoperability
- versioning
- transparency

---

# 49. Annotations

## Beginner Explanation

Annotations attach metadata to Java code. They look like `@Something` and can be read by the compiler, tools, or frameworks.

For example:

```java
@Override
```

tells Java that a method is intended to override a superclass or interface method.

Framework annotations can say things such as:

```text
this class is a controller
this method handles an HTTP request
this field must not be null
this operation is transactional
```

Annotations normally describe metadata; the framework or compiler decides what that metadata means.


Built-in annotations:

```java
@Override
@Deprecated
@SuppressWarnings
@FunctionalInterface
```

Custom annotation:

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Audited {
    String action();
}
```

Usage:

```java
@Audited(action = "INVOICE_APPROVAL")
public void approve() {
}
```

Frameworks use annotations heavily for:

- dependency injection
- validation
- persistence
- HTTP routing
- transaction management
- serialization

---

# 50. Reflection

## Beginner Explanation

Reflection lets a running Java program inspect classes, methods, constructors, fields, and annotations dynamically.

Normally Java code knows types at compile time. Reflection allows code to ask at runtime:

```text
What class is this?
What methods does it have?
Which annotations are present?
Can I invoke this method dynamically?
```

Frameworks use reflection heavily for dependency injection, ORM mapping, serialization, and testing.

Application business logic should use reflection carefully because normal typed code is easier to understand and safer to refactor.


Reflection lets code inspect types at runtime.

```java
Class<?> type = User.class;

for (Method method : type.getDeclaredMethods()) {
    System.out.println(method.getName());
}
```

Create object reflectively:

```java
Constructor<User> constructor =
    User.class.getDeclaredConstructor();

User user = constructor.newInstance();
```

Use cases:

- dependency injection frameworks
- ORMs
- serializers
- testing tools
- plugin systems

Avoid unnecessary reflection in normal business logic because it reduces compile-time safety and can complicate maintenance.

---

# 51. Java Modules

## Beginner Explanation

The Java Platform Module System allows groups of packages to declare stronger boundaries and explicit dependencies.

A module can say:

```text
I require java.sql
I expose this API package
I keep these implementation packages private
```

Modules are more structured than the traditional classpath. You do not need to adopt modules for every application, but understanding the difference helps when reading modern JDK architecture or modular libraries.


JPMS was introduced to support strong modularization.

Example:

```java
module com.acme.billing {
    requires java.sql;

    exports com.acme.billing.api;
}
```

Use modules when modular boundaries provide real value.

Many enterprise applications still use classpath-based packaging, so understand both classpath and module-path concepts.

---

# 52. Threads

## Beginner Explanation

A thread is an independent path of execution within a process. Multiple threads let a Java application make progress on multiple tasks concurrently.

Examples:

```text
one thread handles request A
another handles request B
another writes a log
another waits for a database
```

Concurrency introduces new problems because threads may access the same state at overlapping times. Learning threads therefore also requires learning synchronization, visibility, race conditions, and safe task coordination.


Basic thread:

```java
Thread thread = new Thread(() -> {
    System.out.println("Running");
});

thread.start();
```

Do not call:

```java
thread.run();
```

when you intend to start a new thread. Calling `run()` directly executes like a normal method.

## Thread States

Conceptually:

```text
NEW
RUNNABLE
BLOCKED
WAITING
TIMED_WAITING
TERMINATED
```

---

# 53. Synchronization

## Beginner Explanation

Synchronization protects operations that must not be executed unsafely by multiple threads at the same time. It can also establish visibility guarantees between threads.

A classic example is a shared counter. `count++` looks like one operation, but internally it involves reading, modifying, and writing. Two threads can interfere with each other.

`synchronized` allows Java to coordinate access to a critical section.

Use synchronization to protect specific shared invariants, not simply to make every method synchronized.


Race condition example:

```java
class Counter {
    private int count;

    public void increment() {
        count++;
    }
}
```

`count++` is not atomic.

Synchronized:

```java
class Counter {
    private int count;

    public synchronized void increment() {
        count++;
    }

    public synchronized int get() {
        return count;
    }
}
```

Synchronized block:

```java
synchronized (lock) {
    update();
}
```

Avoid locking on publicly accessible objects.

---

# 54. Locks

## Beginner Explanation

The `Lock` API provides explicit locking mechanisms beyond the `synchronized` keyword.

Both approaches can protect critical sections, but explicit locks can provide features such as:

```text
try to acquire without waiting forever
wait with a timeout
respond to interruption
use multiple condition queues
```

A lock must always be released, normally in a `finally` block. Forgetting to unlock can block other threads indefinitely.


```java
private final Lock lock = new ReentrantLock();

public void update() {
    lock.lock();

    try {
        // critical section
    } finally {
        lock.unlock();
    }
}
```

Locks can provide features beyond `synchronized`, such as:

- interruptible acquisition
- timeout attempts
- multiple conditions
- configurable fairness

---

# 55. Atomic Classes

## Beginner Explanation

Atomic classes provide thread-safe operations on individual values without requiring you to write a traditional synchronized block for every simple operation.

For example:

```java
AtomicInteger counter = new AtomicInteger();
counter.incrementAndGet();
```

The increment operation is performed atomically.

Atomic types are useful for:

```text
counters
flags
references
sequence numbers
simple lock-free state transitions
```

They do not automatically make a complex multi-field business operation atomic.


```java
AtomicInteger counter = new AtomicInteger();

counter.incrementAndGet();
```

Useful types:

```text
AtomicInteger
AtomicLong
AtomicBoolean
AtomicReference
LongAdder
```

For high-contention counters, `LongAdder` may outperform a single atomic counter depending on required semantics.

---

# 56. Executors

## Beginner Explanation

An executor separates **what work should be done** from **which thread performs it**.

Instead of manually creating and managing threads for every task, you submit tasks to an `ExecutorService`.

This makes it easier to:

```text
limit concurrency
reuse platform threads
queue work
collect task results
shut down cleanly
```

Executors are the normal foundation for task-based concurrency in Java.


Prefer task-oriented concurrency over manually managing many raw threads.

```java
ExecutorService executor =
    Executors.newFixedThreadPool(4);

executor.submit(() -> processInvoice());

executor.shutdown();
```

Use `try/finally` or controlled application lifecycle to ensure executors are shut down correctly.

## Callable

`Runnable` represents work that does not return a value and cannot directly declare checked exceptions in its single method. `Callable<V>` represents work that returns a value of type `V` and can throw an exception.

Submitting a `Callable` to an executor returns a `Future<V>` representing the eventual result.


```java
Callable<Integer> task = () -> 42;

Future<Integer> future = executor.submit(task);

Integer result = future.get();
```

---

# 57. CompletableFuture

## Beginner Explanation

`CompletableFuture` represents a result that may become available later and lets you build asynchronous processing pipelines.

Instead of blocking immediately for every result, you can describe what should happen when it completes:

```text
load user
→ extract email
→ combine with orders
→ handle failure
```

It is powerful for composing asynchronous work, but complicated future chains can become difficult to debug. Use them where asynchronous composition genuinely helps.


Async pipeline:

```java
CompletableFuture<String> future =
    CompletableFuture.supplyAsync(() -> loadUser())
        .thenApply(User::getEmail)
        .exceptionally(ex -> "fallback@example.com");
```

Combine tasks:

```java
CompletableFuture<User> userFuture =
    CompletableFuture.supplyAsync(this::loadUser);

CompletableFuture<List<Order>> ordersFuture =
    CompletableFuture.supplyAsync(this::loadOrders);

CompletableFuture<UserDashboard> dashboard =
    userFuture.thenCombine(
        ordersFuture,
        UserDashboard::new
    );
```

Be deliberate about which executor performs asynchronous work.

---

# 58. Concurrent Collections

## Beginner Explanation

Normal collections such as `HashMap` and `ArrayList` are not automatically safe for arbitrary concurrent modification. Concurrent collections provide special designs for common multi-threaded access patterns.

Examples:

```text
ConcurrentHashMap       → concurrent key/value access
BlockingQueue           → producer/consumer pipelines
ConcurrentLinkedQueue   → non-blocking queue
CopyOnWriteArrayList    → many reads, very few writes
```

Do not choose a concurrent collection merely because your application uses threads. Choose it based on the actual access pattern.


Examples:

```text
ConcurrentHashMap
CopyOnWriteArrayList
ConcurrentLinkedQueue
BlockingQueue
```

Producer-consumer example:

```java
BlockingQueue<Job> queue =
    new LinkedBlockingQueue<>();

queue.put(job);

Job next = queue.take();
```

Use `CopyOnWriteArrayList` only for suitable read-heavy, write-light workloads.

---

# 59. Virtual Threads

## Beginner Explanation

Virtual threads are lightweight Java threads designed to make high-concurrency **blocking I/O** code much easier to scale.

Traditional platform threads are relatively expensive, so applications often use small thread pools and asynchronous programming. Virtual threads allow many more waiting tasks to exist without requiring one operating-system thread per waiting task.

They are particularly useful when code spends much of its time waiting for:

```text
HTTP
database
network
files
```

They do not create extra CPU cores and therefore do not magically accelerate CPU-heavy calculations.


Virtual threads make thread-per-task style practical for many high-concurrency I/O-bound workloads.

Example:

```java
try (var executor =
         Executors.newVirtualThreadPerTaskExecutor()) {

    for (int i = 0; i < 10_000; i++) {
        executor.submit(() -> callRemoteService());
    }
}
```

Ideal candidates:

- HTTP requests
- database waits
- file/network I/O
- many blocking tasks

Virtual threads do not make CPU-intensive work magically faster.

For CPU-bound tasks, core count still matters.

---

# 60. Java Memory Model

## Beginner Explanation

The Java Memory Model defines the rules that determine how reads and writes performed by different threads become visible to one another.

This is deeper than “objects live in memory.” Modern CPUs, compilers, and the JVM can reorder or cache operations for performance. The Java Memory Model establishes guarantees that let correctly synchronized programs behave predictably.

Important concepts include:

```text
visibility
atomicity
ordering
happens-before
volatile
locks
final-field guarantees
```

You do not need to memorize the formal specification initially, but you must understand that shared mutable state needs defined synchronization.


The Java Memory Model defines how threads interact through memory.

Important ideas:

```text
visibility
ordering
atomicity
happens-before
volatile
synchronization
final-field semantics
```

## volatile

`volatile` tells Java that reads and writes of a variable need special cross-thread visibility/ordering guarantees.

Use it for suitable simple shared state such as a stop flag. Do not confuse visibility with atomicity: a compound operation can still race even when the variable itself is volatile.


```java
private volatile boolean running = true;
```

`volatile` provides visibility and ordering guarantees for that variable, but does not make compound actions atomic.

Wrong assumption:

```java
volatile int count;
count++;
```

`count++` is still a read-modify-write sequence.

---

# 61. JVM Architecture

## Beginner Explanation

The JVM is the runtime engine that executes Java bytecode. It does much more than simply read one instruction after another.

It manages:

```text
class loading
memory
threads
garbage collection
bytecode execution
JIT compilation
native interaction
runtime diagnostics
```

Understanding JVM architecture turns mysterious production issues into diagnosable engineering problems.


Conceptual components:

```text
Class Loader
Runtime Data Areas
Execution Engine
Garbage Collector
Native Interface
```

Execution engine includes interpretation and JIT compilation.

Understanding the JVM helps diagnose:

- memory leaks
- GC pauses
- CPU spikes
- class-loading problems
- thread deadlocks
- startup issues

---

# 62. Class Loading

## Beginner Explanation

Before Java can use a class, the JVM must locate its bytecode, verify it, prepare it, and initialize it. This overall process is called class loading.

Normally you never think about it, but it becomes important when dealing with:

```text
dependency conflicts
application servers
plugins
hot reload
multiple versions of a library
static initialization failures
```

A class can even exist more than once in a JVM when loaded by different class loaders, which is one reason class-loading bugs can be surprising.


Main phases:

```text
Loading
Linking
    Verification
    Preparation
    Resolution
Initialization
```

Common loaders conceptually include:

- bootstrap
- platform
- application

Class loading becomes important in:

- application servers
- plugin systems
- hot reload
- test isolation
- dependency conflicts

---

# 63. Stack, Heap, and Metaspace

## Beginner Explanation

Java runtime memory is divided into areas with different responsibilities.

A simplified learning model is:

```text
Thread stack → method calls and local execution state
Heap         → ordinary objects and arrays
Metaspace    → class metadata
```

When a method calls another method, a new stack frame is created. When you use `new`, an object is normally allocated in managed heap memory.

Understanding these areas helps you interpret errors such as stack overflow and heap exhaustion.


## Stack

Per-thread call frames.

Typically stores:

- method frames
- local primitive values
- local references

## Heap

Objects and arrays are allocated here in the usual Java object model.

## Metaspace

Stores class metadata using native memory.

## Typical Errors

```text
StackOverflowError
OutOfMemoryError: Java heap space
OutOfMemoryError: Metaspace
```

---

# 64. Garbage Collection

## Beginner Explanation

Garbage collection automatically reclaims memory occupied by objects that are no longer reachable by the application.

This means Java developers normally do not manually free object memory. However, garbage collection does **not** mean memory problems are impossible.

If your program accidentally keeps references to objects it no longer needs, the collector correctly treats those objects as reachable and cannot reclaim them. That is a common form of memory leak in managed languages.

Learn to think in terms of **object reachability and retention**, not “Java handles all memory for me.”


Garbage collectors reclaim objects that are no longer reachable.

You should understand:

- reachability
- young/old generations as a common generational concept
- stop-the-world pauses
- allocation rate
- promotion
- GC logs
- heap sizing

Common collectors in modern JDKs include collectors designed for different latency/throughput goals.

Do not choose GC flags randomly from blog posts. Measure your workload.

---

# 65. JIT Compilation

## Beginner Explanation

The JVM initially executes bytecode and can identify code paths that run frequently. A Just-In-Time compiler can then convert hot code into optimized native machine code.

This runtime optimization is one reason long-running Java applications can achieve strong performance.

It also means simplistic performance tests are unreliable because results may be affected by:

```text
JIT warm-up
dead-code elimination
inlining
garbage collection
CPU scheduling
allocation optimizations
```

For serious microbenchmarks, use JMH rather than timing a loop with `System.currentTimeMillis()`.


The JVM can compile hot bytecode into optimized native machine code at runtime.

Optimizations may include:

- inlining
- escape analysis
- dead-code elimination
- loop optimizations
- speculative optimization

This is why naïve microbenchmarks can be misleading.

Use JMH for serious Java microbenchmarking.

---

# 66. JDBC

## Beginner Explanation

JDBC is Java's standard low-level API for working with relational databases. It lets you open connections, send SQL, bind parameters, read result sets, and manage transactions.

A typical flow is:

```text
obtain connection
→ prepare SQL
→ bind parameters
→ execute
→ read rows
→ close resources
```

Even when you later use JPA or another ORM, JDBC concepts remain important because the framework ultimately interacts with a database and transaction system underneath.


Basic query:

```java
String sql =
    "SELECT id, name FROM customer WHERE status = ?";

try (
    Connection connection = dataSource.getConnection();
    PreparedStatement statement =
        connection.prepareStatement(sql)
) {
    statement.setString(1, "ACTIVE");

    try (ResultSet rs = statement.executeQuery()) {
        while (rs.next()) {
            long id = rs.getLong("id");
            String name = rs.getString("name");

            System.out.println(id + " " + name);
        }
    }
}
```

Always prefer parameterized queries.

Bad:

```java
"SELECT * FROM user WHERE name = '" + name + "'"
```

Good:

```java
"SELECT * FROM user WHERE name = ?"
```

This also helps prevent SQL injection.

---

# 67. Transactions

## Beginner Explanation

A database transaction groups multiple operations into one logical unit of work.

Imagine transferring money:

```text
debit account A
credit account B
```

If the debit succeeds but the credit fails, the database must not leave the system halfway updated. A transaction allows both changes to commit together or roll back together.

Transaction design is critical for financial, inventory, workflow, and other consistency-sensitive applications.


```java
connection.setAutoCommit(false);

try {
    debit(connection);
    credit(connection);

    connection.commit();
} catch (Exception e) {
    connection.rollback();
    throw e;
}
```

A transaction usually aims to preserve ACID properties:

```text
Atomicity
Consistency
Isolation
Durability
```

Understand isolation phenomena:

```text
dirty read
non-repeatable read
phantom read
lost update
```

Framework transaction annotations are convenient, but you still need to understand the underlying database transaction behavior.

---

# 68. HTTP Client

## Beginner Explanation

Java's HTTP client allows an application to call web APIs and other HTTP services.

Calling an API is more than constructing a URL. Production code must consider:

```text
HTTP method
headers
authentication
request body
response body
status code
timeout
failure handling
retry
TLS
rate limits
```

Always distinguish transport success from business success: receiving an HTTP response does not automatically mean the business operation succeeded.


Modern Java provides an HTTP client.

```java
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://example.com/api/users"))
    .GET()
    .build();

HttpResponse<String> response =
    client.send(
        request,
        HttpResponse.BodyHandlers.ofString()
    );
```

Async:

```java
client.sendAsync(
    request,
    HttpResponse.BodyHandlers.ofString()
);
```

Production HTTP calls should consider:

- timeout
- retry strategy
- backoff
- authentication
- TLS
- idempotency
- rate limits
- circuit breaking
- observability

---

# 69. JSON in Java

## Beginner Explanation

JSON is a common text format for exchanging structured data between systems.

Example:

```json
{
  "id": 10,
  "name": "Asha",
  "active": true
}
```

Java objects and JSON have different representations, so a JSON library maps between them.

This is often called:

```text
serialization   → Java object to JSON
deserialization → JSON to Java object
```

Be careful when external JSON contracts change, because your Java DTOs may need versioning or backward compatibility.


Java SE does not provide one universal application JSON mapping API equivalent to popular external libraries.

Common libraries include:

- Jackson
- Gson
- JSON-B implementations

Jackson example:

```java
ObjectMapper mapper = new ObjectMapper();

String json = mapper.writeValueAsString(user);

User parsed =
    mapper.readValue(json, User.class);
```

Keep DTOs separate from core domain models when external API contracts differ from internal behavior.

---

# 70. Logging

## Beginner Explanation

Logging records what an application is doing so developers and operators can understand behavior later.

Console printing may be enough while learning, but production applications need structured logging with levels and context.

Typical levels include:

```text
TRACE
DEBUG
INFO
WARN
ERROR
```

A useful log should help answer what happened and to which request/entity, without exposing secrets or flooding the system with noise.


Avoid:

```java
System.out.println("production log");
```

Use a logging abstraction and implementation appropriate to the project.

Typical combination:

```text
SLF4J + Logback
```

Example:

```java
private static final Logger log =
    LoggerFactory.getLogger(InvoiceService.class);

log.info("Processing invoice id={}", invoiceId);
```

Good logs answer:

```text
what happened?
for which request/entity?
when?
where?
what was the outcome?
```

Never log secrets such as:

```text
passwords
access tokens
private keys
full payment credentials
sensitive personal information unless explicitly justified and protected
```

---

# 71. Unit Testing

## Beginner Explanation

A unit test automatically checks a small piece of behavior. Instead of manually running the program and visually checking every output after each change, tests verify expectations repeatedly.

Example idea:

```text
Given price 100 and tax rate 18%
When tax is calculated
Then result is 18
```

Good unit tests are fast, deterministic, readable, and focused on behavior.

Testing is not something to learn after Java; it is part of learning to design Java code well.


JUnit-style example:

```java
class CalculatorTest {

    @Test
    void addsTwoNumbers() {
        Calculator calculator = new Calculator();

        int result = calculator.add(2, 3);

        assertEquals(5, result);
    }
}
```

A useful test often follows:

```text
Arrange
Act
Assert
```

## Parameterized Testing

Useful when the same rule has many inputs.

Test:

- happy path
- boundaries
- null/empty inputs
- invalid state
- exceptions
- edge cases

---

# 72. Mocking

## Beginner Explanation

Mocking creates controlled stand-ins for dependencies that are inconvenient or inappropriate to use in a unit test.

Suppose `OrderService` calls a payment provider. A unit test should not charge a real card, so it can provide a mock `PaymentGateway`.

Mocks are useful for verifying interaction with external collaborators, but excessive mocking can make tests brittle. Prefer real simple objects when they are cheap and deterministic.


Mock external collaborators, not every object.

Example conceptually:

```java
PaymentGateway gateway = mock(PaymentGateway.class);

when(gateway.charge(any()))
    .thenReturn(PaymentResult.success());

OrderService service =
    new OrderService(gateway);

service.placeOrder(order);

verify(gateway).charge(any());
```

Avoid over-mocking private implementation details.

A test should survive harmless refactoring when behavior remains unchanged.

---

# 73. Maven

## Beginner Explanation

Maven is a build and dependency-management tool. It automates tasks that would otherwise become tedious:

```text
compile code
download libraries
run tests
package application
execute plugins
build multiple modules
```

The `pom.xml` file describes the project.

When you add a dependency, Maven can download that library and many of its required transitive dependencies automatically.

Learning Maven is essential for reading and building a large portion of enterprise Java projects.


Typical structure:

```text
src/
  main/
    java/
    resources/
  test/
    java/
    resources/
pom.xml
```

Common commands:

```bash
mvn clean
mvn test
mvn package
mvn verify
mvn dependency:tree
```

Dependency example:

```xml
<dependency>
    <groupId>org.example</groupId>
    <artifactId>example-library</artifactId>
    <version>...</version>
</dependency>
```

Understand:

- lifecycle
- plugins
- dependency scopes
- transitive dependencies
- BOMs
- dependency management
- multi-module builds

---

# 74. Gradle

## Beginner Explanation

Gradle is another build automation and dependency-management tool. It solves many of the same problems as Maven but uses a programmable build model and supports Groovy or Kotlin DSL.

A Gradle project describes:

```text
plugins
dependencies
tasks
source sets
build configuration
```

Do not focus on “Maven vs Gradle winner.” Learn to understand the build tool used by the project in front of you.


Typical commands:

```bash
gradle build
gradle test
gradle dependencies
```

Gradle supports Groovy and Kotlin DSLs.

Understand:

- tasks
- plugins
- dependency configurations
- multi-project builds
- build cache
- wrapper

Always commit and use the build wrapper when the project provides one:

```text
mvnw
gradlew
```

---

# 75. SOLID Principles

## Beginner Explanation

SOLID is a group of object-oriented design principles intended to reduce coupling and make software easier to change.

The principles are not laws and should not be applied mechanically. Their real purpose is to help you notice design problems such as:

```text
classes doing too much
code that is hard to extend
subtypes that break expectations
huge interfaces
business logic tightly coupled to infrastructure
```

Use SOLID as a thinking tool during design and refactoring.


## S — Single Responsibility Principle

A class should have one coherent reason to change.

Bad:

```text
InvoiceService
- OCR
- calculate tax
- save database
- send email
- generate PDF
- post SAP data
```

Better split responsibilities.

## O — Open/Closed Principle

Extend behavior without repeatedly changing stable core logic.

Strategy pattern is useful.

## L — Liskov Substitution Principle

A subtype should behave consistently with the expectations established by its base abstraction.

## I — Interface Segregation Principle

Prefer focused interfaces.

Bad:

```java
interface Worker {
    void code();
    void driveForklift();
    void approveInvoice();
}
```

## D — Dependency Inversion Principle

High-level business logic should depend on abstractions.

```java
class InvoiceService {
    private final InvoiceRepository repository;
}
```

---

# 76. Clean Code

## Beginner Explanation

Clean code is code that another developer can understand, change, test, and debug with reasonable effort.

It is not simply code with fewer lines.

Clean Java usually has:

```text
meaningful names
small cohesive methods
clear domain concepts
limited side effects
explicit error handling
consistent formatting
sensible boundaries
useful tests
```

The best measure of clean code is maintainability, not cleverness.


## Use Meaningful Names

Bad:

```java
int x;
List<Data> d;
```

Better:

```java
int retryCount;
List<Invoice> pendingInvoices;
```

## Keep Methods Focused

Bad:

```java
processEverything()
```

Better:

```java
parseInvoice()
validateInvoice()
matchPurchaseOrder()
routeForApproval()
postToErp()
```

## Prefer Guard Clauses

Instead of:

```java
if (user != null) {
    if (user.isActive()) {
        if (user.hasPermission()) {
            process();
        }
    }
}
```

Use:

```java
if (user == null) return;
if (!user.isActive()) return;
if (!user.hasPermission()) return;

process();
```

## Avoid Boolean Parameter Mystery

Bad:

```java
process(true, false, true);
```

Better:

```java
process(new ProcessingOptions(...));
```

or use explicit methods/types.

## Avoid Magic Numbers

Bad:

```java
if (retry > 3)
```

Better:

```java
private static final int MAX_RETRIES = 3;
```

---

# 77. Design Patterns

## Beginner Explanation

A design pattern is a reusable **design idea** for a recurring software problem. It is not a library and usually not something you copy line for line.

For example, the Strategy pattern says:

```text
put interchangeable business algorithms behind a common interface
```

Patterns help developers communicate because saying “use a Strategy here” can describe a whole design approach.

Do not force patterns into simple code. A pattern is useful only when it makes the design easier to understand or change.


Patterns are vocabulary, not rules.

Use them when they simplify a genuine design problem.

## Factory

```java
PaymentProcessor create(PaymentType type)
```

Useful when object creation varies.

## Strategy

```java
interface DiscountStrategy {
    BigDecimal calculate(Order order);
}
```

Useful when business rules vary.

## Builder

```java
Order order = Order.builder()
    .customerId(1L)
    .amount(new BigDecimal("100.00"))
    .build();
```

Useful for complex construction.

## Adapter

Convert one interface into another.

Example:

```text
LegacySapClient
      ↓ Adapter
ErpGateway
```

## Decorator

Add behavior around another implementation.

Examples:

```text
logging
metrics
caching
retry
authorization
```

## Observer

Notify subscribers when an event occurs.

## Template Method

Superclass defines algorithm skeleton; subclasses customize steps.

## Chain of Responsibility

Example approval flow:

```text
Manager
  ↓
Finance
  ↓
Controller
```

## Command

Represent an operation as an object.

```text
ApproveInvoiceCommand
CancelOrderCommand
CreateUserCommand
```

## Repository

Abstract persistence behavior.

```java
interface InvoiceRepository {
    Optional<Invoice> findById(long id);
    void save(Invoice invoice);
}
```

---

# 78. Data Structures

## Beginner Explanation

A data structure is a way of organizing data so particular operations can be performed efficiently.

Different structures optimize different needs:

```text
array      → indexed access
hash table → fast lookup by key
queue      → first-in-first-out processing
stack      → last-in-first-out processing
heap       → quickly retrieve highest/lowest priority
tree       → hierarchical or sorted relationships
graph      → arbitrary relationships
```

Java collections provide many of these structures, but understanding the underlying idea helps you choose correctly.


Every Java developer should understand:

```text
array
dynamic array
linked list
stack
queue
deque
hash table
set
heap / priority queue
tree
binary search tree
trie
graph
disjoint set
```

## PriorityQueue

```java
PriorityQueue<Integer> queue =
    new PriorityQueue<>();

queue.add(30);
queue.add(10);
queue.add(20);

System.out.println(queue.poll()); // 10
```

Max heap behavior:

```java
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Comparator.reverseOrder());
```

---

# 79. Algorithms

## Beginner Explanation

An algorithm is a step-by-step method for solving a problem. Two algorithms can produce the same result but require very different amounts of time or memory.

Big-O notation describes how resource usage grows as input size grows.

For example:

```text
scan every item       → often O(n)
binary search         → O(log n)
nested full scans     → often O(n²)
```

Algorithm knowledge matters in interviews, but more importantly it helps you prevent slow production code when data volume grows.


Master complexity:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2^n)
O(n!)
```

Know:

- linear search
- binary search
- sorting
- two pointers
- sliding window
- prefix sums
- hash-based lookup
- recursion
- backtracking
- BFS
- DFS
- Dijkstra
- topological sorting
- dynamic programming
- greedy algorithms

## Binary Search

```java
static int binarySearch(int[] values, int target) {
    int left = 0;
    int right = values.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (values[mid] == target) {
            return mid;
        }

        if (values[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

---

# 80. Security Essentials

## Beginner Explanation

Security is not a single Java API. It is a collection of design practices that protect data, users, and systems.

A secure Java backend must assume that external input can be malicious or malformed.

Important boundaries include:

```text
user input
HTTP requests
database queries
file paths/uploads
authentication tokens
external services
configuration/secrets
serialized data
```

Security must be designed into the application rather than added only after development.


Every Java backend developer should understand:

- input validation
- output encoding
- authentication
- authorization
- SQL injection
- command injection
- path traversal
- SSRF
- XSS in web contexts
- CSRF
- secrets management
- password hashing
- TLS
- dependency vulnerabilities
- deserialization risks
- file-upload security
- rate limiting
- least privilege

## SQL Injection

SQL injection happens when untrusted input is concatenated into SQL in a way that changes the intended query structure.

Prepared statements separate SQL structure from parameter values. They are a fundamental defense, together with proper permissions and validation.


Never:

```java
String sql =
    "SELECT * FROM user WHERE username = '" +
    username +
    "'";
```

Use prepared statements.

## Passwords

Passwords should never be encrypted with a reversible key merely so the application can recover the original password. Authentication systems normally store a strong **password hash** created with an appropriate password-hashing algorithm and unique salt.

Use mature security frameworks instead of designing your own password scheme.


Never store plaintext passwords.

Use a purpose-built password hashing algorithm through a well-maintained security library/framework.

## Secrets

Do not hardcode:

```java
String apiKey = "real-secret-key";
```

Use secure secret-management/configuration mechanisms.

---

# 81. Performance Engineering

## Beginner Explanation

Performance engineering means identifying where time or resources are actually being spent and improving the real bottleneck.

A common beginner mistake is optimizing tiny Java syntax while the application spends 95% of its time waiting for a database query.

Always measure first.

Think in layers:

```text
application code
database
network
disk
memory allocation
garbage collection
locks
thread pools
serialization
external APIs
```

Profiling and metrics are more trustworthy than guesses.


Optimization workflow:

```text
Measure
↓
Identify bottleneck
↓
Form hypothesis
↓
Change one thing
↓
Measure again
```

Do not optimize based only on intuition.

Investigate:

- CPU
- memory
- allocation
- GC
- threads
- lock contention
- database queries
- network latency
- serialization
- connection pools
- file I/O

Useful JDK tools include:

```text
jcmd
jstack
jmap
jconsole
Java Flight Recorder
Java Mission Control
```

Use JMH for microbenchmarks.

## Example Problem: N+1 Query

Bad pattern:

```text
load 100 orders
for each order:
    query customer
```

Potential solution:

- join/fetch efficiently
- batch query
- cache where appropriate
- redesign data access

Often database access dominates far more than tiny Java syntax optimizations.

---

# 82. Debugging

## Beginner Explanation

Debugging is the process of finding **why actual behavior differs from expected behavior**.

Good debugging is systematic:

```text
reproduce the issue
→ narrow the failing area
→ inspect relevant state
→ form a hypothesis
→ test the hypothesis
→ fix root cause
→ add a test/guard where appropriate
```

An IDE debugger is invaluable while developing, while production problems often require logs, metrics, traces, thread dumps, heap dumps, or Java Flight Recorder.


Learn IDE debugging thoroughly.

Master:

- breakpoints
- conditional breakpoints
- watch expressions
- step over
- step into
- step out
- evaluate expression
- thread inspection
- exception breakpoints

## Production Thread Dump

A thread dump is a snapshot of Java threads and their call stacks. It shows what each thread is executing or waiting on.

When many requests are stuck, thread dumps can reveal a shared blocked lock, slow database call, deadlock, or runaway loop.


A thread dump helps investigate:

```text
deadlocks
blocked threads
CPU-heavy loops
thread starvation
request pileups
```

## Heap Dump

A heap dump is a snapshot of objects and references in heap memory. Memory-analysis tools can show which object types consume space and why they remain reachable.

This is one of the most useful techniques for diagnosing retained-memory leaks and `OutOfMemoryError`.


Useful for:

```text
memory leaks
unexpected retention
large object graphs
OutOfMemoryError
```

---

# 83. Production Java Practices

## Beginner Explanation

Production code has requirements that small tutorial programs usually ignore.

A method may work perfectly on your laptop but fail in production because of:

```text
network timeout
server restart
duplicate request
database overload
memory limit
partial downstream failure
expired credential
concurrent access
unexpected input
```

Production engineering means designing for these realities, observing the system, and recovering from expected failure modes safely.


A production service should consider:

```text
configuration
timeouts
retries
circuit breaking
health checks
graceful shutdown
structured logging
metrics
tracing
security
dependency updates
database migrations
connection pooling
resource limits
error handling
idempotency
backpressure
auditability
observability
```

## Idempotency Scenario

A payment API receives the same request twice because the network timed out.

Without idempotency:

```text
₹500 charged twice
```

With idempotency key:

```text
same request key
→ return original result
→ do not charge again
```

---

# 84. Spring Ecosystem Orientation

## Beginner Explanation

Spring is a large Java ecosystem used heavily for enterprise applications. Spring Boot makes it easier to configure and launch Spring-based services.

The most important idea behind Spring is not annotations. It is **dependency management and application infrastructure**.

For example, your business service may declare that it needs an `InvoiceRepository`, while Spring creates and connects the appropriate implementation.

Learn core Java first so that annotations such as `@Service`, `@Transactional`, and dependency injection do not feel like unexplained magic.


You can master Java without Spring, but enterprise Java developers should understand the ecosystem.

Key areas:

```text
Spring Framework
Spring Boot
Spring MVC / REST
Dependency Injection
Spring Data
Spring Security
Spring Transactions
Validation
Configuration
Actuator
Testing
```

Do not learn Spring before understanding:

```text
interfaces
generics
annotations
reflection conceptually
collections
exceptions
HTTP
JDBC
transactions
dependency injection
```

Otherwise Spring can feel like "magic".

---

# 85. Microservice Concepts

## Beginner Explanation

Microservices are an architectural approach where a system is divided into independently deployable services around meaningful business capabilities.

The difficult part is not creating many Spring Boot projects. The difficult parts are distributed-system concerns such as:

```text
network failure
data ownership
eventual consistency
service contracts
observability
deployment
security
retries
duplicate messages
versioning
```

Start with a well-structured monolith when that solves the problem. Split services only when independent boundaries provide meaningful organizational or technical value.


Java is commonly used for service-oriented and microservice systems.

Understand:

- REST
- HTTP status codes
- API contracts
- versioning
- authentication
- message queues
- eventual consistency
- distributed transactions
- outbox pattern
- idempotency
- retries
- circuit breakers
- tracing
- service discovery
- API gateways
- configuration
- containers
- orchestration

## Important

A microservice is not simply:

```text
one Spring Boot project = one microservice
```

A service boundary should reflect business capability, ownership, deployment, and data boundaries.

---

# 86. Scenario Cookbook

## Beginner Explanation

This section is where individual Java concepts are combined into realistic problems. Real applications rarely use a concept in isolation. An invoice workflow, for example, may use records, collections, enums, interfaces, streams, concurrency, database transactions, and HTTP calls together.

For every scenario, ask yourself:

```text
What is the business requirement?
Which Java concept solves it?
Why was this data structure selected?
What can fail?
How should the code be tested?
How would this change at production scale?
```

Do not only read these examples. Rebuild them without looking at the solution.


This section combines multiple Java concepts into realistic scenarios.

---

## Scenario 1 — Invoice Validation Engine

Requirement:

```text
Invoice amount > 0
Invoice number required
Vendor required
Invoice date cannot be future
```

Model:

```java
public record Invoice(
    String invoiceNumber,
    String vendor,
    BigDecimal amount,
    LocalDate invoiceDate
) {}
```

Validator:

```java
public class InvoiceValidator {

    public List<String> validate(Invoice invoice) {
        List<String> errors = new ArrayList<>();

        if (invoice.invoiceNumber() == null ||
            invoice.invoiceNumber().isBlank()) {
            errors.add("Invoice number is required");
        }

        if (invoice.vendor() == null ||
            invoice.vendor().isBlank()) {
            errors.add("Vendor is required");
        }

        if (invoice.amount() == null ||
            invoice.amount().signum() <= 0) {
            errors.add("Amount must be positive");
        }

        if (invoice.invoiceDate() != null &&
            invoice.invoiceDate().isAfter(LocalDate.now())) {
            errors.add("Invoice date cannot be future");
        }

        return errors;
    }
}
```

Concepts used:

```text
records
BigDecimal
LocalDate
collections
validation
immutability
```

---

## Scenario 2 — Vendor-Specific Extraction Strategy

Different vendors use different invoice labels.

```java
interface InvoiceExtractionStrategy {
    ExtractedInvoice extract(OcrDocument document);
}
```

```java
class VendorAExtractionStrategy
        implements InvoiceExtractionStrategy {

    @Override
    public ExtractedInvoice extract(OcrDocument document) {
        // Vendor A aliases and rules
        return null;
    }
}
```

Resolver:

```java
class ExtractionStrategyResolver {

    private final Map<String, InvoiceExtractionStrategy> strategies;

    ExtractionStrategyResolver(
        Map<String, InvoiceExtractionStrategy> strategies
    ) {
        this.strategies = strategies;
    }

    InvoiceExtractionStrategy resolve(String vendor) {
        return strategies.getOrDefault(
            vendor,
            strategies.get("DEFAULT")
        );
    }
}
```

Concepts:

```text
Strategy Pattern
Map
interfaces
dependency injection
default fallback
```

---

## Scenario 3 — Approval Chain

```java
interface Approver {
    ApprovalDecision approve(Invoice invoice);
}
```

Possible chain:

```text
ManagerApprover
→ FinanceApprover
→ ControllerApprover
```

Suitable patterns:

```text
Chain of Responsibility
Strategy
Domain Service
```

---

## Scenario 4 — Deduplicating Invoice Numbers

```java
Set<String> seenInvoiceNumbers = new HashSet<>();

for (Invoice invoice : invoices) {
    if (!seenInvoiceNumbers.add(invoice.invoiceNumber())) {
        System.out.println(
            "Duplicate: " + invoice.invoiceNumber()
        );
    }
}
```

Why this works:

`Set.add()` returns `false` when the value already exists.

---

## Scenario 5 — Group Invoices by Vendor

```java
Map<String, List<Invoice>> invoicesByVendor =
    invoices.stream()
        .collect(Collectors.groupingBy(Invoice::vendor));
```

---

## Scenario 6 — Sum Invoice Value by Vendor

```java
Map<String, BigDecimal> totals =
    invoices.stream()
        .collect(Collectors.groupingBy(
            Invoice::vendor,
            Collectors.reducing(
                BigDecimal.ZERO,
                Invoice::amount,
                BigDecimal::add
            )
        ));
```

---

## Scenario 7 — Retry Remote ERP Call

```java
public ErpResponse postWithRetry(Invoice invoice) {
    int maxAttempts = 3;

    for (int attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return erpClient.post(invoice);
        } catch (TemporaryErpException e) {
            if (attempt == maxAttempts) {
                throw e;
            }

            sleepWithBackoff(attempt);
        }
    }

    throw new IllegalStateException("Unreachable");
}
```

Production improvement ideas:

```text
exponential backoff
jitter
idempotency
retry only transient failures
timeout
metrics
circuit breaker
```

---

## Scenario 8 — Process Many Blocking HTTP Calls

```java
try (var executor =
         Executors.newVirtualThreadPerTaskExecutor()) {

    List<Future<Result>> futures = requests.stream()
        .map(request ->
            executor.submit(() -> callRemoteApi(request))
        )
        .toList();

    for (Future<Result> future : futures) {
        System.out.println(future.get());
    }
}
```

Use when tasks are predominantly waiting on blocking I/O.

---

## Scenario 9 — Thread-Safe Cache

```java
class CustomerCache {

    private final ConcurrentHashMap<Long, Customer> cache =
        new ConcurrentHashMap<>();

    Customer get(
        long id,
        Function<Long, Customer> loader
    ) {
        return cache.computeIfAbsent(id, loader);
    }
}
```

Consider:

- expiry
- maximum size
- stale data
- failed loads
- cache stampede
- distributed consistency

For serious caching, a mature cache library is usually preferable.

---

## Scenario 10 — Parse Large CSV File

```java
try (Stream<String> lines =
         Files.lines(Path.of("invoices.csv"))) {

    lines.skip(1)
         .map(this::parseInvoice)
         .filter(Objects::nonNull)
         .forEach(this::process);
}
```

This avoids loading the entire file at once.

---

## Scenario 11 — Banking Transfer

```java
public void transfer(
    Account from,
    Account to,
    BigDecimal amount
) {
    if (amount.signum() <= 0) {
        throw new IllegalArgumentException(
            "Amount must be positive"
        );
    }

    from.withdraw(amount);
    to.deposit(amount);
}
```

Database-backed production version must also handle:

```text
transaction boundaries
locking/concurrency
idempotency
audit logs
failure recovery
currency
precision
authorization
```

---

## Scenario 12 — Shopping Cart

```java
record CartItem(
    String productId,
    BigDecimal unitPrice,
    int quantity
) {
    BigDecimal total() {
        return unitPrice.multiply(
            BigDecimal.valueOf(quantity)
        );
    }
}
```

```java
BigDecimal cartTotal =
    items.stream()
        .map(CartItem::total)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
```

---

# 87. Common Java Mistakes

## Beginner Explanation

Many Java bugs come from a relatively small set of recurring misunderstandings. Studying common mistakes lets you recognize dangerous patterns before they become production defects.

The goal of this section is not to memorize a list. For every mistake, understand the reason it is incorrect and the safer alternative.


## Mistake 1 — String Comparison with `==`

Wrong:

```java
status == "APPROVED"
```

Correct:

```java
"APPROVED".equals(status)
```

or:

```java
Objects.equals(status, "APPROVED")
```

Better still, consider enum:

```java
status == InvoiceStatus.APPROVED
```

---

## Mistake 2 — Using `double` for Money

Wrong:

```java
double amount = 100.10;
```

Preferred:

```java
BigDecimal amount =
    new BigDecimal("100.10");
```

---

## Mistake 3 — Returning `null` Collections

Avoid:

```java
return null;
```

Prefer:

```java
return List.of();
```

when an empty collection accurately represents "no results".

---

## Mistake 4 — Catching Everything

Bad:

```java
try {
    run();
} catch (Exception e) {
    return null;
}
```

This destroys failure information.

---

## Mistake 5 — Mutable Shared State

Bad:

```java
static List<String> results = new ArrayList<>();
```

when accessed concurrently without control.

---

## Mistake 6 — Ignoring `hashCode`

If you override `equals`, normally override `hashCode` consistently.

---

## Mistake 7 — Exposing Internal Mutable Collection

Bad:

```java
public List<String> getRoles() {
    return roles;
}
```

Potential alternatives:

```java
return List.copyOf(roles);
```

or expose controlled behavior.

---

## Mistake 8 — One Giant Service Class

Bad:

```text
UserService
3000 lines
87 methods
database + email + validation + mapping + HTTP
```

Refactor by responsibility.

---

## Mistake 9 — Excessive `Optional.get()`

Bad:

```java
repository.findById(id).get();
```

Better:

```java
repository.findById(id)
    .orElseThrow(() -> new NotFoundException(id));
```

---

## Mistake 10 — Parallel Stream Everywhere

```java
items.parallelStream()
```

is not an automatic performance upgrade.

Parallelism introduces:

- scheduling overhead
- shared resource pressure
- ordering concerns
- common-pool interactions
- thread-safety requirements

Measure first.

---

# 88. Interview Questions

## Beginner Explanation

Interview questions are useful when they force you to explain a concept rather than repeat syntax. A strong answer should normally include:

```text
definition
why it exists
small example
trade-off
real-world use case
common mistake
```

If you can explain a topic clearly to a beginner, you probably understand it much better than someone who memorized a one-line answer.


You should be able to explain these without memorized textbook sentences.

## Java Core

1. JDK vs JVM vs JRE?
2. Why is Java platform-independent?
3. Primitive vs reference type?
4. Why is `String` immutable?
5. `==` vs `equals()`?
6. Why must `hashCode()` agree with `equals()`?
7. Method overloading vs overriding?
8. Abstract class vs interface?
9. Composition vs inheritance?
10. `final`, `finally`, `finalize`?
11. Checked vs unchecked exceptions?
12. Why use try-with-resources?
13. Is Java pass-by-reference?
14. What does `static` mean?
15. Why can autounboxing throw `NullPointerException`?

## Collections

16. ArrayList vs LinkedList?
17. HashMap internally?
18. HashMap vs ConcurrentHashMap?
19. HashSet internally?
20. TreeMap vs HashMap?
21. What happens when two keys have the same hash?
22. Why should map keys generally be immutable?
23. Fail-fast iterator?
24. `Comparable` vs `Comparator`?

## Generics

25. What is type erasure?
26. Why cannot you normally instantiate `new T()`?
27. `? extends T` vs `? super T`?
28. Explain PECS.

## Streams

29. `map` vs `flatMap`?
30. Intermediate vs terminal operations?
31. Lazy stream execution?
32. `reduce`?
33. When should streams not be used?

## Concurrency

34. Process vs thread?
35. `synchronized` vs `Lock`?
36. What is a race condition?
37. Deadlock?
38. What does `volatile` guarantee?
39. Atomicity vs visibility?
40. ExecutorService?
41. Future vs CompletableFuture?
42. ConcurrentHashMap?
43. Virtual threads?
44. Why don't virtual threads speed up CPU-heavy work?

## JVM

45. Heap vs stack?
46. Metaspace?
47. How does GC know an object is unused?
48. What is JIT?
49. Class-loader lifecycle?
50. How would you investigate `OutOfMemoryError`?
51. How would you diagnose deadlock?
52. Why are microbenchmarks difficult on the JVM?

## Database

53. PreparedStatement vs Statement?
54. What is a transaction?
55. ACID?
56. Isolation levels?
57. Connection pooling?
58. N+1 query problem?

## Architecture

59. SOLID?
60. Dependency injection?
61. Repository pattern?
62. Strategy pattern?
63. Factory pattern?
64. Idempotency?
65. Retry vs circuit breaker?
66. Monolith vs microservices?

---

# 89. Practice Exercises

## Beginner Explanation

Programming skill develops through solving problems, not only reading. These exercises are intentionally arranged from small syntax practice to larger design problems.

For each exercise:

1. solve it yourself,
2. write tests,
3. review complexity,
4. refactor names and structure,
5. compare an alternative solution.

Do not copy the final solution immediately when you become stuck. First reduce the problem to a smaller version.


## Beginner

1. FizzBuzz
2. Prime number checker
3. Fibonacci
4. Factorial
5. Palindrome
6. Reverse string
7. Character frequency
8. Maximum in array
9. Remove duplicates
10. Find second-largest number

## Intermediate

11. Bank account model
12. Employee payroll
13. Library management
14. Student grading system
15. CSV parser
16. Invoice validator
17. Inventory system
18. Word-frequency analyzer
19. LRU cache
20. Multi-threaded counter

## Advanced

21. Thread-safe producer-consumer system
22. Mini HTTP client wrapper
23. Database transaction service
24. File ingestion pipeline
25. Plugin system using reflection
26. Event dispatcher
27. Retry engine with exponential backoff
28. Rate limiter
29. In-memory key-value store
30. Concurrent job scheduler

---

# 90. Project Roadmap

## Beginner Explanation

Projects connect isolated language features into usable engineering skill. Each project in this roadmap introduces another layer of complexity.

A strong learning project should make you practice:

```text
requirements
domain modeling
coding
error handling
testing
debugging
version control
refactoring
documentation
```

Finishing and improving one project teaches more than repeatedly starting new tutorials.


Build these in order.

## Project 1 — Console Expense Tracker

Concepts:

```text
variables
conditions
loops
methods
classes
collections
BigDecimal
file storage
```

Features:

- add expense
- list expenses
- filter by date/category
- total by category
- save/load CSV

---

## Project 2 — Invoice Processor

Concepts:

```text
OOP
records
enums
validation
strategy pattern
streams
BigDecimal
LocalDate
JSON
file handling
tests
```

Flow:

```text
Input Document
↓
Extracted Data
↓
Normalize
↓
Validate
↓
Vendor Rules
↓
Approval Status
↓
JSON Output
```

---

## Project 3 — JDBC Inventory Application

Concepts:

```text
JDBC
transactions
repository
SQL
connection pool
testing
logging
```

Features:

- products
- stock
- suppliers
- purchase orders
- stock movement
- reports

---

## Project 4 — REST API

Use a production framework such as Spring Boot.

Features:

```text
customers
orders
products
authentication
validation
database
pagination
sorting
global error handling
logging
tests
```

---

## Project 5 — Concurrent Document Processor

Requirements:

```text
watch folder
detect new files
parse concurrently
limit concurrency
retry failures
move success files
move rejected files
metrics
audit log
```

Concepts:

```text
NIO
executor
virtual threads
blocking queues
concurrent collections
exceptions
observability
```

---

## Project 6 — Enterprise Invoice Workflow

Modules:

```text
OCR intake
vendor identification
field normalization
PO matching
duplicate detection
tax validation
approval routing
ERP posting
query/rejection workflow
audit history
notifications
dashboard
```

This project forces you to combine almost every important Java engineering skill.

---

# 91. Java Version Awareness

## Beginner Explanation

Java evolves over time. New releases add language features, JVM improvements, libraries, and deprecations. At the same time, many companies run older LTS versions for years.

You therefore need two skills:

```text
write modern Java when the runtime allows it
read older Java when maintaining existing systems
```

Never assume a feature is available until you know the project's configured Java version.


Do not become "version-blind".

Enterprise systems may still contain Java 8 or Java 11 code while newer systems use later LTS releases.

Important milestones to recognize:

## Java 8

Major developer-era features:

```text
lambdas
streams
Optional
java.time
default interface methods
CompletableFuture
```

## Java 9

Important platform changes:

```text
module system
collection factory methods
JShell
```

## Java 10

```text
local variable type inference with var
```

Example:

```java
var users = new ArrayList<User>();
```

Use `var` when it improves readability, not when it hides meaning.

## Java 11

Important enterprise LTS baseline.

Includes standardized HTTP client and other platform changes.

## Java 14+

Switch expressions matured across modern Java releases.

## Java 16

Records became a permanent language feature.

Pattern matching evolved over subsequent releases.

## Java 17

LTS release.

Sealed classes became part of modern Java's modeling toolbox.

## Java 21

LTS release.

Virtual threads became a major concurrency capability.

Modern pattern-matching capabilities also significantly improved the language.

## Java 25

Current LTS baseline as of August 2026.

Use it as a strong option for learning modern Java while remembering that companies may operate older runtimes.

## Java 26

Current feature release as of August 2026.

Feature releases move faster than LTS deployment practices. Always check your organization's support policy before upgrading production systems.

---

# 92. Java Cheat Sheet

## Beginner Explanation

A cheat sheet is a memory refresher, not a replacement for understanding. Use this section after learning the full topic when you cannot remember syntax.

If a line in the cheat sheet feels mysterious, return to the detailed section instead of memorizing it blindly.


## Variables

```java
int number = 10;
long id = 100L;
double rate = 2.5;
boolean active = true;
String name = "Java";
```

## List

```java
List<String> list = new ArrayList<>();
```

## Set

```java
Set<String> set = new HashSet<>();
```

## Map

```java
Map<String, Integer> map = new HashMap<>();
```

## Loop

```java
for (String value : list) {
}
```

## Stream

```java
list.stream()
    .filter(...)
    .map(...)
    .toList();
```

## Optional

```java
Optional<User> user =
    repository.findById(id);
```

## Record

```java
record User(long id, String name) {}
```

## Enum

```java
enum Status {
    NEW,
    DONE
}
```

## Exception

```java
try {
} catch (Exception e) {
}
```

## Resource

```java
try (var resource = open()) {
}
```

## Thread

```java
Thread.ofVirtual()
    .start(() -> task());
```

## Executor

```java
try (var executor =
         Executors.newVirtualThreadPerTaskExecutor()) {
}
```

## BigDecimal

```java
BigDecimal total =
    new BigDecimal("100.00");
```

## LocalDate

```java
LocalDate date =
    LocalDate.now();
```

## Sort

```java
list.sort(
    Comparator.comparing(User::name)
);
```

## Grouping

```java
Map<String, List<Employee>> grouped =
    employees.stream()
        .collect(
            Collectors.groupingBy(
                Employee::getDepartment
            )
        );
```

---

# 93. Final Mastery Checklist

## Beginner Explanation

This checklist helps you identify gaps in your Java knowledge. Do not mark an item complete merely because you have heard of the topic.

Mark it complete when you can:

```text
explain it simply
write a small example
recognize when it should be used
recognize when it should not be used
debug a common failure
```

Revisit the checklist every few weeks while learning.


Use this as your progress tracker.

## Fundamentals

- [ ] Can explain JDK, JVM, bytecode, and compilation
- [ ] Comfortable with variables and primitive types
- [ ] Understand reference types
- [ ] Understand operators
- [ ] Can write conditions
- [ ] Can write loops
- [ ] Comfortable with arrays
- [ ] Understand String immutability
- [ ] Understand `==` vs `equals`
- [ ] Can design methods
- [ ] Understand pass-by-value

## OOP

- [ ] Can design a class
- [ ] Understand constructors
- [ ] Understand encapsulation
- [ ] Understand inheritance
- [ ] Understand polymorphism
- [ ] Understand abstraction
- [ ] Can design interfaces
- [ ] Prefer composition when appropriate
- [ ] Understand access modifiers
- [ ] Understand `static`
- [ ] Understand `final`
- [ ] Understand enums
- [ ] Understand records
- [ ] Understand sealed hierarchies
- [ ] Can design immutable objects

## Core APIs

- [ ] Handle exceptions correctly
- [ ] Understand generics
- [ ] Know PECS
- [ ] Choose collections correctly
- [ ] Understand `equals/hashCode`
- [ ] Use Comparator
- [ ] Use lambda expressions
- [ ] Use functional interfaces
- [ ] Use streams appropriately
- [ ] Use Optional appropriately
- [ ] Use `java.time`
- [ ] Use regex
- [ ] Read/write files
- [ ] Understand NIO

## Advanced Java

- [ ] Understand annotations
- [ ] Understand reflection conceptually
- [ ] Understand Java modules conceptually
- [ ] Can use threads
- [ ] Understand race conditions
- [ ] Understand synchronization
- [ ] Understand locks
- [ ] Understand atomics
- [ ] Use executors
- [ ] Use CompletableFuture
- [ ] Understand concurrent collections
- [ ] Understand virtual threads
- [ ] Understand Java Memory Model basics

## JVM

- [ ] Understand stack
- [ ] Understand heap
- [ ] Understand metaspace
- [ ] Understand class loading
- [ ] Understand garbage collection
- [ ] Understand JIT compilation
- [ ] Can inspect a thread dump
- [ ] Know why heap dumps are useful
- [ ] Know when to use Java Flight Recorder
- [ ] Understand why benchmarking needs JMH

## Backend Engineering

- [ ] Use JDBC safely
- [ ] Understand PreparedStatement
- [ ] Understand transactions
- [ ] Understand ACID
- [ ] Understand isolation
- [ ] Can make HTTP calls
- [ ] Understand JSON mapping
- [ ] Use production logging
- [ ] Can write unit tests
- [ ] Can use mocks appropriately
- [ ] Understand Maven
- [ ] Understand Gradle basics

## Software Design

- [ ] Understand SOLID
- [ ] Write cohesive classes
- [ ] Avoid giant methods
- [ ] Use meaningful names
- [ ] Understand Factory
- [ ] Understand Strategy
- [ ] Understand Builder
- [ ] Understand Adapter
- [ ] Understand Decorator
- [ ] Understand Observer
- [ ] Understand Chain of Responsibility
- [ ] Understand Repository
- [ ] Understand dependency injection

## Algorithms

- [ ] Understand Big-O
- [ ] Arrays
- [ ] Hash maps
- [ ] Sets
- [ ] Stacks
- [ ] Queues
- [ ] Trees
- [ ] Graphs
- [ ] Binary search
- [ ] BFS
- [ ] DFS
- [ ] Sliding window
- [ ] Two pointers
- [ ] Recursion
- [ ] Backtracking
- [ ] Dynamic programming basics

## Production

- [ ] Understand timeouts
- [ ] Understand retries
- [ ] Understand backoff
- [ ] Understand idempotency
- [ ] Understand circuit breakers
- [ ] Understand connection pooling
- [ ] Understand observability
- [ ] Understand health checks
- [ ] Understand graceful shutdown
- [ ] Understand secure secrets
- [ ] Understand dependency security
- [ ] Can debug CPU/memory/thread issues
- [ ] Measure before optimizing

---

# Recommended Study Order

Follow this order instead of reading randomly.

## Phase 1 — Java Fundamentals

Study:

```text
1–14
```

Goal:

Write small console programs without copying code.

## Phase 2 — OOP

Study:

```text
15–32
```

Goal:

Model realistic domains cleanly.

Build:

```text
Expense Tracker
Banking Model
Library System
```

## Phase 3 — Core Professional Java

Study:

```text
33–51
```

Goal:

Handle data, collections, errors, APIs, files, and modern language constructs confidently.

Build:

```text
Invoice Validator
CSV Processor
JSON Transformer
```

## Phase 4 — Concurrency + JVM

Study:

```text
52–65
```

Goal:

Understand what Java actually does at runtime.

Build:

```text
Concurrent File Processor
Job Queue
HTTP Batch Processor
```

## Phase 5 — Backend Engineering

Study:

```text
66–74
```

Goal:

Build database-backed and API-driven applications.

Build:

```text
Inventory REST API
```

## Phase 6 — Engineering Maturity

Study:

```text
75–85
```

Goal:

Write maintainable, secure, observable, production-ready Java.

Build:

```text
Production-style Invoice Workflow Service
```

## Phase 7 — Mastery

Repeat:

```text
algorithms
debugging
JVM profiling
system design
production incidents
code reviews
testing
performance measurements
```

---

# 30-Day Java Intensive Plan

## Days 1–5

```text
syntax
types
conditions
loops
arrays
strings
methods
```

Write at least 20 tiny programs.

## Days 6–10

```text
classes
objects
constructors
encapsulation
inheritance
interfaces
composition
records
enums
```

Build a console project.

## Days 11–15

```text
exceptions
generics
collections
comparators
lambdas
streams
Optional
date/time
```

Build an invoice-processing mini-project.

## Days 16–20

```text
files
NIO
annotations
reflection
threads
executors
CompletableFuture
virtual threads
```

Build concurrent file ingestion.

## Days 21–24

```text
JVM
heap
stack
GC
JIT
profiling
debugging
```

Intentionally create and diagnose:

```text
StackOverflowError
memory pressure
deadlock
slow loop
```

in safe local sample programs.

## Days 25–27

```text
JDBC
transactions
HTTP
JSON
logging
testing
Maven
```

Build a database-backed API.

## Days 28–30

```text
SOLID
patterns
security
performance
production practices
interview review
```

Refactor your project instead of starting another tutorial.

---

# 12-Week Professional Java Roadmap

## Weeks 1–2

Core syntax and OOP.

## Weeks 3–4

Collections, generics, streams, exceptions, date/time, files.

## Week 5

Testing, logging, Maven/Gradle, clean code.

## Week 6

JDBC, SQL, transactions, HTTP, JSON.

## Week 7

Concurrency.

## Week 8

JVM internals, GC, debugging, profiling.

## Week 9

Spring Boot fundamentals.

## Week 10

Security, API design, database performance.

## Week 11

Messaging, caching, distributed-system patterns.

## Week 12

Build and deploy one complete production-style project.

---

# How to Know You Actually Know Java

You are moving beyond beginner level when you can answer questions such as:

```text
Why ArrayList here and not LinkedList?

Why BigDecimal instead of double?

Why interface instead of concrete dependency?

Why record instead of mutable DTO?

Why HashMap lookup works only when equals/hashCode are correct?

Why this stream is clearer than a loop—or why it is not?

Why this method needs synchronization?

Why volatile is insufficient here?

Why use virtual threads for this workload?

Why did memory usage grow?

Why is this object still reachable?

Why is this SQL transaction incorrect?

Why did the retry duplicate a payment?

Why is this API not idempotent?

Why is this test too coupled to implementation?

Why is this class violating Single Responsibility?

Why does this design need a Strategy rather than another if/else?

Why did adding parallelism make the application slower?
```

The ability to explain **why** is what separates syntax knowledge from engineering knowledge.

---

# Final Capstone Challenge

Build a production-style **Invoice Automation Platform**.

## Input

```text
PDF/image metadata
OCR JSON
vendor data
purchase order data
```

## Domain

```text
Invoice
Vendor
PurchaseOrder
LineItem
Tax
Approval
Posting
Query
Rejection
AuditEvent
```

## Pipeline

```text
Upload
↓
Extract
↓
Normalize
↓
Validate
↓
Detect Duplicate
↓
Vendor Rules
↓
PO / Non-PO Rules
↓
Amount / Tax Matching
↓
Approval Routing
↓
ERP Posting
↓
Audit + Notification
```

## Java Skills Required

```text
records
enums
interfaces
generics
collections
streams
exceptions
BigDecimal
date/time
JSON
JDBC
transactions
HTTP client
concurrency
virtual threads
testing
logging
SOLID
patterns
security
observability
performance
```

## Engineering Requirements

- clean package boundaries
- no giant service classes
- dependency injection
- immutable DTOs where practical
- structured error model
- database transaction boundaries
- idempotent posting
- retry only transient errors
- audit trail
- unit tests
- integration tests
- logging with correlation IDs
- metrics
- health checks
- performance test
- README
- architecture diagram
- Docker-based local environment
- CI pipeline

If you can build this capstone cleanly, explain the trade-offs, diagnose failures, and improve its performance, you are operating far beyond basic Java syntax.

---

# Recommended Reference Categories

Keep these references bookmarked while learning:

- official OpenJDK project pages
- Java language specification
- JVM specification
- Java API documentation
- official Java learning resources
- JDK release notes
- Maven documentation
- Gradle documentation
- JUnit documentation
- your chosen framework's official documentation

Prefer official documentation when behavior, compatibility, security, or version details matter.

---

# Final Rule

Do not aim to become a developer who can merely write:

```java
for (...)
if (...)
new Object()
stream()
```

Aim to become a developer who can decide:

```text
which data structure?
which abstraction?
which consistency model?
which transaction boundary?
which concurrency model?
which failure policy?
which security boundary?
which performance trade-off?
which test level?
which deployment architecture?
```

That is Java mastery.

---

**End of Mastering Java — Complete Learning & Reference Guide**
