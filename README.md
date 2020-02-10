# data-structures-and-algorithms

## Reverse an Array
Is it worth it? Let me work it. <br/>
I put my arr down, flip it and reverse it. </br>
Ti esrever dna ti pilf, nwod rra ym tup i.</br>
\- Missy Elliot

### Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

### Approach & Efficency
I used the forEach method to iterate through the inputed array, passing through the current value and index. Then, in a new array, I set the current value's index to the original array's length minus the current index minus one. This method allows arrays of any length to be reversed.

Alternatively, I also fed the array through a for loop that sets the starting index at the array length minus 1. Each iteration of the loop the index value will be reduced by 1. In the loop, I push to a new array the value of the original array at the current index.

Both of these methods will console log the original array reversed. Both of these methods allows arrays of any length to be reversed using 6 lines of code.

### Solution
![Array Reverse](./assets/arrayReverse.jpg)
