/**
 * NOIR CINEMA — Intelligence as Mystery
 * 
 * Dramatic reveals and cinematic scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered scene reveals
    const scenes = document.querySelectorAll('.scene');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const revealScene = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    };
    
    const observer = new IntersectionObserver(revealScene, observerOptions);
    
    scenes.forEach(scene => {
        observer.observe(scene);
    });
    
    // Typewriter effect for opening text (optional enhancement)
    const introText = document.querySelector('.intro-text');
    if (introText) {
        const text = introText.textContent;
        introText.textContent = '';
        introText.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                introText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Console noir
    console.log('%c🎬 SELF — Noir Edition', 'color: #888; font-size: 14px; font-style: italic;');
    console.log('%cIn a world of reactive AI...', 'color: #666; font-style: italic;');
    console.log('%cOne framework dared to think.', 'color: #fff; font-weight: bold;');
});

