# DSA with JavaScript — Master Learning Handbook

> **Goal:** Build a complete, practical understanding of Data Structures and Algorithms (DSA) using JavaScript—from first principles to advanced interview and real-world problem-solving patterns.
>
> This handbook is designed to work as:
> - a beginner-friendly learning path,
> - a revision guide,
> - an interview-preparation reference,
> - a collection of reusable JavaScript templates,
> - and a single long-term DSA knowledge base.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Are Data Structures and Algorithms?](#2-what-are-data-structures-and-algorithms)
3. [JavaScript Foundations for DSA](#3-javascript-foundations-for-dsa)
4. [Time and Space Complexity](#4-time-and-space-complexity)
5. [Problem-Solving Framework](#5-problem-solving-framework)
6. [Arrays](#6-arrays)
7. [Strings](#7-strings)
8. [Hash Maps and Sets](#8-hash-maps-and-sets)
9. [Linked Lists](#9-linked-lists)
10. [Stacks](#10-stacks)
11. [Queues and Deques](#11-queues-and-deques)
12. [Recursion](#12-recursion)
13. [Searching Algorithms](#13-searching-algorithms)
14. [Sorting Algorithms](#14-sorting-algorithms)
15. [Two Pointers](#15-two-pointers)
16. [Sliding Window](#16-sliding-window)
17. [Prefix Sum and Difference Arrays](#17-prefix-sum-and-difference-arrays)
18. [Matrices and Grids](#18-matrices-and-grids)
19. [Backtracking](#19-backtracking)
20. [Trees](#20-trees)
21. [Binary Search Trees](#21-binary-search-trees)
22. [Heaps and Priority Queues](#22-heaps-and-priority-queues)
23. [Tries](#23-tries)
24. [Graphs](#24-graphs)
25. [Union-Find / Disjoint Set Union](#25-union-find--disjoint-set-union)
26. [Greedy Algorithms](#26-greedy-algorithms)
27. [Dynamic Programming](#27-dynamic-programming)
28. [Bit Manipulation](#28-bit-manipulation)
29. [Mathematics for DSA](#29-mathematics-for-dsa)
30. [Monotonic Stack and Queue](#30-monotonic-stack-and-queue)
31. [String-Matching Algorithms](#31-string-matching-algorithms)
32. [Segment Trees](#32-segment-trees)
33. [Fenwick Tree / Binary Indexed Tree](#33-fenwick-tree--binary-indexed-tree)
34. [Advanced Graph Algorithms](#34-advanced-graph-algorithms)
35. [Advanced Dynamic Programming](#35-advanced-dynamic-programming)
36. [Common Interview Patterns](#36-common-interview-patterns)
37. [JavaScript-Specific DSA Pitfalls](#37-javascript-specific-dsa-pitfalls)
38. [Reusable JavaScript Templates](#38-reusable-javascript-templates)
39. [DSA Learning Roadmap](#39-dsa-learning-roadmap)
40. [Practice Strategy](#40-practice-strategy)
41. [Complexity Cheat Sheet](#41-complexity-cheat-sheet)
42. [Pattern Recognition Cheat Sheet](#42-pattern-recognition-cheat-sheet)
43. [Interview Preparation Checklist](#43-interview-preparation-checklist)
44. [Mini Projects for DSA Practice](#44-mini-projects-for-dsa-practice)
45. [Final Revision Notes](#45-final-revision-notes)
46. [Additional Linked List Types](#appendix-s--additional-linked-list-types)
47. [Additional Sorting and Selection Algorithms](#appendix-t--additional-sorting-and-selection-algorithms)
48. [Tree Types You Should Know](#appendix-u--tree-types-you-should-know)
49. [Graph Representation and Cycle Detection](#appendix-v--graph-representation-and-cycle-detection)
50. [Full Shortest-Path Reference](#appendix-w--full-shortest-path-reference)
51. [Divide and Conquer](#appendix-x--divide-and-conquer)
52. [Amortized Analysis in Practice](#appendix-y--amortized-analysis-in-practice)
53. [Final DSA Decision Tree](#appendix-z--final-dsa-decision-tree)

---

# 1. How to Use This Handbook

Do not try to memorize every algorithm immediately.

A better cycle is:

1. **Understand the problem.**
2. **Write a brute-force solution.**
3. **Identify the bottleneck.**
4. **Choose a data structure or pattern that removes the bottleneck.**
5. **Implement it yourself.**
6. **Analyze time and space complexity.**
7. **Solve 3–10 related problems.**
8. **Revisit the topic later without looking at notes.**

For each topic, ask:

- What problem does this solve?
- Why is this data structure useful?
- What operations are fast?
- What operations are slow?
- What are the common patterns?
- When should I not use it?
- Can I implement it from scratch?
- Can I explain it to another person?

---

# 2. What Are Data Structures and Algorithms?

## 2.1 Data Structure

A **data structure** is a method for organizing data so that certain operations become efficient.

Examples:

- Array → ordered values and fast indexed access
- Hash Map → fast key-based lookup
- Stack → last-in-first-out processing
- Queue → first-in-first-out processing
- Heap → quickly retrieve minimum/maximum priority
- Tree → hierarchical data
- Graph → relationships and networks

### Real-world analogy

Suppose a company stores employee information.

If employees are stored in a plain array:

```js
const employees = [
  { id: 101, name: "Aisha" },
  { id: 102, name: "Ravi" },
  { id: 103, name: "Meera" }
];
```

To find employee `103`, we may scan the array.

But if we use a Map:

```js
const employeeById = new Map();

employeeById.set(101, { name: "Aisha" });
employeeById.set(102, { name: "Ravi" });
employeeById.set(103, { name: "Meera" });

console.log(employeeById.get(103));
```

Lookup becomes conceptually much faster for large datasets.

---

## 2.2 Algorithm

An **algorithm** is a finite sequence of steps used to solve a problem.

Example: Find the largest number.

```js
function findMax(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}
```

The data structure is the array.  
The algorithm is the procedure used to find the maximum.

---

## 2.3 Why DSA Matters

DSA improves your ability to:

- solve problems systematically,
- write scalable software,
- understand performance,
- design efficient APIs and services,
- optimize database or in-memory processing,
- prepare for technical interviews,
- understand how libraries work internally.

---

# 3. JavaScript Foundations for DSA

You do not need all of JavaScript before learning DSA, but you must be comfortable with the following.

## 3.1 Variables

```js
let count = 0;
const limit = 10;
```

Prefer `const` unless reassignment is required.

---

## 3.2 Arrays

```js
const nums = [10, 20, 30];

nums.push(40);
nums.pop();

console.log(nums[0]);
console.log(nums.length);
```

Important methods:

```js
arr.push(value);      // add to end
arr.pop();            // remove from end
arr.shift();          // remove from beginning
arr.unshift(value);   // add to beginning
arr.slice(start, end);
arr.splice(start, deleteCount);
arr.includes(value);
arr.indexOf(value);
arr.reverse();
arr.sort();
```

### Important warning

JavaScript's default `sort()` converts values to strings.

```js
console.log([10, 2, 30].sort());
// [10, 2, 30] in lexicographic behavior
```

Use:

```js
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending
```

---

## 3.3 Objects

```js
const frequencies = {};

frequencies["apple"] = 2;
frequencies["banana"] = 5;
```

For DSA, `Map` is often clearer when keys are dynamic.

---

## 3.4 Map

```js
const map = new Map();

map.set("a", 10);
map.set("b", 20);

console.log(map.get("a"));
console.log(map.has("b"));

map.delete("a");
```

Iteration:

```js
for (const [key, value] of map) {
  console.log(key, value);
}
```

---

## 3.5 Set

```js
const seen = new Set();

seen.add(10);
seen.add(20);

console.log(seen.has(10));

seen.delete(20);
```

Useful for:

- duplicate detection,
- visited nodes,
- unique elements,
- membership testing.

---

## 3.6 Loops

```js
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
```

```js
for (const value of nums) {
  console.log(value);
}
```

Avoid `for...in` for array values because it iterates property keys.

---

## 3.7 Functions

```js
function add(a, b) {
  return a + b;
}
```

Arrow function:

```js
const add = (a, b) => a + b;
```

---

## 3.8 Classes

Useful when implementing linked lists, trees, heaps, graphs, etc.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---

## 3.9 Destructuring

```js
const [a, b] = [10, 20];

const user = { name: "Ali", age: 25 };
const { name, age } = user;
```

---

## 3.10 Swap Trick

```js
[a, b] = [b, a];
```

Useful in sorting and two-pointer problems.

---

## 3.11 Number Limitations

JavaScript `Number` uses IEEE-754 double precision.

Safe integer range:

```js
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER
```

For very large integers:

```js
const huge = 12345678901234567890n;
```

Use `BigInt` when the problem requires integer precision beyond safe `Number` limits.

Do not directly mix `BigInt` and `Number`:

```js
// 10n + 5 // TypeError
10n + 5n;
```

---

## 3.12 Node.js Competitive Programming Input Template

```js
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const tokens = input.split(/\s+/);

let index = 0;

const n = Number(tokens[index++]);

const nums = [];
for (let i = 0; i < n; i++) {
  nums.push(Number(tokens[index++]));
}

console.log(nums);
```

---

# 4. Time and Space Complexity

Complexity measures how resource usage grows with input size.

Let `n` represent input size.

---

## 4.1 Big O

Big O commonly describes an upper bound on growth.

Typical complexities:

| Complexity | Name | Example |
|---|---|---|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Scan array |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Nested loops |
| O(n³) | Cubic | Triple nested loops |
| O(2ⁿ) | Exponential | Some subset recursion |
| O(n!) | Factorial | Permutations |

---

## 4.2 O(1)

```js
function first(arr) {
  return arr[0];
}
```

Input size does not affect the number of steps significantly.

---

## 4.3 O(n)

```js
function sum(arr) {
  let total = 0;

  for (const num of arr) {
    total += num;
  }

  return total;
}
```

---

## 4.4 O(n²)

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // work
  }
}
```

---

## 4.5 O(log n)

Repeatedly cutting the search space in half creates logarithmic complexity.

Example: binary search.

---

## 4.6 O(n log n)

Efficient comparison-based sorting algorithms often achieve O(n log n).

Examples:

- merge sort,
- heap sort,
- average-case quicksort.

---

## 4.7 Space Complexity

Space complexity measures additional memory.

Example:

```js
function doubled(arr) {
  const result = [];

  for (const num of arr) {
    result.push(num * 2);
  }

  return result;
}
```

Extra array → O(n) auxiliary space.

---

## 4.8 Drop Constants

O(2n) becomes O(n).

O(100) becomes O(1).

---

## 4.9 Keep Dominant Term

O(n² + n + 10) becomes O(n²).

---

## 4.10 Amortized Complexity

Some operations are occasionally expensive but cheap on average.

Dynamic array `push()` is usually considered amortized O(1), even though resizing the internal storage can occasionally cost O(n).

---

## 4.11 Input Size Heuristic

These are rough interview/competitive-programming heuristics:

| n | Often Acceptable |
|---:|---|
| 10 | O(n!) may sometimes work |
| 20 | O(2ⁿ) may work |
| 100 | O(n³) may work |
| 1,000 | O(n²) may work |
| 100,000 | O(n log n) / O(n) |
| 1,000,000 | Usually O(n) or O(n log n) carefully |

Actual limits depend on language, environment, constants, and time limit.

---

# 5. Problem-Solving Framework

Use this framework consistently.

## Step 1: Understand the problem

Identify:

- input,
- output,
- constraints,
- edge cases,
- whether ordering matters,
- whether duplicates matter,
- whether negative values exist,
- whether the input is sorted.

---

## Step 2: Work through examples

Example problem:

> Find two numbers whose sum equals a target.

Input:

```txt
[2, 7, 11, 15], target = 9
```

Output:

```txt
[0, 1]
```

---

## Step 3: Start with brute force

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
```

Complexity:

- Time: O(n²)
- Space: O(1)

---

## Step 4: Identify repeated work

For each number, brute force repeatedly searches for its complement.

Complement:

```txt
target - currentNumber
```

Use a Hash Map.

```js
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}
```

Complexity:

- Time: O(n) average
- Space: O(n)

---

## Step 5: Test edge cases

Test:

- empty input,
- one element,
- duplicates,
- negatives,
- answer at beginning,
- answer at end,
- no answer.

---

# 6. Arrays

An array stores elements in order.

```js
const arr = [10, 20, 30];
```

## 6.1 Common Operations

| Operation | Typical Complexity |
|---|---:|
| Access by index | O(1) |
| Search unsorted | O(n) |
| Push | Amortized O(1) |
| Pop | O(1) |
| Shift | O(n) |
| Unshift | O(n) |
| Insert/delete middle | O(n) |

---

## 6.2 Traversal

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

## 6.3 Find Maximum

```js
function maxValue(nums) {
  if (nums.length === 0) return undefined;

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}
```

---

## 6.4 Reverse In Place

```js
function reverseArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}
```

---

## 6.5 Remove Duplicates from Sorted Array

```js
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
}
```

Pattern: **read pointer + write pointer**.

---

## 6.6 Rotate Array

Rotate right by `k`.

```js
function reverse(nums, left, right) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

function rotate(nums, k) {
  const n = nums.length;
  if (n === 0) return nums;

  k %= n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
}
```

Time: O(n)  
Space: O(1)

---

## 6.7 Maximum Subarray — Kadane's Algorithm

Problem:

> Find the contiguous subarray with the largest sum.

```js
function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }

  return best;
}
```

Core idea:

At each position, decide:

- start a new subarray here, or
- extend the previous subarray.

Time: O(n)  
Space: O(1)

---

# 7. Strings

JavaScript strings are immutable.

```js
let text = "hello";
```

You cannot directly modify one character:

```js
// text[0] = "H"; // does not change the string
```

Convert when needed:

```js
const chars = text.split("");
chars[0] = "H";
text = chars.join("");
```

---

## 7.1 Character Frequency

```js
function frequencyMap(str) {
  const freq = new Map();

  for (const ch of str) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  return freq;
}
```

---

## 7.2 Palindrome

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```

---

## 7.3 Valid Anagram

```js
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  const freq = new Map();

  for (const ch of a) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  for (const ch of b) {
    if (!freq.has(ch)) return false;

    freq.set(ch, freq.get(ch) - 1);

    if (freq.get(ch) === 0) {
      freq.delete(ch);
    }
  }

  return freq.size === 0;
}
```

---

## 7.4 Longest Common Prefix

```js
function longestCommonPrefix(words) {
  if (words.length === 0) return "";

  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (!words[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") return "";
    }
  }

  return prefix;
}
```

---

## 7.5 String Problems Commonly Use

- frequency maps,
- two pointers,
- sliding window,
- stack,
- trie,
- dynamic programming,
- KMP/Z/Rabin-Karp for advanced matching.

---

# 8. Hash Maps and Sets

Hashing is one of the most important DSA techniques.

JavaScript provides:

```js
Map
Set
```

---

## 8.1 Why Hashing?

Suppose we repeatedly ask:

> Have I seen this value before?

Array search:

```js
arr.includes(value);
```

Worst-case O(n).

Set:

```js
seen.has(value);
```

Average expected lookup is commonly treated as O(1).

---

## 8.2 Duplicate Detection

```js
function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}
```

---

## 8.3 Frequency Counting

```js
function countWords(words) {
  const freq = new Map();

  for (const word of words) {
    freq.set(word, (freq.get(word) ?? 0) + 1);
  }

  return freq;
}
```

---

## 8.4 First Non-Repeating Character

```js
function firstUniqueChar(s) {
  const freq = new Map();

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
```

---

## 8.5 When to Think "Hash Map"

Use a map when you see:

- count,
- frequency,
- lookup by key,
- complement,
- group similar values,
- seen before,
- memoization,
- cache,
- index tracking.

---

# 9. Linked Lists

A linked list consists of nodes.

Each node stores:

- value,
- pointer/reference to the next node.

---

## 9.1 Node

```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---

## 9.2 Singly Linked List

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value) {
    const node = new ListNode(value);

    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.length++;
  }
}
```

---

## 9.3 Complexity

| Operation | Singly Linked List |
|---|---:|
| Access by index | O(n) |
| Search | O(n) |
| Insert at head | O(1) |
| Delete head | O(1) |
| Insert at tail with tail pointer | O(1) |

---

## 9.4 Reverse Linked List

```js
function reverseList(head) {
  let previous = null;
  let current = head;

  while (current) {
    const nextNode = current.next;

    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
}
```

Important interview pattern.

---

## 9.5 Find Middle — Fast and Slow Pointer

```js
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

---

## 9.6 Detect Cycle — Floyd's Algorithm

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
```

Time: O(n)  
Space: O(1)

---

## 9.7 Merge Two Sorted Lists

```js
function mergeTwoLists(a, b) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (a && b) {
    if (a.value <= b.value) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }

    current = current.next;
  }

  current.next = a ?? b;

  return dummy.next;
}
```

---

# 10. Stacks

A stack follows:

> **Last In, First Out (LIFO)**

Examples:

- browser back history,
- undo functionality,
- function call stack,
- expression parsing,
- DFS,
- bracket validation.

JavaScript arrays can implement stacks efficiently at the end:

```js
const stack = [];

stack.push(10);
stack.push(20);

console.log(stack.pop());
```

---

## 10.1 Valid Parentheses

```js
function isValidParentheses(s) {
  const stack = [];

  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ]);

  for (const ch of s) {
    if (pairs.has(ch)) {
      if (stack.pop() !== pairs.get(ch)) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
}
```

---

## 10.2 Min Stack

Support retrieving minimum in O(1).

```js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);

    const currentMin =
      this.minStack.length === 0
        ? value
        : Math.min(value, this.minStack[this.minStack.length - 1]);

    this.minStack.push(currentMin);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
```

---

# 11. Queues and Deques

A queue follows:

> **First In, First Out (FIFO)**

Examples:

- print jobs,
- support tickets,
- BFS,
- task scheduling,
- message processing.

---

## 11.1 Avoid Repeated `shift()` for Large Queues

Although convenient:

```js
queue.shift();
```

removing the first element may require reindexing.

A better pattern:

```js
const queue = [];
let head = 0;

queue.push("A");
queue.push("B");

const item = queue[head++];
```

---

## 11.2 Queue Class

```js
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const value = this.items[this.head];
    this.head++;

    return value;
  }

  front() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.head >= this.items.length;
  }

  size() {
    return this.items.length - this.head;
  }
}
```

---

## 11.3 Deque

A **deque** supports insertion/removal at both ends.

Useful in:

- sliding-window maximum,
- 0-1 BFS,
- monotonic queue,
- palindrome-like processing.

For performance-sensitive JavaScript, consider implementing a deque using an indexed object or circular buffer instead of frequent `shift()` / `unshift()`.

---

# 12. Recursion

Recursion occurs when a function calls itself.

Every recursive solution needs:

1. a base case,
2. progress toward that base case.

---

## 12.1 Factorial

```js
function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
```

---

## 12.2 Recursive Sum

```js
function sum(nums, index = 0) {
  if (index === nums.length) {
    return 0;
  }

  return nums[index] + sum(nums, index + 1);
}
```

---

## 12.3 Recursion Tree

Naive Fibonacci:

```js
function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
```

This repeats subproblems.

Complexity is exponential.

Memoization fixes it:

```js
function fib(n, memo = new Map()) {
  if (n <= 1) return n;

  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, result);

  return result;
}
```

---

## 12.4 Recursion vs Iteration

Use recursion naturally for:

- trees,
- DFS,
- backtracking,
- divide-and-conquer,
- memoized DP.

Use iteration when:

- stack depth may become very large,
- recursion overhead matters,
- the iterative solution is clearer.

JavaScript environments may throw a stack overflow for deep recursion.

---

# 13. Searching Algorithms

## 13.1 Linear Search

```js
function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}
```

Time: O(n)

---

## 13.2 Binary Search

Requirement:

> Search space must have monotonic/sorted structure.

```js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

Time: O(log n)

---

## 13.3 Lower Bound

Find the first index where:

```txt
nums[index] >= target
```

```js
function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
```

---

## 13.4 Upper Bound

First index where:

```txt
nums[index] > target
```

```js
function upperBound(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
```

---

## 13.5 Binary Search on Answer

Sometimes you are not searching an array.

You are searching the smallest/largest answer satisfying a condition.

Pattern:

```js
function binarySearchAnswer(low, high, canDo) {
  let answer = high;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (canDo(mid)) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}
```

Typical problems:

- minimum capacity,
- minimum speed,
- maximum feasible distance,
- minimum days,
- smallest threshold.

---

# 14. Sorting Algorithms

Sorting often simplifies a difficult problem.

It can enable:

- binary search,
- two pointers,
- greedy choices,
- duplicate handling,
- interval merging.

---

## 14.1 Bubble Sort

Repeatedly swap adjacent inverted pairs.

```js
function bubbleSort(nums) {
  const arr = [...nums];

  for (let end = arr.length - 1; end > 0; end--) {
    let swapped = false;

    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}
```

Worst: O(n²)

Mainly useful for learning.

---

## 14.2 Selection Sort

Select the minimum and place it next.

```js
function selectionSort(nums) {
  const arr = [...nums];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
```

Time: O(n²)

---

## 14.3 Insertion Sort

Good conceptual fit for nearly sorted data.

```js
function insertionSort(nums) {
  const arr = [...nums];

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = value;
  }

  return arr;
}
```

Worst: O(n²)

---

## 14.4 Merge Sort

Divide array in half, recursively sort, merge.

```js
function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);

  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
}
```

Time: O(n log n)  
Extra space: O(n)

---

## 14.5 Quick Sort

Choose a pivot and partition values around it.

```js
function quickSort(nums) {
  const arr = [...nums];

  function sort(left, right) {
    if (left >= right) return;

    const pivot = arr[right];
    let p = left;

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p++;
      }
    }

    [arr[p], arr[right]] = [arr[right], arr[p]];

    sort(left, p - 1);
    sort(p + 1, right);
  }

  sort(0, arr.length - 1);

  return arr;
}
```

Average: O(n log n)  
Worst: O(n²)

Randomized pivoting helps reduce bad cases.

---

## 14.6 Counting Sort

Useful when values are integers in a manageable range.

```js
function countingSort(nums) {
  if (nums.length === 0) return [];

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const count = new Array(max - min + 1).fill(0);

  for (const num of nums) {
    count[num - min]++;
  }

  const result = [];

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return result;
}
```

Time: O(n + k), where `k` is value range.

Do not use when the numeric range is enormous.

---

## 14.7 Sorting Comparison

| Algorithm | Best | Average | Worst | Extra Space |
|---|---:|---:|---:|---:|
| Bubble | O(n) optimized | O(n²) | O(n²) | O(1) |
| Selection | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion | O(n) | O(n²) | O(n²) | O(1) |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick | O(n log n) | O(n log n) | O(n²) | recursion |
| Counting | O(n+k) | O(n+k) | O(n+k) | O(k) |

---

# 15. Two Pointers

Two pointers use two indices that move according to a rule.

Common situations:

- sorted arrays,
- palindrome checking,
- partitioning,
- pair sum,
- removing duplicates,
- linked lists.

---

## 15.1 Pair Sum in Sorted Array

```js
function hasPairSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
```

Time: O(n)

---

## 15.2 Move Zeroes

```js
function moveZeroes(nums) {
  let insert = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insert], nums[i]] = [nums[i], nums[insert]];
      insert++;
    }
  }

  return nums;
}
```

---

## 15.3 Three Sum

Typical strategy:

1. sort,
2. fix one number,
3. use two pointers for the remaining pair.

```js
function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```

Time: O(n²)

---

# 16. Sliding Window

Sliding window is used for contiguous ranges.

Clues:

- subarray,
- substring,
- consecutive,
- longest/shortest range,
- at most / at least constraints.

---

## 16.1 Fixed-Size Window

Maximum sum of `k` consecutive values.

```js
function maxWindowSum(nums, k) {
  if (k > nums.length) return null;

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let best = windowSum;

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];

    best = Math.max(best, windowSum);
  }

  return best;
}
```

Time: O(n)

---

## 16.2 Variable-Size Window

Longest substring without repeating characters:

```js
function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();

  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }

    lastSeen.set(ch, right);

    best = Math.max(best, right - left + 1);
  }

  return best;
}
```

---

## 16.3 Minimum Length Subarray with Sum ≥ Target

Assuming positive numbers:

```js
function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let best = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= nums[left++];
    }
  }

  return best === Infinity ? 0 : best;
}
```

Sliding window works here because all values are positive, making the sum behave monotonically as the window expands/shrinks.

---

# 17. Prefix Sum and Difference Arrays

## 17.1 Prefix Sum

Given:

```txt
[2, 4, 1, 5]
```

Prefix sums:

```txt
[0, 2, 6, 7, 12]
```

Define:

```txt
prefix[i + 1] = prefix[i] + nums[i]
```

Then range sum `[left, right]` is:

```txt
prefix[right + 1] - prefix[left]
```

Implementation:

```js
function buildPrefix(nums) {
  const prefix = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  return prefix;
}

function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}
```

Build: O(n)  
Each query: O(1)

---

## 17.2 Prefix Sum + Hash Map

Count subarrays with sum `k`.

```js
function subarraySum(nums, k) {
  const count = new Map();
  count.set(0, 1);

  let prefix = 0;
  let answer = 0;

  for (const num of nums) {
    prefix += num;

    answer += count.get(prefix - k) ?? 0;

    count.set(prefix, (count.get(prefix) ?? 0) + 1);
  }

  return answer;
}
```

Important pattern.

---

## 17.3 Difference Array

Efficiently apply many range increments.

To add `value` to every position `[left, right]`:

```txt
diff[left] += value
diff[right + 1] -= value
```

Then reconstruct using prefix sum.

```js
function applyRangeUpdates(n, updates) {
  const diff = new Array(n + 1).fill(0);

  for (const [left, right, value] of updates) {
    diff[left] += value;

    if (right + 1 < n) {
      diff[right + 1] -= value;
    }
  }

  const result = new Array(n).fill(0);
  let running = 0;

  for (let i = 0; i < n; i++) {
    running += diff[i];
    result[i] = running;
  }

  return result;
}
```

---

# 18. Matrices and Grids

A matrix is commonly represented as:

```js
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

---

## 18.1 Traversal

```js
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[0].length; c++) {
    console.log(grid[r][c]);
  }
}
```

---

## 18.2 Direction Arrays

Very useful:

```js
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
```

Then:

```js
for (const [dr, dc] of directions) {
  const nr = r + dr;
  const nc = c + dc;
}
```

---

## 18.3 Flood Fill

```js
function floodFill(image, sr, sc, color) {
  const original = image[sr][sc];

  if (original === color) return image;

  const rows = image.length;
  const cols = image[0].length;

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      image[r][c] !== original
    ) {
      return;
    }

    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);

  return image;
}
```

---

## 18.4 Island Problems

Grid-island problems are graph problems in disguise.

Common actions:

- BFS/DFS connected cells,
- mark visited,
- count components,
- calculate area/perimeter,
- detect boundaries.

---

# 19. Backtracking

Backtracking explores possibilities and undoes choices.

General pattern:

```js
function backtrack(state, choices) {
  if (isSolution(state)) {
    saveSolution(state);
    return;
  }

  for (const choice of choices) {
    if (!isValid(choice, state)) continue;

    makeChoice(choice, state);
    backtrack(state, choices);
    undoChoice(choice, state);
  }
}
```

---

## 19.1 Generate Subsets

```js
function subsets(nums) {
  const result = [];
  const current = [];

  function dfs(index) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // exclude
    dfs(index + 1);

    // include
    current.push(nums[index]);
    dfs(index + 1);
    current.pop();
  }

  dfs(0);

  return result;
}
```

Time: O(2ⁿ × n) if copying each subset.

---

## 19.2 Permutations

```js
function permutations(nums) {
  const result = [];
  const current = [];
  const used = new Array(nums.length).fill(false);

  function dfs() {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      current.push(nums[i]);

      dfs();

      current.pop();
      used[i] = false;
    }
  }

  dfs();

  return result;
}
```

---

## 19.3 Combination Sum Style

```js
function combinationSum(candidates, target) {
  const result = [];
  const current = [];

  function dfs(start, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);

      dfs(i, remaining - candidates[i]);

      current.pop();
    }
  }

  dfs(0, target);

  return result;
}
```

---

## 19.4 Backtracking Clues

Think backtracking for:

- "generate all",
- combinations,
- permutations,
- subsets,
- N-Queens,
- Sudoku,
- word search,
- path enumeration,
- constraint satisfaction.

---

# 20. Trees

A tree is a hierarchical structure.

Important vocabulary:

- root,
- node,
- edge,
- parent,
- child,
- sibling,
- leaf,
- depth,
- height,
- subtree.

---

## 20.1 Binary Tree Node

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

---

## 20.2 DFS Traversals

### Preorder

```txt
root -> left -> right
```

```js
function preorder(root, result = []) {
  if (!root) return result;

  result.push(root.value);
  preorder(root.left, result);
  preorder(root.right, result);

  return result;
}
```

### Inorder

```txt
left -> root -> right
```

```js
function inorder(root, result = []) {
  if (!root) return result;

  inorder(root.left, result);
  result.push(root.value);
  inorder(root.right, result);

  return result;
}
```

### Postorder

```txt
left -> right -> root
```

```js
function postorder(root, result = []) {
  if (!root) return result;

  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.value);

  return result;
}
```

---

## 20.3 Level Order Traversal — BFS

```js
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let head = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++];

      level.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
```

---

## 20.4 Maximum Depth

```js
function maxDepth(root) {
  if (!root) return 0;

  return 1 + Math.max(
    maxDepth(root.left),
    maxDepth(root.right)
  );
}
```

---

## 20.5 Invert Binary Tree

```js
function invertTree(root) {
  if (!root) return null;

  [root.left, root.right] = [
    invertTree(root.right),
    invertTree(root.left)
  ];

  return root;
}
```

---

## 20.6 Diameter of Binary Tree

Diameter is the longest path between any two nodes, measured in edges.

```js
function diameterOfBinaryTree(root) {
  let best = 0;

  function height(node) {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    best = Math.max(best, left + right);

    return 1 + Math.max(left, right);
  }

  height(root);

  return best;
}
```

Important tree-DP idea:

> Return one value upward while updating a global answer.

---

## 20.7 Lowest Common Ancestor in Binary Tree

```js
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ?? right;
}
```

---

# 21. Binary Search Trees

BST property:

For each node:

```txt
left values < node value < right values
```

assuming distinct values.

---

## 21.1 Search

```js
function searchBST(root, target) {
  let current = root;

  while (current) {
    if (current.value === target) {
      return current;
    }

    current =
      target < current.value
        ? current.left
        : current.right;
  }

  return null;
}
```

Average when balanced: O(log n)  
Worst when skewed: O(n)

---

## 21.2 Insert

```js
function insertBST(root, value) {
  if (!root) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertBST(root.left, value);
  } else {
    root.right = insertBST(root.right, value);
  }

  return root;
}
```

---

## 21.3 Validate BST

Do not only compare a node with its immediate children.

Use allowed ranges:

```js
function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;

    if (node.value <= min || node.value >= max) {
      return false;
    }

    return (
      validate(node.left, min, node.value) &&
      validate(node.right, node.value, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}
```

---

## 21.4 Inorder Property

Inorder traversal of a valid BST produces sorted values.

This fact powers many BST problems.

---

# 22. Heaps and Priority Queues

A heap is a tree-based structure used to quickly access the smallest or largest element.

### Min Heap

Parent ≤ children.

### Max Heap

Parent ≥ children.

Common use cases:

- top K elements,
- scheduling,
- Dijkstra,
- running median,
- merge K sorted lists,
- task prioritization.

JavaScript historically has not had a universally available built-in priority queue across coding platforms, so it is valuable to know how to implement one.

---

## 22.1 Min Heap Implementation

```js
class MinHeap {
  constructor(compare = (a, b) => a - b) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.#bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.#bubbleDown(0);

    return top;
  }

  #bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
        break;
      }

      [this.heap[index], this.heap[parent]] =
        [this.heap[parent], this.heap[index]];

      index = parent;
    }
  }

  #bubbleDown(index) {
    const n = this.heap.length;

    while (true) {
      let best = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (
        left < n &&
        this.compare(this.heap[left], this.heap[best]) < 0
      ) {
        best = left;
      }

      if (
        right < n &&
        this.compare(this.heap[right], this.heap[best]) < 0
      ) {
        best = right;
      }

      if (best === index) break;

      [this.heap[index], this.heap[best]] =
        [this.heap[best], this.heap[index]];

      index = best;
    }
  }
}
```

---

## 22.2 Heap Complexity

| Operation | Complexity |
|---|---:|
| Peek min/max | O(1) |
| Insert | O(log n) |
| Remove min/max | O(log n) |
| Build heap | O(n) with bottom-up heapify |

---

## 22.3 K Largest Elements

Keep a min heap of size `k`.

```js
function kLargest(nums, k) {
  const heap = new MinHeap();

  for (const num of nums) {
    heap.push(num);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  const result = [];

  while (heap.size() > 0) {
    result.push(heap.pop());
  }

  return result.reverse();
}
```

Time: O(n log k)

---

# 23. Tries

A Trie stores strings by character prefixes.

Useful for:

- autocomplete,
- prefix search,
- dictionary lookup,
- spell-check-like systems,
- word search.

---

## 23.1 Trie Node

```js
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}
```

---

## 23.2 Trie

```js
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }

      node = node.children.get(ch);
    }

    node.isEnd = true;
  }

  search(word) {
    const node = this.#findNode(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix) {
    return this.#findNode(prefix) !== null;
  }

  #findNode(text) {
    let node = this.root;

    for (const ch of text) {
      if (!node.children.has(ch)) {
        return null;
      }

      node = node.children.get(ch);
    }

    return node;
  }
}
```

Time for word length `L`: O(L)

---

# 24. Graphs

A graph contains:

- vertices/nodes,
- edges/connections.

Types:

- directed,
- undirected,
- weighted,
- unweighted,
- cyclic,
- acyclic,
- connected,
- disconnected.

Real-world examples:

- social networks,
- roads,
- flight routes,
- dependencies,
- computer networks,
- recommendation relationships.

---

## 24.1 Adjacency List

```js
const graph = new Map();

function addEdge(a, b) {
  if (!graph.has(a)) graph.set(a, []);
  if (!graph.has(b)) graph.set(b, []);

  graph.get(a).push(b);
  graph.get(b).push(a);
}
```

For sparse graphs, adjacency lists are usually preferred.

---

## 24.2 BFS

```js
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  let head = 0;

  const order = [];

  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);

    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return order;
}
```

Use BFS for:

- shortest path in unweighted graph,
- levels,
- minimum number of moves,
- nearest target.

---

## 24.3 DFS

Recursive:

```js
function dfs(graph, start, visited = new Set(), order = []) {
  visited.add(start);
  order.push(start);

  for (const neighbor of graph.get(start) ?? []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, order);
    }
  }

  return order;
}
```

Iterative:

```js
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const order = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited.has(node)) continue;

    visited.add(node);
    order.push(node);

    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return order;
}
```

---

## 24.4 Connected Components

```js
function countComponents(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n).fill(false);
  let components = 0;

  function dfs(node) {
    visited[node] = true;

    for (const next of graph[node]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      components++;
      dfs(node);
    }
  }

  return components;
}
```

---

## 24.5 Topological Sort

Used for directed acyclic graphs (DAGs).

Examples:

- course prerequisites,
- build dependencies,
- task scheduling.

### Kahn's Algorithm

```js
function topologicalSort(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);

  for (const [from, to] of edges) {
    graph[from].push(to);
    indegree[to]++;
  }

  const queue = [];
  let head = 0;

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const order = [];

  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);

    for (const next of graph[node]) {
      indegree[next]--;

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return order.length === n ? order : [];
}
```

If not all nodes are processed, a directed cycle exists.

---

## 24.6 Dijkstra's Algorithm

Find shortest paths from a source when edge weights are non-negative.

```js
function dijkstra(n, graph, source) {
  const dist = new Array(n).fill(Infinity);
  dist[source] = 0;

  const pq = new MinHeap((a, b) => a[0] - b[0]);
  pq.push([0, source]);

  while (pq.size() > 0) {
    const [currentDist, node] = pq.pop();

    if (currentDist !== dist[node]) continue;

    for (const [next, weight] of graph[node]) {
      const candidate = currentDist + weight;

      if (candidate < dist[next]) {
        dist[next] = candidate;
        pq.push([candidate, next]);
      }
    }
  }

  return dist;
}
```

Typical complexity with a heap:

```txt
O((V + E) log V)
```

Dijkstra is not valid with negative-weight edges.

---

# 25. Union-Find / Disjoint Set Union

DSU tracks connected groups.

Operations:

- `find(x)` → representative of x's component
- `union(a, b)` → merge components

Useful for:

- connectivity,
- cycle detection,
- Kruskal MST,
- grouping,
- dynamic components.

---

## 25.1 Implementation

```js
class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA === rootB) {
      return false;
    }

    if (this.rank[rootA] < this.rank[rootB]) {
      [rootA, rootB] = [rootB, rootA];
    }

    this.parent[rootB] = rootA;

    if (this.rank[rootA] === this.rank[rootB]) {
      this.rank[rootA]++;
    }

    this.components--;

    return true;
  }
}
```

Path compression + union by rank makes operations extremely close to O(1) amortized.

---

# 26. Greedy Algorithms

A greedy algorithm makes the best local choice at each step.

The hard part is proving that local choices lead to a global optimum.

Common greedy clues:

- choose earliest finishing interval,
- choose largest/smallest feasible item,
- optimize by sorting,
- repeatedly take best available choice.

---

## 26.1 Interval Scheduling

Select maximum number of non-overlapping intervals.

Strategy:

> Sort by finishing time.

```js
function maxNonOverlapping(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }

  return count;
}
```

---

## 26.2 Jump Game

```js
function canJump(nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }

    farthest = Math.max(farthest, i + nums[i]);
  }

  return true;
}
```

Track the furthest reachable position.

---

## 26.3 Greedy vs DP

Ask:

> Once I make this local choice, can it ever prevent the global optimum?

If yes, greedy may fail.

When choices depend on previous state in complex ways, dynamic programming may be necessary.

---

# 27. Dynamic Programming

Dynamic Programming (DP) solves problems with:

1. **overlapping subproblems**
2. **optimal substructure**

Two main forms:

- memoization → top-down
- tabulation → bottom-up

---

## 27.1 DP Thinking Framework

For every DP problem, identify:

1. **State** — what does `dp[...]` mean?
2. **Transition** — how do previous states produce current state?
3. **Base case**
4. **Answer location**
5. **Computation order**
6. **Can space be optimized?**

---

## 27.2 Fibonacci — Memoization

```js
function fib(n, memo = new Map()) {
  if (n <= 1) return n;

  if (memo.has(n)) {
    return memo.get(n);
  }

  const value = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, value);

  return value;
}
```

---

## 27.3 Fibonacci — Tabulation

```js
function fib(n) {
  if (n <= 1) return n;

  const dp = new Array(n + 1).fill(0);

  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

---

## 27.4 Space Optimization

```js
function fib(n) {
  if (n <= 1) return n;

  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
```

---

## 27.5 Climbing Stairs

State:

```txt
dp[i] = number of ways to reach step i
```

Transition:

```txt
dp[i] = dp[i - 1] + dp[i - 2]
```

---

## 27.6 House Robber

At each house:

- rob it + best before previous,
- skip it + previous best.

```js
function rob(nums) {
  let prev2 = 0;
  let prev1 = 0;

  for (const money of nums) {
    const current = Math.max(
      prev1,
      prev2 + money
    );

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
```

---

## 27.7 0/1 Knapsack

Each item can be used at most once.

State idea:

```txt
dp[i][capacity]
```

or optimized:

```txt
dp[capacity]
```

```js
function knapsack(weights, values, capacity) {
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let c = capacity; c >= weights[i]; c--) {
      dp[c] = Math.max(
        dp[c],
        dp[c - weights[i]] + values[i]
      );
    }
  }

  return dp[capacity];
}
```

Important:

> Iterate capacity backward for 0/1 knapsack.

---

## 27.8 Unbounded Knapsack

Items can be reused.

Typically iterate capacity forward.

This difference is fundamental.

---

## 27.9 Coin Change — Minimum Coins

```js
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let current = 1; current <= amount; current++) {
    for (const coin of coins) {
      if (coin <= current) {
        dp[current] = Math.min(
          dp[current],
          dp[current - coin] + 1
        );
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
```

---

## 27.10 Longest Increasing Subsequence — O(n²)

```js
function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  let best = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    best = Math.max(best, dp[i]);
  }

  return best;
}
```

Advanced LIS can be solved in O(n log n) using binary search.

---

## 27.11 Longest Common Subsequence

```js
function longestCommonSubsequence(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;

  const dp = Array.from(
    { length: rows },
    () => new Array(cols).fill(0)
  );

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i][j - 1]
        );
      }
    }
  }

  return dp[a.length][b.length];
}
```

---

## 27.12 Grid DP

Number of unique paths:

```js
function uniquePaths(rows, cols) {
  const dp = new Array(cols).fill(1);

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[c] += dp[c - 1];
    }
  }

  return dp[cols - 1];
}
```

---

## 27.13 DP Categories

Learn these categories separately:

- 1D DP
- 2D DP
- grid DP
- knapsack
- subsequence DP
- string DP
- interval DP
- tree DP
- digit DP
- bitmask DP
- DAG DP.

---

# 28. Bit Manipulation

JavaScript bitwise operators work on 32-bit signed integers.

Operators:

```txt
&   AND
|   OR
^   XOR
~   NOT
<<  left shift
>>  signed right shift
>>> unsigned right shift
```

---

## 28.1 Check a Bit

```js
function isBitSet(num, bit) {
  return (num & (1 << bit)) !== 0;
}
```

---

## 28.2 Set a Bit

```js
num |= 1 << bit;
```

---

## 28.3 Clear a Bit

```js
num &= ~(1 << bit);
```

---

## 28.4 Toggle a Bit

```js
num ^= 1 << bit;
```

---

## 28.5 Odd or Even

```js
function isOdd(n) {
  return (n & 1) === 1;
}
```

---

## 28.6 XOR Properties

```txt
a ^ a = 0
a ^ 0 = a
XOR is associative and commutative
```

Find single number where every other value appears twice:

```js
function singleNumber(nums) {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
```

---

## 28.7 Subset Bitmask

For `n` small enough, every subset can be represented by a bitmask.

```js
function allSubsets(nums) {
  const result = [];
  const total = 1 << nums.length;

  for (let mask = 0; mask < total; mask++) {
    const subset = [];

    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) {
        subset.push(nums[i]);
      }
    }

    result.push(subset);
  }

  return result;
}
```

Because JavaScript bitwise operators are 32-bit, this style is limited for large `n`; use `BigInt`-based bit operations or a different representation when necessary.

---

# 29. Mathematics for DSA

## 29.1 GCD — Euclidean Algorithm

```js
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return Math.abs(a);
}
```

---

## 29.2 LCM

```js
function lcm(a, b) {
  return Math.abs((a / gcd(a, b)) * b);
}
```

Divide before multiply when possible to reduce overflow risk.

---

## 29.3 Prime Check

```js
function isPrime(n) {
  if (n < 2) return false;

  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      return false;
    }
  }

  return true;
}
```

Time: O(√n)

---

## 29.4 Sieve of Eratosthenes

Find primes up to `n`.

```js
function sieve(n) {
  const isPrime = new Array(n + 1).fill(true);

  isPrime[0] = false;
  if (n >= 1) isPrime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (!isPrime[p]) continue;

    for (let multiple = p * p; multiple <= n; multiple += p) {
      isPrime[multiple] = false;
    }
  }

  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }

  return primes;
}
```

---

## 29.5 Fast Exponentiation

Compute `base^exp` efficiently.

```js
function fastPow(base, exp) {
  let result = 1;

  while (exp > 0) {
    if (exp % 2 === 1) {
      result *= base;
    }

    base *= base;
    exp = Math.floor(exp / 2);
  }

  return result;
}
```

Time: O(log exp)

---

## 29.6 Modular Exponentiation with BigInt

```js
function modPow(base, exp, mod) {
  base = BigInt(base);
  exp = BigInt(exp);
  mod = BigInt(mod);

  let result = 1n;

  while (exp > 0n) {
    if (exp & 1n) {
      result = (result * base) % mod;
    }

    base = (base * base) % mod;
    exp >>= 1n;
  }

  return result;
}
```

---

# 30. Monotonic Stack and Queue

A monotonic structure keeps values in increasing or decreasing order.

These patterns often reduce O(n²) "find next greater/smaller" problems to O(n).

---

## 30.1 Next Greater Element

```js
function nextGreater(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length > 0 &&
      nums[i] > nums[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      result[index] = nums[i];
    }

    stack.push(i);
  }

  return result;
}
```

Each index enters and leaves the stack at most once.

Time: O(n)

---

## 30.2 Daily Temperatures Pattern

Same principle:

> Pop all previous positions whose answer has just been found.

---

## 30.3 Sliding Window Maximum

Use a deque that stores useful indices in decreasing value order.

```js
function maxSlidingWindow(nums, k) {
  const deque = [];
  let head = 0;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      head < deque.length &&
      deque[head] <= i - k
    ) {
      head++;
    }

    while (
      deque.length > head &&
      nums[deque[deque.length - 1]] <= nums[i]
    ) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[head]]);
    }
  }

  return result;
}
```

Time: O(n)

---

# 31. String-Matching Algorithms

## 31.1 Naive Matching

Try the pattern at every starting position.

Worst case:

```txt
O(n × m)
```

where:

- `n` = text length,
- `m` = pattern length.

---

## 31.2 KMP

KMP avoids rechecking characters by preprocessing the pattern.

It builds an LPS array:

> Longest Proper Prefix which is also Suffix.

### Build LPS

```js
function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);

  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}
```

### Search

```js
function kmpSearch(text, pattern) {
  if (pattern.length === 0) return 0;

  const lps = buildLPS(pattern);

  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      if (j === pattern.length) {
        return i - j;
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }

  return -1;
}
```

Time: O(n + m)

---

## 31.3 Rabin-Karp

Rabin-Karp compares rolling hashes.

Useful when:

- searching many patterns,
- substring hashing,
- plagiarism-like matching,
- repeated substring techniques.

Be aware of hash collisions.

---

## 31.4 Z Algorithm

The Z array stores:

> length of the longest substring starting at `i` that matches the prefix.

Useful for:

- pattern matching,
- repeated prefixes,
- string periodicity.

KMP and Z are both worth learning after mastering basic string patterns.

---

# 32. Segment Trees

A segment tree supports efficient range queries and point/range updates.

Common queries:

- range sum,
- range minimum,
- range maximum,
- GCD,
- custom associative aggregation.

Typical complexity:

| Operation | Complexity |
|---|---:|
| Build | O(n) |
| Query | O(log n) |
| Point update | O(log n) |

---

## 32.1 Range Sum Segment Tree

```js
class SegmentTree {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(2 * this.n).fill(0);

    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = nums[i];
    }

    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] =
        this.tree[i * 2] +
        this.tree[i * 2 + 1];
    }
  }

  update(index, value) {
    let pos = index + this.n;
    this.tree[pos] = value;

    while (pos > 1) {
      pos = Math.floor(pos / 2);

      this.tree[pos] =
        this.tree[pos * 2] +
        this.tree[pos * 2 + 1];
    }
  }

  query(left, right) {
    // [left, right)
    let l = left + this.n;
    let r = right + this.n;

    let sum = 0;

    while (l < r) {
      if (l % 2 === 1) {
        sum += this.tree[l++];
      }

      if (r % 2 === 1) {
        sum += this.tree[--r];
      }

      l = Math.floor(l / 2);
      r = Math.floor(r / 2);
    }

    return sum;
  }
}
```

---

## 32.2 Lazy Propagation

If a problem requires many range updates and range queries, a simple segment tree may not be enough.

**Lazy propagation** postpones updates until they are actually needed.

Learn lazy propagation after mastering:

- recursion,
- segment tree build/query/update,
- range semantics.

---

# 33. Fenwick Tree / Binary Indexed Tree

Fenwick Tree efficiently supports prefix sums with updates.

Typical complexity:

- update: O(log n)
- prefix sum: O(log n)
- range sum: O(log n)

It is simpler than a segment tree for prefix-sum-style operations.

---

## 33.1 Implementation

```js
class FenwickTree {
  constructor(n) {
    this.n = n;
    this.bit = new Array(n + 1).fill(0);
  }

  add(index, delta) {
    // external index: 0-based
    for (let i = index + 1; i <= this.n; i += i & -i) {
      this.bit[i] += delta;
    }
  }

  prefixSum(index) {
    let sum = 0;

    for (let i = index + 1; i > 0; i -= i & -i) {
      sum += this.bit[i];
    }

    return sum;
  }

  rangeSum(left, right) {
    return (
      this.prefixSum(right) -
      (left > 0 ? this.prefixSum(left - 1) : 0)
    );
  }
}
```

---

# 34. Advanced Graph Algorithms

## 34.1 Bellman-Ford

Use when negative edge weights may exist.

Properties:

- single-source shortest path,
- can detect reachable negative-weight cycles.

Complexity:

```txt
O(VE)
```

---

## 34.2 Floyd-Warshall

All-pairs shortest paths.

DP relation:

```txt
dist[i][j] =
min(
  dist[i][j],
  dist[i][k] + dist[k][j]
)
```

Complexity:

```txt
O(V³)
```

Good for smaller graphs.

---

## 34.3 Minimum Spanning Tree

Goal:

Connect all vertices with minimum total edge cost.

### Kruskal

1. Sort edges by weight.
2. Add smallest edge that does not create a cycle.
3. Use DSU.

```js
function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  const dsu = new DSU(n);

  let total = 0;
  let used = 0;

  for (const [u, v, weight] of edges) {
    if (dsu.union(u, v)) {
      total += weight;
      used++;

      if (used === n - 1) break;
    }
  }

  return used === n - 1 ? total : null;
}
```

---

## 34.4 Prim

Grow an MST from a starting node by repeatedly choosing the cheapest edge connecting the tree to an unvisited node.

Usually implemented with a min heap.

---

## 34.5 Strongly Connected Components

In a directed graph, an SCC is a maximal group where every node can reach every other node.

Common algorithms:

- Kosaraju,
- Tarjan.

Use cases:

- dependency cycles,
- condensation DAG,
- graph structure analysis.

---

## 34.6 Bridges and Articulation Points

### Bridge

An edge whose removal increases connected components.

### Articulation point

A vertex whose removal disconnects part of the graph.

These use DFS discovery times and low-link values.

Learn after mastering:

- DFS,
- graph timestamps,
- recursion tree,
- undirected graph parent handling.

---

# 35. Advanced Dynamic Programming

## 35.1 Interval DP

State represents a range:

```txt
dp[left][right]
```

Typical problems:

- matrix chain multiplication,
- burst balloons,
- palindrome partitioning,
- merging ranges.

---

## 35.2 Tree DP

State is calculated from child subtrees.

Typical pattern:

```js
function dfs(node, parent) {
  let value = base;

  for (const child of graph[node]) {
    if (child === parent) continue;

    const childValue = dfs(child, node);
    value = combine(value, childValue);
  }

  return value;
}
```

---

## 35.3 Bitmask DP

Used when `n` is small, often `n <= 20` approximately.

State:

```txt
dp[mask]
```

or:

```txt
dp[mask][last]
```

Common for:

- traveling salesperson,
- assignment,
- subset selection,
- visiting sets of nodes.

---

## 35.4 Digit DP

Counts numbers satisfying digit-based conditions without enumerating all values.

Typical state may include:

```txt
position
tight
started
additional properties
```

Examples:

- count numbers ≤ N with digit sum K,
- count numbers without repeated digits,
- count numbers containing a pattern.

This is an advanced topic.

---

## 35.5 DP Optimization Mindset

After solving a DP problem:

1. Can one dimension be removed?
2. Are only previous rows needed?
3. Can transitions be optimized with prefix sums?
4. Can monotonic queue optimization apply?
5. Can binary search reduce a transition?
6. Is there a greedy reformulation?

---

# 36. Common Interview Patterns

Learning patterns is more useful than memorizing isolated solutions.

---

## 36.1 Frequency Counter

Clues:

- duplicate,
- anagram,
- counts,
- matching frequency.

Use:

```js
Map
Set
```

---

## 36.2 Two Pointers

Clues:

- sorted array,
- pair target,
- palindrome,
- remove duplicates,
- opposite ends.

---

## 36.3 Sliding Window

Clues:

- contiguous,
- substring,
- subarray,
- longest/shortest,
- fixed-size window.

---

## 36.4 Fast and Slow Pointer

Clues:

- linked-list cycle,
- middle node,
- repeated-state sequence.

---

## 36.5 Binary Search

Clues:

- sorted input,
- monotonic condition,
- minimum feasible answer,
- maximum possible answer.

---

## 36.6 DFS/BFS

Clues:

- connected components,
- tree traversal,
- grid islands,
- path existence,
- shortest unweighted path.

---

## 36.7 Backtracking

Clues:

- all combinations,
- all permutations,
- choices with undo,
- constraint search.

---

## 36.8 Heap / Top K

Clues:

- K largest,
- K smallest,
- continuously retrieve min/max,
- streaming,
- priority scheduling.

---

## 36.9 Monotonic Stack

Clues:

- next greater,
- next smaller,
- nearest greater/smaller,
- histogram,
- temperature wait time.

---

## 36.10 Prefix Sum

Clues:

- many range sum queries,
- subarray sum,
- cumulative balance,
- count ranges.

---

## 36.11 Union-Find

Clues:

- dynamically connect groups,
- cycle in undirected graph,
- number of components,
- redundant connection.

---

## 36.12 Dynamic Programming

Clues:

- count number of ways,
- min/max result over choices,
- repeated subproblems,
- subsequence,
- optimal partition.

---

# 37. JavaScript-Specific DSA Pitfalls

## 37.1 Numeric Sort

Wrong:

```js
nums.sort();
```

Correct:

```js
nums.sort((a, b) => a - b);
```

---

## 37.2 `shift()` Performance

Repeated queue operations with `shift()` can be inefficient.

Prefer head index.

---

## 37.3 Deep Recursion

JavaScript may throw:

```txt
RangeError: Maximum call stack size exceeded
```

For deep DFS:

- use an iterative stack,
- or ensure input depth is safe.

---

## 37.4 `Number` Precision

Large integers may lose precision.

Use:

```js
BigInt
```

when required.

---

## 37.5 Bitwise 32-Bit Conversion

Bitwise operations convert numeric operands to 32-bit integers.

Do not assume JavaScript bitwise operations safely handle all `Number` integer magnitudes.

---

## 37.6 Object vs Map

Objects have prototype behavior and string/symbol property keys.

For DSA frequency/lookup logic, `Map` can be clearer:

```js
const map = new Map();
```

Use objects when appropriate, but understand the difference.

---

## 37.7 Copying Arrays

Shallow copy:

```js
const copy = [...arr];
```

For a matrix:

```js
const matrixCopy = matrix.map(row => [...row]);
```

This is still only a shallow copy at the nested-element level.

---

## 37.8 Matrix Initialization Bug

Wrong:

```js
const matrix = new Array(3).fill(new Array(3).fill(0));
```

All rows refer to the same array.

Correct:

```js
const matrix = Array.from(
  { length: 3 },
  () => new Array(3).fill(0)
);
```

---

## 37.9 String Immutability

Repeated string concatenation may be less suitable for some heavy construction scenarios.

Collect pieces and `join("")` when appropriate.

---

## 37.10 `Math.max(...largeArray)`

Spreading a huge array can exceed argument limits.

Safer:

```js
let max = -Infinity;

for (const value of nums) {
  if (value > max) max = value;
}
```

---

# 38. Reusable JavaScript Templates

## 38.1 Frequency Map

```js
function frequencyMap(values) {
  const freq = new Map();

  for (const value of values) {
    freq.set(value, (freq.get(value) ?? 0) + 1);
  }

  return freq;
}
```

---

## 38.2 Binary Search

```js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

---

## 38.3 Sliding Window

```js
function slidingWindow(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // add nums[right] to state

    while (/* window invalid */) {
      // remove nums[left] from state
      left++;
    }

    // update answer
  }
}
```

---

## 38.4 DFS Tree

```js
function dfs(node) {
  if (!node) return;

  dfs(node.left);
  dfs(node.right);
}
```

---

## 38.5 DFS Graph

```js
function dfs(graph, start) {
  const visited = new Set();

  function visit(node) {
    if (visited.has(node)) return;

    visited.add(node);

    for (const next of graph.get(node) ?? []) {
      visit(next);
    }
  }

  visit(start);

  return visited;
}
```

---

## 38.6 BFS

```js
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];

  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    for (const next of graph.get(node) ?? []) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }

  return visited;
}
```

---

## 38.7 Backtracking

```js
function backtrack(path, choices) {
  if (/* complete */) {
    // record a copy
    return;
  }

  for (const choice of choices) {
    if (/* invalid */) continue;

    path.push(choice);

    backtrack(path, choices);

    path.pop();
  }
}
```

---

## 38.8 Memoization

```js
function solve(state, memo = new Map()) {
  const key = JSON.stringify(state);

  if (memo.has(key)) {
    return memo.get(key);
  }

  const result = /* recurrence */;

  memo.set(key, result);

  return result;
}
```

For performance-critical problems, avoid expensive `JSON.stringify()` when a compact numeric/string key can be constructed.

---

## 38.9 Topological Sort

```js
function topo(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  const queue = [];
  let head = 0;

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];

  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);

    for (const next of graph[node]) {
      if (--indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return order.length === n ? order : null;
}
```

---

# 39. DSA Learning Roadmap

A good sequence matters.

## Phase 1 — Fundamentals

Learn:

- JavaScript basics,
- arrays,
- strings,
- objects,
- Map,
- Set,
- loops,
- functions,
- Big O.

Goal:

> Be able to analyze O(1), O(n), O(n²), O(log n), O(n log n).

---

## Phase 2 — Core Patterns

Learn:

- frequency counting,
- two pointers,
- sliding window,
- prefix sum,
- binary search.

These patterns solve a very large number of interview questions.

---

## Phase 3 — Linear Data Structures

Learn:

- linked list,
- stack,
- queue,
- deque.

Solve:

- reverse list,
- cycle detection,
- valid parentheses,
- min stack,
- queue-based BFS.

---

## Phase 4 — Recursion and Backtracking

Learn:

- recursion tree,
- base cases,
- subsets,
- permutations,
- combinations,
- N-Queens,
- grid search.

---

## Phase 5 — Trees

Learn:

- binary trees,
- DFS traversals,
- BFS,
- BST,
- depth,
- diameter,
- LCA,
- balanced-tree concepts.

---

## Phase 6 — Heap and Trie

Learn:

- min/max heap,
- priority queue,
- top K,
- trie insert/search/prefix.

---

## Phase 7 — Graphs

Learn:

- adjacency list,
- BFS,
- DFS,
- components,
- cycle detection,
- topological sort,
- Dijkstra,
- DSU,
- MST.

---

## Phase 8 — Dynamic Programming

Learn in this order:

1. Fibonacci-style 1D DP
2. Climbing stairs
3. House robber
4. Grid DP
5. Knapsack
6. Coin change
7. LIS
8. LCS
9. String DP
10. Interval DP
11. Tree DP
12. Bitmask DP

---

## Phase 9 — Advanced Topics

Learn:

- monotonic stack,
- monotonic queue,
- KMP/Z,
- segment tree,
- Fenwick tree,
- advanced graphs,
- bitmasking,
- advanced DP.

---

# 40. Practice Strategy

## 40.1 Use Difficulty Progression

For every topic:

```txt
Easy -> Easy -> Medium -> Medium -> Medium -> Hard
```

Do not jump directly into the hardest problems.

---

## 40.2 Solve by Pattern

Instead of random problems, group them.

Example sliding-window session:

1. fixed-size maximum sum,
2. longest unique substring,
3. smallest window satisfying a sum,
4. frequency-constrained substring,
5. window maximum.

This builds pattern recognition.

---

## 40.3 The 30-Minute Rule

When stuck:

1. spend meaningful time understanding the problem,
2. write examples,
3. attempt brute force,
4. identify constraints,
5. only then inspect a hint or explanation.

After reading a solution:

> Close it and reimplement from memory.

---

## 40.4 Maintain a Mistake Log

For every failed problem, record:

```txt
Problem:
Pattern:
What I tried:
Why it failed:
Correct idea:
Complexity:
What clue I missed:
```

This is one of the highest-value learning habits.

---

## 40.5 Repetition Schedule

Re-solve difficult problems after:

- 1 day,
- 3 days,
- 7 days,
- 14 days,
- 30 days.

Do not only reread solutions.

---

## 40.6 Explain Out Loud

After solving:

> "I use a sliding window because the problem asks for the longest contiguous substring and the validity condition can be restored by moving the left pointer."

If you can explain the solution clearly, you likely understand it.

---

# 41. Complexity Cheat Sheet

## Arrays

| Operation | Complexity |
|---|---:|
| Access | O(1) |
| Search | O(n) |
| Push | amortized O(1) |
| Pop | O(1) |
| Shift | O(n) |
| Unshift | O(n) |
| Insert/delete middle | O(n) |

---

## Hash Map / Set

Typical expected behavior:

| Operation | Average |
|---|---:|
| Insert | O(1) |
| Lookup | O(1) |
| Delete | O(1) |

---

## Linked List

| Operation | Complexity |
|---|---:|
| Access by index | O(n) |
| Search | O(n) |
| Insert head | O(1) |
| Delete head | O(1) |

---

## Stack

| Operation | Complexity |
|---|---:|
| Push | O(1) amortized |
| Pop | O(1) |
| Peek | O(1) |

---

## Queue

With a proper head-index/circular-buffer implementation:

| Operation | Complexity |
|---|---:|
| Enqueue | O(1) amortized |
| Dequeue | O(1) |
| Front | O(1) |

---

## Heap

| Operation | Complexity |
|---|---:|
| Peek | O(1) |
| Push | O(log n) |
| Pop | O(log n) |

---

## BST

Balanced:

| Operation | Complexity |
|---|---:|
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(log n) |

Worst-case skewed:

```txt
O(n)
```

---

## Graph

Adjacency list:

| Algorithm | Complexity |
|---|---:|
| BFS | O(V + E) |
| DFS | O(V + E) |
| Topological Sort | O(V + E) |
| Dijkstra + heap | O((V+E) log V) |
| Bellman-Ford | O(VE) |
| Floyd-Warshall | O(V³) |

---

## Sorting

| Algorithm | Complexity |
|---|---:|
| Bubble | O(n²) |
| Selection | O(n²) |
| Insertion | O(n²) worst |
| Merge | O(n log n) |
| Quick | O(n log n) average |
| Counting | O(n + k) |

---

# 42. Pattern Recognition Cheat Sheet

Use this quick mapping during practice.

| Problem Clue | Think About |
|---|---|
| Pair in sorted array | Two pointers |
| Find value in sorted array | Binary search |
| Minimum feasible value | Binary search on answer |
| Duplicate / frequency | Map / Set |
| Contiguous subarray/substring | Sliding window |
| Many range sums | Prefix sum |
| Many range updates | Difference array |
| Reverse/middle/cycle in linked list | Pointer manipulation |
| Matching brackets | Stack |
| Next greater/smaller | Monotonic stack |
| Repeatedly get min/max | Heap |
| Top K | Heap |
| Prefix words | Trie |
| Hierarchy | Tree |
| Unweighted shortest path | BFS |
| Connected components | DFS/BFS/DSU |
| Dependencies | Topological sort |
| Weighted shortest path, no negatives | Dijkstra |
| Negative weights | Bellman-Ford |
| Connect all nodes cheaply | MST |
| All subsets/permutations | Backtracking |
| Count ways / min-max choices | DP |
| Repeated recursion states | Memoization |
| Small n with subset state | Bitmask DP |
| Dynamic range query | Segment/Fenwick tree |
| Pattern search in long text | KMP/Z/Rabin-Karp |

---

# 43. Interview Preparation Checklist

Before interviews, you should be able to implement without notes:

- Array traversal
- Hash map frequency counting
- Two Sum
- Two pointers
- Sliding window
- Prefix sum
- Binary search
- Lower/upper bound
- Linked-list reversal
- Fast/slow pointer
- Stack
- Queue
- BFS
- DFS
- Binary-tree traversals
- BST search/validation
- Heap
- Top K
- Backtracking subsets/permutations
- Topological sort
- DSU
- Dijkstra
- Basic greedy
- 1D DP
- 2D DP
- Knapsack
- LCS/LIS concepts
- Monotonic stack

You should also be able to explain:

- time complexity,
- space complexity,
- trade-offs,
- edge cases,
- why your chosen pattern works.

---

# 44. Mini Projects for DSA Practice

Projects make DSA feel practical.

## 44.1 Autocomplete Search

Use:

- Trie,
- DFS,
- ranking.

Features:

- insert words,
- prefix lookup,
- return top suggestions.

---

## 44.2 Route Finder

Use:

- graph,
- BFS,
- Dijkstra.

Features:

- cities as nodes,
- roads as edges,
- shortest route,
- cheapest route.

---

## 44.3 Task Scheduler

Use:

- priority queue,
- heap,
- queue.

Features:

- priority,
- deadline,
- execution order.

---

## 44.4 Browser History Simulator

Use:

- stack,
- doubly linked list.

Features:

- visit,
- back,
- forward.

---

## 44.5 Social Network Suggestions

Use:

- graph,
- BFS,
- sets.

Features:

- mutual friends,
- distance between users,
- connected groups.

---

## 44.6 Cache

Implement:

- LRU Cache.

Use:

- Hash Map,
- doubly linked list.

Target complexity:

```txt
get()  -> O(1)
put()  -> O(1)
```

---

## 44.7 Search Engine Word Index

Use:

- Map,
- Set,
- Trie,
- inverted index ideas.

Features:

- document indexing,
- word lookup,
- prefix lookup,
- occurrence counts.

---

# 45. Final Revision Notes

## 45.1 Core Principle

DSA is not about memorizing 500 solutions.

It is about recognizing:

```txt
problem structure
      ↓
correct pattern
      ↓
correct data structure
      ↓
efficient implementation
```

---

## 45.2 The Most Important Topics

If you must prioritize, master these first:

1. Big O
2. Arrays
3. Strings
4. Hash Maps / Sets
5. Two Pointers
6. Sliding Window
7. Binary Search
8. Stack / Queue
9. Linked Lists
10. Recursion
11. Trees
12. BFS / DFS
13. Heap
14. Graphs
15. Greedy
16. Dynamic Programming

Then add advanced topics.

---

# Appendix A — Detailed Scenario Guide

This section connects real scenarios with the appropriate DSA idea.

## Scenario 1: Detect duplicate transaction IDs

Requirement:

> A payment system receives transaction IDs. Detect whether an ID has already appeared.

Use:

```txt
Set
```

Why:

Membership lookup is the core operation.

---

## Scenario 2: Count API calls per client

Requirement:

> Calculate how many requests each client ID made.

Use:

```txt
Map<ClientId, Count>
```

---

## Scenario 3: Last 100 application logs

Requirement:

> Keep only the newest 100 logs.

Use:

```txt
Queue / circular buffer
```

---

## Scenario 4: Undo editor actions

Requirement:

> Undo most recent action first.

Use:

```txt
Stack
```

---

## Scenario 5: Customer support tickets

Requirement:

> Process tickets in arrival order.

Use:

```txt
Queue
```

If priority matters:

```txt
Priority Queue
```

---

## Scenario 6: Employee reporting hierarchy

Requirement:

> Find all employees under a manager.

Use:

```txt
Tree
```

---

## Scenario 7: Road navigation

Requirement:

> Find shortest travel route.

Use:

```txt
Weighted Graph + Dijkstra
```

---

## Scenario 8: Course prerequisites

Requirement:

> Find an order in which courses can be completed.

Use:

```txt
Directed Graph + Topological Sort
```

---

## Scenario 9: Search autocomplete

Requirement:

> Return words beginning with a typed prefix.

Use:

```txt
Trie
```

---

## Scenario 10: Top 10 most active users

Use:

```txt
Hash Map for counts
+
Heap for Top K
```

---

## Scenario 11: Maximum activity during any 5-minute window

Use:

```txt
Sliding Window
```

---

## Scenario 12: Thousands of range sum queries

Use:

```txt
Prefix Sum
```

If values also change dynamically:

```txt
Fenwick Tree / Segment Tree
```

---

## Scenario 13: Merge overlapping bookings

Sort intervals then merge.

```js
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}
```

Pattern:

```txt
Sort + Greedy / Interval Processing
```

---

## Scenario 14: Shortest number of moves in a game

If each move has equal cost:

```txt
BFS
```

If move costs differ and are non-negative:

```txt
Dijkstra
```

---

## Scenario 15: Find clusters of users

If users are connected by relationships:

```txt
DFS / BFS / DSU
```

---

# Appendix B — Classic Problems by Topic

Use this as a practice checklist.

## Arrays

- Two Sum
- Best Time to Buy and Sell Stock
- Maximum Subarray
- Product of Array Except Self
- Rotate Array
- Merge Sorted Array
- Missing Number

## Strings

- Valid Anagram
- Valid Palindrome
- Longest Common Prefix
- Group Anagrams
- Longest Substring Without Repeating Characters
- Minimum Window Substring

## Linked Lists

- Reverse Linked List
- Middle of Linked List
- Linked List Cycle
- Merge Two Sorted Lists
- Remove Nth Node From End
- Reorder List
- LRU Cache

## Stack

- Valid Parentheses
- Min Stack
- Daily Temperatures
- Next Greater Element
- Largest Rectangle in Histogram
- Evaluate Reverse Polish Notation

## Queue / BFS

- Number of Islands
- Rotting Oranges
- Shortest Path in Binary Matrix
- Binary Tree Level Order Traversal

## Binary Search

- Binary Search
- Search Insert Position
- First/Last Position
- Search Rotated Sorted Array
- Find Minimum in Rotated Sorted Array
- Koko Eating Bananas style problems

## Trees

- Maximum Depth
- Invert Binary Tree
- Same Tree
- Balanced Binary Tree
- Diameter
- LCA
- Validate BST
- Kth Smallest in BST
- Serialize/Deserialize Binary Tree

## Heap

- Kth Largest
- Top K Frequent Elements
- Merge K Sorted Lists
- Find Median from Data Stream
- Task Scheduler

## Graphs

- Number of Islands
- Clone Graph
- Course Schedule
- Number of Connected Components
- Network Delay Time
- Cheapest Flights
- Redundant Connection
- Minimum Spanning Tree

## Backtracking

- Subsets
- Permutations
- Combination Sum
- Letter Combinations
- Word Search
- Palindrome Partitioning
- N-Queens
- Sudoku Solver

## Dynamic Programming

- Climbing Stairs
- House Robber
- Coin Change
- Partition Equal Subset Sum
- Longest Increasing Subsequence
- Longest Common Subsequence
- Edit Distance
- Unique Paths
- Word Break
- Decode Ways
- Burst Balloons

---

# Appendix C — LRU Cache from Scratch

An LRU cache combines:

```txt
Hash Map + Doubly Linked List
```

Why?

Map gives O(1) key lookup.

Doubly linked list gives O(1) removal and movement when the node is already known.

```js
class DoublyNode {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;

    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.left = new DoublyNode();
    this.right = new DoublyNode();

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  #remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  #insertAtRight(node) {
    const previous = this.right.prev;

    previous.next = node;
    node.prev = previous;

    node.next = this.right;
    this.right.prev = node;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);

    this.#remove(node);
    this.#insertAtRight(node);

    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.#remove(this.map.get(key));
    }

    const node = new DoublyNode(key, value);

    this.map.set(key, node);
    this.#insertAtRight(node);

    if (this.map.size > this.capacity) {
      const lru = this.left.next;

      this.#remove(lru);
      this.map.delete(lru.key);
    }
  }
}
```

This is an excellent example of combining multiple data structures.

---

# Appendix D — Advanced Binary Search Examples

## Search Rotated Sorted Array

```js
function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // left side sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right side sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
```

Key insight:

At least one half is sorted.

---

# Appendix E — Advanced Interval Patterns

## Merge Intervals

Covered earlier.

## Insert Interval

Strategy:

1. append all intervals completely before new interval,
2. merge overlapping intervals,
3. append remaining intervals.

## Meeting Rooms

Sort starts and ends or use a min heap.

Clue:

> How many simultaneous intervals exist?

Think:

- sweep line,
- heap,
- sorted events.

---

# Appendix F — Sweep Line

A sweep-line algorithm converts intervals/events into ordered points.

Example:

For each interval `[start, end]`:

```txt
(start, +1)
(end, -1)
```

Sort events, accumulate active count.

Use cases:

- maximum overlapping meetings,
- room allocation,
- concurrent sessions,
- timeline utilization.

Be careful about tie-breaking when one interval ends exactly when another starts.

---

# Appendix G — Coordinate Compression

Sometimes values are huge:

```txt
[1000000000, 50, 900000000]
```

but only relative order matters.

Compress:

```txt
50 -> 0
900000000 -> 1
1000000000 -> 2
```

Implementation:

```js
function coordinateCompress(values) {
  const sorted = [...new Set(values)].sort((a, b) => a - b);

  const rank = new Map();

  sorted.forEach((value, index) => {
    rank.set(value, index);
  });

  return values.map(value => rank.get(value));
}
```

Useful with:

- Fenwick trees,
- segment trees,
- inversion counting,
- offline queries.

---

# Appendix H — Inversion Count

An inversion is a pair:

```txt
i < j and nums[i] > nums[j]
```

Brute force:

```txt
O(n²)
```

Can be counted in:

```txt
O(n log n)
```

using merge sort.

This is a powerful example of using the merge step to count relationships.

---

# Appendix I — Meet-in-the-Middle

For some subset problems where `n ≈ 40`, `2^n` is too large but `2^(n/2)` may work.

Strategy:

1. split input in half,
2. enumerate subset values for each half,
3. sort/search/combine results.

Typical complexity:

```txt
O(2^(n/2))
```

Useful for:

- subset sum,
- closest subset target,
- constrained combinatorial search.

---

# Appendix J — Sparse Table

A sparse table is useful for **static** range queries where data does not change.

Common example:

```txt
Range Minimum Query
```

Typical:

- Build: O(n log n)
- Query: O(1) for idempotent operations such as min/max

Choose:

- Prefix sum → static sums
- Fenwick → dynamic prefix sums
- Segment tree → flexible dynamic range queries
- Sparse table → static min/max-like queries

---

# Appendix K — Shortest Path Decision Table

| Graph Type | Algorithm |
|---|---|
| Unweighted | BFS |
| All edges same cost | BFS |
| Weights 0 or 1 | 0-1 BFS |
| Non-negative weights | Dijkstra |
| Negative weights | Bellman-Ford |
| All-pairs, smaller V | Floyd-Warshall |
| DAG | Topological-order relaxation |

---

# Appendix L — 0-1 BFS Concept

If every edge weight is only `0` or `1`:

- weight 0 → push to front,
- weight 1 → push to back.

This gives:

```txt
O(V + E)
```

and can outperform Dijkstra.

Requires a proper deque.

---

# Appendix M — Common Mistakes by Topic

## Arrays

- forgetting empty input,
- off-by-one indexing,
- modifying the input unintentionally.

## Binary Search

- infinite loop,
- incorrect boundaries,
- wrong inequality,
- not defining what left/right represent.

## Sliding Window

- using it when negative values break monotonic behavior,
- forgetting to remove outgoing state,
- moving left incorrectly.

## Trees

- missing null base case,
- confusing height in nodes vs edges,
- using a global variable without resetting it.

## Graphs

- forgetting visited tracking,
- treating directed edges as undirected,
- not processing disconnected components.

## Dijkstra

- using it with negative edges,
- not skipping stale heap entries.

## DP

- state not clearly defined,
- incorrect base case,
- wrong iteration order,
- accidentally reusing an item in 0/1 knapsack.

## Backtracking

- forgetting to undo a choice,
- storing `current` without copying it,
- failing to skip duplicates when required.

---

# Appendix N — How to Derive an Optimized Solution

Suppose brute force is O(n²).

Ask:

### Question 1

Am I repeatedly searching for an item?

Use:

```txt
Set / Map
```

### Question 2

Is the input sorted or can I sort it?

Use:

```txt
Two pointers / Binary search
```

### Question 3

Am I recalculating a range sum?

Use:

```txt
Prefix sum
```

### Question 4

Am I evaluating overlapping contiguous ranges?

Use:

```txt
Sliding window
```

### Question 5

Am I repeatedly finding next greater/smaller?

Use:

```txt
Monotonic stack
```

### Question 6

Am I recursively solving the same state?

Use:

```txt
Memoization / DP
```

### Question 7

Am I repeatedly finding the minimum/maximum among active candidates?

Use:

```txt
Heap
```

This "bottleneck-first" thinking is one of the best ways to improve.

---

# Appendix O — Communication During Interviews

A strong technical answer is not only code.

Use a structure like:

```txt
1. Clarify requirements.
2. Give brute-force approach.
3. State its complexity.
4. Identify the bottleneck.
5. Propose optimized approach.
6. Explain why it works.
7. Implement.
8. Test.
9. State final complexity.
```

Example:

> "A brute-force approach checks every pair, which is O(n²). Since for each number I need to know whether its complement has already appeared, I can store previous values in a Map. That reduces average lookup to constant time, making the whole pass O(n) with O(n) extra space."

This demonstrates understanding instead of memorization.

---

# Appendix P — 12-Week Suggested Study Plan

## Week 1

- JavaScript DSA syntax
- Big O
- Arrays
- Strings

## Week 2

- Hash Map
- Set
- Two Pointers

## Week 3

- Sliding Window
- Prefix Sum
- Binary Search

## Week 4

- Linked Lists
- Stack
- Queue

## Week 5

- Recursion
- Backtracking

## Week 6

- Trees
- BST
- BFS/DFS on trees

## Week 7

- Heap
- Trie
- Intervals

## Week 8

- Graph BFS/DFS
- Components
- Topological Sort

## Week 9

- DSU
- Dijkstra
- MST
- Greedy

## Week 10

- 1D DP
- Grid DP
- Knapsack

## Week 11

- LCS
- LIS
- String DP
- Advanced DP patterns

## Week 12

- Monotonic Stack
- Fenwick Tree
- Segment Tree
- String algorithms
- Mixed interview sets

Repeat difficult topics after the initial 12 weeks.

---

# Appendix Q — Mastery Levels

## Level 1 — Beginner

You can:

- write loops,
- use arrays/maps/sets,
- solve linear-search problems,
- understand Big O basics.

## Level 2 — Foundation

You can:

- use two pointers,
- sliding window,
- binary search,
- stack,
- queue,
- linked list.

## Level 3 — Intermediate

You can:

- solve tree DFS/BFS,
- backtracking,
- heaps,
- graph traversal,
- basic greedy.

## Level 4 — Strong

You can:

- solve topological sort,
- DSU,
- Dijkstra,
- common DP patterns,
- monotonic stack.

## Level 5 — Advanced

You can:

- derive DP states,
- solve advanced graph problems,
- use segment/Fenwick trees,
- understand KMP/Z,
- apply bitmask/interval/tree DP.

## Level 6 — Interview Ready

You can:

- identify patterns quickly,
- explain trade-offs,
- write correct code under time pressure,
- test edge cases,
- optimize from brute force,
- discuss complexity confidently.

---

# Appendix R — Final Master Checklist

Mark a topic complete only when you can:

- explain it,
- implement it,
- analyze it,
- recognize when to use it,
- solve multiple related problems.

## Fundamentals

- [ ] JavaScript syntax for DSA
- [ ] Big O
- [ ] Space complexity
- [ ] Arrays
- [ ] Strings
- [ ] Map / Set

## Core Patterns

- [ ] Frequency counting
- [ ] Two pointers
- [ ] Sliding window
- [ ] Prefix sum
- [ ] Difference array
- [ ] Binary search
- [ ] Binary search on answer

## Linear Structures

- [ ] Linked list
- [ ] Fast/slow pointers
- [ ] Stack
- [ ] Queue
- [ ] Deque
- [ ] Monotonic stack
- [ ] Monotonic queue

## Recursion

- [ ] Recursion basics
- [ ] Backtracking
- [ ] Subsets
- [ ] Permutations
- [ ] Combinations

## Trees

- [ ] Binary tree
- [ ] DFS traversals
- [ ] BFS
- [ ] BST
- [ ] Height/depth
- [ ] Diameter
- [ ] LCA

## Specialized Structures

- [ ] Heap
- [ ] Priority queue
- [ ] Trie
- [ ] DSU
- [ ] Fenwick tree
- [ ] Segment tree

## Graphs

- [ ] Graph representation
- [ ] BFS
- [ ] DFS
- [ ] Components
- [ ] Cycle detection
- [ ] Topological sort
- [ ] Dijkstra
- [ ] Bellman-Ford
- [ ] Floyd-Warshall
- [ ] Kruskal
- [ ] Prim
- [ ] SCC concepts
- [ ] Bridges/articulation concepts

## Dynamic Programming

- [ ] Memoization
- [ ] Tabulation
- [ ] 1D DP
- [ ] 2D DP
- [ ] Grid DP
- [ ] Knapsack
- [ ] Coin change
- [ ] LIS
- [ ] LCS
- [ ] String DP
- [ ] Interval DP
- [ ] Tree DP
- [ ] Bitmask DP
- [ ] Digit DP concepts

## Strings

- [ ] Frequency patterns
- [ ] Sliding window strings
- [ ] Trie
- [ ] KMP
- [ ] Z algorithm concept
- [ ] Rabin-Karp concept

## Mathematics / Bits

- [ ] GCD
- [ ] LCM
- [ ] Prime checking
- [ ] Sieve
- [ ] Fast exponentiation
- [ ] Modular arithmetic basics
- [ ] Bit manipulation
- [ ] Subset masks

---

# Closing Principle

When facing a new DSA problem, do not immediately ask:

> "Which solution did I memorize?"

Ask:

> "What is the structure of this problem?"

Then reason:

```txt
What operations are repeated?
What information must I remember?
Does order matter?
Is the input sorted?
Is the answer a contiguous range?
Is this a connectivity problem?
Are there repeated subproblems?
Do I need the min/max candidate repeatedly?
Can I model this as a graph?
Can I define a DP state?
```

That is the point where DSA changes from memorization into engineering problem solving.

---

**End of Handbook**


# Appendix S — Additional Linked List Types

## Doubly Linked List

Each node stores:

```txt
previous <- node -> next
```

This makes removal of a **known node** O(1), because both neighbors are directly accessible.

```js
class DoublyLinkedNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new DoublyLinkedNode(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  remove(node) {
    if (!node) return;

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
    this.length--;
  }
}
```

Common use cases:

- LRU cache,
- browser history,
- playlists,
- navigation in both directions.

---

## Circular Linked List

In a circular list, the final node points back to the first node.

```txt
A -> B -> C
^         |
|_________|
```

Use cases:

- round-robin scheduling,
- cyclic playlists,
- turn-based games,
- repeated rotations.

Always be careful with termination conditions because `next` may never become `null`.

---

# Appendix T — Additional Sorting and Selection Algorithms

## Heap Sort

Heap sort:

1. Build a max heap.
2. Move maximum to the end.
3. Restore heap property.
4. Repeat.

Properties:

- Time: O(n log n)
- Extra array space: O(1) for an in-place implementation
- Not stable in the usual form

```js
function heapSort(nums) {
  const arr = [...nums];
  const n = arr.length;

  function heapify(size, root) {
    while (true) {
      let largest = root;
      const left = 2 * root + 1;
      const right = 2 * root + 2;

      if (left < size && arr[left] > arr[largest]) {
        largest = left;
      }

      if (right < size && arr[right] > arr[largest]) {
        largest = right;
      }

      if (largest === root) break;

      [arr[root], arr[largest]] = [arr[largest], arr[root]];
      root = largest;
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(end, 0);
  }

  return arr;
}
```

---

## Radix Sort

Radix sort processes integer digits rather than directly comparing full values.

For non-negative base-10 integers, a common version repeatedly performs stable counting by each digit.

Typical complexity:

```txt
O(d × (n + base))
```

where `d` is the number of digits.

It can be useful when:

- keys are bounded integers,
- digit count is manageable,
- comparison sorting is unnecessary.

---

## Bucket Sort

Bucket sort distributes values among buckets, sorts within buckets, then concatenates them.

It can perform very well when values are approximately uniformly distributed.

Its performance depends strongly on input distribution and bucket design.

---

## Quickselect

Quickselect finds the kth smallest/largest element without fully sorting.

Average time:

```txt
O(n)
```

Worst case:

```txt
O(n²)
```

Concept:

- partition like quicksort,
- only recurse/iterate into the side containing the target index.

```js
function kthSmallest(nums, k) {
  const arr = [...nums];
  const target = k - 1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));

    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    const pivot = arr[right];

    let p = left;

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p++;
      }
    }

    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === target) {
      return arr[p];
    }

    if (p < target) {
      left = p + 1;
    } else {
      right = p - 1;
    }
  }

  return undefined;
}
```

Use heap instead when:

- data is streaming,
- you repeatedly need top K,
- maintaining incremental state matters.

---

# Appendix U — Tree Types You Should Know

## Full Binary Tree

Every node has either:

- 0 children, or
- 2 children.

## Complete Binary Tree

All levels are full except possibly the last, and the last is filled from left to right.

Binary heaps use this shape.

## Perfect Binary Tree

Every internal node has two children and all leaves are at the same depth.

## Balanced Binary Tree

Height remains approximately logarithmic rather than degenerating into a chain.

## Skewed Tree

Each node has only one child.

A BST can degrade from O(log n) search to O(n) when badly skewed.

---

## AVL Tree

A self-balancing BST.

For every node, the height difference between left and right subtrees is tightly bounded.

Uses rotations to restore balance after updates.

Typical search/insert/delete:

```txt
O(log n)
```

---

## Red-Black Tree

Another self-balancing BST using coloring rules.

It allows slightly looser balance than AVL trees but still guarantees logarithmic height.

Red-black trees are common in standard-library ordered maps/sets in several languages.

For JavaScript interview work, you usually need to understand the concept rather than implement the full structure unless specifically asked.

---

## B-Tree and B+ Tree

Multiway balanced search trees optimized for storage systems where reading a block/page is expensive.

Common applications:

- databases,
- file systems,
- indexes.

A B+ tree typically stores actual records or record pointers in leaves and links leaves for efficient range scans.

These are important system-design-adjacent data structures even though they are less common in standard coding interviews.

---

# Appendix V — Graph Representation and Cycle Detection

## Adjacency Matrix

```js
const matrix = Array.from(
  { length: n },
  () => new Array(n).fill(false)
);

matrix[u][v] = true;
matrix[v][u] = true;
```

Space:

```txt
O(V²)
```

Useful when:

- graph is dense,
- constant-time edge-existence checks are important,
- vertex count is small enough.

---

## Edge List

```js
const edges = [
  [0, 1, 5],
  [1, 2, 8]
];
```

Useful for:

- Kruskal,
- Bellman-Ford,
- input representation.

---

## Undirected Graph Cycle Detection with DFS

```js
function hasUndirectedCycle(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);

  function dfs(node, parent) {
    visited[node] = true;

    for (const next of graph[node]) {
      if (!visited[next]) {
        if (dfs(next, node)) return true;
      } else if (next !== parent) {
        return true;
      }
    }

    return false;
  }

  for (let node = 0; node < n; node++) {
    if (!visited[node] && dfs(node, -1)) {
      return true;
    }
  }

  return false;
}
```

---

## Directed Graph Cycle Detection

Use three states:

```txt
0 = unvisited
1 = currently in DFS path
2 = completely processed
```

```js
function hasDirectedCycle(graph) {
  const n = graph.length;
  const state = new Array(n).fill(0);

  function dfs(node) {
    state[node] = 1;

    for (const next of graph[node]) {
      if (state[next] === 1) {
        return true;
      }

      if (state[next] === 0 && dfs(next)) {
        return true;
      }
    }

    state[node] = 2;
    return false;
  }

  for (let node = 0; node < n; node++) {
    if (state[node] === 0 && dfs(node)) {
      return true;
    }
  }

  return false;
}
```

---

## Bipartite Graph Check

A graph is bipartite if vertices can be colored with two colors so every edge joins different colors.

```js
function isBipartite(graph) {
  const n = graph.length;
  const color = new Array(n).fill(-1);

  for (let start = 0; start < n; start++) {
    if (color[start] !== -1) continue;

    const queue = [start];
    let head = 0;

    color[start] = 0;

    while (head < queue.length) {
      const node = queue[head++];

      for (const next of graph[node]) {
        if (color[next] === -1) {
          color[next] = color[node] ^ 1;
          queue.push(next);
        } else if (color[next] === color[node]) {
          return false;
        }
      }
    }
  }

  return true;
}
```

Useful in:

- two-group constraints,
- odd-cycle detection,
- matching foundations.

---

# Appendix W — Full Shortest-Path Reference

## Bellman-Ford Implementation

```js
function bellmanFord(n, edges, source) {
  const dist = new Array(n).fill(Infinity);
  dist[source] = 0;

  for (let i = 0; i < n - 1; i++) {
    let changed = false;

    for (const [u, v, weight] of edges) {
      if (dist[u] === Infinity) continue;

      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
        changed = true;
      }
    }

    if (!changed) break;
  }

  for (const [u, v, weight] of edges) {
    if (
      dist[u] !== Infinity &&
      dist[u] + weight < dist[v]
    ) {
      return {
        distances: dist,
        hasReachableNegativeCycle: true
      };
    }
  }

  return {
    distances: dist,
    hasReachableNegativeCycle: false
  };
}
```

---

## Floyd-Warshall Implementation

```js
function floydWarshall(matrix) {
  const n = matrix.length;
  const dist = matrix.map(row => [...row]);

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(
          dist[i][j],
          dist[i][k] + dist[k][j]
        );
      }
    }
  }

  return dist;
}
```

Represent unreachable paths using `Infinity`.

---

## DAG Shortest Path

For a weighted DAG:

1. topologically sort vertices,
2. relax outgoing edges in topological order.

This can handle negative edge weights as long as there is no directed cycle.

Complexity:

```txt
O(V + E)
```

---

# Appendix X — Divide and Conquer

Divide and conquer:

1. divide a problem into smaller independent subproblems,
2. solve them,
3. combine results.

Examples:

- merge sort,
- quicksort,
- binary search,
- closest-pair algorithms,
- divide-and-conquer geometry.

---

## Divide and Conquer vs Dynamic Programming

### Divide and Conquer

Subproblems are usually mostly independent.

### Dynamic Programming

Subproblems overlap, so solved results are cached/reused.

---

## Recurrence Example

Merge sort:

```txt
T(n) = 2T(n/2) + O(n)
```

which gives:

```txt
O(n log n)
```

Understanding recurrences helps explain recursive algorithm complexity.

---

# Appendix Y — Amortized Analysis in Practice

Sometimes one operation looks expensive but the cost is spread across many operations.

## Dynamic Array Growth

Imagine an array capacity doubles:

```txt
1 -> 2 -> 4 -> 8 -> 16 -> ...
```

A resize may copy many elements, but resizing does not happen on every push.

Across a long sequence of pushes, average push cost remains amortized O(1).

Other places amortized thinking appears:

- dynamic arrays,
- monotonic stacks,
- union-find,
- some hash-table operations.

---

# Appendix Z — Final DSA Decision Tree

When you see a new problem, walk through this checklist.

## 1. Is it a lookup/counting problem?

Think:

```txt
Map / Set
```

## 2. Is the input sorted?

Think:

```txt
Two pointers
Binary search
```

## 3. Is the answer about a contiguous subarray or substring?

Think:

```txt
Sliding window
Prefix sum
Kadane
```

## 4. Is it asking for next/previous greater or smaller?

Think:

```txt
Monotonic stack
```

## 5. Is it asking for top K or repeated min/max?

Think:

```txt
Heap
```

## 6. Is it hierarchy?

Think:

```txt
Tree DFS/BFS
```

## 7. Is it relationships, routes, dependencies, connectivity?

Think:

```txt
Graph
BFS / DFS
DSU
Topological sort
Dijkstra
MST
```

## 8. Does it ask for every possible configuration?

Think:

```txt
Backtracking
```

## 9. Does brute-force recursion repeat states?

Think:

```txt
Memoization / DP
```

## 10. Are there many static range queries?

Think:

```txt
Prefix sum
Sparse table
```

## 11. Are there updates plus range queries?

Think:

```txt
Fenwick tree
Segment tree
```

## 12. Is the input tiny but choices are exponential?

Think:

```txt
Bitmasking
Meet-in-the-middle
Bitmask DP
```

---

# Final Advice for Mastery

A learner should progress from:

```txt
syntax
→ brute force
→ complexity
→ basic data structures
→ reusable patterns
→ trees/graphs
→ greedy/DP
→ advanced structures
→ mixed problem solving
```

For every new algorithm, build four layers of understanding:

### Layer 1 — Intuition

Explain it without code.

### Layer 2 — Mechanics

Trace it manually on a small example.

### Layer 3 — Implementation

Write it from memory in JavaScript.

### Layer 4 — Recognition

Know what clues in a new problem suggest that algorithm.

That fourth layer is what turns DSA knowledge into practical problem-solving skill.

---

**End of DSA with JavaScript Master Handbook**
