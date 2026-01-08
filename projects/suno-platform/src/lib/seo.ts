import { Metadata } from 'next';
import { Song } from '@/data/types';
import { Category } from '@/data/types';

const siteConfig = {
  name: 'SEO Song Ideas',
  description: 'Discover 100 SEO-optimized song ideas for AI music generators like Suno and Udio. Get prompts, lyrics, and keywords to make your AI-generated music rank.',
  url: 'https://seosongideas.com',
  ogImage: '/og-image.png',
};

export function generateSongMetadata(song: Song, category: Category): Metadata {
  const title = `${song.title} | ${category.name}`;
  const description = `${song.description} Keywords: ${song.targetKeywords.slice(0, 3).join(', ')}. Genre: ${song.genre}. Perfect for Suno and Udio.`;
  
  return {
    title,
    description,
    keywords: [...song.targetKeywords, song.genre, 'ai music', 'suno', 'udio', category.name.toLowerCase()],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/songs/${category.id}/${song.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: song.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/songs/${category.id}/${song.slug}`,
    },
  };
}

export function generateCategoryMetadata(category: Category, songCount: number): Metadata {
  const title = `${category.name} Song Ideas for AI Music`;
  const description = `${songCount} SEO-optimized ${category.name.toLowerCase()} song ideas for Suno and Udio. ${category.description}`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteConfig.url}/songs/${category.id}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${siteConfig.url}/songs/${category.id}`,
    },
  };
}

// JSON-LD Structured Data
export function generateSongStructuredData(song: Song, category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: song.title,
    description: song.description,
    genre: song.genre,
    keywords: song.targetKeywords.join(', '),
    isPartOf: {
      '@type': 'MusicAlbum',
      name: category.name,
      description: category.description,
    },
    potentialAction: {
      '@type': 'ListenAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://suno.com',
        actionPlatform: 'https://schema.org/DesktopWebPlatform',
      },
    },
  };
}

export function generateArticleStructuredData(song: Song, category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: song.title,
    description: song.description,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/songs/${category.id}/${song.slug}`,
    },
    keywords: song.targetKeywords.join(', '),
    articleSection: category.name,
  };
}

export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export { siteConfig };

