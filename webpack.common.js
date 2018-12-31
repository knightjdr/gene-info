const path = require('path');

module.exports = {
  entry: {
    events: './chrome-extension/src/events/events.js',
    popup: './chrome-extension/src/popup/index.js',
  },
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
    filename: '[name].js',
    path: path.resolve(__dirname, 'chrome-extension/dev-build'),
  },
};
