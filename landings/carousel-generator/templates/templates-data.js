/**
 * 10 Creative Carousel Templates
 * Each template has unique layout and design patterns
 */

const CAROUSEL_TEMPLATES = [
    {
        id: 'minimalist-quote-flow',
        name: 'Minimalist Quote Flow',
        description: 'Progressive revelation of quote across slides, word-by-word building',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: 'Code', style: { fontSize: '4rem', fontWeight: 300, fontFamily: 'Fraunces', color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: 'Code is', style: { fontSize: '4rem', fontWeight: 300, fontFamily: 'Fraunces', color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: 'Code is poetry', style: { fontSize: '4rem', fontWeight: 300, fontFamily: 'Fraunces', color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: 'Code is poetry\nwritten in logic', style: { fontSize: '3rem', fontWeight: 300, fontFamily: 'Fraunces', color: '#8b5cf6', textAlign: 'center', lineHeight: 1.2 }, position: { x: '50%', y: '50%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'before-after-journey',
        name: 'Before/After Journey',
        description: 'Visual transformation narrative with progression',
        slides: [
            {
                layout: 'split',
                background: { type: 'solid', color: '#1a1a2e' },
                elements: [
                    { type: 'text', content: 'BEFORE', style: { fontSize: '2rem', fontWeight: 700, color: '#ef4444', textAlign: 'center' }, position: { x: '25%', y: '30%' } },
                    { type: 'text', content: 'Chaos\nConfusion\nDeadlines', style: { fontSize: '1.5rem', color: '#71717a', textAlign: 'center', lineHeight: 1.8 }, position: { x: '25%', y: '50%' } }
                ]
            },
            {
                layout: 'split',
                background: { type: 'gradient', colors: ['#1a1a2e', '#2a2a3e'] },
                elements: [
                    { type: 'text', content: '→', style: { fontSize: '4rem', color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'split',
                background: { type: 'solid', color: '#1a1a2e' },
                elements: [
                    { type: 'text', content: 'AFTER', style: { fontSize: '2rem', fontWeight: 700, color: '#22c55e', textAlign: 'center' }, position: { x: '75%', y: '30%' } },
                    { type: 'text', content: 'Clarity\nFlow\nSuccess', style: { fontSize: '1.5rem', color: '#22c55e', textAlign: 'center', lineHeight: 1.8 }, position: { x: '75%', y: '50%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['slide']
    },
    {
        id: 'numbered-steps',
        name: 'Numbered Steps',
        description: 'Non-linear step progression (3→1→5→2) for engagement',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 120, color: '#8b5cf6', opacity: 0.2, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: '3', style: { fontSize: '6rem', fontWeight: 700, color: '#8b5cf6' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Build', style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, position: { x: '50%', y: '65%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 120, color: '#06b6d4', opacity: 0.2, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: '1', style: { fontSize: '6rem', fontWeight: 700, color: '#06b6d4' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Plan', style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, position: { x: '50%', y: '65%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 120, color: '#f472b6', opacity: 0.2, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: '5', style: { fontSize: '6rem', fontWeight: 700, color: '#f472b6' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Ship', style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, position: { x: '50%', y: '65%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 120, color: '#f97316', opacity: 0.2, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: '2', style: { fontSize: '6rem', fontWeight: 700, color: '#f97316' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Iterate', style: { fontSize: '2rem', fontWeight: 600, color: '#fafafa' }, position: { x: '50%', y: '65%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'emotion-arc',
        name: 'Emotion Arc',
        description: 'Color and typography reflect emotional journey',
        slides: [
            {
                layout: 'centered',
                background: { type: 'solid', color: '#1a0a1a' },
                elements: [
                    { type: 'text', content: '😰', style: { fontSize: '5rem' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Overwhelmed', style: { fontSize: '2.5rem', fontWeight: 600, color: '#ef4444' }, position: { x: '50%', y: '60%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#1a0a1a', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: '😐', style: { fontSize: '5rem' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Focused', style: { fontSize: '2.5rem', fontWeight: 600, color: '#f59e0b' }, position: { x: '50%', y: '60%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#1a1a2e', '#0a1a1a'] },
                elements: [
                    { type: 'text', content: '😊', style: { fontSize: '5rem' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Confident', style: { fontSize: '2.5rem', fontWeight: 600, color: '#06b6d4' }, position: { x: '50%', y: '60%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#0a1a1a', '#0a2a1a'] },
                elements: [
                    { type: 'text', content: '🚀', style: { fontSize: '5rem' }, position: { x: '50%', y: '40%' } },
                    { type: 'text', content: 'Empowered', style: { fontSize: '2.5rem', fontWeight: 600, color: '#22c55e' }, position: { x: '50%', y: '60%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'split-personality',
        name: 'Split Personality',
        description: 'Left/right content split with visual divider',
        slides: [
            {
                layout: 'split',
                background: { type: 'gradient', colors: ['#1a0a1a', '#1a1a2e'] },
                elements: [
                    { type: 'text', content: 'LEFT', style: { fontSize: '3rem', fontWeight: 700, color: '#8b5cf6', textAlign: 'center' }, position: { x: '25%', y: '30%' } },
                    { type: 'text', content: 'Logic\nStructure\nPrecision', style: { fontSize: '1.25rem', color: '#a78bfa', textAlign: 'center', lineHeight: 2 }, position: { x: '25%', y: '50%' } },
                    { type: 'shape', shape: 'line', width: 2, color: '#8b5cf6', position: { x: '50%', y: '0%' }, height: '100%' },
                    { type: 'text', content: 'RIGHT', style: { fontSize: '3rem', fontWeight: 700, color: '#f472b6', textAlign: 'center' }, position: { x: '75%', y: '30%' } },
                    { type: 'text', content: 'Creativity\nFlow\nIntuition', style: { fontSize: '1.25rem', color: '#f9a8d4', textAlign: 'center', lineHeight: 2 }, position: { x: '75%', y: '50%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'code-poetry',
        name: 'Code Poetry',
        description: 'Code syntax highlighting as visual art',
        slides: [
            {
                layout: 'centered',
                background: { type: 'solid', color: '#0d1117' },
                elements: [
                    { type: 'text', content: 'function', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#c9d1d9' }, position: { x: '20%', y: '30%' } },
                    { type: 'text', content: 'create', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#79c0ff' }, position: { x: '35%', y: '30%' } },
                    { type: 'text', content: '()', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#c9d1d9' }, position: { x: '50%', y: '30%' } },
                    { type: 'text', content: '{', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#c9d1d9' }, position: { x: '20%', y: '45%' } },
                    { type: 'text', content: '  return', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#c9d1d9' }, position: { x: '20%', y: '60%' } },
                    { type: 'text', content: '    magic', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#a5d6ff' }, position: { x: '20%', y: '75%' } },
                    { type: 'text', content: '}', style: { fontSize: '1.5rem', fontFamily: 'JetBrains Mono', color: '#c9d1d9' }, position: { x: '20%', y: '90%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'timeline-spiral',
        name: 'Timeline Spiral',
        description: 'Circular timeline progression instead of linear',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 200, color: '#8b5cf6', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'text', content: 'START', style: { fontSize: '2rem', fontWeight: 700, color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 200, color: '#8b5cf6', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 150, color: '#06b6d4', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'text', content: 'LEARN', style: { fontSize: '2rem', fontWeight: 700, color: '#06b6d4' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 200, color: '#8b5cf6', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 150, color: '#06b6d4', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 100, color: '#f472b6', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'text', content: 'BUILD', style: { fontSize: '2rem', fontWeight: 700, color: '#f472b6' }, position: { x: '50%', y: '50%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'layered-depth',
        name: 'Layered Depth',
        description: 'Parallax-like depth with overlapping elements',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 300, color: '#8b5cf6', opacity: 0.05, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 200, color: '#06b6d4', opacity: 0.1, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 100, color: '#f472b6', opacity: 0.2, position: { x: '50%', y: '50%' } },
                    { type: 'text', content: 'DEPTH', style: { fontSize: '3rem', fontWeight: 700, color: '#fafafa', textShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }, position: { x: '50%', y: '50%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'micro-interactions',
        name: 'Micro-Interactions',
        description: 'Animated elements that progress across slides',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 60, color: '#8b5cf6', opacity: 1, position: { x: '30%', y: '50%' }, animation: 'pulse' },
                    { type: 'text', content: 'Loading...', style: { fontSize: '1.5rem', color: '#8b5cf6' }, position: { x: '50%', y: '50%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 60, color: '#8b5cf6', opacity: 1, position: { x: '30%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 60, color: '#06b6d4', opacity: 1, position: { x: '50%', y: '50%' }, animation: 'pulse' },
                    { type: 'text', content: 'Processing...', style: { fontSize: '1.5rem', color: '#06b6d4' }, position: { x: '50%', y: '70%' } }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'circle', size: 60, color: '#8b5cf6', opacity: 1, position: { x: '30%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 60, color: '#06b6d4', opacity: 1, position: { x: '50%', y: '50%' } },
                    { type: 'shape', shape: 'circle', size: 60, color: '#f472b6', opacity: 1, position: { x: '70%', y: '50%' }, animation: 'pulse' },
                    { type: 'text', content: 'Complete!', style: { fontSize: '1.5rem', color: '#f472b6' }, position: { x: '50%', y: '70%' } }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    },
    {
        id: 'abstract-geometry',
        name: 'Abstract Geometry',
        description: 'Geometric shapes as content containers',
        slides: [
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'triangle', size: 200, color: '#8b5cf6', opacity: 0.2, position: { x: '50%', y: '40%' }, rotation: 0 },
                    { type: 'text', content: 'THINK', style: { fontSize: '2.5rem', fontWeight: 700, color: '#8b5cf6' }, position: { x: '50%', y: '40%' } },
                    { type: 'shape', shape: 'square', size: 150, color: '#06b6d4', opacity: 0.2, position: { x: '30%', y: '70%' }, rotation: 45 },
                    { type: 'shape', shape: 'square', size: 150, color: '#f472b6', opacity: 0.2, position: { x: '70%', y: '70%' }, rotation: 45 }
                ]
            },
            {
                layout: 'centered',
                background: { type: 'gradient', colors: ['#08080c', '#1a1a2e'] },
                elements: [
                    { type: 'shape', shape: 'triangle', size: 200, color: '#8b5cf6', opacity: 0.2, position: { x: '50%', y: '40%' }, rotation: 120 },
                    { type: 'text', content: 'CREATE', style: { fontSize: '2.5rem', fontWeight: 700, color: '#06b6d4' }, position: { x: '50%', y: '40%' } },
                    { type: 'shape', shape: 'square', size: 150, color: '#06b6d4', opacity: 0.2, position: { x: '30%', y: '70%' }, rotation: 135 },
                    { type: 'shape', shape: 'square', size: 150, color: '#f472b6', opacity: 0.2, position: { x: '70%', y: '70%' }, rotation: 135 }
                ]
            }
        ],
        navigation: { arrows: true, dots: true },
        animations: ['fade']
    }
];

