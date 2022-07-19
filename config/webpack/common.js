const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env, stringified } = require('../env');
const { physicalPaths } = require('../paths');

console.log(stringified);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: physicalPaths.appBuild,
    publicPath: physicalPaths.publicPath,
    pathinfo: false,
    filename: './static/js/[name].bundle.js'
  },
  devServer: {
    port: env.PORT,
    host: env.HOST,
    public: env.WEBPACK_PUBLIC || env.HOST,
    publicPath: '/',
    contentBase: physicalPaths.appBuild,
    hot: true,
    open: true,
    compress: true
  },
  plugins: {
    stringified: () => new webpack.DefinePlugin(stringified),
    compressionPlugin: () => new CompressionPlugin(),
    htmlWebpackPlugin: production =>
      new HtmlWebpackPlugin({
        template: physicalPaths.appIndexHtml,
        hash: production,
        minify: {
          collapseWhitespace: production,
          removeComments: production,
          removeRedundantAttributes: production,
          removeScriptTypeAttributes: production,
          removeStyleLinkTypeAttributes: production,
          useShortDoctype: production,
          minifyJS: production,
          minifyCSS: production,
          minifyURLs: production
        }
      }),
    miniCssExtractPlugin: () =>
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[id].css'
      })
  },
  rules: {
    js_jsx: {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    sass: {
      test: /\.scss$/,
      use: [
        {
          loader:
            process.env.NODE_ENV !== 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  }
};
