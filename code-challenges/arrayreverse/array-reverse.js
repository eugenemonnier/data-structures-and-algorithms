'use strict'

// reverses array by iterating through the array and setting the index of that value to the array's length minus the current index minus one.
const reverseArray = (array) => {
  const reversedArr = [];
  array.forEach((value, index) => {
    reversedArr[array.length - index - 1] = value;
  });
  return reversedArr;
}

const altReverseArray = (array) => {
  const reversedArr = [];
  for( var i = array.length - 1; i > 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
