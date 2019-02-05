const webpack = require('webpack');
const common = require('webpack-config-arikanmstf');

const definePlugin = new webpack.DefinePlugin({
  API_ENV: JSON.stringify('live'),
  NODE_ENV: JSON.stringify('development'),
});

common.plugins.push(definePlugin);
common.output.publicPath = '/mylibrary/';

module.exports = common;
