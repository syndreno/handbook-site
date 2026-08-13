# SEO Master Handbook

> **A single-file, beginner-to-advanced learning guide for Search Engine Optimization**  
> Covers strategy, keyword research, on-page SEO, content, technical SEO, links, local SEO, ecommerce SEO, international SEO, JavaScript SEO, structured data, analytics, audits, migrations, programmatic SEO, AI search, real-world scenarios, checklists, exercises, and troubleshooting.
>
> **Last reviewed:** August 2026  
> **Audience:** Beginners, developers, marketers, content writers, founders, SEO specialists, and technical teams.

---

## How to Use This Handbook

Do not try to memorize SEO. Learn it as a system.

A useful mental model is:

```text
Business Goal
    ↓
Audience + Search Demand
    ↓
Crawlable Website
    ↓
Indexable + Understandable Pages
    ↓
Useful / Original / Trustworthy Content
    ↓
Internal + External Signals
    ↓
Search Result Visibility
    ↓
Clicks / Visits
    ↓
Conversions / Revenue / Leads
    ↓
Measurement → Improvement
```

A page cannot rank reliably just because it contains a keyword. Search visibility normally depends on many layers working together.

### Recommended learning order

1. SEO fundamentals
2. How search engines work
3. Search intent and keyword research
4. Site architecture
5. On-page SEO
6. Content SEO
7. Technical SEO
8. Internal linking
9. Structured data
10. Link earning / authority
11. Measurement
12. Specialized SEO
13. Auditing and troubleshooting
14. Advanced and AI-era SEO

---

# Table of Contents

1. SEO Fundamentals
2. SEO Terminology
3. How Search Engines Work
4. SEO Strategy and Business Goals
5. Search Intent
6. Keyword Research
7. SERP Analysis
8. Competitor Research
9. Topic Clusters and Topical Coverage
10. Website Architecture
11. URL Design
12. On-Page SEO
13. Title Tags and Search Titles
14. Meta Descriptions
15. Headings and Content Structure
16. Content SEO
17. People-First Content and E-E-A-T Concepts
18. Internal Linking
19. External Links
20. Technical SEO Fundamentals
21. robots.txt
22. Robots Meta Tags and X-Robots-Tag
23. XML Sitemaps
24. HTTP Status Codes
25. Redirects
26. Canonicalization and Duplicate Content
27. Crawl Budget and Crawl Efficiency
28. Pagination, Infinite Scroll, and Faceted Navigation
29. Mobile-First SEO
30. JavaScript SEO
31. Core Web Vitals and Page Experience
32. Structured Data / Schema
33. Image SEO
34. Video SEO
35. Off-Page SEO and Backlinks
36. Link Building and Digital PR
37. Local SEO
38. Ecommerce SEO
39. International and Multilingual SEO
40. News and Google Discover SEO
41. Programmatic SEO
42. SaaS and B2B SEO
43. Service / Lead Generation SEO
44. Publisher and Blog SEO
45. Marketplace SEO
46. Enterprise SEO
47. SEO for WordPress
48. SEO for React / Next.js / SPAs
49. Website Migrations and Redesigns
50. Google Search Console
51. Analytics and SEO Measurement
52. SEO KPIs and Reporting
53. SEO Audits
54. Troubleshooting Traffic Drops
55. Algorithm Updates and Manual Actions
56. SEO Spam / Black-Hat Risks
57. AI Search, AEO, GEO, and LLM Visibility
58. SEO Automation
59. SEO Tools
60. SEO SOPs and Templates
61. Real-World Scenarios
62. Interview / Revision Questions
63. 30-60-90 Day SEO Learning Roadmap
64. Practice Projects
65. Master SEO Checklists
66. Glossary
67. Official Reference Sources

---

# 1. SEO Fundamentals

## What is SEO?

**SEO (Search Engine Optimization)** is the practice of improving a website so that search engines can discover, understand, index, and appropriately surface its content for relevant searches.

SEO is not only about ranking #1. A strong SEO program tries to improve:

- discoverability;
- index coverage;
- relevance;
- search appearance;
- qualified organic traffic;
- engagement;
- leads, sales, subscriptions, calls, or other business outcomes.

### Simple example

A Mumbai-based accounting firm wants business owners searching for:

```text
GST consultant in Mumbai
small business tax consultant
GST registration consultant near me
```

to discover its services.

SEO work may include:

- creating useful service pages;
- improving the Google Business Profile;
- making location/service information clear;
- earning genuine mentions and links;
- improving page speed and mobile usability;
- adding appropriate structured data;
- measuring search queries and leads.

## SEO vs SEM vs PPC

| Term | Meaning |
|---|---|
| SEO | Organic search optimization |
| PPC | Pay-per-click advertising |
| SEM | Often used for paid search, though historically it can mean search marketing more broadly |
| Organic result | Unpaid search result |
| Paid result | Advertisement purchased through an ad platform |

SEO does **not** mean search engines are paid to rank your page organically.

## Major areas of SEO

### On-page SEO
Optimization of what is directly on a page:

- page topic;
- title;
- headings;
- body content;
- images;
- internal links;
- structured information;
- intent satisfaction.

### Technical SEO
Making the site accessible and interpretable to search engines:

- crawling;
- indexing;
- redirects;
- canonicals;
- sitemaps;
- JavaScript rendering;
- HTTP status codes;
- performance;
- mobile behavior;
- duplicate URL management.

### Off-page SEO
Signals and awareness outside your own website:

- genuine backlinks;
- digital PR;
- citations;
- brand mentions;
- industry references;
- partnerships.

### Local SEO
Optimization for location-sensitive searches such as:

```text
SEO agency near me
pizza in Bandra
plumber Andheri West
```

### Ecommerce SEO
Optimization for:

- products;
- categories;
- product variants;
- filters;
- reviews;
- merchant feeds;
- inventory and price information.

### International SEO
Helping search engines serve the correct language/country version of a site.

---

# 2. SEO Terminology

## Crawl
A search engine bot requests a URL and reads the resources it can access.

## Render
A search engine may execute JavaScript and construct the page similarly to a browser.

## Index
A search engine processes eligible content and may store it in its searchable index.

## Rank / Serve
For a query, search systems decide which eligible results are useful and how to present them.

## SERP
**Search Engine Results Page**.

## Query
What the user searches.

## Keyword
A phrase SEO practitioners use to represent a target search topic/query group.

## Search intent
The underlying goal behind a query.

## Backlink
A link from another website to yours.

## Internal link
A link from one page of your site to another page on the same site.

## Anchor text
The visible clickable text in a link.

## Canonical URL
The representative/preferred URL selected from a group of duplicate or very similar URLs.

## Indexability
Whether a page is eligible to be indexed.

## Crawlability
Whether a crawler is allowed and able to fetch a URL.

## Organic traffic
Traffic from unpaid search results.

## Impression
An appearance of your result in a search surface, subject to the reporting rules of that platform.

## CTR
Click-through rate.

```text
CTR = Clicks / Impressions × 100
```

## Conversion
A valuable user action such as a purchase, form submission, signup, phone call, download, or booking.

---

# 3. How Search Engines Work

For SEO purposes, think about three major stages:

```text
Crawling → Indexing → Serving / Ranking
```

## 3.1 Discovery

Search engines discover URLs through sources such as:

- links from already-known pages;
- XML sitemaps;
- feeds;
- redirects;
- submitted URLs in webmaster tools;
- other discovered references.

### Important lesson

A page with no links pointing to it may be difficult to discover. Such pages are often called **orphan pages**.

## 3.2 Crawling

A crawler requests the URL.

Potential obstacles:

- robots.txt block;
- authentication;
- firewall/CDN rule;
- DNS failure;
- 5xx server errors;
- redirect loops;
- very slow responses;
- infinite URL spaces.

## 3.3 Rendering

Modern websites may depend on JavaScript.

A crawler may first receive:

```html
<div id="app"></div>
<script src="app.js"></script>
```

and only after JavaScript execution see the actual page content.

Rendering can therefore become an SEO concern for SPAs and heavily client-rendered applications.

## 3.4 Indexing

During indexing, systems try to understand things such as:

- page content;
- language;
- images/video;
- title information;
- links;
- duplicates;
- canonical candidates;
- structured data;
- overall page meaning.

**Crawled does not automatically mean indexed.**

## 3.5 Ranking and serving

A search engine may consider many systems and signals related to:

- query meaning;
- content relevance;
- quality;
- freshness when appropriate;
- location when appropriate;
- usability;
- links and references;
- spam detection;
- other context.

There is no reliable universal formula like:

```text
keyword density + 20 backlinks = position #1
```

SEO is probabilistic and competitive.

---

# 4. SEO Strategy and Business Goals

Never begin an SEO project with:

> “We need more traffic.”

Begin with:

> “Which audience, performing which search, should discover which page, and what business action should result?”

## 4.1 SEO objective examples

### Ecommerce

```text
Increase non-brand organic revenue from category and product pages.
```

### SaaS

```text
Generate qualified demo requests from problem-aware and solution-aware searchers.
```

### Local business

```text
Increase calls and direction requests from users within the service area.
```

### Publisher

```text
Grow recurring organic readership for subject areas where the publication has real expertise.
```

## 4.2 SEO funnel

### Awareness
Examples:

```text
what is crm
how to reduce server cost
why is my website slow
```

### Consideration

```text
best crm for small business
aws vs azure cost
wordpress vs webflow
```

### Decision

```text
hubspot pricing
buy running shoes online
seo consultant mumbai
```

A mature SEO strategy covers relevant parts of the funnel rather than only high-volume informational keywords.

## 4.3 Map keywords to pages

Create a mapping like:

| Topic / intent | Target page |
|---|---|
| project management software | `/project-management-software/` |
| project management software pricing | `/pricing/` |
| project management templates | `/templates/` |
| project management guide | `/guides/project-management/` |

Avoid making ten weak pages that all target essentially the same intent.

---

# 5. Search Intent

Search intent is one of the most important SEO concepts.

## 5.1 Informational intent

User wants to learn.

```text
how does docker work
what is canonical tag
symptoms of vitamin deficiency
```

Typical page types:

- guide;
- tutorial;
- explainer;
- article;
- documentation.

## 5.2 Navigational intent

User wants a specific site/page.

```text
github login
google search console
amazon india
```

## 5.3 Commercial investigation

User is comparing options.

```text
best laptops for developers
semrush vs ahrefs
best invoicing software india
```

## 5.4 Transactional intent

User is ready to act.

```text
buy iphone 17
book hotel goa
hire seo consultant
```

## 5.5 Local intent

```text
dentist near me
cafes in colaba
car service mumbai
```

## Scenario: Wrong intent

Suppose the target keyword is:

```text
best mechanical keyboard
```

You create a product detail page for one keyboard.

But the SERP is dominated by comparison guides containing 10–20 keyboards.

The problem may not be title-tag optimization. It may be a **page-type and intent mismatch**.

---

# 6. Keyword Research

Keyword research is the process of understanding how an audience expresses needs in search.

## 6.1 Start with the business, not a tool

For a project-management SaaS, seed topics might be:

```text
project management
project planning
task tracking
team collaboration
gantt chart
resource planning
project templates
```

Then expand them.

## 6.2 Keyword dimensions

Evaluate:

- intent;
- topic relevance;
- business value;
- demand;
- SERP competition;
- page type required;
- seasonality;
- geographic relevance;
- current authority/expertise;
- conversion potential.

## 6.3 Head terms vs long-tail

### Head term

```text
crm
```

Broad, ambiguous, often competitive.

### Long-tail

```text
crm for small construction companies
```

Lower individual volume but often clearer intent.

## 6.4 Keyword modifiers

Common modifiers include:

```text
best
vs
review
price
cost
near me
how to
examples
template
for beginners
for small business
2026
alternative
```

Do not automatically create a page for every modifier. First determine whether the SERP expects a meaningfully different page.

## 6.5 Keyword clustering

Suppose these queries appear:

```text
seo audit checklist
website seo audit checklist
technical seo audit checklist
how to audit a website for seo
```

They may be served well by one comprehensive SEO audit page rather than four nearly duplicate pages.

## 6.6 Search volume is not traffic

A search-volume estimate is not a guarantee of visits.

Traffic depends on:

- ranking position;
- SERP layout;
- ads;
- map packs;
- videos;
- featured/AI answers;
- brand preference;
- query refinement;
- click behavior.

## 6.7 Zero-volume keywords

Do not automatically reject a query just because a keyword tool reports zero searches.

A highly specific B2B term may produce few searches but a very valuable lead.

## 6.8 Keyword research workflow

```text
1. Understand product/service
2. List customer problems
3. List solution categories
4. Collect seed terms
5. Expand with tools/search suggestions/customer language
6. Group by intent/topic
7. Inspect SERPs
8. Map clusters to pages
9. Prioritize by opportunity/business value
10. Measure after publishing
```

---

# 7. SERP Analysis

Before creating a page, inspect the current search results.

Look for:

- dominant page type;
- dominant format;
- freshness;
- local results;
- shopping results;
- videos;
- images;
- forums;
- comparison pages;
- official sources;
- SERP features;
- depth expected;
- brands repeatedly ranking.

## SERP pattern example

Query:

```text
how to tie a tie
```

Likely useful formats:

- step-by-step text;
- images;
- video;
- diagrams.

A 4,000-word theory essay may not best serve the intent.

## Important principle

SERP analysis helps you understand the current result landscape. It does **not** mean copying competitors.

Your goal is to satisfy the user better with real value.

---

# 8. Competitor Research

There are two types of competitors.

## Business competitors
Companies competing for customers.

## Search competitors
Sites competing for the same queries.

A small accounting software company may compete in search against:

- large SaaS brands;
- blogs;
- government sites;
- accounting publications;
- forums;
- YouTube.

## What to analyze

- ranking pages;
- content types;
- topical coverage;
- site structure;
- internal links;
- referring domains;
- brand strength;
- search snippets;
- structured data;
- content freshness;
- unique assets;
- tools/calculators/templates.

Do not clone a competitor's page. Identify what the searcher still needs.

---

# 9. Topic Clusters and Topical Coverage

A topic cluster groups related resources around a subject.

Example:

```text
                     /seo/
                       |
      -----------------------------------
      |               |                 |
/keyword-research/ /technical-seo/ /link-building/
      |               |                 |
 long-tail guide    robots guide      digital PR guide
```

## Pillar page
Broad central resource.

## Cluster page
More focused resource on a subtopic.

## Why clusters help

They can improve:

- user navigation;
- content organization;
- internal linking;
- discovery;
- topical clarity.

Do not create thin cluster pages only to manufacture internal links.

---

# 10. Website Architecture

Good information architecture makes important pages easy to reach.

## Flat-ish architecture

A useful pattern:

```text
Home
├── Products
│   ├── Product A
│   └── Product B
├── Solutions
│   ├── Small Business
│   └── Enterprise
├── Resources
│   ├── Guides
│   ├── Templates
│   └── Case Studies
└── About
```

Avoid unnecessarily deep paths such as:

```text
Home → Category → Subcategory → Archive → Year → Month → Item
```

if they do not help users.

## Architecture questions

- Can users find important pages quickly?
- Are important pages linked from relevant hubs?
- Are there orphan pages?
- Are breadcrumbs useful?
- Does navigation reflect user mental models?
- Can crawlers reach the pages through normal HTML links?

---

# 11. URL Design

Good URLs are generally:

- readable;
- stable;
- descriptive;
- logically organized;
- not overloaded with unnecessary parameters.

### Good

```text
https://example.com/seo/technical-seo/
```

### Less useful

```text
https://example.com/index.php?id=8427&cat=19&session=abc123
```

## URL rules of thumb

- use HTTPS;
- use lowercase consistently;
- prefer words users can understand;
- avoid changing URLs without a reason;
- avoid unnecessary session IDs;
- manage tracking parameters;
- maintain one consistent trailing-slash policy where practical.

### Do keywords in URLs matter?

Descriptive URLs can help users and systems understand context, but URL wording is not a substitute for useful content.

---

# 12. On-Page SEO

On-page SEO aligns a page with user intent and makes its topic clear.

A practical page anatomy:

```text
Title
↓
Main heading
↓
Short answer / value proposition
↓
Main content
↓
Supporting sections
↓
Evidence / examples
↓
Internal links
↓
Relevant CTA
```

## On-page checklist

- one clear primary purpose;
- intent-matching page type;
- useful title;
- descriptive headings;
- original main content;
- helpful images/examples where needed;
- natural terminology;
- meaningful internal links;
- appropriate external references;
- accessible design;
- no misleading claims;
- appropriate structured data if eligible.

## Keyword stuffing example

Bad:

```text
Best Mumbai SEO agency offers Mumbai SEO services for anyone needing
Mumbai SEO agency services in Mumbai.
```

Better:

```text
We help Mumbai businesses improve organic visibility through technical
SEO, content strategy, local search optimization, and measurable reporting.
```

Write for people first.

---

# 13. Title Tags and Search Titles

An HTML title is written as:

```html
<title>Technical SEO Guide for Beginners | Example</title>
```

Search engines may use the title element as one source when generating a search-result title, but the displayed title can differ.

## Strong title characteristics

- accurately describes the page;
- distinct from other pages;
- concise enough to scan;
- avoids boilerplate overload;
- includes important context naturally;
- does not mislead.

### Product example

```text
Men's Trail Running Shoes – Waterproof Models | Brand
```

### Local service example

```text
Emergency Plumbing Services in Pune | Company
```

### Article example

```text
How Canonical Tags Work: Practical SEO Guide
```

Avoid obsessing over one exact character limit. Search-result display is not a fixed-width text database.

---

# 14. Meta Descriptions

Example:

```html
<meta name="description" content="Learn how canonical URLs work, when to use rel=canonical, common mistakes, and practical ecommerce examples.">
```

A meta description can help search engines generate the result snippet, but they may choose other page text when it better matches the query.

## Good description

- accurately summarizes the page;
- communicates value;
- is readable;
- avoids repeated keyword stuffing;
- is unique when useful.

## Do meta descriptions directly guarantee ranking improvement?

No. Treat them primarily as search presentation and user communication, not a magic ranking field.

---

# 15. Headings and Content Structure

Example:

```html
<h1>Technical SEO Guide</h1>
<h2>Crawling</h2>
<h3>robots.txt</h3>
<h3>Crawl budget</h3>
<h2>Indexing</h2>
<h3>Canonicalization</h3>
```

Use headings to create a logical document structure.

Do not turn headings into a keyword checklist.

Bad:

```text
H1 Best CRM
H2 Best CRM Software
H2 Best CRM Software Tool
H2 Best CRM Platform Online
```

Better:

```text
H1 Best CRM Platforms for Small Teams
H2 How we evaluated the tools
H2 Best for sales automation
H2 Best for service businesses
H2 Comparison table
H2 How to choose
```

---

# 16. Content SEO

Content SEO is not "write 2,000 words and add a keyword five times."

It means producing the most useful resource your audience and business can reasonably provide for a relevant search need.

## 16.1 Useful content characteristics

Useful content often provides some combination of:

- direct answers;
- firsthand experience;
- original data;
- clear examples;
- expert analysis;
- demonstrations;
- screenshots;
- comparison criteria;
- tools/calculators;
- templates;
- case studies;
- decision support;
- current information.

## 16.2 Content brief example

```text
Primary audience: junior web developers
Intent: learn canonical tags
Goal: understand when canonical is correct/incorrect
Required sections:
- definition
- canonical vs redirect
- canonical vs noindex
- self-referencing canonicals
- ecommerce parameters
- cross-domain canonical
- debugging
- code examples
CTA: technical SEO checklist
```

## 16.3 Content decay

A page can lose performance because:

- information becomes outdated;
- competitors publish better resources;
- intent changes;
- products/features change;
- links break;
- screenshots become obsolete;
- the page no longer reflects current expertise.

Refresh strategically; do not change dates merely to simulate freshness.

## 16.4 Thin content

"Thin" is not simply a word-count threshold.

A 150-word exchange-rate page with live, accurate functionality may be valuable. A 4,000-word generic AI-generated article may provide almost nothing new.

Value matters more than arbitrary length.

---

# 17. People-First Content and E-E-A-T Concepts

SEO practitioners frequently use the shorthand **E-E-A-T**:

- Experience
- Expertise
- Authoritativeness
- Trust

This should not be treated like a visible score that you can increase by adding an author box.

Use it as a quality-thinking framework.

## Trust-building elements

Depending on the site, useful signals can include:

- clear authorship;
- accurate sources;
- editorial policy;
- contact information;
- business identity;
- refund/shipping policies;
- secure checkout;
- corrections policy;
- firsthand evidence;
- appropriate expert review;
- transparent affiliate relationships.

## YMYL

"Your Money or Your Life" topics can affect major areas of people's lives, such as health, finance, safety, or civic information.

For high-stakes subjects, accuracy, expertise, sourcing, and trust deserve especially strong attention.

### Scenario: medical article

Weak approach:

```text
AI generates treatment advice from random blogs; no author, no medical review.
```

Stronger approach:

```text
Qualified medical reviewer + authoritative sources + clear update date +
careful language + emergency guidance where appropriate.
```

---

# 18. Internal Linking

Internal links help users and crawlers discover and understand pages.

Example:

```html
Read our <a href="/technical-seo/canonical-tags/">canonical tag guide</a>.
```

## Why internal links matter

They help with:

- discovery;
- navigation;
- contextual relationships;
- distribution of internal link equity;
- prioritization of important pages.

## Strong internal linking practices

- link from relevant context;
- use descriptive anchor text;
- make important pages reachable;
- repair broken internal links;
- reduce orphan pages;
- add breadcrumbs when useful;
- avoid excessive template links with no user value.

## Scenario: old article has authority

An old article earns many external links. You publish a new commercial guide relevant to the same topic.

Useful action:

Add a genuinely helpful contextual link from the old article to the new guide.

---

# 19. External Links

Linking to useful external references is normal.

You do not need to fear every outbound link.

Use external links when they:

- support a claim;
- give users source material;
- point to official documentation;
- provide additional value.

## Link relationship attributes

### Sponsored / paid link

```html
<a href="https://partner.example" rel="sponsored">Partner</a>
```

### User-generated content

```html
<a href="https://example.com" rel="ugc">User link</a>
```

### Nofollow when appropriate

```html
<a href="https://example.com" rel="nofollow">Reference</a>
```

Do not automatically add `nofollow` to every normal editorial external link.

---

# 20. Technical SEO Fundamentals

Technical SEO answers questions like:

```text
Can the crawler discover the URL?
Can it fetch it?
Can it render the meaningful content?
Is indexing allowed?
Which URL should be canonical?
Is the response status correct?
Can search engines understand important relationships?
Does the mobile version contain the important content?
```

A useful debugging chain:

```text
URL discovery
   ↓
robots access
   ↓
HTTP response
   ↓
rendered HTML
   ↓
indexing directives
   ↓
canonical signals
   ↓
content quality / duplication
   ↓
index status
   ↓
search performance
```

---

# 21. robots.txt

`robots.txt` controls crawler access to URL paths for compliant bots.

Typical location:

```text
https://example.com/robots.txt
```

Example:

```txt
User-agent: *
Disallow: /admin/
Disallow: /internal-search/

Sitemap: https://example.com/sitemap.xml
```

## Important distinction

**robots.txt is primarily a crawling control, not a reliable indexing-removal mechanism.**

If you need an accessible HTML page to be removed from search indexing, use an appropriate `noindex` directive rather than assuming a robots block will remove it.

## Dangerous mistake

```txt
User-agent: *
Disallow: /
```

This can block crawlers from the entire site.

## Staging environment example

Robots blocking is not sufficient security.

For a staging environment, prefer real access control such as authentication or network restrictions.

---

# 22. Robots Meta Tags and X-Robots-Tag

HTML example:

```html
<meta name="robots" content="noindex, follow">
```

Common directives include:

- `noindex`
- `nofollow`
- `nosnippet`
- `max-snippet`
- `max-image-preview`
- `max-video-preview`

## Important rule

For a crawler to see a `noindex` directive, it generally needs to be able to crawl the URL.

This combination is often problematic:

```txt
robots.txt: Disallow: /private-page/
```

plus:

```html
<meta name="robots" content="noindex">
```

The bot may not fetch the page and therefore may not see the `noindex`.

## X-Robots-Tag

Useful for non-HTML files.

Example HTTP response:

```http
HTTP/1.1 200 OK
Content-Type: application/pdf
X-Robots-Tag: noindex
```

---

# 23. XML Sitemaps

A sitemap helps search engines discover important URLs.

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/seo-guide/</loc>
    <lastmod>2026-08-01</lastmod>
  </url>
</urlset>
```

## Include URLs that are normally intended to be canonical and indexable

Avoid filling a sitemap with:

- redirected URLs;
- 404 URLs;
- blocked URLs;
- `noindex` URLs;
- duplicates that canonicalize elsewhere.

## Sitemap index

Large sites may use:

```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-products.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-articles.xml</loc>
  </sitemap>
</sitemapindex>
```

A sitemap can help discovery but does not guarantee crawling or indexing.

---

# 24. HTTP Status Codes

## 200 OK
The resource is successfully returned.

## 301 / 308
Permanent redirects.

## 302 / 307
Temporary redirects.

## 404
Resource not found.

## 410
Resource intentionally gone.

## 429
Too many requests.

## 5xx
Server-side failure.

## Soft 404
A page returns `200 OK` but effectively says "not found" or contains no meaningful expected content.

### Bad example

Deleted product:

```http
HTTP/1.1 200 OK
```

Page body:

```text
Sorry, product does not exist.
```

Depending on the situation, an actual 404/410 or relevant replacement strategy is more appropriate.

---

# 25. Redirects

Redirects are used when a URL changes.

Apache example:

```apache
Redirect 301 /old-page https://example.com/new-page
```

Nginx example:

```nginx
location = /old-page {
    return 301 https://example.com/new-page;
}
```

## Redirect best practices

- redirect old URL to the closest relevant new URL;
- avoid massive unrelated redirects to the homepage;
- update internal links to final destinations;
- avoid long redirect chains;
- keep redirects after migrations long enough for users/search engines and old links to transition.

## Redirect chain

Bad:

```text
A → B → C → D
```

Better:

```text
A → D
B → D
C → D
```

when appropriate.

## Canonical vs redirect

Use a redirect when users and crawlers should go to a different URL.

Use canonicalization when multiple accessible versions need a representative URL.

---

# 26. Canonicalization and Duplicate Content

HTML canonical:

```html
<link rel="canonical" href="https://example.com/products/red-shoes/">
```

## Common duplicate causes

```text
/product?id=12
/product?id=12&utm_source=email
/product?id=12&sort=price
http://example.com/page
https://example.com/page
```

## Self-referencing canonical

A canonical page can reference itself:

```html
<link rel="canonical" href="https://example.com/seo-guide/">
```

## Canonical is not the same as noindex

### Canonical
"These pages are duplicates/similar; this is my preferred representative."

### Noindex
"Do not include this page in the index."

## Canonical signals should align

For a preferred URL, ideally align:

- internal links;
- redirects where applicable;
- sitemap inclusion;
- canonical element;
- hreflang references;
- protocol/host conventions.

## Ecommerce scenario

```text
/shoes/red-runner?size=8
/shoes/red-runner?size=9
```

If each variant is genuinely useful and needs independent discovery, model URLs intentionally. If the variants are essentially duplicates for search purposes, canonical strategy may differ.

Do not blindly canonicalize all variants without understanding merchandising/search requirements.

---

# 27. Crawl Budget and Crawl Efficiency

Crawl budget is mainly a large-site concern, but crawl efficiency is useful everywhere.

Potential crawl traps:

- endless calendars;
- session IDs;
- faceted combinations;
- infinite search result pages;
- malformed relative links;
- duplicate tracking parameters;
- generated thin pages;
- redirect chains.

## Large-site scenario

A retailer has filters:

```text
?color=red
?size=8
?brand=x
?sort=low
?color=red&size=8
?color=red&size=8&brand=x
...
```

Millions of combinations may exist while only a small subset is useful for search.

A crawl strategy may involve:

- identifying index-worthy facets;
- limiting useless URL generation;
- consistent canonicals;
- internal-link controls;
- robots controls for true crawl traps where suitable;
- parameter governance;
- log analysis.

---

# 28. Pagination, Infinite Scroll, and Faceted Navigation

## Pagination

Use real crawlable URLs:

```text
/category?page=1
/category?page=2
/category?page=3
```

and crawlable links such as:

```html
<a href="/category?page=2">Next</a>
```

Do not rely only on a JavaScript button that exposes no crawlable URL path.

## Infinite scroll

A good implementation can offer infinite-scroll UX while still exposing paginated URLs that crawlers can discover.

## Faceted navigation

A faceted ecommerce site may create huge URL spaces.

Example:

```text
/laptops?brand=dell&ram=16&cpu=i7&screen=15&sort=price
```

Decide which combinations:

1. deserve indexable landing pages;
2. should remain usable for users but not become organic landing pages;
3. should not be crawlable because they create wasteful infinite spaces.

This is a product, UX, engineering, and SEO decision—not just a robots.txt decision.

---

# 29. Mobile-First SEO

Modern Google indexing uses the mobile version of content for indexing/ranking.

## Check mobile parity

Ensure important mobile pages retain:

- primary content;
- titles;
- meta directives;
- structured data;
- images and alt attributes;
- internal links;
- canonical/hreflang relationships.

## Common mistake

Desktop:

```text
2,000-word product guide + full specifications
```

Mobile:

```text
100-word summary only
```

If important content disappears on mobile, search systems may have less information available.

Responsive design usually simplifies maintenance, though other architectures can work when implemented correctly.

---

# 30. JavaScript SEO

JavaScript SEO is essential for React, Angular, Vue, Next.js, Nuxt, and other modern applications.

## 30.1 Rendering models

### CSR – Client-Side Rendering
Browser receives a shell and JavaScript creates the content.

### SSR – Server-Side Rendering
Server sends meaningful rendered HTML for each request.

### SSG – Static Site Generation
HTML is generated at build time.

### ISR / hybrid rendering
Pages can combine static generation and periodic/on-demand regeneration depending on framework.

## 30.2 SEO risk with CSR

Initial HTML:

```html
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
```

If rendering fails, important content and links may not be available.

## 30.3 Better resilience

Where appropriate, send meaningful HTML:

```html
<body>
  <main>
    <h1>Running Shoes</h1>
    <a href="/shoes/trail/">Trail Shoes</a>
  </main>
</body>
```

Hydrate/enhance it with JavaScript afterward.

## 30.4 JavaScript SEO checklist

- inspect raw HTML;
- inspect rendered HTML;
- confirm title/meta/canonical are correct;
- confirm important content renders;
- confirm links use `<a href>`;
- avoid requiring click/scroll to load primary crawlable content;
- verify status codes at server/network level;
- test blocked JS/CSS resources;
- use URL Inspection / rendered tests;
- test production behavior, not only localhost.

## Dynamic rendering

Historically, some sites served different rendered HTML to crawlers as a workaround. It adds complexity and is not the preferred long-term solution when normal server/static rendering is feasible.

---

# 31. Core Web Vitals and Page Experience

Core Web Vitals measure real user-experience dimensions.

The three primary metrics are:

- **LCP – Largest Contentful Paint**: loading performance;
- **INP – Interaction to Next Paint**: responsiveness/interactivity;
- **CLS – Cumulative Layout Shift**: visual stability.

## Common practical causes

### Poor LCP

- oversized hero image;
- slow server response;
- render-blocking CSS;
- late-loading fonts;
- client-only rendering of primary content.

### Poor INP

- long main-thread tasks;
- excessive JavaScript;
- expensive event handlers;
- third-party scripts;
- large UI rerenders.

### Poor CLS

- images without dimensions;
- ads injected above content;
- late banners;
- font swaps causing movement.

## Performance workflow

```text
Measure field data
   ↓
Identify affected templates
   ↓
Profile bottleneck
   ↓
Fix underlying cause
   ↓
Retest lab + field
   ↓
Monitor regressions
```

Do not treat a perfect lab score as a guaranteed ranking boost. Performance is one part of a strong search/user experience.

---

# 32. Structured Data / Schema

Structured data provides machine-readable information about page entities and content.

Google commonly recommends JSON-LD for supported search features.

## Organization example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Ltd",
  "url": "https://example.com/",
  "logo": "https://example.com/logo.png"
}
</script>
```

## Product example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trail Runner X",
  "image": ["https://example.com/images/trail-runner-x.jpg"],
  "description": "Water-resistant trail running shoe.",
  "sku": "TRX-100",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "6999",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/trail-runner-x/"
  }
}
</script>
```

## Breadcrumb example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Shoes",
      "item": "https://example.com/shoes/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Trail Shoes",
      "item": "https://example.com/shoes/trail/"
    }
  ]
}
</script>
```

## Key rules

- markup must match visible page content;
- do not fabricate ratings or reviews;
- follow feature-specific eligibility rules;
- validate syntax;
- structured data can enable richer presentation but does not guarantee a rich result.

## Schema.org vs search feature eligibility

Schema.org defines a broad vocabulary. Search engines support only subsets for specific rich-result experiences.

Therefore:

```text
Valid Schema.org markup ≠ guaranteed Google rich result
```

---

# 33. Image SEO

Images can contribute to web search, image search, Discover, ecommerce, and user experience.

## Best practices

- use relevant, high-quality images;
- compress appropriately;
- use modern formats where suitable;
- give images useful filenames where practical;
- provide descriptive `alt` text for meaningful images;
- include width/height to reduce layout shift;
- place images near relevant text;
- provide accessible image URLs;
- use image sitemaps when they add discovery value;
- avoid important text embedded only inside images.

## Alt text example

Poor:

```html
<img src="shoe.jpg" alt="image">
```

Better:

```html
<img src="trail-runner-red.jpg"
     alt="Red waterproof trail running shoe with black sole">
```

Decorative image:

```html
<img src="divider.svg" alt="">
```

Alt text is first an accessibility feature. Do not turn it into a keyword dump.

---

# 34. Video SEO

For important videos:

- create a useful watch page;
- make video prominent;
- provide meaningful title/description;
- provide a stable thumbnail;
- allow crawlers to access required video resources;
- consider `VideoObject` markup when appropriate;
- provide transcripts/captions for users;
- make each important video page distinct;
- use timestamps/key moments where supported.

## Scenario

A cooking site embeds the same video on 30 pages but wants one page to rank as the primary watch page.

Give the main watch page:

- dedicated video context;
- unique descriptive content;
- strong internal links;
- consistent structured information.

---

# 35. Off-Page SEO and Backlinks

A backlink is a link from another website.

Links can help search engines discover pages and can contribute signals about relevance and reputation.

## Quality over raw count

One genuine editorial link from a respected relevant publication can be more meaningful than thousands of automated directory links.

Evaluate a link by questions such as:

- Was it editorially earned?
- Is the linking page relevant?
- Is the site real and useful?
- Would the link make sense even without SEO?
- Is the anchor natural?
- Is the site part of a manipulation network?

## Natural acquisition sources

- original research;
- statistics;
- tools;
- open datasets;
- expert commentary;
- useful guides;
- industry resources;
- newsworthy work;
- partnerships;
- citations of products/brands.

---

# 36. Link Building and Digital PR

Sustainable link acquisition begins with **link-worthy reasons**.

## 36.1 Digital PR example

A cybersecurity company publishes:

```text
Annual analysis of 20,000 anonymized phishing reports
```

Potential outputs:

- data report;
- interactive charts;
- downloadable methodology;
- press briefing;
- expert commentary.

Journalists and industry sites may reference the report because it contains something worth citing.

## 36.2 Broken-link outreach

Workflow:

```text
Find a relevant dead resource
→ create or already have a legitimate replacement
→ identify pages linking to the dead resource
→ politely inform editors
```

Do not mass-spam thousands of irrelevant sites.

## 36.3 Guest content

Guest contributions can be legitimate when they serve the publication's audience. Large-scale low-quality guest posting primarily for manipulative links is risky.

## 36.4 Paid links

Paid placements should be properly qualified, such as with `rel="sponsored"` where applicable.

---

# 37. Local SEO

Local SEO targets searches affected by location.

Important components include:

- Google Business Profile;
- accurate business information;
- category selection;
- services/products where applicable;
- reviews;
- local landing pages;
- local links/citations;
- website quality;
- proximity/relevance factors;
- consistent brand/entity information.

Google describes local results primarily in terms of **relevance, distance, and prominence/popularity**.

## Google Business Profile basics

Maintain accurate:

- business name;
- address or service area;
- phone;
- hours;
- website;
- categories;
- photos;
- services;
- attributes where relevant.

Do not stuff keywords into the business name if they are not part of the real-world business name.

## Local landing page example

```text
/plumbing/mumbai/
/plumbing/thane/
```

These pages should contain meaningful local/service information, not just swapped city names.

Thin doorway pattern:

```text
/plumber-city-1/
/plumber-city-2/
/plumber-city-3/
```

where every page is the same except the city name.

## Reviews

Encourage genuine customer feedback. Do not buy fake reviews.

Respond professionally to both positive and negative reviews.

---

# 38. Ecommerce SEO

Ecommerce SEO commonly deals with scale and duplication.

## Major page types

```text
Home
Category
Subcategory
Product
Variant
Brand
Guide
Comparison
Search/filter pages
```

## 38.1 Category pages

A category page should help users browse and choose.

Useful elements:

- clear H1;
- meaningful intro when useful;
- product listings;
- filters;
- crawlable product links;
- supporting copy/FAQ only if genuinely helpful;
- breadcrumbs.

## 38.2 Product pages

Avoid manufacturer-copy duplication when possible.

Add differentiated value such as:

- original descriptions;
- measurements;
- use cases;
- photos/video;
- compatibility;
- comparison information;
- shipping/returns;
- availability;
- verified reviews.

## 38.3 Out-of-stock products

Strategy depends on whether the product is temporary, discontinued, or replaced.

### Temporarily unavailable
Keep page useful and communicate availability.

### Permanently discontinued with close replacement
Consider keeping historical page useful and linking to replacement, or redirect where the old page has no independent value and the replacement is genuinely equivalent.

### No replacement
A real 404/410 may be appropriate after the page no longer provides value.

Do not automatically redirect every discontinued product to the homepage.

## 38.4 Product variants

Color/size/model variants may need separate identifiable URLs depending on how users search and how the store operates.

Plan:

- URL behavior;
- canonical behavior;
- structured data;
- internal links;
- inventory;
- Merchant Center feed consistency.

## 38.5 Faceted navigation

This is one of the hardest ecommerce SEO problems.

Example:

```text
/womens-shoes?color=black&size=7&brand=nike&sort=price
```

Decide intentionally which filters become search landing pages.

## 38.6 Ecommerce structured data

Commonly useful types include:

- Product;
- Offer;
- AggregateRating when eligible/accurate;
- Review when eligible;
- BreadcrumbList;
- Organization.

Keep structured data consistent with visible price, currency, availability, and product information.

---

# 39. International and Multilingual SEO

## Multilingual
Same or similar market, multiple languages.

```text
/en/
/fr/
/hi/
```

## Multi-regional
Different countries/regions.

```text
/en-us/
/en-gb/
/en-in/
```

## hreflang

Example:

```html
<link rel="alternate" hreflang="en-us"
      href="https://example.com/en-us/product/">
<link rel="alternate" hreflang="en-gb"
      href="https://example.com/en-gb/product/">
<link rel="alternate" hreflang="x-default"
      href="https://example.com/product/">
```

## Important hreflang principles

- localized pages should reference appropriate alternates;
- reciprocal relationships matter;
- use valid language/region codes;
- canonicals and hreflang should not contradict one another;
- avoid automatic redirection solely based on guessed language/location when it harms access.

## Translation quality

Machine translation can be useful in workflows, but publishing large volumes of low-quality translation without review can create poor user experiences.

Localize:

- currency;
- spelling;
- examples;
- regulations;
- shipping;
- contact details;
- cultural expectations.

---

# 40. News and Google Discover SEO

Discover is not identical to traditional keyword search.

Content may appear based on user interests.

Strong foundations include:

- compelling, non-clickbait titles;
- high-quality large images;
- timely/original content where appropriate;
- trustworthy presentation;
- useful topical expertise;
- mobile-friendly pages.

Do not write sensational headlines that promise something the content does not deliver.

News publishers should also pay close attention to:

- clear publication dates;
- author information;
- corrections;
- transparent ownership/editorial information;
- article structured data where appropriate;
- news sitemap when useful.

---

# 41. Programmatic SEO

Programmatic SEO creates many useful landing pages from structured data/templates.

Good example:

```text
/currency/usd-to-inr/
/currency/eur-to-inr/
/currency/gbp-to-inr/
```

when each page provides:

- accurate current data;
- conversion functionality;
- historical context;
- useful explanation;
- unique relevance.

Bad example:

Generate 100,000 pages by replacing city names in generic content that offers no local value.

## Programmatic SEO architecture

```text
Database/API
   ↓
Template logic
   ↓
Unique data and context
   ↓
Canonical URL rules
   ↓
Internal linking
   ↓
Sitemaps
   ↓
Quality controls
```

## Quality gates

Before allowing a generated page to be indexed, check:

- enough unique data exists;
- intent exists;
- page has a meaningful answer;
- no duplicate collision;
- data is fresh;
- template renders correctly;
- page is linked from useful hubs.

---

# 42. SaaS and B2B SEO

SaaS SEO should connect search demand to the buying journey.

Common content types:

- product pages;
- feature pages;
- use-case pages;
- industry pages;
- comparison pages;
- integrations;
- templates;
- tools/calculators;
- educational content;
- case studies.

## Example funnel

```text
Informational:
"how to track employee expenses"

Commercial:
"expense management software"

Comparison:
"software A vs software B"

Decision:
"software A pricing"
```

## Common SaaS mistake

A company publishes 500 top-of-funnel posts but its feature, integration, use-case, and pricing pages are weak.

Traffic grows; pipeline does not.

SEO strategy must align with revenue intent.

---

# 43. Service / Lead Generation SEO

For agencies, consultants, clinics, contractors, and professional services, useful page types include:

- service pages;
- location pages;
- case studies;
- pricing/cost pages where appropriate;
- comparison pages;
- FAQs;
- educational guides.

## Scenario

A software development company targets:

```text
Node.js development company
React development services
hire Laravel developers
```

Instead of one generic "Services" page, distinct pages can make sense if each service truly differs and has enough substance.

Each page should explain:

- what the service is;
- who it is for;
- approach;
- deliverables;
- evidence;
- technologies/process;
- FAQs;
- conversion path.

---

# 44. Publisher and Blog SEO

Publisher priorities include:

- editorial quality;
- topical organization;
- archive management;
- internal links;
- freshness;
- author pages;
- canonicalization;
- duplicate syndication issues;
- ad performance;
- Core Web Vitals;
- Discover/news eligibility.

## Content pruning

Do not delete pages merely because they have low traffic.

Ask:

- Is the page useful?
- Does it support another topic?
- Does it have links?
- Is demand seasonal?
- Can it be improved or merged?
- Is it obsolete?

Possible actions:

```text
Keep
Improve
Merge + redirect
Noindex
Delete (404/410)
```

---

# 45. Marketplace SEO

Marketplaces must manage:

- seller/product quality;
- UGC;
- duplicates;
- taxonomy;
- faceting;
- location pages;
- pagination;
- unavailable listings;
- moderation;
- spam.

## UGC risk

If anyone can create profiles/pages with links, spammers may exploit the domain.

Mitigate with:

- moderation;
- rate limits;
- anti-abuse systems;
- `rel="ugc"` or `nofollow` where appropriate;
- quality thresholds before indexing;
- removal of spam pages.

---

# 46. Enterprise SEO

Enterprise SEO is often less about knowing a title-tag rule and more about implementation at scale.

Challenges include:

- millions of URLs;
- multiple CMSs;
- many teams;
- international sites;
- release processes;
- JavaScript platforms;
- governance;
- legacy redirects;
- data pipelines;
- prioritization.

## Enterprise prioritization framework

Score issues by:

```text
Impact × URL count × business importance × confidence ÷ implementation cost
```

Example:

A missing canonical on 3 low-value pages may be lower priority than a JavaScript rendering bug affecting 200,000 product pages.

## SEO acceptance criteria

Add SEO to engineering stories.

Example:

```text
Feature: new product filter

SEO acceptance criteria:
- filter URLs follow approved indexability rules
- crawlable category pagination remains available
- canonical remains stable
- query parameters do not create infinite crawl space
- structured data remains valid
```

---

# 47. SEO for WordPress

WordPress can be SEO-friendly when configured carefully.

## Key areas

- permalink structure;
- themes/templates;
- title/meta control;
- XML sitemaps;
- canonical tags;
- category/tag archives;
- media attachment pages;
- internal search pages;
- performance;
- plugin quality;
- schema duplication;
- image optimization.

## Common WordPress problems

- multiple SEO plugins output conflicting tags;
- thin tag archives are indexable;
- attachment pages create low-value URLs;
- page builders add excessive scripts;
- staging site becomes indexable;
- plugin generates multiple schema blocks incorrectly;
- old URLs survive after redesign.

## robots example

Do **not** blindly copy generic robots.txt templates. Configure based on the actual site.

## Sitemap

Modern WordPress can provide XML sitemaps, and SEO plugins may provide enhanced sitemap controls.

Ensure only appropriate canonical/indexable content types are included.

---

# 48. SEO for React / Next.js / SPAs

Modern frameworks can produce excellent SEO, but rendering and routing choices matter.

## Next.js metadata example

```tsx
export const metadata = {
  title: 'Technical SEO Guide',
  description: 'Learn crawling, indexing, rendering, canonicals and more.'
};
```

## Server-render important content

For SEO-critical routes, make sure meaningful content is available reliably without depending on fragile post-load client requests.

## Dynamic route example

```text
/products/[slug]
```

Each product URL should return:

- correct `200` when valid;
- actual `404` when not found;
- unique title/description where useful;
- correct canonical;
- structured data matching the product;
- crawlable internal links.

## SPA routing mistake

Every unknown URL returns:

```http
HTTP/1.1 200 OK
```

with a client-rendered "Not Found" component.

That creates soft-404 behavior.

Configure the server/framework to return a real 404 status for nonexistent routes.

## Metadata race condition

If the initial HTML always says:

```html
<title>My App</title>
```

and JavaScript later changes it, debugging/rendering becomes more complex. Prefer framework-supported server/static metadata for important public pages.

---

# 49. Website Migrations and Redesigns

Migrations are high-risk SEO projects.

Types:

- HTTP → HTTPS;
- domain change;
- subdomain/subfolder move;
- CMS migration;
- URL redesign;
- platform migration;
- international restructuring;
- merger/consolidation.

## Pre-migration checklist

- crawl existing site;
- export important URLs;
- export Search Console data;
- export analytics landing pages;
- identify backlinks;
- map old URLs to new URLs;
- preserve high-value content;
- test canonicals;
- test robots directives;
- test sitemaps;
- test structured data;
- benchmark performance;
- prepare monitoring.

## Redirect map example

| Old URL | New URL |
|---|---|
| `/services/web-design` | `/web-design/` |
| `/blog/seo-101` | `/guides/seo-basics/` |

## Launch checks

```text
Old URL → one-hop redirect → correct new URL
New URL → 200
Canonical → new URL
Internal links → new URL
Sitemap → new URL
robots.txt → production-safe
noindex → removed from pages intended for indexing
analytics → firing
Search Console → verified
```

## Migration anti-pattern

```text
Every old URL → homepage
```

This destroys relevance and often produces a poor user experience.

---

# 50. Google Search Console

Google Search Console (GSC) is one of the most important tools for understanding Google Search performance and technical visibility.

## 50.1 Property types

### Domain property
Covers protocols/subdomains for the verified domain, typically using DNS verification.

### URL-prefix property
Covers only the specified protocol and path prefix.

Example:

```text
https://www.example.com/
```

is separate from:

```text
http://www.example.com/
```

for a URL-prefix property.

## 50.2 Performance reports

Common dimensions include:

- queries;
- pages;
- countries;
- devices;
- search appearance;
- dates.

Common metrics:

- clicks;
- impressions;
- CTR;
- average position.

## Scenario: high impressions, low CTR

Possible questions:

- Is the query relevant?
- Is the title compelling and accurate?
- Is the result below ads/maps/video/AI surfaces?
- Is the page ranking too low for strong CTR?
- Does the snippet answer the intent poorly?
- Is the result competing against a stronger brand?

Do not change titles solely because CTR is low without checking query and position context.

## 50.3 URL Inspection

Use URL Inspection to investigate:

- whether a URL is indexed;
- the selected canonical;
- crawl details;
- mobile crawling information;
- structured-data findings;
- live-test indexability;
- rendered page information.

## 50.4 Page indexing report

Use it to identify patterns such as:

- not found;
- excluded by `noindex`;
- duplicate/canonical cases;
- redirects;
- crawl problems;
- discovered/crawled but not indexed.

Do not panic over every excluded URL. Many URLs are intentionally excluded.

Ask:

> Is an important URL missing, or is the report simply showing expected site behavior?

## 50.5 Sitemaps

Submit XML sitemaps and monitor whether Google can fetch/process them.

## 50.6 Enhancements / rich-result reports

For supported structured-data types, GSC may show valid and invalid items.

Fix errors that prevent eligibility and review warnings based on actual relevance.

## 50.7 Manual actions and security issues

Check these when investigating major visibility problems.

---

# 51. Analytics and SEO Measurement

SEO measurement should answer three levels:

```text
Visibility → Traffic → Business Outcome
```

## 51.1 Visibility metrics

- impressions;
- ranking distribution;
- indexed important pages;
- SERP feature visibility;
- brand/non-brand visibility.

## 51.2 Traffic metrics

- organic sessions/users;
- landing pages;
- engagement;
- returning users;
- device/country mix.

## 51.3 Business metrics

- leads;
- purchases;
- revenue;
- subscriptions;
- calls;
- booked appointments;
- qualified pipeline;
- customer acquisition.

## GSC vs web analytics

These systems measure different things.

Example:

```text
Search Console: query, impression, click
Analytics: session, events, conversion, revenue
```

Do not expect every number to match exactly.

## Conversion tracking

Possible SEO conversions:

```text
form_submit
purchase
book_demo
phone_click
newsletter_signup
trial_start
```

Prefer meaningful business events over vanity metrics.

---

# 52. SEO KPIs and Reporting

A useful report explains:

1. what happened;
2. why it probably happened;
3. business impact;
4. what will be done next.

## Example executive dashboard

| KPI | Current | Previous | Change | Interpretation |
|---|---:|---:|---:|---|
| Organic clicks | 120,000 | 105,000 | +14.3% | Growth led by category pages |
| Organic leads | 930 | 810 | +14.8% | Lead growth tracks qualified traffic |
| Non-brand clicks | 82,000 | 68,000 | +20.6% | Improved discovery beyond brand |
| Indexed product pages | 8,450 | 8,410 | +0.5% | Stable |

## Segment your data

Sitewide averages hide important trends.

Segment by:

- page type;
- directory;
- brand/non-brand;
- country;
- device;
- new vs old content;
- commercial vs informational;
- product category.

## Example

Overall organic traffic: `+3%`

But:

```text
Blog:        +20%
Products:    -15%
Categories:   -8%
```

For an ecommerce company, the business may actually have a serious SEO problem despite overall traffic growth.

---

# 53. SEO Audits

An SEO audit is a structured investigation of how effectively a site can be discovered, indexed, understood, surfaced, and converted.

## 53.1 Audit order

Do not begin by counting title-tag character lengths across a million-page site.

Prioritize:

```text
1. Business-critical visibility
2. Crawl/index blockers
3. Sitewide technical problems
4. Template-level problems
5. Architecture/internal linking
6. Content/intent gaps
7. Search appearance
8. Authority/link opportunities
9. Measurement gaps
10. Minor hygiene items
```

## 53.2 Technical audit checklist

Check:

- robots.txt;
- indexation directives;
- HTTP status codes;
- redirects;
- canonical tags;
- XML sitemaps;
- orphan pages;
- internal links;
- mobile content;
- JavaScript rendering;
- structured data;
- duplicate URLs;
- faceted navigation;
- pagination;
- Core Web Vitals;
- HTTPS;
- server errors;
- crawl traps;
- international tags;
- log files for large sites.

## 53.3 Content audit

For each page or cluster, evaluate:

- purpose;
- traffic;
- impressions;
- conversions;
- freshness;
- accuracy;
- duplication;
- intent fit;
- backlinks;
- internal links;
- business value.

Possible actions:

```text
KEEP
UPDATE
EXPAND
MERGE
REDIRECT
NOINDEX
DELETE
```

## 53.4 Audit severity scale

### Critical
Sitewide noindex, broken rendering, domain migration failure.

### High
Large commercial section canonicalized incorrectly.

### Medium
Important templates have poor internal linking.

### Low
Several old pages have weak meta descriptions.

## 53.5 Audit issue format

Write recommendations like an engineer can implement them.

```text
Issue:
Product pagination after page 1 is discoverable only after JavaScript click.

Impact:
Products deeper in categories have weaker crawl discovery.

Evidence:
No <a href> links exist to page 2+ in rendered HTML.

Recommendation:
Expose paginated URLs with normal anchor links while preserving current UX.

Affected templates:
PLP category template.

Priority:
High.
```

---

# 54. Troubleshooting Traffic Drops

Never assume every decline is an algorithm penalty.

## 54.1 First determine whether the drop is real

Check:

- analytics tracking changes;
- GSC clicks/impressions;
- date comparison;
- seasonality;
- business changes;
- site releases;
- server incidents.

## 54.2 Classify the pattern

### Sitewide drop
Potential causes:

- technical outage;
- accidental noindex;
- robots block;
- migration issue;
- broad ranking changes;
- manual/security issue.

### Section-specific drop

```text
/blog/ stable
/products/ down 40%
```

Investigate the product template or demand landscape.

### Query-specific drop

May indicate:

- intent change;
- competitor improvement;
- SERP layout change;
- outdated page;
- cannibalization.

### Clicks down, impressions stable

Possible causes:

- ranking position loss;
- lower CTR;
- SERP feature changes;
- title/snippet issues;
- change in query mix.

### Impressions down

Potentially:

- less search demand;
- lost rankings;
- deindexation;
- crawl/index issue;
- query seasonality.

## 54.3 Debugging workflow

```text
1. Confirm analytics
2. Check Search Console
3. Segment by page/query/device/country
4. Compare exact dates
5. Check releases/migrations
6. Check indexing/robots/canonical
7. Check server uptime/logs
8. Check manual actions/security
9. Check known search changes
10. Inspect SERPs and competitors
11. Review content quality and intent
12. Prioritize evidence-based fixes
```

---

# 55. Algorithm Updates and Manual Actions

Search ranking systems change continuously, and major/core updates may alter visibility.

## After a broad ranking change

Do not immediately:

- rewrite every title;
- delete half the website;
- buy backlinks;
- increase keyword density;
- change URLs.

Instead:

1. confirm the date and affected area;
2. analyze multiple weeks where appropriate;
3. segment losses;
4. inspect winning/losing queries and pages;
5. compare result intent and quality;
6. review technical changes;
7. improve real weaknesses rather than chase imagined formulas.

## Manual actions

A manual action is different from an algorithmic ranking change.

If Search Console reports one:

- understand the violation;
- fix it comprehensively;
- document cleanup;
- submit reconsideration when appropriate.

---

# 56. SEO Spam / Black-Hat Risks

Search-engine spam policies exist to prevent manipulation and protect result quality.

High-risk patterns include:

- cloaking;
- doorway pages;
- hidden text/links;
- hacked content;
- keyword stuffing;
- link schemes;
- machine-generated low-value scaled content;
- scraped content with little value;
- site reputation abuse;
- expired-domain abuse;
- fake reviews/structured data;
- misleading redirects.

## 56.1 Keyword stuffing

Bad:

```text
Buy cheap shoes Mumbai cheap shoes best cheap shoes Mumbai online cheap shoes.
```

## 56.2 Cloaking

Crawler sees:

```text
Best laptops review
```

Users see:

```text
Casino landing page
```

This is deceptive.

## 56.3 Doorway pages

Hundreds of pages target near-identical local queries and funnel users to the same destination without meaningful unique value.

## 56.4 Link schemes

Examples:

- buying followed links for ranking manipulation;
- automated link networks;
- excessive low-quality exchanges;
- mass comment/profile spam.

## 56.5 Scaled content

Scale itself is not the problem. The problem is producing many pages primarily to manipulate search results rather than help users.

A programmatically generated site can be excellent if each page has real utility.

---

# 57. AI Search, AEO, GEO, and LLM Visibility

Search is increasingly blending traditional results with generative experiences.

You may hear terms such as:

- **AEO** – Answer Engine Optimization;
- **GEO** – Generative Engine Optimization;
- **LLM SEO** – optimization for language-model-driven discovery.

Treat these as extensions of good information architecture, content quality, technical accessibility, and brand/entity clarity—not as excuses for a new set of hacks.

## 57.1 Foundations still matter

For Google Search's generative features, official guidance continues to emphasize foundational SEO:

- content must be crawlable;
- pages need to be index-eligible;
- create valuable non-commodity content;
- make important information accessible;
- maintain good technical SEO;
- use normal structured data where it helps supported search features.

## 57.2 Query fan-out concept

Generative search systems may explore multiple related subqueries to answer a broader question.

Example user query:

```text
What is the best CRM for a 15-person construction company?
```

Related subquestions could involve:

```text
CRM construction features
CRM small teams
mobile CRM field sales
CRM pricing 15 users
construction CRM integrations
```

### Content implication

Build genuinely useful topical depth and clear, independently understandable sections—not artificial keyword variations.

## 57.3 AI-era content advantages

Content may become more reference-worthy when it contains:

- original research;
- primary data;
- expert quotations;
- firsthand testing;
- unique screenshots;
- comparison methodology;
- clear definitions;
- concise factual passages;
- tables/data that users need;
- transparent sources;
- regularly maintained facts.

## 57.4 Entity clarity

Make it easy to understand:

```text
Who is the organization?
What does it do?
Who created this content?
What product/service is being discussed?
What evidence supports the claims?
```

Use consistent:

- organization names;
- author names;
- product names;
- contact/about information;
- structured data where appropriate;
- external profiles/citations where legitimate.

## 57.5 Do you need special AI schema?

Do not assume you need invented special markup solely for AI visibility.

As of the August 2026 review of this handbook, Google's official guidance says there is no special schema.org markup required specifically for its generative AI search features.

## 57.6 llms.txt

Some websites experiment with `llms.txt` as an emerging convention for AI systems.

Important distinction:

- it may be used experimentally by some tools/ecosystems;
- it is **not** a replacement for robots.txt, sitemaps, normal crawlability, or SEO;
- Google's current Search guidance says it does not require special AI text files such as `llms.txt` to appear in Google Search's generative features.

Do not deploy it expecting a guaranteed ranking/AI-citation boost.

## 57.7 Measuring AI visibility

Measurement is evolving.

Track:

- referral traffic from AI/search experiences when identifiable;
- branded search growth;
- Search Console reports/features available to your property;
- citations/mentions through controlled spot checks;
- assisted conversions;
- changes in informational-query click patterns.

Avoid treating a manually checked chatbot answer as a stable rank tracker. Generative answers can vary.

---

# 58. SEO Automation

Automation is useful for repetitive checks, not for replacing judgment.

## 58.1 Good automation candidates

- title/meta extraction;
- status-code checking;
- sitemap validation;
- canonical checks;
- hreflang validation;
- broken-link detection;
- redirect-chain checks;
- structured-data validation workflows;
- GSC data exports;
- anomaly alerts;
- keyword clustering assistance;
- content inventory generation.

## 58.2 Python status-code checker

```python
import requests

urls = [
    "https://example.com/",
    "https://example.com/about/",
]

for url in urls:
    try:
        response = requests.get(url, timeout=10, allow_redirects=False)
        print(url, response.status_code, response.headers.get("location"))
    except requests.RequestException as exc:
        print(url, "ERROR", exc)
```

For production crawling, add:

- rate limiting;
- retries;
- user-agent identification;
- concurrency limits;
- robots considerations;
- logging.

## 58.3 Extract page SEO elements

```python
import requests
from bs4 import BeautifulSoup

url = "https://example.com/"
html = requests.get(url, timeout=10).text
soup = BeautifulSoup(html, "html.parser")

print("Title:", soup.title.get_text(strip=True) if soup.title else None)

canonical = soup.find("link", rel="canonical")
print("Canonical:", canonical.get("href") if canonical else None)

h1s = [h.get_text(" ", strip=True) for h in soup.find_all("h1")]
print("H1:", h1s)
```

## 58.4 Detect orphan-page candidates

Conceptually:

```text
Sitemap URLs
+
Analytics landing pages
+
Search Console pages
+
CMS export
-
Crawler-discovered internal URLs
=
Possible orphan pages
```

Each candidate still requires validation.

## 58.5 AI automation guardrails

If AI helps produce SEO content:

- verify facts;
- require human/editorial standards;
- add original value;
- prevent duplicate templates;
- review high-stakes claims;
- track source provenance;
- avoid publishing at scale solely because generation is cheap.

---

# 59. SEO Tools

Tools are useful, but none has direct access to every search-engine ranking signal.

## Essential categories

### Search-engine tools

- Google Search Console;
- Bing Webmaster Tools;
- Google Business Profile for local businesses;
- Merchant Center for eligible ecommerce use cases.

### Crawlers

Examples include:

- Screaming Frog SEO Spider;
- Sitebulb;
- enterprise/cloud crawlers.

### Keyword / competitor platforms

Examples include:

- Ahrefs;
- Semrush;
- Moz;
- other regional/specialized tools.

### Performance

- PageSpeed Insights;
- Lighthouse;
- Chrome DevTools;
- Chrome UX Report data where available;
- WebPageTest.

### Structured data

- Google Rich Results Test;
- Schema.org validator;
- browser/dev tools.

### Analytics

- Google Analytics;
- server-side analytics;
- product analytics;
- BI tools.

### Log analysis

- raw server logs;
- CDN logs;
- ELK/OpenSearch/Splunk-style systems;
- crawler-log platforms.

## Tool principle

Never blindly fix every "SEO error" a third-party tool reports.

Ask:

```text
Is this actually a search problem?
Does it affect important pages?
What evidence supports the recommendation?
```

---

# 60. SEO SOPs and Templates

## 60.1 New-page SEO SOP

```text
1. Define target audience
2. Define search intent
3. Inspect SERP
4. Select page type
5. Map query/topic cluster
6. Create brief
7. Produce original content/assets
8. Add title/meta
9. Structure headings
10. Add internal links in/out
11. Add images/video if useful
12. Add relevant structured data
13. Verify canonical/indexability
14. Check mobile rendering
15. Check performance
16. Publish
17. Add to relevant hubs/sitemap
18. Inspect/index if necessary
19. Measure after sufficient time/data
20. Improve based on evidence
```

## 60.2 Content brief template

```markdown
# Content Brief

## Audience

## Search intent

## Business goal

## Primary topic

## Related questions

## Recommended page type

## Unique value / angle

## Required evidence

## Outline

## Internal links to include

## External sources

## Media/assets

## CTA

## Structured data if applicable

## Reviewer / expert
```

## 60.3 Technical SEO ticket template

```markdown
# SEO Technical Issue

## Summary

## Affected URLs/templates

## Current behavior

## Expected behavior

## SEO/user impact

## Evidence

## Recommended implementation

## Acceptance criteria

## Test cases

## Priority
```

## 60.4 SEO experiment template

```markdown
# SEO Experiment

Hypothesis:
If we improve X, Y should change because Z.

Control pages:

Test pages:

Primary metric:

Secondary metrics:

Start date:

End/review date:

Confounding factors:

Result:

Decision:
```

---

# 61. Real-World Scenarios

## Scenario 1: New website is not appearing in Google

### Situation

A new SaaS site launched two weeks ago.

### Investigation

Check:

```text
robots.txt
noindex
HTTP status
canonical
internal links
sitemap
Search Console URL Inspection
rendered content
site quality/content depth
```

### Finding

Homepage is indexable, but feature pages contain:

```html
<meta name="robots" content="noindex">
```

left from staging.

### Fix

Remove the directive from pages intended for search, redeploy, test live pages, update sitemap if needed, and monitor GSC.

### Lesson

Do not begin with backlinks when indexability is broken.

---

## Scenario 2: Blog traffic grows but leads do not

### Situation

A B2B SaaS company's traffic doubles from generic articles.

### Problem

Most traffic comes from topics unrelated to the product's buying journey.

### Fix

Build/search-optimize:

- feature pages;
- use-case pages;
- integration pages;
- comparison pages;
- high-intent guides;
- case studies;
- internally linked conversion paths.

### Lesson

Organic traffic is a means, not the business goal.

---

## Scenario 3: Ecommerce category has thousands of filtered URLs

### Situation

Crawler discovers:

```text
?color=
?brand=
?size=
?sort=
?price=
```

in millions of combinations.

### Fix approach

1. identify facets with actual search/user value;
2. create stable indexable landing states for valuable facets;
3. prevent useless combinations from creating crawl traps;
4. standardize canonical behavior;
5. strengthen category internal linking;
6. audit sitemaps;
7. monitor logs/indexing.

### Lesson

Faceted navigation requires architecture, UX, and engineering decisions.

---

## Scenario 4: Rankings dropped after redesign

### Symptoms

- clicks down 45%;
- many old URLs return 404;
- navigation changed;
- new pages use different URLs.

### Root cause

No redirect map was implemented.

### Fix

Map old high-value URLs to closest relevant new URLs with permanent redirects, update internal links, submit clean sitemaps, and monitor recovery.

---

## Scenario 5: Two articles compete for the same query

Pages:

```text
/blog/technical-seo-guide/
/blog/technical-seo-basics/
```

Both serve nearly the same intent.

### Options

- differentiate intent clearly;
- merge into one stronger resource and redirect the weaker URL;
- adjust internal links;
- avoid creating future duplicates.

This is often called **keyword cannibalization**, but first verify the pages really conflict. Multiple pages ranking for related queries is not automatically a problem.

---

## Scenario 6: Local business has strong website but weak map visibility

Check:

- Business Profile accuracy;
- correct category;
- physical/service-area eligibility;
- reviews;
- local relevance;
- local citations/mentions;
- website location/service clarity;
- distance from searcher.

Remember that distance cannot simply be "optimized away."

---

## Scenario 7: React page is indexed with almost no text

### Raw HTML

```html
<div id="root"></div>
```

### Rendered page for users

Large product catalog.

### Investigation

Search crawler rendering fails because an API blocks unknown user agents.

### Fix

- allow legitimate crawling where appropriate;
- server-render/static-render critical content;
- ensure APIs/resources required for rendering are accessible;
- expose crawlable links;
- retest rendered HTML.

---

## Scenario 8: Product schema says InStock but page says Out of Stock

### Problem

Structured data and visible content conflict.

### Fix

Update structured data from the same authoritative inventory source as the page.

### Lesson

Schema should describe reality, not an SEO fantasy.

---

## Scenario 9: 50,000 AI articles published with no review

### Symptoms

- many pages repeat the same facts;
- no original insight;
- factual errors;
- weak engagement;
- almost no links;
- indexing becomes inconsistent.

### Better approach

Use AI for research assistance, outlining, classification, or drafting—but add editorial review, original information, expert knowledge, and strict index-quality gates.

---

## Scenario 10: Search Console says "Crawled – currently not indexed"

Do not assume there is one universal fix.

Check:

- duplicate/near-duplicate content;
- canonical choice;
- page usefulness;
- internal links;
- site quality;
- rendering;
- thin programmatic pages;
- whether the page actually deserves independent indexing.

Do not spam "Request indexing" repeatedly.

---

## Scenario 11: International pages rank in the wrong country

Site:

```text
/en-us/product/
/en-gb/product/
```

Check:

- hreflang reciprocity;
- self-canonical behavior;
- local currency/content;
- internal links;
- accidental canonical from UK → US;
- sitemap consistency.

---

## Scenario 12: Site migration from HTTP to HTTPS

Correct sequence:

```text
http://example.com/page
        ↓ 301/308
https://example.com/page
        ↓ 200
canonical = https URL
internal links = https URL
sitemap = https URL
```

Also update analytics, external profiles, structured data, hreflang, and important backlinks where feasible.

---

# 62. Interview / Revision Questions

## Beginner

1. What is SEO?
2. What is the difference between crawling and indexing?
3. What is search intent?
4. What is a backlink?
5. What is an internal link?
6. What is a title tag?
7. What is a meta description?
8. What is an XML sitemap?
9. What is robots.txt?
10. What does `noindex` do?
11. What is a canonical URL?
12. What is organic CTR?
13. What is local SEO?
14. What is structured data?
15. What is an orphan page?

## Intermediate

1. robots.txt vs noindex: when would you use each?
2. 301 vs canonical: what problem does each solve?
3. How would you diagnose "Crawled – currently not indexed"?
4. How do you identify keyword cannibalization?
5. What makes a strong internal-link strategy?
6. How do faceted URLs create crawl problems?
7. What is mobile-first indexing?
8. How would you migrate a domain safely?
9. How would you audit an ecommerce category template?
10. How does JavaScript rendering affect SEO?
11. What is a soft 404?
12. Why might Search Console and Analytics clicks/sessions differ?
13. What are LCP, INP, and CLS?
14. How would you prioritize technical SEO issues?
15. How would you measure SEO for a B2B SaaS company?

## Advanced

1. Design an indexation strategy for 10 million faceted URLs.
2. How would you use server logs to diagnose crawl inefficiency?
3. How would you build an SEO monitoring system for a large marketplace?
4. How do you test whether client-side rendering causes indexing problems?
5. How would you structure hreflang across 20 countries and 8 languages?
6. How do you evaluate whether programmatic SEO pages deserve indexing?
7. How would you measure the incremental impact of SEO template changes?
8. How would you handle a migration where 30% of old URLs have no direct replacement?
9. How do you separate seasonality, algorithm changes, SERP changes, and technical problems in a traffic decline?
10. How should SEO teams adapt content strategy for generative search without chasing unsupported hacks?

---

# 63. 30-60-90 Day SEO Learning Roadmap

# Days 1–30: Foundation

## Week 1

Learn:

- what SEO is;
- crawling;
- indexing;
- ranking/serving;
- SERPs;
- intent;
- keywords.

Practice:

- inspect 20 SERPs;
- classify intent;
- identify result types.

## Week 2

Learn:

- titles;
- descriptions;
- headings;
- content structure;
- internal links;
- URLs.

Practice:

Optimize five sample pages.

## Week 3

Learn:

- robots.txt;
- noindex;
- sitemaps;
- redirects;
- canonicals;
- status codes.

Practice:

Create a small website and deliberately break/fix each item.

## Week 4

Learn:

- Search Console;
- analytics;
- basic reporting;
- Core Web Vitals.

Practice:

Analyze a real property if available or use demo/sample data.

---

# Days 31–60: Applied SEO

## Week 5

Keyword research + clustering + content briefs.

## Week 6

Technical crawling and audits.

## Week 7

Structured data, image/video SEO, local/ecommerce specialization.

## Week 8

Off-page SEO, digital PR, competitor analysis.

### Deliverable

Produce a full SEO audit with:

- issue;
- evidence;
- impact;
- fix;
- priority.

---

# Days 61–90: Advanced SEO

## Week 9

JavaScript SEO and rendering.

## Week 10

Large-site SEO: crawl budget, faceting, pagination, logs.

## Week 11

International SEO and migrations.

## Week 12

SEO strategy, experimentation, forecasting, AI search, stakeholder communication.

### Capstone

Create an SEO strategy for one of:

- ecommerce site;
- SaaS platform;
- local service business;
- publisher;
- marketplace.

Include:

- technical audit;
- keyword map;
- architecture;
- content plan;
- internal-link plan;
- authority plan;
- KPI dashboard;
- 90-day execution roadmap.

---

# 64. Practice Projects

## Project 1: Build an SEO-friendly static site

Create:

```text
/
/services/
/services/seo/
/blog/
/blog/technical-seo/
/about/
```

Implement:

- titles;
- descriptions;
- canonical URLs;
- sitemap;
- robots.txt;
- internal linking;
- schema;
- 404 page.

## Project 2: Ecommerce architecture

Design:

```text
/shoes/
/shoes/running/
/shoes/trail/
/brands/nike/
/product/trail-runner-x/
```

Define index rules for:

- color;
- size;
- price;
- sorting;
- pagination;
- search.

## Project 3: Local SEO

Create a mock local business and build:

- homepage;
- service pages;
- service-area page;
- LocalBusiness schema where appropriate;
- review-request workflow;
- citation checklist.

## Project 4: JavaScript SEO

Build the same content in:

1. client-only React;
2. server-rendered framework page.

Compare:

- raw HTML;
- rendered HTML;
- status codes;
- metadata;
- links;
- performance.

## Project 5: Migration simulation

Rename 50 URLs and create a redirect map.

Test:

- redirect status;
- target relevance;
- chains;
- loops;
- canonicals;
- sitemap changes.

## Project 6: Content cluster

Choose a topic and create:

- 1 pillar page;
- 6 cluster pages;
- internal-link map;
- keyword map;
- content briefs;
- measurement plan.

---

# 65. Master SEO Checklists

## 65.1 New Website Checklist

- [ ] HTTPS works correctly
- [ ] One preferred host/protocol is enforced
- [ ] Production is not accidentally blocked
- [ ] Important pages are indexable
- [ ] robots.txt reviewed
- [ ] XML sitemap available
- [ ] Search Console configured
- [ ] Analytics configured
- [ ] Real 404 responses work
- [ ] Redirect rules tested
- [ ] Canonicals correct
- [ ] Mobile content matches important desktop content
- [ ] Navigation uses crawlable links
- [ ] Titles/headings are meaningful
- [ ] Structured data validated where appropriate
- [ ] Core templates tested for performance
- [ ] Internal links reach important pages
- [ ] Organization/contact information is clear
- [ ] Conversion tracking works

## 65.2 Page-Level Checklist

- [ ] Clear user intent
- [ ] Distinct purpose
- [ ] Useful title
- [ ] Helpful main heading
- [ ] Original main content
- [ ] Natural language
- [ ] Evidence/examples where relevant
- [ ] Descriptive internal links
- [ ] Useful outbound references where needed
- [ ] Correct canonical
- [ ] Indexing directive intentional
- [ ] Images optimized and accessible
- [ ] Structured data matches visible content
- [ ] Mobile view works
- [ ] CTA matches user journey

## 65.3 Technical Checklist

- [ ] Important URLs return 200
- [ ] Removed URLs return suitable 404/410 or redirects
- [ ] Redirect chains minimized
- [ ] No redirect loops
- [ ] No accidental `noindex`
- [ ] robots blocks intentional
- [ ] Canonicals consistent
- [ ] Sitemaps clean
- [ ] Duplicate parameters controlled
- [ ] Pagination crawlable
- [ ] Facets governed
- [ ] JS-rendered content verified
- [ ] Mobile parity checked
- [ ] Core Web Vitals monitored
- [ ] Structured data valid
- [ ] Hreflang valid where used
- [ ] Server/DNS reliability monitored

## 65.4 Content Checklist

- [ ] Searcher problem is understood
- [ ] Correct format/page type chosen
- [ ] Unique value identified before writing
- [ ] Facts verified
- [ ] Sources documented
- [ ] Original examples/data added when possible
- [ ] Author/reviewer appropriate for subject
- [ ] Content is not artificially padded
- [ ] No copied competitor wording
- [ ] No unsupported claims
- [ ] Important pages linked contextually
- [ ] Update/review schedule defined for time-sensitive content

## 65.5 Local SEO Checklist

- [ ] Business Profile verified/eligible
- [ ] Real business name used
- [ ] Correct primary category
- [ ] Address/service area accurate
- [ ] Hours accurate
- [ ] Phone/website accurate
- [ ] Services/products completed where useful
- [ ] High-quality photos
- [ ] Genuine review process
- [ ] Reviews answered
- [ ] Local landing pages provide real local value
- [ ] Business identity consistent across important sources
- [ ] Local links/mentions pursued naturally

## 65.6 Ecommerce Checklist

- [ ] Category architecture is clear
- [ ] Products reachable via crawlable links
- [ ] Product variants have intentional URL strategy
- [ ] Faceted navigation controlled
- [ ] Pagination crawlable
- [ ] Product structured data accurate
- [ ] Price/currency/stock consistent
- [ ] Out-of-stock strategy defined
- [ ] Discontinued products handled intentionally
- [ ] Manufacturer descriptions improved where possible
- [ ] Reviews are genuine
- [ ] Merchant feed aligned with site data
- [ ] Internal search pages governed

## 65.7 Migration Checklist

- [ ] Old URL inventory exported
- [ ] Organic landing pages exported
- [ ] Backlinked URLs exported
- [ ] Redirect map approved
- [ ] Staging blocked securely
- [ ] New URLs crawl-tested
- [ ] Canonicals updated
- [ ] Hreflang updated
- [ ] Structured data updated
- [ ] Internal links updated
- [ ] Sitemaps updated
- [ ] Analytics verified
- [ ] Search Console verified
- [ ] 404s monitored
- [ ] Redirects monitored
- [ ] Traffic monitored by directory/page type

## 65.8 AI-Era SEO Checklist

- [ ] Foundational SEO works
- [ ] Content is crawlable/indexable
- [ ] Information adds non-commodity value
- [ ] Claims are attributable and verifiable
- [ ] Entities/authors/products are clear
- [ ] Firsthand evidence is included where possible
- [ ] Important facts are easy to locate
- [ ] Structured data is used normally, not spammed
- [ ] No reliance on unsupported "AI ranking hacks"
- [ ] AI-assisted content has editorial review
- [ ] AI/search referral patterns are monitored

---

# 66. Glossary

**301 Redirect** – Permanent redirect status commonly used when a resource moves.

**302 Redirect** – Temporary redirect status.

**404** – Resource not found.

**410** – Resource intentionally gone.

**Alt text** – Text alternative describing meaningful images for accessibility and context.

**Anchor text** – Visible clickable link text.

**Backlink** – Link from another site to yours.

**Bot/Crawler** – Software that discovers and fetches web resources.

**Canonical** – Representative URL for duplicate or similar content.

**Click** – User interaction with a search result as counted by the search platform.

**CLS** – Cumulative Layout Shift, a Core Web Vital for visual stability.

**Crawl budget** – Concept describing how much crawling a search engine is willing/able to devote to a site or URL set.

**Crawlability** – Ability/permission for a crawler to access a resource.

**CTR** – Click-through rate.

**Doorway page** – Low-value page designed primarily to rank for similar queries and funnel users elsewhere.

**Duplicate content** – Identical or substantially similar content accessible at multiple URLs.

**E-E-A-T** – Experience, Expertise, Authoritativeness, Trust; a useful quality framework used in SEO discussions.

**Faceted navigation** – Filtering system that creates combinations based on attributes such as size, color, brand, price.

**GEO** – Generative Engine Optimization; industry term for improving visibility/reference potential in generative search/answer systems.

**Googlebot** – Google's web crawler.

**Hreflang** – Annotation connecting localized language/region variants.

**Impression** – Search-result appearance according to platform reporting rules.

**Index** – Search engine's processed searchable collection.

**Indexability** – Eligibility of a resource for indexing.

**INP** – Interaction to Next Paint, a Core Web Vital for responsiveness.

**Internal link** – Link between pages on the same site.

**Keyword cannibalization** – Situation where multiple pages unintentionally compete for the same intent, potentially weakening clarity/performance.

**Keyword stuffing** – Unnatural repetition of terms to manipulate search visibility.

**LCP** – Largest Contentful Paint, a Core Web Vital for loading performance.

**Link equity** – Informal SEO term for value/signals transmitted through links.

**Long-tail keyword** – More specific, often lower-volume query phrase.

**Meta description** – HTML metadata that can help search engines form result snippets.

**Mobile-first indexing** – Using mobile-page content as the primary basis for Google's indexing/ranking.

**Noindex** – Directive requesting that a page not be indexed.

**Nofollow** – Link relationship value used when you do not want to associate with/endorse a target in the normal way; search engines interpret it according to their policies.

**Off-page SEO** – SEO activity involving signals outside the website.

**On-page SEO** – Optimization of page content and HTML/context.

**Organic result** – Unpaid search result.

**Orphan page** – Page with no discoverable internal links pointing to it.

**PageRank** – Google's historical/foundational link-analysis concept; modern ranking involves many systems beyond a simplistic visible PageRank score.

**Pagination** – Breaking a collection into multiple pages.

**People-first content** – Content created primarily to help the intended audience rather than manipulate search systems.

**Programmatic SEO** – Production of useful search landing pages at scale from templates/data.

**Query** – User's search expression.

**Rendering** – Processing a page, including JavaScript execution, to produce rendered content.

**Rich result** – Search result enhanced with additional presentation enabled by supported data/features.

**robots.txt** – Site-level file that controls crawler access to paths for compliant crawlers.

**Schema.org** – Shared structured-data vocabulary.

**Search intent** – User goal underlying a query.

**SERP** – Search Engine Results Page.

**Sitemap** – File listing URLs/resources to aid search-engine discovery.

**Soft 404** – URL returning success status while effectively presenting missing/error-like content.

**Structured data** – Machine-readable markup describing entities/content.

**Topical cluster** – Group of internally related pages around a subject.

**URL Inspection** – Search Console tool for inspecting Google's indexed/live view of a URL.

**YMYL** – "Your Money or Your Life"; topics that can significantly affect health, financial stability, safety, or societal welfare.

---

# 67. Official Reference Sources

SEO changes. Always verify implementation details against current search-engine documentation.

## Google Search Central

SEO documentation:

```text
https://developers.google.com/search/docs
```

SEO Starter Guide:

```text
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
```

How Google Search works:

```text
https://developers.google.com/search/docs/fundamentals/how-search-works
```

Search Essentials:

```text
https://developers.google.com/search/docs/essentials
```

People-first content guidance:

```text
https://developers.google.com/search/docs/fundamentals/creating-helpful-content
```

Spam policies:

```text
https://developers.google.com/search/docs/essentials/spam-policies
```

Crawling and indexing:

```text
https://developers.google.com/search/docs/crawling-indexing
```

Canonicalization:

```text
https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
```

Robots meta tags:

```text
https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
```

JavaScript SEO:

```text
https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
```

Core Web Vitals:

```text
https://developers.google.com/search/docs/appearance/core-web-vitals
```

Structured data:

```text
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
```

Ecommerce SEO:

```text
https://developers.google.com/search/docs/specialty/ecommerce
```

International SEO:

```text
https://developers.google.com/search/docs/specialty/international
```

Image SEO:

```text
https://developers.google.com/search/docs/appearance/google-images
```

Video SEO:

```text
https://developers.google.com/search/docs/appearance/video
```

Generative AI Search optimization guidance:

```text
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
```

Search Central updates:

```text
https://developers.google.com/search/news
```

## Google Search Console Help

```text
https://support.google.com/webmasters/
```

## Google Business Profile Help

```text
https://support.google.com/business/
```

## Bing Webmaster Tools

```text
https://www.bing.com/webmasters/help
```

Bing Webmaster Guidelines:

```text
https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
```

## Schema.org

```text
https://schema.org/
```

---

# Final SEO Mental Model

If you remember only one page from this handbook, remember this:

```text
SEO SUCCESS
│
├── 1. BUSINESS FIT
│      ├── right audience
│      ├── valuable demand
│      └── measurable outcome
│
├── 2. DISCOVERY
│      ├── links
│      ├── architecture
│      └── sitemaps
│
├── 3. CRAWLING
│      ├── robots access
│      ├── server availability
│      └── crawl efficiency
│
├── 4. RENDERING
│      ├── HTML content
│      ├── JavaScript
│      └── resources
│
├── 5. INDEXING
│      ├── noindex
│      ├── canonicalization
│      ├── duplication
│      └── content usefulness
│
├── 6. RELEVANCE & QUALITY
│      ├── intent
│      ├── topic coverage
│      ├── original value
│      ├── trust
│      └── freshness when needed
│
├── 7. RELATIONSHIPS & AUTHORITY
│      ├── internal links
│      ├── genuine backlinks
│      ├── brand references
│      └── entity clarity
│
├── 8. EXPERIENCE
│      ├── mobile usability
│      ├── speed
│      ├── accessibility
│      └── clear UX
│
├── 9. SEARCH APPEARANCE
│      ├── title/snippet
│      ├── structured data
│      ├── image/video
│      └── local/product features
│
└── 10. MEASUREMENT
       ├── impressions
       ├── clicks
       ├── landing pages
       ├── leads/revenue
       └── iteration
```

The best SEO strategy is usually not a secret trick. It is the disciplined combination of:

> **technical accessibility + useful information + strong site architecture + trustworthy evidence + genuine reputation + excellent user experience + continuous measurement.**

---

# Bonus: Common SEO Myths

## Myth 1: "I submitted a sitemap, so Google must index every URL."

False. A sitemap helps discovery; it does not guarantee crawling or indexing.

## Myth 2: "robots.txt removes pages from Google."

Not reliably. It controls crawling. Use appropriate indexing/removal methods for indexing goals.

## Myth 3: "Every page needs exactly one H1 or SEO fails."

Semantic clarity is useful, but SEO does not collapse because of a simplistic H1-count rule. Use logical headings for users and document structure.

## Myth 4: "Meta descriptions are a direct ranking button."

They are primarily useful for result presentation and communication. Search engines may rewrite snippets.

## Myth 5: "Longer content always ranks better."

There is no universal ideal word count. Match the user's need.

## Myth 6: "More backlinks always means better rankings."

Quality, relevance, editorial legitimacy, and spam policies matter far more than raw volume.

## Myth 7: "Duplicate content automatically causes a penalty."

Duplicate/near-duplicate URLs commonly create canonicalization and efficiency issues. Manipulative duplication can be a different matter, but ordinary duplication is not simply an automatic sitewide penalty.

## Myth 8: "SEO is finished once a page ranks."

Search demand, competitors, SERPs, products, technology, and content all change.

## Myth 9: "AI-generated content is automatically banned."

The core issue is quality, value, accuracy, and whether content is produced primarily to manipulate search systems. Automation does not excuse low-value scaled publication.

## Myth 10: "GEO replaces SEO."

Generative search increases the importance of accessible, original, trustworthy information; it does not eliminate technical SEO, content quality, or site architecture.

---

# Bonus: SEO Decision Trees

## Should this page be indexed?

```text
Does the page serve a distinct user/search need?
        |
       Yes
        |
Does it contain enough useful, unique value?
        |
       Yes
        |
Is it a canonical destination rather than a duplicate/filter artifact?
        |
       Yes
        |
Make it discoverable + indexable

If NO at any stage:
Consider merge / canonical / noindex / removal / UX-only URL strategy.
```

## Redirect, canonical, or noindex?

```text
Has the URL permanently moved?
    → Permanent redirect

Do multiple accessible URLs represent the same/similar content?
    → Canonicalization strategy

Should users access the page but it should not appear in search?
    → noindex (while crawlable enough to see directive)

Should crawlers avoid a wasteful URL space?
    → Consider robots/crawl controls as part of broader architecture
```

## Should I create a new keyword page?

```text
Is the intent meaningfully different from an existing page?
      |
     No → improve/expand existing page
      |
     Yes
      ↓
Would users benefit from a dedicated page?
      |
     No → cover as a section
      |
     Yes → create a distinct page
```

---

# Bonus: SEO Audit Command Cheatsheet

These commands are useful for technical investigation.

## Check response headers

```bash
curl -I https://example.com/page/
```

## Follow redirects

```bash
curl -I -L https://example.com/old-page
```

## View robots.txt

```bash
curl https://example.com/robots.txt
```

## View raw HTML

```bash
curl -L https://example.com/page/
```

## Find canonical in downloaded HTML

```bash
curl -sL https://example.com/page/ | grep -i canonical
```

## Check DNS

```bash
nslookup example.com
```

or:

```bash
dig example.com
```

## Inspect TLS/connection timing

```bash
curl -o /dev/null -s -w 'DNS: %{time_namelookup}\nConnect: %{time_connect}\nTTFB: %{time_starttransfer}\nTotal: %{time_total}\n' https://example.com/
```

---

# Bonus: Example SEO Project Folder Structure

```text
seo-project/
├── 01_strategy/
│   ├── goals.md
│   ├── personas.md
│   └── kpis.md
├── 02_keyword_research/
│   ├── seed-keywords.csv
│   ├── clusters.csv
│   └── keyword-map.csv
├── 03_technical_audit/
│   ├── crawl-export.csv
│   ├── indexation.md
│   ├── redirects.csv
│   ├── canonicals.csv
│   └── schema.md
├── 04_content/
│   ├── inventory.csv
│   ├── briefs/
│   └── content-plan.csv
├── 05_links/
│   ├── internal-links.csv
│   └── digital-pr-plan.md
├── 06_reporting/
│   ├── baseline.csv
│   ├── monthly-report.md
│   └── experiments.md
└── 07_migrations/
    ├── old-new-url-map.csv
    └── launch-checklist.md
```

---

# Bonus: SEO Prioritization Matrix

A simple scoring model:

```text
Priority Score = Impact × Confidence × Scale ÷ Effort
```

Score each factor from 1–5.

Example:

| Issue | Impact | Confidence | Scale | Effort | Score |
|---|---:|---:|---:|---:|---:|
| Product pages accidentally noindex | 5 | 5 | 5 | 2 | 62.5 |
| Rewrite 20 meta descriptions | 2 | 3 | 2 | 2 | 6 |
| Improve category internal links | 4 | 4 | 4 | 3 | 21.3 |

The formula is only a prioritization aid. Business criticality can override it.

---

# Bonus: What a Professional SEO Should Be Able to Do

A strong SEO practitioner should eventually be able to:

- explain search-engine crawling/indexing clearly;
- conduct keyword and intent research;
- design useful site architecture;
- optimize page templates;
- create content strategies tied to business outcomes;
- diagnose canonical/indexation problems;
- understand HTML and HTTP fundamentals;
- work with developers;
- inspect JavaScript rendering;
- analyze logs for large sites;
- implement/validate structured data;
- manage migrations;
- evaluate backlinks without chasing spam metrics;
- understand local/ecommerce/international differences;
- use Search Console and analytics confidently;
- create actionable audits rather than tool dumps;
- communicate priorities to stakeholders;
- adapt to search changes without chasing every rumor;
- use automation and AI carefully without sacrificing quality.

---

# End of SEO Master Handbook

> Keep this handbook as a foundation, but treat official search-engine documentation and live data from your own website as the final source of truth for implementation decisions.
