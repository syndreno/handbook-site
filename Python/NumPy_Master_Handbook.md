# NumPy Master Handbook
## Beginner → Intermediate → Advanced → Real-World Mastery

> **Purpose:** A single-file learning handbook for NumPy that can be used as a tutorial, reference, revision guide, interview-preparation resource, and practical cookbook.
>
> **Target:** Complete beginners as well as Python developers who want a strong numerical-computing foundation.
>
> **Documentation baseline:** NumPy 2.5-era APIs and practices.
>
> **Core idea:** Do not memorize hundreds of functions. Learn the mental model of **arrays + shape + dtype + axes + vectorized operations + broadcasting**. Most NumPy problems become much easier once these are clear.

---

# Table of Contents

1. [What Is NumPy?](#1-what-is-numpy)
2. [Why NumPy Instead of Python Lists?](#2-why-numpy-instead-of-python-lists)
3. [Installation and Setup](#3-installation-and-setup)
4. [The ndarray Mental Model](#4-the-ndarray-mental-model)
5. [Creating Arrays](#5-creating-arrays)
6. [Array Attributes](#6-array-attributes)
7. [Data Types — dtype](#7-data-types--dtype)
8. [Indexing and Slicing](#8-indexing-and-slicing)
9. [Boolean Indexing and Filtering](#9-boolean-indexing-and-filtering)
10. [Fancy / Advanced Indexing](#10-fancy--advanced-indexing)
11. [Changing Shape](#11-changing-shape)
12. [Adding and Removing Dimensions](#12-adding-and-removing-dimensions)
13. [Joining and Splitting Arrays](#13-joining-and-splitting-arrays)
14. [Copies vs Views](#14-copies-vs-views)
15. [Arithmetic and Element-Wise Operations](#15-arithmetic-and-element-wise-operations)
16. [Universal Functions — ufuncs](#16-universal-functions--ufuncs)
17. [Broadcasting](#17-broadcasting)
18. [Aggregation and the Axis Concept](#18-aggregation-and-the-axis-concept)
19. [Min, Max, Argmin, Argmax and Related Operations](#19-min-max-argmin-argmax-and-related-operations)
20. [Comparison and Logical Operations](#20-comparison-and-logical-operations)
21. [Conditional Selection](#21-conditional-selection)
22. [Sorting, Searching and Ranking](#22-sorting-searching-and-ranking)
23. [Unique Values and Set Operations](#23-unique-values-and-set-operations)
24. [Handling NaN and Infinity](#24-handling-nan-and-infinity)
25. [Rounding, Clipping and Numeric Utilities](#25-rounding-clipping-and-numeric-utilities)
26. [Random Number Generation](#26-random-number-generation)
27. [Statistics with NumPy](#27-statistics-with-numpy)
28. [Linear Algebra](#28-linear-algebra)
29. [Matrix Multiplication in Depth](#29-matrix-multiplication-in-depth)
30. [Advanced Tensor Operations](#30-advanced-tensor-operations)
31. [Coordinate Grids and meshgrid](#31-coordinate-grids-and-meshgrid)
32. [Polynomial Operations](#32-polynomial-operations)
33. [Fourier Transform Basics](#33-fourier-transform-basics)
34. [Date and Time Arrays](#34-date-and-time-arrays)
35. [Strings and Character Data](#35-strings-and-character-data)
36. [Structured Arrays](#36-structured-arrays)
37. [Masked Arrays](#37-masked-arrays)
38. [File Input and Output](#38-file-input-and-output)
39. [Iteration](#39-iteration)
40. [Memory Layout, Strides and Contiguity](#40-memory-layout-strides-and-contiguity)
41. [Performance and Vectorization](#41-performance-and-vectorization)
42. [Memory Optimization](#42-memory-optimization)
43. [Common Performance Anti-Patterns](#43-common-performance-anti-patterns)
44. [Interoperability with Pandas, SciPy and Matplotlib](#44-interoperability-with-pandas-scipy-and-matplotlib)
45. [Typing, Validation and Testing](#45-typing-validation-and-testing)
46. [NumPy 2.x Awareness and Migration Tips](#46-numpy-2x-awareness-and-migration-tips)
47. [Common Errors and Troubleshooting](#47-common-errors-and-troubleshooting)
48. [Real-World Scenario Cookbook](#48-real-world-scenario-cookbook)
49. [Mini Projects](#49-mini-projects)
50. [Practice Exercises](#50-practice-exercises)
51. [Interview Questions](#51-interview-questions)
52. [Cheat Sheet](#52-cheat-sheet)
53. [Glossary](#53-glossary)
54. [Recommended Learning Roadmap](#54-recommended-learning-roadmap)
55. [Final Mastery Checklist](#55-final-mastery-checklist)

---

# 1. What Is NumPy?

**NumPy** stands for **Numerical Python**.

It is the foundational Python library for efficient numerical computing. Its main object is the **N-dimensional array**, called `ndarray`.

NumPy is commonly used for:

- numerical calculations
- large arrays and matrices
- statistics
- linear algebra
- signal and image processing
- simulations
- machine learning preprocessing
- scientific computing
- financial calculations
- time-series manipulation
- data transformation
- geometry and engineering calculations

The conventional import is:

```python
import numpy as np
```

You will see `np` in almost every Python project using NumPy.

## First example

```python
import numpy as np

prices = np.array([100, 150, 200, 250])

discounted = prices * 0.90

print(discounted)
```

Output:

```text
[ 90. 135. 180. 225.]
```

Instead of manually looping through each price, NumPy applies the operation to the entire array.

---

# 2. Why NumPy Instead of Python Lists?

Python lists are excellent general-purpose containers.

NumPy arrays are specialized for numerical data.

## Python list

```python
numbers = [1, 2, 3, 4]
```

## NumPy array

```python
numbers = np.array([1, 2, 3, 4])
```

## Important differences

| Feature | Python List | NumPy Array |
|---|---|---|
| Mixed data types | Yes | Usually one dtype |
| Fast numeric operations | Limited | Excellent |
| Vectorized operations | No | Yes |
| Broadcasting | No | Yes |
| Multidimensional support | Nested lists | Native |
| Memory efficiency | Lower for large numeric data | Usually higher |
| Linear algebra | Manual/external | Built in |
| Scientific ecosystem | Limited | Core foundation |

## A common beginner surprise

Python:

```python
[1, 2, 3] * 2
```

gives:

```text
[1, 2, 3, 1, 2, 3]
```

NumPy:

```python
np.array([1, 2, 3]) * 2
```

gives:

```text
[2 4 6]
```

That difference demonstrates the core idea of **vectorized numeric operations**.

---

# 3. Installation and Setup

Install NumPy:

```bash
python -m pip install numpy
```

Upgrade:

```bash
python -m pip install --upgrade numpy
```

Check the installed version:

```python
import numpy as np

print(np.__version__)
```

## Recommended project setup

Create a virtual environment:

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

Install:

```bash
pip install numpy
```

## Quick environment test

```python
import numpy as np

a = np.array([1, 2, 3])

print(a)
print(a.mean())
```

If this runs, your basic NumPy environment is ready.

---

# 4. The ndarray Mental Model

The most important NumPy concept is:

```text
ndarray = data + shape + dtype + strides/metadata
```

An array is not just a list of values.

You should always ask:

1. What is the **shape**?
2. What is the **dtype**?
3. Which **axis** am I operating on?
4. Will this operation return a **view** or a **copy**?
5. Can broadcasting perform the operation without a Python loop?

## 1D array

```python
a = np.array([10, 20, 30])
```

Shape:

```text
(3,)
```

Think:

```text
3 elements
```

## 2D array

```python
a = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
```

Shape:

```text
(2, 3)
```

Think:

```text
2 rows
3 columns
```

## 3D array

```python
a = np.zeros((2, 3, 4))
```

Shape:

```text
(2, 3, 4)
```

A useful mental picture is:

```text
2 blocks
  each block has 3 rows
    each row has 4 values
```

## Dimensions

```python
scalar -> 0D
vector -> 1D
matrix -> 2D
tensor -> 3D+
```

NumPy itself uses the general term **array**, even when the data has many dimensions.

---

# 5. Creating Arrays

## 5.1 From Python lists

```python
a = np.array([1, 2, 3])
```

2D:

```python
matrix = np.array([
    [1, 2],
    [3, 4]
])
```

## 5.2 Explicit dtype

```python
a = np.array([1, 2, 3], dtype=np.float64)
```

## 5.3 zeros

```python
a = np.zeros(5)
```

2D:

```python
a = np.zeros((3, 4))
```

Use case: initialize an accumulator, image buffer, simulation state, or results matrix.

## 5.4 ones

```python
a = np.ones((2, 3))
```

Use case: initialize weights, masks, coefficients.

## 5.5 full

```python
a = np.full((3, 3), 7)
```

Use case: create an array with a default sentinel or constant.

## 5.6 empty

```python
a = np.empty((2, 3))
```

`empty()` allocates memory without initializing every value.

Do **not** assume it contains zeros.

Use it only when you will immediately overwrite all elements.

## 5.7 arange

```python
a = np.arange(0, 10, 2)
```

Result:

```text
[0 2 4 6 8]
```

Syntax:

```python
np.arange(start, stop, step)
```

For floating-point ranges, `linspace()` is often easier to reason about.

## 5.8 linspace

```python
a = np.linspace(0, 1, 5)
```

Result conceptually:

```text
[0.00, 0.25, 0.50, 0.75, 1.00]
```

`linspace(start, stop, num)` means:

> Give me exactly `num` evenly spaced samples.

Useful for plotting, simulations, interpolation, numerical analysis, and signal generation.

## 5.9 logspace

```python
a = np.logspace(0, 3, 4)
```

Produces values logarithmically spaced between powers.

Useful for:

- logarithmic charts
- frequency ranges
- hyperparameter search
- engineering scale analysis

## 5.10 identity / eye

```python
identity = np.eye(3)
```

Result:

```text
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

Use case: linear algebra.

## 5.11 diag

```python
a = np.diag([10, 20, 30])
```

Extract a diagonal:

```python
matrix = np.array([
    [1, 2],
    [3, 4]
])

print(np.diag(matrix))
```

## 5.12 zeros_like / ones_like / full_like

```python
source = np.array([[1, 2], [3, 4]])

z = np.zeros_like(source)
o = np.ones_like(source)
f = np.full_like(source, 9)
```

These preserve shape and usually dtype.

## 5.13 From iterables

```python
a = np.fromiter(range(5), dtype=np.int64)
```

## 5.14 From buffers

Advanced applications can construct arrays using a raw memory buffer:

```python
data = b"\x01\x02\x03\x04"
a = np.frombuffer(data, dtype=np.uint8)
```

Useful in:

- binary protocols
- image/audio buffers
- networking
- file formats
- high-performance integration

---

# 6. Array Attributes

Create:

```python
a = np.array([
    [10, 20, 30],
    [40, 50, 60]
])
```

## shape

```python
a.shape
```

Result:

```text
(2, 3)
```

## ndim

```python
a.ndim
```

Result:

```text
2
```

## size

```python
a.size
```

Result:

```text
6
```

## dtype

```python
a.dtype
```

Represents the element data type.

## itemsize

```python
a.itemsize
```

Bytes used per element.

## nbytes

```python
a.nbytes
```

Approximate array data-buffer memory:

```text
size * itemsize
```

## T

Transpose view in common cases:

```python
a.T
```

## flags

```python
a.flags
```

Useful for diagnosing memory layout and contiguity.

---

# 7. Data Types — dtype

NumPy arrays normally contain elements of a single data type.

Examples include:

```text
int8
int16
int32
int64

uint8
uint16
uint32
uint64

float16
float32
float64

complex64
complex128

bool
datetime64
timedelta64
string-related dtypes
structured dtypes
```

## Why dtype matters

Dtype controls:

- numerical range
- precision
- memory usage
- performance
- interoperability
- overflow behavior

## Example

```python
a = np.array([1, 2, 3], dtype=np.int32)

print(a.dtype)
```

## Convert dtype

```python
a = np.array([1.2, 2.9, 3.7])

b = a.astype(np.int32)

print(b)
```

Result:

```text
[1 2 3]
```

This is truncation, not normal mathematical rounding.

For rounding:

```python
rounded = np.rint(a).astype(np.int32)
```

## Memory comparison

```python
a = np.zeros(1_000_000, dtype=np.float64)
b = np.zeros(1_000_000, dtype=np.float32)

print(a.nbytes)
print(b.nbytes)
```

`float32` uses half the bytes of `float64`.

But lower precision may be unacceptable for certain calculations.

## Integer overflow

```python
a = np.array([127], dtype=np.int8)
a += 1

print(a)
```

An 8-bit signed integer cannot represent arbitrary large values.

### Rule

Choose a dtype based on:

```text
required range
+ required precision
+ memory constraints
+ downstream library requirements
```

## Do not casually use object dtype

```python
np.array([1, "hello", object()], dtype=object)
```

An object array stores Python object references and usually loses much of NumPy's numerical performance advantage.

---

# 8. Indexing and Slicing

## 8.1 1D indexing

```python
a = np.array([10, 20, 30, 40])

print(a[0])
print(a[-1])
```

## 8.2 Slicing

```python
print(a[1:3])
```

Python slicing rules apply:

```text
start inclusive
stop exclusive
```

## 8.3 Step

```python
a[::2]
```

## 8.4 Reverse

```python
a[::-1]
```

## 8.5 2D indexing

```python
matrix = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])

print(matrix[1, 2])
```

Result:

```text
60
```

Equivalent but less idiomatic:

```python
matrix[1][2]
```

Prefer:

```python
matrix[1, 2]
```

## 8.6 Row selection

```python
matrix[1]
```

## 8.7 Column selection

```python
matrix[:, 1]
```

## 8.8 Submatrix

```python
matrix[0:2, 1:3]
```

## 8.9 Ellipsis

For high-dimensional data:

```python
tensor[..., 0]
```

`...` means:

> Fill in however many full dimensions are necessary.

Useful in image and ML tensors.

Example RGB image:

```python
red_channel = image[..., 0]
```

---

# 9. Boolean Indexing and Filtering

Boolean indexing is one of the most useful NumPy skills.

```python
scores = np.array([45, 89, 72, 30, 95])

mask = scores >= 60

print(mask)
print(scores[mask])
```

Short form:

```python
passed = scores[scores >= 60]
```

## Multiple conditions

Use `&`, `|`, and `~`.

```python
values = np.array([5, 10, 15, 20, 25])

result = values[(values >= 10) & (values <= 20)]
```

Do not write:

```python
values >= 10 and values <= 20
```

For arrays, use element-wise operators:

```text
&  AND
|  OR
~  NOT
```

Always parenthesize comparison expressions.

## Real-world example: suspicious invoice amounts

```python
invoice_amounts = np.array([500, 12000, 999999, 2500, -50])

suspicious = invoice_amounts[
    (invoice_amounts < 0) | (invoice_amounts > 100000)
]

print(suspicious)
```

---

# 10. Fancy / Advanced Indexing

Select elements using arrays/lists of indices.

```python
a = np.array([10, 20, 30, 40, 50])

print(a[[0, 2, 4]])
```

Result:

```text
[10 30 50]
```

## Reordering

```python
a[[4, 0, 1]]
```

## 2D coordinate selection

```python
matrix = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])

rows = np.array([0, 2])
cols = np.array([1, 0])

print(matrix[rows, cols])
```

Result selects:

```text
matrix[0,1] -> 20
matrix[2,0] -> 70
```

## np.ix_

Select combinations of row and column indices:

```python
rows = [0, 2]
cols = [0, 2]

sub = matrix[np.ix_(rows, cols)]
```

This produces the cross-product submatrix.

### Important

Basic slicing commonly creates **views**.

Advanced indexing generally creates **copies**.

That distinction matters for both correctness and memory usage.

---

# 11. Changing Shape

## reshape

```python
a = np.arange(12)

matrix = a.reshape(3, 4)
```

Result:

```text
3 rows × 4 columns
```

The total number of elements must remain compatible.

## Automatic dimension with -1

```python
a.reshape(2, -1)
```

NumPy calculates the missing dimension.

## flatten

```python
flat = matrix.flatten()
```

Returns a flattened **copy**.

## ravel

```python
flat = matrix.ravel()
```

Returns a flattened array and uses a view when possible.

## transpose

```python
matrix.T
```

Or:

```python
np.transpose(matrix)
```

For more dimensions:

```python
tensor = np.zeros((2, 3, 4))
reordered = tensor.transpose(2, 0, 1)

print(reordered.shape)
```

Output shape:

```text
(4, 2, 3)
```

## moveaxis

```python
np.moveaxis(tensor, 0, -1)
```

Very useful for image/tensor formats.

Example:

```text
channels-first: (C, H, W)
channels-last:  (H, W, C)
```

---

# 12. Adding and Removing Dimensions

## np.newaxis

```python
a = np.array([1, 2, 3])

column = a[:, np.newaxis]
row = a[np.newaxis, :]
```

Shapes:

```text
a       -> (3,)
column  -> (3, 1)
row     -> (1, 3)
```

This is extremely important for broadcasting.

## expand_dims

```python
np.expand_dims(a, axis=0)
```

## squeeze

Remove dimensions of size 1:

```python
a = np.zeros((1, 3, 1))

b = np.squeeze(a)

print(b.shape)
```

Result:

```text
(3,)
```

Use explicit axes when shape correctness is critical:

```python
np.squeeze(a, axis=0)
```

---

# 13. Joining and Splitting Arrays

## concatenate

```python
a = np.array([1, 2])
b = np.array([3, 4])

np.concatenate([a, b])
```

## stack

Adds a new axis:

```python
np.stack([a, b])
```

Compare:

```text
concatenate: joins existing axes
stack:       creates a new axis
```

## vstack

```python
np.vstack([a, b])
```

## hstack

```python
np.hstack([a, b])
```

## column_stack

```python
names_as_codes = np.array([1, 2, 3])
scores = np.array([80, 90, 70])

table = np.column_stack([names_as_codes, scores])
```

## split

```python
a = np.arange(12)

parts = np.split(a, 3)
```

Requires equal division.

## array_split

```python
np.array_split(a, 5)
```

Allows unequal chunks.

## hsplit / vsplit

Useful for structured 2D splitting.

---

# 14. Copies vs Views

This is one of the most important NumPy topics.

A **view** shares the same underlying data buffer.

A **copy** owns independent data.

## View through slicing

```python
a = np.array([10, 20, 30, 40])

view = a[1:3]

view[0] = 999

print(a)
```

The original can change because the slice may share data.

## Explicit copy

```python
a = np.array([10, 20, 30, 40])

b = a[1:3].copy()

b[0] = 999

print(a)
```

The original stays unchanged.

## Check memory relationship

```python
np.shares_memory(a, view)
```

and:

```python
np.may_share_memory(a, view)
```

## Why this matters

Imagine:

```python
original_prices = np.array([100, 200, 300, 400])

working = original_prices[:2]

working *= 0
```

A beginner may expect only `working` to change.

But the original data can also be modified.

### Rule

If you intend to mutate data independently:

```python
working = original_prices[:2].copy()
```

---

# 15. Arithmetic and Element-Wise Operations

```python
a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a ** 2)
print(b // a)
print(b % a)
```

These operations are normally **element-wise**.

## Scalar operation

```python
prices = np.array([100, 200, 300])

taxed = prices * 1.18
```

No explicit loop is needed.

## In-place operation

```python
a = np.array([1.0, 2.0, 3.0])

a *= 2
```

Can reduce temporary allocations.

Be cautious with dtype:

```python
a = np.array([1, 2, 3])

# a *= 1.5 may fail or require casting considerations
```

If fractional output is needed, create a floating array.

---

# 16. Universal Functions — ufuncs

A **ufunc** performs an element-wise operation over arrays and supports NumPy features such as broadcasting and dtype handling.

Examples:

```python
np.add(a, b)
np.subtract(a, b)
np.multiply(a, b)
np.divide(a, b)

np.sqrt(a)
np.exp(a)
np.log(a)
np.log10(a)

np.sin(a)
np.cos(a)
np.tan(a)

np.abs(a)
```

Operators often map to ufunc behavior:

```python
a + b
```

is conceptually related to:

```python
np.add(a, b)
```

## ufunc reduce

```python
np.add.reduce([1, 2, 3, 4])
```

Result:

```text
10
```

## accumulate

```python
np.add.accumulate([1, 2, 3, 4])
```

Result:

```text
[1, 3, 6, 10]
```

## outer

```python
np.multiply.outer([1, 2, 3], [10, 20])
```

Useful for constructing pairwise combinations.

## at

```python
a = np.zeros(5, dtype=int)

indices = [0, 1, 1, 3]

np.add.at(a, indices, 1)

print(a)
```

Useful when repeated indices must accumulate correctly.

---

# 17. Broadcasting

Broadcasting lets NumPy perform operations on arrays with different but compatible shapes.

## Simple scalar broadcasting

```python
a = np.array([1, 2, 3])

print(a * 10)
```

Conceptually, scalar `10` behaves as if it were:

```text
[10, 10, 10]
```

without necessarily allocating that full array.

## Matrix + row vector

```python
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

offset = np.array([10, 20, 30])

result = matrix + offset
```

Shape comparison:

```text
matrix: (2, 3)
offset:    (3,)
```

Align from the right:

```text
(2, 3)
(   3)
```

Compatible.

## Broadcasting rule

Compare dimensions from the right.

Two dimensions are compatible when:

```text
they are equal
OR
one of them is 1
```

Missing leading dimensions behave as `1`.

## Example that works

```text
(5, 4, 3)
(   1, 3)
```

Aligned:

```text
(5, 4, 3)
(1, 1, 3)
```

Compatible.

## Example that fails

```text
(2, 3)
(2,)
```

Compare final dimension:

```text
3 vs 2
```

Not compatible.

## Fix shape intentionally

```python
a = np.ones((2, 3))
b = np.array([10, 20])

b = b[:, None]

result = a + b
```

Shapes:

```text
a -> (2, 3)
b -> (2, 1)
```

Now broadcasting works.

## Real-world scenario: normalize each column

```python
X = np.array([
    [10., 100., 1000.],
    [20., 120., 1200.],
    [30., 140., 1400.]
])

mean = X.mean(axis=0)
std = X.std(axis=0)

X_scaled = (X - mean) / std
```

`mean` and `std` have shape `(3,)`, so they broadcast across rows.

## Key warning

Broadcasting is efficient when it avoids unnecessary data copies, but a mathematically large result can still require huge memory.

---

# 18. Aggregation and the Axis Concept

This is another core NumPy skill.

```python
a = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
```

## Sum everything

```python
a.sum()
```

Result:

```text
21
```

## Sum along axis 0

```python
a.sum(axis=0)
```

Result:

```text
[5, 7, 9]
```

You are reducing the **rows**, leaving one result per column.

A useful interpretation:

> `axis=0` collapses dimension 0.

## Sum along axis 1

```python
a.sum(axis=1)
```

Result:

```text
[6, 15]
```

You collapse columns and keep one result per row.

## keepdims

```python
a.mean(axis=1, keepdims=True)
```

Shape becomes:

```text
(2, 1)
```

instead of:

```text
(2,)
```

This is very useful for subsequent broadcasting.

## Common aggregations

```python
np.sum(a)
np.mean(a)
np.median(a)
np.std(a)
np.var(a)
np.min(a)
np.max(a)
np.prod(a)
np.any(a)
np.all(a)
```

## Cumulative

```python
np.cumsum(a)
np.cumprod(a)
```

---

# 19. Min, Max, Argmin, Argmax and Related Operations

## Minimum value

```python
a.min()
```

## Maximum value

```python
a.max()
```

## Index of minimum

```python
a.argmin()
```

## Index of maximum

```python
a.argmax()
```

For multidimensional arrays:

```python
matrix.argmax(axis=1)
```

## Example: best monthly sales representative

```python
sales = np.array([
    [10, 12, 9],
    [8, 15, 11],
    [14, 13, 10]
])

best_rep_per_month = sales.argmax(axis=0)
```

## ptp

Peak-to-peak range:

```python
np.ptp(a)
```

Equivalent conceptually to:

```text
max - min
```

---

# 20. Comparison and Logical Operations

```python
a = np.array([1, 5, 10, 15])

print(a > 5)
print(a == 10)
print(a != 1)
```

## logical_and

```python
np.logical_and(a >= 5, a <= 10)
```

## logical_or

```python
np.logical_or(a < 0, a > 100)
```

## logical_not

```python
np.logical_not(a > 5)
```

## any

```python
np.any(a > 10)
```

## all

```python
np.all(a > 0)
```

## Array equality

Do not rely on:

```python
a == b
```

if you need one final Boolean; it returns element-wise comparisons.

Use:

```python
np.array_equal(a, b)
```

For floating-point values:

```python
np.allclose(a, b)
```

because exact binary floating-point equality is often inappropriate.

---

# 21. Conditional Selection

## np.where

```python
scores = np.array([45, 80, 30, 95])

labels = np.where(scores >= 60, "Pass", "Fail")
```

## Replace values conditionally

```python
amounts = np.array([-10, 100, 200, -5])

clean = np.where(amounts < 0, 0, amounts)
```

## select for multiple conditions

```python
scores = np.array([95, 82, 67, 40])

conditions = [
    scores >= 90,
    scores >= 75,
    scores >= 60,
]

choices = ["A", "B", "C"]

grades = np.select(conditions, choices, default="F")
```

## clip

When the condition is simply lower/upper bounds:

```python
values = np.array([-10, 20, 110])

bounded = np.clip(values, 0, 100)
```

Prefer `clip` over a complicated nested `where` for this scenario.

---

# 22. Sorting, Searching and Ranking

## sort

```python
a = np.array([30, 10, 20])

sorted_a = np.sort(a)
```

`np.sort()` returns a sorted copy.

Array method:

```python
a.sort()
```

sorts in place.

## argsort

Returns indices that would sort the array:

```python
a = np.array([30, 10, 20])

idx = np.argsort(a)

print(idx)
print(a[idx])
```

## descending sort

A universally readable technique:

```python
descending = np.sort(a)[::-1]
```

Modern NumPy versions also add newer sorting capabilities; verify compatibility when writing code intended for older NumPy releases.

## searchsorted

Useful when inserting/searching within a sorted array:

```python
a = np.array([10, 20, 30, 40])

pos = np.searchsorted(a, 25)
```

## partition

If you only need the smallest/largest `k` values, full sorting can be unnecessary.

```python
a = np.array([9, 1, 7, 3, 8, 2])

smallest_three = np.partition(a, 3)[:3]
```

## argpartition

```python
idx = np.argpartition(a, 3)[:3]
```

Useful for:

- top-k recommendations
- nearest neighbors
- ranking large arrays
- percentile-like workflows

---

# 23. Unique Values and Set Operations

## unique

```python
a = np.array([1, 2, 2, 3, 3, 3])

values = np.unique(a)
```

Counts:

```python
values, counts = np.unique(a, return_counts=True)
```

## isin

```python
a = np.array([10, 20, 30, 40])

mask = np.isin(a, [20, 40])
```

## intersect1d

```python
np.intersect1d([1, 2, 3], [2, 3, 4])
```

## union1d

```python
np.union1d([1, 2], [2, 3])
```

## setdiff1d

```python
np.setdiff1d([1, 2, 3], [2])
```

## setxor1d

Values present in either input, but not both.

---

# 24. Handling NaN and Infinity

NaN means:

```text
Not a Number
```

Create:

```python
x = np.nan
```

## NaN is unusual

```python
np.nan == np.nan
```

is false.

Use:

```python
np.isnan(x)
```

## Detect infinity

```python
np.isinf(x)
```

## Detect finite numbers

```python
np.isfinite(x)
```

## NaN-aware functions

```python
np.nansum(a)
np.nanmean(a)
np.nanmedian(a)
np.nanmin(a)
np.nanmax(a)
np.nanstd(a)
```

## Example

```python
temperatures = np.array([31.2, np.nan, 29.8, 33.1])

average = np.nanmean(temperatures)
```

## Replace NaN and infinity

```python
clean = np.nan_to_num(
    a,
    nan=0.0,
    posinf=1e6,
    neginf=-1e6
)
```

### Important

Do not blindly replace missing values with zero.

Zero can have real business meaning.

Choose replacement based on the domain.

---

# 25. Rounding, Clipping and Numeric Utilities

## round

```python
np.round([1.2345, 9.8765], 2)
```

## floor

```python
np.floor([1.9, 2.1])
```

## ceil

```python
np.ceil([1.1, 2.9])
```

## trunc

```python
np.trunc([1.9, -1.9])
```

## clip

```python
np.clip(values, min_value, max_value)
```

## absolute value

```python
np.abs(a)
```

## sign

```python
np.sign([-5, 0, 7])
```

## close comparison

```python
np.isclose(0.1 + 0.2, 0.3)
```

## allclose

```python
np.allclose(array1, array2)
```

Use these instead of exact equality when comparing floating-point results.

---

# 26. Random Number Generation

For modern NumPy code, use the `Generator` API:

```python
rng = np.random.default_rng()
```

For reproducible examples:

```python
rng = np.random.default_rng(42)
```

## Random floats

```python
rng.random(5)
```

## Random integers

```python
rng.integers(1, 7, size=10)
```

Simulates dice rolls from 1 through 6 because the upper bound is exclusive.

## Uniform

```python
rng.uniform(0, 100, size=5)
```

## Normal

```python
rng.normal(loc=0, scale=1, size=1000)
```

## Choice

```python
products = np.array(["A", "B", "C"])

sample = rng.choice(products, size=10)
```

Without replacement:

```python
rng.choice(products, size=2, replace=False)
```

With probabilities:

```python
rng.choice(
    ["A", "B", "C"],
    size=100,
    p=[0.5, 0.3, 0.2]
)
```

## Shuffle

```python
a = np.arange(10)

rng.shuffle(a)
```

Mutates the input.

## Permutation

```python
shuffled = rng.permutation(a)
```

Returns a permuted result.

## Common distributions

```python
rng.normal()
rng.uniform()
rng.binomial()
rng.poisson()
rng.exponential()
rng.gamma()
rng.beta()
```

## Simulation example: coin flips

```python
rng = np.random.default_rng(42)

flips = rng.choice([0, 1], size=10000)

probability_heads = flips.mean()

print(probability_heads)
```

## Monte Carlo example: estimate π

```python
rng = np.random.default_rng(42)

n = 1_000_000

x = rng.random(n)
y = rng.random(n)

inside = x*x + y*y <= 1

pi_estimate = 4 * inside.mean()

print(pi_estimate)
```

---

# 27. Statistics with NumPy

## Mean

```python
np.mean(a)
```

## Median

```python
np.median(a)
```

## Variance

```python
np.var(a)
```

## Standard deviation

```python
np.std(a)
```

## Percentile

```python
np.percentile(a, 90)
```

## Quantile

```python
np.quantile(a, 0.90)
```

## Correlation

```python
x = np.array([1, 2, 3, 4])
y = np.array([2, 4, 5, 8])

corr = np.corrcoef(x, y)
```

## Covariance

```python
np.cov(x, y)
```

## Histogram

```python
values = np.array([1, 2, 2, 3, 3, 3])

counts, edges = np.histogram(values, bins=3)
```

## Weighted average

```python
scores = np.array([80, 90, 70])
weights = np.array([0.2, 0.5, 0.3])

weighted = np.average(scores, weights=weights)
```

## Real-world scenario: SLA timing

```python
response_minutes = np.array([
    10, 12, 15, 18, 25, 30, 45, 70, 120
])

print("mean:", response_minutes.mean())
print("median:", np.median(response_minutes))
print("p95:", np.percentile(response_minutes, 95))
```

Why use percentiles?

A mean can hide slow outliers. Operational systems often care about p90/p95/p99 behavior.

---

# 28. Linear Algebra

NumPy provides `np.linalg`.

```python
import numpy as np
```

## Vectors

```python
v = np.array([1.0, 2.0, 3.0])
```

## Matrices

```python
A = np.array([
    [1.0, 2.0],
    [3.0, 4.0]
])
```

## Dot product

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

dot = np.dot(a, b)
```

Also:

```python
a @ b
```

for suitable vector/matrix operands.

## Matrix multiplication

```python
A @ B
```

or:

```python
np.matmul(A, B)
```

## Matrix transpose

```python
A.T
```

## Determinant

```python
np.linalg.det(A)
```

## Inverse

```python
np.linalg.inv(A)
```

But do not automatically use an inverse to solve equations.

## Solve linear equations

For:

```text
Ax = b
```

prefer:

```python
x = np.linalg.solve(A, b)
```

over:

```python
x = np.linalg.inv(A) @ b
```

`solve` is the clearer numerical operation and avoids explicitly constructing the inverse.

## Eigenvalues and eigenvectors

```python
values, vectors = np.linalg.eig(A)
```

For symmetric/Hermitian matrices, specialized functions such as `eigh` may be more appropriate.

## Matrix rank

```python
np.linalg.matrix_rank(A)
```

## Norm

```python
np.linalg.norm(v)
```

## Least squares

```python
x, residuals, rank, singular_values = np.linalg.lstsq(A, b, rcond=None)
```

Useful when there is no exact solution or when fitting a linear model.

## SVD

```python
U, s, Vh = np.linalg.svd(A)
```

Uses include:

- dimensionality reduction concepts
- low-rank approximation
- recommendation systems
- image compression
- numerical stability analysis

## Condition number

```python
np.linalg.cond(A)
```

A very large condition number can indicate numerical sensitivity.

---

# 29. Matrix Multiplication in Depth

This is a frequent source of confusion.

Given:

```python
A.shape == (m, k)
B.shape == (k, n)
```

Then:

```python
A @ B
```

has shape:

```text
(m, n)
```

## Element-wise multiplication is different

```python
A * B
```

means element-wise multiplication, subject to broadcasting.

```python
A @ B
```

means matrix multiplication.

## Example

```python
A = np.array([
    [1, 2],
    [3, 4]
])

B = np.array([
    [10, 20],
    [30, 40]
])

print(A * B)
print(A @ B)
```

These produce completely different results.

## Vector × matrix

```python
v = np.array([1, 2])
M = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

result = v @ M
```

Shape:

```text
(3,)
```

## Matrix × vector

```python
M2 = np.array([
    [10, 20],
    [30, 40],
    [50, 60]
])

result = M2 @ v
```

Shape:

```text
(3,)
```

## Batch matrix multiplication

If arrays have higher dimensions, `matmul` / `@` can operate over stacks of matrices using broadcasting rules on leading dimensions.

This is important in:

- neural networks
- graphics
- scientific simulation
- batched transformations

---

# 30. Advanced Tensor Operations

## tensordot

```python
np.tensordot(a, b, axes=1)
```

Contracts selected axes.

## einsum

Einstein summation notation:

```python
np.einsum("ij,jk->ik", A, B)
```

This represents matrix multiplication.

Row sums:

```python
np.einsum("ij->i", A)
```

Element-wise dot:

```python
np.einsum("i,i->", a, b)
```

`einsum` can express complicated tensor operations compactly, but clarity should come before cleverness.

## outer product

```python
np.outer(a, b)
```

## inner product

```python
np.inner(a, b)
```

## cross product

```python
np.cross(a, b)
```

Useful in geometry and 3D graphics.

---

# 31. Coordinate Grids and meshgrid

Suppose you want to evaluate a function over a 2D surface.

```python
x = np.linspace(-2, 2, 5)
y = np.linspace(-2, 2, 5)

X, Y = np.meshgrid(x, y)

Z = X**2 + Y**2
```

Now `Z` contains the function value at each coordinate.

Use cases:

- contour plots
- surface plots
- physics
- image coordinate transformations
- geometry
- optimization visualization

## mgrid

Compact syntax:

```python
Y, X = np.mgrid[0:3, 0:4]
```

## indices

```python
rows, cols = np.indices((3, 4))
```

Useful for image and mask calculations.

---

# 32. Polynomial Operations

Modern NumPy provides polynomial APIs under:

```python
np.polynomial
```

Example:

```python
from numpy.polynomial import Polynomial

p = Polynomial([1, 2, 3])
```

Represents:

```text
1 + 2x + 3x²
```

Evaluate:

```python
p(2)
```

Roots:

```python
p.roots()
```

Derivative:

```python
p.deriv()
```

Integral:

```python
p.integ()
```

Fit:

```python
x = np.array([0, 1, 2, 3])
y = np.array([1, 3, 7, 13])

fit = Polynomial.fit(x, y, deg=2)
```

Use cases:

- curve fitting
- calibration
- engineering models
- interpolation concepts

---

# 33. Fourier Transform Basics

NumPy includes FFT functionality under:

```python
np.fft
```

## FFT

```python
signal = np.array([0, 1, 0, -1])

spectrum = np.fft.fft(signal)
```

## Inverse FFT

```python
reconstructed = np.fft.ifft(spectrum)
```

## Frequencies

```python
freq = np.fft.fftfreq(len(signal))
```

## Real-input FFT

```python
spectrum = np.fft.rfft(signal)
```

Common uses:

- audio analysis
- frequency-domain filtering
- vibration analysis
- signal processing
- periodicity detection

### Important

NumPy gives the mathematical FFT tools.

For advanced scientific signal processing, SciPy provides a wider toolkit.

---

# 34. Date and Time Arrays

NumPy supports:

```text
datetime64
timedelta64
```

## Dates

```python
dates = np.array([
    "2026-01-01",
    "2026-01-02",
    "2026-01-03"
], dtype="datetime64[D]")
```

## Difference between dates

```python
delta = dates[2] - dates[0]
```

## Add days

```python
future = dates + np.timedelta64(7, "D")
```

## Units

Examples:

```text
Y
M
W
D
h
m
s
ms
us
ns
```

### Use carefully

Business calendars, time zones, holidays, and complex timestamp handling are often easier in pandas or specialized date/time libraries.

---

# 35. Strings and Character Data

NumPy can store string-like data, but NumPy's greatest strength is numerical arrays.

Example:

```python
names = np.array(["alice", "bob", "charlie"])
```

String operations are available through NumPy's string functionality.

Examples conceptually include:

```python
np.strings.upper(names)
np.strings.lower(names)
```

depending on the exact dtype/API being used.

## When to use

String arrays are useful when:

- data must remain inside a NumPy workflow
- fixed-size or specialized array representations are required
- structured scientific data contains text fields

For general tabular string processing, pandas or Python string methods may be more ergonomic.

---

# 36. Structured Arrays

A structured array can have named fields with different dtypes.

```python
people = np.array(
    [
        ("Alice", 25, 50000.0),
        ("Bob", 30, 65000.0),
    ],
    dtype=[
        ("name", "U20"),
        ("age", "i4"),
        ("salary", "f8")
    ]
)
```

Access a field:

```python
people["salary"]
```

Filter:

```python
people[people["age"] >= 30]
```

Useful for:

- binary file formats
- scientific record structures
- C-like records
- memory-mapped datasets

For general business tables, pandas DataFrames are usually more convenient.

---

# 37. Masked Arrays

Sometimes data is present but should be ignored.

```python
import numpy.ma as ma

data = np.array([10, 20, -999, 30])

masked = ma.masked_equal(data, -999)

print(masked.mean())
```

Use cases:

- sensor missing-value codes
- scientific grids
- geospatial data
- legacy datasets

This differs from simply replacing the bad value.

The original value remains but is masked from selected operations.

---

# 38. File Input and Output

## Save binary NumPy array

```python
a = np.arange(10)

np.save("data.npy", a)
```

Load:

```python
a = np.load("data.npy")
```

## Save multiple arrays

```python
np.savez(
    "dataset.npz",
    features=X,
    labels=y
)
```

Load:

```python
data = np.load("dataset.npz")

X = data["features"]
y = data["labels"]
```

## Compressed archive

```python
np.savez_compressed("dataset.npz", features=X, labels=y)
```

## Text output

```python
np.savetxt("data.csv", a, delimiter=",")
```

## Text input

```python
a = np.loadtxt("data.csv", delimiter=",")
```

## Missing/irregular text input

```python
a = np.genfromtxt(
    "data.csv",
    delimiter=",",
    missing_values="",
    filling_values=np.nan
)
```

## Memory mapping

For arrays too large to load completely into RAM:

```python
m = np.memmap(
    "large.bin",
    dtype="float32",
    mode="r",
    shape=(10000, 1000)
)
```

Use cases:

- large numerical datasets
- image/video chunks
- model embeddings
- scientific simulation outputs

---

# 39. Iteration

NumPy supports iteration:

```python
a = np.array([1, 2, 3])

for value in a:
    print(value)
```

2D:

```python
for row in matrix:
    print(row)
```

But avoid element-by-element Python loops when the same operation can be expressed using vectorized NumPy operations.

Bad:

```python
result = []

for x in a:
    result.append(x * 2)
```

Better:

```python
result = a * 2
```

## nditer

Advanced iteration:

```python
for x in np.nditer(matrix):
    print(x)
```

Useful for specialized array traversal and low-level behavior.

---

# 40. Memory Layout, Strides and Contiguity

NumPy stores array data in memory and uses metadata to interpret it.

Key concepts:

```text
shape
dtype
strides
C-contiguous layout
Fortran-contiguous layout
```

## Strides

```python
a = np.arange(12).reshape(3, 4)

print(a.strides)
```

Strides describe how many bytes must be moved in memory to step along each axis.

## C order

Typically row-major:

```python
np.array(data, order="C")
```

## Fortran order

Typically column-major:

```python
np.array(data, order="F")
```

## Contiguous conversion

```python
b = np.ascontiguousarray(a)
```

Useful when interoperating with:

- compiled C/C++
- OpenCV-like systems
- low-level libraries
- hardware/device interfaces

## Why transpose can be cheap

A transpose can often change only metadata such as strides instead of copying every value.

That is powerful but explains why a transposed array may no longer be contiguous in the original memory order.

---

# 41. Performance and Vectorization

NumPy is fastest when you operate on whole arrays using compiled array operations.

## Slow conceptual approach

```python
result = np.empty_like(a)

for i in range(len(a)):
    result[i] = a[i] * 2 + 1
```

## Vectorized

```python
result = a * 2 + 1
```

## Vectorization does NOT mean `np.vectorize`

A common misunderstanding:

```python
np.vectorize(my_python_function)
```

`np.vectorize` is primarily a convenience interface for applying Python functions. It is not automatically equivalent to a fast native NumPy ufunc.

For performance, prefer:

- built-in ufuncs
- broadcasting
- reductions
- matrix operations
- specialized NumPy functions
- NumPy-aware compiled libraries

## Avoid repeated append

Bad:

```python
a = np.array([])

for i in range(10000):
    a = np.append(a, i)
```

This repeatedly allocates new arrays.

Better:

```python
a = np.arange(10000)
```

Or collect in a Python list first:

```python
values = []

for item in source:
    values.append(process(item))

a = np.asarray(values)
```

## Preallocate

```python
result = np.empty(n)

for i in range(n):
    result[i] = expensive_external_operation(i)
```

If a Python loop is unavoidable, preallocating can reduce memory churn.

---

# 42. Memory Optimization

## Choose appropriate dtype

If values are always `0..255`:

```python
pixels = np.array(values, dtype=np.uint8)
```

instead of unnecessarily using `float64`.

## Avoid unnecessary copies

Potential copy:

```python
b = a.copy()
```

View when suitable:

```python
b = a[:]
```

But only use a view when shared-memory semantics are intended.

## In-place operations

```python
a *= 2
```

may allocate less temporary memory than:

```python
a = a * 2
```

## Beware chained temporaries

```python
result = (a * b) + (c * d)
```

This may allocate intermediate arrays.

For truly memory-sensitive pipelines, investigate `out=` where supported:

```python
temp = np.empty_like(a)

np.multiply(a, b, out=temp)
```

## Chunk huge workloads

Instead of processing a billion elements at once, process manageable blocks when the operation permits it.

---

# 43. Common Performance Anti-Patterns

## Anti-pattern 1: loops over every element

```python
for i in range(len(a)):
    a[i] = a[i] * 2
```

Use:

```python
a *= 2
```

## Anti-pattern 2: repeated np.append

Use preallocation or build a list first.

## Anti-pattern 3: object dtype for numerical data

```python
np.array([1, 2, 3], dtype=object)
```

Avoid unless Python-object storage is genuinely needed.

## Anti-pattern 4: giant broadcasted result

```python
A[:, None, :] - B[None, :, :]
```

This can create an enormous pairwise tensor.

Sometimes chunking or a specialized algorithm is better.

## Anti-pattern 5: unnecessary copy before every operation

Understand views and mutation.

## Anti-pattern 6: using inverse to solve equations

Prefer:

```python
np.linalg.solve(A, b)
```

## Anti-pattern 7: premature micro-optimization

First:

1. write correct vectorized code
2. measure
3. locate the bottleneck
4. optimize the actual bottleneck

---

# 44. Interoperability with Pandas, SciPy and Matplotlib

NumPy is a foundation for much of the scientific Python ecosystem.

## Pandas

Convert:

```python
arr = df.to_numpy()
```

or:

```python
arr = series.to_numpy()
```

A pandas DataFrame offers labels, mixed column types, joins, grouping, missing-value semantics, etc.

Use NumPy when array math is the main problem.

Use pandas when table semantics are the main problem.

## Matplotlib

```python
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 1000)
y = np.sin(x)

plt.plot(x, y)
plt.show()
```

## SciPy

SciPy builds on NumPy and offers specialized scientific functionality such as:

- optimization
- integration
- signal processing
- sparse matrices
- scientific statistics
- advanced linear algebra
- spatial algorithms

## Machine learning

Libraries such as scikit-learn commonly accept NumPy-like arrays.

Typical shape:

```text
X -> (number_of_samples, number_of_features)
y -> (number_of_samples,)
```

Understanding NumPy shape semantics directly improves ML debugging skills.

---

# 45. Typing, Validation and Testing

NumPy provides typing helpers.

```python
import numpy as np
import numpy.typing as npt

def normalize(
    x: npt.NDArray[np.float64]
) -> npt.NDArray[np.float64]:
    return (x - x.mean()) / x.std()
```

Runtime validation may still be required.

## Assert shape

```python
assert X.ndim == 2
assert X.shape[1] == 10
```

## Assert finite values

```python
assert np.all(np.isfinite(X))
```

## Test exact arrays

```python
np.testing.assert_array_equal(actual, expected)
```

## Test floating arrays

```python
np.testing.assert_allclose(actual, expected)
```

Testing numerical code should explicitly consider:

- floating tolerance
- NaN behavior
- dtype
- shape
- edge cases
- empty arrays
- large values
- negative values
- reproducibility

---

# 46. NumPy 2.x Awareness and Migration Tips

NumPy 2.x introduced significant API and compatibility changes compared with older tutorials.

When maintaining old code:

## 1. Avoid deprecated aliases

Old examples may contain obsolete aliases such as:

```python
np.int
np.float
np.bool
np.complex
```

Use explicit Python or NumPy types appropriate to the job, for example:

```python
int
float
bool

np.int64
np.float64
```

## 2. Do not assume old binary extensions work

Compiled packages built against incompatible NumPy versions can produce import or ABI errors.

When upgrading NumPy in a scientific environment, also verify compatible versions of packages that compile against NumPy.

## 3. Prefer current random Generator API

New code:

```python
rng = np.random.default_rng(42)
rng.normal(size=100)
```

rather than relying on the legacy global random state.

## 4. Check migration notes before large upgrades

Especially for:

- dtype behavior
- removed/deprecated APIs
- binary extensions
- C API
- type promotion
- string handling
- old third-party packages

## 5. Pin dependencies for production

Example:

```text
numpy>=2.5,<2.6
```

Only choose a version range after testing your project.

---

# 47. Common Errors and Troubleshooting

## Error: operands could not be broadcast together

Example:

```text
ValueError: operands could not be broadcast together
```

Check:

```python
print(a.shape)
print(b.shape)
```

Align shapes from the right.

Fix with reshape/newaxis where mathematically appropriate.

## Error: too many indices

You indexed an array as if it had more dimensions than it actually does.

Check:

```python
print(a.ndim)
print(a.shape)
```

## Error: index out of bounds

```python
a[10]
```

when the axis does not contain that index.

Check:

```python
a.shape
```

## Error: cannot reshape array

Example:

```python
np.arange(10).reshape(3, 4)
```

Impossible because:

```text
10 != 3 × 4
```

## Unexpected mutation

Usually a view/copy issue.

Use:

```python
np.shares_memory(a, b)
```

and make an explicit copy where needed.

## Unexpected integer result

Check dtype:

```python
print(a.dtype)
```

Use floating dtype when the calculation requires decimals.

## NaN spreads through calculations

Example:

```python
np.mean([1, np.nan, 3])
```

Use a NaN-aware strategy such as:

```python
np.nanmean(...)
```

if ignoring missing values is appropriate.

## Ambiguous truth value

This fails:

```python
if a > 5:
    ...
```

because `a > 5` may contain many booleans.

Use:

```python
if np.any(a > 5):
    ...
```

or:

```python
if np.all(a > 5):
    ...
```

depending on meaning.

## Import errors after upgrade

Check versions:

```bash
python -c "import numpy; print(numpy.__version__)"
```

Reinstall or upgrade the incompatible package, or use a compatible NumPy version according to that package's requirements.

---

# 48. Real-World Scenario Cookbook

This section combines multiple NumPy concepts.

---

## Scenario 1 — Invoice Amount Validation

Requirement:

- amount must be positive
- amount must not exceed ₹1,000,000
- flag suspicious entries

```python
import numpy as np

amounts = np.array([
    5000,
    25000,
    -100,
    1500000,
    76000
], dtype=float)

valid_mask = (amounts > 0) & (amounts <= 1_000_000)

valid = amounts[valid_mask]
invalid = amounts[~valid_mask]

print("Valid:", valid)
print("Invalid:", invalid)
```

Concepts used:

```text
array creation
boolean masks
comparison
filtering
```

---

## Scenario 2 — GST Calculation

```python
base_amount = np.array([1000, 2500, 5000], dtype=float)
gst_rate = 0.18

gst = base_amount * gst_rate
final_amount = base_amount + gst

print(final_amount)
```

Concept:

```text
scalar broadcasting
```

Different tax rates:

```python
rates = np.array([0.05, 0.12, 0.18])

final = base_amount * (1 + rates)
```

Concept:

```text
element-wise operation
```

---

## Scenario 3 — Monthly Sales Dashboard

Rows = products.

Columns = months.

```python
sales = np.array([
    [100, 120, 130, 150],
    [80, 90, 110, 140],
    [200, 210, 205, 220]
])

product_totals = sales.sum(axis=1)
monthly_totals = sales.sum(axis=0)
best_product = product_totals.argmax()

print(product_totals)
print(monthly_totals)
print(best_product)
```

Concepts:

```text
2D arrays
axis
sum
argmax
```

---

## Scenario 4 — Feature Standardization for ML

```python
X = np.array([
    [10., 100., 1000.],
    [20., 120., 1100.],
    [30., 140., 1300.],
    [40., 160., 1500.]
])

mean = X.mean(axis=0)
std = X.std(axis=0)

safe_std = np.where(std == 0, 1, std)

X_scaled = (X - mean) / safe_std
```

Concepts:

```text
aggregation
axis
broadcasting
conditional selection
```

---

## Scenario 5 — Image Brightness

An image can be represented as:

```text
(height, width, channels)
```

Example:

```python
image = np.array(
    [
        [[100, 120, 140], [200, 210, 220]],
        [[50, 60, 70], [240, 250, 255]]
    ],
    dtype=np.uint8
)
```

To brighten safely:

```python
bright = image.astype(np.int16) + 30
bright = np.clip(bright, 0, 255).astype(np.uint8)
```

Why convert first?

Because direct arithmetic on a small unsigned integer dtype can overflow or wrap depending on the operation.

Concepts:

```text
dtype
casting
clipping
image tensor
```

---

## Scenario 6 — Remove Sensor Outliers

```python
readings = np.array([
    20.1, 20.4, 20.3, 99.0, 20.5, 20.2
])

median = np.median(readings)

deviation = np.abs(readings - median)

clean = readings[deviation < 5]

print(clean)
```

For a more formal statistical rule, use domain-appropriate methods instead of hard-coded thresholds.

---

## Scenario 7 — Attendance Analysis

```python
hours = np.array([
    [9.0, 8.5, 7.0, 9.5, 8.0],
    [8.0, 8.0, 8.0, 7.5, 8.5],
    [5.0, 6.0, 7.0, 5.5, 6.5]
])

weekly_hours = hours.sum(axis=1)

under_target = weekly_hours < 40

print(weekly_hours)
print(under_target)
```

Find each employee's lowest day:

```python
lowest_day = hours.argmin(axis=1)
```

---

## Scenario 8 — Portfolio Return Simulation

```python
rng = np.random.default_rng(42)

expected_daily_return = 0.0005
daily_volatility = 0.01

simulated_returns = rng.normal(
    loc=expected_daily_return,
    scale=daily_volatility,
    size=(10_000, 252)
)

annual_return = np.prod(1 + simulated_returns, axis=1) - 1

print(np.mean(annual_return))
print(np.percentile(annual_return, [5, 50, 95]))
```

Educational simulation only; real financial modeling requires more assumptions and risk analysis.

---

## Scenario 9 — Pairwise Distances

Points:

```python
points = np.array([
    [0., 0.],
    [3., 4.],
    [6., 8.]
])
```

Broadcast:

```python
diff = points[:, None, :] - points[None, :, :]
distances = np.sqrt(np.sum(diff**2, axis=-1))
```

Result is a distance matrix.

Concepts:

```text
newaxis
broadcasting
reduction
Euclidean distance
```

Warning: for huge datasets, the full pairwise matrix may consume enormous memory.

---

## Scenario 10 — One-Hot Encoding

```python
labels = np.array([0, 2, 1, 2])

num_classes = 3

one_hot = np.eye(num_classes)[labels]

print(one_hot)
```

Concepts:

```text
identity matrix
advanced indexing
ML preprocessing
```

---

## Scenario 11 — Normalize Each Row

```python
X = np.array([
    [3., 4.],
    [5., 12.]
])

norms = np.linalg.norm(X, axis=1, keepdims=True)

normalized = X / norms
```

`keepdims=True` preserves shape `(n, 1)` so broadcasting is natural.

---

## Scenario 12 — Confusion Matrix Without a Loop

```python
actual = np.array([0, 1, 2, 1, 0, 2])
pred = np.array([0, 2, 2, 1, 0, 1])

num_classes = 3

cm = np.zeros((num_classes, num_classes), dtype=int)

np.add.at(cm, (actual, pred), 1)

print(cm)
```

---

## Scenario 13 — Rolling Window View

A simple window representation can be built using:

```python
from numpy.lib.stride_tricks import sliding_window_view

a = np.array([1, 2, 3, 4, 5])

windows = sliding_window_view(a, window_shape=3)

print(windows)
```

Conceptually:

```text
[1 2 3]
[2 3 4]
[3 4 5]
```

Rolling mean:

```python
rolling_mean = windows.mean(axis=1)
```

Use stride tricks carefully because views can have non-obvious memory semantics.

---

## Scenario 14 — Group Counts with bincount

If category IDs are non-negative integers:

```python
category_ids = np.array([0, 2, 1, 2, 2, 0])

counts = np.bincount(category_ids)
```

Weighted aggregation:

```python
amounts = np.array([10, 20, 30, 40, 50, 60])

totals = np.bincount(category_ids, weights=amounts)
```

This can be extremely useful for fast grouped integer-category aggregation.

---

## Scenario 15 — Convert Celsius to Fahrenheit

```python
celsius = np.array([-10, 0, 10, 20, 30])

fahrenheit = celsius * 9 / 5 + 32
```

A perfect beginner example of vectorization.

---

# 49. Mini Projects

Use these to turn knowledge into skill.

## Project 1 — Student Result Analyzer

Build a NumPy program that stores:

```text
students × subjects
```

Calculate:

- total score
- average score
- top student
- subject topper
- pass/fail
- grade
- percentile
- lowest-performing subject

Concepts:

```text
2D arrays
axis
boolean masks
argmax
where/select
```

---

## Project 2 — Sales Analytics Engine

Dataset:

```text
products × months
```

Calculate:

- product totals
- monthly totals
- month-over-month growth
- best and worst product
- contribution percentage
- cumulative sales
- top 3 products

Concepts:

```text
axis
argsort
cumsum
broadcasting
percentage calculations
```

---

## Project 3 — Invoice Anomaly Detector

Input:

```text
invoice amount
tax amount
quantity
unit price
total
```

Rules:

- negative amount
- total mismatch
- unusual tax rate
- duplicate amount pattern
- extreme outliers

Concepts:

```text
logical masks
isclose
where
statistics
percentiles
```

---

## Project 4 — Image Array Processor

Using a numeric image tensor:

- adjust brightness
- convert to grayscale
- crop
- flip
- threshold
- normalize pixels
- channel reordering

Concepts:

```text
3D arrays
slicing
dtype
clip
broadcasting
transpose
```

---

## Project 5 — Monte Carlo Simulator

Simulate:

- dice
- coins
- card-like categorical draws
- random walk
- portfolio-like returns

Concepts:

```text
Generator
distributions
aggregation
cumsum
statistics
```

---

## Project 6 — Linear Regression from Scratch

Given `X` and `y`:

1. add bias column
2. solve least squares
3. predict
4. calculate residuals
5. calculate MSE

Example core:

```python
X_design = np.column_stack([
    np.ones(len(X)),
    X
])

beta, *_ = np.linalg.lstsq(X_design, y, rcond=None)

pred = X_design @ beta

mse = np.mean((y - pred) ** 2)
```

---

## Project 7 — Recommendation Similarity Prototype

Represent users/items as embedding vectors.

Tasks:

- normalize vectors
- cosine similarity
- top-k similar items
- exclude self
- rank candidates

Concepts:

```text
norm
matrix multiplication
argpartition
argsort
broadcasting
```

---

## Project 8 — Sensor Monitoring System

Create simulated readings and detect:

- missing values
- infinities
- spikes
- threshold violations
- rolling averages
- daily summary statistics

---

# 50. Practice Exercises

Try these before reading the solution.

## Exercise 1

Create:

```text
[0, 1, 2, ..., 99]
```

Solution:

```python
a = np.arange(100)
```

## Exercise 2

Create a `5 × 5` array of zeros.

```python
a = np.zeros((5, 5))
```

## Exercise 3

Create numbers from `0` to `1` with exactly 11 evenly spaced values.

```python
a = np.linspace(0, 1, 11)
```

## Exercise 4

Convert:

```text
[1, 2, 3]
```

into shape `(3, 1)`.

```python
a = np.array([1, 2, 3])[:, None]
```

## Exercise 5

Extract even values.

```python
a = np.arange(10)

even = a[a % 2 == 0]
```

## Exercise 6

Replace negative values with zero.

```python
a = np.array([-3, 5, -1, 8])

result = np.where(a < 0, 0, a)
```

or:

```python
result = np.clip(a, 0, None)
```

## Exercise 7

Calculate row totals.

```python
matrix.sum(axis=1)
```

## Exercise 8

Calculate column averages.

```python
matrix.mean(axis=0)
```

## Exercise 9

Find the index of the maximum element.

```python
a.argmax()
```

## Exercise 10

Convert a flat 12-element array to `3 × 4`.

```python
a.reshape(3, 4)
```

## Exercise 11

Standardize each feature/column.

```python
mean = X.mean(axis=0)
std = X.std(axis=0)

scaled = (X - mean) / np.where(std == 0, 1, std)
```

## Exercise 12

Generate 100 reproducible normal random numbers.

```python
rng = np.random.default_rng(42)

x = rng.normal(size=100)
```

## Exercise 13

Count category IDs.

```python
ids = np.array([0, 1, 1, 2, 2, 2])

counts = np.bincount(ids)
```

## Exercise 14

Find unique values and counts.

```python
values, counts = np.unique(a, return_counts=True)
```

## Exercise 15

Sort descending.

```python
result = np.sort(a)[::-1]
```

## Exercise 16

Get top 5 indices.

Simple:

```python
top5 = np.argsort(a)[-5:][::-1]
```

For very large arrays, investigate:

```python
np.argpartition
```

## Exercise 17

Calculate Euclidean length of a vector.

```python
np.linalg.norm(v)
```

## Exercise 18

Solve `Ax = b`.

```python
x = np.linalg.solve(A, b)
```

## Exercise 19

Calculate pairwise difference between every value in `a` and every value in `b`.

```python
diff = a[:, None] - b[None, :]
```

## Exercise 20

Check whether all values are finite.

```python
np.all(np.isfinite(a))
```

---

# 51. Interview Questions

## Beginner

### What is NumPy?

A Python numerical-computing library centered around the N-dimensional `ndarray`.

### What is an ndarray?

A homogeneous N-dimensional array with associated metadata such as shape, dtype and strides.

### What is shape?

A tuple describing the size of each dimension.

### What is ndim?

The number of dimensions.

### What is dtype?

The type used to represent array elements.

### What is vectorization?

Expressing operations over entire arrays rather than manually iterating element by element in Python.

### What is broadcasting?

Rules that allow operations between arrays with compatible but different shapes.

### Difference between Python list and ndarray?

NumPy arrays are specialized for efficient numerical operations, typically have a homogeneous dtype, support broadcasting and multidimensional vectorized operations.

---

## Intermediate

### Difference between reshape and resize?

`reshape` returns an array with a new shape when compatible and typically does not conceptually mean “change how many elements exist.”

`resize` APIs can have different semantics and may change storage/size. Read the exact API before using it.

### Difference between ravel and flatten?

`flatten()` returns a copy.

`ravel()` returns a flattened view when possible.

### Difference between view and copy?

A view shares the underlying data buffer.

A copy owns independent data.

### Difference between `*` and `@`?

`*` is element-wise multiplication.

`@` performs matrix multiplication.

### Why is `keepdims=True` useful?

It retains reduced axes with size 1, often making later broadcasting straightforward.

### `np.array` vs `np.asarray`?

Both create/obtain arrays.

`asarray` is often used when you want an ndarray-like representation while avoiding an unnecessary copy when possible.

### Why use `np.allclose`?

Floating-point calculations can produce tiny representation differences, so tolerance-based comparison is often more meaningful than exact equality.

---

## Advanced

### What are strides?

Byte steps required to move along each axis in an array.

### Why can slicing be cheap?

Basic slicing often returns a view sharing the existing data buffer.

### Why can transposing be cheap?

NumPy can often modify shape/stride metadata instead of physically rearranging every value.

### Why can broadcasting be memory efficient?

It can conceptually expand dimensions without materializing repeated copies of the smaller array.

### When can broadcasting still be expensive?

When the output itself is extremely large, or when later operations force materialization of a huge intermediate.

### Why can object dtype be slow?

Operations may involve Python objects and Python-level dispatch rather than compact native numeric storage.

### Why prefer `np.linalg.solve(A, b)` over `inv(A) @ b`?

It expresses the mathematical intent directly and avoids explicitly constructing the inverse.

### Is `np.vectorize` a performance optimization?

Usually no. It is mainly a convenience wrapper around a Python function.

### Basic vs advanced indexing?

Basic slicing typically produces views.

Advanced/fancy indexing typically produces copies.

### What is C-contiguous vs F-contiguous?

They are common memory layout conventions describing how multidimensional elements are laid out in the underlying contiguous buffer.

---

# 52. Cheat Sheet

## Import

```python
import numpy as np
```

## Create

```python
np.array([1, 2, 3])

np.zeros((3, 4))
np.ones((3, 4))
np.full((3, 4), 7)
np.empty((3, 4))

np.arange(0, 10, 2)
np.linspace(0, 1, 100)
np.logspace(0, 3, 10)

np.eye(3)
```

## Inspect

```python
a.shape
a.ndim
a.size
a.dtype
a.itemsize
a.nbytes
a.strides
a.flags
```

## Index

```python
a[0]
a[-1]
a[1:5]
a[::-1]

m[1, 2]
m[:, 1]
m[1, :]
m[0:2, 1:3]
```

## Filter

```python
a[a > 10]

a[(a > 10) & (a < 100)]

a[np.isin(a, [1, 5, 10])]
```

## Shape

```python
a.reshape(2, -1)
a.ravel()
a.flatten()
a.T

a[:, None]

np.expand_dims(a, 0)
np.squeeze(a)
np.moveaxis(a, 0, -1)
```

## Join

```python
np.concatenate([a, b])
np.stack([a, b])
np.vstack([a, b])
np.hstack([a, b])
np.column_stack([a, b])
```

## Split

```python
np.split(a, 3)
np.array_split(a, 3)
```

## Math

```python
a + b
a - b
a * b
a / b
a ** 2

np.sqrt(a)
np.exp(a)
np.log(a)
np.abs(a)
```

## Aggregate

```python
a.sum()
a.mean()
np.median(a)
a.std()
a.var()
a.min()
a.max()
a.argmin()
a.argmax()

a.sum(axis=0)
a.sum(axis=1)

np.cumsum(a)
np.cumprod(a)
```

## Logic

```python
np.any(mask)
np.all(mask)

np.where(condition, yes, no)

np.isclose(a, b)
np.allclose(a, b)
np.array_equal(a, b)
```

## NaN

```python
np.isnan(a)
np.isinf(a)
np.isfinite(a)

np.nanmean(a)
np.nansum(a)
np.nanmedian(a)
np.nan_to_num(a)
```

## Sort/search

```python
np.sort(a)
np.argsort(a)
np.partition(a, k)
np.argpartition(a, k)
np.searchsorted(a, value)
```

## Unique/set

```python
np.unique(a)
np.unique(a, return_counts=True)

np.isin(a, b)
np.intersect1d(a, b)
np.union1d(a, b)
np.setdiff1d(a, b)
```

## Random

```python
rng = np.random.default_rng(42)

rng.random(10)
rng.integers(0, 10, size=10)
rng.normal(size=1000)
rng.uniform(0, 1, 1000)
rng.choice(a, size=10)
rng.shuffle(a)
rng.permutation(a)
```

## Linear algebra

```python
A @ B

np.linalg.solve(A, b)
np.linalg.det(A)
np.linalg.inv(A)
np.linalg.norm(A)
np.linalg.eig(A)
np.linalg.svd(A)
np.linalg.lstsq(A, b, rcond=None)
np.linalg.matrix_rank(A)
np.linalg.cond(A)
```

## Files

```python
np.save("a.npy", a)
np.load("a.npy")

np.savez("data.npz", x=x, y=y)
np.savez_compressed("data.npz", x=x, y=y)

np.savetxt("data.csv", a, delimiter=",")
np.loadtxt("data.csv", delimiter=",")
np.genfromtxt("data.csv", delimiter=",")
```

---

# 53. Glossary

## Array

A multidimensional collection of values represented by `ndarray`.

## Axis

A dimension along which an operation is performed or reduced.

## Broadcasting

Rules for combining arrays of different compatible shapes.

## Copy

An independent data buffer.

## dtype

The data representation used for each array element.

## Fancy indexing

Indexing using arrays/lists of integer indices or advanced indexing patterns.

## Mask

A Boolean array used to select or ignore elements.

## ndarray

NumPy's central N-dimensional array type.

## Shape

Tuple describing the size of each dimension.

## Slice

A selected continuous/strided range from an array.

## Stride

Byte offset required to move one step along an axis.

## Tensor

General term often used for a multidimensional numerical array.

## ufunc

Universal function; a NumPy function designed for element-wise array operations.

## Vectorization

Expressing work as operations over whole arrays rather than explicit Python element loops.

## View

An array representation that shares an existing data buffer.

---

# 54. Recommended Learning Roadmap

## Stage 1 — Absolute beginner

Master:

```text
np.array
shape
ndim
dtype
indexing
slicing
basic arithmetic
sum
mean
min
max
```

Practice:

- marks
- temperatures
- prices
- simple matrices

---

## Stage 2 — Core NumPy

Master:

```text
axis
reshape
transpose
boolean masking
where
concatenate
stack
split
unique
sorting
random Generator
```

Practice:

- sales table
- attendance table
- invoice validation
- feature preprocessing

---

## Stage 3 — Critical mental models

Master:

```text
broadcasting
views vs copies
dtype behavior
memory
vectorization
```

Do not skip this stage.

These concepts distinguish someone who merely recognizes NumPy syntax from someone who can debug real NumPy programs.

---

## Stage 4 — Numerical computing

Learn:

```text
statistics
linear algebra
matrix multiplication
random distributions
FFT basics
polynomials
```

---

## Stage 5 — Performance

Learn:

```text
preallocation
in-place operations
contiguity
strides
memory mapping
avoid object dtype
avoid unnecessary copies
avoid Python element loops
```

---

## Stage 6 — Ecosystem

Combine NumPy with:

```text
pandas
matplotlib
scipy
scikit-learn
image libraries
scientific libraries
```

---

## Stage 7 — Advanced NumPy

Learn when needed:

```text
structured arrays
masked arrays
memmap
einsum
tensordot
stride tricks
advanced indexing
array interoperability
typing
compiled extensions / C API concepts
```

---

# 55. Final Mastery Checklist

You can consider yourself strong in practical NumPy when you can confidently answer and demonstrate all of these:

- [ ] I can explain what an `ndarray` is.
- [ ] I understand `shape`, `ndim`, `size`, and `dtype`.
- [ ] I can create arrays with `array`, `zeros`, `ones`, `full`, `arange`, and `linspace`.
- [ ] I can index 1D, 2D, and 3D arrays.
- [ ] I can use slices correctly.
- [ ] I can filter using Boolean masks.
- [ ] I understand fancy indexing.
- [ ] I can reshape, transpose, flatten, and add/remove dimensions.
- [ ] I understand what an axis means.
- [ ] I can use reductions such as `sum`, `mean`, `min`, and `max` over the correct axis.
- [ ] I can explain broadcasting using shapes.
- [ ] I can deliberately use `None` / `np.newaxis` for broadcasting.
- [ ] I know the difference between a view and a copy.
- [ ] I can detect accidental shared memory.
- [ ] I understand vectorization.
- [ ] I know that `np.vectorize` is not automatically a speed optimization.
- [ ] I can use `where`, `clip`, `any`, and `all`.
- [ ] I can sort and rank data.
- [ ] I can use `unique`, `isin`, and set operations.
- [ ] I can handle NaN and infinity intentionally.
- [ ] I can compare floating-point arrays using tolerances.
- [ ] I can use the modern random `Generator` API.
- [ ] I can reproduce random simulations with an explicit seed.
- [ ] I can calculate common statistics.
- [ ] I understand `*` versus `@`.
- [ ] I can solve a linear system.
- [ ] I know the purpose of eigenvalues, SVD, rank, norm, and least squares at a practical level.
- [ ] I can load and save `.npy` and `.npz` files.
- [ ] I know when CSV handling should move to pandas.
- [ ] I understand `nbytes` and dtype-related memory usage.
- [ ] I know why repeated `np.append` is inefficient.
- [ ] I know when broadcasting can create a dangerously large result.
- [ ] I can write tests for numerical results using `np.testing`.
- [ ] I can debug shape mismatches systematically.
- [ ] I can debug dtype-related bugs.
- [ ] I can read NumPy documentation rather than guessing an API.
- [ ] I can convert a loop-based numerical calculation into a vectorized form.
- [ ] I can recognize when NumPy is not the right tool and another library is more appropriate.

---

# Appendix A — Shape Reasoning Drills

Shape reasoning is one of the fastest ways to become good at NumPy.

Given:

```python
A = np.zeros((10, 5))
b = np.zeros((5,))
```

What is:

```python
(A + b).shape
```

Answer:

```text
(10, 5)
```

---

Given:

```python
A = np.zeros((10, 5))
b = np.zeros((10,))
```

Will this work?

```python
A + b
```

No.

Alignment:

```text
(10, 5)
(   10)
```

Final dimensions `5` and `10` conflict.

Fix if the intent is one value per row:

```python
A + b[:, None]
```

Now:

```text
(10, 5)
(10, 1)
```

---

Given:

```python
X = np.zeros((32, 224, 224, 3))
bias = np.zeros((3,))
```

Then:

```python
X + bias
```

works because the 3-element array broadcasts over the channel dimension.

This pattern appears constantly in image processing and machine learning.

---

# Appendix B — Axis Reasoning Drills

Given:

```python
X.shape == (100, 20)
```

Interpret:

```text
100 samples
20 features
```

Then:

```python
X.mean(axis=0)
```

shape:

```text
(20,)
```

One mean per feature.

And:

```python
X.mean(axis=1)
```

shape:

```text
(100,)
```

One mean per sample.

---

Given image batch:

```text
(batch, height, width, channels)
(32, 224, 224, 3)
```

Mean color for each image:

```python
image_mean = X.mean(axis=(1, 2))
```

Shape:

```text
(32, 3)
```

Mean across the whole batch and all pixels:

```python
channel_mean = X.mean(axis=(0, 1, 2))
```

Shape:

```text
(3,)
```

---

# Appendix C — Dtype Selection Guide

A simplified decision guide:

## Integers

Use integer dtype when values are exact counts/IDs and no decimals are needed.

Examples:

```text
quantity
category ID
pixel channel
count
index
```

## float32

Useful when:

- memory is important
- ML libraries expect it
- precision is sufficient

## float64

Useful when:

- higher numerical precision is desired
- scientific/financial computations demand more headroom
- it is the natural NumPy default for many floating operations

## uint8

Useful for compact `0..255` image channel values.

## bool

Useful for masks:

```python
mask = values > threshold
```

## datetime64 / timedelta64

Useful for regular numerical date/time arrays.

## object

Use only when you actually need arbitrary Python objects.

---

# Appendix D — NumPy vs Pandas vs SciPy vs Python

## Use NumPy when

- data is predominantly numerical
- shape and tensor operations matter
- performance depends on vectorized numerical operations
- you need linear algebra
- you need simulations
- you need a common numerical representation

## Use pandas when

- data is tabular
- column names and row labels matter
- mixed column types matter
- joins/grouping/table cleaning dominate the task

## Use SciPy when

- advanced scientific algorithms are needed
- optimization, sparse methods, signal processing, integration, etc. are required

## Use plain Python when

- data is small
- logic is irregular
- objects are heterogeneous
- readability matters more than vectorized numeric throughput

---

# Appendix E — Debugging Template

When a NumPy expression fails, print:

```python
print("type:", type(x))
print("shape:", x.shape)
print("ndim:", x.ndim)
print("dtype:", x.dtype)
print("size:", x.size)
```

For two arrays:

```python
print("A:", A.shape, A.dtype)
print("B:", B.shape, B.dtype)
```

Then ask:

```text
1. Are the dimensions what I think they are?
2. Are the dtypes what I think they are?
3. Which axis am I reducing?
4. Will broadcasting succeed?
5. Is a view being mutated?
6. Are NaN/inf values present?
7. Am I using element-wise multiplication when I need matrix multiplication?
8. Is the result too large for memory?
```

This checklist resolves a large percentage of everyday NumPy bugs.

---

# Appendix F — Clean NumPy Coding Guidelines

Prefer:

```python
prices_with_tax = prices * (1 + tax_rate)
```

over vague names:

```python
x2 = x * y
```

Keep shape assumptions visible:

```python
# X shape: (samples, features)
feature_mean = X.mean(axis=0)
```

Validate external data:

```python
X = np.asarray(X, dtype=np.float64)

if X.ndim != 2:
    raise ValueError("X must be a 2D array")
```

Use deterministic random seeds in tests:

```python
rng = np.random.default_rng(42)
```

Do not mutate shared views unintentionally.

Prefer readable vectorization over highly compressed tricks.

Comment **why**, especially when axis choices are non-obvious.

---

# Appendix G — Suggested 30-Day Study Schedule

## Days 1-3

Learn:

```text
array creation
shape
ndim
dtype
indexing
```

## Days 4-6

Learn:

```text
slicing
boolean indexing
fancy indexing
```

## Days 7-9

Learn:

```text
reshape
transpose
newaxis
stack
concatenate
split
```

## Days 10-12

Learn:

```text
element-wise math
ufuncs
aggregations
axis
```

## Days 13-15

Learn deeply:

```text
broadcasting
views vs copies
```

## Days 16-18

Learn:

```text
sorting
unique
where
NaN handling
statistics
```

## Days 19-21

Learn:

```text
random Generator
simulations
```

## Days 22-24

Learn:

```text
linear algebra
dot
matmul
solve
norm
least squares
SVD basics
```

## Days 25-26

Learn:

```text
files
memory
dtype optimization
memmap
```

## Days 27-28

Learn:

```text
performance
vectorization
strides
advanced indexing
```

## Day 29

Complete one mini project without copying solutions.

## Day 30

Review the cheat sheet and explain each concept aloud without looking at the handbook.

---

# Appendix H — The Five Questions to Ask Before Writing NumPy Code

Before solving a problem, answer:

```text
1. What shape should the input have?
2. What shape should the output have?
3. What dtype is appropriate?
4. Which axis represents which real-world meaning?
5. Can the operation be expressed using vectorization/broadcasting?
```

If you can answer these five questions, implementation becomes dramatically easier.

---

# Final Perspective

NumPy mastery is not about memorizing every function in the library.

It is about developing a reliable mental model:

```text
DATA
  ↓
ndarray
  ↓
shape + dtype
  ↓
index/slice/filter
  ↓
reshape/align axes
  ↓
broadcast
  ↓
vectorized ufunc
  ↓
aggregate / linear algebra / transform
  ↓
validate shape + dtype + numerical behavior
```

The most important topics to revisit until they feel natural are:

```text
1. ndarray
2. shape
3. axis
4. dtype
5. indexing
6. broadcasting
7. vectorization
8. views vs copies
9. aggregation
10. linear algebra
```

Once these become second nature, the rest of NumPy becomes much easier to learn from the official API reference as needed.

---

**End of NumPy Master Handbook**
