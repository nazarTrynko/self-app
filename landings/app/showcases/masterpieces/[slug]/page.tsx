import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('showcases/masterpieces');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('showcases/masterpieces', params.slug);
  return {
    title: `${content.title} — SELF Masterpieces`,
  };
}

export default function MasterpiecePage({ params }: Props) {
  const content = getPageContent('showcases/masterpieces', params.slug);
  const num = params.slug.split('-')[0];
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: 'Masterpieces', href: '/showcases/masterpieces' },
    { label: num },
  ];
  
  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#c9a227"
    />
  );
}
