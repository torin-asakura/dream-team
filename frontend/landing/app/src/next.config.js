const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withAliases } = require('@providers/next-config-with-aliases')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  withWorkspaces,
  withAliases(['@apollo/client$', '@apollo/client/react/ssr$', '@apollo/client/core$'], require),
])
