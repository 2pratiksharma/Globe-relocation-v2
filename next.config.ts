import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Image optimization for page speed
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'imagekit.io' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
    ], // Allow images from these domains
    formats: ['image/avif', 'image/webp'], // Modern image formats for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image sizes for srcset
    minimumCacheTTL: 31536000, // Cache images for 1 year (in seconds)
  },

  // Enable gzip compression
  compress: true,

  // Optimize production builds
  poweredByHeader: false, // Remove X-Powered-By header for security

  // 301 Redirects from old URLs to new SEO-friendly URLs
  async redirects() {
    return [
      // City page redirects
      {
        source: '/location/bangalore',
        destination: '/packers-and-movers-bangalore',
        permanent: true, // 301 redirect
      },
      {
        source: '/location/hyderabad',
        destination: '/packers-and-movers-hyderabad',
        permanent: true,
      },
      {
        source: '/location/delhi-ncr',
        destination: '/packers-and-movers-delhi-ncr',
        permanent: true,
      },
      // Locality page redirects (catch-all pattern)
      {
        source: '/location/bangalore/:locality',
        destination: '/packers-and-movers-bangalore-:locality',
        permanent: true,
      },
      {
        source: '/location/hyderabad/:locality',
        destination: '/packers-and-movers-hyderabad-:locality',
        permanent: true,
      },
      {
        source: '/location/delhi-ncr/:locality',
        destination: '/packers-and-movers-delhi-ncr-:locality',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

