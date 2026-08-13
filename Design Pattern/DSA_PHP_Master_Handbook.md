# DSA with PHP — Master Learning Handbook

> **A beginner-to-advanced handbook for mastering Data Structures and Algorithms using PHP**
>
> Designed as a single long-term reference for learning, revision, interviews, competitive programming, backend engineering, and problem-solving.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Are Data Structures and Algorithms?](#2-what-are-data-structures-and-algorithms)
3. [Why Learn DSA as a PHP Developer?](#3-why-learn-dsa-as-a-php-developer)
4. [PHP Foundations Required for DSA](#4-php-foundations-required-for-dsa)
5. [Algorithm Analysis: Time and Space Complexity](#5-algorithm-analysis-time-and-space-complexity)
6. [Mathematics for DSA](#6-mathematics-for-dsa)
7. [Arrays in PHP](#7-arrays-in-php)
8. [Strings](#8-strings)
9. [Linked Lists](#9-linked-lists)
10. [Stacks](#10-stacks)
11. [Queues and Deques](#11-queues-and-deques)
12. [Hash Tables, Maps, and Sets](#12-hash-tables-maps-and-sets)
13. [Recursion](#13-recursion)
14. [Searching Algorithms](#14-searching-algorithms)
15. [Sorting Algorithms](#15-sorting-algorithms)
16. [Two Pointers](#16-two-pointers)
17. [Sliding Window](#17-sliding-window)
18. [Prefix Sum and Difference Array](#18-prefix-sum-and-difference-array)
19. [Intervals](#19-intervals)
20. [Binary Search Patterns](#20-binary-search-patterns)
21. [Trees](#21-trees)
22. [Binary Search Trees](#22-binary-search-trees)
23. [Heaps and Priority Queues](#23-heaps-and-priority-queues)
24. [Tries](#24-tries)
25. [Graphs](#25-graphs)
26. [Union-Find / Disjoint Set Union](#26-union-find--disjoint-set-union)
27. [Greedy Algorithms](#27-greedy-algorithms)
28. [Backtracking](#28-backtracking)
29. [Divide and Conquer](#29-divide-and-conquer)
30. [Dynamic Programming](#30-dynamic-programming)
31. [Bit Manipulation](#31-bit-manipulation)
32. [Monotonic Stack and Monotonic Queue](#32-monotonic-stack-and-monotonic-queue)
33. [Matrix and Grid Problems](#33-matrix-and-grid-problems)
34. [String-Matching Algorithms](#34-string-matching-algorithms)
35. [Advanced Range Data Structures](#35-advanced-range-data-structures)
36. [Caching and LRU Cache](#36-caching-and-lru-cache)
37. [Randomized Algorithms and Reservoir Sampling](#37-randomized-algorithms-and-reservoir-sampling)
38. [PHP SPL Data Structures](#38-php-spl-data-structures)
39. [PHP Performance Considerations for DSA](#39-php-performance-considerations-for-dsa)
40. [Generators and Memory-Efficient Processing](#40-generators-and-memory-efficient-processing)
41. [Problem-Solving Framework](#41-problem-solving-framework)
42. [Common Interview Patterns](#42-common-interview-patterns)
43. [Real-World DSA Use Cases for PHP Developers](#43-real-world-dsa-use-cases-for-php-developers)
44. [Testing DSA Code in PHP](#44-testing-dsa-code-in-php)
45. [Benchmarking](#45-benchmarking)
46. [Common Mistakes](#46-common-mistakes)
47. [Interview Cheat Sheet](#47-interview-cheat-sheet)
48. [Practice Roadmap](#48-practice-roadmap)
49. [Problem Practice Catalog](#49-problem-practice-catalog)
50. [Mini Projects](#50-mini-projects)
51. [Final Revision Checklist](#51-final-revision-checklist)
52. [Further Reading](#52-further-reading)

---

# 1. How to Use This Handbook

Do not try to memorize every algorithm.

A strong DSA learner follows this sequence:

```text
Understand the problem
        ↓
Identify the pattern
        ↓
Choose a suitable data structure
        ↓
Design the algorithm
        ↓
Analyze complexity
        ↓
Implement it correctly
        ↓
Test edge cases
        ↓
Optimize only when necessary
```

For every topic:

1. Understand **what problem the structure solves**.
2. Learn its important operations.
3. Understand time and space complexity.
4. Implement it manually at least once.
5. Learn the PHP/SPL implementation when available.
6. Solve several problems using it.
7. Revisit the topic after a few days.

A useful learning cycle is:

```text
Theory → Code → Dry Run → Problems → Review → Repeat
```

---

# 2. What Are Data Structures and Algorithms?

## 2.1 Data Structure

A **data structure** is a way of organizing data so that operations on that data can be performed efficiently.

Examples:

- Array
- Hash table
- Stack
- Queue
- Linked list
- Tree
- Heap
- Graph
- Trie

Suppose an e-commerce application stores one million products.

If products are stored without organization, searching for a product may require scanning everything.

If products are indexed using an appropriate structure, searching can become dramatically faster.

---

## 2.2 Algorithm

An **algorithm** is a finite sequence of steps used to solve a problem.

Example problem:

> Find whether `27` exists in a sorted array.

Possible algorithm:

```text
Check middle value.
If equal → found.
If target is smaller → search left half.
If target is larger → search right half.
Repeat.
```

This is **binary search**.

---

## 2.3 Data Structure vs Algorithm

Think of:

```text
Data Structure = how information is stored
Algorithm      = how information is processed
```

Example:

```text
Graph data structure
+
Dijkstra algorithm
=
Shortest path calculation
```

---

# 3. Why Learn DSA as a PHP Developer?

PHP developers often work with:

- APIs
- databases
- Laravel/Symfony applications
- queues
- caching
- search
- reporting
- large datasets
- background jobs
- payment processing
- scheduling
- graph-like relationships
- recommendation systems

DSA improves your ability to design efficient code.

Example:

```php
foreach ($users as $user) {
    foreach ($blockedUsers as $blocked) {
        if ($user['id'] === $blocked['id']) {
            // ...
        }
    }
}
```

If there are `n` users and `m` blocked users:

```text
Time = O(n × m)
```

A lookup map can improve this:

```php
$blockedMap = [];

foreach ($blockedUsers as $blocked) {
    $blockedMap[$blocked['id']] = true;
}

foreach ($users as $user) {
    if (isset($blockedMap[$user['id']])) {
        // blocked
    }
}
```

Now:

```text
Build map: O(m)
Lookup:    O(n)

Total: O(n + m)
```

That is exactly what DSA knowledge gives you: **better choices**.

---

# 4. PHP Foundations Required for DSA

Before solving DSA problems, be comfortable with the following PHP concepts.

---

## 4.1 Variables

```php
$name = "Shoeb";
$age = 30;
$price = 49.99;
$isActive = true;
```

---

## 4.2 Indexed Arrays

```php
$numbers = [10, 20, 30];

echo $numbers[0]; // 10
```

---

## 4.3 Associative Arrays

```php
$user = [
    'id' => 101,
    'name' => 'Ali',
];

echo $user['name'];
```

Associative arrays are especially important because they can behave like maps/dictionaries.

---

## 4.4 Loops

### `for`

```php
for ($i = 0; $i < 5; $i++) {
    echo $i . PHP_EOL;
}
```

### `foreach`

```php
foreach ($numbers as $number) {
    echo $number . PHP_EOL;
}
```

### Key and value

```php
foreach ($user as $key => $value) {
    echo "$key = $value" . PHP_EOL;
}
```

---

## 4.5 Functions

```php
function add(int $a, int $b): int
{
    return $a + $b;
}
```

---

## 4.6 Anonymous Functions

```php
$compare = function ($a, $b) {
    return $a <=> $b;
};
```

Useful with:

```php
usort()
array_map()
array_filter()
array_reduce()
```

---

## 4.7 Arrow Functions

```php
$squares = array_map(
    fn($x) => $x * $x,
    [1, 2, 3]
);
```

---

## 4.8 Classes

```php
class Node
{
    public mixed $value;
    public ?Node $next = null;

    public function __construct(mixed $value)
    {
        $this->value = $value;
    }
}
```

Classes are useful when implementing:

- linked lists
- trees
- graphs
- tries
- custom heaps

---

## 4.9 Strict Types

For learning and larger projects:

```php
<?php

declare(strict_types=1);
```

This helps detect accidental type mismatches.

---

## 4.10 PHP Comparison Operator

The spaceship operator:

```php
$a <=> $b
```

Returns:

```text
-1 if $a < $b
 0 if $a == $b
 1 if $a > $b
```

Useful for sorting.

```php
usort($numbers, fn($a, $b) => $a <=> $b);
```

---

# 5. Algorithm Analysis: Time and Space Complexity

Complexity tells us how an algorithm scales as input becomes larger.

---

## 5.1 Big O Notation

Big O describes the approximate upper growth rate.

Common complexities:

| Complexity | Name | Typical Example |
|---|---|---|
| O(1) | Constant | Hash lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Scan array |
| O(n log n) | Linearithmic | Efficient sorting |
| O(n²) | Quadratic | Nested loops |
| O(n³) | Cubic | Triple nested loops |
| O(2ⁿ) | Exponential | Naive subset recursion |
| O(n!) | Factorial | Permutations |

---

## 5.2 O(1)

```php
$value = $arr[5];
```

The operation does not grow with array size in the usual algorithmic model.

---

## 5.3 O(n)

```php
foreach ($arr as $value) {
    echo $value;
}
```

If array size doubles, approximately twice as much work is performed.

---

## 5.4 O(n²)

```php
foreach ($arr as $a) {
    foreach ($arr as $b) {
        // ...
    }
}
```

For `n = 1000`:

```text
about 1,000,000 pair operations
```

---

## 5.5 O(log n)

Binary search repeatedly halves the search area.

```text
1,000 elements → about 10 divisions
1,000,000 elements → about 20 divisions
```

---

## 5.6 O(n log n)

Common in:

- merge sort
- heap sort
- average efficient comparison sorting

---

## 5.7 Space Complexity

Consider:

```php
function copyArray(array $arr): array
{
    $copy = [];

    foreach ($arr as $value) {
        $copy[] = $value;
    }

    return $copy;
}
```

Extra space grows with input:

```text
O(n)
```

---

## 5.8 Recursive Stack Space

```php
function countdown(int $n): void
{
    if ($n === 0) {
        return;
    }

    countdown($n - 1);
}
```

There can be `n` active recursive calls.

Space:

```text
O(n)
```

---

## 5.9 Amortized Complexity

Some operations occasionally require expensive resizing but are cheap on average.

When studying structures such as dynamic arrays or hash tables, you may encounter **amortized O(1)** insertion.

It means:

> An individual insertion might occasionally be expensive, but across many insertions the average cost per insertion remains constant.

---

## 5.10 Complexity Rules

Drop constants:

```text
O(2n) → O(n)
```

Keep dominant term:

```text
O(n² + n + 10) → O(n²)
```

Sequential loops:

```text
O(n) + O(n) = O(n)
```

Nested loops:

```text
O(n) × O(n) = O(n²)
```

---

# 6. Mathematics for DSA

You do not need advanced mathematics for most interview DSA.

Important concepts include:

- integers
- modular arithmetic
- logarithms
- powers
- divisibility
- prime numbers
- greatest common divisor
- least common multiple
- combinatorics basics
- probability basics

---

## 6.1 Modulo

```php
echo 17 % 5; // 2
```

Common use cases:

- even/odd
- cyclic indexing
- hashing
- large-number problems

Even number:

```php
if ($n % 2 === 0) {
    echo "Even";
}
```

---

## 6.2 GCD — Euclidean Algorithm

```php
function gcd(int $a, int $b): int
{
    while ($b !== 0) {
        [$a, $b] = [$b, $a % $b];
    }

    return abs($a);
}
```

Complexity:

```text
O(log(min(a, b)))
```

---

## 6.3 LCM

```php
function lcm(int $a, int $b): int
{
    return intdiv(abs($a * $b), gcd($a, $b));
}
```

---

## 6.4 Prime Check

```php
function isPrime(int $n): bool
{
    if ($n < 2) {
        return false;
    }

    for ($i = 2; $i * $i <= $n; $i++) {
        if ($n % $i === 0) {
            return false;
        }
    }

    return true;
}
```

Complexity:

```text
O(√n)
```

---

## 6.5 Sieve of Eratosthenes

Find all primes up to `n`.

```php
function sieve(int $n): array
{
    if ($n < 2) {
        return [];
    }

    $isPrime = array_fill(0, $n + 1, true);
    $isPrime[0] = false;
    $isPrime[1] = false;

    for ($p = 2; $p * $p <= $n; $p++) {
        if (!$isPrime[$p]) {
            continue;
        }

        for ($multiple = $p * $p; $multiple <= $n; $multiple += $p) {
            $isPrime[$multiple] = false;
        }
    }

    $result = [];

    for ($i = 2; $i <= $n; $i++) {
        if ($isPrime[$i]) {
            $result[] = $i;
        }
    }

    return $result;
}
```

Complexity:

```text
O(n log log n)
```

---

# 7. Arrays in PHP

Arrays are probably the most important DSA structure for PHP developers.

PHP arrays are flexible ordered key-value structures and can represent:

- lists
- maps
- stacks
- simple queues
- sets
- matrices

---

## 7.1 Indexed Array

```php
$numbers = [5, 10, 15];
```

Access:

```php
echo $numbers[1];
```

---

## 7.2 Traversal

```php
foreach ($numbers as $number) {
    echo $number . PHP_EOL;
}
```

---

## 7.3 Insert at End

```php
$numbers[] = 20;
```

or:

```php
array_push($numbers, 20);
```

For one value, `$numbers[] = 20` is normally clearer.

---

## 7.4 Remove from End

```php
$last = array_pop($numbers);
```

---

## 7.5 Insert at Beginning

```php
array_unshift($numbers, 1);
```

This may require shifting/reindexing values.

For repeated front operations, prefer an actual queue/deque structure.

---

## 7.6 Remove from Beginning

```php
$first = array_shift($numbers);
```

Repeated `array_shift()` can be inefficient for large queues.

Prefer:

```php
$queue = new SplQueue();
```

for queue-heavy workloads.

---

## 7.7 Find Maximum

```php
function findMax(array $arr): int|float
{
    if ($arr === []) {
        throw new InvalidArgumentException('Array must not be empty');
    }

    $max = $arr[0];

    foreach ($arr as $value) {
        if ($value > $max) {
            $max = $value;
        }
    }

    return $max;
}
```

Time:

```text
O(n)
```

Space:

```text
O(1)
```

---

## 7.8 Reverse an Array Manually

```php
function reverseArray(array $arr): array
{
    $left = 0;
    $right = count($arr) - 1;

    while ($left < $right) {
        [$arr[$left], $arr[$right]] =
            [$arr[$right], $arr[$left]];

        $left++;
        $right--;
    }

    return $arr;
}
```

---

## 7.9 Rotate Array Right

Example:

```text
[1,2,3,4,5], k=2
→ [4,5,1,2,3]
```

Simple implementation:

```php
function rotateRight(array $arr, int $k): array
{
    $n = count($arr);

    if ($n === 0) {
        return [];
    }

    $k %= $n;

    if ($k === 0) {
        return $arr;
    }

    return array_merge(
        array_slice($arr, $n - $k),
        array_slice($arr, 0, $n - $k)
    );
}
```

---

## 7.10 Remove Duplicates

```php
$unique = array_values(array_unique($numbers));
```

For algorithm practice, use a set-like map:

```php
function uniqueValues(array $arr): array
{
    $seen = [];
    $result = [];

    foreach ($arr as $value) {
        $key = is_int($value) || is_string($value)
            ? (string) $value
            : serialize($value);

        if (!isset($seen[$key])) {
            $seen[$key] = true;
            $result[] = $value;
        }
    }

    return $result;
}
```

---

# 8. Strings

String problems are extremely common in interviews.

Common patterns:

- character counting
- palindrome
- substring
- anagram
- sliding window
- parsing
- pattern matching
- string DP

---

## 8.1 Character Traversal

For ASCII-oriented interview problems:

```php
$str = "hello";

for ($i = 0; $i < strlen($str); $i++) {
    echo $str[$i] . PHP_EOL;
}
```

### Important Unicode note

`strlen()` measures bytes, not Unicode characters.

For UTF-8 text, functions from `mbstring`, such as `mb_strlen()`, may be necessary.

DSA platforms often specify lowercase English characters, where ordinary string indexing is sufficient.

---

## 8.2 Palindrome

```php
function isPalindrome(string $s): bool
{
    $left = 0;
    $right = strlen($s) - 1;

    while ($left < $right) {
        if ($s[$left] !== $s[$right]) {
            return false;
        }

        $left++;
        $right--;
    }

    return true;
}
```

Time:

```text
O(n)
```

Space:

```text
O(1)
```

---

## 8.3 Valid Palindrome Ignoring Symbols

```php
function isCleanPalindrome(string $s): bool
{
    $left = 0;
    $right = strlen($s) - 1;

    while ($left < $right) {
        while ($left < $right && !ctype_alnum($s[$left])) {
            $left++;
        }

        while ($left < $right && !ctype_alnum($s[$right])) {
            $right--;
        }

        if (strtolower($s[$left]) !== strtolower($s[$right])) {
            return false;
        }

        $left++;
        $right--;
    }

    return true;
}
```

---

## 8.4 Frequency Count

```php
function charFrequency(string $s): array
{
    $freq = [];

    for ($i = 0, $n = strlen($s); $i < $n; $i++) {
        $char = $s[$i];
        $freq[$char] = ($freq[$char] ?? 0) + 1;
    }

    return $freq;
}
```

---

## 8.5 Anagram

```php
function areAnagrams(string $a, string $b): bool
{
    if (strlen($a) !== strlen($b)) {
        return false;
    }

    return charFrequency($a) === charFrequency($b);
}
```

---

# 9. Linked Lists

A linked list consists of nodes.

Each node stores:

```text
value
next pointer/reference
```

Example:

```text
10 → 20 → 30 → null
```

Unlike an indexed array, nodes are connected rather than accessed directly by position.

---

## 9.1 Singly Linked List Node

```php
class ListNode
{
    public int $value;
    public ?ListNode $next;

    public function __construct(int $value, ?ListNode $next = null)
    {
        $this->value = $value;
        $this->next = $next;
    }
}
```

---

## 9.2 Traverse

```php
function printList(?ListNode $head): void
{
    $current = $head;

    while ($current !== null) {
        echo $current->value . PHP_EOL;
        $current = $current->next;
    }
}
```

---

## 9.3 Insert at Beginning

```php
function prepend(?ListNode $head, int $value): ListNode
{
    return new ListNode($value, $head);
}
```

Time:

```text
O(1)
```

---

## 9.4 Insert at End

```php
function append(?ListNode $head, int $value): ListNode
{
    $node = new ListNode($value);

    if ($head === null) {
        return $node;
    }

    $current = $head;

    while ($current->next !== null) {
        $current = $current->next;
    }

    $current->next = $node;

    return $head;
}
```

Without a tail reference:

```text
O(n)
```

With a stored tail reference:

```text
O(1)
```

---

## 9.5 Reverse Linked List

One of the most important interview problems.

```php
function reverseList(?ListNode $head): ?ListNode
{
    $prev = null;
    $current = $head;

    while ($current !== null) {
        $next = $current->next;
        $current->next = $prev;
        $prev = $current;
        $current = $next;
    }

    return $prev;
}
```

Mental model:

```text
Before:
1 → 2 → 3 → null

After:
null ← 1 ← 2 ← 3
```

---

## 9.6 Find Middle — Slow/Fast Pointer

```php
function middleNode(?ListNode $head): ?ListNode
{
    $slow = $head;
    $fast = $head;

    while ($fast !== null && $fast->next !== null) {
        $slow = $slow->next;
        $fast = $fast->next->next;
    }

    return $slow;
}
```

---

## 9.7 Detect Cycle — Floyd Algorithm

```php
function hasCycle(?ListNode $head): bool
{
    $slow = $head;
    $fast = $head;

    while ($fast !== null && $fast->next !== null) {
        $slow = $slow->next;
        $fast = $fast->next->next;

        if ($slow === $fast) {
            return true;
        }
    }

    return false;
}
```

Time:

```text
O(n)
```

Space:

```text
O(1)
```

---

## 9.8 Doubly Linked List

Each node has:

```text
previous ← node → next
```

Useful when you need efficient movement and deletion in both directions.

Common real-world example:

```text
LRU cache
```

---

# 10. Stacks

A stack follows:

```text
LIFO
Last In, First Out
```

Think of plates:

```text
push plate
push plate
pop top plate
```

---

## 10.1 Operations

```text
push
pop
peek
isEmpty
```

---

## 10.2 PHP Array Stack

```php
$stack = [];

$stack[] = 10;
$stack[] = 20;

$top = $stack[count($stack) - 1];

$value = array_pop($stack);
```

---

## 10.3 SPL Stack

```php
$stack = new SplStack();

$stack->push(10);
$stack->push(20);

echo $stack->top(); // 20
echo $stack->pop(); // 20
```

---

## 10.4 Balanced Parentheses

Input:

```text
{[()]}
```

Use a stack.

```php
function isValidParentheses(string $s): bool
{
    $stack = [];

    $pairs = [
        ')' => '(',
        ']' => '[',
        '}' => '{',
    ];

    for ($i = 0, $n = strlen($s); $i < $n; $i++) {
        $char = $s[$i];

        if (in_array($char, ['(', '[', '{'], true)) {
            $stack[] = $char;
            continue;
        }

        if (isset($pairs[$char])) {
            if ($stack === [] || array_pop($stack) !== $pairs[$char]) {
                return false;
            }
        }
    }

    return $stack === [];
}
```

---

## 10.5 Stack Use Cases

- undo/redo
- browser history
- expression evaluation
- syntax parsing
- DFS
- recursion simulation
- monotonic stack
- call stack

---

# 11. Queues and Deques

A queue follows:

```text
FIFO
First In, First Out
```

Think of people waiting in line.

---

## 11.1 SPL Queue

```php
$queue = new SplQueue();

$queue->enqueue('A');
$queue->enqueue('B');
$queue->enqueue('C');

echo $queue->dequeue(); // A
```

---

## 11.2 Queue Use Cases

- job processing
- BFS
- email sending
- order processing
- customer support queue
- message queue concepts
- task scheduling

---

## 11.3 Deque

Deque means:

```text
Double-Ended Queue
```

Operations at both ends:

```text
push front
push back
pop front
pop back
```

Useful for:

- sliding-window maximum
- palindrome logic
- work scheduling
- monotonic queue

---

# 12. Hash Tables, Maps, and Sets

A hash table provides fast key-based lookup on average.

PHP associative arrays often serve this purpose.

---

## 12.1 Frequency Map

```php
$numbers = [1, 2, 2, 3, 3, 3];

$freq = [];

foreach ($numbers as $number) {
    $freq[$number] = ($freq[$number] ?? 0) + 1;
}
```

Result:

```text
1 => 1
2 => 2
3 => 3
```

---

## 12.2 Two Sum

Problem:

```text
Given numbers and target, return indices of two values whose sum equals target.
```

Brute force:

```text
O(n²)
```

Hash-map approach:

```php
function twoSum(array $nums, int $target): array
{
    $seen = [];

    foreach ($nums as $i => $num) {
        $needed = $target - $num;

        if (array_key_exists($needed, $seen)) {
            return [$seen[$needed], $i];
        }

        $seen[$num] = $i;
    }

    return [];
}
```

Complexity:

```text
Time:  O(n) average
Space: O(n)
```

---

## 12.3 Set Pattern

PHP has no built-in general-purpose language-level `Set` type equivalent to some languages, but a map can represent a set:

```php
$set = [];

$set['apple'] = true;
$set['banana'] = true;

if (isset($set['apple'])) {
    echo "Exists";
}
```

For object identity, `SplObjectStorage` is also useful.

---

## 12.4 When to Think "Hash Map"

Look for wording such as:

- frequency
- count
- duplicate
- already seen
- lookup
- pair sum
- group by
- unique
- map one value to another

---

# 13. Recursion

Recursion occurs when a function calls itself.

---

## 13.1 Basic Structure

```php
function recursiveFunction($input)
{
    if (/* base condition */) {
        return;
    }

    recursiveFunction(/* smaller input */);
}
```

Two essential parts:

```text
1. Base case
2. Recursive case
```

---

## 13.2 Factorial

```php
function factorial(int $n): int
{
    if ($n <= 1) {
        return 1;
    }

    return $n * factorial($n - 1);
}
```

---

## 13.3 Fibonacci — Naive

```php
function fibonacci(int $n): int
{
    if ($n <= 1) {
        return $n;
    }

    return fibonacci($n - 1) + fibonacci($n - 2);
}
```

Problem:

```text
O(2ⁿ)
```

Many subproblems are recomputed.

Dynamic programming improves it.

---

## 13.4 Recursive Binary Search

```php
function binarySearchRecursive(
    array $arr,
    int $target,
    int $left,
    int $right
): int {
    if ($left > $right) {
        return -1;
    }

    $mid = $left + intdiv($right - $left, 2);

    if ($arr[$mid] === $target) {
        return $mid;
    }

    if ($arr[$mid] < $target) {
        return binarySearchRecursive($arr, $target, $mid + 1, $right);
    }

    return binarySearchRecursive($arr, $target, $left, $mid - 1);
}
```

---

## 13.5 Recursion Risks in PHP

Deep recursion can consume substantial stack/memory.

When recursion depth can become very large, consider an iterative solution using an explicit stack.

Example:

```text
Recursive DFS
→ Iterative DFS with SplStack
```

---

# 14. Searching Algorithms

---

## 14.1 Linear Search

```php
function linearSearch(array $arr, mixed $target): int
{
    foreach ($arr as $index => $value) {
        if ($value === $target) {
            return $index;
        }
    }

    return -1;
}
```

Complexity:

```text
O(n)
```

Use when:

- data is unsorted
- array is small
- only one search is needed

---

## 14.2 Binary Search

Requirement:

```text
Data must be sorted according to the comparison logic.
```

```php
function binarySearch(array $arr, int $target): int
{
    $left = 0;
    $right = count($arr) - 1;

    while ($left <= $right) {
        $mid = $left + intdiv($right - $left, 2);

        if ($arr[$mid] === $target) {
            return $mid;
        }

        if ($arr[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return -1;
}
```

Complexity:

```text
O(log n)
```

---

## 14.3 First Occurrence

For:

```text
[1,2,2,2,4]
```

target `2` should return index `1`.

```php
function firstOccurrence(array $arr, int $target): int
{
    $left = 0;
    $right = count($arr) - 1;
    $answer = -1;

    while ($left <= $right) {
        $mid = $left + intdiv($right - $left, 2);

        if ($arr[$mid] >= $target) {
            if ($arr[$mid] === $target) {
                $answer = $mid;
            }

            $right = $mid - 1;
        } else {
            $left = $mid + 1;
        }
    }

    return $answer;
}
```

---

# 15. Sorting Algorithms

Sorting is one of the most important algorithm categories.

---

## 15.1 Bubble Sort

Repeatedly swap adjacent out-of-order values.

```php
function bubbleSort(array $arr): array
{
    $n = count($arr);

    for ($i = 0; $i < $n - 1; $i++) {
        $swapped = false;

        for ($j = 0; $j < $n - 1 - $i; $j++) {
            if ($arr[$j] > $arr[$j + 1]) {
                [$arr[$j], $arr[$j + 1]] =
                    [$arr[$j + 1], $arr[$j]];

                $swapped = true;
            }
        }

        if (!$swapped) {
            break;
        }
    }

    return $arr;
}
```

Worst:

```text
O(n²)
```

Use primarily for learning.

---

## 15.2 Selection Sort

Find smallest item and place it at the next position.

```php
function selectionSort(array $arr): array
{
    $n = count($arr);

    for ($i = 0; $i < $n - 1; $i++) {
        $minIndex = $i;

        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$minIndex]) {
                $minIndex = $j;
            }
        }

        if ($minIndex !== $i) {
            [$arr[$i], $arr[$minIndex]] =
                [$arr[$minIndex], $arr[$i]];
        }
    }

    return $arr;
}
```

Time:

```text
O(n²)
```

---

## 15.3 Insertion Sort

Good educational algorithm and often effective for very small/nearly sorted collections.

```php
function insertionSort(array $arr): array
{
    $n = count($arr);

    for ($i = 1; $i < $n; $i++) {
        $key = $arr[$i];
        $j = $i - 1;

        while ($j >= 0 && $arr[$j] > $key) {
            $arr[$j + 1] = $arr[$j];
            $j--;
        }

        $arr[$j + 1] = $key;
    }

    return $arr;
}
```

---

## 15.4 Merge Sort

Divide the input, sort halves, merge them.

```php
function mergeSort(array $arr): array
{
    if (count($arr) <= 1) {
        return $arr;
    }

    $mid = intdiv(count($arr), 2);

    $left = mergeSort(array_slice($arr, 0, $mid));
    $right = mergeSort(array_slice($arr, $mid));

    return mergeArrays($left, $right);
}

function mergeArrays(array $left, array $right): array
{
    $result = [];
    $i = 0;
    $j = 0;

    while ($i < count($left) && $j < count($right)) {
        if ($left[$i] <= $right[$j]) {
            $result[] = $left[$i++];
        } else {
            $result[] = $right[$j++];
        }
    }

    while ($i < count($left)) {
        $result[] = $left[$i++];
    }

    while ($j < count($right)) {
        $result[] = $right[$j++];
    }

    return $result;
}
```

Complexity:

```text
Time:  O(n log n)
Space: O(n)
```

---

## 15.5 Quick Sort — Educational Implementation

```php
function quickSort(array $arr): array
{
    $n = count($arr);

    if ($n <= 1) {
        return $arr;
    }

    $pivot = $arr[intdiv($n, 2)];

    $less = [];
    $equal = [];
    $greater = [];

    foreach ($arr as $value) {
        if ($value < $pivot) {
            $less[] = $value;
        } elseif ($value > $pivot) {
            $greater[] = $value;
        } else {
            $equal[] = $value;
        }
    }

    return array_merge(
        quickSort($less),
        $equal,
        quickSort($greater)
    );
}
```

Average conceptual complexity:

```text
O(n log n)
```

Worst case for poor pivot strategies:

```text
O(n²)
```

This version also allocates additional arrays and is intended for clarity.

---

## 15.6 PHP Native Sorting

Ascending values:

```php
sort($arr);
```

Preserve keys:

```php
asort($arr);
```

Sort by keys:

```php
ksort($arr);
```

Custom sort:

```php
usort($users, function (array $a, array $b): int {
    return $a['age'] <=> $b['age'];
});
```

For production code, prefer well-tested built-ins unless the goal is specifically to implement an algorithm.

---

## 15.7 Stable vs Unstable Sorting

A stable sort preserves the relative order of equal elements.

Suppose:

```text
(Alice, score=90)
(Bob, score=90)
```

A stable score sort keeps Alice before Bob.

This matters in multi-level sorting and business reports.

---

# 16. Two Pointers

Two pointers use two indices moving through data.

Common forms:

```text
left + right
slow + fast
read + write
```

---

## 16.1 Pair Sum in Sorted Array

```php
function pairSumSorted(array $arr, int $target): array
{
    $left = 0;
    $right = count($arr) - 1;

    while ($left < $right) {
        $sum = $arr[$left] + $arr[$right];

        if ($sum === $target) {
            return [$left, $right];
        }

        if ($sum < $target) {
            $left++;
        } else {
            $right--;
        }
    }

    return [];
}
```

Time:

```text
O(n)
```

instead of brute-force:

```text
O(n²)
```

---

## 16.2 Remove Duplicates from Sorted Array

```php
function removeDuplicatesSorted(array &$arr): int
{
    if ($arr === []) {
        return 0;
    }

    $write = 1;

    for ($read = 1, $n = count($arr); $read < $n; $read++) {
        if ($arr[$read] !== $arr[$write - 1]) {
            $arr[$write] = $arr[$read];
            $write++;
        }
    }

    return $write;
}
```

---

## 16.3 When to Recognize Two Pointers

Look for:

- sorted array
- pair
- palindrome
- remove duplicates
- partition
- merge
- linked-list cycle
- opposite ends

---

# 17. Sliding Window

Sliding window is used for contiguous ranges.

Examples:

- longest substring
- maximum sum subarray of size `k`
- minimum window
- longest range satisfying condition

---

## 17.1 Fixed Window

Find maximum sum of any `k` consecutive values.

```php
function maxWindowSum(array $arr, int $k): int
{
    $n = count($arr);

    if ($k <= 0 || $k > $n) {
        throw new InvalidArgumentException('Invalid window size');
    }

    $windowSum = 0;

    for ($i = 0; $i < $k; $i++) {
        $windowSum += $arr[$i];
    }

    $maxSum = $windowSum;

    for ($right = $k; $right < $n; $right++) {
        $windowSum += $arr[$right];
        $windowSum -= $arr[$right - $k];

        $maxSum = max($maxSum, $windowSum);
    }

    return $maxSum;
}
```

Time:

```text
O(n)
```

Instead of recalculating every window:

```text
O(nk)
```

---

## 17.2 Variable Window

Longest substring without repeating characters:

```php
function lengthOfLongestSubstring(string $s): int
{
    $lastSeen = [];
    $left = 0;
    $best = 0;

    for ($right = 0, $n = strlen($s); $right < $n; $right++) {
        $char = $s[$right];

        if (isset($lastSeen[$char]) && $lastSeen[$char] >= $left) {
            $left = $lastSeen[$char] + 1;
        }

        $lastSeen[$char] = $right;
        $best = max($best, $right - $left + 1);
    }

    return $best;
}
```

---

# 18. Prefix Sum and Difference Array

---

## 18.1 Prefix Sum

For:

```text
[2,4,1,5,3]
```

prefix:

```text
[0,2,6,7,12,15]
```

where:

```text
prefix[i+1] = prefix[i] + arr[i]
```

Implementation:

```php
function buildPrefixSum(array $arr): array
{
    $prefix = [0];

    foreach ($arr as $value) {
        $prefix[] = end($prefix) + $value;
    }

    return $prefix;
}
```

Range sum `l..r`:

```php
function rangeSum(array $prefix, int $left, int $right): int
{
    return $prefix[$right + 1] - $prefix[$left];
}
```

After preprocessing:

```text
Range query = O(1)
```

---

## 18.2 Real-World Example

Daily sales:

```text
Mon Tue Wed Thu Fri
10  20  15  40  30
```

Question:

> What are total sales from Tuesday to Thursday?

Prefix sums answer repeated range queries efficiently.

---

## 18.3 Difference Array

Useful when many range updates are required.

Suppose:

```text
Add +5 to all positions from L to R.
```

Rather than updating every position:

```php
$diff[$L] += 5;

if ($R + 1 < $n) {
    $diff[$R + 1] -= 5;
}
```

Later rebuild final values using prefix sums.

Excellent for:

- booking ranges
- employee shifts
- traffic counts
- event occupancy
- interval updates

---

# 19. Intervals

Interval problems usually contain:

```text
[start, end]
```

Typical tasks:

- merge overlapping intervals
- insert interval
- detect conflicts
- meeting rooms
- scheduling

---

## 19.1 Merge Intervals

```php
function mergeIntervals(array $intervals): array
{
    if ($intervals === []) {
        return [];
    }

    usort(
        $intervals,
        fn($a, $b) => $a[0] <=> $b[0]
    );

    $merged = [$intervals[0]];

    for ($i = 1, $n = count($intervals); $i < $n; $i++) {
        [$start, $end] = $intervals[$i];

        $lastIndex = count($merged) - 1;
        [$lastStart, $lastEnd] = $merged[$lastIndex];

        if ($start <= $lastEnd) {
            $merged[$lastIndex][1] = max($lastEnd, $end);
        } else {
            $merged[] = [$start, $end];
        }
    }

    return $merged;
}
```

---

# 20. Binary Search Patterns

Binary search is not only for finding a value.

It is also used for finding a **boundary** or searching an **answer space**.

---

## 20.1 Lower Bound Concept

Find the first position where:

```text
value >= target
```

```php
function lowerBound(array $arr, int $target): int
{
    $left = 0;
    $right = count($arr);

    while ($left < $right) {
        $mid = $left + intdiv($right - $left, 2);

        if ($arr[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid;
        }
    }

    return $left;
}
```

---

## 20.2 Binary Search on Answer

Example:

> What is the minimum server capacity needed to process all jobs within `D` days?

If a candidate capacity `X` can work, then any larger capacity may also work.

This gives a monotonic condition:

```text
false false false true true true
```

Binary search can find the first `true`.

Generic template:

```php
function firstTrue(int $low, int $high, callable $can): int
{
    while ($low < $high) {
        $mid = $low + intdiv($high - $low, 2);

        if ($can($mid)) {
            $high = $mid;
        } else {
            $low = $mid + 1;
        }
    }

    return $low;
}
```

Recognize phrases such as:

- minimum possible
- maximum possible
- at most
- capacity
- speed
- threshold
- feasible

---

# 21. Trees

A tree is a hierarchical data structure.

Example:

```text
        A
       / \
      B   C
     / \
    D   E
```

Terms:

- root
- child
- parent
- leaf
- depth
- height
- subtree

---

## 21.1 Binary Tree Node

```php
class TreeNode
{
    public int $value;
    public ?TreeNode $left;
    public ?TreeNode $right;

    public function __construct(
        int $value,
        ?TreeNode $left = null,
        ?TreeNode $right = null
    ) {
        $this->value = $value;
        $this->left = $left;
        $this->right = $right;
    }
}
```

---

## 21.2 DFS Traversals

### Preorder

```text
Root → Left → Right
```

```php
function preorder(?TreeNode $node): void
{
    if ($node === null) {
        return;
    }

    echo $node->value . ' ';
    preorder($node->left);
    preorder($node->right);
}
```

### Inorder

```text
Left → Root → Right
```

```php
function inorder(?TreeNode $node): void
{
    if ($node === null) {
        return;
    }

    inorder($node->left);
    echo $node->value . ' ';
    inorder($node->right);
}
```

### Postorder

```text
Left → Right → Root
```

```php
function postorder(?TreeNode $node): void
{
    if ($node === null) {
        return;
    }

    postorder($node->left);
    postorder($node->right);
    echo $node->value . ' ';
}
```

---

## 21.3 Level Order Traversal — BFS

```php
function levelOrder(?TreeNode $root): array
{
    if ($root === null) {
        return [];
    }

    $queue = new SplQueue();
    $queue->enqueue($root);

    $result = [];

    while (!$queue->isEmpty()) {
        $levelSize = $queue->count();
        $level = [];

        for ($i = 0; $i < $levelSize; $i++) {
            /** @var TreeNode $node */
            $node = $queue->dequeue();

            $level[] = $node->value;

            if ($node->left !== null) {
                $queue->enqueue($node->left);
            }

            if ($node->right !== null) {
                $queue->enqueue($node->right);
            }
        }

        $result[] = $level;
    }

    return $result;
}
```

---

## 21.4 Maximum Depth

```php
function maxDepth(?TreeNode $root): int
{
    if ($root === null) {
        return 0;
    }

    return 1 + max(
        maxDepth($root->left),
        maxDepth($root->right)
    );
}
```

---

## 21.5 Common Tree Problems

- max depth
- min depth
- invert tree
- same tree
- symmetric tree
- diameter
- balanced tree
- lowest common ancestor
- root-to-leaf paths
- path sum
- serialize/deserialize
- level averages
- right-side view

---

# 22. Binary Search Trees

A Binary Search Tree generally maintains:

```text
left values < node value
right values > node value
```

Duplicate handling depends on the design.

---

## 22.1 Search

```php
function searchBST(?TreeNode $root, int $target): ?TreeNode
{
    $current = $root;

    while ($current !== null) {
        if ($target === $current->value) {
            return $current;
        }

        $current = $target < $current->value
            ? $current->left
            : $current->right;
    }

    return null;
}
```

Average balanced tree:

```text
O(log n)
```

Worst skewed tree:

```text
O(n)
```

---

## 22.2 Insert

```php
function insertBST(?TreeNode $root, int $value): TreeNode
{
    if ($root === null) {
        return new TreeNode($value);
    }

    if ($value < $root->value) {
        $root->left = insertBST($root->left, $value);
    } elseif ($value > $root->value) {
        $root->right = insertBST($root->right, $value);
    }

    return $root;
}
```

---

## 22.3 Validate BST

Use numeric bounds.

```php
function isValidBST(
    ?TreeNode $node,
    ?int $min = null,
    ?int $max = null
): bool {
    if ($node === null) {
        return true;
    }

    if ($min !== null && $node->value <= $min) {
        return false;
    }

    if ($max !== null && $node->value >= $max) {
        return false;
    }

    return isValidBST($node->left, $min, $node->value)
        && isValidBST($node->right, $node->value, $max);
}
```

---

# 23. Heaps and Priority Queues

A heap helps retrieve the smallest or largest priority efficiently.

Common types:

```text
Min Heap → smallest on top
Max Heap → largest on top
```

---

## 23.1 PHP `SplPriorityQueue`

PHP's SPL priority queue behaves as a max-priority queue.

```php
$queue = new SplPriorityQueue();

$queue->insert('normal-job', 1);
$queue->insert('important-job', 10);
$queue->insert('medium-job', 5);

echo $queue->extract(); // important-job
```

---

## 23.2 Min Heap

```php
$heap = new SplMinHeap();

$heap->insert(30);
$heap->insert(10);
$heap->insert(20);

echo $heap->extract(); // 10
```

---

## 23.3 Max Heap

```php
$heap = new SplMaxHeap();

$heap->insert(30);
$heap->insert(10);
$heap->insert(20);

echo $heap->extract(); // 30
```

---

## 23.4 Top K Largest

Use a min heap of size `k`.

```php
function topKLargest(array $nums, int $k): array
{
    if ($k <= 0) {
        return [];
    }

    $heap = new SplMinHeap();

    foreach ($nums as $num) {
        $heap->insert($num);

        if ($heap->count() > $k) {
            $heap->extract();
        }
    }

    $result = [];

    while (!$heap->isEmpty()) {
        $result[] = $heap->extract();
    }

    rsort($result);

    return $result;
}
```

Complexity:

```text
O(n log k)
```

---

## 23.5 Heap Use Cases

- top K
- task scheduling
- priority jobs
- Dijkstra
- median stream
- k-way merge
- event simulation

---

# 24. Tries

A trie stores strings character by character.

Example words:

```text
cat
car
care
```

Shared prefix:

```text
c → a → t
      \
       r → e
```

Excellent for:

- autocomplete
- prefix search
- dictionary
- route matching
- word games

---

## 24.1 Trie Node

```php
class TrieNode
{
    /** @var array<string, TrieNode> */
    public array $children = [];

    public bool $isEnd = false;
}
```

---

## 24.2 Trie

```php
class Trie
{
    private TrieNode $root;

    public function __construct()
    {
        $this->root = new TrieNode();
    }

    public function insert(string $word): void
    {
        $node = $this->root;

        for ($i = 0, $n = strlen($word); $i < $n; $i++) {
            $char = $word[$i];

            if (!isset($node->children[$char])) {
                $node->children[$char] = new TrieNode();
            }

            $node = $node->children[$char];
        }

        $node->isEnd = true;
    }

    public function search(string $word): bool
    {
        $node = $this->walk($word);

        return $node !== null && $node->isEnd;
    }

    public function startsWith(string $prefix): bool
    {
        return $this->walk($prefix) !== null;
    }

    private function walk(string $text): ?TrieNode
    {
        $node = $this->root;

        for ($i = 0, $n = strlen($text); $i < $n; $i++) {
            $char = $text[$i];

            if (!isset($node->children[$char])) {
                return null;
            }

            $node = $node->children[$char];
        }

        return $node;
    }
}
```

---

# 25. Graphs

A graph consists of:

```text
vertices/nodes
edges/connections
```

Examples:

- social networks
- roads
- dependencies
- flight routes
- web links
- organization relationships
- service dependencies

---

## 25.1 Directed vs Undirected

Undirected:

```text
A — B
```

Directed:

```text
A → B
```

---

## 25.2 Weighted Graph

Edges have cost:

```text
A --5--> B
```

Cost might represent:

- distance
- money
- time
- risk
- latency

---

## 25.3 Adjacency List

```php
$graph = [
    'A' => ['B', 'C'],
    'B' => ['A', 'D'],
    'C' => ['A'],
    'D' => ['B'],
];
```

For sparse graphs, adjacency lists are generally convenient.

---

## 25.4 BFS

Uses a queue.

```php
function bfs(array $graph, string $start): array
{
    $queue = new SplQueue();
    $queue->enqueue($start);

    $visited = [$start => true];
    $order = [];

    while (!$queue->isEmpty()) {
        $node = $queue->dequeue();
        $order[] = $node;

        foreach ($graph[$node] ?? [] as $neighbor) {
            if (!isset($visited[$neighbor])) {
                $visited[$neighbor] = true;
                $queue->enqueue($neighbor);
            }
        }
    }

    return $order;
}
```

Uses:

- shortest path in unweighted graph
- level traversal
- nearest target
- connected components

---

## 25.5 DFS

Recursive:

```php
function dfs(
    array $graph,
    string $node,
    array &$visited,
    array &$order
): void {
    $visited[$node] = true;
    $order[] = $node;

    foreach ($graph[$node] ?? [] as $neighbor) {
        if (!isset($visited[$neighbor])) {
            dfs($graph, $neighbor, $visited, $order);
        }
    }
}
```

Iterative:

```php
function dfsIterative(array $graph, string $start): array
{
    $stack = new SplStack();
    $stack->push($start);

    $visited = [];
    $order = [];

    while (!$stack->isEmpty()) {
        $node = $stack->pop();

        if (isset($visited[$node])) {
            continue;
        }

        $visited[$node] = true;
        $order[] = $node;

        foreach (array_reverse($graph[$node] ?? []) as $neighbor) {
            if (!isset($visited[$neighbor])) {
                $stack->push($neighbor);
            }
        }
    }

    return $order;
}
```

---

## 25.6 Connected Components

For every unvisited node:

```text
run DFS/BFS
increment component count
```

Useful for:

- network groups
- clusters
- islands in a grid
- disconnected systems

---

## 25.7 Cycle Detection — Undirected Graph

DFS carries the parent.

```php
function hasUndirectedCycle(
    array $graph,
    string $node,
    ?string $parent,
    array &$visited
): bool {
    $visited[$node] = true;

    foreach ($graph[$node] ?? [] as $neighbor) {
        if (!isset($visited[$neighbor])) {
            if (hasUndirectedCycle($graph, $neighbor, $node, $visited)) {
                return true;
            }
        } elseif ($neighbor !== $parent) {
            return true;
        }
    }

    return false;
}
```

---

## 25.8 Topological Sort — Kahn's Algorithm

Only for DAGs:

```text
Directed Acyclic Graph
```

Useful for dependency ordering.

Example:

```text
Install database
    ↓
Run migrations
    ↓
Start application
```

Implementation:

```php
function topologicalSort(array $graph): array
{
    $inDegree = [];

    foreach ($graph as $node => $neighbors) {
        $inDegree[$node] ??= 0;

        foreach ($neighbors as $neighbor) {
            $inDegree[$neighbor] = ($inDegree[$neighbor] ?? 0) + 1;
        }
    }

    $queue = new SplQueue();

    foreach ($inDegree as $node => $degree) {
        if ($degree === 0) {
            $queue->enqueue($node);
        }
    }

    $order = [];

    while (!$queue->isEmpty()) {
        $node = $queue->dequeue();
        $order[] = $node;

        foreach ($graph[$node] ?? [] as $neighbor) {
            $inDegree[$neighbor]--;

            if ($inDegree[$neighbor] === 0) {
                $queue->enqueue($neighbor);
            }
        }
    }

    if (count($order) !== count($inDegree)) {
        throw new RuntimeException('Graph contains a cycle');
    }

    return $order;
}
```

---

## 25.9 Dijkstra Shortest Path

Use when:

```text
edge weights are non-negative
```

```php
function dijkstra(array $graph, string $start): array
{
    $dist = [];

    foreach ($graph as $node => $_) {
        $dist[$node] = INF;
    }

    $dist[$start] = 0;

    $pq = new SplPriorityQueue();
    $pq->setExtractFlags(SplPriorityQueue::EXTR_BOTH);

    // SplPriorityQueue is max-oriented, so negate distance.
    $pq->insert($start, 0);

    while (!$pq->isEmpty()) {
        $item = $pq->extract();

        $node = $item['data'];
        $currentDistance = -$item['priority'];

        if ($currentDistance > $dist[$node]) {
            continue;
        }

        foreach ($graph[$node] ?? [] as $edge) {
            [$neighbor, $weight] = $edge;

            $newDistance = $currentDistance + $weight;

            if ($newDistance < ($dist[$neighbor] ?? INF)) {
                $dist[$neighbor] = $newDistance;
                $pq->insert($neighbor, -$newDistance);
            }
        }
    }

    return $dist;
}
```

Graph format:

```php
$graph = [
    'A' => [['B', 4], ['C', 1]],
    'B' => [['D', 1]],
    'C' => [['B', 2], ['D', 5]],
    'D' => [],
];
```

---

## 25.10 Bellman-Ford

Useful when negative edge weights may exist.

Concept:

```text
Relax every edge V - 1 times.
Then do one extra pass.
If a distance still improves, a reachable negative cycle exists.
```

Complexity:

```text
O(VE)
```

---

## 25.11 Floyd-Warshall

All-pairs shortest path.

Dynamic programming relation:

```text
dist[i][j] =
min(
    dist[i][j],
    dist[i][k] + dist[k][j]
)
```

Complexity:

```text
O(V³)
```

Useful when the graph is relatively small and shortest distances among many pairs are required.

---

## 25.12 Minimum Spanning Tree

For a connected weighted undirected graph, an MST connects all vertices with minimum total edge cost.

Main algorithms:

- Kruskal
- Prim

Applications:

- network cabling
- road design
- clustering
- infrastructure planning

---

# 26. Union-Find / Disjoint Set Union

Union-Find efficiently tracks connected groups.

Operations:

```text
find(x)
union(a, b)
```

With:

- path compression
- union by rank/size

operations become extremely fast in practice.

---

## 26.1 Implementation

```php
class DisjointSet
{
    private array $parent = [];
    private array $rank = [];

    public function __construct(int $n)
    {
        for ($i = 0; $i < $n; $i++) {
            $this->parent[$i] = $i;
            $this->rank[$i] = 0;
        }
    }

    public function find(int $x): int
    {
        if ($this->parent[$x] !== $x) {
            $this->parent[$x] = $this->find($this->parent[$x]);
        }

        return $this->parent[$x];
    }

    public function union(int $a, int $b): bool
    {
        $rootA = $this->find($a);
        $rootB = $this->find($b);

        if ($rootA === $rootB) {
            return false;
        }

        if ($this->rank[$rootA] < $this->rank[$rootB]) {
            [$rootA, $rootB] = [$rootB, $rootA];
        }

        $this->parent[$rootB] = $rootA;

        if ($this->rank[$rootA] === $this->rank[$rootB]) {
            $this->rank[$rootA]++;
        }

        return true;
    }
}
```

Use cases:

- network connectivity
- cycle detection
- Kruskal MST
- grouping accounts
- merging related identities
- connected components

---

# 27. Greedy Algorithms

A greedy algorithm chooses what appears best **right now**.

It works only when local optimal choices can lead to a global optimal solution.

---

## 27.1 Interval Scheduling

Select maximum non-overlapping meetings.

Strategy:

```text
Sort meetings by finishing time.
Always select the next meeting that ends earliest.
```

```php
function maxNonOverlappingMeetings(array $meetings): array
{
    usort(
        $meetings,
        fn($a, $b) => $a[1] <=> $b[1]
    );

    $result = [];
    $lastEnd = -INF;

    foreach ($meetings as [$start, $end]) {
        if ($start >= $lastEnd) {
            $result[] = [$start, $end];
            $lastEnd = $end;
        }
    }

    return $result;
}
```

---

## 27.2 Greedy Warning

Greedy does **not** work for every optimization problem.

Classic example:

Coin denominations:

```text
1, 3, 4
```

Target:

```text
6
```

Greedy might choose:

```text
4 + 1 + 1 = 3 coins
```

Optimal:

```text
3 + 3 = 2 coins
```

Dynamic programming is required for arbitrary coin sets.

---

# 28. Backtracking

Backtracking explores possibilities and abandons invalid branches.

Template:

```php
function backtrack(...)
{
    if (solution found) {
        record result;
        return;
    }

    foreach (choices as choice) {
        choose
        backtrack(...)
        undo choice
    }
}
```

---

## 28.1 Generate Subsets

```php
function subsets(array $nums): array
{
    $result = [];
    $path = [];

    $backtrack = function (int $index) use (
        &$backtrack,
        &$result,
        &$path,
        $nums
    ): void {
        if ($index === count($nums)) {
            $result[] = $path;
            return;
        }

        // Exclude
        $backtrack($index + 1);

        // Include
        $path[] = $nums[$index];
        $backtrack($index + 1);
        array_pop($path);
    };

    $backtrack(0);

    return $result;
}
```

Total subsets:

```text
2ⁿ
```

---

## 28.2 Generate Permutations

```php
function permutations(array $nums): array
{
    $result = [];
    $used = [];
    $path = [];

    $backtrack = function () use (
        &$backtrack,
        &$result,
        &$used,
        &$path,
        $nums
    ): void {
        if (count($path) === count($nums)) {
            $result[] = $path;
            return;
        }

        foreach ($nums as $i => $num) {
            if (isset($used[$i])) {
                continue;
            }

            $used[$i] = true;
            $path[] = $num;

            $backtrack();

            array_pop($path);
            unset($used[$i]);
        }
    };

    $backtrack();

    return $result;
}
```

---

## 28.3 Classic Backtracking Problems

- subsets
- permutations
- combinations
- combination sum
- N-Queens
- Sudoku
- word search
- maze
- palindrome partitioning

---

# 29. Divide and Conquer

Divide and conquer:

```text
Divide problem
Solve smaller subproblems
Combine results
```

Examples:

- merge sort
- quick sort
- binary search
- closest pair of points
- exponentiation by squaring

---

## 29.1 Fast Power

Instead of multiplying `x` by itself `n` times:

```text
x⁸ = (x⁴)²
x⁴ = (x²)²
```

```php
function power(int|float $x, int $n): int|float
{
    if ($n === 0) {
        return 1;
    }

    if ($n < 0) {
        return 1 / power($x, -$n);
    }

    $half = power($x, intdiv($n, 2));

    if ($n % 2 === 0) {
        return $half * $half;
    }

    return $half * $half * $x;
}
```

Complexity:

```text
O(log n)
```

---

# 30. Dynamic Programming

Dynamic programming solves problems with:

1. **overlapping subproblems**
2. **optimal substructure**

Two major approaches:

```text
Memoization = top-down
Tabulation  = bottom-up
```

---

## 30.1 Fibonacci with Memoization

```php
function fibMemo(int $n, array &$memo = []): int
{
    if ($n <= 1) {
        return $n;
    }

    if (isset($memo[$n])) {
        return $memo[$n];
    }

    return $memo[$n] =
        fibMemo($n - 1, $memo)
        + fibMemo($n - 2, $memo);
}
```

Time:

```text
O(n)
```

Space:

```text
O(n)
```

---

## 30.2 Fibonacci with Tabulation

```php
function fibTab(int $n): int
{
    if ($n <= 1) {
        return $n;
    }

    $dp = [0, 1];

    for ($i = 2; $i <= $n; $i++) {
        $dp[$i] = $dp[$i - 1] + $dp[$i - 2];
    }

    return $dp[$n];
}
```

---

## 30.3 Space Optimization

Only previous two values are needed.

```php
function fibOptimized(int $n): int
{
    if ($n <= 1) {
        return $n;
    }

    $prev2 = 0;
    $prev1 = 1;

    for ($i = 2; $i <= $n; $i++) {
        $current = $prev1 + $prev2;
        $prev2 = $prev1;
        $prev1 = $current;
    }

    return $prev1;
}
```

Space:

```text
O(1)
```

---

## 30.4 Climbing Stairs

If each move can be 1 or 2 steps:

```text
ways[n] = ways[n-1] + ways[n-2]
```

This is structurally Fibonacci.

The important lesson:

> Many DSA problems are familiar recurrences hidden inside a story.

---

## 30.5 0/1 Knapsack

Each item can be selected at most once.

State:

```text
dp[i][capacity]
```

Decision:

```text
skip item
take item
```

Transition:

```text
max(
    skip,
    itemValue + solve(remainingCapacity)
)
```

Important related problems:

- subset sum
- partition equal subset sum
- target sum

---

## 30.6 Coin Change

Minimum coins:

```php
function minCoins(array $coins, int $amount): int
{
    $dp = array_fill(0, $amount + 1, PHP_INT_MAX);
    $dp[0] = 0;

    for ($current = 1; $current <= $amount; $current++) {
        foreach ($coins as $coin) {
            if ($coin <= $current && $dp[$current - $coin] !== PHP_INT_MAX) {
                $dp[$current] = min(
                    $dp[$current],
                    $dp[$current - $coin] + 1
                );
            }
        }
    }

    return $dp[$amount] === PHP_INT_MAX
        ? -1
        : $dp[$amount];
}
```

---

## 30.7 Longest Common Subsequence

Given:

```text
abcde
ace
```

LCS:

```text
ace
```

Recurrence:

```text
if chars equal:
    1 + dp[i-1][j-1]

else:
    max(dp[i-1][j], dp[i][j-1])
```

Applications:

- diff tools
- sequence comparison
- version comparison
- text analysis

---

## 30.8 Longest Increasing Subsequence

Classic DP:

```text
O(n²)
```

Optimized technique:

```text
O(n log n)
```

using binary search over a `tails` array.

---

## 30.9 DP Identification Checklist

Ask:

1. Are the same subproblems repeated?
2. Do I need minimum/maximum/count/number of ways?
3. Can the answer be defined using smaller states?
4. What variables uniquely describe a state?
5. What decisions can I make from that state?
6. What is the base case?
7. Can memory be optimized?

---

## 30.10 Common DP Categories

### 1D DP

- Fibonacci
- climbing stairs
- house robber
- coin change

### 2D DP

- grid paths
- LCS
- edit distance

### Knapsack DP

- subset sum
- partition
- target sum

### Interval DP

- matrix chain multiplication
- burst balloons

### Tree DP

- maximum path-like computations
- subtree decisions

### State Machine DP

- stock buy/sell
- cooldown states
- transaction limits

---

# 31. Bit Manipulation

Binary representation:

```text
5 = 101
6 = 110
```

Operators:

```php
&   AND
|   OR
^   XOR
~   NOT
<<  left shift
>>  right shift
```

---

## 31.1 Check Even/Odd

```php
$isOdd = ($n & 1) === 1;
```

---

## 31.2 XOR Properties

```text
x ^ x = 0
x ^ 0 = x
```

Therefore, if every number occurs twice except one:

```php
function singleNumber(array $nums): int
{
    $answer = 0;

    foreach ($nums as $num) {
        $answer ^= $num;
    }

    return $answer;
}
```

---

## 31.3 Check Bit

```php
function isBitSet(int $n, int $position): bool
{
    return ($n & (1 << $position)) !== 0;
}
```

---

## 31.4 Set Bit

```php
$n |= (1 << $position);
```

---

## 31.5 Clear Bit

```php
$n &= ~(1 << $position);
```

---

## 31.6 Bitmask Use Cases

- permissions
- subset enumeration
- compact flags
- state compression DP

Example permissions:

```text
READ   = 001
WRITE  = 010
DELETE = 100
```

---

# 32. Monotonic Stack and Monotonic Queue

A monotonic stack keeps values increasing or decreasing.

Common problems:

- next greater element
- previous smaller element
- stock span
- largest rectangle in histogram
- daily temperatures

---

## 32.1 Next Greater Element

```php
function nextGreater(array $nums): array
{
    $n = count($nums);
    $result = array_fill(0, $n, -1);
    $stack = [];

    for ($i = 0; $i < $n; $i++) {
        while (
            $stack !== []
            && $nums[end($stack)] < $nums[$i]
        ) {
            $index = array_pop($stack);
            $result[$index] = $nums[$i];
        }

        $stack[] = $i;
    }

    return $result;
}
```

Each index is pushed and popped at most once.

Time:

```text
O(n)
```

---

## 32.2 Monotonic Queue

Useful for:

```text
sliding window maximum
```

The deque stores candidate indices while removing values that can never become the maximum.

This turns an `O(nk)` solution into `O(n)`.

---

# 33. Matrix and Grid Problems

A matrix:

```php
$grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
```

Common problems:

- islands
- flood fill
- shortest grid path
- rotate matrix
- spiral traversal
- dynamic programming paths

---

## 33.1 Four Directions

```php
$directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
];
```

---

## 33.2 Number of Islands Pattern

For every cell:

```text
if land and unvisited:
    increment island count
    BFS/DFS to mark entire island
```

This is simply **connected components on a grid**.

---

## 33.3 Flood Fill

```php
function floodFill(
    array &$grid,
    int $row,
    int $col,
    int $newColor
): void {
    $rows = count($grid);
    $cols = count($grid[0]);

    $oldColor = $grid[$row][$col];

    if ($oldColor === $newColor) {
        return;
    }

    $dfs = function (int $r, int $c) use (
        &$dfs,
        &$grid,
        $rows,
        $cols,
        $oldColor,
        $newColor
    ): void {
        if (
            $r < 0 || $r >= $rows
            || $c < 0 || $c >= $cols
            || $grid[$r][$c] !== $oldColor
        ) {
            return;
        }

        $grid[$r][$c] = $newColor;

        $dfs($r - 1, $c);
        $dfs($r + 1, $c);
        $dfs($r, $c - 1);
        $dfs($r, $c + 1);
    };

    $dfs($row, $col);
}
```

---

# 34. String-Matching Algorithms

For small inputs:

```php
strpos($text, $pattern)
```

may be sufficient in real PHP applications.

For DSA learning, understand the algorithms behind efficient pattern search.

---

## 34.1 Naive Search

Try the pattern at every starting position.

Worst-case:

```text
O(nm)
```

where:

```text
n = text length
m = pattern length
```

---

## 34.2 KMP — Knuth-Morris-Pratt

KMP avoids restarting comparisons from scratch.

It precomputes an LPS array:

```text
Longest Proper Prefix that is also a Suffix
```

Complexity:

```text
Preprocessing: O(m)
Search:        O(n)
Total:         O(n + m)
```

---

## 34.3 LPS Construction

```php
function buildLps(string $pattern): array
{
    $m = strlen($pattern);
    $lps = array_fill(0, $m, 0);

    $length = 0;
    $i = 1;

    while ($i < $m) {
        if ($pattern[$i] === $pattern[$length]) {
            $length++;
            $lps[$i] = $length;
            $i++;
        } elseif ($length > 0) {
            $length = $lps[$length - 1];
        } else {
            $lps[$i] = 0;
            $i++;
        }
    }

    return $lps;
}
```

---

## 34.4 KMP Search

```php
function kmpSearch(string $text, string $pattern): int
{
    if ($pattern === '') {
        return 0;
    }

    $lps = buildLps($pattern);

    $i = 0;
    $j = 0;

    while ($i < strlen($text)) {
        if ($text[$i] === $pattern[$j]) {
            $i++;
            $j++;

            if ($j === strlen($pattern)) {
                return $i - $j;
            }
        } elseif ($j > 0) {
            $j = $lps[$j - 1];
        } else {
            $i++;
        }
    }

    return -1;
}
```

---

## 34.5 Rabin-Karp

Uses rolling hashes to compare candidate substrings.

Useful conceptually for:

- multiple pattern checks
- substring matching
- plagiarism-like matching
- duplicate substring techniques

Hash collisions must be handled.

---

# 35. Advanced Range Data Structures

When you repeatedly query or update ranges, basic loops can become expensive.

---

## 35.1 Fenwick Tree / Binary Indexed Tree

Supports:

```text
point update
prefix sum
range sum
```

in:

```text
O(log n)
```

---

## 35.2 Fenwick Tree Implementation

```php
class FenwickTree
{
    private array $tree;
    private int $n;

    public function __construct(int $n)
    {
        $this->n = $n;
        $this->tree = array_fill(0, $n + 1, 0);
    }

    public function add(int $index, int $delta): void
    {
        $index++;

        while ($index <= $this->n) {
            $this->tree[$index] += $delta;
            $index += $index & (-$index);
        }
    }

    public function prefixSum(int $index): int
    {
        $index++;
        $sum = 0;

        while ($index > 0) {
            $sum += $this->tree[$index];
            $index -= $index & (-$index);
        }

        return $sum;
    }

    public function rangeSum(int $left, int $right): int
    {
        if ($left === 0) {
            return $this->prefixSum($right);
        }

        return $this->prefixSum($right)
            - $this->prefixSum($left - 1);
    }
}
```

---

## 35.3 Segment Tree

Supports more flexible range operations.

Common operations:

```text
range sum
range minimum
range maximum
point updates
```

Typical complexity:

```text
Build:  O(n)
Query:  O(log n)
Update: O(log n)
```

With lazy propagation, range updates can also be efficient.

Use segment trees when:

- data changes often
- many range queries exist
- prefix sums alone are insufficient

---

# 36. Caching and LRU Cache

LRU means:

```text
Least Recently Used
```

When capacity is full, remove the item that has not been used for the longest time.

Ideal complexity:

```text
get: O(1)
put: O(1)
```

Typically implemented using:

```text
Hash map
+
Doubly linked list
```

Why both?

Hash map:

```text
find node quickly
```

Linked list:

```text
move recently used node to front
remove least-recent node from back
```

This pattern is widely used in:

- HTTP caches
- ORM caching
- application caching
- operating systems
- database buffer pools

---

# 37. Randomized Algorithms and Reservoir Sampling

Suppose millions of records stream in and you need one uniformly random item, but cannot store them all.

Reservoir sampling solves this with constant memory.

---

## 37.1 Reservoir Sampling for One Item

```php
function reservoirSample(iterable $items): mixed
{
    $selected = null;
    $count = 0;

    foreach ($items as $item) {
        $count++;

        if (random_int(1, $count) === 1) {
            $selected = $item;
        }
    }

    return $selected;
}
```

Space:

```text
O(1)
```

Useful for:

- huge files
- logs
- streams
- database cursors
- random sampling

---

# 38. PHP SPL Data Structures

The Standard PHP Library provides useful built-in data-structure classes.

Important ones include:

| Class | Purpose |
|---|---|
| `SplStack` | Stack |
| `SplQueue` | Queue |
| `SplDoublyLinkedList` | Doubly linked list |
| `SplPriorityQueue` | Priority queue |
| `SplMinHeap` | Min heap |
| `SplMaxHeap` | Max heap |
| `SplFixedArray` | Fixed-size indexed structure |
| `SplObjectStorage` | Object map/set |

---

## 38.1 `SplDoublyLinkedList`

```php
$list = new SplDoublyLinkedList();

$list->push(10);
$list->push(20);
$list->unshift(5);

echo $list->shift(); // 5
```

---

## 38.2 `SplFixedArray`

```php
$arr = new SplFixedArray(3);

$arr[0] = 'A';
$arr[1] = 'B';
$arr[2] = 'C';
```

Unlike a normal PHP array, its size is explicitly managed.

---

## 38.3 `SplObjectStorage`

```php
$storage = new SplObjectStorage();

$obj1 = new stdClass();
$obj2 = new stdClass();

$storage[$obj1] = 'metadata-1';
$storage[$obj2] = 'metadata-2';

if ($storage->contains($obj1)) {
    echo $storage[$obj1];
}
```

Useful when object identity itself is the key.

---

# 39. PHP Performance Considerations for DSA

PHP is perfectly capable of expressing DSA solutions, but implementation details matter.

---

## 39.1 PHP Arrays Are Powerful but Heavy

A PHP array is not simply a low-level contiguous integer array.

It supports:

```text
integer keys
string keys
insertion order
mapping behavior
```

That flexibility has memory cost.

For algorithm interviews, PHP arrays are usually fine.

For production processing of huge datasets, memory usage deserves attention.

---

## 39.2 Avoid Repeated `array_shift()` for Large Queues

This pattern:

```php
while ($queue !== []) {
    $item = array_shift($queue);
}
```

may incur avoidable overhead.

Prefer:

```php
$queue = new SplQueue();
```

for heavy FIFO operations.

---

## 39.3 Avoid Repeated `count()` in Hot Loops When Appropriate

Readable code:

```php
for ($i = 0; $i < count($arr); $i++) {
}
```

You can cache:

```php
$n = count($arr);

for ($i = 0; $i < $n; $i++) {
}
```

This also makes algorithm notation clearer.

---

## 39.4 Avoid Accidental Copies

When a large array is conceptually meant to be modified in place, understand how passing and mutation affect memory.

Example:

```php
function sortNumbers(array $numbers): array
{
    sort($numbers);
    return $numbers;
}
```

This API is simple but may lead to additional memory use compared with carefully designed in-place workflows.

Use references only deliberately:

```php
function sortInPlace(array &$numbers): void
{
    sort($numbers);
}
```

Do not overuse references merely as a micro-optimization.

---

## 39.5 Strict Comparison

Prefer:

```php
===
!==
```

when type coercion is not desired.

Example:

```php
0 == "0"   // loose comparison
0 === "0"  // false
```

DSA code can produce subtle bugs if key/value types are mixed.

---

## 39.6 `isset()` vs `array_key_exists()`

Important distinction:

```php
$arr = ['x' => null];
```

```php
isset($arr['x']);             // false
array_key_exists('x', $arr);  // true
```

For a set where values are always `true`, `isset()` is convenient.

For a map where `null` is a valid stored value, use `array_key_exists()` when you need to distinguish absence from a null value.

---

## 39.7 Integer Overflow Considerations

PHP integers have platform-dependent integer size, commonly 64-bit on modern 64-bit environments.

When algorithm values can become extremely large:

- validate constraints
- consider overflow
- use modular arithmetic when specified
- consider extensions/libraries for arbitrary-precision arithmetic when required

---

# 40. Generators and Memory-Efficient Processing

A generator yields values one at a time instead of building the complete result array.

```php
function numbers(int $max): Generator
{
    for ($i = 1; $i <= $max; $i++) {
        yield $i;
    }
}
```

Usage:

```php
foreach (numbers(1_000_000) as $number) {
    // process one value at a time
}
```

This is highly useful for:

- huge CSV files
- logs
- database rows
- streaming ETL
- batch jobs
- large API exports

---

## 40.1 File Generator

```php
function lines(string $file): Generator
{
    $handle = fopen($file, 'rb');

    if ($handle === false) {
        throw new RuntimeException('Cannot open file');
    }

    try {
        while (($line = fgets($handle)) !== false) {
            yield rtrim($line, "\r\n");
        }
    } finally {
        fclose($handle);
    }
}
```

Instead of loading a huge file into memory:

```php
foreach (lines('large.log') as $line) {
    // process
}
```

---

# 41. Problem-Solving Framework

Use the following framework for every problem.

---

## Step 1 — Restate the Problem

Example:

> Find the longest contiguous subarray whose sum is at most `K`.

Clarify:

- input
- output
- constraints
- edge cases

---

## Step 2 — Create Examples

```text
Input:  [1,2,1,0,1], K=4
Output: ?
```

Manual examples frequently reveal the pattern.

---

## Step 3 — Start with Brute Force

Do not jump immediately into clever optimization.

Ask:

```text
What is the simplest correct solution?
```

Then analyze it.

---

## Step 4 — Find the Bottleneck

Suppose brute force is:

```text
O(n²)
```

Why?

Perhaps a range is recalculated repeatedly.

Can you use:

- prefix sum?
- hash map?
- sliding window?
- sorting?
- binary search?

---

## Step 5 — Identify the Pattern

Useful pattern questions:

```text
Need repeated lookup?
→ Hash map

Sorted data?
→ Binary search / two pointers

Contiguous range?
→ Sliding window / prefix sum

Hierarchy?
→ Tree

Network/relationships?
→ Graph

Minimum/maximum repeated choice?
→ Heap / DP / greedy

All combinations?
→ Backtracking

Dependency ordering?
→ Topological sort
```

---

## Step 6 — State Complexity Before Coding

Example:

```text
Time: O(n)
Space: O(n)
```

---

## Step 7 — Code in Small Steps

Avoid writing a giant function immediately.

Use meaningful variables:

```php
$left
$right
$windowSum
$visited
$distance
$parent
```

---

## Step 8 — Dry Run

Track variables:

| Step | left | right | state |
|---|---:|---:|---|
| 1 | 0 | 0 | ... |
| 2 | 0 | 1 | ... |
| 3 | 1 | 2 | ... |

---

## Step 9 — Test Edge Cases

Always test:

```text
empty input
one element
all equal
already sorted
reverse sorted
duplicates
negative values
very large values
target absent
target at first position
target at last position
```

---

# 42. Common Interview Patterns

Learning patterns is more useful than memorizing hundreds of unrelated answers.

---

## Pattern 1 — Frequency Map

Trigger:

```text
count
duplicate
anagram
frequency
```

Tool:

```text
associative array
```

---

## Pattern 2 — Two Pointers

Trigger:

```text
sorted
pair
palindrome
opposite ends
```

---

## Pattern 3 — Sliding Window

Trigger:

```text
contiguous substring/subarray
longest
shortest
fixed-length range
```

---

## Pattern 4 — Prefix Sum

Trigger:

```text
many range sum queries
subarray sums
cumulative totals
```

---

## Pattern 5 — Fast/Slow Pointer

Trigger:

```text
linked-list cycle
middle element
repeated state
```

---

## Pattern 6 — BFS

Trigger:

```text
shortest steps in unweighted graph
nearest
level
```

---

## Pattern 7 — DFS

Trigger:

```text
explore all connected nodes
components
tree traversal
path exploration
```

---

## Pattern 8 — Heap

Trigger:

```text
top K
smallest K
largest K
priority
stream median
```

---

## Pattern 9 — Binary Search

Trigger:

```text
sorted
monotonic
minimum feasible
maximum possible
```

---

## Pattern 10 — Backtracking

Trigger:

```text
all combinations
all arrangements
generate
search decision tree
```

---

## Pattern 11 — DP

Trigger:

```text
minimum
maximum
count ways
repeated subproblems
choose/skip
```

---

## Pattern 12 — Union-Find

Trigger:

```text
dynamic connectivity
groups
merging sets
cycle in undirected edges
```

---

## Pattern 13 — Monotonic Stack

Trigger:

```text
next greater
previous smaller
nearest larger
histogram
```

---

## Pattern 14 — Trie

Trigger:

```text
prefix
dictionary
autocomplete
many word lookups
```

---

# 43. Real-World DSA Use Cases for PHP Developers

DSA is not limited to interview puzzles.

---

## 43.1 API Rate Limiter

Possible techniques:

- queue
- sliding window
- token bucket
- hash map

Example concept:

```text
userId → timestamps of recent requests
```

Discard timestamps outside the allowed window.

---

## 43.2 Job Scheduler

Use:

```text
priority queue
```

Jobs:

```text
payment callback → priority 100
email campaign    → priority 10
analytics job     → priority 1
```

---

## 43.3 Autocomplete

Use:

```text
Trie
```

Input:

```text
"app"
```

Suggestions:

```text
apple
application
apply
```

---

## 43.4 Dependency Resolver

Use:

```text
directed graph
topological sort
```

Applications:

- deployment order
- build system
- package dependencies
- workflow tasks

---

## 43.5 Shortest Delivery Route

Use graph shortest-path algorithms.

Nodes:

```text
warehouses
stores
junctions
```

Edges:

```text
distance/travel time
```

---

## 43.6 Duplicate Transaction Detection

Use:

```text
hash map
set
sliding time window
```

Example key:

```text
customer + amount + merchant + short time interval
```

---

## 43.7 Dashboard Range Queries

For mostly static historical metrics:

```text
prefix sums
```

For frequently updated values:

```text
Fenwick tree
segment tree
```

---

## 43.8 Search Results Top K

Use:

```text
heap
```

Rather than sorting millions of items when only 10 are required.

---

## 43.9 Laravel Queue Concept

A framework queue abstracts infrastructure, but the conceptual DSA model remains FIFO/priority scheduling.

Understanding queues helps reason about:

- job ordering
- retries
- fairness
- delayed processing
- worker throughput

---

## 43.10 Database Index Thinking

Database indexes are not identical to basic interview structures, but DSA concepts help you understand why indexes can reduce search work.

Tree-like indexing concepts explain why:

```text
indexed lookup
```

can be far better than:

```text
full table scan
```

---

## 43.11 LRU Cache for Expensive API Results

Use:

```text
hash map + doubly linked list
```

to support fast lookup and eviction.

---

## 43.12 Fraud Relationship Detection

Model:

```text
account → device → card → IP → merchant
```

as a graph.

Graph traversal can reveal suspicious clusters and relationships.

---

# 44. Testing DSA Code in PHP

A correct algorithm requires tests.

---

## 44.1 Simple Assertions

```php
assert(binarySearch([1, 3, 5, 7], 5) === 2);
assert(binarySearch([1, 3, 5, 7], 8) === -1);
```

---

## 44.2 Test Categories

For each function test:

### Normal

```text
[1,2,3]
```

### Empty

```text
[]
```

### Single

```text
[7]
```

### Duplicate

```text
[2,2,2]
```

### Boundary

```text
first/last positions
```

### Invalid

```text
wrong k
negative constraints when not allowed
```

---

## 44.3 PHPUnit Example

```php
final class BinarySearchTest extends PHPUnit\Framework\TestCase
{
    public function testFindsTarget(): void
    {
        $this->assertSame(
            2,
            binarySearch([1, 3, 5, 7], 5)
        );
    }

    public function testReturnsMinusOneWhenMissing(): void
    {
        $this->assertSame(
            -1,
            binarySearch([1, 3, 5, 7], 4)
        );
    }
}
```

---

# 45. Benchmarking

Do not optimize purely by intuition.

Measure when performance matters.

---

## 45.1 `hrtime()`

```php
$start = hrtime(true);

$result = someAlgorithm($input);

$end = hrtime(true);

$elapsedNs = $end - $start;

echo "Nanoseconds: $elapsedNs" . PHP_EOL;
```

---

## 45.2 Memory

```php
$before = memory_get_usage(true);

$result = someAlgorithm($input);

$after = memory_get_usage(true);

echo 'Approx delta: ' . ($after - $before) . PHP_EOL;
```

---

## 45.3 Benchmarking Rules

- warm up where relevant
- run multiple times
- test realistic data sizes
- avoid I/O inside the measured loop unless I/O is what you are testing
- compare algorithms with identical input
- measure both time and memory
- remember Big O predicts scaling, not exact runtime

---

# 46. Common Mistakes

---

## Mistake 1 — Optimizing Before Understanding

Bad approach:

```text
start coding an O(n log n) solution before understanding the problem
```

Better:

```text
correct brute force
→ analyze
→ optimize
```

---

## Mistake 2 — Ignoring Constraints

If:

```text
n <= 20
```

exponential backtracking might be acceptable.

If:

```text
n = 1,000,000
```

`O(n²)` is usually unacceptable.

Constraints often reveal the expected complexity.

---

## Mistake 3 — Using Binary Search on Unsorted Data

Binary search requires monotonic ordering/conditions.

---

## Mistake 4 — Forgetting Duplicate Cases

Many algorithms fail with:

```text
[2,2,2,2]
```

Always test duplicates.

---

## Mistake 5 — Off-by-One Errors

Typical danger:

```php
$right = count($arr);
```

vs:

```php
$right = count($arr) - 1;
```

Choose one binary-search interval convention and stay consistent.

---

## Mistake 6 — Modifying Array While Iterating Without a Clear Plan

Mutation during iteration can cause confusing behavior.

Prefer explicit index management or create a result array.

---

## Mistake 7 — Confusing Values and Indices

For monotonic stacks, often store:

```text
indices
```

not values, because you need both location and value.

---

## Mistake 8 — Using Recursion Without a Base Case

Results in runaway recursion.

---

## Mistake 9 — Forgetting Visited Nodes in Graphs

Without:

```php
$visited[$node] = true;
```

a cycle can cause repeated traversal forever.

---

## Mistake 10 — Marking BFS Visited Too Late

Usually mark a node visited when it is **enqueued**, not only after dequeueing, to prevent many duplicate queue entries.

---

## Mistake 11 — Wrong Heap Direction

Remember:

```text
SplPriorityQueue → maximum priority extracted first
```

For minimum-distance Dijkstra, commonly use negative distances or an appropriate min-heap strategy.

---

## Mistake 12 — Treating PHP Strings as Unicode Character Arrays

Byte-oriented indexing is fine for ASCII-style coding problems but not generally equivalent to Unicode character processing.

---

# 47. Interview Cheat Sheet

## Complexity

```text
Array scan              O(n)
Hash lookup             O(1) average
Binary search           O(log n)
Merge sort              O(n log n)
Nested all-pairs        O(n²)
Heap push/pop           O(log n)
BFS/DFS                 O(V + E)
Dijkstra + heap         O((V + E) log V) typical adjacency-list form
Union-Find              almost O(1) amortized in practice
```

---

## Pattern → Tool

```text
Duplicate / frequency
→ Hash map

Pair in sorted data
→ Two pointers

Contiguous range
→ Sliding window / prefix sum

Repeated range query
→ Prefix sum / Fenwick / segment tree

Top K
→ Heap

Shortest unweighted path
→ BFS

Shortest non-negative weighted path
→ Dijkstra

Dependencies
→ Topological sort

Connectivity
→ DFS / BFS / Union-Find

All combinations
→ Backtracking

Repeated optimal subproblems
→ DP

Prefix dictionary
→ Trie

Next greater/smaller
→ Monotonic stack
```

---

## Binary Search Template

```php
$left = 0;
$right = count($arr) - 1;

while ($left <= $right) {
    $mid = $left + intdiv($right - $left, 2);

    if ($arr[$mid] === $target) {
        return $mid;
    }

    if ($arr[$mid] < $target) {
        $left = $mid + 1;
    } else {
        $right = $mid - 1;
    }
}
```

---

## BFS Template

```php
$queue = new SplQueue();
$queue->enqueue($start);

$visited = [$start => true];

while (!$queue->isEmpty()) {
    $node = $queue->dequeue();

    foreach ($graph[$node] ?? [] as $neighbor) {
        if (!isset($visited[$neighbor])) {
            $visited[$neighbor] = true;
            $queue->enqueue($neighbor);
        }
    }
}
```

---

## DFS Template

```php
function dfs($node, $graph, &$visited)
{
    $visited[$node] = true;

    foreach ($graph[$node] ?? [] as $neighbor) {
        if (!isset($visited[$neighbor])) {
            dfs($neighbor, $graph, $visited);
        }
    }
}
```

---

## Backtracking Template

```php
function backtrack(...)
{
    if (/* complete */) {
        // record
        return;
    }

    foreach ($choices as $choice) {
        // choose
        backtrack(...);
        // undo
    }
}
```

---

## DP Template

```text
1. Define state.
2. Define transition.
3. Define base cases.
4. Choose memoization or tabulation.
5. Determine computation order.
6. Optimize memory if possible.
```

---

# 48. Practice Roadmap

A structured progression prevents overwhelm.

---

## Phase 1 — Foundations

Learn:

- Big O
- arrays
- strings
- hash maps
- basic sorting
- linear search
- binary search

Goal:

```text
Solve 25–40 easy problems.
```

---

## Phase 2 — Core Patterns

Learn:

- two pointers
- sliding window
- prefix sums
- stack
- queue
- linked list

Goal:

```text
Solve 40–60 problems.
```

---

## Phase 3 — Trees and Graphs

Learn:

- tree DFS
- tree BFS
- BST
- graph BFS
- graph DFS
- topological sort
- Union-Find

Goal:

```text
Solve 50+ problems.
```

---

## Phase 4 — Advanced Patterns

Learn:

- heap
- backtracking
- greedy
- dynamic programming
- monotonic stack
- trie

Goal:

```text
Solve 60–100 problems.
```

---

## Phase 5 — Advanced DSA

Learn:

- Dijkstra
- Bellman-Ford
- MST
- Fenwick tree
- segment tree
- advanced string matching
- state compression
- advanced DP

---

## Suggested Weekly Routine

### Monday

```text
Learn one concept.
Implement from scratch.
```

### Tuesday

```text
Solve 3 easy problems.
```

### Wednesday

```text
Solve 2 medium problems.
```

### Thursday

```text
Review failed problems.
```

### Friday

```text
Solve timed interview set.
```

### Saturday

```text
Build one mini application using the concept.
```

### Sunday

```text
Revision + handwritten complexity notes.
```

---

# 49. Problem Practice Catalog

Use this catalog to practice patterns rather than random questions.

---

## Arrays

1. Find maximum/minimum.
2. Second largest.
3. Reverse array.
4. Rotate array.
5. Move zeros.
6. Remove duplicates.
7. Majority element.
8. Product except self.
9. Maximum subarray.
10. Missing number.

---

## Strings

1. Reverse string.
2. Palindrome.
3. Anagram.
4. Character frequency.
5. First unique character.
6. Longest common prefix.
7. String compression.
8. Longest substring without repeating.
9. Minimum window substring.
10. Pattern matching.

---

## Hash Maps

1. Two sum.
2. Group anagrams.
3. Duplicate detection.
4. Frequency sort.
5. Longest consecutive sequence.
6. Subarray sum equals K.
7. Isomorphic strings.
8. Word pattern.
9. Intersection of arrays.
10. Top K frequent elements.

---

## Linked Lists

1. Reverse list.
2. Middle node.
3. Detect cycle.
4. Find cycle entry.
5. Merge two sorted lists.
6. Remove nth node from end.
7. Intersection of two lists.
8. Palindrome linked list.
9. Reverse nodes in groups.
10. LRU cache.

---

## Stack

1. Valid parentheses.
2. Min stack.
3. Evaluate postfix.
4. Simplify path.
5. Next greater element.
6. Daily temperatures.
7. Stock span.
8. Largest rectangle.
9. Decode string.
10. Remove adjacent duplicates.

---

## Queue

1. Queue using stacks.
2. Stack using queues.
3. Moving average.
4. First non-repeating stream character.
5. BFS shortest path.
6. Rotting oranges.
7. Task scheduling.
8. Circular queue.
9. Sliding window maximum.
10. Multi-source BFS.

---

## Binary Search

1. Standard search.
2. First occurrence.
3. Last occurrence.
4. Search insert position.
5. Search rotated array.
6. Find peak.
7. Square root.
8. Minimum capacity.
9. Eating speed.
10. Median of two sorted arrays.

---

## Trees

1. Max depth.
2. Min depth.
3. Invert tree.
4. Same tree.
5. Symmetric tree.
6. Level order traversal.
7. Diameter.
8. Balanced tree.
9. Path sum.
10. Lowest common ancestor.
11. Right-side view.
12. Serialize/deserialize.
13. Maximum path sum.
14. Count good nodes.
15. Build tree from traversals.

---

## BST

1. Search.
2. Insert.
3. Validate BST.
4. Minimum value.
5. Kth smallest.
6. Delete node.
7. LCA.
8. Convert sorted array to BST.
9. Range sum BST.
10. BST iterator.

---

## Heap

1. Kth largest.
2. Top K frequent.
3. Merge K sorted lists.
4. K closest points.
5. Task scheduler.
6. Median from data stream.
7. Reorganize string.
8. K-way merge.
9. Smallest range.
10. Meeting rooms.

---

## Graphs

1. BFS traversal.
2. DFS traversal.
3. Number of components.
4. Number of islands.
5. Clone graph.
6. Course schedule.
7. Topological sort.
8. Detect cycle.
9. Bipartite graph.
10. Shortest unweighted path.
11. Dijkstra.
12. Network delay.
13. Cheapest route.
14. Word ladder.
15. Minimum spanning tree.

---

## Backtracking

1. Subsets.
2. Subsets with duplicates.
3. Permutations.
4. Unique permutations.
5. Combination sum.
6. Generate parentheses.
7. Word search.
8. N-Queens.
9. Sudoku.
10. Palindrome partitioning.

---

## Dynamic Programming

1. Fibonacci.
2. Climbing stairs.
3. House robber.
4. Coin change.
5. Unique paths.
6. Minimum path sum.
7. Decode ways.
8. Longest increasing subsequence.
9. Longest common subsequence.
10. Edit distance.
11. 0/1 knapsack.
12. Partition equal subset sum.
13. Target sum.
14. Stock buy/sell.
15. Word break.
16. Palindromic substring.
17. Longest palindromic subsequence.
18. Burst balloons.
19. Matrix chain multiplication.
20. DP on trees.

---

# 50. Mini Projects

Projects help connect DSA to actual PHP development.

---

## Project 1 — Autocomplete Engine

Use:

```text
Trie
```

Features:

- insert words
- prefix search
- top suggestions
- word frequency

Upgrade:

```text
Trie + heap
```

for ranked suggestions.

---

## Project 2 — Task Scheduler

Use:

```text
priority queue
```

Task:

```php
[
    'id' => 101,
    'priority' => 50,
    'createdAt' => ...
]
```

Features:

- enqueue
- process highest priority
- retry
- delayed task simulation

---

## Project 3 — Social Network Explorer

Use:

```text
graph
```

Features:

- add users
- connect friends
- mutual friends
- shortest friendship path
- connected communities

---

## Project 4 — Route Finder

Use:

```text
weighted graph + Dijkstra
```

Features:

- cities
- road weights
- shortest distance
- reconstruct route

---

## Project 5 — LRU API Cache

Use:

```text
hash map + doubly linked list
```

Features:

- fixed capacity
- get
- put
- evict least recently used
- TTL extension

---

## Project 6 — Search Index

Use:

```text
hash maps
tries
inverted index
```

Example index:

```text
"php" → [document1, document3]
"dsa" → [document2, document3]
```

---

## Project 7 — Log Analyzer

Use:

```text
generator
hash map
heap
sliding window
```

Features:

- process huge logs line by line
- top IPs
- top URLs
- request-rate windows
- error frequency

This is an excellent practical PHP DSA project.

---

## Project 8 — Meeting Room Scheduler

Use:

```text
interval sorting
heap
```

Determine:

```text
minimum rooms required
```

---

## Project 9 — Dependency Build Tool

Use:

```text
graph
topological sort
cycle detection
```

Input:

```text
A depends on B
B depends on C
```

Output:

```text
C → B → A
```

---

## Project 10 — Analytics Range Engine

Use:

```text
prefix sums
Fenwick tree
segment tree
```

Support:

- daily metric updates
- range totals
- minimum/maximum
- rolling analytics

---

# 51. Final Revision Checklist

Before saying "I know DSA in PHP", make sure you can explain and implement these without blindly copying.

## Foundations

- [ ] Big O notation
- [ ] Time vs space complexity
- [ ] Recursion and call stack
- [ ] PHP arrays
- [ ] Associative arrays
- [ ] strict vs loose comparison

## Arrays and Strings

- [ ] frequency map
- [ ] two pointers
- [ ] sliding window
- [ ] prefix sum
- [ ] difference array
- [ ] interval merging

## Search and Sort

- [ ] linear search
- [ ] binary search
- [ ] lower/upper boundary concept
- [ ] binary search on answer
- [ ] bubble sort
- [ ] insertion sort
- [ ] merge sort
- [ ] quick sort concepts

## Linear Data Structures

- [ ] linked list
- [ ] reverse linked list
- [ ] cycle detection
- [ ] stack
- [ ] queue
- [ ] deque
- [ ] monotonic stack

## Trees

- [ ] binary tree
- [ ] preorder
- [ ] inorder
- [ ] postorder
- [ ] level order
- [ ] BST
- [ ] LCA
- [ ] depth/height
- [ ] tree recursion

## Heaps

- [ ] min heap
- [ ] max heap
- [ ] priority queue
- [ ] top K

## Graphs

- [ ] adjacency list
- [ ] BFS
- [ ] DFS
- [ ] connected components
- [ ] cycle detection
- [ ] topological sort
- [ ] Dijkstra
- [ ] Bellman-Ford
- [ ] MST
- [ ] Union-Find

## Advanced

- [ ] trie
- [ ] backtracking
- [ ] greedy
- [ ] divide and conquer
- [ ] dynamic programming
- [ ] bit manipulation
- [ ] KMP
- [ ] Fenwick tree
- [ ] segment tree
- [ ] LRU cache
- [ ] generators for streaming data

---

# 52. Further Reading

For PHP-specific behavior and built-in data structures, keep the official PHP manual as the primary language reference.

Useful official topics include:

- PHP arrays
- Standard PHP Library (SPL)
- `SplDoublyLinkedList`
- `SplStack`
- `SplQueue`
- `SplHeap`
- `SplMinHeap`
- `SplMaxHeap`
- `SplPriorityQueue`
- `SplFixedArray`
- `SplObjectStorage`
- generators
- iterators
- anonymous functions
- array sorting functions

Official documentation:

- https://www.php.net/manual/en/language.types.array.php
- https://www.php.net/manual/en/book.spl.php
- https://www.php.net/manual/en/spl.datastructures.php
- https://www.php.net/manual/en/language.generators.php

---

# Appendix A — Complexity Reference Table

| Structure / Algorithm | Access | Search | Insert | Delete | Notes |
|---|---:|---:|---:|---:|---|
| Indexed sequence concept | O(1) | O(n) | varies | varies | PHP arrays have implementation-specific overhead |
| Hash map | — | O(1) avg | O(1) avg | O(1) avg | Worst case depends on implementation |
| Singly linked list | O(n) | O(n) | O(1) at head | O(1) with node/reference context | No direct random access |
| Stack | O(1) top | — | O(1) | O(1) | LIFO |
| Queue | O(1) ends | — | O(1) | O(1) | FIFO with suitable implementation |
| BST balanced | O(log n) | O(log n) | O(log n) | O(log n) | Can degrade if unbalanced |
| Heap | — | — | O(log n) | O(log n) root | Peek O(1) |
| Trie | O(L) | O(L) | O(L) | O(L) | L = word length |
| BFS | — | — | — | — | O(V + E) |
| DFS | — | — | — | — | O(V + E) |
| Binary search | — | O(log n) | — | — | Requires monotonic order |
| Merge sort | — | — | — | — | O(n log n) |
| Bubble sort | — | — | — | — | O(n²) worst |
| Dijkstra + heap | — | — | — | — | Typical O((V+E) log V) |
| Fenwick tree | — | — | O(log n) update | — | O(log n) prefix query |
| Segment tree | — | — | O(log n) update | — | O(log n) range query |

---

# Appendix B — Choosing the Right Data Structure

Ask:

### Do I need very fast key lookup?

```text
Hash map
```

### Do I need unique membership?

```text
Set-like map
```

### Do I need LIFO?

```text
Stack
```

### Do I need FIFO?

```text
Queue
```

### Do I need highest/lowest priority?

```text
Heap / Priority Queue
```

### Do I need hierarchical relationships?

```text
Tree
```

### Do I need arbitrary relationships?

```text
Graph
```

### Do I need fast prefix search?

```text
Trie
```

### Do I need repeated prefix/range sums with updates?

```text
Fenwick Tree
```

### Do I need more flexible range queries?

```text
Segment Tree
```

### Do I need O(1)-style cache lookup plus usage ordering?

```text
Hash map + doubly linked list
```

---

# Appendix C — The DSA Thinking Model

When a new problem appears, mentally ask:

```text
1. What exactly is the input?
2. What exactly is the output?
3. How large can the input be?
4. What is the brute-force approach?
5. What repeated work exists?
6. Is the input sorted?
7. Is this a contiguous range?
8. Is fast lookup required?
9. Is this a hierarchy?
10. Is this a network?
11. Is this asking for all combinations?
12. Is this asking for min/max/count of ways?
13. Is there a monotonic true/false condition?
14. Can I trade memory for speed?
15. What edge cases can break my solution?
```

That thinking process is more valuable than memorizing code.

---

# Appendix D — Recommended PHP DSA Project Structure

For serious study, organize your repository:

```text
php-dsa/
│
├── README.md
├── composer.json
│
├── src/
│   ├── Arrays/
│   ├── Strings/
│   ├── LinkedList/
│   ├── Stack/
│   ├── Queue/
│   ├── Hashing/
│   ├── Trees/
│   ├── Heap/
│   ├── Graph/
│   ├── Trie/
│   ├── Searching/
│   ├── Sorting/
│   ├── Greedy/
│   ├── Backtracking/
│   ├── DynamicProgramming/
│   ├── RangeQueries/
│   └── Utilities/
│
├── tests/
│   ├── Unit/
│   └── Integration/
│
├── examples/
│
└── benchmarks/
```

Example namespace:

```php
namespace App\DSA\Graph;
```

This turns DSA practice into a maintainable PHP codebase rather than hundreds of unrelated snippets.

---

# Appendix E — Interview Answer Template

When an interviewer gives a problem, use this structure:

```text
1. Clarify requirements.
2. State assumptions.
3. Describe brute force.
4. Give brute-force complexity.
5. Identify the optimization.
6. Explain the chosen data structure.
7. Describe the optimized algorithm.
8. State time complexity.
9. State space complexity.
10. Implement.
11. Dry-run one example.
12. Test edge cases.
```

Example:

> "The brute-force approach checks every pair, which is O(n²). Because I need to know whether a complement has already appeared, I can store previous values in a hash map. Then each element needs one average O(1) lookup, so the overall average time becomes O(n), using O(n) additional space."

That explanation demonstrates understanding rather than memorization.

---

# Appendix F — 30-Day DSA with PHP Study Plan

## Days 1–3

```text
Big O
PHP arrays
associative arrays
basic math
```

## Days 4–6

```text
strings
frequency maps
two sum
anagrams
```

## Days 7–9

```text
two pointers
sliding window
prefix sums
```

## Days 10–11

```text
sorting
binary search
binary search boundaries
```

## Days 12–13

```text
linked lists
slow/fast pointers
```

## Days 14–15

```text
stack
queue
monotonic stack
```

## Days 16–18

```text
trees
DFS
BFS
BST
```

## Days 19–21

```text
graphs
components
topological sort
Union-Find
```

## Days 22–23

```text
heap
priority queue
top K
```

## Days 24–25

```text
backtracking
subsets
permutations
```

## Days 26–28

```text
dynamic programming
1D DP
2D DP
knapsack
```

## Day 29

```text
Dijkstra
trie
bit manipulation
```

## Day 30

```text
mock interview
revision
solve 5 mixed problems without notes
```

---

# Appendix G — 12-Week Mastery Roadmap

## Weeks 1–2 — Fundamentals

Target:

```text
30 easy problems
```

Study:

- Big O
- arrays
- strings
- hashing
- sorting
- binary search

---

## Weeks 3–4 — Pattern Recognition

Target:

```text
30 easy + medium problems
```

Study:

- two pointers
- sliding window
- prefix sum
- intervals
- linked lists

---

## Weeks 5–6 — Stack, Queue, Trees

Target:

```text
35 problems
```

Study:

- stack
- queue
- monotonic stack
- tree DFS
- tree BFS
- BST

---

## Weeks 7–8 — Graphs and Heaps

Target:

```text
35 problems
```

Study:

- graph representation
- BFS
- DFS
- topological sort
- Union-Find
- Dijkstra
- heap

---

## Weeks 9–10 — Backtracking and DP

Target:

```text
40 problems
```

Study:

- subsets
- permutations
- combinations
- 1D DP
- 2D DP
- knapsack
- subsequences

---

## Weeks 11–12 — Advanced and Interview Preparation

Study:

- trie
- greedy
- monotonic queue
- Fenwick tree
- segment tree
- string matching
- mixed timed sets

Target:

```text
8–12 full mock interviews
```

---

# Appendix H — Final Principles

### Principle 1

Do not memorize solutions.

Memorize:

```text
patterns
invariants
trade-offs
```

### Principle 2

Always know why your chosen data structure fits the problem.

### Principle 3

A correct `O(n²)` solution is better than an incorrect `O(n)` solution.

First make it correct. Then improve it.

### Principle 4

Complexity is part of the solution.

Do not finish an algorithm explanation without discussing:

```text
time
space
```

### Principle 5

Use PHP's strengths.

Know:

```text
associative arrays
SPL
generators
iterators
built-in sorting
```

### Principle 6

For learning, implement data structures manually.

For production, prefer reliable built-ins/libraries when they fit the requirement.

### Principle 7

Practice by pattern.

Solving 200 random problems is less valuable than understanding why 50 problems belong to 10 reusable patterns.

### Principle 8

Re-solve failed problems.

A problem you could not solve is often more valuable than an easy problem you solved immediately.

### Principle 9

Write tests.

Edge cases are where many interview and production bugs live.

### Principle 10

Connect DSA to real systems.

When you see:

```text
queue worker
cache
database index
routing
dependency graph
autocomplete
rate limiter
scheduler
analytics
```

ask yourself:

> What data structure or algorithm is hiding underneath?

That habit is the real goal of studying DSA.

---


# Extended Advanced Reference

The following topics go beyond the minimum interview syllabus but are important for a genuinely broad DSA reference.

---

# Appendix I — Additional Sorting Algorithms

## I.1 Heap Sort

Heap sort:

1. Builds a heap.
2. Repeatedly extracts the largest or smallest element.
3. Places it into its final sorted position.

Complexity:

```text
Best:    O(n log n)
Average: O(n log n)
Worst:   O(n log n)
```

Typical auxiliary-space characteristics depend on implementation. A classic in-place heap sort can use constant extra array space.

Conceptual PHP implementation:

```php
function heapSort(array $arr): array
{
    $n = count($arr);

    for ($i = intdiv($n, 2) - 1; $i >= 0; $i--) {
        heapify($arr, $n, $i);
    }

    for ($end = $n - 1; $end > 0; $end--) {
        [$arr[0], $arr[$end]] = [$arr[$end], $arr[0]];
        heapify($arr, $end, 0);
    }

    return $arr;
}

function heapify(array &$arr, int $size, int $root): void
{
    while (true) {
        $largest = $root;
        $left = 2 * $root + 1;
        $right = 2 * $root + 2;

        if ($left < $size && $arr[$left] > $arr[$largest]) {
            $largest = $left;
        }

        if ($right < $size && $arr[$right] > $arr[$largest]) {
            $largest = $right;
        }

        if ($largest === $root) {
            return;
        }

        [$arr[$root], $arr[$largest]] =
            [$arr[$largest], $arr[$root]];

        $root = $largest;
    }
}
```

---

## I.2 Counting Sort

Counting sort is useful when values fall inside a small known integer range.

Example:

```text
Input values: 0 through 100
Number of records: millions
```

Instead of comparison sorting, count each value.

```php
function countingSort(array $arr): array
{
    if ($arr === []) {
        return [];
    }

    $min = min($arr);
    $max = max($arr);

    $count = array_fill(0, $max - $min + 1, 0);

    foreach ($arr as $value) {
        $count[$value - $min]++;
    }

    $result = [];

    foreach ($count as $offset => $frequency) {
        $value = $offset + $min;

        for ($i = 0; $i < $frequency; $i++) {
            $result[] = $value;
        }
    }

    return $result;
}
```

Complexity:

```text
O(n + k)
```

where `k` is the numeric range size.

Do **not** use it if:

```text
n = 100
range = 0 to 1,000,000,000
```

because the count array would be wasteful.

---

## I.3 Radix Sort

Radix sort processes numbers digit by digit.

Example:

```text
170
045
075
090
802
024
002
066
```

It commonly uses a stable counting/bucket operation for each digit.

Approximate complexity:

```text
O(d(n + b))
```

where:

- `d` = number of digits
- `b` = base/radix

Useful when sorting many fixed-width integers or strings under suitable constraints.

---

## I.4 Bucket Sort

Bucket sort distributes items into buckets, sorts each bucket, then concatenates.

It can perform very well for uniformly distributed data.

Example:

```text
0.12
0.17
0.23
0.51
0.76
0.92
```

Buckets might represent:

```text
0.0–0.1
0.1–0.2
...
0.9–1.0
```

Performance depends heavily on the input distribution.

---

## I.5 Sorting Decision Guide

```text
General production sorting
→ PHP built-in sort functions

Need stable conceptual O(n log n)
→ Merge sort

Need strong worst-case O(n log n) and heap semantics
→ Heap sort

Small/nearly sorted input
→ Insertion sort can be attractive conceptually

Small integer value range
→ Counting sort

Digit-oriented fixed-width values
→ Radix sort
```

---

# Appendix J — Advanced Tree Concepts

## J.1 Balanced Search Trees

A normal BST can degrade to:

```text
1
 \
  2
   \
    3
     \
      4
```

Search then becomes:

```text
O(n)
```

Balanced trees maintain height around:

```text
O(log n)
```

Important balanced-tree families include:

- AVL tree
- Red-Black tree

---

## J.2 AVL Tree

An AVL tree maintains a balance factor for every node:

```text
balanceFactor =
height(left subtree) - height(right subtree)
```

Valid balance:

```text
-1, 0, +1
```

If balance becomes invalid, rotations restore it.

Rotation types:

```text
LL → right rotation
RR → left rotation
LR → left then right
RL → right then left
```

AVL trees generally provide tightly balanced search paths.

Typical operations:

```text
search: O(log n)
insert: O(log n)
delete: O(log n)
```

---

## J.3 Red-Black Tree

A Red-Black tree uses color constraints to keep height bounded.

Conceptually, it trades slightly less rigid balance for efficient insert/delete maintenance.

Common real-world uses of balanced tree families include:

- ordered maps
- ordered sets
- language/runtime collections
- indexes
- schedulers

For PHP interviews, understanding the concept is often more important than implementing a full Red-Black tree from memory.

---

## J.4 B-Tree

B-Trees are multi-way search trees optimized for storage systems.

Unlike a binary tree, one node may contain many keys and children.

Why?

Disk access is expensive.

A B-Tree reduces tree height by storing many keys per node.

Used conceptually in:

- databases
- filesystems
- storage engines

---

## J.5 B+ Tree

B+ Trees are common in database indexes.

A simplified conceptual distinction:

```text
Internal nodes:
guide search

Leaf nodes:
store/index actual ordered records

Leaves:
often linked for efficient range scans
```

This is why database indexes can be excellent for:

```sql
WHERE created_at BETWEEN ...
ORDER BY created_at
```

when a suitable index exists.

---

## J.6 Tree Traversal: Iterative Inorder

```php
function inorderIterative(?TreeNode $root): array
{
    $result = [];
    $stack = [];
    $current = $root;

    while ($current !== null || $stack !== []) {
        while ($current !== null) {
            $stack[] = $current;
            $current = $current->left;
        }

        /** @var TreeNode $current */
        $current = array_pop($stack);
        $result[] = $current->value;
        $current = $current->right;
    }

    return $result;
}
```

This avoids recursive traversal.

---

## J.7 Lowest Common Ancestor in BST

```php
function lcaBST(
    ?TreeNode $root,
    int $a,
    int $b
): ?TreeNode {
    $current = $root;

    while ($current !== null) {
        if ($a < $current->value && $b < $current->value) {
            $current = $current->left;
        } elseif ($a > $current->value && $b > $current->value) {
            $current = $current->right;
        } else {
            return $current;
        }
    }

    return null;
}
```

The BST ordering avoids searching the entire tree.

---

# Appendix K — Advanced Graph Algorithms

## K.1 Bipartite Graph

A graph is bipartite if nodes can be split into two groups so that no edge connects two nodes in the same group.

Think:

```text
Group A ↔ Group B
```

Examples:

- students ↔ courses
- workers ↔ tasks
- customers ↔ products

Test with BFS/DFS coloring.

```php
function isBipartite(array $graph): bool
{
    $color = [];

    foreach (array_keys($graph) as $start) {
        if (isset($color[$start])) {
            continue;
        }

        $queue = new SplQueue();
        $queue->enqueue($start);
        $color[$start] = 0;

        while (!$queue->isEmpty()) {
            $node = $queue->dequeue();

            foreach ($graph[$node] ?? [] as $neighbor) {
                if (!isset($color[$neighbor])) {
                    $color[$neighbor] = 1 - $color[$node];
                    $queue->enqueue($neighbor);
                } elseif ($color[$neighbor] === $color[$node]) {
                    return false;
                }
            }
        }
    }

    return true;
}
```

---

## K.2 Strongly Connected Components

In a directed graph, a strongly connected component is a maximal set of nodes where every node can reach every other node.

Important algorithms:

- Kosaraju
- Tarjan

Applications:

- dependency cycles
- compiler analysis
- web graph analysis
- service dependency groups

---

## K.3 Kosaraju Algorithm

High-level steps:

```text
1. DFS and record finish order.
2. Reverse every graph edge.
3. Process nodes in reverse finish order.
4. Each DFS in the reversed graph gives one SCC.
```

Complexity:

```text
O(V + E)
```

---

## K.4 Bridges

A bridge is an edge whose removal increases the number of connected components.

Example:

```text
A — B — C
    |
    D
```

Some edges may be critical connections.

Applications:

- network reliability
- infrastructure analysis
- dependency failure analysis

Tarjan-style DFS using:

```text
discovery time
low-link value
```

can find bridges in:

```text
O(V + E)
```

---

## K.5 Articulation Points

An articulation point is a vertex whose removal disconnects part of the graph.

Think:

```text
critical router
critical server
critical transfer station
```

Like bridges, articulation points are found using DFS low-link analysis.

---

## K.6 Kruskal Minimum Spanning Tree

Algorithm:

```text
1. Sort edges by weight.
2. Start with no selected edges.
3. Process cheapest edge.
4. Add it if it does not create a cycle.
5. Use Union-Find to test connectivity.
6. Stop after V - 1 selected edges.
```

```php
function kruskalMST(int $vertices, array $edges): array
{
    usort(
        $edges,
        fn($a, $b) => $a[2] <=> $b[2]
    );

    $dsu = new DisjointSet($vertices);

    $mst = [];
    $cost = 0;

    foreach ($edges as [$u, $v, $weight]) {
        if ($dsu->union($u, $v)) {
            $mst[] = [$u, $v, $weight];
            $cost += $weight;

            if (count($mst) === $vertices - 1) {
                break;
            }
        }
    }

    if (count($mst) !== $vertices - 1) {
        throw new RuntimeException('Graph is disconnected');
    }

    return [
        'edges' => $mst,
        'cost' => $cost,
    ];
}
```

---

## K.7 Prim Algorithm

Prim grows an MST from a starting node.

At every step:

```text
Choose the cheapest edge connecting the current tree to an unvisited node.
```

A priority queue makes this efficient on adjacency-list graphs.

---

## K.8 A* Search

A* extends shortest-path search with a heuristic.

Priority:

```text
f(n) = g(n) + h(n)
```

where:

```text
g(n) = known cost from start
h(n) = estimated cost to target
```

Used in:

- games
- maps
- robotics
- path finding

If the heuristic is well designed, A* can explore much less of the graph than uninformed shortest-path search.

---

## K.9 Eulerian Path

An Eulerian path uses every **edge** exactly once.

Do not confuse this with a Hamiltonian path, which visits every **vertex** exactly once.

For undirected connected graphs:

```text
Eulerian circuit:
every non-isolated vertex has even degree

Eulerian path:
exactly 0 or 2 vertices have odd degree
```

---

## K.10 DAG Dynamic Programming

If a graph is a DAG:

```text
topological order
+
DP
```

can solve problems such as:

- longest path in a DAG
- minimum project completion cost
- dependency-based scoring
- number of paths

Because no cycles exist, states can be processed in a valid dependency order.

---

# Appendix L — More Dynamic Programming Patterns

## L.1 House Robber

At each house:

```text
take
or
skip
```

Recurrence:

```text
dp[i] =
max(
    dp[i - 1],
    value[i] + dp[i - 2]
)
```

Optimized PHP:

```php
function maxNonAdjacentSum(array $nums): int
{
    $prev2 = 0;
    $prev1 = 0;

    foreach ($nums as $num) {
        $current = max(
            $prev1,
            $prev2 + $num
        );

        $prev2 = $prev1;
        $prev1 = $current;
    }

    return $prev1;
}
```

---

## L.2 Unique Grid Paths

State:

```text
dp[row][col]
```

Transition:

```text
from top + from left
```

Space can often be optimized from:

```text
O(rows × cols)
```

to:

```text
O(cols)
```

---

## L.3 Edit Distance

Operations:

- insert
- delete
- replace

State:

```text
dp[i][j]
```

meaning:

```text
minimum edits to transform first i characters
into first j characters
```

Transition when characters differ:

```text
1 + min(
    insertion,
    deletion,
    replacement
)
```

Applications:

- spell checking
- fuzzy matching
- text comparison
- DNA/string comparison

---

## L.4 Stock DP

Stock problems often look confusing because the state is hidden.

Possible state variables:

```text
day
holding/not holding
transactions remaining
cooldown
```

Example:

```text
dp[day][holding]
```

The core skill is not memorizing stock formulas; it is learning to model state correctly.

---

## L.5 Palindrome DP

Common palindrome problems:

- longest palindromic substring
- longest palindromic subsequence
- minimum palindrome cuts

State may be:

```text
dp[left][right]
```

This is an example of **interval DP**.

---

## L.6 DP Optimization Thinking

After a correct DP solution, ask:

```text
Which old states are actually required?
```

If row `i` only uses row `i - 1`:

```text
2D DP
→ two rows
→ sometimes one row
```

This can reduce memory dramatically.

---

# Appendix M — Advanced Array Patterns

## M.1 Kadane's Algorithm

Maximum contiguous subarray sum:

```php
function maxSubarraySum(array $nums): int
{
    if ($nums === []) {
        throw new InvalidArgumentException('Input cannot be empty');
    }

    $current = $nums[0];
    $best = $nums[0];

    for ($i = 1, $n = count($nums); $i < $n; $i++) {
        $current = max(
            $nums[$i],
            $current + $nums[$i]
        );

        $best = max($best, $current);
    }

    return $best;
}
```

Mental model:

> At each position, either start a new subarray or extend the previous one.

Complexity:

```text
O(n)
```

---

## M.2 Dutch National Flag

Partition values into three categories.

Classic example:

```text
0, 1, 2
```

Use:

```text
low
mid
high
```

This is a powerful three-way partition pattern.

---

## M.3 Boyer-Moore Majority Vote

If a majority element is guaranteed to occur more than `n/2` times:

```php
function majorityElement(array $nums): int
{
    $candidate = 0;
    $count = 0;

    foreach ($nums as $num) {
        if ($count === 0) {
            $candidate = $num;
        }

        $count += ($num === $candidate) ? 1 : -1;
    }

    return $candidate;
}
```

Time:

```text
O(n)
```

Space:

```text
O(1)
```

If the problem does not guarantee a majority, verify the final candidate.

---

## M.4 Quickselect

Quickselect finds the kth element without fully sorting the input.

Average:

```text
O(n)
```

Worst:

```text
O(n²)
```

Useful for:

- kth smallest
- kth largest
- median-like selection

For many practical PHP cases, a heap can offer simpler predictable behavior.

---

# Appendix N — Sparse Table

A sparse table is useful for static arrays where values do not change.

Typical query:

```text
range minimum
range maximum
gcd
```

Preprocessing:

```text
O(n log n)
```

Idempotent range query such as min/max:

```text
O(1)
```

This is a specialized structure worth knowing when:

```text
many queries
+
no updates
```

Contrast:

```text
Prefix sum:
excellent for sums

Sparse table:
excellent for static min/max/gcd

Fenwick:
updates + sums

Segment tree:
updates + flexible associative range queries
```

---

# Appendix O — String Algorithms Beyond KMP

## O.1 Z Algorithm

The Z array stores:

```text
Z[i] =
length of longest substring starting at i
that matches a prefix of the string
```

It can solve:

- pattern matching
- prefix repetition
- string periodicity

Time:

```text
O(n)
```

---

## O.2 Rolling Hash

A substring can be represented by a numeric hash.

With prefix hashes, substring hashes can be computed quickly.

Use cases:

- Rabin-Karp
- duplicate substring detection
- string comparison
- palindrome algorithms

Important:

> Hash equality does not mathematically guarantee string equality unless collisions are eliminated by additional checks/techniques.

---

## O.3 Manacher's Algorithm

Finds palindromic radii for all centers in linear time.

Complexity:

```text
O(n)
```

This is more advanced than typical PHP backend interview requirements, but useful for algorithm-focused roles.

---

# Appendix P — Computational Complexity Concepts

Big O is only one piece of algorithm analysis.

---

## P.1 Big O

Upper growth bound.

Commonly used to describe algorithmic time/space scaling.

---

## P.2 Big Omega

Lower bound concept.

Written:

```text
Ω(...)
```

---

## P.3 Big Theta

Tight asymptotic bound.

Written:

```text
Θ(...)
```

Example:

A loop that always processes all `n` items is:

```text
Θ(n)
```

---

## P.4 Best, Average, Worst Case

Linear search:

```text
Best:
target is first
O(1)

Worst:
target last or absent
O(n)
```

---

## P.5 P and NP — Intuition

You do not need complexity theory for most PHP interviews, but the idea matters.

Simplified intuition:

```text
P:
problems efficiently solvable in polynomial time

NP:
problems whose proposed solutions can be efficiently verified
```

`P = NP?` remains one of computer science's major open problems.

NP-hard and NP-complete problems explain why some optimization tasks may require:

- approximation
- heuristics
- backtracking
- branch and bound
- specialized solvers

rather than expecting a simple fast exact algorithm.

---

# Appendix Q — Invariants: A Powerful Problem-Solving Tool

An invariant is a condition that remains true throughout an algorithm.

Example binary search invariant:

```text
If target exists, it remains inside the current search region.
```

Sliding window invariant example:

```text
Window always contains no duplicate characters.
```

Heap invariant:

```text
Parent ordering relative to children remains valid.
```

Thinking in invariants helps prove correctness.

Ask:

```text
What must always remain true after every iteration?
```

This is one of the strongest habits for advanced problem solving.

---

# Appendix R — Correctness Reasoning

An algorithm is not correct merely because it passed three examples.

A useful correctness argument contains:

1. Initialization
2. Maintenance
3. Termination

Example for a sliding window:

```text
Initialization:
empty/initial window satisfies condition.

Maintenance:
when right expands, left is moved until validity returns.

Termination:
every candidate valid window has been considered under the invariant.
```

For interviews, you usually explain this informally rather than writing a formal proof.

---

# Appendix S — Recursion Tree Analysis

Consider:

```text
T(n) = 2T(n/2) + O(n)
```

This resembles merge sort.

At each level:

```text
total merge work ≈ O(n)
```

Number of levels:

```text
O(log n)
```

Therefore:

```text
O(n log n)
```

Recursion-tree thinking helps analyze divide-and-conquer algorithms.

---

# Appendix T — Master Theorem Intuition

For recurrences:

```text
T(n) = aT(n/b) + f(n)
```

compare:

```text
subproblem work
vs
combination work
```

Examples:

Binary search:

```text
T(n) = T(n/2) + O(1)
→ O(log n)
```

Merge sort:

```text
T(n) = 2T(n/2) + O(n)
→ O(n log n)
```

You do not need to memorize every theorem case to benefit from recurrence intuition.

---

# Appendix U — Real-World Scenario Walkthroughs

## U.1 Detect Duplicate Invoice Number

Requirement:

> While importing invoices, reject duplicate invoice IDs.

Naive:

```text
For each incoming invoice:
scan all previous invoices
```

Potential:

```text
O(n²)
```

Better:

```php
$seen = [];

foreach ($invoices as $invoice) {
    $id = $invoice['invoice_no'];

    if (isset($seen[$id])) {
        echo "Duplicate: $id" . PHP_EOL;
        continue;
    }

    $seen[$id] = true;
}
```

Pattern:

```text
Hash set
```

---

## U.2 Find Top 10 Expensive Transactions

Options:

```text
Sort every transaction
→ O(n log n)

Maintain min heap of size 10
→ O(n log 10)
≈ O(n)
```

Pattern:

```text
Top K → heap
```

---

## U.3 Process Support Tickets by Severity

Ticket priority:

```text
Critical = 100
High     = 50
Normal   = 10
Low      = 1
```

Structure:

```text
priority queue
```

Be aware of tie-breaking requirements. If equal priorities must preserve arrival order, design an explicit secondary sequence field rather than assuming priority queue stability.

---

## U.4 Employee Reporting Hierarchy

Data:

```text
CEO
├── Director A
│   ├── Manager 1
│   └── Manager 2
└── Director B
```

Structure:

```text
Tree
```

Possible operations:

- list all reports
- count subtree employees
- find hierarchy depth
- find common manager
- traverse organization

---

## U.5 Workflow Approval Dependency

Tasks:

```text
Create request
→ Manager approval
→ Finance approval
→ Posting
```

If many dependencies exist, represent them as:

```text
DAG
```

Then use:

```text
topological ordering
cycle detection
```

---

## U.6 Large CSV Processing

Bad approach:

```php
$rows = file('huge.csv');
```

This can load the full file into memory.

Better concept:

```text
stream/generator
```

Process one row at a time.

---

## U.7 Attendance Range Analytics

Requirement:

> Answer hundreds of queries for employee attendance totals between arbitrary dates.

If historical data is static:

```text
prefix sum
```

If values are frequently corrected:

```text
Fenwick tree / segment tree
```

---

## U.8 Detect Circular Dependencies

Example:

```text
Module A → Module B
Module B → Module C
Module C → Module A
```

Use:

```text
directed graph cycle detection
```

or a topological-sort attempt. If not all nodes can be ordered, a cycle exists.

---

## U.9 Shortest Approval Escalation Chain

Suppose people are nodes and escalation relationships are unweighted edges.

Need:

```text
fewest number of hops
```

Use:

```text
BFS
```

If edges have costs such as processing time:

```text
Dijkstra
```

when weights are non-negative.

---

## U.10 Search Suggestions

Requirements:

```text
type "inv"
→ invoice
→ inventory
→ invitation
```

Use:

```text
Trie
```

If suggestions need popularity ranking:

```text
Trie nodes + ranked metadata / heap-like selection
```

---

# Appendix V — PHP Coding Interview Conventions

## V.1 Use Clear Function Signatures

Good:

```php
function binarySearch(array $numbers, int $target): int
```

Avoid meaningless variable names when clarity matters:

```php
function f($a, $x)
```

---

## V.2 State Assumptions

Example:

```text
"I assume the input contains ASCII lowercase letters."
```

This matters in PHP because byte indexing and Unicode character handling differ.

---

## V.3 Prefer Built-In SPL Structures Where They Express Intent

Queue:

```php
new SplQueue()
```

Stack:

```php
new SplStack()
```

Min heap:

```php
new SplMinHeap()
```

Max heap:

```php
new SplMaxHeap()
```

Priority queue:

```php
new SplPriorityQueue()
```

During an interview, tell the interviewer whether you are allowed to use language/library data structures.

---

## V.4 Know When Manual Implementation Is Expected

If asked:

> Implement a queue.

Do not answer only:

```php
$queue = new SplQueue();
```

Implement the requested structure.

If asked:

> Solve shortest path efficiently in PHP.

Using an SPL queue/priority queue is normally reasonable unless prohibited.

---

## V.5 Avoid Clever One-Liners

Interview code should optimize for:

```text
correctness
clarity
explainability
```

not shortest character count.

---

# Appendix W — Data Structure Trade-Off Matrix

| Need | Strong Candidate | Why |
|---|---|---|
| Fast membership | Hash set/map | Average O(1) lookup |
| Maintain insertion order + mapping | PHP array | Native ordered map behavior |
| LIFO | Stack | O(1)-style end operations |
| FIFO | `SplQueue` | Clear queue semantics |
| Highest priority | `SplPriorityQueue` | Priority extraction |
| Minimum numeric value repeatedly | `SplMinHeap` | Minimum at top |
| Object identity set/map | `SplObjectStorage` | Objects as keys |
| Prefix lookup | Trie | O(length) traversal |
| Hierarchical data | Tree | Natural parent/child model |
| Arbitrary relationships | Graph | General connectivity |
| Static range sum | Prefix sum | O(1) query after O(n) build |
| Dynamic prefix/range sums | Fenwick tree | O(log n) updates/queries |
| Flexible dynamic range queries | Segment tree | O(log n) operations |
| Fast recent-item cache | Hash map + DLL | Lookup + ordering |
| Connectivity merging | Union-Find | Extremely efficient grouping |

---

# Appendix X — Complexity by Input Size

These are rough problem-solving heuristics, not hard runtime guarantees.

```text
n <= 10
Factorial/backtracking may be possible.

n <= 20–25
O(2^n) may sometimes be expected.

n <= 100
O(n^3) may be possible depending on environment.

n <= 1,000
O(n^2) may sometimes be acceptable.

n <= 100,000
Usually target O(n log n) or O(n).

n >= 1,000,000
Often target O(n) or O(log n) per query.
```

Actual feasibility depends on:

- constant factors
- PHP runtime
- memory
- data representation
- number of test cases
- time limit
- I/O cost

Always use the stated constraints as your guide.

---

# Appendix Y — Building DSA Intuition from Existing PHP Work

When writing PHP applications, intentionally map familiar operations to DSA:

```text
Laravel Collection groupBy
→ hashing/grouping concept

Queue worker
→ queue scheduling

Middleware pipeline
→ ordered processing chain

Route prefix matching
→ trie-like concept

ORM relationship graph
→ graph relationships

Cache eviction
→ LRU / priority concepts

Database index
→ search tree/storage indexing concepts

Pagination
→ ordered traversal/range access

Batch import
→ streaming/generator

Dependency injection graph
→ directed dependency graph

Cron scheduling
→ priority/event scheduling

Permission bit flags
→ bit manipulation
```

This makes DSA feel like engineering rather than isolated puzzle solving.

---

# Appendix Z — Final Mastery Test

Try answering these without notes:

1. Why can a hash map improve Two Sum from O(n²) to O(n) average?
2. Why must binary search have a monotonic search condition?
3. Why does BFS find shortest paths in an unweighted graph?
4. Why does Dijkstra require non-negative edge weights in its standard form?
5. What problem does a heap solve better than sorting the entire input?
6. Why does a linked list need O(n) time for random indexed access?
7. What invariant does a monotonic stack maintain?
8. When would prefix sums be better than a segment tree?
9. When would a segment tree be better than prefix sums?
10. Why does memoization improve naive Fibonacci?
11. What is the difference between memoization and tabulation?
12. What makes a greedy choice valid?
13. What are overlapping subproblems?
14. Why does Union-Find use path compression?
15. What is the difference between a tree and a graph?
16. What is the difference between a BST and a heap?
17. What is the difference between DFS and BFS?
18. What is topological sorting used for?
19. How does a trie accelerate prefix lookup?
20. Why can repeated `array_shift()` be a poor queue implementation in PHP?
21. What is the difference between `isset()` and `array_key_exists()`?
22. Why can PHP array flexibility increase memory overhead?
23. How can generators improve large-file processing?
24. Why should you measure runtime instead of relying only on Big O?
25. What does `O(n log n)` usually suggest?
26. How do two pointers avoid nested-loop work?
27. How does a sliding window reuse previous computation?
28. What is a graph connected component?
29. What is an SCC?
30. What is an MST?
31. What is the role of low-link values in graph algorithms?
32. What is a B+ Tree conceptually useful for?
33. What is an LRU cache made from?
34. What is binary search on answer?
35. What does a difference array optimize?
36. What does Kadane's algorithm solve?
37. Why might counting sort outperform comparison sort?
38. Why is a stable sort useful?
39. What are the major edge cases you test by default?
40. Can you explain the complexity of your solution before writing code?

If you can answer these clearly and implement the core patterns from memory, your DSA foundation is strong.

---


# End of Handbook

You now have a structured path covering the major DSA topics required for:

- PHP development
- backend engineering
- Laravel/Symfony problem solving
- technical interviews
- coding challenges
- system-design foundations
- efficient production code
- long-term algorithmic thinking

The best next step is not reading the handbook repeatedly.

It is:

```text
Read one topic
→ implement it
→ solve 3–5 problems
→ explain it without notes
→ revisit later
```

**Mastery comes from retrieval and application, not passive reading.**
