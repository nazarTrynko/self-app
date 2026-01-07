import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('products');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

const productNames: Record<string, string> = {
  'aurum': 'Aurum',
  'carousel-generator': 'Carousel Generator',
  'cursor-cycles': 'Cursor Cycles',
  'pro-pwas': 'Pro PWAs',
};

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('products', params.slug);
  return {
    title: `${content.title} — SELF Products`,
  };
}

export default function ProductPage({ params }: Props) {
  const content = getPageContent('products', params.slug);
  const name = productNames[params.slug] || params.slug;
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: name },
  ];
  
  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#06b6d4"
    />
  );
}
