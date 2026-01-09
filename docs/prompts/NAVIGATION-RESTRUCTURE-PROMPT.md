# SELF Framework — Navigation & Routing Restructure

> **Mission:** Unify navigation across all sections while preserving each section's identity. Make every page discoverable from any entry point.

---

## Executive Summary

| What           | Detail                                      |
| -------------- | ------------------------------------------- |
| **Scope**      | 4 sections, 200+ pages, 1 vercel.json       |
| **Approach**   | Additive enhancement (don't break existing) |
| **Time**       | 6 phases, pause for review between each     |
| **Risk Level** | Medium (production site, many pages)        |

---

## Current State

```
self-app/
├── self-discovery-app/     # Main entry at /
│   ├── index.html          # Hub with 3 prompt suites
│   ├── self-extraction/
│   ├── reflection/
│   └── healing/
│
├── landings/               # Showcase hub (164+ pages)
│   ├── index.html          # Main SELF showcase
│   ├── showcases/          # masterpieces/, revelations/, self-variants/
│   ├── products/           # transcendence/, pro-pwas/, cursor-cycles/, etc.
│   ├── product-hunt/       # 23 micro-SaaS ideas
│   ├── perspectives/       # 5 abstract explorations
│   ├── blueprints/         # 81 mobile app ideas (MD)
│   ├── docs/               # Documentation pages
│   └── ideation-engine/    # Interactive tool
│
├── books/                  # Synthesis Universe
│   ├── _hub/index.html     # Book collection hub
│   ├── 01-transition-rite/
│   ├── 02-synthesis-starter/
│   └── ideation-engine/
│
└── vercel.json             # Currently only handles self-discovery-app
```

### Problems to Solve

1. **Incomplete Routing** — vercel.json has 4 routes; we need 50+
2. **Siloed Navigation** — Each section has its own nav with no cross-linking
3. **No Discovery Path** — Users can't find the full ecosystem
4. **Inconsistent URLs** — Mix of trailing slashes, nested paths

---

## Phase 1: Route Audit

**Goal:** Document every accessible route before changing anything.

### Task

Scan all directories for `index.html` files and create a complete route registry.

```bash
# Run from project root
find . -name "index.html" -not -path "*/node_modules/*" | sort > docs/all-routes.txt
```

### Deliverable: `docs/ROUTE-REGISTRY.md`

```markdown
# SELF Route Registry

Generated: [DATE]
Total Routes: [COUNT]

## Self-Discovery App (/)

| Route              | File                                            | Status    |
| ------------------ | ----------------------------------------------- | --------- |
| `/`                | `self-discovery-app/index.html`                 | ✅ Active |
| `/self-extraction` | `self-discovery-app/self-extraction/index.html` | ✅ Active |
| `/reflection`      | `self-discovery-app/reflection/index.html`      | ✅ Active |
| `/healing`         | `self-discovery-app/healing/index.html`         | ✅ Active |

## Landings (/explore)

[... list all 164+ routes ...]

## Books (/books)

[... list all book routes ...]
```

### Verification

- [ ] Every index.html is documented
- [ ] File paths are accurate
- [ ] No duplicates

**⏸️ PAUSE: Review route registry before proceeding**

---

## Phase 2: URL Architecture Design

**Goal:** Design the complete URL structure before implementing.

### Design Principles

1. **Clean URLs** — No `.html` extensions, no trailing slashes in links
2. **Logical Hierarchy** — URLs reflect content organization
3. **Short Paths** — Top-level shortcuts for important sections
4. **Backward Compatible** — Existing links continue to work

### Proposed URL Structure

```
/                           → Self-Discovery hub (primary entry)
/self-extraction            → Prompt suite
/reflection                 → Prompt suite
/healing                    → Prompt suite

/explore                    → Landings hub (SELF showcase)
/explore/masterpieces       → 25 masterpieces collection
/explore/masterpieces/:id   → Individual masterpiece
/explore/revelations        → 10 revelations collection
/explore/products           → Product catalog
/explore/products/:name     → Individual product
/explore/ideas              → 81 app ideas
/explore/perspectives       → 5 perspectives

/books                      → Synthesis Universe hub
/books/:id                  → Individual book reader

# Shortcuts (marketing-friendly)
/transcendence              → /explore/products/transcendence
/masterpieces               → /explore/masterpieces
/ideation                   → /explore/ideation-engine
```

### Deliverable: Update this section with your chosen structure

**⏸️ PAUSE: Confirm URL structure before implementing**

---

## Phase 3: vercel.json Implementation

**Goal:** Implement all routes in vercel.json.

### Complete vercel.json

```json
{
  "rewrites": [
    {
      "source": "/assets/:path*",
      "destination": "/self-discovery-app/assets/:path*"
    },

    { "source": "/", "destination": "/self-discovery-app/index.html" },
    {
      "source": "/self-extraction",
      "destination": "/self-discovery-app/self-extraction/index.html"
    },
    {
      "source": "/self-extraction/",
      "destination": "/self-discovery-app/self-extraction/index.html"
    },
    {
      "source": "/reflection",
      "destination": "/self-discovery-app/reflection/index.html"
    },
    {
      "source": "/reflection/",
      "destination": "/self-discovery-app/reflection/index.html"
    },
    {
      "source": "/healing",
      "destination": "/self-discovery-app/healing/index.html"
    },
    {
      "source": "/healing/",
      "destination": "/self-discovery-app/healing/index.html"
    },

    { "source": "/explore", "destination": "/landings/index.html" },
    { "source": "/explore/", "destination": "/landings/index.html" },
    {
      "source": "/explore/masterpieces",
      "destination": "/landings/showcases/masterpieces/index.html"
    },
    {
      "source": "/explore/masterpieces/",
      "destination": "/landings/showcases/masterpieces/index.html"
    },
    {
      "source": "/explore/revelations",
      "destination": "/landings/showcases/revelations/index.html"
    },
    {
      "source": "/explore/self-variants",
      "destination": "/landings/showcases/self-variants/index.html"
    },
    {
      "source": "/explore/perspectives",
      "destination": "/landings/perspectives/index.html"
    },
    {
      "source": "/explore/product-hunt",
      "destination": "/landings/product-hunt/index.html"
    },
    {
      "source": "/explore/ideas",
      "destination": "/landings/blueprints/mobile-apps/index.html"
    },
    {
      "source": "/explore/ideation-engine",
      "destination": "/landings/ideation-engine/index.html"
    },

    {
      "source": "/explore/products/transcendence",
      "destination": "/landings/products/transcendence/index.html"
    },
    {
      "source": "/explore/products/pro-pwas",
      "destination": "/landings/products/pro-pwas/index.html"
    },
    {
      "source": "/explore/products/cursor-cycles",
      "destination": "/landings/products/cursor-cycles/index.html"
    },
    {
      "source": "/explore/products/carousel-generator",
      "destination": "/landings/products/carousel-generator/index.html"
    },
    {
      "source": "/explore/products/evolved-carousels",
      "destination": "/landings/products/evolved-carousels/index.html"
    },
    {
      "source": "/explore/products/aurum",
      "destination": "/landings/products/aurum/index.html"
    },

    {
      "source": "/explore/docs/self",
      "destination": "/landings/docs/self/index.html"
    },
    {
      "source": "/explore/docs/self-extraction",
      "destination": "/landings/docs/self-extraction/index.html"
    },
    {
      "source": "/explore/docs/self-command-center",
      "destination": "/landings/docs/self-command-center/index.html"
    },

    { "source": "/books", "destination": "/books/_hub/index.html" },
    { "source": "/books/", "destination": "/books/_hub/index.html" },
    {
      "source": "/books/transition-rite",
      "destination": "/books/01-transition-rite/index.html"
    },
    {
      "source": "/books/synthesis-starter",
      "destination": "/books/02-synthesis-starter/index.html"
    },
    {
      "source": "/books/ideation-engine",
      "destination": "/books/ideation-engine/index.html"
    },

    {
      "source": "/transcendence",
      "destination": "/landings/products/transcendence/index.html"
    },
    {
      "source": "/masterpieces",
      "destination": "/landings/showcases/masterpieces/index.html"
    },
    {
      "source": "/ideation",
      "destination": "/landings/ideation-engine/index.html"
    },

    { "source": "/landings/:path*", "destination": "/landings/:path*" },
    { "source": "/books/:path*", "destination": "/books/:path*" }
  ],
  "trailingSlash": false
}
```

### Verification

```bash
# Test locally before deploying
# Start dev server
npm run dev

# Test key routes (in another terminal)
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/explore
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/books
```

**⏸️ PAUSE: Test all routes locally before proceeding**

---

## Phase 4: Bridge Navigation Component

**Goal:** Create an additive navigation layer that enhances (not replaces) existing navs.

### Concept: The Bridge Bar

A minimal floating bar that appears on all pages, providing quick access to other sections. It supplements existing navigation rather than replacing it.

### File: `landings/_shared/js/bridge-nav.js`

```javascript
/**
 * SELF Bridge Navigation
 * Adds cross-section navigation to any page without modifying existing nav
 */
(function () {
  "use strict";

  const SECTIONS = [
    {
      id: "discovery",
      name: "Self Discovery",
      path: "/",
      icon: "✦",
      color: "#d4af37",
    },
    {
      id: "explore",
      name: "Explore",
      path: "/explore",
      icon: "◆",
      color: "#8b5cf6",
    },
    {
      id: "books",
      name: "Books",
      path: "/books",
      icon: "📚",
      color: "#d4a574",
    },
    {
      id: "transcendence",
      name: "Transcendence",
      path: "/transcendence",
      icon: "∞",
      color: "#14b8a6",
    },
  ];

  function getCurrentSection() {
    const path = window.location.pathname;
    if (
      path === "/" ||
      path.startsWith("/self-") ||
      path.startsWith("/reflection") ||
      path.startsWith("/healing")
    ) {
      return "discovery";
    }
    if (path.startsWith("/books")) return "books";
    if (path.startsWith("/transcendence")) return "explore";
    return "explore";
  }

  function createBridgeNav() {
    const current = getCurrentSection();

    const nav = document.createElement("nav");
    nav.className = "self-bridge-nav";
    nav.setAttribute("aria-label", "Section navigation");

    nav.innerHTML = `
      <div class="bridge-nav-inner">
        <button class="bridge-nav-toggle" aria-label="Toggle section navigation" aria-expanded="false">
          <span class="bridge-nav-icon">☰</span>
          <span class="bridge-nav-label">SELF</span>
        </button>
        <div class="bridge-nav-sections" role="menu">
          ${SECTIONS.map(
            (s) => `
            <a href="${s.path}" 
               class="bridge-nav-section ${s.id === current ? "active" : ""}"
               style="--section-color: ${s.color}"
               role="menuitem">
              <span class="bridge-section-icon">${s.icon}</span>
              <span class="bridge-section-name">${s.name}</span>
            </a>
          `
          ).join("")}
        </div>
      </div>
    `;

    document.body.appendChild(nav);

    // Toggle behavior
    const toggle = nav.querySelector(".bridge-nav-toggle");
    const sections = nav.querySelector(".bridge-nav-sections");

    toggle.addEventListener("click", () => {
      const isOpen = sections.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        sections.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        sections.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Initialize when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createBridgeNav);
  } else {
    createBridgeNav();
  }
})();
```

### File: `landings/_shared/css/bridge-nav.css`

```css
/* SELF Bridge Navigation */
.self-bridge-nav {
  --bridge-bg: rgba(10, 10, 14, 0.92);
  --bridge-border: rgba(255, 255, 255, 0.08);
  --bridge-text: rgba(255, 255, 255, 0.7);
  --bridge-text-active: rgba(255, 255, 255, 1);

  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui,
    sans-serif;
}

.bridge-nav-inner {
  position: relative;
}

.bridge-nav-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--bridge-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--bridge-border);
  border-radius: 100px;
  color: var(--bridge-text);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bridge-nav-toggle:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--bridge-text-active);
}

.bridge-nav-icon {
  font-size: 1rem;
}

.bridge-nav-sections {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: var(--bridge-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--bridge-border);
  border-radius: 16px;
  min-width: 180px;
  transition: all 0.2s ease;
}

.bridge-nav-sections.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
}

.bridge-nav-section {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: var(--bridge-text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s ease;
}

.bridge-nav-section:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--bridge-text-active);
}

.bridge-nav-section.active {
  background: rgba(255, 255, 255, 0.08);
  color: var(--section-color);
}

.bridge-section-icon {
  font-size: 1.1rem;
  width: 24px;
  text-align: center;
}

/* Mobile adjustments */
@media (max-width: 480px) {
  .self-bridge-nav {
    bottom: 16px;
    left: 16px;
    right: 16px;
    transform: none;
  }

  .bridge-nav-toggle {
    width: 100%;
    justify-content: center;
  }

  .bridge-nav-sections {
    left: 0;
    right: 0;
    transform: scale(0.95);
    width: auto;
  }

  .bridge-nav-sections.open {
    transform: scale(1);
  }
}
```

### Integration Script

Add to pages that should have the bridge nav:

```html
<!-- Before </body> -->
<link rel="stylesheet" href="/_shared/css/bridge-nav.css" />
<script src="/_shared/js/bridge-nav.js"></script>
```

**⏸️ PAUSE: Test bridge nav on a few pages before mass deployment**

---

## Phase 5: Section Integration

**Goal:** Add bridge nav and cross-links to each section.

### 5.1 Self-Discovery App

Update `self-discovery-app/index.html`:

```html
<!-- Add before </body> -->
<link rel="stylesheet" href="/assets/bridge-nav.css" />
<script src="/assets/bridge-nav.js"></script>
```

Also add a footer section with exploration links:

```html
<section class="explore-more">
  <p class="explore-label">Keep Exploring</p>
  <div class="explore-links">
    <a href="/explore" class="explore-link">
      <span class="explore-icon">◆</span>
      <span>164 Experiences</span>
    </a>
    <a href="/books" class="explore-link">
      <span class="explore-icon">📚</span>
      <span>Read the Books</span>
    </a>
  </div>
</section>
```

### 5.2 Landings Hub

Already has comprehensive navigation. Add bridge nav script only:

```html
<link rel="stylesheet" href="_shared/css/bridge-nav.css" />
<script src="_shared/js/bridge-nav.js"></script>
```

### 5.3 Books Hub

Update `books/_hub/index.html`:

```html
<link rel="stylesheet" href="../_shared/css/bridge-nav.css" />
<script src="../_shared/js/bridge-nav.js"></script>
```

### Batch Update Script

```bash
#!/bin/bash
# Add bridge nav to all index.html files

BRIDGE_CSS='<link rel="stylesheet" href="/_shared/css/bridge-nav.css">'
BRIDGE_JS='<script src="/_shared/js/bridge-nav.js"></script>'

# Find all index.html files and add before </body>
find landings -name "index.html" -exec sed -i '' \
  "s|</body>|${BRIDGE_CSS}\n${BRIDGE_JS}\n</body>|" {} \;
```

**⏸️ PAUSE: Verify integration on sample pages before batch update**

---

## Phase 6: Verification & Cleanup

### Checklist

```markdown
## Route Verification

- [ ] `/` loads self-discovery hub
- [ ] `/self-extraction` loads prompt suite
- [ ] `/reflection` loads prompt suite
- [ ] `/healing` loads prompt suite
- [ ] `/explore` loads landings hub
- [ ] `/explore/masterpieces` loads collection
- [ ] `/books` loads book hub
- [ ] `/transcendence` redirects correctly

## Navigation Verification

- [ ] Bridge nav appears on all pages
- [ ] Current section is highlighted
- [ ] All nav links work
- [ ] Mobile toggle works
- [ ] Escape closes nav
- [ ] Outside click closes nav

## Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

## Performance

- [ ] Bridge nav CSS < 2KB
- [ ] Bridge nav JS < 3KB
- [ ] No layout shift on load
- [ ] No console errors
```

### Rollback Plan

If issues arise:

1. **Revert vercel.json:**

   ```bash
   git checkout HEAD~1 -- vercel.json
   ```

2. **Remove bridge nav from pages:**

   ```bash
   find landings -name "index.html" -exec sed -i '' \
     '/bridge-nav/d' {} \;
   ```

3. **Redeploy:**
   ```bash
   vercel --prod
   ```

---

## Success Metrics

| Metric                              | Before  | After     |
| ----------------------------------- | ------- | --------- |
| Routes in vercel.json               | 4       | 50+       |
| Pages with cross-nav                | 0       | 200+      |
| Sections discoverable from any page | 1       | 4         |
| User path to any content            | Complex | ≤2 clicks |

---

## Technical Notes

### Constraints

- **No build step** — All HTML/CSS/JS is static
- **No frameworks** — Vanilla JS only
- **Preserve existing** — Enhance, don't replace
- **Incremental** — Each phase is independently testable

### File Locations

```
landings/_shared/
├── css/
│   ├── bridge-nav.css    # NEW: Bridge navigation styles
│   └── ... (existing)
└── js/
    ├── bridge-nav.js     # NEW: Bridge navigation logic
    └── ... (existing)

self-discovery-app/assets/
├── bridge-nav.css        # COPY: For self-discovery section
└── bridge-nav.js         # COPY: For self-discovery section

docs/
├── ROUTE-REGISTRY.md     # NEW: Complete route documentation
└── prompts/
    └── NAVIGATION-RESTRUCTURE-PROMPT.md  # THIS FILE
```

---

## Execution Command

When ready to execute this restructuring:

```
Execute the navigation restructuring prompt in docs/prompts/NAVIGATION-RESTRUCTURE-PROMPT.md.

Start with Phase 1 (Route Audit). After completing each phase, pause and show me the results before proceeding to the next phase. This is a production system—we need verification at each step.
```

---

_Generated by SELF Council — Architect + Oracle + Critic + Creator + Guardian_
_Version 1.0 | Last Updated: January 2026_
