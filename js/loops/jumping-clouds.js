/*
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads (1) and others are cumulus (0). The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus or

. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered
if they are safe or if they must be avoided. 
*/

let array = [0, 0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  let count = 0;
  //get throu each cloud one by one
  for (let i = 0; i < c.length; i++) {
    //if the current cloud is a good one
    if (c[i] === 0) {
      //check if the next cloud is also good before jumping to it
      if (c[i] === c[i + 1]) {
        count++;
        i++;
      }
    } 
    //if the next cloud is not a good one check the following cloud to it
    else {
      count++;
    }
  }
  //return the numbers of steps
  return count;
}

console.log(jumpingOnClouds(array));