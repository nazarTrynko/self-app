/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // GitHub Pages deployment - set basePath for repo subdirectory
  basePath: process.env.GITHUB_ACTIONS ? '/self-app' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/self-app/' : '',
}

module.exports = nextConfig

