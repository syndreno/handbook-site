# Docker Master Learning Handbook

> **Goal:** A single beginner-to-advanced Docker handbook that explains
> not only *what* commands do, but *why*, *when*, and *how* to use them
> in realistic projects.

------------------------------------------------------------------------

## Table of Contents

1.  [Docker in Simple Words](#1-docker-in-simple-words)
2.  [Why Docker Exists](#2-why-docker-exists)
3.  [Containers vs Virtual Machines](#3-containers-vs-virtual-machines)
4.  [Core Docker Architecture](#4-core-docker-architecture)
5.  [Installation and First
    Verification](#5-installation-and-first-verification)
6.  [Essential Terminology](#6-essential-terminology)
7.  [Your First Container](#7-your-first-container)
8.  [Docker Images](#8-docker-images)
9.  [Docker Containers](#9-docker-containers)
10. [Dockerfile Fundamentals](#10-dockerfile-fundamentals)
11. [Dockerfile Instructions in
    Depth](#11-dockerfile-instructions-in-depth)
12. [Build Context and
    .dockerignore](#12-build-context-and-dockerignore)
13. [Image Layers and Build Cache](#13-image-layers-and-build-cache)
14. [Multi-stage Builds](#14-multi-stage-builds)
15. [Container Networking](#15-container-networking)
16. [Ports and Port Publishing](#16-ports-and-port-publishing)
17. [Persistent Data and Storage](#17-persistent-data-and-storage)
18. [Volumes vs Bind Mounts vs
    tmpfs](#18-volumes-vs-bind-mounts-vs-tmpfs)
19. [Environment Variables and
    Configuration](#19-environment-variables-and-configuration)
20. [Docker Compose](#20-docker-compose)
21. [Compose Networking and
    Dependencies](#21-compose-networking-and-dependencies)
22. [Health Checks](#22-health-checks)
23. [Logs and Debugging](#23-logs-and-debugging)
24. [Executing Commands Inside
    Containers](#24-executing-commands-inside-containers)
25. [Container Resource Management](#25-container-resource-management)
26. [Restart Policies and
    Reliability](#26-restart-policies-and-reliability)
27. [Docker Registries and Docker
    Hub](#27-docker-registries-and-docker-hub)
28. [Image Tags and Versioning](#28-image-tags-and-versioning)
29. [Authentication and Private
    Registries](#29-authentication-and-private-registries)
30. [Docker Security](#30-docker-security)
31. [Secrets](#31-secrets)
32. [Running as Non-root](#32-running-as-non-root)
33. [Image Optimization](#33-image-optimization)
34. [BuildKit and Modern Builds](#34-buildkit-and-modern-builds)
35. [Build Arguments vs Environment
    Variables](#35-build-arguments-vs-environment-variables)
36. [ENTRYPOINT vs CMD](#36-entrypoint-vs-cmd)
37. [Shell Form vs Exec Form](#37-shell-form-vs-exec-form)
38. [Signals and Graceful Shutdown](#38-signals-and-graceful-shutdown)
39. [Docker with Databases](#39-docker-with-databases)
40. [Docker with Node.js](#40-docker-with-nodejs)
41. [Docker with Angular](#41-docker-with-angular)
42. [Docker with Python](#42-docker-with-python)
43. [Docker with Java and Spring
    Boot](#43-docker-with-java-and-spring-boot)
44. [Docker with PHP](#44-docker-with-php)
45. [Full-stack Application
    Scenario](#45-full-stack-application-scenario)
46. [Development vs Production
    Docker](#46-development-vs-production-docker)
47. [Docker in CI/CD](#47-docker-in-cicd)
48. [Testing with Docker](#48-testing-with-docker)
49. [Docker Networking
    Troubleshooting](#49-docker-networking-troubleshooting)
50. [Storage Troubleshooting](#50-storage-troubleshooting)
51. [Cleanup and Disk Management](#51-cleanup-and-disk-management)
52. [Docker Events, Stats, Inspect and
    Metadata](#52-docker-events-stats-inspect-and-metadata)
53. [Namespaces and cgroups](#53-namespaces-and-cgroups)
54. [Container Lifecycle Internals](#54-container-lifecycle-internals)
55. [Docker Engine Components](#55-docker-engine-components)
56. [Docker and Kubernetes](#56-docker-and-kubernetes)
57. [Anti-patterns and Common
    Mistakes](#57-anti-patterns-and-common-mistakes)
58. [Real-world Scenarios](#58-real-world-scenarios)
59. [Docker Interview Questions](#59-docker-interview-questions)
60. [Command Cheat Sheet](#60-command-cheat-sheet)
61. [Learning Projects](#61-learning-projects)
62. [Mastery Roadmap](#62-mastery-roadmap)
63. [Glossary](#63-glossary)

------------------------------------------------------------------------

# 1. Docker in Simple Words

Docker is a platform for **packaging an application together with the
environment it needs and running that package consistently**.

A Docker container can include:

-   your application
-   runtime such as Java, Node.js, Python or PHP
-   required system libraries
-   application dependencies
-   configuration defaults

The central idea is:

> **Build once, run consistently anywhere that provides a compatible
> container runtime.**

Suppose a developer creates an application with Node.js 24 while the
production server has Node.js 20. Without containers, differences
between machines may cause failures.

With Docker, the application can run in an image containing the required
Node.js version.

``` text
Developer Laptop
      |
      | docker build
      v
Docker Image
      |
      +------> Test Environment
      |
      +------> Staging
      |
      +------> Production
```

Docker therefore helps reduce the classic:

> "But it works on my machine."

------------------------------------------------------------------------

# 2. Why Docker Exists

Before containers, teams commonly installed application dependencies
directly on servers.

Imagine one server running:

``` text
Application A -> PHP 7.4
Application B -> PHP 8.3
Application C -> Node.js 24
Application D -> Java 21
```

Dependencies can conflict. Upgrades become risky, server setup becomes
difficult to reproduce, and onboarding requires long installation
documents.

Docker gives each application an isolated runtime environment.

``` text
Host
├── Container A -> PHP application
├── Container B -> Node application
├── Container C -> Java application
└── Container D -> MySQL
```

### Major benefits

-   repeatable environments
-   application isolation
-   easy onboarding
-   faster deployment
-   immutable application packaging
-   versioned images
-   simpler CI/CD
-   easier horizontal scaling
-   easier rollback
-   environment parity

### Docker does not magically solve

Docker does **not** automatically solve:

-   badly designed applications
-   database backup strategy
-   security
-   orchestration at large scale
-   monitoring
-   secrets management
-   application bugs

It is a tool, not an entire production architecture.

------------------------------------------------------------------------

# 3. Containers vs Virtual Machines

## Virtual machine

A VM normally includes an entire guest operating system.

``` text
Hardware
└── Host OS
    └── Hypervisor
        ├── VM
        │   ├── Guest OS
        │   └── Application
        └── VM
            ├── Guest OS
            └── Application
```

## Container

Containers share the host kernel while maintaining isolated processes,
filesystems and networking.

``` text
Hardware
└── Host OS
    └── Container Runtime
        ├── Container -> App A
        ├── Container -> App B
        └── Container -> App C
```

  Topic         VM                              Container
  ------------- ------------------------------- -------------------------------
  Guest OS      Usually yes                     No separate full guest kernel
  Startup       Usually slower                  Usually fast
  Size          Often GBs                       Often MBs to hundreds of MBs
  Isolation     Strong machine-level boundary   Process-level isolation
  Portability   Good                            Excellent for applications
  Density       Lower                           Higher

Containers are not simply "tiny VMs." Their isolation model is
fundamentally different.

------------------------------------------------------------------------

# 4. Core Docker Architecture

A simplified architecture is:

``` text
Docker CLI
    |
    v
Docker Engine / daemon
    |
    +--> Images
    +--> Containers
    +--> Networks
    +--> Volumes
    |
    v
Registry
```

When you execute:

``` bash
docker run nginx
```

Docker roughly performs:

1.  CLI sends the request to Docker Engine.
2.  Engine checks whether the `nginx` image exists locally.
3.  If absent, it pulls the image from a registry.
4.  Docker creates a writable container layer.
5.  Networking and filesystem isolation are configured.
6.  The configured process starts.
7.  The container exists while its lifecycle is managed by Docker.

------------------------------------------------------------------------

# 5. Installation and First Verification

After installing Docker Desktop or Docker Engine, verify:

``` bash
docker version
```

More environment information:

``` bash
docker info
```

Run the standard test container:

``` bash
docker run hello-world
```

List running containers:

``` bash
docker ps
```

List all containers:

``` bash
docker ps -a
```

> On Linux servers, Docker Engine is commonly installed without Docker
> Desktop. Docker Desktop is convenient for local Windows/macOS
> development.

------------------------------------------------------------------------

# 6. Essential Terminology

## Image

A read-only application template.

Example:

``` text
nginx:1.27
```

## Container

A running or stopped instance created from an image.

Think:

``` text
Class -> Object
Image -> Container
```

This analogy is not technically perfect, but it is useful for beginners.

## Dockerfile

A text file containing instructions for building an image.

## Registry

A service storing container images.

Examples include public and private registries.

## Repository

A collection of image versions/tags for one image name.

## Tag

A human-readable image version label.

``` text
myapp:1.0
myapp:1.1
myapp:latest
```

## Volume

Docker-managed persistent storage.

## Network

A Docker networking construct allowing containers to communicate.

## Compose

A way to describe and run a multi-container application declaratively.

------------------------------------------------------------------------

# 7. Your First Container

Run Nginx:

``` bash
docker run nginx
```

The terminal remains attached because the container runs in the
foreground.

Run detached:

``` bash
docker run -d nginx
```

Publish port 8080 on the host to port 80 inside the container:

``` bash
docker run -d -p 8080:80 nginx
```

Open:

``` text
http://localhost:8080
```

Name the container:

``` bash
docker run -d --name web -p 8080:80 nginx
```

Stop it:

``` bash
docker stop web
```

Start it again:

``` bash
docker start web
```

Delete it:

``` bash
docker rm web
```

Force-delete a running container:

``` bash
docker rm -f web
```

------------------------------------------------------------------------

# 8. Docker Images

List images:

``` bash
docker image ls
```

Pull:

``` bash
docker pull nginx:1.27
```

Inspect:

``` bash
docker image inspect nginx:1.27
```

See layer history:

``` bash
docker history nginx:1.27
```

Remove:

``` bash
docker image rm nginx:1.27
```

Build:

``` bash
docker build -t myapp:1.0 .
```

### Image immutability

Images should be treated as immutable artifacts.

Do not deploy version `1.0`, manually modify a production container, and
call it `1.1`.

Instead:

``` text
change source/Dockerfile
        ↓
build new image
        ↓
myapp:1.1
        ↓
deploy new container
```

This gives reproducibility and rollback.

------------------------------------------------------------------------

# 9. Docker Containers

A container has a lifecycle.

``` text
Created -> Running -> Stopped -> Removed
              |
              -> Paused
```

Create without starting:

``` bash
docker create --name web nginx
```

Start:

``` bash
docker start web
```

Stop gracefully:

``` bash
docker stop web
```

Kill immediately:

``` bash
docker kill web
```

Restart:

``` bash
docker restart web
```

Pause/unpause:

``` bash
docker pause web
docker unpause web
```

Rename:

``` bash
docker rename web frontend
```

### Important principle

A container normally lives around its **main process**. If PID 1 exits,
the container stops.

------------------------------------------------------------------------

# 10. Dockerfile Fundamentals

Example Node.js Dockerfile:

``` dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

Build:

``` bash
docker build -t demo-api:1.0 .
```

Run:

``` bash
docker run -d --name demo-api -p 3000:3000 demo-api:1.0
```

### Mental model

``` text
Dockerfile
   |
docker build
   |
   v
Image
   |
docker run
   |
   v
Container
```

------------------------------------------------------------------------

# 11. Dockerfile Instructions in Depth

## FROM

Defines the base image.

``` dockerfile
FROM python:3.13-slim
```

Nearly every normal Dockerfile begins with `FROM`.

## WORKDIR

Changes the working directory for following instructions.

``` dockerfile
WORKDIR /app
```

Prefer this over repeated:

``` dockerfile
RUN cd /app && ...
```

## COPY

Copies files from the build context.

``` dockerfile
COPY package.json .
COPY src/ ./src/
```

## ADD

Can copy files and has extra behaviors such as archive handling and
URL-related capabilities. For ordinary local copying, prefer `COPY`
because its behavior is clearer.

## RUN

Executes a command **while building the image**.

``` dockerfile
RUN npm ci
```

## CMD

Provides the default command/arguments when the container starts.

``` dockerfile
CMD ["node", "server.js"]
```

## ENTRYPOINT

Defines the executable that the container behaves as.

``` dockerfile
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## EXPOSE

Documents the intended container port.

``` dockerfile
EXPOSE 8080
```

Important: `EXPOSE` does **not** publish the port to your host.

## ENV

Defines an environment variable:

``` dockerfile
ENV APP_ENV=production
```

## ARG

Defines a build-time argument:

``` dockerfile
ARG APP_VERSION
```

Build:

``` bash
docker build --build-arg APP_VERSION=2.1 .
```

## USER

Changes the user used for subsequent build/runtime instructions.

``` dockerfile
USER appuser
```

## LABEL

Adds metadata:

``` dockerfile
LABEL org.opencontainers.image.title="Orders API"
```

## VOLUME

Declares a mount point. In modern application stacks, storage is often
configured explicitly at runtime or in Compose rather than relying
heavily on this instruction.

## HEALTHCHECK

Defines a container health test.

``` dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/health || exit 1
```

## SHELL

Changes the default shell used by shell-form commands.

## STOPSIGNAL

Specifies the signal used to stop the container.

------------------------------------------------------------------------

# 12. Build Context and .dockerignore

When you run:

``` bash
docker build .
```

`.` is the **build context**.

Files from the context can be made available to the build.

A careless context might include:

``` text
node_modules/
.git/
logs/
coverage/
.env
large-backup.zip
```

Create `.dockerignore`:

``` dockerignore
.git
node_modules
coverage
*.log
.env
dist
README.md
```

Benefits:

-   smaller build context
-   faster builds
-   reduced accidental secret exposure
-   fewer cache invalidations

Never assume `.gitignore` automatically acts as `.dockerignore`.

------------------------------------------------------------------------

# 13. Image Layers and Build Cache

Many Dockerfile instructions produce layers.

Example:

``` dockerfile
FROM node:24-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
```

This ordering is intentional.

If only application source changes, Docker may reuse the cached
dependency layer.

Bad ordering:

``` dockerfile
COPY . .
RUN npm ci
```

Every source change can invalidate the dependency installation layer.

### Optimization principle

Copy files that change **less frequently** before files that change
frequently.

------------------------------------------------------------------------

# 14. Multi-stage Builds

A build environment often contains tools not needed at runtime.

Example Angular-style build:

``` dockerfile
FROM node:24-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/my-app/browser /usr/share/nginx/html
EXPOSE 80
```

Stage 1 has Node/npm and build tooling.

Stage 2 contains only Nginx plus static output.

Benefits:

-   smaller production image
-   reduced attack surface
-   cleaner separation
-   build tools absent from runtime

------------------------------------------------------------------------

# 15. Container Networking

List networks:

``` bash
docker network ls
```

Create:

``` bash
docker network create app-network
```

Run two containers on it:

``` bash
docker run -d --name database --network app-network mysql:8
docker run -d --name api --network app-network my-api
```

Containers on a user-defined network can generally resolve each other by
name.

The API should connect to:

``` text
database:3306
```

not:

``` text
localhost:3306
```

### Critical beginner concept

Inside the `api` container:

``` text
localhost
```

means:

``` text
the api container itself
```

It does not mean the database container and does not automatically mean
your host machine.

------------------------------------------------------------------------

# 16. Ports and Port Publishing

Syntax:

``` bash
docker run -p HOST_PORT:CONTAINER_PORT image
```

Example:

``` bash
docker run -p 8080:80 nginx
```

Flow:

``` text
Browser
  |
localhost:8080
  |
Host port 8080
  |
Container port 80
  |
Nginx
```

You can map another host port:

``` bash
docker run -p 9000:80 nginx
```

The application still listens on 80 inside the container.

### Bind to localhost only

For local-only access:

``` bash
docker run -p 127.0.0.1:8080:80 nginx
```

This can reduce unintended network exposure during development.

------------------------------------------------------------------------

# 17. Persistent Data and Storage

Container writable layers are not a good place for important persistent
data.

If a database stores all data only inside its container and the
container is removed, you can lose the data.

Persistent architecture:

``` text
MySQL Container
      |
      v
Docker Volume
      |
      v
Database Files
```

Create a volume:

``` bash
docker volume create mysql-data
```

Use it:

``` bash
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=example \
  -v mysql-data:/var/lib/mysql \
  mysql:8
```

Remove/recreate the container while retaining the volume.

------------------------------------------------------------------------

# 18. Volumes vs Bind Mounts vs tmpfs

## Named volume

``` bash
-v app-data:/data
```

Docker manages the storage location.

Good for:

-   databases
-   application persistent data
-   production-style persistence

## Bind mount

``` bash
-v "$(pwd)":/app
```

Maps a specific host path.

Good for:

-   source code during development
-   configuration files
-   local debugging

## tmpfs

Stores data in host memory rather than persistent disk storage.

Good for temporary sensitive or high-speed ephemeral data where
supported and appropriate.

### Comparison

  Type           Managed by Docker   Persistent Typical use
  ------------ ------------------- ------------ ---------------------------
  Volume                       Yes          Yes DB/application data
  Bind mount                    No          Yes Development/source/config
  tmpfs             Runtime memory           No Temporary data

Modern CLI syntax can use `--mount`, which is more explicit:

``` bash
docker run \
  --mount type=volume,src=mysql-data,dst=/var/lib/mysql \
  mysql:8
```

------------------------------------------------------------------------

# 19. Environment Variables and Configuration

Pass a variable:

``` bash
docker run -e APP_ENV=production myapp
```

Multiple:

``` bash
docker run \
  -e DB_HOST=database \
  -e DB_PORT=3306 \
  myapp
```

Environment file:

``` env
DB_HOST=database
DB_PORT=3306
APP_ENV=development
```

Use:

``` bash
docker run --env-file .env myapp
```

### Important

Environment variables are configuration mechanisms, but ordinary
environment variables should not automatically be considered secure
secret storage.

Do not bake passwords into an image:

``` dockerfile
# BAD
ENV DB_PASSWORD=super-secret
```

------------------------------------------------------------------------

# 20. Docker Compose

A real application often requires multiple services.

Example:

``` yaml
services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      DB_HOST: db
      DB_USER: app
      DB_PASSWORD: example
      DB_NAME: shop
    depends_on:
      - db

  db:
    image: mysql:8
    environment:
      MYSQL_DATABASE: shop
      MYSQL_USER: app
      MYSQL_PASSWORD: example
      MYSQL_ROOT_PASSWORD: root-example
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```

Start:

``` bash
docker compose up
```

Detached:

``` bash
docker compose up -d
```

Stop/remove containers and default network:

``` bash
docker compose down
```

Also remove named volumes declared by the project:

``` bash
docker compose down -v
```

Be careful: removing volumes may delete database data.

### Useful Compose commands

``` bash
docker compose ps
docker compose logs
docker compose logs -f api
docker compose exec api sh
docker compose build
docker compose pull
docker compose restart api
docker compose config
```

------------------------------------------------------------------------

# 21. Compose Networking and Dependencies

Compose normally creates a project network automatically.

Services can communicate using service names.

``` text
api -> db:3306
```

Do not configure:

``` text
DB_HOST=localhost
```

when the DB is a separate Compose service.

## `depends_on` misconception

This:

``` yaml
depends_on:
  - db
```

controls startup ordering, but a process may still need to wait until
the dependency is actually **ready** to accept requests.

Use:

-   health checks
-   application retry logic
-   connection backoff

A robust service should tolerate temporary dependency unavailability.

------------------------------------------------------------------------

# 22. Health Checks

A process being "running" does not necessarily mean the application
works.

Example:

``` yaml
services:
  api:
    image: my-api
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
```

Check:

``` bash
docker ps
```

or:

``` bash
docker inspect api
```

Possible health states include:

``` text
starting
healthy
unhealthy
```

### Good health endpoint

A health endpoint should be fast and intentionally designed. Decide
whether it represents:

-   liveness: process/application is alive
-   readiness: application is ready to receive traffic

Those concepts become especially important in orchestrators.

------------------------------------------------------------------------

# 23. Logs and Debugging

View logs:

``` bash
docker logs container-name
```

Follow:

``` bash
docker logs -f container-name
```

Last 100 lines:

``` bash
docker logs --tail 100 container-name
```

Add timestamps:

``` bash
docker logs -t container-name
```

### Best practice

Containerized applications should usually log to:

``` text
stdout
stderr
```

rather than relying only on log files inside the container.

------------------------------------------------------------------------

# 24. Executing Commands Inside Containers

Open shell:

``` bash
docker exec -it my-container sh
```

If Bash exists:

``` bash
docker exec -it my-container bash
```

Execute one command:

``` bash
docker exec my-container env
```

Check processes:

``` bash
docker top my-container
```

### `run` vs `exec`

``` text
docker run -> creates a new container
docker exec -> runs a command in an existing running container
```

------------------------------------------------------------------------

# 25. Container Resource Management

Limit memory:

``` bash
docker run --memory=512m myapp
```

Limit CPU:

``` bash
docker run --cpus=1.5 myapp
```

View live usage:

``` bash
docker stats
```

Why limits matter:

A runaway container should not consume all host resources and
destabilize unrelated workloads.

For production, resource sizing should be based on observed workload
behavior rather than arbitrary tiny limits.

------------------------------------------------------------------------

# 26. Restart Policies and Reliability

Examples:

``` bash
docker run --restart=no myapp
docker run --restart=on-failure myapp
docker run --restart=always myapp
docker run --restart=unless-stopped myapp
```

Use restart policies for process recovery, but do not use them as a
substitute for fixing an application that continuously crashes.

Inspect repeated failures with:

``` bash
docker logs
docker inspect
docker events
```

------------------------------------------------------------------------

# 27. Docker Registries and Docker Hub

Typical workflow:

``` text
Source Code
    |
docker build
    |
Image
    |
docker push
    |
Registry
    |
docker pull
    |
Deployment Host
```

Tag:

``` bash
docker tag myapp:1.0 username/myapp:1.0
```

Login:

``` bash
docker login
```

Push:

``` bash
docker push username/myapp:1.0
```

Pull elsewhere:

``` bash
docker pull username/myapp:1.0
```

Organizations may use private registries instead of or alongside public
registries.

------------------------------------------------------------------------

# 28. Image Tags and Versioning

Possible tags:

``` text
orders-api:1
orders-api:1.4
orders-api:1.4.7
orders-api:git-a1b2c3d
orders-api:latest
```

### Why `latest` can be dangerous

`latest` is simply a tag; it does not guarantee newest, safest, or
stable.

Production deployments benefit from immutable identification, such as:

``` text
myapp:2.7.3
```

or an image digest.

A digest looks conceptually like:

``` text
image@sha256:...
```

Pinning by digest gives stronger reproducibility because tags can
potentially move.

------------------------------------------------------------------------

# 29. Authentication and Private Registries

Login:

``` bash
docker login registry.example.com
```

Tag:

``` bash
docker tag app:1.0 registry.example.com/team/app:1.0
```

Push:

``` bash
docker push registry.example.com/team/app:1.0
```

Production CI should use secure credential mechanisms supplied by the CI
platform rather than hard-coded passwords in repository files.

------------------------------------------------------------------------

# 30. Docker Security

Container security is a large subject. Start with these principles:

1.  Use trusted/minimal base images.
2.  Keep images and dependencies patched.
3.  Do not run as root unless necessary.
4.  Never bake secrets into images.
5.  Do not expose unnecessary ports.
6.  Avoid privileged containers.
7.  Mount only required host paths.
8.  Prefer read-only filesystems when practical.
9.  Drop unnecessary Linux capabilities.
10. Scan images for vulnerabilities.
11. Sign/verify artifacts where your supply-chain model requires it.
12. Pin critical dependencies appropriately.
13. Protect the Docker socket.
14. Treat access to the Docker daemon as highly privileged.

### Dangerous example

``` bash
docker run --privileged ...
```

`--privileged` grants broad capabilities and should not be a default
troubleshooting fix.

### Docker socket warning

Mounting:

``` text
/var/run/docker.sock
```

inside a container can effectively grant powerful control over the
Docker host. Do this only with a clear security model.

------------------------------------------------------------------------

# 31. Secrets

Bad:

``` dockerfile
ENV API_KEY=my-real-secret
```

Bad:

``` dockerfile
COPY .env /app/.env
```

Even if a later layer deletes the file, it may remain recoverable from
image history/layers.

Better approaches depend on environment:

-   CI secret stores
-   orchestrator secret systems
-   cloud secret managers
-   runtime-mounted secret files
-   BuildKit secret mounts for build-time secrets

Conceptual BuildKit example:

``` dockerfile
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    npm ci
```

Build-time and runtime secrets are different problems; design both
explicitly.

------------------------------------------------------------------------

# 32. Running as Non-root

Example:

``` dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

USER node

CMD ["node", "server.js"]
```

If your app needs writable directories, create them and assign
appropriate ownership before switching users.

Why?

If an application is compromised, running with fewer privileges reduces
what an attacker may be able to do.

------------------------------------------------------------------------

# 33. Image Optimization

## Use appropriate base images

Instead of blindly choosing the smallest possible image, choose one that
balances:

-   compatibility
-   security
-   package availability
-   debugging needs
-   image size

## Remove unnecessary build tools

Use multi-stage builds.

## Combine related package-manager operations

Example pattern:

``` dockerfile
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*
```

## Use `.dockerignore`

Avoid unnecessary context.

## Install production dependencies only

Node example:

``` bash
npm ci --omit=dev
```

when appropriate for the runtime stage.

## Inspect size

``` bash
docker image ls
docker history myapp:1.0
```

------------------------------------------------------------------------

# 34. BuildKit and Modern Builds

BuildKit is Docker's modern build system and provides features such as:

-   parallelizable build execution
-   improved caching
-   secret mounts
-   SSH mounts
-   cache mounts
-   multi-platform build workflows

Cache mount example:

``` dockerfile
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt
```

For advanced multi-platform builds, Docker Buildx is commonly used:

``` bash
docker buildx ls
```

Conceptual multi-platform build:

``` bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t example/app:1.0 \
  --push .
```

Understand architecture compatibility before assuming every image works
identically everywhere.

------------------------------------------------------------------------

# 35. Build Arguments vs Environment Variables

## ARG

Available during build:

``` dockerfile
ARG VERSION=dev
RUN echo "$VERSION"
```

## ENV

Persists as image/runtime environment unless overridden:

``` dockerfile
ENV APP_ENV=production
```

  Feature            ARG                 ENV
  ------------------ ------------------- -------------------------
  Build time         Yes                 Yes
  Runtime            Not automatically   Yes
  Good for secrets   No                  Not inherently
  Typical use        Build parameters    Runtime config/defaults

Never assume `ARG` is a secure secret mechanism.

------------------------------------------------------------------------

# 36. ENTRYPOINT vs CMD

Consider:

``` dockerfile
ENTRYPOINT ["python", "app.py"]
CMD ["--port", "8080"]
```

The container's effective command becomes approximately:

``` text
python app.py --port 8080
```

Runtime arguments can replace `CMD`:

``` bash
docker run myapp --port 9000
```

Conceptually:

-   `ENTRYPOINT` = primary executable
-   `CMD` = default command or default arguments

For many web applications, using only `CMD` is perfectly reasonable.

------------------------------------------------------------------------

# 37. Shell Form vs Exec Form

Shell form:

``` dockerfile
CMD node server.js
```

Exec form:

``` dockerfile
CMD ["node", "server.js"]
```

Exec form is generally preferred for the main process because signal
handling is clearer and there is no implicit shell unless you
intentionally invoke one.

Shell form is useful when shell behavior is actually needed:

``` dockerfile
RUN echo "$HOME"
```

------------------------------------------------------------------------

# 38. Signals and Graceful Shutdown

When:

``` bash
docker stop app
```

Docker asks the container's main process to terminate gracefully and
waits before forcing termination.

Your application should handle termination signals.

Node example:

``` javascript
process.on("SIGTERM", async () => {
  console.log("Shutting down");
  await server.close();
  process.exit(0);
});
```

Why graceful shutdown matters:

-   finish in-flight requests
-   close DB connections
-   flush buffers
-   stop consumers safely
-   reduce corrupted work

PID 1 and signal propagation are important container concepts,
especially when wrapper shell scripts are used.

------------------------------------------------------------------------

# 39. Docker with Databases

MySQL example:

``` yaml
services:
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: local-root
      MYSQL_DATABASE: shop
      MYSQL_USER: shopuser
      MYSQL_PASSWORD: local-password
    volumes:
      - mysql-data:/var/lib/mysql
    ports:
      - "127.0.0.1:3306:3306"

volumes:
  mysql-data:
```

### Production concerns

Dockerizing a database does not eliminate the need for:

-   backups
-   restore testing
-   replication
-   monitoring
-   storage durability
-   upgrade planning
-   disaster recovery
-   access controls

Never confuse "volume exists" with "backup exists."

------------------------------------------------------------------------

# 40. Docker with Node.js

Dockerfile:

``` dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV=production

USER node

EXPOSE 3000

CMD ["node", "server.js"]
```

Development Compose:

``` yaml
services:
  api:
    build: .
    command: npm run dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - node_modules:/app/node_modules

volumes:
  node_modules:
```

The second volume prevents the host bind mount from casually replacing
container-installed dependencies.

------------------------------------------------------------------------

# 41. Docker with Angular

Angular is commonly built into static files and served by Nginx.

``` dockerfile
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/my-app/browser /usr/share/nginx/html
EXPOSE 80
```

For a single-page application, Nginx may need a fallback so client-side
routes resolve to `index.html`.

Example concept:

``` nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

------------------------------------------------------------------------

# 42. Docker with Python

Example Flask/FastAPI-style image:

``` dockerfile
FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]
```

Better production setups may use an appropriate application server and
non-root user.

Python-specific considerations:

-   dependency locking
-   native build dependencies
-   bytecode/cache files
-   virtual environments are often unnecessary inside a dedicated
    container
-   use multi-stage builds if compilation tools are needed

------------------------------------------------------------------------

# 43. Docker with Java and Spring Boot

Multi-stage example:

``` dockerfile
FROM maven:3-eclipse-temurin-21 AS build

WORKDIR /src
COPY pom.xml .
COPY src ./src
RUN mvn -DskipTests package

FROM eclipse-temurin:21-jre

WORKDIR /app
COPY --from=build /src/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

Why multi-stage?

Maven is needed to build, but not necessarily to run the final JAR.

For mature Spring Boot builds, investigate layered JARs/buildpacks as
additional optimization approaches.

------------------------------------------------------------------------

# 44. Docker with PHP

Simple Apache/PHP example:

``` dockerfile
FROM php:8.3-apache

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install pdo pdo_mysql

EXPOSE 80
```

A larger PHP architecture might contain:

``` text
Nginx
  |
PHP-FPM
  |
Application
  |
MySQL
  |
Redis
```

Use one major concern/process per service where practical rather than
turning one container into a replacement for an entire VM.

------------------------------------------------------------------------

# 45. Full-stack Application Scenario

Architecture:

``` text
Browser
   |
   v
Frontend :80
   |
   v
API :3000
   |
   +----> MySQL :3306
   |
   +----> Redis :6379
```

Compose:

``` yaml
services:
  frontend:
    build: ./frontend
    ports:
      - "8080:80"
    depends_on:
      - api

  api:
    build: ./api
    environment:
      DB_HOST: db
      REDIS_HOST: redis
    depends_on:
      - db
      - redis

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: local-root
      MYSQL_DATABASE: app
    volumes:
      - db-data:/var/lib/mysql

  redis:
    image: redis:alpine

volumes:
  db-data:
```

Notice that only the frontend necessarily needs a host-published port
for a simple local setup. Internal services can communicate on the
Compose network without publishing every port.

------------------------------------------------------------------------

# 46. Development vs Production Docker

## Development

Priorities:

-   fast feedback
-   bind mounts
-   hot reload
-   debugging tools
-   source maps

Example:

``` yaml
volumes:
  - ./src:/app/src
```

## Production

Priorities:

-   reproducibility
-   minimal images
-   non-root runtime
-   no development tooling
-   pinned/versioned images
-   proper secret management
-   observability
-   health checks
-   controlled resource usage

Do not assume your development Compose file is automatically a
production deployment architecture.

------------------------------------------------------------------------

# 47. Docker in CI/CD

Typical pipeline:

``` text
Developer Push
      |
      v
CI Checkout
      |
      v
Lint / Test
      |
      v
docker build
      |
      v
Security Scan
      |
      v
Push Image
      |
      v
Deploy exact image
```

Example conceptual shell:

``` bash
docker build -t registry.example.com/orders:${GIT_SHA} .
docker push registry.example.com/orders:${GIT_SHA}
```

Production deploys:

``` text
registry.example.com/orders:a1b2c3d
```

### Good practice

Build an artifact once, then promote the **same image** through
environments where possible.

Avoid rebuilding different binaries separately for test and production
if the goal is to prove that the tested artifact is the deployed
artifact.

------------------------------------------------------------------------

# 48. Testing with Docker

Docker can create disposable dependencies for tests.

Example:

``` bash
docker run -d \
  --name integration-db \
  -e POSTGRES_PASSWORD=test \
  postgres
```

Run integration tests, then:

``` bash
docker rm -f integration-db
```

Compose can define a complete test environment.

This reduces dependency on manually maintained shared test databases.

------------------------------------------------------------------------

# 49. Docker Networking Troubleshooting

Scenario:

API says:

``` text
ECONNREFUSED 127.0.0.1:3306
```

But MySQL is another container.

Likely problem:

``` text
DB_HOST=localhost
```

Fix:

``` text
DB_HOST=db
```

Troubleshooting steps:

``` bash
docker network ls
docker network inspect NETWORK
docker inspect CONTAINER
docker logs CONTAINER
docker exec -it CONTAINER sh
```

Inside the container, test name resolution/connectivity with whatever
diagnostic utilities the image intentionally contains.

Do not permanently install a giant troubleshooting toolkit into a
minimal production image just for convenience; debug containers or
dedicated tooling may be safer.

------------------------------------------------------------------------

# 50. Storage Troubleshooting

List volumes:

``` bash
docker volume ls
```

Inspect:

``` bash
docker volume inspect mysql-data
```

Common problems:

-   wrong mount destination
-   permissions
-   application writing somewhere else
-   accidentally using anonymous volume
-   deleting volume with `compose down -v`
-   host bind mount path differs across operating systems

Always identify where the application **actually writes** its data.

------------------------------------------------------------------------

# 51. Cleanup and Disk Management

Docker resources can consume significant disk space.

Check:

``` bash
docker system df
```

Remove stopped containers:

``` bash
docker container prune
```

Remove unused images:

``` bash
docker image prune
```

Remove unused networks:

``` bash
docker network prune
```

Remove unused volumes:

``` bash
docker volume prune
```

Broad cleanup:

``` bash
docker system prune
```

More aggressive:

``` bash
docker system prune -a
```

### Warning

Prune commands can delete resources you intended to keep. Be especially
careful with volumes and build caches.

------------------------------------------------------------------------

# 52. Docker Events, Stats, Inspect and Metadata

## Inspect

``` bash
docker inspect my-container
```

Useful for:

-   IP/network settings
-   mounts
-   environment
-   command
-   image
-   health
-   restart policy

## Stats

``` bash
docker stats
```

Shows live resource use.

## Events

``` bash
docker events
```

Shows Docker lifecycle events.

## Processes

``` bash
docker top my-container
```

## Port mappings

``` bash
docker port my-container
```

These commands are extremely useful when diagnosing "Docker is not
working" without guessing.

------------------------------------------------------------------------

# 53. Namespaces and cgroups

Docker relies heavily on Linux kernel primitives.

## Namespaces

Namespaces isolate views of system resources.

Important namespace categories include concepts around:

-   processes
-   networking
-   mounts
-   host/domain names
-   users
-   IPC

Simplified:

``` text
Container A sees its process environment
Container B sees its process environment
```

even though both use the same host kernel.

## cgroups

Control groups help account for and limit resources such as:

-   CPU
-   memory
-   process counts
-   I/O-related resources

Simplified:

``` text
Namespaces -> "what can this process see?"
cgroups    -> "how much can this group use?"
```

This mental model is valuable for understanding containers beyond
memorized Docker commands.

------------------------------------------------------------------------

# 54. Container Lifecycle Internals

Conceptual `docker run` lifecycle:

``` text
1. Resolve image
2. Pull image if required
3. Create container metadata
4. Prepare writable layer
5. Configure mounts
6. Configure namespaces
7. Configure networking
8. Apply resource/security settings
9. Start main process
10. Track process until exit
```

A container is fundamentally isolated processes plus supporting
filesystem/network/resource configuration---not a mysterious miniature
server.

------------------------------------------------------------------------

# 55. Docker Engine Components

Modern container stacks contain several layers. At a high level, Docker
Engine coordinates image, container, network and storage operations,
while lower-level runtimes participate in container lifecycle execution.

Important concepts to recognize:

``` text
Docker CLI
   |
Docker Engine API / daemon
   |
container runtime components
   |
Linux kernel primitives
```

You do not need to master runtime internals on day one, but advanced
Docker/Kubernetes engineers should understand the distinction between:

-   Docker as a developer/engine platform
-   OCI images
-   OCI runtimes
-   containerd
-   low-level runtimes such as runc

This also explains why Kubernetes can run OCI containers without
requiring Docker Engine as its node runtime.

------------------------------------------------------------------------

# 56. Docker and Kubernetes

Docker and Kubernetes solve different layers of the problem.

Docker helps with:

``` text
build image
run container
local multi-container development
```

Kubernetes focuses on orchestrating containers across machines:

``` text
scheduling
replicas
service discovery
rolling updates
self-healing
configuration
secrets
persistent storage integration
```

Concept mapping:

  -----------------------------------------------------------------------
  Docker concept                      Kubernetes-related concept
  ----------------------------------- -----------------------------------
  Image                               Container image

  Container                           Container inside a Pod

  Compose service                     Roughly related to workload/service
                                      definitions, but not 1:1

  Restart policy                      Pod/workload lifecycle behavior

  Docker network                      Kubernetes networking model differs

  Volume                              Kubernetes volume/PersistentVolume
                                      concepts
  -----------------------------------------------------------------------

Learn Docker first because container fundamentals make Kubernetes much
easier to understand.

------------------------------------------------------------------------

# 57. Anti-patterns and Common Mistakes

## Mistake 1: using `localhost` for another container

Wrong:

``` text
DB_HOST=localhost
```

Correct on a shared Compose network:

``` text
DB_HOST=db
```

## Mistake 2: storing database data only in the writable layer

Use persistent storage.

## Mistake 3: putting secrets in Dockerfile

Never bake real credentials into images.

## Mistake 4: running everything as root

Use a dedicated non-root user when practical.

## Mistake 5: huge build context

Use `.dockerignore`.

## Mistake 6: copying all source before dependency manifests

This can destroy build-cache efficiency.

## Mistake 7: using `latest` everywhere

Version production artifacts deliberately.

## Mistake 8: manually editing production containers

Rebuild and redeploy an image.

## Mistake 9: one giant container for an entire infrastructure stack

Prefer separable services where practical.

## Mistake 10: treating volumes as backups

A volume is storage. A backup is a recoverable independent copy with a
tested restore process.

## Mistake 11: exposing every service port

Only publish ports that host/external clients actually need.

## Mistake 12: ignoring graceful shutdown

Applications should handle termination properly.

## Mistake 13: adding `--privileged` until something works

Understand the permission problem instead.

## Mistake 14: assuming a running container means healthy application

Use health checks and monitoring.

## Mistake 15: debugging by changing the live container

Any manual fix disappears on recreation and breaks reproducibility.

------------------------------------------------------------------------

# 58. Real-world Scenarios

## Scenario A: "Works on my machine"

Developer:

``` text
Node 24
```

Server:

``` text
Node 20
```

Solution:

``` dockerfile
FROM node:24-alpine
```

Now runtime requirements travel with the image.

------------------------------------------------------------------------

## Scenario B: Two applications need different PHP versions

``` text
Legacy app -> PHP 7.x
Modern app -> PHP 8.x
```

Use separate containers/images instead of fighting host-wide package
versions.

------------------------------------------------------------------------

## Scenario C: New developer onboarding

Without Docker:

``` text
Install Node
Install MySQL
Configure DB
Install Redis
Configure versions
Import schema
Fix machine-specific issue
```

With a well-designed project:

``` bash
git clone ...
docker compose up
```

Docker does not eliminate setup completely, but can dramatically reduce
environment drift.

------------------------------------------------------------------------

## Scenario D: Rollback after broken release

Current:

``` text
orders-api:2.5.0
```

Broken release:

``` text
orders-api:2.6.0
```

Rollback can redeploy:

``` text
orders-api:2.5.0
```

provided DB/schema compatibility and deployment architecture support the
rollback.

------------------------------------------------------------------------

## Scenario E: Database must survive container replacement

Use:

``` yaml
volumes:
  - mysql-data:/var/lib/mysql
```

The container becomes replaceable; the data lifecycle is separate.

------------------------------------------------------------------------

## Scenario F: API must not be publicly reachable

Do not publish the API port unnecessarily.

``` yaml
services:
  frontend:
    ports:
      - "80:80"

  api:
    expose:
      - "3000"
```

Or simply rely on the internal network where explicit `expose`
documentation is unnecessary for connectivity.

------------------------------------------------------------------------

## Scenario G: Production image is 1.5 GB

Investigate:

-   huge base image
-   development dependencies
-   compilers/build tools
-   caches
-   copied `.git`
-   copied `node_modules`
-   build artifacts
-   no multi-stage build

Then optimize deliberately rather than chasing size alone.

------------------------------------------------------------------------

## Scenario H: Container exits immediately

Run:

``` bash
docker ps -a
docker logs container
docker inspect container
```

Common reasons:

-   main process exits
-   invalid command
-   missing config
-   port binding error
-   dependency connection failure
-   application crash

------------------------------------------------------------------------

## Scenario I: Database starts after API and API crashes

Do not rely solely on startup ordering.

Implement:

-   health checks
-   retry/backoff
-   resilient application startup

Distributed systems must expect temporary unavailability.

------------------------------------------------------------------------

## Scenario J: Need local source hot reload

Use a bind mount:

``` yaml
volumes:
  - .:/app
```

and run a development watcher.

Do not copy this pattern blindly into production.

------------------------------------------------------------------------

## Scenario K: Need temporary command against app image

Instead of modifying a running production container, run a one-off
container where appropriate:

``` bash
docker compose run --rm api npm run migration
```

Whether migrations should be automated, one-off jobs, or application
startup tasks depends on your deployment design.

------------------------------------------------------------------------

## Scenario L: Host port already in use

Error concept:

``` text
port is already allocated
```

If another service uses 8080:

``` bash
docker run -p 8081:80 nginx
```

or stop/change the conflicting service.

------------------------------------------------------------------------

# 59. Docker Interview Questions

## Beginner

### What is Docker?

A platform for building, distributing and running applications in
isolated containers using standardized container images.

### Image vs container?

An image is a read-only template/artifact. A container is an instance
created from an image with runtime state and a writable layer.

### What is a Dockerfile?

A declarative sequence of instructions used to build a container image.

### What does `docker run` do?

It creates a container from an image and starts its configured process,
with runtime options such as networking, mounts and environment.

### What is a volume?

Persistent storage managed independently from a container's writable
lifecycle.

### `docker ps` vs `docker ps -a`?

`docker ps` shows running containers; `-a` includes stopped containers.

------------------------------------------------------------------------

## Intermediate

### `COPY` vs `ADD`?

`COPY` performs straightforward copying from build context/stages. `ADD`
has additional behaviors. Prefer `COPY` for ordinary copying.

### `CMD` vs `ENTRYPOINT`?

`ENTRYPOINT` defines the primary executable; `CMD` supplies a default
command or arguments and is easier to override.

### Why use multi-stage builds?

To separate build tooling from the runtime image, usually reducing size
and attack surface.

### Why does `localhost` not reach another container?

Network namespaces isolate containers. `localhost` points to the current
container.

### What does `EXPOSE` do?

Documents intended ports; it does not itself publish a port on the host.

### Why use `.dockerignore`?

To reduce build context, improve speed/cache behavior and avoid
accidentally including irrelevant or sensitive files.

------------------------------------------------------------------------

## Advanced

### What makes containers isolated?

Primarily operating-system primitives such as namespaces, cgroups,
filesystem/mount mechanisms, capabilities and security controls.

### Why is PID 1 special?

The main process has special signal/process-reaping behavior on Linux,
so poor PID 1 handling can cause shutdown and zombie-process problems.

### Why are image layers relevant?

They affect caching, distribution, storage and the persistence of data
accidentally added in earlier build layers.

### Why shouldn't secrets be passed casually through build args?

Build metadata/history/cache can expose information. Use purpose-built
secret mechanisms.

### Tag vs digest?

A tag is a mutable human-readable reference; a digest content-addresses
a specific image manifest/content identity.

### Does Kubernetes require Docker?

No. Kubernetes works with CRI-compatible runtimes and OCI container
images; Docker Engine is not required as the Kubernetes node runtime.

------------------------------------------------------------------------

# 60. Command Cheat Sheet

## Information

``` bash
docker version
docker info
docker system df
```

## Images

``` bash
docker image ls
docker pull IMAGE
docker build -t NAME:TAG .
docker image inspect IMAGE
docker history IMAGE
docker image rm IMAGE
```

## Containers

``` bash
docker run IMAGE
docker run -d IMAGE
docker run --name NAME IMAGE
docker ps
docker ps -a
docker start NAME
docker stop NAME
docker restart NAME
docker kill NAME
docker rm NAME
docker rm -f NAME
docker inspect NAME
docker logs NAME
docker logs -f NAME
docker exec -it NAME sh
docker top NAME
docker stats
```

## Ports

``` bash
docker run -p 8080:80 IMAGE
docker port CONTAINER
```

## Volumes

``` bash
docker volume ls
docker volume create NAME
docker volume inspect NAME
docker volume rm NAME
docker volume prune
```

## Networks

``` bash
docker network ls
docker network create NAME
docker network inspect NAME
docker network connect NETWORK CONTAINER
docker network disconnect NETWORK CONTAINER
docker network rm NAME
```

## Registry

``` bash
docker login
docker logout
docker tag SOURCE TARGET
docker push IMAGE
docker pull IMAGE
```

## Compose

``` bash
docker compose up
docker compose up -d
docker compose down
docker compose down -v
docker compose ps
docker compose logs
docker compose logs -f SERVICE
docker compose build
docker compose pull
docker compose exec SERVICE sh
docker compose run --rm SERVICE COMMAND
docker compose config
```

## Cleanup

``` bash
docker container prune
docker image prune
docker network prune
docker volume prune
docker system prune
docker system prune -a
```

------------------------------------------------------------------------

# 61. Learning Projects

Use projects to move from command memorization to actual understanding.

## Project 1 - Static website

Learn:

-   Nginx image
-   bind mounts
-   port mapping

Goal:

``` text
HTML -> Nginx container -> browser
```

## Project 2 - Containerize Node API

Learn:

-   Dockerfile
-   build
-   run
-   logs
-   environment variables

## Project 3 - API + MySQL

Learn:

-   Compose
-   service DNS
-   volumes
-   startup dependencies

## Project 4 - Angular + API + MySQL

Learn:

-   multi-stage frontend build
-   reverse proxy
-   internal networks
-   environment strategy

## Project 5 - Add Redis

Learn:

-   additional service
-   cache configuration
-   service discovery

## Project 6 - CI image pipeline

Learn:

-   automated build
-   test
-   image tagging
-   registry push
-   immutable deployment artifact

## Project 7 - Harden production image

Implement:

-   non-root user
-   health check
-   smaller runtime stage
-   no embedded secrets
-   vulnerability scanning
-   resource limits
-   graceful shutdown

## Project 8 - Failure laboratory

Intentionally create and diagnose:

-   wrong DB hostname
-   occupied host port
-   missing environment variable
-   read-only permission failure
-   deleted container with persistent volume
-   unhealthy endpoint
-   application crash loop
-   architecture mismatch

Debugging broken systems is one of the fastest ways to understand Docker
deeply.

------------------------------------------------------------------------

# 62. Mastery Roadmap

## Level 1 - Fundamentals

Master:

-   image
-   container
-   Dockerfile
-   `build`
-   `run`
-   `ps`
-   `logs`
-   `exec`
-   port mapping

**Checkpoint:** containerize a basic API without copying a tutorial line
by line.

## Level 2 - Application Development

Master:

-   volumes
-   bind mounts
-   networks
-   environment variables
-   Compose
-   database containers
-   service DNS

**Checkpoint:** run frontend + API + DB locally.

## Level 3 - Production Images

Master:

-   layers/cache
-   `.dockerignore`
-   multi-stage builds
-   non-root users
-   health checks
-   graceful shutdown
-   resource limits
-   image tagging

**Checkpoint:** explain why your image is structured the way it is.

## Level 4 - Delivery

Master:

-   registries
-   CI/CD
-   immutable tags/digests
-   scanning
-   promotion between environments
-   rollback strategy

**Checkpoint:** push a tested image through a pipeline.

## Level 5 - Internals

Master:

-   namespaces
-   cgroups
-   capabilities
-   PID 1
-   OCI concepts
-   containerd/runtime concepts
-   storage/network fundamentals

**Checkpoint:** explain what actually happens when a container starts.

## Level 6 - Orchestration

Then learn:

-   Kubernetes
-   Pods
-   Deployments
-   Services
-   ConfigMaps
-   Secrets
-   probes
-   persistent volumes
-   ingress/gateway concepts
-   autoscaling
-   observability

------------------------------------------------------------------------

# 63. Glossary

**Base image** - Starting image referenced by `FROM`.

**Bind mount** - Mapping from a specific host path into a container.

**Build context** - Files/directories made available to a Docker build.

**BuildKit** - Modern Docker build backend with advanced caching and
secret/mount features.

**cgroup** - Linux mechanism used to account for/control resource usage.

**Compose** - Declarative multi-container application configuration and
lifecycle tooling.

**Container** - Isolated runtime instance created from an image.

**Container registry** - Service that stores/distributes container
images.

**Digest** - Content-addressed immutable-style identifier for image
content/manifest.

**Docker Engine** - Docker's core container management engine.

**Dockerfile** - Build instructions for creating an image.

**Entrypoint** - Primary executable configured for a container image.

**Health check** - Test used to report whether a containerized
application is healthy.

**Image** - Packaged, layered, read-only container artifact.

**Layer** - Reusable filesystem/build unit that contributes to an image.

**Namespace** - Linux isolation mechanism for process views of
resources.

**OCI** - Open Container Initiative, which defines important container
image/runtime standards.

**Port publishing** - Mapping a host address/port to a container port.

**Repository** - Named collection of image tags in a registry.

**Tag** - Human-readable image reference such as `1.2.0`.

**tmpfs** - Memory-backed temporary filesystem mount.

**Volume** - Docker-managed persistent data storage.

**Writable layer** - Container-specific filesystem changes layered over
its read-only image.

------------------------------------------------------------------------

# Final Mental Model

If you remember only one diagram, remember this:

``` text
                    SOURCE CODE
                         |
                         v
                    Dockerfile
                         |
                    docker build
                         |
                         v
                  +--------------+
                  |    IMAGE     |
                  | immutable-ish|
                  | artifact     |
                  +--------------+
                         |
             push        |        pull
                         v
                    +----------+
                    | Registry |
                    +----------+
                         |
                         v
                    docker run
                         |
                         v
                  +--------------+
                  |  CONTAINER   |
                  | running app  |
                  +--------------+
                    |          |
                    |          |
                    v          v
                 Network     Volume
                    |          |
                 Services   Persistent
                              Data
```

And for a real application:

``` text
                    Internet / User
                           |
                           v
                  Reverse Proxy / UI
                           |
                           v
                        API
                    /           \
                   v             v
              Database         Cache
                 |
                 v
           Persistent Volume
```

------------------------------------------------------------------------

# Docker Master Checklist

Use this as a final self-assessment.

-   [ ] I can explain containers vs VMs.
-   [ ] I understand images vs containers.
-   [ ] I can build an image from a Dockerfile.
-   [ ] I understand `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ENV`, `ARG`,
    `USER` and `WORKDIR`.
-   [ ] I understand build context and `.dockerignore`.
-   [ ] I understand image layers and cache invalidation.
-   [ ] I can create multi-stage builds.
-   [ ] I understand host ports vs container ports.
-   [ ] I understand why another container is not `localhost`.
-   [ ] I can create and inspect Docker networks.
-   [ ] I understand named volumes, bind mounts and tmpfs.
-   [ ] I can preserve database data.
-   [ ] I can build a multi-service Compose project.
-   [ ] I understand that `depends_on` is not application readiness.
-   [ ] I can use health checks.
-   [ ] I can troubleshoot with `logs`, `exec`, `inspect`, `stats` and
    `events`.
-   [ ] I understand restart policies.
-   [ ] I can tag, push and pull images.
-   [ ] I understand tags vs digests.
-   [ ] I do not bake secrets into images.
-   [ ] I can run an application as non-root.
-   [ ] I understand basic container security risks.
-   [ ] I understand graceful shutdown and PID 1.
-   [ ] I can optimize image size and build caching.
-   [ ] I understand BuildKit at a practical level.
-   [ ] I can containerize Node.js, Angular, Python, Java/Spring Boot
    and PHP applications.
-   [ ] I understand development vs production container patterns.
-   [ ] I understand Docker's role in CI/CD.
-   [ ] I understand namespaces and cgroups conceptually.
-   [ ] I understand the relationship among Docker, OCI runtimes and
    Kubernetes.
-   [ ] I can diagnose common networking, storage and startup failures.
-   [ ] I can explain *why* I chose each important Docker design
    decision.

------------------------------------------------------------------------

## What to Learn After This Handbook

A strong next sequence is:

``` text
Docker
  ↓
Linux fundamentals
  ↓
Networking fundamentals
  ↓
CI/CD
  ↓
Container security
  ↓
Kubernetes
  ↓
Helm
  ↓
Observability
  ↓
Cloud container platforms
  ↓
Infrastructure as Code
```

> **Mastery rule:** Do not measure Docker knowledge by the number of
> commands memorized. You understand Docker when you can design a
> containerized application, explain every important choice, diagnose
> failures systematically, secure the runtime, and reliably move the
> same artifact from development to production.

---

# Part II — Advanced Docker Mastery Expansion

> This second part expands the handbook into deeper professional topics: modern BuildKit workflows, advanced Compose, production networking/storage, security hardening, Docker Engine administration, multi-platform delivery, supply-chain metadata, Swarm, internals, failure analysis, and architecture scenarios.

## Part II Contents

64. Advanced image design principles
65. Distroless, slim and Alpine trade-offs
66. Reproducible image builds
67. BuildKit cache mounts
68. BuildKit secret mounts
69. BuildKit SSH mounts
70. External build cache in CI
71. Buildx builders and drivers
72. Multi-platform builds in depth
73. Image manifests and indexes
74. SBOM and provenance attestations
75. Build checks and Dockerfile linting
76. Docker Buildx Bake
77. Named and remote build contexts
78. Advanced Dockerfile patterns
79. Heredocs and modern Dockerfile syntax
80. Compose profiles
81. Compose multiple files and overrides
82. Compose variable interpolation
83. Compose secrets and configs
84. Compose watch/develop workflow
85. Compose startup ordering and readiness
86. Init-style startup work
87. Advanced Compose networking
88. Network aliases and multiple networks
89. Bridge networking internals
90. Host, none, overlay, macvlan and ipvlan
91. Host access from containers
92. IPv6 concepts
93. Advanced port publishing
94. Network security patterns
95. Storage architecture in depth
96. Volume lifecycle and backup
97. Bind mounts in depth
98. SELinux and bind mounts
99. Storage drivers and writable layers
100. Database container production concerns
101. Resource governance and cgroups
102. OOM behavior and memory design
103. CPU limits and throttling
104. PID limits and fork bombs
105. Logging architecture
106. Logging drivers
107. Docker daemon configuration
108. Docker contexts and remote engines
109. Docker API security
110. Rootless Docker
111. User namespace remapping
112. Capabilities
113. Seccomp
114. AppArmor and SELinux
115. Read-only root filesystems
116. no-new-privileges
117. Privileged containers
118. Docker socket security
119. Runtime secret management
120. Supply-chain security
121. Image scanning and patching strategy
122. Registry security and immutability
123. PID 1 and init processes
124. Signals and graceful shutdown
125. Process reaping and zombie processes
126. OCI, containerd and runc
127. Namespaces in depth
128. cgroups in depth
129. Container filesystem internals
130. Container startup lifecycle
131. Docker events and observability
132. Docker system disk management
133. Docker Swarm fundamentals
134. Swarm services, tasks and stacks
135. Swarm networking, secrets and configs
136. Docker vs Kubernetes
137. Production architecture patterns
138. Background workers and scheduled jobs
139. Database migrations
140. Blue-green and rolling deployment concepts
141. Rollback design
142. Docker in CI/CD in depth
143. Testing with disposable containers
144. Disaster recovery
145. Debugging decision tree
146. Real-world failure scenarios
147. Security failure scenarios
148. Performance failure scenarios
149. Advanced interview questions
150. Final professional checklist

---

# 64. Advanced Image Design Principles

A Docker image should be treated as a **versioned software artifact**, not as a miniature server that you keep modifying.

A good production image should normally be:

- reproducible
- small enough for practical distribution
- understandable
- non-interactive
- immutable after build
- free of unnecessary build tools
- free of secrets
- configured for a non-root runtime where practical
- easy to scan and patch
- deterministic enough that you know what you deployed

Think of the image as a release package:

```text
Source code
   +
Locked dependencies
   +
Runtime
   +
Startup metadata
   =
Deployable image
```

## Scenario: manual server installation

Old approach:

```text
SSH to server
install Node
copy application
npm install
edit config
restart process
```

Container approach:

```text
CI builds image orders-api:2.4.1
CI tests image
CI pushes image
server runs exact image
```

This makes the deployment unit explicit.

---

# 65. Distroless, Slim and Alpine Trade-offs

Developers often ask: **Which base image is best?**

There is no universal answer.

## Full distribution image

Example idea:

```dockerfile
FROM debian:bookworm
```

Advantages:

- familiar tools
- broad package compatibility
- easier debugging

Disadvantages:

- larger
- more packages to maintain
- potentially larger attack surface

## Slim images

Example:

```dockerfile
FROM python:3.13-slim
```

Often a good balance between compatibility and reduced size.

## Alpine

Example:

```dockerfile
FROM node:24-alpine
```

Advantages:

- very small
- simple package set

Potential issues:

- musl libc instead of glibc
- some native binaries/packages behave differently
- troubleshooting utilities may be absent

## Distroless-style images

Contain only minimal runtime/application components and omit normal shells/package managers.

Advantages:

- reduced attack surface
- minimal runtime contents

Trade-off:

- debugging inside the container becomes harder

## Practical rule

Do not optimize only for megabytes.

Choose based on:

```text
compatibility
security
operability
size
debugging needs
patch process
```

A 20 MB image that constantly breaks native dependencies is not automatically better than a 100 MB image that is predictable and maintainable.

---

# 66. Reproducible Image Builds

A build is reproducible when repeated builds from the same intended source/dependency inputs produce predictably equivalent artifacts.

Threats to reproducibility include:

- floating base tags
- unpinned language dependencies
- downloading `latest` tools
- time-sensitive downloads
- mutable package repositories
- manually injected files

Less reproducible:

```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y some-package
```

More controlled:

```dockerfile
FROM ubuntu:24.04
```

For the strongest image identity at deployment, you can use a digest reference:

```text
registry.example.com/orders@sha256:...
```

## Important nuance

Pinning everything forever is not security.

You still need a process to:

1. detect updates
2. rebuild
3. test
4. scan
5. promote the updated image

Reproducibility and patching must work together.

---

# 67. BuildKit Cache Mounts

Normal Docker layers can cache build steps, but package managers also maintain their own caches.

BuildKit cache mounts let those caches persist between builds without embedding them into the final image layer.

Python:

```dockerfile
# syntax=docker/dockerfile:1

FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .

RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt
```

Node:

```dockerfile
RUN --mount=type=cache,target=/root/.npm \
    npm ci
```

APT:

```dockerfile
RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt \
    apt-get update && apt-get install -y curl
```

## Why this is useful

Without cache mount:

```text
download packages again
and again
and again
```

With cache mount:

```text
reuse downloaded package cache
while still creating a clean resulting image layer
```

---

# 68. BuildKit Secret Mounts

Never put build credentials in Dockerfile instructions such as:

```dockerfile
ARG TOKEN
RUN echo "$TOKEN" > /tmp/token
```

Build arguments and environment values are not designed as secure secret channels.

Use BuildKit secret mounts.

Example:

```dockerfile
# syntax=docker/dockerfile:1

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    npm ci
```

Build:

```bash
docker buildx build \
  --secret id=npmrc,src=$HOME/.npmrc \
  .
```

Another pattern:

```dockerfile
RUN --mount=type=secret,id=api_token \
    TOKEN="$(cat /run/secrets/api_token)" && \
    ./download-private-artifact "$TOKEN"
```

The secret is made available to that build step without intentionally becoming part of the final filesystem layer.

---

# 69. BuildKit SSH Mounts

Sometimes a build must clone a private Git repository using SSH.

Do not copy your private key into the image.

Conceptual Dockerfile:

```dockerfile
# syntax=docker/dockerfile:1

RUN --mount=type=ssh \
    git clone git@github.com:company/private-library.git
```

Build:

```bash
docker buildx build --ssh default .
```

Benefits:

- private key is not copied into image
- temporary build authentication
- cleaner credential boundary

Still verify host keys and apply normal SSH security practices.

---

# 70. External Build Cache in CI

CI runners are often ephemeral.

Without external cache:

```text
CI run 1 -> full build
CI run 2 -> full build again
CI run 3 -> full build again
```

BuildKit can import/export build cache to supported backends.

Conceptual registry cache:

```bash
docker buildx build \
  --cache-from type=registry,ref=registry.example.com/app:buildcache \
  --cache-to type=registry,ref=registry.example.com/app:buildcache,mode=max \
  -t registry.example.com/app:${GIT_SHA} \
  --push \
  .
```

This can significantly reduce CI build time.

## Security note

Cache content must be treated as build infrastructure data. Do not put secrets into normal build layers expecting cache to protect them.

---

# 71. Buildx Builders and Drivers

List builders:

```bash
docker buildx ls
```

Create a dedicated builder:

```bash
docker buildx create \
  --name team-builder \
  --driver docker-container \
  --use
```

Initialize:

```bash
docker buildx inspect --bootstrap
```

Different Buildx drivers offer different capabilities and isolation models.

A dedicated BuildKit container builder is useful when you need features beyond the default builder configuration.

---

# 72. Multi-platform Builds in Depth

A development laptop might be:

```text
linux/arm64
```

while production is:

```text
linux/amd64
```

Build for both:

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t registry.example.com/app:1.5.0 \
  --push \
  .
```

## Three common strategies

### 1. Emulation

Example: QEMU-based emulation.

Advantages:

- easy for many workloads

Disadvantages:

- slower, especially compilation-heavy builds

### 2. Multiple native builders

Use different builder nodes for each architecture.

Advantages:

- native performance

Disadvantages:

- more infrastructure

### 3. Cross-compilation

Compile target binaries from another architecture.

Good for languages/toolchains that support it well.

## Scenario

Go application:

```text
build amd64 binary
build arm64 binary
package each into platform-specific image
publish one multi-platform reference
```

---

# 73. Image Manifests and Indexes

A normal image reference can point to a platform-specific manifest.

A multi-platform reference can point to an image index/manifest list containing multiple variants.

Conceptually:

```text
registry.example.com/app:2.0
        |
        v
Multi-platform index
   |             |
   v             v
linux/amd64   linux/arm64
manifest      manifest
   |             |
 layers        layers
```

Inspect with modern Docker tooling such as:

```bash
docker buildx imagetools inspect registry.example.com/app:2.0
```

This is why the same tag can work on different CPU architectures.

---

# 74. SBOM and Provenance Attestations

## SBOM

Software Bill of Materials answers:

```text
What software components are inside this artifact?
```

Buildx can generate SBOM attestations:

```bash
docker buildx build \
  --sbom=true \
  -t registry.example.com/app:2.0 \
  --push \
  .
```

## Provenance

Provenance answers questions such as:

```text
What build produced this image?
What source/input was involved?
```

Example:

```bash
docker buildx build \
  --provenance=mode=max \
  -t registry.example.com/app:2.0 \
  --push \
  .
```

## Critical warning

Rich provenance may expose build argument values.

Never misuse build arguments for credentials.

Use secret mounts for credentials.

---

# 75. Build Checks and Dockerfile Linting

Modern Docker build tooling can perform checks against build configuration and Dockerfile patterns.

Why this matters:

A Dockerfile can technically build while still containing problems such as:

- suspicious syntax
- legacy conventions
- shell/JSON command mistakes
- platform issues
- ineffective patterns

Treat build checks similarly to static analysis:

```text
Dockerfile
   |
checks/lint
   |
build
```

In CI, fail early before an expensive build/deploy when possible.

---

# 76. Docker Buildx Bake

Bake lets you define multiple related build targets.

Think of it as a build orchestration layer for complex image sets.

Example `docker-bake.hcl` concept:

```hcl
group "default" {
  targets = ["api", "worker"]
}

target "api" {
  context = "./api"
  tags = ["example/api:dev"]
}

target "worker" {
  context = "./worker"
  tags = ["example/worker:dev"]
}
```

Build:

```bash
docker buildx bake
```

Useful when a repository produces multiple images with shared settings.

---

# 77. Named and Remote Build Contexts

Build context does not have to be only `.`.

Docker/BuildKit workflows can use local directories, Git contexts, and advanced named contexts.

Conceptually:

```bash
docker buildx build https://github.com/org/project.git
```

Named context concept:

```bash
docker buildx build \
  --build-context shared=../shared \
  .
```

Dockerfile can refer to appropriately configured context sources in supported syntax.

Use remote contexts carefully because reproducibility depends on exactly what revision/source is selected.

---

# 78. Advanced Dockerfile Patterns

## Copy dependency manifests first

```dockerfile
COPY package*.json ./
RUN npm ci
COPY . .
```

## Create a dedicated runtime user

```dockerfile
RUN useradd --uid 10001 --create-home app
USER app
```

## Use multi-stage testing

```dockerfile
FROM base AS test
RUN npm test

FROM base AS production
CMD ["node", "server.js"]
```

## Name stages

Good:

```dockerfile
FROM node:24 AS build
```

Then:

```dockerfile
COPY --from=build /app/dist /usr/share/nginx/html
```

Names are easier to maintain than numeric stage indexes.

---

# 79. Heredocs and Modern Dockerfile Syntax

Modern Dockerfile syntax supports heredoc-style content in supported builder versions.

Example concept:

```dockerfile
# syntax=docker/dockerfile:1

RUN <<'EOF_SCRIPT'
set -eu
apt-get update
apt-get install -y curl
rm -rf /var/lib/apt/lists/*
EOF_SCRIPT
```

This can improve readability over long escaped command chains.

Use shell safety options appropriate for the shell you are using.

---

# 80. Compose Profiles

Profiles make services optional.

```yaml
services:
  api:
    build: ./api

  db:
    image: postgres:17

  adminer:
    image: adminer
    profiles:
      - debug
```

Normal:

```bash
docker compose up
```

With debug tools:

```bash
docker compose --profile debug up
```

Useful for:

- Adminer/phpMyAdmin
- local mail catcher
- tracing stack
- debug proxy
- test-only dependencies

---

# 81. Compose Multiple Files and Overrides

A common pattern is a base Compose file plus environment-specific changes.

Base:

```yaml
# compose.yaml
services:
  api:
    image: example/api:1.0
```

Development:

```yaml
# compose.dev.yaml
services:
  api:
    build: ./api
    volumes:
      - ./api:/app
```

Production:

```yaml
# compose.prod.yaml
services:
  api:
    restart: unless-stopped
    read_only: true
```

Use:

```bash
docker compose \
  -f compose.yaml \
  -f compose.prod.yaml \
  up -d
```

Before deployment, inspect the final merged model:

```bash
docker compose \
  -f compose.yaml \
  -f compose.prod.yaml \
  config
```

This catches many surprises caused by merge behavior.

---

# 82. Compose Variable Interpolation

Compose supports variable interpolation.

Example:

```yaml
services:
  api:
    image: example/api:${APP_VERSION}
    ports:
      - "${API_PORT:-3000}:3000"
```

Run:

```bash
APP_VERSION=2.4.1 API_PORT=8080 docker compose up
```

## Important distinction

Compose interpolation and container environment variables are related but not identical concepts.

This:

```yaml
image: example/api:${VERSION}
```

is resolved while Compose processes the file.

This:

```yaml
environment:
  APP_ENV: production
```

sets environment inside the service container.

Use:

```bash
docker compose config
```

when unsure what Compose resolved.

---

# 83. Compose Secrets and Configs

## Secret

```yaml
services:
  api:
    image: example/api:1.0
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

The application can read the mounted secret file at the configured runtime location.

## Config

```yaml
services:
  nginx:
    image: nginx
    configs:
      - source: nginx_config
        target: /etc/nginx/conf.d/default.conf

configs:
  nginx_config:
    file: ./nginx.conf
```

Use configs for non-sensitive configuration and secrets for sensitive data.

Do not commit real secret files simply because Compose knows how to mount them.

---

# 84. Compose Watch / Develop Workflow

Development often uses bind mounts:

```yaml
volumes:
  - .:/app
```

But large bind mounts can be slow or can accidentally hide container-installed files.

Modern Compose development features can synchronize or rebuild on file changes.

Conceptual example:

```yaml
services:
  api:
    build: .
    develop:
      watch:
        - action: sync
          path: ./src
          target: /app/src
        - action: rebuild
          path: package-lock.json
```

This lets you distinguish:

```text
source changed -> sync
build dependency changed -> rebuild
```

Choose between bind mounts and watch/sync based on your framework and platform.

---

# 85. Compose Startup Ordering and Readiness

A dependency can be **started** but not **ready**.

Example:

```text
PostgreSQL process started
        |
        v
still performing initialization
        |
        v
API attempts connection immediately
        |
        v
connection refused
```

Basic dependency:

```yaml
api:
  depends_on:
    - db
```

Health-aware dependency:

```yaml
services:
  db:
    image: postgres:17
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 3s
      retries: 10

  api:
    build: ./api
    depends_on:
      db:
        condition: service_healthy
```

Still implement application retry/backoff because a dependency can become unavailable after startup.

---

# 86. Init-style Startup Work

Sometimes a service needs one-time preparation before the main service starts.

Examples:

- generate a derived config file
- create directories/permissions
- fetch initialization metadata
- perform controlled setup

Do not confuse one-time initialization with a permanent background daemon.

A background backup process, scheduled cleanup process, or periodic maintenance service deserves its own lifecycle rather than being disguised as startup initialization.

For static configuration and secrets, prefer native config/secret mount mechanisms instead of inventing an init container solely to copy files.

---

# 87. Advanced Compose Networking

You can separate communication domains.

```yaml
services:
  proxy:
    networks:
      - edge
      - app

  api:
    networks:
      - app
      - data

  db:
    networks:
      - data

networks:
  edge:
  app:
  data:
```

Result:

```text
Internet
   |
 proxy
   |
 app network
   |
  api
   |
 data network
   |
  db
```

The proxy does not need direct DB access.

Network separation reduces accidental connectivity and clarifies architecture.

---

# 88. Network Aliases and Multiple Networks

A service can have aliases on a particular network.

Conceptual Compose:

```yaml
services:
  api:
    image: example/api
    networks:
      backend:
        aliases:
          - orders.internal

networks:
  backend:
```

Other containers on that network can resolve the alias according to Docker networking behavior.

A container attached to multiple networks can have different connectivity on each network.

Avoid using aliases to hide confusing service design. Use them when they make integration clearer.

---

# 89. Bridge Networking Internals

A user-defined bridge network provides an isolated Layer-2/Layer-3 style virtual network on one Docker host.

Conceptually:

```text
Host
 |
 +-- bridge network: app-net
      |
      +-- api container
      |
      +-- db container
```

Docker configures host networking rules to enable communication and port publishing.

Containers on the same user-defined bridge can use Docker-provided DNS name resolution.

## Default bridge vs user-defined bridge

For application stacks, user-defined networks are generally clearer because they provide explicit grouping and name-based discovery behavior.

---

# 90. Host, None, Overlay, Macvlan and IPvlan

## Host network

```bash
docker run --network host myapp
```

Container uses host networking namespace behavior rather than normal isolated bridge networking on supported platforms.

Use only when required because it reduces network isolation.

## None

```bash
docker run --network none myjob
```

No normal external network connectivity.

Useful for strongly isolated processing jobs.

## Overlay

Used for multi-host networking, especially in Docker Swarm.

```text
Node A container
      |
 overlay network
      |
Node B container
```

## Macvlan

Can place containers more directly onto a physical network with their own MAC-address-oriented presence.

Special use cases:

- legacy software expects LAN-visible hosts
- network appliance integration

## IPvlan

Alternative advanced integration with physical networks.

Do not use macvlan/ipvlan as default application networking. They solve specialized network requirements.

---

# 91. Host Access from Containers

Sometimes a container needs to reach a service running on the Docker host.

The exact mechanism can differ by platform/environment.

Do not assume:

```text
localhost
```

because `localhost` inside the container means the container itself.

Docker Desktop commonly provides host integration mechanisms such as a special host name. Linux Engine setups may use explicit host-gateway configuration when appropriate.

Architectural preference:

If the dependency can be containerized cleanly, service-to-service networking is often easier to reproduce than relying on an arbitrary host-local service.

---

# 92. IPv6 Concepts

Docker networking can be configured for IPv6 depending on daemon/network setup and platform support.

When designing IPv6-aware containers consider:

- daemon IPv6 configuration
- network subnet allocation
- application bind addresses
- firewall policy
- DNS records
- dual-stack behavior

Do not assume IPv4-only application code will behave correctly in a dual-stack environment.

---

# 93. Advanced Port Publishing

Basic:

```bash
docker run -p 8080:80 nginx
```

Bind only loopback:

```bash
docker run -p 127.0.0.1:8080:80 nginx
```

Publish multiple ports:

```bash
docker run \
  -p 8080:80 \
  -p 8443:443 \
  nginx
```

## Security principle

Published port = potential host exposure.

Do not publish:

```text
PostgreSQL 5432
Redis 6379
internal admin ports
metrics ports
```

unless something outside the container network genuinely needs access.

Internal Docker networking does not require host publishing.

---

# 94. Network Security Patterns

## Pattern: edge + app + data

```text
External client
      |
    edge
      |
reverse proxy
      |
 app network
      |
     API
      |
 data network
      |
 DB / cache
```

## Pattern: bind admin services to localhost

```yaml
ports:
  - "127.0.0.1:8081:8080"
```

## Pattern: no public port for workers

Workers usually need only outbound/internal connectivity.

## Pattern: least connectivity

If service A never needs service B, do not put them on a shared network just for convenience.

---

# 95. Storage Architecture in Depth

Three important data classes:

## 1. Immutable application content

Lives in image:

```text
/application binary
/static assets
/runtime libraries
```

## 2. Ephemeral runtime data

Can live in writable layer or tmpfs:

```text
temporary files
transient cache
process artifacts
```

## 3. Persistent business data

Needs durable storage:

```text
database
uploads
stateful application data
```

Good design explicitly classifies every writable path.

Ask:

```text
What writes here?
Must it survive restart?
Must it survive host failure?
Is it backed up?
Who owns permissions?
```

---

# 96. Volume Lifecycle and Backup

Create:

```bash
docker volume create app-data
```

Mount:

```bash
docker run \
  --mount type=volume,src=app-data,dst=/data \
  app
```

Removing container:

```bash
docker rm app
```

normally does not automatically remove a separately managed named volume.

## Generic volume backup pattern

For filesystem-style data, a helper container can mount a volume and create an archive.

Conceptual:

```bash
docker run --rm \
  -v app-data:/source:ro \
  -v "$PWD":/backup \
  alpine \
  tar czf /backup/app-data.tgz -C /source .
```

For databases, prefer database-aware backups when consistency matters.

---

# 97. Bind Mounts in Depth

Explicit syntax:

```bash
docker run \
  --mount type=bind,src=/srv/config,dst=/config,readonly \
  app
```

Bind mounts tightly couple the container to a host path.

Useful:

- development source
- host-managed configuration
- import/export directories

Potential problems:

- host path differs between machines
- permission mismatch
- SELinux labeling
- Windows/macOS path behavior
- container can modify host files
- bind mount hides existing image content at target path

## Scenario: hidden files

Image contains:

```text
/app/node_modules
```

You mount:

```text
./project -> /app
```

The mounted host directory hides the image's `/app` contents from that mount point.

This explains many "dependencies disappeared" development bugs.

---

# 98. SELinux and Bind Mounts

On SELinux-enabled hosts, filesystem labels can restrict a container even when Unix permissions appear correct.

Symptoms:

```text
permission denied
but chmod/chown look correct
```

Do not disable SELinux globally as your first fix.

Understand container labeling options and your distribution's Docker/SELinux integration.

Security controls should be adjusted intentionally, not bypassed because an application failed to open a file.

---

# 99. Storage Drivers and Writable Layers

Docker storage drivers manage image layers and the writable container layer.

Modern Linux installations commonly use overlay filesystem technology when supported.

The writable layer is appropriate for ephemeral changes.

It is usually a poor place for database durability because:

- tied to container lifecycle
- may have different performance characteristics
- harder backup semantics
- state becomes less explicit

Use volumes for persistent data and keep the container layer disposable.

---

# 100. Database Container Production Concerns

Containerizing PostgreSQL/MySQL does not simplify away database engineering.

You still need:

- durable storage
- backups
- point-in-time recovery strategy where needed
- replication
- high availability
- monitoring
- connection limits
- schema migration strategy
- patching/upgrades
- encryption
- credential management
- restore testing

## Production question

Instead of asking:

```text
Can PostgreSQL run in Docker?
```

ask:

```text
What are the durability, recovery, availability and operational requirements of this PostgreSQL service?
```

The container is only one part of the answer.

---

# 101. Resource Governance and cgroups

Containers share a host, so you need resource boundaries.

Memory:

```bash
docker run --memory=512m app
```

CPU:

```bash
docker run --cpus=1.5 app
```

PIDs:

```bash
docker run --pids-limit=200 app
```

Observe:

```bash
docker stats
```

Resource limits are enforced using host kernel mechanisms such as cgroups on Linux.

## Production strategy

1. measure normal usage
2. load test
3. identify peak usage
4. set realistic requests/limits in your platform
5. monitor throttling/OOM behavior
6. adjust based on evidence

---

# 102. OOM Behavior and Memory Design

If a container exceeds enforced memory constraints, the kernel/runtime may terminate processes due to out-of-memory conditions.

Symptoms can include:

- process exits unexpectedly
- container restarts
- exit metadata indicates OOM kill
- application log ends suddenly

Inspect:

```bash
docker inspect CONTAINER
```

Monitor:

```bash
docker stats
```

## Common causes

- memory leak
- cache grows forever
- JVM heap too large for container limit
- too many workers
- large file loaded into memory
- limit unrealistically small

A restart policy does not fix memory design.

---

# 103. CPU Limits and Throttling

Example:

```bash
docker run --cpus=0.5 cpu-heavy-app
```

The container is limited to roughly a fraction of CPU capacity according to runtime scheduling controls.

Symptoms of CPU pressure:

- high response latency
- slow builds
- timeouts
- worker backlog
- high throttling

Diagnose application CPU use before simply granting unlimited CPU.

---

# 104. PID Limits and Fork Bombs

A container can create many processes if not constrained.

Limit:

```bash
docker run --pids-limit=200 app
```

Why:

A runaway application could otherwise exhaust host process resources.

This is especially useful for shared hosts and as defense-in-depth.

---

# 105. Logging Architecture

Good container application behavior:

```text
application log -> stdout/stderr
                         |
                         v
                   container runtime
                         |
                         v
                 logging driver/agent
                         |
                         v
                  centralized system
```

Avoid relying exclusively on:

```text
/var/log/myapp/app.log inside container
```

unless you have an intentional collection strategy.

Container logs should be structured where practical, for example JSON fields:

```json
{
  "level": "error",
  "requestId": "abc123",
  "message": "database timeout"
}
```

This improves search and correlation.

---

# 106. Logging Drivers

Docker supports multiple logging drivers depending on environment.

Inspect default logging information:

```bash
docker info
```

Inspect container:

```bash
docker inspect CONTAINER
```

Production considerations:

- rotation
- local disk usage
- delivery guarantees
- backpressure
- centralized destination availability
- structured logs
- sensitive data redaction

Never log passwords, tokens or secrets simply because logs are centralized.

---

# 107. Docker Daemon Configuration

On Linux, Docker Engine daemon configuration is commonly managed through a JSON configuration file plus service-manager configuration.

Areas you may configure include:

- data root
- logging defaults
- registry mirrors
- DNS
- runtimes
- proxy configuration
- address pools
- live-restore-related behavior
- metrics/API endpoints where required

Inspect current engine:

```bash
docker info
```

Systemd logs:

```bash
journalctl -u docker
```

## Important production rule

Daemon configuration affects every container on the host.

Treat changes like infrastructure changes:

```text
review
backup config
test
roll out
monitor
```

Do not paste arbitrary `daemon.json` examples into a production host without understanding each option.

---

# 108. Docker Contexts and Remote Engines

Contexts let a Docker CLI switch between endpoints.

List:

```bash
docker context ls
```

Current:

```bash
docker context show
```

Switch:

```bash
docker context use production
```

## Scenario

```text
default     -> laptop
staging     -> remote test engine
production  -> protected remote engine
```

Before destructive operations such as prune or container removal, always confirm the current context.

```bash
docker context show
```

---

# 109. Docker API Security

Docker Engine exposes an API used by the CLI.

Access to that API is powerful.

A user who can fully control the Docker daemon can often:

- start privileged containers
- mount host directories
- read secrets available to containers
- control networks
- stop workloads
- alter images/containers

Therefore:

- never expose an unauthenticated Docker API on a public interface
- use protected transport/authentication for remote engines
- restrict network access
- apply authorization where your architecture requires it
- audit administrative access

Treat Docker daemon access as high privilege.

---

# 110. Rootless Docker

Rootless mode runs both the Docker daemon and containers without root privileges, subject to prerequisites.

This reduces the privilege of the daemon/runtime environment.

Do not confuse:

```text
USER app
```

inside a Dockerfile with rootless Docker.

They protect different layers.

## Non-root container

```text
dockerd may be root
container process is non-root
```

## Rootless Docker

```text
dockerd runs as ordinary user
containers run under rootless user namespace mechanisms
```

Rootless mode can have networking, port, cgroup and filesystem considerations depending on host setup.

---

# 111. User Namespace Remapping

User namespaces can map container user IDs to different host user IDs.

Conceptually:

```text
container UID 0
      |
      v
unprivileged host UID range
```

This reduces the impact of some container-to-host privilege assumptions.

It is different from rootless mode, though both rely on user namespace concepts.

When enabling user namespace remapping, test:

- bind mount ownership
- volume permissions
- applications requiring specific host IDs
- operational tooling

---

# 112. Linux Capabilities

Traditional Unix root privilege is divided into capabilities such as network/admin-related abilities.

Drop everything:

```bash
docker run \
  --cap-drop=ALL \
  myapp
```

Add only one requirement:

```bash
docker run \
  --cap-drop=ALL \
  --cap-add=NET_BIND_SERVICE \
  myapp
```

## Security design

Bad:

```text
application fails
-> add --privileged
```

Better:

```text
application fails
-> identify exact operation
-> determine exact permission/capability
-> add minimum necessary privilege
```

---

# 113. Seccomp

Seccomp restricts Linux system calls available to processes.

Docker applies a default seccomp profile on supported Linux configurations.

Why this matters:

Even if an attacker controls an application process, restricting unnecessary kernel interfaces reduces available attack paths.

Custom profiles are advanced security tools.

Do not disable seccomp broadly just because one unusual application makes a blocked system call. Understand the requirement first.

---

# 114. AppArmor and SELinux

Both are mandatory-access-control technologies used to further restrict processes.

## AppArmor

Common on Ubuntu-family environments.

## SELinux

Common on Red Hat-family environments.

They can restrict:

- filesystem access
- capabilities
- process behavior
- communication paths

Container security can therefore be layered:

```text
UID/GID
+
capabilities
+
seccomp
+
AppArmor/SELinux
+
read-only filesystem
+
network controls
```

---

# 115. Read-only Root Filesystems

Run:

```bash
docker run --read-only app
```

If application needs temporary writes:

```bash
docker run \
  --read-only \
  --tmpfs /tmp \
  app
```

Compose:

```yaml
services:
  api:
    read_only: true
    tmpfs:
      - /tmp
```

Benefits:

- runtime cannot casually modify image filesystem
- accidental writes become visible during testing
- reduces persistence opportunity for some attacks

Design writable paths explicitly.

---

# 116. no-new-privileges

Linux supports a no-new-privileges security control that prevents processes from gaining additional privileges through mechanisms such as setuid transitions.

Docker runtime example:

```bash
docker run \
  --security-opt=no-new-privileges:true \
  app
```

This is a useful defense-in-depth control for many applications.

Test your workload because specialized software may rely on privilege transitions.

---

# 117. Privileged Containers

Command:

```bash
docker run --privileged ...
```

This grants very broad device/capability access and significantly weakens normal isolation.

Legitimate low-level infrastructure tools may sometimes require elevated privileges, but application containers normally should not.

## Red flag

If a tutorial says:

```text
If permission error, add --privileged
```

without explaining why, stop and investigate.

---

# 118. Docker Socket Security

Common socket:

```text
/var/run/docker.sock
```

Mounting it:

```yaml
volumes:
  - /var/run/docker.sock:/var/run/docker.sock
```

can allow the container to control the daemon.

A malicious process with sufficient socket access may start a container that mounts the host filesystem, effectively escalating to host control.

Treat socket access as administrative privilege.

Alternatives can include:

- avoid the requirement
- use a restricted API proxy
- isolate the tool on a dedicated host
- use purpose-built platform APIs

---

# 119. Runtime Secret Management

A secure secret lifecycle includes more than "where do I store the password?"

Ask:

```text
Who can read it?
How is it delivered?
Is it logged?
How is it rotated?
How is access revoked?
Can it be short-lived?
```

Preferred patterns include:

- mounted secret file
- external secret manager
- short-lived token
- workload identity
- orchestrator secret integration

Avoid:

```text
Dockerfile secret
Git secret
public environment dump
shell history secret
log secret
```

---

# 120. Supply-chain Security

A production image passes through a chain:

```text
source
 -> dependencies
 -> CI runner
 -> builder
 -> base image
 -> registry
 -> deployment
```

Every step can be attacked.

Controls can include:

- protected source branches
- dependency review
- trusted base images
- isolated builders
- SBOM
- provenance
- vulnerability scanning
- signing/verification
- registry immutability
- least-privilege CI credentials
- deployment policy

Container security starts before `docker run`.

---

# 121. Image Scanning and Patching Strategy

Scanning finds known vulnerability information associated with packages/components.

But scanning alone is not enough.

A practical process:

```text
scan
  |
triage
  |
patch dependency/base
  |
rebuild
  |
test
  |
rescan
  |
deploy
```

Questions for each finding:

- Is vulnerable package actually present?
- Is vulnerable code reachable?
- Is a fixed version available?
- Is base image stale?
- Is finding a false positive?
- What is exploitation severity/context?

Never use "zero scanner findings" as the only definition of secure.

---

# 122. Registry Security and Immutability

Production registry controls should consider:

- authentication
- repository permissions
- CI service accounts
- tag immutability
- retention policies
- vulnerability scanning
- audit logs
- replication/availability
- TLS
- artifact signing/verification

## Tag immutability

Bad operational pattern:

```text
production tag today -> image A
production tag tomorrow -> image B
without traceability
```

Better:

```text
app:2.4.1
app:git-a1b2c3d
app@sha256:...
```

Deploy exact versions and record them.

---

# 123. PID 1 and Init Processes

In many containers, your application is PID 1.

PID 1 has special Linux behavior.

Potential issues:

- signals not forwarded correctly through shell wrappers
- zombie child processes not reaped

Bad wrapper concept:

```dockerfile
CMD sh -c "node server.js"
```

Better when shell is not needed:

```dockerfile
CMD ["node", "server.js"]
```

If an application creates child processes and needs help with reaping/signals, Docker can launch a small init process:

```bash
docker run --init app
```

Compose:

```yaml
services:
  app:
    init: true
```

---

# 124. Signals and Graceful Shutdown

Normal stop flow concept:

```text
docker stop
   |
   v
termination signal
   |
application cleanup window
   |
process exits
```

If application ignores termination, Docker eventually forces termination after the configured timeout.

Graceful HTTP shutdown:

```text
stop accepting new requests
wait for in-flight requests
close DB pool
flush telemetry
exit
```

Queue worker shutdown:

```text
stop receiving new message
finish current message safely
acknowledge if completed
close connection
exit
```

Test shutdown as deliberately as startup.

---

# 125. Process Reaping and Zombie Processes

A child process that exits must have its status collected by its parent.

If child processes are not reaped, zombie entries can accumulate.

This matters when:

- application launches shell commands
- process supervisor/wrapper is poorly designed
- PID 1 does not correctly reap children

Possible solutions:

- application properly waits on children
- use exec-form entrypoint
- use `--init`/`init: true` when appropriate

---

# 126. OCI, containerd and runc

The container ecosystem is layered.

Simplified view:

```text
Docker CLI
   |
Docker Engine / dockerd
   |
containerd
   |
OCI runtime such as runc
   |
Linux kernel
```

## OCI

Open Container Initiative defines standards for container images and runtimes.

## containerd

Manages lower-level container/image lifecycle functions.

## runc

Low-level runtime that creates a container according to OCI runtime configuration.

This separation is why "Docker image" concepts extend beyond Docker Engine itself.

---

# 127. Namespaces in Depth

Linux namespaces isolate views of resources.

Important namespace concepts include:

## PID namespace

Process IDs.

Container may see:

```text
PID 1 node
PID 20 worker
```

without seeing all host processes.

## Network namespace

Own interfaces, routes, ports and loopback view.

This is why:

```text
localhost inside container != host localhost
```

## Mount namespace

Own filesystem mount view.

## UTS namespace

Hostname/domain-name isolation.

## IPC namespace

Inter-process communication isolation.

## User namespace

Maps user/group identities.

Memory aid:

```text
namespace = what can this process see?
```

---

# 128. cgroups in Depth

cgroups group processes and apply accounting/limits.

Resource categories include concepts around:

- CPU
- memory
- PIDs
- I/O

Memory aid:

```text
namespace = visibility/isolation
cgroup    = resources/accounting
```

Modern Linux hosts commonly use cgroups v2.

Container platforms translate settings such as:

```bash
--memory
--cpus
--pids-limit
```

into underlying resource-control configuration.

---

# 129. Container Filesystem Internals

Conceptual container filesystem:

```text
Writable container layer
------------------------
Application image layer
Dependency layer
Runtime layer
Base image layer
------------------------
Mounted volume at selected paths
Mounted bind paths
```

A mount can obscure underlying image content at the same path.

This is not deletion; the mount changes what is visible there.

When the mount is removed, original image content is visible again in a newly created container.

---

# 130. Container Startup Lifecycle

When you run:

```bash
docker run --name api -p 3000:3000 app:1.0
```

conceptually Docker must:

1. resolve `app:1.0`
2. pull required image data if missing
3. create container metadata
4. prepare writable layer
5. configure mounts
6. create namespaces
7. configure networking
8. configure cgroups/resources
9. apply capabilities/security profile
10. configure environment
11. execute entrypoint/CMD
12. track PID 1
13. record exit state

Understanding this sequence makes debugging much less mysterious.

---

# 131. Docker Events and Observability

Watch engine events:

```bash
docker events
```

You may see events related to:

- create
- start
- stop
- die
- destroy
- network operations
- volume operations

Combine with:

```bash
docker logs
docker stats
docker inspect
```

A professional production platform usually adds:

- metrics
- centralized logs
- tracing
- alerts
- service-level dashboards

Docker's built-in commands are excellent first-line diagnostics, not a complete observability platform.

---

# 132. Docker System Disk Management

Check usage:

```bash
docker system df
```

Potential consumers:

- images
- stopped containers
- volumes
- build cache
- container logs

Cleanup commands:

```bash
docker container prune
docker image prune
docker builder prune
docker network prune
docker volume prune
docker system prune
```

Aggressive:

```bash
docker system prune -a
```

## Production warning

Never automate broad pruning blindly.

Before removing anything ask:

```text
Is this image needed for rollback?
Is this volume persistent data?
Is this build cache intentionally retained?
```

---

# 133. Docker Swarm Fundamentals

Swarm mode is built into Docker Engine for multi-node orchestration.

Initialize manager:

```bash
docker swarm init
```

Concepts:

```text
Swarm
  |
  +-- manager nodes
  +-- worker nodes
  +-- services
  +-- tasks
  +-- overlay networks
```

Managers maintain cluster state and scheduling/control responsibilities.

Workers execute tasks.

---

# 134. Swarm Services, Tasks and Stacks

Create replicated service:

```bash
docker service create \
  --name web \
  --replicas 3 \
  -p 80:80 \
  nginx
```

List:

```bash
docker service ls
```

Tasks:

```bash
docker service ps web
```

Scale:

```bash
docker service scale web=5
```

Update image:

```bash
docker service update \
  --image nginx:NEW_TAG \
  web
```

A service describes desired state; tasks are concrete running units assigned to nodes.

---

# 135. Swarm Networking, Secrets and Configs

Swarm supports:

- overlay networks
- service discovery
- secrets
- configs
- rolling service updates

This lets a service span nodes while retaining a logical service identity.

Use Swarm when its operational model fits your organization. Do not choose or reject it solely based on popularity; compare requirements such as ecosystem, complexity, managed-platform availability and team skill.

---

# 136. Docker vs Kubernetes

Docker and Kubernetes are complementary but different.

Docker ecosystem excels at:

- image build
- local run
- Compose development
- registry workflow

Kubernetes focuses on cluster orchestration:

- scheduling
- replicas
- Services
- Deployments
- StatefulSets
- jobs
- probes
- persistent volumes
- autoscaling
- policy/integration ecosystem

Kubernetes does not require Docker Engine on nodes. OCI images built with Docker remain usable by Kubernetes-compatible runtimes.

---

# 137. Production Architecture Patterns

## Pattern A: Reverse proxy + application + database

```text
Internet
   |
Load balancer / reverse proxy
   |
Application containers
   |
Database
```

Only the edge service requires direct public exposure.

## Pattern B: API + worker + queue

```text
Client -> API -> Queue -> Worker -> DB
```

Worker does not need a public port.

## Pattern C: frontend + backend networks

```text
Internet
   |
frontend
   |
backend network
   |
API
   |
data network
   |
DB
```

## Pattern D: immutable application + mounted config

```text
same image
  + dev config
  + staging config
  + prod config
```

Do not build a different source artifact just because configuration differs.

## Pattern E: stateless app replicas

Application container keeps session/state in shared external systems where appropriate:

```text
replica A ----\
replica B -----+--> Redis / DB / object storage
replica C ----/
```

Stateless design makes replacement/scaling easier.

---

# 138. Background Workers and Scheduled Jobs

Not every container is a web server.

## Worker

```text
queue -> worker container -> database
```

The worker should:

- handle termination signals
- finish/return work safely
- reconnect after dependency failure
- avoid duplicate processing where business logic requires idempotency
- emit logs and metrics

## One-off job

```bash
docker run --rm report-job:1.0
```

Useful for:

- report generation
- maintenance
- import/export
- migration

## Scheduled job

Use an external scheduler, orchestrator job/cron feature, or host scheduler to start a disposable job container.

Avoid running a full cron daemon inside every application container unless that architecture is intentional.

---

# 139. Database Migrations

Containerized deployments frequently fail because migration strategy was ignored.

Possible approaches:

## Run migration before application rollout

```text
CI deploy stage
  |
run migration job
  |
start new app
```

## Dedicated one-off Compose job

```bash
docker compose run --rm api npm run migrate
```

## Application startup migration

Simple but risky with multiple replicas.

## Questions before migration

- Is it backward compatible?
- Can old and new app versions coexist temporarily?
- Does it lock a large table?
- What happens on partial failure?
- Can it be retried?
- How do we roll back?

## Expand-contract pattern

Safer schema changes often use stages:

```text
1. add new nullable column/table
2. deploy code supporting old + new
3. migrate/backfill data
4. switch reads/writes
5. remove old schema later
```

This is much safer for rolling deployments than destructive one-step migrations.

---

# 140. Blue-Green and Rolling Deployment Concepts

Docker itself can run replacement containers; deployment platforms determine how traffic moves between versions.

## Blue-green

```text
Blue = current production
Green = new version
```

Flow:

```text
Deploy Green
Test Green
Switch traffic Blue -> Green
Keep Blue temporarily for rollback
```

Advantages:

- fast traffic switch
- easy application rollback

Costs:

- duplicate capacity
- DB compatibility still required

## Rolling update

Replace instances gradually:

```text
v1 v1 v1 v1
v2 v1 v1 v1
v2 v2 v1 v1
v2 v2 v2 v1
v2 v2 v2 v2
```

Requires old/new versions to coexist safely during the rollout.

---

# 141. Rollback Design

A Docker image rollback is straightforward:

```text
2.5.0 -> 2.4.3
```

But a **system rollback** may not be.

Problems:

- irreversible schema migration
- messages written in new format
- new cache structure
- external API contract changed
- files transformed by new version

Rollback plan should define:

```text
application rollback
schema compatibility
state compatibility
configuration rollback
traffic switch
monitoring threshold
```

Always test rollback before the emergency.

---

# 142. Docker in CI/CD in Depth

A mature pipeline may look like:

```text
Pull request
   |
static analysis
   |
unit tests
   |
Docker build
   |
integration tests using built image
   |
Dockerfile/build checks
   |
vulnerability scan
   |
SBOM + provenance
   |
push immutable image
   |
staging deploy
   |
verification
   |
production promotion
```

## Tagging strategy

Useful tags:

```text
app:2.5.1
app:git-a1b2c3d
```

Record digest after push.

## Build once

Prefer:

```text
build one image -> test -> promote
```

over:

```text
build staging image
then rebuild production image separately
```

The second approach can introduce artifact drift.

## CI cache

Use BuildKit external cache rather than depending on local runner persistence.

## Credentials

CI push credential should have the narrowest useful registry permission.

---

# 143. Testing with Disposable Containers

Disposable dependencies reduce shared-environment coupling.

Example test architecture:

```text
test runner
   |
   +--> PostgreSQL container
   +--> Redis container
   +--> mock HTTP service
```

Start:

```bash
docker compose -f compose.test.yaml up -d
```

Run tests.

Destroy:

```bash
docker compose -f compose.test.yaml down -v
```

This gives each test run a clean database when desired.

## Test the real image

Strong pattern:

```text
build production-style image
run it in test environment
execute integration tests against it
```

That validates packaging as well as source code.

---

# 144. Disaster Recovery

Docker makes application replacement easy, but disaster recovery requires broader planning.

Imagine the Docker host is completely lost.

Can you recover from:

```text
Git repository
container registry
infrastructure configuration
secret manager
persistent-data backup
DNS/load-balancer configuration
```

A strong recovery design avoids depending on undocumented state inside one server.

## Recovery exercise

1. provision empty host
2. install/configure runtime
3. pull exact application images
4. restore configuration/secrets
5. restore database/data
6. start services
7. validate health
8. measure recovery time

If this procedure exists only in one engineer's memory, it is not a reliable DR process.

---

# 145. Debugging Decision Tree

Use this every time a containerized application fails.

```text
Is Docker daemon reachable?
   |
   +-- No -> daemon/socket/context/permissions
   |
   +-- Yes
        |
Is container running?
   |
   +-- No -> logs + exit code + inspect
   |
   +-- Yes
        |
Is app listening?
   |
   +-- No -> app config/process
   |
   +-- Yes
        |
Can container reach dependency?
   |
   +-- No -> DNS/network/port/readiness
   |
   +-- Yes
        |
Can client reach published port?
   |
   +-- No -> bind address/publishing/firewall
   |
   +-- Yes
        |
Application-level bug or downstream issue
```

## First commands

```bash
docker ps -a
docker logs CONTAINER
docker inspect CONTAINER
docker stats
docker network ls
docker system df
```

Do not start by deleting everything.

---

# 146. Real-world Failure Scenarios

## Failure 1: Container continuously restarts

Check:

```bash
docker ps -a
docker logs app
docker inspect app
```

Possible causes:

- invalid config
- dependency unavailable
- OOM
- command exits
- migration fails

---

## Failure 2: App works from inside container, not from host

Inside:

```bash
curl localhost:3000
```

works.

Host fails.

Check:

- application bind address
- `-p` mapping
- host firewall
- wrong host port

Application may be listening only on:

```text
127.0.0.1 inside container
```

Bind to `0.0.0.0` if external container-interface access is intended.

---

## Failure 3: App cannot resolve DB

Check service names and network membership.

Wrong:

```text
DB_HOST=database.internal.company
```

if local Compose service is actually `db` and no such DNS exists.

Use:

```text
DB_HOST=db
```

for the Compose service network.

---

## Failure 4: File exists in image but disappears at runtime

A bind mount/volume was mounted over its directory.

Inspect mounts:

```bash
docker inspect app
```

---

## Failure 5: Works as root, fails as non-root

Good! You discovered a permission dependency.

Inspect:

```bash
docker exec app id
docker exec app ls -ld /required/path
```

Fix ownership or redesign writable paths.

---

## Failure 6: CI build always redownloads dependencies

Likely:

- cache not persisted
- context invalidates dependency step
- no external CI cache

Use dependency-manifest ordering and BuildKit cache export/import.

---

# 147. Security Failure Scenarios

## Scenario: `.env` accidentally copied into image

Dockerfile:

```dockerfile
COPY . .
```

No `.dockerignore`.

`.env` enters image layer.

Deleting it in a later `RUN rm .env` does not guarantee removal from earlier layer history/content.

Fix:

- rotate compromised secret
- add `.dockerignore`
- rebuild from clean history/context
- use runtime secret delivery

---

## Scenario: Docker socket mounted into web app

Web app compromise can become daemon compromise.

Fix architecture rather than adding an authorization check inside the same compromised process.

---

## Scenario: Container requires `--privileged`

Investigate exact operation.

Possible real need:

- device access
- low-level networking
- nested container tooling

If ordinary web API "requires privileged", treat it as a major red flag.

---

## Scenario: Secret printed during CI build

Immediately:

1. revoke/rotate secret
2. remove log access where possible
3. replace build mechanism with secret mount
4. review who could access build logs/cache

---

# 148. Performance Failure Scenarios

## Slow build

Check:

```text
large context?
COPY . . before dependencies?
no cache mount?
no external CI cache?
architecture emulation?
network package downloads?
```

## Slow local development on desktop

Check:

- very large bind mount
- dependency directories synced unnecessarily
- file watcher scanning generated folders
- project location across virtualization filesystem boundary
- Compose watch/sync alternatives

## Runtime latency

Do not blame Docker first.

Measure:

- CPU
- memory
- DB latency
- DNS
- network
- disk I/O
- application profile

```bash
docker stats
```

is a starting point, not a full profiler.

---

# 149. Advanced Interview Questions

### 1. Why does deleting a secret in a later Dockerfile layer not necessarily remove it from the image?

Because earlier image layers remain part of the image content; a later layer can hide/remove the file from the final merged view without erasing the previous layer blob.

### 2. Why are digests stronger deployment identifiers than tags?

Tags can move to different content; a digest identifies exact content/manifest data.

### 3. Why is `localhost` different in a container?

The container has its own network namespace. Its loopback interface belongs to that namespace.

### 4. Why can `depends_on` still be insufficient?

Startup order is not the same as application readiness or continued availability.

### 5. Why do production apps need retry logic even with health checks?

Dependencies can fail after startup; distributed systems must handle transient failures during normal operation.

### 6. What is the difference between a named volume and a bind mount?

Named volumes are managed by Docker and referenced by logical name; bind mounts map explicit host filesystem paths.

### 7. How do BuildKit secret mounts improve security?

They make credentials temporarily available to specific build steps without intentionally baking them into image layers or normal build arguments.

### 8. What is an external build cache?

Reusable BuildKit cache stored outside a local ephemeral builder, often in a registry or CI cache backend.

### 9. Why might an Alpine image fail when a Debian-based image works?

Differences can include musl vs glibc, package availability, native binary assumptions and debugging tooling.

### 10. What is PID 1's importance?

It receives signals as the container main process and has special child-reaping/signal semantics on Linux.

### 11. What problem does `--init` solve?

It adds a small init process that can forward signals and reap orphaned child processes.

### 12. What does a read-only root filesystem accomplish?

It prevents normal runtime writes to the image root filesystem, reducing mutable surface and revealing hidden write assumptions.

### 13. Why is Docker group membership highly privileged?

The user can control the Docker daemon, which can create containers with host mounts/privileges and therefore often gain host-level power.

### 14. Rootless Docker vs non-root container user?

Non-root user limits the process inside a container; rootless Docker reduces privilege of the daemon/runtime itself.

### 15. What do Linux capabilities solve?

They split monolithic root privileges into smaller units that can be granted/dropped selectively.

### 16. What is seccomp?

A Linux mechanism for filtering/restricting system calls.

### 17. What is the relationship between Docker and OCI?

Docker builds/runs artifacts compatible with OCI standards; OCI defines common image/runtime specifications used across the container ecosystem.

### 18. What roles do containerd and runc play?

containerd manages lower-level container lifecycle/image functions; runc is a low-level OCI runtime commonly responsible for creating/running containers.

### 19. Why can Kubernetes run Docker-built images without Docker Engine?

Because the images follow interoperable container image standards and Kubernetes uses CRI-compatible runtimes rather than requiring Docker Engine.

### 20. What is an image index?

Metadata that can reference multiple platform-specific image manifests under one image reference.

### 21. What is SBOM?

An inventory of software components included in an artifact.

### 22. What is provenance?

Metadata describing how and from what inputs/source an artifact was produced.

### 23. Why can `mode=max` provenance be dangerous with build args?

Rich provenance can record build argument values, so credentials must not be passed as normal build args.

### 24. Why use multi-stage builds?

To separate build-time tools/source from the runtime artifact and selectively copy only needed outputs.

### 25. Why can a volume mount make an image directory look empty/different?

The mount overlays that path in the container's filesystem view and hides underlying image content at the mount point.

### 26. Why are resource limits important?

Containers share host resources; limits prevent one workload from exhausting shared memory/CPU/PID capacity.

### 27. What does OOMKilled indicate?

The container process was terminated due to memory pressure/limit conditions associated with the kernel/runtime.

### 28. Why is a restart policy not self-healing architecture by itself?

It restarts a failed process but does not correct broken dependencies, corrupt data, configuration errors, memory leaks or systemic failures.

### 29. Why should production logs go to stdout/stderr?

It lets the runtime/logging pipeline collect logs consistently rather than hiding them in ephemeral container filesystems.

### 30. What is the safest rollback strategy for DB-backed services?

There is no single universal one; use backward-compatible schema evolution, versioned images, tested restore/rollback procedures and avoid irreversible changes during mixed-version rollouts.

---

# 150. Final Professional Docker Checklist

## Architecture

- [ ] Every service has a clear responsibility.
- [ ] Only required services publish host ports.
- [ ] Internal services use service discovery instead of hardcoded IPs.
- [ ] Network boundaries reflect actual communication needs.
- [ ] Persistent state is explicitly identified.
- [ ] Stateless services are replaceable.

## Images

- [ ] Dockerfiles are understandable and reviewed.
- [ ] `.dockerignore` excludes unnecessary/sensitive files.
- [ ] Dependency layers are cache-friendly.
- [ ] Multi-stage builds remove unnecessary build tools.
- [ ] Base images are deliberate and maintained.
- [ ] Images are versioned and traceable.
- [ ] Production deployments can record image digests.

## Build

- [ ] BuildKit features are used where useful.
- [ ] Build secrets never use normal ARG/ENV as a substitute for secret mounts.
- [ ] CI uses persistent/external build cache where beneficial.
- [ ] Multi-platform requirements are explicit.
- [ ] SBOM/provenance requirements are defined.
- [ ] Build checks/linting are part of quality controls.

## Runtime

- [ ] Main process stays in foreground.
- [ ] PID 1 behavior is understood.
- [ ] Graceful shutdown is tested.
- [ ] Health check is meaningful.
- [ ] Resource limits are based on measurements.
- [ ] Restart policy matches workload behavior.
- [ ] Temporary writable paths are intentional.

## Storage

- [ ] Databases use persistent storage.
- [ ] Volume != backup is understood.
- [ ] Restore procedure is tested.
- [ ] Bind mounts are minimized in production.
- [ ] Permissions work with non-root users.
- [ ] SELinux/AppArmor implications are considered on relevant hosts.

## Security

- [ ] Application runs non-root where possible.
- [ ] Rootless Engine feasibility has been evaluated where relevant.
- [ ] Capabilities are minimized.
- [ ] `--privileged` is avoided.
- [ ] Docker socket is not casually exposed.
- [ ] Read-only rootfs is used where practical.
- [ ] `no-new-privileges` is considered.
- [ ] Secrets are delivered at runtime/build with proper mechanisms.
- [ ] Images are scanned and regularly rebuilt.
- [ ] Registry permissions are least-privilege.
- [ ] CI credentials are scoped and rotated.

## Compose

- [ ] `docker compose config` is used to validate final configuration.
- [ ] `depends_on` is not mistaken for long-term reliability.
- [ ] Health checks/retries handle dependency readiness.
- [ ] Profiles are used for optional tools when helpful.
- [ ] Environment-specific override strategy is understandable.
- [ ] Secrets/configs are not hardcoded into the image.

## CI/CD

- [ ] The pipeline tests the image that will be deployed.
- [ ] The same artifact is promoted rather than rebuilt per environment where possible.
- [ ] Tags/commit identifiers are traceable.
- [ ] Rollback artifact is retained.
- [ ] Database migration compatibility is reviewed before rollout.
- [ ] Build cache does not contain secrets.

## Operations

- [ ] Logs are centralized or intentionally managed.
- [ ] Log rotation prevents host disk exhaustion.
- [ ] `docker system df` is monitored where relevant.
- [ ] Broad prune operations are controlled.
- [ ] Docker daemon/API access is protected.
- [ ] Production contexts/endpoints are clearly distinguished.
- [ ] Host patching and Docker Engine updates are planned.

## Troubleshooting

- [ ] I check `docker ps -a` first.
- [ ] I read `docker logs` before changing configuration.
- [ ] I use `docker inspect` to verify actual runtime state.
- [ ] I inspect networks rather than guessing IP addresses.
- [ ] I inspect mounts when files disappear.
- [ ] I use `docker stats` for first-pass resource analysis.
- [ ] I know how to distinguish application, Docker, host, network and dependency failures.

## Internals

- [ ] I understand namespaces.
- [ ] I understand cgroups.
- [ ] I understand image layers/copy-on-write.
- [ ] I understand OCI at a high level.
- [ ] I understand containerd and runc at a high level.
- [ ] I can explain what happens when `docker run` executes.

---

# Extended Scenario: From Laptop to Production

Assume an application contains:

```text
Angular frontend
Node.js API
Redis
PostgreSQL
background worker
```

## Development

```text
Developer
   |
docker compose up
   |
   +-- frontend with source sync
   +-- API with hot reload
   +-- PostgreSQL named volume
   +-- Redis
   +-- worker
```

## CI

```text
Git commit
   |
unit tests
   |
build frontend image
build API image
build worker image
   |
integration tests
   |
scan + SBOM + provenance
   |
push commit-tagged images
```

## Staging

```text
pull exact CI images
   |
run migration job
   |
deploy services
   |
health checks
   |
smoke test
```

## Production

```text
promote same digests
   |
rolling or blue-green deployment
   |
monitor errors/latency/resources
   |
rollback if policy threshold crossed
```

## Persistence

```text
PostgreSQL -> durable storage -> independent backups
```

## Secrets

```text
secret manager -> runtime service identity -> app
```

## Networking

```text
Internet
   |
TLS proxy/load balancer
   |
frontend/API
   |
private data network
   |
PostgreSQL + Redis
```

## Security

```text
non-root
read-only where possible
minimal capabilities
no Docker socket
scanned images
immutable versions
least privilege secrets
```

If you can build, explain, secure, debug and recover this architecture, you have covered the majority of practical Docker knowledge expected from a strong application/DevOps engineer.

---

# Extended Official Reference Notes

This handbook was expanded using current Docker documentation as the technical reference point. Docker features and CLI flags evolve, so check the official documentation for exact behavior before implementing production changes.

Key official reference areas:

```text
Docker Engine
Dockerfile reference
Docker build / BuildKit
Build cache
Build secrets
Buildx
Multi-platform builds
Build attestations
Docker Compose
Compose startup ordering
Docker networking
Docker security
Rootless mode
Docker Engine release notes
```

Official documentation:

```text
https://docs.docker.com/
```

---

# Final Learning Rule

A beginner asks:

```text
What command starts a container?
```

An intermediate engineer asks:

```text
How do I containerize this application?
```

An advanced engineer asks:

```text
How do I make this build fast, reproducible and secure?
```

A production engineer asks:

```text
How will this fail, how will I detect it, how will I recover it,
and how can I prove exactly what is running?
```

That final question is the level this handbook is designed to help you reach.
