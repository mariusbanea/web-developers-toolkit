// Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

// return boolean
const balancedBST = (BST) => {
    // helper function - recursive - find the smallest depth
    const _minDepth = (node) => {
      //   base case - return 0 at the end
      if (node === null) {
        return 0;
      }
      // recursively call _minDepth on left and right
      return 1 + Math.min(_minDepth(node.left), _minDepth(node.right));
    };
    // Helper function to find the largest depth
    const _maxDepth = (node) => {
      // Return 0 if we hit a dead end
      if (node === null) {
        return 0;
      }
      // Recursively call the maximum of the left and right nodes
      return 1 + Math.max(_maxDepth(node.left), _maxDepth(node.right));
    };
    // return true if original BST is empty as this is balanced.
    if (BST === null) {
      return true;
    }
    //   find max and subtract the min and SEE IF IT'S TRUTHY?
    //   If balanced, min and max are the same or within 1???
    console.log(_maxDepth(BST));
    console.log(_minDepth(BST));
    return _maxDepth(BST) - _minDepth(BST) <= 1;
  };
  
  //SET UP
  const { BinarySearchTree } = require("./BST-class");
  
  const insertInts = [1, 2, 3, 4, 5, 6, 7, 8];
  const BSTint = new BinarySearchTree();
  insertInts.forEach((int) => BSTint.insert(int, int));
  
  const insertInts2 = [50, 25, 75, 12, 100, 60];
  const BSTint2 = new BinarySearchTree();
  insertInts2.forEach((int) => BSTint2.insert(int, int));
  
  console.log(balancedBST(BSTint)); // Expects false
  console.log(balancedBST(BSTint2)); // Expects true