/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.schema.io']

  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
