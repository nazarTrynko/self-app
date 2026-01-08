import { Song } from '../types';
export type { Song } from '../types';
import { aiMusicToolsSongs } from './ai-music-tools';
import { musicProductionSongs } from './music-production';
import { trendingTechSongs } from './trending-tech';
import { genreTutorialsSongs } from './genre-tutorials';
import { problemSolvingSongs } from './problem-solving';
import { comparisonsSongs } from './comparisons';
import { viralMemeSongs } from './viral-meme';
import { emotionalLifeSongs } from './emotional-life';
import { educationalSongs } from './educational';
import { longTailNicheSongs } from './long-tail-niche';

export const allSongs: Song[] = [
  ...aiMusicToolsSongs,
  ...musicProductionSongs,
  ...trendingTechSongs,
  ...genreTutorialsSongs,
  ...problemSolvingSongs,
  ...comparisonsSongs,
  ...viralMemeSongs,
  ...emotionalLifeSongs,
  ...educationalSongs,
  ...longTailNicheSongs,
];

export function getSongsByCategory(category: string): Song[] {
  return allSongs.filter(song => song.category === category);
}

export function getSongBySlug(category: string, slug: string): Song | undefined {
  return allSongs.find(song => song.category === category && song.slug === slug);
}

export function getRandomSongs(count: number): Song[] {
  const shuffled = [...allSongs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function searchSongs(query: string): Song[] {
  const lowercaseQuery = query.toLowerCase();
  return allSongs.filter(song =>
    song.title.toLowerCase().includes(lowercaseQuery) ||
    song.description.toLowerCase().includes(lowercaseQuery) ||
    song.targetKeywords.some(kw => kw.toLowerCase().includes(lowercaseQuery)) ||
    song.genre.toLowerCase().includes(lowercaseQuery)
  );
}

