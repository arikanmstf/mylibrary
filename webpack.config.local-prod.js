const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('webpack-config-arikanmstf');

const definePlugin = new webpack.DefinePlugin({
  API_ENV: JSON.stringify('local'),
  NODE_ENV: JSON.stringify('production'),
});

common.plugins.push(new UglifyJSPlugin());
common.plugins.push(definePlugin);
common.output.publicPath = '/';
common.devServer.port = 3000;
common.mode = 'production';

module.exports = common;
