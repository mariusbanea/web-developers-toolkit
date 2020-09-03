// Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

let SLL = main();
console.log(LinkedListFuncs.display(SLL));

const middleOfList = (linkedList) => {
  // setup a slow node to traverse one at a time
  let slowNode = linkedList.head;
  // setup a fast node to traverse two at a time
  let fastNode = linkedList.head;

  // While we still have two values to traverse
  while (fastNode.next !== null && fastNode.next.next !== null) {
    // increase fast node by 2 indexes
    fastNode = fastNode.next.next;
    // Increase slow node by 1 index;
    slowNode = slowNode.next;
  }
  // return the node that was traversing at half speed
  return slowNode;
};

console.log(middleOfList(SLL));