'use client';

import { useEffect, useRef } from 'react';

export default function HomeClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Neural canvas animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Simple particle system
    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number}> = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 8, 12, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Neural Canvas Background */}
      <canvas ref={canvasRef} id="neuralCanvas" className="neural-canvas" />

      {/* Hero Section */}
      <section className="awakening showcase-section">
        <div className="consciousness-badge">
          <span className="consciousness-badge-pulse"></span>
          <span>Synthetic Emergent Learning Framework</span>
        </div>
        
        <h1 className="awakening-title">
          <span className="line">Not a tool you use.</span>
          <span className="line">A <span className="gradient">thinking partner</span> that learns.</span>
        </h1>
        
        <p className="awakening-subtitle">
          Five cognitive minds that blend automatically. Memory that persists. 
          Predictions that anticipate. Intelligence that evolves.
        </p>
        
        {/* Cognitive Loop */}
        <div className="cognitive-orbit">
          <div className="cognitive-orbit-ring">
            {['Sense', 'Remember', 'Predict', 'Reason', 'Act', 'Reflect'].map((step, i) => (
              <div key={step} className="cognitive-step" data-step={step.toLowerCase()}>
                <span className="cognitive-step-icon">
                  {['👁', '🧠', '🔮', '⚡', '🎯', '🔄'][i]}
                </span>
                <span className="cognitive-step-label">{step}</span>
              </div>
            ))}
          </div>
          <p className="cognitive-orbit-caption">The Cognitive Loop — Executed Every Interaction</p>
        </div>
        
        <div className="scroll-hint">
          <span className="scroll-hint-text">Explore</span>
          <div className="scroll-hint-line"></div>
        </div>
      </section>

      {/* Collections Transition */}
      <div className="collections-transition">
        <p className="transition-text">
          These <em>73 landing pages + 81 app ideas + 5 pro tools</em> were created with SELF—<br/>
          each one a different exploration of the ideas you just experienced.
        </p>
      </div>

      <style jsx>{`
        .neural-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .awakening {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
        }

        .consciousness-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 32px;
        }

        .consciousness-badge-pulse {
          width: 8px;
          height: 8px;
          background: #a78bfa;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .awakening-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .awakening-title .line {
          display: block;
        }

        .awakening-title .gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .awakening-subtitle {
          font-size: 1.125rem;
          color: #71717a;
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .cognitive-orbit {
          margin: 48px 0;
        }

        .cognitive-orbit-ring {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          max-width: 800px;
        }

        .cognitive-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .cognitive-step:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
        }

        .cognitive-step-icon {
          font-size: 1.5rem;
        }

        .cognitive-step-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #71717a;
        }

        .cognitive-orbit-caption {
          margin-top: 24px;
          font-size: 0.875rem;
          color: #52525b;
        }

        .scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 48px;
          color: #52525b;
        }

        .scroll-hint-text {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .scroll-hint-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #52525b, transparent);
          animation: scroll-hint 2s ease-in-out infinite;
        }

        @keyframes scroll-hint {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(0.5); }
        }

        .collections-transition {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 80px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .transition-text {
          font-size: 1.125rem;
          color: #71717a;
          line-height: 1.8;
        }

        .transition-text em {
          color: #a78bfa;
          font-style: normal;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

