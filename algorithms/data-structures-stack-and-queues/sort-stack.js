// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

const { Stack } = require("./stack-class");
const myStack = require("./make-a-stack");
const helperFuncs = require("./stack-methods");

const sortStack = (stack) => {
  // create an output stack
  let sortedStack = new Stack();

  // while we still have values in our original stack
  while (stack.top) {
    // pop off the top and store temporary value
    let temp = stack.pop();

    // while we still have values in our sorted stack...
    // if the top of the sorted stack is smaller than the top of the original stack..
    while (sortedStack.top && sortedStack.top.data < temp) {
      // move the value to our original stack
      stack.push(sortedStack.pop());
    }

    // add our temporary value to our sorted stack
    sortedStack.push(temp);
  }

  //return the sorted stack
  return sortedStack;
};

console.log("starting unsorted stack: ");
console.log(helperFuncs.display(myStack));
console.log("sorted stack");
console.log(helperFuncs.display(sortStack(myStack)));