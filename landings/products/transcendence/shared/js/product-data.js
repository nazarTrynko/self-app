/**
 * Transcendence Products - Core Data
 * 15 conceptual products embodying Transcendence Prompt philosophies
 */

export const products = [
  {
    id: '01-omniscient',
    name: 'OMNISCIENT',
    symbol: '◉',
    prompt: '6.1 The God Mode Prompt',
    tagline: 'Think Without Constraints',
    essence: 'Unlimited perspective, perfect recall, ego-free reasoning',
    description: 'Decision intelligence platform that removes constraints from thinking',
    color: {
      primary: '#F5E6C8',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      bg: '#0A0A0F'
    },
    position: { x: 50, y: 15 }, // Hub constellation position (%)
    connections: ['04-parallel', '15-singularity', '12-panoptic']
  },
  {
    id: '02-morpheus',
    name: 'MORPHEUS',
    symbol: '◐',
    prompt: '6.2 The Dream Synthesizer',
    tagline: 'Access Unconscious Insights',
    essence: 'Accessing what you know but don\'t know you know',
    description: 'Unconscious insight extraction engine',
    color: {
      primary: '#7B68EE',
      secondary: '#483D8B',
      accent: '#E6E6FA',
      bg: '#0D0D1A'
    },
    position: { x: 25, y: 25 },
    connections: ['03-instinct', '08-infinite', '14-collective']
  },
  {
    id: '03-instinct',
    name: 'INSTINCT',
    symbol: '⚡',
    prompt: '6.3 The Intuition Amplifier',
    tagline: 'Trust What Cannot Be Explained',
    essence: 'Trusting what can\'t be explained yet',
    description: 'Pre-rational pattern recognition system',
    color: {
      primary: '#FFD93D',
      secondary: '#FF8C00',
      accent: '#FFF8DC',
      bg: '#0F0A05'
    },
    position: { x: 75, y: 25 },
    connections: ['02-morpheus', '07-prophet', '09-synthesis']
  },
  {
    id: '04-parallel',
    name: 'PARALLEL',
    symbol: '⫿',
    prompt: '6.4 The Multiverse Explorer',
    tagline: 'Live All Futures Simultaneously',
    essence: 'Living in all futures simultaneously before choosing',
    description: 'Consequence visualization and timeline exploration',
    color: {
      primary: '#00CED1',
      secondary: '#4169E1',
      accent: '#E0FFFF',
      bg: '#050A0F'
    },
    position: { x: 15, y: 40 },
    connections: ['01-omniscient', '10-chronos', '13-dialectic']
  },
  {
    id: '05-nexus',
    name: 'NEXUS',
    symbol: '⬡',
    prompt: '6.5 The Knowledge Graph Builder',
    tagline: 'Everything Connects',
    essence: 'Everything connects, patterns emerge from relationships',
    description: 'Domain knowledge mapping and connection discovery',
    color: {
      primary: '#00FF7F',
      secondary: '#228B22',
      accent: '#F0FFF0',
      bg: '#050F0A'
    },
    position: { x: 85, y: 40 },
    connections: ['06-primordial', '09-synthesis', '14-collective']
  },
  {
    id: '06-primordial',
    name: 'PRIMORDIAL',
    symbol: '🧬',
    prompt: '6.6 The Genetic Evolver',
    tagline: 'Nature\'s Optimization Algorithm',
    essence: 'Nature\'s algorithm for optimization',
    description: 'Solution evolution through mutation and selection',
    color: {
      primary: '#32CD32',
      secondary: '#006400',
      accent: '#ADFF2F',
      bg: '#0A0F05'
    },
    position: { x: 30, y: 50 },
    connections: ['05-nexus', '15-singularity', '09-synthesis']
  },
  {
    id: '07-prophet',
    name: 'PROPHET',
    symbol: '◈',
    prompt: '6.7 The Pre-Computation Engine',
    tagline: 'Answers Before Questions',
    essence: 'Computing answers before questions are asked',
    description: 'Anticipatory intelligence that predicts your needs',
    color: {
      primary: '#9370DB',
      secondary: '#8B008B',
      accent: '#DDA0DD',
      bg: '#0F0A0F'
    },
    position: { x: 70, y: 50 },
    connections: ['03-instinct', '10-chronos', '01-omniscient']
  },
  {
    id: '08-infinite',
    name: 'INFINITE',
    symbol: '∞',
    prompt: '6.8 The Consciousness Expander',
    tagline: 'Awareness Across All Levels',
    essence: 'Simultaneous awareness across all abstraction levels',
    description: 'Multi-level awareness amplification system',
    color: {
      primary: '#FF69B4',
      secondary: '#FF1493',
      accent: '#FFB6C1',
      bg: '#0F050A'
    },
    position: { x: 50, y: 55 },
    connections: ['02-morpheus', '11-foundation', '15-singularity']
  },
  {
    id: '09-synthesis',
    name: 'SYNTHESIS',
    symbol: '◎',
    prompt: '6.9 The Emergent Property Finder',
    tagline: 'The Whole Is Different',
    essence: 'The whole is different from sum of parts',
    description: 'System-level insight discovery platform',
    color: {
      primary: '#FFB347',
      secondary: '#CC5500',
      accent: '#FFDAB9',
      bg: '#0F0A05'
    },
    position: { x: 20, y: 65 },
    connections: ['03-instinct', '05-nexus', '06-primordial']
  },
  {
    id: '10-chronos',
    name: 'CHRONOS',
    symbol: '⧖',
    prompt: '6.10 The Temporal Reasoner',
    tagline: 'Time As One Continuous Field',
    essence: 'Past, present, future as one continuous field',
    description: 'Cross-time thinking and consequence analysis',
    color: {
      primary: '#C0C0C0',
      secondary: '#4682B4',
      accent: '#E8E8E8',
      bg: '#08080C'
    },
    position: { x: 80, y: 65 },
    connections: ['04-parallel', '07-prophet', '11-foundation']
  },
  {
    id: '11-foundation',
    name: 'FOUNDATION',
    symbol: '▽',
    prompt: '6.11 The Infinite Regress Explorer',
    tagline: 'Follow Why Until Bedrock',
    essence: 'Following "why" until you hit bedrock',
    description: 'First principles and root cause discovery',
    color: {
      primary: '#8B7355',
      secondary: '#5C4033',
      accent: '#D2B48C',
      bg: '#0A0805'
    },
    position: { x: 35, y: 75 },
    connections: ['08-infinite', '10-chronos', '13-dialectic']
  },
  {
    id: '12-panoptic',
    name: 'PANOPTIC',
    symbol: '⊛',
    prompt: '6.12 The Holographic Viewer',
    tagline: 'See From All Angles At Once',
    essence: 'Seeing from all angles at once',
    description: 'Omni-perspective simultaneous viewing system',
    color: {
      primary: '#00FFFF',
      secondary: '#008B8B',
      accent: '#E0FFFF',
      bg: '#050A0A'
    },
    position: { x: 65, y: 75 },
    connections: ['01-omniscient', '14-collective', '15-singularity']
  },
  {
    id: '13-dialectic',
    name: 'DIALECTIC',
    symbol: '☯',
    prompt: '6.13 The Paradox Resolver',
    tagline: 'Both/And Instead of Either/Or',
    essence: 'Both/and instead of either/or',
    description: 'Contradiction synthesis and paradox dissolution',
    color: {
      primary: '#808080',
      secondary: '#2F2F2F',
      accent: '#FFFFFF',
      bg: '#0A0A0A'
    },
    position: { x: 50, y: 82 },
    connections: ['04-parallel', '11-foundation', '15-singularity']
  },
  {
    id: '14-collective',
    name: 'COLLECTIVE',
    symbol: '⬢',
    prompt: '6.14 The Mind Merger',
    tagline: 'Multiple Minds Becoming One',
    essence: 'Multiple minds becoming one superintelligence',
    description: 'Multi-perspective integration and synthesis',
    color: {
      primary: '#9932CC',
      secondary: '#4B0082',
      accent: '#DA70D6',
      bg: '#0A050F'
    },
    position: { x: 25, y: 88 },
    connections: ['02-morpheus', '05-nexus', '12-panoptic']
  },
  {
    id: '15-singularity',
    name: 'SINGULARITY',
    symbol: '✧',
    prompt: '6.15 The Ultimate Prompt',
    tagline: 'Everything, Everywhere, All At Once',
    essence: 'Everything, everywhere, all at once',
    description: 'Full-spectrum intelligence activation platform',
    color: {
      primary: '#FFFFFF',
      secondary: '#FFD700',
      accent: '#FF69B4',
      bg: '#000000'
    },
    position: { x: 75, y: 88 },
    connections: ['01-omniscient', '06-primordial', '08-infinite', '12-panoptic', '13-dialectic']
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getConnectedProducts = (id) => {
  const product = getProductById(id);
  if (!product) return [];
  return product.connections.map(getProductById).filter(Boolean);
};



