import Link from 'next/link';
import HomeClient from '@/components/HomeClient';

export default function HomePage() {
  return (
    <>
      <HomeClient />
      
      {/* Collections Section */}
      <section className="collections" id="collections">
        <div className="section-header">
          <p className="section-label">Explore the Collection</p>
          <h2 className="section-title">Six Journeys</h2>
        </div>

        <div className="collections-grid">
          {/* SELF Landings */}
          <Link href="#landings" className="collection-card" data-collection="main" scroll={false}>
            <div className="collection-header">
              <div className="collection-icon">✦</div>
              <span className="collection-count">10</span>
            </div>
            <span className="collection-label">Visual Exploration</span>
            <h3 className="collection-title">SELF Landings</h3>
            <p className="collection-description">
              Ten distinct aesthetic interpretations of the framework—from brutalist minimalism 
              to bioluminescent depths.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">Brutalist</span>
              <span className="preview-tag">Zen</span>
              <span className="preview-tag">Noir</span>
              <span className="preview-tag">Terminal</span>
              <span className="preview-tag">+6 more</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                View Collection
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Masterpieces */}
          <Link href="/showcases/masterpieces" className="collection-card" data-collection="masters">
            <div className="collection-header">
              <div className="collection-icon">◆</div>
              <span className="collection-count">25</span>
            </div>
            <span className="collection-label">Cognitive Technologies</span>
            <h3 className="collection-title">25 Masterpieces</h3>
            <p className="collection-description">
              Interfaces that change how you think. Each one inverts a fundamental 
              assumption about mind, self, or reality.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">The Void</span>
              <span className="preview-tag">The Breath</span>
              <span className="preview-tag">The Clarity</span>
              <span className="preview-tag">+22 more</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                View Collection
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Revelations */}
          <Link href="/showcases/revelations" className="collection-card" data-collection="revelations">
            <div className="collection-header">
              <div className="collection-icon">○</div>
              <span className="collection-count">10</span>
            </div>
            <span className="collection-label">Moments of Understanding</span>
            <h3 className="collection-title">10 Revelations</h3>
            <p className="collection-description">
              Not features. Not products. Truths that stay with you forever. 
              Ten peaceful experiences of philosophical insight.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">Stillness</span>
              <span className="preview-tag">Echoes</span>
              <span className="preview-tag">Resonance</span>
              <span className="preview-tag">+7 more</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                View Collection
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Product Hunt Ideas */}
          <Link href="/product-hunt" className="collection-card" data-collection="ph">
            <div className="collection-header">
              <div className="collection-icon">▲</div>
              <span className="collection-count">25</span>
            </div>
            <span className="collection-label">Micro-SaaS Ideas</span>
            <h3 className="collection-title">25 Product Ideas</h3>
            <p className="collection-description">
              Ready-to-launch product concepts with full landing pages. From developer tools 
              to AI-powered platforms.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">PageDoctor</span>
              <span className="preview-tag">PromptLab</span>
              <span className="preview-tag">MindBlend</span>
              <span className="preview-tag">+22 more</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                View Collection
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* App Ideas */}
          <Link href="/blueprints" className="collection-card" data-collection="ideas">
            <div className="collection-header">
              <div className="collection-icon">📱</div>
              <span className="collection-count">81</span>
            </div>
            <span className="collection-label">Mobile App Blueprints</span>
            <h3 className="collection-title">81 App Ideas</h3>
            <p className="collection-description">
              Comprehensive app specifications with technical details, monetization strategies, 
              and UI concepts. From sensor tools to offline AI.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">Sensors</span>
              <span className="preview-tag">Camera/Vision</span>
              <span className="preview-tag">Audio</span>
              <span className="preview-tag">+11 categories</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                Browse Ideas
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Pro PWAs */}
          <Link href="/products/pro-pwas" className="collection-card" data-collection="pro-pwas">
            <div className="collection-header">
              <div className="collection-icon">🛠️</div>
              <span className="collection-count">5</span>
            </div>
            <span className="collection-label">Field Worker Tools</span>
            <h3 className="collection-title">5 Pro PWAs</h3>
            <p className="collection-description">
              Professional mobile tools for contractors, technicians, and field workers. 
              One-time purchase. Works offline.
            </p>
            <div className="collection-preview">
              <span className="preview-tag">Quote Builder</span>
              <span className="preview-tag">Delivery Proof</span>
              <span className="preview-tag">Service Ticket</span>
              <span className="preview-tag">+2 more</span>
            </div>
            <div className="collection-footer">
              <span className="collection-cta">
                View Tools
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="collection-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* SELF Landings Quick Access */}
      <section className="collections" id="landings">
        <div className="section-header">
          <p className="section-label">SELF Landings Collection</p>
          <h2 className="section-title">10 Aesthetic Visions</h2>
        </div>

        <div className="self-quick-nav">
          {[
            { num: '00', name: 'Original', slug: 'original' },
            { num: '01', name: 'Brutalist', slug: 'brutalist' },
            { num: '02', name: 'Zen MA', slug: 'zen-ma' },
            { num: '03', name: 'Noir Cinema', slug: 'noir-cinema' },
            { num: '04', name: 'Terminal', slug: 'terminal' },
            { num: '05', name: 'Glitch', slug: 'glitch' },
            { num: '06', name: 'Bioluminescent', slug: 'bioluminescent' },
            { num: '07', name: 'Interstellar', slug: 'interstellar' },
            { num: '08', name: 'Isometric', slug: 'isometric' },
            { num: '09', name: 'Mycelium', slug: 'mycelium' },
          ].map((variant) => (
            <Link key={variant.slug} href={`/showcases/self-variants/${variant.slug}`} className="self-quick-link">
              <span className="self-quick-link-number">{variant.num}</span>
              <span>{variant.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-brand">SELF v1.0.0</p>
          <p className="footer-meta">
            Synthetic Emergent Learning Framework · 
            <Link href="/docs/self" className="footer-link"> Documentation</Link> · 
            <em>Think. Learn. Evolve.</em>
          </p>
        </div>
      </footer>
    </>
  );
}

