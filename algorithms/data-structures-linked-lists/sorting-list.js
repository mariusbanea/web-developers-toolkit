// Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.

const { LinkedList, _Node } = require("../LinkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

// The solution below was COMPLETELY BORROWED FROM NICHOLAS HAZEL - https://github.com/sinsys/dsa-linked-list/blob/master/drills/sorting.js
// Thanks Nicholas, I need to study this and learn how it works

const CycleList = new LinkedList();
let itemsToAdd = ["Schwinn", "Haro", "Gary Fisher", "Huffy", "Mongoose"];
itemsToAdd.forEach((item) => CycleList.insertLast(item));

// Sort the list alphabetically and numerically
const sortList = (head) => {
  // Check that we have at least 2 values
  if (head === null || head.next === null) {
    return head;
  }

  // Setup baseline variables
  let prev = null;
  let slow = head;
  let fast = head;

  // While our double iteration has at least another value
  while (fast !== null && fast.next !== null) {
    // Push fast x 2
    fast = fast.next.next;
    // Set our previous to our slow iteration
    prev = slow;
    // Set our slow iteration x 1
    slow = slow.next;
  }

  // Close off the first half of the list
  prev.next = null;

  // Recursify to split the list up
  const l1 = sortList(head);
  const l2 = sortList(slow);

  // Use our helper function to merge the two lists
  return merge(l1, l2);
};

// Merging the lists and doing the merge sort
const merge = (list1, list2) => {
  // Set up a new head
  const head = new _Node();

  // Establish our current node;
  let current = head;

  // While we have items in both lists
  while (list1 !== null && list2 !== null) {
    // If list 1's value is smaller than list 2's value...
    if (list1.val < list2.val) {
      // Set our next value to list 1's next value
      current.next = list1;
      // Move forward with list 1
      list1 = list1.next;
    } else {
      // Set our next value to list 2's next value
      current.next = list2;
      // Move forward with list 2
      list2 = list2.next;
    }
    // Set our current to either list 1 or 2
    current = current.next;
  }

  // Place the last value into the end
  current.next = list1 === null ? list2 : list1;

  return head.next;
};

console.log("Pre-sorted:\n");
console.log(LinkedListFuncs.display(CycleList));
console.log("\nPost-sorted:\n");
console.log(LinkedListFuncs.display(sortList(CycleList.head)));