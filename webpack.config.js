module.exports = {
  mode: 'production',
  entry: './app.js',
  node: {
    fs: 'empty',
  },
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  resolve: {
    alias: {
      'vue': './node_modules/vue/dist/vue.min.js',
      'vue-loader': './node_modules/vue-loader/',
      'vue-router': './node_modules/vue-router/dist/vue-router.min.js',
      'swiper.js': './node_modules/swiper/dist/js/swiper.min.js',
      'swiper.css': './node_modules/swiper/dist/css/swiper.min.css',
    }
  }
}

