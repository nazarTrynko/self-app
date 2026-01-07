/* ============================================
   AURUM — Creator Profiles Data
   Featured Creators
   ============================================ */

const CREATORS = [
    {
        id: 'creator-001',
        name: 'Sarah Chen',
        handle: 'sarahcodes',
        avatar: '👩‍💻',
        bio: 'Former Google engineer turned prompt engineer. Specializing in developer productivity.',
        verified: true,
        tier: 'gold',
        promptCount: 47,
        chainCount: 8,
        totalUses: 142567,
        rating: 4.9,
        earnings: '$12,450',
        expertise: ['coding', 'productivity', 'debugging'],
        specialties: ['Developer Tools', 'Code Review', 'Debugging', 'System Design'],
        featured: true,
        joinedAt: '2024-03-15',
        topPrompts: ['write-001', 'code-001'],
        social: {
            twitter: '@sarahcodes',
            linkedin: 'sarahchen'
        }
    },
    {
        id: 'creator-002',
        name: 'Marcus Webb',
        handle: 'marcuswrites',
        avatar: '✍️',
        bio: 'Content strategist who helped scale 3 startups to $10M+ ARR. Writing prompts that convert.',
        verified: true,
        tier: 'gold',
        promptCount: 32,
        chainCount: 5,
        totalUses: 98234,
        rating: 4.8,
        earnings: '$8,920',
        expertise: ['writing', 'copywriting', 'marketing'],
        specialties: ['Content Strategy', 'Copywriting', 'Blog Posts', 'Landing Pages'],
        featured: true,
        joinedAt: '2024-04-20',
        topPrompts: ['write-002', 'write-005'],
        social: {
            twitter: '@marcuswrites',
            linkedin: 'marcuswebb'
        }
    },
    {
        id: 'creator-003',
        name: 'Priya Sharma',
        handle: 'priyabuilds',
        avatar: '🏗️',
        bio: 'Staff engineer at Stripe. Building the future of code review and architecture.',
        verified: true,
        tier: 'gold',
        promptCount: 28,
        chainCount: 6,
        totalUses: 87654,
        rating: 4.9,
        earnings: '$15,230',
        expertise: ['coding', 'architecture', 'code review'],
        specialties: ['System Architecture', 'Code Review', 'Technical Design', 'APIs'],
        featured: true,
        joinedAt: '2024-02-10',
        topPrompts: ['code-002', 'code-003'],
        social: {
            twitter: '@priyabuilds',
            github: 'priyasharma'
        }
    },
    {
        id: 'creator-004',
        name: 'Alex Rivera',
        handle: 'alexstories',
        avatar: '📖',
        bio: 'Bestselling author and storytelling consultant. Teaching AI to tell better stories.',
        verified: true,
        promptCount: 19,
        totalUses: 45678,
        rating: 4.7,
        earnings: '$6,780',
        expertise: ['storytelling', 'creative writing', 'brand'],
        featured: false,
        joinedAt: '2024-05-05',
        topPrompts: ['write-004'],
        social: {
            twitter: '@alexstories',
            website: 'alexrivera.com'
        }
    },
    {
        id: 'creator-005',
        name: 'Diana Okonkwo',
        handle: 'dianasells',
        avatar: '📧',
        bio: 'Sales VP who built $50M pipelines. Email sequences that actually get responses.',
        verified: true,
        promptCount: 24,
        totalUses: 76543,
        rating: 4.9,
        earnings: '$11,340',
        expertise: ['sales', 'email', 'business'],
        featured: true,
        joinedAt: '2024-03-01',
        topPrompts: ['write-003', 'biz-005'],
        social: {
            twitter: '@dianasells',
            linkedin: 'dianaokonkwo'
        }
    },
    {
        id: 'creator-006',
        name: 'Jordan Kim',
        handle: 'jordancopies',
        avatar: '🎯',
        bio: 'Direct response copywriter with $20M in attributed revenue. Headlines that hook.',
        verified: true,
        promptCount: 31,
        totalUses: 89234,
        rating: 4.8,
        earnings: '$9,870',
        expertise: ['copywriting', 'headlines', 'conversion'],
        featured: true,
        joinedAt: '2024-04-12',
        topPrompts: ['write-005', 'misc-004'],
        social: {
            twitter: '@jordancopies'
        }
    },
    {
        id: 'creator-007',
        name: 'Dr. James Liu',
        handle: 'drlearns',
        avatar: '🎓',
        bio: 'Learning scientist and EdTech founder. Prompts that accelerate skill acquisition.',
        verified: true,
        promptCount: 16,
        totalUses: 34567,
        rating: 4.7,
        earnings: '$4,560',
        expertise: ['learning', 'education', 'productivity'],
        featured: false,
        joinedAt: '2024-06-01',
        topPrompts: ['prod-003'],
        social: {
            twitter: '@drlearns',
            linkedin: 'jamesliu'
        }
    },
    {
        id: 'creator-008',
        name: 'Nina Patel',
        handle: 'ninabrands',
        avatar: '🎨',
        bio: 'Brand strategist for Fortune 500s. Creating distinctive voices in the age of AI.',
        verified: true,
        promptCount: 22,
        totalUses: 56789,
        rating: 4.8,
        earnings: '$7,890',
        expertise: ['branding', 'voice', 'creative'],
        featured: false,
        joinedAt: '2024-05-20',
        topPrompts: ['create-001'],
        social: {
            twitter: '@ninabrands',
            instagram: 'ninabrands'
        }
    },
    {
        id: 'creator-009',
        name: 'Michael Park',
        handle: 'michaelpitches',
        avatar: '💼',
        bio: 'YC alum, helped 50+ startups raise $100M+. Pitch decks that close rounds.',
        verified: true,
        promptCount: 14,
        totalUses: 23456,
        rating: 4.9,
        earnings: '$18,920',
        expertise: ['fundraising', 'pitch decks', 'startups'],
        featured: true,
        joinedAt: '2024-02-28',
        topPrompts: ['biz-001'],
        social: {
            twitter: '@michaelpitches',
            linkedin: 'michaelpark'
        }
    },
    {
        id: 'creator-010',
        name: 'Elena Martinez',
        handle: 'elenarefactors',
        avatar: '🔧',
        bio: 'Principal engineer at Netflix. Clean code advocate and refactoring specialist.',
        verified: true,
        promptCount: 18,
        totalUses: 45678,
        rating: 4.7,
        earnings: '$5,670',
        expertise: ['refactoring', 'clean code', 'best practices'],
        featured: false,
        joinedAt: '2024-04-05',
        topPrompts: ['code-004'],
        social: {
            twitter: '@elenarefactors',
            github: 'elenamartinez'
        }
    },
    {
        id: 'creator-011',
        name: 'Tom Wilson',
        handle: 'tomtests',
        avatar: '🧪',
        bio: 'QA architect turned testing evangelist. Tests that actually catch bugs.',
        verified: true,
        promptCount: 21,
        totalUses: 67890,
        rating: 4.8,
        earnings: '$6,450',
        expertise: ['testing', 'TDD', 'quality'],
        featured: false,
        joinedAt: '2024-05-15',
        topPrompts: ['code-005'],
        social: {
            twitter: '@tomtests'
        }
    },
    {
        id: 'creator-012',
        name: 'Lisa Zhang',
        handle: 'lisastrategy',
        avatar: '📊',
        bio: 'McKinsey alum, startup advisor. Competitive analysis and strategic clarity.',
        verified: true,
        promptCount: 12,
        totalUses: 23456,
        rating: 4.7,
        earnings: '$4,230',
        expertise: ['strategy', 'analysis', 'business'],
        featured: false,
        joinedAt: '2024-06-10',
        topPrompts: ['biz-002'],
        social: {
            linkedin: 'lisazhang'
        }
    },
    {
        id: 'creator-013',
        name: 'Chris Taylor',
        handle: 'chrisnames',
        avatar: '💡',
        bio: 'Naming consultant for 200+ startups. Names that stick and sell.',
        verified: true,
        promptCount: 9,
        totalUses: 34567,
        rating: 4.7,
        earnings: '$5,120',
        expertise: ['naming', 'branding', 'creative'],
        featured: false,
        joinedAt: '2024-04-25',
        topPrompts: ['create-002'],
        social: {
            twitter: '@chrisnames'
        }
    },
    {
        id: 'creator-014',
        name: 'Rachel Kim',
        handle: 'racheldecides',
        avatar: '⚖️',
        bio: 'Decision scientist and executive coach. Clarity for complex choices.',
        verified: true,
        promptCount: 15,
        totalUses: 45678,
        rating: 4.9,
        earnings: '$4,890',
        expertise: ['decision making', 'analysis', 'productivity'],
        featured: false,
        joinedAt: '2024-05-30',
        topPrompts: ['prod-002'],
        social: {
            twitter: '@racheldecides',
            linkedin: 'rachelkim'
        }
    },
    {
        id: 'creator-015',
        name: 'Maya Rodriguez',
        handle: 'mayasocial',
        avatar: '📱',
        bio: 'Social media manager for 50+ brands. Content that builds communities.',
        verified: false,
        promptCount: 27,
        totalUses: 56789,
        rating: 4.6,
        earnings: '$3,450',
        expertise: ['social media', 'content', 'marketing'],
        featured: false,
        joinedAt: '2024-06-05',
        topPrompts: ['create-003'],
        social: {
            twitter: '@mayasocial',
            instagram: 'mayasocial'
        }
    },
    {
        id: 'creator-016',
        name: 'James Okonkwo',
        handle: 'jamesarchitects',
        avatar: '🏛️',
        bio: 'AWS Principal Engineer. System design that scales.',
        verified: true,
        promptCount: 11,
        totalUses: 23456,
        rating: 4.9,
        earnings: '$8,760',
        expertise: ['architecture', 'system design', 'cloud'],
        featured: false,
        joinedAt: '2024-03-20',
        topPrompts: ['code-003'],
        social: {
            twitter: '@jamesarchitects'
        }
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CREATORS };
}

