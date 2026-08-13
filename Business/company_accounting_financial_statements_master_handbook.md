# Company Accounting & Financial Statements — Master Learning Handbook

> **Coverage:** Accounting foundations, double-entry bookkeeping, Journal Entries, Vouchers, Ledgers, Trial Balance, Profit & Loss (P&L), Balance Sheet, Cash Flow Statement, working capital, adjustments, closing process, analysis, controls, practical business scenarios, end-to-end examples, interview questions, exercises, and revision cheat sheets.
>
> **Audience:** Beginners, students, software developers working on finance/ERP systems, accountants, business owners, analysts, and anyone who wants to understand how company transactions become financial statements.
>
> **Important:** Examples use simplified numbers and accounting treatments for learning. Tax, company-law, and reporting requirements vary by country and may change over time. Always verify current local rules and applicable accounting standards before using an example for statutory reporting.

---

## Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [The Big Picture: How Company Accounting Works](#2-the-big-picture-how-company-accounting-works)
3. [Accounting Equation](#3-accounting-equation)
4. [Account Types and Debit/Credit Rules](#4-account-types-and-debitcredit-rules)
5. [Chart of Accounts](#5-chart-of-accounts)
6. [Source Documents and Accounting Evidence](#6-source-documents-and-accounting-evidence)
7. [Journal and Journal Entries](#7-journal-and-journal-entries)
8. [Vouchers](#8-vouchers)
9. [Ledger](#9-ledger)
10. [Trial Balance](#10-trial-balance)
11. [Profit & Loss Statement](#11-profit--loss-statement)
12. [Balance Sheet](#12-balance-sheet)
13. [Cash Flow Statement](#13-cash-flow-statement)
14. [How P&L, Balance Sheet, and Cash Flow Connect](#14-how-pl-balance-sheet-and-cash-flow-connect)
15. [Accrual Accounting vs Cash Accounting](#15-accrual-accounting-vs-cash-accounting)
16. [Core Adjusting Entries](#16-core-adjusting-entries)
17. [Revenue and Receivables](#17-revenue-and-receivables)
18. [Purchases, Expenses, and Payables](#18-purchases-expenses-and-payables)
19. [Inventory and Cost of Goods Sold](#19-inventory-and-cost-of-goods-sold)
20. [Fixed Assets and Depreciation](#20-fixed-assets-and-depreciation)
21. [Loans, Interest, and Financing](#21-loans-interest-and-financing)
22. [Capital, Equity, Retained Earnings, and Dividends](#22-capital-equity-retained-earnings-and-dividends)
23. [Payroll Accounting](#23-payroll-accounting)
24. [Taxes, GST/VAT, Withholding, and Tax Payables](#24-taxes-gstvat-withholding-and-tax-payables)
25. [Bank, Cash, Petty Cash, and Bank Reconciliation](#25-bank-cash-petty-cash-and-bank-reconciliation)
26. [Debit Notes and Credit Notes](#26-debit-notes-and-credit-notes)
27. [Provisions, Contingencies, and Write-offs](#27-provisions-contingencies-and-write-offs)
28. [Foreign Currency Basics](#28-foreign-currency-basics)
29. [Month-End and Year-End Closing](#29-month-end-and-year-end-closing)
30. [Internal Controls and Audit Trail](#30-internal-controls-and-audit-trail)
31. [Financial Statement Analysis and Ratios](#31-financial-statement-analysis-and-ratios)
32. [Common Accounting Errors and How to Find Them](#32-common-accounting-errors-and-how-to-find-them)
33. [End-to-End Case Study: From Transactions to Statements](#33-end-to-end-case-study-from-transactions-to-statements)
34. [ERP / Accounting Software Workflow](#34-erp--accounting-software-workflow)
35. [Scenario Library](#35-scenario-library)
36. [Interview and Practical Questions](#36-interview-and-practical-questions)
37. [Exercises with Answers](#37-exercises-with-answers)
38. [Quick Revision Cheat Sheets](#38-quick-revision-cheat-sheets)
39. [Glossary](#39-glossary)
40. [Recommended Learning Path](#40-recommended-learning-path)

---

# 1. How to Use This Handbook

Accounting becomes much easier when you understand the **flow of information** instead of memorizing isolated rules.

Use this handbook in the following order:

1. Learn the accounting equation.
2. Understand the five major account families: assets, liabilities, equity, income, expenses.
3. Learn debit and credit logic.
4. Practice journal entries.
5. Understand vouchers and source documents.
6. Post journal entries to ledgers.
7. Prepare a trial balance.
8. Prepare P&L and Balance Sheet.
9. Learn how the Cash Flow Statement explains movements in cash.
10. Practice adjustments, closing entries, and business scenarios.
11. Learn ratios and financial statement interpretation.
12. Practice the end-to-end case study.

A useful mental model is:

```text
Business Event
    ↓
Source Document
    ↓
Voucher / Journal Entry
    ↓
General Ledger
    ↓
Trial Balance
    ↓
Adjustments
    ↓
Adjusted Trial Balance
    ↓
Financial Statements
    ├── Profit & Loss
    ├── Balance Sheet
    └── Cash Flow Statement
```

---

# 2. The Big Picture: How Company Accounting Works

Every company performs business activities such as:

- owners investing money;
- buying inventory;
- purchasing equipment;
- selling goods or services;
- receiving customer payments;
- paying vendors;
- paying salaries;
- taking loans;
- paying interest;
- collecting or paying taxes;
- recording depreciation;
- making provisions;
- distributing profits.

Accounting converts these activities into structured financial information.

## 2.1 The accounting cycle

A typical accounting cycle is:

```text
1. Transaction occurs
2. Evidence/document is created
3. Accounts affected are identified
4. Debit and credit are determined
5. Voucher / journal entry is recorded
6. Entry is posted to ledger
7. Trial balance is generated
8. Adjustments are posted
9. Financial statements are prepared
10. Period is closed
```

## 2.2 Example

A company sells consulting services worth ₹100,000 on credit.

Business meaning:

- the company earned revenue;
- the customer now owes money.

Accounting entry:

```text
Accounts Receivable      Dr  100,000
    Service Revenue              Cr  100,000
```

Effect:

- Asset increases: Accounts Receivable +₹100,000
- Revenue increases: +₹100,000
- Profit increases: +₹100,000 before expenses
- No immediate cash movement

This example immediately shows why **profit and cash are not the same thing**.

---

# 3. Accounting Equation

The foundation of accounting is:

```text
Assets = Liabilities + Equity
```

Another expanded form is:

```text
Assets = Liabilities + Owner Capital + Retained Earnings
```

Since retained earnings are affected by profit:

```text
Ending Equity = Beginning Equity + Profit - Dividends/Withdrawals + New Capital
```

## 3.1 Assets

Assets are economic resources controlled by the company.

Examples:

- Cash
- Bank balance
- Accounts receivable
- Inventory
- Prepaid expenses
- Security deposits
- Machinery
- Computers
- Vehicles
- Buildings
- Intangible assets

## 3.2 Liabilities

Liabilities are obligations the company must settle.

Examples:

- Accounts payable
- Salaries payable
- Tax payable
- Interest payable
- Bank loan
- Customer advances
- Lease liabilities

## 3.3 Equity

Equity is the owners' residual interest after liabilities are deducted from assets.

```text
Equity = Assets - Liabilities
```

Examples:

- Share capital
- Owner's capital
- Securities premium
- Reserves
- Retained earnings

## 3.4 Example: owner invests ₹500,000

```text
Cash / Bank              Dr  500,000
    Owner Capital                Cr  500,000
```

Equation:

```text
Assets       = Liabilities + Equity
₹500,000     = ₹0          + ₹500,000
```

Balanced.

## 3.5 Example: company buys equipment for ₹120,000 cash

```text
Equipment                Dr  120,000
    Bank                          Cr  120,000
```

Total assets do not change:

- Equipment +₹120,000
- Bank -₹120,000

Only the composition of assets changes.

---

# 4. Account Types and Debit/Credit Rules

The words **Debit (Dr)** and **Credit (Cr)** do not automatically mean increase or decrease. Their meaning depends on the account type.

## 4.1 Core rule

| Account Type | Increase | Decrease | Normal Balance |
|---|---:|---:|---|
| Asset | Debit | Credit | Debit |
| Expense | Debit | Credit | Debit |
| Liability | Credit | Debit | Credit |
| Equity | Credit | Debit | Credit |
| Revenue / Income | Credit | Debit | Credit |

A useful memory aid:

```text
DEAD = Debits increase Expenses, Assets, Drawings
CLIC = Credits increase Liabilities, Income, Capital
```

## 4.2 Why every entry balances

Every journal entry must satisfy:

```text
Total Debits = Total Credits
```

Example: rent paid ₹25,000.

```text
Rent Expense              Dr   25,000
    Bank                           Cr   25,000
```

- Expense increases → Debit
- Bank asset decreases → Credit

## 4.3 Revenue received in cash

Service provided and cash received ₹40,000:

```text
Bank                      Dr   40,000
    Service Revenue               Cr   40,000
```

## 4.4 Purchase on credit

Office supplies purchased for ₹10,000, payment due later:

```text
Office Supplies Expense   Dr   10,000
    Accounts Payable              Cr   10,000
```

## 4.5 Customer pays an old invoice

```text
Bank                      Dr   100,000
    Accounts Receivable           Cr   100,000
```

This is **not revenue again**. Revenue was recognized when the sale occurred.

---

# 5. Chart of Accounts

A **Chart of Accounts (COA)** is the organized list of all ledger accounts used by a company.

A simple numbering structure might be:

```text
1000–1999  Assets
2000–2999  Liabilities
3000–3999  Equity
4000–4999  Revenue
5000–5999  Cost of Goods Sold
6000–7999  Operating Expenses
8000–8999  Other Income / Expense
```

## 5.1 Sample chart of accounts

### Assets

```text
1000 Cash
1010 Main Bank
1020 Petty Cash
1100 Accounts Receivable
1200 Inventory
1300 Prepaid Expenses
1400 Employee Advances
1500 Security Deposits
1600 Property, Plant & Equipment
1610 Computers
1620 Furniture
1630 Vehicles
1690 Accumulated Depreciation
```

### Liabilities

```text
2000 Accounts Payable
2100 Salaries Payable
2200 Tax Payable
2300 Accrued Expenses
2400 Customer Advances
2500 Short-Term Borrowings
2600 Long-Term Loans
```

### Equity

```text
3000 Share Capital
3100 Additional Capital / Premium
3200 Retained Earnings
3300 Current-Year Profit
```

### Revenue

```text
4000 Product Sales
4100 Service Revenue
4200 Other Operating Income
```

### Expenses

```text
5000 Cost of Goods Sold
6000 Salaries Expense
6100 Rent Expense
6200 Electricity Expense
6300 Software Expense
6400 Travel Expense
6500 Depreciation Expense
6600 Finance Cost
6700 Bad Debt Expense
```

## 5.2 Why a good COA matters

A well-designed chart of accounts helps with:

- financial reporting;
- department reporting;
- cost center analysis;
- budgeting;
- audits;
- ERP configuration;
- tax reporting;
- management dashboards.

Too many accounts create clutter. Too few accounts hide useful information.

---

# 6. Source Documents and Accounting Evidence

Before a transaction is recorded, there is usually supporting evidence.

Examples:

| Business Event | Typical Source Document |
|---|---|
| Sale to customer | Sales invoice |
| Purchase from vendor | Vendor invoice |
| Payment to vendor | Payment advice / bank proof |
| Customer receipt | Receipt / bank statement |
| Purchase order | PO |
| Goods received | GRN / goods receipt document |
| Expense reimbursement | Expense claim + receipts |
| Payroll | Payroll register |
| Fixed asset purchase | Invoice + approval + asset capitalization form |
| Bank charge | Bank statement |
| Loan | Loan agreement |
| Journal adjustment | Approved journal support |

A strong accounting system should preserve an **audit trail** from financial statement number back to the original source document.

---

# 7. Journal and Journal Entries

A **journal** is the chronological record of accounting entries.

A journal entry normally contains:

- date;
- voucher/reference number;
- account debited;
- account credited;
- amount;
- narration/description;
- supporting document;
- cost center/project if applicable;
- tax details if applicable;
- preparer and approver.

## 7.1 Basic format

```text
Date: 01-Apr-20XX

Rent Expense              Dr   50,000
    Bank                           Cr   50,000

Narration: Office rent paid for April.
```

## 7.2 Simple journal entry

Only one debit and one credit.

```text
Bank                      Dr   75,000
    Accounts Receivable           Cr   75,000
```

## 7.3 Compound journal entry

Multiple debits and/or credits.

Example: monthly payroll ₹300,000, with employee deductions of ₹30,000 and net salary payable ₹270,000.

```text
Salary Expense            Dr  300,000
    Employee Deductions Payable   Cr   30,000
    Salary Payable               Cr  270,000
```

When salary is paid:

```text
Salary Payable            Dr  270,000
    Bank                          Cr  270,000
```

## 7.4 Journal narration

Bad narration:

```text
Adjustment entry
```

Better narration:

```text
To accrue March internet expense based on vendor estimate; invoice pending as of month-end.
```

Narration should explain **why** the entry exists.

## 7.5 Reversing entries

Some accruals are automatically reversed in the next period.

March 31 accrual:

```text
Electricity Expense       Dr   20,000
    Accrued Expenses              Cr   20,000
```

April 1 reversal:

```text
Accrued Expenses          Dr   20,000
    Electricity Expense           Cr   20,000
```

When the April invoice arrives for ₹21,000:

```text
Electricity Expense       Dr   21,000
    Accounts Payable              Cr   21,000
```

Net April expense after reversal = ₹1,000 relating to the variance from the March estimate, assuming the invoice relates to March and is handled through a reversing-entry process.

---

# 8. Vouchers

A **voucher** is an accounting document or system record used to authorize and record a transaction.

In many accounting/ERP systems, transactions are grouped into voucher types.

## 8.1 Common voucher types

### Payment Voucher

Used when money is paid.

Example: vendor payment ₹80,000.

```text
Accounts Payable          Dr   80,000
    Bank                          Cr   80,000
```

### Receipt Voucher

Used when money is received.

```text
Bank                      Dr   50,000
    Accounts Receivable           Cr   50,000
```

### Contra Voucher

Used for transfers between cash/bank accounts.

Example: cash deposited into bank.

```text
Bank                      Dr   25,000
    Cash                          Cr   25,000
```

### Journal Voucher

Used for non-cash adjustments such as:

- depreciation;
- accruals;
- provisions;
- reclassifications;
- corrections;
- allocations.

Example:

```text
Depreciation Expense      Dr   15,000
    Accumulated Depreciation      Cr   15,000
```

### Sales Voucher / Sales Invoice

Used to record a customer sale.

```text
Accounts Receivable       Dr  118,000
    Sales Revenue                 Cr  100,000
    Output Tax Payable            Cr   18,000
```

### Purchase Voucher / Vendor Invoice

```text
Expense / Inventory       Dr  100,000
Input Tax Recoverable     Dr   18,000
    Accounts Payable             Cr  118,000
```

Tax percentages above are purely illustrative.

### Debit Note

Often used to increase a receivable or reduce a payable, depending on the business context.

### Credit Note

Often used to reduce a receivable/revenue or reduce the amount billed to a customer.

## 8.2 Voucher lifecycle

A controlled voucher flow may look like:

```text
Draft
  ↓
Supporting documents attached
  ↓
Validation
  ↓
Approval
  ↓
Posting
  ↓
Ledger update
  ↓
Locked / audit trail retained
```

## 8.3 Voucher vs journal entry

- A **journal entry** is the accounting debit/credit record.
- A **voucher** is the business/system document that supports or initiates the entry.

One voucher may create one or several journal lines.

---

# 9. Ledger

A **ledger** groups all transactions by account.

The journal answers:

> What happened chronologically?

The ledger answers:

> What happened in this particular account?

## 9.1 Example: Bank ledger

Opening bank balance: ₹500,000

Transactions:

- Customer receipt: +₹100,000
- Rent payment: -₹50,000
- Vendor payment: -₹120,000

Ledger:

| Date | Description | Debit | Credit | Balance |
|---|---|---:|---:|---:|
| Opening | Opening balance | 500,000 | — | 500,000 Dr |
| 05-Apr | Customer receipt | 100,000 | — | 600,000 Dr |
| 10-Apr | Rent | — | 50,000 | 550,000 Dr |
| 15-Apr | Vendor payment | — | 120,000 | 430,000 Dr |

## 9.2 Accounts receivable ledger

Customer A invoice ₹100,000:

```text
Accounts Receivable       Dr  100,000
    Revenue                       Cr  100,000
```

Customer pays ₹60,000:

```text
Bank                      Dr   60,000
    Accounts Receivable           Cr   60,000
```

Customer balance remaining = ₹40,000.

---

# 10. Trial Balance

A **Trial Balance (TB)** lists the closing balances of ledger accounts.

Its basic purpose is to verify:

```text
Total Debit Balances = Total Credit Balances
```

## 10.1 Example

| Account | Debit | Credit |
|---|---:|---:|
| Bank | 300,000 | — |
| Accounts Receivable | 100,000 | — |
| Equipment | 200,000 | — |
| Rent Expense | 50,000 | — |
| Salary Expense | 100,000 | — |
| Accounts Payable | — | 80,000 |
| Loan | — | 120,000 |
| Capital | — | 350,000 |
| Revenue | — | 200,000 |
| **Total** | **750,000** | **750,000** |

## 10.2 A balanced TB does not guarantee zero errors

The TB can still balance if:

- the wrong account was used;
- a transaction was omitted completely;
- equal debit and credit amounts were both wrong;
- two accounts were reversed incorrectly;
- a duplicate entry was posted.

Therefore, reconciliation and review are still essential.

---

# 11. Profit & Loss Statement

The **Profit & Loss Statement (P&L)**, also called the Income Statement or Statement of Profit and Loss, measures financial performance **over a period**.

Examples:

- April 1 to April 30
- Quarter ended June 30
- Financial year ended March 31

## 11.1 Basic formula

```text
Profit = Income - Expenses
```

For a trading/manufacturing company:

```text
Revenue
- Cost of Goods Sold
= Gross Profit

Gross Profit
- Operating Expenses
= Operating Profit

Operating Profit
+ Other Income
- Finance Costs
- Tax Expense
= Net Profit
```

## 11.2 Sample P&L

```text
ABC Pvt Ltd
Profit & Loss Statement
For the year ended 31 March 20XX

Revenue                              5,000,000
Less: Cost of Goods Sold            (3,000,000)
                                    -----------
Gross Profit                         2,000,000

Operating Expenses:
  Salaries                           700,000
  Rent                               240,000
  Electricity                         80,000
  Software                           100,000
  Travel                              60,000
  Depreciation                       120,000
                                    -----------
Total Operating Expenses           (1,300,000)
                                    -----------
Operating Profit                      700,000

Other Income                           20,000
Finance Cost                          (70,000)
                                    -----------
Profit Before Tax                     650,000
Tax Expense                          (150,000)
                                    -----------
Net Profit                            500,000
```

## 11.3 Revenue vs cash receipt

A customer may buy on credit.

At sale:

```text
Accounts Receivable       Dr  100,000
    Revenue                       Cr  100,000
```

P&L revenue increases immediately if recognition conditions are satisfied, but cash remains unchanged.

When the customer pays:

```text
Bank                      Dr  100,000
    Accounts Receivable           Cr  100,000
```

No new revenue is recorded.

## 11.4 Expense vs cash payment

An expense may be recognized before cash is paid.

Electricity used in March, invoice received in April:

March:

```text
Electricity Expense       Dr   20,000
    Accrued Expense               Cr   20,000
```

The March P&L includes ₹20,000 even though no cash was paid in March.

## 11.5 Gross profit

```text
Gross Profit = Revenue - Cost of Goods Sold
```

Gross profit measures profitability after direct product/service costs but before general operating expenses.

## 11.6 EBITDA

A commonly used management metric is:

```text
EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization
```

It is not the same as cash flow.

## 11.7 EBIT

```text
EBIT = Earnings Before Interest and Taxes
```

Often approximated as operating profit, depending on presentation.

## 11.8 Net profit

Net profit is the residual income after all recognized expenses, finance costs, and taxes.

A profitable company can still have cash problems.

---

# 12. Balance Sheet

The **Balance Sheet** or **Statement of Financial Position** shows the company's financial position **at a specific date**.

Example:

> As at 31 March 20XX

Unlike P&L, which covers a period, the Balance Sheet is a snapshot.

## 12.1 Basic structure

```text
Assets
  Current Assets
  Non-Current Assets

Liabilities
  Current Liabilities
  Non-Current Liabilities

Equity
```

And always:

```text
Assets = Liabilities + Equity
```

## 12.2 Current assets

Assets expected to be realized, sold, or consumed in the normal operating cycle or relatively near term.

Examples:

- Cash and bank
- Accounts receivable
- Inventory
- Short-term investments
- Prepaid expenses
- Recoverable taxes

## 12.3 Non-current assets

Examples:

- Land
- Buildings
- Plant and machinery
- Computers
- Vehicles
- Long-term investments
- Intangible assets
- Long-term deposits

## 12.4 Current liabilities

Examples:

- Accounts payable
- Salary payable
- Tax payable
- Short-term loan
- Current portion of long-term debt
- Accrued expenses
- Customer advances

## 12.5 Non-current liabilities

Examples:

- Long-term bank loans
- Long-term lease obligations
- Certain long-term provisions

## 12.6 Equity

Examples:

- Share capital
- Share premium
- Reserves
- Retained earnings
- Current-year profit

## 12.7 Sample Balance Sheet

```text
ABC Pvt Ltd
Balance Sheet
As at 31 March 20XX

ASSETS
Current Assets
  Bank                              700,000
  Accounts Receivable              600,000
  Inventory                        500,000
  Prepaid Expenses                  50,000
                                  ---------
Total Current Assets             1,850,000

Non-Current Assets
  Property & Equipment           1,500,000
  Less: Accumulated Depreciation  (300,000)
                                  ---------
Net Property & Equipment         1,200,000
                                  ---------
TOTAL ASSETS                     3,050,000

LIABILITIES
Current Liabilities
  Accounts Payable                 450,000
  Accrued Expenses                 150,000
  Tax Payable                      100,000
                                  ---------
Total Current Liabilities          700,000

Non-Current Liabilities
  Bank Loan                        850,000
                                  ---------
TOTAL LIABILITIES                1,550,000

EQUITY
  Share Capital                  1,000,000
  Retained Earnings                500,000
                                  ---------
TOTAL EQUITY                     1,500,000
                                  ---------
TOTAL LIABILITIES + EQUITY       3,050,000
```

Balanced:

```text
3,050,000 = 1,550,000 + 1,500,000
```

---

# 13. Cash Flow Statement

The **Cash Flow Statement (CFS)** explains why cash increased or decreased during a period.

It is generally divided into:

1. Operating activities
2. Investing activities
3. Financing activities

## 13.1 Operating activities

Cash generated or used by normal business operations.

Examples:

- cash collected from customers;
- cash paid to suppliers;
- salaries paid;
- rent paid;
- taxes paid;
- other operating receipts/payments.

## 13.2 Investing activities

Cash related to long-term assets and investments.

Examples:

- purchase of machinery;
- sale of equipment;
- purchase of long-term investments;
- proceeds from selling investments.

## 13.3 Financing activities

Cash related to funding the company.

Examples:

- owner/shareholder capital introduced;
- loan received;
- loan principal repaid;
- dividends paid;
- share buybacks.

The classification of interest and dividends can vary by applicable accounting framework and policy, so statutory reporting should follow the relevant standards.

## 13.4 Direct method

The direct method presents actual major classes of operating cash receipts and payments.

Example:

```text
Cash received from customers        1,000,000
Cash paid to suppliers               (500,000)
Cash paid to employees               (250,000)
Cash paid for rent                    (80,000)
                                     ---------
Net Cash from Operating Activities    170,000
```

## 13.5 Indirect method

The indirect method starts with accounting profit and adjusts for:

- non-cash items;
- working-capital changes;
- items classified elsewhere.

Example:

```text
Net Profit                            200,000
Add: Depreciation                      50,000
Increase in Receivables               (80,000)
Decrease in Inventory                  20,000
Increase in Payables                   40,000
                                     ---------
Cash from Operations                  230,000
```

## 13.6 Why depreciation is added back

Depreciation reduces accounting profit, but it does not require a current-period cash payment.

Therefore, under the indirect method:

```text
Profit
+ Depreciation
= cash effect before working-capital adjustments
```

The actual cash outflow occurred when the asset was purchased, usually shown in investing activities.

## 13.7 Cash flow example

```text
Operating Activities                 +300,000
Investing Activities                 -450,000
Financing Activities                 +250,000
                                     --------
Net Increase in Cash                 +100,000
Opening Cash                          200,000
                                     --------
Closing Cash                          300,000
```

The closing cash should reconcile to cash and cash equivalents in the Balance Sheet, subject to the reporting framework's definition.

---

# 14. How P&L, Balance Sheet, and Cash Flow Connect

These statements answer different questions.

| Statement | Main Question | Time Perspective |
|---|---|---|
| P&L | Did the company make a profit? | Over a period |
| Balance Sheet | What does the company own and owe? | At a date |
| Cash Flow | Why did cash increase or decrease? | Over a period |

## 14.1 Profit flows into equity

Suppose opening retained earnings = ₹300,000 and current-year profit = ₹200,000.

If no dividends are paid:

```text
Closing Retained Earnings = 300,000 + 200,000 = 500,000
```

So the P&L's profit ultimately affects Balance Sheet equity.

## 14.2 Cash flow explains change in bank/cash

Suppose:

```text
Opening Cash = 150,000
Net Cash Flow = +90,000
Closing Cash = 240,000
```

The closing balance should connect to the Balance Sheet.

## 14.3 Credit sale connects P&L and Balance Sheet

Sale ₹100,000 on credit:

```text
P&L: Revenue +100,000
Balance Sheet: Accounts Receivable +100,000
Cash Flow: No immediate cash movement
```

## 14.4 Depreciation connects P&L and Balance Sheet

Depreciation ₹20,000:

```text
P&L: Expense +20,000
Balance Sheet: Accumulated Depreciation +20,000
Cash Flow: Added back under indirect operating cash flow because it is non-cash
```

## 14.5 Loan receipt connects Balance Sheet and Cash Flow

Loan received ₹500,000:

```text
Bank                      Dr  500,000
    Loan Payable                  Cr  500,000
```

Effect:

- Balance Sheet cash +₹500,000
- Balance Sheet liabilities +₹500,000
- Financing cash inflow +₹500,000
- No P&L revenue

---

# 15. Accrual Accounting vs Cash Accounting

## 15.1 Cash basis

Revenue and expenses are recognized when cash moves.

Simple, but often not suitable for presenting the full economic picture of larger businesses.

## 15.2 Accrual basis

Revenue is recognized when earned and expenses when incurred, subject to applicable recognition rules, regardless of when cash moves.

### Example: service delivered in March, cash received in April

March:

```text
Accounts Receivable       Dr  100,000
    Service Revenue               Cr  100,000
```

April:

```text
Bank                      Dr  100,000
    Accounts Receivable           Cr  100,000
```

Revenue belongs to March under accrual accounting.

### Example: March rent paid in February

February payment:

```text
Prepaid Rent              Dr   30,000
    Bank                           Cr   30,000
```

March recognition:

```text
Rent Expense              Dr   30,000
    Prepaid Rent                   Cr   30,000
```

---

# 16. Core Adjusting Entries

Adjusting entries make financial statements reflect the correct period.

## 16.1 Accrued expense

Expense incurred but invoice not yet received.

```text
Expense                   Dr   XX
    Accrued Expense               Cr   XX
```

## 16.2 Accrued income

Income earned but not yet billed/received, where recognition criteria are satisfied.

```text
Accrued Income / Receivable   Dr   XX
    Revenue                           Cr   XX
```

## 16.3 Prepaid expense

Cash paid before the expense period.

Payment:

```text
Prepaid Insurance         Dr  120,000
    Bank                          Cr  120,000
```

Monthly expense over 12 months:

```text
Insurance Expense         Dr   10,000
    Prepaid Insurance             Cr   10,000
```

## 16.4 Unearned / deferred revenue

Customer pays before service is performed.

Receipt:

```text
Bank                      Dr  120,000
    Customer Advance / Deferred Revenue   Cr 120,000
```

When ₹30,000 becomes earned:

```text
Deferred Revenue          Dr   30,000
    Revenue                       Cr   30,000
```

## 16.5 Depreciation

```text
Depreciation Expense      Dr   25,000
    Accumulated Depreciation      Cr   25,000
```

## 16.6 Bad debt write-off

Where a specific receivable is determined unrecoverable and the accounting policy requires a direct write-off:

```text
Bad Debt Expense          Dr   10,000
    Accounts Receivable           Cr   10,000
```

If an allowance model is used, entries differ.

## 16.7 Reclassification

A balance posted to the wrong account may be reclassified.

Example: computer purchase of ₹80,000 incorrectly booked as office expense.

Correction:

```text
Computer Equipment        Dr   80,000
    Office Expense                Cr   80,000
```

No cash movement occurs in the correction.

---

# 17. Revenue and Receivables

## 17.1 Cash sale

```text
Bank / Cash               Dr  100,000
    Sales Revenue                 Cr  100,000
```

## 17.2 Credit sale

```text
Accounts Receivable       Dr  100,000
    Sales Revenue                 Cr  100,000
```

## 17.3 Customer receipt

```text
Bank                      Dr  100,000
    Accounts Receivable           Cr  100,000
```

## 17.4 Customer advance

If a customer pays ₹50,000 before the company has earned revenue:

```text
Bank                      Dr   50,000
    Customer Advance              Cr   50,000
```

Later, when revenue is earned:

```text
Customer Advance          Dr   50,000
    Revenue                       Cr   50,000
```

## 17.5 Partial collection

Invoice: ₹100,000

Customer pays ₹70,000:

```text
Bank                      Dr   70,000
    Accounts Receivable           Cr   70,000
```

Receivable outstanding = ₹30,000.

## 17.6 Sales return

Customer returns goods worth ₹10,000.

Simplified revenue-side entry:

```text
Sales Returns / Revenue   Dr   10,000
    Accounts Receivable           Cr   10,000
```

Inventory/COGS effects may also need reversal depending on the transaction.

## 17.7 Accounts receivable aging

Receivables are often grouped as:

```text
0–30 days
31–60 days
61–90 days
91–180 days
180+ days
```

Aging helps assess collection risk and expected credit losses.

---

# 18. Purchases, Expenses, and Payables

## 18.1 Cash purchase of expense

```text
Internet Expense          Dr   15,000
    Bank                           Cr   15,000
```

## 18.2 Credit purchase of expense

```text
Consulting Expense        Dr   50,000
    Accounts Payable              Cr   50,000
```

## 18.3 Vendor payment

```text
Accounts Payable          Dr   50,000
    Bank                           Cr   50,000
```

Payment does not create a new expense when the expense was already recognized from the vendor invoice.

## 18.4 Advance to vendor

```text
Vendor Advance            Dr   40,000
    Bank                           Cr   40,000
```

When invoice for ₹100,000 is booked:

```text
Expense / Inventory       Dr  100,000
    Accounts Payable             Cr  100,000
```

Advance adjusted:

```text
Accounts Payable          Dr   40,000
    Vendor Advance                Cr   40,000
```

Remaining vendor payable = ₹60,000.

## 18.5 Expense accrual when invoice is missing

```text
Professional Fees Expense Dr   75,000
    Accrued Expenses              Cr   75,000
```

This avoids understating expenses and liabilities at month-end.

---

# 19. Inventory and Cost of Goods Sold

Inventory accounting is essential for trading and manufacturing businesses.

## 19.1 Purchase inventory

```text
Inventory                 Dr  200,000
    Accounts Payable              Cr  200,000
```

## 19.2 Sell inventory

Assume selling price = ₹150,000 and inventory cost = ₹90,000.

Revenue entry:

```text
Accounts Receivable       Dr  150,000
    Sales Revenue                 Cr  150,000
```

Cost entry:

```text
Cost of Goods Sold        Dr   90,000
    Inventory                     Cr   90,000
```

Profit before other expenses = ₹60,000.

## 19.3 Inventory equation

```text
Opening Inventory
+ Purchases / Production Cost
- Closing Inventory
= Cost of Goods Sold
```

## 19.4 Inventory methods

Common cost-flow methods include:

- FIFO
- Weighted Average
- Specific Identification

Permitted methods depend on the applicable accounting framework and circumstances.

## 19.5 Inventory write-down

If inventory's carrying amount is no longer recoverable under the applicable accounting policy, an adjustment may be required.

Illustrative entry:

```text
Inventory Write-down Expense   Dr   20,000
    Inventory                          Cr   20,000
```

---

# 20. Fixed Assets and Depreciation

A **fixed asset** is generally a long-term resource used in operations rather than consumed immediately.

Examples:

- machinery;
- computers;
- furniture;
- vehicles;
- buildings.

## 20.1 Asset purchase

Machine purchased for ₹600,000 cash:

```text
Machinery                 Dr  600,000
    Bank                          Cr  600,000
```

This is usually **not** a ₹600,000 immediate P&L expense when capitalization criteria are satisfied.

## 20.2 Depreciation

Assume straight-line depreciation for learning:

```text
Cost = ₹600,000
Useful life = 5 years
Residual value = ₹0
Annual depreciation = ₹120,000
```

Entry:

```text
Depreciation Expense      Dr  120,000
    Accumulated Depreciation     Cr  120,000
```

## 20.3 Net book value

After two years:

```text
Asset Cost                     600,000
Accumulated Depreciation      (240,000)
                              --------
Net Book Value                 360,000
```

## 20.4 Disposal example

Assume:

```text
Cost = 600,000
Accumulated depreciation = 480,000
Book value = 120,000
Sale proceeds = 150,000
Gain = 30,000
```

Entry:

```text
Bank                      Dr  150,000
Accumulated Depreciation  Dr  480,000
    Machinery                     Cr  600,000
    Gain on Sale of Asset         Cr   30,000
```

---

# 21. Loans, Interest, and Financing

## 21.1 Loan received

```text
Bank                      Dr  1,000,000
    Bank Loan                     Cr  1,000,000
```

A loan is not revenue because it must be repaid.

## 21.2 Interest accrued

Monthly interest ₹10,000:

```text
Interest Expense          Dr   10,000
    Interest Payable              Cr   10,000
```

## 21.3 Interest paid

```text
Interest Payable          Dr   10,000
    Bank                           Cr   10,000
```

## 21.4 Principal repayment

Loan principal of ₹100,000 repaid:

```text
Bank Loan                 Dr  100,000
    Bank                          Cr  100,000
```

Principal repayment does not normally reduce profit. It reduces a liability.

## 21.5 EMI contains principal + interest

Suppose monthly payment = ₹55,000:

- principal = ₹45,000
- interest = ₹10,000

```text
Bank Loan                 Dr   45,000
Interest Expense          Dr   10,000
    Bank                           Cr   55,000
```

Only ₹10,000 affects P&L as interest expense.

---

# 22. Capital, Equity, Retained Earnings, and Dividends

## 22.1 Capital introduced

```text
Bank                      Dr  500,000
    Share Capital / Owner Capital  Cr  500,000
```

Capital is not revenue.

## 22.2 Profit increases retained earnings

At period closing, net income ultimately becomes part of equity according to the entity's closing process.

Conceptually:

```text
Opening Retained Earnings
+ Net Profit
- Dividends
= Closing Retained Earnings
```

## 22.3 Dividend declared

Illustrative entry:

```text
Retained Earnings / Dividend   Dr   100,000
    Dividend Payable                  Cr   100,000
```

When paid:

```text
Dividend Payable          Dr  100,000
    Bank                          Cr  100,000
```

Dividend is a distribution of equity, not an operating expense.

---

# 23. Payroll Accounting

Payroll can include:

- gross salary;
- employee deductions;
- employer contributions;
- payroll taxes;
- bonus;
- reimbursements;
- salary payable.

## 23.1 Simplified payroll example

Gross salary = ₹500,000  
Employee deductions = ₹50,000  
Net salary = ₹450,000

Payroll recognition:

```text
Salary Expense            Dr  500,000
    Employee Deductions Payable  Cr   50,000
    Salary Payable              Cr  450,000
```

Salary payment:

```text
Salary Payable            Dr  450,000
    Bank                          Cr  450,000
```

Payment of employee deductions to authorities:

```text
Employee Deductions Payable  Dr   50,000
    Bank                             Cr   50,000
```

Employer-side payroll costs may require separate expense and payable entries.

---

# 24. Taxes, GST/VAT, Withholding, and Tax Payables

Tax rules are jurisdiction-specific. The entries below teach the accounting mechanism, not current legal rates or compliance requirements.

## 24.1 Output tax on sales

Illustrative taxable sale:

```text
Base value = 100,000
Tax = 18,000
Invoice total = 118,000
```

Entry:

```text
Accounts Receivable       Dr  118,000
    Sales Revenue                 Cr  100,000
    Output Tax Payable            Cr   18,000
```

## 24.2 Input tax on purchase

Illustrative purchase:

```text
Expense = 50,000
Recoverable tax = 9,000
Total payable = 59,000
```

Entry:

```text
Expense                   Dr   50,000
Input Tax Recoverable     Dr    9,000
    Accounts Payable              Cr   59,000
```

## 24.3 Withholding tax concept

Suppose a vendor invoice is ₹100,000 and the company is required by local law to withhold ₹10,000 from payment.

Invoice recognition:

```text
Expense                   Dr  100,000
    Accounts Payable              Cr  100,000
```

At payment:

```text
Accounts Payable          Dr  100,000
    Bank                           Cr   90,000
    Withholding Tax Payable       Cr   10,000
```

When withholding tax is remitted:

```text
Withholding Tax Payable   Dr   10,000
    Bank                           Cr   10,000
```

The exact tax base, rate, timing, and documentation depend on local rules.

---

# 25. Bank, Cash, Petty Cash, and Bank Reconciliation

## 25.1 Cash vs bank

Both are assets but should usually have separate ledger accounts.

## 25.2 Cash withdrawn from bank

```text
Cash                      Dr   20,000
    Bank                           Cr   20,000
```

This is a contra transaction: total cash resources stay the same.

## 25.3 Bank reconciliation

The bank ledger in accounting records may differ temporarily from the bank statement because of:

- unpresented checks;
- deposits in transit;
- bank charges not yet recorded;
- bank interest;
- direct debits;
- failed payments;
- timing differences;
- recording errors.

## 25.4 Example

Ledger balance = ₹105,000  
Bank statement = ₹100,000

Difference: bank charged ₹5,000 but company has not recorded it.

Adjustment:

```text
Bank Charges Expense      Dr    5,000
    Bank                           Cr    5,000
```

Adjusted ledger balance = ₹100,000.

## 25.5 Petty cash

Small expenses may be managed through a petty-cash system.

Example: petty cash replenishment of ₹10,000:

```text
Petty Cash                Dr   10,000
    Bank                           Cr   10,000
```

---

# 26. Debit Notes and Credit Notes

Terminology can vary between buyer and seller perspectives, so always examine the commercial substance.

## 26.1 Seller issues credit note to customer

Original invoice: ₹100,000. Price reduction: ₹10,000.

```text
Sales Returns / Revenue Reduction  Dr   10,000
    Accounts Receivable                    Cr   10,000
```

Customer now owes less.

## 26.2 Buyer receives vendor credit

Original payable = ₹100,000. Vendor grants ₹10,000 credit.

Illustrative adjustment:

```text
Accounts Payable          Dr   10,000
    Purchase / Expense Reduction  Cr   10,000
```

Depending on inventory status and accounting policy, the credit may reduce inventory, COGS, or another expense.

## 26.3 Debit note scenario

A buyer may issue a debit note to a vendor for returned goods, shortage, or price difference.

The accounting result often reduces the amount payable to the vendor.

---

# 27. Provisions, Contingencies, and Write-offs

## 27.1 Provision concept

A provision recognizes an estimated obligation when recognition requirements under the applicable accounting standards are met.

Illustrative example:

```text
Warranty Expense          Dr   50,000
    Warranty Provision            Cr   50,000
```

Later, when ₹10,000 is actually spent:

```text
Warranty Provision        Dr   10,000
    Bank / Inventory              Cr   10,000
```

## 27.2 Provision vs payable

A payable usually has a more certain amount and counterparty.

A provision involves estimation or uncertainty in timing/amount.

## 27.3 Contingent liability

A possible obligation may require disclosure rather than recognition, depending on probability and applicable accounting standards.

## 27.4 Write-off

A write-off removes an asset that is no longer recoverable or useful.

Example: unrecoverable receivable under a direct write-off approach:

```text
Bad Debt Expense          Dr   15,000
    Accounts Receivable           Cr   15,000
```

---

# 28. Foreign Currency Basics

Suppose a company purchases software for USD 1,000.

At invoice date:

```text
Exchange rate: ₹83/USD
Recorded liability = ₹83,000
```

Entry:

```text
Software Expense / Asset  Dr   83,000
    Accounts Payable              Cr   83,000
```

At payment date, suppose rate becomes ₹84/USD:

Payment = ₹84,000.

```text
Accounts Payable          Dr   83,000
Foreign Exchange Loss     Dr    1,000
    Bank                           Cr   84,000
```

If the rate moved in the opposite direction, the company could recognize a foreign-exchange gain.

Actual foreign-currency accounting can involve remeasurement, translation, and specific standards beyond this simplified example.

---

# 29. Month-End and Year-End Closing

Closing ensures that transactions are complete and financial statements are reliable.

## 29.1 Typical month-end checklist

- [ ] Confirm all sales invoices are posted.
- [ ] Confirm all vendor invoices are posted.
- [ ] Reconcile bank accounts.
- [ ] Reconcile petty cash.
- [ ] Review accounts receivable aging.
- [ ] Review accounts payable aging.
- [ ] Record missing expense accruals.
- [ ] Record prepaid expense amortization.
- [ ] Record depreciation/amortization.
- [ ] Review fixed asset additions/disposals.
- [ ] Review inventory and COGS.
- [ ] Review payroll and employee liabilities.
- [ ] Reconcile tax ledgers.
- [ ] Review intercompany balances.
- [ ] Revalue foreign currency balances if required.
- [ ] Review provisions.
- [ ] Check unusual/negative balances.
- [ ] Review suspense accounts.
- [ ] Run Trial Balance.
- [ ] Perform P&L variance review.
- [ ] Perform Balance Sheet reconciliation.
- [ ] Prepare Cash Flow Statement.
- [ ] Obtain management approval.
- [ ] Lock/close the period according to policy.

## 29.2 Year-end adds additional work

Typical activities include:

- statutory audit schedules;
- tax computations;
- physical inventory verification;
- fixed asset verification;
- impairment review;
- legal confirmations;
- bank confirmations;
- customer/vendor balance confirmations;
- loan confirmation;
- provision reviews;
- financial statement disclosures;
- retained earnings closing.

---

# 30. Internal Controls and Audit Trail

Accounting quality depends on controls, not only correct journal logic.

## 30.1 Segregation of duties

Ideally, one person should not control every stage of a transaction.

Example purchase-to-pay segregation:

```text
Requester → Approver → Buyer → Goods Receiver → AP Processor → Payment Approver → Treasury
```

## 30.2 Maker-checker control

One person prepares a voucher; another reviews/approves it.

## 30.3 Three-way match

Common procurement control:

```text
Purchase Order
      ↓
Goods Receipt / Service Confirmation
      ↓
Vendor Invoice
```

Payment is allowed only when required matching conditions are satisfied or approved exceptions exist.

## 30.4 Audit trail should capture

- voucher number;
- transaction date;
- posting date;
- creator;
- approver;
- original value;
- modified value;
- timestamp;
- source document;
- reversal/correction linkage;
- reason for change.

## 30.5 Period locking

After a month is finalized, unrestricted backdated posting can corrupt previously reported numbers. Systems therefore often lock periods and allow controlled exceptions.

---

# 31. Financial Statement Analysis and Ratios

Financial statements become more useful when interpreted.

## 31.1 Gross profit margin

```text
Gross Profit Margin = Gross Profit / Revenue × 100
```

Example:

```text
Revenue = 5,000,000
Gross Profit = 2,000,000
Margin = 40%
```

## 31.2 Net profit margin

```text
Net Profit Margin = Net Profit / Revenue × 100
```

## 31.3 Current ratio

```text
Current Ratio = Current Assets / Current Liabilities
```

Example:

```text
1,850,000 / 700,000 = 2.64
```

Interpretation: the company has ₹2.64 of current assets for each ₹1 of current liabilities. Whether that is healthy depends on industry and asset quality.

## 31.4 Quick ratio

A simplified version:

```text
Quick Ratio = (Cash + Receivables + Short-Term Liquid Investments) / Current Liabilities
```

## 31.5 Debt-to-equity ratio

```text
Debt-to-Equity = Interest-Bearing Debt / Equity
```

Some analysts instead use broader liability definitions, so always check the formula used.

## 31.6 Return on assets

```text
ROA = Net Profit / Average Total Assets × 100
```

## 31.7 Return on equity

```text
ROE = Net Profit / Average Equity × 100
```

## 31.8 Receivable days

Simplified:

```text
Receivable Days = Average Receivables / Credit Revenue × Days in Period
```

## 31.9 Inventory days

```text
Inventory Days = Average Inventory / COGS × Days in Period
```

## 31.10 Payable days

```text
Payable Days = Average Accounts Payable / Credit Purchases × Days in Period
```

## 31.11 Cash conversion cycle

```text
CCC = Inventory Days + Receivable Days - Payable Days
```

A shorter cycle usually means cash invested in operations returns faster, although industry context matters.

## 31.12 EBITDA is not cash

A company may show strong EBITDA but weak cash flow because:

- customers are not paying;
- inventory is growing;
- vendors are being paid quickly;
- large taxes are paid;
- capital expenditure is high;
- debt payments consume cash.

---

# 32. Common Accounting Errors and How to Find Them

## 32.1 Duplicate invoice

Problem: same vendor invoice posted twice.

Effect:

- expense/assets overstated;
- payable overstated;
- potential duplicate payment.

Controls:

- vendor + invoice number duplicate check;
- PO matching;
- AP review.

## 32.2 Expense booked as asset

Problem: routine repair of ₹30,000 capitalized as machinery.

Effect:

- assets overstated;
- current expense understated;
- profit overstated initially.

## 32.3 Asset booked as expense

Problem: qualifying ₹200,000 computer server expensed immediately.

Effect:

- assets understated;
- expense overstated;
- profit understated initially.

## 32.4 Customer receipt booked as revenue

If the original sale was already recognized, recording receipt as revenue duplicates income.

Incorrect:

```text
Bank                      Dr  100,000
    Revenue                       Cr  100,000
```

Correct:

```text
Bank                      Dr  100,000
    Accounts Receivable           Cr  100,000
```

## 32.5 Vendor payment booked as expense again

Incorrect after invoice already posted:

```text
Expense                   Dr  50,000
    Bank                           Cr  50,000
```

Correct:

```text
Accounts Payable          Dr  50,000
    Bank                           Cr  50,000
```

## 32.6 Wrong accounting period

A March expense posted in April can overstate March profit and understate April profit.

Cut-off procedures are essential.

## 32.7 Negative receivable balance

May indicate:

- customer advance;
- overpayment;
- unmatched receipt;
- credit note issue;
- posting error.

## 32.8 Suspense account balance

Suspense should generally be investigated and cleared, not allowed to accumulate indefinitely.

---

# 33. End-to-End Case Study: From Transactions to Statements

Consider **BrightTech Services Pvt Ltd** starting operations.

For simplicity, ignore taxes in this case study.

## 33.1 Transactions for April

1. Owner invests ₹1,000,000 in bank.
2. Company buys computers for ₹240,000 cash.
3. Company pays annual insurance ₹120,000 in advance.
4. Company provides services worth ₹500,000; ₹300,000 is collected immediately and ₹200,000 is on credit.
5. Company pays employee salaries ₹150,000.
6. Company receives an electricity bill of ₹20,000, payable next month.
7. Customer pays ₹80,000 against outstanding receivable.
8. Company receives a bank loan of ₹300,000.
9. Monthly depreciation on computers = ₹10,000.
10. One month of insurance expense = ₹10,000.

## 33.2 Journal entries

### Transaction 1 — capital introduced

```text
Bank                      Dr 1,000,000
    Share Capital                Cr 1,000,000
```

### Transaction 2 — computers purchased

```text
Computer Equipment        Dr   240,000
    Bank                          Cr   240,000
```

### Transaction 3 — annual insurance prepaid

```text
Prepaid Insurance         Dr   120,000
    Bank                          Cr   120,000
```

### Transaction 4A — cash service revenue

```text
Bank                      Dr   300,000
    Service Revenue              Cr   300,000
```

### Transaction 4B — credit service revenue

```text
Accounts Receivable       Dr   200,000
    Service Revenue              Cr   200,000
```

### Transaction 5 — salaries paid

```text
Salary Expense            Dr   150,000
    Bank                          Cr   150,000
```

### Transaction 6 — electricity accrued

```text
Electricity Expense       Dr    20,000
    Accounts Payable             Cr    20,000
```

### Transaction 7 — customer payment

```text
Bank                      Dr    80,000
    Accounts Receivable          Cr    80,000
```

### Transaction 8 — loan received

```text
Bank                      Dr   300,000
    Bank Loan                    Cr   300,000
```

### Transaction 9 — depreciation

```text
Depreciation Expense      Dr    10,000
    Accumulated Depreciation    Cr    10,000
```

### Transaction 10 — insurance expense

```text
Insurance Expense         Dr    10,000
    Prepaid Insurance            Cr    10,000
```

## 33.3 Closing balances

### Bank

```text
Opening                           0
Capital                    +1,000,000
Computer purchase            -240,000
Insurance payment             -120,000
Cash revenue                  +300,000
Salaries                      -150,000
Customer receipt               +80,000
Loan received                 +300,000
                           ------------
Closing Bank                 1,170,000
```

### Accounts receivable

```text
Credit sale                   200,000
Less: customer receipt        (80,000)
                              --------
Closing receivable            120,000
```

### Prepaid insurance

```text
Initial prepayment            120,000
Less: one month expense       (10,000)
                              --------
Closing prepaid               110,000
```

### Computer equipment

```text
Cost                          240,000
Accumulated depreciation      (10,000)
                              --------
Net book value                230,000
```

### Accounts payable

```text
Electricity bill               20,000
```

### Bank loan

```text
300,000
```

## 33.4 Trial Balance

| Account | Debit | Credit |
|---|---:|---:|
| Bank | 1,170,000 | — |
| Accounts Receivable | 120,000 | — |
| Prepaid Insurance | 110,000 | — |
| Computer Equipment | 240,000 | — |
| Accumulated Depreciation | — | 10,000 |
| Accounts Payable | — | 20,000 |
| Bank Loan | — | 300,000 |
| Share Capital | — | 1,000,000 |
| Service Revenue | — | 500,000 |
| Salary Expense | 150,000 | — |
| Electricity Expense | 20,000 | — |
| Depreciation Expense | 10,000 | — |
| Insurance Expense | 10,000 | — |
| **Total** | **1,830,000** | **1,830,000** |

## 33.5 P&L for April

```text
Revenue
  Service Revenue                    500,000

Expenses
  Salary Expense                     150,000
  Electricity Expense                 20,000
  Depreciation Expense                10,000
  Insurance Expense                   10,000
                                     -------
Total Expenses                        190,000
                                     -------
Net Profit                            310,000
```

## 33.6 Balance Sheet at 30 April

```text
ASSETS
Bank                                1,170,000
Accounts Receivable                   120,000
Prepaid Insurance                     110,000
Computer Equipment                    240,000
Less: Accumulated Depreciation        (10,000)
                                    ----------
TOTAL ASSETS                         1,630,000

LIABILITIES
Accounts Payable                       20,000
Bank Loan                             300,000
                                    ----------
TOTAL LIABILITIES                     320,000

EQUITY
Share Capital                       1,000,000
Current Period Profit                 310,000
                                    ----------
TOTAL EQUITY                         1,310,000
                                    ----------
LIABILITIES + EQUITY                1,630,000
```

## 33.7 Cash Flow for April

Using a simplified direct presentation:

### Operating

```text
Cash received from customers:
  Cash sales                         300,000
  Collection of receivable           80,000
                                     -------
Total customer cash                  380,000

Cash paid for salaries              (150,000)
Cash paid for insurance             (120,000)
                                     -------
Net Operating Cash Flow              110,000
```

The insurance payment is an operating cash outflow even though only ₹10,000 is recognized as April expense in this simplified example.

### Investing

```text
Purchase of computers               (240,000)
```

### Financing

```text
Capital received                   1,000,000
Loan received                        300,000
                                   ---------
Net Financing Cash Flow            1,300,000
```

### Reconciliation

```text
Operating Cash Flow                 +110,000
Investing Cash Flow                 -240,000
Financing Cash Flow               +1,300,000
                                  ----------
Net Increase in Cash              +1,170,000
Opening Cash                               0
                                  ----------
Closing Cash                       1,170,000
```

This matches the Balance Sheet bank balance.

## 33.8 Why profit differs from cash

Net profit = ₹310,000  
Net increase in cash = ₹1,170,000

Reasons include:

- ₹1,000,000 capital is cash but not revenue;
- ₹300,000 loan is cash but not revenue;
- ₹240,000 equipment purchase is cash outflow but not immediate full expense;
- ₹120,000 insurance payment is cash outflow but only ₹10,000 expense this month;
- ₹120,000 revenue remains in receivables;
- ₹20,000 electricity expense has not yet been paid;
- ₹10,000 depreciation is expense but not cash outflow this month.

This case study captures the central relationship between the three financial statements.

---

# 34. ERP / Accounting Software Workflow

Modern systems may use separate operational modules but eventually generate general-ledger entries.

## 34.1 Order-to-cash

```text
Customer Order
   ↓
Delivery / Service Completion
   ↓
Sales Invoice
   ↓
Accounts Receivable
   ↓
Customer Receipt
   ↓
Bank Reconciliation
```

Typical accounting:

```text
Invoice:
AR Dr
    Revenue Cr

Receipt:
Bank Dr
    AR Cr
```

## 34.2 Procure-to-pay

```text
Purchase Requisition
   ↓
Purchase Order
   ↓
Goods Receipt / Service Entry
   ↓
Vendor Invoice
   ↓
Approval
   ↓
Accounts Payable
   ↓
Payment
```

Typical invoice entry:

```text
Expense / Inventory / Asset   Dr
Recoverable Tax               Dr
    Accounts Payable              Cr
```

Payment:

```text
Accounts Payable             Dr
    Bank                         Cr
```

## 34.3 Record-to-report

```text
Subledgers
   ↓
General Ledger
   ↓
Reconciliations
   ↓
Adjusting Journals
   ↓
Trial Balance
   ↓
Financial Statements
   ↓
Management / Statutory Reporting
```

## 34.4 Subledgers

Common subledgers include:

- Accounts Receivable (AR)
- Accounts Payable (AP)
- Fixed Assets (FA)
- Inventory
- Payroll
- Bank/Cash

The totals from subledgers should reconcile to their general-ledger control accounts.

Example:

```text
Sum of all customer balances in AR subledger
=
Accounts Receivable control account in GL
```

---

# 35. Scenario Library

This section gives practical mini-scenarios that beginners commonly face.

## Scenario 1 — Office rent paid immediately

Rent: ₹30,000

```text
Rent Expense              Dr   30,000
    Bank                           Cr   30,000
```

**P&L:** Expense +₹30,000  
**Balance Sheet:** Bank -₹30,000  
**Cash Flow:** Operating outflow ₹30,000

---

## Scenario 2 — Office rent accrued, unpaid

```text
Rent Expense              Dr   30,000
    Rent Payable                  Cr   30,000
```

**P&L:** Expense +₹30,000  
**Balance Sheet:** Liability +₹30,000  
**Cash Flow:** No cash yet

---

## Scenario 3 — Customer invoice on credit

```text
Accounts Receivable       Dr  100,000
    Revenue                       Cr  100,000
```

**P&L:** Revenue +₹100,000  
**Balance Sheet:** AR +₹100,000  
**Cash Flow:** No immediate cash

---

## Scenario 4 — Customer payment received

```text
Bank                      Dr  100,000
    Accounts Receivable           Cr  100,000
```

**P&L:** No effect  
**Balance Sheet:** Bank +₹100,000, AR -₹100,000  
**Cash Flow:** Operating inflow

---

## Scenario 5 — Machine purchased for cash

```text
Machinery                 Dr  500,000
    Bank                          Cr  500,000
```

**P&L:** Usually no immediate full expense if capitalization criteria are met  
**Balance Sheet:** Machine +₹500,000, Bank -₹500,000  
**Cash Flow:** Investing outflow

---

## Scenario 6 — Depreciation recorded

```text
Depreciation Expense      Dr   50,000
    Accumulated Depreciation      Cr   50,000
```

**P&L:** Expense +₹50,000  
**Balance Sheet:** Net fixed assets -₹50,000  
**Cash Flow:** Non-cash adjustment under indirect method

---

## Scenario 7 — Loan received

```text
Bank                      Dr  750,000
    Loan Payable                  Cr  750,000
```

**P&L:** No revenue  
**Balance Sheet:** Asset +₹750,000, Liability +₹750,000  
**Cash Flow:** Financing inflow

---

## Scenario 8 — Loan principal repaid

```text
Loan Payable              Dr  100,000
    Bank                          Cr  100,000
```

**P&L:** No expense from principal  
**Balance Sheet:** Bank -₹100,000, Loan -₹100,000  
**Cash Flow:** Financing outflow in many standard presentations

---

## Scenario 9 — Interest paid

```text
Interest Expense          Dr   15,000
    Bank                           Cr   15,000
```

**P&L:** Expense +₹15,000  
**Balance Sheet:** Bank -₹15,000  
**Cash Flow:** Classification depends on reporting framework/policy

---

## Scenario 10 — Customer pays advance

```text
Bank                      Dr   75,000
    Customer Advance              Cr   75,000
```

**P&L:** No revenue yet if not earned  
**Balance Sheet:** Cash +₹75,000, Liability +₹75,000  
**Cash Flow:** Operating inflow in many ordinary business contexts

---

## Scenario 11 — Vendor advance paid

```text
Vendor Advance            Dr   50,000
    Bank                           Cr   50,000
```

**P&L:** No immediate expense  
**Balance Sheet:** One asset increases, another decreases  
**Cash Flow:** Usually operating for ordinary supplies; classification depends on substance

---

## Scenario 12 — Insurance prepaid for 12 months

Payment:

```text
Prepaid Insurance         Dr  120,000
    Bank                          Cr  120,000
```

Each month:

```text
Insurance Expense         Dr   10,000
    Prepaid Insurance             Cr   10,000
```

---

## Scenario 13 — Bad debt written off

```text
Bad Debt Expense          Dr    8,000
    Accounts Receivable           Cr    8,000
```

**P&L:** Expense +₹8,000  
**Balance Sheet:** AR -₹8,000

---

## Scenario 14 — Owner adds more capital

```text
Bank                      Dr  200,000
    Capital                       Cr  200,000
```

Not revenue.

---

## Scenario 15 — Dividend paid

If dividend payable already exists:

```text
Dividend Payable          Dr   60,000
    Bank                           Cr   60,000
```

Not operating expense.

---

## Scenario 16 — Vendor invoice posted, not yet paid

```text
Repair Expense            Dr   25,000
    Accounts Payable              Cr   25,000
```

Expense exists even without cash payment.

---

## Scenario 17 — Security deposit paid to landlord

```text
Security Deposit          Dr  100,000
    Bank                          Cr  100,000
```

This is generally an asset, not rent expense, if refundable and recoverable.

---

## Scenario 18 — Employee travel advance

Advance given:

```text
Employee Advance          Dr   30,000
    Bank                           Cr   30,000
```

Employee later submits valid expenses of ₹24,000 and returns ₹6,000:

```text
Travel Expense            Dr   24,000
Bank                      Dr    6,000
    Employee Advance              Cr   30,000
```

---

## Scenario 19 — Expense reimbursement owed to employee

Employee spends ₹12,000 personally for approved business expense.

```text
Business Expense          Dr   12,000
    Employee Payable              Cr   12,000
```

When reimbursed:

```text
Employee Payable          Dr   12,000
    Bank                           Cr   12,000
```

---

## Scenario 20 — Bank fee discovered in statement

```text
Bank Charges Expense      Dr    2,500
    Bank                           Cr    2,500
```

---

## Scenario 21 — Refund received from vendor

Assume the vendor refund relates to a previously recognized vendor receivable/advance of ₹20,000:

```text
Bank                      Dr   20,000
    Vendor Receivable / Advance  Cr   20,000
```

Do not automatically treat every refund as income; identify what balance it settles.

---

## Scenario 22 — Customer overpays

Invoice balance = ₹50,000. Customer pays ₹60,000.

One approach:

```text
Bank                      Dr   60,000
    Accounts Receivable           Cr   50,000
    Customer Advance              Cr   10,000
```

---

## Scenario 23 — Expense incorrectly posted twice

If duplicate ₹15,000 expense entry must be reversed:

```text
Accounts Payable / Bank   Dr   15,000
    Expense                       Cr   15,000
```

Exact reversal depends on the original entry and whether payment occurred.

---

## Scenario 24 — Capital expenditure vs operating expenditure

### Repair keeps machine in normal condition

Usually expense:

```text
Repairs Expense           Dr   40,000
    Accounts Payable              Cr   40,000
```

### Major upgrade creates additional future economic benefit

May qualify for capitalization under the applicable policy:

```text
Machinery                 Dr  200,000
    Accounts Payable              Cr  200,000
```

The distinction requires accounting-policy judgment.

---

# 36. Interview and Practical Questions

## Q1. What is the difference between P&L and Balance Sheet?

**Answer:** P&L shows income and expenses over a period and determines profit or loss. Balance Sheet shows assets, liabilities, and equity at a specific date.

## Q2. What is the difference between profit and cash?

Profit uses accounting recognition rules and includes non-cash items and credit transactions. Cash is actual cash movement.

## Q3. Why does a customer receipt not always increase revenue?

If revenue was recognized when the invoice was raised or service delivered, later collection only converts receivable into cash.

## Q4. Why does loan receipt not increase profit?

Because the company has an obligation to repay it. Cash and liabilities increase equally.

## Q5. What happens when depreciation is recorded?

Expense increases, profit decreases, accumulated depreciation increases, and net asset value decreases. There is no current cash outflow from recording depreciation itself.

## Q6. Why can Trial Balance balance even when accounts are wrong?

Because some errors affect debit and credit equally, such as using the wrong account or omitting an entire transaction.

## Q7. What is an accrued expense?

An expense already incurred but not yet paid or invoiced.

## Q8. What is a prepaid expense?

Cash paid before the related expense is consumed.

## Q9. What is unearned revenue?

Cash collected before revenue is earned. It is generally a liability until the performance obligation is satisfied under applicable recognition rules.

## Q10. Difference between accounts payable and accrued expense?

Accounts payable often relates to a known vendor invoice. Accrued expense is frequently an estimate for an incurred cost where the invoice is missing or not yet processed.

## Q11. What is working capital?

```text
Working Capital = Current Assets - Current Liabilities
```

## Q12. Why is inventory not immediately an expense?

Inventory is an asset until sold or otherwise consumed. Its cost becomes COGS when the related revenue is recognized, subject to applicable accounting rules.

## Q13. What is a contra voucher?

A transaction moving money between cash/bank accounts, such as bank-to-cash or bank-to-bank transfer.

## Q14. What is a journal voucher?

A voucher used primarily for accounting adjustments and non-cash entries such as accruals, depreciation, reallocations, and corrections.

## Q15. What is three-way matching?

Matching purchase order, goods/service receipt, and vendor invoice before payment or posting according to company policy.

## Q16. Difference between debit note and credit note?

They change an amount owed between buyer and seller. Interpretation depends on which party issues the document and the commercial reason, so system design should clearly identify the perspective.

## Q17. How does net profit reach the Balance Sheet?

Net profit increases retained earnings/current-year earnings within equity, subject to closing and appropriation processes.

## Q18. What is the purpose of a Cash Flow Statement?

To explain cash movements from operating, investing, and financing activities and reconcile opening and closing cash.

---

# 37. Exercises with Answers

## Exercise 1

A company purchases office furniture for ₹80,000 cash. What is the entry?

### Answer

```text
Furniture                 Dr   80,000
    Bank                           Cr   80,000
```

---

## Exercise 2

A company receives ₹200,000 from a customer before providing service.

### Answer

```text
Bank                      Dr  200,000
    Customer Advance              Cr  200,000
```

Assuming revenue has not yet been earned.

---

## Exercise 3

Monthly salary of ₹150,000 is accrued but unpaid.

### Answer

```text
Salary Expense            Dr  150,000
    Salary Payable                Cr  150,000
```

---

## Exercise 4

A ₹300,000 loan is received in bank.

### Answer

```text
Bank                      Dr  300,000
    Loan Payable                  Cr  300,000
```

---

## Exercise 5

A customer invoice of ₹120,000 is paid in full. Revenue was recognized previously.

### Answer

```text
Bank                      Dr  120,000
    Accounts Receivable           Cr  120,000
```

---

## Exercise 6

The company bought a machine for ₹500,000. Monthly depreciation is ₹10,000.

### Answer

```text
Depreciation Expense      Dr   10,000
    Accumulated Depreciation      Cr   10,000
```

---

## Exercise 7

A vendor invoice for consulting ₹75,000 is received but unpaid.

### Answer

```text
Consulting Expense        Dr   75,000
    Accounts Payable              Cr   75,000
```

---

## Exercise 8

The company pays the above vendor.

### Answer

```text
Accounts Payable          Dr   75,000
    Bank                           Cr   75,000
```

---

## Exercise 9

Opening retained earnings = ₹500,000. Net profit = ₹200,000. Dividends = ₹50,000.

### Answer

```text
Closing Retained Earnings
= 500,000 + 200,000 - 50,000
= 650,000
```

---

## Exercise 10

Current assets = ₹900,000. Current liabilities = ₹600,000.

### Answer

```text
Working Capital = 900,000 - 600,000 = 300,000
Current Ratio = 900,000 / 600,000 = 1.5
```

---

## Exercise 11 — Identify the statement

Where would each item primarily appear?

1. Revenue
2. Bank
3. Accounts payable
4. Depreciation expense
5. Share capital
6. Purchase of machinery cash flow

### Answer

1. P&L
2. Balance Sheet
3. Balance Sheet
4. P&L
5. Balance Sheet equity
6. Cash Flow Statement — investing activity in a standard classification

---

## Exercise 12 — Profit vs cash

A company earns ₹100,000 of credit revenue and records ₹20,000 depreciation. No cash is received or paid.

Ignoring other items:

### Answer

```text
Profit = 100,000 - 20,000 = 80,000
Cash movement = 0
```

The Balance Sheet would show receivable +₹100,000 and accumulated depreciation +₹20,000 relative to the related asset base.

---

# 38. Quick Revision Cheat Sheets

## 38.1 Debit/credit cheat sheet

```text
ASSETS
Increase → Debit
Decrease → Credit

EXPENSES
Increase → Debit
Decrease → Credit

LIABILITIES
Increase → Credit
Decrease → Debit

EQUITY
Increase → Credit
Decrease → Debit

REVENUE
Increase → Credit
Decrease → Debit
```

## 38.2 Statement cheat sheet

```text
P&L
Revenue - Expenses = Profit
Covers a period

BALANCE SHEET
Assets = Liabilities + Equity
Snapshot at a date

CASH FLOW
Operating + Investing + Financing
Explains change in cash
```

## 38.3 Transaction cheat sheet

```text
Credit Sale:
AR Dr
    Revenue Cr

Customer Receipt:
Bank Dr
    AR Cr

Vendor Invoice:
Expense/Asset Dr
    AP Cr

Vendor Payment:
AP Dr
    Bank Cr

Loan Received:
Bank Dr
    Loan Cr

Loan Principal Repaid:
Loan Dr
    Bank Cr

Capital Introduced:
Bank Dr
    Capital Cr

Depreciation:
Depreciation Expense Dr
    Accumulated Depreciation Cr

Accrued Expense:
Expense Dr
    Accrued Liability Cr

Prepaid Expense Payment:
Prepaid Asset Dr
    Bank Cr

Prepaid Expense Consumption:
Expense Dr
    Prepaid Asset Cr

Customer Advance:
Bank Dr
    Deferred Revenue / Customer Advance Cr
```

## 38.4 P&L vs Balance Sheet classification

| Item | P&L | Balance Sheet |
|---|---|---|
| Sales revenue | Yes | No |
| Salary expense | Yes | No |
| Rent expense | Yes | No |
| Interest expense | Yes | No |
| Cash | No | Asset |
| Receivable | No | Asset |
| Inventory | No | Asset |
| Fixed assets | No | Asset |
| Payables | No | Liability |
| Loan | No | Liability |
| Capital | No | Equity |
| Retained earnings | No | Equity |

## 38.5 Cash Flow classification cheat sheet

```text
OPERATING
Customers, suppliers, salaries, rent, normal operating expenses

INVESTING
Purchase/sale of long-term assets and investments

FINANCING
Capital, borrowing, debt principal repayment, dividends
```

Always follow the reporting framework and company policy for items whose classification can vary.

## 38.6 Five questions before posting any entry

```text
1. What business event happened?
2. Which accounts changed?
3. Which accounts increased or decreased?
4. Which side—Debit or Credit—does that require?
5. Do total Debits equal total Credits?
```

## 38.7 Five questions before closing a period

```text
1. Is every material transaction recorded?
2. Is it recorded in the correct period?
3. Are Balance Sheet accounts reconciled?
4. Are estimates/adjustments reasonable and supported?
5. Do the financial statements tell a coherent story?
```

---

# 39. Glossary

**Account** — A record used to accumulate transactions of the same financial nature.

**Accounts Payable (AP)** — Amounts owed to suppliers/vendors.

**Accounts Receivable (AR)** — Amounts customers owe the company.

**Accrual** — Recognition of income/expense before the related cash receipt/payment.

**Accrued Expense** — Expense incurred but not yet paid or fully invoiced.

**Amortization** — Systematic allocation of certain asset costs over useful periods; often used for intangible assets, depending on accounting framework.

**Asset** — Resource controlled by the company with expected economic benefit.

**Audit Trail** — Traceable history from a reported amount back through transactions and supporting documents.

**Balance Sheet** — Statement of assets, liabilities, and equity at a specific date.

**Bank Reconciliation** — Process of matching accounting bank balances with bank statements.

**Capital** — Funds invested by owners/shareholders.

**Cash Flow Statement** — Statement explaining changes in cash through operating, investing, and financing activities.

**Chart of Accounts** — Structured list of accounts used by an entity.

**Closing Entry** — Entry used in period-end closing to transfer/close temporary account balances according to the accounting system.

**COGS** — Cost of Goods Sold.

**Credit** — Right-hand side of a journal entry; increases liabilities, equity, and revenue, and decreases assets/expenses.

**Credit Note** — Document reducing or adjusting an amount previously invoiced, depending on perspective and business context.

**Current Asset** — Asset expected to be realized/used within the normal operating cycle or near term under applicable classification rules.

**Current Liability** — Obligation expected to be settled within the normal operating cycle or near term under applicable rules.

**Debit** — Left-hand side of a journal entry; increases assets and expenses, and decreases liabilities/equity/revenue.

**Debit Note** — Commercial document used to adjust an amount between buyer and seller; accounting treatment depends on issuing party and reason.

**Deferred Revenue** — Cash received before revenue is earned; typically presented as a liability until recognition conditions are met.

**Depreciation** — Systematic allocation of depreciable asset cost over its useful life.

**Double-Entry Bookkeeping** — System in which every transaction has equal total debits and credits.

**EBIT** — Earnings before interest and taxes.

**EBITDA** — Earnings before interest, taxes, depreciation, and amortization.

**Equity** — Owners' residual interest in the assets after deducting liabilities.

**Expense** — Cost consumed in generating revenue or operating the business.

**General Ledger (GL)** — Master accounting record containing balances of all accounts.

**Gross Profit** — Revenue minus cost of goods sold.

**Journal** — Chronological record of accounting entries.

**Journal Entry (JE)** — Debit/credit record of a transaction or adjustment.

**Liability** — Present obligation expected to result in an outflow of resources.

**Net Book Value** — Asset cost less accumulated depreciation/amortization and relevant adjustments.

**Net Profit** — Income remaining after recognized expenses.

**Prepaid Expense** — Payment made before the related expense is recognized.

**Provision** — Liability recognized for an obligation involving estimation/uncertainty when recognition requirements are met.

**Retained Earnings** — Accumulated profits retained in the business after distributions and other applicable movements.

**Revenue** — Income generated from ordinary activities under applicable recognition rules.

**Subledger** — Detailed ledger supporting a general-ledger control account, such as customer-level AR or vendor-level AP.

**Trial Balance** — List of ledger balances used to verify that total debit balances equal total credit balances.

**Voucher** — Document/system record authorizing and recording a transaction.

**Working Capital** — Current assets minus current liabilities.

---

# 40. Recommended Learning Path

## Level 1 — Foundation

Master:

- accounting equation;
- five account types;
- debit/credit rules;
- simple journal entries;
- difference between profit and cash.

Practice until you can immediately solve:

```text
Cash sale
Credit sale
Customer receipt
Vendor invoice
Vendor payment
Expense payment
Loan receipt
Capital contribution
```

## Level 2 — Bookkeeping flow

Learn:

- vouchers;
- ledgers;
- subledgers;
- trial balance;
- source documents;
- bank reconciliation.

## Level 3 — Financial statements

Master:

- P&L structure;
- Balance Sheet structure;
- Cash Flow Statement;
- how all three statements connect.

## Level 4 — Adjustments

Practice:

- accruals;
- prepayments;
- deferred revenue;
- depreciation;
- bad debts;
- provisions;
- inventory adjustments;
- reclassifications;
- foreign-exchange differences.

## Level 5 — Business processes

Understand:

- order-to-cash;
- procure-to-pay;
- record-to-report;
- fixed assets;
- payroll;
- tax ledgers;
- approvals and audit trail.

## Level 6 — Analysis

Learn to answer:

- Why did profit improve?
- Why did cash fall despite profit?
- Why are receivables increasing?
- Why is inventory growing?
- Is the company too dependent on debt?
- Are current liabilities becoming difficult to fund?
- Which expenses increased unexpectedly?
- Are margins improving or shrinking?

## Level 7 — Advanced practice

Build a mock company for three months and manually prepare:

1. source transactions;
2. journal vouchers;
3. ledger balances;
4. unadjusted trial balance;
5. adjusting entries;
6. adjusted trial balance;
7. P&L;
8. Balance Sheet;
9. Cash Flow Statement;
10. ratio analysis;
11. reconciliation schedules.

If you can do this confidently, you understand the full accounting lifecycle rather than only memorizing journal entries.

---

# Final Mental Model

The simplest way to remember the entire subject is:

```text
TRANSACTION
    ↓
What changed?
    ↓
Asset / Liability / Equity / Revenue / Expense
    ↓
Debit or Credit?
    ↓
Journal / Voucher
    ↓
Ledger
    ↓
Trial Balance
    ↓
Adjustments
    ↓
Financial Statements
    ├── P&L → performance
    ├── Balance Sheet → position
    └── Cash Flow → cash movement
```

And the single most important equation remains:

```text
ASSETS = LIABILITIES + EQUITY
```

Every correct double-entry transaction ultimately respects this equation.

---

## One-Page Practical Example

Suppose a company:

1. receives ₹500,000 from owner;
2. buys equipment ₹100,000;
3. makes credit sale ₹80,000;
4. receives ₹50,000 from customer;
5. incurs salary ₹20,000 unpaid;
6. records depreciation ₹5,000.

Journal entries:

```text
1) Bank Dr 500,000
      Capital Cr 500,000

2) Equipment Dr 100,000
      Bank Cr 100,000

3) Accounts Receivable Dr 80,000
      Revenue Cr 80,000

4) Bank Dr 50,000
      Accounts Receivable Cr 50,000

5) Salary Expense Dr 20,000
      Salary Payable Cr 20,000

6) Depreciation Expense Dr 5,000
      Accumulated Depreciation Cr 5,000
```

P&L:

```text
Revenue                80,000
Salary Expense        (20,000)
Depreciation Expense   (5,000)
                      -------
Net Profit             55,000
```

Balance Sheet:

```text
Assets
Bank                  450,000
Receivable             30,000
Equipment             100,000
Accumulated Dep.       (5,000)
                      -------
Total Assets          575,000

Liabilities
Salary Payable         20,000

Equity
Capital               500,000
Profit                 55,000
                      -------
Total L + E           575,000
```

Cash movement:

```text
Capital received      +500,000
Equipment purchased   -100,000
Customer receipt       +50,000
                      --------
Net Cash Increase     +450,000
```

This one example demonstrates why:

- revenue is not the same as customer cash receipt;
- equipment purchase is not normally an immediate full expense;
- unpaid salaries still reduce profit;
- depreciation reduces profit without reducing current cash;
- owner capital increases cash but not profit;
- all three statements tell different parts of the same financial story.

---

**End of Master Handbook**
