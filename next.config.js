/** @type {import("next").NextConfig} */
module.exports = {
  rewrites() {
    return [{
      source: "/uploads/:path*",
      destination: "http://localhost:1337/uploads/:path*"
    }];
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};
