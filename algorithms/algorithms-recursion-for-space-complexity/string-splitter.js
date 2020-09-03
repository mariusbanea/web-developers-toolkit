// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function stringSplitter(str, separator) {
  if (!str.includes(separator)) {return [str]};

  const seperatorIdx = str.indexOf(separator);
  const splitStr = str.slice(0, seperatorIdx);
  const remainingStr = str.slice(seperatorIdx + 1, str.length);

  // We go all the way down to the base case to get the array that we will use to contain all of our separated strings.
  const arr = stringSplitter(remainingStr, separator);
  // The reason this works is because the functions resolve in order during the backward phase. That is to say, each function returns an array to the function that called it.
  
  // Logger is just here to help visual what is happening.
  console.log(arr);

  arr.unshift(splitStr);

  return arr;
}
stringSplitter('02/20/2020/4/5/6/7', '/');
