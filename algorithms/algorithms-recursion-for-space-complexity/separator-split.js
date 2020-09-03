'use strict';
/* Exercise 5:
Write a recursive function that split a string based on a separator (similar to String.prototype.split).
*/

let separator = (str, sep, arr, str2) => {
  arr = arr || [];
  str2 = str2 || '';

  // when no separator is passed
  if (!sep && sep !== '') return arr;

  // when no string is passed
  if (!str && !str2) return arr;

  // when str is finished but str2 still has a string in it
  if (!str && str2) {
    arr.push(str2);
    return arr;
  }

  // adds next char to str2 when its not equal to sep
  if (str.substring(0, sep.length) !== sep) {
    str2 = str2.concat(str[0]);
  }
  // when it matches sep or when sep is an empty string
  if (str.substring(1, sep.length + 1) === sep || sep === '') {
    arr.push(str2);
    str2 = '';
  }

  // chooses next str to pass to recursion
  // if str matches sep it will choose substring beyond the sep
  if (str.substring(0, sep.length) === sep) {
    str = str.substring (sep.length, str.length);
  } else { // else it will do the next char to the end of string
    str = str.substring(1, str.length);
  }
  // calls recursively
  return separator(str, sep, arr, str2);
}

console.log(separator('monkey is happy', ' '));
