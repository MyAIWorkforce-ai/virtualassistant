import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignores ESLint errors when building
  },
};

export default nextConfig;
