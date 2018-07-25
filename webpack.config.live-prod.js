const path = require('path');
const webpack = require('webpack');

const common = require(path.resolve(__dirname, './webpack.config.js')); // eslint-disable-line import/no-dynamic-require

const definePlugin = new webpack.DefinePlugin({
  // DEVELOPMENT and PRODUCTION for debugging
  IS_DEVELOPMENT: JSON.stringify(false),
  IS_PRODUCTION: JSON.stringify(true),

  // LOCAL and LIVE for env variables
  IS_LOCAL: JSON.stringify(false),
  IS_LIVE: JSON.stringify(true),

  ENVIRONMENT: JSON.stringify('live'),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
});

common.plugins.push(definePlugin);

module.exports = common;
