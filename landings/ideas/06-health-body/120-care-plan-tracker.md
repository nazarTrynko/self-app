# Care Plan Tracker (Family Ops)

**ID:** 120
**Category:** Health & Body
**Tier:** Premium ($10-50)
**APIs:** Local DB, Notifications, Files, PDF
**Offline:** Full

---

## One-Liner

Offline care routines with incident notes and appointment-ready summaries.

## Problem

Caregivers can’t remember what happened when; appointments become vague, and care quality suffers.

## Solution

Track routines, symptoms, and incidents, then auto-generate a clean appointment summary packet.

## Target User

Family caregivers, parents managing therapies, elder care.

## Key Features

- Routine checklists (meds, exercises, therapies)
- Symptom + incident logging with severity
- Timeline + correlation hints (simple rules)
- Appointment packet generator (PDF)
- Reminders + missed-task escalation

## Monetization

**Model:** One-time
**Price:** $19.99
**Strategy:** Caregiver community outreach + App Store “caregiver log”.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Daily Routine] → [Incidents] → [│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Notifications: routine reminders
- Local database: logs and routines

**Offline Strategy:**
All care logs local; exports offline.

**Data Handling:**
Optional encryption + biometric lock.

## Competition & Differentiation

**Existing Solutions:** Generic journaling apps and cloud health platforms.
**Our Edge:** Care workflow + appointment-ready summaries + offline privacy.

## Development Estimate

**Complexity:** Medium
**Timeline:** 2-3 weeks
**Key Challenges:** Summary generation UX, reminder tuning, data model
