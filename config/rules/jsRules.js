/**
 * @title jsRules.js
 * @description 定义 js 规则
 */

const { resolve } = require('../utils')
const { cacheLoader, threadLoader } = require('../optimizationLoaders')

module.exports = [
  {
    // 这里编写 babel 对 .tsx 文件编译的配置
    test: /\.(j|t)sx?$/,
    include: resolve('src'),
    use: [
      cacheLoader,
      threadLoader(),
      {
        loader: 'babel-loader',
        options: {
          babelrc: false, // 这里不用 babelrc 文件
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
          plugins: [
            ["import", { libraryName: "antd-mobile", style: 'css'}],
            ['@babel/plugin-proposal-decorators', { legacy: true }], // 支持使用装饰器语法
            ['@babel/plugin-proposal-class-properties', { loose: false }], // 非宽松模式，类属性编译成赋值表达式，而不是 Object.defineProperty 这种形式
            '@babel/plugin-syntax-dynamic-import',
          ]
        }
      }
    ]
  }
]
