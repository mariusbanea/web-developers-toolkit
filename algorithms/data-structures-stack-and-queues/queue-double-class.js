class _Node {
    constructor(value, next, previous) {
      this.value = value;
      this.previous = value;
      this.next = null;
    }
  }
  
  class DoubleQueue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    //add an item to the top of the queue
    enqueue(value) {
      //create the new node with data
      const newNode = new _Node(value);
      // if there is no first, make this the first
      if (this.head === null) {
        this.head = newNode;
      } else {
        //   link the current tail and new tail
        this.tail.next = newNode;
        newNode.previous = this.tail;
      }
      // reassign the tail to be the new node
      this.tail = newNode;
    }
    // remove item form the bottom
    dequeue() {
      // If the queue is empty, there is nothing to dequeue
      if (this.head === null) {
        return;
      }
  
      // Declare our node to dequeue
      const node = this.head;
  
      // If this is the last item in the queue
      if (node === this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }
  
      // Set the 2nd item in queue to our first
      this.head = this.head.next;
      this.head.prev = null;
  
      return node.value;
    }
  }
  
  module.exports = {
    _Node,
    DoubleQueue,
  };