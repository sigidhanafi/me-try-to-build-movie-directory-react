const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
