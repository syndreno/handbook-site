# Laravel Livewire Master Handbook

> **A beginner-to-advanced learning guide for building dynamic Laravel applications with Livewire.**
>
> Target: **Laravel + Livewire 4.x**. This revision was checked against **Livewire 4.3.5**, the current stable release in August 2026. Livewire 4 requires Laravel 10 or later and PHP 8.1 or later. Use the newest compatible 4.x patch in a real project, and consult the upgrade guide before adopting newer minor releases.
>
> The examples intentionally use normal Laravel concepts such as Eloquent, validation, authorization, queues, storage, pagination, routing, Blade, and testing so you learn Livewire as part of Laravel rather than as an isolated library.

---

## How to Use This Handbook

Livewire is easiest to learn in layers. Do not try to memorize every directive at once.

1. Learn the mental model: **PHP component + Blade template + Livewire request**.
2. Learn properties, actions, and `wire:model`.
3. Build forms and CRUD screens.
4. Learn validation, pagination, uploads, events, and nesting.
5. Learn loading states, URL state, navigation, Alpine integration, and JavaScript.
6. Learn performance features such as lazy loading, deferred components, islands, computed properties, and request isolation.
7. Learn security, authorization, testing, and production patterns.

Throughout this handbook you will see four labels:

- **Idea** — what the feature means.
- **Use when** — practical situations where it is useful.
- **Avoid when** — common misuse.
- **Example** — Laravel-focused code.

---

# Table of Contents

1. [What Is Livewire?](#1-what-is-livewire)
2. [Where Livewire Fits in Laravel](#2-where-livewire-fits-in-laravel)
3. [Livewire Mental Model](#3-livewire-mental-model)
4. [Installation](#4-installation)
5. [Component Formats in Livewire 4](#5-component-formats-in-livewire-4)
6. [Your First Livewire Component](#6-your-first-livewire-component)
7. [Rendering Components](#7-rendering-components)
8. [Public Properties and Component State](#8-public-properties-and-component-state)
9. [Actions](#9-actions)
10. [wire:model — Two-Way Binding](#10-wiremodel--two-way-binding)
11. [Forms](#11-forms)
12. [Validation](#12-validation)
13. [Form Objects](#13-form-objects)
14. [Lifecycle Hooks](#14-lifecycle-hooks)
15. [Computed Properties](#15-computed-properties)
16. [Events](#16-events)
17. [Parent and Child Components](#17-parent-and-child-components)
18. [Reactive and Modelable Properties](#18-reactive-and-modelable-properties)
19. [Pagination](#19-pagination)
20. [Search, Sort, and Filtering](#20-search-sort-and-filtering)
21. [URL Query Parameters](#21-url-query-parameters)
22. [File Uploads](#22-file-uploads)
23. [File Downloads](#23-file-downloads)
24. [Loading States](#24-loading-states)
25. [Dirty State](#25-dirty-state)
26. [Confirmation](#26-confirmation)
27. [Polling](#27-polling)
28. [Lazy and Deferred Loading](#28-lazy-and-deferred-loading)
29. [Islands](#29-islands)
30. [Navigation and SPA-Like Pages](#30-navigation-and-spa-like-pages)
31. [Alpine.js Integration](#31-alpinejs-integration)
32. [JavaScript and `$wire`](#32-javascript-and-wire)
33. [Using Third-Party JavaScript Plugins](#33-using-third-party-javascript-plugins)
34. [All Important `wire:*` Directives](#34-all-important-wire-directives)
35. [Important Livewire PHP Attributes](#35-important-livewire-php-attributes)
36. [Blade Directives](#36-blade-directives)
37. [Routing Livewire Pages](#37-routing-livewire-pages)
38. [Authorization and Security](#38-authorization-and-security)
39. [Hydration and Dehydration](#39-hydration-and-dehydration)
40. [Morphing and `wire:key`](#40-morphing-and-wirekey)
41. [Performance Optimization](#41-performance-optimization)
42. [Database and Eloquent Best Practices](#42-database-and-eloquent-best-practices)
43. [Testing Livewire](#43-testing-livewire)
44. [Error Handling](#44-error-handling)
45. [Production and Deployment](#45-production-and-deployment)
46. [Common Real-World Scenarios](#46-common-real-world-scenarios)
47. [Complete Laravel + Livewire CRUD Project](#47-complete-laravel--livewire-crud-project)
48. [Recommended Project Architecture](#48-recommended-project-architecture)
49. [Common Mistakes](#49-common-mistakes)
50. [Troubleshooting Guide](#50-troubleshooting-guide)
51. [Livewire vs Blade vs Alpine vs Vue/React](#51-livewire-vs-blade-vs-alpine-vs-vuereact)
52. [Learning Roadmap](#52-learning-roadmap)
53. [Interview Questions](#53-interview-questions)
54. [Cheat Sheet](#54-cheat-sheet)
55. [Glossary](#55-glossary)
56. [Official References](#56-official-references)

---

# 1. What Is Livewire?

Livewire is a framework for Laravel that lets you create interactive user interfaces using primarily **PHP and Blade**.

Without Livewire, a typical interactive feature might require:

1. HTML form.
2. JavaScript event listener.
3. AJAX/fetch request.
4. API/controller endpoint.
5. JSON response.
6. JavaScript DOM update.

With Livewire, you can often express the same behavior with a PHP property, a PHP method, and a Blade directive.

```php
public int $count = 0;

public function increment(): void
{
    $this->count++;
}
```

```blade
<div>
    <h1>{{ $count }}</h1>
    <button wire:click="increment">+</button>
</div>
```

When the button is clicked, Livewire calls the PHP method and updates only the necessary DOM.

## What Livewire is good for

- Admin panels
- CRUD screens
- Forms
- Search interfaces
- Filters
- Tables
- Dashboards
- Modals
- Wizards
- Settings pages
- File uploads
- Approval workflows
- Internal enterprise applications
- Small and medium interactive web applications

## What Livewire does not mean

Livewire does **not** mean JavaScript disappears completely.

For many features PHP is enough, but JavaScript is still useful for:

- charts
- rich text editors
- drag and drop
- maps
- browser APIs
- animation
- very complex client-side state

Livewire works especially well with **Alpine.js** for these smaller frontend interactions.

---

# 2. Where Livewire Fits in Laravel

Think of Laravel as the complete backend/web framework and Livewire as a reactive UI layer that uses Laravel directly.

```text
Browser
   |
   | Initial HTTP request
   v
Laravel Route
   |
   v
Livewire Component
   |
   +---- Eloquent Models
   +---- Services
   +---- Policies
   +---- Validation
   +---- Queues
   +---- Cache
   +---- Storage
   |
   v
Blade HTML
   |
   v
Browser

Later interaction:

Browser
   |
   | Livewire request
   v
Livewire Component Method
   |
   v
Updated component state
   |
   v
DOM diff / morph
```

Livewire does not replace Laravel services such as:

- Eloquent
- policies
- middleware
- validation
- queues
- events
- service classes
- repositories, if your project uses them
- cache
- filesystem

It simply gives the frontend an easy way to invoke server-side behavior and synchronize state.

---

# 3. Livewire Mental Model

A Livewire component has two important parts:

1. **State** — public PHP properties.
2. **Behavior** — public PHP methods/actions.

The Blade template displays that state and connects browser events to methods.

Example:

```php
class ProductSearch extends Component
{
    public string $search = '';

    public function clearSearch(): void
    {
        $this->search = '';
    }
}
```

```blade
<div>
    <input wire:model.live.debounce.300ms="search">

    <button wire:click="clearSearch">Clear</button>

    <p>Searching for: {{ $search }}</p>
</div>
```

## Important mental rule

Every Livewire request should be treated like a normal server request.

That means:

- Never trust a public property just because you originally set it.
- Re-authorize sensitive actions.
- Validate user input.
- Do not expose secrets in public component state.
- Keep expensive database queries under control.

---

# 4. Installation

Livewire 4 is installed inside an existing Laravel project.

Before installing, confirm the application meets the minimum requirements:

```bash
php -v
php artisan --version
composer --version
```

You need PHP 8.1+, Laravel 10+, and a working Composer installation. Then require the current compatible 4.x release:

```bash
composer require livewire/livewire:^4.0
```

Composer updates `composer.json` and `composer.lock`, downloads Livewire, and registers the package through Laravel package discovery. Commit both Composer files so every environment installs the same dependency set.

Create the default Livewire layout if needed:

```bash
php artisan livewire:layout
```

A basic layout typically contains:

```blade
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? config('app.name') }}</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body>
    {{ $slot }}

    @livewireScripts
</body>
</html>
```

## Installation check

Ask Composer which version was installed:

```bash
composer show livewire/livewire
```

The output should identify `livewire/livewire`, show a `4.x` version, and list its dependency constraints. Next, confirm that Laravel discovered the package.

Run:

```bash
php artisan list | grep livewire
```

On Windows PowerShell:

```powershell
php artisan list | Select-String livewire
```

You should see Livewire commands.

Finally, create and render the counter from Chapter 6. Seeing the initial count and observing it change without a full-page reload verifies the PHP package, layout assets, route, and browser runtime together.

---

# 5. Component Formats in Livewire 4

Livewire 4 supports three component styles.

## 5.1 Single-file components

This is the Livewire 4 default.

```bash
php artisan make:livewire counter
```

The PHP logic and Blade view can live together.

Example conceptually:

```blade
<?php

use Livewire\Component;

new class extends Component {
    public int $count = 0;

    public function increment(): void
    {
        $this->count++;
    }
};
?>

<div>
    <span>{{ $count }}</span>
    <button wire:click="increment">+</button>
</div>
```

### Best for

- new Livewire 4 applications
- small or medium components
- keeping template and behavior near each other

## 5.2 Multi-file components

```bash
php artisan make:livewire product-table --mfc
```

Use when the component grows and separate PHP, Blade, JavaScript, CSS, or tests improve maintainability.

### Best for

- complicated components
- substantial JavaScript
- large teams
- components with colocated tests

## 5.3 Class-based components

```bash
php artisan make:livewire ProductManager --class
```

Creates a familiar structure:

```text
app/Livewire/ProductManager.php
resources/views/livewire/product-manager.blade.php
```

This handbook uses many **class-based examples** because they make the Laravel architecture very explicit and are familiar to developers coming from Livewire 2/3. Livewire 4 fully supports them.

### PHP class

```php
<?php

namespace App\Livewire;

use Livewire\Component;

class ProductManager extends Component
{
    public function render()
    {
        return view('livewire.product-manager');
    }
}
```

### Blade view

```blade
<div>
    Product manager
</div>
```

---

# 6. Your First Livewire Component

Create a counter:

```bash
php artisan make:livewire Counter --class
```

## `app/Livewire/Counter.php`

```php
<?php

namespace App\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public int $count = 0;

    public function increment(): void
    {
        $this->count++;
    }

    public function decrement(): void
    {
        $this->count--;
    }

    public function resetCounter(): void
    {
        $this->count = 0;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
```

## `resources/views/livewire/counter.blade.php`

```blade
<div>
    <h2>Count: {{ $count }}</h2>

    <button wire:click="increment">Increment</button>
    <button wire:click="decrement">Decrement</button>
    <button wire:click="resetCounter">Reset</button>
</div>
```

Render it from Blade:

```blade
<livewire:counter />
```

### What happens

When `increment` is clicked:

1. Livewire catches the browser click.
2. It sends a request to Laravel.
3. Laravel restores the component state.
4. `increment()` runs.
5. Livewire re-renders the component.
6. The browser DOM is efficiently updated.

That basic cycle explains most Livewire behavior.

---

# 7. Rendering Components

## 7.1 Blade tag

```blade
<livewire:counter />
```

Nested component:

```blade
<livewire:orders.table />
```

## 7.2 Pass data to a component

```blade
<livewire:user-profile :user="$user" />
```

Component:

```php
use App\Models\User;

public User $user;
```

## 7.3 Pass primitive values

```blade
<livewire:status-badge status="approved" />
```

Or dynamic:

```blade
<livewire:status-badge :status="$invoice->status" />
```

## 7.4 Unique component keys

Inside loops, always think about identity:

```blade
@foreach ($orders as $order)
    <livewire:order-row
        :order="$order"
        :key="$order->id"
    />
@endforeach
```

Keys prevent Livewire from confusing one repeated element with another.

---

# 8. Public Properties and Component State

Public properties are the component's browser-synchronized state.

```php
public string $name = '';
public int $quantity = 1;
public bool $active = true;
public array $selectedIds = [];
```

They are automatically available in Blade:

```blade
<p>{{ $name }}</p>
<p>{{ $quantity }}</p>
```

## 8.1 Initialize state in `mount()`

```php
public function mount(int $productId): void
{
    $product = Product::findOrFail($productId);

    $this->name = $product->name;
    $this->quantity = $product->quantity;
}
```

Use `mount()` for initial component setup.

## 8.2 Typed properties

Prefer types where practical:

```php
public string $search = '';
public ?int $categoryId = null;
public bool $showModal = false;
```

Types make assumptions explicit and improve IDE support.

## 8.3 Do not store secrets in public properties

Bad:

```php
public string $apiSecret;
```

Better:

```php
public function sync(): void
{
    $secret = config('services.partner.secret');
    // use secret here
}
```

## 8.4 Do not assume an ID is safe

Bad:

```php
public int $invoiceId;

public function delete(): void
{
    Invoice::findOrFail($this->invoiceId)->delete();
}
```

A malicious user may attempt to manipulate component state.

Better:

```php
public function delete(int $invoiceId): void
{
    $invoice = Invoice::findOrFail($invoiceId);

    $this->authorize('delete', $invoice);

    $invoice->delete();
}
```

## 8.5 `#[Locked]`

For values that should not be modified from the client, Livewire provides `#[Locked]`.

```php
use Livewire\Attributes\Locked;

#[Locked]
public int $invoiceId;
```

`#[Locked]` is useful, but authorization is still important. Locking a property is not a substitute for business authorization.

---

# 9. Actions

Actions are component methods triggered by frontend interactions.

```php
public function save(): void
{
    // logic
}
```

```blade
<button wire:click="save">Save</button>
```

## 9.1 Pass parameters

```blade
<button wire:click="delete({{ $product->id }})">Delete</button>
```

```php
public function delete(int $id): void
{
    $product = Product::findOrFail($id);
    $this->authorize('delete', $product);
    $product->delete();
}
```

## 9.2 Useful built-in actions

Refresh:

```blade
<button wire:click="$refresh">Refresh</button>
```

Set property:

```blade
<button wire:click="$set('showModal', true)">Open</button>
```

Toggle:

```blade
<button wire:click="$toggle('showModal')">Toggle</button>
```

## 9.3 Keyboard modifiers

```blade
<input wire:keydown.enter="search">
```

```blade
<input wire:keydown.escape="$set('showModal', false)">
```

## 9.4 Prevent default behavior

Depending on the directive/event, modifiers can alter browser behavior.

```blade
<a href="/danger" wire:click.prevent="doSomething">Run</a>
```

For forms, `wire:submit` already behaves as a Livewire form submission.

## 9.5 Async actions

Livewire 4 can run suitable actions asynchronously.

```php
use Livewire\Attributes\Async;

#[Async]
public function logView(): void
{
    Activity::create([
        'user_id' => auth()->id(),
        'event' => 'product-viewed',
    ]);
}
```

Or per call:

```blade
<button wire:click.async="logView">Track</button>
```

### Use async for

- analytics
- logging
- side effects that do not affect visible component state
- triggering background work

### Avoid async for

```php
#[Async]
public function increment(): void
{
    $this->count++;
}
```

Parallel state mutations can create race conditions.

---

# 10. `wire:model` — Two-Way Binding

`wire:model` connects an input to a Livewire property.

```php
public string $email = '';
```

```blade
<input type="email" wire:model="email">
```

## 10.1 Default behavior

Modern Livewire avoids unnecessarily sending a request for every normal keystroke. State can be synchronized when another Livewire request occurs.

For immediate network updates use `.live`.

```blade
<input wire:model.live="search">
```

## 10.2 Debounce

For search boxes:

```blade
<input wire:model.live.debounce.300ms="search">
```

Use when users type continuously and you want to reduce request count.

## 10.3 Blur

```blade
<input wire:model.blur="email">
```

Useful for validation after the user leaves a field.

## 10.4 Change

```blade
<select wire:model.change="status">
    <option value="open">Open</option>
    <option value="closed">Closed</option>
</select>
```

## 10.5 Number conversion

```blade
<input type="number" wire:model.number="quantity">
```

## 10.6 Boolean values

```blade
<input type="checkbox" wire:model.boolean="active">
```

## 10.7 Nested array state

```php
public array $form = [
    'name' => '',
    'email' => '',
];
```

```blade
<input wire:model="form.name">
<input wire:model="form.email">
```

## 10.8 Checkbox arrays

```php
public array $roles = [];
```

```blade
<label>
    <input type="checkbox" value="admin" wire:model="roles">
    Admin
</label>

<label>
    <input type="checkbox" value="finance" wire:model="roles">
    Finance
</label>
```

## 10.9 Dependent dropdown example

```php
public ?int $countryId = null;
public ?int $stateId = null;

public function updatedCountryId(): void
{
    $this->stateId = null;
}

public function render()
{
    return view('livewire.address-form', [
        'countries' => Country::orderBy('name')->get(),
        'states' => $this->countryId
            ? State::where('country_id', $this->countryId)->orderBy('name')->get()
            : collect(),
    ]);
}
```

```blade
<select wire:model.live="countryId">
    <option value="">Select country</option>
    @foreach ($countries as $country)
        <option value="{{ $country->id }}">{{ $country->name }}</option>
    @endforeach
</select>

<select wire:model="stateId">
    <option value="">Select state</option>
    @foreach ($states as $state)
        <option value="{{ $state->id }}">{{ $state->name }}</option>
    @endforeach
</select>
```

---

# 11. Forms

Livewire forms normally use `wire:submit`.

```blade
<form wire:submit="save">
    <input wire:model="name">
    <input wire:model="price" type="number">

    <button type="submit">Save</button>
</form>
```

```php
public string $name = '';
public string $price = '';

public function save(): void
{
    $validated = $this->validate([
        'name' => ['required', 'string', 'max:150'],
        'price' => ['required', 'numeric', 'min:0'],
    ]);

    Product::create($validated);

    $this->reset(['name', 'price']);
}
```

`wire:submit="save"` prevents the normal browser submission, invokes `save()` on the server, and applies the returned DOM changes. The action validates before writing; the `Product` model must also allow only these fields through `$fillable` (or an equivalent guarded design).

## 11.1 Reset form

```php
$this->reset(['name', 'price']);
```

Reset validation errors:

```php
$this->resetValidation();
```

Reset a single validation error:

```php
$this->resetValidation('email');
```

## 11.2 Flash message

```php
session()->flash('success', 'Product created successfully.');
```

Blade:

```blade
@if (session()->has('success'))
    <div>{{ session('success') }}</div>
@endif
```

## 11.3 Save transactionally

For multi-table business actions:

```php
use Illuminate\Support\Facades\DB;

public function save(): void
{
    $validated = $this->validate();

    DB::transaction(function () use ($validated) {
        $order = Order::create([
            'customer_id' => $validated['customerId'],
        ]);

        foreach ($validated['items'] as $item) {
            $order->items()->create($item);
        }
    });
}
```

Livewire does not change normal Laravel database rules: use transactions where your business operation must be atomic.

---

# 12. Validation

Validation should be considered mandatory for user-controlled data.

## 12.1 Attribute validation

```php
use Livewire\Attributes\Validate;

#[Validate('required|min:3|max:150')]
public string $name = '';

#[Validate('required|numeric|min:0')]
public string $price = '';
```

```php
public function save(): void
{
    $validated = $this->validate();

    Product::create($validated);
}
```

Blade:

```blade
<input wire:model="name">
@error('name')
    <span>{{ $message }}</span>
@enderror
```

## 12.2 Traditional rules method

Useful for complex or dynamic validation.

```php
use Illuminate\Validation\Rule;

protected function rules(): array
{
    return [
        'name' => ['required', 'string', 'max:150'],
        'sku' => ['required', 'string', 'max:50', Rule::unique('products', 'sku')],
        'price' => ['required', 'numeric', 'min:0'],
    ];
}
```

## 12.3 Edit unique rule

```php
Rule::unique('products', 'sku')->ignore($this->productId)
```

## 12.4 Real-time validation

```blade
<input wire:model.live.blur="email">
```

With validation associated with the property, the user can receive feedback as the field syncs.

## 12.5 Validate one property

```php
$this->validateOnly('email');
```

## 12.6 Custom messages

```php
protected function messages(): array
{
    return [
        'name.required' => 'Please enter the product name.',
        'price.numeric' => 'Price must be a valid number.',
    ];
}
```

## 12.7 Security rule

Never rely only on frontend restrictions such as:

```html
<input max="100">
```

Still validate server side:

```php
'quantity' => ['required', 'integer', 'min:1', 'max:100']
```

---

# 13. Form Objects

Large forms can make components messy. Livewire form objects separate form state and validation from UI behavior.

Create one:

```bash
php artisan livewire:form ProductForm
```

Example:

```php
<?php

namespace App\Livewire\Forms;

use App\Models\Product;
use Livewire\Attributes\Validate;
use Livewire\Form;

class ProductForm extends Form
{
    public ?Product $product = null;

    #[Validate('required|string|max:150')]
    public string $name = '';

    #[Validate('required|numeric|min:0')]
    public string $price = '';

    public function setProduct(Product $product): void
    {
        $this->product = $product;
        $this->name = $product->name;
        $this->price = (string) $product->price;
    }

    public function store(): Product
    {
        $validated = $this->validate();

        return Product::create($validated);
    }

    public function update(): void
    {
        if ($this->product === null) {
            throw new \LogicException('Call setProduct() before update().');
        }

        $validated = $this->validate();
        $this->product->update($validated);
    }
}
```

Component:

```php
use App\Livewire\Forms\ProductForm;

public ProductForm $form;

public function save(): void
{
    $this->authorize('create', Product::class);

    $this->form->store();
    $this->form->reset();
}
```

Keep authorization in the component or a domain action that knows the current user. A form object organizes state and validation; it does not make an unauthorized create or update safe.

Blade:

```blade
<input wire:model="form.name">
<input wire:model="form.price">
```

## Use form objects when

- the form has many fields
- create/edit share logic
- the same form logic is needed in multiple components
- you want the component to focus on UI coordination

---

# 14. Lifecycle Hooks

Lifecycle hooks let you run code at specific moments in the component lifecycle.

## 14.1 `mount()`

Runs during initial component creation.

```php
public function mount(Product $product): void
{
    $this->product = $product;
}
```

Use for:

- initial database data
- route parameters
- default state

## 14.2 `boot()`

Useful for setup that may need to occur during Livewire requests.

Unlike `mount()`, `boot()` runs at the beginning of every request, including later Livewire updates. It is a good place to receive a request-scoped dependency into a protected/private property:

```php
use App\Services\TenantContext;

private TenantContext $tenantContext;

public function boot(TenantContext $tenantContext): void
{
    $this->tenantContext = $tenantContext;
}
```

Do not perform writes in `boot()`. It may run more often than a beginner expects.

## 14.3 `render()`

Returns the component view.

```php
public function render()
{
    return view('livewire.products', [
        'products' => Product::latest()->get(),
    ]);
}
```

Do not put side effects such as creating records in `render()`.

Bad:

```php
public function render()
{
    AuditLog::create(['event' => 'products-rendered']);

    return view('livewire.products');
}
```

Rendering can happen repeatedly.

## 14.4 `updating()` and `updated()`

```php
public function updating($property, $value): void
{
    // before update
}

public function updated($property, $value): void
{
    // after update
}
```

Property-specific hook:

```php
public function updatedSearch(): void
{
    $this->resetPage();
}
```

## 14.5 `hydrate()` and `dehydrate()`

Advanced hooks around reconstruction/serialization of component state.

Most applications do not need to use them directly, but understanding them helps explain Livewire's request model.

---

# 15. Computed Properties

Computed properties represent derived data.

```php
use Livewire\Attributes\Computed;

#[Computed]
public function total(): float
{
    return collect($this->items)->sum(
        fn ($item) => $item['qty'] * $item['price']
    );
}
```

Blade:

```blade
<p>Total: {{ $this->total }}</p>
```

## Use computed properties for

- totals
- filtered lists
- database results derived from filters
- expensive values used multiple times in the same request

Example:

```php
#[Computed]
public function orders()
{
    return Order::query()
        ->when($this->search, function ($query) {
            $query->where('invoice_no', 'like', "%{$this->search}%");
        })
        ->latest()
        ->get();
}
```

```blade
@foreach ($this->orders as $order)
    {{ $order->invoice_no }}
@endforeach
```

## Avoid duplicate queries

Bad:

```blade
{{ Order::where('status', 'open')->count() }}
{{ Order::where('status', 'open')->sum('amount') }}
```

Better: design a clear query/computed/service strategy and cache/memoize where appropriate.

---

# 16. Events

Events help components communicate without tightly coupling them.

## 16.1 Dispatch event

```php
$this->dispatch('product-created');
```

With data:

```php
$this->dispatch('product-created', productId: $product->id);
```

## 16.2 Listen in another component

```php
use Livewire\Attributes\On;

#[On('product-created')]
public function refreshProducts(): void
{
    // component can re-render or update state
}
```

With parameter:

```php
#[On('product-created')]
public function handleProductCreated(int $productId): void
{
    $this->selectedProductId = $productId;
}
```

## 16.3 Dispatch to a specific component

Target a component class when you know exactly which component should receive the event:

```php
use App\Livewire\ProductTable;

$this->dispatch('product-created', productId: $product->id)
    ->to(ProductTable::class);
```

Use `->self()` when only the current component instance should handle it:

```php
$this->dispatch('draft-saved')->self();
```

The listener still uses `#[On(...)]`. Targeting narrows delivery; it does not bypass validation or authorization in the receiving action.

## 16.4 Events and Alpine

Because Livewire events use browser events, Alpine can listen too.

```blade
<div x-on:product-created.window="console.log($event.detail)">
    ...
</div>
```

### Use events when

- sibling components need to communicate
- a modal should refresh a table after save
- a notification component should display success
- browser/Alpine code needs to react

### Avoid event overuse

If a parent can simply pass a value to a child, that is often clearer than creating a global event network.

---

# 17. Parent and Child Components

A large Livewire screen can be divided into smaller components.

Example:

```blade
<div>
    <livewire:order-filter />
    <livewire:order-table />
</div>
```

## Why nesting helps

- separation of concerns
- independent loading
- easier testing
- isolated updates

## Do not split everything

Ten tiny components can sometimes be harder to understand than one clear component.

Good component boundary:

```text
InvoicePage
├── InvoiceHeader
├── InvoiceLineItems
├── ApprovalTimeline
└── CommentPanel
```

Potentially excessive:

```text
InvoicePage
├── InvoiceNumber
├── InvoiceDate
├── VendorName
├── AmountText
├── StatusText
... 40 tiny components
```

---

# 18. Reactive and Modelable Properties

Livewire has attributes designed for parent-child state relationships.

## `#[Reactive]`

Use when a child needs to react to a value passed by its parent.

Concept:

```php
use Livewire\Attributes\Reactive;

#[Reactive]
public $items;
```

Useful for a child summary that should update when parent data changes.

## `#[Modelable]`

Allows a child component to participate in model-like binding from the parent.

This is useful for reusable custom input components.

Conceptual child:

```php
use Livewire\Attributes\Modelable;

#[Modelable]
public string $value = '';
```

Parent Blade:

```blade
<livewire:currency-input wire:model="amount" />
```

Use modelable components when you want reusable Livewire inputs that feel similar to normal HTML inputs.

---

# 19. Pagination

Livewire works with Laravel pagination.

```php
use Livewire\WithPagination;

class ProductTable extends Component
{
    use WithPagination;

    public function render()
    {
        return view('livewire.product-table', [
            'products' => Product::latest()->paginate(10),
        ]);
    }
}
```

Blade:

```blade
@foreach ($products as $product)
    <div>{{ $product->name }}</div>
@endforeach

{{ $products->links() }}
```

## Reset page after search changes

```php
public function updatedSearch(): void
{
    $this->resetPage();
}
```

Without this, a user on page 8 could search for a result set that has only one page and see an apparently empty table.

## Multiple paginators

Use named paginators when one component has more than one paginated collection.

```php
$products = Product::paginate(10, pageName: 'products-page');
$invoices = Invoice::paginate(10, pageName: 'invoices-page');
```

Pass the same name when controlling a paginator programmatically:

```php
$this->resetPage(pageName: 'products-page');
$this->nextPage(pageName: 'invoices-page');
```

The names become distinct query-string keys, so moving the invoice paginator does not move the product paginator.

---

# 20. Search, Sort, and Filtering

This pattern appears in almost every admin application.

```php
use Livewire\WithPagination;

class UserTable extends Component
{
    use WithPagination;

    public string $search = '';
    public string $status = '';
    public string $sortField = 'created_at';
    public string $sortDirection = 'desc';

    public function sortBy(string $field): void
    {
        $allowed = ['name', 'email', 'created_at'];

        abort_unless(in_array($field, $allowed, true), 400);

        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
    }

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedStatus(): void
    {
        $this->resetPage();
    }

    public function render()
    {
        $users = User::query()
            ->when($this->search, function ($query) {
                $query->where(function ($query) {
                    $query->where('name', 'like', "%{$this->search}%")
                        ->orWhere('email', 'like', "%{$this->search}%");
                });
            })
            ->when($this->status, fn ($query) => $query->where('status', $this->status))
            ->orderBy($this->sortField, $this->sortDirection)
            ->paginate(15);

        return view('livewire.user-table', compact('users'));
    }
}
```

Blade:

```blade
<div>
    <input
        wire:model.live.debounce.300ms="search"
        placeholder="Search users..."
    >

    <select wire:model.live="status">
        <option value="">All statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
    </select>

    <table>
        <thead>
            <tr>
                <th>
                    <button wire:click="sortBy('name')">Name</button>
                </th>
                <th>
                    <button wire:click="sortBy('email')">Email</button>
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
                <tr wire:key="user-{{ $user->id }}">
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {{ $users->links() }}
</div>
```

## Security lesson

Never directly trust a sort column supplied by the browser:

Bad:

```php
$query->orderBy($this->sortField);
```

unless `$sortField` is constrained to a safe allow-list.

---

# 21. URL Query Parameters

Filters are often more useful when they survive refreshes and can be shared by URL.

```php
use Livewire\Attributes\Url;

#[Url]
public string $search = '';

#[Url]
public string $status = '';
```

Possible URL:

```text
/products?search=laptop&status=active
```

## Good use cases

- search pages
- report filters
- selected tabs
- pagination-related state
- shareable dashboards

## Avoid putting sensitive values in URLs

Do not place:

- access tokens
- secrets
- passwords
- confidential values

in query-string state.

---

# 22. File Uploads

Use the `WithFileUploads` trait.

```php
use Illuminate\Support\Facades\Storage;
use Livewire\WithFileUploads;

class ProfilePhoto extends Component
{
    use WithFileUploads;

    public $photo;

    public function save(): void
    {
        $this->authorize('update', auth()->user());

        $this->validate([
            'photo' => ['required', 'image', 'max:2048'],
        ]);

        $path = $this->photo->store('profile-photos', 'public');

        auth()->user()->update([
            'profile_photo' => $path,
        ]);

        session()->flash('success', "Photo stored at {$path}.");
    }
}
```

`store()` returns the generated relative path, not a public URL. On a public disk, run `php artisan storage:link` once and generate URLs with `Storage::disk('public')->url($path)`. Never trust the original client filename; let Laravel generate the stored name unless a carefully sanitized business name is required.

Blade:

```blade
<form wire:submit="save">
    <input type="file" wire:model="photo">

    @error('photo')
        <span>{{ $message }}</span>
    @enderror

    <div wire:loading wire:target="photo">
        Uploading...
    </div>

    <button type="submit">Save</button>
</form>
```

## Image preview

Temporary previews can be used for image uploads where supported.

```blade
@if ($photo)
    <img src="{{ $photo->temporaryUrl() }}" width="150">
@endif
```

## Multiple files

```php
public array $documents = [];
```

```blade
<input type="file" wire:model="documents" multiple>
```

Validation:

```php
$this->validate([
    'documents' => ['required', 'array', 'max:5'],
    'documents.*' => ['file', 'mimes:pdf,jpg,jpeg,png', 'max:5120'],
]);
```

## Enterprise invoice upload scenario

```php
public $invoicePdf;

public function uploadInvoice(): void
{
    $this->authorize('create', Invoice::class);

    $this->validate([
        'invoicePdf' => [
            'required',
            'file',
            'mimes:pdf',
            'mimetypes:application/pdf',
            'max:10240',
        ],
    ]);

    $path = $this->invoicePdf->store('invoices/originals');

    ProcessInvoiceOcr::dispatch($path, auth()->id());

    session()->flash('success', 'Invoice uploaded and queued for processing.');
}
```

The important design point is that **Livewire handles the UI/upload interaction; the heavy OCR work should usually run in a queue job**, not inside a long blocking component action.

`mimes:pdf` validates the file type inferred from its contents, not merely the filename extension; `mimetypes` adds an explicit MIME requirement. For high-risk uploads, also scan the stored object, keep it on a private disk, and do not serve it until scanning succeeds.

---

# 23. File Downloads

A Livewire action can return a normal Laravel download response.

```php
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

public function downloadInvoice(int $invoiceId): StreamedResponse
{
    $invoice = Invoice::findOrFail($invoiceId);
    $this->authorize('view', $invoice);

    abort_unless(Storage::disk('local')->exists($invoice->file_path), 404);

    return Storage::disk('local')->download(
        $invoice->file_path,
        "invoice-{$invoice->id}.pdf"
    );
}
```

Blade:

```blade
<button wire:click="downloadInvoice({{ $invoice->id }})">
    Download
</button>
```

Always authorize file downloads. Knowing a file ID should never automatically grant access.

---

# 24. Loading States

Every server interaction has latency. A good Livewire interface tells users that work is happening.

```blade
<button wire:click="save">
    Save
</button>

<span wire:loading>
    Processing...
</span>
```

## Target one action

```blade
<span wire:loading wire:target="save">
    Saving...
</span>
```

## Disable button while saving

```blade
<button wire:click="save" wire:loading.attr="disabled">
    Save
</button>
```

## Loading for upload only

```blade
<div wire:loading wire:target="document">
    Uploading document...
</div>
```

## Good UX pattern

```blade
<button wire:click="approve" wire:loading.attr="disabled" wire:target="approve">
    <span wire:loading.remove wire:target="approve">Approve</span>
    <span wire:loading wire:target="approve">Approving...</span>
</button>
```

---

# 25. Dirty State

Dirty state tells you when browser-side form data differs from synchronized/server state.

```blade
<input wire:model="title">

<span wire:dirty wire:target="title">
    Unsaved changes
</span>
```

Useful for:

- settings pages
- document editors
- long forms
- autosave indicators

Example:

```blade
<button
    wire:dirty.attr="disabled"
    wire:target="title"
>
    Some dependent action
</button>
```

---

# 26. Confirmation

For destructive actions:

```blade
<button
    wire:click="delete({{ $product->id }})"
    wire:confirm="Are you sure you want to delete this product?"
>
    Delete
</button>
```

Confirmation improves UX but is not security. Server authorization must still be checked.

---

# 27. Polling

Polling refreshes data repeatedly.

```blade
<div wire:poll.5s>
    Last sync: {{ $lastSyncAt }}
</div>
```

Call an action:

```blade
<div wire:poll.10s="refreshStatus">
    ...
</div>
```

## Use polling for

- job status
- queue progress
- small operational dashboards
- periodically updated counts

## Avoid excessive polling

Bad architecture:

```text
1000 users × poll every second = unnecessary server load
```

For high-frequency real-time systems consider broadcasting/WebSockets or a different architecture.

## OCR processing status scenario

```php
public int $invoiceId;
public string $status = 'queued';

public function refreshStatus(): void
{
    $invoice = Invoice::findOrFail($this->invoiceId);
    $this->authorize('view', $invoice);

    $this->status = $invoice->processing_status;
}
```

```blade
<div wire:poll.3s="refreshStatus">
    OCR status: {{ $status }}
</div>
```

---

# 28. Lazy and Deferred Loading

Livewire 4 provides multiple strategies for expensive components.

## Lazy loading

Use when a component can wait until it becomes visible.

Concept:

```php
use Livewire\Attributes\Lazy;

#[Lazy]
class ExpensiveReport extends Component
{
    public function render()
    {
        return view('livewire.expensive-report', [
            'report' => Report::latest()->first(),
        ]);
    }
}
```

Or instantiate lazily where supported:

```blade
<livewire:expensive-report lazy />
```

### Good for

- below-the-fold dashboard widgets
- large tables not immediately visible
- tabs that users may never open

## Deferred loading

`#[Defer]` loads the component after the initial page finishes loading, rather than waiting for it to enter the viewport.

Concept:

```php
use Livewire\Attributes\Defer;

#[Defer]
class RevenueWidget extends Component
{
    public function render()
    {
        return view('livewire.revenue-widget', [
            'revenue' => Order::paid()->sum('total'),
        ]);
    }
}
```

### Good for

- expensive widget visible immediately
- data that should appear soon but should not block the page shell

## Lazy vs Defer

```text
Lazy   -> load when visible
Defer  -> load after initial page load
```

## Placeholder

Provide a skeleton/loading placeholder so the page does not jump visually.

For a class-based component, return HTML or a Blade view from `placeholder()`:

```php
public function placeholder()
{
    return view('livewire.placeholders.report');
}
```

`resources/views/livewire/placeholders/report.blade.php`:

```blade
<div aria-busy="true">Loading report...</div>
```

The placeholder and the final component must use the same root element type. For single-file and multi-file components, use the `@placeholder` block shown in the next chapter instead.

---

# 29. Islands

Islands are a Livewire 4 performance feature that lets part of a component update independently without extracting that part into a separate child component.

```blade
<div>
    <h1>Dashboard</h1>

    @island
        <section>
            <h2>Revenue</h2>
            <p>{{ $this->revenue }}</p>
            <button wire:click="$refresh">Refresh revenue</button>
        </section>
    @endisland

    <section>
        Other dashboard content...
    </section>
</div>
```

Only the island needs to re-render when its scoped action occurs.

## Named island

```blade
@island(name: 'totals')
    <div>{{ $this->totals }}</div>
@endisland

<button wire:click="$refresh" wire:island="totals">
    Refresh totals
</button>
```

## Lazy island

```blade
@island(lazy: true)
    @placeholder
        <div>Loading report...</div>
    @endplaceholder

    <div>{{ $this->expensiveReport }}</div>
@endisland
```

## Why islands matter

Suppose one component has:

- filters
- a chart
- a large table
- summary totals

Without careful boundaries, one small interaction may cause too much rendering/query work. Islands let you isolate expensive regions while keeping the code conceptually inside one component.

---

# 30. Navigation and SPA-Like Pages

Livewire can enhance links using `wire:navigate`.

```blade
<a href="/products" wire:navigate>Products</a>
```

This can make page transitions feel more SPA-like while still using server-driven Laravel pages.

## Active navigation

`wire:current` adds classes when the link matches the current URL:

```blade
<nav>
    <a href="/" wire:navigate wire:current.exact="font-bold">
        Dashboard
    </a>
    <a href="/products" wire:navigate wire:current="font-bold">
        Products
    </a>
</nav>
```

Matching is partial by default, so `/products` also matches `/products/42`. Use `.exact` when only the exact path should be active. Livewire also adds `data-current` to matching `wire:navigate` links, which can be styled directly in CSS.

## Persist UI across navigation

`@persist` can keep selected UI from being destroyed/recreated during Livewire navigation.

Typical uses:

- audio player
- persistent sidebar state
- global toolbar

Do not use persistent UI as a replacement for proper application state management; use it when preserving actual DOM state is useful.

---

# 31. Alpine.js Integration

Livewire and Alpine are designed to work together.

Use Livewire for server state and Alpine for lightweight browser-only state.

Example modal:

```blade
<div x-data="{ open: false }">
    <button x-on:click="open = true">Open</button>

    <div x-show="open">
        <input wire:model="name">

        <button wire:click="save" x-on:click="open = false">
            Save
        </button>
    </div>
</div>
```

## `$wire` in Alpine

```blade
<button x-on:click="$wire.save()">
    Save
</button>
```

Read property:

```blade
<span x-text="$wire.name"></span>
```

Set property:

```blade
<button x-on:click="$wire.name = 'Shoeb'">
    Set name
</button>
```

## Entanglement

Livewire and Alpine state can be linked where appropriate. Use this carefully; do not entangle large complex objects unless there is a real need.

## Rule of thumb

```text
Needs database / authorization / Laravel logic? -> Livewire
Pure browser visual interaction?              -> Alpine
Complex client application state?             -> Consider a JS framework
```

---

# 32. JavaScript and `$wire`

Livewire exposes a JavaScript interface to the component.

Inside a component script, `$wire` can call server methods and access state.

Concept:

```html
<script>
    async function saveFromJavascript() {
        await $wire.save();
    }
</script>
```

Refresh:

```js
$wire.$refresh();
```

Call method:

```js
await $wire.generateReport();
```

## Dispatch browser event from PHP

```php
$this->dispatch('invoice-approved', invoiceId: $invoice->id);
```

Listen in JavaScript/Alpine:

```blade
<div x-on:invoice-approved.window="console.log($event.detail.invoiceId)">
</div>
```

## Execute JavaScript from component

Use `$this->js()` after a server action when code must run after its response:

```php
public function save(): void
{
    $validated = $this->validate();
    Product::create($validated);

    $this->js("document.getElementById('product-name').focus()");
}
```

Use `#[Js]` for a method whose returned JavaScript executes entirely in the browser, as shown in Chapter 35. Keep authorization and business rules on the server.

---

# 33. Using Third-Party JavaScript Plugins

Some JavaScript libraries directly modify DOM elements. Livewire's DOM morphing can conflict with them.

Use `wire:ignore` when Livewire should leave a DOM region alone.

```blade
<div wire:ignore>
    <select id="select2-country">
        <option value="">Choose a country</option>
        <option value="IN">India</option>
        <option value="US">United States</option>
    </select>
</div>
```

Then synchronize the selected value back to Livewire using JavaScript.

Concept:

```js
$('#select2-country').on('change', function () {
    $wire.$set('countryId', this.value);
});
```

## Common libraries needing care

- Select2
- TinyMCE
- CKEditor
- Quill
- Flatpickr
- DataTables
- chart libraries
- map libraries

## Rule

If a plugin owns the DOM subtree, let it own that subtree and explicitly synchronize the data with Livewire.

---

# 34. All Important `wire:*` Directives

Livewire 4 contains a broad directive set. The following section is intended as a practical reference.

## `wire:bind`

Reactively bind an HTML attribute to component/client state.

```blade
<button wire:bind:disabled="isArchived">Delete</button>
```

Useful when the attribute should react instantly without waiting for a full server render.

## `wire:click`

Call an action from a click.

```blade
<button wire:click="save">Save</button>
```

## `wire:submit`

Handle form submission.

```blade
<form wire:submit="save">
    <input wire:model="name">
    <button type="submit">Save</button>
</form>
```

## `wire:model`

Bind an input to component state.

```blade
<input wire:model="email">
```

Common modifiers:

```blade
wire:model.live
wire:model.live.debounce.300ms
wire:model.blur
wire:model.change
wire:model.number
wire:model.boolean
```

## `wire:loading`

Show or alter UI while a request is active.

```blade
<span wire:loading>Loading...</span>
```

## `wire:target`

Narrow directives such as loading/dirty to a particular action or property.

```blade
<span wire:loading wire:target="save">Saving...</span>
```

## `wire:navigate`

Use Livewire navigation behavior for links.

```blade
<a href="/dashboard" wire:navigate>Dashboard</a>
```

## `wire:current`

Add CSS classes to a link whose `href` matches the current URL.

```blade
<a href="/orders" wire:navigate wire:current="font-bold text-blue-700">
    Orders
</a>
```

Use `wire:current.exact` for exact-path matching.

## `wire:cloak`

Hide Livewire-dependent content until Livewire initializes, reducing flashes of uninitialized UI.

```blade
<div wire:cloak>
    Livewire is ready.
</div>
```

## `wire:dirty`

Show UI when state has unsynchronized/changed values.

```blade
<span wire:dirty wire:target="title">Unsaved</span>
```

## `wire:confirm`

Ask for confirmation before running an action.

```blade
<button wire:click="delete" wire:confirm="Delete this item?">
    Delete
</button>
```

## `wire:transition`

Name a region that participates in the browser's native View Transitions API when a Livewire action changes it.

```blade
<div wire:transition="wizard-content">
    Step {{ $step }}
</div>
```

Useful for:

- dropdowns
- alerts
- modals
- conditional panels

## `wire:init`

Trigger an action after the component initializes.

```blade
<div wire:init="loadData">
    {{ $loaded ? 'Data loaded' : 'Loading data' }}
</div>
```

Use when initial HTML can render before secondary data is loaded.

## `wire:intersect`

Trigger behavior when an element intersects the viewport.

Useful for:

- analytics
- infinite loading
- delayed content

Example concept:

```blade
<div wire:intersect="loadMore"></div>
```

## `wire:poll`

Repeat an action or refresh periodically.

```blade
<div wire:poll.10s="refreshStatus">
    Status: {{ $status }}
</div>
```

## `wire:offline`

Show/change content based on connection state.

```blade
<div wire:offline>
    You are offline.
</div>
```

## `wire:ignore`

Tell Livewire not to morph a DOM subtree.

```blade
<div wire:ignore>
    <!-- third-party JS plugin -->
</div>
```

## `wire:ref`

Reference an element for Livewire/JavaScript interaction.

Use for component-local element access where appropriate.

## `wire:replace`

Prefer replacement behavior for a DOM region rather than normal fine-grained morphing.

Useful when a subtree is difficult or unnecessary to morph.

## `wire:show`

Control element visibility based on state.

Concept:

```blade
<div wire:show="showDetails">
    Details...
</div>
```

## `wire:sort`

Livewire 4 supports sortable interfaces through the `wire:sort` directive family.

Use for:

- Kanban ordering
- priority lists
- menu ordering
- task lists

Always validate and authorize the resulting order on the server.

## `wire:stream`

Stream incremental content to an existing element while an action is running.

Useful for:

- AI/token-like output
- progress text
- long text generation

Do not confuse streaming with queue-based background processing; long-running business work should still be designed carefully.

## `wire:text`

Bind/update an element's text from reactive state.

```blade
<span wire:text="search.length + ' characters'"></span>
```

The expression is evaluated reactively in the browser, so the text can change without a server round trip or DOM morph. Treat the expression as client-visible UI logic, not a place for secrets or authorization.

## `wire:key`

Though commonly thought of separately, unique keys are critical for repeatable DOM elements.

```blade
@foreach ($items as $item)
    <div wire:key="item-{{ $item->id }}">
        {{ $item->name }}
    </div>
@endforeach
```

---

# 35. Important Livewire PHP Attributes

Livewire 4 uses PHP attributes extensively.

## `#[Async]`

Run a suitable action in parallel.

Use for side effects, not UI-state mutations that can race.

## `#[Computed]`

Create derived/memoized-per-request component data.

```php
#[Computed]
public function total(): float
{
    return $this->items->sum(
        fn ($item) => $item->quantity * $item->unit_price
    );
}
```

## `#[Defer]`

Load a component after initial page load.

## `#[Isolate]`

Allow a component request to be isolated so a slow component does not block other bundled component work.

Good for:

- expensive widgets
- independent pollers
- slow APIs

## `#[Js]`

Mark a PHP method whose returned JavaScript should execute in the browser without a server request:

```php
use Livewire\Attributes\Js;

#[Js]
public function clearDraft(): string
{
    return <<<'JS'
        $wire.title = ''
        $wire.body = ''
    JS;
}
```

Call it with `$wire.clearDraft()` from Alpine or component JavaScript. The PHP method is read as a JavaScript definition; it is not executed as a server action on each call.

## `#[Json]`

Mark an action as a JSON endpoint whose return value is delivered directly to JavaScript:

```php
use Livewire\Attributes\Json;

#[Json]
public function searchProducts(string $query)
{
    validator(['query' => $query], [
        'query' => ['required', 'string', 'min:2', 'max:100'],
    ])->validate();

    return Product::query()
        ->select(['id', 'name'])
        ->where('name', 'like', "%{$query}%")
        ->limit(10)
        ->get();
}
```

```js
const products = await $wire.searchProducts('chair');
```

JSON actions skip rendering and run asynchronously. Validation failures reject the JavaScript promise with status `422` and structured errors instead of populating the normal component error bag. Select only data the caller is authorized to see.

## `#[Layout]`

Select a layout for a page component.

Concept:

```php
#[Layout('layouts.admin')]
class UsersPage extends Component
{
}
```

## `#[Lazy]`

Lazy-load a component.

## `#[Locked]`

Prevent client-side mutation of a public property.

```php
#[Locked]
public int $userId;
```

## `#[Modelable]`

Make a child property bindable through `wire:model` from a parent.

## `#[On]`

Listen for events.

```php
#[On('order-approved')]
public function refreshOrder(): void
{
    $this->order->refresh();
}
```

## `#[Reactive]`

Make a child property reactive to a value coming from the parent.

## `#[Renderless]`

Mark an action as not requiring a component re-render where appropriate.

Useful for side-effect actions that do not change visible state.

## `#[Session]`

Persist suitable component state in the session.

Potential use:

- remembered filters
- selected tab

Do not store huge or sensitive objects unnecessarily.

## `#[Title]`

Set page title metadata for page components.

## `#[Transition]`

Configure View Transition behavior for an action:

```php
use Livewire\Attributes\Transition;

#[Transition(type: 'forward')]
public function next(): void
{
    $this->step++;
}

#[Transition(skip: true)]
public function resetWizard(): void
{
    $this->step = 1;
}
```

The `type` can be targeted from CSS; `skip: true` disables the transition for that action.

## `#[Url]`

Persist a property in the query string.

```php
#[Url]
public string $search = '';
```

## `#[Validate]`

Attach validation rules to a property.

```php
#[Validate('required|email')]
public string $email = '';
```

---

# 36. Blade Directives

## `@island`

Create an isolated rendering region inside a component.

## `@placeholder`

Define placeholder UI for lazy/deferred content.

```blade
@placeholder
    <div class="skeleton">Loading...</div>
@endplaceholder
```

## `@persist`

Preserve a DOM region across Livewire navigation.

## `@teleport`

Render a piece of component markup elsewhere in the DOM.

Useful for modals that should be moved near `<body>` rather than remain inside deeply nested markup.

Concept:

```blade
@teleport('body')
    <div class="modal">...</div>
@endteleport
```

---

# 37. Routing Livewire Pages

Livewire 4 supports full-page components.

Example:

```php
use Illuminate\Support\Facades\Route;

Route::livewire('/products', 'pages::products.index');
```

## Route parameters

```php
Route::livewire('/products/{id}', 'pages::products.show');
```

Component:

```php
public int $productId;

public function mount(int $id): void
{
    $this->productId = $id;
}
```

## Route model binding

```php
Route::livewire('/products/{product}', 'pages::products.show');
```

Accept the model in `mount()` just as you would in a controller:

```php
use App\Models\Product;

public Product $product;

public function mount(Product $product): void
{
    $this->authorize('view', $product);
    $this->product = $product;
}
```

Laravel resolves `{product}` by its route key and returns `404` if it does not exist. Binding proves the record exists; the explicit policy check proves the current user may view it.

## Middleware

Livewire page routes remain Laravel routes, so use normal middleware:

```php
Route::middleware(['auth'])->group(function () {
    Route::livewire('/admin/products', 'pages::admin.products.index');
});
```

---

# 38. Authorization and Security

This is one of the most important Livewire chapters.

## 38.1 Browser input is untrusted

The browser can potentially manipulate:

- IDs
- quantities
- status values
- action parameters
- public properties

Never assume a value is safe because your UI only provides certain buttons.

## 38.2 Authorization example

```php
public function approve(int $invoiceId): void
{
    $invoice = Invoice::findOrFail($invoiceId);

    $this->authorize('approve', $invoice);

    $invoice->update([
        'status' => 'approved',
        'approved_by' => auth()->id(),
    ]);
}
```

## 38.3 Validate action parameters

Suppose a user can change order priority.

Bad:

```php
public function updatePriority(int $id, string $priority): void
{
    Order::findOrFail($id)->update(['priority' => $priority]);
}
```

Better:

```php
public function updatePriority(int $id, string $priority): void
{
    abort_unless(in_array($priority, ['low', 'medium', 'high'], true), 422);

    $order = Order::findOrFail($id);
    $this->authorize('update', $order);

    $order->update(['priority' => $priority]);
}
```

## 38.4 Mass assignment

Do not blindly persist arbitrary public state.

Bad:

```php
$user->update($this->form);
```

if `$this->form` contains uncontrolled fields.

Better:

```php
$validated = $this->validate([
    'form.name' => ['required', 'string', 'max:100'],
    'form.email' => ['required', 'email'],
]);

$user->update([
    'name' => $validated['form']['name'],
    'email' => $validated['form']['email'],
]);
```

## 38.5 XSS

Blade escapes output by default:

```blade
{{ $comment }}
```

Do not use unescaped output unless the HTML is trusted/sanitized:

```blade
{!! $comment !!}
```

## 38.6 Authorization belongs server side

Hiding a button is UX:

```blade
@can('delete', $product)
    <button wire:click="delete({{ $product->id }})">Delete</button>
@endcan
```

But the action must still authorize:

```php
$this->authorize('delete', $product);
```

## 38.7 Keep components small enough to reason about

A 2000-line Livewire component containing SQL, authorization, business rules, external API calls, and presentation logic becomes difficult to audit.

Move domain logic to Laravel service/action classes where appropriate.

---

# 39. Hydration and Dehydration

Understanding hydration is important for advanced Livewire debugging.

After the initial page request, the PHP component object does not simply live forever on the server.

Conceptually:

```text
Request 1
PHP component created
      |
      v
Render HTML
      |
      v
State serialized (dehydrated)
      |
      v
Browser

Next interaction
Browser sends component snapshot/state
      |
      v
State reconstructed (hydrated)
      |
      v
PHP method executes
      |
      v
Render again
```

This explains why:

- public properties need supported serializable types
- private runtime values should not be expected to persist automatically
- security cannot depend on a value merely having been created on the server once

## Bad assumption

```php
private $importantService;
```

and expecting the same object instance to remain alive between requests.

Instead use Laravel's service container or resolve dependencies during the request lifecycle.

---

# 40. Morphing and `wire:key`

Livewire does not usually replace the entire page. It compares old and new HTML and morphs the DOM.

This preserves useful browser state where possible.

## Why `wire:key` matters

Imagine:

```blade
@foreach ($tasks as $task)
    <div>
        <input value="{{ $task->title }}">
    </div>
@endforeach
```

If rows are inserted, removed, or reordered, Livewire needs reliable identity.

Better:

```blade
@foreach ($tasks as $task)
    <div wire:key="task-{{ $task->id }}">
        <input value="{{ $task->title }}">
    </div>
@endforeach
```

## Symptoms of key problems

- wrong input keeps focus/value
- a row updates the wrong item
- child component state appears swapped
- DOM behaves strangely after reorder/delete

Use stable unique IDs, not random values that change every render.

Bad:

```blade
wire:key="{{ Str::uuid() }}"
```

That destroys the concept of stable identity.

---

# 41. Performance Optimization

Livewire performance is mainly about avoiding unnecessary server work and unnecessary network/render work.

## 41.1 Avoid N+1 queries

Bad:

```blade
@foreach ($orders as $order)
    {{ $order->vendor->name }}
@endforeach
```

if `vendor` is not eager-loaded.

Better:

```php
Order::with('vendor')->paginate(20);
```

## 41.2 Paginate large datasets

Bad:

```php
Product::all();
```

for 100,000 products.

Better:

```php
Product::query()->paginate(25);
```

## 41.3 Debounce text searches

```blade
<input wire:model.live.debounce.300ms="search">
```

## 41.4 Avoid expensive work in every render

Bad:

```php
public function render()
{
    $report = ExternalApi::downloadHugeReport();

    return view('livewire.report', ['report' => $report]);
}
```

Better options:

- queue a job
- cache results
- use computed properties
- use lazy/deferred components
- use islands
- move expensive integration to a service

## 41.5 Use `#[Renderless]` for suitable side effects

If an action does not affect visible component state, avoiding unnecessary render work can help.

## 41.6 Use `#[Isolate]` for independent slow components

Especially useful when multiple components are making independent requests.

## 41.7 Use `#[Async]` only for safe parallel side effects

Do not introduce state races just to make requests faster.

## 41.8 Queue genuinely long work

Example:

```php
public function generateReport(): void
{
    GenerateMonthlyReport::dispatch(auth()->id(), $this->month);

    $this->dispatch('report-queued');
}
```

Then poll or broadcast status rather than keeping a request open for minutes.

## 41.9 Cache expensive read-only data

```php
$count = Cache::remember(
    'dashboard.open-orders',
    now()->addMinute(),
    fn () => Order::where('status', 'open')->count()
);
```

Invalidate cache intentionally when business data changes.

## 41.10 Index database columns

Livewire cannot fix slow SQL.

If you repeatedly filter by:

```sql
status
vendor_id
created_at
invoice_no
```

review indexes and query plans.

---

# 42. Database and Eloquent Best Practices

## Query in the component when simple

Fine:

```php
$products = Product::latest()->paginate(10);
```

## Move complex domain logic out

If saving an invoice requires:

- updating 5 tables
- tax calculations
- posting ledger entries
- queueing SAP integration
- sending notifications
- recording audit history

create a service/action class.

Example:

```php
public function approve(int $invoiceId, ApproveInvoice $service): void
{
    $invoice = Invoice::findOrFail($invoiceId);
    $this->authorize('approve', $invoice);

    $service->execute($invoice, auth()->user());

    $this->dispatch('invoice-approved');
}
```

Service:

```php
class ApproveInvoice
{
    public function execute(Invoice $invoice, User $approver): void
    {
        DB::transaction(function () use ($invoice, $approver) {
            $invoice->update([
                'status' => 'approved',
                'approved_by' => $approver->id,
            ]);

            ApprovalHistory::create([
                'invoice_id' => $invoice->id,
                'user_id' => $approver->id,
                'action' => 'approved',
            ]);
        });
    }
}
```

This architecture makes Livewire a **delivery/UI layer**, not the home of every business rule.

---

# 43. Testing Livewire

Livewire components can be tested with Laravel's testing tools and Livewire's test utilities. Livewire 4 documentation recommends Pest, while PHPUnit remains usable.

## 43.1 Basic component test

```php
use Livewire\Livewire;
use App\Livewire\Counter;

it('increments the counter', function () {
    Livewire::test(Counter::class)
        ->assertSet('count', 0)
        ->call('increment')
        ->assertSet('count', 1)
        ->assertSee('Count: 1');
});
```

## 43.2 Validation test

```php
it('requires a product name', function () {
    Livewire::test(ProductForm::class)
        ->set('name', '')
        ->call('save')
        ->assertHasErrors(['name' => 'required']);
});
```

## 43.3 Database test

```php
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('creates a product', function () {
    Livewire::test(CreateProduct::class)
        ->set('name', 'Keyboard')
        ->set('price', '2500')
        ->call('save')
        ->assertHasNoErrors();

    $this->assertDatabaseHas('products', [
        'name' => 'Keyboard',
    ]);
});
```

## 43.4 Authorization test

```php
it('prevents unauthorized deletion', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();

    Livewire::actingAs($user)
        ->test(ProductTable::class)
        ->call('delete', $product->id)
        ->assertForbidden();
});
```

## 43.5 Event test

```php
Livewire::test(CreateProduct::class)
    ->set('name', 'Mouse')
    ->set('price', 500)
    ->call('save')
    ->assertDispatched('product-created');
```

## 43.6 Redirect test

```php
Livewire::test(LoginForm::class)
    ->set('email', 'user@example.com')
    ->set('password', 'password')
    ->call('login')
    ->assertRedirect('/dashboard');
```

## 43.7 File upload test

Use Laravel's fake uploads and storage.

```php
Storage::fake('public');

$file = UploadedFile::fake()->image('avatar.jpg');

Livewire::test(ProfilePhoto::class)
    ->set('photo', $file)
    ->call('save')
    ->assertHasNoErrors();
```

## What to test

High-value tests include:

- component renders
- validation rules
- authorization
- database changes
- events
- redirects
- file behavior
- business-critical workflows

Do not test Livewire internals. Test your application's observable behavior.

---

# 44. Error Handling

## Simple exception handling

```php
public function sync(): void
{
    try {
        $this->syncService->run();
        session()->flash('success', 'Sync completed.');
    } catch (PartnerApiException $e) {
        report($e);
        $this->addError('sync', 'Partner system is currently unavailable.');
    }
}
```

Blade:

```blade
@error('sync')
    <div>{{ $message }}</div>
@enderror
```

## Do not reveal internal errors to users

Bad:

```php
$this->error = $e->getMessage();
```

if the exception may contain:

- SQL text
- server path
- token
- upstream endpoint details

Better:

```php
report($e);
$this->addError('general', 'Something went wrong. Please try again.');
```

---

# 45. Production and Deployment

Livewire is a Laravel package, so normal Laravel production practices still apply.

## Production checklist

- `APP_ENV=production`
- `APP_DEBUG=false`
- correct HTTPS configuration
- queue workers running
- scheduler running if required
- storage writable
- cache configured
- database indexes reviewed
- Laravel logs monitored
- authorization policies tested
- upload size limits aligned across PHP/web server/application
- deployment clears/rebuilds appropriate caches

Typical commands may include:

```bash
php artisan optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Use commands appropriate for your application and deployment strategy.

## File upload limit reminder

A Livewire validation rule of 10 MB does not help if PHP or the reverse proxy only accepts 2 MB. Check the complete chain:

```text
Browser
 -> Web server/reverse proxy
 -> PHP upload limits
 -> Laravel/Livewire validation
 -> Storage
```

---

# 46. Common Real-World Scenarios

This chapter gives reusable patterns rather than isolated syntax.

## Scenario 1: Live search

```php
public string $search = '';

public function render()
{
    return view('livewire.employee-search', [
        'employees' => Employee::query()
            ->when($this->search, fn ($q) =>
                $q->where('name', 'like', "%{$this->search}%")
            )
            ->limit(20)
            ->get(),
    ]);
}
```

```blade
<input wire:model.live.debounce.300ms="search" placeholder="Employee name">
```

### Use when

- user lookup
- vendor lookup
- invoice lookup
- product search

---

## Scenario 2: Inline status toggle

```php
public function toggleActive(int $id): void
{
    $user = User::findOrFail($id);
    $this->authorize('update', $user);

    $user->update([
        'active' => ! $user->active,
    ]);
}
```

```blade
<button wire:click="toggleActive({{ $user->id }})">
    {{ $user->active ? 'Deactivate' : 'Activate' }}
</button>
```

---

## Scenario 3: Approval workflow

```php
public function approve(int $requestId): void
{
    $request = PurchaseRequest::findOrFail($requestId);
    $this->authorize('approve', $request);

    app(ApprovePurchaseRequest::class)->execute($request, auth()->user());

    $this->dispatch('purchase-request-approved', requestId: $request->id);
}
```

UI:

```blade
<button
    wire:click="approve({{ $request->id }})"
    wire:confirm="Approve this request?"
    wire:loading.attr="disabled"
    wire:target="approve({{ $request->id }})"
>
    Approve
</button>
```

---

## Scenario 4: Dynamic invoice line items

```php
public array $items = [];

public function mount(): void
{
    $this->addItem();
}

public function addItem(): void
{
    $this->items[] = [
        'description' => '',
        'qty' => 1,
        'price' => 0,
    ];
}

public function removeItem(int $index): void
{
    unset($this->items[$index]);
    $this->items = array_values($this->items);
}
```

```blade
@foreach ($items as $index => $item)
    <div wire:key="invoice-item-{{ $index }}">
        <input wire:model="items.{{ $index }}.description">
        <input type="number" wire:model="items.{{ $index }}.qty">
        <input type="number" wire:model="items.{{ $index }}.price">

        <button type="button" wire:click="removeItem({{ $index }})">
            Remove
        </button>
    </div>
@endforeach

<button type="button" wire:click="addItem">Add Item</button>
```

For persisted rows, use stable database IDs or generated local UUIDs rather than array indexes as keys when rows can be reordered heavily.

---

## Scenario 5: Autosave

```php
public string $notes = '';

public function updatedNotes(): void
{
    $this->authorize('update', $this->invoice);

    $this->validateOnly('notes', [
        'notes' => ['nullable', 'string', 'max:5000'],
    ]);

    $this->invoice->update([
        'notes' => $this->notes,
    ]);
}
```

```blade
<textarea wire:model.live.debounce.1000ms="notes"></textarea>
<span wire:dirty wire:target="notes">Unsaved...</span>
```

### Caution

Autosave generates repeated writes. Use it where the UX benefit justifies it and choose a sensible debounce.

---

## Scenario 6: Multi-step wizard

```php
public int $step = 1;

public string $companyName = '';
public string $gstNo = '';
public string $contactEmail = '';

public function next(): void
{
    if ($this->step === 1) {
        $this->validate([
            'companyName' => ['required', 'max:150'],
            'gstNo' => ['required'],
        ]);
    }

    if ($this->step === 2) {
        $this->validate([
            'contactEmail' => ['required', 'email'],
        ]);
    }

    $this->step++;
}

public function previous(): void
{
    $this->step = max(1, $this->step - 1);
}
```

Blade:

```blade
<div>
    @if ($step === 1)
        <input wire:model="companyName">
        <input wire:model="gstNo">
    @elseif ($step === 2)
        <input wire:model="contactEmail">
    @else
        Review details...
    @endif

    @if ($step > 1)
        <button type="button" wire:click="previous">Back</button>
    @endif

    <button type="button" wire:click="next">Next</button>
</div>
```

---

## Scenario 7: Bulk selection

```php
public array $selected = [];

public function archiveSelected(): void
{
    $ids = array_map('intval', $this->selected);

    $orders = Order::whereKey($ids)->get();

    foreach ($orders as $order) {
        $this->authorize('update', $order);
    }

    Order::whereKey($ids)->update(['archived' => true]);

    $this->selected = [];
}
```

```blade
@foreach ($orders as $order)
    <input
        type="checkbox"
        value="{{ $order->id }}"
        wire:model="selected"
    >
@endforeach

<button wire:click="archiveSelected">
    Archive selected
</button>
```

---

## Scenario 8: Modal edit form

Component:

```php
public bool $showModal = false;
public ?int $editingId = null;
public string $name = '';

public function edit(int $id): void
{
    $product = Product::findOrFail($id);
    $this->authorize('update', $product);

    $this->editingId = $product->id;
    $this->name = $product->name;
    $this->showModal = true;
}

public function closeModal(): void
{
    $this->reset(['showModal', 'editingId', 'name']);
    $this->resetValidation();
}
```

Blade:

```blade
@if ($showModal)
    <div class="modal">
        <input wire:model="name">
        <button wire:click="save">Save</button>
        <button wire:click="closeModal">Cancel</button>
    </div>
@endif
```

For richer visual-only modal behavior, combine Livewire with Alpine.

---

## Scenario 9: Poll a queued job

```php
public string $jobStatus = 'pending';

public function refreshJob(): void
{
    $reportRequest = ReportRequest::findOrFail($this->requestId);
    $this->authorize('view', $reportRequest);

    $this->jobStatus = $reportRequest->status;
}
```

```blade
<div wire:poll.5s="refreshJob">
    Status: {{ $jobStatus }}
</div>
```

Stop or reduce polling once the job reaches a terminal status in your application logic/UI.

---

## Scenario 10: Dashboard with expensive sections

Architecture:

```text
Dashboard page
├── immediate shell
├── lightweight counts
├── deferred revenue widget
├── lazy audit history
└── isolated auto-refresh status widget
```

Use:

- `#[Defer]` for expensive content visible near the top
- `#[Lazy]` for content below the fold
- `#[Isolate]` for independent slow/polling widgets
- Islands for isolated regions inside a larger component

---

# 47. Complete Laravel + Livewire CRUD Project

We will build a simple **Product Management** screen containing:

- create
- edit
- delete
- validation
- search
- category filter
- sorting
- pagination
- loading state
- confirmation
- flash message
- policy authorization
- a locked server-controlled edit identifier

This example uses a class-based component because the PHP/Blade separation is easy for beginners to inspect.

## 47.1 Create Laravel model and migration

```bash
php artisan make:model Product -m
```

Migration:

```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('sku')->unique();
    $table->string('category')->nullable();
    $table->decimal('price', 12, 2);
    $table->unsignedInteger('stock')->default(0);
    $table->boolean('active')->default(true);
    $table->timestamps();

    $table->index(['active', 'category']);
});
```

Run:

```bash
php artisan migrate
```

Model:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'category',
        'price',
        'stock',
        'active',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'active' => 'boolean',
        ];
    }
}
```

Generate a policy:

```bash
php artisan make:policy ProductPolicy --model=Product
```

This minimal example assumes the `users` table has an `is_admin` boolean. Replace the condition with your application's role/permission rules:

```php
<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;

class ProductPolicy
{
    public function viewAny(User $user): bool
    {
        return (bool) $user->is_admin;
    }

    public function create(User $user): bool
    {
        return (bool) $user->is_admin;
    }

    public function update(User $user, Product $product): bool
    {
        return (bool) $user->is_admin;
    }

    public function delete(User $user, Product $product): bool
    {
        return (bool) $user->is_admin;
    }
}
```

Laravel normally discovers a conventionally named policy in `app/Policies`. If your application does not, register the model-to-policy mapping explicitly in its authorization configuration.

## 47.2 Create Livewire component

```bash
php artisan make:livewire ProductManager --class
```

## 47.3 Component class

`app/Livewire/ProductManager.php`

```php
<?php

namespace App\Livewire;

use App\Models\Product;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Validation\Rule;
use Livewire\Attributes\Locked;
use Livewire\Attributes\Url;
use Livewire\Component;
use Livewire\WithPagination;

class ProductManager extends Component
{
    use AuthorizesRequests, WithPagination;

    #[Url]
    public string $search = '';

    #[Url]
    public string $categoryFilter = '';

    #[Locked]
    public ?int $editingId = null;
    public string $name = '';
    public string $sku = '';
    public string $category = '';
    public string $price = '';
    public int $stock = 0;
    public bool $active = true;

    public string $sortField = 'created_at';
    public string $sortDirection = 'desc';

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedCategoryFilter(): void
    {
        $this->resetPage();
    }

    protected function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:150'],
            'sku' => [
                'required',
                'string',
                'max:50',
                Rule::unique('products', 'sku')->ignore($this->editingId),
            ],
            'category' => ['nullable', 'string', 'max:100'],
            'price' => ['required', 'numeric', 'min:0'],
            'stock' => ['required', 'integer', 'min:0'],
            'active' => ['boolean'],
        ];
    }

    public function save(): void
    {
        $validated = $this->validate();

        if ($this->editingId === null) {
            $this->authorize('create', Product::class);
            Product::create($validated);
            $message = 'Product created successfully.';
        } else {
            $product = Product::findOrFail($this->editingId);
            $this->authorize('update', $product);
            $product->update($validated);
            $message = 'Product updated successfully.';
        }

        session()->flash('success', $message);

        $this->resetForm();
    }

    public function edit(int $id): void
    {
        $product = Product::findOrFail($id);
        $this->authorize('update', $product);

        $this->editingId = $product->id;
        $this->name = $product->name;
        $this->sku = $product->sku;
        $this->category = $product->category ?? '';
        $this->price = (string) $product->price;
        $this->stock = $product->stock;
        $this->active = $product->active;

        $this->resetValidation();
    }

    public function delete(int $id): void
    {
        $product = Product::findOrFail($id);
        $this->authorize('delete', $product);

        $product->delete();

        if ($this->editingId === $id) {
            $this->resetForm();
        }

        session()->flash('success', 'Product deleted successfully.');
    }

    public function cancelEdit(): void
    {
        $this->resetForm();
    }

    public function sortBy(string $field): void
    {
        $allowed = ['name', 'sku', 'price', 'stock', 'created_at'];

        abort_unless(in_array($field, $allowed, true), 400);

        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
    }

    private function resetForm(): void
    {
        $this->reset([
            'editingId',
            'name',
            'sku',
            'category',
            'price',
            'stock',
            'active',
        ]);

        $this->active = true;
        $this->resetValidation();
    }

    public function render()
    {
        $this->authorize('viewAny', Product::class);

        $products = Product::query()
            ->when($this->search, function ($query) {
                $query->where(function ($query) {
                    $query->where('name', 'like', "%{$this->search}%")
                        ->orWhere('sku', 'like', "%{$this->search}%");
                });
            })
            ->when(
                $this->categoryFilter,
                fn ($query) => $query->where('category', $this->categoryFilter)
            )
            ->orderBy($this->sortField, $this->sortDirection)
            ->paginate(10);

        $categories = Product::query()
            ->whereNotNull('category')
            ->where('category', '!=', '')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return view('livewire.product-manager', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}
```

## 47.4 Blade view

`resources/views/livewire/product-manager.blade.php`

```blade
<div>
    <h1>Product Manager</h1>

    @if (session()->has('success'))
        <div>
            {{ session('success') }}
        </div>
    @endif

    <section>
        <h2>{{ $editingId ? 'Edit Product' : 'Create Product' }}</h2>

        <form wire:submit="save">
            <div>
                <label>Name</label>
                <input wire:model="name" type="text">
                @error('name') <span>{{ $message }}</span> @enderror
            </div>

            <div>
                <label>SKU</label>
                <input wire:model="sku" type="text">
                @error('sku') <span>{{ $message }}</span> @enderror
            </div>

            <div>
                <label>Category</label>
                <input wire:model="category" type="text">
                @error('category') <span>{{ $message }}</span> @enderror
            </div>

            <div>
                <label>Price</label>
                <input wire:model="price" type="number" step="0.01">
                @error('price') <span>{{ $message }}</span> @enderror
            </div>

            <div>
                <label>Stock</label>
                <input wire:model="stock" type="number" min="0">
                @error('stock') <span>{{ $message }}</span> @enderror
            </div>

            <div>
                <label>
                    <input wire:model="active" type="checkbox">
                    Active
                </label>
            </div>

            <button
                type="submit"
                wire:loading.attr="disabled"
                wire:target="save"
            >
                <span wire:loading.remove wire:target="save">
                    {{ $editingId ? 'Update' : 'Create' }}
                </span>

                <span wire:loading wire:target="save">
                    Saving...
                </span>
            </button>

            @if ($editingId)
                <button type="button" wire:click="cancelEdit">
                    Cancel
                </button>
            @endif
        </form>
    </section>

    <hr>

    <section>
        <h2>Products</h2>

        <input
            wire:model.live.debounce.300ms="search"
            placeholder="Search by name or SKU..."
        >

        <select wire:model.live="categoryFilter">
            <option value="">All categories</option>

            @foreach ($categories as $categoryName)
                <option value="{{ $categoryName }}">
                    {{ $categoryName }}
                </option>
            @endforeach
        </select>

        <div wire:loading wire:target="search,categoryFilter">
            Filtering...
        </div>

        <table>
            <thead>
                <tr>
                    <th>
                        <button wire:click="sortBy('name')">Name</button>
                    </th>
                    <th>
                        <button wire:click="sortBy('sku')">SKU</button>
                    </th>
                    <th>Category</th>
                    <th>
                        <button wire:click="sortBy('price')">Price</button>
                    </th>
                    <th>
                        <button wire:click="sortBy('stock')">Stock</button>
                    </th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @forelse ($products as $product)
                    <tr wire:key="product-{{ $product->id }}">
                        <td>{{ $product->name }}</td>
                        <td>{{ $product->sku }}</td>
                        <td>{{ $product->category }}</td>
                        <td>{{ number_format((float) $product->price, 2) }}</td>
                        <td>{{ $product->stock }}</td>
                        <td>{{ $product->active ? 'Yes' : 'No' }}</td>
                        <td>
                            <button wire:click="edit({{ $product->id }})">
                                Edit
                            </button>

                            <button
                                wire:click="delete({{ $product->id }})"
                                wire:confirm="Delete this product?"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7">No products found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        {{ $products->links() }}
    </section>
</div>
```

## 47.5 Render in a Laravel Blade page

Protect the page with authentication. The policy in the component then decides whether the signed-in user may manage products:

```php
use Illuminate\Support\Facades\Route;

Route::view('/admin/products', 'admin.products')
    ->middleware('auth')
    ->name('admin.products');
```

`resources/views/admin/products.blade.php`:

```blade
@extends('layouts.app')

@section('content')
    <livewire:product-manager />
@endsection
```

Or use a Livewire page component/route depending on your project architecture.

## 47.6 What this CRUD teaches

This single screen demonstrates:

```text
public properties
wire:model
wire:model.live
wire:submit
wire:click
validation
unique validation on edit
policy authorization
locked server-controlled ID
create/update
search
filtering
sorting
pagination
wire:key
wire:loading
wire:target
wire:confirm
flash messages
URL state
```

After you understand this example, most enterprise CRUD screens become variations of the same patterns.

---

# 48. Recommended Project Architecture

For a small application:

```text
app/
├── Livewire/
│   ├── ProductManager.php
│   └── OrderTable.php
├── Models/
└── Policies/

resources/views/livewire/
├── product-manager.blade.php
└── order-table.blade.php
```

For a medium/large application:

```text
app/
├── Actions/
│   ├── Invoices/
│   │   ├── ApproveInvoice.php
│   │   └── RejectInvoice.php
│   └── Orders/
├── Livewire/
│   ├── Invoices/
│   │   ├── Index.php
│   │   ├── Show.php
│   │   └── ApprovalPanel.php
│   └── Orders/
├── Models/
├── Policies/
├── Services/
│   ├── Sap/
│   └── Ocr/
└── Jobs/

resources/views/livewire/
├── invoices/
└── orders/
```

## Responsibility rule

### Livewire component

Should primarily handle:

- UI state
- validation coordination
- calling domain/application services
- user interactions
- rendering

### Service/action class

Should handle:

- complex business rules
- multi-step transactions
- external system coordination
- reusable application behavior

### Model

Should handle:

- relationships
- casts
- query scopes
- model-level behavior where appropriate

### Policy

Should handle:

- authorization

### Job

Should handle:

- long-running or asynchronous work

---

# 49. Common Mistakes

## Mistake 1: Making every field `.live`

Bad:

```blade
<input wire:model.live="firstName">
<input wire:model.live="lastName">
<input wire:model.live="address">
<input wire:model.live="city">
<input wire:model.live="notes">
```

Use live synchronization only where the UI actually benefits.

## Mistake 2: Running huge queries in `render()`

Bad:

```php
Product::all();
```

on every interaction.

Use pagination, filtering, caching, computed properties, lazy sections, or an improved architecture.

## Mistake 3: Forgetting authorization

```php
public function delete($id)
{
    Product::findOrFail($id)->delete();
}
```

Add policy checks.

## Mistake 4: Trusting action parameters

Browser arguments are not trusted business data.

## Mistake 5: Missing `wire:key`

Especially in dynamic lists.

## Mistake 6: Putting side effects in `render()`

Rendering can happen many times.

## Mistake 7: Doing long external calls synchronously

If an API/OCR/report process takes a long time, consider jobs and status feedback.

## Mistake 8: Building one giant component

Split based on meaningful responsibilities or use islands where the concern is primarily re-render scope.

## Mistake 9: Splitting into too many tiny components

Component boundaries should improve reasoning, not create message-passing chaos.

## Mistake 10: Using `wire:ignore` without explicit data synchronization

Ignored DOM does not magically keep Livewire state updated.

## Mistake 11: Using unstable keys

Never generate a new random key every render.

## Mistake 12: Exposing sensitive data as public properties

Only expose state the browser actually needs.

---

# 50. Troubleshooting Guide

## Problem: Component not found

Check:

- file path
- component naming
- namespace
- Blade tag
- cached views

Try:

```bash
php artisan view:clear
php artisan optimize:clear
```

## Problem: Component renders blank

Check:

- PHP syntax errors
- Laravel log
- root element structure
- view path

## Problem: Button does nothing

Check browser console and network tab.

Also check:

- Livewire scripts loaded
- typo in action name
- JavaScript error blocking initialization
- component method is public

## Problem: Input does not update immediately

Remember default `wire:model` does not necessarily send a request for every keystroke.

Use:

```blade
wire:model.live
```

if you need immediate server synchronization.

## Problem: Search feels slow

Use debounce:

```blade
wire:model.live.debounce.300ms="search"
```

Then inspect SQL performance and indexes.

## Problem: Wrong row updates after delete/reorder

Add a stable key:

```blade
wire:key="order-{{ $order->id }}"
```

## Problem: Select2/editor resets

Use `wire:ignore` and explicitly synchronize value.

## Problem: File upload fails

Check:

- Livewire validation
- Laravel validation
- PHP `upload_max_filesize`
- PHP `post_max_size`
- reverse proxy/IIS/Nginx/Apache limits
- permissions
- disk configuration

## Problem: Page makes too many requests

Review:

- `.live` bindings
- polling intervals
- nested components
- automatic events
- expensive dashboard widgets

Consider:

- debounce
- lazy/defer
- islands
- isolation
- caching

## Problem: Database query repeats too often

Move derived data to computed properties or redesign the component/query boundary.

---

# 51. Livewire vs Blade vs Alpine vs Vue/React

## Plain Blade

Use when the page is mostly request/response and does not need much interactivity.

Example:

```text
Blog article
Terms page
Simple report
```

## Livewire

Use when the page needs server-driven interactivity.

Example:

```text
Admin CRUD
Filters
Approvals
Forms
Dashboards
File upload
Search
```

## Alpine.js

Use for lightweight browser-only interactions.

Example:

```text
Dropdown
Modal visibility
Tabs
Small animation
Tooltip
```

## Livewire + Alpine

Often the best Laravel-centric combination.

```text
Livewire = server state/business interaction
Alpine   = local UI state
```

## Vue/React/Svelte

Consider a dedicated frontend framework when the application has:

- large amounts of complex client-side state
- offline-first behavior
- sophisticated browser-side workflows
- rich collaborative UI
- a separate frontend/backend team architecture

Livewire is not automatically better or worse. Choose based on application behavior and team needs.

---

# 52. Learning Roadmap

## Level 1 — Beginner

Master:

- what a component is
- public properties
- `wire:click`
- `wire:model`
- `wire:submit`
- `mount()`
- `render()`

Practice projects:

1. Counter
2. Todo list
3. Contact form

## Level 2 — CRUD Developer

Master:

- validation
- Eloquent create/update/delete
- flash messages
- search
- filters
- pagination
- confirmation
- loading states

Project:

**Product Management System**

## Level 3 — Intermediate

Master:

- file uploads
- events
- nested components
- URL state
- computed properties
- lifecycle hooks
- Alpine integration
- `wire:ignore`

Projects:

1. Employee directory
2. Invoice upload screen
3. Approval workflow

## Level 4 — Advanced

Master:

- page components
- navigation
- lazy/deferred loading
- islands
- async/isolate/renderless behavior
- hydration
- morphing
- custom reusable inputs
- security model
- testing

Project:

**Enterprise Purchase-to-Pay Workflow**

Features:

```text
Invoice upload
OCR status
Vendor validation
PO matching
Approval levels
Comments
Attachments
Audit trail
Role authorization
Search/filter/pagination
Queue processing
Dashboard
```

## Level 5 — Production Expert

Master:

- query optimization
- cache strategy
- queue architecture
- policies
- monitoring
- testing strategy
- deployment
- component architecture
- performance debugging

---

# 53. Interview Questions

## 1. What is Laravel Livewire?

A Laravel framework for building reactive, dynamic interfaces primarily using PHP and Blade, with Livewire handling browser/server synchronization.

## 2. What is a Livewire component?

A unit containing reactive state and behavior plus a Blade representation.

## 3. What are public properties used for?

They represent state that can be synchronized between the browser and component.

## 4. What is `wire:model`?

A directive that binds input state to a Livewire property.

## 5. Difference between `wire:model` and `wire:model.live`?

`wire:model.live` requests live server synchronization as the value changes, while normal `wire:model` avoids unnecessary immediate requests and synchronizes with Livewire interactions.

## 6. Why use debounce?

To avoid firing a request on every keystroke in live inputs such as search.

## 7. What is `wire:key`?

A stable identity marker Livewire uses to track repeated DOM elements/components across updates.

## 8. What is hydration?

Reconstructing a component from serialized state for a later Livewire request.

## 9. What is dehydration?

Serializing the component state after processing/rendering so it can participate in the next request.

## 10. How do you validate a Livewire form?

Using `#[Validate]`, `$this->validate()`, rules methods, and normal Laravel validation rules.

## 11. How do components communicate?

Through parent/child data flow, reactive/modelable properties, events, and browser/Alpine integration depending on the relationship.

## 12. How do you optimize search?

Debounce the input, paginate results, optimize SQL/indexes, and limit unnecessary render/query work.

## 13. How do you secure a Livewire action?

Treat parameters/state as untrusted, validate input, fetch authoritative data from the database, and authorize using policies/gates.

## 14. What does `wire:loading` do?

Shows or changes UI during active Livewire requests.

## 15. What does `wire:ignore` do?

Prevents Livewire from morphing a DOM region, often for third-party JavaScript plugins.

## 16. What is a computed property?

Derived component data, generally useful for values/queries calculated from current state and reused during a request.

## 17. What is lazy loading?

Loading a component later, often when it enters the viewport, rather than blocking initial page rendering.

## 18. What is deferred loading?

Loading a component just after initial page load so an expensive visible widget does not block the page shell.

## 19. What is a Livewire island?

An isolated region inside a component that can render/update independently of the rest of the component.

## 20. When should you use Alpine with Livewire?

For small browser-only UI behavior such as dropdown visibility, modal animation, and lightweight client interactions.

## 21. Should business logic live entirely in Livewire components?

No. Complex domain/business operations should generally be placed in service/action classes so components remain focused on UI coordination.

## 22. Can Livewire replace queues?

No. Long-running background jobs should still use Laravel queues. Livewire can submit the job and display/poll progress.

## 23. What is the danger of async state-changing actions?

Parallel requests can race and overwrite each other's component state.

## 24. Why are policies still needed if a button is hidden with `@can`?

Because users can still attempt to invoke server actions. Authorization must be enforced server side.

## 25. How do you test Livewire?

With `Livewire::test()`/Livewire test utilities plus normal Laravel assertions, database assertions, authorization tests, file fakes, and browser tests when necessary.

---

# 54. Cheat Sheet

Use this table to recall the contract behind the syntax, not just the spelling:

| API | Main input | Result / return behavior |
| --- | --- | --- |
| `wire:click="save"` | Browser click | Sends a Livewire request and calls public action `save()` |
| `wire:submit="save"` | Form submit | Prevents normal navigation and calls `save()` |
| `wire:model="name"` | Input value | Synchronizes public property `name` on the next request |
| `wire:model.live.debounce.300ms` | Repeated input | Synchronizes after 300 ms of inactivity |
| `$this->validate()` | Component properties and rules | Returns only validated data or responds with validation errors |
| `$this->reset(...)` | One or more property names | Restores those properties to their declared initial values |
| `$this->dispatch(...)` | Event name and named payload | Dispatches a browser event; targeting methods narrow recipients |
| `$this->authorize(...)` | Ability plus model/class | Continues when allowed; otherwise throws an authorization exception |
| `paginate(10)` | Query and page size | Returns a paginator and stores page state in the URL by default |
| `$upload->store($path, $disk)` | Temporary upload, directory, disk | Stores the file and returns its relative path |
| `#[Computed]` | Method | Exposes derived data and memoizes it for the current request |
| `#[Locked]` | Public property | Rejects client-side attempts to mutate that property |
| `#[Json]` | Action return data | Resolves a JavaScript promise without a component re-render |

## Install

```bash
composer require livewire/livewire
```

## Create component

```bash
php artisan make:livewire counter
php artisan make:livewire Counter --class
php artisan make:livewire product-table --mfc
```

## Render component

```blade
<livewire:counter />
```

## Click

```blade
<button wire:click="save">Save</button>
```

## Submit

```blade
<form wire:submit="save">
    <input wire:model="name">
    <button type="submit">Save</button>
</form>
```

## Model

```blade
<input wire:model="name">
<input wire:model.live.debounce.300ms="search">
<input wire:model.blur="email">
```

## Loading

```blade
<span wire:loading>Loading...</span>
<span wire:loading wire:target="save">Saving...</span>
```

## Confirm

```blade
<button wire:click="delete" wire:confirm="Are you sure?">Delete</button>
```

## Dirty

```blade
<span wire:dirty wire:target="name">Unsaved</span>
```

## Loop key

```blade
<div wire:key="product-{{ $product->id }}">
    {{ $product->name }}
</div>
```

## Validation

```php
#[Validate('required|string|max:100')]
public string $name = '';

$this->validate();
```

## Reset

```php
$this->reset('name');
$this->reset(['name', 'email']);
$this->resetValidation();
```

## Event

```php
$this->dispatch('saved');
```

```php
#[On('saved')]
public function refreshData() {}
```

## URL state

```php
#[Url]
public string $search = '';
```

## Locked state

```php
#[Locked]
public int $recordId;
```

## Computed

```php
#[Computed]
public function total(): int
{
    return $this->items->sum('amount');
}
```

## Pagination

```php
use WithPagination;

Product::paginate(10);
```

## Upload

```php
use WithFileUploads;

public $photo;
```

```blade
<input type="file" wire:model="photo">
```

## Poll

```blade
<div wire:poll.5s="refreshStatus">
    Status: {{ $status }}
</div>
```

## Navigate

```blade
<a href="/products" wire:navigate>Products</a>
```

## Ignore DOM

```blade
<div wire:ignore>Third-party widget</div>
```

## Alpine to Livewire

```blade
<button x-on:click="$wire.save()">Save</button>
```

---

# 55. Glossary

**Action** — a component method triggered by a frontend interaction.

**Alpine.js** — lightweight JavaScript framework often used with Livewire for client-only UI behavior.

**Blade** — Laravel's server-side templating engine.

**Component** — a Livewire unit containing state, behavior, and UI.

**Computed property** — derived component data evaluated from current state.

**Defer** — delay a component until immediately after the initial page load.

**Dehydration** — converting component state into a serializable representation between requests.

**Directive** — an HTML/Blade instruction such as `wire:click` or `wire:model`.

**DOM morphing** — updating the existing browser DOM by intelligently comparing old and new HTML rather than replacing the whole page.

**Event** — a message dispatched for other components or browser code to react to.

**Hydration** — reconstructing Livewire component state for a later request.

**Island** — an isolated region inside a component that can update independently.

**Lazy loading** — waiting to load a component until it is needed/visible.

**Modelable** — a child component property designed to bind like an input from its parent.

**Polling** — repeatedly running/refreshing at a time interval.

**Reactive property** — child state designed to react to parent-provided values.

**Snapshot** — the serialized information Livewire uses to reconstruct component state between requests.

**State** — data describing the current component, usually public properties.

**`wire:key`** — stable identity for repeated DOM elements or child components.

---

# 56. Official References

Use the official documentation as the final authority for syntax that may evolve between Livewire versions.

- [Livewire 4 quickstart](https://livewire.laravel.com/docs/4.x/quickstart)
- [Livewire 4 installation requirements](https://livewire.laravel.com/docs/4.x/installation)
- [Livewire 4 upgrade guide](https://livewire.laravel.com/docs/4.x/upgrading)
- [Livewire releases](https://github.com/livewire/livewire/releases)
- [Components](https://livewire.laravel.com/docs/4.x/components)
- [Properties and security notes](https://livewire.laravel.com/docs/4.x/properties)
- [Actions](https://livewire.laravel.com/docs/4.x/actions)
- [Forms](https://livewire.laravel.com/docs/4.x/forms)
- [Validation](https://livewire.laravel.com/docs/4.x/validation)
- [Events](https://livewire.laravel.com/docs/4.x/events)
- [Lifecycle hooks](https://livewire.laravel.com/docs/4.x/lifecycle-hooks)
- [File uploads](https://livewire.laravel.com/docs/4.x/uploads)
- [Testing](https://livewire.laravel.com/docs/4.x/testing)
- [JavaScript integration](https://livewire.laravel.com/docs/4.x/javascript)
- [`#[Js]` attribute](https://livewire.laravel.com/docs/4.x/attribute-js)
- [`#[Json]` attribute](https://livewire.laravel.com/docs/4.x/attribute-json)
- [`#[Transition]` attribute](https://livewire.laravel.com/docs/4.x/attribute-transition)
- [Laravel documentation](https://laravel.com/docs)

---

# Final Mastery Advice

Do not measure Livewire skill by how many directives you memorize.

A strong Livewire developer knows how to answer these questions:

1. **Where should this state live?**
2. **Does this interaction require the server or only the browser?**
3. **How often will this cause a network request?**
4. **How expensive is the database/render work behind that request?**
5. **Is this input validated?**
6. **Is this action authorized?**
7. **Should this long task be queued?**
8. **Should this UI be one component, child components, or islands?**
9. **Does this list need stable keys?**
10. **Can I test this behavior independently?**

When you can design those decisions correctly, you are no longer merely using Livewire syntax—you are building maintainable Laravel applications with Livewire.

---

## Practice Project Checklist

Build the following in order:

- [ ] Counter
- [ ] Todo list
- [ ] Contact form with validation
- [ ] Product CRUD
- [ ] Search + pagination table
- [ ] Dependent country/state dropdown
- [ ] Image upload with preview
- [ ] Multi-file upload
- [ ] Edit modal
- [ ] Bulk select/delete
- [ ] Multi-step wizard
- [ ] URL-persisted report filters
- [ ] Parent/child components
- [ ] Event-driven table refresh
- [ ] Alpine-powered modal/dropdown
- [ ] Third-party select/editor with `wire:ignore`
- [ ] Polling job status
- [ ] Lazy/deferred dashboard
- [ ] Island-based expensive widget
- [ ] Authorization policies
- [ ] Component tests
- [ ] Full approval workflow

If you can build the last five items cleanly, securely, and with tests, you have moved well beyond beginner Livewire usage.
