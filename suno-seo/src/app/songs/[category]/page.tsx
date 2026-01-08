'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { getSongsByCategory } from '@/data/songs';
import { getCategoryById } from '@/data/categories';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const categoryData = getCategoryById(category);
  const songs = getSongsByCategory(category);

  if (!categoryData || songs.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/songs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all songs
        </Link>

        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">{categoryData.icon}</span>
          <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
          <p className="text-foreground/60">{categoryData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/songs/${song.category}/${song.slug}`}>
                <div className="card-glass p-6 h-full hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag">{song.genre}</span>
                    {song.searchVolume === 'high' && (
                      <span className="flex items-center gap-1 text-xs text-emerald-400">
                        <TrendingUp className="w-3 h-3" /> High Vol
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{song.title}</h3>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-4">{song.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {song.targetKeywords.slice(0, 3).map(kw => (
                      <span key={kw} className="text-xs px-2 py-0.5 bg-card rounded text-foreground/50">{kw}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

