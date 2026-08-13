# Data Structures & Algorithms (DSA) — Master Learning Handbook

> **Purpose:** A single beginner-friendly master reference for learning, revising, interviewing, and applying Data Structures & Algorithms.
>
> **Example language:** Python for readability. The concepts are language-independent and apply to Java, JavaScript, C++, C#, PHP, and other languages.
>
> **Recommended method:** Understand → Visualize → Dry-run → Implement → Analyze → Practice → Revisit.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is DSA?](#2-what-is-dsa)
3. [Problem-Solving Mindset](#3-problem-solving-mindset)
4. [Time and Space Complexity](#4-time-and-space-complexity)
5. [Asymptotic Notation](#5-asymptotic-notation)
6. [Math Fundamentals for DSA](#6-math-fundamentals-for-dsa)
7. [Bit Manipulation](#7-bit-manipulation)
8. [Arrays](#8-arrays)
9. [Strings](#9-strings)
10. [Linked Lists](#10-linked-lists)
11. [Stacks](#11-stacks)
12. [Queues and Deques](#12-queues-and-deques)
13. [Hash Maps and Sets](#13-hash-maps-and-sets)
14. [Sorting Algorithms](#14-sorting-algorithms)
15. [Searching and Binary Search](#15-searching-and-binary-search)
16. [Two Pointers](#16-two-pointers)
17. [Sliding Window](#17-sliding-window)
18. [Prefix Sum and Difference Arrays](#18-prefix-sum-and-difference-arrays)
19. [Recursion](#19-recursion)
20. [Backtracking](#20-backtracking)
21. [Trees](#21-trees)
22. [Binary Search Trees](#22-binary-search-trees)
23. [Heaps and Priority Queues](#23-heaps-and-priority-queues)
24. [Tries](#24-tries)
25. [Graphs](#25-graphs)
26. [BFS](#26-bfs)
27. [DFS](#27-dfs)
28. [Topological Sorting](#28-topological-sorting)
29. [Shortest Path Algorithms](#29-shortest-path-algorithms)
30. [Minimum Spanning Tree](#30-minimum-spanning-tree)
31. [Disjoint Set Union](#31-disjoint-set-union)
32. [Strongly Connected Components](#32-strongly-connected-components)
33. [Greedy Algorithms](#33-greedy-algorithms)
34. [Dynamic Programming](#34-dynamic-programming)
35. [Important DP Patterns](#35-important-dp-patterns)
36. [String-Matching Algorithms](#36-string-matching-algorithms)
37. [Monotonic Stack and Queue](#37-monotonic-stack-and-queue)
38. [Intervals and Sweep Line](#38-intervals-and-sweep-line)
39. [Segment Trees](#39-segment-trees)
40. [Fenwick Trees](#40-fenwick-trees)
41. [Quickselect and Selection](#41-quickselect-and-selection)
42. [Core Problem-Solving Patterns](#42-core-problem-solving-patterns)
43. [Real-World Use Cases](#43-real-world-use-cases)
44. [Interview Problem-Solving Framework](#44-interview-problem-solving-framework)
45. [Common Mistakes and Debugging](#45-common-mistakes-and-debugging)
46. [Complexity Cheat Sheet](#46-complexity-cheat-sheet)
47. [DSA Learning Roadmap](#47-dsa-learning-roadmap)
48. [Practice Problem Ladder](#48-practice-problem-ladder)
49. [30-Day Revision Plan](#49-30-day-revision-plan)
50. [Glossary](#50-glossary)
51. [Advanced Topics](#51-advanced-topics)
52. [Final Recognition Cheat Sheet](#52-final-recognition-cheat-sheet)

---

# 1. How to Use This Handbook

Do not try to memorize every algorithm or code snippet. For each topic, learn these six things:

1. **What problem does it solve?**
2. **How does it work?**
3. **What is the time complexity?**
4. **What is the space complexity?**
5. **What clues in a problem suggest it?**
6. **When should it not be used?**

A productive learning loop:

```text
Understand
   ↓
Visualize
   ↓
Dry Run
   ↓
Implement
   ↓
Analyze Complexity
   ↓
Solve Variations
   ↓
Review Mistakes
```

For every solved problem, keep notes like:

```text
Problem:
Pattern:
Brute-force solution:
Optimized solution:
Why it works:
Time complexity:
Space complexity:
Mistake I made:
Recognition clue:
```

The goal is **pattern recognition**, not memorizing hundreds of answers.

---

# 2. What Is DSA?

## Data Structure

A data structure defines **how data is stored and organized**.

Examples:

- Array
- Linked List
- Stack
- Queue
- Hash Table
- Tree
- Heap
- Graph
- Trie

## Algorithm

An algorithm defines **how data is processed to solve a problem**.

Examples:

- Searching
- Sorting
- Traversal
- Shortest path
- Greedy selection
- Dynamic programming
- Backtracking

## Simple real-world example

Imagine an application stores 1,000,000 employee IDs.

If the IDs are stored only in an unsorted list, searching may require:

```text
O(n)
```

If you maintain a hash map by employee ID, average lookup becomes approximately:

```text
O(1)
```

The choice of data structure often decides the efficiency of the application.

---

# 3. Problem-Solving Mindset

A strong DSA learner does not immediately begin coding.

## Step 1 — Understand the problem

Identify:

- Input
- Output
- Constraints
- Duplicate handling
- Whether ordering matters
- Whether negative values exist
- Whether the input can be modified
- Whether one or many answers are possible

Example:

> Return indices of two values whose sum equals a target.

Clarify:

```text
Can I use one element twice?
Can duplicate numbers exist?
Is one valid answer guaranteed?
Should I return values or indices?
```

## Step 2 — Build a brute-force solution

```python
def two_sum_bruteforce(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```

Complexity:

```text
Time:  O(n²)
Space: O(1)
```

Brute force gives a correctness baseline.

## Step 3 — Identify repeated work

For each number `x`, you need to know whether:

```text
target - x
```

has already appeared.

Use a hash map:

```python
def two_sum(nums, target):
    seen = {}

    for i, value in enumerate(nums):
        required = target - value

        if required in seen:
            return [seen[required], i]

        seen[value] = i
```

Complexity:

```text
Time:  O(n)
Space: O(n)
```

## Step 4 — Ask pattern questions

```text
Is the input sorted?
Do I need fast membership lookup?
Is the problem about a contiguous range?
Is there a monotonic True/False answer space?
Is this a graph disguised as relationships?
Do subproblems repeat?
Do I repeatedly need smallest/largest values?
Am I generating every possible choice?
```

These questions often reveal the correct approach.

---

# 4. Time and Space Complexity

Complexity describes how resource use grows as input size grows.

## O(1) — Constant

```python
value = nums[5]
```

Typical examples:

- Array index access
- Stack push/pop
- Average hash lookup

## O(log n) — Logarithmic

Typical example:

```text
Binary Search
```

Each step reduces the search space by a constant factor.

For one billion elements:

```text
log2(1,000,000,000) ≈ 30
```

That is why binary search is extremely efficient.

## O(n) — Linear

```python
for value in nums:
    process(value)
```

One pass over the input.

## O(n log n)

Typical efficient comparison sorting:

- Merge Sort
- Heap Sort
- Average-case Quick Sort

## O(n²) — Quadratic

Common when checking all pairs:

```python
for i in range(n):
    for j in range(n):
        ...
```

For very large `n`, this is usually too slow.

## O(2^n) — Exponential

Common when every element has two choices:

```text
include
exclude
```

Typical subset/backtracking problems.

## O(n!) — Factorial

Common when generating every ordering.

Examples:

- Permutations
- Brute-force Traveling Salesman

## Space Complexity

A fast algorithm can still use too much memory.

Example:

```python
seen = set(nums)
```

may improve speed but use:

```text
O(n)
```

extra memory.

Always analyze both:

```text
Time
Space
```

---

# 5. Asymptotic Notation

## Big-O

Asymptotic upper bound. This is the notation used most often in interviews.

## Big-Omega

Asymptotic lower bound.

## Big-Theta

Tight asymptotic bound.

## Ignore constants

```text
O(2n)   → O(n)
O(100n) → O(n)
O(5000) → O(1)
```

## Ignore lower-order terms

```text
O(n² + n + 20) → O(n²)
```

---

# 6. Math Fundamentals for DSA

## Greatest Common Divisor — Euclidean Algorithm

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
```

Complexity:

```text
O(log(min(a, b)))
```

## Least Common Multiple

```python
def lcm(a, b):
    return abs(a * b) // gcd(a, b)
```

## Prime Check

```python
def is_prime(n):
    if n < 2:
        return False

    divisor = 2

    while divisor * divisor <= n:
        if n % divisor == 0:
            return False
        divisor += 1

    return True
```

Why stop at `sqrt(n)`? If `n = a × b`, at least one factor must be `<= sqrt(n)`.

## Sieve of Eratosthenes

Find every prime up to `n`.

```python
def sieve(n):
    if n < 2:
        return []

    prime = [True] * (n + 1)
    prime[0] = prime[1] = False

    p = 2
    while p * p <= n:
        if prime[p]:
            for multiple in range(p * p, n + 1, p):
                prime[multiple] = False
        p += 1

    return [i for i, value in enumerate(prime) if value]
```

Typical complexity:

```text
O(n log log n)
```

## Fast Exponentiation

```python
def power(base, exponent):
    result = 1

    while exponent > 0:
        if exponent % 2 == 1:
            result *= base

        base *= base
        exponent //= 2

    return result
```

Complexity:

```text
O(log exponent)
```

## Modular Arithmetic

Useful when results become extremely large.

```text
(a + b) mod m = ((a mod m) + (b mod m)) mod m
(a × b) mod m = ((a mod m) × (b mod m)) mod m
```

A common contest modulus is:

```python
MOD = 1_000_000_007
```

---

# 7. Bit Manipulation

Important operators:

| Operator | Meaning |
|---|---|
| `a & b` | AND |
| `a \| b` | OR |
| `a ^ b` | XOR |
| `~a` | NOT |
| `a << k` | Left shift |
| `a >> k` | Right shift |

## Odd or even

```python
if n & 1:
    print("odd")
```

## Check kth bit

```python
def bit_is_set(n, k):
    return (n & (1 << k)) != 0
```

## Set kth bit

```python
n |= 1 << k
```

## Clear kth bit

```python
n &= ~(1 << k)
```

## Toggle kth bit

```python
n ^= 1 << k
```

## Remove lowest set bit

```python
n &= n - 1
```

Used in efficient bit counting:

```python
def count_set_bits(n):
    count = 0

    while n:
        n &= n - 1
        count += 1

    return count
```

## XOR trick

Properties:

```text
x ^ x = 0
x ^ 0 = x
```

Problem:

> Every number appears twice except one.

```python
def single_number(nums):
    answer = 0

    for value in nums:
        answer ^= value

    return answer
```

```text
Time:  O(n)
Space: O(1)
```

---

# 8. Arrays

Arrays store elements sequentially.

Python lists behave like dynamic arrays.

```python
nums = [10, 20, 30, 40]
```

```text
Index:  0   1   2   3
Value: 10  20  30  40
```

## Typical Complexity

| Operation | Complexity |
|---|---:|
| Access by index | O(1) |
| Update by index | O(1) |
| Search unsorted | O(n) |
| Append | Amortized O(1) |
| Insert at beginning | O(n) |
| Delete in middle | O(n) |

## Reverse an array in place

```python
def reverse_array(nums):
    left = 0
    right = len(nums) - 1

    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
```

## Kadane's Algorithm

Problem:

> Find maximum sum of a contiguous subarray.

Input:

```text
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Best subarray:

```text
[4, -1, 2, 1]
```

Answer:

```text
6
```

```python
def max_subarray(nums):
    current = nums[0]
    best = nums[0]

    for value in nums[1:]:
        current = max(value, current + value)
        best = max(best, current)

    return best
```

```text
Time:  O(n)
Space: O(1)
```

Recognition clue:

```text
maximum/minimum sum over a contiguous subarray
```

---

# 9. Strings

Strings are sequences of characters.

Many string problems reduce to:

- Arrays
- Hash maps
- Two pointers
- Sliding windows
- Tries
- Dynamic programming

## Palindrome

```python
def is_palindrome(s):
    left = 0
    right = len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False

        left += 1
        right -= 1

    return True
```

## Character frequency

```python
from collections import Counter

frequency = Counter("banana")
```

Result:

```text
b: 1
a: 3
n: 2
```

## Anagram

```python
from collections import Counter

def are_anagrams(a, b):
    return Counter(a) == Counter(b)
```

Example:

```text
listen
silent
```

## Substring vs Subsequence

**Substring** = contiguous.

```text
"bcd"
```

is a substring of:

```text
"abcdef"
```

**Subsequence** = order is preserved but positions may be skipped.

```text
"ace"
```

is a subsequence of:

```text
"abcde"
```

This difference frequently determines the correct algorithm.

---

# 10. Linked Lists

A linked list stores nodes connected by references.

```text
10 → 20 → 30 → None
```

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

## Advantages

- Dynamic size
- Fast insertion/deletion when location is already known

## Disadvantages

- No `O(1)` random access
- Pointer/reference memory overhead
- Usually poorer CPU-cache locality than arrays

## Traverse

```python
def traverse(head):
    current = head

    while current:
        print(current.value)
        current = current.next
```

## Reverse linked list

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

## Middle node — Fast/Slow pointers

```python
def middle_node(head):
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow
```

## Detect cycle — Floyd's Algorithm

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

```text
Time:  O(n)
Space: O(1)
```

Recognition clues:

```text
linked list + cycle
linked list + middle
linked list + kth relation
```

---

# 11. Stacks

A stack follows:

```text
LIFO = Last In, First Out
```

Python:

```python
stack = []
stack.append(10)
stack.append(20)

value = stack[-1]
removed = stack.pop()
```

## Use Cases

- Undo/redo
- Browser navigation
- Function calls
- Expression parsing
- DFS
- Balanced brackets
- Monotonic-stack problems

## Valid Parentheses

```python
def valid_parentheses(s):
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    stack = []

    for ch in s:
        if ch in "([{":
            stack.append(ch)
        else:
            if not stack or stack[-1] != pairs.get(ch):
                return False
            stack.pop()

    return not stack
```

---

# 12. Queues and Deques

A queue follows:

```text
FIFO = First In, First Out
```

Use `deque` in Python:

```python
from collections import deque

queue = deque()
queue.append("A")
queue.append("B")

first = queue.popleft()
```

## Common Uses

- BFS
- Customer/service queues
- Job processing
- Producer/consumer concepts

## Deque

A deque supports insertion/removal from both ends.

```python
from collections import deque

dq = deque()

dq.append(10)
dq.appendleft(5)
dq.pop()
dq.popleft()
```

Important uses:

- Sliding-window maximum
- BFS
- Monotonic queue

---

# 13. Hash Maps and Sets

Hash tables give very fast average lookup.

Python:

```python
mapping = {}
unique = set()
```

Typical average complexity:

| Operation | Average |
|---|---:|
| Insert | O(1) |
| Search | O(1) |
| Delete | O(1) |

Worst-case behavior may be worse because of collisions, but normal implementations perform very well.

## Frequency map

```python
def frequencies(nums):
    freq = {}

    for value in nums:
        freq[value] = freq.get(value, 0) + 1

    return freq
```

## Duplicate detection

```python
def contains_duplicate(nums):
    seen = set()

    for value in nums:
        if value in seen:
            return True

        seen.add(value)

    return False
```

Recognition clues:

```text
duplicate
count
frequency
seen before
membership
matching complement
```

---

# 14. Sorting Algorithms

Sorting often unlocks other techniques:

- Binary search
- Two pointers
- Greedy algorithms
- Interval merging

## Bubble Sort

Repeatedly swap adjacent out-of-order values.

```python
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr
```

Worst:

```text
O(n²)
```

Mostly educational.

## Selection Sort

Find the smallest remaining value and place it next.

```text
Time: O(n²)
```

Good for learning but rarely preferred for large real data.

## Insertion Sort

Insert each value into an already-sorted prefix.

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = current

    return arr
```

Good for:

- Small arrays
- Nearly sorted arrays

## Merge Sort

Divide into halves, recursively sort them, then merge.

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

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

```text
Time:  O(n log n)
Space: O(n)
```

## Quick Sort

Partition around a pivot.

Typical complexity:

```text
Average: O(n log n)
Worst:   O(n²)
```

## Heap Sort

Uses a heap.

```text
Build heap: O(n)
Overall:    O(n log n)
```

## Counting Sort

Useful when integer values lie in a small range.

```text
Time: O(n + k)
```

`k` = size of value range.

Avoid it when the range is huge.

## Radix Sort

Processes digits/positions.

Typical:

```text
O(d(n + k))
```

where `d` is number of digits/positions.

## Stable Sorting

A stable sort preserves the original order of equal keys.

This is useful when sorting records by multiple fields.

## Sorting Summary

| Algorithm | Best | Average | Worst | Stable? |
|---|---:|---:|---:|---|
| Bubble | O(n) optimized | O(n²) | O(n²) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | Usually No |
| Insertion | O(n) | O(n²) | O(n²) | Yes |
| Merge | O(n log n) | O(n log n) | O(n log n) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | Usually No |
| Heap | O(n log n) | O(n log n) | O(n log n) | No |

---

# 15. Searching and Binary Search

## Linear Search

```python
def linear_search(nums, target):
    for i, value in enumerate(nums):
        if value == target:
            return i

    return -1
```

```text
Time: O(n)
```

## Binary Search

Requires sorted data or another monotonic search condition.

```python
def binary_search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

```text
Time: O(log n)
```

## Lower Bound

First position where:

```text
value >= target
```

## Upper Bound

First position where:

```text
value > target
```

## Binary Search on Answer

Binary search can search an **answer range**, not only an array.

Example:

> Find the minimum machine speed that finishes all jobs within a deadline.

Feasibility might look like:

```text
False False False True True True
```

The first `True` can be found using binary search.

Typical problems:

- Minimum capacity
- Maximum minimum distance
- Minimum speed
- Shipping capacity
- Book/job allocation
- Production rate

Recognition clues:

```text
minimum possible X
maximum possible X
can it be done with X?
monotonic feasibility
```

---

# 16. Two Pointers

Two indices move through the data and often replace nested loops.

## Pair Sum in Sorted Array

```python
def pair_sum(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        total = nums[left] + nums[right]

        if total == target:
            return [left, right]

        if total < target:
            left += 1
        else:
            right -= 1

    return None
```

```text
Time: O(n)
```

## Remove Duplicates from Sorted Array

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

Recognition clues:

```text
sorted array
pair
palindrome
merge
remove duplicates
partition
```

---

# 17. Sliding Window

Sliding window is powerful for **contiguous** portions of arrays or strings.

Two major types:

1. Fixed-size window
2. Variable-size window

## Fixed Window — Maximum sum of K consecutive values

```python
def max_sum_k(nums, k):
    if k > len(nums):
        return None

    window_sum = sum(nums[:k])
    best = window_sum

    for right in range(k, len(nums)):
        window_sum += nums[right]
        window_sum -= nums[right - k]
        best = max(best, window_sum)

    return best
```

```text
Time: O(n)
```

## Variable Window — Longest substring without duplicates

```python
def longest_unique_substring(s):
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

Recognition clues:

```text
substring
subarray
contiguous
longest
shortest
at most K
window of size K
without repeating
```

Important warning: sliding-window sum logic may fail when negative values destroy the monotonic behavior needed to move boundaries safely.

---

# 18. Prefix Sum and Difference Arrays

## Prefix Sum

Input:

```text
[2, 4, 1, 5, 3]
```

Prefix array:

```text
[0, 2, 6, 7, 12, 15]
```

```python
def build_prefix(nums):
    prefix = [0]

    for value in nums:
        prefix.append(prefix[-1] + value)

    return prefix
```

Range sum from `l` to `r`:

```python
prefix[r + 1] - prefix[l]
```

After preprocessing:

```text
Range query: O(1)
```

## Prefix Sum + Hash Map

Very important problem:

> Count subarrays with sum equal to `k`.

```python
def subarray_sum(nums, k):
    count = 0
    current_sum = 0
    frequency = {0: 1}

    for value in nums:
        current_sum += value
        count += frequency.get(current_sum - k, 0)
        frequency[current_sum] = frequency.get(current_sum, 0) + 1

    return count
```

```text
Time: O(n)
```

This works with negative numbers too.

## Difference Array

Efficient repeated range updates.

To add `x` to `[l, r]`:

```python
diff[l] += x

if r + 1 < n:
    diff[r + 1] -= x
```

Then prefix-sum the difference array to recover final values.

Applications:

- Booking ranges
- Capacity changes
- Calendar load
- Range increment operations

---

# 19. Recursion

A recursive function calls itself.

Every recursive solution requires:

1. Base case
2. Recursive case

```python
def factorial(n):
    if n <= 1:
        return 1

    return n * factorial(n - 1)
```

Call stack:

```text
factorial(4)
└── factorial(3)
    └── factorial(2)
        └── factorial(1)
```

## Good uses

- Trees
- Divide and conquer
- Backtracking

## Risks

- Stack overflow
- Repeated computation
- Difficult debugging
- Extra recursive overhead

Use iteration when recursion provides no meaningful benefit.

---

# 20. Backtracking

Backtracking explores choices and undoes them.

General pattern:

```python
def backtrack(state):
    if complete(state):
        save(state)
        return

    for choice in choices(state):
        make(choice)
        backtrack(state)
        undo(choice)
```

Mental model:

```text
Choose
Explore
Undo
```

## Generate Subsets

```python
def subsets(nums):
    result = []
    current = []

    def backtrack(index):
        if index == len(nums):
            result.append(current.copy())
            return

        backtrack(index + 1)

        current.append(nums[index])
        backtrack(index + 1)
        current.pop()

    backtrack(0)
    return result
```

There are:

```text
2^n
```

subsets.

## Generate Permutations

```python
def permutations(nums):
    result = []

    def backtrack(start):
        if start == len(nums):
            result.append(nums.copy())
            return

        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]

    backtrack(0)
    return result
```

Classic backtracking problems:

- N-Queens
- Sudoku
- Word Search
- Combination Sum
- Generate Parentheses
- Permutations
- Subsets
- Maze paths

Recognition clues:

```text
generate all possibilities
all combinations
all permutations
try every valid arrangement
```

---

# 21. Trees

A tree represents hierarchy.

```text
        A
       / \
      B   C
     / \
    D   E
```

Important terms:

- Root
- Parent
- Child
- Sibling
- Leaf
- Edge
- Depth
- Height
- Subtree
- Ancestor
- Descendant

## Binary Tree

Each node has at most two children.

```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

## Preorder

```text
Root → Left → Right
```

```python
def preorder(root):
    if not root:
        return

    print(root.value)
    preorder(root.left)
    preorder(root.right)
```

## Inorder

```text
Left → Root → Right
```

```python
def inorder(root):
    if not root:
        return

    inorder(root.left)
    print(root.value)
    inorder(root.right)
```

Important property:

> Inorder traversal of a valid BST returns values in sorted order.

## Postorder

```text
Left → Right → Root
```

Useful when child results are needed before the parent.

Examples:

- Tree deletion
- Subtree size
- Directory-size calculation
- Tree DP

## Level Order

Uses BFS:

```python
from collections import deque

def level_order(root):
    if not root:
        return []

    queue = deque([root])
    result = []

    while queue:
        node = queue.popleft()
        result.append(node.value)

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return result
```

## Height

```python
def height(root):
    if root is None:
        return 0

    return 1 + max(height(root.left), height(root.right))
```

Common tree interview problems:

- Maximum depth
- Minimum depth
- Diameter
- Balanced tree
- Invert tree
- Lowest common ancestor
- Path sum
- Serialize/deserialize
- Construct tree from traversals

---

# 22. Binary Search Trees

BST rule:

```text
left values  < node
right values > node
```

If duplicates are allowed, a consistent policy must be defined.

Example:

```text
        8
       / \
      3   10
     / \    \
    1   6    14
```

## Search

```python
def search_bst(root, target):
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

Balanced tree:

```text
O(log n)
```

Worst unbalanced tree:

```text
O(n)
```

## Balanced BSTs

Examples:

- AVL Tree
- Red-Black Tree

Related database/indexing structures:

- B-tree
- B+ tree

---

# 23. Heaps and Priority Queues

A heap efficiently exposes the current minimum or maximum.

Python provides a min-heap:

```python
import heapq

heap = []
heapq.heappush(heap, 20)
heapq.heappush(heap, 5)
heapq.heappush(heap, 10)

print(heapq.heappop(heap))
```

Output:

```text
5
```

## Complexity

| Operation | Complexity |
|---|---:|
| Peek min | O(1) |
| Insert | O(log n) |
| Remove min | O(log n) |
| Build heap | O(n) |

## Top K Largest Values

```python
import heapq

def top_k_largest(nums, k):
    heap = []

    for value in nums:
        heapq.heappush(heap, value)

        if len(heap) > k:
            heapq.heappop(heap)

    return sorted(heap, reverse=True)
```

```text
Time: O(n log k)
```

Useful when `k << n`.

Recognition clues:

```text
top K
kth largest
kth smallest
priority
closest K
repeated smallest/largest
```

Real uses:

- Schedulers
- Dijkstra
- Top-K rankings
- Merge K sorted streams
- Streaming median

---

# 24. Tries

A Trie stores strings by prefix.

Words:

```text
cat
car
care
dog
```

Conceptually:

```text
root
├─ c
│  └─ a
│     ├─ t
│     └─ r
│        └─ e
└─ d
   └─ o
      └─ g
```

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False
```

```python
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

For a word of length `L`:

```text
Insert/Search/Prefix: O(L)
```

Use cases:

- Autocomplete
- Dictionaries
- Prefix search
- Spell checking
- Word games

---

# 25. Graphs

A graph contains:

```text
Vertices + Edges
```

Graphs may be:

- Directed
- Undirected
- Weighted
- Unweighted
- Cyclic
- Acyclic
- Connected
- Disconnected

Real-world graph examples:

- Social network
- Road network
- Flight network
- Computer network
- Package dependency graph
- Workflow graph

## Adjacency List

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}
```

Space:

```text
O(V + E)
```

Usually best for sparse graphs.

## Adjacency Matrix

```text
    A B C D
A   0 1 1 0
B   1 0 0 1
C   1 0 0 1
D   0 1 1 0
```

Space:

```text
O(V²)
```

Useful for dense graphs or constant-time edge-existence checks.

---

# 26. BFS

Breadth-First Search explores level by level.

Uses a queue.

```python
from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])

    while queue:
        node = queue.popleft()
        print(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

Complexity:

```text
O(V + E)
```

## Use BFS for

- Shortest path in unweighted graphs
- Minimum number of moves
- Level-order tree traversal
- Grid shortest paths
- Degrees of separation
- Multi-source nearest-distance problems

Important practice: mark nodes visited when they are **enqueued**, not after they are later removed, to avoid duplicate queue entries.

---

# 27. DFS

Depth-First Search explores deeply before backtracking.

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

## Common DFS Uses

- Connected components
- Cycle detection
- Tree traversal
- Island counting
- Graph exploration
- Topological-sort variants

## Number of Islands

```python
def num_islands(grid):
    if not grid:
        return 0

    rows = len(grid)
    cols = len(grid[0])
    count = 0

    def visit(r, c):
        if (
            r < 0 or r >= rows
            or c < 0 or c >= cols
            or grid[r][c] != "1"
        ):
            return

        grid[r][c] = "0"
        visit(r + 1, c)
        visit(r - 1, c)
        visit(r, c + 1)
        visit(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                count += 1
                visit(r, c)

    return count
```

This demonstrates that a matrix can be an implicit graph.

---

# 28. Topological Sorting

Topological ordering applies to a:

```text
DAG = Directed Acyclic Graph
```

If:

```text
A → B
```

then `A` must appear before `B`.

Applications:

- Course prerequisites
- Package/build dependencies
- Workflow ordering
- Job scheduling
- Spreadsheet dependency evaluation

## Kahn's Algorithm

```python
from collections import deque

def topological_sort(graph):
    indegree = {node: 0 for node in graph}

    for node in graph:
        for neighbor in graph[node]:
            indegree[neighbor] += 1

    queue = deque(
        node for node in graph
        if indegree[node] == 0
    )

    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph[node]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    if len(order) != len(graph):
        raise ValueError("Cycle detected")

    return order
```

```text
Time: O(V + E)
```

Recognition clues:

```text
prerequisite
dependency
must happen before
course schedule
build order
```

---

# 29. Shortest Path Algorithms

Choose the algorithm based on the graph.

## BFS

Use when every edge has equal cost, typically `1`.

```text
O(V + E)
```

## Dijkstra's Algorithm

Use for non-negative weighted edges.

```python
import heapq

def dijkstra(graph, start):
    distance = {
        node: float("inf")
        for node in graph
    }

    distance[start] = 0
    heap = [(0, start)]

    while heap:
        dist, node = heapq.heappop(heap)

        if dist != distance[node]:
            continue

        for neighbor, weight in graph[node]:
            candidate = dist + weight

            if candidate < distance[neighbor]:
                distance[neighbor] = candidate
                heapq.heappush(heap, (candidate, neighbor))

    return distance
```

Typical heap complexity:

```text
O((V + E) log V)
```

Do **not** use ordinary Dijkstra with negative edge weights.

## Bellman-Ford

Handles negative edges and detects reachable negative cycles.

```text
Time: O(VE)
```

## Floyd-Warshall

All-pairs shortest paths.

```text
Time:  O(V³)
Space: O(V²)
```

Useful when the number of vertices is relatively small and many source/destination queries are needed.

## DAG Shortest Path

For a weighted DAG:

1. Topologically sort vertices.
2. Relax edges in topological order.

Can run in:

```text
O(V + E)
```

## Shortest-Path Choice Table

| Situation | Algorithm |
|---|---|
| Unweighted | BFS |
| Weighted, non-negative | Dijkstra |
| Negative edges | Bellman-Ford |
| All-pairs, small V | Floyd-Warshall |
| DAG | Topological relaxation |

---

# 30. Minimum Spanning Tree

For a connected weighted **undirected** graph, an MST:

- Connects all vertices
- Uses `V - 1` edges
- Contains no cycle
- Has minimum total weight

Applications:

- Cheapest network cabling
- Road planning
- Power distribution
- Site connectivity

## Kruskal's Algorithm

1. Sort edges by weight.
2. Add the cheapest edge that does not create a cycle.
3. Use DSU to track components.

```text
Time: O(E log E)
```

## Prim's Algorithm

Grow the tree from one start node using a priority queue.

Typical:

```text
O(E log V)
```

---

# 31. Disjoint Set Union

Also called:

```text
Union-Find
```

Operations:

```text
find(x)
union(a, b)
```

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])

        return self.parent[x]

    def union(self, a, b):
        root_a = self.find(a)
        root_b = self.find(b)

        if root_a == root_b:
            return False

        if self.rank[root_a] < self.rank[root_b]:
            root_a, root_b = root_b, root_a

        self.parent[root_b] = root_a

        if self.rank[root_a] == self.rank[root_b]:
            self.rank[root_a] += 1

        return True
```

With path compression and union by rank/size:

```text
Amortized almost O(1)
```

More precisely:

```text
O(α(n))
```

Use cases:

- Kruskal MST
- Dynamic connectivity
- Friend groups
- Network components
- Cycle detection in undirected graphs

---

# 32. Strongly Connected Components

In a directed graph, an SCC is a maximal group where every node can reach every other node.

Algorithms:

- Kosaraju
- Tarjan

Applications:

- Dependency analysis
- Compiler graphs
- Deadlock-style reasoning
- Condensing a directed graph into a DAG

Kosaraju high-level process:

```text
1. DFS and record finishing order.
2. Reverse all edges.
3. Process vertices in reverse finishing order.
4. Each DFS tree is one SCC.
```

Complexity:

```text
O(V + E)
```

---

# 33. Greedy Algorithms

A greedy algorithm chooses the locally best option at each step.

But greedy is only correct when that local choice can be **proven safe**.

## Activity Selection

Problem:

> Attend the maximum number of non-overlapping meetings.

Correct greedy strategy:

```text
Always choose the meeting that finishes earliest.
```

```python
def max_meetings(intervals):
    intervals.sort(key=lambda item: item[1])

    count = 0
    previous_end = float("-inf")

    for start, end in intervals:
        if start >= previous_end:
            count += 1
            previous_end = end

    return count
```

## Common Greedy Problems

- Activity selection
- Fractional knapsack
- Huffman coding
- Some scheduling problems
- Some jump problems
- Minimum spanning tree

## Greedy vs DP

Greedy:

```text
Make one safe local choice and never revisit it.
```

DP:

```text
Compare multiple interacting alternatives because subproblems overlap.
```

Never use greedy only because it "looks obvious". Look for a correctness argument.

---

# 34. Dynamic Programming

Dynamic Programming is useful when a problem has:

1. Overlapping subproblems
2. Optimal substructure

Mental model:

```text
Solve each useful subproblem once.
Store the answer.
Reuse it.
```

## Naive Fibonacci

```python
def fib(n):
    if n <= 1:
        return n

    return fib(n - 1) + fib(n - 2)
```

This repeats the same work many times.

## Memoization — Top Down

```python
def fib(n, memo=None):
    if memo is None:
        memo = {}

    if n <= 1:
        return n

    if n not in memo:
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    return memo[n]
```

## Tabulation — Bottom Up

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

## Space Optimization

```python
def fib(n):
    if n <= 1:
        return n

    previous2 = 0
    previous1 = 1

    for _ in range(2, n + 1):
        current = previous1 + previous2
        previous2 = previous1
        previous1 = current

    return previous1
```

```text
Space: O(1)
```

## DP Design Checklist

For every DP problem answer:

```text
1. What does dp[state] mean?
2. What choices exist?
3. What is the transition?
4. What are the base cases?
5. In what order are states evaluated?
6. Which state contains the answer?
7. Can memory be optimized?
```

If you cannot describe the state precisely, the DP is not yet clearly designed.

---

# 35. Important DP Patterns

## Climbing Stairs

If you may climb 1 or 2 steps:

```text
ways[n] = ways[n-1] + ways[n-2]
```

## 0/1 Knapsack

Each item can be used at most once.

A common state:

```text
dp[item_index][remaining_capacity]
```

Choices:

```text
Take item
Skip item
```

## Unbounded Knapsack

Items can be reused.

Examples:

- Coin Change
- Rod Cutting

## Coin Change — Minimum Coins

```python
def coin_change(coins, amount):
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0

    for current in range(1, amount + 1):
        for coin in coins:
            if coin <= current:
                dp[current] = min(
                    dp[current],
                    1 + dp[current - coin]
                )

    return -1 if dp[amount] == float("inf") else dp[amount]
```

## Longest Increasing Subsequence

Basic DP:

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

```text
Time: O(n²)
```

An optimized binary-search technique can achieve:

```text
O(n log n)
```

## Longest Common Subsequence

For:

```text
abcde
ace
```

the LCS is:

```text
ace
```

A common DP definition:

```text
dp[i][j] = LCS length using first i chars of A and first j chars of B
```

## Grid DP

A typical transition for counting paths:

```text
dp[r][c] = dp[r-1][c] + dp[r][c-1]
```

## Edit Distance

Operations:

- Insert
- Delete
- Replace

Uses:

- Spell correction concepts
- Diff tools
- Sequence similarity

## Interval DP

State describes a range:

```text
dp[left][right]
```

Examples:

- Matrix Chain Multiplication
- Burst Balloons
- Palindrome partitioning
- Interval games

## Tree DP

State belongs to a tree node.

Examples:

- Tree diameter
- Maximum path sum
- Subtree values
- Rerooting problems

## Bitmask DP

Bits represent a subset of items.

Often useful when:

```text
n is small, roughly 15–22 depending on complexity
```

Examples:

- Traveling Salesman DP
- Assignment problems
- Visit-subset states

---

# 36. String-Matching Algorithms

## Naive Matching

Try the pattern at every possible starting position.

Worst-case:

```text
O(nm)
```

## KMP

Knuth-Morris-Pratt avoids rechecking characters.

Uses:

```text
LPS = Longest Proper Prefix that is also a Suffix
```

Complexity:

```text
O(n + m)
```

## Rabin-Karp

Uses rolling hash.

Applications:

- Pattern matching
- Multiple substring comparisons
- Duplicate-string detection concepts

Hash collisions must be handled.

## Z Algorithm

`Z[i]` stores the length of the longest prefix match beginning at index `i`.

```text
Time: O(n)
```

Useful for prefix-based pattern matching.

## Rolling Hash

After preprocessing, substring hashes can be compared efficiently.

Applications:

- Duplicate substring search
- String comparisons
- Pattern matching

Because hashes can collide, verification or multiple hashes may be used when correctness requires it.

---

# 37. Monotonic Stack and Queue

A monotonic structure maintains values in increasing or decreasing order while scanning.

## Next Greater Element

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

```text
Time: O(n)
```

Although a `while` appears inside a `for`, each index is pushed and popped at most once.

Common problems:

- Next Greater Element
- Next Smaller Element
- Daily Temperatures
- Stock Span
- Largest Rectangle in Histogram
- Trapping Rain Water variants

## Monotonic Queue

Useful for sliding-window maximum/minimum.

Can reduce:

```text
O(nk)
```

to:

```text
O(n)
```

---

# 38. Intervals and Sweep Line

Intervals occur in:

- Meetings
- Bookings
- Reservations
- Employee shifts
- CPU jobs
- Capacity planning

## Merge Intervals

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

```text
Time: O(n log n)
```

because sorting dominates.

## Sweep Line

Convert interval boundaries into events:

```text
start → +1
end   → -1
```

Sort events and sweep across time.

Applications:

- Maximum overlapping meetings
- Minimum number of rooms
- Peak active users
- Resource utilization
- Skyline problems

Important: whether start and end at the same coordinate overlap depends on problem semantics, so event ordering matters.

---

# 39. Segment Trees

Segment Trees support efficient dynamic range operations.

Typical complexity:

```text
Build:        O(n)
Point update: O(log n)
Range query:  O(log n)
Space:        O(n)
```

Typical operations:

- Range sum
- Range minimum
- Range maximum
- GCD

## Why not always use prefix sum?

Prefix sum:

```text
Query:  O(1)
Update: O(n)
```

Segment Tree:

```text
Query:  O(log n)
Update: O(log n)
```

If data changes often and queries are frequent, a Segment Tree becomes useful.

## Lazy Propagation

Used for range updates.

Example:

```text
Add 5 to every value from L to R.
```

Lazy propagation stores deferred work instead of visiting every leaf immediately.

---

# 40. Fenwick Trees

Also called:

```text
Binary Indexed Tree (BIT)
```

Useful for dynamic prefix aggregates.

Typical:

```text
Point update: O(log n)
Prefix sum:   O(log n)
Range sum:    O(log n)
Space:        O(n)
```

Common uses:

- Dynamic prefix sums
- Inversion counting
- Frequency tables
- Online cumulative counts

Prefer a Fenwick Tree over a Segment Tree when its simpler operation set is sufficient.

---

# 41. Quickselect and Selection

Suppose you need only the kth smallest or kth largest value.

Full sorting:

```text
O(n log n)
```

Quickselect uses partitioning similar to Quick Sort.

Typical complexity:

```text
Average: O(n)
Worst:   O(n²)
```

## Choosing a kth-element strategy

### Sorting

```text
O(n log n)
```

Simple and good for moderate input.

### Heap

```text
O(n log k)
```

Great when `k` is small or data arrives as a stream.

### Quickselect

```text
Average O(n)
```

Excellent when only one order statistic is needed.

---

# 42. Core Problem-Solving Patterns

This section is more important than memorizing isolated problems.

## Pattern 1 — Frequency Map

Clues:

```text
count
duplicate
anagram
frequency
most common
```

Use:

```text
Hash Map / Counter
```

## Pattern 2 — Two Pointers

Clues:

```text
sorted
pair
palindrome
merge
remove duplicates
```

## Pattern 3 — Sliding Window

Clues:

```text
contiguous
substring
subarray
longest/shortest range
at most K
```

## Pattern 4 — Fast/Slow Pointers

Clues:

```text
cycle
middle
linked list
repeated state
```

## Pattern 5 — Prefix Sum

Clues:

```text
range sum
many range queries
subarray sum
cumulative
```

## Pattern 6 — Binary Search

Clues:

```text
sorted
monotonic
minimum feasible
maximum feasible
```

## Pattern 7 — Heap

Clues:

```text
top K
priority
kth
closest
repeated minimum/maximum
```

## Pattern 8 — BFS

Clues:

```text
minimum moves
unweighted shortest path
level
nearest
```

## Pattern 9 — DFS

Clues:

```text
connected components
explore region
islands
tree recursion
```

## Pattern 10 — Backtracking

Clues:

```text
generate all
combinations
permutations
valid arrangements
```

## Pattern 11 — Dynamic Programming

Clues:

```text
number of ways
minimum cost
maximum value
repeated choices
overlapping subproblems
```

## Pattern 12 — Greedy

Clues:

```text
schedule
earliest finish
minimum resources
provably safe local choice
```

## Pattern 13 — Monotonic Stack

Clues:

```text
next greater
next smaller
nearest greater
histogram
temperature
```

## Pattern 14 — DSU

Clues:

```text
groups
same component
dynamic connectivity
undirected cycle
```

## Pattern 15 — Topological Sort

Clues:

```text
prerequisites
dependencies
before/after constraints
```

## Pattern 16 — Trie

Clues:

```text
prefix
dictionary
autocomplete
many words
```

## Pattern 17 — Segment/Fenwick Tree

Clues:

```text
many range queries
frequent updates
online dynamic data
```

---

# 43. Real-World Use Cases

DSA is not only for interviews.

## Search Autocomplete

Possible structures:

```text
Trie
Frequency Map
Heap
```

1. Trie finds prefix candidates.
2. Frequency data scores popularity.
3. Heap selects top suggestions.

## GPS Navigation

Model:

```text
Intersection = Vertex
Road         = Edge
Travel time  = Weight
```

Algorithms:

- Dijkstra
- A* in many practical pathfinding systems

## Social Network

```text
User       = Vertex
Friendship = Edge
```

Tasks:

- Mutual friends → Sets
- Connection distance → BFS
- Connected communities → DFS/DSU
- Recommendations → Graph algorithms

## Browser Back Button

```text
Stack
```

## Print/Job Queue

```text
Queue
```

## Priority Scheduler

```text
Heap / Priority Queue
```

## File System

```text
Tree
```

## Database Indexing

Common related structures:

```text
B-tree
B+ tree
Hash index
```

## Dependency Management

```text
Directed Graph
Topological Sort
Cycle Detection
```

## Calendar Scheduling

```text
Intervals
Sorting
Sweep Line
Heap
```

## Cheapest Network Connection

```text
MST
Kruskal
Prim
```

---

# 44. Interview Problem-Solving Framework

Use this sequence during interviews.

## 1. Restate the problem

Explain what must be returned in your own words.

## 2. Clarify assumptions

Ask about:

```text
empty input
duplicates
negative values
input size
mutation
multiple answers
```

## 3. Describe brute force

A correct slow solution shows that you understand the problem.

## 4. Identify the bottleneck

Example:

```text
We repeatedly scan for the complement.
```

## 5. Optimize

Example:

```text
Store seen values in a hash map.
```

## 6. State complexity before coding

Example:

```text
Time:  O(n)
Space: O(n)
```

## 7. Write clear code

Prefer descriptive names:

```python
left
right
current_sum
frequency
distance
```

## 8. Dry run

Trace a normal example.

## 9. Test edge cases

Typical cases:

```text
empty input
one element
all equal
all distinct
duplicates
already sorted
reverse sorted
negative values
answer at boundary
```

---

# 45. Common Mistakes and Debugging

## Off-by-one errors

Bad:

```python
for i in range(len(nums) + 1):
    print(nums[i])
```

Correct:

```python
for i in range(len(nums)):
    print(nums[i])
```

## Empty-input assumptions

This fails on an empty array:

```python
maximum = nums[0]
```

Handle empty input if allowed.

## Binary search boundaries never move

Classic inclusive-boundary binary search must make progress:

```python
left = mid + 1
```

or:

```python
right = mid - 1
```

## Marking BFS nodes visited too late

Usually mark when **enqueuing** to prevent duplicates.

## Forgetting backtracking undo

```python
current.append(choice)
backtrack(...)
current.pop()
```

The undo step is essential.

## Vague DP state

You should be able to say:

```text
dp[i] means ...
```

in one exact sentence.

## Dijkstra with negative edges

Ordinary Dijkstra assumes non-negative weights.

## Sliding window with negative values

Some sum-based sliding-window approaches require monotonic behavior that negative values destroy.

## Integer overflow

In fixed-width languages such as Java/C++, use an appropriate integer type for large sums and products.

## Accidental input mutation

A graph/grid solution may change input:

```python
grid[r][c] = "0"
```

If callers require the original data, use a separate visited structure.

## Debugging Checklist

1. Test the smallest possible input.
2. Test empty input.
3. Test one item.
4. Test duplicates.
5. Trace pointers/indices.
6. Check loop invariants.
7. Check base cases.
8. Inspect state after mutation.
9. Dry-run manually.
10. Only optimize after correctness is established.

---

# 46. Complexity Cheat Sheet

## Data Structures

| Data Structure | Access | Search | Insert | Delete |
|---|---:|---:|---:|---:|
| Array | O(1) | O(n) | O(n) middle | O(n) middle |
| Dynamic array append | — | — | Amortized O(1) | — |
| Linked List | O(n) | O(n) | O(1)* | O(1)* |
| Hash Table | — | Avg O(1) | Avg O(1) | Avg O(1) |
| Balanced BST | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap | — | O(n) general | O(log n) | O(log n) top |
| Trie | — | O(L) | O(L) | O(L) |

`*` when the correct node/reference is already known.

## Algorithms

| Algorithm | Complexity |
|---|---:|
| Linear Search | O(n) |
| Binary Search | O(log n) |
| Bubble Sort | O(n²) |
| Selection Sort | O(n²) |
| Insertion Sort | O(n²) worst |
| Merge Sort | O(n log n) |
| Heap Sort | O(n log n) |
| Quick Sort | O(n log n) average |
| BFS | O(V + E) |
| DFS | O(V + E) |
| Topological Sort | O(V + E) |
| Dijkstra + heap | O((V + E) log V) |
| Bellman-Ford | O(VE) |
| Floyd-Warshall | O(V³) |
| Kruskal | O(E log E) |
| KMP | O(n + m) |
| Sieve | O(n log log n) |
| Fenwick update/query | O(log n) |
| Segment Tree update/query | O(log n) |

## Input-Size Intuition

Approximate only:

```text
n <= 10
    factorial approaches may sometimes work

n <= 20–25
    O(2^n) may sometimes work

n <= 1,000
    O(n²) may be acceptable depending on environment

n <= 100,000
    usually aim for O(n log n) or O(n)

n >= 1,000,000
    usually need near-linear work
```

Actual limits depend on:

- Language
- Hardware
- Constant factors
- Number of test cases
- Memory limits

---

# 47. DSA Learning Roadmap

## Stage 1 — Foundation

Learn:

- Arrays
- Strings
- Complexity
- Basic math
- Bit basics

Practice:

- Maximum/minimum
- Reverse array/string
- Palindrome
- Frequency counting
- Missing number

## Stage 2 — Core Structures

Learn:

- Linked List
- Stack
- Queue
- Hash Map
- Set

Practice:

- Two Sum
- Valid Parentheses
- Reverse Linked List
- Middle Node
- Cycle Detection
- Duplicate Detection

## Stage 3 — Core Patterns

Learn:

- Two Pointers
- Sliding Window
- Prefix Sum
- Binary Search

Practice:

- Pair Sum
- 3Sum
- Longest Unique Substring
- Range Sum
- Search Rotated Array
- Binary Search on Answer

## Stage 4 — Recursion and Backtracking

Learn:

- Recursion tree
- Base cases
- Choice/explore/undo
- Divide and conquer

Practice:

- Subsets
- Permutations
- Combination Sum
- Generate Parentheses
- N-Queens

## Stage 5 — Trees and Heaps

Learn:

- Tree traversals
- BST
- Height/diameter
- Heap
- Trie

Practice:

- Tree depth
- Validate BST
- Lowest common ancestor
- Top K
- Prefix autocomplete

## Stage 6 — Graphs

Learn:

- Representations
- BFS
- DFS
- Components
- Cycle detection
- Topological sort
- Dijkstra
- DSU
- MST

Practice:

- Number of Islands
- Course Schedule
- Network Delay
- Connected Components
- Redundant Connection

## Stage 7 — Greedy and DP

Learn:

- Greedy proof intuition
- Memoization
- Tabulation
- Knapsack
- LIS
- LCS
- Grid DP
- Interval DP

Practice:

- Climbing Stairs
- House Robber
- Coin Change
- LCS
- Partition problems
- Activity scheduling

## Stage 8 — Advanced

Learn when needed:

- Monotonic stack/queue
- Segment Tree
- Fenwick Tree
- SCC
- Advanced string algorithms
- Sweep Line
- Bitmask DP
- Tree DP

---

# 48. Practice Problem Ladder

## Beginner

Solve problems such as:

- Find maximum
- Find second largest
- Reverse array
- Reverse string
- Palindrome
- Frequency counting
- Missing number
- Move zeroes
- Merge sorted arrays
- Binary search

Target:

```text
20–30 problems
```

## Easy Pattern Problems

- Two Sum
- Valid Anagram
- Contains Duplicate
- Best Time to Buy/Sell Stock
- Maximum Subarray
- Valid Parentheses
- Linked List Cycle
- Middle of Linked List
- Merge Two Sorted Lists
- Flood Fill

Target total:

```text
40–60 problems
```

## Medium

- Longest Substring Without Repeating
- 3Sum
- Product of Array Except Self
- Search in Rotated Sorted Array
- Group Anagrams
- Top K Frequent Elements
- Kth Largest
- Number of Islands
- Course Schedule
- Combination Sum
- Generate Parentheses
- Coin Change
- House Robber
- Longest Increasing Subsequence
- Longest Common Subsequence
- Merge Intervals

Target total:

```text
80–120 quality problems
```

## Advanced Interview

- Trapping Rain Water
- Largest Rectangle in Histogram
- LRU Cache
- Merge K Sorted Lists
- Serialize/Deserialize Binary Tree
- Word Ladder
- Alien Dictionary
- Network Delay Time
- Edit Distance
- Word Break
- Minimum Window Substring
- Median of Two Sorted Arrays
- Advanced binary-search-on-answer problems

Target total:

```text
150–200 carefully reviewed problems
```

Do not chase count blindly. After every problem, record:

```text
Pattern
Brute force
Optimization
Time
Space
Mistake
Recognition clue
```

---

# 49. 30-Day Revision Plan

## Days 1–3

```text
Complexity
Arrays
Strings
Hashing
```

## Days 4–6

```text
Linked Lists
Stacks
Queues
```

## Days 7–10

```text
Two Pointers
Sliding Window
Prefix Sum
Binary Search
```

## Days 11–13

```text
Recursion
Backtracking
```

## Days 14–17

```text
Trees
BST
Heap
Trie
```

## Days 18–21

```text
Graphs
BFS
DFS
Topological Sort
```

## Days 22–24

```text
Dijkstra
DSU
MST
```

## Days 25–27

```text
Greedy
Dynamic Programming
```

## Days 28–29

```text
Monotonic Stack
Intervals
Advanced Range Structures
```

## Day 30

Simulate an interview:

```text
1 array/string problem
1 tree/graph problem
1 DP/greedy problem
```

For each answer explain:

```text
Brute force
Optimization
Correctness idea
Time
Space
Edge cases
```

---

# 50. Glossary

## Algorithm
A finite procedure for solving a problem.

## Data Structure
A method for organizing and storing data.

## Node
An individual element in a linked structure such as a linked list, tree, or graph.

## Edge
A connection between graph vertices.

## Vertex
A graph node.

## Root
Topmost node of a tree.

## Leaf
A tree node with no children.

## Depth
Distance from the root to a node.

## Height
Longest downward path from a node to a leaf.

## Cycle
A path that returns to a previously visited node under the relevant graph interpretation.

## DAG
Directed Acyclic Graph.

## Connected Component
A maximal group of connected vertices in an undirected graph.

## Subarray
A contiguous part of an array.

## Substring
A contiguous part of a string.

## Subsequence
A selection preserving relative order but allowing skipped positions.

## Subset
A selection of elements without a contiguous/order requirement inherent to the mathematical set.

## Stable Sort
A sort that preserves the relative order of equal keys.

## In-place
Uses only a small amount of additional storage compared with the input.

## Amortized Complexity
Average operation cost over a sequence of operations.

## Memoization
Top-down caching of subproblem results.

## Tabulation
Bottom-up dynamic programming.

## Relaxation
Trying to improve a graph distance:

```text
dist[v] = min(dist[v], dist[u] + weight(u, v))
```

## Invariant
A condition that remains true while an algorithm runs.

Examples:

- Binary search keeps the answer inside the active search interval.
- Insertion sort keeps the processed prefix sorted.
- Sliding window maintains the chosen validity rule for the current window.

---

# 51. Advanced Topics

After the core handbook is comfortable, continue with these topics as needed.

## Advanced Trees

- AVL Tree
- Red-Black Tree
- B-tree / B+ Tree
- Sparse Table
- Binary Lifting
- Lowest Common Ancestor
- Heavy-Light Decomposition

## Advanced Graphs

- Tarjan SCC
- Bridges
- Articulation Points
- A* Search
- Max Flow
- Min Cut
- Bipartite Matching
- Eulerian Paths
- Hamiltonian concepts

## Advanced Dynamic Programming

- Bitmask DP
- Digit DP
- Tree DP
- Rerooting DP
- DP on DAG
- Divide-and-conquer DP optimization
- Knuth optimization concepts

## Advanced Strings

- Suffix Array
- Suffix Tree
- Suffix Automaton
- Rolling Hash
- Manacher's Algorithm
- Aho-Corasick

## Computational Geometry

- Orientation
- Segment intersection
- Convex Hull
- Sweep-line geometry
- Closest Pair

## Other Important Topics

- Meet in the Middle
- Randomized Algorithms
- Reservoir Sampling
- Bloom Filters
- Skip Lists
- LRU/LFU Cache Design
- Consistent Hashing concepts
- Game Theory
- Probability for Algorithms

Not all of these are required for ordinary software-development interviews, but they become useful in competitive programming, system internals, research, or specialized algorithmic roles.

---

# 52. Final Recognition Cheat Sheet

When you see:

```text
"pair in sorted array"
→ Two Pointers
```

```text
"substring/subarray + contiguous"
→ Sliding Window / Prefix Sum / Kadane / DP
```

```text
"top K / kth / priority"
→ Heap
```

```text
"duplicate / frequency / seen before"
→ Hash Map / Set
```

```text
"minimum possible maximum"
→ Binary Search on Answer
```

```text
"prerequisites / dependencies"
→ Directed Graph + Topological Sort
```

```text
"shortest path, all edges equal"
→ BFS
```

```text
"shortest weighted path, no negative weights"
→ Dijkstra
```

```text
"negative edge weights"
→ Bellman-Ford or another suitable negative-weight method
```

```text
"connect everything at minimum total cost"
→ MST
```

```text
"dynamic groups / connectivity"
→ DSU
```

```text
"generate every valid combination"
→ Backtracking
```

```text
"number of ways / minimum cost / maximum value + repeated subproblems"
→ Dynamic Programming
```

```text
"next greater / next smaller"
→ Monotonic Stack
```

```text
"prefix lookup / autocomplete"
→ Trie
```

```text
"many range queries + many updates"
→ Fenwick Tree / Segment Tree
```

---

# Bonus — How to Know You Truly Learned a Topic

You understand an algorithm when you can do all of these without copying:

- Explain it in simple language.
- Draw a small example.
- Implement a basic version.
- State its time complexity.
- State its space complexity.
- Explain why it is correct.
- Recognize when it is useful.
- Recognize when it is not useful.
- Solve a variation of the original problem.

Do not only memorize:

```text
Longest Substring Without Repeating Characters
```

Learn the reusable idea:

```text
Maintain a valid window.
Expand the right boundary.
When the rule breaks, move the left boundary.
Store only the information needed to validate the current window.
```

That reasoning transfers to many future problems.

---

# Bonus — Mini Projects for Learning DSA

## 1. Autocomplete Engine

Use:

```text
Trie
Hash Map
Heap
```

Features:

- Add words
- Search prefixes
- Rank suggestions

## 2. Route Finder

Use:

```text
Graph
BFS
Dijkstra
```

Features:

- Add locations
- Add roads
- Find shortest route

## 3. Task Scheduler

Use:

```text
Heap
Queue
Hash Map
```

Features:

- Priorities
- Deadlines
- Execution order

## 4. Social Network Analyzer

Use:

```text
Graph
BFS
DFS
Sets
```

Features:

- Add friendships
- Mutual friends
- Connection distance
- Connected groups

## 5. Calendar Conflict Detector

Use:

```text
Intervals
Sorting
Sweep Line
Heap
```

Features:

- Detect meeting conflicts
- Find free time
- Calculate required rooms/resources

---

# Final Principle

Do not aim to memorize 500 solutions.

Aim to recognize a relatively small set of reusable patterns.

For every new problem ask:

```text
1. What is the brute-force approach?
2. What work is repeated?
3. Can a data structure make that operation faster?
4. Is the data sorted or monotonic?
5. Is this about a contiguous range?
6. Is this really a graph problem?
7. Do subproblems repeat?
8. Do I need every possibility or only the best one?
9. Can a greedy choice be proven safe?
10. What are the time and space complexities?
```

Once these questions become automatic, DSA becomes structured problem solving rather than a collection of tricks.

---

**End of DSA Master Handbook**
