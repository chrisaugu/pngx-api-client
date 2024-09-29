import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
}

const pwaConfig = withPWA({
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

export default pwaConfig;

// module.exports = nextConfig;