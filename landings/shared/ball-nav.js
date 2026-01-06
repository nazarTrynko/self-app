/**
 * Ball Navigation
 * Organic floating navigation to the 10 Masterpieces
 * 
 * A mother ball in the corner releases child balls that float chaotically
 * Each child ball links to a masterpiece (11-20)
 */

(function() {
    'use strict';

    // Masterpieces data
    const MASTERPIECES = [
        { id: 11, name: 'The Void', path: 'masters/11/' },
        { id: 12, name: 'The Inversion', path: 'masters/12/' },
        { id: 13, name: 'The Dissolution', path: 'masters/13/' },
        { id: 14, name: 'The Paradox', path: 'masters/14/' },
        { id: 15, name: 'The Alchemy', path: 'masters/15/' },
        { id: 16, name: 'The Memento', path: 'masters/16/' },
        { id: 17, name: 'The Lineage', path: 'masters/17/' },
        { id: 18, name: 'The Adversary', path: 'masters/18/' },
        { id: 19, name: 'The Emergence', path: 'masters/19/' },
        { id: 20, name: 'The Threshold', path: 'masters/20/' }
    ];

    // Physics constants
    const PHYSICS = {
        friction: 0.98,           // Velocity damping
        brownianForce: 0.15,      // Random force strength
        brownianInterval: 60,     // Frames between random forces
        boundaryDamping: 0.6,     // Bounce energy loss
        maxVelocity: 2.5,         // Maximum speed
        spawnVelocity: 4,         // Initial burst velocity
        ballSize: 48,             // Ball diameter
        motherSize: 56,           // Mother ball diameter
        boundaryPadding: 20,      // Padding from edges
    };

    // State
    let container = null;
    let motherBall = null;
    let balls = [];
    let isExpanded = false;
    let animationId = null;
    let frameCount = 0;
    let bounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };

    /**
     * Initialize the ball navigation
     */
    function init() {
        createContainer();
        createMotherBall();
        calculateBounds();
        
        // Recalculate bounds on resize
        window.addEventListener('resize', debounce(calculateBounds, 200));
        
        // Handle escape key to collapse
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isExpanded) {
                collapse();
            }
        });
    }

    /**
     * Create the main container
     */
    function createContainer() {
        container = document.createElement('div');
        container.className = 'ball-nav';
        container.setAttribute('aria-label', 'Masterpieces navigation');
        document.body.appendChild(container);
    }

    /**
     * Create the mother ball
     */
    function createMotherBall() {
        motherBall = document.createElement('button');
        motherBall.className = 'ball-nav-mother';
        motherBall.setAttribute('aria-label', 'Open masterpieces navigation');
        motherBall.setAttribute('title', 'Explore 10 Masterpieces');
        
        motherBall.addEventListener('click', toggleExpand);
        motherBall.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExpand();
            }
        });
        
        container.appendChild(motherBall);
    }

    /**
     * Calculate the boundaries for ball movement
     */
    function calculateBounds() {
        const rect = container.getBoundingClientRect();
        const padding = PHYSICS.boundaryPadding;
        const ballRadius = PHYSICS.ballSize / 2;
        
        // Balls should float in the container area, avoiding the mother ball
        bounds = {
            minX: padding + ballRadius,
            minY: padding + ballRadius,
            maxX: rect.width - padding - ballRadius,
            maxY: rect.height - PHYSICS.motherSize - 40 - ballRadius // Leave room for mother
        };
        
        // Ensure minimum bounds
        if (bounds.maxX < bounds.minX + 100) {
            bounds.maxX = bounds.minX + 200;
        }
        if (bounds.maxY < bounds.minY + 100) {
            bounds.maxY = bounds.minY + 200;
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
     * Expand - spawn all child balls
     */
    function expand() {
        if (isExpanded) return;
        
        isExpanded = true;
        container.classList.add('expanded');
        motherBall.setAttribute('aria-label', 'Close masterpieces navigation');
        
        // Recalculate bounds for expanded state
        setTimeout(calculateBounds, 50);
        
        // Get mother ball position (spawn point)
        const motherRect = motherBall.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const spawnX = motherRect.left - containerRect.left + PHYSICS.motherSize / 2;
        const spawnY = motherRect.top - containerRect.top + PHYSICS.motherSize / 2;
        
        // Spawn balls with staggered delays
        MASTERPIECES.forEach((mp, index) => {
            setTimeout(() => {
                spawnBall(mp, spawnX, spawnY, index);
            }, index * 80);
        });
        
        // Start animation loop
        startAnimation();
    }

    /**
     * Collapse - recall all balls
     */
    function collapse() {
        if (!isExpanded) return;
        
        isExpanded = false;
        motherBall.setAttribute('aria-label', 'Open masterpieces navigation');
        
        // Animate balls back to mother
        balls.forEach((ball, index) => {
            setTimeout(() => {
                ball.element.classList.remove('spawned');
                ball.element.classList.add('collapsing');
            }, index * 30);
        });
        
        // Clean up after animation
        setTimeout(() => {
            balls.forEach(ball => {
                ball.element.remove();
            });
            balls = [];
            container.classList.remove('expanded');
            stopAnimation();
        }, 400);
    }

    /**
     * Spawn a child ball
     */
    function spawnBall(masterpiece, spawnX, spawnY, index) {
        const ball = document.createElement('a');
        ball.className = 'ball-nav-child';
        ball.href = masterpiece.path;
        ball.setAttribute('data-id', masterpiece.id);
        ball.setAttribute('data-number', masterpiece.id);
        ball.setAttribute('aria-label', masterpiece.name);
        
        // Add label
        const label = document.createElement('span');
        label.className = 'ball-nav-label';
        label.textContent = masterpiece.name;
        ball.appendChild(label);
        
        // Calculate initial velocity (burst outward from mother)
        const angle = (index / MASTERPIECES.length) * Math.PI * 2 - Math.PI / 2;
        const randomAngle = angle + (Math.random() - 0.5) * 0.8;
        const velocity = PHYSICS.spawnVelocity * (0.8 + Math.random() * 0.4);
        
        // Ball state
        const ballState = {
            element: ball,
            x: spawnX,
            y: spawnY,
            vx: Math.cos(randomAngle) * velocity,
            vy: Math.sin(randomAngle) * velocity,
            brownianPhase: Math.random() * 1000
        };
        
        // Position and add to DOM
        updateBallPosition(ballState);
        container.appendChild(ball);
        
        // Trigger spawn animation
        requestAnimationFrame(() => {
            ball.classList.add('spawning');
            setTimeout(() => {
                ball.classList.remove('spawning');
                ball.classList.add('spawned');
            }, 500);
        });
        
        balls.push(ballState);
    }

    /**
     * Start the animation loop
     */
    function startAnimation() {
        if (animationId) return;
        
        function animate() {
            frameCount++;
            updatePhysics();
            animationId = requestAnimationFrame(animate);
        }
        
        animationId = requestAnimationFrame(animate);
    }

    /**
     * Stop the animation loop
     */
    function stopAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    /**
     * Update physics for all balls
     */
    function updatePhysics() {
        balls.forEach(ball => {
            // Apply brownian motion (random forces)
            if (frameCount % PHYSICS.brownianInterval === 0 || Math.random() < 0.02) {
                const forceAngle = Math.random() * Math.PI * 2;
                ball.vx += Math.cos(forceAngle) * PHYSICS.brownianForce;
                ball.vy += Math.sin(forceAngle) * PHYSICS.brownianForce;
            }
            
            // Apply friction
            ball.vx *= PHYSICS.friction;
            ball.vy *= PHYSICS.friction;
            
            // Clamp velocity
            const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
            if (speed > PHYSICS.maxVelocity) {
                ball.vx = (ball.vx / speed) * PHYSICS.maxVelocity;
                ball.vy = (ball.vy / speed) * PHYSICS.maxVelocity;
            }
            
            // Update position
            ball.x += ball.vx;
            ball.y += ball.vy;
            
            // Boundary collision
            if (ball.x < bounds.minX) {
                ball.x = bounds.minX;
                ball.vx = Math.abs(ball.vx) * PHYSICS.boundaryDamping;
            }
            if (ball.x > bounds.maxX) {
                ball.x = bounds.maxX;
                ball.vx = -Math.abs(ball.vx) * PHYSICS.boundaryDamping;
            }
            if (ball.y < bounds.minY) {
                ball.y = bounds.minY;
                ball.vy = Math.abs(ball.vy) * PHYSICS.boundaryDamping;
            }
            if (ball.y > bounds.maxY) {
                ball.y = bounds.maxY;
                ball.vy = -Math.abs(ball.vy) * PHYSICS.boundaryDamping;
            }
            
            // Update DOM position
            updateBallPosition(ball);
        });
        
        // Ball-to-ball collision (soft repulsion)
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                handleBallCollision(balls[i], balls[j]);
            }
        }
    }

    /**
     * Handle soft collision between two balls
     */
    function handleBallCollision(ball1, ball2) {
        const dx = ball2.x - ball1.x;
        const dy = ball2.y - ball1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = PHYSICS.ballSize * 1.1;
        
        if (dist < minDist && dist > 0) {
            // Normalize
            const nx = dx / dist;
            const ny = dy / dist;
            
            // Overlap amount
            const overlap = minDist - dist;
            
            // Push apart
            const pushForce = overlap * 0.3;
            ball1.vx -= nx * pushForce;
            ball1.vy -= ny * pushForce;
            ball2.vx += nx * pushForce;
            ball2.vy += ny * pushForce;
        }
    }

    /**
     * Update ball DOM position
     */
    function updateBallPosition(ball) {
        ball.element.style.transform = `translate(${ball.x - PHYSICS.ballSize / 2}px, ${ball.y - PHYSICS.ballSize / 2}px)`;
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

