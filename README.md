# data-structures-and-algorithms

## Table of Contents
[Reverse an Array](#reverse-an-array) <br/>
[Shift an Array](#shift-an-array)<br/>
[Array Binary Search](#array-binary-search)

## [Reverse an Array](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/20)
Is it worth it? Let me work it. <br/>
I put my arr down, flip it and reverse it. </br>
Ti esrever dna ti pilf, nwod rra ym tup i.</br>
\- Missy Elliot

### Challenge
Write a function called `reverseArray()` which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

### Approach & Efficency
I used the `forEach` method to iterate through the inputed array, passing through the current value and index. Then, in a new array, I set the current value's index to the original array's length minus the current index minus one. This method allows arrays of any length to be reversed.

Alternatively, I also fed the array through a for loop that sets the starting index at the array length minus 1. Each iteration of the loop the index value will be reduced by 1. In the loop, I push to a new array the value of the original array at the current index.

Both of these methods will console log the original array reversed. Both of these methods allows arrays of any length to be reversed using 6 lines of code.

### Solution
![Array Reverse](./assets/arrayReverse.jpg)

## [Shift an Array](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/21)
Creating a function to insert a value into the middle of an array.

### Challenge
Write a function called `insertShiftArray()` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

### Approach & Efficency
I started with finding the middle index of the given array. From there I first check to see if the array is empty, and if so just push the given value into the array. Otherwise I call a function that will iterate through the array, checking if the current index value isn't equal to the middle index value I defined previously. If that is true, I push the current element into a new array. Otherwise, I first push the given value into the new array and then push the current element.

This allows for arrays of any length, including zero, to return valid results. The entire solution takes about 11 lines of code.

### Solution
![Array Shift](./assets/arrayShift.jpg)

## [Array Binary Search](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/23)
Creating a function to find the index of an array where the array's element is equal to the given value. If no element in the array matches, the function returns -1.

### Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

### Approach & Efficency
In the function I begin with setting the variable to be returned to equal -1. From there I loop through the array, evaluating on each iteration, if the current element of the array matches the given key value. If it does, the index variable is set to equal the current index value of the loop. If it doesn't, nothing happens. Finally the function returns the value of the index variable.

This function takes 6 lines of code. This function will work with arrays of any length, including empty arrays. It will also work if a ey value is not given.

### Solution
![Array Binary Search](./assets/array-binary-search.jpg)
