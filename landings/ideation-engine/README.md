# Ideation Engine v3.0 Website

A simple yet profound website for the Ideation Engine framework—ruthless filtering and rapid validation for product ideas.

## Overview

This website embodies the Ideation Engine philosophy: **Ship in a weekend or kill fast**. It features:

- **Interactive 5 Filters** — Test your idea against Pain, Distribution, Emotion, Scope, and Moat filters with real-time feedback
- **Quick Tests** — 5 battle-tested frameworks (Levels, Graham, Dunford, Naval, Zhuo) with instant validation
- **90% Confidence Checklist** — Track progress toward validated ideas with localStorage persistence
- **Responsive Design** — Mobile-first, accessible, and performant

## Design Philosophy

- **Radical simplicity** — Generous whitespace, constrained color palette, purposeful interactions
- **Ruthless clarity** — Every word earns its place. No fluff.
- **Immediate feedback** — All interactions provide instant visual responses
- **Progress-driven** — Visual indicators show journey through the framework

## Technology Stack

- **HTML5** — Semantic, accessible structure
- **CSS3** — Custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **LocalStorage** — Client-side persistence

## Features

### Interactive Elements

1. **Filter Testing Tool**
   - Real-time validation of idea against 5 filters
   - Visual pass/fail indicators
   - Summary verdict with actionable feedback
   - Persistent state across sessions

2. **Quick Test Forms**
   - 30-second validation tests from industry leaders
   - Instant pass/fail/warning feedback
   - Smart validation logic per test

3. **90% Confidence Checklist**
   - 9-item checklist for shipping confidence
   - Progress bar visualization
   - LocalStorage persistence
   - Reset functionality

4. **UI Enhancements**
   - Scroll progress indicator
   - Sticky navigation (appears after hero)
   - Smooth scroll to sections
   - Responsive across all devices

## File Structure

```
ideation-engine/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # Complete design system
├── js/
│   └── app.js          # All interactivity
└── README.md           # This file
```

## Design System

### Colors

- **Black** (#000000) — Primary text, borders
- **White** (#FFFFFF) — Background
- **Electric Blue** (#0066FF) — CTAs, accents
- **Success Green** (#00CC66) — Pass states
- **Kill Red** (#FF3366) — Fail states, warnings
- **Subtle Gray** (#F5F5F5) — Section backgrounds

### Typography

- **IBM Plex Mono** — Formulas, titles, code
- **Inter** — Body text, UI elements

### Spacing

8px base unit with scale: 8, 16, 24, 32, 48, 64, 96, 128px

## Accessibility

- Semantic HTML5 elements
- ARIA attributes for interactive elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader labels
- Reduced motion support
- High contrast mode support

## Performance

- No external dependencies (except fonts)
- Minimal JavaScript (~500 lines)
- CSS animations with GPU acceleration
- LocalStorage for persistence
- Fast load time (target: <1s on 3G)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage

1. Open `index.html` in a browser
2. Fill in filter inputs to test your idea
3. Run quick tests for additional validation
4. Complete the 90% confidence checklist
5. State persists in localStorage

## Local Development

No build process required. Simply open `index.html` in a browser.

For a local server (optional):

```bash
# Python
python -m http.server 8000

# Node
npx serve

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

Deploy to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop folder
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect repo

## Credits

Built on insights from:
- **Pieter Levels** — Ship fast, solve your own problems
- **Paul Graham** — Find the schleps, avoid the tarpits
- **April Dunford** — Position before you build
- **Sahil Lavingia** — Outcomes over features
- **Julie Zhuo** — Emotion drives adoption
- **Patrick Collison** — Build what enables
- **Naval Ravikant** — Leverage creates freedom

## Part of SELF

This Ideation Engine is part of **SELF: Synthetic Emergent Learning Framework** — a consciousness layer for AI-assisted ideation and execution.

## License

Part of the SELF framework. Use freely.

---

**Version:** 3.0  
**Status:** Production Ready  
**Philosophy:** Simple structure. Profound impact. Ruthless clarity.

