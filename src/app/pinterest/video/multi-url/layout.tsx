import { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';

// Multi-link tab of the Pinterest video downloader: same text as /pinterest/video, so its canonical points
// there and it is left out of the sitemap.
export const metadata: Metadata = pageMetadata({
  title: "Multiple Pinterest Videos Downloader",
  description: "Paste several Pinterest video pin links at once and save each clip as MP4. The multi-link tab of the Pinterest video downloader.",
  path: "/pinterest/video/multi-url",
  canonicalPath: "/pinterest/video",
});

export default function PinterestMultiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
