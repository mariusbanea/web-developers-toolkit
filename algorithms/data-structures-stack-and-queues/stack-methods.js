const { Stack } = require("./stack-class");
let myStack = require("./make-a-stack");

const helperFuncs = {
  // look at the top without removing it
  peek: (stack) => {
    return stack.top;
  },
  isEmpty: (stack) => {
    return stack.top === null;
  },
  display: (stack) => {
    // array to hold item values
    let items = [];
    // make sure it's a stack and not empty
    if (stack.top === null) {
      return "stack is empty";
    }
    // if there is a top, we point to this for iterations
    if (stack.top) {
      stack = stack.top;
    }
    // general case. iterate over items until next is null (end)
    while (stack.next !== null) {
      // add items to our array
      items.push(stack.data);
      // set our pointer the next node
      stack = stack.next;
    }
    // push the last item to our array
    items.push(stack.data);
    // return the values joined with line breaks
    return items.join("\n");
  },
};

// console.log("Top node:");
// console.log(helperFuncs.peek(myStack));

// console.log("\nIs Empty?:");
// console.log(helperFuncs.isEmpty(myStack));

// console.log("\nDisplay Stack:");
// console.log(helperFuncs.display(myStack));

// console.log("\nAdding 'Hello, world!' to stack...");
// myStack.push("Hello, world!");

console.log("\nDisplay Stack:");
console.log(helperFuncs.display(myStack));

module.exports = helperFuncs;