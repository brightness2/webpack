/*
 * @Author: Brightness
 * @Date: 2021-06-01 14:51:37
 * @LastEditors: Brightness
 * @LastEditTime: 2021-06-01 15:01:15
 * @Description:
 */
import _ from "lodash";
import numRef from "./ref.json";

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ""
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
