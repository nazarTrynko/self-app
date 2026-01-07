# Privacy Threat Modeler (Personal)

**ID:** 141
**Category:** Security
**Tier:** Premium ($10-50)
**APIs:** Local DB, Files
**Offline:** Full

---

## One-Liner

A guided privacy/security checklist that outputs a tailored plan and tracks completion.

## Problem

People feel unsafe but don’t know what to do next; security advice is overwhelming and generic.

## Solution

Pick a threat profile, get prioritized actions, track completion, and export a personal security plan.

## Target User

Privacy-conscious users, activists, journalists, everyday people after a scare.

## Key Features

- Threat profile wizard (risk-based)
- Prioritized action plan + rationale
- Progress tracking + reminders
- Secure notes vault for recovery codes
- Export printable “security plan”

## Monetization

**Model:** One-time
**Price:** $14.99
**Strategy:** Privacy community outreach + App Store “security checklist”.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Profile] → [Plan] → [Progress + │
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Local database: plan and progress
- Files: export plan

**Offline Strategy:**
All content and progress local.

**Data Handling:**
No analytics; optional encryption at rest.

## Competition & Differentiation

**Existing Solutions:** Blog posts and generic checklist apps.
**Our Edge:** Risk-based prioritization UX + offline privacy + printable plan.

## Development Estimate

**Complexity:** Medium
**Timeline:** 2 weeks
**Key Challenges:** Content quality, wizard UX, avoiding false authority
