import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const allSlugs = getCollectionSlugs('product-hunt');
  const slugs = allSlugs.filter(s => s !== 'shared');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('product-hunt', params.slug);
  return {
    title: `${content.title} — SELF Products`,
  };
}

export default function ProductPage({ params }: Props) {
  const content = getPageContent('product-hunt', params.slug);
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: 'Products', href: '/product-hunt' },
    { label: params.slug },
  ];
  
  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#f472b6"
    />
  );
}
