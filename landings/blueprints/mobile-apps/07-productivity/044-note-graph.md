# Note Graph

**ID:** 044
**Category:** Productivity
**Tier:** Premium ($15)
**APIs:** File System, Canvas API
**Offline:** Full

---

## One-Liner

Zettelkasten-style note-taking with bi-directional links, graph visualization, and powerful local search.

## Problem

Roam Research and Obsidian require subscriptions or are desktop-focused. Mobile knowledge management with proper linking and graph views doesn't exist offline. Second-brain apps are cloud-dependent.

## Solution

A mobile-first networked note-taking app with bi-directional links, graph visualization of connections, and powerful search—Zettelkasten methodology in your pocket, completely offline.

## Target User

- Researchers building knowledge bases
- Writers connecting ideas
- Students creating study networks
- Lifelong learners
- PKM (Personal Knowledge Management) enthusiasts

## Key Features

- Bi-directional linking [[like this]]
- Interactive graph visualization
- Daily notes for capture
- Full-text search with filters
- Tags and backlinks panel
- Markdown formatting
- Block references
- Export to standard formats (MD, JSON)

## Monetization

**Model:** One-time purchase
**Price:** $14.99
**Strategy:** PKM communities, Zettelkasten forums, academic research networks, note-taking comparison sites

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Note Graph            🔍  📊  ⚙️  │
├─────────────────────────────────────┤
│  # Machine Learning Basics          │
│                                     │
│  ML is a subset of [[AI]] that      │
│  focuses on learning from data.     │
│                                     │
│  Key concepts:                      │
│  - [[Supervised Learning]]          │
│  - [[Unsupervised Learning]]        │
│  - [[Neural Networks]]              │
│                                     │
│  Related to [[Statistics]] and      │
│  [[Linear Algebra]].                │
├─────────────────────────────────────┤
│  BACKLINKS (4)                      │
│  ├─ Deep Learning Overview          │
│  ├─ Career Notes                    │
│  └─ [Show more...]                  │
├─────────────────────────────────────┤
│  [🕸️ Graph] [📝 Edit] [🔗 Links]   │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- File System: Markdown file storage
- Canvas API: Graph visualization rendering
- IndexedDB: Search index

**Offline Strategy:**
All notes stored as local markdown files. Search index built locally. Graph computed on-device.

**Data Handling:**
Files stored in accessible format. Full data ownership. No proprietary formats.

## Competition & Differentiation

**Existing Solutions:** Roam Research (subscription, web), Obsidian (desktop-focused), Notion (cloud)
**Our Edge:** Mobile-first, true offline, one-time purchase, graph visualization, open file format

## Development Estimate

**Complexity:** High
**Timeline:** 10-12 weeks
**Key Challenges:** Graph visualization performance, bi-directional link parsing, search index efficiency

