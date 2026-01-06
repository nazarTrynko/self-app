# Bill Tracker

**ID:** 077
**Category:** Finance
**Tier:** Micro ($4)
**APIs:** Notifications, File System
**Offline:** Full

---

## One-Liner

Never miss a bill payment—track due dates, amounts, and payment status with timely reminders.

## Problem

Bills come from different providers with different due dates. Missing payments damages credit and incurs fees. Calendar reminders are generic. Bill tracking in banking apps requires account access.

## Solution

A dedicated bill tracking app that organizes all recurring bills, sends smart reminders before due dates, and helps you see your monthly obligations at a glance.

## Target User

- Anyone juggling multiple bills
- People who've missed payments before
- Those avoiding autopay for control
- Roommates splitting bills
- Financial awareness builders

## Key Features

- Bill entry with due dates
- Recurring bill scheduling
- Advance payment reminders
- Payment confirmation logging
- Monthly bill calendar view
- Total obligations overview
- Late payment warnings
- Bill history tracking

## Monetization

**Model:** One-time purchase
**Price:** $3.99
**Strategy:** Personal finance forums, credit improvement communities, adulting advice groups

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Bill Tracker          📅  🔔  ⚙️  │
├─────────────────────────────────────┤
│  JANUARY                            │
│  Monthly total: $1,847              │
│  Paid: $1,247 │ Remaining: $600    │
├─────────────────────────────────────┤
│  UPCOMING                           │
│  🔴 Tomorrow                        │
│  ├─ Electric Bill         $124     │
│  🟡 In 5 days                       │
│  ├─ Internet              $79      │
│  ├─ Phone                 $85      │
│  🟢 In 2 weeks                      │
│  └─ Insurance             $312     │
├─────────────────────────────────────┤
│  PAID THIS MONTH                    │
│  ✅ Rent           $1,200  Jan 1   │
│  ✅ Streaming      $15     Jan 3   │
│  ✅ Gym            $32     Jan 5   │
├─────────────────────────────────────┤
│  [+ Add Bill] [📅 Calendar View]   │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Notifications: Payment reminders
- File System: Bill database

**Offline Strategy:**
All bills and reminders stored locally. Works without internet.

**Data Handling:**
Bill information stored locally only. No sharing or sync.

## Competition & Differentiation

**Existing Solutions:** Banking apps (limited, need account), Mint (complex), generic reminders
**Our Edge:** Purpose-built for bills, advance reminders, simple tracking, one-time purchase

## Development Estimate

**Complexity:** Low
**Timeline:** 2-3 weeks
**Key Challenges:** Flexible recurring schedules, useful reminder timing, clear payment status

