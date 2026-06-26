import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize package imports
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/bruce-hmz/costdog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
