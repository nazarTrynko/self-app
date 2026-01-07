// ClientSafe Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  initWaitlistForms();
  initScrollAnimations();
  initVaultAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're in! We'll notify you when ClientSafe launches.",
      onSuccess: (email) => {
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { product: 'clientsafe' });
        }
      }
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.feature, .solution-step, .flow-step').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initVaultAnimation() {
  const vaultCard = document.querySelector('.vault-card');
  if (!vaultCard) return;
  
  // Add subtle glow on hover
  vaultCard.addEventListener('mouseenter', () => {
    vaultCard.style.boxShadow = '0 25px 80px rgba(20, 184, 166, 0.2)';
    vaultCard.style.borderColor = 'rgba(20, 184, 166, 0.3)';
  });
  
  vaultCard.addEventListener('mouseleave', () => {
    vaultCard.style.boxShadow = '';
    vaultCard.style.borderColor = '';
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

