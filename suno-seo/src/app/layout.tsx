import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: { default: 'SEO Song Ideas | AI Music Generator Prompts', template: '%s | SEO Song Ideas' },
  description: '100 SEO-optimized song ideas for AI music generators like Suno and Udio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="fixed inset-0 grid-bg pointer-events-none" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

