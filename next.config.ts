import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        hostname: "samehadaku.mba"
      },
      {
        hostname: "otakudesu.cloud"
      },
      {
        hostname: "cdn.myanimelist.net"
      }
    ]
  }
};

export default nextConfig;
