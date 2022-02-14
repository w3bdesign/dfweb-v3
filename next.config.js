/** @type {import('next').NextConfig} */

const { nanoid } = require("nanoid");
const crypto = require("crypto");

const generateCsp = () => {
  const hash = crypto.createHash("sha256");
  const hashsecond = crypto.createHash("sha256");
  hashsecond.update(nanoid());
  hash.update(nanoid());
  const production = process.env.NODE_ENV === "production";

  /*return `default-src 'self'; style-src https://fonts.googleapis.com 'self' 'sha256-${hash.digest(
    "base64"
  )}'; script-src 'sha256-${hashsecond.digest("base64")}' 'self' ${
    production ? "" : "'unsafe-eval'"
  }; font-src https://fonts.gstatic.com 'self' data:; img-src https://lh3.googleusercontent.com https://res.cloudinary.com https://s.gravatar.com 'self' data:;`;
};*/


return `frame-ancestors 'self';block-all-mixed-content;default-src 'self';script-src 'self' 'sha256-${secondhash.digest("base64")}' 'report-sample' v3.dfweb.no dfweb.no;style-src 'self' 'sha256-${hash.digest("base64")}'; dfweb.no v3.dfweb.no fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' api.emailjs.com emailjs.com fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';worker-src 'self';`



const csp = `frame-ancestors 'self';block-all-mixed-content;default-src 'self';script-src 'self' 'report-sample' v3.dfweb.no dfweb.no;style-src 'self' dfweb.no v3.dfweb.no fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' api.emailjs.com emailjs.com fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';worker-src 'self';`;

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
    key: "Content-Security-Policy",
    //value: process.env.NODE_ENV === "production" ? csp : "" // only use csp in production
    value: generateCsp()
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
