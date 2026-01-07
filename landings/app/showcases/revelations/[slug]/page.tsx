import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('showcases/revelations');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('showcases/revelations', params.slug);
  return {
    title: `${content.title} — SELF Revelations`,
  };
}

export default function RevelationPage({ params }: Props) {
  const content = getPageContent('showcases/revelations', params.slug);
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: 'Revelations', href: '/showcases/revelations' },
    { label: params.slug },
  ];
  
  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#14b8a6"
    />
  );
}
