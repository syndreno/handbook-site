# Mastering jQuery — Beginner to Advanced Master Guide

> **Purpose of this file:**  
> This is not only a cheat sheet. It is designed so that a complete beginner can open any topic, understand what it means, see why it is useful, read the syntax, study a realistic example, learn common mistakes, and then practice it.

---

# How to Use This Guide

For most topics, follow this order:

1. **What it is** — simple definition.
2. **Why it matters** — why developers use it.
3. **Basic syntax** — the smallest useful example.
4. **Step-by-step explanation** — what every important part means.
5. **Real-world scenario** — where you may actually use it.
6. **Common mistakes** — problems beginners often face.
7. **Practice** — small exercise to test understanding.

You do **not** need to memorize every jQuery method.

Your main goal is to understand the ideas behind:

```text
Selecting elements
        ↓
Reading or changing them
        ↓
Listening for user actions
        ↓
Collecting form data
        ↓
Calling APIs
        ↓
Updating the page dynamically
```

---

# Table of Contents

1. [What Is jQuery?](#1-what-is-jquery)
2. [What You Should Know Before jQuery](#2-what-you-should-know-before-jquery)
3. [Why jQuery Was Created](#3-why-jquery-was-created)
4. [When jQuery Is Still Useful](#4-when-jquery-is-still-useful)
5. [jQuery vs JavaScript](#5-jquery-vs-javascript)
6. [Installing and Loading jQuery](#6-installing-and-loading-jquery)
7. [Understanding `$` and `jQuery`](#7-understanding--and-jquery)
8. [Understanding the jQuery Object](#8-understanding-the-jquery-object)
9. [Document Ready](#9-document-ready)
10. [Selectors](#10-selectors)
11. [Selector Best Practices](#11-selector-best-practices)
12. [DOM Traversal](#12-dom-traversal)
13. [Reading and Changing Text, HTML, and Values](#13-reading-and-changing-text-html-and-values)
14. [Attributes and Properties](#14-attributes-and-properties)
15. [CSS and Classes](#15-css-and-classes)
16. [Creating and Inserting Elements](#16-creating-and-inserting-elements)
17. [Removing, Emptying, Detaching, and Cloning](#17-removing-emptying-detaching-and-cloning)
18. [Dimensions, Position, and Scrolling](#18-dimensions-position-and-scrolling)
19. [Events](#19-events)
20. [The Event Object](#20-the-event-object)
21. [`this`, `event.target`, and `event.currentTarget`](#21-this-eventtarget-and-eventcurrenttarget)
22. [Event Bubbling](#22-event-bubbling)
23. [Event Delegation](#23-event-delegation)
24. [Event Namespaces](#24-event-namespaces)
25. [Triggering Events](#25-triggering-events)
26. [Forms](#26-forms)
27. [Checkboxes, Radios, and Select Boxes](#27-checkboxes-radios-and-select-boxes)
28. [Form Serialization](#28-form-serialization)
29. [Client-Side Validation](#29-client-side-validation)
30. [Data Attributes and `.data()`](#30-data-attributes-and-data)
31. [Effects](#31-effects)
32. [Custom Animations](#32-custom-animations)
33. [Animation Queues and `.stop()`](#33-animation-queues-and-stop)
34. [AJAX Fundamentals](#34-ajax-fundamentals)
35. [`$.ajax()`](#35-ajax)
36. [`$.get()`, `$.post()`, and `$.getJSON()`](#36-get-post-and-getjson)
37. [Sending JSON](#37-sending-json)
38. [Receiving JSON](#38-receiving-json)
39. [Uploading Files with FormData](#39-uploading-files-with-formdata)
40. [AJAX Loading, Success, Error, and Always States](#40-ajax-loading-success-error-and-always-states)
41. [Aborting AJAX Requests](#41-aborting-ajax-requests)
42. [Global AJAX Events](#42-global-ajax-events)
43. [AJAX Setup](#43-ajax-setup)
44. [Promises, jqXHR, Deferred, and `$.when()`](#44-promises-jqxhr-deferred-and-when)
45. [Iteration with `.each()` and `$.each()`](#45-iteration-with-each-and-each)
46. [Mapping Values with `.map()`](#46-mapping-values-with-map)
47. [Filtering Elements](#47-filtering-elements)
48. [Chaining](#48-chaining)
49. [Utility Functions](#49-utility-functions)
50. [`noConflict()`](#50-noconflict)
51. [jQuery Plugins](#51-jquery-plugins)
52. [Writing Your Own Plugin](#52-writing-your-own-plugin)
53. [Reusable Page Modules](#53-reusable-page-modules)
54. [State Management in jQuery Applications](#54-state-management-in-jquery-applications)
55. [Working with Tables](#55-working-with-tables)
56. [Dynamic Line Items](#56-dynamic-line-items)
57. [Search and Debounce](#57-search-and-debounce)
58. [Pagination](#58-pagination)
59. [Dependent Dropdowns](#59-dependent-dropdowns)
60. [Modals and Older Bootstrap Projects](#60-modals-and-older-bootstrap-projects)
61. [Legacy jQuery APIs You May See](#61-legacy-jquery-apis-you-may-see)
62. [Performance Optimization](#62-performance-optimization)
63. [Security](#63-security)
64. [Accessibility](#64-accessibility)
65. [Error Handling](#65-error-handling)
66. [Debugging](#66-debugging)
67. [Common Beginner Mistakes](#67-common-beginner-mistakes)
68. [jQuery to Vanilla JavaScript Mapping](#68-jquery-to-vanilla-javascript-mapping)
69. [Real-World Invoice Screen Example](#69-real-world-invoice-screen-example)
70. [Recommended Project Structure](#70-recommended-project-structure)
71. [Mini Projects](#71-mini-projects)
72. [Interview Questions](#72-interview-questions)
73. [Practice Exercises](#73-practice-exercises)
74. [Mastery Checklist](#74-mastery-checklist)
75. [Quick Reference](#75-quick-reference)
76. [Final Learning Roadmap](#76-final-learning-roadmap)

---

# 1. What Is jQuery?

## Simple Definition

jQuery is a JavaScript library.

A **JavaScript library** is reusable code written by other developers to make common programming tasks easier.

jQuery mainly helps with:

- Finding HTML elements
- Reading values from elements
- Changing HTML content
- Changing CSS classes
- Handling button clicks and other events
- Sending AJAX requests
- Creating simple animations
- Working with dynamic forms and tables

Without jQuery:

```javascript
document.querySelector("#title").textContent = "Hello";
```

With jQuery:

```javascript
$("#title").text("Hello");
```

Both examples do the same thing.

The jQuery version is shorter and was especially valuable when browser APIs were less consistent.

---

## What jQuery Does Not Do

jQuery is not:

- A programming language
- A database
- A backend framework
- A complete frontend framework
- A replacement for JavaScript

jQuery is written in JavaScript and runs inside JavaScript.

Think of it like this:

```text
JavaScript
    └── jQuery
```

If you understand JavaScript well, jQuery becomes much easier to understand.

---

# 2. What You Should Know Before jQuery

A beginner can start jQuery early, but you should gradually learn these JavaScript concepts too:

- Variables
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- Conditions
- Loops
- DOM
- Events
- JSON
- HTTP basics

Example JavaScript variable:

```javascript
const name = "John";
```

Example function:

```javascript
function greet(name) {
    return "Hello " + name;
}
```

Example object:

```javascript
const invoice = {
    number: "INV001",
    amount: 5000
};
```

jQuery uses all of these JavaScript concepts.

---

# 3. Why jQuery Was Created

Years ago, browsers behaved differently.

A developer might write one piece of JavaScript that worked in one browser but not another.

jQuery created a consistent API.

Instead of worrying about many browser differences, developers could write:

```javascript
$("#button").on("click", function () {
    // action
});
```

and jQuery handled many browser differences internally.

This made frontend development much faster.

---

# 4. When jQuery Is Still Useful

Modern JavaScript is much stronger than it was when jQuery became popular.

For a brand-new application, you may not need jQuery.

However, jQuery is still common in:

- Legacy enterprise applications
- PHP projects
- CodeIgniter applications
- Older Laravel applications
- WordPress
- Older Bootstrap projects
- Admin dashboards
- Server-rendered applications
- Internal business software
- Maintenance projects

If you work on an existing system, knowing jQuery can be very valuable.

---

# 5. jQuery vs JavaScript

jQuery is JavaScript with helper methods.

## Selecting an Element

JavaScript:

```javascript
const title = document.querySelector("#title");
```

jQuery:

```javascript
const $title = $("#title");
```

---

## Changing Text

JavaScript:

```javascript
document.querySelector("#title").textContent = "Welcome";
```

jQuery:

```javascript
$("#title").text("Welcome");
```

---

## Listening for Click

JavaScript:

```javascript
document
    .querySelector("#saveBtn")
    .addEventListener("click", function () {
        alert("Saved");
    });
```

jQuery:

```javascript
$("#saveBtn").on("click", function () {
    alert("Saved");
});
```

---

## Important Lesson

Do not think:

```text
jQuery OR JavaScript
```

Think:

```text
jQuery is a JavaScript library.
```

---

# 6. Installing and Loading jQuery

Before using `$()` or `jQuery()`, the jQuery library must be loaded.

## CDN Method

```html
<script src="https://code.jquery.com/jquery.min.js"></script>
```

Then load your own code:

```html
<script src="app.js"></script>
```

Order matters:

```html
<script src="jquery.min.js"></script>
<script src="app.js"></script>
```

This is correct because `app.js` may use jQuery.

This may fail:

```html
<script src="app.js"></script>
<script src="jquery.min.js"></script>
```

because jQuery may not exist when `app.js` starts running.

---

## Check Whether jQuery Loaded

Open the browser console:

```javascript
console.log(typeof jQuery);
```

You should normally see:

```text
function
```

You can also check:

```javascript
console.log(typeof $);
```

---

## Common Error

```text
$ is not defined
```

Usually means:

- jQuery did not load
- jQuery loaded after your script
- Wrong script path
- CDN failed
- Another library is using `$`

---

# 7. Understanding `$` and `jQuery`

These two normally mean the same thing:

```javascript
$("#title");
```

and:

```javascript
jQuery("#title");
```

`$` is simply a shorter alias for `jQuery`.

Example:

```javascript
$("#saveBtn").hide();
```

is basically:

```javascript
jQuery("#saveBtn").hide();
```

---

# 8. Understanding the jQuery Object

This is one of the most important concepts.

When you write:

```javascript
$("#title")
```

you are not directly getting the raw DOM element.

You are getting a **jQuery object** that wraps one or more DOM elements.

Example:

```javascript
const $title = $("#title");
```

The `$title` variable contains a jQuery object.

That is why you can call:

```javascript
$title.text("Hello");
$title.hide();
$title.addClass("active");
```

---

## Getting the Native DOM Element

```javascript
const element = $("#title")[0];
```

or:

```javascript
const element = $("#title").get(0);
```

Now `element` is a native DOM element.

Native:

```javascript
element.textContent = "Hello";
```

jQuery:

```javascript
$(element).text("Hello");
```

---

## Naming Convention

Many developers prefix variables containing jQuery objects with `$`.

Example:

```javascript
const $form = $("#invoiceForm");
const $table = $("#invoiceTable");
const $button = $("#saveBtn");
```

This is optional, but it helps you remember:

```text
$form → jQuery object
form  → maybe native DOM or normal variable
```

---

# 9. Document Ready

## What It Means

Your JavaScript may execute before the browser finishes building the HTML DOM.

If your code tries to select an element that does not exist yet, your selector may return no elements.

jQuery provides a document-ready callback.

```javascript
$(document).ready(function () {
    console.log("DOM is ready");
});
```

Short form:

```javascript
$(function () {
    console.log("DOM is ready");
});
```

---

## Example

HTML:

```html
<button id="saveBtn">Save</button>
```

JavaScript:

```javascript
$(function () {
    $("#saveBtn").on("click", function () {
        alert("Saved");
    });
});
```

---

## Mental Model

```text
Browser loads HTML
      ↓
DOM gets created
      ↓
jQuery ready callback runs
      ↓
Your page logic starts
```

---

# 10. Selectors

Selectors tell jQuery **which HTML elements you want to work with**.

General format:

```javascript
$("selector")
```

jQuery mostly uses CSS-style selectors.

---

## 10.1 ID Selector

HTML:

```html
<input id="invoiceNumber">
```

jQuery:

```javascript
$("#invoiceNumber")
```

`#` means ID.

Use IDs for unique elements.

---

## 10.2 Class Selector

HTML:

```html
<tr class="invoice-row"></tr>
<tr class="invoice-row"></tr>
```

jQuery:

```javascript
$(".invoice-row")
```

`.` means class.

A class can match many elements.

---

## 10.3 Tag Selector

```javascript
$("button")
$("input")
$("table")
$("div")
```

Example:

```javascript
$("button").prop("disabled", true);
```

This disables every button on the page, so use broad selectors carefully.

---

## 10.4 Multiple Selectors

```javascript
$("#name, #email, #phone")
```

This selects all three elements.

Example:

```javascript
$("#name, #email, #phone").addClass("required-field");
```

---

## 10.5 Descendant Selector

HTML:

```html
<div id="invoiceForm">
    <input class="amount">
</div>
```

Selector:

```javascript
$("#invoiceForm .amount")
```

Meaning:

> Find an element with class `amount` anywhere inside `#invoiceForm`.

---

## 10.6 Direct Child Selector

```javascript
$("#menu > li")
```

Meaning:

> Select only `<li>` elements that are direct children of `#menu`.

Difference:

```javascript
$("#menu li")
```

finds all nested list items.

```javascript
$("#menu > li")
```

finds only direct children.

---

## 10.7 Attribute Selector

HTML:

```html
<input name="email">
```

Selector:

```javascript
$("input[name='email']")
```

---

## 10.8 Attribute Exists

```javascript
$("[data-id]")
```

Meaning:

> Select every element that contains a `data-id` attribute.

---

## 10.9 Attribute Starts With

```javascript
$("input[name^='item_']")
```

Matches:

```text
item_name
item_price
item_qty
```

---

## 10.10 Attribute Ends With

```javascript
$("input[name$='_amount']")
```

Matches:

```text
basic_amount
tax_amount
total_amount
```

---

## 10.11 Attribute Contains

```javascript
$("input[name*='invoice']")
```

Matches names containing the word `invoice`.

---

## 10.12 Checked Selector

```javascript
$("input:checked")
```

Useful for checkboxes and radio buttons.

---

## 10.13 Disabled Selector

```javascript
$("input:disabled")
```

---

## 10.14 Enabled Selector

```javascript
$("input:enabled")
```

---

## 10.15 Selected Option

```javascript
$("#country option:selected")
```

---

## 10.16 First and Last

```javascript
$(".row").first();
$(".row").last();
```

You may also see selector forms such as:

```javascript
$(".row:first")
$(".row:last")
```

The method forms are often easier to read.

---

## 10.17 Even and Odd

```javascript
$("tr:even")
$("tr:odd")
```

Remember indexes start from 0.

---

## 10.18 Contains Text

```javascript
$("td:contains('Pending')")
```

Use carefully because text matching can be broad and may not be ideal for application logic.

Using data attributes is often more reliable:

```html
<tr data-status="pending">
```

```javascript
$("tr[data-status='pending']")
```

---

## Real-World Scenario: Highlight Pending Invoices

HTML:

```html
<table id="invoiceTable">
    <tbody>
        <tr data-status="pending">
            <td>INV001</td>
        </tr>

        <tr data-status="approved">
            <td>INV002</td>
        </tr>
    </tbody>
</table>
```

jQuery:

```javascript
$("#invoiceTable tr[data-status='pending']")
    .addClass("pending-row");
```

Step-by-step:

```text
#invoiceTable
    ↓
find table with that ID
    ↓
tr[data-status='pending']
    ↓
find rows whose status is pending
    ↓
.addClass(...)
    ↓
add CSS class to those rows
```

---

# 11. Selector Best Practices

## Use the Smallest Stable Scope

Instead of:

```javascript
$(document).find(".amount");
```

prefer:

```javascript
$("#invoiceTable").find(".amount");
```

when you only need amounts from that table.

---

## Cache Repeated Selections

Poor:

```javascript
$("#invoiceTable").hide();
$("#invoiceTable").addClass("loading");
$("#invoiceTable").show();
```

Better:

```javascript
const $table = $("#invoiceTable");

$table.hide();
$table.addClass("loading");
$table.show();
```

Benefits:

- Easier to read
- Avoids repeating selector work
- Easier to refactor

---

## Check Whether an Element Exists

```javascript
if ($("#invoiceTable").length > 0) {
    console.log("Table exists");
}
```

Why?

A jQuery object itself is truthy even if it contains zero elements.

Wrong:

```javascript
if ($("#invoiceTable")) {
    // This does not correctly test existence.
}
```

Correct:

```javascript
if ($("#invoiceTable").length) {
    // exists
}
```

---

# 12. DOM Traversal

DOM traversal means moving from one selected element to a related element.

Imagine:

```html
<tr class="invoice-row">
    <td class="invoice-number">INV001</td>
    <td>
        <button class="approve-btn">Approve</button>
    </td>
</tr>
```

If the button is clicked, you may need to reach its `<tr>`.

That is traversal.

---

## 12.1 `.parent()`

Gets the direct parent.

```javascript
$(".approve-btn").parent();
```

If the button is inside `<td>`, this returns the `<td>`.

---

## 12.2 `.parents()`

Gets matching ancestors.

```javascript
$(".approve-btn").parents(".invoice-row");
```

Useful when you want an ancestor higher in the tree.

---

## 12.3 `.closest()`

Very important.

```javascript
$(this).closest("tr");
```

Meaning:

> Start from this element and move upward until the nearest matching `<tr>` is found.

Real-world use:

```javascript
$(".approve-btn").on("click", function () {
    const $row = $(this).closest("tr");

    $row.addClass("approved");
});
```

---

## `.parent()` vs `.closest()`

If structure changes from:

```html
<tr>
    <td>
        <button>Approve</button>
    </td>
</tr>
```

then:

```javascript
$(this).parent()
```

returns `<td>`.

But:

```javascript
$(this).closest("tr")
```

returns `<tr>`.

For table actions, `.closest("tr")` is usually clearer.

---

## 12.4 `.children()`

Gets direct children.

```javascript
$("#menu").children();
```

Specific children:

```javascript
$("#menu").children(".active");
```

---

## 12.5 `.find()`

Searches inside the current element.

```javascript
$("#invoiceForm").find("input");
```

Real scenario:

```javascript
const $row = $(this).closest("tr");

const qty = $row.find(".qty").val();
const price = $row.find(".price").val();
```

---

## 12.6 `.siblings()`

Gets elements with the same parent.

```javascript
$(".active-tab").siblings();
```

---

## 12.7 `.next()`

Gets the next sibling.

```javascript
$(".current").next();
```

---

## 12.8 `.prev()`

Gets the previous sibling.

```javascript
$(".current").prev();
```

---

## 12.9 `.nextAll()` and `.prevAll()`

```javascript
$(".current").nextAll();
$(".current").prevAll();
```

Useful when navigating step-by-step forms or lists.

---

## Real-World Scenario: Calculate One Row

HTML:

```html
<tr class="item-row">
    <td>
        <input class="qty" value="2">
    </td>
    <td>
        <input class="price" value="100">
    </td>
    <td class="total"></td>
    <td>
        <button class="calculate-btn">Calculate</button>
    </td>
</tr>
```

jQuery:

```javascript
$(".calculate-btn").on("click", function () {
    const $row = $(this).closest(".item-row");

    const qty = Number($row.find(".qty").val()) || 0;
    const price = Number($row.find(".price").val()) || 0;

    const total = qty * price;

    $row.find(".total").text(total.toFixed(2));
});
```

Concepts:

```text
clicked button
    ↓
closest row
    ↓
find qty
    ↓
find price
    ↓
calculate
    ↓
find total cell
    ↓
display result
```

---

# 13. Reading and Changing Text, HTML, and Values

Three methods beginners must clearly distinguish:

```text
.text() → text inside normal elements
.html() → HTML inside elements
.val()  → value of form controls
```

---

## 13.1 `.text()`

HTML:

```html
<div id="message">Old message</div>
```

Read:

```javascript
const message = $("#message").text();
```

Result:

```text
Old message
```

Set:

```javascript
$("#message").text("Invoice saved");
```

Use `.text()` when you want plain text.

It is also safer for untrusted values because it does not interpret text as HTML.

---

## 13.2 `.html()`

Read HTML:

```javascript
const html = $("#container").html();
```

Set HTML:

```javascript
$("#container").html(
    "<strong>Invoice Approved</strong>"
);
```

Difference:

```javascript
$("#container").text("<strong>Hello</strong>");
```

displays literal text:

```text
<strong>Hello</strong>
```

while:

```javascript
$("#container").html("<strong>Hello</strong>");
```

renders bold text.

---

## Security Warning

Do not do this with untrusted user or API data:

```javascript
$("#output").html(userInput);
```

If `userInput` contains malicious HTML, this can cause XSS.

Prefer:

```javascript
$("#output").text(userInput);
```

---

## 13.3 `.val()`

Use `.val()` for:

- Input
- Textarea
- Select

HTML:

```html
<input id="invoiceNo" value="INV001">
```

Read:

```javascript
const invoiceNo = $("#invoiceNo").val();
```

Set:

```javascript
$("#invoiceNo").val("INV002");
```

---

## Common Beginner Mistake

Wrong:

```javascript
$("#invoiceNo").text();
```

Correct:

```javascript
$("#invoiceNo").val();
```

because an `<input>` stores its current user value in its value property, not as inner text.

---

# 14. Attributes and Properties

This section is very important because `.attr()` and `.prop()` look similar but solve different problems.

---

## 14.1 `.attr()`

An attribute appears in HTML.

Example:

```html
<img id="logo" src="old.png" alt="Logo">
```

Read:

```javascript
const src = $("#logo").attr("src");
```

Set:

```javascript
$("#logo").attr("src", "new.png");
```

Set many:

```javascript
$("#downloadLink").attr({
    href: "/file.pdf",
    target: "_blank"
});
```

Remove:

```javascript
$("#downloadLink").removeAttr("target");
```

---

## 14.2 `.prop()`

A property represents the current DOM state.

Common examples:

- checked
- disabled
- selected

Read checkbox state:

```javascript
const checked = $("#terms").prop("checked");
```

Disable button:

```javascript
$("#saveBtn").prop("disabled", true);
```

Enable:

```javascript
$("#saveBtn").prop("disabled", false);
```

---

## `.attr()` vs `.prop()` Mental Model

Use:

```text
.attr() → HTML attributes
.prop() → current live DOM state
```

For checkbox:

```javascript
$("#terms").prop("checked");
```

is usually what you want.

---

# 15. CSS and Classes

jQuery can modify inline CSS directly, but larger styling changes should usually use CSS classes.

---

## 15.1 `.css()`

Read:

```javascript
const width = $("#panel").css("width");
```

Set:

```javascript
$("#panel").css("display", "none");
```

Multiple:

```javascript
$("#panel").css({
    padding: "10px",
    border: "1px solid #ccc"
});
```

---

## Why Classes Are Often Better

Instead of:

```javascript
$("#status").css({
    background: "green",
    color: "white",
    padding: "5px"
});
```

CSS:

```css
.status-approved {
    background: green;
    color: white;
    padding: 5px;
}
```

jQuery:

```javascript
$("#status").addClass("status-approved");
```

Benefits:

- Styling stays in CSS
- JavaScript stays focused on behavior
- Easier maintenance

---

## 15.2 `.addClass()`

```javascript
$("#status").addClass("approved");
```

---

## 15.3 `.removeClass()`

```javascript
$("#status").removeClass("approved");
```

---

## 15.4 `.toggleClass()`

```javascript
$("#sidebar").toggleClass("collapsed");
```

If class exists → remove it.

If class does not exist → add it.

---

## 15.5 `.hasClass()`

```javascript
if ($("#sidebar").hasClass("collapsed")) {
    console.log("Sidebar is collapsed");
}
```

---

# 16. Creating and Inserting Elements

You can create new HTML elements with jQuery.

---

## Create Empty Element

```javascript
const $item = $("<li>");
```

Add text:

```javascript
$item.text("Keyboard");
```

Add class:

```javascript
$item.addClass("product-item");
```

---

## Create With Options

```javascript
const $button = $("<button>", {
    type: "button",
    class: "approve-btn",
    text: "Approve"
});
```

This is often easier and safer than concatenating HTML strings.

---

## `.append()`

Adds content at the end.

```javascript
$("#list").append("<li>Item</li>");
```

---

## `.prepend()`

Adds content at the beginning.

```javascript
$("#list").prepend("<li>First Item</li>");
```

---

## `.before()`

```javascript
$("#target").before("<p>Before target</p>");
```

---

## `.after()`

```javascript
$("#target").after("<p>After target</p>");
```

---

## `.appendTo()`

```javascript
$("<li>")
    .text("Item")
    .appendTo("#list");
```

---

## Safe API Rendering

Suppose API returns:

```javascript
const vendor = {
    name: "<script>alert(1)</script>"
};
```

Avoid:

```javascript
$("#vendors").append(
    "<li>" + vendor.name + "</li>"
);
```

Prefer:

```javascript
$("<li>")
    .text(vendor.name)
    .appendTo("#vendors");
```

---

# 17. Removing, Emptying, Detaching, and Cloning

These methods look similar but behave differently.

---

## `.remove()`

Removes the selected element completely.

```javascript
$(".temporary-row").remove();
```

Use when you do not need it anymore.

---

## `.empty()`

Removes children but keeps the parent.

HTML:

```html
<div id="results">
    <p>A</p>
    <p>B</p>
</div>
```

```javascript
$("#results").empty();
```

After:

```html
<div id="results"></div>
```

---

## `.detach()`

Removes the element but keeps jQuery data/events so it can be reinserted.

```javascript
const $row = $("#row1").detach();

$("#otherTable").append($row);
```

---

## `.clone()`

Copies an element.

```javascript
const $copy = $(".item-row:first").clone();

$("#items tbody").append($copy);
```

---

## `.clone(true)`

```javascript
const $copy = $(".item-row:first").clone(true);
```

This can also copy event handlers/data.

Use carefully because copied event handlers may cause surprising behavior.

---

# 18. Dimensions, Position, and Scrolling

These methods help when building:

- Sticky UI
- Popups
- Custom dropdowns
- Scroll-to-top buttons
- Layout calculations

---

## `.width()`

```javascript
const width = $("#box").width();
```

Set:

```javascript
$("#box").width(500);
```

---

## `.height()`

```javascript
const height = $("#box").height();
```

---

## `.innerWidth()`

Includes padding.

```javascript
$("#box").innerWidth();
```

---

## `.outerWidth()`

Includes padding and border.

```javascript
$("#box").outerWidth();
```

Include margins:

```javascript
$("#box").outerWidth(true);
```

---

## `.offset()`

Position relative to the document.

```javascript
const position = $("#box").offset();

console.log(position.top);
console.log(position.left);
```

---

## `.position()`

Position relative to the element's offset parent.

```javascript
$("#box").position();
```

---

## Scroll Position

```javascript
const scrollTop = $(window).scrollTop();
```

Set:

```javascript
$(window).scrollTop(0);
```

Smooth scroll:

```javascript
$("html, body").animate({
    scrollTop: 0
}, 300);
```

---

# 19. Events

An event is something that happens in the browser.

Examples:

- User clicks
- User types
- Form submits
- Dropdown changes
- Element receives focus
- Window scrolls

jQuery lets you listen for these events.

---

## Basic Syntax

```javascript
$("#saveBtn").on("click", function () {
    alert("Clicked");
});
```

Breakdown:

```text
$("#saveBtn")
    ↓
select button

.on(...)
    ↓
attach an event listener

"click"
    ↓
event type

function () { ... }
    ↓
code that runs after click
```

---

## Common Events

### Click

```javascript
$("#saveBtn").on("click", function () {
    console.log("clicked");
});
```

### Double Click

```javascript
$("#box").on("dblclick", function () {
    console.log("double clicked");
});
```

### Input

```javascript
$("#search").on("input", function () {
    console.log($(this).val());
});
```

Runs when input value changes.

### Change

```javascript
$("#status").on("change", function () {
    console.log($(this).val());
});
```

Useful for:

- Select boxes
- Checkboxes
- Radio buttons

### Focus

```javascript
$("#email").on("focus", function () {
    $(this).addClass("focused");
});
```

### Blur

```javascript
$("#email").on("blur", function () {
    $(this).removeClass("focused");
});
```

### Keydown

```javascript
$("#search").on("keydown", function (event) {
    console.log(event.key);
});
```

### Submit

```javascript
$("#invoiceForm").on("submit", function (event) {
    event.preventDefault();

    console.log("form submitted");
});
```

---

# 20. The Event Object

jQuery passes an event object to the callback.

```javascript
$("#saveBtn").on("click", function (event) {
    console.log(event);
});
```

Useful properties include:

```javascript
event.type
event.target
event.currentTarget
event.which
event.key
```

Useful methods:

```javascript
event.preventDefault();
event.stopPropagation();
```

---

## `preventDefault()`

Stops the browser's default behavior.

Example form:

```javascript
$("#invoiceForm").on("submit", function (event) {
    event.preventDefault();

    // AJAX save instead of normal page reload
});
```

Example link:

```javascript
$("a.ajax-link").on("click", function (event) {
    event.preventDefault();
});
```

---

## `stopPropagation()`

Stops an event from continuing upward through parent elements.

```javascript
$(".child").on("click", function (event) {
    event.stopPropagation();
});
```

Use carefully.

Event bubbling is useful for event delegation, so unnecessary `stopPropagation()` can break other logic.

---

# 21. `this`, `event.target`, and `event.currentTarget`

This area confuses many beginners.

HTML:

```html
<button class="save-btn">
    <span>Save</span>
</button>
```

jQuery:

```javascript
$(".save-btn").on("click", function (event) {
    console.log(this);
    console.log(event.target);
    console.log(event.currentTarget);
});
```

If user clicks the `<span>`:

```text
event.target
    → span

event.currentTarget
    → button

this
    → normally button in a normal function callback
```

---

## Why Normal Function Is Common in jQuery Events

Good:

```javascript
$(".btn").on("click", function () {
    $(this).addClass("active");
});
```

Problem:

```javascript
$(".btn").on("click", () => {
    $(this).addClass("active");
});
```

Arrow functions do not create their own `this`, so `this` may not be the clicked element.

Use normal functions when you want jQuery event `this`.

---

# 22. Event Bubbling

Suppose:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

If the button is clicked, the click event can travel upward:

```text
button
  ↓
div
  ↓
body
  ↓
document
```

This is called **event bubbling**.

Event delegation uses bubbling.

---

# 23. Event Delegation

This is one of the most important jQuery topics.

Suppose this button exists when page loads:

```html
<button class="delete-btn">Delete</button>
```

You can write:

```javascript
$(".delete-btn").on("click", function () {
    // works
});
```

But if you dynamically add new `.delete-btn` elements later, those new buttons may not have the handler.

---

## Delegated Event

```javascript
$("#invoiceTable").on(
    "click",
    ".delete-btn",
    function () {
        $(this).closest("tr").remove();
    }
);
```

Meaning:

```text
Attach click listener to #invoiceTable
        ↓
When click bubbles up
        ↓
Check whether click came from .delete-btn
        ↓
Run handler
```

This works for current and future matching buttons inside the table.

---

## Why Closest Stable Parent Is Better

You may see:

```javascript
$(document).on("click", ".delete-btn", handler);
```

This works, but the listener is placed very high in the DOM.

Better when possible:

```javascript
$("#invoiceTable").on(
    "click",
    ".delete-btn",
    handler
);
```

Use the nearest stable parent.

---

# 24. Event Namespaces

Large applications may attach many events.

You can label events with a namespace.

```javascript
$("#saveBtn").on(
    "click.invoice",
    function () {
        console.log("invoice click");
    }
);
```

Later remove only events in that namespace:

```javascript
$("#saveBtn").off(".invoice");
```

This is very useful for:

- Page cleanup
- Reinitialization
- Plugins
- Avoiding duplicate bindings

---

# 25. Triggering Events

jQuery can manually trigger events.

```javascript
$("#country").trigger("change");
```

Why use this?

Example:

```javascript
$("#country").val("IN").trigger("change");
```

You set the value programmatically and then want the same change logic to run.

---

# 26. Forms

Forms are one of the biggest real-world jQuery use cases.

Typical tasks:

- Read values
- Validate fields
- Show errors
- Enable/disable buttons
- Build request data
- Submit via AJAX
- Handle success/failure

---

## Basic Form

```html
<form id="invoiceForm">
    <input id="invoiceNo" name="invoice_no">
    <input id="amount" name="amount">

    <button type="submit">
        Save
    </button>
</form>
```

Read:

```javascript
const invoiceNo = $("#invoiceNo").val();
const amount = $("#amount").val();
```

---

# 27. Checkboxes, Radios, and Select Boxes

## Checkbox

HTML:

```html
<input
    type="checkbox"
    id="terms">
```

Read:

```javascript
const checked =
    $("#terms").prop("checked");
```

---

## Set Checkbox

```javascript
$("#terms").prop("checked", true);
```

---

## Multiple Checkboxes

HTML:

```html
<input
    type="checkbox"
    class="permission"
    value="read">

<input
    type="checkbox"
    class="permission"
    value="write">
```

Read selected:

```javascript
const permissions =
    $(".permission:checked")
        .map(function () {
            return this.value;
        })
        .get();
```

Result:

```javascript
["read", "write"]
```

---

## Radio Button

```html
<input
    type="radio"
    name="payment_type"
    value="po">

<input
    type="radio"
    name="payment_type"
    value="non_po">
```

Read selected:

```javascript
const paymentType =
    $("input[name='payment_type']:checked")
        .val();
```

---

## Select Box

HTML:

```html
<select id="department">
    <option value="">Select</option>
    <option value="IT">IT</option>
    <option value="FIN">Finance</option>
</select>
```

Read value:

```javascript
const department =
    $("#department").val();
```

Read selected visible text:

```javascript
const departmentText =
    $("#department option:selected").text();
```

---

# 28. Form Serialization

Serialization converts form controls into data that can be sent to a server.

---

## `.serialize()`

```javascript
const data =
    $("#invoiceForm").serialize();
```

Output may look like:

```text
invoice_no=INV001&amount=5000
```

Useful for regular form-encoded AJAX requests.

---

## `.serializeArray()`

```javascript
const fields =
    $("#invoiceForm").serializeArray();
```

Example output:

```javascript
[
    {
        name: "invoice_no",
        value: "INV001"
    },
    {
        name: "amount",
        value: "5000"
    }
]
```

---

## Important Limitation

Disabled controls are generally not included in normal form serialization.

If you need their values, handle them separately.

---

# 29. Client-Side Validation

Client-side validation improves user experience.

But it does **not** replace server-side validation.

---

## Required Field

```javascript
function isEmpty(value) {
    return $.trim(value) === "";
}
```

Usage:

```javascript
$("#invoiceForm").on(
    "submit",
    function (event) {
        event.preventDefault();

        const invoiceNo =
            $("#invoiceNo").val();

        if (isEmpty(invoiceNo)) {
            $("#invoiceNoError")
                .text("Invoice number is required.");

            return;
        }

        $("#invoiceNoError").text("");

        // continue
    }
);
```

---

## Positive Number Validation

```javascript
function isPositiveNumber(value) {
    const number = Number(value);

    return (
        Number.isFinite(number) &&
        number > 0
    );
}
```

---

## Email Validation

```javascript
function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(value);
}
```

Remember: server must validate again.

---

# 30. Data Attributes and `.data()`

Data attributes let you attach small pieces of information to HTML elements.

HTML:

```html
<button
    class="edit-btn"
    data-id="125"
    data-status="pending">
    Edit
</button>
```

Read:

```javascript
$(".edit-btn").on("click", function () {
    const id = $(this).data("id");
    const status = $(this).data("status");

    console.log(id);
    console.log(status);
});
```

---

## Why Data Attributes Are Useful

They are useful for attaching UI-related IDs and state:

```html
<tr
    data-invoice-id="125"
    data-status="pending">
```

Then:

```javascript
const invoiceId =
    $(this)
        .closest("tr")
        .data("invoice-id");
```

---

## `.data()` Caching Note

jQuery can cache data values.

If outside code modifies `data-*` attributes after jQuery has already read them, `.data()` and `.attr()` may not behave the same way you expect.

If you need the current literal attribute:

```javascript
$(element).attr("data-status");
```

If you use jQuery-managed data:

```javascript
$(element).data("status");
```

Be consistent.

---

# 31. Effects

jQuery includes simple visual effects.

These are useful for:

- Menus
- Alerts
- Collapsible filters
- Small transitions
- Legacy interfaces

---

## `.hide()`

```javascript
$("#panel").hide();
```

With duration:

```javascript
$("#panel").hide(300);
```

---

## `.show()`

```javascript
$("#panel").show();
```

---

## `.toggle()`

```javascript
$("#panel").toggle();
```

---

## Fade

```javascript
$("#message").fadeIn();
$("#message").fadeOut();
$("#message").fadeToggle();
```

---

## Slide

```javascript
$("#filters").slideDown();
$("#filters").slideUp();
$("#filters").slideToggle();
```

---

## Real Scenario: Collapsible Filters

```javascript
$("#toggleFilters").on("click", function () {
    $("#filters").slideToggle(200);
});
```

---

# 32. Custom Animations

Use `.animate()` to animate numeric CSS properties.

Example:

```javascript
$("#box").animate({
    width: "300px",
    opacity: 0.5
}, 500);
```

Meaning:

```text
width goes toward 300px
opacity goes toward 0.5
duration is 500 milliseconds
```

---

## Callback

```javascript
$("#box").animate(
    {
        opacity: 0
    },
    300,
    function () {
        console.log("animation finished");
    }
);
```

---

# 33. Animation Queues and `.stop()`

If a user rapidly triggers animations, jQuery may queue them.

Example:

```javascript
$("#menu").slideToggle();
```

clicked many times can create delayed animation behavior.

Use:

```javascript
$("#menu")
    .stop(true, true)
    .slideToggle(200);
```

Simple mental model:

```text
.stop(true, true)
    ↓
clear old queued animation
    ↓
finish current state
    ↓
start new animation
```

---

# 34. AJAX Fundamentals

AJAX means communicating with the server without reloading the entire page.

Example flow:

```text
User clicks Search
        ↓
JavaScript sends HTTP request
        ↓
Server processes request
        ↓
Server returns JSON
        ↓
JavaScript updates table
```

This is a major jQuery use case.

---

## Common HTTP Methods

```text
GET     → read data
POST    → create/action
PUT     → replace/update
PATCH   → partial update
DELETE  → delete
```

Actual API behavior depends on backend design.

---

# 35. `$.ajax()`

This is the most configurable jQuery AJAX method.

Basic example:

```javascript
$.ajax({
    url: "/api/invoices",
    method: "GET"
})
.done(function (response) {
    console.log(response);
})
.fail(function (xhr) {
    console.error(xhr);
});
```

---

## Important Options

```javascript
$.ajax({
    url: "/api/invoices",
    method: "POST",
    data: {},
    dataType: "json",
    contentType: "application/json",
    timeout: 30000
});
```

### `url`

Where request goes.

### `method`

HTTP method.

### `data`

Data sent to server.

### `dataType`

Expected response type.

### `contentType`

Format of request body sent to server.

### `timeout`

How long to wait before request can time out.

---

# 36. `$.get()`, `$.post()`, and `$.getJSON()`

These are shortcuts.

---

## `$.get()`

```javascript
$.get(
    "/api/invoices",
    {
        status: "pending"
    }
)
.done(function (response) {
    console.log(response);
});
```

---

## `$.post()`

```javascript
$.post(
    "/api/invoices",
    {
        invoiceNo: "INV001"
    }
)
.done(function (response) {
    console.log(response);
});
```

---

## `$.getJSON()`

```javascript
$.getJSON(
    "/api/invoices",
    function (data) {
        console.log(data);
    }
);
```

---

# 37. Sending JSON

Suppose backend expects:

```json
{
    "invoiceNo": "INV001",
    "amount": 5000
}
```

jQuery:

```javascript
const payload = {
    invoiceNo: "INV001",
    amount: 5000
};

$.ajax({
    url: "/api/invoices",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(payload)
});
```

Why `JSON.stringify()`?

Because JavaScript object:

```javascript
{
    invoiceNo: "INV001"
}
```

must be converted into JSON text before sending in a raw JSON request body.

---

# 38. Receiving JSON

If API returns JSON:

```json
{
    "invoiceNo": "INV001",
    "status": "pending"
}
```

Use:

```javascript
$.ajax({
    url: "/api/invoices/1",
    dataType: "json"
})
.done(function (invoice) {
    console.log(invoice.invoiceNo);
    console.log(invoice.status);
});
```

---

# 39. Uploading Files with FormData

Use `FormData` for file uploads.

HTML:

```html
<form id="uploadForm">
    <input
        type="file"
        name="invoice_file">

    <button type="submit">
        Upload
    </button>
</form>
```

jQuery:

```javascript
$("#uploadForm").on(
    "submit",
    function (event) {
        event.preventDefault();

        const formData =
            new FormData(this);

        $.ajax({
            url: "/api/upload",
            method: "POST",
            data: formData,
            processData: false,
            contentType: false
        })
        .done(function (response) {
            console.log(response);
        });
    }
);
```

---

## Why `processData: false`?

Normally jQuery tries to transform data into a query string.

For `FormData`, you do not want that.

---

## Why `contentType: false`?

The browser needs to generate the correct multipart boundary automatically.

---

# 40. AJAX Loading, Success, Error, and Always States

A good AJAX UI should handle all major states.

```text
Before request
    ↓
show loading

Success
    ↓
show result

Failure
    ↓
show error

Always
    ↓
restore UI
```

Example:

```javascript
$("#saveBtn").on("click", function () {
    const $button = $(this);

    $button
        .prop("disabled", true)
        .text("Saving...");

    $.ajax({
        url: "/api/save",
        method: "POST"
    })
    .done(function () {
        $("#message")
            .text("Saved successfully.");
    })
    .fail(function () {
        $("#message")
            .text("Unable to save.");
    })
    .always(function () {
        $button
            .prop("disabled", false)
            .text("Save");
    });
});
```

---

# 41. Aborting AJAX Requests

Very useful for live search.

Problem:

```text
User types a
request 1 starts

User types ab
request 2 starts

Request 2 finishes first

Request 1 finishes later
and overwrites newer results
```

Solution: cancel previous request.

```javascript
let currentRequest = null;

$("#search").on("input", function () {
    const query = $.trim($(this).val());

    if (currentRequest) {
        currentRequest.abort();
    }

    if (query.length < 2) {
        return;
    }

    currentRequest = $.ajax({
        url: "/api/search",
        data: {
            q: query
        }
    })
    .done(function (response) {
        console.log(response);
    })
    .always(function () {
        currentRequest = null;
    });
});
```

---

# 42. Global AJAX Events

jQuery can listen to AJAX activity globally.

```javascript
$(document).ajaxStart(function () {
    $("#globalLoader").show();
});

$(document).ajaxStop(function () {
    $("#globalLoader").hide();
});
```

This can be useful for global loading indicators.

But be careful:

One small background request may accidentally show a full-screen loader if global handlers are too aggressive.

---

# 43. AJAX Setup

You can define default AJAX settings.

Example:

```javascript
$.ajaxSetup({
    timeout: 30000,
    headers: {
        "X-Requested-With":
            "XMLHttpRequest"
    }
});
```

Another common use is setting a CSRF header.

However, global configuration affects many requests, so use it carefully.

---

# 44. Promises, jqXHR, Deferred, and `$.when()`

jQuery AJAX returns an object called `jqXHR`.

You can use:

```javascript
.done()
.fail()
.always()
```

Example:

```javascript
const request = $.ajax({
    url: "/api/invoices"
});

request.done(function (data) {
    console.log(data);
});

request.fail(function (xhr) {
    console.error(xhr);
});
```

---

## `$.when()`

Use when waiting for multiple jQuery async operations.

```javascript
$.when(
    $.get("/api/vendors"),
    $.get("/api/departments")
)
.done(function (
    vendorsResponse,
    departmentsResponse
) {
    const vendors =
        vendorsResponse[0];

    const departments =
        departmentsResponse[0];

    console.log(vendors);
    console.log(departments);
});
```

---

## Deferred

You may see legacy code using:

```javascript
$.Deferred()
```

Example:

```javascript
function delayedValue() {
    const deferred = $.Deferred();

    setTimeout(function () {
        deferred.resolve("Done");
    }, 1000);

    return deferred.promise();
}
```

Modern new code often prefers native:

```javascript
Promise
async
await
```

But Deferred is still useful knowledge for maintaining older code.

---

# 45. Iteration with `.each()` and `$.each()`

These two look similar.

---

## `.each()`

Used on a jQuery collection.

```javascript
$(".amount").each(function () {
    console.log($(this).val());
});
```

Meaning:

> For every matching `.amount` element, run this function.

---

## `$.each()`

Used for arrays or objects.

Array:

```javascript
$.each(
    ["A", "B", "C"],
    function (index, value) {
        console.log(index, value);
    }
);
```

Object:

```javascript
$.each(
    {
        name: "John",
        role: "Developer"
    },
    function (key, value) {
        console.log(key, value);
    }
);
```

---

# 46. Mapping Values with `.map()`

`.map()` transforms elements into values.

Example: collect checkbox values.

```javascript
const ids =
    $(".row-checkbox:checked")
        .map(function () {
            return this.value;
        })
        .get();
```

Why `.get()`?

jQuery `.map()` returns a jQuery-like collection.

`.get()` turns it into a normal JavaScript array.

---

# 47. Filtering Elements

## `.filter()`

```javascript
$(".invoice-row")
    .filter(".pending");
```

Callback:

```javascript
$(".invoice-row")
    .filter(function () {
        return (
            Number($(this).data("amount")) >
            100000
        );
    });
```

---

## `.not()`

```javascript
$(".invoice-row")
    .not(".approved");
```

---

## `.is()`

```javascript
if ($("#terms").is(":checked")) {
    console.log("checked");
}
```

---

## `.first()`

```javascript
$(".row").first();
```

---

## `.last()`

```javascript
$(".row").last();
```

---

## `.eq(index)`

```javascript
$(".row").eq(2);
```

Indexes begin at 0.

So `.eq(2)` means the third row.

---

# 48. Chaining

Many jQuery methods return the jQuery object.

That allows:

```javascript
$("#message")
    .text("Saved")
    .addClass("success")
    .fadeIn();
```

This is called chaining.

Instead of:

```javascript
$("#message").text("Saved");
$("#message").addClass("success");
$("#message").fadeIn();
```

you can chain related operations.

---

## When Chaining Becomes Bad

Avoid extremely long chains that are difficult to understand.

Readable code is more important than using the shortest code.

---

# 49. Utility Functions

jQuery includes utility helpers.

---

## `$.extend()`

Merge objects.

```javascript
const defaults = {
    pageSize: 10,
    sortable: true
};

const options = {
    pageSize: 25
};

const settings =
    $.extend(
        {},
        defaults,
        options
    );
```

Result:

```javascript
{
    pageSize: 25,
    sortable: true
}
```

---

## `$.trim()`

Legacy/common jQuery code:

```javascript
const value =
    $.trim($("#name").val());
```

Modern JavaScript:

```javascript
const value =
    $("#name").val().trim();
```

---

## `$.inArray()`

```javascript
const index =
    $.inArray(
        "Pending",
        [
            "Approved",
            "Pending",
            "Rejected"
        ]
    );
```

Modern alternative:

```javascript
array.includes("Pending");
```

---

## `$.isArray()`

Older:

```javascript
$.isArray(value);
```

Modern:

```javascript
Array.isArray(value);
```

---

# 50. `noConflict()`

Sometimes another library also uses `$`.

jQuery provides:

```javascript
jQuery.noConflict();
```

Then use:

```javascript
jQuery("#title").text("Hello");
```

Or:

```javascript
jQuery(function ($) {
    $("#title").text("Hello");
});
```

Inside that function, `$` safely refers to jQuery.

This is common in systems with many older JavaScript libraries.

---

# 51. jQuery Plugins

A jQuery plugin adds extra methods or UI features to jQuery.

Common historical/ecosystem examples include:

- DataTables
- Select2
- jQuery Validation
- Date pickers
- Older Bootstrap integrations

General usage:

```javascript
$("#invoiceTable").somePlugin({
    option: true
});
```

Each plugin has its own documentation and API.

---

## Plugin Lifecycle

When learning any plugin, understand:

```text
1. How to initialize it
2. Which options it supports
3. Which events it emits
4. Which methods it exposes
5. How to update its data
6. How to destroy it
7. What dependencies/version it needs
```

---

# 52. Writing Your Own Plugin

A simple custom plugin:

```javascript
(function ($) {
    $.fn.highlight = function () {
        return this.each(function () {
            $(this).addClass("highlight");
        });
    };
})(jQuery);
```

Usage:

```javascript
$(".important").highlight();
```

---

## Why `return this`?

It allows chaining.

Example:

```javascript
$(".important")
    .highlight()
    .fadeIn();
```

---

## Plugin with Options

```javascript
(function ($) {
    $.fn.statusBadge = function (options) {
        const settings = $.extend(
            {
                successClass:
                    "status-success",
                errorClass:
                    "status-error"
            },
            options
        );

        return this.each(function () {
            const $element = $(this);

            if (
                $element.data("status") ===
                "success"
            ) {
                $element.addClass(
                    settings.successClass
                );
            } else {
                $element.addClass(
                    settings.errorClass
                );
            }
        });
    };
})(jQuery);
```

---

# 53. Reusable Page Modules

One of the biggest problems in legacy jQuery code is placing thousands of lines inside one ready function.

Poor structure:

```javascript
$(function () {
    // thousands of lines
});
```

Better:

```javascript
const InvoicePage = {
    init: function () {
        this.cacheElements();
        this.bindEvents();
    },

    cacheElements: function () {
        this.$form =
            $("#invoiceForm");

        this.$table =
            $("#invoiceTable");
    },

    bindEvents: function () {
        this.$form.on(
            "submit.invoicePage",
            this.handleSubmit.bind(this)
        );
    },

    handleSubmit: function (event) {
        event.preventDefault();

        console.log("submit");
    }
};

$(function () {
    InvoicePage.init();
});
```

---

## Why This Is Better

You separate:

```text
Initialization
DOM references
Events
Business logic
API calls
Rendering
```

This makes debugging easier.

---

# 54. State Management in jQuery Applications

jQuery is not a state-management framework.

But you can still keep page state in normal JavaScript objects.

```javascript
const state = {
    page: 1,
    pageSize: 20,
    search: "",
    status: "pending"
};
```

Then:

```javascript
state.page = 2;
```

Call:

```javascript
loadInvoices();
```

---

## Why State Objects Help

Without a state object, values may become scattered across:

- Hidden inputs
- DOM attributes
- Global variables
- Form fields
- URL parameters

A central state object is easier to reason about.

---

# 55. Working with Tables

Tables are a major jQuery use case in enterprise applications.

Typical features:

- Search
- Filter
- Sort
- Pagination
- Select rows
- Edit
- Delete
- Approve
- Reject
- Export
- Bulk actions

---

## Select Row from Button

```javascript
$("#invoiceTable").on(
    "click",
    ".edit-btn",
    function () {
        const $row =
            $(this).closest("tr");

        const invoiceId =
            $row.data("invoice-id");

        console.log(invoiceId);
    }
);
```

---

## Select All

```javascript
$("#selectAll").on(
    "change",
    function () {
        $(".row-checkbox").prop(
            "checked",
            $(this).prop("checked")
        );
    }
);
```

---

## Collect Selected IDs

```javascript
const ids =
    $(".row-checkbox:checked")
        .map(function () {
            return this.value;
        })
        .get();
```

---

# 56. Dynamic Line Items

Very common in invoice/order forms.

HTML:

```html
<table id="lineItems">
    <tbody></tbody>
</table>

<button
    type="button"
    id="addLine">
    Add Line
</button>
```

Add row:

```javascript
$("#addLine").on("click", function () {
    const $row =
        $("<tr>")
            .addClass("item-row");

    $("<td>")
        .append(
            $("<input>", {
                class: "description",
                type: "text"
            })
        )
        .appendTo($row);

    $("<td>")
        .append(
            $("<input>", {
                class: "qty",
                type: "number",
                value: 1
            })
        )
        .appendTo($row);

    $("<td>")
        .append(
            $("<input>", {
                class: "price",
                type: "number",
                value: 0
            })
        )
        .appendTo($row);

    $("<td>")
        .append(
            $("<button>", {
                type: "button",
                class: "remove-line",
                text: "Remove"
            })
        )
        .appendTo($row);

    $("#lineItems tbody")
        .append($row);
});
```

Remove dynamically:

```javascript
$("#lineItems").on(
    "click",
    ".remove-line",
    function () {
        $(this)
            .closest(".item-row")
            .remove();
    }
);
```

---

## Live Calculation

```javascript
function calculateGrandTotal() {
    let total = 0;

    $("#lineItems .item-row")
        .each(function () {
            const $row = $(this);

            const qty =
                Number(
                    $row
                        .find(".qty")
                        .val()
                ) || 0;

            const price =
                Number(
                    $row
                        .find(".price")
                        .val()
                ) || 0;

            total += qty * price;
        });

    $("#grandTotal")
        .text(total.toFixed(2));
}
```

Bind:

```javascript
$("#lineItems").on(
    "input",
    ".qty, .price",
    calculateGrandTotal
);
```

---

# 57. Search and Debounce

If you make an API request on every keystroke:

```text
u
us
use
user
```

you may send four requests very quickly.

Debounce waits until the user pauses typing.

---

## Debounce Function

```javascript
function debounce(fn, delay) {
    let timer;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
```

Usage:

```javascript
$("#search").on(
    "input",
    debounce(function () {
        console.log(
            $(this).val()
        );
    }, 300)
);
```

---

## Real Search

```javascript
let searchRequest = null;

const searchVendors =
    debounce(function () {
        const query =
            $.trim(
                $("#vendorSearch").val()
            );

        if (query.length < 2) {
            $("#vendorResults").empty();
            return;
        }

        if (searchRequest) {
            searchRequest.abort();
        }

        searchRequest =
            $.ajax({
                url: "/api/vendors/search",
                dataType: "json",
                data: {
                    q: query
                }
            })
            .done(function (vendors) {
                const $results =
                    $("#vendorResults")
                        .empty();

                $.each(
                    vendors,
                    function (_, vendor) {
                        $("<button>", {
                            type: "button",
                            class:
                                "vendor-result",
                            text:
                                vendor.name
                        })
                        .data(
                            "vendor-id",
                            vendor.id
                        )
                        .appendTo(
                            $results
                        );
                    }
                );
            })
            .always(function () {
                searchRequest = null;
            });
    }, 300);

$("#vendorSearch")
    .on("input", searchVendors);
```

---

# 58. Pagination

Suppose backend returns:

```json
{
    "items": [],
    "page": 2,
    "totalPages": 10
}
```

Load:

```javascript
function loadInvoices(page) {
    $.ajax({
        url: "/api/invoices",
        dataType: "json",
        data: {
            page: page,
            pageSize: 20
        }
    })
    .done(function (response) {
        renderInvoices(
            response.items
        );

        renderPagination(
            response.page,
            response.totalPages
        );
    });
}
```

Click page:

```javascript
$("#pagination").on(
    "click",
    ".page-btn",
    function () {
        loadInvoices(
            $(this).data("page")
        );
    }
);
```

Use delegation because pagination buttons may be re-rendered.

---

# 59. Dependent Dropdowns

Example:

```text
Country
   ↓
State
   ↓
City
```

When country changes, load states.

```javascript
$("#country").on(
    "change",
    function () {
        const countryId =
            $(this).val();

        const $state =
            $("#state");

        $state
            .prop("disabled", true)
            .empty()
            .append(
                $("<option>")
                    .val("")
                    .text("Loading...")
            );

        $.ajax({
            url: "/api/states",
            dataType: "json",
            data: {
                countryId:
                    countryId
            }
        })
        .done(function (states) {
            $state.empty();

            $state.append(
                $("<option>")
                    .val("")
                    .text(
                        "Select State"
                    )
            );

            $.each(
                states,
                function (_, state) {
                    $("<option>")
                        .val(state.id)
                        .text(state.name)
                        .appendTo(
                            $state
                        );
                }
            );
        })
        .fail(function () {
            $state
                .empty()
                .append(
                    $("<option>")
                        .val("")
                        .text(
                            "Unable to load"
                        )
                );
        })
        .always(function () {
            $state.prop(
                "disabled",
                false
            );
        });
    }
);
```

---

# 60. Modals and Older Bootstrap Projects

Older Bootstrap generations often used jQuery APIs for modal control.

Example:

```javascript
$("#invoiceModal").modal("show");
```

Hide:

```javascript
$("#invoiceModal").modal("hide");
```

Real example:

```javascript
$("#invoiceTable").on(
    "click",
    ".edit-btn",
    function () {
        const invoiceId =
            $(this).data("id");

        $("#invoiceId")
            .val(invoiceId);

        $("#invoiceModal")
            .modal("show");
    }
);
```

Important:

Different Bootstrap generations use different JavaScript APIs.

Always check the project's Bootstrap version.

---

# 61. Legacy jQuery APIs You May See

If you maintain old applications, you may see older styles.

---

## `.click()`

Legacy/common:

```javascript
$("#btn").click(function () {
});
```

Prefer:

```javascript
$("#btn").on(
    "click",
    function () {
    }
);
```

---

## `.bind()`

Legacy:

```javascript
$("#btn").bind(
    "click",
    handler
);
```

Prefer:

```javascript
$("#btn").on(
    "click",
    handler
);
```

---

## `.delegate()`

Legacy:

```javascript
$("#table").delegate(
    ".delete-btn",
    "click",
    handler
);
```

Prefer:

```javascript
$("#table").on(
    "click",
    ".delete-btn",
    handler
);
```

---

## `.live()`

Very old:

```javascript
$(".delete-btn").live(
    "click",
    handler
);
```

Modern jQuery replacement:

```javascript
$("#table").on(
    "click",
    ".delete-btn",
    handler
);
```

When reading a legacy system, learn what old code means before replacing it.

---

# 62. Performance Optimization

jQuery performance problems usually come from application design, not from one simple selector.

---

## 1. Cache Reused Elements

```javascript
const $table =
    $("#invoiceTable");
```

Reuse `$table`.

---

## 2. Use Scoped Selectors

Instead of:

```javascript
$(".amount")
```

when you only need one table:

```javascript
$("#invoiceTable")
    .find(".amount");
```

---

## 3. Use Event Delegation

Instead of thousands of individual handlers:

```javascript
$(".delete-btn")
    .on("click", handler);
```

use one delegated handler:

```javascript
$("#invoiceTable")
    .on(
        "click",
        ".delete-btn",
        handler
    );
```

---

## 4. Avoid Repeated DOM Updates

Poor:

```javascript
$.each(data, function (_, item) {
    $("#list").append(
        "<li>" + item.name + "</li>"
    );
});
```

Better:

```javascript
const fragment =
    document.createDocumentFragment();

$.each(data, function (_, item) {
    const li =
        document.createElement("li");

    li.textContent = item.name;

    fragment.appendChild(li);
});

$("#list")[0]
    .appendChild(fragment);
```

---

## 5. Debounce Frequent Events

Useful for:

- Search
- Resize
- Scroll
- Autocomplete

---

## 6. Avoid Duplicate Event Binding

Problem:

```javascript
function init() {
    $("#btn").on(
        "click",
        handler
    );
}

init();
init();
```

Now event may run twice.

Use namespaces and cleanup:

```javascript
$("#btn")
    .off(".invoice")
    .on(
        "click.invoice",
        handler
    );
```

---

# 63. Security

jQuery does not automatically make your application secure.

You must understand several risks.

---

## 63.1 XSS

Dangerous:

```javascript
$("#output")
    .html(userInput);
```

Safer:

```javascript
$("#output")
    .text(userInput);
```

---

## Safe Table Rendering

Unsafe:

```javascript
$("#table").append(
    "<tr><td>" +
    invoice.vendorName +
    "</td></tr>"
);
```

Safer:

```javascript
const $row =
    $("<tr>");

$("<td>")
    .text(invoice.vendorName)
    .appendTo($row);

$("#table").append($row);
```

---

## 63.2 Client-Side Validation Is Not Security

Even if JavaScript checks:

```javascript
if (amount > 0) {
    // allow
}
```

a user can bypass browser JavaScript.

The server must validate again.

---

## 63.3 Authorization Must Be Server-Side

Hiding a button:

```javascript
$(".admin-only").hide();
```

does not prevent someone from manually calling the API.

The backend must check permissions.

---

## 63.4 CSRF

Many backend frameworks require a CSRF token for state-changing requests.

Example:

```html
<meta
    name="csrf-token"
    content="TOKEN">
```

jQuery:

```javascript
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN":
            $("meta[name='csrf-token']")
                .attr("content")
    }
});
```

Exact header/token rules depend on backend framework.

---

# 64. Accessibility

Dynamic jQuery UI should still work for keyboard and assistive technology users.

Important habits:

- Use proper `<button>` elements for actions
- Use `<label>` with inputs
- Do not rely only on color
- Keep focus visible
- Update ARIA attributes
- Avoid turning random `<div>` elements into buttons without keyboard behavior

---

## Accessible Toggle

HTML:

```html
<button
    id="toggleMenu"
    aria-expanded="false"
    aria-controls="menu">
    Menu
</button>

<div
    id="menu"
    hidden>
</div>
```

jQuery:

```javascript
$("#toggleMenu").on(
    "click",
    function () {
        const expanded =
            $(this)
                .attr("aria-expanded") ===
            "true";

        $(this).attr(
            "aria-expanded",
            String(!expanded)
        );

        $("#menu")
            .prop("hidden", expanded);
    }
);
```

---

# 65. Error Handling

Do not only handle success.

Real applications need clear failure behavior.

---

## Central AJAX Error Helper

```javascript
function getAjaxErrorMessage(xhr) {
    if (
        xhr.responseJSON &&
        xhr.responseJSON.message
    ) {
        return xhr.responseJSON.message;
    }

    if (xhr.status === 0) {
        return "Network connection failed.";
    }

    if (xhr.status === 401) {
        return "Your session has expired.";
    }

    if (xhr.status === 403) {
        return "You do not have permission.";
    }

    if (xhr.status === 404) {
        return "Requested resource was not found.";
    }

    if (xhr.status >= 500) {
        return "Server error occurred.";
    }

    return "Unexpected error occurred.";
}
```

Usage:

```javascript
$.ajax({
    url: "/api/invoices/1"
})
.fail(function (xhr) {
    $("#message").text(
        getAjaxErrorMessage(xhr)
    );
});
```

---

# 66. Debugging

When jQuery code does not work, do not guess randomly.

Use a systematic approach.

---

## 1. Check Selector

```javascript
console.log(
    $("#invoiceTable").length
);
```

If result is:

```text
0
```

jQuery found nothing.

---

## 2. Print Object

```javascript
console.log(
    $("#invoiceTable")
);
```

---

## 3. Print Native Element

```javascript
console.log(
    $("#invoiceTable")[0]
);
```

---

## 4. Check Event

```javascript
$("#btn").on(
    "click",
    function () {
        console.log(
            "button clicked"
        );
    }
);
```

---

## 5. Use `debugger`

```javascript
debugger;
```

When DevTools is open, execution pauses there.

---

## 6. AJAX Debugging Checklist

Check Browser DevTools → Network:

```text
Request URL
HTTP method
Status code
Request payload
Query string
Request headers
Response headers
Response body
Timing
```

Also check server logs.

---

# 67. Common Beginner Mistakes

## Mistake 1: Forgetting `#`

Wrong:

```javascript
$("invoiceNo")
```

This looks for an HTML tag named `<invoiceNo>`.

Correct:

```javascript
$("#invoiceNo")
```

---

## Mistake 2: Forgetting `.` for Class

Wrong:

```javascript
$("invoice-row")
```

Correct:

```javascript
$(".invoice-row")
```

---

## Mistake 3: Using `.text()` on Input

Wrong:

```javascript
$("#name").text();
```

Correct:

```javascript
$("#name").val();
```

---

## Mistake 4: Using `.attr("checked")`

Prefer:

```javascript
$("#terms")
    .prop("checked");
```

for current checkbox state.

---

## Mistake 5: Dynamic Button Event Does Not Work

Problem:

```javascript
$(".delete-btn")
    .on("click", handler);
```

when buttons are added later.

Fix:

```javascript
$("#table").on(
    "click",
    ".delete-btn",
    handler
);
```

---

## Mistake 6: Input Numbers Are Strings

```javascript
const a = $("#a").val();
const b = $("#b").val();

console.log(a + b);
```

If values are `"2"` and `"3"`, output may be:

```text
23
```

Correct:

```javascript
const a =
    Number($("#a").val()) || 0;

const b =
    Number($("#b").val()) || 0;

console.log(a + b);
```

---

## Mistake 7: Arrow Function with `this`

Problem:

```javascript
$(".btn").on(
    "click",
    () => {
        console.log(this);
    }
);
```

Use:

```javascript
$(".btn").on(
    "click",
    function () {
        console.log(this);
    }
);
```

---

## Mistake 8: Duplicate Events

Use:

```javascript
$("#btn")
    .off(".feature")
    .on(
        "click.feature",
        handler
    );
```

---

## Mistake 9: Unsafe `.html()`

Avoid:

```javascript
$("#result")
    .html(apiData.name);
```

Prefer:

```javascript
$("#result")
    .text(apiData.name);
```

---

## Mistake 10: Mixing Native DOM and jQuery APIs

Native:

```javascript
const element =
    document.getElementById("name");
```

Wrong:

```javascript
element.val();
```

Correct native:

```javascript
element.value;
```

or wrap:

```javascript
$(element).val();
```

---

# 68. jQuery to Vanilla JavaScript Mapping

Understanding equivalents makes you a stronger developer.

| Task | jQuery | Vanilla JavaScript |
|---|---|---|
| Select one | `$("#id")` | `document.querySelector("#id")` |
| Select many | `$(".row")` | `document.querySelectorAll(".row")` |
| Get input | `$("#x").val()` | `document.querySelector("#x").value` |
| Set text | `$("#x").text("A")` | `element.textContent = "A"` |
| Set HTML | `$("#x").html("<b>A</b>")` | `element.innerHTML = "<b>A</b>"` |
| Add class | `.addClass("a")` | `.classList.add("a")` |
| Remove class | `.removeClass("a")` | `.classList.remove("a")` |
| Toggle class | `.toggleClass("a")` | `.classList.toggle("a")` |
| Event | `.on("click", fn)` | `.addEventListener("click", fn)` |
| Closest | `.closest("tr")` | `.closest("tr")` |
| Fetch data | `$.ajax()` | `fetch()` |

---

# 69. Real-World Invoice Screen Example

This example combines many concepts.

HTML concept:

```html
<form id="invoiceForm">

    <input
        id="invoiceNo"
        name="invoice_no">

    <select
        id="vendorId"
        name="vendor_id">
    </select>

    <table id="lineItems">
        <tbody></tbody>
    </table>

    <button
        type="button"
        id="addLine">
        Add Item
    </button>

    <div>
        Total:
        <span id="grandTotal">
            0.00
        </span>
    </div>

    <button
        type="submit"
        id="saveBtn">
        Save Invoice
    </button>

    <div id="message"></div>

</form>
```

---

## Step 1: Initialization

```javascript
$(function () {
    InvoicePage.init();
});
```

---

## Step 2: Page Module

```javascript
const InvoicePage = {
    init: function () {
        this.cacheElements();
        this.bindEvents();
        this.addLine();
    },

    cacheElements: function () {
        this.$form =
            $("#invoiceForm");

        this.$table =
            $("#lineItems");

        this.$total =
            $("#grandTotal");

        this.$saveButton =
            $("#saveBtn");

        this.$message =
            $("#message");
    },

    bindEvents: function () {
        this.$form.on(
            "submit.invoice",
            this.handleSubmit.bind(this)
        );

        $("#addLine").on(
            "click.invoice",
            this.addLine.bind(this)
        );

        this.$table.on(
            "click.invoice",
            ".remove-line",
            this.removeLine.bind(this)
        );

        this.$table.on(
            "input.invoice",
            ".qty, .price",
            this.calculateTotal.bind(this)
        );
    },

    addLine: function () {
        const $row =
            $("<tr>")
                .addClass("item-row");

        $("<td>")
            .append(
                $("<input>", {
                    type: "text",
                    class:
                        "description"
                })
            )
            .appendTo($row);

        $("<td>")
            .append(
                $("<input>", {
                    type: "number",
                    class: "qty",
                    value: 1,
                    min: 0
                })
            )
            .appendTo($row);

        $("<td>")
            .append(
                $("<input>", {
                    type: "number",
                    class: "price",
                    value: 0,
                    min: 0
                })
            )
            .appendTo($row);

        $("<td>")
            .append(
                $("<button>", {
                    type: "button",
                    class:
                        "remove-line",
                    text: "Remove"
                })
            )
            .appendTo($row);

        this.$table
            .find("tbody")
            .append($row);
    },

    removeLine: function (event) {
        $(event.currentTarget)
            .closest(".item-row")
            .remove();

        this.calculateTotal();
    },

    calculateTotal: function () {
        let total = 0;

        this.$table
            .find(".item-row")
            .each(function () {
                const $row =
                    $(this);

                const qty =
                    Number(
                        $row
                            .find(".qty")
                            .val()
                    ) || 0;

                const price =
                    Number(
                        $row
                            .find(".price")
                            .val()
                    ) || 0;

                total +=
                    qty * price;
            });

        this.$total
            .text(
                total.toFixed(2)
            );
    },

    buildPayload: function () {
        const payload = {
            invoiceNo:
                $.trim(
                    $("#invoiceNo").val()
                ),

            vendorId:
                $("#vendorId").val(),

            items: []
        };

        this.$table
            .find(".item-row")
            .each(function () {
                const $row =
                    $(this);

                payload.items.push({
                    description:
                        $.trim(
                            $row
                                .find(
                                    ".description"
                                )
                                .val()
                        ),

                    quantity:
                        Number(
                            $row
                                .find(".qty")
                                .val()
                        ) || 0,

                    price:
                        Number(
                            $row
                                .find(".price")
                                .val()
                        ) || 0
                });
            });

        return payload;
    },

    validate: function (payload) {
        if (!payload.invoiceNo) {
            this.showMessage(
                "Invoice number is required."
            );

            return false;
        }

        if (!payload.vendorId) {
            this.showMessage(
                "Vendor is required."
            );

            return false;
        }

        if (
            payload.items.length === 0
        ) {
            this.showMessage(
                "At least one line item is required."
            );

            return false;
        }

        return true;
    },

    handleSubmit: function (event) {
        event.preventDefault();

        const payload =
            this.buildPayload();

        if (
            !this.validate(payload)
        ) {
            return;
        }

        this.save(payload);
    },

    save: function (payload) {
        const self = this;

        this.setLoading(true);

        $.ajax({
            url: "/api/invoices",
            method: "POST",
            contentType:
                "application/json",
            dataType: "json",
            data:
                JSON.stringify(
                    payload
                )
        })
        .done(function () {
            self.showMessage(
                "Invoice saved successfully."
            );
        })
        .fail(function (xhr) {
            self.showMessage(
                getAjaxErrorMessage(xhr)
            );
        })
        .always(function () {
            self.setLoading(false);
        });
    },

    setLoading: function (loading) {
        this.$saveButton
            .prop(
                "disabled",
                loading
            )
            .text(
                loading
                    ? "Saving..."
                    : "Save Invoice"
            );
    },

    showMessage: function (message) {
        this.$message
            .text(message);
    }
};
```

---

## What You Learned from This Example

This one screen uses:

- Document ready
- Selectors
- Cached jQuery objects
- Event namespaces
- Event delegation
- Traversal
- Dynamic DOM creation
- `.val()`
- `.text()`
- Number conversion
- Arrays
- Object building
- Validation
- AJAX
- JSON
- Loading state
- Error handling
- Reusable page architecture

If you can understand this example clearly, you have learned a large part of real-world jQuery development.

---

# 70. Recommended Project Structure

Avoid one giant JavaScript file.

Example:

```text
assets/
└── js/
    ├── core/
    │   ├── ajax.js
    │   ├── errors.js
    │   ├── validation.js
    │   └── utils.js
    │
    ├── components/
    │   ├── modal.js
    │   ├── table.js
    │   └── dropdown.js
    │
    ├── modules/
    │   ├── invoice.js
    │   ├── vendor.js
    │   ├── workflow.js
    │   └── dashboard.js
    │
    └── app.js
```

Why?

```text
core
    → shared technical helpers

components
    → reusable UI behavior

modules
    → page/business features

app.js
    → application initialization
```

---

# 71. Mini Projects

Build projects in this order.

---

## Project 1: Todo List

Features:

- Add task
- Delete task
- Mark complete
- Filter complete/pending
- Save to localStorage

Concepts:

- Selectors
- Events
- DOM
- Delegation
- Arrays
- JSON

---

## Project 2: Employee Directory

Features:

- Load employees through AJAX
- Search
- Department filter
- Active/inactive filter
- Pagination
- Details modal

Concepts:

- AJAX
- JSON
- Tables
- Filters
- Delegation
- Rendering

---

## Project 3: Invoice Entry Screen

Features:

- Invoice details
- Vendor dropdown
- Dynamic line items
- Quantity/price
- Tax
- Total
- Validation
- AJAX save

This is one of the best jQuery practice projects.

---

## Project 4: Approval Workflow

Features:

- Pending records
- Approve
- Reject
- Comments
- Status
- AJAX refresh
- Permission-based UI

---

## Project 5: OCR Review Screen

Features:

- PDF/image preview
- Extracted key/value fields
- Editable OCR result
- Confidence values
- Dynamic line items
- Save corrections
- AJAX

---

# 72. Interview Questions

## Beginner

1. What is jQuery?
2. Why was jQuery created?
3. What does `$()` mean?
4. What is a jQuery object?
5. What is document ready?
6. How do ID selectors work?
7. How do class selectors work?
8. `.text()` vs `.html()`?
9. `.text()` vs `.val()`?
10. `.attr()` vs `.prop()`?
11. `.parent()` vs `.closest()`?
12. `.children()` vs `.find()`?
13. What does `.addClass()` do?
14. What does `.toggleClass()` do?
15. What is event handling?

---

## Intermediate

16. What is event bubbling?
17. What is event delegation?
18. Why use `.on()`?
19. How do dynamically created elements get events?
20. What is `event.currentTarget`?
21. Why can arrow functions cause `this` issues in jQuery handlers?
22. `.remove()` vs `.detach()`?
23. `.each()` vs `$.each()`?
24. What does `.serialize()` do?
25. How do you send JSON with `$.ajax()`?
26. Why use `processData: false` for FormData?
27. Why use `contentType: false` for FormData?
28. How do you handle AJAX errors?
29. How do you prevent duplicate form submissions?
30. What is AJAX request cancellation?

---

## Advanced

31. What is jqXHR?
32. What is jQuery Deferred?
33. How does `$.when()` work?
34. What are event namespaces?
35. How do you clean up event handlers?
36. How would you structure a large jQuery application?
37. How would you optimize a table with thousands of rows?
38. How would you prevent XSS?
39. Why is hiding a button not authorization?
40. How would you migrate jQuery to modern JavaScript?
41. How do you avoid stale autocomplete responses?
42. How do jQuery plugin lifecycles work?
43. What causes duplicate plugin initialization?
44. What can cause memory leaks in long-running jQuery pages?
45. When should a project avoid adding jQuery?

---

# 73. Practice Exercises

## Exercise 1 — Read Input

HTML:

```html
<input
    id="email"
    value="a@example.com">
```

Write jQuery to print the value.

Solution:

```javascript
console.log(
    $("#email").val()
);
```

---

## Exercise 2 — Disable Button

```html
<button id="saveBtn">
    Save
</button>
```

Solution:

```javascript
$("#saveBtn")
    .prop("disabled", true);
```

---

## Exercise 3 — Hide Cancelled Rows

```html
<tr data-status="cancelled">
```

Solution:

```javascript
$("tr[data-status='cancelled']")
    .hide();
```

---

## Exercise 4 — Get Checked IDs

```javascript
const ids =
    $("input[name='ids[]']:checked")
        .map(function () {
            return this.value;
        })
        .get();
```

---

## Exercise 5 — Find Row from Button

```javascript
$(".edit-btn").on(
    "click",
    function () {
        const $row =
            $(this).closest("tr");

        console.log($row);
    }
);
```

---

## Exercise 6 — Dynamic Delete

```javascript
$("#table").on(
    "click",
    ".delete-btn",
    function () {
        $(this)
            .closest("tr")
            .remove();
    }
);
```

---

## Exercise 7 — GET API

```javascript
$.ajax({
    url: "/api/users",
    method: "GET"
})
.done(function (response) {
    console.log(response);
});
```

---

## Exercise 8 — POST JSON

```javascript
$.ajax({
    url: "/api/users",
    method: "POST",
    contentType:
        "application/json",
    data:
        JSON.stringify({
            name: "John"
        })
});
```

---

## Exercise 9 — Build Dynamic Invoice Rows

Requirements:

- Add row
- Remove row
- Quantity
- Price
- Calculate line total
- Calculate grand total

Try to build it without copying the master example.

---

## Exercise 10 — AJAX Search

Requirements:

- Minimum 2 characters
- 300 ms debounce
- AJAX
- Abort old request
- Safe result rendering
- Loading message
- Empty state
- Error state

---

# 74. Mastery Checklist

## Fundamentals

- [ ] Understand what jQuery is
- [ ] Understand why it was created
- [ ] Understand `$`
- [ ] Understand jQuery objects
- [ ] Understand native DOM vs jQuery objects
- [ ] Understand document ready

## Selectors

- [ ] ID
- [ ] Class
- [ ] Tag
- [ ] Descendant
- [ ] Direct child
- [ ] Attribute
- [ ] Checked
- [ ] Selected
- [ ] Disabled
- [ ] Scoped selectors

## Traversal

- [ ] `.parent()`
- [ ] `.parents()`
- [ ] `.closest()`
- [ ] `.children()`
- [ ] `.find()`
- [ ] `.siblings()`
- [ ] `.next()`
- [ ] `.prev()`
- [ ] `.filter()`
- [ ] `.not()`
- [ ] `.is()`
- [ ] `.eq()`

## DOM Manipulation

- [ ] `.text()`
- [ ] `.html()`
- [ ] `.val()`
- [ ] `.attr()`
- [ ] `.prop()`
- [ ] `.data()`
- [ ] `.addClass()`
- [ ] `.removeClass()`
- [ ] `.toggleClass()`
- [ ] `.append()`
- [ ] `.prepend()`
- [ ] `.before()`
- [ ] `.after()`
- [ ] `.remove()`
- [ ] `.empty()`
- [ ] `.detach()`
- [ ] `.clone()`

## Events

- [ ] `.on()`
- [ ] `.off()`
- [ ] Click
- [ ] Change
- [ ] Input
- [ ] Submit
- [ ] Focus
- [ ] Blur
- [ ] Keyboard
- [ ] Event object
- [ ] `preventDefault()`
- [ ] `stopPropagation()`
- [ ] `this`
- [ ] `event.target`
- [ ] `event.currentTarget`
- [ ] Bubbling
- [ ] Delegation
- [ ] Event namespaces

## Forms

- [ ] Input values
- [ ] Checkboxes
- [ ] Radios
- [ ] Select
- [ ] Validation
- [ ] `.serialize()`
- [ ] `.serializeArray()`
- [ ] FormData

## AJAX

- [ ] GET
- [ ] POST
- [ ] PUT/PATCH
- [ ] DELETE
- [ ] Query parameters
- [ ] JSON request
- [ ] JSON response
- [ ] `.done()`
- [ ] `.fail()`
- [ ] `.always()`
- [ ] Loading states
- [ ] Error states
- [ ] File upload
- [ ] Abort requests
- [ ] Global AJAX events
- [ ] `$.ajaxSetup()`
- [ ] CSRF

## Advanced

- [ ] `.each()`
- [ ] `.map()`
- [ ] Chaining
- [ ] `$.extend()`
- [ ] `$.when()`
- [ ] Deferred
- [ ] `noConflict()`
- [ ] Plugins
- [ ] Page modules
- [ ] State objects
- [ ] Performance
- [ ] Security
- [ ] Accessibility
- [ ] Debugging
- [ ] Legacy APIs
- [ ] jQuery → vanilla migration

---

# 75. Quick Reference

## Select

```javascript
$("#id")
$(".class")
$("tag")
$("[data-id]")
$("#table tbody tr")
```

## Content

```javascript
.text()
.html()
.val()
```

## Attributes / Properties

```javascript
.attr()
.removeAttr()
.prop()
```

## Classes

```javascript
.addClass()
.removeClass()
.toggleClass()
.hasClass()
```

## Traversal

```javascript
.parent()
.parents()
.closest()
.children()
.find()
.siblings()
.next()
.prev()
```

## DOM

```javascript
.append()
.prepend()
.before()
.after()
.remove()
.empty()
.detach()
.clone()
```

## Events

```javascript
.on()
.off()
.trigger()
```

## Forms

```javascript
.val()
.serialize()
.serializeArray()
```

## AJAX

```javascript
$.ajax()
$.get()
$.post()
$.getJSON()
```

## Async Result

```javascript
.done()
.fail()
.always()
```

## Effects

```javascript
.show()
.hide()
.toggle()
.fadeIn()
.fadeOut()
.fadeToggle()
.slideUp()
.slideDown()
.slideToggle()
.animate()
.stop()
```

---

# 76. Final Learning Roadmap

Use this order.

```text
STEP 1
JavaScript basics
    ↓

STEP 2
HTML DOM basics
    ↓

STEP 3
jQuery syntax and $
    ↓

STEP 4
Selectors
    ↓

STEP 5
DOM traversal
    ↓

STEP 6
Text / HTML / values
    ↓

STEP 7
Attributes / properties
    ↓

STEP 8
Classes and CSS
    ↓

STEP 9
Events
    ↓

STEP 10
Event bubbling + delegation
    ↓

STEP 11
Forms
    ↓

STEP 12
Dynamic DOM
    ↓

STEP 13
AJAX + JSON
    ↓

STEP 14
Tables and real business screens
    ↓

STEP 15
Reusable modules
    ↓

STEP 16
Performance
    ↓

STEP 17
Security
    ↓

STEP 18
Legacy maintenance
    ↓

STEP 19
jQuery → modern JavaScript conversion
```

---

# Final Advice

Do not try to memorize every method.

Instead, become very strong at these patterns:

```text
1. Select an element
2. Read its value
3. Change its state
4. Listen for an event
5. Find related DOM elements
6. Handle dynamic elements
7. Build form data
8. Send an AJAX request
9. Safely render returned data
10. Handle loading and errors
11. Keep code modular
12. Protect against XSS and permission mistakes
```

A developer who deeply understands these patterns can learn unfamiliar jQuery methods quickly when needed.

---

# Recommended Revision Method

For every topic, ask yourself:

```text
What problem does this solve?

What is the syntax?

What type of object does it return?

Can it work with multiple elements?

Will it work with dynamic elements?

Could this code create a security problem?

Is there a cleaner modern JavaScript alternative?

Would this be easy for another developer to maintain?
```

---

# Master Challenge

Build a complete **Invoice Processing Portal** containing:

## Invoice Listing

- Search
- Status filter
- Vendor filter
- Date filter
- Pagination
- Select all
- Bulk action
- Export

## Invoice Entry

- Invoice number
- Vendor
- Date
- PO/Non-PO type
- Dynamic line items
- Quantity
- Price
- Tax
- Total
- Validation
- Save via AJAX

## Workflow

- Approve
- Reject
- Comments
- Approval status
- History
- Role-based UI

## OCR Review

- Document preview
- Extracted key/value result
- Editable values
- Line item mapping
- Confidence display
- Save correction
- Status update

## Technical Rules

Use:

- Scoped jQuery selectors
- Cached jQuery objects
- Event delegation
- Event namespaces
- Safe `.text()` rendering
- Reusable API functions
- Central error handling
- Loading states
- Debounce
- AJAX cancellation
- Modular JavaScript files
- Server-side validation
- Server-side authorization

If you can build this cleanly and explain why each part exists, you have reached strong practical jQuery proficiency.

---

## End of Guide

This file is intended to become a living reference.

Whenever you solve a real problem, add:

```text
Problem
Cause
Solution
Code
What I learned
How to prevent it next time
```

That turns this guide from a tutorial into your own jQuery engineering handbook.
