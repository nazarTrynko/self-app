# Evolved Carousels

**10 transformative carousel stories** combining cognitive technology patterns from the Masterpieces collection with cutting-edge 2026 design trends.

## 🎨 Design Philosophy

This project fuses:
- **Masterpiece depth** — Each carousel inverts an assumption and transforms through interaction
- **2026 aesthetics** — Soft brutalism, nature distilled, authentic imperfection
- **Interactive elements** — Not just viewing, but experiencing
- **Technical excellence** — State machines, generative canvas, PWA-ready

## 📚 The 10 Stories

| Story | Canvas Effect | Theme |
|-------|---------------|-------|
| **Loving Kindness** | Heartbeat particles | Metta meditation |
| **Programmer's Day** | Matrix rain (Ukrainian) | Tech celebration |
| **Digital Detox** | Water ripples | Mindful tech |
| **Imposter Syndrome** | Spotlight follow | Self-doubt |
| **Morning Rituals** | Sunrise animation | Sacred mornings |
| **Burnout Recovery** | Ember particles | Phoenix rising |
| **Creative Flow** | Watercolor blobs | Flow states |
| **Mindful Communication** | Sound waves | Deep listening |
| **Gratitude Practice** | Falling leaves | Appreciation |
| **Work-Life Balance** | Day/night morph | Integration |

## 🛠 Architecture

```
evolved-carousels/
├── index.html              # Main gallery
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── src/
│   ├── core/
│   │   ├── carousel-engine.js      # State machine
│   │   ├── export-engine.js        # Image export
│   │   └── canvas-backgrounds/
│   │       ├── base.js             # Base class + utilities
│   │       ├── heartbeat.js        # Loving Kindness
│   │       ├── matrix.js           # Programmer's Day
│   │       ├── water.js            # Digital Detox
│   │       ├── spotlight.js        # Imposter Syndrome
│   │       ├── sunrise.js          # Morning Rituals
│   │       ├── ember.js            # Burnout Recovery
│   │       ├── watercolor.js       # Creative Flow
│   │       ├── soundwave.js        # Communication
│   │       ├── leaves.js           # Gratitude
│   │       └── daynight.js         # Work-Life
│   └── themes/
│       └── warm.css                # bmd-inspired theme
└── stories/
    ├── loving-kindness/
    ├── programmers-day/
    ├── digital-detox/
    ├── imposter-syndrome/
    ├── morning-rituals/
    ├── burnout-recovery/
    ├── creative-flow/
    ├── mindful-communication/
    ├── gratitude-practice/
    └── work-life-balance/
```

## 🎯 Key Features

### Carousel Engine
- State machine transitions (IDLE → ENTERING → ACTIVE → EXITING)
- Keyboard navigation (arrow keys)
- Touch/swipe support
- Haptic feedback
- Element stagger animations

### Canvas Backgrounds
- 60 FPS generative animations
- Responsive to window resize
- Slide-change reactions
- SimplexNoise for organic movement
- Particle systems with physics

### Warm Theme
- Typography: Cormorant Garamond (display) + Outfit (body)
- Colors: Cream backgrounds, coral/gold accents
- Fluid typography with clamp()
- Reduced motion support
- Print styles

### PWA Features
- Offline support via service worker
- Installable on mobile
- Asset caching

### Export
- Single slide as PNG/JPEG
- All slides as ZIP
- Resolution scaling (2x default)

## 🚀 Usage

### Basic Setup

```html
<!-- Include core files -->
<script src="src/core/canvas-backgrounds/base.js"></script>
<script src="src/core/canvas-backgrounds/heartbeat.js"></script>
<script src="src/core/carousel-engine.js"></script>

<!-- Initialize -->
<script>
const canvas = document.getElementById('canvas');
const heartbeatCanvas = new HeartbeatCanvas(canvas);

const carousel = new CarouselEngine('#carousel', {
    autoPlay: false,
    loop: true,
    haptic: true
});

carousel.setCanvasBackground(heartbeatCanvas);
</script>
```

### Export Slides

```javascript
const exporter = new ExportEngine(carousel, {
    format: 'png',
    scale: 2
});

// Export current slide
await exporter.downloadCurrentSlide();

// Export all as ZIP
await exporter.exportAsZip();
```

## 🎨 Design Tokens

```css
/* Colors */
--bg-light: #F5F0E8;
--accent-primary: #E8725C;
--accent-secondary: #D4A574;

/* Typography */
--font-display: 'Cormorant Garamond', serif;
--font-body: 'Outfit', sans-serif;

/* Animation */
--ease-elegant: cubic-bezier(0.23, 1, 0.32, 1);
--duration-slide: 600ms;
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔮 Future Enhancements

- [ ] Dark theme variant
- [ ] Audio narration option
- [ ] Analytics integration
- [ ] Social sharing cards
- [ ] Multi-language support

---

Built with the **SELF Framework** • 2026

