const withFutureWebpack5 = (nextConfig) => ({
  ...nextConfig,
  future: {
    webpack5: true,
  },
})

module.exports = { withFutureWebpack5 }
