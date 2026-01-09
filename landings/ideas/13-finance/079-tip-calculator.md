# Split Check

**ID:** 079
**Category:** Finance
**Tier:** Micro ($2)
**APIs:** File System
**Offline:** Full

---

## One-Liner

Split bills and calculate tips fairly—by item, equally, or custom—with quick settling suggestions.

## Problem

Splitting bills at restaurants is awkward. Built-in calculators are basic. When people order differently, equal splits are unfair. No simple app handles complex splits gracefully.

## Solution

A comprehensive bill splitter that handles itemized splits, tip calculation, tax distribution, and provides venmo/payment app amounts for easy settling.

## Target User

- Groups dining out
- Roommates sharing expenses
- Friends on group trips
- Anyone splitting shared costs
- Fair split advocates

## Key Features

- Equal split calculation
- Itemized per-person assignment
- Tip percentage presets (custom)
- Tax distribution options
- Round up/down to nice numbers
- Quick split history
- Copy amounts for payment apps
- Multiple currency support

## Monetization

**Model:** One-time purchase
**Price:** $1.99
**Strategy:** Restaurant deal communities, group dining forums, travel groups

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Split Check           🧮  💰  ⚙️  │
├─────────────────────────────────────┤
│  BILL TOTAL: $127.50                │
│  Tip: 20% │ Tax: Included           │
├─────────────────────────────────────┤
│  SPLIT TYPE: [Itemized      ▼]      │
├─────────────────────────────────────┤
│  PEOPLE                             │
│  ├─ You          $42.50             │
│  │   Steak, 2 drinks                │
│  ├─ Sarah        $35.20             │
│  │   Pasta, wine                    │
│  ├─ Mike         $28.30             │
│  │   Burger, beer                   │
│  └─ Lisa         $21.50             │
│      Salad, water                   │
├─────────────────────────────────────┤
│  Subtotal: $106.25                  │
│  Tip (20%): $21.25                  │
│  ─────────────────────────────      │
│  TOTAL: $127.50 ✓                  │
├─────────────────────────────────────┤
│  [📋 Copy Amounts] [Save Split]    │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- File System: Split history
- Clipboard: Copy amounts

**Offline Strategy:**
Pure local calculation. History stored locally.

**Data Handling:**
No personal data stored beyond optional split history.

## Competition & Differentiation

**Existing Solutions:** Calculator apps (basic), Splitwise (account required), tip calculators (ads)
**Our Edge:** Itemized splits, no account, no ads, simple and complete

## Development Estimate

**Complexity:** Low
**Timeline:** 2 weeks
**Key Challenges:** Itemized split UX, fair tip distribution, rounding logic







