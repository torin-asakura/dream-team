const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withAliases } = require('@providers/next-config-with-aliases')
const { withFutureWebpack5 } = require('@providers/next-config-with-future-webpack-5')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  withWorkspaces,
  withFutureWebpack5,
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
])
