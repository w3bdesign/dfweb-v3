/** @type {import('next').NextConfig} */

const csp = `frame-ancestors 'self';block-all-mixed-content;default-src 'self';script-src 'self' 'report-sample' v3.dfweb.no dfweb.no;style-src 'self' 'sha256-8BNxsIsc6VHj8/elC63fqbrGsnTOvhNTf17uhaIdUI4=' 'sha256-GHgVb5EEAUPhVeTfwEFuX9+WADcCrePlK6CwdXznIhY=' 'sha256-ILMAexb0qRHPwqfjRBkaZgAabpCISF9LKjwUh6KOMLM=' 'sha256-UNp5fHQ1qqiIpd3mqgTPnoC4xBbIZnf8gh46xIgOBYQ=' 'sha256-d72pVhmRTNXT2Gr2OHFRLnVaHBfiBI5EvDCF6tA924Y=' 'sha256-tTgjrFAQDNcRW/9ebtwfDewCTgZMFnKpGa9tcHFyvcs=' 'sha256-udqn+IRm1CC9ivfJc0LiM4qvHxmmdHbm6N+wfEZh1Co=' 'sha256-xd6kVmsB5qDY47QB4x7Ys+1t88OSTa40q/98d9NyF8Q=' 'sha256-xyFOCDyimAlruQKlArTEu0ybsNKQvSaZzhXX0NATyhE=' 'report-sample' 'unsafe-inline' fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';prefetch-src 'self';worker-src 'self';`;

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
    value: process.env.NODE_ENV === "production" ? csp : "" // only use csp in production
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
