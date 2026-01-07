document.addEventListener('DOMContentLoaded', () => {
    const analyzeForm = document.getElementById('analyzeForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (analyzeForm) {
        analyzeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = analyzeForm.querySelector('button');
            button.textContent = 'Analyzing...';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = 'Analyze';
                button.disabled = false;
                document.querySelector('.demo-section').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        });
    }
    
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = ctaForm.querySelector('button');
            button.textContent = 'Added!';
            button.style.background = '#22C55E';
            setTimeout(() => {
                button.textContent = 'Get Early Access';
                button.style.background = '';
            }, 3000);
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

