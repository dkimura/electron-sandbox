var webpack = require('webpack');
var config  = require('./webpack.config.base');

config.target   = 'atom';
config.bail     = true;
config.debug    = false;
config.profile  = false;

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false
    },
    sourceMap: false,
    mangle: true
  })
]);

config.module.loaders = config.module.loaders.concat([
  {
    test:    /\.jsx?$/,
    exclude: /node_modules/,
    loader:  'babel'
  }
])

module.exports = config;
