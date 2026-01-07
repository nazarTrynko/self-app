'use client';

import Link from 'next/link';

// Masterpiece metadata (hardcoded for client component)
const masterpieces = [
  { slug: '01-void', title: 'The Void', subtitle: 'Where absence becomes presence' },
  { slug: '02-inversion', title: 'The Inversion', subtitle: 'Turn everything inside out' },
  { slug: '03-dissolution', title: 'The Dissolution', subtitle: 'Let boundaries dissolve' },
  { slug: '04-paradox', title: 'The Paradox', subtitle: 'Hold contradictions' },
  { slug: '05-alchemy', title: 'The Alchemy', subtitle: 'Transform the ordinary' },
  { slug: '06-memento', title: 'The Memento', subtitle: 'Remember what matters' },
  { slug: '07-lineage', title: 'The Lineage', subtitle: 'Honor your roots' },
  { slug: '08-adversary', title: 'The Adversary', subtitle: 'Embrace opposition' },
  { slug: '09-emergence', title: 'The Emergence', subtitle: 'Let patterns arise' },
  { slug: '10-threshold', title: 'The Threshold', subtitle: 'Cross the boundary' },
  { slug: '11-signal', title: 'The Signal', subtitle: 'Find the pattern' },
  { slug: '12-price', title: 'The Price', subtitle: 'Nothing is free' },
  { slug: '13-silence', title: 'The Silence', subtitle: 'Listen deeper' },
  { slug: '14-witness', title: 'The Witness', subtitle: 'Observe without judgment' },
  { slug: '15-debt', title: 'The Debt', subtitle: 'What do you owe?' },
  { slug: '16-loop', title: 'The Loop', subtitle: 'Break the cycle' },
  { slug: '17-harvest', title: 'The Harvest', subtitle: 'Reap what you sow' },
  { slug: '18-exile', title: 'The Exile', subtitle: 'Find belonging in displacement' },
  { slug: '19-compass', title: 'The Compass', subtitle: 'Find true north' },
  { slug: '20-bridge', title: 'The Bridge', subtitle: 'Connect the shores' },
  { slug: '21-breath', title: 'The Breath', subtitle: 'Life in motion' },
  { slug: '22-anchor', title: 'The Anchor', subtitle: 'Hold steady' },
  { slug: '23-mantra', title: 'The Mantra', subtitle: 'Repeat until real' },
  { slug: '24-pulse', title: 'The Pulse', subtitle: 'Feel the rhythm' },
  { slug: '25-clarity', title: 'The Clarity', subtitle: 'See through the fog' },
];

export default function MasterpiecesPage() {
  return (
    <div className="collection-page">
      <header className="collection-header">
        <Link href="/" className="back-link">
          ← Back to Hub
        </Link>
        <div className="collection-badge" data-collection="masters">
          <span className="badge-dot"></span>
          <span>Masterpieces Collection</span>
        </div>
        <h1 className="collection-title">25 Masterpieces</h1>
        <p className="collection-description">
          Interfaces that change how you think. Each one inverts a fundamental 
          assumption about mind, self, or reality.
        </p>
      </header>

      <div className="collection-grid">
        {masterpieces.map((mp) => {
          const num = mp.slug.split('-')[0];
          
          return (
            <Link 
              key={mp.slug} 
              href={`/showcases/masterpieces/${mp.slug}`}
              className="collection-item"
              data-collection="masters"
            >
              <span className="item-number">{num}</span>
              <h3 className="item-title">{mp.title}</h3>
              <p className="item-subtitle">{mp.subtitle}</p>
              <span className="item-arrow">→</span>
            </Link>
          );
        })}
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
          background: rgba(201, 162, 39, 0.1);
          border: 1px solid rgba(201, 162, 39, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a227;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #c9a227;
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
          max-width: 1400px;
          margin: 0 auto;
        }

        .collection-item {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 24px;
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
          background: #c9a227;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .collection-item:hover {
          border-color: rgba(201, 162, 39, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -12px rgba(201, 162, 39, 0.2);
        }

        .collection-item:hover::before {
          transform: scaleX(1);
        }

        .item-number {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: rgba(201, 162, 39, 0.3);
          margin-bottom: 8px;
        }

        .item-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 8px;
          color: #fafafa;
        }

        .item-subtitle {
          font-size: 0.875rem;
          color: #71717a;
          flex-grow: 1;
        }

        .item-arrow {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          font-size: 1.25rem;
          color: #c9a227;
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

          .collection-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
