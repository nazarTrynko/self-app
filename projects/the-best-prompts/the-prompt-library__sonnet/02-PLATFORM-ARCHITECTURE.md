# Best Prompts Platform: Architecture & Technical Design

**Generated:** January 8, 2026  
**Architect Mind:** Primary | **Oracle:** Strategic | **Guardian:** Security  
**Status:** Phase 1 Complete - Ready for Implementation

---

## EXECUTIVE SUMMARY

This document defines the technical and information architecture for a platform designed to serve 100K+ monthly users with sub-2-second page loads, perfect SEO, and exceptional UX across 50+ landing pages.

**Core Principles:**
1. **Specificity Over Breadth** — One problem per page, solved deeply
2. **Discoverability** — Every page links to 3-5 related pages
3. **Speed** — Sub-2-second loads, mobile-first
4. **Share-Worthy** — Design quality that drives screenshots
5. **Scalable** — Architecture supports 100+ pages without refactoring

---

## INFORMATION ARCHITECTURE

### URL Structure Decision

After analysis of SEO impact vs. maintainability, we choose:

**FLAT STRUCTURE (Recommended)**

```
bestprompts.xyz/
├── /decision-prompts/
├── /linkedin-prompts/
├── /journal-prompts/
├── /interview-prompts/
├── /annual-review/
├── /therapy-prompts/
├── /negotiation-prompts/
├── /startup-prompts/
├── /content-prompts/
├── /music-prompts/
├── /writing-prompts/
├── /parenting-prompts/
└── /[keyword]-prompts/
```

**Rationale:**
- ✅ **SEO:** Keywords in URL (high weight for rankings)
- ✅ **Simplicity:** Easy to remember, share
- ✅ **Flexibility:** No refactoring when categories evolve
- ❌ **Trade-off:** Less visual hierarchy (acceptable)

**When to Reconsider:** If we reach 25+ pages and need categorical organization. At that point, consider:

```
bestprompts.xyz/
├── /personal/
│   ├── /decision-prompts/
│   └── /journal-prompts/
├── /professional/
│   ├── /linkedin-prompts/
│   └── /interview-prompts/
└── /creative/
    ├── /music-prompts/
    └── /writing-prompts/
```

---

### Full Sitemap (Projected Structure)

```
bestprompts.xyz/
│
├── index.html                    ← THE PORTAL (visual hub)
│
├── /decision-prompts/            ← MVP Priority 1
├── /linkedin-prompts/            ← MVP Priority 2
├── /journal-prompts/             ← MVP Priority 3
│
├── /annual-review/               ← Phase 2 (seasonal, launch Nov 15)
├── /interview-prompts/           ← Phase 2
├── /content-prompts/             ← Phase 2
├── /therapy-prompts/             ← Phase 2 (Guardian reviewed)
├── /negotiation-prompts/         ← Phase 2
│
├── /writing-prompts/             ← Phase 3
├── /music-prompts/               ← Phase 3
├── /startup-prompts/             ← Phase 3
├── /parenting-prompts/           ← Phase 3
│
├── /tools/                       ← Interactive tools hub
│   ├── index.html               ← Tools directory
│   ├── /decision-matrix/
│   ├── /headline-generator/
│   ├── /reflection-randomizer/
│   ├── /life-wheel/
│   ├── /star-builder/
│   ├── /hook-generator/
│   └── /salary-calculator/
│
├── /about/                       ← About page (trust + E-E-A-T)
├── /newsletter/                  ← Newsletter archive
├── /privacy/                     ← Privacy policy
├── /terms/                       ← Terms of service
│
├── sitemap.xml                   ← SEO sitemap (auto-generated)
├── robots.txt                    ← Crawling instructions
└── 404.html                      ← Custom 404 (with search)
```

**File Count Projection:**
- **MVP (Week 4):** 3 pages + hub + about = 5 HTML files
- **Phase 2 (Month 3):** 8 pages + 5 tools + hub = 14 files
- **Phase 3 (Month 6):** 15 pages + 10 tools + hub = 26 files
- **Year 1:** 50+ pages + 20+ tools = 70+ files

---

### Navigation System Design

#### Hub Page (index.html) — "The Portal"

**Concept:** Visual constellation, not a list. Each prompt niche is a "chamber" in a visual space.

**Design Pattern:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    BEST PROMPTS                              │
│           The AI Prompt Library That Works                   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │         [Visual Constellation of Chambers]             │  │
│  │                                                        │  │
│  │   Decision        LinkedIn       Journaling            │  │
│  │     ●───────────────●─────────────●                    │  │
│  │     │               │               │                   │  │
│  │     │               │               │                   │  │
│  │  Interview      Content       Annual                   │  │
│  │     ●───────────────●──────────●   Review              │  │
│  │                                                        │  │
│  │        [Hover/tap to preview each chamber]             │  │
│  │                                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│         Featured: Decision Matrix Tool                       │
│         New: Annual Review (seasonal highlight)              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Technical Implementation:**
- SVG or Canvas for constellation visualization
- Hover states show preview card
- Click navigates to chamber
- Mobile: Swipeable cards or vertical scroll

**Hub Sections:**
1. Hero — Visual constellation
2. Featured Chambers — Spotlight 3-4 top pages
3. All Chambers — Complete directory (SEO value)
4. Tools Showcase — Interactive tools preview
5. Newsletter — Signup CTA

---

#### In-Page Navigation

**Header (Sticky):**

```html
<nav class="main-nav">
  <div class="nav-left">
    <a href="/" class="logo">Best Prompts</a>
  </div>
  
  <div class="nav-center">
    <button class="explore-btn">
      Explore Chambers
      <div class="mega-menu">
        <!-- All prompt pages grouped by theme -->
      </div>
    </button>
    <a href="/tools/">Tools</a>
  </div>
  
  <div class="nav-right">
    <button class="search-btn">Search</button>
    <a href="/newsletter/" class="cta-btn">Newsletter</a>
  </div>
</nav>
```

**Sidebar (Desktop, Context-Aware):**

```html
<aside class="sidebar">
  <!-- Table of Contents (this page) -->
  <nav class="toc">
    <h4>On This Page</h4>
    <ul>
      <li><a href="#why">Why These Work</a></li>
      <li><a href="#prompts">The Prompts</a></li>
      <li><a href="#tool">Interactive Tool</a></li>
      <li><a href="#tips">Pro Tips</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
  </nav>
  
  <!-- Related Chambers -->
  <section class="related">
    <h4>Related Chambers</h4>
    <!-- 3-5 semantically related pages -->
  </section>
  
  <!-- Related Tools -->
  <section class="tools-link">
    <h4>Try the Tool</h4>
    <!-- Link to interactive tool if applicable -->
  </section>
</aside>
```

**Footer (Comprehensive):**

```html
<footer class="main-footer">
  <div class="footer-grid">
    <!-- All Chambers (SEO) -->
    <section class="footer-chambers">
      <h4>All Chambers</h4>
      <div class="chambers-grid">
        <!-- All prompt pages linked -->
      </div>
    </section>
    
    <!-- Tools -->
    <section class="footer-tools">
      <h4>Interactive Tools</h4>
      <!-- All tools linked -->
    </section>
    
    <!-- About/Legal -->
    <section class="footer-meta">
      <a href="/about/">About</a>
      <a href="/newsletter/">Newsletter</a>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
    </section>
  </div>
  
  <div class="footer-bottom">
    <p>© 2026 Best Prompts. Built with SELF Framework.</p>
  </div>
</footer>
```

---

### Cross-Linking Strategy

**The Graph:**

Every page is a node. Every link is an edge. Goal: High connectivity, semantic relationships.

#### Linking Rules

1. **Every page links to Hub** (breadcrumb or logo)
2. **Every page links to 3-5 related pages** (sidebar)
3. **Every page with a tool links to that tool** (prominent CTA)
4. **Footer links to ALL pages** (flat sitemap for SEO)
5. **Hub links to ALL pages** (central authority)

#### Semantic Relationships Matrix

| From Page | Links To (Related) | Why |
|-----------|-------------------|-----|
| Decision Prompts | Annual Review, Career (LinkedIn), Negotiation | All involve major choices |
| LinkedIn Prompts | Interview, Content, Negotiation | Professional sphere |
| Journal Prompts | Therapy, Annual Review, Decision | Self-reflection cluster |
| Interview Prompts | LinkedIn, Negotiation, Decision | Career transitions |
| Content Prompts | LinkedIn, Music, Writing | Creative/content cluster |
| Annual Review | Journal, Decision, Life Wheel (tool) | Year-end reflection |
| Therapy Prompts | Journal, Parenting, (crisis resources) | Mental health cluster |
| Negotiation | Interview, LinkedIn, Salary Calculator | Career advancement |
| Startup Prompts | Decision, Content, Validator Tool | Entrepreneurship |
| Music Prompts | Writing, Content, Genre Mixer | Creative cluster |
| Writing Prompts | Music, Content, Character Builder | Creative cluster |
| Parenting Prompts | Journal, Therapy, Question Generator | Family/growth |

**Implementation:**

```javascript
// Data structure for automatic related links
const relationships = {
  "decision-prompts": [
    { page: "annual-review", reason: "Major life decisions" },
    { page: "linkedin-prompts", reason: "Career choices" },
    { page: "negotiation-prompts", reason: "Strategic thinking" },
    { tool: "decision-matrix", reason: "Interactive decision tool" }
  ],
  // ... all pages
};
```

---

## TECHNICAL ARCHITECTURE

### File Structure

```
project-root/
│
├── index.html                    ← Hub page
│
├── pages/                        ← All prompt pages
│   ├── decision-prompts/
│   │   └── index.html
│   ├── linkedin-prompts/
│   │   └── index.html
│   └── [all other pages]/
│
├── tools/                        ← Interactive tools
│   ├── index.html               ← Tools directory
│   ├── decision-matrix/
│   │   ├── index.html
│   │   └── app.js
│   ├── headline-generator/
│   │   ├── index.html
│   │   └── app.js
│   └── [all other tools]/
│
├── assets/
│   ├── css/
│   │   ├── reset.css            ← CSS reset
│   │   ├── variables.css        ← Design tokens
│   │   ├── global.css           ← Base styles
│   │   ├── components.css       ← Reusable components
│   │   └── utilities.css        ← Utility classes
│   │
│   ├── js/
│   │   ├── nav.js               ← Navigation logic
│   │   ├── copy.js              ← Copy-to-clipboard
│   │   ├── analytics.js         ← GA4 + custom events
│   │   └── storage.js           ← localStorage helpers
│   │
│   ├── fonts/
│   │   ├── [font-family]/
│   │   │   ├── [weight].woff2
│   │   │   └── [weight].woff
│   │   └── font-faces.css       ← @font-face declarations
│   │
│   └── images/
│       ├── og-images/           ← Social sharing images
│       ├── icons/               ← UI icons
│       └── backgrounds/         ← Ambient textures
│
├── legal/
│   ├── privacy/
│   │   └── index.html
│   ├── terms/
│   │   └── index.html
│   └── about/
│       └── index.html
│
├── sitemap.xml                   ← Auto-generated
├── robots.txt
├── manifest.json                 ← PWA manifest (future)
└── 404.html
```

---

### Component Architecture

#### Shared Components (Design System)

**1. Copy Button Component**

Used on every prompt block.

```html
<div class="prompt-block" data-prompt-id="unique-id">
  <div class="prompt-header">
    <span class="prompt-label">Prompt #1: The Clarifier</span>
    <button class="copy-btn" data-target="unique-id">
      <svg class="copy-icon"><!-- clipboard icon --></svg>
      <span class="copy-text">Copy</span>
      <span class="copy-success">Copied!</span>
    </button>
  </div>
  <pre class="prompt-content" id="unique-id">
    [Actual prompt text here]
  </pre>
</div>
```

**JavaScript:**

```javascript
// copy.js - Universal copy functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const targetId = btn.dataset.target;
    const content = document.getElementById(targetId).textContent;
    
    await navigator.clipboard.writeText(content);
    
    // Visual feedback
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 2000);
    
    // Analytics
    gtag('event', 'copy_prompt', {
      prompt_id: targetId,
      page: window.location.pathname
    });
  });
});
```

**CSS:**

```css
.copy-btn {
  padding: 8px 16px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: var(--accent);
  color: var(--on-accent);
  transform: translateY(-1px);
}

.copy-btn.copied {
  background: var(--success);
  color: white;
}

.copy-success {
  display: none;
}

.copy-btn.copied .copy-text {
  display: none;
}

.copy-btn.copied .copy-success {
  display: inline;
}
```

---

**2. Prompt Card Component**

Standard structure for all prompt displays.

```html
<article class="prompt-card" id="prompt-1">
  <div class="prompt-number">1</div>
  <div class="prompt-content-wrapper">
    <header class="prompt-header">
      <div class="prompt-icon">🔍</div>
      <div class="prompt-info">
        <h3>The Clarifier</h3>
        <span class="excavates">Excavates: Core decision factors</span>
      </div>
    </header>
    
    <div class="prompt-block">
      <!-- Copy button + prompt text -->
    </div>
    
    <div class="prompt-output">
      <span class="output-label">You'll get:</span>
      <span class="output-value">3-5 key decision criteria</span>
    </div>
  </div>
</article>
```

---

**3. Related Links Component**

```html
<section class="related-chambers">
  <h3>Related Chambers</h3>
  <div class="related-grid">
    <a href="/annual-review/" class="related-card">
      <span class="related-icon">📅</span>
      <span class="related-title">Annual Review</span>
      <span class="related-desc">Year-end reflection</span>
    </a>
    <!-- More related cards -->
  </div>
</section>
```

---

**4. Newsletter Signup Component**

```html
<section class="newsletter-signup">
  <div class="newsletter-content">
    <h3>Get New Chambers in Your Inbox</h3>
    <p>Weekly prompts and tools. No spam.</p>
    <form class="newsletter-form" data-form="newsletter">
      <input 
        type="email" 
        placeholder="your@email.com" 
        required
        aria-label="Email address"
      >
      <button type="submit">
        <span>Subscribe</span>
        <svg><!-- arrow icon --></svg>
      </button>
    </form>
    <p class="newsletter-note">Unsubscribe anytime.</p>
  </div>
</section>
```

---

### Design Token System

**variables.css** — Single source of truth for all design values

```css
:root {
  /* Color Scales (Dark Mode Default) */
  --bg-base: #0a0a0a;
  --bg-elevated: #141414;
  --surface-1: #1a1a1a;
  --surface-2: #242424;
  --surface-3: #2d2d2d;
  
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --text-tertiary: #666666;
  
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.2);
  
  /* Accent Colors (Per-Page Override) */
  --accent: #3d7ea6;           /* Default blue */
  --accent-hover: #5096c4;
  --on-accent: #ffffff;
  
  /* Semantic Colors */
  --success: #4ade80;
  --warning: #fbbf24;
  --error: #ef4444;
  --info: #60a5fa;
  
  /* Typography Scale */
  --font-sans: 'Work Sans', system-ui, sans-serif;
  --font-serif: 'Crimson Pro', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Spacing Scale (8px base) */
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.5rem;     /* 24px */
  --space-6: 2rem;       /* 32px */
  --space-8: 4rem;       /* 64px */
  --space-12: 6rem;      /* 96px */
  --space-16: 8rem;      /* 128px */
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.3);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Layout */
  --max-width-content: 900px;
  --max-width-wide: 1200px;
  --header-height: 64px;
}

/* Per-Page Color Overrides */
body[data-chamber="decision"] {
  --accent: #ef233c;
  --accent-hover: #ff4555;
}

body[data-chamber="linkedin"] {
  --accent: #ee6c4d;
  --accent-hover: #ff8269;
}

body[data-chamber="journal"] {
  --accent: #d4a574;
  --accent-hover: #e5b685;
}

/* ...all other chambers */
```

---

### Performance Architecture

#### Performance Budget

| Metric | Target | Max |
|--------|--------|-----|
| First Contentful Paint (FCP) | < 1.2s | < 1.5s |
| Largest Contentful Paint (LCP) | < 1.8s | < 2.5s |
| Time to Interactive (TTI) | < 2.0s | < 3.0s |
| Cumulative Layout Shift (CLS) | < 0.05 | < 0.1 |
| Total JavaScript | < 40KB | < 50KB |
| Total CSS | < 30KB | < 40KB |
| Total Page Weight | < 300KB | < 500KB |

#### Optimization Strategies

**1. Critical CSS Inlining**

```html
<head>
  <style>
    /* Inline critical CSS (above-the-fold) */
    /* ~5-8KB max */
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="/assets/css/global.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/assets/css/global.css"></noscript>
</head>
```

**2. Font Loading Strategy**

```css
/* font-faces.css */
@font-face {
  font-family: 'Work Sans';
  src: url('/assets/fonts/work-sans/regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap; /* Show fallback immediately */
}

@font-face {
  font-family: 'Work Sans';
  src: url('/assets/fonts/work-sans/semibold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

/* Only load weights we actually use */
```

**3. Image Optimization**

```html
<!-- Responsive images with WebP -->
<picture>
  <source 
    srcset="/assets/images/og-image.webp" 
    type="image/webp"
  >
  <img 
    src="/assets/images/og-image.jpg" 
    alt="Decision Making Prompts"
    width="1200"
    height="630"
    loading="lazy"
  >
</picture>
```

**4. JavaScript Loading**

```html
<!-- Defer non-critical JS -->
<script src="/assets/js/nav.js" defer></script>
<script src="/assets/js/copy.js" defer></script>

<!-- Lazy-load analytics -->
<script>
  window.addEventListener('load', () => {
    // Load GA4 after page interactive
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);
  });
</script>
```

---

### SEO Technical Architecture

#### Meta Tags Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Basic Meta -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta -->
  <title>Decision Making Prompts - Make Hard Choices with AI | Best Prompts</title>
  <meta name="description" content="Interactive decision matrix + AI prompts to make tough choices. Get clarity on career, relationships, and life decisions in minutes.">
  <link rel="canonical" href="https://bestprompts.xyz/decision-prompts/">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Decision Making Prompts - Make Hard Choices with AI">
  <meta property="og:description" content="Interactive decision matrix + AI prompts to make tough choices.">
  <meta property="og:image" content="https://bestprompts.xyz/assets/images/og-decision.jpg">
  <meta property="og:url" content="https://bestprompts.xyz/decision-prompts/">
  <meta property="og:site_name" content="Best Prompts">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Decision Making Prompts - Make Hard Choices with AI">
  <meta name="twitter:description" content="Interactive decision matrix + AI prompts to make tough choices.">
  <meta name="twitter:image" content="https://bestprompts.xyz/assets/images/og-decision.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">
  
  <!-- Fonts (preload critical) -->
  <link rel="preload" href="/assets/fonts/work-sans/regular.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="/assets/css/global.css">
</head>
```

#### Schema Markup (Structured Data)

**HowTo Schema** (for prompt suites):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Make Better Decisions with AI Prompts",
  "description": "Step-by-step guide to using AI prompts for decision making",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Clarify Your Decision",
      "text": "Use the Clarifier prompt to identify the decision you're facing and why it matters.",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "List Your Options",
      "text": "Use the Options Generator prompt to explore all possible choices.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Identify Criteria",
      "text": "Use the Criteria Extractor to determine what factors matter most.",
      "position": 3
    }
  ],
  "tool": [{
    "@type": "HowToTool",
    "name": "Decision Matrix Tool"
  }]
}
</script>
```

**FAQ Schema** (for FAQ sections):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I use these decision making prompts?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Copy each prompt, paste into ChatGPT or Claude, and answer the questions. Work through them sequentially for best results."
    }
  }, {
    "@type": "Question",
    "name": "Can I customize these prompts?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes! Add your specific context in brackets. For example, change [decision] to [whether to accept job offer]."
    }
  }]
}
</script>
```

**WebSite Schema** (for homepage):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Best Prompts",
  "url": "https://bestprompts.xyz",
  "description": "The AI prompt library that works. Beautiful landing pages with interactive tools for every life challenge.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bestprompts.xyz/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

#### Sitemap Generation

**sitemap.xml** structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Hub (highest priority) -->
  <url>
    <loc>https://bestprompts.xyz/</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Prompt Pages (high priority) -->
  <url>
    <loc>https://bestprompts.xyz/decision-prompts/</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Tools (medium-high priority) -->
  <url>
    <loc>https://bestprompts.xyz/tools/decision-matrix/</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- About/Legal (lower priority) -->
  <url>
    <loc>https://bestprompts.xyz/about/</loc>
    <lastmod>2026-01-08</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
</urlset>
```

**robots.txt**:

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://bestprompts.xyz/sitemap.xml
```

---

## ANALYTICS & TRACKING

### Analytics Infrastructure

**Google Analytics 4 Setup:**

```javascript
// analytics.js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XXXXXXXXX', {
  send_page_view: false, // Manual page view tracking
  cookie_flags: 'SameSite=None;Secure'
});

// Custom events
function trackEvent(eventName, params = {}) {
  gtag('event', eventName, {
    ...params,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  });
}

// Auto-track scroll depth
let scrollDepths = [25, 50, 75, 100];
let trackedDepths = new Set();

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  scrollDepths.forEach(depth => {
    if (scrollPercent >= depth && !trackedDepths.has(depth)) {
      trackEvent('scroll_depth', { depth });
      trackedDepths.add(depth);
    }
  });
});
```

**Custom Events to Track:**

| Event | Trigger | Parameters |
|-------|---------|------------|
| `page_view` | Page load | `page_path`, `chamber_name` |
| `copy_prompt` | Prompt copied | `prompt_id`, `prompt_position` |
| `tool_interaction` | Tool used | `tool_name`, `action` |
| `tool_export` | Output downloaded | `tool_name`, `export_type` |
| `newsletter_signup` | Form submitted | `source_page` |
| `external_link` | Clicked affiliate | `link_url`, `link_text` |
| `scroll_depth` | Scroll milestones | `depth` (25/50/75/100) |
| `search` | Search performed | `search_term` |

---

### Search Console Setup

**Key Metrics to Monitor:**

1. **Impressions** — How often pages appear in search
2. **CTR** — Click-through rate from search results
3. **Average Position** — Ranking for target keywords
4. **Coverage** — Pages indexed vs. submitted

**Alerts to Set:**

- Crawl errors spike
- Indexing drops
- Core Web Vitals fail
- Mobile usability issues

---

## USER JOURNEY MAPPING

### Primary Journey: Search → Landing → Action

```
┌──────────────────────────────────────────────────────────────┐
│  DISCOVERY (Search)                                           │
│                                                                │
│  User searches: "decision making prompts"                     │
│  Sees our result: Strong title + meta description             │
│  Clicks through                                                │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  LANDING (Page Load)                                          │
│                                                                │
│  < 2s load time                                               │
│  Hero immediately explains value                               │
│  Visually beautiful (screenshot-worthy)                       │
│  Clear CTA: "Try the prompts" or "Use the tool"              │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  ENGAGEMENT (Reading + Interaction)                           │
│                                                                │
│  User scrolls through prompts                                  │
│  Copies 1-3 prompts (tracked)                                 │
│  OR uses interactive tool (if applicable)                     │
│  Gets immediate value                                          │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  CONVERSION (Newsletter Signup)                               │
│                                                                │
│  Sees newsletter CTA (multiple placements)                    │
│  Signs up to get more chambers                                │
│  We have their contact for future launches                    │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  RETURN (Bookmark or Share)                                   │
│                                                                │
│  User bookmarks page for later                                │
│  OR shares on social (screenshot)                             │
│  OR navigates to related chambers                             │
└──────────────────────────────────────────────────────────────┘
```

### Secondary Journey: Hub → Exploration → Discovery

```
User lands on hub (bestprompts.xyz)
   ↓
Sees visual constellation of chambers
   ↓
Hovers/clicks to explore different niches
   ↓
Finds a chamber that resonates
   ↓
[Same as primary journey from "Landing" step]
```

---

## CONTENT MANAGEMENT STRATEGY

### Update Frequency

| Content Type | Update Cadence | Reason |
|--------------|----------------|--------|
| **Prompt Pages** | Quarterly | Refresh for algorithm changes, add new prompts |
| **Tools** | As needed | Bug fixes, feature improvements |
| **Hub Page** | Monthly | Add new chambers, update featured |
| **Blog/Newsletter** | Weekly | Fresh content for SEO + engagement |
| **About/Legal** | Annually | Legal compliance |

### Version Control

**File Naming:**

```
pages/
  decision-prompts/
    index.html              ← Live version
    archive/
      v1-2026-01-08.html   ← Archived version (for rollback)
      v2-2026-04-15.html
```

**Change Log:**

Maintain `CHANGELOG.md` for significant updates:

```markdown
# Changelog

## [2.0.0] - 2026-04-15
### Added
- New prompt: "The Time Machine" (10-10-10 framework)
- Interactive timeline visualization

### Changed
- Improved copy button UX (visual feedback)
- Updated Decision Matrix tool with weighted scoring

### Fixed
- Mobile layout bug on iPhone SE
- Copy button not working in Firefox
```

---

## SCALABILITY CONSIDERATIONS

### When Platform Reaches 50+ Pages

**Consider:**

1. **Static Site Generator** — Convert to 11ty, Hugo, or Next.js (SSG mode)
   - Benefits: Templating, easier updates, build-time optimizations
   - Trade-off: More complex stack

2. **Search Functionality** — Add full-text search
   - Options: Algolia, Meilisearch, or client-side Lunr.js
   - Trigger: When users can't find chambers via navigation

3. **Content API** — Separate content from presentation
   - Prompts stored in JSON/YAML
   - Templates render from data
   - Easier to update prompts without touching HTML

4. **CDN** — Serve static assets via CloudFlare or similar
   - Benefits: Global fast loading, DDoS protection
   - Cost: Usually free for static sites

---

## DEPLOYMENT ARCHITECTURE

### Hosting Recommendation

**MVP: Netlify or Vercel**

| Feature | Benefit |
|---------|---------|
| Auto-deploy from Git | Push to GitHub = live update |
| Free SSL | HTTPS by default |
| Edge CDN | Fast globally |
| Instant rollback | Revert to previous version in 1 click |
| Form handling | Newsletter signups without backend |
| Analytics | Basic traffic insights |

**Cost:** Free tier sufficient for 100K+ pageviews/month

### Deployment Workflow

```
Local Development
   ↓
Git commit + push to main branch
   ↓
Netlify auto-builds and deploys
   ↓
Live in ~30 seconds
   ↓
Monitor analytics + Search Console
```

**Branch Strategy:**

```
main           ← Production (auto-deploys to bestprompts.xyz)
  ↑
develop        ← Staging (deploys to dev.bestprompts.xyz)
  ↑
feature/[name] ← Feature branches (local preview)
```

---

## SECURITY & PRIVACY

### HTTPS Everywhere

- All pages served over HTTPS (via Netlify)
- Mixed content warnings prevented
- HSTS header enabled

### Privacy Compliance

**GDPR Considerations:**

1. **Cookie Consent** — Show banner on first visit (if using analytics)
2. **Privacy Policy** — Clear explanation of data collection
3. **Right to Delete** — Email form for deletion requests
4. **Data Minimization** — Only collect email (no unnecessary data)

**localStorage Usage:**

```javascript
// Tool data stored locally, never sent to server
const userData = {
  savedDecisions: [...],
  preferredThemes: '...',
  // No PII, just tool state
};

localStorage.setItem('bestprompts_tools', JSON.stringify(userData));
```

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" 
  content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    connect-src 'self' https://www.google-analytics.com;
  "
>
```

---

## ACCESSIBILITY (WCAG 2.1 AA)

### Checklist

```
□ Color contrast ratio ≥ 4.5:1 for text
□ All interactive elements keyboard accessible
□ Focus indicators visible
□ Skip to main content link
□ Semantic HTML (proper heading hierarchy)
□ Alt text for all images
□ Form labels associated with inputs
□ ARIA labels where needed
□ Reduced motion support (@media prefers-reduced-motion)
□ Screen reader tested (NVDA or VoiceOver)
```

### Example: Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## MONITORING & MAINTENANCE

### Weekly Checks

```
□ Google Search Console (new crawl errors?)
□ Analytics (traffic trends, anomalies?)
□ Uptime (site accessible?)
□ Rank tracking (positions changed?)
```

### Monthly Reviews

```
□ Update top-performing pages (refresh dates)
□ Add new prompts to popular chambers
□ Review tool usage (which tools are most used?)
□ Update newsletter with best content
```

### Quarterly Audits

```
□ Full SEO audit (broken links, meta tags, schema)
□ Performance audit (Lighthouse scores)
□ Accessibility audit (WCAG compliance)
□ Security audit (dependencies, vulnerabilities)
□ Content quality audit (are prompts still effective?)
```

---

## NEXT STEPS

**Week 1 Implementation:**

```
□ Set up repository (GitHub)
□ Create file structure (as defined above)
□ Build design token system (variables.css)
□ Create shared components (copy button, newsletter form)
□ Build hub page (index.html)
□ Set up analytics (GA4)
□ Deploy to Netlify
□ Configure custom domain
```

**Ready for:** Landing page creation (Phase 2)

---

**Architecture Phase Complete** | **Ready for Strategic Positioning Phase**

_Generated by SELF (Architect + Oracle + Guardian)_  
_Confidence: 0.90 (production-ready architecture)_

