/**
 * Programmers Day Carousel Data
 * 7-slide carousel celebrating Programmers Day
 */

const PROGRAMMERS_DAY_CAROUSEL = {
    id: 'programmers-day',
    name: 'Programmers Day',
    description: 'Celebrate Programmers Day with this creative carousel',
    slides: [
        {
            layout: 'centered',
            background: { 
                type: 'gradient', 
                colors: ['#0d1117', '#161b22', '#1a1a2e'] 
            },
            elements: [
                {
                    type: 'text',
                    content: 'Happy',
                    style: {
                        fontSize: '4rem',
                        fontWeight: 300,
                        fontFamily: 'Fraunces',
                        color: '#8b5cf6',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '35%' }
                },
                {
                    type: 'text',
                    content: 'Programmers Day',
                    style: {
                        fontSize: '3rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '50%' }
                },
                {
                    type: 'text',
                    content: '💻',
                    style: {
                        fontSize: '3rem'
                    },
                    position: { x: '50%', y: '70%' }
                }
            ]
        },
        {
            layout: 'centered',
            background: {
                type: 'gradient',
                colors: ['#0d1117', '#161b22']
            },
            elements: [
                {
                    type: 'text',
                    content: '"Code is like humor.',
                    style: {
                        fontSize: '2rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center',
                        lineHeight: 1.6
                    },
                    position: { x: '50%', y: '40%' }
                },
                {
                    type: 'text',
                    content: 'When you have to explain it,',
                    style: {
                        fontSize: '2rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center',
                        lineHeight: 1.6
                    },
                    position: { x: '50%', y: '55%' }
                },
                {
                    type: 'text',
                    content: 'it\'s bad."',
                    style: {
                        fontSize: '2rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#8b5cf6',
                        textAlign: 'center',
                        lineHeight: 1.6
                    },
                    position: { x: '50%', y: '70%' }
                },
                {
                    type: 'text',
                    content: '— Cory House',
                    style: {
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'Instrument Sans',
                        color: '#71717a',
                        textAlign: 'center',
                        fontStyle: 'italic'
                    },
                    position: { x: '50%', y: '85%' }
                }
            ]
        },
        {
            layout: 'centered',
            background: {
                type: 'gradient',
                colors: ['#0d1117', '#1a1a2e']
            },
            elements: [
                {
                    type: 'text',
                    content: 'Fun Stats',
                    style: {
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '25%' }
                },
                {
                    type: 'text',
                    content: '10,000+',
                    style: {
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        fontFamily: 'Instrument Sans',
                        color: '#8b5cf6',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '40%' }
                },
                {
                    type: 'text',
                    content: 'programming languages',
                    style: {
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        fontFamily: 'Instrument Sans',
                        color: '#71717a',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '55%' }
                },
                {
                    type: 'text',
                    content: '26.8M',
                    style: {
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        fontFamily: 'Instrument Sans',
                        color: '#f472b6',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '70%' }
                },
                {
                    type: 'text',
                    content: 'developers worldwide',
                    style: {
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        fontFamily: 'Instrument Sans',
                        color: '#71717a',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '85%' }
                }
            ]
        },
        {
            layout: 'split',
            background: {
                type: 'gradient',
                colors: ['#0d1117', '#161b22']
            },
            elements: [
                {
                    type: 'text',
                    content: 'Favorite Tools',
                    style: {
                        fontSize: '2rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#8b5cf6',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '20%' }
                },
                {
                    type: 'text',
                    content: 'VS Code',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '25%', y: '40%' }
                },
                {
                    type: 'text',
                    content: 'Git',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '50%' }
                },
                {
                    type: 'text',
                    content: 'Terminal',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '75%', y: '60%' }
                },
                {
                    type: 'text',
                    content: 'Stack Overflow',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#f472b6',
                        textAlign: 'center'
                    },
                    position: { x: '25%', y: '75%' }
                },
                {
                    type: 'text',
                    content: 'GitHub',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#f472b6',
                        textAlign: 'center'
                    },
                    position: { x: '75%', y: '85%' }
                }
            ]
        },
        {
            layout: 'centered',
            background: {
                type: 'gradient',
                colors: ['#0d1117', '#1a1a2e']
            },
            elements: [
                {
                    type: 'shape',
                    shape: 'circle',
                    size: 80,
                    color: '#8b5cf6',
                    opacity: 0.2,
                    position: { x: '20%', y: '30%' }
                },
                {
                    type: 'text',
                    content: '2020',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#8b5cf6',
                        textAlign: 'center'
                    },
                    position: { x: '20%', y: '30%' }
                },
                {
                    type: 'shape',
                    shape: 'circle',
                    size: 80,
                    color: '#06b6d4',
                    opacity: 0.2,
                    position: { x: '40%', y: '50%' }
                },
                {
                    type: 'text',
                    content: '2022',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '40%', y: '50%' }
                },
                {
                    type: 'shape',
                    shape: 'circle',
                    size: 80,
                    color: '#f472b6',
                    opacity: 0.2,
                    position: { x: '60%', y: '70%' }
                },
                {
                    type: 'text',
                    content: '2024',
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        fontFamily: 'Instrument Sans',
                        color: '#f472b6',
                        textAlign: 'center'
                    },
                    position: { x: '60%', y: '70%' }
                },
                {
                    type: 'text',
                    content: 'My Journey',
                    style: {
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '20%' }
                },
                {
                    type: 'text',
                    content: 'Learning → Building → Shipping',
                    style: {
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        fontFamily: 'Instrument Sans',
                        color: '#71717a',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '90%' }
                }
            ]
        },
        {
            layout: 'centered',
            background: {
                type: 'gradient',
                colors: ['#0d1117', '#161b22']
            },
            elements: [
                {
                    type: 'text',
                    content: 'Thank You',
                    style: {
                        fontSize: '3rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#8b5cf6',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '35%' }
                },
                {
                    type: 'text',
                    content: 'to the',
                    style: {
                        fontSize: '2rem',
                        fontWeight: 400,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '50%' }
                },
                {
                    type: 'text',
                    content: 'Programming Community',
                    style: {
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#06b6d4',
                        textAlign: 'center'
                    },
                    position: { x: '50%', y: '65%' }
                },
                {
                    type: 'text',
                    content: '🙏',
                    style: {
                        fontSize: '3rem'
                    },
                    position: { x: '50%', y: '85%' }
                }
            ]
        },
        {
            layout: 'centered',
            background: {
                type: 'gradient',
                colors: ['#8b5cf6', '#06b6d4', '#f472b6']
            },
            elements: [
                {
                    type: 'text',
                    content: 'Keep Coding',
                    style: {
                        fontSize: '3.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center',
                        textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
                    },
                    position: { x: '50%', y: '40%' }
                },
                {
                    type: 'text',
                    content: 'Keep Building',
                    style: {
                        fontSize: '3.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center',
                        textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
                    },
                    position: { x: '50%', y: '55%' }
                },
                {
                    type: 'text',
                    content: 'Keep Shipping 🚀',
                    style: {
                        fontSize: '3.5rem',
                        fontWeight: 600,
                        fontFamily: 'Fraunces',
                        color: '#fafafa',
                        textAlign: 'center',
                        textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
                    },
                    position: { x: '50%', y: '70%' }
                }
            ]
        }
    ],
    navigation: { arrows: true, dots: true },
    animations: ['fade']
};

