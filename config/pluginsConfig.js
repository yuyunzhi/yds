/**
 * @title plugins.js
 * @description 这个文件是为了存放 webpack 插件用的
 */

const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: resolve('public/index.html'),
    inject: true // script 注入到 template 的 body 下
  }),
  new CopyPlugin([
    // 将 config.json 拷贝到 dist 目录下, 这里的 . 代表 dist 当前目录
    { from: './config.json', to: '.' }
  ])
]
