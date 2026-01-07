// PageDoctor - Website Health Check Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Animate score on scroll
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreFill = document.getElementById('scoreFill');
    const scoreNumber = document.getElementById('scoreNumber');
    const targetScore = 73;
    
    // Calculate stroke offset for score
    const circumference = 2 * Math.PI * 54; // radius = 54
    const offset = circumference - (targetScore / 100) * circumference;
    
    // Intersection Observer for score animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the circular progress
                setTimeout(() => {
                    scoreFill.style.strokeDashoffset = offset;
                }, 300);
                
                // Animate the number
                animateNumber(scoreNumber, 0, targetScore, 1500);
                
                // Animate mode bars
                document.querySelectorAll('.mode-fill').forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--score');
                    }, 500 + (index * 100));
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (scoreCircle) {
        observer.observe(scoreCircle);
    }
    
    // Number animation helper
    function animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOut);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Form handling
    const analyzeForm = document.getElementById('analyzeForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (analyzeForm) {
        analyzeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = analyzeForm.querySelector('input');
            const url = input.value.trim();
            
            if (url) {
                // Simulate analysis starting
                const button = analyzeForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinning">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Analyzing...
                `;
                button.disabled = true;
                
                // Simulate completion
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    
                    // Scroll to demo
                    document.querySelector('.demo-section').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }, 2000);
            }
        });
    }
    
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = ctaForm.querySelector('input');
            const email = input.value.trim();
            
            if (email) {
                const button = ctaForm.querySelector('button');
                button.textContent = 'Added to Waitlist!';
                button.style.background = '#22C55E';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = 'Get Early Access';
                    button.style.background = '';
                }, 3000);
            }
        });
    }
    
    // Mode cards hover effect
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const score = card.dataset.score;
            const color = card.dataset.color;
            card.style.borderColor = color;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add spinning animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinning {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
});

