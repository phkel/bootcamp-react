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
             },
             {
                 test: /\.(|css)$/,
                 exclude: /node_modules/,
                 use: ['style-loader','css-loader']
             },
              {
             test: /\.(png|jp(e*)g|svg)$/,
             use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                }
            }]
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
