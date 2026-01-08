export interface Song {
  id: string;
  title: string;
  slug: string;
  category: string;
  genre: string;
  mood: string;
  targetKeywords: string[];
  sunoStyleTags: string[];
  lyricOutline: string;
  searchVolume: 'high' | 'medium' | 'low';
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

