var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './build'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
