// Particle System for THE THRESHOLD
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.letterParticles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createParticle(x, y, isLetter = false) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isLetter ? Math.random() * 3 + 1 : Math.random() * 0.5 + 0.1;
        const particle = {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - (isLetter ? Math.random() * 2 : 0),
            size: isLetter ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5,
            life: 1,
            decay: isLetter ? Math.random() * 0.008 + 0.003 : Math.random() * 0.002 + 0.001,
            isLetter
        };
        
        if (isLetter) {
            this.letterParticles.push(particle);
        } else {
            this.particles.push(particle);
        }
    }

    createAmbientParticles() {
        if (this.particles.length < 50 && Math.random() < 0.1) {
            this.createParticle(
                Math.random() * this.width,
                Math.random() * this.height
            );
        }
    }

    createLetterBurst(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            this.createParticle(
                x + (Math.random() - 0.5) * 50,
                y + (Math.random() - 0.5) * 50,
                true
            );
        }
    }

    update() {
        // Update ambient particles
        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            return p.life > 0;
        });

        // Update letter particles
        this.letterParticles = this.letterParticles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.02; // Subtle gravity
            p.life -= p.decay;
            return p.life > 0;
        });

        this.createAmbientParticles();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw ambient particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.life * 0.3})`;
            this.ctx.fill();
        });

        // Draw letter particles (brighter)
        this.letterParticles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.life * 0.8})`;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize
const canvas = document.getElementById('particle-canvas');
const particleSystem = new ParticleSystem(canvas);
particleSystem.animate();

// Letter fragmentation on scroll
const letters = document.querySelectorAll('.letter');
const thresholdWord = document.getElementById('threshold-word');
let lastScrollY = 0;
let fragmentedLetters = new Set();

function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollY / windowHeight, 1);

    // Determine which letters should fragment based on scroll
    const lettersToFragment = Math.floor(scrollProgress * letters.length);

    letters.forEach((letter, index) => {
        if (index < lettersToFragment && !fragmentedLetters.has(index)) {
            // Fragment this letter
            fragmentedLetters.add(index);
            
            // Get letter position for particle burst
            const rect = letter.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            // Create particle burst
            particleSystem.createLetterBurst(x, y, 40);
            
            // Animate letter fragmentation with random direction
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 100 - 50;
            const randomRotation = (Math.random() - 0.5) * 90;
            
            letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg) scale(0.5)`;
            letter.classList.add('fragmenting');
        } else if (index >= lettersToFragment && fragmentedLetters.has(index)) {
            // Restore letter if scrolling back up
            fragmentedLetters.delete(index);
            letter.style.transform = '';
            letter.classList.remove('fragmenting');
        }
    });

    lastScrollY = scrollY;
}

// Reveal sections on scroll
const revealSections = document.querySelectorAll('.reveal-section');

function handleReveal() {
    revealSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
}

// Throttled scroll handler
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            handleReveal();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial check
handleReveal();

