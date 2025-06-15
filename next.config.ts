import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination:
          process.env.GRAPHQL_BACKEND_URL || "http://localhost:8080/graphql",
      },
    ];
  },
};

export default nextConfig;
