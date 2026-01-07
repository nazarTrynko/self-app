# Carousel Generator

A masterful web-based Instagram carousel generator with creative templates, custom builder, AI-assisted suggestions, and export capabilities.

## Features

### 🎨 10 Creative Templates

1. **Minimalist Quote Flow** - Progressive revelation of quote across slides
2. **Before/After Journey** - Visual transformation narrative
3. **Numbered Steps** - Non-linear step progression (3→1→5→2)
4. **Emotion Arc** - Color and typography reflect emotional journey
5. **Split Personality** - Left/right content split with visual divider
6. **Code Poetry** - Code syntax highlighting as visual art
7. **Timeline Spiral** - Circular timeline progression
8. **Layered Depth** - Parallax-like depth with overlapping elements
9. **Micro-Interactions** - Animated elements that progress across slides
10. **Abstract Geometry** - Geometric shapes as content containers

### 🛠️ Custom Builder

- Drag-and-drop slide editor (basic implementation)
- Text styling controls
- Background customization (gradients, solid colors)
- Element positioning
- Slide duplication and deletion
- Add/remove elements

### 🤖 AI-Assisted Suggestions

- Content analysis to suggest best template
- Layout optimization suggestions
- Color palette recommendations
- Text length optimization
- Visual hierarchy suggestions

### 📤 Export System

- Web preview (HTML/CSS/JS)
- Single image export (PNG/JPG)
- Batch export (all slides as ZIP)
- Instagram-optimized dimensions:
  - Square (1080x1080) - Post
  - Story (1080x1920)

## Usage

### Basic Workflow

1. **Select a Template**
   - Browse templates in the left sidebar
   - Click on a template card to load it
   - Preview appears in the center canvas

2. **Navigate Slides**
   - Use arrow buttons or keyboard (← →)
   - Click slide thumbnails in bottom bar
   - Use dots indicator for quick navigation

3. **Customize (Custom Builder)**
   - Click "Custom Builder" button
   - Edit elements in the right sidebar
   - Modify backgrounds and styles
   - Add/remove elements

4. **Get AI Suggestions**
   - Click AI icon in top bar
   - Review suggestions for improvements
   - Apply recommendations

5. **Export**
   - Click "Export" button
   - Choose export type (single/all)
   - Select format (PNG/JPG)
   - Choose dimensions
   - Download your carousel

### Keyboard Shortcuts

- `←` / `→` - Navigate between slides
- `Esc` - Close modals

### Custom Builder

1. Click "Custom Builder" button
2. Start with a blank slide or modify existing
3. Add elements:
   - **Text**: Type content, positioned at center
   - **Shape**: Choose circle/square/triangle
   - **Icon**: Add emoji or icon
4. Edit elements:
   - Click element in editor to edit
   - Modify text content
   - Delete unwanted elements
5. Customize background:
   - Choose gradient or solid
   - Pick colors
   - Apply changes

## Examples

### Programmers Day Carousel

Located in `examples/programmers-day/`:

- 7-slide carousel celebrating Programmers Day
- Includes hero, quote, stats, tools, journey, community, and CTA slides
- Preview at `examples/programmers-day/preview.html`

To use:
```javascript
// Load in generator
loadTemplate(PROGRAMMERS_DAY_CAROUSEL);
```

## Template Structure

Templates are defined in `templates/templates-data.js`:

```javascript
{
    id: 'template-id',
    name: 'Template Name',
    description: 'Template description',
    slides: [
        {
            layout: 'centered' | 'split',
            background: {
                type: 'gradient' | 'solid' | 'image',
                colors: ['#08080c', '#1a1a2e'],
                color: '#08080c', // for solid
                url: '...' // for image
            },
            elements: [
                {
                    type: 'text' | 'shape' | 'icon',
                    content: '...',
                    style: { ... },
                    position: { x: '50%', y: '50%' }
                }
            ]
        }
    ],
    navigation: { arrows: true, dots: true },
    animations: ['fade' | 'slide']
}
```

## Architecture

```
carousel-generator/
├── index.html              # Main generator interface
├── styles.css              # Generator UI styles
├── script.js               # Core generator logic
├── templates/
│   ├── templates-data.js   # 10 template definitions
│   └── template-engine.js  # Template rendering engine
├── export/
│   └── export-engine.js    # Image export (html2canvas)
├── ai/
│   └── suggestions.js      # AI-assisted suggestions
└── examples/
    └── programmers-day/   # Example carousel
        ├── data.js
        ├── preview.html
        └── styles.css
```

## Dependencies

- **html2canvas** - Loaded from CDN for image export
- **JSZip** (optional) - For batch ZIP export (falls back to individual downloads)

## Design Aesthetic

Matches SELF framework's "master peaceful" aesthetic:

- Dark theme (`#08080c` background)
- Elegant typography (Instrument Sans, Fraunces)
- Subtle gradients and glows
- Smooth animations
- Minimalist UI with maximum functionality
- Color accents: purple (`#8b5cf6`), cyan (`#06b6d4`), pink (`#f472b6`)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch/swipe support for mobile preview

## Future Enhancements

- Full drag-and-drop editor
- More template variations
- Advanced animations
- Custom font uploads
- Image upload support
- Collaboration features
- Template marketplace

## License

Part of the SELF Framework project.

