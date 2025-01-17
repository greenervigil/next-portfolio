/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'pluralsight2.imgix.net'
      },
      {
        protocol: 'https',
        hostname: 'getbootstrap.com'
      },
      {
        protocol: 'https',
        hostname: 'www.google.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      },
      {
        protocol: 'https',
        hostname: 'turbo.build'
      },
      {
        protocol:'https',
        hostname: 'astro.build'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      },
      {
        protocol: 'https',
        hostname: 'www.solidjs.com'
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com'
      }
    ]
  }
}

module.exports = nextConfig
