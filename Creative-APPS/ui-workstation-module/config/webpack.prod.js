const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const commonConfig = require('./webpack.common');
const domain = process.env.PRODUCTION_DOMAIN || '.';

const PUB_PATH = '/s3_bucket/latest/workstation/';
const TIMELINE_PUB_PATH = '/s3_bucket/latest/timeline/';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: PUB_PATH,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        timeline: `timeline@${domain}${TIMELINE_PUB_PATH}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'workstation',
      filename: 'remoteEntry.js',
      exposes: {
        './WorkstationApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
