'use strict';

const insertShiftArray = (arr, val) => {
  let newArr = [];
  let addIdx = Math.ceil(arr.length / 2);
  arr.length === 0 ? newArr.push(val) : iterateArr(arr, val, addIdx, newArr);
  return newArr;
}

const iterateArr = (arr, val, idx, newArr) => {
  arr.forEach((elem, i) => {
    i !== idx ? newArr.push(elem) : (newArr.push(val), newArr.push(elem));
  });
}

module.exports = insertShiftArray;