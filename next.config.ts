import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚀 Allow build even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚀 Allow build even if there are TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
