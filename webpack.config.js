const webpack = require('webpack');
const path = require('path');

module.exports = {

  devtool: 'source-map',

  entry: [
    './client/index.js'
  ],

  output: {
    path: path.join(__dirname, '/build'),
    filename: "bundle.js",
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'HOST': JSON.stringify('http://localhost:3001')
      }
    })
  ],

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loaders: [ 'babel-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttc|ttf|eot|woff|woff2|mp4)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".css"]
  }

}
