/**
 * @title devServerProxyConfig.js
 * @description devServer proxy 代理配置
 */

module.exports = {
  '/xhb_api': {
    target: 'https://test-platform.xiaoheiban.cn',
    changeOrigin: true,
    pathRewrite: {
      '^/xhb_api': '/api'
    }
  },
  '/api': {
    target: 'http://tss.test.zb.talcloud.com/',
    changeOrigin: true
  }
}