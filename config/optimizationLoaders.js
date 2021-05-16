/**
 * @title loaders.js
 * @description 这个文件是为了设置构建缓存和构建加速用的
 */

const { resolve } = require('./utils')

// 构建缓存
const cacheLoader = {
  loader: 'cache-loader',
  options: {
    // 缓存文件路径
    cacheDirectory: resolve('.cache-loader')
  }
}

// 构建加速，多线程编译
const threadLoader = workerParallelJobs => {
  const options = { workerParallelJobs }
  Object.assign(options, {
    poolTimeout: 2000
  })
  return {
    loader: 'thread-loader',
    options
  }
}

module.exports = {
  cacheLoader,
  threadLoader
}
