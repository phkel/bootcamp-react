var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
         rules: [
             {
                 test: /\.(js|jsx)$/,
                 exclude: /node_modules/,
                 use: ['babel-loader']
             }
         ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  ]


};
