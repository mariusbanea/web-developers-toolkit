// Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

const { BinarySearchTree } = require("./BST-class");

const insertInts = [3, 1, 4, 6, 9, 2, 5, 7];
const insertChars = [
  "E",
  "A",
  "S",
  "Y",
  "Q",
  "U",
  "E",
  "S",
  "T",
  "I",
  "O",
  "N",
];

const numBST = new BinarySearchTree();
insertInts.forEach((int) => numBST.insert(int));

const letterBST = new BinarySearchTree();
insertChars.forEach((char) => letterBST.insert(char));

const findHeight = (tree) => {
  // if the tree is empty, return 0
  if (tree === null) return 0;
  else {
    // find L and R depths
    let leftDepth = findHeight(tree.left);
    let rightDepth = findHeight(tree.right);

    //return the greater value (depth) + 1 for the root node
    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      // if right is greater or they are the same, return the right
      return rightDepth + 1;
    }
  }
};

console.log(findHeight(numBST));

console.log(findHeight(letterBST));