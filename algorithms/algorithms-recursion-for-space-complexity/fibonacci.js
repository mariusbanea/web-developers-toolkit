'use strict';

/* Exercise 6: Calculates the nth triangular number.
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/



//classical solution time complexity O(n)
function classic_fibonacci(num) {
    let a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        console.log(temp, a, b, num)
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
};
console.log(classic_fibonacci(15))




//recursive solution
function recursive_fibonacci(num) {
    if (num <= 1) return 1;
    console.log(num)
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(recursive_fibonacci(5))




// memoziation solution
function memoziation_fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    console.log(memo)

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
console.log(memoziation_fibonacci(5))
