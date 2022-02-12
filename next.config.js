/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["cdn.sanity.io", "v3.dfweb.no", "dfweb.no"],
    minimumCacheTTL: 600
  }
};
