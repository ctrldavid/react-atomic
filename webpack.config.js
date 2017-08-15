/* global __dirname */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Atomic Design',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), // string
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          /node_modules/,
        ],
        loader: 'babel-loader',

        options: {
          presets: [
            ['env', {
              'targets': {
                'browsers': ['last 2 versions', 'safari >= 7'],
              },
              'modules': false,
            }],
            'react',
          ],
          plugins: ['transform-object-rest-spread', 'react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },

  // resolve: {
  //   modules: [
  //     'node_modules',
  //     path.resolve(__dirname, 'src')
  //   ],

  //   extensions: ['.js', '.json', '.jsx', '.css'],
  // },

  devtool: 'eval',//'source-map',

  // context: __dirname,

  // target: 'web',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
};