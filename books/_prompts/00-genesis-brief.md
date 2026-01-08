@docs/prompts /councilplease use all needed prompts to

give suggestions on creating a best solution (improvement ideas for this project

So I'm basically trying to build my first book. This book is synthesis of two other books. I want to create really interesting synthesis and then I would like to create a custom landing page for it. I really love how you did it with masterpieces projects. So I want some really awesome ideas. Really awesome approach to sell this. I'm not focused on mobile application yet, but I really want to give some interesting tools, maybe smaller reflection tools like you have created in perspectives. So use anything to make it the best one and yeah, integrate. Don't integrate it actually. I would like you to create everything you need in just one file. You can also set up all the prompts that you think I will need maybe in future to improve this project. So yeah, create another masterpiece for this. This is basically my first start with this. I'm planning after that to scale it and to create a couple of books that I will be selling with really interesting approaches for the sell. I might also create some beneficial applications that will be very specific to each of the book.

================================================================================
CODEBASE EXPORT
Generated from: /Users/nazartrynko/narrative-identity-synthesis
================================================================================

================================================================================

# File: .gitignore

================================================================================

# Dependencies

node_modules/
/.pnp
.pnp.js

# Testing

/coverage
\*.log

# Next.js

.next/
/.next/
/out/
next-env.d.ts

# Production

/build
/dist

# Misc

.DS_Store
\*.pem

# Debug

npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Local env files

.env
.env\*.local
.env.development.local
.env.test.local
.env.production.local

# Vercel

.vercel

# TypeScript

\*.tsbuildinfo
next-env.d.ts

# Prisma

# Note: schema.prisma should be committed, but generated client should not

# Uncomment if you have Prisma generate outputs you don't want to commit

# prisma/migrations/dev.db

# prisma/migrations/dev.db-journal

# IDE - VSCode

.vscode/_
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
_.code-workspace

# IDE - JetBrains

.idea/
_.iml
_.iws
\*.ipr
out/

# IDE - Vim

_.swp
_.swo
\*~
.vim/

# IDE - Emacs

_~
\#_\#
.\#\*

# OS - macOS

.DS*Store
.AppleDouble
.LSOverride
Icon
.*\*
.Spotlight-V100
.Trashes

# OS - Windows

Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
_.stackdump
[Dd]esktop.ini
$RECYCLE.BIN/
_.cab
_.msi
_.msix
_.msm
_.msp
\*.lnk

# OS - Linux

_~
.fuse_hidden_
.directory
.Trash-_
.nfs_

# Temporary files

_.tmp
_.temp
.cache/
.turbo/

# Build outputs

_.map
_.min.js
\*.min.css

# Package manager lock files (optional - uncomment if you don't want to commit them)

# package-lock.json

# yarn.lock

# pnpm-lock.yaml

================================================================================

# File: README.md

================================================================================

# Narrative Identity Transformation

**Rewriting Your Self: A Practical Guide to Identity Transformation through Narrative and NLP**

---

## Overview

This project synthesizes Dan P. McAdams' narrative identity theory with Richard Bandler's NLP techniques to create a comprehensive system for intentional identity transformation. It includes:

- **Book**: A complete manuscript with three transformation approaches
- **Platform**: A web application companion for guided exercises and tracking
- **Research**: Foundation documents analyzing both source methodologies

## The Three Approaches

### 1. Narrative Anchoring

Work with states and submodalities to access and transform narrative identity states.

- State anchoring and management
- Submodality modification
- Timeline therapy
- Trance-based narrative work

### 2. Dialogical Transformation

Integrate the multiple voices of your dialogical self into coherent identity.

- Voice mapping and characterization
- Positive intention discovery
- Parts integration techniques
- Unified narrative construction

### 3. Generative Storytelling

Actively construct empowering life narratives using language patterns.

- Storytelling mode switching (dramatic/reflective)
- Milton Model language enhancement
- Redemptive narrative construction
- Future self immersion

## Project Structure

```
narrative-identity-synthesis/
├── research/                      # Research analysis documents
│   ├── 01-identity-and-story-analysis.md
│   ├── 02-trance-formation-analysis.md
│   └── 03-synthesis-framework.md
├── book/                          # Book manuscript
│   ├── BOOK_STRUCTURE.md          # Complete chapter outline
│   ├── chapters/                  # Chapter content
│   │   ├── 00-introduction.md
│   │   ├── 01-narrative-identity.md
│   │   ├── approach-1-narrative-anchoring.md
│   │   ├── approach-2-dialogical-transformation.md
│   │   └── approach-3-generative-storytelling.md
│   ├── exercises/                 # Exercise guides
│   │   └── complete-exercise-guide.md
│   └── appendices/
├── platform/                      # Web application
│   ├── src/
│   │   ├── app/                   # Next.js app pages
│   │   ├── components/            # React components
│   │   │   ├── ui/                # UI components
│   │   │   ├── story/             # Story builder components
│   │   │   └── voicemap/          # Voice map components
│   │   ├── store/                 # Zustand state management
│   │   └── data/                  # Exercise data
│   ├── package.json
│   └── tailwind.config.ts
└── docs/                          # Documentation
    └── PLATFORM_DESIGN.md         # Technical design document
```

## Getting Started

### Book Content

The book content is in Markdown format in the `book/` directory. See `book/BOOK_STRUCTURE.md` for the complete chapter outline.

### Platform Development

1. Navigate to the platform directory:

   ```bash
   cd platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

### Book Features

- 19 comprehensive chapters
- 50+ guided exercises
- Real-world case studies
- Reflection questions for each chapter
- Assessment tools for approach selection

### Platform Features

- **Story Builder**: Interactive timeline for life narrative mapping
- **Voice Map Studio**: Visual mapping of dialogical self
- **NLP Practice Lab**: Guided exercises with step-by-step instructions
- **Progress Tracking**: Streaks, achievements, and insights
- **Daily Practice**: Morning intentions and evening reflections
- **Journal**: Structured and free-form journaling

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Animation**: Framer Motion
- **State Management**: Zustand with persistence
- **Charts**: Recharts
- **Icons**: Lucide React

## Research Foundation

The synthesis draws from:

**Narrative Identity Theory**:

- McAdams' Life Story Model
- Redemption and contamination sequences
- Dialogical self theory (Raggatt)
- Springboard effect (Pals)

**NLP Techniques**:

- Anchoring and state management
- Submodality work
- Timeline therapy
- Milton Model language patterns
- Parts integration
- Trance induction

## Contributing

This project welcomes contributions. Areas where help is particularly appreciated:

1. **Content**: Case studies, exercises, translations
2. **Platform**: New features, UI improvements, accessibility
3. **Research**: Additional integration points, evidence review

## License

This project is for educational purposes. Please respect copyright of source materials.

## Acknowledgments

- Dan P. McAdams for narrative identity research
- Richard Bandler for NLP techniques
- Contributors to the narrative psychology literature
- All participants who shared their transformation stories

---

_Identity is a story. You are its author._

================================================================================

# File: research/01-identity-and-story-analysis.md

================================================================================

# Research Analysis: Identity and Story - Creating Self in Narrative

## Dan P. McAdams, Ruthellen Josselson, and Amia Lieblich (Eds.)

---

## Executive Summary

This book presents narrative identity as the internalized, evolving story of the self that integrates the reconstructed past, perceived present, and anticipated future. The contributors explore how people construct coherent life stories and navigate identity through storytelling.

---

## Core Theoretical Framework

### 1. Narrative Identity Theory (McAdams)

**Key Concept**: Identity is fundamentally a story—a personal myth that we construct and reconstruct throughout life to make meaning of our experiences.

**Components**:

- **Life Story Model**: Identity = internalized narrative of self
- **Redemptive Sequences**: Bad experiences lead to good outcomes
- **Contamination Sequences**: Good experiences lead to bad outcomes
- **Nuclear Episodes**: Key scenes that define the narrative

### 2. Three Fundamental Dialectics

The book organizes identity formation around three core tensions:

#### A. Unity vs. Multiplicity

- **Question**: Is the self singular or multiple?
- **Key Insight**: The dialogical self contains multiple "I-positions" that can conflict or harmonize
- **Application**: Identity work involves integrating multiple narrative voices

#### B. Self vs. Society

- **Question**: How do social contexts shape personal narratives?
- **Key Insight**: Stories are co-constructed through social interaction
- **Application**: Identity emerges through collaborative narration

#### C. Stability vs. Growth

- **Question**: How does identity remain continuous while allowing transformation?
- **Key Insight**: The "springboard effect" allows past experiences to launch future growth
- **Application**: Narrative reconstruction enables identity transformation

---

## Key Concepts Extracted

### 1. Dialogical Self (Raggatt, Chapter 1)

**Definition**: The self as a dynamic multiplicity of "I-positions" engaged in dialogue.

**Core Elements**:

- Multiple narrative voices within one person
- Positions can be in conflict or harmony
- Integration creates coherent identity

**Practical Applications**:

- Personality Web Protocol for mapping identity positions
- Multidimensional scaling to visualize voice relationships
- Taxonomy of attachments (positive/negative, internal/external)

**Types of Self-Positions**:

- Humiliated self
- Wild self
- Manhood self
- Internal critics and supporters

### 2. Personal Positioning (Raggatt)

**Definition**: The process of locating oneself within narrative space.

**Two Types**:

1. **Personal Positioning**: How one sees oneself in relation to the story
2. **Social Positioning**: How one positions oneself in relation to others

**Relevance**: Understanding positioning helps identify limiting narratives and create space for new stories.

### 3. Coherence and Conflict (Hartman Halbertal & Koren, Chapter 2)

**Key Study**: Gay and lesbian Orthodox Jews navigating conflicting identities.

**Insights**:

- **"Being" vs. "Doing"**: Conflict between identity (being gay) and behavior (religious practice)
- **Integration Strategies**: Various approaches to reconciling seemingly incompatible identities
- **Coherence Work**: Active effort to create unified narrative from contradictions

**Application**: Techniques for resolving narrative conflicts and creating coherent life stories.

### 4. The Raw and the Bland (Gregg, Chapter 3)

**Structural Model of Narrative Identity**:

**Surface vs. Deep Structure**:

- **Surface Structure**: The told story (what we say)
- **Deep Structure**: Underlying patterns and meanings

**Key Categories**:

- Story episodes (table of narrative units)
- Syntagmatic/plot structure
- Paradigmatic relationships

**Application**: Analyzing narrative patterns to understand identity formation.

### 5. Creative Work, Love, and Dialectic (McAdams & Logan, Chapter 4)

**Key Finding**: Life stories of academics reveal patterns of:

- Unity vs. disintegration
- Robots vs. authentic expression
- Integration of work and love narratives

**Script Theory**: Life stories follow cultural and personal scripts.

### 6. Identity Light (McLean & Thorne, Chapter 5)

**Concept**: Entertainment stories as vehicles for self-development.

**Key Insights**:

- Media narratives provide templates for identity construction
- "Self-defining moments" from entertainment shape personal identity
- Stories provide safe space for identity exploration

**Application**: Using narrative templates strategically for identity development.

### 7. Collaborative Construction (Pasupathi, Chapter 6)

**Key Concept**: "Silk from Sows' Ears" - transforming everyday experiences into meaningful narratives through collaboration.

**Storytelling Modes**:

1. **Dramatic Mode**: Emphasis on action, emotion, immediacy
2. **Reflective Mode**: Emphasis on meaning, interpretation, lessons

**Key Finding**: Switching between modes enables different types of identity work.

**Collaborative Narration Elements**:

- Self-construction through dialogue
- Here-and-now vs. then-and-there storytelling
- Paradigmatic thought integration

### 8. Gay Identity Construction (Cohler & Hammack, Chapter 7)

**Key Insights**:

- Identity coherence through narrative mastery
- Cultural narratives shape personal stories
- Historical context (pre/post Stonewall) affects identity construction

**Application**: Understanding how cultural templates shape personal narratives.

### 9. The Springboard Effect (Pals, Chapter 8)

**Critical Concept for NLP Integration**

**Definition**: The process by which past experiences become launching points for personal growth.

**Components**:

1. **Causal Connections**: Linking past events to present self
2. **Self-Making**: Active construction of identity from experiences
3. **Growth Within Story**: Narrative enables transformation

**Steps to Self-Making**:

1. Acknowledge the difficult experience
2. Explore its impact
3. Find positive outcome/meaning
4. Integrate into growth narrative

**Application**: Creating springboard effects through intentional narrative reconstruction.

### 10. Malcolm X Identity Analysis (Barresi, Chapter 9)

**Key Insight**: Multiple identity transformations through life.

**Framework**:

- Social identity vs. personal identity
- Script theory applied to radical transformation
- Identity reconstruction through narrative rewriting

### 11. Personal Ideology (de St. Aubin et al., Chapter 10)

**Two Ideology Dimensions**:

| Dimension          | Poles                    | Characteristics             |
| ------------------ | ------------------------ | --------------------------- |
| Humanist-Normative | Humanists vs. Normatives | Open vs. traditional values |
| Agency-Communion   | Agentic vs. Communal     | Self-focus vs. other-focus  |

**Key Techniques**:

- **"Selfing"**: The process of active identity construction
- **Life Story Interview**: Structured method for eliciting narrative identity
- **Transpersonal Analysis**: Understanding transcendent aspects of identity

### 12. Narrative Forms and Identity (Tuval-Mashiach, Chapter 11)

**Israeli Men and Women Study**

**Narrative Trajectory Types**:

1. **Progressive Narrative**: Upward movement, growth
2. **Regressive Narrative**: Downward movement, decline
3. **Stable Narrative**: Consistent, even trajectory

**Gender Differences**:

- Women: More relational narratives, supplementary narratives
- Men: More agentic narratives, career-focused

---

## Methodological Tools

### 1. Life Story Interview

- Structured approach to eliciting narrative identity
- Focuses on key scenes, characters, and themes
- Can be adapted for therapeutic use

### 2. Personality Web Protocol

- Visual mapping of identity positions
- Identifies attachments and their valences
- Uses multidimensional scaling

### 3. Content Analysis

- Identifying narrative themes
- Coding for redemption/contamination sequences
- Tracking narrative coherence

### 4. Narrative Trajectory Analysis

- Mapping story direction over time
- Identifying turning points
- Assessing narrative movement

---

## Key Themes for NLP Integration

### 1. Narrative States

Stories create and maintain psychological states. NLP can anchor, modify, and transform these states.

### 2. Voice Integration

The dialogical self's multiple voices parallel NLP's "parts work." Integration techniques apply directly.

### 3. Reframing

Contamination sequences can be reframed to redemption sequences using NLP reframing techniques.

### 4. Timeline Work

Narrative trajectory aligns with NLP timeline therapy. Both work with temporal organization of experience.

### 5. Language Patterns

Story construction uses specific language patterns that can be enhanced with Milton Model language.

### 6. Future Pacing

Creating compelling future narratives aligns with NLP future pacing techniques.

---

## Quotes for Book Development

> "Identity is the story we tell ourselves about ourselves."

> "The springboard effect occurs when individuals use difficult past experiences as launching points for positive development."

> "The dialogical self is a dynamic multiplicity of I-positions in a landscape of the mind."

> "Narrative coherence is not given; it is achieved through active identity work."

---

## Integration Points with NLP

| Narrative Identity Concept | NLP Technique        | Integration Application                   |
| -------------------------- | -------------------- | ----------------------------------------- |
| Dialogical self            | Parts integration    | Harmonizing narrative voices              |
| Redemption sequences       | Reframing            | Transforming contamination to redemption  |
| Springboard effect         | Timeline therapy     | Creating growth from past experiences     |
| Narrative states           | Anchoring            | Accessing and stabilizing identity states |
| Story modes                | Modeling             | Switching between dramatic/reflective     |
| Coherence work             | Meta-model           | Clarifying and strengthening narratives   |
| Future identity            | Future pacing        | Creating compelling future stories        |
| Personal positioning       | Perceptual positions | Exploring identity from multiple angles   |

---

## Summary

"Identity and Story" provides a robust theoretical foundation for understanding how narratives shape identity. The key insights—dialogical self, springboard effect, collaborative construction, and narrative coherence—all align powerfully with NLP techniques for personal transformation. The synthesis potential is significant.

================================================================================

# File: research/02-trance-formation-analysis.md

================================================================================

# Research Analysis: Richard Bandler's Guide to Trance-Formation

## Richard Bandler

---

## Executive Summary

Bandler's "Guide to Trance-Formation" presents practical techniques for inducing altered states and creating lasting personal change. The book emphasizes that trance is a natural, everyday phenomenon that can be intentionally leveraged for transformation. Key focus areas include state management, submodality work, timeline manipulation, and linguistic influence patterns.

---

## Core Theoretical Framework

### 1. The Nature of Trance

**Key Principle**: Trance is not an unusual state but a natural, everyday occurrence that we enter and exit constantly.

**Bandler's Definition**: Trance is focused attention where the unconscious mind becomes more accessible and suggestible.

**Types of Trance**:

- Problem trances (negative states we habitually enter)
- Resource trances (empowering states)
- Learning trances (states optimal for change)
- Creative trances (states for innovation)

**Key Insight**: Most psychological problems are "problem trances" that people have become stuck in. The solution is learning to access different, more resourceful trance states.

### 2. The Structure of Subjective Experience

**Foundation**: Experience is constructed from internal representations coded in sensory modalities.

**VAKOG Model**:

- **V**isual: Internal images
- **A**uditory: Internal sounds/voice
- **K**inesthetic: Internal feelings
- **O**lfactory: Internal smells
- **G**ustatory: Internal tastes

**Submodalities**: The finer distinctions within each modality that determine the intensity and meaning of experience.

### 3. Change Principles

**Core Principle**: "It's never too late to have a happy childhood."

**Implications**:

- Memories are reconstructions, not fixed recordings
- The past can be reprocessed and reframed
- Future possibilities are equally malleable
- Present state determines experience of past and future

---

## Key Techniques Extracted

### 1. State Management

**Definition**: The ability to consciously choose and maintain psychological states.

**Components**:

- State elicitation
- State amplification
- State anchoring
- State chaining
- State interruption (pattern interrupt)

**Key Techniques**:

#### A. Anchoring

**Process**:

1. Elicit desired state (remember/imagine)
2. At peak intensity, create anchor (touch, word, gesture)
3. Break state
4. Test anchor
5. Stack additional instances

**Types of Anchors**:

- Kinesthetic (touch-based)
- Auditory (sound/word-based)
- Visual (image/gesture-based)
- Spatial (location-based)

#### B. Chaining Anchors

**Purpose**: Move from unresourceful state to resourceful state through intermediate states.

**Process**:

1. Identify current unwanted state
2. Map desired end state
3. Identify intermediate states
4. Anchor each state
5. Fire anchors in sequence

#### C. Collapsing Anchors

**Purpose**: Neutralize negative states by combining with positive states.

**Process**:

1. Anchor negative state on one location
2. Anchor stronger positive state on another location
3. Fire both simultaneously
4. Observe integration

### 2. Submodality Work

**Definition**: Working with the fine distinctions in sensory experience to change meaning and intensity.

**Visual Submodalities**:

- Brightness/darkness
- Color/black-and-white
- Size (large/small)
- Distance (near/far)
- Location (where in visual field)
- Focus (sharp/blurry)
- Movement (still/moving)
- Associated/dissociated (seeing through own eyes vs. watching self)

**Auditory Submodalities**:

- Volume
- Pitch (high/low)
- Tempo (fast/slow)
- Location
- Tonality
- Internal/external voice

**Kinesthetic Submodalities**:

- Intensity
- Location in body
- Size
- Temperature
- Pressure
- Movement

**Key Techniques**:

#### A. Swish Pattern

**Purpose**: Replace unwanted automatic response with desired response.

**Process**:

1. Identify trigger image (cue for unwanted behavior)
2. Create desired self-image (who you want to be)
3. Place trigger large and bright
4. Place desired image small and dark in corner
5. Swish: quickly shrink trigger while expanding desired image
6. Clear screen
7. Repeat 5-7 times rapidly
8. Test

#### B. Mapping Across

**Purpose**: Transfer qualities from one experience to another.

**Process**:

1. Identify experience with desired qualities
2. Identify experience to be changed
3. Map the submodality differences
4. Adjust submodalities of #2 to match #1

#### C. Threshold Pattern (Fast Phobia Cure)

**Purpose**: Rapid removal of phobic responses.

**Process**:

1. Establish resourceful state
2. See self in movie theater watching screen
3. Watch movie of phobic experience in black and white
4. At end, step into movie and run it backward in color
5. Repeat rapidly multiple times

### 3. Timeline Therapy

**Foundation**: Our sense of time is spatially organized in our minds.

**Key Concept**: We can access, modify, and reorganize experiences along our personal timeline.

**Types of Timeline Organization**:

- Through-time: Timeline in front of person
- In-time: Timeline passes through person
- Variations: Angle, distance, clarity

**Techniques**:

#### A. Timeline Elicitation

1. Think of something you did this morning
2. Notice where that memory is located in space
3. Think of something from yesterday
4. Notice its location
5. Continue with last week, month, year
6. Map the line connecting these points

#### B. Timeline Reimprinting

**Purpose**: Change the emotional impact of past memories.

**Process**:

1. Float above timeline
2. Go back to memory to be changed
3. From above, add resources that would have helped
4. Come back to present, integrating changes
5. Notice how future has shifted

#### C. Future Pacing

**Purpose**: Create compelling future experiences.

**Process**:

1. Identify desired outcome
2. Create vivid internal representation
3. Place on timeline in future
4. Associate into experience
5. Make rich and compelling
6. Install as attractor

### 4. Milton Model Language Patterns

**Origin**: Modeled from Milton Erickson's hypnotic language.

**Purpose**: Use language that bypasses conscious resistance and speaks to the unconscious.

**Key Patterns**:

#### A. Artfully Vague Language

- **Nominalizations**: "Your understanding will deepen"
- **Unspecified Verbs**: "You can change in ways that matter"
- **Deletions**: "People can learn" (who? what?)

#### B. Presuppositions

- **Awareness**: "Are you aware of how much you've learned?"
- **Time**: "Before you go into deep trance..."
- **Ordinal**: "What's the first change you'll notice?"

#### C. Embedded Commands

- "You can **relax now** as you read this"
- "I'm wondering if you'll **feel better** soon"

#### D. Quotes

Delivering messages through reported speech: "And my teacher once said to me, 'You can learn anything...'"

#### E. Metaphor and Stories

Using indirect communication through stories and analogies.

### 5. Parts Integration

**Foundation**: The psyche contains multiple "parts" with different intentions.

**Key Concept**: Internal conflicts arise when parts have opposing goals. Resolution comes through integration.

**Visual Squash Technique**:

1. Identify conflicting parts
2. Separate onto two hands
3. Ask each part its positive intention
4. Continue asking for higher intentions
5. Find common ground/shared value
6. Bring hands together slowly
7. Integrate parts into unified whole

### 6. Belief Change

**Foundation**: Beliefs are generalizations that shape perception and behavior.

**Belief Change Patterns**:

#### A. Submodality Belief Change

1. Identify limiting belief
2. Identify doubt (something you're unsure about)
3. Note submodality differences
4. Move limiting belief to doubt location/qualities
5. Move empowering belief to belief location/qualities

#### B. Reimprinting

1. Identify limiting belief
2. Find earliest memory of forming belief
3. Add resources to that younger self
4. Update belief from new understanding
5. Bring forward through timeline

### 7. Strategies

**Definition**: The specific sequence of internal representations that produce a behavior or result.

**TOTE Model**:

- **T**est: Compare current state to desired state
- **O**perate: Do something to change state
- **T**est: Check if desired state achieved
- **E**xit: If achieved, exit strategy

**Key Strategy Work**:

- Elicitation: Discovering the strategy used
- Utilization: Working with existing strategies
- Installation: Installing new strategies
- Design: Creating optimal strategies

---

## Trance Induction Techniques

### 1. Progressive Relaxation

Systematic relaxation of body parts.

### 2. Eye Fixation

Focusing attention until eyelids become heavy.

### 3. Confusion Techniques

Overloading conscious mind to access unconscious.

### 4. Embedded Commands

Weaving commands into normal conversation.

### 5. Pacing and Leading

Matching current experience, then leading to desired state.

### 6. Metaphor and Story

Using narrative to induce trance and deliver suggestions.

---

## Key Principles for Change

### 1. Ecology Check

Always verify that changes are beneficial to the whole system:

- "What would happen if you made this change?"
- "Is there any part of you that objects?"

### 2. Calibration

Developing sensory acuity to notice responses:

- Skin color changes
- Breathing patterns
- Pupil dilation
- Micro-muscle movements

### 3. Flexibility

"The element with the most flexibility in a system will be the controlling element."

### 4. Rapport

Establishing connection through:

- Matching physiology
- Matching language patterns
- Matching values
- Pacing and leading

### 5. Outcome Orientation

Always knowing the desired result:

- What specifically do you want?
- How will you know when you have it?
- What will you see, hear, feel?

---

## Integration Points with Narrative Identity

| NLP Technique     | Narrative Identity Application                              |
| ----------------- | ----------------------------------------------------------- |
| Anchoring         | Anchor narrative identity states (redemptive, progressive)  |
| Submodality work  | Modify the sensory qualities of life story memories         |
| Timeline therapy  | Reorganize narrative chronology, create springboard effects |
| Trance states     | Access states for narrative reconstruction                  |
| Parts integration | Harmonize dialogical self's multiple voices                 |
| Milton Model      | Enhance self-narrative with hypnotic language               |
| Future pacing     | Create compelling future identity narratives                |
| Belief change     | Transform limiting narratives into empowering ones          |
| Reframing         | Shift contamination sequences to redemption sequences       |
| Strategy work     | Install strategies for automatic narrative construction     |

---

## Quotes for Book Development

> "It's never too late to have a happy childhood."

> "The meaning of your communication is the response you get."

> "People are not their behaviors. Accept the person, change the behavior."

> "If what you're doing isn't working, do something else."

> "You have all the resources you need to achieve your desired outcomes."

> "The map is not the territory."

---

## Key Themes for Synthesis

### 1. State as Foundation

Both fields recognize that psychological states underlie experience. NLP provides precise tools for state management; narrative identity explains how stories create and maintain states.

### 2. Malleability of Memory

NLP's "memories are constructions" aligns with narrative identity's emphasis on life story reconstruction.

### 3. Future Orientation

NLP's future pacing parallels narrative identity's anticipated future as part of identity.

### 4. Multiple Selves

NLP's parts work aligns with the dialogical self's multiple I-positions.

### 5. Language as Change Tool

Both fields recognize language as central to creating change—NLP through linguistic patterns, narrative identity through storytelling.

### 6. Unconscious Processing

NLP's trance work provides access to the same deep processing that narrative identity work requires.

---

## Summary

Bandler's "Guide to Trance-Formation" provides a practical toolkit for personal change that complements narrative identity theory beautifully. Where narrative identity provides the "what" (the stories that form identity), NLP provides the "how" (the techniques to change those stories). The synthesis promises a powerful methodology for intentional identity transformation.

================================================================================

# File: research/03-synthesis-framework.md

================================================================================

# Synthesis Framework: Narrative Identity + NLP Trance-Formation

## Creating a Unified Methodology for Identity Transformation

---

## The Core Synthesis

### Theoretical Foundation

**Narrative Identity (McAdams et al.)** provides:

- Understanding of HOW identity is structured as story
- Framework for analyzing life narratives
- Research-backed concepts (redemption, contamination, springboard)
- The dialogical self model
- Developmental perspective on identity

**NLP Trance-Formation (Bandler)** provides:

- Practical techniques for accessing and modifying experience
- State management tools
- Submodality work for changing internal representations
- Timeline therapy for temporal reorganization
- Language patterns for influence and change
- Parts integration for internal harmony

### The Integration Principle

> **Identity is a story, and stories can be rewritten using the precise tools of NLP.**

---

## Key Synthesis Points

### 1. Narrative States → State Management

**Narrative Identity Insight**: Life stories create and maintain psychological states. A person with a contamination narrative lives in states of disappointment and decline. A person with a redemptive narrative lives in states of hope and growth.

**NLP Application**: These narrative states can be:

- **Elicited**: Through life story interview techniques
- **Anchored**: To create reliable access
- **Modified**: Through submodality changes
- **Transformed**: Through reframing and timeline work

**Synthesis Technique**: **Narrative Anchoring**

1. Identify the emotional state associated with a key life narrative
2. Anchor this state
3. Use the anchor as a gateway to work with the narrative
4. Modify the narrative while in the associated state
5. Re-anchor the transformed narrative state

### 2. Dialogical Self → Parts Integration

**Narrative Identity Insight**: The self contains multiple "I-positions" or voices (humiliated self, wild self, critic, etc.) that can be in conflict.

**NLP Application**: NLP parts integration techniques can harmonize these voices:

- Visual squash for integrating conflicting parts
- Voice dialogue techniques
- Perceptual positions for understanding different voices

**Synthesis Technique**: **Voice Integration Protocol**

1. Map the narrative voices using Personality Web Protocol
2. Identify conflicting voices/positions
3. Use parts integration to find common ground
4. Create a unified narrative that honors all voices
5. Install the integrated identity

### 3. Redemption/Contamination → Reframing

**Narrative Identity Insight**: Life events can be interpreted as redemptive (bad leads to good) or contaminating (good leads to bad).

**NLP Application**: Reframing techniques can shift the interpretation:

- Context reframing
- Content reframing
- Meaning reframing

**Synthesis Technique**: **Narrative Reframe Protocol**

1. Identify contamination sequence in life story
2. Access the memory with appropriate state management
3. Apply reframing questions:
   - "What else could this mean?"
   - "What did you learn from this?"
   - "How has this shaped you positively?"
4. Install the redemptive interpretation
5. Future pace the new understanding

### 4. Springboard Effect → Timeline Therapy

**Narrative Identity Insight**: Difficult past experiences can become "springboards" for growth when properly processed and integrated.

**NLP Application**: Timeline therapy provides tools to:

- Access past experiences from a resourceful position
- Add resources to past memories
- Reprocess the experience with new understanding
- Connect the past to a positive future

**Synthesis Technique**: **Springboard Installation**

1. Identify a difficult past experience
2. Float above timeline to gain perspective
3. Add resources to the past self
4. Identify the growth potential
5. Create causal connection to positive present/future
6. Integrate as part of growth narrative

### 5. Story Construction → Milton Model Language

**Narrative Identity Insight**: Life stories are constructed through language. The way we tell our story shapes our identity.

**NLP Application**: Milton Model language patterns can enhance story construction:

- Artfully vague language opens possibility
- Presuppositions embed empowering beliefs
- Embedded commands guide unconscious
- Metaphors carry change messages

**Synthesis Technique**: **Hypnotic Narrative Construction**

1. Identify desired identity narrative
2. Construct story using Milton Model patterns
3. Include embedded commands for change
4. Use presuppositions for empowering beliefs
5. Deliver to self in trance state

### 6. Future Identity → Future Pacing

**Narrative Identity Insight**: Identity includes not just reconstructed past and perceived present, but anticipated future.

**NLP Application**: Future pacing creates compelling future experiences:

- Rich sensory representations
- Emotional connection
- Behavioral rehearsal
- Timeline installation

**Synthesis Technique**: **Future Identity Installation**

1. Clarify desired future identity
2. Create vivid representation (all modalities)
3. Associate into future self
4. Anchor the future state
5. Place on timeline
6. Create stepping stones from present to future

### 7. Coherence Work → Strategy Installation

**Narrative Identity Insight**: Creating coherent identity requires active "selfing"—ongoing construction of unified narrative.

**NLP Application**: Strategies can be installed for automatic narrative construction:

- Design optimal strategy for story interpretation
- Install pattern for finding meaning
- Create automatic redemptive processing

**Synthesis Technique**: **Narrative Strategy Installation**

1. Model excellent narrative constructors
2. Elicit their strategy for meaning-making
3. Design enhanced strategy
4. Install through rehearsal and trance
5. Test with new experiences

---

## The Three Approaches Detailed

### Approach 1: Narrative Anchoring

**Core Principle**: Use anchoring to create reliable access to narrative identity states, then transform those states and stories.

**Theoretical Base**:

- NLP anchoring technology
- Narrative identity states
- State-dependent memory and learning

**Key Techniques**:

1. **Narrative State Elicitation**: Use life story interview to access states
2. **State Anchoring**: Create anchors for key narrative states
3. **Submodality Modification**: Change the sensory qualities of narratives
4. **Timeline Reorganization**: Restructure temporal experience of life story
5. **Trance Narrative Work**: Use trance to access and modify deep narratives

**Process Flow**:

```
Elicit Life Story → Identify Key Narratives → Anchor States →
Modify in Trance → Install New Narratives → Future Pace
```

**Best For**: People who are primarily kinesthetic, who need to "feel" their stories, who benefit from embodied approaches.

### Approach 2: Dialogical Transformation

**Core Principle**: Use parts integration to harmonize the multiple voices of the dialogical self into a coherent identity narrative.

**Theoretical Base**:

- Dialogical self theory (Raggatt)
- NLP parts integration
- Internal family systems concepts

**Key Techniques**:

1. **Voice Mapping**: Identify all narrative voices/positions
2. **Conflict Resolution**: Find common intentions in conflicting voices
3. **Meta-Model Questioning**: Clarify and challenge limiting narratives
4. **Parts Integration**: Visual squash and other integration techniques
5. **Unified Narrative Construction**: Create coherent story honoring all voices

**Process Flow**:

```
Map Voices → Identify Conflicts → Find Common Ground →
Integrate Parts → Construct Unified Narrative → Install
```

**Best For**: People with strong internal conflict, perfectionists, those with clear different "parts" of themselves.

### Approach 3: Generative Storytelling

**Core Principle**: Actively construct empowering life narratives using NLP language patterns and story construction techniques.

**Theoretical Base**:

- Story modes (dramatic/reflective)
- Milton Model language
- Narrative construction theory

**Key Techniques**:

1. **Mode Switching**: Consciously choose dramatic or reflective mode
2. **Language Enhancement**: Use Milton Model for powerful narratives
3. **Redemptive Construction**: Build redemption sequences into stories
4. **Future Narrative Creation**: Develop compelling future stories
5. **Meta-Program Alignment**: Shift narrative patterns (toward/away, etc.)

**Process Flow**:

```
Assess Current Narrative → Choose Mode → Apply Language Patterns →
Construct New Story → Future Pace → Rehearse and Install
```

**Best For**: Writers, verbal processors, those who love language, creative types.

---

## Integration Matrix

| Identity Challenge      | Approach 1           | Approach 2                  | Approach 3                     |
| ----------------------- | -------------------- | --------------------------- | ------------------------------ |
| Stuck in negative state | Anchor and transform | Identify part causing state | Rewrite narrative              |
| Internal conflict       | Collapse anchors     | Parts integration           | Create unified story           |
| Traumatic past          | Timeline therapy     | Resource parts              | Redemptive reframe             |
| Unclear identity        | Anchor core states   | Map all voices              | Construct clear narrative      |
| Fear of future          | Future pace          | Integrate fearful part      | Create compelling future story |
| Lack of coherence       | Chain states         | Integrate voices            | Build coherent narrative       |

---

## Assessment Framework

### Determining Best Approach

**Approach 1 Indicators (Narrative Anchoring)**:

- Strong kinesthetic processing
- Clear emotional responses to stories
- Benefit from embodied techniques
- History of successful anchoring work
- Need for state stability first

**Approach 2 Indicators (Dialogical Transformation)**:

- Clear internal conflict
- Multiple distinct "parts" or voices
- History of self-criticism
- Perfectionism patterns
- Identity confusion

**Approach 3 Indicators (Generative Storytelling)**:

- Strong verbal/linguistic processing
- Enjoy writing or storytelling
- Already narrative-focused
- Creative orientation
- Future-focused thinking

### Combined Approach

Most people benefit from elements of all three. Suggested integration:

1. **Foundation**: Start with Approach 1 (Anchoring) to stabilize states
2. **Resolution**: Use Approach 2 (Dialogical) to resolve conflicts
3. **Construction**: Use Approach 3 (Generative) to create new narratives
4. **Maintenance**: Ongoing use of all three as needed

---

## Core Exercises

### Exercise 1: Life Story Anchor Point

From Approach 1 - Creates stable access to narrative identity states.

### Exercise 2: Voice Mapping

From Approach 2 - Identifies all narrative voices and their relationships.

### Exercise 3: Narrative Language Enhancement

From Approach 3 - Transforms story using powerful language patterns.

### Exercise 4: Springboard Creation

Integrated - Uses timeline work to create growth from difficulty.

### Exercise 5: Future Identity Installation

Integrated - Creates and installs compelling future narrative.

---

## Summary

The synthesis of narrative identity theory and NLP trance-formation creates a powerful methodology for intentional identity transformation. The three approaches—Narrative Anchoring, Dialogical Transformation, and Generative Storytelling—provide multiple pathways suited to different learning styles and challenges. Together, they offer a comprehensive system for:

1. Understanding how identity is structured as story
2. Accessing and modifying the internal representations of that story
3. Resolving conflicts between different aspects of identity
4. Constructing new, empowering narratives
5. Installing those narratives for lasting change

This synthesis represents a genuinely new approach to personal transformation—one grounded in research while offering practical, proven tools for change.

================================================================================

# File: platform/package-lock.json

================================================================================

{
"name": "narrative-identity-app",
"version": "0.1.0",
"lockfileVersion": 3,
"requires": true,
"packages": {
"": {
"name": "narrative-identity-app",
"version": "0.1.0",
"dependencies": {
"@prisma/client": "5.9.0",
"clsx": "2.1.0",
"date-fns": "3.3.1",
"framer-motion": "11.0.3",
"lucide-react": "0.323.0",
"next": "14.1.0",
"react": "18.2.0",
"react-dom": "18.2.0",
"recharts": "2.12.0",
"tailwind-merge": "2.2.1",
"zustand": "4.5.0"
},
"devDependencies": {
"@types/node": "20.11.16",
"@types/react": "18.2.55",
"@types/react-dom": "18.2.19",
"autoprefixer": "10.4.17",
"eslint": "8.56.0",
"eslint-config-next": "14.1.0",
"postcss": "8.4.35",
"prisma": "5.9.0",
"tailwindcss": "3.4.1",
"typescript": "5.3.3"
}
},
"node_modules/@alloc/quick-lru": {
"version": "5.2.0",
"resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
"integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
"dev": true,
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/@babel/runtime": {
"version": "7.28.4",
"resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
"integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
"engines": {
"node": ">=6.9.0"
}
},
"node_modules/@emnapi/core": {
"version": "1.8.1",
"resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.8.1.tgz",
"integrity": "sha512-AvT9QFpxK0Zd8J0jopedNm+w/2fIzvtPKPjqyw9jwvBaReTTqPBk9Hixaz7KbjimP+QNz605/XnjFcDAL2pqBg==",
"dev": true,
"optional": true,
"dependencies": {
"@emnapi/wasi-threads": "1.1.0",
"tslib": "^2.4.0"
}
},
"node_modules/@emnapi/runtime": {
"version": "1.8.1",
"resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.8.1.tgz",
"integrity": "sha512-mehfKSMWjjNol8659Z8KxEMrdSJDDot5SXMq00dM8BN4o+CLNXQ0xH2V7EchNHV4RmbZLmmPdEaXZc5H2FXmDg==",
"dev": true,
"optional": true,
"dependencies": {
"tslib": "^2.4.0"
}
},
"node_modules/@emnapi/wasi-threads": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.1.0.tgz",
"integrity": "sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==",
"dev": true,
"optional": true,
"dependencies": {
"tslib": "^2.4.0"
}
},
"node_modules/@emotion/is-prop-valid": {
"version": "0.8.8",
"resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-0.8.8.tgz",
"integrity": "sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==",
"optional": true,
"dependencies": {
"@emotion/memoize": "0.7.4"
}
},
"node_modules/@emotion/memoize": {
"version": "0.7.4",
"resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.4.tgz",
"integrity": "sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw==",
"optional": true
},
"node_modules/@eslint-community/eslint-utils": {
"version": "4.9.1",
"resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
"integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
"dev": true,
"dependencies": {
"eslint-visitor-keys": "^3.4.3"
},
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
},
"peerDependencies": {
"eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
}
},
"node_modules/@eslint-community/regexpp": {
"version": "4.12.2",
"resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
"integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
"dev": true,
"engines": {
"node": "^12.0.0 || ^14.0.0 || >=16.0.0"
}
},
"node_modules/@eslint/eslintrc": {
"version": "2.1.4",
"resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
"integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
"dev": true,
"dependencies": {
"ajv": "^6.12.4",
"debug": "^4.3.2",
"espree": "^9.6.0",
"globals": "^13.19.0",
"ignore": "^5.2.0",
"import-fresh": "^3.2.1",
"js-yaml": "^4.1.0",
"minimatch": "^3.1.2",
"strip-json-comments": "^3.1.1"
},
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
}
},
"node_modules/@eslint/js": {
"version": "8.56.0",
"resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.56.0.tgz",
"integrity": "sha512-gMsVel9D7f2HLkBma9VbtzZRehRogVRfbr++f06nL2vnCGCNlzOD+/MUov/F4p8myyAHspEhVobgjpX64q5m6A==",
"dev": true,
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
}
},
"node_modules/@humanwhocodes/config-array": {
"version": "0.11.14",
"resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.11.14.tgz",
"integrity": "sha512-3T8LkOmg45BV5FICb15QQMsyUSWrQ8AygVfC7ZG32zOalnqrilm018ZVCw0eapXux8FtA33q8PSRSstjee3jSg==",
"deprecated": "Use @eslint/config-array instead",
"dev": true,
"dependencies": {
"@humanwhocodes/object-schema": "^2.0.2",
"debug": "^4.3.1",
"minimatch": "^3.0.5"
},
"engines": {
"node": ">=10.10.0"
}
},
"node_modules/@humanwhocodes/module-importer": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
"integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
"dev": true,
"engines": {
"node": ">=12.22"
},
"funding": {
"type": "github",
"url": "https://github.com/sponsors/nzakas"
}
},
"node_modules/@humanwhocodes/object-schema": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
"integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
"deprecated": "Use @eslint/object-schema instead",
"dev": true
},
"node_modules/@isaacs/cliui": {
"version": "8.0.2",
"resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
"integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
"dev": true,
"dependencies": {
"string-width": "^5.1.2",
"string-width-cjs": "npm:string-width@^4.2.0",
"strip-ansi": "^7.0.1",
"strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
"wrap-ansi": "^8.1.0",
"wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
},
"engines": {
"node": ">=12"
}
},
"node_modules/@isaacs/cliui/node_modules/ansi-regex": {
"version": "6.2.2",
"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
"integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
"dev": true,
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/ansi-regex?sponsor=1"
}
},
"node_modules/@isaacs/cliui/node_modules/strip-ansi": {
"version": "7.1.2",
"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
"integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
"dev": true,
"dependencies": {
"ansi-regex": "^6.0.1"
},
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/strip-ansi?sponsor=1"
}
},
"node_modules/@jridgewell/gen-mapping": {
"version": "0.3.13",
"resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
"integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
"dev": true,
"dependencies": {
"@jridgewell/sourcemap-codec": "^1.5.0",
"@jridgewell/trace-mapping": "^0.3.24"
}
},
"node_modules/@jridgewell/resolve-uri": {
"version": "3.1.2",
"resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
"integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
"dev": true,
"engines": {
"node": ">=6.0.0"
}
},
"node_modules/@jridgewell/sourcemap-codec": {
"version": "1.5.5",
"resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
"integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
"dev": true
},
"node_modules/@jridgewell/trace-mapping": {
"version": "0.3.31",
"resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
"integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
"dev": true,
"dependencies": {
"@jridgewell/resolve-uri": "^3.1.0",
"@jridgewell/sourcemap-codec": "^1.4.14"
}
},
"node_modules/@napi-rs/wasm-runtime": {
"version": "0.2.12",
"resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
"integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
"dev": true,
"optional": true,
"dependencies": {
"@emnapi/core": "^1.4.3",
"@emnapi/runtime": "^1.4.3",
"@tybys/wasm-util": "^0.10.0"
}
},
"node_modules/@next/env": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/env/-/env-14.1.0.tgz",
"integrity": "sha512-Py8zIo+02ht82brwwhTg36iogzFqGLPXlRGKQw5s+qP/kMNc4MAyDeEwBKDijk6zTIbegEgu8Qy7C1LboslQAw=="
},
"node_modules/@next/eslint-plugin-next": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-14.1.0.tgz",
"integrity": "sha512-x4FavbNEeXx/baD/zC/SdrvkjSby8nBn8KcCREqk6UuwvwoAPZmaV8TFCAuo/cpovBRTIY67mHhe86MQQm/68Q==",
"dev": true,
"dependencies": {
"glob": "10.3.10"
}
},
"node_modules/@next/swc-darwin-arm64": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-14.1.0.tgz",
"integrity": "sha512-nUDn7TOGcIeyQni6lZHfzNoo9S0euXnu0jhsbMOmMJUBfgsnESdjN97kM7cBqQxZa8L/bM9om/S5/1dzCrW6wQ==",
"cpu": [
"arm64"
],
"optional": true,
"os": [
"darwin"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-darwin-x64": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-14.1.0.tgz",
"integrity": "sha512-1jgudN5haWxiAl3O1ljUS2GfupPmcftu2RYJqZiMJmmbBT5M1XDffjUtRUzP4W3cBHsrvkfOFdQ71hAreNQP6g==",
"cpu": [
"x64"
],
"optional": true,
"os": [
"darwin"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-linux-arm64-gnu": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-14.1.0.tgz",
"integrity": "sha512-RHo7Tcj+jllXUbK7xk2NyIDod3YcCPDZxj1WLIYxd709BQ7WuRYl3OWUNG+WUfqeQBds6kvZYlc42NJJTNi4tQ==",
"cpu": [
"arm64"
],
"optional": true,
"os": [
"linux"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-linux-arm64-musl": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-14.1.0.tgz",
"integrity": "sha512-v6kP8sHYxjO8RwHmWMJSq7VZP2nYCkRVQ0qolh2l6xroe9QjbgV8siTbduED4u0hlk0+tjS6/Tuy4n5XCp+l6g==",
"cpu": [
"arm64"
],
"optional": true,
"os": [
"linux"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-linux-x64-gnu": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-14.1.0.tgz",
"integrity": "sha512-zJ2pnoFYB1F4vmEVlb/eSe+VH679zT1VdXlZKX+pE66grOgjmKJHKacf82g/sWE4MQ4Rk2FMBCRnX+l6/TVYzQ==",
"cpu": [
"x64"
],
"optional": true,
"os": [
"linux"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-linux-x64-musl": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-14.1.0.tgz",
"integrity": "sha512-rbaIYFt2X9YZBSbH/CwGAjbBG2/MrACCVu2X0+kSykHzHnYH5FjHxwXLkcoJ10cX0aWCEynpu+rP76x0914atg==",
"cpu": [
"x64"
],
"optional": true,
"os": [
"linux"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-win32-arm64-msvc": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-14.1.0.tgz",
"integrity": "sha512-o1N5TsYc8f/HpGt39OUQpQ9AKIGApd3QLueu7hXk//2xq5Z9OxmV6sQfNp8C7qYmiOlHYODOGqNNa0e9jvchGQ==",
"cpu": [
"arm64"
],
"optional": true,
"os": [
"win32"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-win32-ia32-msvc": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-win32-ia32-msvc/-/swc-win32-ia32-msvc-14.1.0.tgz",
"integrity": "sha512-XXIuB1DBRCFwNO6EEzCTMHT5pauwaSj4SWs7CYnME57eaReAKBXCnkUE80p/pAZcewm7hs+vGvNqDPacEXHVkw==",
"cpu": [
"ia32"
],
"optional": true,
"os": [
"win32"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@next/swc-win32-x64-msvc": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-14.1.0.tgz",
"integrity": "sha512-9WEbVRRAqJ3YFVqEZIxUqkiO8l1nool1LmNxygr5HWF8AcSYsEpneUDhmjUVJEzO2A04+oPtZdombzzPPkTtgg==",
"cpu": [
"x64"
],
"optional": true,
"os": [
"win32"
],
"engines": {
"node": ">= 10"
}
},
"node_modules/@nodelib/fs.scandir": {
"version": "2.1.5",
"resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
"integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
"dev": true,
"dependencies": {
"@nodelib/fs.stat": "2.0.5",
"run-parallel": "^1.1.9"
},
"engines": {
"node": ">= 8"
}
},
"node_modules/@nodelib/fs.stat": {
"version": "2.0.5",
"resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
"integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
"dev": true,
"engines": {
"node": ">= 8"
}
},
"node_modules/@nodelib/fs.walk": {
"version": "1.2.8",
"resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
"integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
"dev": true,
"dependencies": {
"@nodelib/fs.scandir": "2.1.5",
"fastq": "^1.6.0"
},
"engines": {
"node": ">= 8"
}
},
"node_modules/@nolyfill/is-core-module": {
"version": "1.0.39",
"resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
"integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
"dev": true,
"engines": {
"node": ">=12.4.0"
}
},
"node_modules/@pkgjs/parseargs": {
"version": "0.11.0",
"resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
"integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
"dev": true,
"optional": true,
"engines": {
"node": ">=14"
}
},
"node_modules/@prisma/client": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/@prisma/client/-/client-5.9.0.tgz",
"integrity": "sha512-dHvFZgCT0BpRS+gRhk3S+50DstXMmVowxbrPeUJaK7sjNq5OhzfpT/OGE1kq9z5Q8WmOwIXJXyxP8O2CmP+nSg==",
"hasInstallScript": true,
"engines": {
"node": ">=16.13"
},
"peerDependencies": {
"prisma": "_"
},
"peerDependenciesMeta": {
"prisma": {
"optional": true
}
}
},
"node_modules/@prisma/debug": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-5.9.0.tgz",
"integrity": "sha512-3Uhj5YSPqaIfzJQ6JQzCNBXeBTy0x803fGIoo2tvP/KIEd+o4o49JxCQtKtP8aeef5iNh5Nn9Z25wDrdLjS80A==",
"devOptional": true
},
"node_modules/@prisma/engines": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-5.9.0.tgz",
"integrity": "sha512-BH1fpXbMH09TwfZH5FVMJwRp6afEhKzqwebbCLdaEkJDuhxA//iwbILLqGFtGTgZbdBNUOThIK+UC3++5kWMTg==",
"devOptional": true,
"hasInstallScript": true,
"dependencies": {
"@prisma/debug": "5.9.0",
"@prisma/engines-version": "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64",
"@prisma/fetch-engine": "5.9.0",
"@prisma/get-platform": "5.9.0"
}
},
"node_modules/@prisma/engines-version": {
"version": "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64",
"resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64.tgz",
"integrity": "sha512-HFl7275yF0FWbdcNvcSRbbu9JCBSLMcurYwvWc8WGDnpu7APxQo2ONtZrUggU3WxLxUJ2uBX+0GOFIcJeVeOOQ==",
"devOptional": true
},
"node_modules/@prisma/fetch-engine": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-5.9.0.tgz",
"integrity": "sha512-NL8Vm8Vl2d6NOSkkPGN5TTTz4s6cyCleXOzqtOFWzfKFJ4wtN2Shu7llOT+ykf6nDzh1lCN2JHUt1S6FGFZGig==",
"devOptional": true,
"dependencies": {
"@prisma/debug": "5.9.0",
"@prisma/engines-version": "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64",
"@prisma/get-platform": "5.9.0"
}
},
"node_modules/@prisma/get-platform": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-5.9.0.tgz",
"integrity": "sha512-8CatX+E6eZxcOjJZe5hF8EXxdb5GsQTA/u7pdmUJSxGLacW9K3r5vDdgV8s22PubObQQ6979/rkCMItbCrG4Yg==",
"devOptional": true,
"dependencies": {
"@prisma/debug": "5.9.0"
}
},
"node_modules/@rtsao/scc": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
"integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
"dev": true
},
"node_modules/@rushstack/eslint-patch": {
"version": "1.15.0",
"resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.15.0.tgz",
"integrity": "sha512-ojSshQPKwVvSMR8yT2L/QtUkV5SXi/IfDiJ4/8d6UbTPjiHVmxZzUAzGD8Tzks1b9+qQkZa0isUOvYObedITaw==",
"dev": true
},
"node_modules/@swc/helpers": {
"version": "0.5.2",
"resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.2.tgz",
"integrity": "sha512-E4KcWTpoLHqwPHLxidpOqQbcrZVgi0rsmmZXUle1jXmJfuIf/UWpczUJ7MZZ5tlxytgJXyp0w4PGkkeLiuIdZw==",
"dependencies": {
"tslib": "^2.4.0"
}
},
"node_modules/@tybys/wasm-util": {
"version": "0.10.1",
"resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
"integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
"dev": true,
"optional": true,
"dependencies": {
"tslib": "^2.4.0"
}
},
"node_modules/@types/d3-array": {
"version": "3.2.2",
"resolved": "https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.2.tgz",
"integrity": "sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw=="
},
"node_modules/@types/d3-color": {
"version": "3.1.3",
"resolved": "https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz",
"integrity": "sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A=="
},
"node_modules/@types/d3-ease": {
"version": "3.0.2",
"resolved": "https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz",
"integrity": "sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA=="
},
"node_modules/@types/d3-interpolate": {
"version": "3.0.4",
"resolved": "https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz",
"integrity": "sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==",
"dependencies": {
"@types/d3-color": "_"
}
},
"node_modules/@types/d3-path": {
"version": "3.1.1",
"resolved": "https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz",
"integrity": "sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg=="
},
"node_modules/@types/d3-scale": {
"version": "4.0.9",
"resolved": "https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz",
"integrity": "sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==",
"dependencies": {
"@types/d3-time": "_"
}
},
"node_modules/@types/d3-shape": {
"version": "3.1.7",
"resolved": "https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.7.tgz",
"integrity": "sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==",
"dependencies": {
"@types/d3-path": "_"
}
},
"node_modules/@types/d3-time": {
"version": "3.0.4",
"resolved": "https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz",
"integrity": "sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g=="
},
"node_modules/@types/d3-timer": {
"version": "3.0.2",
"resolved": "https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz",
"integrity": "sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw=="
},
"node_modules/@types/json5": {
"version": "0.0.29",
"resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
"integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
"dev": true
},
"node_modules/@types/node": {
"version": "20.11.16",
"resolved": "https://registry.npmjs.org/@types/node/-/node-20.11.16.tgz",
"integrity": "sha512-gKb0enTmRCzXSSUJDq6/sPcqrfCv2mkkG6Jt/clpn5eiCbKTY+SgZUxo+p8ZKMof5dCp9vHQUAB7wOUTod22wQ==",
"dev": true,
"dependencies": {
"undici-types": "~5.26.4"
}
},
"node_modules/@types/prop-types": {
"version": "15.7.15",
"resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
"integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
"devOptional": true
},
"node_modules/@types/react": {
"version": "18.2.55",
"resolved": "https://registry.npmjs.org/@types/react/-/react-18.2.55.tgz",
"integrity": "sha512-Y2Tz5P4yz23brwm2d7jNon39qoAtMMmalOQv6+fEFt1mT+FcM3D841wDpoUvFXhaYenuROCy3FZYqdTjM7qVyA==",
"devOptional": true,
"dependencies": {
"@types/prop-types": "_",
"@types/scheduler": "_",
"csstype": "^3.0.2"
}
},
"node_modules/@types/react-dom": {
"version": "18.2.19",
"resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.2.19.tgz",
"integrity": "sha512-aZvQL6uUbIJpjZk4U8JZGbau9KDeAwMfmhyWorxgBkqDIEf6ROjRozcmPIicqsUwPUjbkDfHKgGee1Lq65APcA==",
"dev": true,
"dependencies": {
"@types/react": "_"
}
},
"node_modules/@types/scheduler": {
"version": "0.26.0",
"resolved": "https://registry.npmjs.org/@types/scheduler/-/scheduler-0.26.0.tgz",
"integrity": "sha512-WFHp9YUJQ6CKshqoC37iOlHnQSmxNc795UhB26CyBBttrN9svdIrUjl/NjnNmfcwtncN0h/0PPAFWv9ovP8mLA==",
"devOptional": true
},
"node_modules/@typescript-eslint/parser": {
"version": "6.21.0",
"resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-6.21.0.tgz",
"integrity": "sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==",
"dev": true,
"dependencies": {
"@typescript-eslint/scope-manager": "6.21.0",
"@typescript-eslint/types": "6.21.0",
"@typescript-eslint/typescript-estree": "6.21.0",
"@typescript-eslint/visitor-keys": "6.21.0",
"debug": "^4.3.4"
},
"engines": {
"node": "^16.0.0 || >=18.0.0"
},
"funding": {
"type": "opencollective",
"url": "https://opencollective.com/typescript-eslint"
},
"peerDependencies": {
"eslint": "^7.0.0 || ^8.0.0"
},
"peerDependenciesMeta": {
"typescript": {
"optional": true
}
}
},
"node_modules/@typescript-eslint/scope-manager": {
"version": "6.21.0",
"resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-6.21.0.tgz",
"integrity": "sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==",
"dev": true,
"dependencies": {
"@typescript-eslint/types": "6.21.0",
"@typescript-eslint/visitor-keys": "6.21.0"
},
"engines": {
"node": "^16.0.0 || >=18.0.0"
},
"funding": {
"type": "opencollective",
"url": "https://opencollective.com/typescript-eslint"
}
},
"node_modules/@typescript-eslint/types": {
"version": "6.21.0",
"resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-6.21.0.tgz",
"integrity": "sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==",
"dev": true,
"engines": {
"node": "^16.0.0 || >=18.0.0"
},
"funding": {
"type": "opencollective",
"url": "https://opencollective.com/typescript-eslint"
}
},
"node_modules/@typescript-eslint/typescript-estree": {
"version": "6.21.0",
"resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-6.21.0.tgz",
"integrity": "sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==",
"dev": true,
"dependencies": {
"@typescript-eslint/types": "6.21.0",
"@typescript-eslint/visitor-keys": "6.21.0",
"debug": "^4.3.4",
"globby": "^11.1.0",
"is-glob": "^4.0.3",
"minimatch": "9.0.3",
"semver": "^7.5.4",
"ts-api-utils": "^1.0.1"
},
"engines": {
"node": "^16.0.0 || >=18.0.0"
},
"funding": {
"type": "opencollective",
"url": "https://opencollective.com/typescript-eslint"
},
"peerDependenciesMeta": {
"typescript": {
"optional": true
}
}
},
"node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
"integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
"dev": true,
"dependencies": {
"balanced-match": "^1.0.0"
}
},
"node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
"version": "9.0.3",
"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
"integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
"dev": true,
"dependencies": {
"brace-expansion": "^2.0.1"
},
"engines": {
"node": ">=16 || 14 >=14.17"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/@typescript-eslint/visitor-keys": {
"version": "6.21.0",
"resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-6.21.0.tgz",
"integrity": "sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==",
"dev": true,
"dependencies": {
"@typescript-eslint/types": "6.21.0",
"eslint-visitor-keys": "^3.4.1"
},
"engines": {
"node": "^16.0.0 || >=18.0.0"
},
"funding": {
"type": "opencollective",
"url": "https://opencollective.com/typescript-eslint"
}
},
"node_modules/@ungap/structured-clone": {
"version": "1.3.0",
"resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
"integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
"dev": true
},
"node_modules/@unrs/resolver-binding-android-arm-eabi": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
"integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
"cpu": [
"arm"
],
"dev": true,
"optional": true,
"os": [
"android"
]
},
"node_modules/@unrs/resolver-binding-android-arm64": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
"integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
"cpu": [
"arm64"
],
"dev": true,
"optional": true,
"os": [
"android"
]
},
"node_modules/@unrs/resolver-binding-darwin-arm64": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
"integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
"cpu": [
"arm64"
],
"dev": true,
"optional": true,
"os": [
"darwin"
]
},
"node_modules/@unrs/resolver-binding-darwin-x64": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
"integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
"cpu": [
"x64"
],
"dev": true,
"optional": true,
"os": [
"darwin"
]
},
"node_modules/@unrs/resolver-binding-freebsd-x64": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
"integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
"cpu": [
"x64"
],
"dev": true,
"optional": true,
"os": [
"freebsd"
]
},
"node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
"integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
"cpu": [
"arm"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
"integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
"cpu": [
"arm"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
"integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
"cpu": [
"arm64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-arm64-musl": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
"integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
"cpu": [
"arm64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
"integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
"cpu": [
"ppc64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
"integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
"cpu": [
"riscv64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
"integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
"cpu": [
"riscv64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
"integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
"cpu": [
"s390x"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-x64-gnu": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
"integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
"cpu": [
"x64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-linux-x64-musl": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
"integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
"cpu": [
"x64"
],
"dev": true,
"optional": true,
"os": [
"linux"
]
},
"node_modules/@unrs/resolver-binding-wasm32-wasi": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
"integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
"cpu": [
"wasm32"
],
"dev": true,
"optional": true,
"dependencies": {
"@napi-rs/wasm-runtime": "^0.2.11"
},
"engines": {
"node": ">=14.0.0"
}
},
"node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
"integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
"cpu": [
"arm64"
],
"dev": true,
"optional": true,
"os": [
"win32"
]
},
"node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
"integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
"cpu": [
"ia32"
],
"dev": true,
"optional": true,
"os": [
"win32"
]
},
"node_modules/@unrs/resolver-binding-win32-x64-msvc": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
"integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
"cpu": [
"x64"
],
"dev": true,
"optional": true,
"os": [
"win32"
]
},
"node_modules/acorn": {
"version": "8.15.0",
"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
"integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
"dev": true,
"bin": {
"acorn": "bin/acorn"
},
"engines": {
"node": ">=0.4.0"
}
},
"node_modules/acorn-jsx": {
"version": "5.3.2",
"resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
"integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
"dev": true,
"peerDependencies": {
"acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
}
},
"node_modules/ajv": {
"version": "6.12.6",
"resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
"integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
"dev": true,
"dependencies": {
"fast-deep-equal": "^3.1.1",
"fast-json-stable-stringify": "^2.0.0",
"json-schema-traverse": "^0.4.1",
"uri-js": "^4.2.2"
},
"funding": {
"type": "github",
"url": "https://github.com/sponsors/epoberezkin"
}
},
"node_modules/ansi-regex": {
"version": "5.0.1",
"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/ansi-styles": {
"version": "4.3.0",
"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
"dev": true,
"dependencies": {
"color-convert": "^2.0.1"
},
"engines": {
"node": ">=8"
},
"funding": {
"url": "https://github.com/chalk/ansi-styles?sponsor=1"
}
},
"node_modules/any-promise": {
"version": "1.3.0",
"resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
"integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
"dev": true
},
"node_modules/anymatch": {
"version": "3.1.3",
"resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
"integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
"dev": true,
"dependencies": {
"normalize-path": "^3.0.0",
"picomatch": "^2.0.4"
},
"engines": {
"node": ">= 8"
}
},
"node_modules/arg": {
"version": "5.0.2",
"resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
"integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
"dev": true
},
"node_modules/argparse": {
"version": "2.0.1",
"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
"dev": true
},
"node_modules/aria-query": {
"version": "5.3.2",
"resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
"integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/array-buffer-byte-length": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
"integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"is-array-buffer": "^3.0.5"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array-includes": {
"version": "3.1.9",
"resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
"integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"define-properties": "^1.2.1",
"es-abstract": "^1.24.0",
"es-object-atoms": "^1.1.1",
"get-intrinsic": "^1.3.0",
"is-string": "^1.1.1",
"math-intrinsics": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array-union": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
"integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/array.prototype.findlast": {
"version": "1.2.5",
"resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
"integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.2",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.0.0",
"es-shim-unscopables": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array.prototype.findlastindex": {
"version": "1.2.6",
"resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
"integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.9",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.1.1",
"es-shim-unscopables": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array.prototype.flat": {
"version": "1.3.3",
"resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
"integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.5",
"es-shim-unscopables": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array.prototype.flatmap": {
"version": "1.3.3",
"resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
"integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.5",
"es-shim-unscopables": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/array.prototype.tosorted": {
"version": "1.1.4",
"resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
"integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.3",
"es-errors": "^1.3.0",
"es-shim-unscopables": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/arraybuffer.prototype.slice": {
"version": "1.0.4",
"resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
"integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
"dev": true,
"dependencies": {
"array-buffer-byte-length": "^1.0.1",
"call-bind": "^1.0.8",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.5",
"es-errors": "^1.3.0",
"get-intrinsic": "^1.2.6",
"is-array-buffer": "^3.0.4"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/ast-types-flow": {
"version": "0.0.8",
"resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
"integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
"dev": true
},
"node_modules/async-function": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
"integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/autoprefixer": {
"version": "10.4.17",
"resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.17.tgz",
"integrity": "sha512-/cpVNRLSfhOtcGflT13P2794gVSgmPgTR+erw5ifnMLZb0UnSlkK4tquLmkd3BhA+nLo5tX8Cu0upUsGKvKbmg==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/autoprefixer"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"browserslist": "^4.22.2",
"caniuse-lite": "^1.0.30001578",
"fraction.js": "^4.3.7",
"normalize-range": "^0.1.2",
"picocolors": "^1.0.0",
"postcss-value-parser": "^4.2.0"
},
"bin": {
"autoprefixer": "bin/autoprefixer"
},
"engines": {
"node": "^10 || ^12 || >=14"
},
"peerDependencies": {
"postcss": "^8.1.0"
}
},
"node_modules/available-typed-arrays": {
"version": "1.0.7",
"resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
"integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
"dev": true,
"dependencies": {
"possible-typed-array-names": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/axe-core": {
"version": "4.11.1",
"resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.1.tgz",
"integrity": "sha512-BASOg+YwO2C+346x3LZOeoovTIoTrRqEsqMa6fmfAV0P+U9mFr9NsyOEpiYvFjbc64NMrSswhV50WdXzdb/Z5A==",
"dev": true,
"engines": {
"node": ">=4"
}
},
"node_modules/axobject-query": {
"version": "4.1.0",
"resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
"integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/balanced-match": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
"dev": true
},
"node_modules/baseline-browser-mapping": {
"version": "2.9.12",
"resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.12.tgz",
"integrity": "sha512-Mij6Lij93pTAIsSYy5cyBQ975Qh9uLEc5rwGTpomiZeXZL9yIS6uORJakb3ScHgfs0serMMfIbXzokPMuEiRyw==",
"dev": true,
"bin": {
"baseline-browser-mapping": "dist/cli.js"
}
},
"node_modules/binary-extensions": {
"version": "2.3.0",
"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
"integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
"dev": true,
"engines": {
"node": ">=8"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/brace-expansion": {
"version": "1.1.12",
"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
"integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
"dev": true,
"dependencies": {
"balanced-match": "^1.0.0",
"concat-map": "0.0.1"
}
},
"node_modules/braces": {
"version": "3.0.3",
"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
"integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
"dev": true,
"dependencies": {
"fill-range": "^7.1.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/browserslist": {
"version": "4.28.1",
"resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
"integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/browserslist"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/browserslist"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"baseline-browser-mapping": "^2.9.0",
"caniuse-lite": "^1.0.30001759",
"electron-to-chromium": "^1.5.263",
"node-releases": "^2.0.27",
"update-browserslist-db": "^1.2.0"
},
"bin": {
"browserslist": "cli.js"
},
"engines": {
"node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
}
},
"node_modules/busboy": {
"version": "1.6.0",
"resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
"integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
"dependencies": {
"streamsearch": "^1.1.0"
},
"engines": {
"node": ">=10.16.0"
}
},
"node_modules/call-bind": {
"version": "1.0.8",
"resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
"integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
"dev": true,
"dependencies": {
"call-bind-apply-helpers": "^1.0.0",
"es-define-property": "^1.0.0",
"get-intrinsic": "^1.2.4",
"set-function-length": "^1.2.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/call-bind-apply-helpers": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
"integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"function-bind": "^1.1.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/call-bound": {
"version": "1.0.4",
"resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
"integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
"dev": true,
"dependencies": {
"call-bind-apply-helpers": "^1.0.2",
"get-intrinsic": "^1.3.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/callsites": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
"integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
"dev": true,
"engines": {
"node": ">=6"
}
},
"node_modules/camelcase-css": {
"version": "2.0.1",
"resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
"integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
"dev": true,
"engines": {
"node": ">= 6"
}
},
"node_modules/caniuse-lite": {
"version": "1.0.30001763",
"resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001763.tgz",
"integrity": "sha512-mh/dGtq56uN98LlNX9qdbKnzINhX0QzhiWBFEkFfsFO4QyCvL8YegrJAazCwXIeqkIob8BlZPGM3xdnY+sgmvQ==",
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/browserslist"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/caniuse-lite"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
]
},
"node_modules/chalk": {
"version": "4.1.2",
"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
"dev": true,
"dependencies": {
"ansi-styles": "^4.1.0",
"supports-color": "^7.1.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/chalk/chalk?sponsor=1"
}
},
"node_modules/chokidar": {
"version": "3.6.0",
"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
"integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
"dev": true,
"dependencies": {
"anymatch": "~3.1.2",
"braces": "~3.0.2",
"glob-parent": "~5.1.2",
"is-binary-path": "~2.1.0",
"is-glob": "~4.0.1",
"normalize-path": "~3.0.0",
"readdirp": "~3.6.0"
},
"engines": {
"node": ">= 8.10.0"
},
"funding": {
"url": "https://paulmillr.com/funding/"
},
"optionalDependencies": {
"fsevents": "~2.3.2"
}
},
"node_modules/chokidar/node_modules/glob-parent": {
"version": "5.1.2",
"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
"dev": true,
"dependencies": {
"is-glob": "^4.0.1"
},
"engines": {
"node": ">= 6"
}
},
"node_modules/client-only": {
"version": "0.0.1",
"resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
"integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA=="
},
"node_modules/clsx": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.0.tgz",
"integrity": "sha512-m3iNNWpd9rl3jvvcBnu70ylMdrXt8Vlq4HYadnU5fwcOtvkSQWPmj7amUcDT2qYI7risszBjI5AUIUox9D16pg==",
"engines": {
"node": ">=6"
}
},
"node_modules/color-convert": {
"version": "2.0.1",
"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
"dev": true,
"dependencies": {
"color-name": "~1.1.4"
},
"engines": {
"node": ">=7.0.0"
}
},
"node_modules/color-name": {
"version": "1.1.4",
"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
"dev": true
},
"node_modules/commander": {
"version": "4.1.1",
"resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
"integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
"dev": true,
"engines": {
"node": ">= 6"
}
},
"node_modules/concat-map": {
"version": "0.0.1",
"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
"dev": true
},
"node_modules/cross-spawn": {
"version": "7.0.6",
"resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
"integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
"dev": true,
"dependencies": {
"path-key": "^3.1.0",
"shebang-command": "^2.0.0",
"which": "^2.0.1"
},
"engines": {
"node": ">= 8"
}
},
"node_modules/cssesc": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
"integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
"dev": true,
"bin": {
"cssesc": "bin/cssesc"
},
"engines": {
"node": ">=4"
}
},
"node_modules/csstype": {
"version": "3.2.3",
"resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
"integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ=="
},
"node_modules/d3-array": {
"version": "3.2.4",
"resolved": "https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz",
"integrity": "sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==",
"dependencies": {
"internmap": "1 - 2"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-color": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
"integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
"engines": {
"node": ">=12"
}
},
"node_modules/d3-ease": {
"version": "3.0.1",
"resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
"integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
"engines": {
"node": ">=12"
}
},
"node_modules/d3-format": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz",
"integrity": "sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==",
"engines": {
"node": ">=12"
}
},
"node_modules/d3-interpolate": {
"version": "3.0.1",
"resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
"integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
"dependencies": {
"d3-color": "1 - 3"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-path": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz",
"integrity": "sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==",
"engines": {
"node": ">=12"
}
},
"node_modules/d3-scale": {
"version": "4.0.2",
"resolved": "https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz",
"integrity": "sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==",
"dependencies": {
"d3-array": "2.10.0 - 3",
"d3-format": "1 - 3",
"d3-interpolate": "1.2.0 - 3",
"d3-time": "2.1.1 - 3",
"d3-time-format": "2 - 4"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-shape": {
"version": "3.2.0",
"resolved": "https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz",
"integrity": "sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==",
"dependencies": {
"d3-path": "^3.1.0"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-time": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz",
"integrity": "sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==",
"dependencies": {
"d3-array": "2 - 3"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-time-format": {
"version": "4.1.0",
"resolved": "https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz",
"integrity": "sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==",
"dependencies": {
"d3-time": "1 - 3"
},
"engines": {
"node": ">=12"
}
},
"node_modules/d3-timer": {
"version": "3.0.1",
"resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
"integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
"engines": {
"node": ">=12"
}
},
"node_modules/damerau-levenshtein": {
"version": "1.0.8",
"resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
"integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
"dev": true
},
"node_modules/data-view-buffer": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
"integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"es-errors": "^1.3.0",
"is-data-view": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/data-view-byte-length": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
"integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"es-errors": "^1.3.0",
"is-data-view": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/inspect-js"
}
},
"node_modules/data-view-byte-offset": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
"integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"es-errors": "^1.3.0",
"is-data-view": "^1.0.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/date-fns": {
"version": "3.3.1",
"resolved": "https://registry.npmjs.org/date-fns/-/date-fns-3.3.1.tgz",
"integrity": "sha512-y8e109LYGgoQDveiEBD3DYXKba1jWf5BA8YU1FL5Tvm0BTdEfy54WLCwnuYWZNnzzvALy/QQ4Hov+Q9RVRv+Zw==",
"funding": {
"type": "github",
"url": "https://github.com/sponsors/kossnocorp"
}
},
"node_modules/debug": {
"version": "4.4.3",
"resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
"integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
"dev": true,
"dependencies": {
"ms": "^2.1.3"
},
"engines": {
"node": ">=6.0"
},
"peerDependenciesMeta": {
"supports-color": {
"optional": true
}
}
},
"node_modules/decimal.js-light": {
"version": "2.5.1",
"resolved": "https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz",
"integrity": "sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg=="
},
"node_modules/deep-is": {
"version": "0.1.4",
"resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
"integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
"dev": true
},
"node_modules/define-data-property": {
"version": "1.1.4",
"resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
"integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
"dev": true,
"dependencies": {
"es-define-property": "^1.0.0",
"es-errors": "^1.3.0",
"gopd": "^1.0.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/define-properties": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
"integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
"dev": true,
"dependencies": {
"define-data-property": "^1.0.1",
"has-property-descriptors": "^1.0.0",
"object-keys": "^1.1.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/didyoumean": {
"version": "1.2.2",
"resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
"integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
"dev": true
},
"node_modules/dir-glob": {
"version": "3.0.1",
"resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
"integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
"dev": true,
"dependencies": {
"path-type": "^4.0.0"
},
"engines": {
"node": ">=8"
}
},
"node_modules/dlv": {
"version": "1.1.3",
"resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
"integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
"dev": true
},
"node_modules/doctrine": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
"integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
"dev": true,
"dependencies": {
"esutils": "^2.0.2"
},
"engines": {
"node": ">=6.0.0"
}
},
"node_modules/dom-helpers": {
"version": "5.2.1",
"resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
"integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",
"dependencies": {
"@babel/runtime": "^7.8.7",
"csstype": "^3.0.2"
}
},
"node_modules/dunder-proto": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
"integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
"dev": true,
"dependencies": {
"call-bind-apply-helpers": "^1.0.1",
"es-errors": "^1.3.0",
"gopd": "^1.2.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/eastasianwidth": {
"version": "0.2.0",
"resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
"integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
"dev": true
},
"node_modules/electron-to-chromium": {
"version": "1.5.267",
"resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
"integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
"dev": true
},
"node_modules/emoji-regex": {
"version": "9.2.2",
"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
"integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
"dev": true
},
"node_modules/es-abstract": {
"version": "1.24.1",
"resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.1.tgz",
"integrity": "sha512-zHXBLhP+QehSSbsS9Pt23Gg964240DPd6QCf8WpkqEXxQ7fhdZzYsocOr5u7apWonsS5EjZDmTF+/slGMyasvw==",
"dev": true,
"dependencies": {
"array-buffer-byte-length": "^1.0.2",
"arraybuffer.prototype.slice": "^1.0.4",
"available-typed-arrays": "^1.0.7",
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"data-view-buffer": "^1.0.2",
"data-view-byte-length": "^1.0.2",
"data-view-byte-offset": "^1.0.1",
"es-define-property": "^1.0.1",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.1.1",
"es-set-tostringtag": "^2.1.0",
"es-to-primitive": "^1.3.0",
"function.prototype.name": "^1.1.8",
"get-intrinsic": "^1.3.0",
"get-proto": "^1.0.1",
"get-symbol-description": "^1.1.0",
"globalthis": "^1.0.4",
"gopd": "^1.2.0",
"has-property-descriptors": "^1.0.2",
"has-proto": "^1.2.0",
"has-symbols": "^1.1.0",
"hasown": "^2.0.2",
"internal-slot": "^1.1.0",
"is-array-buffer": "^3.0.5",
"is-callable": "^1.2.7",
"is-data-view": "^1.0.2",
"is-negative-zero": "^2.0.3",
"is-regex": "^1.2.1",
"is-set": "^2.0.3",
"is-shared-array-buffer": "^1.0.4",
"is-string": "^1.1.1",
"is-typed-array": "^1.1.15",
"is-weakref": "^1.1.1",
"math-intrinsics": "^1.1.0",
"object-inspect": "^1.13.4",
"object-keys": "^1.1.1",
"object.assign": "^4.1.7",
"own-keys": "^1.0.1",
"regexp.prototype.flags": "^1.5.4",
"safe-array-concat": "^1.1.3",
"safe-push-apply": "^1.0.0",
"safe-regex-test": "^1.1.0",
"set-proto": "^1.0.0",
"stop-iteration-iterator": "^1.1.0",
"string.prototype.trim": "^1.2.10",
"string.prototype.trimend": "^1.0.9",
"string.prototype.trimstart": "^1.0.8",
"typed-array-buffer": "^1.0.3",
"typed-array-byte-length": "^1.0.3",
"typed-array-byte-offset": "^1.0.4",
"typed-array-length": "^1.0.7",
"unbox-primitive": "^1.1.0",
"which-typed-array": "^1.1.19"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/es-define-property": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
"integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-errors": {
"version": "1.3.0",
"resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
"integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-iterator-helpers": {
"version": "1.2.2",
"resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.2.2.tgz",
"integrity": "sha512-BrUQ0cPTB/IwXj23HtwHjS9n7O4h9FX94b4xc5zlTHxeLgTAdzYUDyy6KdExAl9lbN5rtfe44xpjpmj9grxs5w==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"define-properties": "^1.2.1",
"es-abstract": "^1.24.1",
"es-errors": "^1.3.0",
"es-set-tostringtag": "^2.1.0",
"function-bind": "^1.1.2",
"get-intrinsic": "^1.3.0",
"globalthis": "^1.0.4",
"gopd": "^1.2.0",
"has-property-descriptors": "^1.0.2",
"has-proto": "^1.2.0",
"has-symbols": "^1.1.0",
"internal-slot": "^1.1.0",
"iterator.prototype": "^1.1.5",
"safe-array-concat": "^1.1.3"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-object-atoms": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
"integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-set-tostringtag": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
"integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"get-intrinsic": "^1.2.6",
"has-tostringtag": "^1.0.2",
"hasown": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-shim-unscopables": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
"integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
"dev": true,
"dependencies": {
"hasown": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/es-to-primitive": {
"version": "1.3.0",
"resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
"integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
"dev": true,
"dependencies": {
"is-callable": "^1.2.7",
"is-date-object": "^1.0.5",
"is-symbol": "^1.0.4"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/escalade": {
"version": "3.2.0",
"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
"integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
"dev": true,
"engines": {
"node": ">=6"
}
},
"node_modules/escape-string-regexp": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
"integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
"dev": true,
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/eslint": {
"version": "8.56.0",
"resolved": "https://registry.npmjs.org/eslint/-/eslint-8.56.0.tgz",
"integrity": "sha512-Go19xM6T9puCOWntie1/P997aXxFsOi37JIHRWI514Hc6ZnaHGKY9xFhrU65RT6CcBEzZoGG1e6Nq+DT04ZtZQ==",
"deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
"dev": true,
"dependencies": {
"@eslint-community/eslint-utils": "^4.2.0",
"@eslint-community/regexpp": "^4.6.1",
"@eslint/eslintrc": "^2.1.4",
"@eslint/js": "8.56.0",
"@humanwhocodes/config-array": "^0.11.13",
"@humanwhocodes/module-importer": "^1.0.1",
"@nodelib/fs.walk": "^1.2.8",
"@ungap/structured-clone": "^1.2.0",
"ajv": "^6.12.4",
"chalk": "^4.0.0",
"cross-spawn": "^7.0.2",
"debug": "^4.3.2",
"doctrine": "^3.0.0",
"escape-string-regexp": "^4.0.0",
"eslint-scope": "^7.2.2",
"eslint-visitor-keys": "^3.4.3",
"espree": "^9.6.1",
"esquery": "^1.4.2",
"esutils": "^2.0.2",
"fast-deep-equal": "^3.1.3",
"file-entry-cache": "^6.0.1",
"find-up": "^5.0.0",
"glob-parent": "^6.0.2",
"globals": "^13.19.0",
"graphemer": "^1.4.0",
"ignore": "^5.2.0",
"imurmurhash": "^0.1.4",
"is-glob": "^4.0.0",
"is-path-inside": "^3.0.3",
"js-yaml": "^4.1.0",
"json-stable-stringify-without-jsonify": "^1.0.1",
"levn": "^0.4.1",
"lodash.merge": "^4.6.2",
"minimatch": "^3.1.2",
"natural-compare": "^1.4.0",
"optionator": "^0.9.3",
"strip-ansi": "^6.0.1",
"text-table": "^0.2.0"
},
"bin": {
"eslint": "bin/eslint.js"
},
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
}
},
"node_modules/eslint-config-next": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-14.1.0.tgz",
"integrity": "sha512-SBX2ed7DoRFXC6CQSLc/SbLY9Ut6HxNB2wPTcoIWjUMd7aF7O/SIE7111L8FdZ9TXsNV4pulUDnfthpyPtbFUg==",
"dev": true,
"dependencies": {
"@next/eslint-plugin-next": "14.1.0",
"@rushstack/eslint-patch": "^1.3.3",
"@typescript-eslint/parser": "^5.4.2 || ^6.0.0",
"eslint-import-resolver-node": "^0.3.6",
"eslint-import-resolver-typescript": "^3.5.2",
"eslint-plugin-import": "^2.28.1",
"eslint-plugin-jsx-a11y": "^6.7.1",
"eslint-plugin-react": "^7.33.2",
"eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
},
"peerDependencies": {
"eslint": "^7.23.0 || ^8.0.0",
"typescript": ">=3.3.1"
},
"peerDependenciesMeta": {
"typescript": {
"optional": true
}
}
},
"node_modules/eslint-config-next/node_modules/eslint-import-resolver-typescript": {
"version": "3.10.1",
"resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
"integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
"dev": true,
"dependencies": {
"@nolyfill/is-core-module": "1.0.39",
"debug": "^4.4.0",
"get-tsconfig": "^4.10.0",
"is-bun-module": "^2.0.0",
"stable-hash": "^0.0.5",
"tinyglobby": "^0.2.13",
"unrs-resolver": "^1.6.2"
},
"engines": {
"node": "^14.18.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint-import-resolver-typescript"
},
"peerDependencies": {
"eslint": "_",
"eslint-plugin-import": "_",
"eslint-plugin-import-x": "_"
},
"peerDependenciesMeta": {
"eslint-plugin-import": {
"optional": true
},
"eslint-plugin-import-x": {
"optional": true
}
}
},
"node_modules/eslint-import-resolver-node": {
"version": "0.3.9",
"resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.9.tgz",
"integrity": "sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==",
"dev": true,
"dependencies": {
"debug": "^3.2.7",
"is-core-module": "^2.13.0",
"resolve": "^1.22.4"
}
},
"node_modules/eslint-import-resolver-node/node_modules/debug": {
"version": "3.2.7",
"resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
"integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
"dev": true,
"dependencies": {
"ms": "^2.1.1"
}
},
"node_modules/eslint-module-utils": {
"version": "2.12.1",
"resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
"integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
"dev": true,
"dependencies": {
"debug": "^3.2.7"
},
"engines": {
"node": ">=4"
},
"peerDependenciesMeta": {
"eslint": {
"optional": true
}
}
},
"node_modules/eslint-module-utils/node_modules/debug": {
"version": "3.2.7",
"resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
"integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
"dev": true,
"dependencies": {
"ms": "^2.1.1"
}
},
"node_modules/eslint-plugin-import": {
"version": "2.32.0",
"resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
"integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
"dev": true,
"dependencies": {
"@rtsao/scc": "^1.1.0",
"array-includes": "^3.1.9",
"array.prototype.findlastindex": "^1.2.6",
"array.prototype.flat": "^1.3.3",
"array.prototype.flatmap": "^1.3.3",
"debug": "^3.2.7",
"doctrine": "^2.1.0",
"eslint-import-resolver-node": "^0.3.9",
"eslint-module-utils": "^2.12.1",
"hasown": "^2.0.2",
"is-core-module": "^2.16.1",
"is-glob": "^4.0.3",
"minimatch": "^3.1.2",
"object.fromentries": "^2.0.8",
"object.groupby": "^1.0.3",
"object.values": "^1.2.1",
"semver": "^6.3.1",
"string.prototype.trimend": "^1.0.9",
"tsconfig-paths": "^3.15.0"
},
"engines": {
"node": ">=4"
},
"peerDependencies": {
"eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
}
},
"node_modules/eslint-plugin-import/node_modules/debug": {
"version": "3.2.7",
"resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
"integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
"dev": true,
"dependencies": {
"ms": "^2.1.1"
}
},
"node_modules/eslint-plugin-import/node_modules/doctrine": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
"integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
"dev": true,
"dependencies": {
"esutils": "^2.0.2"
},
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/eslint-plugin-import/node_modules/semver": {
"version": "6.3.1",
"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
"dev": true,
"bin": {
"semver": "bin/semver.js"
}
},
"node_modules/eslint-plugin-jsx-a11y": {
"version": "6.10.2",
"resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
"integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
"dev": true,
"dependencies": {
"aria-query": "^5.3.2",
"array-includes": "^3.1.8",
"array.prototype.flatmap": "^1.3.2",
"ast-types-flow": "^0.0.8",
"axe-core": "^4.10.0",
"axobject-query": "^4.1.0",
"damerau-levenshtein": "^1.0.8",
"emoji-regex": "^9.2.2",
"hasown": "^2.0.2",
"jsx-ast-utils": "^3.3.5",
"language-tags": "^1.0.9",
"minimatch": "^3.1.2",
"object.fromentries": "^2.0.8",
"safe-regex-test": "^1.0.3",
"string.prototype.includes": "^2.0.1"
},
"engines": {
"node": ">=4.0"
},
"peerDependencies": {
"eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
}
},
"node_modules/eslint-plugin-react": {
"version": "7.37.5",
"resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
"integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
"dev": true,
"dependencies": {
"array-includes": "^3.1.8",
"array.prototype.findlast": "^1.2.5",
"array.prototype.flatmap": "^1.3.3",
"array.prototype.tosorted": "^1.1.4",
"doctrine": "^2.1.0",
"es-iterator-helpers": "^1.2.1",
"estraverse": "^5.3.0",
"hasown": "^2.0.2",
"jsx-ast-utils": "^2.4.1 || ^3.0.0",
"minimatch": "^3.1.2",
"object.entries": "^1.1.9",
"object.fromentries": "^2.0.8",
"object.values": "^1.2.1",
"prop-types": "^15.8.1",
"resolve": "^2.0.0-next.5",
"semver": "^6.3.1",
"string.prototype.matchall": "^4.0.12",
"string.prototype.repeat": "^1.0.0"
},
"engines": {
"node": ">=4"
},
"peerDependencies": {
"eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
}
},
"node_modules/eslint-plugin-react-hooks": {
"version": "5.0.0-canary-7118f5dd7-20230705",
"resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.0.0-canary-7118f5dd7-20230705.tgz",
"integrity": "sha512-AZYbMo/NW9chdL7vk6HQzQhT+PvTAEVqWk9ziruUoW2kAOcN5qNyelv70e0F1VNQAbvutOC9oc+xfWycI9FxDw==",
"dev": true,
"engines": {
"node": ">=10"
},
"peerDependencies": {
"eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
}
},
"node_modules/eslint-plugin-react/node_modules/doctrine": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
"integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
"dev": true,
"dependencies": {
"esutils": "^2.0.2"
},
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/eslint-plugin-react/node_modules/resolve": {
"version": "2.0.0-next.5",
"resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.5.tgz",
"integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
"dev": true,
"dependencies": {
"is-core-module": "^2.13.0",
"path-parse": "^1.0.7",
"supports-preserve-symlinks-flag": "^1.0.0"
},
"bin": {
"resolve": "bin/resolve"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/eslint-plugin-react/node_modules/semver": {
"version": "6.3.1",
"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
"integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
"dev": true,
"bin": {
"semver": "bin/semver.js"
}
},
"node_modules/eslint-scope": {
"version": "7.2.2",
"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
"integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
"dev": true,
"dependencies": {
"esrecurse": "^4.3.0",
"estraverse": "^5.2.0"
},
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
}
},
"node_modules/eslint-visitor-keys": {
"version": "3.4.3",
"resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
"integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
"dev": true,
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
}
},
"node_modules/espree": {
"version": "9.6.1",
"resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
"integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
"dev": true,
"dependencies": {
"acorn": "^8.9.0",
"acorn-jsx": "^5.3.2",
"eslint-visitor-keys": "^3.4.1"
},
"engines": {
"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/eslint"
}
},
"node_modules/esquery": {
"version": "1.7.0",
"resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
"integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
"dev": true,
"dependencies": {
"estraverse": "^5.1.0"
},
"engines": {
"node": ">=0.10"
}
},
"node_modules/esrecurse": {
"version": "4.3.0",
"resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
"integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
"dev": true,
"dependencies": {
"estraverse": "^5.2.0"
},
"engines": {
"node": ">=4.0"
}
},
"node_modules/estraverse": {
"version": "5.3.0",
"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
"integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
"dev": true,
"engines": {
"node": ">=4.0"
}
},
"node_modules/esutils": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
"integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/eventemitter3": {
"version": "4.0.7",
"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
"integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw=="
},
"node_modules/fast-deep-equal": {
"version": "3.1.3",
"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
"dev": true
},
"node_modules/fast-equals": {
"version": "5.4.0",
"resolved": "https://registry.npmjs.org/fast-equals/-/fast-equals-5.4.0.tgz",
"integrity": "sha512-jt2DW/aNFNwke7AUd+Z+e6pz39KO5rzdbbFCg2sGafS4mk13MI7Z8O5z9cADNn5lhGODIgLwug6TZO2ctf7kcw==",
"engines": {
"node": ">=6.0.0"
}
},
"node_modules/fast-glob": {
"version": "3.3.3",
"resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
"integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
"dev": true,
"dependencies": {
"@nodelib/fs.stat": "^2.0.2",
"@nodelib/fs.walk": "^1.2.3",
"glob-parent": "^5.1.2",
"merge2": "^1.3.0",
"micromatch": "^4.0.8"
},
"engines": {
"node": ">=8.6.0"
}
},
"node_modules/fast-glob/node_modules/glob-parent": {
"version": "5.1.2",
"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
"dev": true,
"dependencies": {
"is-glob": "^4.0.1"
},
"engines": {
"node": ">= 6"
}
},
"node_modules/fast-json-stable-stringify": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
"integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
"dev": true
},
"node_modules/fast-levenshtein": {
"version": "2.0.6",
"resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
"integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
"dev": true
},
"node_modules/fastq": {
"version": "1.20.1",
"resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
"integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
"dev": true,
"dependencies": {
"reusify": "^1.0.4"
}
},
"node_modules/file-entry-cache": {
"version": "6.0.1",
"resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
"integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
"dev": true,
"dependencies": {
"flat-cache": "^3.0.4"
},
"engines": {
"node": "^10.12.0 || >=12.0.0"
}
},
"node_modules/fill-range": {
"version": "7.1.1",
"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
"integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
"dev": true,
"dependencies": {
"to-regex-range": "^5.0.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/find-up": {
"version": "5.0.0",
"resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
"integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
"dev": true,
"dependencies": {
"locate-path": "^6.0.0",
"path-exists": "^4.0.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/flat-cache": {
"version": "3.2.0",
"resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
"integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
"dev": true,
"dependencies": {
"flatted": "^3.2.9",
"keyv": "^4.5.3",
"rimraf": "^3.0.2"
},
"engines": {
"node": "^10.12.0 || >=12.0.0"
}
},
"node_modules/flatted": {
"version": "3.3.3",
"resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
"integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
"dev": true
},
"node_modules/for-each": {
"version": "0.3.5",
"resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
"integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
"dev": true,
"dependencies": {
"is-callable": "^1.2.7"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/foreground-child": {
"version": "3.3.1",
"resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
"integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
"dev": true,
"dependencies": {
"cross-spawn": "^7.0.6",
"signal-exit": "^4.0.1"
},
"engines": {
"node": ">=14"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/fraction.js": {
"version": "4.3.7",
"resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
"integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
"dev": true,
"engines": {
"node": "_"
},
"funding": {
"type": "patreon",
"url": "https://github.com/sponsors/rawify"
}
},
"node_modules/framer-motion": {
"version": "11.0.3",
"resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-11.0.3.tgz",
"integrity": "sha512-6x2poQpIWBdbZwLd73w6cKZ1I9IEPIU94C6/Swp1Zt3LJ+sB5bPe1E2wC6EH5hSISXNkMJ4afH7AdwS7MrtkWw==",
"dependencies": {
"tslib": "^2.4.0"
},
"optionalDependencies": {
"@emotion/is-prop-valid": "^0.8.2"
},
"peerDependencies": {
"react": "^18.0.0",
"react-dom": "^18.0.0"
},
"peerDependenciesMeta": {
"react": {
"optional": true
},
"react-dom": {
"optional": true
}
}
},
"node_modules/fs.realpath": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
"integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
"dev": true
},
"node_modules/fsevents": {
"version": "2.3.3",
"resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
"integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
"dev": true,
"hasInstallScript": true,
"optional": true,
"os": [
"darwin"
],
"engines": {
"node": "^8.16.0 || ^10.6.0 || >=11.0.0"
}
},
"node_modules/function-bind": {
"version": "1.1.2",
"resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
"integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
"dev": true,
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/function.prototype.name": {
"version": "1.1.8",
"resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
"integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.3",
"define-properties": "^1.2.1",
"functions-have-names": "^1.2.3",
"hasown": "^2.0.2",
"is-callable": "^1.2.7"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/functions-have-names": {
"version": "1.2.3",
"resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
"integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
"dev": true,
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/generator-function": {
"version": "2.0.1",
"resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
"integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/get-intrinsic": {
"version": "1.3.0",
"resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
"integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
"dev": true,
"dependencies": {
"call-bind-apply-helpers": "^1.0.2",
"es-define-property": "^1.0.1",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.1.1",
"function-bind": "^1.1.2",
"get-proto": "^1.0.1",
"gopd": "^1.2.0",
"has-symbols": "^1.1.0",
"hasown": "^2.0.2",
"math-intrinsics": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/get-proto": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
"integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
"dev": true,
"dependencies": {
"dunder-proto": "^1.0.1",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/get-symbol-description": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
"integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"es-errors": "^1.3.0",
"get-intrinsic": "^1.2.6"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/get-tsconfig": {
"version": "4.13.0",
"resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz",
"integrity": "sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==",
"dev": true,
"dependencies": {
"resolve-pkg-maps": "^1.0.0"
},
"funding": {
"url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
}
},
"node_modules/glob": {
"version": "10.3.10",
"resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
"integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
"dev": true,
"dependencies": {
"foreground-child": "^3.1.0",
"jackspeak": "^2.3.5",
"minimatch": "^9.0.1",
"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
"path-scurry": "^1.10.1"
},
"bin": {
"glob": "dist/esm/bin.mjs"
},
"engines": {
"node": ">=16 || 14 >=14.17"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/glob-parent": {
"version": "6.0.2",
"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
"integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
"dev": true,
"dependencies": {
"is-glob": "^4.0.3"
},
"engines": {
"node": ">=10.13.0"
}
},
"node_modules/glob/node_modules/brace-expansion": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
"integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
"dev": true,
"dependencies": {
"balanced-match": "^1.0.0"
}
},
"node_modules/glob/node_modules/minimatch": {
"version": "9.0.5",
"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
"integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
"dev": true,
"dependencies": {
"brace-expansion": "^2.0.1"
},
"engines": {
"node": ">=16 || 14 >=14.17"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/globals": {
"version": "13.24.0",
"resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
"integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
"dev": true,
"dependencies": {
"type-fest": "^0.20.2"
},
"engines": {
"node": ">=8"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/globalthis": {
"version": "1.0.4",
"resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
"integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
"dev": true,
"dependencies": {
"define-properties": "^1.2.1",
"gopd": "^1.0.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/globby": {
"version": "11.1.0",
"resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
"integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
"dev": true,
"dependencies": {
"array-union": "^2.1.0",
"dir-glob": "^3.0.1",
"fast-glob": "^3.2.9",
"ignore": "^5.2.0",
"merge2": "^1.4.1",
"slash": "^3.0.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/gopd": {
"version": "1.2.0",
"resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
"integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/graceful-fs": {
"version": "4.2.11",
"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
"integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ=="
},
"node_modules/graphemer": {
"version": "1.4.0",
"resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
"integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
"dev": true
},
"node_modules/has-bigints": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
"integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/has-flag": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/has-property-descriptors": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
"integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
"dev": true,
"dependencies": {
"es-define-property": "^1.0.0"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/has-proto": {
"version": "1.2.0",
"resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
"integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
"dev": true,
"dependencies": {
"dunder-proto": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/has-symbols": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
"integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/has-tostringtag": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
"integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
"dev": true,
"dependencies": {
"has-symbols": "^1.0.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/hasown": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
"integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
"dev": true,
"dependencies": {
"function-bind": "^1.1.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/ignore": {
"version": "5.3.2",
"resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
"integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
"dev": true,
"engines": {
"node": ">= 4"
}
},
"node_modules/import-fresh": {
"version": "3.3.1",
"resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
"integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
"dev": true,
"dependencies": {
"parent-module": "^1.0.0",
"resolve-from": "^4.0.0"
},
"engines": {
"node": ">=6"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/imurmurhash": {
"version": "0.1.4",
"resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
"integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
"dev": true,
"engines": {
"node": ">=0.8.19"
}
},
"node_modules/inflight": {
"version": "1.0.6",
"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
"integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
"deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
"dev": true,
"dependencies": {
"once": "^1.3.0",
"wrappy": "1"
}
},
"node_modules/inherits": {
"version": "2.0.4",
"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
"dev": true
},
"node_modules/internal-slot": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
"integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"hasown": "^2.0.2",
"side-channel": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/internmap": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz",
"integrity": "sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==",
"engines": {
"node": ">=12"
}
},
"node_modules/is-array-buffer": {
"version": "3.0.5",
"resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
"integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.3",
"get-intrinsic": "^1.2.6"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-async-function": {
"version": "2.1.1",
"resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
"integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
"dev": true,
"dependencies": {
"async-function": "^1.0.0",
"call-bound": "^1.0.3",
"get-proto": "^1.0.1",
"has-tostringtag": "^1.0.2",
"safe-regex-test": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-bigint": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
"integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
"dev": true,
"dependencies": {
"has-bigints": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-binary-path": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
"integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
"dev": true,
"dependencies": {
"binary-extensions": "^2.0.0"
},
"engines": {
"node": ">=8"
}
},
"node_modules/is-boolean-object": {
"version": "1.2.2",
"resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
"integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"has-tostringtag": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-bun-module": {
"version": "2.0.0",
"resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
"integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
"dev": true,
"dependencies": {
"semver": "^7.7.1"
}
},
"node_modules/is-callable": {
"version": "1.2.7",
"resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
"integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-core-module": {
"version": "2.16.1",
"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
"integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
"dev": true,
"dependencies": {
"hasown": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-data-view": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
"integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"get-intrinsic": "^1.2.6",
"is-typed-array": "^1.1.13"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-date-object": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
"integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"has-tostringtag": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-extglob": {
"version": "2.1.1",
"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
"integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/is-finalizationregistry": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
"integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-fullwidth-code-point": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/is-generator-function": {
"version": "1.1.2",
"resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
"integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.4",
"generator-function": "^2.0.0",
"get-proto": "^1.0.1",
"has-tostringtag": "^1.0.2",
"safe-regex-test": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-glob": {
"version": "4.0.3",
"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
"integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
"dev": true,
"dependencies": {
"is-extglob": "^2.1.1"
},
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/is-map": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
"integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-negative-zero": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
"integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-number": {
"version": "7.0.0",
"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
"dev": true,
"engines": {
"node": ">=0.12.0"
}
},
"node_modules/is-number-object": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
"integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"has-tostringtag": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-path-inside": {
"version": "3.0.3",
"resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
"integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/is-regex": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
"integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"gopd": "^1.2.0",
"has-tostringtag": "^1.0.2",
"hasown": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-set": {
"version": "2.0.3",
"resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
"integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-shared-array-buffer": {
"version": "1.0.4",
"resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
"integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-string": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
"integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"has-tostringtag": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-symbol": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
"integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"has-symbols": "^1.1.0",
"safe-regex-test": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-typed-array": {
"version": "1.1.15",
"resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
"integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
"dev": true,
"dependencies": {
"which-typed-array": "^1.1.16"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-weakmap": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
"integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-weakref": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
"integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/is-weakset": {
"version": "2.0.4",
"resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
"integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"get-intrinsic": "^1.2.6"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/isarray": {
"version": "2.0.5",
"resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
"integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
"dev": true
},
"node_modules/isexe": {
"version": "2.0.0",
"resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
"integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
"dev": true
},
"node_modules/iterator.prototype": {
"version": "1.1.5",
"resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
"integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
"dev": true,
"dependencies": {
"define-data-property": "^1.1.4",
"es-object-atoms": "^1.0.0",
"get-intrinsic": "^1.2.6",
"get-proto": "^1.0.0",
"has-symbols": "^1.1.0",
"set-function-name": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/jackspeak": {
"version": "2.3.6",
"resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
"integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
"dev": true,
"dependencies": {
"@isaacs/cliui": "^8.0.2"
},
"engines": {
"node": ">=14"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
},
"optionalDependencies": {
"@pkgjs/parseargs": "^0.11.0"
}
},
"node_modules/jiti": {
"version": "1.21.7",
"resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
"integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
"dev": true,
"bin": {
"jiti": "bin/jiti.js"
}
},
"node_modules/js-tokens": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
},
"node_modules/js-yaml": {
"version": "4.1.1",
"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
"integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
"dev": true,
"dependencies": {
"argparse": "^2.0.1"
},
"bin": {
"js-yaml": "bin/js-yaml.js"
}
},
"node_modules/json-buffer": {
"version": "3.0.1",
"resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
"integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
"dev": true
},
"node_modules/json-schema-traverse": {
"version": "0.4.1",
"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
"dev": true
},
"node_modules/json-stable-stringify-without-jsonify": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
"integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
"dev": true
},
"node_modules/json5": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
"integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
"dev": true,
"dependencies": {
"minimist": "^1.2.0"
},
"bin": {
"json5": "lib/cli.js"
}
},
"node_modules/jsx-ast-utils": {
"version": "3.3.5",
"resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
"integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
"dev": true,
"dependencies": {
"array-includes": "^3.1.6",
"array.prototype.flat": "^1.3.1",
"object.assign": "^4.1.4",
"object.values": "^1.1.6"
},
"engines": {
"node": ">=4.0"
}
},
"node_modules/keyv": {
"version": "4.5.4",
"resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
"integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
"dev": true,
"dependencies": {
"json-buffer": "3.0.1"
}
},
"node_modules/language-subtag-registry": {
"version": "0.3.23",
"resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
"integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
"dev": true
},
"node_modules/language-tags": {
"version": "1.0.9",
"resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
"integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
"dev": true,
"dependencies": {
"language-subtag-registry": "^0.3.20"
},
"engines": {
"node": ">=0.10"
}
},
"node_modules/levn": {
"version": "0.4.1",
"resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
"integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
"dev": true,
"dependencies": {
"prelude-ls": "^1.2.1",
"type-check": "~0.4.0"
},
"engines": {
"node": ">= 0.8.0"
}
},
"node_modules/lilconfig": {
"version": "2.1.0",
"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
"integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
"dev": true,
"engines": {
"node": ">=10"
}
},
"node_modules/lines-and-columns": {
"version": "1.2.4",
"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
"dev": true
},
"node_modules/locate-path": {
"version": "6.0.0",
"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
"integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
"dev": true,
"dependencies": {
"p-locate": "^5.0.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/lodash": {
"version": "4.17.21",
"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
},
"node_modules/lodash.merge": {
"version": "4.6.2",
"resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
"integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
"dev": true
},
"node_modules/loose-envify": {
"version": "1.4.0",
"resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
"integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
"dependencies": {
"js-tokens": "^3.0.0 || ^4.0.0"
},
"bin": {
"loose-envify": "cli.js"
}
},
"node_modules/lru-cache": {
"version": "10.4.3",
"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
"integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
"dev": true
},
"node_modules/lucide-react": {
"version": "0.323.0",
"resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.323.0.tgz",
"integrity": "sha512-rTXZFILl2Y4d1SG9p1Mdcf17AcPvPvpc/egFIzUrp7IUy60MUQo3Oi1mu8LGYXUVwuRZYsSMt3csHRW5mAovJg==",
"peerDependencies": {
"react": "^16.5.1 || ^17.0.0 || ^18.0.0"
}
},
"node_modules/math-intrinsics": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
"integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/merge2": {
"version": "1.4.1",
"resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
"integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
"dev": true,
"engines": {
"node": ">= 8"
}
},
"node_modules/micromatch": {
"version": "4.0.8",
"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
"integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
"dev": true,
"dependencies": {
"braces": "^3.0.3",
"picomatch": "^2.3.1"
},
"engines": {
"node": ">=8.6"
}
},
"node_modules/minimatch": {
"version": "3.1.2",
"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
"dev": true,
"dependencies": {
"brace-expansion": "^1.1.7"
},
"engines": {
"node": "_"
}
},
"node_modules/minimist": {
"version": "1.2.8",
"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
"integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
"dev": true,
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/minipass": {
"version": "7.1.2",
"resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
"integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
"dev": true,
"engines": {
"node": ">=16 || 14 >=14.17"
}
},
"node_modules/ms": {
"version": "2.1.3",
"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
"dev": true
},
"node_modules/mz": {
"version": "2.7.0",
"resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
"integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
"dev": true,
"dependencies": {
"any-promise": "^1.0.0",
"object-assign": "^4.0.1",
"thenify-all": "^1.0.0"
}
},
"node_modules/nanoid": {
"version": "3.3.11",
"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
"integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
"funding": [
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"bin": {
"nanoid": "bin/nanoid.cjs"
},
"engines": {
"node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
}
},
"node_modules/napi-postinstall": {
"version": "0.3.4",
"resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
"integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
"dev": true,
"bin": {
"napi-postinstall": "lib/cli.js"
},
"engines": {
"node": "^12.20.0 || ^14.18.0 || >=16.0.0"
},
"funding": {
"url": "https://opencollective.com/napi-postinstall"
}
},
"node_modules/natural-compare": {
"version": "1.4.0",
"resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
"integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
"dev": true
},
"node_modules/next": {
"version": "14.1.0",
"resolved": "https://registry.npmjs.org/next/-/next-14.1.0.tgz",
"integrity": "sha512-wlzrsbfeSU48YQBjZhDzOwhWhGsy+uQycR8bHAOt1LY1bn3zZEcDyHQOEoN3aWzQ8LHCAJ1nqrWCc9XF2+O45Q==",
"deprecated": "This version has a security vulnerability. Please upgrade to a patched version. See https://nextjs.org/blog/security-update-2025-12-11 for more details.",
"dependencies": {
"@next/env": "14.1.0",
"@swc/helpers": "0.5.2",
"busboy": "1.6.0",
"caniuse-lite": "^1.0.30001579",
"graceful-fs": "^4.2.11",
"postcss": "8.4.31",
"styled-jsx": "5.1.1"
},
"bin": {
"next": "dist/bin/next"
},
"engines": {
"node": ">=18.17.0"
},
"optionalDependencies": {
"@next/swc-darwin-arm64": "14.1.0",
"@next/swc-darwin-x64": "14.1.0",
"@next/swc-linux-arm64-gnu": "14.1.0",
"@next/swc-linux-arm64-musl": "14.1.0",
"@next/swc-linux-x64-gnu": "14.1.0",
"@next/swc-linux-x64-musl": "14.1.0",
"@next/swc-win32-arm64-msvc": "14.1.0",
"@next/swc-win32-ia32-msvc": "14.1.0",
"@next/swc-win32-x64-msvc": "14.1.0"
},
"peerDependencies": {
"@opentelemetry/api": "^1.1.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"sass": "^1.3.0"
},
"peerDependenciesMeta": {
"@opentelemetry/api": {
"optional": true
},
"sass": {
"optional": true
}
}
},
"node_modules/next/node_modules/postcss": {
"version": "8.4.31",
"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
"integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/postcss"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"nanoid": "^3.3.6",
"picocolors": "^1.0.0",
"source-map-js": "^1.0.2"
},
"engines": {
"node": "^10 || ^12 || >=14"
}
},
"node_modules/node-releases": {
"version": "2.0.27",
"resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
"integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
"dev": true
},
"node_modules/normalize-path": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
"integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/normalize-range": {
"version": "0.1.2",
"resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
"integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/object-assign": {
"version": "4.1.1",
"resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
"integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/object-hash": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
"integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
"dev": true,
"engines": {
"node": ">= 6"
}
},
"node_modules/object-inspect": {
"version": "1.13.4",
"resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
"integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/object-keys": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
"integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/object.assign": {
"version": "4.1.7",
"resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
"integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.3",
"define-properties": "^1.2.1",
"es-object-atoms": "^1.0.0",
"has-symbols": "^1.1.0",
"object-keys": "^1.1.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/object.entries": {
"version": "1.1.9",
"resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
"integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"define-properties": "^1.2.1",
"es-object-atoms": "^1.1.1"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/object.fromentries": {
"version": "2.0.8",
"resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
"integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.2",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/object.groupby": {
"version": "1.0.3",
"resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
"integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/object.values": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
"integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.3",
"define-properties": "^1.2.1",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/once": {
"version": "1.4.0",
"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
"integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
"dev": true,
"dependencies": {
"wrappy": "1"
}
},
"node_modules/optionator": {
"version": "0.9.4",
"resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
"integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
"dev": true,
"dependencies": {
"deep-is": "^0.1.3",
"fast-levenshtein": "^2.0.6",
"levn": "^0.4.1",
"prelude-ls": "^1.2.1",
"type-check": "^0.4.0",
"word-wrap": "^1.2.5"
},
"engines": {
"node": ">= 0.8.0"
}
},
"node_modules/own-keys": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
"integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
"dev": true,
"dependencies": {
"get-intrinsic": "^1.2.6",
"object-keys": "^1.1.1",
"safe-push-apply": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/p-limit": {
"version": "3.1.0",
"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
"integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
"dev": true,
"dependencies": {
"yocto-queue": "^0.1.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/p-locate": {
"version": "5.0.0",
"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
"integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
"dev": true,
"dependencies": {
"p-limit": "^3.0.2"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/parent-module": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
"integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
"dev": true,
"dependencies": {
"callsites": "^3.0.0"
},
"engines": {
"node": ">=6"
}
},
"node_modules/path-exists": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
"integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/path-is-absolute": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
"integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/path-key": {
"version": "3.1.1",
"resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
"integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/path-parse": {
"version": "1.0.7",
"resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
"integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
"dev": true
},
"node_modules/path-scurry": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
"integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
"dev": true,
"dependencies": {
"lru-cache": "^10.2.0",
"minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
},
"engines": {
"node": ">=16 || 14 >=14.18"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/path-type": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
"integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/picocolors": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
"integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="
},
"node_modules/picomatch": {
"version": "2.3.1",
"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
"dev": true,
"engines": {
"node": ">=8.6"
},
"funding": {
"url": "https://github.com/sponsors/jonschlinkert"
}
},
"node_modules/pify": {
"version": "2.3.0",
"resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
"integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/pirates": {
"version": "4.0.7",
"resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
"integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
"dev": true,
"engines": {
"node": ">= 6"
}
},
"node_modules/possible-typed-array-names": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
"integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
"dev": true,
"engines": {
"node": ">= 0.4"
}
},
"node_modules/postcss": {
"version": "8.4.35",
"resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.35.tgz",
"integrity": "sha512-u5U8qYpBCpN13BsiEB0CbR1Hhh4Gc0zLFuedrHJKMctHCHAGrMdG0PRM/KErzAL3CU6/eckEtmHNB3x6e3c0vA==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/postcss"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"nanoid": "^3.3.7",
"picocolors": "^1.0.0",
"source-map-js": "^1.0.2"
},
"engines": {
"node": "^10 || ^12 || >=14"
}
},
"node_modules/postcss-import": {
"version": "15.1.0",
"resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
"integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
"dev": true,
"dependencies": {
"postcss-value-parser": "^4.0.0",
"read-cache": "^1.0.0",
"resolve": "^1.1.7"
},
"engines": {
"node": ">=14.0.0"
},
"peerDependencies": {
"postcss": "^8.0.0"
}
},
"node_modules/postcss-js": {
"version": "4.1.0",
"resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
"integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"camelcase-css": "^2.0.1"
},
"engines": {
"node": "^12 || ^14 || >= 16"
},
"peerDependencies": {
"postcss": "^8.4.21"
}
},
"node_modules/postcss-nested": {
"version": "6.2.0",
"resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
"integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"postcss-selector-parser": "^6.1.1"
},
"engines": {
"node": ">=12.0"
},
"peerDependencies": {
"postcss": "^8.2.14"
}
},
"node_modules/postcss-selector-parser": {
"version": "6.1.2",
"resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
"integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
"dev": true,
"dependencies": {
"cssesc": "^3.0.0",
"util-deprecate": "^1.0.2"
},
"engines": {
"node": ">=4"
}
},
"node_modules/postcss-value-parser": {
"version": "4.2.0",
"resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
"integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
"dev": true
},
"node_modules/prelude-ls": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
"integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
"dev": true,
"engines": {
"node": ">= 0.8.0"
}
},
"node_modules/prisma": {
"version": "5.9.0",
"resolved": "https://registry.npmjs.org/prisma/-/prisma-5.9.0.tgz",
"integrity": "sha512-0UcOofjNuAnd227JMaPqZvP01dsUXw9EXB9iC8fyoZtfv7zkQ0ozxyjY1g+vcjFPOnNLICMnLHx+lM5BJZYqOQ==",
"devOptional": true,
"hasInstallScript": true,
"dependencies": {
"@prisma/engines": "5.9.0"
},
"bin": {
"prisma": "build/index.js"
},
"engines": {
"node": ">=16.13"
}
},
"node_modules/prop-types": {
"version": "15.8.1",
"resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
"integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
"dependencies": {
"loose-envify": "^1.4.0",
"object-assign": "^4.1.1",
"react-is": "^16.13.1"
}
},
"node_modules/punycode": {
"version": "2.3.1",
"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
"integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
"dev": true,
"engines": {
"node": ">=6"
}
},
"node_modules/queue-microtask": {
"version": "1.2.3",
"resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
"integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
"dev": true,
"funding": [
{
"type": "github",
"url": "https://github.com/sponsors/feross"
},
{
"type": "patreon",
"url": "https://www.patreon.com/feross"
},
{
"type": "consulting",
"url": "https://feross.org/support"
}
]
},
"node_modules/react": {
"version": "18.2.0",
"resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
"integrity": "sha512-/3IjMdb2L9QbBdWiW5e3P2/npwMBaU9mHCSCUzNln0ZCYbcfTsGbTJrU/kGemdH2IWmB2ioZ+zkxtmq6g09fGQ==",
"dependencies": {
"loose-envify": "^1.1.0"
},
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/react-dom": {
"version": "18.2.0",
"resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.2.0.tgz",
"integrity": "sha512-6IMTriUmvsjHUjNtEDudZfuDQUoWXVxKHhlEGSk81n4YFS+r/Kl99wXiwlVXtPBtJenozv2P+hxDsw9eA7Xo6g==",
"dependencies": {
"loose-envify": "^1.1.0",
"scheduler": "^0.23.0"
},
"peerDependencies": {
"react": "^18.2.0"
}
},
"node_modules/react-is": {
"version": "16.13.1",
"resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
"integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
},
"node_modules/react-smooth": {
"version": "4.0.4",
"resolved": "https://registry.npmjs.org/react-smooth/-/react-smooth-4.0.4.tgz",
"integrity": "sha512-gnGKTpYwqL0Iii09gHobNolvX4Kiq4PKx6eWBCYYix+8cdw+cGo3do906l1NBPKkSWx1DghC1dlWG9L2uGd61Q==",
"dependencies": {
"fast-equals": "^5.0.1",
"prop-types": "^15.8.1",
"react-transition-group": "^4.4.5"
},
"peerDependencies": {
"react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
"react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
}
},
"node_modules/react-transition-group": {
"version": "4.4.5",
"resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.5.tgz",
"integrity": "sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==",
"dependencies": {
"@babel/runtime": "^7.5.5",
"dom-helpers": "^5.0.1",
"loose-envify": "^1.4.0",
"prop-types": "^15.6.2"
},
"peerDependencies": {
"react": ">=16.6.0",
"react-dom": ">=16.6.0"
}
},
"node_modules/read-cache": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
"integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
"dev": true,
"dependencies": {
"pify": "^2.3.0"
}
},
"node_modules/readdirp": {
"version": "3.6.0",
"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
"integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
"dev": true,
"dependencies": {
"picomatch": "^2.2.1"
},
"engines": {
"node": ">=8.10.0"
}
},
"node_modules/recharts": {
"version": "2.12.0",
"resolved": "https://registry.npmjs.org/recharts/-/recharts-2.12.0.tgz",
"integrity": "sha512-rVNcdNQ5b7+40Ue7mcEKZJyEv+3SUk2bDEVvOyXPDXXVE7TU3lrvnJUgAvO36hSzhRP2DnAamKXvHLFIFOU0Ww==",
"dependencies": {
"clsx": "^2.0.0",
"eventemitter3": "^4.0.1",
"lodash": "^4.17.19",
"react-is": "^16.10.2",
"react-smooth": "^4.0.0",
"recharts-scale": "^0.4.4",
"tiny-invariant": "^1.3.1",
"victory-vendor": "^36.6.8"
},
"engines": {
"node": ">=14"
},
"peerDependencies": {
"react": "^16.0.0 || ^17.0.0 || ^18.0.0",
"react-dom": "^16.0.0 || ^17.0.0 || ^18.0.0"
}
},
"node_modules/recharts-scale": {
"version": "0.4.5",
"resolved": "https://registry.npmjs.org/recharts-scale/-/recharts-scale-0.4.5.tgz",
"integrity": "sha512-kivNFO+0OcUNu7jQquLXAxz1FIwZj8nrj+YkOKc5694NbjCvcT6aSZiIzNzd2Kul4o4rTto8QVR9lMNtxD4G1w==",
"dependencies": {
"decimal.js-light": "^2.4.1"
}
},
"node_modules/reflect.getprototypeof": {
"version": "1.0.10",
"resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
"integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.9",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.0.0",
"get-intrinsic": "^1.2.7",
"get-proto": "^1.0.1",
"which-builtin-type": "^1.2.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/regexp.prototype.flags": {
"version": "1.5.4",
"resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
"integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"define-properties": "^1.2.1",
"es-errors": "^1.3.0",
"get-proto": "^1.0.1",
"gopd": "^1.2.0",
"set-function-name": "^2.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/resolve": {
"version": "1.22.11",
"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
"integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
"dev": true,
"dependencies": {
"is-core-module": "^2.16.1",
"path-parse": "^1.0.7",
"supports-preserve-symlinks-flag": "^1.0.0"
},
"bin": {
"resolve": "bin/resolve"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/resolve-from": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
"dev": true,
"engines": {
"node": ">=4"
}
},
"node_modules/resolve-pkg-maps": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
"integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
"dev": true,
"funding": {
"url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
}
},
"node_modules/reusify": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
"integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
"dev": true,
"engines": {
"iojs": ">=1.0.0",
"node": ">=0.10.0"
}
},
"node_modules/rimraf": {
"version": "3.0.2",
"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
"integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
"deprecated": "Rimraf versions prior to v4 are no longer supported",
"dev": true,
"dependencies": {
"glob": "^7.1.3"
},
"bin": {
"rimraf": "bin.js"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/rimraf/node_modules/glob": {
"version": "7.2.3",
"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
"deprecated": "Glob versions prior to v9 are no longer supported",
"dev": true,
"dependencies": {
"fs.realpath": "^1.0.0",
"inflight": "^1.0.4",
"inherits": "2",
"minimatch": "^3.1.1",
"once": "^1.3.0",
"path-is-absolute": "^1.0.0"
},
"engines": {
"node": "\*"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/run-parallel": {
"version": "1.2.0",
"resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
"integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
"dev": true,
"funding": [
{
"type": "github",
"url": "https://github.com/sponsors/feross"
},
{
"type": "patreon",
"url": "https://www.patreon.com/feross"
},
{
"type": "consulting",
"url": "https://feross.org/support"
}
],
"dependencies": {
"queue-microtask": "^1.2.2"
}
},
"node_modules/safe-array-concat": {
"version": "1.1.3",
"resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
"integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.2",
"get-intrinsic": "^1.2.6",
"has-symbols": "^1.1.0",
"isarray": "^2.0.5"
},
"engines": {
"node": ">=0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/safe-push-apply": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
"integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"isarray": "^2.0.5"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/safe-regex-test": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
"integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"es-errors": "^1.3.0",
"is-regex": "^1.2.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/scheduler": {
"version": "0.23.2",
"resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
"integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
"dependencies": {
"loose-envify": "^1.1.0"
}
},
"node_modules/semver": {
"version": "7.7.3",
"resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
"integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
"dev": true,
"bin": {
"semver": "bin/semver.js"
},
"engines": {
"node": ">=10"
}
},
"node_modules/set-function-length": {
"version": "1.2.2",
"resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
"integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
"dev": true,
"dependencies": {
"define-data-property": "^1.1.4",
"es-errors": "^1.3.0",
"function-bind": "^1.1.2",
"get-intrinsic": "^1.2.4",
"gopd": "^1.0.1",
"has-property-descriptors": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/set-function-name": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
"integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
"dev": true,
"dependencies": {
"define-data-property": "^1.1.4",
"es-errors": "^1.3.0",
"functions-have-names": "^1.2.3",
"has-property-descriptors": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/set-proto": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
"integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
"dev": true,
"dependencies": {
"dunder-proto": "^1.0.1",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/shebang-command": {
"version": "2.0.0",
"resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
"integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
"dev": true,
"dependencies": {
"shebang-regex": "^3.0.0"
},
"engines": {
"node": ">=8"
}
},
"node_modules/shebang-regex": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
"integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/side-channel": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
"integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"object-inspect": "^1.13.3",
"side-channel-list": "^1.0.0",
"side-channel-map": "^1.0.1",
"side-channel-weakmap": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/side-channel-list": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
"integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"object-inspect": "^1.13.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/side-channel-map": {
"version": "1.0.1",
"resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
"integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"es-errors": "^1.3.0",
"get-intrinsic": "^1.2.5",
"object-inspect": "^1.13.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/side-channel-weakmap": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
"integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"es-errors": "^1.3.0",
"get-intrinsic": "^1.2.5",
"object-inspect": "^1.13.3",
"side-channel-map": "^1.0.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/signal-exit": {
"version": "4.1.0",
"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
"integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
"dev": true,
"engines": {
"node": ">=14"
},
"funding": {
"url": "https://github.com/sponsors/isaacs"
}
},
"node_modules/slash": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
"integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
"dev": true,
"engines": {
"node": ">=8"
}
},
"node_modules/source-map-js": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
"integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/stable-hash": {
"version": "0.0.5",
"resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
"integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
"dev": true
},
"node_modules/stop-iteration-iterator": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
"integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
"dev": true,
"dependencies": {
"es-errors": "^1.3.0",
"internal-slot": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/streamsearch": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
"integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
"engines": {
"node": ">=10.0.0"
}
},
"node_modules/string-width": {
"version": "5.1.2",
"resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
"integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
"dev": true,
"dependencies": {
"eastasianwidth": "^0.2.0",
"emoji-regex": "^9.2.2",
"strip-ansi": "^7.0.1"
},
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/string-width-cjs": {
"name": "string-width",
"version": "4.2.3",
"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
"dev": true,
"dependencies": {
"emoji-regex": "^8.0.0",
"is-fullwidth-code-point": "^3.0.0",
"strip-ansi": "^6.0.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/string-width-cjs/node_modules/emoji-regex": {
"version": "8.0.0",
"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
"dev": true
},
"node_modules/string-width/node_modules/ansi-regex": {
"version": "6.2.2",
"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
"integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
"dev": true,
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/ansi-regex?sponsor=1"
}
},
"node_modules/string-width/node_modules/strip-ansi": {
"version": "7.1.2",
"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
"integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
"dev": true,
"dependencies": {
"ansi-regex": "^6.0.1"
},
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/strip-ansi?sponsor=1"
}
},
"node_modules/string.prototype.includes": {
"version": "2.0.1",
"resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
"integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.3"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/string.prototype.matchall": {
"version": "4.0.12",
"resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
"integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.3",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.6",
"es-errors": "^1.3.0",
"es-object-atoms": "^1.0.0",
"get-intrinsic": "^1.2.6",
"gopd": "^1.2.0",
"has-symbols": "^1.1.0",
"internal-slot": "^1.1.0",
"regexp.prototype.flags": "^1.5.3",
"set-function-name": "^2.0.2",
"side-channel": "^1.1.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/string.prototype.repeat": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
"integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
"dev": true,
"dependencies": {
"define-properties": "^1.1.3",
"es-abstract": "^1.17.5"
}
},
"node_modules/string.prototype.trim": {
"version": "1.2.10",
"resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
"integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.2",
"define-data-property": "^1.1.4",
"define-properties": "^1.2.1",
"es-abstract": "^1.23.5",
"es-object-atoms": "^1.0.0",
"has-property-descriptors": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/string.prototype.trimend": {
"version": "1.0.9",
"resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
"integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"call-bound": "^1.0.2",
"define-properties": "^1.2.1",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/string.prototype.trimstart": {
"version": "1.0.8",
"resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
"integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"define-properties": "^1.2.1",
"es-object-atoms": "^1.0.0"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/strip-ansi": {
"version": "6.0.1",
"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
"dev": true,
"dependencies": {
"ansi-regex": "^5.0.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/strip-ansi-cjs": {
"name": "strip-ansi",
"version": "6.0.1",
"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
"dev": true,
"dependencies": {
"ansi-regex": "^5.0.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/strip-bom": {
"version": "3.0.0",
"resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
"integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
"dev": true,
"engines": {
"node": ">=4"
}
},
"node_modules/strip-json-comments": {
"version": "3.1.1",
"resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
"integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
"dev": true,
"engines": {
"node": ">=8"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/styled-jsx": {
"version": "5.1.1",
"resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.1.tgz",
"integrity": "sha512-pW7uC1l4mBZ8ugbiZrcIsiIvVx1UmTfw7UkC3Um2tmfUq9Bhk8IiyEIPl6F8agHgjzku6j0xQEZbfA5uSgSaCw==",
"dependencies": {
"client-only": "0.0.1"
},
"engines": {
"node": ">= 12.0.0"
},
"peerDependencies": {
"react": ">= 16.8.0 || 17.x.x || ^18.0.0-0"
},
"peerDependenciesMeta": {
"@babel/core": {
"optional": true
},
"babel-plugin-macros": {
"optional": true
}
}
},
"node_modules/sucrase": {
"version": "3.35.1",
"resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz",
"integrity": "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==",
"dev": true,
"dependencies": {
"@jridgewell/gen-mapping": "^0.3.2",
"commander": "^4.0.0",
"lines-and-columns": "^1.1.6",
"mz": "^2.7.0",
"pirates": "^4.0.1",
"tinyglobby": "^0.2.11",
"ts-interface-checker": "^0.1.9"
},
"bin": {
"sucrase": "bin/sucrase",
"sucrase-node": "bin/sucrase-node"
},
"engines": {
"node": ">=16 || 14 >=14.17"
}
},
"node_modules/supports-color": {
"version": "7.2.0",
"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
"dev": true,
"dependencies": {
"has-flag": "^4.0.0"
},
"engines": {
"node": ">=8"
}
},
"node_modules/supports-preserve-symlinks-flag": {
"version": "1.0.0",
"resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
"integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
"dev": true,
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/tailwind-merge": {
"version": "2.2.1",
"resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-2.2.1.tgz",
"integrity": "sha512-o+2GTLkthfa5YUt4JxPfzMIpQzZ3adD1vLVkvKE1Twl9UAhGsEbIZhHHZVRttyW177S8PDJI3bTQNaebyofK3Q==",
"dependencies": {
"@babel/runtime": "^7.23.7"
},
"funding": {
"type": "github",
"url": "https://github.com/sponsors/dcastil"
}
},
"node_modules/tailwindcss": {
"version": "3.4.1",
"resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.1.tgz",
"integrity": "sha512-qAYmXRfk3ENzuPBakNK0SRrUDipP8NQnEY6772uDhflcQz5EhRdD7JNZxyrFHVQNCwULPBn6FNPp9brpO7ctcA==",
"dev": true,
"dependencies": {
"@alloc/quick-lru": "^5.2.0",
"arg": "^5.0.2",
"chokidar": "^3.5.3",
"didyoumean": "^1.2.2",
"dlv": "^1.1.3",
"fast-glob": "^3.3.0",
"glob-parent": "^6.0.2",
"is-glob": "^4.0.3",
"jiti": "^1.19.1",
"lilconfig": "^2.1.0",
"micromatch": "^4.0.5",
"normalize-path": "^3.0.0",
"object-hash": "^3.0.0",
"picocolors": "^1.0.0",
"postcss": "^8.4.23",
"postcss-import": "^15.1.0",
"postcss-js": "^4.0.1",
"postcss-load-config": "^4.0.1",
"postcss-nested": "^6.0.1",
"postcss-selector-parser": "^6.0.11",
"resolve": "^1.22.2",
"sucrase": "^3.32.0"
},
"bin": {
"tailwind": "lib/cli.js",
"tailwindcss": "lib/cli.js"
},
"engines": {
"node": ">=14.0.0"
}
},
"node_modules/tailwindcss/node_modules/postcss-load-config": {
"version": "4.0.2",
"resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
"integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/postcss/"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"lilconfig": "^3.0.0",
"yaml": "^2.3.4"
},
"engines": {
"node": ">= 14"
},
"peerDependencies": {
"postcss": ">=8.0.9",
"ts-node": ">=9.0.0"
},
"peerDependenciesMeta": {
"postcss": {
"optional": true
},
"ts-node": {
"optional": true
}
}
},
"node_modules/tailwindcss/node_modules/postcss-load-config/node_modules/lilconfig": {
"version": "3.1.3",
"resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
"integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
"dev": true,
"engines": {
"node": ">=14"
},
"funding": {
"url": "https://github.com/sponsors/antonk52"
}
},
"node_modules/text-table": {
"version": "0.2.0",
"resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
"integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
"dev": true
},
"node_modules/thenify": {
"version": "3.3.1",
"resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
"integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
"dev": true,
"dependencies": {
"any-promise": "^1.0.0"
}
},
"node_modules/thenify-all": {
"version": "1.6.0",
"resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
"integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
"dev": true,
"dependencies": {
"thenify": ">= 3.1.0 < 4"
},
"engines": {
"node": ">=0.8"
}
},
"node_modules/tiny-invariant": {
"version": "1.3.3",
"resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
"integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg=="
},
"node_modules/tinyglobby": {
"version": "0.2.15",
"resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
"integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
"dev": true,
"dependencies": {
"fdir": "^6.5.0",
"picomatch": "^4.0.3"
},
"engines": {
"node": ">=12.0.0"
},
"funding": {
"url": "https://github.com/sponsors/SuperchupuDev"
}
},
"node_modules/tinyglobby/node_modules/fdir": {
"version": "6.5.0",
"resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
"integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
"dev": true,
"engines": {
"node": ">=12.0.0"
},
"peerDependencies": {
"picomatch": "^3 || ^4"
},
"peerDependenciesMeta": {
"picomatch": {
"optional": true
}
}
},
"node_modules/tinyglobby/node_modules/picomatch": {
"version": "4.0.3",
"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
"integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
"dev": true,
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/sponsors/jonschlinkert"
}
},
"node_modules/to-regex-range": {
"version": "5.0.1",
"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
"dev": true,
"dependencies": {
"is-number": "^7.0.0"
},
"engines": {
"node": ">=8.0"
}
},
"node_modules/ts-api-utils": {
"version": "1.4.3",
"resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz",
"integrity": "sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==",
"dev": true,
"engines": {
"node": ">=16"
},
"peerDependencies": {
"typescript": ">=4.2.0"
}
},
"node_modules/ts-interface-checker": {
"version": "0.1.13",
"resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
"integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
"dev": true
},
"node_modules/tsconfig-paths": {
"version": "3.15.0",
"resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
"integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
"dev": true,
"dependencies": {
"@types/json5": "^0.0.29",
"json5": "^1.0.2",
"minimist": "^1.2.6",
"strip-bom": "^3.0.0"
}
},
"node_modules/tslib": {
"version": "2.8.1",
"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
"integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="
},
"node_modules/type-check": {
"version": "0.4.0",
"resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
"integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
"dev": true,
"dependencies": {
"prelude-ls": "^1.2.1"
},
"engines": {
"node": ">= 0.8.0"
}
},
"node_modules/type-fest": {
"version": "0.20.2",
"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
"integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
"dev": true,
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/typed-array-buffer": {
"version": "1.0.3",
"resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
"integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"es-errors": "^1.3.0",
"is-typed-array": "^1.1.14"
},
"engines": {
"node": ">= 0.4"
}
},
"node_modules/typed-array-byte-length": {
"version": "1.0.3",
"resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
"integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.8",
"for-each": "^0.3.3",
"gopd": "^1.2.0",
"has-proto": "^1.2.0",
"is-typed-array": "^1.1.14"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/typed-array-byte-offset": {
"version": "1.0.4",
"resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
"integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
"dev": true,
"dependencies": {
"available-typed-arrays": "^1.0.7",
"call-bind": "^1.0.8",
"for-each": "^0.3.3",
"gopd": "^1.2.0",
"has-proto": "^1.2.0",
"is-typed-array": "^1.1.15",
"reflect.getprototypeof": "^1.0.9"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/typed-array-length": {
"version": "1.0.7",
"resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
"integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
"dev": true,
"dependencies": {
"call-bind": "^1.0.7",
"for-each": "^0.3.3",
"gopd": "^1.0.1",
"is-typed-array": "^1.1.13",
"possible-typed-array-names": "^1.0.0",
"reflect.getprototypeof": "^1.0.6"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/typescript": {
"version": "5.3.3",
"resolved": "https://registry.npmjs.org/typescript/-/typescript-5.3.3.tgz",
"integrity": "sha512-pXWcraxM0uxAS+tN0AG/BF2TyqmHO014Z070UsJ+pFvYuRSq8KH8DmWpnbXe0pEPDHXZV3FcAbJkijJ5oNEnWw==",
"dev": true,
"bin": {
"tsc": "bin/tsc",
"tsserver": "bin/tsserver"
},
"engines": {
"node": ">=14.17"
}
},
"node_modules/unbox-primitive": {
"version": "1.1.0",
"resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
"integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.3",
"has-bigints": "^1.0.2",
"has-symbols": "^1.1.0",
"which-boxed-primitive": "^1.1.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/undici-types": {
"version": "5.26.5",
"resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
"integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
"dev": true
},
"node_modules/unrs-resolver": {
"version": "1.11.1",
"resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
"integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
"dev": true,
"hasInstallScript": true,
"dependencies": {
"napi-postinstall": "^0.3.0"
},
"funding": {
"url": "https://opencollective.com/unrs-resolver"
},
"optionalDependencies": {
"@unrs/resolver-binding-android-arm-eabi": "1.11.1",
"@unrs/resolver-binding-android-arm64": "1.11.1",
"@unrs/resolver-binding-darwin-arm64": "1.11.1",
"@unrs/resolver-binding-darwin-x64": "1.11.1",
"@unrs/resolver-binding-freebsd-x64": "1.11.1",
"@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
"@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
"@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
"@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
"@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
"@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
"@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
"@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
"@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
"@unrs/resolver-binding-linux-x64-musl": "1.11.1",
"@unrs/resolver-binding-wasm32-wasi": "1.11.1",
"@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
"@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
"@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
}
},
"node_modules/update-browserslist-db": {
"version": "1.2.3",
"resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
"integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
"dev": true,
"funding": [
{
"type": "opencollective",
"url": "https://opencollective.com/browserslist"
},
{
"type": "tidelift",
"url": "https://tidelift.com/funding/github/npm/browserslist"
},
{
"type": "github",
"url": "https://github.com/sponsors/ai"
}
],
"dependencies": {
"escalade": "^3.2.0",
"picocolors": "^1.1.1"
},
"bin": {
"update-browserslist-db": "cli.js"
},
"peerDependencies": {
"browserslist": ">= 4.21.0"
}
},
"node_modules/uri-js": {
"version": "4.4.1",
"resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
"integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
"dev": true,
"dependencies": {
"punycode": "^2.1.0"
}
},
"node_modules/use-sync-external-store": {
"version": "1.2.0",
"resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.2.0.tgz",
"integrity": "sha512-eEgnFxGQ1Ife9bzYs6VLi8/4X6CObHMw9Qr9tPY43iKwsPw8xE8+EFsf/2cFZ5S3esXgpWgtSCtLNS41F+sKPA==",
"peerDependencies": {
"react": "^16.8.0 || ^17.0.0 || ^18.0.0"
}
},
"node_modules/util-deprecate": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
"integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
"dev": true
},
"node_modules/victory-vendor": {
"version": "36.9.2",
"resolved": "https://registry.npmjs.org/victory-vendor/-/victory-vendor-36.9.2.tgz",
"integrity": "sha512-PnpQQMuxlwYdocC8fIJqVXvkeViHYzotI+NJrCuav0ZYFoq912ZHBk3mCeuj+5/VpodOjPe1z0Fk2ihgzlXqjQ==",
"dependencies": {
"@types/d3-array": "^3.0.3",
"@types/d3-ease": "^3.0.0",
"@types/d3-interpolate": "^3.0.1",
"@types/d3-scale": "^4.0.2",
"@types/d3-shape": "^3.1.0",
"@types/d3-time": "^3.0.0",
"@types/d3-timer": "^3.0.0",
"d3-array": "^3.1.6",
"d3-ease": "^3.0.1",
"d3-interpolate": "^3.0.1",
"d3-scale": "^4.0.2",
"d3-shape": "^3.1.0",
"d3-time": "^3.0.0",
"d3-timer": "^3.0.1"
}
},
"node_modules/which": {
"version": "2.0.2",
"resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
"integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
"dev": true,
"dependencies": {
"isexe": "^2.0.0"
},
"bin": {
"node-which": "bin/node-which"
},
"engines": {
"node": ">= 8"
}
},
"node_modules/which-boxed-primitive": {
"version": "1.1.1",
"resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
"integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
"dev": true,
"dependencies": {
"is-bigint": "^1.1.0",
"is-boolean-object": "^1.2.1",
"is-number-object": "^1.1.1",
"is-string": "^1.1.1",
"is-symbol": "^1.1.1"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/which-builtin-type": {
"version": "1.2.1",
"resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
"integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
"dev": true,
"dependencies": {
"call-bound": "^1.0.2",
"function.prototype.name": "^1.1.6",
"has-tostringtag": "^1.0.2",
"is-async-function": "^2.0.0",
"is-date-object": "^1.1.0",
"is-finalizationregistry": "^1.1.0",
"is-generator-function": "^1.0.10",
"is-regex": "^1.2.1",
"is-weakref": "^1.0.2",
"isarray": "^2.0.5",
"which-boxed-primitive": "^1.1.0",
"which-collection": "^1.0.2",
"which-typed-array": "^1.1.16"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/which-collection": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
"integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
"dev": true,
"dependencies": {
"is-map": "^2.0.3",
"is-set": "^2.0.3",
"is-weakmap": "^2.0.2",
"is-weakset": "^2.0.3"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/which-typed-array": {
"version": "1.1.19",
"resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.19.tgz",
"integrity": "sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==",
"dev": true,
"dependencies": {
"available-typed-arrays": "^1.0.7",
"call-bind": "^1.0.8",
"call-bound": "^1.0.4",
"for-each": "^0.3.5",
"get-proto": "^1.0.1",
"gopd": "^1.2.0",
"has-tostringtag": "^1.0.2"
},
"engines": {
"node": ">= 0.4"
},
"funding": {
"url": "https://github.com/sponsors/ljharb"
}
},
"node_modules/word-wrap": {
"version": "1.2.5",
"resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
"integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
"dev": true,
"engines": {
"node": ">=0.10.0"
}
},
"node_modules/wrap-ansi": {
"version": "8.1.0",
"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
"integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
"dev": true,
"dependencies": {
"ansi-styles": "^6.1.0",
"string-width": "^5.0.1",
"strip-ansi": "^7.0.1"
},
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
}
},
"node_modules/wrap-ansi-cjs": {
"name": "wrap-ansi",
"version": "7.0.0",
"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
"integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
"dev": true,
"dependencies": {
"ansi-styles": "^4.0.0",
"string-width": "^4.1.0",
"strip-ansi": "^6.0.0"
},
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/chalk/wrap-ansi?sponsor=1"
}
},
"node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
"version": "8.0.0",
"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
"dev": true
},
"node_modules/wrap-ansi-cjs/node_modules/string-width": {
"version": "4.2.3",
"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
"dev": true,
"dependencies": {
"emoji-regex": "^8.0.0",
"is-fullwidth-code-point": "^3.0.0",
"strip-ansi": "^6.0.1"
},
"engines": {
"node": ">=8"
}
},
"node_modules/wrap-ansi/node_modules/ansi-regex": {
"version": "6.2.2",
"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
"integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
"dev": true,
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/ansi-regex?sponsor=1"
}
},
"node_modules/wrap-ansi/node_modules/ansi-styles": {
"version": "6.2.3",
"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
"integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
"dev": true,
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/ansi-styles?sponsor=1"
}
},
"node_modules/wrap-ansi/node_modules/strip-ansi": {
"version": "7.1.2",
"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
"integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
"dev": true,
"dependencies": {
"ansi-regex": "^6.0.1"
},
"engines": {
"node": ">=12"
},
"funding": {
"url": "https://github.com/chalk/strip-ansi?sponsor=1"
}
},
"node_modules/wrappy": {
"version": "1.0.2",
"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
"integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
"dev": true
},
"node_modules/yaml": {
"version": "2.8.2",
"resolved": "https://registry.npmjs.org/yaml/-/yaml-2.8.2.tgz",
"integrity": "sha512-mplynKqc1C2hTVYxd0PU2xQAc22TI1vShAYGksCCfxbn/dFwnHTNi1bvYsBTkhdUNtGIf5xNOg938rrSSYvS9A==",
"dev": true,
"bin": {
"yaml": "bin.mjs"
},
"engines": {
"node": ">= 14.6"
},
"funding": {
"url": "https://github.com/sponsors/eemeli"
}
},
"node_modules/yocto-queue": {
"version": "0.1.0",
"resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
"integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
"dev": true,
"engines": {
"node": ">=10"
},
"funding": {
"url": "https://github.com/sponsors/sindresorhus"
}
},
"node_modules/zustand": {
"version": "4.5.0",
"resolved": "https://registry.npmjs.org/zustand/-/zustand-4.5.0.tgz",
"integrity": "sha512-zlVFqS5TQ21nwijjhJlx4f9iGrXSL0o/+Dpy4txAP22miJ8Ti6c1Ol1RLNN98BMib83lmDH/2KmLwaNXpjrO1A==",
"dependencies": {
"use-sync-external-store": "1.2.0"
},
"engines": {
"node": ">=12.7.0"
},
"peerDependencies": {
"@types/react": ">=16.8",
"immer": ">=9.0.6",
"react": ">=16.8"
},
"peerDependenciesMeta": {
"@types/react": {
"optional": true
},
"immer": {
"optional": true
},
"react": {
"optional": true
}
}
}
}
}

================================================================================

# File: platform/package.json

================================================================================

{
"name": "narrative-identity-app",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"db:push": "prisma db push",
"db:generate": "prisma generate",
"db:studio": "prisma studio"
},
"dependencies": {
"next": "14.1.0",
"react": "18.2.0",
"react-dom": "18.2.0",
"@prisma/client": "5.9.0",
"zustand": "4.5.0",
"framer-motion": "11.0.3",
"lucide-react": "0.323.0",
"clsx": "2.1.0",
"tailwind-merge": "2.2.1",
"date-fns": "3.3.1",
"recharts": "2.12.0"
},
"devDependencies": {
"typescript": "5.3.3",
"@types/node": "20.11.16",
"@types/react": "18.2.55",
"@types/react-dom": "18.2.19",
"autoprefixer": "10.4.17",
"postcss": "8.4.35",
"tailwindcss": "3.4.1",
"prisma": "5.9.0",
"eslint": "8.56.0",
"eslint-config-next": "14.1.0"
}
}

================================================================================

# File: platform/tailwind.config.ts

================================================================================

import type { Config } from 'tailwindcss';

const config: Config = {
content: [
'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
darkMode: 'class',
theme: {
extend: {
colors: {
// Primary palette
bg: {
primary: 'var(--color-bg-primary)',
secondary: 'var(--color-bg-secondary)',
tertiary: 'var(--color-bg-tertiary)',
},
text: {
primary: 'var(--color-text-primary)',
secondary: 'var(--color-text-secondary)',
muted: 'var(--color-text-muted)',
},
accent: {
primary: 'var(--color-accent-primary)',
secondary: 'var(--color-accent-secondary)',
tertiary: 'var(--color-accent-tertiary)',
},
// Approach colors
anchoring: 'var(--color-anchoring)',
dialogical: 'var(--color-dialogical)',
storytelling: 'var(--color-storytelling)',
// Status colors
success: 'var(--color-success)',
warning: 'var(--color-warning)',
error: 'var(--color-error)',
},
fontFamily: {
display: ['Playfair Display', 'serif'],
body: ['Source Sans Pro', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.5s ease-out',
'pulse-soft': 'pulseSoft 2s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
pulseSoft: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.7' },
},
},
},
},
plugins: [],
};

export default config;

================================================================================

# File: platform/tsconfig.json

================================================================================

{
"compilerOptions": {
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"strict": true,
"noEmit": true,
"esModuleInterop": true,
"module": "esnext",
"moduleResolution": "bundler",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "preserve",
"incremental": true,
"plugins": [
{
"name": "next"
}
],
"paths": {
"@/_": ["./src/_"]
}
},
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
"exclude": ["node_modules"]
}

================================================================================

# File: platform/src/app/globals.css

================================================================================

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
/_ Light Theme _/
--color-bg-primary: #FDFCFB;
--color-bg-secondary: #F5F3F0;
--color-bg-tertiary: #EDEAE6;

--color-text-primary: #1A1A1A;
--color-text-secondary: #4A4A4A;
--color-text-muted: #8A8A8A;

--color-accent-primary: #5B4FDB;
--color-accent-secondary: #38B2AC;
--color-accent-tertiary: #ED8936;

--color-success: #48BB78;
--color-warning: #ECC94B;
--color-error: #F56565;

--color-anchoring: #6B46C1;
--color-dialogical: #319795;
--color-storytelling: #DD6B20;
}

.dark {
--color-bg-primary: #1A1A2E;
--color-bg-secondary: #252540;
--color-bg-tertiary: #2E2E4A;

--color-text-primary: #F5F5F5;
--color-text-secondary: #C4C4C4;
--color-text-muted: #888888;

--color-accent-primary: #7C6FEB;
--color-accent-secondary: #4FD1C5;
--color-accent-tertiary: #F6AD55;

--color-success: #68D391;
--color-warning: #F6E05E;
--color-error: #FC8181;

--color-anchoring: #9F7AEA;
--color-dialogical: #4FD1C5;
--color-storytelling: #F6AD55;
}

@layer base {
html {
font-family: 'Source Sans Pro', sans-serif;
scroll-behavior: smooth;
}

body {
@apply bg-bg-primary text-text-primary;
min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Playfair Display', serif;
}

code, pre {
font-family: 'JetBrains Mono', monospace;
}
}

@layer components {
.card {
@apply bg-bg-secondary rounded-2xl p-6 shadow-md;
}

.card-interactive {
@apply card transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer;
}

.btn {
@apply inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200;
}

.btn-primary {
@apply btn bg-accent-primary text-white hover:opacity-90 active:scale-95;
}

.btn-secondary {
@apply btn bg-bg-tertiary text-text-primary hover:bg-bg-secondary active:scale-95;
}

.btn-ghost {
@apply btn bg-transparent text-text-secondary hover:bg-bg-tertiary active:scale-95;
}

.input {
@apply w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-transparent
focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20
transition-all duration-200;
}

.progress-ring {
@apply relative inline-flex items-center justify-center;
}

.approach-badge-anchoring {
@apply bg-anchoring/10 text-anchoring border border-anchoring/20;
}

.approach-badge-dialogical {
@apply bg-dialogical/10 text-dialogical border border-dialogical/20;
}

.approach-badge-storytelling {
@apply bg-storytelling/10 text-storytelling border border-storytelling/20;
}
}

@layer utilities {
.text-gradient {
@apply bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary;
}

.animate-delay-100 {
animation-delay: 100ms;
}

.animate-delay-200 {
animation-delay: 200ms;
}

.animate-delay-300 {
animation-delay: 300ms;
}

.animate-delay-400 {
animation-delay: 400ms;
}
}

/_ Custom scrollbar _/
::-webkit-scrollbar {
width: 8px;
height: 8px;
}

::-webkit-scrollbar-track {
background: var(--color-bg-tertiary);
border-radius: 4px;
}

::-webkit-scrollbar-thumb {
background: var(--color-text-muted);
border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
background: var(--color-text-secondary);
}

================================================================================

# File: platform/src/app/layout.tsx

================================================================================

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
title: 'Narrative Identity - Transform Your Story',
description: 'An interactive companion for narrative identity transformation through NLP and storytelling techniques.',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="antialiased">
{children}
</body>
</html>
);
}

================================================================================

# File: platform/src/app/page.tsx

================================================================================

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
BookOpen,
Map,
Sparkles,
Target,
ArrowRight,
Flame,
CheckCircle2,
PenLine
} from 'lucide-react';

const approaches = [
{
id: 'anchoring',
name: 'Narrative Anchoring',
description: 'Work with states and submodalities to transform your life stories.',
icon: Target,
color: 'anchoring',
features: ['State anchoring', 'Timeline therapy', 'Trance work'],
},
{
id: 'dialogical',
name: 'Dialogical Transformation',
description: 'Integrate the multiple voices of your inner self.',
icon: Map,
color: 'dialogical',
features: ['Voice mapping', 'Parts integration', 'Conflict resolution'],
},
{
id: 'storytelling',
name: 'Generative Storytelling',
description: 'Actively construct empowering life narratives.',
icon: Sparkles,
color: 'storytelling',
features: ['Milton Model', 'Redemptive framing', 'Future pacing'],
},
];

const fadeInUp = {
initial: { opacity: 0, y: 20 },
animate: { opacity: 1, y: 0 },
transition: { duration: 0.5 },
};

export default function Home() {
const [selectedApproach, setSelectedApproach] = useState<string | null>(null);

return (
<div className="min-h-screen bg-bg-primary">
{/_ Hero Section _/}
<section className="relative overflow-hidden">
{/_ Background gradient _/}
<div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
              Rewrite Your
              <span className="text-gradient"> Self</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8">
              Transform your identity through the power of narrative.
              Three pathways to becoming who you're meant to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                <BookOpen className="mr-2 w-5 h-5" />
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3', label: 'Transformation Approaches' },
              { number: '50+', label: 'Guided Exercises' },
              { number: '19', label: 'In-Depth Chapters' },
              { number: '∞', label: 'Possibilities' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
              Three Pathways to Transformation
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Choose the approach that resonates with you, or combine all three for complete transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, i) => {
              const Icon = approach.icon;
              const isSelected = selectedApproach === approach.id;

              return (
                <motion.div
                  key={approach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedApproach(approach.id)}
                  className={`
                    card-interactive p-8 border-2 transition-all
                    ${isSelected
                      ? `border-${approach.color} shadow-lg`
                      : 'border-transparent'
                    }
                  `}
                >
                  <div
                    className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                      bg-${approach.color}/10
                    `}
                  >
                    <Icon className={`w-8 h-8 text-${approach.color}`} />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                    {approach.name}
                  </h3>

                  <p className="text-text-secondary mb-6">
                    {approach.description}
                  </p>

                  <ul className="space-y-2">
                    {approach.features.map((feature) => (
                      <li key={feature} className="flex items-center text-text-muted">
                        <CheckCircle2 className={`w-4 h-4 mr-2 text-${approach.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A complete toolkit for your narrative identity transformation journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: PenLine,
                title: 'Story Builder',
                description: 'Create and visualize your life narrative with our interactive timeline editor.',
              },
              {
                icon: Map,
                title: 'Voice Map Studio',
                description: 'Map and integrate the multiple voices of your dialogical self.',
              },
              {
                icon: Target,
                title: 'NLP Practice Lab',
                description: 'Guided exercises for anchoring, submodalities, and trance work.',
              },
              {
                icon: Flame,
                title: 'Progress Tracking',
                description: 'Monitor your transformation journey with insights and streaks.',
              },
              {
                icon: BookOpen,
                title: 'Guided Exercises',
                description: 'Step-by-step practices from all three approaches.',
              },
              {
                icon: Sparkles,
                title: 'Daily Practice',
                description: 'Morning intentions, midday check-ins, and evening reflections.',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="card"
                >
                  <Icon className="w-8 h-8 text-accent-primary mb-4" />
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Rewrite Your Story?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Begin your narrative identity transformation today. Your story awaits its next chapter.
            </p>
            <button className="btn-primary text-lg px-10 py-5">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-secondary border-t border-bg-tertiary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display text-xl font-bold text-text-primary mb-4 md:mb-0">
              Narrative Identity
            </div>
            <div className="text-text-muted text-sm">
              Based on the synthesis of McAdams' Narrative Identity and Bandler's NLP
            </div>
          </div>
        </div>
      </footer>
    </div>

);
}

================================================================================

# File: platform/src/app/dashboard/page.tsx

================================================================================

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
Flame,
BookOpen,
Map,
PenLine,
ChevronRight,
Sparkles,
Target,
Users
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { useStore } from '@/store/useStore';

const approaches = [
{ id: 'anchoring', name: 'Narrative Anchoring', color: 'anchoring', icon: Target },
{ id: 'dialogical', name: 'Dialogical Transformation', color: 'dialogical', icon: Users },
{ id: 'storytelling', name: 'Generative Storytelling', color: 'storytelling', icon: Sparkles },
];

const quickActions = [
{ id: 'journal', name: 'Journal', icon: PenLine, href: '/journal' },
{ id: 'practice', name: 'Practice', icon: Target, href: '/exercises' },
{ id: 'voicemap', name: 'Voice Map', icon: Map, href: '/voicemap' },
{ id: 'story', name: 'Story', icon: BookOpen, href: '/story' },
];

export default function DashboardPage() {
const { progress, events, voices, journalEntries } = useStore();
const [greeting, setGreeting] = useState('Good day');

useEffect(() => {
const hour = new Date().getHours();
if (hour < 12) setGreeting('Good morning');
else if (hour < 18) setGreeting('Good afternoon');
else setGreeting('Good evening');
}, []);

const totalProgress = Math.round(
(progress.approachProgress.anchoring +
progress.approachProgress.dialogical +
progress.approachProgress.storytelling) / 3
);

return (
<div className="min-h-screen bg-bg-primary">
{/_ Header _/}
<header className="border-b border-bg-tertiary bg-bg-secondary/50 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="font-display text-xl font-bold text-text-primary">
Narrative Identity
</h1>
<div className="flex items-center gap-4">
<Button variant="ghost" size="sm">
Settings
</Button>
<div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
<span className="text-accent-primary font-bold">U</span>
</div>
</div>
</div>
</header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary mb-2">
            {greeting}
          </h2>
          <p className="text-text-secondary">
            Continue your narrative identity transformation journey.
          </p>
        </motion.div>

        {/* Today's Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="featured" className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-sm text-text-muted uppercase tracking-wide">
                  Today's Focus
                </span>
                <h3 className="font-display text-2xl font-bold text-text-primary mt-1">
                  Exploring Your Narrative Voices
                </h3>
                <p className="text-text-secondary mt-2">
                  Map the different voices within your dialogical self using the Voice Map Studio.
                </p>
              </div>
              <Button className="whitespace-nowrap">
                Start Exercise
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {/* Streak */}
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <Flame className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">
                  {progress.currentStreak}
                </div>
                <div className="text-sm text-text-muted">Day Streak</div>
              </div>
            </div>
          </Card>

          {/* Exercises */}
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">
                  {progress.totalExercises}
                </div>
                <div className="text-sm text-text-muted">Exercises</div>
              </div>
            </div>
          </Card>

          {/* Voice Map */}
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-dialogical/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-dialogical" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">
                  {voices.length}
                </div>
                <div className="text-sm text-text-muted">Voices Mapped</div>
              </div>
            </div>
          </Card>

          {/* Events */}
          <Card>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-storytelling/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-storytelling" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary">
                  {events.length}
                </div>
                <div className="text-sm text-text-muted">Life Events</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Progress by Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Progress by Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {approaches.map((approach) => {
                    const Icon = approach.icon;
                    const progressValue = progress.approachProgress[approach.id as keyof typeof progress.approachProgress];
                    return (
                      <div key={approach.id} className="text-center">
                        <ProgressRing
                          progress={progressValue}
                          size={100}
                          color={`var(--color-${approach.color})`}
                        >
                          <div className="text-center">
                            <Icon className={`w-5 h-5 mx-auto text-${approach.color} mb-1`} />
                            <span className="text-lg font-bold text-text-primary">
                              {progressValue}%
                            </span>
                          </div>
                        </ProgressRing>
                        <p className="text-sm text-text-secondary mt-2">
                          {approach.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={action.id}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-tertiary hover:bg-bg-secondary transition-colors"
                      >
                        <Icon className="w-6 h-6 text-accent-primary mb-2" />
                        <span className="text-sm text-text-primary">{action.name}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Journal Entries</CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {journalEntries.length === 0 ? (
                <div className="text-center py-8">
                  <PenLine className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-secondary mb-4">
                    No journal entries yet. Start documenting your transformation journey.
                  </p>
                  <Button variant="secondary">
                    <PenLine className="w-4 h-4 mr-2" />
                    New Entry
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {journalEntries.slice(0, 3).map((entry) => (
                    <div
                      key={entry.id}
                      className="p-4 rounded-xl bg-bg-tertiary hover:bg-bg-secondary transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-text-primary">
                          {entry.title || 'Untitled Entry'}
                        </h4>
                        <span className="text-sm text-text-muted">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm line-clamp-2">
                        {entry.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-bg-tertiary">
        <div className="max-w-md mx-auto px-6 py-3 flex items-center justify-around">
          {[
            { id: 'home', icon: Sparkles, label: 'Home', active: true },
            { id: 'practice', icon: Target, label: 'Practice', active: false },
            { id: 'map', icon: Map, label: 'Map', active: false },
            { id: 'journal', icon: PenLine, label: 'Journal', active: false },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`flex flex-col items-center ${
                  item.active ? 'text-accent-primary' : 'text-text-muted'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>

);
}

================================================================================

# File: platform/src/components/ui/Button.tsx

================================================================================

'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
size?: 'sm' | 'md' | 'lg';
isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-accent-primary text-white hover:opacity-90 active:scale-95 focus:ring-accent-primary',
      secondary: 'bg-bg-tertiary text-text-primary hover:bg-bg-secondary active:scale-95 focus:ring-bg-tertiary',
      ghost: 'bg-transparent text-text-secondary hover:bg-bg-tertiary active:scale-95 focus:ring-bg-tertiary',
      danger: 'bg-error text-white hover:opacity-90 active:scale-95 focus:ring-error',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );

}
);

Button.displayName = 'Button';

export { Button };

================================================================================

# File: platform/src/components/ui/Card.tsx

================================================================================

'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
variant?: 'default' | 'interactive' | 'featured';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
({ className, variant = 'default', children, ...props }, ref) => {
const baseStyles = 'bg-bg-secondary rounded-2xl';

    const variants = {
      default: 'p-6 shadow-md',
      interactive: 'p-6 shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer',
      featured: 'p-8 shadow-lg border-2 border-accent-primary/20',
    };

    return (
      <div
        ref={ref}
        className={twMerge(clsx(baseStyles, variants[variant], className))}
        {...props}
      >
        {children}
      </div>
    );

}
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
({ className, ...props }, ref) => (
<div
ref={ref}
className={twMerge('flex flex-col space-y-1.5 pb-4', className)}
{...props}
/>
)
);

CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
({ className, ...props }, ref) => (
<h3
ref={ref}
className={twMerge('font-display text-2xl font-bold text-text-primary', className)}
{...props}
/>
)
);

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
({ className, ...props }, ref) => (
<p
ref={ref}
className={twMerge('text-text-secondary', className)}
{...props}
/>
)
);

CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
({ className, ...props }, ref) => (
<div ref={ref} className={twMerge('', className)} {...props} />
)
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
({ className, ...props }, ref) => (
<div
ref={ref}
className={twMerge('flex items-center pt-4', className)}
{...props}
/>
)
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

================================================================================

# File: platform/src/components/ui/ProgressRing.tsx

================================================================================

'use client';

import { FC } from 'react';

interface ProgressRingProps {
progress: number; // 0-100
size?: number;
strokeWidth?: number;
color?: string;
bgColor?: string;
children?: React.ReactNode;
}

export const ProgressRing: FC<ProgressRingProps> = ({
progress,
size = 120,
strokeWidth = 8,
color = 'var(--color-accent-primary)',
bgColor = 'var(--color-bg-tertiary)',
children,
}) => {
const radius = (size - strokeWidth) / 2;
const circumference = radius _ 2 _ Math.PI;
const strokeDashoffset = circumference - (progress / 100) \* circumference;

return (
<div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
<svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
{/_ Background circle _/}
<circle
cx={size / 2}
cy={size / 2}
r={radius}
fill="none"
stroke={bgColor}
strokeWidth={strokeWidth}
/>
{/_ Progress circle _/}
<circle
cx={size / 2}
cy={size / 2}
r={radius}
fill="none"
stroke={color}
strokeWidth={strokeWidth}
strokeLinecap="round"
strokeDasharray={circumference}
strokeDashoffset={strokeDashoffset}
className="transition-all duration-500 ease-out"
/>
</svg>
{children && (
<div className="absolute inset-0 flex items-center justify-center">
{children}
</div>
)}
</div>
);
};

================================================================================

# File: platform/src/components/voicemap/VoiceMapCanvas.tsx

================================================================================

'use client';

import { FC, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Link, X } from 'lucide-react';
import { Button } from '../ui/Button';

export interface Voice {
id: string;
name: string;
character: string;
origin: string;
typicalMessage: string;
positiveIntention: string;
positionX: number;
positionY: number;
size: 'small' | 'medium' | 'large';
color: string;
}

export interface VoiceRelationship {
id: string;
voiceAId: string;
voiceBId: string;
type: 'support' | 'neutral' | 'conflict';
}

interface VoiceMapCanvasProps {
voices: Voice[];
relationships: VoiceRelationship[];
onAddVoice: (voice: Omit<Voice, 'id'>) => void;
onUpdateVoice: (id: string, updates: Partial<Voice>) => void;
onDeleteVoice: (id: string) => void;
onAddRelationship: (relationship: Omit<VoiceRelationship, 'id'>) => void;
onDeleteRelationship: (id: string) => void;
}

const sizeConfig = {
small: { radius: 40, fontSize: 12 },
medium: { radius: 60, fontSize: 14 },
large: { radius: 80, fontSize: 16 },
};

const voiceColors = [
'#6B46C1', // Purple
'#319795', // Teal
'#DD6B20', // Orange
'#D53F8C', // Pink
'#2B6CB0', // Blue
'#38A169', // Green
'#E53E3E', // Red
'#805AD5', // Violet
];

export const VoiceMapCanvas: FC<VoiceMapCanvasProps> = ({
voices,
relationships,
onAddVoice,
onUpdateVoice,
onDeleteVoice,
onAddRelationship,
onDeleteRelationship,
}) => {
const canvasRef = useRef<HTMLDivElement>(null);
const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
const [isDragging, setIsDragging] = useState(false);
const [isConnecting, setIsConnecting] = useState(false);
const [connectingFrom, setConnectingFrom] = useState<string | null>(null);

const handleDragStart = () => {
setIsDragging(true);
};

const handleDrag = (id: string, e: any, info: any) => {
if (!canvasRef.current) return;
const rect = canvasRef.current.getBoundingClientRect();
const x = Math.max(0, Math.min(100, ((info.point.x - rect.left) / rect.width) _ 100));
const y = Math.max(0, Math.min(100, ((info.point.y - rect.top) / rect.height) _ 100));
onUpdateVoice(id, { positionX: x, positionY: y });
};

const handleDragEnd = () => {
setIsDragging(false);
};

const getVoiceById = (id: string) => voices.find((v) => v.id === id);

const renderRelationshipLine = (rel: VoiceRelationship) => {
const voiceA = getVoiceById(rel.voiceAId);
const voiceB = getVoiceById(rel.voiceBId);
if (!voiceA || !voiceB) return null;

    const strokeDasharray = rel.type === 'conflict' ? '8,4' : rel.type === 'neutral' ? '4,4' : 'none';
    const strokeColor = rel.type === 'conflict' ? '#F56565' : rel.type === 'support' ? '#48BB78' : '#8A8A8A';

    return (
      <line
        key={rel.id}
        x1={`${voiceA.positionX}%`}
        y1={`${voiceA.positionY}%`}
        x2={`${voiceB.positionX}%`}
        y2={`${voiceB.positionY}%`}
        stroke={strokeColor}
        strokeWidth={2}
        strokeDasharray={strokeDasharray}
        className="pointer-events-none"
      />
    );

};

const handleVoiceClick = (id: string) => {
if (isConnecting && connectingFrom) {
if (connectingFrom !== id) {
onAddRelationship({
voiceAId: connectingFrom,
voiceBId: id,
type: 'neutral',
});
}
setIsConnecting(false);
setConnectingFrom(null);
} else {
setSelectedVoice(selectedVoice === id ? null : id);
}
};

const startConnecting = (id: string) => {
setIsConnecting(true);
setConnectingFrom(id);
setSelectedVoice(null);
};

return (
<div className="space-y-4">
{/_ Toolbar _/}
<div className="flex items-center justify-between">
<div>
<h2 className="font-display text-2xl font-bold text-text-primary">
Voice Map Studio
</h2>
<p className="text-text-secondary">
Map the multiple voices of your dialogical self.
</p>
</div>
<div className="flex gap-2">
{isConnecting && (
<Button variant="ghost" onClick={() => {
setIsConnecting(false);
setConnectingFrom(null);
}}>
<X className="w-4 h-4 mr-2" />
Cancel
</Button>
)}
<Button onClick={() => {
onAddVoice({
name: 'New Voice',
character: '',
origin: '',
typicalMessage: '',
positiveIntention: '',
positionX: 50,
positionY: 50,
size: 'medium',
color: voiceColors[voices.length % voiceColors.length],
});
}}>
<Plus className="w-4 h-4 mr-2" />
Add Voice
</Button>
</div>
</div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm text-text-muted">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-success" />
          <span>Support</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-text-muted border-dashed" style={{ borderTop: '2px dashed' }} />
          <span>Neutral</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="2">
            <line x1="0" y1="1" x2="24" y2="1" stroke="#F56565" strokeWidth="2" strokeDasharray="8,4" />
          </svg>
          <span>Conflict</span>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className={`
          relative w-full aspect-square bg-bg-secondary rounded-2xl border-2
          ${isConnecting ? 'border-accent-primary border-dashed' : 'border-bg-tertiary'}
        `}
      >
        {/* Self marker at center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-bg-tertiary border-4 border-bg-primary flex items-center justify-center z-0"
        >
          <span className="text-sm font-bold text-text-muted">SELF</span>
        </div>

        {/* Relationship lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {relationships.map(renderRelationshipLine)}
        </svg>

        {/* Voice nodes */}
        <AnimatePresence>
          {voices.map((voice) => {
            const config = sizeConfig[voice.size];
            const isSelected = selectedVoice === voice.id;

            return (
              <motion.div
                key={voice.id}
                drag
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDrag={(e, info) => handleDrag(voice.id, e, info)}
                onDragEnd={handleDragEnd}
                onClick={() => handleVoiceClick(voice.id)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                style={{
                  left: `${voice.positionX}%`,
                  top: `${voice.positionY}%`,
                  width: config.radius * 2,
                  height: config.radius * 2,
                }}
                className={`
                  absolute -translate-x-1/2 -translate-y-1/2 rounded-full
                  flex items-center justify-center cursor-pointer z-10
                  transition-all duration-200
                  ${isSelected ? 'ring-4 ring-accent-primary ring-offset-2 ring-offset-bg-secondary' : ''}
                  ${isConnecting ? 'cursor-crosshair' : ''}
                `}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${voice.color}20`, border: `3px solid ${voice.color}` }}
                >
                  <span
                    className="text-center font-semibold px-2 truncate"
                    style={{ fontSize: config.fontSize, color: voice.color }}
                  >
                    {voice.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Selected voice panel */}
        <AnimatePresence>
          {selectedVoice && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 top-4 w-64 bg-bg-primary rounded-xl shadow-lg p-4 z-20"
            >
              {(() => {
                const voice = getVoiceById(selectedVoice);
                if (!voice) return null;

                return (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-bold text-text-primary">
                        {voice.name}
                      </h3>
                      <button
                        onClick={() => setSelectedVoice(null)}
                        className="text-text-muted hover:text-text-primary"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {voice.character && (
                      <div className="mb-2">
                        <span className="text-xs text-text-muted">Character:</span>
                        <p className="text-sm text-text-secondary">{voice.character}</p>
                      </div>
                    )}

                    {voice.origin && (
                      <div className="mb-2">
                        <span className="text-xs text-text-muted">Origin:</span>
                        <p className="text-sm text-text-secondary">{voice.origin}</p>
                      </div>
                    )}

                    {voice.positiveIntention && (
                      <div className="mb-3">
                        <span className="text-xs text-text-muted">Positive Intention:</span>
                        <p className="text-sm text-text-secondary">{voice.positiveIntention}</p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => startConnecting(selectedVoice)}
                      >
                        <Link className="w-3 h-3 mr-1" />
                        Connect
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteVoice(selectedVoice)}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {voices.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-text-muted mb-4">
                Click "Add Voice" to begin mapping your inner voices.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>

);
};

================================================================================

# File: platform/src/components/story/TimelineEditor.tsx

================================================================================

'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
Plus,
Star,
TrendingUp,
TrendingDown,
Circle,
Edit2,
Trash2,
ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export interface LifeEvent {
id: string;
title: string;
description: string;
date: Date;
type: 'high_point' | 'low_point' | 'turning_point' | 'regular';
narrativeType?: 'redemptive' | 'contamination' | 'progressive' | 'regressive' | 'stable';
emotions: string[];
}

interface TimelineEditorProps {
events: LifeEvent[];
onAddEvent: (event: Omit<LifeEvent, 'id'>) => void;
onEditEvent: (id: string, event: Partial<LifeEvent>) => void;
onDeleteEvent: (id: string) => void;
}

const eventTypeConfig = {
high_point: {
icon: TrendingUp,
color: 'text-success',
bgColor: 'bg-success/10',
label: 'High Point',
},
low_point: {
icon: TrendingDown,
color: 'text-error',
bgColor: 'bg-error/10',
label: 'Low Point',
},
turning_point: {
icon: Star,
color: 'text-warning',
bgColor: 'bg-warning/10',
label: 'Turning Point',
},
regular: {
icon: Circle,
color: 'text-text-muted',
bgColor: 'bg-bg-tertiary',
label: 'Event',
},
};

export const TimelineEditor: FC<TimelineEditorProps> = ({
events,
onAddEvent,
onEditEvent,
onDeleteEvent,
}) => {
const [isAddingEvent, setIsAddingEvent] = useState(false);
const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

const sortedEvents = [...events].sort(
(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

const formatDate = (date: Date) => {
return new Date(date).toLocaleDateString('en-US', {
year: 'numeric',
month: 'short',
});
};

return (
<div className="space-y-6">
{/_ Timeline Header _/}
<div className="flex items-center justify-between">
<div>
<h2 className="font-display text-2xl font-bold text-text-primary">
Your Life Timeline
</h2>
<p className="text-text-secondary">
Map the key events that shape your narrative identity.
</p>
</div>
<Button onClick={() => setIsAddingEvent(true)}>
<Plus className="w-4 h-4 mr-2" />
Add Event
</Button>
</div>

      {/* Timeline Visualization */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-bg-tertiary" />

        {/* Events */}
        <div className="space-y-6">
          <AnimatePresence>
            {sortedEvents.map((event, index) => {
              const config = eventTypeConfig[event.type];
              const Icon = config.icon;
              const isSelected = selectedEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Event marker */}
                  <div
                    className={`
                      relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                      ${config.bgColor} border-4 border-bg-primary
                      transition-all duration-200
                      ${isSelected ? 'scale-110' : ''}
                    `}
                  >
                    <Icon className={`w-6 h-6 ${config.color}`} />
                  </div>

                  {/* Event card */}
                  <Card
                    variant={isSelected ? 'featured' : 'interactive'}
                    className="flex-1"
                    onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-text-muted mb-1">
                          {formatDate(event.date)}
                        </div>
                        <h3 className="font-display text-xl font-bold text-text-primary">
                          {event.title}
                        </h3>
                        <span
                          className={`
                            inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium
                            ${config.bgColor} ${config.color}
                          `}
                        >
                          {config.label}
                        </span>
                      </div>
                      <ChevronRight
                        className={`
                          w-5 h-5 text-text-muted transition-transform duration-200
                          ${isSelected ? 'rotate-90' : ''}
                        `}
                      />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-bg-tertiary">
                            <p className="text-text-secondary mb-4">
                              {event.description}
                            </p>

                            {event.emotions.length > 0 && (
                              <div className="mb-4">
                                <span className="text-sm text-text-muted">Emotions:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {event.emotions.map((emotion) => (
                                    <span
                                      key={emotion}
                                      className="px-3 py-1 rounded-full text-sm bg-bg-tertiary text-text-secondary"
                                    >
                                      {emotion}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {event.narrativeType && (
                              <div className="mb-4">
                                <span className="text-sm text-text-muted">Narrative Type:</span>
                                <span className="ml-2 text-text-primary capitalize">
                                  {event.narrativeType}
                                </span>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle edit
                                }}
                              >
                                <Edit2 className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDeleteEvent(event.id);
                                }}
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-bg-tertiary flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">
              Start Your Timeline
            </h3>
            <p className="text-text-secondary mb-4">
              Add your first life event to begin mapping your narrative.
            </p>
            <Button onClick={() => setIsAddingEvent(true)}>
              Add First Event
            </Button>
          </div>
        )}
      </div>
    </div>

);
};

================================================================================

# File: platform/src/data/exercises.ts

================================================================================

export interface Exercise {
id: string;
title: string;
description: string;
approach: 'anchoring' | 'dialogical' | 'storytelling' | 'foundation';
duration: number; // in minutes
difficulty: 'beginner' | 'intermediate' | 'advanced';
steps: ExerciseStep[];
materials?: string[];
reflectionQuestions: string[];
}

export interface ExerciseStep {
id: string;
instruction: string;
duration?: number; // in seconds
type: 'text' | 'audio' | 'input' | 'timer';
inputPrompt?: string;
audioUrl?: string;
}

export const exercises: Exercise[] = [
// Foundation Exercises
{
id: 'life-story-interview',
title: 'Life Story Interview',
description: 'A comprehensive self-guided interview to discover your narrative identity.',
approach: 'foundation',
duration: 60,
difficulty: 'beginner',
materials: ['Journal', 'Quiet space'],
steps: [
{
id: 'intro',
instruction: 'Find a quiet, comfortable space where you won\'t be disturbed for the next hour. Have your journal ready.',
type: 'text',
},
{
id: 'chapters',
instruction: 'Think of your life as a book with chapters. What are the major chapters of your life? Name each chapter and give it a brief description.',
type: 'input',
inputPrompt: 'List your life chapters...',
},
{
id: 'high-point',
instruction: 'Describe the high point of your life story—the single best moment. What happened? Who was there? What were you feeling?',
type: 'input',
inputPrompt: 'Describe your high point...',
},
{
id: 'low-point',
instruction: 'Describe the low point of your life story—the single worst moment. What happened? How did you cope?',
type: 'input',
inputPrompt: 'Describe your low point...',
},
{
id: 'turning-point',
instruction: 'Describe a turning point—a moment that changed the direction of your life. Who were you before? Who did you become after?',
type: 'input',
inputPrompt: 'Describe your turning point...',
},
{
id: 'future',
instruction: 'Describe your imagined future. What will your life look like in 5-10 years? Who will you become?',
type: 'input',
inputPrompt: 'Describe your future self...',
},
{
id: 'theme',
instruction: 'If you had to describe the central theme of your life story, what would it be?',
type: 'input',
inputPrompt: 'Your life theme...',
},
],
reflectionQuestions: [
'What patterns do you notice across your life chapters?',
'Are your key moments mostly redemptive (bad leading to good) or contaminating (good leading to bad)?',
'What surprised you in this interview?',
],
},

// Narrative Anchoring Exercises
{
id: 'resource-anchor-library',
title: 'Resource Anchor Library',
description: 'Create a library of anchors for essential resource states.',
approach: 'anchoring',
duration: 30,
difficulty: 'beginner',
materials: ['Quiet space'],
steps: [
{
id: 'intro',
instruction: 'You will create anchors for five essential resource states: confidence, calm, curiosity, connection, and clarity.',
type: 'text',
},
{
id: 'confidence',
instruction: 'Think of a time you felt truly confident. Step into that memory fully. See what you saw, hear what you heard, feel what you felt.',
type: 'text',
duration: 60,
},
{
id: 'confidence-anchor',
instruction: 'As the confident feeling reaches its peak, press your thumb and index finger together firmly. Hold for 3 seconds.',
type: 'timer',
duration: 10,
},
{
id: 'confidence-break',
instruction: 'Think of something neutral—what did you have for breakfast? This breaks the state.',
type: 'text',
duration: 15,
},
{
id: 'confidence-test',
instruction: 'Now press your thumb and index finger together again. Notice if the confident feeling returns.',
type: 'text',
duration: 15,
},
{
id: 'calm-intro',
instruction: 'Now recall a time you felt completely calm and safe. Step into that memory.',
type: 'text',
duration: 60,
},
{
id: 'calm-anchor',
instruction: 'At peak calm, press your thumb to your middle finger. Hold for 3 seconds.',
type: 'timer',
duration: 10,
},
],
reflectionQuestions: [
'Which anchor fired most reliably?',
'How might you use these anchors in your daily life?',
'Which states would you like to strengthen further?',
],
},

{
id: 'submodality-discovery',
title: 'Submodality Discovery',
description: 'Explore how your mind codes different experiences through submodalities.',
approach: 'anchoring',
duration: 30,
difficulty: 'intermediate',
materials: ['Journal'],
steps: [
{
id: 'intro',
instruction: 'You will compare the submodalities of a positive and challenging life narrative.',
type: 'text',
},
{
id: 'positive-recall',
instruction: 'Think of a positive life memory—one that makes you feel good. Don\'t analyze it, just step into it.',
type: 'text',
duration: 30,
},
{
id: 'positive-visual',
instruction: 'Notice the visual qualities: Is it bright or dark? Color or black and white? Big or small? Close or far? Where is it in your visual field?',
type: 'input',
inputPrompt: 'Describe the visual submodalities...',
},
{
id: 'positive-auditory',
instruction: 'Notice any sounds: What do you hear? Is it loud or soft? Where does the sound come from?',
type: 'input',
inputPrompt: 'Describe the auditory submodalities...',
},
{
id: 'positive-kinesthetic',
instruction: 'Notice the feelings: Where in your body do you feel it? What\'s the intensity? Temperature? Movement?',
type: 'input',
inputPrompt: 'Describe the kinesthetic submodalities...',
},
{
id: 'break',
instruction: 'Clear your mind. Think of something neutral.',
type: 'text',
duration: 15,
},
{
id: 'challenging-recall',
instruction: 'Now think of a challenging life memory. Step into it just enough to notice how it\'s coded.',
type: 'text',
duration: 30,
},
{
id: 'challenging-visual',
instruction: 'Notice the visual qualities of this challenging memory.',
type: 'input',
inputPrompt: 'Describe the visual submodalities...',
},
{
id: 'compare',
instruction: 'Compare the two sets of submodalities. What are the key differences?',
type: 'input',
inputPrompt: 'Key differences...',
},
],
reflectionQuestions: [
'What are the biggest differences between positive and challenging memories?',
'Which submodalities seem most connected to emotional impact?',
'What would happen if you shifted the challenging memory\'s submodalities toward the positive?',
],
},

// Dialogical Transformation Exercises
{
id: 'voice-inventory',
title: 'Complete Voice Inventory',
description: 'Identify and map all the significant voices within your dialogical self.',
approach: 'dialogical',
duration: 45,
difficulty: 'beginner',
materials: ['Journal', 'Large paper', 'Colored pens'],
steps: [
{
id: 'intro',
instruction: 'You will identify all the different "voices" or "parts" within yourself.',
type: 'text',
},
{
id: 'sides',
instruction: 'What are the different "sides" of yourself? List all that come to mind.',
type: 'input',
inputPrompt: 'List your different sides...',
},
{
id: 'situations',
instruction: 'Who do you become in different situations? At work? With family? With friends? Alone? Under stress?',
type: 'input',
inputPrompt: 'Your situational selves...',
},
{
id: 'internal-dialogue',
instruction: 'What voices do you hear in your internal dialogue? A critic? A supporter? A worrier?',
type: 'input',
inputPrompt: 'Your internal voices...',
},
{
id: 'internalized',
instruction: 'Whose voices from your past still speak within you? Parents? Teachers? Cultural voices?',
type: 'input',
inputPrompt: 'Internalized voices...',
},
{
id: 'historical',
instruction: 'What historical versions of yourself are still active? Your teenage self? Your wounded child?',
type: 'input',
inputPrompt: 'Historical selves...',
},
{
id: 'consolidate',
instruction: 'Look at all your lists. Group similar voices together. Name each distinct voice.',
type: 'input',
inputPrompt: 'Your named voices...',
},
],
reflectionQuestions: [
'Which voices dominate your internal landscape?',
'Which voices are supportive? Which are critical?',
'Where do you notice potential conflicts between voices?',
],
},

{
id: 'positive-intention-chain',
title: 'Positive Intention Chain',
description: 'Discover the positive intention behind any voice, even seemingly negative ones.',
approach: 'dialogical',
duration: 20,
difficulty: 'intermediate',
materials: ['Journal'],
steps: [
{
id: 'intro',
instruction: 'Choose a voice that causes difficulty or discomfort. You will discover its positive intention.',
type: 'text',
},
{
id: 'identify',
instruction: 'What voice have you chosen? Name it and briefly describe it.',
type: 'input',
inputPrompt: 'Voice name and description...',
},
{
id: 'q1',
instruction: 'Ask the voice: "What do you want for me?" Record the answer.',
type: 'input',
inputPrompt: 'What this voice wants...',
},
{
id: 'q2',
instruction: 'Ask: "If you had that, what would that give me?" Record the answer.',
type: 'input',
inputPrompt: 'What that would give you...',
},
{
id: 'q3',
instruction: 'Ask again: "And if I had that, what would THAT give me?" Record the answer.',
type: 'input',
inputPrompt: 'What that would give you...',
},
{
id: 'q4',
instruction: 'Continue asking until you reach a core positive value like love, safety, peace, or belonging.',
type: 'input',
inputPrompt: 'Continue the chain until you reach the core value...',
},
{
id: 'acknowledge',
instruction: 'Say to the voice: "Thank you for trying to give me [core value]. I appreciate your positive intention."',
type: 'text',
},
],
reflectionQuestions: [
'What surprised you about this voice\'s positive intention?',
'How does knowing the positive intention change your relationship to this voice?',
'What other voices might have similar core intentions?',
],
},

// Generative Storytelling Exercises
{
id: 'mode-switching',
title: 'Mode Switching Practice',
description: 'Develop flexibility in moving between dramatic and reflective storytelling modes.',
approach: 'storytelling',
duration: 30,
difficulty: 'beginner',
materials: ['Journal', 'Voice recorder (optional)'],
steps: [
{
id: 'intro',
instruction: 'You will tell the same story in two different modes: dramatic and reflective.',
type: 'text',
},
{
id: 'choose',
instruction: 'Choose a meaningful experience from your life. It doesn\'t need to be dramatic—any significant moment will work.',
type: 'input',
inputPrompt: 'Brief description of your chosen experience...',
},
{
id: 'dramatic-intro',
instruction: 'Now tell the story in DRAMATIC MODE: Use present tense. Rich sensory details. Stay in the action. Create emotional impact.',
type: 'text',
},
{
id: 'dramatic',
instruction: 'Write or speak your story in dramatic mode. Example: "I\'m walking into the room. The light is dim. My heart is pounding..."',
type: 'input',
inputPrompt: 'Your story in dramatic mode...',
},
{
id: 'break',
instruction: 'Take a breath. Clear your mind.',
type: 'text',
duration: 15,
},
{
id: 'reflective-intro',
instruction: 'Now tell the same story in REFLECTIVE MODE: Use past tense. Focus on meaning. Analyze and interpret. Connect to larger themes.',
type: 'text',
},
{
id: 'reflective',
instruction: 'Write or speak your story in reflective mode. Example: "Looking back on that moment, I realize it was a turning point..."',
type: 'input',
inputPrompt: 'Your story in reflective mode...',
},
],
reflectionQuestions: [
'Which mode felt more natural to you?',
'What did each mode contribute to understanding the experience?',
'When might you use each mode strategically?',
],
},

{
id: 'redemptive-rewrite',
title: 'Redemptive Rewrite',
description: 'Transform a challenging experience into a redemptive narrative.',
approach: 'storytelling',
duration: 30,
difficulty: 'intermediate',
materials: ['Journal'],
steps: [
{
id: 'intro',
instruction: 'You will transform a challenging experience into a redemptive narrative—finding growth and meaning in difficulty.',
type: 'text',
},
{
id: 'identify',
instruction: 'Choose a challenging experience from your life. Something difficult but not traumatic for this exercise.',
type: 'input',
inputPrompt: 'Describe the challenging experience...',
},
{
id: 'current',
instruction: 'How do you currently narrate this experience? What story do you tell about it?',
type: 'input',
inputPrompt: 'Your current narrative...',
},
{
id: 'possible',
instruction: 'Ask: What became possible because of this experience? What doors opened?',
type: 'input',
inputPrompt: 'What became possible...',
},
{
id: 'learned',
instruction: 'Ask: What did you learn that you couldn\'t have learned any other way?',
type: 'input',
inputPrompt: 'What you learned...',
},
{
id: 'strength',
instruction: 'Ask: What strength did this develop in you?',
type: 'input',
inputPrompt: 'Strength developed...',
},
{
id: 'rewrite',
instruction: 'Now write a redemptive version using this structure: Situation → Impact → Turning → Growth → Integration',
type: 'input',
inputPrompt: 'Your redemptive narrative...',
},
],
reflectionQuestions: [
'How does the redemptive narrative feel different from the original?',
'What aspects of this experience can you now appreciate?',
'How might this new narrative affect your present and future?',
],
},

{
id: 'future-self-immersion',
title: 'Future Self Immersion',
description: 'Create a vivid, compelling narrative of your future self.',
approach: 'storytelling',
duration: 45,
difficulty: 'advanced',
materials: ['Journal', 'Quiet space'],
steps: [
{
id: 'intro',
instruction: 'You will create a detailed, immersive experience of your future self 5 years from now.',
type: 'text',
},
{
id: 'relax',
instruction: 'Close your eyes. Take several deep breaths. Let your body relax.',
type: 'timer',
duration: 60,
},
{
id: 'travel',
instruction: 'Imagine floating forward through time. Five years from now. You have become who you want to be.',
type: 'text',
duration: 30,
},
{
id: 'step-in',
instruction: 'Step INTO your future self. See through their eyes. Feel their feelings. Sense their body.',
type: 'text',
duration: 30,
},
{
id: 'morning',
instruction: 'It\'s morning. You\'re waking up. Notice your environment. How do you feel? What\'s your morning routine?',
type: 'input',
inputPrompt: 'Your future morning...',
},
{
id: 'day',
instruction: 'Move through your day. What do you do? Who do you interact with? What accomplishments are you proud of?',
type: 'input',
inputPrompt: 'Your future day...',
},
{
id: 'identity',
instruction: 'What kind of person have you become? What qualities do you embody? How do others see you?',
type: 'input',
inputPrompt: 'Your future identity...',
},
{
id: 'write',
instruction: 'Now write "A Day in My Future Life" in present tense, as if it\'s happening right now.',
type: 'input',
inputPrompt: 'Write your future day narrative...',
},
],
reflectionQuestions: [
'How vivid was your future self experience?',
'What felt most compelling about this future?',
'What\'s one step you could take today toward this future?',
],
},
];

// Helper functions
export const getExercisesByApproach = (approach: Exercise['approach']) =>
exercises.filter((e) => e.approach === approach);

export const getExerciseById = (id: string) =>
exercises.find((e) => e.id === id);

export const getExercisesByDifficulty = (difficulty: Exercise['difficulty']) =>
exercises.filter((e) => e.difficulty === difficulty);

================================================================================

# File: platform/src/store/useStore.ts

================================================================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface LifeEvent {
id: string;
title: string;
description: string;
date: Date;
type: 'high_point' | 'low_point' | 'turning_point' | 'regular';
narrativeType?: 'redemptive' | 'contamination' | 'progressive' | 'regressive' | 'stable';
emotions: string[];
chapterId?: string;
}

export interface Chapter {
id: string;
title: string;
description: string;
startDate?: Date;
endDate?: Date;
order: number;
}

export interface Voice {
id: string;
name: string;
character: string;
origin: string;
typicalMessage: string;
positiveIntention: string;
positionX: number;
positionY: number;
size: 'small' | 'medium' | 'large';
color: string;
}

export interface VoiceRelationship {
id: string;
voiceAId: string;
voiceBId: string;
type: 'support' | 'neutral' | 'conflict';
notes?: string;
}

export interface JournalEntry {
id: string;
title?: string;
content: string;
templateId?: string;
exerciseId?: string;
tags: string[];
createdAt: Date;
updatedAt: Date;
}

export interface ExerciseCompletion {
id: string;
exerciseId: string;
completedAt: Date;
duration: number;
notes: string;
reflections: Record<string, string>;
}

export interface UserProgress {
currentStreak: number;
longestStreak: number;
totalExercises: number;
approachProgress: {
anchoring: number;
dialogical: number;
storytelling: number;
};
achievements: string[];
lastActivityDate: Date | null;
}

export interface UserPreferences {
primaryApproach: 'anchoring' | 'dialogical' | 'storytelling' | null;
notificationsEnabled: boolean;
dailyReminderTime?: string;
theme: 'light' | 'dark' | 'system';
}

// Store State
interface StoreState {
// User
preferences: UserPreferences;
progress: UserProgress;

// Life Story
chapters: Chapter[];
events: LifeEvent[];

// Voice Map
voices: Voice[];
relationships: VoiceRelationship[];

// Journal
journalEntries: JournalEntry[];

// Exercise Completions
exerciseCompletions: ExerciseCompletion[];

// Actions - User
setPreferences: (preferences: Partial<UserPreferences>) => void;
updateProgress: (progress: Partial<UserProgress>) => void;
incrementStreak: () => void;

// Actions - Life Story
addChapter: (chapter: Omit<Chapter, 'id'>) => void;
updateChapter: (id: string, updates: Partial<Chapter>) => void;
deleteChapter: (id: string) => void;
addEvent: (event: Omit<LifeEvent, 'id'>) => void;
updateEvent: (id: string, updates: Partial<LifeEvent>) => void;
deleteEvent: (id: string) => void;

// Actions - Voice Map
addVoice: (voice: Omit<Voice, 'id'>) => void;
updateVoice: (id: string, updates: Partial<Voice>) => void;
deleteVoice: (id: string) => void;
addRelationship: (relationship: Omit<VoiceRelationship, 'id'>) => void;
updateRelationship: (id: string, updates: Partial<VoiceRelationship>) => void;
deleteRelationship: (id: string) => void;

// Actions - Journal
addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => void;
updateJournalEntry: (id: string, updates: Partial<JournalEntry>) => void;
deleteJournalEntry: (id: string) => void;

// Actions - Exercises
completeExercise: (completion: Omit<ExerciseCompletion, 'id'>) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useStore = create<StoreState>()(
persist(
(set, get) => ({
// Initial State
preferences: {
primaryApproach: null,
notificationsEnabled: true,
theme: 'system',
},
progress: {
currentStreak: 0,
longestStreak: 0,
totalExercises: 0,
approachProgress: {
anchoring: 0,
dialogical: 0,
storytelling: 0,
},
achievements: [],
lastActivityDate: null,
},
chapters: [],
events: [],
voices: [],
relationships: [],
journalEntries: [],
exerciseCompletions: [],

      // User Actions
      setPreferences: (preferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...preferences },
        })),

      updateProgress: (progress) =>
        set((state) => ({
          progress: { ...state.progress, ...progress },
        })),

      incrementStreak: () =>
        set((state) => {
          const today = new Date().toDateString();
          const lastActivity = state.progress.lastActivityDate
            ? new Date(state.progress.lastActivityDate).toDateString()
            : null;

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toDateString();

          let newStreak = state.progress.currentStreak;

          if (lastActivity === today) {
            // Already logged today
            return state;
          } else if (lastActivity === yesterdayStr) {
            // Consecutive day
            newStreak = state.progress.currentStreak + 1;
          } else {
            // Streak broken or first day
            newStreak = 1;
          }

          return {
            progress: {
              ...state.progress,
              currentStreak: newStreak,
              longestStreak: Math.max(newStreak, state.progress.longestStreak),
              lastActivityDate: new Date(),
            },
          };
        }),

      // Life Story Actions
      addChapter: (chapter) =>
        set((state) => ({
          chapters: [...state.chapters, { ...chapter, id: generateId() }],
        })),

      updateChapter: (id, updates) =>
        set((state) => ({
          chapters: state.chapters.map((c) =>
            c.id === id ? { ...c, ...updates } : c
          ),
        })),

      deleteChapter: (id) =>
        set((state) => ({
          chapters: state.chapters.filter((c) => c.id !== id),
        })),

      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, { ...event, id: generateId() }],
        })),

      updateEvent: (id, updates) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === id ? { ...e, ...updates } : e
          ),
        })),

      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),

      // Voice Map Actions
      addVoice: (voice) =>
        set((state) => ({
          voices: [...state.voices, { ...voice, id: generateId() }],
        })),

      updateVoice: (id, updates) =>
        set((state) => ({
          voices: state.voices.map((v) =>
            v.id === id ? { ...v, ...updates } : v
          ),
        })),

      deleteVoice: (id) =>
        set((state) => ({
          voices: state.voices.filter((v) => v.id !== id),
          relationships: state.relationships.filter(
            (r) => r.voiceAId !== id && r.voiceBId !== id
          ),
        })),

      addRelationship: (relationship) =>
        set((state) => ({
          relationships: [...state.relationships, { ...relationship, id: generateId() }],
        })),

      updateRelationship: (id, updates) =>
        set((state) => ({
          relationships: state.relationships.map((r) =>
            r.id === id ? { ...r, ...updates } : r
          ),
        })),

      deleteRelationship: (id) =>
        set((state) => ({
          relationships: state.relationships.filter((r) => r.id !== id),
        })),

      // Journal Actions
      addJournalEntry: (entry) =>
        set((state) => ({
          journalEntries: [
            ...state.journalEntries,
            {
              ...entry,
              id: generateId(),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        })),

      updateJournalEntry: (id, updates) =>
        set((state) => ({
          journalEntries: state.journalEntries.map((e) =>
            e.id === id ? { ...e, ...updates, updatedAt: new Date() } : e
          ),
        })),

      deleteJournalEntry: (id) =>
        set((state) => ({
          journalEntries: state.journalEntries.filter((e) => e.id !== id),
        })),

      // Exercise Actions
      completeExercise: (completion) =>
        set((state) => {
          const newCompletion = { ...completion, id: generateId() };
          return {
            exerciseCompletions: [...state.exerciseCompletions, newCompletion],
            progress: {
              ...state.progress,
              totalExercises: state.progress.totalExercises + 1,
            },
          };
        }),
    }),
    {
      name: 'narrative-identity-storage',
    }

)
);

================================================================================

# File: docs/BOOK_PLATFORM_INTEGRATION.md

================================================================================

# Book-Platform Integration Guide

## Overview

This document maps book concepts to platform features, ensuring seamless integration between the written content and interactive experience.

---

## Chapter-to-Feature Mapping

### Part I: Foundations

| Chapter                  | Platform Feature      | Integration Point                      |
| ------------------------ | --------------------- | -------------------------------------- |
| Ch 1: Narrative Identity | Story Builder         | Life timeline, narrative type analysis |
| Ch 2: NLP and Trance     | NLP Practice Lab      | Exercise library, audio guides         |
| Ch 3: The Synthesis      | Onboarding Assessment | Approach recommendation quiz           |

### Part II: Narrative Anchoring

| Chapter                       | Platform Feature | Integration Point                           |
| ----------------------------- | ---------------- | ------------------------------------------- |
| Ch 4: Narrative States        | Story Builder    | State tagging on events                     |
| Ch 5: Anchoring Life Stories  | NLP Practice Lab | Anchoring exercises                         |
| Ch 6: Timeline Reconstruction | Story Builder    | Timeline visualization, springboard marking |
| Ch 7: Trance Narrative Work   | Audio Guides     | Trance induction tracks                     |

### Part III: Dialogical Transformation

| Chapter                           | Platform Feature | Integration Point         |
| --------------------------------- | ---------------- | ------------------------- |
| Ch 8: Multiplicity of Self        | Voice Map Studio | Voice creation            |
| Ch 9: Mapping Identity Positions  | Voice Map Studio | Positioning canvas        |
| Ch 10: Integrating Voices         | NLP Practice Lab | Visual squash exercises   |
| Ch 11: Creating Coherent Identity | Journal          | Unified narrative writing |

### Part IV: Generative Storytelling

| Chapter                      | Platform Feature | Integration Point         |
| ---------------------------- | ---------------- | ------------------------- |
| Ch 12: Storytelling Modes    | Journal          | Mode-switching templates  |
| Ch 13: NLP Language          | NLP Practice Lab | Milton Model exercises    |
| Ch 14: Empowering Narratives | Story Builder    | Redemptive rewrite tools  |
| Ch 15: Future Pacing         | Story Builder    | Future self visualization |

### Part V: Integration

| Chapter                     | Platform Feature   | Integration Point       |
| --------------------------- | ------------------ | ----------------------- |
| Ch 16: Choosing Approach    | Dashboard          | Progress by approach    |
| Ch 17: Combining Approaches | Practice Scheduler | Combined exercise paths |
| Ch 18: Maintaining Identity | Daily Practice     | Check-ins, streaks      |
| Ch 19: Advanced Techniques  | Premium Content    | Advanced exercises      |

---

## Exercise Implementation Status

### Foundation Exercises

| Exercise                | Platform Status | Notes                          |
| ----------------------- | --------------- | ------------------------------ |
| Life Story Interview    | ✅ Implemented  | In exercises.ts                |
| Narrative Assessment    | ✅ Implemented  | Auto-generated from story data |
| Resource Anchor Library | ✅ Implemented  | In exercises.ts                |

### Narrative Anchoring Exercises

| Exercise                 | Platform Status | Notes                 |
| ------------------------ | --------------- | --------------------- |
| Story State Anchoring    | ✅ Implemented  | In exercises.ts       |
| Submodality Discovery    | ✅ Implemented  | In exercises.ts       |
| Timeline Exploration     | ✅ Implemented  | Via Story Builder     |
| Springboard Intervention | ✅ Implemented  | In exercises.ts       |
| Trance Narrative Work    | 🔄 Partial      | Needs audio recording |

### Dialogical Exercises

| Exercise                 | Platform Status | Notes                    |
| ------------------------ | --------------- | ------------------------ |
| Voice Inventory          | ✅ Implemented  | In exercises.ts          |
| Positive Intention Chain | ✅ Implemented  | In exercises.ts          |
| Visual Squash            | 🔄 Partial      | Needs guided walkthrough |
| Chair Dialogue           | 📋 Planned      | Future enhancement       |
| Internal Conference      | 📋 Planned      | Needs audio guide        |

### Generative Storytelling Exercises

| Exercise                 | Platform Status | Notes                      |
| ------------------------ | --------------- | -------------------------- |
| Mode Switching           | ✅ Implemented  | In exercises.ts            |
| Redemptive Rewrite       | ✅ Implemented  | In exercises.ts            |
| Milton Model Enhancement | 🔄 Partial      | Needs interactive examples |
| Story Spine              | 📋 Planned      | Template in journal        |
| Future Self Immersion    | ✅ Implemented  | In exercises.ts            |

---

## Data Model Alignment

### Story Builder ↔ Book Concepts

```
Book Concept              | Data Model
--------------------------|------------------
Life Chapters             | Chapter entity
Nuclear Episodes          | LifeEvent (high_point, low_point, turning_point)
Narrative Type            | narrativeType field
Emotions                  | emotions array
Anticipated Future        | Future events on timeline
```

### Voice Map ↔ Book Concepts

```
Book Concept              | Data Model
--------------------------|------------------
I-Positions               | Voice entity
Voice Character           | character field
Positive Intention        | positiveIntention field
Voice Conflicts           | VoiceRelationship (type: conflict)
Voice Support             | VoiceRelationship (type: support)
```

### Progress Tracking ↔ Book Concepts

```
Book Concept              | Data Model
--------------------------|------------------
Three Approaches          | approachProgress object
Daily Practice            | currentStreak, lastActivityDate
Transformation Journey    | totalExercises, achievements
```

---

## User Journey Integration

### Week 1: Foundations

**Book Focus**: Part I chapters
**Platform Focus**:

- Onboarding assessment
- Life Story Interview exercise
- Initial voice inventory
- Story Builder setup

### Week 2-3: Primary Approach

**Book Focus**: Part II, III, or IV (based on assessment)
**Platform Focus**:

- Approach-specific exercises
- Building story timeline or voice map
- Daily practice establishment

### Week 4+: Integration

**Book Focus**: Part V
**Platform Focus**:

- Cross-approach exercises
- Progress review
- Maintenance routines
- Advanced techniques

---

## Content Sync Points

### Callouts in Book

The book should include callouts directing readers to platform features:

```markdown
📱 **App Exercise**: Complete the Life Story Interview in the app's
Exercise Library. Your responses will automatically populate
your Story Builder timeline.
```

```markdown
🗺️ **Voice Map**: As you identify voices in this chapter, add them
to your Voice Map in the app to visualize your dialogical self.
```

### In-App Book References

The app should reference book chapters for deeper learning:

```
"To learn more about redemptive narratives and how to construct them,
see Chapter 14 in the book."
```

---

## Technical Integration Points

### Deep Links

Book can include QR codes/links that:

- Open specific exercises
- Pre-populate content
- Jump to relevant app sections

Format: `narrative-identity://exercise/{exercise-id}`

### Export/Import

Users should be able to:

- Export story timeline as PDF (for book journaling)
- Export voice map as image
- Export journal entries as text
- Import previous assessment data

### Progress Sync

- Book progress tracked manually in app
- Chapter completion checkboxes
- Exercise completion from both book and app count toward streaks

---

## Quality Assurance Checklist

### Content Alignment

- [ ] All book exercises have platform equivalents
- [ ] Terminology consistent between book and app
- [ ] Examples in app match style of book examples
- [ ] Reflection questions in app match book questions

### User Experience

- [ ] Natural flow from reading book to using app
- [ ] App usable without book (standalone)
- [ ] Book usable without app (exercises in journal)
- [ ] Cross-references clear and helpful

### Technical

- [ ] All data models support book concepts
- [ ] Exercise steps match book instructions
- [ ] Progress tracking captures all book activities
- [ ] Export formats useful for book exercises

---

## Future Enhancements

### Priority 1 (Next Release)

- Audio trance guides
- Chair dialogue exercise
- Story Spine template in journal
- Book progress tracker

### Priority 2 (Future)

- AI-powered narrative analysis
- Personalized exercise recommendations
- Community sharing features
- Coach/therapist collaboration tools

### Priority 3 (Long-term)

- AR timeline visualization
- Voice-input journaling
- VR trance experiences
- Research data contribution (opt-in)

---

## Feedback Integration

### From Book to Platform

- Reader surveys asking about desired features
- Exercise effectiveness ratings
- Content clarity feedback
- Technical issue reporting

### From Platform to Book

- Usage analytics informing chapter emphasis
- Most-completed exercises highlighting popular content
- User journey data suggesting structural changes
- A/B testing of exercise variations

---

_This integration ensures that the book and platform work together as a unified transformation system, each enhancing the other._

================================================================================

# File: docs/PLATFORM_DESIGN.md

================================================================================

# Platform Design Document

## Narrative Identity Transformation App

---

## 1. Product Overview

### 1.1 Vision Statement

A companion application that transforms the book's concepts into an interactive, practical experience—guiding users through their narrative identity transformation journey with exercises, tracking, and ongoing support.

### 1.2 Product Goals

1. Make abstract concepts tangible and actionable
2. Provide guided exercises with appropriate pacing
3. Track progress and celebrate growth
4. Support ongoing practice and maintenance
5. Create engaging, beautiful user experience

### 1.3 Target Users

- **Primary**: Readers of the book seeking practical application
- **Secondary**: Self-development enthusiasts discovering the app independently
- **Tertiary**: Coaches/therapists using as client tool

---

## 2. User Flows

### 2.1 Onboarding Flow

```
┌─────────────────┐
│   Welcome       │
│   Screen        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Brief Intro   │
│   (3 screens)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Create        │
│   Account       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Initial       │
│   Assessment    │
│   (5-10 min)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Approach      │
│   Recommendation│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   First         │
│   Exercise      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Home          │
│   Dashboard     │
└─────────────────┘
```

### 2.2 Daily Use Flow

```
┌─────────────────┐
│   Open App      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Daily Check-in│
│   (1 min)       │
└────────┬────────┘
         │
         ├──────────────────────┐
         │                      │
         ▼                      ▼
┌─────────────────┐    ┌─────────────────┐
│   Suggested     │    │   Free          │
│   Exercise      │    │   Explore       │
└────────┬────────┘    └────────┬────────┘
         │                      │
         ▼                      ▼
┌─────────────────┐    ┌─────────────────┐
│   Complete      │    │   Choose        │
│   Exercise      │    │   Module        │
└────────┬────────┘    └────────┬────────┘
         │                      │
         ├──────────────────────┘
         │
         ▼
┌─────────────────┐
│   Update        │
│   Progress      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   View          │
│   Insights      │
└─────────────────┘
```

### 2.3 Exercise Completion Flow

```
┌─────────────────┐
│   Exercise      │
│   Introduction  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Instructions  │
│   & Setup       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Guided        │
│   Practice      │
│   (steps/audio) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Reflection    │
│   Questions     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Journal       │
│   Entry         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Completion    │
│   & Celebration │
└─────────────────┘
```

---

## 3. Feature Specifications

### 3.1 Core Modules

#### Module 1: Story Builder

**Purpose**: Interactive narrative construction and visualization

**Features**:

- Life timeline creator with events
- Chapter naming and description
- High/low/turning point markers
- Narrative type identification
- Visual timeline display
- Export and share capability

**Components**:

- Timeline editor (drag/drop events)
- Event detail modal
- Narrative type analyzer
- Visual timeline view
- Story summary generator

#### Module 2: NLP Practice Lab

**Purpose**: Guided NLP exercises with instruction and tracking

**Features**:

- Anchoring exercise guides
- Submodality worksheets
- Timeline therapy visualizations
- Parts integration walkthroughs
- Audio trance guides
- Practice logging

**Components**:

- Exercise library (categorized by approach)
- Step-by-step guides
- Audio player for trance sessions
- Practice timer
- Progress tracker

#### Module 3: Voice Map Studio

**Purpose**: Create and work with dialogical self visualization

**Features**:

- Voice creation interface
- Visual voice mapping canvas
- Relationship line drawing
- Conflict identification
- Integration progress tracking
- Voice journal

**Components**:

- Voice creator (name, character, origin, intention)
- Draggable voice positioning
- Relationship drawing tool
- Conflict highlighter
- Integration log

#### Module 4: Progress Dashboard

**Purpose**: Track transformation journey

**Features**:

- Overall progress visualization
- Streak tracking
- Achievement system
- Insight generation
- Before/after comparisons
- Export progress reports

**Components**:

- Progress rings (by approach)
- Streak counter
- Achievement badges
- Insight cards
- Timeline of journey

#### Module 5: Daily Practice

**Purpose**: Support ongoing maintenance routines

**Features**:

- Morning narrative intention
- Midday check-in
- Evening reflection
- Anchor maintenance reminders
- Customizable routine builder
- Notification system

**Components**:

- Practice scheduler
- Quick check-in cards
- Micro-exercises
- Reminder notifications
- Routine customizer

#### Module 6: Journal

**Purpose**: Reflective writing space tied to exercises

**Features**:

- Structured journaling templates
- Free-form entries
- Exercise-linked entries
- Prompt suggestions
- Search and tags
- Export capability

**Components**:

- Journal editor
- Template selector
- Tag system
- Search function
- Entry calendar view

---

## 4. Screen Designs (Wireframes)

### 4.1 Home Dashboard

```
┌────────────────────────────────────────┐
│  ☰                    [User Avatar]    │
├────────────────────────────────────────┤
│                                        │
│  Good Morning, [Name]                  │
│                                        │
│  ┌────────────────────────────────┐   │
│  │   TODAY'S FOCUS                │   │
│  │   ─────────────────────────    │   │
│  │   "Exploring Your Narrative    │   │
│  │    Voices"                     │   │
│  │                                │   │
│  │   [Start Exercise →]           │   │
│  └────────────────────────────────┘   │
│                                        │
│  YOUR JOURNEY                          │
│  ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ 12   │ │ 8    │ │ 5    │          │
│  │ Days │ │Exer- │ │Voice │          │
│  │Streak│ │cises │ │ Map  │          │
│  └──────┘ └──────┘ └──────┘          │
│                                        │
│  QUICK ACTIONS                         │
│  ┌─────────────┐ ┌─────────────┐      │
│  │ 📝 Journal  │ │ 🎯 Practice │      │
│  └─────────────┘ └─────────────┘      │
│  ┌─────────────┐ ┌─────────────┐      │
│  │ 🗺️ Voice Map│ │ 📊 Progress │      │
│  └─────────────┘ └─────────────┘      │
│                                        │
│  RECENT INSIGHTS                       │
│  ─────────────────────────────────    │
│  "Your narrative shows strong          │
│   redemptive themes..."                │
│                                        │
├────────────────────────────────────────┤
│  [Home]  [Practice]  [Map]  [Journal]  │
└────────────────────────────────────────┘
```

### 4.2 Story Builder - Timeline View

```
┌────────────────────────────────────────┐
│  ← Story Builder                       │
├────────────────────────────────────────┤
│                                        │
│  MY LIFE STORY                         │
│  ─────────────────────────────────    │
│                                        │
│  [Chapter View] [Timeline] [Summary]   │
│                                        │
│      1985        1995        2005     │
│  ─────●──────────●──────────●─────    │
│        │          │          │        │
│        ▼          │          │        │
│  ┌─────────┐     │          │        │
│  │Childhood│     │          │        │
│  │ Chapter │     │          │        │
│  └─────────┘     │          │        │
│                   ▼          │        │
│             ┌─────────┐     │        │
│             │Turning  │     │        │
│             │Point ⭐ │     │        │
│             └─────────┘     │        │
│                              ▼        │
│                        ┌─────────┐   │
│                        │High     │   │
│                        │Point 📈 │   │
│                        └─────────┘   │
│                                        │
│       2015        Present    Future   │
│  ─────●──────────●──────────●─────    │
│                                        │
│  [+ Add Event]                         │
│                                        │
├────────────────────────────────────────┤
│  [Home]  [Practice]  [Map]  [Journal]  │
└────────────────────────────────────────┘
```

### 4.3 Voice Map Studio

```
┌────────────────────────────────────────┐
│  ← Voice Map Studio                    │
├────────────────────────────────────────┤
│                                        │
│  YOUR DIALOGICAL SELF                  │
│  ─────────────────────────────────    │
│                                        │
│           ┌───────────┐               │
│           │Achiever   │               │
│      ╱────│    🎯     │────╲          │
│     ╱     └───────────┘     ╲         │
│    ╱            │            ╲        │
│   ╱             │             ╲       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │Caretaker│──│  SELF   │──│ Critic  ││
│  │   💚    │  │    ●    │  │   ⚠️    ││
│  └─────────┘  └─────────┘  └─────────┘│
│        ╲            │           ╱     │
│         ╲           │          ╱      │
│          ╲    ┌───────────┐  ╱       │
│           ────│Free Spirit│───        │
│  ~~conflict~~ │    ✨     │           │
│               └───────────┘           │
│                                        │
│  VOICES (4)        CONFLICTS (2)       │
│  [Edit Voices]     [Resolve →]         │
│                                        │
│  Legend:                               │
│  ─── Support  ~~~ Conflict            │
│                                        │
├────────────────────────────────────────┤
│  [Home]  [Practice]  [Map]  [Journal]  │
└────────────────────────────────────────┘
```

### 4.4 Exercise Screen

```
┌────────────────────────────────────────┐
│  ← Exercise                    ✕ Exit  │
├────────────────────────────────────────┤
│                                        │
│  VISUAL SQUASH                         │
│  Integrating Conflicting Parts         │
│  ─────────────────────────────────    │
│                                        │
│  Step 3 of 8                           │
│  [●●●○○○○○]                            │
│                                        │
│  ┌────────────────────────────────┐   │
│  │                                │   │
│  │   Place Part A in your left    │   │
│  │   hand. Get a clear sense of   │   │
│  │   this part—an image, a        │   │
│  │   feeling, or a symbol.        │   │
│  │                                │   │
│  │   🤲                           │   │
│  │                                │   │
│  │   What do you notice?          │   │
│  │                                │   │
│  └────────────────────────────────┘   │
│                                        │
│  YOUR NOTES                            │
│  ┌────────────────────────────────┐   │
│  │ I see a tight fist, feeling    │   │
│  │ of tension...                  │   │
│  └────────────────────────────────┘   │
│                                        │
│           [← Previous]  [Next →]       │
│                                        │
├────────────────────────────────────────┤
│  [🎵 Audio Guide]         [⏱️ Timer]   │
└────────────────────────────────────────┘
```

### 4.5 Progress Dashboard

```
┌────────────────────────────────────────┐
│  ← Progress                            │
├────────────────────────────────────────┤
│                                        │
│  YOUR TRANSFORMATION JOURNEY           │
│  ─────────────────────────────────    │
│                                        │
│      ┌─────────────────────┐          │
│      │                     │          │
│      │    ╭───────────╮    │          │
│      │    │  Day 23   │    │          │
│      │    │   🔥      │    │          │
│      │    │  Streak   │    │          │
│      │    ╰───────────╯    │          │
│      │                     │          │
│      └─────────────────────┘          │
│                                        │
│  BY APPROACH                           │
│  ┌──────────┐┌──────────┐┌──────────┐ │
│  │Narrative ││Dialogical││Generative│ │
│  │Anchoring ││Transform.││Storytell.│ │
│  │  ▓▓▓▓░░  ││  ▓▓▓░░░  ││  ▓▓░░░░  │ │
│  │   68%    ││   52%    ││   35%    │ │
│  └──────────┘└──────────┘└──────────┘ │
│                                        │
│  ACHIEVEMENTS                          │
│  🏆 First Voice Map    ✓              │
│  🏆 7-Day Streak       ✓              │
│  🏆 Redemptive Rewrite ✓              │
│  🔒 Timeline Master    (3/5 exercises)│
│                                        │
│  INSIGHTS                              │
│  ────────────────────────────────     │
│  Your narrative style is primarily     │
│  reflective. Consider practicing       │
│  dramatic mode...                      │
│                                        │
├────────────────────────────────────────┤
│  [Home]  [Practice]  [Map]  [Journal]  │
└────────────────────────────────────────┘
```

---

## 5. Technical Architecture

### 5.1 Technology Stack

**Frontend (Web/PWA)**:

- Framework: Next.js 14+ with React 18+
- Language: TypeScript
- Styling: Tailwind CSS + CSS Variables for theming
- State Management: Zustand
- Animation: Framer Motion
- Charts/Viz: D3.js + Recharts

**Backend**:

- Runtime: Node.js
- Framework: Express.js or Fastify
- Language: TypeScript
- ORM: Prisma

**Database**:

- Primary: PostgreSQL (user data, progress)
- Secondary: Redis (caching, sessions)

**Audio**:

- Web Audio API
- Pre-recorded trance guides
- Audio streaming service (CloudFront)

**Authentication**:

- Auth0 or Clerk
- Social login (Google, Apple)
- Email/password

**Hosting**:

- Frontend: Vercel
- Backend: Railway or AWS
- Database: Supabase or AWS RDS
- Media: AWS S3 + CloudFront

### 5.2 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Web App   │  │  iOS PWA    │  │ Android PWA │        │
│  │  (Next.js)  │  │             │  │             │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │
└─────────┼────────────────┼────────────────┼────────────────┘
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                        API Layer                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   API Gateway                        │   │
│  │                   (REST + WebSocket)                 │   │
│  └─────────────────────────────────────────────────────┘   │
│         │              │              │              │      │
│         ▼              ▼              ▼              ▼      │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │  Auth    │   │  User    │   │ Exercise │   │  Media   ││
│  │ Service  │   │ Service  │   │ Service  │   │ Service  ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│                                                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                       Data Layer                            │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │  PostgreSQL   │  │     Redis     │  │      S3       │  │
│  │  (User Data)  │  │   (Cache)     │  │   (Media)     │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Data Models

```typescript
// User Model
interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
  lastActiveAt: Date;
  preferences: UserPreferences;
  subscription: SubscriptionStatus;
}

interface UserPreferences {
  primaryApproach: "anchoring" | "dialogical" | "storytelling";
  notificationsEnabled: boolean;
  dailyReminderTime?: string;
  theme: "light" | "dark" | "system";
}

// Story/Narrative Models
interface LifeStory {
  id: string;
  userId: string;
  chapters: Chapter[];
  events: LifeEvent[];
  createdAt: Date;
  updatedAt: Date;
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  order: number;
}

interface LifeEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: "high_point" | "low_point" | "turning_point" | "regular";
  narrativeType?:
    | "redemptive"
    | "contamination"
    | "progressive"
    | "regressive"
    | "stable";
  emotions: string[];
  chapterId?: string;
}

// Voice Map Models
interface VoiceMap {
  id: string;
  userId: string;
  voices: Voice[];
  relationships: VoiceRelationship[];
  createdAt: Date;
  updatedAt: Date;
}

interface Voice {
  id: string;
  name: string;
  character: string;
  origin: string;
  typicalMessage: string;
  positiveIntention: string;
  positionX: number;
  positionY: number;
  size: "small" | "medium" | "large";
  color: string;
}

interface VoiceRelationship {
  id: string;
  voiceAId: string;
  voiceBId: string;
  type: "support" | "neutral" | "conflict";
  notes?: string;
}

// Exercise & Progress Models
interface ExerciseCompletion {
  id: string;
  userId: string;
  exerciseId: string;
  completedAt: Date;
  duration: number;
  notes: string;
  reflections: Record<string, string>;
}

interface JournalEntry {
  id: string;
  userId: string;
  title?: string;
  content: string;
  templateId?: string;
  exerciseId?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface UserProgress {
  id: string;
  userId: string;
  currentStreak: number;
  longestStreak: number;
  totalExercises: number;
  approachProgress: {
    anchoring: number;
    dialogical: number;
    storytelling: number;
  };
  achievements: string[];
  lastActivityDate: Date;
}
```

### 5.4 API Endpoints

```
Authentication:
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

User:
GET    /api/users/me
PATCH  /api/users/me
GET    /api/users/me/progress
GET    /api/users/me/achievements

Life Story:
GET    /api/story
POST   /api/story
PUT    /api/story
GET    /api/story/chapters
POST   /api/story/chapters
PUT    /api/story/chapters/:id
DELETE /api/story/chapters/:id
GET    /api/story/events
POST   /api/story/events
PUT    /api/story/events/:id
DELETE /api/story/events/:id

Voice Map:
GET    /api/voicemap
POST   /api/voicemap
PUT    /api/voicemap
GET    /api/voicemap/voices
POST   /api/voicemap/voices
PUT    /api/voicemap/voices/:id
DELETE /api/voicemap/voices/:id
POST   /api/voicemap/relationships
PUT    /api/voicemap/relationships/:id
DELETE /api/voicemap/relationships/:id

Exercises:
GET    /api/exercises
GET    /api/exercises/:id
GET    /api/exercises/recommended
POST   /api/exercises/:id/complete
GET    /api/exercises/completions

Journal:
GET    /api/journal
POST   /api/journal
GET    /api/journal/:id
PUT    /api/journal/:id
DELETE /api/journal/:id
GET    /api/journal/templates

Progress:
GET    /api/progress
GET    /api/progress/streaks
GET    /api/progress/insights

Media:
GET    /api/media/audio/:id
GET    /api/media/audio/:id/stream
```

---

## 6. Design System

### 6.1 Color Palette

```css
/* Light Theme */
--color-bg-primary: #fdfcfb;
--color-bg-secondary: #f5f3f0;
--color-bg-tertiary: #edeae6;

--color-text-primary: #1a1a1a;
--color-text-secondary: #4a4a4a;
--color-text-muted: #8a8a8a;

--color-accent-primary: #5b4fdb; /* Deep indigo */
--color-accent-secondary: #38b2ac; /* Teal */
--color-accent-tertiary: #ed8936; /* Warm orange */

--color-success: #48bb78;
--color-warning: #ecc94b;
--color-error: #f56565;

/* Approach Colors */
--color-anchoring: #6b46c1; /* Purple */
--color-dialogical: #319795; /* Teal */
--color-storytelling: #dd6b20; /* Orange */

/* Dark Theme */
--color-bg-primary-dark: #1a1a2e;
--color-bg-secondary-dark: #252540;
--color-bg-tertiary-dark: #2e2e4a;
--color-text-primary-dark: #f5f5f5;
```

### 6.2 Typography

```css
/* Font Families */
--font-display: "Playfair Display", serif;
--font-body: "Source Sans Pro", sans-serif;
--font-mono: "JetBrains Mono", monospace;

/* Font Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 6.3 Spacing & Layout

```css
/* Spacing Scale */
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.25rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;

/* Border Radius */
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

### 6.4 Component Library

Core components needed:

- Button (primary, secondary, ghost, icon)
- Input (text, textarea, select)
- Card (standard, interactive, featured)
- Modal (dialog, drawer, fullscreen)
- Navigation (bottom tabs, side nav, header)
- Progress (bar, ring, steps)
- Badge/Tag
- Alert/Toast
- Avatar
- Icon set (custom + Lucide icons)
- Timeline component
- Voice map canvas
- Audio player
- Markdown renderer

---

## 7. Development Roadmap

### Phase 1: MVP (8 weeks)

**Week 1-2: Foundation**

- Project setup and architecture
- Authentication system
- Database schema and migrations
- Basic API structure

**Week 3-4: Core Features**

- User dashboard
- Basic story builder (timeline view)
- Journal with templates
- Simple exercise player

**Week 5-6: Essential Tools**

- Voice map canvas (basic)
- Progress tracking
- Daily check-in system
- Notification setup

**Week 7-8: Polish & Launch**

- UI refinement
- Testing and bug fixes
- Performance optimization
- Soft launch

### Phase 2: Enhanced Features (6 weeks)

**Week 9-10**:

- Audio trance guides
- Advanced voice map features
- Enhanced story builder

**Week 11-12**:

- Insights and analytics
- Achievement system
- Social sharing

**Week 13-14**:

- Advanced exercises
- Customization options
- Performance improvements

### Phase 3: Scale & Extend (Ongoing)

- Community features
- Coach/therapist tools
- Premium content
- API for integrations
- Native mobile apps (if warranted)

---

## 8. Success Metrics

### User Engagement

- Daily Active Users (DAU)
- Weekly Active Users (WAU)
- Session duration
- Exercise completion rate
- Streak maintenance rate

### Content Interaction

- Exercises completed per user
- Journal entries per user
- Voice map interactions
- Story builder usage

### Outcomes

- User-reported transformation progress
- Narrative assessment changes
- Approach completion rates
- User satisfaction (NPS)

### Business

- User acquisition cost
- Conversion rate (free to paid)
- Retention (30-day, 90-day)
- Revenue per user

---

## 9. Future Considerations

### Potential Expansions

- AI-powered narrative analysis
- Personalized exercise recommendations
- Community features and forums
- Coach marketplace
- Integration with therapy platforms
- Research partnerships

### Technical Evolution

- Native mobile apps
- Offline-first architecture
- Real-time collaboration
- Voice input for journaling
- AR/VR trance experiences

================================================================================

# File: book/BOOK_STRUCTURE.md

================================================================================

# Narrative Identity Transformation

## The Complete Book Structure

**Working Title**: _Rewriting Your Self: A Practical Guide to Identity Transformation through Narrative and NLP_

**Subtitle**: _Three Pathways to Becoming Who You're Meant to Be_

---

## Book Overview

**Target Audience**:

- Self-development enthusiasts
- NLP practitioners seeking deeper applications
- Therapists and coaches
- Anyone seeking intentional personal transformation

**Estimated Length**: 75,000-90,000 words

**Format**: Practical guide with theory, techniques, exercises, and case studies

---

## Complete Chapter Outline

### FRONT MATTER

#### Foreword (by notable figure in NLP or narrative psychology)

- The importance of synthesizing research and practice
- Personal endorsement

#### Preface: My Story

- Author's narrative of discovering this synthesis
- Why this book needed to be written
- How to use this book

#### Introduction: The Story You Tell Yourself

- The central insight: identity is narrative
- Why this matters for transformation
- The problem with current approaches
- The promise of this synthesis
- How the three approaches work together
- Overview of what's to come

---

### PART I: FOUNDATIONS

_Understanding the territory before beginning the journey_

---

#### Chapter 1: Narrative Identity - The Stories We Live By (4,000 words)

**Opening Hook**: A brief story illustrating how two people with identical experiences have completely different lives because of how they narrate those experiences.

**Key Sections**:

1.1 **What is Narrative Identity?**

- Definition and core concept
- McAdams' life story model
- Identity as internalized, evolving story

  1.2 **The Three Components of Narrative Identity**

- Reconstructed past
- Perceived present
- Anticipated future

  1.3 **How Narratives Shape Experience**

- Stories create meaning
- Stories create states
- Stories create behavior

  1.4 **The Types of Narrative**

- Redemptive narratives (bad → good)
- Contamination narratives (good → bad)
- Progressive narratives (upward)
- Regressive narratives (downward)
- Stable narratives

  1.5 **The Dialogical Self**

- Multiple voices within
- Harmony and conflict
- The web of identity positions

**Chapter Exercise**: The Quick Life Story Interview (15-minute self-administered version)

**Key Takeaways**:

- Identity is not fixed; it's a story we tell
- The type of story matters enormously
- Multiple voices make up our identity
- We can change our story

---

#### Chapter 2: NLP and Trance - Tools for Transformation (4,500 words)

**Opening Hook**: Brief story of transformation through NLP techniques—someone who changed their life by changing their internal experience.

**Key Sections**:

2.1 **What is NLP?**

- Origins and development
- Core principles
- The structure of subjective experience

  2.2 **Anchoring: Creating Reliable Access to States**

- What anchors are
- How to create and fire anchors
- Types of anchoring

  2.3 **Submodalities: The Code of Experience**

- Visual submodalities
- Auditory submodalities
- Kinesthetic submodalities
- How changing submodalities changes meaning

  2.4 **The Milton Model: Language of Influence**

- Hypnotic language patterns
- Presuppositions
- Embedded commands
- Metaphor and story

  2.5 **Parts and Integration**

- The concept of parts
- Visual squash technique
- Resolving internal conflicts

  2.6 **Timeline: The Structure of Time**

- How time is spatially organized
- Working with timeline
- Changing past, present, and future

  2.7 **Trance: Accessing Deep Change**

- What trance is and isn't
- Natural trance states
- Using trance for transformation

**Chapter Exercise**: Resource State Library—create anchors for 5 key states

**Key Takeaways**:

- NLP provides precise tools for change
- Experience can be systematically modified
- Internal conflicts can be resolved
- Time and memory are malleable

---

#### Chapter 3: The Synthesis - Three Pathways to Narrative Transformation (3,500 words)

**Opening Hook**: The "aha moment" when narrative identity theory and NLP came together—illustrated through a case example.

**Key Sections**:

3.1 **Where Narrative and NLP Meet**

- Stories create states; NLP works with states
- Dialogical self parallels parts work
- Timeline in both frameworks
- Language patterns in both

  3.2 **The Three Approaches Overview**

- Approach 1: Narrative Anchoring—working through states
- Approach 2: Dialogical Transformation—working with voices
- Approach 3: Generative Storytelling—working with language

  3.3 **How to Choose Your Approach**

- Assessment questions
- Matching approach to personality
- When to use each

  3.4 **How the Approaches Work Together**

- Foundation, resolution, construction
- Iterating through approaches
- The complete transformation process

**Chapter Exercise**: Approach Assessment Questionnaire

**Key Takeaways**:

- The synthesis creates something greater than either alone
- Three pathways serve different needs
- You can use one approach or all three
- The system is flexible and adaptable

---

### PART II: APPROACH 1 - NARRATIVE ANCHORING

_Story-Based State Management_

---

#### Chapter 4: Understanding Narrative States (4,000 words)

**Opening Hook**: Story of someone stuck in a "failure state" who couldn't access their actual capabilities—and how understanding narrative states changed everything.

**Key Sections**:

4.1 **The State-Story Connection**

- Stories create states
- States reinforce stories
- The bidirectional relationship

  4.2 **Identifying Your Narrative States**

- High point states
- Low point states
- Turning point states
- Habitual states

  4.3 **The Life Story State Map**

- Mapping narratives to states
- Identifying dominant states
- Finding underutilized resources

  4.4 **Why States Matter for Identity**

- State-dependent memory
- State-dependent behavior
- State as access point for change

**Chapter Exercise**: Complete Life Story State Map

**Case Study**: "Sarah's Stuck State"—how identifying narrative states revealed the path to change

**Key Takeaways**:

- Every narrative has an associated state
- States can be reliable or unreliable
- Mapping states reveals transformation opportunities
- Working with states creates leverage for change

---

#### Chapter 5: Anchoring Life Stories (5,000 words)

**Opening Hook**: The story of an athlete who anchored her "champion" narrative and accessed it before every competition.

**Key Sections**:

5.1 **The Theory of Narrative Anchoring**

- Why anchoring works with narratives
- The neurological basis
- Creating reliable access

  5.2 **Building Your Resource Anchor Library**

- Essential resource states
- Creating stable anchors
- Testing and strengthening

  5.3 **Anchoring Key Narrative States**

- Anchoring your high point narrative
- Anchoring your redemption narratives
- Anchoring your future self narrative

  5.4 **Advanced Anchoring Techniques**

- Stacking anchors
- Chaining anchors
- Collapsing anchors for narrative transformation

  5.5 **Troubleshooting**

- When anchors don't fire
- Contaminated anchors
- Maintaining anchors over time

**Chapter Exercises**:

- Resource Anchor Installation
- Narrative State Anchoring Protocol

**Case Study**: "Michael's Interview Anchor"—using narrative anchoring to transform job interview performance

**Key Takeaways**:

- Anchors provide reliable access to narrative states
- Build a library of resource anchors first
- Narrative anchors are powerful for identity work
- Regular practice maintains anchors

---

#### Chapter 6: Timeline Reconstruction (5,000 words)

**Opening Hook**: Story of someone who "rewrote their past" using timeline work and watched their present transform.

**Key Sections**:

6.1 **The Nature of Timeline**

- How time is organized in the mind
- Different timeline orientations
- The malleability of temporal experience

  6.2 **Eliciting Your Timeline**

- Step-by-step timeline discovery
- Mapping your temporal organization
- Understanding your pattern

  6.3 **Timeline Narrative Work**

- Floating above to gain perspective
- Adding resources to past narratives
- Creating springboard effects

  6.4 **The Springboard Installation Process**

- Identifying springboard candidates
- The complete intervention protocol
- Integration and testing

  6.5 **Connecting Past, Present, and Future**

- Creating narrative continuity
- Resolving timeline discontinuities
- Building toward desired future

**Chapter Exercises**:

- Timeline Elicitation Exercise
- Springboard Installation Protocol

**Case Study**: "Emma's Trauma to Triumph"—using timeline work to transform a difficult past into a platform for growth

**Key Takeaways**:

- Timeline is spatially organized and malleable
- Past experiences can be resourced retroactively
- Springboard effects transform difficulties into growth
- Timeline work creates narrative continuity

---

#### Chapter 7: Trance-Based Narrative Rewriting (4,500 words)

**Opening Hook**: Story of someone who, in trance, discovered a completely new interpretation of their life story.

**Key Sections**:

7.1 **Why Trance for Narrative Work?**

- Access to unconscious processing
- Bypassing conscious resistance
- Deeper integration

  7.2 **Trance Induction for Narrative Work**

- Progressive relaxation
- Eye fixation
- Other suitable methods

  7.3 **Narrative Reprocessing in Trance**

- Accessing narratives while in trance
- Allowing transformation
- Installing new narratives

  7.4 **Self-Hypnosis for Ongoing Practice**

- Creating self-induction protocol
- Daily trance practice
- Long-term integration

  7.5 **Precautions and Considerations**

- When professional help is needed
- Trauma considerations
- Maintaining ecology

**Chapter Exercises**:

- Basic Trance Induction Practice
- Trance Narrative Reprocessing Protocol

**Case Study**: "David's Deep Rewrite"—using trance to transform a core limiting narrative

**Key Takeaways**:

- Trance provides deep access to narratives
- Unconscious processing enables transformation
- Self-hypnosis supports ongoing work
- Use appropriate care with intense material

---

### PART III: APPROACH 2 - DIALOGICAL TRANSFORMATION

_Multi-Voice Integration_

---

#### Chapter 8: The Multiplicity of Self (4,000 words)

**Opening Hook**: Story of someone who discovered they had been living according to a "voice" that wasn't even their own.

**Key Sections**:

8.1 **The Dialogical Self Theory**

- Multiple I-positions
- Internal dialogue
- The society of mind

  8.2 **Types of Narrative Voices**

- Internalized others (parents, teachers, culture)
- Historical selves (younger versions)
- Role-based selves (professional, parent, friend)
- Aspirational selves (who you want to become)
- Shadow aspects (disowned parts)

  8.3 **Harmony and Conflict in the Self**

- When voices support each other
- When voices conflict
- The cost of unresolved conflict

  8.4 **The Promise of Integration**

- Greater access to resources
- Reduced internal conflict
- Clearer identity
- More authentic expression

**Chapter Exercise**: Complete Voice Inventory

**Case Study**: "Elena's Warring Voices"—discovering that chronic indecision was actually two voices in conflict

**Key Takeaways**:

- The self contains multiple voices
- These voices have different origins and functions
- Internal conflict drains energy and creates confusion
- Integration is possible and transformative

---

#### Chapter 9: Mapping Identity Positions (4,500 words)

**Opening Hook**: The story of creating a visual map of someone's inner world—and the revelation that came from seeing it all at once.

**Key Sections**:

9.1 **The Personality Web Approach**

- Origins in research
- The mapping methodology
- What the map reveals

  9.2 **Voice Discovery Techniques**

- Reflective questioning
- Situational analysis
- Internal dialogue tracking

  9.3 **Creating Your Voice Map**

- Step-by-step mapping process
- Representing voices visually
- Showing relationships

  9.4 **Analyzing Your Map**

- Central vs. peripheral voices
- Support vs. conflict relationships
- Gaps and missing voices

  9.5 **Prioritizing Integration Work**

- Which conflicts matter most
- Sequencing integration
- Setting realistic goals

**Chapter Exercises**:

- Complete Voice Map Creation
- Conflict Prioritization Matrix

**Case Study**: "James's Complex Web"—how mapping revealed the surprising source of his career struggles

**Key Takeaways**:

- Visual mapping makes the dialogical self tangible
- Patterns become visible that weren't apparent before
- The map guides integration work
- Regular updating tracks progress

---

#### Chapter 10: Integrating Narrative Voices (5,500 words)

**Opening Hook**: Story of someone who finally achieved peace between their "achiever" and "caretaker" parts.

**Key Sections**:

10.1 **The Positive Intention Chain**

- Every voice has positive intent
- Climbing the intention ladder
- Finding common ground

  10.2 **The Visual Squash Technique**

- Separating parts onto hands
- Discovering intentions
- Integration process
- Future pacing

  10.3 **Voice Dialogue Work**

- Setting up the dialogue
- Giving voices expression
- Facilitating understanding
- Reaching resolution

  10.4 **The Six-Step Reframe**

- For problematic voice patterns
- Finding new behaviors
- Ecology checking

  10.5 **The Internal Conference**

- Trance-based integration
- Gathering all voices
- Facilitated resolution

  10.6 **Troubleshooting Integration**

- When parts won't integrate
- Hidden conflicts
- Maintaining integration

**Chapter Exercises**:

- Positive Intention Chain Practice
- Visual Squash Protocol
- Chair Dialogue Practice

**Case Study**: "Maria's Integration Journey"—resolving a lifetime conflict between career ambition and family devotion

**Key Takeaways**:

- All voices have positive intentions at their core
- Finding common ground enables integration
- Multiple techniques serve different situations
- Integration creates freedom and flexibility

---

#### Chapter 11: Creating Coherent Identity (4,000 words)

**Opening Hook**: Story of someone who, after integration work, felt "whole" for the first time.

**Key Sections**:

11.1 **What is Narrative Coherence?**

- Unity without uniformity
- Honoring multiplicity
- The integrated self

  11.2 **Constructing the Unified Narrative**

- Writing your integrated story
- Including all voices
- Creating genuine coherence

  11.3 **Meta-Model Strengthening**

- Clarifying vague elements
- Challenging limiting language
- Building robustness

  11.4 **Living the Integrated Identity**

- Daily coherence practices
- Handling new challenges
- Ongoing maintenance

**Chapter Exercises**:

- Unified Narrative Writing
- Weekly Voice Check-In Protocol

**Case Study**: "John's New Story"—how integration led to a narrative that finally felt true

**Key Takeaways**:

- Coherence is achieved, not given
- The unified narrative honors all voices
- Language work strengthens coherence
- Ongoing practice maintains integration

---

### PART IV: APPROACH 3 - GENERATIVE STORYTELLING

_Active Narrative Creation_

---

#### Chapter 12: Storytelling Modes and Identity (4,000 words)

**Opening Hook**: Story of someone who discovered they only told stories in one mode—and what opened up when they learned to switch.

**Key Sections**:

12.1 **The Two Storytelling Modes**

- Dramatic mode characteristics
- Reflective mode characteristics
- When each is useful

  12.2 **Assessing Your Natural Mode**

- Self-assessment techniques
- Identifying your pattern
- Understanding your style

  12.3 **Developing Mode Flexibility**

- Practicing dramatic mode
- Practicing reflective mode
- Switching between modes

  12.4 **Modes and Identity Construction**

- How dramatic mode creates experience
- How reflective mode creates meaning
- Using modes strategically

**Chapter Exercises**:

- Mode Assessment Exercise
- Mode Switching Practice

**Case Study**: "Lisa's Mode Discovery"—how learning to use reflective mode transformed her meaning-making

**Key Takeaways**:

- Two distinct modes serve different purposes
- Most people favor one mode
- Flexibility enables better identity construction
- Strategic mode use enhances narrative power

---

#### Chapter 13: NLP Language for Story Creation (5,000 words)

**Opening Hook**: Story of someone whose internal narrative shifted from defeating to empowering—through language changes alone.

**Key Sections**:

13.1 **The Power of Language in Identity**

- Words shape perception
- Language creates reality
- Internal narrative is linguistic

  13.2 **Milton Model for Self-Narrative**

- Artfully vague language
- Presuppositions for empowerment
- Embedded commands for change

  13.3 **Meta-Model for Clarity**

- Challenging deletions
- Challenging generalizations
- Challenging distortions

  13.4 **Meta-Programs in Narrative**

- Toward/away patterns
- Internal/external patterns
- Other key patterns

  13.5 **Crafting Enhanced Narratives**

- Combining patterns
- Writing enhanced self-narratives
- Testing and refining

**Chapter Exercises**:

- Milton Model Enhancement Practice
- Meta-Model Cleanup Practice

**Case Study**: "Robert's Language Shift"—how changing his narrative language changed his life

**Key Takeaways**:

- Language powerfully shapes identity
- Milton Model patterns enhance narratives
- Meta-Model clarifies and strengthens
- Meta-programs reveal patterns to shift

---

#### Chapter 14: Constructing Empowering Narratives (5,000 words)

**Opening Hook**: Story of someone who rewrote their "failure" narrative into a "learning" narrative—and watched their behavior change automatically.

**Key Sections**:

14.1 **The Redemptive Framework**

- Structure of redemptive narratives
- Finding redemption in any experience
- The transformation process

  14.2 **The Story Spine**

- Using story structure for identity
- The complete story spine
- Expanding the spine

  14.3 **Creating Your Master Narrative**

- Life story as coherent narrative
- Themes and through-lines
- Character arc

  14.4 **Daily Narrative Construction**

- Narrating experiences intentionally
- Choosing frames in the moment
- Building narrative habits

**Chapter Exercises**:

- Redemptive Rewrite Practice
- Story Spine Development
- Daily Narrative Journal

**Case Study**: "Karen's Master Narrative"—creating a coherent life story that empowered her future

**Key Takeaways**:

- Redemptive narratives can be consciously constructed
- Story structure provides powerful framework
- A master narrative provides direction
- Daily practice builds narrative skill

---

#### Chapter 15: Future Pacing Your Identity (4,500 words)

**Opening Hook**: Story of someone who created such a vivid future self that they "became" that person.

**Key Sections**:

15.1 **The Future Self in Identity**

- Anticipated future as identity component
- The pull of compelling futures
- Why this matters

  15.2 **Creating Your Future Self**

- Clarifying desired identity
- Building vivid representation
- All sensory modalities

  15.3 **The Future Self Immersion**

- Visualization protocol
- Narrative writing
- Daily practice

  15.4 **Building Bridges to the Future**

- Stepping stones
- Progressive narratives
- Action alignment

  15.5 **Installation and Maintenance**

- Installing future identity
- Maintaining the pull
- Adjusting as you grow

**Chapter Exercises**:

- Future Self Visualization
- "Day in My Future Life" Narrative
- Bridge Building Exercise

**Case Study**: "Tom's Future Self Journey"—how a vivid future self guided five years of transformation

**Key Takeaways**:

- Future identity is part of narrative identity
- Vivid future selves create motivation
- Daily immersion strengthens the pull
- Bridges connect present to future

---

### PART V: INTEGRATION AND PRACTICE

_Bringing it all together_

---

#### Chapter 16: Choosing Your Approach (3,000 words)

**Opening Hook**: Brief stories of three different people, each finding success with a different approach.

**Key Sections**:

16.1 **Assessment Revisited**

- Deep dive into approach matching
- Personality factors
- Situation factors

  16.2 **Approach 1 Indicators**

- When Narrative Anchoring is best
- Signs it's working
- Signs to try another approach

  16.3 **Approach 2 Indicators**

- When Dialogical Transformation is best
- Signs it's working
- Signs to try another approach

  16.4 **Approach 3 Indicators**

- When Generative Storytelling is best
- Signs it's working
- Signs to try another approach

  16.5 **Flexibility in Approach**

- Switching approaches
- Trying different methods
- Following your response

**Chapter Exercise**: Detailed Approach Selection Protocol

**Key Takeaways**:

- Different approaches serve different needs
- Assessment helps but isn't definitive
- Flexibility is valuable
- Response guides approach selection

---

#### Chapter 17: Combining Approaches (4,000 words)

**Opening Hook**: Story of someone who used all three approaches in sequence for complete transformation.

**Key Sections**:

17.1 **The Integration Framework**

- Foundation: Narrative Anchoring
- Resolution: Dialogical Transformation
- Construction: Generative Storytelling

  17.2 **Sequencing for Maximum Effect**

- When to use each approach
- How they build on each other
- Cycling through approaches

  17.3 **The Complete Transformation Protocol**

- Step-by-step integrated process
- Checkpoints and adjustments
- Timeline for transformation

  17.4 **Case Study: Complete Integration**

- Detailed example using all approaches
- Decision points along the way
- Final outcome

**Chapter Exercise**: Personal Transformation Plan using all approaches

**Key Takeaways**:

- Approaches work powerfully together
- Sequencing matters for results
- The complete protocol offers comprehensive change
- Individual adaptation is expected

---

#### Chapter 18: Maintaining Your Narrative Identity (3,500 words)

**Opening Hook**: Story of someone who transformed—and how they maintained that transformation years later.

**Key Sections**:

18.1 **The Nature of Identity Maintenance**

- Why maintenance matters
- Identity as ongoing process
- The practice mindset

  18.2 **Daily Practices**

- The Narrative Minute (3x daily)
- Evening narrative review
- Anchor maintenance

  18.3 **Weekly Practices**

- Weekly voice check-in
- Narrative journaling
- Approach practice

  18.4 **Monthly and Quarterly Reviews**

- Life story check-in
- Voice map update
- Future self refresh

  18.5 **Handling Challenges**

- When old narratives resurface
- Stress and identity
- Using challenges for growth

**Chapter Exercise**: Create Your Maintenance Protocol

**Key Takeaways**:

- Maintenance is essential for lasting change
- Daily, weekly, and periodic practices work together
- Challenges are opportunities
- Identity work is lifelong

---

#### Chapter 19: Advanced Techniques and Applications (4,000 words)

**Opening Hook**: Brief glimpse of advanced possibilities—what's possible with mastery.

**Key Sections**:

19.1 **Advanced State Work**

- Complex anchor patterns
- Designer states
- State chains for specific outcomes

  19.2 **Advanced Parts Work**

- Working with shadow aspects
- Core transformation process
- Deep identity shifts

  19.3 **Advanced Narrative Construction**

- Mythic narrative structures
- Archetypal patterns
- Life as hero's journey

  19.4 **Applications Beyond Self**

- Narrative identity in relationships
- Family narrative patterns
- Organizational narratives

  19.5 **Continuing Development**

- Resources for further learning
- Working with practitioners
- Becoming a practitioner

**Chapter Exercise**: Select one advanced technique to explore

**Key Takeaways**:

- Advanced work builds on foundations
- Mastery opens new possibilities
- Applications extend beyond self
- Learning never ends

---

### BACK MATTER

#### Appendix A: Complete Exercise Guide

Summary reference of all exercises organized by approach

#### Appendix B: Quick Reference Cards

One-page summaries of key techniques

#### Appendix C: Assessment Tools

Full versions of all assessment questionnaires

#### Appendix D: Resources and Further Reading

Books, courses, and practitioners

#### Appendix E: Glossary

Key terms defined

#### Notes

Chapter references and citations

#### Index

---

## Production Notes

### Visual Elements Needed

- Voice map example diagrams
- Timeline visualization
- Story spine template
- Submodality charts
- Process flowcharts

### Companion Materials

- Downloadable worksheets
- Audio guides for trance exercises
- Video demonstrations (optional)
- Online assessment tools

### App Integration Points

- Chapter exercise reminders
- Progress tracking tie-ins
- Community connections
- Audio content access

================================================================================

# File: book/chapters/00-introduction.md

================================================================================

# Introduction: The Story You Tell Yourself

---

_"In the end, we all become stories."_
— Margaret Atwood

---

## The Night Everything Changed

Maya sat across from me, tears streaming down her face. She was 34, successful by any external measure—partner at a prestigious law firm, beautiful apartment in the city, relationships that looked good on paper. And yet here she was, in my office, saying the same thing I'd heard from hundreds of people before her:

"I don't know who I am anymore."

What struck me wasn't just her words, but the story she told as she spoke. Every achievement was followed by a "but." Every success was tainted by the phrase "I got lucky" or "anyone could have done it." Her life narrative, I realized, was one of contamination—good things always led to bad, success was always temporary, happiness was always waiting to be snatched away.

And then she said something that would change my entire approach to personal transformation:

"I know my thoughts are irrational. I've been in therapy for years. I understand where this comes from. But knowing doesn't change anything. I still feel the same way."

Maya had insight. She understood her patterns. But understanding alone hadn't changed her experience of herself. Her identity—the story she told herself about who she was—remained stubbornly fixed.

That night, I began the research that would eventually become this book.

---

## What You're Really Looking For

If you've picked up this book, chances are you're looking for something that other approaches haven't provided. Perhaps, like Maya, you've gained insight into your patterns but haven't achieved lasting change. Perhaps you've read the self-help books, done the therapy, practiced the affirmations—and still something feels off.

What you're looking for, whether you've named it this way or not, is a transformation of identity itself. Not just different thoughts, but a different sense of who you are. Not just new behaviors, but a new relationship with yourself.

Here's what I've discovered after years of research and practice:

**Identity is a story. And stories can be rewritten.**

This isn't a metaphor. Research in narrative psychology has demonstrated that our sense of who we are is quite literally structured as a narrative—with characters, themes, plot lines, and an anticipated ending. We are, each of us, living inside a story we've been constructing since adolescence.

The good news is that because identity is a story, it's changeable. The narrative you've been living isn't the only possible narrative. There are other ways to tell the tale of your life—ways that empower rather than limit, that open possibilities rather than close them.

But here's what most approaches miss: knowing that your story can be different isn't enough to change it. You need tools—practical, precise techniques for accessing your narrative identity and transforming it from the inside out.

That's where this book comes in.

---

## The Synthesis

This book represents a synthesis of two powerful fields:

**Narrative Identity Theory** comes from the research of psychologists like Dan McAdams, who has spent decades studying how people construct their life stories. This research reveals how identity is structured, what distinguishes empowering narratives from limiting ones, and what the process of identity development actually looks like.

**Neuro-Linguistic Programming (NLP)** comes from the practical work of Richard Bandler, John Grinder, and others who developed precise tools for changing internal experience. NLP provides techniques for accessing and modifying the way we represent our experiences internally—including our life stories.

Alone, each field has limitations. Narrative identity theory offers profound insight into how identity works but fewer tools for changing it. NLP offers powerful techniques but often lacks the theoretical framework to apply them to deep identity transformation.

Together, they create something new: a practical methodology for narrative identity transformation.

---

## The Three Approaches

Through years of applying this synthesis, I've discovered that there are three distinct pathways to transforming narrative identity. Each works through a different mechanism, each appeals to different types of people, and each can be used alone or in combination with the others.

### Approach 1: Narrative Anchoring

This approach works through states. It recognizes that every story creates a psychological state, and that by working with states—using anchoring, submodality modification, and trance—we can transform the stories themselves.

If you're someone who:

- Processes experience physically and emotionally
- Benefits from embodied approaches
- Needs to feel different before you can think differently

...then Narrative Anchoring may be your entry point.

### Approach 2: Dialogical Transformation

This approach works through voices. It recognizes that identity isn't singular but multiple—a dynamic conversation between different parts or voices within the self. By identifying, understanding, and integrating these voices, we create coherent identity from inner conflict.

If you're someone who:

- Experiences significant inner conflict
- Has distinct "parts" that seem to argue with each other
- Wants to understand and integrate your complexity

...then Dialogical Transformation may be your pathway.

### Approach 3: Generative Storytelling

This approach works through language. It recognizes that we actively construct our identities through the stories we tell, and that by becoming master storytellers of our own lives—using powerful language patterns and narrative structures—we can craft empowering identities.

If you're someone who:

- Processes primarily through language and thought
- Enjoys writing or verbal expression
- Wants conscious control over your self-narrative

...then Generative Storytelling may resonate with you.

---

## What You'll Find in This Book

This book is organized into five parts:

**Part I: Foundations** gives you the theoretical grounding you need. You'll learn what narrative identity is, how NLP provides tools for change, and how the three approaches work together.

**Part II: Narrative Anchoring** teaches you to work with narrative states—anchoring, modifying submodalities, using timeline therapy, and employing trance for deep narrative transformation.

**Part III: Dialogical Transformation** guides you through mapping your inner voices, finding their positive intentions, integrating conflicts, and creating coherent identity.

**Part IV: Generative Storytelling** shows you how to actively construct empowering narratives using language patterns, redemptive framing, and future pacing.

**Part V: Integration and Practice** helps you combine approaches, maintain your transformed identity, and continue developing.

Each chapter includes:

- Clear explanations of concepts and techniques
- Step-by-step exercises you can do on your own
- Real-world case examples
- Reflection questions for deeper integration

---

## How to Use This Book

There is no single right way to use this book. Here are some options:

**The Linear Path**: Read straight through, doing exercises as you go. This gives you the complete foundation and all three approaches.

**The Assessment Path**: Start with the Foundation chapters, take the approach assessment, then focus on the approach that resonates most. You can always return to explore others.

**The Reference Path**: If you already have some background, you might jump to specific techniques that address your current challenges.

**The Practice Path**: Some readers prefer to focus heavily on exercises, doing one or more daily while reading the concepts more casually.

Whatever path you choose, I encourage you to actually do the exercises. This is not a book to be merely read—it's a book to be practiced. The transformation happens in the doing.

---

## The App Companion

This book comes with a companion application that makes the concepts tangible and the exercises trackable. The app includes:

- Interactive story builder for mapping your life narrative
- Voice map studio for dialogical work
- Guided exercises with step-by-step instructions
- Progress tracking and insights
- Daily practice reminders

You can find the app at [website] or by searching "Narrative Identity" in your app store. While the book stands alone, the app enhances the experience—especially for ongoing practice.

---

## A Word Before We Begin

The work you're about to do is not superficial. Transforming narrative identity means changing your fundamental sense of who you are. This can be uncomfortable. Old stories may resist being rewritten. Parts of you may argue against change.

This is normal. In fact, it's a sign that the work is real.

But here's what I want you to know: On the other side of this discomfort is a new way of being in the world. A sense of authorship over your own life. A narrative that empowers rather than limits.

Maya, whose story opened this introduction, eventually transformed her contamination narrative into one of earned achievement. It took time. It took practice. It took working through discomfort. But today, she tells a different story—not just to others, but to herself.

And that has made all the difference.

You are the author of your own story. Let's learn to write.

---

_Turn the page to begin._

================================================================================

# File: book/chapters/01-narrative-identity.md

================================================================================

# Chapter 1: Narrative Identity - The Stories We Live By

---

_"We are, each of us, a story."_
— Dan P. McAdams

---

## The Day Marcus Met Himself

Marcus was 42 when his wife asked him a question that changed everything:

"If someone wrote the story of your life, what kind of story would it be?"

He'd never thought about it quite that way. Sure, he'd reflected on his past, worried about his future, assessed his present. But the idea that his life had a _genre_—that it followed a particular narrative pattern—was new.

At first, he said "action-adventure" because that sounded good. But as he sat with the question, he realized something uncomfortable: his actual life story felt more like a tragedy. A tale of potential unfulfilled, of moments where everything seemed about to come together before falling apart, of brief highs followed by lasting lows.

What struck Marcus most wasn't the content of his story, but the recognition that it _was_ a story—one he'd been telling himself for decades without ever questioning it. The narrative had felt so much like reality that he'd never noticed it was a narrative at all.

That recognition—the realization that identity is constructed through story—is where all transformation begins.

---

## What is Narrative Identity?

Narrative identity is the internalized, evolving story you construct about yourself. It's not just your biography—a sequence of events—but the meaningful story you create from those events. It includes:

- How you interpret your past
- How you understand your present
- How you anticipate your future

This isn't metaphor. Decades of research in narrative psychology have shown that we literally organize our sense of self as a story, complete with:

- **Characters**: Yourself in various stages, plus the significant others in your life
- **Themes**: Recurring patterns of meaning (achievement, redemption, struggle, growth)
- **Chapters**: Distinct periods or eras of your life
- **Plot**: The trajectory or direction your story takes
- **Anticipated ending**: How you imagine your story will conclude

The story you tell about yourself isn't just a description of who you are—it's a construction that _shapes_ who you are. Your narrative identity influences:

- The choices you make
- The emotions you feel
- The relationships you form
- The possibilities you see
- The meaning you find in experience

---

## How Narrative Identity Develops

Narrative identity isn't something you're born with. It develops through a specific process:

### Childhood: The Pre-Narrative Self

Young children don't have narrative identities. They have experiences, memories, and a developing sense of self, but they don't yet organize these into a coherent life story.

### Adolescence: The Birth of Story

In adolescence, something remarkable happens: we begin constructing our life story. The cognitive development of adolescence—specifically, the capacity for abstract thought and temporal integration—makes it possible to see life as a narrative for the first time.

This is when we start asking the big questions:

- Who am I?
- How did I become this way?
- What does my life mean?
- Who will I become?

The answers we construct become our initial narrative identity.

### Adulthood: Revision and Elaboration

Throughout adulthood, we continue revising and elaborating our narrative identity. Major life events—career changes, relationship transitions, losses, successes—prompt us to update our story. We add new chapters, reinterpret old ones, and adjust our understanding of where the story is headed.

Some people's narratives become richer and more nuanced with age. Others become more rigid and fixed. The difference lies in how actively we engage with our story.

---

## The Components of Narrative Identity

Research has identified several key components that make up a narrative identity:

### 1. Nuclear Episodes

These are the key scenes—the moments you remember vividly and return to when thinking about your life. They include:

- **High points**: Peak experiences of joy, accomplishment, or love
- **Low points**: Nadir experiences of loss, failure, or pain
- **Turning points**: Moments that changed the direction of your life

Nuclear episodes are particularly important because they're the scenes we've selected (often unconsciously) as defining. They're the moments we believe say something essential about who we are.

### 2. Life Themes

Themes are the recurring patterns of meaning in your story. Common themes include:

- **Agency**: Stories of self-determination, achievement, and impact
- **Communion**: Stories of connection, love, and belonging
- **Redemption**: Stories where suffering leads to growth
- **Contamination**: Stories where good things are spoiled
- **Growth**: Stories of development and becoming

Your dominant themes shape how you interpret new experiences. If redemption is your theme, you'll look for the growth in suffering. If contamination is your theme, you'll anticipate the catch in every success.

### 3. Narrative Tone

This is the emotional quality of your story—optimistic or pessimistic, hopeful or resigned, open or closed. Narrative tone colors everything:

- An optimistic tone makes difficulties feel temporary
- A pessimistic tone makes successes feel fragile
- A hopeful tone opens possibilities
- A resigned tone closes them

### 4. Narrative Coherence

This is how well your story hangs together. Coherent narratives have:

- **Causal connections**: Events are linked in understandable ways
- **Temporal order**: The timeline makes sense
- **Thematic consistency**: Recurring themes tie things together
- **Oriented ending**: The story has direction

Less coherent narratives feel fragmented—things happen but don't connect. More coherent narratives create a stable sense of identity.

### 5. The Anticipated Future

Your narrative identity includes not just past and present, but future. The imagined future self—who you're becoming, where your story is headed—is an active part of identity.

This anticipated future influences the present. If you imagine yourself succeeding, you approach challenges differently than if you imagine yourself failing. Your narrative future creates your narrative present.

---

## The Dialogical Self

One of the most important discoveries in narrative identity research is that the self is not singular but _dialogical_—a dynamic conversation between multiple voices or "I-positions."

Think about it: Haven't you ever felt torn between different "parts" of yourself? The part that wants to take risks and the part that wants to play it safe? The part that believes in yourself and the part that doubts?

These aren't just metaphors. Research by Peter Raggatt and others shows that we actually contain multiple narrative voices, each with its own:

- Perspective on events
- Emotional tone
- Typical messages
- Origins (often from significant others)

These voices can be in harmony—working together toward shared goals. Or they can be in conflict—pulling in different directions, creating inner turmoil.

Understanding your dialogical self—mapping your voices and their relationships—is crucial for identity transformation. We'll explore this deeply in Part III.

---

## Types of Narratives

Research has identified several types of narratives that people commonly construct:

### Redemption Narratives

In redemption narratives, negative events lead to positive outcomes. The bad becomes a doorway to good. Suffering leads to growth. Failure teaches lessons that enable later success.

Example: "Losing my job was devastating at the time, but it forced me to pursue my real passion, and now I'm happier than I've ever been."

People with redemptive narratives tend to:

- Recover better from setbacks
- Show greater psychological well-being
- Contribute more to others (generativity)
- Feel their lives have meaning

### Contamination Narratives

In contamination narratives, positive events lead to negative outcomes. Good things are spoiled. Success is tainted. Happiness is temporary before the inevitable fall.

Example: "Things were going so well—I should have known it wouldn't last. Sure enough, just when I thought I was happy, everything fell apart."

People with contamination narratives tend to:

- Have higher rates of depression
- Struggle to enjoy success
- Anticipate negative outcomes
- Feel their lives lack meaning

### Progressive Narratives

In progressive narratives, the story moves upward over time. Things are getting better. You're becoming more. The trajectory is positive.

Example: "Each year I grow more into myself. I'm wiser, more capable, more at peace than I was before."

### Regressive Narratives

In regressive narratives, the story moves downward over time. Things are getting worse. The best times are behind you. The trajectory is decline.

Example: "I peaked in my thirties. Since then, it's been a slow fade—less energy, fewer opportunities, declining relevance."

### Stable Narratives

In stable narratives, things stay relatively constant. Neither rising nor falling, the story maintains equilibrium.

Example: "My life has been pretty consistent—good job, good family, steady routines. No major highs or lows, just reliable stability."

---

## Why This Matters

Understanding that your identity is a narrative—and understanding what kind of narrative it is—creates the foundation for transformation.

Consider:

**If your identity is a story, it can be rewritten.** The past doesn't change, but its meaning is not fixed. The same events can be storied differently, and the story you tell makes all the difference.

**If your narrative is contaminating, you can learn to find redemption.** The tendency to see good things as inevitably spoiled is a pattern, not a reality. With awareness and technique, the pattern can shift.

**If your dialogical self is in conflict, you can create integration.** The warring voices within you don't have to keep fighting. Through understanding and integration work, they can harmonize.

**If your narrative tone is pessimistic, you can develop hope.** The emotional coloring of your story isn't fixed by circumstance—it's a way of seeing that can be transformed.

The first step is always awareness: seeing your narrative as a narrative. Once you can observe your story from outside it, change becomes possible.

---

## Chapter Exercise: The Quick Narrative Assessment

Take 15 minutes to answer these questions in your journal:

### 1. Nuclear Episodes

- What's your earliest clear memory? What meaning do you give it?
- What's a high point in your life—a moment of joy or success?
- What's a low point—a moment of difficulty or loss?
- What's a turning point—a moment that changed your direction?

### 2. Narrative Type Assessment

Think about how you typically tell your life story:

- When bad things happen, do they tend to lead to good outcomes (redemption) or do good things tend to be spoiled (contamination)?
- Does your overall trajectory feel upward (progressive), downward (regressive), or steady (stable)?

### 3. Theme Identification

- What themes repeat across your key memories? (e.g., achievement, connection, struggle, growth)
- Are your stories more about individual accomplishment or relationships?

### 4. Voice Mapping (Quick Version)

- What different "voices" or "parts" can you identify within yourself?
- Do any of these voices conflict with each other?

---

## Reflection Questions

After completing the exercise, reflect on these questions:

1. What kind of story are you living in? How would you describe its genre or type?

2. Does your narrative tend toward redemption or contamination? How does this affect your daily life?

3. What themes dominate your story? Are these the themes you want to be living?

4. If you could change one thing about your narrative identity, what would it be?

---

## Key Takeaways

- **Identity is narrative**: Your sense of self is structured as a story with characters, themes, and plot
- **Narrative is constructed**: You actively create your story; it's not simply given by events
- **Narrative type matters**: Redemptive narratives support wellbeing; contamination narratives undermine it
- **The self is dialogical**: Multiple voices make up your identity, and they may be in harmony or conflict
- **Narrative can change**: Because identity is constructed through story, transformation is possible

---

_In the next chapter, we'll explore the practical tools that NLP provides for accessing and transforming narrative identity._

================================================================================

# File: book/chapters/approach-1-narrative-anchoring.md

================================================================================

# Approach 1: Narrative Anchoring

## Story-Based State Management

---

## Overview

Narrative Anchoring is the art of using NLP anchoring and state management to access, transform, and stabilize narrative identity states. This approach recognizes that our life stories create and maintain specific psychological states—and that by working with these states, we can transform the stories themselves.

---

## Theoretical Foundation

### The State-Story Connection

Every life story carries emotional states. When we recall a memory of triumph, we re-enter a triumphant state. When we remember a failure, we may slip into a defeated state. These aren't just passing feelings—they're the emotional texture of our identity.

**Key Insight**: The story and the state are bidirectionally connected. Change the state, and the story can shift. Change the story, and the state transforms.

### Anchoring: The Bridge

Anchoring provides a bridge between conscious intention and unconscious response. By creating anchors, we can:

- Reliably access specific narrative states
- Maintain resourceful states during challenging work
- Transform states through collapse and chain techniques
- Install new state-story combinations

### Submodalities: The Language of Experience

Submodalities are the "coding system" of our internal experience. The way we represent a memory—its brightness, size, location, and other qualities—determines its emotional impact. By modifying submodalities, we can transform the meaning and emotional weight of life narratives.

### Timeline: The Architecture of Story

Our sense of time is spatially organized. Past, present, and future have locations in our mental space. By working with timeline, we can reorganize our narrative chronology, create new connections between events, and install compelling future identities.

---

## Core Methodology

### Phase 1: Elicitation

**Objective**: Identify and access the key narratives and their associated states.

#### Step 1.1: Life Story Mapping

Use a modified Life Story Interview to identify:

- Key chapters of life
- High points (peak experiences)
- Low points (nadirs)
- Turning points
- Characteristic themes

#### Step 1.2: State Identification

For each key narrative element, identify:

- The dominant emotional state
- The physical sensations
- The internal voice tone
- The mental images

#### Step 1.3: Narrative Typing

Classify each narrative as:

- **Redemptive**: Negative leads to positive
- **Contamination**: Positive leads to negative
- **Progressive**: Upward trajectory
- **Regressive**: Downward trajectory
- **Stable**: Consistent level

### Phase 2: Anchoring

**Objective**: Create reliable access to narrative states.

#### Step 2.1: Resource State Anchoring

Before working with challenging material, establish:

- Confidence anchor
- Safety anchor
- Curiosity anchor
- Perspective anchor

#### Step 2.2: Narrative State Anchoring

For key narratives, create anchors:

1. Recall the narrative vividly
2. Notice the peak of the associated state
3. Apply anchor at peak
4. Break state
5. Test anchor
6. Stack additional instances

#### Step 2.3: Anchor Organization

Organize anchors spatially:

- Resource anchors on dominant hand
- Narrative anchors systematically placed
- Create an "anchor map" for reference

### Phase 3: Transformation

**Objective**: Transform narratives through state work.

#### Step 3.1: Submodality Intervention

For narratives needing transformation:

1. Access narrative via anchor
2. Identify current submodalities:
   - Visual: brightness, size, distance, color, motion
   - Auditory: volume, pitch, location, tonality
   - Kinesthetic: intensity, location, temperature
3. Identify desired submodalities (from resourceful narrative)
4. Gradually shift submodalities
5. Test transformed narrative

#### Step 3.2: Anchor Collapse

For contamination sequences:

1. Anchor the contamination narrative on one location
2. Create a stronger anchor for a redemptive narrative
3. Fire both anchors simultaneously
4. Allow integration
5. Test result

#### Step 3.3: Anchor Chaining

For progressive transformation:

1. Identify current narrative state
2. Identify desired narrative state
3. Map intermediate states
4. Anchor each state
5. Fire states in sequence
6. Collapse beginning and end

### Phase 4: Timeline Work

**Objective**: Reorganize narrative chronology for growth.

#### Step 4.1: Timeline Elicitation

Discover personal timeline organization:

1. Think of recent past event, notice location
2. Think of distant past event, notice location
3. Think of near future event, notice location
4. Think of distant future event, notice location
5. Map the line connecting these points

#### Step 4.2: Timeline Narrative Reorganization

1. Float above timeline (meta-position)
2. Go to key narrative event
3. From above, add resources to past self
4. Notice how narrative changes
5. Float forward, noticing ripple effects
6. Return to present with new understanding

#### Step 4.3: Springboard Installation

Transform difficult narratives into springboards:

1. Identify difficult past narrative
2. Float above and behind the event
3. Ask: "What resources would have helped?"
4. Send resources to past self
5. Ask: "What did this experience make possible?"
6. Create causal connection to positive present/future
7. Install as growth narrative

### Phase 5: Trance Integration

**Objective**: Use trance to deepen and integrate changes.

#### Step 5.1: Trance Induction

Use progressive relaxation or other preferred induction.

#### Step 5.2: Narrative Reprocessing in Trance

In trance state:

1. Access the narrative through anchor
2. Allow unconscious to offer new perspectives
3. Notice what wants to shift
4. Allow transformation to occur naturally
5. Install new narrative through suggestion

#### Step 5.3: Future Pacing

While still in trance:

1. Imagine future situations
2. Notice how new narrative operates
3. Make adjustments as needed
4. Anchor the future state

### Phase 6: Integration

**Objective**: Stabilize changes and create maintenance patterns.

#### Step 6.1: Narrative Testing

Test transformed narratives by:

1. Telling the story out loud
2. Noticing emotional response
3. Checking for ecology (no parts objecting)
4. Adjusting as needed

#### Step 6.2: Maintenance Anchoring

Create anchors for ongoing use:

- Daily state management anchor
- Challenge response anchor
- Narrative resilience anchor

#### Step 6.3: Practice Protocol

Establish daily practice:

- Morning: Access resourceful narrative states
- Throughout day: Notice and adjust narratives
- Evening: Review and integrate day's narratives

---

## Core Techniques

### Technique 1: The Narrative Anchor Point

**Purpose**: Create a stable, reliable access point to your core identity narrative.

**Process**:

1. Identify your most empowering life narrative—a story about yourself that makes you feel capable, worthy, and confident.
2. Recall this narrative fully. Step into it. See what you saw, hear what you heard, feel what you felt.
3. As the positive feelings reach their peak, create an anchor by pressing your thumb and finger together, saying a word internally, or making a specific gesture.
4. Break state by thinking of something neutral.
5. Test the anchor. If it brings back the feelings, it's working.
6. Stack the anchor by recalling other empowering narratives and firing the same anchor at their peaks.

**Application**: Use this anchor whenever you need to access your resourceful identity state.

### Technique 2: The Submodality Shift

**Purpose**: Transform the emotional impact of a narrative by changing how it's represented internally.

**Process**:

1. Identify a narrative that creates unwanted feelings.
2. Access the narrative and notice its submodalities:
   - How bright is the image?
   - How close is it?
   - Where is it located in your visual field?
   - What do you hear internally?
   - Where do you feel sensations in your body?
3. Now think of a similar narrative that has a positive feeling. Notice its submodalities.
4. Gradually shift the submodalities of the first narrative to match the second:
   - If the negative is close and bright, make it further and dimmer
   - If the positive is centered and colorful, move the negative there
5. Notice how the feeling changes as you shift the representation.

**Application**: Use for any narrative that creates excessive negative emotion.

### Technique 3: The Timeline Rewrite

**Purpose**: Reorganize your life narrative along temporal lines to create springboard effects.

**Process**:

1. Close your eyes and imagine your timeline—the line along which your past, present, and future are organized.
2. Float up above your timeline, giving yourself a meta-perspective.
3. Float back along your timeline to a challenging narrative event.
4. Staying above it, notice what resources would have helped your past self.
5. Send those resources down to your past self. Watch them receive and use the resources.
6. Notice how the narrative changes from this new perspective.
7. Float forward along your timeline, noticing how subsequent events are affected by the change.
8. Return to now, bringing the new understanding with you.

**Application**: Use for narratives that feel "stuck" or continue to impact present functioning.

### Technique 4: The State Chain

**Purpose**: Create a pathway from an unwanted narrative state to a desired narrative state.

**Process**:

1. Identify the unwanted narrative state (e.g., "failure" narrative → defeated state).
2. Identify the desired narrative state (e.g., "learning" narrative → curious state).
3. Map intermediate states (e.g., defeated → accepting → reflective → curious).
4. Anchor each state on a different finger or knuckle.
5. Practice firing the anchors in sequence, moving from unwanted to desired state.
6. Eventually collapse the first and last anchors together.

**Application**: Use when there's too much distance between current and desired narrative states.

### Technique 5: Trance Narrative Reprocessing

**Purpose**: Use trance to allow deep, unconscious narrative transformation.

**Process**:

1. Enter a comfortable trance state through progressive relaxation.
2. Once relaxed, fire your narrative anchor or simply remember the narrative you wish to transform.
3. In trance, ask your unconscious mind: "What is it that I need to understand about this narrative?"
4. Allow images, feelings, or insights to arise without forcing.
5. Ask: "How might this narrative serve my growth?"
6. Allow the narrative to transform as your unconscious offers new perspectives.
7. When ready, suggest to yourself that the new understanding will integrate fully.
8. Return to normal waking state, bringing the transformed narrative with you.

**Application**: Use for deep, resistant narratives that don't respond to conscious intervention.

---

## Exercises

### Exercise 1: Life Story State Map

**Duration**: 45-60 minutes
**Materials**: Journal, colored pens

**Instructions**:

1. Draw your life as a timeline from birth to present.
2. Mark the major chapters (childhood, adolescence, etc.).
3. On the timeline, mark:
   - High points (peaks) with upward arrows
   - Low points (nadirs) with downward arrows
   - Turning points with stars
4. For each marked point, note:
   - The story in 1-2 sentences
   - The emotional state associated (use color coding)
   - The intensity (1-10)
5. Look for patterns:
   - Do your high points share emotional qualities?
   - What states dominate your low points?
   - What happens at turning points?

**Reflection Questions**:

- Which narrative states do you have easy access to?
- Which would benefit from transformation?
- What resources would help with the challenging narratives?

### Exercise 2: Anchor Installation Practice

**Duration**: 30 minutes
**Materials**: Quiet space

**Instructions**:

1. Choose three empowering life narratives.
2. For each:
   a. Recall it fully, stepping into the experience
   b. Notice the peak of the emotional state
   c. Apply anchor (same anchor for all three)
   d. Break state (think of something neutral)
3. After stacking all three, test the anchor.
4. Practice firing the anchor 10 times throughout the day.
5. Notice how reliably it accesses the resourceful state.

**Reflection Questions**:

- How quickly does the anchor fire?
- What variations in intensity do you notice?
- How might you use this anchor in daily life?

### Exercise 3: Submodality Discovery

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:

1. Think of a positive life narrative.
2. Record its submodalities:
   - Visual: brightness, color/b&w, size, distance, location, focus, still/moving, associated/dissociated
   - Auditory: volume, pitch, tempo, location, your voice/other
   - Kinesthetic: intensity, location in body, temperature, texture
3. Think of a challenging life narrative.
4. Record its submodalities using the same categories.
5. Compare the two lists.
6. Note which submodalities are most different.

**Reflection Questions**:

- What are the key differences between positive and challenging narratives?
- Which submodalities seem most connected to emotional impact?
- What would happen if you shifted the challenging narrative's submodalities toward the positive?

### Exercise 4: Timeline Float Practice

**Duration**: 20 minutes
**Materials**: Quiet space, comfortable seating

**Instructions**:

1. Close your eyes and take several deep breaths.
2. Imagine floating up out of your body.
3. From above, notice your timeline stretching before you.
4. Float higher until you can see past and future.
5. Simply observe. Notice how your life narratives are organized.
6. Practice floating forward and backward along the timeline.
7. Return to present and float back down into your body.
8. Open your eyes.

**Reflection Questions**:

- How is your timeline organized (in front, to the side, through you)?
- What did you notice about past, present, and future from above?
- How might this perspective help with narrative work?

### Exercise 5: Daily Narrative State Practice

**Duration**: 5-10 minutes daily
**Materials**: None

**Morning Practice**:

1. Upon waking, fire your resourceful narrative anchor.
2. Imagine the day ahead from this resourceful state.
3. Set intention for how you want to narrate today's events.

**Evening Practice**:

1. Review the day's events.
2. Notice what narrative you've been telling about them.
3. If needed, reframe challenging events with redemptive perspective.
4. Fire your resourceful anchor as you drift to sleep.

---

## Case Examples

### Case 1: Sarah's Career Narrative

**Background**: Sarah, 38, carried a narrative of "not being taken seriously" at work. This contamination narrative led to a state of defensiveness that actually made her harder to take seriously.

**Intervention**:

1. Identified the core narrative and associated state
2. Created an anchor for the "not taken seriously" state
3. Built a stronger anchor from times she WAS taken seriously
4. Collapsed the anchors
5. Used timeline work to find the origin of the narrative
6. Added resources to past self
7. Installed new narrative: "I earn respect through my contributions"

**Outcome**: Sarah reported feeling more relaxed at work, which paradoxically led to being taken more seriously.

### Case 2: Michael's Relationship Narrative

**Background**: Michael, 45, had a recurring narrative of "relationships always end badly" (regressive narrative). Each new relationship was shadowed by this expectation.

**Intervention**:

1. Mapped the timeline of relationship narratives
2. Identified submodality patterns (endings were close, bright, loud)
3. Shifted submodalities of endings (further, dimmer, quieter)
4. Used timeline to connect each "ending" to new beginnings
5. Created future-paced narrative of healthy relationship

**Outcome**: Michael was able to enter a new relationship without the shadow of inevitable failure.

---

## Integration with Other Approaches

Narrative Anchoring provides a foundation that supports the other two approaches:

- **For Dialogical Transformation**: Use anchoring to stabilize each voice before integration work
- **For Generative Storytelling**: Use anchoring to access states from which to construct new narratives

Many practitioners find that starting with Narrative Anchoring creates the stability needed for deeper identity work.

---

## Summary

Narrative Anchoring offers a powerful, embodied approach to identity transformation. By working with the states that our stories create, we can transform the stories themselves. The key techniques—anchoring, submodality work, timeline therapy, and trance—provide precise tools for accessing and modifying our deepest narratives.

The approach is particularly valuable for:

- People who are kinesthetically oriented
- Those who need state stability before narrative change
- Working with emotionally charged narratives
- Creating reliable access to resourceful identity states

With practice, Narrative Anchoring becomes second nature—a way of being in relationship with your own life story that supports continuous growth and transformation.

================================================================================

# File: book/chapters/approach-2-dialogical-transformation.md

================================================================================

# Approach 2: Dialogical Transformation

## Multi-Voice Integration

---

## Overview

Dialogical Transformation recognizes that identity is not singular but multiple—a dynamic conversation between different "voices" or "I-positions" within the self. This approach uses NLP parts integration, reframing, and trance work to harmonize these voices into a coherent, unified narrative identity.

---

## Theoretical Foundation

### The Dialogical Self

The self is not a unified entity but a "society of mind"—multiple voices engaged in ongoing dialogue. These voices include:

- **Internal characters**: The critic, the child, the achiever, the rebel
- **Introjected others**: Parent voices, cultural voices, authority figures
- **Historical selves**: Past versions of yourself at different ages
- **Aspirational selves**: Future versions you imagine becoming
- **Shadow aspects**: Disowned or rejected parts of self

These voices can be in harmony or conflict. When they conflict, we experience inner turmoil, indecision, and a fragmented sense of identity.

### The Personality Web

Research by Peter Raggatt shows that identity positions can be mapped as a web of attachments—positive and negative, internal and external. This web reveals:

- Which voices are central and which are peripheral
- Which voices support and which undermine
- Where conflicts exist in the system
- What integration work is needed

### Parts Integration

NLP provides powerful techniques for working with parts:

- **Visual Squash**: Integrating polarized parts through their common intentions
- **Six-Step Reframe**: Finding positive intentions and new behaviors
- **Parts Negotiation**: Facilitating dialogue between conflicting parts

### Coherence and Meaning

The goal is not to eliminate voices but to integrate them—creating a narrative that honors all aspects of self while maintaining coherence. This integration creates:

- Greater flexibility (access to all resources)
- Reduced internal conflict (energy freed for growth)
- Clearer identity (knowing who you are)
- More authentic self-expression

---

## Core Methodology

### Phase 1: Voice Discovery

**Objective**: Identify and map all significant narrative voices.

#### Step 1.1: Voice Inventory

Use reflection and inquiry to identify voices:

**Prompt Questions**:

- "What are the different sides of yourself?"
- "Who do you become in different situations?"
- "What voices do you hear in your internal dialogue?"
- "Who taught you how to see yourself?"
- "What historical versions of yourself still speak?"

#### Step 1.2: Voice Characterization

For each voice, document:

- **Name**: What would you call this voice?
- **Character**: What is this voice like?
- **Origin**: Where did this voice come from?
- **Message**: What does this voice typically say?
- **Intention**: What is this voice trying to accomplish?
- **Context**: When is this voice most active?
- **State**: What emotional state does this voice create?

#### Step 1.3: Voice Mapping

Create a visual map of your voices:

1. Draw a large circle (the self)
2. Place each voice within the circle
3. Position based on:
   - Central vs. peripheral (importance)
   - Left vs. right (whatever feels natural)
   - Size indicates strength/volume
4. Draw lines showing relationships:
   - Solid lines = support/alliance
   - Dashed lines = neutral
   - Jagged lines = conflict/opposition

### Phase 2: Conflict Identification

**Objective**: Identify where narrative voices are in conflict.

#### Step 2.1: Conflict Mapping

On your voice map, identify:

- Which voices argue with each other?
- Which voices undermine others?
- Which voices are in direct opposition?
- Which voices ignore or dismiss others?

#### Step 2.2: Conflict Characterization

For each major conflict:

- **Voice A**: Which voice?
- **Voice B**: Which voice?
- **The Argument**: What are they arguing about?
- **Impact**: How does this conflict affect your life?
- **History**: How long has this conflict been active?

#### Step 2.3: Conflict Prioritization

Rank conflicts by:

- Impact on daily functioning
- Energy drain
- Connection to current life challenges
- Readiness to address

### Phase 3: Intention Discovery

**Objective**: Uncover the positive intentions behind each voice.

#### Step 3.1: Meta-Model Questioning

For each voice in conflict, ask:

- "What are you trying to accomplish?"
- "What do you want for me?"
- "What are you trying to protect me from?"
- "If you had what you wanted, what would that give me?"

Continue asking "What would that give you?" until reaching core positive intentions.

#### Step 3.2: Common Ground Discovery

For conflicting voices, find where their positive intentions overlap:

- Both may want safety
- Both may want success
- Both may want love
- Both may want integrity

This common ground becomes the foundation for integration.

#### Step 3.3: Appreciation Practice

Acknowledge each voice's positive intention:

- Thank Voice A for its protection/contribution
- Thank Voice B for its protection/contribution
- Recognize that both have been trying to help

### Phase 4: Parts Integration

**Objective**: Integrate conflicting voices into unified expression.

#### Step 4.1: Visual Squash Technique

**Full Process**:

1. **Separate the Parts**

   - Extend both hands in front of you, palms up
   - Place one conflicting voice/part in each hand
   - Get a visual representation of each part

2. **Discover Intentions**

   - Ask Part A: "What do you want?"
   - Ask: "If you had that, what would that give you?"
   - Continue until reaching core positive intention
   - Repeat with Part B

3. **Find Common Ground**

   - Notice where the positive intentions converge
   - Both parts usually want something similar at the deepest level
   - Acknowledge this shared intention

4. **Create Integration**

   - Ask both parts if they would be willing to integrate to better achieve their shared intention
   - If yes, slowly bring hands together
   - Allow the parts to merge and integrate
   - Bring integrated part to heart/center

5. **Future Pace**
   - Imagine future situations where the old conflict would have occurred
   - Notice how the integrated part responds
   - Make any necessary adjustments

#### Step 4.2: Voice Dialogue

**Full Process**:

1. **Set Up**

   - Use two chairs or two positions
   - One position for each voice in conflict

2. **Give Each Voice Expression**

   - Sit in Position A, fully become Voice A
   - Speak as Voice A: concerns, wants, complaints
   - Move to Position B, fully become Voice B
   - Speak as Voice B: concerns, wants, complaints

3. **Facilitate Dialogue**

   - Continue switching positions
   - Have the voices speak TO each other
   - Facilitate understanding and negotiation

4. **Find Resolution**

   - What would Voice A need to feel satisfied?
   - What would Voice B need to feel satisfied?
   - What agreement can they reach?

5. **Integrate**
   - Create a third position that integrates both voices
   - Sit in that position and experience the integration

#### Step 4.3: Six-Step Reframe

**For Problematic Voices**:

1. Identify the problematic behavior/voice
2. Establish communication with the part responsible
3. Discover the positive intention
4. Generate alternative ways to achieve the intention
5. Have the part choose new behaviors
6. Ecology check with other parts

### Phase 5: Narrative Reconstruction

**Objective**: Create a unified narrative that honors all voices.

#### Step 5.1: Integration Narrative

Write a narrative that:

- Acknowledges all significant voices
- Honors their contributions
- Explains their integration
- Points toward unified future

**Template**:
"I am someone who [integrated quality]. Part of me [Voice A contribution], while another part [Voice B contribution]. Together, these aspects create [integrated outcome]."

#### Step 5.2: Meta-Model Strengthening

Use Meta-Model questions to clarify and strengthen the narrative:

- Deletions: "What specifically?"
- Generalizations: "Always? Never?"
- Distortions: "How do you know?"

#### Step 5.3: Reframing

Reframe any remaining conflict narratives:

- **Context Reframe**: "In what context would this be valuable?"
- **Meaning Reframe**: "What else could this mean?"
- **Content Reframe**: "What's the positive in this?"

### Phase 6: Trance Integration

**Objective**: Use trance to deepen voice integration.

#### Step 6.1: Trance Induction

Enter a comfortable trance state.

#### Step 6.2: Internal Conference

In trance, imagine:

- A meeting room within yourself
- All your voices/parts gathering
- A wise self facilitating the meeting
- Voices expressing their needs
- Finding unified purpose

#### Step 6.3: Unified Voice Installation

While in trance:

- Imagine all voices merging into unified voice
- Experience the integration in your body
- Notice what the unified voice sounds like
- Allow this integration to become permanent

### Phase 7: Coherence Maintenance

**Objective**: Maintain integrated, coherent identity.

#### Step 7.1: Daily Voice Check-In

Each day:

- Notice which voices are active
- Check for emerging conflicts
- Address before they escalate

#### Step 7.2: Integration Ritual

Weekly practice:

- Return to voice map
- Notice any changes
- Re-integrate as needed
- Celebrate growing coherence

#### Step 7.3: Narrative Journaling

Regular journaling from integrated perspective:

- Write from "I" (unified voice)
- Practice coherent self-expression
- Notice when fragmentation occurs

---

## Core Techniques

### Technique 1: The Voice Map

**Purpose**: Create visual representation of your identity voices.

**Process**:

1. Take a large piece of paper and draw a circle representing your Self.
2. Spend 15 minutes brainstorming all the "voices" or "parts" within you.
3. Give each voice a name and a brief description.
4. Place each voice in the circle based on how central or peripheral it feels.
5. Draw lines showing relationships between voices (support, conflict, neutral).
6. Note which voices are loudest, which are quietest.
7. Identify the top 3 conflicts in your voice system.

**Application**: Use as foundation for all dialogical work.

### Technique 2: The Positive Intention Chain

**Purpose**: Discover the positive intention behind any voice, even seemingly negative ones.

**Process**:

1. Identify a voice that causes problems or discomfort.
2. Ask: "What is this voice trying to accomplish?"
3. Whatever the answer, ask: "And if you had that, what would that give you?"
4. Continue asking "And what would that give you?" until you reach a core positive value.
5. Acknowledge: "So ultimately, you're trying to [core positive value]."
6. Thank the voice for its positive intention.

**Example**:

- Voice: Inner Critic
- "What do you want?" → "I want you to be better."
- "What would that give you?" → "Success."
- "What would that give you?" → "Recognition."
- "What would that give you?" → "Love and acceptance."
- Core intention: Love and acceptance

**Application**: Use before any integration work to establish appreciation for all voices.

### Technique 3: The Visual Squash

**Purpose**: Integrate two conflicting parts into unified expression.

**Process**:

1. Extend hands, palms up. Place one part in each hand.
2. Get a clear representation of each part (image, symbol, feeling).
3. Ask each part for its positive intention, going up the intention chain.
4. Find where the intentions converge at a higher level.
5. Ask both parts if they'd be willing to integrate to better achieve their shared intention.
6. Slowly bring hands together as parts merge.
7. Bring the integrated part to your heart/center.
8. Notice how you feel.
9. Future pace by imagining situations where the conflict would have occurred.

**Application**: Use for clear binary conflicts between two parts.

### Technique 4: The Meta-Model Narrative Clean-Up

**Purpose**: Clarify and strengthen identity narratives using precision questions.

**Process**:
Listen to or write your identity narrative, then challenge:

**Deletions**:

- "I can't do that." → "Can't? What specifically stops you?"
- "They don't respect me." → "Who specifically doesn't respect you?"
- "Things never work out." → "What things specifically?"

**Generalizations**:

- "I always fail." → "Always? Has there ever been an exception?"
- "Nobody understands me." → "Nobody? Not one person?"
- "It's impossible." → "Impossible? What would make it possible?"

**Distortions**:

- "He makes me angry." → "How does he make you angry?"
- "I know they don't like me." → "How do you know that?"
- "If I try, I'll fail." → "How does trying necessarily lead to failing?"

**Application**: Use to clarify and strengthen any identity narrative.

### Technique 5: The Internal Conference

**Purpose**: Use trance to facilitate dialogue between all identity voices.

**Process**:

1. Enter a comfortable trance state through progressive relaxation.
2. Imagine descending into a beautiful meeting room within yourself.
3. Notice a round table with chairs for all your voices.
4. Watch as each voice takes a seat.
5. Notice a wise facilitator (your Higher Self) taking the lead.
6. Allow each voice to express its needs and concerns.
7. Watch as the facilitator helps voices understand each other.
8. Notice agreements being reached.
9. See all voices nodding in unified commitment.
10. Slowly return to normal consciousness, bringing the unity with you.

**Application**: Use for complex situations involving multiple voice conflicts.

---

## Exercises

### Exercise 1: Complete Voice Inventory

**Duration**: 60-90 minutes
**Materials**: Journal, large paper, colored pens

**Instructions**:

**Part A: Voice Discovery (30 min)**
Answer these questions in your journal:

1. What are the different "sides" of yourself?
2. Who do you become when you're:
   - At work?
   - With family?
   - With friends?
   - Alone?
   - Under stress?
3. What voices do you hear in your internal dialogue?
4. Whose voices from your past still speak within you?
5. What historical versions of yourself are still active?

**Part B: Voice Characterization (30 min)**
For each voice identified, complete this profile:

- Name:
- Character description:
- Origin (where did this voice come from?):
- Typical messages:
- Positive intention:
- When most active:
- Emotional state created:
- Relationship to other voices:

**Part C: Voice Map (30 min)**
Create a visual map on large paper:

1. Draw yourself at center
2. Place all voices around/within
3. Show relationships with lines
4. Identify the key conflicts

**Reflection Questions**:

- Which voices dominate your narrative?
- Which voices are marginalized?
- Where are the major conflicts?
- What integration would create the most impact?

### Exercise 2: Conflict Dialogue Practice

**Duration**: 45 minutes
**Materials**: Two chairs or cushions

**Instructions**:

1. Choose one conflict from your voice map.
2. Set up two positions (chairs, cushions, or just spaces on the floor).
3. Sit in Position A. Fully become Voice A. Speak as Voice A for 2-3 minutes.
4. Move to Position B. Fully become Voice B. Speak as Voice B for 2-3 minutes.
5. Return to Position A. Have Voice A respond to what Voice B said.
6. Continue the dialogue, switching positions.
7. After 10-15 minutes, notice:
   - What does Voice A really need?
   - What does Voice B really need?
   - Is there any common ground?
8. Create a third position—the integration. Sit there and speak as the integrated voice.

**Reflection Questions**:

- What surprised you in the dialogue?
- What do both voices share in common?
- What would resolution look like?

### Exercise 3: Weekly Voice Integration Ritual

**Duration**: 20-30 minutes weekly
**Materials**: Voice map, journal

**Instructions**:
Each week, complete this ritual:

1. **Review** (5 min):

   - Look at your voice map
   - Notice what's changed this week
   - Identify any new voices or conflicts

2. **Integration Work** (15 min):

   - Choose one conflict to address
   - Use Visual Squash or Voice Dialogue
   - Notice the integration

3. **Update** (5 min):

   - Update your voice map
   - Note any changes in relationships
   - Celebrate progress

4. **Set Intention** (5 min):
   - What voice work will you focus on this week?
   - What will you notice and practice?

### Exercise 4: The Unified Narrative Writing

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:
Write a narrative that integrates your primary voices:

1. Begin with: "I am someone who..."
2. Include each major voice's contribution:
   - "Part of me [Voice A contribution]..."
   - "Another part of me [Voice B contribution]..."
3. Show how they integrate:
   - "Together, these create..."
   - "The integration allows me to..."
4. Point to the future:
   - "Going forward, I will..."
   - "This unified self enables me to..."

**Example**:
"I am someone who brings together ambition and compassion. Part of me drives hard toward success and achievement, pushing me to excel. Another part of me cares deeply about others and values connection above accomplishment. Together, these create a leader who achieves while nurturing—someone who succeeds in ways that lift others up. Going forward, I will honor both these aspects, letting my ambition be guided by my heart."

**Reflection Questions**:

- Does this narrative feel true?
- Does it honor all your voices?
- What's missing?

### Exercise 5: Daily Voice Check-In

**Duration**: 5 minutes daily
**Materials**: None

**Instructions**:
Each morning, check in with your voice system:

1. **Notice**: Which voices are present right now?
2. **Assess**: Are they in harmony or conflict?
3. **Appreciate**: Thank each voice for its intention.
4. **Integrate**: If conflict exists, briefly find common ground.
5. **Set Intention**: Which unified self will you embody today?

---

## Case Examples

### Case 1: The Perfectionist and the Free Spirit

**Background**: Elena, 32, experienced constant conflict between her "Perfectionist" voice (demanding excellence, never satisfied) and her "Free Spirit" voice (wanting creativity, spontaneity, joy).

**Intervention**:

1. Mapped both voices, including origins (Perfectionist from demanding father; Free Spirit from artist grandmother)
2. Used Positive Intention Chain:
   - Perfectionist: wanted excellence → success → respect → love
   - Free Spirit: wanted freedom → joy → authenticity → love
3. Found common ground: both wanted love and self-acceptance
4. Used Visual Squash to integrate into "Creative Excellence"—pursuing high standards joyfully
5. Created unified narrative: "I am someone who creates beautiful work with joy and care."

**Outcome**: Elena reported less internal conflict, more creative output, and more enjoyment in her work.

### Case 2: The Caretaker and the Self-Advocate

**Background**: James, 48, couldn't advocate for his own needs. His "Caretaker" voice (focused on others) constantly overrode his "Self-Advocate" voice (focused on his own needs).

**Intervention**:

1. Voice Dialogue revealed:
   - Caretaker: "If you focus on yourself, you're selfish"
   - Self-Advocate: "If you keep ignoring yourself, you'll burn out"
2. Both had valid points—both were trying to protect James
3. Meta-Model work revealed overgeneralizations in both perspectives
4. Integration: "I can care for myself AND others—in fact, caring for myself enables better care for others"
5. Created unified narrative emphasizing sustainable giving

**Outcome**: James was able to set boundaries while maintaining his caring nature.

---

## Integration with Other Approaches

Dialogical Transformation works powerfully with:

- **Narrative Anchoring**: Use anchoring to stabilize each voice before integration
- **Generative Storytelling**: Use the unified narrative as foundation for expanded story construction

The clarity gained from voice work enables more effective work with the other approaches.

---

## Summary

Dialogical Transformation provides a pathway from internal conflict to coherent identity. By mapping, understanding, and integrating the multiple voices of the self, we create a unified narrative identity that honors all aspects of who we are.

Key benefits:

- Reduced internal conflict
- Greater access to resources
- Clearer sense of identity
- More authentic self-expression
- Increased flexibility and adaptability

The approach is particularly valuable for:

- Those experiencing significant internal conflict
- People with strong self-critical voices
- Those who feel "fragmented" or "pulled in different directions"
- Anyone seeking greater self-acceptance and integration

With ongoing practice, the dialogical self becomes a harmonious chorus rather than a cacophony—multiple voices singing in unity rather than shouting over each other.

================================================================================

# File: book/chapters/approach-3-generative-storytelling.md

================================================================================

# Approach 3: Generative Storytelling

## Active Narrative Creation

---

## Overview

Generative Storytelling is the art of actively constructing empowering life narratives using NLP language patterns and story construction techniques. This approach recognizes that we are not passive recipients of our life stories—we are their authors. By mastering the craft of narrative creation, we can write ourselves into more powerful, meaningful, and fulfilling identities.

---

## Theoretical Foundation

### The Narrative Construction of Self

Identity is not discovered—it is constructed through the stories we tell. Every time we narrate an experience, we are actively creating our identity. The words we choose, the meanings we assign, the connections we make—all of these authoring choices shape who we become.

**Key Insight**: If identity is constructed through narrative, then by becoming better storytellers, we become better self-creators.

### Storytelling Modes

Research identifies two primary modes of storytelling:

**Dramatic Mode**:

- Emphasis on action and emotion
- Vivid, present-tense narration
- Invites the listener into the experience
- Creates emotional impact
- Best for: Creating powerful experiences

**Reflective Mode**:

- Emphasis on meaning and interpretation
- More analytical and distanced
- Extracts lessons and insights
- Creates understanding
- Best for: Making sense of experiences

Skilled identity construction involves moving fluidly between these modes—using dramatic mode to create powerful experiences and reflective mode to extract meaning from them.

### The Milton Model: Language of Influence

Milton Erickson's hypnotic language patterns provide powerful tools for narrative construction:

- **Artfully Vague Language**: Opens space for personal meaning
- **Presuppositions**: Embed empowering beliefs
- **Embedded Commands**: Guide unconscious processing
- **Metaphor**: Carries meaning at multiple levels
- **Quotes**: Delivers messages indirectly

By incorporating these patterns into our self-narratives, we create stories that influence our own unconscious toward growth and transformation.

### Meta-Programs: Narrative Patterns

Meta-programs are the unconscious filters through which we process experience:

- **Toward/Away**: Motivated by what we want or what we want to avoid
- **Internal/External**: Validate through self or others
- **Options/Procedures**: Seek possibilities or follow established paths
- **Big Picture/Detail**: Focus on whole or parts
- **Past/Present/Future**: Temporal orientation

Understanding our meta-programs helps us recognize our natural narrative patterns and consciously expand our range.

---

## Core Methodology

### Phase 1: Narrative Assessment

**Objective**: Understand your current narrative patterns and tendencies.

#### Step 1.1: Story Mode Assessment

Analyze how you typically tell stories:

- Do you favor dramatic or reflective mode?
- Can you switch between modes easily?
- What triggers each mode?

#### Step 1.2: Meta-Program Mapping

Identify your dominant patterns:

- Are you more toward or away motivated?
- Do you validate internally or externally?
- Do you prefer options or procedures?
- Are you big picture or detail oriented?
- Do you orient to past, present, or future?

#### Step 1.3: Narrative Type Identification

What types of narratives do you typically tell?

- Redemptive (bad → good)
- Contamination (good → bad)
- Progressive (upward)
- Regressive (downward)
- Stable (consistent)

#### Step 1.4: Language Pattern Analysis

How do you typically use language?

- Positive or negative framing?
- Active or passive voice?
- Specific or vague?
- Empowering or limiting presuppositions?

### Phase 2: Pattern Expansion

**Objective**: Expand your narrative capabilities.

#### Step 2.1: Mode Flexibility Training

Practice switching between modes:

**Exercise**:

1. Choose a recent experience
2. Tell it in dramatic mode (vivid, present tense, emotional)
3. Tell it in reflective mode (analytical, past tense, meaningful)
4. Notice the different impacts

#### Step 2.2: Meta-Program Flexibility

Practice operating from non-dominant patterns:

**If Toward-motivated**:

- Practice telling stories about what you're moving away from
- "I used to [limitation], and I've left that behind"

**If Away-motivated**:

- Practice telling stories about what you're moving toward
- "I'm creating [desired state]"

**Continue for all meta-programs**

#### Step 2.3: Narrative Type Expansion

Practice creating different narrative types:

- Take a neutral event and tell it as redemptive
- Take the same event and tell it as progressive
- Notice how the meaning shifts

### Phase 3: Language Enhancement

**Objective**: Incorporate Milton Model patterns into self-narrative.

#### Step 3.1: Artfully Vague Language

Use vague language to open possibility:

**Before**: "I need to become more confident."
**After**: "I'm discovering new ways of being in the world that allow a certain kind of strength to emerge."

**Technique**:

- Use nominalizations (process → thing words)
- Delete specific referents
- Allow multiple interpretations

#### Step 3.2: Presuppositions

Embed empowering beliefs:

**Temporal Presuppositions**:

- "Before you realize how much you've grown..."
- "As you continue developing..."
- "After this transformation completes..."

**Awareness Presuppositions**:

- "Are you aware of how capable you've become?"
- "Have you noticed the changes already happening?"

**Ordinal Presuppositions**:

- "What's the first thing you'll notice changing?"
- "Another way you're growing is..."

#### Step 3.3: Embedded Commands

Weave commands into narratives:

**Technique**: Use emphasis (italics, pauses, shifts in tone) to mark commands:

"And as you _relax into this new understanding_, you might find yourself _feeling more confident_ than you expected."

#### Step 3.4: Metaphor and Symbol

Use metaphor to carry meaning:

"My life is like a river, sometimes rushing through rapids, sometimes flowing gently through meadows, but always moving toward the sea."

Develop personal symbols that carry your narrative themes.

### Phase 4: Redemptive Construction

**Objective**: Master the art of constructing redemptive narratives.

#### Step 4.1: The Redemption Framework

Every redemptive narrative follows a pattern:

1. **The Situation**: What happened (negative)
2. **The Impact**: How it affected you
3. **The Turning**: What shifted
4. **The Growth**: What you gained
5. **The Integration**: How this shapes who you are now

#### Step 4.2: Finding Redemption

For any difficult experience:

- What did this make possible that wouldn't have been possible otherwise?
- What strength did this develop?
- What understanding did this provide?
- How has this shaped you positively?

#### Step 4.3: Constructing the Narrative

Use this template:

"There was a time when [difficult experience]. In the midst of that, I felt [impact]. But through that experience, I [turning point], and I came to [growth]. Now, because of that, I am [integration]."

**Example**:
"There was a time when I lost my job unexpectedly. In the midst of that, I felt lost and scared. But through that experience, I discovered what really mattered to me, and I came to realize that security comes from within. Now, because of that, I am someone who follows my purpose rather than just a paycheck."

### Phase 5: Future Narrative Creation

**Objective**: Create compelling future identity narratives.

#### Step 5.1: Future Self Clarification

Define your future self:

- Who do you want to become?
- What qualities do you want to embody?
- What will you be doing?
- How will you be being?

#### Step 5.2: Future Narrative Construction

Write the story of your future self:

- Write in present tense (as if it's happening now)
- Include rich sensory details
- Describe actions, feelings, relationships
- Make it compelling and attractive

#### Step 5.3: Future Pacing Language

Use language that connects present to future:

"I'm becoming someone who..."
"Each day, I move closer to..."
"The person I'm growing into..."
"Already, I notice the beginnings of..."

#### Step 5.4: Bridge Building

Create narrative bridges from present to future:

- What are the stepping stones?
- What story connects now to then?
- What transformations occur along the way?

### Phase 6: Narrative Installation

**Objective**: Install new narratives so they become automatic.

#### Step 6.1: Repetition

Tell the new narrative repeatedly:

- Write it multiple times
- Say it aloud daily
- Share it with others

#### Step 6.2: Emotional Anchoring

As you tell the narrative, anchor the emotional state:

- Enter the feelings of the narrative
- Create physical anchors at peak moments
- Fire anchors while telling the story

#### Step 6.3: Trance Installation

Use trance to deepen installation:

- Enter trance
- Tell yourself the narrative
- Let it sink deep into unconscious
- Future pace its integration

#### Step 6.4: Behavioral Alignment

Act in alignment with the new narrative:

- Make choices consistent with the story
- Notice when you're living the narrative
- Adjust behavior when you notice inconsistency

### Phase 7: Ongoing Authorship

**Objective**: Maintain ongoing creative control of your narrative identity.

#### Step 7.1: Daily Narrative Practice

Each day:

- Notice the stories you're telling
- Choose consciously how to frame experiences
- Practice redemptive interpretation
- Connect experiences to larger narrative

#### Step 7.2: Weekly Narrative Review

Each week:

- Review major experiences
- Craft their narratives intentionally
- Connect to ongoing identity themes
- Adjust and refine

#### Step 7.3: Life Chapter Development

Periodically:

- Step back and see larger narrative arc
- Define current chapter title and theme
- Plan the next chapter
- Maintain long-term narrative coherence

---

## Core Techniques

### Technique 1: The Mode Switch

**Purpose**: Develop flexibility in moving between dramatic and reflective storytelling modes.

**Process**:

1. Choose an experience from your life.
2. Tell the story in **Dramatic Mode**:
   - Use present tense: "I'm walking into the room..."
   - Include sensory details: sights, sounds, feelings
   - Stay in the action: what's happening moment by moment
   - Create emotional impact
3. Tell the same story in **Reflective Mode**:
   - Use past tense: "When I walked into that room..."
   - Extract meaning: "What I learned from that is..."
   - Analyze patterns: "This was part of a larger theme..."
   - Connect to identity: "This shows that I am..."
4. Notice how each mode creates different effects.
5. Practice switching between modes within the same story.

**Application**: Use dramatic mode to re-experience empowering moments; use reflective mode to extract meaning from difficult moments.

### Technique 2: The Redemptive Rewrite

**Purpose**: Transform any experience into a redemptive narrative.

**Process**:

1. Identify an experience you've been telling as contamination (good → bad) or simply negative.
2. Ask yourself:
   - What became possible because of this?
   - What did I learn that I couldn't have learned any other way?
   - What strength did this develop in me?
   - How has this shaped me positively?
3. Construct a new narrative using the redemption framework:
   - Situation: What happened
   - Impact: How it affected you
   - Turning: What shifted
   - Growth: What you gained
   - Integration: Who you are now because of it
4. Write the full narrative in both modes.
5. Practice telling the redemptive version until it feels natural.

**Application**: Use for any experiences that are keeping you stuck in negative narrative patterns.

### Technique 3: The Milton Model Enhancement

**Purpose**: Upgrade your self-narrative using hypnotic language patterns.

**Process**:

1. Write your current identity narrative in plain language.
2. Enhance with Milton Model patterns:

**Add Presuppositions**:

- Before: "I want to be confident."
- After: "As my confidence continues to develop..."

**Add Embedded Commands**:

- Before: "I hope I can relax more."
- After: "I find myself beginning to _relax now_ in ways I hadn't expected."

**Add Artful Vagueness**:

- Before: "I will be successful at work."
- After: "Something about how I'm developing brings a certain kind of success that matters."

3. Read the enhanced narrative aloud.
4. Notice how it affects you differently than the plain version.
5. Use the enhanced version in your daily practice.

**Application**: Use to make your self-narratives more compelling and influential to your own unconscious.

### Technique 4: The Future Self Story

**Purpose**: Create a compelling narrative of your future identity.

**Process**:

1. Close your eyes and imagine yourself 5 years from now, having become who you want to be.
2. Step into that future self. See through their eyes, feel their feelings.
3. Notice:
   - What are you doing?
   - How do you feel in your body?
   - What relationships do you have?
   - What have you accomplished?
   - What kind of person have you become?
4. From that future perspective, write "A Day in My Life"—a present-tense narrative of an ordinary day as that future self.
5. Include rich sensory details, emotions, interactions.
6. Read this narrative daily, stepping fully into the experience.

**Application**: Use to clarify your direction and create attraction toward your desired future.

### Technique 5: The Story Spine

**Purpose**: Create well-structured identity narratives using story structure.

**Process**:
Use this story spine template:

"Once upon a time, I was [starting identity].
Every day, I [habitual pattern].
But one day, [inciting incident].
Because of that, [consequence].
Because of that, [further consequence].
Until finally, [climax/transformation].
And ever since then, I am [new identity].
And the moral is [meaning/lesson]."

**Example**:
"Once upon a time, I was someone who never took risks.
Every day, I played it safe and stayed in my comfort zone.
But one day, I was faced with an opportunity that terrified me.
Because of that, I had to confront my fear of failure.
Because of that, I discovered that failure wasn't as catastrophic as I'd imagined.
Until finally, I took the leap and succeeded beyond my expectations.
And ever since then, I am someone who leans into fear rather than away from it.
And the moral is that growth happens on the other side of fear."

**Application**: Use to structure any identity narrative with powerful story arc.

---

## Exercises

### Exercise 1: Narrative Style Assessment

**Duration**: 30 minutes
**Materials**: Journal, recording device

**Instructions**:

**Part A: Story Recording**

1. Choose three significant life experiences.
2. Record yourself telling each story naturally (3-5 minutes each).

**Part B: Analysis**
Listen to your recordings and note:

1. Mode dominance: Do you favor dramatic or reflective mode?
2. Tense usage: Do you use past, present, or mixed tense?
3. Emotional expression: How much emotion comes through?
4. Meaning-making: How much do you interpret and analyze?
5. Language patterns: Any recurring phrases or structures?
6. Narrative type: Are your stories redemptive, progressive, stable, or other?

**Part C: Reflection**

- What are your narrative strengths?
- What patterns would benefit from expansion?
- What do you want to develop?

### Exercise 2: Meta-Program Mapping

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:

For each meta-program, identify your dominant pattern:

**1. Toward/Away**

- Do you talk more about what you want or what you want to avoid?
- Write an example of each type of statement about your goals.

**2. Internal/External**

- Do you validate yourself internally or need external confirmation?
- How do you know when you've done something well?

**3. Options/Procedures**

- Do you prefer having choices or following established paths?
- How do you approach new situations?

**4. Big Picture/Detail**

- Do you focus on the overall vision or the specific steps?
- How do you typically describe your life?

**5. Past/Present/Future**

- Which time frame do you most often reference?
- Where does your attention naturally go?

**Expansion Practice**:
Write a brief narrative about your current life situation from your NON-dominant pattern for each meta-program.

### Exercise 3: The Daily Narrative Journal

**Duration**: 10-15 minutes daily
**Materials**: Journal

**Instructions**:

Each evening, complete this practice:

**1. Experience Selection**
Choose one significant experience from the day.

**2. Dual-Mode Narration**
Write the experience in dramatic mode (present tense, vivid, emotional).
Then write it in reflective mode (past tense, analytical, meaningful).

**3. Redemptive Frame**
Ask: How might this experience serve my growth?
Write a brief redemptive interpretation.

**4. Future Connection**
Ask: How does this connect to who I'm becoming?
Write a brief connection to your future self narrative.

**5. Language Enhancement**
Add one Milton Model pattern to your narrative.

### Exercise 4: The Identity Story Spine

**Duration**: 45 minutes
**Materials**: Journal

**Instructions**:

Create your life narrative using the story spine structure:

**Step 1: Identify Key Elements**

- Starting identity (who you were)
- Habitual pattern (what you did)
- Inciting incident (what changed)
- Consequences (what happened as a result)
- Climax (the transformation)
- New identity (who you are now)
- Meaning (what it all means)

**Step 2: Write the Spine**
Use the template to write your story spine.

**Step 3: Expand**
Expand each element into a paragraph, adding:

- Sensory details
- Emotional texture
- Milton Model patterns

**Step 4: Practice**
Practice telling this story aloud until it flows naturally.

### Exercise 5: Future Self Immersion

**Duration**: 30 minutes
**Materials**: Quiet space, journal

**Instructions**:

**Part A: Visualization (15 min)**

1. Close your eyes and relax.
2. Imagine traveling forward in time 5 years.
3. See your future self who has become who you want to be.
4. Step into that future self.
5. Experience a full day as that person:
   - Morning routine
   - Daily activities
   - Relationships
   - Accomplishments
   - How it feels to be you
6. Notice all the sensory details.
7. Return to present.

**Part B: Narrative Writing (15 min)**
Write "A Day in My Future Life" in present tense, as if it's happening now.

Include:

- Waking up and morning routine
- Key activities and interactions
- How you feel throughout the day
- What you notice about yourself
- How others respond to you

**Part C: Daily Practice**
Read this narrative daily, stepping fully into the experience each time.

---

## Case Examples

### Case 1: The Reluctant Leader

**Background**: David, 35, was promoted to a leadership role but kept telling a story of "I'm not a real leader—I just got lucky."

**Intervention**:

1. Assessed narrative patterns:
   - Away-motivated (focused on avoiding failure)
   - External validation dependent
   - Contamination narrative style
2. Created new narrative using redemptive frame and Milton Model:
   - "I'm someone who's discovering what leadership means to me. The journey of learning to lead is revealing strengths I didn't know I had. Each challenge shows me something new about my capacity to guide others."
3. Developed future self story of confident, authentic leadership
4. Daily practice of telling the new narrative

**Outcome**: David reported increased confidence and better leadership performance as his internal narrative shifted.

### Case 2: The Career Changer

**Background**: Maria, 42, wanted to change careers but kept telling a story of "It's too late. I've wasted years in the wrong field."

**Intervention**:

1. Assessed narrative patterns:
   - Past-oriented
   - Regressive narrative type
   - Detail-focused (stuck on specifics of "wasted time")
2. Redemptive rewrite:
   - "Every experience in my previous career has been preparation. The skills, the relationships, the lessons—all of this positions me uniquely for what's next. I'm not starting over; I'm starting from a position of rich experience."
3. Future self story of thriving in new career
4. Story spine showing the career change as the inciting incident in a progressive narrative

**Outcome**: Maria successfully transitioned careers, framing her diverse experience as an asset rather than a liability.

---

## Integration with Other Approaches

Generative Storytelling works powerfully with:

- **Narrative Anchoring**: Anchor the states created by powerful narratives
- **Dialogical Transformation**: Use storytelling to express integrated voices

The narrative skills developed here enhance all identity work.

---

## Summary

Generative Storytelling recognizes that we are the authors of our own identities. By mastering the craft of narrative—learning to use both dramatic and reflective modes, incorporating powerful language patterns, and constructing redemptive and future-oriented stories—we take active control of who we become.

Key benefits:

- Greater narrative flexibility
- More empowering self-stories
- Clearer future direction
- Better communication of identity to others
- Ongoing creative engagement with life

The approach is particularly valuable for:

- Writers and verbal processors
- Those who love language and story
- Creative individuals
- Those wanting more conscious control over identity
- Anyone transitioning or reinventing themselves

With practice, you become the master author of your own life story—crafting narratives that inspire, empower, and guide you toward the person you're becoming.

================================================================================

# File: book/exercises/complete-exercise-guide.md

================================================================================

# Complete Exercise Guide

## Practical Exercises for Narrative Identity Transformation

---

## Introduction

This guide provides a comprehensive collection of exercises for all three approaches. Each exercise is designed to be practical, accessible, and transformative. They can be done independently or as part of a structured program.

---

## Foundation Exercises

These exercises are recommended for everyone, regardless of which approach resonates most.

### Exercise F1: The Life Story Interview (Self-Administered)

**Duration**: 90-120 minutes
**Materials**: Journal, quiet space

**Instructions**:
Answer each question in writing, taking your time to fully explore each one.

**Section 1: Life Chapters**
Imagine your life as a book. What are the major chapters? Give each chapter a title and a brief description.

**Section 2: Key Scenes**
Describe each of the following in detail:

1. **High Point**: The most wonderful moment in your life

   - What happened?
   - Who was involved?
   - What were you thinking and feeling?
   - What does this say about who you are?

2. **Low Point**: The most difficult moment in your life

   - What happened?
   - Who was involved?
   - What were you thinking and feeling?
   - What does this say about who you are?

3. **Turning Point**: A moment that changed the direction of your life

   - What happened?
   - What changed?
   - Who were you before and after?

4. **Earliest Memory**: Your earliest clear memory

   - What happened?
   - What does this memory mean to you?

5. **Important Childhood Scene**: A vivid memory from childhood

   - What happened?
   - Who was involved?
   - Why is this memory important?

6. **Important Adolescent Scene**: A vivid memory from teenage years

   - What happened?
   - Who was involved?
   - Why is this memory important?

7. **Important Adult Scene**: A vivid memory from adulthood
   - What happened?
   - Who was involved?
   - Why is this memory important?

**Section 3: Future Story**
Describe your future self 5-10 years from now. Who are you? What are you doing? What's your life like?

**Section 4: Life Theme**
If you had to describe the central theme of your life story, what would it be?

---

### Exercise F2: The Narrative Assessment

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:
Review your Life Story Interview and answer:

1. **Narrative Type**:

   - Are your stories primarily redemptive (bad → good) or contamination (good → bad)?
   - Are they progressive (upward), regressive (downward), or stable?

2. **Dominant Emotions**:

   - What emotions appear most frequently in your stories?
   - Which emotions are missing?

3. **Key Themes**:

   - What themes repeat across your stories?
   - What values are reflected?

4. **Agency vs. Communion**:

   - Do your stories emphasize personal achievement (agency)?
   - Or relationships and connection (communion)?
   - Or both?

5. **Voice Quality**:

   - How many different "voices" or "parts" appear in your stories?
   - Are they in harmony or conflict?

6. **Areas for Development**:
   - Which stories would benefit from transformation?
   - What new narratives would serve you better?

---

### Exercise F3: The Resource State Library

**Duration**: 45 minutes
**Materials**: Journal, quiet space

**Instructions**:
Create anchors for five essential resource states:

1. **Confidence**: A time you felt truly confident

   - Recall the experience fully
   - Notice the peak of the feeling
   - Anchor on right thumb
   - Test and stack with additional experiences

2. **Calm/Safety**: A time you felt completely safe and calm

   - Recall the experience fully
   - Anchor on right index finger
   - Test and stack

3. **Curiosity**: A time you felt genuinely curious and open

   - Recall the experience fully
   - Anchor on right middle finger
   - Test and stack

4. **Connection**: A time you felt deeply connected to others

   - Recall the experience fully
   - Anchor on right ring finger
   - Test and stack

5. **Clarity**: A time you had complete clarity about something
   - Recall the experience fully
   - Anchor on right pinkie
   - Test and stack

**Daily Practice**: Fire each anchor once daily to maintain them.

---

## Approach 1: Narrative Anchoring Exercises

### Exercise NA1: Story State Anchoring

**Duration**: 30 minutes per narrative
**Materials**: Quiet space, journal

**Instructions**:

1. Choose a key life narrative from your Life Story Interview.
2. Recall the narrative fully—step into the experience.
3. Notice the emotional state at its peak.
4. Create an anchor for this state (touch, word, or gesture).
5. Break state by thinking of something neutral.
6. Test the anchor.
7. Record: Narrative name, anchor location, state quality.

**Repeat for**:

- Your high point narrative
- Your turning point narrative
- Your future self narrative

---

### Exercise NA2: Submodality Comparison

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:

1. Choose one empowering narrative and one challenging narrative.
2. For each, note the submodalities:

**Visual**:

- Brightness (1-10)
- Color or B&W
- Size (small to large)
- Distance (close to far)
- Location in visual field
- Still or moving
- Associated or dissociated

**Auditory**:

- Volume (1-10)
- Pitch (high to low)
- Location
- Your voice or others'

**Kinesthetic**:

- Intensity (1-10)
- Location in body
- Temperature
- Texture

3. Compare the two sets of submodalities.
4. Note which differences are most significant.
5. Experiment with shifting one submodality of the challenging narrative to match the empowering one. Notice what happens.

---

### Exercise NA3: Timeline Exploration

**Duration**: 20 minutes
**Materials**: Quiet space

**Instructions**:

1. Close your eyes and relax.
2. Think of something you did this morning. Notice where that memory seems to be located in space around you.
3. Think of something from yesterday. Notice its location.
4. Think of something from last week. Notice location.
5. Think of something from last month. Notice location.
6. Think of something from last year. Notice location.
7. Think of a childhood memory. Notice location.
8. Now think of something you'll do later today. Where is that located?
9. Something next week. Notice location.
10. Something next year. Notice location.
11. Open your eyes. Draw your timeline showing how past and future are organized around you.

---

### Exercise NA4: The Springboard Intervention

**Duration**: 30-45 minutes
**Materials**: Quiet space

**Instructions**:

1. Choose a difficult past experience that still affects you.
2. Close your eyes. Imagine floating up and above your timeline.
3. Float back along your timeline to that experience.
4. From above, looking down at your younger self in that situation, ask: "What resources would have helped?"
5. Imagine sending those resources down to your younger self. Watch them receive and use the resources.
6. Notice how the experience changes from this new perspective.
7. Ask: "What did this experience make possible?"
8. Create a clear connection between this experience and positive outcomes in your life.
9. Float forward along your timeline, noticing how subsequent events are affected.
10. Return to now, bringing the new understanding.
11. Journal about what you experienced.

---

### Exercise NA5: Trance Narrative Work

**Duration**: 30 minutes
**Materials**: Quiet space, comfortable seating

**Instructions**:

1. Enter a comfortable relaxed state using progressive relaxation:
   - Relax your feet and legs
   - Relax your torso
   - Relax your arms and hands
   - Relax your neck and face
   - Let your breathing slow and deepen
2. Once deeply relaxed, bring to mind a narrative you wish to transform.
3. Allow the narrative to be present without trying to change it.
4. Ask your unconscious mind: "What is the positive intention of this narrative?"
5. Wait for insights, images, or feelings to arise.
6. Ask: "How might this narrative transform to better serve me?"
7. Allow whatever transformation wants to occur.
8. When it feels complete, suggest to yourself that this new understanding will integrate fully.
9. Count from 1 to 5, returning to full alertness.
10. Journal about your experience.

---

## Approach 2: Dialogical Transformation Exercises

### Exercise DT1: Complete Voice Mapping

**Duration**: 60 minutes
**Materials**: Large paper, colored pens/markers

**Instructions**:

**Phase 1: Voice Identification** (20 min)
List all the "voices" or "parts" you can identify within yourself. Use these prompts:

- Different sides of yourself
- Who you become in different situations
- Voices in your internal dialogue
- Internalized voices from others
- Historical versions of yourself

**Phase 2: Voice Characterization** (20 min)
For each voice, note:

- Name
- Character description (3-5 words)
- Origin
- Typical message
- Positive intention

**Phase 3: Visual Mapping** (20 min)
On large paper:

1. Draw a circle representing your Self
2. Place each voice in the circle (central = more dominant)
3. Use size to indicate volume/power
4. Use color to indicate emotional quality
5. Draw lines showing relationships:
   - Solid line = support
   - Dotted line = neutral
   - Jagged line = conflict

---

### Exercise DT2: The Positive Intention Chain

**Duration**: 15 minutes per voice
**Materials**: Journal

**Instructions**:
Choose a voice that causes difficulty. Conduct this inquiry:

1. "What does this voice want?"
   Answer: ******\_\_\_\_******

2. "If it had that, what would that give me?"
   Answer: ******\_\_\_\_******

3. "And if I had that, what would THAT give me?"
   Answer: ******\_\_\_\_******

4. Continue asking "And what would that give me?" until you reach a core positive value (usually 5-7 iterations).

5. Acknowledge: "So ultimately, you're trying to give me [core value]."

6. Thank the voice for its positive intention.

**Example Chain**:

- Voice: Inner Critic
- "What do you want?" → "For you to be better"
- "What would that give me?" → "Success"
- "What would that give me?" → "Recognition"
- "What would that give me?" → "Belonging"
- "What would that give me?" → "Love"
- Core intention: Love

---

### Exercise DT3: The Visual Squash

**Duration**: 30 minutes
**Materials**: Quiet space

**Instructions**:

1. Choose two voices that are in conflict.
2. Extend both hands, palms up.
3. Place Voice A in your left hand. Get a clear image or sense of this part.
4. Place Voice B in your right hand. Get a clear image or sense of this part.
5. Ask Voice A: "What do you want?" Then: "What would that give me?" Continue until you reach the core positive intention.
6. Ask Voice B the same questions until you reach its core positive intention.
7. Notice where the intentions overlap. Both usually want something similar at the deepest level.
8. Ask both parts: "Would you be willing to integrate with each other to better achieve your shared intention?"
9. If both agree, slowly bring your hands together.
10. As hands meet, allow the parts to merge and integrate.
11. Bring the integrated part to your heart.
12. Notice how you feel.
13. Imagine future situations where the old conflict would have occurred. How does the integrated part respond?

---

### Exercise DT4: Chair Dialogue

**Duration**: 30-45 minutes
**Materials**: Two chairs or cushions

**Instructions**:

1. Set up two positions facing each other.
2. Assign Voice A to Position A and Voice B to Position B.
3. Sit in Position A. Fully become Voice A.
4. Speak as Voice A for 2-3 minutes. Express concerns, wants, complaints about Voice B.
5. Move to Position B. Fully become Voice B.
6. Respond as Voice B for 2-3 minutes.
7. Continue the dialogue, switching positions every 2-3 minutes.
8. After several exchanges, notice:
   - What does Voice A really need?
   - What does Voice B really need?
   - Is there common ground?
9. Create a third position—the integration of both voices.
10. Sit in the third position and speak as the integrated voice.
11. Journal about insights and resolutions.

---

### Exercise DT5: The Internal Conference

**Duration**: 30 minutes
**Materials**: Quiet space, comfortable seating

**Instructions**:

1. Enter a relaxed state through progressive relaxation.
2. Imagine descending into a beautiful meeting room within yourself.
3. See a round table with chairs for all your major voices.
4. Watch as each voice takes a seat around the table.
5. Notice a wise facilitator—your Higher Self or Wise Observer—taking the head of the table.
6. Allow each voice to express its needs and concerns. Listen with curiosity.
7. Watch as the facilitator helps voices understand each other.
8. Notice any agreements or understandings emerging.
9. See all voices nodding in some form of unified commitment.
10. Thank all voices for participating.
11. Slowly ascend from the meeting room and return to normal consciousness.
12. Journal about what occurred in the conference.

---

## Approach 3: Generative Storytelling Exercises

### Exercise GS1: Mode Switching Practice

**Duration**: 30 minutes
**Materials**: Journal, voice recorder (optional)

**Instructions**:
Choose a recent meaningful experience.

**Part A: Dramatic Mode** (10 min)
Tell the story using these rules:

- Present tense only
- Rich sensory details
- Emotion in the moment
- Action-focused
- "Show don't tell"

**Part B: Reflective Mode** (10 min)
Tell the same story using these rules:

- Past tense
- Analysis and interpretation
- Lessons and meanings
- Connection to larger themes
- "Tell and explain"

**Part C: Integration** (10 min)
Tell the story one more time, consciously switching between modes. Use dramatic mode for impact moments, reflective mode for meaning-making.

**Reflection**: Which mode is more natural for you? What does switching add to the story?

---

### Exercise GS2: The Redemptive Rewrite

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:

1. Identify a life experience you've been telling as negative or contaminating.
2. Answer these questions:
   - What became possible because of this experience?
   - What did you learn that you couldn't have learned otherwise?
   - What strength did this develop?
   - How has this shaped you positively?
3. Write the redemptive version using this structure:
   - **Situation**: What happened (acknowledge difficulty)
   - **Impact**: How it affected you (validate the pain)
   - **Turning**: What shifted or what you discovered
   - **Growth**: What you gained
   - **Integration**: Who you are now because of it
4. Read the new narrative aloud.
5. Practice telling it until it flows naturally.

---

### Exercise GS3: Milton Model Enhancement

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:

1. Write a plain statement about your identity (e.g., "I want to be more confident").
2. Enhance using each Milton Model pattern:

**Presuppositions**:

- "As your confidence continues to develop..."
- "Before you realize how confident you've become..."

**Embedded Commands** (mark with emphasis):

- "And you can _feel more confident now_..."

**Artfully Vague**:

- "Something about the way you're changing allows a certain quality to emerge..."

**Nominalizations**:

- "The transformation happening within you..."

**Quotes**:

- "And my mentor once said to me, 'You have more strength than you know...'"

3. Combine multiple patterns into a single enhanced paragraph.
4. Read aloud and notice the effect.

---

### Exercise GS4: The Story Spine

**Duration**: 30 minutes
**Materials**: Journal

**Instructions**:
Create your identity narrative using this structure:

"Once upon a time, I was ********\_******** [starting identity].

Every day, I ********\_******** [habitual pattern].

But one day, ********\_******** [inciting incident].

Because of that, ********\_******** [consequence].

Because of that, ********\_******** [further consequence].

Until finally, ********\_******** [climax/transformation].

And ever since then, I am ********\_******** [new identity].

And the moral is ********\_******** [meaning/lesson]."

After completing the spine, expand each line into a full paragraph with sensory details and emotional texture.

---

### Exercise GS5: Future Self Immersion

**Duration**: 45 minutes
**Materials**: Quiet space, journal

**Instructions**:

**Part A: Visualization** (20 min)

1. Close your eyes and relax deeply.
2. Imagine traveling forward 5 years.
3. See your future self who has become who you want to be.
4. Step INTO that future self.
5. Experience a complete day as that person:
   - Waking up
   - Morning routine
   - Daily activities
   - Interactions with others
   - How it feels to be you
   - End of day
6. Notice all sensory details—what you see, hear, feel.
7. Return to present.

**Part B: Narrative Writing** (20 min)
Write "A Day in My Future Life" in present tense, as if it's happening now.

Begin: "I wake up feeling..."

Include: Activities, relationships, accomplishments, feelings, environment.

Make it vivid and compelling.

**Part C: Installation** (5 min)
Read this narrative daily for at least 21 days, fully stepping into the experience each time.

---

## Integration Exercises

These exercises combine elements from all three approaches.

### Exercise INT1: Complete Narrative Transformation

**Duration**: 2-3 hours (can be spread over multiple sessions)
**Materials**: Journal, quiet space

**Instructions**:

**Step 1: Identify**
Choose a life narrative that limits you.

**Step 2: Anchor (Approach 1)**

- Access the current narrative state
- Anchor it so you can work with it

**Step 3: Discover Voices (Approach 2)**

- What voices are involved in this narrative?
- What are their positive intentions?
- Any conflicts to resolve?

**Step 4: Integrate Parts (Approach 2)**

- Use Visual Squash or other integration techniques
- Create unified voice

**Step 5: Submodality Shift (Approach 1)**

- Change the submodalities of the narrative
- Make it less intense or more resourceful

**Step 6: Redemptive Rewrite (Approach 3)**

- Create a redemptive version
- Use Milton Model patterns to enhance

**Step 7: Timeline Integration (Approach 1)**

- Use timeline work to install new narrative
- Create springboard effect

**Step 8: Future Pace (All Approaches)**

- Imagine future situations
- See new narrative operating
- Anchor the new state

**Step 9: Practice**

- Tell new narrative daily for 21 days
- Notice changes in your experience

---

### Exercise INT2: The Weekly Narrative Practice

**Duration**: 30 minutes weekly
**Materials**: Journal

**Instructions**:
Complete this practice weekly:

**Monday: Notice**

- What narratives have been dominant this week?
- What states have they created?

**Wednesday: Work**

- Choose one narrative for development
- Apply technique from whichever approach resonates

**Friday: Integrate**

- Review your narrative work
- Notice what's shifting
- Set intentions for the coming week

**Sunday: Rest**

- Practice gratitude for your narrative growth
- Relax and let integration occur

---

### Exercise INT3: The Daily Narrative Minute

**Duration**: 1 minute, 3x daily
**Materials**: None

**Instructions**:

**Morning (upon waking)**:
Fire your resource anchor and state: "I am [empowering identity statement]."

**Midday**:
Notice what narrative you're running. Ask: "Is this serving me?"

**Evening**:
Review the day. Choose one moment and find its redemptive meaning.

---

## Conclusion

These exercises provide practical tools for narrative identity transformation. Start with the Foundation Exercises, then explore the approach that resonates most with you. With consistent practice, you will develop the ability to consciously author your own identity—creating a life story that empowers, inspires, and guides you toward who you're becoming.

Remember: Identity is a story, and you are its author. These exercises help you become a master storyteller of your own life.

================================================================================

# File: .git/COMMIT_EDITMSG

================================================================================

initial

================================================================================

# File: .git/FETCH_HEAD

================================================================================

================================================================================

# File: .git/HEAD

================================================================================

ref: refs/heads/main

================================================================================

# File: .git/config

================================================================================

[core]
repositoryformatversion = 0
filemode = true
bare = false
logallrefupdates = true
ignorecase = true
precomposeunicode = true
[branch "main"]
gk-last-accessed = 2026-01-08T10:36:04.609Z
gk-last-modified = 2026-01-08T10:36:04.609Z

================================================================================

# File: .git/description

================================================================================

Unnamed repository; edit this file 'description' to name the repository.

================================================================================

# File: .git/index

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/61/2c762fca0e2d3a80ea9535a9b21834b115aa11

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/3e/b3d310b6e0217f4aaac6f1d67283ebde552cb5

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/03/675cd156dc4d633594ba654cf2cd09683fcd8c

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/9b/eca3e41f39b1e48e7431972f511b5d569d1392

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/9e/a68f4379c474c9ce71c237cfd3f437f51306ca

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/6a/e7fa004cc655ef5da3aa45740bd0c51fe5e3f7

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/34/056a400514e1c870f5c5c03192bc25643cd7e0

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/d0/1535207c2c0029e8c597a351d9744d66dc3f56

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/be/1dfda69dd86eaa77562c402e7b6c9ad05137a1

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/b3/a628847461d2dfa69b56cddef6bae8598ffaa5

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/da/8241cc70aa39ddee4f736e8dc8bf0b72ef74d3

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/da/8cf31be74861340b8e019379e17f32e99b73e9

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/eb/a873169a4a65a43603051dd3eae73a924bfa1e

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/1f/906bd2dc076ae30d3cb60c0c4ca00fd143f982

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/74/7a66315e4c2340f6026083ae0e9fe3de84f53a

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/81/4843f0d2802380caac59ed230c0dbd20cc0139

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/2f/d10dcede1780011a9b9c84b5c4a806b2f21e00

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/5c/a3484f8c8bdd8cc6eb3a5ed3327206861a42b3

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/53/9b996a1c7ae2a05ba6685946ba5624813a97ac

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/53/d0ee4a7c67fd71e9b12c9554986e2d837f1c01

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/01/d6a0fbf74decb9d4354251ff79857be31396b9

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/06/24785a081d9dc01ca7f2074ec067577427b403

# [ENCODING ERROR - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/52/193a36959b2dd3c5ab5efdbd5716039d39045c

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/0f/4efdfee58ba4f142a09a5e00b43b29e08d0153

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/0a/ce4a1aa447e7c2661eb4e7481da880af940a6a

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/d5/7e0d7d8750d5ff63a81707dd9764493a1b5af5

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/db/fb0a14ff5aee3cee638bd7a86fcda4b7d48a6c

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/a6/32c2238da0a4646969c2b029b6be7f42230383

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/c4/c4a235d146fa4b0313a99308504af3ffc18078

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/ea/f85c888cac56ee694d6b0bb4ade03b59aed4d1

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/fa/8a7b8840fd3c31e9d2cb711861bc49a26c304d

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/ff/9616fe5ca363d0dfb01d3475f6956fe0ac7af2

# [ENCODING ERROR - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/ff/e0a62a677fd2d6d244604551051f333d5c390c

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/f1/2479e615c33fa6b7dd63d60f153e949aa7648f

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/f8/8f780a71d9fd3fdfa557fd63f92f3eb996eede

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/ce/6a698cc4053f9c4a33dd3d9feada78158605f7

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/46/eb9e466aea30486728540bbf0d8d504046544e

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/41/c0f6623d588b76a414d8029715982b2433e923

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/77/cdb3f3128345024f69edee4ff7a4252e5765bf

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/84/ea71fe56d882d3839be49f3ae8ee670521837e

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/24/b8f3f7635efc75fa1e0b0f0d2cacc79397c629

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/23/b37ee99dd585dae2930990161c40d0c42ad8f2

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/12/10aa12e4934557564ed76c76f08d02ce1f36fb

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/1c/352cf9e37c06acfaa5de04df33c68955380e49

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/1c/40d655d5a0733f910d0234a12bb3e23240bbd9

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/objects/2e/4f2b76ba9d5ee6be062101abdad3696d780ac4

# [BINARY FILE - SKIPPED]

================================================================================

================================================================================

# File: .git/info/exclude

================================================================================

# git ls-files --others --exclude-from=.git/info/exclude

# Lines that start with '#' are comments.

# For a project mostly in C, the following would be a good set of

# exclude patterns (uncomment them if you want to use them):

# \*.[oa]

# \*~

================================================================================

# File: .git/logs/HEAD

================================================================================

0000000000000000000000000000000000000000 1f906bd2dc076ae30d3cb60c0c4ca00fd143f982 nazarEmpeek <info@nazartrynko.com> 1767868414 +0200 commit (initial): initial

================================================================================

# File: .git/logs/refs/heads/main

================================================================================

0000000000000000000000000000000000000000 1f906bd2dc076ae30d3cb60c0c4ca00fd143f982 nazarEmpeek <info@nazartrynko.com> 1767868414 +0200 commit (initial): initial

================================================================================

# File: .git/hooks/applypatch-msg.sample

================================================================================

#!/bin/sh

#

# An example hook script to check the commit log message taken by

# applypatch from an e-mail message.

#

# The hook should exit with non-zero status after issuing an

# appropriate message if it wants to stop the commit. The hook is

# allowed to edit the commit message file.

#

# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:

================================================================================

# File: .git/hooks/commit-msg.sample

================================================================================

#!/bin/sh

#

# An example hook script to check the commit log message.

# Called by "git commit" with one argument, the name of the file

# that has the commit message. The hook should exit with non-zero

# status after issuing an appropriate message if it wants to stop the

# commit. The hook is allowed to edit the commit message file.

#

# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.

# Doing this in a hook is a bad idea in general, but the prepare-commit-msg

# hook is more suited to it.

#

# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')

# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
sort | uniq -c | sed -e '/^[ ]\*1[ ]/d')" || {
echo >&2 Duplicate Signed-off-by lines.
exit 1
}

================================================================================

# File: .git/hooks/fsmonitor-watchman.sample

================================================================================

#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman

# (https://facebook.github.io/watchman/) with git to speed up detecting

# new and modified files.

#

# The hook is passed a version (currently 2) and last update token

# formatted as a string and outputs to stdout a new update token and

# all files that have been modified since the update token. Paths must

# be relative to the root of the working tree and separated by a single NUL.

#

# To enable this hook, rename this file to "query-watchman" and set

# 'git config core.fsmonitor .git/hooks/query-watchman'

#

my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging

# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version

if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
"Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
require JSON::XS;
$json_pkg = "JSON::XS";
1;
} or do {
require JSON::PP;
$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
my $o = watchman_query();
	if (is_work_tree_watched($o)) {
output_result($o->{clock}, @{$o->{files}});
}
}

sub output*result {
my ($clockid, @files) = @*;

    # Uncomment for debugging watchman output
    # open (my $fh, ">", ".git/watchman-output.out");
    # binmode $fh, ":utf8";
    # print $fh "$clockid\n@files\n";
    # close $fh;

    binmode STDOUT, ":utf8";
    print $clockid;
    print "\0";
    local $, = "\0";
    print @files;

}

sub watchman_clock {
my $response = qx/watchman clock "$git_work_tree"/;
die "Failed to get clock id on '$git_work_tree'.\n" .
"Falling back to scanning...\n" if $? != 0;

    return $json_pkg->new->utf8->decode($response);

}

sub watchman_query {
my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
or die "open2() failed: $!\n" .
"Falling back to scanning...\n";

    # In the query expression below we're asking for names of files that
    # changed since $last_update_token but not from the .git folder.
    #
    # To accomplish this, we're using the "since" generator to use the
    # recency index to select candidate nodes and "fields" to limit the
    # output to file names only. Then we're using the "expression" term to
    # further constrain the results.
    my $last_update_line = "";
    if (substr($last_update_token, 0, 1) eq "c") {
    	$last_update_token = "\"$last_update_token\"";
    	$last_update_line = qq[\n"since": $last_update_token,];
    }
    my $query = <<"	END";
    	["query", "$git_work_tree", {$last_update_line
    		"fields": ["name"],
    		"expression": ["not", ["dirname", ".git"]]
    	}]
    END

    # Uncomment for debugging the watchman query
    # open (my $fh, ">", ".git/watchman-query.json");
    # print $fh $query;
    # close $fh;

    print CHLD_IN $query;
    close CHLD_IN;
    my $response = do {local $/; <CHLD_OUT>};

    # Uncomment for debugging the watch response
    # open ($fh, ">", ".git/watchman-response.json");
    # print $fh $response;
    # close $fh;

    die "Watchman: command returned no output.\n" .
    "Falling back to scanning...\n" if $response eq "";
    die "Watchman: command returned invalid output: $response\n" .
    "Falling back to scanning...\n" unless $response =~ /^\{/;

    return $json_pkg->new->utf8->decode($response);

}

sub is*work_tree_watched {
my ($output) = @*;
my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
$error = $output->{error};
die "Watchman: $error.\n" .
"Falling back to scanning...\n" if $error;

    	# Uncomment for debugging watchman output
    	# open (my $fh, ">", ".git/watchman-output.out");
    	# close $fh;

    	# Watchman will always return all files on the first query so
    	# return the fast "everything is dirty" flag to git and do the
    	# Watchman query just to get it over with now so we won't pay
    	# the cost in git to look up each individual file.
    	my $o = watchman_clock();
    	$error = $output->{error};

    	die "Watchman: $error.\n" .
    	"Falling back to scanning...\n" if $error;

    	output_result($o->{clock}, ("/"));
    	$last_update_token = $o->{clock};

    	eval { launch_watchman() };
    	return 0;
    }

    die "Watchman: $error.\n" .
    "Falling back to scanning...\n" if $error;

    return 1;

}

sub get_working_dir {
my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
$working_dir = Win32::GetCwd();
$working_dir =~ tr/\\/\//;
} else {
require Cwd;
$working_dir = Cwd::cwd();
}

    return $working_dir;

}

================================================================================

# File: .git/hooks/post-update.sample

================================================================================

#!/bin/sh

#

# An example hook script to prepare a packed repository for use over

# dumb transports.

#

# To enable this hook, rename this file to "post-update".

exec git update-server-info

================================================================================

# File: .git/hooks/pre-applypatch.sample

================================================================================

#!/bin/sh

#

# An example hook script to verify what is about to be committed

# by applypatch from an e-mail message.

#

# The hook should exit with non-zero status after issuing an

# appropriate message if it wants to stop the commit.

#

# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:

================================================================================

# File: .git/hooks/pre-commit.sample

================================================================================

#!/bin/sh

#

# An example hook script to verify what is about to be committed.

# Called by "git commit" with no arguments. The hook should

# exit with non-zero status after issuing an appropriate message if

# it wants to stop the commit.

#

# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
against=HEAD
else # Initial commit: diff against an empty tree object
against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.

allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.

exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent

# them from being added to the repository. We exploit the fact that the

# printable range starts at the space character and ends with tilde.

if [ "$allownonascii" != "true" ] && # Note that the use of brackets around a tr range is ok here, (it's # even required, for portability to Solaris 10's /usr/bin/tr), since # the square bracket bytes happen to fall in the designated range.
test $(git diff --cached --name-only --diff-filter=A -z $against |
LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

git config hooks.allownonascii true
EOF
exit 1
fi

# If there are whitespace errors, print the offending file names and fail.

exec git diff-index --check --cached $against --

================================================================================

# File: .git/hooks/pre-merge-commit.sample

================================================================================

#!/bin/sh

#

# An example hook script to verify what is about to be committed.

# Called by "git merge" with no arguments. The hook should

# exit with non-zero status after issuing an appropriate message to

# stderr if it wants to stop the merge commit.

#

# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:

================================================================================

# File: .git/hooks/pre-push.sample

================================================================================

#!/bin/sh

# An example hook script to verify what is about to be pushed. Called by "git

# push" after it has checked the remote status, but before anything has been

# pushed. If this script exits with a non-zero status nothing will be pushed.

#

# This hook is called with the following parameters:

#

# $1 -- Name of the remote to which the push is being done

# $2 -- URL to which the push is being done

#

# If pushing without using a named remote those arguments will be equal.

#

# Information about the commits which are being pushed is supplied as lines to

# the standard input in the form:

#

# <local ref> <local oid> <remote ref> <remote oid>

#

# This sample shows how to prevent push of commits where the log message starts

# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
if test "$local_oid" = "$zero"
then # Handle delete
:
else
if test "$remote_oid" = "$zero"
then # New branch, examine all commits
range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
fi

    	# Check for WIP commit
    	commit=$(git rev-list -n 1 --grep '^WIP' "$range")
    	if test -n "$commit"
    	then
    		echo >&2 "Found WIP commit in $local_ref, not pushing"
    		exit 1
    	fi
    fi

done

exit 0

================================================================================

# File: .git/hooks/pre-rebase.sample

================================================================================

#!/bin/sh

#

# Copyright (c) 2006, 2008 Junio C Hamano

#

# The "pre-rebase" hook is run just before "git rebase" starts doing

# its job, and can prevent the command from running by exiting with

# non-zero status.

#

# The hook is called with the following parameters:

#

# $1 -- the upstream the series was forked from.

# $2 -- the branch being rebased (or empty when rebasing the current branch).

#

# This sample shows how to prevent topic branches that are already

# merged to 'next' branch from getting rebased, because allowing it

# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
topic="refs/heads/$2"
else
topic=`git symbolic-ref HEAD` ||
exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/_)
;;
_)
exit 0 ;# we do not interrupt others.
;;
esac

# Now we are dealing with a topic branch being rebased

# on top of master. Is it OK to rebase it?

# Does the topic really exist?

git show-ref -q "$topic" || {
echo >&2 "No such branch $topic"
exit 1
}

# Is topic fully merged to master?

not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next? If so you should not be rebasing it.

only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
not_in_topic=`git rev-list "^$topic" master`
if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
exit 1 ;# we could allow it, but there is no point.
else
exit 0
fi
else
not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
/usr/bin/perl -e '
my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
[$1 => $2];
} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

- Once a topic branch forks from "master", "master" is never
  merged into it again (either directly or indirectly).

- Once a topic branch is fully cooked and merged into "master",
  it is deleted. If you need to build on top of it to correct
  earlier mistakes, a new topic branch is created by forking at
  the tip of the "master". This is not strictly necessary, but
  it makes it easier to keep your history simple.

- Whenever you need to test or publish your changes to topic
  branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next". Young
topic branches can have stupid mistakes you would rather
clean up before publishing, and things that have not been
merged into other branches can be easily rebased without
affecting other people. But once it is published, you would
not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
Then you can delete it. More importantly, you should not
build on top of it -- other people may already want to
change things related to the topic as patches against your
"master", so if you need further changes, it is better to
fork the topic (perhaps with the same name) afresh from the
tip of "master".

Let's look at this example:

    	   o---o---o---o---o---o---o---o---o---o "next"
    	  /       /           /           /
    	 /   a---a---b A     /           /
    	/   /               /           /
           /   /   c---c---c---c B         /
          /   /   /             \         /
         /   /   /   b---b C     \       /
        /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"

A, B and C are topic branches.

- A has one fix since it was merged up to "next".

- B has finished. It has been fully merged up to "master" and "next",
  and is ready to be deleted.

- C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

    git rev-list ^master ^topic next
    git rev-list ^master        next

    if these match, topic has not merged in next at all.

To compute (2):

    git rev-list master..topic

    if this is empty, it is fully merged to "master".

DOC_END

================================================================================

# File: .git/hooks/pre-receive.sample

================================================================================

#!/bin/sh

#

# An example hook script to make use of push options.

# The example simply echoes all push options that start with 'echoback='

# and rejects all pushes when the "reject" push option is used.

#

# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
done
fi

================================================================================

# File: .git/hooks/prepare-commit-msg.sample

================================================================================

#!/bin/sh

#

# An example hook script to prepare the commit log message.

# Called by "git commit" with the name of the file that has the

# commit message, followed by the description of the commit

# message's source. The hook's purpose is to edit the commit

# message file. If the hook fails with a non-zero status,

# the commit is aborted.

#

# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the

# "# Please enter the commit message..." help message.

#

# The second includes the output of "git diff --name-status -r"

# into the message, just before the "git status" output. It is

# commented because it doesn't cope with --amend or with squashed

# commits.

#

# The third example adds a Signed-off-by line to the message, that can

# still be edited. This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in

# ,|template,)

# /usr/bin/perl -i.bak -pe '

# print "\n" . `git diff --cached --name-status -r`

# if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;

# \*) ;;

# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')

# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"

# if test -z "$COMMIT_SOURCE"

# then

# /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"

# fi

================================================================================

# File: .git/hooks/push-to-checkout.sample

================================================================================

#!/bin/sh

# An example hook script to update a checked-out tree on a git push.

#

# This hook is invoked by git-receive-pack(1) when it reacts to git

# push and updates reference(s) in its repository, and when the push

# tries to update the branch that is currently checked out and the

# receive.denyCurrentBranch configuration variable is set to

# updateInstead.

#

# By default, such a push is refused if the working tree and the index

# of the remote repository has any difference from the currently

# checked out commit; when both the working tree and the index match

# the current commit, they are updated to match the newly pushed tip

# of the branch. This hook is to be used to override the default

# behaviour; however the code below reimplements the default behaviour

# as a starting point for convenient modification.

#

# The hook receives the commit with which the tip of the current

# branch is going to be updated:

commit=$1

# It can exit with a non-zero status to refuse the push (when it does

# so, it must not modify the index or the working tree).

die () {
echo >&2 "$\*"
exit 1
}

# Or it can make any necessary changes to the working tree and to the

# index to bring them to the desired state when the tip of the current

# branch is updated to the new commit, and exit with a zero status.

#

# For example, the hook can simply run git read-tree -u -m HEAD "$1"

# in order to emulate git fetch that is run in the reverse direction

# with git push, as the two-tree form of git read-tree -u -m is

# essentially the same as git switch or git checkout that switches

# branches while keeping the local changes in the working tree that do

# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code

# for the default behaviour for git's push-to-checkout hook defined in

# the push_to_deploy() function in builtin/receive-pack.c.

#

# Note that the hook will be executed from the repository directory,

# not from the working tree, so if you want to perform operations on

# the working tree, you will have to adapt your code accordingly, e.g.

# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
die "Working directory has unstaged changes"
fi

# This is a rough translation of:

#

# head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX

if git cat-file -e HEAD 2>/dev/null
then
head=HEAD
else
head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
die "Could not update working tree to new HEAD"
fi

================================================================================

# File: .git/hooks/update.sample

================================================================================

#!/bin/sh

#

# An example hook script to block unannotated tags from entering.

# Called by "git receive-pack" with arguments: refname sha1-old sha1-new

#

# To enable this hook, rename this file to "update".

#

# Config

# ------

# hooks.allowunannotated

# This boolean sets whether unannotated tags will be allowed into the

# repository. By default they won't be.

# hooks.allowdeletetag

# This boolean sets whether deleting tags will be allowed in the

# repository. By default they won't be.

# hooks.allowmodifytag

# This boolean sets whether a tag may be modified after creation. By default

# it won't be.

# hooks.allowdeletebranch

# This boolean sets whether deleting branches will be allowed in the

# repository. By default they won't be.

# hooks.denycreatebranch

# This boolean sets whether remotely creating branches will be denied

# in the repository. By default this is allowed.

#

# --- Command line

refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check

if [ -z "$GIT_DIR" ]; then
echo "Don't run this script from the command line." >&2
echo " (if you want, you could supply GIT_DIR then run" >&2
echo " $0 <ref> <oldrev> <newrev>)" >&2
exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
echo "usage: $0 <ref> <oldrev> <newrev>" >&2
exit 1
fi

# --- Config

allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description

projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"\* | "")
echo "\*\*\* Project description file hasn't been set" >&2
exit 1
;;
esac

# --- Check types

# if $newrev is 0000...0000, it's a commit to delete a ref.

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
refs/tags/\*,commit) # un-annotated tag
short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
echo "**_ The un-annotated tag, $short_refname, is not allowed in this repository" >&2
echo "_** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
exit 1
fi
;;
refs/tags/\*,delete) # delete tag
if [ "$allowdeletetag" != "true" ]; then
echo "**_ Deleting a tag is not allowed in this repository" >&2
exit 1
fi
;;
refs/tags/_,tag) # annotated tag
if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
then
echo "\*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
echo "**_ Creating a branch is not allowed in this repository" >&2
exit 1
fi
;;
refs/heads/_,delete) # delete branch
if [ "$allowdeletebranch" != "true" ]; then
echo "\*** Deleting a branch is not allowed in this repository" >&2
exit 1
fi
;;
refs/remotes/_,commit) # tracking branch
;;
refs/remotes/_,delete) # delete tracking branch
if [ "$allowdeletebranch" != "true" ]; then
echo "**_ Deleting a tracking branch is not allowed in this repository" >&2
exit 1
fi
;;
_) # Anything else (is there anything else?)
echo "\*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
exit 1
;;
esac

# --- Finished

exit 0

================================================================================

# File: .git/refs/heads/main

================================================================================

1f906bd2dc076ae30d3cb60c0c4ca00fd143f982

================================================================================
EXPORT SUMMARY
================================================================================
Files processed: 51
Files skipped (gitignore): 3
Binary files skipped: 47
================================================================================
