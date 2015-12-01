var config = require('./webpack.config.base');

config.entry.js = [
  'webpack-dev-server/client?http://0.0.0.0:8080',
  'webpack/hot/only-dev-server',
  config.entry.js
]

config.devtool = 'eval-source-map';

config.module.loaders = config.module.loaders.concat(
  [
    {
      test:    /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }
  ]
)

module.exports = config;
