'use strict';
/* Exercise 5: Split a string based upon a separator (similar to String.prototype.split).
*/

// Empty string and no separator, e.g., separator('', '')
// No separator provided; separator('string')
// String with an empty string for separator, separator('s t r i n g', '')
// String with a single character separator, separator('string,aaa,', ',')
// String when separtor is not at the end of string, separator('string,aaa', ',')
// Multi character separator, separator('stringggstring', 'ggg')
// Multi character separator when not at the end of string, separator('street', 'ee')

let separator = (str, sep, arr, str2) => {
  arr = arr || [];
  str2 = str2 || '';

  // if (str.length === 0 && str2.length !== 0) {
  // return separator2(str.substring(1, str.length), sep, arr.concat(str2), '');
  // }

  // when no separator is passed or empty is string is passed in
  if (!str) return arr.concat(str2);

  if (sep === '') {
    return separator(str.substring(1, str.length), sep, arr.concat(str[0]));
  }

  // adds next char to str2 when its not equal to sep
  if (str.substring(0, sep.length) === sep) {
    return separator(str.substring(sep.length, str.length), sep, arr.concat(str2), '');
  }

    return separator(str.substring(1, str.length), sep, arr, str2.concat(str[0]));
};

function sep(str, sep) {console.log(str, " divided by ", sep); console.log(separator(str, sep));}

sep('', '');
sep('string', '');
sep('sweet', 'e');
sep('stringggstring', 'ggg');
