// ConvertFix Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  initWaitlistForms();
  initScrollAnimations();
  initScanAnimation();
});

function initWaitlistForms() {
  const forms = document.querySelectorAll('[data-waitlist-form]');
  
  forms.forEach(form => {
    if (!form.id) {
      form.id = 'waitlist-' + Math.random().toString(36).substr(2, 9);
    }
    new WaitlistForm(`#${form.id}`, {
      successMessage: "You're on the list! We'll notify you when ConvertFix launches.",
      onSuccess: (email) => {
        if (typeof Analytics !== 'undefined') {
          Analytics.track('waitlist_signup', { 
            product: 'convertfix',
            email_domain: email.split('@')[1]
          });
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
  
  document.querySelectorAll('.feature, .process-step, .testimonial, .pricing-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function initScanAnimation() {
  const issues = document.querySelectorAll('.issue');
  
  issues.forEach((issue, index) => {
    issue.style.opacity = '0';
    issue.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      issue.style.transition = 'all 0.4s ease';
      issue.style.opacity = '1';
      issue.style.transform = 'translateX(0)';
    }, 800 + (index * 200));
  });
  
  // Animate score counting up
  const scoreEl = document.querySelector('.score-value');
  if (scoreEl) {
    let current = 0;
    const target = parseInt(scoreEl.textContent);
    const duration = 1500;
    const increment = target / (duration / 16);
    
    scoreEl.textContent = '0';
    
    setTimeout(() => {
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          scoreEl.textContent = target;
          clearInterval(counter);
        } else {
          scoreEl.textContent = Math.floor(current);
        }
      }, 16);
    }, 500);
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

