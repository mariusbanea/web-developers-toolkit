//Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
// Add Tauhida to the list.
// Remove Husker from the list.
// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific position in the linked list.
// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

const { LinkedList, _Node } = require("../LinkedList.js");

const main = () => {
  let SLL = new LinkedList();
  //
  const itemsToAdd = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];
  itemsToAdd.forEach((item) => SLL.insertLast(item));
  //Add Tauhida and remove husker
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  // Add Athena before Boomer using your insertBefore() function.
  SLL.insertBefore("Athena", "Boomer");
  // Add Hotdog after Helo using the insertAfter() method.
  SLL.insertAfter("Hotdog", "Helo");
  // Using the insertAt() method insert Kat in the 3rd position of the list.
  SLL.insertAt("Kat", 3);
  // Remove Tauhida from the list.
  SLL.remove("Tauhida");

  // console.log(SLL);
  return SLL;
};

main();

module.exports = { main };