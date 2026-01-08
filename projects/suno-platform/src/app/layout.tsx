import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: {
    default: 'SEO Song Ideas | AI Music Generator Prompts for Suno & Udio',
    template: '%s | SEO Song Ideas',
  },
  description: 'Discover 100 SEO-optimized song ideas for AI music generators like Suno and Udio. Get prompts, lyrics, and keywords to make your AI-generated music rank.',
  keywords: ['ai music generator', 'suno prompts', 'udio prompts', 'ai music ideas', 'seo music', 'ai songwriting'],
  authors: [{ name: 'SEO Song Ideas' }],
  creator: 'SEO Song Ideas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seosongideas.com',
    title: 'SEO Song Ideas | AI Music Generator Prompts',
    description: 'Discover 100 SEO-optimized song ideas for AI music generators',
    siteName: 'SEO Song Ideas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Song Ideas | AI Music Generator Prompts',
    description: 'Discover 100 SEO-optimized song ideas for AI music generators',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="fixed inset-0 grid-bg pointer-events-none" />
        <div className="fixed inset-0 noise-bg pointer-events-none" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

