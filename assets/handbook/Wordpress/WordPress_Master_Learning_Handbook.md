# WordPress Master Learning Handbook
## Beginner → Advanced → Professional Developer / Administrator

> **Purpose:** A single-file learning handbook for understanding WordPress from the ground up: how to use it, how it works internally, how to extend it, how to secure and optimize it, and how to build real production websites and applications with it.
>
> **Audience:** Complete beginners, site owners, content editors, frontend developers, PHP developers, full-stack developers, freelancers, agency developers, DevOps engineers, and technical interview candidates.
>
> **Approach:** Every major concept follows a practical pattern: **What it is → Why it matters → How it works → Example → Real-world scenario → Common mistakes → Best practices.**
>
> **Scope note:** WordPress evolves continuously. This handbook focuses on durable concepts and modern WordPress architecture. For version-specific behavior, always verify the current WordPress release notes and official developer documentation.

---

# Table of Contents

1. [WordPress Learning Roadmap](#1-wordpress-learning-roadmap)
2. [What Is WordPress?](#2-what-is-wordpress)
3. [WordPress.com vs WordPress.org](#3-wordpresscom-vs-wordpressorg)
4. [How WordPress Works](#4-how-wordpress-works)
5. [Environment and Installation](#5-environment-and-installation)
6. [WordPress Directory Structure](#6-wordpress-directory-structure)
7. [wp-config.php](#7-wp-configphp)
8. [WordPress Admin Dashboard](#8-wordpress-admin-dashboard)
9. [Posts, Pages and Content Types](#9-posts-pages-and-content-types)
10. [Categories, Tags and Taxonomies](#10-categories-tags-and-taxonomies)
11. [Media Library](#11-media-library)
12. [Users, Roles and Capabilities](#12-users-roles-and-capabilities)
13. [Permalinks and URLs](#13-permalinks-and-urls)
14. [Comments](#14-comments)
15. [Settings](#15-settings)
16. [Themes](#16-themes)
17. [Classic Theme Development](#17-classic-theme-development)
18. [Block Themes and Site Editor](#18-block-themes-and-site-editor)
19. [theme.json](#19-themejson)
20. [Template Hierarchy](#20-template-hierarchy)
21. [The WordPress Loop](#21-the-wordpress-loop)
22. [Template Tags](#22-template-tags)
23. [Child Themes](#23-child-themes)
24. [Plugins](#24-plugins)
25. [Hooks: Actions and Filters](#25-hooks-actions-and-filters)
26. [Plugin Architecture](#26-plugin-architecture)
27. [Shortcodes](#27-shortcodes)
28. [Widgets, Blocks and Patterns](#28-widgets-blocks-and-patterns)
29. [Custom Post Types](#29-custom-post-types)
30. [Custom Taxonomies](#30-custom-taxonomies)
31. [Post Meta and Custom Fields](#31-post-meta-and-custom-fields)
32. [Options and Settings API](#32-options-and-settings-api)
33. [Metadata API](#33-metadata-api)
34. [Database Architecture](#34-database-architecture)
35. [$wpdb and Database Queries](#35-wpdb-and-database-queries)
36. [WP_Query](#36-wp_query)
37. [Rewrite API](#37-rewrite-api)
38. [HTTP API](#38-http-api)
39. [REST API](#39-rest-api)
40. [AJAX](#40-ajax)
41. [Cron and Scheduled Tasks](#41-cron-and-scheduled-tasks)
42. [Transients and Caching](#42-transients-and-caching)
43. [Authentication and Authorization](#43-authentication-and-authorization)
44. [Nonces](#44-nonces)
45. [Security](#45-security)
46. [Data Validation, Sanitization and Escaping](#46-data-validation-sanitization-and-escaping)
47. [File Upload Security](#47-file-upload-security)
48. [Performance Optimization](#48-performance-optimization)
49. [Caching Layers](#49-caching-layers)
50. [Images and Frontend Performance](#50-images-and-frontend-performance)
51. [SEO](#51-seo)
52. [Accessibility](#52-accessibility)
53. [Internationalization and Localization](#53-internationalization-and-localization)
54. [Email in WordPress](#54-email-in-wordpress)
55. [WooCommerce Concepts](#55-woocommerce-concepts)
56. [Membership, LMS and Community Sites](#56-membership-lms-and-community-sites)
57. [Multisite](#57-multisite)
58. [Headless WordPress](#58-headless-wordpress)
59. [WP-CLI](#59-wp-cli)
60. [Debugging](#60-debugging)
61. [Logging and Monitoring](#61-logging-and-monitoring)
62. [Local, Staging and Production Environments](#62-local-staging-and-production-environments)
63. [Git Workflow](#63-git-workflow)
64. [Deployment](#64-deployment)
65. [Backups, Migration and Disaster Recovery](#65-backups-migration-and-disaster-recovery)
66. [WordPress Hosting Architecture](#66-wordpress-hosting-architecture)
67. [Nginx, Apache and PHP-FPM](#67-nginx-apache-and-php-fpm)
68. [CDN and Reverse Proxy](#68-cdn-and-reverse-proxy)
69. [Object Storage](#69-object-storage)
70. [Scaling WordPress](#70-scaling-wordpress)
71. [Composer and Modern PHP](#71-composer-and-modern-php)
72. [JavaScript in WordPress](#72-javascript-in-wordpress)
73. [Gutenberg Block Development](#73-gutenberg-block-development)
74. [Block Editor Data Flow](#74-block-editor-data-flow)
75. [Plugin Security Review Checklist](#75-plugin-security-review-checklist)
76. [Theme Review Checklist](#76-theme-review-checklist)
77. [Common WordPress Problems](#77-common-wordpress-problems)
78. [Real-World Architecture Scenarios](#78-real-world-architecture-scenarios)
79. [Hands-On Projects](#79-hands-on-projects)
80. [Interview Questions](#80-interview-questions)
81. [Best-Practice Checklists](#81-best-practice-checklists)
82. [30/60/90-Day Learning Plan](#82-306090-day-learning-plan)
83. [Command and Code Cheat Sheet](#83-command-and-code-cheat-sheet)
84. [Glossary](#84-glossary)
85. [Official Learning Sources](#85-official-learning-sources)

---

# 1. WordPress Learning Roadmap

Do not try to learn WordPress by memorizing dashboard menus. Learn it layer by layer.

## Level 1 — WordPress User

Learn:

- installation
- dashboard
- pages
- posts
- media
- menus/navigation
- themes
- plugins
- users
- comments
- settings
- backups

**Goal:** Build and manage a normal website without touching source code.

## Level 2 — Site Builder

Learn:

- block editor
- Site Editor
- block themes
- patterns
- reusable content
- forms
- SEO
- caching
- security
- staging
- WooCommerce basics

**Goal:** Build professional business websites.

## Level 3 — WordPress Developer

Learn:

- PHP
- HTML
- CSS
- JavaScript
- theme development
- plugin development
- hooks
- template hierarchy
- WordPress Loop
- WP_Query
- custom post types
- taxonomies
- custom fields
- Settings API
- database APIs
- REST API

**Goal:** Build custom functionality without depending entirely on third-party plugins.

## Level 4 — Advanced Developer

Learn:

- custom Gutenberg blocks
- React concepts
- WordPress data stores
- custom REST endpoints
- AJAX
- cron
- caching
- authentication
- security
- Composer
- automated testing
- WP-CLI

**Goal:** Build maintainable plugins, themes and application-style WordPress systems.

## Level 5 — Production / Architecture

Learn:

- Git
- CI/CD
- Nginx/Apache
- PHP-FPM
- Redis
- CDN
- database tuning
- monitoring
- horizontal scaling
- media offloading
- load balancing
- backups
- disaster recovery
- security hardening

**Goal:** Run WordPress reliably at production scale.

---

# 2. What Is WordPress?

WordPress is an open-source content management system written primarily in PHP.

At its simplest:

```text
Browser
   |
   v
Web Server
   |
   v
PHP / WordPress
   |
   +----> Theme
   |
   +----> Plugins
   |
   v
MySQL / MariaDB
```

WordPress provides:

- content management
- authentication
- user roles
- routing
- database abstraction
- media management
- extensibility
- themes
- plugins
- REST API
- block editor
- scheduling
- comments
- taxonomy
- metadata

WordPress is not only a blogging platform.

It can power:

- blogs
- company websites
- news portals
- online stores
- portfolios
- membership sites
- learning platforms
- directories
- intranets
- event websites
- API backends
- headless CMS solutions

---

# 3. WordPress.com vs WordPress.org

This confuses many beginners.

## WordPress.org

WordPress.org represents the open-source WordPress software.

You normally:

1. purchase hosting
2. install WordPress
3. manage your server/site
4. install themes/plugins
5. customize code if needed

This is commonly called **self-hosted WordPress**.

## WordPress.com

WordPress.com is a hosted service built around WordPress.

Hosting, infrastructure and many operational concerns are managed for you, depending on the plan.

## Scenario

You are building a custom ERP-like portal requiring:

- custom PHP
- private plugins
- custom REST endpoints
- database integrations
- cron processing

A self-hosted environment generally gives you the level of control required for such custom development.

---

# 4. How WordPress Works

Understanding the request lifecycle is one of the biggest steps from "WordPress user" to "WordPress developer."

A simplified request:

```text
https://example.com/products/laptop
            |
            v
         Web server
            |
            v
         index.php
            |
            v
     wp-blog-header.php
            |
            v
       wp-load.php
            |
            v
       wp-config.php
            |
            v
   WordPress bootstrap
            |
            v
 Parse request / rewrite rules
            |
            v
    Main WordPress query
            |
            v
 Determine template
            |
            v
       Theme renders
            |
            v
       HTML response
```

During this process WordPress also loads plugins, fires actions and applies filters.

## Important idea

WordPress is **event-driven** in many places.

Your code usually does not modify WordPress Core.

Instead:

```php
add_action( 'init', 'my_function' );
add_filter( 'the_content', 'my_content_filter' );
```

This makes upgrades much safer.

---

# 5. Environment and Installation

Modern hosting guidance recommends a current supported PHP environment, a supported MySQL/MariaDB version, HTTPS, and a capable web server such as Apache or Nginx.

A typical production stack:

```text
Linux
Nginx / Apache
PHP 8.x + PHP-FPM
MySQL / MariaDB
HTTPS
WordPress
Redis optional
CDN optional
```

## Local development options

You can develop using:

- native PHP + MySQL
- XAMPP
- WAMP
- MAMP
- Local
- Docker
- DDEV
- wp-env

## Manual installation

High-level process:

1. create database
2. create database user
3. download WordPress
4. place files in document root
5. configure database credentials
6. visit site URL
7. finish installer
8. create administrator
9. configure permalinks
10. enable HTTPS

## Docker example

```yaml
services:
  db:
    image: mysql:8
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: root

  wordpress:
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
```

Use production-grade secret handling instead of hard-coded credentials in real systems.

---

# 6. WordPress Directory Structure

Typical installation:

```text
wordpress/
├── index.php
├── wp-admin/
├── wp-content/
│   ├── plugins/
│   ├── themes/
│   ├── uploads/
│   └── languages/
├── wp-includes/
├── wp-config.php
├── wp-login.php
├── wp-cron.php
└── .htaccess
```

## wp-admin

Contains administration functionality.

Do not edit it directly.

## wp-includes

Contains most WordPress Core libraries.

Do not modify it.

## wp-content

This is where most custom work belongs.

Important directories:

```text
wp-content/plugins/
wp-content/themes/
wp-content/uploads/
wp-content/mu-plugins/
```

## Golden rule

**Never modify WordPress Core to implement business functionality.**

Why?

Because the next Core update can overwrite your changes.

Use:

- plugins
- child themes
- hooks
- filters
- custom blocks
- custom APIs

---

# 7. wp-config.php

`wp-config.php` contains important installation configuration.

Typical settings:

```php
define( 'DB_NAME', 'wordpress' );
define( 'DB_USER', 'wordpress_user' );
define( 'DB_PASSWORD', 'strong-password' );
define( 'DB_HOST', 'localhost' );
```

Other useful settings:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

Production:

```php
define( 'WP_DEBUG', false );
```

Memory:

```php
define( 'WP_MEMORY_LIMIT', '256M' );
```

Environment:

```php
define( 'WP_ENVIRONMENT_TYPE', 'development' );
```

Possible environment values commonly include:

```text
local
development
staging
production
```

## Database prefix

```php
$table_prefix = 'wp_';
```

Changing the prefix is not a replacement for proper security controls.

## Salts and keys

WordPress uses authentication keys and salts to help protect session/cookie information.

Never commit real production secrets into a public Git repository.

---

# 8. WordPress Admin Dashboard

Default administration area:

```text
/wp-admin/
```

Important sections:

- Dashboard
- Posts
- Media
- Pages
- Comments
- Appearance
- Plugins
- Users
- Tools
- Settings

Plugin installations may add their own menu items.

## Scenario

A content editor should be able to update articles but must not install plugins.

Do not give Administrator access.

Create or assign a role with only required capabilities.

This follows the **principle of least privilege**.

---

# 9. Posts, Pages and Content Types

## Posts

Posts are generally time-oriented content.

Examples:

- news
- blog entries
- release notes
- announcements

Posts normally support:

- categories
- tags
- author
- publication date
- archives
- RSS feeds

## Pages

Pages are typically evergreen hierarchical content.

Examples:

- About
- Contact
- Privacy Policy
- Services

A page can have a parent/child relationship.

## Custom Post Types

For domain-specific structured content.

Examples:

```text
product
employee
job
event
property
course
invoice
portfolio
movie
```

Do not misuse posts for every data model.

---

# 10. Categories, Tags and Taxonomies

A **taxonomy** groups content.

WordPress includes:

- category
- post_tag

## Category

Usually hierarchical.

```text
Technology
├── Programming
│   ├── PHP
│   └── JavaScript
└── Hardware
```

## Tag

Usually non-hierarchical.

```text
wordpress
php
security
performance
```

## Custom taxonomy

Suppose you have a `movie` post type.

Useful taxonomies:

```text
genre
language
release_region
```

Example:

```php
register_taxonomy(
    'genre',
    [ 'movie' ],
    [
        'label'        => 'Genres',
        'public'       => true,
        'hierarchical' => true,
        'show_in_rest' => true,
    ]
);
```

---

# 11. Media Library

WordPress can manage:

- images
- PDFs
- audio
- video
- documents

Uploads are normally stored under:

```text
wp-content/uploads/YYYY/MM/
```

## Image sizes

WordPress may generate multiple image sizes.

Common concepts:

- thumbnail
- medium
- large
- full
- custom sizes

Example:

```php
add_image_size( 'product-card', 600, 400, true );
```

## Scenario

A homepage lists 30 products.

Do not load 4000×3000 originals for 300px cards.

Use an appropriately generated image size.

This reduces:

- bandwidth
- rendering cost
- page load time

---

# 12. Users, Roles and Capabilities

Default roles commonly include:

- Administrator
- Editor
- Author
- Contributor
- Subscriber

WordPress authorization is fundamentally capability-based.

Examples:

```text
edit_posts
publish_posts
manage_options
edit_users
upload_files
```

Check a capability:

```php
if ( current_user_can( 'manage_options' ) ) {
    // Allow administrative operation.
}
```

## Do not write

```php
if ( $user->role === 'administrator' ) {
```

when a capability check better expresses what the operation requires.

## Scenario

A Finance Manager plugin page should be available only to users granted `manage_finance_reports`.

Create a custom capability and assign it to the correct role instead of hard-coding usernames.

---

# 13. Permalinks and URLs

Permalinks control public URL structures.

Bad:

```text
/?p=123
```

Human-readable:

```text
/blog/wordpress-security/
```

Good URLs help:

- readability
- sharing
- information architecture
- SEO

## Important

Changing permalink structure after a site is established can break old links.

Use redirects when migrating URL structures.

---

# 14. Comments

WordPress contains a built-in commenting system.

Comments can support:

- moderation
- nested replies
- spam handling
- approval workflow

For sites that do not need comments, disable them.

Unused functionality increases administrative overhead and potentially attack surface.

---

# 15. Settings

Important settings areas:

## General

- site title
- tagline
- URL
- timezone
- language

## Writing

Publishing-related defaults.

## Reading

- homepage display
- posts page
- search engine visibility

## Discussion

Comment behavior.

## Media

Image dimensions.

## Permalinks

URL structure.

## Privacy

Privacy policy support.

---

# 16. Themes

A theme controls site presentation.

A theme should primarily handle:

- layout
- typography
- visual styles
- templates
- presentation behavior

Business-critical functionality should generally live in plugins.

## Why?

If functionality lives only inside a theme, switching the theme can remove it.

Bad example:

```text
Theme contains:
- employee management
- payment processing
- ERP integration
- invoice workflow
```

Better:

```text
Theme:
- presentation

Plugins:
- employee module
- payment module
- ERP integration
- invoice workflow
```

Modern WordPress supports both:

- block themes
- classic themes

---

# 17. Classic Theme Development

A classic theme commonly uses PHP templates.

Minimal conceptual structure:

```text
my-theme/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── archive.php
└── screenshot.png
```

## style.css header

```css
/*
Theme Name: My Company Theme
Author: Example Team
Version: 1.0.0
*/
```

## functions.php

Used to register theme behavior.

Example:

```php
<?php

add_action( 'wp_enqueue_scripts', 'company_enqueue_assets' );

function company_enqueue_assets() {
    wp_enqueue_style(
        'company-style',
        get_stylesheet_uri(),
        [],
        '1.0.0'
    );
}
```

Do not manually output random `<link>` and `<script>` tags everywhere.

Use WordPress enqueue APIs.

---

# 18. Block Themes and Site Editor

Block themes use blocks for major site regions, not just post content.

Examples:

- header
- footer
- navigation
- templates
- archive layouts
- single layouts

Typical structure:

```text
my-block-theme/
├── style.css
├── theme.json
├── templates/
│   ├── index.html
│   ├── single.html
│   └── page.html
├── parts/
│   ├── header.html
│   └── footer.html
└── patterns/
```

## Why block themes matter

They allow site creators to edit more of the website through the Site Editor.

Instead of every layout change requiring PHP template modification, many layouts can be expressed as blocks.

---

# 19. theme.json

`theme.json` centralizes many design settings and styles.

Conceptual example:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "brand",
          "name": "Brand",
          "color": "#223344"
        }
      ]
    },
    "typography": {
      "fluid": true
    }
  }
}
```

It can define:

- colors
- spacing
- typography
- layout
- block-specific settings
- style defaults

## Scenario

Your design system requires consistent spacing and colors.

Instead of allowing arbitrary values everywhere, expose controlled tokens through `theme.json`.

---

# 20. Template Hierarchy

WordPress determines which theme template to use based on the requested content.

Simplified examples:

```text
Single post:
single-{post_type}.php
single.php
singular.php
index.php
```

```text
Page:
custom page template
page-{slug}.php
page-{id}.php
page.php
singular.php
index.php
```

```text
Category archive:
category-{slug}.php
category-{id}.php
category.php
archive.php
index.php
```

## Scenario

You need a unique design for the `product` post type.

Create:

```text
single-product.php
```

instead of adding dozens of conditions to `single.php`.

---

# 21. The WordPress Loop

The Loop displays content returned by the current query.

Classic example:

```php
<?php if ( have_posts() ) : ?>

    <?php while ( have_posts() ) : the_post(); ?>

        <article>
            <h2><?php the_title(); ?></h2>
            <div>
                <?php the_content(); ?>
            </div>
        </article>

    <?php endwhile; ?>

<?php else : ?>

    <p>No content found.</p>

<?php endif; ?>
```

Key functions:

```text
have_posts()
the_post()
the_title()
the_content()
the_excerpt()
the_permalink()
```

---

# 22. Template Tags

Template tags provide theme-friendly access to WordPress data.

Examples:

```php
get_header();
get_footer();

the_title();
the_content();
the_excerpt();
the_post_thumbnail();

get_the_ID();
get_the_title();
get_permalink();

wp_nav_menu();
body_class();
```

Difference:

```php
the_title();
```

prints output.

```php
$title = get_the_title();
```

returns output.

Use the `get_*` version when you need to transform or store the value.

---

# 23. Child Themes

A child theme inherits from a parent theme.

Useful when:

- customizing an existing theme
- preserving modifications across parent theme updates

Typical files:

```text
my-child-theme/
├── style.css
└── functions.php
```

`style.css`:

```css
/*
Theme Name: My Child Theme
Template: parent-theme-folder
*/
```

## Do not

Directly modify a third-party parent theme that receives updates.

Your changes may disappear during the next update.

---

# 24. Plugins

A plugin extends WordPress functionality.

Simplest plugin:

```text
wp-content/plugins/hello-company/
└── hello-company.php
```

```php
<?php
/**
 * Plugin Name: Hello Company
 * Description: Example custom plugin.
 * Version: 1.0.0
 */

defined( 'ABSPATH' ) || exit;

add_action( 'admin_notices', function () {
    echo '<div class="notice notice-success"><p>Hello!</p></div>';
} );
```

## Good plugin use cases

- integrations
- custom workflows
- payment logic
- custom post types
- APIs
- reports
- scheduled jobs
- admin pages
- authentication integrations

---

# 25. Hooks: Actions and Filters

Hooks are fundamental to WordPress extensibility.

There are two primary types:

- actions
- filters

## Action

An action lets you run code at a particular point.

```php
add_action( 'init', 'company_register_post_type' );

function company_register_post_type() {
    // Register something.
}
```

Think:

> "When this event occurs, do something."

## Filter

A filter receives a value, modifies it, and returns it.

```php
add_filter( 'the_title', 'company_modify_title' );

function company_modify_title( $title ) {
    return '[Company] ' . $title;
}
```

Think:

> "Before this value is used, let me modify it."

## Priority

```php
add_action( 'init', 'first_callback', 5 );
add_action( 'init', 'later_callback', 20 );
```

Lower priority runs earlier.

Default is typically:

```text
10
```

## Accepted arguments

```php
add_filter( 'example_filter', 'callback', 10, 2 );
```

## Custom hook

```php
do_action( 'company_invoice_approved', $invoice_id );
```

Elsewhere:

```php
add_action(
    'company_invoice_approved',
    'send_approval_email'
);
```

This allows modules to remain loosely coupled.

---

# 26. Plugin Architecture

For tiny plugins, one file may be enough.

For serious projects, use structure.

```text
company-plugin/
├── company-plugin.php
├── src/
│   ├── Admin/
│   ├── Api/
│   ├── Domain/
│   ├── Infrastructure/
│   └── Support/
├── assets/
│   ├── css/
│   └── js/
├── templates/
├── languages/
├── tests/
├── composer.json
└── uninstall.php
```

## Bootstrap example

```php
<?php

defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/src/Plugin.php';

add_action( 'plugins_loaded', function () {
    $plugin = new Company\Plugin();
    $plugin->boot();
} );
```

## Principles

Prefer:

- small focused classes
- dependency injection where useful
- clear boundaries
- explicit responsibilities
- WordPress APIs
- namespaces
- automated tests for business logic

Avoid building a giant "God class."

---

# 27. Shortcodes

Shortcodes allow compact content placeholders.

Example:

```php
add_shortcode( 'current_year', function () {
    return esc_html( wp_date( 'Y' ) );
} );
```

Editor:

```text
[current_year]
```

## Shortcode with attributes

```php
add_shortcode( 'employee', function ( $atts ) {

    $atts = shortcode_atts(
        [
            'id' => 0,
        ],
        $atts
    );

    $id = absint( $atts['id'] );

    return 'Employee ID: ' . esc_html( $id );
} );
```

For modern editor-first experiences, consider blocks when they provide better editing UX.

---

# 28. Widgets, Blocks and Patterns

## Blocks

Blocks are modular content/editing units.

Examples:

- paragraph
- image
- heading
- columns
- buttons
- query loop
- custom product block

## Patterns

A pattern is a predefined composition of blocks.

Example:

```text
Hero
├── Cover
├── Heading
├── Paragraph
└── Buttons
```

Useful for reusable design structures.

## Scenario

Marketing wants 20 landing pages using the same hero and CTA style.

Create curated patterns instead of manually recreating layouts.

---

# 29. Custom Post Types

Register a custom post type:

```php
add_action( 'init', function () {

    register_post_type(
        'book',
        [
            'labels' => [
                'name'          => 'Books',
                'singular_name' => 'Book',
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
        ]
    );
} );
```

## Scenario

Do not store books as ordinary pages if you need:

- author
- genre
- ISBN
- publisher
- dedicated archive
- filtering

Create a `book` content model.

---

# 30. Custom Taxonomies

```php
add_action( 'init', function () {

    register_taxonomy(
        'book_genre',
        [ 'book' ],
        [
            'label'        => 'Genres',
            'public'       => true,
            'hierarchical' => true,
            'show_in_rest' => true,
        ]
    );
} );
```

Possible terms:

```text
Technology
Science Fiction
Business
History
```

Use taxonomies for classification.

Do not create a separate database column every time you need grouping.

---

# 31. Post Meta and Custom Fields

Metadata stores additional information associated with content.

Examples for a `book`:

```text
ISBN
price
publication_year
rating
```

Basic API:

```php
update_post_meta( $post_id, '_book_isbn', $isbn );

$isbn = get_post_meta(
    $post_id,
    '_book_isbn',
    true
);
```

Delete:

```php
delete_post_meta( $post_id, '_book_isbn' );
```

## Hidden-style meta keys

Keys beginning with `_` are often treated as internal-style metadata by WordPress UI conventions.

## Scenario

Use post meta for a limited amount of content-specific attributes.

For massive transactional datasets, a custom table may be more appropriate.

---

# 32. Options and Settings API

Options store site-wide values.

Examples:

```php
update_option( 'company_api_url', $url );

$url = get_option( 'company_api_url' );
```

Use options for:

- plugin settings
- global configuration
- feature flags
- integration settings

Avoid stuffing huge, constantly changing datasets into options.

## Settings API

The Settings API helps register and render admin configuration fields.

Important concepts:

```text
register_setting()
add_settings_section()
add_settings_field()
settings_fields()
do_settings_sections()
```

---

# 33. Metadata API

WordPress exposes consistent metadata APIs for different object types.

Examples:

```text
post meta
user meta
term meta
comment meta
```

User meta:

```php
update_user_meta(
    $user_id,
    'employee_code',
    'EMP001'
);
```

Read:

```php
$code = get_user_meta(
    $user_id,
    'employee_code',
    true
);
```

---

# 34. Database Architecture

Important standard tables commonly include:

```text
wp_posts
wp_postmeta
wp_users
wp_usermeta
wp_terms
wp_term_taxonomy
wp_term_relationships
wp_options
wp_comments
wp_commentmeta
wp_links
```

The actual prefix may differ from `wp_`.

## wp_posts

Stores many content types:

- posts
- pages
- attachments
- revisions
- custom post types

This is why `post_type` matters.

## wp_postmeta

Key/value metadata for posts.

## wp_options

Site-level settings and cached values.

## wp_users / wp_usermeta

User accounts and metadata.

## Taxonomy relation

Simplified:

```text
wp_terms
   |
   v
wp_term_taxonomy
   |
   v
wp_term_relationships
   |
   v
wp_posts
```

---

# 35. $wpdb and Database Queries

WordPress provides the global `$wpdb` object.

Example:

```php
global $wpdb;

$table = $wpdb->prefix . 'company_orders';

$rows = $wpdb->get_results(
    "SELECT * FROM {$table}"
);
```

## Parameterized query

Never concatenate untrusted input.

```php
global $wpdb;

$email = sanitize_email( $_GET['email'] ?? '' );

$sql = $wpdb->prepare(
    "SELECT * FROM {$wpdb->users} WHERE user_email = %s",
    $email
);

$user = $wpdb->get_row( $sql );
```

## Insert

```php
$wpdb->insert(
    $table,
    [
        'name'   => $name,
        'status' => 'active',
    ],
    [
        '%s',
        '%s',
    ]
);
```

## Custom tables

Custom tables can make sense for:

- very large transactional datasets
- log/event tables
- order-like domain records
- many indexed queries that do not map cleanly to posts/meta

Do not create custom tables automatically for every feature.

---

# 36. WP_Query

Use `WP_Query` to retrieve WordPress content.

Example:

```php
$query = new WP_Query(
    [
        'post_type'      => 'book',
        'posts_per_page' => 10,
        'post_status'    => 'publish',
    ]
);

if ( $query->have_posts() ) {

    while ( $query->have_posts() ) {
        $query->the_post();

        echo esc_html( get_the_title() );
    }

    wp_reset_postdata();
}
```

## Meta query

```php
$query = new WP_Query(
    [
        'post_type'  => 'book',
        'meta_query' => [
            [
                'key'     => '_book_price',
                'value'   => 500,
                'compare' => '<=',
                'type'    => 'NUMERIC',
            ],
        ],
    ]
);
```

## Tax query

```php
'tax_query' => [
    [
        'taxonomy' => 'book_genre',
        'field'    => 'slug',
        'terms'    => [ 'technology' ],
    ],
]
```

## Performance caution

Complex `meta_query` usage on millions of rows can become expensive.

At scale, model data and indexes deliberately.

---

# 37. Rewrite API

WordPress maps friendly URLs to internal queries.

Custom rule:

```php
add_action( 'init', function () {
    add_rewrite_rule(
        '^reports/([0-9]+)/?$',
        'index.php?report_id=$matches[1]',
        'top'
    );
} );
```

Register query var:

```php
add_filter( 'query_vars', function ( $vars ) {
    $vars[] = 'report_id';
    return $vars;
} );
```

## Important

Rewrite rules should not be flushed on every request.

Usually flush on activation/deactivation when required.

---

# 38. HTTP API

Do not use raw cURL everywhere.

WordPress provides:

```text
wp_remote_get()
wp_remote_post()
wp_remote_request()
```

Example:

```php
$response = wp_remote_get(
    'https://api.example.test/products',
    [
        'timeout' => 10,
    ]
);

if ( is_wp_error( $response ) ) {
    return;
}

$status = wp_remote_retrieve_response_code( $response );
$body   = wp_remote_retrieve_body( $response );
$data   = json_decode( $body, true );
```

## Scenario

Your plugin calls an ERP API.

Use:

- timeout
- error handling
- retries only when safe
- authentication
- secure secret storage
- logging without leaking secrets

---

# 39. REST API

The WordPress REST API allows applications to exchange data using JSON.

Base pattern:

```text
/wp-json/
```

Posts:

```text
GET /wp-json/wp/v2/posts
```

Single post:

```text
GET /wp-json/wp/v2/posts/123
```

## Custom endpoint

```php
add_action( 'rest_api_init', function () {

    register_rest_route(
        'company/v1',
        '/status',
        [
            'methods'             => 'GET',
            'callback'            => 'company_api_status',
            'permission_callback' => '__return_true',
        ]
    );
} );

function company_api_status() {
    return rest_ensure_response(
        [
            'status' => 'ok',
        ]
    );
}
```

## Protected endpoint

```php
'permission_callback' => function () {
    return current_user_can( 'manage_options' );
}
```

## Never

Use:

```php
'permission_callback' => '__return_true'
```

for sensitive data simply because it makes development easier.

## Scenario: React frontend

```text
React / Next.js
      |
      v
WordPress REST API
      |
      v
WordPress content/database
```

This is one form of headless WordPress.

---

# 40. AJAX

Traditional WordPress AJAX commonly uses:

```text
/wp-admin/admin-ajax.php
```

Server handler:

```php
add_action( 'wp_ajax_company_lookup', 'company_lookup' );

function company_lookup() {

    check_ajax_referer(
        'company_lookup_nonce',
        'nonce'
    );

    if ( ! current_user_can( 'read' ) ) {
        wp_send_json_error(
            [ 'message' => 'Unauthorized' ],
            403
        );
    }

    wp_send_json_success(
        [
            'message' => 'Success',
        ]
    );
}
```

For unauthenticated users:

```php
add_action(
    'wp_ajax_nopriv_company_lookup',
    'company_lookup'
);
```

## Modern choice

For many new application-style features, REST endpoints can be cleaner than `admin-ajax.php`.

---

# 41. Cron and Scheduled Tasks

WordPress includes WP-Cron.

Example:

```php
if ( ! wp_next_scheduled( 'company_daily_sync' ) ) {
    wp_schedule_event(
        time(),
        'daily',
        'company_daily_sync'
    );
}

add_action(
    'company_daily_sync',
    'company_run_daily_sync'
);

function company_run_daily_sync() {
    // Sync ERP data.
}
```

## Important concept

WP-Cron is typically triggered by website requests.

Low-traffic sites may run scheduled events late.

For more predictable production scheduling, a real system scheduler can call WordPress cron processing.

---

# 42. Transients and Caching

Transients provide temporary cached values.

```php
$key = 'company_exchange_rates';

$data = get_transient( $key );

if ( false === $data ) {

    $data = company_fetch_rates();

    set_transient(
        $key,
        $data,
        HOUR_IN_SECONDS
    );
}
```

Delete:

```php
delete_transient( $key );
```

## Scenario

An external API returns currency rates.

Do not call it 1,000 times per minute if rates only change hourly.

Cache the response.

---

# 43. Authentication and Authorization

Authentication asks:

> Who are you?

Authorization asks:

> What are you allowed to do?

WordPress authentication commonly relies on login sessions/cookies for normal site usage.

Authorization should use capabilities.

Bad:

```php
if ( is_user_logged_in() ) {
    delete_all_orders();
}
```

Logged in does not mean authorized.

Better:

```php
if ( ! current_user_can( 'delete_shop_orders' ) ) {
    wp_die( 'Unauthorized.' );
}
```

---

# 44. Nonces

WordPress nonces help protect requests against cross-site request forgery-style misuse.

Create:

```php
$nonce = wp_create_nonce( 'delete_invoice_123' );
```

Verify:

```php
if (
    ! isset( $_POST['_wpnonce'] ) ||
    ! wp_verify_nonce(
        sanitize_text_field(
            wp_unslash( $_POST['_wpnonce'] )
        ),
        'delete_invoice_123'
    )
) {
    wp_die( 'Invalid request.' );
}
```

In admin forms, helper functions are often more convenient:

```php
wp_nonce_field( 'save_company_settings' );
```

## Critical concept

A nonce is **not authorization**.

You usually need both:

```text
nonce check
+
capability check
```

---

# 45. Security

Think in layers.

## Layer 1 — Infrastructure

- supported OS
- supported PHP
- patched database
- HTTPS
- firewall
- secure SSH
- restricted file permissions

## Layer 2 — WordPress Core

- keep updated
- remove abandoned components
- protect administrative accounts

## Layer 3 — Plugins and Themes

- update them
- remove unused plugins/themes
- use trusted sources
- review custom code
- avoid pirated/nulled software

## Layer 4 — Application Code

Prevent:

- SQL injection
- XSS
- CSRF
- authorization bypass
- insecure file uploads
- arbitrary file execution
- insecure direct object reference
- data leakage
- SSRF-style misuse
- unsafe deserialization patterns

## Layer 5 — Operations

- backups
- monitoring
- audit trail
- restore testing
- credential rotation
- incident response

---

# 46. Data Validation, Sanitization and Escaping

Three different ideas:

## Validation

Check whether data is acceptable.

```php
if ( ! is_email( $email ) ) {
    return new WP_Error( 'invalid_email' );
}
```

## Sanitization

Clean input.

```php
$name  = sanitize_text_field(
    wp_unslash( $_POST['name'] ?? '' )
);

$email = sanitize_email(
    wp_unslash( $_POST['email'] ?? '' )
);
```

## Escaping

Make output safe for its output context.

HTML text:

```php
echo esc_html( $name );
```

HTML attribute:

```php
echo '<input value="' . esc_attr( $name ) . '">';
```

URL:

```php
echo esc_url( $url );
```

Controlled HTML:

```php
echo wp_kses_post( $content );
```

## Rule

**Sanitize input, validate business rules, escape output.**

Escape as late as practical.

---

# 47. File Upload Security

Uploads are dangerous when poorly designed.

Validate:

- permission
- nonce
- size
- MIME type
- extension
- filename
- storage destination

Use WordPress media/upload APIs instead of inventing unsafe upload logic.

## Never trust

```text
$_FILES['file']['type']
```

as your only validation.

## Scenario

A résumé upload feature should accept only allowed document types and store them safely.

Do not allow arbitrary `.php` uploads into a web-executable folder.

---

# 48. Performance Optimization

Performance is not one plugin setting.

Think in layers:

```text
Browser
  ↓
CDN / edge caching
  ↓
Web server
  ↓
Full-page cache
  ↓
PHP
  ↓
Object cache
  ↓
Database
  ↓
External APIs
```

## Main bottlenecks

- slow hosting
- unoptimized database queries
- too many plugins
- poor plugin code
- synchronous external API calls
- huge images
- excessive JavaScript
- no caching
- slow third-party scripts
- oversized autoloaded options

## First rule

Measure before optimizing.

Useful metrics:

- Time to First Byte
- Core Web Vitals
- PHP execution time
- database query count/time
- cache hit ratio
- memory usage
- slow external requests

---

# 49. Caching Layers

## Browser cache

Caches static files in the visitor's browser.

## CDN cache

Caches content near users.

## Full-page cache

Stores generated page HTML.

Excellent for public pages.

## Object cache

Caches WordPress objects/query results.

Redis is a common persistent object-cache backend.

## Opcode cache

PHP OPcache caches compiled PHP bytecode.

## Application cache

Your own transient/object cache.

## Scenario

Public news page:

```text
Request
  ↓
CDN cache hit
  ↓
HTML returned
```

No PHP or database execution may be required for that request.

Logged-in dashboard:

```text
Request
  ↓
PHP
  ↓
object cache
  ↓
database
```

Full-page caching is often more limited for personalized authenticated pages.

---

# 50. Images and Frontend Performance

Optimize:

- image dimensions
- image format
- lazy loading
- responsive images
- CSS
- JavaScript
- fonts
- third-party scripts

WordPress can generate responsive image markup.

Do not defeat it by hardcoding giant image assets unnecessarily.

## Scenario

Hero image is 5 MB.

Even perfect PHP optimization cannot compensate for a huge client payload on mobile.

Frontend performance matters separately from backend performance.

---

# 51. SEO

WordPress gives a strong content foundation, but SEO still requires intentional work.

Important areas:

- site structure
- semantic HTML
- title/meta strategy
- canonical URLs
- XML sitemap
- internal links
- structured data
- image alt text
- redirects
- performance
- mobile usability
- useful content

## Avoid

Installing five SEO plugins.

Choose one coherent approach and understand what it is generating.

---

# 52. Accessibility

Accessibility means people with disabilities can use your website effectively.

Key practices:

- semantic headings
- keyboard navigation
- visible focus states
- form labels
- adequate contrast
- meaningful link text
- alt text
- accessible modal/dialog behavior
- proper button elements
- screen-reader-compatible content

Bad:

```html
<div onclick="submitForm()">Submit</div>
```

Better:

```html
<button type="submit">Submit</button>
```

---

# 53. Internationalization and Localization

Internationalization prepares software for translation.

Localization translates it.

PHP example:

```php
esc_html_e(
    'Save changes',
    'company-plugin'
);
```

Returning translated string:

```php
$message = __(
    'Invoice approved.',
    'company-plugin'
);
```

With variable:

```php
printf(
    esc_html__( 'Hello %s', 'company-plugin' ),
    esc_html( $name )
);
```

Do not concatenate translated sentence fragments unnecessarily.

---

# 54. Email in WordPress

WordPress provides:

```php
wp_mail()
```

Example:

```php
wp_mail(
    'user@example.test',
    'Invoice Approved',
    'Your invoice has been approved.'
);
```

## Production reality

Reliable email delivery often requires a properly configured mail provider or SMTP/API transport.

Do not assume PHP/server mail delivery will always be reliable.

Track:

- delivery
- failures
- bounces when relevant
- rate limits
- provider errors

---

# 55. WooCommerce Concepts

WooCommerce transforms WordPress into an e-commerce platform.

Important concepts include:

- products
- variations
- carts
- checkout
- customers
- orders
- coupons
- taxes
- shipping
- payment gateways
- webhooks
- stock
- order statuses

## Product types

Examples:

- simple
- variable
- grouped
- external/affiliate
- downloadable
- virtual

## Scenario: T-shirt

Variable product:

```text
T-Shirt
├── Size: S / M / L
└── Color: Black / White
```

Each variation may have:

- SKU
- price
- stock
- image

## Customization principle

Do not edit WooCommerce plugin files.

Use:

- hooks
- template overrides where appropriate
- extension plugins
- APIs

---

# 56. Membership, LMS and Community Sites

WordPress can power specialized platforms.

## Membership

Needs:

- user registration
- subscriptions
- restricted content
- billing
- account management

## LMS

Needs:

- courses
- lessons
- quizzes
- enrollment
- progress
- certificates

## Community

Needs:

- profiles
- groups
- messaging
- moderation
- activity feeds

## Architecture question

Before installing many plugins, ask:

> Which plugin owns each domain concept?

Avoid having two different systems both trying to control:

- user profiles
- checkout
- email automation
- permissions

---

# 57. Multisite

WordPress Multisite allows multiple sites within one installation/network.

Possible structures:

```text
site1.example.com
site2.example.com
```

or:

```text
example.com/site1/
example.com/site2/
```

Useful for:

- university departments
- regional websites
- franchise networks
- large organization microsites

## Multisite is not automatically the right answer

Separate installations may be better when sites require:

- isolated security
- independent upgrades
- different infrastructure
- completely separate ownership

---

# 58. Headless WordPress

Headless architecture separates content management from frontend presentation.

```text
WordPress
   |
   | REST / GraphQL-style API
   v
Frontend app
React / Next.js / mobile
```

Benefits:

- frontend flexibility
- modern application architecture
- multi-channel content

Tradeoffs:

- preview complexity
- authentication complexity
- caching complexity
- plugin frontend assumptions may break
- SEO/rendering architecture needs planning

## Scenario

WordPress stores editorial content while Next.js renders a marketing site.

WordPress remains CMS.

Next.js becomes presentation layer.

---

# 59. WP-CLI

WP-CLI provides command-line management.

Examples:

```bash
wp core version

wp plugin list

wp theme list

wp user list

wp option get siteurl

wp cache flush
```

Install plugin:

```bash
wp plugin install query-monitor --activate
```

Database export:

```bash
wp db export backup.sql
```

Search/replace:

```bash
wp search-replace \
  'https://old.example.test' \
  'https://new.example.test' \
  --all-tables
```

Always back up first.

## Why WP-CLI matters

It is useful for:

- deployment
- automation
- bulk operations
- migrations
- maintenance
- debugging

---

# 60. Debugging

Development configuration:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

Logs are commonly written under:

```text
wp-content/debug.log
```

depending on configuration.

## Debugging process

1. reproduce issue
2. inspect logs
3. identify layer
4. isolate plugin/theme
5. inspect network request
6. inspect PHP error
7. inspect database query
8. test minimal reproduction
9. fix root cause
10. regression-test

## Common tools

- browser developer tools
- PHP logs
- server logs
- Query Monitor
- WP-CLI
- database client
- profiler/APM

---

# 61. Logging and Monitoring

Production systems need observability.

Monitor:

- uptime
- HTTP error rates
- PHP errors
- slow requests
- database health
- disk usage
- CPU/memory
- queue/cron failures
- external API failures
- certificate expiry
- backup success

## Do not log

- passwords
- API secrets
- complete payment data
- session tokens
- unnecessary personal data

Use structured context:

```text
timestamp
request_id
user_id when appropriate
operation
status
duration
error_code
```

---

# 62. Local, Staging and Production Environments

Recommended separation:

```text
Local
  ↓
Development
  ↓
Staging
  ↓
Production
```

## Local

Developer machine.

## Staging

Production-like testing environment.

Use for:

- plugin updates
- theme updates
- integration testing
- migration rehearsal
- performance testing

## Production

Real users and data.

Do not experiment directly on production.

## Configuration separation

Keep environment-specific values outside committed code where possible.

Examples:

```text
database credentials
API secrets
mail credentials
debug mode
environment URLs
```

---

# 63. Git Workflow

Track:

- custom themes
- custom plugins
- configuration templates
- deployment scripts

Normally avoid committing:

- cache
- logs
- generated backups
- runtime uploads
- secrets
- vendor-managed Core if your architecture handles it separately

Example `.gitignore` concept:

```gitignore
wp-content/uploads/
wp-content/cache/
wp-content/debug.log
.env
*.sql
*.zip
```

Exact repository strategy depends on your deployment model.

## Feature flow

```text
main
  |
  +-- feature/custom-report
          |
          v
        PR
          |
          v
       review
          |
          v
        merge
```

---

# 64. Deployment

A disciplined deployment may include:

1. backup
2. maintenance planning
3. code release
4. dependency installation
5. database migration
6. cache flush
7. health check
8. smoke test
9. monitoring
10. rollback if needed

## Avoid

FTP-editing production files manually as your normal development workflow.

## Better

```text
Developer
  ↓
Git
  ↓
CI
  ↓
Artifact
  ↓
Staging
  ↓
Tests
  ↓
Production
```

---

# 65. Backups, Migration and Disaster Recovery

A real backup strategy includes:

- database
- uploads
- custom code
- configuration
- encryption
- off-site storage
- retention
- restore testing

## Most important lesson

A backup that has never been restored is not fully proven.

## Migration sequence

Typical:

1. copy code
2. export database
3. copy media
4. import database
5. update environment URLs
6. regenerate/flush rewrite rules if needed
7. clear caches
8. validate permissions
9. test forms/email
10. inspect logs

Serialized WordPress data can make naive SQL search-and-replace unsafe.

Use WordPress-aware migration tools or WP-CLI search-replace.

---

# 66. WordPress Hosting Architecture

Small site:

```text
Internet
   |
   v
Single server
├── Nginx/Apache
├── PHP
├── WordPress
└── MySQL
```

Medium production site:

```text
Internet
   |
   v
CDN
   |
   v
Nginx
   |
   v
PHP-FPM
   |
   +---- Redis
   |
   v
MySQL
```

Larger system:

```text
Internet
   |
   v
CDN / WAF
   |
   v
Load Balancer
   |
   +----------+
   |          |
   v          v
Web 1       Web 2
   \          /
    \        /
     v      v
      Redis
        |
        v
   DB primary
        |
        v
    replicas
```

Media may be moved to shared/object storage.

---

# 67. Nginx, Apache and PHP-FPM

## Apache

Common in shared hosting and `.htaccess`-based setups.

## Nginx

Common in performance-focused production environments.

## PHP-FPM

Runs PHP worker processes independently from the web server.

Operational parameters include:

- worker counts
- memory
- timeouts
- process recycling
- request limits

Tuning must match server capacity.

Increasing PHP workers blindly can exhaust RAM.

---

# 68. CDN and Reverse Proxy

A CDN caches assets/content at edge locations.

Useful for:

- images
- CSS
- JavaScript
- fonts
- cacheable HTML

A reverse proxy can provide:

- caching
- TLS termination
- WAF integration
- request routing

## Cache invalidation

When content changes, stale pages may need purging.

A cache strategy must define:

```text
what is cached?
for how long?
what bypasses cache?
when is cache purged?
```

---

# 69. Object Storage

Large media libraries can be offloaded to object storage.

Architecture:

```text
WordPress
   |
   +---- Database
   |
   +---- Object storage
           |
           v
          CDN
```

Benefits:

- less local disk dependence
- easier horizontal scaling
- scalable media storage

Challenges:

- migration
- URL management
- permissions
- cache invalidation
- compatibility

---

# 70. Scaling WordPress

Scaling is not only adding servers.

## Step 1

Fix inefficient code.

## Step 2

Add proper caching.

## Step 3

Optimize database.

## Step 4

Move static assets/media appropriately.

## Step 5

Scale PHP/web layer.

## Step 6

Scale database carefully.

Important areas:

- persistent object cache
- page caching
- CDN
- load balancer
- shared media/object storage
- session behavior
- background jobs
- database indexing

## Scenario

If one request performs 2,000 unnecessary SQL queries, adding ten web servers multiplies inefficient behavior.

Optimize architecture first.

---

# 71. Composer and Modern PHP

Composer manages PHP packages.

Example:

```json
{
  "autoload": {
    "psr-4": {
      "Company\\Plugin\\": "src/"
    }
  }
}
```

Then:

```bash
composer dump-autoload
```

PHP:

```php
require_once __DIR__ . '/vendor/autoload.php';
```

## Namespaces

```php
namespace Company\Plugin\Service;

class InvoiceService
{
}
```

Namespaces prevent naming collisions.

WordPress remains compatible with procedural patterns, but modern custom projects can use disciplined object-oriented architecture where appropriate.

---

# 72. JavaScript in WordPress

Register scripts through WordPress.

```php
wp_enqueue_script(
    'company-dashboard',
    plugins_url( 'assets/dashboard.js', __FILE__ ),
    [],
    '1.0.0',
    true
);
```

Pass server values carefully.

Historically `wp_localize_script()` is often seen, but use APIs appropriate to the data purpose and modern script architecture.

## Browser request

```js
fetch('/wp-json/company/v1/status')
  .then(response => response.json())
  .then(data => console.log(data));
```

For authenticated operations, design authentication, permission and nonce handling correctly.

---

# 73. Gutenberg Block Development

A custom block usually involves:

- block metadata
- JavaScript/React-style editor code
- attributes
- edit UI
- save/render behavior
- styles
- server-side rendering when needed

Conceptual structure:

```text
my-block/
├── block.json
├── src/
│   └── index.js
├── build/
├── render.php
└── package.json
```

`block.json` is the central metadata file for modern block registration.

Conceptual example:

```json
{
  "apiVersion": 3,
  "name": "company/notice",
  "title": "Company Notice",
  "category": "widgets",
  "attributes": {
    "message": {
      "type": "string"
    }
  }
}
```

## Static block

Saved content is stored in post content.

## Dynamic block

Rendered on server.

Useful for data that changes frequently.

Example:

```text
Current stock
Logged-in user profile
Latest exchange rate
Live report summary
```

---

# 74. Block Editor Data Flow

A simplified mental model:

```text
Block attributes
      |
      v
Editor component
      |
      v
User changes values
      |
      v
Attributes update
      |
      v
Serialized block / server render
```

Block editor development may involve:

- React concepts
- components
- state
- data stores
- selectors
- dispatchers
- REST API
- block supports
- Inspector controls

Do not start here on day one.

First understand:

- PHP
- WordPress hooks
- post types
- REST API
- JavaScript fundamentals

---

# 75. Plugin Security Review Checklist

Before releasing a plugin, inspect:

- capability checks
- nonce checks
- sanitization
- validation
- escaping
- prepared SQL
- file uploads
- REST permission callbacks
- AJAX permissions
- secrets
- logging
- uninstall behavior
- external requests
- redirect safety
- user-supplied URLs
- output contexts

Example pattern:

```php
if ( ! current_user_can( 'manage_options' ) ) {
    wp_die( 'Unauthorized.' );
}

check_admin_referer( 'company_save_settings' );

$value = sanitize_text_field(
    wp_unslash( $_POST['company_name'] ?? '' )
);

update_option(
    'company_name',
    $value
);
```

Output:

```php
echo esc_html(
    get_option( 'company_name', '' )
);
```

---

# 76. Theme Review Checklist

Check:

- valid theme metadata
- semantic HTML
- accessibility
- proper escaping
- no plugin-style business logic
- proper enqueue APIs
- no hard-coded URLs
- responsive layouts
- translation readiness
- template hierarchy
- block compatibility
- no insecure output
- no secrets
- clean fallback behavior

---

# 77. Common WordPress Problems

## White screen / fatal error

Possible causes:

- PHP fatal error
- incompatible plugin
- broken theme
- exhausted memory

Approach:

1. inspect logs
2. enable safe debugging in non-production/test context
3. deactivate suspected plugin
4. switch theme if necessary
5. identify actual exception

## 500 error

Check:

- PHP logs
- server logs
- rewrite rules
- file permissions
- PHP configuration

## Database connection error

Check:

```text
DB_NAME
DB_USER
DB_PASSWORD
DB_HOST
database service
network
permissions
```

## Redirect loop

Check:

- Site URL
- Home URL
- reverse proxy headers
- HTTPS configuration
- CDN
- redirect plugins
- server rules

## Plugin update breaks site

Use:

- staging
- backups
- rollback plan
- changelog review
- compatibility testing

## Slow admin

Investigate:

- plugins
- slow API calls
- database queries
- autoloaded options
- cron
- object cache
- server CPU/memory

---

# 78. Real-World Architecture Scenarios

## Scenario A — Small Business Website

Requirements:

- Home
- About
- Services
- Blog
- Contact form

Architecture:

```text
WordPress
├── block theme
├── SEO plugin
├── forms plugin
├── backup solution
└── caching
```

Avoid building a custom plugin unless there is real custom functionality.

---

## Scenario B — Corporate Portal

Requirements:

- employee login
- policies
- announcements
- private documents
- role-based content

Architecture:

```text
WordPress
├── SSO integration plugin
├── employee role/capabilities
├── private document module
├── audit logging
└── corporate theme
```

Security matters more than visual plugin count.

---

## Scenario C — Property Listing Website

Data model:

```text
Custom Post Type: property

Taxonomies:
- property_type
- city
- locality

Meta:
- price
- bedrooms
- bathrooms
- area
- latitude
- longitude
```

Queries:

```text
City = Mumbai
Bedrooms >= 2
Price <= budget
```

For very large search datasets, evaluate custom indexing/search architecture.

---

## Scenario D — WooCommerce Store

```text
Visitor
  ↓
Product
  ↓
Cart
  ↓
Checkout
  ↓
Payment Gateway
  ↓
Order
  ↓
Warehouse / ERP
```

Integration concerns:

- idempotency
- order status mapping
- retries
- webhook verification
- inventory synchronization
- tax
- refunds

---

## Scenario E — Invoice Workflow Plugin

Domain:

```text
Invoice
  ↓
Validation
  ↓
Manager Approval
  ↓
Finance Approval
  ↓
ERP Posting
```

Possible architecture:

```text
Custom tables / post type depending on scale
Custom capabilities
Admin screens
REST endpoints
Cron/retry jobs
Audit log
ERP API client
Notification service
```

Do not put the whole workflow in `functions.php`.

---

## Scenario F — News Website

Important concerns:

- editorial roles
- drafts/revisions
- scheduled publishing
- media optimization
- CDN
- page caching
- search
- SEO
- high traffic

Architecture:

```text
CDN
  ↓
Page cache
  ↓
WordPress
  ↓
Redis
  ↓
MySQL
```

---

## Scenario G — Headless Marketing Site

```text
Editors
  ↓
WordPress Admin
  ↓
REST API
  ↓
Next.js
  ↓
CDN
```

Plan:

- preview
- authentication
- webhooks
- cache revalidation
- image architecture
- SEO metadata

---

## Scenario H — Multilingual Website

Plan:

- language strategy
- translated content
- translated navigation
- URLs
- hreflang
- multilingual search
- plugin compatibility
- translated strings

Do not treat multilingual support as simply translating text on the frontend.

---

# 79. Hands-On Projects

## Project 1 — Personal Blog

Build:

- homepage
- blog archive
- categories
- tags
- author page
- search
- contact page

Skills:

- dashboard
- blocks
- themes
- navigation
- media

---

## Project 2 — Custom Company Theme

Build:

```text
header
footer
homepage
services
blog
contact
```

Skills:

- template hierarchy
- enqueue API
- custom templates
- responsive design
- theme.json

---

## Project 3 — Book Manager Plugin

Features:

- Book custom post type
- Genre taxonomy
- ISBN meta
- admin columns
- REST API
- shortcode/block

Skills:

- plugin development
- hooks
- CPT
- taxonomy
- metadata

---

## Project 4 — Approval Workflow

Features:

```text
Draft
  ↓
Submitted
  ↓
Manager Approved
  ↓
Finance Approved
  ↓
Completed
```

Add:

- custom capabilities
- nonces
- audit trail
- notifications
- REST endpoint
- scheduled reminders

---

## Project 5 — External API Integration

Pull currency rates every hour.

Implement:

- HTTP API
- transient caching
- cron
- retry policy
- error logging
- admin status screen

---

## Project 6 — WooCommerce Integration

Integrate orders with a mock ERP.

Requirements:

- send order after payment
- store ERP reference
- retry failed requests
- avoid duplicate posting
- admin reprocess button
- log sanitized errors

This teaches idempotency and production integration thinking.

---

## Project 7 — Headless WordPress

Backend:

```text
WordPress
```

Frontend:

```text
Next.js
```

Implement:

- post listing
- post detail
- categories
- preview
- search
- cache revalidation

---

# 80. Interview Questions

## Beginner

### What is WordPress?

An open-source CMS and application framework built primarily around PHP and a MySQL/MariaDB database, extended through themes, plugins, hooks and APIs.

### What is the difference between a post and a page?

Posts are typically chronological and archive-oriented; pages are generally evergreen and may be hierarchical.

### What is a plugin?

A package that adds or changes functionality without modifying WordPress Core.

### What is a theme?

The presentation layer controlling templates, design and frontend rendering.

---

## Intermediate

### What are hooks?

Defined integration points where code can run or modify values.

### Action vs filter?

Action:

```text
do something
```

Filter:

```text
change and return a value
```

### Why use a child theme?

To customize a parent theme without losing modifications when the parent updates.

### What is `WP_Query`?

The primary object/API for querying WordPress content.

### What are nonces?

Request tokens that help protect operations against forged requests; they do not replace authorization.

### What is a custom post type?

A custom content type registered with WordPress, such as `book`, `event` or `property`.

---

## Advanced

### When would you use a custom table instead of post meta?

When the domain is highly transactional, very large, requires specialized indexing/relationships, or does not naturally fit WordPress's content/metadata model.

### How would you secure a custom REST endpoint?

Use:

- `permission_callback`
- capability checks
- authenticated requests where needed
- input validation
- sanitization
- output escaping where rendered
- rate controls if appropriate

### How would you optimize a slow WordPress site?

Measure first, then analyze:

- PHP
- database
- external calls
- plugin overhead
- caching
- frontend payload
- server capacity
- CDN
- object cache

### Why can `meta_query` become slow?

Because generic key/value storage may require expensive joins and filtering, especially at high row counts without a suitable data model/index strategy.

### What is the difference between full-page cache and object cache?

Full-page cache stores rendered HTML.

Object cache stores reusable data/objects/query results used while generating a request.

---

# 81. Best-Practice Checklists

## Before Installing a Plugin

- [ ] Do I actually need it?
- [ ] Is it actively maintained?
- [ ] Is it compatible with my environment?
- [ ] Is the source trustworthy?
- [ ] Does it overlap existing functionality?
- [ ] Will it affect performance?
- [ ] How will I remove/migrate away from it?

## Before Updating Production

- [ ] Backup completed
- [ ] Restore process known
- [ ] Staging tested
- [ ] Changelog reviewed
- [ ] PHP compatibility checked
- [ ] Critical plugins checked
- [ ] Cache strategy known
- [ ] Smoke tests prepared
- [ ] Monitoring available
- [ ] Rollback plan ready

## Custom Form Security

- [ ] Verify nonce
- [ ] Verify capability
- [ ] Unslash request data
- [ ] Sanitize values
- [ ] Validate business rules
- [ ] Use prepared queries
- [ ] Escape output
- [ ] Avoid leaking error details
- [ ] Rate-limit abuse-sensitive endpoints

## Production Security

- [ ] HTTPS
- [ ] Current Core
- [ ] Current plugins/themes
- [ ] No abandoned plugins
- [ ] Strong admin authentication
- [ ] Least privilege
- [ ] Protected backups
- [ ] Secure secrets
- [ ] Logging
- [ ] File permissions
- [ ] Firewall/WAF where appropriate
- [ ] Restore testing
- [ ] Incident response process

---

# 82. 30/60/90-Day Learning Plan

# First 30 Days — User + Site Builder

Week 1:

- install WordPress
- understand dashboard
- create pages/posts
- media
- navigation
- users

Week 2:

- blocks
- patterns
- Site Editor
- themes
- plugins
- settings

Week 3:

- forms
- SEO basics
- backups
- security basics
- caching

Week 4:

- build complete business website
- migrate local → staging
- troubleshoot common issues

**Milestone:** Independently build and operate a standard WordPress website.

---

# Days 31–60 — Developer

Learn:

- PHP fundamentals
- WordPress lifecycle
- hooks
- theme development
- template hierarchy
- Loop
- plugin development
- CPTs
- taxonomies
- meta
- Settings API
- WP_Query

Projects:

- custom theme
- book-management plugin

**Milestone:** Build functionality without relying entirely on page builders/plugins.

---

# Days 61–90 — Advanced / Production

Learn:

- REST API
- AJAX
- cron
- HTTP API
- security
- caching
- database optimization
- WP-CLI
- Git
- deployment
- block development
- WooCommerce extension architecture
- headless WordPress

Projects:

- approval workflow plugin
- ERP integration
- custom block
- production deployment

**Milestone:** Design maintainable production WordPress solutions.

---

# 83. Command and Code Cheat Sheet

## WP-CLI

```bash
wp core version
wp core check-update

wp plugin list
wp plugin activate plugin-name
wp plugin deactivate plugin-name

wp theme list
wp theme activate theme-name

wp user list

wp option get siteurl
wp option get home

wp cache flush

wp rewrite flush

wp cron event list

wp db export backup.sql
```

## Hooks

```php
add_action( 'init', 'callback' );
add_filter( 'the_content', 'callback' );
```

## Capability

```php
current_user_can( 'manage_options' );
```

## Nonce

```php
wp_nonce_field( 'action_name' );
check_admin_referer( 'action_name' );
```

## Sanitize

```php
sanitize_text_field( $value );
sanitize_email( $value );
absint( $value );
esc_url_raw( $value );
```

## Escape

```php
esc_html( $value );
esc_attr( $value );
esc_url( $value );
wp_kses_post( $value );
```

## Post meta

```php
get_post_meta( $id, 'key', true );
update_post_meta( $id, 'key', $value );
delete_post_meta( $id, 'key' );
```

## Options

```php
get_option( 'key' );
update_option( 'key', $value );
delete_option( 'key' );
```

## HTTP

```php
wp_remote_get( $url );
wp_remote_post( $url, $args );
```

## Query

```php
new WP_Query( $args );
```

## REST

```php
register_rest_route();
```

## Schedule

```php
wp_schedule_event();
wp_next_scheduled();
wp_clear_scheduled_hook();
```

---

# 84. Glossary

**Action**  
A hook that executes callback functions at a particular point.

**Block**  
A modular unit used in the WordPress editor/site-building system.

**Capability**  
A specific permission such as `edit_posts`.

**Child Theme**  
A theme that inherits from another parent theme.

**CMS**  
Content Management System.

**CPT**  
Custom Post Type.

**Cron**  
Scheduled task mechanism.

**Filter**  
A hook that modifies and returns a value.

**Gutenberg**  
The project/editor architecture behind modern block-based WordPress editing.

**Hook**  
An extension point used by Core, themes and plugins.

**Metadata**  
Additional key/value information attached to WordPress objects.

**Nonce**  
A request-verification token used as part of request security.

**Object Cache**  
Cache of computed/query objects to reduce repeated work.

**Pattern**  
A predefined arrangement of blocks.

**Permalink**  
Permanent public URL for content.

**Plugin**  
A package that extends WordPress functionality.

**REST API**  
HTTP/JSON interface used by applications to interact with WordPress data.

**Rewrite Rule**  
Mapping from friendly URL patterns to WordPress query variables.

**Shortcode**  
Text token that is replaced by generated content.

**Site Editor**  
Block-based interface for editing site-level templates and styles in compatible themes.

**Taxonomy**  
A system for classifying content.

**Template Hierarchy**  
Rules determining which theme template handles a request.

**Theme**  
Presentation layer of a WordPress site.

**Transient**  
Temporary cached value with an expiration.

**WP-CLI**  
Command-line interface for WordPress.

**WP_Query**  
WordPress API/object for retrieving content.

**$wpdb**  
WordPress database access object.

---

# 85. Official Learning Sources

For version-specific details and API signatures, prioritize official WordPress resources:

1. **WordPress Documentation** — user/admin guidance, installation, maintenance and security.
2. **WordPress Developer Resources** — APIs and developer reference.
3. **Plugin Handbook** — plugin architecture, hooks, security, privacy and development practices.
4. **Theme Handbook** — classic themes, block themes, theme structure and modern theme development.
5. **Block Editor Handbook** — block development and editor APIs.
6. **REST API Handbook** — routes, endpoints, requests, responses and authentication concepts.
7. **Common APIs Handbook** — sanitization, escaping and reusable WordPress APIs.
8. **WP-CLI Documentation** — command-line management.
9. **WordPress Coding Standards** — PHP, HTML, CSS and JavaScript coding conventions.
10. **Learn WordPress** — structured lessons and exercises.

---

# Bonus: The WordPress Mental Model

If you remember only one architecture diagram, remember this:

```text
                 ┌───────────────────────┐
                 │       Browser         │
                 └───────────┬───────────┘
                             │
                             v
                 ┌───────────────────────┐
                 │    CDN / Web Server   │
                 └───────────┬───────────┘
                             │
                             v
                 ┌───────────────────────┐
                 │     WordPress Core    │
                 │                       │
                 │ Routing              │
                 │ Authentication       │
                 │ Query                │
                 │ APIs                 │
                 └───────┬───────┬──────┘
                         │       │
                ┌────────┘       └────────┐
                v                         v
        ┌───────────────┐         ┌───────────────┐
        │    Plugins    │         │    Themes     │
        │ Functionality │         │ Presentation  │
        └───────┬───────┘         └───────┬───────┘
                │                         │
                └────────────┬────────────┘
                             │
                             v
                    ┌─────────────────┐
                    │ WordPress APIs  │
                    │ Hooks           │
                    │ REST            │
                    │ WP_Query        │
                    │ Metadata        │
                    │ HTTP            │
                    │ Cron            │
                    └────────┬────────┘
                             │
                             v
                    ┌─────────────────┐
                    │ MySQL/MariaDB   │
                    └─────────────────┘
```

## When building anything, ask these questions

### 1. Is this presentation or functionality?

Presentation → theme.

Functionality → plugin.

### 2. What is the domain model?

Examples:

```text
Book
Invoice
Property
Employee
Order
Course
```

### 3. How should it be stored?

Choose intentionally:

```text
post type
taxonomy
post meta
user meta
options
custom table
external system
```

### 4. Who can perform each action?

Use capabilities.

### 5. How is the request protected?

Consider:

```text
authentication
authorization
nonce
validation
sanitization
prepared SQL
escaping
```

### 6. How does it scale?

Consider:

```text
query count
indexes
cache
external APIs
cron/background work
media
CDN
database volume
```

### 7. How is it operated?

Consider:

```text
logs
monitoring
backup
deployment
rollback
restore
documentation
```

---

# Bonus: Full Plugin Request Example

Imagine an employee submits an expense request.

## User flow

```text
Employee
   |
   v
Expense Form
   |
   v
Validate Request
   |
   v
Save Expense
   |
   v
Manager Review
   |
   +---- Reject ----> Employee
   |
   v
Finance Approval
   |
   v
ERP Posting
```

## WordPress concepts involved

| Requirement | WordPress Concept |
|---|---|
| Employee login | Users |
| Permission | Capabilities |
| Expense record | CPT or custom table |
| Department | Taxonomy / metadata |
| Form validation | Sanitization + validation |
| Request protection | Nonce |
| Approval events | Actions/hooks |
| Modify output | Filters |
| Email | `wp_mail()` |
| ERP call | HTTP API |
| Retry | Cron/background strategy |
| API | REST API |
| Admin list | Admin menu/table |
| Reporting | WP_Query or custom SQL |
| Audit | Custom audit storage |
| Performance | Cache/indexing |
| Operations | Logs/monitoring |

This is how experienced WordPress developers think: not in terms of "which plugin can I install?" but in terms of **domain model + WordPress APIs + security + maintainability + operations**.

---

# Bonus: Common Beginner Mistakes

## Mistake 1 — Editing WordPress Core

Wrong.

Use extension points.

## Mistake 2 — Putting everything in functions.php

Fine for tiny theme-specific behavior.

Bad for large business applications.

Use plugins and proper architecture.

## Mistake 3 — Giving everyone Administrator access

Use capabilities and least privilege.

## Mistake 4 — Trusting request input

Never trust:

```text
$_GET
$_POST
$_COOKIE
headers
uploaded files
external API responses
```

Validate and sanitize.

## Mistake 5 — Echoing raw database values

Escape for the output context.

## Mistake 6 — Writing raw SQL with concatenated input

Use `$wpdb->prepare()` or higher-level APIs.

## Mistake 7 — Installing dozens of overlapping plugins

More plugins do not automatically mean more capability.

They can mean:

- more conflicts
- larger attack surface
- slower upgrades
- more maintenance

## Mistake 8 — Developing directly on production

Use local/staging environments.

## Mistake 9 — No backup restore test

Test recovery before disaster occurs.

## Mistake 10 — Optimizing before measuring

Profile first.

---

# Bonus: WordPress Developer Decision Tree

```text
Need new functionality?
       |
       v
Is it purely presentation?
  |                |
 Yes               No
  |                |
Theme          Custom Plugin
                   |
                   v
          Need structured content?
             |          |
            Yes         No
             |          |
             v          v
      CPT/Taxonomy   Setting/Feature
             |
             v
      Need extra fields?
             |
             v
          Metadata
             |
             v
      Massive transactional
          data/querying?
             |
             v
      Consider custom table
```

---

# Bonus: Production Readiness Scorecard

Score each item 0–2:

```text
0 = missing
1 = partial
2 = strong
```

| Area | Questions |
|---|---|
| Security | Updates, least privilege, secrets, HTTPS, safe code? |
| Backups | Automated, off-site, retained, restore-tested? |
| Performance | Cache, image optimization, measured bottlenecks? |
| Deployment | Repeatable, tested, rollback available? |
| Monitoring | Errors, uptime, infrastructure, integrations? |
| Development | Git, staging, code review? |
| Database | Backups, indexes, query health? |
| Integrations | Timeout, retry, idempotency, error handling? |
| Content | Editorial roles, revision process, SEO? |
| Accessibility | Keyboard, semantics, labels, contrast? |

A site that "looks good" but scores poorly operationally is not production-ready.

---

# Final Mastery Checklist

You can consider yourself strong in WordPress when you can explain and build all of the following without blindly following tutorials:

- [ ] Install and configure WordPress
- [ ] Explain the request lifecycle
- [ ] Explain Core vs theme vs plugin responsibility
- [ ] Use the dashboard efficiently
- [ ] Model posts, pages, CPTs, taxonomies and metadata
- [ ] Understand users, roles and capabilities
- [ ] Build a classic/custom theme
- [ ] Work with block themes and `theme.json`
- [ ] Explain template hierarchy
- [ ] Write and reset custom loops
- [ ] Build a custom plugin
- [ ] Use actions and filters
- [ ] Create custom hooks
- [ ] Build admin configuration
- [ ] Use the Settings API
- [ ] Write `WP_Query`
- [ ] Use `$wpdb` safely
- [ ] Know when custom tables are appropriate
- [ ] Build REST endpoints
- [ ] Build AJAX functionality
- [ ] Call external APIs
- [ ] Schedule jobs
- [ ] Use caching
- [ ] Build secure forms
- [ ] Apply capability checks
- [ ] Apply nonce checks
- [ ] Sanitize and validate input
- [ ] Escape output
- [ ] Understand WooCommerce extension points
- [ ] Use WP-CLI
- [ ] Debug PHP/WordPress issues
- [ ] Use Git
- [ ] Deploy through staging
- [ ] Back up and restore
- [ ] Optimize performance from measurements
- [ ] Secure production
- [ ] Understand CDN, Redis and scaling
- [ ] Build custom blocks
- [ ] Understand headless architecture
- [ ] Design maintainable WordPress solutions

---

# Final Advice

Do not learn WordPress as a collection of plugins.

Learn it as a **platform**.

Understand:

```text
content model
request lifecycle
hooks
permissions
data APIs
database
themes
plugins
REST
security
performance
deployment
operations
```

Once these foundations are clear, page builders, WooCommerce, LMS platforms, membership plugins and specialized WordPress products become much easier to understand because you can recognize the underlying WordPress concepts they use.

The fastest path to mastery is:

```text
Learn concept
    ↓
Build small example
    ↓
Break it
    ↓
Debug it
    ↓
Build real feature
    ↓
Secure it
    ↓
Measure it
    ↓
Deploy it
    ↓
Explain it to someone else
```

That is the difference between **knowing how to use WordPress** and **understanding WordPress professionally**.
