/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  // swcMinify: false // Skru av denne?
  images: {
    domains: ["cdn.sanity.io"]
  }
};
