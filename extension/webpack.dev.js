const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const { merge } = require('webpack-merge');

const buildVariables = require('./build-variables');
const common = require('./webpack.common');

module.exports = env => merge(common(env), {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev-build'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `manifests/manifest-v${env.manifest}.json`, to: 'manifest.json' },
        { from: 'icons/icon-test', to: 'icon/' },
      ],
    }),
    new Dotenv({
      path: './.env.development',
    }),
    new MiniCssExtractPlugin(),
    new ReplaceInFileWebpackPlugin([
      {
        dir: 'dev-build',
        files: ['manifest.json'],
        rules: [
          {
            search: '"version": "@version"',
            replace: `"version": "${buildVariables.version}"`,
          },
          {
            search: /Gene Info/g,
            replace: 'Gene Info - test version',
          },
          {
            search: / {2}"version_name": "@version",\n/,
            replace: () => (env.browser === 'firefox' ? '' : `  "version_name": "${buildVariables.version} test",\n`),
          },
        ],
      },
    ]),
  ],
});
