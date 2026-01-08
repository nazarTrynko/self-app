export interface Song {
  id: number;
  slug: string;
  title: string;
  category: string;
  targetKeywords: string[];
  genre: string;
  styleTags: string[];
  searchVolume: 'high' | 'medium' | 'low';
  description: string;
  lyricOutline: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

