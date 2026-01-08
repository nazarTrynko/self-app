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
import { Song } from '../types';

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

export const getSongsByCategory = (categoryId: string): Song[] => {
  return allSongs.filter(song => song.category === categoryId);
};

export const getSongBySlug = (slug: string): Song | undefined => {
  return allSongs.find(song => song.slug === slug);
};

export const getRandomSongs = (count: number): Song[] => {
  const shuffled = [...allSongs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const searchSongs = (query: string): Song[] => {
  const lowerQuery = query.toLowerCase();
  return allSongs.filter(song => 
    song.title.toLowerCase().includes(lowerQuery) ||
    song.description.toLowerCase().includes(lowerQuery) ||
    song.targetKeywords.some(kw => kw.toLowerCase().includes(lowerQuery)) ||
    song.genre.toLowerCase().includes(lowerQuery)
  );
};

export {
  aiMusicToolsSongs,
  musicProductionSongs,
  trendingTechSongs,
  genreTutorialsSongs,
  problemSolvingSongs,
  comparisonsSongs,
  viralMemeSongs,
  emotionalLifeSongs,
  educationalSongs,
  longTailNicheSongs,
};

