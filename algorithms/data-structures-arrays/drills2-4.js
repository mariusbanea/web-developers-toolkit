const Array = require("./array");

// 2. Explore the push() method
// What is the length, capacity and memory address of your array?
// Add the following in the main function and then print the array:
// Answer, your capacity and length start out at 0, after adding 1, you have a length of 3 and capacity is tripled, you can keep adding until you run out of capacity then the capacity is tripled again and the array has to be 'moved' in memory to a new addresss.

// 3. Exploring the pop() method
// When you pop, you reduce length but not capacity and memory address isn't changed. There was no need to call the _resize method to change capacity or move the array.

// 4. Understanding more about how arrays work
// Print the 1st item in the array arr.

// Empty the array and add just 1 item: arr.push("tauhida");

// Print this 1 item that you just added. What is the result? Can you explain your result?
// ANSWER - This returns NaN: The get() returns the memory address of 'tauhida' because when we push a string into Float64(1024) memory it is not a flaot value so it is stored as NaN since that's a number type.

// What is the purpose of the _resize() function in your Array class?
// This ensures that we don't run out of memory and allocates enough memory to handle the array. When the new array size is larger than the current capacity, we copy the array to a new memory address and expand the size of the array by the constant SIZE_RATIO + 1 to create a buffer

function main() {
  Array.SIZE_RATIO = 3;
  //   instantiate the array class
  let arr = new Array(3, 5, 19);
  arr.push(3);
  arr.push(5);
  arr.push(19);

  // Print the 1st item in the array arr
  console.log(arr.get(0));
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.remove(i);
  }
  console.log(arr);
  arr.push("tauhida");
  console.log(arr.get(0));
}

main();


