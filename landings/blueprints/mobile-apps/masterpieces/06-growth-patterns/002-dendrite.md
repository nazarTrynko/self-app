# The Dendrite

**ID:** M056
**Category:** Growth Patterns
**Tier:** Premium ($34.99)
**APIs:** WebGL2, Three.js, Web Workers, Touch Events, DeviceMotion
**Offline:** Full

---

## One-Liner

Watch crystalline branches grow like frost on glass, neurons forming, or lightning frozen in time—L-system generative art that never repeats.

## Problem

Branching patterns appear everywhere in nature: trees, rivers, blood vessels, lightning, frost, neurons. These dendritic forms follow mathematical rules that create infinite variation from simple principles. Yet most people never see the underlying grammar of branches, the recursive poetry that generates all this complexity from elegance.

## Solution

A real-time L-system visualization that grows branching structures in 3D space. Users watch as simple rules unfold into complex dendrites—from a single point into thousands of crystalline branches. The same algorithms that model plant growth, neural development, and mineral formation, made visible and interactive.

## Target User

- Generative art enthusiasts
- Neuroscience and biology students
- Meditation practitioners seeking visual anchors
- Programmers exploring procedural generation
- Artists studying natural forms
- Winter/ice aesthetic appreciators
- Anyone fascinated by complexity emerging from simplicity

## Key Features

- **L-System Engine**: Configurable grammar rules for infinite variety
- **Multiple Presets**: Frost, Neural, Lightning, Tree, Coral, Abstract
- **Real-time Growth**: Watch branches extend and subdivide
- **Parameter Controls**: Branch angle, length decay, subdivision depth
- **Growth Direction**: Touch/drag to influence where branches grow
- **Color Themes**: Ice blue, amber, prismatic, monochrome
- **Depth Levels**: From simple to impossibly complex
- **Export STL**: 3D print your grown structures

## Monetization

**Model:** One-Time Purchase with Expansion Packs
**Price:** $34.99 (core) + $9.99 packs (additional L-system presets)
**Strategy:**
- Digital art collectors
- Educational licensing
- 3D printing community
- Screensaver/ambient display market
- Generative NFT partnerships

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  ❄️ THE DENDRITE                         Depth: 7  Branches: 892 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│                           │                                      │
│                          ╱│╲                                     │
│                         ╱ │ ╲                                    │
│                        ╱  │  ╲                                   │
│                       ╱   │   ╲                                  │
│                      ╱╲   │   ╱╲                                 │
│                     ╱  ╲  │  ╱  ╲                                │
│                    ╱    ╲ │ ╱    ╲                               │
│                   ╱╲    ╱╲│╱╲    ╱╲                              │
│                  ╱  ╲  ╱  │  ╲  ╱  ╲                             │
│                 ╱    ╲╱   │   ╲╱    ╲                            │
│                ╱╲    ╱╲   │   ╱╲    ╱╲                           │
│               ╱  ╲  ╱  ╲  │  ╱  ╲  ╱  ╲                          │
│                                                                  │
│   [Branches grow outward, subdividing recursively]               │
│   [Ice-blue glow, crystalline aesthetic]                        │
│                                                                  │
│   PRESET: Frost Crystal                                          │
│   ┌─────────────────────────────────────────────────────┐       │
│   │ Angle: ████████░░ 67°                               │       │
│   │ Decay: ██████░░░░ 0.72                              │       │
│   │ Depth: █████████░ 8                                 │       │
│   └─────────────────────────────────────────────────────┘       │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [🌿 Preset]  [▶ Grow]  [🔄 Reset]  [💾 Export]  [⚙️ Rules]     │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Three.js: 3D line rendering with custom shaders
- WebGL2: GPU-accelerated geometry
- Web Workers: L-system expansion calculations
- Touch Events: Directional growth influence

**L-System Implementation:**
```javascript
class LSystem {
    constructor(axiom, rules, iterations) {
        this.axiom = axiom;
        this.rules = rules;
        this.iterations = iterations;
        this.result = '';
    }
    
    // Expand the axiom according to rules
    expand() {
        let current = this.axiom;
        
        for (let i = 0; i < this.iterations; i++) {
            let next = '';
            for (const char of current) {
                next += this.rules[char] || char;
            }
            current = next;
        }
        
        this.result = current;
        return this.result;
    }
}

// Example: Frost crystal rules
const frostRules = {
    axiom: 'F',
    rules: {
        'F': 'F[+F][-F]F[+F][-F]'
    },
    angle: 25,
    lengthDecay: 0.7
};
```

**3D Turtle Graphics:**
```javascript
class Turtle3D {
    constructor() {
        this.position = new THREE.Vector3(0, 0, 0);
        this.direction = new THREE.Vector3(0, 1, 0);
        this.right = new THREE.Vector3(1, 0, 0);
        this.stack = [];
        this.vertices = [];
    }
    
    forward(length) {
        const start = this.position.clone();
        this.position.add(this.direction.clone().multiplyScalar(length));
        this.vertices.push(start, this.position.clone());
    }
    
    rotateLeft(angle) {
        const axis = new THREE.Vector3().crossVectors(this.direction, this.right);
        this.direction.applyAxisAngle(axis, angle);
        this.right.applyAxisAngle(axis, angle);
    }
    
    push() {
        this.stack.push({
            position: this.position.clone(),
            direction: this.direction.clone(),
            right: this.right.clone()
        });
    }
    
    pop() {
        const state = this.stack.pop();
        this.position = state.position;
        this.direction = state.direction;
        this.right = state.right;
    }
    
    interpret(instructions, length, angle) {
        for (const char of instructions) {
            switch (char) {
                case 'F': this.forward(length); break;
                case '+': this.rotateLeft(angle); break;
                case '-': this.rotateLeft(-angle); break;
                case '[': this.push(); break;
                case ']': this.pop(); break;
                // Add pitch and roll for 3D
                case '^': this.pitch(angle); break;
                case '&': this.pitch(-angle); break;
            }
        }
    }
}
```

**Animated Growth:**
```javascript
// Reveal branches progressively
class AnimatedGrowth {
    constructor(vertices) {
        this.allVertices = vertices;
        this.visibleCount = 0;
        this.growthRate = 10; // vertices per frame
    }
    
    update(geometry) {
        this.visibleCount = Math.min(
            this.visibleCount + this.growthRate,
            this.allVertices.length
        );
        
        geometry.setDrawRange(0, this.visibleCount);
    }
}
```

**Offline Strategy:**
All L-system calculations run locally. Presets stored in app. Custom rules saved to IndexedDB.

## Competition & Differentiation

**Existing Solutions:**
- 2D L-system generators (many online)
- Static 3D fractal renders
- Academic visualization tools

**Our Edge:**
- Real-time 3D growth animation
- Intuitive preset system
- Directional influence (guide growth with touch)
- Beautiful aesthetic (not academic-looking)
- STL export for 3D printing
- Multiple natural themes (not just abstract math)

## Development Estimate

**Complexity:** Medium
**Timeline:** 8-10 weeks
**Key Challenges:**
- 3D turtle graphics implementation
- Smooth animated growth reveal
- Intuitive parameter UI
- STL export functionality
- Performance at high iteration depths

---

## Council Assessment

**🏗️ ARCHITECT:** "L-systems are well-documented. The 3D turtle graphics requires careful implementation but is straightforward. Line geometry in Three.js is efficient. Main performance concern is very deep recursions—cap iterations sensibly."

**🔮 ORACLE:** "Generative art market is growing. The 3D printing angle opens hardware community. 'Frost' and 'neural' aesthetics have broad appeal. Could become a go-to tool for procedural artists."

**⚖️ CRITIC:** "L-systems can feel mathematical rather than alive. The challenge is making users feel like they're growing something organic, not computing something recursive. Animation pacing and parameter accessibility are key."

**🎨 CREATOR:** "The frost crystal aesthetic is gorgeous—ice-blue branches against dark void. But also explore warmer themes: golden autumn trees, coral pink, amber lightning. Each preset should feel like a different world."

**🛡️ GUARDIAN:** "Low risk. STL export should be tested thoroughly—malformed geometry can cause print failures. Consider file size limits for very complex structures."

**Verdict:** GO — Solid technical foundation with clear artistic appeal. Balance mathematical precision with organic feel.

