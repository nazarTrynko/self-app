/**
 * Showcase Section JavaScript
 * Handles showcase section interactions and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initShowcase();
});

function initShowcase() {
    // Add any showcase-specific initialization here
    // For example: scroll animations, interactions, etc.
    
    // Example: Intersection Observer for fade-in animations
    const showcaseSections = document.querySelectorAll('.showcase-section');
    
    if (showcaseSections.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        showcaseSections.forEach(section => {
            observer.observe(section);
        });
    }
}

