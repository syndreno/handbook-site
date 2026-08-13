# Django Master Learning Handbook
## Beginner to Advanced — A Single-File Practical Reference

> **Edition:** August 2026  
> **Primary baseline:** Django 6.1  
> **LTS-friendly baseline:** Django 5.2 LTS  
> **Audience:** Complete beginners, Python developers, full-stack developers, API developers, and working Django engineers  
> **Goal:** Learn Django from first principles, understand *why* each feature exists, know when to use it, and be able to build, debug, test, secure, optimize, and deploy real applications.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Django Is](#2-what-django-is)
3. [Prerequisites](#3-prerequisites)
4. [Django Architecture and Mental Model](#4-django-architecture-and-mental-model)
5. [Environment Setup](#5-environment-setup)
6. [Your First Django Project](#6-your-first-django-project)
7. [Projects vs Apps](#7-projects-vs-apps)
8. [Django Project Structure](#8-django-project-structure)
9. [Settings and Configuration](#9-settings-and-configuration)
10. [URL Routing](#10-url-routing)
11. [Requests and Responses](#11-requests-and-responses)
12. [Function-Based Views](#12-function-based-views)
13. [Class-Based Views](#13-class-based-views)
14. [Templates](#14-templates)
15. [Static Files and Media Files](#15-static-files-and-media-files)
16. [Models](#16-models)
17. [Model Relationships](#17-model-relationships)
18. [Django ORM](#18-django-orm)
19. [Advanced ORM](#19-advanced-orm)
20. [Transactions and Concurrency](#20-transactions-and-concurrency)
21. [Migrations](#21-migrations)
22. [Forms](#22-forms)
23. [ModelForms](#23-modelforms)
24. [Formsets and Inline Formsets](#24-formsets-and-inline-formsets)
25. [Django Admin](#25-django-admin)
26. [Authentication](#26-authentication)
27. [Authorization, Permissions, and Groups](#27-authorization-permissions-and-groups)
28. [Custom User Models](#28-custom-user-models)
29. [Sessions and Cookies](#29-sessions-and-cookies)
30. [Messages Framework](#30-messages-framework)
31. [Middleware](#31-middleware)
32. [Signals](#32-signals)
33. [Files and Storage](#33-files-and-storage)
34. [Email](#34-email)
35. [Caching](#35-caching)
36. [Pagination](#36-pagination)
37. [Validation](#37-validation)
38. [Management Commands](#38-management-commands)
39. [Logging and Error Handling](#39-logging-and-error-handling)
40. [Security](#40-security)
41. [Async Django and ASGI](#41-async-django-and-asgi)
42. [Background Tasks](#42-background-tasks)
43. [Testing](#43-testing)
44. [Internationalization and Time Zones](#44-internationalization-and-time-zones)
45. [Django REST APIs Without DRF](#45-django-rest-apis-without-drf)
46. [Django REST Framework](#46-django-rest-framework)
47. [Database Design for Django](#47-database-design-for-django)
48. [PostgreSQL with Django](#48-postgresql-with-django)
49. [Performance Optimization](#49-performance-optimization)
50. [Production Project Structure](#50-production-project-structure)
51. [Deployment](#51-deployment)
52. [Docker](#52-docker)
53. [CI/CD](#53-cicd)
54. [Real-World Architecture Patterns](#54-real-world-architecture-patterns)
55. [Service Layer, Selectors, Repositories, and Fat Models](#55-service-layer-selectors-repositories-and-fat-models)
56. [Multi-Tenancy](#56-multi-tenancy)
57. [Audit Logging](#57-audit-logging)
58. [Search](#58-search)
59. [File Upload Scenario](#59-file-upload-scenario)
60. [E-Commerce Scenario](#60-e-commerce-scenario)
61. [Approval Workflow Scenario](#61-approval-workflow-scenario)
62. [Invoice Processing Scenario](#62-invoice-processing-scenario)
63. [Common Django Mistakes](#63-common-django-mistakes)
64. [Debugging Guide](#64-debugging-guide)
65. [Interview Questions](#65-interview-questions)
66. [Practice Projects](#66-practice-projects)
67. [Learning Roadmap](#67-learning-roadmap)
68. [Production Checklist](#68-production-checklist)
69. [Command Cheat Sheet](#69-command-cheat-sheet)
70. [ORM Cheat Sheet](#70-orm-cheat-sheet)
71. [Glossary](#71-glossary)
72. [Official References](#72-official-references)

### Advanced Appendices

- [Appendix A — AppConfig, Application Registry, and System Checks](#appendix-a-appconfig-application-registry-and-system-checks)
- [Appendix B — Multiple Databases and Database Routers](#appendix-b-multiple-databases-and-database-routers)
- [Appendix C — ContentTypes and Generic Relations](#appendix-c-contenttypes-generic-relations-and-genericforeignkey)
- [Appendix D — Model Inheritance and Proxy Models](#appendix-d-model-inheritance-and-proxy-models)
- [Appendix E — Custom Fields, Lookups, and ORM Expressions](#appendix-e-custom-fields-lookups-transforms-and-orm-expressions)
- [Appendix F — Serialization, Fixtures, and Natural Keys](#appendix-f-serialization-fixtures-natural-keys-and-data-import)
- [Appendix G — Important django.contrib Applications](#appendix-g-important-djangocontrib-applications)
- [Appendix H — GeoDjango](#appendix-h-geodjango)
- [Appendix I — Conditional Responses, Streaming, and HTTP Utilities](#appendix-i-conditional-responses-streaming-decorators-and-http-utilities)
- [Appendix J — Reusable Django Apps and Packaging](#appendix-j-reusable-django-apps-and-packaging)
- [Appendix K — WebSockets and Django Channels](#appendix-k-websockets-and-django-channels)
- [Appendix L — Modern Django 6.x Notes](#appendix-l-modern-django-6x-notes)

---

# 1. How to Use This Handbook

Do not try to memorize Django. Learn it in this order:

1. Understand the **request → URL → view → model → template → response** flow.
2. Build small CRUD applications.
3. Learn the ORM properly.
4. Learn forms and validation.
5. Learn authentication and authorization.
6. Learn testing.
7. Learn security.
8. Learn performance and deployment.
9. Then focus on architecture patterns and advanced optimization.

For every topic ask:

- **What is it?**
- **Why does it exist?**
- **When should I use it?**
- **How does Django implement it?**
- **What can go wrong?**
- **How would this appear in a real project?**

Examples throughout this handbook use blogs, employee portals, e-commerce, invoices, approval workflows, APIs, and SaaS systems.

---

# 2. What Django Is

Django is a high-level Python web framework used to build web applications. Instead of making you manually implement common web infrastructure, Django provides built-in solutions for:

- URL routing
- HTML rendering
- database access and ORM
- forms and validation
- authentication and authorization
- sessions and cookies
- admin panel
- caching
- middleware
- security protections
- testing
- email
- localization
- static files
- file uploads
- WSGI/ASGI deployment interfaces
- modern background-task definitions

Django is especially strong for business applications, admin-heavy systems, SaaS products, e-commerce, content platforms, dashboards, APIs, approval/workflow systems, ERP-style applications, and internal enterprise tools.

Django may be unnecessary for tiny scripts, frontend-only applications, or cases where a deliberately minimal framework is preferable.

---

# 3. Prerequisites

Before learning Django deeply, understand:

## 3.1 Python

```python
name = "Alex"
numbers = [1, 2, 3]

user = {"name": "Alex", "email": "alex@example.com"}

def greet(name):
    return f"Hello {name}"

class Employee:
    def __init__(self, name):
        self.name = name
```

Important topics:

- variables and data types
- lists, tuples, dictionaries, sets
- loops and conditions
- functions
- classes and inheritance
- decorators
- exceptions
- modules and packages
- virtual environments
- context managers
- comprehensions
- type hints
- async/await

## 3.2 HTML

```html
<form method="post">
    <input type="text" name="username">
    <button type="submit">Save</button>
</form>
```

## 3.3 HTTP

Understand request, response, URL, headers, cookies, status codes, and the HTTP methods GET, POST, PUT, PATCH, and DELETE.

```text
GET /products/42/
POST /login/
PATCH /api/users/15/
DELETE /api/orders/91/
```

## 3.4 SQL and relational databases

```sql
SELECT * FROM product;
INSERT INTO product(name, price) VALUES ('Mouse', 999);
UPDATE product SET price = 899 WHERE id = 1;
DELETE FROM product WHERE id = 1;
```

Know table, row, column, primary key, foreign key, unique constraint, index, join, and transaction. Django's ORM generates SQL, but SQL knowledge makes you much stronger at debugging and performance work.

---

# 4. Django Architecture and Mental Model

Django is commonly described using **MTV**:

- **Model** — data and database behavior
- **Template** — presentation
- **View** — request-handling logic

A simplified lifecycle is:

```text
Browser
   |
   v
Web Server
   |
   v
Django Middleware
   |
   v
URL Resolver
   |
   v
View
   |
   +----> Model / ORM ----> Database
   |
   +----> Services / APIs
   |
   v
Template or JSON Response
   |
   v
Middleware
   |
   v
Browser
```

Example:

```text
GET /products/10/
 -> urls.py
 -> product_detail view
 -> Product.objects.get(pk=10)
 -> render("products/detail.html", {"product": product})
 -> HTTP 200 response
```

Understanding this flow makes debugging systematic rather than random.

---

# 5. Environment Setup

## 5.1 Create a virtual environment

Windows:

```powershell
py -m venv .venv
.venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

A virtual environment keeps each project's dependencies isolated.

## 5.2 Install Django

```bash
python -m pip install Django
```

Or pin a release:

```bash
python -m pip install "Django==6.1"
```

Check:

```bash
python -m django --version
```

## 5.3 Dependency file

```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

Larger teams may use `uv`, Poetry, pip-tools, or other lockfile workflows.

---

# 6. Your First Django Project

```bash
mkdir django-master-project
cd django-master-project
django-admin startproject config .
python manage.py runserver
```

Structure:

```text
django-master-project/
├── manage.py
└── config/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

Development URL:

```text
http://127.0.0.1:8000/
```

`runserver` is for development, not production.

---

# 7. Projects vs Apps

A **project** is the complete site's configuration. An **app** is a cohesive functional module.

Example:

```text
company_portal/
├── accounts/
├── employees/
├── attendance/
├── invoices/
├── approvals/
└── reports/
```

Create an app:

```bash
python manage.py startapp products
```

Typical app:

```text
products/
├── migrations/
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── tests.py
└── views.py
```

Common additions:

```text
forms.py
urls.py
services.py
selectors.py
validators.py
tasks.py
signals.py
```

Organize apps around business capabilities, not blindly one app per database table.

---

# 8. Django Project Structure

A scalable structure might become:

```text
project/
├── manage.py
├── requirements/
│   ├── base.txt
│   ├── dev.txt
│   └── prod.txt
├── config/
│   ├── settings/
│   │   ├── base.py
│   │   ├── local.py
│   │   └── production.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── apps/
│   ├── accounts/
│   ├── orders/
│   └── billing/
├── templates/
├── static/
├── media/
└── tests/
```

Start simple. Add structure when it provides real value.

---

# 9. Settings and Configuration

Typical settings include:

```python
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]
```

## 9.1 Local apps

```python
INSTALLED_APPS += [
    "products",
    "orders",
]
```

## 9.2 Debug

Development:

```python
DEBUG = True
```

Production:

```python
DEBUG = False
```

Never expose production debug pages publicly.

## 9.3 Hosts

```python
ALLOWED_HOSTS = [
    "example.com",
    "www.example.com",
]
```

## 9.4 Database

SQLite:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

PostgreSQL:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "myapp",
        "USER": "myapp_user",
        "PASSWORD": "secret",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

Do not commit production secrets.

## 9.5 Environment variables

```python
import os

SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]
DEBUG = os.getenv("DJANGO_DEBUG", "false").lower() == "true"
```

## 9.6 Split settings

```text
config/settings/
├── base.py
├── local.py
├── test.py
└── production.py
```

Configuration belongs in settings/environment. Business logic does not.

---

# 10. URL Routing

Project:

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("products/", include("products.urls")),
]
```

App:

```python
from django.urls import path
from . import views

app_name = "products"

urlpatterns = [
    path("", views.product_list, name="list"),
    path("<int:pk>/", views.product_detail, name="detail"),
]
```

## 10.1 Converters

```python
path("<int:pk>/", view)
path("<str:username>/", view)
path("<slug:slug>/", view)
path("<uuid:id>/", view)
path("<path:file_path>/", view)
```

## 10.2 Named URLs

Prefer:

```html
<a href="{% url 'products:detail' product.pk %}">View</a>
```

over hard-coded URLs.

Python:

```python
from django.urls import reverse
url = reverse("products:detail", args=[product.pk])
```

Namespaces prevent collisions such as `products:list` and `orders:list`.

---

# 11. Requests and Responses

A view receives `HttpRequest` and returns `HttpResponse`.

```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello Django")
```

Useful request data:

```python
request.method
request.GET
request.POST
request.FILES
request.COOKIES
request.headers
request.user
request.session
request.path
request.body
```

Query:

```text
/products/?category=laptop&page=2
```

```python
category = request.GET.get("category")
page = request.GET.get("page", "1")
```

JSON:

```python
from django.http import JsonResponse
return JsonResponse({"status": "success", "id": 10})
```

Important status codes:

```text
200 OK
201 Created
204 No Content
301/302 Redirect
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
500 Internal Server Error
```

---

# 12. Function-Based Views

```python
from django.shortcuts import render

def product_list(request):
    return render(request, "products/list.html")
```

Detail:

```python
from django.shortcuts import get_object_or_404

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, "products/detail.html", {"product": product})
```

Create:

```python
from django.shortcuts import redirect

def product_create(request):
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("products:list")
    else:
        form = ProductForm()

    return render(request, "products/form.html", {"form": form})
```

FBVs are explicit and excellent for custom workflows.

---

# 13. Class-Based Views

```python
from django.views import View
from django.http import HttpResponse

class HomeView(View):
    def get(self, request):
        return HttpResponse("Home")
```

URL:

```python
path("", HomeView.as_view(), name="home")
```

## 13.1 Generic views

```python
from django.views.generic import ListView

class ProductListView(ListView):
    model = Product
    template_name = "products/list.html"
    context_object_name = "products"
    paginate_by = 20
```

```python
from django.views.generic import DetailView

class ProductDetailView(DetailView):
    model = Product
    template_name = "products/detail.html"
```

```python
from django.views.generic import CreateView
from django.urls import reverse_lazy

class ProductCreateView(CreateView):
    model = Product
    fields = ["name", "price"]
    template_name = "products/form.html"
    success_url = reverse_lazy("products:list")
```

Similar generic classes exist for update and delete flows.

## 13.2 Mixins

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class OrderListView(LoginRequiredMixin, ListView):
    model = Order
```

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class InvoiceApproveView(PermissionRequiredMixin, View):
    permission_required = "invoices.approve_invoice"
```

Use FBVs when custom control flow is clearest. Use CBVs when reusable behavior genuinely removes duplication.

---

# 14. Templates

View:

```python
def product_list(request):
    products = Product.objects.all()
    return render(request, "products/list.html", {"products": products})
```

Template:

```html
<h1>Products</h1>

{% for product in products %}
    <p>{{ product.name }} - {{ product.price }}</p>
{% empty %}
    <p>No products found.</p>
{% endfor %}
```

Conditions:

```html
{% if user.is_authenticated %}
    Welcome, {{ user.username }}
{% else %}
    Please log in.
{% endif %}
```

Inheritance:

```html
<!-- base.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
```

```html
{% extends "base.html" %}

{% block title %}Products{% endblock %}

{% block content %}
    <h1>Products</h1>
{% endblock %}
```

Include:

```html
{% include "components/navbar.html" %}
```

Filters:

```html
{{ name|upper }}
{{ description|truncatewords:20 }}
{{ created_at|date:"Y-m-d" }}
```

Custom filter:

```python
from django import template

register = template.Library()

@register.filter
def inr(value):
    return f"₹{value:,.2f}"
```

Auto-escaping protects HTML output by default. Use `|safe` only for trusted/sanitized content.

Modern Django also supports template partials, useful for reusable cards, table rows, and HTMX-style fragments.

---

# 15. Static Files and Media Files

**Static files** are application assets such as CSS, JavaScript, icons, and logos.

**Media files** are user uploads such as profile images, invoice PDFs, and attachments.

```python
STATIC_URL = "static/"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
```

Template:

```html
{% load static %}
<link rel="stylesheet" href="{% static 'css/app.css' %}">
```

Production static collection:

```bash
python manage.py collectstatic
```

Production media is normally served from dedicated/object storage or a web server, not through ordinary Django views.

---

# 16. Models

```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
```

Common fields:

```python
models.CharField(max_length=200)
models.TextField()
models.IntegerField()
models.PositiveIntegerField()
models.DecimalField(max_digits=12, decimal_places=2)
models.BooleanField(default=True)
models.DateField()
models.DateTimeField()
models.EmailField()
models.URLField()
models.UUIDField()
models.JSONField()
models.FileField()
models.ImageField()
```

For money, normally prefer `DecimalField` instead of floating point.

## 16.1 `null` vs `blank`

`blank=True` controls validation-level emptiness.

`null=True` allows database `NULL`.

Optional string:

```python
middle_name = models.CharField(max_length=100, blank=True)
```

Optional date:

```python
cancelled_at = models.DateTimeField(null=True, blank=True)
```

## 16.2 Defaults

```python
status = models.CharField(max_length=20, default="draft")
```

Callable:

```python
import uuid
token = models.UUIDField(default=uuid.uuid4)
```

Pass the callable, not `uuid.uuid4()`.

## 16.3 Choices

```python
class Invoice(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PENDING = "pending", "Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    status = models.CharField(
        max_length=20,
        choices=Status,
        default=Status.DRAFT,
    )
```

## 16.4 Model methods

```python
class Invoice(models.Model):
    subtotal = models.DecimalField(max_digits=12, decimal_places=2)
    tax = models.DecimalField(max_digits=12, decimal_places=2)

    @property
    def total(self):
        return self.subtotal + self.tax
```

## 16.5 Meta, indexes, constraints

```python
class Product(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField()

    class Meta:
        ordering = ["name"]
        indexes = [
            models.Index(fields=["status", "-created_at"]),
        ]
```

Unique business rule:

```python
class Meta:
    constraints = [
        models.UniqueConstraint(
            fields=["company", "invoice_number"],
            name="unique_invoice_per_company",
        ),
    ]
```

Check:

```python
class Meta:
    constraints = [
        models.CheckConstraint(
            condition=models.Q(price__gte=0),
            name="price_non_negative",
        ),
    ]
```

Database constraints protect integrity even if application validation is bypassed.

## 16.6 JSONField

```python
metadata = models.JSONField(default=dict, blank=True)
```

Good for flexible metadata. Do not use JSON to avoid proper relational design.

## 16.7 Generated fields

Modern Django can represent database-generated fields on supported databases:

```python
from django.db.models import F

total = models.GeneratedField(
    expression=F("quantity") * F("unit_price"),
    output_field=models.DecimalField(max_digits=12, decimal_places=2),
    db_persist=True,
)
```

## 16.8 Composite primary keys

Modern Django supports composite-primary-key use cases. Before using them, verify compatibility with your admin usage, relations, third-party packages, and serializers. A normal surrogate ID plus a unique business constraint is still often simpler.

---

# 17. Model Relationships

## 17.1 ForeignKey — many-to-one

```python
class Customer(models.Model):
    name = models.CharField(max_length=200)

class Order(models.Model):
    customer = models.ForeignKey(
        Customer,
        on_delete=models.PROTECT,
        related_name="orders",
    )
```

```python
order.customer
customer.orders.all()
```

Common deletion behaviors:

- `CASCADE` — delete dependent objects
- `PROTECT` — block deletion
- `SET_NULL` — preserve child, null the relation
- `SET_DEFAULT` — assign default
- `DO_NOTHING` — Django performs no related action

Choose based on business meaning, not convenience.

## 17.2 OneToOneField

```python
class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )
```

## 17.3 ManyToManyField

```python
class Tag(models.Model):
    name = models.CharField(max_length=50)

class Product(models.Model):
    tags = models.ManyToManyField(Tag, related_name="products")
```

```python
product.tags.add(tag)
product.tags.remove(tag)
product.tags.all()
tag.products.all()
```

## 17.4 Through model

Use when the relationship has its own attributes.

```python
class Employee(models.Model):
    name = models.CharField(max_length=200)

class Project(models.Model):
    name = models.CharField(max_length=200)
    employees = models.ManyToManyField(
        Employee,
        through="ProjectMembership",
    )

class ProjectMembership(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    role = models.CharField(max_length=100)
    joined_at = models.DateField()
```

## 17.5 Self relationship

```python
class Employee(models.Model):
    name = models.CharField(max_length=200)
    manager = models.ForeignKey(
        "self",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="direct_reports",
    )
```

---
# 18. Django ORM

The Django ORM lets you query relational databases using Python objects instead of manually writing SQL for normal operations.

Think of:

```python
Product.objects.filter(is_active=True)
```

as roughly representing:

```sql
SELECT *
FROM product
WHERE is_active = TRUE;
```

The ORM is not a replacement for database knowledge. It is a structured abstraction over database access.

## 18.1 Create

```python
product = Product.objects.create(
    name="Mechanical Keyboard",
    price="4999.00",
)
```

Or:

```python
product = Product(
    name="Mechanical Keyboard",
    price="4999.00",
)
product.save()
```

## 18.2 Read all rows

```python
products = Product.objects.all()
```

A `QuerySet` is lazy. Creating it normally does not immediately execute the SQL.

```python
qs = Product.objects.filter(is_active=True)
```

The query is typically evaluated when Django actually needs the rows, for example when iterating, converting to a list, counting in certain ways, or rendering results.

## 18.3 Get one row

```python
product = Product.objects.get(pk=10)
```

Possible exceptions:

```python
Product.DoesNotExist
Product.MultipleObjectsReturned
```

In a view, often use:

```python
from django.shortcuts import get_object_or_404
product = get_object_or_404(Product, pk=10)
```

## 18.4 Filter

```python
Product.objects.filter(is_active=True)
```

Multiple conditions are ANDed:

```python
Product.objects.filter(
    is_active=True,
    price__gte=1000,
)
```

## 18.5 Exclude

```python
Product.objects.exclude(status="deleted")
```

## 18.6 Common field lookups

```python
Product.objects.filter(price__gt=1000)
Product.objects.filter(price__gte=1000)
Product.objects.filter(price__lt=5000)
Product.objects.filter(price__lte=5000)
Product.objects.filter(name__contains="Phone")
Product.objects.filter(name__icontains="phone")
Product.objects.filter(name__startswith="Pro")
Product.objects.filter(name__istartswith="pro")
Product.objects.filter(id__in=[1, 2, 5])
Product.objects.filter(category__isnull=True)
Product.objects.filter(created_at__date=date.today())
Product.objects.filter(created_at__year=2026)
```

## 18.7 Ordering

```python
Product.objects.order_by("name")
Product.objects.order_by("-created_at")
Product.objects.order_by("category", "-price")
```

## 18.8 Limit and slice

```python
Product.objects.all()[:10]
Product.objects.all()[10:20]
```

This becomes database-level limiting/offset behavior where supported.

## 18.9 First and last

```python
Product.objects.order_by("created_at").first()
Product.objects.order_by("created_at").last()
```

## 18.10 Exists

Use when you only need to know whether at least one row exists:

```python
exists = Product.objects.filter(sku="ABC-100").exists()
```

Do not fetch every matching object just to test truthiness.

## 18.11 Count

```python
count = Product.objects.filter(is_active=True).count()
```

## 18.12 Update

Single object:

```python
product.price = "4599.00"
product.save(update_fields=["price"])
```

Bulk update through queryset:

```python
Product.objects.filter(category="old").update(is_active=False)
```

`QuerySet.update()` operates directly in SQL and does not behave exactly like calling `save()` on each object. Understand signals and model-method implications before using it.

## 18.13 Delete

```python
product.delete()
```

Bulk:

```python
Product.objects.filter(is_active=False).delete()
```

Deletion may cascade according to relationships.

## 18.14 `values()`

```python
Product.objects.values("id", "name", "price")
```

Returns dictionaries rather than model instances.

Example:

```python
{
    "id": 1,
    "name": "Keyboard",
    "price": Decimal("4999.00"),
}
```

Useful when you need selected fields and do not need model behavior.

## 18.15 `values_list()`

```python
Product.objects.values_list("id", "name")
```

Single flat column:

```python
Product.objects.values_list("id", flat=True)
```

## 18.16 `get_or_create()`

```python
customer, created = Customer.objects.get_or_create(
    email="alex@example.com",
    defaults={"name": "Alex"},
)
```

Useful when the operation is logically “find this object, otherwise create it.” Make sure the identifying fields have appropriate database uniqueness where concurrency matters.

## 18.17 `update_or_create()`

```python
customer, created = Customer.objects.update_or_create(
    email="alex@example.com",
    defaults={"name": "Alex Smith"},
)
```

## 18.18 Bulk create

```python
Product.objects.bulk_create([
    Product(name="Mouse", price="999.00"),
    Product(name="Keyboard", price="1999.00"),
])
```

Useful for large inserts, but know the documented limitations for your Django/database version.

## 18.19 Bulk update

```python
products = list(Product.objects.filter(category="clearance"))

for product in products:
    product.is_active = False

Product.objects.bulk_update(products, ["is_active"])
```

## 18.20 Relationship filtering

Orders for customer email:

```python
Order.objects.filter(customer__email="alex@example.com")
```

Products containing a tag:

```python
Product.objects.filter(tags__name="gaming")
```

Django follows relationships using double underscores.

## 18.21 `distinct()`

Joins can create duplicate logical rows.

```python
Product.objects.filter(tags__name__icontains="game").distinct()
```

Use only where required; `DISTINCT` can have a performance cost.

## 18.22 Custom managers

```python
class ActiveProductManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

class Product(models.Model):
    is_active = models.BooleanField(default=True)

    objects = models.Manager()
    active = ActiveProductManager()
```

Usage:

```python
Product.active.all()
```

## 18.23 Custom QuerySet

Often better than putting every query on a manager:

```python
class InvoiceQuerySet(models.QuerySet):
    def pending(self):
        return self.filter(status="pending")

    def for_company(self, company):
        return self.filter(company=company)

class Invoice(models.Model):
    objects = InvoiceQuerySet.as_manager()
```

Then:

```python
Invoice.objects.pending().for_company(company)
```

This produces readable, reusable domain queries.

---

# 19. Advanced ORM

Advanced ORM knowledge is one of the biggest differences between beginner and experienced Django developers.

# 19.1 `Q` objects

Use for OR, NOT, and dynamic logical conditions.

```python
from django.db.models import Q

Product.objects.filter(
    Q(name__icontains="laptop") |
    Q(description__icontains="laptop")
)
```

NOT:

```python
Product.objects.filter(~Q(status="deleted"))
```

Combination:

```python
Product.objects.filter(
    Q(category="laptop") &
    (Q(price__lt=50000) | Q(is_featured=True))
)
```

Scenario: search page

```python
def search_products(term):
    return Product.objects.filter(
        Q(name__icontains=term) |
        Q(sku__icontains=term) |
        Q(description__icontains=term)
    )
```

# 19.2 `F` expressions

`F()` refers to a database column.

Instead of:

```python
product.stock = product.stock - 1
product.save()
```

use:

```python
from django.db.models import F

Product.objects.filter(pk=product_id).update(
    stock=F("stock") - 1
)
```

This makes the arithmetic happen in the database and avoids some read-modify-write race conditions.

Compare columns:

```python
Invoice.objects.filter(paid_amount__lt=F("total_amount"))
```

# 19.3 Aggregation

```python
from django.db.models import Avg, Count, Max, Min, Sum

result = Order.objects.aggregate(
    total=Sum("amount"),
    average=Avg("amount"),
    count=Count("id"),
)
```

Result:

```python
{
    "total": Decimal("150000.00"),
    "average": Decimal("1500.00"),
    "count": 100,
}
```

# 19.4 Annotation

Attach calculated values to each result.

```python
from django.db.models import Count

customers = Customer.objects.annotate(
    order_count=Count("orders")
)

for customer in customers:
    print(customer.name, customer.order_count)
```

Scenario: dashboard

```python
projects = Project.objects.annotate(
    member_count=Count("employees", distinct=True)
)
```

# 19.5 Conditional expressions

```python
from django.db.models import Case, CharField, Value, When

invoices = Invoice.objects.annotate(
    risk_label=Case(
        When(total__gte=1000000, then=Value("high")),
        When(total__gte=100000, then=Value("medium")),
        default=Value("low"),
        output_field=CharField(),
    )
)
```

# 19.6 Database functions

Examples include:

```python
from django.db.models.functions import Coalesce, Lower

Product.objects.annotate(
    normalized_name=Lower("name")
)
```

```python
Order.objects.annotate(
    safe_discount=Coalesce("discount", 0)
)
```

# 19.7 Subquery

Suppose you want each customer annotated with their latest order amount.

```python
from django.db.models import OuterRef, Subquery

latest_order = Order.objects.filter(
    customer=OuterRef("pk")
).order_by("-created_at")

customers = Customer.objects.annotate(
    latest_order_amount=Subquery(
        latest_order.values("amount")[:1]
    )
)
```

Subqueries are powerful but can become complex. Inspect the generated SQL and execution plan for performance-critical queries.

# 19.8 `Exists`

```python
from django.db.models import Exists, OuterRef

unpaid_orders = Order.objects.filter(
    customer=OuterRef("pk"),
    status="unpaid",
)

customers = Customer.objects.annotate(
    has_unpaid_orders=Exists(unpaid_orders)
)
```

# 19.9 `select_related()`

Use for single-valued relationships such as `ForeignKey` and `OneToOneField`.

Bad N+1 pattern:

```python
orders = Order.objects.all()

for order in orders:
    print(order.customer.name)
```

This may execute:

```text
1 query for orders
+ 1 query per order for customer
```

Better:

```python
orders = Order.objects.select_related("customer")
```

This normally performs a SQL join.

# 19.10 `prefetch_related()`

Use for many-valued relationships such as reverse foreign keys and many-to-many relations.

```python
customers = Customer.objects.prefetch_related("orders")
```

Then:

```python
for customer in customers:
    for order in customer.orders.all():
        ...
```

Django usually uses separate queries and connects objects in Python.

## Custom prefetch

```python
from django.db.models import Prefetch

customers = Customer.objects.prefetch_related(
    Prefetch(
        "orders",
        queryset=Order.objects.filter(status="paid").order_by("-created_at"),
        to_attr="paid_orders",
    )
)
```

Usage:

```python
customer.paid_orders
```

# 19.11 `only()` and `defer()`

```python
Product.objects.only("id", "name")
```

```python
Product.objects.defer("large_description")
```

These can reduce initial column loading but may accidentally create extra queries when deferred fields are later accessed.

Modern Django 6.1 introduces configurable field fetch modes. These can help control how unfetched fields behave, including fetching peer instances together or raising rather than silently issuing an unexpected query. Treat these as advanced performance tools, not something every query needs.

# 19.12 Inspect SQL

```python
qs = Product.objects.filter(price__gte=1000)
print(qs.query)
```

Use this when learning and debugging.

# 19.13 Query plan

```python
print(
    Product.objects
    .filter(price__gte=1000)
    .explain()
)
```

Database execution plans help answer:

- Is an index used?
- Is a table scan happening?
- Is the join strategy expensive?
- Is sorting dominating the query?

# 19.14 Raw SQL

Use the ORM by default, but raw SQL is valid when it is genuinely a better fit.

```python
products = Product.objects.raw(
    "SELECT id, name, price FROM products_product WHERE price > %s",
    [1000],
)
```

For cursor-level access:

```python
from django.db import connection

with connection.cursor() as cursor:
    cursor.execute(
        "SELECT COUNT(*) FROM products_product WHERE is_active = %s",
        [True],
    )
    count = cursor.fetchone()[0]
```

Always parameterize values. Never build SQL by concatenating untrusted input.

---

# 20. Transactions and Concurrency

Transactions make multiple database operations behave as one logical unit.

Suppose an order checkout must:

1. create order
2. reserve stock
3. create payment record

If step 3 fails, you may need steps 1 and 2 rolled back.

## 20.1 `transaction.atomic()`

```python
from django.db import transaction

@transaction.atomic
def place_order(customer, items):
    order = Order.objects.create(customer=customer)

    for item in items:
        OrderItem.objects.create(
            order=order,
            product=item.product,
            quantity=item.quantity,
        )

    Payment.objects.create(
        order=order,
        status="pending",
    )

    return order
```

If an exception escapes the atomic block, the transaction is rolled back.

Context-manager form:

```python
with transaction.atomic():
    ...
```

## 20.2 Never swallow database errors inside an atomic block carelessly

Bad pattern:

```python
with transaction.atomic():
    try:
        dangerous_database_operation()
    except Exception:
        pass
```

This can leave transaction state confusing/broken. Structure exception handling according to Django's documented transaction behavior.

## 20.3 `select_for_update()`

Scenario: two customers try to buy the final item at the same time.

```python
from django.db import transaction

@transaction.atomic
def reserve_stock(product_id, quantity):
    product = (
        Product.objects
        .select_for_update()
        .get(pk=product_id)
    )

    if product.stock < quantity:
        raise ValueError("Insufficient stock")

    product.stock -= quantity
    product.save(update_fields=["stock"])
```

The selected row can be locked until the transaction ends, depending on database behavior.

## 20.4 Race condition example

Unsafe:

```python
product = Product.objects.get(pk=1)
if product.stock > 0:
    product.stock -= 1
    product.save()
```

Two requests can both read stock `1`, both pass the condition, and both update.

Possible tools:

- database constraints
- `F()` expressions
- transactions
- row locking
- optimistic concurrency/version columns
- idempotency keys

Choose according to the business rule.

## 20.5 `on_commit()`

Suppose you send an email immediately after creating an invoice. If the transaction later rolls back, the user could receive an email for an invoice that does not exist.

Use:

```python
from django.db import transaction

with transaction.atomic():
    invoice = Invoice.objects.create(...)

    transaction.on_commit(
        lambda: send_invoice_created_email(invoice.pk)
    )
```

This is especially important when queueing background work that depends on committed data.

---

# 21. Migrations

Migrations are version-controlled descriptions of database schema changes.

When you change:

```python
class Product(models.Model):
    name = models.CharField(max_length=200)
```

to:

```python
class Product(models.Model):
    name = models.CharField(max_length=200)
    sku = models.CharField(max_length=50, unique=True)
```

create a migration:

```bash
python manage.py makemigrations
```

Apply:

```bash
python manage.py migrate
```

## 21.1 Inspect migration status

```bash
python manage.py showmigrations
```

## 21.2 Inspect SQL

```bash
python manage.py sqlmigrate products 0002
```

## 21.3 Data migration

Sometimes you need to transform existing rows.

```python
from django.db import migrations


def populate_normalized_name(apps, schema_editor):
    Product = apps.get_model("products", "Product")

    for product in Product.objects.iterator():
        product.normalized_name = product.name.lower()
        product.save(update_fields=["normalized_name"])


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0003_product_normalized_name"),
    ]

    operations = [
        migrations.RunPython(
            populate_normalized_name,
            migrations.RunPython.noop,
        ),
    ]
```

In migrations, use the historical model from `apps.get_model()` rather than importing the current model directly.

## 21.4 Schema migration strategy for large tables

Adding a non-null column with a default to a very large production table can be expensive.

A safer staged pattern may be:

1. add nullable column
2. deploy
3. backfill gradually
4. enforce application behavior
5. add constraint / make non-null

Exact strategy depends on database and traffic.

## 21.5 Merge conflicts

Two branches may each create migrations from the same parent.

Possible result:

```text
0005_add_discount.py
0005_add_tax.py
```

Django can create a merge migration when appropriate:

```bash
python manage.py makemigrations --merge
```

But never blindly merge incompatible schema histories without reading the operations.

## 21.6 Do not edit applied migrations casually

Once a migration has been applied in shared environments, changing its historical meaning can break consistency. Prefer a new migration unless you understand exactly what you are doing.

## 21.7 Squashing

Long-lived projects may have hundreds of migrations. Django supports migration squashing.

```bash
python manage.py squashmigrations app_name 0100
```

Treat migration history as production infrastructure.

---

# 22. Forms

Django forms handle:

- input definition
- validation
- cleaned data
- error messages
- HTML rendering
- security-related form conventions

## 22.1 Basic form

```python
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)
```

View:

```python
def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            message = form.cleaned_data["message"]
            # process data
    else:
        form = ContactForm()

    return render(request, "contact.html", {"form": form})
```

Template:

```html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Send</button>
</form>
```

## 22.2 Bound and unbound forms

Unbound:

```python
form = ContactForm()
```

Bound:

```python
form = ContactForm(request.POST)
```

Bound forms can be validated.

## 22.3 `cleaned_data`

After:

```python
form.is_valid()
```

use:

```python
form.cleaned_data
```

Do not trust raw `request.POST` when form validation is supposed to define valid input.

## 22.4 Field validation

```python
class RegistrationForm(forms.Form):
    age = forms.IntegerField(min_value=18)
```

## 22.5 `clean_<field>()`

```python
class InvoiceForm(forms.Form):
    invoice_number = forms.CharField()

    def clean_invoice_number(self):
        value = self.cleaned_data["invoice_number"].strip()

        if value.startswith("TEST-"):
            raise forms.ValidationError(
                "Test invoice numbers are not allowed."
            )

        return value
```

## 22.6 Cross-field validation with `clean()`

```python
class DateRangeForm(forms.Form):
    start_date = forms.DateField()
    end_date = forms.DateField()

    def clean(self):
        cleaned = super().clean()
        start = cleaned.get("start_date")
        end = cleaned.get("end_date")

        if start and end and end < start:
            raise forms.ValidationError(
                "End date cannot be before start date."
            )

        return cleaned
```

## 22.7 Widgets

```python
class ContactForm(forms.Form):
    message = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 5,
            "class": "form-control",
        })
    )
```

A widget controls rendering, not the business meaning of the field.

## 22.8 File forms

Form:

```python
class UploadForm(forms.Form):
    document = forms.FileField()
```

View:

```python
form = UploadForm(request.POST, request.FILES)
```

Template:

```html
<form method="post" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <button>Upload</button>
</form>
```

Missing `multipart/form-data` is a classic beginner bug.

---

# 23. ModelForms

A `ModelForm` creates form fields from a model.

```python
from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            "name",
            "price",
            "is_active",
        ]
```

View:

```python
def create_product(request):
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            product = form.save()
            return redirect("products:detail", pk=product.pk)
    else:
        form = ProductForm()

    return render(request, "products/form.html", {"form": form})
```

## 23.1 Update instance

```python
product = get_object_or_404(Product, pk=pk)
form = ProductForm(request.POST or None, instance=product)
```

## 23.2 `commit=False`

Use when you need to set fields not exposed in the form.

```python
if form.is_valid():
    invoice = form.save(commit=False)
    invoice.created_by = request.user
    invoice.save()
    form.save_m2m()
```

If the form has many-to-many fields and you used `commit=False`, call `save_m2m()` after saving the instance.

## 23.3 Explicit fields are safer

Prefer:

```python
fields = ["name", "price"]
```

over carelessly exposing all fields:

```python
fields = "__all__"
```

Especially for models containing fields such as:

```text
approved_by
is_admin
is_verified
owner
created_by
payment_status
```

Never let users submit privileged fields merely because a ModelForm generated them.

---

# 24. Formsets and Inline Formsets

A formset manages multiple forms of the same type.

Scenario: create several invoice line items on one page.

```python
from django.forms import formset_factory

LineFormSet = formset_factory(
    InvoiceLineForm,
    extra=3,
)
```

Template must include management form:

```html
{{ formset.management_form }}

{% for form in formset %}
    {{ form.as_p }}
{% endfor %}
```

Without the management form, formset validation fails.

## 24.1 Model formset

```python
from django.forms import modelformset_factory

ProductFormSet = modelformset_factory(
    Product,
    fields=["name", "price"],
    extra=1,
)
```

## 24.2 Inline formset

Parent:

```text
Invoice
```

Children:

```text
InvoiceLine
```

```python
from django.forms import inlineformset_factory

InvoiceLineFormSet = inlineformset_factory(
    Invoice,
    InvoiceLine,
    fields=["description", "quantity", "unit_price"],
    extra=1,
    can_delete=True,
)
```

Use transactions when saving a parent and multiple children that must stay consistent.

---

# 25. Django Admin

Django admin is a powerful internal management interface built from your models.

Register:

```python
from django.contrib import admin
from .models import Product

admin.site.register(Product)
```

Better:

```python
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "price",
        "is_active",
        "created_at",
    ]
    list_filter = ["is_active"]
    search_fields = ["name"]
    ordering = ["name"]
```

## 25.1 Useful options

```python
list_display
list_filter
search_fields
ordering
readonly_fields
fieldsets
list_select_related
autocomplete_fields
raw_id_fields
date_hierarchy
list_per_page
```

## 25.2 Inline admin

```python
class InvoiceLineInline(admin.TabularInline):
    model = InvoiceLine
    extra = 0

@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):
    inlines = [InvoiceLineInline]
```

## 25.3 Admin actions

```python
@admin.action(description="Mark selected products active")
def mark_active(modeladmin, request, queryset):
    queryset.update(is_active=True)
```

## 25.4 Admin is not automatically your customer-facing UI

Admin is excellent for trusted internal users. It is not always the right product experience for end customers or complex business workflows.

## 25.5 Admin security

Protect admin with:

- strong authentication
- least privilege
- secure HTTPS
- restricted permissions
- audit trails where needed
- rate limiting/reverse proxy protections where appropriate
- possibly network/VPN restrictions for sensitive systems

---

# 26. Authentication

Authentication answers:

> Who is this user?

Django includes a full authentication system.

## 26.1 Create superuser

```bash
python manage.py createsuperuser
```

## 26.2 Login

```python
from django.contrib.auth import authenticate, login

user = authenticate(
    request,
    username=username,
    password=password,
)

if user is not None:
    login(request, user)
```

Usually prefer Django's built-in auth views/forms unless you need custom behavior.

## 26.3 Logout

```python
from django.contrib.auth import logout
logout(request)
```

## 26.4 Require login

Function:

```python
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    ...
```

Class:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class DashboardView(LoginRequiredMixin, TemplateView):
    ...
```

## 26.5 Built-in auth URLs

```python
path("accounts/", include("django.contrib.auth.urls"))
```

This can provide routes for login, logout, password change, and password reset flows when the required templates are supplied.

## 26.6 `request.user`

```python
request.user.is_authenticated
request.user.is_staff
request.user.is_superuser
```

Do not use `is_staff` as a universal business role system. It primarily indicates admin-site access capability.

---

# 27. Authorization, Permissions, and Groups

Authorization answers:

> What is this authenticated user allowed to do?

Django creates default model permissions such as:

```text
add_product
change_product
delete_product
view_product
```

Check:

```python
request.user.has_perm("products.change_product")
```

Decorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required("invoices.change_invoice", raise_exception=True)
def edit_invoice(request, pk):
    ...
```

## 27.1 Groups

Groups are collections of permissions.

Example:

```text
Finance Controller
    - view invoice
    - change invoice
    - approve invoice

AP Processor
    - add invoice
    - view invoice

Auditor
    - view invoice
    - view audit log
```

Assign users to groups rather than duplicating permissions one user at a time where role-based access fits.

## 27.2 Custom permission

```python
class Invoice(models.Model):
    class Meta:
        permissions = [
            ("approve_invoice", "Can approve invoice"),
        ]
```

Check:

```python
user.has_perm("invoices.approve_invoice")
```

## 27.3 Object-level authorization

Model permission alone may be insufficient.

Scenario:

```text
Employee A may view only their own salary slip.
Manager may view direct reports.
HR may view all employees.
```

A dangerous view:

```python
salary = SalarySlip.objects.get(pk=pk)
```

Safer concept:

```python
salary = get_object_or_404(
    SalarySlip,
    pk=pk,
    employee=request.user.employee,
)
```

Filter the queryset according to authorization, not just the UI.

Hiding a button is **not security**.

## 27.4 Least privilege

Give users the minimum access required to perform their role.

---

# 28. Custom User Models

For a new serious project, deciding the user model early is important.

A common recommendation is to create a custom user model at project start, even if initially it mostly behaves like Django's default user.

Example:

```python
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    employee_code = models.CharField(
        max_length=50,
        blank=True,
    )
```

Settings:

```python
AUTH_USER_MODEL = "accounts.User"
```

Reference the user model dynamically:

Model relationship:

```python
from django.conf import settings

user = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.PROTECT,
)
```

Runtime model:

```python
from django.contrib.auth import get_user_model

User = get_user_model()
```

Avoid hard-coding imports of `django.contrib.auth.models.User` in reusable application code.

## 28.1 AbstractUser vs AbstractBaseUser

Use `AbstractUser` when:

- standard username/password behavior is mostly acceptable
- you need extra fields or modest customization

Use `AbstractBaseUser` when:

- authentication identity needs major redesign
- you understand the extra manager/admin/forms work required

Do not choose `AbstractBaseUser` merely because it sounds more advanced.

## 28.2 Email login

If email is the main identity, design uniqueness, normalization, case behavior, admin, user manager, and migration strategy carefully from the beginning.

---

# 29. Sessions and Cookies

HTTP is stateless. Sessions let the server remember user-specific state across requests.

## 29.1 Session example

```python
request.session["cart_id"] = "abc123"
```

Read:

```python
cart_id = request.session.get("cart_id")
```

Delete:

```python
del request.session["cart_id"]
```

Clear session:

```python
request.session.flush()
```

## 29.2 Cookie

```python
response = HttpResponse("OK")
response.set_cookie(
    "theme",
    "dark",
    httponly=True,
    secure=True,
    samesite="Lax",
)
return response
```

Read:

```python
theme = request.COOKIES.get("theme")
```

## 29.3 Session vs cookie

A cookie lives in the browser.

A typical server-side session stores the session data on the server and gives the browser a session identifier cookie.

Do not store sensitive secrets in ordinary browser cookies.

## 29.4 Security settings

Production often needs settings such as:

```python
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
```

Choose `SameSite` behavior according to your login/integration requirements.

---

# 30. Messages Framework

Messages are one-time notifications displayed after a request, often after redirecting.

```python
from django.contrib import messages

messages.success(request, "Product created successfully.")
messages.error(request, "Unable to save product.")
messages.warning(request, "Stock is low.")
messages.info(request, "Approval is pending.")
```

Template:

```html
{% if messages %}
    {% for message in messages %}
        <div class="alert {{ message.tags }}">
            {{ message }}
        </div>
    {% endfor %}
{% endif %}
```

Great for the POST → Redirect → GET pattern.

---

# 31. Middleware

Middleware is code that can run around Django's request/response processing.

Think of middleware as a chain:

```text
Request
 -> Security middleware
 -> Session middleware
 -> Authentication middleware
 -> Custom middleware
 -> View
 -> Custom middleware
 -> Authentication middleware
 -> ...
 -> Response
```

## 31.1 Common uses

- authentication support
- sessions
- security headers
- request logging
- correlation IDs
- tenant detection
- timing
- locale selection
- maintenance mode

## 31.2 Custom middleware

```python
import time

class RequestTimingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        started = time.perf_counter()

        response = self.get_response(request)

        elapsed = time.perf_counter() - started
        response["X-Request-Duration"] = f"{elapsed:.4f}"

        return response
```

Settings:

```python
MIDDLEWARE = [
    ...,
    "core.middleware.RequestTimingMiddleware",
]
```

## 31.3 Middleware order matters

For example, middleware needing `request.user` must execute after authentication middleware has attached it.

Do not use middleware for every business rule. Middleware should generally address cross-cutting request/response concerns.

---

# 32. Signals

Signals allow code to react when certain events happen.

Common signals:

```text
pre_save
post_save
pre_delete
post_delete
m2m_changed
request_started
request_finished
```

Example:

```python
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
```

## 32.1 Why signals can become dangerous

Signals make behavior less explicit.

A developer sees:

```python
invoice.save()
```

but hidden side effects may:

- send email
- create audit rows
- call APIs
- update workflow
- enqueue jobs

This can make debugging difficult.

## Good uses

- loosely coupled framework integration
- cache invalidation where the lifecycle is clear
- creating strictly coupled auxiliary data
- plugin-style hooks

## Often better as explicit service logic

Instead of hiding business workflow:

```python
invoice.save()
```

prefer explicit orchestration:

```python
approve_invoice(invoice=invoice, approved_by=request.user)
```

Signals are a tool, not a default architecture.

---
# 33. Files and Storage

Django separates the idea of a file from the storage backend that physically stores it.

A `FileField` stores a file reference/path in the database while the file itself lives in configured storage.

```python
class Invoice(models.Model):
    document = models.FileField(
        upload_to="invoices/%Y/%m/",
    )
```

## 33.1 Access file properties

```python
invoice.document.name
invoice.document.url
invoice.document.size
```

Depending on storage backend, not every low-level filesystem assumption is valid. For example, cloud/object storage may not provide a normal local filesystem path.

Avoid code that assumes:

```python
invoice.document.path
```

will always exist.

## 33.2 Dynamic `upload_to`

```python
def invoice_upload_path(instance, filename):
    return (
        f"companies/{instance.company_id}/"
        f"invoices/{filename}"
    )

class Invoice(models.Model):
    document = models.FileField(
        upload_to=invoice_upload_path,
    )
```

## 33.3 Storage backends

Django's storage abstraction can support different storage systems.

Typical environments:

```text
Development -> local filesystem
Production  -> S3-compatible/object storage
```

Modern Django uses the `STORAGES` setting for configured storage backends.

Concept:

```python
STORAGES = {
    "default": {
        "BACKEND": "some.storage.Backend",
    },
    "staticfiles": {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}
```

The exact backend path/options depend on the package/provider you use.

## 33.4 File upload security

Never trust only the uploaded filename or browser-supplied MIME type.

Consider:

- file size limits
- extension allowlists
- server-side type inspection
- malware scanning for sensitive systems
- random/generated storage names
- keeping uploads outside executable web roots
- authorization before downloads
- image decompression-bomb limits
- quarantining files before processing

## 33.5 Private downloads

If a document is private, do not simply expose a public media URL.

Instead, enforce access before providing the file.

Example concept:

```python
@login_required
def download_invoice(request, pk):
    invoice = get_object_or_404(
        Invoice.objects.filter(
            company=request.user.company,
        ),
        pk=pk,
    )

    return FileResponse(
        invoice.document.open("rb"),
        as_attachment=True,
        filename=f"invoice-{invoice.pk}.pdf",
    )
```

At scale, you may authenticate in Django and then issue a short-lived signed object-storage URL.

---

# 34. Email

Django provides email abstractions so application code does not need to talk directly to SMTP for ordinary cases.

Basic email:

```python
from django.core.mail import send_mail

send_mail(
    subject="Invoice approved",
    message="Your invoice has been approved.",
    from_email="noreply@example.com",
    recipient_list=["user@example.com"],
)
```

## 34.1 HTML email

```python
from django.core.mail import EmailMultiAlternatives

email = EmailMultiAlternatives(
    subject="Welcome",
    body="Welcome to our platform.",
    from_email="noreply@example.com",
    to=["user@example.com"],
)

email.attach_alternative(
    "<h1>Welcome</h1><p>Thanks for joining.</p>",
    "text/html",
)

email.send()
```

Always provide a meaningful text alternative when practical.

## 34.2 Development console backend

```python
EMAIL_BACKEND = (
    "django.core.mail.backends.console.EmailBackend"
)
```

This prints emails in the development console instead of sending them.

## 34.3 Production email

A production deployment may use:

- SMTP
- Amazon SES
- Postmark
- SendGrid
- Mailgun
- another transactional provider

Keep credentials in secrets/environment configuration.

## 34.4 Django 6.1 mailers

Django 6.1 introduces the `MAILERS` configuration model, allowing multiple named mail backends in a way similar to `DATABASES`, `CACHES`, `STORAGES`, and `TASKS`.

Conceptual configuration:

```python
MAILERS = {
    "default": {
        "BACKEND": "django.core.mail.backends.smtp.EmailBackend",
        "OPTIONS": {
            "host": "smtp.example.com",
            "use_tls": True,
        },
    },
    "marketing": {
        "BACKEND": "project.mail.MarketingBackend",
        "OPTIONS": {},
    },
}
```

This is useful when transactional and marketing messages need separate providers/configuration.

When maintaining older Django code, read the current migration/deprecation guidance around legacy `EMAIL_*` settings before changing production configuration.

## 34.5 Do not send slow email inside latency-sensitive requests

Bad user experience:

```text
POST /checkout/
 -> save order
 -> connect to SMTP
 -> send 8 emails
 -> user waits
```

Better:

```text
POST /checkout/
 -> commit order
 -> enqueue notification task
 -> respond quickly
```

Use `transaction.on_commit()` before queueing work dependent on committed rows.

---

# 35. Caching

Caching stores expensive results temporarily so they can be reused.

Possible cache backends include:

- local memory
- filesystem
- database
- Redis
- Memcached

For multi-instance production systems, a shared cache such as Redis or Memcached is common.

## 35.1 Low-level cache API

```python
from django.core.cache import cache

cache.set("product:10", {"name": "Keyboard"}, timeout=300)
value = cache.get("product:10")
cache.delete("product:10")
```

## 35.2 `get_or_set`

```python
value = cache.get_or_set(
    "dashboard:summary",
    calculate_dashboard_summary,
    timeout=60,
)
```

## 35.3 Per-view cache

```python
from django.views.decorators.cache import cache_page

@cache_page(60 * 5)
def public_catalog(request):
    ...
```

## 35.4 Template-fragment cache

```django
{% load cache %}

{% cache 300 sidebar user.id %}
    ... expensive sidebar ...
{% endcache %}
```

## 35.5 Cache key design

Bad:

```text
invoice-list
```

when output differs per company.

Better:

```text
invoice-list:company:42:page:1
```

Include every dimension that changes the cached result.

## 35.6 Cache invalidation

The difficult question is often:

> When does this cached result become stale?

Strategies:

- short TTL
- explicit delete on writes
- versioned keys
- event-driven invalidation
- cache-aside pattern

## 35.7 Never accidentally cache private responses across users

A cache key that ignores authentication/tenant context can expose one user's data to another.

Security comes before cache hit rate.

## 35.8 Cache stampede

If a popular key expires and thousands of requests recompute it simultaneously, the database may be overloaded.

Possible mitigations:

- lock/single-flight pattern
- staggered TTLs
- stale-while-revalidate pattern
- prewarming
- distributed locks where justified

---

# 36. Pagination

Never return tens of thousands of rows to a normal page when users need only a small set.

```python
from django.core.paginator import Paginator

products = Product.objects.order_by("name")
paginator = Paginator(products, 25)
page = paginator.get_page(request.GET.get("page"))
```

Template:

```html
{% for product in page %}
    {{ product.name }}
{% endfor %}

{% if page.has_previous %}
    <a href="?page={{ page.previous_page_number }}">Previous</a>
{% endif %}

Page {{ page.number }} of {{ page.paginator.num_pages }}

{% if page.has_next %}
    <a href="?page={{ page.next_page_number }}">Next</a>
{% endif %}
```

## 36.1 Preserve filters

If the URL is:

```text
/invoices/?status=pending&vendor=ABC&page=2
```

your pagination links should preserve `status` and `vendor`.

## 36.2 Offset pagination limitations

Very large offsets can be slow on some workloads:

```sql
OFFSET 500000 LIMIT 20
```

For high-volume feeds, keyset/cursor pagination may be better.

## 36.3 Async pagination

Modern Django includes async paginator support for asynchronous contexts. Use it when the surrounding stack is truly async; do not convert ordinary views to async only to use an async paginator.

---

# 37. Validation

Validation belongs at multiple layers.

A reliable design often uses:

1. **UI validation** for user experience
2. **Form/serializer validation** for input correctness
3. **Domain/service validation** for business rules
4. **Database constraints** for integrity

No single layer replaces all others.

## 37.1 Validator function

```python
from django.core.exceptions import ValidationError


def validate_positive_amount(value):
    if value <= 0:
        raise ValidationError(
            "Amount must be greater than zero."
        )
```

Model:

```python
amount = models.DecimalField(
    max_digits=12,
    decimal_places=2,
    validators=[validate_positive_amount],
)
```

## 37.2 `Model.clean()`

```python
class LeaveRequest(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()

    def clean(self):
        super().clean()
        if self.end_date < self.start_date:
            raise ValidationError({
                "end_date": "End date cannot be before start date."
            })
```

Important: calling `model.save()` does **not** automatically mean every model validation path has run. Know when `full_clean()` is invoked in your workflow.

## 37.3 Business validation belongs where the business operation occurs

Example approval rule:

```text
Invoice cannot be approved if total <= 0.
Invoice cannot be approved twice.
Approver cannot approve own invoice.
```

A service function is often clearer:

```python
def approve_invoice(*, invoice, approver):
    if invoice.status != Invoice.Status.PENDING:
        raise InvalidInvoiceState()

    if invoice.created_by_id == approver.id:
        raise SelfApprovalNotAllowed()

    ...
```

---

# 38. Management Commands

Custom management commands are excellent for operational jobs.

Examples:

```text
python manage.py import_employees employees.csv
python manage.py reconcile_invoices
python manage.py expire_sessions
python manage.py rebuild_search_index
```

Create:

```text
app/
└── management/
    └── commands/
        └── import_products.py
```

Example:

```python
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "Import products from an external source"

    def add_arguments(self, parser):
        parser.add_argument("file_path")

    def handle(self, *args, **options):
        file_path = options["file_path"]
        self.stdout.write(f"Importing {file_path}")
        # import work
        self.stdout.write(
            self.style.SUCCESS("Import completed")
        )
```

Use management commands for:

- one-time data fixes
- scheduled batch jobs
- migrations outside schema migrations
- operational maintenance
- imports/exports
- reconciliation

Make important commands idempotent where possible so retrying them does not corrupt state.

---

# 39. Logging and Error Handling

Production applications need logs that explain what happened without exposing secrets.

## 39.1 Logger

```python
import logging

logger = logging.getLogger(__name__)
```

Usage:

```python
logger.info(
    "Invoice approved",
    extra={
        "invoice_id": invoice.pk,
        "user_id": request.user.pk,
    },
)
```

Exception:

```python
try:
    external_api_call()
except ExternalAPIError:
    logger.exception("External API call failed")
    raise
```

`logger.exception()` includes stack-trace information when called inside an exception handler.

## 39.2 Logging levels

```text
DEBUG    detailed development information
INFO     normal meaningful events
WARNING  unexpected but recoverable condition
ERROR    operation failed
CRITICAL severe application/system failure
```

## 39.3 What not to log

Avoid logging:

- passwords
- full authentication tokens
- secret keys
- card details
- unnecessary personal data
- sensitive document contents

Mask/redact data where required.

## 39.4 Correlation/request IDs

A unique request ID lets you connect logs across:

```text
reverse proxy
Django request
background task
external API
```

Example log context:

```text
request_id=7ca0... invoice_id=451 user_id=82
```

## 39.5 Custom error pages

With `DEBUG=False`, configure meaningful 400/403/404/500 pages and centralized error monitoring.

## 39.6 Exception handling principle

Do not write:

```python
try:
    ...
except Exception:
    pass
```

This hides failures.

Catch exceptions when you can:

- recover
- translate them into a meaningful domain/API error
- add context and re-raise
- perform required cleanup

---

# 40. Security

Security is not one setting. It is an engineering discipline across every layer.

Django provides strong defaults and protections, but you can still build an insecure Django application.

## 40.1 CSRF

Cross-Site Request Forgery tricks a logged-in browser into sending an unwanted state-changing request.

Django templates:

```html
<form method="post">
    {% csrf_token %}
    ...
</form>
```

Do not disable CSRF protection merely to make a form work.

For JavaScript requests using session/cookie authentication, send the CSRF token according to Django's documented AJAX guidance.

## 40.2 XSS

Cross-Site Scripting occurs when attacker-controlled content becomes executable script in another user's browser.

Django templates escape variables by default:

```html
{{ comment.body }}
```

Dangerous when used carelessly:

```html
{{ comment.body|safe }}
```

If you allow rich HTML, sanitize it with a deliberately chosen HTML sanitization strategy.

## 40.3 SQL injection

ORM filters parameterize ordinary values:

```python
User.objects.filter(email=user_input)
```

Dangerous raw SQL:

```python
cursor.execute(
    "SELECT * FROM users WHERE email = '" + email + "'"
)
```

Correct:

```python
cursor.execute(
    "SELECT * FROM users WHERE email = %s",
    [email],
)
```

## 40.4 Clickjacking

Django includes clickjacking protections, such as X-Frame-Options middleware/configuration.

Use framing only when you intentionally require it.

## 40.5 HTTPS

Production should normally use HTTPS.

Possible settings:

```python
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

Behind a reverse proxy/load balancer, configure forwarded-protocol handling correctly and only when you trust the proxy.

## 40.6 HSTS

HTTP Strict Transport Security tells browsers to use HTTPS for a domain after they have received the policy.

Example concept:

```python
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
```

Do not enable long-duration/preload HSTS blindly. Misconfiguration can make HTTP-only subdomains inaccessible.

## 40.7 `SECRET_KEY`

Keep it secret and stable according to your deployment/security requirements.

Never commit real secrets to public repositories.

## 40.8 `DEBUG=False`

Production:

```python
DEBUG = False
```

A public Django technical debug page can reveal environment/configuration details.

## 40.9 `ALLOWED_HOSTS`

Set valid hosts explicitly.

## 40.10 Content Security Policy

Modern Django has built-in Content Security Policy support.

A CSP can restrict where scripts, styles, images, fonts, frames, and other resources may load from.

Conceptual policy:

```python
from django.utils.csp import CSP

SECURE_CSP = {
    "default-src": [CSP.SELF],
    "script-src": [CSP.SELF, CSP.NONCE],
    "img-src": [CSP.SELF, "https:"],
}
```

Roll out CSP carefully. A good strategy is often:

1. inventory legitimate resources
2. start report-only
3. fix violations
4. enforce policy
5. avoid unsafe exceptions unless justified

## 40.11 Passwords

Never store plaintext passwords.

Use Django authentication APIs:

```python
user.set_password(raw_password)
user.check_password(raw_password)
```

Never:

```python
user.password = raw_password
```

## 40.12 Authorization checks on every protected operation

Do not rely on:

- hidden buttons
- frontend routes
- JavaScript conditions

The server must enforce authorization.

## 40.13 IDOR / broken object-level authorization

Dangerous:

```text
GET /invoices/1001/
```

If changing `1001` to `1002` exposes another company's invoice, you have an authorization bug.

Always scope data to the authorized user/tenant.

## 40.14 Mass assignment

Never expose sensitive model fields in a ModelForm/serializer just because they exist.

## 40.15 File-upload security

Validate, isolate, and authorize files. Do not execute uploaded content.

## 40.16 Open redirects

When accepting a `next`/return URL, validate that it is a safe destination.

## 40.17 Rate limiting

Django core is not a complete abuse-prevention system. Apply rate limiting at an appropriate layer for login, OTP, APIs, password reset, expensive searches, uploads, and public endpoints.

## 40.18 Security updates

Always run a supported Django release and keep it on the latest security/bugfix patch for that release line.

---

# 41. Async Django and ASGI

Traditional Django deployments were primarily synchronous through WSGI.

Modern Django also supports ASGI and asynchronous views.

## 41.1 Async view

```python
from django.http import JsonResponse

async def health(request):
    return JsonResponse({"status": "ok"})
```

## 41.2 When async helps

Async is most useful for I/O-bound concurrency, such as:

- waiting on HTTP APIs
- async database operations where supported
- long-poll style I/O
- high numbers of concurrent slow network operations

Async does not automatically make CPU-bound Python faster.

## 41.3 Async ORM

Modern Django provides async-capable ORM methods for many operations.

Conceptually:

```python
product = await Product.objects.aget(pk=10)
```

Async iteration:

```python
async for product in Product.objects.filter(is_active=True):
    ...
```

Use the exact async API supported by your Django version.

## 41.4 Sync/async boundaries

Not every library or Django operation is necessarily async-safe.

When bridging sync code, use Django/asgiref's documented adapters rather than blocking the event loop carelessly.

## 41.5 ASGI vs WSGI

**WSGI:** synchronous Python web-server interface.

**ASGI:** supports asynchronous application patterns and protocols more naturally.

Typical ASGI servers include Uvicorn and Daphne. Gunicorn can also be used with suitable worker configurations.

Choose ASGI because your architecture needs it, not because “async” sounds newer.

---

# 42. Background Tasks

Slow or retryable work should often run outside the HTTP request-response cycle.

Examples:

- send email
- OCR processing
- invoice extraction
- generate report
- resize image
- import CSV
- call slow external API
- reconciliation
- scheduled reminders

## 42.1 Django's built-in Tasks framework

Modern Django provides a Tasks framework for defining and enqueueing background work.

Concept:

```python
from django.tasks import task

@task
def process_invoice(invoice_id):
    invoice = Invoice.objects.get(pk=invoice_id)
    # perform processing
    return invoice.pk
```

Enqueue concept:

```python
process_invoice.enqueue(invoice.pk)
```

The built-in framework standardizes task definition/queueing behavior, but worker execution still depends on an appropriate task backend/infrastructure. Development/test backends are not automatically a full production worker platform.

## 42.2 Queue after commit

```python
from django.db import transaction

with transaction.atomic():
    invoice = Invoice.objects.create(...)

    transaction.on_commit(
        lambda: process_invoice.enqueue(invoice.pk)
    )
```

This prevents the worker from seeing an uncommitted/nonexistent record.

## 42.3 Idempotency

A task may run more than once because of retries or delivery semantics.

Bad assumption:

```text
"This task can execute only once."
```

Design:

```text
process invoice 123
```

so repeating it does not double-pay, double-email, or double-create records.

## 42.4 Retry strategy

For temporary failures:

```text
attempt 1 -> immediate
attempt 2 -> 5 sec
attempt 3 -> 30 sec
attempt 4 -> 2 min
```

Use exponential backoff/jitter where appropriate.

Permanent validation errors should generally not retry forever.

## 42.5 Celery and other task queues

Before Django's built-in Tasks framework, and still today for many production systems, Celery/RQ/Dramatiq and similar tools provide mature worker/scheduler ecosystems.

Compare requirements:

- task routing
- worker execution
- retries
- scheduling
- monitoring
- result storage
- priorities
- rate limits
- ecosystem compatibility

Do not migrate a stable task system just to use a newer core API unless there is a real benefit.

---

# 43. Testing

Tests let you change code without manually rechecking every behavior.

A good Django test suite covers:

- models
- services/business rules
- views
- forms
- permissions
- APIs
- integrations
- critical user journeys

## 43.1 Model test

```python
from django.test import TestCase

class ProductTest(TestCase):
    def test_total_display_name(self):
        product = Product.objects.create(
            name="Keyboard",
            price="1000.00",
        )
        self.assertEqual(str(product), "Keyboard")
```

## 43.2 Test client

```python
from django.test import TestCase
from django.urls import reverse

class ProductListViewTest(TestCase):
    def test_page_loads(self):
        response = self.client.get(
            reverse("products:list")
        )
        self.assertEqual(response.status_code, 200)
```

## 43.3 Authentication test

```python
class DashboardTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="alex",
            password="StrongPassword123!",
        )

    def test_login_required(self):
        response = self.client.get("/dashboard/")
        self.assertEqual(response.status_code, 302)

    def test_authenticated_user_can_open(self):
        self.client.force_login(self.user)
        response = self.client.get("/dashboard/")
        self.assertEqual(response.status_code, 200)
```

## 43.4 Permission test

Always test both allow and deny cases.

```python
def test_normal_user_cannot_approve_invoice(self):
    ...
    self.assertEqual(response.status_code, 403)
```

Security tests should ask:

```text
Can User A access User B's object?
Can Employee access manager-only action?
Can POST bypass hidden UI restriction?
```

## 43.5 Form test

```python
class DateRangeFormTest(TestCase):
    def test_end_before_start_is_invalid(self):
        form = DateRangeForm(data={
            "start_date": "2026-08-10",
            "end_date": "2026-08-01",
        })

        self.assertFalse(form.is_valid())
```

## 43.6 Service test

Business logic is easiest to test when it is not tightly coupled to an HTTP view.

```python
class ApprovalServiceTest(TestCase):
    def test_creator_cannot_approve_own_invoice(self):
        with self.assertRaises(SelfApprovalNotAllowed):
            approve_invoice(
                invoice=self.invoice,
                approver=self.invoice.created_by,
            )
```

## 43.7 `TestCase` vs `TransactionTestCase`

`TestCase` is usually faster and wraps tests in transactions for isolation.

`TransactionTestCase` is needed when you explicitly need to test transaction behavior that `TestCase`'s wrapping would hide or alter.

## 43.8 Mock external dependencies

Do not call a real payment provider in a normal unit test.

Mock or fake:

- email provider
- payment gateway
- OCR service
- ERP API
- cloud storage

But also have a smaller set of integration/contract tests where real compatibility matters.

## 43.9 Pytest

Django's built-in test framework is enough to build a full suite. Many teams optionally use `pytest` with `pytest-django` for fixtures, parametrization, and ergonomics.

Understand Django testing fundamentals even if you use pytest syntax.

## 43.10 Test pyramid idea

A healthy suite often contains:

```text
many fast unit/service tests
some database/view/API tests
fewer end-to-end browser tests
```

End-to-end tests are valuable but slower and more fragile, so reserve them for critical journeys.

---

# 44. Internationalization and Time Zones

Production applications often need to support different languages, locales, currencies, date formats, and time zones.

## 44.1 Translation

Python:

```python
from django.utils.translation import gettext_lazy as _

class Product(models.Model):
    name = models.CharField(
        _("name"),
        max_length=200,
    )
```

Template:

```django
{% load i18n %}
{% trans "Welcome" %}
```

## 44.2 Time zones

Use timezone-aware datetimes.

```python
USE_TZ = True
TIME_ZONE = "UTC"
```

Application code:

```python
from django.utils import timezone

now = timezone.now()
```

Do not use naive `datetime.now()` indiscriminately in timezone-aware Django projects.

## 44.3 Store vs display

A common strategy is:

```text
store timestamps consistently (often UTC)
display in user's/local business timezone
```

Example:

```text
Database: 2026-08-12 08:00 UTC
Mumbai display: 2026-08-12 13:30 IST
New York display: local corresponding time
```

## 44.4 Daylight saving time

Avoid manually adding fixed hour offsets for regions with DST. Use IANA timezone names via Python's timezone facilities.

---

# 45. Django REST APIs Without DRF

You can build APIs using Django core.

## 45.1 JSON response

```python
from django.http import JsonResponse


def product_detail_api(request, pk):
    product = get_object_or_404(Product, pk=pk)

    return JsonResponse({
        "id": product.pk,
        "name": product.name,
        "price": str(product.price),
    })
```

## 45.2 List response

```python
def product_list_api(request):
    products = list(
        Product.objects
        .filter(is_active=True)
        .values("id", "name", "price")
    )

    return JsonResponse(
        {"results": products},
    )
```

## 45.3 POST JSON

```python
import json


def create_product_api(request):
    if request.method != "POST":
        return JsonResponse(
            {"detail": "Method not allowed"},
            status=405,
        )

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse(
            {"detail": "Invalid JSON"},
            status=400,
        )

    # validate carefully before creating
```

## When core Django is enough

- tiny internal endpoint
- simple webhook
- one or two JSON endpoints
- health checks

## When DRF becomes useful

When you repeatedly need:

- serializers
- validation
- authentication
- permissions
- pagination
- filtering
- throttling
- browsable API
- viewsets
- routers
- standardized error responses

---

# 46. Django REST Framework

> **Note:** Django REST Framework (DRF) is a third-party toolkit, not Django core. It is one of the most common choices for building APIs with Django.

Install:

```bash
pip install djangorestframework
```

Settings:

```python
INSTALLED_APPS += [
    "rest_framework",
]
```

## 46.1 Serializer

A serializer converts between complex objects and API-friendly data while also providing validation/deserialization behavior.

```python
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "is_active",
        ]
```

Serialize:

```python
serializer = ProductSerializer(product)
serializer.data
```

Deserialize/validate:

```python
serializer = ProductSerializer(data=request.data)
serializer.is_valid(raise_exception=True)
product = serializer.save()
```

## 46.2 Field validation

```python
class ProductSerializer(serializers.ModelSerializer):
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Price must be positive."
            )
        return value
```

Cross-field:

```python
def validate(self, attrs):
    if attrs["sale_price"] > attrs["price"]:
        raise serializers.ValidationError(
            "Sale price cannot exceed price."
        )
    return attrs
```

## 46.3 APIView

```python
from rest_framework.response import Response
from rest_framework.views import APIView

class ProductListAPI(APIView):
    def get(self, request):
        products = Product.objects.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
```

## 46.4 Generic API views

```python
from rest_framework.generics import ListCreateAPIView

class ProductListCreateAPI(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

## 46.5 ViewSets

```python
from rest_framework.viewsets import ModelViewSet

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

## 46.6 Routers

```python
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("products", ProductViewSet)

urlpatterns = router.urls
```

This can generate standard CRUD routes automatically.

## 46.7 Authentication

Authentication determines who the API caller is.

Possible approaches include:

- session authentication
- token-based authentication
- JWT through third-party packages
- OAuth/OIDC through appropriate packages/providers

Do not invent a custom token scheme without a strong reason.

## 46.8 Permissions

```python
from rest_framework.permissions import IsAuthenticated

class ProductViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
```

Custom:

```python
from rest_framework.permissions import BasePermission

class IsFinanceUser(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(
            name="Finance"
        ).exists()
```

Object-level permission:

```python
class IsInvoiceOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.created_by_id == request.user.id
```

Be careful: list endpoints still need querysets scoped so users do not receive unauthorized objects.

## 46.9 Filtering

Simple:

```python
def get_queryset(self):
    qs = Invoice.objects.filter(
        company=self.request.user.company
    )

    status = self.request.query_params.get("status")
    if status:
        qs = qs.filter(status=status)

    return qs
```

For richer filtering, many projects use `django-filter`.

## 46.10 Search and ordering

DRF offers filter backends for search/ordering patterns.

Be deliberate about which fields clients may order/search because expensive unindexed fields can become a performance issue.

## 46.11 Pagination

Do not expose enormous unpaginated collections.

Global settings concept:

```python
REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": (
        "rest_framework.pagination.PageNumberPagination"
    ),
    "PAGE_SIZE": 50,
}
```

For large mutable feeds, cursor pagination can provide better consistency and scalability.

## 46.12 Throttling

DRF throttling can help implement application-level request policies, but it is not a complete DDoS defense. Combine application throttling with infrastructure protections where needed.

## 46.13 Custom action

```python
from rest_framework.decorators import action
from rest_framework.response import Response

class InvoiceViewSet(ModelViewSet):
    ...

    @action(detail=True, methods=["post"])
    def approve(self, request, pk=None):
        invoice = self.get_object()
        approve_invoice(
            invoice=invoice,
            approver=request.user,
        )
        return Response({"status": "approved"})
```

Keep workflow logic in a service/domain function rather than stuffing it into the viewset method.

## 46.14 API versioning

Common approaches:

```text
/api/v1/invoices/
```

or header/content negotiation-based versioning.

Version public APIs when you need to evolve contracts without immediately breaking clients.

## 46.15 Idempotency

Payment/order APIs should consider idempotency keys.

Example:

```text
POST /api/payments/
Idempotency-Key: 9f25...
```

If a network timeout causes the client to retry, the server should avoid creating a duplicate payment.

## 46.16 API error shape

Use predictable errors.

Example:

```json
{
  "code": "invoice_not_approvable",
  "detail": "Invoice is not in pending status."
}
```

Clients should not need to parse arbitrary human text to determine error type.

---

# 47. Database Design for Django

A strong Django developer is also a competent relational database designer.

## 47.1 Primary key

Django normally provides an automatic primary key.

You may also expose a separate UUID/public identifier:

```python
public_id = models.UUIDField(
    default=uuid.uuid4,
    unique=True,
    editable=False,
)
```

This keeps internal and public identity concerns separate.

## 47.2 Natural key vs surrogate key

Natural business identifier:

```text
invoice_number = INV-2026-001
```

Surrogate database identifier:

```text
id = 91821
```

Business identifiers can sometimes change or only be unique within a company. Do not automatically make every business code the primary key.

## 47.3 Normalize transactional data

Bad:

```text
Order
- customer_name
- customer_email
- product1
- product2
- product3
```

Better:

```text
Customer
Order
OrderItem
Product
```

## 47.4 Historical snapshots

Normalization has exceptions.

For an invoice/order, you may intentionally snapshot some values because history must remain unchanged even if master data changes.

Example order line:

```text
product_id = 10
product_name_snapshot = "Mechanical Keyboard"
unit_price = 4999.00
```

If Product 10 is later renamed, the historical invoice should still show what was sold then.

## 47.5 Constraints represent business truth

If invoice number must be unique per company, enforce it in the database.

```python
models.UniqueConstraint(
    fields=["company", "invoice_number"],
    name="uniq_invoice_company_number",
)
```

Application validation alone is vulnerable to race conditions and bypasses.

## 47.6 Indexes follow access patterns

If common query is:

```python
Invoice.objects.filter(
    company=company,
    status="pending",
).order_by("-created_at")
```

then a suitable composite index may help, depending on database/query distribution.

Measure with real queries and execution plans.

## 47.7 Avoid unbounded tables without lifecycle planning

Examples:

- audit logs
- request logs
- notifications
- task results
- OCR raw outputs

Plan:

- retention
- archival
- partitioning if needed
- indexes
- deletion policy
- legal requirements

## 47.8 Money

Use decimal types:

```python
models.DecimalField(
    max_digits=15,
    decimal_places=2,
)
```

For multi-currency systems, store currency explicitly:

```text
amount = 100.00
currency = INR
```

Do not assume every amount is the same currency.

---

# 48. PostgreSQL with Django

Django supports multiple databases, but PostgreSQL is a very common production choice because of its mature relational features and strong Django integration.

## 48.1 Install driver

Modern Python projects commonly use Psycopg.

Example dependency installation depends on your deployment packaging strategy; follow current Django/Psycopg documentation rather than copying old `psycopg2` commands blindly.

## 48.2 Configuration

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "app",
        "USER": "app",
        "PASSWORD": os.environ["DB_PASSWORD"],
        "HOST": os.environ.get("DB_HOST", "localhost"),
        "PORT": os.environ.get("DB_PORT", "5432"),
    }
}
```

## 48.3 JSON

PostgreSQL provides powerful JSON querying/indexing capabilities, but choose JSON only when the shape truly benefits from flexibility.

## 48.4 Full-text search

`django.contrib.postgres.search` provides PostgreSQL-oriented full-text search primitives.

Concept:

```python
from django.contrib.postgres.search import SearchVector

Article.objects.annotate(
    search=SearchVector("title", "body")
).filter(search="django")
```

For better relevance, study:

- `SearchQuery`
- `SearchRank`
- weighted vectors
- GIN indexes
- trigram similarity

## 48.5 Trigram search

Useful for fuzzy matching such as misspelled vendor/product names when configured appropriately.

## 48.6 PostgreSQL-specific indexes

PostgreSQL supports specialized indexes such as GIN and GiST for certain query types.

Do not add specialized indexes until you understand the query they accelerate.

## 48.7 Database connection pooling

High-traffic deployments may use connection pooling such as PgBouncer or appropriate platform/database pooling.

Understand transaction vs session pooling implications for your application and database features.

## 48.8 Database is a shared resource

Optimize:

- connection count
- query count
- long transactions
- lock contention
- indexes
- vacuum/analyze health
- slow queries

Application performance often becomes database performance.

---
# 49. Performance Optimization

Performance work should follow this rule:

> **Measure first, optimize the actual bottleneck, then measure again.**

Do not guess that Django itself is slow. In real applications, bottlenecks are often caused by:

- too many database queries
- slow database queries
- missing indexes
- large responses
- repeated external API calls
- blocking work inside requests
- excessive template work
- large file processing
- cache misses
- poor pagination
- inefficient serialization
- connection limits
- application architecture

## 49.1 Measure request time

Useful measurements include:

```text
Total request time
Database query count
Database query duration
External API duration
Template rendering time
Cache hit ratio
Background task duration
Memory usage
CPU usage
Response size
```

Development tools can help inspect query behavior, but production observability should use proper logs/metrics/APM rather than relying on development-only tooling.

## 49.2 Eliminate N+1 queries

Bad:

```python
orders = Order.objects.all()

for order in orders:
    print(order.customer.name)
```

Potential query count:

```text
1 + number_of_orders
```

Better:

```python
orders = Order.objects.select_related("customer")
```

For collections:

```python
customers = Customer.objects.prefetch_related("orders")
```

## 49.3 Do work in the database when appropriate

Instead of loading every row and summing in Python:

```python
total = sum(order.amount for order in Order.objects.all())
```

prefer:

```python
from django.db.models import Sum

total = Order.objects.aggregate(
    total=Sum("amount")
)["total"]
```

## 49.4 Fetch only what you need

If a report needs only two fields:

```python
Invoice.objects.values(
    "invoice_number",
    "total",
)
```

This may be more appropriate than creating full model instances with unused fields.

But avoid premature `only()`/`defer()` usage that causes hidden follow-up queries.

## 49.5 Index carefully

Suppose a frequent query is:

```python
Invoice.objects.filter(
    company_id=10,
    status="pending",
).order_by("-created_at")
```

A composite index may help.

Always verify with:

```python
qs.explain()
```

and real database statistics.

## 49.6 Pagination

Do not render 50,000 invoices on one page.

```python
Paginator(qs, 50)
```

For massive ordered datasets, consider cursor/keyset patterns.

## 49.7 Caching

Cache data that is:

- expensive to compute
- requested frequently
- safe to serve stale for a defined period

Do not cache private data without correct user/tenant key dimensions.

## 49.8 Move slow work out of request

Bad:

```text
HTTP request
 -> OCR 15-page PDF
 -> call ERP
 -> send email
 -> generate report
 -> response
```

Better:

```text
HTTP request
 -> validate upload
 -> save job
 -> commit
 -> enqueue task
 -> response 202/redirect

Worker
 -> OCR
 -> validation
 -> ERP
 -> notification
```

## 49.9 Streaming

For very large generated responses/files, consider streaming approaches where appropriate instead of building the entire payload in memory.

## 49.10 `iterator()`

For large querysets processed once:

```python
for invoice in Invoice.objects.iterator(
    chunk_size=1000
):
    ...
```

This can reduce queryset caching/memory use. Understand interaction with prefetching and database behavior.

## 49.11 Bulk operations

For 100,000 rows, avoid 100,000 individual inserts when `bulk_create()` fits.

## 49.12 Persistent database connections

Django supports persistent connections through database settings such as `CONN_MAX_AGE`.

This can reduce connection setup overhead but affects database connection count and deployment architecture. Tune rather than blindly set it high.

## 49.13 Compression and CDN

Static assets may benefit from:

- minification/build optimization
- compression
- CDN delivery
- long cache headers for fingerprinted assets

User-uploaded media may also benefit from CDN/object storage depending on authorization requirements.

## 49.14 Performance checklist

Before changing architecture, check:

- [ ] N+1 queries
- [ ] missing/incorrect indexes
- [ ] slow queries
- [ ] unnecessary large result sets
- [ ] repeated queries in templates
- [ ] expensive synchronous external calls
- [ ] no pagination
- [ ] unnecessary serialization fields
- [ ] no caching where data is expensive/stable
- [ ] overly long transactions
- [ ] database connection pressure
- [ ] large response payloads

---

# 50. Production Project Structure

There is no single official folder structure for every Django project. A maintainable production system often separates infrastructure concerns from domain logic.

Example:

```text
project/
├── manage.py
├── pyproject.toml
├── README.md
├── .env.example
├── config/
│   ├── __init__.py
│   ├── urls.py
│   ├── asgi.py
│   ├── wsgi.py
│   └── settings/
│       ├── __init__.py
│       ├── base.py
│       ├── local.py
│       ├── test.py
│       └── production.py
├── apps/
│   ├── accounts/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── selectors.py
│   │   ├── services.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── tests/
│   ├── invoices/
│   └── approvals/
├── core/
│   ├── exceptions.py
│   ├── middleware.py
│   └── utilities.py
├── templates/
├── static/
└── tests/
```

## 50.1 What belongs in `models.py`?

Good candidates:

- schema
- model-level invariants
- simple domain behavior
- query-related managers/querysets

## 50.2 What belongs in views?

Views should mainly orchestrate HTTP concerns:

```text
parse request
check auth
validate input
call business operation
choose response
```

If a view contains 300 lines of business rules, split it.

## 50.3 What belongs in services?

Complex write/business operations:

```python
approve_invoice(...)
place_order(...)
create_employee(...)
process_refund(...)
```

## 50.4 What belongs in selectors/query modules?

Complex reusable read logic:

```python
get_pending_invoices_for_user(...)
get_dashboard_summary(...)
```

This is an optional architecture style, not a Django requirement.

## 50.5 Avoid `utils.py` dumping grounds

A file named `utils.py` often becomes a collection of unrelated functions.

Prefer specific modules:

```text
currency.py
files.py
identifiers.py
dates.py
```

when the project grows.

---

# 51. Deployment

Deployment means running Django reliably for real users.

A typical architecture:

```text
Internet
   |
   v
DNS
   |
   v
Load Balancer / Reverse Proxy
   |
   v
Nginx / platform proxy
   |
   v
Gunicorn / Uvicorn / other production server
   |
   v
Django
   |
   +------> PostgreSQL
   |
   +------> Redis/Cache
   |
   +------> Object Storage
   |
   +------> Background Workers
```

Cloud platforms may abstract several layers.

## 51.1 Do not use `runserver` in production

Use a production-ready WSGI or ASGI server.

## 51.2 WSGI example concept

A common WSGI deployment might use Gunicorn:

```bash
gunicorn config.wsgi:application
```

Exact worker counts, timeouts, bind options, and process management depend on CPU, memory, traffic, and workload.

## 51.3 ASGI example concept

Example with Uvicorn:

```bash
uvicorn config.asgi:application \
    --host 0.0.0.0 \
    --port 8000
```

Use production process supervision/orchestration appropriate to your environment.

## 51.4 Reverse proxy

A reverse proxy can handle:

- TLS termination
- host validation
- request-size limits
- static files
- buffering
- compression
- rate limiting
- upstream routing

## 51.5 Static files

Set a production static root/storage and run:

```bash
python manage.py collectstatic --noinput
```

Then serve static assets through appropriate web-server/CDN/storage infrastructure.

## 51.6 Media files

User uploads need:

- persistent storage
- backup/lifecycle strategy
- correct permissions
- untrusted-content handling

Do not rely on a container's ephemeral filesystem for permanent uploads unless the platform explicitly provides persistence.

## 51.7 Production settings

At minimum review:

```python
DEBUG = False
ALLOWED_HOSTS = ["example.com"]
```

plus:

- secret management
- database settings
- cache settings
- email/mailers
- HTTPS/cookie settings
- logging
- static/media storage
- CSP where used

## 51.8 Deployment checks

Run against production settings:

```bash
python manage.py check --deploy
```

Also run:

```bash
python manage.py check
python manage.py migrate --check
```

as appropriate to your release process.

## 51.9 Migrations during deployment

A safe release sequence depends on migration compatibility.

Typical concept:

```text
Build artifact
Run tests
Deploy backward-compatible code/schema step
Run migrations
Switch traffic / roll instances
Verify health
```

Avoid schema changes that require every instance to switch at exactly the same instant unless your deployment platform guarantees it.

## 51.10 Zero-downtime schema thinking

Example dangerous change:

```text
Old code expects column old_name
Migration instantly renames it to new_name
Some old instances still serving traffic
```

Safer expand/contract approach:

```text
1. Add new structure
2. deploy code compatible with old + new
3. backfill/migrate
4. switch reads/writes
5. remove old structure later
```

## 51.11 Health endpoints

Separate concepts:

**Liveness:** process is alive.

**Readiness:** process is ready to serve traffic.

A readiness check may verify critical dependencies, but do not make it so expensive that health checking overloads your database.

## 51.12 Backups

Have tested backups for:

- database
- media/user files
- critical configuration/secrets according to your platform strategy

A backup you have never restored is an assumption, not a verified recovery plan.

---

# 52. Docker

Docker packages the application and runtime dependencies into a reproducible container image.

## 52.1 Basic Dockerfile

Example learning configuration:

```dockerfile
FROM python:3.14-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
```

Pin the Python/image strategy appropriate to your release and verify compatibility with your Django/dependencies.

## 52.2 `.dockerignore`

```text
.git
.venv
__pycache__
*.pyc
.env
db.sqlite3
media/
```

Never bake local secrets into the image.

## 52.3 Compose example

```yaml
services:
  web:
    build: .
    command: gunicorn config.wsgi:application --bind 0.0.0.0:8000
    ports:
      - "8000:8000"
    environment:
      DB_HOST: db
    depends_on:
      - db

  db:
    image: postgres
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: development-only-password
```

This is a learning example, not a complete production configuration.

## 52.4 Containers are ephemeral

Do not store critical user uploads only in the container filesystem.

Use:

- mounted persistent volume
- object storage
- dedicated persistent service

## 52.5 One image, multiple roles

A production system can run the same application image with different commands:

```text
web process
background worker
scheduled job
migration job
```

This reduces environment drift.

## 52.6 Startup scripts

Be careful with automatic migrations in every web container startup. Multiple replicas may race or make rollbacks harder.

Many teams run migrations as a dedicated release step/job.

---

# 53. CI/CD

CI/CD automates validation and deployment.

A typical CI pipeline:

```text
Checkout
  -> Install dependencies
  -> Lint/format checks
  -> Security/dependency checks
  -> Django system check
  -> Unit/integration tests
  -> Build image/artifact
  -> Deploy to staging
  -> Smoke test
  -> Production deployment
```

## 53.1 Minimum CI checks

```bash
python manage.py check
python manage.py makemigrations --check --dry-run
python manage.py test
```

You may also run:

- Ruff/linter
- formatter check
- type checker
- dependency vulnerability scanner
- frontend tests
- container scan

## 53.2 `makemigrations --check`

This detects model changes that were not committed as migration files.

```bash
python manage.py makemigrations --check --dry-run
```

## 53.3 Separate environment config

Do not hard-code production secrets into CI configuration files.

Use your CI/CD platform's secret management.

## 53.4 Deployment gates

Critical systems may require:

```text
CI passed
Security scan passed
Staging verification passed
Approval received
```

before production.

## 53.5 Rollback

A deployment strategy must answer:

- Can application code be rolled back?
- Is the new schema backward compatible?
- Are tasks compatible with old/new code?
- Can static assets be rolled back?
- What happens to in-flight jobs?

Rollback planning is part of deployment design, not something to invent during an incident.

---

# 54. Real-World Architecture Patterns

Django does not force one application architecture beyond its framework conventions.

The best structure depends on complexity.

## 54.1 Simple CRUD application

For a small app:

```text
models.py
forms.py
views.py
urls.py
templates/
```

is perfectly fine.

Do not add enterprise layers just to look sophisticated.

## 54.2 Domain-oriented application

For a complex invoice system:

```text
invoices/
├── models.py
├── services/
│   ├── create_invoice.py
│   ├── approve_invoice.py
│   └── post_invoice.py
├── selectors/
│   ├── invoice_list.py
│   └── dashboard.py
├── tasks.py
├── permissions.py
├── api/
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
└── tests/
```

## 54.3 Layered mental model

A useful mental model:

```text
HTTP/API layer
      |
      v
Application/Service layer
      |
      v
Domain rules
      |
      v
Models/ORM
      |
      v
Database
```

External systems may enter through adapters:

```text
ERP API
Email
OCR
Payment Gateway
Object Storage
```

## 54.4 Keep dependencies pointing inward

Business logic should not need to know about template details.

Bad:

```text
Invoice model imports an HTML view.
```

Better:

```text
View calls invoice service.
Service works with domain/model objects.
```

## 54.5 Explicit workflows

Complex business process:

```text
Draft
 -> Submitted
 -> Manager Approval
 -> Finance Approval
 -> Posting
 -> Paid
```

Do not scatter state changes across five views and three signals.

Centralize transition rules.

Example:

```python
def submit_invoice(invoice, user): ...
def approve_manager(invoice, user): ...
def approve_finance(invoice, user): ...
def mark_posted(invoice, erp_reference): ...
```

## 54.6 State machines

When many transitions and permissions exist, model the workflow explicitly.

Example allowed transitions:

```text
DRAFT -> PENDING
PENDING -> APPROVED
PENDING -> REJECTED
APPROVED -> POSTED
POSTED -> PAID
```

Forbidden:

```text
PAID -> DRAFT
REJECTED -> POSTED
```

A transition table or state-machine library can become useful when complexity grows.

---

# 55. Service Layer, Selectors, Repositories, and Fat Models

These terms cause unnecessary arguments. Treat them as tools.

## 55.1 Fat models

Classic Django advice often places domain behavior near models.

Example:

```python
class Invoice(models.Model):
    status = models.CharField(...)

    def can_be_approved_by(self, user):
        ...
```

This is good when behavior naturally belongs to one entity.

## 55.2 Service layer

Use a service when an operation coordinates multiple entities/systems.

```python
@transaction.atomic
def approve_invoice(*, invoice, approver):
    if not invoice.can_be_approved_by(approver):
        raise PermissionDenied

    invoice.status = Invoice.Status.APPROVED
    invoice.approved_by = approver
    invoice.save(
        update_fields=["status", "approved_by"]
    )

    AuditEvent.objects.create(
        actor=approver,
        action="invoice.approved",
        object_id=invoice.pk,
    )

    transaction.on_commit(
        lambda: notify_invoice_approved.enqueue(invoice.pk)
    )
```

This is clearer than hiding the entire workflow in `save()` or signals.

## 55.3 Selector/query service

```python
def get_visible_invoices(user):
    qs = Invoice.objects.select_related(
        "vendor",
        "created_by",
    )

    if user.is_superuser:
        return qs

    return qs.filter(company=user.company)
```

Useful for reusable authorization-aware read logic.

## 55.4 Repository pattern

A repository hides persistence details behind an interface.

Example concept:

```python
class InvoiceRepository:
    def get_pending(self): ...
    def save(self, invoice): ...
```

In ordinary Django apps, the ORM already acts like a rich data-access abstraction. Adding repositories around every simple queryset often creates ceremony without benefit.

Use repositories when you genuinely need:

- storage abstraction beyond Django ORM
- domain layer independent of ORM
- multiple persistence mechanisms
- explicit architectural boundaries

Do not wrap:

```python
Invoice.objects.get(pk=pk)
```

in five layers just to follow a pattern from another ecosystem.

## 55.5 Rule of thumb

```text
Simple CRUD -> models/forms/views are enough
Complex reusable query -> QuerySet/manager/selector
Multi-step business write -> service
Entity-specific behavior -> model/domain object
Hidden cross-cutting hook -> signal only when justified
```

---

# 56. Multi-Tenancy

Multi-tenancy means one application serves multiple organizations/customers while keeping their data isolated.

Example:

```text
Tenant A -> Company Alpha
Tenant B -> Company Beta
```

## 56.1 Shared tables with tenant foreign key

```python
class Company(models.Model):
    name = models.CharField(max_length=200)

class Invoice(models.Model):
    company = models.ForeignKey(
        Company,
        on_delete=models.PROTECT,
    )
```

Every tenant-owned query must be scoped:

```python
Invoice.objects.filter(
    company=request.user.company
)
```

## 56.2 Dangerous bug

```python
Invoice.objects.get(pk=pk)
```

If `pk` belongs to another tenant, data may leak.

Safer:

```python
get_object_or_404(
    Invoice,
    pk=pk,
    company=request.user.company,
)
```

## 56.3 Tenant-aware uniqueness

Invoice number may be unique within a tenant:

```python
models.UniqueConstraint(
    fields=["company", "invoice_number"],
    name="uniq_company_invoice_number",
)
```

## 56.4 Strategies

Common multi-tenancy architectures:

### Shared database, shared schema

```text
All tenants use same tables; tenant_id separates rows.
```

Pros:

- simple operations
- efficient resource use

Cons:

- every query must enforce isolation

### Shared database, separate schemas

Often PostgreSQL-oriented through third-party tooling.

Pros:

- stronger logical separation

Cons:

- migrations/operations become more complex

### Separate database per tenant

Pros:

- strong isolation
- easier tenant-specific backup/restore in some designs

Cons:

- connection/migration/operations complexity

Choose based on compliance, scale, operational capacity, customization, and isolation requirements.

## 56.5 Defense in depth

Tenant isolation can be strengthened through:

- scoped querysets
- authorization services
- middleware/context
- tests explicitly attempting cross-tenant access
- database row-level security in suitable architectures

Never rely on a hidden `company_id` field in the browser.

---

# 57. Audit Logging

An audit log answers:

```text
Who did what?
To which object?
When?
From where/context?
What changed?
```

Example:

```python
class AuditEvent(models.Model):
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        on_delete=models.SET_NULL,
    )
    action = models.CharField(max_length=100)
    object_type = models.CharField(max_length=100)
    object_id = models.CharField(max_length=100)
    metadata = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
```

Record:

```python
AuditEvent.objects.create(
    actor=user,
    action="invoice.approved",
    object_type="Invoice",
    object_id=str(invoice.pk),
    metadata={
        "old_status": "pending",
        "new_status": "approved",
    },
)
```

## 57.1 Audit vs application logs

Application log:

```text
database timeout while posting invoice
```

Audit record:

```text
User 42 approved Invoice 1009
```

They serve different purposes.

## 57.2 Audit integrity

For regulated systems, consider:

- append-only design
- restricted delete/update permissions
- retention policy
- tamper-evident storage
- centralized logging
- database permissions
- immutable event storage

## 57.3 Do not store secrets in audit metadata

Record identifiers and meaningful changes without unnecessarily copying sensitive content.

---

# 58. Search

Search complexity ranges from a simple `icontains` filter to dedicated search infrastructure.

## 58.1 Simple search

```python
term = request.GET.get("q", "").strip()

products = Product.objects.all()

if term:
    products = products.filter(
        Q(name__icontains=term) |
        Q(sku__icontains=term)
    )
```

Good for small datasets/basic admin-like search.

## 58.2 Database full-text search

PostgreSQL can provide:

- tokenization
- ranking
- weighted fields
- language-aware search
- trigram similarity

Useful before introducing a separate search cluster.

## 58.3 Dedicated search engines

Large/search-heavy systems may use services such as Elasticsearch/OpenSearch or other search engines.

Use when you need features like:

- complex relevance ranking
- typo tolerance
- facets
- very large search indexes
- specialized analyzers
- distributed search

A dedicated search engine adds operational complexity and data synchronization concerns.

## 58.4 Search authorization

Never index/return documents a user should not access.

If results are filtered after search, ensure unauthorized data cannot leak through:

- result snippets
- counts
- facets
- suggestions
- direct object fetch

---

# 59. File Upload Scenario

Build a secure invoice upload workflow.

## Requirement

User uploads a PDF invoice. System validates it and starts background processing.

## 59.1 Model

```python
class InvoiceUpload(models.Model):
    class Status(models.TextChoices):
        UPLOADED = "uploaded", "Uploaded"
        PROCESSING = "processing", "Processing"
        COMPLETED = "completed", "Completed"
        FAILED = "failed", "Failed"

    file = models.FileField(
        upload_to="invoice_uploads/%Y/%m/"
    )
    status = models.CharField(
        max_length=20,
        choices=Status,
        default=Status.UPLOADED,
    )
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
    )
    created_at = models.DateTimeField(auto_now_add=True)
```

## 59.2 Form

```python
class InvoiceUploadForm(forms.ModelForm):
    class Meta:
        model = InvoiceUpload
        fields = ["file"]

    def clean_file(self):
        file = self.cleaned_data["file"]

        if file.size > 10 * 1024 * 1024:
            raise forms.ValidationError(
                "Maximum file size is 10 MB."
            )

        if not file.name.lower().endswith(".pdf"):
            raise forms.ValidationError(
                "Only PDF files are allowed."
            )

        return file
```

Extension validation alone is not sufficient for high-security uploads; inspect content/type server-side as appropriate.

## 59.3 View

```python
@login_required
@require_http_methods(["GET", "POST"])
def upload_invoice(request):
    if request.method == "POST":
        form = InvoiceUploadForm(
            request.POST,
            request.FILES,
        )

        if form.is_valid():
            with transaction.atomic():
                upload = form.save(commit=False)
                upload.uploaded_by = request.user
                upload.save()

                transaction.on_commit(
                    lambda: process_invoice_file.enqueue(
                        upload.pk
                    )
                )

            return redirect(
                "invoices:upload-status",
                pk=upload.pk,
            )
    else:
        form = InvoiceUploadForm()

    return render(
        request,
        "invoices/upload.html",
        {"form": form},
    )
```

## 59.4 Background task

```python
@task
def process_invoice_file(upload_id):
    upload = InvoiceUpload.objects.get(pk=upload_id)

    if upload.status == InvoiceUpload.Status.COMPLETED:
        return

    upload.status = InvoiceUpload.Status.PROCESSING
    upload.save(update_fields=["status"])

    try:
        # scan / parse / OCR / extract / validate
        result = extract_invoice(upload.file)
        save_extraction(upload, result)
    except Exception:
        upload.status = InvoiceUpload.Status.FAILED
        upload.save(update_fields=["status"])
        raise
    else:
        upload.status = InvoiceUpload.Status.COMPLETED
        upload.save(update_fields=["status"])
```

## 59.5 Important production concerns

- malware scanning
- size limits at reverse proxy + application
- MIME/content validation
- encrypted storage where required
- signed/private URLs
- task retries
- idempotency
- OCR timeout
- document retention
- audit logging
- tenant isolation
- failure/reprocessing UI

---

# 60. E-Commerce Scenario

A small e-commerce design teaches models, transactions, concurrency, and snapshots.

## 60.1 Models

```python
class Product(models.Model):
    name = models.CharField(max_length=200)
    sku = models.CharField(max_length=50, unique=True)
    price = models.DecimalField(
        max_digits=12,
        decimal_places=2,
    )
    stock = models.PositiveIntegerField(default=0)

class Order(models.Model):
    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
    )
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
    )
    product_name = models.CharField(max_length=200)
    unit_price = models.DecimalField(
        max_digits=12,
        decimal_places=2,
    )
    quantity = models.PositiveIntegerField()
```

`product_name` and `unit_price` are snapshots so order history does not change when product master data changes.

## 60.2 Place order service

```python
from django.db import transaction

@transaction.atomic
def place_order(*, customer, cart_items):
    order = Order.objects.create(
        customer=customer,
        status="pending",
    )

    for cart_item in cart_items:
        product = (
            Product.objects
            .select_for_update()
            .get(pk=cart_item.product_id)
        )

        if product.stock < cart_item.quantity:
            raise InsufficientStock(product.sku)

        product.stock -= cart_item.quantity
        product.save(update_fields=["stock"])

        OrderItem.objects.create(
            order=order,
            product=product,
            product_name=product.name,
            unit_price=product.price,
            quantity=cart_item.quantity,
        )

    return order
```

## 60.3 Payment problem

Do **not** keep a database transaction open while waiting a long time for an external payment gateway unless your design specifically requires and tolerates that lock duration.

A better flow often resembles:

```text
Create pending order
Reserve/validate stock using controlled transaction
Create payment attempt
Commit
Call payment provider / redirect user
Receive verified payment callback/webhook
Finalize payment idempotently
```

## 60.4 Payment webhook

Security considerations:

- verify provider signature
- use provider event ID for idempotency
- do not trust browser redirect as proof of payment
- store raw/reference event safely if needed
- handle retries/out-of-order events

## 60.5 Order total

Do not trust a client-submitted total such as:

```json
{"total": 1.00}
```

Calculate authoritative price server-side from trusted product/pricing data.

---
# 61. Approval Workflow Scenario

Approval workflows appear in enterprise systems everywhere:

```text
Employee request
 -> Manager
 -> Department Head
 -> Finance
 -> Final approval
```

A weak implementation usually scatters workflow decisions across views, templates, and signals. A stronger design models the workflow explicitly.

## 61.1 Example model

```python
class ExpenseRequest(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        MANAGER_PENDING = "manager_pending", "Manager Pending"
        FINANCE_PENDING = "finance_pending", "Finance Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    employee = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
        related_name="expense_requests",
    )
    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
    )
    status = models.CharField(
        max_length=30,
        choices=Status,
        default=Status.DRAFT,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

## 61.2 Approval history

Do not overwrite all approval information on one row when you need history.

```python
class ApprovalAction(models.Model):
    class Action(models.TextChoices):
        SUBMITTED = "submitted", "Submitted"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"
        RETURNED = "returned", "Returned"

    request = models.ForeignKey(
        ExpenseRequest,
        on_delete=models.CASCADE,
        related_name="approval_actions",
    )
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
    )
    action = models.CharField(
        max_length=20,
        choices=Action,
    )
    stage = models.CharField(max_length=50)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```

This gives an immutable-style trail:

```text
10:01 Employee submitted
10:30 Manager approved
11:10 Finance returned for correction
13:20 Employee resubmitted
14:00 Manager approved
15:15 Finance approved
```

## 61.3 Submit service

```python
from django.db import transaction

@transaction.atomic
def submit_expense(*, expense, actor):
    expense = (
        ExpenseRequest.objects
        .select_for_update()
        .get(pk=expense.pk)
    )

    if expense.employee_id != actor.id:
        raise PermissionDenied

    if expense.status != ExpenseRequest.Status.DRAFT:
        raise InvalidTransition(
            "Only draft requests can be submitted."
        )

    expense.status = ExpenseRequest.Status.MANAGER_PENDING
    expense.save(update_fields=["status", "updated_at"])

    ApprovalAction.objects.create(
        request=expense,
        actor=actor,
        action=ApprovalAction.Action.SUBMITTED,
        stage="employee",
    )
```

## 61.4 Approve manager stage

```python
@transaction.atomic
def approve_by_manager(*, expense_id, manager):
    expense = (
        ExpenseRequest.objects
        .select_for_update()
        .get(pk=expense_id)
    )

    if expense.status != ExpenseRequest.Status.MANAGER_PENDING:
        raise InvalidTransition()

    if not is_manager_for(manager, expense.employee):
        raise PermissionDenied

    expense.status = ExpenseRequest.Status.FINANCE_PENDING
    expense.save(update_fields=["status", "updated_at"])

    ApprovalAction.objects.create(
        request=expense,
        actor=manager,
        action=ApprovalAction.Action.APPROVED,
        stage="manager",
    )
```

## 61.5 Why lock the row?

Suppose Manager A double-clicks approval while another process rejects the same request. Without concurrency control, two contradictory transitions could race.

`select_for_update()` plus a transaction lets you re-check current state under lock.

## 61.6 Amount-based routing

Example rule:

```text
Amount <= 10,000    -> Manager only
10,001–100,000      -> Manager + Finance
> 100,000           -> Manager + Finance + CFO
```

Do not hard-code this independently in three views.

Use a routing service/configuration:

```python
def determine_stages(amount):
    if amount <= 10_000:
        return ["manager"]
    if amount <= 100_000:
        return ["manager", "finance"]
    return ["manager", "finance", "cfo"]
```

For configurable enterprises, stages and thresholds may be stored in normalized configuration tables with effective dates.

## 61.7 Delegation and absence

Real workflows often need:

- temporary delegate
- escalation after SLA
- backup approver
- out-of-office replacement
- role change while request is pending

Model these explicitly rather than changing historical approver rows.

## 61.8 Approval security checklist

- [ ] Server checks current workflow status.
- [ ] Server checks actor is the allowed approver.
- [ ] Self-approval rule is enforced if prohibited.
- [ ] Tenant/company scoping is enforced.
- [ ] Transition happens transactionally.
- [ ] Approval history is stored.
- [ ] Duplicate approval is idempotent or rejected safely.
- [ ] Notifications run after commit.
- [ ] Amount thresholds are tested at boundaries.
- [ ] Delegation rules are auditable.

---

# 62. Invoice Processing Scenario

This scenario combines uploads, extraction, matching, workflows, posting, and background tasks.

## 62.1 Business flow

```text
Invoice uploaded
   |
   v
Document validation
   |
   v
OCR / extraction
   |
   v
Normalized invoice data
   |
   +----> PO / receipt matching
   |
   +----> duplicate detection
   |
   +----> tax/business validation
   |
   v
Match successful?
  / \
Yes  No
 |    |
 v    v
Ready Workflow/Query
for   route
posting
 |
 v
ERP posting
 |
 v
Posted / Failed / Retry
```

## 62.2 Suggested core models

```text
Invoice
InvoiceDocument
InvoiceLine
InvoiceExtraction
InvoiceValidationIssue
InvoiceMatchResult
InvoiceApproval
InvoicePostingAttempt
Vendor
PurchaseOrderReference
```

Do not place every concept into one 150-column table just because it is “one invoice screen.”

## 62.3 Invoice model

```python
class Invoice(models.Model):
    class Status(models.TextChoices):
        RECEIVED = "received", "Received"
        EXTRACTING = "extracting", "Extracting"
        VALIDATING = "validating", "Validating"
        QUERY = "query", "Query"
        APPROVAL = "approval", "Approval"
        READY_TO_POST = "ready_to_post", "Ready to Post"
        POSTING = "posting", "Posting"
        POSTED = "posted", "Posted"
        FAILED = "failed", "Failed"

    company = models.ForeignKey(
        Company,
        on_delete=models.PROTECT,
    )
    vendor = models.ForeignKey(
        Vendor,
        null=True,
        blank=True,
        on_delete=models.PROTECT,
    )
    invoice_number = models.CharField(
        max_length=100,
        blank=True,
    )
    invoice_date = models.DateField(
        null=True,
        blank=True,
    )
    total = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        null=True,
        blank=True,
    )
    status = models.CharField(
        max_length=30,
        choices=Status,
        default=Status.RECEIVED,
    )
    created_at = models.DateTimeField(auto_now_add=True)
```

## 62.4 Keep raw extraction evidence

OCR/LLM output can change after reprocessing. Preserve traceability.

```python
class InvoiceExtraction(models.Model):
    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE,
        related_name="extractions",
    )
    engine = models.CharField(max_length=100)
    engine_version = models.CharField(max_length=100)
    raw_result = models.JSONField()
    normalized_result = models.JSONField()
    confidence = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
```

This lets you answer:

```text
Which extraction engine produced this value?
What was the raw detected text?
Was a field corrected manually?
```

## 62.5 Duplicate detection

Do not rely on only one field.

Possible candidate key:

```text
company
vendor
normalized invoice number
invoice date
amount
```

Then use business-specific logic for edge cases.

Database constraint may help when the uniqueness rule is reliable:

```python
models.UniqueConstraint(
    fields=["company", "vendor", "invoice_number"],
    name="uniq_vendor_invoice_per_company",
)
```

But if vendors legitimately reuse invoice numbers by fiscal year or location, design accordingly.

## 62.6 Validation issues as rows

Instead of one long status text:

```python
class InvoiceValidationIssue(models.Model):
    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE,
        related_name="validation_issues",
    )
    code = models.CharField(max_length=100)
    field = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    severity = models.CharField(max_length=20)
    is_resolved = models.BooleanField(default=False)
```

Example:

```text
MISSING_PO_NUMBER
TOTAL_MISMATCH
VENDOR_NOT_FOUND
DUPLICATE_CANDIDATE
TAX_ID_INVALID
```

Machine-readable codes are easier to report and automate than arbitrary text.

## 62.7 Matching service

```python
def match_invoice(invoice):
    issues = []

    if not invoice.vendor_id:
        issues.append("VENDOR_NOT_FOUND")

    # fetch PO/receipt evidence
    # compare quantities, amounts, taxes, tolerances
    # return structured result

    return MatchResult(
        matched=not issues,
        issues=issues,
    )
```

Keep matching rules separate from the HTTP view.

## 62.8 Posting to ERP

Posting must be idempotent.

A retry after timeout must not create two ERP documents.

```python
class InvoicePostingAttempt(models.Model):
    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.PROTECT,
        related_name="posting_attempts",
    )
    idempotency_key = models.UUIDField(unique=True)
    request_payload = models.JSONField()
    response_payload = models.JSONField(null=True)
    external_document_id = models.CharField(
        max_length=100,
        blank=True,
    )
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
```

## 62.9 Never hold a database lock while waiting for slow OCR/ERP

Bad:

```python
with transaction.atomic():
    invoice = Invoice.objects.select_for_update().get(...)
    result = slow_erp_api_call()  # 20 seconds
```

The lock remains while waiting.

Instead:

1. take a short transaction to claim/change state
2. commit
3. perform slow I/O
4. take another short transaction to save the result after re-checking state

## 62.10 Query/rework flow

Use explicit status/history, not only a comment field.

```text
VALIDATING
 -> QUERY
 -> RESUBMITTED
 -> VALIDATING
 -> APPROVAL
```

Record:

- query reason
- raised by
- raised at
- response
- responded by
- responded at

## 62.11 Observability

Track metrics such as:

```text
invoices received/day
OCR success rate
average extraction time
manual correction rate
matching success rate
workflow turnaround
ERP posting failure rate
retry count
duplicate detection rate
```

These tell you where automation is actually failing.

---

# 63. Common Django Mistakes

## Mistake 1: Putting everything in one app

Bad:

```text
main/models.py -> 120 models
main/views.py  -> 8,000 lines
```

Split by business domain when cohesion becomes poor.

## Mistake 2: One app per model

The opposite extreme is also bad.

```text
product_app
product_image_app
product_price_app
product_tag_app
```

Apps are business capabilities, not automatically tables.

## Mistake 3: Business logic in templates

Bad:

```django
{% if invoice.amount > 100000 and user... %}
```

Templates should present decisions, not become workflow engines.

## Mistake 4: Trusting hidden HTML fields

```html
<input type="hidden" name="approved" value="false">
```

A user can modify it.

Never trust frontend data for authorization or protected state.

## Mistake 5: `fields = "__all__"` on sensitive ModelForms

Can expose internal fields.

Use explicit allowlists.

## Mistake 6: Using `float` for money

Use decimal representations.

## Mistake 7: Ignoring N+1 queries

Learn `select_related()` and `prefetch_related()` early.

## Mistake 8: Calling `len(queryset)` only to count database rows

Use:

```python
queryset.count()
```

when you only need a database count and the queryset has not already been evaluated for another reason.

## Mistake 9: Fetching all objects to check existence

Use:

```python
queryset.exists()
```

## Mistake 10: Overusing signals

Hidden side effects make complex workflows hard to understand.

## Mistake 11: Long-running work in request

Move expensive processing to background workers.

## Mistake 12: No transactions for multi-row business writes

A half-created order is worse than a failed order.

## Mistake 13: Huge transactions around external APIs

Transactions should be as short as practical.

## Mistake 14: Ignoring race conditions

“Works on my machine” with one user does not prove concurrent correctness.

## Mistake 15: Catching every exception

Bad:

```python
except Exception:
    return None
```

It turns real failures into mysterious state.

## Mistake 16: `DEBUG=True` in production

Never do this.

## Mistake 17: Committing secrets

Do not commit `.env` containing real secrets.

## Mistake 18: Assuming static and media files are the same

They have different ownership and security models.

## Mistake 19: Serving private uploads publicly

Authorization must protect sensitive files.

## Mistake 20: No database constraints

Application validation cannot replace uniqueness/check constraints under concurrency.

## Mistake 21: Editing old migrations after production deployment

Prefer new migrations.

## Mistake 22: Importing current model directly inside data migrations

Use historical models from the migration `apps` registry.

## Mistake 23: Circular imports between apps

Use architectural boundaries, string model references, or local imports where appropriate rather than creating tangled modules.

## Mistake 24: Premature abstraction

A 50-line CRUD app does not need repositories, command buses, factories, and eight service interfaces.

## Mistake 25: No authorization on list queries

Object detail may be protected while list API leaks everything.

Scope every relevant queryset.

## Mistake 26: Assuming serializer/form validation is a database lock

Two requests can pass validation simultaneously. Use constraints and concurrency controls.

## Mistake 27: Calling external service from model `save()`

Saving a model should not unexpectedly block on remote networks unless that behavior is extremely deliberate.

## Mistake 28: No idempotency for webhook/task processing

Retries happen.

## Mistake 29: `null=True` everywhere

Model optionality intentionally.

## Mistake 30: Optimizing without measuring

Profile before redesigning.

---

# 64. Debugging Guide

Debugging should be a process, not random edits.

## 64.1 Start from the failure boundary

Ask:

```text
What was expected?
What actually happened?
What input triggered it?
Can I reproduce it?
Where is the first point state differs from expectation?
```

## 64.2 URL returns 404

Check:

1. root `urls.py`
2. app `include()`
3. app path pattern
4. converters
5. trailing slash
6. namespace/name
7. object lookup in view

Remember two different 404 classes:

```text
URL not matched
Object not found
```

## 64.3 Template does not exist

Check:

```text
TEMPLATES DIRS
APP_DIRS
app is installed
template directory naming
exact template path/case
```

## 64.4 Static file not loading

Development:

- `{% load static %}`
- correct `{% static %}` path
- app/static layout
- browser network panel

Production:

- `collectstatic`
- `STATIC_ROOT`
- configured storage/server/CDN
- cache headers

## 64.5 Uploaded file missing

Check:

```html
enctype="multipart/form-data"
```

and:

```python
request.FILES
Form(request.POST, request.FILES)
```

## 64.6 CSRF 403

Check:

- `{% csrf_token %}`
- correct CSRF cookie/header for JS
- HTTPS/proxy configuration
- trusted origins where truly required
- cookie domain/SameSite behavior

Do not solve by adding `@csrf_exempt` blindly.

## 64.7 `NoReverseMatch`

Check:

```text
URL name
namespace
required arguments
argument type/converter
```

Use shell:

```python
from django.urls import reverse
reverse("products:detail", args=[1])
```

## 64.8 Migration conflict/error

Use:

```bash
python manage.py showmigrations
python manage.py makemigrations --check
python manage.py migrate --plan
```

Read the migration dependency graph.

Do not delete migration files randomly.

## 64.9 Database query unexpectedly slow

Inspect:

```python
print(qs.query)
print(qs.explain())
```

Then check:

- index
- join count
- row estimates
- sort
- N+1
- data distribution
- lock waits
- transaction duration

## 64.10 Too many queries

Look for loops accessing relationships:

```python
for invoice in invoices:
    print(invoice.vendor.name)
```

Consider:

```python
select_related("vendor")
```

## 64.11 500 only in production

Check:

- centralized error logs
- exception monitoring
- environment variables
- production settings
- missing static assets
- database connectivity
- permissions
- host/proxy configuration
- dependency versions

Never enable public `DEBUG=True` to inspect a production incident.

## 64.12 `DisallowedHost`

Check `ALLOWED_HOSTS` and reverse-proxy host forwarding.

Do not simply set:

```python
ALLOWED_HOSTS = ["*"]
```

without understanding the consequences.

## 64.13 `OperationalError: database is locked` with SQLite

SQLite is excellent for learning/small use cases but has different concurrency characteristics than client/server databases. If a workload requires high write concurrency, consider whether PostgreSQL/MySQL is more appropriate.

## 64.14 Memory growth during batch processing

Check whether you load all objects:

```python
rows = list(HugeModel.objects.all())
```

Use chunking/`iterator()` and avoid accumulating results unnecessarily.

## 64.15 Debug with Django shell

```bash
python manage.py shell
```

Examples:

```python
from invoices.models import Invoice
Invoice.objects.filter(status="pending").count()
```

Reproduce the exact query or service outside the HTTP layer.

## 64.16 Use minimal reproduction

If a complex page fails, reduce:

```text
full request -> view -> service -> queryset -> single operation
```

The smallest reproducible case usually reveals the real problem.

---

# 65. Interview Questions

Use these as understanding checks rather than memorized scripts.

## Beginner

### Q1. What is Django?
A high-level Python web framework providing common web-development infrastructure such as routing, ORM, templates, forms, authentication, admin, and security features.

### Q2. Project vs app?
A project is the complete deployment/configuration; an app is a cohesive reusable functional module inside it.

### Q3. What is MTV?
Model, Template, View.

### Q4. What is a QuerySet?
A lazy representation of a database query and its result set, supporting filtering, ordering, annotation, and composition.

### Q5. `get()` vs `filter()`?
`get()` expects one object and raises exceptions for zero/multiple results; `filter()` returns a QuerySet, possibly empty or containing many rows.

### Q6. `null=True` vs `blank=True`?
`null` controls database NULL; `blank` controls validation-level emptiness.

### Q7. What is a migration?
A version-controlled operation describing schema/data evolution.

### Q8. Why use `{% csrf_token %}`?
To participate in Django's CSRF protection for state-changing form requests.

## Intermediate

### Q9. `select_related()` vs `prefetch_related()`?
`select_related()` joins single-valued FK/one-to-one relations in SQL; `prefetch_related()` performs separate queries and combines many-valued relationships in Python.

### Q10. What is N+1?
One initial query followed by one additional query per result, often caused by accessing unloaded relationships in a loop.

### Q11. `F()` expression use?
Perform/reference database-side field operations without first loading the value into Python; useful for updates and column comparisons.

### Q12. `Q()` use?
Express OR, NOT, and dynamic compound query logic.

### Q13. Why use `transaction.atomic()`?
To guarantee a set of database operations commits together or rolls back together when an exception escapes.

### Q14. Why `select_for_update()`?
To lock selected rows during a transaction when coordinating concurrent changes.

### Q15. Why `transaction.on_commit()`?
To run side effects/queue work only after a transaction successfully commits.

### Q16. Form vs ModelForm?
`Form` declares independent input fields; `ModelForm` derives fields/save behavior from a model.

### Q17. Authentication vs authorization?
Authentication identifies the user; authorization determines allowed actions/data.

### Q18. Middleware vs signal?
Middleware wraps request/response processing; signals notify receivers of framework/model events.

## Advanced

### Q19. How would you prevent overselling inventory?
Use short transactions, row locking or atomic database updates, constraints, and re-check state under concurrency rather than relying on a prior read.

### Q20. How do you make webhook handling safe?
Verify authenticity/signature, enforce idempotency using event IDs, make state transitions atomic, tolerate retries/out-of-order events, and log outcomes.

### Q21. How do you optimize a slow QuerySet?
Measure SQL/query plan, eliminate N+1, reduce rows/columns, add justified indexes, move computation to database, cache when appropriate, and re-measure.

### Q22. How do you deploy a schema change with no downtime?
Use backward-compatible expand/contract migrations: add new structure, deploy compatible code, backfill, switch usage, then remove old structure later.

### Q23. How would you design multi-tenant isolation?
Scope all tenant-owned queries, enforce constraints including tenant key, test cross-tenant access, and consider schema/database/RLS isolation depending on requirements.

### Q24. Why can signals hurt maintainability?
They create implicit side effects and order dependencies that are harder to discover and debug; explicit services are often better for core business workflows.

### Q25. WSGI vs ASGI?
WSGI is a synchronous application-server interface; ASGI supports async concurrency/protocol patterns while still allowing Django sync code.

### Q26. When is async useful?
Primarily I/O-bound concurrency. It does not automatically speed CPU-heavy code and requires async-safe dependencies.

### Q27. Why can validation still race?
Two concurrent requests may both validate against the same old state. Database constraints, locks, or atomic operations are needed for concurrency-safe integrity.

### Q28. How do you avoid duplicate background side effects?
Design tasks as idempotent, store unique operation/event keys, use state checks/constraints, and treat retries as normal.

### Q29. Why use database constraints when serializers already validate?
Constraints provide integrity across every write path and close race conditions that application-level validation cannot guarantee.

### Q30. How do you investigate an ORM performance problem?
Inspect query count, generated SQL, `EXPLAIN`, indexes, row estimates, relationship loading, transaction locks, and actual data distribution.

---

# 66. Practice Projects

Build these in order. Do not copy complete tutorials line by line; implement requirements yourself.

## Level 1 — Notes App

Learn:

- project/app
- model
- migration
- admin
- CRUD views
- templates
- forms

Requirements:

```text
Create note
Edit note
Delete note
List notes
Search notes
```

## Level 2 — Blog

Learn:

- slugs
- relationships
- authentication
- comments
- pagination
- permissions

Requirements:

```text
Authors
Posts
Categories
Tags
Comments
Draft/published status
```

## Level 3 — Employee Portal

Learn:

- custom user
- groups
- object permissions
- file uploads
- reports

Requirements:

```text
Employee profile
Manager relationship
Leave request
Manager approval
Documents
Dashboard
```

## Level 4 — Inventory System

Learn:

- transactions
- F expressions
- audit trail
- filters
- reporting

Requirements:

```text
Products
Warehouses
Stock movements
Transfers
Low-stock alerts
```

## Level 5 — E-Commerce

Learn:

- complex relationships
- cart
- checkout
- concurrency
- payment webhook
- idempotency
- background email

## Level 6 — Invoice Automation

Learn:

- file storage
- async/background processing
- OCR integration
- JSON extraction
- validation pipeline
- approval workflow
- ERP integration
- retries
- audit log

## Level 7 — Multi-Tenant SaaS API

Learn:

- DRF
- tenant scoping
- API auth
- permissions
- rate policies
- pagination
- filtering
- caching
- production deployment

## Project rule

Every serious practice project should include:

- README
- `.env.example`
- tests
- migrations
- production settings
- logging
- error handling
- permission tests
- Docker option
- CI pipeline

---

# 67. Learning Roadmap

## Phase 0 — Python foundation

Learn:

```text
Python syntax
functions
classes
exceptions
packages
venv
decorators
context managers
type hints
basic async
```

Build: CLI expense tracker.

## Phase 1 — Django fundamentals

Learn chapters:

```text
2–17
```

Focus on:

- request lifecycle
- URLs
- views
- templates
- models
- relationships

Build: notes app.

## Phase 2 — Database/ORM mastery

Learn:

```text
18–21
```

Practice:

```python
filter
exclude
Q
F
annotate
aggregate
select_related
prefetch_related
Subquery
Exists
transactions
migrations
```

Build: inventory app.

## Phase 3 — User input and admin

Learn:

```text
22–25
```

Build: product management module.

## Phase 4 — Auth and enterprise access

Learn:

```text
26–32
```

Build: leave approval system.

## Phase 5 — Production features

Learn:

```text
33–44
```

Implement:

- uploads
- email
- caching
- logging
- security
- tasks
- tests
- time zones

## Phase 6 — APIs

Learn:

```text
45–46
```

Build REST API for previous project.

## Phase 7 — Database and performance

Learn:

```text
47–49
```

Practice reading SQL execution plans.

## Phase 8 — Production engineering

Learn:

```text
50–58
```

Deploy a real project with:

- PostgreSQL
- production app server
- HTTPS
- persistent storage
- logging
- backups
- Docker
- CI/CD

## Phase 9 — System design

Rebuild one project using explicit services and workflow/state transitions.

## Suggested 12-week plan

### Weeks 1–2
Python review + Django basics.

### Weeks 3–4
Models, ORM, migrations, forms.

### Week 5
Auth, permissions, admin.

### Week 6
Testing and security.

### Week 7
DRF/API.

### Week 8
Advanced ORM + PostgreSQL.

### Week 9
Caching + performance.

### Week 10
Background tasks + integrations.

### Week 11
Docker + deployment + CI/CD.

### Week 12
Capstone project + profiling + security review.

---

# 68. Production Checklist

Use this before every new production launch and adapt it to your environment.

## Application

- [ ] `DEBUG = False`
- [ ] `ALLOWED_HOSTS` is explicit.
- [ ] `SECRET_KEY` is stored securely.
- [ ] Production settings are separate from local settings.
- [ ] `python manage.py check --deploy` reviewed.
- [ ] No development-only middleware/tooling exposed.
- [ ] Custom 400/403/404/500 handling is acceptable.

## HTTPS and browser security

- [ ] HTTPS is enforced.
- [ ] Session cookie is secure.
- [ ] CSRF cookie is secure where appropriate.
- [ ] Proxy SSL configuration is correct.
- [ ] HSTS is evaluated/configured intentionally.
- [ ] Clickjacking policy is correct.
- [ ] CSP is evaluated/configured where appropriate.
- [ ] CORS policy, if used through third-party tooling, is restrictive and understood.

## Authentication

- [ ] Strong password policy/business auth requirements are defined.
- [ ] Password reset flow works.
- [ ] Admin access is restricted appropriately.
- [ ] Brute-force/rate protections exist where needed.
- [ ] MFA/SSO is considered for sensitive applications.

## Authorization

- [ ] Server-side permissions exist for every protected action.
- [ ] Object-level access is tested.
- [ ] Tenant isolation is tested.
- [ ] Hidden UI controls are not relied upon for security.
- [ ] Sensitive form/serializer fields use explicit allowlists.

## Database

- [ ] Production database is not SQLite unless deliberately appropriate.
- [ ] Migrations are committed.
- [ ] Migration strategy is tested.
- [ ] Critical uniqueness/check constraints exist.
- [ ] Important indexes are measured/verified.
- [ ] Backup schedule exists.
- [ ] Restore has been tested.
- [ ] Database is not publicly exposed.

## Static/media

- [ ] `collectstatic` works.
- [ ] Static assets are served efficiently.
- [ ] User uploads are persistent.
- [ ] Upload size limits exist at infrastructure layer.
- [ ] File types are validated according to risk.
- [ ] Private files require authorization/signed access.
- [ ] Upload execution is impossible.
- [ ] Media backup/lifecycle is defined.

## Cache

- [ ] Shared production cache is used where multi-instance consistency requires it.
- [ ] Cache service is not public.
- [ ] Private/tenant cache keys are scoped correctly.
- [ ] Cache invalidation behavior is understood.

## Background work

- [ ] Worker infrastructure exists for queued production tasks.
- [ ] Tasks are idempotent where retries can happen.
- [ ] Retry policy differentiates temporary/permanent failures.
- [ ] Failed tasks are observable.
- [ ] Jobs dependent on transactions are queued after commit.

## Email

- [ ] Production mailer/provider configured.
- [ ] Sender domain authentication (SPF/DKIM/DMARC as relevant) handled externally.
- [ ] Password-reset email tested.
- [ ] Email failures are observable.

## Observability

- [ ] Structured logs are collected.
- [ ] Sensitive fields are redacted.
- [ ] Error monitoring is configured.
- [ ] Request/correlation IDs exist where useful.
- [ ] Health checks exist.
- [ ] Metrics/alerts exist for critical services.

## Performance

- [ ] Slow pages profiled.
- [ ] N+1 queries reviewed.
- [ ] Large lists paginated.
- [ ] Query plans checked for key reports/endpoints.
- [ ] Expensive synchronous operations moved out of requests.
- [ ] Load test performed if traffic risk warrants it.

## Operations

- [ ] Production uses a real WSGI/ASGI server.
- [ ] Processes restart automatically after failure.
- [ ] Deployment rollback is defined.
- [ ] Database rollback/forward strategy is defined.
- [ ] Dependencies are pinned/controlled.
- [ ] Security patch process exists.
- [ ] Incident ownership is known.

---

# 69. Command Cheat Sheet

## Environment

```bash
python -m venv .venv
python -m pip install Django
python -m django --version
```

## Project/app

```bash
django-admin startproject config .
python manage.py startapp products
python manage.py runserver
```

## Database

```bash
python manage.py makemigrations
python manage.py makemigrations --check --dry-run
python manage.py migrate
python manage.py migrate --plan
python manage.py showmigrations
python manage.py sqlmigrate products 0001
```

## User/admin

```bash
python manage.py createsuperuser
python manage.py changepassword username
```

## Shell

```bash
python manage.py shell
```

## Static

```bash
python manage.py collectstatic
python manage.py findstatic css/app.css
```

## Tests

```bash
python manage.py test
python manage.py test products
python manage.py test products.tests.ProductTest
```

## Checks

```bash
python manage.py check
python manage.py check --deploy
```

## Data

```bash
python manage.py dumpdata products.Product
python manage.py loaddata data.json
```

Use fixtures intentionally; for complex evolving test data, factories can often be easier to maintain.

## Sessions

```bash
python manage.py clearsessions
```

## Translations

```bash
python manage.py makemessages -l hi
python manage.py compilemessages
```

## Migration maintenance

```bash
python manage.py squashmigrations app_name 0100
```

## Helpful discovery

```bash
python manage.py help
python manage.py help migrate
```

---

# 70. ORM Cheat Sheet

## Create

```python
Product.objects.create(name="Mouse", price="999.00")
```

## Get one

```python
Product.objects.get(pk=1)
```

## All

```python
Product.objects.all()
```

## Filter

```python
Product.objects.filter(is_active=True)
```

## Exclude

```python
Product.objects.exclude(status="deleted")
```

## Lookups

```python
price__gt=100
price__gte=100
price__lt=100
price__lte=100
name__contains="abc"
name__icontains="abc"
id__in=[1, 2]
field__isnull=True
```

## OR

```python
Product.objects.filter(
    Q(name__icontains="phone") |
    Q(description__icontains="phone")
)
```

## NOT

```python
Product.objects.filter(~Q(status="deleted"))
```

## Field expression

```python
Product.objects.update(
    stock=F("stock") + 1
)
```

## Order

```python
Product.objects.order_by("name")
Product.objects.order_by("-created_at")
```

## First

```python
Product.objects.first()
```

## Exists

```python
Product.objects.filter(sku="A1").exists()
```

## Count

```python
Product.objects.count()
```

## Values

```python
Product.objects.values("id", "name")
```

## Flat list

```python
Product.objects.values_list("id", flat=True)
```

## Update

```python
Product.objects.filter(pk=1).update(
    is_active=False
)
```

## Delete

```python
Product.objects.filter(pk=1).delete()
```

## Aggregate

```python
Order.objects.aggregate(total=Sum("amount"))
```

## Annotate

```python
Customer.objects.annotate(
    order_count=Count("orders")
)
```

## Foreign key optimization

```python
Order.objects.select_related("customer")
```

## Collection optimization

```python
Customer.objects.prefetch_related("orders")
```

## Subquery

```python
Subquery(...)
OuterRef(...)
Exists(...)
```

## Lock

```python
with transaction.atomic():
    product = (
        Product.objects
        .select_for_update()
        .get(pk=1)
    )
```

## SQL

```python
print(qs.query)
print(qs.explain())
```

## Large iteration

```python
for row in qs.iterator(chunk_size=1000):
    ...
```

---

# 71. Glossary

**App** — A cohesive Django module providing a functional capability.

**Project** — The complete Django configuration/application deployment.

**Model** — Python class representing persistent data and related behavior.

**ORM** — Object-Relational Mapper; maps Python operations to relational database operations.

**QuerySet** — Lazy, composable representation of a database query/result collection.

**Migration** — Version-controlled database schema/data evolution operation.

**View** — Code that handles a request and produces a response.

**Template** — Presentation layer used to render text/HTML.

**URLconf** — Django URL-routing configuration.

**Middleware** — Request/response processing layer wrapping view execution.

**Form** — Django input/validation abstraction.

**ModelForm** — Form generated from a model with model save integration.

**Serializer** — In DRF, converts/validates data between Python objects and API representations.

**Authentication** — Determining who the caller is.

**Authorization** — Determining what the caller may do/access.

**Permission** — An authorization rule/capability.

**Session** — Server-associated state maintained across HTTP requests, typically keyed by a browser cookie.

**Cookie** — Small browser-stored value sent with matching HTTP requests.

**CSRF** — Cross-Site Request Forgery; unauthorized state-changing request using another user's authenticated browser.

**XSS** — Cross-Site Scripting; attacker-controlled script executes in another user's browser.

**CSP** — Content Security Policy; browser policy limiting trusted content sources/execution.

**WSGI** — Synchronous Python web application server interface.

**ASGI** — Asynchronous-capable Python application server interface.

**N+1 Query** — One base query plus one extra query for each result due to lazy relationship access.

**Transaction** — Atomic group of database operations.

**Row lock** — Database mechanism restricting concurrent modifications to selected rows.

**Idempotency** — Repeating an operation produces no additional unintended effect after the first successful application.

**Cache** — Temporary stored result reused to avoid recomputation/retrieval.

**Signal** — Django event notification mechanism.

**Manager** — Interface through which model-level query operations are exposed.

**Database constraint** — Rule enforced by the database, such as uniqueness or checks.

**Index** — Database structure that can accelerate specific lookups/orderings at a storage/write cost.

**Reverse proxy** — Server in front of Django handling incoming network requests and forwarding them upstream.

**Static file** — Application-owned asset such as CSS/JS/image.

**Media file** — User-uploaded content.

**Background task** — Work executed outside the immediate HTTP request-response lifecycle.

**Worker** — Process/service that executes queued background jobs.

**Tenant** — Organization/customer whose data is logically isolated in a multi-tenant system.

**Audit log** — Durable record of who performed meaningful actions and when.

---

# 72. Official References

This handbook is designed as a learning/reference layer. For exact API signatures, version-specific behavior, deprecations, and security updates, always check primary documentation.

## Django

- Main site: https://www.djangoproject.com/
- Documentation: https://docs.djangoproject.com/
- Django 6.1 docs: https://docs.djangoproject.com/en/6.1/
- Django download/supported versions: https://www.djangoproject.com/download/
- Release notes: https://docs.djangoproject.com/en/6.1/releases/
- Security: https://docs.djangoproject.com/en/6.1/topics/security/
- Deployment checklist: https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/
- Models: https://docs.djangoproject.com/en/6.1/topics/db/models/
- Queries: https://docs.djangoproject.com/en/6.1/topics/db/queries/
- Transactions: https://docs.djangoproject.com/en/6.1/topics/db/transactions/
- Forms: https://docs.djangoproject.com/en/6.1/topics/forms/
- Authentication: https://docs.djangoproject.com/en/6.1/topics/auth/
- Testing: https://docs.djangoproject.com/en/6.1/topics/testing/
- Caching: https://docs.djangoproject.com/en/6.1/topics/cache/
- Performance: https://docs.djangoproject.com/en/6.1/topics/performance/
- Async: https://docs.djangoproject.com/en/6.1/topics/async/

## Django REST Framework

- Main docs: https://www.django-rest-framework.org/
- API Guide: https://www.django-rest-framework.org/api-guide/
- Release notes: https://www.django-rest-framework.org/community/release-notes/

## Python

- Python documentation: https://docs.python.org/3/

## PostgreSQL

- PostgreSQL documentation: https://www.postgresql.org/docs/

---

> **Important version note:** This handbook uses Django 6.1 as the primary modern baseline and also keeps Django 5.2 LTS users in mind. Django and its ecosystem continue evolving. Verify deprecations and exact APIs against the documentation for the version installed in your project.

---
# Appendix A. AppConfig, Application Registry, and System Checks

Django has an application-loading system behind `INSTALLED_APPS`.

## A.1 AppConfig

An app can define configuration:

```python
from django.apps import AppConfig

class InvoicesConfig(AppConfig):
    name = "invoices"
    verbose_name = "Invoice Processing"
```

Django can discover an `AppConfig` using normal modern conventions, or the project can reference it explicitly where necessary.

## A.2 `ready()`

`AppConfig.ready()` runs after the application registry is populated.

A common signal-registration pattern:

```python
class InvoicesConfig(AppConfig):
    name = "invoices"

    def ready(self):
        from . import signals  # noqa: F401
```

Be careful inside `ready()`:

- avoid expensive startup work
- avoid making database queries as normal startup behavior
- remember commands, tests, workers, and web processes may all initialize apps
- keep startup deterministic

## A.3 Application registry

Django tracks installed model/application metadata.

Example:

```python
from django.apps import apps

Invoice = apps.get_model("invoices", "Invoice")
```

This is especially important in migrations where historical models are required.

## A.4 System checks

Django's check framework detects configuration problems.

Run:

```bash
python manage.py check
```

Custom check example:

```python
from django.core.checks import Error, register

@register()
def check_required_setting(app_configs, **kwargs):
    from django.conf import settings

    if not getattr(settings, "ERP_BASE_URL", None):
        return [
            Error(
                "ERP_BASE_URL is not configured.",
                id="integrations.E001",
            )
        ]

    return []
```

System checks are useful for catching deployment/configuration errors before traffic reaches the application.

---

# Appendix B. Multiple Databases and Database Routers

Django can connect to multiple databases.

## B.1 Configuration

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "primary",
        ...
    },
    "reporting": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "reporting",
        ...
    },
}
```

## B.2 Query a specific database

```python
Invoice.objects.using("reporting").filter(
    status="posted"
)
```

Save:

```python
invoice.save(using="default")
```

Delete:

```python
invoice.delete(using="default")
```

## B.3 Manager on another database

```python
Invoice.objects.db_manager("reporting").create(...)
```

## B.4 Transaction on a named database

```python
from django.db import transaction

with transaction.atomic(using="default"):
    ...
```

A transaction is associated with one database connection. Django does not magically create a distributed ACID transaction across unrelated databases.

## B.5 Database router

A router can decide where reads/writes/migrations go.

```python
class ReportingRouter:
    route_app_labels = {"analytics"}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return "reporting"
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return "reporting"
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label in self.route_app_labels:
            return db == "reporting"
        return None
```

Settings:

```python
DATABASE_ROUTERS = [
    "config.routers.ReportingRouter",
]
```

## B.6 Read replicas

A common architecture:

```text
Writes -> primary
Some reads -> replica
```

Be aware of replication lag:

```text
write user
immediately read replica
record not visible yet
```

Critical read-after-write flows should read from the primary or use a consistency-aware strategy.

## B.7 Cross-database relations

Relational constraints normally live inside one database. Cross-database foreign-key semantics are limited and should be designed deliberately.

---

# Appendix C. ContentTypes, Generic Relations, and GenericForeignKey

Django's ContentTypes framework identifies installed model types.

This enables generic relationships: one table can reference objects from different models.

## C.1 Example: generic activity record

You want one activity table to target:

```text
Invoice
Order
Employee
Ticket
```

Model:

```python
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Activity(models.Model):
    content_type = models.ForeignKey(
        ContentType,
        on_delete=models.CASCADE,
    )
    object_id = models.PositiveBigIntegerField()
    target = GenericForeignKey(
        "content_type",
        "object_id",
    )

    action = models.CharField(max_length=100)
```

Usage:

```python
Activity.objects.create(
    target=invoice,
    action="approved",
)
```

## C.2 Reverse generic relation

```python
from django.contrib.contenttypes.fields import GenericRelation

class Invoice(models.Model):
    activities = GenericRelation(Activity)
```

## C.3 When generic foreign keys help

- generic comments
- generic tags
- activity streams
- notifications
- audit references

## C.4 Trade-offs

A `GenericForeignKey` is not a normal database foreign key to one concrete table.

Consequences can include:

- weaker database-level referential integrity
- more complex queries
- harder reporting
- type/object ID indexing considerations

Use a normal FK whenever the target type is known and stable.

---

# Appendix D. Model Inheritance and Proxy Models

Django supports several inheritance patterns.

## D.1 Abstract base class

Use when multiple models share fields/behavior but should have separate tables.

```python
class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Invoice(TimeStampedModel):
    invoice_number = models.CharField(max_length=100)

class Order(TimeStampedModel):
    order_number = models.CharField(max_length=100)
```

No `TimeStampedModel` table is created.

## D.2 Multi-table inheritance

```python
class Document(models.Model):
    title = models.CharField(max_length=200)

class InvoiceDocument(Document):
    invoice_number = models.CharField(max_length=100)
```

Each concrete class has a table linked through one-to-one inheritance.

Trade-offs:

- implicit joins
- more complicated queries/schema
- sometimes surprising performance

Prefer composition/explicit relations unless inheritance models the domain clearly.

## D.3 Proxy model

A proxy model changes Python/admin behavior without creating a new table.

```python
class PendingInvoiceManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status="pending")

class PendingInvoice(Invoice):
    objects = PendingInvoiceManager()

    class Meta:
        proxy = True
```

Possible use:

- alternate admin presentation
- specialized manager
- model-specific Python behavior over same rows

---

# Appendix E. Custom Fields, Lookups, Transforms, and ORM Expressions

Django's ORM is extensible.

## E.1 Custom model field

A custom field can encapsulate specialized storage/conversion behavior.

Concept:

```python
class UppercaseCharField(models.CharField):
    def get_prep_value(self, value):
        value = super().get_prep_value(value)
        if value is None:
            return None
        return value.upper()
```

Production custom fields require careful implementation of serialization/deconstruction, database types, conversion, form integration, and compatibility.

Use them when a domain type recurs enough to justify framework-level abstraction.

## E.2 Custom lookup

You can register database query operations so code can express:

```python
Model.objects.filter(field__customlookup=value)
```

This is useful for database-specific or domain-specific search behavior.

## E.3 Custom database function/expression

Django expression classes can wrap SQL functions.

Concept:

```python
from django.db.models import Func

class MyDatabaseFunction(Func):
    function = "MY_FUNCTION"
```

Then:

```python
qs.annotate(result=MyDatabaseFunction("field"))
```

## E.4 Security

When implementing `as_sql()` or custom SQL pieces, distinguish SQL structure from user values. Parameterize untrusted values and never interpolate them unsafely.

---

# Appendix F. Serialization, Fixtures, Natural Keys, and Data Import

Django has built-in serialization utilities and fixture commands.

## F.1 Dump data

```bash
python manage.py dumpdata products.Product \
    --indent 2 > products.json
```

## F.2 Load fixture

```bash
python manage.py loaddata products.json
```

Fixtures can help with:

- small seed/reference datasets
- demos
- specific tests

They can become hard to maintain for complex relational test setup. Factories or explicit setup code may scale better.

## F.3 Serialization API

Concept:

```python
from django.core import serializers

data = serializers.serialize(
    "json",
    Product.objects.all(),
)
```

## F.4 Natural keys

A natural key identifies an object by meaningful stable fields instead of database PK.

Example:

```python
class CountryManager(models.Manager):
    def get_by_natural_key(self, code):
        return self.get(code=code)

class Country(models.Model):
    code = models.CharField(max_length=2, unique=True)
    name = models.CharField(max_length=100)

    objects = CountryManager()

    def natural_key(self):
        return (self.code,)
```

Useful for fixtures where database-generated IDs differ between environments.

## F.5 Large imports

For large imports:

- validate incrementally
- use streaming/chunks
- use bulk operations where safe
- record import job/status
- preserve row-level errors
- make retry semantics clear
- do not hold one enormous transaction unnecessarily

---

# Appendix G. Important `django.contrib` Applications

Django ships optional reusable applications in `django.contrib`.

## G.1 `django.contrib.admin`

Admin management interface.

## G.2 `django.contrib.auth`

Users, groups, permissions, password hashing, auth views.

## G.3 `django.contrib.contenttypes`

Tracks installed model types and powers generic relations/permissions infrastructure.

## G.4 `django.contrib.sessions`

Session storage/framework.

## G.5 `django.contrib.messages`

One-time user messages.

## G.6 `django.contrib.staticfiles`

Static file discovery/collection.

## G.7 `django.contrib.sites`

Represents sites/domains when one Django installation needs site-aware behavior.

Example use:

```text
same code/database serves example.com and example.org
```

Do not add it unless you need site identity as data.

## G.8 `django.contrib.sitemaps`

Generate XML sitemap information for search engines.

Concept:

```python
from django.contrib.sitemaps import Sitemap

class ProductSitemap(Sitemap):
    changefreq = "weekly"

    def items(self):
        return Product.objects.filter(is_active=True)

    def location(self, obj):
        return obj.get_absolute_url()
```

## G.9 Syndication feeds

Django provides feed-generation support for RSS/Atom-style feeds.

Useful for blogs/news/update streams.

## G.10 Redirects

`django.contrib.redirects` can store database-managed redirects when combined with the Sites framework and middleware.

## G.11 Flatpages

`django.contrib.flatpages` can store simple static-ish pages in the database.

Useful for basic CMS-like pages, although many projects use a dedicated CMS or normal templates instead.

## G.12 Humanize

`django.contrib.humanize` provides template filters for human-friendly values such as numbers/dates.

## G.13 PostgreSQL contrib

`django.contrib.postgres` exposes PostgreSQL-specific features, searches, indexes, expressions, and related tools.

## G.14 GIS

`django.contrib.gis` provides GeoDjango capabilities.

---

# Appendix H. GeoDjango

GeoDjango adds geographic data support.

Use cases:

- nearby stores
- delivery zones
- maps
- geofencing
- route/region data
- “restaurants within 5 km”

## H.1 Spatial field concept

```python
from django.contrib.gis.db import models

class Store(models.Model):
    name = models.CharField(max_length=200)
    location = models.PointField()
```

## H.2 Spatial query concept

```python
Store.objects.filter(
    location__distance_lte=(point, distance)
)
```

## H.3 Spatial database

PostGIS (PostgreSQL extension) is a common GeoDjango backend.

Geospatial systems require understanding:

- coordinate reference systems
- latitude/longitude order
- distance units
- spatial indexes
- geometry vs geography semantics

Do not treat map coordinates as ordinary strings if you need real geospatial queries.

---

# Appendix I. Conditional Responses, Streaming, Decorators, and HTTP Utilities

Django has many useful HTTP-level tools beyond `render()`.

## I.1 Method decorators

```python
from django.views.decorators.http import (
    require_GET,
    require_POST,
    require_http_methods,
)

@require_POST
def approve(request, pk):
    ...
```

This clearly declares allowed methods.

## I.2 `redirect()`

```python
from django.shortcuts import redirect

return redirect("products:detail", pk=product.pk)
```

## I.3 `get_list_or_404()`

Useful when an empty collection should be 404 rather than an empty list.

## I.4 Streaming response

```python
from django.http import StreamingHttpResponse
```

Use for suitable streaming workloads. Understand server/proxy behavior and the fact that long-lived streaming ties up resources differently depending on deployment mode.

## I.5 File response

```python
from django.http import FileResponse

return FileResponse(
    open("report.pdf", "rb"),
    as_attachment=True,
    filename="report.pdf",
)
```

For private cloud files, signed storage URLs may scale better.

## I.6 Conditional GET / ETag / Last-Modified

HTTP caching can avoid retransmitting unchanged resources when clients send validators such as ETag or Last-Modified information.

Django has utilities/decorators for conditional response behavior.

Use HTTP caching semantics alongside application caching when serving cacheable public resources.

---

# Appendix J. Reusable Django Apps and Packaging

A reusable app is designed to be installed into multiple Django projects.

Examples might be:

```text
audit logging package
approval workflow package
custom form widgets
company SSO integration
```

## J.1 Avoid project-specific assumptions

Reusable app code should not assume:

```text
specific project settings module
specific concrete User model
specific URL root
one database vendor unless documented
```

Use:

```python
settings.AUTH_USER_MODEL
get_user_model()
```

## J.2 App namespace

Use URL namespacing:

```python
app_name = "approvals"
```

## J.3 Templates/static namespacing

Prefer:

```text
approvals/templates/approvals/...
approvals/static/approvals/...
```

so multiple apps do not collide on generic names like `style.css` or `detail.html`.

## J.4 Configuration

Expose documented settings/hooks rather than requiring users to edit package internals.

## J.5 Tests across versions

A reusable package may need a test matrix across supported:

```text
Python versions
Django versions
database backends
```

Follow Django's deprecation policy and test with deprecation warnings enabled before new framework releases.

---

# Appendix K. WebSockets and Django Channels

> **Important:** WebSocket support through Django Channels is ecosystem tooling, not the same thing as Django core request views.

Use WebSockets when the server needs an ongoing bidirectional connection, such as:

- chat
- live notifications
- collaborative UI
- live dashboards
- presence

For ordinary CRUD or “check every 30 seconds,” normal HTTP may be simpler.

A Channels-style architecture commonly includes:

```text
Browser WebSocket
   |
   v
ASGI server
   |
   v
Consumer
   |
   +--> channel layer / Redis
   |
   +--> Django models/services
```

## K.1 Core design rule

Do not duplicate business rules between HTTP views and WebSocket consumers.

Both should call the same service layer:

```text
HTTP approve endpoint ---> approve_invoice()
WebSocket command -------> approve_invoice()
```

## K.2 Authentication

WebSocket connections still require authentication/authorization. Connecting to a socket does not automatically authorize access to every group/object.

## K.3 Scaling

Multi-process WebSocket delivery usually needs a shared channel/broker layer so instances can coordinate events.

---

# Appendix L. Modern Django 6.x Notes

Django evolves continuously. These points help readers coming from older tutorials recognize newer capabilities.

## L.1 Django 5.2 LTS

Django 5.2 is a long-term support release. It is a sensible baseline for organizations that prioritize a longer support window over immediate feature adoption.

## L.2 Django 6.0

Major modern additions include:

- built-in Content Security Policy support
- template partials
- built-in Tasks framework for task definition/queueing abstraction
- modernized email internals
- async paginator support

These features mean older tutorials may recommend third-party solutions for things now partly addressed by core Django.

## L.3 Django 6.1

Important additions include concepts such as:

- model field fetch modes, including peer fetching / blocked unexpected fetches
- database-level `on_delete` options for supported cases
- named `MAILERS` configuration
- ongoing performance/ORM improvements

Also note that supported database/Python versions move forward over time.

## L.4 Version migration rule

Before upgrading:

1. read release notes for every skipped feature version
2. update to latest patch of current series
3. run tests with deprecation warnings
4. remove deprecated usage
5. upgrade dependencies
6. test database migrations
7. test production-like settings
8. load/performance test critical paths

Do not jump major versions in a production system without reading the compatibility notes.

---

# Mastery Self-Assessment

You can call yourself comfortable with Django fundamentals when you can build a CRUD app without copying a tutorial.

You are intermediate when you can confidently explain and use:

- QuerySets and lazy evaluation
- migrations
- forms/ModelForms
- authentication and permissions
- `select_related()` vs `prefetch_related()`
- transactions
- tests
- file handling
- deployment settings

You are approaching advanced Django engineering when you can design and debug:

- concurrency-safe business operations
- complex ORM queries and execution plans
- tenant-safe authorization
- async/background processing boundaries
- idempotent integrations/webhooks
- zero-downtime schema changes
- production observability
- secure upload pipelines
- large-scale caching strategy
- database/index design
- reusable domain/service architecture

The final step is not learning more syntax. It is repeatedly designing, shipping, observing, debugging, and improving real systems.

---

# Final Learning Principle

> **Learn Django by tracing data and responsibility.**
>
> For every feature, ask: where does input enter, where is it validated, who is authorized, where is state changed, what database guarantees protect it, what side effects happen, how is failure handled, how is it tested, and how will it behave under concurrency and production traffic?

If you can answer those questions, you are no longer only learning Django syntax — you are learning Django engineering.

