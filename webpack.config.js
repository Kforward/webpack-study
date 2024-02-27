const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // 开启源代码映射 （生产环境建议关闭）
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '生产环境'
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single'
  }
}