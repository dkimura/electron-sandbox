var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    js: './js/index.js',
    html: './index.html'
  },
  output: {
      path: __dirname + '/dist',
      filename: './js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test:     /\.html$/,
        loaders:  ['file?name=[name].[ext]'],
      },
      {
        test:     /\.scss$/,
        loader:  ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
}
