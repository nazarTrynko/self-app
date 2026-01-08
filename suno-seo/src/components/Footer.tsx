import Link from 'next/link';
import { Music2, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
              <Music2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">SEO Songs</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <Link href="/songs" className="hover:text-foreground">Songs</Link>
            <Link href="/generator" className="hover:text-foreground">Generator</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground/60 hover:text-foreground"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-foreground/60 hover:text-foreground"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} SEO Songs. Built for AI music creators.
        </div>
      </div>
    </footer>
  );
}

