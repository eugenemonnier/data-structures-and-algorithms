# Table of Contents
[Algorithms](#algorithms)
- [Reverse an Array](#reverse-an-array) <br/>
- [Shift an Array](#shift-an-array)<br/>
- [Array Binary Search](#array-binary-search)<br/>
- [FIFO Animal Shelter](#fifo-animal-shelter)<br/>

[Data Structures](#data-structures)
- [Linked Lists](#linked-lists)<br/>
- [Linked Lists Insertion](#linked-lists-(insertion))<br/>
- [Linked Lists kth](#linked-lists-kth)<br/>
- [Linked Lists Merge Lists](#linked-lists-merge-lists)<br/>
- [Stack and Queue Implementation](#stack-and-queue-implementation)<br/>
- [Queue with Stacks](#queue-with-stacks)


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

## [FIFO Animal Shelter](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/31)
Create `AnimalShelter` class with methods `enqueue(animal)` and `dequeue(pref)`

### Challenge
- Create a class called `AnimalShelter` which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - `enqueue(animal)`: adds `animal` to the shelter. `animal` can be either a `dog` or a `cat` object.
  - `dequeue(pref)`: returns either a dog or a cat. If `pref` is not `"dog"` or `"cat"` then return `null`.

### Solution & Efficency
I created the `AnimalShelter` class and the `enqueue` & `dequeue` methods.

With the `enqueue(animal)` method, I check to see if the `animal.type` provided is either `dog` or `cat`. If it is, the function pushes the `animal` object to the `shelter` array. Otherwise it returns an error message.

With the `dequeue(pref)` method, I check to see if `pref` is either a `dog` or `cat`. If so the function loops through the `shelter` array checking whether `shelter.type` is equal to `pref`. When it finds a match, it splices the `shelter` array at the index of the match. If the user did not give an arg for `pref` then `pref` is set to the `shelter[0].type` and the object at index 0 is removed. If the user enters in any other arg for `pref`, then `pref` is set to null. At the end of the function `pref` is returned.

### Solution
![FIFO Animal Shelter](./assets/fifo-animal-shelter.jpg)

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

## [Linked Lists (Insertion)](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/26)
Create three additonal methods for the LinkedList class.

### Challenge
- `.append(value)` which adds a new node with the given `value` to the end of the list
- `.insertBefore(value, newVal)` which add a new node with the given `newValue` immediately before the first value node
- `.insertAfter(value, newVal)` which add a new node with the given `newValue` immediately after the first `value` node

### Approach & Efficency
- `.append(value)` traverses the linked list, till it reaches the end. Then it adds a new node with the given `value` at the end of the list. Time = O(n), Space 0(n).

- `.insertBefore(value, newVal)` traverses the linked list checking if the value of the next node is equal to the given `value`. When it finds that value it sets the current node to point to the new node and the new node to point to the next node. Time = O(n), Space 0(n).

- `.insertAfter(value, newVal)` traverses the linked list checking if the value of the next node is equal to the given `value`. When it finds that value it sets the next node to point to the new node and the new node to point to the next next node. Time = O(n), Space 0(n). 

### Solution
![Linked List Insert 1](./assets/ll-insert(1).jpg)![Linked List Insert 2](./assets/ll-insert(2).jpg)

## [Linked Lists kth](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/27)
Create a new method, kth().

### Challenge
- Write a method for the Linked List class which takes a number, `k`, as a parameter. Return the node’s value that is `k` from the end of the linked list. 

### Approach & Efficency
- `.kth(k)` traverses the linked list, till it reaches the end. While it does that it pushes the value of the current node into an array. If the array's length is longer than `k` it will `shift()` off the first element in the array. Once it reaches the end of the list, as long as the length of the array is equal to the value of `k`, then the function returns the value of the array at index 0. Time = O(n), Space 0(n).

## [Linked Lists Merge Lists](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/28)
Create a new function, mergeLists();

### Challenge
- Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. 

### Approach & Efficency
- `mergeLists()` takes in two lists and traverses both lists simultaneously. First `listA` is checked to see if it's current value isn't `null` and if not, that value is added to the `ziplist` through the `.append()` method. Next the same is done with `listB`. This will continue untill the value of boths lists equal `null`. Finally `ziplist` is returned.

## [Stack and Queue Implementation](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/29)
Created a Stack class (first in last out) and a Queue class (first in first out)

### Challenge
- Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to `top` when the stack is created.
  - Define a method called `push` which takes any value as an argument and adds a new node with that value to the `top` of the stack with an O(1) Time performance.
  - Define a method called `pop` that does not take any argument, removes the node from the `top` of the stack, and returns the node’s value.
  - Define a method called `peek` that does not take an argument and returns the value of the node located on `top` of the stack, without removing it from the stack.
  - Define a method called `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the stack is empty.
- Create a `Queue` class that has a `front` property. It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value assigned to `front` when the queue is created.
  - Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(n) Time performance.
  - Define a method called `dequeue` that does not take any argument, removes the node from the `front` of the queue, and returns the node’s value.
  - Define a method called `peek` that does not take an argument and returns the value of the node located in the `front` of the queue, without removing it from the queue.
  - Define a method called `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

### Approach & Efficency
For the `Stack` class, I created the methods `push`, `pop`, `peek`, and `isEmpty`. 
  - For the `push` method, I create a new variable, `newNode`, which is an instance of `Node` with the given `value` as the argument. The `next` property of that value is given the value of the stack's `top` property. Then the stack's `top` property is set to `newNode`.
  - For the `pop` method, I first check to see if the stack is empty. If it is, the the method returns `undefined`. Otherwise, I check if the stack has only one node on the stack by checking whether the value of the stack's `next` value exists. If it does not then we set the value of the stack's `top` to `null` and return it. Otherwise we set the stack's `top.value` to the `next.value`, then set the stack's `top.next` to the value of `top.next.next`, returning the stack's `top.value`.
  - For the `peek` method, I just return the `top.value` of the stack.
  - For the `isEmpty` method, I check if `top` of the stack exists. If so, the method returns `false`, otherwise it returns `true`.

For the `Queue` class, I created the methods `enqueue`, `dequeue`, `peek`, and `isEmpty`. 
  - For the `enqueue` method, I create a new variable, `newNode`, which is an instance of `Node` with the given `value` as the argument. Then I check if the `front` of the queue exists. If it does not, I set the `front` to `newNode`. Otherwise, I create the variable `currNode` which is set to the queues `front`. From there I traverse the queue until I reach the end of the queue. At that point `currNode.next` is set to equal `newNode`. Returning the `front` of the queue.
  - For the `dequeue` method, I create a new variable, `dequeueVal`. Then I check if the `front` of the queue exists. If it does not, then the function returns `undefined`. Otherwise I check to see if the queue's `front.next` exists. If it doesn't, then `dequeueVal` is set to the queue's `front.value`, the queue's `front` is set to `null`, and the function returns `dequeueVal`. Otherwise, `dequeueVal` is set to the queue's `front.value`, the queue's `front.value` is set to `front.next.value`, the queue's `front.next` is set to `front.next.next`, and the function returns the value of `dequeueVal`.
  - For the `peek` method, I just return the `front.value` of the stack.
  - For the `isEmpty` method, I check if `front` of the stack exists. If so, the method returns `false`, otherwise it returns `true`.

## [Queue with Stacks](https://github.com/eugenemonnier/data-structures-and-algorithms/pull/30)
Created PseudoQueue class and methods

### Challenge
- Create a brand new `PseudoQueue` class. Do not use an existing `Queue`. Instead, this `PseudoQueue` class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 `Stack` objects. Ensure that you create your class with the following methods:

  - `enqueue(value)` which inserts value into the `PseudoQueue`, using a first-in, first-out approach.
  - `dequeue()` which extracts a value from the `PseudoQueue`, using a first-in, first-out approach.
- The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own `Stack` implementation. Instantiate these `Stack` objects in your `PseudoQueue` constructor.

###  Approach & Efficency
- For the `PseudoQueue` class, I created the methods `enqueue` and `dequeue`.
  - For the `enqueue` method, I created the variables `firstStack` & `secondStack` as instances of `PseudoQueue`. If the `PseudoQueue` is empty, `push` the `value` to `secondstack`. Otherwise create the variable `currNode` and set to the `PseudoQueue`'s `top`. Then traverse the `PseudoQueue`, `push`ing to the `firstStack` the `currNode.value`. Once reaching the end, `push`ing the given `value`. After which, going to traverse through `firstStack` and push each `value` to the `secondStack`. Finally setting `this.stop` to `secondStack.top` and returning `this.stop`.