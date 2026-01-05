/**
 * ZEN MA (間) — The Space Between
 * 
 * Minimal JavaScript. The emptiness is the feature.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Subtle scroll-based opacity for elements
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const fadeIn = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const observer = new IntersectionObserver(fadeIn, observerOptions);

    // Observe key elements
    document.querySelectorAll('.poem, .essence p, .modes, .closing').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        observer.observe(el);
    });

    // Console meditation
    console.log('');
    console.log('    間');
    console.log('');
    console.log('    The space between');
    console.log('    is where understanding lives.');
    console.log('');
});

