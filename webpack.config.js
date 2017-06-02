const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const argv = require("yargs").argv;


const extractCSS = new ExtractTextPlugin("style.css");

const isProd = argv.env === 'prod';
const isDev = argv.env === 'dev';

let plugins = [extractCSS];

if (isProd) {
  plugins.push(
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
}

module.exports = {
  entry: [
    "./src/scripts/index.js",
    "./src/style/index.scss"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: { minimize: isProd }
          },
            "sass-loader"
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  },
  plugins: plugins
};
