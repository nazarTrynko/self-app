# Mini-Game Designer Prompt

## Purpose
Design gamified experiences that create daily engagement, viral sharing, and deeper learning of synthesis concepts. Mini-games turn passive readers into active practitioners.

---

## Why Mini-Games Matter

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    THE ENGAGEMENT LADDER                                 │
│                                                                          │
│  PASSIVE READING           → Low retention, low engagement              │
│  INTERACTIVE TOOLS         → Medium engagement, one-time use            │
│  GAMIFIED EXPERIENCES      → High engagement, daily return, sharing     │
│                                                                          │
│  Mini-games create HABITS around transformation concepts.                │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**The insight:** A 60-second daily game creates more transformation than reading the book once.

---

## Mini-Game Design Framework

### Core Game Types

```
MINI-GAME TAXONOMY:
│
├── SPEED GAMES (Time pressure)
│   ├── Reframe Racer - Speed-reframe negative thoughts
│   ├── Lens Switcher - See scenarios through different perspectives rapidly
│   └── Pattern Spotter - Identify narrative patterns quickly
│
├── PRACTICE GAMES (Skill building)
│   ├── Daily Ritual - Gamified 60-second practice with streaks
│   ├── Voice Detective - Identify which inner voice is speaking
│   └── Story Architect - Build narratives from fragments
│
├── CHALLENGE GAMES (Social/competitive)
│   ├── Reframe Challenge - Send a scenario to a friend
│   ├── Perspective Duel - Two people reframe the same situation
│   └── Streak Battles - Compete on practice consistency
│
└── EXPLORATION GAMES (Discovery)
    ├── Inner Voice Mapping - Progressive discovery of parts
    ├── Timeline Explorer - Navigate life events
    └── Transformation Journey - Progress through levels
```

---

## Mini-Game Design Prompt

```markdown
Design a mini-game for this synthesis:

## SYNTHESIS CONTEXT
- **Book/System Name**: [Name]
- **Core Concept to Gamify**: [Which concept should this teach?]
- **Target Behavior**: [What habit should this create?]
- **Desired Frequency**: [Daily/Weekly/On-demand]

## GAME REQUIREMENTS

### 1. GAME IDENTITY
- **Name**: [Short, evocative name]
- **Tagline**: [One sentence - what's the hook?]
- **Icon/Visual**: [Describe the visual identity]

### 2. CORE LOOP
Describe the fundamental game loop:
```
[Player Action] → [System Response] → [Feedback] → [Motivation to Repeat]
```

### 3. SESSION DESIGN
- **Time to complete**: [30/60/90 seconds]
- **Number of rounds**: [Per session]
- **Difficulty progression**: [How does it get harder?]

### 4. MECHANICS

**Input Mechanics** (How player interacts):
- [ ] Tap/Click
- [ ] Swipe
- [ ] Type text
- [ ] Select options
- [ ] Drag and drop
- [ ] Timed response

**Feedback Mechanics** (How game responds):
- [ ] Score/Points
- [ ] Time bonuses
- [ ] Visual celebration
- [ ] Sound effects
- [ ] Progress bar
- [ ] Streak counter

**Progression Mechanics** (How player advances):
- [ ] Levels
- [ ] Unlockables
- [ ] Daily streaks
- [ ] Achievements/Badges
- [ ] Leaderboards
- [ ] Personal bests

### 5. LEARNING INTEGRATION
How does the game teach the concept?
- What skill is being practiced?
- How is feedback tied to the learning goal?
- What "aha moment" does the game create?

### 6. VIRAL MECHANICS
How does it spread?
- **Shareable output**: [What can players share?]
- **Challenge mode**: [How to invite friends?]
- **Social proof**: [Leaderboards, badges, etc.]

### 7. RETENTION HOOKS
What brings players back?
- Daily challenge refresh?
- Streak maintenance?
- Progress toward goal?
- New content unlocks?

## OUTPUT FORMAT

Provide:
1. Complete game specification
2. User flow diagram
3. Screen-by-screen description
4. Scoring/progression system
5. Implementation notes (HTML/CSS/JS approach)
```

---

## Game Type Templates

### Template 1: Speed Reframing Game

**Concept**: Players practice cognitive reframing under time pressure.

```
REFRAME RACER

SETUP:
- Player sees a negative scenario/thought
- Timer starts (10 seconds)
- Player must select or type a reframe

MECHANICS:
- Correct reframe = points + time bonus
- Faster response = more points
- Streak bonus for consecutive correct answers
- Three strikes (wrong answers) = game over

PROGRESSION:
- Level 1: Binary choice (pick the reframe)
- Level 2: Multiple choice (4 options)
- Level 3: Free text (player writes reframe, AI validates)

SCORING:
- Base points: 100 per reframe
- Speed bonus: +10 per second remaining
- Streak bonus: 1.5x after 3, 2x after 5, 3x after 10

SHAREABLE:
"I reframed 15 scenarios in 60 seconds! Can you beat my score?"
[Share with friend button]
```

### Template 2: Daily Ritual Game

**Concept**: Gamified daily practice with streak mechanics.

```
THE DAILY RITE

SETUP:
- Each day presents a new transformation prompt
- Player completes the ritual in 60 seconds
- Streak builds with consecutive daily completion

RITUAL STRUCTURE:
1. STATE CUE (10 sec) - Physical action + word
2. BREATHE (10 sec) - Three breaths with guidance
3. SPEAK (10 sec) - Say transformation statement
4. FEEL (20 sec) - Embody the state
5. COMMIT (10 sec) - Name one small action

GAMIFICATION:
- Daily streak counter
- Weekly milestone rewards
- Monthly challenges
- Personal reflection history

RETENTION:
- Push notification at user's chosen time
- "Don't break the streak" messaging
- Streak recovery option (once per month)

SOCIAL:
- Share streak milestones
- Invite accountability partner
- See friends' activity (opt-in)
```

### Template 3: Perspective Switcher Game

**Concept**: Rapidly switch between different perspectives on scenarios.

```
LENS SWITCHER

SETUP:
- Scenario appears on screen
- Three "lens" buttons available
- Player must switch between all three

GAMEPLAY:
- Read scenario (5 sec auto-advance)
- Switch to Lens A - describe what this perspective sees
- Switch to Lens B - describe what this perspective sees
- Switch to Lens C - describe what this perspective sees
- Bonus round: Synthesize the three views

LENSES (example from Transition Rite):
- THE PAST SELF: How your former identity sees this
- THE PRESENT SELF: How you experience this now
- THE FUTURE SELF: How your emerging identity sees this

SCORING:
- Completion: 100 points per lens
- Speed bonus: For switching quickly
- Synthesis bonus: For connecting insights
- Creativity bonus: For novel perspectives (AI-judged)

PROGRESSION:
- Unlock new lens combinations
- Tackle more complex scenarios
- Increase switching speed challenges
```

### Template 4: Voice Detective Game

**Concept**: Practice identifying inner voices/parts.

```
VOICE DETECTIVE

SETUP:
- Player hears/reads internal dialogue snippets
- Must identify which "voice" is speaking
- Build a map of their inner council

GAMEPLAY:
1. Present internal dialogue: "You can't do that, you'll fail"
2. Player identifies: [Protector? Critic? Worrier? Perfectionist?]
3. Feedback: Correct identification + insight about this voice
4. Voice added to player's personal map

PROGRESSION:
- Level 1: Obvious voices (Critic, Supporter)
- Level 2: Subtle voices (Protector, Perfectionist)
- Level 3: Hidden voices (Exile, Inner Child)
- Level 4: Player's own recorded thoughts

PERSONAL MAP:
- Visual constellation of identified voices
- Strength indicators (how often this voice appears)
- Relationship lines (which voices conflict/align)

UNLOCK:
- After identifying 10 voices → Unlock "Voice Dialogue" feature
- After mapping patterns → Unlock "Council Meeting" protocol
```

---

## Viral Mechanics Deep Dive

### Shareable Outputs

```
SHARE TEMPLATES:

SCORE SHARE:
"🧠 Reframe Racer: 2,450 points
I reframed 18 negative thoughts in 60 seconds.
Can you beat my score? [PLAY NOW]"

STREAK SHARE:
"🔥 21-Day Transformation Streak
I've completed The Daily Rite for 3 weeks straight.
Join me: [INVITE LINK]"

INSIGHT SHARE:
"💡 Today I discovered my inner Protector
is actually trying to keep me safe, not hold me back.
What voice is speaking in you? [TRY THE GAME]"

ACHIEVEMENT SHARE:
"🏆 Unlocked: Master Reframer
Completed 100 reframes with 80%+ accuracy.
[CHALLENGE ME]"
```

### Challenge Mode

```
CHALLENGE FLOW:

1. Player completes a game session
2. Prompt: "Challenge a friend to beat your score?"
3. Player selects friend(s) from contacts/social
4. Friend receives: "Sarah challenged you to Reframe Racer!"
5. Friend plays the SAME scenarios
6. Results compared: Winner declared
7. Both players see each other's reframes (learning moment)
```

---

## Implementation Notes

### Tech Stack Recommendations

```
SIMPLE (HTML/CSS/JS):
- Single file, embedded in landing page
- LocalStorage for progress
- No backend required
- Shareable via URL parameters

INTERMEDIATE (PWA):
- Installable on mobile
- Offline play
- Push notifications
- Service worker caching

ADVANCED (Full App):
- React Native / Flutter
- Backend for leaderboards
- AI for text validation
- Social features
```

### HTML/CSS/JS Pattern

```html
<!-- Mini-Game Container Pattern -->
<div class="game-container">
    <div class="game-header">
        <span class="game-score">Score: <span id="score">0</span></span>
        <span class="game-timer">Time: <span id="timer">60</span>s</span>
        <span class="game-streak">🔥 <span id="streak">0</span></span>
    </div>
    
    <div class="game-content" id="gameContent">
        <!-- Dynamic game content -->
    </div>
    
    <div class="game-actions">
        <!-- Action buttons -->
    </div>
    
    <div class="game-feedback" id="feedback">
        <!-- Feedback animations -->
    </div>
</div>

<script>
class MiniGame {
    constructor(config) {
        this.score = 0;
        this.streak = 0;
        this.timeLeft = config.duration || 60;
        this.scenarios = config.scenarios;
        this.currentIndex = 0;
    }
    
    start() {
        this.timer = setInterval(() => this.tick(), 1000);
        this.showScenario();
        track('game_start', { game: this.name });
    }
    
    tick() {
        this.timeLeft--;
        this.updateDisplay();
        if (this.timeLeft <= 0) this.end();
    }
    
    handleAnswer(answer) {
        const correct = this.checkAnswer(answer);
        if (correct) {
            this.score += this.calculateScore();
            this.streak++;
            this.showFeedback('correct');
        } else {
            this.streak = 0;
            this.showFeedback('incorrect');
        }
        this.nextScenario();
    }
    
    calculateScore() {
        const base = 100;
        const timeBonus = this.timeLeft * 2;
        const streakMultiplier = Math.min(3, 1 + (this.streak * 0.1));
        return Math.floor((base + timeBonus) * streakMultiplier);
    }
    
    end() {
        clearInterval(this.timer);
        track('game_complete', { 
            score: this.score, 
            max_streak: this.maxStreak 
        });
        this.showResults();
    }
}
</script>
```

---

## Mini-Game Ideas Bank

### For Identity/Narrative Synthesis
1. **Story Shuffle** - Rearrange life events into redemptive sequence
2. **Meaning Maker** - Add meaning to neutral events
3. **Character Creator** - Design your future self avatar
4. **Plot Twist** - Turn contamination into redemption
5. **Headline Writer** - Write news headlines about your life

### For Inner Parts/Voices Synthesis
1. **Voice Match** - Match thoughts to voices
2. **Council Simulator** - Run a meeting with inner parts
3. **Protector Quiz** - Identify what each voice is protecting
4. **Exile Explorer** - Gentle discovery of hidden parts
5. **Integration Puzzle** - Fit parts together harmoniously

### For State/Somatic Synthesis
1. **State Spotter** - Identify your current state
2. **Anchor Builder** - Create and test anchors
3. **Breathing Beats** - Rhythm-based breathing game
4. **Body Scan Sprint** - Timed body awareness
5. **State Switch Challenge** - Rapid state transitions

---

## Metrics to Track

| Metric | What It Tells You | Target |
|--------|-------------------|--------|
| Sessions per user | Engagement depth | >3/week |
| Session length | Game pacing | 60-90 sec |
| Completion rate | Difficulty balance | >70% |
| Streak average | Habit formation | >5 days |
| Share rate | Viral potential | >5% |
| Return rate | Retention | >30% day 7 |

---

**Mini-Game Designer v1.0**
*Play. Practice. Transform.*


