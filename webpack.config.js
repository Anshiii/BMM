const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)(\?.*)?$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'], // 预置 env？
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    /* new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./lib/manifest.json')
          })   */
  ],
};

