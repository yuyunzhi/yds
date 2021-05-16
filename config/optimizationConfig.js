/**
 * @title optimizationConfig.js
 * @description 定义 webpack 优化配置
 */

const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // 将部分清单代码单独打包出来并命名为 manifest
  runtimeChunk: {
    name: 'manifest'
  },
  splitChunks: {
    cacheGroups: {
      default: false,
      // 抽离 node_modules 下的公共代码
      // TODO 这里还可以继续抽离代码，待优化
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'commons',
        chunks: 'initial'
      },
      // 单独打包 react 以及 react-dom
      react: {
        name: 'react',
        test: /[\\/]node_modules[\\/](react)[\\/]/,
        chunks: 'all',
        priority: 6
      },
      reactDom: {
        name: 'react-dom',
        test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
        chunks: 'all',
        priority: 7
      },
      reactRouterDom: {
        name: 'react-router-dom',
        test: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
        chunks: 'all',
        priority: 8
      },
      // 打包第三方库 xp-sdk
      vendor: {
        name: 'vendor',
        test: /[\\/]node_modules[\\/]([\\@]heibanfe[\\/]xp-sdk)[\\/]/,
        chunks: 'all',
        priority: 9
      },
      encrypt: {
        name: 'encrypt',
        test: /[\\/]node_modules[\\/]([\\@]heibanfe[\\/]encrypt)[\\/]/,
        chunks: 'all',
        priority: 10
      },
      bridgeCore: {
        name: 'bridge-core',
        test: /[\\/]node_modules[\\/]([\\@]heibanfe[\\/]bridge-core)[\\/]/,
        chunks: 'all',
        priority: 11
      }
      // 这里还可以为一些其他的包做单独打包的配置，比如
      // antd: {
      //   name: 'antd',
      //   test: /[\\/]node_modules[\\/](antd)[\\/]/,
      //   chunks: 'all',
      //   priority: 9
      // },
    }
  },
  minimizer: [
    // 优化 js 压缩过程
    new TerserPlugin({
      // 开启缓存
      cache: true,
      // 开启多线程
      parallel: true,
      extractComments: false
    }),
    // 优化 css 压缩过程
    new OptimizeCSSAssetsPlugin({
      // 使用 cssnano 压缩，插件自带
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        safe: true,
        autoprefixer: false,
        discardComments: {
          removeAll: true
        }
      },
      // 将压缩过程输出到控制台
      canPrint: true
    })
  ]
}
