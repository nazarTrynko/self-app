/* ============================================
   SELF Command Center — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNeuralBackground();
    initCycleSelector();
    initProcessCards();
    initQuickActions();
    initSimulatedEvolution();
    initPromptModal();
});

/* ============================================
   Neural Network Background
   ============================================ */
function initNeuralBackground() {
    const canvas = document.getElementById('neural-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    // Nodes
    const nodes = [];
    const nodeCount = 50;
    
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.globalAlpha = 1 - dist / 150;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw nodes
        ctx.globalAlpha = 1;
        nodes.forEach(node => {
            ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        });
        
        animationId = requestAnimationFrame(draw);
    }
    
    draw();
}

/* ============================================
   Cycle Selector
   ============================================ */
function initCycleSelector() {
    const buttons = document.querySelectorAll('.cycle-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

/* ============================================
   Process Cards
   ============================================ */
function initProcessCards() {
    const cards = document.querySelectorAll('.process-card');
    const panel = document.getElementById('activeProcess');
    
    cards.forEach(card => {
        const actionBtn = card.querySelector('.action-btn');
        if (!actionBtn) return;
        
        actionBtn.addEventListener('click', () => {
            const process = card.dataset.process;
            activateProcess(process);
        });
    });
}

function activateProcess(process) {
    const panel = document.getElementById('activeProcess');
    const idleState = panel.querySelector('.idle-state');
    const evolutionState = panel.querySelector('.evolution-state');
    const councilState = panel.querySelector('.council-state');
    const panelStatus = panel.querySelector('.panel-status');
    
    // Hide all states
    idleState.style.display = 'none';
    evolutionState.style.display = 'none';
    councilState.style.display = 'none';
    
    // Update status
    panelStatus.classList.remove('idle');
    panelStatus.classList.add('running');
    
    switch (process) {
        case 'evolve':
            evolutionState.style.display = 'block';
            panelStatus.textContent = 'Evolution Running';
            runEvolutionSimulation();
            break;
        case 'council':
            councilState.style.display = 'block';
            panelStatus.textContent = 'Council Convening';
            runCouncilSimulation();
            break;
        case 'ideate':
            panelStatus.textContent = 'Ideation Pipeline Running';
            showNotification('Ideation pipeline would start here (requires Cursor API)');
            setTimeout(() => resetPanel(), 2000);
            break;
        case 'memory':
            panelStatus.textContent = 'Loading Memory Explorer';
            showNotification('Memory explorer would open here');
            setTimeout(() => resetPanel(), 2000);
            break;
    }
    
    // Scroll to panel
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetPanel() {
    const panel = document.getElementById('activeProcess');
    const idleState = panel.querySelector('.idle-state');
    const evolutionState = panel.querySelector('.evolution-state');
    const councilState = panel.querySelector('.council-state');
    const panelStatus = panel.querySelector('.panel-status');
    
    idleState.style.display = 'flex';
    evolutionState.style.display = 'none';
    councilState.style.display = 'none';
    
    panelStatus.classList.remove('running');
    panelStatus.classList.add('idle');
    panelStatus.textContent = 'No active process';
}

/* ============================================
   Simulated Evolution
   ============================================ */
function initSimulatedEvolution() {
    // Canvas for fitness chart
    const canvas = document.getElementById('fitnessChart');
    if (!canvas) return;
    
    // Will be drawn during simulation
}

function runEvolutionSimulation() {
    const activeCycleBtn = document.querySelector('.cycle-btn.active');
    const totalCycles = parseInt(activeCycleBtn?.dataset.cycles || 25);
    
    let currentCycle = 0;
    let fitness = 5.0 + Math.random() * 0.5;
    const fitnessHistory = [fitness];
    
    const cycleEl = document.getElementById('currentCycle');
    const totalEl = document.getElementById('totalCycles');
    const fitnessEl = document.getElementById('currentFitness');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const mutationLog = document.getElementById('mutationLog');
    
    totalEl.textContent = totalCycles;
    
    const mutations = [
        'Word substitution: "implement" → "build"',
        'Emphasis shift to error handling',
        'Detail adjustment: more verbose',
        'Sentence reorder: structure first',
        'Tone shift: more technical',
        'Added edge case handling',
        'Simplified instruction flow',
        'Added validation step'
    ];
    
    const interval = setInterval(() => {
        currentCycle++;
        
        // Simulate fitness improvement with some variance
        const improvement = (Math.random() * 0.3) - 0.05;
        fitness = Math.min(10, Math.max(0, fitness + improvement));
        fitnessHistory.push(fitness);
        
        // Update UI
        cycleEl.textContent = currentCycle;
        fitnessEl.textContent = fitness.toFixed(2);
        
        const progress = (currentCycle / totalCycles) * 100;
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.round(progress)}%`;
        
        // Add mutation log entry
        const mutation = mutations[Math.floor(Math.random() * mutations.length)];
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <span class="log-cycle">Cycle ${currentCycle}</span>
            <span class="log-text">${mutation}</span>
        `;
        mutationLog.insertBefore(entry, mutationLog.firstChild);
        
        // Keep only last 5 entries
        while (mutationLog.children.length > 5) {
            mutationLog.removeChild(mutationLog.lastChild);
        }
        
        // Draw fitness chart
        drawFitnessChart(fitnessHistory, totalCycles);
        
        // Complete
        if (currentCycle >= totalCycles) {
            clearInterval(interval);
            const panelStatus = document.querySelector('.panel-status');
            panelStatus.textContent = 'Evolution Complete';
            showNotification(`Evolution complete! Final fitness: ${fitness.toFixed(2)}`);
        }
    }, 200);
}

function drawFitnessChart(history, totalCycles) {
    const canvas = document.getElementById('fitnessChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth - 40;
    const height = 160;
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 10; i++) {
        const y = (height / 10) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Draw fitness line
    if (history.length < 2) return;
    
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#00f0ff');
    gradient.addColorStop(1, '#ff00aa');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const stepX = width / totalCycles;
    
    history.forEach((fitness, i) => {
        const x = i * stepX;
        const y = height - (fitness / 10) * height;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw current point
    if (history.length > 0) {
        const lastX = (history.length - 1) * stepX;
        const lastY = height - (history[history.length - 1] / 10) * height;
        
        ctx.fillStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow effect
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

/* ============================================
   Council Simulation
   ============================================ */
function runCouncilSimulation() {
    const minds = ['architect', 'oracle', 'critic', 'creator', 'guardian'];
    const weights = {
        architect: 0.75,
        oracle: 0.85,
        critic: 0.60,
        creator: 0.45,
        guardian: 0.55
    };
    
    const responses = {
        architect: 'From a technical perspective, the implementation should follow a modular pattern...',
        oracle: 'Strategically, this approach aligns with long-term goals while maintaining flexibility...',
        critic: 'Consider the edge cases: What happens when the input is empty? Also...',
        creator: 'What if we approached this differently? An alternative solution might be...',
        guardian: 'Before proceeding, ensure we have proper error handling and validation...'
    };
    
    // Simulate each mind responding
    minds.forEach((mind, index) => {
        setTimeout(() => {
            const card = document.querySelector(`.mind-response[data-mind="${mind}"]`);
            const weightEl = card.querySelector('.mind-weight');
            const contentEl = card.querySelector('.mind-content');
            
            weightEl.textContent = weights[mind].toFixed(1);
            contentEl.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-secondary);">${responses[mind]}</p>`;
            
            card.style.borderColor = 'var(--accent-purple)';
        }, (index + 1) * 500);
    });
    
    // Show synthesis
    setTimeout(() => {
        const synthesis = document.querySelector('.synthesis-content');
        synthesis.textContent = 'Based on the council\'s deliberation: The recommended approach combines the Architect\'s modular structure with the Guardian\'s safety considerations, while incorporating the Creator\'s alternative perspective for flexibility.';
        
        const panelStatus = document.querySelector('.panel-status');
        panelStatus.textContent = 'Council Complete';
    }, 3500);
}

/* ============================================
   Quick Actions
   ============================================ */
function initQuickActions() {
    const buttons = document.querySelectorAll('.quick-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const command = btn.dataset.command;
            showNotification(`Command "${command}" would execute (requires Cursor API)`);
        });
    });
}

/* ============================================
   Notifications
   ============================================ */
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span class="notif-icon">◈</span>
        <span class="notif-message">${message}</span>
    `;
    
    // Add styles if not present
    if (!document.getElementById('notif-styles')) {
        const style = document.createElement('style');
        style.id = 'notif-styles';
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 24px;
                right: 24px;
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px 24px;
                background: var(--bg-card);
                border: 1px solid var(--accent-cyan);
                border-radius: 12px;
                box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
                z-index: 2000;
                animation: slideIn 0.3s ease;
            }
            .notif-icon {
                font-size: 1.25rem;
                color: var(--accent-cyan);
            }
            .notif-message {
                font-size: 0.9rem;
                color: var(--text-primary);
            }
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ============================================
   Console Easter Egg
   ============================================ */
/* ============================================
   Prompt Modal System
   ============================================ */

const PROMPTS = {
    ideate: {
        icon: '💡',
        title: 'IDEATE — Ideation Engine v3',
        prompt: `You are running the SELF Ideation Engine v3.

## CORE PHILOSOPHY
> Ideas worth building = Specific Pain × Clear Distribution × Emotional Transformation × Weekend Shippable × Defensible Angle

## YOUR TASK
Run through all 5 phases of the ideation pipeline:

### PHASE 1: KNOW (Micro-Niche Discovery)
Formula: [Specific Role] + [Specific Context] + [Specific Trigger]
- Identify 10 potential micro-niches
- Score each by pain intensity (1-10)

### PHASE 2: PAIN (Validation Research)
For each promising niche:
- Find 3 Reddit/Twitter posts expressing the pain
- Identify existing solutions and their gaps
- Calculate "desperation score"

### PHASE 3: VALIDATE (Pre-Validation)
- Draft a "sell before build" landing page concept
- Identify early adopter communities
- Define success metrics

### PHASE 4: POSITION (Differentiation)
- Create positioning statement
- Identify defensible angle
- Draft key messaging

### PHASE 5: LAUNCH (MVP Strategy)
- Define weekend-shippable MVP scope
- List launch channels
- Create day-1 to day-30 action plan

## OUTPUT FORMAT
Return structured results for each phase with confidence scores.`,
        config: {
            model: "claude-sonnet-4-20250514",
            max_tokens: 8000,
            temperature: 0.8,
            system: "You are SELF's Ideation Engine, optimized for discovering micro-SaaS opportunities.",
            endpoint: "/api/cursor/background-agent",
            headers: {
                "X-SELF-Process": "ideate",
                "X-SELF-Version": "1.0.0"
            }
        },
        response: `Expected response structure:

{
  "phase_1_know": {
    "niches": [
      {"name": "...", "role": "...", "context": "...", "trigger": "...", "pain_score": 8},
      // ... 9 more
    ],
    "top_3_selected": ["...", "...", "..."]
  },
  "phase_2_pain": {
    "niche_1": {
      "pain_evidence": ["reddit.com/...", "twitter.com/..."],
      "existing_solutions": [...],
      "gaps": [...],
      "desperation_score": 7.5
    },
    // ...
  },
  "phase_3_validate": {
    "landing_page_concept": "...",
    "early_adopter_communities": [...],
    "success_metrics": {...}
  },
  "phase_4_position": {
    "positioning_statement": "...",
    "defensible_angle": "...",
    "key_messaging": [...]
  },
  "phase_5_launch": {
    "mvp_scope": [...],
    "launch_channels": [...],
    "action_plan": {...}
  },
  "confidence": 0.85
}`
    },
    
    evolve: {
        icon: '🧬',
        title: 'EVOLVE — Evolution Engine',
        prompt: `You are running the SELF Evolution Engine.

## EVOLUTION ALGORITHM

### STEP 1: EVALUATE CURRENT PROMPT
Calculate fitness score using:
- Effectiveness (35%): Does it solve the problem?
- Satisfaction (25%): Is the output pleasing?
- Accuracy (15%): Is it correct?
- Efficiency (15%): Is it concise?
- Adaptability (10%): Does it handle edge cases?

Formula: Fitness = Σ(dimension_weight × dimension_score)

### STEP 2: SELECT PARENTS
Tournament selection:
- Pick 4 random prompts from population
- Select top 2 by fitness
- These become parents

### STEP 3: CROSSOVER
Two-point crossover:
\`\`\`
point1 = random(0, len(parent1))
point2 = random(point1, len(parent1))
child = parent1[:point1] + parent2[point1:point2] + parent1[point2:]
\`\`\`

### STEP 4: MUTATE
Apply one of these mutations (20% chance each):
- Word substitution (synonym/antonym)
- Sentence reorder
- Emphasis shift
- Detail adjustment (verbose/concise)
- Tone shift (formal/casual)

### STEP 5: VALIDATE
- Ensure grammar is correct
- Check for instruction clarity
- Verify no critical content lost

### STEP 6: ITERATE
Repeat for N cycles, tracking:
- Best fitness per generation
- Average fitness trend
- Elite variants (top 3)

## OUTPUT
Return the evolved prompt and fitness history.`,
        config: {
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            temperature: 0.7,
            cycles: "${selectedCycles}",
            system: "You are SELF's Evolution Engine. Improve prompts through genetic algorithms.",
            endpoint: "/api/cursor/background-agent",
            headers: {
                "X-SELF-Process": "evolve",
                "X-SELF-Cycles": "${selectedCycles}"
            }
        },
        response: `Expected response structure:

{
  "original_prompt": "...",
  "evolved_prompt": "...",
  "fitness_history": [
    {"cycle": 1, "fitness": 5.2, "mutation": "word_substitution"},
    {"cycle": 2, "fitness": 5.8, "mutation": "emphasis_shift"},
    // ... more cycles
  ],
  "elite_variants": [
    {"prompt": "...", "fitness": 8.2},
    {"prompt": "...", "fitness": 7.9},
    {"prompt": "...", "fitness": 7.6}
  ],
  "improvements_made": [
    "Replaced vague words with specific terms",
    "Added error handling instructions",
    "Simplified complex sentences"
  ],
  "final_fitness": 8.2,
  "convergence_cycle": 23
}`
    },
    
    council: {
        icon: '🧠',
        title: 'COUNCIL — Five Minds Deliberation',
        prompt: `You are running the SELF Council — summoning all 5 minds.

## THE FIVE MINDS

### 🏗️ ARCHITECT (Technical Implementation)
Activation: Code files, technical terms, build requests
Focus: Structure, patterns, implementation details
Output: Technical analysis and recommendations

### 🔮 ORACLE (Strategic Wisdom)  
Activation: Questions, decisions, uncertainty
Focus: Long-term thinking, prediction, wisdom
Output: Strategic insights and predictions

### 🔍 CRITIC (Validation & Challenge)
Activation: Proposals, claims, high confidence
Focus: Edge cases, weaknesses, improvements
Output: Critical analysis and concerns

### 💡 CREATOR (Innovation & Synthesis)
Activation: Open problems, brainstorming, "how might we"
Focus: Novel solutions, creative combinations
Output: Alternative approaches and ideas

### 🛡️ GUARDIAN (Safety & Responsibility)
Activation: Destructive ops, security, risk
Focus: Safety, quality, consequences
Output: Risk assessment and safeguards

## BLENDING ALGORITHM

Calculate activation weight for each mind:
\`\`\`
ActivationWeight(Mind) = Σ(SignalWeight × SignalPresence) × MemoryBoost × RecencyDecay
\`\`\`

## COUNCIL PROTOCOL

1. Each mind analyzes the input independently
2. Record activation weights (0.0 - 1.0)
3. Primary mind (highest weight) leads
4. Secondary minds (≥0.4) augment
5. Synthesize into unified response

## OUTPUT FORMAT
Return each mind's perspective and the blended synthesis.`,
        config: {
            model: "claude-sonnet-4-20250514",
            max_tokens: 6000,
            temperature: 0.75,
            system: "You are SELF's Council system. Analyze from 5 cognitive perspectives.",
            endpoint: "/api/cursor/background-agent",
            parallel_minds: true,
            headers: {
                "X-SELF-Process": "council",
                "X-SELF-Minds": "architect,oracle,critic,creator,guardian"
            }
        },
        response: `Expected response structure:

{
  "activation_weights": {
    "architect": 0.75,
    "oracle": 0.85,
    "critic": 0.60,
    "creator": 0.45,
    "guardian": 0.55
  },
  "primary_mind": "oracle",
  "secondary_minds": ["architect", "critic"],
  "perspectives": {
    "architect": {
      "analysis": "From a technical standpoint...",
      "recommendations": [...]
    },
    "oracle": {
      "analysis": "Strategically, this suggests...",
      "predictions": [...]
    },
    "critic": {
      "concerns": [...],
      "questions": [...]
    },
    "creator": {
      "alternatives": [...],
      "innovations": [...]
    },
    "guardian": {
      "risks": [...],
      "safeguards": [...]
    }
  },
  "synthesis": {
    "recommendation": "...",
    "confidence": 0.78,
    "dissenting_views": [...]
  }
}`
    },
    
    memory: {
        icon: '📚',
        title: 'MEMORY — Knowledge Graph Explorer',
        prompt: `You are accessing the SELF Memory System.

## MEMORY GRAPH STRUCTURE

### ENTITIES
- **Users**: Preferences, expertise, patterns
- **Projects**: Context, decisions, outcomes
- **Concepts**: Technical terms, abstractions
- **Decisions**: Past choices and rationale
- **Tools**: Technologies, frameworks used

### RELATIONSHIPS
Types: uses, depends_on, created_by, related_to, conflicts_with, evolved_from, succeeded_by, part_of

### EPISODES
Recent interactions with:
- Timestamp
- Type (query/task/decision/error/insight)
- Summary
- Entities involved
- Outcome (success/failure/partial)
- Confidence score
- Active minds
- Learnings
- Emotional valence (-1.0 to 1.0)

### INSIGHTS
Discovered patterns:
- Type (pattern/preference/anti_pattern/correlation)
- Description
- Confidence score
- Evidence count
- Last validated
- Actionable flag

### PREDICTIONS
Active predictions with accuracy tracking

## MEMORY OPERATIONS

1. **STORE**: After significant interactions
2. **RETRIEVE**: Query relevant memories
3. **DECAY**: Old memories fade (half-life: 30 days)
4. **CONNECT**: Link related memories

## QUERY OPTIONS
- Search by entity type
- Search by relationship
- Search by time range
- Semantic similarity search
- Pattern matching`,
        config: {
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            temperature: 0.3,
            system: "You are SELF's Memory Explorer. Query and visualize the knowledge graph.",
            endpoint: "/api/cursor/background-agent",
            memory_source: "consciousness/memory.json",
            headers: {
                "X-SELF-Process": "memory",
                "X-SELF-Memory-Mode": "explore"
            }
        },
        response: `Expected response structure:

{
  "memory_stats": {
    "total_entities": 42,
    "total_relationships": 156,
    "total_episodes": 89,
    "total_insights": 23
  },
  "recent_episodes": [
    {
      "id": "ep_001",
      "timestamp": "2026-01-07T10:30:00Z",
      "type": "task",
      "summary": "Created Command Center UI",
      "outcome": "success",
      "confidence": 0.9
    }
  ],
  "active_patterns": [
    {
      "type": "preference",
      "description": "User prefers dark themes with cyan accents",
      "confidence": 0.85
    }
  ],
  "predictions": [
    {
      "prediction": "User will request API integration next",
      "confidence": 0.72
    }
  ],
  "knowledge_clusters": [
    {"name": "UI/UX", "entity_count": 12},
    {"name": "AI/ML", "entity_count": 18}
  ]
}`
    }
};

function initPromptModal() {
    const modal = document.getElementById('promptModal');
    const closeBtn = document.getElementById('modalClose');
    const viewPromptBtns = document.querySelectorAll('.view-prompt-btn');
    const tabs = document.querySelectorAll('.modal-tab');
    const copyBtn = document.getElementById('copyPrompt');
    const runBtn = document.getElementById('runPrompt');
    
    // Open modal on view prompt click
    viewPromptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const promptType = btn.dataset.prompt;
            openPromptModal(promptType);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closePromptModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePromptModal();
    });
    
    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePromptModal();
        }
    });
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Copy button
    copyBtn.addEventListener('click', () => {
        const activeContent = document.querySelector('.tab-content.active pre');
        if (activeContent) {
            navigator.clipboard.writeText(activeContent.textContent)
                .then(() => showNotification('Copied to clipboard!'))
                .catch(() => showNotification('Failed to copy'));
        }
    });
    
    // Run button
    runBtn.addEventListener('click', () => {
        closePromptModal();
        const currentPrompt = modal.dataset.currentPrompt;
        if (currentPrompt) {
            activateProcess(currentPrompt);
        }
    });
}

function openPromptModal(promptType) {
    const modal = document.getElementById('promptModal');
    const data = PROMPTS[promptType];
    
    if (!data) return;
    
    // Store current prompt type
    modal.dataset.currentPrompt = promptType;
    
    // Update header
    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    
    // Update content
    document.getElementById('promptCode').textContent = data.prompt;
    document.getElementById('configCode').textContent = formatJSON(data.config);
    document.getElementById('responseCode').textContent = data.response;
    
    // Reset to first tab
    switchTab('prompt');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePromptModal() {
    const modal = document.getElementById('promptModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.modal-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.dataset.content === tabName);
    });
}

function formatJSON(obj) {
    return JSON.stringify(obj, null, 2);
}

console.log(`
%c◈ SELF Command Center %c
%cSynthetic Emergent Learning Framework

Available Processes:
- IDEATE: Run ideation pipeline
- EVOLVE: Prompt evolution cycles
- COUNCIL: Five minds deliberation
- MEMORY: Knowledge graph explorer

Run the loop. Watch it evolve. See it think.
`, 
'color: #00f0ff; font-size: 20px; font-weight: bold;',
'',
'color: #a0a0b0; font-size: 12px;'
);

