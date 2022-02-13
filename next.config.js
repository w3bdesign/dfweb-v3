/** @type {import('next').NextConfig} */

import { headers } from "./src/utils/headers";

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["cdn.sanity.io", "v3.dfweb.no", "dfweb.no"],
    minimumCacheTTL: 600
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers
      }
    ];
  }
};
