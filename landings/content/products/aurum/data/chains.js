/* ============================================
   AURUM — Chain Templates Data
   20+ Workflow Templates
   ============================================ */

const CHAINS = [
    {
        id: 'chain-launch',
        title: 'Product Launch Chain',
        description: 'Complete product launch workflow from research to launch day.',
        category: 'business',
        stepCount: 7,
        steps: [
            {
                id: 1,
                name: 'Research',
                description: 'Market research and competitive analysis',
                prompt: 'Conduct comprehensive market research for [product]. Analyze target audience, competitors, and market gaps.',
                outputType: 'report'
            },
            {
                id: 2,
                name: 'Position',
                description: 'Define unique positioning and value proposition',
                prompt: 'Based on the research, create a positioning statement and value proposition for [product].',
                outputType: 'strategy'
            },
            {
                id: 3,
                name: 'Name',
                description: 'Generate product name options',
                prompt: 'Generate 10 product name options based on the positioning. Include domain availability analysis.',
                outputType: 'options'
            },
            {
                id: 4,
                name: 'Copy',
                description: 'Write persuasive marketing copy',
                prompt: 'Write compelling marketing copy including headlines, taglines, and key messages.',
                outputType: 'content'
            },
            {
                id: 5,
                name: 'Landing',
                description: 'Create landing page content',
                prompt: 'Create complete landing page copy with all sections: hero, problem, solution, features, social proof, CTA.',
                outputType: 'content'
            },
            {
                id: 6,
                name: 'Email',
                description: 'Write launch email sequence',
                prompt: 'Create a 5-email launch sequence: teaser, announcement, benefits, social proof, final call.',
                outputType: 'sequence'
            },
            {
                id: 7,
                name: 'Social',
                description: 'Generate social media campaign',
                prompt: 'Create social media posts for launch: announcement, feature highlights, testimonials, countdown.',
                outputType: 'content'
            }
        ],
        rating: 4.9,
        uses: 2341,
        effectiveness: 94,
        price: 49,
        creator: { name: 'Product Launch Pro', avatar: '🚀' },
        tags: ['product launch', 'marketing', 'startup'],
        createdAt: '2024-10-01'
    },
    {
        id: 'chain-blog',
        title: 'Blog Post Machine',
        description: 'End-to-end blog post creation with SEO optimization.',
        category: 'writing',
        stepCount: 5,
        steps: [
            {
                id: 1,
                name: 'Research',
                description: 'Topic research and outline creation',
                prompt: 'Research [topic] and create a detailed outline with key points, supporting data, and unique angles.',
                outputType: 'outline'
            },
            {
                id: 2,
                name: 'Draft',
                description: 'Write the first draft',
                prompt: 'Write a first draft based on the outline. Focus on getting ideas down, not perfection.',
                outputType: 'content'
            },
            {
                id: 3,
                name: 'Edit',
                description: 'Edit and enhance the draft',
                prompt: 'Edit the draft for clarity, flow, and engagement. Add transitions, strengthen weak sections.',
                outputType: 'content'
            },
            {
                id: 4,
                name: 'SEO',
                description: 'Optimize for search engines',
                prompt: 'Optimize for [keyword]: meta title, description, headers, internal links, keyword placement.',
                outputType: 'content'
            },
            {
                id: 5,
                name: 'Social',
                description: 'Create social snippets',
                prompt: 'Create social media snippets: Twitter thread, LinkedIn post, Instagram caption.',
                outputType: 'content'
            }
        ],
        rating: 4.8,
        uses: 1823,
        effectiveness: 91,
        price: 29,
        creator: { name: 'Content Lab', avatar: '✍️' },
        tags: ['blog', 'content', 'SEO'],
        createdAt: '2024-09-20'
    },
    {
        id: 'chain-code-review',
        title: 'Code Review Pro',
        description: 'Comprehensive code review with fixes and documentation.',
        category: 'coding',
        stepCount: 4,
        steps: [
            {
                id: 1,
                name: 'Analysis',
                description: 'Analyze code structure and quality',
                prompt: 'Analyze the code for patterns, structure, complexity, and potential issues.',
                outputType: 'report'
            },
            {
                id: 2,
                name: 'Issues',
                description: 'Identify and categorize issues',
                prompt: 'List all issues found: bugs, security, performance, style. Categorize by severity.',
                outputType: 'list'
            },
            {
                id: 3,
                name: 'Fixes',
                description: 'Implement fixes for issues',
                prompt: 'Provide fixed code for each issue identified. Explain the changes.',
                outputType: 'code'
            },
            {
                id: 4,
                name: 'Docs',
                description: 'Update documentation',
                prompt: 'Generate updated documentation: function descriptions, usage examples, changelog.',
                outputType: 'documentation'
            }
        ],
        rating: 4.9,
        uses: 3124,
        effectiveness: 97,
        price: 19,
        creator: { name: 'Code Masters', avatar: '💻' },
        tags: ['code review', 'quality', 'best practices'],
        createdAt: '2024-10-05'
    },
    {
        id: 'chain-sales',
        title: 'Sales Email Sequence',
        description: 'Complete cold outreach sequence that converts.',
        category: 'business',
        stepCount: 6,
        steps: [
            {
                id: 1,
                name: 'Cold',
                description: 'Initial cold outreach email',
                prompt: 'Write a cold email that gets opened and read. Focus on their pain point, not your product.',
                outputType: 'email'
            },
            {
                id: 2,
                name: 'Follow-up',
                description: 'First follow-up email',
                prompt: 'Write a follow-up that adds value, not just "checking in". Include a new insight.',
                outputType: 'email'
            },
            {
                id: 3,
                name: 'Value',
                description: 'Value-add email with resource',
                prompt: 'Share something valuable: case study, guide, or insight relevant to their situation.',
                outputType: 'email'
            },
            {
                id: 4,
                name: 'Case Study',
                description: 'Social proof email',
                prompt: 'Share a relevant case study or testimonial that mirrors their situation.',
                outputType: 'email'
            },
            {
                id: 5,
                name: 'Close',
                description: 'Direct ask email',
                prompt: 'Make a clear, direct ask for a meeting with a specific date/time suggestion.',
                outputType: 'email'
            },
            {
                id: 6,
                name: 'Break-up',
                description: 'Break-up email',
                prompt: 'Final email that creates urgency and leaves door open for future.',
                outputType: 'email'
            }
        ],
        rating: 4.7,
        uses: 956,
        effectiveness: 86,
        price: 39,
        creator: { name: 'Sales Forge', avatar: '💰' },
        tags: ['sales', 'email', 'outreach'],
        createdAt: '2024-09-25'
    },
    {
        id: 'chain-meeting',
        title: 'Meeting Maximizer',
        description: 'Before, during, and after meeting optimization.',
        category: 'productivity',
        stepCount: 3,
        steps: [
            {
                id: 1,
                name: 'Prep',
                description: 'Pre-meeting preparation',
                prompt: 'Create meeting prep document: agenda, goals, background research, questions to ask.',
                outputType: 'document'
            },
            {
                id: 2,
                name: 'Notes',
                description: 'Meeting notes template',
                prompt: 'Create structured notes template with sections for decisions, action items, follow-ups.',
                outputType: 'template'
            },
            {
                id: 3,
                name: 'Actions',
                description: 'Post-meeting action items',
                prompt: 'Extract action items with owners, due dates, and next steps. Draft follow-up email.',
                outputType: 'summary'
            }
        ],
        rating: 4.8,
        uses: 2456,
        effectiveness: 93,
        price: 0,
        creator: { name: 'Efficiency Lab', avatar: '⏰' },
        tags: ['meetings', 'productivity', 'communication'],
        createdAt: '2024-10-10'
    },
    {
        id: 'chain-persona',
        title: 'Customer Persona Builder',
        description: 'Research-backed customer persona development.',
        category: 'business',
        stepCount: 4,
        steps: [
            {
                id: 1,
                name: 'Research',
                description: 'Gather customer insights',
                prompt: 'Analyze available data to identify patterns in customer behavior, needs, and motivations.',
                outputType: 'report'
            },
            {
                id: 2,
                name: 'Segment',
                description: 'Identify distinct segments',
                prompt: 'Identify 3-5 distinct customer segments based on the research.',
                outputType: 'analysis'
            },
            {
                id: 3,
                name: 'Profile',
                description: 'Build detailed personas',
                prompt: 'Create detailed persona profiles: demographics, goals, pains, behaviors, quotes.',
                outputType: 'personas'
            },
            {
                id: 4,
                name: 'Apply',
                description: 'Application guidelines',
                prompt: 'Create guidelines for using personas in product, marketing, and sales decisions.',
                outputType: 'guide'
            }
        ],
        rating: 4.6,
        uses: 1234,
        effectiveness: 85,
        price: 19,
        creator: { name: 'UX Research Pro', avatar: '👥' },
        tags: ['personas', 'research', 'strategy'],
        createdAt: '2024-09-28'
    },
    {
        id: 'chain-onboard',
        title: 'Employee Onboarding',
        description: 'Comprehensive new hire onboarding content.',
        category: 'business',
        stepCount: 5,
        steps: [
            {
                id: 1,
                name: 'Welcome',
                description: 'Welcome package',
                prompt: 'Create welcome email and first day instructions.',
                outputType: 'content'
            },
            {
                id: 2,
                name: 'Culture',
                description: 'Company culture guide',
                prompt: 'Create company culture document: values, norms, communication style.',
                outputType: 'document'
            },
            {
                id: 3,
                name: 'Role',
                description: 'Role expectations',
                prompt: 'Create role-specific guide: responsibilities, success metrics, key relationships.',
                outputType: 'document'
            },
            {
                id: 4,
                name: 'Tools',
                description: 'Tools and process guide',
                prompt: 'Create guide to tools, systems, and processes they\'ll use.',
                outputType: 'guide'
            },
            {
                id: 5,
                name: '30-60-90',
                description: '30-60-90 day plan',
                prompt: 'Create 30-60-90 day plan with milestones and success criteria.',
                outputType: 'plan'
            }
        ],
        rating: 4.5,
        uses: 876,
        effectiveness: 82,
        price: 29,
        creator: { name: 'HR Pro', avatar: '🤝' },
        tags: ['onboarding', 'HR', 'management'],
        createdAt: '2024-09-15'
    },
    {
        id: 'chain-pitch',
        title: 'Pitch Deck Builder',
        description: 'Investor-ready pitch deck from scratch.',
        category: 'business',
        stepCount: 6,
        steps: [
            {
                id: 1,
                name: 'Story',
                description: 'Define the narrative',
                prompt: 'Define the core narrative: problem, solution, why now, why you.',
                outputType: 'strategy'
            },
            {
                id: 2,
                name: 'Market',
                description: 'Market analysis',
                prompt: 'Analyze market size (TAM/SAM/SOM) and opportunity.',
                outputType: 'analysis'
            },
            {
                id: 3,
                name: 'Slides',
                description: 'Slide content',
                prompt: 'Write content for each slide: headline, bullets, speaker notes.',
                outputType: 'content'
            },
            {
                id: 4,
                name: 'Data',
                description: 'Supporting data',
                prompt: 'Identify and format key data points, metrics, and charts.',
                outputType: 'data'
            },
            {
                id: 5,
                name: 'FAQ',
                description: 'Investor FAQ',
                prompt: 'Prepare answers to likely investor questions.',
                outputType: 'FAQ'
            },
            {
                id: 6,
                name: 'Appendix',
                description: 'Supporting materials',
                prompt: 'Create appendix slides for deep-dive topics.',
                outputType: 'content'
            }
        ],
        rating: 4.8,
        uses: 1567,
        effectiveness: 89,
        price: 59,
        creator: { name: 'Pitch Pro', avatar: '📊' },
        tags: ['pitch deck', 'fundraising', 'startup'],
        createdAt: '2024-10-03'
    },
    {
        id: 'chain-research',
        title: 'Research Report',
        description: 'Comprehensive research report generation.',
        category: 'writing',
        stepCount: 5,
        steps: [
            {
                id: 1,
                name: 'Scope',
                description: 'Define research scope',
                prompt: 'Define research questions, methodology, and scope.',
                outputType: 'plan'
            },
            {
                id: 2,
                name: 'Gather',
                description: 'Information gathering',
                prompt: 'Compile and organize relevant information and data.',
                outputType: 'data'
            },
            {
                id: 3,
                name: 'Analyze',
                description: 'Analysis and synthesis',
                prompt: 'Analyze gathered information and identify key insights.',
                outputType: 'analysis'
            },
            {
                id: 4,
                name: 'Write',
                description: 'Report writing',
                prompt: 'Write the research report with executive summary, findings, and recommendations.',
                outputType: 'report'
            },
            {
                id: 5,
                name: 'Present',
                description: 'Presentation summary',
                prompt: 'Create presentation slides summarizing key findings.',
                outputType: 'presentation'
            }
        ],
        rating: 4.6,
        uses: 987,
        effectiveness: 84,
        price: 29,
        creator: { name: 'Research Lab', avatar: '🔬' },
        tags: ['research', 'analysis', 'report'],
        createdAt: '2024-09-22'
    },
    {
        id: 'chain-feature',
        title: 'Feature Spec Writer',
        description: 'Complete feature specification document.',
        category: 'coding',
        stepCount: 5,
        steps: [
            {
                id: 1,
                name: 'Problem',
                description: 'Problem definition',
                prompt: 'Define the problem and user need this feature addresses.',
                outputType: 'brief'
            },
            {
                id: 2,
                name: 'Stories',
                description: 'User stories',
                prompt: 'Write user stories with acceptance criteria.',
                outputType: 'stories'
            },
            {
                id: 3,
                name: 'Design',
                description: 'Technical design',
                prompt: 'Create technical design: architecture, data model, API spec.',
                outputType: 'design'
            },
            {
                id: 4,
                name: 'Tasks',
                description: 'Implementation tasks',
                prompt: 'Break down into implementation tasks with estimates.',
                outputType: 'tasks'
            },
            {
                id: 5,
                name: 'Test',
                description: 'Test plan',
                prompt: 'Create test plan with test cases and edge cases.',
                outputType: 'plan'
            }
        ],
        rating: 4.7,
        uses: 1345,
        effectiveness: 88,
        price: 19,
        creator: { name: 'Product Dev', avatar: '📝' },
        tags: ['product', 'specification', 'planning'],
        createdAt: '2024-10-08'
    },
    {
        id: 'chain-newsletter',
        title: 'Newsletter Creator',
        description: 'Weekly newsletter content creation.',
        category: 'creative',
        stepCount: 4,
        steps: [
            {
                id: 1,
                name: 'Curate',
                description: 'Content curation',
                prompt: 'Curate relevant content: articles, resources, tools to share.',
                outputType: 'list'
            },
            {
                id: 2,
                name: 'Write',
                description: 'Newsletter copy',
                prompt: 'Write newsletter sections: intro, featured content, quick hits.',
                outputType: 'content'
            },
            {
                id: 3,
                name: 'Subject',
                description: 'Subject line options',
                prompt: 'Generate 10 subject line options with open rate predictions.',
                outputType: 'options'
            },
            {
                id: 4,
                name: 'Preview',
                description: 'Preview text and social',
                prompt: 'Write preview text and social media promotion posts.',
                outputType: 'content'
            }
        ],
        rating: 4.5,
        uses: 876,
        effectiveness: 81,
        price: 0,
        creator: { name: 'Newsletter Pro', avatar: '📬' },
        tags: ['newsletter', 'email', 'content'],
        createdAt: '2024-09-30'
    },
    {
        id: 'chain-video',
        title: 'Video Script Builder',
        description: 'YouTube video script from idea to final draft.',
        category: 'creative',
        stepCount: 5,
        steps: [
            {
                id: 1,
                name: 'Hook',
                description: 'Video hook and intro',
                prompt: 'Create attention-grabbing hook and intro (first 30 seconds are crucial).',
                outputType: 'script'
            },
            {
                id: 2,
                name: 'Outline',
                description: 'Content outline',
                prompt: 'Create detailed content outline with timestamps.',
                outputType: 'outline'
            },
            {
                id: 3,
                name: 'Script',
                description: 'Full script',
                prompt: 'Write conversational script with B-roll suggestions.',
                outputType: 'script'
            },
            {
                id: 4,
                name: 'CTA',
                description: 'Call-to-action and outro',
                prompt: 'Write compelling CTA and memorable outro.',
                outputType: 'script'
            },
            {
                id: 5,
                name: 'SEO',
                description: 'Video SEO',
                prompt: 'Write title, description, tags for YouTube SEO.',
                outputType: 'content'
            }
        ],
        rating: 4.6,
        uses: 1234,
        effectiveness: 83,
        price: 19,
        creator: { name: 'Creator Academy', avatar: '🎬' },
        tags: ['video', 'YouTube', 'content'],
        createdAt: '2024-10-02'
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAINS };
}

