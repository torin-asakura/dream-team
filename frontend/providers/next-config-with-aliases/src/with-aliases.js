/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
// const { babelRuntimeImports, babelAliases } = require('./helpers')

const withAliases = (aliases, require) => (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    /**
     *  Aliases for @babel/runtime modules
     *  There is no common entrypoint for all modules
     *  * */
    // babelRuntimeImports.forEach((path, index) => {
    //   config.resolve.alias[babelAliases[index]] = path
    // })

    aliases.forEach(
      (alias) => (config.resolve.alias[alias] = require.resolve(alias.replace('$', '')))
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = { withAliases }
