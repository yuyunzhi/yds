/**
 * @title assetsRules.js
 * @description 定义资源的规则
 */

module.exports = [
  {
    // 支持本地 svg 导入
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
]
