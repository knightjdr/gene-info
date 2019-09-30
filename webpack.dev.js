const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'chrome-extension/dev-build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.resolve(__dirname, 'chrome-extension/dev-build'),
    }),
  ],
});
