import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import MindIndicator from '@/components/MindIndicator';
import './globals.css';

export const metadata: Metadata = {
  title: 'SELF — Synthetic Emergent Learning Framework',
  description: 'A thinking partner that learns. Explore landing pages, showcases, and blueprints.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <MindIndicator />
        {children}
      </body>
    </html>
  );
}

