import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for live server deployment
  output: 'export',
  trailingSlash: true,
  images: {
    // Required for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexub-test.sgp1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'nexub-prod.sgp1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
