const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'chrome-extension/dist'),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'chrome-extension/dev-build/manifest.json', to: 'chrome-extension/dist/manifest.json' },
      { from: 'chrome-extension/dev-build/popup.html', to: 'chrome-extension/dist/popup.html' },
      { from: 'chrome-extension/dev-build/icon', to: 'chrome-extension/dist/' },
    ]),
  ],
});
