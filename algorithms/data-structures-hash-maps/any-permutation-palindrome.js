// // Any permutation a palindrome
// Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

// helper function - recursive permutation function
let anagrams = (string) => {
    // check if the input is a string
    if (!string || typeof string !== "string") {
      console.log("Please provide a string");
    } else if (string.length < 2) {
      return string;
    }
    // initiate a box (array) to hold the permutations
    let permutationsArray = [];
  
    // loop over letters
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      // handle repeating characters
      if (string.indexOf(char) !== i) {
        continue;
      }
      // get remaining characters
      let remainingChars =
        string.slice(0, i) + string.slice(i + 1, string.length);
      // recursive case - loop over the result of calling anagrams on remaining characters
      for (let permutation of anagrams(remainingChars)) {
        // push the resulting character and permutation to the output array
        permutationsArray.push(char + permutation);
      }
    }
  
    // return the output array
    return permutationsArray;
  };
  // console.log(anagrams("east"));
  
  let permutationContainsPalindrome = (string) => {
    let permutationsArray = anagrams(string);
    //   false until proven true
    let outBool = false;
    //   loop over the permutations and look for anagrams
    for (permutation of permutationsArray) {
      let reverseString = permutation.split("").reverse().join("");
      // if you find one, change the output to true
      if (permutation === reverseString) {
        outBool = true;
      }
    }
    return outBool;
  };
  
  // console.log(permutationContainsPalindrome("acecarr"));
  
  module.exports = {
    anagrams,
  };