const webpack = require('webpack');
const common = require('webpack-config-arikanmstf');
const path = require('path');

const definePlugin = new webpack.DefinePlugin({
  // DEVELOPMENT and PRODUCTION for debugging
  IS_DEVELOPMENT: JSON.stringify(true),
  IS_PRODUCTION: JSON.stringify(false),

  // LOCAL and LIVE for env variables
  IS_LOCAL: JSON.stringify(true),
  IS_LIVE: JSON.stringify(false),

  ENVIRONMENT: JSON.stringify('local'),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
});

common.plugins.push(definePlugin);
common.output.publicPath = '/';
common.entry = [
  '@babel/polyfill',
  path.resolve(__dirname, `src/app/web/index.js`),
];

module.exports = common;
