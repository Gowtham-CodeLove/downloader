import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ADSENSE_CLIENT } from "@/lib/adsense";
import { CODELOVE_NETWORK, CREATOR_NAME, CREATOR_URL, MAIN_SITE_URL, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

// Self-hosted at build time: no render-blocking request to fonts.googleapis.com before the first paint.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const TITLE = "Insta Downloader: Instagram Reels & Video Downloader";
const DESCRIPTION = "Insta Downloader by CodeLove: a free Instagram downloader for Reels, videos and photos. No login, no watermark added. Pinterest videos and images too.";

// Defaults only. Each page sets its own title, description and canonical through pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Insta Downloader",
    default: TITLE,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: CREATOR_NAME, url: CREATOR_URL }],
  creator: CREATOR_NAME,
  publisher: "CodeLove",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${CREATOR_URL}/#person`,
      "name": CREATOR_NAME,
      "url": CREATOR_URL,
      "worksFor": { "@id": `${MAIN_SITE_URL}/#organization` }
    },
    {
      "@type": "Organization",
      "@id": `${MAIN_SITE_URL}/#organization`,
      "name": "CodeLove",
      "url": MAIN_SITE_URL,
      "founder": { "@id": `${CREATOR_URL}/#person` },
      "sameAs": CODELOVE_NETWORK.map((s) => s.href)
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": SITE_NAME,
      "alternateName": ["Insta Downloader", "CodeLove Downloader", "downloader.codelove.in"],
      "url": SITE_URL,
      "description": DESCRIPTION,
      "inLanguage": "en",
      "creator": { "@id": `${CREATOR_URL}/#person` },
      "publisher": { "@id": `${MAIN_SITE_URL}/#organization` }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="https://downloader.codelove.in/sitemap.xml" />
        {/* Google AdSense - only rendered once a publisher ID is set in src/lib/adsense.ts */}
        {ADSENSE_CLIENT ? (
          <>
            <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
              crossOrigin="anonymous"
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* CodeLove Analytics (admin.codelove.in). async, not defer: React treats <script async src> as a resource and
            skips it during hydration; a defer script gets compared with the script AdSense inserts into <head>. */}
        <script async src="https://admin.codelove.in/t.js" />
      </head>
      <body
        className="antialiased min-h-screen text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-black transition-colors duration-300"
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-195MMH811B"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-195MMH811B');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
