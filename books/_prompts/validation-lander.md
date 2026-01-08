# Validation Landing Page Prompt

## Purpose
Create minimal viable landing pages to validate synthesis ideas BEFORE writing the full book. Speed is critical—build in 1-2 days, test for 2 weeks, kill or proceed.

---

## The Validation-First Philosophy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    VALIDATION-FIRST MODEL                                │
│                                                                          │
│  OLD WAY:                                                                │
│  Write book (6 months) → Build landing → Hope people want it → ❌       │
│                                                                          │
│  NEW WAY:                                                                │
│  Build validation landing (2 days) → Test demand → Kill or proceed → ✓  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**The insight:** A 2-day landing page can tell you if a 6-month book is worth writing.

---

## Validation Landing Components

### Minimum Viable Landing (4 sections)

```
┌─────────────────────────────────────────────┐
│ 1. HERO                                     │
│    - Hook headline                          │
│    - One-sentence promise                   │
│    - CTA to try tool                        │
├─────────────────────────────────────────────┤
│ 2. CORE INSIGHT                             │
│    - The "aha" that makes this unique       │
│    - 2-3 sentences max                      │
├─────────────────────────────────────────────┤
│ 3. ONE INTERACTIVE TOOL                     │
│    - 60-90 second experience                │
│    - Demonstrates core transformation       │
│    - Shows value before purchase            │
├─────────────────────────────────────────────┤
│ 4. EMAIL CAPTURE                            │
│    - "Get notified when this launches"      │
│    - Optional: "Would you pay $X?"          │
│    - Thank you message                      │
└─────────────────────────────────────────────┘
```

---

## Validation Landing Prompt

```markdown
Create a minimal validation landing page for this synthesis:

## SYNTHESIS DETAILS
- **Working Title**: [Name]
- **Source A**: [Framework/Book]
- **Source B**: [Framework/Book]
- **Synthesis Thesis**: [One sentence]
- **Target Audience**: [Specific who]
- **Core Transformation**: [From → To]

## REQUIRED SECTIONS

### 1. HERO SECTION

**Badge Text**: [Short descriptor, e.g., "A Framework for [X]"]

**Headline**: 
Requirements:
- Implies transformation
- Uses "you/your" language
- Creates curiosity or tension
- 5-10 words ideal

**Subheadline**: 
Requirements:
- Clarifies who this is for
- States the core promise
- 15-25 words ideal

**CTA Button**: [Action phrase, e.g., "Try the [Tool Name]"]

### 2. CORE INSIGHT

**Label**: [e.g., "The Core Insight", "The Key Discovery"]

**Insight Statement**:
Requirements:
- Captures the "aha" moment
- Explains why both sources are needed
- Creates "I never thought of it that way" response
- 2-3 sentences max

### 3. INTERACTIVE TOOL

**Tool Name**: [Evocative name]

**Tool Type**: [Mapper/Analyzer/Generator]

**User Input**:
- Field 1: [Label, placeholder, type]
- Field 2: [Label, placeholder, type]
- Field 3: [Label, placeholder, type]

**Processing Logic**:
Describe how inputs become outputs:
- What patterns do you detect?
- What categories might emerge?
- What personalization applies?

**Output Display**:
- Visual format: [Card/Chart/Highlighted text]
- Key insight: [What stands out]
- Personal element: [How it uses their input]

**Tool-to-Capture Bridge**:
[Message after tool completion that leads to email signup]

### 4. EMAIL CAPTURE

**Headline**: [e.g., "Get [Book Title] When It Launches"]

**Subheadline**: [Benefit of signing up]

**Email Placeholder**: [e.g., "your@email.com"]

**Button Text**: [e.g., "Notify Me", "Join the Waitlist"]

**Optional - Price Validation**:
Add a second CTA: "Would you pay $[X] for this? [Yes/No]"
Track clicks for demand signal.

**Trust Text**: [e.g., "No spam. Just launch updates."]

**Thank You Message**: [Shown after signup]

## DESIGN REQUIREMENTS

- Single HTML file (inline CSS/JS)
- Mobile-first responsive
- Page load < 2 seconds
- Dark, premium aesthetic
- Subtle animations only
- Works without JavaScript (graceful degradation)

## ANALYTICS REQUIREMENTS

Track these events:
- `page_view` - on load
- `tool_start` - first input
- `tool_complete` - results shown
- `email_signup` - form submitted
- `price_yes` / `price_no` - if using price validation

## OUTPUT

Provide:
1. Complete HTML file with inline CSS/JS
2. All sections above implemented
3. Basic analytics event structure
4. Mobile-responsive layout
```

---

## Validation Gates

### Success Thresholds

| Metric | Target | Meaning |
|--------|--------|---------|
| Email signups | 100 in 14 days | Sufficient demand |
| Signup rate | >2% of visitors | Message resonates |
| Tool completion | >60% who start | Concept works |
| Price "Yes" | >10% of visitors | Willingness to pay |
| Bounce rate | <70% | Hook is working |

### Kill Signals

| Signal | Threshold | Action |
|--------|-----------|--------|
| Bounce rate | >85% | Kill or radical pivot |
| Signup rate | <1% | Kill concept |
| Tool abandonment | >70% | Redesign tool |
| Price "No" | >95% | Rethink pricing/value |
| Zero shares | 0 in 14 days | No viral potential |

---

## Quick Validation Prompt

For rapid idea testing:

```markdown
I need a validation landing for this synthesis idea:

**Thesis**: [One sentence combining Source A + Source B]
**Audience**: [Who specifically]
**Transformation**: [From X → To Y]

Create:
1. Headline that hooks this audience
2. 2-sentence core insight
3. One 60-second interactive tool concept
4. Email capture with price validation

Keep it minimal. I need to test this in 48 hours.
```

---

## Validation Landing Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[BOOK TITLE] — [TAGLINE]</title>
    <style>
        /* Minimal CSS - dark theme, mobile-first */
        /* See _templates/landing-validation.html for full implementation */
    </style>
</head>
<body>
    <!-- HERO -->
    <header class="hero">
        <span class="badge">[BADGE TEXT]</span>
        <h1>[HEADLINE]</h1>
        <p>[SUBHEADLINE]</p>
        <a href="#tool" class="cta">[CTA TEXT]</a>
    </header>

    <!-- CORE INSIGHT -->
    <section class="insight">
        <span class="label">[LABEL]</span>
        <p>[INSIGHT STATEMENT]</p>
    </section>

    <!-- INTERACTIVE TOOL -->
    <section id="tool" class="tool">
        <h2>[TOOL NAME]</h2>
        <form id="toolForm">
            <!-- Tool inputs -->
        </form>
        <div id="results" class="hidden">
            <!-- Results display -->
        </div>
    </section>

    <!-- EMAIL CAPTURE -->
    <section class="capture">
        <h2>[CAPTURE HEADLINE]</h2>
        <p>[CAPTURE SUBTEXT]</p>
        <form id="emailForm">
            <input type="email" placeholder="[PLACEHOLDER]" required>
            <button type="submit">[BUTTON TEXT]</button>
        </form>
        <p class="trust">[TRUST TEXT]</p>
    </section>

    <script>
        // Tool logic
        // Form handling
        // Analytics events
    </script>
</body>
</html>
```

---

## Traffic Strategy for Validation

### Free Traffic Sources
1. **Personal network** - Share with relevant friends/colleagues
2. **Communities** - Reddit, Discord, Slack groups (add value first)
3. **Social posts** - Share the tool, not the signup
4. **Cross-promotion** - Link from existing properties

### Paid Traffic (Optional)
1. **Twitter/X ads** - Target interest-based
2. **Reddit ads** - Target relevant subreddits
3. **Budget**: $50-100 for initial signal

### Traffic Goal
- 500-1000 visitors in 2 weeks
- Sufficient for statistically meaningful signals
- Focus on quality (right audience) over quantity

---

## Post-Validation Decision Tree

```
AFTER 14 DAYS:
│
├── 100+ signups, >2% rate, >60% tool completion
│   └─▶ PROCEED to full build
│
├── 50-100 signups, mixed signals
│   └─▶ ITERATE - adjust hook, tool, or audience
│
├── <50 signups, weak signals
│   └─▶ PIVOT - try different synthesis angle
│
└── <10 signups despite traffic
    └─▶ KILL - concept doesn't resonate
```

---

## Example: Voice Council Validation

**Synthesis Thesis**: Combine Internal Family Systems with Voice Dialogue for a "democratic council" model of inner harmony.

**Validation Landing**:
- **Hero**: "Your inner voices aren't fighting you—they're trying to protect you"
- **Insight**: "Most inner conflict comes from voices that haven't been heard. The Voice Council gives every part a seat at the table."
- **Tool**: "Voice Census" - Name and map 3 inner voices in 60 seconds
- **Capture**: "Get The Voice Council when it launches"

**Kill Gate**: 100 signups in 14 days = proceed with full book

---

**Validation Landing Prompt v1.0**
*Test fast. Fail cheap. Build what's proven.*


