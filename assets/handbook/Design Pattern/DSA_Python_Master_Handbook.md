# DSA with Python — Master Learning Handbook

> **Data Structures and Algorithms (DSA) in Python — Beginner to Advanced**
>
> A single-reference handbook for learning, revision, interviews, competitive programming, and practical software engineering.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is DSA?](#2-what-is-dsa)
3. [Python for DSA](#3-python-for-dsa)
4. [Complexity Analysis](#4-complexity-analysis)
5. [Mathematical Foundations](#5-mathematical-foundations)
6. [Recursion](#6-recursion)
7. [Arrays and Python Lists](#7-arrays-and-python-lists)
8. [Strings](#8-strings)
9. [Linked Lists](#9-linked-lists)
10. [Stacks](#10-stacks)
11. [Queues and Deques](#11-queues-and-deques)
12. [Hash Tables, Dictionaries, and Sets](#12-hash-tables-dictionaries-and-sets)
13. [Searching Algorithms](#13-searching-algorithms)
14. [Sorting Algorithms](#14-sorting-algorithms)
15. [Two Pointers](#15-two-pointers)
16. [Sliding Window](#16-sliding-window)
17. [Prefix Sum, Suffix Sum, and Difference Arrays](#17-prefix-sum-suffix-sum-and-difference-arrays)
18. [Intervals](#18-intervals)
19. [Binary Search Patterns](#19-binary-search-patterns)
20. [Trees](#20-trees)
21. [Binary Search Trees](#21-binary-search-trees)
22. [Heaps and Priority Queues](#22-heaps-and-priority-queues)
23. [Tries](#23-tries)
24. [Graphs](#24-graphs)
25. [Union-Find / Disjoint Set Union](#25-union-find--disjoint-set-union)
26. [Greedy Algorithms](#26-greedy-algorithms)
27. [Backtracking](#27-backtracking)
28. [Dynamic Programming](#28-dynamic-programming)
29. [Bit Manipulation](#29-bit-manipulation)
30. [Monotonic Stack and Monotonic Queue](#30-monotonic-stack-and-monotonic-queue)
31. [Advanced String Algorithms](#31-advanced-string-algorithms)
32. [Range Query Data Structures](#32-range-query-data-structures)
33. [Advanced Graph Algorithms](#33-advanced-graph-algorithms)
34. [Advanced Tree Concepts](#34-advanced-tree-concepts)
35. [Algorithm Design Paradigms](#35-algorithm-design-paradigms)
36. [Common Problem-Solving Patterns](#36-common-problem-solving-patterns)
37. [Python-Specific DSA Optimizations](#37-python-specific-dsa-optimizations)
38. [Testing and Debugging DSA Solutions](#38-testing-and-debugging-dsa-solutions)
39. [Interview Problem-Solving Framework](#39-interview-problem-solving-framework)
40. [Competitive Programming Template](#40-competitive-programming-template)
41. [Common Mistakes and Anti-Patterns](#41-common-mistakes-and-anti-patterns)
42. [DSA Roadmap](#42-dsa-roadmap)
43. [Practice Problem Checklist](#43-practice-problem-checklist)
44. [Cheat Sheets](#44-cheat-sheets)
45. [Mini Projects Using DSA](#45-mini-projects-using-dsa)
46. [Final Revision Strategy](#46-final-revision-strategy)

---

# 1. How to Use This Handbook

This handbook is designed for several types of learners:

- A complete beginner learning DSA for the first time.
- A Python developer who wants stronger problem-solving skills.
- A student preparing for coding interviews.
- A competitive programmer.
- An experienced developer revising algorithms.
- Someone who wants one master reference instead of many scattered notes.

A good learning cycle is:

```text
Learn concept
    ↓
Understand operations
    ↓
Understand time/space complexity
    ↓
Implement from scratch
    ↓
Use Python's built-in equivalent
    ↓
Solve easy problems
    ↓
Solve pattern-based medium problems
    ↓
Study edge cases
    ↓
Revise
```

Do not memorize every implementation blindly. The real objective is to recognize:

1. What structure fits the problem?
2. What operations need to be fast?
3. What trade-offs are acceptable?
4. What pattern is hidden in the problem?
5. What complexity is required by the input size?

---

# 2. What Is DSA?

## 2.1 Data Structure

A **data structure** is a way of organizing data so that particular operations can be performed efficiently.

Examples:

| Data Structure | Typical Strength |
|---|---|
| Array/List | Fast indexing |
| Linked List | Cheap insertion/removal when node is known |
| Stack | Last-In-First-Out processing |
| Queue | First-In-First-Out processing |
| Hash Table | Fast average lookup |
| Heap | Fast access to minimum/maximum priority |
| Tree | Hierarchical data |
| Graph | Relationships/networks |
| Trie | Prefix search |
| Union-Find | Connectivity tracking |

## 2.2 Algorithm

An **algorithm** is a finite sequence of steps used to solve a problem.

Examples:

- Binary search
- Merge sort
- Breadth-first search
- Depth-first search
- Dijkstra's shortest path
- Dynamic programming

## 2.3 Why DSA Matters

Imagine an application with 10 records. Almost any solution works.

Now imagine:

```text
10 records
1,000 records
1,000,000 records
1,000,000,000 records
```

A poor algorithm can become unusable as data grows.

For example:

```python
# O(n)
for value in values:
    if value == target:
        return True
```

If the list is sorted, binary search can reduce this to approximately:

```text
O(log n)
```

For one billion values:

```text
Linear search: potentially ~1,000,000,000 checks
Binary search: roughly ~30 checks
```

That difference is why algorithms matter.

---

# 3. Python for DSA

Python is popular for DSA because its syntax lets us focus on the algorithm rather than boilerplate.

## 3.1 Core Python Containers

```python
numbers = [10, 20, 30]          # list
point = (4, 7)                  # tuple
unique = {1, 2, 3}              # set
user = {"id": 10, "name": "A"}  # dict
```

## 3.2 Essential Imports

```python
from collections import deque, defaultdict, Counter
from functools import lru_cache
from heapq import heappush, heappop, heapify
from bisect import bisect_left, bisect_right
from math import gcd, inf
```

## 3.3 Python List Comprehensions

```python
squares = [x * x for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

Avoid complicated comprehensions when they reduce readability.

## 3.4 `enumerate`

Instead of:

```python
for i in range(len(nums)):
    print(i, nums[i])
```

Prefer:

```python
for i, value in enumerate(nums):
    print(i, value)
```

## 3.5 `zip`

```python
names = ["A", "B", "C"]
scores = [80, 92, 76]

for name, score in zip(names, scores):
    print(name, score)
```

## 3.6 Multiple Assignment

```python
a, b = b, a
```

Useful for swapping values.

## 3.7 Negative Indexing

```python
arr = [10, 20, 30]

arr[-1]  # 30
arr[-2]  # 20
```

## 3.8 Slicing

```python
arr[start:end:step]
```

Example:

```python
arr = [1, 2, 3, 4, 5]

arr[1:4]   # [2, 3, 4]
arr[::-1]  # reversed copy
```

Important:

> Slicing generally creates a new sequence and therefore costs time and memory proportional to the slice size.

## 3.9 Python Mutable vs Immutable Objects

Common mutable objects:

```text
list
dict
set
custom class objects
```

Common immutable objects:

```text
int
float
bool
str
tuple
frozenset
```

This matters when using objects as dictionary keys.

---

# 4. Complexity Analysis

Complexity analysis estimates how algorithm resource usage grows as input size grows.

The two main measurements are:

- **Time Complexity**
- **Space Complexity**

---

## 4.1 Big-O Notation

Big-O describes an asymptotic upper growth rate.

Common complexities:

| Complexity | Name | Typical Example |
|---|---|---|
| O(1) | Constant | Dictionary lookup average case |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Scan array |
| O(n log n) | Linearithmic | Efficient comparison sorting |
| O(n²) | Quadratic | Nested pair loops |
| O(n³) | Cubic | Some matrix/DP algorithms |
| O(2^n) | Exponential | Subset recursion |
| O(n!) | Factorial | Permutations |

---

## 4.2 O(1)

```python
def first(arr):
    return arr[0]
```

The work does not meaningfully grow with `n`.

---

## 4.3 O(n)

```python
def contains(arr, target):
    for item in arr:
        if item == target:
            return True
    return False
```

Worst case examines every element.

---

## 4.4 O(n²)

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

Approximately `n × n` operations.

---

## 4.5 O(log n)

Repeatedly reducing a problem by a constant factor often creates logarithmic complexity.

```python
while n > 1:
    n //= 2
```

---

## 4.6 O(n log n)

Common in divide-and-conquer sorting.

Example:

```text
Merge sort
Heap sort
Average efficient comparison sorts
```

---

## 4.7 Best, Average, and Worst Case

Linear search:

```python
def search(arr, target):
    for item in arr:
        if item == target:
            return True
    return False
```

Best case:

```text
Target is first element → O(1)
```

Worst case:

```text
Target is last or absent → O(n)
```

Average case:

```text
O(n)
```

---

## 4.8 Amortized Complexity

Python list append is normally considered:

```text
O(1) amortized
```

Occasionally the internal array must resize, which costs `O(n)`, but resizing does not occur for every append.

---

## 4.9 Space Complexity

Example:

```python
def doubled(nums):
    result = []

    for x in nums:
        result.append(x * 2)

    return result
```

Additional storage grows with `n`:

```text
O(n)
```

An in-place operation may use:

```text
O(1) auxiliary space
```

---

## 4.10 Practical Input-Size Heuristic

This is approximate, not a strict rule:

| Input Size | Usually Consider |
|---|---|
| n ≤ 10 | factorial/exponential may be possible |
| n ≤ 20 | O(2^n) sometimes possible |
| n ≤ 100 | O(n³) sometimes possible |
| n ≤ 1,000 | O(n²) often possible |
| n ≤ 100,000 | O(n log n) usually desirable |
| n ≤ 1,000,000 | O(n) or O(n log n) |
| Extremely large | O(log n), O(1), streaming, special math |

Always consider language, constants, memory, and environment.

---

# 5. Mathematical Foundations

DSA frequently uses simple mathematical ideas.

## 5.1 Modulo

```python
17 % 5
# 2
```

Useful for:

- Cyclic arrays
- Hashing
- Even/odd tests
- Modular arithmetic
- Large-number problems

Circular index:

```python
next_index = (index + 1) % n
```

---

## 5.2 Greatest Common Divisor

```python
from math import gcd

gcd(18, 24)
# 6
```

Euclidean algorithm:

```python
def gcd_custom(a, b):
    while b:
        a, b = b, a % b
    return a
```

Complexity:

```text
O(log(min(a, b)))
```

---

## 5.3 Least Common Multiple

```python
def lcm(a, b):
    return abs(a * b) // gcd(a, b)
```

---

## 5.4 Prime Check

```python
def is_prime(n):
    if n < 2:
        return False

    d = 2

    while d * d <= n:
        if n % d == 0:
            return False
        d += 1

    return True
```

Why stop at `sqrt(n)`?

If `n = a × b`, at least one factor must be `≤ sqrt(n)`.

---

## 5.5 Sieve of Eratosthenes

Find all primes up to `n`.

```python
def sieve(n):
    prime = [True] * (n + 1)

    if n >= 0:
        prime[0] = False
    if n >= 1:
        prime[1] = False

    p = 2

    while p * p <= n:
        if prime[p]:
            for multiple in range(p * p, n + 1, p):
                prime[multiple] = False
        p += 1

    return [i for i, is_p in enumerate(prime) if is_p]
```

Complexity:

```text
Time: O(n log log n)
Space: O(n)
```

---

# 6. Recursion

Recursion occurs when a function calls itself.

## 6.1 Basic Example

```python
def countdown(n):
    if n == 0:
        return

    print(n)
    countdown(n - 1)
```

Every recursive algorithm needs:

1. A **base case**
2. Progress toward the base case

---

## 6.2 Factorial

```python
def factorial(n):
    if n <= 1:
        return 1

    return n * factorial(n - 1)
```

---

## 6.3 Recursion Stack

Calling:

```python
factorial(4)
```

conceptually produces:

```text
factorial(4)
    factorial(3)
        factorial(2)
            factorial(1)
```

Each call consumes stack space.

Complexity:

```text
Time: O(n)
Stack space: O(n)
```

---

## 6.4 Python Recursion Limitation

Python is not optimized for deep recursive calls.

For deeply nested problems, iterative methods may be safer.

Graph DFS can often be implemented iteratively:

```python
def dfs_iterative(graph, start):
    stack = [start]
    visited = set()

    while stack:
        node = stack.pop()

        if node in visited:
            continue

        visited.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                stack.append(neighbor)

    return visited
```

---

# 7. Arrays and Python Lists

Python's built-in `list` is a dynamic array.

```python
arr = [10, 20, 30, 40]
```

## 7.1 Common Operations

| Operation | Typical Complexity |
|---|---|
| `arr[i]` | O(1) |
| `arr.append(x)` | O(1) amortized |
| `arr.pop()` | O(1) |
| `arr.insert(0, x)` | O(n) |
| `arr.pop(0)` | O(n) |
| Search | O(n) |
| Delete middle | O(n) |
| Sort | O(n log n) |

---

## 7.2 Why Indexing Is Fast

A dynamic array stores references in contiguous indexed slots, allowing direct indexed access.

---

## 7.3 Maximum Element

```python
def find_max(nums):
    if not nums:
        raise ValueError("empty sequence")

    best = nums[0]

    for value in nums[1:]:
        if value > best:
            best = value

    return best
```

Better for production Python:

```python
best = max(nums)
```

Implement manually when learning the algorithm.

---

## 7.4 Reverse an Array In Place

```python
def reverse_array(nums):
    left = 0
    right = len(nums) - 1

    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
```

Complexity:

```text
Time: O(n)
Extra space: O(1)
```

---

## 7.5 Rotate Array Right by k

Example:

```text
[1,2,3,4,5,6,7], k=3

→ [5,6,7,1,2,3,4]
```

Using slicing:

```python
def rotate(nums, k):
    if not nums:
        return nums

    k %= len(nums)
    return nums[-k:] + nums[:-k]
```

Time:

```text
O(n)
```

Extra space:

```text
O(n)
```

---

## 7.6 Kadane's Algorithm — Maximum Subarray Sum

Problem:

Find the contiguous subarray with maximum sum.

```python
def max_subarray(nums):
    current = nums[0]
    best = nums[0]

    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)

    return best
```

Example:

```text
[-2,1,-3,4,-1,2,1,-5,4]

Best subarray:
[4,-1,2,1]

Sum = 6
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

---

# 8. Strings

Python strings are immutable sequences.

```python
text = "algorithm"
```

## 8.1 Character Access

```python
text[0]
text[-1]
```

## 8.2 String Immutability

This is invalid:

```python
text[0] = "A"
```

Create a new string instead.

---

## 8.3 String Concatenation in Loops

Avoid repeated concatenation for large workloads:

```python
result = ""

for word in words:
    result += word
```

Prefer:

```python
result = "".join(words)
```

---

## 8.4 Palindrome

```python
def is_palindrome(text):
    left = 0
    right = len(text) - 1

    while left < right:
        if text[left] != text[right]:
            return False

        left += 1
        right -= 1

    return True
```

---

## 8.5 Character Frequency

```python
from collections import Counter

counts = Counter("banana")
```

Produces conceptually:

```python
{
    "b": 1,
    "a": 3,
    "n": 2
}
```

Manual version:

```python
def frequency(text):
    counts = {}

    for ch in text:
        counts[ch] = counts.get(ch, 0) + 1

    return counts
```

---

## 8.6 Anagram Check

```python
from collections import Counter

def is_anagram(a, b):
    return Counter(a) == Counter(b)
```

Example:

```text
listen
silent
```

---

## 8.7 Longest Common Prefix

```python
def longest_common_prefix(words):
    if not words:
        return ""

    prefix = words[0]

    for word in words[1:]:
        while not word.startswith(prefix):
            prefix = prefix[:-1]

            if not prefix:
                return ""

    return prefix
```

---

# 9. Linked Lists

A linked list stores values in nodes connected through references.

## 9.1 Singly Linked List Node

```python
class ListNode:
    def __init__(self, value=0, next_node=None):
        self.value = value
        self.next = next_node
```

Example:

```text
10 → 20 → 30 → None
```

---

## 9.2 Array vs Linked List

| Operation | Array/List | Linked List |
|---|---:|---:|
| Access by index | O(1) | O(n) |
| Search | O(n) | O(n) |
| Insert at front | O(n) | O(1) |
| Delete front | O(n) | O(1) |
| Append | O(1) amortized | O(1) with tail |
| Memory locality | Better | Worse |

---

## 9.3 Traverse a Linked List

```python
def print_list(head):
    current = head

    while current:
        print(current.value)
        current = current.next
```

---

## 9.4 Reverse Linked List

```python
def reverse_list(head):
    previous = None
    current = head

    while current:
        next_node = current.next
        current.next = previous
        previous = current
        current = next_node

    return previous
```

Conceptually:

```text
Before:
1 → 2 → 3 → None

After:
3 → 2 → 1 → None
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

---

## 9.5 Find Middle Node

Use slow and fast pointers.

```python
def middle_node(head):
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow
```

---

## 9.6 Detect Cycle — Floyd's Algorithm

```python
def has_cycle(head):
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow is fast:
            return True

    return False
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

---

## 9.7 Doubly Linked List

A doubly linked node contains:

```text
previous ← node → next
```

Useful for:

- LRU cache
- Browser forward/back history
- Undo/redo structures
- Ordered collections requiring fast node removal

---

# 10. Stacks

A stack follows:

```text
LIFO
Last In, First Out
```

Example:

```text
Push A
Push B
Push C

Pop → C
```

Use Python list:

```python
stack = []

stack.append(10)
stack.append(20)

value = stack.pop()
```

Operations:

```text
push: O(1) amortized
pop: O(1)
top: O(1)
```

---

## 10.1 Balanced Parentheses

```python
def is_valid_parentheses(s):
    pairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    }

    stack = []

    for ch in s:
        if ch in "([{":
            stack.append(ch)

        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False

    return not stack
```

Use cases:

- Expression parsing
- Compiler syntax
- Nested structures
- HTML/XML-like validation

---

## 10.2 Evaluate Reverse Polish Notation

```python
def eval_rpn(tokens):
    stack = []

    for token in tokens:
        if token not in {"+", "-", "*", "/"}:
            stack.append(int(token))
            continue

        b = stack.pop()
        a = stack.pop()

        if token == "+":
            stack.append(a + b)
        elif token == "-":
            stack.append(a - b)
        elif token == "*":
            stack.append(a * b)
        else:
            stack.append(int(a / b))

    return stack[-1]
```

---

# 11. Queues and Deques

A queue follows:

```text
FIFO
First In, First Out
```

Do not normally use:

```python
queue = []
queue.pop(0)
```

because removing from the front of a list costs:

```text
O(n)
```

Use `deque`.

```python
from collections import deque

queue = deque()

queue.append("A")
queue.append("B")

queue.popleft()
```

Typical complexity:

```text
append: O(1)
appendleft: O(1)
pop: O(1)
popleft: O(1)
```

---

## 11.1 Queue Use Cases

- BFS
- Job processing
- Message buffering
- Print queue
- Request scheduling

---

## 11.2 Deque Use Cases

A deque supports efficient operations at both ends.

```python
dq = deque()

dq.append(10)
dq.appendleft(5)
dq.pop()
dq.popleft()
```

Useful for:

- Sliding-window maximum
- BFS
- Double-ended scheduling
- Recent-event tracking

---

# 12. Hash Tables, Dictionaries, and Sets

Python:

```text
dict → hash map
set  → hash set
```

## 12.1 Dictionary

```python
student = {
    "name": "Alex",
    "score": 95,
}
```

Common average complexities:

| Operation | Average |
|---|---:|
| Lookup | O(1) |
| Insert | O(1) |
| Delete | O(1) |

Worst-case theoretical behavior can degrade, but average-case hash-table performance is the practical model used in most DSA problems.

---

## 12.2 Set

```python
seen = set()

seen.add(10)
10 in seen
```

Use a set when you care about membership, uniqueness, or duplicates.

---

## 12.3 Two Sum

Problem:

Find two indices whose values sum to target.

```python
def two_sum(nums, target):
    seen = {}

    for i, value in enumerate(nums):
        needed = target - value

        if needed in seen:
            return [seen[needed], i]

        seen[value] = i

    return []
```

Complexity:

```text
Time: O(n) average
Space: O(n)
```

Naive double loop:

```text
O(n²)
```

---

## 12.4 First Non-Repeating Character

```python
from collections import Counter

def first_unique_char(s):
    counts = Counter(s)

    for i, ch in enumerate(s):
        if counts[ch] == 1:
            return i

    return -1
```

---

## 12.5 `defaultdict`

```python
from collections import defaultdict

graph = defaultdict(list)

graph["A"].append("B")
```

Useful when values have a natural default.

---

## 12.6 `Counter`

```python
from collections import Counter

Counter([1, 1, 1, 2, 2, 3])
```

Very useful for:

- Frequency counting
- Anagrams
- Majority/frequency problems
- Multiset-like logic

---

# 13. Searching Algorithms

## 13.1 Linear Search

```python
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i

    return -1
```

Complexity:

```text
Time: O(n)
Space: O(1)
```

Use when:

- Data is unsorted
- Input is small
- Search happens once

---

## 13.2 Binary Search

Requirement:

> The search space must be sorted or satisfy a monotonic condition.

```python
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

Complexity:

```text
Time: O(log n)
Space: O(1)
```

---

## 13.3 Python `bisect`

```python
from bisect import bisect_left

arr = [1, 3, 3, 5, 8]

index = bisect_left(arr, 3)
# 1
```

`bisect_left` returns the leftmost insertion position.

`bisect_right` returns the position after existing equal values.

---

# 14. Sorting Algorithms

Sorting is one of the most important algorithm families.

## 14.1 Sorting Summary

| Algorithm | Best | Average | Worst | Extra Space | Stable? |
|---|---:|---:|---:|---:|---|
| Bubble | O(n)* | O(n²) | O(n²) | O(1) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | Usually No |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | stack dependent | Usually No |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1)** | No |
| Counting | O(n+k) | O(n+k) | O(n+k) | O(k) | Can be |
| Radix | digit-dependent | digit-dependent | digit-dependent | extra | Usually |

\* optimized bubble sort  
\** for an in-place heap implementation

Python's built-in sorting uses **Timsort**, which is stable and highly optimized.

---

## 14.2 Bubble Sort

```python
def bubble_sort(arr):
    arr = arr[:]
    n = len(arr)

    for end in range(n - 1, 0, -1):
        swapped = False

        for i in range(end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        if not swapped:
            break

    return arr
```

Good for:

- Learning
- Tiny or nearly sorted data in educational contexts

Not typically used for production sorting.

---

## 14.3 Selection Sort

```python
def selection_sort(arr):
    arr = arr[:]

    for i in range(len(arr)):
        minimum = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minimum]:
                minimum = j

        arr[i], arr[minimum] = arr[minimum], arr[i]

    return arr
```

---

## 14.4 Insertion Sort

```python
def insertion_sort(arr):
    arr = arr[:]

    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = current

    return arr
```

Useful when:

- Data is small
- Data is almost sorted

---

## 14.5 Merge Sort

Divide:

```text
[8,3,5,4]

→ [8,3] [5,4]
→ [8] [3] [5] [4]
```

Merge:

```text
[3,8] [4,5]
→ [3,4,5,8]
```

Implementation:

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result
```

Complexity:

```text
Time: O(n log n)
Space: O(n)
```

---

## 14.6 Quick Sort

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    lower = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    higher = [x for x in arr if x > pivot]

    return quick_sort(lower) + equal + quick_sort(higher)
```

This is easy to understand but allocates extra lists.

Classic in-place quicksort uses partitioning.

Average:

```text
O(n log n)
```

Worst:

```text
O(n²)
```

---

## 14.7 Python Sorting

```python
numbers.sort()
```

modifies the original list.

```python
sorted_numbers = sorted(numbers)
```

returns a new list.

Custom sorting:

```python
employees = [
    ("A", 30),
    ("B", 25),
    ("C", 40),
]

employees.sort(key=lambda item: item[1])
```

Multi-key sorting:

```python
records.sort(key=lambda x: (x[0], -x[1]))
```

---

# 15. Two Pointers

Two pointers use two indices that move according to a condition.

Common situations:

- Sorted arrays
- Pair problems
- Palindromes
- Removing duplicates
- Partitioning
- Linked-list slow/fast pointer problems

---

## 15.1 Pair Sum in Sorted Array

```python
def pair_sum_sorted(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        total = nums[left] + nums[right]

        if total == target:
            return left, right

        if total < target:
            left += 1
        else:
            right -= 1

    return None
```

Complexity:

```text
O(n)
```

instead of:

```text
O(n²)
```

---

## 15.2 Remove Duplicates from Sorted Array

```python
def remove_duplicates(nums):
    if not nums:
        return 0

    write = 1

    for read in range(1, len(nums)):
        if nums[read] != nums[read - 1]:
            nums[write] = nums[read]
            write += 1

    return write
```

---

# 16. Sliding Window

Sliding window is used for contiguous subarray or substring problems.

Typical clues:

```text
longest substring
shortest subarray
maximum sum of k elements
at most k
minimum window
continuous segment
```

---

## 16.1 Fixed-Size Window

Maximum sum of any subarray of size `k`.

```python
def max_sum_k(nums, k):
    if k <= 0 or k > len(nums):
        raise ValueError("invalid k")

    window_sum = sum(nums[:k])
    best = window_sum

    for right in range(k, len(nums)):
        window_sum += nums[right]
        window_sum -= nums[right - k]
        best = max(best, window_sum)

    return best
```

Complexity:

```text
O(n)
```

Instead of recalculating every window:

```text
O(nk)
```

---

## 16.2 Variable-Size Window

Longest substring without repeated characters:

```python
def length_of_longest_substring(s):
    last_seen = {}
    left = 0
    best = 0

    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1

        last_seen[ch] = right
        best = max(best, right - left + 1)

    return best
```

---

# 17. Prefix Sum, Suffix Sum, and Difference Arrays

## 17.1 Prefix Sum

For:

```text
nums = [2, 4, 1, 7]
```

prefix sum:

```text
[0, 2, 6, 7, 14]
```

Implementation:

```python
def prefix_sum(nums):
    prefix = [0]

    for x in nums:
        prefix.append(prefix[-1] + x)

    return prefix
```

Range sum `[left, right]`:

```python
range_sum = prefix[right + 1] - prefix[left]
```

After preprocessing:

```text
Range query: O(1)
```

---

## 17.2 Prefix Frequency

For strings or bounded values, prefix counts can answer repeated range-frequency queries.

---

## 17.3 Suffix Sum

```python
def suffix_sum(nums):
    suffix = [0] * (len(nums) + 1)

    for i in range(len(nums) - 1, -1, -1):
        suffix[i] = nums[i] + suffix[i + 1]

    return suffix
```

Useful when the future/right-side aggregate is repeatedly needed.

---

## 17.4 Difference Array

Difference arrays efficiently apply many range increments.

Suppose we repeatedly do:

```text
add value x to every position from l to r
```

Instead of updating every element:

```python
diff[l] += x
diff[r + 1] -= x
```

Then reconstruct using prefix sums.

```python
def range_additions(n, updates):
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value

        if right + 1 < n:
            diff[right + 1] -= value

    result = [0] * n
    running = 0

    for i in range(n):
        running += diff[i]
        result[i] = running

    return result
```

---

# 18. Intervals

Intervals often appear as:

```text
[start, end]
```

Common tasks:

- Merge overlapping intervals
- Insert interval
- Detect conflicts
- Meeting-room scheduling
- Count simultaneous events

---

## 18.1 Merge Intervals

```python
def merge_intervals(intervals):
    if not intervals:
        return []

    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for start, end in intervals[1:]:
        last_end = merged[-1][1]

        if start <= last_end:
            merged[-1][1] = max(last_end, end)
        else:
            merged.append([start, end])

    return merged
```

Example:

```text
[[1,3], [2,6], [8,10], [9,12]]

→ [[1,6], [8,12]]
```

Complexity:

```text
Sorting: O(n log n)
Merge scan: O(n)
Overall: O(n log n)
```

---

# 19. Binary Search Patterns

Binary search is more than finding a number.

It can search any **monotonic search space**.

---

## 19.1 First Occurrence

```python
def first_occurrence(arr, target):
    left = 0
    right = len(arr) - 1
    answer = -1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            if arr[mid] == target:
                answer = mid
            right = mid - 1
        else:
            left = mid + 1

    return answer
```

---

## 19.2 Binary Search on Answer

Suppose the question asks:

```text
What is the minimum capacity needed?
What is the smallest maximum workload?
What is the minimum speed that completes the task?
```

If a candidate value can be checked as:

```text
possible / impossible
```

and feasibility is monotonic, binary search may apply.

General template:

```python
def binary_search_answer(low, high, feasible):
    answer = high

    while low <= high:
        mid = (low + high) // 2

        if feasible(mid):
            answer = mid
            high = mid - 1
        else:
            low = mid + 1

    return answer
```

---

# 20. Trees

A tree is a hierarchical structure with nodes and edges.

Terminology:

```text
Root
Parent
Child
Sibling
Leaf
Depth
Height
Subtree
Ancestor
Descendant
```

---

## 20.1 Binary Tree Node

```python
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
```

---

## 20.2 DFS Traversals

### Preorder

```text
Root → Left → Right
```

```python
def preorder(root):
    if not root:
        return []

    return [root.value] + preorder(root.left) + preorder(root.right)
```

### Inorder

```text
Left → Root → Right
```

```python
def inorder(root):
    if not root:
        return []

    return inorder(root.left) + [root.value] + inorder(root.right)
```

### Postorder

```text
Left → Right → Root
```

```python
def postorder(root):
    if not root:
        return []

    return postorder(root.left) + postorder(root.right) + [root.value]
```

---

## 20.3 Iterative DFS

```python
def preorder_iterative(root):
    if not root:
        return []

    stack = [root]
    result = []

    while stack:
        node = stack.pop()
        result.append(node.value)

        if node.right:
            stack.append(node.right)

        if node.left:
            stack.append(node.left)

    return result
```

---

## 20.4 BFS / Level Order

```python
from collections import deque

def level_order(root):
    if not root:
        return []

    queue = deque([root])
    result = []

    while queue:
        level = []

        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.value)

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

        result.append(level)

    return result
```

---

## 20.5 Maximum Depth

```python
def max_depth(root):
    if not root:
        return 0

    return 1 + max(
        max_depth(root.left),
        max_depth(root.right),
    )
```

---

## 20.6 Tree Diameter

Diameter = longest path between any two nodes.

```python
def diameter_of_tree(root):
    best = 0

    def depth(node):
        nonlocal best

        if not node:
            return 0

        left = depth(node.left)
        right = depth(node.right)

        best = max(best, left + right)

        return 1 + max(left, right)

    depth(root)
    return best
```

This is a common **postorder tree DP** pattern.

---

# 21. Binary Search Trees

A Binary Search Tree (BST) normally satisfies:

```text
left values < node value
right values > node value
```

Policies for duplicates vary.

---

## 21.1 Search

```python
def bst_search(root, target):
    current = root

    while current:
        if current.value == target:
            return current

        if target < current.value:
            current = current.left
        else:
            current = current.right

    return None
```

Average in a balanced BST:

```text
O(log n)
```

Worst in a skewed BST:

```text
O(n)
```

---

## 21.2 Insert

```python
def bst_insert(root, value):
    if root is None:
        return TreeNode(value)

    if value < root.value:
        root.left = bst_insert(root.left, value)
    else:
        root.right = bst_insert(root.right, value)

    return root
```

---

## 21.3 Inorder Traversal of BST

Inorder traversal produces sorted values.

---

## 21.4 Validate BST

```python
def is_valid_bst(root):
    def validate(node, low, high):
        if not node:
            return True

        if not (low < node.value < high):
            return False

        return (
            validate(node.left, low, node.value)
            and validate(node.right, node.value, high)
        )

    return validate(root, float("-inf"), float("inf"))
```

---

# 22. Heaps and Priority Queues

A heap is a tree-based structure used to efficiently access the minimum or maximum element.

Python's `heapq` implements a **min-heap**.

```python
import heapq

heap = []

heapq.heappush(heap, 10)
heapq.heappush(heap, 3)
heapq.heappush(heap, 8)

smallest = heapq.heappop(heap)
# 3
```

Typical complexity:

```text
peek min: O(1)
push: O(log n)
pop min: O(log n)
heapify n items: O(n)
```

---

## 22.1 Max Heap in Python

Use negative values:

```python
heapq.heappush(heap, -value)
largest = -heapq.heappop(heap)
```

Modern Python environments may also provide max-heap helper APIs, but the negation pattern is universally familiar in interview code.

---

## 22.2 Top K Largest

```python
import heapq

def top_k_largest(nums, k):
    return heapq.nlargest(k, nums)
```

For streaming scenarios, maintain a min-heap of size `k`.

```python
def top_k_stream(nums, k):
    heap = []

    for value in nums:
        if len(heap) < k:
            heapq.heappush(heap, value)
        elif value > heap[0]:
            heapq.heapreplace(heap, value)

    return heap
```

Complexity:

```text
O(n log k)
```

---

## 22.3 Priority Queue Use Cases

- Task scheduling
- Dijkstra's algorithm
- Top-K problems
- Merge K sorted lists
- Event simulation
- CPU/job prioritization

---

# 23. Tries

A trie is a tree specialized for strings and prefixes.

Use cases:

- Autocomplete
- Dictionary search
- Prefix queries
- Spell checking
- Routing prefixes

---

## 23.1 Trie Implementation

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root

        for ch in word:
            node = node.children.setdefault(ch, TrieNode())

        node.is_word = True

    def search(self, word):
        node = self.root

        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]

        return node.is_word

    def starts_with(self, prefix):
        node = self.root

        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]

        return True
```

If word length is `L`, common operation time is:

```text
O(L)
```

---

# 24. Graphs

A graph contains:

```text
Vertices / Nodes
Edges
```

Graphs can be:

- Directed
- Undirected
- Weighted
- Unweighted
- Cyclic
- Acyclic
- Connected
- Disconnected

---

## 24.1 Real-World Graph Examples

| Scenario | Node | Edge |
|---|---|---|
| Social network | Person | Friendship/follow |
| Maps | City/intersection | Road |
| Internet | Router | Connection |
| Dependencies | Package/task | Depends-on relation |
| Website | Page | Link |

---

## 24.2 Adjacency List

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"],
}
```

Typically efficient for sparse graphs.

---

## 24.3 BFS

```python
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = {start}
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order
```

Complexity:

```text
O(V + E)
```

Typical use cases:

- Shortest path in unweighted graph
- Level traversal
- Minimum number of moves
- Nearest target search

---

## 24.4 DFS

Recursive:

```python
def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()

    visited.add(node)

    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

    return visited
```

Complexity:

```text
O(V + E)
```

Use cases:

- Connectivity
- Cycle detection
- Components
- Backtracking-style exploration
- Topological algorithms
- Tree/graph structure analysis

---

## 24.5 Connected Components

```python
def count_components(graph):
    visited = set()
    components = 0

    for node in graph:
        if node in visited:
            continue

        components += 1
        stack = [node]

        while stack:
            current = stack.pop()

            if current in visited:
                continue

            visited.add(current)

            for neighbor in graph[current]:
                if neighbor not in visited:
                    stack.append(neighbor)

    return components
```

---

## 24.6 Cycle Detection in Undirected Graph

```python
def has_cycle_undirected(graph):
    visited = set()

    def dfs(node, parent):
        visited.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True

            elif neighbor != parent:
                return True

        return False

    for node in graph:
        if node not in visited and dfs(node, None):
            return True

    return False
```

---

## 24.7 Topological Sort — Kahn's Algorithm

Applicable to a **Directed Acyclic Graph (DAG)**.

```python
from collections import deque

def topological_sort(graph):
    indegree = {node: 0 for node in graph}

    for node in graph:
        for neighbor in graph[node]:
            indegree[neighbor] = indegree.get(neighbor, 0) + 1

    queue = deque(
        node for node, degree in indegree.items()
        if degree == 0
    )

    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph.get(node, []):
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    if len(order) != len(indegree):
        return None  # cycle exists

    return order
```

Use cases:

- Course prerequisites
- Build systems
- Job dependencies
- Deployment ordering

---

## 24.8 Dijkstra's Algorithm

Find shortest paths from one source in a graph with **non-negative edge weights**.

```python
import heapq

def dijkstra(graph, source):
    distances = {node: float("inf") for node in graph}
    distances[source] = 0

    heap = [(0, source)]

    while heap:
        distance, node = heapq.heappop(heap)

        if distance != distances[node]:
            continue

        for neighbor, weight in graph[node]:
            new_distance = distance + weight

            if new_distance < distances[neighbor]:
                distances[neighbor] = new_distance
                heapq.heappush(
                    heap,
                    (new_distance, neighbor),
                )

    return distances
```

Typical complexity with adjacency list + binary heap:

```text
O((V + E) log V)
```

Often simplified to:

```text
O(E log V)
```

---

# 25. Union-Find / Disjoint Set Union

Union-Find tracks which items belong to the same connected component.

Operations:

```text
find(x)
union(a, b)
```

Optimizations:

- Path compression
- Union by rank/size

---

## 25.1 Implementation

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]

    def union(self, a, b):
        root_a = self.find(a)
        root_b = self.find(b)

        if root_a == root_b:
            return False

        if self.size[root_a] < self.size[root_b]:
            root_a, root_b = root_b, root_a

        self.parent[root_b] = root_a
        self.size[root_a] += self.size[root_b]

        return True
```

Amortized complexity is extremely close to constant:

```text
O(α(n))
```

where `α` is the inverse Ackermann function.

---

## 25.2 Use Cases

- Connectivity queries
- Detect cycles
- Kruskal's MST
- Network grouping
- Account merging
- Dynamic component tracking

---

# 26. Greedy Algorithms

A greedy algorithm chooses the locally best decision at each step.

Greedy does **not** always work.

You need a reason or proof that local optimal choices lead to a global optimum.

---

## 26.1 Activity Selection

Choose the maximum number of non-overlapping activities.

Greedy idea:

> Always choose the activity that finishes earliest.

```python
def max_activities(intervals):
    intervals.sort(key=lambda x: x[1])

    count = 0
    last_end = float("-inf")

    for start, end in intervals:
        if start >= last_end:
            count += 1
            last_end = end

    return count
```

---

## 26.2 Greedy Clues

Problems involving:

- Earliest finish
- Smallest/largest available choice
- Minimizing waiting
- Maximizing count
- Scheduling
- Interval selection
- Huffman coding
- Minimum spanning tree

may involve greedy reasoning.

---

## 26.3 How to Validate Greedy Logic

Ask:

1. Can I exchange an optimal solution's first choice with my greedy choice without making it worse?
2. Does the remaining problem have the same structure?
3. Can local decisions harm a later requirement?
4. Is there a known counterexample?

---

# 27. Backtracking

Backtracking explores possibilities and undoes decisions.

Template:

```python
def backtrack(state):
    if goal_reached(state):
        save_solution(state)
        return

    for choice in choices(state):
        make_choice(choice)
        backtrack(state)
        undo_choice(choice)
```

---

## 27.1 Generate Subsets

```python
def subsets(nums):
    result = []
    path = []

    def backtrack(index):
        if index == len(nums):
            result.append(path.copy())
            return

        # Exclude
        backtrack(index + 1)

        # Include
        path.append(nums[index])
        backtrack(index + 1)
        path.pop()

    backtrack(0)
    return result
```

Complexity:

```text
O(2^n)
```

because there are `2^n` subsets.

---

## 27.2 Generate Permutations

```python
def permutations(nums):
    result = []
    path = []
    used = [False] * len(nums)

    def backtrack():
        if len(path) == len(nums):
            result.append(path.copy())
            return

        for i in range(len(nums)):
            if used[i]:
                continue

            used[i] = True
            path.append(nums[i])

            backtrack()

            path.pop()
            used[i] = False

    backtrack()
    return result
```

---

## 27.3 Combination Sum Style

```python
def combination_sum(candidates, target):
    result = []
    path = []

    def backtrack(start, remaining):
        if remaining == 0:
            result.append(path.copy())
            return

        if remaining < 0:
            return

        for i in range(start, len(candidates)):
            value = candidates[i]

            path.append(value)
            backtrack(i, remaining - value)
            path.pop()

    backtrack(0, target)
    return result
```

---

## 27.4 Backtracking Use Cases

- Sudoku
- N-Queens
- Word search
- Permutations
- Combinations
- Subsets
- Constraint satisfaction
- Maze/path enumeration

---

# 28. Dynamic Programming

Dynamic Programming (DP) solves problems with overlapping subproblems and optimal substructure.

Two major styles:

```text
Top-down → recursion + memoization
Bottom-up → iterative tabulation
```

---

## 28.1 How to Recognize DP

Common clues:

```text
maximum / minimum
number of ways
can we reach?
best possible
choose / skip
subsequence
partition
paths
state depends on previous state
```

DP often appears when brute-force recursion repeats the same states.

---

## 28.2 Fibonacci — Bad Recursive Version

```python
def fib(n):
    if n <= 1:
        return n

    return fib(n - 1) + fib(n - 2)
```

Complexity is exponential.

---

## 28.3 Memoization

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n

    return fib(n - 1) + fib(n - 2)
```

Complexity:

```text
Time: O(n)
Space: O(n)
```

---

## 28.4 Tabulation

```python
def fib(n):
    if n <= 1:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]
```

---

## 28.5 Space Optimization

```python
def fib(n):
    if n <= 1:
        return n

    prev2 = 0
    prev1 = 1

    for _ in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1
```

Space:

```text
O(1)
```

---

## 28.6 House Robber

You cannot take adjacent houses.

```python
def rob(nums):
    prev2 = 0
    prev1 = 0

    for money in nums:
        current = max(
            prev1,
            prev2 + money,
        )

        prev2 = prev1
        prev1 = current

    return prev1
```

State meaning:

```text
best answer up to current position
```

Transition:

```text
max(
    skip current,
    take current + best before previous
)
```

---

## 28.7 0/1 Knapsack

Each item can be chosen at most once.

State:

```text
dp[i][capacity]
```

Possible meaning:

```text
Maximum value using first i items within capacity
```

Transition:

```text
skip item
or
take item if it fits
```

Space-optimized implementation:

```python
def knapsack(weights, values, capacity):
    dp = [0] * (capacity + 1)

    for weight, value in zip(weights, values):
        for c in range(capacity, weight - 1, -1):
            dp[c] = max(
                dp[c],
                dp[c - weight] + value,
            )

    return dp[capacity]
```

Why iterate capacity backwards?

To prevent the same item from being reused multiple times.

---

## 28.8 Coin Change — Minimum Coins

```python
def coin_change(coins, amount):
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0

    for value in range(1, amount + 1):
        for coin in coins:
            if coin <= value:
                dp[value] = min(
                    dp[value],
                    dp[value - coin] + 1,
                )

    return -1 if dp[amount] == float("inf") else dp[amount]
```

---

## 28.9 Longest Common Subsequence

For strings `a` and `b`:

```python
def lcs(a, b):
    rows = len(a) + 1
    cols = len(b) + 1

    dp = [[0] * cols for _ in range(rows)]

    for i in range(1, rows):
        for j in range(1, cols):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(
                    dp[i - 1][j],
                    dp[i][j - 1],
                )

    return dp[-1][-1]
```

---

## 28.10 Longest Increasing Subsequence

Simple DP:

```python
def lis_length(nums):
    if not nums:
        return 0

    dp = [1] * len(nums)

    for i in range(len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
```

Complexity:

```text
O(n²)
```

There is also an `O(n log n)` solution using binary search.

---

## 28.11 Grid DP

Count paths from top-left to bottom-right while moving right/down:

```python
def unique_paths(rows, cols):
    dp = [1] * cols

    for _ in range(1, rows):
        for c in range(1, cols):
            dp[c] += dp[c - 1]

    return dp[-1]
```

---

## 28.12 DP Design Framework

For each DP problem, define:

1. **State** — what does `dp[...]` mean?
2. **Transition** — how do previous states produce this state?
3. **Base case**
4. **Evaluation order**
5. **Answer location**
6. **Possible memory optimization**

Never code DP before clearly defining the state.

---

# 29. Bit Manipulation

Computers represent integers using bits.

Useful operators:

```python
a & b   # AND
a | b   # OR
a ^ b   # XOR
~a      # NOT
a << k  # shift left
a >> k  # shift right
```

---

## 29.1 Check Odd or Even

```python
if n & 1:
    print("odd")
else:
    print("even")
```

---

## 29.2 Check k-th Bit

```python
def is_bit_set(n, k):
    return bool(n & (1 << k))
```

---

## 29.3 Set k-th Bit

```python
n |= 1 << k
```

---

## 29.4 Clear k-th Bit

```python
n &= ~(1 << k)
```

---

## 29.5 Toggle k-th Bit

```python
n ^= 1 << k
```

---

## 29.6 Single Number Using XOR

Every value appears twice except one.

```python
def single_number(nums):
    result = 0

    for value in nums:
        result ^= value

    return result
```

Why?

```text
x ^ x = 0
x ^ 0 = x
```

---

## 29.7 Count Set Bits

Python:

```python
n.bit_count()
```

Manual Brian Kernighan method:

```python
def count_bits(n):
    count = 0

    while n:
        n &= n - 1
        count += 1

    return count
```

Each iteration removes the lowest set bit.

---

# 30. Monotonic Stack and Monotonic Queue

These structures preserve increasing or decreasing order.

They are extremely useful when the problem asks about:

```text
next greater
next smaller
previous greater
previous smaller
largest rectangle
daily temperatures
sliding-window max/min
```

---

## 30.1 Next Greater Element

```python
def next_greater(nums):
    result = [-1] * len(nums)
    stack = []

    for i, value in enumerate(nums):
        while stack and nums[stack[-1]] < value:
            index = stack.pop()
            result[index] = value

        stack.append(i)

    return result
```

Each index enters and leaves the stack once.

Complexity:

```text
O(n)
```

---

## 30.2 Sliding Window Maximum

```python
from collections import deque

def max_sliding_window(nums, k):
    dq = deque()
    result = []

    for right, value in enumerate(nums):
        while dq and dq[0] <= right - k:
            dq.popleft()

        while dq and nums[dq[-1]] <= value:
            dq.pop()

        dq.append(right)

        if right >= k - 1:
            result.append(nums[dq[0]])

    return result
```

Complexity:

```text
O(n)
```

---

# 31. Advanced String Algorithms

For normal interview work, hashes, two pointers, and sliding windows cover many string problems. Advanced algorithms become useful for specialized search workloads.

---

## 31.1 KMP — Knuth-Morris-Pratt

KMP finds a pattern inside text in:

```text
O(n + m)
```

where:

```text
n = text length
m = pattern length
```

The key idea is an **LPS array**:

```text
Longest Proper Prefix which is also a Suffix
```

```python
def build_lps(pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1

    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1

        elif length:
            length = lps[length - 1]

        else:
            lps[i] = 0
            i += 1

    return lps


def kmp_search(text, pattern):
    if pattern == "":
        return 0

    lps = build_lps(pattern)

    i = 0
    j = 0

    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1

            if j == len(pattern):
                return i - j

        elif j:
            j = lps[j - 1]

        else:
            i += 1

    return -1
```

---

## 31.2 Rabin-Karp

Uses rolling hash to search patterns.

Conceptual steps:

```text
1. Hash pattern.
2. Hash first text window.
3. Slide window.
4. Update hash efficiently.
5. Compare actual strings when hashes match.
```

Useful for:

- Multiple pattern matching variants
- Rolling-hash problems
- Duplicate substring ideas

Beware of hash collisions.

---

## 31.3 Z Algorithm

Computes for each position how many characters match the prefix.

Useful for:

- Pattern matching
- Prefix occurrence problems
- String periodicity

---

## 31.4 Manacher's Algorithm

Finds longest palindromic substring in linear time:

```text
O(n)
```

It is advanced and usually unnecessary unless constraints demand it.

---

# 32. Range Query Data Structures

Prefix sums work well for static sums. If values change, more powerful structures may be needed.

---

## 32.1 Fenwick Tree / Binary Indexed Tree

Supports:

```text
Point update: O(log n)
Prefix sum: O(log n)
Range sum: O(log n)
```

```python
class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def add(self, index, delta):
        index += 1

        while index <= self.n:
            self.tree[index] += delta
            index += index & -index

    def prefix_sum(self, index):
        result = 0
        index += 1

        while index > 0:
            result += self.tree[index]
            index -= index & -index

        return result

    def range_sum(self, left, right):
        if left == 0:
            return self.prefix_sum(right)

        return (
            self.prefix_sum(right)
            - self.prefix_sum(left - 1)
        )
```

---

## 32.2 Segment Tree

A segment tree can support range queries and updates.

Typical:

```text
Build: O(n)
Query: O(log n)
Point update: O(log n)
```

Example range-sum segment tree:

```python
class SegmentTree:
    def __init__(self, nums):
        n = 1

        while n < len(nums):
            n *= 2

        self.n = n
        self.tree = [0] * (2 * n)

        for i, value in enumerate(nums):
            self.tree[n + i] = value

        for i in range(n - 1, 0, -1):
            self.tree[i] = (
                self.tree[2 * i]
                + self.tree[2 * i + 1]
            )

    def update(self, index, value):
        pos = self.n + index
        self.tree[pos] = value
        pos //= 2

        while pos:
            self.tree[pos] = (
                self.tree[2 * pos]
                + self.tree[2 * pos + 1]
            )
            pos //= 2

    def query(self, left, right):
        # inclusive [left, right]
        left += self.n
        right += self.n

        result = 0

        while left <= right:
            if left % 2 == 1:
                result += self.tree[left]
                left += 1

            if right % 2 == 0:
                result += self.tree[right]
                right -= 1

            left //= 2
            right //= 2

        return result
```

Segment trees can also support:

- Minimum
- Maximum
- GCD
- Frequency
- Lazy range updates

---

## 32.3 Sparse Table

Useful for **static idempotent range queries**, such as range minimum.

Typical:

```text
Build: O(n log n)
Query: O(1) for RMQ
Updates: not efficient
```

---

# 33. Advanced Graph Algorithms

## 33.1 Bellman-Ford

Can handle negative-weight edges.

It can also detect a reachable negative cycle.

Complexity:

```text
O(VE)
```

```python
def bellman_ford(n, edges, source):
    dist = [float("inf")] * n
    dist[source] = 0

    for _ in range(n - 1):
        changed = False

        for u, v, weight in edges:
            if dist[u] != float("inf") and dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                changed = True

        if not changed:
            break

    for u, v, weight in edges:
        if dist[u] != float("inf") and dist[u] + weight < dist[v]:
            raise ValueError("negative cycle detected")

    return dist
```

---

## 33.2 Floyd-Warshall

All-pairs shortest paths.

```python
def floyd_warshall(matrix):
    n = len(matrix)
    dist = [row[:] for row in matrix]

    for k in range(n):
        for i in range(n):
            for j in range(n):
                dist[i][j] = min(
                    dist[i][j],
                    dist[i][k] + dist[k][j],
                )

    return dist
```

Complexity:

```text
Time: O(V³)
Space: O(V²)
```

---

## 33.3 Minimum Spanning Tree

A Minimum Spanning Tree connects all vertices of a connected weighted undirected graph with minimum total edge weight and no cycles.

Important algorithms:

```text
Kruskal
Prim
```

---

## 33.4 Kruskal's Algorithm

1. Sort edges by weight.
2. Add smallest edge that does not create a cycle.
3. Use Union-Find.

```python
def kruskal(n, edges):
    dsu = DSU(n)
    total = 0
    chosen = []

    for weight, u, v in sorted(edges):
        if dsu.union(u, v):
            total += weight
            chosen.append((u, v, weight))

    if len(chosen) != n - 1:
        return None

    return total, chosen
```

Complexity is dominated by edge sorting:

```text
O(E log E)
```

---

## 33.5 Prim's Algorithm

Uses a priority queue to grow one connected tree.

Useful when adjacency-list representation is natural.

---

## 33.6 Strongly Connected Components

In a directed graph, an SCC is a maximal group where every node can reach every other node.

Algorithms:

- Kosaraju
- Tarjan

Applications:

- Dependency analysis
- Deadlock/cycle groups
- Condensation DAG
- Program/module relationships

---

# 34. Advanced Tree Concepts

## 34.1 Balanced Trees

A normal BST can become:

```text
1
 \
  2
   \
    3
     \
      4
```

Then operations degrade to:

```text
O(n)
```

Balanced search trees attempt to maintain height around:

```text
O(log n)
```

Examples:

- AVL Tree
- Red-Black Tree

Python does not include a built-in general-purpose balanced BST.

---

## 34.2 AVL Tree

An AVL tree maintains strict balance:

```text
balance factor = height(left) - height(right)
```

Allowed values are generally:

```text
-1, 0, +1
```

Rotations restore balance.

---

## 34.3 Red-Black Tree

A Red-Black Tree maintains balance through color and structural invariants.

It is less strictly balanced than AVL but provides:

```text
Search: O(log n)
Insert: O(log n)
Delete: O(log n)
```

---

## 34.4 B-Tree and B+ Tree

Designed for storage systems where accessing disk/page blocks is expensive.

Common use:

- Databases
- File systems
- Indexes

B+ trees are especially common for database indexes because internal nodes guide search while leaf nodes store/search ordered entries efficiently.

---

## 34.5 Lowest Common Ancestor

For a general binary tree:

```python
def lowest_common_ancestor(root, p, q):
    if not root or root is p or root is q:
        return root

    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)

    if left and right:
        return root

    return left or right
```

---

# 35. Algorithm Design Paradigms

Algorithms are easier to understand when grouped by design style.

---

## 35.1 Brute Force

Try all possibilities.

Advantages:

- Easy to derive
- Useful for validation
- Good starting point

Disadvantages:

- Often too slow

Example:

```text
Two Sum with nested loops → O(n²)
```

---

## 35.2 Divide and Conquer

Steps:

```text
Divide problem
Solve smaller pieces
Combine results
```

Examples:

- Merge sort
- Quick sort
- Binary search
- Closest-pair style algorithms

---

## 35.3 Greedy

Choose the best immediate option.

Examples:

- Interval scheduling
- Kruskal
- Prim
- Huffman coding

---

## 35.4 Dynamic Programming

Reuse overlapping subproblems.

Examples:

- Knapsack
- LCS
- Coin change
- Grid path
- LIS

---

## 35.5 Backtracking

Explore decision tree and undo choices.

Examples:

- N-Queens
- Sudoku
- Permutations

---

## 35.6 Branch and Bound

Explore candidates while using bounds to eliminate branches that cannot beat the current best solution.

Used in optimization problems.

---

## 35.7 Randomized Algorithms

Randomness can improve expected performance or simplify logic.

Examples:

- Randomized quicksort pivot
- Reservoir sampling
- Randomized hashing ideas

---

# 36. Common Problem-Solving Patterns

Learning patterns is one of the fastest ways to improve.

## Pattern 1 — Hash Map for Complement

Clue:

```text
pair values
target sum
lookup previous value
```

Example:

```text
Two Sum
```

---

## Pattern 2 — Two Pointers

Clue:

```text
sorted array
pair
palindrome
opposite ends
remove duplicates
```

---

## Pattern 3 — Sliding Window

Clue:

```text
contiguous
substring
subarray
longest/shortest
at most k
exactly k
```

---

## Pattern 4 — Prefix Sum

Clue:

```text
many range-sum queries
subarray sum
cumulative values
```

---

## Pattern 5 — Fast/Slow Pointer

Clue:

```text
linked list cycle
middle node
cycle entrance
```

---

## Pattern 6 — Binary Search

Clue:

```text
sorted
monotonic
minimum possible answer
maximum feasible answer
```

---

## Pattern 7 — Monotonic Stack

Clue:

```text
next greater
next smaller
nearest greater
histogram
temperatures
```

---

## Pattern 8 — Heap / Top-K

Clue:

```text
largest k
smallest k
continuously changing minimum/maximum
priority
merge sorted streams
```

---

## Pattern 9 — BFS

Clue:

```text
minimum number of steps
unweighted shortest path
level traversal
nearest
```

---

## Pattern 10 — DFS

Clue:

```text
components
all paths
tree recursion
exploration
cycle/connectivity
```

---

## Pattern 11 — Union-Find

Clue:

```text
dynamic connectivity
merge groups
number of components
redundant connection
```

---

## Pattern 12 — Backtracking

Clue:

```text
generate all
combinations
permutations
valid configurations
constraint search
```

---

## Pattern 13 — Dynamic Programming

Clue:

```text
optimal answer
number of ways
repeated states
choose/skip
subsequence
```

---

## Pattern 14 — Greedy

Clue:

```text
schedule
interval
local best
minimum resources
maximum number selected
```

---

## Pattern 15 — Topological Sort

Clue:

```text
dependencies
prerequisites
before/after ordering
DAG
```

---

## Pattern 16 — Trie

Clue:

```text
prefix
dictionary
autocomplete
word search
```

---

## Pattern 17 — Matrix Traversal

Typical directions:

```python
DIRECTIONS = [
    (1, 0),
    (-1, 0),
    (0, 1),
    (0, -1),
]
```

Boundary check:

```python
0 <= r < rows and 0 <= c < cols
```

Common tasks:

- Number of islands
- Flood fill
- Maze
- Shortest path
- Word search

---

# 37. Python-Specific DSA Optimizations

## 37.1 Use `deque` for Queue

Bad:

```python
queue.pop(0)
```

Better:

```python
queue.popleft()
```

with `collections.deque`.

---

## 37.2 Use Sets for Membership

Bad for repeated membership checks:

```python
if value in large_list:
```

Often better:

```python
lookup = set(large_list)

if value in lookup:
```

Trade-off:

```text
Extra memory for faster average membership
```

---

## 37.3 Avoid Unnecessary Copies

This creates a copy:

```python
arr[:]
```

So does:

```python
list(arr)
```

And string/list slicing generally copies data.

---

## 37.4 String Construction

Prefer:

```python
pieces = []
pieces.append("A")
pieces.append("B")

result = "".join(pieces)
```

---

## 37.5 Use Built-ins

Built-ins are usually implemented efficiently.

Prefer:

```python
sum(nums)
min(nums)
max(nums)
sorted(nums)
```

when the purpose is not to demonstrate the underlying algorithm.

---

## 37.6 Use Tuple Keys

Coordinates:

```python
visited = set()

visited.add((row, col))
```

Tuples containing hashable objects can be dictionary/set keys.

---

## 37.7 Memoization

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def solve(state):
    ...
```

Remember:

> All arguments used as cache keys must be hashable.

A list cannot be directly used as an `lru_cache` key; convert to a tuple when appropriate.

---

## 37.8 Heap Tuple Ordering

```python
heapq.heappush(heap, (priority, item))
```

Python compares tuple elements from left to right.

If two priorities are equal and `item` objects cannot be compared, include a numeric tie-breaker:

```python
(priority, sequence_number, item)
```

---

## 37.9 Beware of Mutable 2D Initialization

Wrong:

```python
grid = [[0] * cols] * rows
```

Rows reference the same inner list.

Correct:

```python
grid = [[0] * cols for _ in range(rows)]
```

---

## 37.10 Python Integer Behavior

Python integers have arbitrary precision, so ordinary integer overflow is not a concern like it is in fixed-width integer languages.

However:

- Large integer arithmetic costs more.
- Bit-manipulation assumptions involving fixed-width signed integers may require care.

---

# 38. Testing and Debugging DSA Solutions

Do not test only the happy path.

## 38.1 Essential Edge Cases

For arrays:

```text
[]
[1]
[1, 1]
already sorted
reverse sorted
all equal
negative values
duplicates
very large values
```

For strings:

```text
""
"a"
"aaaa"
special characters
case differences
spaces
```

For trees:

```text
empty tree
single node
only-left chain
only-right chain
balanced tree
duplicates if allowed
```

For graphs:

```text
one node
disconnected graph
cycle
self-loop
parallel edges
unreachable target
```

---

## 38.2 Brute-Force Oracle

A powerful testing method:

1. Write a slow but obviously correct solution.
2. Write optimized solution.
3. Generate many small random inputs.
4. Compare results.

Example:

```python
import random

def brute(nums):
    # slow but simple
    ...

def optimized(nums):
    ...

for _ in range(1000):
    nums = [random.randint(-5, 5) for _ in range(8)]

    assert brute(nums) == optimized(nums)
```

This is especially useful for:

- DP
- Greedy
- Sliding window
- Graph problems
- Complex indexing

---

## 38.3 Invariants

An invariant is something that remains true throughout an algorithm.

Examples:

Binary search:

```text
If target exists, it is inside the current search range.
```

Monotonic stack:

```text
Stack remains increasing/decreasing by chosen rule.
```

Sliding window:

```text
Current window always satisfies the maintained condition.
```

Writing the invariant often reveals bugs.

---

# 39. Interview Problem-Solving Framework

When given a DSA problem, avoid immediately typing code.

Use this sequence.

## Step 1 — Restate the Problem

Explain it in your own words.

---

## Step 2 — Clarify Inputs

Ask or infer:

```text
Can input be empty?
Are duplicates allowed?
Is it sorted?
Can numbers be negative?
How large can n be?
Can I modify the input?
What should happen if no answer exists?
```

---

## Step 3 — Work Through an Example

Use a small input manually.

---

## Step 4 — Describe Brute Force

Example:

```text
Try every pair: O(n²)
```

This shows understanding.

---

## Step 5 — Identify the Bottleneck

Ask:

```text
What repeated work makes brute force slow?
```

---

## Step 6 — Select a Pattern

Possible structures:

```text
Hash map
Two pointers
Sliding window
Heap
Binary search
BFS/DFS
DP
Greedy
```

---

## Step 7 — State Complexity Before Coding

Example:

```text
I'll use a hash map to reduce lookup from O(n) to O(1) average,
making the full solution O(n) time and O(n) space.
```

---

## Step 8 — Code Clearly

Prefer:

```python
left
right
current_sum
visited
distance
```

instead of:

```python
a
b
x
tmp2
```

unless the variable is truly conventional and local.

---

## Step 9 — Test Edge Cases

Walk through:

```text
small input
empty input
duplicate case
boundary case
```

---

## Step 10 — Reconfirm Complexity

State final:

```text
Time: ...
Space: ...
```

---

# 40. Competitive Programming Template

A simple Python template:

```python
import sys
from collections import defaultdict, deque, Counter
from heapq import heappush, heappop
from bisect import bisect_left, bisect_right

input = sys.stdin.readline


def solve():
    n = int(input())
    nums = list(map(int, input().split()))

    # solution here


if __name__ == "__main__":
    solve()
```

For multiple test cases:

```python
def solve():
    t = int(input())

    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split()))

        # process
```

---

## 40.1 Recursion in Competitive Programming

Some deep recursive graph/tree traversals can hit Python's recursion limit.

You may see:

```python
import sys
sys.setrecursionlimit(1_000_000)
```

Use this carefully.

Increasing the recursion limit does not eliminate stack-memory risk.

Iterative traversal is often safer.

---

# 41. Common Mistakes and Anti-Patterns

## Mistake 1 — Using `pop(0)` as Queue

```python
queue.pop(0)
```

is O(n).

Use:

```python
deque.popleft()
```

---

## Mistake 2 — Forgetting Visited Set

Graph traversal without visited tracking can revisit nodes indefinitely in cyclic graphs.

---

## Mistake 3 — Incorrect Binary Search Boundaries

Common bugs:

```text
left < right vs left <= right
mid update
right = mid vs right = mid - 1
```

Choose a binary-search template and understand its invariant.

---

## Mistake 4 — Returning Too Early in Recursion

Incorrect placement of `return` can prevent exploration of alternative branches.

---

## Mistake 5 — Shared 2D Lists

Wrong:

```python
matrix = [[0] * 3] * 3
```

Correct:

```python
matrix = [[0] * 3 for _ in range(3)]
```

---

## Mistake 6 — Modifying Collection While Iterating

This can skip data or cause logical errors.

Prefer iterating over a copy or constructing a new result.

---

## Mistake 7 — Missing Copy in Backtracking

Wrong:

```python
result.append(path)
```

when `path` continues changing.

Correct:

```python
result.append(path.copy())
```

---

## Mistake 8 — Using Dijkstra with Negative Edges

Dijkstra assumes non-negative weights.

Use another algorithm such as Bellman-Ford when negative edges matter.

---

## Mistake 9 — Calling a Greedy Choice "Obviously Optimal"

A greedy algorithm needs justification.

---

## Mistake 10 — Optimizing Before Understanding

First derive correctness. Then optimize bottlenecks.

---

# 42. DSA Roadmap

A structured progression:

## Phase 1 — Foundations

Learn:

- Python basics
- Big-O
- Arrays
- Strings
- Hash maps
- Sets

Target:

```text
Understand complexity and basic iteration.
```

---

## Phase 2 — Linear Data Structures

Learn:

- Linked lists
- Stack
- Queue
- Deque

Target:

```text
Recognize LIFO/FIFO and pointer-based problems.
```

---

## Phase 3 — Core Patterns

Learn:

- Two pointers
- Sliding window
- Prefix sum
- Binary search
- Intervals

Target:

```text
Solve medium array/string problems efficiently.
```

---

## Phase 4 — Recursion and Trees

Learn:

- Recursion
- Binary trees
- DFS
- BFS
- BST

Target:

```text
Become comfortable with recursive state.
```

---

## Phase 5 — Heaps and Graphs

Learn:

- Heap
- Graph representation
- BFS/DFS
- Topological sort
- Dijkstra
- DSU

Target:

```text
Solve dependency, shortest-path, and connectivity problems.
```

---

## Phase 6 — Backtracking and Greedy

Learn:

- Subsets
- Permutations
- Combinations
- Constraint solving
- Greedy reasoning

---

## Phase 7 — Dynamic Programming

Progress in this order:

```text
1D DP
Grid DP
Knapsack
Subsequence DP
String DP
Interval/state DP
Tree DP
Bitmask DP
```

---

## Phase 8 — Advanced

Learn as needed:

- Monotonic stack/queue
- Trie
- KMP
- Fenwick tree
- Segment tree
- MST
- Bellman-Ford
- SCC
- Advanced DP
- Bitmasking

---

# 43. Practice Problem Checklist

Use this as a study tracker.

## Arrays

- [ ] Find maximum/minimum
- [ ] Reverse array
- [ ] Rotate array
- [ ] Move zeroes
- [ ] Remove duplicates
- [ ] Majority element
- [ ] Maximum subarray
- [ ] Product except self
- [ ] Merge sorted arrays
- [ ] Missing number

## Strings

- [ ] Palindrome
- [ ] Valid anagram
- [ ] Character frequency
- [ ] Longest common prefix
- [ ] Longest unique substring
- [ ] Group anagrams
- [ ] String compression
- [ ] Minimum window substring

## Hashing

- [ ] Two Sum
- [ ] Duplicate detection
- [ ] Frequency map
- [ ] First unique element
- [ ] Longest consecutive sequence
- [ ] Subarray sum equals k

## Linked Lists

- [ ] Reverse linked list
- [ ] Find middle
- [ ] Detect cycle
- [ ] Find cycle start
- [ ] Merge sorted lists
- [ ] Remove nth from end
- [ ] Add two numbers
- [ ] Copy random-pointer list

## Stack / Queue

- [ ] Valid parentheses
- [ ] Min stack
- [ ] Evaluate RPN
- [ ] Implement queue with stacks
- [ ] Implement stack with queues
- [ ] Daily temperatures
- [ ] Largest rectangle
- [ ] Sliding-window maximum

## Binary Search

- [ ] Standard search
- [ ] First occurrence
- [ ] Last occurrence
- [ ] Search insert position
- [ ] Rotated sorted array
- [ ] Find minimum rotated
- [ ] Peak element
- [ ] Binary search on answer

## Trees

- [ ] Preorder
- [ ] Inorder
- [ ] Postorder
- [ ] Level order
- [ ] Maximum depth
- [ ] Same tree
- [ ] Invert tree
- [ ] Diameter
- [ ] Balanced tree
- [ ] Lowest common ancestor
- [ ] Validate BST
- [ ] Kth smallest BST
- [ ] Serialize/deserialize tree

## Heaps

- [ ] Kth largest
- [ ] Top K frequent
- [ ] Merge K sorted lists
- [ ] Find median from data stream
- [ ] Task scheduling

## Graphs

- [ ] BFS
- [ ] DFS
- [ ] Number of islands
- [ ] Clone graph
- [ ] Connected components
- [ ] Course schedule
- [ ] Topological sort
- [ ] Shortest unweighted path
- [ ] Dijkstra
- [ ] Network delay
- [ ] DSU connectivity
- [ ] Minimum spanning tree

## Backtracking

- [ ] Subsets
- [ ] Permutations
- [ ] Combination sum
- [ ] Generate parentheses
- [ ] Word search
- [ ] N-Queens
- [ ] Sudoku solver

## Dynamic Programming

- [ ] Fibonacci
- [ ] Climbing stairs
- [ ] House robber
- [ ] Coin change
- [ ] 0/1 knapsack
- [ ] Partition equal subset sum
- [ ] Unique paths
- [ ] Minimum path sum
- [ ] Longest increasing subsequence
- [ ] Longest common subsequence
- [ ] Edit distance
- [ ] Decode ways
- [ ] Word break

## Advanced

- [ ] Trie
- [ ] KMP
- [ ] Fenwick tree
- [ ] Segment tree
- [ ] Kruskal
- [ ] Prim
- [ ] Bellman-Ford
- [ ] SCC
- [ ] Bitmask DP

---

# 44. Cheat Sheets

## 44.1 Complexity Cheat Sheet

### Python List

```text
Index                O(1)
Append               O(1) amortized
Pop end              O(1)
Insert/delete front  O(n)
Search               O(n)
Sort                 O(n log n)
```

### Dictionary / Set

```text
Lookup   O(1) average
Insert   O(1) average
Delete   O(1) average
```

### Heap

```text
Peek min   O(1)
Push       O(log n)
Pop        O(log n)
Heapify    O(n)
```

### BST

Balanced:

```text
Search  O(log n)
Insert  O(log n)
Delete  O(log n)
```

Worst skewed:

```text
O(n)
```

### Graph

```text
BFS  O(V + E)
DFS  O(V + E)
```

---

## 44.2 Pattern Selection Cheat Sheet

If the question says...

```text
"pair in sorted array"
→ Two pointers

"substring/subarray, longest/shortest"
→ Sliding window

"many range sum queries"
→ Prefix sum

"minimum steps in unweighted graph"
→ BFS

"all possibilities"
→ Backtracking

"dependencies/order"
→ Topological sort

"shortest weighted path, non-negative"
→ Dijkstra

"connectivity after merging"
→ Union-Find

"top k"
→ Heap

"next greater/smaller"
→ Monotonic stack

"prefix search"
→ Trie

"number of ways / min / max with repeated states"
→ Dynamic programming

"minimum feasible / maximum feasible"
→ Binary search on answer
```

---

## 44.3 Useful Python Snippets

### Frequency

```python
from collections import Counter

freq = Counter(nums)
```

### Group Values

```python
from collections import defaultdict

groups = defaultdict(list)

for key, value in records:
    groups[key].append(value)
```

### Queue

```python
from collections import deque

q = deque([start])

while q:
    node = q.popleft()
```

### Min Heap

```python
import heapq

heap = []
heapq.heappush(heap, value)
value = heapq.heappop(heap)
```

### Binary Search

```python
left = 0
right = len(nums) - 1

while left <= right:
    mid = (left + right) // 2
```

### Four-Direction Grid

```python
for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
    nr = r + dr
    nc = c + dc
```

---

# 45. Mini Projects Using DSA

Learning becomes stronger when DSA is used outside textbook problems.

## Project 1 — Autocomplete Engine

Use:

```text
Trie
Priority ranking
Hash map
```

Features:

- Insert words
- Prefix search
- Top suggestions
- Usage frequency

---

## Project 2 — Route Finder

Use:

```text
Graph
Dijkstra
BFS
Heap
```

Model:

```text
City/intersection → node
Road → edge
Distance/time → weight
```

---

## Project 3 — LRU Cache

Use:

```text
Hash map
Doubly linked list
```

Goal:

```text
get(): O(1)
put(): O(1)
```

Conceptual structure:

```text
Dictionary:
key → linked-list node

Doubly linked list:
least recent ← ... → most recent
```

---

## Project 4 — Task Scheduler

Use:

```text
Priority queue
Queue
Hash map
```

Features:

- Priority
- Deadline
- Waiting jobs
- Completed jobs

---

## Project 5 — Dependency Resolver

Use:

```text
Directed graph
Topological sort
Cycle detection
```

Example:

```text
Package A depends on B
B depends on C

Install order:
C → B → A
```

---

## Project 6 — Social Network Analyzer

Use:

```text
Graph
BFS
DFS
Union-Find
```

Features:

- Friend suggestions
- Connected communities
- Degrees of separation
- Reachability

---

## Project 7 — Search Suggestion Service

Use:

```text
Trie
Heap
Frequency map
```

Return top suggestions for a prefix.

---

## Project 8 — Mini Spreadsheet Formula Dependency Engine

Use:

```text
Graph
Topological sort
Cycle detection
```

If:

```text
C1 = A1 + B1
D1 = C1 * 2
```

dependency graph determines calculation order.

---

# 46. Final Revision Strategy

A strong DSA learner should be able to answer four questions for every important topic:

```text
1. What problem does this solve?
2. How does it work?
3. What is its time/space complexity?
4. When should I choose it instead of another technique?
```

A recommended weekly revision cycle:

```text
Day 1: Arrays + hashing
Day 2: Two pointers + sliding window
Day 3: Stack + queue + linked list
Day 4: Binary search + intervals + heap
Day 5: Trees + graphs
Day 6: Greedy + backtracking + DP
Day 7: Mixed timed practice + revision
```

---

# Appendix A — Full DSA Decision Guide

When reading a new problem, ask these questions in order.

## A. Is the input tiny?

If yes, brute force/backtracking may be acceptable.

---

## B. Does order matter?

If no, consider:

```text
set
dictionary
Counter
sorting
```

---

## C. Is the data sorted?

Consider:

```text
binary search
two pointers
bisect
```

---

## D. Is the answer based on contiguous elements?

Consider:

```text
sliding window
prefix sum
Kadane
monotonic deque
```

---

## E. Do we repeatedly need minimum/maximum?

Consider:

```text
heap
monotonic stack
monotonic queue
```

---

## F. Is there hierarchy?

Consider:

```text
tree
DFS
BFS
```

---

## G. Are there relationships or routes?

Consider:

```text
graph
BFS
DFS
Dijkstra
Union-Find
```

---

## H. Are there prerequisites?

Consider:

```text
topological sort
```

---

## I. Must we generate every valid possibility?

Consider:

```text
backtracking
```

---

## J. Does brute-force recursion repeat states?

Consider:

```text
memoization
dynamic programming
```

---

## K. Is feasibility monotonic?

Consider:

```text
binary search on answer
```

---

# Appendix B — Deeper Scenario Examples

## Scenario 1 — Fraud Detection Duplicate Transaction IDs

You receive millions of transaction IDs and need to detect duplicates.

Naive approach:

```text
Compare each transaction with every other transaction
O(n²)
```

Better:

```python
def has_duplicate(ids):
    seen = set()

    for transaction_id in ids:
        if transaction_id in seen:
            return True

        seen.add(transaction_id)

    return False
```

Average:

```text
O(n) time
O(n) space
```

Data structure:

```text
Hash set
```

---

## Scenario 2 — Browser History

Requirements:

```text
Visit page
Go back
Go forward
```

Possible design:

```text
Two stacks
```

or:

```text
Doubly linked list with current pointer
```

This demonstrates that the same product behavior can be modeled with different structures.

---

## Scenario 3 — Customer Support Ticket Priority

Requirement:

```text
Process highest-priority ticket first.
```

Use:

```text
Priority queue / heap
```

If priorities change dynamically, more advanced queue/indexing design may be needed.

---

## Scenario 4 — Employee Reporting Hierarchy

Requirement:

```text
CEO
 ├─ Director A
 │   ├─ Manager
 │   └─ Manager
 └─ Director B
```

Use:

```text
Tree
```

Operations:

- Find descendants → DFS/BFS
- Find reporting depth → tree depth
- Aggregate team metrics → postorder traversal

---

## Scenario 5 — Flight Route Network

Airports:

```text
Vertices
```

Flights:

```text
Edges
```

If all flights count equally:

```text
BFS can find minimum number of hops.
```

If flight costs differ:

```text
Dijkstra can find cheapest route when weights are non-negative.
```

---

## Scenario 6 — Build Pipeline Dependencies

Example:

```text
Compile backend
    ↓
Run backend tests
    ↓
Build package
    ↓
Deploy
```

Use:

```text
Directed Acyclic Graph
Topological sorting
```

A cycle means an impossible dependency chain.

---

## Scenario 7 — Product Search Autocomplete

Search prefix:

```text
"lap"
```

Suggestions:

```text
laptop
laptop stand
laptop bag
```

Use:

```text
Trie
```

Add frequency ranking with:

```text
Hash map + heap
```

---

## Scenario 8 — Stock Price Next Greater Value

Question:

```text
For each day's price, when is the next day with a higher price?
```

Use:

```text
Monotonic stack
```

Instead of comparing each day against all later days.

---

## Scenario 9 — Server Log Requests in Last 5 Minutes

Need to continuously maintain recent requests.

Use:

```text
Queue/deque
```

As current time advances:

```text
append new request
remove requests older than 5 minutes from left
```

---

## Scenario 10 — Cheapest Network Cable Layout

Computers are nodes and possible cables are weighted edges.

Need all computers connected with minimum total cable cost.

Use:

```text
Minimum Spanning Tree
Kruskal or Prim
```

---

# Appendix C — Complexity Reasoning Examples

## Example 1

```python
for i in range(n):
    print(i)
```

Complexity:

```text
O(n)
```

---

## Example 2

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

Complexity:

```text
O(n²)
```

---

## Example 3

```python
i = 1

while i < n:
    i *= 2
```

Values:

```text
1
2
4
8
16
...
```

Number of iterations:

```text
log₂(n)
```

Complexity:

```text
O(log n)
```

---

## Example 4

```python
for i in range(n):
    j = 1

    while j < n:
        j *= 2
```

Outer:

```text
n
```

Inner:

```text
log n
```

Total:

```text
O(n log n)
```

---

## Example 5 — Consecutive Loops

```python
for i in range(n):
    ...

for j in range(n):
    ...
```

Total:

```text
O(n + n)
= O(2n)
= O(n)
```

Big-O ignores constant factors.

---

# Appendix D — When Not to Use a Data Structure

Good DSA is also about avoiding unnecessary complexity.

Do not use:

```text
Trie
```

if a small `set` solves the problem.

Do not use:

```text
Segment tree
```

if one prefix-sum pass solves all queries.

Do not use:

```text
Dijkstra
```

if every edge has equal weight and BFS is sufficient.

Do not use:

```text
Linked list
```

when you need frequent random indexing.

Do not use:

```text
Dynamic programming
```

just because a problem contains "maximum" or "minimum."

Choose the simplest structure that satisfies the complexity requirement.

---

# Appendix E — Recommended Mastery Levels

## Beginner

You should confidently understand:

- Big-O
- Arrays
- Strings
- Dictionaries
- Sets
- Stack
- Queue
- Basic recursion
- Linear search
- Binary search
- Basic sorting

---

## Intermediate

You should confidently solve:

- Two pointers
- Sliding window
- Prefix sums
- Linked lists
- Trees
- Heaps
- BFS/DFS
- Basic graphs
- Backtracking
- Greedy
- Intro DP

---

## Advanced

You should understand:

- Complex DP
- Monotonic structures
- Tries
- Union-Find
- Dijkstra
- MST
- SCC
- Fenwick tree
- Segment tree
- Advanced string algorithms
- Binary search on answer
- Bitmask techniques

---

# Appendix F — Glossary

**Adjacent**  
Two items directly connected or next to each other.

**Ancestor**  
A node above another node in a tree.

**Backtracking**  
Exploring choices while undoing decisions when returning.

**BFS**  
Breadth-First Search; explores level by level.

**BST**  
Binary Search Tree.

**Connected Component**  
A maximal group of mutually reachable nodes in an undirected graph.

**DFS**  
Depth-First Search; explores deeply before backtracking.

**DAG**  
Directed Acyclic Graph.

**Edge**  
A connection between graph vertices.

**Graph**  
A collection of vertices connected by edges.

**Heap**  
Priority-based tree structure with fast min/max access.

**Memoization**  
Caching results of repeated function states.

**Node**  
Element in a linked structure, tree, or graph.

**Prefix**  
Beginning portion of a sequence.

**Queue**  
FIFO structure.

**Recursion**  
Function solving a problem using smaller calls to itself.

**Stable Sort**  
Equal-key elements preserve their original relative order.

**Stack**  
LIFO structure.

**Subarray**  
Contiguous portion of an array.

**Subsequence**  
Elements kept in order but not necessarily contiguous.

**Substring**  
Contiguous portion of a string.

**Tree**  
Hierarchical acyclic connected structure.

**Trie**  
Prefix-oriented tree for strings.

**Vertex**  
Graph node.

---

# Appendix G — DSA Mindset

The most valuable skill is not memorizing hundreds of solutions.

It is being able to transform:

```text
Problem statement
```

into:

```text
Constraints
    ↓
Required complexity
    ↓
Data structure
    ↓
Algorithmic pattern
    ↓
Invariant/state
    ↓
Correct implementation
    ↓
Edge-case validation
```

When stuck, ask:

```text
Can I sort the input?

Can I trade memory for speed?

Can a hash table eliminate repeated lookup?

Is the data contiguous?

Is the search space monotonic?

Can I model this as a graph?

Does BFS give the minimum number of steps?

Do I repeatedly solve the same state?

Can a heap maintain only the best k values?

Can I process information from left to right?

Can I precompute something?

What is the brute-force solution?

What exact repeated work makes brute force slow?
```

These questions are often more useful than memorizing another problem answer.

---

# Final Summary

A strong Python DSA foundation consists of four layers.

## Layer 1 — Structures

```text
Array/List
String
Linked List
Stack
Queue/Deque
Hash Map/Set
Tree/BST
Heap
Trie
Graph
Union-Find
Fenwick/Segment Tree
```

## Layer 2 — Core Algorithms

```text
Searching
Sorting
Tree traversal
BFS
DFS
Shortest path
Minimum spanning tree
Topological sort
String matching
```

## Layer 3 — Problem-Solving Patterns

```text
Two pointers
Sliding window
Prefix sum
Intervals
Binary search on answer
Monotonic stack/queue
Greedy
Backtracking
Dynamic programming
Bit manipulation
```

## Layer 4 — Engineering Skill

```text
Complexity analysis
Choosing trade-offs
Clear Python implementation
Testing
Edge cases
Debugging
Explaining correctness
Recognizing patterns
```

If you can explain **why** each structure and algorithm works, derive its complexity, implement it cleanly, and recognize when it applies, you are no longer merely memorizing DSA—you are developing algorithmic problem-solving skill.

---

# Suggested Next Steps

After completing this handbook:

1. Implement every major structure at least once from scratch.
2. Solve 10–20 focused problems per core pattern.
3. Re-solve important problems without looking at previous code.
4. Keep a mistake journal.
5. Practice explaining solutions verbally.
6. Mix topics so you learn pattern recognition rather than chapter recognition.
7. Build at least two small DSA-based projects.
8. Revise complexity and pattern-selection cheat sheets regularly.
9. Move from correctness → optimization → clarity.
10. Teach the concept to someone else; teaching exposes gaps quickly.

---

**End of DSA with Python — Master Learning Handbook**
