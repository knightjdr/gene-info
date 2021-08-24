const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildVariables = require('./build-variables');

module.exports = env => ({
  entry: {
    background: './src/background/events.js',
    content: './src/content/index.js',
    popup: './src/popup/index.js',
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
      template: './src/index.html',
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
