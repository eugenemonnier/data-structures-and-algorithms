'use strict';

function BinarySearch(arr,key) {
  let index = -1;
  for(let i = 0; i < arr.length; i++) {
    arr[i] === key ? index = i : null;
  }
  return index;
}

function generateArray(length) {
  let arr = [];
  for(let i = 0; i < length; i++){
    arr[i] = Math.round(Math.random() * 100);
  }
  arr.sort((a,b) => a -b );
  let key = Math.round(Math.random() * 100);
  return [arr,key];
}

module.exports = {
  BinarySearch: BinarySearch,
  generateArray: generateArray,
}