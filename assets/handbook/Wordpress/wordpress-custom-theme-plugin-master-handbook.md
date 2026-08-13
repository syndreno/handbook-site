# WordPress Custom Theme & Plugin Development — Master Learning Handbook

> A beginner-to-advanced, practical reference for building professional WordPress themes and plugins.
>
> Focus: **custom themes, custom plugins, directory structure, architecture, hooks, security, APIs, Gutenberg/block development, real-world scenarios, debugging, testing, performance, and deployment**.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [WordPress Mental Model](#2-wordpress-mental-model)
3. [Prerequisites](#3-prerequisites)
4. [Local Development Setup](#4-local-development-setup)
5. [WordPress Core Directory Structure](#5-wordpress-core-directory-structure)
6. [WordPress Request Lifecycle](#6-wordpress-request-lifecycle)
7. [Themes vs Plugins: Where Should Code Live?](#7-themes-vs-plugins-where-should-code-live)
8. [Custom Theme Development Overview](#8-custom-theme-development-overview)
9. [Classic Theme Directory Structure](#9-classic-theme-directory-structure)
10. [Block Theme Directory Structure](#10-block-theme-directory-structure)
11. [Theme Header and style.css](#11-theme-header-and-stylecss)
12. [functions.php and Theme Bootstrap](#12-functionsphp-and-theme-bootstrap)
13. [Template Hierarchy](#13-template-hierarchy)
14. [The WordPress Loop](#14-the-wordpress-loop)
15. [WP_Query and Custom Queries](#15-wp_query-and-custom-queries)
16. [Template Parts](#16-template-parts)
17. [Theme Assets: CSS and JavaScript](#17-theme-assets-css-and-javascript)
18. [Theme Support Features](#18-theme-support-features)
19. [Navigation Menus](#19-navigation-menus)
20. [Sidebars and Widgets](#20-sidebars-and-widgets)
21. [Featured Images and Image Sizes](#21-featured-images-and-image-sizes)
22. [Custom Post Types](#22-custom-post-types)
23. [Custom Taxonomies](#23-custom-taxonomies)
24. [Post Meta and Custom Fields](#24-post-meta-and-custom-fields)
25. [Theme Options, Theme Mods, and Settings](#25-theme-options-theme-mods-and-settings)
26. [Customizer Concepts](#26-customizer-concepts)
27. [Block Editor and Gutenberg Fundamentals](#27-block-editor-and-gutenberg-fundamentals)
28. [theme.json](#28-themejson)
29. [Block Templates and Template Parts](#29-block-templates-and-template-parts)
30. [Block Patterns](#30-block-patterns)
31. [Custom Blocks](#31-custom-blocks)
32. [Child Themes](#32-child-themes)
33. [Internationalization and Localization](#33-internationalization-and-localization)
34. [Accessibility](#34-accessibility)
35. [SEO-Friendly Theme Development](#35-seo-friendly-theme-development)
36. [Theme Performance](#36-theme-performance)
37. [Plugin Development Overview](#37-plugin-development-overview)
38. [Plugin Directory Structure](#38-plugin-directory-structure)
39. [Plugin Header](#39-plugin-header)
40. [Plugin Bootstrap Architecture](#40-plugin-bootstrap-architecture)
41. [Functional vs OOP Plugin Architecture](#41-functional-vs-oop-plugin-architecture)
42. [Namespaces and Composer Autoloading](#42-namespaces-and-composer-autoloading)
43. [Plugin Activation, Deactivation, and Uninstall](#43-plugin-activation-deactivation-and-uninstall)
44. [Hooks: Actions and Filters](#44-hooks-actions-and-filters)
45. [Custom Hooks](#45-custom-hooks)
46. [Admin Menus and Pages](#46-admin-menus-and-pages)
47. [Settings API and Options API](#47-settings-api-and-options-api)
48. [WordPress Database API and $wpdb](#48-wordpress-database-api-and-wpdb)
49. [Custom Database Tables](#49-custom-database-tables)
50. [Data Modeling: Post Meta vs Options vs Custom Tables](#50-data-modeling-post-meta-vs-options-vs-custom-tables)
51. [Shortcodes](#51-shortcodes)
52. [AJAX](#52-ajax)
53. [REST API](#53-rest-api)
54. [Authentication, Users, Roles, and Capabilities](#54-authentication-users-roles-and-capabilities)
55. [Security Master Chapter](#55-security-master-chapter)
56. [Forms and Nonces](#56-forms-and-nonces)
57. [Sanitization, Validation, and Escaping](#57-sanitization-validation-and-escaping)
58. [File Uploads](#58-file-uploads)
59. [HTTP API and External APIs](#59-http-api-and-external-apis)
60. [Email](#60-email)
61. [WP-Cron and Scheduled Jobs](#61-wp-cron-and-scheduled-jobs)
62. [Caching and Transients](#62-caching-and-transients)
63. [Rewrite Rules and Custom URLs](#63-rewrite-rules-and-custom-urls)
64. [WooCommerce Customization Architecture](#64-woocommerce-customization-architecture)
65. [Multisite Concepts](#65-multisite-concepts)
66. [WP-CLI](#66-wp-cli)
67. [JavaScript in Modern WordPress](#67-javascript-in-modern-wordpress)
68. [Coding Standards and Code Organization](#68-coding-standards-and-code-organization)
69. [Error Handling, Logging, and Debugging](#69-error-handling-logging-and-debugging)
70. [Testing](#70-testing)
71. [Performance Engineering](#71-performance-engineering)
72. [Security Hardening](#72-security-hardening)
73. [Git and Deployment Workflow](#73-git-and-deployment-workflow)
74. [CI/CD for WordPress](#74-cicd-for-wordpress)
75. [Production Plugin Upgrade and Database Migration Strategy](#75-production-plugin-upgrade-and-database-migration-strategy)
76. [Real-World Scenario 1: Company Website Theme](#76-real-world-scenario-1-company-website-theme)
77. [Scenario 2: Portfolio Theme](#77-scenario-2-portfolio-theme)
78. [Scenario 3: Events Plugin](#78-scenario-3-events-plugin)
79. [Scenario 4: Employee Directory Plugin](#79-scenario-4-employee-directory-plugin)
80. [Scenario 5: AJAX Product Search](#80-scenario-5-ajax-product-search)
81. [Scenario 6: External API Integration](#81-scenario-6-external-api-integration)
82. [Scenario 7: Headless WordPress](#82-scenario-7-headless-wordpress)
83. [Scenario 8: Scheduled Report Plugin](#83-scenario-8-scheduled-report-plugin)
84. [Scenario 9: WooCommerce Extension](#84-scenario-9-woocommerce-extension)
85. [Scenario 10: SaaS-Style Plugin Architecture](#85-scenario-10-saas-style-plugin-architecture)
86. [Common Mistakes and Better Patterns](#86-common-mistakes-and-better-patterns)
87. [Interview Questions](#87-interview-questions)
88. [Cheat Sheets](#88-cheat-sheets)
89. [Practice Projects](#89-practice-projects)
90. [90-Day Learning Roadmap](#90-90-day-learning-roadmap)
91. [Production Readiness Checklists](#91-production-readiness-checklists)
92. [Official Documentation Map](#92-official-documentation-map)
93. [Final Architecture Principles](#93-final-architecture-principles)

---

# 1. How to Use This Handbook

This handbook is designed for three types of learners:

- A beginner who knows basic PHP/HTML/CSS but is new to WordPress development.
- A developer who has used WordPress but mostly through ready-made themes/plugins.
- An experienced developer who wants a structured reference for production-quality custom WordPress development.

A good learning sequence is:

```text
WordPress basics
    ↓
Directory structure
    ↓
Theme development
    ↓
Hooks
    ↓
Plugin development
    ↓
Database + APIs
    ↓
Security
    ↓
Gutenberg / block development
    ↓
Testing + performance
    ↓
Deployment + architecture
```

Do not try to memorize every WordPress function.

Instead learn:

1. **What problem does the API solve?**
2. **Which hook or lifecycle stage should I use?**
3. **Where should the code live?**
4. **What security checks are required?**
5. **How will the code behave when the site grows?**

---

# 2. WordPress Mental Model

WordPress is not merely a blogging application.

From a developer's perspective, WordPress is a PHP application platform containing:

- routing
- content management
- database abstraction
- authentication
- authorization
- themes
- plugins
- hooks
- REST APIs
- caching APIs
- HTTP APIs
- cron scheduling
- media management
- internationalization
- block editor
- admin UI
- users and roles

A simplified architecture:

```text
Browser
   |
   v
Web Server
Apache / Nginx
   |
   v
index.php
   |
   v
wp-blog-header.php
   |
   v
WordPress Bootstrap
   |
   +--> Plugins
   |
   +--> Active Theme
   |
   +--> Query Processing
   |
   +--> Template Selection
   |
   v
HTML Response
```

Think of WordPress as an event-driven application.

Instead of editing WordPress core, you normally extend WordPress through:

```text
Hooks
├── Actions
└── Filters
```

This is one of the most important ideas in WordPress development.

---

# 3. Prerequisites

Before advanced WordPress development, understand the following.

## PHP

You should know:

- variables
- arrays
- associative arrays
- functions
- loops
- conditions
- classes
- interfaces
- namespaces
- exceptions
- static methods
- dependency injection basics
- Composer basics

Example:

```php
$user = [
    'name' => 'Aisha',
    'role' => 'editor',
];

if ($user['role'] === 'editor') {
    echo 'Can edit content';
}
```

## HTML

Understand:

- semantic HTML
- forms
- accessibility attributes
- forms and input types
- metadata
- responsive images

## CSS

Understand:

- selectors
- cascade
- specificity
- Flexbox
- Grid
- media queries
- custom properties

## JavaScript

Modern WordPress increasingly uses JavaScript.

Know:

- variables
- arrays and objects
- functions
- promises
- fetch
- modules
- DOM
- React fundamentals for block development

## SQL

Understand:

```sql
SELECT
INSERT
UPDATE
DELETE
JOIN
GROUP BY
ORDER BY
INDEX
```

You normally use WordPress APIs instead of writing raw SQL everywhere, but SQL knowledge is extremely useful.

---

# 4. Local Development Setup

Common development choices include:

- Local
- Docker
- DDEV
- XAMPP
- WAMP
- MAMP
- native Apache/Nginx + PHP + MySQL/MariaDB

A professional environment should give you:

```text
PHP
MySQL/MariaDB
Web server
HTTPS if possible
Git
Composer
Node.js/npm
WP-CLI
Code editor
Browser DevTools
```

Recommended project habits:

```text
development
staging
production
```

Do not develop directly on production.

Example workflow:

```text
Local code
   ↓
Git
   ↓
Staging
   ↓
Testing
   ↓
Production
```

---

# 5. WordPress Core Directory Structure

A normal WordPress installation resembles:

```text
wordpress/
├── wp-admin/
├── wp-content/
│   ├── plugins/
│   ├── themes/
│   ├── uploads/
│   └── languages/
├── wp-includes/
├── index.php
├── wp-config.php
├── wp-load.php
├── wp-blog-header.php
├── wp-settings.php
└── .htaccess
```

## wp-admin

Contains WordPress administration code.

Do not customize core files here.

## wp-includes

Contains WordPress core libraries.

Again, do not directly modify these files.

## wp-content

Most custom application development happens here.

```text
wp-content/
├── plugins/
│   └── your-plugin/
├── themes/
│   └── your-theme/
├── mu-plugins/
└── uploads/
```

## wp-config.php

Contains application-level configuration.

Typical examples:

```php
define('DB_NAME', 'wordpress');
define('WP_DEBUG', true);
```

Never commit real production passwords or secrets into a public repository.

---

# 6. WordPress Request Lifecycle

Understanding the lifecycle helps you choose the correct hook.

Simplified flow:

```text
HTTP Request
   ↓
index.php
   ↓
wp-blog-header.php
   ↓
wp-load.php
   ↓
wp-config.php
   ↓
wp-settings.php
   ↓
Plugins loaded
   ↓
Theme loaded
   ↓
WordPress query created
   ↓
Template hierarchy evaluated
   ↓
Template loaded
   ↓
HTML generated
   ↓
Response
```

Important lifecycle hooks include:

```text
plugins_loaded
init
wp_loaded
template_redirect
wp_enqueue_scripts
wp_head
wp_footer
admin_init
admin_menu
rest_api_init
shutdown
```

Example:

```php
add_action('init', function () {
    // Register post types, taxonomies, etc.
});
```

Why `init`?

Because WordPress has initialized enough of its environment for many registration APIs to be used safely.

---

# 7. Themes vs Plugins: Where Should Code Live?

This question prevents many architectural mistakes.

## Theme

A theme should primarily control:

- presentation
- layout
- templates
- styles
- visual components
- block styles
- design system

## Plugin

A plugin should primarily control:

- business functionality
- custom post types that must survive theme changes
- integrations
- admin tools
- background jobs
- API endpoints
- business rules
- custom database tables

### Bad design

A theme registers a critical `invoice` post type.

Later the website changes themes.

The invoice functionality disappears.

### Better design

```text
Plugin
└── Invoice functionality

Theme
└── Invoice presentation
```

Rule of thumb:

> If the functionality should continue working after changing the theme, put it in a plugin.

---

# 8. Custom Theme Development Overview

WordPress supports two broad theme approaches:

```text
Themes
├── Classic themes
└── Block themes
```

## Classic Theme

Primarily PHP template files:

```text
index.php
header.php
footer.php
single.php
page.php
archive.php
```

## Block Theme

Primarily HTML block templates plus `theme.json`:

```text
templates/
parts/
patterns/
theme.json
```

Modern WordPress development should understand both because existing production sites may use classic themes while newer builds may use block themes.

---

# 9. Classic Theme Directory Structure

A scalable custom classic theme might look like:

```text
my-company-theme/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── admin.css
│   ├── js/
│   │   ├── main.js
│   │   └── navigation.js
│   ├── images/
│   └── fonts/
│
├── inc/
│   ├── setup.php
│   ├── enqueue.php
│   ├── menus.php
│   ├── widgets.php
│   ├── template-functions.php
│   ├── template-tags.php
│   └── helpers.php
│
├── template-parts/
│   ├── content/
│   │   ├── content.php
│   │   ├── content-page.php
│   │   └── content-single.php
│   ├── header/
│   └── footer/
│
├── page-templates/
│   ├── full-width.php
│   └── landing-page.php
│
├── languages/
│
├── 404.php
├── archive.php
├── comments.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── home.php
├── index.php
├── page.php
├── screenshot.png
├── search.php
├── sidebar.php
├── single.php
├── style.css
└── theme.json
```

Not every project requires every file.

Start small and grow when needed.

---

# 10. Block Theme Directory Structure

A typical block theme may look like:

```text
my-block-theme/
├── assets/
│   ├── css/
│   ├── js/
│   ├── fonts/
│   └── images/
│
├── parts/
│   ├── header.html
│   ├── footer.html
│   └── sidebar.html
│
├── patterns/
│   ├── hero.php
│   ├── pricing.php
│   └── testimonials.php
│
├── styles/
│   ├── blue.json
│   └── dark.json
│
├── templates/
│   ├── 404.html
│   ├── archive.html
│   ├── home.html
│   ├── index.html
│   ├── page.html
│   └── single.html
│
├── functions.php
├── screenshot.png
├── style.css
└── theme.json
```

Important distinction:

```text
Classic Theme          Block Theme
-------------          -----------
single.php             templates/single.html
header.php             parts/header.html
footer.php             parts/footer.html
PHP layout             block markup
Customizer-heavy       Site Editor/theme.json
```

---

# 11. Theme Header and style.css

Every traditional WordPress theme needs identifying metadata.

Example:

```css
/*
Theme Name: Company Theme
Theme URI: https://example.invalid
Author: Your Team
Description: Custom company theme.
Version: 1.0.0
Text Domain: company-theme
*/
```

`style.css` is not merely a normal stylesheet.

WordPress reads its header to identify the theme.

You may still store most real CSS in:

```text
assets/css/main.css
```

and enqueue it properly.

---

# 12. functions.php and Theme Bootstrap

`functions.php` behaves somewhat like a theme bootstrap file.

Do not turn it into a 5,000-line dumping ground.

Bad:

```text
functions.php
├── theme setup
├── menus
├── AJAX
├── custom post types
├── shortcodes
├── API code
├── 70 helper functions
└── everything else
```

Better:

```php
<?php

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/enqueue.php';
require_once get_template_directory() . '/inc/template-tags.php';
```

Example theme setup:

```php
<?php

function company_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'company-theme'),
        'footer'  => __('Footer Menu', 'company-theme'),
    ]);
}

add_action('after_setup_theme', 'company_theme_setup');
```

---

# 13. Template Hierarchy

WordPress chooses templates based on the current request.

This is called the **template hierarchy**.

Conceptually:

```text
Specific template
      ↓
Less specific template
      ↓
Fallback
      ↓
index.php
```

## Single Post

Possible order:

```text
single-{post-type}-{slug}.php
single-{post-type}.php
single.php
singular.php
index.php
```

## Page

```text
Custom page template
page-{slug}.php
page-{id}.php
page.php
singular.php
index.php
```

## Category

```text
category-{slug}.php
category-{id}.php
category.php
archive.php
index.php
```

## Custom Post Type Archive

For a `book` post type:

```text
archive-book.php
archive.php
index.php
```

## Single Custom Post Type

```text
single-book.php
single.php
singular.php
index.php
```

### Example scenario

You create:

```php
register_post_type('movie', ...);
```

To customize individual movie pages:

```text
single-movie.php
```

For the movie listing:

```text
archive-movie.php
```

---

# 14. The WordPress Loop

The Loop processes posts returned by the main WordPress query.

Classic example:

```php
<?php if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); ?>

        <article <?php post_class(); ?>>

            <h2>
                <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>
            </h2>

            <div>
                <?php the_excerpt(); ?>
            </div>

        </article>

    <?php endwhile; ?>

<?php else : ?>

    <p><?php esc_html_e('No posts found.', 'company-theme'); ?></p>

<?php endif; ?>
```

Important Loop functions:

```text
have_posts()
the_post()
the_title()
the_content()
the_excerpt()
the_permalink()
the_ID()
get_the_ID()
get_the_title()
get_the_content()
```

### `the_*()` vs `get_the_*()`

Usually:

```php
the_title();
```

prints the value.

Whereas:

```php
$title = get_the_title();
```

returns the value.

---

# 15. WP_Query and Custom Queries

Use `WP_Query` when you need a separate content query.

Example:

```php
$query = new WP_Query([
    'post_type'      => 'book',
    'posts_per_page' => 6,
    'post_status'    => 'publish',
]);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();

        echo '<h3>' . esc_html(get_the_title()) . '</h3>';
    }
}

wp_reset_postdata();
```

Always remember:

```php
wp_reset_postdata();
```

after custom loops that use `the_post()`.

## Meta query example

```php
$query = new WP_Query([
    'post_type' => 'property',
    'meta_query' => [
        [
            'key'     => 'price',
            'value'   => 5000000,
            'compare' => '<=',
            'type'    => 'NUMERIC',
        ],
    ],
]);
```

## Taxonomy query

```php
$query = new WP_Query([
    'post_type' => 'book',
    'tax_query' => [
        [
            'taxonomy' => 'genre',
            'field'    => 'slug',
            'terms'    => ['technology'],
        ],
    ],
]);
```

Avoid unnecessary heavy meta queries on very large sites.

That is where custom tables or better data modeling can become important.

---

# 16. Template Parts

Instead of duplicating markup, create reusable template files.

Example:

```text
template-parts/
└── content-card.php
```

Load:

```php
get_template_part('template-parts/content', 'card');
```

WordPress looks for:

```text
template-parts/content-card.php
```

Passing data:

```php
get_template_part(
    'template-parts/content',
    'card',
    [
        'show_excerpt' => true,
    ]
);
```

Inside the template:

```php
$show_excerpt = $args['show_excerpt'] ?? false;
```

Use template parts for:

- cards
- hero sections
- article headers
- pricing blocks
- CTA sections
- breadcrumbs
- content variations

---

# 17. Theme Assets: CSS and JavaScript

Do not hard-code asset tags directly into `header.php`.

Use enqueue APIs.

```php
function company_enqueue_assets(): void
{
    wp_enqueue_style(
        'company-main',
        get_template_directory_uri() . '/assets/css/main.css',
        [],
        '1.0.0'
    );

    wp_enqueue_script(
        'company-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );
}

add_action('wp_enqueue_scripts', 'company_enqueue_assets');
```

Why enqueue?

WordPress can:

- manage dependencies
- prevent duplicate loading
- control versions
- allow plugins to interact
- load scripts at appropriate times

Conditional loading:

```php
if (is_page_template('page-templates/contact.php')) {
    wp_enqueue_script(...);
}
```

This helps performance.

---

# 18. Theme Support Features

Register features inside `after_setup_theme`.

```php
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('automatic-feed-links');
add_theme_support('custom-logo');
```

Example custom logo configuration:

```php
add_theme_support('custom-logo', [
    'height'      => 100,
    'width'       => 300,
    'flex-height' => true,
    'flex-width'  => true,
]);
```

Then display:

```php
the_custom_logo();
```

---

# 19. Navigation Menus

Register:

```php
register_nav_menus([
    'primary' => __('Primary Menu', 'company-theme'),
    'footer'  => __('Footer Menu', 'company-theme'),
]);
```

Render:

```php
wp_nav_menu([
    'theme_location' => 'primary',
    'container'      => 'nav',
    'menu_class'     => 'primary-menu',
]);
```

Scenario:

```text
Header
├── Logo
└── Primary Menu

Footer
├── Footer Menu
└── Legal Menu
```

Each menu location should have a clear presentation role.

---

# 20. Sidebars and Widgets

Classic themes can register widget areas.

```php
function company_widgets_init(): void
{
    register_sidebar([
        'name'          => __('Blog Sidebar', 'company-theme'),
        'id'            => 'blog-sidebar',
        'before_widget' => '<section class="widget">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ]);
}

add_action('widgets_init', 'company_widgets_init');
```

Render:

```php
if (is_active_sidebar('blog-sidebar')) {
    dynamic_sidebar('blog-sidebar');
}
```

On block-first sites, block patterns and Site Editor areas may replace many traditional widget workflows.

---

# 21. Featured Images and Image Sizes

Enable:

```php
add_theme_support('post-thumbnails');
```

Register custom size:

```php
add_image_size('blog-card', 720, 480, true);
```

Use:

```php
the_post_thumbnail('blog-card');
```

Avoid uploading a 5000px image and showing it everywhere.

Use:

- appropriate image dimensions
- modern formats when supported by your stack
- responsive images
- lazy loading where appropriate
- optimized source files

---

# 22. Custom Post Types

A custom post type models domain-specific content.

Examples:

```text
book
movie
event
property
job
course
testimonial
invoice
```

Basic example:

```php
function company_register_book_type(): void
{
    register_post_type('book', [
        'labels' => [
            'name'          => __('Books', 'company-plugin'),
            'singular_name' => __('Book', 'company-plugin'),
        ],
        'public'       => true,
        'show_in_rest' => true,
        'has_archive'  => true,
        'rewrite'      => [
            'slug' => 'books',
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
            'excerpt',
        ],
    ]);
}

add_action('init', 'company_register_book_type');
```

`show_in_rest => true` is especially important for block editor and REST integration.

### Theme or plugin?

For business-critical content types, prefer a plugin.

Example:

```text
company-core/
└── registers:
    ├── services
    ├── team_members
    └── case_studies
```

Then any theme can display those types.

---

# 23. Custom Taxonomies

A taxonomy classifies content.

WordPress built-ins include:

```text
category
post_tag
```

Custom examples:

```text
genre
department
location
skill
brand
property_type
```

Example:

```php
function company_register_genre_taxonomy(): void
{
    register_taxonomy(
        'genre',
        ['book'],
        [
            'label'        => __('Genres', 'company-plugin'),
            'public'       => true,
            'hierarchical' => true,
            'show_in_rest' => true,
        ]
    );
}

add_action('init', 'company_register_genre_taxonomy');
```

Use taxonomy when the data represents reusable grouping/filtering.

Use post meta when the data represents properties of one item.

Example:

```text
Book
├── Title
├── Author Name         -> meta or separate entity
├── ISBN                -> meta
├── Price               -> meta
└── Genre               -> taxonomy
```

---

# 24. Post Meta and Custom Fields

Metadata stores additional information about a post.

```php
update_post_meta(
    $post_id,
    '_company_price',
    499
);
```

Read:

```php
$price = get_post_meta(
    $post_id,
    '_company_price',
    true
);
```

Delete:

```php
delete_post_meta($post_id, '_company_price');
```

Prefix custom keys to reduce collisions.

Example:

```text
_bad:
price

_better:
_company_price
```

For REST-aware meta, consider `register_post_meta()` / `register_meta()` with explicit types, sanitization, and authorization rules.

---

# 25. Theme Options, Theme Mods, and Settings

There are multiple ways to store configuration.

## Theme mods

Good for theme-specific appearance values.

```php
set_theme_mod('company_header_style', 'dark');

$value = get_theme_mod('company_header_style', 'light');
```

## Options

Good for plugin/application configuration.

```php
update_option('company_api_key', '...');
$value = get_option('company_api_key');
```

Avoid creating hundreds of unnecessary autoloaded options.

Think about lifecycle:

> Should this value remain after the theme changes?

If yes, it probably should not be stored as theme presentation data.

---

# 26. Customizer Concepts

Classic themes often expose appearance options using the Customizer.

Common concepts:

```text
Panel
└── Section
    ├── Setting
    └── Control
```

Example:

```php
function company_customize_register($wp_customize): void
{
    $wp_customize->add_setting('company_phone', [
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('company_phone', [
        'label'   => __('Phone Number', 'company-theme'),
        'section' => 'title_tagline',
        'type'    => 'text',
    ]);
}

add_action('customize_register', 'company_customize_register');
```

For modern block themes, many design settings belong in the Site Editor and `theme.json`.

---

# 27. Block Editor and Gutenberg Fundamentals

The Block Editor treats content as structured blocks.

Examples:

```text
Paragraph
Heading
Image
Gallery
Columns
Buttons
Query
Navigation
Group
Cover
Custom Block
```

A block has attributes and rendered output.

Conceptual structure:

```text
Block
├── attributes
├── editor representation
├── saved markup or server render
├── styles
└── supports
```

Custom blocks are often preferable to shortcodes for rich editor experiences.

Use a shortcode when:

- you need simple legacy compatibility
- the output is text-oriented
- no advanced editor UI is necessary

Use a block when:

- users need visual editing
- structured attributes matter
- you want modern editor integration

---

# 28. theme.json

`theme.json` acts as a theme-level configuration and design-system layer.

Typical responsibilities include:

- color palette
- typography
- spacing
- layout
- block settings
- global styles
- style presets

Simplified example:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "primary",
          "name": "Primary",
          "color": "#1e40af"
        }
      ]
    },
    "layout": {
      "contentSize": "760px",
      "wideSize": "1200px"
    }
  },
  "styles": {
    "typography": {
      "lineHeight": "1.6"
    }
  }
}
```

The exact schema evolves.

For real projects, validate against the schema/version appropriate to your supported WordPress release.

Think of `theme.json` as:

```text
Design tokens
+
Editor capabilities
+
Default styles
+
Block-specific configuration
```

---

# 29. Block Templates and Template Parts

Block themes use HTML files containing block markup.

Example:

```text
templates/single.html
parts/header.html
parts/footer.html
```

Conceptual `single.html`:

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"main"} -->
<main class="wp-block-group">
    <!-- wp:post-title /-->
    <!-- wp:post-content /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

This moves much of the layout from PHP templates into block templates.

---

# 30. Block Patterns

Patterns are reusable block compositions.

Examples:

- hero section
- pricing table
- testimonials
- CTA
- contact section
- feature grid

A theme pattern might live in:

```text
patterns/hero.php
```

Example metadata:

```php
<?php
/**
 * Title: Hero
 * Slug: company-theme/hero
 * Categories: featured
 */
?>
```

Patterns are valuable because users can insert a well-designed section while still editing its content.

---

# 31. Custom Blocks

A production custom block usually has:

```text
src/
└── blocks/
    └── employee-card/
        ├── block.json
        ├── edit.js
        ├── save.js
        ├── style.scss
        └── editor.scss
```

Dynamic blocks may render through PHP.

Example `block.json` concept:

```json
{
  "apiVersion": 3,
  "name": "company/employee-card",
  "title": "Employee Card",
  "category": "widgets",
  "attributes": {
    "employeeId": {
      "type": "number"
    }
  },
  "editorScript": "file:./index.js",
  "style": "file:./style-index.css"
}
```

Use dynamic rendering when output depends on current server data.

Example:

```php
register_block_type(
    __DIR__ . '/build/employee-card',
    [
        'render_callback' => 'company_render_employee_card',
    ]
);
```

---

# 32. Child Themes

A child theme extends another theme.

Useful when:

- modifying a third-party theme
- preserving parent-theme updates
- adding site-specific styling/templates

Typical structure:

```text
my-child-theme/
├── functions.php
└── style.css
```

Header:

```css
/*
Theme Name: My Child Theme
Template: parent-theme-folder
*/
```

Do not use child themes as an excuse to override hundreds of parent files.

If almost everything is replaced, a custom theme may be cleaner.

---

# 33. Internationalization and Localization

Never hard-code user-facing text if your project must support translation.

Bad:

```php
echo 'Read More';
```

Better:

```php
esc_html_e('Read More', 'company-theme');
```

Returning:

```php
$label = __('Read More', 'company-theme');
```

Formatted:

```php
printf(
    esc_html__('Welcome, %s', 'company-theme'),
    esc_html($name)
);
```

Important functions:

```text
__()
_e()
esc_html__()
esc_html_e()
esc_attr__()
esc_attr_e()
_n()
_x()
```

Keep the text domain consistent.

---

# 34. Accessibility

Accessibility is not an optional polish step.

Consider:

- semantic HTML
- keyboard navigation
- focus states
- proper labels
- sufficient contrast
- heading hierarchy
- alternative text
- accessible forms
- skip links
- ARIA only when necessary

Bad:

```html
<div onclick="openMenu()">Menu</div>
```

Better:

```html
<button type="button" aria-expanded="false">
    Menu
</button>
```

Do not recreate built-in accessible controls with generic `<div>` elements unless necessary.

---

# 35. SEO-Friendly Theme Development

Themes should help search engines understand content without replacing a dedicated SEO strategy.

Good theme behavior includes:

- semantic headings
- one clear page title structure
- fast loading
- proper document landmarks
- meaningful anchor text
- responsive images
- clean template markup
- no duplicate hidden content
- support for `title-tag`

Do not hard-code conflicting SEO metadata if an SEO plugin is expected to manage it.

Keep responsibilities clean.

---

# 36. Theme Performance

Common performance problems:

```text
Loading all scripts on all pages
Huge unoptimized images
Excessive custom queries
N+1-style metadata access
Render-blocking assets
Large CSS frameworks with unused rules
Third-party scripts everywhere
```

Better:

```php
if (is_singular('product')) {
    wp_enqueue_script('product-gallery');
}
```

Other strategies:

- paginate content
- cache expensive calculations
- use optimized queries
- avoid querying all posts with `posts_per_page => -1` unless genuinely small
- use correct image sizes
- measure instead of guessing

---

# 37. Plugin Development Overview

A plugin adds or changes functionality without modifying WordPress core.

Plugins can implement:

- custom post types
- integrations
- workflows
- API endpoints
- admin screens
- background jobs
- dashboards
- payment integrations
- reporting
- custom blocks
- custom database tables

At minimum, a plugin can be one PHP file.

Production plugins should usually have structure.

---

# 38. Plugin Directory Structure

A scalable plugin:

```text
company-events/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── build/
│
├── languages/
│
├── src/
│   ├── Admin/
│   │   ├── Menu.php
│   │   └── SettingsPage.php
│   │
│   ├── Api/
│   │   └── Routes.php
│   │
│   ├── Domain/
│   │   └── Event.php
│   │
│   ├── Infrastructure/
│   │   └── EventRepository.php
│   │
│   ├── PostTypes/
│   │   └── EventPostType.php
│   │
│   ├── Support/
│   │   └── Helpers.php
│   │
│   └── Plugin.php
│
├── templates/
│   ├── admin/
│   └── public/
│
├── tests/
│
├── vendor/
│
├── composer.json
├── company-events.php
├── readme.txt
└── uninstall.php
```

A simpler plugin:

```text
company-events/
├── includes/
│   ├── post-types.php
│   ├── admin.php
│   ├── ajax.php
│   └── helpers.php
├── assets/
├── templates/
└── company-events.php
```

Use architecture proportional to complexity.

---

# 39. Plugin Header

Main plugin file:

```php
<?php
/**
 * Plugin Name: Company Events
 * Description: Manages company events.
 * Version: 1.0.0
 * Author: Company Team
 * Text Domain: company-events
 */
```

Prevent direct execution when appropriate:

```php
defined('ABSPATH') || exit;
```

Common constants:

```php
define('COMPANY_EVENTS_VERSION', '1.0.0');
define('COMPANY_EVENTS_FILE', __FILE__);
define('COMPANY_EVENTS_PATH', plugin_dir_path(__FILE__));
define('COMPANY_EVENTS_URL', plugin_dir_url(__FILE__));
```

Avoid generic constant names that might conflict.

---

# 40. Plugin Bootstrap Architecture

Main plugin file should be small.

Example:

```php
<?php
/**
 * Plugin Name: Company Events
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/src/Plugin.php';

add_action('plugins_loaded', function () {
    $plugin = new Company\Events\Plugin();
    $plugin->boot();
});
```

Then:

```php
namespace Company\Events;

final class Plugin
{
    public function boot(): void
    {
        add_action('init', [$this, 'register']);
    }

    public function register(): void
    {
        // Register features.
    }
}
```

Why?

Because the entry file becomes orchestration rather than a giant application.

---

# 41. Functional vs OOP Plugin Architecture

Both styles can be valid.

## Functional

Good for:

- small plugins
- simple features
- low complexity

```php
function company_add_message(): void
{
    echo '<p>Hello</p>';
}

add_action('wp_footer', 'company_add_message');
```

## OOP

Useful for:

- large plugins
- isolated responsibilities
- testability
- dependency injection
- reusable services

```php
final class FooterMessage
{
    public function register(): void
    {
        add_action('wp_footer', [$this, 'render']);
    }

    public function render(): void
    {
        echo '<p>Hello</p>';
    }
}
```

OOP does not automatically mean "better."

Bad OOP can be more complicated than clean functional code.

---

# 42. Namespaces and Composer Autoloading

Namespaces prevent class collisions.

```php
namespace Acme\Events\Admin;

final class SettingsPage
{
}
```

Composer:

```json
{
  "autoload": {
    "psr-4": {
      "Acme\\Events\\": "src/"
    }
  }
}
```

Run:

```bash
composer dump-autoload
```

Bootstrap:

```php
require_once __DIR__ . '/vendor/autoload.php';
```

Then classes can be loaded automatically.

Benefits:

- cleaner file loading
- predictable structure
- fewer manual `require_once` calls

---

# 43. Plugin Activation, Deactivation, and Uninstall

These are different lifecycle events.

## Activation

Use for setup that should happen once when activating.

```php
register_activation_hook(__FILE__, 'company_activate');

function company_activate(): void
{
    // Create table, option, etc.
    flush_rewrite_rules();
}
```

## Deactivation

Use for temporary cleanup:

```php
register_deactivation_hook(__FILE__, 'company_deactivate');

function company_deactivate(): void
{
    flush_rewrite_rules();
}
```

Do not delete valuable user data merely because a plugin is deactivated.

## Uninstall

Use when the plugin is permanently deleted.

`uninstall.php`:

```php
<?php

defined('WP_UNINSTALL_PLUGIN') || exit;

delete_option('company_events_settings');
```

Be extremely careful before deleting posts or custom tables.

Consider an explicit "remove data on uninstall" setting.

---

# 44. Hooks: Actions and Filters

Hooks are the foundation of WordPress extensibility.

## Action

"Something happened; run this code."

```php
add_action('init', 'company_register_post_type');
```

## Filter

"Here is a value; modify it and return it."

```php
add_filter('the_title', 'company_modify_title');

function company_modify_title(string $title): string
{
    return $title . ' ✓';
}
```

### Mental model

```text
Action:
Event -> callback performs side effect

Filter:
Input value -> callback -> modified value -> return
```

Filter callbacks must return the value.

Incorrect:

```php
function modify_title($title)
{
    echo $title;
}
```

Correct:

```php
function modify_title($title)
{
    return $title . '!';
}
```

---

# 45. Custom Hooks

Your plugin can expose extension points.

Action:

```php
do_action(
    'company_events_after_registration',
    $event_id,
    $user_id
);
```

Another plugin:

```php
add_action(
    'company_events_after_registration',
    function ($event_id, $user_id) {
        // Integration.
    },
    10,
    2
);
```

Filter:

```php
$price = apply_filters(
    'company_events_ticket_price',
    $price,
    $event_id
);
```

This makes plugins extensible without editing their source code.

Prefix hook names:

```text
company_events_...
```

---

# 46. Admin Menus and Pages

Top-level menu:

```php
add_action('admin_menu', function () {
    add_menu_page(
        __('Events', 'company-events'),
        __('Events', 'company-events'),
        'manage_options',
        'company-events',
        'company_events_render_page',
        'dashicons-calendar'
    );
});
```

The capability matters:

```text
manage_options
edit_posts
publish_posts
custom capabilities
```

Never assume that hiding a button is security.

Authorization must also be enforced in server-side handlers.

---

# 47. Settings API and Options API

Options API:

```php
update_option('company_events_per_page', 20);

$value = get_option(
    'company_events_per_page',
    10
);
```

Settings API provides structured admin settings.

Basic registration:

```php
register_setting(
    'company_events_settings_group',
    'company_events_settings',
    [
        'sanitize_callback' => 'company_events_sanitize_settings',
    ]
);
```

A robust settings page should include:

- capability check
- nonce handling through WordPress settings helpers
- sanitization
- escaping
- defaults
- clear labels
- validation errors

Store related settings together when practical:

```php
[
    'items_per_page' => 20,
    'email_enabled'  => true,
    'timezone'       => 'Asia/Kolkata',
]
```

instead of unnecessarily creating dozens of separate options.

---

# 48. WordPress Database API and $wpdb

Use `$wpdb` for custom SQL.

```php
global $wpdb;

$table = $wpdb->prefix . 'company_events';

$row = $wpdb->get_row(
    $wpdb->prepare(
        "SELECT * FROM {$table} WHERE id = %d",
        $event_id
    )
);
```

Never directly interpolate untrusted user data.

Bad:

```php
$sql = "SELECT * FROM table WHERE email = '$email'";
```

Better:

```php
$sql = $wpdb->prepare(
    "SELECT * FROM {$table} WHERE email = %s",
    $email
);
```

Useful methods:

```text
$wpdb->get_var()
$wpdb->get_row()
$wpdb->get_results()
$wpdb->insert()
$wpdb->update()
$wpdb->delete()
$wpdb->prepare()
```

---

# 49. Custom Database Tables

Use custom tables when your data model behaves poorly as posts/meta.

Example plugin table:

```text
wp_company_bookings
├── id
├── user_id
├── event_id
├── status
├── amount
├── created_at
└── updated_at
```

Creation pattern:

```php
function company_create_tables(): void
{
    global $wpdb;

    $table = $wpdb->prefix . 'company_bookings';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE {$table} (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        user_id BIGINT UNSIGNED NOT NULL,
        event_id BIGINT UNSIGNED NOT NULL,
        status VARCHAR(30) NOT NULL,
        amount DECIMAL(12,2) NOT NULL DEFAULT 0,
        created_at DATETIME NOT NULL,
        PRIMARY KEY (id),
        KEY user_id (user_id),
        KEY event_id (event_id),
        KEY status (status)
    ) {$charset_collate};";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';

    dbDelta($sql);
}
```

Indexes matter.

If your application frequently runs:

```sql
WHERE event_id = ?
```

consider indexing `event_id`.

---

# 50. Data Modeling: Post Meta vs Options vs Custom Tables

Use this decision guide.

## Post + Post Meta

Best for content that behaves like WordPress content.

Examples:

- properties
- courses
- books
- team members

Benefits:

- admin UI support
- revisions/ecosystem compatibility
- REST support
- template hierarchy

## Options

Best for global configuration.

Examples:

```text
API endpoint
plugin mode
default email
feature flags
```

## User Meta

Best for extra information attached to a user.

## Term Meta

Best for taxonomy-specific data.

## Custom Table

Best when:

- records are transactional
- huge volume is expected
- queries require many indexed columns
- relationships are complex
- post/meta would become inefficient

Examples:

```text
audit_logs
invoice_transactions
booking_transactions
API synchronization logs
analytics events
```

---

# 51. Shortcodes

Register:

```php
add_shortcode('company_year', function () {
    return esc_html(wp_date('Y'));
});
```

Use:

```text
[company_year]
```

Shortcode with attributes:

```php
add_shortcode('company_button', function ($atts) {
    $atts = shortcode_atts([
        'label' => 'Learn More',
        'url'   => '#',
    ], $atts);

    return sprintf(
        '<a class="company-button" href="%s">%s</a>',
        esc_url($atts['url']),
        esc_html($atts['label'])
    );
});
```

Always return shortcode output.

Do not `echo` directly unless you deliberately buffer output.

---

# 52. AJAX

WordPress AJAX typically uses:

```text
/wp-admin/admin-ajax.php
```

Authenticated hook:

```php
add_action(
    'wp_ajax_company_search',
    'company_ajax_search'
);
```

Public hook:

```php
add_action(
    'wp_ajax_nopriv_company_search',
    'company_ajax_search'
);
```

Handler:

```php
function company_ajax_search(): void
{
    check_ajax_referer(
        'company_search',
        'nonce'
    );

    $query = isset($_POST['query'])
        ? sanitize_text_field(wp_unslash($_POST['query']))
        : '';

    if ($query === '') {
        wp_send_json_error([
            'message' => 'Missing query.',
        ], 400);
    }

    // Search...

    wp_send_json_success([
        'items' => [],
    ]);
}
```

Frontend configuration can be passed with appropriate script-data mechanisms.

For new application-style endpoints, the REST API is often cleaner than `admin-ajax.php`.

---

# 53. REST API

The REST API enables JSON-based communication.

Core route example:

```text
GET /wp-json/wp/v2/posts
```

Custom endpoint:

```php
add_action('rest_api_init', function () {
    register_rest_route(
        'company/v1',
        '/events',
        [
            'methods'             => 'GET',
            'callback'            => 'company_get_events',
            'permission_callback' => '__return_true',
        ]
    );
});
```

Do not blindly use:

```php
'permission_callback' => '__return_true'
```

for private operations.

Protected route:

```php
'permission_callback' => function () {
    return current_user_can('edit_posts');
},
```

Return:

```php
return rest_ensure_response([
    'items' => $items,
]);
```

## REST concepts

```text
Namespace
Route
Endpoint
HTTP method
Request
Response
Schema
Permission callback
```

Example design:

```text
GET    /company/v1/events
GET    /company/v1/events/15
POST   /company/v1/events
PATCH  /company/v1/events/15
DELETE /company/v1/events/15
```

Use explicit validation/sanitization for endpoint arguments.

---

# 54. Authentication, Users, Roles, and Capabilities

WordPress authorization should be capability-driven.

Common roles:

```text
Administrator
Editor
Author
Contributor
Subscriber
```

Never write application logic such as:

```php
if ($user->role === 'administrator') ...
```

when a capability expresses the requirement.

Better:

```php
if (! current_user_can('manage_options')) {
    wp_die(
        esc_html__('You are not allowed to access this page.', 'company-plugin')
    );
}
```

## Custom role

```php
add_role(
    'event_manager',
    __('Event Manager', 'company-events'),
    [
        'read'          => true,
        'edit_posts'    => true,
        'publish_posts' => true,
    ]
);
```

For complex applications, define custom capabilities:

```text
manage_company_events
approve_company_events
view_company_reports
```

Then assign them to roles.

This makes authorization more flexible.

---

# 55. Security Master Chapter

A secure WordPress request typically follows this chain:

```text
Input
  ↓
Authorization
  ↓
Nonce / request authenticity
  ↓
Unslash
  ↓
Validate
  ↓
Sanitize
  ↓
Business logic
  ↓
Database/API
  ↓
Escape output
```

Memorize:

> **Sanitize on input. Escape on output. Authorize actions. Use nonces for request intent. Use prepared SQL.**

Common risks:

- XSS
- SQL injection
- CSRF
- privilege escalation
- insecure direct object references
- malicious file uploads
- exposed secrets
- missing REST permissions

---

# 56. Forms and Nonces

Form:

```php
<form method="post">
    <?php wp_nonce_field(
        'company_save_profile',
        'company_profile_nonce'
    ); ?>

    <input
        type="text"
        name="company_name"
    >

    <button type="submit">
        Save
    </button>
</form>
```

Verify:

```php
if (
    ! isset($_POST['company_profile_nonce']) ||
    ! wp_verify_nonce(
        sanitize_text_field(
            wp_unslash($_POST['company_profile_nonce'])
        ),
        'company_save_profile'
    )
) {
    wp_die('Invalid request.');
}
```

Then check authorization:

```php
if (! current_user_can('edit_posts')) {
    wp_die('Permission denied.');
}
```

Important:

> A nonce is not authorization.

A low-privilege user may possess a valid nonce but still lack permission.

---

# 57. Sanitization, Validation, and Escaping

These are different concepts.

## Validation

"Is this value acceptable?"

```php
if (! is_email($email)) {
    // Reject.
}
```

## Sanitization

"Clean this value into an expected format."

```php
$name = sanitize_text_field(
    wp_unslash($_POST['name'] ?? '')
);
```

Useful functions:

```text
sanitize_text_field()
sanitize_textarea_field()
sanitize_email()
sanitize_key()
absint()
intval()
floatval()
sanitize_file_name()
wp_kses_post()
```

## Escaping

"Make this safe for the output context."

HTML text:

```php
echo esc_html($name);
```

Attribute:

```php
value="<?php echo esc_attr($value); ?>"
```

URL:

```php
echo esc_url($url);
```

Textarea:

```php
echo esc_textarea($text);
```

Trusted limited HTML:

```php
echo wp_kses_post($content);
```

Escape as late as possible.

---

# 58. File Uploads

Uploads are high-risk.

Validate:

- capability
- nonce
- extension
- MIME type
- file size
- intended destination

Prefer WordPress media APIs over custom arbitrary filesystem handling.

Never trust only the browser-provided MIME type.

Avoid allowing executable files.

Scenario:

```text
Resume Upload
├── PDF/DOCX only
├── size limit
├── nonce
├── logged-in or controlled public workflow
├── sanitize filename
└── store attachment ID
```

---

# 59. HTTP API and External APIs

Use WordPress HTTP APIs instead of raw cURL for normal plugin integration.

GET:

```php
$response = wp_remote_get(
    'https://api.example.invalid/v1/items',
    [
        'timeout' => 15,
    ]
);
```

Check:

```php
if (is_wp_error($response)) {
    return;
}
```

Status:

```php
$status = wp_remote_retrieve_response_code($response);
```

Body:

```php
$body = wp_remote_retrieve_body($response);
$data = json_decode($body, true);
```

POST:

```php
$response = wp_remote_post(
    'https://api.example.invalid/v1/items',
    [
        'headers' => [
            'Authorization' => 'Bearer ' . $token,
            'Content-Type'  => 'application/json',
        ],
        'body' => wp_json_encode([
            'name' => 'Example',
        ]),
    ]
);
```

Never expose private API credentials in browser JavaScript.

---

# 60. Email

Use:

```php
wp_mail(
    $to,
    $subject,
    $message,
    $headers
);
```

Email delivery depends on the server/mail infrastructure.

Production sites often use:

- SMTP
- transactional email providers
- domain authentication
- queue/retry strategy for critical workflows

Do not assume `wp_mail()` returning `true` means the recipient definitely received the email.

---

# 61. WP-Cron and Scheduled Jobs

Schedule:

```php
if (! wp_next_scheduled('company_daily_cleanup')) {
    wp_schedule_event(
        time(),
        'daily',
        'company_daily_cleanup'
    );
}
```

Hook:

```php
add_action(
    'company_daily_cleanup',
    'company_run_cleanup'
);
```

Cleanup on deactivation:

```php
$timestamp = wp_next_scheduled(
    'company_daily_cleanup'
);

if ($timestamp) {
    wp_unschedule_event(
        $timestamp,
        'company_daily_cleanup'
    );
}
```

Important:

WP-Cron is traffic-driven by default.

For time-critical production tasks, a real server scheduler invoking WordPress cron can be more reliable.

Use cases:

- daily report
- API synchronization
- cleanup
- reminder emails
- cache warming
- expired record processing

---

# 62. Caching and Transients

Transient:

```php
$data = get_transient('company_exchange_rates');

if ($data === false) {
    $data = company_fetch_exchange_rates();

    set_transient(
        'company_exchange_rates',
        $data,
        HOUR_IN_SECONDS
    );
}
```

Use transients for data that:

- is expensive to generate
- may be reused
- can tolerate expiration

Do not treat a transient as guaranteed permanent storage.

Object caching and persistent cache backends may improve high-traffic workloads.

Always define an invalidation strategy.

---

# 63. Rewrite Rules and Custom URLs

WordPress rewrites URLs into query variables.

Example goal:

```text
/reports/2026/sales/
```

Custom rewrites are powerful but easy to misuse.

When registering CPTs, WordPress can generate rewrite structures automatically.

If adding manual rewrite rules:

- register them consistently
- flush rules only on activation/deactivation or controlled events
- do not call `flush_rewrite_rules()` on every request

Bad:

```php
add_action('init', function () {
    flush_rewrite_rules();
});
```

That is unnecessarily expensive.

---

# 64. WooCommerce Customization Architecture

WooCommerce is itself a plugin with many extension hooks.

Customize using:

- actions
- filters
- template overrides when necessary
- official extension APIs
- product/order APIs
- custom plugins

Avoid editing WooCommerce core.

Example price display filter:

```php
add_filter(
    'woocommerce_get_price_html',
    function ($price, $product) {
        return '<span class="custom-price">' .
            wp_kses_post($price) .
        '</span>';
    },
    10,
    2
);
```

Use a custom plugin for business logic.

Use the theme for presentation changes.

### Example

Requirement:

> Add a corporate customer approval workflow.

Recommended:

```text
Plugin
├── registration workflow
├── approval status
├── capabilities
├── emails
└── order restrictions

Theme
└── styling of approval messages
```

---

# 65. Multisite Concepts

WordPress Multisite allows multiple sites within one network.

Conceptually:

```text
Network
├── Site A
├── Site B
└── Site C
```

Plugins may be:

- activated per site
- network activated

Important questions:

- Is data site-specific?
- Is the plugin network-wide?
- Should activation create data for existing sites?
- What happens when a new site is created?
- Are options stored per-site or network-wide?

Do not assume a single-site environment if your plugin promises multisite support.

---

# 66. WP-CLI

WP-CLI provides command-line control.

Examples:

```bash
wp plugin list
wp theme list
wp cache flush
wp rewrite flush
wp option get siteurl
wp user list
```

Custom command concept:

```php
if (
    defined('WP_CLI') &&
    WP_CLI
) {
    WP_CLI::add_command(
        'company sync',
        'Company_Sync_Command'
    );
}
```

WP-CLI is excellent for:

- migrations
- batch processing
- imports
- exports
- maintenance
- scheduled server tasks
- deployment scripts

For processing 500,000 records, a CLI command may be safer than a browser request.

---

# 67. JavaScript in Modern WordPress

Modern WordPress uses JavaScript extensively in the editor.

Useful packages/concepts include:

```text
@wordpress/blocks
@wordpress/block-editor
@wordpress/components
@wordpress/data
@wordpress/element
@wordpress/i18n
@wordpress/api-fetch
```

Typical block workflow:

```text
block.json
   ↓
register block
   ↓
edit component
   ↓
save or PHP render
   ↓
build assets
```

Do not globally enqueue large editor bundles on the public frontend unless needed.

---

# 68. Coding Standards and Code Organization

Consistency matters.

Good habits:

- prefix global functions
- use namespaces for classes
- one responsibility per class/module
- avoid giant functions
- document public extension points
- keep business logic separate from presentation
- avoid direct output inside domain services
- use strict comparisons where appropriate

Bad:

```php
function save_everything() {
    // 500 lines.
}
```

Better:

```text
Request Handler
    ↓
Validator
    ↓
Service
    ↓
Repository
    ↓
Database
```

A plugin does not need enterprise architecture for a 100-line feature.

Use only the complexity your project earns.

---

# 69. Error Handling, Logging, and Debugging

Development configuration often includes:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Do not leave verbose production errors exposed to visitors.

Log:

```php
if (defined('WP_DEBUG') && WP_DEBUG) {
    error_log('Company sync failed.');
}
```

WordPress APIs often return `WP_Error`.

Example:

```php
$result = company_process();

if (is_wp_error($result)) {
    $message = $result->get_error_message();
}
```

Return structured errors:

```php
return new WP_Error(
    'company_invalid_event',
    __('Invalid event.', 'company-events'),
    [
        'status' => 400,
    ]
);
```

Debug systematically:

```text
Reproduce
   ↓
Read logs
   ↓
Isolate layer
   ↓
Inspect inputs
   ↓
Inspect hook execution
   ↓
Inspect query/API response
   ↓
Fix root cause
   ↓
Add regression test
```

---

# 70. Testing

Testing levels:

```text
Unit
Integration
API
Browser/E2E
Manual acceptance
```

## Unit Test

Test isolated business logic.

Example target:

```php
$discount = $calculator->calculate(1000, 'gold');
```

## Integration Test

Test behavior involving WordPress APIs/database.

Example:

```text
Create event
   ↓
Run service
   ↓
Verify metadata
```

## REST Test

Verify:

- response code
- schema
- permissions
- validation

## Browser/E2E

Verify user workflows:

```text
Login
Create Event
Publish
Register
Approve
Email sent
```

Test security boundaries too.

---

# 71. Performance Engineering

Measure first.

Tools can help identify:

- slow database queries
- repeated hooks
- external API latency
- autoloaded option size
- large script bundles
- expensive template rendering

Performance checklist:

```text
[ ] Avoid unbounded queries
[ ] Paginate
[ ] Cache expensive external requests
[ ] Add custom-table indexes
[ ] Load assets conditionally
[ ] Reduce duplicate DB calls
[ ] Optimize images
[ ] Avoid synchronous API calls in critical frontend paths
[ ] Offload heavy jobs
[ ] Measure before and after
```

### N+1 concept

Suppose you load 100 records and then execute a separate query for each one.

```text
1 query + 100 queries
```

This pattern can become expensive.

Prefer bulk-loading or appropriate APIs where possible.

---

# 72. Security Hardening

Application-level checklist:

```text
[ ] Keep WordPress core updated
[ ] Keep plugins/themes updated
[ ] Remove unused plugins/themes
[ ] Use least-privilege roles
[ ] Protect secrets
[ ] Validate uploads
[ ] Use HTTPS
[ ] Use nonces for state-changing forms
[ ] Check capabilities
[ ] Escape output
[ ] Sanitize/validate input
[ ] Prepare custom SQL
[ ] Protect REST routes
[ ] Avoid exposing stack traces
[ ] Back up site/database
[ ] Test restore procedures
```

Developer rule:

> Never trust request input, stored content, API responses, or user permissions merely because the UI makes something look safe.

---

# 73. Git and Deployment Workflow

Recommended repository strategy:

```text
repo/
├── wp-content/
│   ├── themes/company-theme/
│   └── plugins/company-core/
├── composer.json
├── package.json
└── README.md
```

Or separate repositories per theme/plugin.

Typical branches:

```text
main
develop
feature/...
fix/...
```

Deployment flow:

```text
Feature branch
   ↓
Pull request
   ↓
Automated checks
   ↓
Staging
   ↓
Acceptance
   ↓
Production
```

Do not commit:

- `wp-config.php` with secrets
- uploads
- cache files
- temporary backups
- environment secrets

---

# 74. CI/CD for WordPress

Pipeline example:

```text
Push
   ↓
PHP syntax check
   ↓
Coding standards
   ↓
PHP unit tests
   ↓
JavaScript lint
   ↓
JavaScript tests
   ↓
Build assets
   ↓
Create release artifact
   ↓
Deploy staging
   ↓
Smoke tests
   ↓
Deploy production
```

Useful checks:

```bash
php -l file.php
composer validate
npm test
npm run build
```

Production deployments should be reproducible.

Avoid editing plugin/theme code from the WordPress admin editor in a managed development workflow.

---

# 75. Production Plugin Upgrade and Database Migration Strategy

Suppose plugin version 1.0 has:

```text
wp_company_orders
```

Version 1.1 needs a new column.

Store a schema version:

```php
update_option(
    'company_db_version',
    '1.1.0'
);
```

On upgrade:

```text
Current DB version
   ↓
Compare desired version
   ↓
Run required migration
   ↓
Verify
   ↓
Store new version
```

Do not rerun heavy migrations on every request.

For very large datasets:

- migrate in batches
- make operations resumable
- log progress
- avoid long request timeouts
- use WP-CLI/background processing

---

# 76. Real-World Scenario 1: Company Website Theme

Requirement:

```text
Home
Services
About
Team
Case Studies
Blog
Contact
```

Recommended architecture:

```text
company-core plugin
├── post-types/
│   ├── service.php
│   ├── team.php
│   └── case-study.php
└── taxonomies/

company-theme
├── front-page.php
├── archive-service.php
├── single-service.php
├── archive-case-study.php
├── single-case-study.php
└── template-parts/
```

Why separate?

Content types belong to business functionality.

Presentation belongs to the theme.

---

# 77. Scenario 2: Portfolio Theme

Requirement:

- projects
- technologies
- featured projects
- project gallery

Data model:

```text
Project CPT
├── title
├── content
├── featured image
├── project_url -> meta
├── github_url -> meta
└── technology -> taxonomy
```

Templates:

```text
archive-project.php
single-project.php
taxonomy-technology.php
```

Use case:

```php
$query = new WP_Query([
    'post_type'      => 'project',
    'posts_per_page' => 6,
    'meta_key'       => '_portfolio_featured',
    'meta_value'     => '1',
]);
```

---

# 78. Scenario 3: Events Plugin

Requirements:

- create event
- start/end date
- venue
- registration
- capacity
- email confirmation

Architecture:

```text
company-events/
├── src/
│   ├── PostTypes/EventPostType.php
│   ├── Registration/RegistrationService.php
│   ├── Registration/RegistrationRepository.php
│   ├── Admin/
│   ├── Api/
│   └── Mail/
├── templates/
└── company-events.php
```

Data:

```text
Event
└── Custom Post Type

Registration
└── Custom Table
```

Why custom table for registrations?

Because registrations are transactional and may become numerous.

---

# 79. Scenario 4: Employee Directory Plugin

Requirements:

- employees
- departments
- office location
- skill filters
- searchable directory

Possible model:

```text
employee CPT
department taxonomy
skill taxonomy
office_location taxonomy
phone meta
designation meta
```

REST endpoint:

```text
GET /company/v1/employees
    ?department=engineering
    &skill=php
```

Security:

Public fields:

```text
name
designation
department
business contact
```

Private fields:

```text
personal contact
salary
internal IDs
```

Never expose private fields merely because they exist in post meta.

---

# 80. Scenario 5: AJAX Product Search

Flow:

```text
User types
   ↓
Debounce 300ms
   ↓
REST/AJAX request
   ↓
Validate query
   ↓
Search products
   ↓
Return JSON
   ↓
Render suggestions
```

Consider:

- minimum search length
- pagination
- request cancellation
- rate limiting strategy
- cache
- output escaping
- no hidden private products

Do not issue a network request for every keystroke without debouncing.

---

# 81. Scenario 6: External API Integration

Requirement:

Fetch shipping status from external logistics API.

Architecture:

```text
Order page
   ↓
ShippingStatusService
   ↓
Cache lookup
   ↓
HTTP API
   ↓
Normalize response
   ↓
Return domain object
```

Example:

```php
final class ShippingStatusService
{
    public function getStatus(string $trackingId): array
    {
        $key = 'company_shipping_' . md5($trackingId);

        $cached = get_transient($key);

        if ($cached !== false) {
            return $cached;
        }

        // Fetch external API...

        $result = [
            'status' => 'in_transit',
        ];

        set_transient(
            $key,
            $result,
            10 * MINUTE_IN_SECONDS
        );

        return $result;
    }
}
```

Avoid tying API transport directly to template markup.

---

# 82. Scenario 7: Headless WordPress

Architecture:

```text
WordPress
├── Admin
├── Content
└── REST API

Frontend
├── Next.js / React / other app
└── consumes API
```

Advantages:

- frontend flexibility
- independent UI deployment
- strong app experience

Challenges:

- preview
- authentication
- redirects
- SEO
- caching
- form handling
- image/media domains
- editorial workflow
- plugin compatibility

Headless is not automatically better.

Choose it when product requirements justify the operational complexity.

---

# 83. Scenario 8: Scheduled Report Plugin

Requirement:

Every morning:

```text
Collect yesterday's orders
Aggregate totals
Generate report
Email management
```

Architecture:

```text
Scheduler
   ↓
ReportService
   ↓
OrderRepository
   ↓
ReportRenderer
   ↓
Mailer
```

Hook:

```php
add_action(
    'company_daily_report',
    'company_generate_daily_report'
);
```

For business-critical timing, consider a real system scheduler triggering WordPress cron.

Store execution metadata:

```text
started_at
finished_at
status
error_message
records_processed
```

This makes failures diagnosable.

---

# 84. Scenario 9: WooCommerce Extension

Requirement:

Apply special pricing to approved corporate users.

Architecture:

```text
User Meta
└── corporate_status

PricingService
├── eligibility
└── discount calculation

WooCommerce hooks
└── apply price modification
```

Do not sprinkle the formula across multiple hook callbacks.

Better:

```php
$price = $pricingService->calculate(
    $product,
    wp_get_current_user()
);
```

This makes business logic testable.

---

# 85. Scenario 10: SaaS-Style Plugin Architecture

Large plugin:

```text
src/
├── Admin/
├── Application/
│   ├── Commands/
│   ├── Queries/
│   └── Services/
├── Domain/
│   ├── Entity/
│   ├── ValueObject/
│   └── Contract/
├── Infrastructure/
│   ├── Persistence/
│   ├── Http/
│   └── Mail/
├── Rest/
├── Blocks/
└── Plugin.php
```

Request flow:

```text
REST Controller
    ↓
Application Service
    ↓
Domain Rules
    ↓
Repository Interface
    ↓
WordPress Repository
    ↓
Database
```

Do not adopt this architecture for a 200-line plugin.

Use it when complexity warrants the separation.

---

# 86. Common Mistakes and Better Patterns

## Mistake 1: Editing WordPress core

Bad:

```text
wp-includes/...
```

Better:

```text
plugin/theme hook
```

---

## Mistake 2: Business logic inside theme

Bad:

```text
theme registers payroll system
```

Better:

```text
plugin = payroll logic
theme = payroll display
```

---

## Mistake 3: Trusting nonce as authorization

Wrong:

```text
valid nonce = user allowed
```

Correct:

```text
nonce
+
capability
+
resource ownership if needed
```

---

## Mistake 4: Sanitizing but not escaping

Input sanitization does not remove the need for contextual output escaping.

---

## Mistake 5: Direct SQL interpolation

Never concatenate untrusted values into SQL.

---

## Mistake 6: `flush_rewrite_rules()` on every request

Flush only when necessary.

---

## Mistake 7: Giant `functions.php`

Split by responsibility.

---

## Mistake 8: Giant plugin bootstrap file

Make the root file orchestration-only.

---

## Mistake 9: Loading everything everywhere

Conditionally enqueue assets.

---

## Mistake 10: Storing every data type as post meta

Choose data storage based on access patterns.

---

## Mistake 11: Overengineering

A three-class architecture is not automatically better than a clean function.

Complexity must earn its place.

---

# 87. Interview Questions

## Beginner

### What is a WordPress theme?

A presentation layer controlling how site content is rendered and styled.

### What is a plugin?

An extension that adds or modifies functionality without changing WordPress core.

### What is `functions.php`?

A theme bootstrap/function file loaded with the active theme.

### What is the Loop?

The standard mechanism for iterating through posts from the current query.

### What is a shortcode?

A token such as `[example]` that invokes a callback and inserts generated output.

---

## Intermediate

### Action vs filter?

Action:

```text
runs code when an event occurs
```

Filter:

```text
receives a value and must return a value
```

### Why use `wp_enqueue_script()`?

To let WordPress manage dependencies, versions, duplicate loading, and placement.

### Why call `wp_reset_postdata()`?

To restore global post context after a secondary `WP_Query`.

### CPT vs taxonomy?

CPT:

```text
entity/content type
```

Taxonomy:

```text
classification/grouping
```

### Nonce vs capability?

Nonce verifies request intent/context.

Capability checks whether the user is authorized.

You often need both.

---

## Advanced

### When should you create a custom table?

When the data is transactional/high-volume or requires query/index patterns that do not map efficiently to posts/meta.

### What is an extensible plugin?

A plugin exposing stable hooks, APIs, data contracts, and services that other code can extend without editing its source.

### Why avoid synchronous external API calls in template rendering?

They increase page latency and make frontend availability depend on another service.

### How would you process one million records?

Consider:

- batching
- resumable jobs
- WP-CLI
- background queues
- indexed queries
- checkpoints
- logging
- idempotency

### How do you design secure REST endpoints?

Use:

```text
permission_callback
argument validation
sanitization
capability checks
ownership checks
safe output
prepared SQL where needed
```

---

# 88. Cheat Sheets

## Theme Files

```text
style.css
functions.php
index.php
header.php
footer.php
single.php
page.php
archive.php
search.php
404.php
front-page.php
home.php
```

## Block Theme

```text
style.css
theme.json
templates/
parts/
patterns/
styles/
functions.php
```

## Plugin

```text
plugin-name.php
src/
includes/
assets/
templates/
languages/
uninstall.php
composer.json
```

## Hook Registration

```php
add_action('hook_name', 'callback');
add_filter('hook_name', 'callback');
```

## Custom Hook

```php
do_action('my_hook', $value);

$value = apply_filters(
    'my_filter',
    $value
);
```

## CPT

```php
register_post_type('book', []);
```

## Taxonomy

```php
register_taxonomy(
    'genre',
    ['book'],
    []
);
```

## Option

```php
get_option('key');
update_option('key', $value);
delete_option('key');
```

## Post Meta

```php
get_post_meta($id, 'key', true);
update_post_meta($id, 'key', $value);
```

## Security

```php
current_user_can(...);
wp_verify_nonce(...);
sanitize_text_field(...);
esc_html(...);
esc_attr(...);
esc_url(...);
$wpdb->prepare(...);
```

## JSON

```php
wp_send_json_success($data);
wp_send_json_error($data);
```

## REST

```php
register_rest_route(...);
```

## HTTP

```php
wp_remote_get(...);
wp_remote_post(...);
```

## Cron

```php
wp_schedule_event(...);
wp_next_scheduled(...);
wp_unschedule_event(...);
```

---

# 89. Practice Projects

Complete these in order.

## Project 1 — Basic Blog Theme

Learn:

- template hierarchy
- Loop
- header/footer
- menus
- enqueueing

## Project 2 — Corporate Theme

Learn:

- reusable sections
- page templates
- CPT presentation
- responsive design

## Project 3 — Portfolio Plugin

Learn:

- CPT
- taxonomy
- meta
- admin UX

## Project 4 — Contact/Lead Plugin

Learn:

- forms
- nonce
- validation
- custom table
- email

## Project 5 — Event Registration

Learn:

- CPT
- custom table
- capabilities
- REST/AJAX
- cron
- email

## Project 6 — Custom Gutenberg Blocks

Create:

- testimonial block
- pricing block
- employee card
- dynamic latest-projects block

## Project 7 — External API Plugin

Learn:

- HTTP API
- caching
- error handling
- secrets

## Project 8 — WooCommerce Extension

Learn:

- Woo hooks
- business rules
- order/product APIs
- compatibility

## Project 9 — Headless WordPress

Build:

```text
WordPress backend
+
REST API
+
Next.js frontend
```

## Project 10 — Enterprise Workflow Plugin

Features:

```text
Request
Approval Level 1
Approval Level 2
Final Approval
Audit Log
Emails
Dashboard
REST API
Scheduled Reminder
Role-based access
```

This project combines almost every concept in the handbook.

---

# 90. 90-Day Learning Roadmap

## Days 1–10

Study:

- WordPress architecture
- directory structure
- hooks
- Loop
- template hierarchy

Build:

```text
basic custom theme
```

## Days 11–20

Study:

- assets
- menus
- widgets
- images
- page templates
- theme security

Build:

```text
corporate theme
```

## Days 21–30

Study:

- CPT
- taxonomies
- meta
- `WP_Query`

Build:

```text
portfolio system
```

## Days 31–40

Study:

- plugin structure
- activation
- deactivation
- actions
- filters
- Settings API

Build:

```text
settings plugin
```

## Days 41–50

Study:

- database API
- custom tables
- AJAX
- REST

Build:

```text
event registration plugin
```

## Days 51–60

Study deeply:

- XSS
- CSRF
- SQL injection
- capabilities
- nonces
- sanitization
- escaping

Security-review all previous projects.

## Days 61–70

Study:

- Gutenberg
- block themes
- `theme.json`
- custom blocks
- patterns

Build:

```text
custom block theme
```

## Days 71–80

Study:

- external APIs
- caching
- cron
- email
- WP-CLI

Build:

```text
API synchronization plugin
```

## Days 81–90

Study:

- testing
- CI/CD
- performance
- deployment
- plugin upgrade strategy

Build:

```text
production-ready capstone plugin
```

---

# 91. Production Readiness Checklists

## Theme Checklist

```text
[ ] No WordPress core modifications
[ ] Proper template hierarchy
[ ] Assets enqueued
[ ] Theme support registered
[ ] Translation-ready strings
[ ] Escaped output
[ ] Accessible navigation
[ ] Responsive design
[ ] Optimized images
[ ] No business-critical functionality trapped in theme
[ ] 404 template tested
[ ] Search template tested
[ ] Empty states tested
[ ] Mobile navigation tested
[ ] Block editor content tested
```

## Plugin Checklist

```text
[ ] Unique prefix or namespace
[ ] Small bootstrap file
[ ] Capability checks
[ ] Nonces for state changes
[ ] Input validated/sanitized
[ ] Output escaped
[ ] SQL prepared
[ ] REST permissions implemented
[ ] Activation handled
[ ] Deactivation handled
[ ] Uninstall behavior documented
[ ] Database upgrades versioned
[ ] Cron cleanup implemented
[ ] API failures handled
[ ] Logs do not expose secrets
[ ] Translation ready
[ ] Tested with theme changes
```

## Database Checklist

```text
[ ] Correct storage model selected
[ ] Appropriate indexes
[ ] Queries bounded/paginated
[ ] SQL prepared
[ ] Charset/collation handled
[ ] Migration strategy
[ ] Backup strategy
[ ] Rollback considerations
```

## Security Checklist

```text
[ ] Authorization
[ ] Nonce
[ ] Validation
[ ] Sanitization
[ ] Output escaping
[ ] Prepared SQL
[ ] Secure file uploads
[ ] Secure REST endpoints
[ ] No secret exposure
[ ] Error output disabled in production
```

## Deployment Checklist

```text
[ ] Backup
[ ] Database migration reviewed
[ ] Release version updated
[ ] Build assets generated
[ ] Tests passing
[ ] Staging tested
[ ] Cache strategy understood
[ ] Rewrite behavior verified
[ ] Cron jobs verified
[ ] Rollback plan
[ ] Smoke test after deploy
```

---

# 92. Official Documentation Map

For long-term learning, use the official WordPress Developer Resources as the primary reference.

Important official sections to know:

```text
WordPress Developer Resources
├── Theme Handbook
│   ├── Theme structure
│   ├── Classic themes
│   ├── Block themes
│   ├── Templates
│   └── Template hierarchy
│
├── Plugin Handbook
│   ├── Plugin basics
│   ├── Hooks
│   ├── Security
│   ├── Administration menus
│   ├── Settings
│   ├── Shortcodes
│   └── REST API
│
├── REST API Handbook
│   ├── Routes
│   ├── Endpoints
│   ├── Requests
│   ├── Responses
│   └── Extending the API
│
├── Block Editor Handbook
├── Common APIs Handbook
└── Code Reference
```

Always check the current official documentation when working with:

- `theme.json` schema versions
- Block API versions
- newly introduced or deprecated APIs
- minimum supported PHP/WordPress versions
- security guidance
- WordPress coding standards changes

This handbook teaches the architecture and reasoning; official docs remain the source of truth for version-specific signatures and behavior.

---

# 93. Final Architecture Principles

If you remember only a few principles, remember these.

## Principle 1 — Never edit WordPress core

Extend through themes, plugins, APIs, and hooks.

## Principle 2 — Separate presentation from functionality

```text
Theme = presentation
Plugin = functionality
```

## Principle 3 — Hooks are the heart of WordPress

Understand actions and filters deeply.

## Principle 4 — Use WordPress APIs before reinventing infrastructure

Prefer:

```text
HTTP API
Settings API
Options API
Metadata API
REST API
Filesystem/media APIs
Cron API
Transients
Roles/capabilities
```

## Principle 5 — Security must exist at every boundary

Remember:

```text
Authorize
Validate
Sanitize
Process safely
Escape
```

## Principle 6 — Design data based on how it will be used

Do not automatically put every record into post meta.

## Principle 7 — Keep bootstrap files small

Organize by responsibility.

## Principle 8 — Make important plugin code extensible

Use custom actions/filters and stable contracts.

## Principle 9 — Design for failure

External APIs fail.

Email fails.

Cron may be delayed.

Deployments fail.

Make workflows observable and recoverable.

## Principle 10 — Optimize based on evidence

Measure queries, network calls, PHP execution, and frontend assets before optimizing.

## Principle 11 — Prefer maintainability over cleverness

The best production code is often boring:

- clear
- predictable
- secure
- testable
- documented

## Principle 12 — Build projects, not only tutorials

The fastest route to WordPress mastery is:

```text
Learn concept
    ↓
Build feature
    ↓
Break feature
    ↓
Debug feature
    ↓
Secure feature
    ↓
Test feature
    ↓
Deploy feature
    ↓
Refactor feature
```

---

# Appendix A — Recommended Production Theme Structure

```text
company-theme/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── editor.css
│   ├── js/
│   │   ├── main.js
│   │   └── navigation.js
│   ├── fonts/
│   └── images/
│
├── inc/
│   ├── setup.php
│   ├── enqueue.php
│   ├── hooks.php
│   ├── template-tags.php
│   ├── template-functions.php
│   └── helpers.php
│
├── patterns/
├── parts/
├── styles/
├── templates/
├── template-parts/
├── page-templates/
├── languages/
├── tests/
│
├── 404.php
├── archive.php
├── comments.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── home.php
├── index.php
├── page.php
├── search.php
├── single.php
├── screenshot.png
├── style.css
└── theme.json
```

Use only the parts relevant to classic/block/hybrid architecture.

---

# Appendix B — Recommended Production Plugin Structure

```text
company-plugin/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── config/
│
├── languages/
│
├── src/
│   ├── Admin/
│   ├── Api/
│   ├── Application/
│   ├── Blocks/
│   ├── Console/
│   ├── Domain/
│   ├── Infrastructure/
│   ├── Integrations/
│   ├── PostTypes/
│   ├── Taxonomies/
│   ├── Support/
│   └── Plugin.php
│
├── templates/
│   ├── admin/
│   └── public/
│
├── tests/
│   ├── Unit/
│   └── Integration/
│
├── build/
├── vendor/
├── composer.json
├── package.json
├── phpunit.xml
├── readme.txt
├── uninstall.php
└── company-plugin.php
```

---

# Appendix C — Request Security Example

A secure admin POST handler:

```php
function company_handle_save(): void
{
    if (
        ! isset($_POST['company_nonce']) ||
        ! wp_verify_nonce(
            sanitize_text_field(
                wp_unslash($_POST['company_nonce'])
            ),
            'company_save'
        )
    ) {
        wp_die(
            esc_html__('Invalid request.', 'company-plugin')
        );
    }

    if (! current_user_can('manage_options')) {
        wp_die(
            esc_html__('Permission denied.', 'company-plugin')
        );
    }

    $name = isset($_POST['name'])
        ? sanitize_text_field(
            wp_unslash($_POST['name'])
        )
        : '';

    if ($name === '') {
        wp_die(
            esc_html__('Name is required.', 'company-plugin')
        );
    }

    update_option(
        'company_name',
        $name
    );

    wp_safe_redirect(
        add_query_arg(
            'updated',
            '1',
            admin_url('admin.php?page=company-settings')
        )
    );

    exit;
}
```

Security layers:

```text
Nonce
Capability
Sanitization
Validation
Safe storage
Safe redirect
Escaped messages
```

---

# Appendix D — Complete Mini Plugin Example

Directory:

```text
company-notice/
├── src/
│   ├── AdminPage.php
│   └── FrontendNotice.php
└── company-notice.php
```

`company-notice.php`:

```php
<?php
/**
 * Plugin Name: Company Notice
 * Description: Displays a configurable frontend notice.
 * Version: 1.0.0
 * Text Domain: company-notice
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/src/AdminPage.php';
require_once __DIR__ . '/src/FrontendNotice.php';

add_action('plugins_loaded', function () {
    (new CompanyNotice\AdminPage())->register();
    (new CompanyNotice\FrontendNotice())->register();
});
```

`src/AdminPage.php`:

```php
<?php

namespace CompanyNotice;

final class AdminPage
{
    public function register(): void
    {
        add_action(
            'admin_menu',
            [$this, 'menu']
        );

        add_action(
            'admin_init',
            [$this, 'settings']
        );
    }

    public function menu(): void
    {
        add_options_page(
            __('Company Notice', 'company-notice'),
            __('Company Notice', 'company-notice'),
            'manage_options',
            'company-notice',
            [$this, 'render']
        );
    }

    public function settings(): void
    {
        register_setting(
            'company_notice',
            'company_notice_text',
            [
                'sanitize_callback' =>
                    'sanitize_text_field',
            ]
        );
    }

    public function render(): void
    {
        if (! current_user_can('manage_options')) {
            return;
        }

        ?>
        <div class="wrap">
            <h1>
                <?php
                echo esc_html__(
                    'Company Notice',
                    'company-notice'
                );
                ?>
            </h1>

            <form
                method="post"
                action="options.php"
            >
                <?php
                settings_fields('company_notice');
                ?>

                <label for="company_notice_text">
                    <?php
                    echo esc_html__(
                        'Notice text',
                        'company-notice'
                    );
                    ?>
                </label>

                <input
                    id="company_notice_text"
                    name="company_notice_text"
                    type="text"
                    class="regular-text"
                    value="<?php
                    echo esc_attr(
                        get_option(
                            'company_notice_text',
                            ''
                        )
                    );
                    ?>"
                >

                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }
}
```

`src/FrontendNotice.php`:

```php
<?php

namespace CompanyNotice;

final class FrontendNotice
{
    public function register(): void
    {
        add_action(
            'wp_footer',
            [$this, 'render']
        );
    }

    public function render(): void
    {
        $text = get_option(
            'company_notice_text',
            ''
        );

        if ($text === '') {
            return;
        }

        printf(
            '<div class="company-notice">%s</div>',
            esc_html($text)
        );
    }
}
```

This tiny plugin demonstrates:

- plugin header
- bootstrap
- namespaced classes
- hooks
- admin menu
- Settings API
- capability checks
- sanitization
- escaping
- clean separation

---

# Appendix E — Architecture Decision Table

| Requirement | Prefer |
|---|---|
| Visual page layout | Theme |
| Critical business feature | Plugin |
| Reusable content entity | CPT in plugin |
| Content classification | Taxonomy |
| Small per-post property | Post meta |
| Global plugin configuration | Option |
| High-volume transaction records | Custom table |
| Visual editor component | Block |
| Simple embedded dynamic output | Shortcode |
| Client-side application data | REST API |
| Small legacy async action | AJAX |
| Expensive temporary computation | Transient/cache |
| Periodic task | Cron or system scheduler |
| Large import/migration | WP-CLI/batched background work |
| Third-party service call | HTTP API |
| User permission | Capability |
| Request intent | Nonce |
| Safe SQL value insertion | `$wpdb->prepare()` |

---

# Appendix F — Theme vs Plugin Decision Examples

| Feature | Theme | Plugin |
|---|---:|---:|
| Header layout | ✅ | |
| Footer design | ✅ | |
| Blog card styling | ✅ | |
| Custom fonts | ✅ | |
| Product approval workflow | | ✅ |
| Employee CPT | | ✅ |
| Invoice processing | | ✅ |
| Payment gateway | | ✅ |
| REST endpoint | | ✅ |
| Scheduled synchronization | | ✅ |
| Company color palette | ✅ | |
| Custom Gutenberg business block | Sometimes | Usually ✅ |
| Page presentation template | ✅ | |
| Audit log | | ✅ |

---

# Appendix G — Debugging Checklist

When a feature does not work:

```text
1. Is the code loaded?
2. Is the expected hook firing?
3. Is the callback registered?
4. Is the callback signature correct?
5. Are accepted arguments correct?
6. Is the current request frontend/admin/REST/cron/CLI?
7. Does the current user have permission?
8. Is the nonce valid?
9. Are request values present?
10. Are values sanitized correctly?
11. Is the query returning rows?
12. Is the API returning an error?
13. Is caching hiding the change?
14. Are rewrite rules stale?
15. Is another plugin/theme overriding behavior?
16. Is JavaScript throwing an error?
17. Is a PHP warning/fatal in the log?
18. Can the issue be reproduced with default theme/plugins disabled?
```

---

# Appendix H — What to Learn Next

After mastering this handbook, study:

```text
PHP advanced OOP
Composer
PSR standards
WordPress coding standards
JavaScript/React
Gutenberg internals
REST architecture
SQL indexing
Redis/object caching
Docker
Nginx/Apache
CI/CD
security testing
automated testing
WooCommerce internals
headless architecture
observability
cloud deployment
```

At that point you are no longer learning only "WordPress customization."

You are learning how to build and operate maintainable applications on top of WordPress.

---

**End of Handbook**
