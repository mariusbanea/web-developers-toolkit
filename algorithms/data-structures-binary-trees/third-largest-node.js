// 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

const findThirdLargest = (BST) => {
    // if the tree is empty, return null
    //   if (BST === 0) return null;
    // create an array to hold values
    let results = [];
    // traverse function
    const _traverse = (node) => {
      // base case to stop recursion when  undefined
      if (node.left) {
        //
        _traverse(node.left);
      }
      // push the value to the results array
      results.push(node.value);
      // do the same thing for the right?!?!
      if (node.right) {
        _traverse(node.right);
      }
    };
  
    _traverse(BST);
    if (results.length < 3) {
      return "The tree has less than 3 nodes";
    } else {
      return results.sort((a, b) => b - a)[2];
    }
  };
  
  const { BinarySearchTree } = require("./BST-class");
  
  const addItems = [3, 1, 4, 6, 9, 2, 5, 7];
  let testBST = new BinarySearchTree();
  
  addItems.forEach((item) => testBST.insert(item, item));
  console.log(testBST);
  console.log(findThirdLargest(testBST));