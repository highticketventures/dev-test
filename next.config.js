/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['images.clerk.dev', 'img.clerk.com'],
  },
}

module.exports = nextConfig