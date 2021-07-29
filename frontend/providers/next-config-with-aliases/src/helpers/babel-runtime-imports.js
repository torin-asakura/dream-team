const { readdirSync } = require('fs')

const exactHelperPath = require.resolve('@babel/runtime/helpers/jsx')
const exactEsmHelperPath = require.resolve('@babel/runtime/helpers/esm/jsx')

const getPaths = (exactModulePath) => {
  const formatToAliases = (paths, dir) => paths.map((path) => `${dir}/${path.replace('.js', '')}`)

  let helpersDir = exactModulePath.split('/')
  helpersDir.pop()
  helpersDir = helpersDir.join('/')

  return formatToAliases(readdirSync(helpersDir), helpersDir)
}

const babelRuntimeImports = [...getPaths(exactHelperPath), ...getPaths(exactEsmHelperPath)]
const babelAliases = babelRuntimeImports.map((path) => {
  const array = path.split('/')
  const start = array.indexOf('@babel')
  const end = array.length

  return array.slice(start, end).join('/')
})

module.exports = { babelRuntimeImports, babelAliases }
