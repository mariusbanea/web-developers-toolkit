const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

let SLL = main();
console.log(LinkedListFuncs.display(SLL));

const thirdFromEnd = (linkedList) => {
  //start at the beginning
  let currNode = linkedList.head;
  // move over list incrementing currNode
  while (currNode) {
    if (currNode.next.next.next === null) {
      return currNode;
    }
    currNode = currNode.next;
  }
};

console.log(thirdFromEnd(SLL));