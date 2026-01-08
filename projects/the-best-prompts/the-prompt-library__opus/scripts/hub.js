/**
 * Observatory Hub Interactions
 * The Prompt Library Portal
 */

document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initTelescopes();
    initKeyboardNavigation();
});

/**
 * Initialize starfield background
 */
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 200;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 0.5 + 0.1
        });
    }
    
    // Animate stars
    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            // Twinkle effect
            star.opacity += (Math.random() - 0.5) * 0.02;
            star.opacity = Math.max(0.2, Math.min(1, star.opacity));
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`;
            ctx.fill();
            
            // Draw glow
            const gradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.radius * 3
            );
            gradient.addColorStop(0, `rgba(212, 175, 55, ${star.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(star.x - star.radius * 3, star.y - star.radius * 3, star.radius * 6, star.radius * 6);
        });
        
        requestAnimationFrame(animateStars);
    }
    
    animateStars();
}

/**
 * Initialize telescope interactions
 */
function initTelescopes() {
    const telescopes = document.querySelectorAll('.telescope');
    let activeTelescope = null;
    
    telescopes.forEach((telescope, index) => {
        const chamber = telescope.getAttribute('data-chamber');
        
        // Click to enter chamber
        telescope.addEventListener('click', () => {
            enterChamber(chamber);
        });
        
        // Hover effects
        telescope.addEventListener('mouseenter', () => {
            if (activeTelescope && activeTelescope !== telescope) {
                activeTelescope.classList.remove('active');
            }
            telescope.classList.add('active');
            activeTelescope = telescope;
            
            // Highlight constellation line
            const line = document.querySelector(`.constellation-line[data-chamber="${chamber}"]`);
            if (line) {
                line.style.strokeOpacity = '0.8';
            }
        });
        
        telescope.addEventListener('mouseleave', () => {
            telescope.classList.remove('active');
            const line = document.querySelector(`.constellation-line[data-chamber="${chamber}"]`);
            if (line) {
                line.style.strokeOpacity = '0.3';
            }
        });
        
        // Touch support
        telescope.addEventListener('touchstart', (e) => {
            e.preventDefault();
            telescope.classList.add('active');
            setTimeout(() => {
                enterChamber(chamber);
            }, 300);
        });
    });
}

/**
 * Enter a chamber
 */
function enterChamber(chamber) {
    // Smooth transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = `chambers/${chamber}/index.html`;
    }, 300);
}

/**
 * Initialize keyboard navigation
 */
function initKeyboardNavigation() {
    const telescopes = Array.from(document.querySelectorAll('.telescope'));
    let currentIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % telescopes.length;
            focusTelescope(telescopes[currentIndex]);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + telescopes.length) % telescopes.length;
            focusTelescope(telescopes[currentIndex]);
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const chamber = telescopes[currentIndex].getAttribute('data-chamber');
            enterChamber(chamber);
        }
    });
}

/**
 * Focus a telescope (for keyboard navigation)
 */
function focusTelescope(telescope) {
    // Remove focus from all
    document.querySelectorAll('.telescope').forEach(t => {
        t.classList.remove('keyboard-focus');
    });
    
    // Add focus to selected
    telescope.classList.add('keyboard-focus');
    
    // Scroll into view if needed
    telescope.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Trigger hover effect
    telescope.dispatchEvent(new MouseEvent('mouseenter'));
}

/**
 * Add keyboard focus styles
 */
const style = document.createElement('style');
style.textContent = `
    .telescope.keyboard-focus {
        outline: 2px solid var(--obs-starlight);
        outline-offset: 4px;
    }
`;
document.head.appendChild(style);

