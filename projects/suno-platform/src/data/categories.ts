export const categories = [
  {
    id: 'ai-music-tools',
    name: 'AI Music Tools',
    description: 'Songs about AI music generation platforms, APIs, and tools',
    icon: '🤖',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'music-production',
    name: 'Music Production',
    description: 'Tutorials and tips for making beats and producing music',
    icon: '🎛️',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'trending-tech',
    name: 'Trending Tech',
    description: 'Songs about the latest AI and tech trends',
    icon: '🚀',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'genre-tutorials',
    name: 'Genre Tutorials',
    description: 'Learn specific music genres through song',
    icon: '🎸',
    gradient: 'from-orange-500 to-amber-600'
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    description: 'Troubleshooting guides set to music',
    icon: '🔧',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    id: 'comparisons',
    name: 'Comparisons',
    description: 'Tool comparisons and reviews in song form',
    icon: '⚖️',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'viral-meme',
    name: 'Viral & Meme',
    description: 'Trending topics and meme culture',
    icon: '🔥',
    gradient: 'from-red-500 to-orange-600'
  },
  {
    id: 'emotional-life',
    name: 'Emotional & Life',
    description: 'Relatable life moments for creators and coders',
    icon: '💫',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'educational',
    name: 'Educational',
    description: 'Music theory and learning concepts through melody',
    icon: '📚',
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    id: 'long-tail-niche',
    name: 'Long-tail Niche',
    description: 'Specific topics with low competition keywords',
    icon: '🎯',
    gradient: 'from-slate-500 to-gray-600'
  }
] as const;

export type CategoryId = typeof categories[number]['id'];

