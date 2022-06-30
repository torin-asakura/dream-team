const { withAliases } = require('@providers/next-config-with-aliases')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    outputStandalone: true,
    esmExternals: 'loose',
  },
}

module.exports = withPlugins(
  [
    withAliases(
      [
        '@apollo/client$',
        '@apollo/client/react/ssr$',
        '@apollo/client/core$',
        'events',
        '@emotion/react',
        '@emotion/styled',
      ],
      require
    ),
  ],
  nextConfig
)
