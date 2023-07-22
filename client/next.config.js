/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    customKey: 'my-value',
    apiServer: 'http://localhost:3001/'
  },
}

module.exports = nextConfig
