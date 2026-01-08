(() => {
  const { saveJSON, loadJSON } = window.PromptLib || {};

  const STARFIELD_ID = "starfield";
  const TRAIL_KEY = "promptlib.trail.v1";

  const chambers = [
    {
      id: "decisions",
      name: "Decisions",
      tag: "CHAMBER I",
      path: "chambers/decisions/",
      tease: "Turn messy tradeoffs into a ranked answer.",
      chips: ["Decision Matrix", "Offline Tool", "Share Card"],
      points: [
        [170, 370],
        [240, 280],
        [330, 320],
        [290, 430],
      ],
      target: { xPct: 24, yPct: 58 },
    },
    {
      id: "content",
      name: "Content",
      tag: "CHAMBER II",
      path: "chambers/content/",
      tease: "Generate hooks that stop the scroll.",
      chips: ["Hook Engine", "Viral Meter", "Share Card"],
      points: [
        [520, 140],
        [590, 95],
        [670, 160],
        [610, 200],
      ],
      target: { xPct: 62, yPct: 24 },
    },
    {
      id: "reflection",
      name: "Reflection",
      tag: "CHAMBER III",
      path: "chambers/reflection/",
      tease: "Audit your life. Visualize the balance.",
      chips: ["Life Audit", "Radar Chart", "Export"],
      points: [
        [780, 360],
        [860, 320],
        [910, 400],
        [850, 430],
      ],
      target: { xPct: 82, yPct: 62 },
    },
    {
      id: "healing",
      name: "Healing",
      tag: "CHAMBER IV",
      path: "chambers/healing/",
      tease: "Gentle prompts for self-compassion and repair.",
      chips: ["Pure Suite", "Slow Reading", "Respectful Tone"],
      points: [
        [420, 420],
        [470, 470],
        [560, 450],
        [520, 380],
      ],
      target: { xPct: 52, yPct: 66 },
    },
    {
      id: "creation",
      name: "Creation",
      tag: "CHAMBER V",
      path: "chambers/creation/",
      tease: "Story seeds, scenes, and strange new worlds.",
      chips: ["Pure Suite", "Typewriter Reveal", "Export"],
      points: [
        [260, 110],
        [320, 90],
        [380, 140],
        [310, 170],
      ],
      target: { xPct: 30, yPct: 20 },
    },
  ];

  // ---------- Starfield ----------
  function startStarfield() {
    const canvas = document.getElementById(STARFIELD_ID);
    if (!canvas) return () => {};
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return () => {};

    let w = 0;
    let h = 0;
    const stars = [];
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;
      const count = Math.floor((w * h) / 14000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.4,
          a: Math.random() * 0.55 + 0.08,
          tw: Math.random() * 0.9 + 0.15,
        });
      }
    }

    let raf = 0;
    let t = 0;
    function frame() {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);

      // vignette
      const g = ctx.createRadialGradient(w * 0.5, h * 0.6, 0, w * 0.5, h * 0.6, Math.max(w, h));
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        const pulse = prefersReduced ? 1 : 0.6 + 0.4 * Math.sin(t * s.tw + s.x * 0.01);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.a * pulse})`;
        ctx.arc(s.x, s.y, s.r * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }

  // ---------- SVG Constellations ----------
  function renderConstellations() {
    const linesG = document.getElementById("mapLines");
    const starsG = document.getElementById("mapStars");
    if (!linesG || !starsG) return;

    linesG.innerHTML = "";
    starsG.innerHTML = "";

    const ns = "http://www.w3.org/2000/svg";

    const allPoints = chambers.flatMap((c) => c.points);
    for (const [x, y] of allPoints) {
      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("cx", String(x));
      circle.setAttribute("cy", String(y));
      circle.setAttribute("r", "4.2");
      circle.setAttribute("fill", "rgba(255,255,255,0.86)");
      circle.setAttribute("opacity", "0.9");
      starsG.appendChild(circle);

      const glow = document.createElementNS(ns, "circle");
      glow.setAttribute("cx", String(x));
      glow.setAttribute("cy", String(y));
      glow.setAttribute("r", "18");
      glow.setAttribute("fill", "rgba(120,170,255,0.10)");
      starsG.appendChild(glow);
    }

    for (const c of chambers) {
      for (let i = 0; i < c.points.length; i++) {
        const [x1, y1] = c.points[i];
        const [x2, y2] = c.points[(i + 1) % c.points.length];
        const line = document.createElementNS(ns, "line");
        line.setAttribute("x1", String(x1));
        line.setAttribute("y1", String(y1));
        line.setAttribute("x2", String(x2));
        line.setAttribute("y2", String(y2));
        line.setAttribute("stroke", "rgba(140,255,190,0.25)");
        line.setAttribute("stroke-width", "2");
        line.setAttribute("stroke-linecap", "round");
        line.setAttribute("opacity", "0.8");
        linesG.appendChild(line);
      }
    }
  }

  // ---------- Interactive overlay ----------
  function buildTargets() {
    const container = document.getElementById("mapTargets");
    if (!container) return;
    container.innerHTML = "";

    for (const c of chambers) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mapTarget";
      btn.dataset.id = c.id;
      btn.style.left = `${c.target.xPct}%`;
      btn.style.top = `${c.target.yPct}%`;
      btn.innerHTML = `
        <div class="mapTargetSmall">${c.tag}</div>
        <div class="mapTargetName">${c.name}</div>
        <div class="mapTargetTease">${c.tease}</div>
      `;
      btn.addEventListener("mouseenter", () => setActive(c.id));
      btn.addEventListener("focus", () => setActive(c.id));
      btn.addEventListener("click", () => enter(c.id));
      container.appendChild(btn);
    }
  }

  // ---------- Preview ----------
  const previewEl = document.getElementById("preview");
  const previewTagEl = document.getElementById("previewTag");
  const previewTitleEl = document.getElementById("previewTitle");
  const previewDescEl = document.getElementById("previewDesc");
  const previewMetaEl = document.getElementById("previewMeta");
  const enterBtn = document.getElementById("enterBtn");
  const closePreviewBtn = document.getElementById("closePreview");
  const trailBtn = document.getElementById("trailBtn");
  const trailEl = document.getElementById("trail");
  const trailListEl = document.getElementById("trailList");

  let activeId = null;

  function renderTrail() {
    if (!trailListEl) return;
    const trail = loadJSON ? loadJSON(TRAIL_KEY, []) : [];
    trailListEl.innerHTML = "";
    if (!trail.length) {
      const empty = document.createElement("div");
      empty.className = "muted";
      empty.textContent = "No trail yet. Enter a chamber to begin.";
      trailListEl.appendChild(empty);
      return;
    }
    for (const item of trail.slice(0, 6)) {
      const a = document.createElement("a");
      a.className = "trailItem";
      a.href = item.path;
      a.innerHTML = `<span>${item.name}</span><span class="muted">${item.when}</span>`;
      trailListEl.appendChild(a);
    }
  }

  function toggleTrail() {
    if (!trailEl) return;
    const hidden = trailEl.hasAttribute("hidden");
    if (hidden) {
      renderTrail();
      trailEl.removeAttribute("hidden");
      if (trailBtn) trailBtn.textContent = "Hide trail";
    } else {
      trailEl.setAttribute("hidden", "true");
      if (trailBtn) trailBtn.textContent = "Your trail";
    }
  }

  function setActive(id) {
    const c = chambers.find((x) => x.id === id);
    if (!c) return;
    activeId = id;
    if (previewTagEl) previewTagEl.textContent = c.tag;
    if (previewTitleEl) previewTitleEl.textContent = c.name;
    if (previewDescEl) previewDescEl.textContent = c.tease;
    if (previewMetaEl) {
      previewMetaEl.innerHTML = "";
      for (const chip of c.chips) {
        const span = document.createElement("span");
        span.className = "chip";
        span.textContent = chip;
        previewMetaEl.appendChild(span);
      }
    }
    if (enterBtn) {
      enterBtn.href = c.path;
      enterBtn.setAttribute("aria-disabled", "false");
    }
  }

  function closePreview() {
    activeId = null;
    if (previewTagEl) previewTagEl.textContent = "—";
    if (previewTitleEl) previewTitleEl.textContent = "Choose a constellation";
    if (previewDescEl)
      previewDescEl.textContent = "Hover or focus a constellation to preview. Click to enter a chamber.";
    if (previewMetaEl) previewMetaEl.innerHTML = "";
    if (enterBtn) {
      enterBtn.href = "#";
      enterBtn.setAttribute("aria-disabled", "true");
    }
    if (trailEl) trailEl.setAttribute("hidden", "true");
    if (trailBtn) trailBtn.textContent = "Your trail";
  }

  // ---------- Enter + Trail persistence ----------
  function addToTrail(chamberId) {
    if (!saveJSON || !loadJSON) return;
    const c = chambers.find((x) => x.id === chamberId);
    if (!c) return;
    const now = new Date();
    const when = now.toLocaleString(undefined, { month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
    const trail = loadJSON(TRAIL_KEY, []);
    const next = [{ id: c.id, name: c.name, path: c.path, when }, ...trail.filter((t) => t.id !== c.id)];
    saveJSON(TRAIL_KEY, next.slice(0, 12));
  }

  function enter(id) {
    addToTrail(id);
    const c = chambers.find((x) => x.id === id);
    if (!c) return;
    window.location.href = c.path;
  }

  // ---------- Discover ----------
  const discoverBtn = document.getElementById("discoverBtn");
  function discover() {
    const idx = Math.floor(Math.random() * chambers.length);
    const c = chambers[idx];
    setActive(c.id);
    const targetBtn = document.querySelector(`.mapTarget[data-id="${c.id}"]`);
    if (targetBtn) targetBtn.focus();
  }

  // ---------- Optional sound ----------
  const soundBtn = document.getElementById("soundBtn");
  let audioCtx = null;
  let soundOn = false;

  function beep(freq = 330, dur = 0.045) {
    if (!soundOn) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.value = 0.04;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + dur);
    } catch {
      // ignore
    }
  }

  function toggleSound() {
    soundOn = !soundOn;
    if (soundBtn) {
      soundBtn.textContent = soundOn ? "Sound: On" : "Sound: Off";
      soundBtn.setAttribute("aria-pressed", soundOn ? "true" : "false");
    }
    if (soundOn) beep(523, 0.06);
  }

  // ---------- Events ----------
  function bindEvents() {
    if (closePreviewBtn) closePreviewBtn.addEventListener("click", closePreview);
    if (trailBtn) trailBtn.addEventListener("click", toggleTrail);
    if (discoverBtn) discoverBtn.addEventListener("click", discover);
    if (soundBtn) soundBtn.addEventListener("click", toggleSound);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePreview();
    });

    document.addEventListener("click", (e) => {
      // click-outside closes preview trail only
      if (!trailEl || trailEl.hasAttribute("hidden")) return;
      if (!previewEl) return;
      if (!previewEl.contains(e.target)) {
        trailEl.setAttribute("hidden", "true");
        if (trailBtn) trailBtn.textContent = "Your trail";
      }
    });

    document.addEventListener("pointerover", (e) => {
      const btn = e.target?.closest?.(".mapTarget");
      if (!btn) return;
      const id = btn.dataset.id;
      if (!id) return;
      beep(220 + Math.random() * 120, 0.03);
    });
  }

  // ---------- Init ----------
  startStarfield();
  renderConstellations();
  buildTargets();
  bindEvents();
  closePreview();
})();


