import { Metadata } from 'next';
import { pageMetadata, toolJsonLd } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Pinterest Image Downloader — Save Pins in Full Size" },
  description: "Paste a Pinterest pin or pin.it link to save the image in its original, uncropped size as JPG or PNG. Free, no Pinterest account needed.",
  path: "/pinterest/image",
});

const jsonLd = toolJsonLd({
  name: "Pinterest Image Downloader",
  description: "Online tool that saves public Pinterest image pins in their original resolution from a pasted pin link.",
  path: "/pinterest/image",
  crumbs: [{ name: "Pinterest Image Downloader", path: "/pinterest/image" }],
});

export default function PinterestImageLayout({
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
