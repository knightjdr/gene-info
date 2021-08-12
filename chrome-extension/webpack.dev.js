const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = env => merge(common(env), {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `dev-build-v${env.manifest}`),
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
