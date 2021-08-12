const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist-test'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `dev-build-v${env.manifest}/manifest.json`, to: 'manifest.json' },
        { from: `dev-build-v${env.manifest}/icon`, to: 'icon/' },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
});
