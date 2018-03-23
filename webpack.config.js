const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const argv = require("yargs").argv;
const path = require("path");

const isProd = argv.env === 'prod';
const configResolve = require.resolve("./src/config/" + argv.env + ".js");
const config = require("./src/config/" + argv.env + ".js");
const _package = require("./package.json");
const JS_JSX_PATTERN = /\.jsx?$/;
const SCSS_PATTERN = /\.scss$/;
const CSS_PATTERN = /\.css$/;
const ASSET_PATTERN = /\.(jpe?g|png|gif|svg|ttf|otf|eot|woff(2)?)(\?v=\d+)?$/;
const DEV_SERVER_PORT = 8080;
const PROJECT_NAME = process.env.npm_package_name;
const VERSION = (_package.version);
const DESCRIPTION = (_package.description);
const PACKAGE_NAME = PROJECT_NAME + "-" + VERSION;
const distFolder = isProd ? 'dist' : '';

const extractCSS = new ExtractTextPlugin(`${PACKAGE_NAME}.css`);

const HtmlWebpack =
new HtmlWebpackPlugin({
  template: 'src/index.ejs',
  inject: 'body',
  hash: true,
  filename: `index.html`,
  description: DESCRIPTION
});

let plugins = [HtmlWebpack, extractCSS];
let rules = [
  {
    test: JS_JSX_PATTERN,
    include: [
      path.resolve(__dirname, "src/scripts")
    ],
    loader: "babel-loader",
    options: {
      presets: ["react", "es2015", "stage-1"]
    }
  },
  {
    test: SCSS_PATTERN,
    include: [
      path.resolve(__dirname, "src/scripts")
    ],
    use: extractCSS.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            minimize: isProd,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: "[name]--[local]--[hash:base64:8]"
          }
        },
        {
          loader: "sass-loader",
          options: {
            data: "$DIST_FOLDER: '" + (isProd ? config.homeUrl.slice(1) : '') + "';"
          }
        }
      ]
    })
  },
  {
    test: ASSET_PATTERN,
    loader: 'file-loader',
    options: {
      name: `assets/[name]-[hash].[ext]`
    }
  },
  {
    test: JS_JSX_PATTERN,
    include: [
      path.resolve(__dirname, "src/scripts")
    ],
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      failOnWarning: false,
      failOnError: isProd,
      quiet: isProd
    }
  },
  {
    test: CSS_PATTERN,
    loader: 'style-loader!css-loader'
  }
];

if (isProd) {
  plugins.push(
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'process.NODE_ENV': JSON.stringify('production'),
        'process.env.BUILD_ENV': JSON.stringify(argv.env),
        'process.env.BASENAME': JSON.stringify(process.env.BASENAME),
      }
    })
  );
}

module.exports = {
  entry: [
    "./src/scripts/index.jsx",
    "./src/scripts/index.scss"
  ],
  output: {
    path: path.resolve(__dirname, distFolder),
    publicPath: config.homeUrl,
    filename: `${PACKAGE_NAME}.js`
  },
  module: {
    rules: rules
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, 'src/scripts'),
      path.resolve(__dirname, 'src/assets'),
      path.resolve(__dirname, 'node_modules')
    ],
    alias: {
      config$: configResolve
    }
  },
  devServer: {
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    contentBase: "./"
  },
  plugins: plugins
};
