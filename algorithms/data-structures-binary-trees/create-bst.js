const BinarySearchTree = require("./BST-class");

const addItems = [3, 1, 4, 6, 9, 2, 5, 7];

const numBST = new BinarySearchTree();

addItems.forEach((item) => {
  numBST.insert(item);
});

const letterBST = new BinarySearchTree();
const addString = "E A S Y Q U E S T I O N";
addString.split("").forEach((letter) => {
  letterBST.insert(letter);
});

// console.log(numBST);
console.log(letterBST);