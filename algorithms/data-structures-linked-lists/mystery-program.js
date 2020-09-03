// Analyze the following function (without running it in an IDE) to determine what
// problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    // start at the begining
    let current = lst.head;
    // iterate over linkedList
    while (current !== null) {
      // create a new variable at current item
      let newNode = current;
      // iterate to from current to the end
      while (newNode.next !== null) {
        // if there are duplicate/double values, skip them
        if (newNode.next.value === current.value) {
          // cutting out the duplicate node
          newNode.next = newNode.next.next;
        } else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  }
  
  // This program removes duplicate/double values from a linked list
  // It doesn't return anything but I guess it could be used to the solve the problem of skipping or removing doubled values?
  // I would have a time complexity of O(n * log(n))
  
  // The inner loop is indeed O(log n).  Here is an article with more details about O(log n): https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly#:~:text=A%20common%20algorithm%20with%20O,constant%20amount%20of%20additional%20work.
  // Putting the inner and out loops together gives you an algorithm with O(n * log n) complexity.