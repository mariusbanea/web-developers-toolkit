# Linked Lists

## Create a linked list class
Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

<details><summary>Show Solution</summary>

```js
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) { // O(1) constant time, no iteration
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (!this.head) {return this.insertFirst(item)} // If the list is empty

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    
    currentNode.next = new _Node(item, null)
  }

  insertBefore(value, item) { // O(n) linear time
    if (!this.head) {return null} // If the list is empty, do nothing
    if (this.head.value === value) { // If the lookup value is the first item in the list
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode.value !== value) {
      if (!currentNode.next) {return null} // If the lookup value is not found, do nothing
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new _Node(item, currentNode);
  }

  insertAfter(value, item) { // O(n) linear time, same implementation as insertBefore essentially
    if (!this.head) {return null} // If the list is empty, do nothing

    let currentNode = this.head;
    while (currentNode.value !== value) {
      if (!currentNode.next) {return null} // If the lookup value is not found, do nothing
      currentNode = currentNode.next;
    }

    currentNode.next = new _Node(item, currentNode.next) 
    // We initialize the node node with the current pointer, then set the current point to the new node
  }

  insertAt(index, item) {
    if (index === 0) { // Handle if index to insert at is 0
      return this.insertFirst(item);
    }

    let counter = 1;
    let currentNode = this.head.next;
    let previousNode = this.head;
    while (counter < index) {
      if (!currentNode.next) {return null} // If the index does not exist in our list
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    previousNode.next = new _Node(item, currentNode)
  }

  find(value) { // O(n) linear time, iterates through the list
    if (!this.head) {return null} // If the list is empty

    let currentNode = this.head;

    while(currentNode.value !== value) {
      if (!currentNode.next) {return null} // If we reach the end of the list

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove(value) {
    if (!this.head) {return null} // If the list is empty
    if (this.head.value === value) { // If it's the first node in the list
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while(currentNode.value !== value) {
      if (!currentNode.next) {return null} // If we reach the end of the list

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next
  }
}
```

</details>

## Creating a singly linked list
Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
Add Tauhida to the list.
Remove Husker from the list.
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
Implement a function called insertAt() that inserts an item at a specific position in the linked list.
Add Athena before Boomer using your insertBefore() function.
Add Hotdog after Helo using the insertAfter() method.
Using the insertAt() method insert Kat in the 3rd position of the list.
Remove Tauhida from the list.

```js
function main() {
  const SLL = new LinkedList; // Initialize our linked list object

  SLL.insertLast('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')

  SLL.insertBefore('Boomer', 'Athena')
  SLL.insertAfter('Helo', 'Hotdog')
  SLL.insertAt(2, 'Kat')

  linkedListHelpers.display(SLL)
  console.log('List size: ' + linkedListHelpers.size(SLL))
  console.log('Is the list empty? ' + linkedListHelpers.isEmpty(SLL))
  console.log('The node before Boomer is: ' + linkedListHelpers.findPrevious(SLL, 'Boomer').value)
  console.log('The last item in my list is: ' + linkedListHelpers.findLast(SLL).value)

  console.log(thirdFromEnd(SLL))
  console.log(findMiddle(SLL))
}
main()
```

## Supplemental functions for a linked list
Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.
display: displays the linked list
size: returns the size of the linked list
isEmpty: finds if the list is empty or not (without using the size() function)
findPrevious: finds the node before the item you are looking for
findLast: returns the last node in the linked list

```js
const linkedListHelpers = {
  display: function (list) { // O(n) linear
    if (!list.head) {return console.log('The list is empty')}

    let currentNode = list.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  },
  size: function(list) { // O(n) linear time
    let counter = 0;
    let currentNode = list.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  },
  isEmpty: function(list) { // O(1) constant time
    if (!list.head) {return true}
    return false;
  },
  findPrevious: function(list, value) { // O(n) linear
    if (!list.head) {return null} // If the list is empty

    let currentNode = list.head;
    let previousNode = list.head
    while(currentNode.value !== value) {
      if (!currentNode.next) {return null} // If we reach the end of the list without finding the value
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return previousNode;
  },
  findLast: function(list) { // O(n) linear
    if (!list.head) {return null} // If the list is empty

    let currentNode = list.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  findByIndex: function(list, index) {
    if (!list.head) {return null}
    let counter = 0;
    let currentNode = list.head;
    while (counter < index) {
      if (!currentNode.next) {return null} // If the index does not exist in our list
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}
```

## Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

```js
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```
> O(n^2) quadratic, it traverses the list once for each node in the list
> This program removes duplicates from a linked list

## Reverse a list
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

```js
function reverseList (list) { // O(n) linear, 
  if (!list.head) {return list} // If the list is empty

  let currentNode = list.head;
  let previousNode = null;
  while (currentNode.next) {
    let nextNode = currentNode.next;
    currentNode.next = previousNode;

    previousNode = currentNode;
    currentNode = nextNode;
  }
  currentNode.next = previousNode; // Reverse the final pointer
  list.head = currentNode;
}
```

## 3rd from the end
Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

```js
function thirdFromEnd(list) { // O(2n) linear
  const length = linkedListHelpers.size(list);

  // See the findByIndex helper for implementation
  return linkedListHelpers.findByIndex(list, length - 3);
}
```

## Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

```js
function findMiddle(list) { 
  // Do not add a length property or use size()

  // Have two cursors traversing the list, one at double speed
  // Once the 2x cursor reaches the end, return the other

  if (!list.head) {return null}

  let playerOne = list.head;
  let playerTwo = null;
  while (playerOne) {
    playerOne = playerOne.next ? playerOne.next.next : null;
    playerTwo = playerTwo ? playerTwo.next : list.head;
  }
  return playerTwo;
}
```

## Cycle in a list
Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

```js
// Rewrite this function so it works with cycles occuring anywhere in the list
function isCycle(list) { // O(n) linear, traverses the list once
  if (!list.head) {return null}

  let firstNode = list.head;
  let currentNode = list.head;
  while (currentNode.next) {
    if (currentNode.next === firstNode) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}
```

## Sorting a list
Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data. Also, you can only go through the list once, O(n) runtime.
> Impossible, you cannot have an O(n) runtime unless the list is already sorted.