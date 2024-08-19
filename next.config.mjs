/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/gh-practice',
  assetPrefix: '/gh-practice/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
