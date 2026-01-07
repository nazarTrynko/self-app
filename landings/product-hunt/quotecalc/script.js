// QuoteCalc Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  initWaitlistForms();
  initScrollAnimations();
  initQuoteAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're in! We'll notify you when QuoteCalc launches.",
      onSuccess: (email) => {
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { product: 'quotecalc' });
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
  
  document.querySelectorAll('.feature, .problem-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initQuoteAnimation() {
  const breakdownItems = document.querySelectorAll('.breakdown-item');
  
  breakdownItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.3s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 800 + (index * 150));
  });
  
  // Animate price value
  const priceEl = document.querySelector('.price-value');
  if (priceEl) {
    priceEl.style.opacity = '0';
    setTimeout(() => {
      priceEl.style.transition = 'opacity 0.5s ease';
      priceEl.style.opacity = '1';
    }, 1600);
  }
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

