const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const argv = require('yargs').argv;

let extractCSS = new ExtractTextPlugin('style.css');
let UglifyJSP = new UglifyJSPlugin();

const isProd = argv.env === 'prod';
const isDev = argv.env === 'dev';

let plugins = [extractCSS];

if (isProd) {
  plugins.push(UglifyJSP)
}

module.exports = {
  entry: [
    './src/scripts/index.js',
    './src/style/index.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css','sass'])
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: plugins
};
