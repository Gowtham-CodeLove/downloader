import { Metadata } from 'next';
import { pageMetadata, toolJsonLd } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Instagram Reels Downloader — Download Instagram Video" },
  description: "Reels downloader: paste an Instagram Reel, video or photo link to save it as MP4 or JPG. Which links work, what you get back, and fixes for failed links.",
  path: "/instagram",
});

const jsonLd = toolJsonLd({
  name: "Instagram Reels & Video Downloader",
  description: "Online tool that saves public Instagram Reels and videos as MP4 and photo posts as JPG from a pasted post link.",
  path: "/instagram",
  crumbs: [{ name: "Instagram Downloader", path: "/instagram" }],
});

export default function InstagramLayout({
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
