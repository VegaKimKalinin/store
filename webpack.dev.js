const path = require('path');

const config = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
