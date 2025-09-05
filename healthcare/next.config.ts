import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This will let `next build` complete even if ESLint finds problems
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig;
