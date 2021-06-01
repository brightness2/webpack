/*
 * @Author: Brightness
 * @Date: 2021-06-01 10:34:35
 * @LastEditors: Brightness
 * @LastEditTime: 2021-06-01 14:02:41
 * @Description:
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //清理文件夹
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //正则，匹配css文件
        use: ["style-loader", "css-loader"], //对应使用的loader，注意顺序
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //加载的图片
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //加载字体
        type: "asset/resource",
      },
    ],
  },
};
