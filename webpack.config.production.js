var webpack = require('webpack');
var config  = require('./webpack.config.base');

config.bail     = true;
config.debug    = false;
config.profile  = false;
config.devtool  = '#source-map';

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
]);

config.module.loaders = config.module.loaders.concat([
  {
    test:    /\.jsx?$/,
    exclude: /node_modules/,
    loader:  'babel'
  }
])

module.exports = config;
