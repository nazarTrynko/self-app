'use client';

import Link from 'next/link';

// Business metadata (hardcoded for client component)
const businesses = [
  { slug: '01-stealth-infoproduct', title: 'Stealth Infoproduct', tagline: 'Passive digital product income' },
  { slug: '02-ai-prompt-marketplace', title: 'AI Prompt Marketplace', tagline: 'Sell curated AI prompts' },
  { slug: '03-digital-template-library', title: 'Digital Template Library', tagline: 'Design template subscriptions' },
  { slug: '04-micro-course-aggregator', title: 'Micro Course Aggregator', tagline: 'Curated learning paths' },
  { slug: '05-automation-script-store', title: 'Automation Script Store', tagline: 'Sell time-saving automations' },
  { slug: '06-design-asset-marketplace', title: 'Design Asset Marketplace', tagline: 'Premium design resources' },
  { slug: '07-copywriting-templates', title: 'Copywriting Templates', tagline: 'Ready-to-use copy frameworks' },
  { slug: '08-niche-tool-directory', title: 'Niche Tool Directory', tagline: 'Curated software lists' },
  { slug: '09-community-access-pass', title: 'Community Access Pass', tagline: 'Paid communities' },
  { slug: '10-dfy-service-marketplace', title: 'DFY Service Marketplace', tagline: 'Done-for-you services' },
];

export default function StealthBusinessPage() {
  return (
    <div className="stealth-page">
      <header className="page-header">
        <Link href="/blueprints" className="back-link">
          ← Back to Blueprints
        </Link>
        <div className="page-badge">
          <span className="badge-dot"></span>
          <span>Stealth Business Blueprints</span>
        </div>
        <h1 className="page-title">10 Stealth Businesses</h1>
        <p className="page-description">
          Digital business blueprints for indie makers. Build automated income streams
          with minimal overhead and maximum leverage.
        </p>
      </header>

      <div className="business-grid">
        {businesses.map((biz) => {
          const num = biz.slug.split('-')[0];

          return (
            <Link
              key={biz.slug}
              href={`/blueprints/stealth-business/${biz.slug}`}
              className="business-card"
            >
              <span className="business-num">{num}</span>
              <h3 className="business-title">{biz.title}</h3>
              <p className="business-tagline">{biz.tagline}</p>
              <span className="business-arrow">→</span>
            </Link>
          );
        })}
      </div>

      <style jsx>{`
        .stealth-page {
          min-height: 100vh;
          padding: 40px 24px 80px;
        }

        .page-header {
          max-width: 800px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .back-link {
          display: inline-block;
          font-size: 0.875rem;
          color: #71717a;
          margin-bottom: 24px;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #fafafa;
        }

        .page-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #22c55e;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
        }

        .page-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          margin-bottom: 16px;
        }

        .page-description {
          font-size: 1.125rem;
          color: #71717a;
          line-height: 1.7;
        }

        .business-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .business-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }

        .business-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #22c55e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .business-card:hover {
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -12px rgba(34, 197, 94, 0.2);
        }

        .business-card:hover::before {
          transform: scaleX(1);
        }

        .business-num {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: rgba(34, 197, 94, 0.25);
          margin-bottom: 8px;
        }

        .business-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 8px;
          color: #fafafa;
        }

        .business-tagline {
          font-size: 0.875rem;
          color: #71717a;
          flex-grow: 1;
        }

        .business-arrow {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          font-size: 1.25rem;
          color: #22c55e;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .business-card:hover .business-arrow {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 768px) {
          .stealth-page {
            padding: 24px 16px 60px;
          }

          .business-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
