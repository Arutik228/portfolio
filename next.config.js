/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.',  // Экспорт в корень (папка portfolio)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig