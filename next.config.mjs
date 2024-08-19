/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/gh-practice',
  assetPrefix: 'https://a9261020.github.io/gh-practice',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
