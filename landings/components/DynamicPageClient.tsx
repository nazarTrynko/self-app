'use client';

import Link from 'next/link';
import PageWrapper from './PageWrapper';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  breadcrumbs: BreadcrumbItem[];
  html: string;
  styles: string;
  accentColor?: string;
}

export default function DynamicPageClient({ breadcrumbs, html, styles, accentColor = '#8b5cf6' }: Props) {
  return (
    <div className="dynamic-page">
      <div className="breadcrumb">
        {breadcrumbs.map((item, i) => (
          <span key={i}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="current">{item.label}</span>
            )}
            {i < breadcrumbs.length - 1 && <span className="separator">/</span>}
          </span>
        ))}
      </div>
      
      <PageWrapper html={html} styles={styles} />
      
      <style jsx>{`
        .dynamic-page {
          min-height: 100vh;
        }

        .breadcrumb {
          position: fixed;
          top: 80px;
          left: 24px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: #71717a;
          padding: 8px 16px;
          background: rgba(8, 8, 12, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .breadcrumb :global(a) {
          color: #71717a;
          transition: color 0.3s ease;
        }

        .breadcrumb :global(a:hover) {
          color: ${accentColor};
        }

        .separator {
          opacity: 0.3;
          margin: 0 4px;
        }

        .current {
          color: #fafafa;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .breadcrumb {
            top: auto;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

