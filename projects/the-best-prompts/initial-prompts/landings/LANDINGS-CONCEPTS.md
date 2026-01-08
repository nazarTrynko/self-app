# Best Prompts — Landings Blueprint

Purpose: blueprint for 5 exceptional landing pages (3 interactive, 2 prompt-only), platform architecture, niches, and rollout.

Status: Draft for execution

---

## Ranked Top 10 Niches (with notes)

1. Self-Reflection & Journaling — huge evergreen demand, medium competition, proven prompt depth, interactive question/randomizer fits.
2. LinkedIn & Professional Writing — high-intent pros, fragmented quality, strong shareability, combinatorial headline/profile tools.
3. Content Strategy & SMM — massive recurring need, shallow competitors, calendar/hook tools drive retention.
4. Decision-Making Frameworks — low competition, high pain, ideal for calculators/matrices.
5. Therapy & Mental Health Journaling — sensitive, low-quality supply, prompt-only for safety.
6. Interview Preparation — perennial need, STAR scaffolder/QA bank works client-side.
7. Songwriting & Music (Suno/Udio) — fast-growing, genre/lyric combinators help; keep results copyable.
8. Creative Writing & Storytelling — huge audience, interactive plot/character builders.
9. Product & Startup Validation — founder pain, checklist + scoring tool.
10. Relationship Communication — universal need, tasteful prompt flows; limit interactivity to light guides.

Hidden gems: Life Audit / Annual Review (seasonal spike, empty field); Negotiation & Difficult Conversations (high pain, low competition); Parenting & Family Communication (large underserved).

---

## Platform Architecture & Linking

- Categories: self/ (reflection, decisions, annual-review), professional/ (linkedin, interviews, negotiation, startup), creative/ (writing, music, content), relationships/ (communication, therapy), tools/ (decision-matrix, content-calendar, reflection-generator).
- Each landing links to 3–5 related siblings plus a relevant tool. Footer: “Explore more prompts” module with category chips.
- Single-page HTML per landing, shared lightweight nav/footer pattern; avoid heavy dependencies.

---

## Landing Concepts (3 interactive first, 2 prompt-only)

### LANDING 1: The Mirror Engine

**Niche:** Self-reflection & journaling  
**Primary Keyword:** “journal prompts”  
**Design Vibe:** Warm parchment / kinetic ink

#### Design Direction

- **Color Palette:** #f8f1e4, #d4a574, #8b5e2b, #2d2418
- **Typography:** Fraunces (titles 600); Manrope (body 500)
- **Visual Motif:** Flowing ink strokes and margin scribbles
- **Background:** Subtle paper texture with drifting ink wisps
- **Animation:** Ink strokes slowly draw on scroll; buttons ripple like ink drops

#### Prompt Flow

1. **Prime the Page** — Excavates: intent + mood (sets tone for later steps)
2. **The Three Mirrors** — Excavates: self-perception, external perception, desired perception
3. **Fracture & Repair** — Excavates: a recent tension and its lesson
4. **Tiny Truths** — Excavates: 5 micro-observations from today
5. **The Next Gesture** — Excavates: one behavior to test in 24h
6. **Synthesis Paragraph** — Combines all insights into one 120-word note

#### Interactive Element

- **Tool Name:** Reflection Deck
- **What It Does:** Shuffle/lock curated prompts into a 5-card spread; allows swaps.
- **User Input:** Mood tag, time available (5/15/30 min).
- **Output:** Ordered prompt set + copy-to-clipboard bundle.
- **Why It Works Without AI:** Deterministic card selection + weighted randomization in JS; no API calls.

#### Mind-Blowing Moment

Seeing the 5-card spread animate into a single cohesive paragraph ready to journal.

#### SEO Strategy

- **Target Keywords:** journal prompts; self-reflection prompts; deep questions to ask yourself; daily journaling prompts
- **Meta Description:** “A 5-card Reflection Deck that assembles the exact journal prompts you need in under 10 seconds.”
- **Structured Data:** HowTo + FAQ
- **Internal Links:** to decisions, therapy, annual-review, reflection-generator tool

#### Page Sections

Hero (hook + CTA to draw deck) / Why this works / Prompt suite / Reflection Deck tool / Pro tips / Expected outputs / Related prompts.

---

### LANDING 2: Signal Forge

**Niche:** LinkedIn & professional writing  
**Primary Keyword:** “LinkedIn post prompts”  
**Design Vibe:** Industrial printshop / amber signals

#### Design Direction

- **Color Palette:** #0f1419, #1f2a36, #d18f2b, #f2e6cf
- **Typography:** Space Grotesk (titles 600); Literata (body 500)
- **Visual Motif:** Metal plates, stamp marks, signal lights
- **Background:** Dark steel texture with animated status LEDs
- **Animation:** Stamping motion on CTA; headline ticker slides

#### Prompt Flow

1. **Positioning Primer** — Excavates: role, audience, proof points
2. **Authority Anchor** — Excavates: 3 earned insights + a “why it matters” frame
3. **Story Spark** — Excavates: mini anecdote aligned to insight
4. **CTA Craft** — Excavates: single action ask without cringe
5. **Reframing Pass** — Excavates: alternative angle (teach/learn/challenge)
6. **Publish Bundle** — Outputs 3 variants (teach, story, challenge)

#### Interactive Element

- **Tool Name:** Headline Press
- **What It Does:** Combine role, audience, proof, and tension into 5 headline formulas; swaps verbs/nouns.
- **User Input:** Role, audience, outcome, proof snippet.
- **Output:** 5 stamped headlines + copy bundle.
- **Why It Works Without AI:** Template matrix + word banks; client-side permutation scorer (length/tension/readability).

#### Mind-Blowing Moment

Watching your raw inputs stamp into 5 polished LinkedIn headlines in under 5 seconds.

#### SEO Strategy

- **Target Keywords:** LinkedIn post prompts; professional writing prompts; LinkedIn headline generator; LinkedIn content ideas
- **Meta Description:** “Headline Press for LinkedIn: stamp 5 authority headlines from your role, audience, and proof in seconds.”
- **Structured Data:** HowTo + FAQ
- **Internal Links:** to content-strategy, interviews, startup, tools/headline-press

#### Page Sections

Hero / Why authority beats virality / Prompt suite / Headline Press tool / Pro tips / Outputs / Related pages.

---

### LANDING 3: Content Current

**Niche:** Content strategy & SMM  
**Primary Keyword:** “social media prompts”  
**Design Vibe:** Tidal grid / electric teal

#### Design Direction

- **Color Palette:** #0c1f2e, #123f4f, #1fa3b1, #d6f3f7
- **Typography:** Syne (titles 700); IBM Plex Sans (body 500)
- **Visual Motif:** Wave grids and kinetic arrows
- **Background:** Moving isometric wave mesh (low opacity)
- **Animation:** Cards slide on currents; CTA pulses like sonar

#### Prompt Flow

1. **Channel & Cadence** — Excavates: platform, frequency, tone
2. **Audience Pain Map** — Excavates: top 3 pains + desired outcomes
3. **Hook Arsenal** — Excavates: 5 hooks mapped to pains
4. **Proof & Payoff** — Excavates: receipts (wins, screenshots, data)
5. **CTA Ladder** — Excavates: soft → medium → hard asks
6. **Weekly Wave** — Outputs 7 posts (hook + proof + CTA mix)

#### Interactive Element

- **Tool Name:** Calendar Wave
- **What It Does:** Generates a 7-slot calendar with hooks, proof prompts, CTA levels; drag to reshuffle.
- **User Input:** Platform, niche, frequency, proof items.
- **Output:** 7-day plan + copy bundle.
- **Why It Works Without AI:** Pre-authored hook/proof/CTA libraries + deterministic assembly; local drag-drop reorder.

#### Mind-Blowing Moment

Dragging a hook tile onto a day and seeing the full post scaffold ripple into place instantly.

#### SEO Strategy

- **Target Keywords:** social media prompts; content ideas prompts; Instagram caption prompts; weekly content plan
- **Meta Description:** “Calendar Wave builds a 7-day social calendar with hooks, proof, and CTAs in under a minute—no AI needed.”
- **Structured Data:** HowTo + FAQ
- **Internal Links:** to LinkedIn, startup, headline-press, decision-matrix (for prioritizing themes)

#### Page Sections

Hero / Why this cadence works / Prompt suite / Calendar Wave tool / Tips / Outputs / Related prompts.

---

### LANDING 4: The Decision Room

**Niche:** Decision-making frameworks  
**Primary Keyword:** “decision making prompts”  
**Design Vibe:** Minimal brass + slate

#### Design Direction

- **Color Palette:** #0f1115, #2b3038, #c2a15f, #e8e1d5
- **Typography:** GT Alpina (titles 600) or alternative: Cormorant Garamond (titles 600); Darker Grotesque (body 500)
- **Visual Motif:** Brass inlays, gridlines, weighing scales
- **Background:** Soft gradient from slate to charcoal (no purple), faint grid
- **Animation:** Scale glyph tilts on hover; section dividers slide open

#### Prompt Flow (prompt-only)

1. **Frame the Stakes** — Excavates: upside/downside, reversibility
2. **Criteria Ledger** — Excavates: 5 weighted criteria with personal values
3. **Future Snapshot** — Excavates: 6-month and 2-year imagined outcomes
4. **Stress Tests** — Excavates: worst-case, most-likely, best-case narratives
5. **Regret Minimizer** — Excavates: “in 3 years, will I regret not doing this?”
6. **Decision Draft** — Synthesizes into a one-paragraph decision memo

#### Mind-Blowing Moment

Realizing the “regret minimizer” reframes the choice instantly, paired with your weighted criteria in one view.

#### SEO Strategy

- **Target Keywords:** decision making prompts; career decision prompts; how to make hard decisions; decision framework
- **Meta Description:** “A brass-and-slate Decision Room: six prompts to move from stuck to a clear memo.”
- **Structured Data:** HowTo + FAQ
- **Internal Links:** to reflection, annual-review, negotiation, decision-matrix tool

#### Page Sections

Hero / Why most decisions fail / Prompt suite / Tips (how to use weights offline) / Expected outputs / Related pages.

---

### LANDING 5: Quiet Depths

**Niche:** Therapy & mental health journaling  
**Primary Keyword:** “therapy prompts”  
**Design Vibe:** Midnight sage / breathing space

#### Design Direction

- **Color Palette:** #0f1416, #1e2c2a, #4a6760, #c8d8d2
- **Typography:** Libre Baskerville (titles 600); Work Sans (body 500)
- **Visual Motif:** Soft ripples, candle glows, minimal line art
- **Background:** Dim vignette with slow-moving grain; gentle gradient from deep teal to charcoal
- **Animation:** Breath-paced pulse on CTA; ripples expand on section transitions

#### Prompt Flow (prompt-only, sensitive-safe)

1. **Ground & Name** — Excavates: current feeling + body location
2. **Trigger Trace** — Excavates: what happened, what it meant to you
3. **Need Underneath** — Excavates: unmet need or value at stake
4. **Boundary & Ask** — Excavates: one boundary or request to test
5. **Self-Kindness Line** — Excavates: compassionate reframe in 25 words
6. **Micro-Action** — Excavates: a 10-minute next step

#### Mind-Blowing Moment

Seeing the feelings/needs/ask align into one gentle, actionable script that feels doable in the moment.

#### SEO Strategy

- **Target Keywords:** therapy prompts; mental health journaling prompts; CBT prompts; emotional processing prompts
- **Meta Description:** “A calm six-step therapy prompt flow—feelings, needs, boundary, kindness, action—in one page.”
- **Structured Data:** HowTo + FAQ
- **Internal Links:** to reflection, relationships, annual-review; avoid aggressive CTAs, keep supportive.

#### Page Sections

Hero / Safety note & crisis resources / Why this flow is gentle / Prompt suite / Tips (pacing, breaks) / Outputs / Related pages.

---

## Architecture & Navigation Details

- Header links: Categories (Self, Professional, Creative, Relationships, Tools). Secondary: “All prompts,” “Tools,” “Newest.”
- Related module logic: same category + adjacent pain; always link to at least one tool page.
- Content model per landing: hero, why, prompt suite, tool (if any), tips, outputs, FAQ, related.
- Performance: inline critical CSS; defer JS; fonts via `preconnect`; use SVG/icon fonts only.

---

## Implementation Roadmap

1. MVP (first 3): Mirror Engine (self-reflection), Signal Forge (LinkedIn), Content Current (SMM) — covers 3 categories and 3 interactive tools.
2. Phase 2 (next 2–4): Decision Room, Quiet Depths, plus Interview Prep (reuse tool patterns).
3. Phase 3 (10+): Annual Review (hidden gem), Negotiation, Parenting, Songwriting, Startup Validation, Creative Writing.
4. Validation: ship MVP pages, measure scroll depth, CTA clicks, copy events, time on page; run headline A/B for hero; gather search impressions in GSC weeks 2–4.
5. Risks/assumptions: niche volumes validated via GSC/Ahrefs; interactivity must stay sub-2s load; sensitive topics handled with crisis links and no claims; avoid overusing libraries.

---

## Notes & Constraints Check

- No purple gradients, no Inter/Roboto/Arial. Distinct palettes and fonts set per landing.
- Single-file HTML/CSS/JS per page; client-side only interactivity.
- Prompts are copy-ready, jargon-light, with expected outputs stated in each concept.
- Each landing has SEO targets, meta concept, structured data type, and internal link targets.
