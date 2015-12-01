var config = process.env.NODE_ENV === 'production' ?
  require('./webpack.config.production'):
  require('./webpack.config.develop');

module.exports = config;
