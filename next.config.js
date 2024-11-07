// const withPWA = require('next-pwa');
// const withPWA = require("@ducanh2912/next-pwa").default({
//     dest: "public",
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  // },
  // swcMinify: true,

  distDir: 'build',
  
  reactStrictMode: true,

  images: {
    // remotePatterns: ["randomuser.me"],
  },

  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: '[local]___[hash:base64:5]',
  // },
  // sassOptions: {
  //   additionalData: `$var: red;`,
  // },
}

// const pwaConfig = withPWA(nextConfig)

module.exports = nextConfig;