/*
 * @Author: Brightness
 * @Date: 2021-06-01 14:51:08
 * @LastEditors: Brightness
 * @LastEditTime: 2021-06-01 15:07:43
 * @Description:
 */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
  },
};
