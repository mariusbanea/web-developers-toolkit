// Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

const isBST = (tree) => {
    // Why is this true?
    // base case for recursion - bottom of the tree
    if (!tree.left && !tree.right) {
      return true;
    }
    // if it has a left
    if (tree.left) {
      // If the left value is greater or equal than it's not a BST
      if (tree.left.value >= tree.value) {
        return false;
      }
      // move down the tree recursively
      isBST(tree.left);
    }
    if (tree.right) {
      if (tree.right <= tree.value) {
        return false;
      }
      isBST(tree.right);
    }
  
    //default
    return true;
  };
  
  const { BinarySearchTree } = require("./BST-class");
  
  // create valid BST
  const addItems = [3, 1, 4, 6, 9, 2, 5, 7];
  let testBST = new BinarySearchTree();
  
  addItems.forEach((item) => testBST.insert(item));
  
  console.log(isBST(testBST));
  
  // create invalid BST to test???