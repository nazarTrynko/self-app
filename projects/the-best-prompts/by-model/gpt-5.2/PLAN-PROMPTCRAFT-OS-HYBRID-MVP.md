## Promptcraft OS (Hybrid MVP)

**Positioning:** A creator-first prompt tool that delivers instant improvement *and* a place to save, version, and share prompt work.

**Target (Phase 1):** Indie creators (writers, designers, YouTubers, solo makers) who want better outputs fast and want to build a reusable prompt “kit”.

**Core wedge (Hybrid):** Prompt Alchemist + Studio-lite  
- **Alchemist** = paste a prompt → upgraded prompt + variants + “why this works”  
- **Studio-lite** = save prompt, versions, variables, and shareable “prompt cards”

---

## The 60-second win (non-negotiable)

User lands → pastes a prompt → chooses goal → gets:
- **Upgraded prompt**
- **3 variants** (tone/length/audience)
- **Risk flags** (vague inputs, missing constraints, safety)
- **One-click copy**

Then: “Save as a Prompt Card” (creates a shareable artifact).

---

## MVP Scope (2-week experiment)

### Must-have features
- **Prompt input** (paste)
- **Goal selector** (what you want): “more specific”, “more creative”, “more concise”, “more persuasive”, “more structured”
- **Alchemist output**:
  - upgraded prompt
  - 3 variants
  - “why this works” (short rationale)
  - risk flags + suggested missing info questions
- **Studio-lite**:
  - save prompt + outputs
  - version history (v1, v2, v3…)
  - variables (`{audience}`, `{tone}`, `{constraints}`) with a small form UI to fill and preview
  - share link to a read-only “Prompt Card”
- **Shareability engine**:
  - export Prompt Card as image (screenshot-friendly layout)
  - “Copy formatted” for Twitter/LinkedIn

### Explicitly not building (yet)
- Marketplace payments/revenue split
- Team workspaces + permissions
- Long-term analytics dashboards
- Deep agent builders
- Massive prompt library SEO pages

---

## The Product Loop

1. **Improve** (Alchemist) → instant win  
2. **Save** (Studio-lite) → retention  
3. **Share** (Prompt Card) → distribution  
4. **Remix** (Fork prompt) → repeat use  

---

## UX/Pages

- `/` Landing + “Try it now” embedded (no signup required)
- `/studio` Your saved prompts + versions
- `/p/[id]` Public Prompt Card (read-only)

---

## Data Model (minimal)

- `Prompt`
  - `id`, `title`, `createdAt`, `updatedAt`
  - `sourcePrompt`
  - `tags` (optional)
- `PromptVersion`
  - `promptId`, `versionNumber`
  - `goal`
  - `upgradedPrompt`
  - `variants[]`
  - `rationale`
  - `riskFlags[]`
  - `variablesSchema` (list of variable names + defaults)

Storage approach for MVP:
- Start with **localStorage** (fast, no auth friction)
- Add auth + DB only if retention is proven

---

## Validation (what “working” means)

### Primary metric (impact)
**Saved Prompt Cards per visitor** (shows it’s not just curiosity)

### Secondary metrics
- Copy clicks (upgraded prompt / variants)
- Shares (Prompt Card views)
- Return within 7 days

### Failure signal
High paste rate but low save/share → novelty without retained value.

---

## Pricing hypothesis (later)

Keep MVP free. If it hits:
- Free: 10 saved prompts
- Pro ($9–$19/mo): unlimited saves + exports + custom templates + “brand voice pack”

---

## Build Plan (sequenced)

1. **Alchemist engine (rules-based first)**  
   - deterministic transformations for clarity: add role, context, constraints, outputs, examples, format, tone
2. **Prompt Card (shareable artifact)**  
   - export as image
3. **Studio-lite (local save + versions)**  
4. **Distribution hooks**  
   - “Share this Prompt Card” + prewritten posts
5. **Only then** consider model-powered upgrades (optional)

---

## Guardian / Safety

- Don’t claim guarantees (“will make you go viral”)
- Add gentle safety checks for harmful requests
- Avoid sensitive mental-health tooling claims (keep it “reflection prompts”, not therapy)

---

## One question to sit with

If this became huge, what do you want it to *change* in people: better outputs, or better thinking?


