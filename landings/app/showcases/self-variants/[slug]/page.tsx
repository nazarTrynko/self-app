import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('showcases/self-variants');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

const variantNames: Record<string, string> = {
  'original': 'Original',
  'brutalist': 'Brutalist',
  'zen-ma': 'Zen MA',
  'noir-cinema': 'Noir Cinema',
  'terminal': 'Terminal',
  'glitch': 'Glitch',
  'bioluminescent': 'Bioluminescent',
  'interstellar': 'Interstellar',
  'isometric': 'Isometric',
  'mycelium': 'Mycelium',
};

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('showcases/self-variants', params.slug);
  return {
    title: `${content.title} — SELF Variants`,
  };
}

export default function SelfVariantPage({ params }: Props) {
  const content = getPageContent('showcases/self-variants', params.slug);
  const name = variantNames[params.slug] || params.slug;
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: 'Variants', href: '/#landings' },
    { label: name },
  ];
  
  return (
    <DynamicPageClient 
      breadcrumbs={breadcrumbs}
      html={content.html}
      styles={content.styles}
      accentColor="#8b5cf6"
    />
  );
}
