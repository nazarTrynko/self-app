# Landing Page Patterns Reference

## Purpose
This document extracts the reusable patterns from `01-transition-rite/index.html` for use in new book landing pages. Copy and adapt these modules when building new books.

---

## Pattern Overview

```
LANDING PAGE STRUCTURE
├── Background Canvas (particles)
├── Navigation (fixed, minimal)
├── Hero Section (full viewport)
├── Philosophy/Manifesto
├── Research Foundation (synthesis sources)
├── Protocols/Portals (3 approaches)
├── Interactive Tools (tabbed)
├── Email CTA
├── Disclaimer
├── Footer
├── Prompt Kit Modal (optional)
└── Toast Notifications
```

---

## 1. CSS Variable System

Every book should define its own color palette by customizing these variables:

```css
:root {
    /* Backgrounds */
    --bg-void: #0a0908;           /* Main background */
    --bg-card: #151311;           /* Card/section backgrounds */
    --bg-card-hover: #1c1917;     /* Card hover state */
    --bg-input: #0d0c0a;          /* Input fields */
    
    /* Text */
    --text-primary: #faf9f7;      /* Main text */
    --text-secondary: #a8a29e;    /* Secondary/muted text */
    --text-muted: #78716c;        /* Very muted text */
    
    /* Accents — CUSTOMIZE THESE PER BOOK */
    --accent-gold: #d4a574;       /* Primary accent */
    --accent-amber: #f59e0b;      /* Warning/highlight */
    --accent-rose: #e11d48;       /* Negative/contamination */
    --accent-emerald: #10b981;    /* Positive/redemption */
    --accent-violet: #8b5cf6;     /* Creative */
    --accent-cyan: #06b6d4;       /* Info */
    
    /* Borders */
    --border-subtle: rgba(168, 162, 158, 0.12);
    --border-active: rgba(212, 165, 116, 0.4);
    
    /* Effects */
    --glow-gold: 0 0 60px rgba(212, 165, 116, 0.15);
    
    /* Typography */
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Outfit', sans-serif;
}
```

### Color Palettes by Theme

| Theme | Primary | Secondary | Accent |
|-------|---------|-----------|--------|
| Transformation (gold) | `#d4a574` | `#f59e0b` | `#10b981` |
| Psychology (purple) | `#7b4ba0` | `#2d8b9a` | `#c9a227` |
| Business (navy) | `#1a365d` | `#c9a227` | `#2d5a3e` |
| Creativity (rose) | `#9a4055` | `#e07a8f` | `#f4c4b5` |
| Wellness (teal) | `#2d8b9a` | `#2d5a3e` | `#c9d4a9` |
| Technology (electric) | `#0d47a1` | `#00bcd4` | `#7b4ba0` |

---

## 2. Background Canvas (Particles)

Adds ambient atmosphere with floating particles.

### HTML
```html
<canvas id="bgCanvas" class="bg-canvas"></canvas>
```

### CSS
```css
.bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
}
```

### JavaScript
```javascript
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 165, 116, ${p.opacity})`; // Use accent color
        ctx.fill();
    });
    
    requestAnimationFrame(animateParticles);
}

resizeCanvas();
createParticles();
animateParticles();
window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
});
```

---

## 3. Navigation

Fixed minimal navigation with brand and CTA.

### HTML
```html
<nav class="nav">
    <span class="nav-brand">[BOOK_TITLE]</span>
    <a href="#tools" class="nav-cta">Start Now</a>
</nav>
```

### CSS
```css
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, var(--bg-void) 0%, transparent 100%);
}

.nav-brand {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: var(--accent-gold);
    text-transform: uppercase;
}

.nav-cta {
    padding: 0.6rem 1.25rem;
    background: transparent;
    border: 1px solid var(--border-active);
    color: var(--accent-gold);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

.nav-cta:hover {
    background: var(--accent-gold);
    color: var(--bg-void);
}
```

---

## 4. Hero Section

Full-viewport hero with badge, title, subtitle, and CTA.

### HTML
```html
<section class="hero">
    <div class="hero-badge">
        <span>A Synthesis of [Source A] + [Source B]</span>
    </div>
    <h1 class="hero-title">
        [Main Title]
        <em>[Emphasized Word]</em>
    </h1>
    <p class="hero-manifesto">
        [Compelling subtitle with <strong>bold key phrases</strong>]
    </p>
    <a href="#tools" class="hero-cta">
        Experience It Now
        <svg><!-- Arrow icon --></svg>
    </a>
    <span class="hero-scroll-hint">Scroll to explore</span>
</section>
```

### CSS
```css
.hero {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 2rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(212, 165, 116, 0.08);
    border: 1px solid rgba(212, 165, 116, 0.2);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 2.5rem;
}

.hero-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 10vw, 6rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin-bottom: 1.5rem;
}

.hero-title em {
    font-style: italic;
    color: var(--accent-gold);
}

.hero-manifesto {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 580px;
    margin-bottom: 3rem;
    line-height: 1.7;
}

.hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: var(--accent-gold);
    color: var(--bg-void);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-gold);
}

.hero-scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: float 2s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
}
```

---

## 5. Section Header Pattern

Reusable section header with label, title, and subtitle.

### HTML
```html
<div class="section-header">
    <span class="section-label">[SECTION_LABEL]</span>
    <h2 class="section-title">[Section Title]</h2>
    <p class="section-subtitle">[Supporting text]</p>
</div>
```

### CSS
```css
.section-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 1rem;
}

.section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto;
}
```

---

## 6. Tool Tabs System

Tabbed interface for multiple reflection tools.

### HTML
```html
<section id="tools" class="tools">
    <div class="tools-header">
        <span class="section-label">Interactive Tools</span>
        <h2 class="section-title">Experience the Framework</h2>
    </div>
    
    <div class="tools-container">
        <div class="tool-tabs">
            <button class="tool-tab active" data-tab="tool1">[Tool 1]</button>
            <button class="tool-tab" data-tab="tool2">[Tool 2]</button>
            <button class="tool-tab" data-tab="tool3">[Tool 3]</button>
        </div>
        
        <div class="tool-panel active" id="panel-tool1">
            <!-- Tool 1 content -->
        </div>
        <div class="tool-panel" id="panel-tool2">
            <!-- Tool 2 content -->
        </div>
        <div class="tool-panel" id="panel-tool3">
            <!-- Tool 3 content -->
        </div>
    </div>
</section>
```

### CSS
```css
.tools {
    position: relative;
    z-index: 1;
    padding: 6rem 2rem;
    background: var(--bg-card);
}

.tools-container {
    max-width: 900px;
    margin: 0 auto;
}

.tool-tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.tool-tab {
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.tool-tab:hover {
    border-color: var(--border-active);
    color: var(--text-primary);
}

.tool-tab.active {
    background: var(--accent-gold);
    border-color: var(--accent-gold);
    color: var(--bg-void);
}

.tool-panel {
    display: none;
    animation: fadeIn 0.3s ease;
}

.tool-panel.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### JavaScript
```javascript
const tabs = document.querySelectorAll('.tool-tab');
const panels = document.querySelectorAll('.tool-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
        
        // Track event
        trackEvent('tool_tab_switch', { tab: tab.dataset.tab });
    });
});
```

---

## 7. Tool Panel Content Pattern

Structure for individual tool panels.

### HTML
```html
<div class="tool-panel active" id="panel-tool1">
    <div class="tool-intro">
        <h3>[Tool Name]</h3>
        <p>[Brief description of what the tool reveals]</p>
    </div>
    
    <form id="tool1Form">
        <div class="form-group">
            <label class="form-label">[Label]</label>
            <textarea class="form-textarea" id="tool1Input" 
                      placeholder="[Placeholder...]"></textarea>
        </div>
        <button type="submit" class="form-submit">Reveal Insight</button>
    </form>
    
    <div class="results" id="tool1Results">
        <h4>Your Insight</h4>
        <div id="tool1Output"></div>
        <div class="results-actions">
            <button onclick="copyResults('tool1')">Copy</button>
            <button onclick="saveResults('tool1')">Save</button>
        </div>
    </div>
</div>
```

### CSS
```css
.tool-intro {
    text-align: center;
    margin-bottom: 2rem;
}

.tool-intro h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.tool-intro p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.form-textarea {
    width: 100%;
    min-height: 120px;
    padding: 1rem;
    background: var(--bg-input);
    border: 1px solid var(--border-subtle);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 1rem;
    resize: vertical;
    transition: all 0.2s;
}

.form-textarea:focus {
    outline: none;
    border-color: var(--border-active);
}

.form-submit {
    width: 100%;
    padding: 1rem;
    background: var(--accent-gold);
    border: none;
    color: var(--bg-void);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.form-submit:hover {
    opacity: 0.9;
}

.results {
    display: none;
    margin-top: 2rem;
    padding: 2rem;
    background: var(--bg-input);
    border: 1px solid var(--border-active);
    animation: fadeIn 0.5s ease;
}

.results.visible {
    display: block;
}

.results-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.results-actions button {
    flex: 1;
    padding: 0.75rem;
    background: transparent;
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
}

.results-actions button:hover {
    border-color: var(--border-active);
    color: var(--text-primary);
}
```

---

## 8. Email CTA Section

Email capture with value proposition.

### HTML
```html
<section class="cta-section" id="save">
    <div class="cta-inner">
        <h2 class="cta-title">[CTA Headline]</h2>
        <p class="cta-text">[Supporting text]</p>
        <form class="email-form" id="emailForm">
            <input type="email" placeholder="your@email.com" required>
            <button type="submit">Join Waitlist</button>
        </form>
        <p class="cta-note">[Privacy/trust note]</p>
    </div>
</section>
```

### CSS
```css
.cta-section {
    position: relative;
    z-index: 1;
    padding: 6rem 2rem;
    text-align: center;
    background: linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.05) 100%);
}

.cta-inner {
    max-width: 600px;
    margin: 0 auto;
}

.cta-title {
    font-family: var(--font-display);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.cta-text {
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.email-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
}

.email-form input {
    flex: 1;
    padding: 1rem 1.5rem;
    background: var(--bg-input);
    border: 1px solid var(--border-subtle);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 1rem;
}

.email-form button {
    padding: 1rem 2rem;
    background: var(--accent-gold);
    border: none;
    color: var(--bg-void);
    font-family: var(--font-body);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
}

.cta-note {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--text-muted);
}

@media (max-width: 600px) {
    .email-form {
        flex-direction: column;
    }
}
```

### JavaScript
```javascript
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Store locally
    localStorage.setItem('userEmail', email);
    
    // Track event
    trackEvent('waitlist_signup', { source: 'landing' });
    
    // Show confirmation
    showToast('You\'re on the list!');
    this.reset();
    
    // TODO: Send to email provider API
});
```

---

## 9. Disclaimer

Mental health / not-therapy disclaimer (required).

### HTML
```html
<div class="disclaimer">
    <div class="disclaimer-inner">
        <p class="disclaimer-text">
            <strong>Important:</strong> This is not therapy, medical advice, 
            or a substitute for professional mental health support. These tools 
            are designed for self-reflection and personal development. If you're 
            experiencing a mental health crisis, please contact a qualified 
            professional or crisis helpline. [Book Name] is for people seeking 
            frameworks for intentional change, not clinical intervention.
        </p>
    </div>
</div>
```

### CSS
```css
.disclaimer {
    position: relative;
    z-index: 1;
    padding: 2rem;
    background: rgba(245, 158, 11, 0.05);
}

.disclaimer-inner {
    max-width: 800px;
    margin: 0 auto;
}

.disclaimer-text {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.7;
    text-align: center;
}

.disclaimer-text strong {
    color: var(--accent-amber);
}
```

---

## 10. Toast Notifications

Feedback messages for user actions.

### HTML
```html
<div class="toast" id="toast"></div>
```

### CSS
```css
.toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: 1rem 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border-active);
    color: var(--text-primary);
    font-size: 0.9rem;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
}

.toast.visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
}
```

### JavaScript
```javascript
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
}
```

---

## 11. Analytics Tracking

Event tracking for tool completion and conversions.

### JavaScript
```javascript
function trackEvent(eventName, properties = {}) {
    const event = {
        event: eventName,
        properties: {
            ...properties,
            page: window.location.pathname,
            timestamp: Date.now()
        }
    };
    
    console.log('[Analytics]', event);
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Custom event for other tracking
    window.dispatchEvent(new CustomEvent('book:event', { detail: event }));
}

// Track scroll depth
let scrollDepths = [25, 50, 75, 100];
let trackedDepths = new Set();

window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
            trackedDepths.add(depth);
            trackEvent('scroll_depth', { depth: `${depth}%` });
        }
    });
});

// Track page view
trackEvent('page_view', { title: document.title });
```

---

## 12. LocalStorage Data Pattern

Persist user tool results across sessions.

### JavaScript
```javascript
// Save results
function saveToolResults(toolName, data) {
    localStorage.setItem(`book_${toolName}`, JSON.stringify({
        ...data,
        savedAt: new Date().toISOString()
    }));
}

// Load results
function loadToolResults(toolName) {
    const data = localStorage.getItem(`book_${toolName}`);
    return data ? JSON.parse(data) : null;
}

// Export all results
function exportAllResults() {
    const allData = {
        tool1: loadToolResults('tool1'),
        tool2: loadToolResults('tool2'),
        tool3: loadToolResults('tool3'),
        exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'book-results.json';
    a.click();
}

// Copy to clipboard
function copyResults(toolName) {
    const data = loadToolResults(toolName);
    if (data) {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
            showToast('Copied to clipboard!');
        });
    }
}
```

---

## Usage Checklist

When creating a new book landing page:

- [ ] Copy `_template/index.html` as starting point
- [ ] Update CSS variables for book's color palette
- [ ] Customize hero content (badge, title, subtitle, CTA)
- [ ] Update tool tab names and content
- [ ] Implement 3 tool logic functions
- [ ] Customize email CTA messaging
- [ ] Update disclaimer with book name
- [ ] Connect email form to provider (ConvertKit, etc.)
- [ ] Test on mobile devices
- [ ] Verify analytics events fire correctly

