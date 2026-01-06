document.addEventListener('DOMContentLoaded', () => {
    const calibrateForm = document.getElementById('calibrateForm');
    const ctaForm = document.getElementById('ctaForm');
    
    if (calibrateForm) {
        calibrateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = calibrateForm.querySelector('button');
            button.textContent = 'Calibrating...';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = 'Calibrate';
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

