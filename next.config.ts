import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'nexub-test.sgp1.digitaloceanspaces.com',
      'nexub-prod.sgp1.digitaloceanspaces.com',
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
