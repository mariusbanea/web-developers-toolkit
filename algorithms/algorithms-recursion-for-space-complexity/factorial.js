// a recursion is a function calling itself
/*
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/
function factorial(n) {

    // terminate the recursion once we hit zero
    if (n === 0) {
        console.log('the recursion has reached ' + 0);
        return 1;
    }

    // otherwise keep calling the function recursively
    else {
        console.log("inside the recursion n = " + n)
        // the function calls itself
        return factorial(n - 1) * n;
    }
}

console.log(factorial(5));
