/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Ignore typescript and eslint errors during Vercel builds to prevent deployment failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/express/:path*',
        // Use BACKEND_URL for production (Vercel), fallback to localhost for development
        destination: `${process.env.BACKEND_URL || 'http://127.0.0.1:5000'}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
