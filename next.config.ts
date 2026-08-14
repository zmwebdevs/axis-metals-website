import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for cPanel. Security headers live in public/.htaccess.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
