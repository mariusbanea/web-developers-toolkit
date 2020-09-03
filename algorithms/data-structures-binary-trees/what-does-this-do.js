function tree(t) {
    if (!t) {
      return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
  }
  
  // I believe that this returns the sum of all the numbers in a tree!
  
  const { BinarySearchTree } = require("./BST-class");
  
  const testBST = new BinarySearchTree();
  
  [4, 1, 3, 5, 2].forEach((number) => testBST.insert(number));
  
  console.log(testBST);
  // I am wrong.
  console.log(tree(testBST));
  // console.log(tree(testBST));