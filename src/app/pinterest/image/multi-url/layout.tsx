import { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';

// Multi-link tab of the Pinterest image downloader: same text as /pinterest/image, so its canonical points
// there and it is left out of the sitemap.
export const metadata: Metadata = pageMetadata({
  title: "Multiple Pinterest Images Downloader",
  description: "Paste several Pinterest image pin links at once and save each picture in full size. The multi-link tab of the Pinterest image downloader.",
  path: "/pinterest/image/multi-url",
  canonicalPath: "/pinterest/image",
});

export default function PinterestMultiImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
