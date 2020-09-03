'use strict';

/* Exercise 1: Take an integer as input, and return a boolean indicating whether the value is even or odd. */

let isEven = (int) => {
	if (int === 0) {
		return true;
	} else if (int === 1) {
		return false;
	}

	int = int - 2;

	return isEven(int);
}

console.log(isEven(0));

/*----------- INITIAL SOLUTION ------------*/

// let isEven = (int, even) => {
// 	if (even) {
// 		return even;
// 	} else if (even == false) {
// 		return even;
// 	}

// 	if (int % 2 === 0) {
// 		even = true;
// 	} else {
// 		even = false;
// 	}

// 	return isEven(int, even);
// }

// console.log(isEven(0));