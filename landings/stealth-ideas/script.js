// Stealth Ideas Gallery - Interactive Features
(function() {
  'use strict';

  // State
  let currentFilters = {
    search: '',
    difficulty: 'all',
    fitness: 'all'
  };
  let filteredIdeas = [...STEALTH_IDEAS];
  let mouseX = 0;
  let mouseY = 0;

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initParticleSystem();
    initStatsDashboard();
    renderIdeas();
    initSearch();
    initFilters();
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

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.x -= (dx / distance) * force * 2;
          this.y -= (dy / distance) * force * 2;
        }

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

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

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
    const total = STEALTH_IDEAS.length;
    const avgFitness = getAverageFitness();
    const totalRevenue = getTotalRevenuePotential();
    const categories = getAllCategories().length;

    animateValue('statTotal', 0, total, 1000);
    animateValue('statAvgFitness', 0, Math.round(avgFitness * 100), 1000, '%');
    document.getElementById('statRevenue').textContent = totalRevenue;
    animateValue('statCategories', 0, categories, 1000);
  }

  function getAverageFitness() {
    const sum = STEALTH_IDEAS.reduce((acc, idea) => acc + idea.fitness.score, 0);
    return sum / STEALTH_IDEAS.length;
  }

  function getTotalRevenuePotential() {
    // Extract max revenue from each idea (simplified)
    return '$50k+';
  }

  function getAllCategories() {
    const categories = new Set(STEALTH_IDEAS.map(idea => idea.category));
    return Array.from(categories);
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

  // ============================================
  // SEARCH
  // ============================================
  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      currentFilters.search = e.target.value.toLowerCase();
      applyFilters();
    });
  }

  // ============================================
  // FILTERS
  // ============================================
  function initFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        const filter = chip.dataset.filter;
        if (filter === 'all') {
          currentFilters.difficulty = 'all';
          currentFilters.fitness = 'all';
        } else if (filter === 'low' || filter === 'medium' || filter === 'high') {
          currentFilters.difficulty = filter;
          currentFilters.fitness = 'all';
        } else if (filter === 'fitness-high') {
          currentFilters.fitness = 'high';
          currentFilters.difficulty = 'all';
        }
        
        applyFilters();
      });
    });
  }

  // ============================================
  // FILTER LOGIC
  // ============================================
  function applyFilters() {
    filteredIdeas = STEALTH_IDEAS.filter(idea => {
      // Search filter
      if (currentFilters.search) {
        const searchTerm = currentFilters.search;
        const matchesSearch = 
          idea.title.toLowerCase().includes(searchTerm) ||
          idea.tagline.toLowerCase().includes(searchTerm) ||
          idea.category.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Difficulty filter
      if (currentFilters.difficulty !== 'all') {
        const difficultyMap = {
          'low': 'Low',
          'medium': 'Medium',
          'high': 'High'
        };
        if (idea.difficulty !== difficultyMap[currentFilters.difficulty]) {
          return false;
        }
      }

      // Fitness filter
      if (currentFilters.fitness === 'high') {
        if (idea.fitness.score < 0.75) return false;
      }

      return true;
    });

    renderIdeas();
  }

  // ============================================
  // RENDER IDEAS
  // ============================================
  function renderIdeas() {
    const grid = document.getElementById('ideasGrid');
    if (!grid) return;

    if (filteredIdeas.length === 0) {
      grid.innerHTML = '<div class="no-results">No ideas match your filters. Try adjusting your search.</div>';
      return;
    }

    grid.innerHTML = filteredIdeas.map(idea => {
      const fitnessPercent = Math.round(idea.fitness.score * 100);
      const path = getIdeaPath(idea.id);
      
      return `
        <div class="idea-card" onclick="window.location.href='${path}'">
          <div class="idea-header">
            <div class="idea-icon">${idea.icon}</div>
            <div class="idea-title-section">
              <h3 class="idea-title">${idea.title}</h3>
              <p class="idea-tagline">${idea.tagline}</p>
            </div>
          </div>
          
          <div class="fitness-score">
            <span class="fitness-label">Fitness</span>
            <div class="fitness-bar">
              <div class="fitness-fill" style="width: ${fitnessPercent}%"></div>
            </div>
            <span class="fitness-value">${fitnessPercent}%</span>
          </div>
          
          <div class="idea-meta">
            <span class="meta-badge">${idea.difficulty}</span>
            <span class="meta-badge">${idea.revenue_potential}</span>
            <span class="meta-badge">${idea.category}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function getIdeaPath(id) {
    const pathMap = {
      'stealth-infoproduct': '01-stealth-infoproduct/',
      'ai-prompt-marketplace': '02-ai-prompt-marketplace/',
      'digital-template-library': '03-digital-template-library/',
      'micro-course-aggregator': '04-micro-course-aggregator/',
      'automation-script-store': '05-automation-script-store/',
      'design-asset-marketplace': '06-design-asset-marketplace/',
      'copywriting-templates': '07-copywriting-templates/',
      'niche-tool-directory': '08-niche-tool-directory/',
      'community-access-pass': '09-community-access-pass/',
      'dfy-service-marketplace': '10-dfy-service-marketplace/'
    };
    return pathMap[id] || '#';
  }
})();

