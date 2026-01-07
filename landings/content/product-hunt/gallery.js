// Gallery Interactive Features
(function() {
  'use strict';

  // State
  let currentFilters = {
    search: '',
    confidence: null,
    category: 'all'
  };
  let filteredProducts = [...PRODUCTS_DATA];
  let mouseX = 0;
  let mouseY = 0;

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initParticleSystem();
    initStatsDashboard();
    renderProducts();
    initSearch();
    initFilters();
    init3DTilt();
    initPreview();
    initStaggeredAnimations();
  });

  // ============================================
  // PARTICLE SYSTEM
  // ============================================
  function initParticleSystem() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 75;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
        }

        // Wrap around edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    // Track mouse
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    animate();
  }

  // ============================================
  // STATS DASHBOARD
  // ============================================
  function initStatsDashboard() {
    const total = PRODUCTS_DATA.length;
    const avgConfidence = getAverageConfidence();
    const topCategory = getTopCategory();
    const categories = getAllCategories().length;

    animateValue('statTotal', 0, total, 1000);
    animateValue('statAvgConfidence', 0, avgConfidence, 1000, '%');
    document.getElementById('statTopCategory').textContent = topCategory;
    animateValue('statCategories', 0, categories, 1000);
  }

  function animateValue(id, start, end, duration, suffix = '') {
    const element = document.getElementById(id);
    if (!element) return;

    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);
      element.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  function updateStats() {
    const total = filteredProducts.length;
    const avgConfidence = filteredProducts.length > 0
      ? Math.round(filteredProducts.reduce((sum, p) => sum + p.confidence, 0) / filteredProducts.length)
      : 0;
    const categories = new Set(filteredProducts.map(p => p.category)).size;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statAvgConfidence').textContent = avgConfidence + '%';
    document.getElementById('statCategories').textContent = categories;
  }

  // ============================================
  // PRODUCT RENDERING
  // ============================================
  function renderProductsBase() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    filteredProducts.forEach((product, index) => {
      const card = createProductCard(product, index);
      gallery.appendChild(card);
    });

    updateResultsCount();
    updateStats();
  }

  function createProductCard(product, index) {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.setAttribute('data-id', product.id);
    article.setAttribute('data-confidence', product.confidence);
    article.setAttribute('data-category', product.category);
    article.setAttribute('data-theme', product.theme);
    article.style.animationDelay = `${index * 0.05}s`;

    article.innerHTML = `
      <div class="card-preview theme-${product.theme}">
        <span class="card-icon">${product.icon}</span>
      </div>
      <div class="card-content">
        <span class="card-badge">${product.confidence}% Confidence</span>
        <h2 class="card-title">${product.name}</h2>
        <p class="card-tagline">${product.tagline}</p>
        <a href="${product.path}" class="card-link">
          View Landing
          <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"/></svg>
        </a>
      </div>
    `;

    return article;
  }

  // ============================================
  // SEARCH
  // ============================================
  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentFilters.search = e.target.value.toLowerCase().trim();
        applyFilters();
      }, 300);
    });
  }

  // ============================================
  // FILTERS
  // ============================================
  function initFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    const clearFilters = document.getElementById('clearFilters');

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filterType = chip.dataset.filter;
        const filterValue = chip.dataset.value;

        if (filterType === 'confidence') {
          // Toggle confidence filter
          if (currentFilters.confidence === filterValue) {
            currentFilters.confidence = null;
            chip.classList.remove('active');
          } else {
            // Remove active from other confidence filters
            document.querySelectorAll('[data-filter="confidence"]').forEach(c => c.classList.remove('active'));
            currentFilters.confidence = filterValue;
            chip.classList.add('active');
          }
        } else if (filterType === 'category') {
          // Category filter (if we add category chips later)
          currentFilters.category = filterValue;
          document.querySelectorAll('[data-filter="category"]').forEach(c => {
            c.classList.toggle('active', c.dataset.value === filterValue);
          });
        }

        applyFilters();
      });
    });

    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        currentFilters = { search: '', confidence: null, category: 'all' };
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        applyFilters();
      });
    }
  }

  function applyFilters() {
    filteredProducts = PRODUCTS_DATA.filter(product => {
      // Search filter
      if (currentFilters.search) {
        const searchTerm = currentFilters.search;
        const matchesSearch = 
          product.name.toLowerCase().includes(searchTerm) ||
          product.tagline.toLowerCase().includes(searchTerm) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        if (!matchesSearch) return false;
      }

      // Confidence filter
      if (currentFilters.confidence) {
        const range = currentFilters.confidence;
        const confidence = product.confidence;
        if (range === '95%+' && confidence < 95) return false;
        if (range === '90-95%' && (confidence < 90 || confidence >= 95)) return false;
        if (range === '85-90%' && (confidence < 85 || confidence >= 90)) return false;
        if (range === '80-85%' && (confidence < 80 || confidence >= 85)) return false;
      }

      // Category filter
      if (currentFilters.category && currentFilters.category !== 'all') {
        if (product.category !== currentFilters.category) return false;
      }

      return true;
    });

    renderProducts();
  }

  function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (!resultsCount) return;

    const count = filteredProducts.length;
    const total = PRODUCTS_DATA.length;
    if (count === total) {
      resultsCount.textContent = `Showing all ${total} products`;
    } else {
      resultsCount.textContent = `Showing ${count} of ${total} products`;
    }
  }

  // ============================================
  // 3D TILT EFFECT
  // ============================================
  function init3DTilt() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return; // Disable on mobile

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.boxShadow = `0 ${Math.abs(rotateX) * 2}px ${Math.abs(rotateX) * 3}px rgba(168, 85, 247, 0.2)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  // Re-initialize 3D tilt after rendering
  function reinit3DTilt() {
    setTimeout(() => {
      init3DTilt();
    }, 100);
  }

  // ============================================
  // LIVE PREVIEW
  // ============================================
  function initPreview() {
    const previewOverlay = document.getElementById('previewOverlay');
    if (!previewOverlay) return;

    let previewTimer;

    document.addEventListener('mouseover', (e) => {
      const card = e.target.closest('.product-card');
      if (!card) {
        previewOverlay.classList.remove('visible');
        return;
      }

      clearTimeout(previewTimer);
      previewTimer = setTimeout(() => {
        const productId = card.dataset.id;
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        showPreview(product, card);
      }, 300);
    });

    document.addEventListener('mouseout', (e) => {
      if (!e.target.closest('.product-card')) {
        clearTimeout(previewTimer);
        previewOverlay.classList.remove('visible');
      }
    });
  }

  function showPreview(product, card) {
    const previewOverlay = document.getElementById('previewOverlay');
    const previewTheme = document.getElementById('previewTheme');
    const previewBadge = document.getElementById('previewBadge');
    const previewCategory = document.getElementById('previewCategory');

    if (!previewOverlay || !previewTheme || !previewBadge || !previewCategory) return;

    // Set preview content
    previewTheme.className = `preview-theme theme-${product.theme}`;
    previewBadge.textContent = `${product.confidence}% Confidence`;
    previewCategory.textContent = product.category;

    // Position preview
    const rect = card.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let left = rect.right + 20;
    let top = rect.top + scrollY;

    // Adjust if too far right
    if (left + 300 > window.innerWidth) {
      left = rect.left - 320;
    }

    // Adjust if too far down
    if (top + 200 > window.innerHeight + scrollY) {
      top = window.innerHeight + scrollY - 220;
    }

    previewOverlay.style.left = `${left}px`;
    previewOverlay.style.top = `${top}px`;
    previewOverlay.classList.add('visible');
  }

  // ============================================
  // STAGGERED ANIMATIONS
  // ============================================
  function initStaggeredAnimations() {
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });
  }

  // Re-initialize animations after rendering
  function reinitStaggeredAnimations() {
    setTimeout(() => {
      initStaggeredAnimations();
    }, 100);
  }

  // Wrap renderProducts to include re-initialization
  function renderProducts() {
    renderProductsBase();
    reinit3DTilt();
    reinitStaggeredAnimations();
  }

})();

