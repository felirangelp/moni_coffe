/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages sirve desde /moni_coffe/ para repositorios de proyecto
  basePath: '/moni_coffe',
  assetPrefix: '/moni_coffe',
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
