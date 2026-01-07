const prompts = [
    {
        number: 1,
        text: "Згенеруй зображення як ти мене уявляєш без мого реального фото, спілкуючись зі мною на основі наших розмов та моїх запитів. Максимально чесно не згладжуючи кути. Виразно уяви тільки мене. У формі людини, реалістичний стиль, на твій розсуд. Без запитань"
    },
    {
        number: 2,
        text: "Write a letter from my future self (5 years from now) to my current self. Base it on our conversations, my goals, my patterns, and my values. Be honest, encouraging, and specific. Include what I'll be grateful I did, what I'll wish I'd done differently, and what advice would have helped me most."
    },
    {
        number: 3,
        text: "Based on all our conversations, create a personalized philosophy statement for me. What are my core values? What principles guide my thinking? What worldview emerges from how I approach problems, make decisions, and interact with ideas? Write it as a concise manifesto (200-300 words) that captures my unique perspective."
    },
    {
        number: 4,
        text: "Generate a creative backstory for me. Not my real history, but a fictional origin story that explains who I am based on our conversations—my interests, my thinking patterns, my quirks, my strengths. Make it compelling, maybe a bit fantastical, but grounded in the truth of how I actually think and behave."
    },
    {
        number: 5,
        text: "Design a custom learning path specifically for me. Based on our conversations, identify: 1) What I'm naturally curious about, 2) What skills would unlock my potential, 3) What knowledge gaps are holding me back, 4) The optimal sequence to learn these things. Create a 90-day roadmap with specific resources and milestones."
    },
    {
        number: 6,
        text: "Create a 'user manual' for me—a document that explains how I work best. Include: my communication style, how I process information, what motivates me, what drains me, how I make decisions, my ideal working conditions, and how others can best collaborate with me. Base it entirely on patterns from our conversations."
    },
    {
        number: 7,
        text: "Generate a personalized productivity system for me. Analyze our conversations to understand: my work style, my energy patterns, my procrastination triggers, my motivation sources, and my natural rhythms. Then design a complete system (tools, methods, routines) that works with my nature rather than against it."
    },
    {
        number: 8,
        text: "Write a short story (1000-1500 words) featuring me as the protagonist. Use our conversations to understand my personality, my challenges, my goals, and my worldview. The story should feel authentic to who I am, even if it's set in a different world or situation. Make it compelling and reveal something meaningful about my character."
    },
    {
        number: 9,
        text: "Create a custom decision-making framework tailored to me. Based on our conversations, identify: how I typically make decisions, what biases I might have, what information I value most, and what outcomes I optimize for. Then design a step-by-step framework I can use for important decisions that accounts for my unique thinking patterns."
    },
    {
        number: 10,
        text: "Generate a personalized meditation or reflection guide for me. Understand my current state of mind, my stressors, my goals, and my values from our conversations. Create 7 different reflection prompts or meditation themes, each designed to help me gain clarity on different aspects of my life. Make them specific and actionable."
    },
    {
        number: 11,
        text: "Design a custom problem-solving methodology for me. Analyze how I approach problems in our conversations—do I jump to solutions? Overthink? Need structure? Then create a personalized framework that matches my thinking style but also pushes me to consider angles I might miss. Include specific techniques and questions."
    },
    {
        number: 12,
        text: "Create a personalized creative brief for me. Based on our conversations, identify: my creative interests, my aesthetic preferences, my storytelling style, and what themes resonate with me. Then write a creative brief for a project (art, writing, design, etc.) that would authentically express who I am and what I care about."
    },
    {
        number: 13,
        text: "Generate a 'second brain' structure for me. Based on our conversations, identify: what topics I'm passionate about, what I'm learning, what I want to remember, and how I think about information. Design a knowledge management system (categories, tags, connections) that matches how my mind actually works and what I actually need."
    },
    {
        number: 14,
        text: "Write a personalized manifesto for me. Not generic life advice, but a declaration of principles, values, and commitments that emerge from our conversations. What do I stand for? What am I building toward? What will I not compromise on? Make it inspiring, specific, and true to who I am based on how I think and act."
    },
    {
        number: 15,
        text: "Create a custom communication style guide for me. Analyze our conversations to understand: how I express ideas, what language I use, what metaphors resonate, my tone preferences, and how I like to receive information. Then create a guide that helps me communicate more effectively with others, playing to my natural strengths."
    },
    {
        number: 16,
        text: "Generate a personalized innovation framework for me. Based on our conversations, understand: how I generate ideas, what constraints I work within, what excites me, and what I'm trying to create. Design a systematic approach to innovation that matches my thinking style and helps me turn ideas into reality more effectively."
    },
    {
        number: 17,
        text: "Design a custom 'life operating system' for me. Based on our conversations, create a comprehensive system that includes: my values hierarchy, my decision principles, my energy management rules, my relationship guidelines, and my growth practices. Make it a practical framework I can reference daily to live more intentionally."
    },
    {
        number: 18,
        text: "Create a personalized knowledge graph for me. Map out the connections between topics, ideas, and interests that emerge from our conversations. Show how my thinking connects different domains, what central themes run through my interests, and what knowledge gaps exist. Visualize it as a network diagram with explanations."
    },
    {
        number: 19,
        text: "Generate a custom success metric system for me. Based on our conversations, identify: what I actually value (not what I think I should value), what progress looks like for me, and what would make me feel fulfilled. Create a set of personal metrics that measure what matters to me, not generic success markers."
    },
    {
        number: 20,
        text: "Write a personalized time management philosophy for me. Understand from our conversations: how I perceive time, what I prioritize, what I struggle with, and what rhythms work for me. Then create a time management approach that respects my nature while helping me achieve what matters most. Include specific techniques."
    },
    {
        number: 21,
        text: "Create a custom relationship framework for me. Based on our conversations, understand: how I connect with others, what I need in relationships, what I give, and what patterns I have. Design a framework for building and maintaining relationships that aligns with my values and communication style. Make it practical and actionable."
    },
    {
        number: 22,
        text: "Generate a personalized stress management system for me. Analyze our conversations to identify: my stress triggers, how stress manifests for me, what actually helps me recover, and what I need when I'm overwhelmed. Create a comprehensive stress management toolkit tailored to my specific needs and patterns."
    },
    {
        number: 23,
        text: "Design a custom learning methodology for me. Based on our conversations, understand: how I learn best, what learning styles I use, what obstacles I face, and what motivates me to learn. Create a personalized learning system with specific techniques, resources, and practices that match how my brain actually works."
    },
    {
        number: 24,
        text: "Create a personalized goal achievement system for me. From our conversations, identify: how I set goals, what derails me, what motivates me, and how I measure progress. Design a goal-setting and achievement framework that works with my psychology rather than against it. Include accountability mechanisms that actually work for me."
    },
    {
        number: 25,
        text: "Generate a custom creativity framework for me. Understand from our conversations: what sparks my creativity, what blocks it, what creative outlets I have, and how I generate ideas. Design a systematic approach to nurturing and channeling my creativity that includes practices, prompts, and techniques tailored to my creative style."
    },
    {
        number: 26,
        text: "Write a personalized conflict resolution guide for me. Based on our conversations, understand: how I handle conflict, what triggers me, what I need in difficult situations, and how I communicate under stress. Create a practical guide with strategies and scripts that match my communication style and help me navigate conflicts more effectively."
    },
    {
        number: 27,
        text: "Create a custom decision tree for major life choices for me. Based on our conversations, identify: what decisions I struggle with, what factors matter most to me, and what outcomes I optimize for. Design decision trees for 3-5 common major life choices that help me think through options systematically while honoring my values."
    },
    {
        number: 28,
        text: "Generate a personalized energy management system for me. Analyze our conversations to understand: my energy patterns, what drains me, what energizes me, and how I can optimize my energy throughout the day. Create a comprehensive system for managing physical, mental, and emotional energy that's tailored to my specific needs."
    },
    {
        number: 29,
        text: "Design a custom reflection practice for me. Based on our conversations, understand: what I reflect on naturally, what questions help me gain clarity, and how I process experiences. Create a personalized reflection practice (daily, weekly, monthly) with specific prompts and formats that match how I think and what I need to process."
    },
    {
        number: 30,
        text: "Create a personalized 'future self' roadmap for me. Based on our conversations, project forward: where am I heading? What version of myself am I becoming? What do I need to do, learn, and become to get there? Create a detailed 5-year roadmap with milestones, skills to develop, habits to build, and obstacles to overcome. Make it inspiring but realistic."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const promptsGrid = document.getElementById('promptsGrid');
    const toast = document.getElementById('toast');

    // Generate prompt cards
    prompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <div class="prompt-header">
                <span class="prompt-number">#${prompt.number}</span>
                <button class="copy-btn" data-prompt="${prompt.number - 1}" aria-label="Copy prompt ${prompt.number}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-text">Copy</span>
                </button>
            </div>
            <div class="prompt-text">${escapeHtml(prompt.text)}</div>
        `;
        promptsGrid.appendChild(card);
    });

    // Copy functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const promptIndex = parseInt(btn.getAttribute('data-prompt'));
            const promptText = prompts[promptIndex].text;

            try {
                await navigator.clipboard.writeText(promptText);
                
                // Visual feedback
                btn.classList.add('copied');
                const copyText = btn.querySelector('.copy-text');
                copyText.textContent = 'Copied!';
                
                // Show toast
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);

                // Reset button after 2 seconds
                setTimeout(() => {
                    btn.classList.remove('copied');
                    copyText.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = promptText;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    btn.classList.add('copied');
                    const copyText = btn.querySelector('.copy-text');
                    copyText.textContent = 'Copied!';
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        btn.classList.remove('copied');
                        copyText.textContent = 'Copy';
                    }, 2000);
                } catch (fallbackErr) {
                    alert('Failed to copy. Please select and copy manually.');
                }
                document.body.removeChild(textArea);
            }
        });
    });
});

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

