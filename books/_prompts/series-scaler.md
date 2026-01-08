# Book Series Scaler Prompt

## Purpose
Use this prompt to replicate the "Rewriting Your Self" landing page architecture for additional books in your series while maintaining brand consistency and enabling cross-promotion.

---

## The Series Architecture Vision

```
┌─────────────────────────────────────────────────────────┐
│                    BOOK SERIES HUB                       │
│                  /landings/books/                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │ Book 1   │  │ Book 2   │  │ Book 3   │  │ Book N   │ │
│  │ Rewriting│  │ [Title]  │  │ [Title]  │  │ [Title]  │ │
│  │ Your Self│  │          │  │          │  │          │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘ │
│       │             │             │             │        │
│       └─────────────┴──────┬──────┴─────────────┘        │
│                            │                             │
│                    Cross-Promotion                       │
│                    Shared Audience                       │
│                    Bundle Offers                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## New Book Template Prompt

Use this when creating a landing page for a new book in the series:

```
I'm adding a new book to my series. Please create a landing page using the established architecture.

## New Book Details

### Core Information
- **Title**: [Book Title]
- **Subtitle**: [Tagline/Subtitle]
- **Synthesis**: This book synthesizes [Source 1] and [Source 2]
- **Core Premise**: [One-sentence core idea]
- **Target Audience**: [Primary audience]

### The Three Portals (Core Approaches)
1. **Portal 1**: [Name] - [Brief description]
2. **Portal 2**: [Name] - [Brief description]  
3. **Portal 3**: [Name] - [Brief description]

### The Prism Equivalent
- **Interactive Demo Concept**: [What single exercise demonstrates the core transformation?]
- **Scenario**: [The situation/prompt users will transform]
- **Three Lenses**: 
  1. [Lens 1 name]: [How this lens sees the scenario]
  2. [Lens 2 name]: [How this lens sees it differently]
  3. [Lens 3 name]: [A third perspective]

### Assessment Questions
Provide 5 questions that reveal the reader's current relationship to the topic:
1. [Question 1] with options: [A], [B], [C]
2. [Question 2] with options: [A], [B], [C]
3. [Question 3] with options: [A], [B], [C]
4. [Question 4] with options: [A], [B], [C]
5. [Question 5] with options: [A], [B], [C]

### Result Types
Based on assessment answers, what 3 "types" might someone be?
1. **Type 1**: [Name] - [Description]
2. **Type 2**: [Name] - [Description]
3. **Type 3**: [Name] - [Description]

### Three Reflection Tools
Mini-exercises for the tools section:
1. **Tool 1**: [Name] - [30-60 second exercise description]
2. **Tool 2**: [Name] - [30-60 second exercise description]
3. **Tool 3**: [Name] - [30-60 second exercise description]

### Testimonials (3)
1. "[Quote]" — [Name], [Title]
2. "[Quote]" — [Name], [Title]
3. "[Quote]" — [Name], [Title]

### Pricing Tiers
- Essential ($X): [What's included]
- Complete ($X): [What's included]
- Immersive ($X): [What's included]

### Brand Aesthetics
- **Primary Color**: [Hex code] (e.g., #7b4ba0)
- **Secondary Color**: [Hex code]
- **Accent Color**: [Hex code]
- **Mood**: [e.g., "Mysterious and contemplative"]

## Architecture Requirements
- Single HTML file with embedded CSS/JS
- Particle canvas background (customize colors)
- Same section structure as rewriting-your-self.html
- Mobile-first responsive
- Cross-links to other books in series
- Unified email capture (same list, tagged by book)

## Output
Create the complete HTML file at: landings/books/[book-slug].html
```

---

## Brand Consistency Elements

When scaling to new books, maintain these constants:

### Typography
```css
--serif: 'Playfair Display', Georgia, serif;
--sans: 'Source Sans 3', -apple-system, sans-serif;
```

### Layout Structure
1. Navigation (fixed, minimal)
2. Hero (full viewport, badge + title + CTA)
3. Interactive Demo (Prism equivalent)
4. Assessment (5 questions, results)
5. Three Portals (core approaches)
6. Social Proof (3 testimonials)
7. Offer Section (3 tiers)
8. Reflection Tools (3 mini-exercises)
9. Footer

### Animation Patterns
- `fadeInUp` for hero elements
- `float` for scroll indicator
- Particle canvas for atmosphere
- IntersectionObserver for scroll reveals

### Conversion Elements
- Email capture modal (reusable)
- Multi-tier pricing cards
- "Featured" badge on middle tier
- Urgency badges (launch special)

---

## Cross-Promotion Integration

### In Each Book Landing Page

Add this section between Social Proof and Offer:

```html
<!-- Cross-Promotion Section -->
<section class="series-section">
    <div class="section-header">
        <span class="section-label">The Series</span>
        <h2 class="section-title">Complete Your Transformation</h2>
    </div>
    
    <div class="series-grid">
        <a href="/landings/books/rewriting-your-self.html" class="series-card current">
            <span class="series-badge">You're Here</span>
            <h3>Rewriting Your Self</h3>
            <p>Narrative Identity + NLP</p>
        </a>
        <a href="/landings/books/[book-2-slug].html" class="series-card">
            <h3>[Book 2 Title]</h3>
            <p>[Book 2 Synthesis]</p>
        </a>
        <a href="/landings/books/[book-3-slug].html" class="series-card">
            <h3>[Book 3 Title]</h3>
            <p>[Book 3 Synthesis]</p>
        </a>
    </div>
</section>
```

### Bundle Offers

When you have 2+ books, add bundle pricing:

```javascript
const bundles = [
    {
        name: "The Transformation Duo",
        books: ["rewriting-your-self", "book-2-slug"],
        regularPrice: 54,
        bundlePrice: 44,
        savings: 10
    },
    {
        name: "The Complete Library",
        books: ["all"],
        regularPrice: 81,
        bundlePrice: 59,
        savings: 22
    }
];
```

---

## Color Palette Library

Pre-designed palettes for different book themes:

### Psychology/Mind (Purple-Teal)
```css
--accent-primary: #7b4ba0;
--accent-secondary: #2d8b9a;
--accent-gold: #c9a227;
```

### Business/Strategy (Navy-Gold)
```css
--accent-primary: #1a365d;
--accent-secondary: #c9a227;
--accent-tertiary: #2d5a3e;
```

### Creativity/Art (Rose-Coral)
```css
--accent-primary: #9a4055;
--accent-secondary: #e07a8f;
--accent-tertiary: #f4c4b5;
```

### Wellness/Health (Teal-Green)
```css
--accent-primary: #2d8b9a;
--accent-secondary: #2d5a3e;
--accent-tertiary: #c9d4a9;
```

### Philosophy/Wisdom (Deep Blue-Silver)
```css
--accent-primary: #1e3a5f;
--accent-secondary: #8b98a8;
--accent-tertiary: #c9a227;
```

### Technology/Future (Electric-Cyan)
```css
--accent-primary: #0d47a1;
--accent-secondary: #00bcd4;
--accent-tertiary: #7b4ba0;
```

---

## File Naming Convention

```
landings/books/
├── _prompts/
│   ├── evolution-prompt.md
│   ├── series-scaler.md
│   ├── tool-generator.md
│   ├── conversion-optimizer.md
│   └── integration-guide.md
├── rewriting-your-self.html
├── [book-2-slug].html
├── [book-3-slug].html
└── index.html (series hub page)
```

---

## Series Hub Page

When you have 3+ books, create a hub:

```
Create a series hub page at landings/books/index.html that:
- Displays all books in an elegant grid
- Shows each book's core transformation
- Highlights the synthesis for each
- Offers bundle pricing
- Includes email capture for series updates
- Uses the same design language as individual book pages
```

---

## Analytics Tagging

For each new book, implement consistent tracking:

```javascript
// Unified tracking events
const trackEvent = (category, action, label) => {
    // Replace with your analytics provider
    console.log(`Track: ${category} / ${action} / ${label}`);
    
    // Example for Google Analytics 4:
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
};

// Standard events for all book pages:
// - page_view (on load)
// - prism_interaction (on toggle click)
// - assessment_start (on first question)
// - assessment_complete (on results)
// - tool_complete (on each tool completion)
// - offer_view (on scroll to offer section)
// - offer_click (on button click, with tier)
// - email_capture (on form submit)
```

---

## Scaling Checklist

When adding a new book:

- [ ] Core content defined (title, synthesis, portals)
- [ ] Interactive demo concept designed
- [ ] Assessment questions written
- [ ] Reflection tools designed
- [ ] Testimonials gathered
- [ ] Pricing tiers set
- [ ] Color palette chosen
- [ ] HTML file created
- [ ] Cross-promotion added to existing books
- [ ] Bundle offers updated
- [ ] Analytics tagging verified
- [ ] Mobile testing complete
- [ ] SEO meta tags set
- [ ] Launch announcement drafted

---

## Future Scaling: The Platform Vision

As the book series grows, consider:

1. **Shared Tools Library**
   - Extract reflection tools to reusable components
   - Create a tools hub page
   - Allow tool embedding on any book page

2. **Reader Portal**
   - Unified login for all book purchasers
   - Progress tracking across books
   - Saved assessment results
   - Community features

3. **API Integration**
   - Email provider integration
   - Payment processing
   - Analytics dashboard
   - A/B testing framework

4. **Mobile Apps**
   - Book-specific companion apps
   - Tools as mobile experiences
   - Push notifications for transformation reminders

---

## Example: Scaling to Book 2

Imagine Book 2: "Mastering Your Inner Voices"
- Synthesis: Internal Family Systems + Voice Dialogue

```
The landing page would feature:

1. **The Voice Arena** (Prism equivalent)
   - User names an inner conflict
   - Toggle between 3 voice perspectives
   - See how the same situation looks to different parts

2. **Assessment: Your Inner Council**
   - 5 questions about internal dialogue patterns
   - Results: Harmonized / In Conflict / Dominated

3. **Three Portals**
   - The Exiles (hidden parts)
   - The Managers (control parts)
   - The Firefighters (reactive parts)

4. **Reflection Tools**
   - "Name Your Voices" (quick mapping)
   - "The Voice Interview" (one question to a part)
   - "Council Vote" (poll your parts on a decision)
```

This maintains the architecture while adapting to new content.

