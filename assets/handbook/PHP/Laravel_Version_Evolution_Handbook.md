# Laravel Version Evolution Handbook

> A learner-friendly guide to how Laravel changed from Laravel 4.x through Laravel 13.x — without turning into an overwhelming release-note dump.
>
> Current baseline: **Laravel Framework 13.25.0**, verified in August 2026. Historical snippets are examples of the conventions used in their era; run them only in a matching project/version unless a section explicitly labels them modern.

---

## How to Use This Handbook

Laravel has changed a lot over the years, but you **do not need to memorize every release note**.

This handbook focuses on four questions for every important Laravel version:

1. **What changed?**
2. **Why did it matter?**
3. **What should a learner remember today?**
4. **What old code might you see in a legacy project?**

The goal is to help you recognize Laravel code from different generations and understand how the framework evolved.

### Recommended learning strategy

If you are learning Laravel today:

- Learn **Laravel 13** as your primary version.
- Understand Laravel **11–13** very well.
- Know the important differences in Laravel **8–10** because many production applications still resemble this style.
- Learn Laravel **5–7** mainly for maintaining legacy applications.
- Treat Laravel **4.x** as historical knowledge unless you inherit a very old system.

Do not try to master every version separately.

Think of Laravel history in generations:

| Generation | Versions | Main idea |
| --- | --- | --- |
| Early modern Laravel | 4.x | Composer, IoC container, migrations, Eloquent foundation |
| Laravel 5 architecture | 5.0–5.8 | Modern application structure takes shape |
| Stability / SemVer era | 6–7 | Semantic versioning, improved framework consistency |
| Modern developer experience | 8–10 | Class-based routes, modern factories, PHP 8, better tooling |
| Slim application skeleton | 11–12 | Smaller bootstrap, less boilerplate, modern defaults |
| AI-aware Laravel | 13 | AI SDK, newer framework APIs, PHP 8.3+ |

## Supported-version timeline

This table is the practical bridge between framework history and maintenance decisions:

| Version | Supported PHP | Released | Security fixes until | State on Aug. 13, 2026 |
| --- | --- | --- | --- | --- |
| 6 (LTS) | 7.2–8.0 | Sep. 3, 2019 | Sep. 6, 2022 | End of life |
| 7 | 7.2–8.0 | Mar. 3, 2020 | Mar. 3, 2021 | End of life |
| 8 | 7.3–8.1 | Sep. 8, 2020 | Jan. 24, 2023 | End of life |
| 9 | 8.0–8.2 | Feb. 8, 2022 | Feb. 6, 2024 | End of life |
| 10 | 8.1–8.3 | Feb. 14, 2023 | Feb. 4, 2025 | End of life |
| 11 | 8.2–8.4 | Mar. 12, 2024 | Mar. 12, 2026 | End of life |
| 12 | 8.2–8.5 | Feb. 24, 2025 | Feb. 24, 2027 | Bug-fix window ends Aug. 13, 2026; security support continues |
| 13 | 8.3–8.5 | Mar. 17, 2026 | Mar. 17, 2028 | Current major; bug fixes through Q3 2027 |

“Supported PHP” is Laravel's documented compatibility range, not merely a version on which the application happens to boot. Composer packages, operating systems, extensions, and database drivers can impose narrower constraints. An end-of-life framework should be treated as security/maintenance debt even when the application still runs.

---

# 1. Before Laravel 4 — Historical Context

Laravel began as an alternative to PHP frameworks that were often considered difficult or overly complex.

Early Laravel versions introduced ideas that eventually became central to the framework:

- expressive routing
- authentication helpers
- Blade templates
- migrations
- Eloquent ORM
- Artisan commands
- bundles / packages

You generally do **not** need to study Laravel 1–3 to become a Laravel developer today.

## Learner takeaway

Know that Laravel evolved quickly in its early years, but Laravel 4 is the first version that strongly resembles the architectural direction of modern Laravel.

---

# 2. Laravel 4.x — Composer-Based Laravel Arrives

Laravel 4 represented a major architectural reset.

It heavily embraced:

- Composer
- dependency injection
- service container concepts
- service providers
- Symfony components
- package-oriented architecture

This made Laravel more modular and aligned it with the wider PHP ecosystem.

## Important concepts

### Composer became central

Dependencies were managed through:

```bash
composer install
composer update
```

and `composer.json`.

This remains fundamental today.

### Service container

Laravel's IoC container allowed classes to receive dependencies instead of constructing everything manually.

Old-style tightly coupled code:

```php
class ReportController
{
    public function generate()
    {
        $mailer = new Mailer();
    }
}
```

Dependency-oriented code:

```php
class ReportController
{
    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }
}
```

Modern Laravel still relies heavily on this idea.

### Service providers

Service providers became a central bootstrapping mechanism.

You will still encounter providers in modern Laravel, though newer application skeletons register and configure more behavior through `bootstrap/app.php`.

### Eloquent matured

Laravel's Active Record ORM became one of its defining features.

```php
$user = User::find(1);
$user->name = 'Shoeb';
$user->save();
```

This style remains recognizable today.

## Legacy clue

A Laravel 4 application may contain directory structures and bootstrapping conventions very different from modern Laravel.

Do not try to upgrade such an application by copying files directly into Laravel 13. Treat it as a staged modernization project.

## Learner takeaway

Remember Laravel 4 for:

- Composer
- container
- service providers
- Eloquent
- migrations
- framework modularity

These ideas survived. The application structure did not.

---

# 3. Laravel 5.0 — The Modern Application Structure Begins

Laravel 5.0 was one of the biggest structural changes in Laravel history.

It introduced a fresh application layout and strongly embraced PSR-4 autoloading.

## What changed?

Important changes included:

- new application directory structure
- PSR-4 autoloading
- route middleware
- controller method injection
- form requests
- contracts
- command / handler style architecture
- filesystem abstraction
- improved scheduler
- environment configuration improvements

## Why it mattered

Laravel applications became more organized for large projects.

Code started being naturally separated into areas such as:

```text
app/
├── Console/
├── Events/
├── Exceptions/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   └── Requests/
├── Providers/
└── Services/
```

This structure influenced Laravel for many years.

## Middleware becomes important

Instead of putting authentication checks everywhere:

```php
if (!Auth::check()) {
    return redirect('/login');
}
```

you could use middleware:

```php
Route::get('/dashboard', 'DashboardController@index')
    ->middleware('auth');
```

Middleware remains one of Laravel's core concepts.

## Form Requests

Validation could move out of controllers.

```php
class StoreUserRequest extends Request
{
    public function rules()
    {
        return [
            'email' => 'required|email',
        ];
    }
}
```

Modern Laravel still strongly supports Form Request validation.

## Scheduler

Scheduled tasks became much easier to manage in code.

```php
$schedule->command('reports:daily')->daily();
```

Instead of dozens of cron entries, one cron entry can run Laravel's scheduler.

## Learner takeaway

Laravel 5.0 established much of the application architecture that developers still recognize.

If you understand:

- middleware
- Form Requests
- dependency injection
- service providers
- Artisan commands
- scheduler

you understand concepts that continue into Laravel 13.

---

# 4. Laravel 5.1 — First LTS Release

Laravel 5.1 was the first Laravel release with Long-Term Support.

This made Laravel more attractive to organizations that needed predictable maintenance windows.

## Important changes

Laravel 5.1 improved areas including:

- long-term support
- event broadcasting
- middleware parameters
- testing
- model factories
- Artisan improvements

## Middleware parameters

Middleware could accept configuration:

```php
Route::get('/admin', [
    'middleware' => 'role:admin',
    'uses' => 'AdminController@index',
]);
```

Conceptually, modern Laravel still supports parameterized middleware.

## Model factories

Factories made test data easier to create.

Legacy style:

```php
factory(App\User::class)->create();
```

Modern style:

```php
User::factory()->create();
```

If you see the global `factory()` helper in an old project, you are looking at the older factory system.

## Learner takeaway

Laravel 5.1 matters mainly because:

- it introduced Laravel's LTS concept
- factories became a normal testing tool
- enterprise adoption improved

---

# 5. Laravel 5.2 — Authentication and Framework Refinement

Laravel 5.2 refined many Laravel 5 concepts.

## Important changes

Notable areas included:

- authentication improvements
- implicit model binding
- authorization improvements
- validation arrays
- middleware groups
- rate limiting
- improved session handling

## Middleware groups

Instead of adding the same middleware one-by-one, applications grouped them.

Example concept:

```php
'web' => [
    EncryptCookies::class,
    StartSession::class,
    VerifyCsrfToken::class,
],
```

Routes could then receive an entire group.

This became the familiar distinction between:

- `web`
- `api`

routing behavior.

## Implicit route model binding

Instead of:

```php
public function show($id)
{
    $user = User::findOrFail($id);
}
```

Laravel could resolve the model automatically:

```php
public function show(User $user)
{
    return $user;
}
```

This remains one of Laravel's most useful conveniences.

## Rate limiting

API request throttling became easier.

Modern Laravel continues to build on the same concept.

## Learner takeaway

Laravel 5.2 is where route-model binding and middleware grouping became important conventions.

---

# 6. Laravel 5.3 — Laravel Becomes More API and Realtime Friendly

Laravel 5.3 introduced several features that still define the Laravel ecosystem.

## Major additions

- Laravel Notifications
- Laravel Echo
- Laravel Passport
- Laravel Scout
- Mailable classes
- separate `routes/web.php` and `routes/api.php`
- single-action controllers
- improved file uploads

## Separate route files

Older versions often used one main routes file.

Laravel 5.3 made this separation common:

```text
routes/
├── web.php
└── api.php
```

This became standard for years.

## Notifications

Instead of manually implementing every delivery channel:

```php
$user->notify(new InvoicePaid($invoice));
```

A notification could support:

- email
- database
- broadcast
- SMS integrations

This remains a core Laravel feature.

## Mailables

Email logic became class-based:

```bash
php artisan make:mail InvoicePaid
```

```php
Mail::to($user)->send(new InvoicePaid($invoice));
```

Modern Laravel still uses Mailable classes.

## Laravel Passport

Passport provided OAuth2 server capabilities.

Important distinction today:

- **Sanctum** is usually simpler for first-party SPAs/mobile/token APIs.
- **Passport** is appropriate when full OAuth2 capabilities are actually needed.

## Laravel Scout

Scout provided searchable model indexing.

```php
Post::search('Laravel')->get();
```

## Laravel Echo

Echo improved realtime event consumption in JavaScript.

Typical use case:

```text
Order status changes
        ↓
Laravel event
        ↓
Broadcast
        ↓
WebSocket
        ↓
Browser updates instantly
```

## Learner takeaway

Laravel 5.3 was a major ecosystem release.

Remember:

- Notifications
- Mailables
- Passport
- Scout
- Echo
- web/api route separation

These concepts are still relevant.

---

# 7. Laravel 5.4 — Developer Experience Improves

Laravel 5.4 focused heavily on developer convenience.

## Important changes

- Laravel Mix
- Blade components / slots improvements
- Markdown mail
- automatic facades in packages
- improved collections
- higher-order collection messages
- realtime facades
- Dusk browser testing

## Laravel Mix

Mix simplified asset compilation.

Legacy `webpack.mix.js`:

```js
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
```

Modern Laravel uses **Vite** instead.

Modern:

```bash
npm run dev
npm run build
```

If you maintain a Laravel 5–8 application, you may still encounter Laravel Mix.

## Markdown Mail

Laravel made attractive HTML email easier:

```php
return $this->markdown('emails.invoice');
```

Blade-style mail templates could contain components such as buttons and panels.

## Laravel Dusk

Dusk made browser automation much easier.

```php
$browser->visit('/login')
        ->type('email', 'user@example.com')
        ->press('Login')
        ->assertPathIs('/dashboard');
```

## Learner takeaway

Laravel 5.4 is especially important when reading older frontend pipelines because it popularized Laravel Mix.

Modern learners should understand Mix mainly so they can recognize and migrate old projects.

---

# 8. Laravel 5.5 — LTS, Package Discovery, API Resources

Laravel 5.5 was another important Long-Term Support release.

## Major improvements

- package auto-discovery
- API Resources
- automatic command registration
- improved exception rendering
- queue job chaining
- custom validation rules
- Blade improvements

## Package auto-discovery

Before package discovery, developers often manually registered service providers.

Legacy:

```php
'providers' => [
    Vendor\Package\ServiceProvider::class,
],
```

Package discovery reduced this manual work.

Modern Composer packages often integrate with Laravel automatically.

## API Resources

Instead of returning models directly:

```php
return User::find(1);
```

you could control JSON representation:

```php
return new UserResource($user);
```

Example:

```php
class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}
```

API Resources remain highly recommended.

## Job chaining

Jobs could execute in sequence.

Concept:

```php
Bus::chain([
    new ProcessInvoice(),
    new GeneratePdf(),
    new NotifyCustomer(),
])->dispatch();
```

## Learner takeaway

Remember Laravel 5.5 for:

- LTS
- package auto-discovery
- API Resources
- better queues

---

# 9. Laravel 5.6 — Logging and API Improvements

Laravel 5.6 continued Laravel's steady refinement.

## Important improvements

- new logging system based on Monolog channels
- single-server scheduled tasks
- dynamic rate limiting
- broadcast channel classes
- API controller generation improvements
- Argon2 password hashing support

## Logging channels

Instead of thinking of "the Laravel log" as one file, developers could define channels:

```php
Log::channel('slack')->critical('Payment gateway unavailable');
```

Modern Laravel logging continues this channel / stack concept.

## Single-server scheduling

In distributed deployments, you may have several application servers.

Without coordination:

```text
Server A → runs report
Server B → runs report
Server C → runs report
```

The report runs three times.

Laravel can ensure appropriate scheduled work runs on only one server.

This matters in production clusters.

## Learner takeaway

Laravel 5.6 teaches an important production lesson:

Laravel is not only for CRUD—it includes infrastructure-aware features such as logging, scheduling and distributed coordination.

---

# 10. Laravel 5.7 — Email Verification and Better Authorization

Laravel 5.7 added several practical application features.

## Major changes

- built-in email verification support
- guest authorization support
- localizable notifications
- better console testing
- dump server
- improved pagination
- URL generator improvements

## Email verification

Applications could easily require verified users.

Typical modern concept:

```php
class User extends Authenticatable implements MustVerifyEmail
{
}
```

Protected route:

```php
Route::get('/dashboard', function () {
    //
})->middleware(['auth', 'verified']);
```

## Guest authorization

Policies and gates became more flexible when the current visitor was not authenticated.

## Learner takeaway

Laravel 5.7 matters for common account-management workflows, especially email verification.

---

# 11. Laravel 5.8 — Final Laravel 5.x Release

Laravel 5.8 was the last release in the Laravel 5 series.

## Important changes

- `hasOneThrough`
- policy auto-discovery
- improved email validation
- cache TTL values changed to seconds
- Carbon 2 support
- PHPUnit 8 support
- scheduler timezone improvements
- multiple broadcast authentication guards

## `hasOneThrough`

Imagine:

```text
Supplier
   ↓ has one
Account
   ↓ has one
AccountHistory
```

You can reach `AccountHistory` directly from `Supplier`.

```php
public function accountHistory()
{
    return $this->hasOneThrough(
        AccountHistory::class,
        Account::class
    );
}
```

## Important migration trap: Cache TTL

Older behavior:

```php
Cache::put('foo', 'bar', 30);
```

could mean **30 minutes**.

Laravel 5.8 changed integer TTL interpretation to **seconds** for PSR-16 consistency.

This is exactly the kind of small version change that can create production bugs during upgrades.

## Policy auto-discovery

Convention-based policy discovery reduced manual registration.

Example convention:

```text
App\User
App\Policies\UserPolicy
```

## Learner takeaway

Laravel 5.8 represents the mature end of the Laravel 5 generation.

When maintaining Laravel 5 applications, this is often a useful stepping stone before Laravel 6+.

---

# 12. Laravel 6 — Semantic Versioning and LTS

Laravel 6 was important not only technically but also for versioning philosophy.

Laravel adopted Semantic Versioning.

The framework moved to version numbers such as:

```text
6.x
7.x
8.x
9.x
10.x
```

instead of continuing with `5.9`.

## Major features

- Semantic Versioning
- Laravel Vapor
- improved authorization responses
- job middleware
- lazy collections
- subquery improvements
- improved exception handling
- Laravel UI extracted from the core framework

## Laravel UI extraction

Authentication/frontend scaffolding was moved into a separate package.

Legacy command:

```bash
composer require laravel/ui
php artisan ui bootstrap --auth
```

This is important when maintaining older Laravel applications.

Modern Laravel starter kits are different.

## Lazy Collections

Normal collections load all items into memory.

```php
$users = User::all();
```

For millions of records, this can become expensive.

Lazy iteration helps process large datasets incrementally.

Concept:

```php
User::cursor()->each(function ($user) {
    // Process one model at a time
});
```

## Job middleware

Cross-cutting queue behavior could be encapsulated.

Use cases:

- rate limiting
- preventing overlaps
- custom locking
- throttling external APIs

## Learner takeaway

Laravel 6 is remembered for:

- Semantic Versioning
- LTS
- cleaner package boundaries
- improved large-scale data processing

---

# 13. Laravel 7 — HTTP Client and Blade Components

Laravel 7 brought several features that feel very modern.

## Major changes

- fluent HTTP client
- Blade component tags
- Airlock (later renamed Sanctum)
- custom Eloquent casts
- route binding improvements
- multiple mail drivers
- CORS support
- queue improvements

## HTTP Client

Instead of directly using Guzzle everywhere:

```php
$response = Http::get('https://api.example.com/users');
```

POST request:

```php
$response = Http::post('https://api.example.com/orders', [
    'product_id' => 10,
]);
```

Modern Laravel's HTTP client remains a major feature.

## Blade component tags

Instead of older component syntax, Laravel introduced a cleaner style:

```blade
<x-alert type="error">
    Payment failed.
</x-alert>
```

Modern Blade uses this extensively.

## Laravel Airlock → Sanctum

Laravel Airlock was introduced as lightweight authentication for:

- SPAs
- mobile apps
- simple API tokens

It was later renamed **Laravel Sanctum**.

If old documentation says "Airlock", think "early Sanctum".

## Custom Eloquent casts

Complex model value transformations became easier to encapsulate.

Example use cases:

- Money object
- encrypted value
- custom address object
- JSON domain object

## Learner takeaway

Laravel 7 introduced several APIs that modern Laravel developers still use directly:

- `Http::`
- `<x-component>`
- Sanctum's predecessor
- custom casts

---

# 14. Laravel 8 — Modern Factories and Class-Based Routing

Laravel 8 was a very important modernization release.

## Major changes

- Laravel Jetstream
- model directory becomes `app/Models`
- class-based model factories
- migration squashing
- job batching
- improved rate limiting
- dynamic Blade components
- queue improvements
- time testing helpers

## `app/Models`

Older Laravel projects often place models directly in:

```text
app/User.php
app/Order.php
```

Laravel 8's default application structure used:

```text
app/Models/User.php
app/Models/Order.php
```

This is now familiar modern Laravel organization.

## Class-based factories

Old factory:

```php
factory(User::class)->create();
```

Modern factory:

```php
User::factory()->create();
```

Factory class:

```php
class UserFactory extends Factory
{
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
        ];
    }
}
```

## Route namespace behavior

Older Laravel applications frequently used string controller routes:

```php
Route::get('/users', 'UserController@index');
```

Modern style uses class references:

```php
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
```

This is one of the most visible differences when comparing legacy and modern Laravel.

## Job batching

Multiple jobs could be grouped:

```php
Bus::batch([
    new ImportCustomers($chunk1),
    new ImportCustomers($chunk2),
    new ImportCustomers($chunk3),
])->dispatch();
```

Useful for:

- imports
- image processing
- reports
- bulk emails
- data migration

## Migration squashing

Large projects may have hundreds of migrations.

Schema dumping can simplify onboarding and test database creation.

## Learner takeaway

Laravel 8 is one of the most important legacy versions to understand because many applications built in this era look similar to modern Laravel.

Pay special attention to:

- class-based factories
- `app/Models`
- controller class route syntax
- job batches
- Jetstream

---

# 15. Laravel 9 — PHP 8 Era and Modern Eloquent Attributes

Laravel 9 continued the annual release model and moved Laravel deeper into PHP 8.

## Key changes

- minimum PHP 8.0
- Symfony 6 components
- Symfony Mailer replaces SwiftMailer
- Flysystem 3
- new Eloquent accessor/mutator API
- enum route binding
- enum model casting
- Scout database engine
- improved `route:list`
- full-text indexes and queries

## Modern accessor / mutator API

Legacy:

```php
public function getNameAttribute($value)
{
    return strtoupper($value);
}

public function setNameAttribute($value)
{
    $this->attributes['name'] = strtolower($value);
}
```

Laravel 9 style:

```php
use Illuminate\Database\Eloquent\Casts\Attribute;

protected function name(): Attribute
{
    return Attribute::make(
        get: fn ($value) => strtoupper($value),
        set: fn ($value) => strtolower($value),
    );
}
```

The newer style keeps get/set behavior together.

## Enum casting

PHP 8.1 enums integrate naturally with Eloquent.

```php
enum OrderStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
}
```

Model:

```php
protected $casts = [
    'status' => OrderStatus::class,
];
```

Then:

```php
$order->status === OrderStatus::Paid;
```

## Enum route binding

Routes can validate enum values automatically.

```php
Route::get('/orders/{status}', function (OrderStatus $status) {
    return $status->value;
});
```

Invalid enum values result in a 404.

## Symfony Mailer

SwiftMailer was replaced because SwiftMailer was no longer maintained.

If an old package assumes SwiftMailer internals, this can matter during an upgrade.

## Flysystem 3

Laravel's `Storage` abstraction upgraded its underlying filesystem library.

Storage APIs stayed familiar:

```php
Storage::disk('s3')->put('report.pdf', $contents);
```

but package integrations sometimes needed changes.

## Learner takeaway

Laravel 9 is where modern PHP features such as:

- enums
- stronger typing
- modern object-based accessors

became normal Laravel development patterns.

---

# 16. Laravel 10 — Stronger Types, Processes and Feature Flags

Laravel 10 focused on modernization and developer experience.

## Key changes

- minimum PHP 8.1
- stronger types in application skeleton/stubs
- Process facade
- Laravel Pennant
- test profiling
- Pest scaffolding option
- interactive generator prompts

## Stronger type declarations

New application stubs increasingly used explicit parameter and return types.

Older style:

```php
public function store(Request $request)
{
    //
}
```

Modern code may use stronger signatures:

```php
public function store(StoreOrderRequest $request): RedirectResponse
{
    //
}
```

The important lesson is not "type every possible thing".

The lesson is:

> Modern Laravel increasingly embraces modern PHP's type system.

## Process facade

Laravel introduced a clean interface for running operating-system processes.

```php
use Illuminate\Support\Facades\Process;

$result = Process::run('php --version');

echo $result->output();
```

Testing can fake processes:

```php
Process::fake();

Process::run('some-command');

Process::assertRan('some-command');
```

Use cases:

- invoke CLI tools
- image/PDF tools
- deployment utilities
- media conversion
- scripts

Be careful with user-controlled command input.

## Laravel Pennant

Pennant provides feature flags.

```php
Feature::define('new-checkout', function (User $user) {
    return $user->is_beta_user;
});
```

Usage:

```php
if (Feature::active('new-checkout')) {
    // new experience
}
```

Feature flags help with:

- gradual rollout
- A/B testing
- beta features
- tenant-specific features
- safe deployment

## Test profiling

```bash
php artisan test --profile
```

helps find slow tests.

## Learner takeaway

Laravel 10 represents a mature, strongly typed, tooling-friendly Laravel.

Remember:

- modern PHP types
- `Process`
- `Pennant`
- improved testing experience

---

# 17. Laravel 11 — Slim Application Skeleton

Laravel 11 introduced one of the most noticeable application-structure changes since Laravel 5.

The framework itself remained familiar, but new Laravel applications became much slimmer.

## Important changes

- minimum PHP 8.2
- streamlined application structure
- more configuration moved to `bootstrap/app.php`
- fewer default service providers
- middleware configuration changes
- scheduling configuration can live outside the old Console Kernel approach
- improved health routing
- per-second rate limiting
- context support
- concurrency support
- improved queue testing and database features

## The most important idea: Less boilerplate

Older applications commonly contained:

```text
app/
├── Console/
│   └── Kernel.php
├── Exceptions/
│   └── Handler.php
├── Http/
│   └── Kernel.php
├── Providers/
│   ├── AppServiceProvider.php
│   ├── AuthServiceProvider.php
│   ├── EventServiceProvider.php
│   └── RouteServiceProvider.php
```

Laravel 11 reduced much of this default scaffolding.

This does **not** mean Laravel removed middleware, exceptions or scheduling.

Instead, configuration became more centralized and opt-in.

## `bootstrap/app.php`

Modern Laravel application configuration resembles:

```php
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })
    ->create();
```

This is a major clue that you are looking at a Laravel 11+ style application.

## Health route

A health endpoint such as:

```text
/up
```

is useful for:

- load balancers
- container orchestration
- uptime monitoring
- deployment health checks

## Per-second rate limiting

Older throttling frequently focused on requests per minute.

More granular rate limits are useful for modern APIs.

## Context

Context allows metadata to follow operations through logs and jobs.

Imagine:

```text
HTTP request
  ↓
request_id = abc123
  ↓
job dispatched
  ↓
background log
```

Context helps preserve diagnostic information.

## Concurrency

Laravel added convenient tools for executing independent work concurrently.

This can reduce latency when several unrelated operations can run in parallel.

## Learner takeaway

Laravel 11 is primarily about **simplification**.

Do not assume an older tutorial is wrong when it shows:

```text
app/Http/Kernel.php
app/Console/Kernel.php
```

It may simply be teaching an older Laravel application structure.

---

# 18. Laravel 12 — Modern Starter Kits and Incremental Evolution

Laravel 12 continued Laravel's yearly release cycle with a strong focus on keeping upgrades manageable.

Rather than reinventing core Laravel architecture, Laravel 12 refined the modern Laravel 11 direction.

## Important themes

- newer starter kits
- modern frontend choices
- continued streamlined application structure
- dependency updates
- incremental framework improvements
- continued modern PHP requirements

Laravel 12's changes are intentionally less "framework rewrite" and more "modern default experience".

## Starter kit evolution

Modern Laravel increasingly treats frontend architecture as a choice rather than forcing one universal stack.

Laravel 12 introduced official starter kits for:

- React with Inertia and TypeScript
- Svelte with Inertia and TypeScript
- Vue with Inertia and TypeScript
- Livewire for a primarily PHP/server-driven frontend

These kits provide authentication through Laravel Fortify. Breeze and Jetstream remain important when maintaining projects created in earlier generations, but a new 12/13 project should begin by checking the current starter-kit documentation instead of copying an older installation command.

### Why this matters

An older tutorial may say:

```bash
php artisan make:auth
```

Another may use:

```bash
laravel/ui
```

Another may install:

```text
Breeze
Jetstream
```

A newer tutorial may use modern starter-kit choices.

All of them can be historically correct.

The authentication scaffolding story changed over Laravel's lifetime.

## Learner takeaway

Laravel 12 should be viewed as part of the **Laravel 11+ generation**:

- slim skeleton
- modern bootstrap configuration
- current frontend tooling
- current PHP ecosystem
- gradual improvements instead of a disruptive rewrite

---

# 19. Laravel 13 — AI-Native Laravel and Modern Framework APIs

Laravel 13 was released on March 17, 2026. This revision was checked against framework 13.25.0.

It continues Laravel's yearly release cadence, supports PHP 8.3–8.5, receives bug fixes through Q3 2027, and receives security fixes through March 17, 2028.

## Important themes

Laravel 13 focuses on:

- AI-native application development
- stronger modern defaults
- expressive framework APIs
- new queue capabilities
- first-party JSON:API resources
- semantic/vector search support
- expanded PHP attributes
- stronger request-forgery protection
- continued PHP modernization

## Laravel AI SDK

The first-party AI SDK is an optional package, not code installed in every new application:

```bash
composer require laravel/ai
php artisan vendor:publish --provider="Laravel\Ai\AiServiceProvider"
php artisan migrate
```

It provides Laravel-oriented abstractions for agents, tool calling, structured output, images, audio, transcription, embeddings, reranking, files, and vector stores.

Typical application architecture:

```text
User question
    ↓
Laravel Controller / Action
    ↓
AI service / Agent
    ↓
Model provider
    ↓
Structured response
    ↓
Application
```

Use cases include:

- assistants
- document extraction
- summarization
- classification
- semantic search
- RAG
- embeddings
- tool-using agents

### Real SDK call

```php
use App\Ai\Agents\InvoiceAssistant;

$response = InvoiceAssistant::make()->prompt(
    'Explain why invoice INV-1001 failed validation.'
);

return (string) $response;
```

The call returns a response object and performs external, billable, nondeterministic work. Configure provider credentials outside version control, validate structured results, define timeouts/failure handling, fake the boundary in routine tests, and queue slow calls when the user does not need to wait.

The important architecture lesson is:

> AI calls are external dependencies. Treat them like payment gateways or APIs—not magic.

Consider:

- timeouts
- retries
- validation
- cost
- observability
- security
- queueing
- human review

## MCP-related development

Laravel MCP is also an optional first-party package:

```bash
composer require laravel/mcp
php artisan vendor:publish --tag=ai-routes
php artisan make:mcp-server InvoiceServer
```

The broad idea:

```text
AI Agent
   ↓
MCP
   ↓
Tools / resources exposed by an application
```

This allows AI systems to interact with structured application capabilities in a controlled way.

“Controlled” must mean authenticated routes, narrow tools, validated schemas, per-record authorization, output filtering, rate limits, and auditability. Never expose an unrestricted SQL, filesystem, or shell tool merely because the client speaks MCP.

## Queue evolution

Laravel 13 adds central queue routing by class:

```php
use App\Jobs\ProcessInvoiceOcr;
use Illuminate\Support\Facades\Queue;

Queue::route(
    ProcessInvoiceOcr::class,
    connection: 'redis',
    queue: 'ocr',
);
```

Register the route in a service provider's `boot()` method. The connection selects the backend; the queue selects a workload lane, and a worker must listen to that queue.

Queues remain essential for:

- AI processing
- imports
- email
- OCR
- report generation
- webhooks
- media processing

Laravel 13 also introduces queue attributes such as `#[Tries]`, `#[Backoff]`, `#[Timeout]`, and `#[FailOnTimeout]`. These express retry/runtime policy on a job class but do not make the job idempotent automatically.

## JSON:API resources and controller attributes

Laravel 13 can generate a first-party JSON:API resource:

```bash
php artisan make:resource PostResource --json-api
```

The generated `JsonApiResource` handles resource objects, relationships, sparse fieldsets, includes, links, and the JSON:API response content type. This is distinct from the older, general-purpose `JsonResource`; choose JSON:API only when clients benefit from that specification.

Controller behavior can be colocated through real PHP attributes:

```php
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Attributes\Controllers\Authorize;
use Illuminate\Routing\Attributes\Controllers\Middleware;

#[Middleware('auth')]
class CommentController
{
    #[Authorize('create', [Comment::class, 'post'])]
    public function store(Request $request, Post $post): RedirectResponse
    {
        $validated = $request->validate([
            'body' => ['required', 'string', 'max:2000'],
        ]);

        $post->comments()->create([
            'user_id' => $request->user()->id,
            'body' => $validated['body'],
        ]);

        return redirect()
            ->route('posts.show', $post)
            ->with('status', 'Comment created.');
    }
}
```

The request enters through authenticated middleware, the attribute asks the
`CommentPolicy` whether this user may create a comment for the bound post, and
validation runs before persistence. The method returns a redirect response.
The attribute names are shorthand for the same middleware/policy concepts;
they do not replace server-side validation or careful policy design.

## Learner takeaway

Laravel 13 does **not** invalidate classic Laravel knowledge.

You still need to understand:

- routing
- controllers
- middleware
- validation
- Eloquent
- service container
- events
- queues
- cache
- tests
- security

AI features sit **on top of** those fundamentals.

---

# 20. The Biggest Laravel Changes at a Glance

Instead of memorizing every version, memorize these transitions.

## Transition 1 — Laravel 4 → Laravel 5

### Main change

Application architecture was redesigned.

### Remember

```text
Laravel 4
   ↓
Laravel 5
   ↓
modern app/Http style structure
```

Laravel 5.0 is the beginning of the application structure many Laravel developers recognize.

---

## Transition 2 — Laravel 5.2 → 5.3

### Main change

Routes and application services became more clearly separated.

Remember:

```text
routes/web.php
routes/api.php
```

Also remember the arrival of:

- Passport
- Scout
- Echo
- Notifications
- Mailables

---

## Transition 3 — Laravel 5.4 → Modern Frontend Tooling

Historical path:

```text
Elixir
  ↓
Laravel Mix
  ↓
Vite
```

If an old project uses `webpack.mix.js`, do not panic.

It simply belongs to the Mix generation.

---

## Transition 4 — Laravel 5 Factories → Laravel 8 Factories

Old:

```php
factory(User::class)->create();
```

Modern:

```php
User::factory()->create();
```

This is one of the easiest ways to identify legacy testing code.

---

## Transition 5 — String Routes → Class-Based Routes

Old:

```php
Route::get('/users', 'UserController@index');
```

Modern:

```php
Route::get('/users', [UserController::class, 'index']);
```

---

## Transition 6 — Old Model Location → `app/Models`

Old:

```text
app/User.php
```

Modern:

```text
app/Models/User.php
```

---

## Transition 7 — SwiftMailer → Symfony Mailer

Historical:

```text
SwiftMailer
   ↓
Symfony Mailer
```

Laravel 9 is the major transition point.

---

## Transition 8 — Old Accessors → `Attribute`

Old:

```php
public function getNameAttribute($value)
{
    return strtoupper($value);
}
```

Modern:

```php
protected function name(): Attribute
{
    return Attribute::make(
        get: fn ($value) => strtoupper($value),
    );
}
```

---

## Transition 9 — Old Kernels → Laravel 11+ Bootstrap

Older:

```text
app/Http/Kernel.php
app/Console/Kernel.php
app/Exceptions/Handler.php
```

Modern fresh applications increasingly configure behavior through:

```text
bootstrap/app.php
```

---

## Transition 10 — Traditional Web Framework → Modern Application Platform

Laravel 13 adds several opt-in or incremental layers:

```text
Traditional Laravel
routing
database
queues
events
APIs
    +
AI integrations
agents
embeddings
semantic workflows
MCP
JSON:API resources
vector search
central queue routing
PHP attributes
```

These features do not replace core Laravel. The AI SDK and MCP package are
optional Composer dependencies; JSON:API resources, vector queries, queue
routing, and controller/job attributes extend familiar framework concepts.
The fundamentals still come first.

---

# 21. Authentication Evolution

Authentication is one of the most confusing topics when following tutorials from different years.

Here is the simplified history.

## Older Laravel 5 era

You may encounter:

```bash
php artisan make:auth
```

Authentication scaffolding was closely tied to the framework's frontend scaffolding.

---

## Laravel 6 era

Frontend/auth scaffolding moved to:

```bash
composer require laravel/ui
```

Then:

```bash
php artisan ui bootstrap --auth
```

---

## Later ecosystem

Laravel introduced first-party options such as:

### Breeze

Minimal authentication starter kit.

Good for:

- learning
- small applications
- custom applications

### Jetstream

More feature-rich application scaffolding.

May include concepts such as:

- teams
- profile management
- API tokens
- two-factor authentication

### Fortify

Backend authentication implementation without requiring a specific frontend.

### Sanctum

Simple authentication for:

- first-party SPA applications
- mobile applications
- API tokens

### Passport

OAuth2 server.

Use Passport when you really need OAuth2 semantics.

### Laravel 12–13 starter kits

For new applications, the official choices are React, Svelte, Vue, and Livewire. The JavaScript kits use Inertia and TypeScript; the Livewire kit keeps most UI development in PHP/Blade. All use Fortify for authentication behavior. Check the current installer/starter-kit documentation because old Breeze, Jetstream, or `laravel/ui` commands describe different generations.

---

# 22. Frontend Evolution

Laravel's frontend story changed many times.

Do not confuse "Laravel" with a single frontend technology.

## Historical progression

```text
Blade
  ↓
Blade + Bootstrap/jQuery
  ↓
Elixir
  ↓
Laravel Mix / Webpack
  ↓
Vue ecosystem popularity
  ↓
Breeze / Jetstream
  ↓
Vite
  ↓
Livewire / Inertia / React / Vue / Svelte choices
```

## What should a modern learner learn?

At minimum:

1. Blade
2. Vite basics
3. one interactive approach

Choose one:

- Livewire
- Vue + Inertia
- React + Inertia
- another supported modern frontend approach

Do not attempt to learn every frontend stack at the same time.

---

# 23. Routing Evolution

Laravel routing syntax itself remains conceptually stable.

## Classic route

```php
Route::get('/users', function () {
    return 'Users';
});
```

Still understandable today.

## Legacy controller route

```php
Route::get('/users', 'UserController@index');
```

Common in older Laravel.

## Modern controller route

```php
Route::get('/users', [UserController::class, 'index']);
```

## Resource routes

```php
Route::resource('products', ProductController::class);
```

Still a core Laravel pattern.

## Route model binding

```php
Route::get('/users/{user}', function (User $user) {
    return $user;
});
```

The concept evolved, but its usefulness remained.

---

# 24. Eloquent Evolution

Eloquent has remained remarkably recognizable.

Basic code from older Laravel can still look familiar:

```php
$user = User::find(1);
$user->name = 'John';
$user->save();
```

## Major areas that evolved

- new relationship types
- custom casts
- enum casting
- attribute objects
- query improvements
- eager-loading improvements
- factory redesign
- serialization/API Resources

### Classic relationship

```php
public function posts()
{
    return $this->hasMany(Post::class);
}
```

Still valid conceptually.

### Modern casting

```php
protected function casts(): array
{
    return [
        'is_active' => 'boolean',
        'settings' => 'array',
    ];
}
```

Modern skeleton conventions may prefer a `casts()` method where older applications commonly use the `$casts` property.

---

# 25. Queue Evolution

Queues have steadily become more capable.

Basic idea never changed:

```php
SendInvoiceEmail::dispatch($invoice);
```

Laravel added increasingly sophisticated features:

- retries
- delays
- failed jobs
- chains
- batches
- queue middleware
- unique jobs
- rate limiting
- monitoring through Horizon
- better routing/orchestration

## Scenario

Invoice upload:

```text
Upload
  ↓
Store file
  ↓
Dispatch OCR job
  ↓
Extract data
  ↓
Validate
  ↓
Match PO
  ↓
Trigger approval workflow
  ↓
Notify finance
```

Trying to perform the entire workflow inside one HTTP request is poor architecture.

Queues let the web request finish quickly while expensive work happens asynchronously.

---

# 26. Testing Evolution

Laravel gradually made testing easier and more expressive.

## What stayed constant

Test your behavior, not framework internals.

Example:

```php
public function test_user_can_view_dashboard(): void
{
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get('/dashboard')
        ->assertOk();
}
```

## Evolution highlights

- better HTTP testing
- factories
- browser testing with Dusk
- parallel testing
- process fakes
- HTTP fakes
- event/mail/notification/queue fakes
- Pest integration
- test profiling

Modern Laravel applications can isolate external effects effectively.

Example:

```php
Mail::fake();

Notification::fake();

Queue::fake();

Http::fake();
```

---

# 27. Directory Structure Cheat Sheet

## Laravel 5–10 style you may commonly see

```text
app/
├── Console/
│   └── Kernel.php
├── Exceptions/
│   └── Handler.php
├── Http/
│   ├── Controllers/
│   ├── Kernel.php
│   └── Middleware/
├── Models/
└── Providers/

routes/
├── api.php
├── channels.php
├── console.php
└── web.php
```

Not every version has exactly this structure, but it represents the familiar pre-Laravel-11 style.

---

## Laravel 11+ fresh application mindset

```text
app/
├── Http/
├── Models/
└── Providers/

bootstrap/
└── app.php

routes/
├── console.php
└── web.php
```

Additional files can appear when required.

The philosophy is:

> Start small. Add structure when your application needs it.

---

# 28. How to Identify the Laravel Version of a Project

## Method 1 — Composer

```bash
composer show laravel/framework
```

Example:

```text
name     : laravel/framework
versions : * v13.x.x
```

This reads the installed dependency metadata and is the best method when
Composer is available.

## Method 2 — Artisan

```bash
php artisan --version
```

Example:

```text
Laravel Framework 13.x.x
```

## Method 3 — `composer.json`

Look for:

```json
"laravel/framework": "^13.0"
```

Legacy project:

```json
"laravel/framework": "5.8.*"
```

This is a **constraint**, not proof of the installed patch. For example,
`^13.0` permits compatible 13.x releases. Use `composer show` or inspect the
locked package entry in `composer.lock` to identify what is actually installed.

| Check | Answers | Important limitation |
| --- | --- | --- |
| `composer show laravel/framework` | Installed framework package version | Requires installed vendor metadata |
| `php artisan --version` | Framework version the application boots with | Can fail when dependencies or environment are broken |
| `composer.json` | Version range the project allows | Does not identify the exact installed patch |
| `composer.lock` | Version selected at the last successful dependency resolution | May be stale if dependencies were changed incorrectly |

## Do not guess purely from directory structure

Developers can customize structure, so structure gives clues but does not prove the exact version.

---

# 29. How to Read an Old Laravel Tutorial

Suppose a tutorial says:

```php
Route::get('/profile', 'ProfileController@index');
```

Do not immediately think:

> Laravel is confusing.

Translate it mentally:

```php
Route::get('/profile', [ProfileController::class, 'index']);
```

---

If it says:

```php
factory(User::class)->create();
```

Translate:

```php
User::factory()->create();
```

---

If it says:

```text
app/User.php
```

Modern equivalent may be:

```text
app/Models/User.php
```

---

If it configures middleware inside:

```text
app/Http/Kernel.php
```

and your Laravel 11+ project has no such file, check:

```text
bootstrap/app.php
```

---

If it uses:

```bash
php artisan make:auth
```

do not run it blindly on Laravel 13.

Use the authentication/starter-kit approach appropriate for your version.

---

# 30. Upgrade Strategy

Never upgrade a large legacy Laravel application by randomly changing Composer versions until Composer stops complaining.

Use a controlled process.

## Step 1 — Create automated tests

At minimum test:

- login
- major CRUD flows
- permissions
- API endpoints
- queues
- scheduled jobs
- payments
- critical integrations

## Step 2 — Back up

Back up:

- source code
- `.env` securely
- database
- uploaded files
- queue configuration
- server configuration

Verify that the database/file backup can actually be restored in a separate environment. A backup that has never passed a restore test is only an assumption.

## Step 3 — Record current versions

```bash
git status --short
php -v
composer --version
php artisan --version
composer show laravel/framework
composer outdated --direct
```

Record database, Redis, Node/npm, operating-system, queue-driver, and important extension versions as well. Work on a dedicated version-controlled branch with a reproducible lock file.

## Step 4 — Read every intermediate upgrade guide

Example:

```text
Laravel 8
   ↓
Laravel 9
   ↓
Laravel 10
   ↓
Laravel 11
   ↓
Laravel 12
   ↓
Laravel 13
```

Do not assume you can safely reason only about 8 → 13 differences.

Create a checklist from every guide before changing dependencies. Pay special attention to low-probability changes that affect your application: route precedence, mail transport internals, Flysystem behavior, cache TTLs, authentication scaffolding, renamed config, PHPUnit/Pest versions, and changes to the application skeleton.

## Step 5 — Upgrade PHP where needed

Framework versions may require newer PHP.

Also inspect:

- PHP extensions
- Composer
- PHPUnit / Pest
- Redis client
- database version
- Node.js
- npm packages

Do not jump PHP and Laravel blindly in one edit. Choose an intermediate PHP version supported by both the current and next Laravel major when possible, update/fix PHP deprecations, then advance the framework.

## Step 6 — Upgrade third-party packages

Common blocker:

```text
Laravel supports version X
but package Y only supports older Illuminate components
```

Ask Composer why an upgrade cannot be selected:

```bash
composer why-not laravel/framework '^13.0'
```

Options:

- update the package
- replace the package
- fork it
- remove obsolete functionality

## Step 7 — Run tests after every major step

```bash
php artisan test
```

Do not wait until the end.

Also run the project's formatter/static analysis and inspect routes/config:

```bash
php artisan about
php artisan route:list
php artisan config:show app
```

Use commands that exist in that intermediate Laravel version; a modern diagnostic command may not exist in a very old release.

## Step 8 — Check logs and deprecations

Run critical workflows manually in a staging environment.

## Step 9 — Deploy safely

Prefer:

```text
development
   ↓
automated tests
   ↓
staging
   ↓
smoke test
   ↓
production
```

Use backward-compatible database migrations so old and new application instances can overlap during deployment. Restart queue/Octane workers to load new code, run smoke tests, monitor errors/latency/queue failures, and keep an application-code rollback plan. Database rollback is harder than code rollback, so prefer reversible staged schema/data changes and forward fixes.

---

# 31. Upgrade Risk Matrix

| Change | Risk |
| --- | ---: |
| Patch version | Low |
| Minor version | Usually low |
| One Laravel major | Medium |
| Several Laravel majors | High |
| Laravel + PHP major together | High |
| Framework + PHP + database + frontend rewrite together | Very high |

Do not unnecessarily combine unrelated migrations.

Laravel follows semantic versioning, so compatible minor/patch releases should not contain breaking changes. Two important caveats are that named parameter names are not covered by Laravel's backward-compatibility promise, and third-party packages can introduce their own regressions or constraints. “Low risk” still means test and review the lock-file diff.

For example, avoid doing all of these in one production release:

```text
Laravel 8 → 13
PHP 7.4 → 8.4
MySQL → PostgreSQL
Vue → React
Webpack Mix → Vite
server → Kubernetes
```

Break large modernization programs into controlled stages.

---

# 32. Laravel Version Recognition Quiz

## Question 1

You see:

```php
factory(User::class)->create();
```

What does it suggest?

**Answer:** Older pre-Laravel-8 factory style.

---

## Question 2

You see:

```php
User::factory()->create();
```

What does it suggest?

**Answer:** Laravel 8+ factory style.

---

## Question 3

You see:

```php
Route::get('/users', 'UserController@index');
```

What does it suggest?

**Answer:** Common legacy route-controller syntax.

---

## Question 4

You see:

```php
Route::get('/users', [UserController::class, 'index']);
```

What does it suggest?

**Answer:** Modern class-based controller route style.

---

## Question 5

You cannot find:

```text
app/Http/Kernel.php
```

but the application is modern Laravel.

Where should you look?

**Answer:**

```text
bootstrap/app.php
```

especially in Laravel 11+ style applications.

---

## Question 6

A tutorial says "Laravel Airlock".

What should you remember?

**Answer:** Airlock became Laravel Sanctum.

---

## Question 7

A project has:

```text
webpack.mix.js
```

What frontend generation is it likely associated with?

**Answer:** Laravel Mix.

---

## Question 8

A new project uses Vite.

Is that unusual?

**Answer:** No. Vite is the modern Laravel asset build approach.

---

# 33. What You Actually Need to Memorize

You do **not** need this:

```text
exact release date of every Laravel version
every helper introduced in every minor release
every internal Symfony dependency change
every deprecated method
```

You **should** know:

```text
Laravel 5  → modern application architecture
Laravel 5.3 → Passport, Scout, Echo, Notifications, Mailables
Laravel 5.4 → Mix era
Laravel 5.5 → API Resources + package discovery
Laravel 5.8 → final 5.x
Laravel 6   → SemVer + LTS
Laravel 7   → HTTP client + modern Blade components + Airlock/Sanctum
Laravel 8   → modern factories + Models directory + class routes
Laravel 9   → PHP 8 + Symfony Mailer + new Attribute API + enums
Laravel 10  → types + Process + Pennant
Laravel 11  → slim application skeleton + bootstrap/app.php
Laravel 12  → continuation of modern slim Laravel
Laravel 13  → PHP 8.3–8.5 + AI SDK/MCP + JSON:API + queue routing/attributes
```

That is enough to build a strong mental map.

---

# 34. Best Learning Order Today

## Stage 1 — Laravel fundamentals

Learn on the current version:

1. installation
2. directory structure
3. routes
4. controllers
5. requests/responses
6. Blade
7. validation
8. database
9. migrations
10. Eloquent
11. relationships

## Stage 2 — Application development

Learn:

1. authentication
2. authorization
3. Form Requests
4. services
5. dependency injection
6. events/listeners
7. mail
8. notifications
9. files
10. API Resources

## Stage 3 — Production Laravel

Learn:

1. queues
2. scheduler
3. cache
4. Redis
5. logging
6. rate limiting
7. transactions
8. database locking
9. testing
10. security

## Stage 4 — Architecture

Learn:

1. service container
2. service providers
3. actions/services
4. repositories only when justified
5. DTOs
6. policies
7. domain boundaries
8. events
9. idempotency
10. concurrency

## Stage 5 — Legacy awareness

Only then study version differences.

This keeps historical details from overwhelming you.

---

# 35. Scenario: You Join a Company With Laravel 5.8

Do not immediately rewrite it.

First inspect:

```bash
php artisan --version
php -v
composer show
```

Then map:

```text
Laravel 5.8 application
       ↓
business-critical?
       ↓
tests available?
       ↓
package compatibility?
       ↓
PHP upgrade requirements?
       ↓
incremental Laravel upgrade plan
```

Your first job is to understand the application.

Not to prove that Laravel 13 is newer.

---

# 36. Scenario: You Join a Laravel 8 Project

Laravel 8 is close enough to modern Laravel that much will feel familiar.

Expect differences around:

- PHP requirements
- Mailer dependencies
- frontend bundling
- application bootstrapping
- older packages
- kernel configuration
- Eloquent APIs

A good upgrade path is conceptually:

```text
8 → 9 → 10 → 11 → 12 → 13
```

Validate each stage.

---

# 37. Scenario: Tutorial Uses Laravel 10 but You Use Laravel 13

Most fundamentals may still apply:

```text
route
controller
request
validation
Eloquent
Blade
queues
events
cache
testing
```

Watch especially for:

- skeleton structure
- bootstrap configuration
- middleware registration
- package versions
- starter kits
- framework APIs introduced later

Do not abandon a good tutorial merely because it is a few versions old.

Learn the concept, then check the current documentation for version-specific syntax.

---

# 38. Scenario: Maintaining Both Legacy and Modern Laravel

A company may have:

```text
Application A → Laravel 5.8
Application B → Laravel 8
Application C → Laravel 11
Application D → Laravel 13
```

Do not mix conventions unconsciously.

For every repository, keep a mental "version context".

Before coding:

```bash
php artisan --version
```

Then use documentation for that version.

This prevents mistakes such as copying Laravel 13 middleware configuration into Laravel 8.

---

# 39. Version-Aware Debugging Checklist

When code from Stack Overflow or an AI assistant does not work, ask:

## 1. Which Laravel version is this answer for?

## 2. Which PHP version is required?

## 3. Is the package version compatible?

## 4. Did the application skeleton change?

## 5. Was the API renamed?

## 6. Was functionality moved to a package?

## 7. Is the tutorial using Mix while the project uses Vite?

## 8. Is it showing `Kernel.php` while the project uses Laravel 11+ bootstrapping?

## 9. Is it showing old model factories?

## 10. Is it showing old authentication scaffolding?

This solves a surprising number of Laravel problems.

---

# 40. Final Mental Model

Do not think:

```text
Laravel 5
Laravel 6
Laravel 7
Laravel 8
...
Laravel 13

= 9 completely different frameworks
```

Think:

```text
One framework
    ↓
same core philosophy
    ↓
gradually improved conventions
    ↓
modern PHP features
    ↓
less boilerplate
    ↓
better tooling
    ↓
new application capabilities
```

Core Laravel concepts survived for years:

```text
Route
Request
Middleware
Controller
Validation
Service Container
Eloquent
Blade
Events
Queues
Cache
Testing
```

The syntax and default structure evolved.

The mental model stayed remarkably stable.

---

# 41. One-Page Laravel Timeline

```text
Laravel 4
│
├─ Composer-centered architecture
├─ Container / providers
└─ Strong modern framework foundation
     │
Laravel 5.0
│
├─ New application structure
├─ PSR-4
├─ Middleware
└─ Form Requests
     │
Laravel 5.1
│
├─ First LTS
└─ Better factories/testing
     │
Laravel 5.2
│
├─ Middleware groups
└─ Route model binding improvements
     │
Laravel 5.3
│
├─ Notifications
├─ Mailables
├─ Passport
├─ Scout
├─ Echo
└─ web.php / api.php
     │
Laravel 5.4
│
├─ Mix
├─ Dusk
└─ better Blade components
     │
Laravel 5.5
│
├─ LTS
├─ API Resources
└─ package discovery
     │
Laravel 5.6
│
├─ logging channels
└─ production scheduling improvements
     │
Laravel 5.7
│
└─ email verification
     │
Laravel 5.8
│
├─ final 5.x
├─ hasOneThrough
└─ policy discovery
     │
Laravel 6
│
├─ Semantic Versioning
├─ LTS
└─ Laravel UI extracted
     │
Laravel 7
│
├─ HTTP Client
├─ Blade component tags
└─ Airlock → Sanctum
     │
Laravel 8
│
├─ class factories
├─ app/Models
├─ class route syntax
└─ job batching
     │
Laravel 9
│
├─ PHP 8
├─ Symfony Mailer
├─ Flysystem 3
├─ Attribute API
└─ Enums
     │
Laravel 10
│
├─ stronger typing
├─ Process facade
└─ Pennant
     │
Laravel 11
│
├─ slim skeleton
├─ bootstrap/app.php configuration
├─ Context
└─ Concurrency
     │
Laravel 12
│
├─ modern starter-kit generation
└─ refinement of Laravel 11 architecture
     │
Laravel 13
│
├─ PHP 8.3+
├─ optional AI SDK and MCP packages
├─ first-party JSON:API resources
├─ vector-similarity query support
├─ central queue routing and job attributes
├─ controller middleware/authorization attributes
└─ stronger request-forgery protection
```

---

# 42. Source and Verification Notes

This handbook intentionally summarizes the **learner-relevant changes**, not every patch-level framework change.

For exact upgrade work, always use the official Laravel documentation and the upgrade guide for each major version.

Official current-version references:

- [Laravel 13 release notes and support policy](https://laravel.com/docs/13.x/releases)
- [Laravel 13 upgrade guide](https://laravel.com/docs/13.x/upgrade)
- [Laravel framework package releases](https://packagist.org/packages/laravel/framework)
- [Laravel AI SDK](https://laravel.com/docs/13.x/ai-sdk)
- [Laravel MCP](https://laravel.com/docs/13.x/mcp)
- [Laravel JSON:API resources](https://laravel.com/docs/13.x/eloquent-resources#json-api-resources)
- [Laravel queues](https://laravel.com/docs/13.x/queues)
- [Laravel request-forgery protection](https://laravel.com/docs/13.x/csrf)
- [Laravel 12 starter kits](https://laravel.com/docs/12.x/starter-kits)

Official historical release notes:

- [Laravel 12](https://laravel.com/docs/12.x/releases)
- [Laravel 11](https://laravel.com/docs/11.x/releases)
- [Laravel 10](https://laravel.com/docs/10.x/releases)
- [Laravel 9](https://laravel.com/docs/9.x/releases)
- [Laravel 8](https://laravel.com/docs/8.x/releases)
- [Laravel 7](https://laravel.com/docs/7.x/releases)
- [Laravel 6](https://laravel.com/docs/6.x/releases)
- [Laravel 5.8](https://laravel.com/docs/5.8/releases)
- [Laravel 5.7](https://laravel.com/docs/5.7/releases)
- [Laravel 5.6](https://laravel.com/docs/5.6/releases)
- [Laravel 5.5](https://laravel.com/docs/5.5/releases)
- [Laravel 5.4](https://laravel.com/docs/5.4/releases)
- [Laravel 5.3](https://laravel.com/docs/5.3/releases)
- [Laravel 5.2](https://laravel.com/docs/5.2/releases)
- [Laravel 5.1](https://laravel.com/docs/5.1/releases)
- [Laravel 5.0](https://laravel.com/docs/5.0/releases)

---

# 43. Final Advice

If your goal is to become excellent at Laravel:

**Do not learn Laravel chronologically.**

Learn modern Laravel first.

Then use this handbook to recognize historical conventions when you encounter old projects.

The priority should be:

```text
Modern Laravel mastery
        ↓
Laravel architecture
        ↓
production engineering
        ↓
legacy recognition
        ↓
version migrations
```

That approach gives you useful skills faster without overwhelming you with history.

---

**End of Laravel Version Evolution Handbook**
