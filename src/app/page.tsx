import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Insta Downloader: Instagram Reels & Video Downloader" },
  description: "Insta Downloader by CodeLove: a free Instagram downloader for Reels, videos and photos. No login, no watermark added. Pinterest videos and images too.",
  path: "",
});

export default function HomePage() {
  return <HomeContent />;
}
