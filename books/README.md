# Books — Self-Transformation Series

Each book is a **synthesized work** that combines multiple source materials into a novel framework, delivered as a complete package: landing page, interactive tools, and manuscript.

---

## Quick Start

```bash
# Preview books locally
cd books && python3 -m http.server 8000
# Visit http://localhost:8000/01-transition-rite/
```

---

## Directory Structure

```
books/
├── _prompts/                    # Prompts for creating/evolving books
│   ├── 00-genesis-brief.md      # Initial book concept prompt
│   ├── synthesis-map.md         # Extract primitives → novel framework
│   ├── chapter-outliner.md      # Convert synthesis → chapter plan
│   ├── manuscript-style-guide.md # Voice, formatting, no-paraphrase rules
│   ├── reader-export.md         # Generate book.html with print CSS
│   ├── series-scaler.md         # Scale to book series
│   ├── tool-generator.md        # Create reflection tools
│   ├── conversion-optimizer.md  # A/B testing & conversion
│   ├── evolution-prompt.md      # Iterate based on data
│   └── integration-guide.md     # Payment, email, analytics
├── _shared/                     # Shared assets (when patterns emerge)
│   ├── css/
│   └── js/
├── _template/                   # Starter template for new books
│   ├── index.html               # Landing page skeleton
│   ├── manuscript/
│   │   ├── 00-meta.md
│   │   ├── 01-outline.md
│   │   ├── chapters/
│   │   │   └── .gitkeep
│   │   └── references/
│   │       └── reading-list.md
│   └── exports/
│       └── .gitkeep
├── 01-transition-rite/          # Book 1: The Transition Rite
│   └── index.html
└── 02-[book-slug]/              # Book 2: [Your Next Book]
    ├── index.html               # Single-file landing + tools
    ├── manuscript/
    │   ├── 00-meta.md           # Positioning, audience, promises
    │   ├── 01-outline.md        # Chapter outline
    │   ├── chapters/
    │   │   ├── 01-introduction.md
    │   │   ├── 02-...md
    │   │   └── ...
    │   └── references/
    │       └── reading-list.md  # Influence map (sources)
    └── exports/
        ├── book.html            # Generated reader view
        └── book.pdf             # Print-to-PDF from book.html
```

---

## Book Package Components

### 1. Landing Page (`index.html`)

A single-file landing page with embedded CSS/JS containing:

| Section | Purpose |
|---------|---------|
| Hero | Title, tagline, primary CTA |
| Synthesis Demo | Interactive "prism" showing the book's core insight |
| Tools | 3 tabbed reflection tools (30-90 seconds each) |
| Social Proof | Testimonials, credentials |
| Offer | Pricing tiers (Essential/Complete/Immersive) |
| Email Capture | Waitlist or newsletter signup |
| Disclaimer | Mental health / not-therapy notice |

### 2. Manuscript (`manuscript/`)

Markdown source files for the actual book content:

| File | Contents |
|------|----------|
| `00-meta.md` | Positioning statement, target audience, promises |
| `01-outline.md` | Complete chapter outline with key points |
| `chapters/*.md` | Individual chapter content |
| `references/reading-list.md` | Influence map (source books, what they contributed) |

### 3. Exports (`exports/`)

Generated artifacts for distribution:

| File | Generation Method |
|------|-------------------|
| `book.html` | Built from manuscript via `scripts/build_book.py` |
| `book.pdf` | Browser print-to-PDF from `book.html` |
| `book.epub` | (Optional) Via pandoc if needed |

---

## Source Handling Philosophy

We use **"inspired, no quotes"** as the default mode:

- **Synthesize ideas** into your own framework language
- **Avoid direct quotes** and close paraphrase from copyrighted sources
- **Keep an Influence Map** (title, author, concept contributed)
- **Upgrade path**: If a source is public domain or you have permission, enable quotes with attribution

---

## Creating a New Book

### Step 1: Copy the template

```bash
cp -r books/_template books/02-your-book-slug
```

### Step 2: Run the synthesis process

Use the prompts in order:

1. `_prompts/synthesis-map.md` — Extract primitives from source materials
2. `_prompts/chapter-outliner.md` — Convert synthesis into chapter plan
3. `_prompts/series-scaler.md` — Define landing page structure
4. `_prompts/tool-generator.md` — Design 3 reflection tools

### Step 3: Build the landing page

Use the patterns from `01-transition-rite/index.html`:
- Tabbed tools (`.tool-tabs`, `.tool-panel`)
- Forms with results display
- Email capture modal
- Analytics tracking hooks

### Step 4: Write the manuscript

Follow `_prompts/manuscript-style-guide.md` for:
- Voice and tone
- Chapter structure
- "No close paraphrase" guardrails

### Step 5: Generate exports

```bash
python scripts/build_book.py books/02-your-book-slug
```

---

## Pipeline Diagram

```
Sources (Books, Notes)
        │
        ▼
┌───────────────────┐
│ Extract Primitives│ ← synthesis-map.md
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Synthesis Framework│
└─────────┬─────────┘
          │
    ┌─────┴─────┐
    │           │
    ▼           ▼
┌────────┐  ┌────────┐
│ Outline│  │ Tools  │ ← tool-generator.md
└────┬───┘  └────┬───┘
     │           │
     ▼           ▼
┌────────┐  ┌────────┐
│Manuscript│ │ Landing│ ← series-scaler.md
└────┬───┘  └────┬───┘
     │           │
     ▼           ▼
┌────────┐  ┌────────────┐
│ Exports│  │ Measure &  │ ← evolution-prompt.md
│ (HTML, │  │ Iterate    │   conversion-optimizer.md
│  PDF)  │  └────────────┘
└────────┘
```

---

## Books in This Series

### 01 — The Transition Rite
**Rewrite your state. Rewrite your story. Become who's next.**

A framework for conscious identity transition—not passive change, but intentional metamorphosis. Synthesizes narrative identity theory with NLP techniques.

**Status:** Published landing page

---

## Evolution Loop

Each book should iterate based on data:

1. **Measure** — Track tool completion, scroll depth, CTA clicks
2. **Analyze** — Use `conversion-optimizer.md` to identify issues
3. **Evolve** — Use `evolution-prompt.md` to propose changes
4. **Test** — Run A/B tests on high-impact elements
5. **Learn** — Update patterns for future books

---

## Integration Checklist

Before launch, verify:

- [ ] Email capture connected (ConvertKit, Buttondown, etc.)
- [ ] Analytics tracking (scroll depth, tool completion, CTA clicks)
- [ ] Payment integration (Gumroad, Stripe, LemonSqueezy)
- [ ] Mobile responsive (test on iOS Safari, Chrome Android)
- [ ] Page load < 2 seconds
- [ ] Disclaimer present (mental health notice)
- [ ] SEO meta tags set
- [ ] OG image for social sharing
