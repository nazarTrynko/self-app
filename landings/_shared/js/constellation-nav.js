/**
 * Constellation Navigation
 * Ethereal glowing orbs that drift like stars
 * 
 * A golden mother orb births 10 luminous child orbs,
 * each linking to a masterpiece (11-20)
 */

(function() {
    'use strict';

    // Masterpieces data with their signature colors
    const MASTERPIECES = [
        { id: 11, name: 'The Void', path: 'showcases/masterpieces/11/', color: { r: 26, g: 26, b: 46 }, glow: 'rgba(26,26,46,0.6)' },
        { id: 12, name: 'The Inversion', path: 'showcases/masterpieces/12/', color: { r: 192, g: 192, b: 192 }, glow: 'rgba(220,220,220,0.5)' },
        { id: 13, name: 'The Dissolution', path: 'showcases/masterpieces/13/', color: { r: 139, g: 115, b: 85 }, glow: 'rgba(139,115,85,0.5)' },
        { id: 14, name: 'The Paradox', path: 'showcases/masterpieces/14/', color: { r: 107, g: 91, b: 149 }, glow: 'rgba(107,91,149,0.5)' },
        { id: 15, name: 'The Alchemy', path: 'showcases/masterpieces/15/', color: { r: 201, g: 162, b: 39 }, glow: 'rgba(201,162,39,0.5)' },
        { id: 16, name: 'The Memento', path: 'showcases/masterpieces/16/', color: { r: 166, g: 124, b: 82 }, glow: 'rgba(166,124,82,0.5)' },
        { id: 17, name: 'The Lineage', path: 'showcases/masterpieces/17/', color: { r: 139, g: 105, b: 20 }, glow: 'rgba(139,105,20,0.5)' },
        { id: 18, name: 'The Adversary', path: 'showcases/masterpieces/18/', color: { r: 180, g: 40, b: 40 }, glow: 'rgba(180,40,40,0.5)' },
        { id: 19, name: 'The Emergence', path: 'showcases/masterpieces/19/', color: { r: 0, g: 168, b: 107 }, glow: 'rgba(0,168,107,0.5)' },
        { id: 20, name: 'The Threshold', path: 'showcases/masterpieces/20/', color: { r: 155, g: 89, b: 182 }, glow: 'rgba(155,89,182,0.5)' }
    ];

    // Mother orb colors
    const MOTHER_COLOR = { r: 201, g: 162, b: 39 };

    // Visual settings
    const SETTINGS = {
        motherRadius: 20,
        motherGlowRadius: 50,
        childRadius: 16,
        childGlowRadius: 40,
        breathingSpeed: 0.0008,
        driftSpeed: 0.0004,
        cursorRepelDist: 120,
        cursorRepelForce: 0.4,
        threadOpacity: 0.06,
        threadMaxDist: 160,
        spawnDuration: 800,
        collapseDuration: 500,
        hoverGlowMultiplier: 1.6
    };

    // State
    let container = null;
    let canvas = null;
    let ctx = null;
    let motherButton = null;
    let label = null;
    let orbs = [];
    let motherOrb = null;
    let isExpanded = false;
    let time = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let hoveredOrb = null;
    let animationId = null;

    /**
     * Initialize the constellation navigation
     */
    function init() {
        createContainer();
        createCanvas();
        createMotherButton();
        createLabel();
        initMotherOrb();
        
        bindEvents();
        startAnimation();
    }

    /**
     * Create the main container
     */
    function createContainer() {
        container = document.createElement('div');
        container.className = 'constellation-nav';
        container.setAttribute('role', 'navigation');
        container.setAttribute('aria-label', 'Masterpieces constellation');
        document.body.appendChild(container);
    }

    /**
     * Create the canvas element
     */
    function createCanvas() {
        canvas = document.createElement('canvas');
        canvas.className = 'constellation-canvas';
        container.appendChild(canvas);
        ctx = canvas.getContext('2d');
        resizeCanvas();
    }

    /**
     * Create invisible mother button for accessibility
     */
    function createMotherButton() {
        motherButton = document.createElement('button');
        motherButton.className = 'constellation-mother-area';
        motherButton.setAttribute('aria-label', 'Open masterpieces constellation');
        motherButton.setAttribute('aria-expanded', 'false');
        container.appendChild(motherButton);
    }

    /**
     * Create the hover label element
     */
    function createLabel() {
        label = document.createElement('div');
        label.className = 'constellation-label';
        label.setAttribute('aria-hidden', 'true');
        document.body.appendChild(label);
    }

    /**
     * Initialize mother orb state
     */
    function initMotherOrb() {
        const rect = container.getBoundingClientRect();
        motherOrb = {
            x: rect.width - 70,
            y: rect.height - 70,
            radius: SETTINGS.motherRadius,
            glowRadius: SETTINGS.motherGlowRadius,
            phase: 0,
            brightness: 1
        };
    }

    /**
     * Resize canvas to match container
     */
    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);
        
        // Update mother orb position
        if (motherOrb) {
            motherOrb.x = rect.width - 70;
            motherOrb.y = rect.height - 70;
        }
    }

    /**
     * Bind all event listeners
     */
    function bindEvents() {
        // Mother button click
        motherButton.addEventListener('click', toggleExpand);
        motherButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExpand();
            }
        });

        // Canvas interactions
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('click', handleCanvasClick);

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isExpanded) {
                collapse();
            }
        });

        // Resize
        window.addEventListener('resize', debounce(() => {
            resizeCanvas();
            if (isExpanded) {
                redistributeOrbs();
            }
        }, 200));
    }

    /**
     * Handle mouse movement
     */
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Check for hovered orb
        hoveredOrb = null;
        for (const orb of orbs) {
            if (!orb.visible) continue;
            const dx = mouseX - orb.x;
            const dy = mouseY - orb.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < orb.radius + 10) {
                hoveredOrb = orb;
                canvas.style.cursor = 'pointer';
                break;
            }
        }
        
        // Check mother orb hover
        if (!hoveredOrb && motherOrb) {
            const dx = mouseX - motherOrb.x;
            const dy = mouseY - motherOrb.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < motherOrb.radius + 15) {
                canvas.style.cursor = 'pointer';
            } else if (!hoveredOrb) {
                canvas.style.cursor = 'default';
            }
        }
        
        // Update label
        if (hoveredOrb) {
            const rect = canvas.getBoundingClientRect();
            label.textContent = hoveredOrb.data.name;
            label.setAttribute('data-number', hoveredOrb.data.id);
            label.style.left = (rect.left + hoveredOrb.x) + 'px';
            label.style.top = (rect.top + hoveredOrb.y - hoveredOrb.radius - 30) + 'px';
            label.classList.add('visible');
        } else {
            label.classList.remove('visible');
        }
    }

    /**
     * Handle mouse leaving canvas
     */
    function handleMouseLeave() {
        mouseX = -1000;
        mouseY = -1000;
        hoveredOrb = null;
        canvas.style.cursor = 'default';
        label.classList.remove('visible');
    }

    /**
     * Handle canvas click
     */
    function handleCanvasClick(e) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Check child orbs first
        for (const orb of orbs) {
            if (!orb.visible) continue;
            const dx = clickX - orb.x;
            const dy = clickY - orb.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < orb.radius + 10) {
                window.location.href = orb.data.path;
                return;
            }
        }
        
        // Check mother orb
        if (motherOrb) {
            const dx = clickX - motherOrb.x;
            const dy = clickY - motherOrb.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < motherOrb.radius + 15) {
                toggleExpand();
            }
        }
    }

    /**
     * Toggle expanded state
     */
    function toggleExpand() {
        if (isExpanded) {
            collapse();
        } else {
            expand();
        }
    }

    /**
     * Expand - birth the constellation
     */
    function expand() {
        if (isExpanded) return;
        isExpanded = true;
        container.classList.add('expanded');
        motherButton.setAttribute('aria-expanded', 'true');
        motherButton.setAttribute('aria-label', 'Close masterpieces constellation');

        // Wait for container to expand, then create orbs
        setTimeout(() => {
            resizeCanvas();
            birthConstellation();
        }, 100);
    }

    /**
     * Collapse - recall the constellation
     */
    function collapse() {
        if (!isExpanded) return;
        isExpanded = false;
        motherButton.setAttribute('aria-expanded', 'false');
        motherButton.setAttribute('aria-label', 'Open masterpieces constellation');
        label.classList.remove('visible');

        // Animate orbs back to mother
        const startTime = performance.now();
        orbs.forEach((orb, index) => {
            orb.collapseStart = startTime + index * 40;
            orb.startX = orb.x;
            orb.startY = orb.y;
        });

        // Remove container class after animation
        setTimeout(() => {
            container.classList.remove('expanded');
            orbs = [];
            setTimeout(resizeCanvas, 100);
        }, SETTINGS.collapseDuration + orbs.length * 40);
    }

    /**
     * Birth the constellation of orbs
     */
    function birthConstellation() {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width - 70;
        const centerY = rect.height - 70;
        const now = performance.now();

        orbs = MASTERPIECES.map((mp, index) => {
            // Calculate target position in a loose spiral/scattered pattern
            const angle = (index / MASTERPIECES.length) * Math.PI * 1.8 - Math.PI * 0.7;
            const dist = 100 + (index % 3) * 50 + Math.random() * 40;
            const targetX = Math.min(rect.width - 60, Math.max(60, centerX - Math.cos(angle) * dist));
            const targetY = Math.min(rect.height - 100, Math.max(60, centerY - Math.sin(angle) * dist - 80));

            return {
                data: mp,
                x: centerX,
                y: centerY,
                targetX: targetX,
                targetY: targetY,
                radius: SETTINGS.childRadius,
                glowRadius: SETTINGS.childGlowRadius,
                phase: Math.random() * Math.PI * 2,
                phaseY: Math.random() * Math.PI * 2,
                birthStart: now + index * 80,
                birthProgress: 0,
                visible: false,
                collapseStart: null,
                startX: 0,
                startY: 0
            };
        });
    }

    /**
     * Redistribute orbs after resize
     */
    function redistributeOrbs() {
        const rect = container.getBoundingClientRect();
        const centerX = rect.width - 70;
        const centerY = rect.height - 70;

        orbs.forEach((orb, index) => {
            const angle = (index / MASTERPIECES.length) * Math.PI * 1.8 - Math.PI * 0.7;
            const dist = 100 + (index % 3) * 50 + Math.random() * 40;
            orb.targetX = Math.min(rect.width - 60, Math.max(60, centerX - Math.cos(angle) * dist));
            orb.targetY = Math.min(rect.height - 100, Math.max(60, centerY - Math.sin(angle) * dist - 80));
        });
    }

    /**
     * Start the animation loop
     */
    function startAnimation() {
        function animate(timestamp) {
            time = timestamp * 0.001; // Convert to seconds
            update(timestamp);
            draw();
            animationId = requestAnimationFrame(animate);
        }
        animationId = requestAnimationFrame(animate);
    }

    /**
     * Update all orb positions
     */
    function update(timestamp) {
        // Update mother orb breathing
        if (motherOrb) {
            motherOrb.phase = Math.sin(time * 0.8) * 0.15 + 1;
        }

        // Update child orbs
        orbs.forEach(orb => {
            // Birth animation
            if (orb.birthProgress < 1) {
                const elapsed = timestamp - orb.birthStart;
                if (elapsed > 0) {
                    orb.birthProgress = Math.min(1, elapsed / SETTINGS.spawnDuration);
                    orb.visible = true;
                    // Ease out cubic
                    const ease = 1 - Math.pow(1 - orb.birthProgress, 3);
                    orb.x = motherOrb.x + (orb.targetX - motherOrb.x) * ease;
                    orb.y = motherOrb.y + (orb.targetY - motherOrb.y) * ease;
                }
                return;
            }

            // Collapse animation
            if (orb.collapseStart !== null) {
                const elapsed = timestamp - orb.collapseStart;
                if (elapsed > 0) {
                    const progress = Math.min(1, elapsed / SETTINGS.collapseDuration);
                    // Ease in cubic
                    const ease = progress * progress * progress;
                    orb.x = orb.startX + (motherOrb.x - orb.startX) * ease;
                    orb.y = orb.startY + (motherOrb.y - orb.startY) * ease;
                    orb.visible = progress < 0.95;
                }
                return;
            }

            // Organic drift motion
            const driftX = Math.sin(time * 0.5 + orb.phase) * 0.4;
            const driftY = Math.cos(time * 0.35 + orb.phaseY) * 0.35;
            orb.x += driftX;
            orb.y += driftY;

            // Cursor repulsion
            if (mouseX > 0 && mouseY > 0) {
                const dx = orb.x - mouseX;
                const dy = orb.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < SETTINGS.cursorRepelDist && dist > 0) {
                    const force = (SETTINGS.cursorRepelDist - dist) / SETTINGS.cursorRepelDist * SETTINGS.cursorRepelForce;
                    orb.x += (dx / dist) * force;
                    orb.y += (dy / dist) * force;
                }
            }

            // Soft boundary reflection
            const rect = container.getBoundingClientRect();
            const margin = 40;
            if (orb.x < margin) orb.x += (margin - orb.x) * 0.1;
            if (orb.x > rect.width - margin) orb.x -= (orb.x - (rect.width - margin)) * 0.1;
            if (orb.y < margin) orb.y += (margin - orb.y) * 0.1;
            if (orb.y > rect.height - margin - 60) orb.y -= (orb.y - (rect.height - margin - 60)) * 0.1;

            // Gentle return to target
            orb.x += (orb.targetX - orb.x) * 0.003;
            orb.y += (orb.targetY - orb.y) * 0.003;
        });
    }

    /**
     * Draw everything
     */
    function draw() {
        const rect = container.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Draw constellation threads
        if (isExpanded) {
            drawThreads();
        }

        // Draw child orbs
        orbs.forEach(orb => {
            if (orb.visible) {
                drawOrb(orb);
            }
        });

        // Draw mother orb
        drawMotherOrb();
    }

    /**
     * Draw constellation threads between nearby orbs
     */
    function drawThreads() {
        ctx.lineWidth = 1;
        
        for (let i = 0; i < orbs.length; i++) {
            if (!orbs[i].visible || orbs[i].birthProgress < 1) continue;
            
            for (let j = i + 1; j < orbs.length; j++) {
                if (!orbs[j].visible || orbs[j].birthProgress < 1) continue;
                
                const dx = orbs[j].x - orbs[i].x;
                const dy = orbs[j].y - orbs[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < SETTINGS.threadMaxDist) {
                    const opacity = SETTINGS.threadOpacity * (1 - dist / SETTINGS.threadMaxDist);
                    const pulse = Math.sin(time * 0.5) * 0.3 + 0.7;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * pulse})`;
                    ctx.beginPath();
                    ctx.moveTo(orbs[i].x, orbs[i].y);
                    ctx.lineTo(orbs[j].x, orbs[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    /**
     * Draw a child orb with ethereal glow
     */
    function drawOrb(orb) {
        const { r, g, b } = orb.data.color;
        const isHovered = hoveredOrb === orb;
        const glowMultiplier = isHovered ? SETTINGS.hoverGlowMultiplier : 1;
        const birthScale = orb.birthProgress < 1 ? 
            Math.pow(orb.birthProgress, 0.5) : 1;
        
        // Collapse fade
        let alpha = 1;
        if (orb.collapseStart !== null) {
            const elapsed = performance.now() - orb.collapseStart;
            alpha = Math.max(0, 1 - elapsed / SETTINGS.collapseDuration);
        }

        const glowRadius = orb.glowRadius * birthScale * glowMultiplier;
        const coreRadius = orb.radius * birthScale;

        // Outer glow (very soft)
        const outerGlow = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, glowRadius * 1.5);
        outerGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.15 * alpha})`);
        outerGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${0.05 * alpha})`);
        outerGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, glowRadius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Middle glow
        const midGlow = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, glowRadius);
        midGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.4 * alpha})`);
        midGlow.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${0.2 * alpha})`);
        midGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = midGlow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreGlow = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, coreRadius);
        const brightR = Math.min(255, r + 60);
        const brightG = Math.min(255, g + 60);
        const brightB = Math.min(255, b + 60);
        coreGlow.addColorStop(0, `rgba(${brightR}, ${brightG}, ${brightB}, ${0.95 * alpha})`);
        coreGlow.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${0.8 * alpha})`);
        coreGlow.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${0.5 * alpha})`);
        ctx.fillStyle = coreGlow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight (small bright spot)
        const hlX = orb.x - coreRadius * 0.3;
        const hlY = orb.y - coreRadius * 0.3;
        const hlRadius = coreRadius * 0.4;
        const highlight = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlRadius);
        highlight.addColorStop(0, `rgba(255, 255, 255, ${0.5 * alpha})`);
        highlight.addColorStop(1, 'transparent');
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(hlX, hlY, hlRadius, 0, Math.PI * 2);
        ctx.fill();

        // Number (subtle)
        if (birthScale > 0.5) {
            ctx.font = `${11 * birthScale}px "Cormorant Garamond", Georgia, serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * alpha * birthScale})`;
            ctx.fillText(orb.data.id.toString(), orb.x, orb.y + 1);
        }
    }

    /**
     * Draw the mother orb
     */
    function drawMotherOrb() {
        if (!motherOrb) return;

        const { r, g, b } = MOTHER_COLOR;
        const breathScale = motherOrb.phase;
        const glowRadius = motherOrb.glowRadius * breathScale;
        const coreRadius = motherOrb.radius * breathScale;

        // Outer glow
        const outerGlow = ctx.createRadialGradient(motherOrb.x, motherOrb.y, 0, motherOrb.x, motherOrb.y, glowRadius * 1.5);
        outerGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.2)`);
        outerGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.08)`);
        outerGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(motherOrb.x, motherOrb.y, glowRadius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Middle glow
        const midGlow = ctx.createRadialGradient(motherOrb.x, motherOrb.y, 0, motherOrb.x, motherOrb.y, glowRadius);
        midGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`);
        midGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.25)`);
        midGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = midGlow;
        ctx.beginPath();
        ctx.arc(motherOrb.x, motherOrb.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreGlow = ctx.createRadialGradient(motherOrb.x, motherOrb.y, 0, motherOrb.x, motherOrb.y, coreRadius);
        coreGlow.addColorStop(0, `rgba(255, 230, 150, 0.95)`);
        coreGlow.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.9)`);
        coreGlow.addColorStop(1, `rgba(${r * 0.7}, ${g * 0.7}, ${b * 0.7}, 0.7)`);
        ctx.fillStyle = coreGlow;
        ctx.beginPath();
        ctx.arc(motherOrb.x, motherOrb.y, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        const hlX = motherOrb.x - coreRadius * 0.35;
        const hlY = motherOrb.y - coreRadius * 0.35;
        const hlRadius = coreRadius * 0.35;
        const highlight = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlRadius);
        highlight.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        highlight.addColorStop(1, 'transparent');
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(hlX, hlY, hlRadius, 0, Math.PI * 2);
        ctx.fill();

        // Diamond symbol
        ctx.font = `${14 * breathScale}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('◆', motherOrb.x, motherOrb.y + 1);
    }

    /**
     * Debounce helper
     */
    function debounce(fn, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

