# Regex Tester

**ID:** 091
**Category:** Developer
**Tier:** Premium ($8)
**APIs:** Local Processing
**Offline:** Full

---

## One-Liner

Test and debug regular expressions with real-time matching, group highlighting, and a cheat sheet—all offline on your phone.

## Problem

Developers need to test regex on mobile when away from their computer. Web-based testers don't work offline and aren't optimized for mobile.

## Solution

A clean, mobile-first regex tester with real-time matching, named groups visualization, and a built-in cheat sheet for syntax reference.

## Target User

- Developers on the go
- Students learning regex
- QA engineers testing patterns

## Key Features

- Real-time pattern matching
- Group highlighting with names
- Match explanation in plain English
- Built-in regex cheat sheet
- Pattern library (save favorites)
- Test against multiple strings

## Monetization

**Model:** One-time purchase
**Price:** $7.99
**Strategy:** Dev communities, programming subreddits, coding bootcamps

## Visualization Concept

```
┌─────────────────────────────────────┐
│  ⚡ Regex Tester                    │
├─────────────────────────────────────┤
│  Pattern:                           │
│  ┌─────────────────────────────┐    │
│  │ (\d{3})-(\d{3})-(\d{4})     │    │
│  └─────────────────────────────┘    │
│                                     │
│  Test String:                       │
│  ┌─────────────────────────────┐    │
│  │ Call me at [415]-[555]-[1234]│   │
│  └─────────────────────────────┘    │
│                                     │
│  ✓ 1 match found                    │
│  Group 1: 415  Group 2: 555  G3: 1234│
│                                     │
│  [Cheat Sheet] [Save] [Share]       │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- NSRegularExpression: Pattern matching
- Local Storage: Pattern library

**Offline Strategy:**
Full offline. Pure computation, no network.

**Data Handling:**
Patterns saved locally only.

## Competition & Differentiation

**Existing Solutions:** regex101 (web), basic regex apps
**Our Edge:** Offline, mobile-optimized, great cheat sheet

## Development Estimate

**Complexity:** Low
**Timeline:** 2 weeks
**Key Challenges:** Good mobile UX for text editing

