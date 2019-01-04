const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
};
