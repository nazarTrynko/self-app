# Triage Timer (Protocol Decision Support)

**ID:** 143
**Category:** Professional
**Tier:** Pro ($50+)
**APIs:** Timers, Local DB, Haptics, PDF
**Offline:** Full

---

## One-Liner

Protocol-driven timers and checklists for urgent scenarios—built for stress, offline.

## Problem

Under urgency, people skip steps and lose time; protocol knowledge isn’t operationalized on the device.

## Solution

Choose a protocol, run timed steps with haptic cues, log actions, and export a report for training review.

## Target User

First responders, trainers, industrial safety leads.

## Key Features

- Protocol library + authoring tool
- Timed step runner with haptic cues
- Action logging + timestamps
- Drill mode + score summary
- Export: after-action report (PDF)

## Monetization

**Model:** Subscription
**Price:** $9.99/mo
**Strategy:** Sell protocol packs (EMS, industrial, event safety).

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Protocol] → [Timed Steps] → [Aft│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Timers: step timing
- Haptics: stress-proof cues

**Offline Strategy:**
All protocols and logs stored locally.

**Data Handling:**
No PII required; logs export only by user action.

## Competition & Differentiation

**Existing Solutions:** Paper protocols and enterprise training systems.
**Our Edge:** Stress UX + protocol runner + drill scoring.

## Development Estimate

**Complexity:** High
**Timeline:** 4 weeks
**Key Challenges:** Protocol authoring UX, step runner polish, export
