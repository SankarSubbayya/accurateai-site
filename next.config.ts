import type { NextConfig } from "next";

// Static export for Cloudflare Pages. `next build` writes the site to `out/`,
// which is the Pages "Build output directory". No server, no Functions.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
