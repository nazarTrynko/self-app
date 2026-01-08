/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Workshop aesthetic - dark, craft-focused
        workshop: {
          bg: '#0f1114',
          surface: '#16181d',
          card: '#1c1f26',
          border: '#2a2d35',
        },
        // Pillar colors (like Observatory chambers)
        studio: {
          primary: '#3b82f6',
          accent: '#60a5fa',
          bg: 'rgba(59, 130, 246, 0.1)',
        },
        alchemist: {
          primary: '#8b5cf6',
          accent: '#a78bfa',
          bg: 'rgba(139, 92, 246, 0.1)',
        },
        journeys: {
          primary: '#10b981',
          accent: '#34d399',
          bg: 'rgba(16, 185, 129, 0.1)',
        },
        dna: {
          primary: '#f59e0b',
          accent: '#fbbf24',
          bg: 'rgba(245, 158, 11, 0.1)',
        },
        marketplace: {
          primary: '#ef4444',
          accent: '#f87171',
          bg: 'rgba(239, 68, 68, 0.1)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

