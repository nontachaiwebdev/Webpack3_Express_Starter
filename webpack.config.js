var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: path.join(__dirname,"app.js"),
  output: {
    path: path.join(__dirname,"bundle"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2017']
        }
      }
    ]
  }
}
