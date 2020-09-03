// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

const { HashMap } = require("./Hashmap-class");
const { anagrams } = require("./any-permutation-palindrome");

const groupAnagrams = (array) => {
  // create a HashMap to store letter combos
  let combos = new HashMap();
  // iterate over words in the input array
  array.forEach((word) => {
    // sort the characters of the word. this gives us a unique anagram key
    let sortedWord = word.split("").sort().join("");
    // if we don't have a key for the sorted word...
    if (!combos.get(sortedWord)) {
      // create the key and set the word as our value in an array
      combos.set(sortedWord, [word]);
    } else {
      // add the word to our key's value with spread operator
      combos.set(sortedWord, [...combos.get(sortedWord), word]);
    }
  });
  //   seems like we aren't hashing all of them...
  console.log(combos);

  //   setup an array to return
  let outArray = [];
  // iterate through the slots in the hashtable
  combos._hashTable.forEach((slot) => {
    // if the slot has something in it
    if (slot) {
      // add the array to the outArray
      outArray.push(slot.value);
    }
  });
  return outArray;
};

console.log(
  groupAnagrams(["east", "cars", "acre", "arcs", "teas", "eats", "race"])
);