import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aussois-locations.com",
        port: "",
        pathname: "/medias/**",
      },
    ],
  },
};

export default nextConfig;
