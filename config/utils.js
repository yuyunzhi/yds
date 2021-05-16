/**
 * @title utils.js
 * @description 这个文件是为了方便路径处理用的
 */
const path = require('path')

exports.resolve = dir => {
  return path.join(__dirname, './../', dir)
}
