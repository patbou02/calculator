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
        },
        {
          from: path.resolve(__dirname, './src/css/styles.css'),
          to: path.resolve(__dirname, './dist/css/styles.css')
        }
      ]
    ),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};