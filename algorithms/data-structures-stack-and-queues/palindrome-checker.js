// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
const { Stack } = require("./stack-class");

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here

  // create a new stack
  let newStack = new Stack();

  // populate our stack with string characters
  for (let i = 0; i < string.length; i++) {
    newStack.push(string[i]);
  }

  // declare a variable to store the reverse order
  let reverseOrder = "";
  // while the top isn't null, pop off the top and put it in the reverseOrder string
  while (newStack.top !== null) {
    reverseOrder += newStack.pop();
  }

  // check to see if the input string and reverseOrder string are the same
  return string === reverseOrder;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));