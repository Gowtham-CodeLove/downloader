import { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';

// The multi-link tab renders the same page as /instagram (page.tsx re-exports it), so its canonical points
// there and it is left out of the sitemap. Two URLs with the same content split signals and Google drops one.
export const metadata: Metadata = pageMetadata({
  title: "Multiple Instagram Links Downloader",
  description: "Paste several Instagram Reel or post links at once and download each one. The multi-link tab of the Instagram downloader.",
  path: "/instagram/multi-url",
  canonicalPath: "/instagram",
});

export default function MultipleInstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
