'use client';

import { motion } from 'framer-motion';

interface AdPlacementProps {
  type: 'sidebar' | 'banner' | 'inline' | 'interstitial';
  className?: string;
}

export function AdPlacement({ type, className = '' }: AdPlacementProps) {
  const sizes = {
    sidebar: 'w-full h-[600px]',
    banner: 'w-full h-[90px]',
    inline: 'w-full h-[250px]',
    interstitial: 'w-full max-w-md h-[400px]',
  };

  const labels = {
    sidebar: 'Sidebar Ad (300x600)',
    banner: 'Banner Ad (728x90)',
    inline: 'Inline Ad (300x250)',
    interstitial: 'Interstitial Ad',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${sizes[type]} ${className}`}
    >
      <div className="w-full h-full card-glass flex items-center justify-center text-foreground/30 text-sm border-2 border-dashed border-border">
        <div className="text-center">
          <p className="mb-1">{labels[type]}</p>
          <p className="text-xs">
            {/* 
              Replace this placeholder with your ad code:
              - Google AdSense
              - Carbon Ads
              - BuySellAds
              - Direct advertisers
            */}
            Ad Space
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Affiliate link component with tracking
interface AffiliateLinkProps {
  href: string;
  platform: 'suno' | 'udio' | 'other';
  children: React.ReactNode;
  className?: string;
}

export function AffiliateLink({ href, platform, children, className = '' }: AffiliateLinkProps) {
  // Add affiliate tracking parameters here
  // Example: const trackedUrl = `${href}?ref=seosongideas&utm_source=seosongideas`;
  
  const handleClick = () => {
    // Track affiliate click (integrate with analytics)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        platform,
        destination: href,
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

// Native ad component for in-feed placements
interface NativeAdProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  sponsored?: boolean;
}

export function NativeAd({ title, description, cta, href, sponsored = true }: NativeAdProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-glass p-6 relative"
    >
      {sponsored && (
        <span className="absolute top-2 right-2 text-[10px] text-foreground/30 uppercase tracking-wider">
          Sponsored
        </span>
      )}
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-foreground/60 mb-4">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="text-sm text-primary hover:underline"
      >
        {cta} →
      </a>
    </motion.div>
  );
}

