/**
 * Programmer's Day Carousel Script
 * Interactive code celebration
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvas background
    const canvas = document.getElementById('canvas');
    const matrixCanvas = new MatrixCanvas(canvas);
    
    // Initialize carousel engine
    const carousel = new CarouselEngine('#carousel', {
        autoPlay: false,
        loop: true,
        transition: 'fade',
        transitionDuration: 600,
        haptic: true
    });
    
    // Connect canvas to carousel
    carousel.setCanvasBackground(matrixCanvas);
    
    // Initialize interactive features
    initCodeEditor();
    initStatsCounter();
    initRubberDuck();
    initKonamiCode();
    
    // Track slide events
    carousel.on('slideShown', ({ index }) => {
        if (index === 3) { // Stats slide
            animateStats();
        }
    });
});

/**
 * Code Editor Controller
 */
function initCodeEditor() {
    const input = document.getElementById('codeInput');
    const output = document.getElementById('codeOutput');
    const runBtn = document.getElementById('runCode');
    
    runBtn.addEventListener('click', () => {
        const code = input.value;
        
        // Simple console.log capture
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
            logs.push(args.join(' '));
        };
        
        try {
            eval(code);
            output.innerHTML = logs.map(log => 
                `<span class="output-prompt">&gt;</span> ${escapeHtml(log)}`
            ).join('<br>');
            output.style.color = 'var(--accent-green)';
        } catch (error) {
            output.innerHTML = `<span class="output-prompt">&gt;</span> Error: ${escapeHtml(error.message)}`;
            output.style.color = 'var(--accent-pink)';
        }
        
        console.log = originalLog;
        
        // Haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(20);
        }
    });
    
    // Update line numbers on input
    input.addEventListener('input', () => {
        const lines = input.value.split('\n').length;
        const lineNumbers = document.querySelector('.line-numbers');
        lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => 
            `<span>${i + 1}</span>`
        ).join('');
    });
}

/**
 * Escape HTML for safe display
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Stats Counter Animation
 */
function initStatsCounter() {
    // Will be triggered when stats slide is shown
}

function animateStats() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Reset and animate
        counter.textContent = '0';
        requestAnimationFrame(updateCounter);
    });
}

/**
 * Rubber Duck Drag Controller
 */
function initRubberDuck() {
    const duck = document.getElementById('rubberDuck');
    let isDragging = false;
    let startX, startY, offsetX, offsetY;
    
    duck.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        offsetX = 0;
        offsetY = 0;
        duck.style.animation = 'none';
        duck.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        
        duck.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX * 0.1}deg)`;
    });
    
    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        
        // Spring back animation
        duck.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        duck.style.transform = 'translate(0, 0) rotate(0deg)';
        
        setTimeout(() => {
            duck.style.transition = '';
            duck.style.animation = 'float 3s ease-in-out infinite';
            duck.style.cursor = 'grab';
        }, 500);
        
        // Quack!
        console.log('🦆 Quack! Debugging powers activated!');
    });
    
    // Touch support
    duck.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        offsetX = 0;
        offsetY = 0;
        duck.style.animation = 'none';
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        offsetX = e.touches[0].clientX - startX;
        offsetY = e.touches[0].clientY - startY;
        
        duck.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX * 0.1}deg)`;
    });
    
    document.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        duck.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        duck.style.transform = 'translate(0, 0) rotate(0deg)';
        
        setTimeout(() => {
            duck.style.transition = '';
            duck.style.animation = 'float 3s ease-in-out infinite';
        }, 500);
    });
}

/**
 * Konami Code Easter Egg
 */
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Create celebration overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.5s ease;
    `;
    
    overlay.innerHTML = `
        <div style="font-size: 6rem; margin-bottom: 2rem;">🎮</div>
        <h2 style="font-size: 2rem; color: #8b5cf6; margin-bottom: 1rem;">Konami Code Activated!</h2>
        <p style="color: #8b949e; margin-bottom: 2rem;">+30 lives. You're a true gamer-programmer!</p>
        <button id="closeEaster" style="
            padding: 1rem 2rem;
            background: #8b5cf6;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 1rem;
            cursor: pointer;
        ">Nice!</button>
    `;
    
    document.body.appendChild(overlay);
    
    // Confetti effect
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#8b5cf6', '#06b6d4', '#10b981', '#ec4899'][Math.floor(Math.random() * 4)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
            z-index: 1001;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
    
    // Add confetti animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Close button
    document.getElementById('closeEaster').addEventListener('click', () => {
        overlay.remove();
        style.remove();
    });
}

