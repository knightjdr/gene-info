const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'chrome-extension/dist-test'),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'chrome-extension/dev-build/manifest.json', to: 'manifest.json' },
      { from: 'chrome-extension/dev-build/popup.html', to: 'popup.html' },
      { from: 'chrome-extension/dev-build/icon-test', to: 'icon/' },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.resolve(__dirname, 'chrome-extension/dist-test'),
    }),
  ],
});
