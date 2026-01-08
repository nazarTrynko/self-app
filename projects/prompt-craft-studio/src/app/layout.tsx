import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prompt Craft Studio - The Unified Platform for Prompt Crafters',
  description: 'Design, transform, teach, and monetize your prompt craft. Visual prompt builder, transformation engine, guided journeys, and marketplace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

