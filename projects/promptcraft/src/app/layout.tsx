import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptCraft - Master the Art of AI Conversation',
  description: 'Transform your prompts from basic to brilliant. The Alchemist analyzes and improves your AI prompts, showing you exactly why each change makes them more powerful.',
  keywords: ['AI prompts', 'prompt engineering', 'ChatGPT', 'Claude', 'prompt improvement', 'AI tools'],
  authors: [{ name: 'PromptCraft' }],
  openGraph: {
    title: 'PromptCraft - Master the Art of AI Conversation',
    description: 'Transform your prompts from basic to brilliant with The Alchemist.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PromptCraft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptCraft - Master the Art of AI Conversation',
    description: 'Transform your prompts from basic to brilliant with The Alchemist.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
