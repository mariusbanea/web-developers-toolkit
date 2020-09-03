// DO NOT run the following code before solving the problem.

// What is the output of the following code? explain your answer.
const { HashMap } = require("./Hashmap-class");

const WhatDoesThisDo = function () {
  // create new strings
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  // make a new hashmap
  let map1 = new HashMap();
  // put them in the hashmap with numeric values
  map1.set(str1, 10);
  map1.set(str2, 20);
  // create a second hashmap
  let map2 = new HashMap();
  // copy the strings
  let str3 = str1;
  let str4 = str2;
  // store the strings with reverse values
  map2.set(str3, 20);
  map2.set(str4, 10);
  // retrieve the values - 10 and then 20 except that because there is a collision, the order isn't preserved
  // When you set the second item in each map, it collides with the first and shifts it over.
  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
// Why does this reverse the order??!
WhatDoesThisDo();