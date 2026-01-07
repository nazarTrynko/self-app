document.addEventListener('DOMContentLoaded', () => {
    // Animate stats
    const statAgents = document.getElementById('statAgents');
    const statTasks = document.getElementById('statTasks');
    const statTime = document.getElementById('statTime');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(statAgents, 0, 3, 800);
                animateNumber(statTasks, 0, 12, 1200);
                animateValue(statTime, '0s', '2.3s', 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (statAgents) {
        observer.observe(statAgents);
    }
    
    function animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOut);
            element.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }
    
    function animateValue(element, start, end, duration) {
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.textContent = end;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }
    
    // Form handling
    const createForm = document.getElementById('createForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (createForm) {
        createForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = createForm.querySelector('input');
            const task = input.value.trim();
            
            if (task) {
                const button = createForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = 'Creating...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    document.querySelector('.demo-section').scrollIntoView({ behavior: 'smooth' });
                }, 1500);
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
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

