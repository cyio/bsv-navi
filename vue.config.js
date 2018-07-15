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
      importScripts: ['https://cdn.jsdelivr.net/npm/workbox-sw@latest/build/workbox-sw.min.js'],
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
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
