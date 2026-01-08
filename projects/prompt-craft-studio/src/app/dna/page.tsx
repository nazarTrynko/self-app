'use client'

import { motion } from 'framer-motion'
import { Dna, BookOpen, Beaker, TrendingUp } from 'lucide-react'

export default function DnaPage() {
  return (
    <div className="min-h-screen bg-workshop-bg">
      <header className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Dna className="w-6 h-6 text-dna-primary" />
          <h1 className="text-2xl font-display font-bold">DNA</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Prompt Science</h2>
          <p className="text-xl text-gray-400">
            The science of what works. Patterns, components, and proven structures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-workshop text-center">
            <BookOpen className="w-12 h-12 text-dna-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Pattern Library</h3>
            <p className="text-sm text-gray-500">Coming in Phase 2</p>
          </div>
          <div className="card-workshop text-center">
            <Beaker className="w-12 h-12 text-dna-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Component Library</h3>
            <p className="text-sm text-gray-500">Coming in Phase 2</p>
          </div>
          <div className="card-workshop text-center">
            <TrendingUp className="w-12 h-12 text-dna-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Effectiveness Metrics</h3>
            <p className="text-sm text-gray-500">Coming in Phase 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

