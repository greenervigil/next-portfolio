/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.greenervigil.dev" }],
        destination: "https://greenervigil.dev/:path*",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
