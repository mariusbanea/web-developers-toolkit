'use strict';

/*
Exercise 2: Take an array as input which contains an unknown set of numbers,
and output an array which doubles the values of each item in that array.
Test your solution by trying a handful of different arrays. Don't worry about
error checking to make sure that the array you're given is valid input.
 */

let doubleArr = (arr, arr2) => {
	arr2 = !arr2 ? [] : arr2;

	if (arr.length === 0) return arr2;

	arr2.push(arr[0] * 2);
	arr.shift();

	return doubleArr(arr, arr2);
}

console.log(doubleArr([234, 24, 5]));
