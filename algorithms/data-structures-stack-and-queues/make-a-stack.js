const { Stack } = require("./stack-class");

let addItems = ["Kirk", "Spock", "McCoy", "Scotty"];

let myStack = new Stack();

addItems.forEach((item) => myStack.push(item));

console.log(myStack.top.next);

module.exports = myStack;