'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { categories } from '@/data/categories';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
          className="group"
        >
          <Link href={`/songs/${category.id}`}>
            <div className="card-glass p-5 h-full transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <span className="text-3xl mb-3 block">{category.icon}</span>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-foreground/50 mb-3 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  10 songs
                  <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

