// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

const { LinkedList, _Node } = require("../LinkedList");

const LinkedListFuncs = {
  // Functions in here
  display: (linkedList) => {
    //   create an array to store our item values
    items = [];
    // check to see if the object is a linked list or if it is empty
    if (linkedList.head === null) {
      return "The linked list is empty";
    } else {
      // if it's not, start at the head
      let currNode = linkedList.head;
      // iterate through, adding each item to the array
      while (currNode.next !== null) {
        items.push(currNode.value);
        currNode = currNode.next;
      }
      // add the last item
      items.push(currNode.value);
    }

    // return the array joined
    return items.join("-");
  },
  size: (linkedList) => {
    //   set counter
    count = 0;
    // check to see if it's a linkedList and not empty
    if (linkedList.head === null) {
      return count;
    }
    // point to the start
    let currNode = linkedList.head;
    // iterate through and increment
    while (currNode.next !== null) {
      count++;
      currNode = currNode.next;
    }
    // return the count which equals the length
    return count;
  },
  isEmpty: (linkedList) => {
    if (linkedList.head === null) {
      return true;
    }
    return false;
  },
  findPrevious: (linkedList, target) => {
    // see if target is at the beginning - if so return null
    if (linkedList.head === null) {
      return null;
    }
    // set up pointers - currNode, prevNode
    let prevNode;
    let currNode = linkedList.head;
    // iterate through - while currNode.value !== target
    while (currNode.value !== target) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    // return prevNode
    return prevNode;
  },
  findLast: (linkedList) => {
    // see if target is at the beginning - if so return null
    if (linkedList.head === null) {
      return null;
    }
    // set up pointers - currNode
    let currNode = linkedList.head;
    // iterate through - while currNode.value !== null
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    // return prevNode
    return currNode;
  },
};

module.exports = { LinkedListFuncs };

// Test the functions
const { main } = require("./singly-linked-list");

let SLL = main();
let emptySLL = new LinkedList();

// console.log(LinkedListFuncs.display(SLL));
// console.log(LinkedListFuncs.size(SLL));
// console.log(LinkedListFuncs.isEmpty(SLL));
// console.log(LinkedListFuncs.isEmpty(emptySLL));
// console.log(LinkedListFuncs.findPrevious(SLL, "Kat"));
// console.log(LinkedListFuncs.findLast(SLL));