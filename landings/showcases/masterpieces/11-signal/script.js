// THE SIGNAL - Avoidance Pattern Detector
// What you avoid reveals what you fear

// Avoidance pattern analysis
const avoidancePatterns = {
  financial: {
    keywords: [
      "money",
      "bill",
      "debt",
      "invest",
      "salary",
      "budget",
      "bank",
      "tax",
      "loan",
      "credit",
      "payment",
    ],
    fear: "fear of inadequacy or judgment about your worth",
    signal:
      "You may be avoiding confronting your relationship with security and self-worth. The financial isn't just about money—it's about survival, safety, and how you value yourself.",
  },
  health: {
    keywords: [
      "health",
      "doctor",
      "exercise",
      "diet",
      "weight",
      "gym",
      "sick",
      "symptom",
      "body",
      "medical",
      "checkup",
    ],
    fear: "mortality anxiety or resistance to necessary change",
    signal:
      "Your body is sending messages you're not ready to hear. The avoidance suggests a deeper conversation with yourself about mortality, discipline, or self-care that feels overwhelming.",
  },
  relationship: {
    keywords: [
      "message",
      "call",
      "text",
      "family",
      "friend",
      "partner",
      "ex",
      "mom",
      "dad",
      "parent",
      "sibling",
      "colleague",
    ],
    fear: "unresolved tension or truths you're not ready to address",
    signal:
      "A relationship needs attention that you're withholding. The avoidance is protecting you from a difficult conversation—or from acknowledging something that's already ended.",
  },
  career: {
    keywords: [
      "work",
      "job",
      "career",
      "boss",
      "promotion",
      "project",
      "deadline",
      "success",
      "linkedin",
      "resume",
      "interview",
    ],
    fear: "imposter syndrome or unlived professional ambitions",
    signal:
      "There's a version of your professional self you're either afraid to become or afraid you've already lost. The career avoidance masks questions about purpose and identity.",
  },
  creative: {
    keywords: [
      "write",
      "art",
      "create",
      "idea",
      "project",
      "dream",
      "goal",
      "plan",
      "start",
      "finish",
      "creative",
    ],
    fear: "fear of failure or exposure of your true capabilities",
    signal:
      "Something in you wants to create but fears judgment. The avoidance protects you from discovering either that you're not as talented as you hope—or that you are, and must act on it.",
  },
  news: {
    keywords: [
      "news",
      "politic",
      "world",
      "crisis",
      "climate",
      "war",
      "election",
      "social",
      "media",
      "headline",
    ],
    fear: "helplessness in the face of forces beyond your control",
    signal:
      "You're protecting yourself from despair. The world feels too big to influence, so you turn away. But something in you still believes you should be doing more.",
  },
  self: {
    keywords: [
      "therapy",
      "journal",
      "reflect",
      "meditat",
      "feel",
      "emotion",
      "past",
      "trauma",
      "memory",
      "childhood",
    ],
    fear: "encountering parts of yourself you've locked away",
    signal:
      "The deepest avoidance is self-avoidance. You know there are rooms in your psyche you haven't entered in years. The signal is clear: it's time to go back in.",
  },
};

// Signal canvas - scanning/radar visualization
class SignalCanvas {
  constructor() {
    this.canvas = document.getElementById("signal-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.time = 0;
    this.signals = [];

    this.resize();
    this.init();
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.signals = [];
    const count = 8;

    for (let i = 0; i < count; i++) {
      this.signals.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: 50 + Math.random() * 100,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.1 + Math.random() * 0.2,
      });
    }
  }

  animate() {
    this.time += 0.01;

    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw scanning signals
    this.signals.forEach((s) => {
      const pulse = (Math.sin(this.time * s.speed + s.phase) + 1) / 2;
      const currentRadius = s.radius * (0.5 + pulse * 0.5);

      // Radar sweep effect
      const gradient = this.ctx.createRadialGradient(
        s.x,
        s.y,
        0,
        s.x,
        s.y,
        currentRadius
      );
      gradient.addColorStop(0, `rgba(58, 58, 94, ${s.opacity * pulse})`);
      gradient.addColorStop(
        0.5,
        `rgba(42, 42, 78, ${s.opacity * 0.5 * pulse})`
      );
      gradient.addColorStop(1, "transparent");

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, currentRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Pulse ring
      if (pulse > 0.8) {
        this.ctx.beginPath();
        this.ctx.arc(s.x, s.y, currentRadius * 1.2, 0, Math.PI * 2);
        this.ctx.strokeStyle = `rgba(58, 58, 94, ${(pulse - 0.8) * 2})`;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }

      // Slow drift
      s.x += Math.sin(this.time * 0.2 + s.phase) * 0.3;
      s.y += Math.cos(this.time * 0.15 + s.phase) * 0.3;

      // Wrap
      if (s.x < -s.radius) s.x = this.canvas.width + s.radius;
      if (s.x > this.canvas.width + s.radius) s.x = -s.radius;
      if (s.y < -s.radius) s.y = this.canvas.height + s.radius;
      if (s.y > this.canvas.height + s.radius) s.y = -s.radius;
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Pattern visualization canvas
class PatternCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.patterns = [];
    this.time = 0;
    this.animating = false;
  }

  setPatterns(patterns) {
    this.patterns = patterns;
    this.resize();
    this.animating = true;
    this.animate();
  }

  resize() {
    const container = this.canvas.parentElement;
    const size = Math.min(container.offsetWidth, 500);
    this.canvas.width = size;
    this.canvas.height = size;
  }

  animate() {
    if (!this.animating) return;

    this.time += 0.02;
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  draw() {
    const { width, height } = this.canvas;
    const cx = width / 2;
    const cy = height / 2;

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, width, height);

    // Draw pattern nodes
    const patternCount = this.patterns.length;
    if (patternCount === 0) return;

    this.patterns.forEach((pattern, i) => {
      const angle = (i / patternCount) * Math.PI * 2 - Math.PI / 2;
      const dist = width * 0.3;
      const x = cx + Math.cos(angle) * dist;
      const y = cy + Math.sin(angle) * dist;
      const pulse = Math.sin(this.time + i) * 0.3 + 0.7;

      // Node
      const nodeGradient = this.ctx.createRadialGradient(x, y, 0, x, y, 40);
      nodeGradient.addColorStop(0, `rgba(58, 58, 94, ${0.8 * pulse})`);
      nodeGradient.addColorStop(1, "transparent");

      this.ctx.beginPath();
      this.ctx.arc(x, y, 40 * pulse, 0, Math.PI * 2);
      this.ctx.fillStyle = nodeGradient;
      this.ctx.fill();

      // Connection to center
      this.ctx.beginPath();
      this.ctx.moveTo(cx, cy);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = `rgba(58, 58, 94, ${0.3 * pulse})`;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      // Label
      this.ctx.fillStyle = `rgba(136, 136, 136, ${0.7 * pulse})`;
      this.ctx.font = "11px Outfit";
      this.ctx.textAlign = "center";
      this.ctx.fillText(pattern.toUpperCase(), x, y + 55);
    });

    // Center
    const centerGradient = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
    centerGradient.addColorStop(0, "rgba(42, 42, 78, 0.5)");
    centerGradient.addColorStop(1, "transparent");

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    this.ctx.fillStyle = centerGradient;
    this.ctx.fill();

    this.ctx.fillStyle = "rgba(204, 204, 204, 0.6)";
    this.ctx.font = "10px Outfit";
    this.ctx.textAlign = "center";
    this.ctx.fillText("SIGNAL", cx, cy + 4);
  }
}

// Avoidance tracker logic
class SignalExperience {
  constructor() {
    this.avoidances = [];
    this.patternCanvas = new PatternCanvas("pattern-canvas");

    this.loadFromStorage();
    this.bindEvents();
    this.updateUI();
  }

  loadFromStorage() {
    const stored = localStorage.getItem("signal-avoidances");
    if (stored) {
      this.avoidances = JSON.parse(stored);
    }
  }

  saveToStorage() {
    localStorage.setItem("signal-avoidances", JSON.stringify(this.avoidances));
  }

  bindEvents() {
    document
      .getElementById("add-avoidance")
      ?.addEventListener("click", () => this.addAvoidance());
    document
      .getElementById("avoidance-input")
      ?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.addAvoidance();
      });
    document
      .getElementById("analyze-btn")
      ?.addEventListener("click", () => this.analyze());
    document
      .getElementById("reset-btn")
      ?.addEventListener("click", () => this.reset());
  }

  addAvoidance() {
    const input = document.getElementById("avoidance-input");
    const value = input.value.trim();

    if (value && this.avoidances.length < 10) {
      this.avoidances.push(value);
      input.value = "";
      this.saveToStorage();
      this.updateUI();
    }
  }

  removeAvoidance(index) {
    this.avoidances.splice(index, 1);
    this.saveToStorage();
    this.updateUI();
  }

  updateUI() {
    const list = document.getElementById("avoidance-list");
    const analyzeBtn = document.getElementById("analyze-btn");

    if (!list) return;

    list.innerHTML = this.avoidances
      .map(
        (item, i) => `
            <div class="avoidance-item">
                <span>${item}</span>
                <button class="remove-btn" data-index="${i}">×</button>
            </div>
        `
      )
      .join("");

    // Bind remove buttons
    list.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.removeAvoidance(parseInt(e.target.dataset.index));
      });
    });

    // Show/hide analyze button
    if (analyzeBtn) {
      analyzeBtn.style.display = this.avoidances.length >= 3 ? "block" : "none";
    }
  }

  analyze() {
    const detectedPatterns = [];
    const patternScores = {};

    // Score each pattern based on keyword matches
    const allText = this.avoidances.join(" ").toLowerCase();

    for (const [patternName, data] of Object.entries(avoidancePatterns)) {
      let score = 0;
      data.keywords.forEach((keyword) => {
        if (allText.includes(keyword)) {
          score++;
        }
      });
      if (score > 0) {
        patternScores[patternName] = score;
        detectedPatterns.push(patternName);
      }
    }

    // If no patterns detected, use default
    if (detectedPatterns.length === 0) {
      detectedPatterns.push("self");
      patternScores["self"] = 1;
    }

    // Sort by score and get top patterns
    const sortedPatterns = detectedPatterns.sort(
      (a, b) => patternScores[b] - patternScores[a]
    );
    const primaryPattern = sortedPatterns[0];
    const patternData = avoidancePatterns[primaryPattern];

    // Show results
    document.querySelector(".avoidance-tracker").style.display = "none";
    const analysisSection = document.getElementById("signal-analysis");
    analysisSection.style.display = "block";

    // Update analysis content
    document.getElementById(
      "pattern-description"
    ).textContent = `Your avoidance signature centers on ${primaryPattern} themes. ${
      sortedPatterns.length > 1
        ? `Secondary patterns detected: ${sortedPatterns.slice(1).join(", ")}.`
        : ""
    }`;

    document.getElementById(
      "fear-description"
    ).textContent = `Your avoidance pattern suggests ${patternData.fear}. This isn't weakness—it's your psyche's protective mechanism. But protection can become prison.`;

    document.getElementById("signal-message").textContent = patternData.signal;

    // Start pattern visualization
    this.patternCanvas.setPatterns(sortedPatterns.slice(0, 5));

    // Scroll to results
    analysisSection.scrollIntoView({ behavior: "smooth" });
  }

  reset() {
    this.avoidances = [];
    this.saveToStorage();
    this.updateUI();

    document.getElementById("signal-analysis").style.display = "none";
    document.querySelector(".avoidance-tracker").style.display = "block";
    document
      .querySelector(".avoidance-tracker")
      .scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  new SignalCanvas();
  new SignalExperience();
});
