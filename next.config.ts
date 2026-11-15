import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Safe security headers (Vercel serves them; the GitHub Pages sites cannot set headers).
  // No X-Frame-Options or CSP: the site may be embedded, and AdSense/Firebase would need a long allow-list.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  // The YouTube tools were removed; send their old URLs to the home page instead of a 404.
  async redirects() {
    return [
      { source: "/youtube", destination: "/", permanent: true },
      { source: "/youtube/:path*", destination: "/", permanent: true },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/__/auth/:path*",
  //       destination: "https://downloader-codelove.firebaseapp.com/__/auth/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
