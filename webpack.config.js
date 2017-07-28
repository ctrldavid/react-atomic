const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Atomic Design',
      template: path.resolve(__dirname, 'src', 'index.html'),
    })
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
                'browsers': ['last 2 versions', 'safari >= 7']
              }
            }],
            'react',
          ],
          plugins: ['transform-object-rest-spread'],
        },
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

  devtool: 'source-map',

  // context: __dirname,

  // target: 'web',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
};