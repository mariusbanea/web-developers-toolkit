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
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
    find(item) {
      //start at the head
      let currentNode = this.head;
      //if the list is empty
      if (!this.head) {
        return null;
      }
      // check for the item
      while (currentNode.value !== item) {
        if (currentNode.next === null) {
          //   return null if it's the end of the list and the item isn't in the list
          return null;
        } else {
          // otherwise, keep looking
          currentNode = currentNode.next;
        }
      }
      // found it
      return currentNode;
    }
    remove(item) {
      // if the list is empty
      if (!this.head) {
        return null;
      }
      // if the node to be removed is the head, make the next node the head
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      // start at the head
      let currNode = this.head;
      // keep track of the previous
      let previousNode = this.head;
  
      while (currNode !== null && currNode.value !== item) {
        // Save the previous node
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log(`item not found`);
        return;
      }
      // remove the item by connecting previous to next (cutting it out)
      previousNode.next = currNode.next;
    }
    insertBefore(insertItem, target) {
      //if the list is empty or if target is the first
      if (!this.head || this.head.value === target) {
        this.insertFirst(insertItem);
        return;
      }
      // find the target
      // start at the head
      let currNode = this.head;
      // keep track of the previous
      let previousNode = this.head;
  
      while (currNode !== null && currNode.value !== target) {
        // Save the previous node
        previousNode = currNode;
        // increment the current node
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log(`target item not found`);
        return;
      }
      // insert the new node by pointing previousNode.next to the insertItem and connecting the insertItem.next to currNode
      previousNode.next = new _Node(insertItem, currNode);
    }
    insertAfter(insertItem, target) {
      // if the list is empty or if target is the last
      if (!this.head || this.head.value === target) {
        this.insertLast(insertItem);
        return;
      }
      // traverse the list, look for target
      // saving currNode and nextNode this time
      // start at the head
      let currNode = this.head;
      // keep track of the previous
      let nextNode = this.head;
  
      while (currNode !== null && currNode.value !== target) {
        // Save the previous node
        currNode = nextNode;
        // increment the current node
        nextNode = nextNode.next;
      }
      if (currNode === null) {
        console.log(`target item not found`);
        return;
      }
      // when currNode.value === target set currNode.next to new _Node(insertItem, nextNode)
      currNode.next = new _Node(insertItem, nextNode);
    }
    insertAt(insertItem, index) {
      // if list is empty return cuz you can't insert at the index
      if (!this.head) {
        return null;
      }
      if (index === 0) {
        this.insertFirst(insertItem);
        return;
      }
      // traverse saving current and previous node
      // start at the head
      let previousNode = this.head;
      // keep track of the previous
      let currNode = this.head;
      // use a counter to keep track of the number that you are
      let counter = 0;
      // when your number equals the index, insert
      while (counter < index) {
        if (currNode.next === null) {
          return null;
        } else {
          // increment the counter
          counter++;
          // Save the previous node
          previousNode = currNode;
          // increment the current node
          currNode = currNode.next;
        }
      }
      // set the previousNode.next to the new _Node(insertItem, currNode)
      previousNode.next = new _Node(insertItem, currNode);
    }
  }
  
  module.exports = {
    _Node,
    LinkedList,
  };
  
  // let SLL = new LinkedList();