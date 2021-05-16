/**
 * @title devServerConfig.js
 * @description devServer 配置
 */

const proxy = require('./devServerProxyConfig')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

module.exports = {
  open: true, // 自动打开浏览器
  compress: true, // 为所有 served 的文件启用 gzip 压缩
  clientLogLevel: 'debug', // 设置 log 等级，可设置为 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
  hot: true,
  host,
  overlay: false,
  port,
  proxy,
  quiet: false, // 允许 errors 或者 warnings log
  historyApiFallback: true // 避免出现 404 的 response，找不到页面时会跳转到首页 index
}
