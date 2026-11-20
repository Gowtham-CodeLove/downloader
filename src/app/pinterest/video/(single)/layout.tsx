import { Metadata } from 'next';
import { pageMetadata, toolJsonLd } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Pinterest Video Downloader — Save Video Pins as MP4" },
  description: "Paste a Pinterest video pin or pin.it link to preview the clip and save it as an MP4 file. Free, no watermark added, no Pinterest account needed.",
  path: "/pinterest/video",
});

const jsonLd = toolJsonLd({
  name: "Pinterest Video Downloader",
  description: "Online tool that saves public Pinterest video pins as MP4 files from a pasted pin link.",
  path: "/pinterest/video",
  crumbs: [{ name: "Pinterest Video Downloader", path: "/pinterest/video" }],
});

export default function PinterestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
