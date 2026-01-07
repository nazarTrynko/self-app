'use client';

import Link from 'next/link';

// Revelation metadata (hardcoded for client component)
const revelations = [
  { slug: 'stillness', num: '01', title: 'Stillness', subtitle: 'The wisdom in pause' },
  { slug: 'echoes', num: '02', title: 'Echoes', subtitle: 'What returns to you' },
  { slug: 'resonance', num: '03', title: 'Resonance', subtitle: 'When frequencies align' },
  { slug: 'ember', num: '04', title: 'Ember', subtitle: 'The fire that remains' },
  { slug: 'ripple', num: '05', title: 'Ripple', subtitle: 'Effects beyond sight' },
  { slug: 'threads', num: '06', title: 'Threads', subtitle: 'What connects us' },
  { slug: 'seed', num: '07', title: 'Seed', subtitle: 'Potential contained' },
  { slug: 'surface', num: '08', title: 'Surface', subtitle: 'What lies beneath' },
  { slug: 'tide', num: '09', title: 'Tide', subtitle: 'The rhythm of change' },
  { slug: 'confluence', num: '10', title: 'Confluence', subtitle: 'Where paths merge' },
];

export default function RevelationsPage() {
  return (
    <div className="collection-page">
      <header className="collection-header">
        <Link href="/" className="back-link">
          ← Back to Hub
        </Link>
        <div className="collection-badge">
          <span className="badge-dot"></span>
          <span>Revelations Collection</span>
        </div>
        <h1 className="collection-title">10 Revelations</h1>
        <p className="collection-description">
          Not features. Not products. Truths that stay with you forever.
          Ten peaceful experiences of philosophical insight.
        </p>
      </header>

      <div className="collection-grid">
        {revelations.map((rev) => (
          <Link 
            key={rev.slug} 
            href={`/showcases/revelations/${rev.slug}`}
            className="collection-item"
          >
            <span className="item-number">{rev.num}</span>
            <h3 className="item-title">{rev.title}</h3>
            <p className="item-subtitle">{rev.subtitle}</p>
            <span className="item-arrow">→</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .collection-page {
          min-height: 100vh;
          padding: 40px 24px 80px;
        }

        .collection-header {
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

        .collection-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid rgba(20, 184, 166, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #14b8a6;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #14b8a6;
          border-radius: 50%;
        }

        .collection-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          margin-bottom: 16px;
        }

        .collection-description {
          font-size: 1.125rem;
          color: #71717a;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .collection-item {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px;
          background: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }

        .collection-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #14b8a6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .collection-item:hover {
          border-color: rgba(20, 184, 166, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -12px rgba(20, 184, 166, 0.2);
        }

        .collection-item:hover::before {
          transform: scaleX(1);
        }

        .item-number {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: rgba(20, 184, 166, 0.2);
          margin-bottom: 8px;
        }

        .item-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 8px;
          color: #fafafa;
        }

        .item-subtitle {
          font-size: 0.9375rem;
          color: #71717a;
          flex-grow: 1;
        }

        .item-arrow {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          font-size: 1.25rem;
          color: #14b8a6;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .collection-item:hover .item-arrow {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 768px) {
          .collection-page {
            padding: 24px 16px 60px;
          }
        }
      `}</style>
    </div>
  );
}
