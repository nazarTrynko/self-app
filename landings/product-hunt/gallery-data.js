// Product metadata for gallery
const PRODUCTS_DATA = [
  {
    id: "pagedoctor",
    name: "PageDoctor",
    tagline:
      "Your website's complete health check. 5 diagnostic modes tell you exactly what to fix.",
    confidence: 95,
    category: "Analytics",
    theme: "blue",
    icon: "🩺",
    path: "01-pagedoctor/",
    tags: [
      "website",
      "health",
      "diagnostic",
      "conversion",
      "analytics",
      "fix",
      "audit",
    ],
  },
  {
    id: "scopeguard",
    name: "ScopeGuard",
    tagline:
      'Track every "small change" clients ask for. Document scope creep as it happens.',
    confidence: 92,
    category: "Project Management",
    theme: "green",
    icon: "🛡️",
    path: "02-scopeguard/",
    tags: [
      "scope",
      "creep",
      "client",
      "tracking",
      "project",
      "management",
      "change",
    ],
  },
  {
    id: "convertfix",
    name: "ConvertFix",
    tagline:
      "AI analyzes your landing page and tells you exactly what to fix. Stop guessing.",
    confidence: 93,
    category: "Analytics",
    theme: "red",
    icon: "🔍",
    path: "03-convertfix/",
    tags: [
      "ai",
      "landing",
      "page",
      "analyze",
      "fix",
      "conversion",
      "analytics",
    ],
  },
  {
    id: "quotecalc",
    name: "QuoteCalc",
    tagline:
      "Turn client requests into professional quotes in 60 seconds with AI.",
    confidence: 91,
    category: "Business Tools",
    theme: "blue",
    icon: "🧮",
    path: "04-quotecalc/",
    tags: ["quote", "client", "ai", "professional", "business", "calculator"],
  },
  {
    id: "shipcheck",
    name: "ShipCheck",
    tagline:
      "The Product Hunt launch checklist. Everything you need to nail launch day.",
    confidence: 90,
    category: "Launch Tools",
    theme: "orange",
    icon: "🚀",
    path: "05-shipcheck/",
    tags: ["launch", "checklist", "product hunt", "ship", "launch day"],
  },
  {
    id: "clientsafe",
    name: "ClientSafe",
    tagline:
      "Deliverables unlock when payment clears. No more chasing invoices.",
    confidence: 92,
    category: "Business Tools",
    theme: "teal",
    icon: "🔐",
    path: "06-clientsafe/",
    tags: ["payment", "deliverables", "invoice", "client", "safe", "business"],
  },
  {
    id: "feedbackframe",
    name: "FeedbackFrame",
    tagline:
      'Get structured design feedback that actually helps. No more "make it pop".',
    confidence: 88,
    category: "Design Tools",
    theme: "purple",
    icon: "🎨",
    path: "07-feedbackframe/",
    tags: ["feedback", "design", "structured", "design tools", "review"],
  },
  {
    id: "waitlistkit",
    name: "WaitlistKit",
    tagline:
      "Launch-ready waitlist pages with referral mechanics in 5 minutes.",
    confidence: 89,
    category: "Launch Tools",
    theme: "yellow",
    icon: "📋",
    path: "08-waitlistkit/",
    tags: ["waitlist", "launch", "referral", "landing page", "kit"],
  },
  {
    id: "coldopen",
    name: "ColdOpen",
    tagline: "AI-personalized cold email openers that actually get replies.",
    confidence: 86,
    category: "Communication",
    theme: "coral",
    icon: "💌",
    path: "09-coldopen/",
    tags: ["email", "cold", "ai", "personalized", "communication", "outreach"],
  },
  {
    id: "pitchpolish",
    name: "PitchPolish",
    tagline:
      "AI grills your startup pitch so investors don't have to. Practice with feedback.",
    confidence: 85,
    category: "Business Tools",
    theme: "gold",
    icon: "🎤",
    path: "10-pitchpolish/",
    tags: ["pitch", "startup", "investor", "ai", "feedback", "practice"],
  },
  {
    id: "devlogai",
    name: "DevlogAI",
    tagline:
      "Turn git commits into beautiful build logs. Build in public effortlessly.",
    confidence: 82,
    category: "Developer Tools",
    theme: "terminal",
    icon: "{}",
    path: "11-devlogai/",
    tags: ["devlog", "git", "commits", "build", "public", "developer"],
  },
  {
    id: "nicheradar",
    name: "NicheRadar",
    tagline:
      "Find underserved markets before everyone else. AI-powered niche discovery.",
    confidence: 80,
    category: "Analytics",
    theme: "deepblue",
    icon: "📡",
    path: "12-nicheradar/",
    tags: ["niche", "market", "discovery", "ai", "analytics", "research"],
  },
  {
    id: "launchready",
    name: "LaunchReady",
    tagline:
      "Is your product ready to launch? Complete pre-flight check for Product Hunt.",
    confidence: 94,
    category: "Launch Tools",
    theme: "orange",
    icon: "🚀",
    path: "13-launchready/",
    tags: ["launch", "ready", "pre-flight", "product hunt", "check", "audit"],
  },
  {
    id: "agentorchestrator",
    name: "AgentOrchestrator",
    tagline:
      "Visualize and orchestrate multiple AI agents working together on complex tasks.",
    confidence: 87,
    category: "Developer Tools",
    theme: "indigo",
    icon: "🎭",
    path: "14-agentorchestrator/",
    tags: [
      "ai",
      "agents",
      "orchestration",
      "multi-agent",
      "developer",
      "coordination",
    ],
  },
  {
    id: "promptlab",
    name: "PromptLab",
    tagline:
      "Test, version, and optimize prompts with A/B testing and performance metrics.",
    confidence: 91,
    category: "Developer Tools",
    theme: "cyan",
    icon: "🧪",
    path: "15-promptlab/",
    tags: [
      "prompt",
      "engineering",
      "ai",
      "testing",
      "optimization",
      "developer",
    ],
  },
  {
    id: "mindblend",
    name: "MindBlend",
    tagline:
      "Get AI analysis from multiple 'minds' (strategist, critic, creator) for better decisions.",
    confidence: 88,
    category: "Business Tools",
    theme: "violet",
    icon: "🧠",
    path: "16-mindblend/",
    tags: [
      "ai",
      "reasoning",
      "multi-perspective",
      "decision",
      "business",
      "strategy",
    ],
  },
  {
    id: "agentmemory",
    name: "AgentMemory",
    tagline:
      "Give your AI agents long-term memory that persists across sessions.",
    confidence: 89,
    category: "Developer Tools",
    theme: "emerald",
    icon: "💾",
    path: "17-agentmemory/",
    tags: ["ai", "memory", "persistence", "agents", "developer", "storage"],
  },
  {
    id: "emergencetracker",
    name: "EmergenceTracker",
    tagline:
      "Monitor and visualize emergent behaviors in AI agent interactions.",
    confidence: 83,
    category: "Analytics",
    theme: "rose",
    icon: "🌊",
    path: "18-emergencetracker/",
    tags: [
      "emergence",
      "ai",
      "patterns",
      "analytics",
      "monitoring",
      "visualization",
    ],
  },
  {
    id: "confidencecalibrator",
    name: "ConfidenceCalibrator",
    tagline: "Know when to trust AI outputs with calibrated confidence scores.",
    confidence: 90,
    category: "Business Tools",
    theme: "amber",
    icon: "📊",
    path: "19-confidencecalibrator/",
    tags: [
      "confidence",
      "ai",
      "trust",
      "calibration",
      "business",
      "reliability",
    ],
  },
  {
    id: "agentchain",
    name: "AgentChain",
    tagline:
      "See how AI agents think step-by-step with visual reasoning chains.",
    confidence: 85,
    category: "Developer Tools",
    theme: "sky",
    icon: "🔗",
    path: "20-agentchain/",
    tags: [
      "chain-of-thought",
      "ai",
      "reasoning",
      "visualization",
      "developer",
      "debugging",
    ],
  },
  {
    id: "syntheticself",
    name: "SyntheticSelf",
    tagline:
      "Create consistent AI personas with defined cognitive modes and behaviors.",
    confidence: 86,
    category: "Business Tools",
    theme: "fuchsia",
    icon: "🎭",
    path: "21-syntheticself/",
    tags: ["ai", "persona", "cognitive", "modes", "business", "personality"],
  },
  {
    id: "predictionengine",
    name: "PredictionEngine",
    tagline: "Get predictions from multiple AI models and compare accuracy.",
    confidence: 84,
    category: "Analytics",
    theme: "slate",
    icon: "🔮",
    path: "22-predictionengine/",
    tags: [
      "prediction",
      "ai",
      "models",
      "comparison",
      "analytics",
      "forecasting",
    ],
  },
  {
    id: "consciousnessaudit",
    name: "ConsciousnessAudit",
    tagline:
      "Audit your AI systems for emergent behaviors, biases, and cognitive patterns.",
    confidence: 82,
    category: "Analytics",
    theme: "zinc",
    icon: "🔍",
    path: "23-consciousnessaudit/",
    tags: [
      "ai",
      "audit",
      "consciousness",
      "bias",
      "analytics",
      "introspection",
    ],
  },
];

// Helper functions
function getConfidenceRange(confidence) {
  if (confidence >= 95) return "95%+";
  if (confidence >= 90) return "90-95%";
  if (confidence >= 85) return "85-90%";
  return "80-85%";
}

function getAllCategories() {
  return [...new Set(PRODUCTS_DATA.map((p) => p.category))];
}

function getAverageConfidence() {
  const sum = PRODUCTS_DATA.reduce((acc, p) => acc + p.confidence, 0);
  return Math.round(sum / PRODUCTS_DATA.length);
}

function getTopCategory() {
  const categories = PRODUCTS_DATA.map((p) => p.category);
  const counts = {};
  categories.forEach((cat) => {
    counts[cat] = (counts[cat] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted[0] ? sorted[0][0] : "N/A";
}
