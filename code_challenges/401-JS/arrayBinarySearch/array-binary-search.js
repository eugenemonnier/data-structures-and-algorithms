'use strict'

function BinarySearch (arr, key) {
  const index = Math.floor(arr.length / 2) - 1
  const lowerLimit = 0
  const higherLimit = arr.length - 1

  return midPoint(arr, index, key, lowerLimit, higherLimit)
}

function midPoint (arr, index, key, lL, hL) {
  while (true) {
    index = Math.floor((lL + hL) / 2)

    if (arr[index] === key) {
      return index
    } else if (lL > hL) {
      index = -1
      return index
    } else if (arr[index] < key) {
      lL = index + 1
    } else {
      hL = index - 1
    }
  }
}

function generateArray (length) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = Math.round(Math.random() * 100)
  }
  arr.sort((a, b) => a - b)
  const key = Math.round(Math.random() * 100)
  return [arr, key]
}
//
// let value = (generateArray(100));
// console.log(BinarySearch(value[0], value[1]));

module.exports = {
  BinarySearch: BinarySearch,
  generateArray: generateArray
}
