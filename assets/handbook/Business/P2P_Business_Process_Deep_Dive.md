# Procure-to-Pay (P2P) Business Process — Complete Deep-Dive Guide

> **Purpose:** This document explains the complete Procure-to-Pay (P2P) business process from business need identification through supplier payment, accounting, reconciliation, controls, audit, and reporting.
>
> **Audience:** Business Analysts, AP/Finance teams, Procurement teams, ERP developers, OCR/invoice-processing developers, Solution Architects, Internal Audit, Support teams, and anyone learning enterprise P2P.

---

## Table of Contents

1. [What is P2P?](#1-what-is-p2p)
2. [P2P Scope and Objectives](#2-p2p-scope-and-objectives)
3. [End-to-End P2P Flow](#3-end-to-end-p2p-flow)
4. [Core P2P Master Data](#4-core-p2p-master-data)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Step 1 — Business Requirement / Demand Identification](#6-step-1--business-requirement--demand-identification)
7. [Step 2 — Purchase Requisition (PR)](#7-step-2--purchase-requisition-pr)
8. [Step 3 — PR Approval and Budget Check](#8-step-3--pr-approval-and-budget-check)
9. [Step 4 — Sourcing / RFQ / Vendor Selection](#9-step-4--sourcing--rfq--vendor-selection)
10. [Step 5 — Supplier / Vendor Onboarding](#10-step-5--supplier--vendor-onboarding)
11. [Step 6 — Purchase Order (PO) Creation](#11-step-6--purchase-order-po-creation)
12. [Step 7 — PO Approval and Release](#12-step-7--po-approval-and-release)
13. [Step 8 — Supplier Acknowledgment and Fulfilment](#13-step-8--supplier-acknowledgment-and-fulfilment)
14. [Step 9 — Goods Receipt / Service Receipt](#14-step-9--goods-receipt--service-receipt)
15. [Step 10 — Invoice Receipt](#15-step-10--invoice-receipt)
16. [Step 11 — Invoice Capture / OCR / Data Extraction](#16-step-11--invoice-capture--ocr--data-extraction)
17. [Step 12 — Invoice Validation](#17-step-12--invoice-validation)
18. [Step 13 — Two-Way / Three-Way / Four-Way Matching](#18-step-13--two-way--three-way--four-way-matching)
19. [Step 14 — Exception / Deviation Handling](#19-step-14--exception--deviation-handling)
20. [Step 15 — Invoice Approval Workflow](#20-step-15--invoice-approval-workflow)
21. [Step 16 — Invoice Posting](#21-step-16--invoice-posting)
22. [Step 17 — Payment Proposal / Payment Run](#22-step-17--payment-proposal--payment-run)
23. [Step 18 — Payment Execution](#23-step-18--payment-execution)
24. [Step 19 — Supplier Remittance and Reconciliation](#24-step-19--supplier-remittance-and-reconciliation)
25. [Step 20 — Period-End Closing](#25-step-20--period-end-closing)
26. [PO Invoice vs Non-PO Invoice](#26-po-invoice-vs-non-po-invoice)
27. [GRN, GIR and Service Entry Concepts](#27-grn-gir-and-service-entry-concepts)
28. [Invoice Matching Logic in Depth](#28-invoice-matching-logic-in-depth)
29. [Invoice Types and Special Scenarios](#29-invoice-types-and-special-scenarios)
30. [Advance Payment Process](#30-advance-payment-process)
31. [Credit Note and Debit Note Process](#31-credit-note-and-debit-note-process)
32. [Tax Handling in P2P](#32-tax-handling-in-p2p)
33. [Accounting Entries](#33-accounting-entries)
34. [Approval Matrix Design](#34-approval-matrix-design)
35. [P2P Status Model](#35-p2p-status-model)
36. [P2P Data Model / Important Fields](#36-p2p-data-model--important-fields)
37. [Controls and Segregation of Duties](#37-controls-and-segregation-of-duties)
38. [Common Risks and Preventive Controls](#38-common-risks-and-preventive-controls)
39. [Duplicate Invoice Detection](#39-duplicate-invoice-detection)
40. [Vendor Master Controls](#40-vendor-master-controls)
41. [Three-Way Match Decision Tree](#41-three-way-match-decision-tree)
42. [Month-End and Year-End Activities](#42-month-end-and-year-end-activities)
43. [P2P Integrations](#43-p2p-integrations)
44. [Audit Trail and Evidence](#44-audit-trail-and-evidence)
45. [P2P KPIs and SLAs](#45-p2p-kpis-and-slas)
46. [Common P2P Exceptions](#46-common-p2p-exceptions)
47. [Sample End-to-End Business Scenarios](#47-sample-end-to-end-business-scenarios)
48. [Suggested System Architecture](#48-suggested-system-architecture)
49. [Example Business Rules](#49-example-business-rules)
50. [P2P Glossary](#50-p2p-glossary)
51. [Recommended P2P Principle](#51-recommended-p2p-principle)
52. [Quick P2P Interview / Revision Summary](#52-quick-p2p-interview--revision-summary)
53. [Final End-to-End Reference Flow](#53-final-end-to-end-reference-flow)

---

# 1. What is P2P?

**P2P** normally means **Procure-to-Pay** or **Purchase-to-Pay**.

It is the complete business cycle used by an organization to:

1. Identify a need for goods or services.
2. Obtain internal approval.
3. Select a supplier.
4. Create a purchase order.
5. Receive goods or services.
6. Receive the supplier invoice.
7. Validate and match the invoice.
8. Approve exceptions when required.
9. Post the invoice into the ERP/accounting system.
10. Pay the supplier.
11. Reconcile the transaction.
12. Maintain audit evidence.

P2P begins with an approved need and ends when the supplier balance and bank movement are reconciled. **Source-to-Pay (S2P)** is broader: it also emphasizes category strategy, supplier discovery, sourcing events, contracting, and supplier performance before a specific purchase. **Order-to-Cash (O2C)** is the opposite commercial cycle—the organization sells to customers and collects receivables.

A purchase order, receipt, invoice, and payment are separate business events:

| Event | What It Proves | Usual Financial Effect |
|---|---|---|
| PO approved | The organization authorized a commitment | Usually no GL entry unless commitment accounting is used |
| Goods/service accepted | Delivery or performance occurred | May record inventory/expense and a receipt accrual such as GR/IR |
| Invoice posted | A valid supplier claim was recognized | Creates or confirms accounts payable |
| Payment settled | Cash left the bank and the supplier item was cleared | Reduces bank and accounts payable |

A simplified representation is:

```text
Requirement
   ↓
Purchase Requisition
   ↓
Approval
   ↓
Sourcing / Vendor Selection
   ↓
Purchase Order
   ↓
Goods / Service Receipt
   ↓
Supplier Invoice
   ↓
Invoice Validation
   ↓
2-Way / 3-Way Match
   ↓
Exception Workflow if Required
   ↓
Invoice Posting
   ↓
Payment Run
   ↓
Bank Payment
   ↓
Reconciliation / Close
```

---

# 2. P2P Scope and Objectives

## 2.1 Main business objectives

A mature P2P process should ensure:

- Purchases are authorized.
- Suppliers are legitimate and approved.
- Correct price and quantity are used.
- Goods/services were actually received.
- The same invoice is not paid twice.
- Tax is handled correctly.
- Payments are made on time.
- Early-payment discounts are captured where beneficial.
- Fraud and unauthorized purchases are prevented.
- Complete audit trail is maintained.
- Financial statements contain correct liabilities and expenses.

## 2.2 Main P2P functions

P2P usually involves:

- Procurement
- Vendor management
- Requesting departments
- Stores / warehouse
- Accounts Payable (AP)
- Finance
- Tax
- Treasury
- Budget owners
- Approvers
- ERP / IT support
- Internal audit
- External audit

---

# 3. End-to-End P2P Flow

A common enterprise P2P lifecycle is:

| Stage | Business Object | Primary Owner | Result |
|---|---|---|---|
| 1 | Requirement | Requester | Purchase need identified |
| 2 | Purchase Requisition | Requester | Formal request created |
| 3 | PR Approval | Manager/Budget Owner | Spending authorized |
| 4 | Sourcing | Procurement | Supplier selected |
| 5 | Vendor Master | Vendor Management | Supplier approved in system |
| 6 | Purchase Order | Procurement | Commercial commitment created |
| 7 | PO Approval | Approvers | PO released |
| 8 | Delivery | Supplier | Goods/services supplied |
| 9 | GRN/GIR/SES | Requester/Warehouse | Receipt confirmed |
| 10 | Invoice | Supplier/AP | Invoice received |
| 11 | Invoice Capture | AP/OCR | Structured invoice data generated |
| 12 | Validation | AP/System | Invoice quality/compliance verified |
| 13 | Matching | ERP/AP | PO/receipt/invoice compared |
| 14 | Exception Workflow | Business/Procurement | Mismatches resolved |
| 15 | Posting | AP/ERP | Liability recorded |
| 16 | Payment Proposal | AP/Treasury | Due invoices selected |
| 17 | Payment Approval | Treasury/Finance | Payment authorized |
| 18 | Bank Payment | Treasury/Bank | Supplier paid |
| 19 | Reconciliation | Finance | Bank/vendor records matched |
| 20 | Closing | Finance | Period closed and reported |

---

# 4. Core P2P Master Data

P2P depends heavily on correct master data.

Master data is reused across many transactions, so one bad change can affect hundreds of orders or payments. Each critical field should have an owner, validation rule, effective date, approval history, and change log. Sensitive vendor bank and tax changes should be treated as new high-risk events rather than routine edits.

## 4.1 Vendor Master

Typical fields:

```text
Vendor ID
Vendor Name
Legal Name
Registered Address
Tax Registration Number
PAN / Tax Identifier
GST Registration Number where applicable
Bank Account Number
Bank Name
IFSC / SWIFT / Routing Code
Payment Terms
Payment Method
Currency
Withholding Tax Category
Vendor Category
Company Code
Purchasing Organization
Purchasing Group
Blocked / Active Status
Contact Details
Email Address
MSME / Small Supplier Classification where applicable
```

## 4.2 Material Master

Typical fields:

```text
Material Code
Material Description
Unit of Measure
Material Group
Valuation Class
Standard Price / Moving Average Price
Tax Classification
Storage Location
Plant
Purchasing Group
```

## 4.3 Service Master

Used for services such as:

- Consulting
- Maintenance
- Security
- Manpower
- Facility services
- Software subscription
- Professional services

Fields can include:

```text
Service Code
Service Description
Service Category
Unit
Rate
GL Mapping
Cost Center Mapping
Tax Classification
```

## 4.4 Finance Master Data

Important objects include:

- Company Code
- Business Unit
- Cost Center
- Profit Center
- GL Account
- Internal Order
- WBS / Project Code
- Asset Code
- Tax Code
- Currency
- Payment Terms
- Bank Master

---

# 5. Roles and Responsibilities

## 5.1 Requester

The requester identifies the business need and normally:

- Creates PR.
- Provides specification.
- Provides cost center/project.
- Confirms goods/services received.
- Answers invoice queries.

## 5.2 Budget Owner

Responsible for:

- Ensuring sufficient budget.
- Approving business need.
- Confirming expenditure is appropriate.

## 5.3 Procurement / Buyer

Responsible for:

- Supplier sourcing.
- Negotiation.
- Price comparison.
- PO creation.
- Contract compliance.
- Commercial clarification.

## 5.4 Vendor Management Team

Responsible for:

- Supplier onboarding.
- Vendor master creation.
- Bank verification.
- Duplicate vendor checks.
- Vendor blocking/unblocking.

## 5.5 Goods Receiver / Warehouse

Responsible for:

- Checking delivered quantity.
- Checking visible quality.
- Recording GRN/GIR.
- Handling returns.

## 5.6 Accounts Payable

Responsible for:

- Receiving invoices.
- Invoice validation.
- Duplicate checks.
- Match verification.
- Invoice posting.
- Exception handling.
- Payment preparation.
- Vendor reconciliation.

## 5.7 Finance Controller

Responsible for high-level financial approval and governance, especially for:

- High-value invoices.
- Non-PO invoices.
- Financial deviations.
- Sensitive expense categories.
- Exception approvals.

## 5.8 Treasury

Responsible for:

- Cash planning.
- Payment proposal review.
- Payment authorization.
- Bank file processing.
- Payment reconciliation.

---

# 6. Step 1 — Business Requirement / Demand Identification

The P2P cycle starts when a department identifies a need.

Examples:

- New laptop required for employee.
- Office furniture required.
- Raw material stock is below threshold.
- Annual software license needs renewal.
- Consultant required for project.
- Machine requires maintenance.

Before creating a purchase request, organizations may require:

- Business justification.
- Budget availability.
- Specification.
- Quantity.
- Required date.
- Preferred vendor, if any.
- Contract reference.
- Cost center/project.

### Key control

The person requesting the purchase should generally not be the only person approving, receiving, and paying it.

---

# 7. Step 2 — Purchase Requisition (PR)

A **Purchase Requisition (PR)** is an internal request to purchase goods or services.

It is not normally sent to the supplier.

A PR expresses demand; it is not supplier authorization and does not normally create a payable. A PO is the external commercial instruction created after sourcing and approval. Treating a PR number as permission for a supplier to deliver bypasses procurement controls.

## 7.1 Typical PR fields

```text
PR Number
Requester
Department
Company Code
Plant / Location
Material / Service Description
Quantity
Unit of Measure
Estimated Price
Currency
Required Delivery Date
Cost Center
GL Account
Project / WBS
Preferred Vendor
Business Justification
Attachments
```

## 7.2 Example

```text
PR No: PR-2026-001245
Item: Laptop
Quantity: 10
Estimated Unit Price: 60,000
Estimated Total: 600,000
Cost Center: IT-OPS
Requested By: IT Manager
Required Date: 30-Aug-2026
```

## 7.3 PR controls

System can validate:

- Mandatory fields.
- Budget availability.
- Valid cost center.
- Active GL account.
- Requester authorization.
- Correct purchasing category.

---

# 8. Step 3 — PR Approval and Budget Check

The PR normally moves through an approval workflow.

Example:

```text
Requester
   ↓
Reporting Manager
   ↓
Cost Center Owner
   ↓
Department Head
   ↓
Finance / Budget Owner
   ↓
Procurement
```

The exact path may depend on:

- Amount.
- Department.
- Company code.
- Category.
- CAPEX/OPEX.
- Project.
- Location.
- Emergency purchase flag.

## 8.1 Budget check

Possible results:

```text
Budget Available → Continue
Budget Insufficient → Block / Send for Additional Approval
Budget Not Applicable → Continue based on policy
```

---

# 9. Step 4 — Sourcing / RFQ / Vendor Selection

Procurement may use:

- Existing contract.
- Approved supplier list.
- Request for Quotation (RFQ).
- Tender.
- Reverse auction.
- Single-source procurement.
- Emergency procurement.

## 9.1 Typical RFQ process

```text
Approved PR
   ↓
RFQ Created
   ↓
RFQ Sent to Suppliers
   ↓
Supplier Quotes Received
   ↓
Technical Evaluation
   ↓
Commercial Evaluation
   ↓
Negotiation
   ↓
Supplier Selected
```

## 9.2 Vendor comparison

Vendor selection may consider:

- Price.
- Quality.
- Delivery lead time.
- Payment terms.
- Warranty.
- Technical compliance.
- Previous supplier performance.
- Risk.
- Compliance.

---

# 10. Step 5 — Supplier / Vendor Onboarding

A supplier must generally exist in the vendor master before a PO or payment can be processed.

## 10.1 Vendor onboarding data

Supplier may provide:

- Registration documents.
- Tax details.
- Bank proof.
- Cancelled cheque / bank letter.
- Address proof.
- Contact details.
- Compliance certificates.
- MSME/small-enterprise details where applicable.

## 10.2 Vendor verification controls

Important controls:

- Verify bank account independently.
- Detect duplicate tax ID.
- Detect duplicate bank account.
- Detect similar vendor names.
- Maker-checker approval for vendor creation.
- Separate vendor creation and payment roles.
- Approval required for bank change.

---

# 11. Step 6 — Purchase Order (PO) Creation

A **Purchase Order** is a formal commercial document sent to the supplier.

It confirms:

- What is being purchased.
- Quantity.
- Price.
- Delivery date.
- Delivery location.
- Payment terms.
- Tax conditions.
- Contractual terms.

The PO should be created and approved **before** the supplier commits or delivers, except through a documented emergency process. An after-the-fact PO can make an unauthorized purchase look compliant without actually providing preventive control.

## 11.1 Typical PO structure

### Header

```text
PO Number
Vendor
Company Code
Purchasing Organization
Currency
Payment Terms
Incoterms
Delivery Address
PO Date
Contract Reference
```

### Line Item

```text
Item Number
Material / Service
Description
Quantity
Unit
Unit Price
Net Amount
Tax Code
Plant
Cost Center
GL Account
WBS / Project
Delivery Date
```

## 11.2 Example

```text
PO: 4500012456
Vendor: ABC Technologies Pvt Ltd

Item 10
Laptop
Qty: 10
Rate: 60,000
Total: 600,000

Item 20
Laptop Bag
Qty: 10
Rate: 1,500
Total: 15,000
```

PO net value = ₹615,000 before tax and any separately stated charges. Each line needs its own receipt and invoice history because the laptop and bag may be delivered or billed at different times.

## 11.3 PO changes and closure

Price, quantity, vendor, delivery date, account assignment, and payment-term changes should be versioned. Material changes should trigger reapproval and supplier communication. A PO should be closed only after outstanding deliveries, invoices, returns, and commitments are resolved; closing it merely to remove an exception can hide a genuine liability or operational problem.

---

# 12. Step 7 — PO Approval and Release

A PO can remain blocked until required approvals are completed.

Example approval matrix:

| PO Value | Approval |
|---:|---|
| Low value | Manager |
| Medium value | Department Head |
| High value | Department Head + Finance |
| Very high value | Finance Controller / CFO / Executive approval |

The organization should configure its own thresholds.

Possible PO statuses:

```text
Draft
Pending Approval
Rejected
Approved
Released
Sent to Vendor
Partially Received
Fully Received
Closed
Cancelled
```

---

# 13. Step 8 — Supplier Acknowledgment and Fulfilment

Supplier receives the PO and can:

- Accept.
- Reject.
- Request change.
- Confirm delivery date.
- Deliver partially.
- Deliver fully.

Important supplier documents may include:

- Delivery Challan.
- Packing List.
- Invoice.
- E-way bill where applicable.
- Quality certificate.
- Service completion document.

---

# 14. Step 9 — Goods Receipt / Service Receipt

When goods arrive, the receiving team records receipt in the ERP.

Possible terms:

- **GRN** — Goods Receipt Note.
- **GR** — Goods Receipt.
- **GIR** — Goods Inward Receipt/Report, depending on organizational terminology.
- **SES** — Service Entry Sheet.

## 14.1 Goods receipt checks

Receiver normally verifies:

```text
PO Number
Vendor
Material
Quantity Ordered
Quantity Delivered
Quantity Accepted
Quantity Rejected
Batch/Serial Number
Delivery Date
Condition
```

## 14.2 Example

```text
PO Quantity: 100
Delivered: 90
Accepted: 88
Rejected: 2

Receipt posted for: 88
Remaining open quantity: 12
```

The two rejected units should be recorded with a rejection or return reason rather than included in accepted quantity. If accepted goods are later returned, damaged, or found incorrect, post a controlled receipt reversal/return referencing the original PO and receipt. Otherwise the system may allow an invoice to match against goods the organization no longer holds.

## 14.3 Service receipt

For services there may be no physical GRN.

Instead the requester may create a **Service Entry Sheet** confirming:

- Service period.
- Quantity/hours.
- Milestone.
- Completion percentage.
- Accepted amount.

The approver should have direct knowledge of the service and evidence such as a timesheet, milestone sign-off, usage report, or completion certificate. Procurement or AP should not create a service receipt solely to clear an invoice exception without business confirmation.

---

# 15. Step 10 — Invoice Receipt

Supplier invoices can arrive through:

- AP email inbox.
- Supplier portal.
- E-invoicing network.
- Physical scan.
- EDI.
- API.
- Shared mailbox.

The organization should try to have one controlled invoice intake channel.

## 15.1 Typical invoice fields

```text
Supplier Name
Supplier Tax ID
Invoice Number
Invoice Date
PO Number
Currency
Line Items
Quantity
Unit Price
Taxable Value
Tax Amount
Freight
Discount
Other Charges
Gross Amount
Net Payable
Bank Details
Payment Terms
```

---

# 16. Step 11 — Invoice Capture / OCR / Data Extraction

Modern AP systems can use OCR or document AI to extract invoice data.

OCR converts pixels into candidate text; document AI maps that text to fields. Neither output is automatically authoritative. Preserve the original document, extracted value, confidence, page/region evidence, model or rule version, and any human correction. The supplier invoice remains the source evidence, while the validated structured data drives matching and posting.

## 16.1 Typical OCR output

```json
{
  "vendor_name": "ABC Technologies Pvt Ltd",
  "invoice_number": "INV-45678",
  "invoice_date": "2026-08-01",
  "po_number": "4500012456",
  "currency": "INR",
  "subtotal": 615000,
  "tax_amount": 110700,
  "invoice_total": 725700,
  "line_items": [
    {
      "description": "Laptop",
      "quantity": 10,
      "unit_price": 60000,
      "amount": 600000
    },
    {
      "description": "Laptop Bag",
      "quantity": 10,
      "unit_price": 1500,
      "amount": 15000
    }
  ]
}
```

## 16.2 OCR should ideally capture confidence

Example:

```json
{
  "invoice_number": {
    "value": "INV-45678",
    "confidence": 0.98
  }
}
```

Low-confidence values can be routed for review.

Confidence thresholds should vary by risk. A low-confidence description may only need review, while bank details, supplier identity, invoice number, total, currency, and tax identifiers should require stronger validation. Never treat bank details printed on an invoice as an approved vendor-master change.

## 16.3 Invoice extraction validations

After OCR, system should validate:

- Invoice number present.
- Invoice date valid.
- Vendor identified.
- PO number exists where required.
- Currency valid.
- Total mathematically correct.
- Tax amount mathematically reasonable.
- Duplicate invoice not found.

---

# 17. Step 12 — Invoice Validation

Invoice validation happens before posting.

## 17.1 Basic validations

```text
Is vendor active?
Is invoice number present?
Is invoice date valid?
Is invoice duplicate?
Does PO exist?
Does PO belong to vendor?
Is PO still open?
Is company code correct?
Is invoice currency allowed?
Do invoice totals add up?
Are mandatory tax fields present?
```

## 17.2 Invoice mathematical validation

Example:

```text
Line Total = Quantity × Unit Price
Subtotal = Sum(Line Totals)
Taxable Total = Subtotal - Discount + Applicable Charges
Invoice Total = Taxable Total + Tax
```

A small rounding tolerance may be allowed.

Also distinguish document types. A credit note may contain negative amounts or a credit indicator; an invoice should not become a credit note merely because OCR read a minus sign. Validate currency precision, unit-of-measure conversions, price units such as "₹500 per 100 pieces," header charges, line taxes, and whether discounts apply before or after tax.

---

# 18. Step 13 — Two-Way / Three-Way / Four-Way Matching

Matching is one of the most important P2P controls.

## 18.1 Two-Way Match

Compares:

```text
PO
vs
Invoice
```

Checks usually include:

- Vendor.
- Item.
- Quantity.
- Price.
- Amount.

Used when receipt confirmation is not required or the organization accepts another control.

## 18.2 Three-Way Match

Compares:

```text
Purchase Order
      ↕
Goods / Service Receipt
      ↕
Supplier Invoice
```

This answers:

1. Did we order it?
2. Did we receive it?
3. Are we being billed correctly?

## 18.3 Four-Way Match

Adds quality inspection:

```text
PO
+ Receipt
+ Quality Inspection
+ Invoice
```

Often used for controlled manufacturing or high-quality-critical goods.

## 18.4 Cumulative and partial matching

Matching must consider document history, not only the current invoice. A safe line-level quantity is:

```text
Available to Invoice
= Accepted Receipts
- Receipt Returns/Reversals
- Quantities Already Invoiced
+ Valid Invoice Reversals/Credits
```

Example: 100 units were accepted, 10 returned, and 60 already invoiced. Only 30 units remain available to invoice. A new invoice for 40 should fail even though 40 is below the original PO quantity.

Price comparison must also normalize currency, unit of measure, price unit, discounts, freight, and tax basis. Comparing `₹1,000 per box` directly with `₹100 per item` is meaningless until the box-to-item conversion is known.

---

# 19. Step 14 — Exception / Deviation Handling

If match fails, invoice should not automatically move to payment.

Common exceptions:

- Invoice quantity > received quantity.
- Invoice price > PO price.
- No GRN.
- Wrong PO.
- PO closed.
- Tax mismatch.
- Duplicate invoice.
- Vendor mismatch.
- Currency mismatch.
- Missing supporting document.
- Invoice amount exceeds tolerance.

## 19.1 Typical workflow

```text
Invoice Received
   ↓
Matching Failed
   ↓
Exception Created
   ↓
Responsible User Assigned
   ↓
Business/Procurement Review
   ↓
Correct PO / Receipt / Invoice
OR
Approve Authorized Deviation
   ↓
Re-match
   ↓
Post Invoice
```

## 19.2 Query vs deviation

A useful distinction is:

### Query

The invoice cannot proceed because information is missing or unclear.

Examples:

- Missing PO.
- Incorrect invoice number.
- Missing tax invoice.
- Need confirmation from requester.

### Deviation

The invoice data is known, but it differs from an approved reference.

Examples:

- PO rate 100, invoice rate 105.
- GR quantity 90, invoice quantity 100.
- Invoice exceeds approved amount.

Queries request missing facts; deviations request authority to accept a known difference. Closing a query does not itself approve a financial deviation. Every exception should have an owner, reason code, due date, aging, supporting evidence, decision, and re-match result. If the underlying PO, receipt, or invoice changes materially, route the revised document through the required reapproval instead of relying on the old approval.

---

# 20. Step 15 — Invoice Approval Workflow

Invoices requiring approval can use amount- and role-based workflow.

Example:

```text
Requester
   ↓
Cost Center Owner
   ↓
Department Head
   ↓
Finance Reviewer
   ↓
Finance Controller
```

The system can skip levels when not required.

## 20.1 Common workflow rules

Approval routing may depend on:

- Company code.
- Invoice amount.
- Cost center.
- Department.
- Expense type.
- PO / Non-PO.
- Tax category.
- Vendor category.
- Project.
- Exception type.

## 20.2 Approval actions

```text
Approve
Reject
Send Back
Request Clarification
Delegate
Escalate
```

Approval means accepting a specific document version and financial consequence. The workflow should display the invoice, PO/receipt comparison, coding, tax, prior approvals, and exception reason. A change to amount, vendor, bank destination, cost object, or other material field after approval should invalidate or repeat the relevant approval. Delegation must be time-bound and auditable; the requester should not approve their own purchase merely because the normal approver is absent.

---

# 21. Step 16 — Invoice Posting

Once an invoice passes checks, it is posted to the ERP.

Posting creates a financial liability to the supplier.

## 21.1 Basic accounting concept

Example: supplier invoice for office expense.

```text
Expense / Asset / Inventory     Dr
Input Tax                       Dr
      Vendor Payable                Cr
```

The vendor account now shows an outstanding payable.

## 21.2 Posting date vs invoice date

- **Invoice date** = date on supplier invoice.
- **Posting date** = date transaction is recorded in accounting period.
- **Due date** = calculated based on payment terms.

These dates serve different purposes. The invoice date helps identify the supplier document and may affect tax or aging rules. The posting date determines the general-ledger period. The due date drives payment selection and is normally calculated from a policy-defined baseline date plus payment terms. Do not change the invoice date merely to force a desired due date or accounting period.

Posting should be **idempotent** across integrations: retrying the same approved request must not create another ERP document. Store the source invoice ID, ERP document number, posting response, and reversal link. A timeout means "outcome unknown," not automatically "posting failed"; query the ERP before retrying.

---

# 22. Step 17 — Payment Proposal / Payment Run

AP or Treasury selects invoices that are due for payment.

System can consider:

- Due date.
- Payment terms.
- Payment block.
- Vendor block.
- Cash availability.
- Currency.
- Bank account.
- Payment method.
- Early payment discount.

## 22.1 Payment proposal flow

```text
Open Vendor Invoices
   ↓
Apply Due-Date Logic
   ↓
Exclude Blocked Items
   ↓
Create Payment Proposal
   ↓
Review Exceptions
   ↓
Approve Proposal
   ↓
Generate Payment File
```

Review should confirm beneficiary master data, company bank account, currency, value date, discounts, withholding, credit notes, duplicate payments, blocked or sanctioned suppliers where applicable, and sufficient authorization. The proposal is a selection list, not proof that the bank executed payment.

---

# 23. Step 18 — Payment Execution

Payment methods can include:

- Bank transfer.
- ACH/NEFT/RTGS/IMPS or local equivalent.
- SWIFT transfer.
- Cheque.
- Direct debit.
- Virtual card.

## 23.1 Payment control

A strong process uses maker-checker control:

```text
Payment Maker
   ↓
Payment Checker
   ↓
Bank Authorization
```

The same person should not ideally:

- Create vendor.
- Change bank details.
- Post invoice.
- Approve payment.
- Release bank payment.

Protect the payment file from alteration between approval and bank submission. Useful controls include an approved beneficiary source, file totals and record counts, encryption/signing where supported, dual bank authorization, bank response validation, and alerts for rejected or changed beneficiaries. Urgent requests to bypass normal bank-change or callback controls are a fraud warning, not a reason to weaken them.

---

# 24. Step 19 — Supplier Remittance and Reconciliation

After payment:

- Payment reference is recorded.
- Supplier receives remittance advice.
- Open invoice is cleared.
- Bank statement is reconciled.

Keep the stages distinct:

```text
Payment Proposed → Approved → Submitted → Bank Accepted → Settled → Reconciled
```

`Submitted` or `bank file generated` does not mean `paid`. A rejected, returned, or expired payment should reopen or retain the supplier item, record the failure reason, and enter a controlled retry process. Reconciliation matches the bank debit, payment batch, supplier clearing document, and remittance total; unexplained differences remain open for investigation.

## 24.1 Remittance advice may contain

```text
Vendor Name
Payment Date
Payment Reference
Invoice Number(s)
Gross Amount
Deductions
Withholding Tax
Net Paid Amount
Bank Reference
```

---

# 25. Step 20 — Period-End Closing

At month-end, Finance ensures all liabilities are properly recorded.

Activities can include:

- GR/IR reconciliation.
- Vendor reconciliation.
- Unposted invoice review.
- Blocked invoice review.
- Accrual posting.
- Open PO review.
- Advance reconciliation.
- Debit balance vendor review.
- Old outstanding analysis.
- Tax reconciliation.
- Bank reconciliation.

---

# 26. PO Invoice vs Non-PO Invoice

## 26.1 PO Invoice

Invoice references a purchase order.

Typical process:

```text
PO
↓
GRN/GIR/SES
↓
Invoice
↓
2-way / 3-way match
↓
Post
↓
Pay
```

Advantages:

- Strong control.
- Easier automation.
- Better budget visibility.
- Lower manual effort.

## 26.2 Non-PO Invoice

No PO exists.

Examples:

- Utility bill.
- Statutory payment.
- Rent.
- Government fees.
- Legal fee.
- Some recurring contracts.
- Emergency expenditure.

Typical flow:

```text
Invoice Received
   ↓
Vendor Validation
   ↓
GL / Cost Center Coding
   ↓
Business Approval
   ↓
Finance Approval
   ↓
Posting
   ↓
Payment
```

Non-PO invoices normally need stronger approval because there is no pre-approved PO control.

Non-PO does not mean "no evidence." The invoice still needs a valid supplier, business purpose, proof of service or entitlement, correct coding, tax validation, duplicate check, and authorized approval. Monitor repeat non-PO spend by vendor and category: recurring items that could have been planned may indicate PO avoidance or split purchasing.

---

# 27. GRN, GIR and Service Entry Concepts

## 27.1 GRN — Goods Receipt Note

Confirms that physical goods were received and records accepted quantity, date, location, condition, and PO reference. It should not be posted before physical receipt merely to enable invoice payment.

## 27.2 GIR — Goods Inward Receipt

Some organizations use GIR for the inward-goods receipt process or document. Exact naming can vary.

## 27.3 SES — Service Entry Sheet

Confirms that a service was performed and accepted, usually by period, hours, quantity, milestone, or value. Evidence and an informed business approver replace the physical count used for goods.

### Why receipt is important

A supplier should generally not be paid simply because an invoice exists.

Receipt provides operational evidence that the organization actually received the goods or service.

---

# 28. Invoice Matching Logic in Depth

Consider:

```text
PO Quantity = 100
PO Rate = 50
GR Quantity = 80
Invoice Quantity = 80
Invoice Rate = 50
```

Result:

```text
Quantity Match = PASS
Price Match = PASS
Receipt Match = PASS
Invoice can proceed.
```

Now consider:

```text
PO Quantity = 100
GR Quantity = 80
Invoice Quantity = 100
```

Potential result:

```text
Invoice quantity exceeds received quantity.
Status = Quantity Mismatch
Action = Block / Workflow
```

## 28.1 Price variance

```text
PO Rate = 100
Invoice Rate = 103
```

If tolerance is 5%:

```text
Variance = 3%
Possible result = Auto-accept
```

If invoice rate is 110:

```text
Variance = 10%
Possible result = Block and approval required
```

## 28.2 Amount tolerance

Organizations can maintain tolerances by:

- Percentage.
- Absolute amount.
- Vendor.
- Material.
- Company.
- Invoice type.

Example:

```text
absolute_difference = abs(invoice_amount - reference_amount)
percentage_difference = absolute_difference / abs(reference_amount) × 100
```

The policy must define whether **both** limits must pass or whether either limit is sufficient. Requiring both is stricter:

```text
PASS only if absolute_difference <= ₹100
         AND percentage_difference <= 1%
```

An either/or rule can be intentional—for example, to tolerate small rounding differences on low-value lines—but it must be explicit. Define behavior when the reference amount is zero, and aggregate repeated small variances so invoices are not split to remain individually below tolerance.

---

# 29. Invoice Types and Special Scenarios

A complete P2P solution may need to support:

1. PO invoice.
2. Non-PO invoice.
3. Service invoice.
4. Material invoice.
5. Freight invoice.
6. Recurring invoice.
7. Utility invoice.
8. Advance request.
9. Proforma invoice.
10. Credit note.
11. Debit note.
12. Import invoice.
13. CAPEX invoice.
14. Expense reimbursement.
15. Retention invoice.
16. Milestone billing.
17. Partial invoice.
18. Final invoice.
19. Intercompany invoice.
20. Statutory payment.

---

# 30. Advance Payment Process

Sometimes supplier needs payment before delivery.

## 30.1 Flow

```text
Advance Request
   ↓
PO / Contract Validation
   ↓
Approval
   ↓
Finance Review
   ↓
Advance Payment
   ↓
Supplier Delivers
   ↓
Final Invoice
   ↓
Advance Adjusted
   ↓
Balance Paid / Recovered
```

## 30.2 Example

```text
PO Value = 1,000,000
Advance = 20% = 200,000
Final Invoice = 1,000,000
Advance Adjusted = 200,000
Balance Payable = 800,000
```

## 30.3 Advance controls

- Approved PO/contract should exist.
- Advance percentage should comply with policy.
- High advances may require stronger approval.
- Outstanding advances should be aged and monitored.
- Duplicate advance should be prevented.

---

# 31. Credit Note and Debit Note Process

## 31.1 Credit Note

Supplier credit note normally reduces the amount payable to the supplier.

Common reasons:

- Overbilling.
- Returned goods.
- Rate correction.
- Discount.
- Tax correction.

Example: a supplier grants a ₹10,000 credit against an unpaid expense invoice.

```text
Vendor Payable                Dr   10,000
    Expense / Inventory / COGS        Cr   10,000
```

The practical result is reduced supplier liability. The credited account depends on whether the original item remains in inventory, has been consumed or sold, or related to an expense. Tax recoverable may also need reversal.

## 31.2 Debit Note

A buyer may raise a debit note against a supplier for:

- Short supply.
- Quality issue.
- Penalty.
- Damage.
- Price difference.
- Recovery.

Organizations may use different terminology depending on legal and ERP design.

From the buyer's perspective, an approved debit claim often has the same economic effect as a supplier credit: it reduces the amount payable or creates a receivable from the supplier. Do not post both the buyer's debit note and the supplier's corresponding credit note as separate reductions for the same claim.

---

# 32. Tax Handling in P2P

Tax handling varies by country.

For an India-based P2P process, typical tax considerations can include:

- GST classification.
- Input tax eligibility.
- GST registration details.
- Place of supply.
- HSN/SAC classification.
- Reverse charge scenarios.
- Withholding/TDS.
- Import taxes.
- Tax invoice compliance.

Because tax rules change, exact rates, thresholds, and statutory requirements should always be maintained through the organization's current tax policy or ERP tax configuration.

## 32.1 Withholding tax concept

If withholding is applicable:

```text
Invoice Amount = 100,000
Withholding = X
Net Supplier Payment = 100,000 - X
```

The withheld amount is paid/reported to the relevant authority according to applicable law.

Accounting illustration when a ₹100,000 payable is settled with ₹10,000 withheld:

```text
Vendor Payable             Dr  100,000
    Bank                           Cr   90,000
    Withholding Tax Payable       Cr   10,000
```

When remitted to the authority, debit the withholding-tax payable and credit bank. Exact tax base, timing, certificates, and rates are jurisdiction-specific.

---

# 33. Accounting Entries

Accounting treatment depends on inventory valuation, ERP configuration, tax, and local accounting rules.

## 33.1 Expense invoice

```text
Expense Account        Dr  100,000
Input Tax              Dr   18,000
      Vendor Payable        Cr  118,000
```

## 33.2 Payment

```text
Vendor Payable         Dr  118,000
      Bank                  Cr  118,000
```

## 33.3 Inventory with GR/IR concept

At goods receipt:

```text
Inventory              Dr
      GR/IR Clearing        Cr
```

At invoice receipt:

```text
GR/IR Clearing         Dr
Input Tax              Dr
      Vendor Payable        Cr
```

At payment:

```text
Vendor Payable         Dr
      Bank                  Cr
```

GR/IR is a temporary clearing account. A credit balance often represents accepted goods not yet invoiced; a debit balance may indicate an invoice without the expected receipt, a reversal timing issue, or configuration difference. Reconcile by PO line and investigate aged items instead of clearing them to expense without evidence.

## 33.5 Supplier advance

At advance payment:

```text
Supplier Advance        Dr  200,000
      Bank                   Cr  200,000
```

When the final ₹1,000,000 invoice is posted:

```text
Expense / Inventory     Dr  1,000,000
      Vendor Payable        Cr  1,000,000
```

Apply the advance:

```text
Vendor Payable          Dr    200,000
      Supplier Advance      Cr    200,000
```

The remaining payable is ₹800,000. The advance is an asset until goods/services are received or the amount becomes refundable or impaired; it is not an immediate expense merely because cash was paid.

## 33.4 Service expense

At invoice posting:

```text
Service Expense        Dr
Input Tax              Dr
      Vendor Payable        Cr
```

---

# 34. Approval Matrix Design

A good approval matrix uses configuration rather than hardcoded users.

Possible dimensions:

```text
Company Code
Location
Department
Cost Center
Invoice Type
Document Type
Amount Range
Currency
Expense Category
Vendor Category
Project
Risk Level
```

Example:

| Amount Range | Level 1 | Level 2 | Final |
|---:|---|---|---|
| 0–X | Manager | — | — |
| X–Y | Manager | Department Head | — |
| Above Y | Manager | Department Head | Finance Controller |

Use policy-defined thresholds rather than fixed values in application code.

---

# 35. P2P Status Model

A robust system should maintain clear document statuses.

Do not force the entire lifecycle into one ambiguous status. Keep separate dimensions such as `capture_status`, `validation_status`, `match_status`, `approval_status`, `posting_status`, and `payment_status`. For example, an invoice can be `POSTED`, `PAYMENT_BLOCKED`, and `APPROVAL_COMPLETE` at the same time. Record allowed transitions and reject impossible moves such as `PAID → DRAFT`.

## 35.1 PR status

```text
Draft
Submitted
Pending Approval
Approved
Rejected
Converted to PO
Closed
Cancelled
```

## 35.2 PO status

```text
Draft
Pending Approval
Approved
Released
Partially Received
Fully Received
Partially Invoiced
Fully Invoiced
Closed
Cancelled
```

## 35.3 Invoice status

```text
Received
OCR Processing
OCR Completed
Validation Failed
Pending Query
Pending GRN/GIR
Pending Match
Matched
Deviation Pending
Pending Approval
Rejected
Ready for Posting
Posted
Payment Blocked
Ready for Payment
Payment In Process
Paid
Reversed
Cancelled
```

## 35.4 Payment status

```text
Not Due
Due
Payment Proposed
Approval Pending
Approved
Bank File Generated
Submitted to Bank
Payment Successful
Payment Failed
Reconciled
```

---

# 36. P2P Data Model / Important Fields

A P2P system normally stores both document-level and line-level information.

## 36.1 Invoice header fields

```text
invoice_id
company_code
vendor_id
vendor_name
invoice_number
invoice_date
posting_date
po_number
currency
subtotal
freight
other_charges
discount
tax_amount
gross_amount
withholding_amount
net_payable
payment_terms
due_date
invoice_status
workflow_status
created_by
created_on
posted_document_number
payment_reference
```

Also store source-channel ID, document hash, document type, legal-entity tax registration, supplier tax ID captured from the document, baseline date, payment block and reason, exchange rate, ERP document/fiscal year, reversal reference, original credit-note invoice reference, record version, and timestamps in a timezone-aware format. Keep master-data values used at posting as an immutable snapshot so later vendor changes do not rewrite historical evidence.

## 36.2 Invoice line fields

```text
invoice_line_id
invoice_id
po_item
material_code
description
quantity
uom
unit_price
line_amount
tax_code
hsn_sac
gl_account
cost_center
profit_center
wbs
asset_code
```

## 36.3 Match fields

```text
po_quantity
gr_quantity
invoice_quantity
po_price
invoice_price
quantity_variance
price_variance
amount_variance
match_status
match_reason
```

## 36.4 Workflow fields

```text
workflow_id
invoice_id
level
approver_id
approver_role
assigned_on
action
acted_on
comments
```

---

# 37. Controls and Segregation of Duties

**Segregation of Duties (SoD)** is critical in P2P.

## 37.1 High-risk combinations

One person should ideally not control all of these:

```text
Create Vendor
+ Create PO
+ Receive Goods
+ Post Invoice
+ Approve Payment
```

## 37.2 Recommended separation

| Activity | Suggested Owner |
|---|---|
| Create supplier | Vendor Master Team |
| Approve supplier | Independent approver |
| Create PR | Requester |
| Approve PR | Manager/Budget owner |
| Create PO | Procurement |
| Receive goods | Warehouse/Requester |
| Process invoice | AP |
| Approve payment | Finance/Treasury |
| Release bank payment | Authorized signatory |

---

# 38. Common Risks and Preventive Controls

| Risk | Example | Control |
|---|---|---|
| Fake vendor | Employee creates fake supplier | Vendor due diligence + maker-checker |
| Duplicate invoice | Same invoice submitted twice | Duplicate detection |
| Overbilling | Invoice rate > PO | Price match |
| Overquantity | Invoice qty > receipt | Quantity match |
| Unauthorized purchase | Purchase without approval | PR/PO workflow |
| Bank fraud | Vendor bank changed fraudulently | Independent bank verification |
| Early payment | Invoice paid before due | Payment terms control |
| Late payment | Missed due invoice | Aging dashboard/SLA |
| Wrong tax | Incorrect tax code | Tax validation |
| Payment to blocked vendor | Supplier under compliance review | Vendor payment block |

---

# 39. Duplicate Invoice Detection

Duplicate invoice detection should not depend on invoice number alone.

Detection normally produces a **suspected duplicate**, not an automatic accusation. The reviewer should compare supplier identity, legal entity, document type, original image, amounts, dates, PO/receipt consumption, prior reversals, and payment status. A legitimate recurring invoice can share the same amount every month; a cancelled invoice may validly be replaced.

## 39.1 Strong duplicate logic

Compare combinations such as:

```text
Vendor + Invoice Number
Vendor + Invoice Date + Amount
Vendor + PO + Amount
Vendor Tax ID + Invoice Number
Invoice Hash / Document Fingerprint
```

## 39.2 Normalize invoice number

These may represent the same invoice:

```text
INV-00125
INV00125
inv-00125
INV / 00125
```

A normalized value can remove:

- Spaces.
- Hyphens.
- Slashes.
- Case differences.

Use caution: overly aggressive normalization can create false positives.

Normalize Unicode, case, whitespace, punctuation, and common OCR confusions only through documented rules. Preserve both raw and normalized values. Never remove all leading zeros or letters without testing supplier-specific formats, because `INV-0012` and `INV-0120` are different invoices.

Run duplicate checks at capture, before posting, and again before payment. Cross-channel idempotency is essential because the same invoice may arrive by email, portal, EDI, and manual upload.

---

# 40. Vendor Master Controls

Vendor master fraud is one of the highest-risk P2P areas.

Recommended controls:

1. Maker-checker approval.
2. Bank details verified independently.
3. Change history maintained.
4. Tax IDs validated.
5. Duplicate vendor checks.
6. Dormant vendors periodically blocked.
7. Vendor changes audited.
8. Sensitive bank changes trigger alerts.
9. Payment blocked temporarily after high-risk changes if policy requires.
10. Vendor creation and payment approval segregated.

For a bank-detail change, contact the supplier through a previously trusted channel—not the phone number or email contained only in the change request. Require evidence, independent review, effective dating, and an alert to relevant owners. A temporary payment hold after a high-risk change can provide time for verification. Access reviews should also identify dormant users who can still create vendors or alter bank data.

---

# 41. Three-Way Match Decision Tree

```text
START
  |
  v
Invoice Received
  |
  v
PO Exists?
  |------------------------- No -----------------------> Non-PO Workflow / Reject
  |
 Yes
  |
  v
Vendor on Invoice = Vendor on PO?
  |------------------------- No -----------------------> Vendor Mismatch
  |
 Yes
  |
  v
Receipt Exists?
  |------------------------- No -----------------------> Pending GRN / GIR / SES
  |
 Yes
  |
  v
Invoice Qty <= Received Qty within tolerance?
  |------------------------- No -----------------------> Quantity Deviation
  |
 Yes
  |
  v
Invoice Price = PO Price within tolerance?
  |------------------------- No -----------------------> Price Deviation
  |
 Yes
  |
  v
Tax / Amount Valid?
  |------------------------- No -----------------------> Tax / Amount Query
  |
 Yes
  |
  v
MATCHED
  |
  v
READY FOR POSTING
```

---

# 42. Month-End and Year-End Activities

## 42.1 Open GR/IR review

Cases:

- Goods received but invoice not received.
- Invoice received but goods not received.
- Quantity/value difference.

These items should be investigated.

Review by PO line, receipt, invoice, age, quantity, and value. Typical resolutions include obtaining a missing invoice, correcting or reversing an incorrect receipt, posting a valid invoice, processing a return, or closing the PO after evidence-based review. Do not mass-clear old GR/IR items solely because they are old.

## 42.2 Accruals

If service is received before invoice arrives:

```text
Expense Accrual      Dr
      Accrued Liability   Cr
```

The accrual can be reversed when the actual invoice is posted.

The accrual should represent goods/services received in the closing period, supported by receipts, contract progress, usage, or a documented estimate. Avoid duplicating an automatic goods-receipt accrual with a manual expense accrual for the same PO line. Compare the actual invoice with the estimate and explain material true-ups.

## 42.3 Vendor aging

Common aging buckets:

```text
Current
1–30 days
31–60 days
61–90 days
91–180 days
180+ days
```

## 42.4 Open PO cleanup

Review:

- Old POs.
- Unused balances.
- Completed services.
- Partial receipts.
- Closed projects.

---

# 43. P2P Integrations

A modern P2P ecosystem may integrate:

```text
Supplier Portal
      ↓
Procurement Platform
      ↓
ERP
      ↓
Invoice OCR / Document AI
      ↓
Workflow Engine
      ↓
Tax Engine
      ↓
Treasury / Banking Platform
      ↓
Bank
      ↓
Reconciliation System
      ↓
BI / Reporting
```

## 43.1 Common integration patterns

- REST API.
- SOAP.
- SFTP files.
- EDI.
- IDoc-like ERP interfaces.
- Message queues.
- Database integration.
- RPA for legacy systems.

---

# 44. Audit Trail and Evidence

Every important action should be auditable.

System should record:

```text
Who created the document?
Who modified it?
What was changed?
Old value
New value
Date/time
Who approved?
Who rejected?
Approval comments
Attached evidence
Posting reference
Payment reference
Bank confirmation
```

## 44.1 Important audit evidence

- PR approval.
- Supplier quotations.
- Vendor onboarding approval.
- PO approval.
- Goods receipt.
- Service completion evidence.
- Supplier invoice.
- Exception approval.
- ERP posting document.
- Payment approval.
- Bank confirmation.

---

# 45. P2P KPIs and SLAs

Define each metric's population, start/end timestamps, exclusions, timezone, treatment of weekends, and reporting grain before setting a target. Otherwise two dashboards can report different answers with the same label.

## 45.1 Common KPIs

### Invoice processing time

```text
Invoice Processing Time = Posted Timestamp - Controlled Receipt Timestamp
```

Report median and percentiles as well as the average; a few very old invoices can distort the average.

### Straight-through processing rate

```text
Invoices automatically processed without manual intervention
----------------------------------------------------------- × 100
Total invoices
```

Use this for documents that complete the defined capture-to-posting path without manual intervention.

### First-pass match rate

```text
Invoices matched without exception
---------------------------------- × 100
Total PO invoices
```

### Duplicate invoice rate

```text
Duplicate invoices detected
--------------------------- × 100
Total invoices
```

Separate suspected duplicates from confirmed duplicates and from duplicate payments. A rising detection rate can mean stronger detection, worse supplier behavior, or duplicate intake channels.

### On-time payment rate

```text
Invoices paid on/before due date
------------------------------- × 100
Total paid invoices
```

Exclude invoices placed on a legitimate documented dispute only if the policy says so, and report avoidable late payments separately.

### Touchless invoice rate

Percentage of invoices processed without human handling. If this has the same start and end points as straight-through processing, use one metric rather than reporting two labels. Some organizations define touchless capture separately from end-to-end STP; document the distinction.

### Exception rate

```text
Invoices that entered an exception workflow
------------------------------------------- × 100
Invoices in the defined population
```

Also report exception reason and owner so the metric leads to process improvement.

### Average approval cycle time

Time from workflow submission to final approval. Report active processing time separately from time waiting on the approver when the workflow supports it.

### Cost per invoice

Total AP processing cost divided by invoice volume.

State which labor, technology, outsourcing, exception, and overhead costs are included. Compare PO, non-PO, touchless, and exception-heavy invoices because their economics differ.

---

# 46. Common P2P Exceptions

Common production issues include:

Every exception should answer four operational questions: **Is posting blocked? Is payment blocked? Who owns resolution? What evidence closes it?** A dashboard without these fields becomes an aging list rather than a control.

## 46.1 PO not found

Possible reasons:

- OCR extracted wrong PO.
- Supplier entered incorrect PO.
- PO created in another company code.
- PO is legacy/closed.

## 46.2 Vendor mismatch

Invoice supplier does not match PO vendor.

Possible scenarios:

- Group-company billing.
- Factoring.
- Supplier merger.
- Incorrect invoice.

Should not be auto-approved without proper policy.

## 46.3 Missing GRN

Invoice received before receipt confirmation.

Action:

```text
Pending Receipt → Notify Requester → Post GRN/SES → Re-match
```

## 46.4 Price mismatch

Possible causes:

- PO not updated after negotiation.
- Supplier overbilling.
- Freight/additional charge.
- Currency issue.

## 46.5 Quantity mismatch

Possible causes:

- Partial delivery.
- Incorrect GRN.
- Invoice billed in advance.

## 46.6 Tax mismatch

Possible causes:

- Wrong tax code.
- Incorrect tax rate.
- Wrong place of supply.
- HSN/SAC mismatch.
- Tax not applicable.

## 46.7 Duplicate invoice

Action:

```text
Block Invoice
→ Compare Original
→ Reject Duplicate or Investigate
```

---

# 47. Sample End-to-End Business Scenarios

## Scenario A — Clean PO Invoice

```text
1. Department creates PR for 10 laptops.
2. Manager approves PR.
3. Procurement selects vendor.
4. PO created for 10 laptops × 60,000.
5. PO approved and sent to supplier.
6. Supplier delivers 10 laptops.
7. Warehouse creates GRN for 10.
8. Supplier invoice received.
9. OCR extracts invoice data.
10. Vendor/PO/invoice validations pass.
11. Three-way match passes.
12. Invoice posted automatically.
13. Invoice reaches due date.
14. Payment proposal created.
15. Payment approved.
16. Bank pays supplier.
17. Vendor item cleared.
```

## Scenario B — Quantity Mismatch

```text
PO Quantity = 100
Received = 80
Invoice Quantity = 100
```

Flow:

```text
Invoice Received
→ Three-Way Match Fails
→ Quantity Deviation Created
→ Requester Reviews
→ Supplier Confirms remaining 20 not delivered
→ Corrected invoice requested for 80
→ New invoice passes match
→ Posted
→ Paid
```

## Scenario C — Price Mismatch Within Tolerance

```text
PO Rate = 1,000
Invoice Rate = 1,005
Tolerance = 1%
Variance = 0.5%
```

Possible configuration:

```text
Auto-Accept → Post Invoice
```

## Scenario D — Price Mismatch Outside Tolerance

```text
PO Rate = 1,000
Invoice Rate = 1,100
Tolerance = 1%
```

Flow:

```text
Price Deviation
→ Procurement Review
→ Supplier Error? Request Credit/Corrected Invoice
OR
→ PO legitimately changed? Update PO with approval
→ Re-match
→ Post
```

## Scenario E — Non-PO Utility Invoice

```text
Electricity Invoice
→ OCR Capture
→ Vendor Validation
→ GL = Electricity Expense
→ Cost Center = Facility
→ Facility Manager Approval
→ Finance Approval
→ Posting
→ Payment
```

## Scenario F — Advance Payment

```text
PO = 2,000,000
Approved Advance = 10%
Advance Payment = 200,000
Supplier Delivers
Final Invoice = 2,000,000
Advance Adjusted = 200,000
Balance Payment = 1,800,000
```

---

# 48. Suggested System Architecture

For a custom P2P/invoice system, a useful logical architecture is:

```text
               ┌────────────────────┐
               │ Supplier / AP Email│
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ Document Intake    │
               │ PDF/Image/EDI/API  │
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ OCR / Document AI  │
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ Validation Engine  │
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ PO/GR/Invoice Match│
               └─────────┬──────────┘
                         │
               ┌─────────┴──────────┐
               │                    │
             PASS                  FAIL
               │                    │
               v                    v
      ┌────────────────┐   ┌────────────────┐
      │ Ready to Post  │   │ Workflow Engine│
      └───────┬────────┘   └───────┬────────┘
              │                    │
              └──────────┬─────────┘
                         v
               ┌────────────────────┐
               │ ERP Posting Layer  │
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ Payment / Treasury │
               └─────────┬──────────┘
                         │
                         v
               ┌────────────────────┐
               │ Bank/Reconciliation│
               └────────────────────┘
```

## 48.1 Recommended engine separation

Keep these modules logically separate:

```text
Document Intake
OCR Extraction
Field Normalization
Vendor Identification
Invoice Validation
PO Matching
GR Matching
Tax Validation
Duplicate Detection
Workflow
ERP Posting
Payment
Audit Logging
Reporting
```

This makes the solution easier to maintain and migrate.

---

# 49. Example Business Rules

Below are examples only. Values and thresholds must come from organization policy.

## 49.1 PO invoice processing

```text
IF invoice.po_number exists
THEN process as PO invoice
ELSE route to Non-PO classification
```

## 49.2 Vendor validation

```text
IF vendor is inactive OR blocked
THEN block invoice
```

## 49.3 Duplicate validation

```text
IF same normalized invoice number exists
AND vendor is same
AND original invoice is not cancelled/reversed
THEN mark as suspected duplicate
```

## 49.4 Receipt validation

```text
IF PO requires receipt
AND GRN/GIR/SES is missing
THEN status = Pending Receipt
```

## 49.5 Quantity match

```text
available_received_qty = accepted_receipts
                       - receipt_returns
                       - prior_invoiced_qty
                       + reversed_invoice_qty

IF invoice_qty <= available_received_qty + configured_tolerance
THEN quantity_match = PASS
ELSE quantity_match = FAIL
```

## 49.6 Price match

```text
normalized_po_price = convert_currency_uom_and_price_unit(po_price)

IF normalized_po_price = 0
THEN route to zero-price rule or exception
ELSE variance_percent = ((invoice_price - normalized_po_price)
                         / normalized_po_price) * 100

IF abs(variance_percent) <= configured_tolerance
THEN price_match = PASS
ELSE price_match = FAIL
```

`convert_currency_uom_and_price_unit` represents a required normalization step, not a universal built-in function. The implementation must define exchange-rate source/date, unit conversion, price unit, discounts, freight, and tax treatment.

## 49.7 Auto-post

```text
IF duplicate_check = PASS
AND vendor_check = PASS
AND po_check = PASS
AND receipt_check = PASS
AND quantity_match = PASS
AND price_match = PASS
AND tax_validation = PASS
AND mandatory_fields = PASS
THEN invoice_status = READY_FOR_POSTING
```

## 49.8 Workflow

```text
IF any financial deviation exceeds tolerance
THEN route to configured approval workflow
```

---

# 50. P2P Glossary

| Term | Meaning |
|---|---|
| P2P | Procure-to-Pay / Purchase-to-Pay |
| PR | Purchase Requisition |
| PO | Purchase Order |
| RFQ | Request for Quotation |
| GR | Goods Receipt |
| GRN | Goods Receipt Note |
| GIR | Goods Inward Receipt/Report depending on organization |
| SES | Service Entry Sheet |
| AP | Accounts Payable |
| AR | Accounts Receivable |
| ERP | Enterprise Resource Planning |
| GL | General Ledger |
| Cost Center | Organizational unit used to collect costs |
| Profit Center | Organizational unit used to measure profit/responsibility |
| WBS | Work Breakdown Structure / project accounting object |
| CAPEX | Capital Expenditure |
| OPEX | Operating Expenditure |
| 2-Way Match | PO compared with invoice |
| 3-Way Match | PO + receipt + invoice |
| 4-Way Match | PO + receipt + inspection + invoice |
| GR/IR | Goods Receipt / Invoice Receipt clearing concept |
| OCR | Optical Character Recognition |
| STP | Straight-Through Processing |
| SLA | Service Level Agreement |
| SoD | Segregation of Duties |
| Vendor Aging | Analysis of outstanding supplier balances by age |
| Payment Terms | Rules determining payment due date |
| Baseline Date | Policy-defined date from which payment terms calculate the due date |
| Payment Block | Flag preventing invoice from being paid |
| Credit Note | Supplier document reducing amount payable |
| Debit Note | Buyer/supplier adjustment document depending on process |
| Withholding Tax | Tax withheld from supplier payment where applicable |
| HSN/SAC | Goods/service classification used in Indian GST processes |
| Idempotency | Property that lets the same integration request be retried without creating a duplicate result |
| Master Data | Reusable controlled records such as vendors, materials, GL accounts, tax codes, and payment terms |

---

# 51. Recommended P2P Principle

The most important P2P control can be summarized as:

```text
Do not pay only because an invoice exists.

Confirm:
1. The purchase was authorized.
2. The supplier is valid.
3. The goods/services were ordered.
4. The goods/services were received.
5. The invoice is correct.
6. The invoice has not already been paid.
7. Required approvals are complete.
8. Accounting and tax treatment are correct.
```

A mature P2P system tries to achieve:

```text
High Automation
+ Strong Controls
+ Low Manual Effort
+ Fast Exception Resolution
+ Complete Audit Trail
+ Accurate Financial Posting
+ On-Time Supplier Payment
```

---

# 52. Quick P2P Interview / Revision Summary

If you need to explain P2P quickly in an interview:

> Procure-to-Pay is the end-to-end process starting from a business purchase requirement and ending with supplier payment and accounting reconciliation. A typical P2P flow is Requirement → PR → Approval → Sourcing → Vendor → PO → Goods/Service Receipt → Invoice → Validation → 2/3-way Match → Exception Approval → ERP Posting → Payment → Reconciliation. The major controls are approval workflow, vendor validation, three-way matching, duplicate invoice prevention, segregation of duties, payment authorization, and audit trail.

---

# 53. Final End-to-End Reference Flow

```text
BUSINESS NEED
   ↓
PURCHASE REQUISITION
   ↓
BUDGET CHECK
   ↓
PR APPROVAL
   ↓
SOURCING / RFQ
   ↓
VENDOR SELECTION
   ↓
VENDOR ONBOARDING
   ↓
PURCHASE ORDER
   ↓
PO APPROVAL
   ↓
SUPPLIER DELIVERY
   ↓
GRN / GIR / SES
   ↓
SUPPLIER INVOICE
   ↓
OCR / DATA CAPTURE
   ↓
INVOICE VALIDATION
   ↓
DUPLICATE CHECK
   ↓
PO MATCH
   ↓
RECEIPT MATCH
   ↓
PRICE / QUANTITY / TAX CHECK
   ↓
              ┌──────────────────────┐
              │ Match Successful?    │
              └──────────┬───────────┘
                         │
                ┌────────┴─────────┐
                │                  │
               YES                 NO
                │                  │
                v                  v
       READY FOR POSTING     EXCEPTION WORKFLOW
                │                  │
                │          QUERY / DEVIATION
                │                  │
                │          APPROVE / CORRECT
                │                  │
                └─────────┬────────┘
                          v
                    ERP POSTING
                          ↓
                    OPEN PAYABLE
                          ↓
                    PAYMENT RUN
                          ↓
                  PAYMENT APPROVAL
                          ↓
                     BANK PAYMENT
                          ↓
                  VENDOR CLEARING
                          ↓
                  BANK RECONCILIATION
                          ↓
                     PERIOD CLOSE
```

---

**End of P2P Business Process Guide**
