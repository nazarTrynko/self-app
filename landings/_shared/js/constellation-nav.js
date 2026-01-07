/**
 * Constellation Navigation
 * Physics-based navigation with unique designs for each orb
 *
 * Uses Matter.js for smooth, realistic physics
 * Each orb has a completely unique visual design
 */

(function () {
  "use strict";

  // Masterpieces with unique design specifications
  const MASTERPIECES = [
    {
      id: 11,
      name: "The Void",
      path: "showcases/masterpieces/11/",
      color: { r: 26, g: 26, b: 46 },
      design: "void", // Dark hole with particles
    },
    {
      id: 12,
      name: "The Inversion",
      path: "showcases/masterpieces/12/",
      color: { r: 192, g: 192, b: 192 },
      design: "crystal", // Geometric crystal shape
    },
    {
      id: 13,
      name: "The Dissolution",
      path: "showcases/masterpieces/13/",
      color: { r: 139, g: 115, b: 85 },
      design: "liquid", // Flowing liquid effect
    },
    {
      id: 14,
      name: "The Paradox",
      path: "showcases/masterpieces/14/",
      color: { r: 107, g: 91, b: 149 },
      design: "mobius", // Twisted ribbon shape
    },
    {
      id: 15,
      name: "The Alchemy",
      path: "showcases/masterpieces/15/",
      color: { r: 201, g: 162, b: 39 },
      design: "alchemy", // Golden spiral with symbols
    },
    {
      id: 16,
      name: "The Memento",
      path: "showcases/masterpieces/16/",
      color: { r: 166, g: 124, b: 82 },
      design: "fractal", // Fractal tree pattern
    },
    {
      id: 17,
      name: "The Lineage",
      path: "showcases/masterpieces/17/",
      color: { r: 139, g: 105, b: 20 },
      design: "nebula", // Swirling nebula clouds
    },
    {
      id: 18,
      name: "The Adversary",
      path: "showcases/masterpieces/18/",
      color: { r: 180, g: 40, b: 40 },
      design: "flame", // Flickering flame effect
    },
    {
      id: 19,
      name: "The Emergence",
      path: "showcases/masterpieces/19/",
      color: { r: 0, g: 168, b: 107 },
      design: "growth", // Growing organic pattern
    },
    {
      id: 20,
      name: "The Threshold",
      path: "showcases/masterpieces/20/",
      color: { r: 155, g: 89, b: 182 },
      design: "portal", // Portal with ripples
    },
  ];

  // Mother orb
  const MOTHER_COLOR = { r: 201, g: 162, b: 39 };

  // Settings
  const SETTINGS = {
    motherRadius: 24,
    childRadius: 20,
    autoCollapseTime: 20000,
    returnStartTime: 15000,
    gravityStrength: 0.0008,
    mouseRepelStrength: 0.0005,
    mouseRepelDistance: 150,
  };

  // Matter.js setup
  let Engine,
    Render,
    World,
    Bodies,
    Body,
    Constraint,
    Mouse,
    MouseConstraint,
    Events;
  let engine, render, world;
  let container, canvas, ctx;
  let motherButton, label;
  let motherBody,
    childBodies = [];
  let isExpanded = false;
  let expandedAt = 0;
  let autoCollapseTimer = null;
  let hoveredOrb = null;
  let mouseX = -1000,
    mouseY = -1000;
  let time = 0;

  /**
   * Initialize
   */
  function init() {
    // Get Matter.js from global
    Engine = Matter.Engine;
    Render = Matter.Render;
    World = Matter.World;
    Bodies = Matter.Bodies;
    Body = Matter.Body;
    Constraint = Matter.Constraint;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;
    Events = Matter.Events;

    createContainer();
    createCanvas();
    createMotherButton();
    createLabel();
    initPhysics();
    bindEvents();
    startAnimation();
  }

  /**
   * Create container
   */
  function createContainer() {
    container = document.createElement("div");
    container.className = "constellation-nav";
    container.setAttribute("role", "navigation");
    container.setAttribute("aria-label", "Masterpieces constellation");
    document.body.appendChild(container);
  }

  /**
   * Create canvas
   */
  function createCanvas() {
    canvas = document.createElement("canvas");
    canvas.className = "constellation-canvas";
    container.appendChild(canvas);
    ctx = canvas.getContext("2d");
    resizeCanvas();
  }

  /**
   * Create mother button
   */
  function createMotherButton() {
    motherButton = document.createElement("button");
    motherButton.className = "constellation-mother-area";
    motherButton.setAttribute("aria-label", "Open masterpieces constellation");
    motherButton.setAttribute("aria-expanded", "false");
    container.appendChild(motherButton);
  }

  /**
   * Create label
   */
  function createLabel() {
    label = document.createElement("div");
    label.className = "constellation-label";
    label.setAttribute("aria-hidden", "true");
    document.body.appendChild(label);
  }

  /**
   * Initialize Matter.js physics
   */
  function initPhysics() {
    const rect = container.getBoundingClientRect();

    // Create engine
    engine = Engine.create();
    engine.world.gravity.y = 0; // No gravity
    engine.world.gravity.x = 0;

    world = engine.world;

    // Create mother orb body (static)
    const centerX = rect.width - 80;
    const centerY = rect.height - 80;
    motherBody = Bodies.circle(centerX, centerY, SETTINGS.motherRadius, {
      isStatic: true,
      render: { visible: false },
    });
    World.add(world, motherBody);

    // Start engine
    Engine.run(engine);
  }

  /**
   * Resize canvas
   */
  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.scale(dpr, dpr);

    // Update physics bounds
    if (engine && world) {
      // Update mother body position
      if (motherBody) {
        Body.setPosition(motherBody, {
          x: rect.width - 80,
          y: rect.height - 80,
        });
      }
    }
  }

  /**
   * Bind events
   */
  function bindEvents() {
    motherButton.addEventListener("click", toggleExpand);
    motherButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpand();
      }
    });

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleCanvasClick);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isExpanded) {
        collapse();
      }
    });

    window.addEventListener(
      "resize",
      debounce(() => {
        resizeCanvas();
        if (isExpanded) {
          updatePhysicsBounds();
        }
      }, 200)
    );
  }

  /**
   * Handle mouse move
   */
  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Check hover
    hoveredOrb = null;
    for (let i = 0; i < childBodies.length; i++) {
      const body = childBodies[i];
      const dx = mouseX - body.position.x;
      const dy = mouseY - body.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < SETTINGS.childRadius + 10) {
        hoveredOrb = i;
        canvas.style.cursor = "pointer";
        break;
      }
    }

    if (!hoveredOrb && motherBody) {
      const dx = mouseX - motherBody.position.x;
      const dy = mouseY - motherBody.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < SETTINGS.motherRadius + 15) {
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }
    }

    // Update label
    if (hoveredOrb !== null) {
      const mp = MASTERPIECES[hoveredOrb];
      const body = childBodies[hoveredOrb];
      const rect = canvas.getBoundingClientRect();
      label.textContent = mp.name;
      label.setAttribute("data-number", mp.id);
      label.style.left = rect.left + body.position.x + "px";
      label.style.top =
        rect.top + body.position.y - SETTINGS.childRadius - 30 + "px";
      label.classList.add("visible");
    } else {
      label.classList.remove("visible");
    }

    // Apply mouse repulsion
    if (isExpanded) {
      applyMouseRepulsion();
    }
  }

  /**
   * Handle mouse leave
   */
  function handleMouseLeave() {
    mouseX = -1000;
    mouseY = -1000;
    hoveredOrb = null;
    canvas.style.cursor = "default";
    label.classList.remove("visible");
  }

  /**
   * Handle canvas click
   */
  function handleCanvasClick(e) {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check child orbs
    for (let i = 0; i < childBodies.length; i++) {
      const body = childBodies[i];
      const dx = clickX - body.position.x;
      const dy = clickY - body.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < SETTINGS.childRadius + 10) {
        window.location.href = MASTERPIECES[i].path;
        return;
      }
    }

    // Check mother orb
    if (motherBody) {
      const dx = clickX - motherBody.position.x;
      const dy = clickY - motherBody.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < SETTINGS.motherRadius + 15) {
        toggleExpand();
      }
    }
  }

  /**
   * Apply mouse repulsion
   */
  function applyMouseRepulsion() {
    if (mouseX < 0 || mouseY < 0) return;

    childBodies.forEach((body) => {
      const dx = body.position.x - mouseX;
      const dy = body.position.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < SETTINGS.mouseRepelDistance && dist > 0) {
        const force =
          (SETTINGS.mouseRepelDistance - dist) / SETTINGS.mouseRepelDistance;
        const angle = Math.atan2(dy, dx);
        const strength = SETTINGS.mouseRepelStrength * force;

        Body.applyForce(body, body.position, {
          x: Math.cos(angle) * strength,
          y: Math.sin(angle) * strength,
        });
      }
    });
  }

  /**
   * Toggle expand
   */
  function toggleExpand() {
    if (isExpanded) {
      collapse();
    } else {
      expand();
    }
  }

  /**
   * Expand
   */
  function expand() {
    if (isExpanded) return;
    isExpanded = true;
    container.classList.add("expanded");
    motherButton.setAttribute("aria-expanded", "true");
    motherButton.setAttribute("aria-label", "Close masterpieces constellation");
    expandedAt = performance.now();

    setTimeout(() => {
      resizeCanvas();
      birthConstellation();
    }, 100);
  }

  /**
   * Birth constellation
   */
  function birthConstellation() {
    const rect = container.getBoundingClientRect();
    const centerX = rect.width - 80;
    const centerY = rect.height - 80;

    // Clear existing
    childBodies.forEach((body) => World.remove(world, body));
    childBodies = [];

    // Create child bodies with unique properties
    MASTERPIECES.forEach((mp, index) => {
      const angle = (index / MASTERPIECES.length) * Math.PI * 2;
      const dist = 100 + Math.random() * 50;
      const x = centerX + Math.cos(angle) * dist;
      const y = centerY + Math.sin(angle) * dist;

      // Vary physics properties per orb
      const density = 0.001 + Math.random() * 0.001;
      const frictionAir = 0.01 + Math.random() * 0.02;
      const restitution = 0.3 + Math.random() * 0.3;

      const body = Bodies.circle(x, y, SETTINGS.childRadius, {
        density: density,
        frictionAir: frictionAir,
        restitution: restitution,
        render: { visible: false },
      });

      // Add initial velocity burst
      const burstAngle = angle + (Math.random() - 0.5) * 0.5;
      const burstSpeed = 3 + Math.random() * 2;
      Body.setVelocity(body, {
        x: Math.cos(burstAngle) * burstSpeed,
        y: Math.sin(burstAngle) * burstSpeed,
      });

      childBodies.push(body);
      World.add(world, body);
    });

    // Schedule auto-collapse
    if (autoCollapseTimer) clearTimeout(autoCollapseTimer);
    autoCollapseTimer = setTimeout(() => {
      if (isExpanded) collapse();
    }, SETTINGS.autoCollapseTime);
  }

  /**
   * Collapse
   */
  function collapse() {
    if (!isExpanded) return;
    isExpanded = false;
    motherButton.setAttribute("aria-expanded", "false");
    motherButton.setAttribute("aria-label", "Open masterpieces constellation");
    label.classList.remove("visible");

    if (autoCollapseTimer) {
      clearTimeout(autoCollapseTimer);
      autoCollapseTimer = null;
    }

    // Animate orbs back
    const startTime = performance.now();
    childBodies.forEach((body, index) => {
      setTimeout(() => {
        const targetX = motherBody.position.x;
        const targetY = motherBody.position.y;
        const dx = targetX - body.position.x;
        const dy = targetY - body.position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 5) {
          Body.setVelocity(body, {
            x: (dx / dist) * 8,
            y: (dy / dist) * 8,
          });
        }
      }, index * 30);
    });

    // Remove after animation
    setTimeout(() => {
      container.classList.remove("expanded");
      childBodies.forEach((body) => World.remove(world, body));
      childBodies = [];
      setTimeout(resizeCanvas, 100);
    }, 800);
  }

  /**
   * Update physics bounds
   */
  function updatePhysicsBounds() {
    const rect = container.getBoundingClientRect();
    const margin = 60;

    childBodies.forEach((body) => {
      let x = body.position.x;
      let y = body.position.y;
      let changed = false;

      if (x < margin) {
        x = margin;
        changed = true;
      } else if (x > rect.width - margin) {
        x = rect.width - margin;
        changed = true;
      }

      if (y < margin) {
        y = margin;
        changed = true;
      } else if (y > rect.height - 120) {
        y = rect.height - 120;
        changed = true;
      }

      if (changed) {
        Body.setPosition(body, { x, y });
        Body.setVelocity(body, {
          x: body.velocity.x * -0.6,
          y: body.velocity.y * -0.6,
        });
      }
    });
  }

  /**
   * Apply gravity to mother orb
   */
  function applyGravity() {
    if (!isExpanded) return;

    const timeSinceExpand = performance.now() - expandedAt;
    let gravityMultiplier = 1;

    if (timeSinceExpand > SETTINGS.returnStartTime) {
      const returnProgress =
        (timeSinceExpand - SETTINGS.returnStartTime) /
        (SETTINGS.autoCollapseTime - SETTINGS.returnStartTime);
      gravityMultiplier = 1 + returnProgress * 10;
    }

    childBodies.forEach((body) => {
      const dx = motherBody.position.x - body.position.x;
      const dy = motherBody.position.y - body.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 10) {
        const force =
          (SETTINGS.gravityStrength * gravityMultiplier) / (dist * dist);
        Body.applyForce(body, body.position, {
          x: (dx / dist) * force * body.mass,
          y: (dy / dist) * force * body.mass,
        });
      }
    });
  }

  /**
   * Start animation loop
   */
  function startAnimation() {
    function animate() {
      time = performance.now() * 0.001;

      if (isExpanded) {
        applyGravity();
        applyMouseRepulsion();
        updatePhysicsBounds();
      }

      draw();
      requestAnimationFrame(animate);
    }
    animate();
  }

  /**
   * Draw everything
   */
  function draw() {
    const rect = container.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (isExpanded) {
      // Draw threads
      drawThreads();

      // Draw child orbs
      childBodies.forEach((body, index) => {
        drawOrb(body, MASTERPIECES[index], index === hoveredOrb);
      });
    }

    // Draw mother orb
    drawMotherOrb();
  }

  /**
   * Draw threads
   */
  function drawThreads() {
    ctx.lineWidth = 1;

    for (let i = 0; i < childBodies.length; i++) {
      for (let j = i + 1; j < childBodies.length; j++) {
        const dx = childBodies[j].position.x - childBodies[i].position.x;
        const dy = childBodies[j].position.y - childBodies[i].position.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const opacity = 0.03 * (1 - dist / 200);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(childBodies[i].position.x, childBodies[i].position.y);
          ctx.lineTo(childBodies[j].position.x, childBodies[j].position.y);
          ctx.stroke();
        }
      }
    }
  }

  /**
   * Draw orb with unique design
   */
  function drawOrb(body, mp, isHovered) {
    const x = body.position.x;
    const y = body.position.y;
    const radius = SETTINGS.childRadius;
    const glowMultiplier = isHovered ? 1.8 : 1;

    // Each design is completely unique
    switch (mp.design) {
      case "void":
        drawVoidOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "crystal":
        drawCrystalOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "liquid":
        drawLiquidOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "mobius":
        drawMobiusOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "alchemy":
        drawAlchemyOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "fractal":
        drawFractalOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "nebula":
        drawNebulaOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "flame":
        drawFlameOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "growth":
        drawGrowthOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
      case "portal":
        drawPortalOrb(ctx, x, y, radius, mp.color, glowMultiplier, time);
        break;
    }

    // Draw number
    ctx.save();
    ctx.font = `12px "Cormorant Garamond", Georgia, serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.fillText(mp.id.toString(), x, y + 1);
    ctx.restore();
  }

  /**
   * Draw void orb - dark hole with particles
   */
  function drawVoidOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2 * glow;

    // Outer dark glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
    gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Dark core
    ctx.fillStyle = `rgb(${color.r * 0.3}, ${color.g * 0.3}, ${color.b * 0.3})`;
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.7, 0, Math.PI * 2);
    ctx.fill();

    // Particles
    for (let i = 0; i < 8; i++) {
      const angle = (t * 0.5 + (i * Math.PI) / 4) % (Math.PI * 2);
      const dist = radius * 0.5 + Math.sin(t * 2 + i) * radius * 0.2;
      const px = x + Math.cos(angle) * dist;
      const py = y + Math.sin(angle) * dist;
      const size = 2 + Math.sin(t * 3 + i) * 1;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(t + i) * 0.3})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /**
   * Draw crystal orb - geometric crystal
   */
  function drawCrystalOrb(ctx, x, y, radius, color, glow, t) {
    const sides = 6;
    const rotation = t * 0.3;

    // Glow
    const gradient = ctx.createRadialGradient(
      x,
      y,
      0,
      x,
      y,
      radius * 2.5 * glow
    );
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
    gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius * 2.5 * glow, 0, Math.PI * 2);
    ctx.fill();

    // Crystal shape
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const r = radius * (0.8 + Math.sin(t * 2 + i) * 0.2);
      const px = Math.cos(angle) * r;
      const py = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /**
   * Draw liquid orb - flowing liquid
   */
  function drawLiquidOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2 * glow;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Liquid surface with waves
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.clip();

    const liquidGradient = ctx.createLinearGradient(
      x,
      y - radius,
      x,
      y + radius
    );
    liquidGradient.addColorStop(
      0,
      `rgba(${color.r + 40}, ${color.g + 30}, ${color.b + 20}, 0.8)`
    );
    liquidGradient.addColorStop(
      0.5,
      `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`
    );
    liquidGradient.addColorStop(
      1,
      `rgba(${color.r - 20}, ${color.g - 20}, ${color.b - 20}, 0.8)`
    );
    ctx.fillStyle = liquidGradient;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);

    // Wave lines
    ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const waveY =
        y -
        radius * 0.5 +
        i * radius * 0.3 +
        Math.sin(t * 2 + i) * radius * 0.2;
      for (let px = x - radius; px <= x + radius; px += 2) {
        const waveX = px;
        const waveOffset =
          Math.sin(((px - x) / radius) * Math.PI * 2 + t * 3 + i) * 3;
        if (px === x - radius) ctx.moveTo(waveX, waveY + waveOffset);
        else ctx.lineTo(waveX, waveY + waveOffset);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  /**
   * Draw mobius orb - twisted ribbon
   */
  function drawMobiusOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2 * glow;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Twisted ribbon
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t * 0.5);
    ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`;
    ctx.lineWidth = 2;

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const twist = (i / 3) * Math.PI * 2;
      for (let a = 0; a < Math.PI * 2; a += 0.1) {
        const r = radius * (0.7 + Math.sin(a * 3 + twist + t) * 0.3);
        const px = Math.cos(a) * r;
        const py = Math.sin(a) * r * Math.cos(twist + t);
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  /**
   * Draw alchemy orb - golden spiral with symbols
   */
  function drawAlchemyOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2.5 * glow;

    // Golden glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`);
    gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Spiral
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t * 0.4);
    ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let a = 0; a < Math.PI * 4; a += 0.1) {
      const r = radius * 0.3 * (a / (Math.PI * 4));
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      if (a === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Alchemy symbol
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
    ctx.font = `${radius * 0.8}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⚛", 0, 0);
    ctx.restore();
  }

  /**
   * Draw fractal orb - fractal tree
   */
  function drawFractalOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2 * glow;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Fractal branches
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t * 0.3);
    ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`;
    ctx.lineWidth = 1.5;

    function drawBranch(len, angle, depth) {
      if (depth > 4) return;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      ctx.translate(0, -len);
      ctx.rotate(angle);
      drawBranch(len * 0.7, angle, depth + 1);
      ctx.rotate(-angle * 2);
      drawBranch(len * 0.7, angle, depth + 1);
      ctx.rotate(angle);
      ctx.translate(0, len);
    }

    drawBranch(radius * 0.6, Math.PI / 6, 0);
    ctx.restore();
  }

  /**
   * Draw nebula orb - swirling clouds
   */
  function drawNebulaOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2.5 * glow;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Swirling clouds
    ctx.save();
    ctx.translate(x, y);
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 + t * 0.3;
      const dist = radius * (0.3 + Math.sin(t + i) * 0.2);
      const cloudX = Math.cos(angle) * dist;
      const cloudY = Math.sin(angle) * dist;
      const cloudSize = radius * (0.3 + Math.sin(t * 2 + i) * 0.1);

      const cloudGradient = ctx.createRadialGradient(
        cloudX,
        cloudY,
        0,
        cloudX,
        cloudY,
        cloudSize
      );
      cloudGradient.addColorStop(
        0,
        `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`
      );
      cloudGradient.addColorStop(1, "transparent");
      ctx.fillStyle = cloudGradient;
      ctx.beginPath();
      ctx.arc(cloudX, cloudY, cloudSize, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  /**
   * Draw flame orb - flickering flame
   */
  function drawFlameOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2.5 * glow;

    // Flame glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`);
    gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Flickering flame shape
    ctx.save();
    ctx.translate(x, y - radius * 0.3);
    const flameGradient = ctx.createLinearGradient(0, -radius, 0, radius);
    flameGradient.addColorStop(
      0,
      `rgba(${color.r + 60}, ${color.g + 20}, ${color.b + 20}, 0.9)`
    );
    flameGradient.addColorStop(
      0.5,
      `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`
    );
    flameGradient.addColorStop(
      1,
      `rgba(${color.r - 40}, ${color.g - 20}, ${color.b - 20}, 0.5)`
    );
    ctx.fillStyle = flameGradient;

    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const px = (i / 20 - 0.5) * radius * 1.2;
      const py = -radius + (i / 20) * radius * 2;
      const flicker = Math.sin(t * 5 + i * 0.5) * radius * 0.15;
      if (i === 0) ctx.moveTo(px + flicker, py);
      else ctx.lineTo(px + flicker, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /**
   * Draw growth orb - growing organic pattern
   */
  function drawGrowthOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2 * glow;

    // Glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Growing branches
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`;
    ctx.lineWidth = 2;

    const growth = (Math.sin(t) + 1) * 0.5;
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const len = radius * (0.4 + growth * 0.4);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len);
      ctx.stroke();

      // Leaf at end
      const leafX = Math.cos(angle) * len;
      const leafY = Math.sin(angle) * len;
      ctx.beginPath();
      ctx.arc(leafX, leafY, radius * 0.15 * growth, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  /**
   * Draw portal orb - portal with ripples
   */
  function drawPortalOrb(ctx, x, y, radius, color, glow, t) {
    const glowRadius = radius * 2.5 * glow;

    // Portal glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`);
    gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Ripples
    for (let i = 0; i < 3; i++) {
      const rippleRadius = radius * (0.5 + ((t * 0.5 + i * 0.3) % 1) * 0.5);
      const alpha = 0.6 * (1 - (rippleRadius - radius * 0.5) / (radius * 0.5));
      ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, rippleRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Portal center
    const centerGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    centerGradient.addColorStop(
      0,
      `rgba(${color.r + 50}, ${color.g + 30}, ${color.b + 50}, 0.9)`
    );
    centerGradient.addColorStop(
      0.7,
      `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`
    );
    centerGradient.addColorStop(1, "transparent");
    ctx.fillStyle = centerGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Draw mother orb
   */
  function drawMotherOrb() {
    if (!motherBody) return;

    const x = motherBody.position.x;
    const y = motherBody.position.y;
    const { r, g, b } = MOTHER_COLOR;
    const breathScale = Math.sin(time * 0.8) * 0.15 + 1;
    const glowRadius = SETTINGS.motherRadius * 2.5 * breathScale;
    const coreRadius = SETTINGS.motherRadius * breathScale;

    // Outer glow
    const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius * 1.5);
    outerGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.2)`);
    outerGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.08)`);
    outerGlow.addColorStop(1, "transparent");
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Middle glow
    const midGlow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    midGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`);
    midGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.25)`);
    midGlow.addColorStop(1, "transparent");
    ctx.fillStyle = midGlow;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Core
    const coreGlow = ctx.createRadialGradient(x, y, 0, x, y, coreRadius);
    coreGlow.addColorStop(0, `rgba(255, 230, 150, 0.95)`);
    coreGlow.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.9)`);
    coreGlow.addColorStop(1, `rgba(${r * 0.7}, ${g * 0.7}, ${b * 0.7}, 0.7)`);
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    const hlX = x - coreRadius * 0.35;
    const hlY = y - coreRadius * 0.35;
    const hlRadius = coreRadius * 0.35;
    const highlight = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlRadius);
    highlight.addColorStop(0, "rgba(255, 255, 255, 0.7)");
    highlight.addColorStop(1, "transparent");
    ctx.fillStyle = highlight;
    ctx.beginPath();
    ctx.arc(hlX, hlY, hlRadius, 0, Math.PI * 2);
    ctx.fill();

    // Diamond symbol
    ctx.font = `${14 * breathScale}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillText("◆", x, y + 1);
  }

  /**
   * Debounce helper
   */
  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
