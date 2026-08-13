# Regular Expressions (Regex) — Master Learning Handbook

> A practical, beginner-friendly, single-file guide to learning Regular Expressions from fundamentals to advanced patterns, debugging, performance, security, and real-world use cases.

---

## Table of Contents

1. [What Is a Regular Expression?](#1-what-is-a-regular-expression)
2. [Why Learn Regex?](#2-why-learn-regex)
3. [Where Regex Is Used](#3-where-regex-is-used)
4. [How Regex Engines Work](#4-how-regex-engines-work)
5. [Your First Regex](#5-your-first-regex)
6. [Literal Characters](#6-literal-characters)
7. [Metacharacters](#7-metacharacters)
8. [Character Classes](#8-character-classes)
9. [Negated Character Classes](#9-negated-character-classes)
10. [Shorthand Character Classes](#10-shorthand-character-classes)
11. [The Dot Metacharacter](#11-the-dot-metacharacter)
12. [Anchors](#12-anchors)
13. [Quantifiers](#13-quantifiers)
14. [Greedy vs Lazy Quantifiers](#14-greedy-vs-lazy-quantifiers)
15. [Grouping](#15-grouping)
16. [Capturing Groups](#16-capturing-groups)
17. [Non-Capturing Groups](#17-non-capturing-groups)
18. [Named Capturing Groups](#18-named-capturing-groups)
19. [Alternation](#19-alternation)
20. [Backreferences](#20-backreferences)
21. [Word Boundaries](#21-word-boundaries)
22. [Lookahead](#22-lookahead)
23. [Lookbehind](#23-lookbehind)
24. [Flags / Modifiers](#24-flags--modifiers)
25. [Escaping](#25-escaping)
26. [Unicode and International Text](#26-unicode-and-international-text)
27. [Newlines and Multiline Text](#27-newlines-and-multiline-text)
28. [Regex Matching Strategies](#28-regex-matching-strategies)
29. [Regex in JavaScript](#29-regex-in-javascript)
30. [Regex in Python](#30-regex-in-python)
31. [Regex in Java](#31-regex-in-java)
32. [Regex in PHP](#32-regex-in-php)
33. [Regex in .NET / C#](#33-regex-in-net--c)
34. [Regex in SQL and Databases](#34-regex-in-sql-and-databases)
35. [Real-World Validation Examples](#35-real-world-validation-examples)
36. [Text Extraction Examples](#36-text-extraction-examples)
37. [Search and Replace](#37-search-and-replace)
38. [Log Processing](#38-log-processing)
39. [Invoice and OCR Data Extraction](#39-invoice-and-ocr-data-extraction)
40. [File and Path Matching](#40-file-and-path-matching)
41. [HTML and Web Content](#41-html-and-web-content)
42. [Dates and Times](#42-dates-and-times)
43. [Numbers and Currency](#43-numbers-and-currency)
44. [Identifiers and Codes](#44-identifiers-and-codes)
45. [Password Rules](#45-password-rules)
46. [Email Addresses](#46-email-addresses)
47. [URLs](#47-urls)
48. [IP Addresses](#48-ip-addresses)
49. [Phone Numbers](#49-phone-numbers)
50. [CSV and Delimited Text](#50-csv-and-delimited-text)
51. [Common Regex Mistakes](#51-common-regex-mistakes)
52. [Performance and Catastrophic Backtracking](#52-performance-and-catastrophic-backtracking)
53. [Regex Security](#53-regex-security)
54. [When NOT to Use Regex](#54-when-not-to-use-regex)
55. [How to Design a Regex Step by Step](#55-how-to-design-a-regex-step-by-step)
56. [How to Debug Regex](#56-how-to-debug-regex)
57. [Engine Compatibility Differences](#57-engine-compatibility-differences)
58. [Useful Recipes](#58-useful-recipes)
59. [Practice Exercises](#59-practice-exercises)
60. [Interview Questions](#60-interview-questions)
61. [Regex Cheat Sheet](#61-regex-cheat-sheet)
62. [Recommended Learning Roadmap](#62-recommended-learning-roadmap)
63. [Final Principles](#63-final-principles)

---

# 1. What Is a Regular Expression?

A **Regular Expression**, usually called **Regex** or **Regexp**, is a compact language used to describe patterns in text.

Instead of searching for one exact string, Regex lets you describe a family of strings.

For example:

```regex
\d+
```

This means:

> Find one or more digits.

It can match:

```text
1
42
2026
999999
```

Regex is commonly used for:

- searching
- validation
- extracting data
- replacing text
- parsing logs
- cleaning data
- finding patterns in source code
- processing OCR output
- validating form inputs

---

# 2. Why Learn Regex?

Regex can replace dozens of lines of manual string-processing code.

Suppose you receive:

```text
Invoice No: INV-2026-4589
```

You want only:

```text
INV-2026-4589
```

A Regex could be:

```regex
INV-\d{4}-\d+
```

Regex becomes especially useful when the surrounding text varies.

Example:

```text
Invoice No: INV-2026-4589
Invoice Number : INV-2026-991
Inv No - INV-2026-12345
```

You can create a more flexible pattern:

```regex
(?i)inv(?:oice)?\s*(?:no|number)?\s*[:\-]?\s*(INV-\d{4}-\d+)
```

The exact syntax depends on the Regex engine, but the idea is the same.

---

# 3. Where Regex Is Used

Regex appears almost everywhere in software development.

## Programming Languages

- JavaScript
- Python
- Java
- PHP
- C#
- Go
- Rust
- Ruby
- Perl
- Kotlin
- Swift

## Editors and IDEs

- VS Code
- IntelliJ IDEA
- Visual Studio
- Notepad++
- Sublime Text
- Vim
- NeoVim

## Command-Line Tools

- `grep`
- `sed`
- `awk`
- `ripgrep`
- PowerShell

## Databases

Some databases support Regex operations directly.

Examples include:

- MySQL
- PostgreSQL
- Oracle
- MongoDB

## Common Real-World Uses

- email validation
- invoice field extraction
- log analysis
- replacing code patterns
- searching large projects
- detecting identifiers
- cleaning user input
- data migration
- URL routing
- input validation
- syntax highlighting

---

# 4. How Regex Engines Work

A **Regex engine** is the software component that interprets a Regex pattern.

Different languages use different engines.

That means the same pattern may behave differently across languages.

For example:

```regex
(?<=Invoice:\s)\w+
```

This uses **lookbehind**.

Modern JavaScript supports lookbehind, but some older JavaScript environments did not.

Another example:

```regex
(?P<name>\w+)
```

is a Python-style named group.

JavaScript uses:

```regex
(?<name>\w+)
```

So always know which Regex engine you are targeting.

---

# 5. Your First Regex

Input:

```text
My order number is 12345.
```

Regex:

```regex
12345
```

Result:

```text
12345
```

This is a literal match.

Now:

```regex
\d+
```

Result:

```text
12345
```

This is pattern matching.

The Regex does not know the exact number in advance. It knows the rule:

> one or more digits.

---

# 6. Literal Characters

Normal characters usually match themselves.

Regex:

```regex
cat
```

Matches:

```text
cat
```

It can also match the `cat` part of:

```text
catalog
wildcat
catfish
```

If you need the complete word `cat`, use boundaries:

```regex
\bcat\b
```

---

# 7. Metacharacters

Some Regex characters have special meanings.

Important metacharacters include:

```text
. ^ $ * + ? { } [ ] \ | ( )
```

For example:

```regex
.
```

does not usually mean a literal period.

It means:

> Match almost any character.

To match an actual period:

```regex
\.
```

Example:

```regex
example\.com
```

matches:

```text
example.com
```

---

# 8. Character Classes

Character classes match one character from a set.

Syntax:

```regex
[abc]
```

Matches:

```text
a
b
c
```

but not:

```text
d
```

## Ranges

```regex
[a-z]
```

matches lowercase English letters.

```regex
[A-Z]
```

matches uppercase English letters.

```regex
[0-9]
```

matches digits.

Combined:

```regex
[a-zA-Z0-9]
```

matches letters or digits.

Example:

```regex
[A-Z][a-z]+
```

Matches:

```text
Shoeb
Mumbai
Invoice
```

---

# 9. Negated Character Classes

Use `^` inside a character class to mean:

> Anything except these characters.

Example:

```regex
[^0-9]
```

matches any character that is not a digit.

Example:

```regex
[^,]+
```

means:

> Match one or more characters until a comma appears.

Input:

```text
Mumbai,India
```

Pattern:

```regex
[^,]+
```

matches:

```text
Mumbai
```

and possibly `India` when searching globally.

---

# 10. Shorthand Character Classes

Regex engines provide convenient shorthand classes.

## `\d`

Digit.

```regex
\d
```

Usually similar to:

```regex
[0-9]
```

but Unicode behavior can vary by engine.

---

## `\D`

Not a digit.

```regex
\D
```

---

## `\w`

Word character.

Often means:

```text
letters + digits + underscore
```

Common approximation:

```regex
[A-Za-z0-9_]
```

Unicode behavior varies.

---

## `\W`

Not a word character.

---

## `\s`

Whitespace.

Can include:

- space
- tab
- newline
- carriage return

---

## `\S`

Non-whitespace.

---

# 11. The Dot Metacharacter

Dot:

```regex
.
```

matches almost any single character.

Pattern:

```regex
c.t
```

Matches:

```text
cat
cot
cut
c9t
c-t
```

It usually does **not** match newline unless a DOTALL/single-line mode is enabled.

---

# 12. Anchors

Anchors match positions rather than characters.

## Start of String

```regex
^
```

Example:

```regex
^Hello
```

matches:

```text
Hello world
```

but not:

```text
Say Hello
```

---

## End of String

```regex
$
```

Pattern:

```regex
done$
```

matches:

```text
Task done
```

but not:

```text
done today
```

---

## Exact Validation

To validate an entire string:

```regex
^[A-Z]{3}\d{4}$
```

Matches:

```text
ABC1234
```

Does not match:

```text
ABC1234XYZ
```

This is extremely important.

Without anchors:

```regex
[A-Z]{3}\d{4}
```

could match a valid-looking substring inside invalid input.

---

# 13. Quantifiers

Quantifiers control how many times something may repeat.

## `*`

Zero or more.

```regex
a*
```

Matches:

```text
""
a
aa
aaa
```

---

## `+`

One or more.

```regex
a+
```

Matches:

```text
a
aa
aaa
```

but not an empty string.

---

## `?`

Zero or one.

```regex
colou?r
```

Matches:

```text
color
colour
```

The `u` is optional.

---

## `{n}`

Exactly `n` times.

```regex
\d{4}
```

Matches exactly four digits.

Example:

```text
2026
```

---

## `{n,}`

At least `n`.

```regex
\d{3,}
```

Matches:

```text
123
1234
123456
```

---

## `{n,m}`

Between `n` and `m`.

```regex
\d{2,4}
```

Matches:

```text
12
123
1234
```

---

# 14. Greedy vs Lazy Quantifiers

This is one of the most important Regex concepts.

Input:

```html
<b>Hello</b><b>World</b>
```

Pattern:

```regex
<.*>
```

`*` is greedy.

It tries to consume as much text as possible.

Result:

```html
<b>Hello</b><b>World</b>
```

If you want the smallest possible match:

```regex
<.*?>
```

`*?` is lazy.

Possible matches:

```html
<b>
</b>
<b>
</b>
```

Common lazy quantifiers:

```regex
*?
+?
??
{n,m}?
```

---

# 15. Grouping

Parentheses group expressions.

Example:

```regex
(ab)+
```

Matches:

```text
ab
abab
ababab
```

Without grouping:

```regex
ab+
```

means:

```text
a followed by one or more b characters
```

So it matches:

```text
ab
abb
abbb
```

---

# 16. Capturing Groups

Parentheses usually create a capturing group.

Pattern:

```regex
(\d{4})-(\d{2})-(\d{2})
```

Input:

```text
2026-08-12
```

Groups:

```text
Group 1 = 2026
Group 2 = 08
Group 3 = 12
```

This is useful for extraction.

You can treat the groups as:

```text
Year
Month
Day
```

---

# 17. Non-Capturing Groups

Sometimes you need grouping without storing the matched value.

Use:

```regex
(?:...)
```

Example:

```regex
(?:Mr|Mrs|Ms)\.?\s+[A-Z][a-z]+
```

Matches:

```text
Mr Shoeb
Mrs Khan
Ms. Patel
```

The title group is used for pattern logic but not captured.

---

# 18. Named Capturing Groups

Named groups improve readability.

JavaScript / many modern engines:

```regex
(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})
```

Input:

```text
2026-08-12
```

Result conceptually:

```json
{
  "year": "2026",
  "month": "08",
  "day": "12"
}
```

Python commonly uses:

```regex
(?P<year>\d{4})
```

Always check your engine syntax.

---

# 19. Alternation

Pipe means OR.

```regex
cat|dog
```

Matches either:

```text
cat
dog
```

Grouping is often important.

```regex
^(cat|dog)$
```

means the entire input must be either `cat` or `dog`.

Better when no capture is needed:

```regex
^(?:cat|dog)$
```

---

# 20. Backreferences

Backreferences match text that was previously captured.

Pattern:

```regex
(\w+)\s+\1
```

Input:

```text
the the
hello hello
test test
```

Matches duplicated words.

Explanation:

```regex
(\w+)
```

captures a word.

Then:

```regex
\1
```

requires the same captured text again.

Useful for finding mistakes such as:

```text
is is
the the
and and
```

---

# 21. Word Boundaries

`\b` matches a boundary between word and non-word characters.

Pattern:

```regex
\bcat\b
```

Matches:

```text
cat
the cat is here
```

Does not match:

```text
catalog
wildcat
catfish
```

`\B` means:

> not a word boundary.

Example:

```regex
\Bcat
```

could match `cat` inside:

```text
wildcat
```

---

# 22. Lookahead

Lookahead checks what comes next without consuming it.

## Positive Lookahead

```regex
foo(?=bar)
```

Matches `foo` only when followed by `bar`.

Input:

```text
foobar
foo123
```

Only `foo` in `foobar` matches.

---

## Negative Lookahead

```regex
foo(?!bar)
```

Matches `foo` only when it is **not** followed by `bar`.

Input:

```text
foobar
foo123
```

Matches `foo` from:

```text
foo123
```

---

## Password Example

At least one uppercase letter:

```regex
(?=.*[A-Z])
```

At least one lowercase letter:

```regex
(?=.*[a-z])
```

At least one digit:

```regex
(?=.*\d)
```

At least one special character:

```regex
(?=.*[^A-Za-z0-9])
```

Combined:

```regex
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$
```

Important:

Regex can enforce structural password rules, but security systems should prefer long passwords/passphrases and server-side password policies rather than excessively complex Regex rules.

---

# 23. Lookbehind

Lookbehind checks what appears before the current match.

## Positive Lookbehind

```regex
(?<=₹)\d+
```

Input:

```text
₹500
```

Matches:

```text
500
```

without including the rupee sign.

---

## Negative Lookbehind

```regex
(?<!₹)\d+
```

Conceptually means:

> Match digits not immediately preceded by ₹.

Lookbehind support and restrictions vary across Regex engines.

---

# 24. Flags / Modifiers

Flags change Regex behavior.

Common flags:

## Case Insensitive

Usually:

```text
i
```

Pattern:

```regex
invoice
```

with `i` can match:

```text
invoice
Invoice
INVOICE
InVoIcE
```

---

## Global

JavaScript:

```text
g
```

Find all matches instead of stopping after the first one.

```javascript
/\d+/g
```

---

## Multiline

Usually:

```text
m
```

Changes how `^` and `$` treat individual lines.

Input:

```text
apple
banana
orange
```

Pattern:

```regex
^banana$
```

with multiline mode can match the middle line.

---

## DotAll / Single-Line

Usually:

```text
s
```

Allows:

```regex
.
```

to match newline characters.

---

## Unicode

JavaScript commonly uses:

```text
u
```

for Unicode-aware behavior.

---

# 25. Escaping

Regex has two possible escaping layers:

1. Regex escaping
2. Programming-language string escaping

This causes many beginner errors.

Suppose the Regex is:

```regex
\d+
```

In Python raw strings:

```python
r"\d+"
```

In JavaScript Regex literal:

```javascript
/\d+/
```

In Java string form:

```java
"\\d+"
```

Why?

Because Java sees `\` as an escape character before the Regex engine receives the pattern.

---

## Escaping Literal Special Characters

To match:

```text
.
```

use:

```regex
\.
```

To match:

```text
+
```

use:

```regex
\+
```

To match:

```text
(
```

use:

```regex
\(
```

---

# 26. Unicode and International Text

Patterns like:

```regex
[A-Za-z]
```

match English ASCII letters only.

They do not automatically cover:

- Hindi
- Marathi
- Arabic
- Chinese
- Japanese
- accented Latin letters

Some modern Regex engines support Unicode property escapes.

Example:

```regex
\p{L}+
```

means:

> One or more Unicode letters.

Potential matches:

```text
Shoeb
José
भारत
日本
```

Another useful property:

```regex
\p{N}
```

Unicode numbers.

JavaScript requires Unicode mode for property escapes:

```javascript
/\p{L}+/gu
```

Compatibility varies by engine.

---

# 27. Newlines and Multiline Text

Different systems use different line endings.

Linux/macOS commonly:

```text
\n
```

Windows commonly:

```text
\r\n
```

A portable line break pattern can often be:

```regex
\r?\n
```

Meaning:

```text
optional carriage return + newline
```

---

# 28. Regex Matching Strategies

Regex operations normally fall into a few categories.

## Search

Find whether a pattern exists anywhere.

Example:

```regex
invoice
```

---

## Full Validation

Validate the entire string.

Example:

```regex
^[A-Z]{3}-\d{4}$
```

---

## Extraction

Capture useful subparts.

```regex
Invoice\s*No\s*:\s*(\S+)
```

---

## Find All

Return every occurrence.

```regex
\d+
```

Input:

```text
10 apples, 20 bananas, 30 oranges
```

Results:

```text
10
20
30
```

---

## Replacement

Find:

```regex
\s+
```

Replace with:

```text
single space
```

Useful for normalizing OCR text.

---

# 29. Regex in JavaScript

Create a Regex literal:

```javascript
const regex = /\d+/;
```

Or dynamically:

```javascript
const regex = new RegExp("\\d+");
```

## `.test()`

```javascript
const regex = /^\d+$/;

console.log(regex.test("12345")); // true
console.log(regex.test("12A45")); // false
```

## `.match()`

```javascript
const text = "Invoice 123 Total 500";

console.log(text.match(/\d+/g));
```

Output:

```javascript
["123", "500"]
```

## Named Groups

```javascript
const text = "2026-08-12";

const match = text.match(
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
);

console.log(match.groups.year);
```

---

# 30. Regex in Python

Python uses the `re` module.

```python
import re
```

## Search

```python
text = "Invoice number: 12345"

match = re.search(r"\d+", text)

if match:
    print(match.group())
```

## Find All

```python
numbers = re.findall(r"\d+", "10 apples 20 bananas")
print(numbers)
```

Output:

```python
['10', '20']
```

## Named Groups

```python
pattern = r"(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})"

match = re.search(pattern, "2026-08-12")

print(match.group("year"))
```

## Replacement

```python
clean = re.sub(r"\s+", " ", "Hello     world")
print(clean)
```

Output:

```text
Hello world
```

---

# 31. Regex in Java

Java uses:

```java
java.util.regex.Pattern
java.util.regex.Matcher
```

Example:

```java
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("Invoice 12345");

if (matcher.find()) {
    System.out.println(matcher.group());
}
```

Remember:

```regex
\d+
```

becomes:

```java
"\\d+"
```

inside a Java string.

---

# 32. Regex in PHP

PHP commonly uses PCRE through functions such as:

```php
preg_match()
preg_match_all()
preg_replace()
```

Example:

```php
$text = "Invoice 12345";

if (preg_match('/\d+/', $text, $matches)) {
    echo $matches[0];
}
```

Find all:

```php
preg_match_all('/\d+/', '10 apples 20 bananas', $matches);

print_r($matches[0]);
```

Replacement:

```php
$clean = preg_replace('/\s+/', ' ', $text);
```

---

# 33. Regex in .NET / C#

C# uses:

```csharp
System.Text.RegularExpressions.Regex
```

Example:

```csharp
using System.Text.RegularExpressions;

string text = "Invoice 12345";

Match match = Regex.Match(text, @"\d+");

if (match.Success)
{
    Console.WriteLine(match.Value);
}
```

C# verbatim strings are convenient:

```csharp
@"\d+"
```

instead of:

```csharp
"\\d+"
```

---

# 34. Regex in SQL and Databases

Regex syntax varies greatly across databases.

## MySQL

Examples may use:

```sql
REGEXP
```

Example:

```sql
SELECT *
FROM customers
WHERE email REGEXP '^[A-Za-z0-9._%+-]+@';
```

Do not assume identical behavior between:

- MySQL
- MariaDB
- PostgreSQL
- Oracle
- SQL Server

SQL Server historically does not provide the same native general-purpose Regex syntax as engines such as PCRE or PostgreSQL; applications often use `LIKE`, CLR integrations, or application-side Regex depending on the requirement.

---

# 35. Real-World Validation Examples

## Only Digits

```regex
^\d+$
```

Examples:

```text
123      valid
00123    valid
12A3     invalid
```

---

## Only English Letters

```regex
^[A-Za-z]+$
```

---

## Alphanumeric

```regex
^[A-Za-z0-9]+$
```

---

## Username

Example rule:

- 3 to 20 characters
- letters, digits, underscore

```regex
^[A-Za-z0-9_]{3,20}$
```

---

## Employee ID

Suppose IDs look like:

```text
SG123456
```

Pattern:

```regex
^SG\d{6}$
```

---

## Purchase Order

Example:

```text
PO-2026-123456
```

Pattern:

```regex
^PO-\d{4}-\d{6}$
```

---

# 36. Text Extraction Examples

## Extract Invoice Number

Input:

```text
Invoice No: INV-45892
```

Pattern:

```regex
Invoice\s*No\s*:\s*(\S+)
```

Captured:

```text
INV-45892
```

---

## Flexible Invoice Label

Possible text:

```text
Invoice No: ABC123
Invoice Number : ABC123
Inv No - ABC123
INV NO. ABC123
```

Possible Regex:

```regex
(?i)\binv(?:oice)?\s*(?:no|number)?\.?\s*[:\-]?\s*([A-Z0-9\/_-]+)
```

Note:

`(?i)` is not supported in identical form everywhere. Some environments prefer an external case-insensitive flag.

---

## Extract GSTIN-Like Value

Indian GSTIN commonly has a 15-character structure.

A structural pattern could be:

```regex
\b\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]\b
```

Example:

```text
27ABCDE1234F1Z5
```

Regex can test structure, but authoritative validation should also apply business rules and checksum/official validation when necessary.

---

# 37. Search and Replace

Regex becomes extremely powerful when used with replacement.

## Collapse Multiple Spaces

Find:

```regex
[ \t]+
```

Replace:

```text
(single space)
```

Input:

```text
Invoice      Number       123
```

Output:

```text
Invoice Number 123
```

---

## Remove Leading and Trailing Spaces

Find:

```regex
^\s+|\s+$
```

Replace with nothing.

Many languages already provide `trim()`, which is preferable for this simple case.

---

## Convert `YYYY-MM-DD` to `DD/MM/YYYY`

Find:

```regex
(\d{4})-(\d{2})-(\d{2})
```

Replacement syntax varies.

Conceptually:

```text
$3/$2/$1
```

Result:

```text
2026-08-12
```

becomes:

```text
12/08/2026
```

---

# 38. Log Processing

Example log:

```text
2026-08-12 18:30:25 ERROR User 12345 failed login from 192.168.1.20
```

Pattern:

```regex
^(\d{4}-\d{2}-\d{2})\s+
(\d{2}:\d{2}:\d{2})\s+
(ERROR|WARN|INFO)\s+
(.+)$
```

Written on one line:

```regex
^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})\s+(ERROR|WARN|INFO)\s+(.+)$
```

Groups:

```text
1 = 2026-08-12
2 = 18:30:25
3 = ERROR
4 = User 12345 failed login from 192.168.1.20
```

---

## Extract IPv4-Looking Values from Logs

Simple candidate extraction:

```regex
\b(?:\d{1,3}\.){3}\d{1,3}\b
```

This extracts candidates such as:

```text
192.168.1.20
```

It does **not** guarantee each octet is 0–255.

Often this is acceptable for extraction, followed by semantic validation in code.

---

# 39. Invoice and OCR Data Extraction

Regex is particularly useful after OCR because labels may be noisy.

Suppose OCR returns:

```text
Invoice   No . :   INV/2026/00125
Invoice Date : 12-08-2026
Total Amount: ₹ 15,420.50
Vendor GSTIN: 27ABCDE1234F1Z5
```

## Normalize Spaces First

```regex
[ \t]+
```

Replace with one space.

---

## Invoice Number

```regex
(?i)\binvoice\s*(?:no|number)?\.?\s*[:\-]?\s*([A-Z0-9\/_-]+)
```

---

## Invoice Date

```regex
(?i)\binvoice\s*date\s*[:\-]?\s*(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})
```

---

## Total Amount

```regex
(?i)\b(?:grand\s*)?total(?:\s*amount)?\s*[:\-]?\s*(?:₹|INR|Rs\.?)?\s*([\d,]+(?:\.\d{1,2})?)
```

---

## GSTIN Candidate

```regex
\b\d{2}[A-Z]{5}\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]\b
```

---

## OCR-Tolerant Matching

OCR may confuse:

```text
O ↔ 0
I ↔ 1
S ↔ 5
B ↔ 8
```

Do not blindly make every Regex extremely loose.

A better pipeline is often:

```text
OCR
 ↓
Text normalization
 ↓
Candidate extraction
 ↓
Field scoring / aliases
 ↓
Semantic validation
 ↓
Business-rule validation
```

Regex is excellent at **candidate extraction**, but should not be the entire document-intelligence system.

---

# 40. File and Path Matching

## `.pdf` Files

```regex
\.pdf$
```

with case-insensitive mode can match:

```text
invoice.pdf
REPORT.PDF
```

---

## Image Files

```regex
\.(?:jpg|jpeg|png|webp)$
```

with case-insensitive mode.

---

## Windows Drive Path — Simple Form

```regex
^[A-Za-z]:\\
```

Matches beginnings such as:

```text
C:\
D:\
```

---

## Filename Without Extension

Input:

```text
invoice_123.pdf
```

Pattern:

```regex
^(.+)\.[^.]+$
```

Group 1:

```text
invoice_123
```

For robust filesystem handling, use your language's path library rather than Regex whenever possible.

---

# 41. HTML and Web Content

A famous rule:

> Do not use Regex as your primary parser for arbitrary HTML.

Why?

HTML can contain:

- nesting
- attributes
- comments
- scripts
- malformed markup
- encoded content

Use an HTML parser.

Regex can still be useful for limited preprocessing.

Example: extract a very controlled token:

```regex
data-id="([^"]+)"
```

But for actual DOM parsing use libraries such as:

- browser DOM APIs
- BeautifulSoup
- Cheerio
- DOMDocument
- AngleSharp

depending on your language.

---

# 42. Dates and Times

## `YYYY-MM-DD`

Structural Regex:

```regex
^\d{4}-\d{2}-\d{2}$
```

This accepts:

```text
2026-99-99
```

So Regex alone is insufficient for date validity.

Better approach:

1. Regex validates shape.
2. Date library validates actual calendar date.

---

## `DD-MM-YYYY`

```regex
^\d{2}-\d{2}-\d{4}$
```

---

## Flexible Separator

```regex
^\d{1,2}[\/.-]\d{1,2}[\/.-]\d{4}$
```

---

## 24-Hour Time

```regex
^(?:[01]\d|2[0-3]):[0-5]\d$
```

Valid:

```text
00:00
09:30
18:45
23:59
```

Invalid:

```text
25:00
12:99
```

---

# 43. Numbers and Currency

## Integer

```regex
^-?\d+$
```

Matches:

```text
10
-10
0
```

---

## Decimal

```regex
^-?\d+(?:\.\d+)?$
```

Matches:

```text
10
10.5
-20.75
```

---

## Decimal with Exactly Two Places

```regex
^-?\d+\.\d{2}$
```

---

## Optional Thousand Separators

A simplified form:

```regex
^-?\d{1,3}(?:,\d{3})*(?:\.\d+)?$
```

Matches:

```text
1,000
10,000.50
1,234,567.89
```

But does not match plain:

```text
12345
```

If you want both grouped and ungrouped numbers:

```regex
^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$
```

---

## Indian Grouping

Example:

```text
12,34,567.89
```

One possible structural pattern:

```regex
^\d{1,2}(?:,\d{2})*,\d{3}(?:\.\d{1,2})?$
```

Real financial parsing should usually normalize separators and then use numeric parsing rather than relying only on Regex.

---

# 44. Identifiers and Codes

## UUID

Typical UUID structure:

```regex
^[0-9a-fA-F]{8}-
[0-9a-fA-F]{4}-
[0-9a-fA-F]{4}-
[0-9a-fA-F]{4}-
[0-9a-fA-F]{12}$
```

One line:

```regex
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
```

---

## Hexadecimal

```regex
^[0-9A-Fa-f]+$
```

---

## MAC Address

```regex
^(?:[0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$
```

Example:

```text
00:1A:2B:3C:4D:5E
```

---

# 45. Password Rules

Example business rule:

- minimum 8 characters
- uppercase
- lowercase
- digit
- special character

Pattern:

```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$
```

However:

- do not store passwords in plain text
- do not rely on Regex for password security
- hash passwords using modern password hashing algorithms
- allow long passphrases
- consider breached-password checking

Regex only checks format.

---

# 46. Email Addresses

A practical basic pattern:

```regex
^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$
```

Matches many common addresses.

But email syntax defined by standards is much more complicated.

For production systems:

- use a reasonable practical Regex
- normalize where appropriate
- send a verification email
- treat successful verification as the real proof that the address is usable

Do not attempt to encode the entire email specification into one monstrous Regex unless you truly need it.

---

# 47. URLs

A simplified URL structure:

```regex
^https?://[^\s]+$
```

Matches:

```text
http://example.com
https://example.com/path
```

For serious URL validation, use a URL parser from the programming language.

Example in JavaScript:

```javascript
new URL(value)
```

Regex is better for quick extraction than complete URL semantics.

---

# 48. IP Addresses

## Candidate IPv4

```regex
\b(?:\d{1,3}\.){3}\d{1,3}\b
```

This can match invalid values such as:

```text
999.999.999.999
```

A stricter octet:

```regex
(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)
```

Strict IPv4:

```regex
^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$
```

For application logic, dedicated IP parsing libraries are often better.

---

# 49. Phone Numbers

Phone formats vary by country.

A simple Indian mobile-number structure:

```regex
^[6-9]\d{9}$
```

Possible matches:

```text
9876543210
8123456789
```

With optional `+91`:

```regex
^(?:\+91[- ]?)?[6-9]\d{9}$
```

Examples:

```text
9876543210
+919876543210
+91 9876543210
+91-9876543210
```

Real production systems should normalize numbers and use a phone-number library where international support matters.

---

# 50. CSV and Delimited Text

Simple CSV fields are easy:

```text
Shoeb,Mumbai,Developer
```

But real CSV supports quoted commas:

```text
"Shoeb","Mumbai, Maharashtra","Developer"
```

Regex becomes fragile quickly.

Use a CSV parser for real CSV files.

Regex may still help with lightweight pre-validation or cleanup.

---

# 51. Common Regex Mistakes

## Mistake 1 — Forgetting Anchors

Bad validation:

```regex
\d{4}
```

Input:

```text
ABC1234XYZ
```

This still matches.

For entire-string validation:

```regex
^\d{4}$
```

---

## Mistake 2 — Dot Means Anything

Bad:

```regex
example.com
```

This could match:

```text
exampleXcom
```

Correct:

```regex
example\.com
```

---

## Mistake 3 — Greedy Matching

Input:

```text
"one" and "two"
```

Pattern:

```regex
".*"
```

Likely matches:

```text
"one" and "two"
```

Better:

```regex
".*?"
```

or, even better when quote rules are simple:

```regex
"[^"]*"
```

---

## Mistake 4 — Overusing `.*`

Avoid patterns like:

```regex
.*Invoice.*Amount.*
```

when a more precise pattern is possible.

Broad wildcards:

- match unexpected text
- create performance problems
- make debugging harder

---

## Mistake 5 — Parsing Everything with Regex

Do not use Regex to replace:

- JSON parser
- XML parser
- HTML parser
- SQL parser
- date parser
- URL parser
- CSV parser

Regex is a pattern language, not a universal structured-data parser.

---

## Mistake 6 — Ignoring Language Escaping

Regex:

```regex
\d+
```

Java source:

```java
"\\d+"
```

JavaScript literal:

```javascript
/\d+/
```

Python raw string:

```python
r"\d+"
```

Always distinguish Regex syntax from programming-language string syntax.

---

# 52. Performance and Catastrophic Backtracking

Some Regex patterns can become extremely slow.

Dangerous style:

```regex
^(a+)+$
```

Input:

```text
aaaaaaaaaaaaaaaaaaaaaaaaaaaaX
```

A backtracking Regex engine may try a huge number of combinations before concluding the match fails.

This is called **catastrophic backtracking**.

---

## Why It Happens

Nested variable quantifiers are risky.

Examples to review carefully:

```regex
(a+)+
(.*)+
(\w*)*
(.+)+
```

especially when followed by constraints that can fail late.

---

## Safer Design Principles

Prefer:

```regex
[^,]+
```

instead of:

```regex
.*?
```

when you know the delimiter.

Prefer precise character classes.

Avoid unnecessary nested quantifiers.

Anchor patterns when possible.

Restrict length.

Example:

```regex
^[A-Za-z0-9_]{1,30}$
```

is far safer and clearer than a broad unrestricted pattern.

---

## Atomic Groups

Some Regex engines support atomic groups:

```regex
(?>...)
```

These can prevent backtracking inside the group.

Not every engine supports them.

---

## Possessive Quantifiers

Some engines support:

```regex
*+
++
?+
{n,m}+
```

Example:

```regex
\d++
```

This prevents the engine from giving back characters during backtracking.

Again, support varies by engine.

---

# 53. Regex Security

Regex can create security risks.

## ReDoS

**Regular Expression Denial of Service** happens when malicious input triggers extremely expensive Regex processing.

Dangerous combinations often include:

- nested quantifiers
- overlapping alternatives
- unbounded wildcards
- attacker-controlled long input

Example risky style:

```regex
^(a+)+$
```

---

## Protection

Use:

- input length limits
- safer patterns
- Regex timeouts where supported
- non-backtracking Regex engines when appropriate
- tested libraries
- fuzz tests for untrusted input

.NET can support Regex timeouts.

Other platforms may provide different protection mechanisms.

---

# 54. When NOT to Use Regex

Regex is not always the best solution.

Use a proper parser for:

## JSON

Use:

```javascript
JSON.parse()
```

not Regex.

---

## HTML

Use a DOM / HTML parser.

---

## XML

Use an XML parser.

---

## URLs

Use a URL parser.

---

## Dates

Use a date library after basic structural checks.

---

## Programming Languages

Use parsers or AST tools for complex code transformation.

---

## Nested Structures

Regex is usually the wrong tool for deeply nested structures unless your specific engine provides advanced recursive constructs and the problem is carefully constrained.

---

# 55. How to Design a Regex Step by Step

Suppose you need to match:

```text
INV-2026-00125
```

## Step 1 — Write the rule in plain English

```text
Starts with INV-
then exactly 4 digits
then -
then exactly 5 digits
```

## Step 2 — Convert each part

`INV-`

```regex
INV-
```

4 digits:

```regex
\d{4}
```

Hyphen:

```regex
-
```

5 digits:

```regex
\d{5}
```

Combined:

```regex
INV-\d{4}-\d{5}
```

## Step 3 — Decide whether the entire string must match

Yes:

```regex
^INV-\d{4}-\d{5}$
```

## Step 4 — Test valid examples

```text
INV-2026-00125
INV-2025-99999
```

## Step 5 — Test invalid examples

```text
INV2026-00125
INV-26-00125
INV-2026-125
ABC-2026-00125
```

## Step 6 — Test edge cases

```text
 INV-2026-00125
INV-2026-00125 
INV-2026-00125XYZ
```

Then decide whether trimming should happen before Regex validation.

---

# 56. How to Debug Regex

When a Regex fails:

## 1. Reduce the Pattern

Start with a smaller part.

Instead of:

```regex
^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%]{8,20}$
```

test:

```regex
[A-Za-z\d!@#$%]{8,20}
```

Then add conditions gradually.

---

## 2. Test One Example at a Time

Use:

```text
expected valid
expected invalid
boundary case
empty string
very long string
```

---

## 3. Inspect Capturing Groups

Verify which group actually contains the value.

---

## 4. Check Flags

Maybe you forgot:

```text
i
g
m
s
u
```

depending on the language.

---

## 5. Check Escaping

A pattern may be correct as Regex but wrong inside a string literal.

---

## 6. Check Whitespace

Text from:

- OCR
- PDFs
- copied webpages
- Word
- email

may contain unusual whitespace.

Try inspecting character codes or normalizing whitespace.

---

## 7. Use a Regex Tester

Useful tools include interactive Regex testers where you can see:

- matches
- groups
- explanations
- substitutions

Always select the correct engine/dialect.

---

# 57. Engine Compatibility Differences

Do not assume all Regex flavors support the same features.

| Feature | JavaScript | Python | Java | PHP/PCRE | .NET |
|---|---:|---:|---:|---:|---:|
| Capturing groups | Yes | Yes | Yes | Yes | Yes |
| Named groups | Yes | Yes | Yes | Yes | Yes |
| Lookahead | Yes | Yes | Yes | Yes | Yes |
| Lookbehind | Modern engines | Yes | Yes | Yes | Yes |
| Atomic groups | Engine/version dependent | Modern Python supports atomic groups | Yes | Yes | Yes |
| Possessive quantifiers | Modern JS support varies by runtime/features; verify | Modern Python supports | Yes | Yes | Yes |
| Unicode properties | Yes with appropriate mode | Via built-ins / engine features | Yes | Yes | Yes |
| Inline flags | Limited/different | Yes | Yes | Yes | Yes |

**Important:** Exact support can change by runtime version. Always check the documentation for the engine you deploy on.

---

# 58. Useful Recipes

## Remove Duplicate Spaces

```regex
[ \t]+
```

Replace with:

```text
single space
```

---

## Remove Empty Lines

One possible pattern:

```regex
^\s*\r?\n
```

with multiline mode.

---

## Find Email-Looking Strings

```regex
[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}
```

---

## Find URLs

Simple candidate extractor:

```regex
https?://[^\s"'<>]+
```

---

## Find Hashtags

```regex
#[A-Za-z0-9_]+
```

---

## Find Mentions

```regex
@[A-Za-z0-9_]+
```

---

## Find Hex Colors

```regex
#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b
```

Matches:

```text
#FFF
#ffffff
#1A2B3C
```

---

## Find Repeated Words

```regex
\b(\w+)\s+\1\b
```

usually with case-insensitive mode if desired.

---

## Extract Key-Value Pairs

Input:

```text
Name: Shoeb
City: Mumbai
Role: Developer
```

Pattern:

```regex
^([^:\r\n]+):\s*(.+)$
```

with multiline mode.

Groups:

```text
1 = key
2 = value
```

---

## Split by Comma with Optional Spaces

```regex
\s*,\s*
```

Input:

```text
apple, banana ,orange
```

Conceptual result:

```text
apple
banana
orange
```

---

## Strongly Structured Product Code

Rule:

```text
2 uppercase letters
-
4 digits
-
3 uppercase letters
```

Regex:

```regex
^[A-Z]{2}-\d{4}-[A-Z]{3}$
```

Example:

```text
AB-2026-XYZ
```

---

# 59. Practice Exercises

Try writing Regex for these before checking the solutions.

## Exercise 1

Match exactly six digits.

Solution:

```regex
^\d{6}$
```

---

## Exercise 2

Match `cat` or `dog`.

Solution:

```regex
^(?:cat|dog)$
```

---

## Exercise 3

Match a `.pdf` filename.

Solution:

```regex
^.+\.pdf$
```

Use case-insensitive mode if needed.

---

## Exercise 4

Extract the amount:

```text
Total: ₹15,250.75
```

Possible solution:

```regex
₹\s*([\d,]+(?:\.\d{1,2})?)
```

---

## Exercise 5

Match codes such as:

```text
EMP-12345
```

Solution:

```regex
^EMP-\d{5}$
```

---

## Exercise 6

Find duplicate adjacent words.

Solution:

```regex
\b(\w+)\s+\1\b
```

---

## Exercise 7

Match 24-hour time.

Solution:

```regex
^(?:[01]\d|2[0-3]):[0-5]\d$
```

---

## Exercise 8

Extract text inside square brackets.

Input:

```text
[ERROR] Something failed
```

Solution:

```regex
\[([^\]]+)\]
```

Captured:

```text
ERROR
```

---

## Exercise 9

Match a simple semantic version.

Examples:

```text
1.0.0
2.15.3
10.2.99
```

Solution:

```regex
^\d+\.\d+\.\d+$
```

---

## Exercise 10

Match invoice IDs:

```text
INV/2026/000001
```

Solution:

```regex
^INV/\d{4}/\d{6}$
```

---

# 60. Interview Questions

## Q1. What is Regex?

A language for describing and matching text patterns.

---

## Q2. Difference between `*` and `+`?

```regex
*
```

means zero or more.

```regex
+
```

means one or more.

---

## Q3. Difference between `.` and `\.`?

```regex
.
```

matches almost any character.

```regex
\.
```

matches a literal period.

---

## Q4. What does `^` mean?

Outside a character class:

```regex
^
```

usually represents the start of the string or line depending on mode.

Inside:

```regex
[^...]
```

it negates the character class.

---

## Q5. What is a capturing group?

A group:

```regex
(...)
```

that stores matched text for later retrieval or backreference.

---

## Q6. What is a non-capturing group?

```regex
(?:...)
```

Groups expressions without storing the group result.

---

## Q7. What is greedy matching?

A greedy quantifier consumes as much text as possible while still allowing the overall Regex to succeed.

---

## Q8. What is lazy matching?

A lazy quantifier consumes as little as possible.

Example:

```regex
.*?
```

---

## Q9. What is lookahead?

A zero-width assertion that checks upcoming text without consuming it.

---

## Q10. What is catastrophic backtracking?

A performance problem where a backtracking Regex engine explores enormous numbers of possible matching paths.

---

## Q11. Why should Regex not parse HTML?

HTML has nested and structural rules that are better handled by a parser.

---

## Q12. Why use anchors in validation?

Without anchors, the Regex may match only a valid substring inside otherwise invalid input.

---

# 61. Regex Cheat Sheet

## Basic Characters

| Pattern | Meaning |
|---|---|
| `a` | literal `a` |
| `.` | almost any character |
| `\.` | literal period |
| `\\` | literal backslash, depending on engine/string escaping |

---

## Character Classes

| Pattern | Meaning |
|---|---|
| `[abc]` | `a`, `b`, or `c` |
| `[^abc]` | anything except `a`, `b`, `c` |
| `[a-z]` | lowercase English letter |
| `[A-Z]` | uppercase English letter |
| `[0-9]` | digit |
| `\d` | digit |
| `\D` | non-digit |
| `\w` | word character |
| `\W` | non-word character |
| `\s` | whitespace |
| `\S` | non-whitespace |

---

## Quantifiers

| Pattern | Meaning |
|---|---|
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 |
| `{3}` | exactly 3 |
| `{3,}` | at least 3 |
| `{3,5}` | between 3 and 5 |
| `*?` | lazy zero or more |
| `+?` | lazy one or more |

---

## Anchors

| Pattern | Meaning |
|---|---|
| `^` | start |
| `$` | end |
| `\b` | word boundary |
| `\B` | non-word boundary |

---

## Groups

| Pattern | Meaning |
|---|---|
| `(abc)` | capturing group |
| `(?:abc)` | non-capturing group |
| `(?<name>abc)` | named group in many modern engines |
| `a|b` | alternation / OR |
| `\1` | first captured group backreference |

---

## Lookarounds

| Pattern | Meaning |
|---|---|
| `(?=abc)` | positive lookahead |
| `(?!abc)` | negative lookahead |
| `(?<=abc)` | positive lookbehind |
| `(?<!abc)` | negative lookbehind |

---

## Common Flags

| Flag | Meaning |
|---|---|
| `i` | case insensitive |
| `g` | global / all matches in JavaScript |
| `m` | multiline |
| `s` | dot matches newline |
| `u` | Unicode-aware mode in JavaScript |

---

# 62. Recommended Learning Roadmap

## Beginner

Master:

```text
literal characters
.
[]
[^]
\d
\w
\s
^
$
*
+
?
{}
```

Build simple patterns such as:

```regex
^\d{4}$
```

---

## Intermediate

Learn:

```text
groups
capturing groups
non-capturing groups
alternation
word boundaries
flags
search and replace
named groups
```

Practice with:

- employee codes
- invoice numbers
- log entries
- filenames
- dates
- amounts

---

## Advanced

Learn:

```text
lookahead
lookbehind
backreferences
Unicode
engine differences
atomic groups
possessive quantifiers
performance analysis
ReDoS
```

---

## Professional Level

Do not focus only on writing clever Regex.

Learn how to decide:

```text
Should this be Regex?
Should this be a parser?
Should this be validation code?
Should this be a data-normalization pipeline?
```

A professional developer chooses the correct tool.

---

# 63. Final Principles

Remember these rules.

## Rule 1

Write the requirement in plain English first.

---

## Rule 2

Use the simplest pattern that correctly solves the problem.

---

## Rule 3

Be specific.

Prefer:

```regex
[^"]+
```

over:

```regex
.*?
```

when you know the delimiter.

---

## Rule 4

Use anchors for whole-string validation.

```regex
^...$
```

---

## Rule 5

Separate structural validation from semantic validation.

Regex can confirm:

```text
2026-08-12
```

has a date-shaped structure.

A date library should confirm the date actually exists.

---

## Rule 6

Use Regex to extract candidates, then validate them in code.

Especially useful for:

- OCR
- invoices
- logs
- scraped text
- legacy data
- imported files

---

## Rule 7

Do not make one giant Regex if multiple small steps are easier to maintain.

This:

```text
normalize
extract
validate
transform
```

is often better than a single enormous expression.

---

## Rule 8

Test both valid and invalid data.

A Regex is not proven correct just because it matches one desired sample.

---

## Rule 9

Think about performance whenever input is untrusted or large.

Avoid catastrophic backtracking.

---

## Rule 10

Know your Regex engine.

JavaScript, Python, Java, PHP/PCRE, .NET, database Regex engines, and command-line tools are similar—but not identical.

---

# Bonus: A Practical Regex Development Template

Whenever you create a production Regex, document it like this:

```text
Name:
Purpose:
Engine:
Flags:
Pattern:
Valid Examples:
Invalid Examples:
Maximum Input Length:
Performance Considerations:
Fallback Validation:
Unit Tests:
```

Example:

```text
Name:
Employee ID Validator

Purpose:
Validate IDs in the format SG followed by exactly six digits.

Engine:
JavaScript

Flags:
None

Pattern:
^SG\d{6}$

Valid:
SG123456
SG000001

Invalid:
sg123456
SG12345
ABC123456
SG1234567

Maximum Input Length:
8

Fallback Validation:
None required beyond business lookup.

Unit Tests:
Include null, empty, spaces, Unicode digits, too-short and too-long inputs.
```

---

# Bonus: Regex Unit-Test Mindset

For every important Regex, test at least:

```text
1. Normal valid input
2. Smallest valid input
3. Largest valid input
4. Empty input
5. Null handling outside Regex
6. Leading spaces
7. Trailing spaces
8. Unexpected Unicode
9. Incorrect case
10. Extra characters
11. Very long malicious input
12. Repeated delimiters
13. Missing delimiters
14. Newline-containing input
15. OCR-corrupted input when relevant
```

This is what separates a demo Regex from a production-quality Regex.

---

# Bonus: Regex for OCR Systems — Recommended Architecture

For invoice or document OCR, avoid creating thousands of completely isolated field Regexes with no surrounding intelligence.

A more maintainable architecture is:

```text
Document
   ↓
OCR
   ↓
Text normalization
   ↓
Line segmentation
   ↓
Label detection
   ↓
Alias matching
   ↓
Regex candidate extraction
   ↓
Candidate scoring
   ↓
Cross-field validation
   ↓
Business-rule validation
   ↓
Confidence score
   ↓
Human review when required
```

Example aliases for invoice number:

```text
Invoice No
Invoice Number
Inv No
Inv #
Bill No
Document No
Tax Invoice No
```

Example conceptual extraction logic:

```regex
(?i)\b(?:invoice|inv|bill|document)\s*(?:no|number|#)?\.?\s*[:\-]?\s*([A-Z0-9][A-Z0-9\/._-]{2,})
```

Then validate the candidate using:

- expected length
- nearby label score
- whether it looks like a date
- whether it looks like a GSTIN
- whether the same value appears elsewhere
- known vendor formatting
- OCR confidence

Regex works best as one component in this pipeline.

---

# Final Quick Reference

If you remember only a few patterns at first, remember these:

```regex
\d+                 one or more digits
\w+                 one or more word characters
\s+                 one or more whitespace characters
[A-Z]+              uppercase letters
[^,]+               everything until a comma
^...$                entire string validation
(...)                capture
(?:...)              group without capture
a|b                  OR
.*                   greedy anything
.*?                  lazy anything
\bword\b             complete word
(?=...)              positive lookahead
(?!...)              negative lookahead
(?<=...)             positive lookbehind
(?<!...)             negative lookbehind
```

And remember the most important development rule:

> **The best Regex is not the cleverest Regex. It is the easiest correct Regex for another developer to understand, test, and maintain.**
