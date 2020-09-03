# DSA-Arrays

## 1. Implement an Array class from scratch.
Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.

Be sure to export the memory module and then import it using require.
<details><summary>Show Solution</summary>

```js
const MemoryClass = require('./memory')

const memory = new MemoryClass;

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length); // Points to the memory address of the array when initialized, so the 0 index
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return memory.get(this.ptr + index)
  }

  push(value) {
    // Make space for the new item
    this._resize((this.length + 1) * Array.SIZE_RATIO);
    // Because the memory is stored in contiguous order, you simply add the length to the initial pointer to find the array index that you want.
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() { // O(1) constant time
    if (this.length == 0) {
      throw new Error('index error');
    }
    const value = memory.get(this.ptr + this.length - 1)
    this.length--;
    return value;
  }

  insert(index, value) { // Worst case O(n)
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    // Shift all values left in the array
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--;
  }

  _resize(size) { // O(n) linear time
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size)
    if (this.ptr === null) {
      throw Error('Out of memory!')
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;
```
</details>

## 2. Explore the push() method
Using the Array class you just created above, add an item to the array. Use the following function:
```js
function main(){
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
```
What is the length, capacity and memory address of your array?
```
1, 3, and 0
```
Add the following in the main function and then print the array:

    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
```
6, 18, 45
```
>We've pushed 6 items onto the array, and it has grown by 3 every time because of the SIZE_RATIO property. Our pointer is now at the 45th place in memory because the previous memory blocks have been taken up by our arrays of sizes 3, 6, 9, 12, 15, and 18. We should probably be clearing those unused blocks of memory.

## 3. Exploring the pop() method
Add the following in the main function and then print the array:
```
  ...
  arr.pop();
  arr.pop();
  arr.pop();
```
What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
>  3, 18, 45

>Length decreases, but the capacy and the memory address have already been shifted by pushing.

## 4. Understanding more about how arrays work
Print the 1st item in the array arr.

Empty the array and add just 1 item: arr.push("tauhida");

Print this 1 item that you just added. What is the result? Can you explain your result?
>NaN

>  It returns this because the Float64Array class is a typed array that only stores 64-bit floating point numbers.

> The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order.

What is the purpose of the _resize() function in your Array class?

> To allocate a new block of memory for our array when the current block of memory is too small to perform the operation we need

--- 

You can use JavaScript's built-in arrays to solve the following drills. After you write the algorithm, identify its time complexity and determine if it needs to be optimized. Start each problem by understanding the problem and coming up with some sample input and output. For your convenience, a few sample input and output are provided.
## 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een

```js
const URLify = string => {
  const arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('')
}
```
> O(n)

## 6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
```js
function filterLessThanFive(arr) { // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1)
    }
  }

  return arr;
}
```
> O(n) This one might be able to be improved since there is a logical way to divide the data (less than five) but I'm not sure.
## 7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12

```js
function maxSum(array) {
  let currentSum = 0;
  let currentHighest = array[0] // We'll initialize this with array[0] instead of 0 in case we have an array with all negative numbers

  array.forEach(number => {
    currentSum += number;
    if (currentSum > currentHighest) {
      currentHighest = currentSum;
    }
  })

  return currentHighest;
}
```
> O(n) This function's complexity doesn't appear improveable

## 8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

```js
function mergeSortedArrays(array1, array2) {
  const totalLength = array1.length + array2.length;
  const result = [];

  // We're going to track which index we're looking at in each array
  let index1 = 0;
  let index2 = 0;

  while (result.length < totalLength) {
    if (array1[index1] < array2[index2]
        || array2[index2] === undefined) { // Because eventually one of the arrays is going to reach its end. If arr2 reaches its end and becomes undefined, the if condition will fire until all remaining elements are in our result array. If the first array reaches its end, the function will proceed to else by default until the second array reaches its end.
      result.push(array1[index1]);
      index1++;
    } else {
      result.push(array2[index2]);
      index2++;
    }
  }

  return result;
}
```
> O(n) where n is the combined amount of numbers. We iterate over both arrays at the same time and keep track of where we are in each with an index variable. Much better performance than if we were to have used a nested loop.

## 9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'

```js
function removeChars(string, chars) {
  const string = string.split('');
  const chars = chars.split('');
  const result = [];

  for (let el of string) {
    if (!chars.includes(el)) {
      result.push(el);
    }
  }

  return result.join('');
}
removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
// Bttl f th Vwls: Hw vs. Grzny
```
>O(n * k), number of chars in the sentance 
times the number of chars to remove

## 10. Products
Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
```js
function products(array) {
  let result = [];

  // We need to generate a product for each element in the array
  array.forEach(number => {
    let product = 1;
    // The product is the result of multiplying every element in the array except the one we are looking right now
    for (let el of array) {
      if (el !== number) {
        product *= el;
      }
    }
    result.push(product)
  })

  return result;
}
```
> O(n<sup>2</sup>) It might be possibly to improve upon this complexity
## 11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
```
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
```

```js
// We'll have to iterate over element in the array to check for 0
// If we hit a 0, we'll have to iterate height+width times

function detonateZeroes(array) {
  let zeroes = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        zeroes.push([i, j])
      }
    }
  }

  zeroes.forEach(zero => {
    let row = zero[0];
    let column = zero[1];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (i === row || j === column) {
          array[i][j] = 0;
        }
      }
    }
  })

  return array;
}
detonateZeroes(
  [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]
);
// O(2n^2)
```
## 12. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true

```js
function isRotation(string1, string2) {
  let arr = string1.split('');
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.shift();
    arr.push(temp);
    let rotation = arr.join('')
    
    if (rotation === string2) {
      return true;
    }
  }
  return false;
}
isRotation('amazon', 'azonma')
// false
isRotation('amazon', 'azonam')
// true
```
> O(n), we iterate once for every char in the string