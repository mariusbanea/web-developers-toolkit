// 12. Iterative versions of recursive drills 1-7 from the last checkpoint
// Counting sheep iteratively
// This function is O(N)

const countingSheep = (num) => {
    for (let i = 0; i <= num; i++) {
      if (i === num) {
        console.log("All the sheep have cleared the fence");
      }
      console.log(`${i} sheep jumps over the fence`);
    }
  };
  // countingSheep(5);
  
  // Power calculator iteratively
  // This function is O(N)
  const powerCalculator = (num, pow) => {
    if (pow < 0) {
      return "Exponent should be >= 0";
    }
    let result = 1;
    for (let i = 0; i < pow; i++) {
      result *= num;
    }
    return result;
  };
  
  // console.log(powerCalculator(10, 2));
  
  // 3. Reverse String
  // Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
  // This function is O(N)
  const reverseString = (string) => {
    outString = "";
    for (let i = string.length; i > 0; i--) {
      console.log(string[i - 1]);
      outString += string[i - 1];
    }
    return outString;
  };
  // console.log(reverseString("coronavirus"));
  
  // 4. nth Triangular Number
  // Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
  // This algorithm is O(N)
  const triangleNumber = (num) => {
    outNum = 0;
    for (let i = 0; i <= num; i++) {
      outNum += i;
    }
    return outNum;
  };
  // console.log(triangleNumber(4));
  
  // 5. String splitter
  // O(N)
  const stringSplit = (string, delimiter) => {
    let str = string.trim();
    let words = [];
    let index = str.indexOf(delimiter);
  
    if (index < 0) {
      words.push(str);
      return words;
    }
  
    while (index >= 0) {
      words.push(str.substring(0, index + 1));
      str = str.slice(index + 1);
      index = str.indexOf(delimiter);
    }
    words.push(str);
    return words;
  };
  
  // 6. Fibonacci
  // This algorithms in O(N)
  // Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
  const fibonacci = (num) => {
    result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      } else if (i === 2) {
        result.push(1);
      } else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  };
  
  // console.log(fibonacci(10));
  
  // 7. Factorial
  // Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
  const factorial = (num) => {
    result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  };
  // console.log(factorial(3));