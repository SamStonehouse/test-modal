const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_DIR = path.resolve(ROOT_DIR);
const BUILD_DIR = path.resolve(ROOT_DIR, 'dev-dist');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(SOURCE_DIR, 'entry.js'),
  output: {
    path: path.join(BUILD_DIR, 'assets'),
    filename: 'bundle.js',
    publicPath: 'assets/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${__dirname}/postcss.config.js`
              }
            }
          }
        ],
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR], {
      root: ROOT_DIR,
    }),
    new DuplicatePackageCheckerPlugin({ verbose: true }),
    new WriteFilePlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(SOURCE_DIR, 'html'),
        to: BUILD_DIR,
      },
      {
        from: path.join(SOURCE_DIR, 'assets'),
        to: path.join(BUILD_DIR, 'assets'),
      }
    ])
  ],
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    compress: true,
    port: 8080,
    contentBase: BUILD_DIR,
    publicPath: BUILD_DIR,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false,
    },
    historyApiFallback: {
      index: 'index.html'
    }
  },
};
