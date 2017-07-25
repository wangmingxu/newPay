var path = require('path');
var webpack = require('webpack');
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new es3ifyPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test:/\.css$/,
      loader:'style-loader!css-loader'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }],
    // postLoaders: [
    //   {
    //     test: /\.js$/,
    //     loaders: ['es3ify-loader','uglify-loader']
    //   }
    // ]
  },
  // 'uglify-loader': {
  //     mangle: false,
  // }
};
