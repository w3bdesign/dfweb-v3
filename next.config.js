/** @type {import('next').NextConfig} */

const csp = `frame-ancestors 'self';report-uri 'https://dfweb.report-uri.com/r/d/csp/reportOnly';block-all-mixed-content;default-src 'self';script-src 'self' 'report-sample' 'unsafe-inline' 'unsafe-eval';style-src 'self' 'report-sample' 'unsafe-inline' fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';prefetch-src 'self';worker-src 'self' blob:;`;

const headers = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "Server",
    value: "Apache" // fake server value
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "sameorigin"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "Referrer-Policy",
    value: "same-origin"
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=*" // allow specified policies here
  },
  {
    //key: "Content-Security-Policy",
    key: "Content-Security-Policy-Report-Only",
    value: csp
  }
];

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
