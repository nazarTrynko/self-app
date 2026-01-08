'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { FeaturedSongs } from '@/components/FeaturedSongs';
import { CategoryGrid } from '@/components/CategoryGrid';
import { GeneratorCTA } from '@/components/GeneratorCTA';
import { Stats } from '@/components/Stats';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4"
      >
        <Stats />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center gradient-text">Featured Song Ideas</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Handpicked SEO-optimized song concepts ready for AI music generation
          </p>
          <FeaturedSongs />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Browse by Category</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            10 categories, 100 song ideas, unlimited potential
          </p>
          <CategoryGrid />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-20 px-4"
      >
        <GeneratorCTA />
      </motion.section>
    </div>
  );
}

