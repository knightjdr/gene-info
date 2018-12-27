const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './chrome-extension/src/popup/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'chrome-extension/dev-build'),
  },
};
