/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    customKey: 'my-value',
    apiServer: 'https://careful-fox-khakis.cyclic.app/'
    //apiServer: 'http://localhost:3001/'
  },
}

module.exports = nextConfig
