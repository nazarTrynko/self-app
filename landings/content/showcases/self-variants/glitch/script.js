/**
 * CORRUPT SIGNAL — Beauty in Errors
 * 
 * Glitch effects and data corruption aesthetics
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add data-text attributes for RGB split effect
    document.querySelectorAll('.rgb-split').forEach(el => {
        el.setAttribute('data-text', el.textContent);
    });
    
    // Random glitch bursts
    const glitchBurst = () => {
        const body = document.body;
        body.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
        
        setTimeout(() => {
            body.style.transform = 'translateX(0)';
        }, 50);
    };
    
    // Random glitch timing
    const scheduleGlitch = () => {
        const delay = Math.random() * 5000 + 2000; // 2-7 seconds
        setTimeout(() => {
            glitchBurst();
            scheduleGlitch();
        }, delay);
    };
    
    // Check for reduced motion preference
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        scheduleGlitch();
    }
    
    // Scroll reveal with glitch
    const cards = document.querySelectorAll('.card, .audience-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Brief glitch on reveal
                entry.target.style.filter = 'hue-rotate(90deg)';
                setTimeout(() => {
                    entry.target.style.filter = 'none';
                }, 100);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease, filter 0.1s';
        observer.observe(card);
    });
    
    // VHS tracking effect on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const delta = Math.abs(currentScroll - lastScroll);
        
        if (delta > 50) {
            document.body.style.filter = `brightness(${1 + Math.random() * 0.1})`;
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
        
        lastScroll = currentScroll;
    });
    
    // Console corruption
    console.log('%cS̷E̸L̵F̶ v1.0.0', 'color: #ff00ff; font-size: 20px; text-shadow: 2px 0 #00ffff;');
    console.log('%c// SIGNAL CORRUPTED... BEAUTY FOUND', 'color: #00ffff;');
});

