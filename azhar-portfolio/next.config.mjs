/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
