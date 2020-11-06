const path = require('path');
const webpack = require(webpack);
const Manifest = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',

  entry: './src/index.js',

  plugins: [
    new MiniCssExtractPlugin(),
    new Manifest(),
    new webpack.DefinePlugin({ __SERVER__: false }),
  ],

  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
    ],
  },

  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
  },
};

module.exports = config;
