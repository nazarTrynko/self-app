import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface PageContent {
  html: string;
  styles: string;
  title: string;
}

/**
 * Extract the body content from an HTML file, excluding nav and scripts
 */
export function extractBodyContent(html: string): string {
  // Remove everything before <body>
  let content = html.replace(/^[\s\S]*<body[^>]*>/i, '');
  
  // Remove everything after </body>
  content = content.replace(/<\/body>[\s\S]*$/i, '');
  
  // Remove existing navigation (various patterns)
  content = content.replace(/<nav[^>]*class="self-nav"[^>]*>[\s\S]*?<\/nav>/gi, '');
  content = content.replace(/<div[^>]*class="self-page-transition"[^>]*>[\s\S]*?<\/div>/gi, '');
  content = content.replace(/<div[^>]*class="mind-indicator"[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // Remove inline scripts at the end
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  return content.trim();
}

/**
 * Extract <style> blocks from HTML
 */
export function extractStyles(html: string): string {
  const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  return styleMatches
    .map(match => match.replace(/<\/?style[^>]*>/gi, ''))
    .join('\n\n');
}

/**
 * Extract page title from HTML
 */
export function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : 'SELF';
}

/**
 * Read and parse an HTML file from the content directory
 */
export function getPageContent(collection: string, slug: string): PageContent {
  const filePath = path.join(CONTENT_DIR, collection, slug, 'index.html');
  
  if (!fs.existsSync(filePath)) {
    return {
      html: `<div class="error">Page not found: ${collection}/${slug}</div>`,
      styles: '',
      title: 'Not Found',
    };
  }
  
  const rawHtml = fs.readFileSync(filePath, 'utf-8');
  
  return {
    html: extractBodyContent(rawHtml),
    styles: extractStyles(rawHtml),
    title: extractTitle(rawHtml),
  };
}

/**
 * Get all slugs for a collection (for generateStaticParams)
 */
export function getCollectionSlugs(collection: string): string[] {
  const collectionPath = path.join(CONTENT_DIR, collection);
  
  if (!fs.existsSync(collectionPath)) {
    return [];
  }
  
  return fs.readdirSync(collectionPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !name.startsWith('.') && !name.startsWith('_'));
}

/**
 * Collection metadata for generating pages
 */
export const collections = {
  masterpieces: {
    name: 'Masterpieces',
    description: 'Premium landing page showcases',
    contentPath: 'showcases/masterpieces',
    accent: '#c9a227',
  },
  revelations: {
    name: 'Revelations',
    description: 'Minimalist revelation experiences',
    contentPath: 'showcases/revelations',
    accent: '#14b8a6',
  },
  'self-variants': {
    name: 'SELF Variants',
    description: 'Alternative SELF landing designs',
    contentPath: 'showcases/self-variants',
    accent: '#8b5cf6',
  },
  'product-hunt': {
    name: 'Product Ideas',
    description: 'Product Hunt landing concepts',
    contentPath: 'product-hunt',
    accent: '#f472b6',
  },
  'stealth-business': {
    name: 'Stealth Business',
    description: 'Business blueprint landings',
    contentPath: 'blueprints/stealth-business',
    accent: '#22c55e',
  },
  docs: {
    name: 'Documentation',
    description: 'SELF documentation pages',
    contentPath: 'docs',
    accent: '#8b5cf6',
  },
  products: {
    name: 'Products',
    description: 'Live product pages',
    contentPath: 'products',
    accent: '#06b6d4',
  },
} as const;

export type CollectionKey = keyof typeof collections;

