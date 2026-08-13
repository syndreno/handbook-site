# TypeScript Master Learning Handbook — In-Depth Edition

> **Beginner → Intermediate → Advanced → Production → Type-System Mastery**
>
> A single master reference for learning TypeScript from zero, building real applications, preparing for interviews, understanding compiler behavior, and designing maintainable type-safe systems.

---

## Edition Note — August 2026

This edition is written for the modern TypeScript ecosystem. TypeScript 7.0 was announced in July 2026 as the new native implementation of the TypeScript compiler/tooling. The language concepts in this handbook remain applicable across modern TypeScript versions, while version-specific compiler behavior is separated into dedicated sections.

A practical rule:

```text
Learn the language concepts first.
Learn compiler configuration second.
Learn version-specific migration details third.
```

Do not build your TypeScript knowledge around one framework or one compiler release.

---

# How to Use This Handbook

## If you are completely new

Follow this order:

```text
JavaScript basics
→ TypeScript purpose
→ primitive types
→ arrays and objects
→ functions
→ interfaces and type aliases
→ unions
→ narrowing
→ classes
→ generics
→ modules
→ async code
→ real applications
```

Do not jump directly into advanced conditional types.

## If you already use Angular, React, Node.js, or another TypeScript framework

Focus on strict mode, `unknown` vs `any`, narrowing, generics, utility types, DTO design, runtime validation, module systems, compiler configuration, error modeling, domain modeling, and testing.

## If you are preparing for interviews

Study `interface` vs `type`, `any` vs `unknown`, `never`, unions/intersections, narrowing, generics, `keyof`, `typeof`, indexed access, mapped types, conditional types, `infer`, structural typing, variance, overloads, utility types, module resolution, and runtime validation.

## If you are building production systems

Pay special attention to API boundaries, runtime validation, domain types, discriminated unions, repositories/services, typed errors, ESM/CommonJS, `tsconfig`, project references, package boundaries, declaration files, testing, security, performance, and migration strategy.

---

# The Three Levels of TypeScript Knowledge

## Level 1 — Syntax knowledge

```typescript
let name: string = "Alice";
```

## Level 2 — Type-system knowledge

```typescript
type UserKey = keyof User;
```

## Level 3 — Modeling knowledge

```typescript
type Payment =
  | { status: "pending" }
  | { status: "paid"; transactionId: string; paidAt: Date }
  | { status: "failed"; errorCode: string };
```

Level 3 is where TypeScript becomes truly valuable.

---

# Core Mental Model

```text
TypeScript does not make JavaScript strongly typed at runtime.
TypeScript analyzes JavaScript-like code before runtime,
then usually removes type syntax during compilation.
```

There are two separate worlds:

```text
COMPILE TIME                  RUNTIME
------------                  -------
interfaces                    objects
type aliases                  functions
generic parameters            classes
conditional types             arrays
keyof                         HTTP responses
mapped types                  database results
                              JSON/user input
```

Most serious TypeScript mistakes happen when developers confuse these worlds.

---

# Part I — Complete Foundation and Application Handbook

The following chapters provide the full beginner-to-advanced foundation.

---


# Table of Contents

1. [What is TypeScript?](#1-what-is-typescript)
2. [Why TypeScript Exists](#2-why-typescript-exists)
3. [TypeScript vs JavaScript](#3-typescript-vs-javascript)
4. [Installing and Running TypeScript](#4-installing-and-running-typescript)
5. [TypeScript Compilation Model](#5-typescript-compilation-model)
6. [tsconfig.json](#6-tsconfigjson)
7. [Primitive Types](#7-primitive-types)
8. [Type Inference](#8-type-inference)
9. [Type Annotations](#9-type-annotations)
10. [Arrays](#10-arrays)
11. [Tuples](#11-tuples)
12. [Enums](#12-enums)
13. [Literal Types](#13-literal-types)
14. [Union Types](#14-union-types)
15. [Intersection Types](#15-intersection-types)
16. [Type Aliases](#16-type-aliases)
17. [Interfaces](#17-interfaces)
18. [Interface vs Type](#18-interface-vs-type)
19. [Objects](#19-objects)
20. [Optional and Readonly Properties](#20-optional-and-readonly-properties)
21. [Functions](#21-functions)
22. [Function Types](#22-function-types)
23. [Optional, Default, and Rest Parameters](#23-optional-default-and-rest-parameters)
24. [Function Overloading](#24-function-overloading)
25. [Special Types: any, unknown, never, void](#25-special-types-any-unknown-never-void)
26. [null and undefined](#26-null-and-undefined)
27. [Type Assertions](#27-type-assertions)
28. [Type Narrowing](#28-type-narrowing)
29. [Type Guards](#29-type-guards)
30. [Discriminated Unions](#30-discriminated-unions)
31. [Classes](#31-classes)
32. [Constructors](#32-constructors)
33. [Access Modifiers](#33-access-modifiers)
34. [readonly in Classes](#34-readonly-in-classes)
35. [Getters and Setters](#35-getters-and-setters)
36. [Inheritance](#36-inheritance)
37. [Abstract Classes](#37-abstract-classes)
38. [Interfaces with Classes](#38-interfaces-with-classes)
39. [Static Members](#39-static-members)
40. [Generics](#40-generics)
41. [Generic Constraints](#41-generic-constraints)
42. [keyof](#42-keyof)
43. [typeof in Type Positions](#43-typeof-in-type-positions)
44. [Indexed Access Types](#44-indexed-access-types)
45. [Mapped Types](#45-mapped-types)
46. [Conditional Types](#46-conditional-types)
47. [infer Keyword](#47-infer-keyword)
48. [Template Literal Types](#48-template-literal-types)
49. [Utility Types](#49-utility-types)
50. [Record and Dictionary Patterns](#50-record-and-dictionary-patterns)
51. [Modules](#51-modules)
52. [Import and Export](#52-import-and-export)
53. [Namespaces](#53-namespaces)
54. [Declaration Files](#54-declaration-files)
55. [Working with JavaScript Libraries](#55-working-with-javascript-libraries)
56. [Promises](#56-promises)
57. [async/await](#57-asyncawait)
58. [Error Handling](#58-error-handling)
59. [DOM with TypeScript](#59-dom-with-typescript)
60. [Events](#60-events)
61. [Node.js with TypeScript](#61-nodejs-with-typescript)
62. [REST API Patterns](#62-rest-api-patterns)
63. [Type-Safe API Responses](#63-type-safe-api-responses)
64. [TypeScript with React](#64-typescript-with-react)
65. [TypeScript with Angular](#65-typescript-with-angular)
66. [TypeScript with Express](#66-typescript-with-express)
67. [TypeScript with Databases](#67-typescript-with-databases)
68. [Validation vs Static Types](#68-validation-vs-static-types)
69. [Advanced Compiler Options](#69-advanced-compiler-options)
70. [Strict Mode](#70-strict-mode)
71. [Structural Typing](#71-structural-typing)
72. [Excess Property Checks](#72-excess-property-checks)
73. [Variance Concepts](#73-variance-concepts)
74. [Declaration Merging](#74-declaration-merging)
75. [Module Augmentation](#75-module-augmentation)
76. [Decorators](#76-decorators)
77. [satisfies Operator](#77-satisfies-operator)
78. [const Assertions](#78-const-assertions)
79. [Optional Chaining](#79-optional-chaining)
80. [Nullish Coalescing](#80-nullish-coalescing)
81. [Enums vs Union Literals](#81-enums-vs-union-literals)
82. [Immutability](#82-immutability)
83. [Domain Modeling](#83-domain-modeling)
84. [Repository Pattern](#84-repository-pattern)
85. [Service Layer Pattern](#85-service-layer-pattern)
86. [Result Pattern](#86-result-pattern)
87. [State Machines with Discriminated Unions](#87-state-machines-with-discriminated-unions)
88. [Testing TypeScript](#88-testing-typescript)
89. [Linting and Formatting](#89-linting-and-formatting)
90. [Debugging TypeScript](#90-debugging-typescript)
91. [Performance Considerations](#91-performance-considerations)
92. [Security Considerations](#92-security-considerations)
93. [Common Mistakes](#93-common-mistakes)
94. [Best Practices](#94-best-practices)
95. [Real-World Project Structure](#95-real-world-project-structure)
96. [Practical Scenarios](#96-practical-scenarios)
97. [Interview Questions](#97-interview-questions)
98. [Practice Exercises](#98-practice-exercises)
99. [Project Ideas](#99-project-ideas)
100. [Learning Roadmap](#100-learning-roadmap)
101. [TypeScript Cheat Sheet](#101-typescript-cheat-sheet)

---

# 1. What is TypeScript?

TypeScript is a programming language created by Microsoft that extends JavaScript by adding a static type system and developer tooling.

JavaScript:

```javascript
function add(a, b) {
  return a + b;
}
```

TypeScript:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

The important idea is:

```text
TypeScript = JavaScript + Types + Better Developer Tooling
```

Browsers do not normally execute TypeScript directly. TypeScript code is compiled into JavaScript.

```text
TypeScript (.ts)
      ↓
TypeScript Compiler
      ↓
JavaScript (.js)
      ↓
Browser / Node.js / Runtime
```

## Why developers use TypeScript

TypeScript helps detect many mistakes during development instead of discovering them after deployment.

Example:

```typescript
let age: number = 25;

age = "twenty five";
```

TypeScript reports an error because a string cannot be assigned to a variable declared as `number`.

---

# 2. Why TypeScript Exists

JavaScript is dynamically typed.

```javascript
let value = 10;

value = "hello";

value = true;
```

This flexibility is useful, but large applications can become difficult to maintain.

Consider:

```javascript
function calculateTotal(product) {
  return product.price * product.quantity;
}
```

What properties must `product` contain?

A developer reading this function must inspect other code.

With TypeScript:

```typescript
interface Product {
  price: number;
  quantity: number;
}

function calculateTotal(product: Product): number {
  return product.price * product.quantity;
}
```

Now the contract is visible immediately.

---

# 3. TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|---|---|---|
| Type system | Dynamic | Static |
| Compilation | Usually not required | Required/transpiled |
| Browser support | Native | Compiles to JS |
| Error detection | Runtime | Compile time + runtime |
| IDE support | Good | Excellent |
| Interfaces | No | Yes |
| Generics | No | Yes |
| Type narrowing | Limited runtime logic | Built-in compiler analysis |

TypeScript does not replace JavaScript.

All valid JavaScript is generally valid TypeScript, although stricter compiler settings may report problems.

---

# 4. Installing and Running TypeScript

Install Node.js first.

Then install TypeScript globally:

```bash
npm install -g typescript
```

Check installation:

```bash
tsc --version
```

Create:

```text
hello.ts
```

```typescript
const message: string = "Hello TypeScript";

console.log(message);
```

Compile:

```bash
tsc hello.ts
```

Output:

```text
hello.js
```

Run:

```bash
node hello.js
```

For modern projects, install TypeScript locally:

```bash
npm init -y

npm install --save-dev typescript
```

Create configuration:

```bash
npx tsc --init
```

Compile:

```bash
npx tsc
```

---

# 5. TypeScript Compilation Model

TypeScript performs static analysis.

```typescript
const quantity: number = "5";
```

Compiler:

```text
Type 'string' is not assignable to type 'number'.
```

After successful compilation:

```typescript
const quantity: number = 5;
```

becomes roughly:

```javascript
const quantity = 5;
```

Types normally disappear at runtime.

This is called **type erasure**.

Therefore:

```typescript
interface User {
  name: string;
}
```

does not exist as a JavaScript object at runtime.

This distinction is extremely important:

```text
TypeScript checks types during development.
Runtime data still needs runtime validation.
```

---

# 6. tsconfig.json

`tsconfig.json` controls TypeScript compilation.

Example:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Important options

### target

Controls the JavaScript version generated.

```json
"target": "ES2022"
```

### module

Controls module output.

Examples:

```json
"module": "CommonJS"
```

or:

```json
"module": "NodeNext"
```

### rootDir

Source directory.

```json
"rootDir": "./src"
```

### outDir

Compiled JavaScript directory.

```json
"outDir": "./dist"
```

### strict

Enables a family of strict type-checking options.

```json
"strict": true
```

Recommended for serious projects.

---

# 7. Primitive Types

Common primitive types:

```typescript
string
number
boolean
bigint
symbol
null
undefined
```

## String

```typescript
let username: string = "Shoeb";
```

## Number

TypeScript uses `number` for integers and floating-point values.

```typescript
let age: number = 28;
let salary: number = 1500000;
let taxRate: number = 0.1;
```

## Boolean

```typescript
let isActive: boolean = true;
```

## BigInt

```typescript
let hugeNumber: bigint = 9007199254740993n;
```

Requires a sufficiently modern target.

## Symbol

```typescript
const key: symbol = Symbol("id");
```

---

# 8. Type Inference

TypeScript can automatically determine a variable's type.

```typescript
let name = "Alice";
```

The compiler infers:

```typescript
string
```

Therefore:

```typescript
name = 123;
```

produces an error.

You do not need to annotate every variable.

Good:

```typescript
const total = 500;
```

Usually unnecessary:

```typescript
const total: number = 500;
```

Use explicit annotations when they improve clarity or define a public contract.

---

# 9. Type Annotations

Type annotations explicitly describe expected types.

```typescript
let employeeName: string;
let employeeAge: number;
let active: boolean;
```

Functions:

```typescript
function multiply(a: number, b: number): number {
  return a * b;
}
```

Objects:

```typescript
let user: {
  id: number;
  name: string;
};
```

---

# 10. Arrays

Two common syntaxes:

```typescript
const numbers: number[] = [1, 2, 3];
```

and:

```typescript
const numbers2: Array<number> = [1, 2, 3];
```

String array:

```typescript
const technologies: string[] = [
  "TypeScript",
  "Angular",
  "Node.js"
];
```

Object array:

```typescript
interface Employee {
  id: number;
  name: string;
}

const employees: Employee[] = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Rahul" }
];
```

## Scenario

You receive a list of products:

```typescript
interface Product {
  id: number;
  price: number;
}

const products: Product[] = [
  { id: 1, price: 100 },
  { id: 2, price: 250 }
];

const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);
```

---

# 11. Tuples

A tuple is an array whose positions have known types.

```typescript
let user: [number, string];

user = [1, "Alice"];
```

Incorrect:

```typescript
user = ["Alice", 1];
```

Use tuples when position has meaning.

Example API coordinate:

```typescript
type Coordinate = [number, number];

const location: Coordinate = [19.076, 72.8777];
```

Named tuple elements improve readability:

```typescript
type HttpResponse = [
  statusCode: number,
  message: string
];

const result: HttpResponse = [200, "Success"];
```

---

# 12. Enums

Enums define a set of named values.

```typescript
enum OrderStatus {
  Pending,
  Approved,
  Rejected
}
```

Usage:

```typescript
let status: OrderStatus = OrderStatus.Pending;
```

String enums:

```typescript
enum PaymentStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Failed = "FAILED"
}
```

For many modern TypeScript applications, literal unions are often preferred because they produce less runtime JavaScript.

```typescript
type PaymentStatus = "PENDING" | "PAID" | "FAILED";
```

---

# 13. Literal Types

Literal types allow only exact values.

```typescript
let direction: "left" | "right";

direction = "left";
```

Invalid:

```typescript
direction = "up";
```

Common scenario:

```typescript
type Environment = "development" | "testing" | "production";
```

```typescript
function loadConfig(environment: Environment) {
  console.log(environment);
}
```

---

# 14. Union Types

A union means the value may be one of several types.

```typescript
let id: number | string;
```

```typescript
id = 10;
id = "USR-10";
```

Example function:

```typescript
function printId(id: number | string): void {
  console.log(id);
}
```

Before calling string-specific methods, narrow the type:

```typescript
function normalizeId(id: number | string): string {
  if (typeof id === "number") {
    return id.toString();
  }

  return id.toUpperCase();
}
```

---

# 15. Intersection Types

Intersection combines multiple types.

```typescript
type Person = {
  name: string;
};

type EmployeeDetails = {
  employeeId: number;
};

type Employee = Person & EmployeeDetails;
```

Usage:

```typescript
const employee: Employee = {
  name: "Rahul",
  employeeId: 1001
};
```

Scenario:

```typescript
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  id: number;
  name: string;
};

type StoredUser = User & Timestamped;
```

---

# 16. Type Aliases

A type alias gives a type a meaningful name.

```typescript
type UserId = number;
```

Object:

```typescript
type User = {
  id: number;
  name: string;
};
```

Union:

```typescript
type Status = "pending" | "approved" | "rejected";
```

Function:

```typescript
type Calculator = (a: number, b: number) => number;
```

---

# 17. Interfaces

Interfaces describe object shapes.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

Usage:

```typescript
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

Interfaces can extend other interfaces:

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

---

# 18. Interface vs Type

Both can describe object structures.

Interface:

```typescript
interface User {
  id: number;
}
```

Type:

```typescript
type User = {
  id: number;
};
```

## Interface strengths

Useful for:

- object contracts
- class contracts
- declaration merging
- library APIs

## Type strengths

Useful for:

- unions
- intersections
- primitives
- tuples
- conditional types
- mapped types

Example union cannot be represented directly by an interface:

```typescript
type ApiResult =
  | { success: true; data: string }
  | { success: false; error: string };
```

Rule of thumb:

```text
Use interface for extensible object contracts.
Use type for unions, transformations, aliases, and complex type composition.
```

---

# 19. Objects

Inline typing:

```typescript
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Alice"
};
```

Usually prefer reusable types:

```typescript
interface User {
  id: number;
  name: string;
}
```

---

# 20. Optional and Readonly Properties

Optional property:

```typescript
interface User {
  id: number;
  phone?: string;
}
```

Valid:

```typescript
const user: User = {
  id: 1
};
```

Readonly:

```typescript
interface User {
  readonly id: number;
  name: string;
}
```

```typescript
const user: User = {
  id: 1,
  name: "Alice"
};

user.name = "Bob";
```

But:

```typescript
user.id = 2;
```

causes a compile-time error.

---

# 21. Functions

Basic function:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Arrow function:

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
```

Inference:

```typescript
const multiply = (a: number, b: number) => a * b;
```

TypeScript infers the return type as `number`.

---

# 22. Function Types

You can define a function contract:

```typescript
type Operation = (a: number, b: number) => number;
```

```typescript
const add: Operation = (a, b) => a + b;
```

Callback example:

```typescript
function processNumbers(
  a: number,
  b: number,
  operation: Operation
): number {
  return operation(a, b);
}
```

---

# 23. Optional, Default, and Rest Parameters

## Optional parameter

```typescript
function greet(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}
```

## Default parameter

```typescript
function calculateTax(
  amount: number,
  rate: number = 0.18
): number {
  return amount * rate;
}
```

## Rest parameter

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, value) => total + value, 0);
}
```

---

# 24. Function Overloading

Overloads describe multiple call signatures.

```typescript
function format(value: number): string;
function format(value: Date): string;

function format(value: number | Date): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value.toFixed(2);
}
```

Usage:

```typescript
format(10);
format(new Date());
```

Use overloads when callers should see distinct valid signatures.

Do not use overloads when a simple union type is sufficient.

---

# 25. Special Types: any, unknown, never, void

## any

Disables type checking.

```typescript
let value: any = 10;

value = "hello";
value.doSomething();
```

Avoid excessive `any`.

## unknown

Safer version of `any`.

```typescript
let value: unknown = "hello";
```

You must narrow it:

```typescript
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Use `unknown` for data whose type is not yet verified.

## void

Used for functions that do not return a useful value.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## never

Represents values that never occur.

```typescript
function fail(message: string): never {
  throw new Error(message);
}
```

Also useful for exhaustive checking.

---

# 26. null and undefined

With `strictNullChecks`, `null` and `undefined` are not automatically assignable everywhere.

```typescript
let name: string;

name = null;
```

Error.

Allow null explicitly:

```typescript
let name: string | null = null;
```

Scenario:

```typescript
interface User {
  id: number;
  middleName?: string;
}
```

Then:

```typescript
user.middleName
```

has a type similar to:

```typescript
string | undefined
```

---

# 27. Type Assertions

Sometimes you know more than TypeScript.

```typescript
const input = document.getElementById("email") as HTMLInputElement;
```

Now:

```typescript
input.value
```

is available.

Another syntax:

```typescript
const value = <string>someValue;
```

Avoid angle-bracket assertion syntax in `.tsx` because it conflicts with JSX syntax.

Important:

```text
A type assertion does not perform runtime conversion.
```

This:

```typescript
const value = "123" as unknown as number;
```

does not convert the string into a number.

---

# 28. Type Narrowing

Type narrowing means reducing a broad type into a more specific type.

Example:

```typescript
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  }

  return value.toFixed(2);
}
```

Common narrowing techniques:

```text
typeof
instanceof
in
equality checks
truthiness
custom type guards
discriminated unions
```

---

# 29. Type Guards

## typeof

```typescript
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

## instanceof

```typescript
function printDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toISOString());
  }
}
```

## in operator

```typescript
interface Admin {
  role: string;
}

interface Customer {
  loyaltyPoints: number;
}

function identify(user: Admin | Customer) {
  if ("role" in user) {
    console.log(user.role);
  }
}
```

## Custom type guard

```typescript
interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string"
  );
}
```

---

# 30. Discriminated Unions

One of TypeScript's most powerful modeling patterns.

```typescript
type PaymentResult =
  | {
      status: "success";
      transactionId: string;
    }
  | {
      status: "failed";
      error: string;
    };
```

Usage:

```typescript
function handlePayment(result: PaymentResult) {
  if (result.status === "success") {
    console.log(result.transactionId);
  } else {
    console.log(result.error);
  }
}
```

The `status` property is called the **discriminant**.

---

# 31. Classes

```typescript
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getDetails(): string {
    return `${this.name}: ${this.salary}`;
  }
}
```

Usage:

```typescript
const employee = new Employee("Rahul", 800000);
```

---

# 32. Constructors

Constructor parameters can define and initialize properties directly.

Instead of:

```typescript
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

You can write:

```typescript
class User {
  constructor(
    public id: number,
    public name: string
  ) {}
}
```

This is called a **parameter property**.

---

# 33. Access Modifiers

TypeScript supports:

```text
public
private
protected
```

## public

Accessible everywhere.

```typescript
class User {
  public name = "Alice";
}
```

## private

Accessible only inside the class.

```typescript
class BankAccount {
  private balance = 0;
}
```

## protected

Accessible in the class and subclasses.

```typescript
class Employee {
  protected salary = 50000;
}
```

JavaScript also supports true runtime private fields:

```typescript
class Account {
  #balance = 0;
}
```

This differs from TypeScript's `private`, which is primarily enforced by the type system.

---

# 34. readonly in Classes

```typescript
class User {
  constructor(
    public readonly id: number,
    public name: string
  ) {}
}
```

```typescript
const user = new User(1, "Alice");

user.name = "Bob";
```

Allowed.

```typescript
user.id = 2;
```

Not allowed by TypeScript.

---

# 35. Getters and Setters

```typescript
class Employee {
  private _salary = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }

    this._salary = value;
  }
}
```

---

# 36. Inheritance

```typescript
class Person {
  constructor(public name: string) {}

  introduce(): string {
    return `I am ${this.name}`;
  }
}

class Developer extends Person {
  constructor(
    name: string,
    public language: string
  ) {
    super(name);
  }
}
```

---

# 37. Abstract Classes

Abstract classes cannot be instantiated directly.

```typescript
abstract class PaymentProcessor {
  abstract pay(amount: number): Promise<void>;

  log(amount: number) {
    console.log(`Processing ${amount}`);
  }
}
```

Implementation:

```typescript
class CardPaymentProcessor extends PaymentProcessor {
  async pay(amount: number): Promise<void> {
    this.log(amount);
    console.log("Paid using card");
  }
}
```

Use abstract classes when subclasses share both contract and implementation.

---

# 38. Interfaces with Classes

```typescript
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  print(): void {
    console.log("Printing invoice");
  }
}
```

A class can implement multiple interfaces.

```typescript
class Report implements Printable, Serializable {
  // ...
}
```

---

# 39. Static Members

Static members belong to the class itself.

```typescript
class MathHelper {
  static readonly PI = 3.14159;

  static square(value: number): number {
    return value * value;
  }
}
```

Usage:

```typescript
MathHelper.square(10);
```

No instance is required.

---

# 40. Generics

Generics allow reusable code while preserving type information.

Without generics:

```typescript
function identity(value: any): any {
  return value;
}
```

Problem: type information is lost.

With generics:

```typescript
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```typescript
const numberValue = identity(10);
const textValue = identity("hello");
```

TypeScript infers:

```text
numberValue → number
textValue → string
```

Generic interface:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```typescript
interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Alice"
  }
};
```

---

# 41. Generic Constraints

Sometimes a generic type must have certain properties.

```typescript
function printLength<T extends { length: number }>(
  value: T
): number {
  return value.length;
}
```

Valid:

```typescript
printLength("hello");
printLength([1, 2, 3]);
```

Invalid:

```typescript
printLength(100);
```

---

# 42. keyof

`keyof` creates a union of property names.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKey = keyof User;
```

Result:

```typescript
"id" | "name" | "email"
```

Useful generic:

```typescript
function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}
```

Usage:

```typescript
const user = {
  id: 1,
  name: "Alice"
};

getProperty(user, "name");
```

Invalid:

```typescript
getProperty(user, "salary");
```

---

# 43. typeof in Type Positions

JavaScript `typeof` inspects runtime values.

TypeScript can also use `typeof` in a type position.

```typescript
const defaultConfig = {
  port: 3000,
  debug: true
};

type Config = typeof defaultConfig;
```

Now:

```typescript
Config
```

is equivalent to:

```typescript
{
  port: number;
  debug: boolean;
}
```

---

# 44. Indexed Access Types

Access a property's type:

```typescript
interface User {
  id: number;
  profile: {
    name: string;
    age: number;
  };
}

type Profile = User["profile"];
```

Get a property type:

```typescript
type UserId = User["id"];
```

For arrays:

```typescript
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

type User = (typeof users)[number];
```

---

# 45. Mapped Types

Mapped types transform properties of another type.

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

Example:

```typescript
interface User {
  id: number;
  name: string;
}

type OptionalUser = Optional<User>;
```

Equivalent:

```typescript
{
  id?: number;
  name?: string;
}
```

Readonly mapper:

```typescript
type ReadonlyVersion<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

# 46. Conditional Types

Conditional types work like type-level `if`.

```typescript
type IsString<T> = T extends string ? true : false;
```

```typescript
type A = IsString<string>; // true
type B = IsString<number>; // false
```

Another example:

```typescript
type IdType<T> =
  T extends { id: infer I }
    ? I
    : never;
```

---

# 47. infer Keyword

`infer` extracts a type inside a conditional type.

Example:

```typescript
type ReturnTypeOf<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;
```

```typescript
function getUser() {
  return {
    id: 1,
    name: "Alice"
  };
}

type User = ReturnTypeOf<typeof getUser>;
```

Built-in `ReturnType<T>` already provides this functionality.

---

# 48. Template Literal Types

Template literal types build string types.

```typescript
type EventName = "click" | "change";

type HandlerName = `on${Capitalize<EventName>}`;
```

Result:

```typescript
"onClick" | "onChange"
```

Example route types:

```typescript
type Resource = "users" | "orders";

type ApiRoute = `/api/${Resource}`;
```

Valid:

```typescript
const route: ApiRoute = "/api/users";
```

---

# 49. Utility Types

TypeScript includes many built-in utility types.

## Partial

Makes every property optional.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;
```

Useful for PATCH requests.

---

## Required

Makes optional properties required.

```typescript
type CompleteUser = Required<User>;
```

---

## Readonly

```typescript
type ImmutableUser = Readonly<User>;
```

---

## Pick

Select properties.

```typescript
type UserSummary = Pick<User, "id" | "name">;
```

---

## Omit

Exclude properties.

```typescript
type PublicUser = Omit<User, "email">;
```

---

## Record

Creates an object whose keys and values have known types.

```typescript
type Role = "admin" | "user" | "manager";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  manager: ["read", "write"]
};
```

---

## Exclude

Removes members from a union.

```typescript
type Status = "pending" | "approved" | "rejected";

type ActiveStatus = Exclude<Status, "rejected">;
```

---

## Extract

Keeps matching union members.

```typescript
type Values = string | number | boolean;

type Numeric = Extract<Values, number>;
```

---

## NonNullable

Removes `null` and `undefined`.

```typescript
type Value = string | null | undefined;

type CleanValue = NonNullable<Value>;
```

---

## ReturnType

```typescript
function createUser() {
  return {
    id: 1,
    name: "Alice"
  };
}

type User = ReturnType<typeof createUser>;
```

---

## Parameters

```typescript
function add(a: number, b: number) {
  return a + b;
}

type AddParameters = Parameters<typeof add>;
```

Result:

```typescript
[number, number]
```

---

## Awaited

Extracts the resolved type of a Promise.

```typescript
type Result = Awaited<Promise<string>>;
```

Result:

```typescript
string
```

---

# 50. Record and Dictionary Patterns

Dynamic object:

```typescript
interface ScoreMap {
  [student: string]: number;
}
```

Usage:

```typescript
const scores: ScoreMap = {
  Alice: 90,
  Bob: 85
};
```

Often `Record` is cleaner:

```typescript
const scores: Record<string, number> = {
  Alice: 90,
  Bob: 85
};
```

Avoid:

```typescript
Record<string, any>
```

when possible.

Prefer:

```typescript
Record<string, unknown>
```

for unknown dynamic data.

---

# 51. Modules

A file becomes a module when it has an `import` or `export`.

`math.ts`

```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

`app.ts`

```typescript
import { add } from "./math";

console.log(add(2, 3));
```

Modules help organize large applications.

---

# 52. Import and Export

Named export:

```typescript
export const PI = 3.14;
```

Import:

```typescript
import { PI } from "./math";
```

Default export:

```typescript
export default class UserService {}
```

Import:

```typescript
import UserService from "./UserService";
```

Type-only imports:

```typescript
import type { User } from "./types";
```

This communicates that the import is used only during type checking.

---

# 53. Namespaces

Namespaces are an older TypeScript mechanism for organizing code.

```typescript
namespace Validation {
  export function isEmail(value: string): boolean {
    return value.includes("@");
  }
}
```

Modern projects usually prefer ES modules.

Use namespaces mainly when:

- maintaining legacy TypeScript
- authoring certain global declaration patterns

---

# 54. Declaration Files

Declaration files describe types for JavaScript code.

File extension:

```text
.d.ts
```

Example:

```typescript
declare module "legacy-library" {
  export function calculate(value: number): number;
}
```

Many packages publish their own types.

Others use DefinitelyTyped packages:

```bash
npm install --save-dev @types/express
```

---

# 55. Working with JavaScript Libraries

Suppose a JavaScript package lacks types.

Temporary declaration:

```typescript
declare module "old-package";
```

This effectively gives the module broad `any` typing.

Better solution:

```typescript
declare module "old-package" {
  export interface Options {
    timeout: number;
  }

  export function connect(options: Options): void;
}
```

---

# 56. Promises

A Promise represents a future result.

```typescript
function getUser(): Promise<string> {
  return Promise.resolve("Alice");
}
```

Object result:

```typescript
interface User {
  id: number;
  name: string;
}

function getUser(): Promise<User> {
  return Promise.resolve({
    id: 1,
    name: "Alice"
  });
}
```

---

# 57. async/await

An `async` function always returns a Promise.

```typescript
async function getNumber(): Promise<number> {
  return 10;
}
```

API example:

```typescript
interface User {
  id: number;
  name: string;
}

async function loadUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);

  if (!response.ok) {
    throw new Error("Unable to load user");
  }

  const data: unknown = await response.json();

  // Runtime validation should happen here.
  return data as User;
}
```

Important: typing `response.json()` does not validate external data.

---

# 58. Error Handling

Modern TypeScript may treat caught errors as `unknown`.

```typescript
try {
  riskyOperation();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
}
```

Avoid:

```typescript
catch (error: any)
```

unless necessary.

Custom error:

```typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
  }
}
```

---

# 59. DOM with TypeScript

```typescript
const button = document.querySelector<HTMLButtonElement>("#save");
```

Type:

```typescript
HTMLButtonElement | null
```

Handle null:

```typescript
button?.addEventListener("click", () => {
  console.log("Saved");
});
```

Input:

```typescript
const input =
  document.querySelector<HTMLInputElement>("#email");

if (input) {
  console.log(input.value);
}
```

---

# 60. Events

```typescript
const input =
  document.querySelector<HTMLInputElement>("#name");

input?.addEventListener("input", (event) => {
  const target = event.currentTarget;

  console.log(target.value);
});
```

Custom function:

```typescript
function handleClick(event: MouseEvent): void {
  console.log(event.clientX, event.clientY);
}
```

---

# 61. Node.js with TypeScript

Install:

```bash
npm install --save-dev typescript @types/node
```

Example:

```typescript
import { readFile } from "node:fs/promises";

async function loadFile(): Promise<void> {
  const content = await readFile("data.txt", "utf8");
  console.log(content);
}
```

Typical structure:

```text
project/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

---

# 62. REST API Patterns

Define request and response contracts separately.

```typescript
interface CreateUserRequest {
  name: string;
  email: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}
```

Function:

```typescript
async function createUser(
  request: CreateUserRequest
): Promise<UserResponse> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    throw new Error("Unable to create user");
  }

  return response.json();
}
```

Again, production applications should validate incoming runtime data.

---

# 63. Type-Safe API Responses

A generic response:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
```

Better: use a discriminated union.

```typescript
type ApiResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
      };
    };
```

Usage:

```typescript
function handleResult(result: ApiResult<User>) {
  if (result.success) {
    console.log(result.data.name);
  } else {
    console.error(result.error.message);
  }
}
```

---

# 64. TypeScript with React

Props:

```typescript
interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({
  text,
  disabled = false,
  onClick
}: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
```

State:

```typescript
const [count, setCount] = useState<number>(0);
```

Often inference is enough:

```typescript
const [count, setCount] = useState(0);
```

Nullable state:

```typescript
const [user, setUser] = useState<User | null>(null);
```

Event:

```typescript
function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  console.log(event.target.value);
}
```

---

# 65. TypeScript with Angular

Angular is built around TypeScript.

Component:

```typescript
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html"
})
export class UserComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  loadUsers(): void {
    this.userService
      .getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
```

Service:

```typescript
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("/api/users");
  }
}
```

Important reminder:

```text
HttpClient<User>() provides compile-time typing.
It does not automatically prove that the server actually returned valid User data.
```

---

# 66. TypeScript with Express

```typescript
import express, {
  Request,
  Response
} from "express";

const app = express();

app.use(express.json());

app.get(
  "/users/:id",
  (req: Request, res: Response) => {
    const id = Number(req.params.id);

    res.json({
      id,
      name: "Alice"
    });
  }
);
```

For stronger typing, define route parameter and request body types.

```typescript
interface UserParams {
  id: string;
}

interface UpdateUserBody {
  name: string;
}
```

---

# 67. TypeScript with Databases

Do not assume database rows perfectly match application types.

Model:

```typescript
interface UserRow {
  id: number;
  user_name: string;
  created_at: Date;
}
```

Domain model:

```typescript
interface User {
  id: number;
  name: string;
  createdAt: Date;
}
```

Mapping:

```typescript
function mapUser(row: UserRow): User {
  return {
    id: row.id,
    name: row.user_name,
    createdAt: row.created_at
  };
}
```

This isolates database naming and schema concerns from business logic.

---

# 68. Validation vs Static Types

One of the most important TypeScript concepts.

This is not enough:

```typescript
const response = await fetch("/api/user");

const user = await response.json() as User;
```

You told TypeScript to trust you.

The server might return:

```json
{
  "id": "wrong",
  "name": null
}
```

TypeScript cannot protect you from invalid runtime data.

Use validation libraries or custom validation.

Example with a conceptual schema library:

```typescript
const UserSchema = object({
  id: number(),
  name: string()
});
```

Then:

```typescript
const raw: unknown = await response.json();

const user = UserSchema.parse(raw);
```

Popular validation approaches include:

- Zod
- Valibot
- ArkType
- Joi
- JSON Schema-based validators
- custom type guards

The exact library should be chosen based on project needs.

---

# 69. Advanced Compiler Options

Important strictness options include:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true
  }
}
```

## noUncheckedIndexedAccess

Normally:

```typescript
const names: string[] = [];

const value = names[10];
```

can appear as `string`.

With this option, TypeScript treats it as:

```typescript
string | undefined
```

which is safer.

## exactOptionalPropertyTypes

Makes the semantic distinction between:

```typescript
property?: string
```

and:

```typescript
property: string | undefined
```

more precise.

---

# 70. Strict Mode

Enable:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

This enables several important checks including concepts such as:

```text
strictNullChecks
strictFunctionTypes
strictPropertyInitialization
useUnknownInCatchVariables
noImplicitAny
```

For new applications, use strict mode from the beginning.

Turning it on later in a large loosely typed project can require significant cleanup.

---

# 71. Structural Typing

TypeScript mostly uses structural typing.

Types are compatible based on their shape rather than explicit inheritance.

```typescript
interface Point {
  x: number;
  y: number;
}

const coordinate = {
  x: 10,
  y: 20,
  label: "Office"
};

const point: Point = coordinate;
```

This is valid because `coordinate` has at least the required `x` and `y` properties.

This is sometimes called:

```text
duck typing with static analysis
```

---

# 72. Excess Property Checks

Direct object literals receive additional checks.

```typescript
interface User {
  name: string;
}

const user: User = {
  name: "Alice",
  age: 30
};
```

This reports an excess property error.

But:

```typescript
const temp = {
  name: "Alice",
  age: 30
};

const user: User = temp;
```

may be allowed because structural compatibility is satisfied.

Understand the difference between:

```text
assignability
```

and:

```text
excess property checks on fresh object literals
```

---

# 73. Variance Concepts

Variance describes how subtype relationships behave inside generic types.

The full topic is advanced, but function parameters are the most practical area.

Suppose:

```typescript
class Animal {}
class Dog extends Animal {
  bark() {}
}
```

A callback expecting any `Animal` is not necessarily interchangeable with one that only knows how to handle `Dog`.

TypeScript's strict function checks help prevent unsafe assignments.

The key lesson:

```text
Input positions and output positions have different compatibility rules.
```

Learn variance deeply when building:

- framework APIs
- reusable libraries
- callback-heavy systems
- complex generic abstractions

---

# 74. Declaration Merging

Interfaces with the same name can merge.

```typescript
interface User {
  id: number;
}

interface User {
  name: string;
}
```

Result:

```typescript
interface User {
  id: number;
  name: string;
}
```

This behavior is unique compared with type aliases.

It is particularly useful for library augmentation.

---

# 75. Module Augmentation

You can extend types declared by another module.

Conceptual example:

```typescript
declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}
```

This allows project-specific additions to third-party library types.

Use carefully because augmentations affect global understanding of that module.

---

# 76. Decorators

Decorators provide metadata or wrapping behavior for classes and class members.

Conceptual example:

```typescript
function LogClass(value: Function) {
  console.log(value.name);
}

@LogClass
class UserService {}
```

Decorators are heavily used by frameworks such as Angular and NestJS.

The JavaScript decorators standard and TypeScript support have evolved over time, so always verify the compiler settings and framework expectations for the TypeScript version used by your project.

---

# 77. satisfies Operator

`satisfies` checks whether a value matches a type without unnecessarily widening its inferred type.

```typescript
type RouteConfig = Record<
  string,
  {
    method: "GET" | "POST";
    path: string;
  }
>;

const routes = {
  users: {
    method: "GET",
    path: "/users"
  }
} satisfies RouteConfig;
```

Advantage:

TypeScript checks compatibility while retaining useful literal information.

---

# 78. const Assertions

```typescript
const roles = [
  "admin",
  "manager",
  "user"
] as const;
```

Now the array is readonly and its values are literal types.

Derive union:

```typescript
type Role = (typeof roles)[number];
```

Result:

```typescript
"admin" | "manager" | "user"
```

This is a very common modern TypeScript pattern.

---

# 79. Optional Chaining

Optional chaining avoids errors when intermediate values may be null or undefined.

```typescript
user.profile?.address?.city
```

Instead of:

```typescript
if (
  user.profile &&
  user.profile.address
) {
  console.log(user.profile.address.city);
}
```

Function:

```typescript
callback?.();
```

Array:

```typescript
items?.[0];
```

---

# 80. Nullish Coalescing

`??` provides a fallback only for `null` or `undefined`.

```typescript
const quantity = inputQuantity ?? 1;
```

Difference from `||`:

```typescript
const value = 0 || 10;
```

returns:

```text
10
```

But:

```typescript
const value = 0 ?? 10;
```

returns:

```text
0
```

Use `??` when values such as `0`, `false`, or `""` are valid.

---

# 81. Enums vs Union Literals

Enum:

```typescript
enum Status {
  Pending = "PENDING",
  Done = "DONE"
}
```

Union:

```typescript
type Status = "PENDING" | "DONE";
```

Union literals often have advantages:

- no generated enum object
- easy integration with JSON
- strong narrowing
- simple composition

Enums can still be useful when:

- a runtime value container is desired
- the project/framework convention relies on them
- migrating from enum-heavy codebases

Modern pattern:

```typescript
const Status = {
  Pending: "PENDING",
  Done: "DONE"
} as const;

type Status =
  (typeof Status)[keyof typeof Status];
```

This provides both runtime values and a union type.

---

# 82. Immutability

Prefer immutable transformations when practical.

Instead of:

```typescript
user.name = "Bob";
```

you can use:

```typescript
const updatedUser = {
  ...user,
  name: "Bob"
};
```

Readonly arrays:

```typescript
function calculateTotal(
  prices: readonly number[]
): number {
  return prices.reduce((a, b) => a + b, 0);
}
```

Use immutability heavily in:

- React
- state management
- event-driven systems
- functional programming
- complex application state

---

# 83. Domain Modeling

TypeScript becomes especially powerful when types represent business rules rather than merely database fields.

Weak model:

```typescript
interface Order {
  status: string;
}
```

Better:

```typescript
type OrderStatus =
  | "draft"
  | "submitted"
  | "approved"
  | "rejected";
```

Even better:

```typescript
type Order =
  | {
      status: "draft";
      id: string;
    }
  | {
      status: "submitted";
      id: string;
      submittedAt: Date;
    }
  | {
      status: "approved";
      id: string;
      approvedAt: Date;
      approvedBy: string;
    }
  | {
      status: "rejected";
      id: string;
      reason: string;
    };
```

Now impossible or incomplete states become harder to represent.

---

# 84. Repository Pattern

Repository separates data access from business logic.

```typescript
interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<void>;
}
```

Database implementation:

```typescript
class SqlUserRepository implements UserRepository {
  async findById(id: number): Promise<User | null> {
    // SQL logic
    return null;
  }

  async save(user: User): Promise<void> {
    // SQL logic
  }
}
```

Business service depends on the interface:

```typescript
class UserService {
  constructor(
    private repository: UserRepository
  ) {}

  async getUser(id: number): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
```

Benefits:

- testability
- database independence
- separation of concerns
- cleaner domain logic

---

# 85. Service Layer Pattern

A service contains application/business behavior.

```typescript
class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private paymentService: PaymentService
  ) {}

  async placeOrder(
    request: PlaceOrderRequest
  ): Promise<Order> {
    // Validate business rules
    // Calculate totals
    // Process payment
    // Save order
    // Return result

    throw new Error("Example only");
  }
}
```

Avoid putting all logic directly inside:

- controllers
- route handlers
- UI components
- database models

---

# 86. Result Pattern

Exceptions are useful, but sometimes expected failures are better represented as data.

```typescript
type Result<T, E> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: E;
    };
```

Example:

```typescript
type LoginError =
  | "INVALID_CREDENTIALS"
  | "ACCOUNT_LOCKED";

function login(
  username: string,
  password: string
): Result<string, LoginError> {
  if (username === "admin" && password === "secret") {
    return {
      ok: true,
      value: "TOKEN"
    };
  }

  return {
    ok: false,
    error: "INVALID_CREDENTIALS"
  };
}
```

Usage:

```typescript
const result = login("user", "wrong");

if (result.ok) {
  console.log(result.value);
} else {
  console.log(result.error);
}
```

---

# 87. State Machines with Discriminated Unions

UI state is often modeled badly:

```typescript
interface State {
  loading: boolean;
  data?: User[];
  error?: string;
}
```

This allows contradictory states such as:

```text
loading = true
data exists
error exists
```

Better:

```typescript
type LoadState<T> =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: string;
    };
```

Usage:

```typescript
function render(state: LoadState<User[]>) {
  switch (state.status) {
    case "idle":
      return "Ready";

    case "loading":
      return "Loading...";

    case "success":
      return `${state.data.length} users`;

    case "error":
      return state.error;
  }
}
```

---

# 88. Testing TypeScript

Popular test runners include Jest, Vitest, Node's built-in test runner, and framework-specific tools.

Simple function:

```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

Conceptual test:

```typescript
import { describe, it, expect } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

Test type contracts separately when building advanced libraries.

Useful type-level testing approaches include:

```text
tsd
expect-type
compiler-based assertion files
```

---

# 89. Linting and Formatting

TypeScript compiler checks types.

It does not replace linting.

Common stack:

```text
TypeScript
ESLint
Prettier
```

Responsibilities:

```text
TypeScript → type correctness
ESLint     → code quality and suspicious patterns
Prettier   → formatting
```

Avoid using dozens of style rules that conflict with the formatter.

---

# 90. Debugging TypeScript

Source maps connect compiled JavaScript back to TypeScript.

Enable:

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

Then debuggers can show `.ts` source lines.

Useful debugging habits:

- inspect actual runtime values
- verify external API data
- inspect generated JavaScript if module behavior is confusing
- verify `tsconfig` used by the build
- check path aliases
- check ESM/CommonJS configuration
- distinguish type errors from runtime errors

---

# 91. Performance Considerations

TypeScript types are erased, so most type annotations have no runtime performance cost.

However, your generated JavaScript and application architecture still affect performance.

Potential concerns:

- huge bundles
- unnecessary transpilation/polyfills
- expensive runtime validation
- accidental deep cloning
- excessive object allocations
- inefficient algorithms

Compiler performance can also become an issue in extremely type-heavy projects.

Complex recursive conditional types may slow:

- editor IntelliSense
- compiler checking
- CI builds

Prefer understandable types over clever type puzzles.

---

# 92. Security Considerations

TypeScript is not a security boundary.

This:

```typescript
interface LoginRequest {
  username: string;
  password: string;
}
```

does not stop an attacker from sending malformed JSON.

You still need:

- runtime validation
- authentication
- authorization
- SQL injection prevention
- output escaping
- CSRF protection when relevant
- secure cookie settings
- rate limiting
- proper secret management
- dependency updates

Never confuse:

```text
compile-time safety
```

with:

```text
runtime security
```

---

# 93. Common Mistakes

## Mistake 1: Using any everywhere

Bad:

```typescript
function process(data: any): any {
  return data.value;
}
```

Better:

```typescript
interface Input {
  value: string;
}

function process(data: Input): string {
  return data.value;
}
```

---

## Mistake 2: Overusing assertions

Bad:

```typescript
const user = response as User;
```

when the data is external and unvalidated.

Use runtime validation.

---

## Mistake 3: Disabling strict mode

Bad:

```json
"strict": false
```

in a new serious application.

---

## Mistake 4: Typing everything manually

Unnecessary:

```typescript
const count: number = 0;
```

Inference works:

```typescript
const count = 0;
```

---

## Mistake 5: Creating giant interfaces

Bad architecture:

```typescript
interface ApplicationData {
  // 100+ unrelated properties
}
```

Split types according to domain boundaries.

---

## Mistake 6: Making every field optional

Bad:

```typescript
interface User {
  id?: number;
  name?: string;
  email?: string;
}
```

This forces every consumer to handle incomplete data.

Use separate types:

```typescript
interface CreateUserRequest {
  name: string;
  email: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}
```

---

## Mistake 7: Using Boolean, String, Number object types

Avoid:

```typescript
let name: String;
let count: Number;
let active: Boolean;
```

Use primitives:

```typescript
let name: string;
let count: number;
let active: boolean;
```

---

# 94. Best Practices

1. Enable `strict`.
2. Prefer inference for obvious local values.
3. Define explicit types at module/API boundaries.
4. Prefer `unknown` over `any`.
5. Validate external data at runtime.
6. Use discriminated unions for state.
7. Use generics to preserve information, not to show cleverness.
8. Prefer small focused interfaces/types.
9. Separate API DTOs, database rows, and domain models when their responsibilities differ.
10. Avoid unsafe type assertions.
11. Use `readonly` where mutation should not happen.
12. Model meaningful business states explicitly.
13. Keep types close to the domain they represent.
14. Prefer literal unions over broad strings.
15. Keep compiler configuration strict and consistent across developers and CI.

---

# 95. Real-World Project Structure

Example Node/TypeScript backend:

```text
src/
├── config/
│   └── database.ts
├── controllers/
│   └── user.controller.ts
├── domain/
│   ├── user.ts
│   └── user.errors.ts
├── dto/
│   ├── create-user.dto.ts
│   └── user-response.dto.ts
├── repositories/
│   ├── user.repository.ts
│   └── sql-user.repository.ts
├── routes/
│   └── user.routes.ts
├── services/
│   └── user.service.ts
├── validators/
│   └── user.validator.ts
├── utils/
│   └── result.ts
└── index.ts
```

Flow:

```text
HTTP Request
     ↓
Route
     ↓
Controller
     ↓
Runtime Validation
     ↓
Service
     ↓
Repository
     ↓
Database
```

Types travel through these layers, but each layer should have a clear purpose.

---

# 96. Practical Scenarios

## Scenario 1: Employee Management System

```typescript
type EmployeeStatus =
  | "active"
  | "notice"
  | "left";

interface Employee {
  id: number;
  name: string;
  email: string;
  status: EmployeeStatus;
}
```

Function:

```typescript
function getActiveEmployees(
  employees: Employee[]
): Employee[] {
  return employees.filter(
    employee => employee.status === "active"
  );
}
```

---

## Scenario 2: Invoice System

```typescript
type InvoiceStatus =
  | "OCR_PENDING"
  | "QUERY"
  | "WORKFLOW"
  | "APPROVED"
  | "POSTED";

interface Invoice {
  id: number;
  invoiceNumber: string;
  vendorCode: string;
  total: number;
  status: InvoiceStatus;
}
```

Safer than:

```typescript
status: string
```

because invalid values cannot be used accidentally.

---

## Scenario 3: Permission System

```typescript
type Role =
  | "USER"
  | "MANAGER"
  | "FINANCE"
  | "ADMIN";

type Permission =
  | "invoice.read"
  | "invoice.approve"
  | "invoice.post"
  | "user.manage";

const permissions: Record<Role, Permission[]> = {
  USER: [
    "invoice.read"
  ],
  MANAGER: [
    "invoice.read",
    "invoice.approve"
  ],
  FINANCE: [
    "invoice.read",
    "invoice.approve",
    "invoice.post"
  ],
  ADMIN: [
    "invoice.read",
    "invoice.approve",
    "invoice.post",
    "user.manage"
  ]
};
```

---

## Scenario 4: API Pagination

```typescript
interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
```

Usage:

```typescript
type UserPage = PaginatedResponse<User>;
```

---

## Scenario 5: Generic Repository

```typescript
interface Repository<T, ID> {
  findById(id: ID): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<void>;
}
```

Implementation:

```typescript
class UserRepository
  implements Repository<User, number> {

  async findById(id: number): Promise<User | null> {
    return null;
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  async save(entity: User): Promise<User> {
    return entity;
  }

  async delete(id: number): Promise<void> {}
}
```

---

## Scenario 6: Configuration

```typescript
const environments = [
  "development",
  "test",
  "production"
] as const;

type Environment =
  (typeof environments)[number];

interface AppConfig {
  environment: Environment;
  port: number;
  apiBaseUrl: string;
}
```

---

## Scenario 7: Form State

```typescript
interface LoginForm {
  email: string;
  password: string;
}

type FormErrors<T> = Partial<
  Record<keyof T, string>
>;

const errors: FormErrors<LoginForm> = {
  email: "Invalid email"
};
```

---

## Scenario 8: Exhaustive Switch

```typescript
type Status =
  | "pending"
  | "approved"
  | "rejected";

function assertNever(value: never): never {
  throw new Error(
    `Unhandled value: ${String(value)}`
  );
}

function getStatusLabel(status: Status): string {
  switch (status) {
    case "pending":
      return "Pending";

    case "approved":
      return "Approved";

    case "rejected":
      return "Rejected";

    default:
      return assertNever(status);
  }
}
```

If another status is later added, the compiler helps identify unhandled code paths.

---

## Scenario 9: Event System

```typescript
interface EventMap {
  userCreated: {
    userId: number;
  };

  invoiceApproved: {
    invoiceId: number;
    approvedBy: string;
  };
}

function emit<K extends keyof EventMap>(
  event: K,
  payload: EventMap[K]
): void {
  console.log(event, payload);
}
```

Usage:

```typescript
emit("userCreated", {
  userId: 10
});
```

Incorrect payloads are rejected.

---

## Scenario 10: Typed Feature Flags

```typescript
type Feature =
  | "newDashboard"
  | "advancedSearch"
  | "betaCheckout";

type FeatureFlags = Record<Feature, boolean>;

const flags: FeatureFlags = {
  newDashboard: true,
  advancedSearch: false,
  betaCheckout: false
};
```

---

# 97. Interview Questions

## Beginner

### What is TypeScript?

TypeScript is a statically typed superset of JavaScript that compiles to JavaScript.

### Does TypeScript run directly in browsers?

Generally no. It is compiled/transpiled to JavaScript.

### Difference between any and unknown?

`any` allows unrestricted operations.

`unknown` requires type narrowing before operations.

### Difference between interface and type?

Both describe types. Interfaces are especially useful for extendable object contracts and declaration merging. Type aliases support unions, intersections, mapped types, tuples, primitives, and other type expressions.

### What is type inference?

TypeScript automatically determines a type from context or assigned values.

---

## Intermediate

### What is a union type?

A value may be one of multiple possible types.

```typescript
string | number
```

### What is an intersection?

Combines multiple types.

```typescript
A & B
```

### What are generics?

Reusable types/functions that preserve type relationships.

```typescript
function identity<T>(value: T): T
```

### What is keyof?

Produces a union of keys from an object type.

### What is narrowing?

The compiler reduces a broad type to a more specific type after checks.

### What is a discriminated union?

A union whose members use a shared literal property to identify the current variant.

---

## Advanced

### What is structural typing?

Compatibility is based primarily on object shape, not nominal inheritance.

### What are mapped types?

Types that iterate over keys and transform properties.

### What are conditional types?

Type-level conditionals using:

```typescript
T extends U ? X : Y
```

### What does infer do?

Extracts a type from another type inside a conditional type.

### What is declaration merging?

Multiple compatible declarations with the same name can combine, especially interfaces.

### What is module augmentation?

Adding project-specific typing to an existing module declaration.

### Difference between compile-time type safety and runtime validation?

TypeScript checks code statically, while runtime validation verifies real data received while the application is running.

---

# 98. Practice Exercises

## Beginner Exercises

1. Create variables using every primitive type.
2. Create an array of employees.
3. Create a tuple representing `[id, name]`.
4. Create a union type for payment methods.
5. Create an interface for a product.
6. Write a function that calculates GST.
7. Add optional and readonly properties.
8. Write a function using a default parameter.
9. Use `unknown` and narrow it.
10. Create a literal union for environments.

---

## Intermediate Exercises

1. Create `ApiResponse<T>`.
2. Create a generic repository.
3. Use `keyof` to build a safe property getter.
4. Create a `Partial` update DTO.
5. Model API loading state using discriminated unions.
6. Write a custom type guard.
7. Create an exhaustive switch.
8. Build an event map using generics.
9. Create a typed dictionary using `Record`.
10. Model an order workflow.

---

## Advanced Exercises

1. Implement a custom `Partial<T>`.
2. Implement a custom `Pick<T, K>`.
3. Create a conditional type that extracts Promise results.
4. Build a template literal route type.
5. Create a strongly typed event emitter.
6. Build a form error mapper.
7. Model workflow states so invalid transitions are difficult to represent.
8. Create a generic Result type.
9. Write a type-safe API client abstraction.
10. Build runtime validation around an `unknown` payload.

---

# 99. Project Ideas

## Beginner

### CLI Expense Calculator

Topics:

- functions
- arrays
- interfaces
- enums/unions
- basic modules

### Todo Application

Topics:

- object types
- status unions
- DOM events
- local storage
- filtering

---

## Intermediate

### Employee Management System

Features:

- create employee
- update employee
- department filtering
- role types
- employee status
- API layer

### Invoice Workflow Simulator

Features:

- invoice states
- workflow approvers
- rejection/query flow
- discriminated unions
- generic responses

### REST API

Use:

```text
Node.js
TypeScript
Express/Fastify
database
runtime validation
```

---

## Advanced

### Type-Safe API Client

Build:

```text
endpoint definitions
typed request body
typed route parameters
typed response mapping
error Result types
runtime validation
```

### Workflow Engine

Model:

```text
Draft
Submitted
ManagerApproved
FinanceApproved
Posted
Rejected
```

Use discriminated unions and typed transitions.

### Mini ORM / Repository Layer

Practice:

- generics
- keyof
- mapped types
- constraints
- database models
- domain mapping

---

# 100. Learning Roadmap

## Phase 1: JavaScript Foundation

Before advanced TypeScript, understand:

```text
variables
scope
functions
objects
arrays
closures
promises
async/await
classes
modules
ES6+
```

---

## Phase 2: Basic TypeScript

Learn:

```text
primitive types
arrays
tuples
objects
functions
interfaces
type aliases
unions
literal types
optional properties
readonly
```

---

## Phase 3: Type Safety

Learn:

```text
unknown
never
null
undefined
strict mode
type narrowing
type guards
discriminated unions
```

---

## Phase 4: OOP

Learn:

```text
classes
constructors
access modifiers
inheritance
abstract classes
interfaces
static members
```

---

## Phase 5: Generics

Learn:

```text
generic functions
generic interfaces
generic classes
constraints
keyof
indexed access
```

---

## Phase 6: Type Transformations

Learn:

```text
utility types
mapped types
conditional types
infer
template literal types
typeof
satisfies
as const
```

---

## Phase 7: Application Development

Practice TypeScript with:

```text
DOM
Node.js
React
Angular
Express
REST APIs
databases
validation libraries
```

---

## Phase 8: Architecture

Learn:

```text
DTOs
domain models
repositories
services
result pattern
state machines
dependency inversion
testing
```

---

## Phase 9: Advanced TypeScript

Learn:

```text
structural typing
variance
declaration merging
module augmentation
advanced generics
library authoring
type-level testing
compiler configuration
```

---

# 101. TypeScript Cheat Sheet

## Variables

```typescript
let name: string = "Alice";
let age: number = 30;
let active: boolean = true;
```

## Array

```typescript
const numbers: number[] = [1, 2, 3];
```

## Tuple

```typescript
const user: [number, string] = [1, "Alice"];
```

## Union

```typescript
type Id = number | string;
```

## Literal

```typescript
type Status = "pending" | "done";
```

## Interface

```typescript
interface User {
  id: number;
  name: string;
}
```

## Type Alias

```typescript
type Point = {
  x: number;
  y: number;
};
```

## Function

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## Generic

```typescript
function identity<T>(value: T): T {
  return value;
}
```

## keyof

```typescript
type Keys = keyof User;
```

## Partial

```typescript
type UpdateUser = Partial<User>;
```

## Pick

```typescript
type UserSummary =
  Pick<User, "id" | "name">;
```

## Omit

```typescript
type PublicUser =
  Omit<User, "password">;
```

## Record

```typescript
type Scores =
  Record<string, number>;
```

## Readonly

```typescript
type ImmutableUser =
  Readonly<User>;
```

## ReturnType

```typescript
type Result =
  ReturnType<typeof myFunction>;
```

## typeof

```typescript
const config = {
  port: 3000
};

type Config = typeof config;
```

## as const

```typescript
const roles = [
  "admin",
  "user"
] as const;

type Role =
  (typeof roles)[number];
```

## satisfies

```typescript
const config = {
  port: 3000
} satisfies {
  port: number;
};
```

## Optional Chaining

```typescript
user.profile?.name
```

## Nullish Coalescing

```typescript
const value = input ?? "default";
```

---

# Final Mental Model

Do not think of TypeScript simply as:

```text
JavaScript with type annotations
```

Think of TypeScript as a language for describing **relationships and valid states**.

For example:

```typescript
type Payment =
  | {
      status: "pending";
    }
  | {
      status: "success";
      transactionId: string;
    }
  | {
      status: "failed";
      error: string;
    };
```

This type tells developers:

```text
Pending payment has no transaction ID.
Successful payment always has a transaction ID.
Failed payment always has an error.
```

That is where TypeScript becomes powerful.

Good TypeScript makes invalid application states difficult to represent.

---

# Recommended Daily Practice

A useful routine:

```text
20 min → Learn one TypeScript concept
20 min → Write examples without copying
20 min → Apply it to a small real scenario
15 min → Read compiler errors and understand why
15 min → Refactor old JavaScript into safer TypeScript
```

Do not only memorize syntax.

Ask these questions whenever writing TypeScript:

```text
What values are valid here?

What values must never be valid?

Can the compiler express that rule?

What data comes from outside my application?

Where do I need runtime validation?

Can a union represent the business state better?

Am I using any because I genuinely need it,
or because I am avoiding proper modeling?
```

---

# Mastery Checklist

You can consider yourself comfortable with TypeScript when you can confidently:

- Explain TypeScript's compilation and type erasure.
- Configure a strict TypeScript project.
- Use primitive types, arrays, tuples, objects, unions, and literals.
- Choose appropriately between interfaces and type aliases.
- Use `unknown` instead of unsafe `any`.
- Write type guards and narrowing logic.
- Model application states using discriminated unions.
- Build classes and understand access modifiers.
- Write reusable generic functions and interfaces.
- Use `keyof`, indexed access, `typeof`, and utility types.
- Understand mapped and conditional types.
- Use `infer` and template literal types when appropriate.
- Build typed API request/response contracts.
- Distinguish compile-time typing from runtime validation.
- Use TypeScript with frontend and backend frameworks.
- Design repository and service contracts.
- Create type-safe event systems and workflows.
- Understand structural typing and excess property checks.
- Debug compiler, module, and configuration problems.
- Avoid unsafe assertions and unnecessary `any`.
- Model business rules directly in the type system.

---

# Final Advice

TypeScript mastery does not come from writing the most complicated type possible.

It comes from making code:

```text
clear
predictable
safe
maintainable
easy to refactor
hard to misuse
```

When choosing between a clever type and a type every teammate can understand, prefer clarity unless the additional complexity solves a real problem.

The compiler should act like a helpful reviewer continuously checking your assumptions.

That is the real advantage of TypeScript.
---

# Part II — Type-System Deep Dive

The foundation above teaches working TypeScript. This section explains the deeper compiler behavior and modeling techniques that distinguish everyday TypeScript from advanced TypeScript engineering.

# 102. Structural Typing in Depth

TypeScript primarily compares types by **shape** rather than by declared name.

```typescript
interface User {
  id: number;
  name: string;
}

interface Customer {
  id: number;
  name: string;
}

const customer: Customer = {
  id: 1,
  name: "Asha"
};

const user: User = customer;
```

This works because `Customer` contains the properties required by `User`.

A useful mental model is:

```text
TypeScript usually asks:
"Does this value have everything the destination type requires?"

It usually does not ask:
"Was this value explicitly declared as that named type?"
```

This behavior matches normal JavaScript programming, where objects are frequently created without formal class hierarchies.

## Scenario: accepting richer objects

```typescript
interface NamedEntity {
  id: number;
  name: string;
}

const employee = {
  id: 100,
  name: "Rahul",
  department: "Engineering",
  salary: 900000
};

function printEntity(entity: NamedEntity): void {
  console.log(entity.id, entity.name);
}

printEntity(employee);
```

The function needs only `id` and `name`, so a richer value can be accepted.

---

# 103. Assignability — The Rule Behind Most Type Errors

When you see:

```text
Type X is not assignable to type Y
```

TypeScript is checking whether every value represented by `X` can safely be used where `Y` is expected.

```typescript
let name: string = "Alice";
let value: string | number = name;
```

Safe, because every string is a valid `string | number`.

Reverse direction:

```typescript
let value: string | number = 10;
let name: string = value;
```

Unsafe because `value` might be a number.

Narrow first:

```typescript
if (typeof value === "string") {
  name = value;
}
```

Think of types as sets of possible values:

```text
string ⊆ string | number
```

This set-based mental model explains a surprising amount of TypeScript behavior.

---

# 104. Literal Widening

Compare:

```typescript
let status = "pending";
```

with:

```typescript
const status = "pending";
```

Because a `let` binding can be reassigned, TypeScript normally widens its type to:

```text
string
```

A `const` binding may retain the literal type:

```text
"pending"
```

But object properties are mutable:

```typescript
const order = {
  status: "pending"
};

order.status = "approved";
```

So `order.status` generally widens to `string`.

Preserve literal information deeply:

```typescript
const order = {
  status: "pending"
} as const;
```

Now `status` is the literal `"pending"` and is readonly.

---

# 105. Contextual Typing

TypeScript often learns a type from **where an expression is used**.

```typescript
const numbers = [1, 2, 3];

numbers.map(value => value * 2);
```

You did not write `value: number`; the array context supplies it.

DOM example:

```typescript
const button = document.querySelector<HTMLButtonElement>("#save");

button?.addEventListener("click", event => {
  console.log(event.clientX);
});
```

The event callback is contextually typed.

This is why well-designed TypeScript APIs can provide strong safety without forcing annotations everywhere.

---

# 106. Excess Property Checks

Direct object literals receive an additional check for suspicious extra properties.

```typescript
interface User {
  name: string;
}

const user: User = {
  name: "Alice",
  age: 30
};
```

The compiler reports `age` as unexpected.

But this may be allowed:

```typescript
const temp = {
  name: "Alice",
  age: 30
};

const user: User = temp;
```

Why? Normal structural assignment asks whether `temp` contains at least what `User` requires. The stricter check on a fresh object literal exists mainly to catch likely mistakes such as typos.

```typescript
interface Config {
  timeout: number;
}

const config: Config = {
  timeout: 5000,
  timeuot: 1000 // typo caught
};
```

---

# 107. TypeScript Object Types Are Usually Not Exact

```typescript
interface User {
  id: number;
}
```

This usually means:

```text
Must contain at least an id:number structure
```

not:

```text
Must contain exactly one property and nothing else
```

This matters at security and API boundaries. If an incoming JSON object must have an exact runtime shape, use runtime validation rather than relying on an interface.

---

# 108. `never` as an Empty Set

`never` represents a type with no possible values.

```typescript
type A = string | never; // string
type B = string & never; // never
```

It is especially useful for exhaustive checking:

```typescript
type Status = "pending" | "approved" | "rejected";

function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${String(value)}`);
}

function getLabel(status: Status): string {
  switch (status) {
    case "pending":
      return "Pending";
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    default:
      return assertNever(status);
  }
}
```

Add a new status later and the compiler can identify unhandled decision points.

---

# 109. `unknown` as the Safe Top Type

`unknown` can hold any value:

```typescript
let value: unknown;
value = 10;
value = "hello";
value = { id: 1 };
```

But you cannot safely operate on it until you narrow it:

```typescript
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Use `unknown` for data from uncertain boundaries:

```text
HTTP JSON
files
local storage
message queues
third-party SDK responses
configuration
webhooks
```

Recommended pattern:

```typescript
const raw: unknown = JSON.parse(text);

if (!isUser(raw)) {
  throw new Error("Invalid user payload");
}

// raw is now User
console.log(raw.name);
```

---

# 110. Why `any` Is Contagious

```typescript
const data: any = getExternalData();
const city = data.user.profile.address.city;
```

The compiler can no longer meaningfully protect that chain.

A single `any` may spread through return values, variables, and callbacks.

Prefer:

```typescript
const data: unknown = getExternalData();
```

Then validate or narrow it.

Reasonable limited uses of `any` can exist in low-level interop or migration code, but isolate them at the boundary.

---

# 111. `void` Is More Subtle Than “Returns Nothing”

A callback type:

```typescript
() => void
```

primarily means that its caller ignores the returned value.

For example:

```typescript
const output: number[] = [];

[1, 2, 3].forEach(value => output.push(value));
```

`push()` returns a number, but `forEach` ignores callback return values.

This is why function compatibility involving `void` may look different from simply using `undefined`.

---

# 112. Missing, `undefined`, `null`, and Optional Are Different Concepts

Property required but value may be undefined:

```typescript
interface A {
  value: string | undefined;
}

const a: A = {
  value: undefined
};
```

Property may be absent:

```typescript
interface B {
  value?: string;
}

const b: B = {};
```

Property may explicitly contain no value:

```typescript
interface C {
  value: string | null;
}
```

These distinctions matter in APIs, database updates, and configuration merging.

---

# 113. `exactOptionalPropertyTypes`

Consider a PATCH request:

```typescript
interface UserUpdate {
  name?: string;
  phone?: string | null;
}
```

A useful semantic contract could be:

```text
name missing     → do not change name
phone missing    → do not change phone
phone = null     → clear phone
phone = string   → replace phone
```

`exactOptionalPropertyTypes` makes optional-property behavior more precise and helps distinguish missing properties from properties explicitly assigned `undefined`.

```json
{
  "compilerOptions": {
    "exactOptionalPropertyTypes": true
  }
}
```

---

# 114. `noUncheckedIndexedAccess`

Without stricter indexed access:

```typescript
const names: string[] = [];
const name = names[100];
```

At runtime, `name` is `undefined`.

Enable:

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

Now indexed access is treated more realistically:

```text
string | undefined
```

This is especially valuable for arrays, maps implemented as objects, and lookup tables.

---

# 115. Index Signatures

```typescript
interface Scores {
  [studentName: string]: number;
}

const scores: Scores = {
  Asha: 95,
  Rahul: 88
};
```

Be careful mixing fixed properties with index signatures:

```typescript
interface Bad {
  [key: string]: number;
  name: string; // incompatible
}
```

Prefer separating dynamic values:

```typescript
interface Report {
  name: string;
  metrics: Record<string, number>;
}
```

---

# 116. Function Input and Output Compatibility

Suppose:

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}
```

A function returning `Dog` can safely substitute for one returning `Animal`:

```typescript
type AnimalFactory = () => Animal;

const createDog = (): Dog => ({
  name: "Bruno",
  bark() {}
});

const factory: AnimalFactory = createDog;
```

Input positions behave differently. A callback that can accept **any Animal** is more general than one that only knows how to process Dogs.

This is the practical foundation of variance.

---

# 117. Variance — Practical Mental Model

You do not need category theory to use TypeScript well.

Remember:

```text
Producer<T> mostly returns T
Consumer<T> mostly accepts T
```

```typescript
interface Producer<T> {
  produce(): T;
}

interface Consumer<T> {
  consume(value: T): void;
}
```

Variance becomes important when building reusable callback-heavy libraries, observables, event systems, or framework APIs. In normal application code, let strict compiler checks guide you instead of forcing conversions.

---

# 118. Overloads vs Union Parameters

Use a union when one implementation has the same logical return behavior:

```typescript
function printId(id: string | number): void {
  console.log(id);
}
```

Use overloads when input forms produce distinct caller-visible output contracts:

```typescript
function parse(value: string): string[];
function parse(value: Uint8Array): number[];

function parse(value: string | Uint8Array): string[] | number[] {
  if (typeof value === "string") {
    return value.split("");
  }
  return Array.from(value);
}
```

Avoid dozens of overloads when generics or discriminated objects can express the relationship more clearly.

---

# 119. Overload Implementation Signatures

```typescript
function format(value: number): string;
function format(value: Date): string;

function format(value: number | Date): string {
  return value instanceof Date
    ? value.toISOString()
    : value.toFixed(2);
}
```

Callers see the overload signatures, not arbitrary possibilities in the implementation signature.

This distinction explains many overload errors.

---

# 120. `this` Parameters

TypeScript can describe required `this` context:

```typescript
interface User {
  name: string;
}

function greet(this: User): string {
  return `Hello ${this.name}`;
}

const user = {
  name: "Alice",
  greet
};

user.greet();
```

The fake `this` parameter exists only for type checking.

---

# 121. Polymorphic `this`

```typescript
class QueryBuilder {
  where(condition: string): this {
    console.log(condition);
    return this;
  }
}

class UserQueryBuilder extends QueryBuilder {
  activeOnly(): this {
    return this;
  }
}
```

Returning `this` preserves subtype information through fluent method chains.

---

# 122. Constructor Types

Classes have an instance side and a constructor/static side.

```typescript
interface User {
  id: number;
}

interface UserConstructor {
  new (id: number): User;
}
```

Generic factory:

```typescript
function create<T>(Constructor: new () => T): T {
  return new Constructor();
}
```

Constructor typing appears frequently in dependency injection, factories, ORMs, and plugin systems.

---

# 123. Abstract Constructor Types

```typescript
abstract class BaseService {
  abstract execute(): void;
}

type AbstractConstructor<T> =
  abstract new (...args: any[]) => T;
```

This is an advanced building block for frameworks and mixin systems that need to accept abstract classes.

---

# 124. Mixins

```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
  };
}

class User {}

const TimestampedUser = Timestamped(User);
const user = new TimestampedUser();
```

Mixins provide reusable behavior through composition. Use them when they genuinely simplify a design; do not introduce them just because they are advanced.

---

# 125. Generics Represent Relationships

Weak generic:

```typescript
function log<T>(value: T): void {
  console.log(value);
}
```

`T` adds little because it appears only once.

Stronger generic:

```typescript
function first<T>(values: T[]): T | undefined {
  return values[0];
}
```

Here `T` connects the input element type to the output type.

Ask:

```text
What relationship is this generic preserving?
```

If there is no useful relationship, a generic may be unnecessary.

---

# 126. Generic Constraints

```typescript
function getId<T extends { id: string | number }>(value: T) {
  return value.id;
}
```

The function remains flexible but requires one known capability.

```typescript
getId({ id: 1, name: "Asha" });
getId({ id: "INV-1", amount: 500 });
```

---

# 127. Multiple Generic Parameters

```typescript
interface Repository<Entity, Id> {
  findById(id: Id): Promise<Entity | null>;
}
```

Descriptive names often beat single letters in domain APIs.

Other useful generic relationships include:

```text
Event → Payload
Route → Params
Entity → Identifier
Request → Response
Key → Property value
```

---

# 128. Generic Defaults

```typescript
interface ApiResponse<Data, Meta = undefined> {
  data: Data;
  meta: Meta;
}
```

Use:

```typescript
type UserResponse = ApiResponse<User>;
type UserPage = ApiResponse<User[], PaginationMeta>;
```

Defaults are useful when most callers use one common case.

---

# 129. Generic Inference

```typescript
function identity<T>(value: T): T {
  return value;
}

const text = identity("hello"); // T inferred as string
```

Well-designed generic APIs allow callers to omit explicit type arguments most of the time.

If inference becomes ambiguous, explicit annotations are perfectly reasonable:

```typescript
const config: AppConfig = loadConfig();
```

---

# 130. `const` Type Parameters

Modern TypeScript supports `const` modifiers on type parameters to preserve literal-like inference more aggressively.

```typescript
function makeTuple<const T extends readonly unknown[]>(values: T): T {
  return values;
}

const result = makeTuple(["admin", "user"]);
```

This is especially valuable for library APIs that derive types from user-provided configuration.

---

# 131. `NoInfer`

Sometimes one argument should be checked against a generic type without participating in inference.

```typescript
function createFSM<State extends string>(
  states: readonly State[],
  initial: NoInfer<State>
) {
  return { states, initial };
}
```

Here the allowed `State` values should primarily come from `states`; `initial` is checked against them.

Use `NoInfer` only when inference direction genuinely matters.

---

# 132. `keyof` in Depth

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
}

type EmployeeKey = keyof Employee;
// "id" | "name" | "salary"
```

Safe getter:

```typescript
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
```

```typescript
const employee = {
  id: 1,
  name: "Asha",
  salary: 900000
};

const name = getProperty(employee, "name");   // string
const salary = getProperty(employee, "salary"); // number
```

The selected key controls the return type.

---

# 133. Indexed Access Types

```typescript
interface User {
  id: number;
  profile: {
    name: string;
    age: number;
  };
}

type Profile = User["profile"];
type Age = User["profile"]["age"];
```

Array element type:

```typescript
const roles = ["admin", "manager", "user"] as const;
type Role = (typeof roles)[number];
```

This pattern keeps runtime constants and compile-time unions synchronized.

---

# 134. Mapped Types in Depth

```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

Read it as:

```text
For every key in T,
create the same key,
make it optional,
and preserve its value type.
```

Remove optional:

```typescript
type RequiredVersion<T> = {
  [K in keyof T]-?: T[K];
};
```

Remove readonly:

```typescript
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

---

# 135. Key Remapping

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

For:

```typescript
interface User {
  name: string;
  age: number;
}
```

it produces a shape similar to:

```typescript
{
  getName(): string;
  getAge(): number;
}
```

Useful for libraries and generated APIs; often overkill for ordinary domain models.

---

# 136. Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;
```

Another example:

```typescript
type ElementType<T> =
  T extends readonly (infer U)[]
    ? U
    : T;
```

```typescript
type A = ElementType<string[]>; // string
type B = ElementType<number>;   // number
```

Conditional types are TypeScript's main type-level branching mechanism.

---

# 137. Distributive Conditional Types

```typescript
type ToArray<T> = T extends unknown ? T[] : never;

type Result = ToArray<string | number>;
```

Result:

```text
string[] | number[]
```

The conditional is evaluated separately for each union member.

This distribution is extremely important when reading advanced utility types.

---

# 138. Preventing Distribution

Wrap both sides in tuples:

```typescript
type ToArrayNonDistributed<T> =
  [T] extends [unknown] ? T[] : never;

type Result = ToArrayNonDistributed<string | number>;
```

Now:

```text
(string | number)[]
```

Use this technique when a union must be treated as a whole.

---

# 139. `infer` in Depth

```typescript
type MyReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;
```

Promise extraction:

```typescript
type PromiseValue<T> =
  T extends Promise<infer Value>
    ? Value
    : T;
```

Array extraction:

```typescript
type Element<T> =
  T extends readonly (infer Item)[]
    ? Item
    : never;
```

Use `infer` to extract a type from a larger pattern.

---

# 140. Recursive Types

Data recursion is straightforward:

```typescript
interface TreeNode {
  id: string;
  children: TreeNode[];
}
```

Recursive type transformations are more advanced:

```typescript
type DeepReadonly<T> =
  T extends (...args: any[]) => any
    ? T
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;
```

Use recursive transformations carefully because they can produce difficult error messages and slow type checking in large compositions.

---

# 141. Template Literal Types

```typescript
type HttpMethod = "GET" | "POST";
type Resource = "users" | "orders";

type RouteKey = `${HttpMethod} /api/${Resource}`;
```

Possible values:

```text
GET /api/users
GET /api/orders
POST /api/users
POST /api/orders
```

Common uses:

- event names
- route keys
- translation keys
- configuration tokens
- generated getter/setter names

---

# 142. Intrinsic String Manipulation Types

Built-ins:

```typescript
Uppercase<T>
Lowercase<T>
Capitalize<T>
Uncapitalize<T>
```

Example:

```typescript
type EventName = "click" | "change";
type HandlerName = `on${Capitalize<EventName>}`;
// "onClick" | "onChange"
```

---

# 143. Branded Types

Structural typing means plain aliases do not create distinct IDs:

```typescript
type UserId = string;
type InvoiceId = string;
```

A `UserId` can be accidentally passed as an `InvoiceId`.

Brand pattern:

```typescript
type Brand<T, Name extends string> = T & {
  readonly __brand: Name;
};

type UserId = Brand<string, "UserId">;
type InvoiceId = Brand<string, "InvoiceId">;
```

Create branded values through validation:

```typescript
function parseUserId(value: string): UserId {
  if (!value.startsWith("USR-")) {
    throw new Error("Invalid User ID");
  }

  return value as UserId;
}
```

The cast is isolated behind runtime validation.

---

# 144. Unit-Safe Types

```typescript
type Milliseconds = Brand<number, "Milliseconds">;
type Seconds = Brand<number, "Seconds">;
```

Useful for preventing mistakes such as passing seconds to an API expecting milliseconds.

This pattern also works for:

```text
currency amounts
coordinates
database IDs
document numbers
measurements
```

---

# 145. `satisfies` vs Annotation vs Assertion

Annotation:

```typescript
const config: Config = { /* ... */ };
```

Checks compatibility and treats the variable as `Config`.

Assertion:

```typescript
const config = { /* ... */ } as Config;
```

Tells the compiler to trust your claim more aggressively.

`satisfies`:

```typescript
const config = { /* ... */ } satisfies Config;
```

Checks the value against `Config` while preserving useful inference from the literal itself.

This is excellent for configuration and lookup tables.

---

# 146. `satisfies` Permission Example

```typescript
type Role = "admin" | "manager" | "user";
type Permission = "read" | "write" | "delete";

const permissions = {
  admin: ["read", "write", "delete"],
  manager: ["read", "write"],
  user: ["read"]
} satisfies Record<Role, Permission[]>;
```

The compiler checks that:

- all roles exist
- unknown roles are rejected
- permissions are valid
- literal information remains useful

---

# 147. Type Assertions — Keep Them Local

Unsafe boundary:

```typescript
const user = await response.json() as User;
```

No validation happened.

Better:

```typescript
const raw: unknown = await response.json();
const user = UserSchema.parse(raw);
```

For DOM code, narrowing may remove assertions entirely:

```typescript
const element = document.getElementById("email");

if (!(element instanceof HTMLInputElement)) {
  throw new Error("Expected email input");
}

console.log(element.value);
```

---

# 148. Non-Null Assertions

```typescript
const root = document.getElementById("app")!;
```

`!` means:

```text
I promise this value is not null/undefined.
```

It adds no runtime protection.

Prefer an explicit invariant check when failure is realistically possible:

```typescript
const root = document.getElementById("app");
if (!root) throw new Error("#app is missing");
```

---

# 149. Assertion Functions

```typescript
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected string");
  }
}

const raw: unknown = getValue();
assertIsString(raw);
raw.toUpperCase();
```

Assertion functions combine runtime checking with compile-time narrowing.

---

# 150. Condition Assertions

```typescript
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const user = findUser();
assert(user, "User must exist");
console.log(user.name);
```

Use assertion functions for genuine internal invariants, not as a replacement for external input validation.

---

# 151. Type Guards at Runtime Boundaries

```typescript
interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return typeof obj.id === "number"
    && typeof obj.name === "string";
}
```

Handwritten guards work well for small shapes. Large nested contracts are usually better served by a runtime schema library.

---

# 152. Truthiness Narrowing Pitfalls

```typescript
function print(value: string | null): void {
  if (value) {
    console.log(value);
  }
}
```

This removes both `null` **and empty string**.

If `""` is valid, use:

```typescript
if (value !== null) {
  console.log(value);
}
```

Remember that truthiness also excludes:

```text
0
false
""
NaN
null
undefined
```

---

# 153. Discriminated Unions as State Machines

Weak state:

```typescript
interface LoadState {
  loading: boolean;
  data?: User[];
  error?: string;
}
```

Contradictory combinations are possible.

Better:

```typescript
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };
```

Each state now contains only valid fields.

---

# 154. Modeling Workflow States

```typescript
type InvoiceWorkflow =
  | { state: "draft"; id: string }
  | { state: "submitted"; id: string; submittedAt: Date }
  | { state: "approved"; id: string; approvedBy: string; approvedAt: Date }
  | { state: "posted"; id: string; postingDocument: string }
  | { state: "rejected"; id: string; reason: string };
```

Extract one state:

```typescript
type SubmittedInvoice = Extract<
  InvoiceWorkflow,
  { state: "submitted" }
>;
```

Transition function:

```typescript
function approve(invoice: SubmittedInvoice, approver: string): InvoiceWorkflow {
  return {
    state: "approved",
    id: invoice.id,
    approvedBy: approver,
    approvedAt: new Date()
  };
}
```

A draft invoice cannot accidentally be passed to `approve()`.

---

# 155. Utility Types as Transformations

Do not memorize utility types as random keywords.

```text
Partial<T>      → all properties optional
Required<T>     → all properties required
Readonly<T>     → all properties readonly
Pick<T, K>      → keep selected keys
Omit<T, K>      → remove selected keys
Record<K, V>    → map keys to values
Exclude<U, X>   → remove matching union members
Extract<U, X>   → keep matching union members
NonNullable<T>  → remove null/undefined
ReturnType<F>   → extract function return type
Parameters<F>   → extract parameter tuple
Awaited<T>      → model awaited result
```

Once you understand mapped and conditional types, these become intuitive.

---

# 156. Implementing `Pick` Yourself

```typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

This combines:

- generics
- `keyof`
- mapped types
- indexed access

Understanding built-in utilities by reimplementing them is excellent practice.

---

# 157. Implementing `Exclude`

```typescript
type MyExclude<T, U> = T extends U ? never : T;
```

```typescript
type Status = "pending" | "approved" | "rejected";
type Active = MyExclude<Status, "rejected">;
// "pending" | "approved"
```

`never` disappears from unions, making conditional types useful as filters.

---

# 158. `Readonly<T>` Is Shallow

```typescript
interface Config {
  database: {
    host: string;
  };
}

const config: Readonly<Config> = {
  database: {
    host: "localhost"
  }
};
```

You cannot replace `config.database`, but nested data may still be mutable.

Deep immutability requires recursive types or immutable design patterns.

---

# 159. Readonly Array Parameters

```typescript
function total(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
```

The function promises not to mutate the array.

This documents intent and allows callers to pass readonly arrays safely.

---

# 160. Tuples in Depth

```typescript
type HttpResult = [status: number, body: string];
```

Optional tuple element:

```typescript
type Point = [x: number, y: number, label?: string];
```

Rest tuple:

```typescript
type Command = [command: string, ...args: string[]];
```

Use tuples when positions themselves have stable meaning. Prefer objects for business records where named fields improve readability.

---

# 161. Variadic Tuple Types

```typescript
type Prepend<Head, Tail extends unknown[]> = [Head, ...Tail];
```

Function helper:

```typescript
function bindFirst<First, Rest extends unknown[], Result>(
  fn: (first: First, ...rest: Rest) => Result,
  first: First
) {
  return (...rest: Rest): Result => fn(first, ...rest);
}
```

TypeScript preserves the remaining parameter list accurately.

---

# 162. Typed Event Names

```typescript
interface Model {
  name: string;
  age: number;
}

function on<K extends keyof Model>(
  event: `${string & K}Changed`,
  callback: (value: Model[K]) => void
): void {
  // register listener
}
```

```typescript
on("nameChanged", name => {
  name.toUpperCase();
});
```

The event name controls the callback payload type.

---

# 163. Typed Event Bus

```typescript
interface Events {
  userCreated: {
    userId: string;
  };

  invoiceApproved: {
    invoiceId: string;
    approvedBy: string;
  };
}

class EventBus<EventMap extends object> {
  emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): void {
    console.log(event, payload);
  }
}

const bus = new EventBus<Events>();

bus.emit("invoiceApproved", {
  invoiceId: "INV-1",
  approvedBy: "USR-10"
});
```

The compiler connects each event with its exact payload.

---

# 164. Generators

```typescript
function* ids(): Generator<number, void, unknown> {
  let id = 1;

  while (true) {
    yield id++;
  }
}
```

Generator generic positions represent the yielded value, final return value, and value accepted through `next()`.

Generators are useful for lazy sequences, parsers, streams, and stateful iteration.

---

# 165. Async Iterables

```typescript
async function* loadPages(): AsyncGenerator<User[], void, unknown> {
  // fetch one page at a time
}

for await (const users of loadPages()) {
  console.log(users.length);
}
```

Useful for pagination, streams, queues, and incremental APIs.

---

# 166. Promise Failure Types

```typescript
async function loadUser(): Promise<User> {
  // may throw
}
```

`Promise<User>` does not describe which errors may be thrown. TypeScript does not have checked exceptions.

If failure is part of the normal business contract, model it explicitly:

```typescript
type LoadUserError = "NOT_FOUND" | "NOT_AUTHORIZED";

type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

async function loadUser(): Promise<Result<User, LoadUserError>> {
  // ...
  throw new Error("example");
}
```

---

# 167. `Promise.all` Tuple Inference

```typescript
const result = await Promise.all([
  Promise.resolve(1),
  Promise.resolve("hello"),
  Promise.resolve(true)
]);
```

TypeScript can preserve the result tuple approximately as:

```text
[number, string, boolean]
```

This makes concurrent async workflows strongly typed.

---

# 168. Runtime Concurrency Is Not Solved by Types

TypeScript can type promises, but it does not prevent:

```text
race conditions
retry storms
duplicate requests
database isolation bugs
stale data writes
cancellation mistakes
```

Use runtime mechanisms such as transactions, idempotency keys, `AbortController`, queues, bounded concurrency, and correct locking where appropriate.

---

# 169. Parse, Don’t Cast

Weak:

```typescript
const userId = input as UserId;
```

Better:

```typescript
const userId = parseUserId(input);
```

The idea is:

```text
uncertain value
→ validate/parse once
→ trusted domain value
```

Downstream code becomes simpler because uncertainty is removed at the edge.

---

# 170. Illegal States Should Be Hard to Represent

Weak:

```typescript
interface Payment {
  successful: boolean;
  transactionId?: string;
  error?: string;
}
```

Invalid combinations are possible.

Better:

```typescript
type Payment =
  | { state: "success"; transactionId: string }
  | { state: "failure"; error: string };
```

This principle is one of the most important ideas in professional TypeScript design.


# Part III — Modules, Compiler, Runtime, and Tooling

# 171. Runtime Imports vs Type-Only Imports

Normal import:

```typescript
import { createUser } from "./user.js";
```

The imported value must exist at runtime.

Type-only import:

```typescript
import type { User } from "./types.js";
```

`User` exists only for static checking and is removed from emitted JavaScript.

Benefits of `import type`:

- communicates intent
- avoids accidental runtime dependencies
- helps isolated transpilers
- can reduce runtime circular dependencies
- makes module behavior easier to understand

---

# 172. `verbatimModuleSyntax`

Modern TypeScript can preserve import/export intent more directly with `verbatimModuleSyntax`.

A useful discipline is:

```typescript
import { runtimeFunction } from "./runtime.js";
import type { User } from "./types.js";
```

Instead of relying on the compiler to guess which imports are type-only.

This makes emitted module behavior more predictable, especially in modern ESM projects.

---

# 173. ESM vs CommonJS

CommonJS historically uses:

```javascript
const fs = require("fs");
module.exports = value;
```

ES modules use:

```typescript
import fs from "node:fs";
export default value;
```

Modern TypeScript projects need to understand both because packages and Node.js applications may use either.

Important pieces that affect behavior:

```text
package.json "type"
file extensions
compiler module setting
moduleResolution
package exports
Node.js version
bundler behavior
```

Many errors blamed on TypeScript are actually JavaScript module-system mismatches.

---

# 174. `module` vs `moduleResolution`

These are related but different.

`module` answers roughly:

```text
What module semantics/output should TypeScript model or emit?
```

`moduleResolution` answers:

```text
How should TypeScript find the file/package represented by an import?
```

Do not randomly change one because an import failed.

Choose both based on the real runtime or bundler.

---

# 175. Node-Oriented Module Resolution

Modern Node.js projects often need Node-aware resolution behavior that understands:

- package `type`
- ESM/CommonJS boundaries
- package `exports`
- extension-sensitive imports
- `.mts`, `.cts`, `.mjs`, `.cjs`

Typical Node-oriented TypeScript modes are intended to model Node's real behavior.

Rule:

```text
If Node itself resolves your imports at runtime,
use a module configuration designed to match Node.
```

---

# 176. Bundler-Oriented Module Resolution

A frontend toolchain may behave differently from raw Node.js.

For example, bundlers often resolve:

```text
extensionless source imports
aliases
virtual modules
CSS/assets
framework transforms
```

A bundler-oriented TypeScript resolution strategy is appropriate when:

```text
TypeScript checks the code,
but another build tool resolves and bundles it.
```

Always match the compiler to the actual execution/build environment.

---

# 177. Path Aliases Do Not Automatically Fix Runtime Resolution

```json
{
  "compilerOptions": {
    "paths": {
      "@app/*": ["./src/*"]
    }
  }
}
```

Then:

```typescript
import { User } from "@app/domain/User";
```

TypeScript may understand this alias.

Node.js or another runtime may not.

Your bundler/runtime must also understand the same mapping.

This is one of the most common TypeScript deployment mistakes.

---

# 178. `target`

`target` controls the JavaScript syntax level emitted by TypeScript.

Example:

```json
{
  "compilerOptions": {
    "target": "ES2022"
  }
}
```

It influences how newer syntax is transformed.

But remember:

```text
target does not automatically polyfill runtime APIs.
```

If the runtime does not implement a built-in method, changing `target` alone does not create that method.

---

# 179. `lib`

`lib` determines which built-in environment declarations TypeScript makes available.

Examples include conceptual libraries for:

```text
ECMAScript built-ins
browser DOM APIs
web workers
```

A browser application needs DOM APIs.

A pure Node library may not want browser globals.

Choose `lib` based on the real runtime, not because autocomplete errors are annoying.

---

# 180. Runtime Support vs Type Declarations

If TypeScript knows about an API:

```typescript
someModernApi();
```

that only means the declarations say it exists in the configured environment.

Your actual runtime must still support it.

Always separate these questions:

```text
Does TypeScript know the API?
Does the real runtime implement the API?
```

---

# 181. `types`

The `types` option controls which global declaration packages are included.

Node-oriented projects may use:

```json
{
  "compilerOptions": {
    "types": ["node"]
  }
}
```

Compiler defaults have evolved over TypeScript versions, so explicit configuration is helpful for enterprise projects that must upgrade predictably.

---

# 182. `rootDir` and `outDir`

Common structure:

```text
src/
  controllers/
  services/

dist/
  controllers/
  services/
```

Configuration:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

Explicit directory structure reduces surprising output paths across compiler changes.

---

# 183. `include`, `exclude`, and `files`

`files`:

```text
Explicit file list.
```

`include`:

```text
Patterns used to discover project files.
```

`exclude`:

```text
Filters files from include-based discovery.
```

Important: an excluded file can still become part of the program if another included file imports it.

The module graph matters more than file glob intuition.

---

# 184. `strict`

For modern new applications:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Strict mode enables a group of stronger checks around areas such as:

- nullability
- implicit `any`
- function compatibility
- class property initialization
- catch variables
- related type-safety rules

Strict mode is one of the highest-value TypeScript settings.

---

# 185. `noImplicitAny`

Bad:

```typescript
function greet(name) {
  return `Hello ${name}`;
}
```

If the compiler cannot infer a safe type, implicit `any` can weaken code.

With strict checking:

```typescript
function greet(name: string): string {
  return `Hello ${name}`;
}
```

This keeps untyped surfaces visible.

---

# 186. `strictNullChecks`

With strict nullability:

```typescript
let name: string = "Asha";
name = null; // error
```

If null is legitimate:

```typescript
let name: string | null = null;
```

This forces code to model missing values explicitly and catches many real production failures.

---

# 187. `useUnknownInCatchVariables`

JavaScript permits throwing almost anything:

```typescript
throw "failed";
throw 123;
throw { code: "X" };
```

Therefore:

```typescript
try {
  riskyOperation();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

is safer than assuming every caught value is an `Error`.

---

# 188. `noImplicitOverride`

```typescript
class BaseService {
  save(): void {}
}

class UserService extends BaseService {
  override save(): void {}
}
```

The `override` keyword documents intent.

If the base method later changes name or disappears, the compiler can catch the invalid override.

---

# 189. `noPropertyAccessFromIndexSignature`

For dictionary-like objects, this setting can require bracket access for values known only through an index signature.

It helps distinguish:

```text
known declared property
from
arbitrary dynamic property
```

This can improve clarity in configuration-heavy code.

---

# 190. `isolatedModules`

Some tools transpile files one at a time instead of running TypeScript's complete program-level emit.

Examples include common fast transpilers and framework pipelines.

`isolatedModules` catches code patterns that cannot be safely transformed in such a per-file environment.

Type checking may still be performed separately with:

```bash
tsc --noEmit
```

---

# 191. `isolatedDeclarations`

Large libraries and modern build systems may need declaration files to be generated in ways that do not depend on complex whole-program inference.

A useful design principle is:

```text
Exported/public APIs should have clear explicit types.
```

Even when you do not enable this option, explicit public contracts improve maintainability.

---

# 192. `skipLibCheck`

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

This often improves application build speed by skipping full checking of dependency declaration files.

It does **not** mean your code ignores dependency types.

Trade-off:

```text
faster builds
vs
less checking of declaration-file consistency
```

Applications commonly enable it; library authors should make the choice deliberately.

---

# 193. Type Checking Without Emitting

Modern frontend/build systems frequently let another tool produce JavaScript.

Run:

```bash
tsc --noEmit
```

for static checking while a bundler handles output.

This separates:

```text
type checking
from
transpilation/bundling
```

---

# 194. `noEmitOnError`

In compiler-driven builds you may want no JavaScript output if types are invalid.

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

If a separate bundler emits JavaScript regardless, enforce `tsc --noEmit` as a blocking CI step.

---

# 195. Source Maps

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

Source maps connect emitted JavaScript stack traces and debugger locations to `.ts` source.

Production decision:

```text
publicly serve maps?
upload privately to monitoring?
disable them?
```

Source maps can reveal implementation details, so deploy them intentionally.

---

# 196. Incremental Compilation

Large projects may cache compiler analysis:

```json
{
  "compilerOptions": {
    "incremental": true
  }
}
```

This can reduce repeated build time.

Modern TypeScript versions also improve compiler performance substantially, but sensible project boundaries still matter.

---

# 197. `tsc --showConfig`

Useful troubleshooting command:

```bash
tsc --showConfig
```

It shows the resolved configuration after inheritance/default processing.

Use it when:

- an option seems ignored
- `extends` chains are confusing
- unexpected files are included
- module settings differ across environments

---

# 198. Editor Compiler vs Workspace Compiler

Your editor may use:

```text
its bundled TypeScript
workspace TypeScript
special TypeScript language-server integration
```

Command-line version:

```bash
npx tsc --version
```

If editor diagnostics differ from CI, confirm they are using compatible compiler/language-server versions.

---

# 199. Project References

Large codebases can be divided into dependent TypeScript projects:

```text
packages/
├── domain/
│   └── tsconfig.json
├── api/
│   └── tsconfig.json
└── web/
    └── tsconfig.json
```

Benefits:

- explicit dependency graph
- incremental builds
- clearer package boundaries
- scalable monorepos
- build ordering

---

# 200. `composite`

Referenced projects typically participate using:

```json
{
  "compilerOptions": {
    "composite": true
  }
}
```

This enables the metadata/declaration behavior required for TypeScript build graphs.

---

# 201. Build Mode

```bash
tsc -b
```

Build project references in dependency order.

Other useful commands:

```bash
tsc -b --verbose
tsc -b --clean
```

Prefer build mode over hand-running compilers for each package in random order.

---

# 202. Declaration Files

Library consumers often need `.d.ts` files.

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true
  }
}
```

Possible output:

```text
index.js
index.d.ts
index.d.ts.map
```

Your declaration output is part of your public API.

---

# 203. Declarations Describe Runtime Values

```typescript
declare function calculateTax(amount: number): number;
```

This **describes** a function that must exist at runtime.

It does not implement it.

Similarly:

```typescript
declare const APP_VERSION: string;
```

If `APP_VERSION` does not really exist when the program runs, TypeScript cannot rescue the application.

---

# 204. Ambient Module Declarations

Untyped package:

```typescript
declare module "legacy-sdk" {
  export function connect(url: string): Promise<void>;
}
```

Avoid the emergency declaration:

```typescript
declare module "legacy-sdk";
```

unless necessary, because it gives the module broad `any` behavior.

Accurate declarations preserve safety.

---

# 205. Global Augmentation

Legacy/global runtime behavior may require:

```typescript
declare global {
  interface Window {
    appVersion: string;
  }
}
```

Then:

```typescript
window.appVersion
```

is known to TypeScript.

Use globals sparingly; module imports are generally easier to reason about.

---

# 206. Declaration Merging

```typescript
interface Session {
  userId: string;
}

interface Session {
  role: string;
}
```

The interface merges into a combined declaration.

Type aliases do not work this way.

This makes interfaces useful for library/framework augmentation but means duplicate interface declarations can have broader effects than expected.

---

# 207. Module Augmentation

Suppose authentication middleware adds a user to a third-party request object.

```typescript
declare module "some-http-lib" {
  interface Request {
    user?: AuthenticatedUser;
  }
}
```

Only augment a property if runtime behavior truly supplies it.

Do not teach TypeScript that a value exists when middleware ordering does not guarantee it.

---

# 208. Library Public API Discipline

Every exported type can become part of your public contract.

Avoid exporting every internal helper type.

Benefits of a smaller exported surface:

- easier refactoring
- fewer breaking changes
- simpler documentation
- clearer consumer experience

Use internal advanced type machinery to create a simple public API whenever possible.

---

# 209. Shared Frontend/Backend Types

Benefits:

```text
less duplication
better refactoring
consistent DTO names
stronger client autocomplete
```

Risks:

```text
tight coupling
backend internals leaking to UI
false belief that network data is validated
independent deployment mismatch
```

A shared package should usually expose stable transport contracts/schemas, not raw ORM/database entities.

---

# 210. TypeScript and JSON

JSON preserves:

```text
string
number
boolean
null
arrays
plain objects
```

JSON does not preserve:

```text
Date
Map
Set
BigInt
class prototypes
methods
undefined
symbols
```

So this domain type:

```typescript
interface User {
  createdAt: Date;
}
```

should often have a transport DTO:

```typescript
interface UserResponse {
  createdAt: string;
}
```

Convert intentionally at the boundary.

---

# 211. Class Instances Do Not Materialize from JSON

```typescript
class User {
  constructor(public id: number) {}

  displayName(): string {
    return `User ${this.id}`;
  }
}
```

This is unsafe:

```typescript
const user = await response.json() as User;
user.displayName();
```

The JSON object has no class prototype and therefore no method.

Construct it explicitly:

```typescript
const dto = UserDtoSchema.parse(await response.json());
const user = new User(dto.id);
```

---

# 212. `instanceof` Requires a Runtime Constructor

This is impossible:

```typescript
interface User {
  id: number;
}

// value instanceof User // invalid
```

Interfaces disappear at runtime.

Use:

- class constructors
- discriminant properties
- runtime schemas
- custom type guards

---

# 213. Type Erasure

These constructs normally disappear from emitted JavaScript:

```typescript
interface User {}
type Status = "A" | "B";
function identity<T>(value: T): T { return value; }
```

Ask this whenever designing runtime logic:

```text
Will this thing still exist after TypeScript compilation?
```

If not, it cannot perform runtime checks.

---

# 214. Enums Have Runtime Representation

```typescript
enum Status {
  Pending,
  Done
}
```

Unlike a type alias, a traditional enum creates runtime JavaScript.

Literal union:

```typescript
type Status = "pending" | "done";
```

creates no runtime object.

Modern combined pattern:

```typescript
const Status = {
  Pending: "pending",
  Done: "done"
} as const;

type Status = (typeof Status)[keyof typeof Status];
```

Choose based on whether you need runtime values, compile-time values, or both.

---

# 215. `const enum` Caveats

`const enum` can inline values, but it may create interoperability problems with isolated transpilation and published libraries.

For reusable packages, prefer simpler portable patterns unless you fully understand the build chain.

---

# 216. Decorators

Decorators participate in runtime class/member behavior.

TypeScript's decorator support has evolved alongside JavaScript standardization, while many frameworks historically used older experimental semantics.

Before configuring decorators:

```text
check the framework version
check compiler expectations
check runtime transform behavior
```

Do not copy legacy decorator settings blindly.

---

# 217. Decorator Type Preservation

A method decorator may need to preserve:

```text
parameter types
return type
this type
overloads
```

A naive wrapper can destroy inference.

Application developers normally consume framework decorators; library authors must pay close attention to generic signature preservation.

---

# 218. Explicit Resource Management

Modern JavaScript/TypeScript can model deterministic resource cleanup through resource-management syntax in supported environments.

Conceptually:

```typescript
using resource = openResource();
```

Appropriate for resources that have a disposal lifecycle such as:

- handles
- temporary resources
- locks
- scoped connections

Verify runtime/toolchain support before relying on the feature.

---

# 219. Asynchronous Resource Management

Conceptually:

```typescript
await using resource = await openAsyncResource();
```

This is intended for resources requiring asynchronous disposal.

The core lesson is broader:

```text
TypeScript can type lifecycle protocols,
but the runtime object must actually implement them.
```

---

# 220. Import Attributes

Modern JavaScript uses import attributes in relevant environments.

Concept:

```typescript
import data from "./data.json" with { type: "json" };
```

Compiler and runtime support depend on your module environment.

Legacy import assertion syntax may require migration in modern compiler versions.

---

# 221. TypeScript Depends on JavaScript Knowledge

Advanced TypeScript developers still need strong knowledge of:

- closures
- prototypes
- `this`
- promises
- event loop
- modules
- object mutation
- reference equality
- async behavior
- browser/Node runtimes

TypeScript does not repair weak JavaScript fundamentals.

---

# 222. TypeScript 6 Transition Themes

Modern TypeScript 6 moved the ecosystem toward stricter and more modern defaults while deprecating a range of older assumptions.

Important modernization themes include:

```text
strict behavior by default
modern ECMAScript targets
modern ESM/bundler workflows
less reliance on legacy module modes
more explicit configuration
preparation for TypeScript 7
```

Old enterprise projects should treat major upgrades as planned engineering work.

---

# 223. TypeScript 6 Migration Areas to Review

Older projects may need review around areas such as:

- legacy target values
- old module resolution modes
- old module output modes
- old import assertion syntax
- implicit `types` behavior
- root directory assumptions
- removed/deprecated legacy options
- custom compiler API integrations

Never upgrade a very old compiler and assume a copied historical `tsconfig` is still ideal.

---

# 224. TypeScript 7 Native Compiler

TypeScript 7.0 introduced the native compiler/tooling implementation.

The developer-level impact is primarily:

```text
much faster project loading
much faster type checking
parallelized work
better scalability
faster editor operations
```

The language concepts in this handbook remain the same foundation.

---

# 225. TypeScript 7 Compatibility Considerations

The initial TypeScript 7.0 ecosystem transition is important because some tools historically depended on TypeScript's programmatic compiler/language-service APIs.

Before upgrading a complex stack, verify support for:

- framework template compilers
- language-service plugins
- linters using compiler APIs
- code generators
- custom transforms
- build integrations

A compiler may be stable while a specific framework integration still requires an older compatible version.

---

# 226. Side-by-Side Compiler Thinking

During a major ecosystem migration, different tools may temporarily need different compiler generations.

The key architectural lesson:

```text
Do not assume "TypeScript version" is one isolated dependency.
```

Your stack may include:

```text
tsc
editor language server
framework compiler
ESLint integration
code generation
test transform
bundler integration
```

Verify the whole chain.

---

# 227. TypeScript 7 and Large Repositories

A much faster compiler does not eliminate architectural needs.

Still maintain:

- clear package boundaries
- acyclic dependencies
- sensible project references
- limited public APIs
- controlled generated types
- manageable generic complexity

Performance improvements complement good architecture; they do not replace it.

---

# 228. Production Node `tsconfig` Example

Conceptual starting point:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"]
}
```

Do **not** copy this blindly. Adjust for your Node version, TypeScript version, package module mode, framework, testing stack, and build system.

---

# 229. Bundled Frontend `tsconfig` Example

Conceptual pattern:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

The framework/bundler normally controls actual JavaScript output.

Use framework-generated configuration as the authoritative starting point when one exists.

---

# 230. Shared Base Config in Monorepos

```text
repo/
├── tsconfig.base.json
├── apps/
│   ├── web/
│   └── api/
└── packages/
    ├── domain/
    └── schemas/
```

Shared base:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

Environment-specific packages extend it and add Node/browser/module details.

---

# 231. Avoid Circular Runtime Dependencies

Problem:

```text
user.service
→ invoice.service
→ user.service
```

A type checker may accept some cycles while JavaScript runtime initialization still becomes fragile.

Solutions include:

- extract shared abstractions
- invert dependencies
- use domain events
- split responsibilities
- move common logic into a lower-level module

---

# 232. Type-Only Circular References

When modules only need each other's types:

```typescript
import type { User } from "./User.js";
```

can prevent a runtime dependency from being emitted.

Still, a heavily tangled type graph may signal poor architectural boundaries even if runtime cycles disappear.

---

# 233. Library Package Structure

Example:

```text
src/
├── index.ts
├── public/
│   ├── types.ts
│   └── client.ts
└── internal/
    ├── parser.ts
    └── helpers.ts
```

Only re-export intended public APIs from the package entry point.

Do not let consumers import deep internal implementation files unless that is explicitly supported.

---

# 234. Package Exports and Type Boundaries

Modern packages can define explicit public entry points.

Architecturally, your TypeScript declarations should align with those same public boundaries.

A package should not advertise an internal type path that its runtime package configuration does not actually expose.

---

# 235. Type-Only Packages

Some shared packages contain only contracts/schemas/types.

Example:

```text
@company/contracts
```

Possible exports:

```typescript
export type { UserDto, InvoiceDto };
export { UserSchema, InvoiceSchema };
```

This can work well between frontend/backend systems when deployment/versioning is managed carefully.

---

# 236. TypeScript Declaration Changes Can Be Breaking

Even if runtime JavaScript is unchanged, these can break consumers:

- narrower function parameter
- removed overload
- new required property
- changed generic default
- changed inferred return type
- changed union member

Treat public type declarations as part of semantic versioning.

---

# 237. Generated Types

Types may be generated from:

```text
OpenAPI
GraphQL
protobuf
JSON Schema
database schemas
ORM schemas
RPC definitions
```

Advantages:

- reduced drift
- large contract coverage
- consistent naming

Risks:

- overly complex generated types
- coupling to transport/database details
- generated internals leaking into domain code

Wrap generated models when domain semantics differ.

---

# 238. OpenAPI Pattern

A useful workflow:

```text
OpenAPI specification
→ generated client/types
→ HTTP call
→ runtime checks where required
→ domain mapping
```

Generated TypeScript improves client ergonomics but does not prove that a deployed server is actually returning schema-compliant data.

---

# 239. GraphQL Pattern

GraphQL tooling can generate types for:

- query variables
- query result
- mutations
- fragments

Prefer operation-specific generated types rather than one giant handwritten `User` interface reused everywhere.

Still model GraphQL nullability accurately.

---

# 240. Database-Generated Types

Database tooling may generate row types.

Useful, but remember:

```text
database row
≠ domain entity
≠ API DTO
```

Map where naming, nullability, serialization, or business meaning differs.

---

# 241. Environment Variables

Node environment variables are generally strings or missing values.

Bad:

```typescript
const port = process.env.PORT as unknown as number;
```

This does not convert the runtime string.

Better:

```typescript
const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error("PORT is required");
}

const port = Number(rawPort);

if (!Number.isInteger(port)) {
  throw new Error("PORT must be an integer");
}
```

Best practice: validate the complete environment configuration once at startup.

---

# 242. Typed Configuration Object

```typescript
interface AppConfig {
  environment: "development" | "test" | "production";
  port: number;
  databaseUrl: string;
}

function loadConfig(): AppConfig {
  // parse + validate environment values
  throw new Error("example");
}
```

After startup validation, the rest of the program consumes a trusted `AppConfig` instead of repeatedly touching raw environment variables.

---

# 243. JSON Value Type

```typescript
type JsonPrimitive = string | number | boolean | null;

type JsonValue =
  | JsonPrimitive
  | JsonValue[]
  | { [key: string]: JsonValue };
```

Useful when a function should accept only JSON-compatible data rather than arbitrary `unknown` values.

---

# 244. Serialization Still Has Runtime Limits

Even a JSON-compatible type cannot guarantee every runtime property such as:

- payload size
- numeric constraints
- valid encoding
- semantic correctness
- absence of cycles introduced through unsafe casts

Types capture part of the contract, not every operational invariant.

---

# 245. `Map` vs `Record`

Use `Record` when:

- keys naturally behave like object properties
- JSON serialization matters
- compile-time exhaustive keys are useful

Use `Map` when:

- keys may be objects
- frequent dynamic insertion/deletion matters
- map-specific runtime APIs are useful

Example:

```typescript
const users = new Map<UserId, User>();
```

Choose the runtime data structure first, then type it correctly.

---

# 246. `Set`

```typescript
const permissions = new Set<Permission>();
```

Good for:

- uniqueness
- membership checks

But a `Set<Permission>` does not guarantee that every permission exists.

For exhaustive compile-time configuration, a `Record` may be more appropriate.

---

# 247. `Object.keys` Is Intentionally Broad

```typescript
const user = {
  id: 1,
  name: "Alice"
};
```

Developers sometimes expect `Object.keys(user)` to be typed exactly as:

```text
("id" | "name")[]
```

But ordinary JavaScript objects may contain runtime properties beyond their statically visible type, so standard typings stay conservative.

Avoid unsafe `keyof` assertions unless you control the object shape strongly enough to justify them.

---

# 248. `Object.entries` and Key/Value Relationships

General `Object.entries()` cannot always preserve the exact relationship between each key and its specific property type.

If exact iteration matters, consider a controlled key source:

```typescript
const roles = ["admin", "manager", "user"] as const;

for (const role of roles) {
  console.log(role);
}
```

Do not fight conservative standard-library types until you understand the runtime reason behind them.

---

# 249. Debugging Complex Compiler Errors

Use this process:

```text
1. Find the destination/expected type.
2. Find the actual/source type.
3. Compare outer structure first.
4. Inspect generic parameters.
5. Name intermediate types.
6. Reduce to a minimal example.
7. Add explicit types where inference is ambiguous.
```

Complex errors become manageable when decomposed into smaller assignability questions.

---

# 250. Minimal Reproductions

Reduce a large framework error to something like:

```typescript
type A = ...;
type B = ...;
const value: B = somethingOfTypeA;
```

A minimal reproduction helps determine whether the real problem is:

- your model
- TypeScript behavior
- framework declarations
- module configuration
- version incompatibility

This is one of the highest-value debugging habits for advanced TypeScript developers.


# Part IV — Production Architecture and Real-World Modeling

# 251. Trust Boundaries

A trust boundary is any place where data enters your trusted application model from an uncertain runtime source.

Common examples:

```text
HTTP request
HTTP response
database JSON column
file input
message queue
local storage
cookies
webhooks
CLI arguments
environment variables
third-party SDKs
```

Recommended pattern:

```text
unknown runtime data
→ runtime validation
→ typed DTO
→ domain mapping
→ business logic
```

A powerful TypeScript rule is:

```text
Unknown outside. Trusted types inside.
```

---

# 252. Runtime Schema + Static Type

Conceptual schema-first pattern:

```typescript
const UserSchema = schema.object({
  id: schema.number(),
  name: schema.string()
});

type User = Infer<typeof UserSchema>;
```

Benefits:

- one source of truth
- runtime validation
- compile-time inference
- less drift between validator and type

Use an established validation library in real applications rather than inventing a large home-grown schema system.

---

# 253. DTO vs Domain Model vs Database Row

Database row:

```typescript
interface UserRow {
  user_id: number;
  user_name: string;
  created_at: Date;
}
```

Domain model:

```typescript
interface User {
  id: number;
  name: string;
  createdAt: Date;
}
```

API response:

```typescript
interface UserResponse {
  id: number;
  name: string;
  createdAt: string;
}
```

Mapper:

```typescript
function rowToDomain(row: UserRow): User {
  return {
    id: row.user_id,
    name: row.user_name,
    createdAt: row.created_at
  };
}
```

The three models may look similar, but they represent different contracts and responsibilities.

---

# 254. Create and Update DTOs

Avoid this:

```typescript
interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  createdAt?: string;
}
```

Everything becomes uncertain.

Use separate contracts:

```typescript
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserRequest {
  name?: string;
  email?: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}
```

Types should describe a specific operation, not just a table.

---

# 255. `Partial<T>` Is Not Automatically a Correct PATCH Model

```typescript
type UpdateUser = Partial<User>;
```

This may accidentally allow updates to:

- `id`
- `createdAt`
- server-owned flags
- security-sensitive properties

Better:

```typescript
interface UpdateUserRequest {
  displayName?: string;
  phone?: string | null;
}
```

Use `Partial` when the business semantics genuinely match “any field may be omitted,” not merely because it is convenient.

---

# 256. Repository Pattern in Depth

```typescript
interface UserRepository {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
```

Database adapter:

```typescript
class SqlUserRepository implements UserRepository {
  async findById(id: UserId): Promise<User | null> {
    // query DB and map row
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return null;
  }

  async save(user: User): Promise<void> {
    // persist mapped data
  }
}
```

The repository should expose domain-relevant operations rather than leaking SQL concepts everywhere.

---

# 257. Generic Repositories — Use With Judgment

Generic abstraction:

```typescript
interface Repository<Entity, Id> {
  findById(id: Id): Promise<Entity | null>;
  save(entity: Entity): Promise<Entity>;
}
```

Useful when many entities truly share the same behavior.

But avoid forcing every repository to implement meaningless methods such as:

```text
findAll()
delete()
update()
paginate()
```

Domain-specific repository methods are often better:

```typescript
interface InvoiceRepository {
  findPendingForApprover(approverId: UserId): Promise<Invoice[]>;
}
```

---

# 258. Service Layer

```typescript
class InvoiceService {
  constructor(
    private readonly repository: InvoiceRepository,
    private readonly audit: AuditLogger
  ) {}

  async approve(command: ApproveInvoiceCommand): Promise<ApproveResult> {
    // business rules
    // repository access
    // audit event
    throw new Error("example");
  }
}
```

A service layer keeps business behavior out of:

- HTTP controllers
- UI components
- ORM models
- route definitions

---

# 259. Functional Service Design

Classes are optional.

```typescript
interface Dependencies {
  repository: InvoiceRepository;
  now: () => Date;
}

function createInvoiceService(deps: Dependencies) {
  return {
    async approve(id: InvoiceId): Promise<void> {
      const now = deps.now();
      console.log(id, now);
    }
  };
}
```

Benefits:

- explicit dependencies
- simple composition
- easy testing
- no inheritance requirements

TypeScript supports object-oriented and functional architecture equally well.

---

# 260. Dependency Inversion

Business logic should depend on abstractions it needs, not on specific infrastructure.

```typescript
interface EmailSender {
  send(to: string, subject: string): Promise<void>;
}

class UserService {
  constructor(private readonly email: EmailSender) {}
}
```

Production can use one implementation; tests can use a fake implementation.

This is where TypeScript interfaces become architectural tools, not just object annotations.

---

# 261. Error Classes for Exceptional Failures

```typescript
class NotFoundError extends Error {
  constructor(
    public readonly resource: string,
    public readonly id: string
  ) {
    super(`${resource} ${id} not found`);
  }
}
```

Useful for:

- infrastructure failures
- framework error mapping
- exceptional conditions

Catch safely:

```typescript
try {
  await service.load(id);
} catch (error) {
  if (error instanceof NotFoundError) {
    // map to 404
  }
}
```

---

# 262. Result Types for Expected Business Failure

```typescript
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };
```

Example:

```typescript
type ApproveError =
  | "NOT_FOUND"
  | "NOT_AUTHORIZED"
  | "INVALID_STATE";

async function approveInvoice(
  id: InvoiceId
): Promise<Result<ApprovedInvoice, ApproveError>> {
  throw new Error("example");
}
```

Expected failures become explicit in the function contract.

---

# 263. Exceptions vs Results

A useful guideline:

Use exceptions for:

```text
database unavailable
network infrastructure failure
programming invariant violation
unexpected framework error
```

Use `Result`-style values for:

```text
validation rejected
duplicate resource
payment declined
not authorized
workflow transition denied
```

The exact architecture depends on your application, but separate expected business outcomes from unexpected failures.

---

# 264. Controller → Service → Repository Flow

```text
HTTP request
    ↓
runtime validation
    ↓
request DTO
    ↓
controller
    ↓
service/domain rules
    ↓
repository
    ↓
database
```

Response direction:

```text
database row
    ↓
domain model
    ↓
response mapper
    ↓
response DTO
    ↓
HTTP JSON
```

Each boundary should have a clear type contract.

---

# 265. API Boundary Recipe

```typescript
async function createUserHandler(request: HttpRequest): Promise<HttpResponse> {
  const raw: unknown = request.body;

  const parsed = CreateUserSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: 400,
      body: { error: "INVALID_REQUEST" }
    };
  }

  const result = await userService.create(parsed.data);

  // map domain result to transport response
  throw new Error("example");
}
```

Key principle:

```text
The controller accepts runtime uncertainty.
The service should receive trusted typed input.
```

---

# 266. External API Boundary

```typescript
async function loadExchangeRates(): Promise<ExchangeRates> {
  const response = await fetch(EXTERNAL_URL);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const raw: unknown = await response.json();
  return ExchangeRatesSchema.parse(raw);
}
```

Do not trust a third-party API simply because its documentation says the payload has a certain shape.

---

# 267. Database Boundary

```typescript
async function findUser(id: UserId): Promise<User | null> {
  const row: UserRow | undefined = await db.find(id);

  if (!row) {
    return null;
  }

  return rowToDomain(row);
}
```

Keep database naming and driver-specific values at the repository boundary.

---

# 268. SQL Typing Is Not SQL Validation

This may look safe:

```typescript
const rows = await query<UserRow>(sql);
```

But the generic type may simply be your claim to the database library.

The SQL could still return:

- wrong aliases
- unexpected nulls
- missing columns
- strings instead of expected numbers

Stronger options include generated schema types, typed query builders, explicit mapping, and runtime validation for critical boundaries.

---

# 269. Dates Across Layers

Database driver may return:

```typescript
Date
```

Another driver may return:

```typescript
string
```

HTTP JSON sends a date as text.

Therefore use deliberate mapping:

```typescript
interface UserDto {
  createdAt: string;
}

interface User {
  createdAt: Date;
}
```

Do not pretend one type represents every layer.

---

# 270. Money Modeling

Floating-point arithmetic may be unsuitable for financial amounts requiring exact decimal semantics.

One model:

```typescript
interface Money {
  minorUnits: bigint;
  currency: "INR" | "USD" | "EUR";
}
```

Example:

```text
₹123.45
→ 12345 paise
```

Another option is a tested decimal/money library.

TypeScript can prevent mixing currency types, but correct arithmetic remains a runtime/domain concern.

---

# 271. Typed Pagination

Page-number model:

```typescript
interface Page<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
```

Cursor model:

```typescript
interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
}
```

Do not force both pagination strategies into one confused interface.

---

# 272. Typed Filters

```typescript
interface UserFilter {
  status?: "active" | "inactive";
  departmentId?: number;
  joinedAfter?: string;
}
```

Typed sort:

```typescript
type SortDirection = "asc" | "desc";

interface Sort<Field extends string> {
  field: Field;
  direction: SortDirection;
}

type UserSort = Sort<"name" | "createdAt">;
```

Unsupported sort fields are rejected before runtime.

---

# 273. Typed Cache

```typescript
interface Cache<T> {
  get(key: string): Promise<T | null>;
  set(key: string, value: T, ttlSeconds: number): Promise<void>;
}
```

If cache values are serialized, remember that cached data may have been written by another process or older application version.

For critical caches, validate deserialized values.

---

# 274. Typed Message Queues

```typescript
interface MessageMap {
  invoiceApproved: {
    invoiceId: InvoiceId;
  };

  employeeCreated: {
    employeeId: UserId;
  };
}

function publish<K extends keyof MessageMap>(
  topic: K,
  payload: MessageMap[K]
): Promise<void> {
  return Promise.resolve();
}
```

Producer typing is useful, but consumers receive runtime bytes/JSON.

Consumer flow:

```text
message
→ parse
→ validate
→ typed event
→ handler
```

---

# 275. Typed Background Jobs

```typescript
interface JobMap {
  sendInvoiceEmail: {
    invoiceId: InvoiceId;
  };

  generateReport: {
    reportDate: string;
  };
}

function enqueue<K extends keyof JobMap>(
  name: K,
  payload: JobMap[K]
): Promise<void> {
  return Promise.resolve();
}
```

Again, workers should validate deserialized job data when process/version boundaries exist.

---

# 276. Command vs Event

Command:

```text
Please do something.
```

Example:

```text
ApproveInvoice
```

Event:

```text
Something already happened.
```

Example:

```text
InvoiceApproved
```

Model them separately.

```typescript
type Command =
  | { type: "ApproveInvoice"; invoiceId: InvoiceId }
  | { type: "CreateUser"; input: CreateUserRequest };
```

```typescript
type Event =
  | { type: "InvoiceApproved"; invoiceId: InvoiceId; at: string }
  | { type: "UserCreated"; userId: UserId; at: string };
```

---

# 277. Audit Event Modeling

```typescript
type AuditEvent =
  | {
      type: "invoice.approved";
      invoiceId: InvoiceId;
      actorId: UserId;
      at: string;
    }
  | {
      type: "invoice.rejected";
      invoiceId: InvoiceId;
      actorId: UserId;
      reason: string;
      at: string;
    };
```

This ensures each event includes the information relevant to that event type.

---

# 278. Structured Logging

```typescript
interface LogContext {
  requestId?: string;
  userId?: UserId;
  invoiceId?: InvoiceId;
}
```

```typescript
logger.info("Invoice approved", {
  requestId,
  invoiceId
});
```

Structured typing improves log consistency.

It does not prevent developers from logging secrets; security policy is still required.

---

# 279. Webhook Handling

Unsafe:

```typescript
const event = req.body as WebhookEvent;
```

Better process:

```text
1. verify signature
2. parse body
3. validate schema
4. narrow event
5. enforce idempotency
6. process
```

TypeScript only helps after trustworthy runtime verification.

---

# 280. Third-Party SDK Adapter

Instead of leaking external SDK types through the whole application:

```typescript
interface PaymentGateway {
  charge(request: ChargeRequest): Promise<Result<ChargeSuccess, ChargeFailure>>;
}
```

Create an adapter that translates between the third-party SDK and your domain interface.

Benefits:

- stable domain API
- easier testing
- easier vendor replacement
- less dependency-specific typing in business logic

---

# 281. Avoid Framework Types in Domain Services

Bad:

```typescript
function approveInvoice(req: Express.Request, res: Express.Response): void {
  // business logic mixed with HTTP
}
```

Better:

```typescript
function approveInvoice(
  command: ApproveInvoiceCommand
): Promise<Result<ApprovedInvoice, ApproveError>> {
  // domain logic
}
```

Controller translates HTTP into the command and maps the result back to HTTP.

---

# 282. React Props — Model Valid Combinations

Weak:

```typescript
interface ButtonProps {
  href?: string;
  onClick?: () => void;
}
```

Could allow both or neither.

Better:

```typescript
type ButtonProps =
  | { kind: "link"; href: string }
  | { kind: "button"; onClick: () => void };
```

Component variants are excellent use cases for discriminated unions.

---

# 283. React State — Avoid Boolean Explosion

Weak:

```typescript
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<User[] | null>(null);
```

Better:

```typescript
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };
```

One state value makes contradictory combinations impossible.

---

# 284. React Event Typing

```typescript
function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
  console.log(event.target.value);
}
```

Prefer the framework-provided event types rather than `any` or browser-event guesses when working inside React's event system.

---

# 285. Angular HTTP Typing Is Not Runtime Validation

```typescript
this.http.get<UserDto[]>("/api/users");
```

The generic parameter tells TypeScript what you expect.

It does **not** inspect the network payload.

For unreliable or security-critical boundaries, add runtime validation.

---

# 286. Angular Model Separation

Avoid one interface containing:

```text
backend response fields
form values
UI flags
business methods
validation errors
```

Separate when needed:

```text
UserDto
User domain model
UserFormValue
UserViewModel
```

This reduces coupling between UI, transport, and business logic.

---

# 287. Node/Express Request Bodies

Typing a request body does not prevent a client from sending invalid JSON.

```typescript
interface CreateUserBody {
  name: string;
  email: string;
}
```

A malicious or buggy client may send:

```json
{
  "name": 123,
  "email": null
}
```

Therefore:

```text
request type + runtime validator
```

are separate responsibilities.

---

# 288. Form State Often Differs from Domain State

HTML inputs contain text while editing.

Domain:

```typescript
interface Employee {
  salary: number;
}
```

Form:

```typescript
interface EmployeeForm {
  salary: string;
}
```

This is more honest than pretending every partially typed input is already a valid number.

Validate and convert on submission.

---

# 289. Typed Form Errors

```typescript
type FieldErrors<T> = Partial<Record<keyof T, string>>;

const errors: FieldErrors<EmployeeForm> = {
  salary: "Salary must be a positive number"
};
```

Good for simple flat forms.

Complex nested forms may need richer nested error structures.

---

# 290. Permissions

```typescript
type Permission =
  | "invoice.read"
  | "invoice.approve"
  | "invoice.post"
  | "user.manage";

type Role = "USER" | "MANAGER" | "FINANCE" | "ADMIN";

const permissions = {
  USER: ["invoice.read"],
  MANAGER: ["invoice.read", "invoice.approve"],
  FINANCE: ["invoice.read", "invoice.approve", "invoice.post"],
  ADMIN: ["invoice.read", "invoice.approve", "invoice.post", "user.manage"]
} satisfies Record<Role, readonly Permission[]>;
```

This is a strong compile-time configuration.

Authorization must still be enforced on the trusted server at runtime.

---

# 291. Feature Flags

```typescript
const featureNames = [
  "newDashboard",
  "advancedSearch",
  "betaWorkflow"
] as const;

type Feature = (typeof featureNames)[number];

type FeatureFlags = Record<Feature, boolean>;
```

When a new feature is added, the compiler can force configuration to consider it.

---

# 292. Typed Translation Keys

```typescript
type TranslationKey =
  | "login.title"
  | "login.submit"
  | "invoice.approved";

function t(key: TranslationKey): string {
  return key;
}
```

For large systems, generate these keys from translation resources instead of manually maintaining thousands of literals.

---

# 293. Typed Routes

```typescript
type AppRoute =
  | { name: "dashboard"; params: {} }
  | { name: "user"; params: { id: UserId } }
  | { name: "invoice"; params: { id: InvoiceId } };
```

A router helper can tie route names to required parameters and reject missing/wrong IDs.

---

# 294. Security — Types Are Not Authorization

Frontend code can define:

```typescript
type Role = "admin" | "user";
```

but users can manipulate requests outside your frontend.

Never rely on client-side TypeScript for:

- admin privileges
- record ownership
- invoice approval authority
- payment permissions
- hidden-field security

Authorization must be checked in a trusted runtime.

---

# 295. Security — Never Trust Cast JSON

Dangerous:

```typescript
const command = JSON.parse(text) as AdminCommand;
```

Safer:

```typescript
const raw: unknown = JSON.parse(text);
const command = AdminCommandSchema.parse(raw);
```

All external data is untrusted until validated.

---

# 296. Security — Dynamic Keys

A type like:

```typescript
Record<string, unknown>
```

allows arbitrary property names at the type level.

Do not blindly merge untrusted dictionaries into security-sensitive objects.

Validate allowed keys and use safe runtime object-handling patterns.

TypeScript does not prevent prototype-pollution-style logic bugs by itself.

---

# 297. Security — Secret Types Do Not Hide Secrets

```typescript
type Password = string;
```

This does not stop:

```typescript
console.log(password);
```

Secret handling still requires:

- logging/redaction policy
- secure configuration
- secret managers
- least privilege
- code review

---

# 298. Runtime Performance

Most type annotations disappear.

```typescript
interface User {
  id: number;
}
```

has no direct runtime cost.

Runtime performance depends on JavaScript behavior:

- algorithm complexity
- network latency
- database queries
- rendering
- memory allocations
- serialization

TypeScript is primarily a correctness/tooling layer, not a runtime optimizer.

---

# 299. Type-Checker Performance

Very complex types can affect compiler/editor performance.

Potentially expensive patterns:

- huge unions
- deep recursive conditional types
- repeated large mapped types
- generated declaration explosions
- deeply nested generic inference

Symptoms:

```text
slow hover
slow autocomplete
slow CI type checks
high memory usage
```

Simplify public types and measure before optimizing blindly.

---

# 300. Type Complexity Budget

Before introducing a highly advanced type, ask:

```text
Does it prevent a real bug?
Does it improve caller inference?
Will teammates understand it?
Are diagnostics readable?
Is editor performance acceptable?
Could a simpler API solve the same problem?
```

The cleverest type is not automatically the best engineering choice.

---

# 301. Runtime Testing Still Matters

TypeScript can catch:

```text
wrong property name
wrong parameter type
unhandled union member
nullable misuse
```

It cannot prove:

```text
tax formula is correct
SQL returns expected business data
permissions are correct
network works
UI looks right
database is available
```

Keep unit, integration, and end-to-end tests.

---

# 302. Test Layers

Useful layers:

```text
static type check
unit tests
integration tests
contract tests
end-to-end tests
```

Each catches a different failure class.

Do not treat `tsc` as a replacement for tests.

---

# 303. Contract Testing

Shared frontend/backend TypeScript types can still drift from a deployed service.

Contract tests verify that producer output matches consumer expectations.

Especially valuable for:

- microservices
- independent frontend/backend deployments
- message queues
- external webhooks

---

# 304. Testing Validators

A runtime schema protecting a boundary should be tested.

Test cases:

```text
valid payload
missing field
wrong primitive type
null where forbidden
invalid enum
bad nested array
unexpected value range
malformed date
```

Validation code is real executable behavior.

---

# 305. Type-Level Tests

Public generic libraries may need tests that assert types, not runtime values.

Typical goals:

```text
expression should infer as X
invalid call should fail compilation
specific overload should be selected
```

Use established type-testing tooling for serious library work.

---

# 306. `@ts-expect-error`

Useful when a test intentionally expects a type error:

```typescript
// @ts-expect-error - user ID must not be a number
loadUser(123);
```

It is safer than a permanent blind suppression because TypeScript can report when the expected error no longer occurs.

---

# 307. `@ts-ignore`

```typescript
// @ts-ignore
problematicCode();
```

Suppresses the next error.

Use rarely because the original error may disappear while the comment later hides a completely different problem.

Prefer fixing the type, narrowing, improving declarations, or using a justified `@ts-expect-error`.

---

# 308. Linting Complements Type Checking

TypeScript asks:

```text
Is the code type-correct?
```

A linter can ask:

```text
Is this pattern suspicious or against project policy?
```

Examples:

- unhandled promises
- unnecessary assertions
- unsafe async patterns
- suspicious conditions

Use type-aware lint rules where their benefit justifies added analysis cost.

---

# 309. Formatting Is a Separate Concern

Common division of responsibilities:

```text
TypeScript → types
ESLint → code-quality rules
Prettier → formatting
Tests → runtime behavior
```

Avoid turning the type checker into a formatter or the linter into a type system.

---

# 310. JavaScript-to-TypeScript Migration Strategy

A practical gradual sequence:

```text
1. add TypeScript tooling
2. allow JavaScript temporarily
3. type-check JS where practical
4. convert low-dependency modules first
5. type external boundaries
6. eliminate implicit any
7. enable stricter options incrementally
8. replace unsafe assertions
9. add runtime validators
10. strengthen domain types
```

Avoid changing every file, build tool, module mode, and strictness setting simultaneously in a large legacy system unless you have strong test coverage and a migration plan.

---

# 311. `allowJs` and `checkJs`

Gradual migration may use:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

JSDoc can provide useful typing before a file becomes `.ts`.

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

---

# 312. Refactoring `any`

Classify each `any`:

```text
external JSON
third-party library
legacy dynamic object
generic helper
framework escape hatch
unknown callback
```

Then replace with the appropriate tool:

```text
unknown
specific interface
union
generic parameter
Record<string, unknown>
runtime schema
declaration file
```

Do not replace every `any` with `unknown` mechanically; understand the data flow.

---

# 313. Avoid the “Make the Compiler Shut Up” Migration

Dangerous pattern:

```text
add any
add as
add !
add ts-ignore
repeat until build passes
```

This creates JavaScript with decorative types rather than meaningful safety.

Better approach:

```text
model uncertainty honestly
validate external data
narrow values
add explicit boundary types
use escape hatches only at controlled edges
```

---

# 314. TypeScript Error Messages Are Part of API Design

A public generic API may be technically correct but unpleasant if failures produce pages of conditional-type diagnostics.

Good library design balances:

```text
strong inference
correctness
readable diagnostics
editor performance
```

Often complex internals should be hidden behind a simpler exported signature.

---

# 315. Debugging with Intermediate Type Aliases

Instead of inspecting:

```typescript
type Complex = SomeGeneric<AnotherGeneric<Conditional<X>>>;
```

split it:

```typescript
type Step1 = Conditional<X>;
type Step2 = AnotherGeneric<Step1>;
type Complex = SomeGeneric<Step2>;
```

Editor hovers and errors become easier to understand.

---

# 316. Public vs Internal Types

Public:

```typescript
export interface CreateInvoiceRequest {
  // stable contract
}
```

Internal:

```typescript
type NormalizedInvoiceInput = {
  // implementation detail
};
```

Do not export internal types “just in case.”

A smaller public API is easier to maintain.

---

# 317. Semantic Types Beat Primitive Obsession

Weak:

```typescript
function approveInvoice(
  invoiceId: string,
  approverId: string,
  amount: number
): void {}
```

Stronger:

```typescript
function approveInvoice(
  invoiceId: InvoiceId,
  approverId: UserId,
  amount: Money
): void {}
```

Semantic types document meaning and can prevent argument mixing.

---

# 318. Avoid Boolean Parameter Ambiguity

Weak:

```typescript
generateReport(true, false);
```

Better:

```typescript
generateReport({
  includeInactive: true,
  includeDetails: false
});
```

```typescript
interface ReportOptions {
  includeInactive: boolean;
  includeDetails: boolean;
}
```

Object parameters are self-documenting and easier to extend.

---

# 319. External Enum Evolution

Closed union:

```typescript
type Status = "pending" | "done";
```

is excellent when the contract is truly closed.

If an external API may add values without notice, your runtime parser must decide what to do with unknown future values.

Strategies include:

- reject unknown values
- map them to `unknown`
- preserve raw string separately
- version the API contract

Do not pretend an unstable external enum is permanently closed.

---

# 320. API Versioning with Types

```typescript
interface UserV1 {
  id: number;
  name: string;
}

interface UserV2 {
  id: number;
  displayName: string;
  status: "active" | "inactive";
}
```

When older consumers still exist, explicit versioned contracts are safer than mutating one shared interface and hoping every client upgrades simultaneously.

