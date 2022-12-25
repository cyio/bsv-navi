const path = require('path')
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: 'vue-markdown-loader/lib/markdown-compiler',
              options: {
                raw: true
              }
            }
          ]
        },
        // {
          // test: /\.js$/,
          // loader: 'babel-loader',
          // include: [resolve('src'), resolve('test'), resolve('node_modules/vue-awesome')]
        // }
      ]
    },
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      importWorkboxFrom: 'disabled',
      importScripts: ['https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js'],
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // output filename is inferred to be `subpage.html`.
    // handle: {
      // entry: 'src/handle/main.js',
      // template: 'public/index.html',
      // filename: 'handle/index.html',
    // }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://api.oaker.bid',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 重写接口
        }
      }
    },
    historyApiFallback: false,
  },
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
