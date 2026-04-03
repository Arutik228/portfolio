/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Если репозиторий называется portfolio, раскомментируйте:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
}

module.exports = nextConfig
