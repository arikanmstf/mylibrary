const webpack = require('webpack');
const common = require('webpack-config-arikanmstf');
const path = require('path');

const definePlugin = new webpack.DefinePlugin({
  API_ENV: JSON.stringify('local'),
  NODE_ENV: JSON.stringify('development'),
});

common.plugins.push(definePlugin);
common.output.publicPath = '/';
common.entry = [
  '@babel/polyfill',
  path.resolve(__dirname, `src/app/web/index.js`),
];
common.devServer.port = 3000;
common.devtool = 'source-map';
common.mode = 'development';

module.exports = common;
