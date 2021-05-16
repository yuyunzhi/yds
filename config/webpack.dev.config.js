const merge = require('webpack-merge').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotenvPlugin = require('dotenv-webpack')
const webpackBaseConfig = require('./webpack.base.config')

const dotEnvPath = '.env'

/**
 * @type {import('webpack').Configuration}
 */
const webpackDevConfig = {
  mode: 'development',
  output: {
    // 开发阶段不需要 hash
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[id].js',
    // TODO 这里可以优化成 cdn 域名链接, 将一些 css/js/图片资源等上传到 cdn
    publicPath: '/'
  },
  plugins: [
    new DotenvPlugin({
      path: dotEnvPath
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].[id].css'
    })
  ],
  // 开发阶段不需要优化打包
  optimization: {},
  // 开启 source map
  // 不是开发环境才需要 source-map
  // TODO 这里可以讨论，若是线上需要做追踪，可以加上 source map
  devtool: 'source-map'
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
