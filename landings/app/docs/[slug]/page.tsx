import { getPageContent, getCollectionSlugs } from '@/lib/content';
import DynamicPageClient from '@/components/DynamicPageClient';

export async function generateStaticParams() {
  const slugs = getCollectionSlugs('docs');
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

const docNames: Record<string, string> = {
  'self': 'SELF Framework',
  'self-command-center': 'Command Center',
  'agent-mastery': 'Agent Mastery',
};

export async function generateMetadata({ params }: Props) {
  const content = getPageContent('docs', params.slug);
  return {
    title: `${content.title} — SELF Documentation`,
  };
}

export default function DocPage({ params }: Props) {
  const content = getPageContent('docs', params.slug);
  const name = docNames[params.slug] || params.slug;
  
  const breadcrumbs = [
    { label: 'SELF', href: '/' },
    { label: `Docs: ${name}` },
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
