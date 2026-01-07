# Proven

**ID:** 100
**Category:** Platforms
**Tier:** Marketplace (Revenue Share)
**Model:** Commission-based (10-15% platform fee)
**Status:** Concept

---

## One-Liner

An AI developer marketplace where clients see working demos before they pay—proof-first hiring for AI solutions.

## The Problem

Hiring AI developers is a leap of faith:

1. **Clients** post requirements, receive proposals, but have no way to verify capabilities until after payment
2. **Developers** write lengthy proposals that may never win, wasting time on pitches instead of building
3. **Trust gap** — clients can't distinguish between real expertise and polished marketing
4. **Risk concentration** — all risk sits with the client who pays upfront hoping the solution works

Current platforms (Upwork, Toptal, Fiverr) rely on:

- Reviews (can be gamed)
- Portfolios (may be outdated or exaggerated)
- Interviews (don't prove implementation ability)
- Escrow (protects payment, not outcome quality)

## The Solution

**Proven** inverts the model:

```
Traditional:  Request → Proposal → Hire → Pay → Build → Hope it works
Proven:       Request → Build Demo → See it Working → Choose → Pay
```

### How It Works

**For Clients:**

1. Post what you need (AI chatbot, data pipeline, ML model, etc.)
2. Receive 3-5 working demos from competing developers
3. Test each demo live via embedded iFrame
4. Choose the best one and pay only for what you've seen working
5. Developer delivers full solution with source code

**For Developers:**

1. Browse open requests matching your skills
2. Build a POC/demo (not a proposal—actual working code)
3. Submit demo with iFrame embed
4. If selected, get paid and deliver full solution
5. Build reputation through proven work, not promises

### The iFrame Demo System

Each submission includes:

- Live embedded demo (iFrame, WebContainer, or API endpoint)
- Video walkthrough
- Technical documentation
- Estimated completion time for full build
- Price quote

Clients can:

- Interact with demos directly in browser
- Compare side-by-side
- Request modifications before committing
- See exactly what they're buying

## Target Users

### Clients (Demand Side)

- **Startups** needing AI features without full-time hires
- **Enterprises** exploring AI solutions before major investment
- **Agencies** outsourcing specialized AI work
- **Non-technical founders** who can't evaluate proposals

### Developers (Supply Side)

- **Freelance AI engineers** tired of proposal writing
- **ML specialists** wanting to showcase skills through work
- **Full-stack developers** adding AI capabilities
- **AI consultants** seeking recurring project flow

## Key Features

### Core Platform

- **Live Demo Embeds** — iFrame/WebContainer integration for interactive POCs
- **Side-by-Side Compare** — View multiple demos simultaneously
- **Request Templates** — Structured briefs for common AI project types
- **Milestone Payments** — Pay for demo, then full solution
- **Source Code Escrow** — Secure delivery with verification

### For Developers

- **POC Builder Kit** — Templates, hosting, embed tools
- **Reputation Score** — Based on win rate, client satisfaction, completion
- **Skill Verification** — Optional certifications and assessments
- **Revenue Dashboard** — Track earnings, conversion, performance

### For Clients

- **AI Request Wizard** — Guided project scoping
- **Budget Estimator** — ML-based pricing suggestions
- **Developer Matching** — Algorithm-suggested developers
- **Quality Guarantee** — Refund if delivered solution differs from demo

### Platform Tools

- **Cursor Extension** — Submit demos directly from IDE
- **GitHub Integration** — Auto-deploy demos from repos
- **API Marketplace** — Reusable components and models
- **Analytics** — Track demo performance, client engagement

## Monetization

### Revenue Model

| Stream            | Rate         | When                                 |
| ----------------- | ------------ | ------------------------------------ |
| Platform Fee      | 10-15%       | On successful project completion     |
| Featured Listings | $50-200/week | Developers boost visibility          |
| Enterprise Plans  | $500-2000/mo | Priority matching, dedicated support |
| POC Hosting       | $10-50/mo    | For complex demo infrastructure      |

### Unit Economics (Target)

- Average project value: $2,000-10,000
- Platform take: $200-1,500 per project
- Developer acquisition cost: $50
- Client acquisition cost: $100
- LTV:CAC ratio target: 5:1

## Competitive Landscape

| Platform   | Model               | Gap                              |
| ---------- | ------------------- | -------------------------------- |
| **Upwork** | Proposal-based      | No proof of capability           |
| **Toptal** | Vetted network      | Expensive, no demos              |
| **Fiverr** | Gig-based           | Too transactional for complex AI |
| **Andela** | Long-term placement | Not project-based                |
| **Kaggle** | Competition         | Not client-focused               |

### Our Edge

1. **Proof-First** — Only platform where you see before you buy
2. **AI-Specialized** — Built for AI/ML projects specifically
3. **Developer-Friendly** — Build once, win clients (not write proposals)
4. **Quality Signal** — Working demo > portfolio > reviews

## Growth Strategy

### Phase 1: Bootstrap (Months 1-6)

- **Platform pays developers** — Subsidize early POC creation ($100-500 per demo)
- **Curated demand** — Hand-pick 50-100 quality client requests
- **Quality control** — Manually review all demos before publishing
- **Artificial scarcity** — Waitlist for clients, creates urgency

### Phase 2: Liquidity (Months 6-12)

- **Self-sustaining marketplace** — Enough developers and clients for organic matching
- **Reduce subsidies** — Let market pricing take over
- **Vertical focus** — Double down on highest-converting AI categories
- **Internal build team** — Platform builds solutions for unmatched requests

### Phase 3: Scale (Year 2+)

- **Enterprise tier** — Large companies, custom solutions
- **API platform** — Developers monetize reusable components
- **Geographic expansion** — Localized versions
- **Adjacent categories** — Web3, blockchain, IoT

### Tactics

- **Seed with bots/fake activity** — Show platform traction early (ethical: clearly mark as examples)
- **Developer evangelism** — Partner with AI YouTubers, educators
- **Content marketing** — "How to build AI" tutorials that funnel to platform
- **Referral program** — Both sides incentivized to invite

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         PROVEN PLATFORM                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   CLIENT     │    │   MATCHING   │    │  DEVELOPER   │       │
│  │   PORTAL     │◄──►│    ENGINE    │◄──►│   PORTAL     │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│         │                   │                   │                │
│         ▼                   ▼                   ▼                │
│  ┌──────────────────────────────────────────────────────┐       │
│  │                   DEMO RUNTIME                        │       │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │       │
│  │  │ iFrame  │  │ WebCont │  │  API    │  │ Docker  │  │       │
│  │  │ Sandbox │  │  ainer  │  │ Proxy   │  │ Runtime │  │       │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │       │
│  └──────────────────────────────────────────────────────┘       │
│                           │                                      │
│         ┌─────────────────┼─────────────────┐                   │
│         ▼                 ▼                 ▼                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   PAYMENTS   │  │   ESCROW     │  │   REVIEWS    │          │
│  │   (Stripe)   │  │   (Code)     │  │   (Rating)   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Tech Stack (Suggested)

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js/Python, PostgreSQL, Redis
- **Demo Runtime:** WebContainers (StackBlitz), Docker, Cloudflare Workers
- **Payments:** Stripe Connect
- **Auth:** Clerk/Auth0
- **Search:** Algolia/Typesense
- **Analytics:** PostHog, Mixpanel

## Risk Analysis

| Risk                              | Likelihood | Impact   | Mitigation                                      |
| --------------------------------- | ---------- | -------- | ----------------------------------------------- |
| Developers don't build POCs       | High       | Critical | Subsidize early, reduce friction with templates |
| Demo quality too variable         | Medium     | High     | Quality gates, curation, minimum standards      |
| Clients expect too much for free  | Medium     | Medium   | Clear scope limits, time-box demos              |
| Competitor copies model           | Medium     | Medium   | Network effects, brand, speed                   |
| Legal (contractor classification) | Low        | High     | Clear contractor agreements, no exclusivity     |

## Success Metrics

### North Star

**Proof-to-Pay Conversion Rate** — % of viewed demos that result in payment

### Key Metrics

- **Supply:** Active developers, demos submitted/week
- **Demand:** Active clients, requests posted/week
- **Matching:** Avg demos per request, time to first demo
- **Conversion:** Demo view → selection rate
- **Revenue:** GMV, platform revenue, take rate
- **Retention:** Developer return rate, client return rate

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  proven                                    [Post Request]  👤   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  YOUR REQUEST: Customer Sentiment Analysis API                   │
│  Budget: $3,000-5,000  │  Deadline: 2 weeks  │  5 demos received│
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  DEMO 1: @alexai  ★★★★★ (23 projects)      $3,500  │ VIEW ││
│  │  ┌─────────────────────────────────────────────────────┐   ││
│  │  │                                                     │   ││
│  │  │   [Live Demo iFrame - Sentiment Analysis]           │   ││
│  │  │   Enter text: "I love this product!"                │   ││
│  │  │   Result: POSITIVE (0.94 confidence)                │   ││
│  │  │                                                     │   ││
│  │  └─────────────────────────────────────────────────────┘   ││
│  │  "FastAPI backend, BERT model, handles 1000 req/min"       ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  DEMO 2: @mlpro  ★★★★☆ (12 projects)       $4,200  │ VIEW ││
│  │  "Custom transformer model, multi-language support..."      ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  DEMO 3: @buildfast  ★★★★★ (45 projects)   $2,800  │ VIEW ││
│  │  "GPT-4 based, real-time streaming, dashboard included..." ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [Compare All]              [Request Changes]      [Select Best]│
└─────────────────────────────────────────────────────────────────┘
```

## Why Now?

1. **AI democratization** — More people need AI solutions than ever
2. **Faster prototyping** — Tools like Cursor, v0 make demos quick to build
3. **Trust crisis** — Too many bad experiences with traditional freelancing
4. **Remote work normalized** — Global talent pool ready to compete
5. **WebContainer tech** — Finally possible to embed live demos safely

## The Vision

> **Proven** makes "show me" the standard for hiring AI developers. No more proposals. No more promises. Just proof.

In 3 years: Every AI project starts with "Let me see a demo first."

---

**Domain Options:**

- proven.build
- getproven.ai
- proven.so
- useproven.com
- joinproven.com

**Tagline Options:**

- "AI solutions, proven before you pay."
- "Stop hoping. Start seeing."
- "Proof-first AI hiring."
- "See it work. Then decide."
