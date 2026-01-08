(() => {
  const {
    copyText,
    saveJSON,
    loadJSON,
    clamp,
    downloadBlob,
    canvasToBlob,
    showToast,
  } = window.PromptLib || {};

  const KEY = "promptlib.decisions.v1";

  const els = {
    title: document.getElementById("decisionTitle"),
    matrixWrap: document.getElementById("matrixWrap"),
    result: document.getElementById("result"),
    addOption: document.getElementById("addOptionBtn"),
    addCriterion: document.getElementById("addCriterionBtn"),
    compute: document.getElementById("computeBtn"),
    copyResult: document.getElementById("copyResultBtn"),
    downloadPng: document.getElementById("downloadPngBtn"),
    reset: document.getElementById("resetBtn"),
    promptList: document.getElementById("promptList"),
    copyAllPrompts: document.getElementById("copyAllPromptsBtn"),
  };

  const defaultState = {
    decisionTitle: "",
    options: ["Option A", "Option B", "Option C"],
    criteria: [
      { name: "Impact", weight: 3 },
      { name: "Time", weight: 2 },
      { name: "Risk", weight: 2 },
    ],
    // scores[optIndex][critIndex] = 0..10
    scores: [],
    lastResult: null,
  };

  function ensureScores(state) {
    const o = state.options.length;
    const c = state.criteria.length;
    if (!Array.isArray(state.scores)) state.scores = [];
    for (let i = 0; i < o; i++) {
      if (!Array.isArray(state.scores[i])) state.scores[i] = [];
      for (let j = 0; j < c; j++) {
        const v = state.scores[i][j];
        state.scores[i][j] = Number.isFinite(v) ? clamp(v, 0, 10) : 5;
      }
    }
    // trim extra
    state.scores = state.scores.slice(0, o).map((row) => row.slice(0, c));
  }

  let state = loadJSON ? loadJSON(KEY, defaultState) : defaultState;
  state = { ...defaultState, ...state };
  ensureScores(state);

  function persist() {
    if (!saveJSON) return;
    saveJSON(KEY, state);
  }

  function buildMatrix() {
    if (!els.matrixWrap) return;

    const table = document.createElement("table");
    table.className = "matrix";

    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    trh.innerHTML = `<th class="hdr">Options</th>`;
    for (let j = 0; j < state.criteria.length; j++) {
      const th = document.createElement("th");
      th.innerHTML = `
        <div class="hdr">${escapeHtml(state.criteria[j].name)}</div>
        <div style="display:flex; gap:8px; align-items:center; margin-top:6px;">
          <span class="muted" style="font-size:0.78rem;">weight</span>
          <input class="num" inputmode="numeric" type="number" min="0" max="10" step="1" data-w="${j}" value="${state.criteria[j].weight}">
          <button class="tinyBtn" type="button" data-del-crit="${j}">×</button>
        </div>
      `;
      trh.appendChild(th);
    }
    thead.appendChild(trh);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let i = 0; i < state.options.length; i++) {
      const tr = document.createElement("tr");
      const td0 = document.createElement("td");
      td0.innerHTML = `
        <div style="display:flex; gap:8px; align-items:center;">
          <input class="input" style="min-width: 220px;" data-opt="${i}" value="${escapeAttr(state.options[i])}">
          <button class="tinyBtn" type="button" data-del-opt="${i}">×</button>
        </div>
      `;
      tr.appendChild(td0);

      for (let j = 0; j < state.criteria.length; j++) {
        const td = document.createElement("td");
        td.innerHTML = `
          <input class="num" inputmode="numeric" type="number" min="0" max="10" step="1"
            data-score="${i}:${j}" value="${state.scores[i][j]}">
        `;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    els.matrixWrap.innerHTML = "";
    els.matrixWrap.appendChild(table);

    // bind inputs
    els.matrixWrap.querySelectorAll("input[data-opt]").forEach((inp) => {
      inp.addEventListener("input", () => {
        const idx = Number(inp.dataset.opt);
        state.options[idx] = inp.value.trim() || `Option ${idx + 1}`;
        persist();
      });
    });
    els.matrixWrap.querySelectorAll("input[data-w]").forEach((inp) => {
      inp.addEventListener("input", () => {
        const idx = Number(inp.dataset.w);
        const v = clamp(Number(inp.value || 0), 0, 10);
        state.criteria[idx].weight = v;
        inp.value = String(v);
        persist();
      });
    });
    els.matrixWrap.querySelectorAll("input[data-score]").forEach((inp) => {
      inp.addEventListener("input", () => {
        const [oi, cj] = inp.dataset.score.split(":").map(Number);
        const v = clamp(Number(inp.value || 0), 0, 10);
        state.scores[oi][cj] = v;
        inp.value = String(v);
        persist();
      });
    });
    els.matrixWrap.querySelectorAll("button[data-del-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.delOpt);
        if (state.options.length <= 2) return showToast?.("Need 2+ options");
        state.options.splice(idx, 1);
        state.scores.splice(idx, 1);
        ensureScores(state);
        persist();
        buildMatrix();
      });
    });
    els.matrixWrap.querySelectorAll("button[data-del-crit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.delCrit);
        if (state.criteria.length <= 2) return showToast?.("Need 2+ criteria");
        state.criteria.splice(idx, 1);
        for (const row of state.scores) row.splice(idx, 1);
        ensureScores(state);
        persist();
        buildMatrix();
      });
    });
  }

  function compute() {
    const weights = state.criteria.map((c) => clamp(Number(c.weight || 0), 0, 10));
    const weightSum = weights.reduce((a, b) => a + b, 0) || 1;
    const normalized = weights.map((w) => w / weightSum);

    const ranked = state.options.map((name, i) => {
      let score = 0;
      for (let j = 0; j < state.criteria.length; j++) {
        score += (state.scores[i][j] / 10) * normalized[j];
      }
      return { name, score: Math.round(score * 1000) / 1000 };
    });
    ranked.sort((a, b) => b.score - a.score);

    const result = {
      decisionTitle: state.decisionTitle || "Decision",
      ranked,
      criteria: state.criteria.map((c) => ({ ...c })),
      weights,
      at: Date.now(),
    };
    state.lastResult = result;
    persist();
    renderResult();
  }

  function renderResult() {
    if (!els.result) return;
    const r = state.lastResult;
    if (!r) {
      els.result.innerHTML = `<div class="muted">Compute to see ranked options.</div>`;
      return;
    }
    const top = r.ranked[0];
    const html = `
      <div class="muted" style="margin-top:12px;">Ranked result</div>
      <ul class="rankList">
        ${r.ranked
          .map(
            (x, idx) => `
          <li class="rankItem">
            <div>
              <span class="scorePip" style="background:${idx === 0 ? "var(--accent)" : "rgba(255,255,255,0.28)"}"></span>
              <span class="rankName">${escapeHtml(x.name)}</span>
            </div>
            <div class="rankScore">${(x.score * 100).toFixed(1)}%</div>
          </li>
        `
          )
          .join("")}
      </ul>
      <div class="muted" style="margin-top:10px;">
        Top pick: <span style="color:rgba(255,255,255,0.9)">${escapeHtml(top.name)}</span>
      </div>
    `;
    els.result.innerHTML = html;
  }

  function formatResultText() {
    const r = state.lastResult;
    if (!r) return "No result yet. Compute a ranking first.";
    const lines = [];
    lines.push(`DECISION: ${r.decisionTitle}`);
    lines.push("");
    lines.push("RANKING:");
    r.ranked.forEach((x, idx) => lines.push(`${idx + 1}. ${x.name} — ${(x.score * 100).toFixed(1)}%`));
    lines.push("");
    lines.push("CRITERIA (weights):");
    r.criteria.forEach((c) => lines.push(`- ${c.name}: ${c.weight}`));
    lines.push("");
    lines.push("Generated by The Prompt Library — Decisions Chamber");
    return lines.join("\n");
  }

  async function downloadPng() {
    const r = state.lastResult;
    if (!r) return showToast?.("Compute first");

    const canvas = document.createElement("canvas");
    const w = 1200;
    const h = 630;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // background
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "#070a10");
    bg.addColorStop(0.55, "#0d1020");
    bg.addColorStop(1, "#120a0a");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // glow
    ctx.fillStyle = "rgba(255,204,102,0.16)";
    ctx.beginPath();
    ctx.arc(220, 180, 220, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(114,245,199,0.10)";
    ctx.beginPath();
    ctx.arc(980, 460, 260, 0, Math.PI * 2);
    ctx.fill();

    // typography
    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.font = "600 44px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("DECISION RANKING", 70, 92);

    ctx.fillStyle = "rgba(255,255,255,0.70)";
    ctx.font = "500 24px system-ui, -apple-system, Segoe UI, sans-serif";
    wrapText(ctx, r.decisionTitle, 70, 132, 760, 30, 2);

    const startY = 210;
    const rowH = 76;
    for (let i = 0; i < Math.min(4, r.ranked.length); i++) {
      const item = r.ranked[i];
      const y = startY + i * rowH;
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, 70, y - 44, 1060, 58, 18);
      ctx.fill();

      ctx.fillStyle = i === 0 ? "rgba(255,204,102,0.95)" : "rgba(255,255,255,0.75)";
      ctx.font = "700 28px system-ui, -apple-system, Segoe UI, sans-serif";
      ctx.fillText(`#${i + 1}`, 92, y - 6);

      ctx.fillStyle = "rgba(255,255,255,0.90)";
      ctx.font = "650 28px system-ui, -apple-system, Segoe UI, sans-serif";
      ctx.fillText(truncate(item.name, 42), 170, y - 6);

      ctx.fillStyle = "rgba(255,255,255,0.72)";
      ctx.font = "600 24px system-ui, -apple-system, Segoe UI, sans-serif";
      ctx.fillText(`${(item.score * 100).toFixed(1)}%`, 1010, y - 6);
    }

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "500 18px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("The Prompt Library · Decisions Chamber", 70, 590);

    const blob = await canvasToBlob(canvas);
    if (!blob) return showToast?.("Export failed");
    downloadBlob(`decision-${safeFile(r.decisionTitle)}.png`, blob);
    showToast?.("Downloaded");
  }

  function mountPrompts() {
    if (!els.promptList) return;
    const prompts = [
      {
        name: "The Stakes",
        excavates: "What you’re actually deciding (and why it matters)",
        text:
          "I’m making a decision.\n\nDecision: [paste the decision title]\nOptions: [list options]\n\nFirst: rewrite this decision as a single sentence that includes the REAL stake (what I fear losing / what I want to protect).\n\nThen give me:\n- The hidden cost of each option\n- The hidden benefit of each option\n\nBe blunt. No comfort.",
      },
      {
        name: "The Future Postcard",
        excavates: "How each option feels when it becomes your life",
        text:
          "For each option, write a 150-word postcard from 6 months in the future.\n\nEach postcard must include:\n- A specific ordinary day\n- One surprising consequence\n- One regret or relief\n- A single sentence that stings (true but uncomfortable)\n\nFormat as:\nOPTION: ...\nPOSTCARD: ...",
      },
      {
        name: "The Adversary",
        excavates: "The strongest argument AGAINST your favorite option",
        text:
          "Assume my current favorite option is wrong.\n\nAttack it like a ruthless advisor who cares about outcomes, not feelings.\n- What am I rationalizing?\n- What evidence am I ignoring?\n- What is the most likely failure mode?\n\nThen give me a counter-plan to mitigate that failure mode if I choose it anyway.",
      },
      {
        name: "The Principle Test",
        excavates: "A choice you can live with even if it hurts",
        text:
          "I want to choose based on principles, not impulses.\n\nAsk me 7 yes/no questions that reveal which option matches my values.\nEach question must be hard to answer.\n\nAfter I answer, map me to the best-fit option and explain in 5 bullets.",
      },
      {
        name: "The Commitment Contract (Capstone)",
        excavates: "An action plan that makes the decision real",
        text:
          "Take the top-ranked option from my decision matrix.\n\nWrite a one-page commitment contract:\n- My decision (one line)\n- Why (three bullets)\n- What I will do in the next 72 hours (5 steps)\n- What I will stop doing (3 items)\n- The moment I’m most likely to quit (predict it)\n- The safeguard I’ll use when that moment hits\n\nTone: surgical. No fluff.",
      },
    ];

    els.promptList.innerHTML = "";
    for (const p of prompts) {
      const card = document.createElement("div");
      card.className = "promptCard";
      card.innerHTML = `
        <div class="promptTop">
          <div>
            <div class="promptName">${escapeHtml(p.name)}</div>
          </div>
          <button class="tinyBtn" type="button">Copy</button>
        </div>
        <div class="promptBody">${escapeHtml(p.text)}</div>
        <div class="promptMeta">Excavates: ${escapeHtml(p.excavates)}</div>
      `;
      const btn = card.querySelector("button");
      btn.addEventListener("click", () => copyText?.(p.text));
      els.promptList.appendChild(card);
    }

    if (els.copyAllPrompts) {
      els.copyAllPrompts.addEventListener("click", () => {
        const all = prompts
          .map((p, idx) => `PROMPT ${idx + 1}: ${p.name}\nExcavates: ${p.excavates}\n\n${p.text}`)
          .join("\n\n---\n\n");
        copyText?.(all);
      });
    }
  }

  function resetAll() {
    state = JSON.parse(JSON.stringify(defaultState));
    ensureScores(state);
    persist();
    if (els.title) els.title.value = "";
    buildMatrix();
    state.lastResult = null;
    persist();
    renderResult();
    showToast?.("Reset");
  }

  // ---------- helpers ----------
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
  function escapeAttr(s) {
    return String(s ?? "").replaceAll('"', "&quot;");
  }
  function safeFile(s) {
    return String(s || "decision")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }
  function truncate(s, n) {
    const str = String(s ?? "");
    if (str.length <= n) return str;
    return str.slice(0, n - 1) + "…";
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

  // ---------- bind ----------
  if (els.title) {
    els.title.value = state.decisionTitle || "";
    els.title.addEventListener("input", () => {
      state.decisionTitle = els.title.value;
      persist();
    });
  }

  if (els.addOption) {
    els.addOption.addEventListener("click", () => {
      state.options.push(`Option ${state.options.length + 1}`);
      ensureScores(state);
      persist();
      buildMatrix();
    });
  }
  if (els.addCriterion) {
    els.addCriterion.addEventListener("click", () => {
      state.criteria.push({ name: `Criterion ${state.criteria.length + 1}`, weight: 2 });
      ensureScores(state);
      persist();
      buildMatrix();
    });
  }
  if (els.compute) els.compute.addEventListener("click", compute);
  if (els.copyResult) els.copyResult.addEventListener("click", () => copyText?.(formatResultText()));
  if (els.downloadPng) els.downloadPng.addEventListener("click", downloadPng);
  if (els.reset) els.reset.addEventListener("click", resetAll);

  buildMatrix();
  renderResult();
  mountPrompts();
})();


