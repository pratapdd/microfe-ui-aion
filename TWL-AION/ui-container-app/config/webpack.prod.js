const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN || '';

const WORKSTATION_PUB_PATH = '/s3_bucket/latest/workstation/';
const BLOOM_PUB_PATH = '/s3_bucket/latest/bloom/';
const VUEJS_PUB_PATH = '/s3_bucket/latest/vuejs/';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        bloom: `bloom@${domain}${BLOOM_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        workstation: `workstation@${domain}${WORKSTATION_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        vuejs: `vuejs@${domain}${VUEJS_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
