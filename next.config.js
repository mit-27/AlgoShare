/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  env: {
    HASURA_SECRET: process.env.HASURA_SECRET,
    HASURA_HTTP_URL: process.env.HASURA_HTTP_URL,
    HASURA_WSS_URL: process.env.HASURA_WSS_URL
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
