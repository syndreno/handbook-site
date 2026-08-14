# Kubernetes Master Learning Handbook

> **Beginner → Intermediate → Advanced → Production**  
> A single-file, practical reference for learning Kubernetes deeply through concepts, mental models, YAML, commands, troubleshooting, and real-world scenarios.
>
> **Version note:** This handbook is written against the modern Kubernetes model and targets Kubernetes **v1.36-era** concepts. Kubernetes evolves continuously, so verify version-sensitive features against the official documentation when operating a real cluster.

---

## How to Use This Handbook

Do not try to memorize Kubernetes YAML. Learn the **problem each object solves**, then learn how the objects cooperate.

Prerequisites are basic Linux command-line use, YAML indentation, networking
terms such as IP address, port, DNS, and HTTP, plus container fundamentals such
as images, processes, environment variables, and volumes. You can learn those
alongside Kubernetes, but troubleshooting is much easier when the underlying
container and network layers are not mysterious.

A good learning order is:

1. Containers and why orchestration exists.
2. Cluster architecture.
3. Pods.
4. Deployments and other workload controllers.
5. Services and networking.
6. Configuration and Secrets.
7. Persistent storage.
8. Scheduling and resource management.
9. Security.
10. Autoscaling and high availability.
11. Observability and troubleshooting.
12. Helm, Kustomize, GitOps, CRDs, Operators.
13. Production design and cluster administration.

### Learning rule

For every Kubernetes object, answer five questions:

1. **Why does it exist?**
2. **Who creates or manages it?**
3. **What happens if it fails?**
4. **How do I observe it?**
5. **How do I troubleshoot it?**

---

## Table of Contents

1. [Kubernetes in One Mental Model](#1-kubernetes-in-one-mental-model)
2. [Containers Before Kubernetes](#2-containers-before-kubernetes)
3. [Why Kubernetes Exists](#3-why-kubernetes-exists)
4. [Cluster Architecture](#4-cluster-architecture)
5. [Control Plane Components](#5-control-plane-components)
6. [Worker Node Components](#6-worker-node-components)
7. [Kubernetes API and Declarative State](#7-kubernetes-api-and-declarative-state)
8. [Installing a Learning Cluster](#8-installing-a-learning-cluster)
9. [kubectl and kubeconfig](#9-kubectl-and-kubeconfig)
10. [Kubernetes YAML Anatomy](#10-kubernetes-yaml-anatomy)
11. [Namespaces](#11-namespaces)
12. [Labels, Selectors, and Annotations](#12-labels-selectors-and-annotations)
13. [Pods](#13-pods)
14. [Multi-Container Pods](#14-multi-container-pods)
15. [Pod Lifecycle and Restart Behavior](#15-pod-lifecycle-and-restart-behavior)
16. [Init Containers, Sidecars, and Lifecycle Hooks](#16-init-containers-sidecars-and-lifecycle-hooks)
17. [Health Probes](#17-health-probes)
18. [ReplicaSets](#18-replicasets)
19. [Deployments](#19-deployments)
20. [StatefulSets](#20-statefulsets)
21. [DaemonSets](#21-daemonsets)
22. [Jobs and CronJobs](#22-jobs-and-cronjobs)
23. [Services](#23-services)
24. [Cluster DNS and Service Discovery](#24-cluster-dns-and-service-discovery)
25. [Ingress and Gateway API](#25-ingress-and-gateway-api)
26. [Kubernetes Networking Model](#26-kubernetes-networking-model)
27. [CNI and Network Plugins](#27-cni-and-network-plugins)
28. [NetworkPolicy](#28-networkpolicy)
29. [Volumes](#29-volumes)
30. [PersistentVolume and PersistentVolumeClaim](#30-persistentvolume-and-persistentvolumeclaim)
31. [StorageClass and Dynamic Provisioning](#31-storageclass-and-dynamic-provisioning)
32. [CSI, Snapshots, and Advanced Storage](#32-csi-snapshots-and-advanced-storage)
33. [ConfigMaps](#33-configmaps)
34. [Secrets](#34-secrets)
35. [Resource Requests and Limits](#35-resource-requests-and-limits)
36. [QoS Classes](#36-qos-classes)
37. [LimitRange and ResourceQuota](#37-limitrange-and-resourcequota)
38. [Scheduling](#38-scheduling)
39. [nodeSelector and Node Affinity](#39-nodeselector-and-node-affinity)
40. [Pod Affinity and Anti-Affinity](#40-pod-affinity-and-anti-affinity)
41. [Taints and Tolerations](#41-taints-and-tolerations)
42. [Topology Spread Constraints](#42-topology-spread-constraints)
43. [Priority and Preemption](#43-priority-and-preemption)
44. [Authentication, Authorization, and Admission](#44-authentication-authorization-and-admission)
45. [RBAC](#45-rbac)
46. [ServiceAccounts](#46-serviceaccounts)
47. [SecurityContext](#47-securitycontext)
48. [Pod Security Standards and Admission](#48-pod-security-standards-and-admission)
49. [Image and Supply-Chain Security](#49-image-and-supply-chain-security)
50. [Horizontal, Vertical, and Cluster Autoscaling](#50-horizontal-vertical-and-cluster-autoscaling)
51. [Disruptions and PodDisruptionBudget](#51-disruptions-and-poddisruptionbudget)
52. [Rolling Updates, Rollbacks, Blue-Green, Canary](#52-rolling-updates-rollbacks-blue-green-canary)
53. [Observability](#53-observability)
54. [Logging](#54-logging)
55. [Metrics](#55-metrics)
56. [Tracing](#56-tracing)
57. [Events](#57-events)
58. [Troubleshooting Methodology](#58-troubleshooting-methodology)
59. [Common Failure Scenarios](#59-common-failure-scenarios)
60. [Debugging Pods, Services, DNS, and Nodes](#60-debugging-pods-services-dns-and-nodes)
61. [Helm](#61-helm)
62. [Kustomize](#62-kustomize)
63. [GitOps](#63-gitops)
64. [CRDs, Custom Resources, and Operators](#64-crds-custom-resources-and-operators)
65. [Admission Webhooks](#65-admission-webhooks)
66. [Kubernetes API Patterns](#66-kubernetes-api-patterns)
67. [etcd and Cluster State](#67-etcd-and-cluster-state)
68. [Cluster Creation with kubeadm](#68-cluster-creation-with-kubeadm)
69. [High Availability Control Plane](#69-high-availability-control-plane)
70. [Upgrades and Version Skew](#70-upgrades-and-version-skew)
71. [Backup and Disaster Recovery](#71-backup-and-disaster-recovery)
72. [Managed Kubernetes: EKS, AKS, GKE](#72-managed-kubernetes-eks-aks-gke)
73. [Multi-Tenancy](#73-multi-tenancy)
74. [Production Readiness Checklist](#74-production-readiness-checklist)
75. [Complete Production-Style Application Example](#75-complete-production-style-application-example)
76. [Real-World Scenario Playbook](#76-real-world-scenario-playbook)
77. [Common Kubernetes Anti-Patterns](#77-common-kubernetes-anti-patterns)
78. [kubectl Master Cheat Sheet](#78-kubectl-master-cheat-sheet)
79. [Reusable YAML Templates](#79-reusable-yaml-templates)
80. [Interview Questions and Answers](#80-interview-questions-and-answers)
81. [Hands-On Labs and Projects](#81-hands-on-labs-and-projects)
82. [Learning Roadmap](#82-learning-roadmap)
83. [Glossary](#83-glossary)
84. [Official References](#84-official-references)

---

## 1. Kubernetes in One Mental Model

Kubernetes is a **desired-state control system** for containerized workloads.

You declare:

> “I want three copies of my web application running, reachable through a stable network endpoint, with 500 MiB memory per copy, using this configuration and this storage.”

Kubernetes continuously compares:

```text
Desired State
     │
     ▼
Kubernetes API
     │
     ▼
Controllers ───── compare desired vs actual
     │
     ▼
Scheduler chooses nodes
     │
     ▼
Kubelet starts containers
     │
     ▼
Actual State
```

If a Pod dies, Kubernetes does not normally “repair that exact Pod.” A controller notices that the desired count is no longer satisfied and creates a replacement.

This is the central idea behind Kubernetes:

```text
Declare → Observe → Reconcile → Repeat
```

### Example

You declare:

```yaml
spec:
  replicas: 3
```

Current reality:

```text
Running Pods = 2
Desired Pods = 3
```

The Deployment controller eventually causes another Pod to be created.

#### Important distinction

Kubernetes is not primarily a collection of shell commands. It is a set of **APIs + controllers** implementing reconciliation loops.

---

## 2. Containers Before Kubernetes

A container packages an application with the runtime dependencies required to execute it.

Typical application image:

```dockerfile
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
```

Run locally:

```bash
docker build -t my-web:v1 .
docker run -p 8080:80 my-web:v1
```

That works well for one machine. Problems appear when production requires:

- 100 application instances.
- Automatic recovery after machine failure.
- Rolling upgrades.
- Service discovery.
- Load balancing.
- Secrets and configuration.
- Persistent volumes.
- Autoscaling.
- Scheduling across machines.
- Health checking.
- Controlled deployment strategies.

Docker/containerd solves **container execution**. Kubernetes solves **container orchestration**.

---

## 3. Why Kubernetes Exists

Imagine manually managing 200 containers on 20 servers.

Without orchestration you need to answer:

- Which server has spare CPU?
- Which server has spare RAM?
- Where should a new instance run?
- What if that server crashes?
- What IP does each container have now?
- How does another service discover it?
- How do I release v2 without downtime?
- How do I scale from 5 instances to 50?
- How do I prevent one application consuming every resource?

Kubernetes provides abstractions for these problems.

| Problem | Kubernetes concept |
|---|---|
| Run containers | Pod |
| Maintain N replicas | Deployment / ReplicaSet |
| Stable networking | Service |
| External HTTP routing | Ingress / Gateway API |
| Configuration | ConfigMap |
| Sensitive configuration | Secret |
| Persistent data | PV / PVC / StorageClass |
| Background execution | Job |
| Scheduled task | CronJob |
| Node-wide agent | DaemonSet |
| Stateful replicas | StatefulSet |
| Access control | RBAC |
| Placement rules | Scheduler constraints |
| Automatic workload scaling | HPA |
| Traffic isolation | NetworkPolicy |

---

## 4. Cluster Architecture

A Kubernetes cluster has two major sides:

```text
┌──────────────────────── Control Plane ────────────────────────┐
│ API Server | Scheduler | Controller Manager | etcd            │
└───────────────────────────────────────────────────────────────┘
                         │
                         │ Kubernetes API
                         ▼
┌──────────────────────── Worker Node ──────────────────────────┐
│ kubelet | container runtime | networking components           │
│                                                              │
│ Pod A         Pod B         Pod C                             │
└───────────────────────────────────────────────────────────────┘
```

The **control plane** makes cluster-wide decisions and stores desired state.

The **worker nodes** run application workloads.

### Typical request flow

When you execute:

```bash
kubectl apply -f deployment.yaml
```

A simplified flow is:

```text
kubectl
  ↓
API Server
  ↓
etcd stores object
  ↓
Deployment controller notices desired replicas
  ↓
ReplicaSet created
  ↓
Pods created
  ↓
Scheduler chooses nodes
  ↓
kubelet on each node sees assigned Pod
  ↓
container runtime pulls image and starts containers
```

---

## 5. Control Plane Components

### 5.1 kube-apiserver

The API server is the front door of Kubernetes.

Nearly all cluster operations flow through it.

Examples:

```bash
kubectl get pods
kubectl create deployment web --image=nginx
kubectl delete service web
```

Each ultimately interacts with the Kubernetes API.

Responsibilities include:

- API validation.
- Authentication.
- Authorization.
- Admission control.
- Reading/writing cluster objects.
- Exposing watch streams to controllers and clients.

### 5.2 etcd

`etcd` is a distributed key-value store containing Kubernetes cluster state.

It stores information such as:

- Deployments.
- Pods.
- Services.
- ConfigMaps.
- Secrets.
- RBAC objects.
- Node information.

Treat etcd backup as a critical disaster-recovery asset for self-managed control planes.

### 5.3 kube-scheduler

The scheduler decides **which node should run an unscheduled Pod**.

It considers factors including:

- CPU and memory requests.
- Node selectors.
- Affinity rules.
- Taints/tolerations.
- Topology constraints.
- Priority.
- Available resources.

It does not normally start the container itself. It assigns the Pod to a node.

### 5.4 kube-controller-manager

Runs many reconciliation controllers.

Examples:

- Deployment-related controllers.
- ReplicaSet controller.
- Node controller.
- Job controller.
- Endpoint-related controllers.

Controllers continuously attempt to make actual state match desired state.

### 5.5 cloud-controller-manager

In cloud integrations, cloud-specific operations may be handled separately.

Examples:

- Cloud load balancers.
- Node lifecycle integration.
- Cloud routes.
- Volume-related cloud integration depending on provider/plugin architecture.

---

## 6. Worker Node Components

### 6.1 kubelet

The kubelet is the node agent.

Its job is approximately:

> “For Pods assigned to my node, make sure their containers are running according to the Pod specification.”

It communicates with the container runtime through CRI-compatible mechanisms.

### 6.2 Container runtime

Commonly `containerd` or CRI-O.

Responsibilities include:

- Pull images.
- Create containers.
- Start/stop containers.
- Manage low-level container execution.

### 6.3 Networking implementation

Cluster networking is typically supplied through a CNI-compatible plugin.

Examples in the ecosystem include:

- Cilium.
- Calico.
- Flannel.
- Cloud-provider-specific CNI implementations.

The exact feature set varies.

---

## 7. Kubernetes API and Declarative State

Kubernetes exposes a resource-oriented API.

You usually manage resources declaratively using YAML.

Example:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
```

Apply:

```bash
kubectl apply -f deployment.yaml
```

Kubernetes records the desired state.

### Declarative vs imperative

Imperative:

```bash
kubectl create deployment web --image=nginx
```

Declarative:

```bash
kubectl apply -f web.yaml
```

For repeatable production infrastructure, declarative configuration is normally easier to review, version, reproduce, and integrate with GitOps.

#### Use imperative commands for

- Learning.
- Fast experiments.
- Debugging.
- Generating starter YAML.

Example:

```bash
kubectl create deployment web \
  --image=nginx \
  --dry-run=client -o yaml
```

---

## 8. Installing a Learning Cluster

Good local options include:

- **kind** — Kubernetes nodes run as containers.
- **minikube** — convenient local learning environment.
- **Docker Desktop Kubernetes** — simple desktop option when enabled.
- **k3d/k3s ecosystem** — lightweight Kubernetes use cases.

For serious cluster-administration practice:

- kubeadm VMs.
- Cloud VMs.
- Managed Kubernetes services.

### kind example

```bash
kind create cluster --name learn-k8s
kubectl cluster-info --context kind-learn-k8s
kubectl get nodes
```

`kind create cluster` creates a local cluster whose nodes are containers;
`--name` gives it a predictable identity. `kubectl cluster-info --context ...`
explicitly queries that cluster, and `kubectl get nodes` should show at least
one node in `Ready` state after system components initialize. If the context is
wrong, fix the context rather than applying resources to an unintended cluster.

Delete:

```bash
kind delete cluster --name learn-k8s
```

### Basic validation

```bash
kubectl version
kubectl cluster-info
kubectl get nodes -o wide
kubectl get pods -A
```

---

## 9. kubectl and kubeconfig

`kubectl` is the primary Kubernetes command-line client.

### 9.1 kubeconfig

A kubeconfig typically contains:

```text
clusters     → where the API servers are
users        → credentials/authentication information
contexts     → cluster + user + optional namespace
current-context
```

View:

```bash
kubectl config view
kubectl config current-context
kubectl config get-contexts
```

Switch context:

```bash
kubectl config use-context dev-cluster
```

Set default namespace for context:

```bash
kubectl config set-context --current --namespace=payments
```

### 9.2 Essential kubectl pattern

```bash
kubectl <verb> <resource> <name> [flags]
```

Examples:

```bash
kubectl get pods
kubectl describe pod web-abc123
kubectl logs web-abc123
kubectl delete pod web-abc123
```

The verb requests an operation, the resource identifies an API kind, the name
selects one object, and flags change scope or output. For example, `-n shop`
selects the `shop` namespace and `-o yaml` returns the server's object as YAML.
Most successful read commands print objects; mutation commands print a status
such as `created`, `configured`, or `deleted`. Always read errors and events:
an accepted Deployment does not guarantee that its Pods later become healthy.

Aliases often used by experienced operators:

```bash
alias k=kubectl
```

### 9.3 Discover the API

```bash
kubectl api-resources
kubectl api-versions
kubectl explain deployment
kubectl explain deployment.spec
kubectl explain pod.spec.containers
```

`kubectl explain` is extremely useful when writing YAML without guessing field names.

---

## 10. Kubernetes YAML Anatomy

Most Kubernetes resources contain:

```yaml
apiVersion: ...
kind: ...
metadata:
  name: ...
spec:
  ...
```

### 10.1 apiVersion

Identifies the API group/version.

Examples:

```yaml
apiVersion: v1
```

Core resources such as Pod, Service, ConfigMap, and Secret use `v1`.

```yaml
apiVersion: apps/v1
```

Deployments and StatefulSets use the `apps` API group.

### 10.2 kind

Resource type:

```yaml
kind: Deployment
```

### 10.3 metadata

Identity and metadata:

```yaml
metadata:
  name: payment-api
  namespace: payments
  labels:
    app: payment-api
```

### 10.4 spec

Desired configuration.

### 10.5 status

Observed runtime state, generally populated by Kubernetes/controllers.

Inspect:

```bash
kubectl get deployment payment-api -o yaml
```

You will usually see both `spec` and `status`.

#### Desired vs observed

```text
spec   = what you want
status = what Kubernetes currently sees
```

---

## 11. Namespaces

Namespaces provide logical grouping/isolation for namespaced resources.

Example namespaces:

```text
dev
qa
staging
production
monitoring
payments
```

Create:

```bash
kubectl create namespace dev
```

YAML:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: dev
```

Use:

```bash
kubectl get pods -n dev
kubectl get pods --all-namespaces
kubectl get pods -A
```

### Important

Not every Kubernetes object is namespaced.

Examples of cluster-scoped resources include:

- Nodes.
- PersistentVolumes.
- StorageClasses.
- ClusterRoles.
- ClusterRoleBindings.
- Namespaces themselves.

Discover scope:

```bash
kubectl api-resources --namespaced=true
kubectl api-resources --namespaced=false
```

### Scenario

A company has 15 application teams.

Possible organizational model:

```text
team-payments
team-orders
team-search
```

Add per-namespace:

- ResourceQuota.
- LimitRange.
- RBAC.
- NetworkPolicy.
- Pod Security Admission labels.

A namespace is not by itself a complete hard multi-tenancy security boundary.

---

## 12. Labels, Selectors, and Annotations

### 12.1 Labels

Labels are queryable key/value metadata used for grouping and selection.

```yaml
metadata:
  labels:
    app: checkout
    environment: production
    tier: backend
```

Query:

```bash
kubectl get pods -l app=checkout
kubectl get pods -l environment=production,tier=backend
```

Set-based selector:

```bash
kubectl get pods -l 'environment in (staging,production)'
```

### 12.2 Why labels matter

A Service usually sends traffic to Pods selected by labels.

```text
Service selector app=web
        │
        ├── Pod app=web
        ├── Pod app=web
        └── Pod app=web
```

Incorrect labels can produce a perfectly healthy Service with **zero endpoints**.

### 12.3 Annotations

Annotations hold non-identifying metadata.

Examples:

- Build information.
- Tool configuration.
- External controller settings.
- Documentation references.

```yaml
metadata:
  annotations:
    example.com/owner: platform-team
```

Rule of thumb:

```text
Need to select/filter by it? → label
Need descriptive/tool metadata? → annotation
```

---

## 13. Pods

A Pod is the smallest deployable compute unit in Kubernetes.

A Pod contains one or more containers that share important resources such as the Pod network namespace.

Simple Pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-demo
  labels:
    app: nginx-demo
spec:
  containers:
    - name: nginx
      image: nginx:1.27
      ports:
        - containerPort: 80
```

Apply:

```bash
kubectl apply -f pod.yaml
```

Inspect:

```bash
kubectl get pods
kubectl get pod nginx-demo -o wide
kubectl describe pod nginx-demo
kubectl logs nginx-demo
```

Delete:

```bash
kubectl delete pod nginx-demo
```

### 13.1 Pods are disposable

Do not design around a Pod IP remaining forever.

A recreated Pod can receive a different IP.

Use:

- Deployment to maintain stateless replicas.
- StatefulSet for identity-sensitive stateful replicas.
- Service for stable networking.

### 13.2 Enter a container

```bash
kubectl exec -it nginx-demo -- /bin/sh
```

### 13.3 Port forwarding

```bash
kubectl port-forward pod/nginx-demo 8080:80
```

Open:

```text
http://localhost:8080
```

This is useful for local testing, not normal production exposure.

---

## 14. Multi-Container Pods

Multiple containers belong in one Pod when they are tightly coupled and should share the Pod lifecycle/network/storage context.

Example pattern:

```text
Pod
├── application container
└── helper/sidecar container
```

Example shared volume:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: shared-volume-demo
spec:
  volumes:
    - name: shared
      emptyDir: {}
  containers:
    - name: writer
      image: busybox:1.36
      command: ["sh", "-c", "while true; do date >> /data/log.txt; sleep 5; done"]
      volumeMounts:
        - name: shared
          mountPath: /data

    - name: reader
      image: busybox:1.36
      command: ["sh", "-c", "touch /data/log.txt && tail -f /data/log.txt"]
      volumeMounts:
        - name: shared
          mountPath: /data
```

Both containers mount the same Pod-scoped `emptyDir`. The writer appends the
current date every five seconds; the reader creates the file if necessary and
then follows it, avoiding a startup race where `tail` sees no file. The volume
and its data disappear when the Pod is removed. This example demonstrates
sharing, not durable logging.

### Do not create multi-container Pods merely because two services communicate

If two applications can scale or deploy independently, they usually belong in separate workloads.

---

## 15. Pod Lifecycle and Restart Behavior

A Pod can move through phases such as:

- Pending.
- Running.
- Succeeded.
- Failed.
- Unknown.

Container state can be:

- Waiting.
- Running.
- Terminated.

Useful inspection:

```bash
kubectl get pod mypod
kubectl describe pod mypod
kubectl get pod mypod -o jsonpath='{.status.containerStatuses}'
```

### Restart policy

Pod-level `restartPolicy`:

```yaml
restartPolicy: Always
```

Values:

- `Always`
- `OnFailure`
- `Never`

Workload controllers impose appropriate behaviors. For example, Deployments normally use Pods with `Always` restart semantics.

### Why `CrashLoopBackOff` happens

Typical sequence:

```text
container starts
↓
application crashes
↓
kubelet restarts container
↓
application crashes again
↓
restart backoff increases
```

Investigate:

```bash
kubectl logs pod-name
kubectl logs pod-name --previous
kubectl describe pod pod-name
```

---

## 16. Init Containers, Sidecars, and Lifecycle Hooks

### 16.1 Init containers

Init containers run before normal application containers.

Use cases:

- Wait for dependency.
- Generate configuration.
- Run setup logic.
- Change volume permissions.

Example:

```yaml
spec:
  initContainers:
    - name: wait-for-db
      image: busybox:1.36
      command:
        - sh
        - -c
        - until nc -z database 5432; do echo waiting; sleep 2; done
```

Avoid excessive dependency waiting when resilient retry logic inside the application is more appropriate.

### 16.2 Sidecar pattern

Common conceptual uses:

- Log shipping.
- Service-mesh proxy.
- Local helper process.
- File synchronization.

Sidecar support has evolved in Kubernetes; always verify behavior for the Kubernetes version you run.

### 16.3 Lifecycle hooks

Example `preStop`:

```yaml
lifecycle:
  preStop:
    exec:
      command: ["sh", "-c", "sleep 10"]
```

Use cases:

- Trigger graceful shutdown actions.
- Allow routing updates before process termination.

Do not use arbitrary sleeps as a substitute for correct application shutdown unless you understand why the delay is necessary.

Kubernetes invokes the `preStop` hook before sending the normal termination
signal to the container process, and the hook consumes part of the Pod's
termination grace period. The sleep example delays signal delivery; it does not
itself make the application graceful. Prefer an application that handles
`SIGTERM`, stops accepting new work, and exits within a measured grace period.

---

## 17. Health Probes

Three major probe types:

### 17.1 Liveness probe

Question:

> Is the process stuck or unhealthy enough that restarting it may help?

```yaml
livenessProbe:
  httpGet:
    path: /health/live
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 10
```

### 17.2 Readiness probe

Question:

> Can this Pod receive traffic right now?

```yaml
readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
  periodSeconds: 5
```

When readiness fails, the Pod can stay running but should be removed from ready Service endpoints.

### 17.3 Startup probe

Useful for slow-starting applications.

```yaml
startupProbe:
  httpGet:
    path: /health/startup
    port: 8080
  failureThreshold: 30
  periodSeconds: 10
```

It protects slow startup from premature liveness failure.

### Scenario

Java service:

```text
Cold startup = 90 seconds
Normal health = fast
```

Bad approach:

```text
liveness starts after 10 seconds → repeated restarts → app never becomes ready
```

Better:

```text
startupProbe permits long initialization
readinessProbe controls traffic
livenessProbe detects deadlock after startup
```

---

## 18. ReplicaSets

ReplicaSet ensures a specified number of matching Pod replicas exist.

Conceptually:

```text
Desired replicas = 3
Actual replicas  = 2
→ create 1 Pod
```

You rarely create ReplicaSets directly for normal application deployments. Deployments manage them.

Inspect:

```bash
kubectl get rs
```

Ownership chain:

```text
Deployment
   ↓
ReplicaSet
   ↓
Pods
```

---

## 19. Deployments

Deployment is the standard controller for stateless applications.

Use it for:

- Web applications.
- REST APIs.
- Stateless workers.
- Most horizontally scalable services.

Example:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 0
      maxSurge: 1
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: example/api:1.0.0
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet:
              path: /ready
              port: 8080
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              memory: 256Mi
```

Apply:

```bash
kubectl apply -f deployment.yaml
```

Scale:

```bash
kubectl scale deployment api --replicas=5
```

Update image:

```bash
kubectl set image deployment/api api=example/api:1.1.0
```

Observe rollout:

```bash
kubectl rollout status deployment/api
kubectl rollout history deployment/api
```

Rollback:

```bash
kubectl rollout undo deployment/api
```

### Deployment updates

A typical rolling update:

```text
Old ReplicaSet: 3 replicas
New ReplicaSet: 0 replicas

→ new becomes 1, old becomes 2
→ new becomes 2, old becomes 1
→ new becomes 3, old becomes 0
```

Exact temporary counts depend on strategy settings.

---

## 20. StatefulSets

Use StatefulSet when replicas need stable identities and/or stable storage semantics.

Typical uses:

- Databases.
- Distributed systems.
- Brokers.
- Stateful clustered applications.

A StatefulSet can provide predictable Pod names:

```text
mysql-0
mysql-1
mysql-2
```

Compared with Deployment-generated names:

```text
api-7f8c4d6f6b-x9d2p
```

Example:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: redis
spec:
  clusterIP: None
  selector:
    app: redis
  ports:
    - name: redis
      port: 6379
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis
spec:
  serviceName: redis
  replicas: 3
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
        - name: redis
          image: redis:7
          ports:
            - containerPort: 6379
          volumeMounts:
            - name: data
              mountPath: /data
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 10Gi
```

The headless Service supplies direct DNS discovery for the stable Pod identities
named by `serviceName`. Each replica receives its own PVC when a default
StorageClass or another matching provisioning arrangement exists. These three
Pods are still separate Redis processes; this manifest does not configure Redis
replication, quorum, or failover.

### StatefulSet does not magically make a database highly available

Application/database-level clustering, replication, leader election, backups, and recovery still matter.

---

## 21. DaemonSets

DaemonSet runs a Pod on matching nodes.

Use cases:

- Log collectors.
- Node monitoring agents.
- Security agents.
- Storage/network node agents.

Example:

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-agent
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app: node-agent
  template:
    metadata:
      labels:
        app: node-agent
    spec:
      containers:
        - name: agent
          image: example/node-agent:1.0
```

If there are five eligible nodes, the DaemonSet generally aims for one Pod on each eligible node.

---

## 22. Jobs and CronJobs

### 22.1 Job

Use Job for finite work that should complete.

Examples:

- Database migration.
- One-time import.
- Batch transformation.
- Report generation.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: report-job
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: report
          image: example/report:1.0
          command: ["python", "generate_report.py"]
  backoffLimit: 4
```

### 22.2 CronJob

Use CronJob for scheduled Jobs.

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: nightly-report
spec:
  schedule: "0 2 * * *"
  timeZone: "Etc/UTC"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: report
              image: example/report:1.0
```

The five-field schedule means minute `0`, hour `2`, every day/month/weekday.
`timeZone` makes the intended zone explicit, and `Forbid` skips a new start
when the previous Job is still active. A CronJob creates Jobs; each Job then
creates Pods. Scheduled execution can be delayed by control-plane downtime or
capacity, so the work should be idempotent and able to detect duplicate or late
runs where the business process requires it.

#### Scenario

If a financial batch must never overlap with the previous execution:

```yaml
concurrencyPolicy: Forbid
```

For critical schedules, also think about:

- Time zone behavior.
- Idempotency.
- Retries.
- Missed schedules.
- Job history cleanup.
- External locking.

---

## 23. Services

Pods are ephemeral. Services provide stable access to a logical group of Pods.

### 23.1 ClusterIP

Default Service type. Reachable inside the cluster.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector:
    app: api
  ports:
    - port: 80
      targetPort: 8080
```

Flow:

```text
client
  ↓
api Service :80
  ↓
ready Pod :8080
```

### 23.2 NodePort

Exposes a port through cluster nodes.

```yaml
spec:
  type: NodePort
```

Often used for learning, specific infrastructure patterns, or as a building block. It is not usually the most convenient direct internet-facing design for production web applications.

### 23.3 LoadBalancer

Requests an external load balancer in supported environments.

```yaml
spec:
  type: LoadBalancer
```

Cloud integrations typically provision or configure the infrastructure behind it.

### 23.4 ExternalName

Provides DNS-style mapping to an external DNS name.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: legacy-db
spec:
  type: ExternalName
  externalName: database.example.internal
```

### 23.5 Headless Service

```yaml
spec:
  clusterIP: None
```

Useful when clients need direct discovery of individual Pod endpoints, often with StatefulSets.

### Service debugging

```bash
kubectl get svc
kubectl describe svc api
kubectl get endpointslices -l kubernetes.io/service-name=api
kubectl get pods -l app=api --show-labels
```

The most common beginner Service bug is a selector that does not match Pod labels.

---

## 24. Cluster DNS and Service Discovery

Inside the cluster, Services receive DNS names.

If Service `api` exists in namespace `payments`, Pods in that namespace can often use:

```text
http://api
```

A fully qualified form resembles:

```text
api.payments.svc.cluster.local
```

Typical inter-service architecture:

```text
frontend
   ↓ http://api
api Service
   ↓
api Pods
   ↓ tcp://postgres:5432
postgres Service
```

Debug DNS from a temporary Pod:

```bash
kubectl run dns-test \
  --image=busybox:1.36 \
  --restart=Never \
  -it --rm -- nslookup api
```

Check cluster DNS Pods:

```bash
kubectl get pods -n kube-system
```

---

## 25. Ingress and Gateway API

### 25.1 Ingress

Ingress defines HTTP/HTTPS routing rules. An **Ingress controller** is required to implement them.

Example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web
spec:
  rules:
    - host: shop.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: frontend
                port:
                  number: 80
```

Conceptually:

```text
Internet
   ↓
Ingress Controller / Load Balancer
   ↓ host/path rule
Service
   ↓
Pods
```

Ingress resources alone do not route traffic unless a compatible controller is installed.

### 25.2 Gateway API

Gateway API provides a newer, role-oriented networking model with resources such as:

```text
GatewayClass
Gateway
HTTPRoute
```

Conceptual separation:

```text
Infrastructure provider → GatewayClass
Platform team           → Gateway
Application team        → HTTPRoute
```

This model can be cleaner than placing every concern into one Ingress object or controller-specific annotations.

Always verify which Gateway API features your Kubernetes version and chosen implementation support.

---

## 26. Kubernetes Networking Model

A useful simplified model:

1. Every Pod gets an IP address.
2. Pods should be able to communicate according to cluster networking rules without application-level NAT assumptions between Pods.
3. Services provide stable virtual endpoints over dynamic Pods.
4. CNI implementation provides Pod networking.
5. NetworkPolicy can restrict permitted traffic when supported by the networking implementation.

### Layers to distinguish

```text
Application routing      → HTTPRoute / Ingress
Stable service endpoint  → Service
Pod network              → CNI
Traffic policy           → NetworkPolicy
DNS                      → CoreDNS / cluster DNS
External load balancing  → provider/controller implementation
```

Many troubleshooting mistakes come from mixing these layers.

---

## 27. CNI and Network Plugins

CNI stands for Container Network Interface.

Kubernetes relies on a networking implementation to connect Pods.

A CNI plugin may provide:

- Pod IP assignment.
- Routing.
- Overlay or native networking.
- NetworkPolicy enforcement.
- Observability.
- Encryption.
- eBPF-based networking, depending on implementation.

Do not assume all CNIs support identical policy behavior or operational tooling.

### Cluster symptom when CNI is broken

Possible observations:

```text
Pods stuck creating
Pod sandbox errors
cross-node connectivity failure
Node not becoming fully usable
```

Inspect:

```bash
kubectl get pods -n kube-system
kubectl describe pod <pod>
kubectl get nodes -o wide
```

On self-managed nodes, also inspect runtime/kubelet/network plugin logs.

---

## 28. NetworkPolicy

NetworkPolicy is Kubernetes' native abstraction for controlling allowed Pod network traffic.

A powerful rule:

> A policy only has effect when your network implementation enforces NetworkPolicy.

### Default deny ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: payments
spec:
  podSelector: {}
  policyTypes:
    - Ingress
```

### Allow frontend to API

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-api
  namespace: payments
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 8080
```

The policy selects Pods labeled `app=api`. Its `from.podSelector` matches
frontend Pods in the *same namespace* because no `namespaceSelector` is
present, and it permits TCP destination port `8080`. NetworkPolicy rules are
additive: another matching policy may allow additional traffic. Test policy
from both allowed and denied clients before treating it as verified isolation.

### Scenario

Without policy:

```text
frontend → api ✓
random-debug-pod → api ✓
compromised-pod → api ✓
```

With a default-deny + explicit allow model:

```text
frontend → api ✓
random-debug-pod → api ✗
compromised-pod → api ✗
```

Be careful with DNS egress when applying deny-by-default egress policies.

---

## 29. Volumes

Containers have ephemeral writable layers. Kubernetes volumes provide storage mounted into containers.

Different volume types solve different problems.

### emptyDir

Lives for the Pod lifetime.

```yaml
volumes:
  - name: cache
    emptyDir: {}
```

Use for:

- Cache.
- Scratch data.
- Sharing files between containers in the same Pod.

Not suitable for data that must survive Pod replacement.

### ConfigMap/Secret projected as volumes

Configuration can be mounted as files.

### Persistent storage

Use PVC-backed storage when data needs a lifecycle independent of an individual Pod.

---

## 30. PersistentVolume and PersistentVolumeClaim

Mental model:

```text
Pod asks via PVC
      ↓
PVC requests storage
      ↓
PV represents provisioned storage
      ↓
Storage backend
```

### PVC example

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-data
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

Use in Pod:

```yaml
spec:
  volumes:
    - name: data
      persistentVolumeClaim:
        claimName: app-data
  containers:
    - name: app
      image: example/app:1.0
      volumeMounts:
        - name: data
          mountPath: /var/lib/app
```

### Access modes

Common concepts:

- ReadWriteOnce (RWO).
- ReadOnlyMany (ROX).
- ReadWriteMany (RWX).
- ReadWriteOncePod (RWOP), depending on storage support and use case.

Do not assume a requested access mode is supported by every storage backend.

---

## 31. StorageClass and Dynamic Provisioning

StorageClass describes a class of storage and provisioning behavior.

Example conceptual StorageClass:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: example.csi.driver
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

PVC:

```yaml
spec:
  storageClassName: fast
  resources:
    requests:
      storage: 20Gi
```

Dynamic provisioning flow:

```text
PVC created
  ↓
StorageClass selected
  ↓
CSI provisioner creates storage
  ↓
PV appears/binds
  ↓
Pod mounts volume
```

### Reclaim policy

Important for data safety.

Possible policies include:

- `Delete`
- `Retain`

Understand the storage provider's behavior before deleting claims in production.

### volumeBindingMode

`WaitForFirstConsumer` can delay volume provisioning/binding until Pod scheduling constraints are known, useful for topology-aware storage.

---

## 32. CSI, Snapshots, and Advanced Storage

CSI = Container Storage Interface.

CSI drivers integrate external storage systems with Kubernetes.

Capabilities can include:

- Dynamic provisioning.
- Attach/mount.
- Expansion.
- Snapshots.
- Cloning.
- Topology awareness.

### Production storage questions

Before choosing storage ask:

1. What failure domain does the volume belong to?
2. Can it move between nodes/zones?
3. What access modes exist?
4. What is the IOPS/latency profile?
5. Are snapshots crash-consistent or application-consistent?
6. Can volumes expand online?
7. What happens when a PVC is deleted?
8. How are backups restored into another cluster?

Kubernetes storage orchestration is not a substitute for database-consistent backup design.

---

## 33. ConfigMaps

ConfigMaps store non-secret configuration.

Example:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: api-config
data:
  LOG_LEVEL: info
  FEATURE_X: "true"
```

Inject environment variables:

```yaml
envFrom:
  - configMapRef:
      name: api-config
```

Or specific key:

```yaml
env:
  - name: LOG_LEVEL
    valueFrom:
      configMapKeyRef:
        name: api-config
        key: LOG_LEVEL
```

Mount as files:

```yaml
volumes:
  - name: config
    configMap:
      name: api-config
containers:
  - name: api
    image: example/api:1.0
    volumeMounts:
      - name: config
        mountPath: /etc/api-config
        readOnly: true
```

Each ConfigMap key becomes a file under `/etc/api-config` by default. The
application must read those files; declaring the volume alone does not mount
it. Mounted ConfigMap data can update after a delay, but applications do not
necessarily reload changed files automatically, and mounts using `subPath` do
not receive normal projected updates. Choose an explicit reload or rollout
strategy.

### Important rollout behavior

If configuration is consumed as environment variables, changing the ConfigMap does not magically rewrite the environment of an already-running process. A rollout/restart pattern is commonly needed.

Many deployment systems use checksum annotations to trigger a new Pod template when configuration changes.

---

## 34. Secrets

Secrets represent sensitive values such as:

- Passwords.
- API keys.
- Tokens.
- TLS material.

Example:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
stringData:
  username: appuser
  password: replace-me
```

Consume:

```yaml
env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: db-secret
        key: password
```

### Critical security concept

Base64 encoding is **not encryption**.

Do not treat this:

```bash
echo -n 'password' | base64
```

as a security mechanism.

Production secret strategy may include:

- Encryption at rest for cluster data.
- Strict RBAC.
- External secrets managers.
- Secret rotation.
- Short-lived identity/credentials.
- Avoiding secret leakage into logs, Git, command history, or image layers.

Never commit plaintext production Secrets into a public repository.

---

## 35. Resource Requests and Limits

Resource configuration strongly affects scheduling and runtime behavior.

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

### Requests

Scheduler uses requests when deciding whether a Pod fits on a node.

```text
request.cpu = 250m = 0.25 CPU
```

### Limits

Limits constrain resource use differently depending on resource type and runtime implementation.

A memory limit can lead to an OOM-related container termination if exceeded.

CPU limits generally throttle CPU rather than killing the process merely for sustained CPU use.

### Scenario

Node:

```text
Allocatable CPU = 4 cores
```

Existing Pod requests:

```text
3.8 CPU
```

New Pod request:

```text
500m
```

It may remain Pending because scheduler capacity is based on requests, even if momentary actual CPU usage is low.

Troubleshoot:

```bash
kubectl describe pod pending-pod
```

Look at scheduling events.

---

## 36. QoS Classes

Kubernetes classifies Pods into QoS classes based on resource configuration.

Common classes:

- Guaranteed.
- Burstable.
- BestEffort.

| Class | How a Pod qualifies | Operational meaning |
|---|---|---|
| Guaranteed | Every container has CPU and memory requests equal to limits | Strongest QoS classification; still not immune to all failure |
| Burstable | At least one request or limit exists, but Guaranteed rules are not met | Most normally sized applications |
| BestEffort | No container has CPU or memory requests or limits | Weakest protection under node pressure |

### Why it matters

Under node resource pressure, QoS and actual usage influence eviction decisions.

#### BestEffort example

No requests/limits:

```yaml
resources: {}
```

#### Better production practice

Define realistic resource requests for important workloads.

Do not blindly set CPU and memory values copied from another application. Measure your workload.

---

## 37. LimitRange and ResourceQuota

### LimitRange

Controls/defaults resource constraints within a namespace.

Example:

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: defaults
  namespace: dev
spec:
  limits:
    - type: Container
      defaultRequest:
        cpu: 100m
        memory: 128Mi
      default:
        cpu: 500m
        memory: 512Mi
```

### ResourceQuota

Limits aggregate namespace consumption.

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: dev
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "50"
```

### Scenario

Shared cluster with 20 teams:

Without quotas:

```text
one broken deployment scales to hundreds of Pods
→ consumes cluster capacity
→ harms other teams
```

With quotas and sensible permissions:

```text
blast radius is reduced
```

---

## 38. Scheduling

Scheduling answers:

> “Which node should this Pod run on?”

A Pod can stay Pending if no node satisfies all constraints.

Inspect:

```bash
kubectl describe pod mypod
```

Common scheduler-related reasons:

- Insufficient CPU.
- Insufficient memory.
- Untolerated taint.
- Node selector mismatch.
- Affinity rule impossible.
- PVC topology constraints.

Avoid jumping immediately to “scheduler is broken.” Usually the scheduler is explaining that your declared constraints cannot currently be satisfied.

---

## 39. nodeSelector and Node Affinity

### 39.1 nodeSelector

Simple exact label match.

Label node:

```bash
kubectl label node worker-1 workload=gpu
```

Pod:

```yaml
spec:
  nodeSelector:
    workload: gpu
```

### 39.2 Node affinity

More expressive.

Hard requirement:

```yaml
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
        - matchExpressions:
            - key: topology.kubernetes.io/zone
              operator: In
              values:
                - zone-a
                - zone-b
```

Preferred rule:

```yaml
preferredDuringSchedulingIgnoredDuringExecution:
  - weight: 100
    preference:
      matchExpressions:
        - key: workload
          operator: In
          values: ["compute"]
```

Think:

```text
required  = must satisfy
preferred = try to satisfy
```

---

## 40. Pod Affinity and Anti-Affinity

Pod affinity places workloads near matching Pods.

Pod anti-affinity separates workloads.

### Scenario: high availability

You run three API replicas and want to avoid placing all on the same node.

Conceptual anti-affinity:

```yaml
affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app: api
        topologyKey: kubernetes.io/hostname
```

Now replicas matching `app=api` should not coexist in the same topology domain for this required rule.

Be careful: strict anti-affinity can make Pods unschedulable in small clusters.

---

## 41. Taints and Tolerations

Taints repel Pods. Tolerations allow Pods to tolerate matching taints.

Taint node:

```bash
kubectl taint nodes gpu-node dedicated=gpu:NoSchedule
```

Pod toleration:

```yaml
tolerations:
  - key: dedicated
    operator: Equal
    value: gpu
    effect: NoSchedule
```

### Important

A toleration does **not** guarantee the Pod will run on that node.

To target it, combine with node affinity/selector.

Mental model:

```text
Taint: “keep ordinary Pods away”
Toleration: “this Pod is allowed here”
Affinity: “this Pod wants/must be here”
```

---

## 42. Topology Spread Constraints

Topology spread constraints distribute Pods across failure domains.

Examples of topology keys:

```text
kubernetes.io/hostname
topology.kubernetes.io/zone
```

Example:

```yaml
topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: topology.kubernetes.io/zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app: api
```

### Scenario

Six replicas, three zones.

Desired distribution:

```text
zone-a: 2
zone-b: 2
zone-c: 2
```

This reduces the chance that losing one zone removes every replica.

---

## 43. Priority and Preemption

PriorityClass assigns relative scheduling priority.

Example:

```yaml
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: business-critical
value: 100000
globalDefault: false
description: Critical business workloads
```

Use:

```yaml
spec:
  priorityClassName: business-critical
```

Higher-priority Pods can influence scheduling/preemption decisions.

Use carefully. If every team marks every workload critical, priority becomes meaningless.

---

## 44. Authentication, Authorization, and Admission

Kubernetes API request flow can be mentally modeled as:

```text
Request
  ↓
Authentication: Who are you?
  ↓
Authorization: Are you allowed?
  ↓
Admission: Is this request acceptable / should it be mutated?
  ↓
Persist object
```

### Authentication

Examples of mechanisms may include:

- Client certificates.
- OIDC tokens.
- ServiceAccount tokens.
- Cloud-provider identity integration.

### Authorization

Most commonly RBAC.

### Admission

Admission controllers can:

- Validate requests.
- Mutate requests.
- Enforce policies.

Examples include Pod Security Admission and webhook-based policy systems.

---

## 45. RBAC

RBAC = Role-Based Access Control.

Core objects:

```text
Role                → permissions within namespace
ClusterRole         → reusable/cluster-wide permission definition
RoleBinding         → grants Role/ClusterRole in a namespace
ClusterRoleBinding  → grants ClusterRole cluster-wide
```

### Read Pods in one namespace

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]
```

Bind:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: dev
subjects:
  - kind: User
    name: developer@example.com
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

Check permission:

```bash
kubectl auth can-i get pods -n dev
kubectl auth can-i delete deployments -n production
```

Impersonation for authorized administrators:

```bash
kubectl auth can-i get secrets \
  --as developer@example.com \
  -n production
```

### Principle of least privilege

Avoid broad permissions such as:

```text
resources: ["*"]
verbs: ["*"]
```

unless genuinely required and carefully controlled.

---

## 46. ServiceAccounts

ServiceAccounts provide identities for workloads interacting with Kubernetes or identity-integrated systems.

Create:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: report-worker
  namespace: reports
```

Use:

```yaml
spec:
  serviceAccountName: report-worker
```

Then grant only required permissions through RBAC.

### Scenario

A report worker only needs to list ConfigMaps in its namespace.

Do not run it with broad cluster-admin permissions.

### Token handling

Modern Kubernetes uses projected ServiceAccount token mechanisms for Pods. Design integrations around short-lived/scoped identity where possible rather than manually copying long-lived credentials.

If a Pod does not call the Kubernetes API and does not need an
identity-integrated token, set `automountServiceAccountToken: false` at the Pod
or ServiceAccount level. A ServiceAccount object grants no API permissions by
itself; RoleBindings or ClusterRoleBindings grant those permissions.

---

## 47. SecurityContext

SecurityContext controls security-related Pod/container settings.

Hardened example:

```yaml
spec:
  securityContext:
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: api
      image: example/api:1.0
      securityContext:
        runAsNonRoot: true
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop:
            - ALL
```

`runAsNonRoot` asks the runtime to reject a container that would run as root;
the image must declare or support a non-root user. A read-only root filesystem
also requires the application to direct legitimate writes to explicitly
writable volumes such as an `emptyDir`. Test the image under these constraints
instead of adding exceptions after deployment.

Other relevant controls can include:

- runAsUser.
- runAsGroup.
- fsGroup.
- SELinux options.
- Linux capabilities.
- Privileged mode.
- seccomp.

### Scenario

A web API has no need to alter kernel networking settings or write to the container root filesystem.

Therefore:

```text
root?             avoid if possible
privileged?       no
capabilities?     drop unnecessary capabilities
root filesystem?  read-only if app supports it
```

---

## 48. Pod Security Standards and Admission

Kubernetes Pod Security Standards define policy levels:

- **Privileged** — permissive.
- **Baseline** — prevents many known privilege escalations while remaining broadly compatible.
- **Restricted** — stronger hardening expectations.

Pod Security Admission can apply these standards using namespace labels.

Conceptual example:

```bash
kubectl label namespace production \
  pod-security.kubernetes.io/enforce=restricted
```

A rollout strategy often uses:

```text
audit → warn → enforce
```

so teams can discover violations before breaking workloads.

PodSecurityPolicy is an old removed mechanism; do not build new designs around it.

---

## 49. Image and Supply-Chain Security

Production image practices:

1. Use trusted registries.
2. Scan dependencies and images.
3. Patch base images.
4. Avoid running as root when unnecessary.
5. Prefer minimal images.
6. Pin versions/digests for deterministic deployments where appropriate.
7. Sign and verify artifacts when your supply-chain model requires it.
8. Use admission policy to block disallowed images or configurations.
9. Never bake secrets into images.
10. Protect CI/CD credentials.

Bad:

```dockerfile
ENV DB_PASSWORD=supersecret
```

The secret becomes part of image metadata/layers and distribution history.

Better: inject runtime credentials through an appropriate secret-management mechanism.

---

## 50. Horizontal, Vertical, and Cluster Autoscaling

Three different scaling questions:

```text
HPA: How many Pod replicas?
VPA: How much CPU/RAM per Pod?
Node/cluster autoscaler: How many worker nodes?
```

### 50.1 Horizontal Pod Autoscaler

Example:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60
```

For CPU-utilization-based scaling, correct CPU requests are important because utilization is related to requested capacity.

### 50.2 VPA

Vertical Pod Autoscaling is typically provided via an additional component rather than being a built-in core controller in the same way HPA is exposed.

It can recommend or adjust resource requests depending on configured mode.

Be careful combining automatic VPA resource updates and HPA on the same resource metric without understanding interaction.

### 50.3 Node autoscaling

If HPA creates more Pods but there is no room:

```text
HPA asks for 20 Pods
cluster fits 10
10 Pods Pending
```

A node autoscaler can add capacity when supported/configured.

### Event-driven autoscaling

Ecosystem tools such as KEDA can scale workloads based on event sources/metrics such as queues, depending on setup.

---

## 51. Disruptions and PodDisruptionBudget

Disruptions may be:

- Voluntary — node drain, maintenance, upgrades.
- Involuntary — hardware failure, kernel crash, network partition.

PodDisruptionBudget (PDB) helps limit voluntary disruption for selected Pods.

Example:

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: api
```

If there are three API replicas, voluntary disruption tries to respect at least two available replicas.

A PDB is not a guarantee against involuntary failures.

---

## 52. Rolling Updates, Rollbacks, Blue-Green, Canary

### Rolling update

Built into Deployment strategy.

Best for normal version changes when old/new versions can coexist safely.

### Rollback

```bash
kubectl rollout history deployment/api
kubectl rollout undo deployment/api
```

### Blue-green

Run two environments:

```text
blue  = current
 green = new
```

Switch Service routing when green is verified.

Simplified labels:

```yaml
## Service
selector:
  app: api
  version: green
```

Rollback = switch selector back to blue.

### Canary

Gradually send a portion of traffic to new version.

Kubernetes Service alone does not provide precise weighted HTTP traffic control. Canary routing is often implemented using ingress/gateway/service-mesh/deployment tooling.

### Before a rollout

Check:

- Readiness probe.
- Backward-compatible DB migrations.
- Resource availability.
- PDB implications.
- Observability.
- Rollback plan.

---

## 53. Observability

Three pillars:

```text
Metrics → What is happening numerically?
Logs    → What happened in application/system messages?
Traces  → Where did a request spend time across services?
```

Kubernetes additionally provides:

- Events.
- Object status.
- Conditions.
- Audit logs when configured.

A healthy production platform needs observability across:

```text
application
Pod/container
node
cluster control plane
network
storage
external dependencies
```

---

## 54. Logging

Basic logs:

```bash
kubectl logs pod-name
kubectl logs pod-name -c container-name
kubectl logs pod-name --previous
kubectl logs -f pod-name
```

Deployment logs by label:

```bash
kubectl logs -l app=api --all-containers=true
```

### Production logging architecture

Do not rely on manually running `kubectl logs` for every incident.

Typical model:

```text
containers write stdout/stderr
       ↓
node-level collector / logging pipeline
       ↓
central log backend
       ↓
search, dashboard, alerting
```

Good application logs include contextual fields such as:

- Timestamp.
- Severity.
- Request ID.
- Trace ID.
- Service name.
- Error code.

Never log secrets or access tokens.

---

## 55. Metrics

Common metric categories:

- Request rate.
- Error rate.
- Latency.
- CPU.
- Memory.
- Queue depth.
- Restart count.
- Pod readiness.
- Node pressure.
- Storage saturation.

Basic resource view when metrics infrastructure exists:

```bash
kubectl top nodes
kubectl top pods
```

`kubectl top` is not a full observability platform. It provides a useful current resource view.

Production commonly uses systems such as Prometheus-compatible collection and Grafana-style visualization, but exact stack choices vary.

---

## 56. Tracing

Distributed tracing follows a request across services.

Example:

```text
Browser
 ↓ trace-id=abc
API Gateway  20 ms
 ↓
Orders API  120 ms
 ↓
Payment API 900 ms  ← bottleneck
 ↓
Database     40 ms
```

Tracing is especially useful in microservices where logs from one Pod cannot explain the entire request path.

OpenTelemetry is a common instrumentation ecosystem.

---

## 57. Events

Events often explain scheduling, pulling, mounting, and restart problems.

View:

```bash
kubectl get events -A --sort-by=.metadata.creationTimestamp
```

Or:

```bash
kubectl describe pod mypod
```

Example event clues:

```text
FailedScheduling
FailedMount
FailedAttachVolume
ErrImagePull
BackOff
Unhealthy
```

Events can expire; important operational data should also reach your centralized monitoring/logging systems where appropriate.

---

## 58. Troubleshooting Methodology

Do not randomly restart everything.

Use a layered process.

### Step 1: Define symptom

Examples:

```text
Pod not starting
Service not reachable
Application returns 500
DNS fails
Node NotReady
PVC Pending
Rollout stuck
```

### Step 2: Determine scope

```text
one container?
one Pod?
one Deployment?
one node?
one namespace?
whole cluster?
```

### Step 3: Inspect desired and actual state

```bash
kubectl get ...
kubectl describe ...
kubectl get ... -o yaml
```

### Step 4: Inspect logs and events

```bash
kubectl logs ...
kubectl logs ... --previous
kubectl get events ...
```

### Step 5: Follow dependency chain

For web request:

```text
DNS
↓
external load balancer
↓
Ingress/Gateway
↓
Service
↓
EndpointSlice
↓
Pod readiness
↓
container port
↓
application
↓
database/dependency
```

### Step 6: Change one thing at a time

Record before/after state.

---

## 59. Common Failure Scenarios

### 59.1 ImagePullBackOff

Check:

```bash
kubectl describe pod pod-name
```

Possible causes:

- Wrong image name/tag.
- Registry unavailable.
- Private registry auth missing.
- Image does not exist.
- Network/DNS issue.

### 59.2 CrashLoopBackOff

Check:

```bash
kubectl logs pod-name --previous
kubectl describe pod pod-name
```

Possible causes:

- Bad config.
- Missing Secret.
- Application exception.
- Wrong command.
- Liveness probe killing app.
- Permission error.
- Dependency unavailable.

### 59.3 Pod Pending

```bash
kubectl describe pod pod-name
```

Possible causes:

- Insufficient CPU/memory.
- No matching node.
- Untolerated taint.
- PVC not bound.
- Strict affinity.

### 59.4 OOMKilled

Inspect:

```bash
kubectl describe pod pod-name
kubectl get pod pod-name -o yaml
```

Then investigate:

- Memory leak.
- Limit too low.
- Workload spike.
- Cache configuration.

Do not blindly raise the memory limit without understanding usage.

### 59.5 Service has no endpoints

```bash
kubectl get svc api -o yaml
kubectl get pods --show-labels
kubectl get endpointslices -l kubernetes.io/service-name=api
```

Most likely causes:

- Selector mismatch.
- Pods not Ready.
- Wrong namespace.

### 59.6 PVC Pending

```bash
kubectl describe pvc app-data
kubectl get storageclass
```

Possible causes:

- StorageClass missing.
- Provisioner broken.
- Capacity/topology issue.
- Unsupported access mode.

---

## 60. Debugging Pods, Services, DNS, and Nodes

### Temporary debugging Pod

```bash
kubectl run toolbox \
  --image=busybox:1.36 \
  --restart=Never \
  -it --rm -- sh
```

Then test:

```sh
nslookup api
wget -qO- http://api
```

### Debug using ephemeral containers

Modern Kubernetes supports `kubectl debug` workflows for troubleshooting containers/Pods/nodes depending on permissions and runtime support.

Examples may include:

```bash
kubectl debug -it pod-name --image=busybox:1.36 --target=app
```

Check your cluster version and security policy.

### Node checks

```bash
kubectl get nodes
kubectl describe node worker-1
kubectl get pods -A -o wide --field-selector spec.nodeName=worker-1
```

On self-managed Linux node:

```bash
systemctl status kubelet
journalctl -u kubelet
```

Runtime tooling may include `crictl` when configured.

---

## 61. Helm

Helm is a package manager/template system commonly used for Kubernetes applications.

A chart structure:

```text
mychart/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── _helpers.tpl
└── charts/
```

Install:

```bash
helm install myapp ./mychart
```

Upgrade:

```bash
helm upgrade myapp ./mychart
```

Values:

```yaml
replicaCount: 3

image:
  repository: example/api
  tag: "1.2.0"
```

Template:

```yaml
spec:
  replicas: {{ .Values.replicaCount }}
```

Override:

```bash
helm upgrade --install myapp ./mychart \
  --set replicaCount=5
```

### Good Helm practices

- Keep templates understandable.
- Use JSON schema validation where useful.
- Do not create a mini programming language inside templates.
- Separate environment-specific values.
- Review rendered output.

```bash
helm template myapp ./mychart
```

---

## 62. Kustomize

Kustomize customizes Kubernetes YAML without requiring a templating language for many common cases.

Base:

```text
base/
├── deployment.yaml
├── service.yaml
└── kustomization.yaml
```

Overlay:

```text
overlays/
├── dev/
│   └── kustomization.yaml
└── prod/
    └── kustomization.yaml
```

Base `kustomization.yaml`:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yaml
  - service.yaml
```

Production overlay:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - ../../base

replicas:
  - name: api
    count: 5
```

Render/apply:

```bash
kubectl kustomize overlays/prod
kubectl apply -k overlays/prod
```

Use Kustomize when you want clean base resources with structured overlays.

---

## 63. GitOps

GitOps uses Git as the source of declared cluster/application state and has automation reconcile the cluster toward that state.

Conceptual flow:

```text
Developer opens PR
      ↓
Review + merge
      ↓
Git repository desired state changes
      ↓
GitOps controller detects change
      ↓
Cluster reconciled
```

Popular ecosystem implementations include Argo CD and Flux.

### Benefits

- Change history.
- Peer review.
- Reproducibility.
- Drift detection/reconciliation.
- Easier environment promotion patterns.

### Security principle

CI should not necessarily need unrestricted direct cluster credentials if a pull/reconciliation model can be used.

### Repository model example

```text
clusters/
  production/
    apps/
      payments/
      orders/
  staging/
    apps/
      payments/
      orders/
```

Do not commit plaintext secrets merely because your cluster configuration lives in Git. Use an appropriate encrypted/external secret solution.

---

## 64. CRDs, Custom Resources, and Operators

### CustomResourceDefinition

CRD extends the Kubernetes API with your own resource kind.

Example conceptual resource:

```yaml
apiVersion: database.example.com/v1
kind: PostgreSQLCluster
metadata:
  name: orders-db
spec:
  replicas: 3
  storage: 100Gi
```

The CRD defines the schema/API for this custom kind.

### Operator

An Operator is a controller that understands domain-specific operational knowledge.

Conceptually:

```text
PostgreSQLCluster object says:
replicas: 3

Operator watches it
  ↓
creates StatefulSets/Services/Secrets/etc.
  ↓
monitors database state
  ↓
reconciles toward desired DB topology
```

Operators are useful when lifecycle management is more complicated than static manifests.

Examples of domain logic:

- Cluster bootstrap.
- Failover.
- Backup.
- Restore.
- Upgrade.
- Certificate rotation.

---

## 65. Admission Webhooks

Admission webhooks extend request validation/mutation.

Two broad types:

- Mutating admission webhook.
- Validating admission webhook.

### Example policy

Reject Deployments whose containers do not specify memory requests.

Flow:

```text
kubectl apply
  ↓
API server authenticates/authorizes
  ↓
admission webhook called
  ↓
allow or deny
```

### Operational warning

A broken admission webhook can block resource creation cluster-wide or namespace-wide depending on configuration.

Design for:

- High availability.
- Appropriate failure policy.
- Fast response time.
- Certificate rotation.
- Scope minimization.
- Observability.

---

## 66. Kubernetes API Patterns

Understanding Kubernetes becomes easier when you recognize API machinery concepts.

### 66.1 spec/status

```text
spec   = desired state
status = observed state
```

### 66.2 generation / observedGeneration

Controllers can use generation-related fields to indicate whether observed status corresponds to the latest desired specification.

### 66.3 ownerReferences

Objects can declare ownership relationships.

Example:

```text
Deployment owns ReplicaSet
ReplicaSet owns Pods
```

This supports garbage-collection behavior.

### 66.4 finalizers

Finalizers can delay object deletion until cleanup occurs.

Example scenario:

```text
Custom resource deleted
  ↓
operator sees deletion timestamp
  ↓
operator deletes external cloud resource
  ↓
operator removes finalizer
  ↓
object disappears
```

Stuck finalizers are a common reason resources remain in `Terminating` state.

### 66.5 watch

Controllers use watch/list-style mechanisms to efficiently react to resource changes.

---

## 67. etcd and Cluster State

For self-managed clusters, etcd is one of the most critical components.

It should be:

- Protected from unauthorized network access.
- Encrypted in transit.
- Backed up.
- Monitored.
- Hosted on reliable low-latency storage.

### Why etcd backup matters

If worker nodes disappear but the control-plane state survives, workloads can often be recreated.

If cluster state is lost and there is no recoverable configuration/backup, restoration is much harder.

Still, etcd backup is not the same as application database backup.

```text
etcd backup → Kubernetes cluster state
DB backup   → application data
```

You may need both.

---

## 68. Cluster Creation with kubeadm

`kubeadm` is a standard tool for bootstrapping Kubernetes clusters.

Typical high-level process:

```text
Prepare Linux nodes
  ↓
Install container runtime
  ↓
Install kubeadm/kubelet/kubectl
  ↓
kubeadm init on first control plane
  ↓
configure kubeconfig
  ↓
install CNI
  ↓
kubeadm join worker nodes
```

Example commands vary by Kubernetes version, operating system, runtime, network design, and repository configuration, so use the official installation guide for exact current commands.

### What kubeadm does not magically solve

You still need to design:

- HA control-plane endpoints.
- Load balancer.
- CNI.
- CSI/storage.
- Backups.
- Monitoring.
- Logging.
- Security hardening.
- Upgrades.
- Certificates.
- Node OS lifecycle.

---

## 69. High Availability Control Plane

A production self-managed control plane commonly avoids a single control-plane node.

Conceptual topology:

```text
              API Load Balancer
                 /    |    \
                /     |     \
        cp-1         cp-2         cp-3
        API          API          API
         │            │            │
         └──────── etcd quorum ─────┘
```

Key principles:

- Odd-numbered etcd membership is commonly used for quorum economics.
- Spread critical control-plane instances across failure domains where practical.
- Protect the API endpoint.
- Monitor certificate expiration.
- Test restore procedures.

HA is more than “three servers.” Failure-domain independence matters.

---

## 70. Upgrades and Version Skew

Kubernetes upgrades require planning.

High-level workflow for a self-managed cluster often includes:

1. Read release notes and deprecations.
2. Validate API usage.
3. Back up critical state.
4. Upgrade control-plane components in supported order.
5. Upgrade worker nodes gradually.
6. Drain nodes when required.
7. Validate system workloads and applications.
8. Monitor metrics/logs.

Useful commands:

```bash
kubectl get nodes
kubectl drain worker-1 --ignore-daemonsets
kubectl uncordon worker-1
```

Do not blindly upgrade multiple minor versions without checking the supported path and version-skew rules for the exact releases involved.

---

## 71. Backup and Disaster Recovery

A Kubernetes DR strategy has multiple layers.

### Layer 1: cluster configuration

Store declarative manifests/Helm/Kustomize/GitOps state in version control.

### Layer 2: cluster state

Self-managed control plane: etcd backup/restore planning.

### Layer 3: persistent application data

Database and volume backups.

### Layer 4: external dependencies

Examples:

- DNS.
- Certificates.
- Object storage.
- Secret managers.
- Cloud load balancers.
- Identity provider configuration.

### DR exercise

A backup is not proven until restoration is tested.

Example exercise:

```text
1. Provision empty recovery cluster.
2. Restore platform configuration.
3. Restore application data.
4. Recreate credentials safely.
5. Validate networking/DNS.
6. Run application smoke tests.
7. Measure RTO/RPO achieved.
```

---

## 72. Managed Kubernetes: EKS, AKS, GKE

Managed Kubernetes reduces some operational responsibility, especially around the control plane, but does not eliminate Kubernetes architecture decisions.

You still manage/design areas such as:

- Workload manifests.
- RBAC.
- Pod security.
- Node pools or compute modes.
- Networking.
- Storage classes.
- Ingress/Gateway.
- Autoscaling.
- Observability.
- Costs.
- Application backup.
- Upgrade compatibility.

Cloud mapping varies.

Conceptual examples:

```text
AWS → EKS
Azure → AKS
Google Cloud → GKE
```

Do not memorize cloud-specific commands before understanding the Kubernetes objects underneath them.

---

## 73. Multi-Tenancy

Multi-tenancy means multiple teams/workloads share infrastructure while requiring boundaries.

Possible isolation dimensions:

- Namespace.
- RBAC.
- NetworkPolicy.
- ResourceQuota.
- LimitRange.
- Pod Security Admission.
- Dedicated node pools.
- Separate clusters for stronger boundaries.

### Soft multi-tenancy

Teams trust each other and primarily need organization/resource fairness.

### Harder multi-tenancy

Untrusted tenants require stronger isolation assumptions. A separate cluster may be more appropriate depending on threat model.

Questions:

1. Can one tenant create privileged Pods?
2. Can one tenant read another tenant's Secrets?
3. Can Pods communicate across tenant boundaries?
4. Can one tenant consume all cluster capacity?
5. Can one tenant reach node/control-plane endpoints?

---

## 74. Production Readiness Checklist

### Workloads

- [ ] Use controllers, not naked Pods, for long-running applications.
- [ ] Configure readiness probes.
- [ ] Configure liveness probes only when restart is the correct recovery action.
- [ ] Use startup probes for genuinely slow startup.
- [ ] Define realistic resource requests.
- [ ] Define memory limits based on observed behavior and risk model.
- [ ] Handle SIGTERM/graceful shutdown.
- [ ] Set appropriate termination grace period.
- [ ] Avoid mutable image tags for controlled releases where reproducibility matters.
- [ ] Run multiple replicas for critical stateless services.

### Availability

- [ ] Spread replicas across nodes/failure zones where required.
- [ ] Configure PDB where voluntary-disruption protection is needed.
- [ ] Confirm capacity exists during rolling updates.
- [ ] Test node loss.
- [ ] Test dependency failure.

### Networking

- [ ] Service selectors are correct.
- [ ] TLS is configured for external traffic.
- [ ] NetworkPolicy follows least-access design.
- [ ] DNS dependency behavior is understood.
- [ ] Load balancer health checks are understood.

### Security

- [ ] Least-privilege RBAC.
- [ ] Dedicated ServiceAccounts where needed.
- [ ] No unnecessary privileged containers.
- [ ] `runAsNonRoot` where possible.
- [ ] Drop unnecessary capabilities.
- [ ] Use seccomp RuntimeDefault where appropriate.
- [ ] Secrets are not stored in plaintext Git.
- [ ] Image scanning/signing policy considered.
- [ ] Pod Security Admission configured.

### Storage

- [ ] StorageClass behavior understood.
- [ ] PVC deletion impact understood.
- [ ] Backups configured.
- [ ] Restore tested.
- [ ] Zone/failure-domain behavior understood.

### Operations

- [ ] Central logs.
- [ ] Metrics/alerts.
- [ ] Distributed tracing for relevant apps.
- [ ] Runbooks.
- [ ] Audit trail.
- [ ] Upgrade process documented.
- [ ] DR test performed.

---

## 75. Complete Production-Style Application Example

This example combines:

- Namespace.
- ConfigMap.
- Secret.
- Deployment.
- Service.
- HPA.
- PDB.
- NetworkPolicy.

> Replace example images and credentials before using anywhere real.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: shop
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: api-config
  namespace: shop
data:
  LOG_LEVEL: info
  DB_HOST: postgres.shop.svc.cluster.local
---
apiVersion: v1
kind: Secret
metadata:
  name: api-secret
  namespace: shop
type: Opaque
stringData:
  DB_PASSWORD: replace-in-real-secret-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api
  namespace: shop
automountServiceAccountToken: false
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: shop
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 0
      maxSurge: 1
  template:
    metadata:
      labels:
        app: api
        tier: backend
    spec:
      serviceAccountName: api
      terminationGracePeriodSeconds: 30
      securityContext:
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: api
          image: example/shop-api:1.0.0
          ports:
            - containerPort: 8080
          envFrom:
            - configMapRef:
                name: api-config
            - secretRef:
                name: api-secret
          resources:
            requests:
              cpu: 200m
              memory: 256Mi
            limits:
              memory: 512Mi
          securityContext:
            runAsNonRoot: true
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop: ["ALL"]
          startupProbe:
            httpGet:
              path: /health/startup
              port: 8080
            failureThreshold: 30
            periodSeconds: 5
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /health/live
              port: 8080
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: api
  namespace: shop
spec:
  selector:
    app: api
  ports:
    - name: http
      port: 80
      targetPort: 8080
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api
  namespace: shop
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60
---
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api
  namespace: shop
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: api
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-ingress
  namespace: shop
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 8080
```

### What this manifest still does not solve

Production architecture still needs decisions for:

- External routing.
- TLS.
- Database deployment/managed DB.
- Secret manager.
- Egress controls.
- Logging.
- Metrics.
- Alerting.
- Image policy.
- Backups.
- GitOps.
- CI/CD.
- SLOs.

This is a crucial mindset: **no single YAML file makes a platform production-ready.**

The sample ServiceAccount deliberately disables automatic API-token mounting
because the application shown does not call the Kubernetes API. The Secret is
a placeholder committed here only to demonstrate object wiring; create real
production values through the chosen secret-management workflow. The image
must support non-root execution and a read-only root filesystem, or you must
add narrowly scoped writable volumes for its legitimate paths.

---

## 76. Real-World Scenario Playbook

### Scenario 1: Deploy a stateless REST API

Requirements:

```text
3 replicas
internal Service
rolling updates
health checks
CPU-based autoscaling
```

Use:

```text
Deployment
Service
readiness/liveness/startup probes
resource requests
HPA
```

### Scenario 2: Run one log collector per node

Use:

```text
DaemonSet
```

Not Deployment with replicas equal to node count, because node membership changes.

### Scenario 3: Nightly cleanup at 2 AM

Use:

```text
CronJob
```

Make cleanup idempotent and define concurrency behavior.

### Scenario 4: Stateful database replicas

Likely components:

```text
StatefulSet
Headless Service
PVC templates
StorageClass
application-specific replication
backup system
```

Do not assume StatefulSet alone provides database replication.

### Scenario 5: GPU workloads only on GPU nodes

Use combination:

```text
node labels
node affinity/selectors
taints/tolerations
resource/device plugin mechanisms as required by platform
```

### Scenario 6: Production Pods should not all run on one node

Use:

```text
pod anti-affinity and/or topologySpreadConstraints
```

### Scenario 7: Team can deploy but not read Secrets

Use:

```text
namespace-scoped RBAC
```

Grant only required verbs/resources.

### Scenario 8: API should accept traffic only from frontend

Use:

```text
NetworkPolicy
```

assuming CNI enforces it.

### Scenario 9: Node maintenance

Workflow:

```bash
kubectl cordon worker-1
kubectl drain worker-1 --ignore-daemonsets
## maintenance
kubectl uncordon worker-1
```

Understand PDBs and local data before draining.

### Scenario 10: Deployment update is broken

```bash
kubectl rollout status deployment/api
kubectl get pods
kubectl describe pod <new-pod>
kubectl logs <new-pod>
kubectl rollout undo deployment/api
```

Then fix root cause before redeploying.

### Scenario 11: Service returns connection refused

Trace:

```text
Does Service exist?
↓
Does selector match Pods?
↓
Are EndpointSlices populated?
↓
Are Pods Ready?
↓
Is targetPort correct?
↓
Is app listening on expected interface/port?
↓
Does NetworkPolicy permit traffic?
```

### Scenario 12: Pod stuck Terminating

Investigate:

```bash
kubectl describe pod pod-name
kubectl get pod pod-name -o yaml
```

Look for:

- Finalizers.
- Node unreachable.
- Volume unmount issue.
- Long termination grace period.
- preStop hook.

Do not immediately force-delete important stateful Pods without understanding consequences.

### Scenario 13: HPA does not scale

Check:

```bash
kubectl get hpa
kubectl describe hpa
kubectl top pods
```

Then verify:

- Metrics system available.
- CPU requests exist for CPU utilization target.
- Target object supports scale.
- HPA conditions explain limitations.

### Scenario 14: Pods constantly OOMKilled

Steps:

1. Confirm reason/status.
2. Check memory graph.
3. Inspect application logs.
4. Review limit/request.
5. Profile heap/cache.
6. Check workload concurrency.
7. Fix leak or resize deliberately.

### Scenario 15: One zone fails

Production design should already have considered:

- Multi-zone nodes.
- Topology spread.
- Storage zone behavior.
- Load balancer behavior.
- Replica count.
- PDB limitations.

A PDB cannot recover Pods if every replica was placed in the failed zone.

---

## 77. Common Kubernetes Anti-Patterns

### 77.1 Naked Pods for applications

Bad:

```yaml
kind: Pod
```

for a production API that needs self-healing replicas.

Better:

```text
Deployment
```

### 77.2 `latest` image tag everywhere

Bad:

```yaml
image: example/api:latest
```

Difficult to know exactly what version is running.

Better controlled versioning:

```yaml
image: example/api:1.4.7
```

or digest pinning where desired.

### 77.3 No resource requests

Scheduler lacks realistic capacity signals.

### 77.4 Liveness probe checks every dependency

If database goes down and liveness depends on DB:

```text
DB failure
→ every API Pod fails liveness
→ all Pods restart repeatedly
→ incident becomes worse
```

Use readiness/dependency resilience carefully.

### 77.5 Storing secrets in ConfigMap

Use appropriate Secret/external secret mechanism.

### 77.6 One giant namespace

Makes RBAC, quotas, ownership, and policy harder.

### 77.7 Giving developers cluster-admin

Violates least privilege.

### 77.8 Using Kubernetes as a database backup mechanism

PVC is not backup.

### 77.9 Assuming restart fixes root cause

A restart may hide an issue temporarily. Observe before changing state when incident severity permits.

### 77.10 Overcomplicated Helm templates

If nobody can understand the rendered YAML, maintenance cost rises rapidly.

---

## 78. kubectl Master Cheat Sheet

Replace placeholders such as `<pod>` and `<node>` with real resource names.
Unless `-n NAMESPACE` is supplied, namespaced commands use the namespace in the
current context. `get`, `describe`, `logs`, `top`, `explain`, and `auth can-i`
are primarily observational; `apply`, `create`, `set`, `scale`, `rollout
restart`, `label`, and `delete` request changes. Before a mutating command,
confirm both `kubectl config current-context` and the namespace.

Common flags:

| Flag | Meaning | Typical output effect |
|---|---|---|
| `-n NAME` | Use one namespace | Limits a namespaced request |
| `-A` | Use all namespaces where supported | Adds namespace-wide results |
| `-o wide` | Add useful columns | More placement or address detail |
| `-o yaml` / `-o json` | Serialize the API object | Machine-readable desired and observed fields |
| `-l KEY=VALUE` | Select by label | Filters matching objects |
| `-w` | Watch changes | Keeps streaming updates until interrupted |

### Cluster

```bash
kubectl cluster-info
kubectl version
kubectl get nodes
kubectl get nodes -o wide
kubectl describe node <node>
```

### Namespaces

```bash
kubectl get ns
kubectl create ns dev
kubectl delete ns dev
kubectl get all -n dev
```

### Pods

```bash
kubectl get pods
kubectl get pods -A
kubectl get pods -o wide
kubectl get pods --show-labels
kubectl describe pod <pod>
kubectl logs <pod>
kubectl logs -f <pod>
kubectl logs <pod> -c <container>
kubectl logs <pod> --previous
kubectl exec -it <pod> -- sh
kubectl delete pod <pod>
```

### Workloads

```bash
kubectl get deploy
kubectl get rs
kubectl get sts
kubectl get ds
kubectl get jobs
kubectl get cronjobs
```

### Deployments

```bash
kubectl create deployment web --image=nginx
kubectl scale deployment web --replicas=5
kubectl set image deployment/web nginx=nginx:1.27
kubectl rollout status deployment/web
kubectl rollout history deployment/web
kubectl rollout undo deployment/web
kubectl rollout restart deployment/web
```

### Services

```bash
kubectl get svc
kubectl describe svc <service>
kubectl get endpointslices
kubectl port-forward svc/api 8080:80
```

### ConfigMaps and Secrets

```bash
kubectl get configmaps
kubectl describe configmap <name>
kubectl get secrets
```

Avoid printing production secret values casually.

### Storage

```bash
kubectl get pv
kubectl get pvc -A
kubectl get storageclass
kubectl describe pvc <name>
```

### Networking

```bash
kubectl get ingress -A
kubectl get networkpolicy -A
kubectl get svc -A
kubectl get endpointslices -A
```

### RBAC

```bash
kubectl get role -A
kubectl get rolebinding -A
kubectl get clusterrole
kubectl get clusterrolebinding
kubectl auth can-i get pods
kubectl auth can-i --list -n dev
```

### Resource usage

```bash
kubectl top nodes
kubectl top pods -A
```

### Events

```bash
kubectl get events -A --sort-by=.metadata.creationTimestamp
```

### Apply/delete

```bash
kubectl apply -f app.yaml
kubectl apply -f ./manifests/
kubectl delete -f app.yaml
```

### Output formats

```bash
kubectl get pod <pod> -o yaml
kubectl get pod <pod> -o json
kubectl get pods -o name
kubectl get pods -o wide
```

### JSONPath examples

```bash
kubectl get pods -o jsonpath='{.items[*].metadata.name}'
```

Node names:

```bash
kubectl get nodes -o jsonpath='{.items[*].metadata.name}'
```

### Field selectors

```bash
kubectl get pods --field-selector=status.phase=Running
kubectl get pods -A --field-selector=spec.nodeName=worker-1
```

### Labels

```bash
kubectl get pods -l app=api
kubectl label pod mypod environment=dev
kubectl label pod mypod environment-
```

### Explain

```bash
kubectl explain pod
kubectl explain pod.spec
kubectl explain deployment.spec.strategy
```

---

## 79. Reusable YAML Templates

These snippets are starting points, not complete production manifests. Replace
names, namespaces, images, ports, selectors, and resource values; then validate
the result with `kubectl apply --dry-run=server -f FILE` against the target
cluster when supported. Server-side dry-run performs API validation and
admission without persisting the object, but it cannot prove that an image,
dependency, or future rollout will work.

### 79.1 Namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: app
```

### 79.2 Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: app
  template:
    metadata:
      labels:
        app: app
    spec:
      containers:
        - name: app
          image: example/app:1.0.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              memory: 256Mi
```

### 79.3 Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: app
spec:
  selector:
    app: app
  ports:
    - port: 80
      targetPort: 8080
```

### 79.4 ConfigMap

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  LOG_LEVEL: info
```

### 79.5 Secret

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
stringData:
  API_KEY: replace-me
```

### 79.6 PVC

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-data
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

### 79.7 HPA

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60
```

### 79.8 PDB

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: app
spec:
  minAvailable: 1
  selector:
    matchLabels:
      app: app
```

### 79.9 Default-deny NetworkPolicy

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
```

Be sure to explicitly allow required DNS and application traffic before enforcing broad deny policies in a live environment.

---

## 80. Interview Questions and Answers

### Q1. What is Kubernetes?

A platform that manages containerized workloads through APIs and controllers, providing scheduling, scaling, self-healing, service discovery, configuration, storage integration, and related orchestration capabilities.

### Q2. What is a Pod?

The smallest deployable Kubernetes compute unit, containing one or more tightly coupled containers sharing the Pod's network and other resources.

### Q3. Pod vs Deployment?

```text
Pod        → running unit
Deployment → controller managing stateless Pod replicas and rollouts
```

### Q4. Deployment vs StatefulSet?

```text
Deployment  → interchangeable stateless replicas
StatefulSet → stable identity/order/storage-oriented replicas
```

### Q5. Deployment vs DaemonSet?

```text
Deployment → desired replica count
DaemonSet  → Pod on each eligible node
```

### Q6. Service vs Ingress?

```text
Service → stable network access to Pods
Ingress → HTTP/HTTPS routing to Services through an Ingress controller
```

### Q7. ConfigMap vs Secret?

```text
ConfigMap → non-sensitive config
Secret    → sensitive data object
```

Both still require correct cluster security and access control.

### Q8. Requests vs limits?

```text
requests → scheduling/resource reservation signal
limits   → runtime usage ceiling behavior
```

### Q9. Readiness vs liveness?

```text
readiness → should receive traffic?
liveness  → should container be restarted?
```

### Q10. What is CrashLoopBackOff?

A condition where a container repeatedly exits and Kubernetes/kubelet applies increasing restart backoff.

### Q11. What is ImagePullBackOff?

Repeated failure to pull a container image, commonly due to name/tag/auth/network issues.

### Q12. What does the scheduler do?

Chooses a suitable node for unscheduled Pods based on resources, constraints, policies, topology, and other scheduling inputs.

### Q13. What does kubelet do?

Runs on nodes and ensures Pods assigned to that node are executed according to their specifications.

### Q14. What is etcd?

Distributed key-value storage used for Kubernetes cluster state.

### Q15. What is CNI?

A standard/plugin model used by Kubernetes networking implementations to provide Pod networking.

### Q16. What is CSI?

A storage interface standard used by drivers integrating storage systems with Kubernetes.

### Q17. What is RBAC?

Role-Based Access Control used to define and bind permissions to users, groups, or ServiceAccounts.

### Q18. What is a ServiceAccount?

A Kubernetes identity used by workloads and automation, commonly combined with RBAC.

### Q19. What is a headless Service?

A Service with `clusterIP: None`, allowing DNS-based discovery of individual backend endpoints rather than normal virtual-IP load balancing.

### Q20. Why is a Pod Pending?

Typical reasons include insufficient resources, unsatisfied placement constraints, taints, or storage binding issues.

### Q21. What is a finalizer?

Metadata that prevents final deletion until a controller performs required cleanup and removes the finalizer.

### Q22. What is an Operator?

A Kubernetes controller implementing domain-specific lifecycle automation around custom or standard resources.

### Q23. What is HPA?

Horizontal Pod Autoscaler adjusts workload replica count based on metrics.

### Q24. What is PDB?

PodDisruptionBudget limits voluntary disruptions so a minimum availability level can be maintained for selected Pods.

### Q25. Why can a Service exist but traffic still fail?

Possible causes:

- Selector mismatch.
- No ready endpoints.
- Wrong target port.
- Application not listening.
- NetworkPolicy block.
- DNS issue.
- Ingress/Gateway misconfiguration.

### Q26. Why should application Pods handle SIGTERM?

During termination Kubernetes allows a grace period. Graceful shutdown reduces dropped requests, incomplete jobs, and data corruption.

### Q27. Why do requests matter to HPA?

CPU utilization targets are commonly computed relative to CPU requests, so missing or unrealistic requests can prevent sensible utilization-based scaling.

### Q28. Can NetworkPolicy protect traffic if the CNI does not implement it?

No. The policy object requires enforcement support from the networking implementation.

### Q29. Does a PVC equal a backup?

No. A PVC provides persistent storage attachment semantics, not an independent recovery copy.

### Q30. Does StatefulSet automatically make PostgreSQL/MySQL highly available?

No. Database-specific replication, failover, consistency, backup, and recovery logic are still required.

---

## 81. Hands-On Labs and Projects

### Lab 1 — Your first Pod

Goal:

```text
Run nginx and inspect it.
```

Tasks:

1. Create Pod YAML.
2. Apply it.
3. Describe it.
4. Read logs.
5. Exec into it.
6. Port-forward it.
7. Delete it.

### Lab 2 — Deployment self-healing

1. Create 3-replica Deployment.
2. List Pods.
3. Delete one Pod.
4. Watch replacement appear.

```bash
kubectl get pods -w
```

Observe the reconciliation loop.

### Lab 3 — Service discovery

1. Deploy API with 3 replicas.
2. Create ClusterIP Service.
3. Start temporary BusyBox Pod.
4. Resolve Service DNS.
5. Call Service repeatedly.

### Lab 4 — Broken Service selector

Intentionally set:

```yaml
selector:
  app: wrong
```

Diagnose using:

```bash
kubectl get pods --show-labels
kubectl get endpointslices
```

Then fix it.

### Lab 5 — ConfigMap rollout behavior

1. Create ConfigMap.
2. Consume through env variable.
3. Change ConfigMap.
4. Observe existing process environment.
5. Restart rollout.

Understand why configuration delivery strategy matters.

### Lab 6 — Secret

1. Create Secret.
2. Mount it as a file.
3. Read it from container.
4. Inspect RBAC exposure.
5. Delete test secret afterward.

### Lab 7 — Probes

Build a small application with endpoints:

```text
/health/live
/health/ready
/health/startup
```

Toggle readiness and watch Service endpoint behavior.

### Lab 8 — Resource scheduling

Create a Pod requesting more CPU than your node can provide.

Observe:

```bash
kubectl describe pod
```

Learn `FailedScheduling` events.

### Lab 9 — PVC

1. Create PVC.
2. Mount into Pod.
3. Write a file.
4. Recreate Pod with same PVC.
5. Verify data persists.

### Lab 10 — NetworkPolicy

1. Create frontend and API Pods.
2. Verify connectivity.
3. Apply default deny.
4. Observe failure.
5. Add explicit allow.
6. Verify recovery.

### Lab 11 — Rolling update

1. Deploy app v1.
2. Change image to v2.
3. Watch Pods.
4. Trigger a bad v3.
5. Diagnose.
6. Roll back.

### Lab 12 — HPA

1. Install/use cluster metrics support.
2. Deploy CPU-consuming sample.
3. Configure requests.
4. Create HPA.
5. Generate load.
6. Watch replica count.

### Project 1 — Three-tier application

Build:

```text
frontend
   ↓
API
   ↓
database
```

Requirements:

- Namespace.
- Deployment for frontend/API.
- Stateful database or external managed DB.
- Services.
- ConfigMaps.
- Secrets.
- Probes.
- Resources.
- PVC.
- NetworkPolicy.

### Project 2 — Production platform simulation

Add:

- Ingress/Gateway.
- TLS.
- HPA.
- PDB.
- topologySpreadConstraints.
- Helm or Kustomize.
- GitOps repository structure.
- Metrics dashboard.
- Central logs.
- Alert rules.

### Project 3 — Build an Operator

Create a simple CRD:

```yaml
kind: StaticWebsite
spec:
  image: ...
  replicas: ...
```

Write a controller that creates:

- Deployment.
- Service.

Then update child resources when the custom resource changes.

---

## 82. Learning Roadmap

### Phase 0 — Prerequisites

Learn:

- Linux CLI.
- Networking basics.
- DNS.
- HTTP/TLS.
- Docker/containers.
- YAML.
- Git.

Target time depends on your existing background.

### Phase 1 — Beginner Kubernetes

Master:

```text
cluster architecture
kubectl
Pods
Deployments
Services
ConfigMaps
Secrets
Namespaces
labels/selectors
```

You should be able to deploy and expose a stateless app.

### Phase 2 — Intermediate Kubernetes

Master:

```text
StatefulSets
DaemonSets
Jobs/CronJobs
probes
resources
PVC/StorageClass
Ingress/Gateway
NetworkPolicy
RBAC
ServiceAccounts
```

You should be able to run a multi-tier application safely.

### Phase 3 — Advanced workload engineering

Master:

```text
affinity
taints/tolerations
topology spread
priority
HPA
PDB
rollout strategies
securityContext
Pod Security Standards
```

You should be able to design for availability and controlled failure.

### Phase 4 — Production operations

Master:

```text
observability
incident troubleshooting
backup/restore
upgrades
GitOps
Helm/Kustomize
cluster autoscaling
policy enforcement
```

### Phase 5 — Platform engineering

Master:

```text
CRDs
controllers/operators
admission webhooks
multi-tenancy
managed Kubernetes
cost governance
SLOs
internal developer platforms
```

### Phase 6 — Cluster administration

For self-managed Kubernetes learn:

```text
kubeadm
control-plane HA
etcd
certificates
CNI
CSI
node OS/runtime
upgrades
DR
```

---

## 83. Glossary

**Admission Controller** — Component that can validate or mutate API requests after authentication/authorization and before persistence.

**Affinity** — Scheduling rules expressing desired/required placement relationships.

**Annotation** — Non-identifying metadata attached to Kubernetes objects.

**API Server** — Primary Kubernetes API endpoint and control-plane front door.

**CNI** — Container Network Interface ecosystem used for Pod networking implementations.

**ConfigMap** — Object for non-sensitive configuration data.

**Container Runtime** — Software responsible for executing containers, commonly containerd or CRI-O.

**Controller** — Reconciliation loop that observes resources and drives actual state toward desired state.

**CRD** — CustomResourceDefinition; extends the Kubernetes API with custom resource types.

**CSI** — Container Storage Interface for storage integrations.

**DaemonSet** — Workload controller that runs Pods across eligible nodes.

**Deployment** — Controller for stateless replicated workloads and rolling updates.

**Desired State** — Configuration declared in object specifications.

**EndpointSlice** — API object representing network endpoints backing Services.

**etcd** — Distributed key-value store holding Kubernetes cluster state.

**Finalizer** — Metadata mechanism that delays deletion until cleanup is completed.

**Gateway API** — Kubernetes networking API family for role-oriented traffic routing and gateway management.

**HPA** — Horizontal Pod Autoscaler.

**Ingress** — API object defining HTTP/HTTPS routing rules implemented by an Ingress controller.

**Job** — Controller for finite workloads that should run to completion.

**kubelet** — Node agent responsible for Pods assigned to a node.

**kube-scheduler** — Control-plane component assigning unscheduled Pods to nodes.

**kubeconfig** — Client configuration for clusters, users, and contexts.

**Label** — Selectable key/value metadata.

**LimitRange** — Namespace policy setting/defaulting resource constraints.

**Namespace** — Logical scope/group for namespaced resources.

**NetworkPolicy** — API object defining allowed Pod traffic where supported by networking implementation.

**Node** — Worker machine participating in a Kubernetes cluster.

**Operator** — Domain-specific Kubernetes controller implementing operational knowledge.

**PDB** — PodDisruptionBudget; limits voluntary disruption for selected Pods.

**Pod** — Smallest deployable Kubernetes compute unit.

**PVC** — PersistentVolumeClaim; storage request by a workload/user.

**PV** — PersistentVolume; Kubernetes representation of persistent storage capacity.

**RBAC** — Role-Based Access Control.

**ReplicaSet** — Controller maintaining a desired number of matching Pod replicas.

**ResourceQuota** — Namespace-level aggregate resource limits.

**Secret** — Kubernetes object for sensitive data.

**Service** — Stable network abstraction for a set of Pods/endpoints.

**ServiceAccount** — Workload identity object.

**StatefulSet** — Controller for workloads needing stable replica identity/storage semantics.

**StorageClass** — Describes a class of storage and dynamic provisioning behavior.

**Taint** — Node property that repels Pods without matching tolerations.

**Toleration** — Pod rule allowing it to schedule despite a matching node taint.

**Topology Spread Constraint** — Scheduling policy distributing Pods across topology domains.

**VPA** — Vertical Pod Autoscaler ecosystem component for resource request recommendations/updates.

---

## 84. Official References

Use official Kubernetes documentation as the final source of truth for version-specific behavior.

- [Kubernetes documentation](https://kubernetes.io/docs/)
- [Concepts](https://kubernetes.io/docs/concepts/)
- [Components](https://kubernetes.io/docs/concepts/overview/components/)
- [Workloads](https://kubernetes.io/docs/concepts/workloads/)
- [Services and networking](https://kubernetes.io/docs/concepts/services-networking/)
- [Storage](https://kubernetes.io/docs/concepts/storage/)
- [Security](https://kubernetes.io/docs/concepts/security/)
- [kubectl reference](https://kubernetes.io/docs/reference/kubectl/)
- [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/quick-reference/)
- [Kubernetes API reference](https://kubernetes.io/docs/reference/kubernetes-api/)
- [Tutorials](https://kubernetes.io/docs/tutorials/)

---

## Appendix A — Deep Mental Models

### A.1 Kubernetes is an API-driven database plus reconcilers

You can simplify Kubernetes into three ideas:

```text
API objects describe intent
etcd persists state
controllers reconcile reality
```

This explains why direct manual changes inside containers are usually temporary.

Example:

```bash
kubectl exec -it pod -- sh
## manually edit /app/config.ini
```

If the Pod is replaced, the manual change disappears unless represented through persistent/configuration mechanisms.

Infrastructure should normally be reproducible from declared state.

### A.2 Controllers manage populations, not pets

Traditional server mindset:

```text
server-web-01 is special
repair it carefully
```

Kubernetes workload mindset:

```text
web replica is replaceable
controller maintains desired population
```

This is why immutable container images and automated rollouts fit Kubernetes well.

### A.3 Stable abstraction over unstable implementation

Pods change:

```text
Pod IP: 10.1.4.23 disappears
new Pod IP: 10.1.7.18
```

Service stays:

```text
api.shop.svc.cluster.local
```

The Service is the stable abstraction.

### A.4 Scheduling uses declared needs

Scheduler cannot reliably infer your application's true future memory requirement.

You tell it:

```yaml
requests:
  memory: 512Mi
```

If you lie to the scheduler with unrealistic requests, cluster packing and reliability suffer.

### A.5 Readiness protects users; liveness attempts recovery

A database outage may mean your API cannot serve requests.

Readiness can say:

```text
Do not send user traffic here.
```

Liveness should only say:

```text
Restarting this process is likely to help.
```

Those are different questions.

---

## Appendix B — Troubleshooting Decision Trees

### B.1 Pod is not Running

```text
kubectl get pod
      │
      ├─ Pending
      │    └─ kubectl describe pod
      │         ├─ FailedScheduling → resources/affinity/taints
      │         └─ PVC issue → kubectl describe pvc
      │
      ├─ ImagePullBackOff
      │    └─ image/tag/registry credentials/network
      │
      ├─ CrashLoopBackOff
      │    ├─ kubectl logs
      │    ├─ kubectl logs --previous
      │    └─ probes/config/command/dependency
      │
      └─ Running but not Ready
           └─ inspect readiness probe and app logs
```

### B.2 Service unreachable

```text
Can DNS resolve Service?
  ↓ yes
Does Service exist?
  ↓ yes
Do selectors match Pods?
  ↓ yes
Do EndpointSlices contain ready Pod IPs?
  ↓ yes
Is targetPort correct?
  ↓ yes
Is application listening?
  ↓ yes
Does NetworkPolicy allow traffic?
  ↓ yes
Check application-level failure
```

### B.3 External HTTP unreachable

```text
DNS public record
  ↓
external LB address
  ↓
Ingress/Gateway controller healthy
  ↓
routing rule correct
  ↓
Service correct
  ↓
endpoints ready
  ↓
application healthy
```

### B.4 PVC Pending

```text
PVC
 ↓
StorageClass exists?
 ↓
Provisioner running?
 ↓
Requested access mode supported?
 ↓
Capacity/topology available?
 ↓
Events show root cause
```

---

## Appendix C — Example Microservices Architecture

```text
                         Internet
                            │
                     DNS / Load Balancer
                            │
                      Gateway / Ingress
                            │
             ┌──────────────┴──────────────┐
             │                             │
        frontend Service               API Service
             │                             │
       frontend Pods               API Deployment
                                           │
                            ┌──────────────┴──────────────┐
                            │                             │
                       Redis Service                DB Service
                            │                             │
                     Redis workload                 PostgreSQL
                                                    stateful/data
```

Cross-cutting concerns:

```text
RBAC
NetworkPolicy
Secrets
ConfigMaps
HPA
PDB
observability
backup
security policy
GitOps
```

This is how individual Kubernetes resources combine into a system.

---

## Appendix D — Design Questions Before Deploying Any Application

Ask the application owner:

### Runtime

- What command starts the application?
- Which port does it listen on?
- Does it bind to `0.0.0.0` rather than localhost only?
- How long does startup take?
- How does it handle SIGTERM?

### Health

- What endpoint indicates process health?
- What endpoint indicates traffic readiness?
- Which dependencies are required to serve traffic?

### Resources

- Typical CPU usage?
- Peak CPU?
- Typical/peak memory?
- Is memory usage bounded?
- Does workload require GPU or special hardware?

### Scaling

- Is the application stateless?
- Can requests go to any replica?
- What metric should trigger scaling?
- Are background jobs safe to duplicate?

### Data

- What must persist across Pod replacement?
- Is storage shared or per replica?
- What are backup/restore requirements?

### Network

- Who calls this application?
- What does it call?
- Is public ingress required?
- Which ports/protocols are necessary?

### Security

- Can it run as non-root?
- Does it need filesystem writes?
- Does it need Linux capabilities?
- What Secrets are required?
- Does it need Kubernetes API access?

### Availability

- Required replicas?
- Zone failure tolerance?
- Maximum downtime?
- Can old/new versions coexist during rollout?

Answering these questions makes Kubernetes manifest design much more rational.

---

## Appendix E — Kubernetes + CI/CD Example Flow

```text
Developer pushes code
       ↓
CI tests
       ↓
Build container image
       ↓
Scan image
       ↓
Push immutable version
       ↓
Update deployment configuration
       ↓
Git review/merge
       ↓
GitOps/Deployment system applies
       ↓
Kubernetes rolling update
       ↓
Readiness gates traffic
       ↓
Metrics/logs validate release
```

Example image strategy:

```text
registry.example.com/payments-api:2.3.17
```

Instead of repeatedly overwriting:

```text
registry.example.com/payments-api:latest
```

This creates a clearer deployment audit trail.

---

## Appendix F — Day-1 / Day-2 Operations

### Day 1

Initial deployment concerns:

- Cluster creation.
- Namespace structure.
- Networking.
- Storage.
- Security baseline.
- CI/CD.
- Monitoring.

### Day 2

Ongoing operations:

- Upgrades.
- Patch management.
- Capacity planning.
- Incident response.
- Cost optimization.
- Certificate rotation.
- Backup verification.
- Policy evolution.
- Node replacement.
- Performance tuning.

Kubernetes expertise is largely Day-2 expertise: understanding what happens after the first successful deployment.

---

## Appendix G — Ten Rules Worth Remembering

1. **Controllers, not naked Pods, for long-running production workloads.**
2. **Services give stable discovery over disposable Pods.**
3. **Readiness and liveness answer different questions.**
4. **Requests matter to scheduling and autoscaling.**
5. **A PVC is not a backup.**
6. **A Secret is not automatically safe merely because its kind is `Secret`.**
7. **RBAC should follow least privilege.**
8. **Spread replicas across failure domains if you expect failure-domain resilience.**
9. **Observe events/logs/status before randomly restarting things.**
10. **Treat Kubernetes manifests as software: version, review, test, and automate them.**

---

## Final Learning Challenge

Build a small e-commerce platform containing:

```text
frontend
catalog-api
orders-api
worker
postgres
redis
```

Your cluster configuration should include:

- Separate namespace.
- Deployments for stateless services.
- Stateful storage where needed.
- ClusterIP Services.
- Gateway or Ingress.
- ConfigMaps.
- Secrets.
- RBAC.
- Dedicated ServiceAccount for the worker.
- Resource requests and limits.
- Startup/readiness/liveness probes.
- HPA for API services.
- PDB for critical APIs.
- Topology spread constraints.
- NetworkPolicies.
- Central logging.
- Metrics and alerts.
- Backup/restore plan.
- Helm or Kustomize packaging.
- GitOps deployment.

Then simulate these failures one by one:

1. Delete an API Pod.
2. Kill one node.
3. Break the Service selector.
4. Deploy a bad image tag.
5. Cause an OOM.
6. Break readiness.
7. Deny network traffic accidentally.
8. Fill storage.
9. Drain a node.
10. Roll out a bad application version.
11. Restore from backup into a fresh environment.

If you can diagnose and recover each case while explaining **why Kubernetes behaves that way**, you have moved well beyond basic YAML knowledge into real Kubernetes engineering.

---

**End of Kubernetes Master Learning Handbook**
