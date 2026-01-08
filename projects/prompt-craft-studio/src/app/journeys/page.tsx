'use client'

import { motion } from 'framer-motion'
import { Compass, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function JourneysPage() {
  return (
    <div className="min-h-screen bg-workshop-bg">
      <header className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Compass className="w-6 h-6 text-journeys-primary" />
          <h1 className="text-2xl font-display font-bold">Journeys</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-400">
            Guided prompt experiences that transform. Step-by-step adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-workshop opacity-50">
              <div className="h-48 bg-workshop-bg rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">Journey {i}</h3>
              <p className="text-sm text-gray-500">Coming in Phase 2</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

