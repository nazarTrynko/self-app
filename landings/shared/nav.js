/**
 * SELF Sidebar Navigation System
 * Unified navigation for all pages
 * Desktop: Fixed sidebar | Tablet: Slide-in | Mobile: Bottom sheet
 */

(function() {
    'use strict';

    // ─────────────────────────────────────────────────────────────────────────────
    // Configuration
    // ─────────────────────────────────────────────────────────────────────────────
    const CONFIG = {
        collections: {
            landings: { name: 'SELF Landings', count: 10, icon: '✦', path: '', desc: '10 aesthetic visions' },
            masters: { name: 'Masterpieces', count: 25, icon: '◆', path: 'masters/', desc: 'Cognitive technologies' },
            revelations: { name: 'Revelations', count: 10, icon: '○', path: 'revelations/', desc: 'Moments of insight' },
            ph: { name: 'Product Ideas', count: 23, icon: '▲', path: 'ph/', desc: 'Micro-SaaS concepts' },
            ideas: { name: 'App Ideas', count: 81, icon: '📱', path: 'ideas/', desc: 'Mobile blueprints' },
            pwas: { name: 'Pro PWAs', count: 5, icon: '🛠️', path: 'pro-pwas/', desc: 'Field worker tools' },
            aurum: { name: 'AURUM', count: 1, icon: '⬡', path: 'aurum/', desc: 'Prompt vault platform' },
            'stealth-ideas': { name: 'Stealth Ideas', count: 10, icon: '🎭', path: 'stealth-ideas/', desc: 'Anonymous monetization' }
        },
        breakpoints: {
            tablet: 1024,
            mobile: 768
        }
    };

    // ─────────────────────────────────────────────────────────────────────────────
    // State
    // ─────────────────────────────────────────────────────────────────────────────
    let state = {
        sidebarOpen: false,
        sheetOpen: false,
        currentCollection: null,
        currentPath: ''
    };

    // ─────────────────────────────────────────────────────────────────────────────
    // Utility Functions
    // ─────────────────────────────────────────────────────────────────────────────
    function getBasePath() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(Boolean);
        
        // If no segments, we're at root
        if (segments.length === 0) return './';
        
        // Check if last segment is a file
        const lastSegment = segments[segments.length - 1];
        const isFile = lastSegment.includes('.');
        
        // Calculate depth (directories only)
        const dirSegments = isFile ? segments.slice(0, -1) : segments;
        const depth = dirSegments.length;
        
        // If depth is 0, we're at root
        if (depth === 0) return './';
        
        // Return the relative path back to root
        return '../'.repeat(depth);
    }

    function detectCurrentCollection() {
        const path = window.location.pathname.toLowerCase();
        
        if (path.includes('/masters/')) return 'masters';
        if (path.includes('/revelations/')) return 'revelations';
        if (path.includes('/ph/')) return 'ph';
        if (path.includes('/ideas/')) return 'ideas';
        if (path.includes('/pro-pwas/')) return 'pwas';
        if (path.includes('/aurum/')) return 'aurum';
        if (path.includes('/self/')) return 'docs';
        if (path.includes('/sitemap/')) return 'sitemap';
        
        // Check if we're on a numbered landing page (0-9)
        const numMatch = path.match(/\/(\d+)\/?$/);
        if (numMatch) return 'landings';
        
        // Check if we're on root landings
        if (path.endsWith('/landings/') || path.endsWith('/landings/index.html')) {
            return 'home';
        }
        
        return 'home';
    }

    function isMobile() {
        return window.innerWidth < CONFIG.breakpoints.mobile;
    }

    function isTablet() {
        return window.innerWidth >= CONFIG.breakpoints.mobile && 
               window.innerWidth < CONFIG.breakpoints.tablet;
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Generate Navigation HTML
    // ─────────────────────────────────────────────────────────────────────────────
    function generateSidebarHTML() {
        const base = getBasePath();
        const current = detectCurrentCollection();
        
        return `
        <!-- Sidebar -->
        <aside class="self-sidebar" id="selfSidebar">
            <div class="sidebar-header">
                <a href="${base}" class="sidebar-brand">
                    <span class="sidebar-logo">S</span>
                    <div>
                        <div class="sidebar-title">SELF</div>
                        <div class="sidebar-subtitle">Framework</div>
                    </div>
                </a>
            </div>
            
            <nav class="sidebar-nav" id="sidebarNav">
                <!-- Home -->
                <div class="nav-section">
                    <a href="${base}" class="nav-link ${current === 'home' ? 'active' : ''}" data-collection="home">
                        <span class="nav-link-icon">🏠</span>
                        <span class="nav-link-text">Home</span>
                    </a>
                </div>
                
                <div class="nav-divider"></div>
                
                <!-- Collections -->
                <div class="nav-section">
                    <div class="nav-section-title">Collections</div>
                    
                    <a href="${base}#landings" class="nav-link ${current === 'landings' ? 'active' : ''}" data-collection="landings">
                        <span class="nav-link-icon">✦</span>
                        <span class="nav-link-text">SELF Landings</span>
                        <span class="nav-link-count">10</span>
                    </a>
                    
                    <a href="${base}masters/" class="nav-link ${current === 'masters' ? 'active' : ''}" data-collection="masters">
                        <span class="nav-link-icon">◆</span>
                        <span class="nav-link-text">Masterpieces</span>
                        <span class="nav-link-count">25</span>
                    </a>
                    
                    <a href="${base}revelations/" class="nav-link ${current === 'revelations' ? 'active' : ''}" data-collection="revelations">
                        <span class="nav-link-icon">○</span>
                        <span class="nav-link-text">Revelations</span>
                        <span class="nav-link-count">10</span>
                    </a>
                    
                    <a href="${base}ph/" class="nav-link ${current === 'ph' ? 'active' : ''}" data-collection="ph">
                        <span class="nav-link-icon">▲</span>
                        <span class="nav-link-text">Product Ideas</span>
                        <span class="nav-link-count">23</span>
                    </a>
                    
                    <a href="${base}ideas/" class="nav-link ${current === 'ideas' ? 'active' : ''}" data-collection="ideas">
                        <span class="nav-link-icon">📱</span>
                        <span class="nav-link-text">App Ideas</span>
                        <span class="nav-link-count">81</span>
                    </a>
                    
                    <a href="${base}pro-pwas/" class="nav-link ${current === 'pwas' ? 'active' : ''}" data-collection="pwas">
                        <span class="nav-link-icon">🛠️</span>
                        <span class="nav-link-text">Pro PWAs</span>
                        <span class="nav-link-count">5</span>
                    </a>
                </div>
                
                <div class="nav-divider"></div>
                
                <!-- Platforms -->
                <div class="nav-section">
                    <div class="nav-section-title">Platforms</div>
                    
                    <a href="${base}aurum/" class="nav-link ${current === 'aurum' ? 'active' : ''}" data-collection="aurum">
                        <span class="nav-link-icon">⬡</span>
                        <span class="nav-link-text">AURUM</span>
                        <span class="nav-link-count">1</span>
                    </a>
                </div>
            </nav>
            
            <div class="sidebar-footer">
                <div class="sidebar-footer-links">
                    <a href="${base}self/" class="sidebar-footer-link ${current === 'docs' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                        <span>Documentation</span>
                    </a>
                    <a href="${base}sitemap/" class="sidebar-footer-link ${current === 'sitemap' ? 'active' : ''}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <span>Sitemap</span>
                    </a>
                </div>
            </div>
        </aside>
        
        <!-- Sidebar Overlay (Tablet) -->
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        
        <!-- Sidebar Toggle (Tablet) -->
        <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle navigation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
        </button>
        
        <!-- Mobile Bottom Bar -->
        <nav class="mobile-bottom-bar" id="mobileBottomBar">
            <div class="bottom-bar-inner">
                <a href="${base}" class="bottom-bar-item ${current === 'home' ? 'active' : ''}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>Home</span>
                </a>
                <button class="bottom-bar-item" id="mobileNavTrigger">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    <span>Collections</span>
                </button>
                <a href="${base}sitemap/" class="bottom-bar-item ${current === 'sitemap' ? 'active' : ''}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span>Sitemap</span>
                </a>
                <a href="${base}self/" class="bottom-bar-item ${current === 'docs' ? 'active' : ''}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span>Docs</span>
                </a>
            </div>
        </nav>
        
        <!-- Mobile Bottom Sheet -->
        <div class="mobile-sheet-overlay" id="mobileSheetOverlay"></div>
        <div class="mobile-sheet" id="mobileSheet">
            <div class="mobile-sheet-handle">
                <div class="mobile-sheet-handle-bar"></div>
            </div>
            <div class="mobile-sheet-header">
                <h2 class="mobile-sheet-title">Collections</h2>
                <button class="mobile-sheet-close" id="mobileSheetClose" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <div class="mobile-sheet-content">
                ${generateMobileNavItems()}
            </div>
        </div>
        `;
    }

    function generateMobileNavItems() {
        const base = getBasePath();
        const current = detectCurrentCollection();
        
        const items = [
            { id: 'landings', name: 'SELF Landings', desc: '10 aesthetic visions', icon: '✦', count: 10, path: '#landings' },
            { id: 'masters', name: 'Masterpieces', desc: 'Cognitive technologies', icon: '◆', count: 25, path: 'masters/' },
            { id: 'revelations', name: 'Revelations', desc: 'Moments of insight', icon: '○', count: 10, path: 'revelations/' },
            { id: 'ph', name: 'Product Ideas', desc: 'Micro-SaaS concepts', icon: '▲', count: 23, path: 'ph/' },
            { id: 'ideas', name: 'App Ideas', desc: 'Mobile blueprints', icon: '📱', count: 81, path: 'ideas/' },
            { id: 'pwas', name: 'Pro PWAs', desc: 'Field worker tools', icon: '🛠️', count: 5, path: 'pro-pwas/' },
            { id: 'aurum', name: 'AURUM', desc: 'Prompt vault platform', icon: '⬡', count: 1, path: 'aurum/' }
        ];
        
        return items.map(item => `
            <a href="${base}${item.path}" class="mobile-nav-item ${current === item.id ? 'active' : ''}" data-collection="${item.id}">
                <div class="mobile-nav-icon">${item.icon}</div>
                <div class="mobile-nav-text">
                    <span class="mobile-nav-label">${item.name}</span>
                    <span class="mobile-nav-desc">${item.desc}</span>
                </div>
                <span class="mobile-nav-count">${item.count}</span>
            </a>
        `).join('');
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Event Handlers
    // ─────────────────────────────────────────────────────────────────────────────
    function openSidebar() {
        state.sidebarOpen = true;
        document.getElementById('selfSidebar')?.classList.add('open');
        document.getElementById('sidebarOverlay')?.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        state.sidebarOpen = false;
        document.getElementById('selfSidebar')?.classList.remove('open');
        document.getElementById('sidebarOverlay')?.classList.remove('visible');
        document.body.style.overflow = '';
    }

    function toggleSidebar() {
        if (state.sidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function openMobileSheet() {
        state.sheetOpen = true;
        document.getElementById('mobileSheet')?.classList.add('open');
        document.getElementById('mobileSheetOverlay')?.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSheet() {
        state.sheetOpen = false;
        document.getElementById('mobileSheet')?.classList.remove('open');
        document.getElementById('mobileSheetOverlay')?.classList.remove('visible');
        document.body.style.overflow = '';
    }

    function handleResize() {
        // Close sidebar on resize if leaving tablet view
        if (!isTablet() && state.sidebarOpen) {
            closeSidebar();
        }
        
        // Close sheet on resize if leaving mobile view
        if (!isMobile() && state.sheetOpen) {
            closeMobileSheet();
        }
    }

    function handleEscape(e) {
        if (e.key === 'Escape') {
            if (state.sheetOpen) closeMobileSheet();
            if (state.sidebarOpen) closeSidebar();
        }
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Touch Gestures for Mobile Sheet
    // ─────────────────────────────────────────────────────────────────────────────
    let touchStartY = 0;
    let touchCurrentY = 0;
    let sheetElement = null;

    function handleTouchStart(e) {
        touchStartY = e.touches[0].clientY;
        sheetElement = document.getElementById('mobileSheet');
    }

    function handleTouchMove(e) {
        if (!state.sheetOpen || !sheetElement) return;
        
        touchCurrentY = e.touches[0].clientY;
        const diff = touchCurrentY - touchStartY;
        
        // Only allow dragging down
        if (diff > 0) {
            sheetElement.style.transform = `translateY(${diff}px)`;
        }
    }

    function handleTouchEnd() {
        if (!state.sheetOpen || !sheetElement) return;
        
        const diff = touchCurrentY - touchStartY;
        
        // If dragged more than 100px, close the sheet
        if (diff > 100) {
            closeMobileSheet();
        }
        
        // Reset transform
        sheetElement.style.transform = '';
        touchStartY = 0;
        touchCurrentY = 0;
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Initialization
    // ─────────────────────────────────────────────────────────────────────────────
    function init() {
        // Don't inject if already present
        if (document.getElementById('selfSidebar')) return;
        
        // Get current state
        state.currentCollection = detectCurrentCollection();
        state.currentPath = window.location.pathname;
        
        // Inject navigation HTML at the start of body
        document.body.insertAdjacentHTML('afterbegin', generateSidebarHTML());
        
        // Wrap existing content if not already wrapped
        const existingContent = document.querySelector('.self-content');
        if (!existingContent) {
            const bodyChildren = Array.from(document.body.children).filter(
                el => !el.classList.contains('self-sidebar') && 
                      !el.classList.contains('sidebar-overlay') &&
                      !el.classList.contains('sidebar-toggle') &&
                      !el.classList.contains('mobile-bottom-bar') &&
                      !el.classList.contains('mobile-sheet-overlay') &&
                      !el.classList.contains('mobile-sheet')
            );
            
            const wrapper = document.createElement('main');
            wrapper.className = 'self-content';
            
            bodyChildren.forEach(child => {
                wrapper.appendChild(child);
            });
            
            document.body.appendChild(wrapper);
        }
        
        // Add layout class to body
        document.body.classList.add('self-layout');
        
        // Bind events
        bindEvents();
    }

    function bindEvents() {
        // Sidebar toggle (tablet)
        document.getElementById('sidebarToggle')?.addEventListener('click', toggleSidebar);
        document.getElementById('sidebarOverlay')?.addEventListener('click', closeSidebar);
        
        // Mobile sheet
        document.getElementById('mobileNavTrigger')?.addEventListener('click', openMobileSheet);
        document.getElementById('mobileSheetClose')?.addEventListener('click', closeMobileSheet);
        document.getElementById('mobileSheetOverlay')?.addEventListener('click', closeMobileSheet);
        
        // Touch gestures for mobile sheet
        const sheet = document.getElementById('mobileSheet');
        if (sheet) {
            sheet.addEventListener('touchstart', handleTouchStart, { passive: true });
            sheet.addEventListener('touchmove', handleTouchMove, { passive: true });
            sheet.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
        
        // Close mobile sheet when clicking a link inside it
        document.querySelectorAll('.mobile-nav-item').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeMobileSheet, 100);
            });
        });
        
        // Window events
        window.addEventListener('resize', debounce(handleResize, 200));
        document.addEventListener('keydown', handleEscape);
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────────────────────
    function debounce(fn, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Public API
    // ─────────────────────────────────────────────────────────────────────────────
    window.SELFNav = {
        init,
        openSidebar,
        closeSidebar,
        openMobileSheet,
        closeMobileSheet,
        getBasePath,
        detectCurrentCollection,
        CONFIG
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
