import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination:
          process.env.GRAPHQL_BACKEND_URL || "http://localhost:8080/graphql",
      },
      {
        source: "/api/files/:path*",
        destination: `${process.env.REST_BACKEND_URL || "http://localhost:8080"}/api/files/:path*`,
      },
    ];
  },
};

export default nextConfig;
