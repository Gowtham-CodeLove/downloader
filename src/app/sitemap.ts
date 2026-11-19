import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

// Only canonical, indexable pages that return 200. Left out on purpose:
// - the /multi-url tabs: same content as their main page, canonical points there;
// - /pinterest: permanent redirect to /pinterest/video (next.config.ts);
// - /api/*: blocked in robots.txt.
// lastmod is the date the page's text last really changed. Update it by hand when you edit a page's content;
// a lastmod that moves on every deploy teaches Google to ignore it.
const PAGES: { path: string; lastModified: string }[] = [
  { path: '', lastModified: '2026-11-19' },
  { path: '/instagram', lastModified: '2026-11-19' },
  { path: '/pinterest/video', lastModified: '2026-11-19' },
  { path: '/pinterest/image', lastModified: '2026-11-19' },
  { path: '/about', lastModified: '2026-10-25' },
  { path: '/contact', lastModified: '2026-10-25' },
  { path: '/privacy', lastModified: '2026-10-25' },
  { path: '/terms', lastModified: '2026-10-25' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
