/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      // Used for Industry Category featured images (Sprint 12/13 — see
      // PROJECT.md Section 7). Added ahead of time in Sprint 11, now live.
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
