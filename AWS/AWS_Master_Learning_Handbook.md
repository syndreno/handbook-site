# AWS Master Learning Handbook

> **A single-file, beginner-to-advanced AWS learning reference**
>
> Designed for learners, developers, DevOps engineers, cloud engineers, solution architects, system administrators, and interview/certification preparation.
>
> **Last reviewed:** August 2026  
> **Learning principle:** Do not memorize AWS as a list of services. Learn the problems each service solves, the trade-offs, and how services combine into architectures.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [Cloud Computing Foundations](#2-cloud-computing-foundations)
3. [AWS Global Infrastructure](#3-aws-global-infrastructure)
4. [AWS Accounts, Billing, and the Shared Responsibility Model](#4-aws-accounts-billing-and-the-shared-responsibility-model)
5. [Identity and Access Management](#5-identity-and-access-management)
6. [Multi-Account AWS: Organizations, Identity Center, and Control Tower](#6-multi-account-aws-organizations-identity-center-and-control-tower)
7. [Networking and Amazon VPC](#7-networking-and-amazon-vpc)
8. [Compute: EC2 and Related Services](#8-compute-ec2-and-related-services)
9. [Elastic Load Balancing and Auto Scaling](#9-elastic-load-balancing-and-auto-scaling)
10. [Storage: S3, EBS, EFS, FSx, and Archive](#10-storage-s3-ebs-efs-fsx-and-archive)
11. [Relational Databases: RDS and Aurora](#11-relational-databases-rds-and-aurora)
12. [NoSQL and Specialized Databases](#12-nosql-and-specialized-databases)
13. [Serverless Computing with Lambda](#13-serverless-computing-with-lambda)
14. [APIs and Application Integration](#14-apis-and-application-integration)
15. [Containers: ECR, ECS, Fargate, and EKS](#15-containers-ecr-ecs-fargate-and-eks)
16. [DNS, CDN, and Edge Networking](#16-dns-cdn-and-edge-networking)
17. [Security, Encryption, and Threat Detection](#17-security-encryption-and-threat-detection)
18. [Observability, Auditing, and Operations](#18-observability-auditing-and-operations)
19. [Infrastructure as Code](#19-infrastructure-as-code)
20. [CI/CD and Developer Services](#20-cicd-and-developer-services)
21. [Data Engineering and Analytics](#21-data-engineering-and-analytics)
22. [AI, ML, and Generative AI on AWS](#22-ai-ml-and-generative-ai-on-aws)
23. [Migration, Hybrid Cloud, and Data Transfer](#23-migration-hybrid-cloud-and-data-transfer)
24. [Reliability, Backup, and Disaster Recovery](#24-reliability-backup-and-disaster-recovery)
25. [AWS Well-Architected Framework](#25-aws-well-architected-framework)
26. [Cost Management and FinOps](#26-cost-management-and-finops)
27. [Common Architecture Patterns](#27-common-architecture-patterns)
28. [Service Selection Decision Guide](#28-service-selection-decision-guide)
29. [Hands-On Labs and Portfolio Projects](#29-hands-on-labs-and-portfolio-projects)
30. [Troubleshooting Playbook](#30-troubleshooting-playbook)
31. [Production Readiness Checklist](#31-production-readiness-checklist)
32. [Interview and Scenario Questions](#32-interview-and-scenario-questions)
33. [Learning Roadmap](#33-learning-roadmap)
34. [AWS CLI Cheat Sheet](#34-aws-cli-cheat-sheet)
35. [Glossary](#35-glossary)
36. [Official References](#36-official-references)

---

# 1. How to Use This Handbook

AWS is enormous. Nobody needs to memorize every service. A strong AWS engineer develops five abilities:

1. **Understand the requirement.**
2. **Choose the right service.**
3. **Design for failure.**
4. **Secure the design.**
5. **Control operational complexity and cost.**

For every service in this handbook, ask:

- What problem does it solve?
- Is it managed or self-managed?
- Is it regional, zonal, or global?
- How does it scale?
- How does it fail?
- How is it secured?
- How is it monitored?
- What does it cost?
- What alternatives exist?
- When should I *not* use it?

### Recommended study loop

```text
Learn concept
    ↓
Draw architecture
    ↓
Create service manually in Console
    ↓
Repeat with AWS CLI
    ↓
Automate with IaC
    ↓
Break it intentionally
    ↓
Observe logs/metrics
    ↓
Fix it
    ↓
Delete resources
```

### The three levels of AWS understanding

**Level 1 — Service awareness**

> “S3 stores objects. EC2 runs virtual machines. RDS runs relational databases.”

Useful, but not enough.

**Level 2 — Service configuration**

> “I can create an S3 bucket, EC2 instance, load balancer, and RDS instance.”

Better, but still not architecture.

**Level 3 — Service trade-offs**

> “For a stateless API with unpredictable traffic, I could use API Gateway + Lambda. For a long-running container with predictable load and custom runtime needs, ECS on Fargate may be a better fit.”

This is the level to target.

---

# 2. Cloud Computing Foundations

## 2.1 What is cloud computing?

Cloud computing means consuming computing resources—servers, storage, databases, networking, analytics, AI, and other capabilities—on demand instead of owning all physical infrastructure yourself.

Traditional data center:

```text
Buy servers → rack them → power them → install OS → patch → operate → replace hardware
```

Cloud:

```text
Request resources through API/console → use them → scale them → release them
```

## 2.2 Why companies use cloud

Major benefits include:

- On-demand capacity
- Faster provisioning
- Global reach
- Managed services
- Automation through APIs
- Elastic scaling
- Pay-as-you-use economics
- Easier experimentation
- Reduced physical infrastructure management

Cloud does **not** automatically mean:

- cheaper,
- secure,
- highly available,
- scalable,
- well designed.

Those results depend on architecture and operations.

## 2.3 IaaS, PaaS, SaaS, and serverless

### IaaS — Infrastructure as a Service

You manage more of the stack.

Example:

```text
EC2
├── Your application
├── Your runtime
├── Your packages
├── Your OS configuration
└── AWS manages physical infrastructure
```

Use when you need OS-level control, custom software, legacy workloads, or specialized host configurations.

### PaaS / managed platform

The provider manages more infrastructure.

Examples:

- RDS
- Elastic Beanstalk
- App Runner
- managed container services

### SaaS

You consume complete software.

Examples outside the AWS infrastructure context include CRM, email, collaboration, etc.

### Serverless

“Serverless” does not mean servers do not exist. It means you do not provision or manage the underlying servers directly.

Examples:

- AWS Lambda
- DynamoDB
- API Gateway
- EventBridge
- SQS
- Athena

The central trade-off is:

```text
More management control  ←──────────────→  Less infrastructure management
EC2              Containers               Serverless
```

## 2.4 Elasticity vs scalability

**Scalability**: the system can support increasing load.

**Elasticity**: the system can automatically add/remove capacity as demand changes.

Example:

- An EC2 instance resized from `t3.medium` to `m7i.large` = vertical scaling.
- An Auto Scaling Group adding 5 more instances = horizontal scaling.
- Lambda automatically increasing concurrent executions = elasticity.

## 2.5 Vertical vs horizontal scaling

### Vertical

Increase resources of one machine.

```text
2 CPU / 4 GB
     ↓
8 CPU / 32 GB
```

Pros:

- simple

Cons:

- upper hardware limit
- possible downtime
- one-machine failure risk

### Horizontal

Add machines.

```text
          Load Balancer
          /     |     \
       App1   App2   App3
```

Pros:

- high availability
- elastic scaling

Cons:

- application must be designed for distribution
- state management becomes important

## 2.6 Stateless vs stateful workloads

A **stateless** application instance does not depend on local memory/disk for persistent user state.

Good cloud pattern:

```text
Client
  ↓
Load Balancer
  ↓
Stateless App Instances
  ↓
Shared DB / Cache / Object Storage
```

Bad scalable pattern:

```text
Client A → App Server 1 stores session locally
Client A → App Server 2 → session missing
```

Solutions:

- external session store such as Redis
- token-based session where appropriate
- shared persistent data stores

## 2.7 CAP, consistency, and distributed systems

Distributed systems force trade-offs.

Learn these ideas before advanced AWS architecture:

- latency
- partial failure
- retries
- timeouts
- idempotency
- consistency
- replication
- quorum
- message ordering
- duplicate delivery
- eventual consistency
- backpressure

### Idempotency

An operation is idempotent if repeating it does not create unintended additional effects.

Example:

Bad payment consumer:

```text
Message delivered twice
→ charge customer twice
```

Better:

```text
message.payment_id = PAY123
consumer checks whether PAY123 was already processed
→ duplicate ignored
```

Retries without idempotency are dangerous.

---

# 3. AWS Global Infrastructure

AWS architecture is built around geographic layers.

## 3.1 Region

A Region is a geographic area containing multiple isolated Availability Zones.

Examples:

- Mumbai
- Singapore
- Frankfurt
- N. Virginia

Choose a Region based on:

- user latency
- data residency
- regulatory requirements
- service availability
- cost
- disaster-recovery strategy

Do not select a Region merely because a tutorial uses it.

## 3.2 Availability Zone (AZ)

An Availability Zone is an isolated location inside a Region.

A production system commonly spreads resources across multiple AZs.

```text
AWS Region
├── AZ-A
│   ├── Public subnet
│   └── Private subnet
├── AZ-B
│   ├── Public subnet
│   └── Private subnet
└── AZ-C
    ├── Public subnet
    └── Private subnet
```

### Key idea

**Multi-AZ** protects primarily against AZ-level failure.

**Multi-Region** protects against larger regional failures and can support global latency requirements.

## 3.3 Edge locations

Used by services such as CloudFront and Route 53 to bring content/network functionality closer to users.

## 3.4 Regional vs global services

Many AWS services are regional, but some have global or globally managed aspects.

Always ask:

> If I create this resource in Region A, does it automatically exist in Region B?

Usually, no.

## 3.5 Resource identifiers

AWS frequently uses ARNs:

```text
arn:partition:service:region:account-id:resource
```

Example shape:

```text
arn:aws:s3:::example-bucket
```

ARNs appear in:

- IAM policies
- CloudFormation
- logging
- cross-service permissions
- resource policies

---

# 4. AWS Accounts, Billing, and the Shared Responsibility Model

## 4.1 AWS account as a boundary

An AWS account is more than a login.

It is a useful boundary for:

- permissions
- security
- billing
- service quotas
- workloads
- blast radius

For a real company, prefer multiple accounts rather than placing everything into one giant account.

Example:

```text
Organization
├── Security
├── Log Archive
├── Shared Services
├── Development
├── Testing
└── Production
```

## 4.2 Root user

The root user is the account owner identity.

Treat it as a break-glass identity.

Recommended principles:

- enable MFA
- do not use root for everyday work
- do not create root access keys
- securely store recovery information
- use IAM Identity Center / roles for human access

## 4.3 Shared Responsibility Model

AWS security is a shared responsibility.

### AWS: security **of** the cloud

AWS manages areas such as:

- data center facilities
- physical hardware
- physical networking
- foundational virtualization infrastructure

### Customer: security **in** the cloud

Depending on the service, you manage areas such as:

- identities
- permissions
- application security
- data classification
- network rules
- operating-system patching for EC2
- encryption decisions
- backups and retention
- secure application code

The division changes depending on service abstraction.

Example:

### EC2

You manage:

- guest OS
- patches
- application
- security group
- IAM role
- data
- backup strategy

### RDS

AWS additionally manages much of:

- database host OS
- database installation
- certain patching and backup mechanisms

You still own:

- data
- schema
- users
- queries
- application credentials
- network access
- backup/retention choices

### Lambda

AWS manages much more of the execution infrastructure, but you still own:

- function code
- dependency security
- IAM permissions
- data
- configuration
- secret handling

## 4.4 Billing fundamentals

AWS charges can come from:

- compute duration
- allocated resources
- storage amount
- IOPS
- API requests
- data transfer
- NAT processing
- public IPv4
- logging volume
- snapshots
- managed service capacity

A small-looking architecture can become expensive due to hidden traffic or logging patterns.

## 4.5 Budget protection for learners

Before labs:

1. Configure a budget.
2. Enable billing alerts where applicable.
3. Tag resources.
4. Prefer disposable lab environments.
5. Delete unused resources.
6. Check:
   - NAT gateways
   - load balancers
   - RDS
   - EKS clusters
   - Elastic IP/public IPv4 use
   - snapshots
   - unattached EBS volumes
   - CloudWatch log retention
   - idle endpoints

---

# 5. Identity and Access Management

IAM is one of the most important AWS topics.

Think of access as:

```text
Who are you?
    ↓ Authentication
What may you do?
    ↓ Authorization
On which resource?
Under which conditions?
```

## 5.1 IAM identities

### IAM user

A long-lived identity inside one AWS account.

Avoid creating IAM users for normal workforce access when centralized/federated access is available.

### IAM group

Collection of IAM users.

Groups simplify permissions for user sets.

### IAM role

An identity that is **assumed** and provides temporary credentials.

Use roles for:

- EC2
- Lambda
- ECS tasks
- cross-account access
- federated users
- CI/CD systems

Example:

```text
EC2 Instance
    ↓ assumes
EC2AppRole
    ↓ allows
s3:GetObject
    ↓
S3 bucket
```

Never hard-code long-lived AWS access keys into application source code if a role can be used.

## 5.2 IAM policy structure

Typical identity policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::company-reports/*"
    }
  ]
}
```

Important fields:

- `Effect`
- `Action`
- `Resource`
- `Condition`
- sometimes `Principal` in resource-based policies

## 5.3 Least privilege

Grant only what is required.

Bad:

```json
"Action": "*",
"Resource": "*"
```

Better:

```text
Application needs to read invoices
→ allow only s3:GetObject
→ only for invoices bucket/prefix
```

## 5.4 Explicit deny

IAM evaluation is simplified as:

```text
Implicit deny by default
        ↓
An applicable Allow can grant access
        ↓
Applicable explicit Deny overrides Allow
```

## 5.5 Identity-based vs resource-based policies

### Identity-based

Attached to:

- users
- groups
- roles

### Resource-based

Attached directly to supported resources.

Examples:

- S3 bucket policy
- SQS queue policy
- KMS key policy
- SNS topic policy

## 5.6 Permission boundaries

A permissions boundary defines the maximum permissions an IAM identity can receive through identity policies.

Useful for delegated administration.

Scenario:

```text
Platform team lets developers create roles
BUT developers must never create admin-level roles.
```

A permissions boundary can cap those roles.

## 5.7 Service Control Policies (SCPs)

SCPs are organization-level guardrails.

Important:

> An SCP generally does not grant permissions. It limits what permissions can be effective.

Example:

```text
IAM role policy says: Allow s3:DeleteBucket
SCP says: Deny s3:DeleteBucket
Result: Denied
```

## 5.8 Temporary credentials and STS

AWS Security Token Service (STS) issues temporary credentials.

Role assumption:

```text
Caller
  ↓ sts:AssumeRole
Role
  ↓
Temporary Access Key + Secret + Session Token
```

Temporary credentials reduce the risk of long-lived secrets.

## 5.9 IAM best-practice mental model

For humans:

```text
Corporate IdP
   ↓
IAM Identity Center
   ↓
Permission set / role
   ↓
AWS Account
```

For applications:

```text
AWS compute resource
   ↓
IAM role
   ↓
Temporary credentials automatically supplied
```

For external workloads:

```text
External identity
   ↓
Federation / workload identity
   ↓
Temporary AWS credentials
```

## 5.10 Common IAM mistakes

- using root regularly
- sharing credentials
- hard-coding access keys
- attaching `AdministratorAccess` to everything
- forgetting resource policies
- forgetting KMS key policy
- misunderstanding SCPs
- overly broad wildcard permissions
- no MFA for privileged access
- stale unused credentials
- confusing authentication with authorization

## 5.11 Scenario: EC2 needs one S3 prefix

Requirement:

> A web server must read files under `s3://assets-prod/public/` but must not access any other objects.

Design:

```text
EC2
 ↓ instance profile
IAM Role
 ↓ s3:GetObject
arn:aws:s3:::assets-prod/public/*
```

Do not put access keys in `.env` just because it is easy.

---

# 6. Multi-Account AWS: Organizations, Identity Center, and Control Tower

## 6.1 Why multiple accounts?

Accounts provide stronger isolation than simply creating many VPCs or IAM roles in one account.

Common structure:

```text
Root
├── Security OU
│   ├── Security Tooling
│   └── Log Archive
├── Infrastructure OU
│   ├── Network
│   └── Shared Services
├── NonProd OU
│   ├── Development
│   └── Test
└── Prod OU
    ├── App-A-Prod
    └── App-B-Prod
```

## 6.2 AWS Organizations

Organizations helps with:

- account grouping into OUs
- consolidated billing
- policy-based governance
- organization-wide service integrations
- centralized account management

## 6.3 Organizational Unit (OU)

An OU is a logical grouping of accounts.

Examples:

- Production
- Development
- Security
- Sandbox

Policies can be applied at higher levels and inherited.

## 6.4 IAM Identity Center

Use IAM Identity Center to centralize workforce access.

Concepts:

- users/groups
- identity source
- permission sets
- account assignments

A permission set becomes account-specific role access for users/groups.

## 6.5 Control Tower

Control Tower helps establish a governed multi-account landing zone using prescriptive AWS practices.

Concepts:

- landing zone
- controls/guardrails
- Account Factory
- drift detection
- centralized governance

## 6.6 Enterprise scenario

Requirement:

- 20 application teams
- isolated production accounts
- centralized security
- central CloudTrail logs
- developers may use only approved regions

Possible design:

```text
AWS Organizations
├── SCP: deny unapproved regions
├── Central identity via IAM Identity Center
├── Security account
│   ├── GuardDuty delegation
│   └── Security Hub
├── Log Archive account
│   └── Organization CloudTrail → S3
└── App accounts
    └── team workloads
```

---

# 7. Networking and Amazon VPC

Networking is where many AWS learners struggle. Learn the packet path.

## 7.1 What is a VPC?

A Virtual Private Cloud is a logically isolated network in AWS.

Example CIDR:

```text
10.0.0.0/16
```

The VPC is then divided into subnets.

## 7.2 CIDR basics

`10.0.0.0/16` means a large address range.

Example subdivision:

```text
VPC: 10.0.0.0/16

AZ-A
├── Public:  10.0.1.0/24
└── Private: 10.0.11.0/24

AZ-B
├── Public:  10.0.2.0/24
└── Private: 10.0.12.0/24
```

Learn subnetting. It matters for:

- VPC design
- peering
- hybrid connectivity
- avoiding overlapping IP ranges

## 7.3 Public vs private subnet

A subnet is not “public” merely because you name it public.

A public subnet typically has a route to an Internet Gateway.

Example public route table:

```text
Destination      Target
10.0.0.0/16      local
0.0.0.0/0        igw-xxxx
```

A private application subnet usually does not route directly to an Internet Gateway.

Example:

```text
Destination      Target
10.0.0.0/16      local
0.0.0.0/0        nat-xxxx
```

## 7.4 Internet Gateway (IGW)

Allows communication between a VPC and the internet for appropriately configured resources.

An EC2 instance generally needs:

- route through IGW
- public IPv4/Elastic IP as applicable
- security group permission
- NACL permission
- service listening correctly

## 7.5 NAT Gateway

Use a NAT gateway when private resources need outbound connectivity without accepting unsolicited inbound internet connections.

Typical pattern:

```text
Private EC2
   ↓
Private Route Table
   ↓ 0.0.0.0/0
NAT Gateway in public subnet
   ↓
Internet Gateway
   ↓
Internet
```

Common uses:

- OS package downloads
- third-party APIs
- container image downloads when not using private endpoints

Cost warning:

> NAT gateway hourly and data processing charges can be significant.

Use VPC endpoints where appropriate to reduce unnecessary NAT traversal for AWS services.

## 7.6 Route tables

A route table tells traffic where to go.

Think:

```text
Destination → Target
```

Examples:

- local VPC route
- internet gateway
- NAT gateway
- transit gateway
- virtual private gateway
- VPC peering connection

Longest-prefix match is important in routing decisions.

## 7.7 Security groups

Security groups are virtual firewalls associated with resources such as EC2 network interfaces.

Key characteristic:

- **stateful**

If inbound traffic is allowed and accepted, return traffic is automatically tracked.

Example web SG:

```text
Inbound
443/TCP from 0.0.0.0/0

Outbound
DB port to DB security group
```

Better than allowing broad network ranges:

```text
App SG → DB SG on TCP 5432
```

## 7.8 Network ACLs

NACLs operate at the subnet level.

Key characteristics:

- stateless
- ordered rules
- allow and deny rules
- inbound and outbound evaluated separately

Use NACLs as coarse subnet-level controls, not as a replacement for correct security group design.

## 7.9 Security Group vs NACL

| Feature | Security Group | NACL |
|---|---|---|
| Scope | Resource/ENI | Subnet |
| Stateful | Yes | No |
| Allow | Yes | Yes |
| Deny rules | No explicit deny rules | Yes |
| Rule processing | Combined | Ordered |
| Common use | Primary resource firewall | Subnet guardrail |

## 7.10 VPC endpoints

VPC endpoints let private resources reach supported AWS services without traversing the public internet path in the usual way.

Types include gateway and interface endpoint patterns depending on service.

Scenario:

```text
Private EC2 → S3
```

Instead of:

```text
EC2 → NAT Gateway → public S3 endpoint
```

use an appropriate S3 VPC endpoint.

Benefits:

- security architecture
- reduced NAT dependency
- possible cost optimization
- private connectivity

## 7.11 VPC peering

Connect two VPCs privately.

Important:

- CIDR ranges must not overlap
- peering is not transitive

If A peers B and B peers C:

```text
A ↔ B ↔ C
```

does **not** automatically mean A can route to C.

## 7.12 Transit Gateway

For larger network topologies, Transit Gateway can act as a hub.

```text
            VPC-A
              |
VPC-B — Transit Gateway — VPC-C
              |
           VPN / DX
```

Good for:

- many VPCs
- centralized routing
- hybrid networks
- network segmentation

## 7.13 VPN and Direct Connect

### Site-to-Site VPN

Encrypted connection across internet-based transport.

Good for:

- quick hybrid connectivity
- backup path
- moderate bandwidth requirements

### Direct Connect

Dedicated network connectivity between your environment and AWS through supported locations/providers.

Good for:

- predictable network connectivity
- high-volume hybrid environments
- private enterprise connectivity

A resilient design may combine Direct Connect with backup VPN connectivity.

## 7.14 Elastic Network Interface (ENI)

Virtual network interface attached to resources.

Contains attributes such as:

- private IP
- security groups
- MAC address
- optional public addressing relationships

## 7.15 VPC Flow Logs

Capture metadata about IP traffic flows.

Useful for:

- denied traffic investigation
- source/destination analysis
- incident response
- network troubleshooting

Flow Logs are not full packet capture.

## 7.16 Networking troubleshooting order

When “EC2 cannot connect,” check:

```text
1. DNS resolves?
2. Application process listening?
3. Correct destination IP/port?
4. Source route table?
5. Destination route table?
6. Security groups?
7. NACLs?
8. IGW/NAT/TGW/peering/VPN path?
9. OS firewall?
10. Application TLS/auth?
```

## 7.17 Scenario: secure three-tier web app

```text
Internet
   ↓
Route 53
   ↓
CloudFront / WAF
   ↓
Application Load Balancer
   ↓
Private App Subnets (AZ-A/AZ-B)
   ↓
RDS in private DB subnets
```

Principles:

- only public entry point exposed
- application instances private
- database private
- security groups reference each other
- multi-AZ
- logs centralized
- secrets not stored in code

---


# 8. Compute: EC2 and Related Services

## 8.1 Amazon EC2

Amazon Elastic Compute Cloud provides virtual servers called **instances**.

An EC2 instance is defined by choices such as:

- AMI
- instance type
- networking
- storage
- IAM role
- security groups
- user data
- purchasing model

## 8.2 Amazon Machine Image (AMI)

An AMI is a template used to launch EC2 instances.

It can include:

- operating system
- preinstalled software
- configuration
- application dependencies

Use cases:

- golden images
- repeatable server provisioning
- disaster recovery
- Auto Scaling launch templates

## 8.3 Instance families

Instance families are optimized for different workload characteristics.

Conceptual categories:

- General purpose
- Compute optimized
- Memory optimized
- Storage optimized
- Accelerated computing / GPU
- Burstable

Scenario mapping:

```text
Small dev API              → general/burstable
CPU-heavy video encoding   → compute optimized
Large in-memory database   → memory optimized
High local storage I/O     → storage optimized
ML training                → GPU/accelerated
```

Do not select an instance only by vCPU count. Consider:

- memory
- network throughput
- EBS throughput
- CPU architecture
- local instance storage
- GPU/accelerator requirements
- licensing

## 8.4 Instance lifecycle

Common states:

```text
pending → running → stopping → stopped → terminated
```

Important:

- Stopping and starting can change certain host-level placement characteristics.
- Data on EBS persists if volume deletion settings allow it.
- Instance store is ephemeral.
- Terminated instances cannot simply be restarted.

## 8.5 User data

User data can bootstrap an instance.

Example:

```bash
#!/bin/bash
dnf update -y
dnf install -y nginx
systemctl enable nginx
systemctl start nginx
echo "Hello from EC2" > /usr/share/nginx/html/index.html
```

Good uses:

- install agents
- register service
- load configuration
- bootstrap application

Avoid putting plaintext secrets in user-data scripts.

## 8.6 Instance metadata

Applications can retrieve metadata from the instance metadata service.

Use modern secure metadata access practices such as IMDSv2 where appropriate.

Never assume metadata exposure is harmless. SSRF vulnerabilities can become credential theft if applications are insecurely designed.

## 8.7 EC2 purchasing models

### On-Demand

Pay for use without long-term commitment.

Best for:

- unpredictable workload
- short-term workloads
- development
- first migration before optimization

### Savings Plans / commitment-based discounts

Useful when compute usage is predictable and sustained.

### Reserved capacity/instance concepts

Useful in certain predictable scenarios depending on requirement and offering.

### Spot

Uses spare AWS capacity at a discount but may be interrupted.

Best for:

- batch jobs
- fault-tolerant workers
- CI runners
- rendering
- distributed processing

Bad fit:

- single non-redundant production database
- workload that cannot tolerate interruption

### Dedicated options

For workloads requiring dedicated hardware or specific licensing/compliance needs.

## 8.8 EC2 placement concepts

Placement groups can influence instance placement for specific performance or failure-isolation needs.

Examples:

- cluster
- spread
- partition

Learn them when dealing with HPC, low-latency clusters, or large distributed workloads.

## 8.9 Elastic IP

A static public IPv4 address that can be associated with supported AWS resources.

Do not use an Elastic IP as a substitute for resilient architecture.

A better web architecture usually uses:

```text
DNS → Load Balancer → multiple instances
```

rather than one server with one static IP.

## 8.10 Systems Manager instead of SSH

A modern operational pattern is:

```text
Operator
   ↓ IAM
Systems Manager Session Manager
   ↓
Private EC2
```

Benefits:

- no inbound SSH port required
- IAM-based access
- session logging options
- central control

## 8.11 EC2 use cases

Use EC2 when:

- you need OS control
- legacy software requires a VM
- custom networking/agents are needed
- application is not easily containerized/serverless
- you need specialized instance hardware

Avoid EC2 when:

- a managed service removes unnecessary operational work
- workload is simple event-driven code
- you do not want to patch/manage servers

## 8.12 Elastic Beanstalk

Elastic Beanstalk provides a managed application deployment experience over underlying AWS resources.

Good for:

- teams wanting platform convenience
- traditional web applications
- quick application environments without manually wiring every resource

It is not magic: understand the EC2, load balancer, Auto Scaling, IAM, and network resources behind it.

## 8.13 AWS Batch

Designed for batch computing jobs.

Examples:

- scientific processing
- media conversion
- large job queues
- nightly computation

Think:

```text
Job definition
   ↓
Job queue
   ↓
Compute environment
```

---

# 9. Elastic Load Balancing and Auto Scaling

## 9.1 Why load balancing?

Instead of:

```text
Client → Server-1
```

use:

```text
             ┌→ Server-1
Client → LB ─┼→ Server-2
             └→ Server-3
```

Benefits:

- distribute traffic
- health checks
- remove unhealthy targets
- TLS termination
- horizontal scaling
- multi-AZ architecture

## 9.2 Application Load Balancer (ALB)

Layer 7 HTTP/HTTPS load balancer.

Best for:

- web applications
- REST APIs
- host-based routing
- path-based routing
- container services
- HTTP-aware features

Example rules:

```text
/api/*      → API target group
/images/*   → image service
admin.example.com → admin target group
```

## 9.3 Network Load Balancer (NLB)

Layer 4 transport-level load balancing.

Good for:

- very high-performance TCP/UDP/TLS workloads
- static IP requirements in appropriate designs
- preserving source characteristics depending on configuration
- non-HTTP protocols

## 9.4 Gateway Load Balancer

Used for deploying/scaling network virtual appliances.

Examples:

- firewalls
- intrusion inspection
- third-party network appliances

## 9.5 Target group

A target group contains destinations such as:

- EC2 instances
- IP addresses
- Lambda in supported ALB scenarios

The load balancer sends traffic only to healthy targets based on configured health checks.

## 9.6 Health checks

Bad health check:

```text
GET /
returns 200 even when DB dependency is broken
```

Better:

```text
GET /health/ready
verifies application can safely serve traffic
```

But do not make health checks so expensive that they become load generators.

## 9.7 Auto Scaling Group (ASG)

An ASG maintains a desired number of EC2 instances.

Core values:

- minimum
- desired
- maximum

Example:

```text
min = 2
desired = 4
max = 10
```

## 9.8 Scaling policies

Examples:

- target tracking
- step scaling
- scheduled scaling
- predictive approaches where appropriate

Scenario:

```text
Target average CPU = 50%
traffic rises
→ ASG launches more instances
traffic drops
→ ASG scales in
```

CPU is not always the best metric.

For a web service, consider:

- requests per target
- queue depth per worker
- custom application metrics

## 9.9 Scale-out design requirement

Your application should be stateless or externalize state.

Bad:

```text
User uploads file to /tmp on App-1
next request goes to App-2
file missing
```

Better:

```text
User upload → S3
metadata → database
all app nodes can access it
```

---

# 10. Storage: S3, EBS, EFS, FSx, and Archive

Storage selection starts by asking:

> Do I need object, block, or file storage?

## 10.1 Object vs block vs file

### Object storage

```text
Bucket
└── object key → object data + metadata
```

Use:

- files
- media
- backups
- logs
- static assets
- data lakes

AWS: **Amazon S3**

### Block storage

Looks like a disk volume attached to a server.

Use:

- operating-system disk
- database volumes
- application filesystem on one host

AWS: **Amazon EBS**

### File storage

Shared hierarchical filesystem.

Use:

- shared Linux directories
- legacy file-based applications
- shared application content

AWS: **Amazon EFS**, **Amazon FSx** families

---

## 10.2 Amazon S3

S3 is object storage.

Core concepts:

- bucket
- object
- key
- prefix
- metadata
- version ID
- storage class
- lifecycle rule
- access point

Example:

```text
s3://company-invoices/2026/08/invoice-123.pdf
```

Bucket:

```text
company-invoices
```

Key:

```text
2026/08/invoice-123.pdf
```

## 10.3 S3 is not a normal filesystem

Do not assume:

- POSIX locking
- block-level updates
- traditional folder semantics

“Folders” in S3 interfaces are based on key prefixes.

## 10.4 S3 storage classes

Choose based on access pattern, retrieval needs, and cost.

Conceptual categories:

- frequently accessed
- infrequent access
- intelligent tiering
- archive
- specialized single-zone options
- high-performance/specialized classes depending on workload

Do not memorize prices. Prices and available classes can evolve.

## 10.5 S3 Versioning

Versioning preserves multiple versions of objects.

Useful for:

- accidental overwrite recovery
- accidental deletion recovery
- rollback

Example:

```text
report.csv
├── version A
├── version B
└── version C
```

Versioning is not a complete backup strategy by itself.

## 10.6 S3 Lifecycle

Lifecycle policies can:

- transition objects to cheaper classes
- archive older data
- expire/delete old data
- handle noncurrent versions

Scenario:

```text
Application logs
0–30 days      → Standard
31–90 days     → lower-cost tier
> 365 days     → archive or delete based on policy
```

## 10.7 S3 encryption

Common concepts:

- server-side encryption
- AWS-managed keys
- KMS-backed keys
- client-side encryption where required

KMS adds key-control and audit capabilities but can introduce:

- KMS API costs
- key-policy complexity
- service quotas

## 10.8 S3 access control

Use layers such as:

- IAM policies
- bucket policies
- Block Public Access
- access points
- KMS policies
- VPC endpoint policies

Avoid making buckets public unless there is a deliberate requirement.

For public websites/content, often use:

```text
Private S3
   ↓
CloudFront
   ↓
Internet
```

rather than exposing the bucket directly.

## 10.9 Presigned URL

A presigned URL gives time-limited access to an object.

Scenario:

```text
Private invoice in S3
     ↓
Backend creates 5-minute presigned URL
     ↓
Authorized user downloads object
```

This avoids making the bucket public.

## 10.10 S3 replication

Can replicate objects for scenarios such as:

- compliance
- regional copy
- separate-account backup patterns
- data locality

Replication configurations commonly depend on versioning and permissions.

## 10.11 S3 event notifications

Object events can trigger downstream processing.

Example:

```text
Invoice PDF uploaded to S3
   ↓
Event
   ↓
Lambda
   ↓
extract metadata
   ↓
DynamoDB / RDS
```

For complex event routing, EventBridge can also be considered.

---

## 10.12 Amazon EBS

EBS provides block storage for EC2.

Common use:

```text
EC2
├── root EBS
└── data EBS
```

Important concepts:

- volume type
- IOPS
- throughput
- size
- AZ placement
- snapshots
- encryption

EBS volumes are generally tied to an Availability Zone.

## 10.13 EBS snapshots

Point-in-time backups stored using AWS-managed snapshot infrastructure.

Use for:

- backup
- volume recreation
- AMI workflows
- migration

Snapshots are incremental after the first snapshot in normal workflows, but reason about them as recoverable backup artifacts rather than files you manually edit.

## 10.14 EBS vs instance store

### EBS

- persistent block storage
- independently manageable
- snapshot capable

### Instance store

- physically attached ephemeral storage on supported instance types
- very fast for appropriate workloads
- data does not provide the same persistence guarantees as EBS

Good instance-store use:

- cache
- temporary scratch data
- replicated distributed systems where losing one node’s local data is acceptable

Bad:

- only copy of critical business data

---

## 10.15 Amazon EFS

Managed shared file storage for Linux-oriented workloads.

Architecture:

```text
        EFS
       / | \
    EC2 EC2 ECS
```

Use cases:

- shared web content
- shared application files
- home directories
- container workloads needing shared file storage

## 10.16 Amazon FSx

Managed file system families for workloads requiring specific filesystem technologies.

Use cases may include:

- Windows file shares
- high-performance computing
- enterprise NAS-style workloads
- specialized filesystem compatibility

## 10.17 Storage selection table

| Requirement | Typical Choice |
|---|---|
| Static images, PDFs, backups | S3 |
| EC2 OS disk | EBS |
| Shared Linux filesystem | EFS |
| Windows/shared enterprise filesystem | FSx family |
| Long-term archive | S3 archive class |
| Temporary ultra-fast local scratch | EC2 instance store |

---

# 11. Relational Databases: RDS and Aurora

## 11.1 Relational database fundamentals

Choose a relational database when your data benefits from:

- structured schema
- SQL
- joins
- transactions
- relational integrity
- mature ecosystem

## 11.2 Amazon RDS

RDS is a managed relational database service.

Supported engine families include common relational engines such as:

- PostgreSQL
- MySQL
- MariaDB
- SQL Server
- Oracle
- Db2

AWS manages many operational tasks such as:

- infrastructure provisioning
- certain patching
- backups
- failure detection
- managed recovery

You still own:

- schema
- query optimization
- indexes
- data
- database access
- application behavior
- capacity and architecture choices

## 11.3 RDS deployment pattern

```text
App instances
     ↓
Private DNS endpoint
     ↓
RDS
```

Best practice:

- DB in private subnets
- no broad public exposure
- security group allows only application tier
- secrets managed securely

## 11.4 Multi-AZ

Multi-AZ is primarily about **availability/failover**, not simply read scaling.

Conceptual pattern:

```text
Primary DB in AZ-A
      ||
 synchronous standby
      ||
Standby DB in AZ-B
```

If primary fails, managed failover can occur.

Do not build a production HA database and assume a backup snapshot alone provides the same availability.

## 11.5 Read replicas

Read replicas are primarily for **read scaling** and can support other patterns such as DR depending on engine/configuration.

```text
            ┌→ Read Replica 1
Primary DB ─┼→ Read Replica 2
            └→ Read Replica 3
```

Writes:

```text
App → Primary
```

Reads:

```text
Reporting/API → Replica
```

Replication can be asynchronous, so stale reads are possible.

### Multi-AZ vs read replica

| Goal | Multi-AZ | Read Replica |
|---|---|---|
| High availability | Yes | Not its primary purpose |
| Read scaling | Depends on deployment type; classic standby does not serve reads | Yes |
| Synchronous standby concept | Yes in relevant deployment | Usually async replication |
| Separate read endpoint | Depends | Yes |

## 11.6 Backups vs replicas

Replica != backup.

Why?

If application accidentally executes:

```sql
DELETE FROM customers;
```

that deletion can replicate.

Backups/PITR are needed for logical recovery.

## 11.7 RDS storage and performance

Watch:

- IOPS
- throughput
- storage queue depth
- DB connections
- CPU
- memory
- query latency
- locks
- replication lag

A database performance problem is not always solved by “bigger instance.”

Often the real issue is:

- missing index
- N+1 queries
- full table scans
- poor schema
- connection leak
- lock contention

## 11.8 RDS Proxy

RDS Proxy can help manage database connections for supported scenarios.

Particularly useful when many short-lived application connections occur, such as from highly elastic compute.

Pattern:

```text
Many Lambda executions
        ↓
     RDS Proxy
        ↓
       RDS
```

## 11.9 Amazon Aurora

Aurora is a managed relational engine compatible with MySQL/PostgreSQL ecosystems.

Reasons teams choose Aurora:

- managed high availability
- distributed storage architecture
- read scaling
- managed replication
- cloud-native relational architecture
- serverless options in supported configurations

Do not choose Aurora only because it sounds “better.” Compare:

- workload
- engine compatibility
- feature needs
- cost
- migration constraints
- operational model

## 11.10 Scenario: e-commerce database

Requirements:

- transactional orders
- customer data
- SQL joins
- high availability
- read-heavy product browsing

Possible design:

```text
Application
├── writes → RDS/Aurora writer
└── reads  → read replicas
```

Add:

- Multi-AZ
- automated backups
- encryption
- Secrets Manager
- DB monitoring
- connection management

---

# 12. NoSQL and Specialized Databases

## 12.1 Why NoSQL?

NoSQL is useful when:

- access patterns are known
- huge horizontal scale is required
- flexible item structure helps
- low-latency key-based access matters
- relational joins are not central

NoSQL does not mean “no schema thinking.” It often requires **more deliberate access-pattern design**.

---

## 12.2 DynamoDB

DynamoDB is a managed key-value/document database.

Core concepts:

- table
- item
- attribute
- partition key
- sort key
- secondary index
- capacity mode
- streams
- TTL
- global tables

## 12.3 Primary key

### Simple primary key

```text
Partition Key
user_id = U123
```

### Composite primary key

```text
Partition Key + Sort Key
customer_id = C100
order_time  = 2026-08-13T10:00:00
```

This enables multiple related items under the same partition key.

## 12.4 Partition key design

Bad key:

```text
status = "OPEN"
```

If almost every item uses the same value, traffic can concentrate.

Better keys distribute access.

DynamoDB design starts with queries:

> What exact requests must the application support?

Then design keys.

## 12.5 Query vs Scan

**Query** uses key/index conditions and is the preferred targeted access pattern.

**Scan** reads through many/all items and can become expensive/slow at scale.

Beginner anti-pattern:

```text
Store arbitrary attributes
→ later scan entire table for every API request
```

## 12.6 Global Secondary Index (GSI)

Allows querying using an alternate key.

Example base table:

```text
PK: customer_id
SK: order_id
```

Need query:

```text
all orders by status
```

Possible GSI:

```text
GSI PK: status
GSI SK: created_at
```

Indexes have cost and design implications.

## 12.7 DynamoDB Streams

Streams capture item-level changes for event-driven processing.

Example:

```text
Order updated
   ↓
DynamoDB Stream
   ↓
Lambda
   ↓
send notification / update search index
```

## 12.8 TTL

Automatically expires items based on configured time-to-live attributes.

Use cases:

- sessions
- temporary tokens
- expiring caches
- short-lived workflow state

Do not treat TTL expiration timing as a precise scheduler.

## 12.9 Global tables

Provide multi-Region replication capabilities.

Use for:

- globally distributed low-latency applications
- regional resilience patterns

But multi-Region active-active data introduces harder questions:

- conflict behavior
- user routing
- business invariants
- regional failover
- write locality

## 12.10 DynamoDB scenario

Shopping cart:

```text
PK = USER#123
SK = CART#ACTIVE
items = [...]
expires_at = ...
```

Why DynamoDB may fit:

- predictable key lookup
- massive scale
- serverless operations
- low latency

Why RDS may fit better:

- complex joins
- ad hoc relational reporting
- strong relational constraints across many entities

---

## 12.11 ElastiCache

Managed in-memory caching service.

Common engines/technologies depend on current AWS offerings, but the important pattern is:

```text
App
 ↓
Cache
 ↓ cache miss
Database
```

Use cases:

- session cache
- hot query results
- rate limiting
- leaderboards
- frequently accessed objects

Caching challenges:

- expiration
- invalidation
- stale data
- cache stampede
- memory sizing

## 12.12 DocumentDB

Managed document database designed for document-oriented workloads with MongoDB-compatible API characteristics.

Evaluate actual compatibility requirements before migration; “compatible API” is not always identical behavior for every MongoDB feature.

## 12.13 Neptune

Graph database for relationship-heavy use cases.

Examples:

- fraud networks
- social graphs
- recommendation relationships
- knowledge graphs

## 12.14 Keyspaces

Managed Apache Cassandra-compatible database for Cassandra-style workloads.

## 12.15 Time-series databases

Use time-series-oriented services when access patterns center on timestamped measurements.

Examples:

- IoT metrics
- application telemetry
- industrial measurements

## 12.16 Database selection shortcut

```text
Need SQL + transactions + joins?
    → RDS / Aurora

Need massive key-value access?
    → DynamoDB

Need cache / sub-ms hot data?
    → ElastiCache

Need graph relationships?
    → Neptune

Need document model with MongoDB-style compatibility?
    → DocumentDB

Need analytics warehouse?
    → Redshift
```

---

# 13. Serverless Computing with Lambda

## 13.1 What is Lambda?

Lambda runs code in managed execution environments without requiring you to provision servers.

Typical triggers:

- API Gateway
- S3
- SQS
- EventBridge
- DynamoDB Streams
- scheduled events
- other AWS service events

## 13.2 Lambda execution model

Conceptually:

```text
Event
  ↓
Lambda service
  ↓
Execution environment
  ↓
Handler
  ↓
Result / side effect
```

## 13.3 Handler

Example Python:

```python
def lambda_handler(event, context):
    name = event.get("name", "world")
    return {
        "statusCode": 200,
        "body": f"Hello {name}"
    }
```

## 13.4 Cold vs warm start

A new execution environment may require initialization.

```text
Cold:
create environment
→ initialize runtime
→ load code
→ handler

Warm:
reuse environment
→ handler
```

Reduce avoidable cold-start overhead by:

- minimizing package size
- avoiding unnecessary startup work
- choosing appropriate memory/runtime
- using provisioned concurrency only when requirements justify it

## 13.5 Lambda memory and CPU

Lambda CPU allocation is related to configured memory.

Performance tuning is not simply “choose minimum memory to save money.”

Sometimes:

```text
more memory → more CPU → shorter duration → similar/lower total cost
```

Benchmark.

## 13.6 Timeout

Functions have maximum execution duration limits according to Lambda function capabilities.

Do not use Lambda for endlessly running daemon processes.

Choose containers/EC2 for long-running processes when appropriate.

## 13.7 Concurrency

Concurrency roughly represents simultaneous executions.

Important concepts:

- account/service quotas
- reserved concurrency
- provisioned concurrency
- downstream capacity

If Lambda scales faster than your database:

```text
Traffic spike
→ 5,000 Lambda executions
→ 5,000 DB connections
→ database overload
```

Serverless scaling must respect downstream limits.

## 13.8 Retries

Different event sources have different retry/delivery behaviors.

Always design for:

- duplicate events
- partial failures
- poison messages
- dead-letter handling
- idempotency

## 13.9 Lambda + SQS

Excellent worker pattern:

```text
Producer
   ↓
SQS
   ↓
Lambda workers
   ↓
Database/API
```

Benefits:

- buffering
- decoupling
- controlled processing
- retry model
- DLQ support

## 13.10 Lambda environment variables

Use for non-secret configuration.

For secrets:

- Secrets Manager
- Parameter Store SecureString where appropriate
- IAM-based access

Do not store production secrets in source.

## 13.11 Lambda in a VPC

Only attach Lambda to VPC networking when necessary.

Use when Lambda must reach:

- private RDS
- private internal services
- VPC-only resources

Consider egress requirements and VPC endpoints/NAT design.

## 13.12 Lambda layers and dependencies

Layers can share common code/dependencies, but be mindful of:

- versioning
- deployment coupling
- package size
- runtime compatibility

Container image packaging is another option for supported Lambda workloads.

## 13.13 When to use Lambda

Good:

- event processing
- small APIs
- automation
- file processing
- scheduled jobs
- queue consumers
- webhooks
- glue logic

Less ideal:

- very long-running compute
- stateful daemon
- workload requiring custom persistent host behavior
- constant heavy compute where another model may be more cost effective

---

# 14. APIs and Application Integration

Modern cloud applications should avoid tight coupling.

Bad:

```text
Order API
 ├→ Billing API synchronously
 ├→ Email API synchronously
 ├→ Analytics API synchronously
 └→ Inventory API synchronously

One downstream failure may break order creation.
```

Better:

```text
Order API
   ↓
OrderCreated event
   ↓
Event bus / queue
 ├→ Billing
 ├→ Email
 ├→ Analytics
 └→ Inventory
```

---

## 14.1 Amazon API Gateway

API Gateway manages APIs.

Major API styles include:

- HTTP
- REST
- WebSocket

Capabilities include:

- routing
- authorization
- throttling
- monitoring
- custom domains
- integrations
- request/response handling

Typical serverless API:

```text
Client
  ↓ HTTPS
API Gateway
  ↓
Lambda
  ↓
DynamoDB
```

## 14.2 HTTP API vs REST API

Exact feature sets evolve, so verify current documentation.

General thinking:

- use the simpler/lower-cost API style when its features are sufficient
- choose REST API features when you need capabilities not available in HTTP APIs

Never choose based only on name.

## 14.3 API authentication

Possible approaches depending on API type:

- IAM authorization
- Cognito
- JWT authorizers
- Lambda authorizers
- resource policies

Authentication answers:

> Who is the caller?

Authorization answers:

> What may this caller do?

---

## 14.4 Amazon SQS

SQS is a managed message queue.

Pattern:

```text
Producer → Queue → Consumer
```

Why queue?

Without:

```text
Producer → Consumer
```

Consumer failure immediately affects producer.

With queue:

```text
Producer → durable buffer → consumer processes when ready
```

## 14.5 Standard vs FIFO queue

### Standard

Use for:

- high throughput
- at-least-once delivery model
- order not strictly guaranteed

Application should be idempotent.

### FIFO

Use when:

- ordering matters
- duplicate-processing controls are needed
- message groups fit the workflow

Do not use FIFO merely because “ordered sounds safer.” It changes throughput/design behavior.

## 14.6 Visibility timeout

When a consumer receives a message:

```text
message becomes temporarily invisible
```

If processing succeeds:

```text
consumer deletes message
```

If processing fails and message is not deleted:

```text
visibility timeout expires
→ message becomes available again
```

Set timeout longer than normal processing time, with margin.

## 14.7 Dead-Letter Queue (DLQ)

Messages that repeatedly fail can be moved to a DLQ.

```text
Main Queue
   ↓ fail N times
DLQ
```

A DLQ is not a trash bin.

Monitor it and define a redrive/remediation process.

## 14.8 Queue depth scaling

For worker systems, CPU may be a poor scaling metric.

Better:

```text
number_of_messages / number_of_workers
```

or oldest-message age.

---

## 14.9 Amazon SNS

SNS is publish/subscribe messaging.

```text
Publisher
   ↓
Topic
 ├→ SQS
 ├→ Lambda
 ├→ HTTP endpoint
 └→ notification channel
```

Use when one event should fan out to multiple subscribers.

Classic fanout:

```text
OrderPlaced
     ↓
SNS Topic
 ├→ Queue for billing
 ├→ Queue for email
 └→ Queue for analytics
```

---

## 14.10 EventBridge

EventBridge is an event-routing service.

Pattern:

```text
Event producers
      ↓
Event bus
      ↓ rules
 ┌────┼─────┐
Lambda SQS Step Functions
```

Useful for:

- event-driven architectures
- SaaS integrations
- AWS service events
- cross-account event routing
- scheduling
- filtering events

Think:

- **SQS** = queue/buffer
- **SNS** = pub/sub broadcast
- **EventBridge** = event router with rules
- **Step Functions** = workflow/orchestration

## 14.11 EventBridge Pipes

Useful for point-to-point event integrations with filtering/transformation/enrichment capabilities.

## 14.12 EventBridge Scheduler

Managed scheduling for one-time and recurring invocation patterns.

Prefer it over running a permanent EC2 cron server just to call an API once per hour.

---

## 14.13 Step Functions

Workflow orchestration.

Example:

```text
Start
 ↓
Validate Order
 ↓
Charge Payment
 ├─ success → Reserve Inventory
 └─ failure → Compensation
 ↓
Send Confirmation
 ↓
End
```

Good for:

- long-running workflows
- retries
- branching
- parallel steps
- human/async processes
- service orchestration

Avoid building an unreadable maze of Lambda functions that call each other directly if an explicit workflow better represents the process.

## 14.14 Synchronous vs asynchronous design

### Synchronous

```text
A → B → response
```

Use when caller needs immediate result.

### Asynchronous

```text
A → queue/event → B later
```

Use when:

- work can happen later
- buffering is valuable
- failure isolation matters
- burst absorption is needed

## 14.15 Scenario: invoice processing

```text
User uploads invoice
      ↓
S3
      ↓
EventBridge / S3 Event
      ↓
SQS
      ↓
Lambda / ECS worker
      ↓
Extract / validate
      ↓
Step Functions
 ├→ match PO
 ├→ request approval
 └→ post result
```

Benefits:

- upload not blocked by OCR duration
- retries are safe
- failures visible in queues
- each stage scales independently

---

# 15. Containers: ECR, ECS, Fargate, and EKS

## 15.1 Why containers?

Containers package:

- application
- runtime
- dependencies
- environment expectations

Example Docker flow:

```text
Source Code
   ↓ docker build
Container Image
   ↓ push
Registry
   ↓ pull
Container Runtime
```

## 15.2 Amazon ECR

Elastic Container Registry stores container images.

Typical flow:

```text
Developer/Git
  ↓ build
CodeBuild / CI
  ↓ push
ECR
  ↓ deploy
ECS / EKS / Lambda image
```

Security practices:

- image scanning
- immutable tags where appropriate
- lifecycle policies
- least-privilege pull/push roles

## 15.3 Amazon ECS

Elastic Container Service is AWS-native managed container orchestration.

Core concepts:

- cluster
- task definition
- task
- service
- capacity provider
- launch/compute choice
- service discovery/networking

## 15.4 Task definition

Blueprint for containers.

Includes:

- image
- CPU
- memory
- ports
- environment
- secrets
- logging
- task role
- volumes

## 15.5 Task vs service

**Task**: running copy of a task definition.

**Service**: maintains desired count and supports long-running application deployment.

Example:

```text
ECS Service desiredCount = 4
     ↓
Task 1
Task 2
Task 3
Task 4
```

## 15.6 ECS task role vs execution role

This distinction matters.

### Task execution role

Used by ECS/Fargate platform actions such as pulling images/logging according to setup.

### Task role

Used by **your application code** inside the container.

Example:

```text
Container app needs S3
→ grant S3 permission to task role
```

Do not place broad AWS credentials inside the image.

## 15.7 AWS Fargate

Fargate is serverless compute for containers.

You specify container-level resources; AWS manages the underlying server fleet.

Good:

- microservices
- APIs
- worker services
- teams that want containers without managing EC2 nodes

Trade-off:

- less host control
- cost profile may differ from well-utilized self-managed EC2 capacity

## 15.8 ECS on EC2

You manage the container host fleet.

Use when:

- host-level control required
- specialized instances
- cost optimization with large steady workloads
- custom daemon/agent needs

Operational overhead is higher.

## 15.9 Amazon EKS

EKS is managed Kubernetes.

Use when:

- Kubernetes ecosystem is a requirement
- portability/standardization matters
- team already has Kubernetes expertise
- complex platform engineering use cases justify it

Do not choose EKS merely because Kubernetes is popular.

For a small app, EKS may add unnecessary complexity.

## 15.10 Kubernetes mental model

```text
Cluster
├── Control plane
└── Worker compute
    ├── Node
    │   ├── Pod
    │   └── Pod
    └── Node
        ├── Pod
        └── Pod
```

Important concepts:

- Deployment
- Service
- Pod
- ConfigMap
- Secret
- Ingress / Gateway patterns
- autoscaling
- persistent volumes
- namespaces
- RBAC

## 15.11 EKS compute options

Depending on current supported features:

- managed/self-managed EC2 nodes
- Fargate
- EKS Auto Mode and other managed approaches

Always verify regional/current feature support.

## 15.12 ECS vs EKS

| Question | ECS | EKS |
|---|---|---|
| AWS-native simplicity | Strong | More Kubernetes complexity |
| Kubernetes API required | No | Yes |
| Operational learning curve | Lower | Higher |
| Ecosystem portability | AWS-oriented | Kubernetes ecosystem |
| Best for | Most AWS container workloads | Kubernetes-standardized platforms |

## 15.13 Lambda vs Fargate vs EC2

```text
Short event-driven function
→ Lambda

Long-running container, minimal server management
→ ECS/Fargate

Need Kubernetes
→ EKS

Need host/OS control
→ EC2
```

## 15.14 Scenario: microservices

```text
Internet
  ↓
ALB
  ↓
ECS Fargate
├── user-service
├── order-service
└── payment-service
      ↓
RDS / DynamoDB / SQS
```

Add:

- ECR
- CloudWatch
- Secrets Manager
- IAM task roles
- autoscaling
- private subnets

---

# 16. DNS, CDN, and Edge Networking

## 16.1 Route 53

Route 53 provides DNS-related capabilities including:

- domain registration
- DNS hosting
- routing
- health checks

## 16.2 Hosted zone

A hosted zone contains DNS records for a domain.

### Public hosted zone

Internet-facing DNS.

### Private hosted zone

DNS resolution inside associated VPC environments.

## 16.3 Common DNS record types

Learn:

- A
- AAAA
- CNAME
- alias records
- MX
- TXT

Alias records are important in AWS because they can point to supported AWS resources without behaving exactly like ordinary CNAME records.

## 16.4 Routing policies

Important policies include concepts such as:

- simple
- weighted
- latency-based
- failover
- geolocation
- geoproximity
- multivalue
- IP-based options where applicable

### Weighted example

```text
90% → production-v1
10% → production-v2
```

Useful for controlled traffic shifting.

### Failover example

```text
Primary healthy?
  yes → primary
  no  → secondary
```

### Latency example

Users can be routed toward lower-latency regional endpoints.

## 16.5 CloudFront

CloudFront is AWS’s content delivery network.

Pattern:

```text
User
 ↓
Nearest edge
 ↓ cache hit
Return content

or cache miss:
Edge
 ↓
Origin (S3 / ALB / API)
```

Benefits:

- lower latency
- offload origin
- caching
- global distribution
- TLS
- integration with WAF
- controlled origin access

## 16.6 Cache key

What makes two requests “the same” for caching?

Possible dimensions:

- path
- query string
- headers
- cookies

Poor cache-key design can:

- destroy cache hit ratio
- serve wrong variants
- increase origin traffic

## 16.7 Cache invalidation

When content changes:

- use versioned object names where possible
- invalidate when needed

Versioned assets are often cleaner:

```text
/app.v42.js
```

rather than continuously invalidating:

```text
/app.js
```

## 16.8 CloudFront + private S3

Recommended static content pattern:

```text
Internet
   ↓
CloudFront
   ↓ authorized origin access
Private S3 bucket
```

## 16.9 AWS Global Accelerator

Provides global network acceleration toward regional endpoints for suitable workloads.

Think of the difference:

- **CloudFront**: CDN/caching/HTTP content distribution
- **Global Accelerator**: network-level acceleration and endpoint routing for supported application patterns

## 16.10 Scenario: global website

```text
Users worldwide
   ↓
Route 53
   ↓
CloudFront + WAF
   ↓
ALB
   ↓
App in multi-AZ Region
```

Static content:

```text
CloudFront → S3
```

Dynamic content:

```text
CloudFront → ALB/API
```


# 17. Security, Encryption, and Threat Detection

Security should be designed into the architecture, not added at the end.

A useful security model:

```text
Identity
  + Network
  + Data protection
  + Detection
  + Response
  + Governance
```

## 17.1 Encryption at rest vs in transit

### At rest

Data stored on:

- disks
- databases
- object storage
- backups

Typical AWS tools:

- service-native encryption
- AWS KMS
- customer-managed keys where required

### In transit

Protect data moving between systems.

Typically:

```text
TLS / HTTPS
```

Examples:

- client → CloudFront
- CloudFront → ALB
- app → database using TLS
- service → service

## 17.2 AWS KMS

KMS manages encryption keys.

Core concepts:

- KMS key
- key policy
- grants
- encryption context
- rotation
- envelope encryption

### Envelope encryption

Instead of encrypting huge data directly with the root key:

```text
KMS Key
   ↓ protects
Data Key
   ↓ encrypts
Application Data
```

This is efficient and scalable.

## 17.3 AWS-managed vs customer-managed keys

Conceptually:

### AWS-managed

- less administration
- service-controlled lifecycle

### Customer-managed

- more policy control
- custom lifecycle
- key grants
- cross-account patterns
- explicit audit/control requirements

Use customer-managed keys when requirements justify the operational overhead.

## 17.4 KMS policy trap

A user can have IAM permission to use a KMS key but still fail if key-policy/resource authorization does not allow the operation.

When encryption access fails, check both:

```text
IAM policy
+
KMS key policy / grants
```

## 17.5 Secrets Manager

Store:

- database credentials
- API keys
- OAuth credentials
- secrets requiring rotation

Pattern:

```text
Application
  ↓ IAM role
Secrets Manager
  ↓
Secret value
```

Do not:

```text
git commit .env.production
```

## 17.6 Systems Manager Parameter Store

Useful for:

- application configuration
- hierarchical parameters
- some secret/configuration use cases

Decide between Parameter Store and Secrets Manager based on:

- rotation requirements
- secret lifecycle
- integrations
- cost
- operational features

## 17.7 AWS Certificate Manager (ACM)

Manages TLS certificates for supported AWS services.

Examples:

- ALB
- CloudFront
- API Gateway

Use managed renewal where available.

## 17.8 AWS WAF

Web Application Firewall.

Use to inspect/filter web traffic.

Examples:

- block known malicious patterns
- IP allow/deny
- rate-based rules
- managed rule groups
- protect CloudFront/ALB/API workloads

WAF does not replace secure application coding.

## 17.9 AWS Shield

DDoS protection capabilities.

Understand the distinction between baseline AWS protections and advanced service offerings when designing high-risk internet applications.

## 17.10 GuardDuty

Threat-detection service that analyzes supported signals to identify suspicious activity.

Possible findings may relate to:

- unusual API behavior
- compromised credentials
- malicious network behavior
- suspicious workloads

Operational rule:

> A security finding without an owner, severity process, and response runbook is only a notification.

## 17.11 Amazon Inspector

Helps identify supported workload vulnerabilities/exposures.

Use as part of:

- vulnerability management
- container image scanning
- EC2/serverless assessment where supported

## 17.12 Amazon Macie

Helps discover and protect sensitive data in S3 using data-security analysis.

Useful for:

- PII discovery
- sensitive bucket review
- data classification

## 17.13 Security Hub

Aggregates and normalizes security findings from supported services.

Think:

```text
GuardDuty
Inspector
Macie
Config / controls
   ↓
Security Hub
   ↓
Central security operations
```

## 17.14 IAM Access Analyzer

Helps identify unintended external/public access and can assist with permission analysis.

Use cases:

- detect bucket/resource sharing outside trusted boundary
- refine policies
- analyze access

## 17.15 Cognito

Provides identity features for applications.

Use cases:

- user sign-up/sign-in
- authentication for customer-facing apps
- federation
- tokens for APIs

Do not confuse application users with IAM workforce identities.

## 17.16 Security logging architecture

Enterprise pattern:

```text
All accounts
   ↓
Organization CloudTrail
   ↓
Central Log Archive account
   ↓
Immutable/protected S3 storage

Security findings
   ↓
Security account
   ↓
Security Hub / SIEM / automation
```

## 17.17 Zero-trust mindset

Avoid assuming:

> “It is inside the VPC, therefore it is trusted.”

Instead:

- authenticate every relevant request
- use least privilege
- segment networks
- encrypt traffic
- use workload identities
- minimize secrets
- log important actions

## 17.18 Security scenario: compromised EC2

Suppose an EC2 application is compromised.

A well-designed system limits blast radius:

```text
EC2 role:
Allow only:
- read one S3 prefix
- write one SQS queue

No:
- IAM admin
- KMS admin
- delete backups
- access unrelated databases
```

Security is often about limiting what happens **after** something goes wrong.

---

# 18. Observability, Auditing, and Operations

Observability answers:

> What is the system doing, why is it doing it, and where is it failing?

The three classic telemetry types:

```text
Metrics
Logs
Traces
```

## 18.1 CloudWatch

CloudWatch provides monitoring and observability features for AWS workloads.

Core concepts:

- metrics
- namespaces
- dimensions
- alarms
- dashboards
- logs
- log groups
- log streams
- Logs Insights
- application/infrastructure monitoring features

## 18.2 Metrics

Examples:

- EC2 CPU utilization
- ALB request count
- Lambda errors
- RDS connections
- SQS queue depth

A metric is time-series numerical data.

## 18.3 CloudWatch alarms

An alarm evaluates a metric against conditions.

Example:

```text
ALB 5xx > threshold
for N evaluation periods
→ alarm
→ SNS / incident workflow
```

Avoid noisy alarms that everyone ignores.

Good alerts should be:

- actionable
- owned
- severity-aware
- tied to user/business impact

## 18.4 Logs

Application logs should include useful context.

Bad:

```text
ERROR
```

Better structured log:

```json
{
  "level": "ERROR",
  "request_id": "req-128",
  "service": "order-api",
  "customer_id": "C123",
  "error_code": "PAYMENT_TIMEOUT",
  "message": "Payment provider timed out"
}
```

Do not log secrets or sensitive data unnecessarily.

## 18.5 CloudWatch Logs Insights

Use for interactive log analysis.

Example questions:

- Which endpoint has most errors?
- Which request IDs failed?
- Which Lambda exception is increasing?
- What happened around deployment time?

## 18.6 Distributed tracing

In microservices:

```text
Client
 ↓
API Gateway
 ↓
Service A
 ↓
Service B
 ↓
Database
```

A user sees “2.8 seconds.”

Tracing identifies where latency occurred.

AWS X-Ray and OpenTelemetry integrations can help depending on architecture.

## 18.7 CloudTrail

CloudTrail records AWS API activity.

Question:

> Who changed the security group yesterday?

CloudTrail can help answer:

- caller identity
- API action
- time
- source details
- target resource context

CloudTrail is primarily about **AWS account/API activity**, not your application’s business logs.

## 18.8 CloudTrail vs CloudWatch

| Need | Service |
|---|---|
| App/infra metrics and logs | CloudWatch |
| AWS API audit trail | CloudTrail |
| Configuration history/compliance | AWS Config |

## 18.9 AWS Config

Tracks resource configuration and changes over time.

Use cases:

- compliance
- config history
- resource relationships
- detective rules
- remediation

Question:

> Was this security group publicly open last Friday?

Config history can help.

## 18.10 Systems Manager

Operational capabilities include:

- Session Manager
- Run Command
- Automation
- patching
- inventory
- Parameter Store
- fleet/node management

Use it to reduce unmanaged SSH/RDP access patterns.

## 18.11 CloudWatch agent

Install when you need OS/application telemetry not automatically supplied by EC2.

Examples:

- memory usage
- disk utilization
- custom logs

EC2 CPU may be available natively, but OS memory is a guest-level metric that usually requires an agent/custom collection path.

## 18.12 SLI, SLO, SLA

### SLI

Measured indicator.

Example:

```text
99.95% successful requests
```

### SLO

Internal reliability objective.

```text
99.9% successful requests per month
```

### SLA

Customer/business agreement, often with consequences.

## 18.13 Golden signals

Useful high-level monitoring model:

- latency
- traffic
- errors
- saturation

For a queue worker, also monitor:

- queue depth
- oldest message age
- DLQ size
- processing success rate

## 18.14 Operational runbook example

Alarm:

```text
High ALB 5xx
```

Runbook:

```text
1. Check deployment events.
2. Check target health.
3. Check application error logs.
4. Check DB connectivity.
5. Check dependency status.
6. Roll back if deployment-related.
7. Scale if capacity-related.
8. Record incident timeline.
```

---

# 19. Infrastructure as Code

Manual infrastructure does not scale well.

Bad production workflow:

```text
Someone clicks 47 console options
→ nobody remembers exact settings
```

IaC:

```text
Infrastructure definition in Git
      ↓ review
      ↓ deploy
AWS resources
```

Benefits:

- repeatability
- reviewability
- version control
- automation
- disaster recovery
- environment consistency

## 19.1 CloudFormation

CloudFormation models AWS resources in templates.

Concepts:

- template
- stack
- parameter
- output
- resource
- mapping
- condition
- change set
- stack set

Example:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  AppBucket:
    Type: AWS::S3::Bucket
    Properties:
      VersioningConfiguration:
        Status: Enabled
```

## 19.2 Stack

A stack is a managed collection of resources defined by a template.

Think:

```text
template.yaml
   ↓
CloudFormation Stack
   ↓
S3 + IAM + Lambda + ...
```

## 19.3 Change sets

Preview intended infrastructure changes before execution.

Important for production:

```text
Template change
→ Change Set
→ review
→ execute
```

## 19.4 Drift

Drift occurs when deployed resources differ from IaC expectations due to manual changes or external modification.

Rule:

> If IaC owns a resource, avoid casual console changes.

## 19.5 CloudFormation StackSets

Deploy stack resources across multiple accounts/Regions.

Good for:

- baseline IAM roles
- organization logging
- standard Config rules
- shared governance

## 19.6 AWS CDK

CDK lets you define cloud infrastructure using supported programming languages and deploy through CloudFormation.

Example TypeScript concept:

```ts
const bucket = new s3.Bucket(this, "Assets", {
  versioned: true
});
```

CDK synthesizes lower-level CloudFormation.

## 19.7 CDK constructs

Constructs encapsulate reusable infrastructure.

You can build:

```text
SecureWebApp construct
├── VPC
├── ALB
├── ECS service
├── logs
└── alarms
```

and reuse it across teams.

## 19.8 Terraform

Terraform is an external multi-provider IaC tool commonly used with AWS.

Understand the differences:

```text
CloudFormation
- AWS-native
- no external state file management in the same way

CDK
- programming-language abstraction
- deploys via CloudFormation

Terraform
- multi-cloud/provider ecosystem
- explicit state management
```

Choose according to organization standards and requirements.

## 19.9 IaC best practices

- keep code in version control
- code review infrastructure changes
- use separate environments/accounts
- avoid secrets in templates/state
- use modules/constructs
- validate/lint/test
- use CI/CD
- protect state where applicable
- tag resources
- plan safe rollbacks

---

# 20. CI/CD and Developer Services

CI/CD automates code integration, testing, build, and deployment.

## 20.1 CI

Continuous Integration:

```text
Developer pushes code
   ↓
Build
   ↓
Unit tests
   ↓
Static analysis
   ↓
Artifact
```

## 20.2 CD

Continuous Delivery/Deployment:

```text
Artifact
   ↓
Dev
   ↓
Test
   ↓
Approval?
   ↓
Production
```

## 20.3 CodeBuild

Managed build service.

Typical `buildspec.yml`:

```yaml
version: 0.2

phases:
  install:
    commands:
      - npm ci
  build:
    commands:
      - npm test
      - npm run build

artifacts:
  files:
    - '**/*'
  base-directory: dist
```

## 20.4 CodePipeline

Orchestrates pipeline stages.

Example:

```text
Source
  ↓
Build
  ↓
Test
  ↓
Security scan
  ↓
Deploy staging
  ↓
Approval
  ↓
Deploy production
```

## 20.5 CodeDeploy

Automates deployments to supported compute targets.

Deployment strategies may include patterns such as:

- in-place
- blue/green

depending on target.

## 20.6 Blue/green

```text
Blue = current production
Green = new version

Traffic:
100% Blue
   ↓ validate Green
0/100 shift
   ↓
100% Green
```

Benefits:

- safer rollback
- pre-deployment validation

Cost:

- temporarily duplicate capacity

## 20.7 Canary

```text
95% old
5% new
```

Observe:

- errors
- latency
- business metrics

Then increase new-version traffic.

## 20.8 Rolling deployment

Replace instances gradually.

Trade-off:

- less duplicate capacity
- mixed versions during rollout

## 20.9 Immutable deployment

Build new infrastructure/image rather than modifying existing server in place.

Good pattern:

```text
new AMI/container image
→ new fleet
→ validate
→ shift traffic
→ remove old fleet
```

## 20.10 Pipeline security

Pipeline role can be extremely powerful.

Protect:

- deployment credentials
- artifact integrity
- branch controls
- approvals
- IaC plan review
- production role assumption

Avoid giving CI a permanent admin access key.

Use identity federation / role assumption where possible.

---

# 21. Data Engineering and Analytics

## 21.1 Data lake

A data lake stores large amounts of structured/semi-structured/unstructured data, commonly using S3.

Pattern:

```text
Sources
  ↓
Ingestion
  ↓
S3 Data Lake
  ↓
Catalog / Transform
  ↓
Athena / Redshift / ML
  ↓
BI
```

## 21.2 Data lake zones

Common conceptual zones:

```text
raw/
cleaned/
curated/
```

Example:

```text
s3://analytics-lake/raw/orders/
s3://analytics-lake/cleaned/orders/
s3://analytics-lake/curated/sales_daily/
```

## 21.3 AWS Glue

Managed data integration/catalog capabilities.

Core concepts:

- Data Catalog
- crawlers
- ETL jobs
- schema metadata

Use cases:

- discover data
- transform datasets
- prepare lake data
- catalog tables for Athena

## 21.4 Athena

Serverless SQL query service for data in S3 and supported sources.

Example:

```sql
SELECT country, SUM(amount)
FROM sales
GROUP BY country;
```

Cost/performance principles:

- columnar formats such as Parquet
- compression
- partitioning
- avoid scanning unnecessary data
- select required columns

Bad:

```text
5 TB CSV
SELECT * ...
```

Better:

```text
partitioned Parquet
query only required columns/date partitions
```

## 21.5 Redshift

Managed data warehouse.

Use when:

- large analytical SQL workloads
- warehouse-style schemas
- BI/reporting
- complex joins/aggregations
- high-performance analytics

Not usually the primary OLTP database for application transactions.

## 21.6 OLTP vs OLAP

### OLTP

```text
many small reads/writes
orders
payments
users
```

Typical:

- RDS
- Aurora
- DynamoDB depending on model

### OLAP

```text
large aggregations
historical analysis
BI reports
```

Typical:

- Redshift
- Athena

## 21.7 EMR

Managed big-data platforms/frameworks.

Use for:

- Spark
- Hadoop ecosystem
- large distributed processing

Choose only when distributed data processing requirements justify the operational/model complexity.

## 21.8 Kinesis

Streaming data services for real-time ingestion/processing patterns.

Use cases:

- clickstream
- logs
- IoT telemetry
- event analytics

Think:

```text
continuous stream
not individual request-response
```

## 21.9 OpenSearch Service

Managed search/analytics engine.

Use for:

- full-text search
- log analytics
- application search
- observability datasets

Not a drop-in replacement for transactional relational databases.

## 21.10 QuickSight

Business intelligence/dashboarding.

Pipeline example:

```text
S3 / Redshift / Athena
       ↓
QuickSight
       ↓
Business dashboards
```

## 21.11 Data warehouse scenario

Daily transactional data:

```text
RDS
 ↓ CDC/batch ingestion
S3 raw
 ↓ Glue
S3 curated
 ↓
Athena / Redshift
 ↓
QuickSight
```

Keep heavy BI queries away from the production OLTP database.

---

# 22. AI, ML, and Generative AI on AWS

## 22.1 AI service categories

Think in layers:

```text
Ready-to-use AI APIs
        ↓
Generative AI foundation-model platform
        ↓
Managed ML platform
        ↓
Custom infrastructure / accelerators
```

## 22.2 Amazon Bedrock

Bedrock is a managed platform for building generative-AI applications with foundation models.

Core topics to learn:

- foundation models
- inference
- model selection
- prompt engineering
- embeddings
- vector search
- retrieval-augmented generation (RAG)
- agents
- guardrails
- model evaluation
- provisioned/on-demand capacity concepts
- security and private data access

## 22.3 Foundation model selection

Choose model based on:

- quality
- latency
- context length
- modality
- reasoning needs
- price
- regional availability
- data/governance requirements

Do not use the biggest model for every request.

Architecture can route:

```text
simple classification → small/fast model
complex reasoning      → stronger model
embedding              → embedding model
image generation       → image model
```

## 22.4 RAG

Retrieval-Augmented Generation gives the model relevant external knowledge at request time.

Pattern:

```text
Documents
   ↓
Chunk
   ↓
Embeddings
   ↓
Vector store

User question
   ↓
Embedding
   ↓
Retrieve relevant chunks
   ↓
Prompt + context
   ↓
Foundation model
   ↓
Answer
```

Benefits:

- fresh private data
- source grounding
- less need for fine-tuning for knowledge injection

Challenges:

- chunking
- retrieval quality
- permissions
- prompt injection
- source freshness
- evaluation

## 22.5 AI security

Never assume model output is trustworthy.

Guard against:

- prompt injection
- data leakage
- insecure tool execution
- hallucination
- over-permissioned agents
- malicious documents
- sensitive logging

Agent permission design:

```text
AI Agent
   ↓
Restricted action layer
   ↓
Only approved APIs
   ↓
Human approval for high-impact actions
```

## 22.6 SageMaker AI

Managed machine-learning platform for building, training, and deploying ML models.

Learn:

- notebooks/development environments
- training jobs
- datasets
- hyperparameter tuning
- model registry
- endpoints
- batch inference
- MLOps
- monitoring
- feature engineering

## 22.7 Bedrock vs SageMaker AI

Simplified:

```text
Want to build with managed foundation models / GenAI
→ Bedrock

Want full ML lifecycle / custom training / custom ML workflows
→ SageMaker AI
```

There can be overlap. Choose based on actual workflow.

## 22.8 GPU on EC2

Use EC2 accelerated instances when you require:

- custom frameworks
- OS/runtime control
- specialized GPU infrastructure
- custom distributed training

Operational burden is higher.

## 22.9 Scenario: internal document assistant

```text
Private documents → S3
      ↓
ingestion/chunking
      ↓
embeddings/vector index
      ↓
User → API → retrieval
      ↓
Bedrock model
      ↓
grounded answer
```

Security:

- user identity
- document-level permissions
- encryption
- no cross-department leakage
- audit logs
- guardrail/tool restrictions

---

# 23. Migration, Hybrid Cloud, and Data Transfer

Cloud migration is not just “copy server to EC2.”

## 23.1 The 7 Rs

Common migration strategies:

- Rehost
- Replatform
- Refactor / re-architect
- Repurchase
- Relocate
- Retain
- Retire

### Rehost

“Lift and shift.”

```text
VM on-prem → EC2
```

Fast, but may carry old architecture problems into cloud.

### Replatform

Make limited cloud optimizations.

Example:

```text
App remains similar
Self-managed MySQL → RDS
```

### Refactor

Redesign application.

Example:

```text
monolith → event-driven services
```

Highest effort, potentially greatest long-term cloud benefit.

## 23.2 Migration assessment

Before moving:

- dependency map
- data volume
- downtime tolerance
- licensing
- network bandwidth
- compliance
- RPO/RTO
- application owners
- rollback
- performance baseline

## 23.3 Database Migration Service

AWS DMS supports database migration/replication use cases.

Typical pattern:

```text
Source DB
  ↓ full load
Target DB
  ↓
ongoing change replication
  ↓
cutover
```

Schema conversion may require separate planning/tools depending on engine change.

## 23.4 Application Migration Service

Used for supported server migration scenarios into AWS.

Understand it as part of rehosting, not automatic application modernization.

## 23.5 DataSync

Managed data transfer between supported storage environments.

Use for:

- on-prem NAS → AWS
- S3/EFS/FSx transfer patterns

## 23.6 Snow Family / offline transfer

For very large datasets or constrained connectivity, physical edge transfer appliances may be suitable depending on current AWS offerings.

## 23.7 Hybrid architecture

```text
On-prem Data Center
       ↓
VPN / Direct Connect
       ↓
AWS Transit Gateway / VPC
       ↓
AWS workloads
```

Plan:

- routing
- DNS
- identity
- overlapping CIDRs
- firewalling
- latency
- failover

## 23.8 Hybrid DNS

Applications often fail not because the network is down but because DNS resolution across environments is not designed.

Plan:

- Route 53 Resolver patterns
- conditional forwarding
- private hosted zones
- split-horizon DNS where appropriate

---

# 24. Reliability, Backup, and Disaster Recovery

Reliability begins with accepting:

> Everything fails eventually.

Design so individual failures do not become business outages.

## 24.1 High availability vs disaster recovery

### High availability

Keep service running through common failures.

Examples:

- multiple AZs
- load balancer
- Auto Scaling
- Multi-AZ database

### Disaster recovery

Restore service after major outage/disaster.

Examples:

- backups
- cross-Region replication
- standby environment
- recovery runbook

## 24.2 RPO

Recovery Point Objective:

> How much data can we afford to lose?

Example:

```text
RPO = 15 minutes
```

Means recovery data should generally not be more than 15 minutes behind target expectations.

## 24.3 RTO

Recovery Time Objective:

> How long can service remain unavailable?

Example:

```text
RTO = 2 hours
```

## 24.4 Backup fundamentals

A backup should answer:

- What is backed up?
- How often?
- How long retained?
- Is it encrypted?
- Can attackers delete it?
- Is there a separate account/Region copy?
- Has restore been tested?
- What is restore time?

Untested backup:

```text
backup exists
≠
recovery works
```

## 24.5 AWS Backup

Centralizes backup policies for supported AWS resources.

Useful in multi-account governance.

## 24.6 DR strategies

From lower cost/slower recovery toward higher cost/faster recovery:

### Backup and restore

```text
Primary region
→ backups
→ recover infrastructure after disaster
```

Low steady-state cost, higher RTO.

### Pilot light

Critical core components/data kept ready in DR region.

Application capacity scaled up during disaster.

### Warm standby

Smaller functional copy runs continuously.

Scale during failover.

### Multi-site / active-active

Multiple regions actively serve traffic.

Fastest recovery potential, highest complexity/cost.

## 24.7 Multi-Region is difficult

Challenges:

- data consistency
- write conflicts
- DNS failover
- user sessions
- secret replication
- KMS design
- deployment synchronization
- quotas
- third-party dependencies
- operational testing

Do not choose multi-Region simply because it sounds highly available.

## 24.8 Chaos testing

Validate assumptions.

Examples:

- terminate EC2 instance
- stop one application task
- fail a dependency in staging
- test database failover
- block egress
- restore from backup
- simulate queue backlog

Production chaos testing requires mature controls.

## 24.9 Resilience scenario

Requirement:

- public API
- RTO 30 minutes
- RPO 5 minutes

Architecture may require:

- multi-AZ primary
- continuous or frequent data replication
- tested secondary-region deployment
- automated IaC
- Route 53 failover
- documented activation
- frequent DR drills

Architecture follows business RTO/RPO, not the other way around.

---

# 25. AWS Well-Architected Framework

AWS Well-Architected is based on six pillars:

1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability

## 25.1 Operational Excellence

Focus:

- operations as code
- observability
- frequent small changes
- failure learning
- documented procedures
- continuous improvement

Question:

> Can the team safely operate and improve this system?

## 25.2 Security

Focus:

- identity
- traceability
- least privilege
- data protection
- security automation
- incident preparation

Question:

> What is the blast radius if this component is compromised?

## 25.3 Reliability

Focus:

- recovery
- distributed design
- automatic scaling
- failure management
- quotas
- tested recovery

Question:

> What happens if this AZ, instance, database, or dependency fails?

## 25.4 Performance Efficiency

Focus:

- selecting right resource type
- using managed services
- monitoring performance
- evolving architecture

Question:

> Is the system using the right technology for its workload?

## 25.5 Cost Optimization

Focus:

- measuring cost
- matching capacity to demand
- eliminating waste
- pricing models
- managed services
- unit economics

Question:

> What does one customer/order/request cost us?

## 25.6 Sustainability

Focus:

- efficient resource use
- reducing idle capacity
- efficient software
- managed/shared infrastructure choices
- data lifecycle efficiency

## 25.7 Architecture review habit

For every architecture, make a small review table:

| Pillar | Question |
|---|---|
| Operations | How do we deploy, monitor, and respond? |
| Security | Who can access what? |
| Reliability | What fails and how do we recover? |
| Performance | What scales and what bottlenecks? |
| Cost | What are the major cost drivers? |
| Sustainability | Are resources efficiently utilized? |

---

# 26. Cost Management and FinOps

## 26.1 Cost is an architecture property

Example:

Architecture A:

```text
Private workload
→ NAT Gateway
→ S3
```

Architecture B:

```text
Private workload
→ S3 VPC endpoint
→ S3
```

The second may reduce unnecessary NAT-path cost depending on configuration.

Cloud cost is influenced by architecture, not just discounts.

## 26.2 Cost Explorer

Analyze:

- service spend
- account spend
- tag/category spend
- trends
- usage patterns

## 26.3 AWS Budgets

Create alerts for:

- cost
- usage
- reservation/commitment utilization in supported contexts

For learners, budget alerts should be one of the first configurations.

## 26.4 Cost allocation tags

Tag resources:

```text
Environment = prod
Application = billing
Owner = platform-team
CostCenter = CC-42
```

Then analyze cost.

## 26.5 Compute Optimizer

Can provide optimization recommendations for supported compute resources.

Recommendations still need human context.

An instance may look overprovisioned because:

- monthly peak not visible in average
- DR capacity required
- memory metric missing
- latency SLO requires headroom

## 26.6 Trusted Advisor

Provides account recommendations depending on support/feature availability.

Categories include areas such as:

- cost
- security
- performance
- fault tolerance
- service limits

## 26.7 Cost traps

Common surprises:

- NAT gateway processing
- cross-AZ transfer
- cross-Region transfer
- idle load balancers
- idle databases
- oversized EBS
- unused snapshots
- CloudWatch log ingestion
- long log retention
- public IPv4
- data warehouse idle capacity
- EKS cluster overhead
- KMS API usage at very high volume
- S3 request/retrieval patterns

## 26.8 Right-sizing

Do not right-size only by CPU.

Check:

- memory
- disk
- network
- peak
- P95/P99
- workload growth
- SLO headroom

## 26.9 Unit economics

Measure cost per useful unit.

Examples:

```text
Cost per invoice processed
Cost per 1,000 API calls
Cost per active customer
Cost per GB analyzed
Cost per model inference
```

This is more useful than only looking at monthly total.

---

# 27. Common Architecture Patterns

## 27.1 Static website

```text
Route 53
   ↓
CloudFront
   ↓
Private S3
```

Add:

- ACM
- WAF if required
- versioned assets
- deployment pipeline

## 27.2 Three-tier application

```text
Internet
  ↓
Route 53
  ↓
ALB
  ↓
App tier in private subnets
  ↓
RDS in private DB subnets
```

Add:

- Auto Scaling
- Multi-AZ
- Secrets Manager
- CloudWatch
- backups

## 27.3 Serverless API

```text
Client
  ↓
API Gateway
  ↓
Lambda
  ↓
DynamoDB
```

Add:

- Cognito/JWT auth
- CloudWatch
- WAF
- DLQ/event retry patterns

## 27.4 Event-driven order system

```text
Order API
  ↓
DynamoDB/RDS
  ↓
OrderCreated
  ↓
EventBridge
 ├→ Billing SQS → Worker
 ├→ Email SQS → Worker
 └→ Analytics stream
```

## 27.5 Container platform

```text
Route 53
 ↓
ALB
 ↓
ECS Fargate
 ├→ Service A
 ├→ Service B
 └→ Service C
 ↓
RDS / DynamoDB / ElastiCache
```

## 27.6 Kubernetes platform

```text
Ingress/Load Balancer
    ↓
EKS
 ├→ Namespace A
 ├→ Namespace B
 └→ Namespace C
    ↓
managed data services
```

Use only when Kubernetes benefits justify complexity.

## 27.7 Asynchronous media processor

```text
Upload → S3
          ↓
         SQS
          ↓
    ECS/Lambda workers
          ↓
   processed S3 output
```

Queue protects workers from traffic bursts.

## 27.8 Multi-account platform

```text
Organization
├── Security
├── Logs
├── Network
├── Dev
├── Test
└── Prod
```

Identity Center + SCP + centralized logs + delegated security.

## 27.9 Data lake

```text
Sources
 ↓
S3 raw
 ↓
Glue
 ↓
S3 curated
 ├→ Athena
 ├→ Redshift
 └→ SageMaker
```

## 27.10 RAG assistant

```text
Documents → S3 → ingestion → vector index

User → API → retrieve relevant chunks
                ↓
              Bedrock
                ↓
              Answer
```

---

# 28. Service Selection Decision Guide

## 28.1 Compute

```text
Need VM/OS control?
  → EC2

Need containers?
  → ECS
      Need serverless container compute?
      → Fargate

Need Kubernetes?
  → EKS

Need event-driven function?
  → Lambda

Need batch scheduler?
  → AWS Batch
```

## 28.2 Storage

```text
Object?
  → S3

Block disk?
  → EBS

Shared Linux file?
  → EFS

Specialized managed filesystem?
  → FSx family
```

## 28.3 Database

```text
Relational SQL?
  → RDS/Aurora

Key-value/document at massive scale?
  → DynamoDB

Cache?
  → ElastiCache

Graph?
  → Neptune

Warehouse analytics?
  → Redshift
```

## 28.4 Integration

```text
Need queue?
  → SQS

Need pub/sub fanout?
  → SNS

Need event routing/filtering?
  → EventBridge

Need explicit workflow?
  → Step Functions

Need API front door?
  → API Gateway
```

## 28.5 Operations

```text
Metrics/logs/alarms?
  → CloudWatch

Who called AWS API?
  → CloudTrail

What was resource configuration?
  → AWS Config

Fleet management/session/patching?
  → Systems Manager
```

## 28.6 Security

```text
Permissions?
  → IAM

Encryption keys?
  → KMS

Secrets?
  → Secrets Manager

Web filtering?
  → WAF

Threat detection?
  → GuardDuty

Vulnerability assessment?
  → Inspector

Sensitive S3 discovery?
  → Macie

Security finding aggregation?
  → Security Hub
```

---

# 29. Hands-On Labs and Portfolio Projects

Do these in order.

## Lab 1 — Account safety

Learn:

- MFA
- IAM/Identity Center
- budget
- billing alarm
- tags

Goal:

> No daily root usage and visible cost controls.

## Lab 2 — Launch private EC2

Build:

```text
VPC
├── public subnet + NAT
└── private subnet + EC2
```

Access EC2 using Systems Manager.

Learn:

- routes
- SG
- NAT
- SSM role

## Lab 3 — Static website

```text
S3 → CloudFront → Route 53
```

Use private bucket origin access.

Learn:

- S3
- CDN
- DNS
- TLS

## Lab 4 — Highly available web app

```text
ALB
 ↓
ASG across 2 AZs
 ↓
EC2
```

Test:

- terminate one instance
- verify replacement
- observe target health

## Lab 5 — RDS application

Build:

```text
EC2 app → private RDS
```

Add:

- secret
- backup
- Multi-AZ if budget permits in controlled lab
- monitoring

## Lab 6 — Serverless CRUD API

```text
API Gateway
 ↓
Lambda
 ↓
DynamoDB
```

Implement:

- create
- read
- update
- delete
- authentication

## Lab 7 — Queue worker

```text
API → SQS → Lambda
```

Intentionally make one message fail.

Observe:

- retries
- visibility timeout
- DLQ

## Lab 8 — Event fanout

```text
OrderCreated
 ↓
EventBridge
 ├→ SQS
 ├→ Lambda
 └→ log target
```

Learn loose coupling.

## Lab 9 — Container deployment

```text
Git
 ↓
build Docker image
 ↓
ECR
 ↓
ECS Fargate
 ↓
ALB
```

Add autoscaling.

## Lab 10 — IaC

Rebuild Lab 9 using:

- CloudFormation or
- CDK

No manual production-style resource creation.

## Lab 11 — CI/CD

```text
Git push
 ↓
CodeBuild
 ↓
test
 ↓
image
 ↓
ECR
 ↓
deploy ECS
```

Add manual approval before production.

## Lab 12 — Central observability

Build dashboard for:

- requests
- errors
- latency
- CPU/memory
- queue depth
- DB connections

Create useful alarms.

## Lab 13 — Data lake

```text
CSV → S3
 ↓
Glue Catalog
 ↓
Athena
 ↓
SQL analytics
```

Then convert to partitioned Parquet and compare scanned data.

## Lab 14 — DR exercise

For a sample app:

- create backup
- destroy primary data copy
- restore
- measure RTO
- calculate achieved RPO

## Lab 15 — GenAI RAG

```text
Documents → S3
 ↓
embedding/index
 ↓
API
 ↓
Bedrock
```

Implement per-user/document authorization.

---

# 30. Troubleshooting Playbook

## 30.1 EC2 cannot access internet

Check:

```text
Public instance:
- public IP?
- route 0.0.0.0/0 → IGW?
- SG outbound?
- NACL?
- DNS?
- OS firewall?

Private instance:
- route 0.0.0.0/0 → NAT?
- NAT in public subnet?
- NAT subnet route → IGW?
```

## 30.2 ALB returns 502/503

Check:

- target health
- application port
- SG from ALB → target
- health-check path
- process listening on `0.0.0.0`
- app crashes
- target-group protocol/port
- timeout behavior

## 30.3 RDS connection timeout

Check:

```text
1. DB endpoint correct?
2. Port correct?
3. DB is available?
4. App route reaches DB?
5. DB SG allows App SG?
6. NACL?
7. DB public/private expectation?
8. DNS?
9. TLS/auth?
10. Connection pool exhausted?
```

## 30.4 S3 AccessDenied

Check all permission layers:

- IAM identity policy
- bucket policy
- Block Public Access
- object ownership/context
- KMS key policy
- VPC endpoint policy
- SCP
- permissions boundary
- session policy

“AccessDenied” can be the result of multiple policy systems.

## 30.5 Lambda timeout

Check:

- downstream API latency
- VPC networking
- NAT/endpoint
- DB connection
- DNS
- function timeout
- memory/CPU
- recursive retries
- synchronous architecture

## 30.6 Lambda works locally but cannot reach RDS

Usually investigate:

```text
Lambda VPC config
 ↓
subnets
 ↓
security groups
 ↓
DB SG
 ↓
routes
```

A private RDS endpoint is not reachable merely because both resources are “in AWS.”

## 30.7 SQS messages keep reappearing

Likely:

- consumer not deleting message
- processing exceeds visibility timeout
- exception before delete
- duplicate delivery is expected under queue semantics

Fix:

- idempotency
- timeout tuning
- delete on success
- DLQ

## 30.8 ECS task keeps stopping

Check:

- stopped reason
- container exit code
- CloudWatch logs
- memory limit
- image pull permission
- ECR access
- secrets access
- task execution role
- health check
- port mapping

## 30.9 EKS pod cannot start

Check:

```text
kubectl describe pod
kubectl logs
```

Then investigate:

- image pull
- node capacity
- IAM
- service account
- ConfigMap/Secret
- PVC
- health probes
- network policy/security group
- DNS

## 30.10 Cost suddenly increased

Sort Cost Explorer by:

- service
- linked account
- Region
- usage type

Then check recent changes:

- NAT traffic
- data transfer
- logs
- new RDS
- new EKS
- snapshots
- load balancers
- AI inference
- Athena scans
- public IPs
- runaway autoscaling

Use CloudTrail to identify provisioning actions.

---

# 31. Production Readiness Checklist

## Account and governance

- [ ] Production is isolated from development.
- [ ] Root user protected with MFA.
- [ ] Human access uses centralized/federated identities where appropriate.
- [ ] SCP/organization guardrails defined.
- [ ] Billing alerts and budgets configured.
- [ ] Tags/ownership defined.

## Identity

- [ ] Least privilege.
- [ ] No hard-coded AWS credentials.
- [ ] Workloads use roles.
- [ ] Privileged operations require stronger controls.
- [ ] Stale identities reviewed.

## Network

- [ ] Public exposure is intentional.
- [ ] Application/database tiers private where appropriate.
- [ ] SGs use minimum required ports/sources.
- [ ] NACLs documented where customized.
- [ ] VPC Flow Logs considered.
- [ ] Hybrid/DNS routing tested.

## Data

- [ ] Encryption at rest.
- [ ] Encryption in transit.
- [ ] Secrets externalized.
- [ ] Backup policy defined.
- [ ] Restore tested.
- [ ] Retention policy documented.
- [ ] Sensitive data classified.

## Reliability

- [ ] Multi-AZ for critical components.
- [ ] No unnecessary single points of failure.
- [ ] Auto Scaling/capacity plan.
- [ ] RPO/RTO defined.
- [ ] DR strategy selected.
- [ ] Quotas reviewed.
- [ ] Dependency failures tested.

## Operations

- [ ] Metrics.
- [ ] Logs.
- [ ] Traces where useful.
- [ ] Alarms.
- [ ] On-call ownership.
- [ ] Runbooks.
- [ ] Deployment rollback.
- [ ] CloudTrail centralized.

## Application

- [ ] Timeouts.
- [ ] Retries with backoff.
- [ ] Idempotency.
- [ ] Connection pooling.
- [ ] Rate limits.
- [ ] Input validation.
- [ ] Secure dependency management.

## Cost

- [ ] Major cost drivers known.
- [ ] Idle resources removed.
- [ ] Right-sizing reviewed.
- [ ] Data-transfer architecture reviewed.
- [ ] Log retention configured.
- [ ] Unit economics measured.

---

# 32. Interview and Scenario Questions

## 32.1 EC2

**Q: EC2 CPU is 95%. What do you do?**

Do not immediately say “increase instance size.”

Investigate:

1. Is traffic higher?
2. Is CPU actually the bottleneck?
3. Is one process runaway?
4. Is autoscaling configured?
5. Is load balanced?
6. Can workload scale horizontally?
7. Did a deployment cause regression?
8. Would a compute-optimized family help?
9. What are P95/P99 latency and saturation?

## 32.2 RDS

**Q: What is the difference between Multi-AZ and read replica?**

Strong answer:

- Multi-AZ primarily improves availability/failover.
- Read replicas primarily scale reads and can contribute to DR patterns.
- Replication behavior differs.
- A replica is not a backup.
- Exact behavior depends on RDS deployment type/engine.

## 32.3 VPC

**Q: What makes a subnet public?**

A subnet is considered public when its route table has a route to an Internet Gateway and resources are configured appropriately for internet communication.

## 32.4 NAT

**Q: Why put NAT Gateway in public subnet?**

Because it needs the route path through the Internet Gateway while private subnet resources route outbound traffic to the NAT.

## 32.5 Security groups

**Q: Security group vs NACL?**

- SG: stateful, resource/ENI-level, allow rules.
- NACL: stateless, subnet-level, allow/deny, ordered.

## 32.6 S3

**Q: How would you securely deliver private files?**

Possible:

```text
authenticated backend
→ presigned URL
→ temporary S3 access
```

or:

```text
CloudFront
→ controlled private S3 origin
```

depending on use case.

## 32.7 Lambda

**Q: Why can Lambda overload RDS?**

Lambda can scale concurrency quickly. Each function can open database connections, exceeding DB connection capacity. Mitigate with:

- RDS Proxy
- proper pooling
- concurrency limits
- queue buffering
- architecture changes

## 32.8 Messaging

**Q: SQS vs SNS?**

SQS:

- queue
- pull/consumer processing
- buffering/decoupling

SNS:

- topic
- publish to multiple subscribers
- fanout

Often used together.

## 32.9 EventBridge

**Q: SQS vs EventBridge?**

SQS:

- durable work queue/buffer

EventBridge:

- event routing/filtering to multiple targets

An architecture can route event to an SQS queue.

## 32.10 Containers

**Q: ECS or EKS?**

Choose ECS unless Kubernetes-specific requirements/ecosystem/team standards justify EKS.

Explain trade-off rather than declaring one universally better.

## 32.11 Cost

**Q: Why is your private workload’s network bill high?**

Investigate:

- NAT gateway processing
- cross-AZ traffic
- cross-Region transfer
- internet egress
- container pulls
- S3 traffic path
- VPC endpoint opportunities

## 32.12 Reliability

**Q: How do you design for AZ failure?**

- multiple AZ subnets
- load-balanced stateless compute
- autoscaling
- Multi-AZ database
- no single-AZ-only critical dependency
- test failover

## 32.13 Security

**Q: App needs S3 access. Store keys in environment variables?**

Prefer workload IAM role and temporary credentials. Use environment variables for non-secret configuration, not long-lived AWS access keys.

## 32.14 Architecture scenario

Requirement:

- unpredictable traffic
- image uploads
- background image processing
- user wants immediate upload acknowledgment

Design:

```text
Client
 ↓
API / presigned upload
 ↓
S3
 ↓ event
SQS
 ↓
Lambda/ECS workers
 ↓
processed S3
```

Why?

- upload request is fast
- queue absorbs bursts
- worker scales independently
- failures retry safely

---

# 33. Learning Roadmap

## Phase 1 — Foundation

Learn:

- cloud concepts
- Region/AZ
- shared responsibility
- IAM
- VPC basics
- EC2
- S3
- RDS

Goal:

> Deploy a secure simple web app.

## Phase 2 — Production core

Learn:

- ALB
- Auto Scaling
- Route 53
- CloudFront
- CloudWatch
- CloudTrail
- Systems Manager
- KMS
- Secrets Manager

Goal:

> Operate a multi-AZ production-style app.

## Phase 3 — Modern applications

Learn:

- Lambda
- API Gateway
- SQS
- SNS
- EventBridge
- Step Functions
- DynamoDB

Goal:

> Build an event-driven serverless application.

## Phase 4 — Containers and DevOps

Learn:

- Docker
- ECR
- ECS
- Fargate
- EKS basics
- CloudFormation
- CDK
- CI/CD

Goal:

> Containerize, automate, and deploy using IaC.

## Phase 5 — Enterprise cloud

Learn:

- Organizations
- Control Tower
- IAM Identity Center
- SCP
- central logging
- security services
- hybrid networking
- backup/DR
- FinOps

Goal:

> Design a governed multi-account environment.

## Phase 6 — Data and AI

Learn:

- S3 data lakes
- Glue
- Athena
- Redshift
- streaming
- SageMaker AI
- Bedrock
- RAG

Goal:

> Build an analytics pipeline and GenAI application.

## Phase 7 — Architecture mastery

Practice:

- requirement discovery
- service tradeoffs
- failure analysis
- security threat modeling
- cost optimization
- Well-Architected reviews
- migration planning
- architecture diagrams

Goal:

> Explain *why* each service exists in your design.

---

# 34. AWS CLI Cheat Sheet

> Commands evolve. Confirm against the current AWS CLI documentation before production use.

## Configure

```bash
aws configure
```

Prefer SSO/federated profiles where supported rather than permanent IAM-user keys.

## Check identity

```bash
aws sts get-caller-identity
```

This is one of the most useful troubleshooting commands.

## List S3 buckets

```bash
aws s3 ls
```

## Copy file to S3

```bash
aws s3 cp report.pdf s3://example-bucket/reports/report.pdf
```

## Sync directory

```bash
aws s3 sync ./dist s3://example-bucket/
```

## Describe EC2 instances

```bash
aws ec2 describe-instances
```

## Describe security groups

```bash
aws ec2 describe-security-groups
```

## List Lambda functions

```bash
aws lambda list-functions
```

## Invoke Lambda

```bash
aws lambda invoke \
  --function-name example-function \
  --payload '{"name":"AWS"}' \
  response.json
```

## List SQS queues

```bash
aws sqs list-queues
```

## Send SQS message

```bash
aws sqs send-message \
  --queue-url "QUEUE_URL" \
  --message-body '{"orderId":"ORD-1001"}'
```

## CloudFormation deploy

```bash
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name sample-stack
```

## ECS list clusters

```bash
aws ecs list-clusters
```

## ECR login concept

Use AWS CLI to obtain an authentication token and authenticate Docker to the regional ECR registry according to the current ECR documentation.

## Useful CLI habits

```bash
--profile
--region
--output json
--query
```

Example:

```bash
aws ec2 describe-instances \
  --query 'Reservations[].Instances[].InstanceId' \
  --output text
```

---

# 35. Glossary

**AMI** — Amazon Machine Image used to launch EC2 instances.

**ARN** — Amazon Resource Name, a standardized resource identifier.

**ASG** — Auto Scaling Group.

**Availability Zone** — isolated infrastructure location within an AWS Region.

**CIDR** — notation for IP address ranges.

**CloudFormation** — AWS-native infrastructure-as-code provisioning service.

**CloudFront** — AWS content delivery network.

**CloudTrail** — AWS API activity/audit service.

**CloudWatch** — monitoring, metrics, logs, alarms, and observability service.

**DynamoDB** — managed NoSQL key-value/document database.

**EBS** — block storage primarily associated with EC2 workloads.

**EC2** — virtual compute service.

**ECR** — managed container image registry.

**ECS** — AWS-native container orchestration service.

**EFS** — managed shared file storage.

**EKS** — managed Kubernetes service.

**ENI** — Elastic Network Interface.

**Eventual consistency** — updates propagate over time rather than all readers necessarily seeing the latest value instantly.

**Fargate** — serverless compute engine for supported container services.

**IAM** — Identity and Access Management.

**IAM role** — assumable identity that provides temporary credentials.

**Idempotency** — repeated operation produces no additional unintended effect.

**IGW** — Internet Gateway.

**KMS** — Key Management Service.

**Lambda** — serverless compute service.

**NACL** — Network Access Control List.

**NAT Gateway** — managed NAT service for outbound connectivity patterns.

**OU** — Organizational Unit in AWS Organizations.

**RDS** — managed relational database service.

**Region** — AWS geographic area containing multiple Availability Zones.

**RPO** — Recovery Point Objective.

**RTO** — Recovery Time Objective.

**S3** — object storage service.

**SCP** — Service Control Policy used with AWS Organizations.

**Security Group** — stateful resource-level network firewall.

**SNS** — publish/subscribe messaging service.

**SQS** — managed message queue.

**STS** — Security Token Service.

**VPC** — Virtual Private Cloud.

**VPC Endpoint** — private connectivity mechanism to supported services.

**Well-Architected** — AWS framework for reviewing architecture against six pillars.

---

# 36. Official References

AWS changes continuously. Treat this handbook as a conceptual master reference and verify evolving limits, pricing, supported Regions, instance generations, runtime versions, and service features against current AWS documentation.

Primary references used to shape this handbook:

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS Shared Responsibility Model](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/shared-responsibility.html)
- [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [IAM Security Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
- [AWS Control Tower](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html)
- [Amazon VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html)
- [Amazon EC2 User Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
- [Amazon S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- [Amazon Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)
- [Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [Amazon SQS Developer Guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
- [Amazon EventBridge User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html)
- [Amazon ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)
- [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [Amazon Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
- [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
- [AWS Secrets Manager User Guide](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
- [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)
- [AWS CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)
- [AWS Config Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)
- [AWS Systems Manager User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)
- [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [AWS CDK v2 Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [AWS CodeBuild User Guide](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)
- [Amazon Athena User Guide](https://docs.aws.amazon.com/athena/latest/ug/what-is.html)
- [Amazon Redshift Management Guide](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)
- [Amazon SageMaker AI Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
- [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)

---

# Appendix A — Architecture Reasoning Template

Use this before choosing AWS services.

## Business requirement

```text
What problem are we solving?
Who are the users?
What is the expected traffic?
What is the budget?
What compliance applies?
```

## Functional requirements

```text
- Authentication?
- File uploads?
- Search?
- Transactions?
- Background processing?
- Real-time events?
- Reporting?
```

## Non-functional requirements

```text
Availability:
Latency:
RPO:
RTO:
Peak requests/sec:
Data volume:
Retention:
Regions:
Security classification:
```

## Architecture questions

```text
1. Which components are stateful?
2. What happens during AZ failure?
3. What happens during DB failure?
4. What happens during dependency timeout?
5. How is access authenticated?
6. How are secrets stored?
7. How are logs centralized?
8. How do we deploy?
9. How do we roll back?
10. What are the top three cost drivers?
```

---

# Appendix B — Example End-to-End Production Architecture

Requirement:

- public SaaS application
- React frontend
- REST backend
- background processing
- PostgreSQL
- file upload
- moderate global audience
- production-grade security/operations

Possible architecture:

```text
Users
  ↓
Route 53
  ↓
CloudFront + WAF
  ├────────────────────→ Private S3 frontend
  │
  └→ ALB / API layer
        ↓
      ECS Fargate
      across AZ-A/AZ-B
        ├→ RDS PostgreSQL Multi-AZ
        ├→ ElastiCache
        ├→ S3 private files
        ├→ SQS
        │    ↓
        │  ECS worker / Lambda
        └→ Secrets Manager

Operations:
CloudWatch + CloudTrail + Config

Security:
IAM roles + KMS + ACM + GuardDuty + Security Hub

Delivery:
Git → CI → ECR → ECS
Infrastructure:
CDK / CloudFormation

Governance:
Organizations + Identity Center + SCP + central logging
```

Why this is strong:

- static and dynamic workloads separated
- compute is horizontally scalable
- database is managed
- background work is decoupled
- secrets are externalized
- public entry points are controlled
- observability is included
- deployment is automated
- governance is not an afterthought

---

# Appendix C — Anti-Patterns to Avoid

## Anti-pattern 1: One giant EC2 server

```text
Nginx + app + DB + Redis + cron + files
all on one EC2
```

Okay for a tiny temporary lab.

Poor production resilience.

## Anti-pattern 2: Public database

```text
Internet → RDS:3306
```

Keep database private unless there is an explicit justified design.

## Anti-pattern 3: Admin access everywhere

```text
Developer → AdministratorAccess
Application → AdministratorAccess
CI → AdministratorAccess
```

Use separate least-privilege roles.

## Anti-pattern 4: Synchronous everything

```text
API → service → service → service → service
```

A single slow dependency creates cascading failure.

Use queues/events for asynchronous work.

## Anti-pattern 5: No timeout

Every remote call needs sensible timeout behavior.

Without timeout:

```text
dependency hangs
→ thread waits
→ pool fills
→ application collapses
```

## Anti-pattern 6: Retry storm

Bad:

```text
1000 clients
→ dependency fails
→ all immediately retry 10 times
```

Use:

- exponential backoff
- jitter
- circuit-breaking patterns where appropriate
- queue buffering

## Anti-pattern 7: Replica as backup

Replication reproduces some destructive changes.

Maintain backups and test restores.

## Anti-pattern 8: Manual production

If production can only be rebuilt by “the person who remembers the console clicks,” the environment is fragile.

Use IaC.

## Anti-pattern 9: Logs forever

Infinite retention can create huge cost and compliance problems.

Set intentional retention.

## Anti-pattern 10: Kubernetes for one small app

Complexity is a cost.

Use the simplest platform that satisfies the requirement.

---

# Appendix D — Final Mastery Checklist

You are approaching strong practical AWS competence when you can confidently explain and demonstrate:

- [ ] Region vs AZ vs edge.
- [ ] Shared responsibility.
- [ ] IAM user vs role vs policy.
- [ ] Identity policy vs resource policy.
- [ ] SCP vs IAM permission.
- [ ] Public vs private subnet.
- [ ] IGW vs NAT Gateway.
- [ ] Security Group vs NACL.
- [ ] Peering vs Transit Gateway.
- [ ] S3 vs EBS vs EFS.
- [ ] S3 versioning, lifecycle, encryption, access.
- [ ] EC2 AMI, instance family, user data, role.
- [ ] ALB vs NLB.
- [ ] Auto Scaling.
- [ ] Multi-AZ vs read replica.
- [ ] RDS vs Aurora vs DynamoDB.
- [ ] Query vs Scan in DynamoDB.
- [ ] Lambda concurrency and retries.
- [ ] API Gateway.
- [ ] SQS vs SNS vs EventBridge.
- [ ] DLQs and idempotency.
- [ ] Step Functions.
- [ ] ECR/ECS/Fargate.
- [ ] ECS vs EKS.
- [ ] Route 53 routing policies.
- [ ] CloudFront caching.
- [ ] KMS and envelope encryption.
- [ ] Secrets Manager.
- [ ] WAF/GuardDuty/Inspector/Macie/Security Hub.
- [ ] CloudWatch vs CloudTrail vs Config.
- [ ] Systems Manager.
- [ ] CloudFormation/CDK.
- [ ] CI/CD deployment strategies.
- [ ] Data lake/Athena/Redshift.
- [ ] Bedrock/RAG/SageMaker AI.
- [ ] RPO/RTO and DR patterns.
- [ ] Well-Architected six pillars.
- [ ] Cost analysis and common cost traps.
- [ ] Multi-account AWS governance.
- [ ] How to troubleshoot a failing request from DNS to database.
- [ ] How to justify every service in an architecture.

---

## Closing Principle

The best AWS architecture is rarely the one with the most AWS services.

It is the one that:

```text
meets the requirement
+ survives expected failures
+ protects data
+ is understandable by the team
+ can be operated safely
+ can be changed safely
+ costs an acceptable amount
```

When you can explain those trade-offs clearly, you are learning AWS as an engineer rather than memorizing AWS as a catalog.


# Appendix E — Broader AWS Service Map

AWS has far more services than any one engineer uses daily. The goal of this appendix is **awareness**, not memorization. When you encounter a requirement, this map helps you know which AWS category to investigate.

## E.1 Compute and application hosting

### EC2
Virtual machines with maximum general-purpose infrastructure control.

### EC2 Auto Scaling
Automatically maintains/scales EC2 fleets.

### Elastic Load Balancing
Distributes traffic across healthy targets.

### Lambda
Event-driven serverless compute.

### ECS
AWS-native container orchestration.

### Fargate
Serverless compute for containers.

### EKS
Managed Kubernetes.

### AWS Batch
Batch-job scheduling and compute orchestration.

### Elastic Beanstalk
Managed application platform experience built on AWS infrastructure.

### App Runner
Managed application/container web-service platform for teams wanting a simpler deployment abstraction.

### Lightsail
Simplified cloud hosting for smaller/simple workloads.

**Decision idea:**

```text
Simple small website/VPS style       → Lightsail
Managed web app from code/container  → App Runner / Beanstalk
VM control                           → EC2
AWS containers                       → ECS
Kubernetes                           → EKS
Functions/events                     → Lambda
Batch jobs                           → Batch
```

---

## E.2 Advanced networking

### AWS PrivateLink

PrivateLink enables private service-consumer connectivity through interface endpoints for supported services and endpoint services.

Useful when:

```text
Consumer VPC
   ↓ private endpoint
Service provider
```

without requiring broad VPC-to-VPC routing.

Compare:

- VPC peering: network-to-network connectivity
- Transit Gateway: routing hub
- PrivateLink: expose a specific service privately
- VPC Lattice: application networking across services/VPCs/accounts

### Amazon VPC Lattice

VPC Lattice is a managed application networking service for connecting, securing, and monitoring services/resources across VPCs and accounts.

Good for:

- microservice connectivity
- cross-account application networks
- service-level authorization
- reducing hand-built service-network complexity

Conceptual model:

```text
Client VPC
    ↓
Service Network
 ├→ Service A
 ├→ Service B
 └→ Resource
```

### AWS Network Firewall

Managed stateful VPC firewall/inspection service.

Use for:

- centralized egress filtering
- domain/IP controls
- stateful inspection
- intrusion detection/prevention patterns
- north-south or east-west network inspection

Typical centralized model:

```text
Workload VPCs
     ↓
Transit Gateway
     ↓
Inspection VPC
     ↓
AWS Network Firewall
     ↓
Internet / other networks
```

### AWS Firewall Manager

Central policy management for supported firewall/security services across AWS Organizations.

Useful in enterprises with many accounts.

### AWS Cloud WAN

Managed wide-area networking for large global AWS/hybrid networks.

Investigate when a traditional Transit Gateway design becomes complex across Regions and global network segments.

### Route 53 Resolver

Hybrid DNS resolution and forwarding.

Common use:

```text
On-prem DNS ↔ Route 53 Resolver ↔ private AWS DNS
```

### Traffic Mirroring

Copies supported network traffic for inspection/analysis.

Use for advanced security/network analysis.

---

## E.3 Advanced storage and transfer

### Storage Gateway

Hybrid storage service connecting on-premises environments with AWS storage.

Gateway patterns include:

- file-oriented
- volume-oriented
- virtual tape-oriented

Use when legacy/on-prem applications need familiar storage interfaces while data is integrated with AWS.

### DataSync

Automated high-speed data movement for supported storage endpoints.

### Transfer Family

Managed file-transfer protocols for workflows that need protocols such as SFTP/FTPS/FTP depending on configuration/service support.

Useful scenario:

```text
External vendor sends SFTP file
      ↓
AWS Transfer Family
      ↓
S3
      ↓
processing pipeline
```

### AWS Backup

Central backup policies across supported AWS resources/accounts.

### EBS Snapshot Lifecycle / Data Lifecycle Manager

Automates lifecycle of supported EC2/EBS image/snapshot resources.

---

## E.4 Application integration beyond the core

### Amazon MQ

Managed message brokers for organizations requiring broker/protocol compatibility such as ActiveMQ/RabbitMQ-style applications.

Use when migrating existing broker-based applications that cannot easily switch to SQS/SNS.

### Amazon MSK

Managed Apache Kafka.

Choose when Kafka semantics/ecosystem are required.

Use cases:

- event streaming
- data pipelines
- CDC streams
- analytics events
- many producers/consumers

Compare:

```text
Simple work queue       → SQS
AWS event routing       → EventBridge
Pub/sub notification    → SNS
Kafka ecosystem         → MSK
Legacy broker protocols → Amazon MQ
```

### AppSync

Managed GraphQL API service.

Useful when:

- GraphQL is an explicit application requirement
- clients need flexible data querying/subscriptions
- application benefits from managed GraphQL integrations

### Amazon SES

Managed email sending/receiving capabilities.

Use for:

- transactional email
- application-generated email

Do not build a mail server on EC2 merely to send password-reset emails.

### Amazon AppFlow

Managed data integration between supported SaaS applications and AWS services.

---

## E.5 Data governance and streaming

### Lake Formation

Helps build, secure, and govern data lakes.

Use with:

- S3
- Glue Data Catalog
- analytics services

### Amazon MSK

Kafka-based managed streaming.

### Kinesis Data Streams

AWS-native real-time streaming ingestion.

### Data Firehose

Managed delivery of streaming data to supported destinations.

### Glue

Catalog and ETL/data integration.

### Athena

Serverless query on data.

### Redshift

Warehouse analytics.

### OpenSearch

Search/log analytics.

### EMR

Managed big-data processing frameworks.

### QuickSight

BI visualization.

**Pipeline example:**

```text
Applications
   ↓
Kinesis/MSK
   ↓
Firehose/stream processing
   ↓
S3
   ↓
Glue Catalog
   ├→ Athena
   ├→ Redshift
   └→ ML
```

---

## E.6 Security and governance expansion

### AWS Artifact

Access AWS compliance reports and agreements.

### Audit Manager

Helps collect evidence for supported audit frameworks.

### Detective

Security investigation/analysis for supported security signals.

### Firewall Manager

Central firewall/security policy management.

### Directory Service

Managed directory options for Microsoft Active Directory-related workloads.

### Resource Access Manager (RAM)

Share supported resources across accounts.

Example:

```text
Central Network Account
   ↓ share
VPC subnets
   ↓
Application accounts
```

### Service Catalog

Provide approved infrastructure/products to internal teams.

Useful for controlled self-service.

### Organizations policies beyond SCP

AWS Organizations supports multiple policy types. Always verify the current policy categories and inheritance behavior before designing governance.

---

## E.7 Operations and management expansion

### AWS Health

Provides information about events that can affect AWS resources/accounts.

### Service Quotas

View/request quota changes.

A production launch checklist should include quota review for:

- compute
- networking
- load balancers
- Lambda concurrency
- API limits
- database limits
- messaging
- AI/model throughput

### Resource Groups and Tagging

Group/manage resources based on tags and metadata.

### Compute Optimizer

Optimization recommendations for supported compute resources.

### Trusted Advisor

Best-practice recommendations based on available plan/features.

### CloudShell

Browser-based shell for AWS CLI tasks.

### Cloud9 note

Developer-tool offerings can evolve. Prefer current AWS guidance rather than assuming older tutorials represent the recommended development environment.

---

## E.8 End-user computing

### WorkSpaces

Managed virtual desktop capabilities.

### AppStream

Application streaming for supported virtual-app scenarios.

Use cases:

- controlled desktop environments
- contractor access
- specialized desktop applications

---

## E.9 IoT and edge

### AWS IoT Core

Connect/manage IoT device messaging.

Typical pattern:

```text
Device
 ↓ MQTT
IoT Core
 ↓ rule
Lambda / Kinesis / S3 / DynamoDB
```

### IoT Greengrass

Extend AWS/IoT processing to edge devices.

Use when devices need:

- local processing
- intermittent connectivity handling
- edge components

---

## E.10 AI application services

In addition to Bedrock and SageMaker AI, AWS provides managed AI capabilities for specialized workloads.

Examples to investigate when relevant:

- document extraction
- image/video analysis
- language/NLP
- speech
- translation
- search/enterprise knowledge

The correct decision is often:

```text
Ready-made AI API meets requirement?
   yes → use managed API
   no
Foundation model solves it?
   yes → Bedrock
   no
Custom ML training?
   → SageMaker AI / custom compute
```

---

# Appendix F — Advanced Architecture Concepts

## F.1 Blast radius

Blast radius is how much of the system is affected when something fails or is compromised.

Bad:

```text
One AWS account
One admin role
One VPC
One database
All applications
```

Better isolation:

```text
Separate accounts
Separate workload roles
Independent data stores where justified
Network segmentation
Deployment boundaries
```

Ask:

> If this credential is compromised, what is the maximum damage possible?

## F.2 Cell-based architecture

At very large scale, workloads can be divided into independent cells.

```text
Users 1–10k   → Cell A
Users 10k–20k → Cell B
Users 20k–30k → Cell C
```

A failure in one cell affects only part of the user base.

This is more advanced than ordinary multi-AZ design.

## F.3 Bulkhead pattern

Inspired by ships: isolate components so one failure does not sink everything.

Example:

```text
Premium queue → premium workers
Free queue    → free workers
```

A flood from free users cannot consume all premium processing capacity.

## F.4 Circuit breaker

If a dependency repeatedly fails:

```text
Calls fail
 ↓
Circuit opens
 ↓
Stop hammering dependency
 ↓
Return fallback/error quickly
 ↓
Try later
```

This prevents cascading failure.

AWS managed services do not automatically fix poor retry architecture in your application.

## F.5 Exponential backoff and jitter

Bad retry:

```text
retry after 1 second
100,000 clients all retry together
```

Better:

```text
1s + random jitter
2s + random jitter
4s + random jitter
...
```

Jitter reduces synchronized retry spikes.

## F.6 Backpressure

A producer can generate work faster than consumers can process.

Queue:

```text
Producer rate = 10,000/min
Consumer rate = 6,000/min
```

Backlog grows by:

```text
4,000/min
```

Solutions:

- scale consumers
- slow/rate-limit producers
- prioritize work
- partition workload
- reject excess traffic
- redesign bottleneck

Monitor **oldest message age**, not just queue count.

## F.7 Idempotency keys

For operations such as payment/order creation:

```http
POST /payments
Idempotency-Key: order-123-payment
```

Server records key/result.

Retry:

```text
same key
→ return existing result
→ do not charge twice
```

## F.8 Exactly-once myth

Distributed systems often cannot provide simple universal “exactly once” semantics end-to-end.

Build correctness using:

- idempotency
- deduplication
- transactional boundaries
- message semantics
- state tracking

Even if a service provides exactly-once processing features under certain conditions, understand what is and is not covered.

## F.9 Event schema evolution

Events become contracts.

Version deliberately.

Bad:

```json
{"price": 100}
```

New producer suddenly changes:

```json
{"price": {"amount":100,"currency":"INR"}}
```

Old consumers break.

Use:

- versioning
- backward-compatible additions
- schema governance
- consumer testing

## F.10 Database connection storms

When autoscaling compute expands rapidly:

```text
100 app instances
× 100 DB connections
= 10,000 connections
```

Database may fail before CPU reaches its limit.

Use:

- sane pool sizes
- proxies
- concurrency limits
- queue buffering
- connection reuse

## F.11 Cache-aside

Common cache pattern:

```text
Application
  ↓ get key
Cache
  ├─ hit → return
  └─ miss
       ↓
     Database
       ↓
     cache result
       ↓
     return
```

Problems to solve:

- TTL
- invalidation
- stampede
- stale reads

## F.12 Write-through / write-behind

Alternative cache patterns.

Use carefully because data consistency becomes more complex.

## F.13 CQRS

Command Query Responsibility Segregation separates write and read models.

Example:

```text
Writes → transactional DB
           ↓ events
Reads  → denormalized search/read store
```

Useful for specialized scaling/read patterns, but adds complexity.

## F.14 Saga pattern

Distributed transaction alternative.

Example:

```text
1. Create order
2. Charge payment
3. Reserve inventory

If step 3 fails:
→ refund payment
→ cancel order
```

Step Functions can help orchestrate saga workflows.

## F.15 Multi-tenant SaaS

Common models:

### Pool

```text
Many tenants share app and DB tables
tenant_id distinguishes data
```

### Silo

```text
Dedicated resources per tenant
```

### Bridge

Mix of shared and dedicated components.

Trade-offs:

- isolation
- cost
- operational complexity
- noisy neighbor
- compliance

Never trust only frontend filtering for tenant isolation.

## F.16 Noisy neighbor

One tenant/workload consumes shared resources and harms others.

Mitigate with:

- quotas
- throttling
- separate queues
- separate compute pools
- partitioning
- per-tenant limits

## F.17 Multi-Region active-passive

```text
Region A = active
Region B = standby
```

Simpler than active-active but failover must be tested.

## F.18 Multi-Region active-active

```text
Users
 ↓
Global routing
 ├→ Region A
 └→ Region B
```

Hard parts are usually data and operations, not DNS.

## F.19 Deployment safety hierarchy

From riskier to safer:

```text
Manual SSH edits
↓
Scripted in-place deployment
↓
Rolling deployment
↓
Canary
↓
Blue/green / immutable
```

No strategy is universally best. Choose based on:

- cost
- rollback requirements
- traffic
- state
- deployment frequency

## F.20 Control plane vs data plane

### Control plane

Creates/configures infrastructure.

Examples:

```text
CreateBucket
RunInstances
CreateTable
```

### Data plane

Handles workload data/traffic.

Examples:

```text
GetObject
PutItem
SendMessage
```

This distinction matters for:

- security policies
- auditing
- quotas
- incident analysis

---

# Appendix G — A Practical AWS Design Exercise

## Requirement

Build a document-processing platform:

- users upload PDF invoices
- upload must return quickly
- OCR may take 30 seconds
- occasional OCR failure
- extracted data needs human approval when confidence is low
- approved invoice is posted to an ERP API
- ERP sometimes becomes unavailable
- 50 files/min normally, 2,000 files/min during month-end
- files retained seven years
- production must survive one AZ failure

## Step 1 — Separate synchronous from asynchronous work

User should not wait for OCR.

```text
Client
 ↓
API
 ↓
presigned upload
 ↓
S3
```

Response:

```text
202 Accepted / upload complete
```

## Step 2 — Buffer burst

```text
S3 event
 ↓
SQS
```

At month-end:

```text
arrival = 2,000/min
processing = 500/min
```

Queue absorbs burst while workers scale.

## Step 3 — OCR compute

Choose based on OCR implementation:

```text
Managed document AI API?
→ use appropriate managed AI service

Custom short-running code?
→ Lambda

Custom container / heavy runtime?
→ ECS Fargate

GPU/custom host?
→ EC2/ECS/EKS as justified
```

## Step 4 — Store state

Possible:

```text
S3 = document
DynamoDB/RDS = workflow metadata
```

Choose DB based on query/transaction requirements.

## Step 5 — Human approval

State machine:

```text
OCR
 ↓
confidence >= threshold?
 ├─ yes → ERP posting
 └─ no  → HumanApproval state
```

Step Functions can make state explicit.

## Step 6 — ERP outage

Do not repeatedly call failing ERP synchronously.

Use:

```text
Approval
 ↓
ERP Queue
 ↓
Worker
 ↓
ERP
```

With:

- retry backoff
- DLQ
- idempotency key
- alert on oldest-message age

## Step 7 — Seven-year retention

Use S3 lifecycle according to:

- access frequency
- retrieval requirements
- legal hold/compliance needs

Consider:

- Object Lock where regulatory immutability is required
- versioning
- archive storage class
- separate backup/replication

Verify precise compliance configuration against current AWS docs/legal requirements.

## Step 8 — AZ resilience

- S3/SQS managed regional resilience
- compute across AZs where applicable
- RDS Multi-AZ if relational DB used
- load balancer across AZs
- no single NAT dependency for critical paths
- monitor quotas

## Step 9 — Security

```text
Users → authenticated
API → least privilege
Workers → task/function roles
Secrets → Secrets Manager
Data → KMS encryption
Public path → WAF
Audit → CloudTrail
```

## Step 10 — Observability

Metrics:

- uploads/min
- OCR duration
- OCR failures
- queue depth
- oldest message age
- low-confidence percentage
- ERP success/failure
- end-to-end processing time

Business SLO:

```text
99% of invoices processed within 10 minutes
```

This single project exercises a large portion of practical AWS architecture.

---

# Appendix H — Keep This Handbook Current

AWS releases and changes services frequently.

Review the handbook periodically for:

- new instance families
- changed pricing
- service renames
- deprecated runtimes
- new Regions
- new managed service features
- changed quotas
- security recommendations
- newly released Well-Architected guidance
- certification changes

For production decisions, always confirm against current AWS documentation.

