var path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundleru.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.ts?$/
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}