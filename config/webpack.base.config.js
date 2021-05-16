const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const assetsRules = require('./rules/assetsRules')
const pluginsConfig = require('./pluginsConfig')
const resolveConfig = require('./resolveConfig')
const devServerConfig = require('./devServerConfig')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
  },
  devServer: devServerConfig,
  resolve: resolveConfig,
  plugins: [...pluginsConfig],
  module: {
    rules: [
      ...jsRules,
      ...styleRules,
      ...fileRules,
      ...assetsRules
    ]
  }
}
