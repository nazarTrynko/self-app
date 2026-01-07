// SELF Emergent Properties Visualization
// Interactive visualization for emergent properties analysis

document.addEventListener('DOMContentLoaded', () => {
    initBackgroundNetwork();
    initHeroNetwork();
    initPropertyNetwork();
    initPropertyCards();
    initPotentialCards();
    initStatCounters();
    initFilters();
    initModal();
    initSmoothScroll();
    initConnectionsCanvas();
});

// ============================================
// Background Network Animation
// ============================================
function initBackgroundNetwork() {
    const canvas = document.getElementById('network-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 15000);
        
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.15;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw particles
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
            ctx.fill();
            
            // Update position
            p.x += p.vx;
            p.y += p.vy;
            
            // Wrap around
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        });
        
        animationId = requestAnimationFrame(draw);
    }
    
    resize();
    createParticles();
    draw();
    
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

// ============================================
// Hero Network Visualization
// ============================================
function initHeroNetwork() {
    const canvas = document.getElementById('hero-network-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const properties = EMERGENT_DATA.confirmed_properties;
    let nodes = [];
    let animationId;
    
    function resize() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    
    function createNodes() {
        nodes = properties.map((p, i) => {
            const angle = (i / properties.length) * Math.PI * 2;
            const radius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.35;
            const centerX = canvas.offsetWidth / 2;
            const centerY = canvas.offsetHeight / 2;
            
            return {
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                targetX: centerX + Math.cos(angle) * radius,
                targetY: centerY + Math.sin(angle) * radius,
                radius: p.compound_rate === 'exponential' ? 12 : 8,
                color: p.compound_rate === 'exponential' ? '#00e5ff' : '#9d4edd',
                name: p.name,
                pulse: Math.random() * Math.PI * 2
            };
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        
        // Draw connections
        nodes.forEach((node, i) => {
            nodes.forEach((other, j) => {
                if (i < j) {
                    const opacity = 0.1;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            });
        });
        
        // Draw center
        const centerX = canvas.offsetWidth / 2;
        const centerY = canvas.offsetHeight / 2;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 20);
        gradient.addColorStop(0, 'rgba(0, 229, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 0, 170, 0.4)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw connections to center
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, 0.2)`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(centerX, centerY);
            ctx.stroke();
        });
        
        // Draw nodes
        nodes.forEach(node => {
            node.pulse += 0.02;
            const pulseScale = 1 + Math.sin(node.pulse) * 0.1;
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
            
            // Glow
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * pulseScale + 4, 0, Math.PI * 2);
            ctx.fillStyle = node.color.replace(')', ', 0.2)').replace('rgb', 'rgba');
            ctx.fill();
        });
        
        animationId = requestAnimationFrame(draw);
    }
    
    resize();
    createNodes();
    draw();
    
    window.addEventListener('resize', () => {
        resize();
        createNodes();
    });
}

// ============================================
// Property Network Visualization
// ============================================
function initPropertyNetwork() {
    const canvas = document.getElementById('property-network');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const tooltip = document.getElementById('network-tooltip');
    const properties = EMERGENT_DATA.confirmed_properties;
    
    let nodes = [];
    let dragging = null;
    let hoveredNode = null;
    let mouseX = 0;
    let mouseY = 0;
    
    function resize() {
        canvas.width = container.offsetWidth - 64;
        canvas.height = 500;
    }
    
    function createNodes() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        nodes = properties.map((p, i) => {
            const angle = (i / properties.length) * Math.PI * 2 - Math.PI / 2;
            const radius = Math.min(canvas.width, canvas.height) * 0.35;
            
            const moatValue = { very_high: 3, high: 2, medium: 1 };
            const nodeRadius = 20 + (moatValue[p.strategic_value.competitive_moat] || 1) * 8;
            
            return {
                id: p.id,
                x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 50,
                y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 50,
                vx: 0,
                vy: 0,
                radius: nodeRadius,
                color: p.compound_rate === 'exponential' ? '#00e5ff' : '#9d4edd',
                name: p.name,
                description: p.description,
                components: p.components,
                compound_rate: p.compound_rate,
                moat: p.strategic_value.competitive_moat,
                data: p
            };
        });
    }
    
    function simulate() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Apply forces
        nodes.forEach(node => {
            // Center attraction
            const dx = centerX - node.x;
            const dy = centerY - node.y;
            node.vx += dx * 0.0001;
            node.vy += dy * 0.0001;
            
            // Repulsion from other nodes
            nodes.forEach(other => {
                if (node !== other) {
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150 && dist > 0) {
                        const force = (150 - dist) / dist * 0.5;
                        node.vx += dx * force * 0.01;
                        node.vy += dy * force * 0.01;
                    }
                }
            });
            
            // Damping
            node.vx *= 0.95;
            node.vy *= 0.95;
            
            // Update position
            if (node !== dragging) {
                node.x += node.vx;
                node.y += node.vy;
            }
            
            // Bounds
            node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
            node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        simulate();
        
        // Draw connections between nodes with shared components
        nodes.forEach((node, i) => {
            nodes.forEach((other, j) => {
                if (i < j) {
                    const shared = node.components.filter(c => other.components.includes(c));
                    if (shared.length > 0) {
                        const opacity = 0.1 + shared.length * 0.05;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = shared.length;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });
        });
        
        // Draw nodes
        nodes.forEach(node => {
            const isHovered = node === hoveredNode;
            const scale = isHovered ? 1.2 : 1;
            
            // Glow
            if (isHovered || node.compound_rate === 'exponential') {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * scale + 10, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, node.radius * scale,
                    node.x, node.y, node.radius * scale + 10
                );
                gradient.addColorStop(0, node.color + '40');
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fill();
            }
            
            // Main circle
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
            
            // Border
            ctx.strokeStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = isHovered ? 3 : 2;
            ctx.stroke();
            
            // Label
            if (isHovered) {
                ctx.font = '12px Space Grotesk';
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.fillText(node.name, node.x, node.y + node.radius + 20);
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    function getNodeAtPosition(x, y) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            const dx = x - node.x;
            const dy = y - node.y;
            if (dx * dx + dy * dy < node.radius * node.radius) {
                return node;
            }
        }
        return null;
    }
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        if (dragging) {
            dragging.x = mouseX;
            dragging.y = mouseY;
        }
        
        hoveredNode = getNodeAtPosition(mouseX, mouseY);
        
        if (hoveredNode) {
            canvas.style.cursor = 'pointer';
            tooltip.innerHTML = `
                <strong>${hoveredNode.name}</strong><br>
                <span style="color: #9a9ab0;">${hoveredNode.description}</span><br>
                <span style="color: ${hoveredNode.color};">Compound: ${hoveredNode.compound_rate}</span><br>
                <span>Moat: ${hoveredNode.moat}</span>
            `;
            tooltip.style.left = (mouseX + 20) + 'px';
            tooltip.style.top = (mouseY - 10) + 'px';
            tooltip.classList.add('visible');
        } else {
            canvas.style.cursor = 'grab';
            tooltip.classList.remove('visible');
        }
    });
    
    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        dragging = getNodeAtPosition(x, y);
        if (dragging) {
            canvas.style.cursor = 'grabbing';
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        dragging = null;
        canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
    });
    
    canvas.addEventListener('mouseleave', () => {
        hoveredNode = null;
        tooltip.classList.remove('visible');
    });
    
    canvas.addEventListener('click', () => {
        if (hoveredNode) {
            showPropertyModal(hoveredNode.data);
        }
    });
    
    resize();
    createNodes();
    draw();
    
    window.addEventListener('resize', () => {
        resize();
        createNodes();
    });
}

// ============================================
// Property Cards
// ============================================
function initPropertyCards() {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;
    
    const properties = EMERGENT_DATA.confirmed_properties;
    
    properties.forEach(p => {
        const card = document.createElement('div');
        card.className = `property-card ${p.compound_rate}`;
        card.dataset.id = p.id;
        card.dataset.compound = p.compound_rate;
        card.dataset.moat = p.strategic_value.competitive_moat;
        card.dataset.readiness = p.future_readiness['0_3'];
        
        card.innerHTML = `
            <div class="property-header">
                <span class="property-name">${p.name}</span>
                <span class="property-status">Confirmed</span>
            </div>
            <p class="property-description">${p.description}</p>
            <div class="property-components">
                ${p.components.map(c => `<span class="component-tag">${formatComponent(c)}</span>`).join('')}
            </div>
            <div class="property-metrics">
                <div class="metric-item">
                    <span class="metric-label">Moat</span>
                    <span class="metric-value ${p.strategic_value.competitive_moat}">${formatValue(p.strategic_value.competitive_moat)}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Compound</span>
                    <span class="metric-value ${p.compound_rate}">${formatValue(p.compound_rate)}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Network Effects</span>
                    <span class="metric-value ${p.strategic_value.network_effects}">${formatValue(p.strategic_value.network_effects)}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">Readiness</span>
                    <span class="metric-value ${p.future_readiness['0_3']}">${formatValue(p.future_readiness['0_3'])}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showPropertyModal(p));
        grid.appendChild(card);
    });
}

// ============================================
// Potential Properties Cards
// ============================================
function initPotentialCards() {
    const grid = document.getElementById('potential-grid');
    if (!grid) return;
    
    const properties = EMERGENT_DATA.potential_properties;
    
    properties.forEach(p => {
        const card = document.createElement('div');
        card.className = 'potential-card';
        
        card.innerHTML = `
            <div class="potential-header">
                <span class="potential-name">${p.name}</span>
                <span class="potential-status">Potential</span>
            </div>
            <p class="potential-description">${p.description}</p>
            <p class="potential-validation">${p.validation_needed}</p>
        `;
        
        grid.appendChild(card);
    });
}

// ============================================
// Stat Counters Animation
// ============================================
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-value[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(el, target) {
    const duration = 1500;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        el.textContent = Math.round(target * eased);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// Filters
// ============================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('property-sort');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProperties(btn.dataset.filter);
        });
    });
    
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            sortProperties(sortSelect.value);
        });
    }
}

function filterProperties(filter) {
    const cards = document.querySelectorAll('.property-card');
    
    cards.forEach(card => {
        let show = true;
        
        if (filter === 'exponential') {
            show = card.dataset.compound === 'exponential';
        } else if (filter === 'linear') {
            show = card.dataset.compound === 'linear';
        } else if (filter === 'critical') {
            show = card.dataset.readiness === 'critical';
        }
        
        card.style.display = show ? '' : 'none';
    });
}

function sortProperties(sortBy) {
    const grid = document.getElementById('properties-grid');
    const cards = Array.from(grid.querySelectorAll('.property-card'));
    
    const moatOrder = { very_high: 3, high: 2, medium: 1 };
    const compoundOrder = { exponential: 2, linear: 1 };
    const readinessOrder = { critical: 2, important: 1 };
    
    cards.sort((a, b) => {
        switch (sortBy) {
            case 'moat':
                return (moatOrder[b.dataset.moat] || 0) - (moatOrder[a.dataset.moat] || 0);
            case 'compound':
                return (compoundOrder[b.dataset.compound] || 0) - (compoundOrder[a.dataset.compound] || 0);
            case 'readiness':
                return (readinessOrder[b.dataset.readiness] || 0) - (readinessOrder[a.dataset.readiness] || 0);
            default:
                return a.querySelector('.property-name').textContent.localeCompare(
                    b.querySelector('.property-name').textContent
                );
        }
    });
    
    cards.forEach(card => grid.appendChild(card));
}

// ============================================
// Modal
// ============================================
function initModal() {
    const modal = document.getElementById('property-modal');
    if (!modal) return;
    
    const backdrop = modal.querySelector('.modal-backdrop');
    const closeBtn = modal.querySelector('.modal-close');
    
    backdrop.addEventListener('click', () => closeModal());
    closeBtn.addEventListener('click', () => closeModal());
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function showPropertyModal(property) {
    const modal = document.getElementById('property-modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <h2 style="margin-bottom: 8px;">${property.name}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">${property.description}</p>
        
        <h4 style="margin-bottom: 12px; color: var(--text-muted);">Required Components</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
            ${property.components.map(c => `<span class="component-tag">${formatComponent(c)}</span>`).join('')}
        </div>
        
        <h4 style="margin-bottom: 12px; color: var(--text-muted);">Strategic Value</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
            <div class="metric-item">
                <span class="metric-label">Competitive Moat</span>
                <span class="metric-value ${property.strategic_value.competitive_moat}">${formatValue(property.strategic_value.competitive_moat)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Network Effects</span>
                <span class="metric-value ${property.strategic_value.network_effects}">${formatValue(property.strategic_value.network_effects)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Compound Rate</span>
                <span class="metric-value ${property.compound_rate}">${formatValue(property.compound_rate)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Replication Difficulty</span>
                <span class="metric-value ${property.strategic_value.replication_difficulty}">${formatValue(property.strategic_value.replication_difficulty)}</span>
            </div>
        </div>
        
        <h4 style="margin-bottom: 12px; color: var(--text-muted);">Future Readiness</h4>
        <div style="display: flex; gap: 16px; margin-bottom: 24px;">
            <div class="property-chip ${property.future_readiness['0_3']}">0-3 mo: ${property.future_readiness['0_3']}</div>
            <div class="property-chip ${property.future_readiness['3_6']}">3-6 mo: ${property.future_readiness['3_6']}</div>
            <div class="property-chip ${property.future_readiness['6_12']}">6-12 mo: ${property.future_readiness['6_12']}</div>
        </div>
        
        <h4 style="margin-bottom: 12px; color: var(--text-muted);">Mechanisms</h4>
        <ul style="list-style: none;">
            ${property.mechanisms.map(m => `<li style="padding: 4px 0; padding-left: 16px; position: relative; color: var(--text-secondary);"><span style="position: absolute; left: 0; color: var(--accent-cyan);">→</span>${m}</li>`).join('')}
        </ul>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('property-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// Connections Canvas for Component Map
// ============================================
function initConnectionsCanvas() {
    const canvas = document.getElementById('connections-canvas');
    if (!canvas) return;
    
    const container = canvas.parentElement;
    
    function resize() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Utility Functions
// ============================================
function formatComponent(component) {
    const mapping = {
        memory: 'Memory',
        predictions: 'Predictions',
        patterns: 'Patterns',
        blending: 'Blending',
        evolution: 'Evolution',
        fitness: 'Fitness',
        emergence: 'Emergence',
        consciousness: 'Consciousness',
        creator: 'Creator',
        guardian: 'Guardian',
        five_minds: 'Five Minds',
        context: 'Context',
        insights: 'Insights',
        intuitions: 'Intuitions',
        confidence: 'Confidence',
        outcomes: 'Outcomes',
        all_layers: 'All Layers'
    };
    return mapping[component] || component;
}

function formatValue(value) {
    const mapping = {
        very_high: 'Very High',
        high: 'High',
        medium: 'Medium',
        low: 'Low',
        exponential: 'Exponential',
        linear: 'Linear',
        critical: 'Critical',
        important: 'Important'
    };
    return mapping[value] || value;
}

