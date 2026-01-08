'use client';

import { motion } from 'framer-motion';
import { Music, Target, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Music,
    value: '100',
    label: 'Song Ideas',
    gradient: 'from-primary to-purple-400',
  },
  {
    icon: Target,
    value: '500+',
    label: 'Keywords Targeted',
    gradient: 'from-accent-cyan to-blue-400',
  },
  {
    icon: TrendingUp,
    value: '10',
    label: 'Categories',
    gradient: 'from-accent-pink to-rose-400',
  },
  {
    icon: Users,
    value: '∞',
    label: 'Discovery Potential',
    gradient: 'from-emerald-500 to-green-400',
  },
];

export function Stats() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-glass p-6 text-center group hover:border-primary/30 transition-all duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-foreground/60">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

