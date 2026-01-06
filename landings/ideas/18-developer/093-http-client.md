# HTTP Client

**ID:** 093
**Category:** Developer
**Tier:** Premium ($12)
**APIs:** URLSession, Local Storage
**Offline:** Partial

---

## One-Liner

A mobile API client like Postman—test REST APIs, save requests, view formatted responses, all from your phone.

## Problem

Testing APIs on mobile is awkward. You can't run Postman on your phone. cURL in a terminal app is clunky. Developers need a proper mobile HTTP client.

## Solution

Full-featured HTTP client for mobile: compose requests with headers and body, save collections, view formatted responses with syntax highlighting.

## Target User

- Mobile developers debugging APIs
- Backend developers on the go
- QA engineers testing endpoints

## Key Features

- All HTTP methods (GET, POST, PUT, DELETE, etc.)
- Custom headers and body
- Request collections/folders
- Response formatting (JSON, XML, HTML)
- Auth support (Bearer, Basic, API key)
- Request history

## Monetization

**Model:** One-time purchase
**Price:** $11.99
**Strategy:** API testing communities, mobile dev forums

## Visualization Concept

```
┌─────────────────────────────────────┐
│  🌐 HTTP Client         [Send]      │
├─────────────────────────────────────┤
│  POST ▾  https://api.example.com/   │
│                                     │
│  Headers  Body  Auth                │
│  ──────────────────────────         │
│  Content-Type: application/json     │
│  Authorization: Bearer ***          │
│                                     │
│  Response (200 OK) 234ms            │
│  ┌─────────────────────────────┐    │
│  │ {                           │    │
│  │   "success": true,          │    │
│  │   "data": { ... }           │    │
│  │ }                           │    │
│  └─────────────────────────────┘    │
│  [Save] [History] [Collections]     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- URLSession: HTTP requests
- JSONSerialization: Response parsing
- Core Data: Request storage

**Offline Strategy:**
Request building works offline. Sending requires network.

**Data Handling:**
Requests stored locally. Option to encrypt sensitive data.

## Competition & Differentiation

**Existing Solutions:** HTTPBot, Paw (Mac), web-based tools
**Our Edge:** Better UX, collections, modern design

## Development Estimate

**Complexity:** Medium
**Timeline:** 5 weeks
**Key Challenges:** Good request builder UX, auth handling

