# JSON Viewer

**ID:** 092
**Category:** Developer
**Tier:** Premium ($8)
**APIs:** Local Processing, Share Extension
**Offline:** Full

---

## One-Liner

Beautiful JSON viewer with syntax highlighting, collapsible nodes, and search—open JSON files from anywhere on your phone.

## Problem

Viewing JSON on mobile is painful. Built-in text editors don't format it. Safari just shows raw text. Developers need a proper JSON viewer on mobile.

## Solution

A dedicated JSON viewer with syntax highlighting, collapsible tree view, search, and the ability to open JSON from any app via share sheet.

## Target User

- Mobile developers debugging API responses
- QA engineers reviewing payloads
- Anyone working with JSON data

## Key Features

- Syntax highlighting
- Collapsible tree view
- Search within JSON
- Copy path to value
- Share extension (open from any app)
- Format/minify toggle

## Monetization

**Model:** One-time purchase
**Price:** $7.99
**Strategy:** Dev tools roundups, API testing communities

## Visualization Concept

```
┌─────────────────────────────────────┐
│  { } JSON Viewer      [Search]      │
├─────────────────────────────────────┤
│  ▼ response                         │
│    ▼ user                           │
│        "id": 12345                  │
│        "name": "John Doe"           │
│        "email": "john@..."          │
│      ▶ preferences (5)              │
│      ▶ settings (12)                │
│    "status": "active"               │
│    "created": "2024-01-15"          │
│                                     │
│  [Copy Path] [Format] [Share]       │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- JSONSerialization: Parsing
- Share Extension: Open from other apps
- UIKit: Custom tree view

**Offline Strategy:**
Full offline. Pure local processing.

**Data Handling:**
Files processed locally, not stored permanently.

## Competition & Differentiation

**Existing Solutions:** Basic JSON apps, web viewers
**Our Edge:** Share extension, collapsible view, copy path feature

## Development Estimate

**Complexity:** Low-Medium
**Timeline:** 3 weeks
**Key Challenges:** Large JSON performance, tree view UX

