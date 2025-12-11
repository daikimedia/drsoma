import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to enable SSR/ISR for dynamic blog pages
  // output: 'export',
  trailingSlash: true,
  images: {
    // Enable image optimization for SSR
    unoptimized: false,
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
        hostname: 'cdn.sanity.io',
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
  // Transpile Sanity packages
  transpilePackages: ['sanity', '@sanity/vision', 'next-sanity'],
};

export default nextConfig;
