<div align="center">
<h1> Big O notation</h1>

<details>
<summary><b>Objective</b></summary>
<p>
Objective: By the end of this checkpoint, you can measure algorithm performance with Big O.
<p>
</details>
</div>

An algorithm is a clearly defined set of instructions to solve a problem. For any given problem, there is usually a range of possible solutions, and we can compare the performance of competing algorithmic solutions to the problem. In this checkpoint, we'll learn to measure the performance of different algorithms using Big O notation.

At the end of this checkpoint, you’ll complete 1 assignment: Complete a set of drills using Big O.

Key Terms

- Big O notation
- Time complexity
- Space complexity
- Linear relationship
- Constant time
- Logarithmic time
- Linear time
- Polynomial time
- Exponential time
- Measuring algorithm performance

Algorithm performance can be analyzed in terms of space or time. Space complexity refers to the amount of physical memory that an algorithm requires to complete. If you understand recursion, you have an intuitive understanding of what space complexity is about. You end up with a stack of recursive function calls, each waiting for its child process to return a value. Each function in the stack takes up space in memory.

> Recursion is generally not efficient in terms of space (large call stack) or time. But it is able to handle more complex problems than a simple iterative loop.

**Time complexity refers to the number of operations an algorithm requires to complete.** In this lesson, we'll be concerned with analyzing time complexity.

Big O notation is a way of describing the time complexity of an algorithm. We use it to say how much time is needed for an algorithm to complete its work with a given input. This is important knowledge because an algorithm that is quick enough on a small input size may take so long as to be unusable on a larger input.

> An algorithm that is quick enough on a small input size may take so long as to be unusable on a larger input.

Big O notation can help us understand how a given algorithm will perform in the best-case scenario, in the worst-case scenario, and on average. For instance, imagine we're analyzing an algorithm for finding an item in a list. We might be lucky and the item could be in the 1st place we look. But we might be unlucky and it could be in the last. In the best case, the function might only take a few milliseconds to complete regardless of how long the input array is. In the worst case, if the search item is in the last place we look, if the input size is small, the running time might still be only a few milliseconds. But with a 10x bigger input array, the worst-case running time could be a minute.

**Big O notation gives us a vocabulary for describing how the complexity of an algorithm grows as the size of its input grows.** Far from being a dry academic question, understanding algorithmic complexity can help us understand if a specific implementation of a feature will be usable or not in normal conditions.

To get a sense of the questions we're interested in when dealing with analyzing algorithms, let's look at a concrete example. The following function is meant to sum (that is, add together) all the values in an array of numbers:

```js
function sum(array) {
    let sum = 0, ticks=1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
}
```

Instead of just having sum return an integer value for the result, we have it return an object with a `.result` property which will contain the sum, and a `.ticks` property that we can use to measure the number of operations done by our algorithm. This will allow us to generate data about how the running time changes with different input sizes.

Run the program in your local environment with the following set of input:

```js
sum([1,2,3]);
sum([1,2,3,4,5,6,7,8,9,10]);
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
```

You should see the result of calling sum on inputs of size 3, 10, and 100. As you can see, the relation between the number of operations and the input size is directly proportional. `constant time`

Note that we initialize ticks to 1 so we count the 1-time operation of initializing our sum variable. However, when we express the time complexity of this algorithm, **we'll ignore the impact of these lower order, constant time operations**, because the running time will mainly be determined by the number of times the work in the loop must be done, and this varies according to input size.

We loop through the for routine for input.length times. Each time through the loop, we check if i < array.length to determine if you need to keep looping, which is constant time. If the answer to that is "yes", then we access the element at array[i] (constant time), add that amount to the sum variable (constant time), and increment ticks by 1 (also constant time).

So each time we go through the loop, it will require 4 constant time operations (that is, 4 operations that will take the same amount of time to complete no matter how big the input).

This means that we have a linear relationship between the length of the input array and the number of operations required for the loop part of the function to complete. The time complexity of the algorithm grows in direct, linear proportion to the size of the input.

We've just seen that you can strip away the particulars about an algorithm in order to classify it as linear in terms of big O notation. What we want to describe is how running time grows as a function of input size. The following chart visualizes **linear complexity:**

![Linear Big O](linear-graph.png)

## Big O classifications

As it turns out, there are a relatively small number of classifications of time complexity that we care about. Aspiring software engineers are advised to learn these, as they are a marker of basic computer science literacy that some people you encounter in the industry will expect you to have.

Here's a high-level description of the most common time complexity classifications, in order of increasing time complexity:

### Constant time O(1)

Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete. Examples of O(1) algorithms are accessing an array item or performing basic arithmetic operations (e.g., adding 2 numbers). The following is an example of an algorithm with **O(1) runtime complexity**.

```js
function getRandomItem(array) {
    let ticks = 0;
    // Get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {
        result: item,
        ticks
    };
}
```

Run the program in your local environment with the following set of input:

```js
getRandomItem([1,2,3]);
getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
```

getRandomItem() finds a single random element in an array. Whether we pass it an array of size 10 or size 10 million, it doesn't effect the algorithm's running time. In both cases, the function must pick a random integer within a range, and then retrieve the item in the array at that index. Neither of these operations depends on input size.

### Logarithmic Time O(log(n))

> It is characteristic of logarithmic algorithms that they cut the problem size in half each round through.

Logarithmic time complexity (O(log n)) is the next best thing after constant time. While logarithmic time complexity algorithms do take longer with larger inputs, running time increases slowly. For instance, if myLogRunTimeAlgo takes 1 second to complete with an input of size 10, when we increase our input by 10x to 100, the running time only grows to 2 seconds. When we increase the input size to 1000, the time only grows to 3 seconds.

It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.

The following function howManyLessThanNitems has logarithmic time complexity. It takes a sorted array of integers (arr) and a less than value (n) as arguments, and returns the number of elements from the array whose value is less than n. So howManyLessThanNitems([1, 2, 3, 4], 3) should be 2 because 1 and 2 are both less than 3.

```js
function howManyLessThanNitems(arr, n) {
    let ticks = 0;
    /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
    if (!arr.length || arr[0] >= n) {
        ticks++;
        return 0;
    }

    let lowIndex = 0, highIndex = arr.length;

    while (highIndex > lowIndex) {
        // Find midpoint
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks++;
        }

        /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks++;
        }

        /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
        else {
            ticks++;
            return {
                result: midIndex + 1,
                ticks: ticks
            }
        }
    }
}

howManyLessThanNitems([1,2,3], 2);
howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 );
```

If you execute this code you'll see how it performs with inputs of size 3, and 100. Each time through the while loop, we cut the size of the problem by half, so huge runtime does not increase by a whole lot although the size of the input may increases significantly. You should try running the program with an input of 1000 items in the array and analyze the runtime

### Linear time O(n)

Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input. Given input a and input b, where b is twice as large as a, it will take a linear algorithm 2 times as long to process b compared to a.

Some examples of linear complexity algorithms are summing the elements in an array and finding the minimum or maximum value in an array.

```js
function findMin(array){
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}

findMin([1,2,3]);
findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
```

Execute the above code with the input of size 3, 10 and 100. Can you see why this runtime is linear?

### Polynomial time O(n^k)

An algorithm with polynomial time complexity has a running time that would be some input size n raised to some constant power k. The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires 2 levels of looping over an input would be O(n^2) while one requiring 3 levels of looping would be O(n^3). In both cases, we have polynomial time complexity.

The following hasDuplicates function has a polynomial time complexity of O(n^2):

```js
function hasDuplicates(array) {
    let ticks = 0, result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] === array[j] && i !== j) {
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

hasDuplicates([1, 2, 2]);
hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99]);
```

Running this code, you can see the performance for inputs of size 3, 10, and 100. With an input of size 100, we're already > 10,000 ticks, so the time complexity is growing more quickly than the size of our input. **If we double the input size, we quadruple the running time.**

### Exponential time O(2^n)

Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. With an input of size 10, the same algorithm will take 2^10 = 1024 time, and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time. Yikes!

The following countTriangle is meant to count the number of points in a triangle that looks like this:

                          *
                         * *
                       * * * *
                   * * * * * * * *
           * * * * * * * * * * * * * * * *
Here's our countTriangle function

```js
function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}

countTriangle(2);
countTriangle(4);
countTriangle(16);
```

Running the code, you'll see performance for inputs of size 2, 4, and 16. While there are only 6 ticks with input size 2, at input size 16, we're at 65552 ticks!

In this algorithm, we count the number of dots in a triangle with a given number of layers. We start at the top layer of the triangle, which is the 0th layer and has 1 dot (or you can think of it as 2^0 = 1). As you move to the next layer, the number of dots increases by a power of 2. So, in the 1st layer, the dots you will count will be 2^1 = 2. In the 2nd layer, the number of dots will be 2^2 = 4. By the time you're at the nth layer, the number of dots would be 2^n. Therefore, as the input size increases, the number of operations to count the dots increases exponentially making the running time of this algorithm O(2^n).

## Comparing time complexities

The following chart shows you the different time complexities with relation to their input sizes.

![Big O Chart](BigOChart.png)

This table also shows the number of operations required by different time complexities with inputs of size 10, 100, and 1000:

|Big-O Notation|	n = 10|	n = 100|	n = 1000|
|-|-|-|-|
|O(1)	|1	|1	|1|
|O(log n)	|3	|6	|9|
|O(n)	|10	|100|	1000|
|O(n^2)|	100	|10000|	1000000|
|O(2^n)|	1024	|2^100|	2^1000|

You will be learning a few more data structure and different algorithms. For each operation using a data structure such as adding an item in an array, filtering an array, removing item from the middle of a list, searching for an item, sorting a list of items etc, for each of these operations, you should ask yourself, what is the runtime of that operation. Go through this Big O Cheatsheet and keep it handy as you work with different data structures and algorithms.

## Assignment

Create a GitHub repo called DSA-Big-O. Save all this work in the repo and submit the repo via the submission box at the end of this checkpoint.

In these drills, you'll practice determining the big O complexity of algorithms. For each drill, we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing the code without running it.

## 1. What is the Big O for this?

- Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

> Constant time, one action one result
    
- Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

> Linear time. As the number of people increases, the steps increase at the same rate.

## 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

```js
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```
> Constant time, because the number of operations doesn't change based on the input

## 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```js
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```
> O(n^2) Polynomial Time. For each *n* element in arr1 we have to perform *k* operations in arr2.


## 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```js
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```
> O(n) Linear time. We perform one operation per element in the array, so our operations grow at the same rate as the input.

## 5. Naive search

What is the Big O of the following algorithm? Explain your answer

```js
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```
> O(n) Linear time. As the array grows, we perform one extra operation for each new element.

## 6. Creating pairs:

What is the Big O of the following algorithm? Explain your answer

```js
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```
> O(n^2) Polynomial time. We loop over the array once for each element in the array. This one is a bit odd because it doesn't loop over the whole array every time. The second loop only performs arr.length / 2 operations.

## 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```js
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```
> O(n) Linear time. Adds the previous two answers together, creating a fibbonacci sequence.

## 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```js
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```
> O(log n) because it is using Divide and Conquer to halve the input until it finds the item

## 9. Random element
What is the Big O of the following algorithm? Explain your answer
```js
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```
> O(1) constant time. Accessing an array by index doesn't require any iteration. The computer simply looks at the pointer bound to the array, goes to that memory address, and then grabs the nth element in that array.

## 10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
```js
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```
> If the number is less than two, or if the number is not an integer, return false.
> If the number is evenly divisible by any number between 2 and itself, return false.
> So the function will return true only if the number passed to it is a prime number.
> The Big O is linear, O(n). As the input grows, the number of operations performed by the for loop grows at the same rate.

## 11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

Input:

|Rod A|	Rod B|	Rod C|
|-|-|-|
|----	|||	
|---------		|||
|-------------		|||

Output:

|Rod A|	Rod B|	Rod C|
|-|-|-|
|	||----|	
|		||---------|
|		||-------------|

Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
```js
const rods = {
  "A": [3,2,1],
  "B": [],
  "C": []
};
let moves = 0;

const displayRods = (rods) => {
  let newRods = Object.keys(rods);
  newRods.forEach(rod => console.log(rod + ": " + rods[rod]));

  console.log(`${moves} moves`);
  moves++;
  console.log("\n");
}
displayRods(rods);

const towerOfHanoi = (n, sourceRod, destinationRod, bufferRod) => {

  // Our base case is implicitly when n, the height of our stack of disks, gets down to zero.

  if (n >= 1) { 

    towerOfHanoi(n - 1, sourceRod, bufferRod, destinationRod);

    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);  

    rods[bufferRod].push(rods[sourceRod].pop())
    rods[destinationRod].push(rods[bufferRod].pop())

    displayRods(rods);

    towerOfHanoi(n - 1, bufferRod, destinationRod, sourceRod);

  }
  return;
}
towerOfHanoi(3, "A", "C", "B");
```
If you are given 5 disks, how do the rods look like after 7 recursive calls?

```js
Move disk 1 from A to C
A: 5,4
B: 
C: 3,2,1
7 moves
```

How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
> 7, 15, and 31

What is the runtime of your algorithm?
> O(2<sup>n</sup>) exponential The number of steps doubles (plus one) for every disk added.

## 12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

```js
// 1.
function countSheep(n) {
  let counter = n;

  while (n > 0) {
    console.log(`${n}: Another sheep jumps over the fence`);
    n--;
  }

  console.log(`All sheep jumped over the fence`);
}
// O(n) linear. We add one step for each additional sheep.

// 2.
function powerCalculator(base, exponent) {
  result = base;
  while (exponent > 1) {
    result *= base;
    exponent--;
  }
  return result;
}
// O(n) linear. We add one step for each additional number in the exponent.

// 3.
function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i)
  }

  return newString;
}
// O(n). For each char we add, our for loop iterates one more time.

// 4.
function nthTriangularNumber(n) {
  let result = 1;

  for (let i = 1; i < n; i++) {
    result += i + 1;
  }

  return result;
}
// O(n). Basically because we have a for loop that goes until n.

// 5.
function stringSplitter(string, splitter) {
  let result = []

  while (string.indexOf(splitter) >= 0) {
    let splitterIndex = string.indexOf(splitter);

    result.push(string.substring(0, splitterIndex));
    string = string.substring(splitterIndex + 1);
  }
  result.push(string) // Get our last section of string into the array after the splitter is no longer present.
  
  return result;
}
// O(n) where n is the number of splitter chars in the string.

// 6.
function fibonacci(n) {
  if (n <= 2) {return 1}

  let counter = n;
  let result;
  let firstPrevious = 1;
  let secondPrevious = 1;

  while (counter > 0) {
    result = firstPrevious + secondPrevious;

    secondPrevious = firstPrevious;
    firstPrevious = result;

    counter--;
  }

  return result;
}
// O(n)


// 7.
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
// O(n)
```

## 13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.
```
1. O(n)
2. O(n)
3. O(n)
4. O(n)
5. O(n)
6. O(2n)
7. O(n)
8. O(n)
9. O(n * k)
10. O(n!)
11. O(n)
12. O(n)
```


## 14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
> Listed above with the solutions