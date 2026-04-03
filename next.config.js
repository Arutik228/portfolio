/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включаем статический экспорт для GitHub Pages
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig