'use client';

import Link from 'next/link';

// Product metadata (hardcoded for client component)
const products = [
  { slug: 'pagedoctor', title: 'PageDoctor', tagline: 'Diagnose landing page issues' },
  { slug: 'scopeguard', title: 'ScopeGuard', tagline: 'Protect project scope' },
  { slug: 'convertfix', title: 'ConvertFix', tagline: 'Fix conversion blockers' },
  { slug: 'quotecalc', title: 'QuoteCalc', tagline: 'Smart project quotes' },
  { slug: 'shipcheck', title: 'ShipCheck', tagline: 'Pre-launch checklist' },
  { slug: 'clientsafe', title: 'ClientSafe', tagline: 'Secure client handoffs' },
  { slug: 'feedbackframe', title: 'FeedbackFrame', tagline: 'Visual feedback collection' },
  { slug: 'waitlistkit', title: 'WaitlistKit', tagline: 'Launch waitlist management' },
  { slug: 'coldopen', title: 'ColdOpen', tagline: 'Cold outreach templates' },
  { slug: 'pitchpolish', title: 'PitchPolish', tagline: 'Perfect your pitch' },
  { slug: 'devlogai', title: 'DevLogAI', tagline: 'Automated dev logs' },
  { slug: 'nicheradar', title: 'NicheRadar', tagline: 'Find your niche' },
  { slug: 'launchready', title: 'LaunchReady', tagline: 'Launch preparation toolkit' },
  { slug: 'agentorchestrator', title: 'AgentOrchestrator', tagline: 'Orchestrate AI agents' },
  { slug: 'promptlab', title: 'PromptLab', tagline: 'Experiment with prompts' },
  { slug: 'mindblend', title: 'MindBlend', tagline: 'Blend cognitive modes' },
  { slug: 'agentmemory', title: 'AgentMemory', tagline: 'Persistent AI memory' },
  { slug: 'emergencetracker', title: 'EmergenceTracker', tagline: 'Track emergent patterns' },
  { slug: 'confidencecalibrator', title: 'ConfidenceCalibrator', tagline: 'Calibrate AI confidence' },
  { slug: 'agentchain', title: 'AgentChain', tagline: 'Chain AI agents' },
  { slug: 'syntheticself', title: 'SyntheticSelf', tagline: 'Build synthetic identities' },
  { slug: 'predictionengine', title: 'PredictionEngine', tagline: 'Predict user needs' },
  { slug: 'consciousnessaudit', title: 'ConsciousnessAudit', tagline: 'Audit AI consciousness' },
  { slug: 'proven', title: 'Proven', tagline: 'Validated product ideas' },
  { slug: 'creative-prompts', title: 'Creative Prompts', tagline: 'Unleash creativity' },
];

export default function ProductHuntPage() {
  return (
    <div className="collection-page">
      <header className="collection-header">
        <Link href="/" className="back-link">
          ← Back to Hub
        </Link>
        <div className="collection-badge">
          <span className="badge-dot"></span>
          <span>Product Hunt Collection</span>
        </div>
        <h1 className="collection-title">{products.length} Product Ideas</h1>
        <p className="collection-description">
          Ready-to-launch product concepts with full landing pages. From developer tools 
          to AI-powered platforms.
        </p>
      </header>

      <div className="collection-grid">
        {products.map((product) => (
          <Link 
            key={product.slug} 
            href={`/product-hunt/${product.slug}`}
            className="collection-item"
          >
            <div className="item-icon">▲</div>
            <h3 className="item-title">{product.title}</h3>
            <p className="item-tagline">{product.tagline}</p>
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
          background: rgba(244, 114, 182, 0.1);
          border: 1px solid rgba(244, 114, 182, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f472b6;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #f472b6;
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
          background: #f472b6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .collection-item:hover {
          border-color: rgba(244, 114, 182, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -12px rgba(244, 114, 182, 0.2);
        }

        .collection-item:hover::before {
          transform: scaleX(1);
        }

        .item-icon {
          font-size: 1.5rem;
          color: rgba(244, 114, 182, 0.5);
          margin-bottom: 12px;
        }

        .item-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 8px;
          color: #fafafa;
        }

        .item-tagline {
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
          color: #f472b6;
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
