const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: { ReactGoogleMaps: './src/index.tsx' },
  output: {
    filename: '[name].js',
    path: outputDir
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [new CleanWebpackPlugin([outputDir])],
  devServer: {
    compress: true
  }
};
