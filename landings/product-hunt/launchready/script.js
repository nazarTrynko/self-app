// LaunchReady - Pre-Launch Audit Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Animate score on scroll
    const scoreRing = document.getElementById('scoreRing');
    const ringFill = document.getElementById('ringFill');
    const scorePercent = document.getElementById('scorePercent');
    const targetScore = 67;
    
    // Calculate stroke offset for score
    const circumference = 2 * Math.PI * 90; // radius = 90
    const offset = circumference - (targetScore / 100) * circumference;
    
    // Intersection Observer for score animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the circular progress
                setTimeout(() => {
                    ringFill.style.strokeDashoffset = offset;
                }, 300);
                
                // Animate the number
                animateNumber(scorePercent, 0, targetScore, 2000);
                
                // Animate checklist items
                animateChecklist();
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (scoreRing) {
        observer.observe(scoreRing);
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
    
    // Animate checklist items sequentially
    function animateChecklist() {
        const items = document.querySelectorAll('.check-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 500 + (index * 100));
        });
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
                const button = analyzeForm.querySelector('button');
                const btnText = button.querySelector('.btn-text');
                const btnIcon = button.querySelector('.btn-icon');
                
                btnText.textContent = 'Analyzing...';
                btnIcon.textContent = '⏳';
                button.disabled = true;
                
                // Simulate completion
                setTimeout(() => {
                    btnText.textContent = 'Check Launch Readiness';
                    btnIcon.textContent = '→';
                    button.disabled = false;
                    
                    // Scroll to demo
                    document.querySelector('.demo-section').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }, 2500);
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
                button.textContent = 'You\'re on the list!';
                button.style.background = '#22C55E';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = 'Get Launch Ready';
                    button.style.background = '';
                }, 3000);
            }
        });
    }
    
    // Countdown animation
    const countdownValue = document.querySelector('.countdown-value');
    if (countdownValue) {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        
        function updateCountdown() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            
            const h = String(hours).padStart(2, '0');
            const m = String(minutes).padStart(2, '0');
            const s = String(seconds).padStart(2, '0');
            
            countdownValue.textContent = `${h}:${m}:${s}`;
        }
        
        // Start after a delay
        setTimeout(() => {
            setInterval(updateCountdown, 1000);
        }, 1000);
    }
    
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
    
    // Add hover effects to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
    
    // Parallax stars effect
    document.addEventListener('mousemove', (e) => {
        const stars = document.querySelector('.stars');
        if (stars) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            stars.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});

