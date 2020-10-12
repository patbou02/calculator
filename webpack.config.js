const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Use only for local development
  //devtool: 'eval-source-map',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CopyPlugin(
      [
        {
          from: path.resolve(__dirname, './src/index.html'),
          to: path.resolve(__dirname, './dist/index.html')
        }
      ]
    ),
  ],
};