/**
 * Loving Kindness Carousel Script
 * Interactive metta meditation experience
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvas background
    const canvas = document.getElementById('canvas');
    const heartbeatCanvas = new HeartbeatCanvas(canvas);
    
    // Initialize carousel engine
    const carousel = new CarouselEngine('#carousel', {
        autoPlay: false,
        loop: true,
        transition: 'fade',
        transitionDuration: 600,
        haptic: true
    });
    
    // Connect canvas to carousel
    carousel.setCanvasBackground(heartbeatCanvas);
    
    // Breathing exercise functionality
    initBreathingExercise();
    
    // Personalization functionality
    initPersonalization();
    
    // Track slide views for analytics
    carousel.on('slideShown', ({ index }) => {
        console.log(`Slide ${index + 1} viewed`);
        
        // Trigger specific actions per slide
        if (index === 5) { // Practice slide
            resetBreathingExercise();
        }
    });
});

/**
 * Breathing Exercise Controller
 */
function initBreathingExercise() {
    const circle = document.getElementById('breathingCircle');
    const text = document.getElementById('breathingText');
    const toggle = document.getElementById('breathingToggle');
    const phases = document.querySelectorAll('.guide-phase');
    
    let isActive = false;
    let currentPhase = 'inhale';
    let breathingInterval = null;
    
    const phaseConfig = {
        inhale: { duration: 4000, next: 'hold', text: 'Вдих' },
        hold: { duration: 4000, next: 'exhale', text: 'Тримайте' },
        exhale: { duration: 4000, next: 'inhale', text: 'Видих' }
    };
    
    function setPhase(phase) {
        currentPhase = phase;
        const config = phaseConfig[phase];
        
        // Update circle
        circle.className = 'breathing-circle ' + phase;
        
        // Update text
        text.textContent = config.text;
        
        // Update guide
        phases.forEach(p => {
            p.classList.toggle('active', p.dataset.phase === phase);
        });
        
        // Haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(phase === 'inhale' ? 20 : 10);
        }
    }
    
    function startBreathing() {
        isActive = true;
        toggle.classList.add('active');
        
        function breathCycle() {
            if (!isActive) return;
            
            const config = phaseConfig[currentPhase];
            setPhase(currentPhase);
            
            breathingInterval = setTimeout(() => {
                currentPhase = config.next;
                breathCycle();
            }, config.duration);
        }
        
        breathCycle();
    }
    
    function stopBreathing() {
        isActive = false;
        toggle.classList.remove('active');
        
        if (breathingInterval) {
            clearTimeout(breathingInterval);
            breathingInterval = null;
        }
        
        // Reset to initial state
        currentPhase = 'inhale';
        circle.className = 'breathing-circle';
        text.textContent = 'Вдих';
        phases.forEach(p => p.classList.remove('active'));
        phases[0].classList.add('active');
    }
    
    toggle.addEventListener('click', () => {
        if (isActive) {
            stopBreathing();
        } else {
            startBreathing();
        }
    });
    
    // Expose reset function
    window.resetBreathingExercise = stopBreathing;
}

/**
 * Personalization Controller
 */
function initPersonalization() {
    const input = document.getElementById('nameInput');
    const btn = document.getElementById('personalizeBtn');
    const affirmations = [
        document.getElementById('affirmation1'),
        document.getElementById('affirmation2'),
        document.getElementById('affirmation3'),
        document.getElementById('affirmation4')
    ];
    
    const originalTexts = [
        'Нехай я буду щасливий/а',
        'Нехай я буду здоровий/а',
        'Нехай я буду в безпеці',
        'Нехай я живу легко'
    ];
    
    btn.addEventListener('click', () => {
        const name = input.value.trim();
        
        if (name) {
            // Personalize affirmations
            affirmations[0].textContent = `Нехай ${name} буде щасливий/а`;
            affirmations[1].textContent = `Нехай ${name} буде здоровий/а`;
            affirmations[2].textContent = `Нехай ${name} буде в безпеці`;
            affirmations[3].textContent = `Нехай ${name} живе легко`;
            
            // Visual feedback
            btn.textContent = '✓ Персоналізовано';
            btn.style.background = 'var(--accent-primary)';
            
            // Re-trigger animation
            affirmations.forEach((el, i) => {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = `typeReveal 0.8s var(--ease-elegant) forwards ${0.2 + i * 0.4}s`;
            });
            
            // Save to localStorage
            localStorage.setItem('lovingKindnessName', name);
        }
    });
    
    // Load saved name
    const savedName = localStorage.getItem('lovingKindnessName');
    if (savedName) {
        input.value = savedName;
    }
    
    // Enter key support
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btn.click();
        }
    });
}

/**
 * Reset breathing exercise when leaving slide
 */
function resetBreathingExercise() {
    if (window.resetBreathingExercise) {
        window.resetBreathingExercise();
    }
}

