// ScopeGuard Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  initWaitlistForms();
  initScrollAnimations();
  initScopeBarAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're protected! We'll notify you when ScopeGuard launches.",
      onSuccess: (email) => {
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { product: 'scopeguard' });
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
  
  document.querySelectorAll('.feature, .stat, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initScopeBarAnimation() {
  const barAdditions = document.querySelector('.bar-additions');
  const additions = document.querySelectorAll('.addition');
  
  if (barAdditions) {
    barAdditions.style.width = '0';
    
    setTimeout(() => {
      barAdditions.style.transition = 'width 1s ease-out';
      barAdditions.style.width = '28%';
    }, 800);
  }
  
  additions.forEach((addition, index) => {
    addition.style.opacity = '0';
    addition.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      addition.style.transition = 'all 0.4s ease';
      addition.style.opacity = '1';
      addition.style.transform = 'translateY(0)';
    }, 1200 + (index * 300));
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

