import { Category } from './types';

export const categories: Category[] = [
  { id: 'ai-music-tools', name: 'AI Music Tools', icon: '🤖', description: 'Songs about AI music generation platforms, APIs, and tools' },
  { id: 'music-production', name: 'Music Production', icon: '🎛️', description: 'Tutorials and tips for making beats and producing music' },
  { id: 'trending-tech', name: 'Trending Tech', icon: '🚀', description: 'Songs about the latest AI and tech trends' },
  { id: 'genre-tutorials', name: 'Genre Tutorials', icon: '🎸', description: 'Learn specific music genres through song' },
  { id: 'problem-solving', name: 'Problem Solving', icon: '🔧', description: 'Troubleshooting guides set to music' },
  { id: 'comparisons', name: 'Comparisons', icon: '⚖️', description: 'Tool comparisons and reviews in song form' },
  { id: 'viral-meme', name: 'Viral & Meme', icon: '🔥', description: 'Trending topics and meme culture' },
  { id: 'emotional-life', name: 'Emotional & Life', icon: '💫', description: 'Relatable life moments for creators and coders' },
  { id: 'educational', name: 'Educational', icon: '📚', description: 'Music theory and learning concepts through melody' },
  { id: 'long-tail-niche', name: 'Long-tail Niche', icon: '🎯', description: 'Specific topics with low competition keywords' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

