'use client';

import Link from 'next/link';

// Categories with their app counts
const categories = [
  { id: '01-sensor-tools', name: 'Sensor Tools', count: 8, icon: '📡' },
  { id: '02-camera-vision', name: 'Camera & Vision', count: 8, icon: '📷' },
  { id: '03-audio-sound', name: 'Audio & Sound', count: 7, icon: '🎵' },
  { id: '04-offline-ai', name: 'Offline AI', count: 6, icon: '🤖' },
  { id: '05-data-vaults', name: 'Data Vaults', count: 5, icon: '🔐' },
  { id: '06-health-body', name: 'Health & Body', count: 6, icon: '💪' },
  { id: '07-productivity', name: 'Productivity', count: 7, icon: '⚡' },
  { id: '08-creative', name: 'Creative', count: 6, icon: '🎨' },
  { id: '09-professional', name: 'Professional', count: 7, icon: '💼' },
  { id: '10-education', name: 'Education', count: 5, icon: '📚' },
  { id: '11-gaming', name: 'Gaming', count: 5, icon: '🎮' },
  { id: '12-communication', name: 'Communication', count: 4, icon: '💬' },
  { id: '13-finance', name: 'Finance', count: 5, icon: '💰' },
  { id: '14-travel', name: 'Travel', count: 2, icon: '✈️' },
  { id: '15-home-life', name: 'Home & Life', count: 3, icon: '🏠' },
  { id: '16-security', name: 'Security', count: 3, icon: '🛡️' },
];

export default function MobileAppsPage() {
  const totalApps = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="mobile-apps-page">
      <header className="page-header">
        <Link href="/blueprints" className="back-link">
          ← Back to Blueprints
        </Link>
        <div className="page-badge">
          <span className="badge-dot"></span>
          <span>Mobile App Blueprints</span>
        </div>
        <h1 className="page-title">{totalApps} App Ideas</h1>
        <p className="page-description">
          Comprehensive app specifications organized by category.
          Each includes technical details, monetization strategies, and UI concepts.
        </p>
      </header>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <span className="category-count">{cat.count}</span>
            <h3 className="category-title">{cat.name}</h3>
            <p className="category-id">{cat.id}</p>
          </div>
        ))}
      </div>

      <div className="info-box">
        <p>
          📋 These blueprints are markdown files with detailed specifications.
          <br />
          View them in the{' '}
          <code>landings/blueprints/mobile-apps/</code> directory.
        </p>
      </div>

      <style jsx>{`
        .mobile-apps-page {
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto 48px;
        }

        .category-card {
          position: relative;
          padding: 24px;
          background: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-2px);
        }

        .category-icon {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .category-count {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: rgba(34, 197, 94, 0.3);
        }

        .category-title {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 4px;
          color: #fafafa;
        }

        .category-id {
          font-size: 0.75rem;
          color: #52525b;
          font-family: monospace;
        }

        .info-box {
          max-width: 600px;
          margin: 0 auto;
          padding: 24px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          text-align: center;
        }

        .info-box p {
          font-size: 0.9375rem;
          color: #a78bfa;
          line-height: 1.7;
        }

        .info-box code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8125rem;
        }

        @media (max-width: 768px) {
          .mobile-apps-page {
            padding: 24px 16px 60px;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

