// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

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

// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

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

  // Handle for when no conditons are satisfied
  return ' you hit a wall!';
};
console.log(recursiveMazeRunner(maze));
