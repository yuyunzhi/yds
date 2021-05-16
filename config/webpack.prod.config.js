const merge = require('webpack-merge').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotenvPlugin = require('dotenv-webpack')
const webpackBaseConfig = require('./webpack.base.config')
const optimizationConfig = require('./optimizationConfig')

const dotEnvPath = '.env.production'

/**
 * @type {import('webpack').Configuration}
 */
const webpackProdConfig = {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[id].[chunkhash].js',
    // TODO 这里可以优化成 cdn 域名链接, 将一些 css/js/图片资源等上传到 cdn
    publicPath: './'
  },
  plugins: [
    new DotenvPlugin({
      path: dotEnvPath
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[id].[contenthash].css'
    })
  ],
  // 开发阶段不需要优化打包
  optimization: optimizationConfig,
  devtool: undefined
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
