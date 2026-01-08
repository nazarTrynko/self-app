'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { SongCard } from '@/components/SongCard';
import { getSongsByCategory } from '@/data/songs';
import { categories } from '@/data/categories';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  
  const category = categories.find((c) => c.id === categoryId);
  const songs = getSongsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link href="/songs" className="button-primary">
            Browse All Songs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-foreground/60 mb-8"
        >
          <Link href="/songs" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            All Songs
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{category.name}</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-4xl mb-4`}>
            {category.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            {category.description}
          </p>
          <p className="mt-4 text-foreground/40">
            {songs.length} song ideas in this category
          </p>
        </motion.div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <SongCard key={song.id} song={song} index={index} />
          ))}
        </div>

        {/* Other categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories
              .filter((c) => c.id !== categoryId)
              .slice(0, 5)
              .map((cat) => (
                <Link key={cat.id} href={`/songs/${cat.id}`}>
                  <div className="card-glass p-4 text-center hover:border-primary/30 transition-all">
                    <span className="text-2xl mb-2 block">{cat.icon}</span>
                    <span className="text-sm">{cat.name}</span>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

