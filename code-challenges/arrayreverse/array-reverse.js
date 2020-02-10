'use strict'
const firstArr = [1, 2, 3, 4, 5, 6];
const secondArr = [89, 2354, 3546, 23, 10, -923, 823, -12];
const thirdArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

// reverses array by iterating through the array and setting the index of that value to the array's length minus the current index minus one.
const reverseArray = (array) => {
  const reversedArr = [];
  array.forEach((element, index) => {
    reversedArr[array.length - index - 1] = element;
  });
  return console.log(`Reversed array: ${reversedArr}`);
}

reverseArray(firstArr);
reverseArray(secondArr);
reverseArray(thirdArr);
