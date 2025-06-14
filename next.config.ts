import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // This is the path your Apollo Client (in the browser) will call
        source: "/api/graphql",
        // This is the actual backend GraphQL endpoint, pulled from a server-side ENV var.
        // IMPORTANT: Ensure this is your *actual* GraphQL API endpoint,
        // not the GraphiQL UI. Typically it's just '/graphql' at the end.
        destination:
          process.env.GRAPHQL_BACKEND_URL || "http://localhost:8080/graphql",
      },
    ];
  },
};

export default nextConfig;
