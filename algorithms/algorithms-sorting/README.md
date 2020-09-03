# DSA-Sorting

## 1. Understanding merge sort
Given the following list of numbers `21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40`

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
> [ 21, 1, 26, 45 ]

What is the resulting list that will be sorted after 16 recursive calls to mergesort?
> [ 9 ], although it will simply return at that point. The next version of the list that will be passed into MergeSort is [ 16, 49, 39, 27, 43, 34, 46, 40 ]

What are the first 2 lists to be merged?
> [ 21 ] [ 1 ], and the first two lists with more than one element are [ 1, 21 ] [ 26, 45 ]

Which two lists would be merged on the 7th merge?
> [ 1, 21, 26, 45 ] [ 2, 9, 28, 29 ]

## 2. Understanding quicksort
1. Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

- The pivot could have been 17, but could not have been 14
- The pivot could have been either 14 or 17
- Neither 14 nor 17 could have been the pivot
- The pivot could have been 14, but could not have been 17
> Could have been either. If either 14 or 17 were swapped with 20, and then we looked at 14 or 17 starting from the right and iterating over the array to the left, we would end up swapping either 14 or 17 with 20 because the number to the left would have been lower than either 14 or 17. To visualize, here they are swapped: 
[3, 9, 1, 20, 17, 24, 22, 14]                
[3, 9, 1, 14, 20, 24, 22, 17]
Just ask, if I start with the number in the last index in the array and look left, at what point do I see a number that is lower? In both above cases, the point is at the number 20.

2. Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

- When using the last item on the list as a pivot
> [3,  9, 10, 12, 19, 14, 17, 16, 13, 15]
- When using the first item on the list as a pivot
> [9,  3, 10, 13, 12, 14, 17, 15, 19, 16]

## 3. Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.

<details><summary>Show Solution</summary>

```js
function qSort(array, startingIndex = 0, endingIndex = array.length) {
  console.log(array)
  if (startingIndex >= endingIndex) {
    return array;
  }

  const middle = partition(array, startingIndex, endingIndex);

  array = qSort(array, startingIndex, middle)
  array = qSort(array, middle + 1, endingIndex)
  
  return array;
}

function partition(array, start, end) {
  // Lomuto's Algorithm

  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(i, j, array);
      j++;
    }
  }
  swap(end - 1, j, array)

  return j;
};
qSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5])

/* Output: [
   1,  2,  3,  5,  6,  6,  6,  7,  7,  9,  9, 11,
  13, 13, 13, 14, 14, 15, 16, 16, 17, 21, 22, 23,
  24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 30,
  31, 32, 32, 33, 34, 38, 38, 39, 40, 40, 42, 42,
  43, 44, 45, 46, 46, 46, 48, 49, 50, 51, 51, 53,
  53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68,
  69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80,
  81, 82, 83, 84, 85, 87, 87, 88, 88, 89, 90, 91,
  93, 97, 98, 98
] */
```

</details>

## 4. Implementing merge sort
Write a function mSort that sorts the dataset above using the merge sort algorithm.

<details><summary>Show Solution</summary>
  
```js
function mSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let length = array.length;
  let middle = Math.floor(length / 2);

  let left = array.slice(0, middle)
  let right = array.slice(middle, length)
  // console.log('left:', left);
  // console.log('right:', right)

  return merge(
    mSort(left),
    mSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Iterate over every element in left and right
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]) // can we increment right on the same line, but after the value has been passed?
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right);

  // We concat in case there is a leftover element in the left or right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
```

</details>

## 5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

<details><summary>Show Solution</summary>

```js
const LinkedList = require('./linkedList');
const listHelpers = require('./listHelpers');

const list = new LinkedList;

list.insertFirst(4)
list.insertFirst(5)
list.insertFirst(2)
list.insertFirst(12)
list.insertFirst(1)
list.insertFirst(5)
list.insertFirst(9)
list.insertFirst(8)
list.insertFirst(3)

listHelpers.display(list)
// 3 -> 8 -> 9 -> 5 -> 1 -> 12 -> 2 -> 5 -> 4 -> null

function mergeSort(list) {
  // O(n log n), a divide and conquer algorithm

  // Uncomment to watch the recursive splitting happen
  // listHelpers.display(list)

  if (listHelpers.size(list) == 1) {return list}

  const length = listHelpers.size(list);
  const middle = Math.floor(length / 2);

  // We're going to need a new way to generate a sub-list from a linked list
  const left = mergeSort(subList(list, 0, middle));
  const right = mergeSort(subList(list, middle, length));

  return merge(left, right)
}

function merge(left, right) {
  // Mergesort requires a function to merge the recursively split up bits back together again
  const result = new LinkedList;

 
  let leftNode = left.head;
  let rightNode = right.head;

  // Insert items according to order
  while(leftNode && rightNode) {
    if (leftNode.value < rightNode.value) {
      result.insertLast(leftNode.value);
      leftNode = leftNode.next; // Move to the next node
    } else {
      result.insertLast(rightNode.value);
      rightNode = rightNode.next;
    }
  }
  // console.log(result)

  // Insert anything leftover
  while (leftNode) {
    result.insertLast(leftNode.value);
      leftNode = leftNode.next;
  }
  while (rightNode) {
    result.insertLast(rightNode.value);
      rightNode = rightNode.next;
  }

  return result;
}

function subList(list, start, stop) {
 // We need to create a new list each time
  const result = new LinkedList;

  let counter = start;
  let currentNode = listHelpers.findByIndex(list, start);

  while (counter < stop) {
    if (!currentNode) {throw Error('subList called out of bounds of linked list')}

    result.insertLast(currentNode.value);
    currentNode = currentNode.next;
    counter++;
  }

  return result;
}

// Merge sort doesn't sort in place here, it generates a new linked list and is generally not space efficient
let newList = mergeSort(list)

listHelpers.display(newList)
// 1 -> 2 -> 3 -> 4 -> 5 -> 5 -> 8 -> 9 -> 12 -> null
```

</details>

## 6. Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

```js
// The basic idea is to make 'buckets' in position in an array to throw the integers into, then merge the buckets

function bucketSort(array) {
  let bucket = [];

  for (let i = 0; i < array.length; i++) {
    if (!bucket[ array[i] ]) {
      bucket[ array[i] ] = [ array[i] ];
    } else {
      bucket[ array[i] ].push(array[i])
    }
  }

  let result = [];
  bucket.forEach(arr => {
    if (arr) {
      console.log(arr)
      result = result.concat(arr)
    }
  })

  return result;
}
bucketSort([1,6,6,3,2,4,24])

// This is a very crude implementation that clearly doesn't take advantage of knowing the lowest and highest values to define a range for our buckets

```

## 7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
```js
function swap(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return;
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    swap(i, randomIndex, array);
  }
  return array;
}
shuffle([1,2,3,4,5])
```

## 8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

```js
// I'm going to use insertion sort to solve this problem because the dataset is relatively small
// Insertion sort also works really well on lists which are almost sorted already
function sortBooks(books) {
  if (!books) {throw Error('sortBooks requires an array as an argument')}
  if (!Array.isArray(books)) {throw Error('sortBooks called without an array')}
  if (books.length <= 1) {return books}

  for (let i = 1; i < books.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(books)
      console.log(books[j][0], books[i][0])
      console.log(books[j][0] > books[i][0])
      if (books[j][0] <= books[i][0]) {
        break;
      }
      else if (!books[j - 1] || books[i][0] < books[j][0] && books[i][0] >= books[j - 1][0]) {
        books.splice(j, 0, books.splice(i, 1)[0])
        break;
      }
    }
  }

  return books;
}

const books = ["The Fighting 69th", "5 Centimeters per Second (Byôsoku 5 senchimêtoru)", "Rumor Has It...", "Raise the Red Lantern (Da hong deng long gao gao gua)", "Revenge of the Nerds IV: Nerds in Love", "Breakdown", "Haunting of Molly Hartley, The", "Battleship Potemkin", "Original Kings of Comedy, The", "True Confessions", "Food of the Gods II", "Christmas Story, A", "Bikini Beach", "Jerichow", "How the Myth Was Made: A Study of Robert Flaherty's Man of Aran", "Bosko's Parlor Pranks", "Journey to the Center of the Earth", "Goodbye Girl, The", "Prairie Love", "Mesrine: Killer Instinct (L'instinct de mort)"]

sortBooks(books)
```