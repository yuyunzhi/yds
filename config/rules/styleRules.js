/**
 * @title styleRules.js
 * @description 定义 style 规则
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
module.exports = [
  {
    test: /\.module.less$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDev,
          importLoaders: 2,
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
        'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          sourceMap: isDev,
          // TODO .module.less需要注入全局变量吗？
          prependData: `
          @import "@/styles/variables.less";
          @userSelect: ${process.env.REACT_APP_USER_SELECT || 'none'};`
        }
      }
    ]
  },
  {
    test: /^((?!\.module).)*less$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          sourceMap: isDev,
          prependData: `
          @import "@/styles/variables.less";
          @userSelect: ${process.env.REACT_APP_USER_SELECT || 'none'};`
        }
      }
    ]
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    loaders: ['style-loader', 'css-loader']
  }
]
