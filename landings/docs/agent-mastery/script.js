// ============================================
// AGENT MASTERY — Interactive Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavHighlight();
    initCardInteractions();
});

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger children if present
                const children = entry.target.querySelectorAll('.tool-card, .idea-card');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('visible');
                });
            }
        });
    }, observerOptions);

    // Observe sections and categories
    document.querySelectorAll('.category, .ideas-grid, .matrix-table-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .tool-card, .idea-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease, 
                        background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .tool-card.visible, .idea-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Navigation Highlight on Scroll
// ============================================
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => observer.observe(section));

    // Active link styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--accent-primary);
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Card Interactions
// ============================================
function initCardInteractions() {
    // Idea cards - expand/collapse on mobile
    const ideaCards = document.querySelectorAll('.idea-card');
    
    ideaCards.forEach(card => {
        // Add subtle parallax effect on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-4px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Tool cards - glow effect
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 4px 30px rgba(0, 255, 136, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// ============================================
// Smooth Scroll for Nav Links
// ============================================
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Matrix Table Row Highlight
// ============================================
document.querySelectorAll('.matrix-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        const solutionName = row.querySelector('.solution-name');
        if (solutionName) {
            solutionName.style.transform = 'scale(1.05)';
            solutionName.style.transition = 'transform 0.2s ease';
        }
    });
    
    row.addEventListener('mouseleave', () => {
        const solutionName = row.querySelector('.solution-name');
        if (solutionName) {
            solutionName.style.transform = 'scale(1)';
        }
    });
});

// ============================================
// Console Easter Egg
// ============================================
console.log(`
%c◈ AGENT MASTERY %c
%cThe Future of AI Agent Orchestration

10 Revolutionary Ideas:
1. CONDUCTOR - Meta-Agent Controller
2. HYDRA - Background Agent Swarm
3. ORACLE - Predictive Pre-Spawner
4. PHOENIX - Session Resurrection
5. ARENA - Competitive Solutions
6. GENESIS - Prompt Evolution
7. NEXUS - Cross-Repo Knowledge
8. MIRROR - Self-Analysis
9. BRIDGE - Universal Protocol
10. SENSEI - Prompt Dojo

Built with SELF — Synthetic Emergent Learning Framework
`, 
'color: #00ff88; font-size: 24px; font-weight: bold;',
'',
'color: #9898a8; font-size: 12px;'
);

