/* ============================================
   AURUM — Platform JavaScript
   ============================================ */

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    user: null,
    library: JSON.parse(localStorage.getItem('aurum_library') || '[]'),
    recentPrompts: JSON.parse(localStorage.getItem('aurum_recent') || '[]'),
    aiDNA: JSON.parse(localStorage.getItem('aurum_dna') || '{}'),
    currentFilter: 'all',
    currentSort: 'popular',
    searchQuery: '',
    displayedPrompts: 12,
    catalystConversation: [],
    catalystStep: 0
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initAlchemicalBackground();
    initNavigation();
    initHeroAnimations();
    initPromptGrid();
    initSearch();
    initFilters();
    initModals();
    initCatalyst();
    initPromptLab();
    initLibrary();
    initTransformations();
    initDNAVisualization();
    initCreatorsGrid();
    initScrollAnimations();
    initStatCounters();
    initPricing();
    registerServiceWorker();
});

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('./sw.js', {
                scope: '/landings/aurum/'
            });
            
            console.log('✅ Service Worker registered:', registration.scope);
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New version available
                        showUpdateNotification();
                    }
                });
            });
        } catch (error) {
            console.log('⚠️ Service Worker registration failed:', error);
        }
    }
}

function showUpdateNotification() {
    const toast = document.createElement('div');
    toast.className = 'toast update-toast';
    toast.innerHTML = `
        <span class="toast-icon">🔄</span>
        <span class="toast-message">New version available!</span>
        <button class="toast-action" onclick="window.location.reload()">Update</button>
    `;
    
    document.getElementById('toastContainer')?.appendChild(toast);
}

// ============================================
// ALCHEMICAL BACKGROUND
// ============================================

function initAlchemicalBackground() {
    const canvas = document.getElementById('alchemical-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.2,
            hue: Math.random() * 30 + 35, // Gold range
            pulse: Math.random() * Math.PI * 2
        };
    }
    
    function init() {
        resize();
        particles = [];
        const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw gradient background
        const gradient = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(212, 168, 83, 0.03)');
        gradient.addColorStop(0.5, 'rgba(201, 132, 92, 0.02)');
        gradient.addColorStop(1, 'rgba(8, 8, 12, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw and update particles
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.02;
            
            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            // Calculate pulsing opacity
            const pulseOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
            
            // Draw particle with glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${pulseOpacity})`;
            ctx.fill();
            
            // Add glow effect for larger particles
            if (p.size > 1.5) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${pulseOpacity * 0.1})`;
                ctx.fill();
            }
            
            // Draw connections between nearby particles
            particles.slice(i + 1).forEach(p2 => {
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(212, 168, 83, ${0.1 * (1 - dist / 100)})`;
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', () => {
        resize();
    });
    
    init();
    draw();
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const nav = document.getElementById('mainNav');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile toggle
    mobileToggle?.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close mobile nav on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// HERO ANIMATIONS
// ============================================

function initHeroAnimations() {
    // Staggered animation for hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-actions, .hero-features');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + i * 100);
    });
    
    // Hero button actions
    document.getElementById('heroExplore')?.addEventListener('click', () => {
        document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('heroCatalyst')?.addEventListener('click', () => {
        openModal('catalystModal');
        initCatalystConversation();
    });
}

// ============================================
// STAT COUNTERS
// ============================================

function initStatCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCounter(target, count);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, stepTime);
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
}

// ============================================
// PROMPT GRID
// ============================================

function initPromptGrid() {
    renderPrompts();
    
    document.getElementById('loadMore')?.addEventListener('click', () => {
        state.displayedPrompts += 12;
        renderPrompts();
    });
}

function renderPrompts() {
    const grid = document.getElementById('promptGrid');
    if (!grid || typeof PROMPTS === 'undefined') return;
    
    let filteredPrompts = [...PROMPTS];
    
    // Apply filter
    if (state.currentFilter !== 'all') {
        if (state.currentFilter === 'chains') {
            filteredPrompts = filteredPrompts.filter(p => p.isChain);
        } else {
            filteredPrompts = filteredPrompts.filter(p => p.category === state.currentFilter);
        }
    }
    
    // Apply search
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filteredPrompts = filteredPrompts.filter(p => 
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.tags?.some(t => t.toLowerCase().includes(query))
        );
    }
    
    // Apply sort
    switch (state.currentSort) {
        case 'popular':
            filteredPrompts.sort((a, b) => b.uses - a.uses);
            break;
        case 'effective':
            filteredPrompts.sort((a, b) => b.effectiveness - a.effectiveness);
            break;
        case 'newest':
            filteredPrompts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'rating':
            filteredPrompts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    // Limit displayed
    const displayPrompts = filteredPrompts.slice(0, state.displayedPrompts);
    
    grid.innerHTML = displayPrompts.map(prompt => createPromptCard(prompt)).join('');
    
    // Add click handlers
    grid.querySelectorAll('.prompt-card').forEach(card => {
        card.addEventListener('click', () => {
            const promptId = card.dataset.id;
            const prompt = PROMPTS.find(p => p.id === promptId);
            if (prompt) openPromptDetail(prompt);
        });
    });
    
    // Update load more button visibility
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayPrompts.length < filteredPrompts.length ? 'inline-flex' : 'none';
    }
}

function createPromptCard(prompt) {
    const isSaved = state.library.includes(prompt.id);
    
    return `
        <div class="prompt-card" data-id="${prompt.id}">
            <div class="prompt-card-header">
                <div class="prompt-card-badges">
                    ${prompt.isChain ? '<span class="prompt-badge chain">Chain</span>' : ''}
                    ${prompt.isPro ? '<span class="prompt-badge pro">Pro</span>' : ''}
                    ${prompt.transformation ? `<span class="prompt-badge">${prompt.transformation}</span>` : ''}
                </div>
                <span class="prompt-card-price ${prompt.price === 0 ? 'free' : ''}">
                    ${prompt.price === 0 ? 'Free' : `$${prompt.price}`}
                </span>
            </div>
            <h3 class="prompt-card-title">${prompt.title}</h3>
            <p class="prompt-card-description">${prompt.description}</p>
            <div class="prompt-card-meta">
                <div class="prompt-card-creator">
                    <div class="creator-avatar">${prompt.creator.avatar}</div>
                    <span class="creator-name">${prompt.creator.name}</span>
                </div>
                <div class="prompt-card-stats">
                    <span class="prompt-card-stat">⭐ ${prompt.rating.toFixed(1)}</span>
                    <span class="prompt-card-stat">🔥 ${formatNumber(prompt.uses)}</span>
                    ${prompt.effectiveness ? `<span class="prompt-card-stat">✓ ${prompt.effectiveness}%</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// SEARCH
// ============================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    let debounceTimer;
    
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value;
        
        searchClear?.classList.toggle('hidden', !query);
        
        debounceTimer = setTimeout(() => {
            state.searchQuery = query;
            state.displayedPrompts = 12;
            renderPrompts();
        }, 300);
    });
    
    searchClear?.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.classList.add('hidden');
        state.searchQuery = '';
        renderPrompts();
    });
}

// ============================================
// FILTERS
// ============================================

function initFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const sortSelect = document.getElementById('sortSelect');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.currentFilter = tab.dataset.filter;
            state.displayedPrompts = 12;
            renderPrompts();
        });
    });
    
    sortSelect?.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        renderPrompts();
    });
    
    // Transformation cards
    document.querySelectorAll('.transformation-card').forEach(card => {
        card.addEventListener('click', () => {
            const transformation = card.dataset.transformation;
            state.currentFilter = transformation;
            state.displayedPrompts = 12;
            
            // Update active filter tab (set to 'all' since transformations are cross-category)
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            document.querySelector('.filter-tab[data-filter="all"]')?.classList.add('active');
            
            renderPrompts();
            document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ============================================
// MODALS
// ============================================

function initModals() {
    // Open modal triggers
    document.getElementById('openCatalyst')?.addEventListener('click', () => {
        openModal('catalystModal');
        initCatalystConversation();
    });
    
    document.getElementById('openCatalystMobile')?.addEventListener('click', () => {
        openModal('catalystModal');
        initCatalystConversation();
        document.getElementById('mobileNav')?.classList.remove('active');
    });
    
    document.getElementById('launchCatalyst')?.addEventListener('click', () => {
        openModal('catalystModal');
        initCatalystConversation();
    });
    
    document.getElementById('openLibrary')?.addEventListener('click', () => {
        openModal('libraryModal');
        renderLibrary();
    });
    
    document.getElementById('openAuth')?.addEventListener('click', () => openModal('authModal'));
    document.getElementById('openAuthMobile')?.addEventListener('click', () => {
        openModal('authModal');
        document.getElementById('mobileNav')?.classList.remove('active');
    });
    
    // Close modal triggers
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', () => {
            const modal = backdrop.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// PROMPT DETAIL
// ============================================

function openPromptDetail(prompt) {
    const detail = document.getElementById('promptDetail');
    const isSaved = state.library.includes(prompt.id);
    
    detail.innerHTML = `
        <div class="prompt-detail-header">
            <div class="prompt-card-badges" style="margin-bottom: var(--space-3);">
                ${prompt.isChain ? '<span class="prompt-badge chain">Chain</span>' : ''}
                ${prompt.isPro ? '<span class="prompt-badge pro">Pro</span>' : ''}
                <span class="prompt-badge">${prompt.category}</span>
            </div>
            <h2 class="prompt-detail-title">${prompt.title}</h2>
            <p class="prompt-detail-meta">
                <span>By ${prompt.creator.name}</span>
                <span>⭐ ${prompt.rating.toFixed(1)}</span>
                <span>🔥 ${formatNumber(prompt.uses)} uses</span>
                ${prompt.effectiveness ? `<span>✓ ${prompt.effectiveness}% effective</span>` : ''}
            </p>
        </div>
        <p style="color: var(--text-muted); margin-bottom: var(--space-6);">${prompt.description}</p>
        <div class="prompt-detail-content">${prompt.content}</div>
        ${prompt.variables?.length ? `
            <div style="margin-bottom: var(--space-6);">
                <h4 style="margin-bottom: var(--space-3);">Variables</h4>
                <div class="variable-inputs">
                    ${prompt.variables.map(v => `
                        <div class="variable-group">
                            <label>${v.name}</label>
                            <input type="text" placeholder="${v.placeholder || v.name}" data-var="${v.name}">
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        <div class="prompt-detail-actions">
            <button class="btn btn-primary" onclick="copyPrompt('${prompt.id}')">
                <span class="btn-icon">📋</span>
                Copy Prompt
            </button>
            <button class="btn btn-secondary" onclick="toggleSavePrompt('${prompt.id}')">
                <span class="btn-icon">${isSaved ? '✓' : '📚'}</span>
                ${isSaved ? 'Saved' : 'Save to Library'}
            </button>
            <button class="btn btn-ghost" onclick="openLabWithPrompt('${prompt.id}')">
                <span class="btn-icon">🔬</span>
                Try in Lab
            </button>
        </div>
    `;
    
    // Track as recent
    addToRecent(prompt.id);
    
    openModal('promptModal');
}

function copyPrompt(promptId) {
    const prompt = PROMPTS.find(p => p.id === promptId);
    if (!prompt) return;
    
    let content = prompt.content;
    
    // Replace variables with values if filled
    const inputs = document.querySelectorAll('.prompt-detail [data-var]');
    inputs.forEach(input => {
        const varName = input.dataset.var;
        const value = input.value || `[${varName}]`;
        content = content.replace(new RegExp(`\\[${varName}\\]`, 'g'), value);
    });
    
    navigator.clipboard.writeText(content).then(() => {
        showToast('Prompt copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy prompt', 'error');
    });
}

function toggleSavePrompt(promptId) {
    const index = state.library.indexOf(promptId);
    if (index > -1) {
        state.library.splice(index, 1);
        showToast('Removed from library', 'success');
    } else {
        state.library.push(promptId);
        showToast('Added to library!', 'success');
    }
    
    localStorage.setItem('aurum_library', JSON.stringify(state.library));
    renderPrompts();
    
    // Update button in modal if open
    const modal = document.getElementById('promptModal');
    if (modal.classList.contains('active')) {
        const prompt = PROMPTS.find(p => p.id === promptId);
        if (prompt) openPromptDetail(prompt);
    }
}

function openLabWithPrompt(promptId) {
    const prompt = PROMPTS.find(p => p.id === promptId);
    if (!prompt) return;
    
    closeModal('promptModal');
    
    // Scroll to lab section
    document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
    
    showToast('Try the full Prompt Lab in AURUM Pro!', 'success');
}

function addToRecent(promptId) {
    state.recentPrompts = state.recentPrompts.filter(id => id !== promptId);
    state.recentPrompts.unshift(promptId);
    state.recentPrompts = state.recentPrompts.slice(0, 20);
    localStorage.setItem('aurum_recent', JSON.stringify(state.recentPrompts));
}

// ============================================
// CATALYST ENGINE - Advanced Conversational Prompt Builder
// ============================================

// Catalyst conversation state
const catalystState = {
    stage: 'welcome', // welcome, goal, context, details, generate, refine
    data: {
        goal: '',
        category: '',
        who: '',
        context: '',
        tone: 'professional',
        format: 'structured',
        length: 'detailed',
        specificRequirements: [],
        examples: []
    },
    generatedPrompt: null,
    suggestedQuestions: []
};

// Prompt templates by category
const PROMPT_TEMPLATES = {
    writing: {
        name: 'Writing & Content',
        icon: '✍️',
        template: `You are an expert {{role}} with deep experience in {{context}}. Your task is to {{goal}}.

**Context:**
- Target audience: {{who}}
- Tone: {{tone}}
- Format: {{format}}

**Requirements:**
{{requirements}}

**Guidelines:**
- Be {{characteristics}}
- Focus on {{focus}}
- Ensure {{quality}}

Please provide {{output}} that achieves the stated goal while maintaining consistency with the specified tone and format.`
    },
    coding: {
        name: 'Coding & Development',
        icon: '💻',
        template: `You are a senior software engineer specializing in {{context}}. Your task is to {{goal}}.

**Technical Context:**
- Project type: {{who}}
- Technology stack: {{tech}}
- Constraints: {{constraints}}

**Requirements:**
{{requirements}}

**Output Format:**
{{format}}

Please provide clean, well-documented code with:
- Clear comments explaining the logic
- Error handling where appropriate
- Best practices for maintainability
- Any relevant tests or usage examples`
    },
    business: {
        name: 'Business & Strategy',
        icon: '📊',
        template: `You are a {{role}} consultant with expertise in {{context}}. Your task is to {{goal}}.

**Business Context:**
- Industry: {{industry}}
- Target: {{who}}
- Objectives: {{objectives}}

**Analysis Requirements:**
{{requirements}}

**Deliverables:**
{{format}}

Provide actionable insights that are:
- Data-driven where possible
- Specific and measurable
- Aligned with business objectives
- Prioritized by impact`
    },
    creative: {
        name: 'Creative & Design',
        icon: '🎨',
        template: `You are a creative {{role}} with a unique perspective on {{context}}. Your task is to {{goal}}.

**Creative Brief:**
- Audience: {{who}}
- Style: {{tone}}
- Medium: {{format}}

**Inspiration & Direction:**
{{requirements}}

**Output:**
Generate {{output}} that is:
- Original and distinctive
- Aligned with the creative direction
- Emotionally resonant
- Technically polished`
    },
    productivity: {
        name: 'Productivity & Planning',
        icon: '⚡',
        template: `You are a productivity expert and {{role}}. Your task is to {{goal}}.

**Context:**
- User: {{who}}
- Situation: {{context}}
- Time frame: {{timeframe}}

**Requirements:**
{{requirements}}

**Output Format:**
{{format}}

Provide actionable recommendations that:
- Are immediately implementable
- Consider realistic constraints
- Prioritize high-impact activities
- Include specific next steps`
    }
};

function initCatalyst() {
    const sendBtn = document.getElementById('sendCatalyst');
    const input = document.getElementById('catalystInput');
    
    sendBtn?.addEventListener('click', () => sendCatalystMessage());
    
    input?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendCatalystMessage();
        }
    });
}

function initCatalystConversation() {
    const messagesContainer = document.getElementById('catalystMessages');
    
    // Reset state
    catalystState.stage = 'welcome';
    catalystState.data = {
        goal: '',
        category: '',
        who: '',
        context: '',
        tone: 'professional',
        format: 'structured',
        length: 'detailed',
        specificRequirements: [],
        examples: []
    };
    catalystState.generatedPrompt = null;
    state.catalystConversation = [];
    
    messagesContainer.innerHTML = '';
    
    // Welcome message with category selection
    addCatalystMessage('ai', `Welcome to the **Catalyst Engine** ✨

I'm your AI prompt architect. Instead of searching through templates, just describe what you want to achieve—I'll build the perfect prompt for you.

**Quick Start:** What are you trying to accomplish today?`, true);
    
    // Add quick category buttons
    addCatalystQuickActions([
        { label: '✍️ Writing', value: 'writing', action: () => selectCategory('writing') },
        { label: '💻 Coding', value: 'coding', action: () => selectCategory('coding') },
        { label: '📊 Business', value: 'business', action: () => selectCategory('business') },
        { label: '🎨 Creative', value: 'creative', action: () => selectCategory('creative') },
        { label: '⚡ Productivity', value: 'productivity', action: () => selectCategory('productivity') },
        { label: '🔮 Something else', value: 'other', action: () => selectCategory('other') }
    ]);
}

function selectCategory(category) {
    catalystState.data.category = category;
    catalystState.stage = 'goal';
    
    const template = PROMPT_TEMPLATES[category];
    const categoryName = template ? template.name : 'Custom';
    
    addCatalystMessage('user', `I want help with ${categoryName.toLowerCase()}`);
    
    showCatalystTyping();
    setTimeout(() => {
        hideCatalystTyping();
        
        const followUps = {
            writing: `Great choice! **Writing & Content** is one of my specialties. 📝

To craft the perfect prompt, tell me more:

**What specifically do you need help with?**
For example:
- "I need to write compelling product descriptions"
- "Help me draft a blog post about AI trends"
- "Create a professional email template"
- "Generate social media content for my brand"`,
            coding: `Excellent! **Coding & Development** prompts are powerful when done right. 💻

Tell me about your technical challenge:

**What are you building or fixing?**
For example:
- "Debug this React component"
- "Create an API endpoint for user authentication"
- "Refactor this function for better performance"
- "Generate unit tests for my service layer"`,
            business: `Perfect! **Business & Strategy** prompts can unlock serious insights. 📊

What business challenge are you tackling?

**Describe your objective:**
For example:
- "Analyze my competitor landscape"
- "Create a go-to-market strategy"
- "Build a financial projection model"
- "Draft an investor pitch deck outline"`,
            creative: `Love it! **Creative & Design** is where AI can really shine. 🎨

What creative vision do you want to bring to life?

**Describe your project:**
For example:
- "Generate unique brand name ideas"
- "Create a mood board concept"
- "Design a visual identity direction"
- "Write a creative brief for a campaign"`,
            productivity: `Smart choice! **Productivity & Planning** prompts save hours. ⚡

What do you need to optimize or plan?

**Tell me your challenge:**
For example:
- "Create a weekly planning system"
- "Build an automation workflow"
- "Design a meeting agenda template"
- "Develop a project timeline"`,
            other: `No problem! I can create prompts for anything. 🔮

**Describe what you're trying to accomplish in detail.**

The more context you provide, the better I can tailor the prompt to your exact needs. Don't hold back—include:
- Your specific goal
- Who it's for
- Any constraints or preferences`
        };
        
        addCatalystMessage('ai', followUps[category] || followUps.other, true);
    }, 800);
}

function sendCatalystMessage() {
    const input = document.getElementById('catalystInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    addCatalystMessage('user', message);
    input.value = '';
    
    // Remove any existing quick actions
    document.querySelectorAll('.catalyst-quick-actions').forEach(el => el.remove());
    
    showCatalystTyping();
    
    setTimeout(() => {
        hideCatalystTyping();
        processCatalystStage(message);
    }, 800 + Math.random() * 600);
}

function processCatalystStage(userMessage) {
    switch (catalystState.stage) {
        case 'welcome':
            // Auto-detect category from message
            catalystState.data.category = detectCategory(userMessage);
            catalystState.data.goal = userMessage;
            catalystState.stage = 'context';
            askContextQuestions();
            break;
            
        case 'goal':
            catalystState.data.goal = userMessage;
            catalystState.stage = 'context';
            askContextQuestions();
            break;
            
        case 'context':
            parseContextResponse(userMessage);
            catalystState.stage = 'details';
            askDetailQuestions();
            break;
            
        case 'details':
            parseDetailsResponse(userMessage);
            catalystState.stage = 'generate';
            generatePrompt();
            break;
            
        case 'generate':
        case 'refine':
            handlePostGeneration(userMessage);
            break;
    }
}

function detectCategory(message) {
    const lower = message.toLowerCase();
    
    if (/\b(write|writing|blog|article|copy|content|email|post|draft|text)\b/.test(lower)) return 'writing';
    if (/\b(code|coding|program|function|api|debug|build|app|software|script)\b/.test(lower)) return 'coding';
    if (/\b(business|strategy|market|sales|revenue|plan|investor|pitch|analyze)\b/.test(lower)) return 'business';
    if (/\b(design|creative|brand|visual|art|concept|idea|aesthetic|style)\b/.test(lower)) return 'creative';
    if (/\b(productivity|organize|plan|schedule|workflow|automate|efficiency|time)\b/.test(lower)) return 'productivity';
    
    return 'other';
}

function askContextQuestions() {
    const contextQuestions = {
        writing: `Got it! I'm excited to help you with: **"${catalystState.data.goal}"**

Let me gather some context:

1. **Who is the audience?** (professionals, consumers, students, etc.)
2. **What's the occasion/platform?** (website, email, social media, etc.)
3. **Any specific brand voice or examples to match?**`,
        coding: `Understanding! You want to: **"${catalystState.data.goal}"**

Technical context helps a lot:

1. **What language/framework?** (JavaScript, Python, React, etc.)
2. **Any existing code or system constraints?**
3. **What's the experience level?** (junior-friendly, expert, etc.)`,
        business: `Excellent objective: **"${catalystState.data.goal}"**

Business context is crucial:

1. **What industry/sector?**
2. **Company size/stage?** (startup, enterprise, etc.)
3. **Any specific metrics or KPIs to focus on?**`,
        creative: `Love this vision: **"${catalystState.data.goal}"**

Creative direction helps:

1. **What's the mood/aesthetic?** (modern, playful, sophisticated, etc.)
2. **Any brands or styles you admire?**
3. **What medium is this for?** (digital, print, presentation, etc.)`,
        productivity: `Smart goal: **"${catalystState.data.goal}"**

Let me understand your setup:

1. **What tools do you currently use?**
2. **What's your biggest pain point?**
3. **How much time do you have?** (quick fix vs. comprehensive system)`,
        other: `Interesting! You want to: **"${catalystState.data.goal}"**

Help me understand better:

1. **Who is this for?** (yourself, team, clients, etc.)
2. **What's the context?** (work, personal, learning, etc.)
3. **What does success look like?**`
    };
    
    addCatalystMessage('ai', contextQuestions[catalystState.data.category] || contextQuestions.other, true);
}

function parseContextResponse(message) {
    // Extract context information
    catalystState.data.context = message;
    
    // Try to extract specific elements
    const lower = message.toLowerCase();
    
    // Detect audience
    if (/\b(professional|business|b2b|enterprise|corporate)\b/.test(lower)) {
        catalystState.data.who = 'business professionals';
    } else if (/\b(consumer|customer|user|public|b2c)\b/.test(lower)) {
        catalystState.data.who = 'consumers';
    } else if (/\b(developer|engineer|technical|programmer)\b/.test(lower)) {
        catalystState.data.who = 'developers';
    } else if (/\b(student|learner|beginner)\b/.test(lower)) {
        catalystState.data.who = 'learners';
    }
    
    // Detect tone preferences
    if (/\b(casual|friendly|conversational|relaxed)\b/.test(lower)) {
        catalystState.data.tone = 'casual and conversational';
    } else if (/\b(formal|professional|corporate|serious)\b/.test(lower)) {
        catalystState.data.tone = 'formal and professional';
    } else if (/\b(fun|playful|witty|humorous)\b/.test(lower)) {
        catalystState.data.tone = 'playful and engaging';
    }
}

function askDetailQuestions() {
    addCatalystMessage('ai', `Perfect, I'm getting a clear picture! 🎯

Just a few more details to optimize your prompt:

**Output Preferences:**`, true);
    
    // Add preference selectors
    addCatalystPreferenceSelector();
}

function addCatalystPreferenceSelector() {
    const messagesContainer = document.getElementById('catalystMessages');
    
    const selectorHtml = `
        <div class="catalyst-preferences">
            <div class="preference-group">
                <label>Tone</label>
                <div class="preference-options">
                    <button class="pref-option ${catalystState.data.tone === 'professional' ? 'active' : ''}" data-pref="tone" data-value="professional">Professional</button>
                    <button class="pref-option ${catalystState.data.tone === 'casual' ? 'active' : ''}" data-pref="tone" data-value="casual">Casual</button>
                    <button class="pref-option ${catalystState.data.tone === 'creative' ? 'active' : ''}" data-pref="tone" data-value="creative">Creative</button>
                </div>
            </div>
            <div class="preference-group">
                <label>Length</label>
                <div class="preference-options">
                    <button class="pref-option ${catalystState.data.length === 'concise' ? 'active' : ''}" data-pref="length" data-value="concise">Concise</button>
                    <button class="pref-option ${catalystState.data.length === 'detailed' ? 'active' : ''}" data-pref="length" data-value="detailed">Detailed</button>
                    <button class="pref-option ${catalystState.data.length === 'comprehensive' ? 'active' : ''}" data-pref="length" data-value="comprehensive">Comprehensive</button>
                </div>
            </div>
            <div class="preference-group">
                <label>Format</label>
                <div class="preference-options">
                    <button class="pref-option ${catalystState.data.format === 'paragraphs' ? 'active' : ''}" data-pref="format" data-value="paragraphs">Paragraphs</button>
                    <button class="pref-option ${catalystState.data.format === 'structured' ? 'active' : ''}" data-pref="format" data-value="structured">Structured</button>
                    <button class="pref-option ${catalystState.data.format === 'bullet-points' ? 'active' : ''}" data-pref="format" data-value="bullet-points">Bullet Points</button>
                </div>
            </div>
            <div class="preference-group full-width">
                <label>Any specific requirements? (optional)</label>
                <textarea class="pref-textarea" id="prefRequirements" placeholder="E.g., Include statistics, avoid jargon, focus on benefits..."></textarea>
            </div>
            <button class="btn btn-primary btn-block catalyst-generate-btn" id="generatePromptBtn">
                <span class="btn-icon">✨</span>
                Generate My Prompt
            </button>
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', selectorHtml);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Add event listeners
    document.querySelectorAll('.pref-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const pref = btn.dataset.pref;
            const value = btn.dataset.value;
            
            // Update state
            catalystState.data[pref] = value;
            
            // Update UI
            btn.parentElement.querySelectorAll('.pref-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    document.getElementById('generatePromptBtn')?.addEventListener('click', () => {
        const requirements = document.getElementById('prefRequirements')?.value || '';
        if (requirements) {
            catalystState.data.specificRequirements.push(requirements);
        }
        
        // Remove preferences UI
        document.querySelector('.catalyst-preferences')?.remove();
        
        // Add confirmation message
        addCatalystMessage('user', `Generate with: ${catalystState.data.tone} tone, ${catalystState.data.length} length, ${catalystState.data.format} format${requirements ? ` + "${requirements}"` : ''}`);
        
        showCatalystTyping();
        setTimeout(() => {
            hideCatalystTyping();
            generatePrompt();
        }, 1200);
    });
}

function parseDetailsResponse(message) {
    catalystState.data.specificRequirements.push(message);
}

function generatePrompt() {
    catalystState.stage = 'refine';
    
    // Build the prompt based on collected data
    const prompt = buildPromptFromData();
    catalystState.generatedPrompt = prompt;
    
    const responseHtml = `Your **custom prompt** is ready! 🎉

---

<div class="generated-prompt-container">
<div class="generated-prompt-header">
    <span>✨ Your Catalyst-Built Prompt</span>
    <div class="prompt-actions-inline">
        <button class="btn btn-small btn-ghost copy-prompt-btn" onclick="copyCatalystPrompt()">📋 Copy</button>
    </div>
</div>
<pre class="generated-prompt-content">${escapeHtml(prompt)}</pre>
</div>

---

**This prompt is optimized for:**
- ✓ ${capitalizeFirst(catalystState.data.tone)} tone
- ✓ ${capitalizeFirst(catalystState.data.length)} responses
- ✓ ${capitalizeFirst(catalystState.data.format)} formatting

**What would you like to do?**`;

    addCatalystMessage('ai', responseHtml, true);
    
    // Add action buttons
    addCatalystQuickActions([
        { label: '📋 Copy to Clipboard', action: copyCatalystPrompt },
        { label: '💾 Save to Library', action: saveCatalystPrompt },
        { label: '🔄 Refine Further', action: () => startRefinement() },
        { label: '🔬 Test in Lab', action: () => testInLab() },
        { label: '✨ Start New', action: initCatalystConversation }
    ]);
}

function buildPromptFromData() {
    const d = catalystState.data;
    const category = d.category || 'other';
    
    // Get appropriate role based on category
    const roles = {
        writing: 'expert writer and content strategist',
        coding: 'senior software engineer and architect',
        business: 'strategic business consultant',
        creative: 'creative director and brand expert',
        productivity: 'productivity coach and systems designer',
        other: 'knowledgeable assistant'
    };
    
    // Build requirements list
    const requirements = d.specificRequirements.length > 0 
        ? d.specificRequirements.map(r => `- ${r}`).join('\n')
        : '- Deliver high-quality, actionable output\n- Be specific and practical\n- Consider edge cases';
    
    // Tone descriptions
    const toneDesc = {
        professional: 'professional, clear, and authoritative',
        casual: 'friendly, conversational, and approachable',
        creative: 'imaginative, distinctive, and engaging'
    };
    
    // Format descriptions
    const formatDesc = {
        paragraphs: 'flowing paragraphs with clear structure',
        structured: 'organized sections with headers and clear hierarchy',
        'bullet-points': 'concise bullet points and lists for easy scanning'
    };
    
    // Length guidelines
    const lengthGuide = {
        concise: 'Keep responses brief and focused. Prioritize clarity over comprehensiveness.',
        detailed: 'Provide thorough explanations with examples where helpful.',
        comprehensive: 'Be exhaustive. Cover all angles, edge cases, and provide extensive detail.'
    };
    
    // Build the prompt
    let prompt = `You are a ${roles[category]}. ${d.goal}

**Context:**
${d.who ? `- Target audience: ${d.who}` : ''}
${d.context ? `- Background: ${d.context}` : ''}
- Communication style: ${toneDesc[d.tone] || toneDesc.professional}

**Requirements:**
${requirements}

**Output Guidelines:**
- Format: ${formatDesc[d.format] || formatDesc.structured}
- ${lengthGuide[d.length] || lengthGuide.detailed}

Please provide output that directly addresses the goal while maintaining the specified tone and format. Be ${d.tone === 'creative' ? 'original and distinctive' : 'practical and actionable'}.`;

    return prompt.trim();
}

function handlePostGeneration(message) {
    const lower = message.toLowerCase();
    
    if (/\b(copy|clipboard)\b/.test(lower)) {
        copyCatalystPrompt();
    } else if (/\b(save|library)\b/.test(lower)) {
        saveCatalystPrompt();
    } else if (/\b(test|lab|try)\b/.test(lower)) {
        testInLab();
    } else if (/\b(new|start|different|another)\b/.test(lower)) {
        initCatalystConversation();
    } else if (/\b(refine|change|update|modify|edit)\b/.test(lower)) {
        // Treat as refinement request
        showCatalystTyping();
        setTimeout(() => {
            hideCatalystTyping();
            refinePrompt(message);
        }, 1000);
    } else {
        // Default: assume refinement
        showCatalystTyping();
        setTimeout(() => {
            hideCatalystTyping();
            refinePrompt(message);
        }, 1000);
    }
}

function startRefinement() {
    addCatalystMessage('ai', `What would you like to change about the prompt?

You can:
- Make it more/less formal
- Add specific constraints
- Change the structure
- Add examples to follow
- Adjust the length

Just tell me what needs tweaking!`, true);
}

function refinePrompt(refinement) {
    // Apply refinement to the prompt
    let prompt = catalystState.generatedPrompt;
    
    // Simple refinement logic
    const lower = refinement.toLowerCase();
    
    if (/\b(short|shorter|brief|concise)\b/.test(lower)) {
        prompt = prompt.replace(/comprehensive|detailed/gi, 'concise');
        prompt += '\n\nIMPORTANT: Keep your response brief and focused. Maximum 3-4 paragraphs.';
    } else if (/\b(long|longer|more detail|expand)\b/.test(lower)) {
        prompt = prompt.replace(/concise|brief/gi, 'comprehensive');
    } else if (/\b(casual|friendly|less formal)\b/.test(lower)) {
        prompt = prompt.replace(/professional|formal|authoritative/gi, 'friendly and conversational');
    } else if (/\b(formal|professional|serious)\b/.test(lower)) {
        prompt = prompt.replace(/casual|friendly|conversational/gi, 'professional and authoritative');
    } else {
        // Add the refinement as an additional requirement
        prompt += `\n\nADDITIONAL REQUIREMENT: ${refinement}`;
    }
    
    catalystState.generatedPrompt = prompt;
    
    const responseHtml = `Updated! Here's your refined prompt: ✨

---

<div class="generated-prompt-container">
<div class="generated-prompt-header">
    <span>✨ Refined Prompt</span>
    <div class="prompt-actions-inline">
        <button class="btn btn-small btn-ghost copy-prompt-btn" onclick="copyCatalystPrompt()">📋 Copy</button>
    </div>
</div>
<pre class="generated-prompt-content">${escapeHtml(prompt)}</pre>
</div>

---

Anything else you'd like to adjust?`;

    addCatalystMessage('ai', responseHtml, true);
    
    addCatalystQuickActions([
        { label: '📋 Copy', action: copyCatalystPrompt },
        { label: '💾 Save', action: saveCatalystPrompt },
        { label: '✓ Perfect!', action: () => {
            addCatalystMessage('ai', `Glad you like it! 🎉 Your prompt is ready to use.

**Next steps:**
- 📋 Copy and paste into your favorite AI
- 💾 Save to your AURUM library for quick access
- 🔬 Test different variations in the Prompt Lab

Want to create another prompt? Just tell me what you need!`, true);
        }}
    ]);
}

function copyCatalystPrompt() {
    if (!catalystState.generatedPrompt) return;
    
    navigator.clipboard.writeText(catalystState.generatedPrompt).then(() => {
        showToast('Prompt copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy. Please select and copy manually.', 'error');
    });
}

function saveCatalystPrompt() {
    if (!catalystState.generatedPrompt) return;
    
    // Create a custom prompt object
    const customPrompt = {
        id: 'custom_' + Date.now(),
        title: `Catalyst: ${catalystState.data.goal.substring(0, 50)}...`,
        description: `Custom prompt for ${catalystState.data.category}`,
        content: catalystState.generatedPrompt,
        category: catalystState.data.category,
        creator: { name: 'You', avatar: '👤' },
        rating: 5.0,
        uses: 1,
        price: 0,
        createdAt: new Date().toISOString(),
        isCustom: true
    };
    
    // Add to library
    state.library.push(customPrompt.id);
    localStorage.setItem('aurum_library', JSON.stringify(state.library));
    
    // Store the prompt itself
    const customPrompts = JSON.parse(localStorage.getItem('aurum_custom_prompts') || '[]');
    customPrompts.push(customPrompt);
    localStorage.setItem('aurum_custom_prompts', JSON.stringify(customPrompts));
    
    showToast('Saved to your library!', 'success');
    addCatalystMessage('ai', `✅ **Saved to your library!**

You can find it in your Library under "Created" prompts. Access it anytime from the Library button in the navigation.`, false);
}

function testInLab() {
    showToast('Opening Prompt Lab...', 'success');
    closeModal('catalystModal');
    document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
}

function addCatalystMessage(type, content, parseMarkdown = false) {
    const messagesContainer = document.getElementById('catalystMessages');
    
    let processedContent = content;
    if (parseMarkdown) {
        processedContent = simpleMarkdown(content);
    } else {
        processedContent = content.split('\n').map(line => `<p>${line}</p>`).join('');
    }
    
    const messageHtml = `
        <div class="chat-message ${type}">
            ${type === 'ai' ? '<span class="message-avatar">⚗️</span>' : ''}
            <div class="message-content">
                ${processedContent}
            </div>
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHtml);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    state.catalystConversation.push({ type, content });
}

function addCatalystQuickActions(actions) {
    const messagesContainer = document.getElementById('catalystMessages');
    
    const actionsHtml = `
        <div class="catalyst-quick-actions">
            ${actions.map((a, i) => `
                <button class="quick-action-btn" data-index="${i}">${a.label}</button>
            `).join('')}
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', actionsHtml);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Add click handlers
    const container = messagesContainer.querySelector('.catalyst-quick-actions:last-child');
    container.querySelectorAll('.quick-action-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            container.remove();
            if (actions[i].action) {
                actions[i].action();
            }
        });
    });
}

function simpleMarkdown(text) {
    return text
        // Headers
        .replace(/^### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^## (.*$)/gm, '<h3>$1</h3>')
        .replace(/^# (.*$)/gm, '<h2>$1</h2>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code blocks
        .replace(/```([\s\S]*?)```/g, '<pre class="code-block">$1</pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Line breaks and paragraphs
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        // Wrap in paragraph
        .replace(/^(.*)$/gm, (match) => match.startsWith('<') ? match : `<p>${match}</p>`)
        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, '')
        .replace(/<p>(<h[1-6]>)/g, '$1')
        .replace(/(<\/h[1-6]>)<\/p>/g, '$1');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showCatalystTyping() {
    const messagesContainer = document.getElementById('catalystMessages');
    messagesContainer.insertAdjacentHTML('beforeend', `
        <div class="chat-typing" id="catalystTyping">
            <span class="message-avatar">⚗️</span>
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideCatalystTyping() {
    document.getElementById('catalystTyping')?.remove();
}

// Export for global access
window.copyCatalystPrompt = copyCatalystPrompt;
window.saveCatalystPrompt = saveCatalystPrompt;

// ============================================
// PROMPT LAB
// ============================================

const labState = {
    currentPrompt: null,
    variables: {},
    isRunning: false,
    output: ''
};

function initPromptLab() {
    // Lab section click handlers
    document.querySelector('.lab-section .btn-primary')?.addEventListener('click', () => {
        openLabModal();
    });
    
    // Lab modal elements
    document.getElementById('labRunBtn')?.addEventListener('click', runLabTest);
    document.getElementById('labCopyBtn')?.addEventListener('click', copyLabPrompt);
    document.getElementById('labResetBtn')?.addEventListener('click', resetLab);
    document.getElementById('labSaveBtn')?.addEventListener('click', saveLabPrompt);
}

function openLabModal(prompt = null) {
    const modal = document.getElementById('labModal');
    const container = document.getElementById('labFullInterface');
    
    // Default prompt if none provided
    const defaultPrompt = {
        id: 'lab_default',
        title: 'Custom Prompt',
        content: `You are a [role] with expertise in [domain]. Your task is to help with [task].

**Context:**
- Target audience: [audience]
- Tone: [tone]

**Requirements:**
- Be specific and actionable
- Use clear, concise language
- Provide examples where helpful

Please [specific_instruction].`,
        variables: [
            { name: 'role', placeholder: 'expert copywriter', value: 'expert copywriter' },
            { name: 'domain', placeholder: 'marketing', value: 'marketing' },
            { name: 'task', placeholder: 'writing product descriptions', value: 'writing product descriptions' },
            { name: 'audience', placeholder: 'e-commerce customers', value: 'e-commerce customers' },
            { name: 'tone', placeholder: 'professional yet friendly', value: 'professional yet friendly' },
            { name: 'specific_instruction', placeholder: 'create a compelling description', value: 'create a compelling product description for: [product]' },
            { name: 'product', placeholder: 'wireless earbuds', value: '' }
        ]
    };
    
    labState.currentPrompt = prompt || defaultPrompt;
    labState.variables = {};
    labState.output = '';
    
    // Parse variables from content if not predefined
    if (!prompt) {
        const varMatches = labState.currentPrompt.content.match(/\[([^\]]+)\]/g) || [];
        const existingVarNames = labState.currentPrompt.variables.map(v => v.name);
        varMatches.forEach(match => {
            const name = match.slice(1, -1);
            if (!existingVarNames.includes(name)) {
                labState.currentPrompt.variables.push({
                    name,
                    placeholder: name.replace(/_/g, ' '),
                    value: ''
                });
            }
        });
    }
    
    // Initialize variable values
    labState.currentPrompt.variables.forEach(v => {
        labState.variables[v.name] = v.value || '';
    });
    
    renderLabInterface(container);
    openModal('labModal');
}

function renderLabInterface(container) {
    const prompt = labState.currentPrompt;
    
    container.innerHTML = `
        <div class="lab-full-layout">
            <div class="lab-full-header">
                <h2>🔬 Prompt Lab</h2>
                <p>Test and refine your prompts before using them</p>
            </div>
            
            <div class="lab-full-body">
                <div class="lab-panel lab-editor-panel">
                    <div class="lab-panel-header">
                        <span>📝 Prompt Editor</span>
                        <div class="lab-panel-actions">
                            <button class="btn btn-small btn-ghost" id="labCopyBtn">Copy</button>
                            <button class="btn btn-small btn-ghost" id="labResetBtn">Reset</button>
                        </div>
                    </div>
                    <div class="lab-editor-wrapper">
                        <textarea class="lab-editor-textarea" id="labEditor">${prompt.content}</textarea>
                    </div>
                    <div class="lab-editor-footer">
                        <span class="lab-char-count" id="labCharCount">0 characters</span>
                        <span class="lab-var-count">${prompt.variables.length} variables detected</span>
                    </div>
                </div>
                
                <div class="lab-panel lab-variables-panel">
                    <div class="lab-panel-header">
                        <span>⚙️ Variables</span>
                    </div>
                    <div class="lab-variables-list" id="labVariables">
                        ${prompt.variables.map(v => `
                            <div class="lab-variable-item">
                                <label for="var_${v.name}">[${v.name}]</label>
                                <input 
                                    type="text" 
                                    id="var_${v.name}" 
                                    data-var="${v.name}"
                                    placeholder="${v.placeholder}"
                                    value="${labState.variables[v.name] || ''}"
                                    class="lab-variable-input"
                                >
                            </div>
                        `).join('')}
                    </div>
                    <div class="lab-run-section">
                        <div class="lab-model-select">
                            <label>Model</label>
                            <select id="labModelSelect">
                                <option value="gpt-4">GPT-4</option>
                                <option value="gpt-3.5">GPT-3.5</option>
                                <option value="claude">Claude</option>
                                <option value="gemini">Gemini</option>
                            </select>
                        </div>
                        <button class="btn btn-primary btn-block" id="labRunBtn">
                            <span class="btn-icon">▶</span>
                            Run Test
                        </button>
                    </div>
                </div>
                
                <div class="lab-panel lab-output-panel">
                    <div class="lab-panel-header">
                        <span>📤 Output Preview</span>
                        <span class="lab-output-status" id="labOutputStatus">Ready</span>
                    </div>
                    <div class="lab-output-content" id="labOutput">
                        <div class="lab-output-placeholder">
                            <span class="placeholder-icon">✨</span>
                            <p>Run a test to see the output</p>
                            <p class="placeholder-hint">Fill in variables and click "Run Test"</p>
                        </div>
                    </div>
                    <div class="lab-output-footer">
                        <button class="btn btn-secondary" id="labSaveBtn" disabled>
                            <span class="btn-icon">💾</span>
                            Save to Library
                        </button>
                        <button class="btn btn-ghost" id="labCopyOutputBtn" disabled>
                            <span class="btn-icon">📋</span>
                            Copy Output
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Re-attach event listeners
    document.getElementById('labRunBtn')?.addEventListener('click', runLabTest);
    document.getElementById('labCopyBtn')?.addEventListener('click', copyLabPrompt);
    document.getElementById('labResetBtn')?.addEventListener('click', resetLab);
    document.getElementById('labSaveBtn')?.addEventListener('click', saveLabPrompt);
    document.getElementById('labCopyOutputBtn')?.addEventListener('click', copyLabOutput);
    
    // Variable input listeners
    document.querySelectorAll('.lab-variable-input').forEach(input => {
        input.addEventListener('input', (e) => {
            labState.variables[e.target.dataset.var] = e.target.value;
            updateLabPreview();
        });
    });
    
    // Editor listeners
    const editor = document.getElementById('labEditor');
    editor?.addEventListener('input', () => {
        labState.currentPrompt.content = editor.value;
        updateCharCount();
        detectVariables();
    });
    
    updateCharCount();
}

function updateCharCount() {
    const editor = document.getElementById('labEditor');
    const counter = document.getElementById('labCharCount');
    if (editor && counter) {
        counter.textContent = `${editor.value.length} characters`;
    }
}

function detectVariables() {
    const editor = document.getElementById('labEditor');
    if (!editor) return;
    
    const varMatches = editor.value.match(/\[([^\]]+)\]/g) || [];
    const varNames = [...new Set(varMatches.map(m => m.slice(1, -1)))];
    
    // Update variables list if new ones detected
    const existingVarNames = labState.currentPrompt.variables.map(v => v.name);
    let hasNewVars = false;
    
    varNames.forEach(name => {
        if (!existingVarNames.includes(name)) {
            labState.currentPrompt.variables.push({
                name,
                placeholder: name.replace(/_/g, ' '),
                value: ''
            });
            labState.variables[name] = '';
            hasNewVars = true;
        }
    });
    
    if (hasNewVars) {
        const variablesList = document.getElementById('labVariables');
        if (variablesList) {
            variablesList.innerHTML = labState.currentPrompt.variables.map(v => `
                <div class="lab-variable-item">
                    <label for="var_${v.name}">[${v.name}]</label>
                    <input 
                        type="text" 
                        id="var_${v.name}" 
                        data-var="${v.name}"
                        placeholder="${v.placeholder}"
                        value="${labState.variables[v.name] || ''}"
                        class="lab-variable-input"
                    >
                </div>
            `).join('');
            
            // Re-attach listeners
            document.querySelectorAll('.lab-variable-input').forEach(input => {
                input.addEventListener('input', (e) => {
                    labState.variables[e.target.dataset.var] = e.target.value;
                });
            });
        }
    }
}

function updateLabPreview() {
    // Optional: Live preview could be added here
}

function runLabTest() {
    if (labState.isRunning) return;
    
    const runBtn = document.getElementById('labRunBtn');
    const outputEl = document.getElementById('labOutput');
    const statusEl = document.getElementById('labOutputStatus');
    
    labState.isRunning = true;
    runBtn.innerHTML = '<span class="btn-icon">⏳</span> Running...';
    runBtn.disabled = true;
    statusEl.textContent = 'Generating...';
    statusEl.className = 'lab-output-status running';
    
    // Build the complete prompt with variables
    let completePrompt = labState.currentPrompt.content;
    Object.entries(labState.variables).forEach(([name, value]) => {
        const replacement = value || `[${name}]`;
        completePrompt = completePrompt.replace(new RegExp(`\\[${name}\\]`, 'g'), replacement);
    });
    
    // Simulate AI response (in production, this would call an API)
    outputEl.innerHTML = '<div class="lab-output-loading"><div class="loading-spinner"></div><span>Generating response...</span></div>';
    
    setTimeout(() => {
        const simulatedOutput = generateSimulatedOutput(completePrompt);
        
        labState.output = simulatedOutput;
        labState.isRunning = false;
        
        outputEl.innerHTML = `<div class="lab-output-text">${simpleMarkdown(simulatedOutput)}</div>`;
        
        runBtn.innerHTML = '<span class="btn-icon">▶</span> Run Test';
        runBtn.disabled = false;
        statusEl.textContent = 'Generated';
        statusEl.className = 'lab-output-status success';
        
        // Enable save/copy buttons
        document.getElementById('labSaveBtn').disabled = false;
        document.getElementById('labCopyOutputBtn').disabled = false;
    }, 1500 + Math.random() * 1000);
}

function generateSimulatedOutput(prompt) {
    // Generate a contextually relevant simulated response
    const lower = prompt.toLowerCase();
    
    if (lower.includes('product description') || lower.includes('copywriter')) {
        return `**Premium Wireless Earbuds Pro**

Experience crystal-clear audio that moves with you. Our Wireless Earbuds Pro deliver exceptional sound quality in a sleek, comfortable design that fits perfectly in your lifestyle.

**Why You'll Love Them:**

• **Immersive Sound** – Custom-tuned drivers deliver rich bass and crisp highs, making every song, podcast, and call sound incredible.

• **All-Day Comfort** – Ergonomically designed with three sizes of soft silicone tips to ensure a secure, comfortable fit for hours of wear.

• **Extended Battery Life** – 8 hours of playtime on a single charge, with an additional 24 hours from the compact charging case.

• **Seamless Connectivity** – Bluetooth 5.2 provides instant pairing and rock-solid connection up to 33 feet.

• **Smart Features** – Touch controls, voice assistant integration, and automatic ear detection make them effortless to use.

*Transform your listening experience. Order now and discover what you've been missing.*`;
    }
    
    if (lower.includes('code') || lower.includes('function') || lower.includes('programming')) {
        return `Here's a clean, well-documented implementation:

\`\`\`javascript
/**
 * Processes user data and returns formatted result
 * @param {Object} data - User input data
 * @returns {Object} Processed result with status
 */
function processUserData(data) {
    // Validate input
    if (!data || typeof data !== 'object') {
        throw new Error('Invalid input: expected object');
    }
    
    // Process the data
    const result = {
        id: generateUniqueId(),
        timestamp: new Date().toISOString(),
        data: sanitize(data),
        status: 'processed'
    };
    
    return result;
}
\`\`\`

**Key Points:**
- Input validation prevents runtime errors
- Clear documentation explains usage
- Consistent return format for easy handling
- Error handling with descriptive messages`;
    }
    
    if (lower.includes('email') || lower.includes('message')) {
        return `**Subject: Quick Question About Your Project**

Hi [Name],

I hope this message finds you well! I wanted to reach out about [topic] and see if you have a few minutes to chat.

I noticed [observation] and thought it might be worth exploring how we could [benefit]. Based on my experience with similar situations, I believe there's an opportunity to [outcome].

Would you be open to a brief call this week? I'm flexible on timing and happy to work around your schedule.

Looking forward to hearing from you.

Best regards,
[Your Name]

---
*This email is concise yet personal, clearly states the purpose, and includes a specific call-to-action.*`;
    }
    
    // Default response
    return `Based on your prompt, here's a comprehensive response:

**Overview**

Your request has been processed with careful attention to the specified requirements. The output below addresses your needs while maintaining the appropriate tone and format.

**Key Points**

1. **Clarity First** – Each section is organized for easy understanding and quick reference.

2. **Actionable Insights** – Recommendations are specific and immediately implementable.

3. **Context-Aware** – The response considers your specific situation and constraints.

**Recommendations**

• Start with the highest-priority items that deliver quick wins
• Document progress and adjust approach based on results
• Consider long-term implications alongside immediate needs

**Next Steps**

To move forward effectively:
1. Review and prioritize the suggestions above
2. Identify any blockers or dependencies
3. Set clear milestones and success metrics

*This response was generated based on your prompt. Refine variables for more targeted output.*`;
}

function copyLabPrompt() {
    let completePrompt = labState.currentPrompt.content;
    Object.entries(labState.variables).forEach(([name, value]) => {
        const replacement = value || `[${name}]`;
        completePrompt = completePrompt.replace(new RegExp(`\\[${name}\\]`, 'g'), replacement);
    });
    
    navigator.clipboard.writeText(completePrompt).then(() => {
        showToast('Prompt copied to clipboard!', 'success');
    });
}

function copyLabOutput() {
    if (!labState.output) return;
    
    navigator.clipboard.writeText(labState.output).then(() => {
        showToast('Output copied to clipboard!', 'success');
    });
}

function resetLab() {
    openLabModal();
}

function saveLabPrompt() {
    if (!labState.currentPrompt) return;
    
    // Create custom prompt
    const customPrompt = {
        id: 'lab_' + Date.now(),
        title: `Lab: ${labState.currentPrompt.title || 'Custom Prompt'}`,
        description: 'Created in Prompt Lab',
        content: labState.currentPrompt.content,
        variables: labState.currentPrompt.variables,
        category: 'custom',
        creator: { name: 'You', avatar: '👤' },
        rating: 5.0,
        uses: 1,
        price: 0,
        createdAt: new Date().toISOString(),
        isCustom: true
    };
    
    // Save to localStorage
    const customPrompts = JSON.parse(localStorage.getItem('aurum_custom_prompts') || '[]');
    customPrompts.push(customPrompt);
    localStorage.setItem('aurum_custom_prompts', JSON.stringify(customPrompts));
    
    state.library.push(customPrompt.id);
    localStorage.setItem('aurum_library', JSON.stringify(state.library));
    
    showToast('Prompt saved to library!', 'success');
}

// ============================================
// LIBRARY
// ============================================

function initLibrary() {
    // Library tab switching
    document.querySelectorAll('.library-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderLibrary(tab.dataset.tab);
        });
    });
}

function renderLibrary(tab = 'saved') {
    const container = document.getElementById('libraryContent');
    if (!container) return;
    
    // Get custom prompts from localStorage
    const customPrompts = JSON.parse(localStorage.getItem('aurum_custom_prompts') || '[]');
    const allPrompts = [...(typeof PROMPTS !== 'undefined' ? PROMPTS : []), ...customPrompts];
    
    let prompts = [];
    
    switch (tab) {
        case 'saved':
            prompts = allPrompts.filter(p => state.library.includes(p.id));
            break;
        case 'recent':
            prompts = state.recentPrompts.map(id => allPrompts.find(p => p.id === id)).filter(Boolean);
            break;
        case 'created':
            prompts = customPrompts;
            break;
    }
    
    if (prompts.length === 0) {
        const emptyMessages = {
            saved: { icon: '📚', title: 'No saved prompts yet', desc: 'Save prompts to access them quickly later.' },
            recent: { icon: '🕐', title: 'No recent prompts', desc: 'Prompts you view will appear here.' },
            created: { icon: '✨', title: 'No created prompts', desc: 'Use Catalyst Engine or Prompt Lab to create prompts.' }
        };
        const msg = emptyMessages[tab];
        
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${msg.icon}</div>
                <h3>${msg.title}</h3>
                <p>${msg.desc}</p>
                <div class="empty-state-actions">
                    ${tab === 'created' ? `
                        <button class="btn btn-primary" onclick="closeModal('libraryModal'); openModal('catalystModal'); initCatalystConversation();">
                            <span class="btn-icon">✨</span>
                            Open Catalyst
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal('libraryModal'); openLabModal();">
                            <span class="btn-icon">🔬</span>
                            Open Lab
                        </button>
                    ` : `
                        <button class="btn btn-primary" onclick="closeModal('libraryModal'); document.getElementById('marketplace').scrollIntoView({behavior: 'smooth'});">
                            Explore Prompts
                        </button>
                    `}
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="library-prompt-grid">
            ${prompts.map(prompt => createLibraryPromptCard(prompt)).join('')}
        </div>
    `;
    
    // Add click handlers
    container.querySelectorAll('.library-prompt-card').forEach(card => {
        const promptId = card.dataset.id;
        
        card.querySelector('.library-card-main')?.addEventListener('click', () => {
            const prompt = allPrompts.find(p => p.id === promptId);
            if (prompt) {
                closeModal('libraryModal');
                if (prompt.isCustom) {
                    openLabModal(prompt);
                } else {
                    openPromptDetail(prompt);
                }
            }
        });
        
        card.querySelector('.library-card-delete')?.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteLibraryPrompt(promptId);
        });
    });
}

function createLibraryPromptCard(prompt) {
    const isCustom = prompt.isCustom;
    const dateStr = prompt.createdAt ? new Date(prompt.createdAt).toLocaleDateString() : '';
    
    return `
        <div class="library-prompt-card" data-id="${prompt.id}">
            <div class="library-card-main">
                <div class="library-card-icon">${isCustom ? '✨' : '📝'}</div>
                <div class="library-card-content">
                    <h4>${prompt.title}</h4>
                    <p>${prompt.description || 'Custom prompt'}</p>
                    <div class="library-card-meta">
                        <span>${prompt.category || 'custom'}</span>
                        ${dateStr ? `<span>${dateStr}</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="library-card-actions">
                <button class="btn btn-small btn-ghost library-card-delete" title="Remove">🗑️</button>
            </div>
        </div>
    `;
}

function deleteLibraryPrompt(promptId) {
    // Remove from library
    state.library = state.library.filter(id => id !== promptId);
    localStorage.setItem('aurum_library', JSON.stringify(state.library));
    
    // If custom prompt, also remove from custom prompts
    if (promptId.startsWith('custom_') || promptId.startsWith('lab_') || promptId.startsWith('catalyst_')) {
        const customPrompts = JSON.parse(localStorage.getItem('aurum_custom_prompts') || '[]');
        const updated = customPrompts.filter(p => p.id !== promptId);
        localStorage.setItem('aurum_custom_prompts', JSON.stringify(updated));
    }
    
    // Re-render current tab
    const activeTab = document.querySelector('.library-tab.active');
    renderLibrary(activeTab?.dataset.tab || 'saved');
    showToast('Removed from library', 'success');
}

// ============================================
// TRANSFORMATION PATHS
// ============================================

function initTransformations() {
    // Transformation card interactions
    document.querySelectorAll('.transformation-card').forEach(card => {
        card.addEventListener('click', () => {
            const transformation = card.dataset.transformation;
            handleTransformationClick(transformation);
        });
    });
}

function handleTransformationClick(transformation) {
    // Map transformations to search queries and filters
    const transformationMap = {
        'blank-to-draft': { query: '', filter: 'writing', tag: 'first draft' },
        'confused-to-clear': { query: 'clarity', filter: 'all', tag: 'clarity' },
        'amateur-to-pro': { query: 'professional', filter: 'all', tag: 'professional' },
        'slow-to-fast': { query: 'productivity', filter: 'productivity', tag: 'speed' },
        'stuck-to-flowing': { query: 'creative', filter: 'creative', tag: 'unblock' },
        'generic-to-unique': { query: 'unique', filter: 'creative', tag: 'differentiate' }
    };
    
    const mapping = transformationMap[transformation];
    if (mapping) {
        // Update search and filter
        const searchInput = document.getElementById('searchInput');
        if (searchInput && mapping.query) {
            searchInput.value = mapping.query;
            state.searchQuery = mapping.query;
        }
        
        // Update filter
        if (mapping.filter !== 'all') {
            state.currentFilter = mapping.filter;
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.filter === mapping.filter);
            });
        }
        
        state.displayedPrompts = 12;
        renderPrompts();
        
        // Scroll to marketplace
        document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
        
        showToast(`Showing prompts for: ${transformation.replace(/-/g, ' ')}`, 'info');
    }
}

// ============================================
// PRICING
// ============================================

function initPricing() {
    // Pricing card buttons
    document.querySelectorAll('.pricing-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.pricing-card');
            const tier = card.querySelector('h3')?.textContent?.toLowerCase();
            handlePricingClick(tier);
        });
    });
}

function handlePricingClick(tier) {
    switch (tier) {
        case 'explorer':
            openModal('authModal');
            break;
        case 'aurum pro':
            showProUpgradeFlow();
            break;
        case 'aurum team':
            showToast('Contact sales at team@aurum.ai', 'info');
            break;
        default:
            openModal('authModal');
    }
}

function showProUpgradeFlow() {
    // Create upgrade modal content
    const modal = document.getElementById('authModal');
    const authInterface = document.getElementById('authInterface');
    
    if (authInterface) {
        authInterface.innerHTML = `
            <div class="upgrade-interface">
                <div class="upgrade-header">
                    <span class="upgrade-icon">🚀</span>
                    <h2>Upgrade to AURUM Pro</h2>
                    <p>Unlock your full potential</p>
                </div>
                
                <div class="upgrade-benefits">
                    <div class="benefit-item">
                        <span class="benefit-icon">✓</span>
                        <span>Unlimited Catalyst sessions</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✓</span>
                        <span>Full Prompt Lab access</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✓</span>
                        <span>All premium prompt chains</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✓</span>
                        <span>Personal AI DNA profile</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✓</span>
                        <span>Outcome tracking & analytics</span>
                    </div>
                </div>
                
                <div class="upgrade-price">
                    <span class="price-amount">$29</span>
                    <span class="price-period">/month</span>
                </div>
                
                <div class="upgrade-trial">
                    <span class="trial-badge">14-day free trial</span>
                    <p>No credit card required to start</p>
                </div>
                
                <button class="btn btn-primary btn-large btn-block" onclick="startProTrial()">
                    Start Free Trial
                </button>
                
                <p class="upgrade-footer">
                    Cancel anytime. 30-day money-back guarantee.
                </p>
            </div>
        `;
    }
    
    openModal('authModal');
}

function startProTrial() {
    showToast('Free trial activated! Welcome to AURUM Pro.', 'success');
    closeModal('authModal');
    
    // Simulate pro features unlock
    localStorage.setItem('aurum_trial_active', 'true');
}

// ============================================
// CHAIN BUILDER
// ============================================

const chainBuilderState = {
    steps: [],
    currentStep: null,
    chainName: '',
    isRunning: false
};

function initChainBuilder() {
    // Chain card click handlers
    document.querySelectorAll('.chain-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.chain-card');
            const chainName = card.querySelector('h3')?.textContent;
            
            if (btn.textContent.includes('Run')) {
                runChain(chainName);
            } else if (btn.textContent.includes('View') || btn.textContent.includes('Preview')) {
                viewChainDetail(chainName);
            }
        });
    });
}

function viewChainDetail(chainName) {
    // Find chain data
    const chain = typeof CHAINS !== 'undefined' 
        ? CHAINS.find(c => c.name === chainName || c.title === chainName)
        : null;
    
    const modal = document.getElementById('authModal');
    const container = document.getElementById('authInterface');
    
    if (!container) return;
    
    // Default chain for demo
    const demoChain = chain || {
        name: chainName || 'Product Launch Chain',
        description: 'A comprehensive workflow for launching products',
        steps: [
            { name: 'Research', description: 'Analyze market and competitors' },
            { name: 'Position', description: 'Define unique value proposition' },
            { name: 'Name', description: 'Generate product names' },
            { name: 'Copy', description: 'Create marketing copy' },
            { name: 'Landing', description: 'Build landing page content' },
            { name: 'Email', description: 'Write email sequences' },
            { name: 'Social', description: 'Generate social posts' }
        ],
        uses: 2300,
        rating: 4.9,
        price: 49
    };
    
    container.innerHTML = `
        <div class="chain-detail">
            <div class="chain-detail-header">
                <span class="chain-icon">⛓️</span>
                <h2>${demoChain.name}</h2>
                <p>${demoChain.description}</p>
            </div>
            
            <div class="chain-detail-stats">
                <span>⭐ ${demoChain.rating}</span>
                <span>🔥 ${formatNumber(demoChain.uses)} uses</span>
                <span>📝 ${demoChain.steps.length} steps</span>
            </div>
            
            <div class="chain-builder-visual">
                <h4>Chain Steps</h4>
                <div class="chain-steps-list">
                    ${demoChain.steps.map((step, i) => `
                        <div class="chain-step-item">
                            <div class="step-number">${i + 1}</div>
                            <div class="step-content">
                                <h5>${step.name}</h5>
                                <p>${step.description}</p>
                            </div>
                            <div class="step-status">⏳</div>
                        </div>
                        ${i < demoChain.steps.length - 1 ? '<div class="step-connector"></div>' : ''}
                    `).join('')}
                </div>
            </div>
            
            <div class="chain-detail-actions">
                <button class="btn btn-primary btn-block" onclick="runChainSimulation('${demoChain.name}')">
                    <span class="btn-icon">▶️</span>
                    Run Chain — $${demoChain.price}
                </button>
                <button class="btn btn-secondary btn-block" onclick="closeModal('authModal')">
                    Close
                </button>
            </div>
        </div>
    `;
    
    openModal('authModal');
}

function runChainSimulation(chainName) {
    showToast(`Starting chain: ${chainName}...`, 'success');
    
    // Simulate chain execution with step-by-step progress
    const steps = document.querySelectorAll('.chain-step-item');
    let currentStep = 0;
    
    const runStep = () => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.add('completed');
            steps[currentStep - 1].querySelector('.step-status').textContent = '✅';
        }
        
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            steps[currentStep].querySelector('.step-status').textContent = '⏳';
            currentStep++;
            setTimeout(runStep, 1000 + Math.random() * 500);
        } else {
            showToast('Chain completed successfully!', 'success');
        }
    };
    
    runStep();
}

function runChain(chainName) {
    showToast(`Launching ${chainName}...`, 'info');
    viewChainDetail(chainName);
}

// ============================================
// OUTCOME TRACKING
// ============================================

const outcomeState = {
    tracked: JSON.parse(localStorage.getItem('aurum_outcomes') || '[]')
};

function initOutcomeTracking() {
    // Update effectiveness displays
    updateEffectivenessDisplays();
}

function trackOutcome(promptId, outcome) {
    const record = {
        promptId,
        outcome, // 'success', 'partial', 'failure'
        timestamp: new Date().toISOString()
    };
    
    outcomeState.tracked.push(record);
    localStorage.setItem('aurum_outcomes', JSON.stringify(outcomeState.tracked));
    
    // Update AI DNA based on outcomes
    updateAIDNA(promptId, outcome);
}

function updateEffectivenessDisplays() {
    // Calculate overall effectiveness
    const successful = outcomeState.tracked.filter(o => o.outcome === 'success').length;
    const total = outcomeState.tracked.length;
    const effectiveness = total > 0 ? Math.round((successful / total) * 100) : 0;
    
    // Update DNA stats if visible
    const successRateStat = document.querySelector('.dna-stats .dna-stat:nth-child(2) .stat-value');
    if (successRateStat && total > 0) {
        successRateStat.textContent = `${effectiveness}%`;
    }
}

function updateAIDNA(promptId, outcome) {
    // Update user's AI DNA based on prompt usage
    const dna = state.aiDNA || {};
    
    if (!dna.promptHistory) dna.promptHistory = [];
    if (!dna.preferences) dna.preferences = {};
    if (!dna.strengths) dna.strengths = [];
    
    dna.promptHistory.push({
        promptId,
        outcome,
        timestamp: new Date().toISOString()
    });
    
    // Keep last 100 entries
    if (dna.promptHistory.length > 100) {
        dna.promptHistory = dna.promptHistory.slice(-100);
    }
    
    state.aiDNA = dna;
    localStorage.setItem('aurum_dna', JSON.stringify(dna));
}

// ============================================
// AI DNA ENHANCED
// ============================================

function updateDNALevel() {
    const dna = state.aiDNA || {};
    const promptCount = (dna.promptHistory || []).length;
    
    // Calculate level based on usage
    let level = 1;
    if (promptCount >= 10) level = 2;
    if (promptCount >= 25) level = 3;
    if (promptCount >= 50) level = 4;
    if (promptCount >= 100) level = 5;
    if (promptCount >= 200) level = 6;
    if (promptCount >= 500) level = 7;
    if (promptCount >= 1000) level = 8;
    
    const levelDisplay = document.querySelector('.dna-level');
    if (levelDisplay) {
        levelDisplay.textContent = `Level ${level}`;
    }
    
    const promptsUsedDisplay = document.querySelector('.dna-stats .dna-stat:nth-child(1) .stat-value');
    if (promptsUsedDisplay) {
        promptsUsedDisplay.textContent = promptCount;
    }
}

// ============================================
// COMMUNITY FEATURES
// ============================================

function initCommunityFeatures() {
    // Add rating functionality to prompt cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.rate-prompt-btn')) {
            const promptId = e.target.closest('[data-id]')?.dataset.id;
            if (promptId) showRatingModal(promptId);
        }
        
        if (e.target.closest('.fork-prompt-btn')) {
            const promptId = e.target.closest('[data-id]')?.dataset.id;
            if (promptId) forkPrompt(promptId);
        }
        
        if (e.target.closest('.share-prompt-btn')) {
            const promptId = e.target.closest('[data-id]')?.dataset.id;
            if (promptId) sharePrompt(promptId);
        }
    });
}

function showRatingModal(promptId) {
    const prompt = PROMPTS?.find(p => p.id === promptId);
    if (!prompt) return;
    
    const modal = document.getElementById('authModal');
    const container = document.getElementById('authInterface');
    
    container.innerHTML = `
        <div class="rating-modal">
            <h2>Rate this Prompt</h2>
            <p>"${prompt.title}"</p>
            
            <div class="rating-stars">
                ${[1, 2, 3, 4, 5].map(star => `
                    <button class="star-btn" data-rating="${star}" onclick="submitRating('${promptId}', ${star})">
                        ⭐
                    </button>
                `).join('')}
            </div>
            
            <div class="rating-feedback">
                <label>Did this prompt help you?</label>
                <div class="feedback-options">
                    <button class="btn btn-secondary" onclick="trackOutcome('${promptId}', 'success'); closeModal('authModal'); showToast('Thanks for your feedback!', 'success');">
                        ✅ Yes, it worked great
                    </button>
                    <button class="btn btn-secondary" onclick="trackOutcome('${promptId}', 'partial'); closeModal('authModal'); showToast('Thanks for your feedback!', 'success');">
                        🤔 Somewhat helpful
                    </button>
                    <button class="btn btn-secondary" onclick="trackOutcome('${promptId}', 'failure'); closeModal('authModal'); showToast('Thanks for your feedback!', 'success');">
                        ❌ Didn't help
                    </button>
                </div>
            </div>
        </div>
    `;
    
    openModal('authModal');
}

function submitRating(promptId, rating) {
    showToast(`Rated ${rating} stars!`, 'success');
    trackOutcome(promptId, rating >= 4 ? 'success' : rating >= 3 ? 'partial' : 'failure');
    closeModal('authModal');
}

function forkPrompt(promptId) {
    const prompt = PROMPTS?.find(p => p.id === promptId);
    if (!prompt) return;
    
    // Create a copy for editing
    const forkedPrompt = {
        ...prompt,
        id: 'fork_' + Date.now(),
        title: `Fork of: ${prompt.title}`,
        isCustom: true,
        isForked: true,
        originalId: promptId
    };
    
    showToast('Opening forked prompt in Lab...', 'success');
    openLabModal(forkedPrompt);
}

function sharePrompt(promptId) {
    const url = `${window.location.origin}${window.location.pathname}?prompt=${promptId}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Check out this prompt on AURUM',
            url: url
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied to clipboard!', 'success');
        });
    }
}

// ============================================
// MICRO-INTERACTIONS & DELIGHT
// ============================================

function initMicroInteractions() {
    // Button hover effects
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
    
    // Card hover sound (optional, disabled by default)
    // document.querySelectorAll('.prompt-card, .chain-card').forEach(card => {
    //     card.addEventListener('mouseenter', () => playHoverSound());
    // });
    
    // Success celebrations
    window.celebrate = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    
    // Easter eggs
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showToast('🎮 Konami Code Activated! You found an easter egg!', 'success');
            document.body.classList.add('konami-mode');
            setTimeout(() => document.body.classList.remove('konami-mode'), 5000);
        }
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', () => {
    initChainBuilder();
    initOutcomeTracking();
    initCommunityFeatures();
    initMicroInteractions();
    updateDNALevel();
});

// Make functions globally available
window.openLabModal = openLabModal;
window.startProTrial = startProTrial;
window.runChainSimulation = runChainSimulation;
window.trackOutcome = trackOutcome;
window.submitRating = submitRating;

// ============================================
// DNA VISUALIZATION
// ============================================

function initDNAVisualization() {
    const canvas = document.getElementById('dnaCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const size = 280;
    canvas.width = size;
    canvas.height = size;
    
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size / 2 - 20;
    
    let rotation = 0;
    
    function draw() {
        ctx.clearRect(0, 0, size, size);
        
        // Draw orbital rings
        const rings = 5;
        for (let i = 1; i <= rings; i++) {
            const radius = (maxRadius / rings) * i;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(212, 168, 83, ${0.1 + (i * 0.05)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Draw particles orbiting
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2 + rotation;
            const ringIndex = (i % rings) + 1;
            const radius = (maxRadius / rings) * ringIndex;
            
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            // Particle
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${40 + i * 5}, 70%, 60%, 0.8)`;
            ctx.fill();
            
            // Glow
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${40 + i * 5}, 70%, 60%, 0.2)`;
            ctx.fill();
        }
        
        // Draw connections
        ctx.beginPath();
        for (let i = 0; i < particleCount; i++) {
            const angle1 = (i / particleCount) * Math.PI * 2 + rotation;
            const angle2 = ((i + 1) / particleCount) * Math.PI * 2 + rotation;
            const ring1 = ((i % rings) + 1);
            const ring2 = (((i + 1) % rings) + 1);
            const radius1 = (maxRadius / rings) * ring1;
            const radius2 = (maxRadius / rings) * ring2;
            
            const x1 = centerX + Math.cos(angle1) * radius1;
            const y1 = centerY + Math.sin(angle1) * radius1;
            const x2 = centerX + Math.cos(angle2) * radius2;
            const y2 = centerY + Math.sin(angle2) * radius2;
            
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.15)';
        ctx.stroke();
        
        rotation += 0.005;
        requestAnimationFrame(draw);
    }
    
    draw();
}

// ============================================
// CREATORS GRID & PROFILES
// ============================================

function initCreatorsGrid() {
    const grid = document.getElementById('creatorsGrid');
    if (!grid || typeof CREATORS === 'undefined') return;
    
    grid.innerHTML = CREATORS.slice(0, 6).map(creator => `
        <div class="creator-card" data-creator-id="${creator.id}">
            <div class="creator-avatar-large">
                ${creator.avatar}
                ${creator.verified ? '<span class="creator-verified">✓</span>' : ''}
            </div>
            <h3>${creator.name}</h3>
            <p class="creator-handle">@${creator.handle}</p>
            <p class="creator-bio">${creator.bio}</p>
            <div class="creator-tags">
                ${(creator.specialties || ['prompts']).slice(0, 3).map(s => `<span class="creator-tag">${s}</span>`).join('')}
            </div>
            <div class="creator-stats">
                <div class="creator-stat">
                    <span class="creator-stat-value">${creator.promptCount}</span>
                    <span class="creator-stat-label">Prompts</span>
                </div>
                <div class="creator-stat">
                    <span class="creator-stat-value">${formatNumber(creator.totalUses)}</span>
                    <span class="creator-stat-label">Uses</span>
                </div>
                <div class="creator-stat">
                    <span class="creator-stat-value">⭐ ${creator.rating.toFixed(1)}</span>
                    <span class="creator-stat-label">Rating</span>
                </div>
            </div>
            <button class="btn btn-secondary btn-block creator-view-btn">View Profile</button>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.creator-card').forEach(card => {
        card.querySelector('.creator-view-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const creatorId = card.dataset.creatorId;
            openCreatorProfile(creatorId);
        });
    });
}

function openCreatorProfile(creatorId) {
    const creator = CREATORS.find(c => c.id === creatorId);
    if (!creator) return;
    
    // Get creator's prompts
    const creatorPrompts = typeof PROMPTS !== 'undefined' 
        ? PROMPTS.filter(p => p.creator?.id === creatorId || p.creator?.name === creator.name).slice(0, 6)
        : [];
    
    // Create creator profile modal content
    const modal = document.getElementById('authModal');
    const container = document.getElementById('authInterface');
    
    if (!container) return;
    
    container.innerHTML = `
        <div class="creator-profile">
            <div class="creator-profile-header">
                <div class="profile-avatar">
                    ${creator.avatar}
                    ${creator.verified ? '<span class="profile-verified" title="Verified Creator">✓</span>' : ''}
                </div>
                <h2>${creator.name}</h2>
                <p class="profile-handle">@${creator.handle}</p>
                <p class="profile-bio">${creator.bio}</p>
                
                <div class="profile-badges">
                    ${creator.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
                    ${creator.tier === 'gold' ? '<span class="badge badge-gold">🥇 Gold Creator</span>' : ''}
                    ${creator.tier === 'silver' ? '<span class="badge badge-silver">🥈 Top Creator</span>' : ''}
                    ${(creator.totalUses || 0) > 10000 ? '<span class="badge badge-popular">🔥 10K+ Uses</span>' : ''}
                </div>
            </div>
            
            <div class="profile-stats-row">
                <div class="profile-stat">
                    <span class="stat-value">${creator.promptCount || 0}</span>
                    <span class="stat-label">Prompts</span>
                </div>
                <div class="profile-stat">
                    <span class="stat-value">${creator.chainCount || 0}</span>
                    <span class="stat-label">Chains</span>
                </div>
                <div class="profile-stat">
                    <span class="stat-value">${formatNumber(creator.totalUses || 0)}</span>
                    <span class="stat-label">Total Uses</span>
                </div>
                <div class="profile-stat">
                    <span class="stat-value">⭐ ${(creator.rating || 4.5).toFixed(1)}</span>
                    <span class="stat-label">Rating</span>
                </div>
            </div>
            
            <div class="profile-specialties">
                <h4>Specialties</h4>
                <div class="specialty-tags">
                    ${(creator.specialties || ['AI Prompts', 'Productivity', 'Writing']).map(s => 
                        `<span class="specialty-tag">${s}</span>`
                    ).join('')}
                </div>
            </div>
            
            ${creatorPrompts.length > 0 ? `
                <div class="profile-prompts">
                    <h4>Popular Prompts</h4>
                    <div class="profile-prompts-grid">
                        ${creatorPrompts.map(prompt => `
                            <div class="profile-prompt-card" data-prompt-id="${prompt.id}">
                                <div class="prompt-title">${prompt.title}</div>
                                <div class="prompt-meta">
                                    <span>⭐ ${prompt.rating?.toFixed(1) || '4.5'}</span>
                                    <span>🔥 ${formatNumber(prompt.uses || 0)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="profile-actions">
                <button class="btn btn-primary btn-block" onclick="followCreator('${creatorId}')">
                    <span class="btn-icon">👤</span>
                    Follow Creator
                </button>
                <button class="btn btn-secondary btn-block" onclick="closeModal('authModal'); filterByCreator('${creator.name}')">
                    <span class="btn-icon">📝</span>
                    View All Prompts
                </button>
            </div>
        </div>
    `;
    
    // Add click handlers for prompt cards
    container.querySelectorAll('.profile-prompt-card').forEach(card => {
        card.addEventListener('click', () => {
            const promptId = card.dataset.promptId;
            const prompt = PROMPTS.find(p => p.id === promptId);
            if (prompt) {
                closeModal('authModal');
                openPromptDetail(prompt);
            }
        });
    });
    
    openModal('authModal');
}

function followCreator(creatorId) {
    // Get followed creators from localStorage
    const followed = JSON.parse(localStorage.getItem('aurum_followed_creators') || '[]');
    
    if (followed.includes(creatorId)) {
        // Unfollow
        const index = followed.indexOf(creatorId);
        followed.splice(index, 1);
        localStorage.setItem('aurum_followed_creators', JSON.stringify(followed));
        showToast('Unfollowed creator', 'success');
    } else {
        // Follow
        followed.push(creatorId);
        localStorage.setItem('aurum_followed_creators', JSON.stringify(followed));
        showToast('Now following this creator!', 'success');
    }
}

function filterByCreator(creatorName) {
    state.searchQuery = creatorName;
    state.currentFilter = 'all';
    state.displayedPrompts = 12;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = creatorName;
    }
    
    renderPrompts();
    document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
}

// Make functions globally available
window.followCreator = followCreator;
window.filterByCreator = filterByCreator;

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.section').forEach(section => {
        section.querySelectorAll('.section-header, .transformation-card, .prompt-card, .chain-card, .creator-card, .pricing-card').forEach(el => {
            el.setAttribute('data-animate', '');
            observer.observe(el);
        });
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Make functions globally available
window.copyPrompt = copyPrompt;
window.toggleSavePrompt = toggleSavePrompt;
window.openLabWithPrompt = openLabWithPrompt;
window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;

