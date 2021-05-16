/**
 * @title fileRules.js
 * @description 定义 file 输出文件的规则
 */

const path = require('path')
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || 10000
)

module.exports = [
  {
    test: /\.(png|jpe?g|gif|bmp)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
          // 在任意操作系统上使用 POSIX 文件路径时获得一致的结果
          name: path.posix.join('static/media', '[name].[hash:8].[ext]')
        }
      }
    ]
  },
]
