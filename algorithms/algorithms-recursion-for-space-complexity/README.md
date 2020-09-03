# 1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence

```js
function countSheep(n) {
  if (n === 0) {
    return "All sheep jumped over the fence";
  }
  let result = n + ': Another sheep jumps over the fence\n'

  return result + countSheep(n - 1);
}
countSheep(3)
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence
```

# 2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

```js
function powerCalculator(base, exponent) {
  if (exponent <= 0) {
    return 'exponent should be >= 0';
  }

  if (exponent === 1) {return base}
  
  return base * powerCalculator(base, exponent - 1);
}
powerCalculator(10,2)
// 100
powerCalculator(10, -2)
// exponent should be >= 0
```

# 3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

```js
function reverseString(str) {
  if (str.length === 1) {return str};

  // Split the first char and the remaining chars
  const firstChar = str.charAt(0);
  const remainingStr = str.slice(1);

  // Concatinate the chars in reverse order
  return reverseString(remainingStr) + firstChar;
}
reverseString("Hello World")
// dlroW olleH
```

# 4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
```
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  
```

```js
function nthTriNum(n) { // nth Triangular Number
  const displayArray = [];
  for (let i = 0; i < n; i++) {
    displayArray.push('*');
  };
  console.log(displayArray);

  if (n === 1) {return n};

  // A triangular number is simply the result of adding what was added in the previous step, plus one.

  // In this case, n represents the number of steps executed. We can extrapolate backward to find the triangular number at that step.

  return nthTriNum(n - 1) + n;
}
```

# 5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]

```js
function stringSplitter(str, separator) {
  if (!str.includes(separator)) {return [str]};

  const seperatorIdx = str.indexOf(separator);
  const splitStr = str.slice(0, seperatorIdx);
  const remainingStr = str.slice(seperatorIdx + 1, str.length);

  // We go all the way down to the base case to get the array that we will use to contain all of our separated strings.
  const arr = stringSplitter(remainingStr, separator);

  // The reason this works is because the functions resolve in order during the backward phase. That is to say, each function returns an array to the function that called it.

  arr.unshift(splitStr);

  return arr;
}
stringSplitter("02/20/2020");
// [ '02/20/2020' ]
```

# 6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

```js
function fibonacci(n) { // Return the nth Fibonacci number
  if (n < 2) {return n};

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

# 7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

```js
function factorial(n) {
  if (n === 1) {return n};

  return n * factorial(n - 1);
}
```

# 8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

You can use the following mazes to test your program.
```js
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
```
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

```js
function recursiveMazeRunner(maze, x = 0, y = 0) {
  maze.forEach(row => console.log(row));
  console.log(' ');

  // Set up the base case
  if (maze[y][x] === 'e') { return ' and you made it!' };

  // Void our current location so we don't backtrack
  maze[y][x] = '@'; 

  // Check available spaces and move
  if ( maze[y][x - 1] && (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') ) {
    return 'L' + recursiveMazeRunner(maze, x - 1, y);
  };
  if ( maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e' ) {
    return 'R' + recursiveMazeRunner(maze, x + 1, y);
  };
  if ( maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e' ) {
    return 'D' + recursiveMazeRunner(maze, x, y + 1);
  };
  if ( maze[y - 1] && (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e') ) {
    return 'U' + recursiveMazeRunner(maze, x, y - 1);
  };

  // When no conditons are satisfied
  return ' you hit a wall!';
};
```

# 9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD

```js
/* 
Still working on this one! 
I used a slightly different solution than before, setting up an object that represents all available moves and calling the function on each move.
I think I'm close to a solution, but something isn't quite right yet
*/

function mazeRunnerAll(originMaze, x = 0, y = 0, path='') {
  const maze = [...originMaze]

  maze.forEach(row => console.log(row));
  console.log(' ');

  // Set up the base case
  if (maze[y][x] === 'e') { 
    let result = `Path to the exit: ${path}`
    console.log(result)
    return result };

  // Void our current location so we don't backtrack
  maze[y][x] = 'A'; 

  const availableMoves = {
    up: {
      char: 'U',
      location: [x, y - 1],
      contains: maze[y - 1] ? maze[y - 1][x] : '*',
    },
    down: {
      char: 'D',
      location: [x, y + 1],
      contains: maze[y + 1] ? maze[y + 1][x] : '*',
    },
    left: {
      char: 'L',
      location: [x - 1, y],
      contains: maze[y][x - 1] ? maze[y][x - 1] : '*',
    },
    right: {
      char: 'R',
      location: [x + 1, y],
      contains: maze[y][x + 1] ? maze[y][x + 1] : '*',
    },
  }
  // console.log(availableMoves)


  for (let prop in availableMoves) {
    let direction = availableMoves[prop]
    if (direction.contains !== '*' && direction.contains !== 'A') {
      let newPath = path + direction.char;
      console.log('Starting from ' + 'x:' + x + ' y:' + y)
      mazeRunnerAll(
        maze,
        direction.location[0], 
        direction.location[1],
        newPath
        )
    }
  }

  return;
};
```

# 10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

```js
function anagrams(str) {
  if (str.length === 1) {return str};

  const permutations = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if(str.indexOf(char) != i)
      continue;

    let remainingString = str.slice(0, i) + str.slice(i + 1, str.length)

    for (let subPermutation of anagrams(remainingString))
      permutations.push(char + subPermutation)
  }

  return permutations;
}
```

# 11. Organization Chart
Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

```js
Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
```

```js
function displayObject(data, tabs=0) {
  let fullString = ''; // We'll be recursively concatenating the object keys onto our string
  let tabString = ''; // Used to hold the number of \t characters we need depending on how deep into the recursion we are

  for (let i = 0; i < tabs; i++) { // Generate the correct number of \t characters
    tabString += '\t'
  }

    for (let el in data) {
        fullString += `\n${tabString}${el} ${this.displayObject(data[el], tabs + 1)}`;
    }

    return fullString;
}
```

# 12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

```js
function toBinary(num) {
  if (num == 0) {
    return 0;
  } else {
    return num % 2 + 10 * (toBinary(Math.floor(num / 2)))
  }
}
toBinary(25)
// 11001
```
