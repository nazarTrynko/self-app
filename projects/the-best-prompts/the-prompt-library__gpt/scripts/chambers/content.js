(() => {
  const { copyText, saveJSON, loadJSON, clamp, downloadBlob, canvasToBlob, showToast } =
    window.PromptLib || {};

  const KEY = "promptlib.content.v1";

  const els = {
    topic: document.getElementById("topic"),
    audience: document.getElementById("audience"),
    offer: document.getElementById("offer"),
    tone: document.getElementById("tone"),
    generate: document.getElementById("generateBtn"),
    reset: document.getElementById("resetBtn"),
    hooks: document.getElementById("hooks"),
    meterValue: document.getElementById("meterValue"),
    meterFill: document.getElementById("meterFill"),
    meterHint: document.getElementById("meterHint"),
    copyAll: document.getElementById("copyAllBtn"),
    copyBest: document.getElementById("copyBestBtn"),
    downloadPng: document.getElementById("downloadPngBtn"),
    promptList: document.getElementById("promptList"),
    copyAllPrompts: document.getElementById("copyAllPromptsBtn"),
  };

  const defaultState = {
    topic: "",
    audience: "",
    offer: "",
    tone: "sharp",
    hooks: [],
    bestIdx: 0,
  };

  let state = loadJSON ? loadJSON(KEY, defaultState) : defaultState;
  state = { ...defaultState, ...state };

  function persist() {
    saveJSON?.(KEY, state);
  }

  function mountState() {
    if (els.topic) els.topic.value = state.topic;
    if (els.audience) els.audience.value = state.audience;
    if (els.offer) els.offer.value = state.offer;
    if (els.tone) els.tone.value = state.tone;
  }

  const curiosity = ["secret", "mistake", "nobody", "stop", "why", "truth", "hard", "real", "never", "always"];
  const numbers = /\b\d+(\.\d+)?\b/;

  function scoreHook(text) {
    const t = String(text).trim();
    const len = t.length;
    let s = 0;
    // length sweet spot
    if (len >= 45 && len <= 110) s += 22;
    else if (len >= 30 && len < 45) s += 12;
    else if (len > 110 && len <= 150) s += 10;
    else s += 6;
    // punctuation = pattern interrupt
    if (/[?!:]/.test(t)) s += 10;
    // numbers add specificity
    if (numbers.test(t)) s += 12;
    // curiosity words
    const lower = t.toLowerCase();
    const hits = curiosity.reduce((acc, w) => acc + (lower.includes(w) ? 1 : 0), 0);
    s += Math.min(18, hits * 4);
    // second person
    if (/\byou\b/i.test(t)) s += 8;
    // “because” implies reasoning
    if (/\bbecause\b/i.test(t)) s += 6;
    // discount filler
    if (/\b(amazing|incredible|insane|game-?changer)\b/i.test(t)) s -= 4;
    return clamp ? clamp(s, 0, 100) : Math.max(0, Math.min(100, s));
  }

  function toneTweaks(tone) {
    switch (tone) {
      case "warm":
        return { punctuation: ".", verbs: ["try", "notice", "start", "build"], spice: 0.2 };
      case "provocative":
        return { punctuation: "?", verbs: ["break", "quit", "refuse", "ignore"], spice: 0.55 };
      case "clinical":
        return { punctuation: ":", verbs: ["measure", "audit", "verify", "model"], spice: 0.15 };
      case "poetic":
        return { punctuation: ".", verbs: ["carry", "shape", "trace", "open"], spice: 0.35 };
      default:
        return { punctuation: ":", verbs: ["stop", "ship", "cut", "write"], spice: 0.45 };
    }
  }

  function generateHooks() {
    const topic = (els.topic?.value || state.topic || "").trim();
    const audience = (els.audience?.value || state.audience || "").trim();
    const offer = (els.offer?.value || state.offer || "").trim();
    const tone = els.tone?.value || state.tone || "sharp";

    state.topic = topic;
    state.audience = audience;
    state.offer = offer;
    state.tone = tone;

    const t = toneTweaks(tone);
    const A = audience || "people";
    const T = topic || "this";
    const O = offer || "a simple system";

    const templates = [
      `Most ${A} think ${T} is about discipline. It’s not${t.punctuation} It’s about one constraint you’re ignoring.`,
      `If ${T} feels hard, you’re probably doing the hard part first${t.punctuation} Here’s the order that works.`,
      `The 3 mistakes that make ${A} fail at ${T} (and the fix that actually sticks).`,
      `A brutal test: if you can’t explain ${T} in 1 sentence, you don’t understand it yet.`,
      `I built ${O} for ${A}. It replaces willpower with a checklist.`,
      `Stop trying to “get motivated”${t.punctuation} Use this instead: ${O}.`,
      `Here’s the ${O} I wish I had when I started ${T}.`,
      `Unpopular truth: ${A} don’t need more ideas. They need better prompts.`,
      `Want better results from ${T}? Change the first 10 words you type.`,
      `A simple rule: if it can’t be measured, it can’t be improved${t.punctuation} Apply it to ${T}.`,
      `I bet you’re overcomplicating ${T}${t.punctuation} Try this 2-step version instead.`,
      `The fastest way to improve ${T}: steal structure, not style.`,
    ];

    // light randomness without breaking determinism too much
    const verb = t.verbs[Math.floor(Math.random() * t.verbs.length)];
    const spicy = [
      `Quit writing “tips.” ${verb} a story that proves ${O} works.`,
      `A tiny shift that changes everything: ${verb} the constraint first, then the content.`,
      `You don’t need more content. You need a sharper entry point.`,
    ];

    const pool = [...templates, ...spicy];
    const hooks = shuffle(pool).slice(0, 10).map((text) => {
      const score = scoreHook(text);
      return { text, score };
    });
    hooks.sort((a, b) => b.score - a.score);
    state.hooks = hooks;
    state.bestIdx = 0;
    persist();
    renderHooks();
    renderMeter();
  }

  function renderHooks() {
    if (!els.hooks) return;
    els.hooks.innerHTML = "";
    if (!state.hooks.length) {
      els.hooks.innerHTML = `<div class="muted">Generate hooks to see results.</div>`;
      return;
    }
    state.hooks.forEach((h, idx) => {
      const div = document.createElement("div");
      div.className = "hook";
      div.innerHTML = `
        <div class="hookTop">
          <div class="hookScore">Score: <strong>${h.score}</strong>/100</div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button class="tinyBtn" type="button" data-best="${idx}">Best</button>
            <button class="tinyBtn" type="button" data-copy="${idx}">Copy</button>
          </div>
        </div>
        <div class="hookText">${escapeHtml(h.text)}</div>
      `;
      div.querySelector(`[data-copy="${idx}"]`).addEventListener("click", () => copyText?.(h.text));
      div.querySelector(`[data-best="${idx}"]`).addEventListener("click", () => {
        state.bestIdx = idx;
        persist();
        renderMeter();
        showToast?.("Set as best");
      });
      els.hooks.appendChild(div);
    });
  }

  function renderMeter() {
    const best = state.hooks[state.bestIdx] || state.hooks[0];
    if (!best) {
      if (els.meterValue) els.meterValue.textContent = "—";
      if (els.meterFill) els.meterFill.style.width = "0%";
      if (els.meterHint) els.meterHint.textContent = "Generate hooks to score.";
      return;
    }
    const v = best.score;
    if (els.meterValue) els.meterValue.textContent = `${v}/100`;
    if (els.meterFill) els.meterFill.style.width = `${v}%`;
    if (els.meterHint) {
      els.meterHint.textContent =
        v >= 78
          ? "High pull. This will get clicks if the post delivers."
          : v >= 55
          ? "Good. Add specificity (numbers, contrast, a clear promise)."
          : "Weak. Add a pattern interrupt or a sharper claim.";
    }
  }

  function formatAllHooks() {
    const lines = [];
    lines.push(`TOPIC: ${state.topic || "—"}`);
    lines.push(`AUDIENCE: ${state.audience || "—"}`);
    lines.push(`OFFER: ${state.offer || "—"}`);
    lines.push(`TONE: ${state.tone}`);
    lines.push("");
    lines.push("HOOKS:");
    state.hooks.forEach((h, i) => lines.push(`${i + 1}. (${h.score}/100) ${h.text}`));
    lines.push("");
    lines.push("Generated by The Prompt Library — Content Chamber");
    return lines.join("\n");
  }

  function bestHook() {
    return state.hooks[state.bestIdx] || state.hooks[0] || null;
  }

  async function downloadPng() {
    const best = bestHook();
    if (!best) return showToast?.("Generate first");

    const canvas = document.createElement("canvas");
    const w = 1200;
    const h = 630;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // background
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, "#05070d");
    bg.addColorStop(0.5, "#0b1030");
    bg.addColorStop(1, "#081c16");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // neon streaks
    glowBlob(ctx, 260, 150, 250, "rgba(114,245,199,0.18)");
    glowBlob(ctx, 920, 220, 320, "rgba(255,224,102,0.14)");
    glowBlob(ctx, 760, 520, 280, "rgba(255,107,255,0.12)");

    ctx.fillStyle = "rgba(255,255,255,0.90)";
    ctx.font = "800 46px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("HOOK", 70, 92);

    ctx.fillStyle = "rgba(255,255,255,0.68)";
    ctx.font = "600 22px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText(`Score: ${best.score}/100`, 70, 126);

    // hook block
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    roundRect(ctx, 70, 170, 1060, 310, 22);
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "650 40px system-ui, -apple-system, Segoe UI, sans-serif";
    wrapText(ctx, best.text, 110, 240, 980, 54, 4);

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "500 18px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillText("The Prompt Library · Content Chamber", 70, 590);

    const blob = await canvasToBlob(canvas);
    if (!blob) return showToast?.("Export failed");
    downloadBlob(`hook-${safeFile(state.topic || "content")}.png`, blob);
    showToast?.("Downloaded");
  }

  function mountPrompts() {
    if (!els.promptList) return;
    const prompts = [
      {
        name: "The Audience Knife",
        excavates: "One painfully specific person you’re writing to",
        text:
          "I’m writing content.\n\nTopic: [topic]\nAudience: [audience]\n\nMake the audience brutally specific. Give me:\n- 1 persona (name, job, stakes)\n- 3 beliefs they already have\n- 3 words they hate\n- 3 words that hook them\n\nThen rewrite my hook in their language.",
      },
      {
        name: "The Promise/Proof Pair",
        excavates: "A claim + the proof that makes it credible",
        text:
          "Turn my idea into a Promise/Proof pair.\n\nPromise: one sentence (bold, specific).\nProof: one sentence (why it’s true).\n\nThen generate 7 hook variations that each:\n- contain a Promise\n- imply Proof\n- avoid hype words\n\nReturn as a numbered list.",
      },
      {
        name: "The Contrast Engine",
        excavates: "A sharper angle (what you’re against)",
        text:
          "Give me 5 contrasts for this idea.\n\nFormat each as:\n- Most people do X.\n- Do Y instead.\n- Because Z.\n\nThen write 3 hooks using the strongest contrast.",
      },
      {
        name: "The Skeleton Post",
        excavates: "A post outline that delivers on the hook",
        text:
          "Take my best hook and build the post structure:\n\n1) Hook (keep it)\n2) Credibility (one sentence)\n3) The mistake (1 paragraph)\n4) The framework (3 bullets)\n5) Example (concrete)\n6) CTA (soft)\n\nKeep it tight. No filler.",
      },
      {
        name: "The Batch Factory (Capstone)",
        excavates: "A month of ideas with repeatable structure",
        text:
          "I want to ship content consistently.\n\nCreate a 4-week calendar with:\n- 2 posts/week that teach\n- 1 post/week that challenges\n- 1 post/week that tells a story\n\nEach entry must include:\n- Hook\n- Angle\n- 3 bullet outline\n\nMake it specific to my audience and topic.",
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
    els.copyAllPrompts?.addEventListener("click", () => {
      const all = prompts
        .map((p, i) => `PROMPT ${i + 1}: ${p.name}\nExcavates: ${p.excavates}\n\n${p.text}`)
        .join("\n\n---\n\n");
      copyText?.(all);
    });
  }

  function reset() {
    state = { ...defaultState };
    persist();
    mountState();
    renderHooks();
    renderMeter();
    showToast?.("Reset");
  }

  // helpers
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
  function safeFile(s) {
    return String(s || "hook")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
  function glowBlob(ctx, x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // bind
  mountState();
  renderHooks();
  renderMeter();
  mountPrompts();

  const bindSave = () => {
    state.topic = els.topic?.value || "";
    state.audience = els.audience?.value || "";
    state.offer = els.offer?.value || "";
    state.tone = els.tone?.value || "sharp";
    persist();
  };
  ["input", "change"].forEach((evt) => {
    els.topic?.addEventListener(evt, bindSave);
    els.audience?.addEventListener(evt, bindSave);
    els.offer?.addEventListener(evt, bindSave);
    els.tone?.addEventListener(evt, bindSave);
  });

  els.generate?.addEventListener("click", generateHooks);
  els.reset?.addEventListener("click", reset);
  els.copyAll?.addEventListener("click", () => copyText?.(formatAllHooks()));
  els.copyBest?.addEventListener("click", () => {
    const b = bestHook();
    if (!b) return showToast?.("Generate first");
    copyText?.(b.text);
  });
  els.downloadPng?.addEventListener("click", downloadPng);
})();


