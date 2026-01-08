(() => {
  const { copyText, saveJSON, loadJSON, clamp, downloadBlob, canvasToBlob, showToast } =
    window.PromptLib || {};

  const KEY = "promptlib.reflection.v1";

  const els = {
    title: document.getElementById("title"),
    truth: document.getElementById("truth"),
    notes: document.getElementById("notes"),
    auditGrid: document.getElementById("auditGrid"),
    radar: document.getElementById("radar"),
    exportBtn: document.getElementById("exportBtn"),
    copyBtn: document.getElementById("copyBtn"),
    downloadChartBtn: document.getElementById("downloadChartBtn"),
    downloadPngBtn: document.getElementById("downloadPngBtn"),
    resetBtn: document.getElementById("resetBtn"),
    promptList: document.getElementById("promptList"),
    copyAllPromptsBtn: document.getElementById("copyAllPromptsBtn"),
  };

  const domains = [
    { id: "health", name: "Health", hint: "Body energy, sleep, strength" },
    { id: "work", name: "Work", hint: "Momentum, clarity, craft" },
    { id: "money", name: "Money", hint: "Stability, runway, leverage" },
    { id: "relationships", name: "Relationships", hint: "Depth, honesty, connection" },
    { id: "mind", name: "Mind", hint: "Focus, learning, calm" },
    { id: "joy", name: "Joy", hint: "Play, awe, aliveness" },
  ];

  const defaultState = {
    title: "",
    truth: "",
    notes: "",
    scores: Object.fromEntries(domains.map((d) => [d.id, 6])),
  };

  let state = loadJSON ? loadJSON(KEY, defaultState) : defaultState;
  state = { ...defaultState, ...state, scores: { ...defaultState.scores, ...(state.scores || {}) } };

  function persist() {
    saveJSON?.(KEY, state);
  }

  function mount() {
    if (els.title) els.title.value = state.title || "";
    if (els.truth) els.truth.value = state.truth || "";
    if (els.notes) els.notes.value = state.notes || "";
  }

  function buildAudit() {
    if (!els.auditGrid) return;
    els.auditGrid.innerHTML = "";
    for (const d of domains) {
      const score = clamp ? clamp(Number(state.scores[d.id] ?? 6), 0, 10) : Number(state.scores[d.id] ?? 6);
      const card = document.createElement("div");
      card.className = "domain";
      card.innerHTML = `
        <div class="domainTop">
          <div class="domainName">${escapeHtml(d.name)}</div>
          <div class="domainScore"><span data-score="${d.id}">${score}</span>/10</div>
        </div>
        <input class="slider" type="range" min="0" max="10" step="1" value="${score}" data-slider="${d.id}" />
        <div class="domainHint">${escapeHtml(d.hint)}</div>
      `;
      const slider = card.querySelector(`[data-slider="${d.id}"]`);
      const scoreEl = card.querySelector(`[data-score="${d.id}"]`);
      slider.addEventListener("input", () => {
        const v = clamp ? clamp(Number(slider.value), 0, 10) : Number(slider.value);
        state.scores[d.id] = v;
        scoreEl.textContent = String(v);
        persist();
        drawRadar();
      });
      els.auditGrid.appendChild(card);
    }
  }

  function drawRadar() {
    const canvas = els.radar;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // scale for DPR
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cssW = canvas.clientWidth || 560;
    const cssH = Math.round(cssW * (420 / 560));
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const w = cssW;
    const h = cssH;
    ctx.clearRect(0, 0, w, h);

    // background
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "rgba(0,0,0,0.18)");
    bg.addColorStop(1, "rgba(0,0,0,0.35)");
    ctx.fillStyle = bg;
    roundRect(ctx, 0, 0, w, h, 16);
    ctx.fill();

    const cx = w * 0.5;
    const cy = h * 0.53;
    const radius = Math.min(w, h) * 0.33;

    // grid rings
    ctx.strokeStyle = "rgba(255,255,255,0.10)";
    ctx.lineWidth = 1;
    for (let r = 1; r <= 5; r++) {
      ctx.beginPath();
      ctx.arc(cx, cy, (radius * r) / 5, 0, Math.PI * 2);
      ctx.stroke();
    }

    // spokes + labels
    const angleStep = (Math.PI * 2) / domains.length;
    ctx.font = "600 13px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.72)";

    for (let i = 0; i < domains.length; i++) {
      const a = -Math.PI / 2 + i * angleStep;
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.stroke();

      const lx = cx + Math.cos(a) * (radius + 18);
      const ly = cy + Math.sin(a) * (radius + 18);
      const name = domains[i].name;
      const tw = ctx.measureText(name).width;
      ctx.fillText(name, lx - tw / 2, ly + 5);
    }

    // data polygon
    const points = [];
    for (let i = 0; i < domains.length; i++) {
      const a = -Math.PI / 2 + i * angleStep;
      const v = clamp ? clamp(Number(state.scores[domains[i].id] ?? 0), 0, 10) : Number(state.scores[domains[i].id] ?? 0);
      const rr = (radius * v) / 10;
      points.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
    }

    // fill
    const grad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
    grad.addColorStop(0, "rgba(212,168,44,0.28)");
    grad.addColorStop(1, "rgba(152,180,166,0.22)");
    ctx.fillStyle = grad;
    ctx.strokeStyle = "rgba(255,255,255,0.40)";
    ctx.lineWidth = 2;

    ctx.beginPath();
    points.forEach(([x, y], idx) => (idx === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // points
    for (const [x, y] of points) {
      ctx.fillStyle = "rgba(255,255,255,0.86)";
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // title
    const title = (state.title || "Life Audit").trim();
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.font = "700 18px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText(title, 16, 28);
  }

  function exportText() {
    const lines = [];
    lines.push(`LIFE AUDIT: ${state.title || "—"}`);
    if (state.truth) lines.push(`TRUTH: ${state.truth}`);
    lines.push("");
    lines.push("SCORES:");
    for (const d of domains) lines.push(`- ${d.name}: ${state.scores[d.id]}/10`);
    lines.push("");
    if (state.notes) {
      lines.push("NOTES:");
      lines.push(state.notes);
      lines.push("");
    }
    lines.push("Generated by The Prompt Library — Reflection Chamber");
    return lines.join("\n");
  }

  async function downloadChart() {
    const canvas = els.radar;
    if (!canvas) return;
    const blob = await canvasToBlob?.(canvas);
    if (!blob) return showToast?.("Export failed");
    downloadBlob?.(`life-audit-chart.png`, blob);
    showToast?.("Downloaded");
  }

  async function downloadPng() {
    // build a share card canvas with chart snapshot + top line
    const radar = els.radar;
    if (!radar) return;
    const card = document.createElement("canvas");
    const w = 1200;
    const h = 630;
    card.width = w;
    card.height = h;
    const ctx = card.getContext("2d");
    if (!ctx) return;

    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "#0b0a08");
    bg.addColorStop(0.55, "#14110a");
    bg.addColorStop(1, "#0b1110");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    glow(ctx, 240, 180, 260, "rgba(212,168,44,0.18)");
    glow(ctx, 940, 420, 320, "rgba(152,180,166,0.12)");

    ctx.fillStyle = "rgba(255,255,255,0.90)";
    ctx.font = "700 46px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("LIFE AUDIT", 70, 92);

    ctx.fillStyle = "rgba(255,255,255,0.68)";
    ctx.font = "600 22px system-ui, -apple-system, Segoe UI, sans-serif";
    wrapText(ctx, state.truth || "A map of balance — where you’re full, where you’re empty.", 70, 130, 980, 30, 2);

    // draw chart
    const chartW = 520;
    const chartH = 390;
    ctx.drawImage(radar, 70, 190, chartW, chartH);

    // list scores
    ctx.fillStyle = "rgba(255,255,255,0.80)";
    ctx.font = "650 22px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("SCORES", 650, 230);
    ctx.fillStyle = "rgba(255,255,255,0.70)";
    ctx.font = "560 22px system-ui, -apple-system, Segoe UI, sans-serif";
    let y = 270;
    const sorted = [...domains].sort((a, b) => (state.scores[b.id] ?? 0) - (state.scores[a.id] ?? 0));
    for (const d of sorted) {
      const v = state.scores[d.id] ?? 0;
      ctx.fillText(`${d.name}: ${v}/10`, 650, y);
      y += 34;
    }

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "500 18px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("The Prompt Library · Reflection Chamber", 70, 590);

    const blob = await canvasToBlob?.(card);
    if (!blob) return showToast?.("Export failed");
    downloadBlob?.(`life-audit.png`, blob);
    showToast?.("Downloaded");
  }

  function mountPrompts() {
    if (!els.promptList) return;
    const prompts = [
      {
        name: "The Pattern",
        excavates: "The repeating loop behind your scores",
        text:
          "You have my life audit scores.\n\nIdentify the ONE pattern that explains most of them.\n- What do I keep doing?\n- What does it cost?\n- What does it protect?\n\nThen give me 3 interventions that would change the pattern this month.",
      },
      {
        name: "The Leak",
        excavates: "Where energy is disappearing",
        text:
          "Based on my lowest-scoring domains: name the energy leak.\n\nGive me:\n- The leak in one sentence\n- 5 signs it’s happening\n- 3 boundaries to stop it\n- The fear that makes me avoid those boundaries",
      },
      {
        name: "The Ladder",
        excavates: "A one-month plan that raises the floor",
        text:
          "Create a 30-day plan to raise my lowest domain by 2 points.\n\nConstraints:\n- 15 minutes/day max\n- measurable actions\n- weekly checkpoint questions\n\nReturn as a day-by-day ladder (Week 1..4).",
      },
      {
        name: "The Honest Review (Capstone)",
        excavates: "A narrative you can share with yourself",
        text:
          "Write a 250-word annual review summary.\n\nInclude:\n- 1 win I undervalue\n- 1 cost I’ve been denying\n- 1 habit I’m ready to quit\n- 1 commitment for the next 90 days\n\nTone: warm, honest, unsentimental.",
      },
    ];

    els.promptList.innerHTML = "";
    for (const p of prompts) {
      const card = document.createElement("div");
      card.className = "promptCard";
      card.innerHTML = `
        <div class="promptTop">
          <div class="promptName">${escapeHtml(p.name)}</div>
          <button class="tinyBtn" type="button">Copy</button>
        </div>
        <div class="promptBody">${escapeHtml(p.text)}</div>
        <div class="promptMeta">Excavates: ${escapeHtml(p.excavates)}</div>
      `;
      card.querySelector("button").addEventListener("click", () => copyText?.(p.text));
      els.promptList.appendChild(card);
    }
    els.copyAllPromptsBtn?.addEventListener("click", () => {
      const all = prompts
        .map((p, i) => `PROMPT ${i + 1}: ${p.name}\nExcavates: ${p.excavates}\n\n${p.text}`)
        .join("\n\n---\n\n");
      copyText?.(all);
    });
  }

  function reset() {
    state = JSON.parse(JSON.stringify(defaultState));
    persist();
    mount();
    buildAudit();
    drawRadar();
    showToast?.("Reset");
  }

  // helpers
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }
  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = String(text ?? "").split(/\s+/);
    let line = "";
    let lines = 0;
    for (let i = 0; i < words.length; i++) {
      const test = line ? `${line} ${words[i]}` : words[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, y + lines * lineHeight);
        lines++;
        line = words[i];
        if (maxLines && lines >= maxLines) return;
      } else {
        line = test;
      }
    }
    if (line && (!maxLines || lines < maxLines)) ctx.fillText(line, x, y + lines * lineHeight);
  }
  function glow(ctx, x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // bind inputs
  mount();
  buildAudit();
  mountPrompts();
  drawRadar();
  window.addEventListener("resize", () => drawRadar());

  els.title?.addEventListener("input", () => {
    state.title = els.title.value;
    persist();
    drawRadar();
  });
  els.truth?.addEventListener("input", () => {
    state.truth = els.truth.value;
    persist();
  });
  els.notes?.addEventListener("input", () => {
    state.notes = els.notes.value;
    persist();
  });

  els.exportBtn?.addEventListener("click", () => {
    const txt = exportText();
    copyText?.(txt);
    showToast?.("Export copied");
  });
  els.copyBtn?.addEventListener("click", () => copyText?.(exportText()));
  els.downloadChartBtn?.addEventListener("click", downloadChart);
  els.downloadPngBtn?.addEventListener("click", downloadPng);
  els.resetBtn?.addEventListener("click", reset);
})();


