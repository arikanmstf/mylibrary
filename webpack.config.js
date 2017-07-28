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
  description: DESCRIPTION,
  extraFiles: {
    css: config.homeUrl + 'static/css/bootstrap.min.css'
  }
});

let plugins = [HtmlWebpack, extractCSS];
let rules = [
  {
    test: JS_JSX_PATTERN,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      presets: ["react", "es2015", "stage-1"]
    }
  },
  {
    test: SCSS_PATTERN,
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
];

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

rules.push({
  test: JS_JSX_PATTERN,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'eslint-loader',
  options: {
    failOnWarning: false,
    failOnError: isProd,
    quiet: isProd
  }
});

rules.push({
  test: ASSET_PATTERN,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    name: `assets/[path][name].[ext]?[hash]`,
    context: 'assets'
  }
});

module.exports = {
  entry: [
    "./src/scripts/index.jsx",
    "./src/style/index.scss"
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
      path.resolve(__dirname, './src/scripts'),
      path.resolve(__dirname, './src/assets'),
      path.resolve(__dirname, './node_modules')
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
