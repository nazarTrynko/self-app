import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('blueprints/stealth-business');
  const filteredSlugs = slugs.filter(s => !['data', 'guide'].includes(s));
  return filteredSlugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('blueprints/stealth-business', params.slug);
  return {
    title: `${content.title} — Stealth Business`,
  };
}

export default function StealthBusinessItemPage({ params }: Props) {
  const content = getPageContent('blueprints/stealth-business', params.slug);
  const num = params.slug.split('-')[0];

  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: 'Blueprints', href: '/blueprints' },
    { label: 'Stealth', href: '/blueprints/stealth-business' },
    { label: num },
  ];

  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#22c55e"
    />
  );
}
