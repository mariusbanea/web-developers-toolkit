//  - Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
//  - Implement a `peek()` function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
//  - Implement a `isEmpty()` function outside the Queue class that allows you to check if the queue is empty or not
//  - Implement a `display()` function outside of the Queue class that lets you display what's in the queue.

const { Queue } = require("./queue-class");

let ourItems = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];

let newQueue = new Queue();

ourItems.forEach((item) => newQueue.enqueue(item));

// console.log(newQueue);

const helperFuncs = {
  peek: (queue) => {
    return queue.first;
  },
  isEmpty: (queue) => {
    return queue.first === null;
  },
  display: (queue) => {
    //   array to hold objects
    items = [];

    //if not top prop, it's not a queue
    if (queue.first === null) {
      return "Nothing in the queue";
    }
    //   if it has a top, set up iterations on that object
    if (queue.first) {
      queue = queue.first;
    }
    // general case - iterate through every item until next becomes null (end of queue)
    while (queue.next !== null) {
      // iterate to the end of the queue
      // add items to the array
      items.push("-", queue.value);
      // set our queue to the next node
      queue = queue.next;
    }
    // push the last item to the array
    items.push("-", queue.value);
    // return the queue with line breaks
    return items.join("\n");
  },
};

//run the functions
// console.log(helperFuncs.peek(newQueue));
// console.log(helperFuncs.isEmpty(newQueue));
// console.log(helperFuncs.display(newQueue));

// // dequee Spock - this requires two dequeues as Spck is second in line
// console.log(newQueue.dequeue());
// console.log("testing...");
// console.log(helperFuncs.peek(newQueue));
// console.log(newQueue.dequeue());
// console.log("Did we get rid of Spock?");
// console.log(helperFuncs.peek(newQueue));

module.exports = { helperFuncs };