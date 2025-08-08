const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.REACT_APP_UNSPLASH_ACCESS_KEY),
      'process.env.REACT_APP_API_NINJAS_KEY': JSON.stringify(process.env.REACT_APP_API_NINJAS_KEY)
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
};