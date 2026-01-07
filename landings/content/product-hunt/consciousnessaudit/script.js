document.addEventListener('DOMContentLoaded', () => {
    const auditForm = document.getElementById('auditForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (auditForm) {
        auditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = auditForm.querySelector('button');
            button.textContent = 'Auditing...';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = 'Start Audit';
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

