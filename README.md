# Table of Contents
[Algorithms](#algorithms)
- [Reverse an Array](#reverse-an-array) <br/>
- [Shift an Array](#shift-an-array)<br/>
- [Array Binary Search](#array-binary-search)<br/>

[Data Structures](#data-structures)
- [Linked Lists](#linked-lists)<br/>

# Algorithms
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

# Data Structures
## [Linked Lists](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/25)
Create `LinkedList` and `Node` classes. `LinkedList` class contains methods `insert()` (inserts node at head), `includes()` (finds if linked list contains given value), and `toString()` (converts a linked list into a string value).

### Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  - Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  - Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  - Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

### Approach & Efficency
After creating the `Node` & `LinkedList` classes, I created three methods: `insert()`, `includes()`, `toString()`. 

The `insert()` method creates a variable, `createNode` that calls a new instance of the `Node` constructor passing in the give value.  Then the .next key value is changed from null to the value of the linked list's head, so that the new node points to the linked list's head. Then the linked list's head is given the value of `createNode` adding the new node at the beginning of the list. This method only needs to access the head of the linked list giving it a O(1) time performance.

The `includes()` method starts by creating the variable `result` and setting its value to `false`. Then the function checks to see if the linked list is empty. If it is and the given value was `null` then the function returns `true`. If the given value was any other value, an empty linked list returns `false`. Otherwise the variable `currentNode` is created and its value is set to the head of the linked list. Then while the value of `currentNode.next` does not equal `null` the function traverses the linked list breaking out of the loop and returning `true` if either the `currentNode.next.value`, the `currentNode.value`, or the `currentNode.next.next` is equal to the given value. Otherwise the function returns `false`.

The `toString()` method starts by creating an empty string variable, `linkedString`, and a variable `currentNode` that is given the value of the linked list's head. If the linked list is empty the function will return a string value of `'NULL'`. Otherwise the function will traverse the linked list adding the `currentNode.value` to the `linkedString` variable. If `currentNode.next.next` is equal to `null` then the `currentNode.next.value` will also be added to the `linkedString` variable. After which the function will return the value of the varaible `linkedString`.

### Solution
