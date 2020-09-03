// Tower of Hanoi
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

// signature of fn is num of params, types,

const towerOfHanoi = (height, sourceRod, destinationRod, auxRod) => {
    // base case - all the disks have been moved
    if (height === 0) {
      return;
    }
    // recursive case - there are disks on the peg
    towerOfHanoi(height - 1, sourceRod, auxRod, destinationRod);
    console.log(`Move disk from ${sourceRod} to ${destinationRod}`);
    towerOfHanoi(height - 1, auxRod, destinationRod, sourceRod);
  };
  
  // Function call:
  console.log(`\n3 disks:`);
  towerOfHanoi(3, "A", "C", "B");
  
  console.log(`\n4 disks:`);
  towerOfHanoi(4, "A", "C", "B");
  
  console.log(`\n5 disks:`);
  towerOfHanoi(5, "A", "C", "B");