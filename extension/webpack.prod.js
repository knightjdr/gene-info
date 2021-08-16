const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const { merge } = require('webpack-merge');

const buildVariables = require('./build-variables');
const common = require('./webpack.common');

const defineDest = env => (env.test === 'true' ? `${env.browser}-test` : env.browser);

const defineIconSource = (env) => {
  if (env.browser === 'safari') {
    return 'icons/icon-safari';
  } if (env.test === 'true') {
    return 'icons/icon-test';
  }
  return 'icons/icon-prod';
};

const defineManifestChanges = (env) => {
  const rules = [
    {
      search: '"version": "@version"',
      replace: `"version": "${buildVariables.version}"`,
    },
    {
      search: /Gene Info/g,
      replace: `Gene Info${env.test === 'true' ? ' - test version' : ''}`,
    },
  ];

  if (env.browser === 'firefox') {
    rules.push({
      search: / {2}"version_name": "@version",\n/,
      replace: '',
    });
  } else {
    rules.push({
      search: /"version_name": "@version"/,
      replace: `"version_name": "${buildVariables.version}${env.test === 'true' ? ' test' : ''}"`,
    });
  }

  return rules;
};

module.exports = (env) => {
  const dest = defineDest(env);
  const iconSource = defineIconSource(env);
  const manifestRuleChanges = defineManifestChanges(env);
  const manifestSource = `manifests/manifest-v${env.manifest}.json`;

  return merge(
    common(env),
    {
      devtool: 'cheap-module-source-map',
      mode: 'production',
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, dest),
      },
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            { from: manifestSource, to: 'manifest.json' },
            { from: iconSource, to: 'icon/' },
          ],
        }),
        new MiniCssExtractPlugin(),
        new ReplaceInFileWebpackPlugin([
          {
            dir: dest,
            files: ['manifest.json'],
            rules: manifestRuleChanges,
          },
        ]),
      ],
    },
  );
};
