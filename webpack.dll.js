const webpack =  require('webpack');
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = path.join(__dirname, 'lib');
const vendors = [
  'react',
  'react-dom',
  // 'react-redux', 
];
module.exports = {
  entry: {
    vendors: vendors
  },
  output: {
    path: outputPath,
    filename: 'dll.[name].js',
    library: '[name]',
    umdNamedDefine: true,
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['lib']),
    new webpack.DllPlugin({
      path: path.join(outputPath, 'manifest.json'),
      name: '[name]',
      context: __dirname     
    }),
  ],
}
