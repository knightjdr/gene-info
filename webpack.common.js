const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildVariables = require('./chrome-extension/build-variables');

module.exports = env => ({
  entry: {
    background: './chrome-extension/src/background/events.js',
    content: './chrome-extension/src/content/index.js',
    popup: './chrome-extension/src/popup/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: './chrome-extension/dev-build/index.html',
      inject: false,
      minify: false,
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '@@store',
        replacement: env.browser
          ? buildVariables.storeURL[env.browser]
          : buildVariables.storeURL.chrome,
      },
    ]),
  ],
});
