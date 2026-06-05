import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Disk is space-constrained: skip the on-disk image optimizer cache.
  // Exhibition videos stream straight from the Storyblok CDN.
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "a.storyblok.com" }],
  },
};

export default nextConfig;
