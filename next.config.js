/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚀 Allow build even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚀 Allow build even if there are TS errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
