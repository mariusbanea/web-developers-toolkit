// Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

const { Stack } = require("./stack-class");

class QueueStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  // add an item to the top
  enqueue(data) {
    this.stack1.push(data);
  }
  // use the second stack to reverse the order and return the top of the reversed stack
  dequeue() {
    // if both stacks are empty
    if (this.stack2.top === null) {
      if (this.stack1.top === null) {
        return null;
      }
    }
    // reverse the order - go through each item
    while (this.stack1.top) {
      // pop of the end and put it on the other stack
      let value = this.stack1.pop();
      this.stack2.push(value);
    }
    return this.stack2.pop();
  }
}

// let ourItems = ["Kirk", "Spock", "Uhura"];

// let starTrekQ = new QueueStack();
// ourItems.forEach((item) => starTrekQ.enqueue(item));
// console.log(starTrekQ);

// console.log("did we queue it?");

// starTrekQ.dequeue();
// starTrekQ.dequeue();
// starTrekQ.dequeue();
// console.log(starTrekQ);

// console.log("did we empty it?");

module.exports = {
  QueueStack,
};