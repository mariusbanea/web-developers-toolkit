class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
    // Add an item to the top of the queue
    enqueue(data) {
      const node = new _Node(data);
      // if there is no first, make this the first
      if (this.first === null) {
        this.first = node;
      }
      // if we have a last item, point it to the new item
      if (this.last) {
        this.last.next = node;
      }
      // make the new node the last item in the queue
      this.last = node;
    }
    // remove an item from the bottom of the queue
    dequeue() {
      // if empty nothing to remove
      if (this.first === null) {
        return;
      }
      // declare teh node to dequeue
      const node = this.first;
      // set the second item in the queue to be the first (new first after removal)
      this.first = this.first.next;
      //if this is the last/only item in the queue
      if (node === this.last) {
        //set our last to null
        this.last = null;
      }
      return node.value;
    }
  }
  
  module.exports = { _Node, Queue };