/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
