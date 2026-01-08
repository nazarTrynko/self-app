'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wand2, Sparkles, Compass, Dna, Store, Home } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Workshop', icon: Home },
  { href: '/studio', label: 'Studio', icon: Wand2 },
  { href: '/alchemist', label: 'Alchemist', icon: Sparkles },
  { href: '/journeys', label: 'Journeys', icon: Compass },
  { href: '/dna', label: 'DNA', icon: Dna },
  { href: '/marketplace', label: 'Marketplace', icon: Store },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  isActive
                    ? 'border-studio-primary text-studio-primary'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

