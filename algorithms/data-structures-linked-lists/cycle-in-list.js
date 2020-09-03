const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

const testCycle = new LinkedList();
const addItems = ["apple", "pear", "banana", "raspberry", "avocado"];
addItems.forEach((item) => testCycle.insertLast(item));

const isCycle = (linkedList) => {
  // set a slow node to traverse one at a time
  let slowNode = linkedList.head;
  // fast node to traverse two at a time
  let fastNode = linkedList.head;
  // while we still have two values to traverse
  while (fastNode.next !== null && fastNode.next.next !== null) {
    // Increase fast node by 2 indices
    fastNode = fastNode.next.next;
    // Increase slow node by 1
    slowNode = slowNode.next;

    if (fastNode === slowNode) {
      return true;
    }
  }
  // no cycle found
  return false;
};

// Uncycled list
console.log("\nIs there a cycle in this linked list?");
console.log(isCycle(testCycle));
console.log(LinkedListFuncs.display(testCycle));

// Cycle the list
testCycle.head.next.next.next.next.next = testCycle.head.next;
console.log("\nIs there a cycle in this linked list?");
console.log(isCycle(testCycle));
// console.log(LinkedListFuncs.display(testCycle));

// WHOA... this function does something weird in the termianl