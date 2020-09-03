const { Stack } = require("./stack-class");
const helperFuncs = require("./stack-methods");

const parentheses = (exp) => {
  // Setup our new stack
  let stack = new Stack();

  // Setup values for comparison logic
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let revMap = {};
  for (let key in map) {
    if (!revMap.hasOwnProperty(key)) revMap[map[key]] = key;
  }

  let parentheses = [`'`, `"`];
  let openTags = Object.keys(map);
  let closeTags = Object.keys(revMap);

  // Iterate through the expression
  for (let i = 0; i < exp.length; i++) {
    // If we have a quote in our stack and we haven't found the matching quote, just move forward
    if (
      !helperFuncs.isEmpty(stack) && // Not empty
      parentheses.includes(helperFuncs.peek(stack).data) && // Stack top is a quote
      helperFuncs.peek(stack).data !== exp[i] // Current index does not match the quote
    ) {
      // Move forward with the loop
      continue;
    } else if (
      !helperFuncs.isEmpty(stack) &&
      helperFuncs.peek(stack).data === exp[i]
    ) {
      stack.pop();
      continue;
    }

    // If we encounter a quote
    if (parentheses.includes(exp[i])) {
      // Push the quote to the stack and continue
      stack.push(exp[i]);
      continue;
    }

    // If we encounter an open parentheses tag
    if (openTags.includes(exp[i])) {
      stack.push(exp[i]);
    }

    // If we encounter a closing parentheses tag
    if (closeTags.includes(exp[i])) {
      if (stack.top === null) {
        return `Unexpected closing tag ${exp[i]} at position ${i}.`;
      }

      let last = stack.pop();
      if (exp[i] !== map[last]) {
        return `Missing closing tag for ${exp[i]} at position ${i}. Expected ${map[last]}.`;
      }
    }
  }
  if (!helperFuncs.isEmpty(stack))
    return `Missing closing tag for ${stack.pop()}`;
  return `Expression is valid`;
};

console.log(parentheses("{test}[okay](), )"));

const isMatchingBrackets = function (str) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // loop over the characters in the string
  for (let i = 0; i < str.length; i++) {
    // If character is an opening brace add it to a stack
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (str[i] !== map[last]) {
        return false;
      }
    }
  }
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

console.log(isMatchingBrackets("(){}")); // returns true
console.log(
  isMatchingBrackets(
    "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"
  )
); // returns true
console.log(isMatchingBrackets("({(()))}}")); // returns false