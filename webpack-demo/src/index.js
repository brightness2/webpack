/*
 * @Author: Brightness
 * @Date: 2021-06-01 09:51:43
 * @LastEditors: Brightness
 * @LastEditTime: 2021-06-01 14:07:53
 * @Description:
 */
import _ from "lodash";
import "./style.css";
import img from "./1.jpg";
import printMe from "./print";
function component() {
  const element = document.createElement("div");
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "Brightness"], " ");
  element.classList.add("hello");

  //将图片添加到div中
  const myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  element.onclick = printMe;

  return element;
}
document.body.appendChild(component());
