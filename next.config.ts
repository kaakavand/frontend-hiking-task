import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hiking.storage.c2.liara.space",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
