# Best Prompts: Niche Research

**Purpose:** Reference data for building the Best Prompts platform  
**Status:** Ready for execution (pending ⬜ validation items)

---

## QUICK REFERENCE

### Build Order (Phase 1 MVP)

| #   | Page            | Keywords                                                            | Tool                    | Est. Hours |
| --- | --------------- | ------------------------------------------------------------------- | ----------------------- | ---------- |
| 1   | Decision-Making | "how to make hard decisions" (10K), "decision matrix template" (8K) | Decision Matrix Builder | 20         |
| 2   | LinkedIn        | "LinkedIn post prompts" (15K), "LinkedIn headline" (10K)            | Headline Formula Engine | 15         |
| 3   | Journaling      | "journal prompts" (20K), "self-reflection prompts" (8K)             | Question Randomizer     | 15         |

### Design Quick Reference

| Niche            | Display Font       | Body Font        | Background | Accent  |
| ---------------- | ------------------ | ---------------- | ---------- | ------- |
| Journaling       | Fraunces           | Source Serif Pro | #0f1a14    | #d4a574 |
| LinkedIn         | Darker Grotesque   | IBM Plex Sans    | #0f0f1a    | #ee6c4d |
| Content/SMM      | Syne               | Work Sans        | #0a0a0a    | #ffbe0b |
| Therapy          | Libre Baskerville  | Lora             | #1d3557    | #f1faee |
| Decisions        | Space Grotesk      | Inter            | #14151f    | #ef233c |
| Annual Review    | Playfair Display   | Crimson Pro      | #1a1a1a    | #d4af37 |
| Interview        | Archivo            | Source Sans Pro  | #001523    | #fdf0d5 |
| Negotiation      | Bebas Neue         | Barlow           | #0d0d0d    | #ffba08 |
| Creative Writing | Cormorant Garamond | Spectral         | #0f0e17    | #fffffe |
| Music            | Monument Extended  | DM Sans          | #10002b    | #e0aaff |

---

## TIER 1 NICHES (Build First)

### 1. Self-Reflection & Journaling

| Metric        | Value          | Status        |
| ------------- | -------------- | ------------- |
| Search Volume | 40K-80K/mo     | ⬜ Validate   |
| Competition   | Medium (40-55) | ⬜ SERP check |
| Pain          | 9/10           | ✅ Proven     |

**Keywords:** "journal prompts", "self-reflection prompts", "deep questions to ask yourself", "journaling prompts for self-discovery"

**Tools:** Question randomizer (200+ curated), Life wheel visualizer, Streak tracker

**Risk:** Seasonal (Jan/Sep spikes)

---

### 2. LinkedIn & Professional Writing

| Metric        | Value        | Status        |
| ------------- | ------------ | ------------- |
| Search Volume | 30K-50K/mo   | ⬜ Validate   |
| Competition   | High (55-70) | ⬜ SERP check |
| Pain          | 8/10         | ⬜ Interview  |

**Keywords:** "LinkedIn post prompts", "LinkedIn headline examples", "professional bio prompts", "AI prompts for LinkedIn"

**Tools:** Headline formula engine (fill-blank), Hook generator, Post scaffolder (AIDA/PAS)

**Risk:** Algorithm changes, AI detection concerns

---

### 3. Content Strategy & SMM

| Metric        | Value             | Status        |
| ------------- | ----------------- | ------------- |
| Search Volume | 100K+/mo          | ⬜ Validate   |
| Competition   | Very High (65-80) | ⬜ SERP check |
| Pain          | 9/10              | ✅ Evergreen  |

**Keywords:** "social media prompts", "content ideas generator", "instagram caption prompts", "hook formulas"

**Tools:** Content calendar builder, Hook formula engine, Caption generator (madlib)

**Risk:** Heavy competition, AI tools (Jasper) well-funded

---

### 4. Therapy & Mental Health ⚠️

| Metric        | Value              | Status        |
| ------------- | ------------------ | ------------- |
| Search Volume | 25K-40K/mo         | ⬜ Validate   |
| Competition   | Low-Medium (30-45) | ⬜ SERP check |
| Pain          | 10/10              | ✅ Real       |

**Keywords:** "therapy prompts", "mental health journaling prompts", "CBT journaling prompts", "self-compassion prompts"

**Tools:** ⛔ NONE (Guardian override)

**GUARDIAN REQUIREMENTS:**

- ✅ Include: 988 hotline, Crisis Text Line, "not substitute for professional help"
- ⛔ Avoid: No interactive tools, no gamification, no data collection, no efficacy claims
- ⚠️ Legal review before launch

**Risk:** YMYL scrutiny, liability

---

### 5. Decision-Making Frameworks

| Metric        | Value            | Status       |
| ------------- | ---------------- | ------------ |
| Search Volume | 15K-25K/mo       | ⬜ Validate  |
| Competition   | Very Low (20-35) | ✅ Confirmed |
| Pain          | 8/10             | ⬜ Interview |

**Keywords:** "decision making prompts", "how to make hard decisions", "career decision framework", "decision matrix template"

**Tools:** Decision matrix (weighted), Pros/cons visualizer, Regret minimization calc, 10-10-10 tool

**Why First:** Almost no competition, tool-forward, high-value audience

---

## TIER 2 NICHES (Build Second)

| #   | Niche              | Volume | Competition | Pain | Key Tool          |
| --- | ------------------ | ------ | ----------- | ---- | ----------------- |
| 6   | Music/Songwriting  | 20-35K | Low-Med     | 7/10 | Genre combinator  |
| 7   | Interview Prep     | 50-80K | Medium      | 9/10 | STAR builder      |
| 8   | Creative Writing   | 150K+  | Very High   | 7/10 | Character builder |
| 9   | Startup Validation | 10-20K | Low         | 8/10 | Idea validator    |
| 10  | Relationships      | 40-60K | Low-Med     | 9/10 | 36 Questions      |

---

## HIDDEN GEMS (Low Competition)

| Niche                   | Volume             | Competition | Timing             | Key Insight                      |
| ----------------------- | ------------------ | ----------- | ------------------ | -------------------------------- |
| **Annual Review** 🔮    | Spikes 10x Dec-Jan | Very Low    | BUILD BY NOV 15    | First-mover, shareable outputs   |
| **Negotiation**         | 15-25K             | Low         | Evergreen          | High-value professional audience |
| **Parenting**           | 50K+               | Low-Med     | Evergreen          | FB group virality                |
| **Learning/Study**      | 80K+               | Medium      | Aug/Jan/May spikes | Student audience                 |
| **AI Art (Midjourney)** | 100K+              | Fragmented  | Platform-dependent | Huge but requires updates        |

---

## TOOL SPECS

### Architecture

```
Stack: Pure HTML5 + CSS3 + Vanilla JS (ES6+)
Optional: Chart.js (CDN, lazy-loaded)
Persistence: localStorage (auto-save)
Export: Clipboard, .txt, image (html2canvas)
```

### Performance Targets

- FCP: < 1.5s
- TTI: < 2.5s
- JS payload: < 50KB gzipped
- Works offline

### Accessibility

- WCAG 2.1 AA
- Keyboard navigable
- Screen reader compatible
- Reduced motion support

### Tools by Dev Time

| Tool                    | Hours | Complexity |
| ----------------------- | ----- | ---------- |
| Prompt Customizer       | 3-4   | Low        |
| Question Randomizer     | 4-6   | Low        |
| Headline Formula Engine | 4-6   | Low        |
| Hook Generator          | 6-8   | Low        |
| STAR Scaffolder         | 8-10  | Medium     |
| Life Wheel Visualizer   | 8-12  | Medium     |
| Decision Matrix         | 10-15 | Medium     |
| Salary Calculator       | 10-12 | Medium     |
| Content Calendar        | 15-20 | High       |

---

## URL STRUCTURE

```
bestprompts.xyz/
├── index.html              ← Hub
├── /decision-prompts/      ← MVP #1
├── /linkedin-prompts/      ← MVP #2
├── /journal-prompts/       ← MVP #3
├── /therapy-prompts/
├── /content-prompts/
├── /interview-prompts/
├── /annual-review/
├── /negotiation-prompts/
├── /tools/
│   ├── /decision-matrix/
│   ├── /hook-generator/
│   └── /life-wheel/
└── /about/
```

**Linking Rules:**

1. Every page → 3-5 related pages
2. Every page → Hub (footer)
3. Tools → Parent prompt suite
4. Sidebar shows related tools

---

## SEO CHECKLIST (Per Page)

**Keywords:**

- [ ] Primary in title, H1, first 100 words
- [ ] Secondary (3-5) in H2s
- [ ] Long-tail in FAQ

**Meta:**

- [ ] Title: `[Primary KW] - [Benefit] | Brand` (< 60 chars)
- [ ] Description: `[Hook], [Benefit], [CTA]` (< 155 chars)

**Technical:**

- [ ] Load < 2s (PageSpeed)
- [ ] Mobile-friendly
- [ ] Schema: HowTo/FAQ/Article
- [ ] Canonical set
- [ ] OG + Twitter cards

---

## CONTENT TEMPLATE

```markdown
# [Primary Keyword]: [Hook]

[Opening: Hook + keyword + promise]

## Why These Prompts Work

[2-3 paragraphs, include secondary keyword]

## The [Name] Suite

### Prompt 1: [Name]

**When:** [Context]
```

[Prompt text]

```
**Output:** [What they get]

[Repeat 4-7 prompts]

## Interactive [Tool]
[Tool embed]

## Pro Tips
1. [Tip]
2. [Tip]
3. [Tip]

## FAQ
### How do I use these [keyword] prompts?
### What makes these different?
### Can I customize?
```

---

## COMPETITORS

| Site           | Traffic | Weakness             |
| -------------- | ------- | -------------------- |
| PromptBase     | ~500K   | Ugly, no curation    |
| LearnPrompting | ~300K   | Academic             |
| FlowGPT        | ~1M     | Chaotic, low quality |
| AIPRM          | ~800K   | Extension-dependent  |

**Our Gap:** Beautiful design + Interactive tools + Niche depth

---

## DESIGN CONSTRAINTS

**Banned:**

- Inter, Roboto, Arial, system fonts
- Purple gradients
- Card grids with rounded corners
- Stock photos

**Required:**

- Dark mode default
- 60% bg / 30% primary / 10% accent
- Each niche = unique visual world
- Screenshot-worthy in 3 seconds

---

## VALIDATION CHECKLIST (⬜ = Pending)

```
⬜ Keyword research (Ahrefs/SEMrush)
⬜ SERP analysis top 5 keywords
⬜ User interviews (5-10 per niche)
⬜ Competitor traffic (SimilarWeb)
⬜ Domain registered
⬜ Analytics setup (GA4 + GSC)
```

---

## BUILD PHASES

### Phase 1 (Weeks 1-4): MVP

- 3 pages: Decision → LinkedIn → Journal
- All with tools
- Newsletter signup
- Get indexed

### Phase 2 (Weeks 5-10): Expand

- Annual Review (BY NOV 15)
- Interview Prep
- Content/SMM
- Therapy (Guardian reviewed)
- Negotiation

### Phase 3 (Weeks 11-20): Scale

- Creative Writing (by genre)
- Music
- Startup
- Parenting
- Data-driven additions

---

## GUARDIAN PROTOCOLS

**Therapy/Mental Health:**

- Crisis resources required
- Disclaimer required
- No tools
- Legal review before launch

**Relationships:**

- Tasteful only
- Not manipulative

---

## FAILURE TRIGGERS

- No organic traffic after 3 months → SEO failed
- Zero rankings after 4 months → Wrong keywords
- < 1% email signup → Bad value prop
- Tool bounce > 80% → Tools not useful

---

_Confidence: 0.75 (pending keyword validation)_
