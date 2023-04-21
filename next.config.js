/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.schema.io', 'cdn.swell.store', 'via.placeholder.com']

  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
