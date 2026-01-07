'use client';

import Link from 'next/link';

export default function BlueprintsPage() {
  return (
    <div className="blueprints-page">
      <header className="page-header">
        <Link href="/" className="back-link">
          ← Back to Hub
        </Link>
        <div className="page-badge">
          <span className="badge-dot"></span>
          <span>Blueprints Collection</span>
        </div>
        <h1 className="page-title">Blueprints</h1>
        <p className="page-description">
          Comprehensive specifications and technical blueprints for building products.
        </p>
      </header>

      <div className="blueprints-grid">
        <Link href="/blueprints/mobile-apps" className="blueprint-card">
          <div className="card-icon">📱</div>
          <span className="card-count">81</span>
          <h3 className="card-title">Mobile App Ideas</h3>
          <p className="card-description">
            Comprehensive app specifications with technical details, 
            monetization strategies, and UI concepts.
          </p>
          <span className="card-arrow">→</span>
        </Link>

        <Link href="/blueprints/stealth-business" className="blueprint-card">
          <div className="card-icon">🥷</div>
          <span className="card-count">10</span>
          <h3 className="card-title">Stealth Business</h3>
          <p className="card-description">
            Digital business blueprints for indie makers. 
            Templates, marketplaces, and automated income streams.
          </p>
          <span className="card-arrow">→</span>
        </Link>
      </div>

      <style jsx>{`
        .blueprints-page {
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

        .blueprints-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .blueprint-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px;
          background: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }

        .blueprint-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #22c55e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .blueprint-card:hover {
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-6px);
          box-shadow: 0 16px 48px -12px rgba(34, 197, 94, 0.15);
        }

        .blueprint-card:hover::before {
          transform: scaleX(1);
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .card-count {
          position: absolute;
          top: 32px;
          right: 32px;
          font-family: 'Fraunces', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: rgba(34, 197, 94, 0.15);
        }

        .card-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 12px;
          color: #fafafa;
        }

        .card-description {
          font-size: 0.9375rem;
          color: #71717a;
          line-height: 1.6;
          flex-grow: 1;
        }

        .card-arrow {
          position: absolute;
          right: 32px;
          bottom: 32px;
          font-size: 1.5rem;
          color: #22c55e;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s ease;
        }

        .blueprint-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .blueprints-page {
            padding: 24px 16px 60px;
          }

          .blueprints-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

