module.exports = {
  distDir: 'build',
  
  reactStrictMode: true,

  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  
  cssModules: true,
  
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
}