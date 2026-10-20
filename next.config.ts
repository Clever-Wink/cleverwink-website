import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: ["www.aceternity.com", "assets.aceternity.com", "images.unsplash.com"].map(
      (hostname) => ({ protocol: "https" as const, hostname })
    ),
  },
};
export default config;
