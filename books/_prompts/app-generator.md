# App Generator Prompt — Companion Applications

> **Purpose**: Transform book methodology into interactive companion applications that extend the transformation experience beyond the landing page.

---

## The App Philosophy

Books teach. Apps practice. Together, they transform.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        BOOK ↔ APP RELATIONSHIP                              │
│                                                                              │
│   BOOK                           APP                                         │
│   ┌──────────────────┐          ┌──────────────────┐                        │
│   │ Concepts         │ ───────► │ Practice         │                        │
│   │ Frameworks       │          │ Exercises        │                        │
│   │ Theory           │          │ Tracking         │                        │
│   │ One-time read    │          │ Daily use        │                        │
│   └──────────────────┘          └──────────────────┘                        │
│                                                                              │
│   Landing Page: DEMO the transformation (30-90 seconds)                     │
│   Companion App: PRACTICE the transformation (daily, ongoing)               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## App Types

### Type A: Practice Platforms

**Best For**: Skill-building books (habits, mindset, communication)

**Core Features**:
- Daily exercises/prompts
- Progress tracking
- Spaced repetition
- Streaks/consistency rewards
- Journal/reflection space

**Example Apps**:
- Morning intention setter
- Cognitive reframe practice
- Communication skill builder
- Habit tracker with book methodology

### Type B: Assessment Systems

**Best For**: Diagnostic books (personality, skills, relationships)

**Core Features**:
- Multi-stage assessments
- Results visualization
- Personalized reports
- PDF export capability
- Progress comparison over time

**Example Apps**:
- Narrative identity profiler
- Communication style mapper
- Values alignment assessor
- Relationship dynamics analyzer

### Type C: Mini-Games

**Best For**: Engagement-focused learning, younger audiences

**Core Features**:
- Gamified practice scenarios
- Decision tree simulations
- Score/achievement system
- Leaderboards (optional)
- Quick sessions (2-5 minutes)

**Example Apps**:
- Perspective-taking simulator
- Reframe challenge game
- Value alignment puzzles
- Story choice adventures

---

## App Generation Prompt Template

Use this prompt to generate a companion app specification:

```markdown
# Companion App Generation Request

## Source Book

**Title**: [Book title]
**Core Framework**: [Brief description of main methodology]
**Three Portals/Approaches**: 
1. [Portal 1]
2. [Portal 2]
3. [Portal 3]

## App Requirements

### App Type
Choose one: [ ] Practice Platform  [ ] Assessment System  [ ] Mini-Game

### Primary Use Case
- **When**: [When will users open this app?]
- **Duration**: [How long is a typical session?]
- **Frequency**: [Daily? Weekly? As-needed?]
- **Transformation**: [What changes after consistent use?]

### Target Audience
- **Demographics**: [Age, profession, etc.]
- **Pain Points**: [What are they struggling with?]
- **Tech Comfort**: [High/Medium/Low]
- **Device**: [Mobile-first? Desktop? Both?]

### Core Exercises
List 3-5 exercises from the book that should become app features:

1. **[Exercise Name]**
   - Input: [What user provides]
   - Process: [What happens]
   - Output: [What user receives]
   - Time: [Duration]

2. **[Exercise Name]**
   - Input: [What user provides]
   - Process: [What happens]
   - Output: [What user receives]
   - Time: [Duration]

[Add more as needed]

### Tracking & Progress
What should the app track over time?
- [ ] Streak/consistency
- [ ] Completed exercises
- [ ] Personal insights/entries
- [ ] Transformation metrics
- [ ] Other: [Specify]

### Design Constraints
- Single-file HTML/CSS/JS (PWA)
- LocalStorage for persistence
- No backend required
- Offline-capable
- Export functionality

---

## Requested Output

Please generate:

1. **App Specification**
   - Name and tagline
   - Feature list
   - User flow diagrams
   - Data model

2. **Screen Designs**
   - Home/Dashboard
   - Exercise flow
   - Results/Progress view
   - Settings

3. **Implementation**
   - Complete HTML file (single-file PWA)
   - Manifest.json for PWA
   - Service worker (optional)

4. **Integration Points**
   - Link back to book offer
   - Analytics hooks
   - Share functionality
```

---

## Practice Platform Template

### Core Structure

```javascript
// Practice Platform Data Model
const appData = {
    user: {
        name: '',
        startDate: null,
        streak: 0,
        longestStreak: 0,
        totalSessions: 0
    },
    exercises: {
        // Exercise tracking by type
        reframe: { completed: 0, lastDone: null },
        reflection: { completed: 0, lastDone: null },
        visualization: { completed: 0, lastDone: null }
    },
    journal: [
        // { date, type, content, insights }
    ],
    insights: [
        // User-generated insights over time
    ],
    settings: {
        reminderTime: '09:00',
        dailyGoal: 1,
        theme: 'dark'
    }
};
```

### Essential Screens

1. **Home/Dashboard**
   - Current streak display
   - Today's recommended exercise
   - Quick stats
   - Recent insights

2. **Exercise Flow**
   - Exercise selection
   - Guided steps
   - Input/interaction
   - Result/insight
   - Save/share

3. **Journal/History**
   - Past entries
   - Search/filter
   - Export capability

4. **Progress**
   - Streak calendar
   - Completion stats
   - Transformation metrics
   - Achievements

5. **Settings**
   - Notifications
   - Export data
   - Theme
   - About/help

---

## Assessment System Template

### Core Structure

```javascript
// Assessment System Data Model
const appData = {
    user: {
        name: '',
        email: ''
    },
    assessments: [
        {
            id: 'assessment_001',
            type: 'narrative_identity',
            date: null,
            answers: [],
            result: {
                type: '',
                scores: {},
                insights: []
            }
        }
    ],
    history: [
        // Past assessment results for comparison
    ]
};
```

### Essential Screens

1. **Assessment Selection**
   - Available assessments
   - Time estimates
   - Past results summary

2. **Assessment Flow**
   - Question display
   - Progress indicator
   - Answer selection
   - Smooth transitions

3. **Results Display**
   - Primary type/result
   - Score visualization
   - Detailed breakdown
   - Actionable insights
   - Share/export

4. **Comparison View**
   - Results over time
   - Growth areas
   - Pattern recognition

---

## Mini-Game Template

### Core Structure

```javascript
// Mini-Game Data Model
const appData = {
    user: {
        name: '',
        level: 1,
        experience: 0,
        achievements: []
    },
    games: {
        perspective_shift: {
            highScore: 0,
            gamesPlayed: 0,
            totalScore: 0
        },
        reframe_challenge: {
            highScore: 0,
            gamesPlayed: 0,
            streak: 0
        }
    },
    dailyChallenge: {
        completed: false,
        lastCompleted: null
    }
};
```

### Essential Screens

1. **Game Selection**
   - Available games
   - High scores
   - Daily challenge

2. **Game Play**
   - Scenario/prompt
   - Timer (if timed)
   - Input mechanism
   - Score feedback

3. **Results**
   - Score display
   - Comparison to average
   - Unlocks/achievements
   - Share option

4. **Profile/Progress**
   - Level/XP
   - Achievements
   - Statistics

---

## PWA Implementation Template

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#0a0908">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <title>[App Name] — [Book Title] Companion</title>
    <meta name="description" content="[App description]">
    
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="icon-192.png">
    
    <!-- Preconnect to fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=[Font]&display=swap" rel="stylesheet">
    
    <style>
        /* Inline styles for single-file architecture */
    </style>
</head>
<body>
    <div id="app">
        <!-- App screens rendered here -->
    </div>
    
    <script>
        /* Inline JavaScript */
        
        // Data persistence
        const Storage = {
            save: (data) => localStorage.setItem('app_data', JSON.stringify(data)),
            load: () => JSON.parse(localStorage.getItem('app_data') || '{}'),
            export: () => JSON.stringify(Storage.load(), null, 2)
        };
        
        // App state management
        const App = {
            data: Storage.load(),
            screens: {},
            currentScreen: 'home',
            
            init() {
                this.loadData();
                this.render();
                this.bindEvents();
            },
            
            navigate(screen) {
                this.currentScreen = screen;
                this.render();
            },
            
            render() {
                const container = document.getElementById('app');
                container.innerHTML = this.screens[this.currentScreen]?.render() || '';
            },
            
            save() {
                Storage.save(this.data);
            }
        };
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => App.init());
    </script>
</body>
</html>
```

### Manifest Template

```json
{
    "name": "[Full App Name]",
    "short_name": "[Short Name]",
    "description": "[Description]",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0a0908",
    "theme_color": "#d4a574",
    "icons": [
        {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

---

## Integration with Book Landing Page

### Linking from Landing Page

```html
<!-- On book landing page -->
<section class="app-promo">
    <h3>Continue Your Practice</h3>
    <p>Download the companion app for daily exercises and tracking.</p>
    <a href="/apps/[book-name]/" class="btn btn-primary">
        Open Practice App
    </a>
</section>
```

### Linking back to Book

```html
<!-- In companion app -->
<div class="app-footer">
    <p>Based on <a href="/books/[book-name]/">[Book Title]</a></p>
    <a href="/books/[book-name]/#offer" class="btn btn-secondary">
        Get the Full Book
    </a>
</div>
```

### Shared Analytics

```javascript
// Use same analytics system
if (typeof BookAnalytics !== 'undefined') {
    BookAnalytics.track('app_session_start', {
        app: '[app-name]',
        source: 'companion_app'
    });
}
```

---

## Example: Reframe Practice App

### Specification

**Name**: Reframe Daily
**Tagline**: Transform your inner critic in 5 minutes a day

**Features**:
- Daily reframe challenge
- Voice journal (optional)
- Progress tracking
- Streak system
- Export insights

### User Flow

```
┌──────────┐    ┌───────────────┐    ┌──────────────┐    ┌──────────┐
│  Open    │ →  │ Today's       │ →  │ Complete     │ →  │ See      │
│  App     │    │ Challenge     │    │ Reframe      │    │ Progress │
└──────────┘    └───────────────┘    └──────────────┘    └──────────┘
                       ↓
                ┌───────────────┐
                │ Optional:     │
                │ Journal Entry │
                └───────────────┘
```

### Screen: Daily Challenge

```html
<div class="challenge-screen">
    <header>
        <span class="streak">🔥 7 day streak</span>
        <h1>Today's Reframe</h1>
    </header>
    
    <div class="challenge-card">
        <p class="prompt">What negative thought has been loudest lately?</p>
        <textarea placeholder="Write it exactly as it sounds in your head..."></textarea>
    </div>
    
    <button class="btn-reframe">Find the Gift</button>
    
    <div class="reframe-result" style="display: none;">
        <h3>The Positive Intention</h3>
        <p class="reframe-text"></p>
        <div class="actions">
            <button class="btn-journal">Add to Journal</button>
            <button class="btn-share">Share Insight</button>
        </div>
    </div>
</div>
```

---

## Quality Checklist

Before finalizing any companion app:

### Functionality
- [ ] All exercises work correctly
- [ ] Data persists across sessions
- [ ] Export functionality works
- [ ] Offline mode functional

### User Experience
- [ ] Clear onboarding
- [ ] Intuitive navigation
- [ ] Fast load time (<2s)
- [ ] Responsive design
- [ ] Touch-friendly (44px min targets)

### Integration
- [ ] Links back to book landing
- [ ] Analytics tracking integrated
- [ ] Consistent branding
- [ ] Share functionality

### PWA Requirements
- [ ] Manifest.json valid
- [ ] Service worker registered
- [ ] App icon at multiple sizes
- [ ] Theme color set
- [ ] Installable on mobile

---

## Evolution & Analytics

Track these metrics for app optimization:

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Daily Active Users | Growing | Core engagement |
| Session Duration | 3-5 min | Right depth |
| Completion Rate | >60% | Exercise quality |
| Streak Length | 7+ days | Habit formation |
| Return Rate | >40% | Lasting value |
| Book Referrals | Track | Revenue tie |

---

**Version**: 1.0.0
**Next Evolution**: Add AI-powered personalization based on usage patterns


