/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Sin basePath - GitHub Pages puede servir desde la raíz
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
