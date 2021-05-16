/**
 * @title aliases.js
 * @description webpack 中需要配置的 alias
 */
const { resolve } = require('./utils')
module.exports = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@': resolve('src')
  }
}
