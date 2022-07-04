const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // swcMinify: true,

  // distDir: 'build',
  
  reactStrictMode: true,

  images: {
    domains: ["randomuser.me"],
  },

  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  
  cssModules: true,
  
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
})