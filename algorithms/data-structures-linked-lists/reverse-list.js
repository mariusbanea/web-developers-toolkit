// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

const reverseLinkedList = (linkedList) => {
  let reversedList = new LinkedList();
  // create pointer at head
  let currNode = linkedList.head;
  // iterate over the linked list
  while (currNode) {
    // use insertFirst to add the value to the reversedList
    reversedList.insertFirst(currNode.value);
    //INCREMENT!
    currNode = currNode.next;
  }
  return reversedList;
};

let SLL = main();

// console.log(LinkedListFuncs.display(SLL));

// // Test the function above
// const reversedExample = reverseLinkedList(SLL);
// console.log(LinkedListFuncs.display(reversedExample));

// reverse with recursion - switch the direction of all the pointers https://www.geeksforgeeks.org/recursively-reversing-a-linked-list-a-simple-implementation/
const reverse = (node) => {
  // 1. The case case has two parts - either the node is null
  if (node === null) {
    return node;
  }
  // 2. or, we are at the end of the linked list
  if (node.next === null) {
    return node;
  } // 3. recursive case - We have not yet reached the end
  else {
    // create a temp variable to hold recursive output - call reverse on the next node
    let node1 = reverse(node.next);
    // reverse the direction of pointers
    node.next.next = node;
    // and making this node the end
    node.next = null;
    // 4. The output after all recursive calls
    return node1;
  }
};

// Copy the list to reverse - Pass by value/reference still gets me!
// How to make this object immutable? Use libraries for this?
// object.freeze?
// this is still copying the reference

let list = { ...SLL };
console.log("list before reversal");
console.log(LinkedListFuncs.display(list));

// This is pass by reference and will change the original list
list.head = reverse(list.head);
console.log("list after reversal");
console.log(LinkedListFuncs.display(list));
console.log("SLL after list reversal");
console.log(LinkedListFuncs.display(SLL));

// Questions for Jeremy
// 1. Can we talk through how this recursive 'reverse' function works?
// 2. Pass by value/reference - clear this up in JS and show me how to copy/clone the linked list to prevent mutation