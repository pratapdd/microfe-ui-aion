const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        bloom:
          'bloom@http://localhost:8080/s3_bucket/latest/bloom/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        workstation: 'workstation@http://localhost:8080/s3_bucket/latest/workstation/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        vuejs:
          'vuejs@http://localhost:8080/s3_bucket/latest/vuejs/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        timeline:
          'timeline@http://localhost:8080/s3_bucket/latest/timeline/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
