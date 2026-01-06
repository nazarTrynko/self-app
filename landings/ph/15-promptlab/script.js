document.addEventListener('DOMContentLoaded', () => {
    const testForm = document.getElementById('testForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (testForm) {
        testForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = testForm.querySelector('input');
            const prompt = input.value.trim();
            
            if (prompt) {
                const button = testForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = 'Testing...';
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

