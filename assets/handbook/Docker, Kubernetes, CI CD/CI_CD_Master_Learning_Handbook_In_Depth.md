# CI/CD Master Learning Handbook

> A beginner-to-advanced, practical handbook for Continuous Integration,
> Continuous Delivery, and Continuous Deployment.

This handbook assumes basic familiarity with source files, Git commits, and
running commands in a terminal. You do not need prior experience with a CI/CD
product. Part I builds the core mental model; Part II applies it to production
concerns such as compatibility, GitOps, supply-chain security, governance, and
recovery.

## Table of Contents

1.  [CI/CD Fundamentals](#1-cicd-fundamentals)
2.  [Software Delivery Lifecycle](#2-software-delivery-lifecycle)
3.  [Version Control and Git
    Workflow](#3-version-control-and-git-workflow)
4.  [Continuous Integration](#4-continuous-integration)
5.  [Build Management](#5-build-management)
6.  [Automated Testing](#6-automated-testing)
7.  [Continuous Delivery vs
    Deployment](#7-continuous-delivery-vs-deployment)
8.  [Pipeline Anatomy](#8-pipeline-anatomy)
9.  [Environments](#9-environments)
10. [Artifacts and Registries](#10-artifacts-and-registries)
11. [Containers and Docker](#11-containers-and-docker)
12. [Kubernetes in CI/CD](#12-kubernetes-in-cicd)
13. [Infrastructure as Code](#13-infrastructure-as-code)
14. [Configuration and Secrets](#14-configuration-and-secrets)
15. [Database CI/CD](#15-database-cicd)
16. [Deployment Strategies](#16-deployment-strategies)
17. [Feature Flags](#17-feature-flags)
18. [Security / DevSecOps](#18-security--devsecops)
19. [Observability and Feedback](#19-observability-and-feedback)
20. [Rollback and Disaster Recovery](#20-rollback-and-disaster-recovery)
21. [Approvals and Governance](#21-approvals-and-governance)
22. [Popular CI/CD Tools](#22-popular-cicd-tools)
23. [GitHub Actions](#23-github-actions)
24. [GitLab CI/CD](#24-gitlab-cicd)
25. [Jenkins](#25-jenkins)
26. [Azure DevOps](#26-azure-devops)
27. [Common Stack Scenarios](#27-common-stack-scenarios)
28. [Monorepos and Microservices](#28-monorepos-and-microservices)
29. [Pipeline Performance](#29-pipeline-performance)
30. [Troubleshooting](#30-troubleshooting)
31. [Metrics and DORA](#31-metrics-and-dora)
32. [Anti-patterns and Best
    Practices](#32-anti-patterns-and-best-practices)
33. [Interview Questions](#33-interview-questions)
34. [Hands-on Projects](#34-hands-on-projects)
35. [Learning Roadmap](#35-learning-roadmap)
36. [Cheat Sheet](#36-cheat-sheet)
37. [Glossary](#37-glossary)

------------------------------------------------------------------------

## 1. CI/CD Fundamentals

### What is CI/CD?

CI/CD is a set of engineering practices that automates the path from
source-code change to tested, releasable, and often deployed software.
It reduces manual repetition, detects problems earlier, and makes
releases smaller and more predictable.

-   **CI --- Continuous Integration:** developers frequently merge small
    changes into a shared repository. Every change is automatically
    built and tested.
-   **Continuous Delivery:** every successful change is kept in a
    deployable state. Production deployment normally requires a
    deliberate approval/action.
-   **Continuous Deployment:** every change that passes all automated
    gates is automatically deployed to production.

These practices are related, but they are not synonyms:

| Practice | Main action | Typical output | Production automatic? |
|---|---|---|---|
| Continuous Integration | Integrate and validate each small change | A verified commit and test results | No |
| Continuous Delivery | Keep every accepted change releasable | A deployable, approved artifact | Usually requires a decision |
| Continuous Deployment | Release every accepted change | A running production version | Yes |

CI is the foundation for both meanings of CD. Automating deployment without a
reliable build and test process merely delivers defects faster.

### Simple mental model

``` text
Developer -> Git Push -> Build -> Test -> Security Scan -> Package
          -> Deploy Test -> Validate -> Deploy Production -> Monitor
```

### Why companies use it

Without CI/CD, teams often perform manual builds, copy files to servers,
run inconsistent tests, and discover integration failures late. CI/CD
creates a repeatable process.

**Example:** Five developers modify an e-commerce application. Instead
of combining two weeks of work just before release, each developer opens
a small pull request. CI tests every PR. The main branch therefore
remains much closer to production-ready.

------------------------------------------------------------------------

## 2. Software Delivery Lifecycle

A typical delivery flow is:

``` text
Plan -> Code -> Review -> Build -> Test -> Package -> Release -> Deploy -> Operate -> Monitor -> Feedback
```

CI/CD does not replace software engineering. It connects these
activities with automation and controls. A pipeline should answer four
questions: **What changed? Is it correct? Can it be safely released? Is
the deployed system healthy?**

### Shift-left

Shift-left means moving quality and security checks earlier. A
dependency vulnerability found in a pull request is cheaper to fix than
the same issue discovered after production deployment.

### Shift-right

Shift-right validates software after deployment using monitoring,
synthetic tests, canaries, real-user metrics, and controlled
experiments.

------------------------------------------------------------------------

## 3. Version Control and Git Workflow

CI starts with version control. The repository should be the
authoritative source for application code and, ideally,
pipeline/configuration definitions.

### Important concepts

- **Repository:** the version-controlled project history.
- **Commit:** an immutable recorded change with an identifier such as a Git
  SHA.
- **Branch:** a movable line of development, such as `main` or a short-lived
  feature branch.
- **Tag:** a named reference commonly used to mark a release, such as
  `v2.4.1`.
- **Pull/Merge Request (PR/MR):** a proposal to review and merge changes.
- **Protected branch:** a branch whose rules can prevent direct pushes or
  unreviewed merges.
- **Merge check:** an automated or human requirement that must pass before a
  merge, such as CI success or required review.

The commit SHA is the most reliable link among source, a pipeline run, a build
artifact, and a deployment record. A release tag is easier for people to read,
but the tag should still resolve to a known commit.

### Common branching models

#### Trunk-based development

Developers integrate into `main` frequently, normally using short-lived
feature branches. This works very well with mature CI.

``` text
main ----A----B------D----E
             \--C--/
```

#### GitFlow

Uses longer-lived branches such as `develop`, release branches, and
hotfix branches. It can fit scheduled releases but adds branching
complexity.

``` text
main       -----------R1-----------R2
develop    ---x---x---x---x---x---x--
feature       \--feature--/
release                 \--release--/
```

### Scenario

For a SaaS product deployed several times daily, prefer trunk-based
development plus feature flags. For a packaged enterprise product with
quarterly versions, release branches may be useful.

------------------------------------------------------------------------

## 4. Continuous Integration

CI means integrating frequently and automatically validating each
integration.

### Typical PR pipeline

``` text
Checkout
  -> Restore dependencies
  -> Lint / format check
  -> Compile/build
  -> Unit tests
  -> SAST/dependency scan
  -> Package validation
  -> Report status to PR
```

### Good CI characteristics

-   Fast feedback
-   Deterministic builds
-   Isolated jobs
-   Reproducible dependencies
-   Useful failure messages
-   No dependence on a developer laptop

### Fail fast

Run cheap, high-signal checks first. A 20-second syntax/lint failure
should happen before a 30-minute end-to-end suite.

------------------------------------------------------------------------

## 5. Build Management

A build converts source into something executable or distributable.
Examples include Java JAR/WAR files, .NET assemblies, Angular bundles,
Node packages, Docker images, or native binaries.

The inputs are source code, dependency declarations or lock files, build
configuration, and a defined toolchain. The output is a build artifact plus
evidence such as compiler messages, checksums, and metadata. A successful exit
code means the build command completed; it does not prove the application is
correct, which is why tests and validation follow.

Example:

```bash
dotnet publish --configuration Release --output publish
```

`--configuration Release` selects optimized release settings and `--output`
chooses the artifact directory. On success, `publish/` contains the files that
can be packaged or copied into a runtime image. Use the project-specific build
tool and lock dependencies so CI and developer builds resolve the same inputs.

### Reproducible builds

The same source + declared dependencies + build environment should
produce functionally equivalent output. Pin dependencies and avoid
hidden machine state.

### Build once, deploy many

A strong practice is to create an artifact once and promote that exact
artifact through environments. Do not rebuild different binaries for QA
and production.

``` text
Commit abc123 -> Build -> app-abc123.jar
                         |-> QA
                         |-> UAT
                         `-> Production
```

------------------------------------------------------------------------

## 6. Automated Testing

A pipeline uses layers of tests rather than relying on one giant test
suite.

### Test pyramid

``` text
             / E2E \
            /Integration\
           /   Unit Tests   \
```

### Unit tests

Test small functions/classes quickly and without external systems where
possible.

### Integration tests

Verify components interact correctly---for example an API with
PostgreSQL or a service with a message broker.

### Contract tests

Validate that service interfaces remain compatible. Particularly useful
in microservices.

### End-to-end tests

Exercise realistic user flows. They provide confidence but are slower
and more fragile, so use them selectively.

### Smoke tests

A small post-deployment suite proving critical functions are alive:
homepage loads, health endpoint succeeds, login/API basics work.

### Quality gates

Examples: all unit tests pass, no critical vulnerabilities, coverage
does not fall below policy, and required reviewers approve. Avoid
treating coverage percentage as proof of correctness.

### Choosing the right test layer

| Test type | Main input | Output | Best use | Avoid using it for |
|---|---|---|---|---|
| Unit | One function/class and controlled collaborators | Fast pass/fail with precise failures | Business rules and edge cases | Proving real infrastructure integration |
| Integration | Multiple real components | Compatibility and interaction evidence | Database, broker, filesystem, or API integration | Every small code branch |
| Contract | Provider/consumer interface expectations | Compatibility result | Independently deployed services | Full user journeys |
| End-to-end | Deployed system and realistic workflow | User-flow result | A few critical journeys | Exhaustive permutations |
| Smoke | Newly deployed version | Quick health signal | Release verification | Deep regression coverage |

A test command normally returns exit code `0` when all tests pass and a
non-zero code when any test fails. CI uses that exit code to stop dependent
jobs, while test-report files preserve details for humans and dashboards.

------------------------------------------------------------------------

## 7. Continuous Delivery vs Deployment

``` text
Continuous Delivery:
Commit -> CI -> Staging -> [Approval] -> Production

Continuous Deployment:
Commit -> CI -> Staging checks -> Production automatically
```

Use continuous delivery when regulation, risk, business timing, or
organizational maturity requires human control. Use continuous
deployment when automated confidence is high and frequent releases are
beneficial.

Neither approach requires every commit to be exposed to every user. Feature
flags and progressive delivery can separate *deploying code* from *releasing a
feature*. A manual approval also should evaluate meaningful risk or timing; an
approval that is always clicked without reviewing evidence adds delay without
adding control.

------------------------------------------------------------------------

## 8. Pipeline Anatomy

Terminology varies by platform, but the hierarchy is commonly:

``` text
Pipeline
  Stage: Build
    Job: Compile
  Stage: Test
    Job: Unit tests
    Job: Integration tests
  Stage: Deploy
    Job: Deploy staging
    Job: Deploy production
```

### Trigger

A trigger starts a pipeline: push, PR, tag, schedule, manual action, API
call, or another pipeline.

### Runner/agent

The machine or container executing a job. It may be hosted by the CI
vendor or self-hosted.

### Workspace

Temporary filesystem used during a job. Do not assume another job has
the same files unless the platform explicitly preserves them.

### Artifacts vs cache

**Artifact:** output you want to preserve/promote, e.g. JAR or test
report. **Cache:** reusable data that speeds later jobs, e.g. Maven/npm
dependency cache. Never rely on cache for correctness.

------------------------------------------------------------------------

## 9. Environments

Typical environments include development, test/QA, staging/UAT, and
production. Not every organization needs all of them.

### Environment parity

Keep production-like environments similar in architecture while changing
configuration and scale where appropriate. Docker/IaC help reduce
configuration drift.

### Promotion

``` text
Artifact 42 -> DEV -> QA -> UAT -> PROD
```

A promotion should move the same immutable artifact rather than rebuild
source.

### Ephemeral preview environments

A temporary environment can be created per PR and deleted when the PR
closes. This is useful for UI review and integration testing.

------------------------------------------------------------------------

## 10. Artifacts and Registries

Artifacts are immutable outputs from a pipeline.

Examples:

- `.jar`, `.war`, `.zip`, `.nupkg`, and npm packages
- Docker/OCI images
- Helm charts
- SBOM files
- test reports

Registries/repositories include artifact repositories and container
registries. Version artifacts with immutable identifiers such as commit
SHA plus semantic release version. Avoid relying only on mutable tags
like `latest`.

Publishing stores an artifact under a controlled identity; downloading or
pulling retrieves it for testing or deployment. A useful artifact record
includes the originating commit, build ID, checksum or image digest, creation
time, and test/security evidence. Treat test reports as evidence, not as the
deployable application artifact itself.

------------------------------------------------------------------------

## 11. Containers and Docker

Containers package application runtime dependencies into a portable
image.

### Example Dockerfile

``` dockerfile
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

The first stage installs locked npm dependencies with `npm ci`, runs tests, and
creates the static bundle. The second stage starts from an Nginx runtime and
copies only the build output from the named `build` stage. `docker build`
returns an image; the application-specific `dist` path must match the frontend
tool's actual output. In a real project, pin an intentional base-image version
or digest and make sure the runtime image can run with the required security
settings.

### Multi-stage builds

Build dependencies remain in an intermediate image while production
receives only necessary runtime files, reducing image size and attack
surface.

### Image flow

``` text
Source -> docker build -> Scan -> Registry -> Deploy
```

Use immutable image digests for high-confidence promotion. Run
containers as non-root where practical and avoid embedding secrets in
image layers.

------------------------------------------------------------------------

## 12. Kubernetes in CI/CD

Kubernetes commonly becomes the deployment target, not the CI engine
itself. CI builds/tests an image; CD updates Kubernetes workloads.

### Core objects to understand

Pod, Deployment, Service, ConfigMap, Secret, Ingress/Gateway, Job,
Namespace, StatefulSet, readiness/liveness/startup probes.

### Deployment flow

``` text
Git -> CI -> Image Registry -> Manifest/Helm update -> Kubernetes -> Health checks
```

### Readiness vs liveness

Readiness answers "can this instance receive traffic?" Liveness answers
"should Kubernetes restart it?" Misconfigured probes can cause outages.

### Helm

Helm templates Kubernetes manifests and packages them into charts. Keep
environment-specific values separated from reusable chart logic.

------------------------------------------------------------------------

## 13. Infrastructure as Code

Infrastructure as Code (IaC) defines infrastructure using
version-controlled files instead of manual console clicks. Tools include
Terraform/OpenTofu, cloud-native templates, and configuration-management
systems.

### IaC pipeline

``` text
PR -> Format -> Validate -> Security scan -> Plan -> Review -> Apply
```

`plan` means preview the proposed change without intentionally applying it;
`apply` requests the actual infrastructure mutation. Their exact flags and
outputs depend on the IaC tool. A plan is useful review evidence, but it can
become stale if infrastructure or input variables change before apply. Create
or verify a fresh plan at the controlled apply point.

### Desired benefits

Repeatability, reviewability, disaster recovery, audit history, and
reduced drift. Protect state files because they may contain sensitive
information.

------------------------------------------------------------------------

## 14. Configuration and Secrets

### Configuration

Values such as API base URLs, feature switches, connection endpoints,
and log levels should generally be externalized from code.

### Secrets

Passwords, tokens, certificates, and private keys must not be committed
to Git or printed in logs. Store them in a secret manager or CI
platform's protected secret store.

### Good pattern

``` text
Code -> repository
Non-secret config -> environment/config system
Secrets -> secret manager
```

Use least privilege, rotate credentials, prefer short-lived workload
identity over permanent cloud keys, and restrict production secrets to
protected deployment jobs.

------------------------------------------------------------------------

## 15. Database CI/CD

Database changes need versioned migrations and backward-compatible
deployment thinking.

### Migration example

``` sql
ALTER TABLE customer ADD COLUMN preferred_name VARCHAR(100) NULL;
```

### Expand-contract pattern

For a risky schema change:

1. Add the new schema in a backward-compatible way.
2. Deploy code capable of using both old and new formats.
3. Backfill or migrate existing data in controlled batches.
4. Switch reads and writes after verification.
5. Remove the old schema in a later release.

This prevents a new application version from requiring an irreversible
schema change at exactly the same instant.

### Never assume application rollback means database rollback

Data created after deployment may make a destructive database rollback
unsafe. Prefer roll-forward migrations and tested recovery procedures.

------------------------------------------------------------------------

## 16. Deployment Strategies

### Recreate

Stop old version and start new version. Simple but creates downtime.

### Rolling deployment

Replace instances gradually. Common with Kubernetes. Ensure old and new
versions can coexist temporarily.

### Blue-green

``` text
Users -> Router -> BLUE v1
                  GREEN v2 (validate)
Switch traffic ----^
```

Two production-like environments allow rapid switching. Cost is higher.

### Canary

``` text
95% traffic -> v1
 5% traffic -> v2
```

Observe error rate/latency/business metrics, then gradually increase
traffic.

### A/B testing

Traffic is intentionally split by user cohort to measure product
behavior. It is an experimentation technique, while canary is primarily
a release-risk technique.

### Shadow deployment

Copy production traffic to a new version without returning its responses
to users. Useful for validating behavior/performance, with privacy and
side-effect precautions.

### Strategy comparison

| Strategy | Traffic transition | Extra capacity | Fast reversal | Main caution |
|---|---|---:|---:|---|
| Recreate | Old stops, then new starts | Low | Moderate | Downtime |
| Rolling | Instances change gradually | Small to moderate | Moderate | Old and new versions coexist |
| Blue-green | Router switches environments | High | Fast | Database and external side effects remain |
| Canary | Percentage increases gradually | Moderate | Fast traffic abort | Requires reliable metrics and routing |
| A/B | Cohorts receive variants | Varies | Usually | Measures product behavior, not just safety |
| Shadow | Mirrored requests, responses ignored | High | Stop mirroring | Prevent duplicate writes and protect data |

------------------------------------------------------------------------

## 17. Feature Flags

Feature flags separate **deployment** from **release**. Code can reach
production while the feature remains disabled.

``` text
if feature_enabled('new_checkout'):
    use_new_checkout()
else:
    use_old_checkout()
```

Use flags for gradual rollout, kill switches, experiments, and
incomplete features. Remove stale flags; otherwise they create permanent
complexity. Never use a client-visible flag as the sole authorization
control.

A flag evaluation takes a flag key plus context such as user, tenant, region,
or percentage bucket and returns a variation such as `true`, `false`, or a
configuration value. The application must define a safe default for missing or
unreachable flag configuration. Evaluate security authorization separately;
any client-controlled value can be modified by the client.

Use a short-lived **release flag** to hide code during deployment, an
**operational flag** as a tested kill switch, or an **experiment flag** to keep
cohorts stable while measuring outcomes. Do not use flags to avoid versioning a
breaking database or API change. Record an owner and removal date, test both
important branches, monitor changes, and delete the flag and dead branch after
the rollout is complete.

------------------------------------------------------------------------

## 18. Security / DevSecOps

Security should be part of the pipeline rather than a final manual
phase.

### Common checks

-   SAST: source/static analysis
-   SCA: open-source dependency vulnerabilities/licenses
-   Secret scanning
-   Container image scanning
-   IaC scanning
-   DAST against a running application
-   SBOM generation
-   Artifact signing/provenance

### Supply-chain security

Protect repository branches, CI identities, runners, dependencies,
artifact registries, and deployment credentials. Pin third-party CI
actions/plugins where appropriate and restrict who can modify pipeline
files.

### Scenario

A pull request adds a vulnerable dependency. SCA blocks the merge before
an image is published. This is cheaper than discovering the
vulnerability after production deployment.

------------------------------------------------------------------------

## 19. Observability and Feedback

A deployment is not successful merely because the command returned exit
code 0. Verify system health.

### Three telemetry pillars

-   **Metrics:** numeric trends such as request rate and error rate
-   **Logs:** detailed event records
-   **Traces:** request flow across distributed services

### Post-deployment validation

Check health endpoints, smoke tests, error rates, latency, saturation,
queue depth, and critical business signals.

### SLI, SLO, SLA

SLI is a measured indicator; SLO is the target; SLA is a contractual
commitment. Example: availability SLI = successful requests / valid
requests, SLO = 99.9% monthly.

------------------------------------------------------------------------

## 20. Rollback and Disaster Recovery

### Rollback

Restore a previously known-good application version. Keep prior
immutable artifacts available.

``` text
v42 deployed -> errors rise -> rollback -> v41
```

### Roll-forward

Sometimes fixing forward is safer, especially when database/data changes
make rollback difficult.

### RTO and RPO

-   **RTO:** maximum targeted time to restore service.
-   **RPO:** maximum targeted amount of data loss measured in time.

Backups are useful only if restoration is regularly tested. CI/CD can
automate infrastructure recreation and recovery validation.

------------------------------------------------------------------------

## 21. Approvals and Governance

High-risk environments often require controls such as protected
branches, required reviews, change tickets, segregation of duties,
environment approvals, audit logs, and deployment windows.

Automation and governance are compatible: automate evidence collection
and standard checks while reserving human approval for meaningful risk
decisions. Avoid approval steps that merely rubber-stamp every release.

An approval gate consumes evidence such as the exact artifact digest, change
record, test and security results, migration plan, risk classification, and
deployment window. Its output is an auditable allow/deny decision for that
artifact and environment—not a general permission to deploy whatever is built
later.

Use an approval when a competent reviewer can assess risk that automation
cannot yet decide, or when policy requires separation of duties. Prefer an
automated gate for deterministic rules such as signature validity or a known
vulnerability threshold. Bind approvals to a version and expire or invalidate
them when relevant inputs change; otherwise a late rebuild can bypass the
meaning of the original decision.

------------------------------------------------------------------------

## 22. Popular CI/CD Tools

| Tool | Strong fit | Pipeline definition |
|---|---|---|
| GitHub Actions | Projects hosted on GitHub | Workflow YAML |
| GitLab CI/CD | Integrated GitLab lifecycle | `.gitlab-ci.yml` |
| Jenkins | Highly customizable or self-hosted environments | `Jenkinsfile`/Groovy |
| Azure Pipelines | Microsoft and Azure ecosystems | YAML or classic UI |
| CircleCI | Managed cloud CI | YAML |
| Argo CD | GitOps delivery to Kubernetes | Desired state stored in Git |
| Tekton | Kubernetes-native pipeline building blocks | Kubernetes custom resources |

Tool choice matters less than mastering pipeline concepts.

------------------------------------------------------------------------

## 23. GitHub Actions

Workflow files live under `.github/workflows/`.

``` yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
```

`on` defines the events that create a workflow run. `jobs.test` is one job on
an Ubuntu runner, and each item under `steps` either invokes a reusable action
with `uses` or runs a shell command with `run`. `actions/checkout` places the
repository in the workspace; `actions/setup-node` selects Node.js 24 and
configures npm caching; `npm ci` installs exactly from the lock file.

The job returns success only when every required step succeeds. The resulting
workflow status can become a merge check. If the build output is needed by a
later job, explicitly upload it as an artifact; another job must not assume it
shares this job's filesystem. For production workflows, declare minimal
workflow permissions and govern third-party actions as dependencies.

### Important concepts

Workflows, events, jobs, steps, actions, runners, environments, secrets,
permissions, artifacts, caches, matrices, reusable workflows, and
concurrency.

### Matrix example

``` yaml
strategy:
  matrix:
    node: [22, 24]
```

Each matrix value creates a separate job variation. The job normally references
the current value, for example with `node-version: ${{ matrix.node }}`. Use a
matrix when a library must support multiple runtime versions. Do not add
combinations that provide no compatibility signal because every combination
consumes time and runner capacity.

------------------------------------------------------------------------

## 24. GitLab CI/CD

Basic `.gitlab-ci.yml`:

``` yaml
stages: [test, build, deploy]

test:
  stage: test
  image: node:24
  script:
    - npm ci
    - npm test

build:
  stage: build
  image: node:24
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy_prod:
  stage: deploy
  script:
    - ./deploy.sh
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual
```

Understand runners, variables, artifacts, cache, `rules`, environments,
protected variables, child pipelines, includes, and manual jobs.

Here, stages run in the declared order. The `test` job runs in a Node image;
the `build` job creates `dist/` and publishes it as a job artifact; and
`deploy_prod` is offered as a manual job only for `main`. `script` is the list
of shell commands whose exit codes determine job success. The deployment
script receives artifacts from prior stages by default. In a larger pipeline,
use `needs` or `dependencies` to make the intended artifact relationship
explicit and avoid downloading unrelated outputs. Do not rebuild the release
artifact silently in the deployment job.

------------------------------------------------------------------------

## 25. Jenkins

Jenkins is a flexible automation server often used in self-hosted
enterprise environments.

### Declarative Jenkinsfile

``` groovy
pipeline {
  agent any
  stages {
    stage('Build') {
      steps { sh 'npm ci && npm run build' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Deploy') {
      when { branch 'main' }
      steps { sh './deploy.sh' }
    }
  }
}
```

`pipeline` defines the workflow, `agent any` asks Jenkins for an available
agent, `stages` groups work, and `sh` runs a shell command whose non-zero exit
status fails the step. The `when` condition limits deployment to `main`.
Because `any` does not guarantee the required tools are installed, production
pipelines should select a labeled or ephemeral agent image with a defined
toolchain. Store credentials in Jenkins' credential system and inject only the
credential needed by the specific stage.

### Key concepts

Controller, agents, executors, pipelines, credentials, plugins, shared
libraries, workspaces, build parameters, webhooks.

### Common Jenkins problems

Plugin sprawl, long-lived mutable agents, secrets exposed in shell
output, pipelines defined only in UI, and one controller becoming a
bottleneck. Prefer pipeline-as-code and ephemeral agents where feasible.

------------------------------------------------------------------------

## 26. Azure DevOps

Azure Pipelines supports Microsoft-hosted and self-hosted agents.

``` yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: UseNode@1
  inputs:
    version: '24.x'
- script: npm ci
- script: npm test
- script: npm run build
```

`trigger` starts the pipeline for changes to `main`. `pool.vmImage` chooses a
Microsoft-hosted Ubuntu agent. `UseNode@1` is a task whose `version` input
selects a compatible Node.js 24 release, and each `script` entry runs a shell
command. A failed task or script normally fails the job. Publish the build
directory explicitly when a later stage or release needs it; the sample only
validates that the commands work.

Important concepts include pipelines, stages/jobs/steps, service
connections, variable groups, environments, approvals/checks, artifacts,
templates, and agent pools.

------------------------------------------------------------------------

## 27. Common Stack Scenarios

### Scenario A: Angular + Node.js API

``` text
PR
 |- Angular lint/unit/build
 |- Node lint/unit/integration
 `- Security checks
Merge main
 -> Build Docker images
 -> Push registry
 -> Deploy staging
 -> E2E tests
 -> Approval
 -> Production canary
 -> Monitor
```

### Scenario B: Java Spring Boot

``` bash
./mvnw clean verify
docker build -t registry/app:$GIT_SHA .
docker push registry/app:$GIT_SHA
```

`verify` can run compilation and tests before packaging. Production
deploys the image associated with the tested commit.

`./mvnw` uses the project's Maven Wrapper so CI does not depend on an arbitrary
host Maven version. `clean` removes earlier output and `verify` runs the Maven
lifecycle through verification. `-t` assigns an image name and immutable
commit-derived tag; the final `.` is the Docker build context. `docker push`
uploads that named image and returns a digest that should be recorded for
deployment traceability.

### Scenario C: PHP/Laravel

``` text
composer install --no-interaction --prefer-dist
php artisan test
Static analysis
Package/build image
Deploy
php artisan migrate --force   # only with a safe migration strategy
Smoke test
```

Never blindly run destructive migrations during deployment.

### Scenario D: .NET Web API

``` bash
dotnet restore
dotnet build --configuration Release --no-restore
dotnet test --configuration Release --no-build
dotnet publish -c Release -o publish
```

Publish output can be packaged or placed in a runtime container.

`restore` resolves declared packages. `build --no-restore` compiles without
repeating restore, `test --no-build` tests the compiled Release output, and
`publish -o publish` creates deployable files in `publish/`. These reuse flags
are safe only because the earlier commands succeeded in the same controlled
workspace with the same configuration.

### Scenario E: Legacy IIS application

A mature CI/CD process can still automate legacy deployment:

``` text
Git -> Build -> Tests -> ZIP artifact -> Approval -> IIS deployment
    -> Config transform/secret injection -> App pool/site validation -> Smoke test
```

Take care with file locks, application pools, environment-specific
config, and rollback packages.

### Scenario F: Static frontend

``` text
PR tests -> npm build -> immutable static bundle -> object storage/CDN
          -> cache invalidation/versioned assets -> smoke test
```

------------------------------------------------------------------------

## 28. Monorepos and Microservices

### Monorepo

Multiple applications/libraries share one repository. Use path-based
change detection, dependency graphs, shared caching, and selective
builds to avoid rebuilding everything.

### Microservices

Each service may have an independent pipeline and deployment cadence.
Challenges include API compatibility, shared environments, contract
testing, coordinated database/event changes, and observability.

### Example

If only `services/payment/**` changes, build/test payment plus dependent
libraries rather than twenty unrelated services. Still provide a
periodic full integration pipeline to catch hidden coupling.

------------------------------------------------------------------------

## 29. Pipeline Performance

A slow pipeline encourages developers to batch changes or ignore
feedback. Optimize without removing important confidence.

Techniques:

- dependency caching
- parallel independent jobs
- test splitting or sharding
- incremental or affected-project builds
- smaller container build contexts
- Docker layer caching
- fail-fast ordering
- right-sized runners
- avoiding repeated downloads of the same artifact

Measure stage duration before optimizing. A cache that occasionally
creates incorrect builds is worse than no cache.

------------------------------------------------------------------------

## 30. Troubleshooting

### "Works locally but CI fails"

Check runtime versions, OS differences, case-sensitive filenames,
missing environment variables, timezone/locale, dependency lockfiles,
hidden local files, and test ordering.

### Flaky tests

Do not normalize endless retries. Find shared state, timing assumptions,
external dependency instability, race conditions, random test data, and
cleanup problems. Quarantine temporarily only with ownership and a
repair deadline.

### Deployment succeeds but app fails

Inspect application startup logs, health probes, secret/config
availability, DB connectivity, migrations, DNS, firewall/network policy,
permissions, resource limits, and downstream dependencies.

### Pipeline suddenly slows

Compare queue time vs execution time. Queue time suggests runner
capacity; execution time suggests changed tests/build/dependency
downloads or infrastructure performance.

### Debugging method

``` text
Identify failing stage -> reproduce smallest failing command -> compare environment
-> inspect logs/artifacts -> verify inputs/secrets/dependencies -> fix root cause
```

------------------------------------------------------------------------

## 31. Metrics and DORA

Common delivery metrics include:

- **Deployment frequency:** how often production is deployed.
- **Lead time for changes:** elapsed time for a change to reach production.
- **Change failure rate:** proportion of changes that cause production
  degradation or require remediation.
- **Failed deployment recovery time:** how quickly service is restored after a
  failed change.

Also monitor pipeline success rate, PR feedback time, queue duration,
build duration, flaky-test rate, rollback frequency, and time spent
waiting for approvals.

Metrics should improve the system, not become targets that encourage
gaming.

------------------------------------------------------------------------

## 32. Anti-patterns and Best Practices

### Anti-patterns

-   Manual production file copying
-   Building a different binary per environment
-   Secrets committed to Git
-   `latest` as the only artifact identity
-   One giant pipeline for unrelated systems
-   Tests disabled to make CI green
-   Production-only testing
-   Unreviewed pipeline changes
-   Permanent admin credentials on runners
-   Database changes with no rollback/forward plan
-   No monitoring after deployment
-   "Fixing" flaky tests with unlimited retries

### Best practices

1.  Keep changes small.
2.  Treat pipeline configuration as code.
3.  Build once and promote immutable artifacts.
4.  Make CI fast enough for frequent use.
5.  Automate testing at multiple layers.
6.  Use least-privilege, short-lived credentials.
7.  Keep secrets out of repositories/logs.
8.  Make deployments repeatable and idempotent.
9.  Add automated health validation.
10. Design rollback or roll-forward before release.
11. Prefer backward-compatible DB/API changes.
12. Measure delivery performance and improve bottlenecks.

------------------------------------------------------------------------

## 33. Interview Questions

### Beginner

**What is CI?** Frequent integration plus automated validation of
changes.

**Delivery vs deployment?** Delivery keeps software production-ready but
can require approval; deployment automatically releases every qualifying
change.

**Artifact vs cache?** Artifact is a preserved build output; cache is an
optimization and should be disposable.

**Why pipeline as code?** Version history, code review, reproducibility,
and easier recovery.

### Intermediate

**Why build once and deploy many?** Rebuilding can create different
outputs; promotion preserves the exact tested artifact.

**Blue-green vs canary?** Blue-green switches between two complete
environments; canary gradually exposes a new version to part of traffic.

**How do you handle secrets?** Protected secret manager, least
privilege, no log exposure, rotation, and preferably temporary identity.

**How would you speed a pipeline?** Profile it, parallelize independent
jobs, cache safely, run affected tests, shard large suites, and optimize
images/runners.

### Advanced

**How would you deploy a DB-breaking change with zero downtime?** Use
expand-contract and multiple backward-compatible releases rather than
changing/removing the old schema immediately.

**How do you secure the software supply chain?** Protect
source/branches, minimize CI permissions, scan
dependencies/secrets/images/IaC, isolate runners, generate
provenance/SBOM, sign artifacts, and protect registries/deployment
identities.

**How would you design CI/CD for 100 microservices?** Reusable
templates, service ownership, independent pipelines, affected builds,
contract tests, standardized observability/security, immutable
artifacts, GitOps or controlled CD, and platform-level golden paths.

------------------------------------------------------------------------

## 34. Hands-on Projects

### Project 1 --- Beginner CI

Create a small Node/Python/Java project. On every PR: install
dependencies, lint, unit test, and build. Block merge on failure.

### Project 2 --- Docker pipeline

Build a Docker image after merge, scan it, tag with commit SHA, and push
to a registry.

### Project 3 --- Staging + production

Automatically deploy to staging, run smoke tests, then require approval
for production. Add rollback to the previous image.

### Project 4 --- Kubernetes

Deploy an application with readiness/liveness probes. Implement rolling
update and intentionally deploy a broken version to observe rollback
behavior.

### Project 5 --- IaC

Provision network + compute/container infrastructure from
Terraform/OpenTofu. Run format/validate/plan in PR and apply only after
approval.

### Project 6 --- Full DevSecOps

Add SAST, dependency scanning, secret scanning, image scanning, SBOM
generation, artifact signing, staging DAST, and post-deployment
monitoring.

### Project 7 --- Enterprise simulation

Create DEV -\> QA -\> UAT -\> PROD promotion with immutable artifacts,
approval gates, audit trail, database migrations, feature flags, and
blue-green/canary deployment.

------------------------------------------------------------------------

## 35. Learning Roadmap

### Phase 1 --- Foundations

Learn Linux shell basics, Git, networking basics, HTTP,
process/environment concepts, YAML/JSON, and one programming language.

### Phase 2 --- CI

Build/test a small project in GitHub Actions, GitLab CI, Jenkins, or
Azure Pipelines. Learn triggers, jobs, runners, artifacts, cache,
variables, and secrets.

### Phase 3 --- Packaging

Learn package managers, semantic versioning, Docker, registries,
immutable artifacts, and dependency locking.

### Phase 4 --- CD

Learn environments, approvals, deployment strategies, health checks,
rollback, DB migrations, feature flags, and release management.

### Phase 5 --- Cloud/Kubernetes/IaC

Learn one cloud, Kubernetes fundamentals, Helm, Terraform/OpenTofu, IAM,
networking, and secret management.

### Phase 6 --- Advanced platform engineering

Learn GitOps, reusable pipeline templates, policy-as-code, supply-chain
security, observability, progressive delivery, developer platforms, and
DORA-based improvement.

------------------------------------------------------------------------

## 36. Cheat Sheet

``` text
CI       = Integrate + build/test every change
CD       = Keep changes releasable / optionally auto-deploy
Runner   = Machine executing a CI job
Artifact = Preserved output from build
Cache    = Disposable speed optimization
Registry = Artifact/image storage
SAST     = Static security analysis
SCA      = Dependency/component analysis
DAST     = Test running app externally
SBOM     = Inventory of software components
IaC      = Infrastructure defined as code
GitOps   = Git is desired-state source for operations/deployment
BlueGreen= Switch traffic between old/new environments
Canary   = Gradually expose new version
Rolling  = Replace instances incrementally
RTO      = Target recovery time
RPO      = Target tolerated data-loss window
SLI      = Measured reliability indicator
SLO      = Reliability target
```

### Pipeline design checklist

-   [ ] What triggers it?
-   [ ] What exact commit is being built?
-   [ ] Are dependencies locked?
-   [ ] Are lint/unit/integration tests appropriate?
-   [ ] Are security scans included?
-   [ ] Is the artifact immutable and traceable?
-   [ ] Are secrets protected?
-   [ ] Is the same artifact promoted?
-   [ ] Are DB migrations backward compatible?
-   [ ] Is production approval required?
-   [ ] What deployment strategy is used?
-   [ ] How is health automatically verified?
-   [ ] What triggers rollback/roll-forward?
-   [ ] Are logs/metrics/traces available?
-   [ ] Is pipeline/deployment evidence retained?

------------------------------------------------------------------------

## 37. Glossary

**Agent/Runner:** worker executing pipeline jobs.

**Artifact:** versioned output created by a build.

**Build:** transformation of source into executable/distributable
output.

**Canary:** progressive rollout to a small portion of traffic.

**CI:** automated integration and validation of frequent code changes.

**Continuous Delivery:** automated path to a production-ready release,
normally with production as an explicit decision.

**Continuous Deployment:** automatic production deployment after all
gates pass.

**Deployment:** installation/activation of a software version in an
environment.

**GitOps:** operational model in which Git declares desired system state
and an automated reconciler applies differences.

**Idempotent:** repeated execution produces the intended same final
state.

**Immutable artifact:** artifact that is never changed after creation.

**Pipeline:** automated sequence of delivery stages/jobs.

**Progressive delivery:** controlled release using techniques such as
canaries and feature flags.

**Rollback:** return to a previous version/state.

**Roll-forward:** deploy a corrective new change rather than reverting.

**Webhook:** HTTP event notification commonly used to trigger
automation.

------------------------------------------------------------------------

## Final Mental Model

A mature CI/CD system is not simply a YAML file or Jenkins job. It is a
**software delivery system** designed to move a change safely from
developer to user.

``` text
                         SOFTWARE DELIVERY LOOP

      +------------------------------------------------------+
      |                                                      |
      v                                                      |
   PLAN -> CODE -> REVIEW -> BUILD -> TEST -> SECURE -> PACKAGE
                                                   |
                                                   v
MONITOR <- OPERATE <- PROD <- RELEASE <- STAGING <- ARTIFACT
   |                                                       ^
   +----------------------- FEEDBACK -----------------------+
```

When learning any CI/CD tool, ask:

1.  How does it trigger work?
2.  Where does work execute?
3.  How are dependencies and caches handled?
4.  How are artifacts produced and promoted?
5.  How are tests/security gates enforced?
6.  How are credentials protected?
7.  How is deployment performed safely?
8.  How do we verify production health?
9.  How do we recover from failure?
10. How do we measure and improve the entire flow?

If you can answer those questions for GitHub Actions, GitLab, Jenkins,
Azure DevOps, Kubernetes, or another platform, you understand the
concepts rather than merely memorizing syntax.

------------------------------------------------------------------------

## Part II — Advanced Production CI/CD Engineering

The first part explains the complete CI/CD foundation. This second part goes deeper into the problems that appear after a team moves beyond a basic `build -> test -> deploy` pipeline.

### Part II Table of Contents

38. [Pipeline as Code in Depth](#38-pipeline-as-code-in-depth)
39. [Pipeline Reuse, Templates, and Standardization](#39-pipeline-reuse-templates-and-standardization)
40. [Pipeline DAGs, Fan-Out, Fan-In, and Orchestration](#40-pipeline-dags-fan-out-fan-in-and-orchestration)
41. [Artifact Promotion and Release Promotion](#41-artifact-promotion-and-release-promotion)
42. [Release Strategies, Release Trains, and Hotfixes](#42-release-strategies-release-trains-and-hotfixes)
43. [Ephemeral and Preview Environments](#43-ephemeral-and-preview-environments)
44. [Test Data and Test Environment Management](#44-test-data-and-test-environment-management)
45. [Database Delivery in Depth](#45-database-delivery-in-depth)
46. [Backward and Forward Compatibility](#46-backward-and-forward-compatibility)
47. [Progressive Delivery and Automated Canary Analysis](#47-progressive-delivery-and-automated-canary-analysis)
48. [Kubernetes Delivery in Production](#48-kubernetes-delivery-in-production)
49. [GitOps in Depth](#49-gitops-in-depth)
50. [Infrastructure Delivery in Depth](#50-infrastructure-delivery-in-depth)
51. [Identity, Secrets, Certificates, and Key Rotation](#51-identity-secrets-certificates-and-key-rotation)
52. [Software Supply-Chain Security in Depth](#52-software-supply-chain-security-in-depth)
53. [Runner and Agent Architecture](#53-runner-and-agent-architecture)
54. [Artifact Lifecycle and Retention](#54-artifact-lifecycle-and-retention)
55. [Observability-Driven Delivery](#55-observability-driven-delivery)
56. [Deployment Failure, Incident Response, and Recovery](#56-deployment-failure-incident-response-and-recovery)
57. [Microservices Delivery in Depth](#57-microservices-delivery-in-depth)
58. [Monorepo Delivery in Depth](#58-monorepo-delivery-in-depth)
59. [CI/CD for Legacy Applications](#59-cicd-for-legacy-applications)
60. [Cloud-Native Deployment Patterns](#60-cloud-native-deployment-patterns)
61. [Platform Engineering and Golden Paths](#61-platform-engineering-and-golden-paths)
62. [Pipeline Cost and Efficiency Engineering](#62-pipeline-cost-and-efficiency-engineering)
63. [Enterprise Governance and Change Control](#63-enterprise-governance-and-change-control)
64. [Detailed Real-World Delivery Scenarios](#64-detailed-real-world-delivery-scenarios)
65. [Complete Capstone Architecture](#65-complete-capstone-architecture)
66. [Advanced Interview Questions](#66-advanced-interview-questions)
67. [Production Readiness Checklist](#67-production-readiness-checklist)

------------------------------------------------------------------------

## 38. Pipeline as Code in Depth

**Pipeline as Code** means the delivery process is stored in version control rather than being configured only through a web UI.

Examples include:

```text
.github/workflows/ci.yml
.gitlab-ci.yml
Jenkinsfile
azure-pipelines.yml
```

### Why this matters

If pipeline logic exists only inside a UI, it is difficult to answer:

- Who changed the deployment process?
- Why did they change it?
- What did the pipeline look like three months ago?
- Can we review a pipeline change before it reaches production?
- Can a new environment be recreated from source control?

Pipeline as Code gives you:

- history
- review
- branching
- rollback
- reproducibility
- collaboration
- auditability

### Treat pipeline code like application code

A common mistake is to apply engineering discipline to the application but not to the pipeline.

Bad approach:

```text
Developer carefully reviews Java code.
Developer casually edits production pipeline YAML directly.
```

Better:

```text
Pipeline change
   ↓
Pull Request
   ↓
Review
   ↓
Validation
   ↓
Merge
```

### Declarative vs scripted pipeline styles

A **declarative pipeline** describes the desired workflow in a structured format.

Example concept:

```yaml
jobs:
  test:
    steps:
      - run: npm ci
      - run: npm test
```

A **scripted pipeline** uses programming logic to build the workflow dynamically.

Declarative pipelines are often easier to:

- understand
- validate
- standardize
- secure

Scripted pipelines are useful when workflows require complex dynamic behavior.

### What belongs in pipeline YAML?

Good candidates:

- stages
- job dependencies
- environment selection
- permissions
- artifact publication
- deployment gates
- reusable workflow calls

Complex business logic often belongs in versioned scripts instead of hundreds of lines of inline YAML.

Example:

```yaml
- name: Build application
  run: ./scripts/build.sh
```

rather than duplicating 30 shell commands in several workflows.

### Pipeline code review questions

When reviewing a pipeline change, ask:

1. Does it increase permissions?
2. Does it expose secrets?
3. Does it change production behavior?
4. Does it change artifact contents?
5. Does it introduce an unpinned third-party action/plugin?
6. Can failure leave the environment in a partial state?
7. Is rollback still possible?
8. Does the change increase pipeline time significantly?
9. Does it create hidden dependencies?
10. Can the logic be reused?

------------------------------------------------------------------------

## 39. Pipeline Reuse, Templates, and Standardization

As organizations grow, teams often create hundreds of pipelines.

Without standardization, you may see:

```text
Team A -> secure pipeline
Team B -> outdated pipeline
Team C -> hardcoded credentials
Team D -> no tests
Team E -> custom deployment script nobody understands
```

This is difficult to maintain.

### Reusable pipeline model

A platform team can provide reusable components:

```text
Application Pipeline
       ↓
Reusable Build Template
       ↓
Reusable Security Template
       ↓
Reusable Deployment Template
```

Application teams provide only application-specific values.

Example concept:

```yaml
jobs:
  service:
    uses: company/platform-workflows/.github/workflows/node-service.yml@v2
    with:
      node-version: 24
      service-name: employee-api
```

In GitHub Actions syntax, a reusable workflow is called at the job level and
the `@v2` suffix selects the workflow version. Other CI products express the
same idea with includes, components, templates, or shared libraries. Pin and
review the reusable component like any other dependency.

### Template layers

A useful model is:

```text
Organization Standards
        ↓
Language Template
        ↓
Application Configuration
```

Example:

```text
Organization policy
  - secret scanning
  - SAST
  - artifact metadata
  - audit logging

Node template
  - npm ci
  - lint
  - test
  - npm build

Application
  - name
  - deploy target
  - health endpoint
```

### Benefits

- consistent security
- easier upgrades
- faster onboarding
- lower duplication
- central improvements

### Danger of over-standardization

A template should create a **paved road**, not an impossible roadblock.

If teams cannot handle valid exceptions, they may bypass the platform entirely.

A good template system provides:

- strong defaults
- documented extension points
- controlled exceptions
- versioning

### Template versioning

Do not unexpectedly break every project by modifying a shared template.

Safer model:

```text
pipeline-template:v1
pipeline-template:v2
```

Teams migrate in a controlled manner.

------------------------------------------------------------------------

## 40. Pipeline DAGs, Fan-Out, Fan-In, and Orchestration

A simple pipeline is sequential:

```text
Build -> Test -> Scan -> Deploy
```

A large pipeline should often use a dependency graph instead.

### Fan-out

One completed job starts multiple independent jobs.

```text
                ┌-> Unit Tests
Build Artifact -+-> SAST
                ├-> License Scan
                └-> Container Scan
```

### Fan-in

Several jobs must complete before the next job starts.

```text
Unit Tests -------┐
SAST -------------+-> Release Gate -> Deploy
Container Scan ---┘
```

### Why DAG design matters

Suppose jobs take:

```text
Build             5 minutes
Unit Test        10 minutes
SAST              8 minutes
Dependency Scan   7 minutes
```

Sequential execution:

```text
5 + 10 + 8 + 7 = 30 minutes
```

Parallel execution after build:

```text
5 + max(10,8,7) = 15 minutes
```

The logical result is similar, but feedback is twice as fast.

### Do not parallelize dependent work incorrectly

If integration tests require a Docker image, the image must exist first.

Correct:

```text
Build Image
    ↓
Integration Test
```

Incorrect:

```text
Build Image ---- parallel ---- Integration Test
```

when the test depends on that exact image.

### Cross-pipeline orchestration

Large systems may have:

```text
Frontend Pipeline
API Pipeline
Database Pipeline
Infrastructure Pipeline
```

Avoid creating a fragile chain where every service directly triggers every other service.

Prefer clear ownership and event contracts.

Example release orchestration:

```text
Service pipelines publish versioned artifacts independently.
Release manifest selects approved versions.
Deployment pipeline deploys the manifest.
```

------------------------------------------------------------------------

## 41. Artifact Promotion and Release Promotion

One of the most important production CI/CD ideas is **promotion**.

### Build-once model

```text
Commit a83f9c1
     ↓
Build
     ↓
employee-api:2.7.4
     ↓
Development
     ↓
QA
     ↓
Staging
     ↓
Production
```

The same artifact moves through all environments.

### Why rebuilding is dangerous

Bad process:

```text
QA build        -> npm install -> build
Production build -> npm install -> build again
```

Between builds:

- a dependency may change
- base image may change
- package registry may change
- build tool may change

Now production is not exactly what QA tested.

### Promotion metadata

A promoted artifact should have metadata such as:

```text
Version:        2.7.4
Git Commit:     a83f9c1
Build ID:       9814
Created:        2026-08-13
Image Digest:   sha256:...
SBOM:           attached
Test Result:    passed
Security Gate:  passed
```

### Environment promotion example

```text
Artifact 2.7.4
   ↓
Deploy QA
   ↓
Automated tests pass
   ↓
Promote release record
   ↓
Deploy UAT
   ↓
Business approval
   ↓
Promote same artifact
   ↓
Production
```

### Release manifest

For multiple services, production can use a release manifest:

```yaml
release: 2026.08.13.1
services:
  auth: 4.1.2
  employee-api: 2.7.4
  attendance-api: 5.3.1
  frontend: 8.9.0
```

This makes system-level rollback and auditing easier.

------------------------------------------------------------------------

## 42. Release Strategies, Release Trains, and Hotfixes

Not every organization deploys continuously.

### On-demand release

A validated change can be released whenever needed.

Good for:

- SaaS products
- high automation
- independent teams

### Scheduled release

Example:

```text
Every Thursday 8 PM
```

Useful when:

- business coordination is required
- change windows exist
- users require notice

### Release train

Changes that are ready join a regular release train.

Example:

```text
Release Train 24
  - Feature A
  - Bugfix B
  - API C
```

If Feature D is not ready, it waits for the next train instead of delaying all other changes.

### Hotfix lane

Critical fixes should have a documented expedited path.

Example:

```text
Production Incident
      ↓
Hotfix Branch
      ↓
Focused CI
      ↓
Mandatory Review
      ↓
Security Checks
      ↓
Emergency Approval
      ↓
Deploy
      ↓
Verify
      ↓
Merge history back
```

A hotfix process should be faster, not uncontrolled.

### Freeze periods

Some organizations use change freezes during:

- financial closing
- major sales periods
- regulatory events
- migration windows

Emergency changes should still have a defined exception path.


------------------------------------------------------------------------

## 43. Ephemeral and Preview Environments

A preview environment is created temporarily for a branch or pull request.

Example:

```text
PR #142
   ↓
Build application
   ↓
Create temporary environment
   ↓
URL: pr-142.example.internal
   ↓
Test / Review
   ↓
PR merged or closed
   ↓
Destroy environment
```

### Why use preview environments?

They allow:

- product owners to review changes early
- QA to test isolated branches
- developers to validate infrastructure changes
- teams to avoid sharing one unstable QA environment

### Possible architecture

```text
Pull Request
   ↓
CI
   ↓
Docker image tagged pr-142
   ↓
Temporary Kubernetes namespace
   ↓
Temporary hostname
```

Example namespace:

```text
pr-142
```

### Challenges

Preview environments can become expensive.

Control cost with:

- TTL / automatic expiration
- smaller resources
- shared backing services where safe
- automatic cleanup
- quotas

### Data safety

Never casually clone sensitive production data into a temporary environment.

Use:

- synthetic data
- masked data
- anonymized data
- restricted access

### Cleanup is part of the feature

A preview environment implementation is incomplete if environments are created automatically but destroyed manually.

Good lifecycle:

```text
Create -> Use -> Expire -> Destroy -> Verify cleanup
```

------------------------------------------------------------------------

## 44. Test Data and Test Environment Management

Automated testing is only reliable when test data is predictable.

### Problems with shared test databases

Suppose two pipelines use the same QA database.

Pipeline A creates:

```text
Employee ID 1001
```

Pipeline B also expects to create:

```text
Employee ID 1001
```

Tests interfere with each other.

### Better approaches

#### Isolated database per test run

```text
Pipeline 101 -> DB test_101
Pipeline 102 -> DB test_102
```

#### Transaction rollback

Tests create data inside a transaction and roll it back afterward.

#### Test containers

Create disposable databases for integration tests.

Example concept:

```text
Start PostgreSQL container
   ↓
Run migrations
   ↓
Seed test data
   ↓
Run integration tests
   ↓
Destroy container
```

### Seed data

Seed data should be:

- version controlled
- deterministic
- understandable
- minimal

### Synthetic vs production-like data

**Synthetic data** is safest.

Production-like datasets are useful for performance and migration testing, but sensitive data must be appropriately protected and transformed.

### Time-dependent tests

A common source of flaky tests is current time.

Bad test logic:

```text
Assume today is Monday.
```

Better:

```text
Inject or freeze the clock.
```

Also consider:

- timezone
- daylight-saving changes
- locale
- date formatting

------------------------------------------------------------------------

## 45. Database Delivery in Depth

Database changes require different thinking from stateless application releases.

You can easily replace a web container. You cannot casually replace important production data.

### Types of database changes

#### Additive change

Example:

```sql
ALTER TABLE invoice
ADD payment_reference VARCHAR(100) NULL;
```

Usually safer because old code can ignore the new column.

#### Destructive change

Example:

```sql
ALTER TABLE invoice
DROP COLUMN old_reference;
```

Riskier because old code may still use it.

#### Data transformation

Example:

```sql
UPDATE invoice
SET status = 'PAID'
WHERE payment_date IS NOT NULL;
```

May be expensive on large tables.

#### Constraint change

Example:

```sql
ALTER TABLE employee
ALTER COLUMN email VARCHAR(255) NOT NULL;
```

Can fail if existing data violates the rule.

### Migration pipeline

A mature migration process can be:

```text
Migration source code
      ↓
Static validation
      ↓
Run against empty database
      ↓
Run against upgraded old schema
      ↓
Integration tests
      ↓
Performance/lock analysis for risky changes
      ↓
Approval
      ↓
Production migration
      ↓
Verification
```

### Schema version table

Migration frameworks commonly track applied versions.

Example:

```text
001_create_employee.sql
002_add_department.sql
003_add_employee_index.sql
```

Production records that 001-003 were applied.

### Never edit an already-applied migration casually

If migration `003` already ran in environments, modifying it creates inconsistent history.

Prefer:

```text
004_fix_employee_index.sql
```

### Online migration concerns

For large databases consider:

- table locks
- transaction log growth
- replication lag
- index build time
- storage usage
- backup window
- query plan changes

### Backfill pattern

Suppose 50 million rows need a new derived value.

Avoid one giant blocking transaction when possible.

Use controlled batches:

```text
Batch 1 -> rows 1-10,000
Batch 2 -> rows 10,001-20,000
...
```

Monitor:

- database CPU
- lock waits
- replication
- application latency

### Database rollback reality

An application rollback might take seconds.

A database rollback may require:

- restore
- reverse migration
- data reconstruction
- replay

Design schema changes so application versions remain compatible whenever possible.

------------------------------------------------------------------------

## 46. Backward and Forward Compatibility

Compatibility is essential for zero-downtime deployment.

During a rolling deployment, both versions may run at once:

```text
Pod 1 -> v1
Pod 2 -> v1
Pod 3 -> v2
Pod 4 -> v2
```

Therefore v1 and v2 must coexist safely.

### API compatibility

Suppose old response is:

```json
{
  "name": "Aisha"
}
```

New version changes it to:

```json
{
  "fullName": "Aisha"
}
```

Old clients may break.

Safer transition:

```json
{
  "name": "Aisha",
  "fullName": "Aisha"
}
```

Remove `name` only after consumers migrate.

### Event compatibility

Message-driven systems need the same discipline.

Old event:

```json
{
  "employeeId": 101
}
```

New producer suddenly emits:

```json
{
  "employee": {
    "id": 101
  }
}
```

Old consumers may fail.

Prefer additive event evolution where practical.

### Database compatibility matrix

Think explicitly:

| Application | Old Schema | Transitional Schema | New Schema |
|---|---:|---:|---:|
| v1 | Yes | Yes | Maybe No |
| v2 | Maybe No | Yes | Yes |

The transitional schema is what enables safe rolling deployment.

### Expand-and-contract example

Need to rename `mobile` to `phone_number`.

#### Release 1

Add new column.

```sql
ALTER TABLE customer ADD phone_number VARCHAR(30);
```

Application writes both columns.

#### Backfill

Copy old values.

#### Release 2

Application reads `phone_number`.

#### Release 3

Stop writing `mobile`.

#### Later cleanup

Drop `mobile`.

A logical rename becomes several safe production changes.

------------------------------------------------------------------------

## 47. Progressive Delivery and Automated Canary Analysis

Progressive delivery combines controlled traffic rollout with automated observation.

### Basic canary

```text
v1 = 95%
v2 = 5%
```

After a period:

```text
v1 = 75%
v2 = 25%
```

Then:

```text
v1 = 0%
v2 = 100%
```

### Manual canary analysis

An engineer watches dashboards and decides whether to continue.

### Automated canary analysis

A controller compares the canary with a baseline.

Metrics may include:

```text
5xx error rate
p95 latency
CPU
memory
request success rate
queue lag
business conversion rate
```

Example policy:

```text
Continue if:
  error_rate < 1%
  p95_latency < 500ms

Abort if:
  error_rate > 3%
  OR p95_latency > 1000ms
```

### Baseline comparison

Absolute thresholds are useful, but comparisons can be even stronger.

Example:

```text
Stable v1 error rate = 0.2%
Canary v2 error rate = 2.1%
```

Even if a generic threshold says 3%, v2 is clearly much worse than baseline.

### Business metric example

A deployment does not create server errors, but successful invoice submissions fall sharply.

Infrastructure checks may pass while the release is functionally broken.

Progressive delivery can include application/business metrics.

### Feature flags + progressive delivery

Deployment rollout:

```text
100% infrastructure runs v2
```

Feature rollout:

```text
new feature enabled for 5% users
```

These are different controls and can be combined.

------------------------------------------------------------------------

## 48. Kubernetes Delivery in Production

A simple `kubectl apply` is only the beginning.

### Desired production flow

```text
Immutable Image
     ↓
Deployment Manifest / Helm / GitOps
     ↓
Kubernetes rollout
     ↓
Readiness validation
     ↓
Traffic begins
     ↓
Observe
     ↓
Complete or abort
```

### Resource requests and limits

Without requests, scheduling becomes less predictable.

Example:

```yaml
resources:
  requests:
    cpu: 250m
    memory: 256Mi
  limits:
    cpu: "1"
    memory: 512Mi
```

### Readiness probe

Answers:

> Should this pod receive traffic?

Example:

```yaml
readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
```

### Liveness probe

Answers:

> Is the process stuck badly enough that Kubernetes should restart it?

### Startup probe

Useful for applications that legitimately take a long time to start.

Without it, an aggressive liveness probe can repeatedly kill a slow-starting application.

### PodDisruptionBudget

Helps preserve availability during voluntary disruptions such as node maintenance.

### RollingUpdate parameters

Example:

```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 0
    maxSurge: 1
```

Meaning:

- do not intentionally reduce available pods below desired count
- create one extra pod during rollout

### Deployment timeout

Never allow a broken rollout to wait forever.

Example process:

```bash
kubectl rollout status deployment/employee-api --timeout=5m
```

### Rollback

```bash
kubectl rollout undo deployment/employee-api
```

But remember: application rollback alone may not reverse database or external side effects.

### Kubernetes anti-pattern: mutable `latest`

Bad:

```yaml
image: employee-api:latest
```

Better:

```yaml
image: employee-api:2.8.4
```

Even better for exact identity:

```text
image digest
```

------------------------------------------------------------------------

## 49. GitOps in Depth

GitOps separates build automation from runtime reconciliation.

### Application repository

Contains:

```text
source code
unit tests
Dockerfile
```

CI produces:

```text
employee-api:2.8.4
```

### Environment repository

Contains desired deployment state:

```yaml
image:
  repository: registry.example.com/employee-api
  tag: 2.8.4
```

### Controller

A GitOps controller watches the environment repository.

```text
Git says 2.8.4
Cluster runs 2.8.3
       ↓
Controller reconciles
       ↓
Cluster runs 2.8.4
```

### Why this is different from CI pushing directly

Push model:

```text
CI runner has cluster credentials
CI -> kubectl -> cluster
```

Pull/reconcile model:

```text
CI updates Git
Controller inside/near cluster pulls desired state
```

This can reduce the amount of direct cluster credential exposure to CI.

### Drift

Suppose an administrator manually changes replicas from 3 to 7.

Git still says:

```yaml
replicas: 3
```

The GitOps system can:

- report drift
- optionally reconcile back to 3

### GitOps rollback

Rollback can often be a Git revert:

```text
2.8.4 commit
   ↓ revert
2.8.3 desired state restored
```

The controller reconciles to the older version.

### GitOps does not remove CI

You still need CI for:

- tests
- builds
- scans
- artifact creation

GitOps mainly changes the **deployment control model**.


------------------------------------------------------------------------

## 50. Infrastructure Delivery in Depth

Infrastructure delivery should have the same engineering controls as application delivery.

### Typical Terraform workflow

```text
Pull Request
   ↓
terraform fmt -check
   ↓
terraform validate
   ↓
IaC security scan
   ↓
terraform plan
   ↓
Review plan
   ↓
Merge
   ↓
Apply with controlled identity
   ↓
Post-change verification
```

### Plan is a change preview

A plan may show:

```text
+ create 2 resources
~ modify 1 resource
- destroy 0 resources
```

A reviewer should look for unexpected destruction or replacement.

### State

Terraform-style systems track current managed infrastructure state.

Team environments should normally use remote state with:

- access control
- encryption
- backups/versioning
- locking where supported

### Why state locking matters

Without locking:

```text
Pipeline A reads state
Pipeline B reads same state
Pipeline A writes state
Pipeline B writes stale assumptions
```

Concurrent infrastructure mutation can be dangerous.

### Separate plan and apply carefully

A production flow may use:

```text
PR -> plan
Merge -> fresh plan -> approval -> apply
```

Why a fresh plan?

Infrastructure may have changed since the PR plan was generated.

### Drift detection

Actual cloud infrastructure can differ from code because of:

- emergency manual change
- unmanaged resource
- console edits
- external automation

Scheduled drift checks help detect this.

### Infrastructure modules

Reusable modules can standardize:

```text
network
application service
Kubernetes cluster
database
logging
```

Like CI templates, modules should be versioned.

------------------------------------------------------------------------

## 51. Identity, Secrets, Certificates, and Key Rotation

CI/CD security is not only about storing passwords safely. It is about controlling **identity** throughout the pipeline.

### Long-lived credential problem

Bad architecture:

```text
CI secret:
AWS_ACCESS_KEY_ID = permanent key
AWS_SECRET_ACCESS_KEY = permanent secret
```

If stolen, the credential may remain useful for months.

### Short-lived identity

Prefer, when supported:

```text
CI workload identity
    ↓
Identity federation / OIDC
    ↓
Temporary cloud credential
    ↓
Expires automatically
```

Benefits:

- no permanent cloud secret in CI
- automatic expiration
- clearer identity mapping
- easier rotation

### Least privilege

Build jobs usually do not need production deployment rights.

Separate identities:

```text
CI Build Identity
  - read repository
  - push artifact

Staging Deploy Identity
  - deploy staging only

Production Deploy Identity
  - production rights only
```

### Environment-scoped secrets

Production secrets should be available only to production deployment jobs.

A pull-request job from untrusted code should never automatically receive production credentials.

### Certificate lifecycle

Certificates expire.

Automate or monitor:

- issuance
- renewal
- deployment
- revocation
- expiration alerts

### Secret rotation scenario

Database password rotation:

```text
1. Create new credential
2. Make application able to use new credential
3. Deploy/update secret
4. Verify traffic
5. Disable old credential
6. Remove old credential
```

If possible, use overlapping validity to reduce outage risk.

### Never print secrets

Be careful with:

```bash
set -x
```

or debugging commands that echo environment variables.

Logs are often retained longer and seen by more people than runtime secret stores.

------------------------------------------------------------------------

## 52. Software Supply-Chain Security in Depth

The pipeline itself is part of your software supply chain.

A secure source repository does not help if the build process can be silently modified.

### Supply-chain stages

```text
Source
 ↓
Dependencies
 ↓
Build Environment
 ↓
Build Process
 ↓
Artifact
 ↓
Registry
 ↓
Deployment
```

Each stage can be attacked.

### Dependency pinning

Loose dependency:

```json
{
  "some-package": "*"
}
```

creates unpredictable builds.

Use lock files and controlled upgrades.

### Pin CI actions/plugins

Third-party workflow code executes inside your pipeline.

Treat it like a dependency.

Questions:

- Who maintains it?
- What permissions does it receive?
- Is the version pinned?
- What happens if its upstream repository is compromised?

### Trusted base images

Instead of using arbitrary public images, mature organizations may maintain approved base images.

Example:

```text
company/node-runtime:22-2026.08
```

These can be:

- patched
- scanned
- hardened
- centrally maintained

### SBOM

An SBOM may list:

```text
Application: employee-api 2.8.4
Node.js: 22.x
express: x.y.z
jsonwebtoken: a.b.c
OS package: openssl ...
```

If a new vulnerability appears later, the SBOM helps identify affected artifacts.

### Artifact signing

Concept:

```text
Build Artifact
    ↓
Cryptographic Signature
    ↓
Registry
```

Deployment policy can require a trusted signature before execution.

### Provenance

Provenance answers questions such as:

```text
Which repository produced this image?
Which commit?
Which builder?
Which workflow?
Was the build process trusted?
```

### Policy as code

Example rules:

```text
Reject deployment if:
- image is unsigned
- critical vulnerability exists
- image came from unapproved registry
- container runs privileged
```

Automated policy turns security requirements into consistent gates.

------------------------------------------------------------------------

## 53. Runner and Agent Architecture

The runner executes potentially powerful code.

That makes runner design a security and reliability concern.

### Hosted runners

Provider creates a clean environment for jobs.

Benefits:

- low maintenance
- generally ephemeral
- easy scaling

Limitations:

- less network control
- custom software limitations
- cost at scale

### Self-hosted runners

Your organization manages the runner.

Useful for:

- private network access
- on-premises deployments
- special tools
- GPUs
- compliance

### Persistent runner risk

Job A can leave behind:

```text
files
credentials
modified tools
malware
cache contamination
```

Then Job B runs on the same machine.

### Ephemeral runner model

```text
Queue receives job
      ↓
Create fresh VM/container/pod
      ↓
Run exactly one job
      ↓
Upload results
      ↓
Destroy runner
```

This gives stronger isolation.

### Runner pools

Separate trust levels:

```text
PR Runner Pool
Build Runner Pool
Internal Deployment Runner Pool
Production Deployment Runner Pool
```

Do not let arbitrary pull-request code execute on a runner with direct production credentials.

### Runner sizing

Different workloads need different resources.

Examples:

```text
Lint -> small runner
Java build -> medium runner
Android build -> larger runner
Container build -> CPU + disk intensive
ML build -> GPU runner
```

### Disk cleanup

Container builds often fill disks with:

- old images
- layers
- caches
- workspaces

Implement automated cleanup and capacity monitoring.

------------------------------------------------------------------------

## 54. Artifact Lifecycle and Retention

Artifact storage can grow rapidly.

Suppose:

```text
500 builds/day
250 MB each
```

That is:

```text
125 GB/day
```

before replication or multiple artifact types.

### Artifact categories

#### Temporary CI artifact

Useful only between pipeline jobs.

Retention may be short.

#### Release candidate

Needs longer retention for testing and audit.

#### Production artifact

May need to be retained according to rollback, compliance, or support requirements.

### Example retention policy

```text
PR artifacts        -> 7 days
main snapshots      -> 30 days
release candidates  -> 90 days
production releases -> 1 year or policy-defined
```

Actual requirements depend on organization and regulation.

### Never delete the only rollback artifact too early

If production runs version `5.2.1`, keep the previous known-good version available according to your recovery policy.

### Artifact cleanup should be automated

Use retention rules rather than manual registry cleanup.

### Metadata retention

Even if large binary artifacts expire, teams may retain smaller records such as:

- commit
- checksum
- test result
- SBOM
- deployment record

where policy requires it.

------------------------------------------------------------------------

## 55. Observability-Driven Delivery

A pipeline should be connected to runtime observability.

### Deployment markers

When deploying version 4.6.0, record an event in monitoring:

```text
14:05 -> employee-api 4.6.0 deployed
```

Then a graph shows:

```text
Error Rate
   ^
   |            /\
   |           /  \
   |__________/    \
              ^ deployment 4.6.0
```

This makes correlation easier.

### Technical metrics

Monitor:

- error rate
- request latency
- saturation
- CPU
- memory
- pod restarts
- database connections
- queue lag

### Business metrics

Examples:

- invoices submitted
- payments completed
- users logging in
- orders created
- documents processed

### Synthetic tests

A synthetic monitor can repeatedly perform a critical user flow.

Example:

```text
Login
 ↓
Search employee
 ↓
Open attendance page
```

Run before and after deployment.

### Release health window

A pipeline may keep deployment under observation for a defined period before marking it fully successful.

Example:

```text
Deploy 10%
Observe 10 minutes
Promote 50%
Observe 10 minutes
Promote 100%
```

### Alert quality

Do not create alerts for every minor fluctuation.

Good alerts should be:

- actionable
- tied to user impact or real risk
- owned
- documented

------------------------------------------------------------------------

## 56. Deployment Failure, Incident Response, and Recovery

A mature delivery system expects failure.

The goal is not:

> Never fail.

The goal is:

> Detect failure quickly, reduce blast radius, and recover safely.

### Failure categories

#### Build failure

No production impact yet.

#### Deployment mechanism failure

Example:

```text
registry unavailable
cluster API timeout
```

#### Application startup failure

New version cannot start.

#### Runtime regression

Application starts but behaves incorrectly.

#### Data corruption

Highest risk category and may require specialized recovery.

### Incident deployment decision tree

```text
New deployment unhealthy?
        |
        +-- Can previous version run with current DB/schema?
        |          |
        |          +-- Yes -> rollback may be safe
        |          |
        |          +-- No -> roll-forward may be safer
        |
        +-- Is traffic shifting available?
                   |
                   +-- Yes -> stop canary / return traffic
```

### Kill switch

Feature flags can provide an operational kill switch.

Example:

```text
New invoice validation causes errors.
Disable feature flag immediately.
Application stays on same deployed version.
```

### Recovery runbook

Document:

```text
Symptoms
Owner
Rollback command/process
Database considerations
Traffic switch
Verification steps
Escalation path
```

### Practice recovery

A rollback procedure that has never been tested is only a theory.

Include recovery in exercises or non-production drills.

------------------------------------------------------------------------

## 57. Microservices Delivery in Depth

Microservices increase deployment independence but also create distributed-system complexity.

### Independent artifact ownership

Example:

```text
auth-service:4.2.0
billing-service:8.1.3
notification-service:2.9.1
```

Do not force all services to share one application version unless there is a strong reason.

### Consumer-driven contract testing

Suppose:

```text
Frontend -> API Gateway -> Employee Service
```

or:

```text
Order Service -> Payment Service
```

A consumer can define expectations:

```text
GET /payments/123
must return:
{
  "id": 123,
  "status": "PAID"
}
```

The provider pipeline verifies it still honors the contract.

### Service dependency problem

Bad test environment:

```text
Service A test depends on unstable shared Service B test instance.
```

Failures become hard to diagnose.

Options:

- mocks for narrow unit tests
- service virtualization
- disposable environments
- contract tests
- limited integrated system tests

### Database ownership

Ideally each service owns its schema/data boundaries.

Shared database tables create hidden deployment coupling.

### Event-driven services

Test:

- event schema compatibility
- duplicate handling
- idempotency
- retry behavior
- dead-letter queues
- ordering assumptions

### Idempotent consumer

If a message is delivered twice, processing should not create duplicate business effects where semantics require exactly-once-like behavior.

------------------------------------------------------------------------

## 58. Monorepo Delivery in Depth

A large monorepo may contain hundreds of packages.

A naive pipeline rebuilds everything for every commit.

### Dependency graph

Example:

```text
shared-ui
  ↑
frontend-a
frontend-b

shared-lib
  ↑
auth-service
billing-service
```

If `shared-ui` changes, both frontends may be affected.

If only `billing-service/docs.md` changes, perhaps nothing needs to build.

### Affected graph

Pipeline should calculate:

```text
Changed files
     ↓
Affected projects
     ↓
Affected dependents
     ↓
Required jobs only
```

### Remote caching

If another pipeline already built the exact same task inputs, reuse the result when the build system supports trustworthy deterministic caching.

### Monorepo release models

#### Independent versions

```text
frontend-a 2.4.1
frontend-b 7.1.0
```

#### Lockstep version

All packages share one release number.

Choose based on coupling and release model.

### Ownership

Use directory-based ownership to route reviews.

Example:

```text
/apps/payments/** -> Payments Team
/apps/hr/**       -> HR Platform Team
```

------------------------------------------------------------------------

## 59. CI/CD for Legacy Applications

CI/CD is not limited to Kubernetes.

A legacy application on IIS, Apache, or a VM can still gain significant automation.

### Legacy maturity journey

#### Stage 0 — Completely manual

```text
Developer ZIPs files
Email/Share copy
Admin manually copies to server
```

#### Stage 1 — Automated build

```text
Git -> build artifact
```

#### Stage 2 — Automated test deployment

```text
Artifact -> test server automatically
```

#### Stage 3 — Controlled production deployment

```text
Approved artifact -> scripted production deployment
```

#### Stage 4 — Health checks + rollback

Now delivery is repeatable even without containers.

### IIS example

Possible process:

```text
Build .NET application
 ↓
Create ZIP artifact
 ↓
Store artifact repository
 ↓
Backup/current version reference
 ↓
Drain or stop application safely
 ↓
Deploy package
 ↓
Apply environment configuration
 ↓
Start application
 ↓
GET /health
 ↓
Rollback if validation fails
```

### Apache/PHP example

```text
composer install --no-dev
 ↓
package application
 ↓
deploy to versioned release directory
 ↓
link shared config/storage
 ↓
switch current symlink
 ↓
reload web server if required
 ↓
smoke test
```

Versioned directory idea:

```text
/releases/20260813-101500/
/releases/20260812-183000/
/current -> /releases/20260813-101500/
```

Rollback can switch `/current` to the previous release when compatible.

### Do not wait for modernization

You can improve delivery safety before rewriting the application.


------------------------------------------------------------------------

## 60. Cloud-Native Deployment Patterns

Cloud-native delivery usually targets one of several runtime models.

### Virtual machines

```text
Artifact
 ↓
Deployment group
 ↓
VM 1
VM 2
VM 3
```

Useful when:

- application is not containerized
- OS-level control is required
- migration is gradual

### Managed application platform

The platform handles much of:

- runtime
- scaling
- health management
- deployment slots

Pipeline focuses on:

```text
Build -> Package -> Deploy -> Verify
```

### Container service

```text
Source
 ↓
Image
 ↓
Registry
 ↓
Managed container service
```

### Managed Kubernetes

Useful when organization truly needs Kubernetes flexibility and has skills to operate it.

### Serverless

Useful for event-driven or request-driven workloads where the platform manages servers.

### Static web hosting/CDN

Excellent for static SPA assets.

Pipeline:

```text
Build
 ↓
Upload hashed assets
 ↓
Update index/document
 ↓
Invalidate or manage cache
 ↓
Smoke test
```

### Deployment slots

Some cloud application services provide staging slots.

Conceptually similar to blue-green:

```text
Production Slot -> v1
Staging Slot    -> v2
Test staging
Swap slots
```

### Cloud IAM

Do not give CI an administrator role because deployment is easier.

Create narrowly scoped roles for:

```text
registry push
staging deployment
production deployment
infrastructure apply
```

------------------------------------------------------------------------

## 61. Platform Engineering and Golden Paths

When dozens or hundreds of teams use CI/CD, each team reinventing the process becomes inefficient.

Platform engineering builds reusable internal capabilities.

### Golden path

A golden path is a recommended, supported way to create and deliver software.

Example developer experience:

```text
Create new Spring Boot service
       ↓
Template automatically creates:
  repository
  CI workflow
  Dockerfile
  security scans
  Kubernetes manifests
  dashboard
  alerts
       ↓
Developer focuses on business logic
```

### Internal developer platform concepts

A platform may provide:

- project scaffolding
- CI templates
- deployment templates
- environment creation
- secret integration
- observability defaults
- service catalog
- documentation
- ownership information

### Paved road vs mandatory road

A paved road should be:

- easiest safe option
- well documented
- supported
- extensible

Teams should not need deep platform knowledge for routine delivery.

### Self-service environment creation

Instead of filing a ticket:

```text
Need test environment
 ↓
Wait 5 days
```

provide:

```text
Request environment through approved interface
 ↓
IaC automation
 ↓
Environment created
 ↓
Automatic TTL
```

### Platform metrics

Measure whether the platform improves:

- onboarding time
- pipeline duration
- deployment frequency
- failure rate
- support tickets
- developer satisfaction

------------------------------------------------------------------------

## 62. Pipeline Cost and Efficiency Engineering

CI/CD consumes real compute, storage, and developer time.

### Direct costs

- runner minutes
- VMs
- Kubernetes nodes
- artifact storage
- network transfer
- preview environments
- test databases

### Indirect cost

A 45-minute pipeline delays feedback for every developer.

If 100 engineers wait repeatedly, the productivity cost can be much larger than compute cost.

### Optimization hierarchy

Do not optimize only for the smallest cloud bill.

Balance:

```text
Developer feedback speed
Reliability
Security
Infrastructure cost
```

### Common savings

#### Cancel obsolete pipelines

For rapid pushes to the same branch:

```text
commit A -> running
commit B -> running
commit C -> newest
```

Cancel A/B if their results no longer matter.

#### Auto-stop preview environments

```text
PR closed -> environment destroyed
```

#### Retention policy

Do not retain every temporary artifact forever.

#### Right-size runners

A lint job usually does not need 16 CPUs and 32 GB RAM.

#### Cache intelligently

A cache that takes longer to download than rebuilding is not useful.

### Measure pipeline stages

Example:

```text
Checkout          1m
Dependencies      8m
Compile           3m
Unit tests        5m
Integration test 18m
Upload            2m
```

Optimization effort should target the largest meaningful bottlenecks first.

------------------------------------------------------------------------

## 63. Enterprise Governance and Change Control

CI/CD and governance are not opposites.

Automation can make governance stronger because the same policy is applied every time.

### Evidence chain

A production deployment can automatically record:

```text
Change request ID
Pull request
Reviewers
Commit
Pipeline ID
Test results
Security results
Artifact digest
Approver
Deployment time
Environment
Health result
```

### Approval gates

Examples:

```text
Staging -> automatic
UAT -> product owner approval
Production -> release/change approval
```

Use approvals where they add risk control, not because every historical manual step must be preserved.

### Separation of duties

Example:

```text
Developer creates change
Peer reviews code
Pipeline creates artifact
Release approver authorizes production
Deployment identity executes automatically
```

### Change categories

Organizations may classify:

- standard low-risk change
- normal change
- emergency change

Automation can route them differently.

### Policy as code

Examples:

```text
Production deployment requires:
- protected branch
- signed release tag
- approved artifact
- all critical tests passed
- no critical security findings
```

### Audit does not mean screenshots

A good automated system can produce structured, searchable evidence rather than manually assembled screenshots for every release.

------------------------------------------------------------------------

## 64. Detailed Real-World Delivery Scenarios

This chapter combines concepts into realistic end-to-end examples.

### Scenario 1 — Angular frontend + .NET Web API on IIS

Architecture:

```text
Browser
   ↓
IIS
   ├── Angular SPA
   └── .NET Web API
          ↓
       SQL Server
```

#### Repository

```text
/app
  /frontend
  /api
  /database
  /deployment
```

#### Pull-request pipeline

```text
Checkout
 ↓
Frontend npm ci
 ↓
Angular lint
 ↓
Angular unit tests
 ↓
Angular production build

.NET restore
 ↓
.NET build
 ↓
.NET unit tests

Database migration validation
 ↓
SAST/SCA
 ↓
PR gate
```

#### Main build

Build once:

```text
frontend-dist.zip
api-publish.zip
database-migrations.zip
release-manifest.json
```

Example release manifest:

```json
{
  "version": "2026.08.13.5",
  "commit": "a83f9c1",
  "frontend": "frontend-dist.zip",
  "api": "api-publish.zip",
  "database": "database-migrations.zip"
}
```

#### Test deployment

```text
Take approved artifact
 ↓
Deploy DB additive migration
 ↓
Deploy API
 ↓
Deploy Angular
 ↓
Start/verify IIS application
 ↓
GET /api/health
 ↓
Open SPA smoke test
 ↓
Integration test
```

#### Production

Possible controlled sequence:

```text
Maintenance/traffic control if needed
 ↓
Database backward-compatible migration
 ↓
Deploy API
 ↓
Deploy frontend
 ↓
Health checks
 ↓
Synthetic login test
 ↓
Monitor errors
```

#### Rollback

Application artifacts can be restored quickly if the database migration remains backward compatible.

This demonstrates why database compatibility is more important than simply keeping a ZIP backup.

---

### Scenario 2 — Node.js API with Docker and Kubernetes

```text
GitHub/GitLab
  ↓
CI
  ↓
Container Registry
  ↓
GitOps repository
  ↓
Kubernetes
```

#### PR checks

```text
npm ci
lint
typecheck
unit tests
integration tests
SAST
SCA
```

#### Build

```text
docker build
 ↓
scan image
 ↓
generate SBOM
 ↓
sign/attest artifact where policy requires
 ↓
push image
```

Image:

```text
employee-api:2.9.0
```

#### Staging

Environment repo changes:

```yaml
employeeApi:
  image: employee-api:2.9.0
```

GitOps controller reconciles.

After deployment:

```text
readiness
smoke test
API test
error metrics
```

#### Production canary

```text
5% traffic -> 2.9.0
95% traffic -> 2.8.8
```

Observe 10 minutes.

Then:

```text
25% -> 2.9.0
```

Eventually 100%.

If error rate spikes, abort and return traffic to 2.8.8.

---

### Scenario 3 — Spring Boot + Maven + Kubernetes

PR:

```text
./mvnw clean verify
 ↓
code quality
 ↓
contract tests
 ↓
security scan
```

Main:

```text
JAR
 ↓
Docker multi-stage build
 ↓
registry
```

Deployment uses:

- readiness endpoint
- startup probe for slow initialization if needed
- rolling update
- resource requests/limits

Database migration:

```text
Flyway/Liquibase-style versioned migration
```

Use expand-and-contract for destructive schema changes.

---

### Scenario 4 — PHP CodeIgniter or Laravel on Apache

A legacy PHP application can still use modern delivery discipline.

#### CI

```text
composer install
 ↓
PHP syntax check
 ↓
static analysis
 ↓
unit tests
 ↓
dependency audit
```

#### Artifact

Create a release package excluding unnecessary development files.

#### Server release layout

```text
/var/www/app/releases/20260813-01
/var/www/app/releases/20260813-02
/var/www/app/shared/uploads
/var/www/app/shared/.env
/var/www/app/current -> releases/20260813-02
```

Deployment:

```text
Upload release
 ↓
link shared storage/config
 ↓
run safe migrations
 ↓
update current symlink
 ↓
reload PHP/web server if required
 ↓
smoke test
```

Rollback:

```text
switch current symlink to previous compatible release
```

---

### Scenario 5 — Microservice system with 20 services

Do not create one pipeline that rebuilds everything.

Each service:

```text
owns repository or monorepo path
owns build
owns tests
owns artifact
owns deployment definition
```

System release information may be represented as:

```yaml
release: 2026.08.13
services:
  gateway: 7.4.0
  auth: 6.2.3
  employee: 3.8.1
  attendance: 5.0.9
  invoice: 9.1.2
```

Contract tests protect service boundaries.

Observability identifies which service version is running.

---

### Scenario 6 — Infrastructure change

Requirement:

> Open an application endpoint only to a corporate CIDR.

Process:

```text
Terraform code change
 ↓
PR
 ↓
fmt/validate
 ↓
security scan
 ↓
plan
 ↓
review exact firewall diff
 ↓
merge
 ↓
fresh production plan
 ↓
approval
 ↓
apply
 ↓
connectivity verification
```

If plan unexpectedly shows database replacement, stop and investigate rather than applying automatically.

---

### Scenario 7 — Failed production migration

Deployment sequence:

```text
DB migration -> succeeds partially / app begins failing
```

Bad response:

```text
Immediately redeploy old app without checking schema compatibility
```

Better response:

1. Stop further rollout.
2. Protect data and assess migration state.
3. Determine whether old application is compatible.
4. If yes, shift traffic back.
5. If no, deploy a corrective compatible application/migration.
6. Validate data integrity.
7. Record incident and improve migration tests.

Database incidents require deliberate recovery, not reflexive application rollback.

------------------------------------------------------------------------

## 65. Complete Capstone Architecture

Use this as a final learning project.

### Application

Build:

```text
Angular or React frontend
        +
Node.js / Spring Boot / .NET API
        +
PostgreSQL or SQL Server
```

### Repository

```text
project/
├── frontend/
├── backend/
├── database/
├── docker/
├── helm/
├── terraform/
├── scripts/
├── tests/
└── .github/workflows/ or equivalent
```

### Pull-request pipeline

```text
Checkout
   ↓
Formatting
   ↓
Lint
   ↓
Compile / Type Check
   ↓
Unit Tests
   ↓
Integration Tests
   ↓
SAST
   ↓
Dependency Scan
   ↓
Build Validation
```

### Main pipeline

```text
Merge to main
   ↓
Build once
   ↓
Container Image
   ↓
Image Scan
   ↓
SBOM
   ↓
Artifact Registry
   ↓
Deploy Staging
   ↓
Database Migration
   ↓
Smoke Tests
   ↓
E2E Tests
   ↓
Performance sanity test
   ↓
Release candidate approved
```

### Production pipeline

```text
Approved artifact
   ↓
Production deployment gate
   ↓
Canary 5%
   ↓
Observe
   ↓
Canary 25%
   ↓
Observe
   ↓
100%
   ↓
Post-deployment synthetic tests
   ↓
Mark release healthy
```

### Infrastructure

Provision with IaC:

```text
network
registry
Kubernetes or app runtime
database
monitoring
secret integration
```

### GitOps extension

CI builds the image but does not directly modify the cluster.

```text
CI -> image registry
CI -> environment Git update
GitOps controller -> cluster
```

### Security extension

Add:

```text
secret scan
SAST
SCA
container scan
IaC scan
SBOM
artifact signature/provenance
policy gate
```

### Operations extension

Add dashboards for:

```text
request rate
error rate
latency
CPU/memory
DB connections
business transactions
```

Add release markers.

### Recovery extension

Practice:

- application rollback
- canary abort
- feature kill switch
- database-compatible rollback
- infrastructure rollback/correction

If you can build and explain this project end-to-end, you have moved far beyond memorizing CI/CD commands.

------------------------------------------------------------------------

## 66. Advanced Interview Questions

### Q1. Why is "build once, deploy many" important?

Because rebuilding for each environment can produce different binaries or images from the same source. Promoting the exact immutable artifact ensures production receives what staging actually tested.

### Q2. Why can a rolling deployment break even if both v1 and v2 work separately?

Because v1 and v2 coexist during rollout. They may use different APIs, database schemas, cache formats, or message formats. Compatibility between versions is therefore required.

### Q3. When is roll-forward safer than rollback?

When a deployment made irreversible or difficult-to-reverse data/schema changes, or when external side effects make the previous version incompatible. A corrected forward version may reduce risk.

### Q4. How would you secure CI cloud credentials?

Use least-privilege identities, environment-scoped permissions, short-lived federated credentials where supported, protected environments, and avoid exposing production identity to untrusted pull-request code.

### Q5. What is the difference between CI and GitOps?

CI validates and builds changes. GitOps is primarily an operational deployment/reconciliation model where Git stores desired runtime state and a controller reconciles the target environment.

### Q6. How do you speed up a 45-minute pipeline?

Measure first. Then consider DAG parallelism, dependency caching, test sharding, affected-project detection, incremental builds, reusable artifacts, cancellation of obsolete runs, and faster/appropriately sized runners.

### Q7. How do you prevent flaky tests from destroying trust in CI?

Track flaky tests as defects, isolate external dependencies, use deterministic test data and time, remove ordering assumptions, and avoid treating repeated retries as the permanent solution.

### Q8. Why are ephemeral runners more secure?

Each job gets a fresh environment that is destroyed afterward, reducing persistence of malicious files, leaked credentials, contaminated workspaces, and cross-job state.

### Q9. How do you deploy a destructive database change without downtime?

Convert it into a sequence of backward-compatible expand-and-contract releases: add the new structure, deploy compatible code, migrate/backfill, switch usage, and remove old structure later.

### Q10. What should happen after a deployment command returns success?

Run health checks and smoke/synthetic tests, correlate runtime metrics and logs with the release, evaluate key business signals, and keep rollback or progressive-delivery controls active until the release is considered healthy.

### Q11. Why is using `latest` for production images risky?

It is mutable and ambiguous. It becomes difficult to prove exactly which image content is running or to reproduce a release. Use unique versions or immutable digests.

### Q12. What is policy as code?

Encoding governance/security rules in machine-enforced definitions so every change is evaluated consistently, for example preventing deployment of unsigned images or infrastructure with unsafe public exposure.

### Q13. How do you design CI/CD for microservices?

Keep service build/test/version/deploy ownership independent, protect interfaces with contract/schema compatibility tests, avoid synchronized mega-releases, and make runtime version visibility strong through observability.

### Q14. What is progressive delivery?

Releasing changes gradually and using runtime feedback to decide whether to continue, pause, or roll back. Canary rollout and feature flags are common techniques.

### Q15. What is the most dangerous CI/CD anti-pattern?

There is no single universal one, but uncontrolled production mutation is especially dangerous: manual server edits, untracked database changes, mutable artifacts, and overly privileged pipelines destroy reproducibility and auditability.

------------------------------------------------------------------------

## 67. Production Readiness Checklist

Use this before calling a pipeline production-ready.

### Repository and Review

- [ ] Main/release branches are protected.
- [ ] Direct production changes are controlled.
- [ ] Pipeline definitions are version controlled.
- [ ] Pipeline changes receive review.
- [ ] CODEOWNERS or equivalent exists where useful.

### Build

- [ ] Build is automated.
- [ ] Dependency versions are reproducible where practical.
- [ ] Runtime/toolchain versions are defined.
- [ ] Artifact receives a unique version.
- [ ] Same artifact is promoted across environments.
- [ ] Artifact metadata links back to commit/build.

### Testing

- [ ] Unit tests run automatically.
- [ ] Important integrations are tested.
- [ ] Critical user paths have suitable acceptance/E2E coverage.
- [ ] Smoke tests run after deployment.
- [ ] Flaky tests have ownership and remediation.
- [ ] Test data is deterministic and appropriately isolated.

### Database

- [ ] Migrations are version controlled.
- [ ] Applied migrations are not casually modified.
- [ ] Risky migrations are tested against realistic data volume.
- [ ] Migration lock/impact is understood.
- [ ] Schema changes support rollout/rollback compatibility where needed.
- [ ] Backup/recovery considerations exist for high-risk changes.

### Security

- [ ] Secret scanning is enabled where practical.
- [ ] Secrets are not hardcoded.
- [ ] CI identities use least privilege.
- [ ] Production credentials are isolated from untrusted jobs.
- [ ] Dependencies are scanned.
- [ ] Container/IaC scanning exists where relevant.
- [ ] Third-party pipeline actions/plugins are governed.
- [ ] SBOM/signing/provenance requirements are defined if needed.

### Deployment

- [ ] Deployment is automated and repeatable.
- [ ] Deployment strategy is documented.
- [ ] Health checks exist.
- [ ] Rollout has a timeout.
- [ ] Rollback or roll-forward strategy is understood.
- [ ] Previous known-good artifacts remain available.
- [ ] Production approvals are automated/auditable where required.

### Observability

- [ ] Logs are accessible.
- [ ] Metrics exist for service health.
- [ ] Deployment markers are visible.
- [ ] Error rate and latency are monitored.
- [ ] Critical business KPIs are monitored where appropriate.
- [ ] Alerts have owners and actions.

### Resilience

- [ ] Pipeline retries only transient failures appropriately.
- [ ] Long operations have timeouts.
- [ ] Deployment operations are idempotent where possible.
- [ ] Runner capacity is monitored.
- [ ] Artifact/registry availability is considered.
- [ ] Recovery procedures are documented and tested.

### Governance

- [ ] You can identify who approved a production release.
- [ ] You can map production version to artifact, pipeline, commit, and PR.
- [ ] Required evidence is retained automatically.
- [ ] Emergency change procedure exists.
- [ ] Exceptions are documented rather than hidden.

------------------------------------------------------------------------

## Final CI/CD Mastery Model

At beginner level, CI/CD looks like this:

```text
Push -> Build -> Test -> Deploy
```

At production level, think like this:

```text
                         CHANGE
                           |
                           v
                       SOURCE/GIT
                           |
                    REVIEW + POLICY
                           |
                           v
                     REPRODUCIBLE CI
          +----------------+----------------+
          |                |                |
          v                v                v
       TESTING          SECURITY        CODE QUALITY
          |                |                |
          +----------------+----------------+
                           |
                           v
                   IMMUTABLE ARTIFACT
                           |
                METADATA / SBOM / SIGNING
                           |
                           v
                    ARTIFACT PROMOTION
                           |
              +------------+------------+
              |                         |
              v                         v
        APP DEPLOYMENT             DB/INFRA CHANGE
              |                         |
              +------------+------------+
                           |
                           v
                  CONTROLLED ROLLOUT
                  /      |       \
              Rolling  Canary  Blue/Green
                           |
                           v
                     HEALTH VERIFY
                           |
                           v
                  LOGS / METRICS / TRACES
                           |
                           v
                 BUSINESS OUTCOME CHECK
                           |
                  +--------+--------+
                  |                 |
                  v                 v
               HEALTHY           UNHEALTHY
                  |                 |
                  v                 v
             COMPLETE       ABORT / ROLLBACK /
                              ROLL-FORWARD
                                    |
                                    v
                               LEARN + IMPROVE
```

CI/CD mastery is not the ability to memorize GitHub Actions, Jenkins, GitLab, or Azure DevOps syntax.

It is the ability to design a delivery system that is:

- fast enough for useful feedback
- repeatable
- secure
- observable
- auditable
- resilient
- understandable
- reversible where possible
- compatible with the application's architecture and business risk

Whenever you design a pipeline, ask:

```text
What exactly are we validating?
What exact artifact are we producing?
Can we prove what is in production?
Can old and new versions coexist?
What happens to the database?
What credentials does this job really need?
What happens when this step fails halfway?
How will we know the release is healthy?
How will we recover?
How will another engineer understand this six months later?
```

If you can answer these questions clearly, you are thinking like a production CI/CD engineer rather than only a pipeline user.

------------------------------------------------------------------------

## End of CI/CD Master Learning Handbook
